import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center fixed top-0 left-0 right-0 z-10">
      {/* Eldes logo */}
      <div className="ml-8 flex items-center">
        <img src="/public/images/eldes_logo.jpg" alt="Eldes Logo" className="h-8 w-auto"/>
      </div>
      <ul className="mr-8 flex space-x-6">
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
