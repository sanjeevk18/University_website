'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';
import Chatbot from '../chat/Chatbot';

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // Hide header/footer for dashboard routes
  const isDashboard = pathname?.startsWith('/student-portal/dashboard') || 
                      pathname?.startsWith('/centers/dashboard');
  
  if (isDashboard) {
    return <>{children}</>;
  }
  
  return (
    <>
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}
