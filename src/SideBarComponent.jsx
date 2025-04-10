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
          { name: 'Dashboard', to: 'me', Icon: HiOutlineSquares2X2 },
          { name: 'About', to: 'about', Icon: IoMdContact },
          { name: 'Skills', to: 'skills', Icon: RiComputerLine },
          { name: 'Contact', to: 'contact', Icon: MdOutlineMail },
        ].map(({ name, to, Icon }) => (
          <li key={name}>
            <Link
              to={to}
              smooth={true}
              duration={500}
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
