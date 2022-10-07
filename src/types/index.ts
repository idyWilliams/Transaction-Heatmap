export interface ITransactionType {
	date: string;
	amount: number;
	transactionType: string;
}

export interface ITransactionGroup {
	[key: string]: ITransactionType[];
}

export interface ITransactionSummary {
	date: string;
	netTransactions?: number ;
}
