import Header from '@/components/Header';
import OurCoursesSection from '@/components/OurCoursesSection';
import QuickActionsSection from '@/components/QuickActionsSection';
import Sidebar from '@/components/Sidebar';
import { api_url, getCurrentUser } from '@/services/userService';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function HomePage() {
  return (
    <>
      <div>
        {/* Quick Actions */}
        <QuickActionsSection />
        {/* Our Courses */}
        <OurCoursesSection />
      </div>
    </>
  );
}
