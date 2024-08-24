import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import Topbar from "@/components/Topbar";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
    title: "UKM Sarang Semut",
    description: "unit Kegiatan Mahasiswa Sarang Semut berasal dari Universitas Tanjungpura Pontianak.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <link rel="shortcut icon" href="/icon-sarang-semut.ico" type="image/x-icon" />
            <body className={`${poppins.variable} font-poppins`}>
                {/* <Topbar /> */}
                <Navbar />
                <div className="min-h-screen">
                    {children}
                </div>
                <Footer />
            </body>
        </html>
    );
}
