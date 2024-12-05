import React from "react";

const DateInput = ({ label, value, onChange, styles = {} }) => (
  <div>
    <label>{label}: </label>
    <input
      type="date"
      value={value ? value.toISOString().split("T")[0] : ""}
      onChange={(e) => onChange(e.target.value)}
      style={styles}
    />
  </div>
);

export default DateInput;
