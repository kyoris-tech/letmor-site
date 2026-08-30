"use client";

import { Carousel } from "@/components/ui/Carousel";
import { Modal } from "@/components/ui/Modal";
import { Tag } from "@/components/ui/Tag";
import type { Project } from "./hotwords";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <Modal onClose={onClose} label={project.name}>
      <Carousel images={project.images} />

      <h3 className="mt-6 font-display text-project text-letmor-navy">
        {project.name}
      </h3>
      <p className="mt-1 font-subtitle text-body text-letmor-navy/55">
        {project.type} <span className="text-letmor-gold">-</span> {project.subtype}
      </p>

      <p className="mt-4 font-subtitle text-body text-letmor-navy/85">
        {project.description}
      </p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li key={tag}>
            <Tag>{tag}</Tag>
          </li>
        ))}
      </ul>
    </Modal>
  );
}
