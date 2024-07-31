import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { headers } from 'next/headers';
import { getCurrentUser } from '@/services/userService';
import { redirect } from 'next/navigation';

export default async function MainLayout({ children }) {
  const headersList = headers();

  const cookies = headersList.get('Cookie');
  const token = cookies.split('token=')[1];

  if (!token) {
    // redirect('/login');
  }

  const user = await getData(token);

  if (!user?.username) {
    // redirect('/login');
  }
  return (
    <div className="h-full">
      <Header />
      <section className="flex h-full gap-10">
        {/* Collapsable Sidebar */}
        <Sidebar />
        {children}
      </section>
    </div>
  );
}

async function getData(token) {
  const res = await getCurrentUser(token);

  return res;
}
