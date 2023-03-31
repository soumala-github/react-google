import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product";
import ProductForm from "../components/ProductForm";
import productsSlice from "../store/productsSlice";

function ProductListPage() {
  const products = useSelector((state) => state.products);
  const [filtered, setFilted] = useState(products);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    setFilted(
      products.filter(
        (o) => o.name.includes(filter) || String(o.price).includes(filter)
      )
    );
  }, [products, filter]);

  const onDelete = (id) => dispatch(productsSlice.actions.delete(id));
  const onAdd = (product) => dispatch(productsSlice.actions.add(product));

  return (
    <>
      {filtered.map((product, i) => (
        <Product {...product} key={product.id} delete={onDelete} />
      ))}

      <ProductForm onSubmit={onAdd} value="" />
    </>
  );
}

export default ProductListPage;
