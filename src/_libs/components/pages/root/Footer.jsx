import React from "react";
import logo from "@/_libs/assets/logo/logo.svg";
import Image from "next/image";
import { navOptions } from "@/_libs/statics/navOptions";
import Link from "next/link";
import Facebook from "@/_libs/assets/socials/Facebook.png";
import Instagram from "@/_libs/assets/socials/Instagram.png";
import LinkedIn from "@/_libs/assets/socials/LinkedIn.png";
import Twitter from "@/_libs/assets/socials/Twitter.png";

export default function Footer() {
    return (
        <div className="bg-gray-100 ">
            <div className="max-w-7xl mx-auto flex justify-center flex-col pt-24 pb-16 items-center gap-10">
                <Image
                    src={logo}
                    className="w-56 h-12 "
                    width={50}
                    height={50}
                    alt="logo"
                />
                <div className="flex items-center gap-10">
                    {navOptions.map((option) => (
                        <Link
                            href={option.href}
                            className="font-medium text-gray-700"
                        >
                            {option.label}
                        </Link>
                    ))}
                </div>
                <div className="flex items-center justify-center gap-6">
                    <Image
                        src={Facebook}
                        width={20}
                        height={20}
                        alt="hero-img"
                    />
                    <Image
                        src={Twitter}
                        width={20}
                        height={20}
                        alt="hero-img"
                    />
                    <Image
                        src={Instagram}
                        width={20}
                        height={20}
                        alt="hero-img"
                    />
                    <Image
                        src={LinkedIn}
                        width={20}
                        height={20}
                        alt="hero-img"
                    />
                </div>
            </div>
            <div className="bg-gray-600 font-medium text-white py-6 flex justify-center">
                © 2023{" "}
                <span className="px-2 font-bold text-orange-400">Mumair</span>{" "}
                All Rights Reserved , Inc.
            </div>
        </div>
    );
}
