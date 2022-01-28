import axios from "axios";

export const getAdvs = async () =>
  await axios.get(`${process.env.REACT_APP_API}/advs`);


export const removeAdv = async (slug, authtoken) =>
  await axios.delete(`${process.env.REACT_APP_API}/adv/${slug}`, {
    headers: {
      authtoken,
    },
  });

export const createAdv = async (adv, authtoken) =>
  await axios.post(`${process.env.REACT_APP_API}/adv`, adv, {
    headers: {
      authtoken,
    },
  });

