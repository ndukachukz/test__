import { BASE_URL } from "../constants";

export default async (id, data) => {
  console.log(data);
  const update = await fetch(`${BASE_URL}/update-user-phone_no/${id}`, {
    method: "PUT",
    body: {
      phone_no: data.phone_no,
    },
  });

  return update.json();
};
