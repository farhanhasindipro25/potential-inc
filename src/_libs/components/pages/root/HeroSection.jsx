import Image from "next/image";
import React from "react";
import heroImage from "@/_libs/assets/hero-section/heroImage.png";
import Facebook from "@/_libs/assets/socials/Facebook.png";
import Instagram from "@/_libs/assets/socials/Instagram.png";
import LinkedIn from "@/_libs/assets/socials/LinkedIn.png";
import Twitter from "@/_libs/assets/socials/Twitter.png";
import Button from "../../ui/Button";

export default function HeroSection() {
    return (
        <div className="max-w-7xl mx-auto py-16">
            <div className="flex items-center gap-56 justify-between mx-auto w-full">
                <div className="flex flex-col w-1/2">
                    <h2 className="font-semibold text-3xl">Hi I am</h2>
                    <h2 className="font-semibold text-4xl text-orange-400">
                        Muhammad Umair
                    </h2>
                    <div>
                        <h2 className="font-bold text-8xl text-gray-900">
                            UI & UX
                        </h2>
                        <h2 className="font-bold text-8xl ml-40 text-gray-900">
                            Designer
                        </h2>
                    </div>
                    <p className="py-6 font-normal text-xl text-gray-500">
                        Lorem ipsum dolor sit amet consectetur. Tristique amet
                        sed massa nibh lectus netus in. Aliquet donec morbi
                        convallis pretium. Turpis tempus pharetra
                    </p>
                    <Button
                        variant="primary"
                        className="w-fit text-white px-10 py-3"
                    >
                        HIRE ME
                    </Button>
                </div>
                <div className="w-1/2 flex flex-col gap-6">
                    <Image
                        src={heroImage}
                        width={500}
                        height={500}
                        alt="hero-img"
                    />
                    <div className="flex items-center justify-center gap-6">
                        <Image
                            src={Facebook}
                            width={30}
                            height={30}
                            alt="hero-img"
                        />
                        <Image
                            src={Twitter}
                            width={30}
                            height={30}
                            alt="hero-img"
                        />
                        <Image
                            src={Instagram}
                            width={30}
                            height={30}
                            alt="hero-img"
                        />
                        <Image
                            src={LinkedIn}
                            width={30}
                            height={30}
                            alt="hero-img"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
