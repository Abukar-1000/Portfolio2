import useAsyncRequest from "../../CustomHooks/useAsyncRequest"
import { supabase } from "../../router"
import { Carousel, ImgSlide } from "../Carousel"
import { Page } from "../Page"
import { LanguageBar, ProjectSourceCode, ProjectText, ProjectTitle } from "../ProjectPage"

export function ImageSegmentation(){

    let response = useAsyncRequest( async setResponse => {
        let { data, error } = await supabase
        .rpc('get_project_data', {
            project_name: "Image Segmentation"
        })

        if (error) console.error(error)
        else console.log(data)

        setResponse({
            data: data,
            error: error
        });
    })
    
    let body = null;
    if (response !== null) {
        let projectData = response.data[0];
        let results = projectData.imgs.map((imgData, index ) => {
            let isResultImg = index < 10 && imgData.name !== "keys2";
            if (isResultImg) {
                return <ImgSlide key = {index} imgData={imgData} status={"pass"} />
            }
        }).filter(slide => {
            return slide !== undefined;
        });

        let fixedKeys = projectData.imgs.filter(imgData => {
            return imgData.name === "keys2";
        })[0];
        let fixedSlide = <ImgSlide key={1} imgData={fixedKeys} status={"pass"} />;
        let sourceFiles = projectData.files;
        const oneHr = 3600 * 1000;
        console.log(response);

        body = <Page>
            <ProjectTitle title={projectData.name} />
            <LanguageBar languages={projectData.langs}/>
            <ProjectText text={projectData.abstract[0]} title={"Overview:"}/>
            <Carousel items={results} title={"Results"} elevation={4} interval={1000} />
            <ProjectText text={projectData.paragraphs[0].paragraph} title={"Observations:"}/>
            <Carousel items={[fixedSlide]} title={"Results"} elevation={4} interval={oneHr} />
            <ProjectSourceCode elevation={4} sourceFiles={sourceFiles}/>
        </Page>
    }
    return (<>
        {body}
    </>)
}