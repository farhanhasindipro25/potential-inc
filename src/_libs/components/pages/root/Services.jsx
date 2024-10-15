import { services } from "@/_libs/statics/services";
import React from "react";
import ServiceCard from "./ServiceCard";

export default function Services() {
    return (
        <div className="max-w-7xl py-16 mx-auto">
            <div className="flex items-center flex-col">
                <h2 className="text-5xl font-bold text-gray-900 text-center">
                    Services
                </h2>
                <p className="py-6 font-normal w-1/2 text-xl text-gray-500 text-center">
                    Lorem ipsum dolor sit amet consectetur. Tristique amet sed
                    massa nibh lectus netus in. Aliquet donec morbi convallis
                    pretium
                </p>
            </div>
            <div className="grid grid-cols-4 gap-6 mt-6">
                {services.map((service, index) => (
                    <ServiceCard
                        key={index}
                        index={index}
                        icon={service.icon}
                        name={service.name}
                        description={service.description}
                    />
                ))}
            </div>
        </div>
    );
}
