import { client } from "@/lib/sanity.client";
import urlFor from "@/lib/urlFor";
import { groq } from "next-sanity";
import Image from "next/image";

export default async function BlogHero() {
    const queryBeMore =  groq`
        *[title=='Be More'] {
            ...,
            author->,
            categories[]->,

        } 
    `
    const queryHeresHappiness =  groq`
    *[title=="Here's Happiness by the Sea"] {
        ...,
        author->,
        categories[]->,

    } 
`
const queryNow =  groq`
        *[title=='Now is the Present'] {
            ...,
            author->,
            categories[]->,

        } 
    `

const beMorePost = await client.fetch(queryBeMore);
const heresHappinessPost = await client.fetch(queryHeresHappiness);
const nowPost = await client.fetch(queryNow);

return(
        <div className="flex flex-col py-10 items-center justify-center">
            <h3 className="font-thin pb-8 sm:pb-16 selection:sm:pb-16 sm:text-2xl">blog</h3>
            <div className="max-w-6xl space-y-2 lg:space-x-2 lg:flex lg:space-y-0">
                
                <div className="space-y-2">
                    <div className="relative w-full">
                        <div className="lg:max-w-[352px]">
                        <Image alt="" src={urlFor(heresHappinessPost[0].mainImage).url()} height={400} width={700} />
                        </div>
                        
                        <div className="bg-gray-400/30 w-full px-3 py-4 absolute bottom-0 text-white">
                        <h3>{heresHappinessPost[0].title}</h3>
                        </div>
                        
                        </div>
                    <div className="relative">
                        <div className="lg:max-w-[352px]">
                        <Image alt="" src={urlFor(nowPost[0].mainImage).url()} height={400} width={700} />
                        </div>
                       
                        <div className="bg-gray-400/30  w-full absolute px-3 py-4 text-white bottom-0">
                        <h3>{nowPost[0].title}</h3>
                        </div>
                       
                        </div>
                </div>
                <div className="relative">
                    <Image alt="" src={urlFor(beMorePost[0].mainImage).url()} height={400} width={700} />
                    <div className="bg-gray-400/30 w-full absolute px-3 py-4 text-white bottom-0">
                    <h3>{beMorePost[0].title}</h3>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}