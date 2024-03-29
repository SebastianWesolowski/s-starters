/* eslint-disable tailwindcss/classnames-order */
import Link from "next/link";
import { FC } from "react";

// eslint-disable-next-line import/order
import { ButtonLink } from "@/components/Button/ButtonLink/ButtonLink";
import { Container } from "@/components/Container";

import MinimalLogo from "@/assets/svg/MinimalLogo";

import { MobileNavigation } from "./MobileNavigation";

export const Header: FC = (): JSX.Element => (
  <header className='py-10'>
    <Container>
      <nav className='relative z-50 text-sm'>
        <ul className='flex items-center'>
          <li>
            <Link href='#'>
              <a>
                <span className='sr-only'>Home</span>
                <MinimalLogo className='h-10 w-auto' />
              </a>
            </Link>
          </li>
          <li className='ml-12 hidden md:block'>
            <Link href='#features'>
              <a className='rounded-lg py-1 px-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900'>Features</a>
            </Link>
          </li>
          <li className='ml-6 hidden md:block'>
            <Link href='#testimonials'>
              <a className='rounded-lg py-1 px-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900'>
                Testimonials
              </a>
            </Link>
          </li>
          <li className='ml-6 hidden md:block'>
            <Link href='#pricing'>
              <a className='rounded-lg py-1 px-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900'>Pricing</a>
            </Link>
          </li>
          <li className='ml-auto hidden md:block'>
            <Link href='/login'>
              <a className='rounded-lg py-1 px-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900'>Sign in</a>
            </Link>
          </li>
          <li className='ml-auto md:ml-8'>
            <ButtonLink href='/register' color='yellow'>
              <span>
                Get started<span className='hidden lg:inline'> today</span>
              </span>
            </ButtonLink>
          </li>
          <li className='ml-5 -mr-1 md:hidden'>
            <MobileNavigation />
          </li>
        </ul>
      </nav>
    </Container>
  </header>
);
