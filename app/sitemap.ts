import type { MetadataRoute } from "next";
import { fetchData } from "./utils/fetch";
import { ArchiveItemPost } from "./types/blog/archives";
import _ from "lodash";

export const dynamic = "force-dynamic";
export default async  function sitemap(): Promise<MetadataRoute.Sitemap> {
    const {data:archives} = await fetchData("/api/bff/notion/archives",{method:"GET"}) as {data:ArchiveItemPost[]}
    if(!archives) return []
    return _.map(archives,(d)=>{
        return {
            url:process.env.DOMAIN + `/blog/post/${d.id}`,
            lastModified: d.last_edited_time,
            changeFrequency: "daily",
            priority: 0.7
        }
    })
}