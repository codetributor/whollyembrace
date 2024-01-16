import Link from "next/link";

export default function PonoPiece() {
    return(
        <div className="flex justify-center px-2 py-10 my-10 bg-green-800">
            <div className="w-full max-w-6xl px-5 flex flex-col items-center space-y-3 sm:space-y-0 sm:flex-row sm:justify-between">
                <p className="text-center sm:text-left text-white"><span className="font-extrabold">pono piece</span> is a workshop to create your masterpiece</p>
                <Link target="_blank" href="https://ponopiece.com"><div className="bg-gray-200 px-4 py-2 rounded-md hover:scale-105 text-green-800 text-center w-fit">explore</div></Link>
            </div>
        </div>
    );
}