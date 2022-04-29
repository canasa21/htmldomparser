import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "en",
                pageTitle: "Faces of the CNSC – Elias Dagher", 
                dateModified: "2021-07-22",
                langToggleUrl: "/fra/about-us/our-experts/elias-dagher"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<div className="row">
<div className="col-md-12">
<div className="col-md-4 ">
<iframe width="380" height="214" src="https://www.youtube.com/embed/n13hCNTIi54" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
<p>
Elias Dagher<br/>
Environmental Risk Assessment Specialist
</p>
</div>
<div className="col-md-12 ">
<p>Elias Dagher has been contributing to environmental protection and radioactive waste management at the CNSC for 12 years and most recently took on the role of Environmental Risk Assessment Specialist. He conducts technical assessments of documents submitted by licensees. These documents include environmental risk assessments, as well as post-closure safety assessments and safety cases for radioactive waste disposal projects. He also supports the development of regulatory documents for environmental protection and radioactive waste management.</p>
<p>Elias notes, “Our work is about ensuring that Canadians are safe from regulated nuclear activities in Canada and will continue to be safe in the future. Canadians should know that our work – whether technical assessments, compliance activities, or research related to environmental protection or radioactive waste disposal – is done in a way that ensures people and the environment around nuclear facilities are safe.”</p>
<p>In his role, Elias has contributed significantly to developing and implementing the CNSC&#39;s regulatory framework for environmental protection – specifically, the framework for controlling releases to the environment. This important framework provides transparency and touches on pollution prevention, licensed release limits, and requirements for adaptive management.</p>
<p><a href="/eng/about-us/history/75-anniversary-faces">Faces of the CNSC</a></p>
</div>
</div>
</div>

                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }