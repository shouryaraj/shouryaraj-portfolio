import type { NextPage } from "next";
import Information from "../components/Information";
const Home: NextPage = () => {
  return (
    <div className="bg-gray-800 md:container min-h-screen min-w-screen min-w-full">
      <div className="pt-32">
        <Information />
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default Home;
