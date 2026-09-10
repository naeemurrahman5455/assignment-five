


import type { Technology } from "../../types/technology";

interface StackHeaderProps {
  selectedTechnologies: Technology[];
}

const StackHeader = ({
  selectedTechnologies,
}: StackHeaderProps) => {
  const selectedCount = selectedTechnologies.length;

  return (
    <div>
      <h2 className="text-2xl font-bold tracking-tight text-slate-900">
        Your Stack
      </h2>

      <p className="mt-1 text-sm text-slate-500">
        {selectedCount}{" "}
        {selectedCount === 1 ? "Technology" : "Technologies"} Selected
      </p>
    </div>
  );
};

export default StackHeader;