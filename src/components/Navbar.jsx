// import { Link } from 'react-router-dom';

// export default function Navbar() {
//   return (
//     <nav className="flex justify-between items-center p-4 bg-blue-800 text-white">
//       <div className="text-2xl font-bold">Shreeji CNG</div>
//       <div className="flex gap-6">
//         <Link to="/" className="hover:text-yellow-400">Home</Link>
//         <Link to="/services" className="hover:text-yellow-400">Services</Link>
//         <Link to="/about" className="hover:text-yellow-400">About</Link>
//         <Link to="/contact" className="hover:text-yellow-400">Contact</Link>
//       </div>
//     </nav>
//   );
// }

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Optional: You can also use your own icons

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-blue-800 text-white relative">
      <div className="text-2xl font-bold">Shreeji CNG Re-testing</div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6">
        <Link to="/" className="hover:text-yellow-400">Home</Link>
        <Link to="/services" className="hover:text-yellow-400">Services</Link>
        <Link to="/about" className="hover:text-yellow-400">About</Link>
        <Link to="/contact" className="hover:text-yellow-400">Contact</Link>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-blue-800 flex flex-col items-center gap-6 p-4 md:hidden">
          <Link to="/" className="hover:text-yellow-400" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/services" className="hover:text-yellow-400" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link to="/about" className="hover:text-yellow-400" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/contact" className="hover:text-yellow-400" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}

