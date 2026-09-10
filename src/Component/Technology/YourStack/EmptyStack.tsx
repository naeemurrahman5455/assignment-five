import { FaLayerGroup } from "react-icons/fa";

const EmptyStack = () => {
  return (
    <div className="mt-6 flex min-h-55 flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 py-10 text-center">
      {/* Icon */}
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-slate-400 shadow-sm">
        <FaLayerGroup size={24} />
      </div>

      {/* Content */}
      <h3 className="mt-4 text-lg font-semibold text-slate-800">
        Your stack is empty
      </h3>

      <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
        Explore the technologies above and add the ones you want to
        include in your development stack.
      </p>
    </div>
  );
};

export default EmptyStack;