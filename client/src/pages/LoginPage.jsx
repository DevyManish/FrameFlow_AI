import React from "react";
import SideBar from "../components/SideBar";
import Project from "../components/Project";
import Error from "../components/Error";

const LoginPage = ({ isAuthenticated }) => {
  return (
    <>
      {isAuthenticated ? (
        <div className="flex justify-between mx-20">
          <div className="overflow-y-auto h-screen mx-2">
            {/* Set a specific height */}
            <SideBar />
          </div>
          <Project />
        </div>
      ) : (
        <Error />
      )}
    </>
  );
};

export default LoginPage;
