//Example 01 (flexbox) - app/styling-with-tailwind/flexbox/page.tsx
export default function FlexboxPage() {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center bg-purple-300 min-h-screen gap-6 p-6">
            <div className="h-30 w-50 bg-green-300 rounded-b-lg text-center">Child 1</div>
            <div className="h-30 w-50 bg-blue-300 rounded-b-lg text-center">Child 2</div>
            <div className="h-30 w-50 bg-yellow-300 rounded-b-lg text-center">Child 3</div>
            <div className="h-30 w-50 bg-red-300 rounded-b-lg text-center">Child 4</div>
        </div>
    )
}