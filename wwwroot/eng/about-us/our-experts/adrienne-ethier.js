import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "en",
                pageTitle: "Adrienne Ethier", 
                dateModified: "2021-11-01",
                langToggleUrl: "/fra/about-us/our-experts/adrienne-ethier"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<p>Environmental Risk Assessment Division</p>
<div className="pull-right col-md-2">
<figure><img src="/images/our-experts/web_experts_AEthier-sq.png" alt="" />
<figcaption>Adrienne Ethier,<br/>
Environmental Risk Assessment Specialist</figcaption>
</figure>
</div>
<p>Adrienne has worked for the Canadian Nuclear Safety Commission (CNSC) since early 2020. As an environmental risk assessment specialist, she is responsible for assessing potential environmental exposure risks to members of the public and the environment near nuclear facilities and mines.</p>
<p>Adrienne and her team are responsible for carefully reviewing all nuclear projects to determine their potential interactions with, and effects on, the environment and the people living or working in neighbouring communities. She ensures compliance with regulations pertaining to the environmental effects of nuclear projects and facilities at every phase of their lifecycles.</p>
<h2>Expertise and education</h2>
<p>Adrienne holds a PhD focused on the development of aquatic environmental risk assessment modelling tools and the use of stable isotope analyses to reconstruct food webs, aquatic habitat and geochemical profiles. She has since gained a diverse professional background in the nuclear industry in areas of environmental risk assessment, risk communication, emergency preparedness, safety analysis, and environmental and effluent monitoring. She currently serves as an adjunct professor in the Department of Earth and Environmental Science at the University of Ottawa and as the Vice-Chair of the CSA Group&rsquo;s team responsible for CSA N288.6, <em>Environmental Risk Assessments at Class I Nuclear Facilities and Uranium Mines and Mills</em> &ndash; a standard that CNSC nuclear licensees must comply with. In addition, she is a member of the CNSC advisory groups on Indigenous knowledge and perceived risk.</p>
<h2>Current research and projects</h2>
<p><strong>Project</strong>: <a href="/eng/reactors/research-reactors/nuclear-facilities/chalk-river/near-surface-disposal-facility">Canadian Nuclear Laboratories&rsquo; proposed near surface disposal facility (NSDF)</a>. With respect to the CNSC&rsquo;s review of this proposed facility, Adrienne provides expert technical leadership regarding the proposed project&rsquo;s predicted effects on the public and the environment during construction, operation and decommissioning. She does this in addition to ensuring that the project meets all applicable regulatory requirements.</p>  </div>
</div>  </div>
                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }