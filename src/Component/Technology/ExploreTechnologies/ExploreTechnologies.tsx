import type { Technology } from "../../types/technology";

import TechnologyCard from "./TechnologyCard";

interface ExploreTechnologiesProps {
  technologies: Technology[];
  selectedTechnologies: Technology[];
  onAddToStack: (technology: Technology) => void;
}

const ExploreTechnologies = ({
  technologies,
  selectedTechnologies,
  onAddToStack,
}: ExploreTechnologiesProps) => {
  return (
    <div>
      {/* Section Header */}

      <div className="mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Explore Technologies
        </h2>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
          Discover the technologies you need and build your perfect development
          stack.
        </p>
      </div>

      {/* Technology Grid */}

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {technologies.map((technology) => {
          const isSelected = selectedTechnologies.some(
            (item) => item.id === technology.id,
          );

          return (
            <>
              <TechnologyCard
                key={technology.id}
                technology={technology}
                onAddToStack={onAddToStack}
                isSelected={isSelected}
              />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ExploreTechnologies;
