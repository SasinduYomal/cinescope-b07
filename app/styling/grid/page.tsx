//Example 01 (grid) - app/styling-with-tailwind/grid/page.tsx
export default function GridPage() {
  return (
    <div className="flex justify-center items-center bg-purple-300 min-h-screen">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="h-40 w-full p-6 bg-green-300 rounded-b-lg text-center">
          Child 1
        </div>
        <div className="h-40 w-full p-6 bg-blue-300 rounded-b-lg text-center">
          Child 2
        </div>
        <div className="h-40 w-full p-6 bg-yellow-300 rounded-b-lg text-center">
          Child 3
        </div>
        <div className="h-40 w-full p-6 bg-red-300 rounded-b-lg text-center">
          Child 4
        </div>
        <div className="h-40 w-full p-6 bg-sky-300 rounded-b-lg text-center">
          Child 5
        </div>
        <div className="h-40 w-full p-6 bg-pink-300 rounded-b-lg text-center">
          Child 6
        </div>
        <div className="h-40 w-full p-6 bg-teal-300 rounded-b-lg text-center">
          Child 7
        </div>
        <div className="h-40 w-full p-6 bg-neutral-300 rounded-b-lg text-center">
          Child 8
        </div>
      </div>
    </div>
  );
}
