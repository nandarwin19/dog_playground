import Dog from "./Dog";

const Home = () => {
  return (
    <div className="w-full h-screen bg-[#000] p-8 relative">
      <div className="relative max-w-8xl mx-auto">
        <Dog />
      </div>
    </div>
  );
};

export default Home;
