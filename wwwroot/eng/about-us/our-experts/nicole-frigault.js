import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "en",
                pageTitle: "Nicole Frigault", 
                dateModified: "2022-01-17",
                langToggleUrl: "/fra/about-us/our-experts/nicole-frigault"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<div className="row">
<p>Environmental Assessment Division</p>
<div className="pull-right col-md-2"> <img alt="Nicole Frigault" src="/images/our-experts/web_experts_NFrigault-sub.png" />
<p> Nicole Frigault,<br/>
Environmental Assessment Specialist</p>
</div>
<p>Nicole has worked for the Canadian Nuclear Safety Commission (CNSC) since 2008. As an environmental assessment specialist, she leads and manages environmental assessments for major projects, from the proposal phase through the entire lifecycle of a project or facility.</p>
<p>Among her many responsibilities, Nicole prepares environmental overviews; tracks key project milestones; and coordinates with other federal authorities, provincial government departments, as well as the public and Indigenous Nations and communities. She is responsible for identifying potential project impacts and developing mitigation measures, as well as preparing environmental assessment reports under the <em>Canadian Environmental Assessment Act, 2012</em>, the <em>Impact Assessment Act</em>, and the <em>Nuclear Safety and Control Act.</em></p>
<h2>Expertise and education</h2>
<p>Nicole holds a bachelor of science in biology and environmental studies from Saint Mary&rsquo;s University. As a student, she spent time in the mining industry where she worked on environmental monitoring and water treatment plant operation and maintenance, and conducted daily analytical laboratory tests. She started her career as an environment officer with Environment and Climate Change Canada working on climate change issues and later in the remediation of contaminated sites. She then moved to Public Works and Government Services Canada as an environmental assessment officer, where she provided expertise on several major federal projects across various departments and conducted numerous environmental studies.</p>
<h2>Current research and projects</h2>
<p><strong>Project:</strong> <a href="/eng/reactors/research-reactors/nuclear-facilities/chalk-river/near-surface-disposal-facility"><strong>Canadian Nuclear Laboratories&rsquo; proposed near surface disposal facility (NSDF)</strong></a><strong>.</strong> With respect to the CNSC&rsquo;s review of this proposed facility, Nicole has been the environmental assessment lead since that process began in 2016. She will continue to assess potential environmental impacts in the proposal stage and, if a licence is granted, she will continue her role of ensuring that all mitigation and follow-up measures and commitments made by the licensee are adhered to for the lifetime of the project.</p>  </div>
</div>  </div>
                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }