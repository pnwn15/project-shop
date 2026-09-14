import { useState } from "react";
import { Link } from "react-router-dom";
import { listMenu } from "../../data/navbar";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-bottom bg-white ">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between py-3">
          <div className="d-flex align-items-center gap-3">
          <button
            className="border-0 p-2 d-md-none btn mt-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
          <Link to="/" className="logo">
            <img width={50} src="https://i.namu.wiki/i/wFnSC8TrHC-2I-L9X8YUrcsD2wjuQPOOmw6BMrPNK0MP7eT4hDiN_veYO89v0xkDHb5OGcnrPvHIICZuKplhRg.svg" alt="" />
          </Link>
          </div>

          <nav className="d-none d-md-flex align-items-center justify-content-around gap-4 flex-grow-1 ms-5">
            <div className="d-flex gap-4">
              {listMenu.map((item) => (
                <Link
                  key={item.id}
                  to={item.href}
                  className="text-nowrap nav-link-custom"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="input-group username-input w-50 d-none d-lg-flex">
              <span className="input-group-text" id="basic-addon1">
                <i className="fa-solid fa-magnifying-glass"></i>
              </span>
              <input
                type="text"
                className="form-control "
                placeholder="Search for products..."
              />
            </div>
          </nav>
          <div className="d-flex">
            <button
              className="btn d-lg-none"
              onClick={() => console.log("Hello")}
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            <button className="btn" onClick={() => console.log("Hello")}>
              <i className="fa-solid fa-cart-shopping"></i>
            </button>
            <button className="btn" onClick={() => console.log("Hello")}>
              <i className="fa-regular fa-circle-user"></i>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <nav className="d-flex d-md-none flex-column gap-3 pb-3">
            {listMenu.map((item) => (
              <Link key={item.id} to={item.href}>
                {item.name}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
