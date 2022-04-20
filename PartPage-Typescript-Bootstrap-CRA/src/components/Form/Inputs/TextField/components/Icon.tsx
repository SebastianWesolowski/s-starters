import { FC, PropsWithChildren } from "react";
import { InputGroup } from "react-bootstrap";
import { IIconProps } from "./types";
import styles from "./Icon.module.scss";
import FeedBackError from "../../common/FeedBackError";
const Icon: FC<PropsWithChildren<IIconProps>> = ({
  error,
  icon,
  children,
}): JSX.Element => {
  if (icon === undefined && children !== undefined) {
    return <>{children}</>;
  }

  return (
    <InputGroup className={styles.borderRight}>
      <InputGroup.Text>{icon}</InputGroup.Text>
      {children} 
      <FeedBackError error={error} />
    </InputGroup>
  );
};

export default Icon;
