import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "en",
                pageTitle: "Archived Web Page: Draft Regulatory Document RD-364Joint Canada - United States Guide for Approval of Type B(U) and Fissile Material Transportation Packages", 
                dateModified: "2013-06-02",
                langToggleUrl: "/fra/acts-and-regulations/consultation/comment/rd-364-invitation"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<p><strong>Scroll down and the "archived" notice will fade in (at the top of your window)</strong></p>
<p><img src="/js/support/archived/images/warning.gif" alt="Warning" title="Warning" /> This Web page has been archived on the Web.</p>
<div id="archived">
<h2>Archived Content</h2>
<p>Information identified as archived on the Web is for reference, research or recordkeeping purposes. It has not been altered or updated after the date of archiving. Web pages that are archived on the Web are not subject to the Government of Canada Web Standards. As per the <a href="http://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=12316&amp;section=text">Communications Policy of the Government of Canada</a>, you can request alternate formats on the <a href="/eng/contact-us/">Contact Us</a> page.</p>
</div>
<p>  <form name="myform" action="frm_comment" method="POST">  <input type="hidden" name="RDpage" value="toc" />  <input type="hidden" name="RDsection" value="invitation" />  <input type="hidden" name="document" value="364" />
<a name="invitation"></a>
<h2>Draft Regulatory Document RD-364</h2>  <h2>  Invitation to Comment</h2>  <h3>  JOINT CANADA - UNITED STATES GUIDE FOR APPROVAL OF TYPE B(U) AND FISSILE MATERIAL TRANSPORTATION PACKAGES</h3>  <h4>  Issued for Public Consultation<br />   **Month/Year of Publication**</h4>  <p>  The CNSC invites interested persons to assist in the further development of this draft regulatory document by commenting in writing on its content. This draft has been posted on the CNSC Web site for a 75-day public consultation period. If you have any questions, or would like to submit comments, please do so by the date noted on the Web site. You may submit comments on-line, or to the postal or e-mail address provided below, referencing RD-364.</p>  <p>  The CNSC will review all comments on specifically Canadian content. The USNRC and USDOT will review all comments on American content. General comments will be addressed jointly. It is our intention to prepare a joint comprehensive report addressing all comments received.</p>  <div style="padding-top:5px;padding-bottom:5px;padding-left:10px;padding-right:10px; border:1px solid #000000; background-color:#ffff99;"><p>  All comments received will be posted on the CNSC public Web site. You will not receive a formal reply to your comments, however, they will be reflected in a report, to be issued at a later date.</p></div>  <p><strong>Document availability</strong></p>  <p>  This document is available in English and French on the CNSC Web site at www.nuclearsafety.gc.ca. A paper copy of the document in either official language can be ordered from: </p>  <p>  Director, Regulatory Framework Division <br />
Regulatory Policy Directorate<br />
Canadian Nuclear Safety Commission<br />
P.O. Box 1046, Station B<br />
280 Slater Street<br />  Ottawa, Ontario, CANADA, K1P 5S9</p>  <p>  Telephone: 613-995-5894 or 1-800-668-5284 (Canada only)<br />
Facsimile: 613-995-5086<br />
E-mail: <a href="mailto:consultation@cnsc-ccsn.gc.ca">consultation@cnsc-ccsn.gc.ca</a> <br />  </p>
</p>  <p><input type="submit" name="submit" value="Comment on Invitation" /> </p>  </form>

                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }