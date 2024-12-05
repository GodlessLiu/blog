"use client"
import { FC } from "react";
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';


export const LoadingBar: FC = () => {
    return <ProgressBar
        height="4px"
        color="var(--foreground)"
        options={{ showSpinner: false }}
        shallowRouting
    />
}