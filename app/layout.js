import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({ subsets: ["latin"] });

export const metadata = {
  title: "Todo List App",
  description: "A simple todo list application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${archivo.className} bg-gray-100 dark:bg-gray-800`}>
        {children}
      </body>
    </html>
  );
}
