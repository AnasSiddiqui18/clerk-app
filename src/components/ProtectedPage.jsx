import Header from "./Header";

export const ProtectedPage = () => {
  return (
    <>
      <Header />
      <div className="bg-gray-700 h-[calc(100vh-100px)] text-center text-white text-3xl">
        <h1 className="uppercase">this is the profile section</h1>
      </div>
    </>
  );
};
