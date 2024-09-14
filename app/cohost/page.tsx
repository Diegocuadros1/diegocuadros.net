"use client";

import ComingSoon from "@/components/ComingSoon";
import React from "react";
import { FloatingNav } from "@/components/ui/FloatingNav";
import ContactForm from "@/components/ui/ContactForm";
import { navItems } from "@/data";
import MagicButton from "@/components/ui/MagicButton";
import { FaHome } from "react-icons/fa";
import Link from "next/link";

export default function Cohosting() {
  return (
    <main className="h-auto relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px:5">
      <div className="max-w-7xl w-full flex items-center justify-center flex-col">
        <FloatingNav navItems={navItems} />
        <div className="w-full flex items-start">
          <Link href={"/"} className="mb-10 mt-5">
            <MagicButton
              title="Back to Home"
              icon={<FaHome />}
              position="left"
            />
          </Link>
        </div>

        <ComingSoon />
        <div className="flex items-center justify-center w-[80%]">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
