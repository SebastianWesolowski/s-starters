import { Seo } from "@molecules";
import { BasicLayout } from "@organisms";

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
