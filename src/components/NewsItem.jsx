import { Link } from "react-router-dom";
import Image from "../assets/nesw.jpg";
export const NewsItem = ({
  title,
  description,
  urlToImage,
  publishTime,
  author,
  content,
  source,
  sourceUrl,
}) => {
  return (
    <div
      className="card mb-3 mx-3 my-3 px-2 py-2 bg-dark text-light d-inline-block"
      style={{ maxWidth: "18rem" }}
    >
      <img
        src={urlToImage ? urlToImage : Image}
        style={{ height: "200px", width: "1 rem" }}
        className="card-img-top"
        alt={title}
      />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">
          {description
            ? description.slice(0, 90)
            : "Recent event that just happened. Checkout the the news foor more"}
        </p>
        <Link
          to={sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};
