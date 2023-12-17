import { useAuth } from "@clerk/clerk-react";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function ProtectedPage() {
  const { isSignedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isSignedIn) navigate("/sign-in");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isSignedIn && <Outlet />;
}

export default ProtectedPage;
