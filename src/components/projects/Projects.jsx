import { Box } from "@mui/system";
import { useState } from "react";
import { Project, ProjectButtons, ProjectsContainer, ProjectsWrapper, Title } from "./styles"
import {motion} from 'framer-motion';
import {BsGithub, BsPlayCircleFill} from 'react-icons/bs';


const projectsData = [
    {img:"/images/theXplace.png", git:"", host:"https://thexplace.ai/"},
    {img:"/images/DAWN.png", git:"https://github.com/leonidas873/e-commerce", host:"https://e-commerce-react-node.netlify.app/?fbclid=IwAR1l5W1IvO89zhF6XPmksckIfeBup8pcz6bRnGGKY37mG6BRxrr77mOtoeA"},
    {img:"/images/pillow.png",git:"https://github.com/leonidas873/pillowmart",host:"leonidas873.github.io/pillowmart/"},
    {img:"/images/countries.png", git:"https://github.com/leonidas873/rest-countries-api",host:"https://leonidas873.github.io/rest-countries-api/"}
]

const Projects = () => {
    const cardVariants = {
        offscreen: {
            opacity: 0,
           
        },
        onscreen: {
            opacity: 1,
            
        }
      };

    return <Box
    sx={{
        display:'flex',
        justifyContent:'center',
        backgroundColor:"#040348",
        
    }}
    id="projects"
    >
        <ProjectsWrapper>
        <Title>Projects</Title>
        <ProjectsContainer 
           variants={cardVariants}
           initial="offscreen"
           whileInView="onscreen"
           viewport={{ once: true, amount: 0.8 }}
        >
            {projectsData.map((el,index)=>
            <motion.div
            initial={{opacity:0}}
                whileInView={{opacity:1, transition:{duration:0.5, delay:0.2*index}}}
                viewport={{ once: true, amount: 0.8 }}
            key={index}
            > 
                
                <ProjectButtonsComponent el={el}/>
            </motion.div>)}
        </ProjectsContainer>
     
    </ProjectsWrapper>
    </Box>
}

export default Projects;

const ProjectButtonsComponent = ({el}) => {

    const [blur, setBlur] = useState('')

    return <Project blur={blur}>
        <img src={el.img} alt="peoject"/>
        <ProjectButtons 
    onMouseEnter={()=>setBlur('blur')}
    onMouseLeave={()=>setBlur('')}
    blur={blur}
    >
    <a href={el.host}><BsPlayCircleFill/></a>
        {el.git && <a href={el.git}><BsGithub/></a>}
    </ProjectButtons>
    </Project>
}