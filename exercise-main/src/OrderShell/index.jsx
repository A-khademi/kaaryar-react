import './OrderShell.css';
import Header from '../Header';
import '../orders.json';
import List from '../List';

const OrderShell = () => {
  return (
    <div className="OrderShell">
        <Header />
        <List orders={orders}/>
    </div>
  );
};

export default OrderShell;
