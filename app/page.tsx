import Link from "next/link";
import { FC } from "react";
import { ToggleTheme } from "./components/ToggleTheme";
import { BsGithub } from "react-icons/bs";

const Home: FC = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-background text-foreground gap-8 relative">
      <div className="flex justify-end items-center h-14 fixed z-50 px-4 gap-4 w-full top-0">
        <Link href={`https://github.com/GodlessLiu`} target="_blank" title="Github">
          <BsGithub />
        </Link>
        <ToggleTheme />
      </div>
      <Link href={"/blog"} className="btn">
        Blog
      </Link>
      <Link href={"/resume"} className="btn">
        Resume
      </Link>
    </div>
  );
}

export default Home