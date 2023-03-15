import './body_right.css'
import Header from "./Header";
import {Link} from 'react-router-dom';
import { cartContext } from "./App";
import { useContext } from "react";
let update=(i,newArray,setMyArray)=>
{
  if(newArray.indexOf(i)===-1)
  {
    setMyArray([...newArray,i])
  }
  else{
    let temp = [...newArray]
    temp.splice(temp.indexOf(i),1)
    setMyArray(temp)
   
  }
  console.log(newArray)
}
let Viewpage=(props)=>
{
    const {newArray,setMyArray} = useContext(cartContext)
    return(

        <div>
            <Header></Header>
            <Link  to="/"><button class="prevbutton">Prev</button></Link>
            {
            props.item.map(i =>
                {
                return(
                    <div key={i.id} className="container">
                        <div className="content">
                            <div className="top">
                            <h3>{i.model}</h3>
                        
                            <img src={i.img} className="image"></img>
                            </div>
                            <div className="bottom">
                            <p>{i.det}</p>
                            <p className="price"><b>{i.Rate}</b></p>
                            </div>
                            <div className="cart">
                            <button className="addcart" onClick={()=>update(i,newArray,setMyArray)}>Remove</button>
                            <button className="buycart"><b>Buy Now</b></button>
                            </div>
                        </div>
                    </div>

                );
                })
     } 

        </div>
    );
}
export default Viewpage;