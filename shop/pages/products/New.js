import React from "react";
import ProtectedRoute from "../ProtectedRoute";

function New(props) {
  return (
    <ProtectedRoute requireAdmin>
      <div>new</div>
    </ProtectedRoute>
  );
}

export default New;
