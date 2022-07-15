import { Fragment, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./TransactionDetails.scss";

const TransactionDetails = () => {
  const [state, setState] = useState(false);

  const modalHandler = () => setState(!state);
  return (
    <div className="money-info">
      <div className="details-layout">
        <div className="width-details first">
          <div className="icon" onClick={modalHandler}>
            {state ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          <div className="text">
            <div className="center-line">
              <p>June 20th, 2020</p>
              <div
                className="hidden"
                style={{ display: `${state ? "block" : "none"}` }}
              >
                <p className="type">Transaction Type: Electronic</p>
                <p className="category">Category: Food</p>
                <p className="note">Note:</p>
              </div>
            </div>
          </div>
        </div>
        <div className="width-details center">
          <p>Golden Sun Bakery</p>
        </div>
        <div className="width-details center">
          <p>$5.00</p>
        </div>
        <div className="width-details center">
          <p>$2082.79</p>
        </div>
      </div>
      <div className="full-width">
        <div className="info-money"></div>
        <div className="full-one"></div>
      </div>
    </div>
  );
};

export default TransactionDetails;
