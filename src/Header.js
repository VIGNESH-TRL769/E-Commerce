import './Header.css';
import Card from './Card'
let Header=(props)=>
 {
  return (
  
    <div className="header">
        <div className="left_head">
          <h1>TV ShowRoom</h1>
        </div>
        <div className="right_head">
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