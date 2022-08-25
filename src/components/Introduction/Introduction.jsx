import { useState } from "react";
import { useEffect } from "react";
import {
  Container,
  Row,
  AnimationHeader,
  Star,
  Moon,
  MoonContent,
  Landscape,
  Tree,
  Meteor,
  Text,
  TextWrapper,
  Button,
} from "./styles.js";
import {AiOutlineArrowRight} from 'react-icons/ai';


const Introduction = () => {
  const [coors, setCoors] = useState([]);
  const [meteorX, setMeteorX] = useState(300);

  useEffect(() => {
    const interval = setInterval(() => {
      const x = Math.floor(Math.random() * (30 - 100) + 100);
      setMeteorX(x);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const getRandomXyz = () => {
    const min = 1;
    const max = 100;
    const x = Math.floor(Math.random() * (max - min) + min);
    const y = Math.floor(Math.random() * (max - min) + min);
    const d = Math.random() * (10 - 1) + 1;
    return {
      x,
      y,
      d,
    };
  };

  useEffect(() => {
    const xyd = [];

    for (let i = 0; i <= 120; i++) {
      xyd.push(getRandomXyz());
    }
    setCoors(xyd);
  }, []);

const scrollToSkills = () => {
  window.scrollTo({
    top: window.innerHeight,
    behavior: 'smooth',
});
}

  return (<>
    <Container id="intro">
      <Row>
        <AnimationHeader>
          {coors?.map((el, ind) => (
            <Star x={el.x} y={el.y} key={ind} d={el.d}></Star>
          ))}
        </AnimationHeader>
      </Row>
      <Moon>
        <MoonContent>
          <span></span>
        </MoonContent>
      </Moon>
      <Meteor x={meteorX} />
      <Landscape>
        <Tree x={4} height={100} />
        <Tree x={80} height={70} />
        <Tree x={75} height={200} />
      </Landscape>

    </Container>
          <TextWrapper>
          <Text>
            <h1>
              Hello, i am <span>Levan Khaburzania,</span>
            </h1>
            <h1>i'm a frontend developer</h1>
            <Button><button onClick={()=>scrollToSkills()}><span>View my work</span><AiOutlineArrowRight/></button></Button>
          </Text>
        </TextWrapper>
        </>
  );
};

export default Introduction;
