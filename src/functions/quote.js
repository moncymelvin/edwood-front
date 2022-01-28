import axios from "axios";

export const getquotes= async () =>
  await axios.get(`${process.env.REACT_APP_API}/quotes`);

export const createquote = async (quote) =>
  await axios.post(`${process.env.REACT_APP_API}/quote`, quote);

