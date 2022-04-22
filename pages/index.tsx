import type { NextPage } from "next";
import Information from "../components/Information";
import Footer from "../components/Footer";
import Terminal from "../components/Terminal";
const Home: NextPage = () => {
  return (
    <div className="bg-gray-800 md:container min-h-screen min-w-screen min-w-full">
      <div className="pt-14">
        <div className="mb-14">
          <Information />
        </div>
        <Terminal />
        <Footer />
      </div>
    </div>
  );
};

export async function getStaticProps({ params }) {
  return { props: {} };
}
export default Home;
