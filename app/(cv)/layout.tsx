import { Metadata } from "next";

export const metadata: Metadata = {
    title: "简历 - Hilary Liu's Resume",
    description: "Hilary Liu's Resume"
}

export default function BlogLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <div className="h-screen">
                {children}
            </div>
        </>
    );
}