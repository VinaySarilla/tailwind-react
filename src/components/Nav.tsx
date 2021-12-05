import React from "react";

export default function Nav() {
  return (
    <nav className="p-4">
      <ul className="flex space-x-2">
        <li>
          <a
            href="#"
            className="block px-4 py-2 rounded-md bg-amber-100 text-amber-700"
          >
            Home
          </a>
        </li>
        <li>
          <a href="#" className={`block px-4 py-2 rounded-md`}>
            Products
          </a>
        </li>
        <li>
          <a href="#" className={`block px-4 py-2 rounded-md`}>
            About
          </a>
        </li>
      </ul>
    </nav>
  );
}
