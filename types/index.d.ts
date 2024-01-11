export interface SidebarLink {
  imgURL: string;
  route: string;
  label: string;
  id: number;
}

export interface Metric {
  label: string;
  value: string;
  id: number;
}

export interface Transaction {
  orderID: string;
  orderDate: string;
  orderAmount: string;
  transactionFees: string;
}
