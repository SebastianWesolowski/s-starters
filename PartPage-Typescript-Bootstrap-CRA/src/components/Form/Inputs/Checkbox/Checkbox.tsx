import { Field, FieldProps } from "formik";
import { useRef } from "react";
import { Form } from "react-bootstrap";

import { ICheckboxProps } from "./types";

const Checkbox = ({ name, label, validate }: ICheckboxProps): JSX.Element => {
  const checkboxElement = useRef<HTMLInputElement>(null);

  return (
    <Field name={name}>
      {({ field, meta, form }: FieldProps) => {
        const { value } = field;
        const { error, touched } = meta;

        const { setFieldValue, submitCount } = form;
        const isError = () => {
          return !!error && touched && submitCount > 0;
        };
        const onHandleClick = () => {
          if (checkboxElement !== null) {
            setFieldValue(name, !value);
          }
        };

        return (
          <div
            onClick={() => {
              onHandleClick();
            }}
          >
            <Form.Check type={"checkbox"} label={{ label }}>
              <Form.Check.Input
                ref={checkboxElement}
                type={"checkbox"}
                checked={value}
                onChange={() => {}}
                isValid={isError()}
                isInvalid={!!error && touched && submitCount > 0}
              />
              <Form.Check.Label>{label}</Form.Check.Label>
              <Form.Control.Feedback type="invalid">
                {error}
              </Form.Control.Feedback>
            </Form.Check>
          </div>
        );
      }}
    </Field>
  );
};

export default Checkbox;
