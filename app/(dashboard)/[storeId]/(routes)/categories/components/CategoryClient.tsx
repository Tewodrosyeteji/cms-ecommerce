"use client";

import Heading from "@/components/ui/Heading";
import { Button } from "@/components/ui/button";
import { Billboard } from "@prisma/client";
import { Separator } from "@radix-ui/react-separator";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import { CategoryColumn, Columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import ApiList from "@/components/ui/api-list";

type CategoriesClientProps = {
  data: CategoryColumn[];
};

const CategoryClient: React.FC<CategoriesClientProps> = ({ data }) => {
  const params = useParams();
  const router = useRouter();
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Categories (${data.length})`}
          description="manage category for your store "
        />
        <Button
          onClick={() => router.push(`/${params.storeId}/categories/new`)}
        >
          <Plus className="mr-2 h-4 w-4" />
          Add New
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="label" columns={Columns} data={data} />
      <Heading title="API" description="API calls for categories" />
      <Separator />
      <ApiList entityName="categories" entityIdName="categoryId" />
    </>
  );
};

export default CategoryClient;
