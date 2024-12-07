import { PostResponse } from "@/app/types/blog/post";
import { fetchData } from "@/app/utils/fetch";
import { formateYYYYMMDD } from "@/app/utils/time";
import _ from "lodash";
import Image from "next/image";
import { FC } from "react";
import { CiClock1, CiEdit } from "react-icons/ci";
import Markdown from "react-markdown"
import "@/themes/styles/markdown.css"

interface PostProps {
    params: {
        slug: Promise<string>
    }
}

const Post: FC<PostProps> = async ({ params }) => {
    const slug = (await params).slug;
    const data = (await fetchData(`/api/bff/notion/post/${slug}`, {
        method: "GET",
        cache: "force-cache"
    })) as PostResponse
    if (!data) return <div>Post not found</div>

    return <div>
        {
            data.cover && <Image src={data.cover} alt="cover" width={800} height={400} />
        }
        <p className="text-3xl font-bold mb-2">{data.title}</p>
        <div className="flex gap-2 items-center mb-4">
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
        <Markdown className="markdown-body">{data.content}</Markdown>
    </div>
}

export default Post;