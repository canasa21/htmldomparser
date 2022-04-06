import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "en",
                pageTitle: "Archived Web Page: Draft Regulatory Document RD-364Joint Canada - United States Guide for Approval of Type B(U) and Fissile Material Transportation Packages", 
                dateModified: "2009-06-30",
                langToggleUrl: "/fra/acts-and-regulations/consultation/comment/rd-364-preface"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<p><strong>Scroll down and the "archived" notice will fade in (at the top of your window)</strong></p>
<p><img src="/dist/js/images/archived/warning.gif" alt="Warning" title="Warning" className="image-actual mrgn-bttm-0" /> This Web page has been archived on the Web.</p>
<div id="archived" className="wet-boew-archived col-md-12">
<h2>Archived Content</h2>
<p>Information identified as archived on the Web is for reference, research or recordkeeping purposes. It has not been altered or updated after the date of archiving. Web pages that are archived on the Web are not subject to the Government of Canada Web Standards. As per the <a href="http://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=12316&amp;section=text">Communications Policy of the Government of Canada</a>, you can request alternate formats on the <a href="/eng/contact-us/">Contact Us</a> page.</p>
</div>
<a name="preface"></a>  	<h2><strong>PREFACE</strong></h2>  <p>The International Atomic Energy Agency (IAEA) <em>Regulations for the Safe Transport of Radioactive Material</em> (TS-R-1) specifies that once a Type B(U) transportation package design  has been approved by one country, it can be used in other countries  without additional review. In actuality, however, some Member States,  including Canada and the United States, review all applications for  package design prior to allowing its use in their country.</p>  <p>In Canada and the United States (U.S.),  competent authorities review all foreign certified package designs  before issuing the Competent Authority approval (revalidation). This  process can be lengthy and is complicated by differences in domestic  regulations, interpretation of IAEA regulations, package application  format, and acceptance criteria.</p>  <p>The Canadian Nuclear Safety Commission  (CNSC), the United States Nuclear Regulatory Commission (NRC), and the  United States Department of Transportation (DOT) have cooperated to  produce this guide to facilitate the Canadian and American regulatory  approvals of Type B(U) and fissile package design certificates. This  guide assists applicants in preparing applications that thoroughly and  completely demonstrate the ability of the given package to meet either  Canadian or U.S. regulations, as applicable.</p>  <p>This document describes a method that is acceptable to the CNSC for complying with the Canadian <em>Packaging and Transport of Nuclear Substances</em> (PTNS) <em>Regulations</em>,  SOR/2000-208, which incorporate, in part, the International Atomic  Energy Agency (IAEA) TS-R-1, 1996 Edition (Revised), and is acceptable  to the DOT and NRC for complying with the U.S. regulations in  Title&nbsp;10,&nbsp;Part&nbsp;71, <em>Packaging and Transportation of Radioactive Materials</em>, of the <em>Code of Federal Regulations</em> (10&nbsp;CFR&nbsp;Part&nbsp;71).&nbsp;</p>  <p>This guide is published in Canada as RD-364, <em>Joint Canada-United States Guide for Approval of Type B(U) and Fissile Material Transportation Packages</em>. In the United States, it is published as NUREG-1886, <em>Joint Canada-United States Guide for Approval of Type B(U) and Fissile Material Transportation Packages</em>.  RD-364 pertains to Canadian regulatory requirements; for questions  pertaining to the U.S. regulatory requirements, refer to NUREG-1886.</p>  <p>Nothing contained in this document is  to be construed as relieving any applicant from the requirements of any  pertinent regulations. It is the applicant&rsquo;s responsibility to identify  and comply with any applicable legislation or standards.</p>

                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }