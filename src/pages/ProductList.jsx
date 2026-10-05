import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import {
  FaEdit,
  FaTrash,
  FaPlus,
  FaBox
} from "react-icons/fa";

function ProductList() {

 const [products, setProducts] = useState([]);
 const fetchProducts = async ()=>
 {
    try{
        const response = await axios.get("https://threads-app-v7c2.onrender.com/products");
        setProducts(response.data);

    } catch (error) {
        console.log(error);
    }
 };
 useEffect(()=>{
   fetchProducts();
  }, []);

  const deleteProduct = async (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmDelete) {
      return;
    }

    try {

      await axios.delete(
        `https://threads-app-v7c2.onrender.com/products/${id}`
      );

      fetchProducts();

    } catch (error) {

      console.log(error);

    }

  };


  return (

    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold mb-1">  Product Catalog </h2>
          <p className="text-muted mb-0">  Manage your products  </p>
        </div>

        <Link
          to="/add-product" className="btn btn-primary d-flex align-items-center gap-2" >
          <FaPlus />
          Add Product
        </Link>
      </div>

      <div className="card border-0 shadow-sm">
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">

              <thead className="table-light">
                <tr>
                  <th className="px-4">  Name  </th>
                  <th>  Price </th>
                  <th> Category  </th>
                  <th>  Actions </th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td className="px-4">
                      <div className="d-flex align-items-center gap-3">
                        <div className="product-icon">
                          <FaBox />
                        </div>
                        <strong>
                          {product.name}
                        </strong>
                      </div>
                    </td>

                    <td>
                      <strong>
                        ₹{product.price.toLocaleString()}
                      </strong>
                    </td>

                    <td>
                      <span className="category-badge">
                        {product.category}
                      </span>
                    </td>

                    <td>
                      <div className="d-flex gap-2">
                        <Link
                          to={`/edit-product/${product.id}`}
                          className="btn btn-sm btn-outline-primary" >
                          <FaEdit />
                        </Link>

                        <button
                          onClick={() =>
                            deleteProduct(product.id)
                          }
                          className="btn btn-sm btn-outline-danger" >
                          <FaTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

  );
}

export default ProductList;