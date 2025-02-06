"use client";

import { useState } from "react";
import { ChevronDownIcon, SunIcon, MoonIcon } from "@heroicons/react/16/solid";
import { Field, Label, Switch } from "@headlessui/react";

export default function Contact() {
  const [theme, setTheme] = useState("light");
  const [agreed, setAgreed] = useState(false);
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
  };

  const isDark = theme === "dark";

  return (
    <div className={`${isDark ? "bg-gray-800 text-white" : "bg-white text-black"} min-h-screen py-2 px-4 sm:px-6`}>
       <div className="max-w-lg mx-auto px-4 sm:px-4">
      <div className="flex justify-end mb-4">
          <button
            onClick={toggleTheme}
            className={`flex items-center gap-2 px-4 py-2 rounded-md shadow-md ${
              isDark ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
            } hover:opacity-90`}
          >
            {isDark ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
            {isDark ? "Mode clair" : "Mode sombre"}
          </button>
        </div>
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-500">Contact us</h1>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label
                htmlFor="firstName"
                className="block mb-2 text-sm font-medium"
              >
                Username 
              </label>
              <input
                id="firstName"
                type="text"
                value={formState.firstName}
                onChange={(e) =>
                  setFormState({ ...formState, firstName: e.target.value })
                }
                className={`w-center px-3 py-2 border rounded-md shadow-sm ${
                  isDark
                    ? "bg-gray-700 text-white border-gray-600 placeholder-gray-500 focus:border-blue-400 focus:ring-blue-400"
                    : "bg-white text-black border-gray-300 placeholder-gray-400 focus:border-blue-400 focus:ring-blue-400"
                }`}
                placeholder="Entrez votre prénom"
              />
            </div>
            <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={formState.email}
              onChange={(e) =>
                setFormState({ ...formState, email: e.target.value })
              }
              className={`w-center px-3 py-2 border rounded-md shadow-sm ${
                isDark
                  ? "bg-gray-700 text-white border-gray-600 placeholder-gray-500 focus:border-blue-400 focus:ring-blue-400"
                  : "bg-white text-black border-gray-300 placeholder-gray-400 focus:border-blue-400 focus:ring-blue-400"
              }`}
              placeholder="Entrez votre adresse email"
            />
            </div>
          </div>
          <div>
            <label htmlFor="company" className="block mb-2 text-sm font-medium">
              Rating
            </label>
            <input
              id="company"
              type="number"
              value={formState.company}
              onChange={(e) =>
                setFormState({ ...formState, company: e.target.value })
              }
              className={`w-center px-3 py-2 border rounded-md shadow-sm ${
                isDark
                  ? "bg-gray-700 text-white border-gray-600 placeholder-gray-500 focus:border-blue-400 focus:ring-blue-400"
                  : "bg-white text-black border-gray-300 placeholder-gray-400 focus:border-blue-400 focus:ring-blue-400"
              }`}
              placeholder="Entrez le nom de votre compagnie"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              value={formState.message}
              onChange={(e) =>
                setFormState({ ...formState, message: e.target.value })
              }
              className={`w-center px-3 py-2 border rounded-md shadow-sm ${
                isDark
                  ? "bg-gray-700 text-white border-gray-600 placeholder-gray-500 focus:border-blue-400 focus:ring-blue-400"
                  : "bg-white text-black border-gray-300 placeholder-gray-400 focus:border-blue-400 focus:ring-blue-400"
              }`}
              placeholder="Entrez votre message"
            />
          </div>
          <Field className="flex gap-x-4">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className={`group flex w-11 flex-none cursor-pointer rounded-full p-px transition-colors duration-200 ease-in-out ${
                  agreed
                    ? "bg-blue-500"
                    : isDark
                    ? "bg-gray-600"
                    : "bg-gray-300"
                }`}
              >
                <span className="sr-only">Accept conditions</span>
                <span
                  aria-hidden="true"
                  className={`size-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-600/60 transition duration-200 ease-in-out ${
                    agreed ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </Switch>
            </div>
            <Label className="text-sm">
              BY checking this box , you accept our {" "}
              <a href="#" className="font-semibold text-blue-500">
                privacy policy
              </a>
            </Label>
          </Field>
          <button
            type="submit"
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg"
          >
           Send
          </button>
          
        </form>
      </div>
    </div>
  );
}
