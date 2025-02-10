import { useState } from 'react'
import PopupComponent from "./PopupComponent.jsx";
import menuIcon from "../assets/Home ButtonD.png"
import {getComputerChoice} from "../services/A2NService.js"

const A2N = ()=>{
    const defaultText = "Give me a number";
    const [isOpen, setIsOpen] = useState(false);
 const[UserInput, setUserInput] = useState("");
 const[UserInput2, setUserInput2] = useState("");
 const[displayText,setDisplayText]= useState(defaultText);
const[showInput,setShowInput] = useState(true);
const[showInput2,setShowInput2] = useState(false);
const[showPA, setShowPA] = useState(false);

 const inputKeyDown = async (event) =>{
    if(event.key === "Enter"){
        if(UserInput.length == null || isNaN(UserInput) ){
            setDisplayText("Invalid try again")
        }else{ 
            setDisplayText("Give me another number");
            setShowInput(false);
           setShowInput2(true);
        }
    }
 }
 const input2KeyDown = async (event) =>{
    if(event.key === "Enter"){
        if(UserInput2.length == null || isNaN(UserInput2) ){
            setDisplayText("Invalid try again")
        }else{ 
            const data = await getComputerChoice(UserInput,UserInput2);
            setDisplayText(data);
            setShowInput2(false);
            setShowPA(true)
        }
    }
 }
 
 const playAgain = async()=>{
    setDisplayText(defaultText);
    setShowInput(true);
    setShowPA(false)
    setUserInput("");
    setUserInput2("");
 }
    return(
        <>
        <div className="bg-[url('/src/assets/background.jpeg')] bg-cover min-h-screen bg-no-repeat">
        <img onClick={() => setIsOpen(true)} className="flex justify-self-end w-[80px] md:w-[142px]" src={menuIcon} alt="Menu" />
        <PopupComponent isOpen={isOpen} setIsOpen={setIsOpen}/>


        <h1 className=  " text-white md:text-[80px] text-[50px] sm:text-[60px] lg:text-[100px] text-center mt-40">{displayText}</h1>
        <input value={UserInput} onChange={(event)=> setUserInput(event.target.value)} onKeyDown={inputKeyDown}  className={`${showInput ? "flex" : "hidden"}  justify-self-center mt-40 indent-2 border-4 border-black bg-white rounded-[25px]  h-15 text-[25px]`}  type="text" placeholder="Input..." />
        <input value={UserInput2} onChange={(event)=> setUserInput2(event.target.value)} onKeyDown={input2KeyDown}  className={`${showInput2 ? "flex" : "hidden"}  justify-self-center mt-40 indent-2 border-4 border-black bg-white rounded-[25px]  h-15 text-[25px]`}  type="text" placeholder="Input..." />
<button onClick={playAgain} className={`${showPA ? "flex " : "hidden"} mt-40 justify-self-center  text-black text-[25px] pt-4 pl-10 pr-10 border-4 border-black bg-white rounded-[50px] h-20`}>Play Again</button>
        </div>
        </>
    );

};
export default A2N;