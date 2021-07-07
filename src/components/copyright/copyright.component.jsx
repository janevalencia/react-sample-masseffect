import React from "react"
import "./copyright.styles.css";

export const Copyright = props => (
    <p>&copy; {new Date().getFullYear()} {props.title}</p>
);