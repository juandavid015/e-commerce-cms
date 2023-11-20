import Image from "next/image";
import { IconArrow } from "../Icons";
import Link from "next/link";

const HeaderAbout = () => {
    return (
        <section className="max-w-[1024px] w-full flex md:flex-nowrap flex-wrap
             justify-center gap-16 mx-auto">
            <div className="flex flex-col gap-4">
                <h1 className="sm:text-4xl text-3xl font-bold">
                    We are
                    <span className="text-iris/70">
                        {' “Company name”, shop agency '}
                    </span>
                    for selling product
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                </p>
                <Link href={'#'}
                    className="flex gap-4 items-center text-white fill-white bg-iris w-fit
                    px-8 py-3 rounded-md font-heading text-lg hover:scale-[0.95] transition-all">
                    <span>Get a view</span>
                    <IconArrow className="h-[20px]" />
                </Link>
                <div className="flex gap-4 font-heading">
                    <div className="flex flex-col gap-2">
                        <span className="text-xl font-bold">
                            99
                        </span>
                        <span>
                            Company spec
                        </span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-xl font-bold">
                            99
                        </span>
                        <span>
                            Company spec
                        </span>
                    </div>

                    <div className="flex flex-col gap-2">
                        <span className="text-xl font-bold">
                            99
                        </span>
                        <span>
                            Company spec
                        </span>
                    </div>


                </div>
            </div>
            <div className="w-[300px] h-[300px]">

                <Image
                    width={300}
                    height={300}
                    alt="Work group of the company"
                    src={'/images/about_header.webp'}
                    className="w-full h-full object-cover rounded-bl-3xl rounded-tr-3xl"
                />
            </div>
        </section>
    )
}
export default HeaderAbout;