import TransactionDetails from "../../components/transactionDetails/TransactionDetails";
import "./Transaction.scss";

const Transaction = () => {
  return (
    <main className="main-transaction">
      <div className="info-transaction">
        <p className="title">Argent Bank Checking (x8349)</p>
        <h1 className="sub-title">$2,082.79</h1>
        <p className="balance">Available Balance</p>
      </div>
      <div className="transaction-layout">
        <div className="title-layout">
          <div className="red">
            <div className="icon"></div>
            <div className="full-width">Date</div>
          </div>
          <div className="green">Description</div>
          <div className="blue">Amount</div>
          <div className="yellow">Balance</div>
        </div>
        <div className="transaction-container">
          <TransactionDetails />
          <TransactionDetails />
          <TransactionDetails />
          <TransactionDetails />
          <TransactionDetails />
          <TransactionDetails />
        </div>
      </div>
    </main>
  );
};

export default Transaction;
