import logo from '../assets/images/logo.svg'
import PageLinks from './PageLinks'


const Navbar = () => {

  function handleButton() {
    document.getElementById("nav-content").classList.toggle("hidden")
  }

  return (
    <div>
      <header className="flex items-center justify-between flex-wrap py-4 w-full bg-yellow-200">
        <div className="flex shrink-0 ml-6 cursor-pointer">
          <span className="text-3xl font-bold text-green-700">FixHub</span>
        </div>

        <button
          id="nav-toggle" onClick={handleButton}
          class="md:hidden p-2 mr-4 ml-6 my-2 border rounded border-gray-600 text-black hover:border-blue-200">
          <i class="fas fa-bars fa-2x"></i>
        </button>
        <div className="pl-6 w-full md:w-auto hidden md:block" id="nav-content">
          <PageLinks parentClass='md:flex'
            itemClass='mr-6 p-1 text-green-700 hover:text-blue-300' />
          <ul className="md:flex">
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
                className="nav-icon"
              >
                <i className="fab fa-facebook" />
              </a>
            </li>
            <li>
              <a
                href="https://www.x.com"
                target="_blank"
                rel="noreferrer"
                className="nav-icon"
              >
                <i className="fab fa-x-twitter" />
              </a>
            </li>
            <li>
              <a
                href="https://www.squarespace.com/"
                target="_blank"
                rel="noreferrer"
                className="nav-icon"
              >
                <i className="fab fa-squarespace" />
              </a>
            </li>
          </ul>
        </div>
      </header>
    </div>

  );
};

export default Navbar;
