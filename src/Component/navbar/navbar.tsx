import { useState } from "react";
import logoText from "../../assets/logo-text.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["Home", "Technologies", "Projects", "About", "Contact"];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Mobile Hamburger */}
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-md text-gray-700 hover:bg-gray-100 md:hidden"
          >
            <span className="text-2xl">☰</span>
          </button>

          {/* Left Side Logo  */}

          <img
            className="text-xl font-bold text-gray-900 md:mr-auto"
            src={logoText}
            alt="Dev Stack Logo"
          />

          {/* Desktop Menu  */}

          <div className="hidden items-center gap-8 md:flex">
            {menuItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm font-medium text-gray-600 transition-colors hover:text-blue-600"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Right Side Two Buttons */}

          <div className="ml-auto flex items-center gap-2 md:ml-auto">
            <button
              type="button"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-blue-600"
            >
              Sign In
            </button>

            <button
              type="button"
              className="rounded-md bg-[#D91B7E] px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-[#f06cb0]"
            >
              Sign Up
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="border-t border-gray-200 py-4 md:hidden">
            <div className="flex flex-col gap-1">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-md px-3 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-blue-600"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
