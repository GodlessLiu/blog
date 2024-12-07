"use client"
import { FC, useEffect } from "react"
import ReactMarkdown from "react-markdown"
import lightGallery from 'lightgallery';
// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

export const Markdown: FC<{ content?: string }> = ({ content = "" }) => {
    useEffect(() => {
        lightGallery(document.querySelector('.markdown-body')!, {
            selector: "img",
        });

    })
    if (!content) return <div>There is no content to display</div>
    return <ReactMarkdown
        className="markdown-body"
        components={{
            img: ({ node, ...props }) => {
                if (!node) return
                return (
                    <img
                        style={{ cursor: "pointer" }}
                        {...props}
                        alt={props.alt || ""}
                    />
                )
            }
        }
        }
    >
        {content}
    </ReactMarkdown>


}