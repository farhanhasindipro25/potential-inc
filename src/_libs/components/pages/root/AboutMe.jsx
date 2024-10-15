import React from "react";
import aboutImage from "@/_libs/assets/about-me/aboutImage.png";
import Image from "next/image";
import { skills } from "@/_libs/statics/skills";

export default function AboutMe() {
    return (
        <div className="max-w-7xl mx-auto py-16">
            <div className="flex items-center justify-between w-full">
                <div className="w-1/2">
                    <Image
                        src={aboutImage}
                        width={500}
                        height={500}
                        alt="hero-img"
                    />
                </div>
                <div className="w-1/2">
                    <h2 className="text-gray-900 text-5xl font-bold">
                        About Me
                    </h2>
                    <p className="py-6 font-normal text-xl text-gray-500">
                        Lorem ipsum dolor sit amet consectetur. Tristique amet
                        sed massa nibh lectus netus in. Aliquet donec morbi
                        convallis pretium. Turpis tempus pharetra
                    </p>
                    {skills.map((skill, index) => (
                        <div key={index} className="mb-6">
                            <div className="flex justify-between mb-4">
                                <span className="text-gray-700 text-xl font-semibold">
                                    {skill.name}
                                </span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-3">
                                <div
                                    className="bg-orange-500  h-3 rounded-full"
                                    style={{ width: `${skill.percentage}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
