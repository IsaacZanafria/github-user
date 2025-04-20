import { Route, Routes } from "react-router";
import BarSearch from "./components/BarSearch";
import User from "./components/User";
import { useState } from "react";

export default function App() {
  const [close, setClose] = useState(false)
  function closeBox(){
    setClose(false)
}
function openBox(){
    setClose(true)
}

  return (
    <>
    <BarSearch 
    close={close}
    closeBox={closeBox}
    openBox={openBox}
    />
    
    <Routes>
      <Route path="/" element={<User 
      closeBox={closeBox}
      />} />
      <Route path="/:username" element={<User
      closeBox={closeBox}
      />} />
    </Routes>
    </>
  )
}


