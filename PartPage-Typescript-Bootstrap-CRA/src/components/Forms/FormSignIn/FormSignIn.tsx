import {
  ErrorValidation,
  toLongValue,
  toShortValue,
} from "components/Form/common/const";
import FormikWrapper from "components/Form/FormikWrapper";
import { NewsletterContext } from "context/contextType/NewsletterContext";
import { FC, useContext, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import * as Yup from "yup";

import ButtonCallback, { TProcessState } from "../../ButtonCallback";
import {
  debugInitialValues,
  genderValue,
  IFormSignIn,
  IFormSignInValues,
  initialValues,
  titleValue,
} from "./types";
import Select from "components/Form/Inputs/Select";
import TextField from "components/Form/Inputs/TextField";
import TextArea from "components/Form/Inputs/TextArea";
import Checkbox from "components/Form/Inputs/Checkbox";
import createNewContact from "service/mail/airTableCreateNewConbtact";
import getResponseCreateNewContact from "service/mail/getResponseCreateNewContact";
// import createNewContact from "service/mail/signIn";

const FormSignIn: FC<IFormSignIn> = (): JSX.Element => {
  const [uniqueId, setUniqueId] = useState("");
  const { setIsSend } = useContext(NewsletterContext);
  const [callbackState, setCallbackState] = useState<TProcessState>(null);

  const onSubmit = (values: IFormSignInValues) => {
    const fetchCreateNewContact = async () => {
      const airTableResponse = await createNewContact(values);
      if (airTableResponse === 200) {
        setCallbackState("done");
        const getResponseResponse = await getResponseCreateNewContact({
          email: values.email,
          firstName: values.firstName,
          lastName: values.lastName,
        });

        if (getResponseResponse === 202) {
          setIsSend(true);
        } else {
          setCallbackState("error");
        }
      } else {
        setCallbackState("error");
      }
    };

    fetchCreateNewContact();
  };
  useEffect(() => {
    setUniqueId(uuid());
  }, []);

  return (
    <FormikWrapper
      uniqueId={uniqueId}
      onSubmit={onSubmit}
      initialValues={
        process.env.NODE_ENV === "production"
          ? initialValues
          : debugInitialValues
      }
      setCallbackState={setCallbackState}
    >
      <div className="row justify-content-center mb-4">
        <div className="col-6" data-aos="fade-down" data-aos-delay="150">
          <Select
            label="Gender *"
            name="gender"
            options={genderValue}
            validate={{
              gender: Yup.string()
                .ensure()
                .required(ErrorValidation.en.required),
            }}
          />
        </div>
        <div className="col-6" data-aos="fade-down" data-aos-delay="150">
          <Select
            label="Title *"
            name="title"
            options={titleValue}
            validate={{
              title: Yup.string()
                .ensure()
                .required(ErrorValidation.en.required),
            }}
          />
        </div>
      </div>
      <div className="row justify-content-center mb-4">
        <div className="col-6" data-aos="fade-down" data-aos-delay="150">
          <TextField
            type="text"
            label="First name *"
            name="firstName"
            validate={{
              firstName: Yup.string()
                .max(64, toLongValue("en", 64))
                .min(2, toShortValue("en", 2))
                .required(ErrorValidation.en.required),
            }}
          />
        </div>
        <div className="col-6" data-aos="fade-down" data-aos-delay="150">
          <TextField
            type="text"
            label="Last name *"
            name="lastName"
            validate={{
              lastName: Yup.string()
                .max(64, toLongValue("en", 64))
                .min(2, toShortValue("en", 2))
                .required(ErrorValidation.en.required),
            }}
          />
        </div>
      </div>
      <div
        className="input-group mb-4"
        data-aos="fade-down"
        data-aos-delay="150"
      >
        <TextField
          type="email"
          label="Email address *"
          name="email"
          icon={
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-dark-3"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.5002 3.75H2.5002C2.16868 3.75 1.85074 3.8817 1.61632 4.11612C1.3819 4.35054 1.2502 4.66848 1.2502 5V5.27104L10.0002 10.5213L18.7502 5.27098V5C18.7502 4.66848 18.6185 4.35054 18.3841 4.11612C18.1497 3.8817 17.8317 3.75 17.5002 3.75ZM0.000203451 5.64224C-6.77314e-05 5.63161 -6.79025e-05 5.62098 0.000203451 5.61034V5C0.000203451 4.33696 0.263596 3.70107 0.732437 3.23223C1.20128 2.76339 1.83716 2.5 2.5002 2.5H17.5002C18.1632 2.5 18.7991 2.76339 19.268 3.23223C19.7368 3.70107 20.0002 4.33696 20.0002 5V5.61604V5.63397V15C20.0002 15.663 19.7368 16.2989 19.268 16.7678C18.7991 17.2366 18.1632 17.5 17.5002 17.5H2.5002C1.83716 17.5 1.20128 17.2366 0.732437 16.7678C0.263596 16.2989 0.000203451 15.663 0.000203451 15V5.64224ZM18.7502 13.9117V6.72895L12.6801 10.3708L18.7502 13.9117ZM18.7051 15.3329L11.5602 11.165L11.4569 11.1048L10.0002 11.9788L8.54329 11.1049L8.44016 11.165L1.29533 15.3328C1.35239 15.5394 1.46213 15.7297 1.61632 15.8839C1.85074 16.1183 2.16868 16.25 2.5002 16.25H17.5002C17.8317 16.25 18.1497 16.1183 18.3841 15.8839C18.5383 15.7297 18.648 15.5394 18.7051 15.3329ZM1.2502 13.9117V6.73013L7.31989 10.371L1.2502 13.9117Z"
              ></path>
            </svg>
          }
          validate={{
            email: Yup.string()
              .email(ErrorValidation.en.emailIncorrectValidateForm)
              .required(ErrorValidation.en.required),
          }}
        />
      </div>
      <div
        className="input-group mb-4"
        data-aos="fade-down"
        data-aos-delay="150"
      >
        <TextArea
          row={2}
          label="Affiliation *"
          name="affiliation"
          placeholder="Name of the scientific institution or company – without address"
          validate={{
            affiliation: Yup.string()
              .max(200, toLongValue("en", 200))
              .min(2, toShortValue("en", 2))
              .required(ErrorValidation.en.required),
          }}
        />
      </div>
      <div
        className="input-group mb-4"
        data-aos="fade-down"
        data-aos-delay="150"
      >
        <TextArea
          row={2}
          label="Minisymposium topic *"
          placeholder="Write topic of the proposed Minisymposium"
          name="topic"
          validate={{
            topic: Yup.string()
              .max(64, toLongValue("en", 64))
              .min(2, toShortValue("en", 2))
              .required(ErrorValidation.en.required),
          }}
        />
      </div>
      <div
        className="input-group mb-4"
        data-aos="fade-down"
        data-aos-delay="150"
      >
        <TextArea
          row={3}
          label="Short description *"
          placeholder="Description of the proposed Minisymposium topic (up to 2000 characters)"
          name="description"
          validate={{
            description: Yup.string()
              .max(2000, toLongValue("en", 2000))
              .min(2, toShortValue("en", 2))
              .required(ErrorValidation.en.required),
          }}
          textCounter
        />
      </div>

      <div className="" data-aos="fade-down" data-aos-delay="150">
        <p>
          Please add max 4 keywords which best describe proposed Minisymposium
          topic:
        </p>
      </div>
      <div className="row mb-4" data-aos="fade-down" data-aos-delay="150">
        <div className="col-6">
          <TextField
            type="text"
            placeholder="Keyword 1"
            name="keyword_1"
            validate={{
              keyword_1: Yup.string()
                .max(32, toLongValue("en", 32))
                .min(2, toShortValue("en", 2)),
            }}
          />
        </div>
        <div className="col-6">
          <TextField
            type="text"
            placeholder="Keyword 2"
            name="keyword_2"
            validate={{
              keyword_2: Yup.string()
                .max(32, toLongValue("en", 32))
                .min(2, toShortValue("en", 2)),
            }}
          />
        </div>
      </div>
      <div className="row mb-4" data-aos="fade-down" data-aos-delay="150">
        <div className="col-6">
          <TextField
            type="text"
            placeholder="Keyword 3"
            name="keyword_3"
            validate={{
              keyword_3: Yup.string()
                .max(32, toLongValue("en", 32))
                .min(2, toShortValue("en", 2)),
            }}
          />
        </div>
        <div className="col-6">
          <TextField
            type="text"
            placeholder="Keyword 4"
            name="keyword_4"
            validate={{
              keyword_4: Yup.string()
                .max(32, toLongValue("en", 32))
                .min(2, toShortValue("en", 2)),
            }}
          />
        </div>
      </div>
      <div
        className="row mb-4 col-12"
        data-aos="fade-down"
        data-aos-delay="150"
      >
        <Checkbox
          name="privacyPolicy"
          label={
            <p className="text-start text-dark-1 m-0">
              I accept the <a href="pdf/Privacy Policy.pdf">privacy policy</a>
              .*
            </p>
          }
          validate={{
            privacyPolicy: Yup.bool()
              .oneOf([true], ErrorValidation.en.checkAgreement)
              .required(ErrorValidation.en.required),
          }}
        />
      </div>

      <p>
        Your registration form will be accepted after confirming by entering the
        link which will be send to You at the e-mail address provided during
        Minisymposium topic registration.
      </p>

      <ButtonCallback
        className="btn btn-action-1 w-100 mb-6"
        setCallbackState={setCallbackState}
        type="submit"
        variant="contained"
        size="lg"
        state={callbackState}
      />
    </FormikWrapper>
  );
};

export default FormSignIn;
