"use client";

import { useState } from "react";
import { FilterTabs } from "@/components/ui/FilterTabs";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { portfolio, type Project } from "./hotwords";

export function PortfolioGallery() {
  const [activeKey, setActiveKey] = useState(portfolio.filters[0].key);
  const [selected, setSelected] = useState<Project | null>(null);

  const projects =
    activeKey === "todos"
      ? portfolio.projects
      : portfolio.projects.filter((project) => project.category === activeKey);

  return (
    <div className="mt-[clamp(1.75rem,3.5vw,2.75rem)]">
      <FilterTabs
        items={portfolio.filters}
        activeKey={activeKey}
        onChange={setActiveKey}
        className="sm:justify-end"
      />

      <ul className="mt-[clamp(2rem,4vw,3.5rem)] grid grid-cols-1 gap-x-[clamp(1.5rem,3vw,2.75rem)] gap-y-[clamp(2.25rem,4vw,3.25rem)] sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <li key={project.id}>
            <ProjectCard
              project={project}
              onSelect={() => setSelected(project)}
            />
          </li>
        ))}
      </ul>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}
