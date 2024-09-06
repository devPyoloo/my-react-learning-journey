import { NavLink, Outlet } from "react-router-dom";

export default function Help() {
  return (
    <div className="help">
      <h1>Help</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur fugit, corporis reiciendis dolores voluptates porro doloribus nostrum numquam quaerat soluta perferendis, quod earum iusto. Deleniti eveniet sunt culpa asperiores beatae?</p>
      <nav className="pt-10 flex justify-between items-center w-36">
      <NavLink to={"faq"} className="bg-neutral-500 py-1 px-3 rounded-sm text-white hover:bg-neutral-400"> FAQ </NavLink>
      <NavLink to={"contact"} className="bg-orange-500 py-1 px-3 rounded-sm text-white hover:bg-orange-400"> Contact </NavLink>
      </nav>
      <Outlet />

    </div>
  );
}
