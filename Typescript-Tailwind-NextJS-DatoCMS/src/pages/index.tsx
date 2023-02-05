import { useQuerySubscription } from "react-datocms";

import { request } from "@/lib/datocms";
import { metaTagsFragment, responsiveImageFragment } from "@/lib/fragments";

import { Seo } from "@/components";

import { BasicLayout } from "@/layout";

export async function getStaticProps({ preview }) {
  const graphqlRequest = {
    query: `
      {
        site: _site {
          favicon: faviconMetaTags {
            ...metaTagsFragment
          }
        }
        blog {
          seo: _seoMetaTags {
            ...metaTagsFragment
          }
        }
        allPosts(orderBy: date_DESC, first: 20) {
          title
          slug
          excerpt
          date
          coverImage {
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
              ...responsiveImageFragment
            }
          }
          author {
            name
            picture {
              responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 100, h: 100, sat: -100}) {
                ...responsiveImageFragment
              }
            }
          }
        }
      }

      ${metaTagsFragment}
      ${responsiveImageFragment}
    `,
    preview,
  };

  return {
    props: {
      subscription: preview
        ? {
            ...graphqlRequest,
            initialData: await request(graphqlRequest),
            token: process.env.NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN,
            environment: process.env.NEXT_DATOCMS_ENVIRONMENT || null,
          }
        : {
            enabled: false,
            initialData: await request(graphqlRequest),
          },
    },
  };
}

const Homepage = ({ subscription }): JSX.Element => {
  const {
    data: { allPosts, site, blog },
  } = useQuerySubscription(subscription);

  const heroPost = allPosts[0];
  // console.log("🚀 ~ file: index.tsx ~ line 75 ~ Homepage ~ heroPost", heroPost);
  const morePosts = allPosts.slice(1);
  // console.log("🚀 ~ file: index.tsx ~ line 77 ~ Homepage ~ morePosts", morePosts);
  const metaTags = blog.seo.concat(site.favicon);
  // console.log("🚀 ~ file: index.tsx ~ line 79 ~ Homepage ~ metaTags", metaTags);

  return (
    <>
      <BasicLayout>
        <Seo metaTagsDatoCMS={metaTags} />
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
