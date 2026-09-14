import footericon from "../../assets/picture/footer/footericon.png";

function Footer() {
  return (
    <footer className="footer mt-5">
      <div className="container">
        <div className="border stay-up">
          <div className="d-flex flex-md-row flex-column justify-content-around align-items-md-center gap-3">
            <h3 className="mb-0">STAY UPTO DATE ABOUT OUR LATEST OFFERS</h3>

            <div className="d-flex flex-column w-100 ">
              <div className="input-group username-input h-25 ">
                <span className="input-group-text" id="basic-addon1">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your email address"
                />
              </div>

              <button className="btn btn-light rounded-pill w-100 mt-2">
                Subscribe to Newsletter
              </button>
            </div>
          </div>
        </div>
        <div className="d-flex flex-md-row flex-column justify-content-between border-bottom pb-3 pt-5 mt-md-3 mt-5">
          <div className="footer-brand">
            <img
              className="pb-3"
              width={50}
              src="https://i.namu.wiki/i/wFnSC8TrHC-2I-L9X8YUrcsD2wjuQPOOmw6BMrPNK0MP7eT4hDiN_veYO89v0xkDHb5OGcnrPvHIICZuKplhRg.svg"
              alt=""
            />
            <p>
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
            <div className="d-flex gap-2 pt-3 pb-3">
              <button className="btn btn-icons btn-social border rounded-pill bg-white">
                <i class="fa-brands fa-twitter"></i>
              </button>
              <button className="btn border btn-social rounded-pill bg-white">
                <i class="fa-brands fa-facebook-f"></i>
              </button>
              <button className="btn border btn-social rounded-pill bg-white">
                <i className="fa-brands fa-instagram"></i>
              </button>
              <button className="btn border btn-social rounded-pill bg-white">
                <i className="fa-brands fa-github"></i>
              </button>
            </div>
          </div>
          <div className="row footer-list ps-md-5">
            <div className="col-6 col-md-3 text-start mb-3 mt-1">
              <h6>Company</h6>
              <div className="flex-column d-flex gap-2 pt-3">
                <a>About</a>
                <a>Features</a>
                <a>Works</a>
                <a>Career</a>
              </div>
            </div>
            <div className="col-6 col-md-3 text-start mb-3 mt-1">
              <h6>Help</h6>
              <div className="flex-column d-flex gap-2 pt-3">
                <a>Customer Support</a>
                <a>Delivery Details</a>
                <a>Terms & Conditions</a>
                <a>Privacy Policy</a>
              </div>
            </div>
            <div className="col-6 col-md-3 text-start mb-3 mt-1">
              <h6>FAQ</h6>
              <div className="flex-column d-flex gap-2 pt-3">
                <a>Account</a>
                <a>Manage Deliveries</a>
                <a>Orders</a>
                <a>Payments</a>
              </div>
            </div>
            <div className="col-6 col-md-3 text-start mb-3 mt-1">
              <h6>Resources</h6>
              <div className="flex-column d-flex gap-2 pt-3">
                <a>Free eBooks</a>
                <a>Development Tutorial</a>
                <a>How to - Blog</a>
                <a>Youtube Playlist</a>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center pt-4 flex-md-row flex-column">
          <p>Shop.co © 2000-2023, All Rights Reserved</p>
          <img src={footericon} alt="" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
