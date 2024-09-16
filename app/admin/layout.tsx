import Sidebar from "@/components/admin/Sidebar";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import Topbar from "@/components/admin/Topbar";

const poppins = Poppins({
    subsets: ['latin'],
    variable: '--font-poppins',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
    title: "Admin | UKM Sarang Semut",
    description: "unit Kegiatan Mahasiswa Sarang Semut berasal dari Universitas Tanjungpura Pontianak.",
};
export default function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    
    return (
        <html lang="en">
            <link rel="shortcut icon" href="/icon-sarang-semut.ico" type="image/x-icon" />
            <body className={`${poppins.variable} font-poppins overflow-x-hidden overscroll-none bg-white`}>
                <Topbar />
                <Sidebar />
                
                <div className="main-content">
                    <div className="p-3">
                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
}