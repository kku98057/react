import { Inter } from "@next/font/google";

import Layout from "../components/Layout";
import Hero from "../components/home/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center flex-col text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <Hero />
      </div>
    </section>
  );
}
