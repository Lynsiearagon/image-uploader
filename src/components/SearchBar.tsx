const SearchBar = () => {
  // This would ideally search for image names on the frontend
  // Data could be indexed or paginated

  return (
    <div className="w-full">
      <input
        type="text"
        className="border border-black p-2 w-full md:w-2/3 rounded-md"
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBar;
