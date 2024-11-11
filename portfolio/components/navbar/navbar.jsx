import "@/style/home.css";

function Navbar() {
  return (
    <div className="nav_bar w-full items-center justify-between px-2 sm:flex">
      <span className="portfolio">Portfolio.</span>
      <div className="option-container">
        <a href="#section-1" className="nav_links">
          Home
        </a>
        <a href="#section-2" className="nav_links">
          Services
        </a>
        <a href="#section-3" className="nav_links">
          Resume
        </a>
        <a href="#section-4" className="nav_links">
          Projects
        </a>
        <a href="#section-5" className="nav_links">
          Contact
        </a>
      </div>
    </div>
  );
}
export default Navbar;
