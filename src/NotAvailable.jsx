import React from "react";

const NotAvailable = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontWeight: "700",
        fontSize: "50px",
        padding: "10px",
        textAlign: "center",
      }}
      className="notAvailable"
    >
      Not Available Now on small screen
    </div>
  );
};

export default NotAvailable;
