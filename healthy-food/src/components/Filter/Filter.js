import React from "react";
import { Input } from "reactstrap";

const Filter = ({searchBox,searchValue}) => {
  return (
    <>
      <Input
        type="text"
        name="searchBox"
        id="searchBox"
        placeholder="Seach your favourite food"
        onChange={searchBox}
        value={searchValue}
      />
    </>
  );
};

export default Filter;
