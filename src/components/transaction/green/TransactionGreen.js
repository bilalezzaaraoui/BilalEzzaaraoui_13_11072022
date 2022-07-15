import "./TransactionGreen.scss";

const TransactionGreen = (props) => {
  return (
    <section className="account-green">
      <div className="account-content-wrapper">
        <h3 className="account-title">
          Argent Bank Checking (x{props.checking})
        </h3>
        <p className="account-amount">${props.amount}</p>
        <p className="account-amount-description">Available Balance</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
  );
};

export default TransactionGreen;
