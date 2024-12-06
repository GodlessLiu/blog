import { DatabaseObjectResponse, QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";
import { ArchiveItemPost } from "../types/blog/archives";
import _ from "lodash";

export function queryDataBase2ArchiveItems(result: QueryDatabaseResponse["results"]): ArchiveItemPost[] {
    return _.map(result as DatabaseObjectResponse[], item => ({
        id: item.id,
        // @ts-ignore
        title: item.properties.title.title[0].plain_text,
        cover: item.cover?.type === "external" ? item.cover.external.url : "",
        last_edited_time: item.last_edited_time,
    }))
}