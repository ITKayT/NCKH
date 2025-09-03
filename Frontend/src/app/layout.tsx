'use client';

import { Inter } from 'next/font/google';
import './globals.css';
import AppHeader from './../app/component/Header';
import { usePathname } from 'next/navigation';
import AppFooter from "./../app/component/Footer";
import SidebarFormLayout from './component/Sidebar';

const inter = Inter({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  // Nếu bạn muốn Sidebar có danh sách động, truyền props vào đây
  const sidebarItems = [
    { label: 'Home', path: '/Student/Home' },
    { label: 'Thông tin tài khoản', path: '/Student/UserProfile' },
    { label: 'Đăng xuất', path: '/Student/LogOut' },
  ];

  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Header trên cùng, ẩn ở trang Home nếu muốn */}
       {pathname !== '/' && <AppHeader>{null}</AppHeader>}
        <div className="main-layout">
          {/* Sidebar bên trái */}
          <SidebarFormLayout sidebarItems={sidebarItems} />

          {/* Nội dung chính */}
          <div className="page-content">
            {children}
          </div>
        </div>

        {/* Footer dưới */}
        <AppFooter />
      </body>
    </html>
  );
}
