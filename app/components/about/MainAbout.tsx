const MainAbout = () => {
    return (
        <section className=" w-full flex flex-col
        justify-center  mx-auto bg-white-gray">
            <div className="max-w-[1024px] flex flex-col
        justify-center mx-auto p-8 gap-8">

                <div className="w-full">
                    <h2 className="sm:text-3xl text-2xl font-bold">
                        About us
                    </h2>
                    <p>
                        In hac habitasse platea dictumst. Suspendisse volutpat ante et elementum maximus. Vivamus sodales eros eu fringilla ornare. Vestibulum hendrerit justo orci, at vestibulum ligula lacinia quis. Mauris laoreet, justo vitae pellentesque maximus, justo odio efficitur lacus, nec euismod elit nibh in libero. Cras fermentum, velit vitae fermentum aliquam, dui turpis congue nisi, ut molestie dui dui sed est. Praesent lacinia, dolor at placerat varius, nunc ante aliquet neque, et finibus metus massa at nibh.
                    </p>
                </div>
                <div className="flex flex-col gap-4">
                    <h2 className="sm:text-3xl text-2xl font-bold">
                        Our services
                    </h2>
                    <ul className="flex flex-col gap-2">
                        <li className="list-disc list-inside">
                            <span className="text-iris ">
                                service #
                            </span>
                            hendrerit justo orci, at vestibulum ligula lacinia quis
                        </li>
                        <li className="list-disc list-inside">
                            <span className="text-iris ">
                                service #
                            </span>
                            hendrerit justo orci, at vestibulum ligula lacinia quis
                        </li>
                        <li className="list-disc list-inside">
                            <span className="text-iris ">
                                service #
                            </span>
                            hendrerit justo orci, at vestibulum ligula lacinia quis
                        </li>

                    </ul>
                </div>
            </div>

        </section>
    )
}
export default MainAbout;