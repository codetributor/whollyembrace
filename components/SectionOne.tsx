export default function SectionOne() {
    return(
        <div className="flex justify-center h-full flex-col items-center pt-5 space-y-5 bg-gray-100 sm:pt-20 sm:pb-10 sm:mb-10">
            <h3 className="font-thin sm:text-2xl">philosophy</h3>
            <div className="flex flex-wrap sm:grid sm:grid-cols-2 md:grid-cols-3 px-2 justify-center space-y-2 w-full sm:pt-10 sm:space-y-0 sm:gap-x-4 max-w-6xl">
                <div className="bg-white font-dance text-2xl cursor-pointer hover:text-green-800 text-gray-400 shadow-md hover:scale-105 rounded-sm flex justify-center items-center w-full py-5 sm:py-10">
                    embrace yourself
                </div>
                <div className="bg-white text-2xl font-dance cursor-pointer hover:text-green-800 text-gray-400 shadow-md hover:scale-105 rounded-sm flex justify-center items-center w-full py-5 sm:py-10">
                    embrace others
                </div>
                <div className="bg-white text-2xl font-dance cursor-pointer hover:text-green-800 text-gray-400 shadow-md hover:scale-105 rounded-sm flex justify-center items-center w-full py-5 sm:py-10">
                    embrace life
                </div>
            </div>
        </div>
    )
}