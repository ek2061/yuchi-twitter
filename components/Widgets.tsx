import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

function Widgets() {
  return (
    <div className="col-span-2 mt-2 hidden px-2 lg:inline">
      <div className="mt-2 flex items-center space-x-2 rounded-full bg-gray-100 p-3">
        <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="搜尋 Twitter"
          className="flex-1 bg-transparent outline-none"
        />
      </div>
    </div>
  );
}

export default Widgets;
