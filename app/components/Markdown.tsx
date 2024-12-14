"use client"
import { FC, useEffect } from "react"
import ReactMarkdown from "react-markdown"
import remarkHeadingId from "remark-heading-id"
import lightGallery from 'lightgallery';
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import tocbot from "tocbot";

export const Markdown: FC<{ content?: string, className?: string }> = ({ content = "", className = "" }) => {
    useEffect(() => {
        // init lightGallery
        lightGallery(document.querySelector('.markdown-body')!, {
            selector: "img",
        });
        tocbot.init({
            tocSelector: ".toc",
            contentSelector: '.toc-container',
            headingSelector: 'h1, h2, h3',
            headingsOffset: 100,
            extraListClasses: "pl-3",
            extraLinkClasses: "btn no-underline text-xs max-w-[200px] overflow-ellipsis overflow-hidden inline-block break-keep",
        })
        return () => {
            tocbot.destroy()
        }
    }, [content])
    if (!content) return <div>There is no content to display</div>
    return <div className={className}>
        <div className={`fixed top-72 left-4 xl:inline-block hidden`}>
            <p className="text-lg font-bold mb-1">目录</p>
            <div className="toc">

            </div>
        </div>
        <ReactMarkdown
            remarkPlugins={[[remarkHeadingId, { defaults: true }], [remarkGfm]]}
            rehypePlugins={[rehypeRaw]}
            className="toc-container px-8 py-4 max-w-none markdown markdown-body"
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
    </div>


}