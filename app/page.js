import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100 dark:bg-gray-800 pt-16">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100  mb-4">
          Welcome to Todo List App
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-200 dark:text-gray-200 text-center mb-8">
          A simple and efficient way to manage your daily tasks.
        </p>
        <div className="flex space-x-4">
          <Link href="/todos" legacyBehavior>
            <a className="bg-blue-600 dark:bg-blue-900 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-500">
              Get Started
            </a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a className="bg-gray-300 text-gray-800  px-6 py-3 rounded-lg shadow hover:bg-gray-400">
              Learn More
            </a>
          </Link>
        </div>
      </main>
    </>
  );
}
