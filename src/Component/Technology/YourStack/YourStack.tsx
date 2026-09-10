



import type { Technology } from "../../types/technology";

import StackHeader from "./StackHeader";
import StackList from "./StackList";
import EmptyStack from "./EmptyStack";

interface YourStackProps {
  selectedTechnologies: Technology[];
  onRemoveFromStack: (technologyId: string) => void;
  onRemoveAll: () => void;
}

const YourStack = ({
  selectedTechnologies,
  onRemoveFromStack,
  onRemoveAll,
}: YourStackProps) => {
  return (
    <div className="flex max-h-[calc(100vh-48px)] flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:sticky lg:top-6">
      {/* Header */}
      <StackHeader
        selectedTechnologies={selectedTechnologies}
      />

      {/* Stack Content */}
      <div className="min-h-0 flex-1">
        {selectedTechnologies.length === 0 ? (
          <EmptyStack />
        ) : (
          <div className="mt-6 max-h-[calc(100vh-190px)] overflow-y-auto pr-2">
            <StackList
              selectedTechnologies={selectedTechnologies}
              onRemoveFromStack={onRemoveFromStack}
            />
          </div>
        )}
      </div>

      {/* Remove All Button */}
      {selectedTechnologies.length > 0 && (
        <button
          type="button"
          onClick={onRemoveAll}
          className="mt-5 w-full rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-red-500 active:scale-[0.98]"
        >
          Remove All
        </button>
      )}
    </div>
  );
};

export default YourStack;