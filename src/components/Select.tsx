import React from "react";
import { getSelectOptions } from "../data";

function Select() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);
  const [filteredOptions, setFilteredOptions] = React.useState(
    getSelectOptions()
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);

    const filtered = getSelectOptions(event.target.value);

    setFilteredOptions(filtered);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Select a platform..."
        value={searchTerm}
        onChange={handleInputChange}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
      />
      {isOpen && (
        <ul className="select__dropdown">
          {filteredOptions.map((option) => (
            <li key={option.value}>
              <div className="select__dropdown-icon">{option.icon}</div>
              <div className="select__dropdown-label">{option.label}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Select;
