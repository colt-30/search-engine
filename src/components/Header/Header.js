import "./Header.css";
import Login from "./Login";


const Header = ()=>{
    return (
      // <><span onClick={() => window.scroll(0, 0)} className="header">
      //   🎬 Entertainment Hub 🎥
      // </span>
      <div className="g-sign">
          <Login />
        </div>
    );
};
export default Header;