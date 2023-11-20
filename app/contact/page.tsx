import ContactOptions from "../components/contact/ContactOptions";
import FAQ from "../components/contact/FAQ";
import FormMesagge from "../components/contact/FormMessage";

const Contact = () => {
    return (
        <main className="flex flex-col gap-16 px-8 py-16
        max-w-[1024px] mx-auto w-full">
            <div>
                <h1 className="sm:text-4xl text-3xl font-bold">
                    Contact
                </h1>
                <p>
                    Below you will find all available ways to know more about us.
                </p>
            </div>
            <FAQ />
            <FormMesagge />
            <ContactOptions />
        </main>
    )
}
export default Contact;