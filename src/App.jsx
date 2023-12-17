import "./styles/index.css";
import Layout from "./components/Layout";
import NoMatch from "./components/NoMatch";
import { ClerkProvider, SignIn, SignUp } from "@clerk/clerk-react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import ProtectedPage from "./components/ProtectedPage";
import { dark } from "@clerk/themes";

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

const ClerkwithRoutes = () => {
  const navigate = useNavigate();

  return (
    <ClerkProvider
      publishableKey={clerkPubKey}
      navigate={(to) => navigate(to)}
      appearance={dark}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="/protected" element={<ProtectedPage />} />
        </Route>
        <Route
          path="/sign-in/*"
          element={
            <div className="min-h-screen flex justify-center items-center bg-gray-800">
              <SignIn
                routing="path"
                redirectUrl={"/protected"}
                path="/sign-in"
                signUpUrl="/sign-up"
              />
            </div>
          }
        />
        <Route
          path="/sign-up/*"
          element={
            <div className="min-h-screen flex justify-center items-center bg-gray-800">
              <SignUp
                routing="path"
                redirectUrl={"/protected"}
                path="/sign-up"
                signInUrl="/sign-in"
              />
            </div>
          }
        />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </ClerkProvider>
  );
};

function App() {
  return (
    <>
      <BrowserRouter>
        <ClerkwithRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
