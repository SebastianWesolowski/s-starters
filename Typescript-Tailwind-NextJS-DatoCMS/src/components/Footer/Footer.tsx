import Link from "next/link";
import { FC } from "react";

import { Container } from "@/components/Container";

import MinimalLogo from "@/assets/svg/MinimalLogo";
import config from "@/config/config";

import { IFooterProps } from "./types";

export const Footer: FC<IFooterProps> = (): JSX.Element => (
  <footer className='bg-slate-50'>
    <Container>
      <div className='py-16'>
        <MinimalLogo className='mx-auto h-10 w-auto' />
        <nav className='mt-10 text-sm' aria-label='quick links'>
          <ul className='-my-1 flex justify-center space-x-6'>
            <li>
              <Link href='#features'>
                <a className='rounded-lg px-2 py-1 text-slate-700 hover:bg-slate-100 hover:text-slate-900'>Features</a>
              </Link>
            </li>
            <li>
              <Link href='#testimonials'>
                <a className='rounded-lg px-2 py-1 text-slate-700 hover:bg-slate-100 hover:text-slate-900'>
                  Testimonials
                </a>
              </Link>
            </li>
            <li>
              <Link href='#pricing'>
                <a className='rounded-lg px-2 py-1 text-slate-700 hover:bg-slate-100 hover:text-slate-900'>Pricing</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className='flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between'>
        <div className='flex space-x-6'>
          {config.socialMedia.map((social) => (
            <Link href={social.url} key={social.name}>
              <a className='group'>
                <span className='sr-only'>{social.name}</span>
                <div
                  aria-hidden='true'
                  className='h-6 w-6 fill-slate-500 text-slate-500 group-hover:fill-slate-700 group-hover:text-slate-700'
                >
                  {social.icon.large}
                </div>
              </a>
            </Link>
          ))}
        </div>
        <p className='mt-6 text-sm text-slate-500 sm:mt-0'>
          Copyright &copy; {new Date().getFullYear()} TaxPal. All rights reserved.
        </p>
      </div>
    </Container>
  </footer>
);
