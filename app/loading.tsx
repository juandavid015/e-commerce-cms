import Image from "next/image";

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div className="font-heading w-full h-full flex flex-col
         items-center justify-center">

        <div className="flex flex-col items-center w-full" title="U buy">

        <Image
            width={200}
            height={200}
            alt="logo"
            src={'/images/logo.png'}
            priority
        />
        </div>
            {/* Animate 3 dots below for the loading UI */}
            <div className="flex gap-2">
                <span className="animate-ping bg-black w-2 h-2 rounded-full"></span>
                <span className="animate-ping bg-black w-2 h-2 rounded-full"></span>
                <span className="animate-ping bg-black w-2 h-2 rounded-full"></span>
            </div>
        </div>
    )
  }