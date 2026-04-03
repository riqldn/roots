// app/components/RichText.tsx
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import type { Document } from '@contentful/rich-text-types'

const options = {
    renderMark: {
        [MARKS.BOLD]: (text: React.ReactNode) => (
            <strong className="text-white font-semibold">{text}</strong>
        ),
        [MARKS.ITALIC]: (text: React.ReactNode) => (
            <em className="text-white/80 italic">{text}</em>
        ),
    },
    renderNode: {
        [BLOCKS.PARAGRAPH]: (_node: any, children: React.ReactNode) => (
            <p className="leading-relaxed mb-4 last:mb-0 text-white/70">{children}</p>
        ),
        [BLOCKS.HEADING_2]: (_node: any, children: React.ReactNode) => (
            <h2 className="text-white font-semibold text-base mt-6 mb-2">{children}</h2>
        ),
        [BLOCKS.HEADING_3]: (_node: any, children: React.ReactNode) => (
            <h3 className="text-white font-semibold text-sm mt-4 mb-2">{children}</h3>
        ),
        [BLOCKS.UL_LIST]: (_node: any, children: React.ReactNode) => (
            <ul className="list-disc list-inside mb-4 text-white/70 space-y-1">{children}</ul>
        ),
    },
}

export default function RichText({ content }: { content: Document }) {
    if (!content) return null
    return (
        <div>{documentToReactComponents(content, options)}</div>
    )
}