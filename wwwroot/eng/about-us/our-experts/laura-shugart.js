import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "en",
                pageTitle: "Faces of the CNSC – Laura Shugart", 
                dateModified: "2021-07-22",
                langToggleUrl: "/fra/about-us/our-experts/laura-shugart"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<div className="row">
<div className="col-md-12">
<div className="col-md-4 ">
<iframe width="380" height="214" src="https://www.youtube.com/embed/WE5L7xfaFQQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
<p>
Laura Shugart<br/>
Project Officer
</p>
</div>
<div className="col-md-12 ">
<p>As a Project Officer in the Regulatory Operations Coordination Division, Laura Shugart helps to administer the Inspector Training Qualification Program. This program ensures that inspectors gain and maintain the knowledge, skills and certification they require to keep both Canadians and the environment safe.</p>
<p>The CNSC has the authority to train and certify inspectors and we currently have approximately 180 certified inspectors. These inspectors are critical in keeping the public and environment safe as they work to verify licensees are adhering to the regulations in place.   </p>
<p>Laura notes, “If inspectors are not adequately trained for their service area, they won&#39;t have the competencies required to conduct effective inspections, putting Canadians and the environment at risk”.</p>
<p>Laura has been with the organization for 2 years, during which time she also worked with the Strategic Communications Directorate as a Communications Coordinator.</p>
<p><a href="/eng/about-us/history/75-anniversary-faces">Faces of the CNSC</a></p>
</div>
</div>
</div>

                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }