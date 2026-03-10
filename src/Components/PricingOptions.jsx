import { use } from "react";
import PricingCard from "./PricingCard";

export default function PricingOptions({ priceData }) {
  const pricingData = use(priceData);
  return (
    <div>
      <h2>Get our membership</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3">
        {
   pricingData.map(pricing=><PricingCard key={pricing?.id} pricing={pricing}></PricingCard>)
        }
      </div>
    </div>
  );
}
