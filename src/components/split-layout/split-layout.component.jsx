import React from 'react';
import "./split-layout.styles.css";

export const SplitLayout = (props) => {
    return(
        <div className="split">
            <div className="split-left">
                {props.left}
            </div>
            <div className="split-right">
                {props.right}
            </div>
        </div>
    );
}