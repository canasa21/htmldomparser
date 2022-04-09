import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "en",
                pageTitle: "Assessment and interview tips", 
                dateModified: "2022-02-28",
                langToggleUrl: "/fra/about-us/careers-at-cnsc/how-to-prepare"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<div className="row">
<div className="equalize">
<div className=" col-md-4 ">
<p><a href="/eng/about-us/careers-at-cnsc/how-to-apply#sec1">1. Create a profile</a></p>
</div>
<div className=" col-md-4">
<p><a href="/eng/about-us/careers-at-cnsc/how-to-apply#sec2">2. Submit an application</a></p>
</div>
<div className=" col-md-4 ">
<p><a href="/eng/about-us/careers-at-cnsc/how-to-apply#sec3">3. Identify accommodations</a></p>
</div>
</div>
<div className="equalize">
<div className=" col-md-4 ">
<p><a href="/eng/about-us/careers-at-cnsc/how-to-apply#sec4">4. Review the hiring conditions</a></p>
</div>
<div className=" col-md-4">
<p><a href="#sec5">5. Prepare for the assessment</a></p>
</div>
<div className=" col-md-4 ">
<p><a href="#sec6">6. After the assessment</a></p>
<h2 id="sec5">5. Prepare for the assessment</h2>
<h3>Before the interview or written test</h3>
<ul>
<li>Analyze the job advertisement to identify the essential qualifications that will be assessed.</li>
<li>Think of past accomplishments that could be used to illustrate your readiness for this job. Be prepared to share examples from your past experience.</li>
<li>Anticipate potential questions and prepare for the assessment based on the <a href="/eng/about-us/careers-at-cnsc/key-behavioral-competencies">CNSC key behavioural competencies</a>.</li>
<li>Familiarize yourself with key CNSC documents (e.g., Departmental Plan, governance and structure) in the context of the job you are seeking.</li>
<li>Talk to people who are knowledgeable about the position, if possible.</li>
</ul>
<h3>The interview</h3>
<ul>
<li>Listen attentively to questions and ask for clarification if necessary.</li>
<li>Take notes and reflect on your answer before responding to questions. </li>
<li>Structure your response. The STAR method (Situation, Action, Task, Result) is a great way to structure your answers to interview questions.</li>
<li>Ask questions at the end of the interview.</li>
</ul>
<h3>The written test</h3>
<ul>
<li>Read the instructions carefully.</li>
<li>Before you start, skim through the entire package and allocate time frames for answering questions. </li>
<li>Jot down key words to incorporate into your answer; this will help you organize your ideas.</li>
<li>Start with the questions that are the easiest for you &ndash; don&rsquo;t lose track of time.</li>
</ul>
<h2 id="sec6">6. After the assessment</h2>
<p>Once the assessment is complete, the board members will evaluate all candidates. The hiring manager may check references to validate and complement the competencies  being assessed.</p>
<p><strong>Tip:</strong> If you are asked to provide references, be sure to contact your references beforehand so they will be prepared to speak about your experience!</p>
<p>The hiring manager selects a candidate from among all qualified candidates based on current and anticipated needs. The name of other qualified candidates is kept for possible consideration to fill similar positions.</p>
<h3>Before the letter of offer</h3>
<ul>
<li><strong>Security: </strong>Effective July 2015, the Government of Canada requires all employees obtaining, renewing or upgrading a security clearance to be fingerprinted. Booking an appointment in a timely
manner will assist Security Services in expediting your clearance update (if required).</li>
<li><strong>Official languages: </strong>If the position is bilingual, you may have to be tested if you have no valid second language evaluation (SLE) results, if your SLE results are expired, or if the position requires a higher level of proficiency. (Note: SLE results are valid for 5 years.)</li>
<li><strong>Medical: </strong>Some positions require a medical examination due to the nature of the work and to ensure the safety of all workers. The HR assistant will provide you with details in order to schedule your appointment with a physician.</li>
</ul>  </div>
</div>  </div>
                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }