import { Field, FieldProps } from "formik";

import { ITextFieldProps } from "./types";
import { Form } from "react-bootstrap";
import Icon from "./components/Icon";
import { useMemo } from "react";
import FeedBackError from "../common/FeedBackError";
import styles from "./TextField.module.scss";

const TextField = ({
  type,
  label,
  name,
  defaultValue,
  lowerCase,
  icon,
  placeholder,
  validate,
  ...rest
}: ITextFieldProps): JSX.Element => {
  const isRequired = useMemo(() => {
    if (validate[name]?.exclusiveTests.require === true) {
      return true;
    }
    return false;
  }, [validate, name]);

  return (
    <Field
      fullWidth
      name={name}
      type={type}
      defaultValue={defaultValue}
      lowerCase={lowerCase}
      {...rest}
    >
      {({ field, meta, form }: FieldProps) => {
        const { value } = field;
        const { error, touched } = meta;

        const { setFieldValue, submitCount } = form;
        const isError = () => {
          if (!isRequired) {
            return !error && touched && submitCount > 0 && value;
          }
          return !error && touched && submitCount > 0;
        };

        const onHandleChange = (fieldValue: String): void => {
          let localValue = fieldValue;
          if (lowerCase === true) {
            localValue = localValue.toLowerCase();
          }

          setFieldValue(name, localValue);
        };

        return (
          <Form.Group className="position-relative w-100">
            {label && <Form.Label>{label}</Form.Label>}
            <Icon icon={icon} error={error}>
              <Form.Control
                className={icon ? styles.borderRight : ""}
                placeholder={placeholder}
                aria-label="Floating label select example"
                type="text"
                name={name}
                value={value}
                onChange={(e) => {
                  onHandleChange(e.target.value);
                }}
                isValid={isError()}
                isInvalid={!!error && touched && submitCount > 0}
              />
            </Icon>
            {icon ? null : <FeedBackError error={error} />}
          </Form.Group>
        );
      }}
    </Field>
  );
};

export default TextField;
