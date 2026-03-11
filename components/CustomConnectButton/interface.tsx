interface Account {
  address: string;
  balanceDecimals?: number;
  balanceFormatted?: string;
  balanceSymbol?: string; 
  displayBalance?: string;
  displayName: string;
  ensAvatar?: string;
  ensName?: string;
  hasPendingTransactions: boolean;
}

export interface CustomOpenModalProps {
  account: Account;
  openChainModal: () => void;
  setIsModalOpen: (isOpen: boolean) => void;
}
