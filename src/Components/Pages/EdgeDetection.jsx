import { useEffect, useRef } from "react"
import useAsyncRequest from "../../CustomHooks/useAsyncRequest"
import { supabase } from "../../router"
import { Carousel, HiddenContent, ImgSlide } from "../Carousel"
import { Page } from "../Page"
import { LanguageBar, ProjectSourceCode, ProjectText, ProjectTitle } from "../ProjectPage"

export function EdgeDetection() {
    let response = useAsyncRequest( async setResponse => {
        let { data, error } = await supabase
        .rpc('get_project_data', {
            project_name: "Edge Detection"
        })

        if (error) console.error(error)
        else console.log(data)

        setResponse({
            data: data,
            error: error
        });
    });

    let results = [];

    let body = null;
    let carousel1Ref = useRef(null);
    let carousel2Ref = useRef(null);

    if (response !== null) {
        let projectData = response.data[0];
        results = projectData.imgs.map((imgData, index ) => {
            return <ImgSlide key = {index} parentRef={carousel1Ref} imgData={imgData} status={imgData.success} />
        })

        let fixedImgs = projectData.imgs.map((imgData, index) => {
            let isFixedImg = (
                imgData.name === "hinges2EdgeDetection" || 
                imgData.name === "pillsect2EdgeDetection" ||
                imgData.name === "keys2(.6)EdgeDetection"
            );

            if (isFixedImg) {
                return <ImgSlide key = {index * 5} parentRef={carousel2Ref} imgData={imgData} status={imgData.success} />
            } 
        }).filter(imgComponent => {
            return imgComponent !== undefined;
        });
        
        let sourceFiles = projectData.files;
        console.log(response);
        console.log("ref", results, fixedImgs);

        let carousel1 = <Carousel ref={carousel1Ref} items={results} title={"Results"} elevation={4} interval={3000} />;
        let carousel2 = <Carousel ref={carousel2Ref} items={fixedImgs} title={"Results"} elevation={4} interval={3000} />;
        body = <Page>
            <ProjectTitle title={projectData.name} />
            <LanguageBar languages={projectData.langs}/>
            <ProjectText text={projectData.abstract[0]} title={"Overview:"}/>
            {carousel1}
            <ProjectText text={projectData.paragraphs[0].paragraph} title={"Observations:"}/>
            {carousel2}
            <HiddenContent
                messages={[
                    "View source",
                    "Display source code",
                    "See implementation"
                ]}

                btnText={"Show"}
                interval={3000}
                elevation={4}
            >
                <ProjectSourceCode elevation={4} sourceFiles={sourceFiles}/>
            </HiddenContent>
        </Page>
    }
    return (<>
        {body}
    </>)
}