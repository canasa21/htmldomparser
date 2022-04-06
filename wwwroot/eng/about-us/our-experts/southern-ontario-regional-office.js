import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "en",
                pageTitle: "Faces of the CNSC &ndash; Southern Ontario Regional Office", 
                dateModified: "2021-07-22",
                langToggleUrl: "/fra/about-us/our-experts/southern-ontario-regional-office"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<div className="grid-12">
<div className="col-md-22">
<div className="col-md-6 ">
<img alt="" src="/images/our-experts/web-faces-southern-ontario.png"/>
<p>
Southern Ontario Regional Office
</p>
</div>
<div className="col-md-12 ">
<p>The CNSC has had a regional presence in southern Ontario for 43 years. The Southern Ontario Regional Office (SORO) is the base of the Operations Inspection Division in the Greater Toronto Area and conducts regulatory activities within the provinces of Manitoba, Saskatchewan and most of Ontario. This vast region represents approximately half the population of Canada and includes a high concentration of licences of all types: medical, research and industrial.  </p>
<p>SORO staff oversee compliance activities for several hundred licensees in this territory. This regional office differs from others as it oversees a higher proportion of medium-risk licensed locations and activities, including nuclear gauges and nuclear medicine, as well as specialized nuclear industry research and isotope production activities, such as those conducted at McMaster University, Isologic and the Saskatchewan Research Council. The office has 9 staff members, who conduct inspections in hospitals and pharmacies that provide radiopharmaceuticals to thousands of Canadians every day. </p>
<p>As the CNSC&apos;s eyes and ears on the ground, SORO staff are primarily front-line, public-facing employees of the CNSC. Being in close proximity to licensees enables the team to respond quickly and allows for more proactive promotion of our mandate. </p>
<p>The public and the environment are protected, thanks to these SORO experts who regulate a massive region and hold licensees accountable for the safe use of nuclear materials.</p>
<p><a href="/eng/about-us/history/75-anniversary-faces">Faces of the CNSC</a></p>
</div>
</div>

                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }