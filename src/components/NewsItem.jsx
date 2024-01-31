import { Link } from "react-router-dom";
import Image from "../assets/nesw.jpg";
import "./NewsItem.css";

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
        <h5 className="card-title fs-4">{title.slice(0, 50)}</h5>
        <p className="card-text fst-italic" id="pbInfo">
          <span className="fw-semibold fs-6">
            {author ? `${author} - ` : ""}
          </span>{" "}
          <span>{publishTime.slice(0, 10)}</span>
        </p>
        <p className="card-text">
          {description
            ? description.slice(0, 90)
            : "Recent event that just happened. Checkout the the news foor more"}
        </p>
        <div className="d-inline-block"></div>

        <Link
          to={sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary d-block"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};
