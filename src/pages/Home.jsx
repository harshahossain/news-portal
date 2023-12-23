import { NewsBoard } from "../components/NewsBoard";

export default function HomePage({ category }) {
  return (
    <>
      <h1 className="text-center">Your Daily Online News</h1>
      <NewsBoard category={category} />
    </>
  );
}
