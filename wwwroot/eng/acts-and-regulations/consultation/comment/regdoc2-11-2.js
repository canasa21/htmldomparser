import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "en",
                pageTitle: "REGDOC-2.11.2, Decommissioning", 
                dateModified: "2019-07-16",
                langToggleUrl: "/fra/acts-and-regulations/consultation/comment/regdoc2-11-2"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<h2>Preface</h2>  <p>This regulatory document is part of  the CNSC&rsquo;s waste management series of regulatory documents, which also covers decommissioning.  The full list of regulatory document series is included at the end of this  document and can also be found on the <a href="http://www.nuclearsafety.gc.ca/eng/acts-and-regulations/regulatory-documents/index">CNSC&rsquo;s  website</a>.</p><p>
Regulatory document REGDOC-2.11.2, <em>Decommissioning,</em> sets out requirements  and guidance regarding the planning for decommissioning, preparation for  decommissioning, execution of decommissioning and completion of decommissioning  of decommissioning of Class I nuclear facilities, uranium mines and mills, and nuclear  substances and radiation devices (waste nuclear substance licensees only) activities  licensed by the CNSC in Canada. </p><p>
This document supersedes G-219, <em>Decommissioning Planning for Licensed  Activities</em>.</p><p>  For information on the  implementation of regulatory documents and on the graded approach, see  REGDOC-3.5.3, <em>Regulatory Fundamentals</em>.</p>  <div className="alert alert-info module-simplify ">
<p>The words &ldquo;shall&rdquo; and  &ldquo;must&rdquo; are used to express requirements to be satisfied by the licensee or  licence applicant. &ldquo;Should&rdquo; is used to express guidance or that which is  advised. &ldquo;May&rdquo; is used to express an option or that which is advised or  permissible within the limits of this regulatory document. &ldquo;Can&rdquo; is used to  express possibility or capability.</p><p>
Nothing contained  in this document is to be construed as relieving any licensee from any other  pertinent requirements. It is the licensee&rsquo;s responsibility to identify and  comply with all applicable regulations and licence conditions.</p>  </div>  <br/><div className="col-md-12 module-table-contents">
<h2>Table of Contents</h2>
<ul>
<li><a href="#sec1">1. Introduction</a>
<ul>
<li><a href="#sec1-1">1.1 Purpose</a></li>
<li><a href="#sec1-2">1.2 Scope</a></li>
<li><a href="#sec1-3">1.3 Relevant legislation</a></li>
</ul>
</li>
<li><a href="#sec2">2. Background: The Lifecycle Approach to Decommissioning</a></li>
<li><a href="#sec3">3. Optimization and Graded Approach in Decommissioning</a></li>
<li><a href="#sec4">4. Decommissioning Strategy</a></li>
<li><a href="#sec5">5. Planning for Decommissioning</a>
<ul>
<li><a href="#sec5-1">5.1 Preliminary decommissioning plan</a>
<ul>
<li><a href="#sec5-1-1">5.1.1 Content of the preliminary decommissioning plan</a></li>
<li><a href="#sec5-1-2">5.1.2 Uncertainty</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#sec6">6. Preparation for Decommissioning</a>
<ul>
<li><a href="#sec6-1">6.1 Storage with surveillance plan</a></li>
<li><a href="#sec6-2">6.2 Detailed decommissioning plan</a>
<ul>
<li><a href="#sec6-2-1">6.2.1 Content of the detailed decommissioning plan</a></li>
</ul>
</li>
<li><a href="#sec6-3">6.3 Safety assessment for decommissioning</a></li>
<li><a href="#sec6-4">6.4 Waste management plan</a></li>
</ul>
</li>
<li><a href="#sec7">7. Execution of Decommissioning</a>
<ul>
<li><a href="#sec7-1">7.1 Storage with surveillance</a></li>
</ul>
</li>
<li><a href="#sec8">8. Completion of Decommissioning</a></li>
<li><a href="#sec9">9. Post Decommissioning</a></li>
<li><a href="#sec10">10. Radiological and Hazardous Surveys</a>
<ul>
<li><a href="#sec10-1">10.1 Pre-operational surveys</a></li>
<li><a href="#sec10-2">10.2 Operational surveys</a>
<ul>
<li><a href="#sec10-2-1">10.2.1 Transition from operation to decommissioning surveys</a></li>
</ul>
</li>
<li><a href="#sec10-3">10.3 Decommissioning surveys</a></li>
<li><a href="#sec10-4">10.4 Decommissioning end-state surveys</a></li>
</ul>
</li>
<li><a href="#glossary">Glossary</a></li>
<li><a href="#addInfo">Additional Information</a></li>
</ul>  </div>  <h2>Decommissioning</h2>  <div className="alert alert-info module-simplify ">
<p>Draft REGDOC-2.11.2, <em>Decommissioning, </em>contains references to the draft regulatory documents and draft CSA  standard listed below. In addition to comments received on draft REGDOC-2.11.2,  following public consultation, revisions to this regulatory document will be  informed, as appropriate, by feedback on the following:</p>
<ul>
<li>REGDOC-2.11.1, <em>Waste Management, Volume I: Management of  Radioactive Waste</em> (public consultation ongoing)</li>
<li>REGDOC-2.11.1, <em>Waste Management, Volume III: Safety Case  for Long-Term Radioactive Waste Management</em>, Version 2 (public consultation  ongoing)</li>
<li>REGDOC-3.3.1, <em>Financial Guaranties</em> (public  consultation ongoing)</li>
<li>CSA N294-19, <em>Decommissioning of  facilities containing nuclear substances</em> (public consultation ongoing)</li>
</ul>  </div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="1"></div>
<h2 id="sec1">Introduction</h2>
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
<h3 id="sec1-1">1.1 Purpose</h3>  <p>This regulatory document provides  requirements and guidance regarding the planning for decommissioning, preparation  for decommissioning, execution of decommissioning, and completion of  decommissioning. </p>  <p> The CNSC defines decommissioning as the  administrative and technical actions taken to retire a facility from service or  to cease licensed activities, and which allow the removal of some or all of the  regulatory controls from a facility or location where nuclear substances are  managed, possessed or stored. Decommissioning actions are the procedures,  processes and work activities that lead to the release of a facility or  location from regulatory control, with or without restrictions on its future  use (for example, decontamination and/or dismantling of structures, systems and  components). The time period for the conduct of decommissioning actions  typically range from a few weeks for small and simple facilities, to years or decades  for larger and more complex facilities, especially in the case of deferred  decommissioning.</p>  <p> For some small or simple facilities with  a very low level of hazard, decommissioning actions may simply consist of  removal and return of all the sources to the supplier, followed by a survey to  verify that there are no areas with residual contamination above end-state  criteria.</p>  <p> The CNSC reviews every licence  application to verify that licensees have made adequate provisions for  decommissioning, such that workers, the public and the environment are  protected. All licensees for regulated facilities or activities are required to  ensure that they effectively decommission all licenced locations as  appropriate. Particular decommissioning plans and strategies are evaluated  through the licensing process and included as part of the licensing  basis.&nbsp;</p>
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
<h3 id="sec1-2">1.2 Scope</h3>  <p>This regulatory document establishes  requirements and guidance for decommissioning activities from the planning for  decommissioning to the completion of decommissioning under continuous  management and regulatory oversight. </p><p>
This document applies to Class I  facilities, uranium mines and mills and nuclear substances and radiation  devices (waste nuclear substance licensees only) that are required to have  decommissioning plans or strategies as a regulatory requirement or as a  condition of their licence. For all other licensees, the information in this  regulatory document may be used as guidance.</p><p>
This regulatory document is not intended  for planning for the decommissioning of a site which is a result of an accident,  but may be used as guidance. It is not intended for planning for the  remediation of legacy sites for which decommissioning was not planned, but may  be used as guidance for scoping the regulatory oversight of remediation  activities.</p><p>
This regulatory document is complemented  by other <a href="http://www.nuclearsafety.gc.ca/eng/acts-and-regulations/regulatory-documents/index">CNSC  regulatory documents</a> and CSA standards, such as CSA N294, <em>Decommissioning of facilities containing nuclear substances</em> <sup id="fnb1-ref"><a className="fn-lnk" href="#fnb1"><span className="wb-inv">Footnote </span>1</a></sup>.</p>
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
<h3 id="sec1-3">1.3 Relevant legislation</h3>  <p>The following provisions of the <a href="https://laws-lois.justice.gc.ca/eng/acts/N-28.3/"><em>Nuclear Safety and Control Act</em></a> (NSCA) and the regulations made under it are relevant to this document:</p>  <ul>
<li>subsection 24(5), and paragraphs 26(e) and 26(f) of the NSCA </li>
<li>paragraph 3(1)(l) of the <a href="https://laws.justice.gc.ca/eng/regulations/sor-2000-202/page-1.html"><em>General Nuclear Safety and Control Regulations</em></a></li>
<li>sections 7 and 8, subsections 14(3) and 14(4), and paragraphs 3(k), 5(i) and 6(h) of the <a href="https://laws.justice.gc.ca/eng/regulations/sor-2000-204/page-2.html#h-657114 "><em>Class&nbsp;I Nuclear Facilities Regulations</em></a></li>
<li>section 7, paragraphs 8(b), 8.3(2)(c), 8.3(2)(d) and subparagraph 3(a)(viii) of the <a href="https://laws.justice.gc.ca/eng/regulations/sor-2000-206/page-1.html"><em>Uranium Mines and Mills Regulations</em></a></li>  </ul>
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
<h2 id="sec2">2. Background: The Lifecycle Approach to Decommissioning</h2>  <p>The CNSC requires that planning for decommissioning take place throughout the lifecycle of a nuclear facility or for the duration of a licensed activity. </p>  <p> Lifecycle decommissioning planning assists in:</p>  <ul>
<li>ensuring that a nuclear facility is designed in a manner that will facilitate decommissioning </li>
<li>ensuring that a nuclear facility or a licensed activity is operated in a manner that will facilitate decommissioning</li>
<li>ensuring that the preferred decommissioning strategy is a technically feasible approach that protects health, safety, security and the environment</li>
<li>ensuring that licensees are able to prepare for the costs of decommissioning</li>
<li>ensuring that potentially difficult or challenging technical problems are identified well in advance so that solutions can be pursued in a proactive manner</li>
<li>enabling portions of the facility/activity to be decommissioned, which will permit the assessment of decommissioning while the licensee continues operations</li>
<li>estimating the quantities, types and classes of waste that will be generated during decommissioning</li>
<li>maintaining records</li>  </ul>  <p>Figure 1 depicts the phases of decommissioning and the indicative timing of key tasks. The phases of decommissioning include: </p>  <ul>
<li>planning for decommissioning</li>
<li>preparation for decommissioning</li>
<li>execution of decommissioning</li>
<li>completion of decommissioning</li>  </ul>  <p>These phases are discussed in sections 5 to 8 of this regulatory document.</p>  <p><strong>Figure 1: Phases of decommissioning</strong></p>
<div className="module-poster"> <img src="/images/regdoc2-11-2/regdoc2-11-2-figure-1-eng.png" alt="Phases of decommissioning" /> </div>  </div>  <details>
<summary className="background-accent"><strong>Description for Figure 1</strong></summary>
<p>Figure 1 depicts the phases  of decommissioning and the indicative timing of key tasks. </p>
<p> The figure is a horizontal rectangle  with five columns. Each column represents a phase of decommissioning, which  are: </p>
<ul>
<li>planning  for decommissioning</li>
<li>preparation  for decommissioning</li>
<li>execution  of decommissioning</li>
<li>completion  of decommissioning</li>
<li>post-decommissioning  (if applicable)</li>
</ul>
<p>A  timeline underlines the names of the phases and represents the lifecycle of a  nuclear facility or for the duration of a licensed activity. </p>
<p> The  first two cycles are &ldquo;Sitting&rdquo; and &ldquo;design, construction and commissioning&rdquo; and  take place during the planning for decommissioning phase. The second cycle  applies to Class I facilities only.</p>
<p> The  third cycle is &ldquo;operation&rdquo; and starts at the end of the planning for  decommissioning phase and goes on through the end of the preparation for  decommissioning phase. The licensee informs the CNSC prior to shutting down a  facility permanently or ceasing to manage, possess or store nuclear substances.  Once the permanent shutdown occurs, the licensee transitions from operations to  the decommissioning cycle. </p>
<p> The  last cycle is &ldquo;decommissioning&rdquo; and takes place during the execution of  decommissioning phase. If the licensee has selected the deferred  decommissioning strategy, the storage with surveillance period will take place  during that cycle.</p>
<p> A  second horizontal timeline is in the middle of the figure and is identified as  &ldquo;Decommissioning plans&rdquo;. The first plan, the &ldquo;PDP&rdquo; is prepared and submitted  during the planning and preparation for decommissioning phases. The licensee  prepares and submits plans for the permanent shutdown, the stabilization  activity, the detailed decommissioning and storage with surveillance period  during the preparation for decommissioning phase.</p>
<p> The  second plan, the DDP is prepared and submitted during the execution and completion  of decommissioning phases. The licensee prepares and submits an end-state  report completion of decommissioning phase.</p>
<p> A  third horizontal timeline illustrates the periods when the facility  or location is under CNSC  regulatory control and when the CNSC releases that  regulatory control. The facility or location remains under a  CNSC licence for the first 4 phases of decommissioning. If applicable, it will  then be under  another regulatory control during the post-decommissioning phase.</p>  </details>  <p>Assessments of radiological and non-radiological conditions prior to and during decommissioning are an integral part of decommissioning planning and execution. Decommissioning characterization and surveys throughout the various stages in decommissioning are described in section 10.</p>
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
<h2 id="sec3">3. Optimization and Graded Approach in Decommissioning</h2>  <p>The licensee shall ensure that the protection and safety of workers, the public and the environment during decommissioning is planned and optimized. </p>  <p> The licensee shall apply a graded approach in all aspects of decommissioning, commensurate with the type, scale, complexity, maturity, physical state, inventory, uncertainty and reliability of information, and risk associated with the decommissioning of the facility or activity.&nbsp; </p>  <p> A graded approach shall be applied in a way that does not compromise the protection and safety of workers, the public and the environment. Further information on the graded approach can be found in REGDOC-3.5.3, <em>Regulatory Fundamentals</em> <sup id="fnb2-ref"><a className="fn-lnk" href="#fnb2"><span className="wb-inv">Footnote </span>2</a></sup>.</p>
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
<h2 id="sec4">4. Decommissioning  Strategy</h2>  <p>The licensee shall select a  decommissioning strategy that will form the basis for the planning for decommissioning  and facilitate achieving the desired end state of the decommissioning project.  For facilities and uranium mines and mills, the decommissioning strategy shall  be selected early in the lifecycle of the facility.</p><p>  The following decommissioning strategies should  be considered individually or in combination:</p>  <ul className="list-lower-alpha">
<li>immediate (prompt) decommissioning  &ndash; to decontaminate and dismantle without any planned delays</li>
<li>deferred decommissioning &ndash; to  place the facility in a period of storage with surveillance followed by  decontamination and dismantlement, or to conduct activities directed at placing  certain buildings or facilities in a safe, secure interim end state, followed  by a period of storage with surveillance, and ultimately decontamination and  dismantlement</li>
<li><em>in situ</em> decommissioning &ndash; to place the facility, or portions of the facility,  in a safe and secure condition, in which some or all of the radioactive  contaminants are disposed of in place, which may result in the creation of a  waste disposal site </li>  </ul>  <p>In such a case where the end state for <em>in situ</em> decommissioning results in a  waste disposal site, the licensee shall satisfy all regulatory requirements for  a radioactive waste disposal facility and demonstrate safety via a safety case  and post-closure safety assessment of a disposal facility. Further information  on safety case and safety assessment can be found in draft REGDOC-2.11.1, <em>Waste Management, Volume III: Safety Case  for Long-Term Radioactive Waste Management</em>, Version 2 <sup id="fnb3-ref"><a className="fn-lnk" href="#fnb3"><span className="wb-inv">Footnote </span>3</a></sup>. For waste with  other hazardous properties, the licensee shall ensure that the safety case and  supporting safety assessment encompasses those hazards and is in compliance  with applicable regulatory requirements regarding such hazards. </p>  <p><em>In situ</em> decommissioning with a disposal end-state is  an accepted and acceptable practice for uranium mines and mills. Further  requirements and guidance for waste management at uranium mines and mills are  provided in <a href="http://www.nuclearsafety.gc.ca/eng/acts-and-regulations/regulatory-documents/published/html/regdoc2-11-1-v2/index">REGDOC-2.11.1, <em>Waste Management, Volume II: Management of Uranium  Mine Waste Rock and Mill Tailings</em></a> <sup id="fnb4k-ref"><a className="fn-lnk" href="#fnb4"><span className="wb-inv">Footnote </span>4</a></sup><em>. </em>Additionally, <em>in&nbsp;situ</em> decommissioning may be considered a viable solution under exceptional  circumstances (e.g., following a severe accident) or for legacy sites for which  decommissioning was not planned as part of the design (e.g.  in situations where the fuel has been removed and the use of <em>in-situ</em> will be protective of workers, public and the environment), and which will  remain under institutional control for the foreseeable future. In order to  align with international best practice, <em>in situ</em> decommissioning should  not be considered a reasonable decommissioning option for situations where  removal is practicable. </p>  <p>
Note: In Canada, legacy sites  specifically refer to research and demonstration facilities or facilities dating  back to the birth of nuclear technologies in Canada for which decommissioning  was not planned as part of the design. </p><p>
The  licensee shall justify the selected strategy and should conduct a comparison of  alternative decommissioning strategies. The evaluation method used to select  the decommissioning strategy should ensure that the relative advantages and  disadvantages of the remaining strategies can be  objectively compared in a systematic and traceable fashion.</p><p>
When  determining the appropriate decommissioning strategy, the licensee should  consider the following, as appropriate:</p>  <ul>
<li>public and Indigenous engagement</li>
<li>potential impacts on Indigenous  and/or treaty rights</li>
<li>use of operational experience and  lessons learned</li>
<li>forms and characteristics of  radioactive and hazardous contamination</li>
<li>the integrity of containment and  other structures, systems and components over time</li>
<li>the availability of  decontamination and disassembly technologies</li>
<li>the potential for recycling or  reuse of equipment and materials</li>
<li>the availability of knowledgeable  staff</li>
<li>potential environmental impacts</li>
<li>potential worker and public  radiological doses</li>
<li>end-state objectives and site  redevelopment plans</li>
<li>potential revenues, costs and available  funding</li>
<li>the availability of waste  management facilities and disposal capacity</li>
<li>the availability of a fuel  disposal facility if applicable</li>
<li>other political, social and  economic considerations</li>
<li>interdependencies with other  facilities or infrastructure located at the same site</li>
<li>assurance that the facility will  be maintained in a safe configuration at all times </li>
<li>the principles of radiation  protection, justification, optimization and application of dose limits</li>  </ul>  <p>The  decommissioning strategy should be reviewed and updated in light of: </p>  <ul>
<li>changes in site conditions, or  incidents and events with relevant consequences for decommissioning</li>
<li>changes to the proposed  decommissioning objectives</li>
<li>changes to ownership or management  structure</li>
<li>advances in decommissioning technology</li>
<li>significant modifications to the  facility</li>
<li>updated schedule, cost and funding  information</li>
<li>operational experience and lessons  learned</li>
<li>revised regulatory requirements</li>
<li>availability of a facility for the  management of irradiated fuel and radioactive waste</li>  </ul>  <p>If shutdown of a facility is sudden, the  decommissioning strategy shall be reviewed on the basis of the situation that  initiated the sudden shutdown, in order to determine whether revision of the  strategy is required. </p>
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
<h2 id="sec5">5. Planning for Decommissioning</h2>  <p>Where required by a condition of the licence, the licensee shall maintain a financial guarantee acceptable to the CNSC for decommissioning.&nbsp; Information on financial guarantees can be found in draft REGDOC-3.3.1, <em>Financial Guarantees</em> <sup id="fnb4-ref"><a className="fn-lnk" href="#fnb4"><span className="wb-inv">Footnote </span>4</a></sup>. </p><p>   The licensee shall prepare a waste management strategy that identifies the categories and estimated quantities of all waste streams that will be generated during decommissioning, and the planned disposition path in compliance with the applicable clauses of draft REGDOC-2.11.1, <em>Waste Management, Volume I: Management of Radioactive Waste</em> <sup id="fnb5-ref"><a className="fn-lnk" href="#fnb5"><span className="wb-inv">Footnote </span>5</a></sup>. The waste management strategy can be submitted as a stand-alone document or included in the preliminary decommissioning plan (PDP). </p>
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
<h3 id="sec5-1">5.1 Preliminary decommissioning plan</h3>  <p>The licensee shall prepare a PDP and submit it to the CNSC for acceptance as early as possible in the lifecycle of the facility or the conduct of licensed activity. The PDP should document the post-operational conditions, the selected decommissioning strategy, the radiological monitoring and survey commitments, a waste management strategy, a cost estimate and financial guarantee arrangements. </p>  <p> The licensee shall review and update the PDP and submit it to the CNSC every five years or as requested by CNSC staff. The PDP should be updated in light of the considerations listed at the end of section&nbsp;4.</p>  <p> The licensee may consider dividing a complex site or facility into a number of relatively independent decommissioning projects. For example, a large facility may be divided into areas (i.e., planning envelopes) that, from the point of view of decommissioning, are relatively physically independent from one another. </p>  <p> For sites with more than one facility, the licensee shall submit a PDP for the entire site to the CNSC for acceptance. In such cases, the site PDP should be prepared to cover all planning envelopes. The sequence of executing the planning envelopes and any interdependencies would also be included in both the site PDP and the facility-specific PDPs. </p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="5.1.1"></div>
<h4 id="sec5-1-1">5.1.1 Content of the preliminary decommissioning plan</h4>  <p>A PDP for a nuclear facility with a Class I or uranium mines and mills licence shall include:</p>  <ul>
<li>a description of the location of the facility, including:
<ul>
<li>a map of the facility and its specifications</li>
<li>geographic information</li>
<li>details regarding the surrounding environment</li>
<li>land used</li>
<li>illustrations and maps of the facility in relation to the municipality</li>
</ul>
</li>
<li>the purpose and description of the facility, including:
<ul>
<li>primary components and systems</li>
<li>the building type and construction, including location of any hazardous building materials (e.g., asbestos, polychlorinated biphenyls)</li>
<li>the building services (e.g., power, heating, ventilation, sewer, water, fire protection)</li>
<li>laboratories and other hazardous handling areas</li>
<li>the type, quantity, and form of radioactive and hazardous materials stored, produced or used during operation</li>
<li>the design features used to reduce the spread of contamination and facilitate decontamination and dismantling</li>
</ul>
</li>
<li>the post-operational conditions, including:
<ul>
<li>a summary of the shutdown process, including planned removal of stored inventories of hazardous materials</li>
<li>the predicted nature and extent of contamination remaining in the primary systems and components (in list or table format with reference to applicable illustrations)</li>
<li>the predicted nature and extent of contamination on floors, walls, work surfaces, ventilation systems, etc.</li>
<li>an overview of the principal chemical conditions anticipated to exist</li>
<li>the identification of any separate planning envelopes</li>
</ul>
</li>
<li>the decommissioning strategy, including:
<ul>
<li>the final end-state objective</li>
<li>the rationale for:
<ul>
<li>the decommissioning strategy selected</li>
<li>the interim end states</li>
<li>the periods of storage with surveillance</li>
<li>any institutional controls</li>
<li>the assessment of alternative strategies (or a rationale for why alternatives do not exist or do not warrant consideration)</li>
</ul>
</li>
</ul>
</li>
<li>a work breakdown structure, including:
<ul>
<li>a summary of the main steps for decontamination, disassembly and removal of each of the systems, preferably grouped into work packages (Note: the number and scope of work packages is a function of where the principal hazards are expected to exist in the decommissioning process; higher hazard areas should be represented by a finer work-package breakdown)</li>
<li>an identification of those types of activities that could pose a significant hazard to workers, the public or the environment, for each work package</li>
<li>the role of existing operational standard procedures for radiation protection, hazardous materials handling, industrial safety, and environmental protection in managing hazards</li>
<li>the specific activities for which additional protection/mitigation procedures will be required at the detailed planning stage</li>
<li>a summary of the final dismantlement of the structures</li>
<li>a conceptual schedule showing the approximate year of facility shutdown and the approximate sequencing and duration of the decommissioning work packages and, where relevant, storage periods</li>
</ul>
</li>
<li>the radiological monitoring and survey commitments, including:
<ul>
<li>a program for conducting periodic contamination surveys and the recording of contamination events during facility operation</li>
<li>a commitment to develop plans and protocols acceptable to the CNSC at the detailed planning stage for monitoring:</li>
<li>work hazards during decommissioning</li>
<li>personnel dosimetry</li>
<li>environmental emissions and effluents</li>
<li>materials, sites and structures to be cleared from regulatory control</li>
</ul>
</li>
<li>a waste management strategy specifying:
<ul>
<li>the conservative quantities and characteristics of radioactive and chemically hazardous wastes expected to arise from the decommissioning (tied to specific work packages, if possible)</li>
<li>the anticipated final disposition of radioactive and chemically hazardous materials</li>
<li>a commitment to segregate as much material as possible for reuse and recycling</li>
</ul>
</li>
<li>a commitment to prepare a detailed decommissioning plan (DDP) for CNSC acceptance prior to dismantling and demolition</li>
<li>a commitment to periodically review and update the PDP, in accordance with section 5.1</li>
<li>the physical state of the facility at:
<ul>
<li>the end of operations</li>
<li>the start of decommissioning</li>
</ul>
</li>
<li>the records required for decommissioning, including a description of the facility&rsquo;s operational records that will be maintained to periodically update the PDP and prepare the DDP(s)</li>
<li>a public consultation plan, including a public information program and avenues for public participation as per the requirements and guidance of REGDOC-3.2.1, <em>Public Information and Disclosure</em> <sup id="fnb6-ref"><a className="fn-lnk" href="#fnb6"><span className="wb-inv">Footnote </span>6</a></sup></li>
<li>an Indigenous engagement plan as per the requirements and guidance of REGDOC-3.2.2, <em>Aboriginal Engagement </em><sup id="fnb7-ref"><a className="fn-lnk" href="#fnb7"><span className="wb-inv">Footnote </span>7</a></sup></li>
<li>the cost and a financial guarantee, specifying:
<ul>
<li>an estimate of the total present-value cost of the decommissioning</li>
<li>a reasonable basis for how cost estimates were derived</li>
<li>a description of how the required funds will be provided<br/>
Note: the cost and financial guarantee could be maintained as part of the PDP or as a stand-alone document</li>
</ul>
</li>
<li>the identification of any features of the surrounding natural and social environment that could be significantly affected by the decommissioning process</li>  </ul>  <p>Waste nuclear substance licensees may consult the above list for guidance, in accordance with a graded approach.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="5.1.2"></div>
<h4 id="sec5-1-2">5.1.2 Uncertainty</h4>  <p>The licensee should describe  uncertainties in the PDP. Significant uncertainties may exist at the  preliminary decommissioning planning stage, particularly where decommissioning  is not scheduled to take place for several decades, where highly complex  operations may be involved, and where the evolution of regulatory requirements,  technologies and waste management services is unknown.</p>  <p> The PDP should be based on the best  available conservative information and predictions, and consider any special  issues should an earlier, unscheduled facility closure occur. The PDP may be  refined over time as the execution of decommissioning phase approaches and the  uncertainty decreases. </p>
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
<h2 id="sec6">6. Preparation for Decommissioning</h2>  <p>During the preparation for decommissioning phase, the licensee shall review and revise, as appropriate, all program documents to ensure that they align with the decommissioning activities.</p>  <p> The licensee shall inform the CNSC in writing prior to shutting down a facility permanently or ceasing to manage, possess or store nuclear substances. </p>  <p> Prior to the permanent shutdown of a facility or ceasing to manage, possess or store nuclear substances, the licensee should discuss with the CNSC the timing of decommissioning, the proposed decommissioning actions, applicable regulations and guidance, and relevant requests of the CNSC. </p>  <p> For nuclear facilities with a Class I &nbsp;or a uranium mines and mills licence, the licensee shall prepare and submit to CNSC staff, for acceptance, the following documents: </p>  <ul>
<li>a permanent shutdown plan &ndash; this plan includes the steps to transition the facility from operation to a permanent shutdown state</li>
<li>a stabilization activity plan &ndash; this plan comprises steps for the facility&rsquo;s transition from a permanent shutdown state to a stable state</li>
<li>a DDP &ndash; see section 6.2</li>  </ul>  <p>Specifically, the stabilization of reactor facilities includes the following key activities: defueling the reactor, draining and storing of the cooling water from the reactor main systems, draining water from secondary and auxiliary cooling systems, cleaning and decontaminating, maintaining cooling for the irradiated fuel bays, transferring the spent fuel to dry storage, modifying the operating conditions/programs to align with the state of the facility, performing extensive radiological surveys and maintaining routine surveillance of the facility. </p>  <p> Depending on the site-specific licence and in consultation with the CNSC, stabilization activities may be performed under a CNSC licence for operating or for decommissioning, depending on how the licensee transitions the facility to decommissioning.&nbsp; </p>  <p> Notification for the permanent shutdown of a facility should be:</p>  <ul>
<li>two years, at a minimum, before the planned shutdown of Class I facilities and uranium mines and mills</li>
<li>as soon as practicable for the unplanned shutdown of Class I facilities and uranium mines and mills</li>  	</ul>
<p>For waste nuclear substance licensees, notification for ceasing to manage, possess or store nuclear substances should be made as soon as practicable. </p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.1"></div>
<h3 id="sec6-1">6.1 Storage with surveillance plan</h3>  <p>For deferred decommissioning, as described in section 4, Class I facilities and uranium mines and mills licensees shall prepare a storage with surveillance plan and submit it to the CNSC for acceptance, in addition to the DDP. The storage with surveillance plan may be submitted as part of the DDP or as a stand-alone document. This plan should be updated as necessary and submitted to the CNSC every five years throughout the storage with surveillance phase, or as requested by CNSC staff. The storage with surveillance plan should outline:</p>  <ul>   <li>responsibilities</li>   <li>functional services and systems</li>   <li>maintenance, inspection and surveillance</li>   <li>building hazard identification</li>   <li>hazard control measures</li>   <li>activities envisioned or planned to reduce the risks </li>   <li>access control and zoning</li>   <li>environmental protection control measures </li>   <li>emergency plan and procedures</li>   <li>usage boundaries during storage with surveillance</li>   <li>facility change or modification process</li>   <li>waste management</li>   <li>quality assurance</li>   <li>qualification and training program</li>   <li>records</li>  </ul>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.2"></div>
<h3 id="sec6-2">6.2 Detailed decommissioning plan</h3>  <p>Prior to executing decommissioning activities, the licensee shall prepare and submit a DDP to the CNSC for acceptance. The DDP refines and adds details to the PDP. The DDP should document the final end-state objectives; a description of any institutional controls; a decommissioning strategy; a waste management plan; potential environmental effects; a cost estimate; and financial guarantee arrangements. Once accepted by the CNSC, the DDP will be incorporated into a licence authorizing decommissioning. </p>  <p> If permanent shutdown of the facility is not anticipated, the facility shall be brought to a safe condition by the licensee, under an appropriate licence. If permanent shutdown takes place before a DDP has been prepared and accepted, the licensee shall prepare one as soon as possible. </p>  <p> For deferred decommissioning, prior to the execution of decommissioning, the DDP shall be revised and submitted to the CNSC for acceptance, detailing the dismantling work to be completed. Where the execution takes longer than five years, the DDP should be updated every five years.</p>  <p> The DDP should be reviewed and updated in light of incidents or events with relevant consequences for decommissioning, revised regulatory requirements, operational experience and lessons learned, and advances in decommissioning technology.</p>  <p> For sites preparing to undergo decommissioning with more than one facility, the licensee should submit a DDP for the entire site to the CNSC for acceptance. In such cases, the site DDP should be prepared to cover all planning envelopes. The sequence of executing the planning envelopes and any interdependencies would also be included in both the site DDP and the facility-specific DDPs.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.2.1"></div>
<h4 id="sec6-2-1">6.2.1 Content of the detailed decommissioning  plan</h4>  <p>A DDP for  a nuclear facility with a Class I or uranium mines and mills licence shall include:</p>  <ul>
<li>a description of, and diagram showing, the areas, components and  structures to be decommissioned and grouped where appropriate into logical  decommissioning planning envelopes</li>
<li>the operational history, including  incidents or accidents that could affect decommissioning</li>
<li>the storage with surveillance  stage and requirements of the:
<ul>
<li>functional building services</li>
<li>monitoring and surveillance  activities</li>
<li>inspection activities</li>
<li>usage boundaries during storage  with surveillance</li>
</ul>
</li>
<li>the final radiological, physical  and chemical end-state objectives. Where more than one DDP is required in a  phased program, interim end-state objectives and monitoring programs for  deferral periods must be provided for each detailed plan, for example aging  management, radiation protection and environmental protection programs</li>
<li>a description of the requirements  for any institutional controls</li>
<li>comprehensive and systematic  survey results of radiological and other potentially hazardous conditions,  including identification and description of the remaining significant gaps or  uncertainties in the measurement or prediction of such conditions</li>
<li>a decommissioning strategy for  each planning envelope that highlights any significant changes from the  strategy identified in the PDP</li>
<li>a description of the  decommissioning work packages, including:
<ul>
<li>a step-wise technical approach</li>
<li>the nature and source of potential  significant risks to workers, the public and the environment (including  estimates of doses), as well as species at risk</li>
<li>how protection and safety in  decommissioning will be optimized</li>
<li>the procedures or technologies  proposed to mitigate risks</li>
<li>the quantities, characteristics  and disposition methods of waste</li>
</ul>
</li>
<li>a schedule showing:
<ul>
<li>the proposed start date</li>
<li>the approximate duration and  sequence of work packages (and periods of storage with surveillance, if  applicable)</li>
<li>the anticipated completion date</li>
</ul>
</li>
<li>a waste management plan (see  section 6.4)</li>
<li>a characterization of potential  environmental effects and the measures that will be employed to mitigate and  monitor the effects</li>
<li>a conservative cost estimate  (based on the work packages) for labour, materials, equipment, waste  management, environmental assessment, monitoring and administration (e.g.,  training, safety, licensing, project management, government and public liaison)</li>
<li>financial guarantee arrangements</li>
<li>a summary report of any public and  Indigenous consultations undertaken in preparing the plan, including issues  raised and how they were considered and dispositioned</li>
<li>the project management structure</li>
<li>applicable programs (e.g., management  system, emergency response, site security, radiation protection, environmental  protection, fire, and personnel training) (Note: this includes program  application during storage with surveillance and decommissioning)</li>
<li>a human factors program that  includes:
<ul>
<li>human factors analysis</li>
<li>training provisions</li>
<li>use of contractors</li>
<li>procedural development</li>
<li>ergonomic issues </li>
</ul>
</li>
<li>conventional occupational health  and safety issues and associated training and protection programs</li>
<li>a listing of federal and  provincial regulatory agencies involved in the project</li>
<li>the final survey program with  interpretation criteria</li>
<li>the operating and decommissioning  records that will be retained, and the method of retention</li>
<li>a table of contents for the final  end-state report that outlines the topics to be covered</li>
<li>operational experience and lessons  learned from the decommissioning of similar nuclear facilities</li>
<li>criticality safety assessment and  planned actions involving fissile material</li>  </ul>  <p>Waste nuclear substance licensees may consult the above list for  guidance, in accordance with a graded approach.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.3"></div>
<h3 id="sec6-3">6.3 Safety assessment for decommissioning</h3>  <p>The licensee  shall perform a safety assessment to identify hazards to workers and the public  from both routine decommissioning activities and credible accidents during  decommissioning. The safety assessment should be conducted in accordance with a  graded approach.</p>  <p> The  results of the safety assessment should be used to: </p>  <ul>
<li>support the development of the  decommissioning plan</li>
<li>specify the program for  maintenance, surveillance and inspection</li>
<li>specify the procedures to be put  in place for all operational activities significant to safety for responding to  accidents </li>
<li>specify the necessary competencies  for the staff involved in the facility or activity </li>
<li>make decisions using an  integrated, risk-informed approach</li>  </ul>  <p>The safety assessment should be updated  as necessary in light of revised regulatory requirements, advances in  decommissioning technology, changes in site characteristics, modifications to  the design or operations, effects of aging, and operational experience and  lessons learned.&nbsp;</p>  <p> The safety assessment may be a  stand-alone document or may be included in the DDP.</p>  <p> For a  nuclear facility with a Class I or uranium mines and mills licence, the licensee  shall ensure that the safety assessment: </p>  <ul>
<li>identifies hazards to workers, the  public and the environment from planned decommissioning activities, accidents  and natural events that may arise during decommissioning </li>
<li>describes the relative importance  of the hazards and identifies the methods for mitigating the risks associated  with such hazards </li>
<li>determines the safety functions  necessary in decommissioning, and the related SSCs that will deliver these  safety functions </li>
<li>demonstrates whether adequate  defence in depth has been provided&nbsp; </li>
<li>demonstrates whether adequate  measures have been taken to prevent accident conditions and whether any  consequences can be mitigated if accidents do occur </li>
<li>determines the site  characteristics relating to the safety of the facility or activity </li>
<li>demonstrates that adequate  measures have been taken to control hazards to an acceptable level, both in the  present and in the long term, and to optimize protection and safety in  decommissioning <strong></strong></li>
<li>demonstrates that  interdependencies between planned decommissioning actions are taken into  account, and that any negative impacts of one action on another, as well as the  possible generation of additional hazards, are properly taken into account <strong></strong></li>  </ul>  <p>Information on safety analysis can be  found in REGDOC-2.4.1, <em>Deterministic  Safety Analysis</em> <sup id="fnb8-ref"><a className="fn-lnk" href="#fnb8"><span className="wb-inv">Footnote </span>8</a></sup>.</p>  <p> Waste nuclear  substance licensees may consult the above list for guidance, in accordance with  a graded approach<u></u></p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.4"></div>
<h3 id="sec6-4">6.4 Waste management plan</h3>  <p>Prior to decommissioning, the licensee shall prepare a waste management plan that considers the waste hierarchy and identifies the waste streams together with the estimated quantities and characteristics of the waste. </p><p>   The licensee shall prepare a waste management plan that describes the systematic process for how materials will be moved from the disassembly areas to the areas for the subsequent steps of waste management. The monitoring and processing areas should be designed and operated to keep recyclable and reusable materials separate from waste materials. </p><p>   The licensee shall ensure the availability of packages for radioactive waste, the disposition path of radioactive waste arising from decommissioning activities, and the ability of those disposition paths to accommodate the types and volumes of material.</p><p>   The licensee shall assess the potential for generating non-radiological hazardous substances and incorporate the necessary precautions and reporting into their programs and procedures. </p><p>   The licensee shall maintain up-to-date records of the waste generated, stored in the facility or transferred to another facility or waste organization, specifying its quantities, characteristics and destination.</p><p>   The licensee should optimize the clearance of materials and sites from CNSC regulatory control. Exemption quantities, conditional clearance levels and unconditional clearance levels are specified in the <em>Nuclear Substances and Radiation Devices Regulations.</em></p><p>   Further information on radioactive waste management and waste management plans can be found in REGDOC-2.11.1, <em>Waste Management, Volume I:</em> <em>Management of Radioactive Waste </em><sup id="fnb5a-ref"><a className="fn-lnk" href="#fnb5"><span className="wb-inv">Footnote </span>5</a></sup>.</p>
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
<h2 id="sec7">7. Execution of Decommissioning</h2>  <p>The licensee shall:</p>  <ul>
<li>execute decommissioning in accordance with the accepted DDP and written procedures</li>
<li>implement and maintain a decommissioning program and supporting programs, as applicable, to ensure safety</li>
<li>ensure that a methodology for issuing, modifying and terminating work procedures is established</li>
<li>maintain an up-to-date list of SSCs important to safety, as well as surveillance and maintenance plans for the SSCs </li>
<li>consider the waste hierarchy, including preventing generation, reducing volume and radioactivity content, reusing and recycling materials and components, and disposing of the waste</li>
<li>characterize and manage all remaining operational waste from the facility and all waste from decommissioning</li>
<li>ensure traceability of all waste generated </li>  </ul>  <p>As decommissioning actions progress, new hazards might emerge. New hazards should be assessed and addressed so as to maintain overall safety of the decommissioning actions undertaken.</p>
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
<h3 id="sec7-1">7.1 Storage with surveillance</h3>  <p>If deferred decommissioning is selected, the licensee shall ensure that the facility is maintained in a safe configuration so that subsequent decontamination and/or dismantling can be carried out. The licensee shall implement and maintain appropriate storage with surveillance programs to confirm that the SSCs needed to maintain safe storage are functioning as required. These programs should provide for surveillance, inspection, servicing and maintenance.</p>  <p> If storage with surveillance is undertaken, the licensee may perform activities to reduce risks at the facility during a period of storage with surveillance, in accordance with the licence and communication with the CNSC. These may include: </p>  <ul>   <li>reduction or removal of combustibles </li>   <li>removal and recycling of non-contaminated or slightly-contaminated equipment (e.g., turbines, pumps and heat exchangers) </li>   <li>reduction or isolation of asbestos </li>   <li>demolition of non-nuclear facilities </li>   <li>removal of radioactive waste to an offsite licensed storage facility </li>   <li>reduction or removal of hazardous wastes </li>  </ul>
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
<h2 id="sec8">8. Completion of Decommissioning</h2>  <p>Upon completion of decommissioning, the licensee shall demonstrate that the end-state criteria, as specified in the DDP, have been met. </p>  <p> The licensee shall prepare and submit an end-state report to CNSC staff for acceptance. </p>  <p> For a nuclear facility with a Class I or uranium mines and mills licence, the end-state report shall include:</p>  <ul>   <li>document (for example, using actual survey results) that the planned end-state conditions have been met, and if not, why they have not been met</li>   <li>describe any proposed further licence requirements or institutional controls for the site</li>   <li>describe the release criteria </li>   <li>describe the decommissioning work undertaken, noting any significant deviations from the DDP</li>   <li>describe any remaining entities</li>   <li>describe the final physical and radiological status, including any remaining hazards</li>   <li>include a list of structures, areas and equipment designated for restricted use</li>   <li>describe waste quantities and dispositions</li>   <li>include a summary of the radiological doses received by workers during the decommissioning activities</li>   <li>include a summary of any abnormal occurrences or incidents that occurred during decommissioning activities</li>   <li>describe any lessons learned</li>   <li>provide references to decommissioning records</li>   <li>describe the future use of, or any restrictions on the future use of, the lands and remaining structures</li>  </ul>  <p>Where decommissioning of the facility or location is to take place in discrete stages, an interim end-state report shall be prepared when each planned interim end state is achieved. This report should describe the decommissioning work undertaken, the physical condition of the facility or location, the remaining hazards, the interim end state achieved, the results of surveys, the hazards and physical condition of the facility or location, and the remaining decommissioning tasks or work packages to be completed.</p>
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
<h2 id="sec9">9. Post Decommissioning</h2>  <p>If institutional controls are required to be in place, the licensee shall prepare plans to address the post-decommissioning phase. The post-decommissioning plans include programs for monitoring and surveillance that will be established and maintained for the optimization of protection and safety, and for the protection of the environment. The licensee shall clearly assign responsibility for implementing and maintaining the post-decommissioning plans and institutional controls.</p>  <p> If institutional controls are required, the CNSC expects the following actions to be taken:</p>  <ul>   <li>implementation of a visual inspection plan for periodic examination of the site to look for signs of deterioration of the facility or location (e.g., slumping of the ground), or erosion of the surface</li>   <li>operation and maintenance of a monitoring system to provide early warning of the release of radionuclides before they leave their site boundary</li>   <li>implementation of active controls to prevent unrestricted access to the site </li>  </ul>
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
<h2 id="sec10">10. Radiological and Hazardous Surveys</h2>  <p>The licensee shall perform radiological and non-radiological surveys throughout the various phases in the lifecycle to support decommissioning.</p>  <p> The licensee should establish survey objectives that are to be met by characterization methods throughout the various stages of decommissioning. These objectives may include:</p>  <ul>   <li>identifying potential radiation risks for workers, the public and the environment associated with specific decommissioning activities</li>   <li>addressing uncertainties in information regarding the locations, levels and types of contaminants that may be present</li>   <li>obtaining hazard information to support the selection of a decommissioning strategy, sequence of decommissioning activities, decontamination options, selection of dismantlement methods, etc.</li>   <li>achieving progressive and systematic reductions in radiological hazards</li>   <li>demonstration that decommissioning end-state criteria has been met</li>  </ul>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="10.1"></div>
<h3 id="sec10-1">10.1 Pre-operational surveys </h3>  <p>Prior to construction of a nuclear facility, baseline radiological surveys should be performed at the proposed site of a facility and the surrounding area in order to establish background concentration levels of radionuclides. Prior to the performance of these surveys, the proponent should identify the media to be sampled (e.g., soil, sediment, surface water) and the parameters to be measured (e.g., radionuclides, hazardous chemicals). This information will be useful for:</p>  <ul>   <li>future evaluation of the impact of the facility on the site and the surrounding area from its operation</li>   <li>establishment of decommissioning end-state criteria</li>  </ul>  <p>Background radiation data should also be assessed and updated prior to commissioning of a nuclear facility, particularly for areas that are not expected to be affected (e.g., activated or contaminated) by future operations.&nbsp; </p>  <p> Prior to commencement of a licensee&rsquo;s operation, samples of non-activated and non-contaminated materials should be retained and assessed to determine the concentrations of naturally occurring radionuclides.&nbsp; </p>  <p> If a pre-construction background survey was not performed for the site, survey data from an undisturbed area with similar characteristics or results of a survey of similar building materials should be used.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="10.2"></div>
<h3 id="sec10-2">10.2 Operational surveys </h3>  <p>During operational periods, the licensee should retain records of the hazards associated with the facilities and activities, particularly those that may be encountered during decommissioning activities. These may include chemical, biological and industrial hazards, in addition to radiological hazards.</p>  <p> Detailed characterization surveys should be performed by the licensee during operational periods to support the development of the final DDP. Radiological characterization data should include a description of the area (e.g., the premises of the facility, the surrounding environment, ground and surface water, soil and sediments, as applicable), contamination levels, dose rate levels, and chemical and physical forms of material.</p>  <p> As necessary, characterization surveys should be conducted to establish the penetration depth of contamination or activation in structures, soil and sediments, and the extent of radioactivity. Radioactive contaminants in shielded or self-shielded components, such as inside pipes and other equipment, should be determined to the extent possible.</p>  Characterization surveys should also identify adjacent uncontaminated zones. During planning of decommissioning actions, special attention should be given to preventing cross contamination of such zones.
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="10.2.1"></div>
<h4 id="sec10-2-1">10.2.1 Transition from operation to decommissioning surveys </h4>  <p>In preparing for decommissioning, surveys should be performed to the extent necessary to confirm the effectiveness of these transitional activities. The information provided should be used to validate or revise, if necessary, the decommissioning strategy.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="10.3"></div>
<h3 id="sec10-3">10.3 Decommissioning surveys</h3>  <p>Radiological conditions shall be monitored throughout decommissioning activities to confirm that radiation risks to workers, the public and the environment are being adequately controlled.</p>  <p> Surveys shall be performed throughout decommissioning to confirm the effectiveness of decommissioning activities used to reduce radiological risks (e.g., removal of excess radioactive material, decontamination of process equipment and immobilization of remaining contamination). </p>  <p> Surveys of radiological hazards shall also be performed to support the safe performance of surveillance and maintenance activities during periods when decommissioning is deferred.</p>  <p> Surveys should be performed to demonstrate that adjacent uncontaminated zones remain unaffected by decommissioning activities.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="10.4"></div>
<h3 id="sec10-4">10.4 Decommissioning end-state surveys </h3>  <p>The licensee shall conduct a final  end-state survey in accordance with a survey plan. The survey plan should  define:</p>  <ul>
<li>final radiological survey  objectives</li>
<li>methodology for conducting the  survey</li>
<li>sampling parameters and background  radiation levels</li>
<li>equipment, instruments, techniques  and procedures</li>
<li>methodology for evaluating the  final survey results</li>  </ul>
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
<h2>Glossary</h2>  <p>For definitions of terms used in this document that are not defined below, see <a href="http://www.nuclearsafety.gc.ca/pubs_catalogue/uploads/REGDOC-3-6-Glossary-of-CNSC-Terminology-eng.pdf">REGDOC&#8209;3.6, <em>Glossary of CNSC Terminology</em></a>, which includes terms and definitions used in the <a href="http://laws-lois.justice.gc.ca/eng/acts/N-28.3/"><em>Nuclear Safety and Control Act</em></a> and the regulations made under it, and in CNSC regulatory documents and other publications. REGDOC&#8209;3.6 is provided for reference and information.</p>  <p> The following terms are either new terms being defined, or include revisions to the current definition for that term. Following public consultation, the final terms and definitions will be submitted for inclusion in the next version of REGDOC&#8209;3.6, <em>Glossary of CNSC Terminology</em>.</p>  <dl>   <dt><strong>Decommissioning</strong></dt>   <dd>
<p>Administrative and technical actions taken to retire a facility from service or to cease licensed activities, and that allow the removal of some or all of the regulatory controls from a facility or location where nuclear substances are managed, possessed or stored. Decommissioning actions are the procedures, processes and work activities that lead to the release of a facility or location from regulatory control, with or without restrictions on its future use (for example, decontamination and/or dismantling of some or all structures, systems and components).</p>   </dd>  </dl>
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
<h2 id="fnb">References</h2>
<p>The CNSC may include references to information on best practices and standards such as those published by CSA Group. With permission of the publisher, CSA Group, all nuclear-related CSA standards may be viewed at no cost through the CNSC Web page &ldquo;<a href="http://www.nuclearsafety.gc.ca/eng/acts-and-regulations/regulatory-documents/csa-standards">How to gain free access to all nuclear-related CSA standards</a>&rdquo;. </p>
<dl>
<dt>Footnote 1</dt>
<dd id="fnb1">
<p>CSA Group, CSA N294, <a href="http://www.nuclearsafety.gc.ca/eng/acts-and-regulations/regulatory-documents/csa-standards"><em>Decommissioning of facilities containing nuclear substances</em></a>, Mississauga, 2009. </p>
<p className="fn-rtn"><a href="#fnb1-ref"><span className="wb-inv">Return to footnote </span>1<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 2</dt>
<dd id="fnb2">
<p>CNSC, <a href="http://www.nuclearsafety.gc.ca/eng/acts-and-regulations/regulatory-documents/published/html/regdoc3-5-3/index">REGDOC-3.5.3, <em>Regulatory Fundamentals</em></a>, Ottawa, 2018.&nbsp; </p>
<p className="fn-rtn"><a href="#fnb2-ref"><span className="wb-inv">Return to footnote </span>2<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 3</dt>
<dd id="fnb3">
<p>CNSC, draft <a href="http://www.nuclearsafety.gc.ca/eng/acts-and-regulations/consultation/comment/regdoc2-11-1-vol3-ver2">REGDOC-2.11.1, <em>Waste Management, Volume III: Safety Case for Long-Term Radioactive Waste Management</em></a>, Version 2. (Version 2 under development) </p>
<p className="fn-rtn"><a href="#fnb3-ref"><span className="wb-inv">Return to footnote </span>3<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 4</dt>
<dd id="fnb4">
<p>CNSC, draft REGDOC-3.3.1, <em>Financial Guarantees</em>. (under development). </p>
<p className="fn-rtn"><a href="#fnb4-ref"><span className="wb-inv">Return to footnote </span>4<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 5</dt>
<dd id="fnb5">
<p>CNSC, draft <a href="http://www.nuclearsafety.gc.ca/eng/acts-and-regulations/consultation/comment/regdoc2-11-1-vol1">REGDOC-2.11.1, <em>Waste Management, Volume I: Management of Radioactive Waste</em></a>. (under development) </p>
<p className="fn-rtn"><a href="#fnb5-ref"><span className="wb-inv">Return to footnote </span>5<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 6</dt>
<dd id="fnb6">
<p>CNSC, <a href="http://www.nuclearsafety.gc.ca/eng/acts-and-regulations/regulatory-documents/published/html/regdoc3-2-1/index">REGDOC-3.2.1, <em>Public Information and Disclosure</em></a>, Ottawa, 2018. </p>
<p className="fn-rtn"><a href="#fnb6-ref"><span className="wb-inv">Return to footnote </span>6<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 7</dt>
<dd id="fnb7">
<p>CNSC, <a href="http://www.nuclearsafety.gc.ca/eng/acts-and-regulations/regulatory-documents/published/html/regdoc3-2-2/index">REGDOC-3.2.2, <em>Aboriginal Engagement</em></a>, Ottawa, 2016. </p>
<p className="fn-rtn"><a href="#fnb7-ref"><span className="wb-inv">Return to footnote </span>7<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 8</dt>
<dd id="fnb8">
<p>CNSC, <a href="http://www.nuclearsafety.gc.ca/eng/acts-and-regulations/regulatory-documents/published/html/regdoc2-4-1/index">REGDOC-2.4.1, <em>Deterministic Safety Analysis</em></a>, Ottawa, 2014. </p>
<p className="fn-rtn"><a href="#fnb8-ref"><span className="wb-inv">Return to footnote </span>8<span className="wb-inv"> referrer</span></a></p>
</dd>
</dl>   </section>  </div>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="addInfo"></div>
<h2>Additional Information</h2>  <p>The following documents provide additional information that may be relevant and useful for understanding the requirements and guidance provided in this regulatory document:</p>  <ul>   <li>International Atomic Energy Agency (IAEA), IAEA Safety Standards, General Safety Requirements Part 6, <a href="https://www.iaea.org/publications/10676/decommissioning-of-facilities"><em>Decommissioning of Facilities</em></a>, Vienna, 2014. </li>   <li>IAEA, IAEA Safety Standards, General Safety Requirements Part 4, <a href="https://www-pub.iaea.org/MTCD/Publications/PDF/Pub1714web-7976998.pdf"><em>Safety Assessment for Facilities and Activities</em></a>, Vienna, 2016. </li>   <li>IAEA, IAEA Safety Standards, Specific Safety Guide No. SSG-47, <a href="https://www.iaea.org/publications/12210/decommissioning-of-nuclear-power-plants-research-reactors-and-other-nuclear-fuel-cycle-facilities"><em>Decommissioning of Nuclear Power Plants, Research Reactors and Other Nuclear Fuel Cycle Facilities</em></a><em>,</em> Vienna, 2018.</li>   <li>IAEA, IAEA Safety Standards, Safety Guide No. WS-G-5.2, <a href="https://www-pub.iaea.org/MTCD/Publications/PDF/Pub1372_web.pdf"><em>Safety Assessment for the Decommissioning of Facilities Using Radioactive Material</em></a>, Vienna, 2008. </li>   <li>Nuclear Energy Agency (NEA), <a href="https://www.oecd-nea.org/rwm/docs/2013/rwm-wpdd2013-2.pdf"><em>Radiological Characterisation for Decommissioning of Nuclear Installations</em></a>, Paris, 2013. </li>   <li>NEA, <a href="http://www.oecd-nea.org/rwm/pubs/2018/7374-decom-prep.pdf"><em>Preparing for Decommissioning During Operation and After Final Shutdown</em></a>, Paris, 2018.</li>  </ul>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<h2>CNSC Regulatory Document Series</h2>  <p>Facilities and activities within the nuclear sector in Canada are regulated by the Canadian Nuclear Safety Commission (CNSC). In addition to the <em>Nuclear Safety and Control Act </em>and associated regulations, these facilities and activities may also be required to comply with other&nbsp;regulatory instruments such as regulatory documents or standards.</p>  <p>CNSC regulatory documents are classified under the following categories and series:</p>  <ul className="list-bullet-none">
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
<li>3.2 Public and Aboriginal engagement</li>
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