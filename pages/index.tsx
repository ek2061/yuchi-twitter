import type { GetServerSideProps } from "next";
import Head from "next/head";
import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";
import { Tweet } from "../typings";
import { fetchTweets } from "../utils/fetchTweets";

interface HomeProps {
  tweets: Tweet[];
}

const Home = ({ tweets }: HomeProps) => {
  return (
    <div className="mx-auto max-h-screen overflow-hidden lg:max-w-6xl">
      <Head>
        <title>Yuchi Twitter</title>
      </Head>
      <main className="grid grid-cols-9">
        <Sidebar />
        <Feed tweets={tweets} />
        <Widgets />
      </main>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const tweets = await fetchTweets();
  return {
    props: { tweets },
  };
};
