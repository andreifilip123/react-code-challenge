import React from "react";

const Select = ({ items, label, onSelect }) => {
    return (
        <div className="select">
            <select
                onChange={e => onSelect(e.target.value)}
                defaultValue={label}
            >
                <option value={label} disabled>
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
