import { Suspense } from "react"
import PricingOptions from "../../Components/PricingOptions"

export default function Home() {
    const priceData= fetch('../../../public/priceData.json').then(res=>res.json())
  return (
    <div className="">
        <Suspense fallback={<span className="loading loading-bars loading-xl "></span>}>
            <PricingOptions priceData={priceData}></PricingOptions>
        </Suspense>
    </div>
  )
}
