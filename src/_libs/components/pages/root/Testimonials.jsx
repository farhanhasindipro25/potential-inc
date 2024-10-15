import Image from "next/image";
import React from "react";
import client1 from "@/_libs/assets/testimonials/client1.png";

export default function Testimonials() {
    return (
        <div className="max-w-7xl py-16 mx-auto">
            <div className="flex items-center flex-col">
                <h2 className="text-5xl font-bold text-gray-900 text-center">
                    Testimonials
                </h2>
                <p className="py-6 font-normal w-1/2 text-xl text-gray-500 text-center">
                    Lorem ipsum dolor sit amet consectetur. Tristique amet sed
                    massa nibh lectus netus in. Aliquet donec morbi convallis
                    pretium
                </p>
            </div>
            <div className="flex justify-center flex-col items-center gap-6">
                <div className="w-1/2 bg-gray-50 flex items-center gap-6 rounded-md p-6">
                    <Image
                        src={client1}
                        width={150}
                        height={150}
                        alt="client"
                    />
                    <div className="flex flex-col gap-4">
                        <h2 className="text-gray-500 ">
                            Lorem ipsum dolor sit amet consectetur. In enim
                            cursus odio accumsan. Id leo urna velit neque mattis
                            id tellus arcu condimentum. Augue dictum dolor
                            elementum convallis dignissim malesuada commodo
                            ultrices.
                        </h2>
                        <div>
                            <h2 className="font-semibold text-gray-700">
                                Name
                            </h2>
                            <p className="font-medium text-gray-500 text-sm">
                                CEO
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="w-16 rounded-full h-3 bg-gray-200"></div>
                    <div className="w-16 rounded-full h-3 bg-orange-400"></div>
                    <div className="w-16 rounded-full h-3 bg-gray-200"></div>
                    <div className="w-16 rounded-full h-3 bg-gray-200"></div>
                </div>
            </div>
        </div>
    );
}
