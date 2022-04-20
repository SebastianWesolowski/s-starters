import { IFormSignInValues } from "@components/Forms/FormSignIn/types";
import { apiEndpoint } from "service/apiEndpoint";
import { axiosInstance } from "./axiosInstance";

const getResponseCreateNewContact = async (
  value: Partial<IFormSignInValues>
): Promise<number> => {
  return new Promise((resolve) => {
    axiosInstance
      .post(apiEndpoint.getresponse, JSON.stringify(value))
      .then((response: any) => {
        return resolve(response.status);
      })
      .catch((error: any) => {
        return resolve(error.status);
      });
  });
};

export default getResponseCreateNewContact;
