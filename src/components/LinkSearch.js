const LinkSearch = (props) => {
  return (
    <div>
      <input
        type="text"
        className="form-control my-2 searchBox"
        placeholder="> Click to search here"
        onChange={(e) => {
          props.handleSearch(e.currentTarget.value);
        }}
      />
    </div>
  );
};

export default LinkSearch;
