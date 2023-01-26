import React from "react";
import ProtectedRoute from "../ProtectedRoute";

function MyCarts(props) {
  return (
    <ProtectedRoute>
      <div>cart</div>
    </ProtectedRoute>
  );
}

export default MyCarts;
