import "./Header.css";

function Header() {
  return (
    <div className='Container'>
      <div className="Title">
        <h1>Sell</h1>
        <h1>Buy</h1>
      </div>
      <div className="Value">
        <p>Total(SAT)</p>
        <p>Amount(SAT)</p>
        <p>PRICE(RIAL)</p>
        <p>Total(SAT)</p>
        <p>Amount(SAT)</p>
      </div>
    </div>
  );
}
export default Header;
