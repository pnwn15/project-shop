

function Breadcrumb({ items }) {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li
              key={item.label}
              className={`breadcrumb-item ${isLast ? "active" : ""}`}
              aria-current={isLast ? "page" : undefined}
            >
              {isLast ? (
                item.label
              ) : (
                <a href={item.path}>{item.label}</a>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumb;

