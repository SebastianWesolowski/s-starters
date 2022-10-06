import { useEffect } from "react";
import { hotjar } from "react-hotjar";

import config from "@/config/config";

const { hjsv, hjid } = config.analytics;

const HotJar = (): null | JSX.Element => {
  useEffect(() => {
    return hotjar.initialize(Number(hjid), Number(hjsv));
  }, []);

  return null;
};

export default HotJar;
