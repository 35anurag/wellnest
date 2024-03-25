import "./Header.css";
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
    <header className="navbar_header">
      <div className="navbar_contents">
        <div className="logo">
          <h1>WellNest</h1>
        </div>

        <div className="navbar_links">
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

        <div className="nav_right">
          <div>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
            <SignedOut>
              <Link href="/sign-in">Login</Link>
            </SignedOut>
          </div>
          <div className="mobile_nav">
            <Sheet>
              <SheetTrigger>Open</SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>
                    <div className="mobile_links">
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
