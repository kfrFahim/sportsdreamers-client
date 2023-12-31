import React from "react";
import { Parallax } from "react-parallax";
import Container from "../Container/Container";

const Cover = ({ img, title }) => {
  return (
    <Container>
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={img}
        bgImageAlt="the dog"
        strength={-200}
      >
        <div>
          <div className="hero h-[500px]">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    </Container>
  );
};

export default Cover;
