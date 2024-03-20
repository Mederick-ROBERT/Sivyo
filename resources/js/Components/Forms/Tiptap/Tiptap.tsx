import './tiptap.scss'

import {StarterKit} from "@tiptap/starter-kit";
import {useEditor, EditorContent } from "@tiptap/react";
import ToolBar from "@/Components/Forms/Tiptap/ToolBar/ToolBar";

export default function Tiptap() {

    const editor = useEditor({
        extensions: [StarterKit],
        content: '<p>Hello World! 👋</p>',
        onUpdate({ editor }) {
            console.log(editor.getHTML())
        }
    })

    return (
        <>
            <ToolBar editor={editor}/>
            <EditorContent editor={editor}/>
        </>
    )
}
