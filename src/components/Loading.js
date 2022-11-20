import React from 'react'
import "./loadingStyle.css"

function Loading() {

  return (
    <div style={{
                background: "black",
                height: "100vh",
                display: "flex",
                justifyContent: "center"
                }}>
        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default Loading
