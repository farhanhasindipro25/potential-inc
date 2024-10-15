import Image from "next/image";
import React from "react";

export default function ServiceCard({ icon, index, name, description }) {
    return (
        <div className="bg-gray-50 rounded-lg p-6 space-y-4">
            <Image
                src={icon}
                width={index === 2 ? 30 : 50}
                height={index === 2 ? 30 : 50}
                alt="service"
            />
            <div className="space-y-2">
                <h2 className="text-xl font-bold text-gray-900">{name}</h2>
                <p className="font-normal text-gray-500">{description}</p>
            </div>
        </div>
    );
}
