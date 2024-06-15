import Link from "next/link";
import Box from "./Box";

function Footer(){
    return (
        <Box styles="-translate-x-full opacity-0">
        <footer className="h-48 border border border-0 bg-white px-4 grid content-center">
        <h1 className="text-slate-400 text-center">Made with Love </h1>
        <Link className="text-slate-400 text-center hover:text-underline" href="https://github.com/TheDrifter408">
            Github
        </Link>
        </footer>
        </Box>
    )
}

export default Footer;