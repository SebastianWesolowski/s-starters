import { TMenu } from 'queries/types';
import { ReactNode } from 'react';

export interface IProps {
  menu: TMenu[];
  meta: ReactNode;
  children: ReactNode;
}
