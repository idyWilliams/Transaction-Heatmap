import React from "react";

const Block = ({
  day,
  index,
  months,
}: {
  day: string[];
  index: any;
  months: any;
}) => {
  return (
    <>
      <div
        className="border border-transparent h-4 w-4 rounded-sm  bg-[#D8D8D8] "
        style={{ margin: "1px" }}
      >
        <p className="absolute m-0 text-sm bottom-0 right-8">{day[index]}</p>
        
      </div>
      
    </>
  );
};

export default Block;
