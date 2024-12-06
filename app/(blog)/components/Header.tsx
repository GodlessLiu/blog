"use client"
import { Logo } from "@/app/components/Logo";
import { ToggleTheme } from "@/app/components/ToggleTheme";
import _ from "lodash";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

const blogNavs = [
    {
        name: 'Home',
        href: '/blog'
    },
    {
        name: 'Archives',
        href: '/blog/archives'
    }
]

export const Header: FC = () => {
    const pathname = usePathname()
    return <div className="flex flex-row justify-between items-center h-10 mt-2 gap-2 pr-4">
        <Logo />
        <div className="flex justify-center items-center gap-4">
            {
                _.map(blogNavs, (n) => (
                    <Link key={n.href} href={n.href} className={`btn ${pathname === n.href ? 'border-foreground' : ''}`}>
                        {n.name}
                    </Link>
                ))
            }
            <ToggleTheme />
        </div>
    </div>
}