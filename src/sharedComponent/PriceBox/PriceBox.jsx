export const PriceBox = ({ price, isPositive }) => {
  return (
    <div
      className={`text-white text-xs font-semibold rounded flex items-center justify-center
        ${isPositive ? "bg-green-900" : "bg-red-950"}
        w-20 h-6 sm:w-24 sm:h-7 md:w-15 md:h-8
      `}
    >
      {Math.abs(price.toFixed(2))}%
    </div>
  );
};
