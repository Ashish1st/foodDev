import React from "react";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <>
      <footer className="bg-white dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Company
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <h1 className=" hover:underline">About</h1>
                </li>
                <li className="mb-4">
                  <h1 className="hover:underline">Careers</h1>
                </li>
                <li className="mb-4">
                  <h1 className="hover:underline">Brand Center</h1>
                </li>
                <li className="mb-4">
                  <h1 className="hover:underline">Blog</h1>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Help center
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <h1 className="hover:underline">Discord Server</h1>
                </li>
                <li className="mb-4">
                  <h1 className="hover:underline">Twitter</h1>
                </li>
                <li className="mb-4">
                  <h1 className="hover:underline">Facebook</h1>
                </li>
                <li className="mb-4">
                  <h1 className="hover:underline">Contact Us</h1>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <h1 className="hover:underline">Privacy Policy</h1>
                </li>
                <li className="mb-4">
                  <h1 className="hover:underline">Licensing</h1>
                </li>
                <li className="mb-4">
                  <h1 className="hover:underline">Terms &amp; Conditions</h1>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Download
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <h1 className="hover:underline">iOS</h1>
                </li>
                <li className="mb-4">
                  <h1 className="hover:underline">Android</h1>
                </li>
                <li className="mb-4">
                  <h1 className="hover:underline">Windows</h1>
                </li>
                <li className="mb-4">
                  <h1 className="hover:underline">MacOS</h1>
                </li>
              </ul>
            </div>
          </div>
          <div className="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
              <img src={assets.logo} alt="logo" />
            </span>
            <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
              <span className="w-[40px]">
                <img
                  className="w-full object-cover mt-2 md:mt-0"
                  src={assets.facebook_icon}
                  alt="facebooke-icon"
                />
              </span>
              <span className="w-[40px]">
                <img
                  className="w-full object-cover mt-2 md:mt-0"
                  src={assets.twitter_icon}
                  alt="twitter-icon"
                />
              </span>
              <span className="w-[40px]">
                <img
                  className="w-full object-cover mt-2 md:mt-0"
                  src={assets.linkedin_icon}
                  alt="Linkedin-icon"
                />
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
