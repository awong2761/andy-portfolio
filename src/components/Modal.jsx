import React, { useState } from "react";
import fit2 from "../assets/moreFitSS2.JPG";
import fit3 from "../assets/moreFitSS3.JPG";
import fit4 from "../assets/moreFitSS4.JPG";
import fit5 from "../assets/moreFitSS5.JPG";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

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

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="descriptionSide">
          <div className="float-left relative flex justify-center items-center p-8">
            <IoIosArrowBack
              className="absolute top-1/2 left-8 text-4xl text-white z-10 cursor-pointer select-none duration-200 hover:scale-110"
              onClick={prevSlide}
            />
            <IoIosArrowForward
              className="absolute top-1/2 right-8 text-4xl text-white z-10 cursor-pointer select-none duration-200 hover:scale-110"
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
                      alt =""
                    />
                  )}
                </div>
              );
            })}
          </div>
          <div className="font-main">
            <p className="px-2 py-9 text-2xl text-white">
              A nutrtional app created with simplicity in mind, users can track and maintain their calories.
              <ul className="p-3">
                <li>Nutritionix API based</li>
                <li>Firebase database</li>
                <li>Customized caloric count based on user info</li>
              </ul>
            </p>
          </div>
        </div>
  );
};

export default Modal;
