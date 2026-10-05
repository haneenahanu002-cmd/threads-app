import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function AddProduct() {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: ""
  });
  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:3000/products",
        {
          name: product.name,
          price: Number(product.price),
          category: product.category
        }
      );
      alert("Product added successfully!");
      navigate("/products");
    } catch (error) {
      console.log(error);
    }

  };
  return (

    <div className="container py-5">
      <div className="form-container">
        <div className="mb-4">
          <h2 className="fw-bold">  Add New Product </h2>
           
          <p className="text-muted">  Create a new product in your catalog. </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">
              Product Name
            </label>
             <input
              type="text" 
              name="name" 
              className="form-control"
               placeholder="Enter product name" 
               value={product.name}
              onChange={handleChange}
              required  />
          </div>
          <div className="mb-3">

            <label className="form-label">
              Price
            </label>
            <input
              type="number"
              name="price"
              className="form-control"
              placeholder="₹ Enter price"
              value={product.price}
              onChange={handleChange}
              required  />
        
          </div>
          <div className="mb-4">

            <label className="form-label">
              Category
            </label>
            <select
              name="category"
              className="form-select"
              value={product.category}
              onChange={handleChange}
              required >
        
              <option value="">  Select category  </option>
              <option value="Electronics">  Electronics  </option>
              <option value="Accessories">  Accessories  </option>
              <option value="Home">  Home  </option>
              <option value="Fashion">  Fashion  </option>
            </select>
          </div>
          <div className="d-flex gap-2">
            <Link to="/products" className="btn btn-secondary">   Cancel  </Link>
            <button type="submit" className="btn btn-primary">  Add Product  </button>
          </div>
            
        </form>
      </div>
    </div>
  );
}

export default AddProduct;