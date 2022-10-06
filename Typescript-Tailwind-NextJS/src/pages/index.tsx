import { Seo } from "@/components";

import { BasicLayout } from "@/layout";

const Homepage = (): JSX.Element => {
  return (
    <>
      <BasicLayout>
        <Seo />
        <main>
          {/* <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <Testimonials />
        <Pricing />
        <Faqs /> */}
        </main>
      </BasicLayout>
    </>
  );
};

export default Homepage;
