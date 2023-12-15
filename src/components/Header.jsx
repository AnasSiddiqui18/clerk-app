import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import "../styles/Header.css";
import SignInButton from "./SignInButton";
import SignUpButton from "./SignUpButton";

function Header() {
  return (
    <header className="bg-gray-800" id="header">
      <nav>
        <SignedOut>
          <ul>
            <li>
              <SignUpButton />
            </li>

            <li>
              <SignInButton />
            </li>
          </ul>
        </SignedOut>

        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </nav>
    </header>
  );
}

export default Header;
