import React from "react";
import "./Footer.css";
import FooterColumn from "./component/FooterColunm";

function Footer() {
    const footerColumns = [
        {
            title: "Get to Know Us",
            links: [
                "Careers",
                "Blog",
                "About Amazon",
                "Sustainability",
                "Investor Relations",
                "Amazon Devices",
                "Amazon Tours",
            ],
        },
        {
            title: "Make Money with Us",
            links: [
                "Sell products on Amazon",
                "Sell apps on Amazon",
                "Become an Affiliate",
                "Advertise Your Products",
                "Self-Publish with Us",
                "Host an Amazon Hub",
                "› See More Make Money with Us",
            ],
        },
        {
            title: "Amazon Payment Products",
            links: [
                "Amazon Business Card",
                "Shop with Points",
                "Reload Your Balance",
                "Amazon Currency Converter",
            ],
        },
        {
            title: "Let Us Help You",
            links: [
                "Amazon and COVID-19",
                "Your Account",
                "Your Orders",
                "Shipping Rates & Policies",
                "Returns & Replacements",
                "Manage Your Content and Devices",
                "Amazon Assistant",
                "Help",
            ],
        },
    ];

    return (
        <div className="footer">
            <a href="#nav-top">
                <div className="footer__navToTop">
                    <span className="footer__navToTopText">Back to top</span>
                </div>
            </a>
            <div className="footer__container">
                {footerColumns.map((column) => (
                    <FooterColumn title={column.title} links={column.links} />
                ))}
            </div>
        </div>
    );
}

export default Footer;
