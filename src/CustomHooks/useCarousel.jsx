import { useEffect, useState } from "react";

/**
 * 
 * @param {Array} dataArray 
 * @param {Int} interval 
 * @returns {any}
 * 
 */
export default function useCarousel(dataArray, interval){

    let noDataWasProvided = dataArray.length < 1    ||
                            dataArray === undefined ||
                            dataArray === null;
    
    
    if (noDataWasProvided) {
        throw Error("Carousel data is empty.");
    }

    let [currentState, setCurrentState] = useState({
        index: 0,
        value: dataArray[0]
    });
    
    useEffect(() => {
        let intervalId = setInterval(() => {
            
            setCurrentState(prevState => {
                let nextIndex = prevState.index++ % dataArray.length;
                return {
                    index: nextIndex,
                    value: dataArray[nextIndex]
                };
            })
        }, interval)

        console.log(`[ Inteval ${intervalId}, delay ${interval} ]`);
        return () => { clearInterval(intervalId); }
    }, [currentState.value]);
    
    return currentState.value;
}