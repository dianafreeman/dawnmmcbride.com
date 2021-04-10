import React from "react"

export default function Section({
  title = "About",
  description,
  children,
  ...rest
}) {
  return (
    <section {...rest}>
      <div className="container">
        <h2 className="text-center section-title">{title}</h2>
        <div className="row">
          {description && (
            <div className="col-sm-10 mx-auto">
              <p className="lead">{description}</p>
            </div>
          )}
          {children}
        </div>
      </div>
    </section>
  )
}
