import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "en",
                pageTitle: "Faces of the CNSC – Eastern Regional Office", 
                dateModified: "2021-07-22",
                langToggleUrl: "/fra/about-us/our-experts/eastern-regional-office"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<div className="grid-12">
<div className="col-md-22">
<div className="col-md-6 ">
<img alt="" src="/images/our-experts/web-faces-eastern.png"/>
<p>
Eastern Regional Office
</p>
</div>
<div className="col-md-12 ">
<p>The CNSC&#39;s Eastern Regional Office (ERO) is located in Laval, Quebec. Established in 1980, it&#39;s the organization&#39;s first regional office and has been providing bilingual services from the start. Ensuring that Francophone licensees and members of the public are addressed in the official language of their choice was a primary reason for establishing this office in Quebec. The region covers territory east of Ottawa, the province of Quebec, the Maritimes, Newfoundland and Labrador, and Nunavut.</p>
<p>ERO team members oversee licensees who handle and possess nuclear substances. This covers a wide variety of commercial, industrial, medical and research uses. The team also ensure regulatory compliance for all licensed activities involving nuclear substances, radiation devices, and transportation.</p>
<p>Regional offices have a significant impact on the CNSC&#39;s ability to regulate nuclear substances. For licensees in eastern Canada, knowing they can contact regional inspectors directly is key to building a relationship of trust. A nearby, accessible office offers reassurance of the CNSC&#39;s commitment to safeguarding the environment and all Canadians.</p>
<p><a href="/eng/about-us/history/75-anniversary-faces">Faces of the CNSC</a></p>
</div>
</div>

                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }