import Image from "next/image";
import Box from "./Box";

function CTA(){
    return(
        <Box styles="w-5/6 md:w-2/3 sm:w-full translate-x-full opacity-0">
            <Image className="mx-auto" src="/Rick_and_Morty.svg" width={700} height={700} alt="Rick_and_Morty_title" />
        </Box>             
    )
}

export default CTA;