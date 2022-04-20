import { IFormSignInValues } from "@components/Forms/FormSignIn/types";
import { axiosInstance } from "./axiosInstance";
import { apiEndpoint } from "service/apiEndpoint";

const createNewContact = async (value: IFormSignInValues): Promise<number> => {
  return new Promise((resolve) => {
    axiosInstance
      .post(apiEndpoint.airtable, JSON.stringify(value))
      .then((response: any) => {
        return resolve(response.status);
      })
      .catch((error: any) => {
        return resolve(error.status);
      });
  });
};

export default createNewContact;
