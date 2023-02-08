import Script from "next/script";

import config from "@/configs/config";

const UmamiScript = () => {
  return (
    <>
      <Script
        async
        defer
        data-website-id={config.analytics.umamiWebsiteId}
        src='https://umami.example.com/umami.js' // Replace with your umami instance
      />
    </>
  );
};

export default UmamiScript;
