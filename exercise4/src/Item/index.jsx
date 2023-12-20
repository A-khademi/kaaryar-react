const Item = ({ amount, price, type, total, maximumTotal }) => {
  const progress = (total / maximumTotal) * 100;

  return (
    <div className={`Item ${type}`}>
      <div className="ItemDetails">
        <div>{type === 'buy' ? 'Buy' : 'Sell'}</div>
        <div>Amount: {amount}</div>
        <div>Price: {price}</div>
        <div>Total: {total}</div>
      </div>
      <div className="ItemProgressBar">
        <div style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default Item;
