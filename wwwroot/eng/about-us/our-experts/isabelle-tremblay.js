import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "en",
                pageTitle: "Isabelle Tremblay", 
                dateModified: "2022-01-04",
                langToggleUrl: "/fra/about-us/our-experts/isabelle-tremblay"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<p>Transport Licensing and Strategic Support Division</p>
<div className="pull-right col-md-3">
<figure><img src="/images/our-experts/web_experts_ITremblay-sub.png" alt="" />
<figcaption>Isabelle Tremblay,<br/>
Program Officer</figcaption>
</figure>
</div>
<p>Isabelle joined the CNSC in 2009. As a Program Officer, she works to regulate the use of nuclear substances and certify the safety of prescribed equipment before it is used in Canada. She is responsible for making sure that these packages are safe and that, in the event of an accident, the nuclear substances they contain will not disperse into the environment.</p>
<h2>Expertise and education</h2>
<p>Isabelle holds a bachelor&rsquo;s degree in mechanical engineering from McGill University. Before joining the CNSC, she worked in microelectronics, designing and manufacturing both computer and network infrastructure components. Raised in the Saguenay area, Isabelle decided in high school to attend an English boarding school near the Canada/U.S. border, immersing herself in the language in order to become bilingual.</p>
<h2>Roles and responsibilities</h2>
<p>In her position, Isabelle is responsible for technical assessments of prescribed equipment certification applications. She is also a <a href="/eng/the-commission/designated-officers">designated officer</a> (DO) appointed by the Commission to carry out specific licensing and regulatory actions, and allowing her to make certain decisions on behalf of the Commission. DOs are a key part of the CNSC&rsquo;s licensing and compliance framework and allow the organization to handle the approximate 1,800 licences and certificates that need to be reviewed, monitored and enforced each year.</p>
<h2>Other roles</h2>
<p>Isabelle played an instrumental role in publishing the CNSC&rsquo;s first editions of the <em>Annual Regulatory Oversight Report on the Use of Nuclear Substances in Canada</em>, reporting on approximately 2,500 licensees. This report was a first in Canada and outlined the safety performance of the licensees authorized to use nuclear substances. She is an advocate for gender equity and an active member of the CNSC&rsquo;s Women in Science, Technology, Engineering and Mathematics (STEM) Network, through which she conducts outreach activities with her colleagues to encourage young students, especially girls, to pursue STEM careers.</p>  
                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }