import { Logo } from "@/app/components/Logo";
import { ToggleTheme } from "@/app/components/ToggleTheme";
import Link from "next/link";
import { FC } from "react";

export const Header: FC = () => {
    return <div className="flex flex-row justify-between items-center h-10 mt-2 gap-2 pr-4">
        <Logo />
        <div className="flex justify-center items-center gap-4">
            <Link href={`/blog`} className="btn">
                Home
            </Link>
            <Link href={`/blog/archives`} className="btn">
                Archives
            </Link>
            <ToggleTheme />
        </div>
    </div>
}