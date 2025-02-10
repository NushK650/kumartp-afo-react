import { useState } from "react";
import PopupComponent from "./PopupComponent.jsx";
import menuIcon from "../assets/Home ButtonD.png";
import { getComputerChoice } from "../services/RPService.js";

const RP = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  const [UserInput, setUserInput] = useState("");
  const [displayText, setDisplayText] = useState("");

  const [showPA, setShowPA] = useState(false);
  const [showCD, setShowCD] = useState(true);
  const [showFD, setShowFD] = useState(true);
  const [showFF, setShowFF] = useState(true);
  const [showOutput, setShowOutput] = useState(false);

  
  const CDBtn = async () => {
    setUserInput("casual dining");
    const data = await getComputerChoice(UserInput);
    setDisplayText(data);
    setShowCD(false);
    setShowFD(false);
    setShowFF(false);
    setShowPA(true);
    setShowOutput(true);
  };
  const FDBtn = async () => {
    setUserInput ("fine dining");
    const data = await getComputerChoice(UserInput);
    setDisplayText(data);
    setShowCD(false);
    setShowFD(false);
    setShowFF(false);
    setShowPA(true);
    setShowOutput(true);
  };
  const FFBtn = async () => {
    setUserInput ("fast food");
    const data = await getComputerChoice(UserInput);
    setDisplayText(data);
    setShowCD(false);
    setShowFD(false);
    setShowFF(false);
    setShowPA(true);
    setShowOutput(true);
  };

  const playAgain = async () => {
    
    setShowCD(true);
    setShowFD(true);
    setShowFF(true);
    setShowOutput(false);
    setShowPA(false);
  };
  return (
    <>
      <div className="bg-[url('/src/assets/background.jpeg')] bg-cover min-h-screen bg-no-repeat">
        <img
          onClick={() => setIsOpen(true)}
          className="flex justify-self-end w-[80px] md:w-[142px]"
          src={menuIcon}
          alt="Menu"
        />
        <PopupComponent isOpen={isOpen} setIsOpen={setIsOpen} />

        <h1
          className={`${
            showOutput ? " " : "hidden"
          }  text-white md:text-[80px] text-[50px] sm:text-[60px] lg:text-[100px] text-center mt-40`}
        >
          {displayText}
        </h1>

        <button
          onClick={FDBtn}
          className={`${
            showFD ? "flex " : "hidden"
          } mt-40 justify-self-center  text-black text-[25px] pt-4 pl-10 pr-10 border-4 border-black bg-white rounded-[50px] h-20`}
        >
          Fine Dining
        </button>
        <button
          onClick={FFBtn}
          className={`${
            showFF ? "flex " : "hidden"
          } mt-40 justify-self-center  text-black text-[25px] pt-4 pl-10 pr-10 border-4 border-black bg-white rounded-[50px] h-20`}
        >
          Fast Food
        </button>
        <button
          onClick={CDBtn}
          className={`${
            showCD ? "flex " : "hidden"
          } mt-40 justify-self-center  text-black text-[25px] pt-4 pl-10 pr-10 border-4 border-black bg-white rounded-[50px] h-20`}
        >
          Casual Dining
        </button>
        <button
          onClick={playAgain}
          className={`${
            showPA ? "flex " : "hidden"
          } mt-40 justify-self-center  text-black text-[25px] pt-4 pl-10 pr-10 border-4 border-black bg-white rounded-[50px] h-20`}
        >
          Play Again
        </button>

      </div>
    </>
  );
};
export default RP;
