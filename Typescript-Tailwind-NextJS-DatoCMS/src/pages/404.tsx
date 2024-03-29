import { RiAlarmWarningFill } from "react-icons/ri";

import { Seo } from "@/components";

import { BasicLayout } from "@/layout";

export default function NotFoundPage() {
  return (
    <BasicLayout>
      <Seo templateTitle='Not Found' />

      <main>
        <section className='bg-white'>
          <div className='flex min-h-screen flex-col items-center justify-center text-center text-black'>
            <RiAlarmWarningFill size={60} className='animate-flicker text-red-500' />
            <h1 className='mt-8 text-4xl md:text-6xl'>Page Not Found</h1>
            {/* <ArrowLink className='mt-4 md:text-lg' href='/'> */}
            Back to Home
            {/* </ArrowLink> */}
          </div>
        </section>
      </main>
    </BasicLayout>
  );
}
