import React from "react";
import luminas from "../assets/luminas.png";
import vid from "../assets/video.mp4";

const About = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="rounded-lg h-64 overflow-hidden">
               <video src={vid} autoPlay loop muted className="object-cover object-center h-full w-full"/>
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <img src={luminas} alt="lumina" className="w-10 h-10"/>
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                    Luminas
                  </h2>
                  <div className="w-12 h-1 bg-yellow-500 rounded mt-2 mb-4" />
                  <p className="text-base">
                  Team Luminas, a dynamic group of second year Computer Science students with a shared passion for innovation and coding.
                  </p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-lg mb-4">
                Introducing our cutting-edge AI software, a revolution in traffic surveillance. Our state-of-the-art system is designed to meticulously analyze DVR CCTV footage, extracting critical data like vehicle number plates and classifying vehicle types with unparalleled accuracy. By seamlessly combining image recognition and deep learning algorithms, we enable law enforcement agencies to effortlessly monitor and maintain road safety. Moreover, our software automates the process of issuing fines for traffic violations, making our roads safer and more efficient. With this AI solution, we're not just transforming traffic management; we're shaping a smarter, safer future for all.
                </p>
                <a className="text-[#245FFF] inline-flex items-center" href="#about">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
