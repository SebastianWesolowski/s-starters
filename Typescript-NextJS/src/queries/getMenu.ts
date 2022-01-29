import { gql } from '@apollo/client';

import MenuFragment from './fragments/menus';

export const HeaderFooter = `
  headerMenus: menuItems(where: {location: HCMS_MENU_HEADER, parentId: "0"}) {
    edges {
      node {
        ...MenuFragment
        childItems {
          edges {
            node {
              ...MenuFragment
            }
          }
        }
      }
    }
  }
`;

export const GET_MENUS = gql`
query GET_MENUS {
  ${HeaderFooter}
}
  ${MenuFragment}
`;
