import './body_right.css'
import { cartContext } from './App';
import { useContext } from 'react';
import { filterContext } from './App'

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
let Products=(props)=>
{
  const {filter,SetFilter} = useContext(filterContext)
    const {newArray,setMyArray} = useContext(cartContext)
    return(
    <div className="body_right">
     { 
      props.item.map(i =>{if(filter.length == 0){
        return (
          <div className="container">
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
                    <button className="addcart" onClick={()=>update(i,newArray,setMyArray)}>Add To Cart</button>
                    <button className="buycart"><b>Buy Now</b></button>
                    </div>
                </div>
            </div>
        )
      }else{
        if(filter.indexOf(i.inch) !=-1 || filter.indexOf(i.name) !=-1 || filter.indexOf(i.Screen) !=-1){
          return (
            <div className="container">
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
                      <button className="addcart" onClick={()=>update(i,newArray,setMyArray)}>Add To Cart</button>
                      <button className="buycart"><b>Buy Now</b></button>
                      </div>
                  </div>
              </div>
          )
        }
      }})
     } 
     </div>
     
    

    );

}
export default  Products;