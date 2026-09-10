import {
  FaGithub,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white">
      {/* Main Footer */}
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-3 lg:px-8">
        {/* Left Section */}
        <div>
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-sm font-bold text-white">
              DS
            </div>

            <span className="text-xl font-bold text-slate-900">
              Dev Stack
            </span>
          </div>

          {/* Description */}
          <p className="mt-5 max-w-sm text-sm leading-6 text-slate-500">
            Build, organize, and explore your perfect development
            stack with the technologies you love.
          </p>

          {/* Social */}
          <div className="mt-7">
            <p className="text-sm font-semibold text-slate-900">
              Connect with us
            </p>

            <div className=" flex items-center  gap-5 mt-4 space-y-3">
              {/* GitHub */}
              <a
                href="#"
                className="group flex items-center gap-3 text-sm text-slate-500 transition-colors hover:text-slate-900"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 transition-colors group-hover:bg-slate-200">
                  <FaGithub size={16} />
                </span>

                <span>GitHub</span>
              </a>

              {/* Twitter */}
              <a
                href="#"
                className="group flex items-center gap-3 text-sm text-slate-500 transition-colors hover:text-slate-900"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 transition-colors group-hover:bg-slate-200">
                  <FaTwitter size={16} />
                </span>

                <span>Twitter</span>
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                className="group flex items-center gap-3 text-sm text-slate-500 transition-colors hover:text-slate-900"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 transition-colors group-hover:bg-slate-200">
                  <FaLinkedinIn size={16} />
                </span>

                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Middle Section */}
        <div>
          <h3 className="text-sm font-bold tracking-wider text-slate-900">
            PRODUCT
          </h3>

          <ul className="mt-5 space-y-4">
            <li>
              <a
                href="#"
                className="text-sm text-slate-500 transition-colors hover:text-slate-900"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-sm text-slate-500 transition-colors hover:text-slate-900"
              >
                Technologies
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-sm text-slate-500 transition-colors hover:text-slate-900"
              >
                Projects
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-sm font-bold tracking-wider text-slate-900">
            COMPANY
          </h3>

          <ul className="mt-5 space-y-4">
            <li>
              <a
                href="#"
                className="text-sm text-slate-500 transition-colors hover:text-slate-900"
              >
                Product
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-sm text-slate-500 transition-colors hover:text-slate-900"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-sm text-slate-500 transition-colors hover:text-slate-900"
              >
                Legal
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-5 text-center sm:px-6 lg:px-8">
          <p className="text-sm text-slate-500">
            © 2026 Dev Stack. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;