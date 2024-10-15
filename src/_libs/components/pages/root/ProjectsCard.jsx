import Image from "next/image";
import React from "react";

export default function ProjectsCard({ image, category, name, index }) {
    return (
        <div className="space-y-4">
            <Image
                src={image}
                width={index === 2 ? 500 : 500}
                height={index === 2 ? 30 : 100}
                alt="service"
            />
            <div className="space-y-2">
                <p className="font-normal text-orange-400">{category}</p>
                <h2 className="text-xl font-bold text-gray-900">{name}</h2>
            </div>
        </div>
    );
}
