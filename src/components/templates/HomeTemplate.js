import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import styles from "./HomeTemplate.module.scss";

const Box = styled(motion.div)`
  background: red;
  border-radius: 30px;
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const SecondBox = styled(motion.div)`
  background: blue;
  border-radius: 30px;
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: antiquewhite;
`;

const HomeTemplate = () => {
  return (
    <div className={styles.home}>
      <Wrapper>
        <Box animate={{ scale: 2 }}>HomeTemplate</Box>
        {/* <SecondBox initial="hidden" animate="visible" variants={variants}>
          TETTSTTSTS
        </SecondBox> */}
      </Wrapper>
    </div>
  );
};

export default HomeTemplate;
