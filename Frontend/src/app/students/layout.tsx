'use client';

import './styles/layout.css';
import AppHeader from './../components/Header';
import { usePathname } from 'next/navigation';
import AppFooter from "./../components/Footer";
import SidebarFormLayout from './../components/Sidebar';

export default function StudentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const sidebarItems = [
    { label: 'Tin tức - Thông báo', path: '/students' },
    { label: 'Thông tin tài khoản', path: '/students/userprofile' },
    { label: 'Đăng xuất', path: '/students/logout' },
  ];

  return (
    <>
      {/* Header */}
      {pathname !== '/' && <AppHeader>{null}</AppHeader>}

      <div className="main-layout">
        <SidebarFormLayout sidebarItems={sidebarItems} />
        <div className="page-content">{children}</div>
      </div>

      <AppFooter />
    </>
  );
}
