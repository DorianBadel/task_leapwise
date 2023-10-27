import { useState } from "react";
import { getSelectOptions } from "../data";
import "../styles/css/components/Select.css";
import "../styles/css/components/Input.css";
import DropdownArrowIcon from "../assets/icons/DropdownArrow.svg";

function Select() {
  const [isOpen, setIsOpen] = useState(false);
  const filteredOptions = getSelectOptions();
  const [selectedOption, setSelectedOption] = useState({
    value: filteredOptions[0].value,
    icon: filteredOptions[0].icon,
  });

  return (
    <div className="select">
      <label className="select__label body__text-s" htmlFor="select">
        Platform
      </label>
      <div className="select__input  input__container">
        <span className="input__icon-platform input__icon">
          {selectedOption.icon}
        </span>
        <input
          className="input__field"
          type="text"
          name="select"
          placeholder="Select a platform..."
          value={selectedOption.value}
          readOnly
          onFocus={() => setIsOpen(true)}
          onBlur={() => {
            setTimeout(() => {
              setIsOpen(false);
            }, 100);
          }}
        />
        <span className={`input__icon-arrow ${isOpen ? "open" : ""}`}>
          <DropdownArrowIcon />
        </span>
      </div>

      {isOpen && (
        <ul className="select__dropdown">
          {filteredOptions.map((option, key) => (
            <a
              key={key}
              onClick={() => {
                setSelectedOption({ value: option.value, icon: option.icon });
                setIsOpen(false);
              }}
            >
              <li key={option.value}>
                <div className="select__dropdown-icon">{option.icon}</div>
                <div className="select__dropdown-label body__text-m">
                  {option.value}
                </div>
              </li>
              {option.value !=
                filteredOptions[filteredOptions.length - 1].value && <hr />}
            </a>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Select;
