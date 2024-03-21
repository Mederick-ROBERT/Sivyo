import React from "react";

import './toolbar_toogle.scss'

interface ToogleProps {
    children: React.ReactNode;
    onClick: () => void;
    isActive?: boolean;
}

export default function ToolBarToogle({ children, onClick, isActive }: ToogleProps) {

    return (
        <button type="button" onClick={() => {onClick()} } className={ isActive ? "toogle_container_active" : undefined }>
            {children}
        </button>
    )
}
