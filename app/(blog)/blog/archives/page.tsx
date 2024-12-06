import { ArchiveItemPost } from "@/app/types/blog/archives";
import _ from "lodash";
import { FC } from "react";
import Archiveitem from "./components/Archiveitem";

const Articles: FC = async () => {
    const data = await fetch("http://localhost:3000/api/bff/notion", {
        method: "GET"
    })
    const { data: archives } = (await data.json()) as { data: ArchiveItemPost[] };
    return <div className="pt-20">
        {
            _.map(archives, a => (
                <Archiveitem title={a.title} last_edited_time={a.last_edited_time} key={a.id} id={a.id} />
            ))
        }
    </div>
}

export default Articles;