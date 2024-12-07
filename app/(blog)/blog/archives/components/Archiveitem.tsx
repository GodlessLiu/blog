import { ArchiveItemPost } from "@/app/types/blog/archives";
import Link from "next/link";
import { FC } from "react";
import { formateYYYYMMDD } from "@/app/utils/time";

const Archiveitem: FC<ArchiveItemPost> = ({ title = "", last_edited_time = "", id = "" }) => {
    return <div className="bg-gradient-to-r hover:opacity-70 mb-4 w-max transition-[background-size] duration-500 from-foreground cursor-pointer to-foreground bg-no-repeat bg-left-bottom bg-[length:0_2px] hover:bg-[length:100%_2px]">
        <Link href={`/blog/post/${id}`}>
            <div className="flex gap-4 items-end">
                <p>
                    {title}
                </p>
                <time className="text-xs">{formateYYYYMMDD(last_edited_time)}</time>
            </div>
        </Link>
    </div>
}

export default Archiveitem;