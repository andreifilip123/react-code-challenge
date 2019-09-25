import React from "react";

const Select = ({ items, label, onSelect }) => {
    return (
        <div className="select">
            <select onChange={e => onSelect(e.target.value)}>
                <option value={label} disabled selected>
                    {label}
                </option>
                {items.length !== 0 &&
                    items.map((item, index) => {
                        if (item.label) {
                            return (
                                <option
                                    onClick={() => onSelect(item)}
                                    key={index}
                                    value={item.apiParameter}
                                >
                                    {item.label}
                                </option>
                            );
                        } else {
                            return (
                                <option
                                    onClick={() => onSelect(item)}
                                    key={index}
                                    value={item}
                                >
                                    {item}
                                </option>
                            );
                        }
                    })}
            </select>
        </div>
    );
};

export default Select;
