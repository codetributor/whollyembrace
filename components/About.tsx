import Image from "next/image";

export default function About() {
    return(
        <div className="flex justify-center py-10">
            <div className="max-w-6xl">
                <div className="space-y-4 text-gray-400 px-3 text-center sm:text-left">
                    <div className="flex flex-col sm:flex-row sm:justify-evenly items-center">
                        <Image className="pb-5 sm:hidden" src="/earb.png" height={200} width={200} alt="profile photo" />
                    <h1 className="text-2xl text-center sm:text-left font-bold text-green-800">About Earb</h1>
                    <Image className="pb-5 hidden sm:block" src="/earb.png" height={200} width={200} alt="profile photo" />
                    </div>
                    <p>I live with mental illness, and this change in my life, brought pain, lose, and grief. But life is change and we must remember that there are people in our lives, yes them, that guide us through the dark times. I could be a person you meet on the bus, or a parent, friend or sibling. And if after you rise out of the darkness, you can be one of them. Them, the people who care.</p>
                    <p>I am totally insane and imperfect and I must accept that. I hear voices, whispers in the wind, messages from the universe. I have grandiose thoughts that I know about a secret ancient language within the English, a language within a language. This is called word salad, which is a symptom of schizophrenia.</p>

                    <p>Word salad is a confused or unintelligible mixture of seemingly random words and phrases, specifically as a form of speech indicative of advanced schizophrenia.</p>

                    <p>I am out of my mind, I see things some other people do not see. Schizophrenia has changed my life. Hallucinations have flipped my life upside down. I see the unseen and believe I am the Buddha or Jesus or a Shaman. </p>

                    <p>I am paranoid that some people can read my thoughts, and if they can, will they hate me? Will they judge me? I believe I can read other people&apos;s thoughts. This is called thought broadcasting.</p>

                    <p>Thought broadcasting is a condition in which people believe that others can hear their thoughts. Some people believe that their thoughts are being broadcasted by the television, radio, or the internet and in some cases people might avoid interacting with these mediums.</p>

                </div>
            </div>
        </div>
    );
}