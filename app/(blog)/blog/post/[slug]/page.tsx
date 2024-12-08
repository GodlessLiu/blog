import { PostResponse } from "@/app/types/blog/post";
import { fetchData } from "@/app/utils/fetch";
import { formateYYYYMMDD } from "@/app/utils/time";
import _ from "lodash";
import Image from "next/image";
import { FC } from "react";
import { CiClock1, CiEdit } from "react-icons/ci";
import "@/themes/styles/markdown.css"
import { Markdown } from "@/app/components/Markdown";

interface PostProps {
    params: {
        slug: Promise<string>
    }
}

const Post: FC<PostProps> = async ({ params }) => {
    const slug = (await params).slug;
    const data = (await fetchData(`/api/bff/notion/post/${slug}`, {
        method: "GET",
    })) as PostResponse
    if (!data) return <div>Post not found</div>

    return <div>
        {
            data.cover && <div className="h-52 relative">
                <div className="h-full w-full bg-[var(--background)] absolute top-0 left-0 z-50 opacity-30">
                </div>
                <Image src={data.cover} alt="cover" fill style={{
                    objectFit: "cover",
                }} />
            </div>
        }
        <article className="max-w-4xl mt-4 mx-auto pb-10">
            <p className="text-3xl font-bold mb-2">{data.title}</p>
            <div className="flex gap-2 items-center mb-8 flex-wrap">
                <CiClock1 />
                <span className="mr-4">
                    {formateYYYYMMDD(data.create_time)}
                </span>
                <CiEdit />
                <span className="mr-2">
                    {formateYYYYMMDD(data.last_edit_time)}
                </span>
                <span>
                    {_.map(data.tags, (tag) => <span className="py-2 mx-1 rounded-sm" key={tag.label} style={{ color: tag.color || "var(--foreground)" }}>#{tag.label}</span>)}
                </span>
            </div>
            <Markdown content={data.content} />
        </article>
    </div>
}

export default Post;