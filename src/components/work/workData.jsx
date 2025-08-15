import Img1 from "../../assets/work/Multimodal-RAG.png";
import Img2 from "../../assets/work/img.png";
import Img3 from "../../assets/work/rms.png";
import Img4 from "../../assets/work/chestxrays.png";
import Img5 from "../../assets/work/bias.png";
import Img6 from "../../assets/work/adhd.png";
import Img7 from "../../assets/work/a11y.png";



const WorkData = [

//
//     {
//         title: "LLM-based Document Summarizer",
//         desc: "Developed an LLM-powered summarization tool for enterprise documents, supporting multi-document and query-focused summarization with RAG techniques.",
//         category: "ML/LLM",
//         number: "03.",
//         stack: "Python • OpenAI GPT-4 • Streamlit • Pinecone",
//         url: "https://github.com/example/llm-doc-summarizer",
//         img: Img3
//     },
//
//     {
//         title: "Bhumi Donation",
//         desc: "A Funding platform that facilitates donations to underprivileged students, letting donors choose which children to donate directly to.",
//         category: "Web Dev",
//         number: "04.",
//         stack: "Html5 • CSS • JS • MySql • PHP" ,
//         url: "https://github.com/bearlike/Donation-Website"
//     },
//
//     {
//         title: "Resume Scanner",
//         desc: "Resume Scanner is to analyse the Resume of the student and comparing it with the company's requirements. Buit as part of the placement cell.",
//         category: "Web Dev",
//         number: "05.",
//         stack: "Html5 • CSS • JS • NLP • RAKE" ,
//         url: "https://github.com/Vignesh0404/Resume-Scanner"
//     },
//
//     {
//         title: "Portfolio",
//         desc: "This portfolio website to tell a bit about myself, my interests, showcase my core experiences and the projects that I had the opportunity to work on.",
//         category: "Web Dev",
//         number: "06.",
//         stack: "React JS" ,
//         url: "https://github.com/Vignesh0404/vignesh0404.github.io"
//     },
//

//     /* Mobile Dev */
//     {
//         title: "Emotion Manipulator",
//         desc: "A Mobile application which manipulates 5 different emotions of a person using a single input image. Built as part of the undergrad final year project",
//         category: "Mobile Dev",
//         number: "01.",
//         stack: "Java • Open Cv • Flask • Firebase" ,
//         url: "https://github.com/Vignesh0404/Emotion-Manipulator"
//     },
//
//     {
//         title: "Monument Universe",
//         desc: "Monument Universe is an intuitively designed App that fills in as a virtual tour guide to historically rich monuments in South India.",
//         category: "Mobile Dev",
//         number: "02.",
//         stack: "Flutter • Graph QL • Hasura • Bloc" ,
//         url: "https://github.com/Vignesh0404/Monuments-app"
//     },
//
//     {
//         title: "Quiz Software App",
//         desc: "An simple mobile app built in collabration with my undergrad university for the students to test their technical/aptitude skills.",
//         category: "Mobile Dev",
//         number: "03.",
//         stack: "Dart • Firebase • MySQL" ,
//         url: "https://github.com/Vignesh0404/Quiz-Software-App"
//     },
//
//     {
//         title: "Flutter UI Kit",
//         desc: "As part of the open source development, took up a 30 day app ui kit challange to develop 30 applications which will be useful for fellow devs.",
//         category: "Mobile Dev",
//         number: "04.",
//         stack: "Flutter • Dribble" ,
//         url: "https://github.com/Vignesh0404/Flutter-UI-Kit"
//     },
//
//     {
//         title: "Hospital Management",
//         desc: "A Mobile application for the hospitals and doctors to store and track of patient data, admission and discharge details.",
//         category: "Mobile Dev",
//         number: "05.",
//         stack: "Flutter • MongoDB • Firebase • Flask" ,
//         url: "https://github.com/Vignesh0404/Hospital-Referral-Management-Sys"
//     },
//
//     {
//         title: "Loan Manager",
//         desc: "Loan Manager is a simple, scalable Mobile application built using Flutter which is used to book an appointment for your loans at your doorstep.",
//         category: "Mobile Dev",
//         number: "06.",
//         stack: "Flutter • Google Maps API" ,
//         url: "https://github.com/Vignesh0404/NFN-LABS-LoanManager"
//     },

    /* Case Studies */

    {
        title: "Explainable-AI-for-Chest-X-ray-Images",
        desc: "Demonstrated superior performance of Vision transformers over traditional CNNs in Chest X-ray classification and explained transparency and interpretability of AI models in medical diagnostics.",
        category: "Case Studies",
        number: "01.",
        stack: " Computer Vision" ,
        url: "https://github.com/harinu/A-Comparative-Study-of-Deep-Learning-Models-with-Explainable-AI-for-Chest-X-ray-Images/blob/main/hk25787_Kandasamy.pdf",
        img: Img4
    },

    {
        title: "Bias-Testing-of-Large-Language-models",
        desc: "As part of this study, we evaluated the bias in ChatGPT, using Stereoset and compared the model results with other transformer models",
        category: "Case Studies",
        number: "02.",
        stack: "LLM" ,
        url: "https://github.com/harinu/Bias-Testing-of-Large-Language-models",
        img: Img5
    },

    {
        title: "Virtual-Reality-Game-for-Training-Children-with-ADHD",
        desc: "This project uses the capacity of VR to intervene and train children with ADH",
        category: "Case Studies",
        number: "03.",
        stack: "Virtual Reality" ,
        url: "https://github.com/harinu/A-Virtual-Reality-Game-for-Training-Children-with-ADHD",
        img: Img6 
    },
    /* Projects */
    {
        title: "Multimodal RAG for Technical Documentation",
        desc: "A powerful retrieval-augmented generation (RAG) system designed to process and answer questions about technical documentation, including text, images, diagrams, and code snippets.",
        category: "Gen AI RAG",
        number: "01.",
        stack: "Python • LangChain • ChromaDB • FastAPI • React",
        url: "https://github.com/harinu/Multimodal-RAG-System-for-Technical-Documentation",
        img: Img1
    },

    {
        title: "Stock Advisor Agent",
        desc: "A stock advisor agent powered by AI provides users (with no prior stocks knowledge) with personalised stock investment recommendations based on risk portfolio,news analysis and a dedicated chatbot to answer user queries.",
        category: "Agentic AI",
        number: "02.",
        stack: "Python • Transformers • Flask ",
        url: "https://github.com/harinu/stock-advisor-agent/tree/master/stock_advisor",
        img: Img2
    },


    

    

    

//     /* Case Studies */
//
//
//     {
//         title: "Identifying Mismatches",
//         desc: "Observations without tools of a physical and digital A11y experience.",
//         category: "Case Studies ",
//         number: "01.",
//         stack: "Individual • Accessibility" ,
//         url: "https://drive.google.com/file/d/1z2wazNtGeVxL-uJCwqZZhXzWGvbVzzSM/view?usp=sharing"    ,
//         img: Img7
//     },
//
//     {
//         title: "Spotify",
//         desc: "Curated a study uncovering the pain points and re-designed a Retro themed version.",
//         category: "Case Studies ",
//         number: "02.",
//         stack: "Individual • Figma • Redesign" ,
//         url: "https://tinyurl.com/msfnvpyp",
//         img: Img4
//     },
//
//     {
//         title: "Dine Out",
//         desc: "An application that aims to get discounts every single time users go out to restaurants.",
//         category: "Case Studies ",
//         number: "03.",
//         stack: "Individual • Adobe xd" ,
//         url: "https://www.figma.com/proto/gkwUhpXKTthGtdZXwrCZcg/Dine-Out?page-id=0%3A1&node-id=1%3A2&viewport=526%2C365%2C0.02&scaling=scale-down-width",
//         img: Img5
//     },
//
//     {
//         title: "Quizzer",
//         desc: "An application that helps the students to test their tech/aptitude skills.",
//         category: "Mini work",
//         number: "04.",
//         stack: "Individual • Sketch" ,
//         url: "https://www.figma.com/proto/VnR6IjipVPEhkAG7mjBzbz/Quiz?page-id=0%3A1&node-id=1%3A3&viewport=526%2C365%2C0.02&scaling=scale-down-width"    ,
//         img: Img6
//     },


];

export default WorkData