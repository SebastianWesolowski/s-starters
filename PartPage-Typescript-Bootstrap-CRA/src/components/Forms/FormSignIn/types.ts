import { IOptionsObject } from "@components/Form/Inputs/Select/types";

export interface IFormSignInValues {
  gender: string;
  title: string;
  firstName: string;
  lastName: string;
  email: string;
  affiliation: string;
  topic: string;
  description: string;
  keyword_1: string;
  keyword_2: string;
  keyword_3: string;
  keyword_4: string;
  privacyPolicy: boolean;
}

export const debugInitialValues: IFormSignInValues = {
  gender: "Man",
  title: "Professor",
  firstName: "Kamil",
  lastName: "Nowak",
  email: "denoder@gmail.com",
  affiliation: "Polsko-Japońska Akademia Technik Komputerowych",
  topic: "Minisymposium application form\n",
  description:
    "The 25th International Conference on Computer Methods in Mechanics (CMM) continues the 49-years old series of conferences dedicated to the numerical methods and their applications in mechanics-based problems. The scientific meetings, organized biannually since 1973, provide a forum for the presentation and discussion of new ideas surrounding the theoretical background and practical applications of Computational Mechanics.",
  keyword_1: "application",
  keyword_2: "minisymposium",
  keyword_3: "form",
  keyword_4: "",
  privacyPolicy: true,
};

export const initialValues: IFormSignInValues = {
  gender: "",
  title: "",
  firstName: "",
  lastName: "",
  email: "",
  affiliation: "",
  topic: "",
  description: "",
  keyword_1: "",
  keyword_2: "",
  keyword_3: "",
  keyword_4: "",
  privacyPolicy: false,
};

export const genderValue: IOptionsObject[] = [
  {
    value: "Prefer not to disclose",
    label: "Prefer not to disclose",
  },
  {
    value: "Woman",
    label: "Woman",
  },
  {
    value: "Man",
    label: "Man",
  },
  {
    value: "Non-binary or Gender diverse",
    label: "Non-binary or Gender diverse",
  },
];
export const titleValue: IOptionsObject[] = [
  {
    value: "Dr./PhD",
    label: "Dr./PhD",
  },
  {
    value: "Professor",
    label: "Professor",
  },
  {
    value: "Other",
    label: "Other",
  },
];

export interface IFormSignIn {}
