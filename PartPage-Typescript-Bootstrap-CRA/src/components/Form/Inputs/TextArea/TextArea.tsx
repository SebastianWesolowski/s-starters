import { Field, FieldProps } from "formik";

import { ITextAreaProps } from "./types";
import { Form } from "react-bootstrap";
import TextCounter from "./components/TextCounter";
import { useState } from "react";

const TextArea = ({
  label,
  name,
  row,
  defaultValue,
  placeholder,
  textCounter = false,
  validate,
  ...rest
}: ITextAreaProps): JSX.Element => {
  const [countText, setCountText] = useState(0);

  return (
    <Field
      fullWidth
      name={name}
      label={label}
      defaultValue={defaultValue}
      {...rest}
    >
      {({ field, meta, form }: FieldProps) => {
        const { value } = field;
        const { error, touched } = meta;

        const { setFieldValue, submitCount } = form;
        const isError = () => !error && touched && submitCount > 0;

        const onHandleChange = (fieldValue: String): void => {
          let localValue = fieldValue;
          setCountText(localValue.length);
          setFieldValue(name, localValue);
        };

        return (
          <Form.Group className="position-relative w-100">
            {label && <Form.Label>{label}</Form.Label>}
            <Form.Control
              rows={row}
              as="textarea"
              placeholder={placeholder}
              aria-label="Floating label select example"
              type="textarea"
              name={name}
              value={value}
              onChange={(e) => {
                onHandleChange(e.target.value);
              }}
              isValid={isError()}
              isInvalid={!!error && touched && submitCount > 0}
            />
            <Form.Control.Feedback type="invalid">
              {error}
            </Form.Control.Feedback>
            {textCounter && (
              <TextCounter
                countText={countText}
                validate={validate}
                name={name}
              />
            )}
          </Form.Group>
        );
      }}
    </Field>
  );
};

export default TextArea;
