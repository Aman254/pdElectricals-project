import React from "react";

const footer = () => {
  return (
    <footer class="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
      <div class="mx-auto max-w-screen-xl text-center">
        <span className="font-bold text-4xl text-white">PDElectricals</span>
        <p class="my-6 text-gray-500 dark:text-gray-400">
          Bringing expert home services right to your doorstep, In Mathura
        </p>
        <ul class="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">
              Join
            </a>
          </li>
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6 ">
              Contact
            </a>
          </li>

          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">
              Login
            </a>
          </li>
        </ul>
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023-2025{" "}
          <a href="#" class="hover:underline">
            PDElectricals™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default footer;
