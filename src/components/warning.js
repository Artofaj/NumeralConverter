import React, { useEffect } from "react"

const Warning = params => {
    
  useEffect(() => {
    if (params.warning !== null) {
      setTimeout(() => {
        params.showWarning(null)
      }, 2000)
    }
  }, [params.warning])

  return (
    params.warning !== null && (
      <div
        style={{
          backgroundColor: "var(--clr-red)",
          color: "#FFF",
          padding: "var(--gap-sm)",
        }}
      >
        {params.warning}
      </div>
    )
  )
}

export default Warning
