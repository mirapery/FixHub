import logo from '../assets/images/logo.svg'
import PageLinks from './PageLinks'


const Navbar = () => {

  function handleButton() {
    document.getElementById("nav-content").classList.toggle("hidden")
  }

  return (
    <div>
      <header className="flex items-center justify-between flex-wrap py-4 w-full bg-fh_dgreen">
        <div className="flex shrink-0 ml-6 cursor-pointer">
          <span className="text-4xl font-bold font-sans text-fh_beige">FixHub</span>
        </div>

        <button
          id="nav-toggle" onClick={handleButton}
          class="md:hidden p-2 mr-4 ml-6 my-2 border rounded border-gray-600 text-fh_beige hover:border-blue-200">
          <i class="fas fa-bars fa-2x"></i>
        </button>
        <div className="pl-6 w-full md:w-auto hidden md:block" id="nav-content">
          <PageLinks parentClass='md:flex'
            itemClass='mr-10 p-1 h-full border-radius-10px text-fh_beige hover:text-fh_beige-light hover:bg-fh_dgreen-light text-2xl' /> 
        </div>
      </header>
    </div>

  );
};

export default Navbar;
