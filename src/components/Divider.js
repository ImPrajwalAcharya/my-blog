import React from "react";
import PropTypes from "prop-types";

const DividerWithText = ({ text = "", textColor = "text-gray-500", borderColor = "border-gray-300" }) => {
    return (
        <div className="flex items-center justify-center mt-4">
            <div className={`flex-grow border-t ${borderColor}`}></div>
            {text && <span className={`px-4 ${textColor} text-sm`}>{text}</span>}
            <div className={`flex-grow border-t ${borderColor}`}></div>
        </div>
    );
};

DividerWithText.propTypes = {
    text: PropTypes.string, // Text to display in the center
    textColor: PropTypes.string, // Tailwind text color class (default: gray-500)
    borderColor: PropTypes.string, // Tailwind border color class (default: gray-300)
};

export default DividerWithText;
