import React from "react";
import "./social-links.styles.css";

export const SocialLinks = props => (
    <ul className="social-links">
        {props.accounts.map(
            (account, index) => (
                <li key={index + 1}>
                    <a href={account.link} className="link" target="_blank" rel="noreferrer">
                        <span className={account.icon}></span>
                    </a>
                </li>
            )
        )}
    </ul>
);