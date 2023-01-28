import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { Secular_One, Noto_Sans } from "@next/font/google";
import { api } from "../utils/api";

import "../styles/globals.css";
const secularOne = Secular_One({
  display: "swap",
  weight: "400",
  subsets: ["latin"],
});
const notoSans = Noto_Sans({
  display: "swap",
  weight: ["400", "700", "900"],
  subsets: ["latin"],
});
const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <div className={notoSans.className}>
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
