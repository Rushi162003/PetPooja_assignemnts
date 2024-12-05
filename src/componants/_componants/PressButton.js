
import React from "react";

const PresetButtons = ({ onSelect, selectedPreset, styles = {} }) => {
  const presets = ["Today", "Yesterday", "This Month", "Last Month", "Custom Range"];

  return (
    <div>
      {presets.map((preset) => (
        <button
          key={preset}
          onClick={() => onSelect(preset)}
          style={{
            ...styles,
            backgroundColor: selectedPreset === preset ? "lightblue" : "",
          }}
        >
          {preset}
        </button>
      ))}
    </div>
  );
};

export default PresetButtons;
