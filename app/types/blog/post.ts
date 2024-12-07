export interface PostResponse {
    title: string;
    content: string;
    tags: {
        label: string;
        color: string;
    }[],
    create_time: string;
    last_edit_time: string;
    cover: string;
}