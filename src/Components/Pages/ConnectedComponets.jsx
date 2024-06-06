import useAsyncRequest from "../../CustomHooks/useAsyncRequest"
import { supabase } from "../../router"
import { Carousel, HiddenContent, ImgSlide } from "../Carousel"
import { Page } from "../Page"
import { LanguageBar, ProjectSourceCode, ProjectText, ProjectTitle } from "../ProjectPage"

export function ConnectedComponets() {

    let response = useAsyncRequest( async setResponse => {
        let { data, error } = await supabase
        .rpc('get_project_data', {
            project_name: "Connected Components"
        })

        if (error) console.error(error)
        else console.log(data)

        setResponse({
            data: data,
            error: error
        });
    });

    let body = null;
    if (response !== null) {
        let projectData = response.data[0];
        let results = projectData.imgs.map((imgData, index ) => {
            let isResultImg = imgData.name !== "pillsect2CompAnalysis";
            if (isResultImg) {
                return <ImgSlide key = {index} imgData={imgData} status={"pass"} />
            }
        }).filter(slide => {
            return slide !== undefined;
        });

        let fixedKeys = projectData.imgs.filter(imgData => {
            return imgData.name === "pillsect2CompAnalysis";
        })[0];

        let fixedSlide = <ImgSlide key={1} imgData={fixedKeys} status={"pass"} />;
        let sourceFiles = projectData.files;
        const oneHr = 3600 * 1000;
        console.log(response);

        body = <Page>
            <ProjectTitle title={projectData.name} />
            <LanguageBar languages={projectData.langs}/>
            <ProjectText text={projectData.abstract[0]} title={"Overview:"}/>
            <Carousel items={results} title={"Results"} elevation={4} interval={3000} />
            <ProjectText text={projectData.paragraphs[0].paragraph} title={"Observations:"}/>
            <Carousel items={[fixedSlide]} title={"Results"} elevation={4} interval={oneHr} />
            
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