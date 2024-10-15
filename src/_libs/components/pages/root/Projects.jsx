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
                    <Button className="px-6 py-2" variant="secondary">
                        All
                    </Button>
                    <Button className="px-6 py-2" variant="secondary">
                        UI/UX
                    </Button>
                    <Button className="px-6 py-2 text-white" variant="primary">
                        Web Design
                    </Button>
                    <Button className="px-6 py-2" variant="secondary">
                        App Design
                    </Button>
                    <Button className="px-6 py-2" variant="secondary">
                        Graphic Design
                    </Button>
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
