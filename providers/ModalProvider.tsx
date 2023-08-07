"use client";

import StoreModal from "@/components/modals/StoreModal";
import { useState, useEffect } from "react";

type Props = {};

const ModalProvider = (props: Props) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <>
      <StoreModal />
    </>
  );
};

export default ModalProvider;
