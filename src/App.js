import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [productName, setProductName] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [stockLevel, setStockLevel] = useState('');
  const [reorderPoint, setReorderPoint] = useState('');
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  // Handle add product
  const handleAddProduct = (e) => {
    e.preventDefault();
    const newProduct = { productName, productCategory, stockLevel, reorderPoint };
    setProducts([...products, newProduct]);
    setProductName('');
    setProductCategory('');
    setStockLevel('');
    setReorderPoint('');
    setMessage('Product added successfully!');
  };

  // Handle delete product by name
  const handleDeleteProduct = (productNameToDelete) => {
    const filteredProducts = products.filter(
      (product) => product.productName !== productNameToDelete
    );
    setProducts(filteredProducts);
    setMessage('Product deleted successfully!');
  };

  // Filter products by search query
  const filteredProducts = searchQuery
    ? products.filter(
        (product) =>
          product.productName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.productCategory.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : products; // Show all products if search query is empty

  // Handle search on form submit (Enter key)
  const handleSearchSubmit = (e) => {
    e.preventDefault(); // Prevent form from submitting (refreshing the page)
  };

  // useEffect to log the search query and filtered products
  useEffect(() => {
    console.log('Search Query:', searchQuery);
    console.log('Filtered Products:', filteredProducts);
    console.log('All Products:', products); // Log all products to check if they are added
  }, [searchQuery, filteredProducts, products]); // Dependencies for useEffect

  return (
    <div className="App">
      <h1>Product Management</h1>

      {message && <div className="success-message">{message}</div>}

      <div className="form-container">
        {/* Add Product Form */}
        <div className="product-form">
          <form onSubmit={handleAddProduct}>
            <div className="form-group">
              <label>Product Name</label>
              <input
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                placeholder="Enter product name"
                required
              />
            </div>

            <div className="form-group">
              <label>Category</label>
              <select
                value={productCategory}
                onChange={(e) => setProductCategory(e.target.value)}
                required
              >
                <option value="">Select Category</option>
                <option value="Router">Router</option>
                <option value="Switch">Switch</option>
                <option value="Modem">Modem</option>
                <option value="Multiplexer">Multiplexer</option>
                <option value="Splitter">Splitter</option>
                <option value="Card">Card</option>
                <option value="Networking">Networking</option>
                <option value="Optical">Optical</option>
                <option value="RF Equipment">RF Equipment</option>
                <option value="Components">Components</option>
              </select>
            </div>

            <div className="form-group">
              <label>Stock Level</label>
              <input
                type="number"
                value={stockLevel}
                onChange={(e) => setStockLevel(e.target.value)}
                placeholder="Enter stock level"
                required
              />
            </div>

            <div className="form-group">
              <label>Reorder Point</label>
              <input
                type="number"
                value={reorderPoint}
                onChange={(e) => setReorderPoint(e.target.value)}
                placeholder="Enter reorder point"
                required
              />
            </div>

            <button type="submit" className="add-btn">Add Product</button>
          </form>
        </div>

        {/* Search and Table Display of Products */}
        <div className="search-product-form">
          <form onSubmit={handleSearchSubmit}>
            <h3>Search Products</h3>
            <div className="form-group">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearchSubmit(e)} // Trigger search on Enter
                placeholder="Search by product name or category"
              />
            </div>

            <div className="product-table">
              {filteredProducts.length > 0 ? (
                <table>
                  <thead>
                    <tr>
                      <th>Product Name</th>
                      <th>Category</th>
                      <th>Stock Level</th>
                      <th>Reorder Point</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredProducts.map((product, index) => (
                      <tr key={index}>
                        <td>{product.productName}</td>
                        <td>{product.productCategory}</td>
                        <td>{product.stockLevel}</td>
                        <td>{product.reorderPoint}</td>
                        <td>
                          <button
                            className="delete-btn"
                            onClick={() => handleDeleteProduct(product.productName)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p>No products found</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
