import { Box } from "@mui/system";
import {  useState } from "react";
import { Skill, SkillsContainer, Title, SkillsWrapper } from "./styles";
import { motion } from "framer-motion";


const Skills = () => {
  const cardVariants = {
    offscreen: {
      x: 0,
      opacity:0,
      scale:0.1,    
    },
    onscreen: {
      x: 0,
      opacity:1,
      scale:1,
      transition: {
        type: "spring",
        bounce: 0.1,
        duration: 1
      }
    }
  };
    const [skillsData] = useState([
       {value: "html", level:90},
        {value:"css", level:90},
        {value:"javsacript", level:80},
       {value: "react js", level:90},
       {value: "next js", level:70},
       {value: "redux", level:90},
       {value: "git", level:80},
       {value: "framer motion", level:80},
       {value: "styled component", level:100},
        {value:"bootstrap", level:80},
       {value: "material ui", level:80},
        {value:"formik", level:90},
      {value:  "yup", level:90},
        {value:"sql", level:60}
      ])


  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection:"column",
        backgroundColor:"#040348"
      }}
      id="skills"
      
    >
      <SkillsWrapper>
        <Title>my skills</Title>
        <SkillsContainer>
          {skillsData.map((el, ind) => (
            <Skill key={ind} >
              <motion.div
      variants={cardVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      >
              {el.value}
              <BarFill  level={el.level}/>
              </motion.div>
            </Skill>
          ))}
        </SkillsContainer>
      </SkillsWrapper>
    </Box>
    
  );
};

export default Skills;

const BarFill = ({level}) => {
  return (
    <Box
      sx={{
        marginTop:'10px',
        marginBottom:'20px',
        height: "20px",
        width: "100%",  
        backgroundColor: "#F9F5EB",
        borderRadius:'10px'
      }}
    >
      <Box
        sx={{
          width: `${level}%`,
          height: "100%",
          backgroundColor: "#191970",
          borderRadius:'10px'
        }}
      ></Box>
    </Box>
  );
};


