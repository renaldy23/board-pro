import { DashboardPage } from '@/components/dashboard/components/dashboard.page';
import { supabaseClient } from '@/utils/supabase';
import { auth } from '@clerk/nextjs';
import React from 'react';

async function getData(token: string, userId: string) {
  const supabase = await supabaseClient(token);
  const { data: projects } = await supabase.from('projects').select('*').eq('user_id', userId);
  return projects;
}

export default async function Page() {
  const { getToken, userId } = auth();
  const token = await getToken({ template: 'supabase-board-pro' });
  const data = await getData(token as string, userId as string);

  return <DashboardPage projects={data} />;
}
