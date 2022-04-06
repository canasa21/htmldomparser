import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "en",
                pageTitle: "Archived Web Page: Draft for Public Consultation: RD/GD-98: Reliability Programs for Nuclear Power Plants", 
                dateModified: "2012-02-23",
                langToggleUrl: "/fra/acts-and-regulations/consultation/comment/rd-gd-98-1"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<p><img src="/dist/js/images/archived/warning.gif" alt="Warning" title="Warning" className="image-actual mrgn-bttm-0" /> This Web page has been archived on the Web.</p>
<div id="archived" className="wet-boew-archived col-md-12">
<h2>Archived Content</h2>
<p>Information identified as archived on the Web is for reference, research or recordkeeping purposes. It has not been altered or updated after the date of archiving. Web pages that are archived on the Web are not subject to the Government of Canada Web Standards. As per the <a href="http://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=12316&amp;section=text">Communications Policy of the Government of Canada</a>, you can request alternate formats on the <a href="/eng/contact-us/">Contact Us</a> page.</p>
</div>
<a name="#RDsection[1]#"></a>
<h2 className="reportHeading2">Preface</h2>  <p>Regulatory document RD/GD-98, <em>Reliability Programs for Nuclear Power Plants</em>, sets out the requirements and guidance of the Canadian Nuclear Safety Commission (CNSC) for the development and implementation of a reliability program for nuclear power plants in Canada.</p>  <p>RD/GD-98 captures the existing requirements previously found in S-98 (Revision&nbsp;1), <em>Reliability Programs for Nuclear Power Plants</em>, and also replaces the latter document. </p>  <p>Key principles and elements used in developing this document and the associated regulatory document are consistent with national and international documents. </p>  <p>Nothing contained in this document is to be construed as relieving any licensee from pertinent requirements. It is the licensee&#8217;s responsibility to identify and comply with the <em>Nuclear Safety and Control Act</em>, applicable regulations and licence conditions.</p>
<a name="#RDsection[2]#"></a>
<h2 className="reportHeading2">Table of Contents</h2>  <div className="IndentLeft10">  <p><a href="#P98_3124"><strong>1.0 Introduction</strong></a></p>  </div>  <div className="IndentLeft20">  <p><a href="#P99_3139">1.1 Purpose</a></p>  <p><a href="#P101_3611">1.2 Scope</a></p>  <p><a href="#P105_4349">1.3 Relevant legislation</a></p>  <p><a href="#P126_7922">1.4 National and international documents</a></p>  </div>  <div className="IndentLeft10">  <p><a href="#P132_8727"><strong>2.0 Objective and requirements of reliability programs</strong></a></p>  </div>  <div className="IndentLeft20">  <p><a href="#P133_8780">2.1 Objective</a></p>  <p><a href="#P135_9005">2.2 Requirements</a></p>  </div>  <div className="IndentLeft10">  <p><a href="#P159_11596"><strong>3.0 Guidance for Reliability Programs</strong></a></p>  </div>  <div className="IndentLeft20">  <p><a href="#P169_12591">3.1 Using systematic methods to identify and rank systems important to safety</a></p>  </div>  <div className="IndentLeft30">  <p><a href="#P170_12668">3.1.1 Identifying systems important to safety</a></p>  <p><a href="#P180_13948">3.1.2 Ranking identified structures, systems and components on the basis of relative importance to safety</a></p>  <p><a href="#P197_17018">3.1.3 Screening out structures, systems and components</a></p>  </div>  <div className="IndentLeft20">  <p><a href="#P199_17285">3.2 Specifying reliability targets</a></p>  <p><a href="#P213_19732">3.3 Identifying and describing potential failure modes </a></p>  <p><a href="#P217_20261">3.4 Specifying minimum capabilities and performance levels</a></p>  <p><a href="#P222_21674">3.5 Maintenance program</a></p>  <p><a href="#P228_22946">3.6 Inspections, tests, modelling and monitoring</a></p>  </div>  <div className="IndentLeft30">  <p><a href="#P229_22994">3.6.1 Providing for inspections and tests</a></p>  <p><a href="#P239_24332">3.6.2 Modelling</a></p>  <p><a href="#P253_26823">3.6.3 Monitoring performance and reliability</a></p>  <p><a href="#P273_31449">3.6.4 Performing reliability assessments</a></p>  </div>  <div className="IndentLeft20">  <p><a href="#P291_33795">3.7 Implementing a reliability program</a></p>  <p><a href="#P293_33962">3.8 Recording and reporting results of reliability program activities</a></p>  <p><a href="#P298_35334">3.9 Documenting a reliability program</a></p>  </div>  <div className="IndentLeft10">  <p><a href="#P301_35411"><strong>Glossary</strong></a></p>  <p><a href="#P358_41152"><strong>References</strong></a></p>  </div>
<a name="1.0"></a>
<h2 className="reportHeading2"><a name="P98_3124" id="P98_3124"></a>1.0 Introduction</h2>
<a name="1.1"></a>
<h3 className="reportHeading3"><a name="P99_3139" id="P99_3139"></a>1.1 Purpose</h3>  <p>RD/GD-98, <em>Reliability Programs for Nuclear Power Plants</em>, sets out the requirements and guidance of the Canadian Nuclear Safety Commission (CNSC) for the development and implementation of a reliability program for a nuclear power plant (NPP) in Canada. The reliability program assures that the systems important to safety (SIS) shall meet their defined design, and performance criteria at acceptable levels of reliability throughout the lifetime of the facility.</p>
<a name="1.2"></a>
<h3 className="reportHeading3"><a name="P101_3611" id="P101_3611"></a>1.2 Scope</h3>  <p>This regulatory document describes the essential elements of a reliability program, including reliability assessment, modelling, evaluation and monitoring. </p>  <p>The document emphasizes reliability programs during the normal operation phase. However, the general approach applies to all phases of an NPP&#8217;s lifecycle (design, construction, commissioning, start-up, operation and decommissioning).</p>  <p>To limit the risks of an NPP to a reasonable level, the plant must operate within some requisite bounds of overall safety. This overall safety can only be assured when the SIS at the NPP are both capable of adequately performing their purposes and available to do so. Thus, the SIS at NPPs must function at a certain level of reliability.</p>
<a name="1.3"></a>
<h3 className="reportHeading3"><a name="P105_4349" id="P105_4349"></a>1.3 Relevant legislation</h3>  <p>Relevant sections of the <em>Nuclear Safety and Control Act</em> (NSCA) and sections of its associated regulations to this guidance document include:</p>  <ul>
<li> Subsection 24(4) of the NSCA, which stipulates that &#8220;No licence may be issued, renewed, amended or replaced unless, in the opinion of the Commission, the applicant </li>  </ul>  <blockquote>
<p>(<em>a</em>) is qualified to carry on the activity that the licence will authorize the licensee to carry on; and </p>
<p>(<em>b</em>) will, in carrying on that activity, make adequate provision for the protection of the environment, the health and safety of persons and the maintenance of national security and measures required to implement international obligations to which Canada has agreed.&#8221;</p>  </blockquote>  <ul>
<li> Subsection 24(5) of the NSCA, which provides that &#8220;a licence may contain any term or condition that the Commission considers necessary for the purposes of this Act.&#8221;</li>
<li> Paragraphs 12(1)(<em>a</em>) to 12(1)(<em>e</em>) of the <em>General Nuclear Safety and Control Regulations</em>, which stipulate that &#8220;Every licensee shall </li>  </ul>  <blockquote>
<p>(<em>a</em>) ensure the presence of a sufficient number of qualified workers to carry on the licensed activity safely and in accordance with the NSCA, the regulations made under the act and the licence; </p>
<p>(<em>b</em>) train the workers to carry on the licensed activity in accordance with the NSCA, the regulations made under the NSCA and the licence; </p>
<p>(<em>c</em>) take all reasonable precautions to protect the environment and the health and safety of persons and to maintain security; </p>
<p>(<em>d</em>) provide the devices required by the NSCA, the regulations made under the NSCA and the licence and maintain them within the manufacturer&#8217;s specifications&#8221;; </p>
<p><em>(e</em>) require that every person at the site of the licensed activity use equipment, devices, clothing and procedures in accordance with the NSCA, the regulations made under the NSCA and the licence&#8221;.</p>  </blockquote>  <ul>
<li> Section 5 of the <em>Class I Nuclear Facilities Regulations</em>, which stipulates that &#8220;An application for a licence to construct a Class I nuclear facility shall contain the following information in addition to the information required by section 3:</li>  </ul>  <blockquote>
<p>(<em>a</em>)&nbsp;a description of the structures proposed to be built as part of the nuclear facility, including their design and their design characteristics;</p>
<p>(<em>b</em>)&nbsp;a description of the systems and equipment proposed to be installed at the nuclear facility, including their design and their design operating conditions;</p>
<p>(<em>c</em>)&nbsp;a preliminary safety analysis report demonstrating the adequacy of the design of the nuclear facility&#8221;.</p>  </blockquote>  <ul>
<li> Subsection 6(<em>d</em>) of the <em>Class I Nuclear Facilities Regulations</em>, which stipulates that an application for a licence to operate a Class I nuclear facility shall contain, in addition to other information, &#8220;the proposed measures, policies, methods and procedures for operating and maintaining the nuclear facility&#8221;.</li>
<li> Subsection 14(2) of the <em>Class I Nuclear Facilities Regulations</em>, which stipulates that &#8220;Every licensee who operates a Class I facility shall keep a record of </li>  </ul>  <blockquote>
<p>(<em>a</em>) operating and maintenance procedures; (&#8230;)</p>
<p>(<em>c</em>) the results of the inspection and maintenance programs referred to in the licence&#8221;.</p>  </blockquote>  <ul>
<li> Subsection 14(4) of the <em>Class I Nuclear Facilities Regulations</em>, which requires every person who is required by subsection 14(2) of those regulations to keep records of &#8220;operating and maintenance procedures&#8221; and &#8220;the results of the inspection and maintenance programs referred to in the licence&#8221; to retain the required records &#8220;for 10&nbsp;years after the expiry date of the licence to abandon issued in respect of the Class&nbsp;I nuclear facility.&#8221;</li>  </ul>
<a name="1.4"></a>
<h3 className="reportHeading3"><a name="P126_7922" id="P126_7922"></a>1.4 National and international documents</h3>  <p>Key principles and elements used in developing this document are consistent with national and international documents, including the following:</p>  <ul>
<li> Institute of Electrical and Electronics Engineers, IEEE 933-1999, <em>Guide for the Definition of Reliability Program Plans for Nuclear Power Generating Stations</em>, September 1999</li>
<li> Institute of Electrical and Electronics Engineers, IEEE <em>Guide for General Principles of Reliability Analysis of Nuclear Power Generating Station Safety Systems</em>, 1987</li>
<li> International Atomic Energy Agency, IAEA TECDOC-524, <em>Status, Experience and Future Prospects for the Development of Probabilistic Safety Criteria</em>, IAEA, Vienna, 1989</li>  </ul>  <p>A complete list of Canadian and international reference documents is provided at the end of this document. </p>
<a name="2.0"></a>
<h2 className="reportHeading2"><a name="P132_8727" id="P132_8727"></a>2.0 Objective and requirements of reliability programs</h2>
<a name="2.1"></a>
<h3 className="reportHeading3"><a name="P133_8780" id="P133_8780"></a>2.1 Objective</h3>  <p>The reliability program shall ensure that all SIS at an NPP function reliably, in accordance with the relevant design and performance criteria, including any safety goals of the NPP and CNSC licence requirements.</p>
<a name="2.2"></a>
<h3 className="reportHeading3"><a name="P135_9005" id="P135_9005"></a>2.2 Requirements</h3>  <p>A reliability program for an NPP shall:</p>  <ol>
<li> identify, using a systematic method, all SIS by:
<ol className="lower-alpha">
<li> identifying NPP structures, systems and components (SSCs) associated with the initiation, prevention, detection or mitigation of any failure sequence that could lead to damage of fuel, associated release of radionuclide or both</li>
<li> ranking the identified SSCs on the basis of their relative importance to safety</li>
<li> screening out SSCs that do not contribute significantly to plant safety (the remaining SSCs are the systems important to safety)</li>
</ol>
</li>
<li> specify reliability targets for the SIS at the NPP</li>
<li> identify and describe the potential failure modes of the SIS at the NPP</li>
<li> specify the minimum capabilities and performance levels that the SIS must attain to achieve reliabilities that are consistent with NPP safety targets and regulatory requirements</li>
<li> provide information to the maintenance program to maintain the effectiveness of the SIS at the NPP</li>
<li> provide for inspections, tests, modelling, monitoring or other measures to effectively assess the reliability of the SIS at the NPP</li>
<li> include provisions to assure, verify and demonstrate that the program is implemented effectively</li>
<li> include provisions for recording and reporting the results of program activities, including the results of assessments, inspections, tests or monitoring of the reliability of the SIS at the NPP</li>
<li> clearly and comprehensively document the activities, attributes, elements, results and administration of the reliability program, including:
<ol className="lower-alpha">
<li> the activities that make up the program</li>
<li> procedures and schedules for conducting the program activities</li>
<li> the licensee&#8217;s organization for managing and implementing the program, including the specific positions, roles and responsibilities of the persons involved</li>
<li> the methodology used to identify, rank and assign reliability targets to the SIS at the NPP</li>
<li> the list of SIS at the NPP</li>
<li> the reliability targets for each of the SIS at the NPP</li>
<li> potential failure modes of the SIS at the NPP</li>
<li> methods used to determine the potential failure modes of the SIS at the NPP</li>
<li> reliability assessments, inspections, monitoring, testing, verifications, and recording and reporting activities that the licensee will carry out to assure, verify, demonstrate or document that the reliability program is implemented correctly and effectively in accordance with regulatory requirements</li>
<li> the results of the reliability assessments, inspections, monitoring, testing, verifications, and reporting activities that the licensee carried out as part of the reliability program</li>
</ol>
</li>  </ol>
<a name="3.0"></a>
<h2 className="reportHeading2"><a name="P159_11596" id="P159_11596"></a>3.0 Guidance for Reliability Programs</h2>  <p>An NPP&#8217;s reliability program should possess the following elements to accomplish its objective of enhancing plant availability and safety:</p>  <ul>
<li> performance monitoring</li>
<li> performance evaluation</li>
<li> problem prioritization</li>
<li> problem analysis and corrective action recommendation</li>
<li> corrective action implementation and feedback</li>  </ul>  <p>These elements are also shown in the equipment reliability process top-level diagram provided in INPO AP-913, <em>Equipment Reliability Process Description</em> (Revision 1), a document issued by the Institute of Nuclear Power Operations. The reliability of the SIS should be considered for different power levels and during start-up and shutdown of the reactor. The impact of the post-accident mission time should be considered for all aspects of the reliability program.</p>  <p>The effort and resources allocated to the reliability program for each of the SIS should be commensurate with the importance of the system to the safe operation of the NPP.</p>
<a name="3.1"></a>
<h3 className="reportHeading3"><a name="P169_12591" id="P169_12591"></a>3.1 Using systematic methods to identify and rank systems important to safety</h3>
<a name="3.1.1"></a>
<h4 className="reportHeading4"><a name="P170_12668" id="P170_12668"></a>3.1.1 Identifying systems important to safety</h4>  <p>NPP licensees should identify and document all SIS associated with the initiation, prevention, detection or mitigation of any failure sequence that could lead to damage of fuel, associated release of radionuclide, or both. </p>  <p>SIS should be identified using a systematic approach. The probabilistic safety assessment (PSA) is the most thorough and systematic method to do so, and includes the insights from a Level-2 PSA, shutdown PSA, and external events and hazards assessments. However, other principles and information &#8211; such as defence-in-depth, results of deterministic safety analysis, operating experience and expert judgment &#8211; should also be considered when identifying SIS. </p>  <p>The criteria for determining SIS are based on:</p>  <ul>
<li> safety function(s) to be performed</li>
<li> consequence of failure</li>
<li> probability that the SSCs will be called upon to perform the safety function </li>
<li> the length of time between a postulated initiating event and the point when the SSCs will be called upon to operate, and the expected duration of that operation</li>  </ul>  <p>The list of  SIS may be revised in light of emerging operational data, system changes, new failure data, or when other new information is provided. The basis for revision must be fully documented.</p>
<a name="3.1.2"></a>
<h4 className="reportHeading4"><a name="P180_13948" id="P180_13948"></a>3.1.2 Ranking identified structures, systems and components on the basis of relative importance to safety</h4>  <p>Systems identified as important to safety should be ranked on the basis of their relative importance to safety and according to their contribution to the overall plant risk (risk of severe core damage and risk of associated radioactive releases). </p>  <p>This ranking should be performed using the results of a plant-specific PSA. However, in the absence of a PSA, engineering judgment may be used. The criteria used to rank the systems should be properly documented.</p>  <h4 className="reportHeading4">3.1.2.1 Using probabilistic safety assessment to rank systems important to safety </h4>  <p>The following importance measures are used as criteria to assess the relative contribution of systems to plant risk:</p>  <ul>
<li> risk-increase ratio, also called risk achievement worth (RAW) </li>
<li> Fussell-Vesely (FV) importance</li>  </ul>  <p>The following points provide criteria and guidance for identifying SIS:</p>  <ul>
<li> Any system with FV &#8805; 0.05 (or component FV &#8805; 0.005) and RAW &#8805; 2 should be considered important to safety. </li>
<li> If a system has FV &#8805; 0.05 (or component FV &#8805; 0.005) or RAW &#8805; 2, detailed justification should be provided if it is excluded from the list of systems important to safety</li>
<li> Consideration should be given to those components identified as important to safety by the component screening criteria, and for which the associated system is screened out by the system-level screening criteria.</li>
<li> Expert panels can be used to complement the PSA review group for consideration of the deterministic safety analysis and defence-in-depth principles. The rationale for the expert panel&#8217;s decision to add or remove any system in the list of identified SIS should be fully documented.</li>
<li> Insights from existing PSAs should be used to the extent practicable for the purpose of determining SIS, with consideration given to the quality, scope and limitations of the PSA. The gap between the existing PSA scope and quality, and the requirements in CNSC Regulatory Document S-294, <em>Probabilistic Safety Assessment (PSA) for Nuclear Power Plants</em>, should be compensated for by other means/considerations to be factored into the determination of the list of SIS.</li>
<li> The list of SIS should be updated with consideration given to the PSA revisions, updates and improvements aimed at the requirements listed in S-294.</li>
<li> The insights from Level-2 PSA (small and large release), the shutdown PSA, and external events and hazards assessment should be considered when identifying SIS.</li>  </ul>  <h4 className="reportHeading4">3.1.2.2 Using other means to identify systems important to safety</h4>  <p>If a plant does not have a PSA, then the identification of SIS starts by identifying all systems associated with the initiation, prevention, detection or mitigation of any failure sequence that could lead to fuel damage, associated release of radionuclide or both. The identification process will be completed by reviewing the primary list of systems; this review is to identify only those systems that contribute significantly to plant safety, based on their importance to safety functions.</p>
<a name="3.1.3"></a>
<h4 className="reportHeading4"><a name="P197_17018" id="P197_17018"></a>3.1.3 Screening out structures, systems and components</h4>  <p>SSCs that do not contribute to plant safety may be screened out of the reliability program. If the licensee declares that specific SSCs are unimportant to safety, the rationale for this should be fully documented.</p>
<a name="3.2"></a>
<h3 className="reportHeading3"><a name="P199_17285" id="P199_17285"></a>3.2 Specifying reliability targets</h3>  <p>The objective of setting reliability targets for SIS is to establish a reference point against which to judge system performance. The reliability targets that the licensee assigns to SIS should be consistent with the NPP&#8217;s safety goals and should consider industry-wide operating experience where practicable. Where no safety goals are in place, reliability targets should be based on good engineering judgment, accounting for dependencies between systems. A single system may be assigned multiple reliability targets, depending on different failure criteria.</p>  <p>The licensee should monitor the performance or condition of SIS against licensee-established targets, as a way to reasonably ensure that the SIS are capable of fulfilling their intended functions. When the performance or condition of any structure, system or component fails to meet established targets, appropriate corrective action should be taken.</p>  <p>Reliability targets may be developed during the initial phase of reliability programs. These targets are intended to be compared with actual plant performance, in order to identify deviations from expected performance. </p>  <p>The <em>IEEE</em> <em>Guide for General Principles of Reliability Analysis of Nuclear Power Generating Station Safety Systems</em> issued by the Institute of Electrical and Electronics Engineers gives the basis for establishing these numerical targets, which are based on the following:</p>  <ul>
<li> frequency of demand</li>
<li> consequence of failure</li>
<li> risk</li>  </ul>  <p>The International Atomic Energy Agency&#8217;s IAEA TECDOC-524,<em> Status, Experience and Future Prospects for the Development of Probabilistic Safety Criteria</em>, provides the principles for deriving numerical objectives.</p>  <p>The selection of reliability targets should maintain a balance between the prevention and mitigation of events. The following principles apply:</p>  <ul>
<li> Reliability targets for special safety systems should be set no lower than 0.999. This is consistent with established CNSC limits. </li>
<li> For all other poised SIS, the target should be set at lower than 120% of the baseline performance of the system.</li>  </ul>  <p>Reliability targets should be revised in light of emerging operational data, system changes or new failure data, or when other new information is provided. The basis for revision must be fully documented.</p>  <p>Appropriate corrective action should be taken whenever the performance or condition of a system important to safety does not meet established goals.</p>
<a name="3.3"></a>
<h3 className="reportHeading3"><a name="P213_19732" id="P213_19732"></a>3.3 Identifying and describing potential failure modes</h3>  <p>The potential failure modes of SIS should be identified, in order to determine necessary maintenance activities and ensure reliable system operation. Failure modes include failure to start on demand, and failure to run for a given mission time.</p>  <p>Failure modes can be identified from failure history or through the use of qualitative analytical methods, if the failure history is not available. </p>  <p>Any new identified failure mode should be incorporated into the reliability models.</p>
<a name="3.4"></a>
<h3 className="reportHeading3"><a name="P217_20261" id="P217_20261"></a>3.4 Specifying minimum capabilities and performance levels</h3>  <p>For each success criterion of a system important to safety, the minimum capabilities and performance levels should be defined. These capabilities and performance levels should be expressed in physical terms (e.g., pressure, flow, voltage, intensity).</p>  <p>A given system important to safety can present several failure modes (or success criteria), according to the sequence of events where it is needed. For each of these sequences, the success criteria for the system must be defined. </p>  <p>Failure criteria for a system important to safety should be stated in terms of the system not performing its function when required to do so. The failure criteria should be explicitly described or referenced in the reliability program document, and they should be consistent with the definition of system failure criteria used in other analyses and/or other documents that support the operating licence. SIS may have several different failure criteria, depending on the plant state, accident condition or consequences of the failure.</p>  <p>It is advocated to use the minimum allowable performance standards for the models required by this document (RD/GD-98), given that the conservative deterministic assumptions are in line with this document&#8217;s scope and intent for defence-in-depth and design for reliability. It is also acceptable to use realistic assumptions from PSA models.</p>
<a name="3.5"></a>
<h3 className="reportHeading3"><a name="P222_21674" id="P222_21674"></a>3.5 Maintenance program </h3>  <p>The primary objective of a maintenance program is to maintain the plant equipment and systems in accordance with applicable regulations, codes and standards (including CNSC Regulatory Document S-210, <em>Maintenance Programs for Nuclear Power Plants</em>), vendor recommendations and previous experience, so that their performance meets reliability targets. </p>  <p>Preventive maintenance and consistent corrective maintenance may lead to improvements in failure trends. Reliability-centered maintenance is one technique that uses reliability principles to improve maintenance.</p>  <p>The modelling of the probability of failure of SIS includes information from the maintenance program. The maintenance program should also include all activities (such as surveillance) that are credited in the reliability models. As mentioned in section 3.3, the identification of the failure mode will determine maintenance activities.</p>  <p>Modification of the maintenance program could be recommended if the results of the reliability assessment show that the system is not meeting its target.</p>  <p>The reliability modelling of SIS provides information on how the maintenance program affects system reliability. This information is fed back into the maintenance program to improve its effectiveness.</p>
<a name="3.6"></a>
<h3 className="reportHeading3"><a name="P228_22946" id="P228_22946"></a>3.6 Inspections, tests, modelling and monitoring</h3>
<a name="3.6.1"></a>
<h4 className="reportHeading4"><a name="P229_22994" id="P229_22994"></a>3.6.1 Providing for inspections and tests</h4>  <p>Adequate testing programs for SIS should be in place as specified in S-210. </p>  <p>Where feasible, surveillance activities on redundant equipment should not be performed at the same time or using the same personnel. This is to avoid introducing a common-cause failure.</p>  <p>Sufficient testing before, during and after plant shutdowns should ensure that the assumptions of fault discovery intervals made in the reliability assessments remain valid at all times.</p>  <p>The frequencies, timing and substance of surveillance activities should be revised in light of emerging operational data, plant changes, failure data, or other new information &#8211; provided the reliability assessment is revised accordingly and that consistency with reliability targets is maintained.</p>  <p>If a test is missed, the following provisions apply:</p>  <ol>
<li> A grace period is allowed. This is generally set at 25% of the test interval, with an upper limit of three months (or other time period, with the agreement of the CNSC).</li>
<li> The procedure used by the licensee to approve deferral of tests should be submitted to the CNSC for acceptance.</li>
<li> All tests that have been deferred, along with approval references, should be listed in the annual reliability report.</li>
<li> All records of approval of test deferrals should be available for inspection upon request.</li>  </ol>
<a name="3.6.2"></a>
<h4 className="reportHeading4"><a name="P239_24332" id="P239_24332"></a>3.6.2 Modelling</h4>  <p>The model used to describe the system should accurately reflect the system&#8217;s current configuration. The level of detail of the model should be such that dependencies are clearly identified, but also limited to equipment failure modes. (The failure mechanism could be of interest for specific purposes, but should not be included in the models required by this document). </p>  <p>The model could include human recovery actions (actions to mitigate system failure) if an equipment failure&#8217;s impact on the failure of the entire system is developing slowly and the equipment failure can be fixed in the meantime.</p>  <p>The model should include, to the extent practicable:</p>  <ul>
<li> Every component and structure and their failure modes that could result in dependence between systems important to safety. Any new identified failure mode should be incorporated in the reliability models.</li>
<li> Human errors (such as maintenance errors and non-detection of annunciate conditions) that could occur before the initiating event and that could contribute to failure of the system function.</li>
<li> Maintenance or testing activities that impair component loops or channels while being performed.</li>
<li> Failure data that represents the actual performance of the modelled components as accurately as possible. Site-specific failure data should be compared to the failure data used in the assessment. Where the information is insufficient, relevant generic failure data may be used to derive valid site-specific data. Generic failure data should preferably be extracted from other operating experience and should closely reflect the actual performance of the component.</li>
<li> Estimation of human performance reliability that considers all conditions, shaping factors and other considerations specific to the plant, according to internationally established techniques for human reliability analysis.</li>
<li> Consideration of the potential impact of uncertainties.</li>
<li> An assessment of the importance, contribution and sensitivity of each component failure to the reliability of the entire system.</li>
<li> On-demand failure, as well as any latent faults that are detectable through testing (for reliability models).</li>
<li> A comparison to the reliability targets (for on-demand models only). The mission failure rate of relevant components should be tracked against mission testing programs.</li>
<li> A support system (for SIS reliability models, and if the support system is exclusively devoted to the operation of systems important to safety).</li>  </ul>
<a name="3.6.3"></a>
<h4 className="reportHeading4"><a name="P253_26823" id="P253_26823"></a>3.6.3 Monitoring performance and reliability</h4>  <p>Performance monitoring relies on gathering pertinent failure detection and in-plant reliability information. This includes both reliability monitoring (e.g., observation of failure frequency, outage rate, maintenance durations, outage times) and condition monitoring (e.g., observation of conditions related to failure, such as degraded performance, and/or changes in equipment parameters as measured by non-destructive tests, such as ultrasonic inspections, electrical continuity tests and acoustic vibration monitoring). </p>  <p>The reliability monitoring of SIS involves the review, recording, and trending of the reliability performance or condition of all SIS. This is to ensure they remain capable of meeting their functional specifications and will perform consistently with their specified reliability targets and reliability assessments. The licensee should establish a basis for excluding any specific components identified in the reliability assessments from reliability monitoring. This basis should be related to the limited likelihood or safety impact of component failure modes.</p>  <p>If a reliability problem is diagnosed, the reliability program should be capable of determining the cause of the problem and devising corrective actions to rectify it. The reliability program should have the means to monitor the efficacy of corrective actions, so it can ensure the proposed solution is adequate.</p>  <h4 className="reportHeading4">3.6.3.1 Monitoring the performance of systems</h4>  <p>The reliability performance of all SIS should be monitored to assure that they remain capable of meeting their functional specifications and that they perform consistently with their specified targets. This monitoring process should include:</p>  <ul>
<li> Identification of incidents when SIS do not meet their defined specifications (including periods of scheduled out-of-service and occurrences of initiating events). An assessment should be made with regard to the severity of the condition and identification of the accident sequences affected. These incidents are reportable events, in accordance with CNSC Regulatory Document RD-99.1, <em>Reporting</em> <em>Requirements for Operating Nuclear Power Plants: Events</em>.</li>
<li> Assessment of the consequences of unsafe component failures, in order to determine the impact on the reliability of the system.</li>
<li> Consideration of the reliability of SIS during the planning of operational and maintenance activities. (The reliability monitoring of SIS should include an assessment of the impact of these activities on reliability performance and consistency with reliability targets. If a reduction in reliability cannot be avoided, the impact on any safety goals of the facility must be assessed.)</li>  </ul>  <h4 className="reportHeading4">3.6.3.2 Monitoring the performance of components </h4>  <p>The performance or condition of all components of SIS should be monitored. This monitoring of component reliability should include:</p>  <ul>
<li> Identification of components whose failure decreases the reliability of the system important to safety.</li>
<li> Assessment and recording of every failure of a component that could affect the reliability of the whole system to which it belongs, as soon as practicable after the failure has been discovered.</li>
<li> Analysis of component failures to determine if trends exist. If trends are found, their existence should be explained and their importance assessed in relation to the reliability targets.</li>
<li> Analysis of component failures to determine if failures were due to non-random causes (such as being preventable by maintenance; aging or wear; or a design or installation problem). These failures represent safety problems of a different nature than what was previously reported and are therefore reportable events in accordance with CNSC Regulatory Document RD-99.1,<em> Reporting Requirements for Operating Nuclear Power Plants: Events.</em></li>
<li> Assessment of component failure(s) to ascertain if the cause of the failure(s) may be common to other components. Common-cause failures should be identified and recorded. The International Common-Cause Data Exchange protocol might be used to record the common-cause failure for site-specific failure data. To derive accurate site-specific failure data for SIS, the details of the failure history and in-service records for all relevant components should be recorded.</li>  </ul>  <h4 className="reportHeading4">3.6.3.3 Monitoring human performance </h4>  <p>Human actions that potentially could impact the reliability of SIS should be identified and monitored. The monitoring of human performance should include:</p>  <ul>
<li> recording of the occurrence of human errors</li>
<li> a comparison of actual site-specific human performance with that used in the reliability assessment</li>  </ul>
<a name="3.6.4"></a>
<h4 className="reportHeading4"><a name="P273_31449" id="P273_31449"></a>3.6.4 Performing reliability assessments</h4>  <p>Reliability assessments evaluate the predicted reliability of SIS, in order to demonstrate their ability to meet their specified reliability targets for all relevant plant states. The methods used to perform the assessment are at the discretion of the licensee. A system important to safety may require several different reliability assessments to account for different success criteria.</p>  <p>All modelled systems should be evaluated quantitatively, in order to derive their predicted reliabilities and to demonstrate they are consistent with their reliability targets. The assessments should reflect the actual operation, surveillance and maintenance activities of the systems as accurately as possible.</p>  <p>Reliability assessments should include:</p>  <ul>
<li> predicted reliability</li>
<li> observed reliability</li>
<li> specific reliability indices</li>  </ul>  <h4 className="reportHeading4">3.6.4.1 Calculating predicted reliability</h4>  <p>The future predicted reliability is assessed using current data, which should be compared to the values obtained for the current and previous years as well as to the target. The reliability assessments should be re-evaluated annually using the latest relevant failure data. Changes in the predicted probability from the value reported in the previous year should be explained.</p>  <h4 className="reportHeading4">3.6.4.2 Calculating observed reliability</h4>  <p>Observed reliability is calculated using actual operating performance.</p>  <h4 className="reportHeading4">3.6.4.3 Reliability indices</h4>  <p>Reliability indices are intended to capture trends in the SIS. </p>  <p>The following indices should be reported according to each system&#8217;s specificity:</p>  <ul>
<li> the frequency of failure of active systems important to safety </li>
<li> the probability of failure of poised systems important to safety</li>  </ul>  <p>The licensee should perform a comparison between predicted reliability, reliability indices and reliability targets. Any differences should be explained.</p>  <p>The licensee should establish criteria for determining if an operational event, system change, or acquisition of new knowledge warrants immediate or near-term revision of system reliability models. As a minimum, system and procedural changes, emerging operational data, new system-related knowledge, and the latest failure data should be reassessed and documented annually. The reliability assessment report should be updated to reflect changes to the model or new conclusions about the model results.</p>
<a name="3.7"></a>
<h3 className="reportHeading3"><a name="P291_33795" id="P291_33795"></a>3.7 Implementing a reliability program </h3>  <p>Following a CNSC staff inspection or request, a licensee should demonstrate effective implementation of its reliability program.</p>
<a name="3.8"></a>
<h3 className="reportHeading3"><a name="P293_33962" id="P293_33962"></a>3.8 Recording and reporting results of reliability program activities</h3>  <p>The CNSC should have access to the results of reliability programs at nuclear power plants. These results may be obtained at any time through periodic inspections of reliability programs and from reports prepared by licensees.</p>  <p>Results could be recorded in the form of operational logs, work orders, work plans, work permits, test results and calibration records. The review of this information is required to assure accurate, timely assessment and reporting of the reliability performance of SIS. This information is also reviewed in order to identify and help avoid reductions in the reliability of these systems.</p>  <p>Licensees have discretion as to how they structure their reports that describe reliability assessments of SIS. However, licensees should report the results of their reliability programs according to CNSC Regulatory Document RD-99.1, <em>Reporting Requirements for Operating Nuclear Power Plants</em>. Guidance on what is required in the annual report on the risk and reliability of the NPP, along with a sample template, can be found in CNSC Guidance Document GD-99.1,<em> Guide to the Reporting Requirements for Operating Nuclear Power Plants</em>. </p>  <p>The comparison between predicted reliability, reliability performance indices and reliability targets should be reported. Any differences should be explained.</p>
<a name="3.9"></a>
<h3 className="reportHeading3"><a name="P298_35334" id="P298_35334"></a>3.9 Documenting a reliability program</h3>  <p>This does not require specific guidance.</p>
<a name="#RDsection[28]#"></a>
<h2 className="reportHeading2"><a name="P301_35411" id="P301_35411"></a>Glossary</h2>  <dl className="margins-removed">
<dt>common-cause failure</dt>
<dd>A concurrent failure of two or more structures, systems or components due to a single specific event or cause such as a natural phenomenon (earthquake, tornado, flood, etc.), design deficiency, manufacturing flaw, operation and maintenance error, human-induced destructive event, aging effect or other reason.</dd>
<dt>condition monitoring</dt>
<dd>Continuous or periodic inspections, measurements or trending of the performance or physical characteristics of SSCs, in order to indicate current or future performance and the potential for failure.</dd>
<dt>critical components</dt>
<dd>Equipment whose failure will result in complete system failure or functional failure.</dd>
<dt>degraded state</dt>
<dd>A state of equipment failure that is gradual, partial or both, and that effectively leads to a termination of the equipment&#8217;s ability to perform its required function.</dd>
<dt>failure </dt>
<dd>The inability of a structure, system or component to function as per its design. </dd>
<dt>failure criterion</dt>
<dd>The measure point at which a system, structure or component is considered unable to meet its success criterion.</dd>
<dt>Fussell-Vesely (FV) importance</dt>
<dd>The FV parameter for a basic event is defined as the fractional decrease in the core damage frequency if the basic event in question can never occur; that is, the component is perfectly reliable with respect to that basic event &#8211; it is never failed or out of service.</dd>
<dt>importance measures</dt>
<dd>A quantitative analysis to determine the importance of variations in equipment reliability to system risk and/or reliability.</dd>
<dt>incipient failure</dt>
<dd>An imperfection in the state or condition of equipment that could result in a degraded or immediate failure if corrective action is not taken.</dd>
<dt>initiating event</dt>
<dd>An identified event<em> </em>that leads to anticipated operational occurrences<em> </em>or accident conditions.</dd>
<dt>maintenance </dt>
<dd>Organized activities, both administrative and technical, to keep structures, systems or&nbsp; components in good operating condition and to ensure they function according to their design. </dd>
<dt>nuclear power plant (NPP)</dt>
<dd>Any nuclear fission reactor installation that has been constructed to generate electricity on a commercial scale and that is a Class IA nuclear facility as defined under the <em>Class I Nuclear Facilities Regulations.</em></dd>
<dt>observed reliability</dt>
<dd>A reliability measure that is calculated using actual operating performance.</dd>
<dt>performance evaluation</dt>
<dd>Analysis in terms of initial objectives and estimates and that is usually made on site, in order to provide information on operating experience and to identify required corrective actions.</dd>
<dt>performance monitoring</dt>
<dd>The determination of whether equipment is operating or is capable of operating within specific limits.</dd>
<dt>predicted reliability</dt>
<dd>The predicted probability that a system will meet its success criterion when required to do so. This is calculated using current reliability data.</dd>
<dt>reliability </dt>
<dd>The ability of a system, structure or component to perform, in accordance with its defined specifications,its required function under given conditions for a defined time period or upon demand.</dd>
<dt>reliability-centered maintenance</dt>
<dd>A series of orderly steps for identifying system and subsystem functions, functional failures, and dominant failure modes, prioritizing them, and selecting applicable and effective preventive maintenance tasks to address the classified failure modes.</dd>
<dt>reliability monitoring </dt>
<dd>Direct monitoring of reliability parameters of a plan, system, or equipment (for example, failure frequency, downtime due to the maintenance activities, or outage rate).</dd>
<dt>reliability targets </dt>
<dd>The reliability goals to be achieved by the plant systems. These targets are intended to be compared with actual plant performance, in order to identify deviations from expected performance.</dd>
<dt>risk</dt>
<dd>The chance of injury or loss, defined as a measure of the probability and severity of an adverse effect (consequences) to health, property, the environment or other things of value; mathematically, it is the probability of occurrence (likelihood) of an event multiplied by its magnitude (severity).</dd>
<dt>risk-increase ratio (risk achievement worth [RAW]) </dt>
<dd>The factor by which core damage frequency increases when the basic event has occurred with certainty.</dd>
<dt>safety goals</dt>
<dd>A nuclear power plant&#8217;s probabilistic goals that can be expressed in terms of frequency of severe core damage or frequency of release of radionuclides. Safety goals are set to meet safety objectives, in order to protect reactor facility staff, the public and the environment by establishing and maintaining effective defences against the release of the radiological hazards. </dd>
<dt>safety systems </dt>
<dd>Systems to ensure the safe shutdown of a reactor or residual heat removal from the reactor core, or to limit the consequences of anticipated operational occurrences and design basis accidents.</dd>
<dt>structures, systems and components (SSC) </dt>
<dd>A general term encompassing all elements (except human factors) of a facility or activity that contribute to protection and safety. Structures are passive elements such as buildings, vessels or shielding. Systems comprise several components that are assembled in order to perform specific (active) functions. Components are discrete elements of a system such as wires, transistors, integrated circuits, motors, relays, solenoids, pipes, fittings, pumps, tanks, and valves. </dd>
<dt>systems important to safety (SIS)</dt>
<dd>Structures, systems and components of a nuclear power plant associated with the initiation, prevention, detection or mitigation of any failure sequence and that have the most significant impact in reducing the possibility of damage to fuel, associated release of radionuclide or both. </dd>
<dt>success criterion</dt>
<dd>A criterion for a structure, system or components that designates the minimum functional capability and performance levels required for effectiveness.</dd>  </dl>
<a name="#RDsection[29]#"></a>
<h2 className="reportHeading2"><a name="P358_41152" id="P358_41152"></a>References</h2>  <ol>
<li> Canadian Nuclear Safety Commission, S-98/Rev. 1, <em>Reliability Programs for Nuclear Power Plants.</em></li>
<li> Institute of Electrical and Electronics Engineers, IEEE 933-1999, <em>Guide for the Definition of Reliability Program Plans for Nuclear Power Generating Stations</em>, September 1999.</li>
<li> Institute of Nuclear Power Operations, INPO AP-913, <em>Equipment Reliability Process Description</em> AP-913, Revision 1, November 2001.</li>
<li> Institute of Electrical and Electronics Engineers, <em>IEEE</em> <em>Guide for General Principles of Reliability Analysis of Nuclear Power Generating Station Safety Systems</em>, 1987.</li>
<li> International Atomic Energy Agency, IAEA TECDOC-524,<em> Status, Experience and Future Prospects for the Development of Probabilistic Safety Criteria</em>, IAEA, Vienna, 1989.</li>
<li> Canadian Nuclear Safety Commission, R-7, <em>Requirements for Containment Systems for CANDU Nuclear Power Plants</em>, February 1991.</li>
<li> Canadian Nuclear Safety Commission, R-8, <em>Requirements for Shutdown Systems for CANDU Nuclear Power Plants</em>, February 1991.</li>
<li> Canadian Nuclear Safety Commission, R-9, <em>Requirements for Emergency Core Cooling Systems for CANDU Nuclear Power Plants</em>, November 2008.</li>
<li> Canadian Nuclear Safety Commission, RD-337, <em>Design</em> <em>of</em> <em>New</em> <em>Nuclear Power Plants</em>,&nbsp;November 2008.</li>
<li> Canadian Nuclear Safety Commission, S-210, <em>Maintenance Programs for Nuclear Power Plants</em>, July 2007.</li>
<li>11. Canadian Nuclear Safety Commission, RD-99.1, <em>Reporting Requirements for Operating Nuclear Power Plants: Events</em>, publication anticipated fall 2011.</li>
<li> Canadian Nuclear Safety Commission, GD-99.1, <em>Guide to the Reporting Requirements for Operating Nuclear Power Plants: Events</em>, publication anticipated fall 2011.</li>
<li> Canadian Nuclear Safety Commission, RD-99.2, <em>Reporting Requirements for Operating Nuclear Power Plants: Compliance Monitoring</em>, publication anticipated fall 2011.</li>
<li> Canadian Nuclear Safety Commission, GD-99.2, <em>Guide to the Reporting Requirements for Operating Nuclear Power Plants: Compliance Monitoring</em>, publication anticipated fall 2011.</li>  </ol>

                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }