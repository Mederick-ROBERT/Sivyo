import type { Editor } from "@tiptap/react";

interface Props {
    editor: Editor | null;
}

export default function ToolBar({ editor }: Props) {
    if (!editor) return null;

    return (
        <div className="toolbar">
            <button onClick={() => editor.chain().focus().toggleBold().run()}><b>B</b></button>
            <button onClick={() => editor.chain().focus().toggleItalic().run()}><i>I</i></button>
            {/*<button onClick={() => editor.chain().focus().toggleStrike().run()}><strike>S</strike></button>*/}
            {/*<button onClick={() => editor.chain().focus().toggleCode().run()}>Code</button>*/}
            {/*<button onClick={() => editor.chain().focus().toggleBulletList().run()}>UL</button>*/}
            {/*<button onClick={() => editor.chain().focus().toggleOrderedList().run()}>OL</button>*/}
            {/*<button onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}>H1</button>*/}
            {/*<button onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>H2</button>*/}
            {/*<button onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}>H3</button>*/}
            {/*<button onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}>H4</button>*/}
            {/*<button onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}>H5</button>*/}
            {/*<button onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}>H6</button>*/}
        </div>
    )
}
