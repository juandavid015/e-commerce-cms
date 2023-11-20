const FormMesagge = () => {
    return (
        <section className="p-8 bg-iris/40 rounded-md flex flex-col gap-4">
            <h2 className="sm:text-3xl text-2xl font-bold">
                Got any idea to share directly with us ?
            </h2>
            <p>Let us know how we can help and will be in contact as soon as we can.</p>
            <form className="flex flex-wrap gap-8">
                <label className="flex flex-col gap-2 w-fit flex-1">
                    <span className="font-bold">Your name</span>
                    <input type="text" placeholder="e.g. John doe"
                    className="bg-transparent placeholder:text-black/70 outline-none
                    border-b border-black"/>
                </label>
                <label className="flex flex-col gap-2 w-fit flex-1">
                    <span className="font-bold">Company email</span>
                    <input type="email" placeholder="e.g. company@email.com"
                    className="bg-transparent placeholder:text-black/70 outline-none
                    border-b border-black"/>
                </label>
                <label className="flex flex-col gap-2 min-w-full">
                    <span className="font-bold">Your name</span>
                    <textarea placeholder="Your message..."
                    className="bg-transparent placeholder:text-black/70 outline-none
                    border-b border-black resize-none w-full" rows={3}/>
                </label>
                <button className="bg-black px-8 py-2 text-white rounded-md mx-auto
                hover:scale-[0.95] transition-all">
                    Let&#39;s get started
                </button>
            </form>
        </section>
    )
}
export default FormMesagge;