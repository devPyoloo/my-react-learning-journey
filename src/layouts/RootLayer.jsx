import { NavLink, Outlet } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";

export default function Rootlayer() {
  return (
    <div>
    <nav className="layout py-10 mb-5 text-xl border-b-2 border-gray-600 shadow-md font-semibold text-white bg-neutral-500 flex items-center justify-center gap-10">
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"add"}>Add Quote</NavLink>
      <NavLink to={"help"}>Help</NavLink>
      <NavLink to={"quotes"}>Quotes</NavLink>
      <NavLink to={"posts"}>Posts</NavLink>
    </nav>

    <Breadcrumbs />
      <main>
        <Outlet />
      </main>
      </div>
  );
}
