import prismadb from "@/lib/prismadb";
import React from "react";

type Props = {};

const BillboardPage = async ({
  params,
}: {
  params: { billboardId: string };
}) => {
  const billboard = await prismadb.billboard.findUnique({
    where: {
      id: params.billboardId,
    },
  });
  return <div>ExistingBillboard:{billboard?.label}</div>;
};

export default BillboardPage;
