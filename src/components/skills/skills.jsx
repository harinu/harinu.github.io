import React from 'react';

const Skills = () => {
  return (
    <section className="services container section" id="skills">
      <h2 className='section__title'>TECHNICAL SKILLS</h2>
      <div className='skills_text' style={{ maxWidth: '700px', margin: '0 auto 2rem 0', textAlign: 'left', fontSize: '1.1rem', lineHeight: '1.6', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", color: 'white', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div style={{ backgroundColor: '#444', borderRadius: '12px', padding: '10px 20px', cursor: 'pointer', userSelect: 'none' }}><span style={{ fontWeight: 'bold', color: '#6c63ff' }}>Languages / Frameworks:</span> Python, R, C, SQL · PyTorch · Flask, FastAPI · REST APIs · Postman · unittest · pytest</div>
        <div style={{ backgroundColor: '#444', borderRadius: '12px', padding: '10px 20px', cursor: 'pointer', userSelect: 'none' }}><span style={{ fontWeight: 'bold', color: '#6c63ff' }}>Cloud / Tools :</span> AWS, AWS CDK, Snowflake, Docker, Git, GitHub Actions · Airflow, MLflow</div>
        <div style={{ backgroundColor: '#444', borderRadius: '12px', padding: '10px 20px', cursor: 'pointer', userSelect: 'none' }}><span style={{ fontWeight: 'bold', color: '#6c63ff' }}>Deep Learning:</span> Transformers · LLM Finetuning, Prompt Engineering, LangChain</div>
        <div style={{ backgroundColor: '#444', borderRadius: '12px', padding: '10px 20px', cursor: 'pointer', userSelect: 'none' }}><span style={{ fontWeight: 'bold', color: '#6c63ff' }}>Search/Retrieval:</span> ElasticSearch, Apache Lucene · Inverted Index, TF-IDF, BM25 · Approximate Nearest Neighbors (ANN), Dense Retrieval, Retrieval-Augmented Generation (RAG)</div>
      </div>
    </section>
  )
}

export default Skills
