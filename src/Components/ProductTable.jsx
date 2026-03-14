export default function ProductTable({ products }) {
   
  return (
    <div className="border text-center my-10">
      ProductTable : {products.length}
     {
        products.map(product=> <div className="p-5">
        <h1>Nema : {product.name}</h1>
        <h1>Price : {product.price}</h1>
        <h1>Quantity : {product.quantity}</h1>
      </div>)
     }
    </div>
  );
}
