
import { useContext } from 'react'
import { filterContext } from './App'
import './body_left.css'


let update=(name,filter,SetFilter)=>
{
  if(filter.indexOf(name)==-1)
  {
    SetFilter([...filter,name])
  }
  else{
    let temp = [...filter]
    temp.splice(temp.indexOf(name),1)
    SetFilter(temp)
   
  }
  
}

let Filter=()=>
{
  const {filter,SetFilter} = useContext(filterContext)
  console.log(filter)
    return(
        <div class="body_left">
        <h3 class="heading">Search</h3>
        <div class="search">   
          <input type="search"></input>
        </div>
        <div class="screen">
            <h3 class="heading">Screen</h3>
           <button onClick={()=>update("LED",filter,SetFilter)}>LED</button> 
            <button onClick={()=>update("OLED",filter,SetFilter)}>OLED</button> 
            <button onClick={()=>update("LCD",filter,SetFilter)}>LCD</button> 
        </div>
        <div class="brand">
            <h3>Brand</h3>
            <p onClick={()=>update("Realme",filter,SetFilter)}>realme</p>
            <p onClick={()=>update("redmi",filter,SetFilter)}>Mi</p>
            <p onClick={()=>update("OnePlus",filter,SetFilter)}>OnePlus</p>
            <p onClick={()=>update("SAMSUNG",filter,SetFilter)}> SAMSUNG</p>
           <p onClick={()=>update("lg",filter,SetFilter)}>LG</p>
            <p onClick={()=>update("sony",filter,SetFilter)}> SONY</p>
            <p onClick={()=>update("infinix",filter,SetFilter)}>Infinix</p>
           <p onClick={()=>update("tcl",filter,SetFilter)}>TCL</p>
        </div>
        <h2 class="heading">Inches</h2>
        <div class="inches">
            <button onClick={()=>update("24",filter,SetFilter)}>24</button>
            <button onClick={()=>update("28",filter,SetFilter)}>28</button> 
             <button onClick={()=>update("32",filter,SetFilter)}>32</button>
            <button onClick={()=>update("48",filter,SetFilter)}>48</button>
            <button onClick={()=>update("70",filter,SetFilter)}>70</button>
        </div>

      </div>

    );

}
export default Filter;