import { useState } from "react";
import ProductForm from "../../Components/ProductForm";
import ProductTable from "../../Components/ProductTable";

export default function ProductManegment() {
    const [products,setProducts]=useState([])
    const handleProducts=(newProduct)=>{
        const newProducts =[...products,newProduct]
        setProducts(newProducts)

    }
  return (
    <div>
        <ProductForm handleProducts={handleProducts}></ProductForm>
        <ProductTable products={products}></ProductTable>
    </div>
  )
}
