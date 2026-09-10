import { FaTrash } from "react-icons/fa";
import type { Technology } from "../../type/technology";

interface StackListProps {
  selectedTechnologies: Technology[];
  onRemoveFromStack: (technologyId: string) => void;
}

const StackList = ({
  selectedTechnologies,
  onRemoveFromStack,
}: StackListProps) => {
  return (
    <div className="mt-6 grid gap-4">
      {selectedTechnologies.map((technology) => (
        <div
          key={technology.id}
          className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
        >
          {/* Technology Info */}
          <div className="flex items-center gap-4">
            {/* Icon */}
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 p-2">
              <img
                src={technology.icon}
                alt={technology.name}
                className="h-full w-full object-contain"
              />
            </div>

            {/* Name + Category */}
            <div>
              <h3 className="font-semibold text-slate-900">
                {technology.name}
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                {technology.category}
              </p>
            </div>
          </div>

          {/* Remove Button */}
          <button
            type="button"
            onClick={() => onRemoveFromStack(technology.id)}
            aria-label={`Remove ${technology.name}`}
            className="rounded-lg p-2 text-slate-400 transition-all duration-200 hover:bg-red-50 hover:text-red-500"
          >
            <FaTrash size={14} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default StackList;
