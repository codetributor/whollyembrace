import ClientSideRoute from "@/components/ClientSideRoute";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { client } from "@/lib/sanity.client";
import urlFor from "@/lib/urlFor";
import { groq } from "next-sanity";
import Image from "next/image";

export const revalidate = 30;

export default async function BlogList() {
    const query =  groq`
        *[_type == 'post'] {
            ...,
            author->,
            categories[]->,
            slug
        } 
    `
    const posts = await client.fetch(query)

    return(
            <div className="flex h-screen items-center flex-col">
            <Header />
            <div>
            <h3 className="py-4 text-center text-2xl font-thin">blog list</h3>
            <div className="max-w-6xl py-4">
                <div className="flex flex-col space-y-2 sm:grid sm:gap-2 sm:grid-cols-2 sm:space-y-0 ">
                {posts.map((post: any) => (
                    <div className="" key={post.slug.current}>
                        <ClientSideRoute route={`/posts/${post.slug.current}`}>
                    <div className="relative w-full cursor-pointer">
                        <div className="">
                        <Image className="h-[200px] sm:w-[1500px] sm:h-[200px] object-cover" alt="" src={urlFor(post.mainImage).url()} height={400} width={700} />
                        </div>
                        
                        <div className="bg-gray-400/20 backdrop-blur-lg w-full px-3 py-4 absolute bottom-0 text-white">
                        <h3>{post.title}</h3>
                        <p className="text-xs">{new Date(post._createdAt).toLocaleDateString(
                            "en-US", {
                            day: "numeric",
                            month: "long",
                            year: "numeric"
                        })}</p>
                        </div>
                        
                    </div>
                    </ClientSideRoute>
                    </div>
                ))}
                </div>  
            </div>
            </div>
            
            <div className="flex h-screen items-end w-full">
      <Footer />
      </div>
        </div>
        
       
      
    );
}