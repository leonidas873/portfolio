import styled, { keyframes } from "styled-components";
import {motion} from 'framer-motion';

const NavAanimate = keyframes`
from{transform:translateY(-100%)}
to{transform:translateY(0)}
`;

export const NavStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(31, 0, 77);
  position: ${(props) => (props.animate ? "sticky" : "relative")};
  top: 0;
  left: 0;
  width: 100%;
  z-index: 123412312312312;
  margin-top: 0.1px;
  animation-name: ${(props) => (props.animate ? NavAanimate : "")};
  animation-duration: 1s;
`;
//   <button style={{position:'fixed', top:'100px', left:'50px'}} onClick={()=>setActivateNavAnimation(state=>!state)}>click</button>

export const NavContent = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  padding: 0px 15px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.a`
  text-transform: uppercase;
  color: white;
  transition: 0.3s;
  font-size: 20px;
  cursor: pointer;
  text-decoration: none;
  span {
    transition: 0.3s;
  }
  &:hover span {
    color: #cc0045;
  }
  position: relative;
  padding: 15px 20px;
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 3px;
    bottom: 0;
    left: 0;
    background-color: #cc0045;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }
  &:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

export const Dropdown = styled.div`
  display: none;
  height:55px;
  width:100%;
  position:relative;
  box-sizing:border-box;
  padding:0px 15px;
  @media (max-width: 768px) {
    display: flex !important;
    align-items:center;
    justify-content:flex-end;
  }
  svg{
    color:white;
    font-size:30px;
    padding:0 10px;
    cursor:pointer;
  }
`;

export const DropdownContent = styled(motion.div)`
    position:absolute;
    left:0;
    top:55px;
  width: 100%;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  box-sizing:border-box;
  padding:10px;
  border-top:2px solid #33ffba;
  background-color:#350085;

`

export const DropDownItem = styled.a`
width:100%;
 text-transform: uppercase;
  color: white;
  transition: 0.3s;
  font-size: 20px;
  cursor: pointer;
  text-decoration: none;
  span {
    transition: 0.3s;
  }
  &:hover span {
    color: #cc0045;
  }
padding:10px;
`