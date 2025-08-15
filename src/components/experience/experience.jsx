Fimport React from 'react';

const Experience = () => {
  return (
    <section className="experience container section" id="experience">
      <h2 className="section__title">Experience</h2>
      <div className="experience_content">
        <div className="experience_item">
          <h3>Software Engineer <span>Sunnyvale, CA</span></h3>
          <h4>Tata Consultancy Services</h4>
          <p>May 2024 - Present</p>
          <ul>
            <li>Built a generative LLM-powered assistant that simulates agent-like behavior by generating semantic metadata and natural-language descriptions for Snowflake tables, enabling conversational data discovery and reasoning across metadata layers.</li>
            <li>Designed a scalable lineage tracing system using Snowflake metadata, naming conventions, and query history to automate cross-layer table relationships—reducing manual mapping by 72% and supporting intelligent assistant workflows.</li>
            <li>Implemented production-grade anomaly detection using Temporal Fusion Transformer, Isolation Forest, and statistical baselines, with visual diagnostics that reduced false positives by 35% in data quality monitoring systems.</li>
          </ul>
        </div>
        <div className="experience_item">
          <h3>Machine Learning Research <span>Austin, TX</span></h3>
          <h4>AI Health Lab, University of Texas at Austin</h4>
          <p>Aug 2023 - May 2024</p>
          <ul>
            <li>Led ViT-based model development using PyTorch to classify chest X-rays; achieved 0.9932 AUC on large-scale clinical datasets</li>
            <li>Integrated multimodal inputs (text from discharge summaries + image embeddings) to enhance patient outcome forecasting by 93%</li>
            <li>Led development of a predictive LOS model, reducing patient stay by 10% and readmissions by 15%, driving cost savings and workflow improvements</li>
          </ul>
        </div>
        <div className="experience_item">
          <h3>Machine Learning Engineer Intern <span>Sunnyvale, CA</span></h3>
          <h4>Intuitive Surgical</h4>
          <p>May 2022 - August 2022</p>
          <ul>
            <li>Streamlined the diagnostic process for colonoscopy videos and images by engineering an end-to-end ML pipeline using Kubeflow and AWS services, including the integration of advanced vision-transformer based landmark detection algorithms</li>
            <li>Enhanced medical image processing speed and precision by handling snapshot data in Amazon S3 within the pipeline, resulting in a 40% boost in pipeline efficiency</li>
          </ul>
        </div>
        <div className="experience_item">
          <h3>Machine Learning Engineer Intern <span>Coimbatore, India</span></h3>
          <h4>Collaborative Research and Dissemination</h4>
          <p>Jan 2021 - Jul 2021</p>
          <ul>
            <li>Spearheaded the enhancement of social media monitoring by identifying and classifying problematic content across 50,000 posts and articles; achieved dataset expansion by 30% through weak supervision techniques using Snorkel AI</li>
            <li>Implemented a BERT-based ensemble learning approach to refine content moderation with an F1 score of 0.83</li>
          </ul>
        </div>
        <div className="experience_item">
          <h3>Data Science Intern <span>Coimbatore, India</span></h3>
          <h4>Robert Bosch Inc.</h4>
          <p>May 2019 - Nov 2019</p>
          <ul>
            <li>Deployed a comprehensive data and reporting infrastructure using Power BI and SQL, enhancing real-time analysis of product performance and business key performance indicators (KPIs), which improved the organization’s data analysis capabilities</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;