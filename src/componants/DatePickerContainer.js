import React, { useState } from "react";
import CustomDateRange from "./_componants/CustomDateRange";
import PresetButtons from "./_componants/PressButton";

const DatePickerContainer = ({ onDateChange, styles = {} }) => {
    const [selectedPreset, setSelectedPreset] = useState("");
    const [customRange, setCustomRange] = useState({ from: "", to: "" });

    const handlePresetSelect = (preset) => {
        const today = new Date();
        let range = {};
        switch (preset) {
            case "Today":
                range = { from: today, to: today };
                break;
            case "Yesterday":
                const yesterday = new Date(today);
                yesterday.setDate(today.getDate() - 1);
                range = { from: yesterday, to: yesterday };
                break;
            case "This Month":
                range = { from: new Date(today.getFullYear(), today.getMonth(), 1), to: today };
                break;
            case "Last Month":
                range = {
                    from: new Date(today.getFullYear(), today.getMonth() - 1, 1),
                    to: new Date(today.getFullYear(), today.getMonth(), 0),
                };
                break;
            default:
                break;
        }
        setSelectedPreset(preset);
        setCustomRange(range);
        onDateChange(range);
    };

    const handleCustomRangeChange = (range) => {
        setSelectedPreset("Custom Range");
        setCustomRange(range);
        onDateChange(range);
    };

    return (
        <div style={{ ...styles.container }}>
            <PresetButtons
                onSelect={handlePresetSelect}
                selectedPreset={selectedPreset}
                styles={styles.buttons}
            />
            {selectedPreset === "Custom Range" && (
                <CustomDateRange
                    customRange={customRange}
                    onRangeChange={handleCustomRangeChange}
                    styles={styles.inputs}
                />
            )}
        </div>
    );
};

export default DatePickerContainer;
// Adding Files