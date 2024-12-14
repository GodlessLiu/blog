/**
 * 为文章添加了cache，每半小时会刷新cache，不是实时的
 */
import { PostResponse } from "@/app/types/blog/post";
import { fetchData } from "@/app/utils/fetch";
import { formateYYYYMMDD } from "@/app/utils/time";
import _ from "lodash";
import Image from "next/image";
import { FC } from "react";
import { CiClock1, CiEdit } from "react-icons/ci";
import "@/themes/styles/markdown.css"
import { Markdown } from "@/app/components/Markdown";
import { Metadata } from "next";
import { getBlockInfo } from "@/app/api/bff/notion/post/[id]/route";
import Back from "@/app/components/Back";
import PageNotFound from "@/app/templates/post-not-found";

interface PostProps {
    params: {
        slug: Promise<string>
    }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const slug = (await params).slug;
    const info = await getBlockInfo(slug)
    if (!info) {
        return {
            title: "Post not found",
            authors: [{ name: "Hilary Liu", url: "https://github.com/GodlessLiu" }]
        }
    }
    return {
        // @ts-expect-error none
        title: (info.properties.title.title[0].plain_text || "Post").concat(" - Hilary Liu's Blog"),
        authors: [{ name: "Hilary Liu", url: "https://github.com/GodlessLiu" }]
    }
}

const Post: FC<PostProps> = async ({ params }) => {
    const slug = (await params).slug;
    const { data: post } = (await fetchData<{ data: PostResponse }>(`/api/bff/notion/post/${slug}`, {
        method: "GET",
        next: { tags: ["post"], revalidate: 1800 }
    }))
    if (!post) return <PageNotFound />

    return <div>
        {
            post.cover && <div className="h-52 relative">
                <div className="h-full w-full bg-[var(--background)] absolute top-0 left-0 z-50 opacity-30">
                </div>
                <Image src={post.cover} alt="cover" fill style={{
                    objectFit: "cover",
                }} />
            </div>
        }
        <article className="max-w-4xl mt-4 mx-auto pb-10">
            <p className="text-3xl font-bold mb-2">{post.title}</p>
            <div className="flex gap-2 items-center mb-8 flex-wrap">
                <CiClock1 />
                <span className="mr-4">
                    {formateYYYYMMDD(post.create_time)}
                </span>
                <CiEdit />
                <span className="mr-2">
                    {formateYYYYMMDD(post.last_edit_time)}
                </span>
                <span>
                    {_.map(post.tags, (tag) => <span className="py-2 mx-1 rounded-sm" key={tag.label} style={{ color: tag.color || "var(--foreground)" }}>#&nbsp;{tag.label}</span>)}
                </span>
            </div>
            <Markdown content={post.content} className="mb-4" />
            <Back className="pl-6" />
        </article>
    </div>
}

export default Post;