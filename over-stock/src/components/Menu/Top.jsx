import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import Categories from "./Categories";
import style from "./Top.module.css";

function Top({ topData, topImgs }) {
  return (
    <div>
      <SimpleGrid className={style.container} columns={3} spacing={10}>
        <Box className={style.cate} width="75%">
          <Categories topData={topData} />
        </Box>
        <Box className={style.im1} width="155%" marginLeft={"-25%"}>
          <div>
            <img src={topImgs[0].bigImage} alt={topImgs[0].bigImage} />
          </div>
        </Box>
        <Box className={style.im2} width="75%" marginLeft={"25%"}>
          <div className={style.sideImage}>
            <img src={topImgs[1].small1} alt={topImgs[1].small1} />
            <img src={topImgs[2].small2} alt={topImgs[2].small2} />
          </div>
        </Box>
      </SimpleGrid>
      <img
        className={style.bigImage}
        src={topImgs[0].bigImage}
        alt={topImgs[0].bigImage}
      />
      <div className={style.sideImage2}>
        <div>
          <img src={topImgs[1].small1} alt={topImgs[1].small1} />
        </div>
        <div>
          <img src={topImgs[2].small2} alt={topImgs[2].small2} />
        </div>
      </div>
    </div>
  );
}

export default Top;
