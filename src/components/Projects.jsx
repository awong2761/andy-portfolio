import React from "react";
import Modal from "./Modal";

const Projects = () => {
  const mFitImgs = [
    {
      image: "./assets/moreFit/moreFitSS1.JPG",
    },
  ];
  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-deep-purple-trans to-deep-purple w-full h-full p-8"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div>
          <p className="font-main text-4xl text-yellow-500">Projects</p>
          <p className="py-4"></p>
        </div>
        <div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            <div>
              <h2 className="font-main text-white text-3xl pb-8">
                moreFit - Nutritional App
              </h2>
              <br />
              <div className="bg-gray-200 rounded-lg flex items-center justify-center"></div>
            </div>
          </div>
          <div className="flex">
            <Modal slides={mFitImgs}></Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
