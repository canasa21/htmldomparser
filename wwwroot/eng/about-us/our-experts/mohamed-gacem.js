import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "en",
                pageTitle: "Mohamed Cherif Gacem", 
                dateModified: "2021-11-01",
                langToggleUrl: "/fra/about-us/our-experts/mohamed-gacem"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<p>Canadian Nuclear Laboratories Regulatory Program Division</p>
<div className="pull-right col-md-2">
<figure><img src="/images/our-experts/web_experts_MGacem-sq.png" alt="" />
<figcaption>Mohamed Cherif Gacem,<br/>
Senior Project Officer</figcaption>
</figure>
</div>
<p>Mohamed has worked for the Canadian Nuclear Safety Commission (CNSC) since 2008. He serves as licensing lead for the Canadian Nuclear Laboratories (CNL) Chalk River Laboratories (CRL) waste and decommissioning activities. He is responsible for managing the Facility Assessment and Compliance Team, performs technical reviews and assessments, works on public outreach, conducts compliance inspections, and participates in international workshops, technical meetings associated with waste management and decommissioning, and the safety of near surface disposal facilities.</p>
<p>His work is critical to ensuring that licensing submissions and applications are thoroughly assessed and scrutinized to demonstrate the safety of facilities now and in the long-term. Mohamed also ensures they comply with the Canadian regulatory requirements, and international guidance and best practices. The safety of the public and the environment is his top priority.</p>
<h2>Expertise and education</h2>
<p>Mohamed is a mechanical engineer (with a professional engineer designation) and has a credential in nuclear safety. His expertise in nuclear engineering spans over 2 decades in design, construction, commissioning, operation, decommissioning and regulatory oversight of nuclear waste management facilities and activities.</p>
<h2>Current research and projects</h2>
<p><strong>Project</strong>: <a href="/eng/reactors/research-reactors/nuclear-facilities/chalk-river/near-surface-disposal-facility">Canadian Nuclear Laboratories&rsquo; proposed near surface disposal facility (NSDF)</a>. With respect to the CNSC&rsquo;s review of this proposed facility, Mohamed is the licensing lead project officer. Acting as a single point of contact with the Licensee, his role also includes performing technical reviews and assessments of all aspects of waste management and decommissioning, facility design, safety analysis and safety assessments, operating performance, conventional health and safety, and environmental protection.</p>  </div>
</div>  </div>
                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }