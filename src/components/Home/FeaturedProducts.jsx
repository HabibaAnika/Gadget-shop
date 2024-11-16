import Products from "../Products";

function FeaturedProducts() {
  return (
    <div className="my-10">
      <h1 className="text-4xl font-bold mb-8 text-center">Featured Products</h1>
      <div className="lg:flex items-center gap-4">
        <Products></Products>
        <Products></Products>
        <Products></Products>
        <Products></Products>
      </div>
    </div>
  );
}

export default FeaturedProducts;
