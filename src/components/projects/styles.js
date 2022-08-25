import styled from "styled-components"
import {motion} from 'framer-motion';

export const ProjectsWrapper = styled.div`

max-width:1200px;
width:100%;
padding:10px;
background-color:#cc004550;
box-sizing:border-box;
padding-bottom:120px;
`

export const Title = styled.h2`
text-align:center;
padding:20px 30px;
        margin:0;
        font-size:30px;
        margin-bottom:20px;
        color:#EAE3D2;
`

export const ProjectsContainer = styled(motion.div)`
width:100%;
display:grid;
grid-template-columns:repeat(auto-fill,minmax(250px,1fr));
grid-auto-rows:250px;
gap:20px;
`


export const Project = styled(motion.div)`
line-height:0;
width:100%;
height:100%;
position:relative;
overflow:hidden;
       img{      
        transition:0.3s;
        width:100%;
height:100%;
        object-fit:cover;
        line-height:0;
        object-position:1% 1%;
        transform:${props => props.blur ? "scale(1.3)" : "scale(1)" };
        }
`



export const ProjectButtons = styled.div`
width:100%;
height:100%;
position:absolute;
left:0;
top:0;
display:flex;
justify-content:center;
align-items:center;
gap:10px;
background-color: ${props => props.blur ? "rgba(0,0,0,0.8);" : "transparent" };
transition:0.3s;
a{
        cursor:pointer;
        text-decoration:none;
        outline:none;
        border:none;
        background-color:transparent;
        z-index:1231;
        transition:0.3s;
        opacity:${props => props.blur ? 1 : 0 };
        svg{
                color:#cc0045;
                font-size:30px;
                transition: 0.3s;;
                &:hover{
                        transform:scale(1.2)
                }
        }
}

`

