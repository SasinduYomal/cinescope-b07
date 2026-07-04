//Example 01 (flex 1) - app/styling-with-tailwind/flex-one/page.tsx
export default function FlexboxOnePage() {
    return (
        <div className="flex flex-col md:flex-row  bg-purple-300 min-h-screen">
            <div className=" flex-1  p-6 bg-green-300  text-center">Child 1(Flex-1)</div>
            <div className=" flex-3  p-6 bg-blue-300   text-center">Child 2(Flex-3)</div>
            <div className=" flex-2  p-6 bg-yellow-300 text-center">Child 3(Flex-2)</div>
            <div className=" flex-4  p-6 bg-red-300  text-center">Child 4(Flex-4)</div>
            <div className=" flex-2  p-6 bg-orange-300  text-center">Child 5(Flex-2)</div>
        </div>
    )
}