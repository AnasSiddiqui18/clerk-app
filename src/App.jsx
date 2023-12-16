import "./styles/index.css";
import Layout from "./components/Layout";
import NoMatch from "./components/NoMatch";
import { ClerkProvider, SignIn, SignUp } from "@clerk/clerk-react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import ProtectedPage from "./components/ProtectedPage";

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

const ClerwithRoutes = () => {
  const navigate = useNavigate();

  return (
    <ClerkProvider publishableKey={clerkPubKey} navigate={(to) => navigate(to)}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="/protected" element={<ProtectedPage />} />
        </Route>
        <Route
          path="/sign-in/*"
          element={
            <div className="min-h-screen flex justify-center items-center bg-gray-500">
              <SignIn
                routing="path"
                redirectUrl={"/protected"}
                path="/sign-in"
              />
            </div>
          }
        />
        <Route
          path="/sign-up/*"
          element={
            <div className="min-h-screen flex justify-center items-center bg-gray-500">
              <SignUp
                routing="path"
                redirectUrl={"/protected"}
                path="/sign-up"
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
        <ClerwithRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
