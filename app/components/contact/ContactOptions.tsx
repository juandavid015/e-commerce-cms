import { IconCall, IconChat, IconLocation } from "../Icons";

const ContactOptions = () => {
    return (
        <div className="flex justify-center flex-wrap gap-8 ">
            <div className="flex gap-4  border border-gray rounded-md p-4 flex-1">
                <div className="p-2 border border-gray rounded-md h-fit w-fit">
                    <IconChat className="h-[20px]" />
                </div>
                <div className="w-full min-w-[200px]">
                    <h2 className="sm:text-xl text-lg font-bold">
                        Chat to us
                    </h2>
                    <p className="text-gray">
                        Our teem is here to help you!
                    </p>
                    <p className="font-bold">
                        company@contact.com
                    </p>
                </div>
            </div>
            <div className="flex gap-4  border border-gray rounded-md p-4 flex-1">
                <div className="p-2 border border-gray rounded-md h-fit w-fit">
                    <IconCall className="h-[20px]" />
                </div>
                <div className="w-full min-w-[200px]">
                    <h2 className="sm:text-xl text-lg font-bold">
                        Call us
                    </h2>
                    <p className="text-gray">
                        We’re available from 6:00 a.m to 8:00 p.m
                    </p>
                    <p className="font-bold">
                        +551 110 000
                    </p>
                </div>
            </div>
            <div className="flex gap-4  border border-gray rounded-md p-4 flex-1">
                <div className="p-2 border border-gray rounded-md h-fit w-fit">
                    <IconLocation className="h-[20px]" />
                </div>
                <div className="w-full min-w-[200px]">
                    <h2 className="sm:text-xl text-lg font-bold">
                        Visit us
                    </h2>
                    <p className="text-gray">
                        Como to say hi to our offices
                    </p>
                    <p className="font-bold">
                        Street name, Av. New. # 77 - 15
                    </p>
                </div>
            </div>
        </div>
    )
}
export default ContactOptions;