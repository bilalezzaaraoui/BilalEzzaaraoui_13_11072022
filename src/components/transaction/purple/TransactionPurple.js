import "./TransactionPurple.scss";

const TransactionPurple = (props) => {
  return (
    <section className="account-purple">
      <div className="account-content-wrapper">
        <h3 className="account-title">Argent Bank Checking (x8349)</h3>
        <p className="account-amount">$2,082.79</p>
        <p className="account-amount-description">Available Balance</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button-purple">View transactions</button>
      </div>
    </section>
  );
};

export default TransactionPurple;
