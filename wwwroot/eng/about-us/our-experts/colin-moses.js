import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "en",
                pageTitle: "Colin Moses", 
                dateModified: "2022-01-04",
                langToggleUrl: "/fra/about-us/our-experts/colin-moses"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<p>Information Management Technology Directorate</p>
<div className="pull-right col-md-3">
<figure><img src="/images/our-experts/web_experts_CMoses-sub.png" alt="" />
<figcaption>Colin Moses,<br/>
Director General and Chief Information Officer </figcaption>
</figure>
</div>
<p>Colin has worked for the CNSC since 2001, joining as part of the first cohort of a new internship program. Colin manages a team who ensures that CNSC staff have the digital capabilities necessary for modern and effective regulatory oversight of the nuclear industry.</p>
<h2>Expertise and education</h2>
<p>Colin has a bachelor&rsquo;s degree in mechanical engineering from McMaster University. His diverse job experience within the CNSC has enabled him to build on each role, helping him succeed and take on increased responsibility. Having worked in every branch of the CNSC, Colin has a unique understanding and appreciation of how every staff member contributes to the organization&rsquo;s success.</p>
<h2>Roles and responsibilities</h2>
<p>As Director General and Chief Information Officer, Colin and his team support the CNSC&rsquo;s vision of being a world class nuclear regulator, aligning the organization with the Government of Canada&rsquo;s Digital Operations Strategic Plan through the CNSC&rsquo;s Digital Strategy. This strategy will ensure the CNSC continues to be an open, digital-first organization that embraces the rapid pace of technological change and that tools are in place for staff to carry out robust, science- and data-based regulatory oversight. Timely access to the information and data that is collected by the CNSC helps to ensure that the organization can make informed decisions on the safety of nuclear facilities and activities.</p>  
                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }