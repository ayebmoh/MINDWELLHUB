import React from "react";

function Dropmen() {
  return (
    <div className="w-full" id="navbar-hamburger">
      <ul className="flex flex-col font-medium mt-4 rounded-lg dark:bg-gray-800 dark:border-gray-700">
        <li>
          <a
            href="/"
            className="block py-2 px-3 text-gray-400 hover:bg-blue-700 rounded dark:text-gray-400 dark:hover:bg-blue-700 dark:hover:text-gray-400"
            aria-current="page"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="https://enit.ieee.tn/?fbclid=IwAR26qvyV2XVjlfoJsLM8mphBfROh27N1GUVw0kJmcbB8Ueg-kmB9k9lK4lk"
            target="_blank"
            rel="noreferrer"
            className="block py-2 px-3 text-gray-400 hover:bg-blue-700 rounded dark:text-gray-400 dark:hover:bg-blue-700 dark:hover:text-gray-400"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="/podcasts"
            target="_blank"
            rel="noreferrer"
            className="block py-2 px-3 text-gray-400 hover:bg-blue-700 rounded dark:text-gray-400 dark:hover:bg-blue-700 dark:hover:text-gray-400"
          >
            Podcasts
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Dropmen;
