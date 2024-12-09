import { ArchiveItemPost } from '@/app/types/blog/archives';
import { fetchData } from '@/app/utils/fetch';
import { Feed } from 'feed';
import _ from 'lodash';

export async function GET() {
    const site_url = process.env.DOMAIN || "http://localhost:3000";

    const feedOptions = {
        title: "Hilary's Blog",
        link: site_url,
        description: 'This is the blog of Hilary Liu',
        id: `${site_url}/blog`,
        image: `${site_url}/logo.png`,
        favicon: `${site_url}/favicon.ico`,
        copyright: `All rights reserved ${new Date().getFullYear()} © Hilary Liu`,
        generator: 'Feed for Node.js',
        feedLinks: {
            rss2: `${site_url}/blog/rss.xml`,
        },
    };
    const feed = new Feed(feedOptions);

    const { data: archives = [] } = await fetchData<{ data: ArchiveItemPost[] }>("/api/bff/notion/archives", {
        method: "GET",
    })
    _.map(archives, (item) => {
        feed.addItem({
            title: item.title,
            id: `${site_url}/blog/post/${item.id}`,
            link: `${site_url}/blog/post/${item.id}`,
            date: new Date(item.last_edited_time),
            description: item.title,
            author: [{
                name: "Hilary Liu",
                email: "2788370451@qq.com",
            }]
        })
    })
    return new Response(feed.rss2(), {
        headers: {
            'Content-Type': 'text/xml',
        },
    })
}