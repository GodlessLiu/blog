import { NotionToMarkdown } from "notion-to-md";
import { notion } from "@/app/api/bff/notion/archives/route"
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import _ from "lodash";


export const getBlockInfo = async (id: string) => {
    try {
        const info = (await notion.pages.retrieve({ page_id: id })) as PageObjectResponse
        return info
    } catch (e) {
        console.log(e);
        return
    }
}

const n2m = new NotionToMarkdown({ notionClient: notion });

// 获取对应block的md文件
export async function GET(request: Request,
    { params }: { params: Promise<{ id: string }> }) {
    try {
        const id = (await params).id
        const info = await getBlockInfo(id)
        if (!info) {
            return Response.json({
                errorMsg: "not found"
            })
        }
        const mdblocks = await n2m.pageToMarkdown(id);
        const mdString = n2m.toMarkdownString(mdblocks);
        return Response.json({
            data: {
                // TODO: only return the parent content
                // @ts-expect-error none
                title: info.properties.title.title[0].plain_text,
                create_time: info.created_time,
                last_edit_time: info.last_edited_time,
                cover: info.cover?.type === "external" ? info.cover.external.url : info.cover?.type === "file" ? info.cover.file.url : null,
                tags: info.properties.tags.type === "multi_select" ? _.map(info.properties.tags.multi_select, (item) => ({
                    label: item.name,
                    color: item.color
                })) : [],
                content: mdString.parent,
            }
        })
    } catch (e) {
        console.log(e);
        return Response.json({
            errorMsg: e
        })
    }
}