import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <Navbar />

      {/* Add top padding to prevent the fixed navbar from covering content */}
      <main style={{ paddingTop: 72 }}>
        <Outlet />
      </main>
    </>
  );
}
