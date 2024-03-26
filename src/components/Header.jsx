import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  return (
    <header className="border-b-2 mx-auto sticky z-10">
      <div className="flex flex-row items-center justify-between py-2 md:py-3 lg:py-4 px-[1rem] md:px-[2rem] lg:px-[3rem]">
        <div className="text-[25px] font-bold">
          <Link href="/">WellNest</Link>
        </div>

        <div className=" flex-row items-center gap-[20px] list-none hidden lg:flex">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            <Link href="/courses">Courses</Link>
          </li>
          <li>
            <Link href="/workshops">Workshops</Link>
          </li>
        </div>

        <div className="flex flex-row items-center justify-center gap-[4px] md:gap-[4px] lg:gap-[8px]">
          <div>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
            <SignedOut>
              <Link href="/sign-in">Login</Link>
            </SignedOut>
          </div>
          <div className="block lg:hidden">
            <Sheet>
              <SheetTrigger className="mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>
                    <div className="flex flex-col items-center justify-center gap-[20px] list-none mt-[10rem]">
                      <li>
                        <Link href="/">Home</Link>
                      </li>
                      <li>
                        <Link href="/products">Products</Link>
                      </li>
                      <li>
                        <Link href="/courses">Courses</Link>
                      </li>
                      <li>
                        <Link href="/workshops">Workshops</Link>
                      </li>
                    </div>
                  </SheetTitle>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
