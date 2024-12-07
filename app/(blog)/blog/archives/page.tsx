import { ArchiveItemPost } from "@/app/types/blog/archives";
import _ from "lodash";
import { FC } from "react";
import Archiveitem from "./components/Archiveitem";
import { fetchData } from "@/app/utils/fetch";

export const dynamic = "force-dynamic";

const Articles: FC = async () => {
    const { data: archives = [] } = await fetchData<{ data: ArchiveItemPost[] }>("/api/bff/notion/archives", {
        method: "GET"
    })
    if (!archives) {
        return <div>loading...</div>
    }
    return <div className="pt-20">
        {
            _.map(archives, a => (
                <Archiveitem title={a.title} last_edited_time={a.last_edited_time} key={a.id} id={a.id} />
            ))
        }
    </div>
}

export default Articles;