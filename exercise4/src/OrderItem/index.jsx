import './OrderItem.css';
import List from '../List';

const OrderItem = ({ amount, price, type, quantity }) => {
  const total = previousTotal + quantity;
  previousTotal = total;
  return (
    <div className="container">
      <p>Amount: {amount}</p>
      <p>Price: {price}</p>
      <p>Type: {type}</p>
      <p>Total: {total}</p>
      <p>Maximum Total: {maximumTotal}</p>
    </div>
  );
};

export default OrderItem;