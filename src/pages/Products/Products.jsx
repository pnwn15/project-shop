import { useState } from "react";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import Button from "../../components/button/ButtonComponent";

function Product() {
  const images = [
    "https://via.placeholder.com/460x460?text=Main",
    "https://via.placeholder.com/110x110?text=1",
    "https://via.placeholder.com/110x110?text=2",
    "https://via.placeholder.com/110x110?text=3",
  ];

  const [mainImage, setMainImage] = useState(images[0]);

  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Shop", path: "/Shop" },
    { label: "T-Shirt" },
  ];

  function handleClick(){
    console.log("fah noob")
  }
  return (
    <main>
      <div className="container">
        <div className="mt-5">
          <Breadcrumb items={breadcrumbItems} />
          <div className="mt-5 d-flex flex-md-row gap-3 flex-column flex-wrap">
            <div className="gap-3 order-md-1 order-1 thumnnails">
              {images.slice(1).map((img, index) => (
                <div
                  key={index}
                  className="border rounded overflow-hidden h-100"
                >
                  <img
                    src={img}
                    className="w-100 h-100"
                    style={{ objectFit: "cover", cursor: "pointer" }}
                    onClick={() => setMainImage(img)}
                  />
                </div>
              ))}
            </div>

            {/* Main image */}
            <div
              className="main-image-box flex-grow-1 d-flex align-items-center justify-content-center bg-light rounded order-md-2"
              style={{ minHeight: "480px", minWidth: "480px" }}
            >
              <img
                src={mainImage}
                alt="main product"
                style={{
                  maxHeight: "100%",
                  maxWidth: "100%",
                  objectFit: "contain",
                }}
              />
            </div>

            <div className="flex-grow-2 order-md-3 order-2 ps-md-3 ps-0">
              <h1>One Life Graphic T-shirt</h1>
              <span className="stars fs-3">★★★★★</span>
              <span className="rating-score ps-2">4.5/5</span>
              <div className="d-flex gap-3 align-items-center">
                <p className="text-black fs-4">$260 </p>
                <p>
                  <del className="text-secondary fs-4">$300</del>
                </p>
                <span className="badge">-40%</span>
              </div>
              <div className="mt-3" style={{ maxWidth: "400px" }}>
                <p>
                  This graphic t-shirt which is perfect for any occasion.
                  Crafted from a soft and breathable fabric, it offers superior
                  comfort and style.
                </p>
              </div>
              <hr />
              <div className="mt-3">
                <div className="d-flex flex-column">
                  <p>Select Colors</p>
                  <div className="d-flex gap-3 mt-2">
                    <div className="p-3 rounded-pill bg-black"></div>
                    <div className="p-3 rounded-pill bg-danger"></div>
                    <div className="p-3 rounded-pill bg-success"></div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="mt-3">
                <div className="d-flex flex-column">
                  <p>Choose Size</p>
                  <div className="d-flex gap-3 mt-2 text-sm">
                    <Button 
                      color="light"
                      onClick={handleClick} 
                      children="Small"/>
                    <Button 
                      color="light"
                      onClick={handleClick} 
                      children="Medium"/>
                    <Button 
                      color="light"
                      onClick={handleClick} 
                      children="Large"/>
                    <Button 
                      color="light"
                      onClick={handleClick} 
                      children="X-Large"/>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Product;
