



import { Suspense, use, useState } from "react";
import type { Technology } from "../types/technology";

import { getTechnologies } from "../services/technologyService";
import ExploreTechnologies from "./ExploreTechnologies/ExploreTechnologies";
import YourStack from "./YourStack/YourStack";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const technologiesPromise = getTechnologies();

const Loading = () => {
  return (
    <div className="flex min-h-60 items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-slate-900" />

        {/* Loading Text */}
        <p className="text-sm font-medium text-slate-500">
          Loading technologies...
        </p>
      </div>
    </div>
  );
};

const TechnologyData = () => {
  const technologies = use(technologiesPromise);

  const [selectedTechnologies, setSelectedTechnologies] =
    useState<Technology[]>([]);

  // Add Technology
  const handleAddToStack = (technology: Technology) => {
    setSelectedTechnologies((previous) => {
      const alreadyExists = previous.some(
        (item) => item.id === technology.id
      );

      if (alreadyExists) {
        toast.warning(`${technology.name} is already in your stack!`);
        return previous;
      }

      toast.success(`${technology.name} added to your stack!`);

      return [...previous, technology];
    });
  };

  // Remove Technology
  const handleRemoveFromStack = (technologyId: string) => {
    setSelectedTechnologies((previous) => {
      const technology = previous.find(
        (item) => item.id === technologyId
      );

      if (technology) {
        toast.info(`${technology.name} removed from your stack!`);
      }

      return previous.filter(
        (item) => item.id !== technologyId
      );
    });
  };

  // Remove All
  const handleRemoveAll = () => {
    if (selectedTechnologies.length === 0) {
      return;
    }

    setSelectedTechnologies([]);

    toast.info("All technologies removed from your stack!");
  };

  return (


<div className="grid gap-8 lg:grid-cols-[1fr_320px] lg:items-start">
    {/* Explore Technologies */}
    <ExploreTechnologies
      technologies={technologies}
      selectedTechnologies={selectedTechnologies}
      onAddToStack={handleAddToStack}
    />

    {/* Your Stack */}
    <YourStack
      selectedTechnologies={selectedTechnologies}
      onRemoveFromStack={handleRemoveFromStack}
      onRemoveAll={handleRemoveAll}
    />
  </div>



  );
};

const TechnologySection = () => {
  return (

    <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

<Suspense fallback={<Loading />}>
  <TechnologyData />
</Suspense>

    </div>

    <ToastContainer position="top-right" />
  </section>
  );
};

export default TechnologySection;