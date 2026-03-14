export default function ProductForm({ handleProducts }) {
  const handleProosuctSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const newProduct = { name, price, quantity };
    handleProducts(newProduct);
    console.log(newProduct);
  };
  return (
    <div className=" text-center">
      <h3>Add a product </h3>
      <form onSubmit={handleProosuctSubmit}>
        <input type="text" name="name" placeholder="Product Name" />
        <br />
        <input type="text" name="price" placeholder="Product price" />
        <br />
        <input type="text" name="quantity" placeholder="Product quantity" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
