import type { Editor } from "@tiptap/react";
import { Bold, Italic, Heading } from "lucide-react";

import './toolbar.scss'
import ToolBarToogle from "@/Components/Forms/Tiptap/ToolBar/ToolBarToogle/ToolBarToogle";

interface Props {
    editor: Editor | null;
}

export default function ToolBar({ editor }: Props) {
    if (!editor) return null;

    return (
        <div className="toolbar">
            <ToolBarToogle onClick={() => editor.chain().focus().toggleBold().run()} children={<Bold size={20} />} isActive={editor.isActive('bold')} />
            <ToolBarToogle onClick={() => editor.chain().focus().toggleItalic().run()} children={<Italic size={20} />} isActive={editor.isActive('italic')} />
            <ToolBarToogle onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} children={<Heading size={20} />} isActive={editor.isActive('heading')} />

            {/*<button onClick={() => editor.chain().focus().toggleBulletList().run()}>UL</button>*/}
        </div>
    )
}
