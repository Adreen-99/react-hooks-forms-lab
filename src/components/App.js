import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Filter from "./Filter";
import Header from "./Header";
import ItemForm from "./ItemForm";
import itemData from "../data/items";

function App() {
  const [items,setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  
  }

  function handleSearchChange(newSearchText) {
    setSearchText(newSearchText);
  }


  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  function handleItemFormSubmit(newItem) {
    setItems((items) => [...items, newItem]); // Add the new item to the list
  }

  const itemsToDisplay = items
  .filter((item) => selectedCategory === "All" || item.category === selectedCategory)
  .filter((item) => item.name.toLowerCase() === (searchText.toLowerCase()));


  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />
      <Filter
      searchText={searchText}
      onSearchChange={handleSearchChange}
      onCategoryChange={handleCategoryChange}
      />

      <ShoppingList 
      items={itemsToDisplay} 
      searchText={searchText}
      onSearchChange={handleSearchChange}/>
    </div>
  );
}

export default App;
