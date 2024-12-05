import Link from "next/link";
import { FC } from "react";

export const Logo: FC = () => {
    return <Link href={`/`}>
        <img src="/logo.png" className="h-14" alt="Hilary Liu's logo" title="Hilary Liu" />
    </Link>
}