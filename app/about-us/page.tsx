import type { Metadata } from "next";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";

export const metadata: Metadata = {
  title: "About Us",
   description: "A movie database built with Next.js, TypeScript, and Tailwind CSS.",
};

export default function AboutUsPage(){
  return(
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-7 bg-amber-200 text-black p-4">
        <p>About Us Main Content</p>
      </main> 
      <Footer />
    </div>
  )
}