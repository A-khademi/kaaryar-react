
import "./list.css";

function List({ orders }) {
  const orderSell = orders.filter((order) => {
    return order.type === "sell";
  });
  const orderBuy = orders.filter((order) => {
    return order.type === "buy";
  });

  return (
    <div className="list">
      {orderSell.map((order) => (
        <div className="price" key={order.price}>
          <p>{order.price}</p>
        </div>
      ))}
      {orderBuy.map((order) => (
        <div className="price" key={order.price}>
          <p>{order.price}</p>
        </div>
      ))}
    </div>
  );
}

export default List;
