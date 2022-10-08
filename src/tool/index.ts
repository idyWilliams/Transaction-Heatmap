import { ITransactionGroup, ITransactionType } from "../types/index";


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

  return Number((Math.round(total * 100) / 100).toFixed(2));
};

export const colorMap = (dailyValue?: number) => {
  if (dailyValue === undefined) return "";
  if (dailyValue < 0) {
    if (dailyValue < -9900) return "bg-[#e01a01]";
    else if (dailyValue < -6000) return "bg-[#EA4C46]";
    else if (dailyValue < -3000) return "bg-[#F07470]";
    else if (dailyValue < -1000) return "bg-[#F1959B]";
    else return "bg-[#F6BDC0]";
  } else {
    if (dailyValue > 8000) return "bg-[#06b683]";
    else if (dailyValue > 7000) return "bg-[#1e7343]";
    else if (dailyValue > 6000) return "bg-[#74dca1b6]";
    else if (dailyValue > 1000) return "bg-[#85b89bb6]";
    else return "bg-[#c4e2d1eb]";
  }
};
