"use client"
import { useLocalStorageState } from "ahooks";
import { MouseEvent, useEffect } from "react";

export const ToggleTheme = () => {

    const [theme, setTheme] = useLocalStorageState("hl-theme", { defaultValue: "dark",
        serializer(value){
            if(typeof value === "string") return value
            return JSON.stringify(value)
        },
        deserializer(value) {
            return value
        },
     });

    // Credit to [@antfu](https://github.com/antfu)
    const toggleTheme = (event: MouseEvent<HTMLButtonElement>) => {
        const isDark = theme === "dark";
        // @ts-expect-error experimental API
        const isAppearanceTransition = document.startViewTransition
            && !window.matchMedia('(prefers-reduced-motion: reduce)').matches

        if (!isAppearanceTransition) {
            setTheme(
                isDark ? "light" : "dark"
            )
            return
        }

        const x = event.clientX
        const y = event.clientY
        const endRadius = Math.hypot(
            Math.max(x, innerWidth - x),
            Math.max(y, innerHeight - y),
        )
        // @ts-expect-error: Transition API
        const transition = document.startViewTransition(async () => {
            setTheme(
                isDark ? "light" : "dark"
            )
        })
        transition.ready
            .then(() => {
                document.documentElement.animate(
                    {
                        clipPath: [
                            `circle(0px at ${x}px ${y}px)`,
                            `circle(${endRadius}px at ${x}px ${y}px)`,
                        ],
                    },
                    {
                        duration: 400,
                        easing: 'ease-out',
                        pseudoElement: '::view-transition-new(root)',
                    },
                )
            })
    };

    useEffect(() => {
        theme === "dark" ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark");
    }, [theme])

    return <button onClick={toggleTheme} className="leading-3">
        <span className="i-moon dark:i-sun">
        </span>
    </button>
}