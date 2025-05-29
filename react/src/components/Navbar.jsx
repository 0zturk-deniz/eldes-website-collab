import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-indigo-600">Eldes</div>
      <ul className="flex space-x-6">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-indigo-600 font-semibold"
                : "text-gray-600 hover:text-indigo-600"
            }
          >
            Anasayfa
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/urunler"
            className={({ isActive }) =>
              isActive
                ? "text-indigo-600 font-semibold"
                : "text-gray-600 hover:text-indigo-600"
            }
          >
            Ürünler
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/iletisim"
            className={({ isActive }) =>
              isActive
                ? "text-indigo-600 font-semibold"
                : "text-gray-600 hover:text-indigo-600"
            }
          >
            İletişim
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
