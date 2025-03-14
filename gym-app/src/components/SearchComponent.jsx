import { use, useState } from "react";

const SearchComponent = ({ searchItem }) => {
  const [change, setChange] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setChange(value);
  };
  return (
    <div className="flex justify-center items-center px-8 my-8">
      <div>
        <input
          placeholder="Search"
          className="border w-full px-4 py-1"
          onChange={handleChange}
          value={change}
        />
      </div>
      <div>
        <button className="border px-2 py-1" onClick={() => searchItem(change)}>
          Search
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default SearchComponent;
