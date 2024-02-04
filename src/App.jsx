import "./styles/index.css";
import Layout from "./components/Layout";
import NoMatch from "./components/NoMatch";
import {
  ClerkProvider,
  SignIn,
  SignUp,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { dark } from "@clerk/themes";
import { ProtectedPage } from "./components/ProtectedPage";

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

function App() {
  return (
    <>
      <BrowserRouter>
        <ClerkProvider publishableKey={clerkPubKey} appearance={dark}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="" element={<Home />} />
            </Route>

            <Route
              path="/protected"
              element={
                <>
                  <SignedIn>
                    <ProtectedPage />
                  </SignedIn>

                  <SignedOut>
                    <Navigate to={"/sign-in"} />
                  </SignedOut>
                </>
              }
            />

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
                    redirectUrl={"/"}
                    path="/sign-up"
                    signInUrl="/sign-in"
                  />
                </div>
              }
            />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </ClerkProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
