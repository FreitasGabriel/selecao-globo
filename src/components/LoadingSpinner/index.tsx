import React from "react";
import { SpinnerWrapper } from "./styles";

export function LoadingSpinner() {
  return (
    <SpinnerWrapper data-testid="spinner__test">
      <div className="loading-spinner"></div>
    </SpinnerWrapper>
  );
}
