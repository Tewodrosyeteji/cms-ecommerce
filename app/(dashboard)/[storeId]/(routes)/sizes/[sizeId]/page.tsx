import prismadb from "@/lib/prismadb";
import CategoryForm from "./components/SizeForm";
import SizeForm from "./components/SizeForm";

type Props = {};

const SizePage = async ({
  params,
}: {
  params: { storeId: string; sizeId: string };
}) => {
  const size = await prismadb.size.findUnique({
    where: {
      id: params.sizeId,
    },
  });

  const billboards = await prismadb.billboard.findMany({
    where: {
      storeId: params.storeId,
    },
  });
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SizeForm initialData={size} />
      </div>
    </div>
  );
};

export default SizePage;
