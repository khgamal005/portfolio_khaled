import { useState } from 'react';
import { RiMenu3Line } from "react-icons/ri"
import { AiOutlineClose } from "react-icons/ai"
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
  const [mobile, setMobile] = useState(false);

  const toggleMobile = (val) => {
    setMobile(val);
    document.body.style.overflow = val ? 'hidden' : '';
  };

  return (
    <nav className="app__navbar">
      <motion.div className="app__navbar-logo"
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "tweet",
          stiffness: 260,
          damping: 20
        }}
      >
        <img src={images.logo} alt="logo" />
      </motion.div>

      <ul className="app__navbar-links">
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <button className="app__navbar-menu-btn" onClick={() => toggleMobile(true)} aria-label="Open menu">
        <RiMenu3Line />
      </button>

      {mobile && (
        <>
          <div className="app__navbar-overlay" onClick={() => toggleMobile(false)} />
          <motion.div
            className="app__navbar-sidebar"
            initial={{ x: 300 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <button className="app__navbar-sidebar-close" onClick={() => toggleMobile(false)} aria-label="Close menu">
              <AiOutlineClose />
            </button>
            <ul>
              {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => toggleMobile(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
