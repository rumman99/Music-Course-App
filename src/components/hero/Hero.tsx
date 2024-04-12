import Link from "next/link";
import { Spotlight } from "../ui/Spotlight";
import { Button } from "../ui/moving-border";

const Hero = () => {
    return (
        <div className="h-auto md:h-[40rem] w-full rounded-sm flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
             <Spotlight
                className="-top-10 left-0 md:left-80 md:-top-20"
                fill="white"
            />
            <div className="p-4 relative z-10 w-full text-center">
                <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Master the art of Music</h1>
                <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">Dive into out comprehensive music courses and transform your musical journey today. Whether youre beginner or looking to refine your skills, joun us to unlock your true potential.</p>
            </div>
            <div>
                <Link href={'/courses'}>
                    <Button
                        borderRadius="1.75rem"
                        className="bg-slate-900 dark:bg-black text-white dark:text-white border-slate-800 dark:border-slate-800"
                    >
                        Explore Courses
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default Hero;