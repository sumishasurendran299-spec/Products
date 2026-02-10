import { useState } from "react";
import Navbar from "./Components/Navbar.jsx";
import Filters from "./Components/Filters.jsx";
import ProductList from "./Components/ProductList.jsx";
import productsData from "./Data/Products";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("");

  let filteredProducts = productsData
    .filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((product) =>
      category === "All" ? true : product.category === category
    );

  if (sort === "priceLow") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sort === "priceHigh") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sort === "rating") {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <Filters
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
          sort={sort}
          setSort={setSort}
        />
        <ProductList products={filteredProducts} />
      </div>
    </>
  );
}

export default App;
