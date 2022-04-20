import { Field, FieldProps } from "formik";
import { Form } from "react-bootstrap";
import { ISelectProps } from "./types";

export const Select = ({
  options,
  name,
  label,
  helperText,
}: ISelectProps): JSX.Element => {
  return (
    <Field name={name}>
      {({ field, meta, form }: FieldProps) => {
        const { value } = field;
        const { error, touched } = meta;
        const { setFieldValue, submitCount } = form;
        const isError = () => !error && touched && submitCount > 0;
        const onHandleChange = (e: any) => {
          setFieldValue(name, e.target.value);
        };

        return (
          <>
            <Form.Group className="position-relative w-100">
              {label && <Form.Label>{label}</Form.Label>}
              <Form.Control
                className="form-select"
                as="select"
                type="select"
                name={name}
                value={value}
                onChange={onHandleChange}
                isValid={isError()}
                isInvalid={!!error && touched && submitCount > 0}
              >
                <option>Select from list</option>
                {options.map(({ value, label }, id) => (
                  <option key={id} value={value}>
                    {label}
                  </option>
                ))}
              </Form.Control>
              {helperText && (
                <p className="my-1">
                  <small>{helperText}</small>
                </p>
              )}
              <Form.Control.Feedback type="invalid">
                {error}
              </Form.Control.Feedback>
            </Form.Group>
          </>
        );
      }}
    </Field>
  );
};
