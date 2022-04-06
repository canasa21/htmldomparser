import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "en",
                pageTitle: "REGDOC-2.11.1, Waste Management, Volume III: Safety Case for Long-Term Radioactive Waste Management, Version 2", 
                dateModified: "2019-04-23",
                langToggleUrl: "/fra/acts-and-regulations/consultation/comment/regdoc2-11-1-vol3-ver2"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<h2>Preface</h2>  <p>This regulatory document is part of the CNSC&rsquo;s waste management series of regulatory documents, which also covers decommissioning. The full list of regulatory document series is included at the end of this document and can also be found on the <a href="/eng/acts-and-regulations/regulatory-documents/index">CNSC&rsquo;s website</a>.</p>  <p>Regulatory document REGDOC-2.11.1, <em>Waste Management, Volume III: Safety Case for Long-Term Radioactive Waste Management</em>, Version 2 provides requirements and guidance to licensees and applicants for developing a safety case and supporting safety assessment for the long-term management of radioactive waste.</p>  <p>This document is the second version of this document and supersedes REGDOC-2.11.1, <em>Waste Management, Volume III: Assessing the Long-Term Safety of Radioactive Waste Management</em>, Version 1, published in May 2018.</p>  <p>For information on the implementation of regulatory documents and on the graded approach, see REGDOC-3.5.3, <em>Regulatory Fundamentals</em>.</p>
