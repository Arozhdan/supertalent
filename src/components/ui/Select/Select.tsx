import cn from "classnames";
import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import styles from "./Select.module.css";
import type { SelectOption, SelectProps } from "./Select.props";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

export const Select = ({
  className,
  color = "primary",
  variant = "outlined",
  options,
  size,
}: SelectProps) => {
  const [selected, setSelected] = useState(options[0]);
  const [query, setQuery] = useState("");

  const filteredOptions =
    query === ""
      ? options
      : options.filter((option) =>
          option.label
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <Combobox value={selected} onChange={setSelected}>
      <div
        className={cn(
          styles.inputWrapper,
          className,
          styles[color],
          styles[variant],
          className
        )}
      >
        <div className={styles.inputContainer}>
          <Combobox.Input
            size={size}
            className={styles.input}
            displayValue={(option: SelectOption) => option.label}
            onChange={(event) => setQuery(event.target.value)}
          />
          <Combobox.Button className={styles.button}>
            <ChevronUpDownIcon className={styles.icon} aria-hidden="true" />
          </Combobox.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease duration-300 z-10"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition ease duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0 z-10"
          afterLeave={() => setQuery("")}
        >
          <Combobox.Options className={styles.options}>
            {filteredOptions.length === 0 && query !== "" ? (
              <div className={styles.nothingFound}>Nothing found.</div>
            ) : (
              filteredOptions.map((option) => (
                <Combobox.Option
                  key={option.value}
                  className={cn(
                    styles.option,
                    `${option.label === selected?.label ? styles.active! : ""}`
                  )}
                  value={option}
                >
                  {({ selected }) => (
                    <>
                      <span className={`block truncate `}>{option.label}</span>
                      {selected ? (
                        <span
                          className={
                            "absolute inset-y-0 left-0 flex items-center pl-3 text-teal-500"
                          }
                        >
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </Transition>
      </div>
    </Combobox>
  );
};
