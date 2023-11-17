import "./list.css"

function List({ orders }) {
  const orderSell = orders.filter((order) => {
    return order.type === "sell";
  });
  const orderBuy = orders.filter((order) => {
    return order.type === "buy";
  });
  return (
    <div>
      {orderSell.map((order) => (
        <div className="list">
        <p>{orderSell.price}</p>
        </div>
      ))}
    </div>
  );
}

export default List;
