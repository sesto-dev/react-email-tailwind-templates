import { MainNav } from "@/components/main-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import prisma from "@/lib/prisma";

const Navbar = async () => {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-8">
        CMS
        <MainNav className="mx-6" />
        <div className="ml-auto flex items-center space-x-4">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
