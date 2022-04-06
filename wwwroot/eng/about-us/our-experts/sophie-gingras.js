import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "en",
                pageTitle: "Sophie Gingras", 
                dateModified: "2021-03-03",
                langToggleUrl: "/fra/about-us/our-experts/sophie-gingras"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<p>A long-time CNSC employee, Sophie Gingras has been at CNSC for the past 20 years. In this time, Sophie has worked in numerous branches doing project management, technical writing and reactor chemistry. In her current role as a Chemistry Control Technical Specialist in the CNSC&rsquo;s Systems Engineering Division, she evaluates chemistry compliance during normal operations at nuclear power plants and other facilities. This encompasses anything from technical assessments to compliance inspections at nuclear power plants.</p>  <p>&ldquo;I am verifying if, on the chemistry side of things, the licensees operate safely. Documentation and data are examined, and many inspections are completed, to evaluate compliance with the licence and CSA standards related to chemistry.&rdquo;</p>  <p>By monitoring licensee activities, Sophie is helping to ensure the health and safety of Canadians and the environment. Before joining the CNSC, Sophie completed a master&rsquo;s degree in chemical engineering and worked in reactor chemistry at Atomic Energy of Canada Limited.</p>

                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }