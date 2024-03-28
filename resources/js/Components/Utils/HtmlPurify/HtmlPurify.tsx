import DOMPurify from 'dompurify'

interface HtmlPurifyProps {
    content: string
    className?: string
}

export default function HtmlPurify({ content, className }: HtmlPurifyProps) {
    return (
        <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }} className={className} />
    )
}
