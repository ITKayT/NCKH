'use client';

import { Inter } from 'next/font/google';
import './styles/layout.css';
import AppHeader from './../components/Header';
import { usePathname } from 'next/navigation';
import AppFooter from "./../components/Footer";
import SidebarFormLayout from './../components/Sidebar';

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
    { label: 'Home', path: '/students' },
    { label: 'Thông tin tài khoản', path: '/students/userprofile' },
    { label: 'Đăng xuất', path: '/students/logout' },
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
