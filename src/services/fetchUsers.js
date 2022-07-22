import { BASE_URL } from "../constants";
export default async () => {
  let users = null;
  users = await fetch(`${BASE_URL}/get-all-users`, {
    method: "GET",
  });
  return users.json();
};
