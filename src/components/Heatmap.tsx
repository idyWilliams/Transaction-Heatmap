import React from "react";
import Block from "./Block";
import Week from "./Week";

const Heatmap = () => {
  const Cell = Array.from(new Array(475));
  const Weeks = ["Mon", "Tue", "Wed", "Thurs", "Fri", "Sat", "Sun"];
  return (
    <div className="flex items-center ">
      <div className="  mb-1" style={{position:"absolute", top:"18px"}}>
        {Weeks.map((week: string, index: number) => (
          <Week week={week} />
        ))}
      </div>
      <div className="py-5 inline-flex flex-col flex-wrap pl-9  h-44 ">
        {Cell.map((_: any, index: any) => (
          <Block key={index} />
        ))}
      </div>
    </div>
  );
};

export default Heatmap;
// #D8D8D8