import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "en",
                pageTitle: "REGDOC-3.3.1, Financial guarantees for decommissioning of nuclear facilities and termination of licensed activities", 
                dateModified: "2019-07-08",
                langToggleUrl: "/fra/acts-and-regulations/consultation/comment/regdoc3-3-1"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<h2>Preface</h2>  <p>This regulatory document&nbsp;is  part of the CNSC&rsquo;s&nbsp;financial  guarantees series of regulatory documents. . The  full&nbsp;list of regulatory document series&nbsp;is included at the end of  this document and can also be found on the <a href="http://www.nuclearsafety.gc.ca/eng/acts-and-regulations/regulatory-documents/index">CNSC&rsquo;s&nbsp;website</a>.</p>  <p> Regulatory  document REGDOC-3.3.1, <em>Financial  Guarantees for Decommissioning of Nuclear Facilities and Termination of  Licensed Activities</em>, sets out requirements and guidance for applicants and  licensees regarding the establishment and maintenance of funding for the  decommissioning of facilities and termination of activities licensed by the  Canadian Nuclear Safety Commission.</p>  <p> REGDOC-3.3.1 provides information on  financial guarantees used to ensure a licensee will have sufficient funds to  decommission a licensed location and dispose of any associated nuclear  substances. &nbsp;The document is intended to  form part of the licensing basis for a regulated facility or activity within  the scope of the document. It is intended for inclusion in licences as either  part of the conditions and safety and control measures in a licence, or as part  of the safety and control measures to be described in a licence application and the documents needed  to support that application.</p>  <p> This document supersedes G-206<em>, Financial Guarantees for the  Decommissioning of Licensed Activities</em>, published in June 2000.For information on the implementation of  regulatory documents in the licensing basis and on the graded approach, see  REGDOC-3.5.3, <em>Regulatory Fundamentals</em>.</p>  <div className="alert alert-info module-simplify ">
