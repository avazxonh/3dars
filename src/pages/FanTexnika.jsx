import { NavLink } from "react-router-dom";

export default function FanTexnika() {
  return (
    <header className="header container">
      <nav className="navbar">
        <a href="/">
          <img
            cl
            src="../src/images/site-logo.png"
            alt=""
            width={120}
            height={50}
          />
        </a>
        <ul>
          <li>
            <NavLink to={"/ozbekiston"}>O'zbekiston</NavLink>
          </li>
          <li>
            <NavLink to={"/jahon"}>Jahon</NavLink>
          </li>
          <li>
            <NavLink to={"/iqtisodiyot"}>Iqtisodiyot</NavLink>
          </li>
          <li>
            <NavLink to={"/jamiyat"}>Jamiyat</NavLink>
          </li>
          <li>
            <NavLink to={"/sport"}>Sport</NavLink>
          </li>
          <li>
            <NavLink to={"/fantexnika"}>Fan-texnika</NavLink>
          </li>
          <li>
            <NavLink to={"/nuqtayinazar"}>Nuqtayi nazar</NavLink>
          </li>
          <li>
            <NavLink to={"/audio"}>Audio</NavLink>
          </li>
        </ul>
        <div className="button_end">
          <button className="button_end_item btn_one btn btn-outline">
            <i class="fa-solid fa-globe"></i>
            O'zbekcha
          </button>
          <button className="button_end_item btn btn-outline">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
          <button className="button_end_item btn btn-outline">
            <i class="fa-solid fa-bars"></i>
          </button>
        </div>
      </nav>
      <h1 className="pages_name">Fan Texnika Sahifasi</h1>
    </header>
  );
}
