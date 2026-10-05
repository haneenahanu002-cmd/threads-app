import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: ""
  });
  useEffect(() => {
    const fetchProduct = async () => {
      try {

        const response = await axios.get(
          `http://localhost:3000/products/${id}`
        );
        setProduct(response.data);
      } catch (error) {
        console.log(error);
      }

    };
    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `http://localhost:3000/products/${id}`,
        {
          name: product.name,
          price: Number(product.price),
          category: product.category
        }
      );
      alert("Product updated successfully!");
      navigate("/products");
    } catch (error) {
      console.log(error);
    }
  };
  return (

    <div className="container py-5">
      <div className="form-container">
        <h2 className="fw-bold">  Edit Product </h2>
        <p className="text-muted mb-4">  Update product information. </p>
        
        <form onSubmit={handleUpdate}>
          <div className="mb-3">
            <label className="form-label"> Product Name  </label>
              
            <input
              type="text"
              name="name"
              className="form-control"
              value={product.name}
              onChange={handleChange}
              required  />
          </div>

          <div className="mb-3">
            <label className="form-label"> Price  </label>
            <input
              type="number"
              name="price"
              className="form-control"
              value={product.price}
              onChange={handleChange}
              required />
            
          </div>


          <div className="mb-4">
            <label className="form-label"> Category  </label>
            <select
              name="category"
              className="form-select"
              value={product.category}
              onChange={handleChange}
              required >
        
              <option value="">  Select category  </option>
              <option value="Electronics">  Electronics  </option>
              <option value="Accessories"> Accessories  </option>
                <option value="Home">  Home  </option>
                <option value="Fashion">  Fashion  </option>
            </select>
          </div>


          <div className="d-flex gap-2">
            <Link
              to="/products"  className="btn btn-light border" >  Cancel
            </Link>

            <button
              type="submit"  className="btn btn-primary" >  Update Product
            </button>
             
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProduct;