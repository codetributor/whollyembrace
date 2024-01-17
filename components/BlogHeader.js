"use client";

import Image from "next/image";
import PortableText from "react-portable-text";

export default function BlogHeader({title, image, createdAt, body}) {
    return(
        <div className="flex justify-center">
            <div className="max-w-6xl px-3 py-5">
                <div className="relative">
                    <Image className="h-[200px] sm:w-[1500px] sm:h-[300px] object-cover" src={image} height={700} width={1500} alt="blog image"/>
                    <div className="bg-gray-400/20 backdrop-blur-lg w-full px-3 py-4 absolute bottom-0 text-white">
                        <h3>{title}</h3>
                        <p className="text-xs">{new Date(createdAt).toLocaleDateString(
                            "en-US", {
                            day: "numeric",
                            month: "long",
                            year: "numeric"
                        })}</p>
                        </div>
                </div>
                <div>
                    <PortableText content={body} 
                    serializers={{
                        block: ({children}) => <p className="py-2">{children}</p>
                    }}
                    />
                </div>
            </div>
        </div>
    );
}