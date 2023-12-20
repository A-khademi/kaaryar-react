import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <div className="HeaderTitle">
        <span>Sell</span>
        <span>Buy</span>
      </div>
      <div className="HeaderColumns">
        <div className="HeaderColumn">Total(SAT)</div>
        <div className="HeaderColumn">Amount(SAT)</div>
        <div className="HeaderColumn">PRICE(RIAL)</div>
        <div className="HeaderColumn">Total(SAT)</div>
        <div className="HeaderColumn">Amount(SAT)</div>

        {/* Add more columns as needed */}
      </div>
    </div>
  );
};

export default Header;
