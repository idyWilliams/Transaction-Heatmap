import { ITransactionGroup, ITransactionType } from "../types/index";
import { formatTo2DP } from "./format";

export const transactionsByDate = (transactions: ITransactionType[]) => {
  const groups: ITransactionGroup = {};
  for (let tx of transactions) {
    if (!groups[tx.date]) groups[tx.date] = [];
    groups[tx.date].push(tx);
  }
  return groups;
};

export const netTransactions = (transactions: ITransactionType[]) => {
  const total = transactions.reduce((total, tx) => {
    if (tx.transactionType === "credit") {
      return total + tx.amount;
    } else {
      return total - tx.amount;
    }
  }, 0);

  return formatTo2DP(total);
};

export const colorMap = (netAmount?: number) => {
  if (netAmount === undefined) return "";

  if (netAmount < 0) {
    // set red ranges
    if (netAmount < -10000) return "bg-[#e01a01]";
    else if (netAmount < -7000) return "bg-[#EA4C46]";
    else if (netAmount < -3000) return "bg-[#F07470]";
    else if (netAmount < -1000) return "bg-[#F1959B]";
    else return "bg-[#F6BDC0]";
  } else {
    // set green ranges
    if (netAmount > 10000) return "bg-[#06b683]";
    else if (netAmount > 7000) return "bg-[#1e7343]";
    else if (netAmount > 3000) return "bg-[#74dca1b6]";
    else if (netAmount > 1000) return "bg-[#85b89bb6]";
    else return "bg-[#c4e2d1eb]";
  }
};
