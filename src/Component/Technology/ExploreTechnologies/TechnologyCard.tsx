
import { FaCheck, FaPlus } from "react-icons/fa";
import type { Technology } from "../../types/technology";

interface TechnologyCardProps {
  technology: Technology;
  onAddToStack: (technology: Technology) => void;
  isSelected: boolean;
}

const TechnologyCard = ({
  technology,
  onAddToStack,
  isSelected,
}: TechnologyCardProps) => {
  return (
    <div className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl">

      {/* Top Section */}

      <div className="flex items-start justify-between gap-4">

        {/* Icon */}

        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-slate-50 p-3 transition-all duration-300 group-hover:bg-slate-100">
          <img
            src={technology.icon}
            alt={technology.name}
            className="h-full w-full object-contain"
          />
        </div>

        {/* Difficulty */}

        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
          {technology.difficulty}
        </span>
      </div>

      {/* Information */}

      <div className="mt-5 flex-1">
        <h3 className="text-lg font-bold text-slate-900">
          {technology.name}
        </h3>

        <p className="mt-1 text-sm font-medium text-slate-500">
          {technology.category}
        </p>

        <p className="mt-3 text-sm leading-6 text-slate-500">
          Build modern applications with {technology.name}.
        </p>
      </div>

      {/* Add Button */}
      
      <button
        type="button"
        disabled={isSelected}
        onClick={() => onAddToStack(technology)}
        className={`mt-5 flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-200 ${
          isSelected
            ? "cursor-not-allowed bg-slate-100 text-slate-400"
            : "bg-slate-900 text-white hover:bg-slate-700 active:scale-[0.98]"
        }`}
      >
        {isSelected ? (
          <>
            <FaCheck size={12} />
            Added to Stack
          </>
        ) : (
          <>
            <FaPlus size={12} />
            Add to Stack
          </>
        )}
      </button>
    </div>
  );
};

export default TechnologyCard;
