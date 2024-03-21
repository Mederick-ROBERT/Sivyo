import {StarterKit} from "@tiptap/starter-kit";
import {useEditor, EditorContent } from "@tiptap/react";
import ToolBar from "@/Components/Forms/Tiptap/ToolBar/ToolBar";

import './tiptap.scss'

interface Props {
    content: string;
    onUpdate: (content: string) => void;
}

export default function Tiptap({ content, onUpdate }: Props) {

    const editor = useEditor({
        extensions: [StarterKit.configure()],
        content: content,
        onUpdate({ editor }) {
            onUpdate(editor.getHTML())
        },
        editorProps: {
            attributes: {
                style: 'border: 1px solid #e2e8f0; padding: 10px; border-radius: 5px;'
            }
        }
    })

    return (
        <>
            <p>Content</p>
            <ToolBar editor={editor}/>
            <EditorContent editor={editor} className="editor_container"/>
        </>
    )
}
