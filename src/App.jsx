
import { useState } from 'react'
import './App.css'
import PopupComponent from './components/PopupComponent'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
    <div className="bg-[url('/src/assets/background.jpeg')] bg-cover min-h-screen bg-no-repeat">
    
      <PopupComponent isOpen={isOpen} setIsOpen={setIsOpen}/>
    <p className="flex justify-center text-[250px] text-white text-center">
      ALL FOR ONE
    </p>
    <div className="flex justify-center">
      <p
       
        className="text-white text-center text-[25px] border-4 rounded-[50px] w-64"
        onClick={() => setIsOpen(true)}
      >
        Games
      </p>
    </div>

    </div>

    </>
  )
}

export default App
