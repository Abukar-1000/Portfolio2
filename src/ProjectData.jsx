import { Project } from './Components/Project';
import { ProjectContainer } from './Components/Containers';


const data = [
    {
        key: 0,
        field:"Computer Vision",
        projects: [
            {
                title: "Image Segmentation",
                description: "Precisely segment your images by uncovering intensity patterns and transforming data into clear, actionable visuals."
            },
            {
                title: "Connected Components",
                description: "Group and identify connected regions in your images for seamless object counting and pattern recognition."
            },
            {
                title: "Geo-Feature Computation",
                description: "Extract geometric insights like area, perimeter, and centroids to power advanced image analysis."
            },
            {
                title: "Corner Detection",
                description: "Spot crucial features and edges in images with unmatched accuracy for smarter visual analysis."
            },
            {
                title: "Edge Detection",
                description: "Highlight sharp transitions and boundaries in images for smarter object recognition and motion tracking."
            },
            {
                title: "Histogram Equalization",
                description: "Enhance contrast and clarity in your images with advanced histogram equalization techniques"
            },
        ]

    },
    {
        key: 12,
        field:"Networking",
        projects: [
            {
                title: "Socket File Transfer",
                description: `
                    This project demonstrates how computers communicate to transfer files over a network using sockets, the backbone of internet communication.
                `
            },
            {
                title: "Enhanced Client Communication",
                description: "This project enables real-time messaging and reliable file sharing between multiple clients using a hybrid UDP and TCP protocol architecture for seamless communication."
            },
            {
                title: "Hybrid P2P Network",
                description: "This project combines centralized organization with decentralized resilience, enabling efficient client interactions, resource sharing, and real-time communication in a flexible peer-to-peer network."
            },
            {
                title: "Hybrid Resource Network",
                description: `
                This project integrates centralized directories with decentralized peer-to-peer communication to enable seamless resource sharing, 
                fault tolerance, and scalable file transfers using advanced networking techniques.
                `
            }
        ]
    },
    {
        key: 2,
        field:"Machine Learning",
        projects: []
    },
    {
        key: 3,
        field:"Full Stack Development",
        projects: []
    },
    {
        key: 3,
        field:"Back End Development",
        projects: []
    },
    {
        key: 4,
        field:"Security",
        projects: []
    },
    {
        key: 5,
        field:"Data Science",
        projects: []
    },
]

const placeHolder = [1,2,3,4,5,6].map((key) => (
    <Project
        key={key} 
        myTitle = {"Liscence Plate Bluring"} 
        action={"view"} />
))


export const allProjectData = [
    {
        key: 0,
        field:"Computer Vision",
        projects: <>
        <ProjectContainer>
            {
                data[0].projects.map((p, i) => (
                    <Project
                        key={i}
                        myTitle={p.title}
                        description={p.description}
                        action="view"
                    />
                ))
            }
        </ProjectContainer>
        </>
    },
    {
        key: 1,
        field:"Networking",
        projects: <>
        <ProjectContainer>
            {
                data[1].projects.map((p, i) => (
                    <Project
                        key={i}
                        myTitle={p.title}
                        description={p.description}
                        action="view"
                    />
                ))
            }
        </ProjectContainer>
        </>
    },
    {
        key: 2,
        field:"Machine Learning",
        projects: <>
        <ProjectContainer>
            {placeHolder}
        </ProjectContainer>
        </>
    },
    {
        key: 3,
        field:"Full Stack Development",
        projects: <>
        <ProjectContainer>
            {placeHolder}
        </ProjectContainer>
        </>
    },
    {
        key: 4,
        field:"Back End Development",
        projects: <>
        <ProjectContainer>
            {placeHolder}
        </ProjectContainer>
        </>
    },
    {
        key: 5,
        field:"Security",
        projects: <>
        <ProjectContainer>
            {placeHolder}
        </ProjectContainer>
        </>
    },
    {
        key: 6,
        field:"Data Science",
        projects: <>
        <ProjectContainer>
            {placeHolder}
        </ProjectContainer>
        </>
    },
]
