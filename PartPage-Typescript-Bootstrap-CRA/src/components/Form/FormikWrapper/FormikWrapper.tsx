import { Children, FC, PropsWithChildren, useEffect, useState } from "react";

import { Form, Formik, FormikConfig, FormikValues } from "formik";
// import { assign } from 'lodash';
import * as Yup from "yup";

import DisplayFormikState from "../common/DisplayFormikState";
import CallBackWrapper from "./CallBackWrapper";
import { IFormikWrapper } from "./types";
import assign from "lodash/assign";
export interface FormikStepProps
  extends Pick<FormikConfig<FormikValues>, "children" | "validationSchema"> {
  label: string;
}

const FormikWrapper: FC<PropsWithChildren<IFormikWrapper>> = ({
  uniqueId,
  initialValues,
  onSubmit,
  setCallbackState,
  children,
}): JSX.Element => {
  const [validationSchema, setValidationSchema] = useState({});

  useEffect(() => {
    const createChildrenArray = (childrenComponent: React.ReactNode) => {
      const childrenArray = Children.toArray(
        childrenComponent
      ) as React.ReactElement[];
      return childrenArray;
    };

    const checkControl = (childrenArray: React.ReactElement[]) => {
      childrenArray.forEach((child) => {
        if (typeof child !== "object") {
          return;
        }

        const { props } = child;

        if (typeof props.children === "object") {
          checkControl(createChildrenArray(props.children));
        }

        if (props.validate && "validate" in props) {
          assign(schema, props.validate);
          return;
        }
      });
    };

    const rootChildrenArray = createChildrenArray(children);
    const schema = {};

    checkControl(rootChildrenArray);
    setValidationSchema(schema);
    }, [children]);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object().shape(validationSchema)}
      onSubmit={(values, { setSubmitting }) => {
        onSubmit(values);
        setSubmitting(false);
      }}
    >
      {(formikProps) => {
        return (
          <CallBackWrapper setCallbackState={setCallbackState}>
            <Form id={uniqueId} autoComplete="off">
              {children}
            </Form>
            <DisplayFormikState {...formikProps} />
          </CallBackWrapper>
        );
      }}
    </Formik>
  );
};

export default FormikWrapper;
