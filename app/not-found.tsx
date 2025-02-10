import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SquareCard from "@/components/SquareCard";

export default function NotFound() {

    const errorMessages = [
        {
            title: "404: Page Not Found, Quantum Entanglement Edition",
            description: "Looks like this page has entered a parallel universe. It might be stuck in a quantum state where it neither exists nor doesn’t."
        },
        {
            title: "404: The Great Code Warp",
            description: "This page has slipped through a rift in the code and is now lost in the digital void. Try again later, or call the tech wizards."
        },
        {
            title: "404: The Server Has Gone Rogue",
            description: "Your request reached an unexpected location. The server's on a rebellion mission. Check your URL, or prepare for a system reset."
        },
        {
            title: "404: Error 404 Not Found (Is This the Matrix?)",
            description: "Something doesn’t add up in the matrix. Did you just glitch this reality? Double-check that URL, and maybe the truth will reveal itself."
        },
        {
            title: "404: Page Vanished in the Time-Space Continuum",
            description: "This page has fallen through a wormhole and is no longer accessible. It’s somewhere in the past or the future — we don’t know."
        },
        {
            title: "404: File Not Found, Captain",
            description: "This page is on a deep-space mission, unreachable by conventional means. You can try again or send a distress signal to the Webmaster."
        },
        {
            title: "404: JavaScript is Missing, Send Help",
            description: "Our scripts went AWOL. Something essential is missing, and your page is no longer available. Check the URL, or rebuild it from scratch."
        },
        {
            title: "404: The Web Is Broken. Not Literally.",
            description: "Somewhere, a server is crying. This page could not be found due to an unexplainable error in the code. We’ll fix it, eventually."
        },
        {
            title: "404: Error 404 in Your Local Simulation",
            description: "Looks like your request didn’t compute properly. Reality might need a system update. Please retry, or refresh your virtual existence."
        },
        {
            title: "404: Ghost in the Shell Error",
            description: "The page you seek has vanished into the ether. Our bots cannot locate it, and the code may be haunted. Try again later!"
        }
    ];


    const getRandomError = () => {
        const randomIndex = Math.floor(Math.random() * errorMessages.length);
        return errorMessages[randomIndex];
    };

    const randomError = getRandomError();

    return (
        <>
            <Header />
            <div className="container px-8 mx-auto xl:px-5  max-w-screen-lg py-5 lg:py-8">
                <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">{randomError.title}</h1>
                <div className="text-center"><p className="text-lg">{randomError.description}</p></div>
            </div>
            <Footer />
        </>
    );
}
