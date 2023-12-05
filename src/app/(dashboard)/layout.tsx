import { DashboardLayout } from '@/components/dashboard/layouts/dashboard.layout';
import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
