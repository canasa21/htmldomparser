import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "en",
                pageTitle: "Shizhong Lei", 
                dateModified: "2022-01-17",
                langToggleUrl: "/fra/about-us/our-experts/shizhong-lei"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<div className="row">
<p>Geoscience Division</p>
<div className="pull-right col-md-2"> <img alt="Shizhong Lei" src="/images/our-experts/web_experts_shizhongLei_sub.png"/>
<p>Shizhong Lei,<br/>
Geoscience Technical Specialist </p>
</div>
<p>Shizhong has worked for the CNSC since 1991. As a Geoscience Technical Specialist, he conducts technical reviews of submissions from licensees or proponents specifically in groundwater flow and contaminant transport, external flooding, climate change and its impacts.</p>
<p>He works to provide important science and fact-based regulatory recommendations to the Commission to carry out its mandate.</p>
<h2>Expertise and education</h2>
<p>Shizhong holds a bachelor of science, a master&rsquo;s degree in hydrology, and a PhD in civil engineering specializing in hydrology and river engineering.</p>
<h2>Current research and projects</h2>
<p><strong>Project:</strong> <a href="/eng/reactors/research-reactors/nuclear-facilities/chalk-river/near-surface-disposal-facility">Canadian Nuclear Laboratories&rsquo; proposed near surface disposal facility (NSDF)</a>. As part of the CNSC&rsquo;s review of this proposed facility, Shizhong reviews technical reports from the proponent on precipitation, extreme storms, long-term stability of surface facilities under extreme precipitation and climate change, and safety and risk assessment.</p>  </div>
</div>  </div>
                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }