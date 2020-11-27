import React from "react";
import "./FooterColumn.css";

function FooterColunm({ title, links }) {
    return (
        <div className="footerColumn">
            <h3 className="footerColumn__title">{title}</h3>
            <ul>
                {links.map((link) => (
                    <li>
                        <a href="#">{link}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FooterColunm;
