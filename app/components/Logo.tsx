import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

export const Logo: FC = () => {
    return <Link href={`/`}>
        <Image src={`/logo.png`} height={56} width={70} alt="Hilary Liu's logo" title="Hilary Liu" />
    </Link>
}