import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

export default function RootLayout({ setCategory }) {
  return (
    <>
      <MainNavigation setCategory={setCategory} />
      <main>
        <Outlet />
      </main>
    </>
  );
}