<p>The words &ldquo;shall&rdquo; and  &ldquo;must&rdquo; are used to express requirements to be satisfied by the licensee or  licence applicant. &ldquo;Should&rdquo; is used to express guidance or that which is advised.  &ldquo;May&rdquo; is used to express an option or that which is advised or permissible  within the limits of this regulatory document. &ldquo;Can&rdquo; is used to express  possibility or capability.</p>
<p> Nothing contained  in this document is to be construed as relieving any licensee from any other  pertinent requirements. It is the licensee&rsquo;s responsibility to identify and  comply with all applicable regulations and licence conditions.</p>  </div>  <br/><div className="module-table-contents">
<h2>Table of Contents</h2>
<ul>
<li><a href="#sec1">1. Introduction</a>
<ul>
<li><a href="#sec1-1">1.1 Purpose</a></li>
<li><a href="#sec1-2">1.2 Scope</a></li>
<li><a href="#sec1-3">1.3 Relevant legislation</a></li>
</ul>
</li>
<li><a href="#sec2">2. Background</a>
<li><a href="#sec3">3. Acceptance Criteria for Financial Guarantees</a>
<ul>
<li><a href="#sec3-1">3.1 Liquidity</a></li>
<li><a href="#sec3-2">3.2 Certainty of value</a></li>
<li><a href="#sec3-3">3.3 Adequacy of value</a></li>
<li><a href="#sec3-4">3.4 Continuity</a></li>
</ul>
</li>
<li><a href="#sec4">4. Acceptable Financial Guarantee Instruments</a>
<ul>
<li><a href="#sec4-1">4.1 Cash funds</a></li>
<li><a href="#sec4-2">4.2 Investments funds</a></li>
<li><a href="#sec4-3">4.3 Letters of credit</a></li>
<li><a href="#sec4-4">4.4 Surety bonds</a></li>
<li><a href="#sec4-5">4.5 Insurance</a></li>
<li><a href="#sec4-6">4.6 Expressed commitments from Canadian Government entities</a></li>
<li><a href="#sec4-7">4.7 Other types of instruments</a></li>
</ul>
</li>
<li><a href="#sec5">5. Administration of Financial Guarantees</a>
<ul>
<li><a href="#sec5-1">5.1 Access to funds upon demand</a></li>
<li><a href="#sec5-2">5.2 Separation on financial guarantee from lincensee&#39;s other assets</a></li>
<li><a href="#sec5-3">5.3 Maintenance on a continuous basis</a></li>
<li><a href="#sec5-4">5.4 Replacement of financial guarantee</a></li>
<li><a href="#sec5-5">5.5 Signing officers</a></li>
</ul>
</li>
<li><a href="#sec6">6. Reporting Requirements</a></li>
<li><a href="#sec-part1">Part I: Financial Guarantees for the Decommissioning of Nuclear Facilities and Activities</a></li>
<li><a href="#sec7">7. Introduction</a>
<ul>
<li><a href="#sec7-1">7.1 Scope</a></li>
<li><a href="#sec7-2">7.2 Background</a></li>
</ul>
</li>
<li><a href="#sec8">8. Planning for Decommissioning</a></li>
<li><a href="#sec9">9. Cost Estimates for Decommissioning </a></li>
<li><a href="#sec10">10. Requirements for Costs To Be Included</a></li>
<li><a href="#sec11">11. Costs Categories</a></li>
<li><a href="#sec12">12 Presentation of Costs Estimate</a></li>
<li><a href="#sec13">13. Elements of Costs Estimates</a>
<ul>
<li><a href="#sec13-1">13.1 Basis of estimate</a></li>
<li><a href="#sec13-2">13.2 Structure of estimate</a>
<ul>
<li><a href="#sec13-2-1">13.2.1 Activity-dependent costs</a></li>
<li><a href="#sec13.2.2">13.2.2 Period dependent costs</a></li>
</ul>
</li>
<li><a href="#sec13-3">13.3 Collateral and special item costs</a>
<ul>
<li><a href="#sec13-3-1">13.3.1 Contigency</a></li>
</ul>
</li>
<li><a href="#sec13-4">13.4 Schedule</a></li>
<li><a href="#sec13-5">13.5 Uncertainty analysis</a></li>
</ul>
</li>
<li><a href="#sec14">14. Development of the Financial Guarantee</a>
<ul>
<li><a href="#sec14-1">14.1 Current value</a></li>
<li><a href="#sec14-2">14.2 Cash flow and planned disbursements</a></li>
<li><a href="#sec14-3">14.3 Net present value</a></li>
</ul>
</li>
<li><a href="#sec15">15. Review of Financial Guarantees </a></li>
<li><a href="#sec-part-2">Part II: Financial Guarantees for Termination of Licensed Activities</a></li>
<li><a href="#sec16">16. introduction</a>
<ul>
<li><a href="#sec16-1">16.1 Scope</a></li>
</ul>
</li>
<li><a href="#sec17">17. Financial Guarantee Program</a></li>
<li><a href="#sec18">18. Alternatives to Financial Guarantee Program</a></li>
<li><a href="#sec19">19. Review of Financial Guarantees</a></li>
<li><a href="#sec-app-a">Appendix A: Example of Letter of Credit</a></li>
<li><a href="#sec-app-b">Appendix B: Cost Estimate Grades and Classification</a></li>
<li><a href="#sec-app-c">Appendix C: Standardized Definitions for Cost Categories</a></li>
<li><a href="#sec-app-d">Appendix D: International Structure for Decommissioning Costing&ndash;Cost Item Hierarchy</a></li>
<li><a href="#sec-app-e">Appendix E: Approaches to Cost Estimation</a></li>
<li><a href="#sec-glossary">Glossary</a></li>
<li><a href="#ref">References</a></li>
</ul>  </div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="1"></div>
<h2 id="sec1">1. Introduction</h2>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="1.1"></div>
<h3 id="sec1-1">1.1 Purpose</h3>  <p>The <em>Nuclear Safety and Control Act</em> (NSCA) authorizes the Commission to require financial guarantees that it considers necessary for the purposes of the Act.</p>  <p>Applicants and licensees are required to make adequate provision for the safe decommissioning of existing or proposed nuclear facilities &nbsp;by ensuring that sufficient financial resources are available to fund all approved decommissioning activities should the licensee is not be able to fulfill its obligations. &nbsp;Operationally, the Commission may also require financial resources be available for termination of licensed activities other than for decommissioning of nuclear facilities.</p>  <p>This document provides requirements and guidance to applicants and licensees regarding the establishment and maintenance of funding for the decommissioning of facilities and termination of activities licensed by the Canadian Nuclear Safety Commission (CNSC).</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="1.2"></div>
<h3 id="sec1-2">1.2 Scope</h3>  <p>This  document presents information for those who have incurred, or expect to incur,  obligations with respect to the decommissioning of nuclear facilities or the termination  of activities licensed by the CNSC.</p>  <p> <a href="#sec-part1">Part I</a> of this document  pertains to financial guarantees for decommissioning of nuclear facilities or activities authorized under Class IA and B, uranium mines and mills and waste nuclear  substances licences.</p>  <p> <a href="#sec-part-2">Part II</a> of this document  pertains to financial guarantees for the termination of licensed activities, such as for nuclear substances and radiation devices, prescribed equipment, and  Class II facilities.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="1.3"></div>
<h3 id="sec1-3">1.3 Relevant legislation</h3>  <p>The  provisions of the <em>Nuclear  Safety and Control Act</em> and regulations that are relevant to this regulatory  document include:</p>  <ul>
<li><a href="https://laws-lois.justice.gc.ca/eng/acts/N-28.3/index.html"><em>Nuclear Safety and Control Act</em></a>, subsection 24(5)</li>
<li><a href="https://laws-lois.justice.gc.ca/eng/regulations/sor-2000-202/page-1.html"><em>General Nuclear Safety and Control Regulations</em></a>, paragraph 3(1)(l)</li>
<li><a href="https://laws-lois.justice.gc.ca/eng/regulations/sor-2000-202/page-1.html"><em>General Nuclear Safety and Control Regulations</em></a> subsection 29(2) </li>  </ul>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="2"></div>
<h2 id="sec2">2. Background</h2>  <p>The CNSC&rsquo;s mandate is to regulate the use of nuclear energy and materials to protect health, safety, security and the environment; to implement Canada&rsquo;s international commitments on the peaceful use of nuclear energy; and to disseminate objective scientific, technical and regulatory information to the public. </p>  <p> The CNSC defines decommissioning as the administrative and technical decommissioning actions taken to allow the removal of some or all of the regulatory controls from a facility or location where nuclear substances are managed, possessed or stored. Decommissioning actions are the procedures, processes and work activities that lead to the release of a facility or location from regulatory control, with or without restrictions on its future use (for example, decontamination and/or dismantling of structures, systems and components).</p>  <p> Financial guarantees are a tangible commitment by a licence applicant or a licensee that there will be sufficient resources to safely terminate licensed activities. A financial guarantee does not relieve licensees from complying with regulatory requirements for decommissioning of nuclear facilities or termination of licensed activities &ndash; the financial guarantee ensures that there are funds available to the CNSC when licensees are unable to carry out safe decommissioning or termination of activities. </p>  <p> Sustainable assurance of safety is guided by the two key principles of decommissioning: &ldquo;the polluter pays&rdquo; and &ldquo;the intergenerational equity&rdquo; principles. These principles raise specific financial obligations for decommissioning. These financial obligations are intended to ensure:</p>  <ul>   <li>funding is available to make adequate provisions for the health and safety of current and future generations</li>   <li>the applicants and licensees establish adequate funds to pay for the decommissioning and termination of their licensed activities</li>  </ul>  <p>Financial guarantees must be sufficient to cover the cost of decommissioning of nuclear facilities or termination of licensed activities authorized by the current licence. &nbsp;</p>  <p> The types of instruments for financial guarantees can vary. The applicants and the licensees should select an instrument that suits the scope and the timeframe of their decommissioning plan. </p>  <p> The requirements and guidance for decommissioning planning are provided in draft REGDOC&#8209;2.11.2, <em>Decommissioning</em> <sup id="fnb1-ref"><a className="fn-lnk" href="#fnb1"><span className="wb-inv">Footnote </span>1</a></sup> and CSA standard N294-09, <em>Decommissioning of Facilities Containing Nuclear Substances </em><sup id="fnb2-ref"><a className="fn-lnk" href="#fnb2"><span className="wb-inv">Footnote </span>2</a></sup><em>.</em></p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3"></div>
<h2 id="sec3">3. Acceptance Criteria for Financial Guarantees</h2>  <p>The Commission, or where a licence is used by a designated officer, the designated officer will determine the acceptability of any proposed financial guarantee. The following are the CNSC&rsquo;s general expectations for criteria of liquidity, certainty of value, adequacy of value and continuity. &nbsp;A licensee may propose alternatives approaches to meet the intent of the acceptance criteria for financial guarantees.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.1"></div>
<h3 id="sec3-1">3.1 Liquidity</h3>  <p>The proposed financial guarantee must be such that the instrument can be drawn upon only with the prior acceptance of the CNSC, and such that payout for decommissioning purposes is not prevented, unduly delayed, or compromised for any reason.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.2"></div>
<h3 id="sec3-2">3.2 Certainty of value</h3>  <p>Licensees must select funding or security instruments or arrangements which provide full assurance of their value.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.3"></div>
<h3 id="sec3-3">3.3 Adequacy of value</h3>  <p>The value of the financial guarantees for nuclear facilities must be linked to the cost estimate associated with the most up to date decommissioning plan.</p>
<p>Financial guarantees for other licensed activity must be linked to their licence.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.4"></div>
<h3 id="sec3-4">3.4 Continuity</h3>  <p>The required financial guarantees for decommissioning and termination of licenced activities must be maintained on a continuing basis. This may require periodic renewals, revisions or replacements of securities provided or issued for fixed terms. In order to ensure continuity of coverage, financial guarantees must include provisions for advance notice of termination or intent to not renew. See <a href="#sec5">section 5</a> for additional information.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4"></div>
<h2 id="sec4">4. Acceptable Financial Guarantee Instruments</h2>  <p>The following sections provide examples of acceptable financial guarantee instruments. In all cases the financial guarantees instruments are subject to financial and legal review by CNSC staff and must be accepted by the Commission or where a licence is used by a designated officer, the designated officer. </p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.1"></div>
<h3 id="sec4-1">4.1 Cash funds</h3>  <p>Cash funds include cash as well as other equivalent securities such as certified cheques, bearer bonds and guaranteed investment certificates. </p>  <p> These instruments can provide certainty and adequacy of value, ease of liquidity, and continuity. Such instruments provide maximum protection against the risk of default.</p>  <p> Any cash collateral or direct funding should be made into an account which is controlled by the federal government (either the CNSC or the Receiver General for Canada) or by a Canadian chartered bank listed in Schedule I or II of the <em>Bank Act</em>. </p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.2"></div>
<h3 id="sec4-2">4.2 Investment funds</h3>  <p>Investment funds are financial instruments that are publicly traded or can be easily liquidated if required.</p>  <p> Funds earmarked for financial guarantees purposes may be invested in an investment portfolio in order to earn interest income to help to cover the costs of decommissioning.</p>  <p> When investment funds are used, there are several economic estimates that must be made including the rate of inflation over time, and the estimated rate of return of the portfolio. &nbsp;&nbsp;Information on planned disbursements should be included in order for the CNSC to review the financial guarantee to ensure it is sufficient to cover costs of decommissioning.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.3"></div>
<h3 id="sec4-3">4.3 Letters of credit</h3>  <p>A letter of credit is an agreement between a licensee and a financial institution. </p>  <p> A letter of credit can provide for specific sums of money to be paid on demand to designated parties or their agents should a triggering event occur, such as a licensee defaulting on its obligation to decommission. Letters of credit can provide certainty of value, may be easily liquidated, and may be rewritten or revised as the required amount of security changes. <a href="#sec-app-a">Appendix A</a> provides an example of a letter of credit.</p>  <p> Acceptable letters of credit should be issued by a Canadian chartered bank listed in Schedule I or II of the <a href="https://laws-lois.justice.gc.ca/eng/acts/B-1.01/"><em>Bank Act</em></a>. </p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.4"></div>
<h3 id="sec4-4">4.4 Surety bonds</h3>  <p>Surety bonds include bid bonds, performance bonds, labour and material payment bonds and maintenance bonds. Surety bonds are widely used in the construction industry. </p>  <p> Variations of these bond types may be appropriate as primary security, or to complement other guarantees.</p>  <p> For example, under the terms of a performance bond agreement, a surety company could commit to responsibility for all claims and expenses for decommissioning up to a specified limit. Another form of financial guarantee will be required where the estimated cost of the decommissioning exceeds the value of the surety bond.</p>  <p> Surety bonds should name the CNSC as a beneficiary and the insurance or bonding agents should be Canadian companies subject to Canadian regulatory oversight.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.5"></div>
<h3 id="sec4-5">4.5 Insurance</h3>  <p>Insurance  policies may be acceptable financial guarantee instruments provided a standard insurance  policy is developed and accepted by the CNSC.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.6"></div>
<h3 id="sec4-6">4.6 Expressed commitments from Canadian government entities</h3>  <p>Expressed commitments from a Canadian federal, provincial or territorial government, may be acceptable financial guarantee instruments if used to cover all otherwise unfunded aspects of decommissioning. </p>  <p> Expressed commitments from a Canadian provincial or territorial government are restricted to guarantees over which the federal government has rights of offset with respect to transfer payments as a method to enforce the guarantee if it becomes necessary.</p>  <p> Universities and hospitals must maintain a letter of commitment acknowledging the responsibility and liability for the decommissioning of the site. The letter of commitment must be signed by a person of authority at the institution <sup id="fnba-ref"><a className="fn-lnk" href="#fnba"><span className="wb-inv">Footnote </span>1</a></sup>.</p>  <p> Institutions that operate research reactors, such as SLOWPOKE reactors, should maintain adequate financial guarantees to bring the facility to a safe state, including removal of fuel and radioactive and hazardous materials from the site. The remaining cost for completing the decommissioning of the facility may be covered by a letter of commitment acknowledging the responsibility and liability of decommissioning. The letter of commitment must be signed by a person of authority at the institution. </p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.7"></div>
<h3 id="sec4-7">4.7 Other types of instruments</h3>  <p>Other types of financial guarantee instruments may be considered by the Commission as part of the licensing or renewal process. In all cases, the financial guarantee instrument must satisfy the general acceptance criteria listed in section 4. Since parent company guarantees and pledges of assets do not satisfy the acceptance criteria listed in section 4, they are not considered acceptable financial guarantee instruments.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="5"></div>
<h2 id="sec5">5. Administration of Financial Guarantees</h2>  <p>Financial  guarantees are administered by clearly defined and legally-enforceable  arrangements acceptable to the CNSC. These arrangements  must be structured to ensure that the financial guarantee provided by the  applicant or the licensee includes the following terms:</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="5.1"></div>
<h2 id="sec5-1">5.1 Access to funds upon demand</h2>  <p>The CNSC must be assured that it can, upon demand, access or direct adequate funds if a licensee is not available to fulfill its obligations for decommissioning. The funds must be structured such that the instrument can be drawn upon only with the prior acceptance of the CNSC and that such pay-out is not prevented, delayed or compromised, and must be structured such that the instrument can provide full assurance of value.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="5.2"></div>
<h3 id="sec5-2">5.2 Separation of financial guarantee from licensee&rsquo;s other assets</h3>  <p>The financial guarantee arrangements must be structured to ensure that the funds or securities provided by the applicant or licensee to guarantee funding for an approved decommissioning plan are separated from its other assets. This might require the inclusion of terms restricting access to, or use of, monies realized from the fund or securities. </p>  <p> Withdrawals from a fund, or access to monies realized from other security vehicles must only be permitted for approved purposes; in particular, to pay for approved decommissioning activities, or to refund excess monies to the licensee. </p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="5.3"></div>
<h3 id="sec5-3">5.3 Maintenance on a continuous basis</h3>  <p>Financial guarantee instruments must be automatically renewed and must include provisions for advance notice of termination or intent to not renew. </p>  <p>The term of a surety, insurance or other security vehicle should be open-ended, or, if written for a specified term, must &nbsp;be renewed automatically unless 30 days or more prior to the renewal date the issuer notifies the CNSC (as the beneficiary) and the licensee of any intention not to renew. </p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="5.4"></div>
<h3 id="sec5-4">5.4 Replacement of financial guarantee</h3>  <p>If the licensee or applicant fails to provide a replacement acceptable to the CNSC within 10 days after receipt of notification of cancellation, the terms of arrangement should further provide that the full face value of the instrument may automatically be paid into an account which is controlled by the federal government (either the CNSC or the Receiver General for Canada) or by a Canadian chartered bank listed in Schedule I or II of the Bank Act prior to expiration, without proof of forfeiture required. The value of the instrument must be payable, for purposes of funding decommissioning activities. </p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="5.5"></div>
<h3 id="sec5-5">5.5 Signing officers</h3>  <p>Licensees must provide, and continually update, a list of signing officers who have the requisite corporate or governmental authority to bind the corporation or the government as applicable.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6"></div>
<h2 id="sec6">6. Reporting Requirements</h2>  <p>Licensees are required to report annually on the status and the validity of their financial guarantee. Licensees must indicate if their financial guarantee remains valid, in effect and sufficient to meet decommissioning needs according to the most up-to-date decommissioning plan <sup id="fnb3-ref"><a className="fn-lnk" href="#fnb3"><span className="wb-inv">Footnote </span>3</a></sup> <sup id="fnb4-ref"><a className="fn-lnk" href="#fnb4"><span className="wb-inv">Footnote </span>4</a></sup>. </p>  <p> For certain licensees, additional requirements for reporting on financial guarantees may be specified in the licence conditions handbook. </p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="part-1"></div>
<h2 id="sec-part1">Part I: Financial Guarantees for the Decommissioning of Nuclear Facilities and Activities</h2>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="7"></div>
<h2 id="sec7">7. Introduction</h2>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="7.1"></div>
<h3 id="sec7-1">7.1 Scope</h3>  <p>Part I of this document provides information to applicants and licensees with regard to the CNSC&rsquo;s requirements and guidance for establishing financial guarantees for decommissioning of licensed facilities and activities authorized under Class IA and B nuclear facility licences, uranium mine and mill licences, and waste nuclear substances licenses. </p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="7.2"></div>
<h3 id="sec7-2">7.2 Background</h3>  <p>The <em>Nuclear Safety and Control Act</em> (NSCA) and associated regulations require applicants and licensees to make adequate provision for the safe operation and decommissioning of existing or proposed operations. </p>  <p> A licence may contain conditions requiring licensees to have acceptable decommissioning plans in place, and an acceptable financial guarantee that must remain valid, in effect and sufficient to meet decommissioning needs according to the most up-to-date decommissioning plan.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="8"></div>
<h2 id="sec8">8. Planning for Decommissioning</h2>  <p>Planning for the decommissioning of a facility is an integral part of the lifecycle planning of a facility. The lifecycle stages of a facility include: siting; design and construction; commissioning; operation and maintenance; final shutdown; and decommissioning. Planning for decommissioning is an ongoing process and should be considered at each lifecycle stage of the facility. </p>  <p> Applicants and licensees are required to submit a preliminary decommissioning plan (PDP) for the lifecycle stages from siting to final shutdown, and a detailed decommissioning plan (DDP) with an application for a licence to decommission. </p>  <p> The PDP should be filed with the CNSC as early as possible in the lifecycle of the facility. The PDP should be revised at least every five years or as required by the Commission. </p>  <p> The DDP is filed with the CNSC prior to beginning of decommissioning activities. Requirements and guidance for decommissioning planning for CNSC-regulated activities and facilities are provided in draft REGDOC-2.11.2, <em>Decommissioning</em> and CSA standard N294&#8209;09, <em>Decommissioning of facilities containing nuclear substances</em>. Decommissioning plans can vary in complexity and detail in accordance with specific circumstances but must be sufficiently detailed to enable credible estimates of the amount of financial guarantees. </p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="9"></div>
<h2 id="sec9">9. Cost Estimates for Decommissioning</h2>  <p>The cost estimate for decommissioning should be based on the most up-to-date decommissioning plan and should reflect the assumed decommissioning strategy and end state of the facility. </p>  <p> The decommissioning cost estimates may vary depending on the stage in the facility&rsquo;s lifecycle. In the case of estimates undertaken at the conceptual design stage of a project, the purpose is: </p>  <ul>   <li>to enable designers and client organizations to establish overall project costs</li>   <li>to inform the long-term financing process to provide for future funds when a facility will be decommissioned.</li>  </ul>  <p>Later, when the decommissioning project planning has advanced as a facility nears the end of its period of operation, the cost estimate forms part of the basis for the detailed decommissioning planning. </p>  <p> Various approaches to determine the level of cost estimate accuracy exists. Organizations, such as the Association for Advancement of Cost Engineering (AACE International) have developed guidelines for estimating cost for different industries. Guidance establishing the cost estimate level of accuracy is provided in <a href="#app-b">appendix B</a>. </p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="10"></div>
<h2 id="sec10">10.	Requirements for Costs To Be Included</h2>  <p>Cost estimates must include all  decommissioning activities from operations, during shutdown to the final  release from regulatory control. The cost estimate for decommissioning must address  the cost of the following principal activities, if applicable:</p>  <ul>
<li>preparation for final shutdown </li>
<li>facility shutdown activities</li>
<li>additional activities for safe  enclosure (if applicable)</li>
<li>decontamination and dismantling  activities </li>
<li>waste processing, storage and  disposal, including used fuel</li>
<li>project management, engineering  and site support</li>
<li>site clean-up, landscaping and  restoration (if required)</li>
<li>long-term management of  radioactive waste and used fuel (if applicable) </li>
<li>long-term monitoring and  maintenance of the site and institutional control (if applicable)</li>
<li>miscellaneous expenditures </li>  </ul>  <p>The applicant or licensee must estimate  the cost for all activities included in their decommissioning plan. </p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="11"></div>
<h2 id="sec11">11. Cost Categories</h2>  <p>Four cost categories should be defined for each principal activity: </p>  <ul>   <li>labour cost: payments to employees including social and health benefits</li>   <li>investment cost: capital/equipment/material cost</li>   <li>expenses: consumable, taxes, insurance, etc.</li>   <li>contingencies: a specific provision for unforeseeable elements of cost within the defined project scope</li>  </ul>  <p>The applicant or the licensee should reflect local construction rates for labour, reasonably conservative estimates for materials, equipment and administrative expenses. <br/>   Example of standardized definition for cost categories for all major activities is presented in <a href="#sec-app-c">appendix C</a>. </p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="12"></div>
<h2 id="sec12">12. Presentation of Cost Estimate</h2>  <p>When developing a decommissioning cost estimate, consideration should be given to the presentation of cost estimate. The method most widely used as a platform for presenting the cost estimation for establishing the funding for decommissioning is the work breakdown structure (WBS). </p>  <p> The WBS elements are arranged in a hierarchal format. The first level identifies the principal activities of the decommissioning project as listed in section 10 of this document. The second level presents the major cost groupings under which project costs would be gathered. The first and second levels are usually aggregations of the typical activities identified in the third level. The cost associated with each activity could be subdivided according to the four cost categories shown in figure 1. </p>  <p> An example of the hierarchal cost structure used by the International Structure for Decommissioning Costing (ISDC) is presented in figure 1.</p>  <p><strong>Figure 1: Hierarchal cost structure as per International Structure for Decommissioning Costing</strong> <sup id="fnb5a-ref"><a className="fn-lnk" href="#fnb5"><span className="wb-inv">Footnote </span>5</a></sup></p>  <div className="module-poster span-5"> <img src="/images/regulatory-documents/regdoc-3-3-1/figure1-eng.png" alt="Hierarchal cost structure as per International Structure for Decommissioning Costing " /> </div>  <div className="clear"></div>  <p>Subsequent levels to the cost  structure could be added in order to distinguish costs related to specific parts  of the facility or specific periods of decommissioning project. The ISDC  summary of cost item hierarchy is presented in <a href="#sec-app-d">appendix D</a>. The detailed itemization  presented in the aforementioned appendix provides general guidance on cost to  be included in the estimate. The applicants and licensees should ensure that  costs for all activities described in the decommissioning plan are reflected. </p>  <p> The approaches to cost estimate  vary depending on the primary objective of the cost estimate, the facility  lifecycle stage and the advancement of decommissioning planning. Brief  description and comparison of those estimating methods is provided in table 1 in <a href="#app-e">appendix E</a>. </p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="13"></div>
<h2 id="sec13">13. Elements of Cost Estimates</h2>  <p>When developing a facility decommissioning cost estimate, the four basic elements to a cost estimate should be considered: Basis of estimate, structure of estimate (work breakdown structure [WBS]), schedule and uncertainty analysis. These four elements are described in detail in the following sections.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="13.1"></div>
<h3 id="sec13-1">13.1 Basis of estimate</h3>  <p>The basis of estimate (BOE) is the foundation upon which the cost estimate is developed. A well-documented BOE should fully reflect the current decommissioning plan for the facility. The BOE should provide a detailed description of the decommissioning project including: </p>  <ul>   <li>assumptions and exclusions, including the reference year and the currency used</li>   <li>boundary conditions and limitations &ndash; legal and technical (e.g., regulatory framework)</li>   <li>decommissioning strategy description</li>   <li>end state of the facility</li>   <li>stakeholder input/concerns</li>   <li>facility description and site characterization (radiological/hazardous material inventory)</li>   <li>waste management (packaging, storage, transportation, and disposal)</li>   <li>used fuel management (activities included into a decommissioning project)</li>   <li>sources of data used (actual field data vs. estimating judgment)</li>   <li>cost estimating methodology used; e.g., bottom-up</li>   <li>the basis for determining contingency, estimating uncertainty and risk </li>   <li>discussion of techniques and technology to be used</li>   <li>description of computer codes or calculation methodology employed</li>   <li>schedule analysis</li>   <li>uncertainty analysis </li>  </ul>  <p>The cost estimate for decommissioning should provide that, if impacts of proposed operations are difficult or impossible to estimate with precision, the worst-case scenario or &ldquo;decommissioning tomorrow approach&rdquo; must&nbsp;be used. The applicants and licensee should not assume drawdown of nuclear substances or hazardous waste during operations. A credit for salvage of materials or equipment is not allowed. For the purpose of the cost estimate, they mustbe considered waste.<br/>   The cost estimate for decommissioning must &nbsp;cover the entire decommissioning project including the need for post-closure licensing, monitoring, surveillance and maintenance and institutional control.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="13.2"></div>
<h3 id="sec13-2">13.2 Structure of estimate</h3>  <p>The WBS is used to categorize cost elements and work activities into logical groupings that have a direct or indirect relationship to each other and to determine how they affect the overall cost of the project. To that end, the work scope cost elements are broken down into activity-dependent, period-dependent, and collateral costs as defined in the following paragraphs. </p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="13.2.1"></div>
<h4 id="sec13-2-1">13.2.1 Activity-dependent costs</h4>  <p>Activity-dependent costs are costs associated directly with performing decommissioning activities. Examples of such activities include decontamination; removal of equipment; demolition of buildings; and waste packaging, shipping and disposal. These activities lend themselves to the use of unit cost and work productivity factors (or work difficulty factors) applied against the facility and structure&rsquo;s inventories to develop the decommissioning cost and schedule.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="13.2.2"></div>
<h4 id="sec13.2.2">13.2.2 Period-dependent costs</h4>  <p>Period-dependent costs include those activities associated primarily with the project duration: engineering, project management, dismantling management, licensing, health and safety, security, energy and quality assurance. These are primarily management staffing level costs, developed by estimating the manpower loading and associated overhead costs based on the scope of work to be accomplished during individual phases within each period of the project.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="13.3"></div>
<h3 id="sec13-3">13.3 Collateral and special item costs</h3>  <p>In addition to activity and period-dependent costs, there are costs for special items, such as for procurement of construction or dismantling equipment, site preparation, insurance, property taxes, health physics supplies, liquid radioactive waste processing and independent verification surveys. Such items do not fall in either of the other categories.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="13.3.1"></div>
<h4 id="sec13-3-1">13.3.1 Contingency</h4>  <p>Contingency is a work scope element of  cost and it should be applied to the base cost to account for unforeseen  elements of cost that are likely to occur. Because of the unique nature of this  element of cost, the application of contingency is further described in <a href="#sec13-5">section 13.5</a> of this document.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="13.4"></div>
<h3 id="sec13-4">13.4 Schedule</h3>  <p>The duration of a decommissioning project affects its cost importantly through the period-dependent costs and the selected technology for the activity-dependent work. The project schedule is an integral part of a cost estimate. </p>  <p> The preparation of a schedule is a well-developed process for which proven software programs are available. </p>  <p> The breakdown by project phase ties together all related activities in a chronological sequence to better define the work scope and schedule. The schedule work breakdown structure should be the same as the cost estimate work breakdown structure. </p>  <p> Activity sequencing requires the determination and documentation of the relationship between activities. Work process flow charts should be used to structure the relationship between activities. </p>  <p> At the early stages of decommissioning planning and cost estimation, a summary-level schedule may be provided that includes the principal activities and a more detailed schedule may be provided later based on the detailed decommissioning planning. </p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="13.5"></div>
<h3 id="sec13-5">13.5 Uncertainty analysis</h3>  <p>The BOE should fully define the boundaries of the decommissioning project scope and set out the basis for estimating the base cost and the associated uncertainties. </p>  <p> Contingencies are defined as unforeseeable elements of cost <strong>within</strong> the defined project scope, while uncertainties may also cover unforeseeable elements <strong>outside</strong> the defined project scope, or the changes <strong>in</strong> the scope of the project as defined. </p>  <p> The base cost is first calculated on the basis of standard conditions where activities are performed within the defined project scope, without delays, interruptions, inclement weather, tool or equipment breakdown, labour strikes, waste shipment problems, disposal facility waste acceptance criteria changes, or changes in the anticipated shutdown conditions. </p>  <p> The following three approaches for applying contingency could be used: </p>  <ul>
<li>for the entire decommissioning project </li>
<li>for groups of decommissioning activities </li>
<li>for individual decommissioning activities </li>  </ul>  <p>Licensees should add contingencies to the base cost as a specific provision for unforeseeable elements of cost within the defined project scope, which are likely to occur. Licensees must&nbsp;provide a justification of&nbsp;the contingencies applied to the cost estimates and link them to the cost estimate category. Contingencies are an integral part of the cost estimate and are expected to be spent during the realization of the decommissioning project. </p>  <p> The <strong>outside</strong>-of-project scope uncertainties might be related to legal, regulatory, technical, and market-related uncertainties that might have significant economic and cost implications. </p>  <p> Licensees must&nbsp;address the outside-of-project scope uncertainties if there is a significant change to the defined scope of the project or if any of the outside-of project scope uncertainties are likely to result in a more than 5% change of estimated cost for the decommissioning project. </p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="14"></div>
<h2 id="sec14">14. Development of the Financial Guarantee</h2>  <p>The cost estimates are first prepared assuming that the decommissioning will be executed at the time the cost is estimated called current value. However, the time required to fully decommission can vary widely and has a significant impact on the calculation of the cost of decommissioning required for the financial guarantee. Various factors must therefore be outlined in the estimate of the financial guarantee requirement:</p>  <ul className="list-bullet-none">   <li>Inflation rate: The percentage increase in the price of goods and services annually. The rate of inflation used should be from a reasonable and credible source, such as from the Bank of Canada. Licensees must&nbsp;factor in inflation to ensure that there are sufficient funds reserved even, when consideration for price increases is factored in.</li><br />   <li>Discount rate (or expected rate of return on investment): In cases where the funds are invested, the expected rate of return that will be earned by the funds over time must be estimated. This expected rate of return should be supported by assumptions such as historical performance of the fund over time, the risk of the portfolio etc.</li>  </ul>  <p>Another element that is important when performing this calculation is an estimate of when various elements of the work will be performed. Disbursements or planned spending must be factored in.</p>  <p> Starting with current value of the money, then applying the inflation rate and the discount rate, results in the net present value of funds required to be invested today, to ensure there are sufficient funds available for decommissioning in the future. </p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="14.1"></div>
<h3 id="sec14-1">14.1 Current value</h3>  <p>Cost estimates are first prepared in constant dollars which assumes that the expenditures occur at the time the estimate is prepared. This presents the current value of the liability and does not depend on the timing of the decommissioning activities. </p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="14.2"></div>
<h3 id="sec14-2">14.2 Cash flow and planned disbursements</h3>  <p>Schedule of cash flow and planned disbursements for decommissioning must also be submitted in order to calculate the net present value of decommissioning requirements</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="14.3"></div>
<h3 id="sec14-3">14.3 Net present value</h3>  <p>The net present value presents the current dollar value of estimated future cash expenditures. It depends on the timing of decommissioning activities and expected expenditure profile. </p>  <p> In order to determine how much money is required today to pay for future liability, economic assumptions with respect to inflation and interest rate must be considered. The applicant and the licensees must&nbsp;indicate the inflation rate and interest or discount rate used in calculations and justify the validity of the selected rates and assumptions.</p>  <p> As stated above, many decommissioning activities take place over a number of years, so it is important to ensure there are sufficient funds available today to cover costs that will be incurred years into the future. </p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="15"></div>
<h2 id="sec15">15. Review of Financial Guarantees</h2>  <p>Licensees must ensure that the financial guarantee in place remains valid, in effect and sufficient to meet decommissioning needs according to the most up-to-date PDP. Therefore, licensees must revise their financial guarantee at a minimum every five years or earlier when requested by the Commission. </p>  <p> Licensees may request a review of their&nbsp;financial guarantees by the CNSC at any time.</p>  <p> Licensees must submit the updated financial guarantee for review by CNSC staff and acceptance by the Commission. </p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="part-2"></div>
<h2 id="sec-part-2">Part II: Financial Guarantees for Termination of Licensed Activities</h2>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="16"></div>
<h2 id="sec16">16. Introduction</h2>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="16.1"></div>
<h3 id="sec16-1">16.1 Scope</h3>  <p>Part II of this document applies to holders of nuclear substances and radiation devices, prescribed equipment, and Class II facilities licensees. These licensees must ensure that they are financially responsible for the termination of the activities authorized by their licence. The CNSC has developed an insurance based financial guarantee program to ensure that the Crown is not held financially responsible in the situation where a licensee has failed to properly terminate licensed activities.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="17"></div>
<h2 id="sec17">17. Financial Guarantee Program </h2>  <p>The insurance based financial guarantee program was developed exclusively for CNSC licensees holding licences for activities, such as nuclear substances and radiation devices, prescribed equipment, and Class II facilities. Under this program the CNSC is the insured party and the beneficiary. Licensees that participate in this program contribute to the cost of the insurance policy, in proportion to their liability. Liability is calculated on the basis of a formula that prescribes an estimated liability for each unit of prescribed equipment and sealed source as well as a room or laboratory where open source material is used. </p>  <p> Additional information on financial guarantees for <a href="/eng/nuclear-substances/licensing-nuclear-substances-and-radiation-devices/licensing-process/financial-guarantees/index">nuclear substances and radiation devices</a> and <a href="/eng/nuclear-substances/licensing-nuclear-substances-and-radiation-devices/licensing-process/financial-guarantees-classII-nuclear-facilities">prescribed equipment and Class II facilities</a> can be found on the CNSC website. </p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="18"></div>
<h2 id="sec18">18. Alternatives to Financial Guarantee Program</h2>  <p>The financial guarantee program is flexible in situations where a licensee&rsquo;s activities do not meet the formula as prescribed. In these situations a licensee has the option to propose its own financial guarantee for review and acceptance by the Commission following the established principles of section 3 and 4 of this document. </p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="19"></div>
<h2 id="sec19">19. Review of Financial Guarantees</h2>  <p>Financial guarantees for licences are reviewed annually by the CNSC staff or as required by the Commission, to ensure that coverage is sufficient for the licensed activities.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="app-a"></div>
<h2 id="sec-app-a">Appendix A: Example of Letter of Credit</h2>  <p>The following provides an example of letter of credit <sup id="fnbb-ref"><a className="fn-lnk" href="#fnbb"><span className="wb-inv">Footnote </span>2</a></sup>. This template may be used by licence applicants or licensees when submitting a letter of credit to the CNSC.</p>  <ol>   <li>The undersigned, hereinafter called the Bank, irrevocably guarantees to pay to the Beneficiary, an amount not exceeding xxx Canadian dollars including interest, costs and accessories, upon receipt of a written demand by the Beneficiary certifying that the Applicant has failed to fulfil its obligations with respect to decommissioning resulting from, or under the <em>Nuclear Safety and Control Act</em>, its regulations, or licence no. xxx. </li>   <li>This Guarantee is effective from its issuance and must terminate and automatically expire on the expiry date. </li>   <li>Upon expiry of this Guarantee, by payment in favour of the Beneficiary or by lapse of time, the Beneficiary must return to the Bank the original of the Guarantee, bearing clear mention of its cancellation. </li>   <li>This Guarantee must be deemed to be automatically extended without amendment for a further one (1) year period from the present or any future expiration date hereof, unless at least thirty (30) days prior to the present or any future expiration date, the bank notifies you, the Beneficiary, in writing by courier or registered mail, that the bank elect not to consider this Guarantee to be renewable for any additional period.</li>   <li>Any demand for payment must be signed by a person authorized to act on the behalf of the beneficiary. </li>   <li>The Bank will honour the demand of the Beneficiary without enquiring whether the Beneficiary has the right as between itself and the Applicant to make such demand and without acknowledging any claim of the Applicant. </li>   <li>The Bank&#39;s liability under this Guarantee must in no event exceed the sum mentioned in paragraph 1 herein, and such liability must terminate if a demand for payment made strictly in accordance with the requirements of these presents has not been received at the above branch no later than on the expiry date. </li>   <li>This Guarantee is not assignable. </li>   <li>This Guarantee is governed by the laws of xxx, and the Courts of that province must have exclusive jurisdiction on all matters relating to this Guarantee and all recourses resulting therefrom. </li>   <li>This Guarantee sets forth in its entirety all of the obligations of the Bank and these obligations cannot be modified, interpreted or increased by any document or agreement mentioned herein, and any reference to any such document or agreement must not be construed as incorporating same to this Guarantee.</li>  </ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="app-b"></div>
<h2 id="sec-app-b">Appendix B: Estimate Grades and Classification</h2>
<p>A universally accepted standard for developing decommissioning cost estimates has not been established. However, organizations such as the Association for the Advancement of Cost Engineering (AACE International) have developed guidelines for estimation cost for different industries. </p>
<p> <strong>General</strong></p>
<p> AACE International and the Construction Industry Institute have established guidelines and procedures for estimating costs. These guidelines rank cost estimates as Grades A, B, or C, depending on their level of accuracy.</p>
<p> <strong>Grade C (accuracy of ±25% to 30%)</strong></p>
<p> Grade C cost estimates are known as order-of-magnitude cost estimates. They are performed quickly by using shortcut techniques such as</p>
<ul className="list-lower-alpha">
<li>escalating and/or scaling up from previous estimates</li>
<li>cost curves</li>
<li>preliminary process design and equipment sizing without plot plans or major equipment quotations</li>
</ul>
<p>It is likely that the overall scope of the project has not been defined. <strong></strong></p>
<p> <strong>Grade B (accuracy of ±15% to 20%)</strong></p>
<p> Grade B cost estimates are known as budgetary cost estimates. They can be developed when the scope of the project has been defined but the detailed planning has not been performed. For large projects, they can be developed as soon as the preliminary process flow diagrams, preliminary plot plans, and equipment sizing have been completed. On smaller projects, estimates are developed when approximately 10% of the engineering is completed. </p>
<p> <strong>Grade A (accuracy of ±10%)</strong></p>
<p> Grade A cost estimates are known as definitive cost estimates. They can be developed when the scope of the project is well defined and the detailed planning is prepared. For large projects, a Grade A estimate are prepared when the engineering flow diagrams, facility plans, and equipment lists are completed, and design has progressed to the stage required for the bidding process. For small projects, more engineering detail is necessary, and 30% to 50% of the engineering might be required to be completed.</p>
<p> <strong>Cost estimate classes</strong></p>
<p> AACE International describes a classification system for cost estimates in the process industry (see table&nbsp;1). In general, the accuracy of the cost estimate is higher as the level of project definition is increased. Decommissioning cost estimates prepared for the PDP are typically prepared as Class 4 study-type cost estimates. For additional information refer to the AACE International&rsquo;s <em>Required Skills and Knowledge of Cost Engineering</em>.</p>
<p><strong>Table 1: AACE International cost estimate classification for process industries</strong> <sup id="fnb6-ref"><a className="fn-lnk" href="#fnb6"><span className="wb-inv">Footnote </span>6</a></sup></p>
<table className="table table-striped">
<thead>
<tr>
<th>Estimate class</th>
<th>Level of definition, % of complete definition</th>
<th>End usage (typical purpose of estimate)</th>
<th>Methodology (typical estimating method)</th>
<th>Expected accuracy (typical variation in low and high ranges), %</th>
<th>Preparation effort (typical degree of effort relative to lowest cost index of 1)</th>
</tr>
</thead>
<tbody>
<tr>
<td><p>Class 5</p></td>
<td><p>0% to 2% </p></td>
<td><p>Concept screening </p></td>
<td><p>Capacity factored, parametric models, judgment, or analogy </p></td>
<td><p>Low: -20% to -50%<br/>
High: +30% to +100% </p></td>
<td><p>1 </p></td>
</tr>
<tr>
<td><p>Class 4</p></td>
<td><p>1% to 15% </p></td>
<td><p>Study of feasibility </p></td>
<td><p>Equipment factored or parametric models </p></td>
<td><p>Low: -15% to -30%<br/>
High: +30% to +100% </p></td>
<td><p>2-4 </p></td>
</tr>
<tr>
<td><p>Class 3</p></td>
<td><p>10% to 40% </p></td>
<td><p>Budget, authorization of control </p></td>
<td><p>Semi-detailed unit costs with assembly level line items </p></td>
<td><p>Low: -10% to -20%<br/>
High: +10% to +30% </p></td>
<td><p>3-10 </p></td>
</tr>
<tr>
<td><p>Class 2</p></td>
<td><p>30% to 70% </p></td>
<td><p>Control or bid/tender </p></td>
<td><p>Detailed unit cost with forced detailed take-off </p></td>
<td><p>Low: -5% to -15%<br/>
High: +5% to +20% </p></td>
<td><p>4-20 </p></td>
</tr>
<tr>
<td><p>Class 1</p></td>
<td><p>50% to 100%</p></td>
<td><p>Check estimate or bid/tender </p></td>
<td><p>Detailed unit cost with detailed take-off</p></td>
<td><p>Low: -3% to -10%<br/>
High: +3% to +15%</p></td>
<td><p>5-100</p></td>
</tr>
</tbody>
</table>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="app-c"></div>
<h2 id="sec-app-c">Appendix C: Standardized Definitions for Cost Categories</h2>
<p>This appendix provides information on standardised definitions for cost categories for all major activities. These definitions have been developed by the International Structure for Decommissioning Costing (ISDC) <sup id="fnb5b-ref"><a className="fn-lnk" href="#fnb5"><span className="wb-inv">Footnote </span>5</a></sup>.</p>
<p> For each cost item, four cost categories have been defined:</p>
<ol>
<li>labour costs</li>
<li>investment costs (capital, equipment and material costs)</li>
<li>expenses</li>
<li>contingency</li>
</ol>
<h3>1. Labour costs</h3>
<p>Labour costs are defined as costs calculated on the basis of the workload for a particular cost item and the labour cost unit rate, including:</p>
<ul>
<li>salaries</li>
<li>contributions to social security and health insurance</li>
<li>company contributions to pension scheme and fringe benefits</li>
<li>overheads</li>
</ul>
<h3>Investment costs (capital, equipment and material costs)</h3>
<p>Investment costs are defined as costs for:</p>
<ul>
<li>equipment to be used for a particular cost item </li>
<li>machinery to be used for a particular cost item </li>
</ul>
<h3>3. Expenses</h3>
<p>Expenses are defined as costs for consumer items or expendable items, or as costs for other expenditures related to decommissioning cost items where applicable, such as:</p>
<ul>
<li>consumables</li>
<li>spare parts</li>
<li>protective clothing</li>
<li>travel expenses</li>
<li>legal expenses</li>
<li>taxes</li>
<li>value added tax</li>
<li>insurance</li>
<li>consultants costs</li>
<li>quality assurance costs</li>
<li>rents</li>
<li>office material</li>
<li>heating costs</li>
<li>water costs</li>
<li>electricity costs</li>
<li>computer costs</li>
<li>telephone/fax costs</li>
<li>cleaning</li>
<li>interest</li>
<li>public relation</li>
<li>licences/patents</li>
<li>decommissioning authorisation</li>
<li>income from asset recovery (&ldquo;negative expenses&rdquo;)</li>
</ul>
<h3>4. Contingency</h3>
<p>Contingency, added to individual cost items of the standardised listing, is a specific provision for unforeseeable elements of costs within the defined project scope. Any impacts on cost outside of the scope of the decommissioning project are not considered.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="app-d"></div>
<h2 id="sec-app-d">Appendix D: International Structure for Decommissioning Costing - Cost Item Hierarchy</h2>
<p>This appendix provides information from the International Structure for Decommissioning Costing (ISDC) <sup id="fnb5c-ref"><a className="fn-lnk" href="#fnb5"><span className="wb-inv">Footnote </span>5</a></sup>. The ISDC was developed as a presentation platform for standardized listing of costs within the scope of decommissioning planning. Note that cost estimation for decommissioning of nuclear facilities can vary widely in format, content and practice.</p>
<h3>ISDC Summary of cost item hierarchy</h3>
<ul className="list-bullet-none">
<li><strong>Principle activity 01: Pre-decommissioning actions</strong>
<ul className="list-bullet-none">
<li>01.0100 Decommissioning planning
<ul className="list-bullet-none">
<li>01.0101 <em>Strategic planning</em></li>
<li>01.0102 <em>Preliminary planning</em></li>
<li>01.0103 <em>Final planning</em></li>
</ul>
</li>
<li>01.0200 Facility characterisation
<ul className="list-bullet-none">
<li>01.0201 <em>Detailed facility characterisation.</em></li>
<li>01.0202 <em>Hazardous-material surveys and analyses</em></li>
<li>01.0203 <em>Establishing a facility inventory database</em></li>
</ul>
</li>
<li>01.0300 Safety, security and environmental studies
<ul className="list-bullet-none">
<li>01.0301 <em>Decommissioning safety analysis</em></li>
<li>01.0302 <em>Environmental impact assessment</em></li>
<li>01.0303 <em>Safety, security and emergency planning for site operations</em></li>
</ul>
</li>
<li>01.0400 Waste management planning
<ul className="list-bullet-none">
<li>01.0401 <em>Establish waste management criteria</em></li>
<li>01.0402 <em>Develop a waste management plan</em></li>
</ul>
</li>
<li>01.0500 Authorisation
<ul className="list-bullet-none">
<li> 01.0501 <em>License applications and license approvals</em></li>
<li>01.0502 <em>Stakeholder involvement</em></li>
</ul>
</li>
<li>01.0600 Preparing management group and contracting
<ul className="list-bullet-none">
<li>01.0601 <em>Management team activities</em></li>
<li>01.0602 <em>Contracting activities</em></li>
</ul>
</li>
</ul>
</li>
<li><strong>Principle activity 02: Facility shutdown activities</strong>
<ul className="list-bullet-none">
<li>02.0100 Plant shutdown and inspection
<ul className="list-bullet-none">
<li>02.0101 <em>Termination of operation, plant stabilisation, isolation and inspection</em></li>
<li>02.0102 <em>Defueling and transfer of fuel to spent-fuel storage</em></li>
<li>02.0103 <em>Cooling down of spent fuel</em></li>
<li>02.0104 <em>Management of fuel, fissile and other nuclear materials</em></li>
<li>02.0105 <em>Isolation of power equipment</em></li>
<li>02.0106 <em>Facility reuse</em></li>
</ul>
</li>
<li>02.0200 Drainage and drying of systems
<ul className="list-bullet-none">
<li>02.0201 <em>Drainage and drying of closed systems not in operation</em></li>
<li>02.0202 <em>Drainage of spent-fuel pool and other open systems not in operation</em></li>
<li>02.0203 <em>Removal of sludge and products from open systems</em></li>
<li>02.0204 <em>Drainage of special process fluids</em></li>
</ul>
</li>
<li>02.0300 Decontamination of closed systems for dose reduction
<ul className="list-bullet-none">
<li>02.0301 <em>Decontamination of process installations using operational procedures</em></li>
<li>02.0302 <em>Decontamination of process installations using additional procedures</em></li>
</ul>
</li>
<li>02.0400 Radiological inventory characterisation to support detailed planning
<ul className="list-bullet-none">
<li>02.0401 <em>Radiological inventory characterisation</em></li>
<li>02.0402 <em>Underground water monitoring</em></li>
</ul>
</li>
<li>02.0500 Removal of system fluids, operational waste and redundant material
<ul className="list-bullet-none">
<li>02.0501 <em>Removal of combustible material</em></li>
<li>02.0502 <em>Removal of system fluids (water, oils, etc.)</em></li>
<li>02.0503 <em>Removal of special system fluids</em></li>
<li>02.0504 <em>Removal of waste from decontamination</em></li>
<li>02.0505 <em>Removal of spent resins</em></li>
<li>02.0506 <em>Removal of specific operational waste from fuel cycle facilities</em></li>
<li>02.0507 <em>Removal of other waste from facility operations</em></li>
<li>02.0508 <em>Removal of redundant equipment and materials</em></li>
</ul>
</li>
</ul>
</li>
<li><strong>Principle activity 03: Additional activities for safe enclosure </strong>
<ul className="list-bullet-none">
<li>03.0100 Preparation for safe enclosure
<ul className="list-bullet-none">
<li>03.0101 <em>Decontamination of selected components and areas to facilitate safe enclosure</em></li>
</ul>
<li>03.0101 Decontamination of selected components and areas to facilitate safe enclosure
<ul className="list-bullet-none">
<li>03.0102 <em>Zoning for long-term storage</em></li>
<li>03.0103 <em>Removal of inventory not suitable for safe enclosure</em></li>
<li>03.0104 <em>Dismantling and transfer of contaminated equipment and material to containment structure for long-term storage</em></li>
<li>03.0105 <em>Radiological inventory characterisation for safe enclosure</em></li>
</ul>
</li>
<li>03.0200 Site boundary reconfiguration, isolating and securing structures
<ul className="list-bullet-none">
<li>03.0201 <em>Modification of auxiliary systems</em></li>
<li>03.0202 <em>Site boundary reconfiguration</em></li>
<li>03.0203 <em>Construction of temporary enclosures, stores, structural enhancements, etc.</em></li>
<li>03.0204 <em>Stabilisation of radioactive and hazardous waste pending remediation</em></li>
<li>03.0205 <em>Facility controlled area hardening, isolation for safe enclosure</em></li>
</ul>
</li>
<li>03.0300 Facility entombment
<ul className="list-bullet-none">
<li>03.0301 <em>Facility entombment as end state of decommissioning strategy</em></li>
<li>03.0302 <em>Institutional control and monitoring of the entombment end state</em></li>
</ul>
</li>
</ul>
</li>
<li><strong>Principle activity 04: Dismantling activities within the controlled area</strong>
<ul className="list-bullet-none">
<li>04.0100 Procurement of equipment for decontamination and dismantling
<ul className="list-bullet-none">
<li>04.0101 <em>Procurement of general site-dismantling equipment</em></li>
<li>04.0102<em> Procurement of equipment for decontamination of personnel and tools</em></li>
<li>04.0103 <em>Procurement of special tools for dismantling the reactor systems</em></li>
<li>04.0104 <em>Procurement of special tools for dismantling in fuel cycle facilities</em></li>
<li>04.0105 <em>Procurement of special tools for dismantling other components or structures</em></li>
</ul>
</li>
<li>04.0200 Preparations and support for dismantling
<ul className="list-bullet-none">
<li>04.0201 <em>Reconfiguration of existing services, facilities and site to support dismantling</em></li>
<li>04.0202 <em>Preparation of infrastructure and logistics for dismantling</em></li>
<li>04.0203 <em>Ongoing radiological characterisation during dismantling</em></li>
</ul>
</li>
<li>04.0300 Pre-dismantling decontamination
<ul className="list-bullet-none">
<li>04.0301 <em>Drainage of remaining systems</em></li>
<li>04.0302 <em>Removal of sludge and products from remaining systems</em></li>
<li>04.0303 <em>Decontamination of remaining systems</em></li>
<li>04.0304 <em>Decontamination of areas in buildings</em></li>
</ul>
</li>
<li>04.0400 Removal of materials requiring specific procedures
<ul className="list-bullet-none">
<li>04.0401 <em>Removal of thermal insulation</em></li>
<li>04.0402 <em>Removal of asbestos</em></li>
<li>04.0403 <em>Removal of other hazardous materials</em></li>
</ul>
</li>
<li>04.0500 Dismantling of main process systems, structures and components
<ul className="list-bullet-none">
<li>04.0501 <em>Dismantling of reactor internals</em></li>
<li>04.0502 <em>Dismantling of reactor vessel and core components</em></li>
<li>04.0503 <em>Dismantling of other primary loop components</em></li>
<li>04.0504 <em>Dismantling of main process systems in fuel cycle facilities</em></li>
<li>04.0505 <em>Dismantling of main process systems in other nuclear facilities</em></li>
<li>04.0506 <em>Dismantling of external thermal/biological shields</em></li>
</ul>
</li>
<li>04.0600 Dismantling of other systems and components
<ul className="list-bullet-none">
<li>04.0601 <em>Dismantling of auxiliary systems</em></li>
<li>04.0602 <em>Dismantling of remaining components</em></li>
</ul>
</li>
<li>04.0700 Removal of contamination from building structures
<ul className="list-bullet-none">
<li>04.0701 <em>Removal of embedded elements in buildings</em></li>
<li>04.0702<em> Removal of contaminated structures</em></li>
<li>04.0703 <em>Decontamination of buildings</em></li>
</ul>
</li>
<li>04.0800 Removal of contamination from areas outside buildings
<ul className="list-bullet-none">
<li>04.0801 <em>Removal of underground contaminated pipes and structures</em></li>
<li>04.0802 <em>Removal of contaminated soil and other contaminated items</em></li>
</ul>
</li>
<li>04.0900 Final radioactivity survey for release of buildings
<ul className="list-bullet-none">
<li>04.0901<em> Final radioactivity survey of buildings</em></li>
<li>04.0902 <em>Declassification of buildings</em></li>
</ul>
</li>
</ul>
</li>
<li><strong>Principle activity 05: Waste processing, storage and disposal</strong>
<ul className="list-bullet-none">
<li>05.0100 Waste management system
<ul className="list-bullet-none">
<li>05.0101 <em>Establishing the waste management system </em>
<li>05.0102<em> Reconstruction of existing facilities for decommissioning waste management system</em></li>
<li>05.0103 <em>Procurement of additional equipment for management of historical/legacy waste</em></li>
<li>05.0104 <em>Maintenance, surveillance and operational support for waste management system</em></li>
<li>05.0105 <em>Demobilisation/decommissioning of waste management system</em></li>
</ul>
</li>
<li>05.0200 Management of historical/legacy high-level waste
<ul className="list-bullet-none">
<li>05.0201 <em>Characterisation</em></li>
<li>05.0202 <em>Retrieval and processing</em></li>
<li>05.0203 <em>Final conditioning</em></li>
<li>05.0204 <em>Storage</em></li>
<li>05.0205 <em>Transport</em></li>
<li>05.0206 <em>Disposal</em></li>
<li>05.0207 <em>Containers</em></li>
</ul></li>
<li>05.0300 Management of historical/legacy intermediate-level waste
<ul className="list-bullet-none">
<li>05.0301 <em>Characterisation</em></li>
<li>05.0302 <em>Retrieval and processing</em></li>
<li>05.0303 <em>Final conditioning</em></li>
<li>05.0304 <em>Storage</em></li>
<li>05.0305 <em>Transport</em></li>
<li>05.0306 <em>Disposal</em></li>
<li>05.0307 <em>Containers</em></li>
</ul>
<li>05.0400 Management of historical/legacy low-level waste
<ul className="list-bullet-none">
<li>05.0401 <em>Characterisation</em></li>
<li>05.0402 <em>Retrieval and treatment</em></li>
<li>05.0403 <em>Final conditioning</em></li>
<li>05.0404 <em>Storage</em></li>
<li>05.0405 <em>Transport</em></li>
<li>05.0406 <em>Disposal</em></li>
<li>05.0407 <em>Containers</em></li>
</ul>
</li>
<li>05.0500 Management of historical/legacy very low-level waste
<ul className="list-bullet-none">
<li>05.0501 <em>Characterisation</em></li>
<li>05.0502 <em>Retrieval, treatment and packaging</em></li>
<li>05.0503 <em>Transport</em></li>
<li>05.0504 <em>Disposal</em></li>
</ul>
</li>
<li>05.0600 Management of historical/legacy exempt waste and materials
<ul className="list-bullet-none">
<li>05.0601<em> Retrieval, treatment and packaging</em></li>
<li>05.0602 <em>Clearance measurement of exempt waste and materials</em></li>
<li>05.0603 <em>Transport of hazardous waste</em></li>
<li>05.0604 <em>Disposal of hazardous waste at dedicated waste dumps</em></li>
<li>05.0605 <em>Transport of conventional waste and materials</em></li>
<li>05.0606 <em>Disposal of conventional waste at conventional waste dumps</em></li>
</ul>
</li>
<li>05.0700 Management of decommissioning high-level waste
<ul className="list-bullet-none">
<li>05.0701 <em>Characterisation</em></li>
<li>05.0702 <em>Processing</em></li>
<li>05.0703 <em>Final conditioning</em></li>
<li>05.0704 <em>Storage</em></li>
<li>05.0705 <em>Transport</em></li>
<li>05.0706 <em>Disposal</em></li>
<li>05.0707 <em>Containers</em></li>
</ul>
</li>
<li>05.0800 Management of decommissioning intermediate-level waste
<ul className="list-bullet-none">
<li>05.0801 <em>Characterisation</em></li>
<li>05.0802 <em>Processing</em></li>
<li>05.0803 <em>Final conditioning</em></li>
<li>05.0804 <em>Storage</em></li>
<li>05.0805 <em>Transport</em></li>
<li>05.0806 <em>Disposal</em></li>
<li>05.0807 <em>Containers</em></li>
</ul>
</li>
<li>05.0900 Management of decommissioning low-level waste
<ul className="list-bullet-none">
<li>05.0901 <em>Characterisation</em></li>
<li>05.0902 <em>Processing</em></li>
<li>05.0903 <em>Final conditioning</em></li>
<li>05.0904 <em>Storage</em></li>
<li>05.0905 <em>Transport</em></li>
<li>05.0906 <em>Disposal</em></li>
<li>05.0907 <em>Containers</em></li>
</ul>
</li>
<li>05.1000 Management of decommissioning very low-level waste
<ul className="list-bullet-none">
<li>05.1001 <em>Characterisation</em></li>
<li>05.1002 <em>Treatment and packaging</em></li>
<li>05.1003 <em>Transport</em></li>
<li>05.1004 <em>Disposal</em></li>
</ul>
</li>
<li>05.1100 Management of decommissioning very short-lived waste
<ul className="list-bullet-none">
<li>05.1101 <em>Characterisation</em></li>
<li>05.1102 <em>Treatment, storage, handling and packaging</em></li>
<li>05.1103 <em>Final management of decommissioning very short-lived waste</em></li>
</ul>
</li>
<li>05.1200 Management of decommissioning exempt waste and materials
<ul className="list-bullet-none">
<li>05.1201 <em>Treatment and packaging</em></li>
<li>05.1202 <em>Clearance measurement of exempt waste and materials</em></li>
<li>05.1203 <em>Transport of hazardous waste</em></li>
<li>05.1204 <em>Disposal of hazardous waste at dedicated waste dumps</em></li>
<li>05.1205 <em>Transport of conventional waste and materials</em></li>
<li>05.1206 <em>Disposal of conventional waste at conventional waste dumps</em></li>
</ul>
</li>
<li>05.1300 Management of decommissioning waste and materials generated outside controlled areas
<ul className="list-bullet-none">
<li>05.1301 <em>Recycling of concrete</em></li>
<li>05.1302 <em>Treatment and packaging of hazardous waste</em></li>
<li>05.1303<em> Treatment and recycling of other materials</em></li>
<li>05.1304 <em>Transport of hazardous waste</em></li>
<li>05.1305 <em>Disposal of hazardous waste at dedicated waste dumps</em></li>
<li>05.1306 <em>Transport of conventional waste and materials</em></li>
<li>05.1307 <em>Disposal of conventional waste at conventional waste dumps</em></li>
</ul>
</li>
</ul>
</li>
<li><strong>Principle activity 06: Site infrastructure and operation</strong>
<ul className="list-bullet-none">
<li>06.0100 Site security and surveillance
<ul className="list-bullet-none">
<li>06.0101 <em>Procurement of general security equipment</em></li>
<li>06.0102 <em>Operation and maintenance of automated access control systems, monitoring systems and alarms</em></li>
<li>06.0103 <em>Security fencing and protection of remaining entrances against trespassing</em></li>
<li>06.0104 <em>Deployment of guards/security forces</em></li>
</ul>
</li>
<li>06.0200 Site operation and maintenance
<ul className="list-bullet-none">
<li>06.0201 <em>Inspection and maintenance of buildings and systems</em></li>
<li>06.0202 <em>Site upkeep activities</em></li>
</ul>
</li>
<li>06.0300 Operation of support systems
<ul className="list-bullet-none">
<li>06.0301 <em>Electricity supply systems</em></li>
<li>06.0302 <em>Ventilation systems</em></li>
<li>06.0303 <em>Heating, steam and lighting systems</em></li>
<li>06.0304 <em>Water supply systems</em></li>
<li>06.0305 <em>Sewage/waste water systems</em></li>
<li>06.0306 <em>Compressed air/nitrogen systems</em></li>
<li>06.0307 <em>Other systems</em></li>
</ul>
</li>
<li>06.0400 Radiation and environmental safety monitoring
<ul className="list-bullet-none">
<li>06.0401<em> Procurement and maintenance of equipment for radiation protection and environmental monitoring</em></li>
<li>06.0402 <em>Radiation protection and monitoring</em></li>
<li>06.0403 <em>Environmental protection and radiation environmental monitoring</em></li>
</ul>
</li>
</ul>
</li>
<li><strong>Principle activity 07: Conventional dismantling, demolition and site restoration</strong>
<ul className="list-bullet-none">
<li>07.0100 Procurement of equipment for conventional dismantling and demolition
<ul className="list-bullet-none">
<li>07.0101 <em>Procurement of equipment for conventional dismantling and demolition</em></li>
</ul>
</li>
<li>07.0200 Dismantling of systems and building components outside the controlled area
<ul className="list-bullet-none">
<li>07.0201 <em>Electricity generating system</em></li>
<li>07.0202 <em>Cooling system components</em></li>
<li>07.0203 <em>Other auxiliary systems</em></li>
</ul>
</li>
<li>07.0300 Demolition of buildings and structures
<ul className="list-bullet-none">
<li>07.0301 <em>Demolition of buildings and structures from the formerly controlled area</em></li>
<li>07.0302<em> Demolition of buildings and structures outside the controlled area</em></li>
<li>07.0303 <em>Dismantling of the stack</em></li>
</ul>
</li>
<li>07.0400 Final cleanup, landscaping and refurbishment
<ul className="list-bullet-none">
<li>07.0401 <em>Earthworks, landworks</em></li>
<li>07.0402 <em>Landscaping and other site finishing activities</em></li>
<li>07.0403 <em>Refurbishment of buildings</em></li>
</ul>
</li>
<li>07.0500 Final radioactivity survey of site
<ul className="list-bullet-none">
<li>07.0501 <em>Final survey</em></li>
<li>07.0502 <em>Independent verification of the final survey</em></li>
</ul>
</li>
<li>07.0600 Perpetuity funding/surveillance for limited or restricted release of property
<ul className="list-bullet-none">
<li>07.0601 <em>Routine maintenance</em></li>
<li>07.0602 <em>Surveillance and monitoring</em></li>
</ul>
</li>
</ul>
<li><strong>Principle activity 08: Project management, engineering and support</strong>
<ul className="list-bullet-none">
<li>08.0100 Mobilisation and preparatory work
<ul className="list-bullet-none">
<li>08.0101 <em>Mobilisation of personnel</em></li>
<li>08.0102<em> Establishment of general supporting infrastructure for decommissioning project</em></li>
</ul>
</li>
<li>08.0200 Project management
<ul className="list-bullet-none">
<li>08.0201 <em>Core management group</em></li>
<li>08.0202 <em>Project implementation planning, detailed ongoing planning</em></li>
<li>08.0203 <em>Scheduling and cost control</em></li>
<li>08.0204 <em>Safety and environmental analysis, ongoing studies</em></li>
<li>08.0205 <em>Quality assurance and quality surveillance</em></li>
<li>08.0206 <em>General administration and accounting</em></li>
<li>08.0207 <em>Public relations and stakeholders involvement</em></li>
</ul>
<li>08.0300 Support services
<ul className="list-bullet-none">
<li>08.0301 <em>Engineering support</em></li>
<li>08.0302 <em>Information system and computer support</em></li>
<li>08.0303 <em>Waste management support</em></li>
<li>08.0304 <em>Decommissioning support including chemistry, decontamination</em></li>
<li>08.0305 <em>Personnel management and training</em></li>
<li>08.0306 <em>Documentation and records control</em></li>
<li>08.0307 <em>Procurement, warehousing, and materials handling</em></li>
<li>08.0308 <em>Housing, office equipment, support services</em></li>
</ul>
</li>
<li>08.0400 Health and safety
<ul className="list-bullet-none">
<li>08.0401<em> Health physics</em></li>
<li>08.0402 <em>Industrial safety</em></li>
</ul>
</li>
<li>08.0500 Demobilisation
<ul className="list-bullet-none">
<li>08.0501 <em>Demobilisation of project infrastructure for decommissioning</em></li>
<li>08.0502 <em>Demobilisation of personnel</em></li>
</ul>
</li>
<li>08.0600 Mobilisation and preparatory work by contractors (if needed)
<ul className="list-bullet-none">
<li>08.0601 <em>Mobilisation of personnel</em></li>
<li>08.0602 <em>Establishment of general supporting infrastructure for decommissioning project</em></li>
</ul>
</li>
<li>08.0700 Project management by contractors (if needed)
<ul className="list-bullet-none">
<li>08.0701 <em>Core management group</em></li>
<li>08.0702 <em>Project implementation planning, detailed ongoing planning</em></li>
<li>08.0703 <em>Scheduling and cost control</em></li>
<li>08.0704 <em>Safety and environmental analysis, ongoing studies</em></li>
<li>08.0705 <em>Quality assurance and quality surveillance</em></li>
<li>08.0706 <em>General administration and accounting</em></li>
<li>08.0707 <em>Public relations and stakeholder involvement</em></li>
</ul>
</li>
<li>08.0800 Support services by contractors (if needed)
<ul className="list-bullet-none">
<li>08.0801 <em>Engineering support</em></li>
<li>08.0802 <em>Information system and computer support</em></li>
<li>08.0803 <em>Waste management support</em></li>
<li>08.0804 <em>Decommissioning support including chemistry, decontamination</em></li>
<li>08.0805 <em>Personnel management and training</em></li>
<li>08.0806 <em>Documentation and records control</em></li>
<li>08.0807 <em>Procurement, warehousing, and materials handling</em></li>
<li>08.0808 <em>Housing, office equipment, support services</em></li>
</ul>
</li>
<li>08.0900 Health and safety by contractors (if needed)
<ul className="list-bullet-none">
<li>08.0901 <em>Health physics</em></li>
<li>08.0902 <em>Industrial safety</em></li>
</ul>
</li>
<li>08.1000 Demobilisation by contractors (if needed)
<ul className="list-bullet-none">
<li>08.1001 <em>Demobilisation of project infrastructure for decommissioning</em></li>
<li>08.1002 <em>Demobilisation of personnel</em></li>
</ul>
</li>
</ul>
</li>
<li><strong>Principle activity 09: Research and development</strong>
<ul className="list-bullet-none">
<li>09.0100 Research and development of equipment, techniques and procedures
<ul className="list-bullet-none">
<li>09.0101 <em>Equipment, techniques and procedures for characterisation</em></li>
<li>09.0102 <em>Equipment, techniques and procedures for decontamination</em></li>
<li>09.0103 <em>Equipment, techniques and procedures for dismantling</em></li>
<li>09.0104 <em>Equipment, techniques and procedures for waste management</em></li>
<li>09.0105 <em>Other research and development activities</em></li>
</ul>
</li>
<li>09.0200 Simulation of complicated works
<ul className="list-bullet-none">
<li>09.0201 <em>Physical mock-ups and training</em></li>
<li>09.0202 <em>Test or demonstration programmes</em></li>
<li>09.0203 <em>Computer simulations, visualisations and 3D modelling</em></li>
<li>09.0204 <em>Other activities</em></li>
</ul>
</li>
</ul>
</li>
<li><strong>Principle activity 10: Fuel and nuclear material</strong>
<ul className="list-bullet-none">
<li>10.0100 Removal of fuel or nuclear material from facility to be decommissioned
<ul className="list-bullet-none">
<li>10.0101 <em>Transfer of fuel or nuclear material to external storage or to treatment facilities</em></li>
<li>10.0102 <em>Transfer of fuel or nuclear material to dedicated buffer storage</em></li>
</ul>
</li>
<li>10.0200 Dedicated buffer storage for fuel and/or nuclear material
<ul className="list-bullet-none">
<li>10.0201 <em>Construction of buffer storage</em></li>
<li>10.0202 <em>Operation of buffer storage</em></li>
<li>10.0203 <em>Transfer of fuel and/or nuclear material away from the buffer storage</em></li>
</ul>
</li>
<li>10.0300 Decommissioning of buffer storage
<ul className="list-bullet-none">
<li>10.0301 <em>Decommissioning of buffer storage</em></li>
<li>10.0302 <em>Management of waste</em></li>
</ul>
</li>
</ul>
</li>
<li><strong>Principle activity 11: Miscellaneous expenditures</strong>
<ul className="list-bullet-none">
<li>11.0100 Owner costs
<ul className="list-bullet-none">
<li>11.0101 <em>Implementation of transition plans</em></li>
<li>11.0102 <em>External projects to be performed as a consequence of decommissioning</em></li>
<li>11.0103 <em>Payments (fees) to authorities</em></li>
<li>11.0104 <em>Specific external services and payments</em></li>
</ul>
</li>
<li>11.0200 Taxes
<ul className="list-bullet-none">
<li>11.0201 <em>Value added taxes</em></li>
<li>11.0202 <em>Local, community, federal taxes</em></li>
<li>11.0203 <em>Environmental taxes</em></li>
<li>11.0204 <em>Taxes on industrial activities</em></li>
<li>11.0205 <em>Other taxes</em></li>
</ul>
</li>
<li>11.0300 Insurances
<ul className="list-bullet-none">
<li>11.0301 <em>Nuclear related insurances</em></li>
<li>11.0302 <em>Other insurances</em></li>
</ul>
</li>
</ul>
</li>
</ul>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="app-e"></div>
<h2 id="sec-app-e">Appendix E: Approaches to Cost Estimation</h2>
<p>The Nuclear Energy Agency document <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwjIxcmjouXaAhWGzIMKHXf_D8MQFggnMAA&url=https%3A%2F%2Fwww.oecd-nea.org%2Frwm%2Fpubs%2F2015%2F7237-practice-cost-estimation.pdf&usg=AOvVaw39achBKpb2NyXcG0W6L_sp"><em>The Practice of Cost Estimation for Decommissioning of Nuclear Facilities</em></a> provides a comparative overview of the cost estimation methods and their advantages and disadvantages. It is summarized in the following table.</p>
<p><strong>Table 1: Estimating method comparison</strong> <sup id="fnb7-ref"><a className="fn-lnk" href="#fnb7"><span className="wb-inv">Footnote </span>7</a></sup></p>
<table className="table table-striped">
<thead>
<tr>
<th>Estimating Method</th>
<th>Description</th>
<th>Advantages</th>
<th>Disadvantages</th>
</tr>
</thead>
<tbody>
<tr>
<td><p>Bottom-up</p></td>
<td><p>In this building blocks technique, a work statement and set of drawings or specifications are used to extract material quantities required for executing each discrete task performed in accomplishing a given activity. From these quantities, direct labour, equipment and overhead costs can be derived.</p></td>
<td><p>Most accurate as it accounts for site-specific radiological and physical inventory. Relies on unit cost factors (UCFs). </p></td>
<td><p>Requires detailed description of inventory and site specific labour, material and equipment costs for the UCFs.</p></td>
</tr>
<tr>
<td><p>Specific analogy</p></td>
<td><p>Specific analogies depend upon the known cost of an item used in prior estimates as the basis for the cost of a similar item in a new estimate. Adjustments are made to known costs to account for differences in relative complexities of performance, design and operational characteristics. </p></td>
<td><p>Accurate if prior estimates are appropriately adjusted for size differences, inflation and regional differences in labour materials and equipment.</p></td>
<td><p>Adjustments as noted may require detailed documentation and introduce approximations that reduce accuracy.</p></td>
</tr>
<tr>
<td><p>Parametric</p></td>
<td><p>Parametric estimating requires historical databases on similar systems or subsystems. Statistical analysis is performed on the data to find correlations between cost drivers and other system parameters, such as design or performance. The analysis produces cost equations or cost estimating relationships that may be used individually or grouped into more complex models. </p></td>
<td><p>Suitable for use for large sites where detailed inventory is not readily available. Suited for Order of Magnitude estimates.</p></td>
<td><p>Approximations based on areas or volumes introduce additional inaccuracies. There is no way to track actual inventory. Not suited for project planning of work activities.</p></td>
</tr>
<tr>
<td><p>Cost review and update</p></td>
<td><p>An estimate may be constructed by examining previous estimates of the same or similar projects for internal logic, completeness of scope, assumptions and estimating methodology.</p></td>
<td><p>Suitable for large sites where detailed inventory is not available. Suited for update of previous estimates, or order of magnitude estimates.</p></td>
<td><p>There is no way to track actual inventory. Generally not suited for project planning of work activities.</p></td>
</tr>
<tr>
<td><p>Expert opinion</p></td>
<td><p>An expert opinion technique may be used when other techniques or data are not available. Several specialists may be consulted iteratively until a consensus cost estimate is established.</p></td>
<td><p>An expert opinion technique may be used when other techniques or data are not available. Several specialists may be consulted iteratively until a consensus cost estimate is established.</p></td>
<td><p>Expert opinion may not be specific to the work activities. May not reflect the radiological limitations of the decommissioning project.</p></td>
</tr>
</tbody>
</table>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="glossary"></div>
<h2 id="sec-glossary">Glossary</h2>  <p>For definitions of terms used in this document, see <a href="http://www.nuclearsafety.gc.ca/pubs_catalogue/uploads/REGDOC-3-6-Glossary-of-CNSC-Terminology-eng.pdf">REGDOC&#8209;3.6, <em>Glossary of CNSC Terminology</em></a>, which includes terms and definitions used in the <a href="http://laws-lois.justice.gc.ca/eng/acts/N-28.3/"><em>Nuclear Safety and Control Act</em></a> and the regulations made under it, and in CNSC regulatory documents and other publications. REGDOC&#8209;3.6 is provided for reference and information.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="ref"></div>
<div className="wb-fnote" role="note">   <section>
<h2>Footnotes</h2>
<dl>
<dt>Footnote 1</dt>
<dd id="fnba">
<p>Examples of a person of authority include the president or chief financial officer of the organization.</p>
<p className="fn-rtn"><a href="#fnba-ref"><span className="wb-inv">Return to footnote </span>1<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 2</dt>
<dd id="fnbb">
<p>Note: This is an example only and not the form of any specific financial institution. In any specific case additional or varied clauses may be used or required.</p>
<p className="fn-rtn"><a href="#fnbb-ref"><span className="wb-inv">Return to footnote </span>2<span className="wb-inv"> referrer</span></a></p></dd>
</dl>
</section></div>  <br />
<div className="wb-fnote" role="note">   <section>
<h2 id="fnb">References</h2>
<p>The CNSC may include references to information on best practices and standards such as those published by CSA Group. With permission of the publisher, CSA Group, all nuclear-related CSA standards may be viewed at no cost through the CNSC Web page &ldquo;<a href="http://www.nuclearsafety.gc.ca/eng/acts-and-regulations/regulatory-documents/csa-standards">How to gain free access to all nuclear-related CSA standards</a>&rdquo;. </p>
<dl>
<dt>Footnote 1</dt>
<dd id="fnb1">
<p>CNSC, draft REGDOC-2.11.2, <em>Decommissioning, </em>Ottawa, Canada, 2019.</p>  <p className="fn-rtn"><a href="#fnb1-ref"><span className="wb-inv">Return to footnote </span>1<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 2</dt>
<dd id="fnb2">
<p>CSA Group, N294, <em>Decommissioning of Facilities Containing Nuclear Substances</em>,  Toronto, 2014. </p>  <p className="fn-rtn"><a href="#fnb2-ref"><span className="wb-inv">Return to footnote </span>2<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 3</dt>
<dd id="fnb3">
<p>CNSC, <a href="http://www.nuclearsafety.gc.ca/eng/acts-and-regulations/regulatory-documents/published/html/regdoc3-1-1-v2/index">REGDOC-3.1.1, <em>Reporting  Requirements: Reporting Requirements for Nuclear Power Plants, </em>version 2</a>, Ottawa, Canada, April 2016. </p>  <p className="fn-rtn"><a href="#fnb3-ref"><span className="wb-inv">Return to footnote </span>3<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 4</dt>
<dd id="fnb4">
<p>CNSC, <a href="http://www.nuclearsafety.gc.ca/eng/acts-and-regulations/regulatory-documents/published/html/regdoc3-1-2-v1/index">REGDOC-3.1.2, <em>Reporting  Requirements, Volume I:</em> <em>Non-Power  Reactor Class I Nuclear Facilities and Uranium Mines and Mills</em></a>, Ottawa, Canada, January 2018. </p>  <p className="fn-rtn"><a href="#fnb4-ref"><span className="wb-inv">Return to footnote </span>4<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 5</dt>
<dd id="fnb5">
<p>Nuclear Energy Agency (NEA), Organization  for Economic Co-Operation and Development (OECD), <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwio84rcqOXaAhWkx4MKHVQ_DFIQFggnMAA&url=https%3A%2F%2Fwww.oecd-nea.org%2Frwm%2Freports%2F2012%2FISDC-nuclear-installations.pdf&usg=AOvVaw1WzVfvOvfJBa_mSkufftWt"><em>International  Structure for Decommissioning Costing (ISDC) of Nuclear Installations</em></a>, 2012.</p>  <p className="fn-rtn"><a href="#fnb5-ref"><span className="wb-inv">Return to footnote </span>5<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 6</dt>
<dd id="fnb6">
<p>AACE International, <a href="http://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwiKia2uqeXaAhVh5YMKHaTMAJAQFggnMAA&url=http%3A%2F%2Fweb.aacei.org%2Fdocs%2Fdefault-source%2Ftoc%2Ftoc_SK6.pdf&usg=AOvVaw1pytCf5AhJ2yXYVCPfitlG"><em>Skills and knowledge  of cost engineering</em>, 6th edition</a>, Morgantown, WV, USA, 2015. </p>  <p className="fn-rtn"><a href="#fnb6-ref"><span className="wb-inv">Return to footnote </span>6<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 7</dt>
<dd id="fnb7">
<p>Nuclear Energy Agency (NEA) Organization  for Economic Co-Operation and Development (OECD), <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwjMuMGcqeXaAhWd2YMKHRTMBxsQFggvMAA&url=https%3A%2F%2Fwww.oecd-nea.org%2Frwm%2Fpubs%2F2015%2F7237-practice-cost-estimation.pdf&usg=AOvVaw39achBKpb2NyXcG0W6L_sp"><em>The Practice  of Cost Estimation for Decommissioning of Nuclear Facilities</em></a>, 2015.</p>  <p className="fn-rtn"><a href="#fnb7-ref"><span className="wb-inv">Return to footnote </span>7<span className="wb-inv"> referrer</span></a></p>
</dd>
</dl>   </section>  </div>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>   <h2>CNSC Regulatory Document Series</h2>  <p>Facilities and activities within the nuclear sector in Canada are regulated by the Canadian Nuclear Safety Commission (CNSC). In addition to the <em>Nuclear Safety and Control Act </em>and associated regulations, these facilities and activities may also be required to comply with other&nbsp;regulatory instruments such as regulatory documents or standards.</p>  <p>CNSC regulatory documents are classified under the following categories and series:</p>  <ul className="list-bullet-none">
<li><strong>1.0 Regulated facilities and activities</strong></li>
<li>Series 1.1 Reactor facilities
<ul className="list-bullet-none">
<li>1.2 Class IB facilities</li>
<li>1.3 Uranium mines and mills</li>
<li>1.4 Class II facilities</li>
<li>1.5 Certification of prescribed equipment</li>
<li>1.6 Nuclearsubstances and radiation devices</li>
</ul>
</li>
<li><strong>2.0 Safety and control areas</strong></li>
<li>Series 2.1 Management system
<ul className="list-bullet-none">
<li>2.2 Human performance management</li>
<li>2.3 Operating performance</li>
<li>2.4 Safety analysis</li>
<li>2.5 Physical design</li>
<li>2.6 Fitness for service</li>
<li>2.7 Radiation protection</li>
<li>2.8 Conventional health and safety</li>
<li>2.9 Environmental protection</li>
<li>2.10 Emergency management and fire protection</li>
<li>2.11 Waste management</li>
<li>2.12 Security</li>
<li>2.13 Safeguards and non-proliferation</li>
<li>2.14 Packaging and transport</li>
</ul>
</li>
<li><strong>3.0 Other regulatory areas</strong></li>
<li>Series 3.1 Reporting requirements
<ul className="list-bullet-none">
<li>3.2 Public and Indigenous engagement</li>
<li>3.3 Financial guarantees</li>
<li>3.4 Commission proceedings</li>
<li>3.5 CNSC processes and practices</li>
<li>3.6 Glossary of CNSC terminology</li>
</ul>
</li>  </ul>  <p><strong>Note:</strong> The regulatory document series may be adjusted periodically by the CNSC. Each regulatory document series listed above may contain multiple regulatory documents. Visit the CNSC&rsquo;s website for the latest <a href="/eng/acts-and-regulations/regulatory-documents/index">list of regulatory documents</a>.</p>

                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }