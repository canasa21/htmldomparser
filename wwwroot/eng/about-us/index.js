import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "en",
                pageTitle: "About the Canadian Nuclear Safety Commission", 
                dateModified: "2022-01-21",
                langToggleUrl: "/fra/about-us/index"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<p>Learn about the Canadian Nuclear Safety Commission&rsquo;s mandate and history, browse our current career opportunities, and get the information you need to reach us.</p>
<img src="/images/web_CNSCGeneral_520.png" alt=""/>
<p className="lead"><a href="/eng/about-us/our-mission">Mandate</a></p>
<p>About the CNSC and its mandate, values, vision and mission</p>
<p className="lead"><a href="/eng/about-us/careers-at-cnsc/index">Careers</a></p>
<p>Job opportunities, career tools and resources, programs</p>
<p className="lead"><a href="/eng/about-us/organization/index">Corporate overview</a></p>
<p>CNSC corporate overview, Commission members, organizational chart, executive biographies </p>
<p className="lead"><a href="/eng/resources/publications/reports/index">Planning and reporting</a></p>
<p>Annual reports, financial and performance reports, access to information reports, internal audits, evaluations</p>
<p className="lead"><a href="/eng/transparency/index">Transparency</a></p>
<p>Contracts, travel and hospitality expenses, grants and contributions over $25,000, access to information requests</p>
<p className="lead"><a href="/eng/about-us/history/index">CNSC history</a></p>
<p>Explore the rich history of nuclear regulation in Canada</p>
<p className="lead"><a href="/eng/about-us/values-and-ethics/index">Values and ethics</a></p>
<p>Policies and procedures, code of conduct, conflict of interest</p>
<p className="lead"><a href="/eng/contact-us/index">Contact us</a></p>
<p>General enquiries, media relations, incident reporting, external complaints, feedback</p>
<p className="lead"><a href="/eng/resources/publications/reports/corporate-reports">Corporate planning and reporting</a></p>
<p>Our accomplishments, performance, plans and priorities</p>
<h2 className="mrgn-bttm-md">Features</h2>
<p className="lead"><a href="/eng/about-us/history/2021-review">A year in review<img src="/images/web_yir_thumbs_2021_360x203.png" alt="2021" className="mrgn-tp-md"/></a></p>
<p>CNSC highlights of 2021</p>
<p className="lead"><a href="/eng/about-us/our-experts/index">CNSC Experts <img src="/images/web_experts_feature.png" alt="" className="mrgn-tp-md"/></a></p>
<p>Meet CNSC experts</p>

                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }