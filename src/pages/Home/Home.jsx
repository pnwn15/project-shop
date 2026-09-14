import { useState, useEffect } from "react";
import Carousel1 from "../../assets/picture/carousel/carousel1.png";
import stylecasual from "../../assets/picture/style/stylecasual.png"
import styleformal from "../../assets/picture/style/styleformal.png"
import stylegym from "../../assets/picture/style/stylegym.png"
import styleparty from "../../assets/picture/style/styleparty.png"
import Review from "../../components/reviewcart/Review";
import { review } from "../../data/review";
import ProductCart from "../../components/product/ProductCart";
import { useProduct } from "../../hooks/useProduct";
function Home() {
  const [currentIndex, setcurrentIndex] = useState(0);
  const {productData,loading,error} = useProduct()
  const newArrival = productData.slice(0,4).sort((a,b)=> b.rating.count - a.rating.count)
  const topSelle = productData.slice(0,4).sort((a,b)=> b.rating.rate - a.rating.rate)
  const nextReview = () => {
    if (currentIndex < review.length - 1) {
      setcurrentIndex(currentIndex + 1);
    }
  };

  const prevReview = () => {
    if (currentIndex > 0) {
      setcurrentIndex(currentIndex - 1);
    }
  };
  const slides = [
    {
      id: 1,
      image: Carousel1,
      title: "FIND CLOTHES THAT MATCHES YOUR STYLE",
      description:
        "Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.",
      button: "Shop Now",
      buttonClass: "btn-dark",
      stats: [
        {
          value: "200+",
          label: "International Brands",
        },
        {
          value: "2,000+",
          label: "High-Quality Products",
        },
        {
          value: "30,000+",
          label: "Happy Customers",
        },
      ],
    },
  ];

  return (
    <main>
      {/* Hero Carousel */}
      <section className="hero-carousel">
        <div
          id="homeCarousel"
          className="carousel carousel-dark slide"
          data-bs-ride="carousel"
        >
          {/* Indicators */}
          <div className="carousel-indicators">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                data-bs-target="#homeCarousel"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-current={index === 0 ? "true" : undefined}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Slides */}
          <div className="carousel-inner">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                data-bs-interval="5000"
              >
                <img
                  src={slide.image}
                  className="d-block w-100"
                  alt={slide.title}
                />

                <div className="carousel-caption">
                  <h1>{slide.title}</h1>
                  <p>{slide.description}</p>
                  <button
                    type="button"
                    className={`btn ${slide.buttonClass} btn-shop`}
                  >
                    {slide.button}
                  </button>

                  {/* Stats */}
                  {slide.stats && (
                    <div className="hero-stats">
                      {slide.stats.map((stat) => (
                        <div key={stat.label} className="hero-stat">
                          <h2>{stat.value}</h2>
                          <p>{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="product-our">
          <div className="container">
            <div className="d-flex justify-content-between py-4 flex-wrap">
              <h2><em>VERSACE</em></h2>
              <h2><em>ZARA</em></h2>
              <h2><em>GUCCI</em></h2>
              <h2><em>PRADA</em></h2>
              <h2><em>Calvin Kelin</em></h2>
              <h2><em>Adidas</em></h2>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome */}
      <section className="py-5 ">
        <div className="container text-center border-bottom pb-5">
          <h2>NEW ARRIVALS</h2>
          <div className="d-flex justify-content-between mt-5 mb-5 overflow-auto w-100 gap-5">
            {newArrival.map((items) => (
              <div key={items.id}>
                <ProductCart items={items} />
              </div>
            ))}
          </div>
          <button className="btn btn-dark px-5 rounded-pill">View all</button>
        </div>
      </section>

      {/* Features */}
      <section className="py-3">
        <div className="container text-center">
          <h2>TOP SELLING</h2>
          <div className="d-flex justify-content-between mt-5 mb-5 overflow-auto w-100 gap-5">
            {topSelle.map((product) => (
              <div key={product.id}>
                <ProductCart items={product} />
              </div>
            ))}
          </div>
          <button className="btn btn-dark px-5 rounded-pill">View all</button>
        </div>
      </section>

      <section className="pt-5 ">
        <div className="container text-center bg-body-secondary py-5 rounded">
          <h2>BROWSE BY DRESS STYLE</h2>

          <div className="row mt-5 mb-5 g-3 justify-content-center">
            <div className="col-md-4 col-12">
              <div
                className="card-style"
                style={{ backgroundImage: `url(${stylecasual})` }}
              >
                <h3>Casual</h3>
              </div>
            </div>

            <div className="col-md-6 col-12">
              <div
                className="card-style"
                style={{ backgroundImage: `url(${styleformal})` }}
              >
                <h3>Formal</h3>
              </div>
            </div>

            <div className="col-md-6 col-12">
              <div
                className="card-style"
                style={{ backgroundImage: `url(${stylegym})` }}
              >
                <h3>Party</h3>
              </div>
            </div>

            <div className="col-md-4 col-12">
              <div
                className="card-style"
                style={{ backgroundImage: `url(${styleparty})` }}
              >
                <h3>Gym</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-3 pt-5">
        <div className="container">
          <div className="d-flex justify-content-between mb-5">
            <h2>OUR HAPPY CUSTOMERS</h2>
            <div className="d-flex ">
              <button
                className="btn bg-transparent"
                onClick={() => prevReview()}
                disabled={currentIndex === 0}
              >
                <i className="fa-solid fa-arrow-left-long"></i>
              </button>
              <button
                className="btn bg-transparent"
                onClick={() => nextReview()}
                disabled={currentIndex >= review.length - 1}
              >
                <i className="fa-solid fa-arrow-right-long"></i>
              </button>
            </div>
          </div>
          <div className="d-flex gap-3">
            <Review currentIndex={currentIndex} />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
