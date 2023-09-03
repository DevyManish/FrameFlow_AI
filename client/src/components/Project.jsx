import React from "react";

const Project = () => {
  return (
    <div>
      <div>
        <div className="flex flex-col text-center w-full mb-20 mt-2">
          <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
            Live Preview
          </h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font  text-gray-900">
            AI Video Analyser
          </h1>
        </div>
        <div className="">
          <iframe
            src="http://localhost:8501"
            width="1000"
            height="600"
            title="Analyse AI"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Project;
