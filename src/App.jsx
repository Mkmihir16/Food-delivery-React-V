import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home1 from '../Pages/Home1/Home1'
import Navbar from '../component/Navbar/Navbar'
import Footer from '../component/Footer/Footer'
import Mobile from '../component/MobileApp/Mobile'
import Loginpage from '../component/LoginPage/Loginpage'
import Cart11 from '../Pages/Cart11/Cart11'
import Placeorder1 from '../Pages/PlaceOrder1/Placeorder1'
function App() {
  const[login,setLogin]=useState("off");
  console.log(login+" App.jsx");
  return (
    <>
      {login==="on"?<Loginpage setLogin={setLogin} />:<></>}
      <Navbar setLogin={setLogin} />
      
      <Routes>
        <Route path='/' element={<Home1/>}></Route>
        <Route path='/cart' element={<Cart11/>}></Route>
        <Route path='/order' element={<Placeorder1/>}></Route>
      </Routes>
      <Mobile/>
      <Footer/>
    </>
  )
}

export default App
