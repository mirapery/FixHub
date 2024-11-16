import PageLinks from './PageLinks'
import SocialLinks from './SocialLinks';

const Footer = () => {
  return (
    <footer className=" bottom-0 flex items-center justify-between flex-wrap py-4 w-full bg-fh_dgreen">
      <div className="pl-6 w-full md:w-auto  md:block" id="nav-content">
        <SocialLinks parentClass='flex m-2'
          itemClass='mr-10 p-1 h-full text-fh_beige hover:text-fh_beige-light text-3xl' />
      </div>
      <p className="mr-10 p-1 text-xl h-full text-fh_beige">
        Copyright © FixHub <span id="date">2024</span>. All rights
        reserved.
      </p>
    </footer>

  );
}

export default Footer;
