import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "en",
                pageTitle: "About the Canadian Nuclear Safety Commission", 
                dateModified: "2022-01-21",
                langToggleUrl: "/fra/about-us/"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<div className="row">
<div className="col-md-12">
<p>Learn about the Canadian Nuclear Safety Commission&rsquo;s mandate and history, browse our current career opportunities, and get the information you need to reach us.</p>
</div>
<div className="col-md-8"> <img src="/images/20th-anniversary/web_CNSCGeneral_520.png" alt="" className="img-responsive"/> </div>
<div className="col-md-12">
<div className="col-md-4 ">
<p className="lead"><a href="/eng/about-us/our-mission">Mandate</a></p>
<p>About the CNSC and its mandate, values, vision and mission</p>
</div>
<div className="col-md-4">
<p className="lead"><a href="/eng/about-us/careers-at-cnsc/">Careers</a></p>
<p>Job opportunities, career tools and resources, programs</p>
</div>
<div className="col-md-4 ">
<p className="lead"><a href="/eng/about-us/organization/">Corporate overview</a></p>
<p>CNSC corporate overview, Commission members, organizational chart, executive biographies </p>
</div>
<div className="col-md-4 ">
<p className="lead"><a href="/eng/resources/publications/reports/">Planning and reporting</a></p>
<p>Annual reports, financial and performance reports, access to information reports, internal audits, evaluations</p>
</div>
<div className="col-md-4">
<p className="lead"><a href="/eng/transparency/">Transparency</a></p>
<p>Contracts, travel and hospitality expenses, grants and contributions over $25,000, access to information requests</p>
</div>
<div className="col-md-4 ">
<p className="lead"><a href="/eng/about-us/history/">CNSC history</a></p>
<p>Explore the rich history of nuclear regulation in Canada</p>
</div>
<div className="col-md-4  mrgn-bttm-0">
<p className="lead"><a href="/eng/about-us/values-and-ethics/">Values and ethics</a></p>
<p>Policies and procedures, code of conduct, conflict of interest</p>
</div>
<div className="col-md-4 mrgn-bttm-0">
<p className="lead"><a href="/eng/contact-us/">Contact us</a></p>
<p>General enquiries, media relations, incident reporting, external complaints, feedback</p>
</div>
<div className="col-md-4  mrgn-bttm-0">
<p className="lead"><a href="/eng/resources/publications/reports/corporate-reports">Corporate planning and reporting</a></p>
<p>Our accomplishments, performance, plans and priorities</p>
</div>
</div>
<div className="col-md-12">
<h2 className="mrgn-bttm-md">Features</h2>
<div className="col-md-4 ">
<p className="lead"><a href="/eng/about-us/history/2021-review">A year in review<img src="/images/2021-review/web_yir_thumbs_2021_360x203.png" alt="2021" className="mrgn-tp-md"/></a></p>
<p>CNSC highlights of 2021</p>
</div>
<div className="col-md-4">
<p className="lead"><a href="/eng/about-us/our-experts/">CNSC Experts <img src="/images/our-experts/web_experts_feature.png" alt="" className="mrgn-tp-md"/></a></p>
<p>Meet CNSC experts</p>
</div>
<div className="col-md-4 ">
</div>
</div>  </div>

                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }