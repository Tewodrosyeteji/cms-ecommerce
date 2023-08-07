"use client";

import Modal from "@/components/ui/modal";
import useStoreModal from "@/hooks/useStoreModal";
import { useEffect } from "react";

type Props = {};

const setUpPage = (props: Props) => {
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);
  return <div>RootPage</div>;
};

export default setUpPage;
