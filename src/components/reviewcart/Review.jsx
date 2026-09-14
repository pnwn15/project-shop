import { review } from "../../data/review";

function Review({ currentIndex }) {
  const isMobile = window.innerWidth < 991;

  const displayCount = isMobile ? 1 : 4;

  return (
    <div className="row g-3 ">
      {review
        .slice(currentIndex, currentIndex + displayCount)
        .map((item) => (
          <div
            key={item.id}
            className={isMobile ? "col-12" : "col-12 col-md-6 col-lg-3"}
          >
            <div className="border rounded p-4 h-100">
              <div className="d-flex flex-column gap-2">
                <span className="stars">★★★★★</span>
                <h5>{item.username}</h5>
                <p>{item.detail}</p>
                <p>{item.date}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Review;
