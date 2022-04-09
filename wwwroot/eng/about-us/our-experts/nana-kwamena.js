import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "en",
                pageTitle: "Nana Kwamena", 
                dateModified: "2022-01-04",
                langToggleUrl: "/fra/about-us/our-experts/nana-kwamena"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<p>Environmental Assessment Division</p>
<div className="pull-right col-md-2">
<figure><img src="/images/our-experts/web_experts_NKwamena-sub.png" alt="" />
<figcaption>Nana Kwamena,<br/>
Director</figcaption>
</figure>
</div>
<p>Nana joined the CNSC in 2011 as an Environmental Risk Assessment Officer. Since then, she has held a variety of positions within the Directorate of Environmental and Radiation Protection and Assessment related to environmental assessment, compliance, outreach, environmental risk assessment, and emergency preparedness.</p>
<h2>Expertise and education</h2>
<p>Nana has a Bachelor of Science with honours in chemistry from McGill University and a PhD in atmospheric chemistry from the University of Toronto. She completed her studies with two post-doctoral fellowships in physical chemistry &ndash; one at the University of Bristol in the United Kingdom and another at the University of Toronto.</p>
<h2>Roles and responsibilities</h2>
<p>As Director of the Environmental Assessment Division, Nana leads a team of specialists responsible for ensuring the CNSC meets the requirements of federal legislation in managing <a href="/eng/resources/environmental-protection/index">environmental and impact assessments</a>. Her team coordinates the CNSC&rsquo;s role in these assessments to ensure the environmental effects of proposed projects are examined prior to any licensing action under the <em>Nuclear Safety and Control Act</em>.</p>
<p>Nana and her team also consult with Indigenous Nations and communities, and members of the public, to ensure these groups have the opportunity to present their perspectives on a project.</p>
<h2>Other roles</h2>
<p>Nana completed a 1-year assignment as a Senior Project Officer responsible for leading the CNSC&rsquo;s preparation for the <a href="/eng/resources/international-cooperation/index#review">Integrated Regulatory Review Service</a> mission to Canada in 2019. The mission provided valuable insights on Canada&rsquo;s framework for safety and the CNSC&rsquo;s core regulatory processes.</p>  </div>
</div>  </div>
                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }