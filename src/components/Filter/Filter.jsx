import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateFilter } from "../../redux/contactSlice";

function Filter() {
  const filter = useSelector((state) => state.contacts.filter || "");
  const dispatch = useDispatch();

  return (
    <div>
      <label>
        Find contacts by name:
        <input
          type="text"
          value={filter}
          onChange={(e) => dispatch(updateFilter(e.target.value))}
        />
      </label>
    </div>
  );
}

export default Filter;