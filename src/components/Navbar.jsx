

const Navbar = () => {
    return (
        <div className="sticky lg:hidden top-0 z-30 flex h-16 w-full justify-center bg-opacity-90 backdrop-blur transition-all duration-100 bg-gray-900 text-white shadow-sm">
        <div className="navbar">
          <div className="navbar-start">
            <label htmlFor="my-drawer" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
          </div>
          <div className="navbar-center">
            <a className="btn btn-ghost normal-case text-xl" href="/">
              Reynaldo Bejarano
            </a>
          </div>
          <div className="navbar-end" />
        </div>
      </div>
    )
}

export default Navbar;