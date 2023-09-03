import heroimage from "../assets/hero.jpg";

const Hero = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src={heroimage}
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Unlock the Power of Video Analysis with Ease
            </h1>
            <p className="mb-8 leading-relaxed">
              Welcome to FrameFlow,An Easy DRV Analysis AI, your gateway to a
              world of effortless video analysis. Say goodbye to complex and
              time-consuming processes, and embrace the future of streamlined,
              intelligent video insights.
            </p>
            <div className="flex justify-center">{/* buttons */}</div>
            <div class="flex mt-6 justify-center">
              <div class="w-40 h-1 rounded-full bg-[#172554] inline-flex"></div>
            </div>

            <section className="text-gray-600 body-font" id="features">
              <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                  <h2 className="text-xs text-yellow-500 tracking-widest font-medium title-font mb-1">
                    Safe And Reliable
                  </h2>
                  <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
                    FrameFlow Video Analysis AI
                  </h1>
                </div>
                <div className="flex flex-wrap -m-4">
                  <div className="p-4 md:w-1/3">
                    <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                      <div className="flex items-center mb-3">
                        <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#0F172A] text-white flex-shrink-0">
                          <span class="material-symbols-outlined">blur_on</span>
                        </div>
                        <h2 className="text-gray-900 text-lg title-font font-medium">
                            Video Enhancement
                        </h2>
                      </div>
                      <div className="flex-grow">
                        <p className="leading-relaxed text-base">
                         Improve the quality and clarity of DVR-stored video footage to make it suitable for analysis.
                        </p>
                        <a
                          className="mt-3 text-yellow-500 inline-flex items-center"
                          href="features"
                        >
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
                  <div className="p-4 md:w-1/3">
                    <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                      <div className="flex items-center mb-3">
                        <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#0F172A] text-white flex-shrink-0">
                          <span class="material-symbols-outlined">
                            image_search
                          </span>
                        </div>
                        <h2 className="text-gray-900 text-lg title-font font-medium">
                        Number&nbsp;Recognition
                        </h2>
                      </div>
                      <div className="flex-grow">
                        <p className="leading-relaxed text-base">
                        Implement advanced algorithms to extract number plates of vehicles in the footage.
                        </p>
                        <a
                          className="mt-3 text-yellow-500 inline-flex items-center"
                          href="features"
                        >
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
                  <div className="p-4 md:w-1/3">
                    <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                      <div className="flex items-center mb-3">
                        <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#0F172A] text-white flex-shrink-0">
                          <span class="material-symbols-outlined">
                            local_shipping
                          </span>
                        </div>
                        <h2 className="text-gray-900 text-lg title-font font-medium">
                        Vehicle&nbsp;Classification
                        </h2>
                      </div>
                      <div className="flex-grow">
                        <p className="leading-relaxed text-base">
                        Enable the system to classify vehicles based on attributes like color, make, model, and type.
                        </p>
                        <a
                          className="mt-3 text-yellow-500 inline-flex items-center"
                          href="features"
                        >
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
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
