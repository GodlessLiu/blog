import { Metadata } from "next";
import Link from "next/link";
import { FC } from "react";
import { FaGolang } from "react-icons/fa6";
import { RiGithubLine, RiNextjsLine, RiReactjsLine, RiVuejsLine } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";

export const metadata: Metadata = {
    title: "首页 - Hilary Liu's Blog",
    description: "Blog page"
}

const Blog: FC = () => {
    return <div className="max-w-3xl mx-auto mt-24 leading-8">
        <p>
            你好👏👏👏! <br />
        </p>
        <div>
            这是Hialry Liu的博客，我将在这里分享我的想法和经验。目前，我主要分享一些关于前端开发的内容，包括但不限于<RiReactjsLine color="rgb(88,196,220)" />React、<SiTypescript color="#3178c6" />TypeScript、<RiVuejsLine color="#42b883" />Vue、<RiNextjsLine />Nextjs等。同时，我也会分享一些<FaGolang color="#00ADD8" />Go语言相关的技术。欢迎和我一起学习进步🎉🎉🎉,
            你可以 <em className="text-red-500">follow</em> 我的<Link href="https://github.com/GodlessLiu" className="btn" target="_blank"><RiGithubLine />Github</Link>。
        </div>
    </div>
}

export default Blog;