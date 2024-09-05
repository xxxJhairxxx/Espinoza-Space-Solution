import type { NextPage } from "next";
import { getGenerals } from "../lib/getGenerals";

const Error: NextPage = () => {
  return <div>_error</div>;
};

export default Error;

export const getStaticProps = async () => {
  const generals = await getGenerals();

  return {
    props: {
      generals,
    },
    revalidate: 1,
  };
};
