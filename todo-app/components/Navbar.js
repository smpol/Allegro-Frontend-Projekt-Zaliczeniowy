"use client";
import Link from "next/link";
import { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaInfoCircle,
  FaTasks,
  FaEnvelope,
} from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 dark:bg-blue-900 p-4 shadow-md fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" legacyBehavior>
          <a className="text-white text-xl font-bold">Todo List App</a>
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link href="/" legacyBehavior>
            <a className="flex items-center text-white hover:text-gray-200">
              <FaHome className="mr-2" />
              Home
            </a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a className="flex items-center text-white hover:text-gray-200">
              <FaInfoCircle className="mr-2" />
              About
            </a>
          </Link>
          <Link href="/todos" legacyBehavior>
            <a className="flex items-center text-white hover:text-gray-200">
              <FaTasks className="mr-2" />
              Todos
            </a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a className="flex items-center text-white hover:text-gray-200">
              <FaEnvelope className="mr-2" />
              Contact
            </a>
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      <div
        className={`md:hidden bg-blue-600 dark:bg-blue-900 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <Link href="/" legacyBehavior>
          <a
            onClick={toggleMenu}
            className="flex items-center text-white hover:text-gray-200 p-4"
          >
            <FaHome className="mr-2" />
            Home
          </a>
        </Link>
        <Link href="/about" legacyBehavior>
          <a
            onClick={toggleMenu}
            className="flex items-center text-white hover:text-gray-200 p-4"
          >
            <FaInfoCircle className="mr-2" />
            About
          </a>
        </Link>
        <Link href="/todos" legacyBehavior>
          <a
            onClick={toggleMenu}
            className="flex items-center text-white hover:text-gray-200 p-4"
          >
            <FaTasks className="mr-2" />
            Todos
          </a>
        </Link>
        <Link href="/contact" legacyBehavior>
          <a
            onClick={toggleMenu}
            className="flex items-center text-white hover:text-gray-200 p-4"
          >
            <FaEnvelope className="mr-2" />
            Contact
          </a>
        </Link>
      </div>
    </nav>
  );
}
