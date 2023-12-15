import { useClerk } from "@clerk/clerk-react";

function SignInButton() {
  const clerk = useClerk();

  return (
    <button
      className="sign-in-btn text-white"
      onClick={() => clerk.openSignIn({})}
    >
      Sign in
    </button>
  );
}
export default SignInButton;
