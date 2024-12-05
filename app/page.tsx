import Link from "next/link";
import { FC } from "react";

const Home: FC = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-background text-foreground gap-8">
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