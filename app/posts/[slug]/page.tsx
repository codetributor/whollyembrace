import BlogHeader from "@/components/BlogHeader";
import Header from "@/components/Header";
import { client } from "@/lib/sanity.client";
import urlFor from "@/lib/urlFor";
import { groq } from "next-sanity";

type Props = {
    params: {
        slug: string;
    }
}

export const revalidate = 60;

export async function generateStaticParams() {
    const query = groq`
    *[_type == "post"]
    {
        slug
    }
    `
    const slugs: any[] = await client.fetch(query);
    const slugRoutes = slugs.map((slug: any) => slug.slug.current);
    return slugRoutes.map((slug: any) => ({
        slug
    }))
}

export default async function Post({params: {slug}}: Props) {
    const query = groq`
        *[_type == 'post' && slug.current == $slug][0]
         {
            ...,
            author->,
            categories[]->
         }
    `;
    const post: any = await client.fetch(query, { slug });

    return(
        <div>
            <Header />
            <BlogHeader 
            title={post.title}
            image={urlFor(post.mainImage).url()}
            createdAt={post._createdAt}
            body={post.body}
            />
        </div>
    );
}