import { BASE_URL } from "../constants";

export default async (id) => {
  try {
    const user = await fetch(`${BASE_URL}/get-selected-user-details/${id}`);

    return user.json();
  } catch (error) {
    throw new Error(error.message);
  }
};
