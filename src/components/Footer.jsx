export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-gray-900 text-gray-300 p-8 md:p-12 rounded-t-3xl text-center mt-16"
    >
      <div className="flex flex-col md:flex-row justify-center items-center md:space-x-12 mb-8">

        {/* Logo */}
        <a href="/" className="font-bold text-2xl text-white mb-4 md:mb-0">
          GreenEra
        </a>

        {/* Social Icons */}
        <div className="flex space-x-6 text-xl">
          {/* Facebook */}
          <a
            href="#"
            className="hover:text-green-500 transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.6 9.17 8.44 9.94v-7.05H7.56V12h2.88V9.33c0-3.08 1.89-4.75 4.62-4.75 1.31 0 2.45.09 2.78.13v3.18l-1.88.01c-1.47 0-1.75.7-1.75 1.72V12h3.58l-.58 3.55h-3V22c5.05-.72 8.99-4.99 8.99-10z"></path>
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="#"
            className="hover:text-green-500 transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zm-4 17h-2v-4h-2v4H9v-6h2V9h2v2h2v6zm-2-9h-2V7h2v1z"></path>
            </svg>
          </a>

          {/* Twitter */}
          <a
            href="#"
            className="hover:text-green-500 transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M23.954 4.569a10 10 0 0 1-2.825.775 
              4.932 4.932 0 0 0 2.16-2.723 
              9.982 9.982 0 0 1-3.13 1.196 
              4.929 4.929 0 0 0-8.396 4.542 
              13.974 13.974 0 0 1-10.14-5.116 
              4.932 4.932 0 0 0 1.522 6.577 
              4.904 4.904 0 0 1-2.228-.616v.06 
              a4.926 4.926 0 0 0 3.95 4.827 
              4.945 4.945 0 0 1-2.228.085 
              4.932 4.932 0 0 0 4.604 3.42 
              C4.07 22.477-2.216 25.207-10.285 25.207 
              c-1.397 0-2.765-.081-4.098-.239a13.928 
              13.928 0 0 0 7.55 2.215 
              c9.055 0 16.673-7.514 16.673-16.674 
              0-.254-.006-.508-.016-.761 
              a11.97 11.97 0 0 0 2.924-3.058z"></path>
            </svg>
          </a>
        </div>
      </div>

      <p className="text-sm">
        © {new Date().getFullYear()} GreenEra Waste Solutions. All rights reserved.
      </p>
    </footer>
  );
}
