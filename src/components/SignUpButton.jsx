import { useClerk } from "@clerk/clerk-react";

const SignUpButton = () => {
  const clerk = useClerk();

  return (
    <button className="sign-up-btn" onClick={() => clerk.openSignUp({})}>
      Sign up
    </button>
  );
};
export default SignUpButton;
