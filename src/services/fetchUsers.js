let baseURL = "https://randomuser.me/api/",
  numberOfReasults = "?results=10",
  //includedFields = "&inc=name,location,email,dob,picture",
  additionalInfo = "&noinfo";

export const fetchUsers = () => {
  return fetch(`${baseURL}${numberOfReasults}${additionalInfo}`)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => error);
};
