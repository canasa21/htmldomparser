import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "en",
                pageTitle: "Matthew Herod", 
                dateModified: "2021-11-01",
                langToggleUrl: "/fra/about-us/our-experts/matthew-herod"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<p>Canadian Nuclear Laboratories Regulatory Program Division</p>
<div className="pull-right col-md-2">
<figure><img src="/images/our-experts/web_experts_MHerom-sq.png" alt="" />
<figcaption>Matthew Herod,<br/>
Senior Project Officer</figcaption>
</figure>
</div>
<p>Matthew started at the Canadian Nuclear Safety Commission (CNSC) in 2015. As a senior project officer, he is the licensing lead for the Nuclear Power Demonstration <em>In Situ</em> Decommissioning project, and also serves as back-up on several other important projects, such as the proposed near surface disposal facility (NSDF). He performs and reviews technical assessments, conducts outreach with a wide variety of stakeholders, and engages with the international regulatory community.</p>
<p>Matthew ensures that licence applications for radioactive waste disposal are evaluated rigorously and are grounded in the best and most complete scientific information. His work ensures that long-term safety is appropriately evaluated following both Canadian and international requirements, guidance and best practices.</p>
<h2>Expertise and education</h2>
<p>Matthew holds a PhD in earth science from the University of Ottawa and a BScH in geology from Queen&rsquo;s University. He is an adjunct professor in the Department of Earth and Environmental Science at the University of Ottawa and is affiliated with the university&rsquo;s Andr&eacute; E. Lalonde Accelerator Mass Spectrometry Lab, where he supervises 3 graduate students. He is also a CNSC inspector and a registered professional geoscientist.</p>
<h2>Current research and projects</h2>
<p><strong>Project</strong>: <a href="/eng/reactors/research-reactors/nuclear-facilities/chalk-river/near-surface-disposal-facility">Canadian Nuclear Laboratories&rsquo; proposed near surface disposal facility (NSDF)</a>. With respect to the CNSC&rsquo;s review of this proposed facility, Matthew holds a dual role as both a licensing and a technical expert. He leads outreach and contributes to the technical assessment of the licensee&rsquo;s submission with respect to waste acceptance criteria, waste characterization, geology aspects, and long-term safety.</p>  </div>
</div>  </div>
                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }