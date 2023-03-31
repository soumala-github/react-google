import { Button, TextField } from "@mui/material";
import { useRef, useState } from "react";

const ProductForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const formRef = useRef();

  return (
    <form
      ref={formRef}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({
          name,
          price: parseFloat(price)
        });
      }}
    >
      <TextField
        value={name}
        onChange={(e) => setName(e.target.value)}
        name="name"
        placeholder="Product name"
      />
      <TextField
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        name="price"
        placeholder="Price"
        type="number"
      />
      <Button type="submit">Agregar</Button>
    </form>
  );
};

export const ProductFormUncontrolled = ({ onSubmit }) => {
  const [formData, setFormData] = useState({});

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form
      autoComplete="off"
      id="formulario"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(formData);
      }}
    >
      <TextField
        name="name"
        placeholder="Product name"
        onChange={handleInput}
      />
      <TextField
        onChange={handleInput}
        name="price"
        placeholder="Price"
        type="number"
      />
      <Button type="submit">Agregar</Button>
    </form>
  );
};

export default ProductForm;
