import { Logo } from "@/app/components/Logo";
import { ToggleTheme } from "@/app/components/ToggleTheme";
import { FC } from "react";

export const Header: FC = () => {
    return <div className="flex flex-row justify-between items-center h-10 mt-2 gap-2 pr-4">
        <Logo />
        <div>
            <ToggleTheme />
        </div>
    </div>
}