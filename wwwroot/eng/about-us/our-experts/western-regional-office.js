import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "en",
                pageTitle: "Faces of the CNSC &ndash; Western Regional Office", 
                dateModified: "2021-07-22",
                langToggleUrl: "/fra/about-us/our-experts/western-regional-office"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<div className="row">
<div className="col-md-8">
<div className="col-md-4 ">
<img alt="" src="/images/our-experts/web-faces-western.png"/>
<p>
Western Regional Office
</p>
</div>
<div className="col-md-8 ">
<p>The Western Regional Office, located in Calgary, is celebrating 40 years of service as the main base of operations for inspections carried out in Western Canada. Six of the 9 staff members at this location are inspectors. The majority of organizations in this region use radioactive materials for industrial purposes, and CNSC inspectors have a very diverse group of licensees to inspect and regulate.</p>
<p>Have you ever wondered how pop or beer cans are filled to the correct level each time on an assembly line, or how road builders determine the correct density of asphalt? Or, what about how the integrity of a gas pipeline is evaluated during construction, or how hospitals and clinics can use nuclear materials for medical imaging? These are just some of the many applications of nuclear substances and great examples of how the important work carried out by CNSC&apos;s compliance inspectors factor into everyday life for Canadians. </p>
<p>This regional office assesses licensee radiation protection programs and conducts inspections to verify compliance with health, safety, security and environmental regulations. The staff&apos;s work assures the public that those who use nuclear substances do so in a manner that protects the environment, their workers and the public.</p>
<p><a href="/eng/about-us/history/75-anniversary-faces">Faces of the CNSC</a></p>
</div>  </div>
                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }