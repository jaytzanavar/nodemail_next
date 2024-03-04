// import type { Metadata } from "next";




// export const metadata: Metadata = {
//     title: "Scaffold mail app",
//     description: "This is the base of a website",
// };

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return children
}