import { IoMdCheckmark } from "react-icons/io";

export default function PricingCard({ pricing }) {
  console.log(pricing);
  const { name, price,  features } = pricing;
  return (
    <div className="card w-96 bg-base-100 shadow-sm">
      <div className="card-body">
        <span className="badge badge-xs badge-warning">Most Popular</span>
        <div className="flex justify-between">
          <h2 className="text-3xl font-bold">{name}</h2>
          <span className="text-xl">{price}</span>
        </div>
        <ul className="mt-6 flex flex-col gap-2 text-xs">
          {features?.map((feat, index) => (
            <li key={index + 1}>
              <IoMdCheckmark />
              <span>{feat}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <button className="btn btn-primary btn-block">Subscribe</button>
        </div>
      </div>
    </div>
  );
}
