import axios from "axios";

export const getStaticPaths = async (props) => {
  const res = await axios.get("https://yts.mx/api/v2/list_movies.json");
  const paths = res.data.list.map(({ id }) => {
    return { params: { id } };
  });
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async (context) => {
  const res = await axios.get("https://yts.mx/api/v2/list_movies.json");
};