<div className="alert alert-info module-simplify ">  <p>The words "shall" and "must" are used to express requirements to be satisfied by the licensee or licence applicant. "Should" is used to express guidance or that which is advised. "May" is used to express an option or that which is advised or permissible within the limits of this regulatory document. "Can" is used to express possibility or capability.</p>  <p>Nothing contained in this document is to be construed as relieving any licensee from any other pertinent requirements. It is the licensee&rsquo;s responsibility to identify and comply with all applicable regulations and licence conditions.</p>  </div>  <br />
<div className="module-table-contents">  <h2>Table of Contents</h2>
<ul>
<li><a href="#sec1">1. Introduction</a>
<ul>
<li><a href="#sec1-1">1.1 Purpose</a></li>
<li><a href="#sec1-2">1.2 Scope</a></li>
<li><a href="#sec1-3">1.3 Relevant legislation</a></li>
</ul></li>
<li><a href="#sec2">2. The CNSC&rsquo;s Waste Management Framework</a></li>
<li><a href="#sec3">3. Defininition of Safety Case, Safety Assessment and Safety Analysis</a></li>
<li><a href="#sec4">4. Role and Development of the Safety Case</a>
<ul>
<li><a href="#sec4-1">4.1 Role of the safety case</a></li>
<li><a href="#sec4-2">4.2 Development of the safety case</a></li>
</ul></li>
<li><a href="#sec5">5. General Requirements for the Safety Case</a></li>
<li><a href="#sec6">6. Components of the Safety Case</a>
<ul>
<li><a href="#sec6-1">6.1 Safety case context</a></li>
<li><a href="#sec6-2">6.2 Safety strategy</a></li>
<li><a href="#sec6-3">6.3 Waste management system description</a></li>
<li><a href="#sec6-4">6.4 Safety assessment</a>
<ul>
<li><a href="#sec6-4-1">6.4.1 Components of the safety assessment</a></li>
<li><a href="#sec6-4-2">6.4.2 Site and engineering aspects</a></li>
<li><a href="#sec6-4-3">6.4.3 Operational safety analysis</a></li>
<li><a href="#sec6-4-4">6.4.4 Long-term safety analysis</a></li>
</ul></li>
<li><a href="#sec6-5">6.5 Management of uncertainties</a></li>
<li><a href="#sec6-6">6.6 Iteration and design optimization</a></li>
<li><a href="#sec6-7">6.7 Limits, controls and conditions</a></li>
<li><a href="#sec6-8">6.8 Complementary safety arguments</a></li>
<li><a href="#sec6-9">6.9 Monitoring and surveillance</a></li>
<li><a href="#sec6-10">6.10 Safety features during the period of institutional control</a></li>
<li><a href="#sec6-11">6.11 Integration of safety arguments</a></li>
</ul></li>
<li><a href="#sec7">7. Long-Term Safety Analysis</a>
<ul>
<li><a href="#sec7-1">7.1 Components of a long-term safety analysis</a>
<ul>
<li><a href="#sec7-1-1">7.1.1 Safety analysis context</a></li>
<li><a href="#sec7-1-2">7.1.2 Selection of methodology</a></li>
<li><a href="#sec7-1-3">7.1.3 Waste management system description</a></li>
<li><a href="#sec7-1-4">7.1.4 Safety analysis scenarios and time frames</a></li>
<li><a href="#sec7-1-5">7.1.5 Developing and using safety analysis models</a></li>
<li><a href="#sec7-1-6">7.1.6 Interpretation of results</a></li>
</ul></li>
</ul></li>
<li><a href="#appA">Appendix A: Components of a Safety Case for the Long-Term Management of Radioactive Waste</a></li>
<li><a href="#glossary">Glossary</a></li>
<li><a href="#ref">References</a></li>
<li><a href="#addInfo">Additional Information</a></li>
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
<h3 id="sec1-1">1.1 Purpose</h3>  <p>The purpose of this document is to provide requirements and guidance to licensees and applicants for developing a safety case and supporting safety assessment for the long-term management of radioactive waste by means of storage or disposal.</p>
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
<h3 id="sec1-2">1.2 Scope</h3>  <p>This regulatory document addresses the development of a safety case and supporting safety assessment for long-term radioactive waste management. The emphasis is on the assessment of long-term performance and impact after closure. Operational safety is addressed, but not discussed in detail. Requirements and guidance on safety analysis for the operational phase of a long-term radioactive waste management facility are provided in draft REGDOC-2.4.4, <em>Safety Analysis for Class IB Nuclear Facilities</em> [1].</p>  <p>For long-term radioactive waste management facilities, and for locations or sites that have been operating, decommissioned or closed before 2020, this document is to be considered as guidance.</p>  <p>This regulatory document is complemented by other <a href="/eng/acts-and-regulations/regulatory-documents/index">CNSC regulatory documents</a>, such as REGDOC-2.9.1, <em>Environmental Protection: Environmental Principles, Assessments and Protection Measures</em> [2].</p>  <p>The requirements and guidance in this regulatory document should also be adopted for long-term radioactive waste management at uranium mines and mills, as applicable. The licensee must justify to the CNSC the aspects that do not apply. Additional requirements and guidance for waste management at uranium mines and mills are provided in <a href="/eng/acts-and-regulations/regulatory-documents/published/html/regdoc2-11-1-v2/index">REGDOC-2.11.1, <em>Waste Management, Volume II: Management of Uranium Mine Waste Rock and Mill Tailings</em></a>. [3]</p>
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
<h3 id="sec1-3">1.3 Relevant legislation</h3>  <p>The following provisions of the NSCA and its associated regulations are relevant to this document:</p>
<ul>
<li>section 26 of the NSCA</li>
<li>paragraphs 4(d) and 12(1)(c) of the <a href="https://laws-lois.justice.gc.ca/eng/regulations/sor-2000-202/page-1.html"><em>General Nuclear Safety and Control Regulations</em></a></li>
<li>paragraphs 3(k), 4(e), 5(f), (i), (j), (k), 6(c), (h), (i), (j), 7(f), (k) and 8(a) of the <a href="https://laws-lois.justice.gc.ca/eng/regulations/sor-2000-204/page-1.html"><em>Class I Nuclear Facilities Regulations</em></a></li>
<li>subparagraph 3(a)(viii), 3(c)(iii), 3(d)(i), 7(d) and 8(b) of the <a href="https://laws-lois.justice.gc.ca/eng/regulations/sor-2000-206/page-1.html"><em>Uranium Mines and Mills Regulations</em></a></li>
<li>paragraph 4(t), 5(i) and 5(k) of the <a href="https://laws-lois.justice.gc.ca/eng/regulations/sor-2000-205/page-1.html"><em>Class II Nuclear Facilities Regulations</em></a></li>  	</ul>
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
<h2 id="sec2">2. The CNSC&rsquo;s Waste Management Framework</h2>  <p>In addition to this regulatory document, the CNSC&rsquo;s regulatory framework for waste management includes:</p>
<ul>
<li>REGDOC-2.11, <em>Framework Radioactive Waste Management and Decommissioning in Canada</em></li>
<li>REGDOC-2.11.1, <em>Waste Management, Volume I: Management of Radioactive Waste </em>(in development)</li>
<li>REGDOC-2.11.1, <em>Waste Management, Volume II: Management of Uranium Mine Waste Rock and Mill Tailings</em></li>
<li>G-219, <em>Decommissioning Planning for Licensed Activities</em> (under revision)</li>  	</ul>  <p>The following <a href="/eng/acts-and-regulations/regulatory-documents/csa-standards">CSA standards</a> complement the CNSC&rsquo;s regulatory framework:</p>  <ul>
<li>CSA N288.4, <em>Environmental monitoring programs at Class I nuclear facilities and uranium mines and mills</em></li>
<li>CSA N288.5, <em>Effluent monitoring programs at Class I nuclear facilities and uranium mines and mills</em></li>
<li>CSA N288.6, <em>Environmental risk assessments at Class I nuclear facilities and uranium mines and mills</em></li>
<li>CSA N288.7, <em>Groundwater protection programs at Class I nuclear facilities and uranium mines and mills</em></li>
<li>CSA N292.0, <em>General principles for the management of radioactive waste and irradiated fuel</em></li>
<li>CSA N292.1, <em>Wet storage of irradiated fuel and other radioactive materials</em></li>
<li>CSA N292.2, <em>Interim dry storage of irradiated fuel</em></li>
<li>CSA N292.3, <em>Management of low- and intermediate-level radioactive waste</em></li>
<li>CSA N292.5, <em>Guideline for the exemption or clearance from regulatory control of materials that contain, or potentially contain, nuclear substances</em></li>
<li>CSA N292.6, <em>Long-term management of radioactive waste and irradiated fuel</em></li>
<li>CSA N294, <em>Decommissioning of facilities containing nuclear substances</em></li>  	</ul>
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
<h2 id="sec3">3. Definition of Safety Case, Safety Assessment and Safety Analysis</h2>  <p>A safety case is defined as an integrated collection of arguments and evidence to demonstrate the safety of a facility and the meeting of all applicable regulatory requirements. A safety case normally includes a safety assessment supported by additional lines of evidence and the assumptions made therein.</p>  <p>A safety assessment is defined as an assessment of all aspects relevant to safety of the siting, design, construction, commissioning, operation or decommissioning of a nuclear facility.</p>   <p>A safety assessment forms the core of the safety case. It is an ongoing, systematic process that carries on throughout the design process and over the lifetime of the facility or the activity, to ensure that all the relevant safety requirements are met. The safety assessment includes, but is not limited to, the long-term and operational safety analyses.</p>  <p>A safety analysis is a systematic evaluation of the potential hazard associated with a proposed activity or facility. It also considers the effectiveness of preventive measures and strategies in reducing the effects of such hazards. The safety analysis uses data and models to predict the performance of an overall system and its impact, where the performance measure is the radiological impact or some other global measure of the impact on safety. The safety analysis should be used as a documented process for the study of safety. The safety analysis is the primary component of the safety assessment.</p>  <p>Appendix A provides an outline of the components of a safety case, safety assessment and safety analysis.</p>
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
<h2 id="sec4">4. Role and Development of the Safety Case</h2>
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
<h3 id="sec4-1">4.1 Role of the safety case</h3>  <p>The safety case is the main tool used to document and demonstrate that a facility or site will adequately protect people and the environment during its entire lifecycle. The safety case provides a structured framework for documenting and presenting all of the safety-related information for a long-term radioactive waste management facility in a consolidated manner.</p>  <p>In addition, the safety case can also be used to: verify a concept; select and characterize a site; perform design optimization; establish limits, controls and conditions; guide operation, decommissioning and closure; and prioritize research and development programs.</p>  <p>The safety case is also a tool to design the monitoring program and the data obtained from the monitoring program is used to confirm that the safety case is appropriate or to develop an updated safety case.</p>   <p>The safety case is also a means of communication and consultation with interested parties at specific decision points throughout the facility&rsquo;s lifecycle.</p>
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
<h3 id="sec4-2">4.2 Development of the safety case</h3>  <p>The safety case evolves throughout the lifetime of the facility or site using an iterative approach. During concept development and site selection, some assumptions may be necessary regarding site characteristics and facility design. These activities do not require licensing from the CNSC; however, due to their very long time spans, typically several decades, early engagement during the pre-licensing period with the CNSC is encouraged.</p>   <p>As concept development and site selection proceeds, more site-specific data will be necessary and details of the proposed design, construction, operation, decommissioning, closure and post-closure, as appropriate, will have to be developed. This will allow specific issues to be addressed in more detail in the safety case.</p>  <p>The safety case is updated progressively throughout the lifecycle of the facility or site by the systematic collection, analysis, and interpretation of the necessary scientific and technical data. Updates to the safety case take into account comments from technical and regulatory reviews, increased knowledge, and operational experience, as well as results from monitoring programs and research activities.</p>
<p>At the end of the facility&rsquo;s lifetime, the safety case will contain all of the information that future generations should require (e.g., institutional control plans, long-term monitoring plan).</p>
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
<h2 id="sec5">5. General Requirements for the Safety Case</h2>  <p>The licensee or applicant shall:</p>
<ul>
<li>submit a safety case in support of a licence application for a long-term waste radioactive management facility or site to the CNSC for acceptance</li>
<li>demonstrate that the safety case prevents unreasonable risk, to the environment and to the health and safety of persons and all safety requirements and objectives will be met</li>
<li>ensure that the safety case is sufficiently detailed and comprehensive to provide the necessary technical input for informing the decisions required</li>
<li>ensure that the documentation is clearly written and include arguments justifying the approaches taken in the safety case based on information that is traceable</li>
<li>assess the safety of the facility consistent with a graded approach; the degree of rigour and detail to be included in a safety case shall be commensurate with the risks associated with the waste, the development stage of the facility or activity and the corresponding licensing stage</li>
<li>describe all relevant safety aspects of the site, design, construction, operation, decommissioning, closure and post-closure (including institutional control), as applicable, of the facility or site in the safety case</li>
<li>periodically review and update the safety case through all licensing stages</li>
<li>assess defence in depth, comprising an evaluation of the levels of defence provided by the facility or for the activity</li>  	</ul>  <p>The licensee or applicant shall ensure that the safety case demonstrates that sound management practices have been applied to its development and the development of the facility.</p>  <p>The licensee should follow management system principles when developing the safety case, safety assessment and safety analysis. Further information on management system principles can be found in CSA standard N286-12, <em>Management system requirements for nuclear facilities</em> [4] and draft REGDOC-2.1.1, <em>Management System</em> [5].</p>
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
<h2 id="sec6">6. Components of the Safety Case</h2>  <p>The safety case shall include the following components, as illustrated in appendix A (as applicable):</p>
<ul>
<li>safety case context</li>
<li>safety strategy</li>
<li>waste management system description</li>
<li>safety assessment</li>
<li>management of uncertainties</li>
<li>iteration and design optimization</li>
<li>limits, controls and conditions</li>
<li>complementary safety arguments</li>
<li>monitoring and surveillance</li>
<li>safety features during the period of institutional control</li>
<li>integration of safety arguments</li>  	</ul>
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
<h3 id="sec6-1">6.1 Safety case context</h3>  <p>The licensee or applicant shall ensure that the safety case:</p>
<ul>
<li>defines the scope and purpose</li>
<li>states the safety principles to be applied, the safety requirements, objectives, and criteria to be met, and the safety standards to be used</li>  	</ul>  <p>The licensee or applicant should ensure that the safety case applies the graded approach in its development.</p>  <p>Boundaries and interfaces with neighbouring facilities and activities, both within and outside the site, should also be considered within the safety case. The scope of the safety case provides a clear description of the relevant stage in the facility&rsquo;s lifecycle; how the safety case has changed from previous revisions; and, how it will support future revisions. The scope, extent and level of detail is commensurate with the risk posed by the facility or site and the stage of the facility&rsquo;s development.</p>
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
<h3 id="sec6-2">6.2 Safety strategy</h3>  <p>Early in the development of the safety case, the licensee or applicant shall develop and adopt a safety strategy that describes how the safety principles will be applied and how the safety requirements, objectives, and criteria will be met. The safety strategy should include an overall integrated approach for how safety will be demonstrated throughout the lifecycle of a facility.</p>   <p>The strategy shall also include descriptions of key elements such as: containment and isolation of the waste; multiple safety functions, defence in depth and passive safety features; robustness; demonstrability and feasibility; the interdependencies of the various steps in waste management; the management of uncertainties; and other elements that contribute to and provide confidence in safety.</p>
<h4>Containment and isolation</h4>  <p>Containment and isolation shall be shown to be provided by presenting evidence that the barrier systems retain their safety functions, under the effects of design-basis events during the safety case time frame. The degradation of these safety functions under gradual natural processes, or after the occurrence of design-basis events, shall be taken into account. It has to be shown that despite this degradation, that containment and isolation and all other requirements including acceptance criteria (such as dose, risk, or contamination) will be met.</p>
<h4>Multiple safety functions and defence in depth</h4>   <p>The principle of defence in depth shall be applied in order to provide redundancy and additional margin of safety. The principle of defence in depth is usually applied in long-term radioactive waste management by the provision of a system of multiple engineered and natural barriers. Each barrier is provided with a defined set of safety functions that contribute to the long-term containment and isolation of the wastes. The safety case should define and justify the safety functions of the individual barrier, as well as the periods over which the functions are expected to perform. Each safety function should be independent of the others, to the extent possible, in order to ensure that they are complementary and that barriers are unlikely to fail through a single failure mode.</p>  <p>Through the above safety functions, the multiple barrier system provides resistance to radionuclides migration mainly by passive means. Active controls can also contribute to the confidence in passive barriers and safety functions but these shall not be solely relied on to ensure defence in depth.</p>
<h4>Robustness</h4>  <p>The overall waste management system as well as each individual barrier shall be shown to be robust. Barrier robustness is demonstrated by showing evidence that the barrier will fulfill its safety functions under the effects of the expected natural or anthropogenic disturbances during all phases of the facility. Overall system robustness can be demonstrated by showing that despite the failure of one or more barriers or safety functions, none of the safety requirements would be jeopardized.</p>  <p>For disposal facilities with longer time frames, there is an increased likelihood of natural or human-induced disturbances and processes that could affect the performance of individual barriers or overall waste containment system. Therefore, the longer the hazardous lifetime of the waste, the more robust the natural and engineered barriers must be.</p>
<h4>Time frames</h4>  <p>Time frames are a key component of the safety case and supporting safety assessment, and establish boundary conditions for the longevity and performance of barriers to isolate and contain the waste.</p>  <p>The time frame associated with the required performance of the overall waste management system and of its individual components as part of the safety strategy shall be justified, commensurate with the type of waste to be stored or emplaced and the time frame associated with hazards imposed by the waste.</p>   <p>The time frame shall consider the following, at a minimum:</p>
<ul>
<li>the time of the peak radiological impact predicted by the safety analysis</li>
<li>a time frame, used as the design basis and normal evolution, that takes into consideration the radiological decay of the radiological substances associated with the waste and the stability of the host medium or site</li>
<li>type and severity of events considered in the safety analysis</li>  	</ul>  <p>The licensee or applicant should also consider the following to provide additional evidence to support the determination of the time frame:</p>
<ul>
<li>use of appropriate natural analogs (e.g., similar geological, hydrogeological and geochemical characteristics to those of the site)</li>
<li>site-specific natural background levels of radiological and non-radiological contaminants</li>  	</ul>  <p>It may be necessary to define several different time frames within one safety case in order to deal with different scenarios and demonstrate containment. It may be necessary to define several different time frames within one safety case in order to deal with different scenarios and demonstrate containment. For example, additional time frames, in addition to the reference time frame used in the normal evolution scenario, may be used to illustrate the robustness of the facility for time periods beyond when the maximum impact is predicted to occur. Additional time frames may also be defined to illustrate the performance of particular barriers in response to disruptive events predicted to occur far into the future, such as glaciations. The design of the facility should be based on design-basis events (such as earthquakes, glaciation, climate change, etc.) that are consistent with the time frame of the normal evolution scenario. In some other situations, such as for the deep geological disposal of high-level or intermediate-level waste, impact predictions using very long time frames up to tens of millions of years can illustrate the containment capabilities of the barriers despite significant environmental or geological perturbations. The evolution of the waste management system would also need to be considered when deriving the time frame, and the normal evolution scenario to be used in the safety assessment would be defined accordingly.</p>
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
<h3 id="sec6-3">6.3 Waste management system description</h3>  <p>The licensee or applicant shall describe the long-term radioactive waste management system in the safety case. The long-term radioactive waste management system is defined as the system of properties of the site for a waste management facility (e.g., design of the waste management facility, characteristics of waste, etc.) and other elements that contribute in different ways and over different time scales to the fulfilment of safety functions for waste management. The description should include both quantitative and qualitative data and results. As applicable, the following shall be included:</p>
<ul>
<li>a specific understanding of features, events and processes associated with the site and the facility</li>
<li>the types of waste (e.g., quantities and properties of the waste and the radionuclide inventory)</li>
<li>a description of the biosphere including human and non-human biota</li>
<li>a description of the site including, as applicable, the deep and near-surface geological units at the site, including:
<ul>
<li>the description of current geological, hydrogeological, hydrological, geochemical, tectonic, and seismic and geomorphological conditions</li>
<li>the identification and description of expected natural evolution and human induced disruptive events</li>
</ul></li>
<li>the facility design, assumptions upon which the design is based, regulatory requirements and performance criteria</li>
<li>a description of the structure, systems and components of the facility, which includes the waste package, their safety functions, interfaces, associated uncertainties and performance as a function of time<sup id="fnb1-ref"><a className="fn-lnk" href="#fnb1"><span className="wb-inv">Footnote </span>1</a></sup></li>
<li>the radiological, thermal, hydraulic, mechanical, chemical, and biological processes that may affect the waste management system and its components should be described, as well as the possible interaction between those components</li>  	</ul>  <p>Following the graded approach to safety, the level of rigour and completeness in the description of the system and its components should be commensurate with the hazards imposed by the waste, and the development and licensing stage of the facility. For example, in the concept development stage, generic data might be sufficient, but it is expected that an increasing volume of site specific data would be available at later stages such as site selection, construction and operation. The safety case should be updated by taking into account the improved knowledge on the behaviour of the waste management system.   The licensee or applicant shall identify the requirements and safety functions of the overall waste management system. The licensee or applicant shall also identify individual structures, systems and components (SSCs), and assess the performance of the waste management system and the SSCs in terms of their ability to fulfil the safety functions. The safety case and its supporting safety assessment should explain and justify the safety functions of each barrier. For example, the container or package could have multiple safety functions to prevent the release of radioactive material. If seals and/or welds are used to contain the waste they must be maintained during long-term storage and disposal for as long as practicable. The container may be designed so that the seal can be monitored and repaired or replaced during the operational period. Other safety functions for the container may include: shielding, heat removal, and corrosion resistance.</p>
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
<h3 id="sec6-4">6.4 Safety assessment</h3>  <p>The licensee or applicant shall develop a safety assessment no later than at the design stage of a new facility.</p>   <p>For the construction and operational phase of the facility, the safety assessment shall include an operational safety analysis. For the post-closure phase of the facility, the safety assessment shall address all risks to people and the environment that may arise from the long-term normal evolution of the site and the occurrence of any potential disruptive events identified in the features, events, and processes (FEPs) analysis.</p>  <p>In addition, the licensee shall periodically review and update the safety assessment, typically every 5 to 10 years, with account taken of factors such as the availability of new information gathered from operating experience, monitoring results and research and development, significant design or operation modifications, and improvements in knowledge and advances in assessment techniques.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.4.1"></div>
<h4 id="sec6-4-1">6.4.1	Components of the safety assessment</h4>  <p>The safety assessment shall include the following components, as applicable:</p>
<ul>
<li>site and engineering aspects</li>
<li>operational safety analysis</li>
<li>long-term safety analysis</li>  	</ul>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.4.2"></div>
<h4 id="sec6-4-2">6.4.2	Site and engineering aspects</h4>  <p>The licensee or applicant shall use data obtained from the waste management system description as inputs to the safety analysis, and provide boundary conditions for the quantitative models.</p>   <p>The licensee or applicant should integrate and assess the results of the safety analysis to demonstrate the adequacy of the site and engineering aspects.</p>
<h5>Passive safety</h5>  <p>The licensee or applicant should take into account, in the design of the facility, passive safety measures to minimize the dependence of safety on active systems during operation and after closure, as applicable. For a long-term radioactive waste management facility, safety should be ensured by passive means.</p>   <h5>Multiple safety functions</h5>  <p>The licensee or applicant shall assess defence in depth in the context of the site and engineering aspects. This entails a demonstration that multiple safety functions are provided at the facility. The application of the concept of defence in depth to a long-term radioactive waste management facility shall ensure that safety is not unduly dependent on a single component or control procedure, or on the fulfilment of a single safety function.</p>  <h5>Scientific and engineering principles</h5>  <p>The licensee or applicant should make use of established construction techniques and materials, and should give due consideration to feedback from experience gained. If the licensee or applicant wants to use other techniques and materials, these should be justified to be as good or better.</p>  <h5>Site characterization</h5>  <p>The licensee or applicant shall ensure that the safety assessment describes the approach and criteria used in site characterization, and demonstrate that the site is in accordance with the safety strategy and any criteria that have been established.</p>
<p>For long-term radioactive waste management facilities, site characterization activities will take place over many years and should be carried out under a formal site characterization plan that includes quality assurance/quality control (QA/QC) protocols to verify the data. The evaluation and characterization plan should also include:</p>
<ul>
<li>subsurface characterization (geology, hydrogeology, geochemistry, seismicity, etc.)</li>
<li>surface characterization (ecology, hydrology, geomorphology, climate, etc.)</li>
<li>monitoring systems</li>
<li>current and foreseeable land use</li>
<li>data integration, analysis and incorporation into the site descriptive model</li>
<li>program and management quality assurance plans</li>  	</ul>  <p>The resulting information should be sufficient to develop a site-specific safety analysis.</p>  <p>Guidance on the site characterization of a deep geological repository is found in draft REGDOC 1.2.1, <em>Guidance on Deep Geological Repository Site Characterization</em> [6].</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.4.3"></div>
<h4 id="sec6-4-3">6.4.3	Operational safety analysis</h4>  <p>The licensee or applicant shall perform an operational safety analysis as an input to the safety case for a long-term radioactive waste management facility. Draft REGDOC-2.4.4, <em>Safety Analysis for Class IB Nuclear Facilities</em> [1] provides requirements and guidance for conducting an operational safety analysis.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.4.4"></div>
<h4 id="sec6-4-4">6.4.4	Long-term safety analysis</h4>  <p>The licensee or applicant shall perform a long-term safety analysis to cover all phases including the post-closure phase. The long-term safety analysis forms the core of the safety assessment for a long-term radioactive waste facility and is a systematic quantitative analysis of radiological and non-radiological impacts on people and the environment. Scenarios shall be developed and used to describe possible evolutions of the facility and its environment as well as the impact of those FEPs identified as having potential to impact safety.</p>   <p>These impacts shall be determined quantitatively by means of conceptual and mathematical models. This includes an analysis of the potential migration of radioactive and hazardous substances from the facility, their movement in the environment and resulting risks. The assumptions and data of the long-term safety analysis shall be supported by an analysis of the current and future conditions of the waste management system. Requirements and guidance on how to perform a long-term safety analysis can be found in section 7.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.5"></div>
<h3 id="sec6-5">6.5 Management of uncertainties</h3>  <p>The licensee or applicant shall characterize uncertainties in the safety case with respect to their source, nature and degree using quantitative methods as well as professional judgement.</p>  <p>The licensee or applicant shall ensure that the safety case demonstrates how uncertainties are managed; for example:</p>
<ul>
<li>by modifying the safety strategy, in order to reduce the uncertainties</li>
<li>by showing that the uncertainties do not have implications on safety</li>
<li>by using conservative assumptions to bound the uncertainties and showing that there is a sufficient margin for safety requirements to still be met</li>  	</ul>  <p>The licensee or applicant should reduce uncertainties throughout the different stages of the development of the safety case. However, uncertainties can never be fully eliminated. Therefore, the licensee or applicant should identify the remaining uncertainties within the safety case and how, despite these uncertainties, the safety case is still supported.</p>  <p>Uncertainties that remain in the safety case and have implications on safety should be addressed through uncertainty and sensitivity analyses. For example, the development of monitoring and research and development programs could be used to further reduce the uncertainties.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.6"></div>
<h3 id="sec6-6">6.6	Iteration and design optimization</h3>  <p>The licensee or applicant should ensure that the facility design and its components are optimized using a well-defined and iterative process. As the project proceeds and additional information is gained, initial results should be refined and should replace the generic or default data, reducing the reliance on assumptions.</p>  <p>The licensee or applicant should demonstrate within the safety case how the selected design and its components have been optimized. The design process should include a comparison between the design options considered, an assessment of their advantages and disadvantages, and a justification for the preferred option.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.7"></div>
<h3 id="sec6-7">6.7	Limits, controls and conditions</h3>  <p>The licensee or applicant shall establish limits, controls and conditions using the safety case. These shall be applied to all activities that have an influence on the safety of the facility and to the waste that will be managed in the facility.</p>   <p>Limits, controls and conditions derived from the safety analysis for the waste shall include the waste acceptance criteria for both individual packages and for the entire facility, and the acceptable waste inventory and/or the allowable concentration levels of radionuclides in the waste.</p>   <p>The licensee or applicant shall use the established limits, controls and conditions as an input to the development of operational programs and procedures. For example, the safety case and established limits, controls and conditions should be used to inform the development of the monitoring and surveillance program for the site and the surrounding area that is appropriate for the specific facility.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.8"></div>
<h3 id="sec6-8">6.8	Complementary safety arguments</h3>  <p>The licensee or applicant should use complementary safety arguments to provide additional confidence to the conclusions of the safety case. Assessments that use complementary safety arguments should present justification for their use along with the acceptance criteria derived for them.</p>   <p>The licensee or applicant should consider commonly used complementary safety arguments such as:</p>
<ul>
<li>the study of natural analogs and paleohydrogeology</li>
<li>the use of complementary indicators to dose, risk or other criteria for the protection of people and the environment</li>
<li>the use of different safety analysis strategies, for example, deterministic versus probabilistic approach, realistic versus conservative assumptions and bounding assessments</li>
<li>demonstration of the robustness of the overall waste management system and its individual components</li>
<li>hazardous and radioactive material fluxes from the facility</li>
<li>changes in the toxicity of the waste</li>  	</ul>  <p>Natural analogs can be used to demonstrate that components of a waste management system remain effective, over extended temporal and spatial scales considered in long-term safety analysis models, which cannot be replicated in laboratory studies. Anthropogenic analogs, if relevant, may also be used in addition to natural analogs. Natural analogs can provide complementary assessments of long-term safety, and included in the safety case to provide confidence in the conclusions drawn from the safety analysis.</p>  <p>Complementary indicators as identified from the safety analysis can also be used to derive the monitoring program, which would be a requirement of the licence. In many instances however, those indicators cannot be directly or practically monitored, but must be inferred by a set of sub-indicators which are easily measured or quantified. For example, container corrosion rates might not be measured during the licensing time frame. Corrosion rates depend, however on temperature, and the geochemical composition of the groundwater, and the former parameters can be included in a monitoring program. In such cases, trigger criteria should be determined for the parameters, and courses of action and decision should be developed in case of deviations from the criteria.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.9"></div>
<h3 id="sec6-9">6.9	Monitoring and surveillance</h3>  <p>Draft REGDOC 2.11.1, <em>Waste Management, Volume I: Management of Radioactive Waste</em> [7], provides requirements for the monitoring and surveillance of waste management facilities.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.10"></div>
<h3 id="sec6-10">6.10	Safety features during the period of institutional control</h3>  <p>Draft REGDOC 2.11.1, <em>Waste Management, Volume I: Management of Radioactive Waste</em> [7], provides guidance for institutional control.</p>   <p>The licensee or applicant shall identify the role that institutional controls play in waste management system safety, and how that role is taken into account in the safety case and its supporting safety assessment. However, the presence of institutional control should not be used to justify a reduction in the level of design performance of the containment and isolation system.</p>   <p>As a result of the uncertainties associated with future human activities and the evolution and stability of societies, licensees or applicants should limit the reliance on institutional controls as a safety feature to a few hundred years.</p>   <p>Any intention of relying on institutional controls to ensure that long-term safety shall be documented and justified in the safety case for these types of facilities. Institutional controls should remain in place to maintain and verify long-term safety for as long as is practicable.</p>  <p>With the end of institutional control, there is a risk of future inadvertent human intrusion into the facility, particularly with near-surface facilities. In such cases, results from assessments of inadvertent human intrusion may limit the permissible inventory of long lived radionuclides that can be safely disposed of in the facility. Thus, this assessment determines, in particular, the limit for long lived radionuclides in the waste acceptance criteria for near surface disposal facilities.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.11"></div>
<h3 id="sec6-11">6.11	Integration of safety arguments</h3>  <p>The licensee or applicant should ensure that the safety case provides a synthesis of available evidence, arguments and analyses that explain how relevant data and information have been considered, how models have been tested, and how a rational and systematic assessment procedure has been followed. This synthesis should be provided in a well-structured, transparent, and traceable manner.</p>  <p>The licensee or applicant should acknowledge their limitations on the understanding of the waste management system, its evolution, and its potential impact on people and the environment. The licensee or applicant should justify, despite these limitations, the rationale for the continuation of the project.</p>  <p>The licensee or applicant should:</p>
<ul>
<li>provide evidence on the quality and reliability of the science and design work that form the basis of the safety case</li>
<li>provide evidence of the quality and reliability of the safety assessment with respect to the derivation of scenarios, the adequacy of methods, models, computer codes and databases, and quality management of the calculations</li>
<li>compare specific safety indicators (for example, dose or risk) with their respective safety criteria; it should be noted that meeting specific criteria such as for dose or risk alone is not sufficient to meet all requirements</li>
<li>provide complementary safety indicators, such as radionuclide concentrations and fluxes through individual barriers</li>
<li>provide additional safety arguments, for example from the study of paleohydrogeological information on the site, and the study of natural analogs to the overall waste management system, and /or its individual components</li>
<li>fully document any third-party peer review of the safety case, showing how the outcomes of the peer review have been taken into consideration</li>
<li>address how hazardous substances contained in the radioactive waste could affect the environment</li>
<li>provide any findings that are in contradiction to the arguments made in the safety case</li>  	</ul>
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
<h2 id="sec7">7. Long-Term Safety Analysis</h2>  <p>The long-term safety analysis is central to the safety assessment. It involves an analysis to evaluate the overall performance of the facility and its impacts on people and the environment. A long-term safety analysis involves an examination of scenarios of the expected normal evolution and disruptive events, and the influence of these events on the facility or site. A model should be applied to each given scenario to predict:</p>
<ul>
<li>evolution of the waste form and associated contaminant activity/concentrations over time</li>
<li>contaminant release rates</li>
<li>evolution of the engineered barriers</li>
<li>evolution of the natural barriers</li>
<li>contaminant transport through any engineered barriers, the geosphere and the biosphere</li>
<li>receptor exposure</li>
<li>potential effects resulting from the exposure</li>  	</ul>  <p>The licensee or applicant shall ensure that the long-term safety analysis demonstrates their understanding of the waste management system through a well-structured, transparent and traceable methodology.</p>   <p>The long-term safety analysis documentation should provide a clear and complete record of the decisions made and the assumptions adopted in developing the model of the waste management system. The parameters and variables used to run the model and to arrive at a given set of results should be reported and justified.</p>  <p>Due to the uncertainty of predictions made about future events, the reliability of quantitative predictions diminishes with increasing time scale. The demonstration of safety will rely less on quantitative predictions and more on qualitative arguments as the time scale increases. The licensee or applicant should not consider long-term quantitative predictions as guaranteed impacts, but rather as safety indicators. In order to build confidence, the long-term safety analysis should be performed using an approach that combines multiple lines of reasoning and arguments within the context of the safety case.</p>
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
<h3 id="sec7-1">7.1	Components of a long-term safety analysis</h3>  <p>The licensee or applicant should use a structured approach to model the long-term performance of a waste management system. The overall methodology for performing a safety analysis should include the following components:</p>  <ul>
<li>safety analysis context</li>
<li>selection of methodology</li>
<li>waste management system description</li>
<li>safety analysis scenarios and time frames</li>
<li>development and use of safety analysis models</li>
<li>interpretation of results</li>  	</ul>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="7.1.1"></div>
<h4 id="sec7-1-1">7.1.1	Safety analysis comtext</h4>  <p>The safety analysis context contains the purpose, the acceptance criteria to be used, the approach adopted to demonstrate that the safety criteria can be met over the time frame selected for the safety analysis and the endpoints for the analysis.</p>
<h5>7.1.1.1	Acceptance criteria</h5>  <p>The licensee or applicant shall ensure that the safety analysis context contains the criteria by which the safety analysis results will be deemed acceptable. These criteria shall be based on regulatory requirements and/or other scientifically justifiable benchmarks or complementary safety arguments that indicate system performance, such as barrier performance or groundwater travel time. The licensee should establish explicit criteria for the level of safety to be achieved.</p>  <p>The licensee or applicant may choose to apply an additional margin of safety in deriving acceptance criteria, such as a dose target or a safety factor. The adoption of a safety margin as acceptance criteria can provide additional assurance that the facility or activity will not result in unreasonable risk now or in the future.</p>
<h5>Radiological protection of persons</h5>  <p>The long-term safety analysis of a facility or contaminated site shall provide reasonable assurance that the regulatory radiological dose limit for public exposure (currently 1 mSv/year) will not be exceeded. However, to account for the possibility of exposure to multiple sources and to help ensure that doses resulting from the facility being assessed are as low as reasonably achievable (ALARA), a design dose target should be challenging and established as a fraction of the regulatory dose limit. The design dose target is not a limit, but rather a design tool in the optimization process.</p>  <p>The dose target should therefore not be used to account for uncertainties in safety analysis model predictions. The achievement of a design target does not, in itself, demonstrate that a design satisfies the optimization principle. A dose should be reduced below a target if this can be done at a justifiable cost, taking into consideration social and economic factors.</p>  <p>The form of the radiological design target should be consistent with the approach and strategy chosen for the long-term safety analysis. The dose calculated by a deterministic safety analysis can be compared directly to the radiological dose target.</p>  <p>A probabilistic safety analysis calculates a potential risk based on the likelihood of an exposure occurring and the consequence of each exposure. The result of the safety analysis is the sum of all significant scenarios, of the probability of the scenario and of the consequence of the scenario.</p>  <p>In a probabilistic safety analysis, high-consequence scenarios with low probability can have the same potential risk as low-consequence scenarios with high probability. If a probabilistic approach is adopted in addition to a direct comparison of calculated potential risk and the design dose target, the safety analysis results should be evaluated as the distribution of doses compared to the design dose target, including discussions of the probability of the doses occurring.</p>
<h5>Protection of persons from hazardous substances</h5>  <p>Benchmark values for protection from hazardous substances can be found in federal (e.g., Health Canada) and provincial (e.g., Ontario Ministry of the Environment, Conservation and Parks) environmental objectives and guidelines. Where available, the Canadian Council of Ministers of the Environment&rsquo;s (CCME&rsquo;s) <em>Canadian Environmental Quality Guidelines</em> [8] for protection of human health should be used for benchmark or toxicological reference values. Where the CCME&rsquo;s human health guidelines are not available, human health-based federal or provincial guidelines should be used.</p>
<h5>Radiological protection of the environment</h5>  <p>For the protection of non-human biota from radiation exposure, the primary concern is the total radiation dose to the organisms resulting in deterministic effects. Radiation dose benchmarks for a quantitative effects safety analysis should follow United Nations Scientific Committee on the Effects of Atomic Radiation [9]. For species identified to be in need of special protection (e.g., those listed on the Species at Risk Public Registry), a more conservative screening dose rate criterion [8] should be considered. Other benchmark values for mean radiation doses to non-human biota have been derived for various types of organisms [10, 11, 12, 13, 14].</p>  <p>Development of criteria for ensuring radiological protection of the environment should follow the protocols established for hazardous substances, as discussed below.</p>
<h5>Protection of the environment from hazardous substances</h5>  <p>Non-radiological acceptance criteria for protection of the environment can include concentration or flux of hazardous substances. The <em>Canadian Environmental Quality Guidelines</em> [8] for water, sediment and soil are appropriate benchmarks for conservative safety analyses. Provincial guidelines can be used where appropriate for substances for which federal guidelines have not been established.</p>  <p>Alternatively, benchmarks for hazardous substances can be derived from toxicity literature, or other regulatory agencies (e.g., U.S. Environmental Protection Agency). The CCME provides protocols for the derivation of air, soil and water quality criteria. The protocols for developing criteria for the protection of the environment include determining critical toxicity values such as an effects concentration for a 10% or 20% response, lowest observable adverse effects level, or no observable adverse effects level from studies of chronic exposure to the most sensitive species. The assessment of risks of hazardous substances to non-human biota is done at the population level, but for species identified to be in need of special protection (e.g., Species at Risk Act) the assessment should focus on protection at an individual level.</p>
<h5>7.1.1.2	Approach adopted to demonstrate safety</h5>  <p>A licensee or applicant should use multiple risk-informed approaches to estimate the release and dispersal of contaminants and resulting concentrations in water, sediment, soil and air based on waste characteristics, release mechanisms and rates, and contaminant transport rates. The exposures of persons and the various receptor organisms will occur by different pathways and will be judged by different acceptance criteria even when all receptors are present in the same environment at the same time.</p>  <p>A licensee or applicant should assess long-term safety using a number of quantitative approaches, including, without being limited to:</p>
<ul>
<li>a scoping analysis to illustrate the factors that are important to long-term safety and a bounding analysis to show the limits of potential impact</li>
<li>calculations that give a realistic best estimate of the performance of the waste management system, or conservative calculations that intentionally over-estimate potential impact</li>
<li>deterministic or probabilistic calculations, appropriate for the purpose of the safety analysis, to reflect data uncertainty</li>  	</ul>  <p>The licensee or applicant may use any combination of these or other appropriate safety analysis strategies in a complementary manner to increase confidence in the demonstration of the safety of the facility.</p>   <p>The licensee or applicant should discuss and justify the choice of strategy in the documentation demonstrating long-term safety. It is expected that the purpose of the safety analysis will also justify the modelling approach adopted and the level of confidence that is needed in the results.</p>
<h5>Scoping and bounding safety analysis</h5>  <p>The licensee or applicant may use a scoping safety analysis to provide a general understanding of the overall waste management system, and to help identify the aspects of the system that are critical to safety.</p>   <p>The licensee or applicant may use a bounding safety analysis to provide limiting estimates of waste management system performance. Such safety analyses may be mathematically simple models, or detailed process models that use limiting parameter values.</p>
<h5>Realistic best estimates vs. conservative overestimations</h5>  <p>The licensee or applicant may use a realistic best-estimate safety analysis to provide the most likely behavior of the waste management system. The licensee or applicant should use real site and as-built facility data, site-specific scenarios and accurate models of the processes being simulated in the realistic estimate.</p>  <p>The licensee or applicant may use conservative calculations to intentionally overestimate future consequences to provide an additional margin of safety for situations where safety analysis results cannot be considered accurate predictions, but merely indicators of safety. A conservative approach should be used when developing computer codes and models, and assumptions and simplifications of processes should not result in underestimation of the potential risks or impacts. It may not be necessary for every assumption to be conservative; however, the net effect of all assumptions should be a conservative representation of long-term impact and risk.</p>  <p>Conservative values of boundary and initial conditions of a safety analysis model, as well as input data, can be used to overestimate future consequences. Because models do not necessarily have a linear response to input data, conservative input values are not necessarily upper or lower limits of the data. It is the value of the computed result that determines whether the model structure and input data have given a conservative overestimation.</p>  <p>If the safety analysis is to be used for compliance with a numerical measure or standard of performance, it may be appropriate to undertake a conservative analysis based on relatively simple models. Such an approach will be feasible if there is a large margin of safety. Caution is necessary because if misused, results from overly conservative or worst case representations of the facility or activity may lead to poor decision making that is based on safety analysis results that bear little resemblance to the actual facility.</p>
<h5>Deterministic and probabilistic calculations</h5>  <p>The licensee or applicant may use a deterministic model to illustrate the impact of specific individual uncertainties or alternative model assumptions. The deterministic model uses single-valued input data to calculate a single-valued result that will be compared to an acceptance criterion. To account for data variability, individual deterministic calculations must be done using different values of input parameters.</p>   <p>This is the approach used for performing sensitivity analyses (determining the response of model predictions to variations in input data) and importance analyses (calculating the range of predicted values that corresponds to the range of input values).</p>   <p>The licensee or applicant may use probabilistic models which typically perform repeated deterministic calculations based on input values sampled from parameter distributions, with the set of results expressed as a frequency distribution of calculated consequences. Frequency multiplied by consequence is interpreted as the overall potential risk of harm from the waste management system. Probabilistic models can explicitly account for uncertainty arising from variability in the data used in safety analysis predictions. Such models may also be structured to take account of different scenarios or uncertainty within scenarios.</p>  <p>The potential risk calculated by a probabilistic model cannot be compared directly to an acceptance criterion unless that criterion is also expressed as a risk. The results of a probabilistic safety analysis should be presented and discussed as the magnitude of the consequence and the likelihood of its occurrence, reflecting the probability that a scenario with those particular input data values will actually occur. Challenges associated with a probabilistic approach can include specifying appropriate probability distributions, and the difficulty in communicating probabilistic assumptions and results.</p>
<h5>7.1.1.3	End points of the safety analysis</h5>  <p>The licensee or applicant shall demonstrate that the selected safety analysis end points are consistent with the purpose of the long-term safety analysis and with relevant regulatory requirements, such as requirements related to radiological dose.</p>  <p>Several other end points, such as those that reflect containment barrier effectiveness or impacts on non-human species, can also be presented to illustrate the long-term performance of a waste management system. Some examples of additional parameters include:</p>
<ul>
<li>container corrosion rates</li>
<li>waste degradation rates</li>
<li>groundwater age and travel time</li>
<li>fluxes of contaminants from a waste management facility</li>
<li>impacts of the facility on site-specific flora and fauna</li>
<li>concentrations of contaminants in specific environmental media (for example, concentration of radium in groundwater)</li>
<li>changes in toxicity of the waste</li>  	</ul>  <p>The licensee or applicant should derive and justify the acceptance criteria by which these parameters are to be judged from the relationship between the parameter end points and the more direct indicators of safety. For example, if the environmental concentration of a hazardous substance is directly related to groundwater velocity near a waste facility, then predicted groundwater velocity could be used as a criterion to demonstrate long-term safety to complement a more complete safety analysis that uses impact on the environment, such as environmental concentration, as end points.</p>
<h5>Identification of human and environmental receptors</h5>   <p>The licensee or applicant shall develop safety analysis scenarios to include the identification of human and environmental receptors that may be exposed to radioactive and hazardous substances. These receptors may be identified through FEPs analysis or from evaluation of valued ecosystem components.</p>   <p>The human receptors in a scenario may be based on the International Commission on Radiological Protection&rsquo;s concept of a critical group for radiological protection of persons. It is reasonably assumed that the critical group for radiological protection will also be a conservative receptor for exposure to hazardous substances. The critical group is a group of people representative of those individuals in the population that are expected to receive the highest annual radiological dose. Such a group would be small enough to be relatively homogeneous with respect to age, diet, and those aspects of behaviour that affect the annual doses received [15]. The habits and characteristics that are assumed for the human critical group should be based on reasonably conservative and plausible assumptions that consider current lifestyles and available site-specific or region-specific information.</p>   <p>Each scenario analyzed may have different critical groups and environmental receptors for radiological and environmental protection. The safety analysis should consider two types of critical groups. The first type is used for assessing releases from a waste repository to the biosphere (e.g., as the result of normal gradual processes or accelerated releases due to discrete events). This group is referred to as the critical group for the normal evolution of the repository. The second type of critical group is used for evaluating exposure due to an inadvertent intruder into a repository. This critical group is referred to as the critical group for intrusion scenarios.</p>  <p>For intrusion scenarios, two categories of exposure should be considered: the exposure of the intruder and the exposure of individuals from enhanced releases from the repository due to the intrusion. The critical group for intrusion scenarios will also depend on the type of waste repository (e.g., deep geological disposal, near surface disposal).</p>  <p>Safety analyses should predict the impact on representative individual organisms and then evaluate the significance of that impact on the affected population.</p>  <p>IAEA-TECDOC-1077, <em>Critical Groups and Biospheres in the Context of Radioactive Waste Disposal</em> [16], provides guidance for assessing exposures to critical groups throughout the time frame of the normal evolution scenario. For longer time frame, the proponent may elect to use a reference biosphere for the critical group. Additional guidance on the use of reference biospheres can be found in the 2003 International Atomic Energy Agency (IAEA) document IAEA BIOMASS-6, <em>Reference Biospheres for Solid Radioactive Waste Disposal</em> [17].</p>  <p>The identification of non-human receptors can be more complex than the identification of human critical groups, even when all receptors are present in the same environment at the same time. This is due to the large variety of organisms with different lifecycles, habitats, exposure pathways and sensitivities. Non-human receptors usually include a range of different plants and animals occurring at various levels of biological organization (e.g., organism, population, community or ecosystem). Among other criteria, the receptors should represent the taxonomic groups most likely to receive a higher exposure from a particular pathway.</p>  <p>The safety analysis should model the biosphere, which will be the receiving environment for the contaminants, based as much as possible on the site specific information in the system description. Alternatively, when-site specific information is not adequate to make reasonable or conservative extrapolations from the characteristics of the current biosphere, a stylized approach to defining the biosphere may meet the purpose of the safety analysis. Specific species or generic receptors can be used to represent non-human receptors, but the safety analysis should be clear about which is being assessed.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="7.1.2"></div>
<h4 id="sec7-1-2">7.1.2	Selection of methodology</h4>  <p>The licensee or applicant shall set out the rationale for selecting the safety analysis methodology, and describe how the performance and practical implementation of the system and its components would be demonstrated, using multiple lines of reasoning and evidence. The licensee or applicant should also demonstrate how consistency with international guidance and practices is achieved and how peer review will be conducted.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="7.1.3"></div>
<h4 id="sec7-1-3">7.1.3	Waste management system description</h4>  <p>The licensee shall include the waste management system description, which is a component of the overall safety case, in the safety analysis model. It should present both the characteristics of the site and the design of the structure, systems and components important to safety, as well as a description of the type of waste to be managed.</p>  <p>The waste management system shall also consider nuclear criticality. Nuclear criticality safety analysis for the post-closure phase shall utilize acceptance criteria and technical practices that are provided in REGDOC-2.4.3, <em>Nuclear Criticality Safety</em> [18].</p>  <p>Information from natural analog studies can also be used in safety analysis models. Natural analogs can also provide data for verifying and validating both detailed process and simplified assessment models, and for developing generic site descriptive models in the absence of site-specific characterization data.</p>  <p>As licensing progresses through the facility&rsquo;s lifecycle, as-built information and operational data are acquired, and the site characteristics become better understood. It is expected that safety analyses that are made later in the facility&rsquo;s lifecycle will be based on updated and refined models and data. There should be less reliance on default, generic or assumed information, resulting in more reliable model results.</p>
<h5>7.1.3.1	Site characterization</h5>  <p>The licensee or applicant shall include site characterization data in the safety analysis as well as a description of the environment, such as the ecological, geological, hydrological and climatic conditions. This description should include sufficient information on the baseline conditions to allow a thorough assessment of the impact of the licensed activities.</p>   <p>The licensee or applicant should ensure that the site characteristics are sufficiently defined to produce an accurate descriptive safety analysis model.</p>   <p>Guidance on the site characterization of a deep geological repository is found in draft REGDOC 1.2.1, <em>Guidance on Deep Geological Repository Site Characterization</em> [6].</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="7.1.4"></div>
<h4 id="sec7-1-4">7.1.4	Safety analysis scenarios and time frames</h4>  <p>The licensee shall develop and use scenarios to describe possible evolutions of the facility and its environment as well as the impact of FEPs identified as having potential to impact safety.</p>   <p>The licensee or applicant shall ensure that safety analysis scenarios are sufficiently comprehensive to account for all of the present and potential future states of the site and the biosphere.</p>   <p>The safety analysis shall include a central scenario of the normal, expected or anticipated evolution of the site and the facility over time, and additional scenarios that examine the probability and potential impact of disruptive events, modes of containment failure or beyond-design-basis accidents.</p>  <p>Each scenario presented in a safety analysis shall include specific information about:</p>
<ul>
<li>the time frame on which the safety analysis is based</li>
<li>the duration (start to finish) during which institutional controls are relied upon as a safety feature</li>
<li>the identity and characteristics of the assumed receptors and critical groups</li>  	</ul>  <p>A safety analysis should present and justify the techniques and criteria used to develop the scenarios that are analyzed. Scenarios should be developed in a systematic, transparent, and traceable manner through a structured analysis of relevant FEPs that are based on current and future conditions of site characteristics, waste properties, and receptor characteristics and their lifestyles. The approach to scenario development should be consistent with the rigour of the safety analysis, taking into consideration the purpose of the safety analysis, the hazard of the waste, and the nature of the decision for which the safety analysis is being undertaken.</p>  <p>For the demonstration of the robustness of waste management system, the safety analysis should consider disruptive event scenarios in which the total or partial failure of one or several barriers or safety functions is assumed. These disruptive event scenarios should show that the safety of the overall waste management system is still valid.</p>  <p>"What if" scenarios may be used to exhibit the robustness and performance of various natural and engineered barriers under extreme conditions. Therefore, it can be instructive to assign parameter values or other properties to parts of the barrier system such that the barrier under consideration is influenced in an exaggerated way. This may show that such exaggerated conditions are impractical, do not negatively impact safety or that they can be avoided by design.</p>   <p>Stylized scenarios are generic representations of a group of scenarios, where part of the waste management system is treated in a standardized or simplified way. The application of stylized scenarios may be useful where site-specific information is lacking, or where the purpose of the safety analysis does not require detailed site-specific information.</p>   <p>The safety analysis should demonstrate that the set of scenarios developed is credible and comprehensive. Some FEPs or scenarios may be excluded from the safety analysis if there is an extremely low likelihood that they would occur, or if they would have trivial impact.</p>   <p>An alternative method for developing scenarios is based on an analysis of how the safety functions by possible FEPs. This may be followed by a process of auditing the scenarios developed against an appropriate list of the FEPs.</p>  <p>The approach and screening criteria used to exclude or include scenarios should be justified and well documented.</p>
<h5>7.1.4.1	Safety analysis time frames</h5>   <p>The licensee or applicant shall ensure that future impact that may arise from the radioactive waste includes the period of time during which the maximum impact is predicted to occur.</p>   <p>The safety analysis should provide a rationale for the time frame used. The approach taken to determine respective periods of time used in the safety analysis should take into account the following elements:</p>
<ul>
<li>hazardous lifetime of the contaminants associated with the waste</li>
<li>duration of the operational period (before the facility reaches its end state)</li>
<li>design life of engineered barriers</li>
<li>duration of both active and passive institutional controls</li>
<li>frequency of natural events and human-induced environmental changes (e.g., seismic occurrence, flood, drought, glaciation, climate change, etc.)</li>
<li>the degree of protection and isolation required against inadvertent intrusion over the long-term</li>  	</ul>  <p>The licensee or applicant should document and justify the assumed performance time frames of engineered barriers and the evolution of their safety function with time. Depending on the purposes of the safety analysis, it might be convenient to divide the overall time frame into several shorter time windows for modelling or presentational reasons. It is also possible that different end points are used for different time windows.</p>   <p>The time frame depends on the radioactivity of the waste. The longer the time frame, the more severe the design-basis events become. For example, the design-basis earthquake to be chosen for a facility depends on the likelihood and consequences of failure should a more severe earthquake occur during the time frame. If the consequences are high, the design basis earthquake should be chosen such as its probability of exceedance during the time frame would be smaller. A design-basis earthquake is often associated with a return period (in years), which is the inverse of the annual probability. For example an earthquake with a return period of 10,000 years has an annual probability of exceedance of 1/10,000. Therefore, for any given year, there is a probability of 1/10000 (0.01%) that a more severe earthquake might occur. For a period of 10,000 years, that probability increases to 63% and for a period of a 100,000 years, this probability is near 100%.</p>
<h5>7.1.4.2	Normal evolution scenario</h5>  <p>The licensee or applicant shall present a normal evolution scenario in the long-term safety analysis. The normal evolution scenario should be based on reasonable extrapolation of current site features and receptor lifestyles. It should include expected evolution of the site and degradation of the waste management system (gradual or total loss of barrier function) as it ages. Evolution scenarios are not expected to include biological evolution of individual receptor species, which can be assumed to be static for the purposes of the long-term safety analysis.</p>  <p>Depending on site-specific conditions and the time frame for the safety analysis, a normal evolution scenario should include extreme conditions such as, earthquakes, climate shifts or the onset of glaciation. Similarly, periodic natural disruptive events such as floods or forest fires, if they are expected to occur during the time frame, should be part of the normal evolution scenario and their effects on barrier performance should be considered. These scenarios may be analyzed separately as variants of the normal evolution scenario.</p>  <p>The decision about which natural disruptive events should be included is based on the assessment of FEPs and the probability of their occurrence within the time frame of the safety analysis.</p>  <p>Normal evolution scenarios should also take into account the failure modes of the containment and isolation systems. These failures can result not only from natural degradation of barriers, but from events that might be expected to occur once or more during the safety analysis period, including penetration of the barriers by intrusion.</p>
<h5>7.1.4.3	Disruptive event scenarios, including human intrusion</h5>  <p>The licensee or applicant shall postulate disruptive event scenarios leading to possible penetration of barriers and abnormal loss of containment. The occurrence of events such as fire, flood, seismic activity, volcanism and human intrusion cannot be predicted accurately, even in cases where they can be associated with an annual probability of occurrence or a return period. Disruptive events which are more severe than the events considered in normal evolution scenarios to which barriers are designed and assumed to resist, should be considered . The inclusion of disruptive event scenarios will allow demonstration of the principle of defence in depth and the robustness of the overall waste management system.</p>  <p>Intrusion not only breaches containment barriers, but may result in waste being redistributed outside the barriers, potentially exposing the public and the environment. Safety analysis of human intrusion, therefore, needs to estimate the exposure of persons and the environment that would result from waste redistribution. Scenarios of inadvertent intrusion, where the intruder is not aware of the hazards of the waste, should estimate the exposure of the intruder; however, safety analysis of intentional human intrusion, where the intruder is assumed to be aware of the hazard of the waste, need not consider the exposure of the intruder.</p>  <p>Scenarios assessing the risk from inadvertent intrusion should be case-specific, based on the type of waste and the design of the facility, and should consider both the probability of intrusion and its associated consequences. Surface and near-surface facilities (e.g., tailings sites) are more likely to experience intrusion than deep geological facilities. Acceptance criteria for human intrusion should be defined. In case the criteria cannot be met, even after optimization of the design and siting, management of the waste at greater depths should be considered.</p>   <p>Reasonable efforts should be made to limit the dose from a high-consequence intrusion scenario and to reduce the probability of the intrusion. The consequences of intrusion could be reduced by controlling the form and properties of the waste accepted at the facility. Design modifications to reduce the likelihood of inadvertent intrusion should be undertaken. This may include the choice of site for the facility (where site selection options are feasible), siting the facility at a depth that discourages intrusion, incorporating robust design features that make intrusion more difficult, and implementing active or passive institutional controls, as appropriate.</p>   <p>For deep geological repositories, where the site characteristics, the depth and the design of the facility have already been optimized to reduce the likelihood of the intrusion, the safety analysis results of human intrusion scenarios should be used for illustrative purposes. Scenarios concerning inadvertent human intrusion into such facilities could predict doses that are greater than the regulatory limit. Such results should be interpreted in light of the degree of uncertainty associated with the safety analysis, the conservatism in the dose limit, and the likelihood of the intrusion. Both the likelihood and the risk from the intrusion should therefore be reported.</p>  <p>For near-surface disposal, in addition to design and optimization, safety analysis of human intrusion scenarios also contributes to the development of waste acceptance criteria, development of the necessary time frames for institutional controls and determination of whether specific waste streams require deeper disposal.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="7.1.5"></div>
<h4 id="sec7-1-5">7.1.5	Developing and using safety analysis models</h4>  <p>The licensee or applicant should employ a variety of computational tools to predict future conditions for comparison to acceptance criteria that indicate safety.</p>   <p>The licensee or applicant should base the safety analysis on a conceptual model that includes the description of the components of the system and the iterations between these components. It should also include a set of assumptions concerning the geometry of the system and the chemical, physical, biological, mechanical, and geological behaviour of the facility or activity, consistent with the information and knowledge available.</p>
<p>The conceptual models of the site and the waste management system that have been developed often need to be simplified to correspond to the limitations of the mathematical equations and the capabilities of computer models to solve them. A mathematical model is a representation of the features and processes included in the conceptual model in the form of mathematical equations.</p>  <p>Computer models are used to solve the mathematical equations that represent the understanding of the inter-relationships among the major features, processes, and characteristics of the waste management system in its particular environment. For long-term safety analysis models, the level of accuracy needed in the model, and the degree of conservatism desired in the results, are determined by the purpose of the safety analysis and the importance of the model results with respect to indicating expected performance and safety.</p>
<h5>7.1.5.1	Confidence in computing tools</h5>  <p>The licensee or applicant should ensure that computer programs are developed specifically for the given safety analysis. The computer software used for analysis calculations shall be qualified in accordance with applicable standards.</p>
<p>Calibration of computer models and verification and validation of software are the main processes involved in software QA. Calibration involves setting adjustable parameters within the mathematical equations to minimize the differences between the calculated and measured responses of the system, with the prior knowledge of the latter.</p>  <p>Verification ensures that the program functions as designed and intended (i.e., that the mathematical equations in the computer model are solved correctly). This can be tested using benchmark problems specific for the type of model being assessed. All computer software used for long-term safety analysis should be verified.</p>  <p>Validation is meant to ensure that the mathematical equations in the computer model simulate, with reasonable accuracy, the processes and conditions they are supposed to represent.</p>  <p>Data that is used to calibrate a model cannot be subsequently used to validate that model.</p>
<h5>7.1.5.2	Confidence in safety analysis models</h5>  <p>Confidence in the computing tools alone is not generally sufficient for regulatory purposes. The safety analysis model should be shown to use those tools correctly and within their limitations, and input data for the model should be verified according to an acceptable QA standard, to an extent consistent with the rigor of the safety analysis. The input data, the scenarios analyzed, and the resulting predictions should all be shown to be consistent with the assumptions and limitations of the safety analysis model. In addition, the safety analysis model as a whole (scenario, conceptual model, input data, and mathematical model) should be validated to the extent possible.</p>  <p>The need to evaluate the uncertainty in the safety analysis model through deterministic sensitivity analyses or through probabilistic calculations is determined by the level of confidence needed in the model results. The acceptable level of confidence is governed by the purpose of the safety analysis, the safety factor built into the acceptance criteria for safety indicators, and the importance of the safety analysis model results to the safety case.</p>  <p>Although models of individual processes or phenomena can sometimes be validated by experiments and blind predictions, the long-term predictions made by safety analysis models cannot be confirmed. Similarly, a perfect match between the measured data from an experiment and blind predictions does not guarantee that the model will be a good predictor for performance safety analysis, since different processes can dominate performance and safety on different space and time scales, and under different conditions. The space and time scales for any experiment, as well as other test conditions, will likely be different from the scales or conditions for which long-term performance safety analysis calculations are made. In addition, experience in international computer model testing projects has shown that, due to the complexity and spatial variability of the natural environment, an unambiguous description or model of a system cannot generally be attained.</p>  <p>As a result, the model evaluation process should concentrate on identifying and understanding the key radiological, physical, chemical and biological processes that are important to safety at the various space and time scales of concern in the safety analysis. Sophisticated detailed models of processes can be used to determine if those processes are sufficiently influential to include them in the long-term safety analysis model, or if they can be ignored with no detriment to the reliability of the predictions.</p>  <p>Model evaluation should include sensitivity analyses to show whether the model output responds as expected to variations in the model input parameter values. Model evaluation should also include uncertainty and importance analyses to show which parameters control the variability in model output. These analyses should demonstrate how well the model replicates what is known and understood about the processes and mechanisms being simulated. The results obtained from these analyses should be shown to conform to the limitations and restrictions of the assumptions in the safety analysis model.</p>  <p>One useful check on the results of the model is to perform a mass balance of the contaminants. Discrepancies in mass balance should be explainable, such as decisions to assume no decay or to assume a constant source concentration to be conservative.</p>  <p>Neither sensitivity studies nor uncertainty analyses of deterministic or probabilistic models can inherently account for uncertainties in the underlying conceptual model, or uncertainties resulting from limitations of the mathematical model used to describe the processes. Investigation of such uncertainties would require the use of different mathematical and computer models based on alternate conceptual models.</p>  <p>Confidence in the safety analysis model can be enhanced through a number of activities, including (without being limited to):</p>
<ul>
<li>performing independent predictions using entirely different safety analysis strategies and computing tools</li>
<li>demonstrating consistency between the results of the long-term safety analysis model and complementary scoping and bounding safety analysis</li>
<li>applying the safety analysis model to an analog of the waste management system</li>
<li>performing model comparison studies of benchmark problems</li>
<li>scientific peer review by publication in open literature</li>
<li>widespread use by the scientific and technical community</li>  	</ul>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="7.1.6"></div>
<h4 id="sec7-1-6">7.1.6	Interpretation of results</h4>  <p>When interpreting the safety analysis results, the applicant should demonstrate a thorough understanding of the underlying science and engineering principles that are controlling the safety analysis results. Interpretation should include evaluation of compliance with the acceptance criteria and analysis of the uncertainties associated with the safety analysis.</p>  <p>The results of the safety analysis should also be analyzed to show consistency with system performance expectations and with the complete set of assumptions and simplifications used in developing the models and scenarios. Any unexpected results or discrepancies should be documented, investigated and explained.</p>
<h5>7.1.6.1	Comparing safety analysis results with acceptance criteria</h5>  <p>One of the aims of the safety analysis is to compare the safety analysis endpoints with specific indicators. If the safety analysis results do not demonstrate compliance with safety requirements or criteria the safety analysis shall be revised. Sufficient detail should be provided to enable the CNSC to verify the results.</p>  <p>However, the achievement of a level of protection such that the calculated doses are less than the dose constraint is not sufficient for acceptance of a safety case for a facility or activity, since protection is required to be optimized and demonstrated by multiple lines of evidence.</p>
<h5>7.1.6.2	Analyzing uncertainties</h5>  <p>A formal uncertainty analysis of the predictions should be performed to identify the sources and significance of uncertainty. This analysis should distinguish between uncertainties arising from:</p>
<ul>
<li>input data or parameters</li>
<li>scenario assumptions</li>
<li>the mathematics of the safety analysis model</li>
<li>the conceptual models</li>  	</ul>  <p>Uncertainty analysis is the estimation of the resulting uncertainties in the safety analysis end points based on the uncertainties in the input date and model parameters. Sensitivity analysis is used to identify the relative importance of the uncertainty of each input parameter to the results of the safety analysis.</p>  <p>Comparison of the safety analysis results with acceptance criteria to provide a reasonable assurance of safety should include discussion of the conservatism of the model results, and the conservatism built into the acceptance criteria for the safety indicators.</p>  <p>While in most cases acceptance criteria are expressed as single values, both deterministic and probabilistic safety analysis results have an associated uncertainty. It is expected that the comparison between the safety analysis results and the acceptance criteria will explicitly take the uncertainty in the safety analysis results into account, as follows:</p>
<ul>
<li>for deterministic safety analysis, the range of uncertainty in the calculated result as determined by a sensitivity analysis (or importance analysis) is expected to be explicitly included in the comparison</li>
<li>for probabilistic safety analysis, the likelihood of exceeding the acceptance criterion should be determined from the calculated results distribution, if the criterion is expressed as a single value of consequence</li>  	</ul>  <p>If the range of safety analyses results from deterministic uncertainty analysis or from the probabilistic results distribution shows that part of the results may exceed the acceptance criteria, the applicant should demonstrate that these results will not represent unreasonable risk to the environment or to the health and safety of persons, taking into account the conservatism built into the safety analyses calculations and the likelihood of the circumstances leading to these results.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appA"></div>
<h2 id="appA">Appendix A: Components of a Safety Case for the Long-Term Management of Radioactive Waste</h2>  <p>A safety case consists of a safety assessment and supporting safety analysis, which is used to give reasonable assurance that long-term radioactive waste management will be conducted in a manner that protects human health and the environment. In this respect, the flow and organization of information submitted to support the safety case are crucial elements that are necessary to provide reasonable assurance that the long-term management of waste will be adequately implemented.</p>
<p>Figure 1 presents an outline of all components of the safety case, safety assessment and safety analysis, as detailed in sections 5, 6 and 7, respectively.</p>   <div className="span-5">  	<img src="/images/regulatory-documents/regdoc-2-11-1-vol3-ver2/figure-1-eng.jpg" alt="" />  </div>
<div className="clear"></div>
<details>  <summary>Description</summary>  <p>This diagram presents an outline of all components of the safety case, safety assessment and safety analysis, as detailed in sections 5, 6 and 7. The diagram includes a double-headed arrow and three boxes titled safety case, safety assessment, and long-term safety analysis.</p>  <p>On the left, the double-headed arrow with the term "management system" runs vertically beside all three boxes to illustrate the overarching role of the management system when developing a safety case and supporting safety assessment for the long-term management of radioactive waste.</p>  <p>There are three boxes to the right of the arrow. The top box is titled "Safety Case". Within the larger Safety Case box there are 11 sub-boxes arranged vertically showing the following components starting at the top and moving down the box:</p>  	<ul>
<li>Safety case context</li>
<li>Safety case strategy</li>
<li>Waste management system description</li>
<li>Safety assessment</li>
<li>Management of uncertainties</li>
<li>Iteration and design optimization</li>
<li>Limits, controls and conditions</li>
<li>Complementary safety arguments</li>
<li>Monitoring and surveillance</li>
<li>Institutional controls</li>
<li>Integration of safety arguments</li>  	</ul>  <p>The middle box is titled Safety Assessment. It is located slightly to the right and beneath the Safety Case box and there is an inverted-L-shaped arrow starting in the Safety Case box and pointing to the Safety Assessment box. Within the larger Safety Assessment box there are three sub-boxes arranged vertically showing the following components starting at the top and moving down the box:</p>  	<ul>
<li>Site and engineering aspects</li>
<li>Operational safety analysis</li>
<li>Long-term safety analysis</li>  	</ul>  <p>The bottom box is titled Long-Term Safety Analysis. It is located slightly to the left and beneath the Safety Assessment box and there is an inverted-L-shaped arrow starting in the Safety Assessment box and pointing to the Long-Term Safety Analysis box. Within the larger Long-Term Safety Analysis box there are six sub-boxes arranged vertically showing the following components starting at the top and moving down the box:</p>  	<ul>
<li>Safety analysis context</li>
<li>Selection of methodology</li>
<li>Waste management system description</li>
<li>Safety analysis scenarios and timeframes</li>
<li>Safety analysis models</li>
<li>Interpretation of results</li>  	</ul>  </details>  <br />
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
<h2 id="glossary">Glossary</h2>  <p>For definitions of terms used in this document, see REGDOC-3.6, <em>Glossary of CNSC Terminology</em>, which includes terms and definitions used in the <em>Nuclear Safety and Control Act</em> and the regulations made under it, and in CNSC regulatory documents and other publications. REGDOC-3.6 is provided for reference and information.</p>  <p><strong>long-term radioactive waste management system</strong><br />
The system of properties of the site for a waste management facility, design of the waste management facility, physical structures and items, procedures for control, characteristics of waste and other elements that contribute in different ways and over different time scales to the fulfilment of safety functions for waste management.</p>
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
<h2 id="ref">References</h2>
<ol>
<li>CNSC. REGDOC 2.4.4, <em>Safety Analysis for Class IB Nuclear Facilities</em>. Ottawa, 2019.</li>
<li>CNSC. <a href="/eng/acts-and-regulations/regulatory-documents/published/html/regdoc2-9-1-new-v1.1/index">REGDOC-2.9.1, <em>Environmental Protection: Environmental Principles, Assessments and Protection Measures</em></a>. Ottawa, 2017.</li>
<li><a href="/eng/acts-and-regulations/regulatory-documents/published/html/regdoc2-11-1-v2/index">REGDOC-2.11.1, <em>Waste Management, Volume II: Management of Uranium Mine Waste Rock and Mill Tailings</em></a>.</li>
<li>CSA Group. <a href="/eng/acts-and-regulations/regulatory-documents/csa-standards">CSA N286, <em>Management system requirements for nuclear facilities</em></a>. Mississauga, 2012.</li>
<li>CNSC. <a href="/eng/acts-and-regulations/consultation/comment/regdoc2-1-1">REGDOC-2.1.1, <em>Management System</em></a>. Ottawa, 2019.</li>
<li>CNSC. REGDOC-1.2.1, <em>Guidance on Deep Geological Repository Site Characterization</em>. Ottawa, 2019.</li>
<li>CNSC. REGDOC 2.11.1, <em>Waste Management, Volume I: Management of Radioactive Waste</em>. Ottawa, 2019.</li>
<li>Canadian Council of Ministers of the Environment (CCME). <a href="http://ceqg-rcqe.ccme.ca/en/index.html"><em>Canadian Environmental Quality Guidelines</em></a>. Ottawa, 2014.</li>
<li>United Nations Scientific Committee on the Effects of Atomic Radiation. <a href="http://www.unscear.org/unscear/en/publications/1996.html">Report to the General Assembly, <em>Sources and Effects of Ionizing Radiation</em></a>. New York, 1996.</li>
<li>Larsson, C.-M. <a href="https://www.sciencedirect.com/journal/journal-of-environmental-radioactivity/vol/99/issue/9">An overview of the ERICA integrated approach to the assessment and management of environmental risks from ionizing radiation</a>. <em>Journal of Environmental Radioactivity</em>, 99: 1364&ndash;1370. Stockholm, 2008.</li>
<li>Brown et al. <a href="">The ERICA Tool</a>. <em>Journal of Environmental Radioactivity</em>, 99: 1371&ndash;1383. 2008.</li>
<li>National Council on Radiation Protection and Measurements (NCRP). <a href="https://ncrponline.org/product-category/reports/page/9/"><em>NCRP Reports Vol. XXII No. 112&ndash;114</em></a>. Bethesda, 1991.</li>
<li>International Atomic Energy Agency (IAEA).IAEA <a href="https://www-pub.iaea.org/books/iaeabooks/1436/Effects-of-Ionizing-Radiation-on-Plants-and-Animals-at-Levels-Implied-by-Current-Radiation-Protection-Standards">Technical Reports Series No. 332, <em>Effects of ionizing radiation on plants and animals at levels implied by current radiation protection standards</em></a>. Vienna, 1992.</li>
<li>Environment and Climate Change Canada. <a href="https://www.ec.gc.ca/ese-ees/default.asp?lang=En&n=2A379917-1">Priority Substances List Assessment Report, <em>Releases of radionuclides from nuclear facilities (impact on non-human biota)</em></a>. Ottawa, 2003.</li>
<li>International Commission on Radiological Protection (ICRP). <a href="http://www.icrp.org/publication.asp?id=ICRP%20Publication%2081">ICRP Publication 81, <em>Radiation Protection Recommendations as Applied to the Disposal of Long-lived Solid Radioactive Waste</em></a>. United Kingdom, 1998.</li>
<li>IAEA. <a href="https://www-pub.iaea.org/books/IAEABooks/5370/Critical-Groups-and-Biospheres-in-the-Context-of-Radioactive-Waste-Disposal">IAEA TECDOC-1077, <em>Critical Groups and Biospheres in the Context of Radioactive Waste Disposal</em></a>. Vienna, 1999.</li>
<li>IAEA. <a href="https://www-pub.iaea.org/books/iaeabooks/6710/-Reference-Biospheres-for-Solid-Radioactive-Waste-Disposal">IAEA BIOMASS-6, <em>"Reference Biospheres" for Solid Radioactive Waste Disposal</em></a>. Vienna, 2003.</li>
<li>CNSC. <a href="/eng/acts-and-regulations/regulatory-documents/published/html/regdoc2-4-3/index">REGDOC-2.4.3, <em>Nuclear Criticality Safety</em></a>. Ottawa, 2018.</li>  	</ol>
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
<h2 id="addInfo">Additional Information</h2>  <p>The CNSC may recommend additional information on best practices and standards such as those published by CSA Group. With permission of the publisher, CSA Group, all nuclear-related CSA standards may be viewed at no cost through the CNSC Webpage on its "<a href="/eng/acts-and-regulations/regulatory-documents/csa-standards">How to gain free access to all nuclear-related CSA standards</a>" Web page.</p>  <p>The following documents are not referenced in this regulatory document but contain information that may be useful to the reader:</p>
<ul>
<li>CSA Group. CSA N288.4, <em>Environmental monitoring programs at Class I nuclear facilities and uranium mines and mills</em>. Mississauga, 2010.</li>
<li>CSA Group. CSA N288.5, <em>Effluent monitoring programs at Class I nuclear facilities and uranium mines and mills</em>. Mississauga, 2011.</li>
<li>CSA Group. CSA N288.6, <em>Environmental risk assessments at Class I nuclear facilities and uranium mines and mills</em>. Mississauga, 2012.</li>
<li>CSA Group. CSA N288.7, <em>Groundwater protection programs at Class I nuclear facilities and uranium mines and mills</em>. Mississauga, 2015.</li>
<li>CSA Group. CSA N292.0, <em>General principles for the management of radioactive waste and irradiated fuel</em>. Mississauga, 2014.</li>
<li>CSA Group. CSA N292.1, <em>Wet storage of irradiated fuel and other radioactive materials</em>. Mississauga, 2016.</li>
<li>CSA Group. CSA N292.2, <em>Interim dry storage of irradiated fuel</em>. Mississauga, 2013.</li>
<li>CSA Group. CSA N292.3, <em>Management of low- and intermediate-level radioactive waste</em>. Mississauga, 2008.</li>
<li>CSA Group. CSA N292.5, <em>Guideline for the exemption or clearance from regulatory control of materials that contain, or potentially contain, nuclear substances</em>. Mississauga, 2011.</li>
<li>CSA Group. CSA N292.6, <em>Long-term management of radioactive waste and irradiated fuel</em>. Mississauga, 2018.</li>
<li>CSA Group. CSA N294, <em>Decommissioning of facilities containing nuclear substances</em>. Mississauga, 2009.</li>
<li>International Atomic Energy Agency (IAEA). <a href="https://www-pub.iaea.org/books/iaeabooks/8004/Predisposal-Management-of-Radioactive-Waste">IAEA General Safety Requirements GSR-Part 5, <em>Predisposal Management of Radioactive Waste</em></a>. Vienna, 2009.</li>
<li>IAEA. <a href="https://www-pub.iaea.org/books/iaeabooks/8154/Classification-of-Radioactive-Waste">IAEA General Safety Guide GSG-1, <em>Classification of Radioactive Waste</em></a>. Vienna, 2009.</li>
<li>IAEA. <a href="https://www-pub.iaea.org/books/iaeabooks/8420/Disposal-of-Radioactive-Waste">IAEA Specific Safety Requirements SSR-5, <em>Disposal of Radioactive Waste</em></a>. Vienna, 2011.</li>
<li>IAEA. <a href="https://www-pub.iaea.org/books/iaeabooks/8790/The-Safety-Case-and-Safety-Assessment-for-the-Disposal-of-Radioactive-Waste">IAEA Safety Guide SSG-23, <em>The Safety Case and Safety Assessment for the Disposal of Radioactive Waste</em></a>. Vienna, 2012.</li>
<li>IAEA. IAEA Safety Guide GSG-3, <a href="https://www-pub.iaea.org/books/iaeabooks/8882/The-Safety-Case-and-Safety-Assessment-for-the-Predisposal-Management-of-Radioactive-Waste"><em>The Safety Case and Safety Assessment for the Predisposal Management of Radioactive Waste</em></a>. Vienna, 2013.</li>
<li>IAEA. <a href="https://www-pub.iaea.org/books/iaeabooks/10605/Monitoring-and-Surveillance-of-Radioactive-Waste-Disposal-Facilities">IAEA Safety Guide SSG-31, <em>Monitoring and Surveillance of Radioactive Waste Disposal Facilities</em></a>. Vienna, 2014.</li>
<li>IAEA. <a href="https://www-pub.iaea.org/books/iaeabooks/5723/Radiological-Characterization-of-Shut-Down-Nuclear-Reactors-for-Decommissioning-Purposes">IAEA Technical Reports Series No. 389, <em>Radiological characterization of shut down nuclear reactors for decommissioning purposes</em></a>. Vienna, 1998.</li>
<li>International Organization for Standardization. <a href="https://www.iso.org/standard/40081.html">ISO 21238: 2007, <em>Nuclear energy &ndash; Nuclear fuel technology &ndash;Scaling factor method to determine the radioactivity of low- and intermediate-level radioactive waste packages generated at nuclear power plants</em></a>. Geneva, 2007.</li>  	</ul>
<div className="wb-fnote" role="note">
<section>
<h2 id="fnb">Footnote</h2>
<dl>
<dt>Footnote 1</dt>
<dd id="fnb1">
<p>For disposal facilities, the performance should take into consideration the degradation of the barriers during the time frame associated with the facility</p>
<p className="fn-rtn"><a href="#fnb1-ref"><span className="wb-inv">Return to </span>1<span className="wb-inv"> referrer</span></a></p>
</dd>
</dl>
</section>  </div>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<h2>CNSC Regulatory Document Series</h2>
<p>Facilities and activities within the nuclear sector in Canada are regulated by the Canadian Nuclear Safety Commission (CNSC). In addition to the <em>Nuclear Safety and Control Act </em>and associated regulations, these facilities and activities may also be required to comply with other&nbsp;regulatory instruments such as regulatory documents or standards.</p>
<p>CNSC regulatory documents are classified under the following categories and series:</p>
<ul className="list-bullet-none">
<li><strong>1.0 Regulated facilities and activities</strong></li>
<li>Series 1.1 Reactor facilities
<ul className="list-bullet-none">
<li>1.2 Class IB facilities</li>
<li>1.3 Uranium mines and mills</li>
<li>1.4 Class II facilities</li>
<li>1.5 Certification of prescribed equipment</li>
<li>1.6 Nuclear  substances and radiation devices</li>
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
</li>
</ul>
<p><strong>Note:</strong> The regulatory document series may be adjusted periodically by the CNSC. Each regulatory document series listed above may contain multiple regulatory documents. Visit the CNSC&rsquo;s website for the latest <a href="/eng/acts-and-regulations/regulatory-documents/index">list of regulatory documents</a>.</p>

                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }