import React from "react";
import Week from "./Week";
import transactions from "../data/transaction-data.json";
import {  ITransactionSummary } from "../types";
import {
  colorMap,
  netTransactions,
  transactionsByDate,
} from "../tool/index";
import dayjs from "dayjs";

const months: string[] = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const year = 2019;

const days = ["Mon", "Tue", "Wed", "Thurs", "Fri", "Sat", "Sun"];
const groupedTx = transactionsByDate(transactions);
const firstDay = dayjs(`${year}-01-01`).day();
const monthsData: { [key: string]: ITransactionSummary[] } = {};
// const months = Array.from(new Array(Math.floor(365 / 7)));

for (let monthNo in months) {
  const month = months[monthNo];
  if (!monthsData[month]) monthsData[month] = [];

  // populate transactions for each day in each month
  const daysInMonth = dayjs(new Date(year, Number(monthNo), 1)).daysInMonth();
  for (let dayNo = 1; dayNo <= daysInMonth; dayNo++) {
    const date = new Date(year, Number(monthNo), dayNo);
    const dateStr = dayjs(date).format("YYYY-MM-DD");
    monthsData[month].push({
      date: dateStr,
      netTransactions: groupedTx[dateStr]
        ? netTransactions(groupedTx[dateStr])
        : undefined,
    });
  }
}

const Heatmap = () => {
  let traversed = 0;

  const Cell = Array.from(new Array(firstDay).fill(null));
  return (
    <>
      <div className="max-w-5xl  border- p-10 bg-white">
        <div className="flex flex-col flex-wrap content-center w-full h-28 ">
          {Cell.map((day: string[], index: number) => (
            <div className="border-2 border-white h-4 w-4 rounded-sm  bg-[#D8D8D8] text-[#555353] font-light">
              <Week day={days} index={index} />
            </div>
          ))}

          {months.map((month) => {
            const transactions = monthsData[month];
            return transactions.map((txn: any, index: number) => {
              traversed = traversed + 1;
              return (
                <div
                  className={`border-2 border-white h-4 w-4 rounded-sm  bg-[#D8D8D8]  ${colorMap(
                    txn.netTransactions
                  )}`}
                  key={index}
                  data-tip={`${txn.date}<br/>Net: ${
                    txn.netTransactions ?? "No data"
                  }`}
                >
                  {month === "Jan" && index + firstDay < 7 && (
                    <p className="absolute text-sm left-20  text-[#555353]  font-light ">
                      {days[index + firstDay]}
                    </p>
                  )}
                  {(traversed + firstDay === 7 ||
                    (traversed + firstDay) % 35 === 0) && (
                    <p className="font-light absolute text-sm top-48 text-[#555353] ">
                      {month}
                    </p>
                  )}
                </div>
              );
            });
          })}
        </div>
        <div className="text-center  ">
        <p className='text-[#9d16a9] text-sm text-center mt-4'>Heatmap component built with <span className='text-[#e01a10]'>♥</span>  by <a className='text-[#0eb683] underline cursor-pointer transition-all active:scale-90' href="https://github.com/idyWilliams">idy-Williams</a> </p>
       </div>
      </div>
    </>
  );
};

export default Heatmap;
