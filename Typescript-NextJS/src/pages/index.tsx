import { FC } from 'react';

import client from 'apollo/client';
import PageLayout from 'templates/PageLayout/PageLayout';

import { GET_MENUS } from '../queries/getMenu';
import { IIndexProps } from '../types/types';
import SSRPage from './ssrpage';

const Index: FC<IIndexProps> = ({ menus }): JSX.Element => {
  return (
    <PageLayout menu={menus.headerMenus} meta={<>x</>}>
      <SSRPage />
      Lorem ipsum dolor sit amet.
    </PageLayout>
  );
};

export async function getStaticProps(): Promise<{ props: IIndexProps }> {
  const {
    data: {
      headerMenus: { edges },
    },
  } = await client.query({
    query: GET_MENUS,
  });

  return {
    props: {
      menus: {
        headerMenus: edges,
      },
    },
  };
}

export default Index;
