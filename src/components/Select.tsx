import { useState } from "react";
import "../styles/css/components/Select.css";
import "../styles/css/components/Input.css";
import DropdownArrowIcon from "../assets/icons/DropdownArrow.svg";
import { selectOptionT } from "../data";

function Select({
  options,
  selectedOption,
  onSelect,
}: {
  options: selectOptionT[];
  selectedOption: selectOptionT;
  onSelect: (arg: selectOptionT) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

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

        {isOpen && (
          <ul className="select__dropdown ">
            {options.map((option, key) => (
              <a
                key={key}
                onClick={() => {
                  onSelect(option);
                  setIsOpen(false);
                }}
              >
                <li
                  key={option.value}
                  className={`${
                    option.value === selectedOption.value ? "selected" : ""
                  }`}
                >
                  <div className="select__dropdown-icon">{option.icon}</div>
                  <div className="select__dropdown-label">{option.value}</div>
                </li>
                {option.value != options[options.length - 1].value && <hr />}
              </a>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Select;
