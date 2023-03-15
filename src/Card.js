import { FaCartArrowDown } from "react-icons/fa";
import { useContext } from "react";
import './Header.css';
import {Link} from 'react-router-dom';
import { cartContext } from './App';
let Card=(props)=>
{
    const {newArray} = useContext(cartContext)
    
    return(
        
        <div class="card">
            <div className="count">
               {newArray.length}
            </div>
            <div className="right_head_end">
                   <Link to="/Cart"><FaCartArrowDown className='cardicon'/></Link> 
                    <p><b>Cart</b></p>
            </div>
        </div>

    );

}
export default Card;