import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "en",
                pageTitle: "Consultation", 
                dateModified: "2022-03-03",
                langToggleUrl: "/fra/acts-and-regulations/consultation/index"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<div className="col-md-2 module-related pull-right">
<h2>Provide Comments and Suggestions</h2>
<ul>
<li>CNSC welcomes <a href="mailto:consultation@cnsc-ccsn.gc.ca">feedback</a> on any regulatory document at any time</li>
</ul>
</div>
<section>
<p>Consultation with the public, licensees and interested organizations is an important part of the process the CNSC uses to develop many of the regulatory tools within its <a href="/eng/acts-and-regulations/regulatory-framework/index">regulatory framework</a>. The CNSC welcomes public input on discussion papers and draft documents, and on proposed new regulations or amendments to regulations.</p>
<p>Each document is made available for public comment for a specified period of time. Please note that comments submitted, including names and affiliations, will be made public and will be posted in the official language in which they were received. At the end of the consultation period, CNSC staff review all public input. A consultation report is then prepared, summarizing the feedback.</p>
<p>Visit <a href="http://www.letstalknuclearsafety.ca/">Let&rsquo;s Talk Nuclear Safety</a> to view and comment on proposed changes to regulations, proposed new regulatory documents or changes to regulatory documents, and new discussion papers.</p>
<p>You can also search for consultations on the <a href="https://www.canada.ca/en/government/system/consultations/consultingcanadians.html">Consulting with Canadians</a> website.</p>
<h2>Comment on draft terms of reference</h2>
<p>Currently, there are no terms of reference open for consultation.</p>
<h2 id="R1">Comment on draft regulatory documents</h2>
<p>Currently, there are no regulatory documents open for consultation.</p>
<h2 id="R2">Comment on discussion papers</h2>
<p>Discussion papers play an important role in the  selection and development of the CNSC&#39;s requirements or guidance. They are used  to solicit early public feedback on CNSC policies or approaches. The use of  discussion papers early in the regulatory process underlines the CNSC&#39;s  commitment to a transparent consultation process. The CNSC analyzes and  considers this early feedback when determining the type and nature of  requirements and guidance to issue. This process is intended to streamline  document development and publishing.</p>
<table className="table table-striped">
<thead>
<tr>
<th className="text-left ">Title</th>
<th className="text-left 0">Status</th>
</tr>
</thead>
<tbody>
<tr>
<td><p>Currently, there are no discussion papers open for consultation.</p></td>
<td>&nbsp;</td>
</tr>
</tbody>
</table>
<p><a href="/eng/acts-and-regulations/consultation/history/index">View the history of  discussion papers</a></p>
<h2 id="R3">Comment on proposed new regulations or amendments to  regulations</h2>
<p>When required, the CNSC puts forward proposals for new regulations or proposed amendments to existing regulations under the <em><a href="http://laws-lois.justice.gc.ca/eng/acts/N-28.3/index.html">Nuclear Safety and Control  Act</a></em>. The proposed amendments, regulations and documents are made available to the public for comment.</p>
<p> Currently, there are no new regulations or amendments to comment on. </p>
<p><a href="/eng/acts-and-regulations/consultation/history-regs/index">View the history of regulations</a></p>
<p><a href="/eng/stay-connected/get-involved/subscribe/index">Subscribe</a> to  receive an email notification that a new draft document, proposed regulation or  an amendment to a regulation has been posted for public consultation.</p>
<p>To  request a paper copy of a draft document or for more information, <a href="/eng/contact-us/index#regs">contact the CNSC</a>.</p>
<h3>For more information</h3>
<ul>
<li> <a href="http://www.tbs-sct.gc.ca/tbs-sct/ar-lr/gwfrp-ppreg-eng.asp">Government-Wide  Forward Regulatory Plans</a></li>
<li><a href="http://www.tbs-sct.gc.ca/rtrap-parfa/about-ausujet-eng.asp">The <em>Cabinet Directive on Regulatory Management</em></a></li>
<li><a href="http://www.tbs-sct.gc.ca/rtrap-parfa/index-eng.asp">The <em>Red Tape Reduction Action Plan</em></a></li>
<li><a href="http://actionplan.gc.ca/page/rcc-ccr/about-regulatory-cooperation-council?wb48617274=F196FB7F">The Canada-United States  Regulatory Cooperation Council</a></li>
</ul>
<p>To learn about upcoming or ongoing consultations on proposed federal  regulations, visit the <em><a href="http://www.gazette.gc.ca/index-eng.html">Canada Gazette</a></em> and the Government of Canada&rsquo;s <a href="https://open.canada.ca/en">Open Government website</a> under the "<a href="https://www.canada.ca/en/government/system/consultations/consultingcanadians.html">Find a Consultation</a>" option.</p>
</section>  </div>
</div>  </div>
                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }