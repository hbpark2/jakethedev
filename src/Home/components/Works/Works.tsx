import React, { useContext } from "react";

import { Container, Inner } from "../Profile/styles";
import { Career, CareerInner } from "./styles";

import CareerItem from "../Profile/components/CareerItem";
import { careerArr } from "../Profile/components/careerData";

const Works: React.FC<{
  loading: boolean;
  scrollY: number;
  changeCursorState: Function;
  worksType?: string;
}> = ({ loading, scrollY, changeCursorState, worksType }) => {
  return (
    <Container scrl={scrollY} aria-hidden={!loading}>
      <Inner>
        <Career>
          <h3 className="blind">Project</h3>
          <CareerInner>
            {careerArr.map((item, index) =>
              worksType === "FRONT-END" ? (
                <CareerItem
                  key={`career ${index}`}
                  type={item.type}
                  title={item.title}
                  subTitle={item.subTitle}
                  date={item.date}
                  skills={item.skills}
                >
                  {item.children.split("<br />").map((line, index) => {
                    let makeSpanKey = `line${index}`;
                    return (
                      <React.Fragment key={makeSpanKey}>
                        {line}
                        <br />
                      </React.Fragment>
                    );
                  })}
                </CareerItem>
              ) : (
                item.type !== "FRONT-END" && (
                  <CareerItem
                    key={`career ${index}`}
                    type={item.type}
                    title={item.title}
                    subTitle={item.subTitle}
                    date={item.date}
                    skills={item.skills}
                  >
                    {item.children.split("<br />").map((line, index) => {
                      let makeSpanKey = `line${index}`;
                      return (
                        <React.Fragment key={makeSpanKey}>
                          {line}
                          <br />
                        </React.Fragment>
                      );
                    })}
                  </CareerItem>
                )
              )
            )}
          </CareerInner>
        </Career>
      </Inner>
    </Container>
  );
};

export default Works;
