import { Seo } from "@molecules";
import { BasicLayout } from "@organisms";
import classNames from "classnames";
import { useContext } from "react";

import { StyleContext } from "@/context/contextType/StyleContext";

import s from "./wesolowski.module.scss";
import u from "@/styles/utils.module.scss";

const Wesolowski = (): JSX.Element => {
  const classContainer = classNames([u.basicBorder, s.background]);
  const { space } = useContext(StyleContext);

  return (
    <BasicLayout>
      <Seo title='Wesolowski' />
      <main>
        <h1 className='text-2xl font-bold'>Wesolowski</h1>
        <div className='container mx-auto my-2 sm:my-4' style={{ paddingBottom: `${space}px` }}>
          <div className='relative mx-auto flex max-w-3xl flex-col items-center text-center text-black'>
            <h2 id='social-impact-heading' className='text-3xl font-extrabold tracking-tight sm:text-4xl'>
              <span className='block sm:inline'>Title</span>
            </h2>
            <p className='mt-3 text-xl'>Text</p>
            <div className={classContainer}>
              <p className='mt-3 text-xl'>Text</p>
            </div>
          </div>
        </div>
      </main>
    </BasicLayout>
  );
};

export default Wesolowski;
