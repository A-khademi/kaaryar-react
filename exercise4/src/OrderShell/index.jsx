import "./OrderShell.css";
import Header from "../Header";
import List from "../List";
import orders from "../orders.json";

function OrderShell() {
  return (
    <div className="sectionMain">
      <Header />
      <List orders={orders} />
    </div>
  );
}
export default OrderShell;
