'use client';

import React from "react";
import { useGlobalState } from "@/context/GlobalStateContext";
import LoaderComponentInt from "@/components/extraComponents/LoaderComponentInt";

const LoaderWrapperInt = ({ children }) => {


  if (isLoading) {
    return <LoaderComponentInt />; // Mostrar el loader mientras `isLoading` es true
  }

  return <>{children}</>; // Mostrar los hijos cuando `isLoading` sea false
};

export default LoaderWrapperInt;