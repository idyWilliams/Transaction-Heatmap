const Week = ({ day, index }: { day: string[]; index: number }) => {
  return (
    <>
      <p className="absolute text-sm left-20 align-middle text-[#555353]">
        {day[index]}
      </p>
    </>
  );
};

export default Week;
