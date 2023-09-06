import "./index.css";
import React from "react";

interface DividerProps {
    content: React.ReactNode;
    id?: string;
}

function Divider(props: DividerProps) {
    return (
        <div className="divider" id={props.id}>
            {props.content}
        </div>
    );
}

export default Divider;