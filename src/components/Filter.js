function Filter({ searchText, onSearchChange, onCategoryChange }) {
  return (
    <div className="Filter">
      <input
        type="text"
        value={searchText}
        placeholder="Search..."
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
