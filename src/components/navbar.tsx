import { MainNav } from "@/components/main-nav";
import { ThemeToggle } from "@/components/theme-toggle";

const Navbar = async () => {
  return (
    <div className="border-b">
      <div className="flex gap-6 h-16 items-center px-[1.4rem] md:px-[4rem] lg:px-[6rem] xl:px-[8rem] 2xl:px-[12rem]">
        <h1 className="font-bold">Admin</h1>
        <MainNav />
        <div className="ml-auto flex items-center space-x-4">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
