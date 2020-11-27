import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    };

    return (
        <div className="header">
            {/* Amazon Logo */}
            <Link to="/">
                <div className="header__logoContainer">
                    <img
                        className="header__logo"
                        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                        alt="Amazon Logo"
                    />
                </div>
            </Link>

            {/* Middle Search Bar */}
            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon" />
            </div>

            {/* Header Navbar On the right */}
            <div className="header__nav">
                <Link to={!user && "/login"}>
                    <div
                        className="header__option"
                        onClick={handleAuthentication}
                    >
                        <span className="header__optionLineOne">
                            Hello, {user?.email || "guest"}
                        </span>
                        <span className="header__optionLineTwo">
                            {user ? "Sign Out" : "Sign In"}
                        </span>
                    </div>
                </Link>

                <Link to={user ? "/orders" : "/login"}>
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>

                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>

                <Link to={user ? "/checkout" : "/login"}>
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionLineTwo header__basketCount">
                            {basket?.length}
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Header;