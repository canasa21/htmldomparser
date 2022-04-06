import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "en",
                pageTitle: "Faces of the CNSC – Richard Dubois", 
                dateModified: "2021-07-22",
                langToggleUrl: "/fra/about-us/our-experts/richard-dubois"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<div className="grid-12">
<div className="col-md-22">
<div className="col-md-6 ">
<img alt="" src="/images/our-experts/web-faces-richard-dubois.png"/>
<p>
Richard Dubois<br/>
Chief Security Officer
</p>
</div>
<div className="col-md-12 ">
<p>Richard Dubois plays a critical role in establishing a secure and safe work environment for all CNSC employees. As Chief Security Officer, he provides strategic advice, management and leadership for corporate security programs. In the event of a non-nuclear emergency, Richard and his team are responsible for effectively managing the CNSC&#39;s business continuity plan and for providing guidance to the organization to ensure continuity of critical services.</p>
<p>In this role, Richard identifies organizational security risks to protect employees and assets from threats such as malicious actors or cyber criminals. He works in collaboration with lead federal security agencies to understand new and emerging threats within the Government of Canada energy portfolio. </p>
<p>“What I&#39;m most proud of is the collaboration and teamwork involved to quickly update and implement our business continuity plan at the start of the pandemic to ensure critical business services were not impacted. I believe we made a real difference,” says Richard.</p>
<p><a href="/eng/about-us/history/75-anniversary-faces">Faces of the CNSC</a></p>
</div>
</div>

                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }