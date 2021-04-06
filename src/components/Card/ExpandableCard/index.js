import React from "react";

const styles = {
  background: "whitesmoke",
  borderRadius: " 25px",
  borderBottom: " 3px solid white",
  borderRight: " 3px solid white",
  borderLeft: " 3px solid white",
};
export default function ExpandableCard({
  title,
  body,
  toggleSlug,
  children,
  ...rest
}) {
  return (
    <div style={styles}>
      <div className="card-header" id={`${toggleSlug}-heading`}>
        <h5 className="display-5 mb-0">{title}</h5>
        <span className="ind-container js-rotate-if-collapsed">
          <i className="indicator fas fa-chevron-left"></i>
        </span>
      </div>
      <div
        id={toggleSlug}
        className=""
        aria-labelledby={`${toggleSlug}-heading`}
        data-parent="#accordion"
      >
        <div className="card-body">{body}</div>
        <div className="card-footer">{children}</div>
      </div>
    </div>
  );
}
