import React from "react";
import PropTypes from "prop-types";

const Grid = ({
  children,
  columns = 3,
  gap = "gap-4",
  className = "",
}) => {
  return (
    <div
      className={`grid grid-cols-${columns} ${gap} ${className}`}
      style={{
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
      }}
    >
      {children}
    </div>
  );
};

Grid.propTypes = {
  children: PropTypes.node.isRequired, // Content inside the grid
  columns: PropTypes.number, // Number of columns in the grid
  gap: PropTypes.string, // Tailwind gap classes for spacing
  className: PropTypes.string, // Additional custom classes for styling
};

export default Grid;
