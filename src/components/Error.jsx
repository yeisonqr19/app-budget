import React, { memo } from "react";

export const Error = memo(({ message }) => {
  return (
    <>
      <p className="alert alert-danger error">{message}</p>
    </>
  );
});
