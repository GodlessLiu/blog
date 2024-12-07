import { Metadata } from "next";
import { Header } from "./components/Header";

export const metadata: Metadata = {
    title: "Hilary Liu - Blog",
    description: "Hilary Liu's Blog"
}

export default function BlogLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Header />
            {children}
        </>
    );
}