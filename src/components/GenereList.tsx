import React from "react";
import useGenres from "../hooks/useGenere";

const GenereList = () => {
  const { genres } = useGenres();

  return genres.map((genre) => <li key={genre.id}>{genre.name}</li>);
};

export default GenereList;
