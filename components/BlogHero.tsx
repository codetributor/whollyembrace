import { client } from "@/lib/sanity.client";
import urlFor from "@/lib/urlFor";
import { groq } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import ClientSideRoute from "./ClientSideRoute";

export const revalidate = 30;

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
            slug
        } 
    `

const beMorePost = await client.fetch(queryBeMore);
const heresHappinessPost = await client.fetch(queryHeresHappiness);
const nowPost = await client.fetch(queryNow);

return(
        <div className="flex flex-col py-10 items-center justify-center">
            <Link href="/bloglist" ><h3 className="font-thin pb-8 sm:pb-16 selection:sm:pb-16 sm:text-2xl">blog posts</h3></Link>
            <div className="max-w-6xl space-y-2 lg:space-x-2 lg:flex lg:space-y-0">
                
                <div>
                    <ClientSideRoute route={`/posts/${heresHappinessPost[0].slug.current}`}>
                    <div className="relative mb-2 w-full cursor-pointer">
                        <div className="lg:max-w-[352px]">
                        <Image alt="" src={urlFor(heresHappinessPost[0].mainImage).url()} height={400} width={700} />
                        </div>
                        
                        <div className="bg-gray-400/20 backdrop-blur-lg w-full px-3 py-4 absolute bottom-0 text-white">
                        <h3>{heresHappinessPost[0].title}</h3>
                        <p className="text-xs">{new Date(heresHappinessPost[0]._createdAt).toLocaleDateString(
                            "en-US", {
                            day: "numeric",
                            month: "long",
                            year: "numeric"
                        })}</p>
                        </div>
                        
                    </div>
                    </ClientSideRoute>
                    <ClientSideRoute route={`/posts/${nowPost[0].slug.current}`}>
                    <div className="relative mb-2 cursor-pointer">
                        <div className="lg:max-w-[352px]">
                        <Image alt="" src={urlFor(nowPost[0].mainImage).url()} height={400} width={700} />
                        </div>
                       
                        <div className="bg-gray-400/20 backdrop-blur-lg  w-full absolute px-3 py-4 text-white bottom-0">
                        <h3>{nowPost[0].title}</h3>
                        <p className="text-xs">{new Date(nowPost[0]._createdAt).toLocaleDateString(
                            "en-US", {
                            day: "numeric",
                            month: "long",
                            year: "numeric"
                        })}</p>
                        </div>
                       
                    </div>
                    </ClientSideRoute>

                    
                </div>
                <ClientSideRoute route={`/posts/${beMorePost[0].slug.current}`}>
                <div className="relative cursor-pointer">
                    <Image alt="" src={urlFor(beMorePost[0].mainImage).url()} height={400} width={700} />
                    <div className="bg-gray-400/20 backdrop-blur-lg w-full absolute px-3 py-4 text-white bottom-0">
                    <h3>{beMorePost[0].title}</h3>
                    <p className="text-xs">{new Date(beMorePost[0]._createdAt).toLocaleDateString(
                            "en-US", {
                            day: "numeric",
                            month: "long",
                            year: "numeric"
                        })}</p>
                    </div> 
                </div>
                </ClientSideRoute>
               



            </div>
        </div>
    );
}