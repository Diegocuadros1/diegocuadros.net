import React from "react";

const ComingSoon = () => {
  return (
    <section className="w-[80%]">
      <div className="flex items-center justify-center flex-col">
        <h1 className="text-4xl text-purple font-bold">Coming Soon</h1>
        <br />
        <p className="mb-10 text-center text-sm md:text-base">
          This current page is currently a work in progress, please check back
          soon for updates. For now, any questions or concerns you may have you
          can shoot me an email at{" "}
          <span className="text-purple font-bold">cuadrosda21@gmail.com</span>{" "}
          or you can fill out the form below and I will get back to you as soon
          as possible. Thank you!
        </p>
      </div>
    </section>
  );
};

export default ComingSoon;
