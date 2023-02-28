import AppLayout from '@/components/common/AppLayout';
import {ReactNode} from 'react';
import StaticLayout from '@/components/common/StaticLayout';

export const withAppLayout = (page: ReactNode): ReactNode => (
  <AppLayout>
    {page}
  </AppLayout>
);

export const withStaticLayout = (page: ReactNode): ReactNode => (
  <StaticLayout>
    {page}
  </StaticLayout>
)