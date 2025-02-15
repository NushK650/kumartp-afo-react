import { useState } from "react";
import PopupComponent from "./PopupComponent.jsx";
import menuIcon from "../assets/Home ButtonD.png";
import { getComputerChoice } from "../services/MLService.js";

const HW = () => {
  const defaultText = "";
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [adjective, setAdjective] = useState("");
  const [activity, setActivity] = useState("");
  const [displayText, setDisplayText] = useState(defaultText);
  const [showInput, setShowInput] = useState(true);
  const [showPA, setShowPA] = useState(false);
  const [showGO, setShowGO] = useState(true);
  const [showDisplay, setShowDisplay] = useState(false);

//   const inputKeyDown = async (event) => {
//     if (event.key === "Enter") {
//       if (UserInput.length == null) {
//         setDisplayText("Invalid try again");
//       } else {
//         const data = await getComputerChoice(UserInput);
//         setDisplayText(data);
//         setUserInput("");
        
//     }
//   };
  

  const playAgain = async () => {
   setShowDisplay(false)
    setShowInput(true);
    setShowGO(true)
    setShowPA(false);
    setName("");
    setPlace("");
    setAdjective("");
    setActivity("");
  };

  const GO = async () => {
    if(!name || !place || !adjective || !activity ){
        setDisplayText("Invalid")
        setShowPA(true);
        setShowGO(false);
        setShowInput(false);
        setShowDisplay(true)

    }else{

        const data = await getComputerChoice(name, place , adjective , activity)
        setDisplayText(data);
        setShowDisplay(true)
        setShowInput(false);
        setShowPA(true);
        setShowGO(false);
    }
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
          id="centerText"
          className={`${showDisplay ? "" : "hidden"} text-white md:text-[80px] text-[50px] sm:text-[60px] lg:text-[100px] text-center mt-40`}
        >
          {displayText}
        </h1>

        <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-evenly gap-6 mt-40" >
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          className={`${
            showInput ? "flex" : "hidden"
          }  border-4 border-black bg-white rounded-[25px]  h-20 w-80 sm:w-125 text-[30px] indent-1`}
          type="text"
          placeholder="Name:"
        />

        <input
          value={place}
          onChange={(event) => setPlace(event.target.value)}
          className={`${
            showInput ? "flex" : "hidden"
          }  border-4 border-black bg-white rounded-[25px]  h-20 w-80 sm:w-125 text-[30px] indent-1`}
          type="text"
          placeholder="Place: "
        />
        </div>
<div className="flex flex-col lg:flex-row justify-center items-center lg:justify-evenly gap-4 mt-40" >
        <input
          value={adjective}
          onChange={(event) => setAdjective(event.target.value)}
          className={`${
            showInput ? "flex" : "hidden"
          }  border-4 border-black bg-white rounded-[25px]  h-20 w-80 sm:w-125 text-[30px] indent-1`}
          type="text"
          placeholder="Adjective:"
        />

        <input
          value={activity}
          onChange={(event) => setActivity(event.target.value)}
          className={`${
            showInput ? "flex" : "hidden"
          }  border-4 border-black bg-white rounded-[25px]  h-20 w-80 sm:w-125 text-[30px] indent-1`}
          type="text"
          placeholder="Activity: "
        />
</div>

        <button
          onClick={playAgain}
          className={`${
            showPA ? "flex " : "hidden"
          } mt-40 justify-self-center  text-black text-[25px] pt-4 pl-10 pr-10 border-4 border-black bg-white rounded-[50px] h-20`}
        >
          Play Again
        </button>

        <button
          onClick={GO}
          className={`${
            showGO ? "flex " : "hidden"
          } mt-40 justify-self-center  text-black text-[25px] pt-4 pl-10 pr-10 border-4 border-black bg-white rounded-[50px] h-20`}
        >
         GO
        </button>
      </div>
    </>
  );
};
export default HW;
