import { useState } from 'react'
import PopupComponent from "./PopupComponent.jsx";
import menuIcon from "../assets/Home ButtonD.png"
import {getComputerChoice} from "../services/RIANService.js"

const RIAN = ()=>{
    const defaultText = "Give me a number or word";
    const [isOpen, setIsOpen] = useState(false);
 const[UserInput, setUserInput] = useState("");
 const[displayText,setDisplayText]= useState(defaultText);
const[showInput,setShowInput] = useState(true);
const[showPA, setShowPA] = useState(false);

 const inputKeyDown = async (event) =>{
    if(event.key === "Enter"){
        if(UserInput.length == null){
            setDisplayText("Invalid try again")
        }else{ 
            const data = await getComputerChoice(UserInput);
            setDisplayText(data);
            setUserInput("");
            setShowInput(false);
            setShowPA(true)
        }
    }
 }
 
 const playAgain = async()=>{
    setDisplayText(defaultText);
    setShowInput(true);
    setShowPA(false)
 }
    return(
        <>
        <div className="bg-[url('/src/assets/background.jpeg')] bg-cover min-h-screen bg-no-repeat">
        <img onClick={() => setIsOpen(true)} className="flex justify-self-end w-[80px] md:w-[142px]" src={menuIcon} alt="Menu" />
        <PopupComponent isOpen={isOpen} setIsOpen={setIsOpen}/>


        <h1  id="centerText" className=  " text-white md:text-[80px] text-[50px] sm:text-[60px] lg:text-[100px] text-center mt-40">{displayText}</h1>
        <input value={UserInput} onChange={(event)=> setUserInput(event.target.value)} onKeyDown={inputKeyDown}  className={`${showInput ? "flex" : "hidden"}  justify-self-center mt-40 indent-2 border-4 border-black bg-white rounded-[25px]  h-15 text-[25px]`}  type="text" placeholder="Input..." />
<button onClick={playAgain} className={`${showPA ? "flex " : "hidden"} mt-40 justify-self-center  text-black text-[25px] pt-4 pl-10 pr-10 border-4 border-black bg-white rounded-[50px] h-20`}>Play Again</button>
        </div>
        </>
    );

};
export default RIAN;