import { useEffect, useState } from "react";

export default function useScript(src, targetElementClass){

    if (!src.length) {
        throw Error("No source provided.");
    }

    // let [url, setUrl] = useState(src);
    useEffect(() => {

        try {
            const scriptElement = document.createElement("script");
            const parentElement = document.querySelector(targetElementClass);

            if (scriptElement.src !== src && src) {
                scriptElement.src = src;
                scriptElement.async = true;
                parentElement.appendChild(scriptElement);
                // scriptElement.childNodes = [scriptElement]
            }


            return () => {
                parentElement.removeChild(scriptElement);
            }
        } catch (err) {
            // handle later
            
        }

    }, [src]);
}