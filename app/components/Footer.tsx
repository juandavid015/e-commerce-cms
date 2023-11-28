import Image from "next/image";
import Link from "next/link";
import { IconFacebook, IconInstagram, IconMasterCard, IconPaypal, IconTwitter, IconVisa, IconWhatsApp } from "./Icons";
const Footer = () => {
    return (
        <footer className="font-heading text-gray p-16
        w-full mt-auto md:col-span-full md:col-start-1 md:col-end-4 col-span-3
        bg-white-gray flex sm:flex-row flex-col-reverse gap-32"
        >
            <div className="flex flex-col gap-1">
                <Image
                width={100}
                height={100}
                alt="logo"
                src={'/images/logo.png'}
                priority
                />
                {/* <span className="text-black font-heading text-4xl font-bold font-sans">
                    E
                </span> */}
                <p>
                    U-buy is a company based on the e-commerce online
                </p>
                <ul className="flex gap-2">
                    <li className="text-black">
                        <Link href={'#'}>
                            <IconFacebook className="h-[25px]"/>
                        </Link>
                    </li>
                    <li className="text-black">
                        <Link href={'#'}>
                            <IconWhatsApp className="h-[25px]"/>
                        </Link>
                    </li>
                    <li className="text-black">
                        <Link href={'#'}>
                            <IconTwitter className="h-[25px]"/>
                        </Link>
                    </li>
                    <li className="text-black">
                        <Link href={'#'}>
                            <IconInstagram className="h-[25px]"/>
                        </Link>
                    </li>
                </ul>
            </div>
            <ul className="flex flex-wrap gap-16">
                <li className="flex flex-col gap-2">
                    <span className="text-xl text-black font-bold">
                        Company
                    </span>
                    <ul className="flex flex-col gap-1">
                        <li className="text-gray hover:text-black hover:scale-[0.95]">
                            <Link href={'/about'}>
                                About us
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className="flex flex-col gap-2">
                    <span className="text-xl text-black font-bold">
                        Shop
                    </span>
                    <ul className="flex flex-col gap-1">
                        <li className="text-gray hover:text-black hover:scale-[0.95]">
                            <Link href={'/products'}>
                                Products
                            </Link>
                        </li>
                        <li className="text-gray hover:text-black hover:scale-[0.95]">
                            <Link href={'/products'}>
                                Discounts
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className="flex flex-col gap-2">
                    <span className="text-xl text-black font-bold">
                        Contact us
                    </span>
                    <ul className="flex flex-col gap-1">
                        <li className="text-gray hover:text-black hover:scale-[0.95]">
                            <Link href={'/about'}>
                                +2 9578 45465
                            </Link>
                        </li>
                        <li className="text-gray hover:text-black hover:scale-[0.95]">
                            <Link href={'/about'}>
                                company@sample.com
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className="flex flex-col gap-2">
                    <span className="text-xl text-black font-bold">
                        Payment methods
                    </span>
                    <ul className="flex gap-2">
                        <li className="text-gray hover:text-black hover:scale-[0.95]">
                            <Link href={'/about'}>
                            <IconMasterCard className="h-[25px]"/>
                            </Link>
                        </li>
                        <li className="text-gray hover:text-black hover:scale-[0.95]">
                            <Link href={'/about'}>
                            <IconPaypal className="h-[25px]"/>
                            </Link>
                        </li>
                        <li className="text-gray hover:text-black hover:scale-[0.95]">
                            <Link href={'/about'}>
                            <IconVisa className="h-[25px]"/>
                            </Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </footer>
    )
}
export default Footer;