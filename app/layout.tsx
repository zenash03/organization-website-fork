import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
    subsets: ['latin'],
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
            <body>
                { children }
            </body>
        </html>
    );
}
