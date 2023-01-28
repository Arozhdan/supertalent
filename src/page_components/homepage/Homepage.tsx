import cn from "classnames";
import Image from "next/image";
import { Navbar } from "@/components";
import { Button, List, ListItem, MyLink, Paper } from "@/components/ui";
import { Typography } from "@/components/ui/Typography/Typography";
import styles from "./Homepage.module.css";
import { Callout } from "@/components/Callout/Callout";
import { StatCard } from "@/components/StatCard/StatCard";
import { ProfileAvatar } from "@/components/ProfileAvatar/ProfileAvatar";

export const HomePage = () => {
  return (
    <div className={styles.homepage}>
      <Navbar />
      <header>
        <div className="container mx-auto flex h-full flex-col justify-center pl-0 md:pl-12 xl:pl-24">
          <div className="max-w-2xl">
            <Typography
              tag="span"
              styling="caption"
              className="text-secondary-light"
            >
              For companies
            </Typography>
            <Typography tag="heading" variant="h1" className="text-white">
              Right Talent. Right role.
            </Typography>
            <Typography
              tag="paragraph"
              styling="body"
              className="text-secondary-lighter"
            >
              Supertalent connects the right talent with the right role, <br />
              going beyond job descriptions and locations.
            </Typography>
            <div className="mt-8">
              <Button color="primary" size="large">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </header>
      <main className="container mx-auto grid grid-cols-1 gap-8">
        <Paper>
          <Typography
            tag="heading"
            variant="h2"
            className="text-center text-dark"
          >
            How we do it
          </Typography>
          <div className="flex items-center justify-between">
            <Image
              src="https://cdn.supertalent.io/static/media/web_our-why-2-cbc5c621f5664094-300.webp"
              width={270}
              height={270}
              alt="How we do it?"
            />
            <Typography tag="paragraph" styling="body" className="max-w-2xl">
              Supertalent <b>provides a holistic approach</b> to considering
              potential talents by matching a shared set of values and an
              overall culture fit that takes in more than just a job
              description. We use
              <b>behavioral tests</b> and artificial intelligence to provide the
              best possible matches. <br /> <br />
              We also understand that having the right combination of
              personalities is essential for an organization’s health and
              longevity. Our <a href="#team-assessments">
                team assessments
              </a>{" "}
              guide you to the right candidates that fit your organizational
              structures and plans for the future.
            </Typography>
          </div>
        </Paper>
        <Paper>
          <Typography
            tag="heading"
            variant="h2"
            className="text-center text-dark"
          >
            The Supertalent Advantage
          </Typography>
          <div className="flex items-center justify-between">
            <div className="max-w-lg">
              <Typography tag="heading" variant="h3" className="text-dark">
                🎯 Shared values matter. Find them more easily.
              </Typography>
              Comprehensive <a href="#behavioral-test">behavioral tests</a> make
              it easier to understand why a talent is a good fit for your
              organization. They also ensure your future employee’s happiness
              and their continued engagement with your mission.
              <List>
                <ListItem>
                  Find talent with shared values quicker and easier.
                </ListItem>
                <ListItem>
                  Increase your chances of hiring the right talent for the right
                  role.
                </ListItem>
                <ListItem>Lower your turnover rate.</ListItem>
              </List>
              Our advanced data modeling using artificial intelligence has been
              built to save you time and focus your efforts on finding the best
              candidates for the roles you need.
              <List>
                <ListItem>
                  <b>Time is money.</b> Find talent in days, not weeks or
                  months.
                </ListItem>
                <ListItem>
                  <b>Relevancy matters.</b> See right away if a talent is a good
                  fit.
                </ListItem>
                <ListItem>
                  <b>Talent curation.</b> Provide a better candidate experience
                  more easily.
                </ListItem>
              </List>
            </div>
            <Image
              src="/screens.png"
              alt="How we do it"
              width={448}
              height={359}
            />
          </div>
          <Callout
            className="mt-14"
            title="Interested? Create your profile in less than two minutes and start hiring right away!"
            link={{
              label: "Get Started",
              url: "/signup",
            }}
          />
        </Paper>
        <Paper>
          <Typography
            tag="heading"
            variant="h2"
            className="text-center text-dark"
          >
            The Supertalent Advantage
          </Typography>
          <div className="flex items-center justify-between">
            <Image
              src="https://cdn.supertalent.io/static/media/team-testing_v3-6dc101c0d8420435-452.webp"
              alt="How we do it"
              width={452}
              height={307}
            />
            <div className="max-w-lg">
              <Typography tag="heading" variant="h3" className="text-dark">
                👨‍👩‍ Make a good team great with team assessments
              </Typography>
              <b>Boost your team’s performance</b> by uncovering the right
              balance of personalities and shared values you need to fulfill
              your mission. Drive ownership, personal development and build an
              environment of trust throughout your team.
              <List>
                <ListItem>
                  Find talent with shared values quicker and easier.
                </ListItem>
                <ListItem>
                  Increase your chances of hiring the right talent for the right
                  role.
                </ListItem>
                <ListItem>Lower your turnover rate.</ListItem>
              </List>
            </div>
          </div>
          <Callout
            className="mt-14"
            title="Interested? Create your profile and try a free assessment!"
            link={{
              label: "Free Assessment",
              url: "/signup",
            }}
          />
        </Paper>
        <Paper variant="glass">
          <Typography
            tag="heading"
            variant="h2"
            className="text-center text-white"
          >
            Our Stats In Numbers
          </Typography>
          <div className="mt-20 mb-16 grid grid-cols-12 gap-4">
            <StatCard
              className="col-span-6"
              value="1m+"
              label="views for all jobs"
              icon="💼"
              image="https://cdn.supertalent.io/static/media/web-great-talent-at-your-fingertips-8c8b8b875a5d793a-2279.png"
            />
            <StatCard
              className="col-span-3"
              value="20k+"
              label="registered talents"
              icon="👔"
            />
            <StatCard
              className="col-span-3"
              value="150+"
              label="registered companies"
              icon="🏭"
            />

            <StatCard
              className="col-span-3"
              value="63%"
              label="candidate relevancy"
              icon="📈"
            />
            <StatCard
              className="col-span-3"
              value={
                <>
                  14 <small>days</small>
                </>
              }
              label="avg. time to hire"
              icon="⏱"
            />
            <StatCard
              className="col-span-6"
              value={
                <>
                  30 <small>hours</small>
                </>
              }
              label="saved in hiring process"
              icon="⏰"
              image="https://cdn.supertalent.io/static/media/web_transparent-pricing-fc8bf6ceb4788f59-1908.png"
            />
          </div>
          <div className="flex justify-center">
            <MyLink href="/signup" color="secondary">
              Post a Job
            </MyLink>
          </div>
        </Paper>
        <Paper>
          <Typography
            tag="heading"
            variant="h2"
            className="text-center text-dark"
          >
            Find Great Talent In{" "}
            <span className="text-primary">IT Engineering</span>
          </Typography>
          <div className="mt-20 mb-16 flex items-start justify-between">
            <ProfileAvatar
              name="Mike"
              role="Frontend developer"
              image="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            />
            <ProfileAvatar name="Jakub" role="Backend developer" />
            <ProfileAvatar
              name="Murat"
              role="Frontend developer"
              image="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            />
            <ProfileAvatar
              name="Lisa"
              role="HTML coder"
              image="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80"
            />
            <ProfileAvatar name="Artem" role="Senior frontend developer" />
            <ProfileAvatar
              name="Venya"
              role="Fullstack developer"
              image="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            />
          </div>
          <div className="flex justify-center">
            <MyLink href="/signup" color="secondary">
              Find Talent
            </MyLink>
          </div>
        </Paper>
      </main>
    </div>
  );
};
