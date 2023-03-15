import Filter from './Filter'
import Products from './Products'
import Header from './Header'
import Viewpage from './Viewpage'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createContext, useEffect, useState } from 'react';

export const cartContext = createContext()
export const filterContext = createContext()
let arr=[
  {id:"1",name:"Realme",Rate:"15,000",model:"Realme-led",img:require("./images/realme-oled.webp"),inch:"24",det:"Mi 138.8 cm (24 inches) Q1 Series 4K Ultra HD Smart QLED TV | L55M6-EQG (Metallic Grey)",Screen:"LED"},
  {id:"2",name:"Realme",Rate:"20,000",model:"Realme-lcd",img:require("./images/realme-oled.webp"),inch:"28",det:"Mi 138.8 cm (28 inches) Q1 Series 4K Ultra HD Smart QLED TV | L55M6-EQG (Metallic Grey)",Screen:"LCD"},
  {id:"3",name:"tcl",Rate:"18,000",model:"tcl-oled",img:require("./images/tcl-led.webp"),inch:"32",det:"Mi 138.8 cm (32 inches) Q1 Series 4K Ultra HD Smart QLED TV | L55M6-EQG (Metallic Grey)",Screen:"OLED"},
  {id:"4",name:"redmi",Rate:"19,000",model:"Redmi-led",img:require("./images/redmi-led.jpg"),inch:"48",det:"Mi 138.8 cm (40 inches) Q1 Series 4K Ultra HD Smart QLED TV | L55M6-EQG (Metallic Grey)",Screen:"LED"},
  {id:"5",name:"redmi",Rate:"25,000",model:"Redmi-lcd",img:require("./images/redmi-led.jpg"),inch:"70",det:"Mi 138.8 cm (70 inches) Q1 Series 4K Ultra HD Smart QLED TV | L55M6-EQG (Metallic Grey)",Screen:"LCD"},
  {id:"6",name:"oneplus",Rate:"20,000",model:"oneplus-oled",img:require("./images/oneplus-led.webp"),inch:"24",det:"Mi 138.8 cm (24 inches) Q1 Series 4K Ultra HD Smart QLED TV | L55M6-EQG (Metallic Grey)",Screen:"OLED"},
  {id:"7",name:"oneplus",Rate:"17,000",model:"oneplus-led",img:require("./images/oneplus-led.webp"),inch:"28",det:"Mi 138.8 cm (28 inches) Q1 Series 4K Ultra HD Smart QLED TV | L55M6-EQG (Metallic Grey)",Screen:"LED"},
  {id:"8",name:"tcl",Rate:"21,000",model:"tcl-lcd",img:require("./images/tcl-led.webp"),inch:"32",det:"Mi 138.8 cm (32 inches) Q1 Series 4K Ultra HD Smart QLED TV | L55M6-EQG (Metallic Grey)",Screen:"LCD"},
  {id:"9",name:"samsung",Rate:"25,000",model:"samsung-oled",img:require("./images/samsung-led.webp"),inch:"48",det:"Mi 138.8 cm (48 inches) Q1 Series 4K Ultra HD Smart QLED TV | L55M6-EQG (Metallic Grey)",Screen:"OLED"},
  {id:"10",name:"samsung",Rate:"24,000",model:"samsung-led",img:require("./images/samsung-led.webp"),inch:"70",det:"Mi 138.8 cm (70 inches) Q1 Series 4K Ultra HD Smart QLED TV | L55M6-EQG (Metallic Grey)",Screen:"LED"},
  {id:"11",name:"lg",Rate:"28,000",model:"lg-lcd",img:require("./images/lg-led.webp"),inch:"24",det:"Mi 138.8 cm (24 inches) Q1 Series 4K Ultra HD Smart QLED TV | L55M6-EQG (Metallic Grey)",Screen:"LCD"},
  {id:"12",name:"lg",Rate:"22,000",model:"lg-oled",img:require("./images/lg-led.webp"),inch:"28",det:"Mi 138.8 cm (28 inches) Q1 Series 4K Ultra HD Smart QLED TV | L55M6-EQG (Metallic Grey)",Screen:"OLED"},
  {id:"13",name:"sony",Rate:"30,000",model:"sony-led",img:require("./images/sony-led.webp"),inch:"32",det:"Mi 138.8 cm (32) inches) Q1 Series 4K Ultra HD Smart QLED TV | L55M6-EQG (Metallic Grey)",Screen:"LED"},
  {id:"14",name:"sony",Rate:"35,000",model:"sony-lcd",img:require("./images/sony-led.webp"),inch:"40",det:"Mi 138.8 cm (40 inches) Q1 Series 4K Ultra HD Smart QLED TV | L55M6-EQG (Metallic Grey)",Screen:"LCD"},
  {id:"15",name:"infinix",Rate:"20,000",model:"infinix-oled",img:require("./images/infinix-led.webp"),inch:"70",det:"Mi 138.8 cm (70 inches) Q1 Series 4K Ultra HD Smart QLED TV | L55M6-EQG (Metallic Grey)",Screen:"OLED"},
  {id:"16",name:"infinix",Rate:"23,000",model:"infinix-led",img:require("./images/infinix-led.webp"),inch:"40",det:"Mi 138.8 cm (40 inches) Q1 Series 4K Ultra HD Smart QLED TV | L55M6-EQG (Metallic Grey)",Screen:"LED"}
]


function App()
 {
  const [newArray, setMyArray] = useState([]);
  const[filter,SetFilter] = useState([])

  useEffect(()=>{console.log(newArray)},[newArray,setMyArray])
  return(
    <>
    <cartContext.Provider value={{newArray,setMyArray}}>
      <filterContext.Provider value={{filter,SetFilter}}>
     <BrowserRouter>
     <Routes>
          <Route exact path="/" element={<>
            <Header ></Header>
            <Filter></Filter>
            <Products item={arr} ></Products></>}/>
            <Route exact path="/Cart" element={<><Viewpage  newArray={newArray} item={newArray}></Viewpage></>}/>
         </Routes>
      </BrowserRouter>
      </filterContext.Provider>
      </cartContext.Provider>
    </>
  
   
  );
}

export default App;
