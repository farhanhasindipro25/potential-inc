import { projects } from "@/_libs/statics/projects";
import React from "react";
import ProjectsCard from "./ProjectsCard";
import Button from "../../ui/Button";

export default function Projects() {
    return (
        <div className="max-w-7xl py-16 mx-auto">
            <div className="flex items-center flex-col">
                <h2 className="text-5xl font-bold text-gray-900 text-center">
                    Projects
                </h2>
                <p className="py-6 font-normal w-1/2 text-xl text-gray-500 text-center">
                    Lorem ipsum dolor sit amet consectetur. Tristique amet sed
                    massa nibh lectus netus in. Aliquet donec morbi convallis
                    pretium
                </p>
                <div className="flex items-center gap-6 mt-4">
                    <Button variant="secondary">All</Button>
                    <Button variant="secondary">UI/UX</Button>
                    <Button variant="primary">Web Design</Button>
                    <Button variant="secondary">App Design</Button>
                    <Button variant="secondary">Graphic Design</Button>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-14">
                {projects.map((service, index) => (
                    <ProjectsCard
                        key={index}
                        index={index}
                        image={service.image}
                        name={service.name}
                        category={service.category}
                    />
                ))}
            </div>
        </div>
    );
}
