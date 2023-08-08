import prismadb from "@/lib/prismadb";
import React from "react";

type DashbardPageProps = {
  params: { storeId: string };
};

const DashbardPage: React.FC<DashbardPageProps> = async ({ params }) => {
  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
    },
  });
  return <div>Active-User:{store?.name}</div>;
};

export default DashbardPage;
