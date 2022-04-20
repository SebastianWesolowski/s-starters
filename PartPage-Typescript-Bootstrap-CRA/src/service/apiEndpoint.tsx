export const baseApiURL =
  process.env.NODE_ENV === "production"
    ? "https://api.pcm-cmm.com/api"
    : "http://localhost:3000/api";

export const apiEndpoint = {
  airtable: `${baseApiURL}/airtable`,
  getresponse: `${baseApiURL}/getresponse`,
};
