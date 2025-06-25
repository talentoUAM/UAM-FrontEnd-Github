'use client';

import React from "react";
import { useGlobalState } from "@/context/GlobalStateContext";
import Loader from "@/components/extraComponents/LoaderComponent";

const LoaderWrapper = ({ children }) => {
  const { isLoading } = useGlobalState();

  if (isLoading) {
    return <Loader />; // Mostrar el loader mientras `isLoading` es true
  }

  return <>{children}</>; // Mostrar los hijos cuando `isLoading` sea false
};

export default LoaderWrapper;