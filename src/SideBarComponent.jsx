import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { HiOutlineSquares2X2 } from 'react-icons/hi2';
import { IoMdContact } from 'react-icons/io';
import { RiComputerLine } from 'react-icons/ri';
import { MdOutlineMail } from 'react-icons/md';
import styles from './sidebar.module.css';

const SideBar = () => {
  const [activeIcon, setActiveIcon] = useState(null);
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const handleSetActive = (iconName) => {
    setActiveIcon(iconName);
  };

  const handleMouseEnter = (iconName) => {
    setHoveredIcon(iconName);
  };

  const handleMouseLeave = () => {
    setHoveredIcon(null);
  };

  return (
    <nav>
      <ul className={styles.allIconContainer}>
        {[
          { name: 'Dashboard', to: 'me', Icon: HiOutlineSquares2X2, offset: -100 },
          { name: 'About', to: 'about', Icon: IoMdContact, offset: -50 },
          { name: 'Skills', to: 'skills', Icon: RiComputerLine, offset: -50 },
          { name: 'Contact', to: 'contact', Icon: MdOutlineMail, offset: -50 },
        ].map(({ name, to, Icon , offset }) => (
          <li key={name}>
            <Link
              to={to}
              containerId="scroll-container"  // 👈 tell react-scroll where to scroll

              smooth={true}
              duration={500}
              // activeClass={styles.active}
              // className={styles.navIconContainer}
              spy={true}

              offset={offset} 
               // optional: offset for fixed header




              className={`${styles.navIconContainer} ${
                activeIcon === name ? styles.active : ''
              }`}
              onClick={() => handleSetActive(name)}
              onMouseEnter={() => handleMouseEnter(name)}
              onMouseLeave={handleMouseLeave}
            >
              <Icon className={styles.navIcon} />
              {hoveredIcon === name && (
                <span className={styles.tooltip}>{name}</span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideBar;
