import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white p-4 z-50">
      <ul className="flex justify-around">
        <li><Link to="personal" smooth={true} duration={500}>Personal</Link></li>
        <li><Link to="academic" smooth={true} duration={500}>Academics</Link></li>
        <li><Link to="work" smooth={true} duration={500}>Work</Link></li>
        <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
