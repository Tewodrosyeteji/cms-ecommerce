import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

type Props = {};

const setUpPage = (props: Props) => {
  return (
    <div className="p-4">
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default setUpPage;
