import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "en",
                pageTitle: "Faces of the CNSC – Kiza Sauvé", 
                dateModified: "2021-07-22",
                langToggleUrl: "/fra/about-us/our-experts/faces-kiza-sauve"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<div className="row">
<div className="col-md-8">
<div className="col-md-4 ">
<iframe width="380" height="214" src="https://www.youtube.com/embed/ppOR6fJ_mzE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<p>
Kiza Sauvé<br/>
Director, Health Sciences and Environmental Compliance Division
</p>
</div>
<div className="col-md-8 ">
<p>For over 20 years, Kiza has been a valuable part of the CNSC, first as an intern and now as Director of the Health Sciences and Environmental Compliance Division. She leads a multi-faceted team of technical staff who ensure that environmental protection programs are followed at CNSC-licensed nuclear facilities. The team also conducts independent environmental sampling around these nuclear facilities, engages in health science research and educates both workers and the public on the health effects of radiological risks. </p>
<p>“We contribute directly to the mandate in terms of health research and environmental compliance and monitoring to ensure the protection of the environment and people. We also heavily contribute to the dissemination of scientific and technical information in clear, public-friendly language,” says Kiza. </p>
<p>Part of the work of Kiza and her team falls under the Independent Environmental Monitoring Program (IEMP). The IEMP is a direct, tangible program Canadians can look at to see the results of environmental sampling in their communities. The program also allows the team to go into communities to talk about all things CNSC.</p>
<p><a href="/eng/about-us/history/75-anniversary-faces">Faces of the CNSC</a></p>
</div>  </div>
                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }