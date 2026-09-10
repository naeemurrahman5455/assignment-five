


import { FaTrash } from "react-icons/fa";
import type { Technology } from "../../types/technology";

interface StackCardProps {
  technology: Technology;
  onRemoveFromStack: (technologyId: string) => void;
}

const StackCard = ({
  technology,
  onRemoveFromStack,
}: StackCardProps) => {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg">

      {/* Top Section */}

      <div className="flex items-start justify-between gap-4">
        
        {/* Technology Icon */}

        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-slate-50 p-3 transition-colors duration-300 group-hover:bg-slate-100">
          <img
            src={technology.icon}
            alt={technology.name}
            className="h-full w-full object-contain"
          />
        </div>

        {/* Remove Button */}
        <button
          type="button"
          onClick={() => onRemoveFromStack(technology.id)}
          aria-label={`Remove ${technology.name} from stack`}
          className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition-all duration-200 hover:bg-red-50 hover:text-red-500 active:scale-95"
        >
          <FaTrash size={13} />
        </button>
      </div>

      {/* Technology Information */}
      <div className="mt-5">
        <div className="flex items-center justify-between gap-3">
          <h3 className="truncate text-lg font-bold text-slate-900">
            {technology.name}
          </h3>

          {/* Difficulty */}
          <span className="shrink-0 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
            {technology.difficulty}
          </span>
        </div>

        <p className="mt-1 text-sm font-medium text-slate-500">
          {technology.category}
        </p>
      </div>

      {/* Selected Status */}
      <div className="mt-5 flex items-center gap-2 border-t border-slate-100 pt-4">
        <span className="h-2 w-2 rounded-full bg-green-500" />

        <span className="text-xs font-medium text-slate-500">
          Added to your stack
        </span>
      </div>
    </div>
  );
};

export default StackCard;