import { Seo } from "@molecules";
import { BasicLayout } from "@organisms";
import { useContext } from "react";

import { StyleContext } from "@/context/contextType/StyleContext";

const Homepage = (): JSX.Element => {
  const { space } = useContext(StyleContext);

  return (
    <BasicLayout>
      <Seo />
      <main>
        <div className='container mx-auto my-2 sm:my-4' style={{ paddingBottom: `${space}px` }}>
          <div className='relative mx-auto flex max-w-3xl flex-col items-center text-center text-black'>
            <h2 id='social-impact-heading' className='text-3xl font-extrabold tracking-tight sm:text-4xl'>
              <span className='block sm:inline'>Title</span>
            </h2>
            <p className='mt-3 text-xl'>Text</p>
          </div>
        </div>
      </main>
    </BasicLayout>
  );
};

export default Homepage;
