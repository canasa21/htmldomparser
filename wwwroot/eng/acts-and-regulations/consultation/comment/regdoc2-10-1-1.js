import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "en",
                pageTitle: "Draft for Public Consultation", 
                dateModified: "2013-09-25",
                langToggleUrl: "/fra/acts-and-regulations/consultation/comment/regdoc2-10-1-1"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<h2>REGDOC-2.10.1: Nuclear Emergency Preparedness and Response</h2>
<a name="preface"></a>
<h2>Preface</h2>  <p>This regulatory document&nbsp;is part of the CNSC&#39;s&nbsp;Emergency Management and Fire Protection series of regulatory documents. The full&nbsp;list of regulatory document series&nbsp;is included in the back of this document and can be found on the CNSC&#39;s Web site at <a href="/eng/acts-and-regulations/regulatory-documents/index">nuclearsafety.gc.ca/regulatory-documents</a></p>  <p>REGDOC-2.10.1, <em>Nuclear Emergency Preparedness and Response</em>, sets out the emergency preparedness requirements and guidance of the Canadian Nuclear Safety Commission (CNSC) related to the development of emergency measures for licensees and licence applicants of Class I nuclear facilities and uranium mines and mills to satisfy: </p>  <ul>
<li>the requirements of subsection 24(4) of the <em>Nuclear Safety and Control Act</em>, by demonstrating that the applicant will, in carrying on the proposed activity, make provision for the protection of the environment, the health and safety of persons, and the maintenance of national security and measures required to implement international obligations to which Canada has agreed</li>
<li>paragraph 6(<em>k</em>) of the <em>Class I Nuclear Facilities Regulations</em> and subparagraph 3(<em>c</em>)(<em>x</em>) of the <em>Uranium Mines and Mills Regulations</em></li>  </ul>  <p>REGDOC-2.10.1 lists and discusses the requirements and guidance that licence applicants and licensees shall implement and consider in the design of their emergency preparedness programs (EP programs). EP programs are based on four components: planning basis; program management; response plan and procedures; and preparedness. These components are considered in the development of plans to prevent or mitigate the effects of accidental releases from a Class I nuclear facility or a uranium mine or mill. </p>  <p>REGDOC-2.10.1 is based on International Atomic Energy Agency (IAEA) guidance, and the following key IAEA documents were used in its development:</p>  <ul>
<li><em>Preparedness and Response for a Nuclear or Radiological Emergency</em>, IAEA Safety Standards Series GS-R-2, Vienna, 2002</li>
<li><em>Arrangements for Preparedness for a Nuclear or Radiological Emergency,</em> IAEA Safety Standards Series GS-G-2.1, Vienna, 2007</li>
<li><em>Preparation, Conduct and Evaluation of Exercises to Test Preparedness for a Nuclear or Radiological Emergency</em>, EPR-Exercise, Vienna, 2005</li>  </ul>  <p>Applicants and licensees may use these IAEA documents for further guidance, as required.</p>
<p className="border-highlight"><strong>Important note:</strong> Where referenced in a licence either directly or indirectly (such as through licensee-referenced documents), this document is part of the licensing basis for a regulated facility or activity.<br /><br />
The licensing basis sets the boundary conditions for acceptable performance at a regulated facility or activity, and establishes the basis for the CNSC&#39;s compliance program for that regulated facility or activity.<br /><br />
Where this document is part of the licensing basis, the word &#8220;shall&#8221; is used to express a requirement to be satisfied by the licensee or licence applicant. &#8220;Should&#8221; is used to express guidance or that which is advised. &#8220;May&#8221; is used to express an option or that which is advised or permissible within the limits of this regulatory document. &#8220;Can&#8221; is used to express possibility or capability.<br /><br />  Nothing contained in this document is to be construed as relieving any licensee from any other pertinent requirements. It is the licensee&#39;s responsibility to identify and comply with all applicable regulations and licence conditions.</p>
<p>Other health, safety and environmental considerations may dictate adherence to additional requirements. It is the responsibility of licensees to identify any other applicable legislation or standards.</p>  <p>REGDOC-2.10.1 supersedes Regulatory Guide G-225, <em>Emergency Planning at Class I Nuclear Facilities and Uranium Mines and Mills</em>, published in 2001, as well as Regulatory Document RD-353, <em>Testing the Implementation of Emergency Measures</em>, published in 2008. It also fulfills a recommendation made by the CNSC Fukushima Task Force and the External Advisory Committee to strengthen licensees&#39; emergency preparedness programs.</p>
<a name="toc"></a>
<h2>Table of Contents</h2>  <div className="IndentLeft10">  <p><a href="#P111_6238"><strong>1.0 Introduction</strong></a></p>  </div>  <div className="IndentLeft20">  <p><a href="#P112_6253">1.1 Purpose</a></p>  <p><a href="#P114_6580">1.2 Scope</a></p>  <p><a href="#P119_8054">1.3 Accident management and its links with emergency preparedness and the principle of defence-in-depth</a></p>  <p><a href="#P172_12495">1.4 Overview of Canada&#39;s nuclear emergency planning framework</a></p>  <p><a href="#P177_14481">1.5 Relevant legislation</a></p>  </div>  <div className="IndentLeft10">  <p><a href="#P188_17451"><strong>2.0 Emergency Preparedness Program</strong></a></p>  </div>  <div className="IndentLeft20">  <p><a href="#P196_18355">2.1 Planning basis</a></p>  <p><a href="#P207_20092">2.2 Program management</a></p>  <p><a href="#P221_22143">2.3 Emergency response plan and procedures</a></p>  </div>  <div className="IndentLeft30">  <p><a href="#P236_23506">2.3.1 Emergency response organization and staffing</a></p>  <p><a href="#P255_25727">2.3.2 Emergency categorization, activation and notification</a></p>  <p><a href="#P273_28084">2.3.3 Emergency assessment requirements</a></p>  <p><a href="#P296_30727">2.3.4 Interface and support for offsite response organizations</a></p>  <p><a href="#P322_34688">2.3.5 Emergency personnel protection</a></p>  <p><a href="#P352_39235">2.3.6 Emergency response facilities and equipment</a></p>  <p><a href="#P386_43497">2.3.7 Public emergency information</a></p>  <p><a href="#P397_45274">2.3.8 Recovery</a></p>  <p><a href="#P410_47008">2.3.9 Validation of the emergency response plan and procedures</a></p>  </div>  <div className="IndentLeft20">  <p><a href="#P420_49204">2.4 Preparedness</a></p>  </div>  <div className="IndentLeft30">  <p><a href="#P422_49396">2.4.1 Training and qualification</a></p>  <p><a href="#P448_52564">2.4.2 Maintenance of emergency response facilities and equipment</a></p>  <p><a href="#P452_53323">2.4.3 Public education program requirements</a></p>  <p><a href="#P467_54714">2.4.4 Testing the implementation of emergency measures</a></p>  </div>  <div className="IndentLeft10">  <p><a href="#P512_60421"><strong>Appendix A</strong></a></p>  <p><a href="#P518_60696"><strong>Abbreviations</strong></a></p>  <p><a href="#P531_61039"><strong>Glossary</strong></a></p>  <p><a href="#P569_65176"><strong>References</strong></a></p>  </div>
<a name="1.0"></a>
<h2><a name="P111_6238" id="P111_6238"></a>1.0 Introduction</h2>  <h3><a name="P112_6253" id="P112_6253"></a>1.1 Purpose </h3>  <p>REGDOC-2.10.1, <em>Nuclear Emergency Preparedness and Response</em>, sets out the emergency preparedness requirements and guidance of the Canadian Nuclear Safety Commission (CNSC) related to the development of emergency measures for licensees and licence applicants of Class I nuclear facilities and uranium mines and mills.</p>  <h3 id="P114_6580">1.2 Scope</h3>  <p>This regulatory document lists and discusses the components and supporting elements that CNSC licensees shall implement and consider when establishing emergency preparedness programs to prepare for, to respond to, and to recover from the effects of accidental radiological/nuclear and/or hazardous substance releases from Class I nuclear facilities or uranium mines or mills. REGDOC-2.10.1 refers primarily to nuclear events, but the planning basis must also address releases of hazardous materials. In addition, REGDOC-2.10.1 addresses how licensees shall test the implementation measures of their EP programs through the conduct of exercises.</p>  <p>This regulatory document applies to all Class I nuclear facilities and uranium mines and mills (UMMs). Some requirements in this document are specifically designated as applying only to nuclear power plants and research reactors whose thermal output capacity is greater than 10&nbsp;MW. Nevertheless, all requirements should be considered and applied when appropriate.</p>  <p>An EP program should be developed in a manner that is commensurate with the complexity of the facility&#39;s associated undertakings, as well as the probability and potential severity of the emergency scenarios associated with the operation of the licensed facility.</p>  <p>REGDOC-2.10.1 focuses on the aspects of emergency preparedness and response. It does not include requirements for accident management, which are addressed in REGDOC-2.3.2, <em>Accident Management</em>. </p>  <h3 id="P119_8054">1.3 Accident management and its links with emergency preparedness and the principle of defence-in-depth</h3>  <p>An effective response to an emergency requires strong linkages between accident management and emergency preparedness. The fundamental premise underlying accident management is that the organization operating a nuclear reactor must be able to respond to any credible accident in order to:</p>  <ul>
<li>prevent the escalation of the accident</li>
<li>mitigate the consequences of the accident</li>
<li>achieve a long-term safe stable state after the accident</li>  </ul>  <p>To achieve the above goals, an integrated accident management program (IAMP) is put in place. An IAMP is a structured framework that comprises a cohesive set of plans and arrangements undertaken to ensure that, if an accident occurs:</p>  <ul>
<li>the safety systems and the available structures, systems and components (SSCs) can be used to control the reactivity, cool the fuel and contain the radioactive materials such that damage to the reactor and harm to workers, public, and environment is prevented or mitigated</li>
<li>the personnel with responsibilities for accident management are adequately prepared to utilize the available resources, procedures, and guidelines to perform effective accident management actions and, when deemed necessary, to call for and interact with the emergency response teams</li>  </ul>  <p>Thus, accident management provides capability to respond to an accident within the reactor facility. It is important to recognize that accident management interfaces closely but is distinct from emergency preparedness, which provides emergency responses to mitigate the onsite and offsite impacts of an accident to workers and the public.</p>  <p>Both accident management and emergency preparedness form part of the defence-in-depth provisions. In particular, accident management contributes to the levels 3 and 4 of defence-in-depth, while emergency preparedness corresponds to level 5 of defence-in-depth. Defense-in-depth level 3 is associated with the control of an accident and&nbsp;rule based procedures are, in general, used.&nbsp; Level 4 of defense-in-depth refers to BDBAs including severe accidents where efforts are focused on managing the accident and operators may need to move beyond the use of&nbsp;rules based procedures to symptoms based guidelines/procedures with considerable judgment required.</p>  <p>During a nuclear emergency, the practical goals of emergency response are:</p>  <ul>
<li>to regain control of the situation</li>
<li>to prevent or mitigate consequences at the scene</li>
<li>to prevent the occurrence of deterministic health effects in workers and the public</li>
<li>to prevent, to the extent practicable, the occurrence of stochastic health effects in the population</li>
<li>to prevent, to the extent practicable, the occurrence of non-radiological effects in individuals and among the population</li>
<li>to render first aid and to manage the treatment of radiation injuries</li>
<li>to protect, to the extent practicable, property and the environment</li>
<li>to prepare, to the extent practicable, for the resumption of normal social and economic activity</li>  </ul>  <p>The goals of emergency response are most likely to be achieved in accordance with the principles for intervention by having an effective EP program as part of the infrastructure for protection and safety. An effective EP program ensures that arrangements are in place to ensure a timely, coordinated and effective response to any emergency. It also helps to build confidence that an emergency response would be managed, controlled and coordinated.</p>  <p>Figure 1 illustrates links between the accident management, emergency preparedness and defence-in-depth. IAMP focuses on preventing an event that has already occurred from escalating and minimizing its radiological releases through use of various physical and procedural provisions. The specific provisions may vary depending on the accident (which may be a design basis accident or beyond design basis accident, including a severe accident). REGDOC-2.3.2, <em>Accident Management,</em> provides complete descriptions of defence-in-depth levels and plant states. </p>  <p>An EP program involves how nuclear facilities and other concerned organizations prepare for and plan to respond to emergencies (including nuclear or radiological emergencies, both onsite and offsite), in order to protect workers, the public and the environment. </p>  <p id="fig1"><strong>Figure 1:</strong> An IAMP (REGDOC-2.3.2) and a nuclear emergency preparedness program (REGDOC-2.10.1) and how they relate to one another</p>  <p><a href="/eng/acts-and-regulations/consultation/comment/regdoc2-10-1/images/circle-chart-eng.png"><img src="/eng/acts-and-regulations/consultation/comment/regdoc2-10-1/images/circle-chart-eng-595.png" alt="Accident management and Emergency Preparedness" width="595" height="441" /></a></p>  <p>Click on image to enlarge | <a href="/eng/acts-and-regulations/consultation/comment/regdoc2-10-1/longdesc/longdesc#fig1">Figure 1: Text Equivalent</a></p>  <h3 id="P172_12495">1.4 Overview of Canada&#39;s nuclear emergency planning framework</h3>  <p>In Canada, the respective roles of the various levels of government in nuclear emergency preparedness and response are derived from legislated responsibilities. Provincial and territorial governments bear the primary responsibility for protecting public health and safety, property and the environment within their borders. The federal government regulates the peaceful use of nuclear energy in Canada, manages nuclear liability, and supports the responses of provinces to nuclear emergencies within their boundaries. </p>  <p>The federal government is also responsible for liaisons with the international community and  diplomatic missions in Canada, for assisting Canadians abroad, and for coordinating Canada&#39;s response to nuclear emergencies that occur in foreign countries, but that have an impact on Canada. </p>  <p>Under the administrative framework of the Federal Emergency Response Plan and the Federal Nuclear Emergency Plan, all levels of government, along with various agencies and organizations, have responsibilities for developing and implementing emergency plans to address nuclear emergencies with impacts outside the bounds of CNSC-licensed nuclear facilities.</p>  <p>Guidelines for protective actions, such as Health Canada&#39;s <a href="http://www.hc-sc.gc.ca/ewh-semt/pubs/radiation/guide-03/index-eng.php" target="_top"><em>Canadian Guidelines for Intervention During a Nuclear Emergency</em></a> and <a href="http://www.hc-sc.gc.ca/ewh-semt/pubs/contaminants/emergency-urgence/index-eng.php" target="_top"><em>Canadian Guidelines for the Restriction of Radioactively Contaminated Food and Water Following a Nuclear Emergency</em></a>, are intended to assist federal and provincial emergency response authorities on choosing appropriate protection actions to protect public health. Reference levels in these guidelines are used to inform decisions on what measures are necessary to protect the public during a nuclear emergency. These guidelines are based, in part, on advice from international organizations such as the IAEA and the ICRP and are found on <a href="http://www.hc-sc.gc.ca/ewh-semt/pubs/contaminants/index-eng.php">Health Canada</a>&#39;s web site. </p>  <h3 id="P177_14481">1.5 Relevant legislation</h3>  <p>The CNSC is the federal agency that regulates the use of nuclear energy and materials to protect health, safety, security and the environment, and to implement Canada&#39;s international commitments on the peaceful use of nuclear energy. </p>  <p>The <em>Nuclear Safety and Control Act</em> (NSCA) requires persons and/or organizations to be licensed by the CNSC for carrying out the activities referred to in section 26. The regulations adopted under the NSCA stipulate requirements for CNSC licensing, as well as the obligations of licensees and workers.</p>  <p>One of the CNSC&#39;s objectives is to regulate the development, production and use of nuclear energy and the production, possession and use of nuclear substances, prescribed equipment and prescribed information in order to prevent unreasonable risk to the environment and to the health and safety of persons, as well as unreasonable risk to national security, associated with that development, production, possession or use. To accomplish this, the CNSC has the authority to make regulations pursuant to section 44 of the NSCA. </p>  <p>Paragraph 3(1.1)(b) of the <em>General Nuclear Safety and Control Regulations</em> (GNSCR) states that the Commission may require any other information that is necessary to enable it to determine whether the applicant will make adequate provision for the protection of the environment, the health and safety of persons and the maintenance of national security and measures required to implement international obligations to which Canada has agreed. Sections 12 and 17 of the GNSCR place obligations on both licensees and workers to take all reasonable precautions to protect the environment and the health and safety of persons, and to maintain security of nuclear facilities and nuclear substances.</p>  <p>The <em>Class I Nuclear Facilities Regulations</em> and the <em>Uranium Mines and Mills Regulations</em> require licence applications to include information related to emergency planning. For instance, paragraph 6(k) of the <em>Class I Nuclear Facilities Regulations</em> and subparagraph 3(c)(x) of the <em>Uranium Mines and Mills Regulations</em> stipulate that an application for a licence to operate a Class&nbsp;I nuclear facility, or a general application for a licence in respect of a uranium mine or mill, shall describe the proposed measures to prevent or mitigate the effects of accidental releases of nuclear substances and hazardous substances on the environment, the health and safety of persons, and the maintenance of security, including measures to: </p>  <ul>
<li>assist offsite authorities in planning and preparing to limit the effects of an accidental release</li>
<li>notify offsite authorities of an accidental release or the imminence of an accidental release</li>
<li>report information to offsite authorities during and after an accidental release</li>
<li>assist offsite authorities in dealing with the effects of an accidental release</li>
<li>test the implementation of the measures to prevent or mitigate the effects of an accidental release</li>  </ul>
<a name="2.0"></a>
<h2 id="P188_17451">2.0 Emergency Preparedness Program </h2>  <p>An effective EP program is based on the following four components:</p>  <ol>
<li><strong>Planning basis:</strong> an analysis of the risks and hazards that the EP program will address</li>
<li><strong>Program management:</strong> the management system aspects that assure the effectiveness of the EP program</li>
<li><strong>Emergency response plan and procedures:</strong> a comprehensive description of how a response will be executed, with accompanying support material</li>
<li><strong>Preparedness:</strong> the processes to ensure that people, equipment and infrastructure will be ready to execute a response according to the emergency response plan and procedures </li>  </ol>  <p>Licensed organizations with existing EP programs that address other corporate needs are encouraged to use this infrastructure to meet the requirements in this document.</p>  <p>Key components and overlapping provisions of an EP program and integrated accident management program are illustrated in Appendix A.</p>  <h3 id="P196_18355">2.1 Planning basis</h3>  <p>Licensees shall:</p>  <ol>
<li> establish a planning basis for their EP programs </li>
<li> ensure the planning basis considers the hazards that have, or could have, an adverse impact on the environment and the health and safety of onsite personnel or the public, and will also consider:  <ol className="lower-alpha">
<li> All accidents and internal or external events that may have an impact on their facilities</li>
<li> the inclusion of multi-unit accidents scenarios for multi-unit power reactor facilities</li>
<li> extended loss of power</li>
</ol>
</li>
<li> use the results from the planning basis to determine the scope and depth of EP program requirements</li>  </ol>  <h4>Guidance</h4>  <p>All credible hazards with possible initiating and propagating pathways should be identified within the planning basis. A nuclear emergency may be caused by or involve different types of hazards, including natural incidents (e.g., flooding, tornadoes, tsunami, ice storms or snowstorms, forest fires), plant equipment accidents and malfunctions (identified within the design basis and beyond-design basis), or criminal and malicious activity (e.g., theft, sabotage, hostile actions). </p>  <p>In addition, the planning basis should be based on a full range of postulated scenarios that may challenge the facility&#39;s emergency response capabilities. This should include scenarios that involve a nuclear or radiological emergency combined with a conventional emergency, such as an earthquake or forest fire. A detailed analysis should be used to determine credible worst-case scenarios, and plans should be developed accordingly. Inputs to be considered in the analysis should include, but not be limited to, the licensee&#39;s safety analysis, probabilistic safety analysis and operational experience, as well as industry and operating experience. </p>  <h3 id="P207_20092">2.2 Program management </h3>  <p>Licensees shall include, at a minimum, the following elements in their management systems:</p>  <ol>
<li>a written policy statement issued by licensee senior management, committing all units of the organization to the system and its effective implementation</li>
<li> a program owner identified with the authority to ensure that resources are given to all aspects of the EP program</li>
<li> procedures describing the planned and systematic actions necessary to provide adequate confidence that all specified requirements are satisfied</li>
<li> procedures that specify who (position or unit) is to review and update the program on an ongoing basis, and how this is to be done</li>
<li> review and update EP programs and documentation (e.g., response plan, training material, procedures, etc.) at defined intervals to take into account relevant factors, such as operating experience, changing needs or circumstances, and lessons learned from real events</li>  </ol>  <h4>Guidance</h4>  <p>The EP program should be managed as part of a facility&#39;s overall management system. A management system is generally defined as a set of interrelated or interacting elements that establish policies and objectives, and which enables those objectives to be achieved safely, efficiently and effectively. The management system brings together the processes needed to satisfy EP program requirements in a planned and integrated manner.</p>  <p>The management system&#39;s requirements primarily aim to ensure that safety is not compromised, by considering the implications of all actions with regard to safety as a whole. Safety should be the paramount consideration, guiding decisions and actions, in the establishment of a management system.</p>  <p>As stated in their their licences and Licence Conditions Handbooks licensees should:</p>  <ul>
<li>manage their EP programs in accordance with management system requirements </li>
<li>detect and report deficiencies, and ensure all corrective actions are tracked and implemented as per management system requirements </li>
<li>submit all EP program changes to the CNSC at least 30 days before implementing </li>  </ul>  <h3 id="P221_22143">2.3 Emergency response plan and procedures</h3>  <p>Licensees shall develop and maintain emergency response (ER) plan(s) with supporting emergency response procedures. The ER plan shall be based on the planning basis as described in section 2.1 of this document. The ER plan shall identify and describe the methods that licensees use to respond to emergencies. This includes, but is not limited to, the following areas: </p>  <ol>
<li> emergency response organization and staffing</li>
<li> emergency categorization activation and notification</li>
<li> emergency assessment</li>
<li> offsite response organizations interface and support</li>
<li> emergency personnel protection</li>
<li> emergency response facilities and equipment</li>
<li> public emergency information </li>
<li> recovery </li>
<li> validation of the ER plan and procedures </li>  </ol>  <h4>Guidance</h4>  <p>The ER plan, which may consist of one or several documents, incorporates pertinent information directly or by reference. Plan content can vary to accommodate facility-specific needs and circumstances based on risk.</p>  <p>The ER plan may incorporate emergency preparedness and response procedures directly, or it may reference pertinent documents, such as the facility procedures manual(s). If referenced, the reference materials should be immediately accessible.</p>  <p>Procedures are used to define the necessary steps and/or requirements for various emergency preparedness and response processes and activities.</p>  <h4 id="P236_23506">2.3.1 Emergency response organization and staffing</h4>  <p>For all licensees, the ER plan and procedures shall:</p>  <ol>
<li> establish an emergency response organization (ERO) with a command structure that is clearly defined and integrated </li>
<li> define and document the number of staff required to maintain the ERO and their qualifications </li>
<li> define the expected reporting times for the ERO to report to the emergency response facility or designated area (see section 2.3.6 of this document) after it has been alerted to respond</li>
<li> document the requirement to maintain and retain logs of all actions, orders, and track and update actions throughout the emergency</li>  </ol>  <p>In addition to the above, licensees of reactor facilities with a thermal capacity greater than 10&nbsp;MW shall also:</p>  <ol start="5">
<li> define and document how the ERO staffing will be maintained and monitored to ensure the minimum shift complement is available at the nuclear facility at all times</li>
<li> be capable of maintaining the ERO extended response over multiple shifts</li>  </ol>  <p>Consideration shall be given to the applicability of items 5 and 6 to other Class I nuclear facilities and UMMs, as appropriate for each facility.</p>  <h4>Guidance</h4>  <p>An indication of an effective ERO is the demonstration of clear command and control over the emergency response. It should be clearly understood who is in charge and with whom final decisions and authorities lie. The ERO should be adaptable and flexible, so as to be able to manage an incident as it evolves or as its circumstances change rapidly or abruptly. Procedures should be in place to ensure:</p>  <ul>
<li>clear roles and responsibilities and authorities of each ERO position</li>
<li>timely and adequate onsite and offsite communication</li>
<li>periodic update and turnover briefings</li>
<li>decisions documented in event logs</li>
<li>effective and clear communication</li>  </ul>  <p>Appropriate arrangements should be identified for shift turnover and provision of food and other amenities for prolonged duty caused by beyond-design-basis initiating events.</p>  <p>Additional guidance on the number of staff required to maintain the ERO and their qualifications can be found in CNSC Regulatory Document G-323, <em>Ensuring the Presence of Sufficient Qualified Staff at Class I Nuclear Facilities &#8211; Minimum Staff Complement</em>.</p>  <h4 id="P255_25727">2.3.2 Emergency categorization, activation and notification</h4>  <p>The ER plan and procedures shall:</p>  <ol>
<li> describe the complete set of conditions that would require activation of the ERO</li>
<li> describe how unusual events, incidents and emergencies are to be determined and classified to initiate onsite response; the same notification categories and standard definitions used by offsite authorities and agencies shall be used and/or cross-referenced</li>
<li> describe the immediate notification process and secondary communication methods to alert all onsite personnel, to initiate accounting and assembly, and to activate the ERO and associated support emergency response and support facilities</li>
<li> define organizational methods, processes, timelines and emergency levels to notify the appropriate personnel and authorities</li>
<li>. describe all offsite notification requirements and any time requirements that apply, ensuring that:  <ol className="lower-alpha">
<li> the description includes identification of the appropriate positions, by title and agency, of the provincial, territorial and local government agencies</li>
<li> offsite authorities are notified within 15 minutes of categorizing the event</li>
<li> the CNSC is notified within 15 minutes of activation of the ERO and again within 15 minutes of initial notification to offsite authorities</li>
</ol>
</li>  </ol>  <h4>Guidance</h4>  <p>Criteria that define when the ERO should be activated should be clearly documented.</p>  <p>For nuclear facilities without notification categories for offsite authorities, licensees should follow provincial requirements or use the following categories, listed in order of increasing significance, to classify various events, :</p>  <ul>
<li><strong>Reportable event:</strong> an event affecting the nuclear facility that would be of concern to the offsite authorities responsible for public safety</li>
<li><strong>Abnormal incident:</strong> an abnormal occurrence at the nuclear facility that may have a significant cause and/or may lead to more serious consequences</li>
<li><strong>Site area emergency:</strong> a serious malfunction that results or may result in an emission at a later time</li>
<li><strong>General emergency:</strong> an ongoing atmospheric emission of radioactive material, or one likely within a short time frame, as a result of a more severe accident </li>  </ul>  <p>Licensees are required to notify the offsite authorities within 15 minutes of event categorization, but &#8211; ideally &#8211; should provide such notification as soon as possible after categorizing the event.</p>  <h4 id="P273_28084">2.3.3 Emergency assessment requirements</h4>  <p>In accordance with ER plans and procedures, licensees shall:</p>  <ol>
<li>describe the methods and procedures to be followed to assess and predict both onsite and offsite conditions and parameters</li>
<li> continuously assess the magnitude and consequences of the emergency and take appropriate measures to protect onsite personnel</li>
<li> continually assess and characterize the magnitude of the offsite risk to the public and the environment</li>
<li> continually assess the emergency and provide updates on a regular basis to offsite authorities and the CNSC</li>  </ol>  <p>In addition to the above, licensees of reactor facilities with a thermal capacity greater than 10&nbsp;MW shall also:</p>  <ol start="5">
<li>have real-time fixed radiological detection and monitoring capabilities around the station perimeter with appropriate backup power, and shall communicate results to offsite authorities and the CNSC</li>
<li> have sufficient capacity and capability for offsite radiological monitoring, including mobile offsite survey teams, and report results to the offsite response authorities and the CNSC</li>
<li> promptly and continuously assess and determine source term estimate, plume dispersion and dose modelling, and report results to the offsite authorities and the CNSC</li>
<li> promptly and continuously estimate dose to the public based on source term estimation, plume dispersion and dose modelling, and provide the dose estimates to offsite response authorities and the CNSC</li>  </ol>  <p>Consideration shall be given to the applicability of item 6 to other Class I nuclear facilities and UMMs, as appropriate for each facility.</p>  <h4>Guidance</h4>  <p>Emergency assessment, including categorization, is performed to determine: </p>  <ul>
<li>the onsite response and staff mobilization required to protect onsite personnel and equipment</li>
<li>the notification category necessary for the provincial or territorial authorities to determine the required offsite response to protect the public and the environment</li>  </ul>  <p>Source term sampling and estimation should be determined and reported to the CNSC on a best-effort basis, upon determination and compilation of the data in an approved format. </p>  <p>Licensees should describe the methods and procedures for the continual assessment of the following pertinent conditions and parameters: </p>  <ul>
<li>the status, integrity and stability of the affected facilities and their components </li>
<li>identification, quantities, concentrations, or release-rates of radiation, contaminants, or other hazardous substances</li>
<li>onsite and offsite impacts on or threats to health, safety, national security and the environment </li>
<li>location and direction of radioactive plumes or other emissions</li>
<li>loss of instrumentation</li>  </ul>  <h4 id="P296_30727">2.3.4 Interface and support for offsite response organizations</h4>  <p>In accordance with ER plans and procedures, licensees shall:</p>  <ol>
<li> establish plans and procedures to coordinate response activities with appropriate offsite organizations, in the event of an emergency with offsite implications</li>
<li> formally document any arrangements or agreements with other organizations or personnel</li>
<li> ensure that agreed-upon resources, and the quantity of these resources required to respond to offsite conditions, are available when needed</li>
<li> cooperate with and assist offsite organizations with their response activities to address offsite impacts; provide expertise and resources (personnel, emergency response equipment, and material) in support of offsite authorities and agencies during an emergency; and define the quantity of available resources within their ER plan</li>
<li> promptly and regularly provide recommendations to offsite authorities and the CNSC when protective action is required</li>
<li> make provisions to have nuclear facility data and other information regularly transmitted to offsite authorities and the CNSC</li>  </ol>
<p>In addition to the above, licensees of reactor facilities with a thermal capacity greater than 10&nbsp;MW shall also:</p>  <ol start="7">
<li> incorporate the provincial or territorial emergency planning zone that is being used for plume exposure and ingestion pathways; the provincial or territorial plans shall be directly referenced</li>
<li> develop and maintain public evacuation time estimates based on current census data, and future population growth projections on a per-decade estimation until end of life of the facility</li>
<li> have, at all times, a designated onsite person with the authority and responsibility to categorize a nuclear emergency and to perform the following promptly and without consultation, upon categorization of the emergency:  <ol className="lower-alpha">
<li> initiate an appropriate onsite response</li>
<li> notify the appropriate offsite notification point</li>
<li> provide sufficient information for an effective offsite response</li>
</ol>
</li>
<li> provide the designated person with a suitable means of alerting onsite response personnel and notifying the offsite notification point</li>
<li> for NPPs, designate an onsite person with the authority for nominal venting<sup><a href="#Q1">1</a></sup> and ensure that notification is made to offsite authorities and the CNSC prior to nominal venting</li>
<li> for NPPs, designate an onsite person with the authority for alternate venting and ensure consultation with the offsite authorities and the CNSC prior to alternate venting<sup><a href="#Q2">2</a></sup></li>
<li> include, in each report to the CNSC, an estimate of the time at which venting will be required</li>
<li> notify the Province and the CNSC of abnormal incidents</li>  </ol>  <h4>Guidance</h4>  <p>Licensees should identify the jurisdictions, organizations or persons that could be formally involved in emergency preparedness and response activities pertaining to facility emergencies with offsite impacts, and then develop mutual aid and community agreements where appropriate. </p>  <p>The ER plan should also define a clear and concise strategy for communications between onsite and offsite organizations. All communications, including event data and the decisions made throughout the emergency response, should be documented and recorded.</p>  <p>The nuclear emergency response plans for offsite response organizations (those of provinces and municipalities as well as firefighters, emergency medical services personnel and police) should be included with licence application documents for licence renewal and new applications.</p>  <h4 id="P322_34688">2.3.5 Emergency personnel protection </h4>  <p>In accordance with ER plans and procedures, all licensees shall:</p>  <ol>
<li> develop and document emergency radiation protection measures that align with their radiation protection programs</li>  </ol>  <p>In addition to the above, licensees of reactor facilities with a thermal capacity greater than 10&nbsp;MW shall also:</p>  <ol start="2">
<li> have sufficient personal protective equipment (PPE) and provisions to respond to emergencies and protect the emergency responders for the first 72 hours without offsite assistance</li>
<li> maintain sufficient PPE and response equipment, calibrated and poised for immediate use in an emergency; the type and amount of PPE and defined emergency response equipment shall be based on criteria for design-basis accidents and beyond-design-basis accidents </li>  </ol>  <p>Consideration shall be given to the applicability of item 2 to other Class I nuclear facilities and UMMs, as appropriate for each facility.</p>  <h4>Guidance</h4>  <p>Licensees should be able to manage the first 72 hours of an emergency response without offsite support, in case outside assistance is unavailable. Remotely located facilities (such as those on northern sites) may experience significant emergency response delays because of effects such as severe weather. In such cases, licensees should demonstrate how their ER plans have accounted for the possibility that offsite assistance may not be available for extended periods of time. </p>  <p>Electronic dosimeters should be calibrated, poised and immediately available for designated emergency work. Systems used for maintaining, reading and charging these dosimeters should be in working condition at all times. For battery-operated equipment, sufficient numbers of batteries should be available. Backup facilities and emergency response equipment needed to maintain equipment for electronic dosimeters, radiation instrumentation and laboratory services should be defined within the ER plan.</p>  <p>Emergency protective provisions may include, but are not limited to: </p>  <ul>
<li>establishing or designating areas for the emergency assembly of site personnel</li>
<li>ensuring that assembly areas are located in areas that can be accessed safely during emergencies</li>
<li>ensuring that there are alternate safe access routes to radiation instrumentation and electronic dosimeters, in addition to assembly areas and PPE during emergencies</li>
<li>accounting for site personnel and all other persons on site (contractors, visitors, etc.); all onsite staff should be able to be accounted for within 30 minutes</li>
<li>using dose records to assign specific emergency response tasks</li>
<li>ensuring offsite emergency responders have access to radiation protection assistance from onsite personnel</li>
<li>implementing special administrative measures, such as action levels to control radiation doses</li>
<li>conducting radiation surveys and radioactive contamination monitoring</li>
<li>monitoring and tracking of radiation doses</li>
<li>implementing back-out dose limits and protective actions when emergency action levels are exceeded through pre-set electronic personnel dosimeter alarms</li>
<li>providing search and rescue, decontamination and first-aid services</li>
<li>providing dosimetry and any other emergency response equipment, instruments, materials, facilities and services necessary to ensure that onsite and offsite personnel are protected</li>
<li>ensuring appropriate radiological and hazardous substances protection and information are provided to all emergency responders, including those from external organizations providing onsite support</li>
<li>ensuring that PPE, electronic dosimeters and radiation survey meters / radiation instrumentation are appropriate for their intended use</li>
<li>interfacing with offsite responders (e.g., ambulance attendants and hospital staff) to ensure that pertinent hazardous material and radiological information is provided to medical staff</li>
<li>providing thyroid-blocking agents (potassium iodide pills) when applicable</li>
<li>briefing, tracking, and debriefing the dispatched teams on safety requirements, communication requirements, etc; emergency response personnel&#39;s briefing should include personal safety requirements and a three-way communication strategy</li>
<li>continued verification of the habitability of all emergency response facilities, including monitoring for radiation fields and hazardous materials, where appropriate</li>  </ul>  <p>This document does not address shift turnover. Additional guidance on shift turnover can be found in CNSC Regulatory Document G-323, <em>Ensuring the Presence of Sufficient Qualified Staff at Class I Nuclear Facilities &#8211; Minimum Staff Complement</em>.</p>  <h4 id="P352_39235">2.3.6 Emergency response facilities and equipment</h4>  <p>In accordance with ER plans and procedures, all licensees shall:</p>  <ol>
<li> identify an onsite emergency response facility or designated area to be used as a response location </li>
<li> identify essential emergency response equipment, and describe how its operation and effectiveness during emergencies are assured; essential emergency response equipment includes equipment required to detect and assess hazards, and communicate response activities</li>
<li> identify and have emergency response equipment and materials that are operational and available in sufficient quantities for an extended multi-shift response; they shall also be readily accessible during emergency conditions</li>  </ol>  <p>In addition to the above, licensees of reactor facilities with a thermal capacity greater than 10&nbsp;MW shall also:</p>  <ol start="4">
<li> have at least one onsite emergency response facility outside of the protected area, and shall designate a predetermined work space with a satellite phone for a CNSC representative upon activation</li>
<li> have at least one offsite emergency response facility located outside of the primary zone</li>
<li> ensure that emergency response facilities inside the primary zone are hardened (shielded, air-filtered and seismically qualified) and are capable of withstanding design-basis external events (e.g., earthquake, tornadoes)</li>
<li> designate emergency response facilities (including their locations) needed to ensure an appropriate response capability in an emergency; this includes emergency facilities that are intended to survive and are expected to be habitable under severe accidents and external events</li>
<li> have predetermined backup emergency response facilities for onsite and offsite facilities, identifying the location and robustness criteria</li>
<li> ensure all emergency response facilities have the capacity and capability of sustaining emergency response for a minimum of 72 hours without offsite support</li>
<li> ensure the design and layout of emergency response facilities are able to support the emergency response</li>
<li> ensure emergency response facilities have provisions in place, to display nuclear facility data and other information</li>
<li>pre-arrange memoranda of understanding and/or other priority services agreements required for activities such as providing fuel for backup power generation, and ensure such agreements are documented and either referenced or attached to the ER plan</li>
<li> determine and implement methods for communicating with onsite personnel and offsite authorities, including the implementation of at least two levels of backup communications systems; licensee communication links must be compatible with the licensee, province or territory, and the CNSC</li>
<li> provide a workspace for CNSC representatives at all emergency operations facilities</li>  </ol>  <p>Consideration shall be given to the applicability of items 8, 9, 10, 12 and 14 to other Class I nuclear facilities and UMMs, as appropriate for each facility.</p>  <h4>Guidance</h4>  <p>Licensees should describe the emergency response services, equipment, supplies and facilities that would be available during emergencies, including, but not limited to the following:</p>  <ul>
<li>administration facilities </li>
<li>technical support and control centres </li>
<li>personnel and public assembly areas</li>
<li>emergency operations coordination centre</li>
<li>centre to integrate onsite activities with offsite programs </li>
<li>first aid and/or medical facilities </li>
<li>laboratory services (fixed or mobile) </li>
<li>decontamination facility</li>
<li>backup power capable of sustaining emergency power to emergency response facilities for a minimum of 72 hours</li>
<li>reference materials, such as current and approved versions of charts, maps, plans, drawings, diagrams, specifications and procedures</li>
<li>essential safety equipment, PPE and other appropriate supplies, such as food and water for a minimum of 72 hours</li>
<li>administrative aids, such as status boards and reference materials</li>
<li>fixed or portable instruments or equipment, as required, to detect, measure, monitor, survey, analyze, record, process, treat, transport, warn, announce, communicate, or assess</li>  </ul>  <p>The CNSC workspace should have appropriate resources (such as computers, information access, internet access and satellite phones) to enable CNSC representatives to perform their functions adequately.</p>  <h4 id="P386_43497">2.3.7 Public emergency information</h4>  <p>In accordance with the ER plans and procedures, licensees shall:</p>  <ol>
<li> provide emergency information to offsite authorities during the emergency response and recovery phases</li>
<li> coordinate with offsite authorities when providing public emergency information</li>  </ol>  <h4>Guidance</h4>  <p>Licensees should establish public emergency information programs to be implemented during emergencies. These programs should ensure that emergency information is sent routinely &#8211; and as conditions change (either positively or negatively) &#8211; to offsite authorities so the information can be disseminated to the public.</p>  <p>Public information to be disseminated during an emergency should be developed and documented before emergencies arise, and should include: </p>  <ul>
<li>possible radiological and non-radiological hazard(s), including their short-term effects as well as their potential long-term effects on the public, for all emergency scenarios</li>
<li>contact details for where to obtain additional information, such as Web sites and social media sites </li>  </ul>  <p>Licensees should include, directly or by reference, appropriate provisions to communicate pertinent information to the public during an emergency. For complex facilities such as nuclear power plants, these provisions should consist of communications policies and strategies that formally define the roles, responsibilities and essential qualifications of communications personnel. These arrangements should identify the appropriate training, experience, and skills in public and media relations that are required by those responsible for communicating key information to the public.</p>  <p>Additional information on public information and disclosure requirements for nuclear facilities can be found in RD/GD-99.3, <em>Public Information and Disclosure.</em></p>  <h4 id="P397_45274">2.3.8 Recovery</h4>  <p>In accordance with ER plans and procedures, licensees shall:</p>  <ol>
<li> describe the process to transition from emergency response to recovery after the termination of an emergency, including the requirements to establish a recovery organization and to develop a recovery plan</li>
<li> identify, in the recovery plan, the positions/titles, authorities and responsibilities of the individuals who will fill key positions in the recovery organization; this organization shall also include technical personnel with responsibilities to develop, evaluate and direct recovery and reentry operations</li>
<li> submit the actual recovery plan to the CNSC prior to commencing recovery efforts</li>  </ol>  <h4>Guidance</h4>  <p>A conceptual and strategic recovery plan should be prepared in advance. This can act as the basis for developing the recovery plan after the event has occurred and the emergency phase is complete.</p>  <p>The recovery plan should: </p>  <ul>
<li>identify and describe the resources (personnel, facilities and emergency response equipment) that are to be available for recovery purposes</li>
<li>describe how personnel will be protected when assessing or implementing the recovery program (e.g., personnel protection measures for entry into hazardous areas)</li>
<li>provide for post-accident assessments of the causes, details, impacts and/or consequences of the events</li>
<li>ensure all recovery efforts operate in accordance with the licensee&#39;s operating licence requirements</li>  </ul>  <p>Once the emergency phase of an emergency response has ended, workers undertaking recovery operations (such as repairs to plant and buildings, waste disposal or decontamination of the site and surrounding area) are subject to the occupational dose limits listed in the CNSC&#39;s <em>Radiation Protection Regulations</em>.</p>  <h4 id="P410_47008">2.3.9 Validation of the emergency response plan and procedures</h4>  <p>Licensees shall:</p>  <ol>
<li> validate ER plans and procedures to demonstrate that systems as designed (equipment, procedures and personnel elements) meet performance requirements and support safe operation</li>
<li> validate any changes to ER plans or procedures before implementing them, to ensure continued effectiveness</li>
<li> notify the CNSC of changes to ER plans and procedures, and submit the results of the validation to the CNSC, at least 30 days before implementing changes</li>
<li> where not otherwise specified, keep all validation documentation on record for three years from the date of implementation</li>  </ol>  <h4>Guidance</h4>  <p>For the purpose of this section, &#8220;change&#8221; means an action that results in modification to, addition to, or removal from a licensee&#39;s ER plan. All changes should be validated to demonstrate that performance requirements are met and to determine if there has been a reduction in effectiveness (i.e., decreased capability to respond to an emergency).</p>  <p>A licensee may make changes to its ER plan(s) and procedures without CNSC approval, but only if it performs and retains an analysis that demonstrates that the changes have not reduced the ER plan&#39;s effectiveness. This analysis must also demonstrate that plans continue to meet operating licence requirements as well as regulatory requirements. </p>  <p>A change to a licensee&#39;s ER plan and procedures that reduces the effectiveness of the plan is not to be implemented without prior acceptance by the CNSC. A licensee desiring to make such a change should submit an application for change approval to the CNSC; the request should include the revised ER plan and demonstration of validation. The CNSC will have 30 days to review a change request, after which it will inform the licensee if the change has been accepted. The CNSC is unlikely to permit changes that would decrease an ER plan&#39;s effectiveness; however, under special circumstances (e.g., construction or temporary facility modifications), such changes may be approved with specific conditions. Under no circumstances would the CNSC allow a licensee to implement changes that would compromise safety or lead to unreasonable risk. </p>  <h3 id="P420_49204">2.4 Preparedness</h3>  <p>Preparedness consists of activities to ensure that people, equipment and infrastructure will be ready to respond to an emergency, in accordance with the ER plan and procedures.</p>  <h4 id="P422_49396">2.4.1 Training and qualification</h4>  <p>In accordance with training and qualification, all licensees shall:</p>  <ol>
<li> provide radiation protection training (either onsite or offsite) for offsite authorities&#39; emergency response staff expected to assist in an emergency; training programs, for both onsite and offsite emergency responders, must be submitted to the CNSC at least 30 days prior to implementation </li>  </ol>  <p>In addition to the above, licensees of reactor facilities with a thermal capacity greater than 10&nbsp;MW shall also:</p>  <ol start="2">
<li> develop and submit emergency drill schedules annually to the CNSC as per the submission date defined within their Licence Conditions Handbooks</li>
<li>develop training in accordance with REGDOC-2.2.2, <em>Personnel Training </em>(yet to be published)</li>
<li>train and qualify all EROs in accordance with the positions to which they have been assigned</li>
<li>establish requirements for frequency of re-qualification training for all ERO positions</li>  </ol>  <p>Consideration shall be given to the applicability of items 2 to 5 to other Class I nuclear facilities and UMMs, as appropriate for each facility.</p>  <h4>Guidance</h4>  <p>Licensees should provide necessary training to individuals and/or organizational units to assure and demonstrate they are qualified and able to completely fulfill their assigned emergency response roles.</p>  <p>ERO training may consist of both formal and informal instruction (including workplace and classroom instruction), as well as emergency drills. Typical attributes of an emergency drill include: </p>  <ul>
<li>limited scope</li>
<li>limited number of personnel</li>
<li>specific equipment</li>
<li>timely feedback</li>
<li>realistic environment</li>  </ul>  <p>An emergency drill typically involves testing a procedural or physical component of the emergency response program. An emergency drill may be conducted as an initial or periodic test, as a supervised training session or as an evaluation of a remedial event. For example, after steps are taken to correct a weakness identified by an emergency exercise, a drill may be held to further evaluate the effectiveness of the remedial measures.</p>  <p>Licensees should describe the following: </p>  <ul>
<li>initial and continuing training programs for EROs</li>
<li>ERO staff qualifications</li>
<li>ERO positions for which incumbents will be required to undertake periodic or on-going training</li>
<li>training requirements for contractors and offsite organizations (e.g., firefighters, police personnel, ambulance drivers, hospital staff) that support or participate in onsite activities &#8211; insofar as these requirements relate to training that is outside their typical professional duties, but that is required for responding to onsite emergencies; such training could address subjects like access requirements or radiation protection</li>
<li>schedules, procedures and assessment criteria for the conduct of emergency drills and exercises</li>
<li>positions responsible for managing, planning, controlling and evaluating drills</li>  </ul>  <p>Personnel assigned to emergency response roles should demonstrate and maintain their physical competence and capability to perform assigned tasks at all times. Drills should include the use of all procedures, PPE, response equipment and facilities that could be required during an actual emergency.</p>  <h4 id="P448_52564">2.4.2 Maintenance of emergency response facilities and equipment </h4>  <p>Licensees shall identify and implement requirements and provisions to assure that the necessary emergency response facilities, equipment, and materials are maintained and in working condition at all times. </p>  <h4>Guidance</h4>  <p>Emergency response facilities, equipment and materials must be in a state of readiness at all times. Accordingly, licensees should implement provisions to ensure that such equipment, facilities and materials are always in working condition. These provisions are to include regular inspection, calibration, testing, and maintenance, or replacement as required, within formal systems of quality control and inventory control and accounting. This criterion includes all required PPE.</p>  <h4 id="P452_53323">2.4.3 Public education program requirements</h4>  <p>Licensees shall include in their public information program information on emergency preparedness.</p>  <p>Licensees of reactor facilities with a thermal capacity greater than 10&nbsp;MW shall implement a public education program within the emergency planning zone. </p>  <h4>Guidance</h4>  <p>Additional information can also be found in RD/GD-99.3, <em>Public Information Programs</em>.</p>  <p>The public education program is to consist of communications policies and strategies that formally define the roles, responsibilities and essential qualifications of communications personnel. It should also take into account any need for public education with respect to emergencies at the facility and their implications.</p>  <p>The following educational information should be made available to the public: </p>  <ul>
<li>possible radiological and non-radiological hazard(s), including their short-term effects as well as their potential long-term effects on the public, for all emergency scenarios</li>
<li>details of the ER plan</li>
<li>information for the public of what to expect and do during an emergency (if applicable to the licensed activity), including:</li>
<li>sheltering-in-place instructions </li>
<li>evacuation orders </li>
<li>activation of public alerting systems (sirens) </li>
<li>where to get potassium iodide pills (if necessary)</li>
<li>contact details for where to obtain additional information, such as Web sites and social media sites </li>  </ul>  <h4 id="P467_54714">2.4.4 Testing the implementation of emergency measures </h4>  <p>All licensees shall:</p>  <ol>
<li> test the implementation of their emergency measures</li>  </ol>  <p>Licensees of reactor facilities with a thermal capacity greater than 10&nbsp;MW shall:</p>  <ol start="2">
<li> perform exercises to test the effectiveness of their EP programs</li>
<li> ensure emergency exercises are based on their planning basis; for multi-unit nuclear reactor facilities, licensees must ensure that multiple-unit emergency exercises are part of their exercise repertoire</li>
<li> establish specific objectives for each emergency exercise; the type and number of objectives will depend on the size of the facility and the scope of the exercise</li>
<li> design exercise objectives to sufficiently challenge their capability and capacity to respond to emergencies</li>
<li> include provisions in emergency exercise objectives for:  <ol className="lower-alpha">
<li> assessment</li>
<li> protection of facility personnel</li>
<li>protection of the public and the environment</li>
<li> termination of an emergency</li>
<li> adequacy and conduct of exercises</li>
</ol>
</li>
<li> test all requirements listed in this document over a five-year period, with a full-scale integrated emergency testing exercise at least once every three years</li>
<li> submit emergency exercise objectives, team organization and scenario development framework to the CNSC at least 20 business days before conducting full-scale emergency exercises</li>
<li> execute exercises that will meet all stated objectives, demonstrate thorough planning, and identify weaknesses and deficiencies so they can be prioritized and corrected; and provide an overall accurate indication of their emergency response capabilities</li>
<li> demonstrate sound organizational and professional execution in the conduct of the exercises by:  <ol className="lower-alpha">
<li> keeping exercise scenarios unknown to the emergency responders before exercises are conducted</li>
<li> providing timely and realistic data, messages and materials</li>
<li> having exercise participants demonstrate realistic and professional behavior for simulated actions</li>
</ol>
</li>
<li> ensure persons perform their required tasks during exercises as though actual emergency conditions were present</li>
<li> staff and train exercise controllers and evaluators to control and evaluate exercises, and provide them with exercise materials that include:  <ol className="lower-alpha">
<li> instructions about how to conduct exercises</li>
<li> exercise evaluation criteria</li>
<li> direction pertaining to existing requirements for safety and security measures</li>
</ol>
</li>
<li> adhere to applicable regulations and licence conditions during exercises, ensuring all participants are aware of the actions and interventions that are not permitted while exercises are in progress</li>
<li> provide feedback after exercises to improve their overall ability to respond effectively to emergencies</li>
<li>prepare self-assessment reports regarding the execution of full-scale emergency exercises; such reports must be submitted to the CNSC no later than 40 business days after exercises have been conducted</li>  </ol>  <p>Consideration shall be given to the applicability of items 2, 4, 5 and 7-14 to other Class I nuclear facilities and UMMs, as appropriate for each facility.</p>  <h4>Guidance</h4>  <p>Emergency exercises test the adequacy of EP programs and the implementation of emergency measures. This includes an evaluation of the adequacy of the procedures and training of the ERO to respond to an emergency. </p>  <p>Emergency exercises simulate emergency events and conditions over a minimum of several hours, in order to test the integrated performance of the EP program. Emergency exercises simultaneously measure and demonstrate the preparedness and competence of participants, the quality of the associated procedures, and the effectiveness of the administrative framework. Exercises designed with a high degree of fidelity ensure that the performance observed could be reasonably expected during an actual event. Deficiencies that are identified during emergency exercises should be rectified as soon as possible, to provide assurance that the ER plan and procedures can and will be implemented successfully in the event of an emergency. </p>  <p>Typical attributes of an emergency exercise include: </p>  <ul>
<li>mobilization of emergency equipment and resources in a realistic environment over an extended period of time</li>
<li>demonstration of inter-agency and other government department cooperation</li>
<li>testing of communication systems and/or public information systems</li>
<li>testing of emergency response facilities and equipment readiness</li>
<li>conduct of the exercise with the minimum complement numbers of staff, in order to demonstrate adequacy of the response </li>
<li>criteria to terminate the exercise that are established ahead of time, in order to ensure that all of the required actions are completed</li>
<li>success criteria that are established during the planning phase, and a corresponding evaluation of performance during the exercise</li>  </ul>  <p>Full-scale emergency exercises normally involve several onsite and offsite stakeholders, which could include regional, provincial, territorial, federal and &#8211; where appropriate &#8211; international authorities and agencies. Emergency exercises do not always need to be full-scale. For example, tabletop emergency exercises &#8211; such as those for notification and communications &#8211; may be sufficient to stimulate discussion of various issues regarding a hypothetical emergency. </p>  <p>Emergency exercises should not be used as part of a participant&#39;s training development. Participation in an exercise is not meant to evaluate an individual&#39;s competency, but rather is intended to assess the adequacy of an EP program and its implementation. Coaching and training should not be provided to participants in exercises by controllers or evaluators. </p>  <p>Exercises should be conducted in accordance with the minimum requirements of the ER plan for credit and qualification. </p>
<a name="appendixA"></a>
<h2 id="P512_60421">Appendix A</h2>  <p>The illustration presented in this Appendix is not a mandatory part of this regulatory document and is provided for information only.</p>  <p id="fig2"><strong>Figure 2:</strong> Key components and overlapping provisions of an emergency preparedness program and integrated accident management program </p>  <a href="/eng/acts-and-regulations/consultation/comment/regdoc2-10-1/images/box-chart-eng.png"><img src="/eng/acts-and-regulations/consultation/comment/regdoc2-10-1/images/box-chart-eng-595.png" alt="Key components of accident management and Emergency Preparedness" width="595" height="449"  /></a>  <p>Click on image to enlarge | <a href="/eng/acts-and-regulations/consultation/comment/regdoc2-10-1/longdesc/longdesc#fig2">Figure 2: Text Equivalent</a></p>
<a name="acronyms"></a>
<h2 id="P518_60696">Abbreviations</h2>  <table border="1">
<tr>
<th>Acronym </th>
<th>Full term</th>
</tr>
<tr>
<td>AOO </td>
<td>anticipated operational occurrence </td>
</tr>
<tr>
<td>BDBA </td>
<td>beyond design basis accident </td>
</tr>
<tr>
<td>DBA </td>
<td>design basis accident </td>
</tr>
<tr>
<td>EP program</td>
<td>emergency preparedness program</td>
</tr>
<tr>
<td>ERO</td>
<td>emergency response organization</td>
</tr>
<tr>
<td>ER</td>
<td>plan  emergency response plan</td>
</tr>
<tr>
<td>IAEA</td>
<td>International Atomic Energy Agency</td>
</tr>
<tr>
<td>NSCA</td>
<td><em>Nuclear Safety and Control Act</em></td>
</tr>
<tr>
<td>PPE</td>
<td>personal protective equipment</td>
</tr>
<tr>
<td>UMMs</td>
<td> uranium mines and mills</td>
</tr>  </table>
<a name="glossary"></a>
<h2 id="P531_61039">Glossary</h2>  <dl className="margins-removed">
<dt><strong>arrangements</strong></dt>
<dd>The pre-determined integrated set of infrastructural elements necessary to provide the capability for performing a specified function or task required in response to a nuclear or radiological emergency. These elements may include hardware (e.g., equipment and instrumentation), authorities and responsibilities, organization, coordination, plans, procedures, personnel and training.</dd>
<dt><strong>back-out dose limit</strong></dt>
<dd>The pre-determined dose limit that should prompt responders to physically retreat from an area and to then assess the situation. </dd>
<dt><strong>controller</strong></dt>
<dd>During an emergency drill or exercise, a controller provides, as appropriate, data and messages to the emergency responders. </dd>
<dt><strong>emergency exercise</strong></dt>
<dd>Simulation of emergency events in order to test the integrated performance of an emergency response scenario. </dd>
<dt><strong>emergency drill</strong></dt>
<dd>Supervised instruction intended to test, develop, maintain, and practise the skills required in a particular emergency response activity. A drill may be a component of an exercise.</dd>
<dt><strong>emergency planning zone</strong></dt>
<dd>The offsite area around a facility for which emergency planning and preparation are done in advance, to ensure that necessary and effective protective actions can be taken to protect the public, property or the environment in case of an accident.</dd>
<dt><strong>emergency response</strong></dt>
<dd>The integrated set of equipment, procedures and personnel necessary to provide the capability for performing a specified function or task required in order to prevent, mitigate or control the effects of an accidental release. </dd>
<dt><strong>emergency response organization</strong></dt>
<dd>A group of inter-related responders who undertake the emergency response function during an emergency.</dd>
<dt><strong>evaluator</strong></dt>
<dd>The person who, during an emergency drill, observes, evaluates, and critiques the emergency responders&#39; actions based on pre-established performance criteria.</dd>
<dt><strong>licensing basis</strong></dt>  <dd>A set of requirements and documents for a regulated facility or activity comprising:  <ul>
<li>the regulatory requirements set out in the applicable laws and regulations</li>
<li>the conditions and safety and control measures described in the facility&#39;s or activity&#39;s licence and the documents directly referenced in that licence</li>
<li>the safety and control measures described in the licence application and the documents needed to support that licence application</li>  </ul>  <dd>
<dt><strong>management system</strong></dt>
<dd>A set of interrelated or interacting elements (system) for establishing policies and objectives and enabling the objectives to be achieved in an efficient and effective way. The management system integrates all elements of an organization into one coherent system to enable all of the organization&#39;s objectives to be achieved. These elements include the structure, resources, and processes. Personnel, equipment, and organizational culture as well as the documented policies and processes are parts of the management system. The organization&#39;s processes have to address the totality of the requirements on the organization as established in, for example, IAEA safety standards, or other international codes and standards.</dd>
<dt><strong>participant</strong></dt>
<dd>An individual who is taking part in an emergency drill or exercise and responds to the simulated events. </dd>
<dt><strong>primary zone</strong></dt>
<dd>The area around a nuclear installation within which detailed planning and preparedness are carried out for measures against exposure to a radioactive emission.</dd>
<dt><strong>safety analysis</strong></dt>
<dd>Analysis, by means of appropriate analytical tools that establishes and confirms the design basis for the items important to safety; and ensures that the overall facility design is capable of meeting the acceptance criteria for each plant state.</dd>
<dt><strong>three-way communication</strong></dt>
<dd>A method of verbal communication designed to reduce potential communication error, whereby the initiator sends a message and the receiver of the message repeats the message back to the initiator. The initiator then provides confirmation to the receiver that the repeated message is correct.</dd>
<dt><strong>validation</strong></dt>
<dd>An evaluation using performance-based tests to determine whether the integrated design of a system (equipment, procedures and personnel elements) meets performance requirements and acceptably supports safe operations. </dd>  </dl>
<a name="references"></a>
<h2 id="P569_65176">References</h2>  <ol>
<li><em>Preparedness and Response for a Nuclear or Radiological Emergency</em>. International Atomic Energy Agency (GS-R-2). 2002</li>
<li><em>Arrangements for Preparedness for a Nuclear or Radiological Emergency</em>. International Atomic Energy Agency (GS-G-2.1). 2007</li>
<li><em>Preparation, Conduct and Evaluation of Exercises to Test Preparedness for a Nuclear or Radiological Emergency</em>. International Atomic Energy Agency. 2005</li>
<li><em>Criteria for Preparation and Evaluation of Radiological Emergency Response Plans and Preparedness in Support of Nuclear Power Plants</em>. U.S. Nuclear Regulatory Commission. 2002</li>
<li><em>Emergency Preparedness and Response</em> (CAN/CSA-Z721-02). Canadian Standards Association. 2002</li>
<li><em>Management System Requirements for Nuclear Power Plants</em> (N286-05). Canadian Standards Association. Reaffirmed 2010</li>
<li><em>Emergency Management and Business Continuity Programs</em> (CAN/CSA-Z1600-08). Canadian Standards Association. 2008</li>
<li>Health Canada<em>, <a href="http://www.hc-sc.gc.ca/ewh-semt/pubs/radiation/guide-03/index-eng.php">Canadian Guidelines for Intervention During a Nuclear Emergency</a></em>, Ottawa, Canada, 2003</li>
<li>Health Canada,<em> <a href="http://www.hc-sc.gc.ca/ewh-semt/pubs/contaminants/emergency-urgence/index-eng.php">Canadian Guidelines for the Restriction of Radioactively Contaminated Food and Water Following a Nuclear Emergency</a>, </em>Ottawa, Canada, 2000 </li>  </ol>  <h2>CNSC Regulatory Document Series</h2>  <p>Facilities and activities within the nuclear sector in Canada are regulated by the Canadian Nuclear Safety Commission (CNSC).&nbsp;In addition to&nbsp;the <em>Nuclear Safety and Control Act </em>and associated regulations, there may also be requirements to comply with other&nbsp;regulatory instruments such as regulatory documents or standards.</p>  <p>Effective April 2013, the CNSC&#39;s catalogue of existing and planned regulatory documents has been organized under three key categories and twenty-five series, as set out below. Regulatory documents produced by the CNSC fall under one of the following series:</p>  <strong>1.0 Regulated  facilities and activities</strong><br />  Series 1.1 Reactor facilities<br />
<div className="indent2">1.2 Class IB facilities<br />
1.3 Uranium mines and mills<br />
1.4 Class II facilities<br />
1.5 Certification of prescribed equipment<br />
1.6 Nuclear  substances and radiation devices<br /></div>  <strong>2.0 Safety  and control areas</strong><br />  Series 2.1 Management system<br />
<div className="indent2">2.2 Human performance management<br />
2.3 Operating performance<br />
2.4 Safety analysis<br />
2.5 Physical design<br />
2.6 Fitness for service<br />
2.7 Radiation protection<br />
2.8 Conventional health and safety<br />
2.9 Environmental protection<br />
2.10 Emergency management and fire protection<br />
2.11 Waste management<br />
2.12 Security<br />
2.13 Safeguards and non-proliferation<br />
2.14 Packaging and transport<br /></div>
<strong>3.0 Other regulatory areas</strong><br />
Series 3.1 Reporting requirements<br />
<div className="indent2">3.2 Public and Aboriginal engagement<br />
3.3 Financial guarantees<br />
3.4 Commission proceedings<br />
3.5 Information dissemination</div>  <p><strong>Note:</strong> The regulatory document series may be adjusted periodically by the CNSC. Each regulatory document series listed above may contain multiple regulatory documents. For the latest list of regulatory documents, visit the CNSC&#39;s Web site at <a href="/eng/acts-and-regulations/regulatory-documents/index">nuclearsafety.gc.ca/regulatory-documents</a>.</p>  <h2>Footnotes</h2>  <p><sup><a id="Q1">1</a></sup> Venting is the process of removing unwanted or excess gas from a closed system (for example to reduce pressure or flammable gas concentration), either automatically through relief valves or manually through vent valves opened by the operator.</p>  <p><sup><a id="Q2">2</a></sup> Nominal containment venting is performed to keep containment pressure below its structural limit. Alternate containment venting is a coordinated process involving offsite stakeholders to determine the optimal venting strategy to protect the public and the environment.</p>
<div style="background-color:#cecece;padding:5px;text-align:center;">
<p><a href="#toc">Table of Contents</a></p>
</div>  
                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }