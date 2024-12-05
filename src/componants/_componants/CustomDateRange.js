import React from "react";
import DateInput from "./DateInput";

const CustomDateRange = ({ customRange, onRangeChange, styles = {} }) => {
    const handleDateChange = (type, value) => {
        const updatedRange = { ...customRange, [type]: new Date(value) };
        if (type === "to" && updatedRange.to < updatedRange.from) {
            alert("'To' date cannot be earlier than 'From' date");
            return;
        }
        onRangeChange(updatedRange);
    };

    return (
        <div>
            <DateInput
                label="From"
                value={customRange.from}
                onChange={(date) => handleDateChange("from", date)}
                styles={styles}
            />
            <DateInput
                label="To"
                value={customRange.to}
                onChange={(date) => handleDateChange("to", date)}
                styles={styles}
            />
        </div>
    );
};

export default CustomDateRange;
