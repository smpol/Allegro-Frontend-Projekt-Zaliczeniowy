import Navbar from "@/components/Navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100 dark:bg-gray-800 pt-16">
        <div className="grid md:grid-cols-2 sm:grid-cols-1">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              About Todo List App
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-200 text-center mb-8">
              Todo List App is designed to help you manage your tasks
              efficiently and effectively. You can add, edit, and delete tasks
              as you need.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              About Project
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-200 text-center mb-8">
              This app is built using React, Next.js, Tailwind CSS as a student
              final project
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
