import React from "react";
import Button from "../../ui/Button";

export default function Contact() {
    return (
        <div className="max-w-7xl space-y-10 py-16 mx-auto">
            <div className="flex items-center flex-col">
                <h2 className="text-5xl font-bold text-gray-900 text-center">
                    Let's Design Together
                </h2>
                <p className="py-6 font-normal w-1/2 text-xl text-gray-500 text-center">
                    Lorem ipsum dolor sit amet consectetur. Tristique amet sed
                    massa nibh lectus netus in. Aliquet donec morbi convallis
                    pretium
                </p>
            </div>
            <div className="flex items-center gap-6 justify-center">
                <input
                    placeholder="Enter your email"
                    className="border border-gray-300 bg-gray-100 rounded-lg pl-4 w-1/3 pr-10 py-4"
                />
                <Button variant="primary" className="px-6 py-4 text-white">
                    Contact Me
                </Button>
            </div>
        </div>
    );
}
