import { useState } from "react";
import "../styles/css/components/Select.css";
import "../styles/css/components/Input.css";
import DropdownArrowIcon from "../assets/icons/DropdownArrow.svg";
import { retrievePlatformIcon } from "../util/data";

function Select({
  options,
  selectedOption,
  onSelect,
  index,
}: {
  options: string[];
  selectedOption: string;
  index: number;
  onSelect: (option: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="select">
      <label className="select__label body__text-s" htmlFor="select">
        Platform
      </label>
      <div className="select__input  input__container">
        <span className="input__icon-platform input__icon">
          {retrievePlatformIcon(selectedOption)}
        </span>
        <input
          className="input__field"
          type="text"
          name="select"
          placeholder="Select a platform..."
          value={selectedOption}
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
                  key={option}
                  className={`${option === selectedOption ? "selected" : ""}`}
                >
                  <div className="select__dropdown-icon">
                    {retrievePlatformIcon(option)}
                  </div>
                  <div className="select__dropdown-label">{option}</div>
                </li>
                {option != options[options.length - 1] && <hr />}
              </a>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Select;
