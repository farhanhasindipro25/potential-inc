import Image from "next/image";
import React from "react";
import logo from "@/_libs/assets/logo/logo.svg";
import { navOptions } from "@/_libs/statics/navOptions";
import Link from "next/link";
import Button from "../../ui/Button";

export default function Navbar() {
    return (
        <div className="w-full bg-white">
            <div className="max-w-7xl py-6 mx-auto flex items-center justify-between">
                <Image
                    src={logo}
                    className="w-56 h-12 "
                    width={50}
                    height={50}
                    alt="logo"
                />
                <div className="flex items-center gap-10">
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
                    <Button className="bg-orange-500 rounded-lg text-white px-5 py-2">
                        Download CV
                    </Button>
                </div>
            </div>
        </div>
    );
}
