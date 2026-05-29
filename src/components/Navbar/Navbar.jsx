import  { useState } from 'react';
import { RiMenu3Line } from "react-icons/ri"
import { AiOutlineClose } from "react-icons/ai"
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
  const [mobile, setMobile] = useState(false);

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
      <motion.ul className="app__navbar-links"

        initial={{x:500}}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.85, type: "spring",
        stiffness: 260,
        damping: 20}}
      >
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </motion.ul>

      <div className="app__navbar-menu">
 
      {mobile ?<AiOutlineClose  onClick={() => setMobile(false)}  className="themeIcon"/>:
      <RiMenu3Line onClick={() => setMobile(true)} className="themeIcon"/>} 


        {mobile && (
          <motion.div
          whileInView={{ x: [300, 0 ]  }}
          transition={{ duration: 1,
          stiffness: 260,
          damping: 20
        
        }}
          >
            <ul>
              {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setMobile(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}

      </div>


    </nav>
  );
};

export default Navbar;
