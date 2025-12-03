import { Link } from "react-router-dom";

const NavLists = () => {
  return (
    <div className="navlist">
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/services"}>Services</Link>
        </li>
        <li>
          <Link to={"/portfolio"}>Portfolio</Link>
        </li>
        <li>
          <Link to={"/pricing"}>Pricing</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
        <li>
          <Link to={"/login"}>Login/Signup</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavLists;
