import React, { Component, useState } from "react";
import testing from "../assets/test.png";
import fit1 from "../assets/moreFitSS1.JPG";
import fit2 from "../assets/moreFitSS2.JPG";
import fit3 from "../assets/moreFitSS3.JPG";
import fit4 from "../assets/moreFitSS4.JPG";
import fit5 from "../assets/moreFitSS5.JPG";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const Modal = ({ open, onClose, slides }) => {
  const mFitImgs = [
    {
      image: fit2,
    },
    {
      image: fit3,
    },
    {
      image: fit4,
    },
    {
      image: fit5,
    },
  ];

  const [current, setCurrent] = useState(0);
  const length = mFitImgs.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  console.log(current);

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  console.log(current);

  if (!open) return null;
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="font-main" onClick={onClose}>
    <div onClick={(e) => {
        e.stopPropagation();
    }}>
      <div className="modelcontainer bg-gray-500 flex translate-x-1/2 translate-y-1/2 w-full max-w-lg shadow-inner shadow-white rounded-xl">
        <div className="descriptionSide">
          <div className="float-left relative flex justify-center items-center p-8">
            <FaArrowAltCircleLeft
              className="absolute top-1/2 left-8 text-4xl text-white z-10 cursor-pointer select-none"
              onClick={prevSlide}
            />
            <FaArrowAltCircleRight
              className="absolute top-1/2 right-8 text-4xl text-white z-10 cursor-pointer select-none"
              onClick={nextSlide}
            />
            {mFitImgs.map((slide, index) => {
              return (
                <div
                  className={index === current ? "slide active" : "slide"}
                  key={index}
                >
                  {index === current && (
                    <img
                      src={slide.image}
                      className="rounded-lg w-[15rem] h-[30rem] float-right object-fit"
                    />
                  )}
                </div>
              );
            })}
          </div>
          <div>
            <p className="p-3 py-2 text-2xl text-white">
              A nutrtional app created with simplicity in mind, users can track and maintain their calories.
              <ul className="p-3 list-disc">
                <li>Nutritionix API based</li>
                <li>Firebase database</li>
                <li>Customized caloric count based on user info</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Modal;
