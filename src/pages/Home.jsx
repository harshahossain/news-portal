import { NewsBoard } from "../components/NewsBoard";
import "./Home.css";

export default function HomePage({ category }) {
  return (
    <div id="main">
      <h1 className="text-center" id="hero">
        Your Daily Online News
      </h1>
      <NewsBoard category={category} />
    </div>
  );
}
