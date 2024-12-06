import { ArchiveItemPost } from "@/app/types/blog/archives";
import _ from "lodash";
import { FC } from "react";

const Articles: FC = async () => {
    const data = await fetch("http://localhost:3000/api/bff/notion", {
        method: "GET"
    })
    const { data: archives } = (await data.json()) as { data: ArchiveItemPost[] };
    return <div>
        archives
        {
            _.map(archives, a => (
                <div key={a.id}>
                    <h1>{a.title}</h1>
                    <p>{a.last_edited_time}</p>
                </div>
            ))
        }
    </div>
}

export default Articles;