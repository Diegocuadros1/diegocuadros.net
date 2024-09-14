"use client";

import React, { useRef, useState } from "react";
import { Label } from "@/components/ui/Label";
import { Input } from "@/components/ui/Input";
import { cn } from "@/utils/cn";
import SpringModal from "../items/SpringModal";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [Success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    if (form.current) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID as string,
          process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
          form.current,
          {
            publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY as string,
          }
        )
        .then(
          () => {
            setSuccess(true);
            form.current?.reset();
            setIsOpen(true);
            console.log("SUCCESS!");
          },
          (error) => {
            setError(true);
            console.log("FAILED...", error);
          }
        );
    } else {
      console.log("Form Not Available");
    }
  };

  return (
    <>
      <form ref={form} onSubmit={sendEmail} className="mb-10">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-7">
          <LabelInputContainer className="mx-5 mb-5 sm:mb-0">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="name"
              type="text"
              name="user_name"
              required
            />
          </LabelInputContainer>
          <LabelInputContainer className="mx-5">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="email"
              type="email"
              name="user_email"
              required
            />
          </LabelInputContainer>
        </div>

        <LabelInputContainer className="mb-9">
          <Label htmlFor="message" className="mb-2">
            Message
          </Label>
          <Input
            id="message"
            placeholder="message"
            rows={3}
            type="text"
            name="message"
            required
            className="h-32"
          />
        </LabelInputContainer>

        <div className="w-full flex items-center justify-center">
          <button
            className="w-[70%] bg-grabg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Connect With Us
            <BottomGradient />
          </button>
        </div>
      </form>

      <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} action="success" />

      {error && (
        <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} action="error" />
      )}
    </>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
export default ContactForm;
