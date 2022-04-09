import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "en",
                pageTitle: "Nuclear safety - Acts and regulations", 
                dateModified: "2021-08-20",
                langToggleUrl: "/fra/acts-and-regulations/index"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<div className="row">
<div className="span-7">
<p>Regulations for licensees, public consultations, regulatory document planning, enabling acts, regulatory fees, domestic and international arrangements.</p>
</div>
<div className="span-5"> <img src="/images/acts-and-regulations/topic_act-reg_hero_720.png" alt=""/> </div>
<div className="col-md-8">
<div className="col-md-4 ">
<p className="lead"><a href="/eng/acts-and-regulations/acts/index">Acts</a></p>
<p>Enabling legislation for the CNSC&rsquo;s mission</p>
</div>
<div className="col-md-4">
<p className="lead"><a href="/eng/acts-and-regulations/regulatory-documents/index">Regulatory documents</a></p>
<p>Requirements and guidance for licensees</p>
</div>
<div className="col-md-4 ">
<p className="lead"><a href="/eng/acts-and-regulations/regulations/index">List of regulations</a></p>
<p>Information requirements for all types of licence applications; obligations; exemptions from licensing</p>
</div>
<div className="col-md-4 ">
<p className="lead"><a href="/eng/acts-and-regulations/regulatoryplan/index">Forward Regulatory Plan</a></p>
<p>Anticipated regulatory changes over the next 2 years</p>
</div>
<div className="col-md-4">
<p className="lead"><a href="/eng/acts-and-regulations/regulatory-framework/regulatory-framework-plan">Regulatory Framework Plan</a></p>
<p>Anticipated changes to the regulatory framework over the next 5 years</p>
</div>
<div className="col-md-4 ">
<p className="lead"><a href="/eng/acts-and-regulations/regulatory-stock-review-plan/index">Regulatory Stock Review Plan</a></p>
<p>Planned reviews of regulations over the next 10 years</p>
</div>
<div className="col-md-4 ">
<p className="lead"><a href="/eng/acts-and-regulations/regulatory-framework/index">Regulatory framework</a></p>
<p>The CNSC&rsquo;s approach to regulating the nuclear industry</p>
</div>
<div className="col-md-4">
<p className="lead"><a href="/eng/acts-and-regulations/interpretation-policy/index">Interpretation policy</a></p>
<p>Commitments, practices, and tools applied by the CNSC</p>
</div>
<div className="col-md-4 ">
<p className="lead"><a href="/eng/acts-and-regulations/interpretation-policy/faq">Frequently asked questions</a></p>
<p>Your nuclear regulatory questions answered</p>
</div>
<div className="col-md-4  mrgn-bttm-0">
<p className="lead"><a href="/eng/acts-and-regulations/departemental-actions/index">Red tape reduction</a></p>
<p>Streamlining the approach to regulation</p>
</div>
</div>
<div className="col-md-8">
<h2 className="mrgn-bttm-md">Participation and engagement</h2>
<div className="col-md-4  mrgn-bttm-0">
<p className="lead"><a href="/eng/acts-and-regulations/consultation/index">Consultations</a></p>
<p>Public input on discussion papers, draft documents, proposed new regulations or amendments to regulations</p>
</div>
<div className="col-md-4 mrgn-bttm-0">
<p className="lead"><a href="/eng/resources/aboriginal-consultation/index">Indigenous engagement</a></p>
<p>The CNSC&rsquo;s commitment to meaningful consultation and engagement with Indigenous peoples</p>
</div>
<div className="col-md-4  mrgn-bttm-0">
<p className="lead"><a href="/eng/acts-and-regulations/administrative-burden-baseline/index">Administrative burden baseline</a></p>
<p>A clear metric for the administrative burden on businesses</p>
</div>
</div>
<div className="col-md-8">
<h2 className="mrgn-bttm-md">Compliance verification and enforcement</h2>
<div className="col-md-4 ">
<p className="lead"><a href="/eng/acts-and-regulations/regulatory-action/index">Regulatory actions</a></p>
<p>Orders and penalties for lack of compliance with regulations</p>
</div>
<div className="col-md-4">
<p className="lead"><a href="/eng/acts-and-regulations/event-reports-for-major-nuclear-facilities/index">Nuclear-related event reports</a></p>
<p>Disclosure of events and incidents involving licensees</p>
</div>
<div className="col-md-4 ">
<p className="lead"><a href="/eng/acts-and-regulations/compliance-verification-and-enforcement/index">Compliance verification and enforcement methodology</a></p>
<p>Assurance of the continuing compliance and safety performance of licensees</p>
</div>
<div className="col-md-4  mrgn-bttm-0">
<p className="lead"><a href="/eng/acts-and-regulations/cost-recovery-program/index">Regulatory costs and fees</a></p>
<p>Licensee costs, fee schedules, remittances and service standards</p>
</div>
<div className="col-md-4 mrgn-bttm-0">
<p className="lead"><a href="/eng/acts-and-regulations/service-standards/CNSC/index">High-volume regulatory authorizations</a></p>
<p>Service standards for the federal regulatory system</p>
</div>
</div>
<div className="col-md-8">
<h2 className="mrgn-bttm-md">Domestic and international arrangements</h2>
<div className="col-md-4 ">
<p className="lead"><a href="/eng/acts-and-regulations/memorandums-of-understanding/index">Domestic arrangements</a></p>
<p>Agreements with federal and provincial regulatory agencies</p>
</div>
<div className="col-md-4">
<p className="lead"><a href="/eng/acts-and-regulations/memorandums-of-understanding/indigenous-arrangements">Arrangements with Indigenous communities</a></p>
<p>Terms of reference and arrangements with Indigenous groups</p>
</div>
<div className="col-md-4 ">
<p className="lead"><a href="/eng/resources/international-cooperation/international-agreements">International agreements</a></p>
<p>Bilateral and multilateral agreements with partners around the world</p>
</div>
<div className="col-md-4  mrgn-bttm-0">
<p className="lead"><a href="/eng/acts-and-regulations/directives-and-international-treaties/index">Directives and international treaties</a></p>
<p>General application orders on broad policy matters</p>
</div>  </div>
                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }