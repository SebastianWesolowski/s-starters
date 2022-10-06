const getMetaData = (SEOData: any) => {
  const emptyMeta = {
    title: "",
    siteName: "",
    description: "",
    url: "",
    type: "",
    robots: "",
    image: "",
    locale: "",
    canonical: "",
    keywords: "",
    twitter: "",
  };

  const defaultMeta = Object.entries(emptyMeta).map((item) => {
    const [keyName] = item;
    const value = SEOData[String(keyName)];
    return [keyName, value];
  });

  return Object.fromEntries(defaultMeta);
};

export default getMetaData;
