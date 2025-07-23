export const Order = ({ title, orders, color = "green" }) => {
  let cumulative = 0;

  return (
    <div>
      <h2 className={`font-bold mb-2 text-${color}-400`}>{title}</h2>
      <div className="flex justify-between text-xs text-gray-400 mb-1">
        <span>Price(BTC)</span>
        <span>Qty(XMR)</span>
        <span>Total(BTC)</span>
      </div>
      {orders.map(([price, qty], index) => {
        const quantity = parseFloat(qty);
        cumulative += quantity;
        return (
          <div key={index} className="flex justify-between text-xs">
            <span className={`text-${color}-400`}>${parseFloat(price).toFixed(2)}</span>
            <span>{quantity.toFixed(4)}</span>
            <span>{cumulative.toFixed(4)}</span>
          </div>
        );
      })}
    </div>
  );
};
