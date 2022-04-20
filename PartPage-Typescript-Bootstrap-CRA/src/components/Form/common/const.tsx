export const toLongValue = (
  language: "pl" | "en",
  maxLength: number | string
): string => {
  switch (language) {
    case "pl":
      return `To pole jest za długie, maksymalna ilość znaków to ${maxLength}`;
    case "en":
      return `This field is too long, maximum number of characters is ${maxLength}`;
    default:
      return `This field is too long, maximum number of characters is ${maxLength}`;
  }
};

export const toShortValue = (
  language: "pl" | "en",
  maxLength: number | string
): string => {
  switch (language) {
    case "pl":
      return `To pole jest za krótkie, minimalna ilość znaków to ${maxLength}`;
    case "en":
      return `This field is too short, minimum number of characters is ${maxLength}`;
    default:
      return `This field is too short, minimum number of characters is ${maxLength}`;
  }
};

export const ErrorValidation = {
  pl: {
    required: "To pole jest wymagane",
    emailIncorrectValidateForm: "Nieprawidłowy format wiadomości e-mail",
    passwordIncorrectValidate: "Nieprawidłowe hasło",
    passwordPatternError:
      "Hasło powinno mieć min. 8 znaków i jedną wielką literę",
    passwordMatch: "Hasła muszą być zgodne",
    checkAgreement: "Zaznacz zgodę",
    emailIsUnAvailable: "Ten email jest już używany",
    usernameIsUnAvailable: "Ta nazwa użytkownika jest już zajęta",
  },
  en: {
    required: "This field is required",
    emailIncorrectValidateForm: "Incorrect email format",
    passwordIncorrectValidate: "Incorrect password",
    passwordPatternError:
      "Password should have min. 8 characters and one capital letter",
    passwordMatch: "Passwords should be the same",
    checkAgreement: "Check agreement",
    emailIsUnAvailable: "This email is already in use",
    usernameIsUnAvailable: "This username is already in use",
  },
};
