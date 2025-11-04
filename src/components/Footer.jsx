import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Fragment>
      <footer class="bg-white rounded-lg shadow-sm dark:bg-gray-900 m-4">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2025{" "}
            <Link to="/" class="hover:underline">
              Fliptrazon™
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </Fragment>
  );
}
