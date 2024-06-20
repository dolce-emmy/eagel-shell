import Image from "next/image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import eagleTrans from "/public/images/eagleTrans.png";
import eagle from "/public/images/eagle.gif";
import { CheckCheckIcon, LucideListStart, StarHalf, StarHalfIcon } from "lucide-react";
import UsersImage from "@/components/UsersImage";
import { StarFilledIcon } from "@radix-ui/react-icons";
import StarsIconArray from "../components/StarsIconArray";
export default function Home() {
  return (
    <main className="bg-gradient-to-b from-[#111B25] from-0 via-[#2B4C5B] via-35% to-[#305766] to-100 text-snow">
      <section>
        <MaxWidthWrapper
          className="pb-24 pt-10 lg:grid lg:grid-cols-3
        sm:pb-32 lg:pag-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52 
        "
        >
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div
              className="relative mx-auto text-center lg:text-left
            flex flex-col items-center
            "
            >
              <div className="absolute w-28 left-0 -top-20 hidden lg:block">
                <Image
                  src={eagle}
                  alt="eagle with colorful feathers"
                  priority
                  className="w-full rounded-full object-cover"
                />
              </div>
              <h1
                className="relative w-fit tracking-tight  text-balance
              mt-16 font-bold !leading-tight text-5xl md:text-6xl lg:text-7xl
              "
              >
                Your Image on a{" "}
                <span className="bg-charcoal text-earthYellow">Custom</span>{" "}
                Phone Case
              </h1>
              <p
                className="mt-8 text-lg lg:max-w-prose text-center 
              lg:text-left text-balance md:text-wrap 
              "
              >
                Capture every moment and safeguard your memories with
                EagleShell's custom phone cases. Our cases protect your device
                while {""}{" "}
                <span className="font-bold"> keeping cherished memories </span>{" "}
                close at hand, ensuring you carry your story securely and
                stylishly.
              </p>
              <ul
                className="mt-8 space-y-2 text-left font-medium flex
              flex-col items-center sm:items-start
              "
              >
                <div className=" space-y-2">
                  <li className="flex gap-1.5 items-center text-left">
                    <CheckCheckIcon className="w-5 h-5 shrink-0 text-earthYellow" />
                    High-Quality durable cases
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <CheckCheckIcon className="w-5 h-5 shrink-0 text-earthYellow" />
                    5 print guarantee
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <CheckCheckIcon className="w-5 h-5 shrink-0 text-earthYellow" />
                    Modern and stylish designs
                  </li>
                </div>
              </ul>
              <div
                className="mt-12 flex flex-col sm:flex-row items-center
              sm:items-start gap:5
              "
              >
                <div className="flex -space-x-4">
                  <UsersImage />
                </div>
              </div>
              <div
                className="flex flex-col justify-center items-center
                sm:items-start 
                "
              >
                <div className="flex  gap-0.5 pt-5">
                  <StarFilledIcon className="w-6 h-6 text-earthYellow" />
                  <StarFilledIcon className="w-6 h-6 text-earthYellow" />
                  <StarFilledIcon className="w-6 h-6 text-earthYellow" />
                  <StarFilledIcon className="w-6 h-6 text-earthYellow" />
                  <StarHalfIcon className="w-6 h-6 text-earthYellow fill-earthYellow"  />
                  {/* <StarsIconArray /> */}
                </div>
                
              </div>
              <p className="">
                <span className="font-semibold ">1500 </span>
                happy customers
              </p>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </main>
  );
}
