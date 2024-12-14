import { queryDataBase2ArchiveItems } from "@/app/utils/formatter"
import { Client } from "@notionhq/client"

// export const revalidate = 60

export const notion = new Client({
    auth: process.env.NOTION_API_TOKEN
})

// 获取所有文章 TODO: 分页[加载更多]
export async function GET() {
    try {
        const data = (await notion.databases.query({
            database_id: process.env.PAGE_ID!,
            sorts: [
                {
                    "timestamp": "created_time",
                    "direction": "descending"
                }
            ]
        }))
        return Response.json({
            data: queryDataBase2ArchiveItems(data.results)
        })
    } catch (e) {
        console.log(e)
        return Response.json({
            errorMsg: e
        })
    }
}