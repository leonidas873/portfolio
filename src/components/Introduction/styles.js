import styled, {keyframes} from "styled-components";

export const Container = styled.div`
  margin: 0;
  max-width: none;
  height:100vh;
  position:relative;
  overflow:hidden;
  
`

export const Row = styled.div`
margin: 0;
    max-width: none;
    width: 100%;
    height: 100%;
    overflow:hidden;
`

export const AnimationHeader = styled.div`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-color: #191970;
    position: relative;
`

const glow = keyframes`
    0%{opacity: 0; transform: scale(1,1);}
    20% {opacity: .5;}
    35% {opacity: 1;}
    50%  {transform: scale(2, 2);}
    100% {transform:  scale(1,1);}
`

export const Star = styled.div`
  background-color:#F0F0F0 ;
    width: 1.5px;
    height: 1.5px;
    position: absolute;
    border: #F0F0F0 0px solid;
    border-radius: 50%;
    opacity: 0;
    box-shadow: 0px 0px 3px 2px rgba(255,255,255,0.5);
    animation-name: ${glow};
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    left:${props=>props.x + '%'};
    top: ${props=>props.y + '%'};
    animation-delay: ${props=>props.d + 's'};
    
`

export const Moon = styled.div`
  width:100px;
  height:100px;
  background-color:white;
  position:absolute;
  left:150px;
  top:150px;
  background-color:transparent;
`

export const MoonContent = styled.span`
    position: relative;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    z-index: 100;
    position: absolute;
    border-radius: 50%;
    background-image: linear-gradient(to right top, #dddfcb, #ced0bf, #bfc1b3, #b0b2a8, #a2a39c);
    overflow: hidden;
    box-shadow: 0px 0 20px #dddfcb;
    left:0;

    &::before{
      content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: -5%;
    right: 10%;
    border-radius: 50%;
    background-image: linear-gradient(to right top, #dddfcb, #e1e2d0, #e4e5d5, #e8e9db, #ebece0);;
    }

    &::after{
      content: "";
    width: 30%;
    height: 30%;
    position: absolute;
    top: -5%;
    right: 15%;
    border-radius: 50%;
    background-color:#a2a39c;
    }

    & > span{
      width: 30%;
    height: 30%;
    position: absolute;
    top: 30%;
    right: 40%;
    border-radius: 50%;
    background-color:#c5c7b8;
    }

    & > span::after{
      content: "";
    width: 60%;
    height: 60%;
    position: absolute;
    top: 55%;
    right: 100%;
    border-radius: 50%;
    background-color:#c5c7b8;
    }
`

export const Landscape = styled.div`
 position:absolute;
 height:100px;
 width:100%;
 background-color:rgb(31, 0, 77);;
 bottom:0;
z-index:129;

`

export   const Tree = styled.div`
clip-path: polygon(48% 0, 14% 100%, 80% 100%);
background-color:rgb(31, 0, 77);
z-index:123;
width:150px;
height:${props=>props.height+"px"};
bottom:100px;
position:absolute;
left:${props=>(props.x+"%")};


`


const startDrop = keyframes`
      0% {
    transform: rotate(45deg) translate(0px, -2000px);
  }

  100% {
    transform: rotate(45deg) translate(0px, calc(100vh + 200px));
  }
`


export const Meteor = styled.div`
  position: absolute;
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 0%,
    transparent
  );
  height: 300px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
    width:4px;
    height:300px;
    left:${props=>props.x+"%"};
    top:100px;
  filter: blur(0.8px);
  z-index:122;
  animation:${startDrop};
  animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    animation-duration: 10s;
    
`

export const TextWrapper = styled.div`
  position:absolute;
  z-index:9231421231231213311344124121323425;
  background-color:transparent;
  left:50%;
  transform:translate(-50%, -50%);
  top:50%;
  
`

export const Text = styled.div`
  h1{color:white;
  text-align:center;
  margin:5px;
  font-size:43px;
  span{
    color:#cc0045;
  }
  }
`

export const Button = styled.div`
  text-align:center;
  display:flex;
  justify-content:center;
  align-items:center;
  

  button{
    display:flex;
    justify-content:center;
    align-items:center;
    gap:10px;
    cursor:pointer;
    outline:none;
    bordeR:2px solid #33ffba;
    color:#33ffba;
    font-weight:900;
    padding:10px 20px;
    background-color:transparent;
    margin:10px 0px;
    font-size:22px;
    transition: 0.4s;;
    &:hover{
      color:white;
      background-color:#33ffba20;
    }
    svg{
      transition:inherit;
    }
    &:hover svg{
      transform:rotate(90deg)
    }
  }


`