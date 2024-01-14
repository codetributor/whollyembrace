export default function Hero() {
    return(
        <>
        <div className="flex justify-center space-x-2 sm:hidden px-4 pt-10 pb-5">
            <div className="">
            <img src="plant.jpg" height={400} width={150} />
            <p className="text-xs">
            by <a href="https://unsplash.com/@georgiadelotz?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Georgia de Lotz</a> 
            </p>
           
            </div>
            <div className="flex flex-col items-center">
            <h3><span className="text-2xl font-thin">Celebrate the</span></h3>
            <h3 className="-mt-2"><span><span className="text-3xl font-extrabold text-green-800"> imperfect</span></span></h3>
            <img className="mr-auto pt-1" src="/fire.jpg" height={100} width={100} />
            <p className="text-xs mr-auto">
            by <a href="https://unsplash.com/@cullansmith?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Cullan Smith</a>
            </p>
            <img className="mr-auto pt-1" src="/wood.jpg" height={100} width={100} />
            <p className="mr-auto text-xs">
            by <a href="https://unsplash.com/@theforestbirds?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Førestbird</a> 
            </p>
            </div>
        </div>
        <div className="hidden px-10 sm:flex justify-center">
            <div className="pt-32">
            <img src="/plant.jpg" className="rounded-sm" height={800} width={300} />
            by <a href="https://unsplash.com/@georgiadelotz?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Georgia de Lotz</a> 
            </div>
            <div className="flex flex-col ml-5 items-center">
                <div className="flex flex-col items-center">
                <h3><span className="sm:text-6xl lg:text-8xl font-thin">Celebrate the</span></h3>
                <h3><span><span className="text-8xl font-extrabold text-green-800"> imperfect</span></span></h3>
                </div>
                <div className="mr-auto pt-6">
               <img src="/fire.jpg" className="rounded-sm" height={250} width={250} />
               by <a href="https://unsplash.com/@cullansmith?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Cullan Smith</a>
                </div>
                <div className="mr-auto mt-3">
                    <div>
                        <img src="/wood.jpg" className="rounded-sm" height={250} width={250} />
                        by <a href="https://unsplash.com/@theforestbirds?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Joel & Jasmin Førestbird</a> 
  
                    </div>
                </div>
            </div>
        </div>
        </>
        
    );
}