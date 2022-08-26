import { useEffect, useState } from "react";
import { NavStyled, NavContent, NavItem, Dropdown, DropdownContent, DropDownItem } from "./styles.js";
import {  AnimatePresence } from "framer-motion";
import {GiHamburgerMenu} from 'react-icons/gi';



const Nav = () => {
  const [activateNavAanimation, setActivateNavAnimation] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      const sumOfHeights =
        document.getElementById("intro").clientHeight +
        document.getElementById("nav").clientHeight;
      if (window.scrollY > sumOfHeights && !activateNavAanimation) {
        setActivateNavAnimation(true);
      }
      if (
        window.scrollY < document.getElementById("intro").clientHeight - 20 &&
        activateNavAanimation
      ) {
        setActivateNavAnimation(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {
        console.log("eventListener removed");
      });
    };
  }, [activateNavAanimation]);

  return (
    <NavStyled id="nav" animate={activateNavAanimation}>
      <NavContent>
        <NavItem href="#">
          <span>Home</span>
        </NavItem>
        <NavItem href="#skills">
          <span>skills</span>
        </NavItem>
        <NavItem href="#projects">
          <span>Projects</span>
        </NavItem>
        <NavItem href="#contact">
          <span>Contact</span>
        </NavItem>
      </NavContent>
      <Dropdown>
        <GiHamburgerMenu onClick={()=>setShowDropdown(state=>!state )}/>
        <AnimatePresence>
        {showDropdown && <DropdownContent
        initial={{
            opacity: 0.6,
            translateY: 8,
            
            scaleY: 0,
          }}
          animate={{ opacity: 1, translateY: 0, scaleY: 1 }}
          exit={{ opacity: 0, translateY: 8,  scaleY: 0}}
          style={{ originY: 0 }}
          transition={{ type: "tween" }}
        >
          <DropDownItem href="#">
            <span>Home</span>
          </DropDownItem>
          <DropDownItem href="#skills">
            <span>skills</span>
          </DropDownItem>
          <DropDownItem href="#projects">
            <span>Projects</span>
          </DropDownItem>
          <DropDownItem href="#contact">
            <span>Contact</span>
          </DropDownItem>
        </DropdownContent>}
        </AnimatePresence>
      </Dropdown>
    </NavStyled>
  );
};

export default Nav;
