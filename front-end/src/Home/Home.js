import React from "react";
import "./Home.css";
import Product from "./component/Product";
import Carousel from "./component/Carousel";

function Home() {
    const carouselItems = [
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/Holiday/GiftGuide/Fuji_TallHero_GG2_en_US_1x._CB418256337_.jpg",
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg",
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Toys_en_US_1x._CB431858161_.jpg",
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Beauty_v2_en_US_1x._CB429089975_.jpg",
    ];

    return (
        <div className="home">
            <div className="home__container">
                <Carousel items={carouselItems} />
                {/* <img
                    className="home__image"
                    // src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/Holiday/GiftGuide/Fuji_TallHero_GG2_en_US_1x._CB418256337_.jpg"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt=""
                /> */}
                <div className="home__row">
                    <Product
                        id="12321341"
                        title="Flow: The Psychology of Optimal Experience (Harper Perennial Modern Classics)"
                        image="https://m.media-amazon.com/images/I/61xW3njVmQL._AC_UL480_FMwebp_QL65_.jpg"
                        price={10.54}
                        rating={5}
                    />
                    <Product
                        id="49538094"
                        title="Philips Norelco MG3750 Multigroom All-In-One Series 3000, 13 attachment trimmer"
                        image="https://images-na.ssl-images-amazon.com/images/I/51s7FUpMbHL._AC_US240_FMwebp_QL65_.jpg"
                        price={28.0}
                        rating={4}
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="4903850"
                        title="Fitbit Charge 4 Fitness and Activity Tracker with Built-in GPS, Heart Rate, Sleep & Swim Tracking, Black/Black, One Size (S &L Bands Included)"
                        image="https://images-na.ssl-images-amazon.com/images/I/311ThQv0JoL._AC_US240_FMwebp_QL65_.jpg"
                        price={109.95}
                        rating={3}
                    />
                    <Product
                        id="23445930"
                        title="Nintendo Switch Lite - Gray with SanDisk 256GB MicroSDXC UHS-I Card for Nintendo Switch"
                        image="https://m.media-amazon.com/images/I/51UtuQ5CXvL._AC_UY327_FMwebp_QL65_.jpg"
                        price={238.99}
                        rating={5}
                    />
                    <Product
                        id="3254354345"
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                        price={598.99}
                        rating={4}
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="78394873"
                        title="Kindle Paperwhite Essentials Bundle including Kindle Paperwhite - Wifi, Ad-Supported, Amazon Leather Cover, and Power Adapter"
                        image="https://m.media-amazon.com/images/I/61SIUbjKwVL._AC_UY327_FMwebp_QL65_.jpg"
                        price={199.97}
                        rating={5}
                    />
                    <Product
                        id="2382745583"
                        title="Apple AirPods Pro"
                        image="https://m.media-amazon.com/images/I/71zny7BTRlL._AC_UY327_FMwebp_QL65_.jpg"
                        price={269.0}
                        rating={5}
                    />
                    <Product
                        id="38294873"
                        title="New Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray (Latest Model)"
                        image="https://m.media-amazon.com/images/I/71an9eiBxpL._AC_UY327_FMwebp_QL65_.jpg"
                        price={599.0}
                        rating={4}
                    />
                    <Product
                        id="48392748"
                        title="GAN 356 R S, 3x3 Speed Cube Gans 356RS Magic Cube(Stickerless)"
                        image="https://m.media-amazon.com/images/I/51k6JSEUR3L._AC_UY327_FMwebp_QL65_.jpg"
                        price={17.99}
                        rating={4}
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="90829332"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                        price={1094.98}
                        rating={4}
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
