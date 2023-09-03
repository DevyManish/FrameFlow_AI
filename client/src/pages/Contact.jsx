import React from "react";

const Contact = () => {
  return (
<section className="text-gray-600 body-font relative">
  <div className="absolute inset-0 bg-gray-300">
    <iframe
      width="100%"
      height="100%"
      frameBorder={0}
      marginHeight={0}
      marginWidth={0}
      title="map"
      scrolling="no"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29405.15963299692!2d88.40056496407604!3d22.88957045961979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f896a1910e4387%3A0xe762ecc698e4c859!2sNaihati%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1692780544602!5m2!1sen!2sin"
      style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
    />
  </div>
  <div className="container px-5 py-24 mx-auto flex">
    <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
        Contact Us
      </h2>
      <p className="leading-relaxed mb-5 text-gray-600">
      Feel free to reach out to us, and we'll be delighted to assist you promptly.
      </p>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-600">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          defaultValue={""}
        />
      </div>
      <button className="text-white bg-[#245FFF] border-0 py-2 px-6 focus:outline-none hover:bg-[#245FFF] rounded text-lg">
        Button
      </button>
      <p className="text-xs text-gray-500 mt-3">
      The reply mail will be sent shortly within few weeks. We will be grateful for your patience.
      </p>
    </div>
  </div>
</section>

  );
};

export default Contact;


