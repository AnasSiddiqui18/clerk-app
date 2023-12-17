import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import "../styles/Header.css";
import SignInButton from "./SignInButton";
import SignUpButton from "./SignUpButton";

function Header() {
  return (
    <header className="bg-gray-800 flex justify-between" id="header">
      <img
        src="./logo.png"
        alt="no-img"
        className="bg-white w-16 h-16 rounded-full"
      />

      <nav>
        <SignedOut>
          <SignUpButton />
          <SignInButton />
        </SignedOut>

        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </nav>
    </header>
  );
}

export default Header;
