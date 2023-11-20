import { IconHappyFace } from "../Icons";

const questions = [
    {
        title: 'Is there a free trial available?',
        answer: 'Not at the moment.'
    },
    {
        title: 'How does billing work?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'
    }
]
const FAQ = () => {
    return (
        <section className="flex flex-col gap-4">
            <h2 className="sm:text-3xl text-2xl font-bold">
                Frequently asked questions
            </h2>
            <ul className="flex flex-col gap-4">
                {
                    questions.map((question, index) => {
                        return (
                            <li key={'q' + index} 
                            className="p-4 border border-white-gray rounded-md
                            relative fill-black">
                                <details>
                                    <summary className="font-bold">{question.title}</summary>
                                    <p>{question.answer}</p>
                                </details>
                                <IconHappyFace className="h-[30px] absolute right-4 top-4"/>
                            </li>
                        )
                    })
                }

            </ul>

        </section>
    )
}
export default FAQ;