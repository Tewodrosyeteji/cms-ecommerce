import { UserButton, auth } from "@clerk/nextjs";
import MainNav from "./MainNav";
import StoreSwitcher from "./StoreSwitcher";
import { redirect } from "next/navigation";
import prismadb from "@/lib/prismadb";

type Props = {};

const Navbar = async (props: Props) => {
  const { userId } = auth();
  if (!userId) {
    redirect("/sign-in");
  }

  const stores = await prismadb.store.findMany({
    where: {
      userId,
    },
  });
  return (
    <div className="border-b">
      <div className="flex items-center px-4 h-16">
        <StoreSwitcher items={stores} />
        <MainNav className="mx-6" />
        <div className="ml-auto flex items-center space-x-4">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
