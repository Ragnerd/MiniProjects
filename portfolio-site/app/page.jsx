import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Socials";
import Photo from "@/components/Photo";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left">
            <span className="text-xl">Web Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br />
              <span className="text-accent-default">Moinul Faisal</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at crafting digital products & services and I am
              proficient in various programming languages and technologies
            </p>
            {/* button and Socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent-default rounded-full flex items-center justify-center text-accent-default text-base hover:bg-accent-default hover:text-primary hover-transition-all duration-500"/>
              </div>
            </div>
          </div>
          {/* photo */}
          <div>
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
}
