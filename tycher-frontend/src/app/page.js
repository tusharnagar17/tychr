import Header from '@/components/Header';
import OurCoursesSection from '@/components/OurCoursesSection';
import QuickActionsSection from '@/components/QuickActionsSection';
import Sidebar from '@/components/Sidebar';

export default function Home() {
  return (
    <>
      <Header />
      <section className="flex h-[88vh] gap-10">
        {/* Collapsable Sidebar */}
        <Sidebar />
        <div>
          {/* Quick Actions */}
          <QuickActionsSection />
          {/* Our Courses */}
          <OurCoursesSection />
        </div>
      </section>
    </>
  );
}
