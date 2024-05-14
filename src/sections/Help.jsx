import { useState } from "react";
import openv from "../assets/openv.svg";
const Help = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <section className="mt-32  bg-slate-100">
      <div>
        <div className=" pt-20 flex justify-center">
          <h1 className="text-black-500 text-4xl">Need Help?</h1>
        </div>
        <div className="mt-8 flex justify-center text-black-50 text-center">
          <p>
            Don't worry, we got you. Here are some answers for <br /> your
            questions.
          </p>
        </div>
      </div>
      {/*<div className="mt-10  ">
  <div className=" ml-40 mr-40 flex justify-between">
    <h1>What is GenAI</h1>
   <button>
   <img src={openv}  />
   </button>
  </div>
  <div className=" ml-40 mr-40 flex justify-between  ">
    <h1>What is GenAI</h1>
   <button>
   <img src={openv} />
   </button>
  </div>
  <div className=" ml-40 mr-40 flex justify-between  ">
    <h1>What is GenAI</h1>
   <button>
   <img src={openv}  />
   </button>
  </div>
  <div className=" ml-40 mr-40 flex justify-between  ">
    <h1>What is GenAI</h1>
   <button>
   <img src={openv} />
   </button>
  </div>
  </div> */}
      <div className="max-w-lg mx-auto shadow-md ">
        <button
          onClick={toggleAccordion}
          className="w-full flex justify-between items-center p-4 focus:outline-none"
        >
          <span className="text-lg font-medium">What is GenAI</span>
          <svg
            className={`w-6 h-6 transition-transform ${
              isOpen ? "transform rotate-180" : ""
            }`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        {isOpen && (
          <div className="p-4">
            <p> GPT-3, short for "Generative Pre-trained Transformer 3," is a state-of-the-art language processing AI model developed by OpenAI. It belongs to the Transformer architecture family and is trained on a vast dataset comprising diverse sources from the internet. GPT-3 is renowned for its ability to generate human-like text across various tasks, including translation, summarization, question answering, and creative writing</p>
          </div>
        )}
      </div>
      <div className="max-w-lg mx-auto shadow-md ">
        <button className="w-full flex justify-between items-center p-4 focus:outline-none">
          <span className="text-lg font-medium">How does reinforcement learning work in AI?</span>
          <img src={openv} />
        </button>
      </div>
      <div className="max-w-lg mx-auto shadow-md  ">
        <button className="w-full flex justify-between items-center p-4 focus:outline-none">
          <span className="text-lg font-medium">What are the applications of computer vision in AI?</span>
          <img src={openv} />
        </button>
      </div>
    </section>
  );
};

export default Help;
