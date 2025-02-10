

import { Link } from "react-router-dom";
import closeIcon from "../assets/X.png";

const PopupComponent = ({isOpen,setIsOpen}) => {
  
  return (
    <>
      <div className={`fixed ${isOpen ? "flex" : "hidden"}  inset-0 place-items-center`}>
        <div className="bg-[#242424] mt-17 rounded-[50px] text-white">
          <div className="mt-10 ml-4">
            <img onClick={() => setIsOpen(false)} className="pt-5 ml-5" src={closeIcon} alt="Close" />
          </div>
          <div className="pl-24 pr-24 pb-14 grid gap-8">
            <div className="flex justify-between">
              <Link
                to="/HW"
                className="hover:border-4 hover:border-white border-4 border-transparent rounded-[10px] text-center text-[20px] sm:text-[40px]"
              >
                Hello World
              </Link>
              <Link
                to="/A2N"
                className="hover:border-4 hover:border-white border-4 border-transparent rounded-[10px] text-center text-[20px] sm:text-[40px]"
              >
                Adding 2 Numbers
              </Link>
            </div>

            <div className="flex justify-between gap-40">
              <Link
                to="/AQ"
                className="hover:border-4 hover:border-white border-4 border-transparent rounded-[10px] text-center text-[20px] sm:text-[40px]"
              >
                Asking Questions
              </Link>
              <Link
                to="/GL"
                className="hover:border-4 hover:border-white border-4 border-transparent rounded-[10px] text-center text-[20px] sm:text-[40px]"
              >
                Greater or Less
              </Link>
            </div>

            <div className="flex justify-between">
              <Link
                to="/ML"
                className="hover:border-4 hover:border-white border-4 border-transparent rounded-[10px] text-center text-[20px] sm:text-[40px]"
              >
                Madlib
              </Link>
              <Link
                to="/OE"
                className="hover:border-4 hover:border-white border-4 border-transparent rounded-[10px] text-center text-[20px] sm:text-[40px]"
              >
                Odd or Even
              </Link>
            </div>

            <div className="flex justify-between">
              <Link
                to="/M8B"
                className="hover:border-4 hover:border-white border-4 border-transparent rounded-[10px] text-center text-[20px] sm:text-[40px]"
              >
                Magic 8 Ball
              </Link>
              <Link
                to="/RP"
                className="hover:border-4 hover:border-white border-4 border-transparent rounded-[10px] text-center text-[20px] sm:text-[40px]"
              >
                Restaurant Picker
              </Link>
            </div>

            <div className="flex justify-between">
              <Link
                to="/RIAN"
                className="hover:border-4 hover:border-white border-4 border-transparent rounded-[10px] text-center text-[20px] sm:text-[40px]"
              >
                Reverse It <br />
                (alphaNumeric)
              </Link>
              <Link to="/RINO" className="hover:border-4 hover:border-white border-4 border-transparent rounded-[10px] text-center text-[20px] sm:text-[40px]">
                Reverse It <br />
                (numbers Only)
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopupComponent;
