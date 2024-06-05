import { useEffect, useState } from "react";

export default function useScript(src, targetElementClass){

    if (!src.length) {
        throw Error("No source provided.");
    }

    // let [url, setUrl] = useState(src);
    useEffect(() => {

        const scriptElement = document.createElement("script");
        const parentElement = document.querySelector(targetElementClass);

        scriptElement.src = src;
        scriptElement.async = true;
        parentElement.appendChild(scriptElement);

        return () => {
            parentElement.removeChild(scriptElement);
        }
    }, [src]);
}