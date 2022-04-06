import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "en",
                pageTitle: "Archived Web Page: Draft for Public Consultation: RD/GD-360 version 2: Long-term Operation Management for Nuclear Power Plants", 
                dateModified: "2012-11-02",
                langToggleUrl: "/fra/acts-and-regulations/consultation/comment/rd-gd-360-1"
        
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
<a name="#RDsection[1]#"></a>
<h2>Preface</h2>  <p>Nuclear power plants in Canada are subject to the ongoing regulatory oversight of the Canadian Nuclear Safety Commission (CNSC) to ensure that their operation does not pose unreasonable risk to health, safety, security or the environment, and conforms to Canada&#8217;s international obligations regarding the peaceful use of nuclear energy.</p>  <p>Regulatory document RD/GD-360 version 2, <em>Long-term Operation Management for</em> <em>Nuclear Power Plants </em>describes the regulatory requirements for the long-term operation of a nuclear power plant (NPP) and for the end of its operation. Guidance is also provided on how these requirements may be met.</p>  <p>Long-term operation of an NPP denotes operation beyond the nominal design life of the plant. As the plant approaches the end of its nominal design life, the licensee may decide to maintain continued operation of the facility for a limited term (less than ten years) up to its refurbishment or its permanent shutdown, or may decide to initiate life extension activities to support an extended period of long-term operation. In either case, the licensee must provide assurances that the safety case is maintained for all activities authorized under the power reactor operating licence throughout the period of long-term operation. Specifically, the licensee must demonstrate that the NPP will continue to meet the licensing basis and seek opportunities to improve safety. This is accomplished through the completion of a continued operation plan or an integrated safety review depending upon the period being considered for long-term operation.</p>  <p>The licensee may also decide to end operation of the NPP. The end of operation is the final, permanent shutdown of an NPP&#8217;s operation (or a single unit in a multi-unit NPP site). The NPP remains subject to its power reactor operating licence that authorizes activities during the transition period from reactor unit shutdown and safe state of storage until it enters the decommissioning phase. In such cases, the licensee must implement an end of operation plan, encompassing a sustainable operations plan for the safe operation of the NPP until the final permanent shutdown of each reactor. Depending upon the strategy chosen, the end of operation plan must also include either a detailed decommissioning plan or a preliminary decommissioning plan for the transition period until decommissioning the NPP.</p>  <p>RD/GD-360 version 2 supersedes RD-360<em>, Life Extension of Nuclear Power Plants</em>, published in February 2008.</p>  <table border="1">
<tr>
<td><p>This document may be used as part of the licensing basis for a regulated facility or activity by reference in the licence. The licensing basis sets the boundary conditions for acceptable performance at a regulated facility or activity and thus establishes the basis for the CNSC&#39;s compliance program in respect of that regulated facility or activity.</p>
<p>The licensing basis for a regulated facility or activity is a set of requirements and documents comprising:</p>
<ol className="lower-roman">
<li>the regulatory requirements set out in the applicable laws and regulations</li>
<li>the conditions and safety and control measures described in the facility&#39;s or activity&#8217;s licence and the documents directly referenced in that licence</li>
<li>the safety and control measures described in the licence application and the documents needed to support that licence application</li>
</ol>
<p>In this document, &#8220;shall&#8221; is used to express a requirement, i.e., a provision that a licensee or licence applicant is obliged to satisfy in order to comply with the requirements of this regulatory document. &#8220;Should&#8221; is used to express guidance. &#8220;May&#8221; is used to express an option or that which is permissible within the limits of this regulatory document. &#8220;Can&#8221; is used to express possibility or capability.</p>
<p>Other health, safety and environmental considerations may dictate adherence to additional requirements. It is the responsibility of the licensee to identify any other applicable legislation or standards.</p></td>
</tr>  </table>
<a name="#RDsection[2]#"></a>
<h2>Table of Contents</h2>  <div className="IndentLeft10">
<p><a href="#P122_6899"><strong>1.0 Introduction</strong></a></p>  </div>  <div className="IndentLeft20">
<p><a href="#P123_6913">1.1 Purpose</a></p>
<p><a href="#P125_7389">1.2 Scope</a></p>
<p><a href="#P133_9156">1.3 Relevant regulations</a></p>
<p><a href="#P141_11333">1.4 National and international standards</a></p>  </div>  <div className="IndentLeft10">
<p><a href="#P146_11836"><strong>2.0 General Requirements</strong></a></p>
<p><a href="#P174_16807"><strong>3.0 Continued Operation</strong></a></p>  </div>  <div className="IndentLeft20">
<p><a href="#P175_16828">3.1 General requirements for continued operation</a></p>
<p><a href="#P182_18004">3.2 Condition assessments of structures, systems, and components (SSCs) and aging management review</a></p>
<p><a href="#P190_19640">3.3 SCA reviews for continued operation</a></p>
<p><a href="#P194_20609">3.4 Continued operation plan</a></p>  </div>  <div className="IndentLeft10">
<p><a href="#P211_23465"><strong>4.0 Life extension</strong></a></p>  </div>  <div className="IndentLeft20">
<p><a href="#P212_23481">4.1 General requirements for life extension</a></p>
<p><a href="#P228_26189">4.2 Integrated safety review</a></p>  </div>  <div className="IndentLeft30">
<p><a href="#P241_27660">4.2.1 Integrated safety review basis document </a></p>  </div>  <div className="IndentLeft40">
<p><a href="#P251_28570">4.2.1.1 Scope of the integrated safety review</a></p>
<p><a href="#P265_30668">4.2.1.2 Statement of the licensing basis at the time of initiating the integrated safety review</a></p>
<p><a href="#P269_31195">4.2.1.3 Safety and control area reviews</a></p>
<p><a href="#P273_31868">4.2.1.4 Statement of modern codes, standards and practices</a></p>
<p><a href="#P279_33351">4.2.1.5 Identification and disposition of the findings</a></p>
<p><a href="#P283_34272">4.2.1.6 Risk management decision-making process</a></p>
<p><a href="#P288_34958">4.2.1.7 Global assessment</a></p>
<p><a href="#P300_37090">4.2.1.8 Management system</a></p>
<p><a href="#P309_37955">4.2.1.9 Change control</a></p>  </div>  <div className="IndentLeft30">
<p><a href="#P315_39390">4.2.2 Conduct of integrated safety review</a></p>  </div>  <div className="IndentLeft40">
<p><a href="#P321_40466">4.2.2.1 Safety and control area reports</a></p>
<p><a href="#P336_43135">4.2.2.2 Integrated safety review final report</a></p>  </div>  <div className="IndentLeft20">
<p><a href="#P357_44851">4.3 Integrated implementation plan</a></p>
<p><a href="#P388_49170">4.4 Project execution plan</a></p>  </div>  <div className="IndentLeft10">
<p><a href="#P420_53572"><strong>5.0 End of Operation</strong></a></p>  </div>  <div className="IndentLeft20">
<p><a href="#P421_53590">5.1 General requirements for end of operation</a></p>
<p><a href="#P432_54660">5.2 Sustainable operations plan</a></p>
<p><a href="#P448_56817">5.3 Preliminary decommissioning plan</a></p>  </div>  <div className="IndentLeft30">
<p><a href="#P457_59250">5.3.1 Stabilization activities</a></p>
<p><a href="#P463_61245">5.3.2 Storage and surveillance activities</a></p>  </div>  <div className="IndentLeft20">
<p><a href="#P479_63314">5.4 Decommissioning plan</a></p>  </div>  <div className="IndentLeft10">
<p><a href="#P486_64454"><strong>Appendix&nbsp;A:&nbsp;Approach to Long-term Operation Management</strong></a></p>
<p><a href="#P490_64510"><strong>Appendix&nbsp;B:&nbsp;CNSC Safety and Control Areas</strong></a></p>
<p><a href="#P659_73462"><strong>Appendix&nbsp;C:&nbsp;Project Execution Planning and Return-to-service</strong></a></p>
<p><a href="#P771_111111"><strong>Abbreviations</strong></a></p>
<p><a href="#P817_87968"><strong>Glossary</strong></a></p>
<p><a href="#P894_98846"><strong>References</strong></a></p>
<p><a href="#P908_100164"><strong>Additional Information</strong></a></p>  </div>
<a name="1.0"></a>
<h2><a name="P122_6899" id="P122_6899"></a>1.0 Introduction</h2>  <h3><a name="P123_6913" id="P123_6913"></a>1.1 Purpose</h3>  <p>This regulatory document sets out the requirements of the Canadian Nuclear Safety Commission (CNSC) with regard to the activities a licensee shall undertake to prepare for and manage the safe operation of a nuclear power plant (NPP) beyond its nominal design life (referred to as long-term operation) and to prepare for and manage the safe end of operation of an NPP leading up to its decommissioning. Guidance is also provided on how these requirements may be met.</p>  <h3><a name="P125_7389" id="P125_7389"></a>1.2 Scope</h3>  <p>This regulatory document describes the steps and measures to be implemented by the licensee in support of long-term operation (LTO) and for the end of operation of an NPP. Steps and measures undertaken under a decommissioning licence are excluded.</p>  <p>LTO is operation beyond the nominal design life of an NPP, which includes:</p>  <ol>
<li><strong>continued operation:</strong> operation for a limited period, less than 10 years beyond the nominal design life of the NPP, which has been justified and supported by a continued operation plan (COP), or</li>
<li><strong>life extension:</strong> operation for a longer period beyond the nominal design life of the NPP, which has been justified and supported by an integrated safety review (ISR), an integrated implementation plan (IIP) and, when applicable, a project execution plan (PEP)</li>  </ol>  <p>End of operation is the final, permanent shutdown of reactor operation of an NPP (or a unit of a multi-unit NPP facility) which is supported by an end of operation plan (EOP) that covers activities during the transition period from reactor unit shutdown and safe state of storage until decommissioning.</p>  <p>This document covers activities to be completed during the operating phase of the NPP, under the authorization of a power reactor operation licence (PROL) issued by the Commission, and excludes activities that are to be undertaken under the decommissioning licence. Requirements and activities pertaining to the conduct of an environmental assessment (EA) and an application for a decommissioning licence are outside the scope of this regulatory document.</p>  <p>Where appropriate, this regulatory document may be applied to nuclear facilities other than NPPs, with due consideration of the differences in hazard potential and complexity of affected systems compared to those of an NPP.</p>  <h3><a name="P133_9156" id="P133_9156"></a>1.3 Relevant regulations</h3>  <p>The following provisions of the <em>Nuclear Safety and Control Act</em> (NSCA) and regulations made under the NSCA that are relevant to this regulatory document:</p>  <ol>
<li>subsection&nbsp;24(4) of the NSCA states that &#8220;No licence may be issued, renewed, amended or replaced unless, in the opinion of the Commission, the applicant (<em>a</em>)&nbsp;is qualified to carry on the activity that the licence will authorize the licensee to carry on; and (<em>b</em>)&nbsp;will, in carrying on that activity, make adequate provision for the protection of the environment, the health and safety of persons and the maintenance of national security and measures required to implement international obligations to which Canada has agreed&#8221;</li>
<li>subsection&nbsp;24(5) of the NSCA states that &#8220;A licence may contain any term or condition that the Commission considers necessary for the purposes of this Act&#8230;&#8221;</li>
<li>section&nbsp;3 of the <em>General Nuclear Safety and Control Regulations</em> states the general licence application requirements</li>
<li>paragraphs&nbsp;12(1)(<em>c</em>), (<em>f</em>) and (<em>i</em>) of the <em>General Nuclear Safety and Control Regulations</em> state that &#8220;Every licensee shall <br />
(<em>c</em>)&nbsp;take all reasonable precautions to protect the environment and the health and safety of persons and to maintain security of nuclear facilities and of nuclear substances; &#8230;<br />
(<em>f</em>)&nbsp;take all reasonable precautions to control the release of radioactive nuclear substances or hazardous substances within the site of the licensed activity and into the environment as a result of the licensed activity; &#8230;<br />
(<em>i</em>)&nbsp;take all necessary measures to facilitate Canada&#8217;s compliance with any applicable safeguards agreement;&#8221;</li>
<li>sections&nbsp;3 and 6 of the <em>Class&nbsp;I Nuclear Facilities Regulations</em> state the general licence application requirements specific to nuclear facilities and the information required to apply for a nuclear facility operating licence</li>  </ol>  <p>Other acts, regulations, and codes are also applicable to projects to support LTO, including the <em>Canadian Environmental Assessment Act</em> (CEAA)&nbsp;[<a href="#R1">1</a>], associated regulations&nbsp;[<a href="#R2">2</a>,&nbsp;<a href="#R3">3</a>,&nbsp;<a href="#R4">4</a>,&nbsp;<a href="#R5">5</a>] and guidelines [<a href="#R6">6</a>] and the <em>Canada Labour Code, Part&nbsp;II, Occupational Health and Safety</em>&nbsp;[<a href="#R7">7</a>]. See also <em>Additional Information</em>.</p>  <h3><a name="P141_11333" id="P141_11333"></a>1.4 National and international standards</h3>  <p>Key principles and elements used in developing this regulatory document are consistent with national and international standards, guides and practices.</p>  <p>In particular, this regulatory document is consistent with:</p>  <ol>
<li>International Atomic Energy Agency (IAEA) Safety Reports Series No. 57, <em>Safe Long Term Operation of Nuclear Power Plants</em>, 2008 [<a href="#R8">8</a>]</li>
<li>IAEA, Safety Standards Series No.&nbsp;NS-G-2.10, <em>Periodic Safety Review of Nuclear Power Plants - Safety Guide</em>, 2003 [<a href="#R9">9</a>]</li>  </ol>
<a name="2.0"></a>
<h2><a name="P146_11836" id="P146_11836"></a>2.0 General Requirements</h2>  <p>As the NPP approaches the end of its nominal design life, the licensee shall implement the steps and measures set out in this regulatory document for either LTO or end of operation. </p>  <p>The licensee shall formally advise the CNSC of their intentions with regards to the operation of the NPP up to or beyond the nominal design life. Depending on strategy used, the licensee shall satisfy the requirements of:</p>  <ul>
<li>section 3 for continued operation</li>
<li>section 4 for life extension</li>
<li>section 5 for end of operation</li>  </ul>  <p>If the strategy involves a combination of the above, the licensee shall meet the requirements for each option being applie</p>  <p>The licensee shall initiate this process proactively, in a reasonable time, in order to complete the required safety reviews, plans and activities as specified in this regulatory document before the NPP reaches the end of its nominal design life.</p>  <p>The plans that are specified in this regulatory document require the approval of the Commission before they are implementeUpdates or changes to the plans shall be submitted to CNSC for review. Updates or changes after the approval of the Commission may require an amendment to a licence. If so, the update or changes will need to be submitted to the Commission.</p>  <h4>Guidance</h4>  <p>Licensees of NPPs are responsible for ensuring that their facilities and activities are operated in a manner that protects health, safety, security and the environment, while respecting Canada&#8217;s international obligations. This responsibility includes making adequate provisions for managing the safe operation of the NPP as it approaches the end of its nominal design life, including considerations for continued long-term operation of the facility, and for ending operation of the facility including the transition period from reactor unit shutdown and safe state of storage until decommissioning.</p>  <p>The process for LTO management of an NPP as it approaches its nominal design life and beyond is depicted in Appendix A. The licensee may consider the following three options:</p>  <ol>
<li><strong>continued operation:</strong> operation of the NPP for a limited period, less than 10 years beyond the nominal design life, followed by either the end of operation or life extension. In this case, the licensee completes a COP to demonstrate that the plant is capable of maintaining safe operation under normal and accident conditions during the proposed period of operation as described in section 3</li>
<li><strong>life extension:</strong> extending an NPP&#8217;s nominal design life for a period comparable to the original design life, for example, by undertaking a refurbishment project. In this case the licensee completes an ISR, an EA (as necessary), an IIP and a detailed PEP (when applicable) as described in section 4</li>
<li><strong>end of operation:</strong> ceasing operation of the NPP, including planning for its decommissioning, when fitness for service cannot be assured for the upcoming re-licensing period or the licensee has determined that they would not like to pursue LTO. The licensee completes an EOP as described in section 5</li>  </ol>  <p>Options 1 and 2 constitute LTO (see Appendix A). A period of 10 years or more beyond the nominal design life is considered life extension even if it does not involve component repair or replacement (refurbishment) or extended outage(s).</p>  <p>Activities for continued operation may be conducted in parallel or staggered with activities for the end of operation and life extension, depending on the licensee&#8217;s intentions and circumstances at the NPP. For example, continued operation may overlap with preparations for the end of operation. In this case the licensee would prepare and implement both a COP and an EOP.</p>  <p>An appropriate protocol should be established between the licensee and the CNSC. The licensee should provide details to address the administrative process for submissions and management of deliverables. This protocol applies to the entire project. The protocol should facilitate adherence to schedules and ensure timely submissions of complete and comprehensive information. </p>  <p>This protocol should facilitate meeting the requirements of all applicable regulations and this regulatory document. The protocol should address the following four key items:</p>  <ol>
<li>identification of points of contact for communication</li>
<li>specific schedules or timeframes for planned activities </li>
<li>mechanism for dispute resolution </li>
<li>process for controlling changes to the agreed protocol</li>  </ol>  <p>The CNSC will consider alternative approaches to the requirements and guidance in this document where:</p>  <ol>
<li>alternative approach would result in an equivalent or superior level of safety</li>
<li>application of the requirements in this document conflicts with other rules or requirements</li>
<li>application of the requirements in this document would not serve the underlying purpose, or is not necessary to achieve the underlying purpose </li>  </ol>  <p>Any alternative approach should demonstrate equivalence to the outcomes associated with the requirements set out in this regulatory document.</p>
<a name="3.0"></a>
<h2><a name="P174_16807" id="P174_16807"></a>3.0 Continued Operation</h2>  <h3><a name="P175_16828" id="P175_16828"></a>3.1 General requirements for continued operation</h3>  <p>The licensee shall complete the following activities for continued operation:</p>  <ol>
<li>conduct condition assessments of structures, systems and components (SSC) and aging management reviews</li>
<li>conduct reviews of each safety and control area (SCA)</li>
<li>develop and implement the resulting COP </li>  </ol>  <h4>Guidance</h4>  <p>If a licensee elects to continue operation of the NPP for a short period beyond the nominal design life (less than 10 years), it needs to demonstrate the NPP is capable of maintaining safe operation under normal and accident conditions during the proposed period of operation and transition to end of operation or life extension. To satisfy this requirement, the licensee is expected to complete condition assessments and aging management reviews to assure fitness for service of SSCs. In addition, the licensee is expected to conduct reviews of each SCA for the implications of continued operation. The result of these reviews are used by the licensee to develop a COP to provide the technical basis and demonstrates that adequate provisions are made for each of the SCA covered by the PROL for the proposed period of continued operation.</p>  <h3><a name="P182_18004" id="P182_18004"></a>3.2 Condition assessments of structures, systems, and components (SSCs) and aging management review</h3>  <p>The licensee shall provide assurances that all SSCs directly or indirectly important to the safe operation have been evaluated for the proposed period of continued operation for effects of aging, in accordance with the requirements in section 3.4.2 of RD-334, <em>Aging Management Program for Nuclear Power Plants</em>.</p>  <h4>Guidance</h4>  <p>The licensee is expected to complete an in-depth review of the effects of aging on NPP safety and evaluate the effectiveness of aging management programs for long-term operation in order to identify corrective actions and areas for improvement. Condition assessments should be completed as part of the review of aging for long-term operation. In accordance with the requirements set out in section 3.4.2 of RD-334 the review must demonstrate that:</p>  <ol>
<li>all SSCs that can, directly or indirectly, have an adverse effect on the safe operation of the NPP are evaluated for the proposed period of long-term operation</li>
<li>the effects of aging will continue to be identified and managed for these SSCs during the planned period of long-term operation</li>
<li>all safety analyses involving time-limited assumptions are validated for the proposed period of long-term operation to ensure that the aging effects will be effectively managed (i.e., to demonstrate that the intended function of SSCs will remain within the design safety margins throughout the planned period of continued operation)</li>  </ol>  <p>The results of the review of aging management for continued operation, and how the findings are to be addressed, should be documented in the COP.</p>  <h3><a name="P190_19640" id="P190_19640"></a>3.3 SCA reviews for continued operation</h3>  <p>The licensee shall perform reviews for each SCA covered by the PROL to demonstrate that the NPP is capable of maintaining safe operation and those adequate measures will be maintained during the proposed period of continued operation.</p>  <h4>Guidance</h4>  <p>The licensee is expected to perform reviews of each SCA to demonstrate that the NPP is capable of maintaining safe operation and those adequate measures will be maintained during the proposed period of continued operation. The scope of the reviews should be appropriate for the proposed period of continued operation in order to demonstrate the viability of continued operation &#8211; see Appendix B for the SCA performance objectives. For each SCA covered by the PROL, the licensee should identify if there are any issues that may impact the safe operation of the NPP for the proposed period of continued operation, and demonstrate that adequate provisions will be in place to address them.</p>  <h3><a name="P194_20609" id="P194_20609"></a>3.4 Continued operation plan</h3>  <p>The licensee shall develop a COP that addresses the results of the SSC condition assessment and aging management reviews, and the SCA reviews for continued operation. The licensee shall prepare and implement the COP in accordance with their quality management system.</p>  <p>In the COP the licensee shall:</p>  <ol>
<li>specify the proposed period of continued operation including
<ol className="lower-alpha">
<li>the date(s) when the NPP will reach end of nominal design life </li>
<li>and either:
<ol className="lower-roman">
<li>the date when the NPP will transition to life extension (if this is being considered) or</li>
<li>the date when the NPP will transition to end of operation</li>
</ol>
</li>
</ol>
</li>
<li>describe the overall strategy for continued operation (i.e., maintain continued operation of the facility up to its permanent shutdown, or for an interim period to be followed by life extension or other activities to support a longer period of LTO )</li>
<li>list the corrective actions to address all the SSCs, aging management and SCA review findings</li>
<li>specify the arrangements and schedule for implementing the corrective actions</li>
<li>specify the change control process for the COP</li>  </ol>  <h4>Guidance</h4>  <p>The continued operation plan should specify the period covered by the plan and provide an end of operation date. Each SCA should be addressed, with additional review of SSCs condition and aging management where necessary to demonstrate safety over the entire period of continued operation. Any changes to licensees programs, processes or procedures to support continued operation should be describeThe licensee should commit to the required corrective actions and improvements that ensure the safe operation of the NPP from the end of nominal design life to the end of LTO. </p>  <p>The licensee should be conservative and scope several years beyond the proposed LTO period, to assure safety and operating margins are maintained and that there are no &#8220;cliff-edge effects&#8221; at the end of the operating perio</p>  <p>The COP should describe the overall proposed strategy for continued operation, including plans for transitioning to life extension or to end of life. This includes identifying any major preparatory work required, additional technical support work and safety reviews for life-limiting components, schedule for key milestones and deliverables, and resources.</p>  <p>The COP should identify any findings related to the licensing and design bases from the SCA and aging management reviews, and disposition methods for these findings. If an ISR has been completed (see Section 4), the COP should address the dispositioning or resolution of the ISR findings as required for continued operation. Key safety issues identified in the review or as part of ongoing action items should be addressed, including proposed mitigation methods, safety improvements, and corrective actions proposed for these findings, and their schedule for implementation or completion.</p>
<a name="4.0"></a>
<h2><a name="P211_23465" id="P211_23465"></a>4.0 Life Extension</h2>  <h3><a name="P212_23481" id="P212_23481"></a>4.1 General requirements for life extension</h3>  <p>The licensee shall complete the following activities for life extension:</p>  <ol>
<li>conduct an ISR</li>
<li>develop the resulting IIP</li>
<li>develop and implement the PEP </li>  </ol>  <h4>Guidance</h4>  <p>Life extension is the long-term operation of the NPP for a longer period comparable to the original design life of the NPP. It typically involves the repair or replacement of major life-limiting components, or substantial modifications to the plant, or both. The need for refurbishment of SSCs will be largely dictated by the proposed period of life extension. The technical scope of the work should take into account operating experience in Canada and around the world, new knowledge from research and development activities, and advances in technology and safety standards.</p>  <p>The ISR is a comprehensive evaluation of the design, condition and operation of the NPP. The ISR demonstrates:</p>  <ol>
<li>the extent to which the NPP conforms to modern codes, standards and practices</li>
<li>that the licensing basis will remain valid over the operating period as defined in the ISR basis document (see section 4.2.1)</li>
<li>the adequacy of management arrangements to maintain safety of the NPP over the operating period</li>
<li>the improvements that the licensee must implement to resolve identified safety issues</li>  </ol>  <p>Modifications and upgrades described in the IIP for the safe operation of the facility are commensurate to the scope of the review performed and the proposed period of life extension. Once the ISR is completed and the IIP established, the licensee submits a detailed project execution plan that includes return to operation considerations.</p>  <p>The project execution plan identifies what needs to be done for the control and execution of the IIP work. When developing the project execution plan, some areas may require special attention, such as unique or unusual plant configurations, procurement processes and return-to-service plans.</p>  <p>In multi-unit stations, different plans can to be applied to each unit. For example, if the licensee decides to refurbish a multi-unit station, it may plan for a staggered refurbishment of each unit instead of a single continuous outage of all units at once. In this case, the plan would require considerations for both continued operation and refurbishment. </p>  <p>The work required in the IIP may constitute a project under the <em>Canadian Environmental Assessment Act</em> and be subject to an EA. There is flexibility in the order in which the EA and the ISR are conducteInformation to assist the licensee in developing the project description is provided in the Canadian Environmental Assessment Agency&#8217;s publication, <em>Preparing Project Descriptions under the Canadian Environmental Assessment Act</em>&nbsp;[<a href="#R10">10</a>].</p>  <h3><a name="P228_26189" id="P228_26189"></a>4.2 Integrated safety review</h3>  <p>The licensee shall conduct the ISR assuming the proposed operating period for life extension and complete the following documents:</p>  <ol>
<li>ISR basis document</li>
<li>SCA reports</li>
<li>ISR final report</li>  </ol>  <p>The licensee shall conduct the safety reviews and prepare the SCA reports and ISR final report in accordance with the ISR basis document. Based on the current state of the NPP, the licensee shall identify and assess any non-conformance with the applicable requirements and expectations of modern codes, standards, and practices. </p>  <h4>Guidance</h4>  <p>The ISR includes the following activities:</p>  <ol>
<li>preparing the ISR basis document</li>
<li>conducting the SCA reviews and global assessment</li>
<li>preparing the ISR final report</li>  </ol>  <p>The ISR basis document describes the scope and methodology for the ISR. The licensee subsequently conducts the reviews for each SCA, performs a global assessment, and prepares the final ISR report in accordance with the methods defined in the ISR basis document.</p>  <p>The results of the ISR are used to establish corrective actions and safety improvements to be included in the IIP. International experience has demonstrated that licensees spend considerable time and effort to complete an ISR. The benchmark for time and effort is the conduct of a periodic safety review is described in IAEA NS-G-2.The licensee should plan accordingly and begin discussions with the CNSC early on in order to ensure regulatory expectations are clear and to manage project risks.</p>  <h4><a name="P241_27660" id="P241_27660"></a>4.2.1 Integrated safety review basis document</h4>  <p>The first deliverable for the ISR is the ISR basis document, which sets out the scope and methodology for the conduct of the ISR. The basis document describes the general terms of the ISR. The required elements of the ISR basis are described in sections 4.2.1.1 to 4.2.1.9.</p>  <h4>Guidance</h4>  <p>To ensure the licensee and regulator have the same expectations for the scope and results of the ISR, the licensee should prepare and submit the basis document to the CNSC for review prior to any work on the SCA reviews.</p>  <p>A high level project plan should be prepared for the ISR basis document and the following should be established: </p>  <ol>
<li>details of project organization</li>
<li>an achievable schedule highlighting major milestones</li>
<li>the identification of key project members</li>
<li>identification and qualifications of the contractors and vendors used</li>
<li>a list of applicable outputs to the process</li>  </ol>  <h4><a name="P251_28570" id="P251_28570"></a>4.2.1.1 Scope of the integrated safety review</h4>  <p>In the ISR basis document the licensee shall describe the scope of the ISR. The licensee shall:</p>  <ol>
<li>indicate the proposed period of life extension</li>
<li>describe the strategy for life extension (i.e., maintain continued operation of the facility up to its refurbishment or permanent shutdown, or initiate life extension activities to support the proposed period of life extension)</li>
<li>address all aspects of the SCAs as described in Appendix B </li>
<li>identify the SSCs and associated facilities covered by the ISR, addressing interdependencies on common services and site-wide issues</li>
<li>consider relevant national and international operational experience pertaining to each SCA</li>
<li>consider all expected modes of operation (e.g., normal operation, maintenance, refuelling, shutdown, and start-up activities)</li>
<li>address all generic safety issues and facility-specific safety issues</li>
<li>take into consideration the operational state of each unit for a multi-unit facility, for example, safe storage, guaranteed shutdown state</li>
<li>address management of the effects of plant aging, in accordance with RD-334 requirements, and validity of the safety analyses involving time-limited assumptions for the proposed period of life extension</li>  </ol>  <h4>Guidance</h4>  <p>The basis document describes the scope of the reviews to be carried out as part of the ISR. To establish a common understanding of what is being reviewed, the basis document should identify facilities, SSCs, and the time period covered by the review. The type of life extension (with or without refurbishment) will dictate the breadth of scope required.</p>  <p>The proposed period of life extension can span from a minimum of ten years, to a period comparable to the original nominal design life of the plant. When scoping the ISR, the licensee should be conservative and analyse several years beyond the proposed life extension perioAs such, if the decision is made to continue operating beyond the proposed life extension period, the preparatory work is in place to identify upgrades and modifications required to continue safe operation.</p>  <h4><a name="P265_30668" id="P265_30668"></a>4.2.1.2 Statement of the licensing basis at the time of initiating the integrated safety review</h4>  <p>The licensee shall document the licensing basis at the time of initiation of the ISR. The licensee shall use the licensing basis for conformity reviews and serve as a baseline in the review against modern codes, standards, and practices. Therefore, the licensee shall ensure that the current or modified licensing basis will remain valid over the proposed period of life extension.</p>  <h4>Guidance</h4>  <p>No further guidance is needed at this time.</p>  <h4><a name="P269_31195" id="P269_31195"></a>4.2.1.3 Safety and control area reviews</h4>  <p>The licensee shall identify the scope and review elements applied to each SCA. The scope of the review of SCA may be adapted to ensure the focus of the review is appropriate to the period and the feasibility of life extension &#8211; see Appendix B for the SCA performance objectives. </p>  <h4>Guidance</h4>  <p>The method that will be applied in the SCA reviews should be described in the basis document to show how the licensee plans to achieve the objectives of each SCA. The type of review applied to each review element should be listeThe licensee should also describe how interdependencies on common services and site-wide issues will be addressed.</p>  <h4><a name="P273_31868" id="P273_31868"></a>4.2.1.4 Statement of modern codes, standards and practices</h4>  <p>The licensee shall state all codes, standards and practices that will be used in the review of each SCA, including the criteria for their selection. The licensee shall state the ISR &#8220;code effective date&#8221; for codes, standards and practices to be considered in the ISR. For each code, standard or practice listed, the licensee shall indicate the type of review to be performed.</p>  <h4>Guidance</h4>  <p>An integral element of the ISR is the comparison of current plant state to modern codes and standards used in NPPs. An agreed-upon code effective date and a list of codes and standards to be applied should be established prior to any work being carried out. This ensures a common and consistent expectation for the reviews. </p>  <p>Codes and standards should be selected taking into consideration the CNSC&#8217;s regulatory framework, as well as current international practices, relevant research or new findings, operational experience and CNSC regulatory documents. Primary consideration for selection of standards should rest with those referenced in licences and CNSC regulatory documents. IAEA documents and other appropriate international standards should also be considereIf an appropriate Canadian standard is not available, the licensee should propose a reasonable substitute. </p>  <p>The licensee should also provide a list of common operational standards and industrial best practices that will be considered in the performance of the reviews.</p>  <h4><a name="P279_33351" id="P279_33351"></a>4.2.1.5 Identification and disposition of the findings</h4>  <p>The licensee shall describe the processes for identifying, recording, categorizing, prioritizing and dispositioning findings. The licensee shall provide justifications for unresolved findings. The licensee shall confirm that any non-compliance with the current licensing basis or design basis will be addressed as quickly as practicable. The licensee shall resolve identified gaps with respect to modern codes, standards and practices to the extent practicable, based on the licensee&#8217;s risk management decision-making process. </p>  <h4>Guidance</h4>  <p>As the SCA reviews and global assessment are carried out, findings will be identifieThe licensee should propose a method for identifying, categorizing, ranking risk, and addressing any such findings. The rationale behind the categorization of all findings should be justified using technical arguments and supporting evidence. </p>  <h4><a name="P283_34272" id="P283_34272"></a>4.2.1.6 Risk management decision-making process</h4>  <p>The licensee shall submit the proposed risk-informed decision-making process to evaluate and decide on the various alternatives to address the findings identified in the ISR process. </p>  <h4>Guidance</h4>  <p>Typically, the licensee will be able to make a selection between several different methods of dispositioning the findings. During the development of the corrective actions, the licensee should decide how to address and resolve the findings of the ISR. </p>  <p>This process may include risk informed decision-making process, cost-benefit analysis, deterministic analysis and professional judgment. This decision-making process is applied throughout the ISR.</p>  <h4><a name="P288_34958" id="P288_34958"></a>4.2.1.7 Global assessment</h4>  <p>The licensee shall develop a methodology to carry out the global assessment that will be incorporated in the ISR final report. The licensee shall use this methodology to evaluate the safety case of the NPP by:</p>  <ol>
<li>identifying strengths of NPP design and operation </li>
<li>assigning safety significance and corresponding prioritization levels to the findings</li>
<li>evaluating the interdependencies between the findings and between their aggregate effects </li>
<li>ensuring that the safety goals and limits, as well as principles of defence-in-depth, are satisfied </li>
<li>formulating an overall risk judgment on the acceptability of continued operation of the NPP</li>  </ol>  <p>The results from the global assessment are to be incorporated into the ISR final report.</p>  <h4>Guidance</h4>  <p>The global assessment is an evaluation of the overall risk associated with the NPP. To carry out the assessment, the licensee should use a group of non-biased specialists (i.e., people who were not directly involved in performing the SCA reviews) with sufficient expertise to carry out the assessment. The team should review the findings of the SCA reviews and provide an analysis of any interface issues between the SCA reviews and between any specific deviations. From this work, the licensee should be able to present an assessment of the overall risk of the NPP, including the assessment of interface issues and the risk associated with deviations identified in the ISR. The results of the global assessment should also address the extent to which the following requirements are fulfilled: safety goals and limits; defence in depth; and other fundamental safety methods. </p>  <p>The licensee should describe the method used to perform a global assessment of the risk, taking into account the aggregate effects of all findings, and the overall acceptability of life extension.</p>  <p>If the licensee proposes to apply an accepted cost-benefit analysis approach to resolve a gap or a group of gaps, develop a corrective action, implement a safety improvement, or any combination thereof, the global assessment methodology can be used to evaluate the cost-effectiveness of the outcomes.</p>  <h4><a name="P300_37090" id="P300_37090"></a>4.2.1.8 Management system</h4>  <p>The licensee shall establish, and describe in the ISR basis document, the management system for the conduct of the ISR.</p>  <h4>Guidance</h4>  <p>The licensee should ensure:</p>  <ol>
<li>ISR review team is qualified to carry out the review </li>
<li>provisions have been made for independent review of work done, both in terms of review processes and safety documentation</li>
<li>data and information controls are in place to ensure that input data is used consistently across the review </li>
<li>requirements for the preparation and verification of documentation are satisfied</li>
<li>results are recorded in a systematic and auditable manner; for example, when assessing against modern codes, ensure that, as a minimum, a comparison is performed between a code and the as-built design when the requirements are new relative to the licensing and design basis specified in the ISR basis document</li>  </ol>  <h4><a name="P309_37955" id="P309_37955"></a>4.2.1.9 Change control</h4>  <p>The licensee shall establish a process to update the ISR basis document to include emerging issues and changes in scope. </p>  <h4>Guidance</h4>  <p>In some cases, the basis document will require revision. As part of the basis document, the licensee should prepare a method for proposing, tracking and documenting any changes. Guidelines on the type of changes that would require the basis document to be revised should also be provided.</p>  <p>During the period between the acceptance of the ISR basis document and the start of the life extension activities, the codes and standards identified in the basis document may be revised or new ones may come into effect. For example, if there is a sufficiently long period before the start of life extension activities, such as ten years, some of the findings in the ISR basis document may no longer be valiIn this case a review against new standards may be necessary. The licensee should outline how new or current revisions of codes and standards will be addresseThe code effective date should be used to disposition any findings. The process assessing the safety significance of the findings should be the same as that is described in the ISR basis document.</p>  <p>The licensee should outline how these changes will be communicated to the CNSC. The licensee should notify the CNSC of the change itself and any significant implications, such as changes to the schedule, scope or other processes.</p>  <h4><a name="P315_39390" id="P315_39390"></a>4.2.2 Conduct of integrated safety review</h4>  <p>The licensee shall conduct the reviews for each SCA and preparation of the final ISR report and global assessment, in accordance with the methods defined in the ISR basis document following its acceptance by the CNSC, as described in section 4.2.1.</p>  <h4>Guidance</h4>  <p>The licensee should carry out the SCA reviews after CNSC staff has accepted the ISR basis document. Continuous improvement is an important aspect of each SCA review, so the licensee should develop initiatives for this in each review and describe the benefits to existing practices. </p>  <p>To ensure the reviews are consistent, the licensee should refer to Appendix B to verify that the documentation is adequately prepared and provides the required information. It is recommended that the licensee ensures that the scope of each review addresses its own requirements, and the requirements of any related SCA as applicable.</p>  <p>The licensee should assess the actual state of the NPP against modern expectations rather than comparing old and new editions of the codes, standards and practices.</p>  <h4><a name="P321_40466" id="P321_40466"></a>4.2.2.1 Safety and control area reports</h4>  <p>The licensee shall prepare reports for each SCA for submission to CNSC in accordance with the accepted ISR basis document. Based on the current state of the NPP, the licensee shall identify and assess any non-conformance with the applicable requirements and expectations of modern codes, standards and practices.</p>  <h4>Guidance</h4>  <p>The SCA reports contain the licensee&#8217;s results for the specific review topics in each SCA. The results of the conformity reviews and the comparison against modern codes, standards, and practices are also includeAny findings are categorized and dispositioned in accordance with the process indicated in section 4.2.1.5.</p>  <p>Each SCA report is expected to contain a number of standard elements. The overall structure of each report should be a summary of the review followed by detailed reporting and conclusions. The report should include:</p>  <ol>
<li>a statement of the objectives of the review</li>
<li>description of the scope of the review covered in the report</li>
<li>clear indication of the type of review conducted: a clause-by-clause review, a high-level review, or a combination thereof, and the rationale for selecting this type of review</li>
<li>systematic coverage of the expected review elements with detailed analysis of how the licensee addressed expectations to fulfill design and licensing bases, as well as satisfying modern codes and standards set out in the basis document</li>
<li>supporting figures, tables, graphs, data, and any other design or operational information that would be used to support the licensees arguments</li>
<li>clear indication of the licensee acceptance of any work done by an outsourced contractor, and whether the licensee has corrected any statements made by the contractor</li>
<li>enough information to allow CNSC staff to make a regulatory determination based on the information contained in the report, which means that the SCA report should be self-standing and complete</li>  </ol>  <p>SCA reports should not contain information not supported by physical inspection or analyses, personal information, or criticisms of internal processes or procedures.</p>  <p>The licensee should prepare the ISR safety and control area reports to be as self-contained as practicable, avoiding excessive referencing. Where a standard or practice addresses more than one safety and control area, the results of such reviews should be cross-referenced.</p>  <p>It is preferred that the safety and control area reports be submitted concurrently or in a single package because some safety and control area reports may be inter-relateFor example, the report for fitness for service may be inter-related with the reports on physical design and safety analysis. </p>  <h4><a name="P336_43135" id="P336_43135"></a>4.2.2.2 Integrated safety review final report</h4>  <p>The licensee shall prepare an ISR final report that documents:</p>  <ol>
<li>significant ISR findings reported in the SCA reports</li>
<li>results of applying the global assessment methodology</li>
<li>an overall risk judgment on the acceptability of life extension of the NPP</li>
<li>dispositioning of findings</li>
<li>safety improvements and corrective actions for addressing findings</li>  </ol>  <h4>Guidance</h4>  <p>The licensee should prepare the ISR final report using the results of SCA reports and the global assessment. The ISR final report addresses the objectives of the ISR and the SCA review topics, and should include the following elements:</p>  <ol>
<li>summaries of the SCA reports</li>
<li>global assessment that is based on the aggregate effect of the findings resulting from all safety and control areas, as well as the results each SCA review, taking the proposed corrective actions and safety improvements into account</li>
<li>any findings related to the licensing and design bases, and disposition methods for these findings</li>
<li>strengths, weaknesses, and interface issues from the SCA reports</li>
<li>strengths and weaknesses of the facility with respect to fulfilling the safety requirements of defence-in-depth, particularly any elements relating to the basic safety functions of:
<ol className="lower-alpha">
<li>reactivity control</li>
<li>fuel cooling</li>
<li>confinement of radioactive materials</li>
</ol>
</li>
<li>safety significance and risk ranking of all the findings (any key safety issues identified should be addressed as soon as practicable, instead of waiting for the ISR process to be complete)</li>
<li>mitigation methods, safety improvements, and corrective actions proposed for these findings</li>
<li>statement of the licensee&#8217;s assessment of the overall acceptability of life extension of the NPP</li>  </ol>  <h3><a name="P357_44851" id="P357_44851"></a>4.3 Integrated implementation plan</h3>  <p>The licensee shall develop an IIP that addresses the results of the ISR to support the period of life extension. If an EA has been performed, the licensee shall ensure that the IIP integrates any action or follow-up program identified in the EA decision. In developing the IIP, the licensee shall confirm that the life extension assumptions remain valid for:</p>  <ol>
<li>the period of life extension</li>
<li>any commitments or scope of activities that were credited in the ISR or EA, for example, proposed modification, replacement or upgrade of components</li>  </ol>  <p>The licensee shall assess the impact of any changes to the commitments or assumptions that were credited in the ISR documentation, including the impact of the changes on the IIP and provide justification. </p>  <p>In the IIP the licensee shall:</p>  <ol>
<li>state the period of life extension for the NPP </li>
<li>state the date for when the NPP will transition to life extension activities</li>
<li>list the corrective actions and safety improvements to address all the ISR and EA findings</li>
<li>specify the schedule for implementing the corrective actions and safety improvements</li>
<li>specify the change control process for the IIP</li>
<li>state the date for when the NPP will transition to end of operation</li>  </ol>  <h4>Guidance</h4>  <p>The IIP is prepared using:</p>  <ol>
<li>ISR final report</li>
<li>EA decision (if applicable) </li>
<li>CNSC staff&#8217;s reviews of the SCA reports and ISR final report</li>  </ol>  <p>The objective of the IIP is to establish the process for the implementation of corrective actions and safety improvements consistent with risk-informed considerations and related cost-benefit implications. The IIP should include an analysis of the identified findings and the proposed corrective actions and safety improvements that would address them, to ensure the changes will suit the intended purpose. The method applied in developing corrective actions and safety improvements addressing each of the gaps or grouping of gaps should be describeCorrective actions and safety improvements should be prioritized, and the cost-benefit analysis should be made available as part of the submission where possible.</p>  <p>An important element of the IIP is the inclusion of an implementation schedule for life extension activities. Required material and human resources should be considered in the schedule to allow for proper lead time for procurement and the acquisition of resources. In the case where the licensee identifies a corrective action or safety improvement that results in a significant safety benefit mid-way through the ISR process, the licensee should implement this change immediately, if possible. Consideration should be given to any interactions between the corrective actions and safety improvements, using appropriate configuration control. </p>  <p>An overview of the acceptability of life extension in view of the proposed changes should be included, to demonstrate the outcome of safety improvements serves the intended purpose of the ISR.</p>  <p>In the IIP the licensee should:</p>  <ol>
<li>demonstrate traceability and provide references to the ISR final report and EA</li>
<li>specify the processes used for determining the detailed scope, including prioritization and scheduling of corrective actions and safety improvements </li>
<li>provide results, as far as practicable, to support the extended period of operation. The corrective actions and safety improvements address all the ISR and EA results for each safety and control area, and consider the aggregate effect of the gaps in related SCAs</li>
<li>prioritise the schedule for implementation on a risk-basis, such that corrective actions and improvements that have the greatest impact on the safety and risk are completed in a timely manner</li>
<li>specify processes for identification and management of project risks and controls</li>
<li>specify the process to be used to track the progress and completion of the corrective actions and safety improvements</li>
<li>address legal and licensing requirements</li>  </ol>  <p>The licensee should have a well-defined process for the control of any changes to the IIP clearly described as part of the proposed IIP. In some cases, the Commission Tribunal&#8217;s approval would be required for the changes, for example:</p>  <ol>
<li>changes to the IIP associated with work that is needed to fulfill the requirements identified by the EA</li>
<li>changes to the IIP for items subject to licence conditions in the PROL</li>  </ol>  <h3><a name="P388_49170" id="P388_49170"></a>4.4 Project execution plan</h3>  <p>The licensee shall prepare a project execution plan that establishes what needs to be done to achieve the IIP outcome. The implementation of the project execution plan may be preceded by a limited period of time of operation beyond the nominal design life. In such a case, before proceeding with the project, the licensee shall update the ISR and IIP as necessary to account for any changes that have occurred between the completion of the IIP and the initiation of the project if applicable.</p>  <p>The licensee shall ensure that the PEP includes the following:</p>  <ol>
<li>definition of the plant configuration during the construction outage(s), including facilities, and in the case of multi-unit stations, common services affected by the outage</li>
<li>modifications to any programs, processes or procedures taking into account changes to the nature of the work performed, number of workers, and worker qualification</li>
<li>construction program, including activities related to design, procurement, and construction of new, modified and refurbished SSCs</li>
<li>return-to-service program describing the systematic approach to SSCs testing and facility integrated testing</li>
<li>management system in place governing project execution activities</li>  </ol>  <h4>Guidance</h4>  <p>Significant extension in operation beyond the nominal design life, of 10 or more years, will generally involve major component repair and replacement (refurbishment) activities including:</p>  <ol>
<li>replacement of critical SSCs (for example, pressure tubes, calandria tubes, steam generators, feeders)</li>
<li>repairs on SSCs (for example, concrete containment structures, anchors)</li>
<li>implementation of improvements to the plant (for example, improvements related to compliance with modern codes and standards, lessons learned and operational experience) as described in the IIP</li>  </ol>  <p>The licensee should describe how it will ensure the safe and satisfactory completion of all construction activities during the execution phase of the project, and the return-to-service activities. All activities should be governed by the provisions of the management system, to ensure that there is controlled turnover of the SSCs from the refurbishment phase to return-to-service.</p>  <p>The licensee should also describe the return-to-service activities, including the commissioning activities, which will confirm that the equipment, SSCs, and plant as an integral unit will perform and function in accordance with the design specifications, regulatory requirements, and as credited in the safety analyses. </p>  <p>The plan should address the following:</p>  <ol>
<li>provisions made for communication protocol with CNSC staff on all matters related to the plant construction and commissioning activities</li>
<li>provisions made for making permanent and temporary design changes during construction and commissioning</li>
<li>provision for radiation protection and ALARA considerations</li>
<li>provisions made for the identification, resolution and approval of deviations from the design of existing, replacement, or new SSCs</li>
<li>provisions to ensure that changes to the design baseline are identified, reviewed, approved and documented for the handover of completed work from the:
<ol className="lower-alpha">
<li>construction organization to the commissioning organization</li>
<li>commissioning organization to the operating organization</li>
</ol>
</li>
<li>provisions to ensure that degradation of SSCs does not occur as a result of the lay-up state</li>
<li>provisions to ensure the maintenance of SSCs during construction activities and commissioning</li>
<li>provisions for procurement, supply chain, fabrication, on-site fabrication, construction and commissioning</li>
<li>development, validation and implementation of programs and procedures related to commissioning, reliability testing, maintenance, and operation</li>
<li>health and safety arrangements made for all activities conducted during construction and commissioning </li>
<li>security and safeguards arrangements, including access control and access clearance requirements to the construction site </li>
<li> training and qualification of all staff engaged in construction and commissioning activities</li>
<li>provisions for the validation at the end of construction, of records that will be transferred to the commissioning or operating organization to be maintained for the lifetime of the installation</li>  </ol>  <p>The licensee should submit the project execution plan to the CNSC for review. Supplemental guidance for the PEP and return-to-service activities is provided in Appendix C.</p>
<a name="5.0"></a>
<h2><a name="P420_53572" id="P420_53572"></a>5.0 End of Operation</h2>  <h3><a name="P421_53590" id="P421_53590"></a>5.1 General requirements for end of operation</h3>  <p>The licensee shall develop and implement an EOP and provide:</p>  <ol>
<li>the schedule and milestones for shutdown and decommissioning, including:
<ol className="lower-alpha">
<li>the estimated date for final permanent shutdown of each reactor unit</li>
<li>the date by which the licensee is planning to apply for a decommissioning licence</li>
</ol>
</li>
<li>a sustainable operations plan (SOP) addressing the period of operation up to permanent shutdown of each reactor unit and</li>
<li>one of the following:
<ol className="lower-alpha">
<li>a preliminary decommissioning plan if the licensee&#8217;s strategy involves a period of safe state of storage (SSS) prior to NPP decommissioning</li>
<li>a detailed decommissioning plan if the licensee&#8217;s strategy involves proceeding immediately with the decommissioning of the NPP after the permanent shutdown of the reactor unit(s)</li>
</ol>
</li>  </ol>  <h4>Guidance</h4>  <p>The licensee should describe the strategy, arrangements and activities that will be undertaken to provide assurance of the safe of operation of the NPP until the final shutdown of each reactor unit(s) and for the transition period until decommissioning.</p>  <h3><a name="P432_54660" id="P432_54660"></a>5.2 Sustainable operations plan</h3>  <p>The licensee shall ensure that the SOP describes the arrangements and activities required to demonstrate that safe and reliable operation of the NPP will be maintained and sustained, for each SCA covered under the licence, for the period of operation up until each reactor unit is permanently shut down. </p>  <p>The licensee shall ensure that the plan addresses all elements of SCAs authorized by the licence, and provide information on the duration, schedule and milestones for the execution of activities, if applicable.</p>  <h4>Guidance </h4>  <p>The SOP describes the licensee&#8217;s actions to transition the NPP from normal operation to SSS or decommissioning activities. The licensee should address the following general elements:</p>  <ol>
<li>the date the NPP will transition into SSS (if applicable) and the length of time the reactor will be in SSS</li>
<li>the management system and any special conditions or changes required during the transition to SSS, period of SSS, transition to decommissioning and decommissioning itself (for example, any particular procurement practices, maintenance programs, quality management)</li>
<li>maintenance of operational fitness of the NPP leading up to SSS and decommissioning, including assurances that the NPP continues to meet the design and licensing bases, and performing safety analysis to consider the effects of aging on SSCs and operational safety margins of the NPP</li>
<li>retention of experienced, qualified staff and the management of knowledge of the facility and its equipment</li>
<li>identification of the use of contractors and the level of control associated to work carried out by contractors</li>
<li>training to be provided to workers who will be involved in the SSS as well as decommissioning activities of the NPP</li>
<li>review of environmental releases to be monitored during transition and period of SSS (for example, releases, soil contamination, groundwater contamination)</li>
<li>maintenance of the security of the facility</li>
<li>the specific elements of the aging management program required over the SSS period</li>
<li>maintenance of radiation protection </li>
<li>financial guarantees for decommissioning and transition from SSS to decommissioning</li>  </ol>  <h3><a name="P448_56817" id="P448_56817"></a>5.3 Preliminary decommissioning plan</h3>  <p>If the licensee intends to defer decommissioning the NPP, the licensee shall update the preliminary decommissioning plan (PDP) to provide a clear strategy of entering the SSS. The licensee shall describe the arrangements and activities required to put the reactor unit(s) into SSS and ensure their monitoring until its decommissioning. The licensee shall include stabilization, storage and surveillance activities in the PDP.</p>  <p>The licensee shall address, as appropriate, all elements of SCAs authorized by the licence, and provide information on the duration, schedule and milestones for their execution.</p>  <h4>Guidance</h4>  <p>For the end of operation, the objective of the PDP is to verify the licensee&#8217;s ability to place and maintain the NPP into a condition of safe long-term storage prior to decommissioning. The plan is composed of:</p>  <ol>
<li>stabilization activities that transition the NPP from a shut down reactor to SSS </li>
<li>storage and surveillance activities that are required to maintain safety of NPP while in SSS</li>  </ol>  <p>At all stages of the preparation and implementation of the updated PDP, it is the licensee&#8217;s responsibility to ensure that workers, the public and the environment are well protected from radiological and conventional hazards. Prior to being placed into SSS, measures should be taken to reduce the hazards associated with an NPP to the extent practicable. By utilizing this method the licensee is able to reduce general maintenance needs of the NPP, as well as allow time for decommissioning considerations.</p>  <p>The principle task in developing the PDP strategy for end of operation is a thorough safety assessment, addressing all elements of each SCA authorized by the licence. This assessment forms the basis for measures to be taken during the transition into safe storage. Throughout this period, the safety assessment should be as comprehensive as possible, considering both radiological and conventional hazards for the entire facility, not just the reactors. This assessment establishes confidence in the licensee&#8217;s ability to safely maintain the facility and is the basis of baselines for monitoring, maintenance, surveillance and future dismantling. Depending upon the period of safe storage, it may be beneficial to the licensee to reassess safety using new measured data at predetermined intervals. This safety assessment and any revisions using new data should be submitted to the CNSC.</p>  <h4><a name="P457_59250" id="P457_59250"></a>5.3.1 Stabilization activities</h4>  <p>As part of the PDP, the licensee shall describe the arrangements and activities that will be conducted to ensure the safe transition of the NPP reactor unit(s) from a final shutdown state to the SSS. The licensee shall include information on the NPP configuration during safe storage phase and the tasks and processes to implement this configuration.</p>  <h4>Guidance</h4>  <p>This portion of the PDP covers activities and tasks to be carried out as the NPP is prepared for SSS. The licensee should address all actions and activities required to transition the NPP from a permanent de-powered state to safe storage. Activities undertaken to reduce the radioactive source term, such as removal of fuel, draining of the moderator, and isolation of residual radioactive sources, are examples of actions included in stabilization activities. Safety culture and occupational health and safety programs should be reviewed to ensure that workers who will remain on site understand the NPP&#8217;s changing configuration and the effects it will have on general safety practices.</p>  <p>As the transition from normal operation to SSS occurs, certain areas of the facility will become more or less restricted due to new or modified hazards. The licensee should review access controls to all areas of the facility during the transition to SSS and throughout the SSS perioRadiation protection is an important consideration during this process because the changing configuration of the facility may induce new radiological hazards not present previously. This review will ensure that worker exposure to hazards are minimized to the extent possible, and where exposure cannot be eliminated, proper consideration is given to minimize exposure and time at risk.</p>  <p>The licensee should review all SSCs to identify which will require modification or upgrade to accommodate SSS, and which can be removed from service. Once these SSCs are identified, the licensee can implement the changes in support of safe storage.</p>  <h4><a name="P463_61245" id="P463_61245"></a>5.3.2 Storage and surveillance activities </h4>  <p>As part of the PDP, the licensee shall describe the arrangements and activities required to ensure maintenance of the SSS and its surveillance during the period of deferment prior to final dismantlement and decommissioning of the NPP.</p>  <h4>Guidance</h4>  <p>This portion of the PDP describes the measures applied to ensure that the facility is kept in a safe condition throughout the SSS. The tasks in this plan are centered on equipment, systems, processes and procedures that require maintenance. Frequency of maintenance typically decreases while the facility is in SSS, but the methods used to monitor and maintain equipment should be generally unchange</p>  <p>The licensee should use existing procedures to the extent practicable to minimize the need for development of new and specific procedures. Some new procedures or programs will be needed due to the nature of special considerations while the NPP is in SSS, for example, ground water leakage.</p>  <p>The PDP should also describe:</p>  <ol>
<li>actions to be taken during normal and abnormal occurrences while the facility is in SSS</li>
<li>frequency and nature of maintenance, inspection and monitoring activities including aging management programs</li>
<li>physical security for the NPP while in SSS</li>
<li>parameters to be monitored to ensure integrity of the NPP (for example, humidity, corrosion, ventilation, atmospheric pollutants)</li>
<li>parameters to be monitored to ensure environmental protection and monitoring of potential effluents and releases</li>
<li>parameters to be monitored to ensure radiation protection requirements continue to be met for residual staff and the public</li>
<li>changes to any plan, program or procedure in place required for SSS (for example, changes to the emergency plan, radiation protection program)</li>
<li>resources required for maintenance of the NPP throughout the SSS phase (for example, equipment, capital, personnel, supplies)</li>
<li>waste management practices to be applied, including predicted levels of waste, sorted by category, generated in each phase of SSS</li>
<li>records to be generated while in SSS</li>  </ol>  <h4><a name="P479_63314" id="P479_63314"></a>5.4 Decommissioning plan</h4>  <p>If the licensee intends to proceed immediately with decommissioning after the end of operation, the licensee shall prepare a detailed decommissioning plan in support of an application for a decommissioning licence. The licensee shall prepare the application for a licence to decommission in accordance with the NSCA and its regulations, specifically with section 7 of the <em>Class I Nuclear Facilities Regulations</em>, and other applicable requirements. The licence to decommission is required prior to commencing the execution of decommissioning activities.</p>  <h4>Guidance</h4>  <p>When the licensee has put the NPP into SSS, the preliminary decommissioning plan should be updated and a detailed decommissioning plan prepareThe detailed decommissioning plan should be prepared in support of the application for a decommissioning licence in accordance with the regulatory guide G-219: <em>Decommissioning Planning for Licensed Activities </em>[<a href="#R11">11</a>], and&nbsp;CSA N294-09: <em>Decommissioning of Facilities Containing Nuclear Substances </em>[<a href="#R12">12</a>].</p>  <p>As the licence to decommission is separate from the PROL, decommissioning is outside the scope of this document.</p>
<a name="A"></a>
<h2><a name="P486_64454" id="P486_64454"></a>Appendix&nbsp;A:&nbsp;Approach to Long-term Operation Management</h2>  <p><img src="rd-gd-360/images/rd-gd-360-e.png" alt="3" width="590" height="337" /></p>
<a name="B"></a>
<h2><a name="P490_64510" id="P490_64510"></a>Appendix&nbsp;B:&nbsp;CNSC Safety and Control Areas</h2>  <table border="1">
<tr>
<th>Safety and Control Area</th>
<th>Description
</td>
<th>Performance Objectives</th>
<th>Specific Areas<br />
(including but not limited to)</th>
</tr>
<tr>
<td><p>Management System</p></td>
<td><p>The framework which establishes the processes and programs required to ensure the organization achieves its safety objectives and continuously monitors its performance against these objectives and fostering a healthy safety culture.</p></td>
<td><p>Adequate management oversight of the control and implementation of activities defined by the documented series of processes.</p></td>
<td><ul>
<li>management system (including safety management)&nbsp;/&nbsp;quality management oversight</li>
<li>organizational structure, roles and responsibilities, resource management, leadership</li>
<li>strategic/business planning</li>
<li>internal communications</li>
<li> monitoring and review of safety management performance</li>
<li>organizational&nbsp;/ change management</li>
<li>management of safety issues (including research and development programs)</li>
<li>safety culture</li>
</ul></td>
</tr>
<tr>
<td><p>Human Performance Management</p></td>
<td><p>The activities that enable effective human performance through the development and implementation of processes that ensure that licensee staff is sufficient in number in all relevant job areas and have the necessary knowledge, skills, procedures and tools in place to safely carry out their duties.</p></td>
<td><p>Continued and consistent safe performance of a nuclear facility through a system of programs, policies, standards and procedures.</p></td>
<td><ul>
<li>personnel training</li>
<li>personnel examination and certification (where required)</li>
<li>work organization and job design (minimum shift complement, hours of work limitation)</li>
<li>human performance programs (procedural adherence, event free tool, identification of error)</li>
<li>fitness for duty</li>
<li>procedures and job aids (development and validation)</li>
</ul></td>
</tr>
<tr>
<td><p>Operating Performance</p></td>
<td><p>This includes an overall review of the conduct of the licensed activities and the activities that enable effective performance.</p></td>
<td><p>Safe and secure plant operation with adequate regard for health, safety, security, environmental protection and international obligations.</p></td>
<td><ul>
<li>conduct of licensed activity</li>
<li>adequacy of procedures</li>
<li>operating experience (corrective actions programs, root cause analysis, effectiveness review)</li>
<li>reporting and trending</li>
<li>outage management performance</li>
</ul></td>
</tr>
<tr>
<td><p>Safety Analysis</p></td>
<td><p>Maintenance of the safety analysis that supports that overall safety case for the facility. Safety analysis is a systematic evaluation of the potential hazards associated with the conduct of a proposed activity or facility and considers the effectiveness of&nbsp;preventative measures and strategies&nbsp;in reducing the effects of&nbsp;such hazards. </p></td>
<td><p>Demonstrated acceptability of the consequences of design basis events, the capability of protective systems to adequately control power, cool the fuel and contain any radioactivity that could be released from the plant.</p></td>
<td><ul>
<li>deterministic safety analysis</li>
<li>hazard analysis (internal and external) including
<ul>
<li>fire hazard analysis</li>
<li>seismic hazard assessments</li>
<li>flood hazard</li>
</ul>
</li>
<li>safe operating envelope</li>
<li>probabilistic safety analysis (including human reliability analysis)</li>
<li>robustness analysis</li>
<li>criticality safety</li>
</ul></td>
</tr>
<tr>
<td><p>Physical Design</p></td>
<td><p>The activities that impact on the ability of systems, components and structures to meet and maintain their design basis given new information arising over time and taking changes in the external environment into account.</p></td>
<td><p>A design basis that remains valid for all systems, structures and components.</p></td>
<td><ul>
<li>system classification</li>
<li>site characterization</li>
<li>engineering change control</li>
<li>equipment qualification</li>
<li>facility safety systems</li>
<li>reactor control systems</li>
<li>human factors in design</li>
<li>configuration management</li>
<li>pressure boundary design</li>
<li>fuel design</li>
<li>nuclear design</li>
<li>process and control systems</li>
<li>waste management systems</li>
<li>electrical and distribution systems</li>
<li>environmental qualification and control systems</li>
<li>instrumentation and control systems (including software)</li>
<li>emergency and service water systems</li>
<li>cables</li>
<li>device and package certification</li>
<li>master equipment list</li>
</ul></td>
</tr>
<tr>
<td><p>Fitness for Service</p></td>
<td><p>The activities that impact on the physical condition of systems, components and structures to ensure that they remain effective over time. This includes programs that ensure all equipment is available to perform its intended design function when called upon to do so.</p></td>
<td><p>Structures, systems, and components whose performance may affect safe operations or security remain available, reliable and effective, consistent with the design, quality control measures and analysis documents.</p></td>
<td><ul>
<li>equipment fitness for service/equipment performance (e.g., system health report)</li>
<li>maintenance (including outage management process)</li>
<li>reliability</li>
<li>structural integrity</li>
<li>life cycle management</li>
<li>aging management</li>
<li>chemistry control</li>
<li>condition monitoring</li>
</ul></td>
</tr>
<tr>
<td><p>Radiation Protection</p></td>
<td><p>The implementation of a radiation protection program in accordance with the RP Regulations. This program must ensure that contamination and radiation doses received are monitored and controlled</p></td>
<td><p>Adequate protection of the health and safety of persons inside the facility with respect to ionizing radiation. </p></td>
<td><ul>
<li>application of ALARA</li>
<li>dosimetry services</li>
<li>worker dose control</li>
<li>contamination control</li>
</ul></td>
</tr>
<tr>
<td><p>Conventional Health and Safety</p></td>
<td><p>The implementation of a program to manage workplace safety hazards and to protect personnel and equipment.</p></td>
<td><p>Conventional health and safety work practices and conditions achieve a high degree of personnel safety.</p></td>
<td><ul>
<li>compliance with applicable labour code</li>
<li>house keeping (fire, chemical, tripping hazard, etc.)</li>
</ul></td>
</tr>
<tr>
<td><p>Environmental Protection</p></td>
<td><p>The programs that identify, control and monitor all releases of radioactive and hazardous substances and effects on the environment from facilities or as the result of licensed activities </p></td>
<td><p>Protection of the environment and the health and safety of persons by taking all reasonable precautions, including identifying, controlling, and monitoring the release of radioactive substances and hazardous substances to the environment.</p></td>
<td><ul>
<li>effluent and emissions control (releases)</li>
<li>environmental monitoring</li>
<li>estimated dose to public</li>
<li>environmental risk assessment</li>
<li>environmental management system </li>
</ul></td>
</tr>
<tr>
<td><p>Emergency Management and Fire Protection.</p></td>
<td><p>The emergency plans and emergency preparedness programs which exist for emergencies and for non-routine conditions. This also includes any results of exercise participation.</p></td>
<td><p>Adequate provisions for preparedness and response capability that would mitigate the effects of accidental releases of nuclear substances and hazardous substances on the environment, the health and safety of persons and the maintenance of national security.</p></td>
<td><ul>
<li>nuclear emergency management</li>
<li>fire protection and response</li>
<li>conventional emergency response</li>
<li>business continuity</li>
</ul></td>
</tr>
<tr>
<td><p>Waste Management</p></td>
<td><p>The internal waste-related programs which form part of the facility&#8217;s operations up to the point where the waste is removed from the facility to a separate waste management facility. Also covers the planning for decommissioning</p></td>
<td><p>An acceptable waste management program would be facility and waste stream specifiHowever, it would be CNSC staff&#8217;s expectation that licensees develop, implement and audit their internal waste management programs and include waste management as a key component of their corporate and safety culture.</p></td>
<td><ul>
<li>waste minimization, segregation and characterization</li>
<li>waste storage and processing</li>
<li>preliminary decommissioning plans</li>
</ul></td>
</tr>
<tr>
<td><p>Security</p></td>
<td><p>The programs required to implement and support the security requirements stipulated in the regulations, in the license, in orders, or in expectations for the facility or activity.</p></td>
<td><p>Provisions for a physical protection program to provide the required security for the facility and its operations.</p></td>
<td><ul>
<li>facility security</li>
<li>material security</li>
<li>security systems</li>
<li>cyber security</li>
</ul></td>
</tr>
<tr>
<td><p>Safeguards</p></td>
<td><p>The programs required for the successful implementation of the obligations arising from the Canada/IAEA Safeguards Agreement.</p></td>
<td><p>Conformity with measures required by the facility to meet Canada&#8217;s international safeguards obligations through:</p>
<ul>
<li><em></em>timely and accurate provision of reports on nuclear materials</li>
<li>provision of access and assistance to IAEA inspectors for verification activities</li>
<li><em></em>submission of annual operational information and accurate design information of plant structures,  processes and procedures</li>
<li><em></em>development and satisfactory implementation of appropriate facility safeguards procedures</li>
</ul></td>
<td>&#160; </td>
</tr>
<tr>
<td><p>Packaging and Transport</p></td>
<td><p>Programs that manage the safe packaging and transport of nuclear substances and radiation devices to and from the licensed facility.</p></td>
<td><p>Adherence to the CNSC
<em>Packaging and Transport of Nuclear Substances Regulations</em> and Transport Canada
<em>Transportation of Dangerous Goods Regulations</em> for all shipments leaving the site. Shipments of nuclear substances within the nuclear facility where access to the property is controlled are exempted from the application of the
<em>Packaging and Transport of Nuclear Substances Regulations</em>. </p></td>
<td><ul>
<li>adherence to CNSC, Transport Canada, and international regulations on packaging and transport</li>
</ul></td>
</tr>  </table>
<a name="C"></a>
<h2><a name="P659_73462" id="P659_73462"></a>Appendix&nbsp;C:&nbsp;Project Execution Planning and Return-to-service</h2>  <h3>C.1 Plant configuration</h3>  <p>The licensee should provide the specific plant configurations under which the life extension activities will be carried out. These configurations should take into consideration:</p>  <ol>
<li>systems required to remain in operation during the outage(s)</li>
<li>conditions under which some systems will be laid up</li>
<li>security requirements</li>
<li>safeguard requirements</li>
<li>health and safety requirements (including radiation protection)</li>
<li>environmental protection</li>  </ol>  <p>In the case of multiple unit stations, the following should also be taken into consideration:</p>  <ol>
<li>impact on common facilities and services</li>
<li>provision for isolation from other units</li>
<li>impact on the safety case for the nuclear facility as a whole</li>  </ol>  <p>The licensee should provide a documented case demonstrating that relevant considerations have been taken into account in the establishment of the plant configuration during the outage(s), and that potential safety impacts have been identified, assessed, and appropriately addressed.</p>  <p>Some changes to the plant configuration may require regulatory approval. These should be clearly identified and included in the licensee submission.</p>  <h3>C.2 Programs and processes</h3>  <p>The life extension activities may include extensive design, construction, and return-to-service activities that will be carried over extended outage(s). It typically involves a large number of workers of various qualifications, performing tasks and working in an environment with increased levels of risks or risks that are different in nature or probability from that of an operating plant. In this context, the licensee has to ensure that acceptable programs and processes are in place to address the execution of the project activities.</p>  <p>Areas of primary importance include programs and processes related to assurance of adequate engineering design, procurement, construction, worker qualification, worker health and safety, overall plant safety, and assurance of compliance with regulations and international obligations.</p>  <p>Relevant programs and processes include:</p>  <ol>
<li>aging management</li>
<li>change control</li>
<li>configuration management</li>
<li>construction</li>
<li>commissioning</li>
<li>corrective actions</li>
<li>emergency preparedness</li>
<li>engineering design</li>
<li>environmental protection</li>
<li>fire protection</li>
<li>human factors</li>
<li>management oversight</li>
<li>maintenance</li>
<li> nuclear criticality safety program</li>
<li>occupational health and safety</li>
<li>procurement</li>
<li>quality management</li>
<li>radiation protection</li>
<li>return to service</li>
<li>safeguards</li>
<li>safety management</li>
<li>security</li>
<li>stakeholder communication</li>
<li> training and personnel qualification</li>
<li>waste management</li>
<li> work control</li>  </ol>  <p>The licensee should refer to CNSC requirements and appropriate legislation and standards when addressing these considerations, both for guidance in their development, and to determine how program outcomes will be measured.</p>  <p>The licensee should assess whether the programs and processes are adequate for the control of the project. The results of the assessments should be submitted to CNSC staff for review. CNSC staff will undertake compliance activities to verify the adequacy of the programs to be applied during execution and confirm proper implementation.</p>  <h3>C.3 Construction activities</h3>  <p>The project execution plan should describe the proposed construction program to be implemented during the execution of life extension activities. The plan should demonstrate that the construction program is well planned, controlled and properly documented, and that it adequately covers:</p>  <ol>
<li>procurement, construction, fabrication, certification, identification, transportation, and storage</li>
<li>design and engineering, or testing of SSCs, either at the construction site or at fabrication facilities remote from the site</li>  </ol>  <p>Construction activities should be documented in a controlled construction documentation program that includes construction work plans showing:</p>  <ol>
<li>activities to be performed (described in manageable units)</li>
<li>planned sequential order and duration of these activities</li>
<li>resource allocation for each activity</li>
<li>identification, preparation and control of procedures and work instructions</li>
<li>requirement for special equipment or materials</li>
<li>inspection or regulatory body hold points</li>
<li>treatment of environmental considerations</li>  </ol>  <p>The construction program should also show that the following considerations are addressed:</p>  <ol>
<li>description of all necessary functional tests to be carried out, in order to demonstrate that the SSCs have been properly manufactured and installed</li>
<li>confirmation that staff are capable and qualified for design, engineering, maintenance, operations and other relevant technical support has been involved in documenting the construction test specifications, including the demonstration that safety objectives have been achieved</li>
<li>the arrangements in place to ensure that construction and tests are performed in a systematic sequence, from pre-operational tests on each SSCs to integrated plant performance tests</li>
<li>the arrangements made to facilitate regulatory oversight of specified construction stages, tests and/or hold points for specified licensing actions in the construction program</li>  </ol>  <h3>C.4 Return-to-service program</h3>  <p>The licensee should describe the return-to-service activities for the facility. Return-to-service involves returning the nuclear facility, the nuclear systems, and the non-nuclear systems to service in support of commercial operation. The extent of commissioning activities is described in the return-to-service program. The return-to-service program should provide a case for sufficiency of the scope of commissioning testing both at the individual system level, and for integrated testing of one or multiple systems at the plant.</p>  <p>The licensee should demonstrate that all planned activities were completed, that the refurbished plant is compliant with the conditions of the licence and licensing basis, and that the plant can safely return to commercial operation. The licensee should also ensure that operational, engineering, and maintenance documents are available and have been validated to support facility operation.</p>  <p>The licensee should describe the return-to-service program that will be implementeThe ultimate objective of the program is to demonstrate that after return-to-service the plant performs in accordance with the design intent and the regulatory requirements. The return-to-service program should be comprehensive, verifiable and detailed in order to provide the necessary assurance that the plant has been duly commissioned before it can be declared in service. The commissioning program should be structured in a systematic sequence so that the plant is exposed to less onerous conditions before more onerous ones with clearly defined commissioning control points to allow assessment and acceptance of the test results before proceeding further.</p>  <p>The return-to-service program should address the following considerations:</p>  <ol>
<li>description of the technical process to be followed to manage commissioning</li>
<li>confirmation that tests are to be performed in a systematic sequence from pre-operational tests on each system, structure, and component, to integrated plant performance tests</li>
<li>description of the verification activities and integrated system validation of the as built design that are to be carried out, including a description of the human factors verification and validation plan </li>
<li>confirmation that the program provides for regulatory oversight of specified tests and/or hold points for specified regulatory approvals in the commissioning program</li>
<li>process to ensure operating experience from commissioning and return-to-service is integrated into operations/maintenance procedures development to allow an efficient transfer of knowledge</li>
<li>proposed arrangements, including timelines and milestones, for the validation of operating procedures (covering normal, abnormal, upset and emergency conditions) that will (to the extent practicable) be carried out as part of the commissioning program and with the participation of the plant operating personnel</li>
<li>description of the tests (including acceptance criteria) to be carried out in the different commissioning phases in order to demonstrate that the installed plant meets the design and safety requirements</li>  </ol>  <p>The extent of commissioning and phases (regulatory hold points) are described in the following sub-sections. </p>  <h4>C.4.1 Extent of commissioning</h4>  <p>The extent of commissioning activities described in the return-to-service program is commensurate with the scope and duration of life extension activities. Commissioning for specific systems should be adapted to the state of the systems during the life extension outage(s) and the extent of changes to the systems during the execution phase. To define the extent of commissioning, the following categories of systems are recommended:</p>  <ol>
<li><strong>SSCs in normal operation:</strong> SSCs that will remain in normal operation with continued system health and routine maintenance program activities. Commissioning activities could be limited to those checks and tests required to verify that these SSCs perform as expected with increased operational loads as other SSCs are brought back into service</li>
<li><strong>SSCs in shutdown:</strong> SSCs that are shut down and placed in a laid-up state including SSCs that may have been disconnected or dismantled to provide access to perform work during the outage. Commissioning activities should be defined and be commensurate with SSC-specific situations, to ensure operability of the SSCs and ensure design and safety analysis assumptions are still met</li>
<li><strong>new or modified SSCs:</strong> newly installed systems or existing systems that have undergone significant repairs, replacements or modifications. Commissioning should be performed to confirm that the SSCs and the integrated plant perform in accordance with the design specifications</li>  </ol>  <p>The level of commissioning at the facility should demonstrate that design and safety analysis assumptions are met. Integrated testing of facility systems should be conducted based on the extent of modifications to the facility and their potential to alter design or safety report assumptions. </p>  <h4>C.4.2 Hold points</h4>  <p>Hold points are imposed to ensure proper assessment of available commissioning results against pre-defined acceptance criteriDepending on the scope of life extension activities, the return-to-service program should provide a case demonstrating the safety of the proposed sequence of commissioning tests, and should be divided into four phases as described below:</p>  <ul>
<li><strong>Phase A</strong> focuses on ensuring that those systems required to ensure safety with fuel loaded into the reactor have been adequately commissioneThis phase must be successfully completed prior to loading fuel in the reactor</li>
<li><strong>Phase B</strong> focuses on ensuring the fuel is loaded into the reactor safely, confirming that the reactor is in a suitable condition to be started, and that all prerequisites for permitting the reactor to go critical have been met. This phase must be successfully completed prior to removal of the guaranteed shutdown state</li>
<li><strong>Phase C</strong> focuses on confirming reactor behaviour at the stage of initial criticality and subsequent low power tests, and includes activities that cannot be done during the guaranteed shutdown state</li>
<li><strong>Phase D </strong>focuses on demonstrating reactor and systems behaviour at higher power levels, including activities that could not be carried out at the power levels in Phase C</li>  </ul>  <p>The licensee should describe the return-to-service activities for the facility. Return-to-service involves returning the nuclear facility, the nuclear systems, and the non-nuclear systems back to operation. </p>  <p>A subset of the hold points will require formal regulatory approval in order to be releaseTypically, regulatory hold points will be aligned with commissioning phases, and key commissioning tests or power levels. </p>  <p>Removal of a regulatory hold point is contingent on licensee submission of a completion assurance document, which presents evidence that all project commitments scheduled for completion before removal of the respective hold point have been met, that all relevant design, construction, and commissioning completion assurance reports have been completed, and a written confirmation that the plant condition are such that the facility may proceed safely to the next phase of commissioning.</p>  <p>To facilitate the release of regulatory hold points, it is recommended that the licensee develop detailed matrices of the pre-requisites to be formally demonstrated for each hold point for agreement with all stakeholders.</p>  <p>The selection of the hold points will generally be agreed upon between the licensee and the CNSC and incorporated in the licence. </p>  <h3>C.5 Return to normal operation</h3>  <p>Once all CNSC approvals have been granted and hold points have been removed, the licensee may proceed to normal operation. After return-to-service, the licensee is expected to monitor the adequacy of performance of the nuclear facility and new or updated programs.</p>  <h3>C.6 Project monitoring</h3>  <p>The licensee is expected to monitor the project for progress, safety, and quality at all phases of execution. All risks that are identified should be appropriately manage</p>  <p>Monitoring includes (but is not limited to):</p>  <ol>
<li>engineering changes</li>
<li>scope changes</li>
<li>contractor oversight</li>
<li>effectiveness of corrective actions</li>
<li>procedural non-compliances</li>
<li>nuclear facility configuration</li>
<li>schedule adherence</li>
<li>worker safety events involving injuries, near misses, unsafe practices, unplanned dose uptakes</li>
<li>environmental performance</li>
<li>determination of the need to:
<ol className="lower-alpha">
<li>create new programs and procedures</li>
<li>revise existing programs and procedures</li>
<li>change resources</li>
<li>revise existing training programs or material</li>
<li>develop and implement new training programs or material</li>
</ol>
</li>  </ol>  <p>At the conclusion of the project, the licensee should ensure that all outstanding commitments have been completed, including any improvements that have been committed for post-restart completion. These items will be tracked through the normal licensing processes.</p>
<a name="#RDsection[11]#"></a>
<h2><a name="P771_111111" id="P771_111111"></a>Abbreviations</h2>  <table border="1">
<tr>
<td><p>ALARA</p></td>
<td><p>as low as reasonably achievable</p></td>
</tr>
<tr>
<td><p>COP</p></td>
<td><p>continued operation plan</p></td>
</tr>
<tr>
<td><p>EA</p></td>
<td><p>environmental assessment</p></td>
</tr>
<tr>
<td><p>EOP</p></td>
<td><p>end of operation plan</p></td>
</tr>
<tr>
<td><p>IIP</p></td>
<td><p>integrated implementation plan</p></td>
</tr>
<tr>
<td><p>ISR</p></td>
<td><p>integrated safety review</p></td>
</tr>
<tr>
<td><p>LTO</p></td>
<td><p>long-term operation</p></td>
</tr>
<tr>
<td><p>NPP</p></td>
<td><p>nuclear power plant</p></td>
</tr>
<tr>
<td><p>NSCA</p></td>
<td><p><em>Nuclear Safety and Control Act</em></p></td>
</tr>
<tr>
<td><p>PDP</p></td>
<td><p>preliminary decommissioning plan</p></td>
</tr>
<tr>
<td><p>PEP</p></td>
<td><p>project execution plan</p></td>
</tr>
<tr>
<td><p>PROL</p></td>
<td><p>power reactor operating licence</p></td>
</tr>
<tr>
<td><p>SCA</p></td>
<td><p>safety and control area</p></td>
</tr>
<tr>
<td><p>SOP</p></td>
<td><p>sustainable operations plan</p></td>
</tr>
<tr>
<td><p>SSCs</p></td>
<td><p>structures, systems and components</p></td>
</tr>
<tr>
<td><p>SSS</p></td>
<td><p>safe state of storage</p></td>
</tr>  </table>  <h2><a name="P817_87968" id="P817_87968"></a>Glossary</h2>  <dl className="margins-removed">
<dt>ALARA </dt>
<dd>As low as reasonably achievable with social and economic factors taken into account. A concept in which optimized protective measures result in doses that are considered to be as low as reasonably achievable.</dd>
<dt>cliff edge effect</dt>
<dd>A large increase in the severity of consequences caused by a small change of conditions. Note: cliff edges can be caused by changes in the characteristics of the environment, the event, or changes in the plant response.</dd>
<dt>codes, standards, and practices</dt>
<dd>The information contained in guidance documents and in modern industrial codes, guides, and standards. Practices need to take into account known related design improvements for structures, systems and components as well as operating experience and findings from technical developments (e.g., new knowledge on the cumulative effects of aging, results of reactor physics research and development, human factors engineering, human reliability and software engineering). See also &#8220;modern codes, standards, and practices&#8221;.</dd>
<dt>commissioning</dt>
<dd>All those activities intended to demonstrate that installed systems, structures, and components and equipment perform in accordance their specifications and design intent before they are put into service.</dd>
<dt>corrective actions</dt>
<dd>Measures that are taken and documented to resolve the cause of deficiencies or non-conformances with respect to the current requirements applicable to the NPP.</dd>
<dt>continued operation</dt>
<dd>Operation for a limited period, of less than 10 calendar years beyond the nominal design life of the NPP, which has been justified and supported by a continued operation plan.</dd>
<dt>design basis</dt>
<dd>The range of conditions and events taken explicitly into account in the design of structures, systems, and components of a facility, according to established criteria, such that the facility can withstand them without exceeding authorized limits by the planned operation of safety systems. The design basis includes the design description, design manuals, design drawings and the safety analysis report.</dd>
<dt>detailed decommissioning plan</dt>
<dd>A plan setting out the detailed work program, safety and environmental protection procedures, and management systems that will be followed in the decommissioning of a licensed activity/facility. Detailed decommissioning plans should evolve from the preliminary decommissioning plan.</dd>
<dt>end of operation</dt>
<dd>Final, permanent shutdown of reactor operation of an NPP (or unit of a multi-unit NPP facility). The NPP facility remains subject to a power reactor operating licence that authorizes activities during the transition period from reactor unit shutdown and safe state of storage until it enters the decommissioning phase.</dd>
<dt>finding</dt>
<dd>A conclusion that results from the evaluation of the fact(s) collected during the inspection against inspection criteriA finding can indicate either conformity or non-conformity with inspection criteria.</dd>
<dt>generic safety issues</dt>
<dd>Unresolved safety-related issues, common to all NPP designs, requiring that corrective actions be taken by the licensees within a reasonable time frame.</dd>
<dt>global assessment methodology</dt>
<dd>A means of formulating an overall risk judgment on the acceptability of continued safe operation of the nuclear facility for the proposed period of life extension.</dd>
<dt>integrated implementation plan (IIP)</dt>
<dd>A plan that considers the technical scope and schedule of the project to support operation beyond nominal design life by taking into account the results of an environmental assessment, where required, and an integrated safety review.</dd>
<dt>integrated safety review (ISR)</dt>
<dd>A comprehensive assessment of nuclear facility design and operation that deals with the cumulative effects of aging, modifications, operating experience, technical developments and siting aspects, and aims at ensuring a high level of safety throughout the operating life of the facility (or activity).</dd>
<dt>integrated safety review (ISR) basis document</dt>
<dd>The information that sets out the scope and methodology for the conduct of the ISR.</dd>
<dt>licensing basis</dt>
<dd>For a regulated facility or activity, a set of requirements and documents comprising:</dd>  </dl>  <ol>
<li>regulatory requirements set out in the applicable laws and regulations</li>
<li>conditions and safety and control measures described in the facility&#8217;s or activity&#8217;s licence and the documents directly referenced in that licence</li>
<li>safety and control measures described in the licence application and the documents needed to support that licence application</li>  </ol>  <dl className="margins-removed">
<dt>life extension</dt>
<dd>Operation for a longer period beyond the nominal design life of the NPP, which has been justified and supported by an Integrated Safety Review (ISR), an Integrated Implementation Plan (IIP) and, when applicable, a refurbishment project execution plan.</dd>
<dt>long-term operation (LTO)</dt>
<dd>The operation beyond the nominal design life of the NPP, which has been justified by the results of a safety review taking into consideration the conditions of structures, systems, and components (SSC), life limiting processes, and a review of the plant design and operational measures in place against modern codes and practices. LTO includes continued operation and life extension.</dd>
<dt>management system</dt>
<dd>A set of interrelated or interacting elements (system) for establishing policies and objectives and enabling the objectives to be achieved in an efficient and effective way. The management system integrates all elements of an organization into one coherent system to enable all of the organization&#8217;s objectives to be achieveThese elements include the structure, resources, and processes. Personnel, equipment, and organizational culture as well as the documented policies and processes are parts of the management system. The organization&#8217;s processes have to address the totality of the requirements on the organization as established in, for example, IAEA safety standards and other international codes and standards.</dd>
<dt>modern codes, standards and practices</dt>
<dd>The set of objectives, requirements, and experience for the siting, design, construction, commissioning, operation, and decommissioning of a nuclear facility if it were to be built at the time of the initiation of the project to support long-term operation.</dd>
<dt>nominal design life</dt>
<dd>The period of operation that was originally anticipated at the design phase for the NPP. It is used as a reference or target for planning activities including the design of SSCs that can affect the safe operation of the NPP. For the purposes of this regulatory document and for the current operating CANDU power reactors, unless otherwise stated, the &#8220;nominal design life&#8221; of an NPP is 30 years, based on 0.8 capacity factor of nominal full power.</dd>
<dt>nuclear facility</dt>
<dd>For the purposes of this&nbsp;document, a&nbsp;nuclear power plant; it includes, where applicable, the land on which the reactor is located, a building that forms part of or equipment used in conjunction with the reactor, and any system for the management, storage, or disposal of a nuclear substance.</dd>
<dt>nuclear power plant </dt>
<dd>Any fission reactor installation constructed to generate electricity on a commercial scale. A nuclear power plant is a Class IA nuclear facility, as defined in the <em>Class I Nuclear Facilities Regulations</em>.</dd>
<dt>preliminary decommissioning plan</dt>
<dd>An overview of the proposed decommissioning approach that is sufficiently detailed to assure that the proposed approach is, in the light of existing knowledge, technically and financially feasible and appropriate in the interests of health, safety, security and protection of the environment. The preliminary decommissioning plan defines areas to be decommissioned and the general structure and sequence of the principal decommissioning work packages envisioneAs such, the preliminary plan forms the strategic basis for establishing financial guarantees, and provides the structural outline of the subsequent detailed decommissioning plan(s).</dd>
<dt>refurbishment</dt>
<dd>An activity or a set of activities aimed at restoring the condition of one or several structures, systems, or components to a state that is comparable to the condition of a new structure, system, or component.</dd>
<dt>safety case</dt>
<dd>An integrated collection of arguments and evidence to demonstrate&nbsp;the safety of the facility and that all applicable regulatory requirements are met. This will normally include a safety assessment, but could also typically include information (including supporting evidence and reasoning) on the robustness and reliability of the safety assessment and the assumptions made therein.</dd>
<dt>safety goal </dt>
<dd>Objective to protect reactor facility staff, the public and the environment from harm by establishing and maintaining effective defences against the release of the radiological hazards.</dd>
<dt>safety improvements</dt>
<dd>Measures taken that result in the more effective implementation of the safety goals of the NPP.</dd>
<dt>safety significance</dt>
<dd>The significance of a discovery or issue with respect to the impact on meeting the fundamental nuclear safety objectives as defined by the IAEA [<a href="#R11">11</a>]. In general, a discovery or event has safety significance if it denotes a deviation away from the safety case accepted in the licence, in a direction detrimental to safety, such as:</dd>  </dl>  <ol>
<li>reducing margins to, or exceeding the accepted limits</li>
<li>increasing risk</li>
<li>impairments (various degrees) of the special safety systems or of the safety functions for accident mitigation</li>
<li>human factor issues</li>
<li>events causing radioactive releases and spills of hazardous substances, injuries to workers, public, etc.</li>  </ol>  <dl className="margins-removed">
<dt>safe state of storage (SSS)</dt>
<dd>Strategy in which a facility or site is placed into a safe condition and in which decontamination and dismantling are delayed for up to 50&#8211;60 years (known as the safe enclosure period). [<a href="#R12">12</a>] During this time, a surveillance and maintenance programme is implemented for the facility.</dd>
<dt>structures, systems and components (SSC)</dt>
<dd>A general term encompassing all of the elements (items) of a facility or activity that contribute to protection and safety, except human factors. Structures are the passive elements: buildings, vessels, shielding, etA system comprises several components, assembled in such a way as to perform a specific (active) function. A component is a discrete element of a system. Examples are wires, transistors, integrated circuits, motors, relays, solenoids, pipes, fittings, pumps, tanks, and valves.</dd>
<dt>sustainable operations plan</dt>
<dd>A plan that describes the licensee&#8217;s activities to safely transition the nuclear power plant from normal operation to a safe state of storage.</dd>
<dt>time-limited assumptions</dt>
<dd>Assumptions used in certain plant- or SSC specific safety or design analyses that are based on an explicitly specified length of plant or SSC life; for example, metal fatigue calculation, pressurized thermal shock analysis, radiation-induced deformation and embrittlement, thermal aging, loss of material, and equipment qualification of electrical equipment, instrumentation and control equipment, and cables are included in the analyses.</dd>  </dl>
<a name="#RDsection[12]#"></a>
<h2><a name="P894_98846" id="P894_98846"></a>References</h2>  <ol>
<li><em><a name="R1" id="R1"></a>Canadian Environmental Assessment Act</em>, S.C. 1992, c.&nbsp;37.</li>
<li><em><a name="R2" id="R2"></a>Canadian Environmental Assessment Act</em>, <em>Comprehensive Study List Regulations</em>, SOR/94-638.</li>
<li><em><a name="R3" id="R3"></a>Canadian Environmental Assessment Act</em>, <em>Exclusion List Regulations</em>, SOR/2007-108.</li>
<li><em><a name="R4" id="R4"></a>Canadian Environmental Assessment Act</em>, <em>Inclusion List Regulations</em>, SOR/94-637.</li>
<li><em><a name="R5" id="R5"></a>Canadian Environmental Assessment Act</em>, <em>Law List Regulations</em>, SOR/94-636.</li>
<li><em><a name="R6" id="R6"></a>Canadian Environmental Assessment Act</em>, <em>Procedures for an Assessment by a Review Panel</em>, guidelines issues pursuant to the Act, November&nbsp;1997.</li>
<li><a name="R7" id="R7"></a>Government of Canada, <em>Canada Labour Code, Part&nbsp;II, Occupational Health and Safety</em>, R.S., 1985, c.&nbsp;L-2,&nbsp;2009.</li>
<li><a name="R8" id="R8"></a>International Atomic Energy Agency (IAEA) Safety Reports Series No. 57, <em>Safe Long Term Operation of Nuclear Power Plants</em>, Vienna,&nbsp;2008.</li>
<li><a name="R9" id="R9"></a>IAEA, Safety Standards Series No.&nbsp;NS-G-2.10, <em>Periodic Safety Review of Nuclear Power Plants - Safety Guide</em>, Vienna, 2003.</li>
<li><a name="R10" id="R10"></a>Canadian Environmental Assessment Agency, Operational Policy Statement, <em>Preparing Project Descriptions under the Canadian Environmental Assessment Act</em>, Ottawa,&nbsp;2000.</li>
<li><a name="R11" id="R11"></a>Canadian Nuclear Safety Commission, G-219: <em>Decommissioning Planning for Licensed Activities</em>, 2000. </li>
<li> <a name="R12" id="R12"></a>Canadian Standards Association, CSA N294-09: <em>Decommissioning of Facilities Containing Nuclear Substances, </em>Toronto, 2009.</li>  </ol>  <h2><a name="P908_100164" id="P908_100164"></a>Additional Information</h2>  <p>The following documents contain additional information that may be of interest to persons involved in long-term or end of operation activities of a nuclear power plant:</p>  <ol>
<li>Canadian Nuclear Safety Commission (CNSC), INFO-0774 <em>Environmental Assessment Screening Process at CNSC</em>, Ottawa, Canada&nbsp;2009.</li>
<li>CNSC, RD-334, <em>Aging Management for Nuclear Power Plants</em>, Ottawa, 2011.</li>
<li>CNSC, P-242, <em>Considering Cost-benefit Information</em>, Ottawa,&nbsp;2000.</li>
<li>CNSC, S-99, <em>Reporting Requirements for Operating Nuclear Power Plants</em>, Ottawa,&nbsp;2003.</li>
<li>CNSC, G-206, <em>Financial Guarantees for the Decommissioning of Licensed Activities</em>, Ottawa,&nbsp;2000.</li>
<li>CNSC, G-320, <em>Assessing the Long Term Safety of Radioactive Waste Management</em>, Ottawa,&nbsp;2006.</li>
<li>IAEA, <em>Ageing Management for Nuclear Power Plants</em>, Safety Standards Series, Safety Guide NS-G-2.12, Vienna,&nbsp;2009.</li>
<li>IAEA, <em>Maintenance, Surveillance and In-service Inspection in Nuclear Power Plants</em>, Safety Standards Series, Safety Guide NS-G-2.6, Vienna,&nbsp;2002.</li>
<li>IAEA, INSAG 12, <em>Basic Safety Principles for Nuclear Power Plants</em> 75-INSAG-3 Rev. 1, Vienna, 1999.</li>
<li>IAEA, Safety Report Series No.26, <em>Safe Enclosure of Nuclear Facilities During Deferred Dismantling</em>, Vienna,&nbsp;2002.</li>  </ol>

                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }