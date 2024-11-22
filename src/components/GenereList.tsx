import useGenres from "../hooks/useGenere";

const GenereList = () => {
  const { data } = useGenres();

  return data.map((genre) => <li key={genre.id}>{genre.name}</li>);
};

export default GenereList;
