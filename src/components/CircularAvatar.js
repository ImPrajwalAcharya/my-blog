import React from "react";
import PropTypes from "prop-types";

const Avatar = ({ src, alt, size = "w-16 h-16", border = false, borderColor = "border-gray-200" }) => {
  return (
    <div
      className={`rounded-full overflow-hidden ${size} ${
        border ? `border-2 ${borderColor}` : ""
      }`}
    >
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
};

Avatar.propTypes = {
  src: PropTypes.string.isRequired, // Image source
  alt: PropTypes.string.isRequired, // Alt text
  size: PropTypes.string, // Tailwind size classes for width and height (e.g., "w-20 h-20")
  border: PropTypes.bool, // Whether to show a border
  borderColor: PropTypes.string, // Tailwind border color class (e.g., "border-blue-500")
};

export default Avatar;
