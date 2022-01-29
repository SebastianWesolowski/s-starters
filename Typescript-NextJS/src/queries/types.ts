export interface IHeaderMenus {
  headerMenus: TMenu[];
}

export type TMenu = {
  node: {
    id: string;
    icon?: JSX.Element;
    label: string;
    path: string;
    title: string | null;
    url: string;
    childItems?: { edges: TMenu[] };
    __typename: string;
  };
  __typename: string;
};
