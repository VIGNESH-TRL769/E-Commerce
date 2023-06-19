import './Header.css';
import Card from './Card'
import { Link } from 'react-router-dom';

let Header=()=>
 {
  return (
  
    <div className="header">
        <div className="left_head">
        <Link to="/"> <h1 class="head">TV ShowRoom</h1></Link>
        </div>
        <div className="right_head" >
          <p>Home</p>
          <p>About</p>
          <p>Contact</p>
          <p>Category</p>
          <p>Login</p>
        </div>
        <div>
            <Card></Card>
        </div>
      </div>
   
  );
}
export default Header;