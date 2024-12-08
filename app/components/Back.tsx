"use client"
import { useRouter } from "next/navigation";
import { FC } from "react";

const Back: FC<{ className?: string }> = ({ className = "" }) => {
    const router = useRouter()
    return <p className={className}>
        <button onClick={() => router.back()} className="btn">cd ..</button>
    </p>
}

export default Back;