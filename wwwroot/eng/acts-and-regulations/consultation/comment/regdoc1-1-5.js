import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "en",
                pageTitle: "REGDOC-1.1.5, Licence Application Guide: Small Modular Reactor Facilities", 
                dateModified: "2018-07-18",
                langToggleUrl: "/fra/acts-and-regulations/consultation/comment/regdoc1-1-5"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<h2 id="preface">Preface</h2>  <p>Regulatory document REGDOC-1.1.5: <em>Licence Application Guide: Small Modular Reactor Facilities</em>, sets out requirements and guidance for submitting an application to the CNSC for the following types of licences for a small modular reactor (SMR) facility in Canada: licence to prepare site, licence to construct, and a licence to operate. REGDOC-1.1.5 also identifies considerations that the CNSC takes into account when assessing the adequacy of submissions.</p>  <p>This document will be used by CNSC staff to assess licence applications for proposed SMRs, which also include advanced reactors. If the Commission grants a licence, the safety and control measures described in the licence application, along with the documents needed to support the application, will form part of the licensing basis.</p>  <p>A graded approach, commensurate with risk, may be defined and used when applying the requirements and guidance contained in this regulatory document. The use of a graded approach is not a relaxation of requirements, but rather the application of requirements in a manner commensurate with the risks and characteristics of a facility or activity.</p>  <p>The information in this document is consistent with modern national and international practices addressing issues and elements that control and enhance nuclear safety. In particular, it establishes a modern, risk-informed approach to the licensing of SMRs.</p>
<div className="col-md-12 module-table-contents">
<h2>Table of Contents</h2>
<ul>
<li><a href="#sec1">1. Introduction</a>
<ul>
<li><a href="#sec1-1">1.1 Purpose and scope</a></li>
<li><a href="#sec1-2">1.2 Background</a></li>
</ul></li>
<li><a href="#sec2">2. Content of the License Application</a>
<ul>
<li><a href="#sec2-1">2.1 Applicant&#39;s general information</a></li>
<li><a href="#sec2-2">2.2 Applicant&#39;s considerations by safety and control area</a>
<ul>
<li><a href="#sec2-2-1">2.2.1	Management system</a></li>
<li><a href="#sec2-2-2">2.2.2 Human performance management</a></li>
<li><a href="#sec2-2-3">2.2.3 Operating performance</a></li>
<li><a href="#sec2-2-4">2.2.4 Safety analysis</a></li>
<li><a href="#sec2-2-5">2.2.5 Physical design</a></li>
<li><a href="#sec2-2-6">2.2.6 Fitness for service</a></li>
<li><a href="#sec2-2-7">2.2.7 Radiation protection</a></li>
<li><a href="#sec2-2-8">2.2.8 Conventional health and safety</a></li>
<li><a href="#sec2-2-9">2.2.9 Environmental protection</a></li>
<li><a href="#sec2-2-10">2.2.10 Emergency management and fire protection</a></li>
<li><a href="#sec2-2-11">2.2.11 Waste management</a></li>
<li><a href="#sec2-2-12">2.2.12 Security</a></li>
<li><a href="#sec2-2-13">2.2.13 Safeguards and non-proliferation</a></li>
<li><a href="#sec2-2-14">2.2.14 Packaging and transport</a></li>
</ul></li>
<li><a href="#sec2-3">2.3 Other regulatory areas</a></li>
</ul></li>
<li><a href="#appA">Appendix A: Development of the Licensing Basis for a Small Modular Reactor Facility</a>
<ul>
<li><a href="#appA-1">A.1 Applying a graded approach</a></li>
<li><a href="#appA-2">A.2 Proposing alternative approaches</a></li>
</ul></li>
<li><a href="#appB">Appendix B: Role of Pre-Licensing in Establishing the Licensing Basis for a Small Modular Reactor Facility</a>
<ul>
<li><a href="#appB-1">B.1 The role of vendor design review in the licensing process</a></li>
<li><a href="#appB-2">B.2 Scope of the process to establish an appropriate licensing strategy for an SMR project</a>
<ul>
<li><a href="#appB-2-1">B.2.1 Process for determining an appropriate licensing strategy for a novel nuclear technology</a></li>
</ul></li>
<li><a href="#B-3">B.3 Preliminary description of activities and hazards</a>
<ul>
<li><a href="#B-3.1">B.3.1 Information required in the preliminary description</a></li>
</ul></li>
</ul></li>
<li><a href="#glossary">Glossary</a></li>   </ul>
</div>  <div className="clear"></div>
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
<h3 id="sec1-1">1.1 Purpose and scope</h3>  <p>This document provides considerations and guidance on information to be provided to the Canadian Nuclear Safety Commission (CNSC) in support of an application for a licence to prepare site, construct or operate a small modular reactor (SMR) facility. If a licence is granted by the Commission, the information provided in the licence application will form part of the licensing basis.</p>  <p>REGDOC-1.1.5, <em>Licence Application Guide: Small Modular Reactor Facilities</em>, provides information about CNSC safety and control areas as they apply to a licence application for an SMR facility. This document is intended to be used in conjunction with consultations with CNSC staff, as well as with the following three regulatory documents, which set out requirements and guidance for an applicant to review prior to submitting a licence application:</p>
<ul>
<li><a href="/eng/acts-and-regulations/regulatory-documents/published/html/regdoc-1-1-1/index">REGDOC-1.1.1, <em>Licence to Prepare Site and Site Evaluation for New Reactor Facilities</em></a></li>
<li><a href="/eng/acts-and-regulations/regulatory-documents/published/html/rdgd369/index">RD/GD-369, <em>Licence Application Guide: Licence to Construct a Nuclear Power Plant</em></a></li>
<li><a href="/eng/acts-and-regulations/regulatory-documents/published/html/regdoc1-1-3/index">REGDOC-1.1.3, <em>Licence Application Guide: Licence to Operate a Nuclear Power Plant</em></a></li>  	</ul>  <p>If there is a need for an environmental assessment, under applicable federal and provincial environmental assessment (or impact assessment) legislation, this will be identified early in the licensing process (for example, when determining site suitability for a new facility). Before applying for a licence, the applicant will have been informed by CNSC staff if an environmental assessment is required. The proponent may also have been provided with supplemental guidance, in addition to this guide, to help prepare its application.</p>  <p>Appendix A of this document contains guidance on the application of the graded approach and the use of alternative approaches in the development of the licensing basis for SMR facilities. Appendix B outlines the role of pre-licensing in establishing the licensing basis for an SMR. Pre-licensing entails a defined CNSC process to determine an appropriate licensing strategy for an SMR, and it may also include an optional vendor design review.</p>
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
<h3 id="sec1-2">1.2 Background</h3>  <p>The CNSC recognizes that it is a significant undertaking to design an SMR, or to apply for a licence to prepare site for, to build or to operate an SMR. To help with these processes, the CNSC offers two types of pre-licensing engagement:</p>
<ol>
<li><strong>Pre-licensing review of a vendor&#39;s reactor design:</strong> This is commonly referred to as the vendor design review (VDR) process and is discussed briefly in section B.1 of appendix B, and in depth in CNSC regulatory document GD-385, <em>Pre-licensing Review of a Vendor&#39;s Reactor Design</em>. This process involves a CNSC review of a vendor&#39;s design in order to identify and resolve potential regulatory or technical issues that could arise later in the licensing process. A VDR is intended to help a vendor understand regulatory requirements while completing an SMR design, and takes place before a proponent would submit a licence application using the particular design.</li>
<li><p className="mrgn-tp-0"><strong>Pre-licensing engagement:</strong> In pre-licensing engagement (detailed in B.2), the CNSC works with a potential applicant to:</p>
<ul>
<li>Establish an appropriate licensing strategy.</li>
<li>Offer guidance on preparing a licence application for submission to the CNSC.</li>
</ul></li>
<p>Both of these pre-licensing activities (VDR review and pre-licensing engagement) are intended to provide regulatory clarity to a licence applicant. These activities incorporate the risk considerations (described in appendix A) that the CNSC uses when assessing how activities or SMR designs comply with its requirements.</p>  	</ol>
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
<h2 id="sec2">2. Content of the Licence Application</h2>  <p>The following information is presented in sections 2.1, 2.2 and 2.3, respectively, to help guide the proponent&#39;s licence application:</p>
<ul>
<li>Applicant&#39;s general information: Addresses general information on the proposed SMR.</li>
<li>Applicant&#39;s considerations by safety and control area: Addresses information specific to CNSC safety and control areas (SCAs), with respect to the proposed SMR.</li>
<li>Other regulatory areas: Addresses information not covered in the aforementioned two sections (general information and SCA-specific information).</li>  	</ul>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="2.1"></div>
<h3 id="sec2-1">2.1	Applicant&#39;s general information</h3>  <p>This section addresses the requirements of the following regulations made under the <em>Nuclear Safety and Control Act</em>:</p>
<ul>
<li><em>General Nuclear Safety and Control Regulations</em>, paragraphs 3(1)(a), (b), (c), (d), (k) and (m) and sections 15 and 27.</li>
<li><em>Class I Nuclear Facilities Regulations</em>, paragraphs 3(a), (b), (c), (e), (i) and (j).</li>
<li><em>Nuclear Security Regulations</em>, paragraph 3(b).</li>  	</ul>  <p>The licence application shall include the following general information to satisfy the regulations:</p>
<ol>
<li>Applicant&#39;s general information
<ul className="list-lower-alpha">
<li>identification and contact information</li>
<li>applicant&#39;s name and business address</li>
<li>mailing address</li>
<li>all persons who have authority to interact for the applicant with the CNSC</li>
<li>proof of legal status</li>
<li>evidence that the applicant is the owner of the site or has authority from the owner of the site to carry on the activity to be licensed</li>
<li>identification of persons responsible for management and control of the licensed activity</li>
<li>billing contact person</li>
<li>legal signing authority</li>
</ul></li>
<li>Description of the project
<ul className="list-lower-alpha">
<li>statement of the main purpose</li>
<li>description of site</li>
<li>description of the facility&#39;s existing licensing status, if any</li>
<li>permits, certificates and other licences</li>
<li>similar facilities</li>
</ul></li>
<li>Other general information
<ul className="list-lower-alpha">
<li>licence period</li>
<li>nuclear and hazardous substances</li>
<li>supporting information</li>
</ul></li>  	</ol>  <p>The applicant may identify information and documents as being subject to confidentiality requirements.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="2.2"></div>
<h3 id="sec2-2">2.2 Applicant&#39;s considerations by safety and control area</h3>  <p>SCAs are the technical topics that CNSC staff use across all regulated facilities and activities to assess, evaluate, review, verify and report on regulatory requirements and performance.</p>   <p>Consult the CNSC&#39;s <a href="/eng/acts-and-regulations/regulatory-documents/index">Regulatory documents Web page</a> for a list of regulatory documents that may apply to SCAs addressed in a licence application, depending on the proposed activity and type of licence being applied for. These documents provide further expectations and guidance on how adequate measures can be implemented for each SCA.</p>  <p>Sections 2.2.1–2.2.14 provide SCA-specific information that a proponent should consider when determining the extent of the emphasis to give each SCA in a licence application.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="2.2.1"></div>
<h4 id="sec2-2-1">2.2.1 Management system</h4>  <p>The "management system" SCA covers the framework that establishes the processes and programs required to ensure that an organization achieves its safety objectives, continuously monitors its performance against those objectives, and fosters a healthy safety culture.</p>  <p>This SCA covers the following specific areas:</p>
<ol>
<li>Management system.</li>
<li>Organization.</li>
<li>Performance assessment, improvement and management review.</li>
<li>Operating experience.</li>
<li>Change management.</li>
<li>Safety culture.</li>
<li>Configuration management.</li>
<li>Records management.</li>
<li>Management of contractors.</li>
<li>Business continuity.</li>  	</ol>  <p>Consult the CNSC&rsquo;s <a href="/eng/acts-and-regulations/regulatory-documents/index#R9">Regulatory documents Web page</a> for a list of regulatory documents and CSA standards that may be applicable to the management system SCA, depending on the proposed activity and type of licence being applied for.</p>  <p>When describing the management system and the emphasis it should be given, the applicant should address the following considerations:</p>  	<ol>
<li>Complexity of the facility or activity, elements of which may include:
<ul className="list-lower-alpha">
<li>complexity of required managed processes.</li>
<li>complexity of the organization.</li>
<li>number and size of radioactive or nuclear sources present.</li>
<li>number of radioactive sources being used at any one time.</li>
<li>degree of automation.</li>
</ul></li>
<li>Structure of the operating organization</li>
<li>The need for effectively managed processes to control identified hazards, elements of which may include:
<ul className="list-lower-alpha">
<li>change control</li>
<li>design control</li>
<li>document control</li>
<li>work planning and control</li>
<li>corrective action</li>
<li>maintenance</li>
<li>configuration management</li>
<li>operations</li>
<li>operating experience</li>
</ul></li>
<li>Safety culture.</li>
<li>Extent of activities involving risk (to health, safety and the environment) and requiring managed processes and control.</li>
<li>Extent and need for critical human involvement in the activities of the facility.</li>
<li>Remote or local operation.</li>
<li>Number and type of physical, engineered or administrative barriers.</li>
<li>Access control to process or equipment.</li>
<li>The relative significance of integration points between process and programs.</li>  	</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="2.2.2"></div>
<h4 id="sec2-2-2">2.2.2 Human performance management</h4>  <p>The "human performance management" SCA covers activities that enable effective human performance through the development and implementation of processes that ensure a sufficient number of licensee personnel are in all relevant job areas and have the necessary knowledge, skills, procedures and tools in place to safely carry out their duties.</p>  <p><strong>Note:</strong> The human performance management SCA is not included in an application for a licence to prepare site. This SCA is only included in an application for a licence to construct, and an application for a licence to operate.</p>  <p>This SCA covers the following specific areas:</p>
<ol>
<li>Human performance program</li>
<li>Personnel training</li>
<li>Personnel certification</li>
<li>Initial certification examinations and requalification tests</li>
<li>Work organization and job design</li>
<li>Fitness for duty</li>  	</ol>  <p>Consult the CNSC&rsquo;s <a href="/eng/acts-and-regulations/regulatory-documents/index#R10">Regulatory documents Web page</a> for a list of regulatory documents and CSA standards that may be applicable to the human performance management SCA, depending on the proposed activity and type of licence being applied for.</p>  <p>When assessing human performance management and the emphasis it should be given, the applicant should address the following considerations:</p>
<ol>
<li>Complexity of the facility or activity, elements of which may include:
<ul className="list-lower-alpha">
<li>complexity of required managed processes</li>
<li>complexity of the organization</li>
<li>operating model</li>
<li>number and size of radioactive or nuclear sources present</li>
<li>number of radioactive sources being used at any one time</li>
<li>degree of automation</li>
</ul></li>
<li>The need for effective managed processes to control identified hazards, elements of which may include:
<ul className="list-lower-alpha">
<li>change control</li>
<li>design control</li>
<li>document control</li>
<li>work planning and control</li>
<li>corrective action</li>
<li>maintenance</li>
<li>configuration management</li>
<li>operations</li>
<li>operating experience</li>
</ul></li>
<li>Workers, elements of which may include:
<ul className="list-lower-alpha">
<li>complexity of job tasks</li>
<li>competence of management, technical and other staff</li>
<li>risk of not having qualified, trained and experienced personnel</li>
<li>number of staff</li>
<li>type, education and disciplines</li>
</ul></li>
<li>Extent of activities involving risk (to health, safety and the environment) and requiring managed processes and control.</li>
<li>Extent and need of critical human involvement in the activities of the facility.</li>
<li>Probability and potential impact of human error.</li>
<li>Number and type of physical, engineered or administrative barriers.</li>
<li>Access control to process or equipment.</li>  	</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="2.2.3"></div>
<h4 id="sec2-2-3">2.2.3 Operating performance</h4>  <p>The "operating performance" SCA includes an overall review of the conduct of the licensed activities and the activities that enable effective performance.</p>  <p>This SCA covers the following specific areas:</p>
<ol>
<li>conduct of licensed activity</li>
<li>procedures</li>
<li>reporting and trending</li>
<li>outage management performance</li>
<li>safe operating envelope</li>
<li>severe accident management and recovery</li>
<li>accident management and recovery</li>  	</ol>  <p>Consult the CNSC&rsquo;s <a href="/eng/acts-and-regulations/regulatory-documents/index#R11">Regulatory documents Web page</a> for a list of regulatory documents and CSA standards that may be applicable to the operating performance SCA, depending on the proposed activity and type of licence being applied for.</p>  <p>When assessing the operating performance SCA and the emphasis it should be given, the applicant should address the following considerations:</p>
<ol>
<li>availability and applicability of operational experience for similar facilities or activities.</li>
<li>type of activities to be performed.</li>
<li>complexity of operation.</li>
<li>number and type of physical, engineered or administrative barriers.</li>
<li>access control to process or equipment.</li>  	</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="2.2.4"></div>
<h4 id="sec2-2-4">2.2.4 Safety analysis</h4>  <p>The "safety analysis" SCA covers the safety analysis that supports the overall safety case for the facility. Safety analysis is a systematic evaluation of the potential hazards associated with the conduct of a proposed activity or facility and considers the effectiveness of preventive measures and strategies in reducing the effects of such hazards.</p>  <p>This SCA covers the following specific areas:</p>
<ol>
<li>deterministic safety analysis</li>
<li>hazard analysis</li>
<li>probabilistic safety analysis</li>
<li>criticality safety</li>
<li>severe accident analysis</li>
<li>management of safety issues (including R &amp; D programs)</li>  	</ol>  <p>Consult the CNSC&rsquo;s <a href="/eng/acts-and-regulations/regulatory-documents/index#R11">Regulatory documents Web</a> page for a list of regulatory documents and CSA standards that may be applicable to the safety analysis SCA, depending on the proposed activity and type of licence being applied for.</p>  <p>When assessing the safety analysis SCA and the emphasis it should be given, the applicant should address the following considerations:</p>
<ol>
<li>The number of provisions in the design to reduce risk.</li>
<li>The number of process systems.</li>
<li>The number of active safety systems and their interdependence.</li>
<li>The number of passive safety systems.</li>
<li>Dependence on human performance/administrative controls to limit risk.</li>
<li>Total activities involving risk (to health, safety and the environment).</li>
<li>Required managed process controls.</li>
<li>Extent and need for critical human involvement in the activities of the facility.</li>
<li>Probability of failure of structures, systems and components.</li>
<li>Consequences of failure of structures, systems and components.</li>
<li>Ability to manage change in facility design and/or operation as a result of events, operating experience, new knowledge, production or regulatory requirements.</li>
<li>Potential for undesirable chemical, physical and nuclear reactions.</li>
<li>Nature and complexity of safety systems to prevent accidents.</li>
<li>Degree of automation (as it relates to mitigation of potential initiating events or to address consequences thereof).</li>  	</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="2.2.5"></div>
<h4 id="sec2-2-5">2.2.5 Physical design</h4>  <p>The "physical design" SCA relates to activities that affect the ability of structures, systems and components to meet and maintain their design basis, given new information arising over time and taking changes in the external environment into account.</p>  <p>This SCA covers the following specific areas:</p>
<ol>
<li>Design governance</li>
<li>Site characterization</li>
<li>Facility design</li>
<li>Structure design</li>
<li>System design</li>
<li>Component design</li>  	</ol>  <p>Consult the CNSC&rsquo;s <a href="/eng/acts-and-regulations/regulatory-documents/index#R13">Regulatory documents Web page</a> for a list of regulatory documents and CSA standards that may be applicable to the management system SCA, depending on the proposed activity and type of licence being applied for.</p>  <p>When assessing the physical design SCA and the emphasis it should be given, the applicant should address the following considerations:</p>
<ol>
<li>Number of provisions in the design to reduce risk</li>
<li>Number of process systems</li>
<li>Number of active safety systems and their interdependence</li>
<li>Number of passive safety systems</li>
<li>Dependence on human performance/administrative controls to limit risk</li>
<li>Total activities involving risk (to health, safety and the environment)</li>
<li>Required managed process controls</li>
<li>Extent and need for critical human involvement in the activities of the facility</li>
<li>Probability of failure of structures, systems and components multiplied by consequences</li>
<li>Ability to manage change in facility design and/or operation as a result of events, OPEX, new knowledge, production or regulatory requirements.</li>
<li>Requirements for cooling radioactive material or sources</li>
<li>Number and diversity of equipment and systems</li>
<li>Nature and complexity of safety systems to prevent accidents</li>
<li>Degree of automation (as it relates to mitigation of potential initiating events or to address consequences thereof).</li>  	</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="2.2.6"></div>
<h4 id="sec2-2-6">2.2.6 Fitness for service</h4>  <p>The "fitness for service" SCA covers activities that impact the physical condition of structures, systems and components to ensure that they remain effective over time. This area includes programs that ensure all equipment is available to perform its intended design function when called upon to do so.</p>  <p><strong>Note:</strong> The fitness for service SCA is not included in an application for a licence to prepare site. This SCA is only included in an application for a licence to construct, and an application for a licence to operate.</p>  <p>This SCA covers the following specific areas:</p>
<ol>
<li>Equipment fitness for service / equipment performance</li>
<li>Maintenance</li>
<li>Structural integrity</li>
<li>Aging management</li>
<li>Chemistry control</li>
<li>Periodic inspection and testing</li>  	</ol>  <p>Consult the CNSC&rsquo;s <a href="/eng/acts-and-regulations/regulatory-documents/index#R14">Regulatory documents Web page</a> for a list of regulatory documents and CSA standards that may be applicable to the fitness for service SCA, depending on the proposed activity and type of licence being applied for.</p>  <p>When assessing the fitness for service SCA and the emphasis it should be given, the applicant should address the following considerations:</p>
<ol>
<li>Number of provisions in the design to reduce risk</li>
<li>Number of process systems</li>
<li>Number of active safety systems and their interdependence</li>
<li>Number of passive safety systems</li>
<li>Technical and administrative maintenance requirements to keep structures, systems and components functioning as designed.</li>  	</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="2.2.7"></div>
<h4 id="sec2-2-7">2.2.7 Radiation protection</h4>  <p>The "radiation protection" SCA covers the implementation of a radiation protection program in accordance with the <em>Radiation Protection Regulations</em>. This program must ensure that contamination levels and radiation doses received by individuals are monitored, controlled and maintained at a level that is as low as reasonably achievable (ALARA).</p>  <p>This SCA covers the following specific areas:</p>
<ol>
<li>Application of ALARA</li>
<li>Worker dose control</li>
<li>Radiation protection program performance</li>
<li>Radiological hazard control</li>
<li>Estimated dose to public</li>  	</ol>  <p>Consult the CNSC&rsquo;s <a href="/eng/acts-and-regulations/regulatory-documents/index#R15">Regulatory documents Web page</a> for a list of regulatory documents and CSA standards that may be applicable to the radiation protection SCA, depending on the proposed activity and type of licence being applied for.</p>  <p>When assessing the radiation protection SCA and the emphasis it should be given, the applicant should address the following considerations:</p>
<ol>
<li>Number of provisions in the design to reduce risk</li>
<li>Number of process systems</li>
<li>Number of active safety systems and their interdependence</li>
<li>Number of passive safety systems</li>
<li>Magnitude of projected worker doses in relation to regulatory limits and action levels (application of ALARA in reducing doses)</li>
<li>Consequence of failure of program from a worker dose/health perspective</li>
<li>Potential pathways of exposure (ingestion, absorption and inhalation)</li>
<li>Number of sources of radiation</li>
<li>Type of radiation present</li>
<li>Longest decay time of the sources</li>
<li>Mobility of sources</li>
<li>Expected number of workers who may be exposed to radiation</li>
<li>Expected releases that may affect members of the public or the environment</li>  	</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="2.2.8"></div>
<h4 id="sec2-2-8">2.2.8 Conventional health and safety</h4>  <p>The "conventional health and safety" SCA covers the implementation of a program to manage workplace safety hazards and to protect personnel and equipment.</p>  <p>This SCA covers the following specific areas:</p>
<ol>
<li>Performance</li>
<li>Practices</li>
<li>Awareness</li>  	</ol>  <p>Consult the CNSC&rsquo;s <a href="/eng/acts-and-regulations/regulatory-documents/index#R16">Regulatory documents Web page</a> for a list of regulatory documents and CSA standards that may be applicable to the conventional health and safety SCA, depending on the proposed activity and type of licence being applied for.</p>  <p>When assessing the conventional health and safety SCA and the emphasis it should be given, the applicant should address the following considerations:</p>
<ol>
<li>Number, severity and nature of hazards</li>
<li>Type and toxicity of materials</li>
<li>Amount of time hazards will exist</li>
<li>Physical work conditions</li>
<li>Type of operation (fuelling onsite, waste storage, etc.)</li>
<li>Chemical or biological hazards associated with possession and use of nuclear substances</li>  	</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="2.2.9"></div>
<h4 id="sec2-2-9">2.2.9 Environmental protection</h4>  <p>The "environmental protection" SCA covers programs that identify, control and monitor all releases of radioactive and hazardous substances and effects on the environment from facilities or as the result of licensed activities.</p>  <p>This SCA covers the following specific areas:</p>
<ol>
<li>Effluent and emissions control (releases)</li>
<li>Environmental management system</li>
<li>Assessment and monitoring</li>
<li>Protection of the public</li>
<li>Environmental risk assessment</li>  	</ol>  <p>Consult the CNSC&rsquo;s <a href="/eng/acts-and-regulations/regulatory-documents/index#R17">Regulatory documents Web page</a> for a list of regulatory documents and CSA standards that may be applicable to the environmental protection SCA, depending on the proposed activity and type of licence being applied for.</p>  <p>When assessing the environmental protection SCA and the emphasis it should be given, the applicant should address the following considerations:</p>
<ol>
<li>Proximity to sensitive habitat and the public</li>
<li>Environmental pathways (air, water, ground conditions, tailings)</li>
<li>Type of operation (fuelling onsite, waste storage, etc.)</li>
<li>Chemical characteristics (types and concentration) of releases</li>
<li>Volume of releases</li>
<li>Types of facilities</li>
<li>Age of the facility</li>
<li>Environmental risk assessment results (if available)</li>  	</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="2.2.10"></div>
<h4 id="sec2-2-10">2.2.10 Emergency management and fire protection</h4>  <p>The "emergency management and fire protection" SCA covers emergency plans and emergency preparedness programs that exist for emergencies and for non-routine conditions. This area also includes any results of participation in exercises.</p>  <p><strong>Note:</strong> The emergency management SCA includes conventional emergency and fire response. Operations, design and analysis in the context of fire protection for a nuclear facility are discussed in the appropriate SCAs of operating performance, safety analysis and physical design.</p>  <p>This SCA covers the following specific areas:</p>
<ol>
<li>Conventional emergency preparedness and response</li>
<li>Nuclear emergency preparedness and response</li>
<li>Fire emergency preparedness and response</li>  	</ol>  <p>Consult the CNSC&rsquo;s <a href="/eng/acts-and-regulations/regulatory-documents/index#R18">Regulatory documents Web page</a> for a list of regulatory documents and CSA standards that may be applicable to the emergency management and fire protection SCA, depending on the proposed activity and type of licence being applied for.</p>  <p>When assessing the emergency management and fire protection SCA and the emphasis it should be given, the applicant should address the following considerations:</p>
<ol>
<li>Onsite consequences</li>
<li>Types and toxicity of materials</li>
<li>Quantity of accidental radiological/nuclear and/or hazardous substance releases (above or below threshold)</li>
<li>Ability of the applicant and/or municipality (if known) to respond to an emergency</li>
<li>Location, elements of which include:
<ul className="list-lower-alpha">
<li>distance and density of population</li>
<li>nearby infrastructure (facilities)</li>
<li>sensitive environments</li>
</ul></li>  	</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="2.2.11"></div>
<h4 id="sec2-2-11">2.2.11 Waste management</h4>  <p>The "waste management" SCA covers internal waste-related programs that form part of the facility&rsquo;s operations up to the point where the waste is removed from the facility to a separate waste management facility. This area also covers planning for decommissioning.</p>  <p>The waste management SCA covers the following specific areas:</p>
<ol>
<li>Waste characterization</li>
<li>Waste minimization</li>
<li>Waste management practices</li>
<li>Decommissioning plans</li>
</ol>  <p>Consult the CNSC&rsquo;s <a href="/eng/acts-and-regulations/regulatory-documents/index#R19">Regulatory documents Web page</a> for a list of regulatory documents and CSA standards that may be applicable to the waste management SCA, depending on the proposed activity and type of licence being applied for.</p>  <p>When assessing the waste management SCA and the emphasis it should be given, the applicant should address the following considerations:</p>
<ol>
<li>Categories of waste (liquid, solid, mixed waste)</li>
<li>Waste classes (low, intermediate and high)</li>
<li>Volume of waste</li>
<li>Onsite waste processing</li>
<li>Onsite storage</li>
<li>Financial guarantees</li>  	</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="2.2.12"></div>
<h4 id="sec2-2-12">2.2.12 Security</h4>  <p>The "security" SCA covers the programs required to implement and support the security requirements stipulated in the regulations, the licence, orders, or expectations for the facility or activity.</p>  <p>The security SCA covers the following specific areas:</p>
<ol>
<li>Facilities and equipment</li>
<li>Response arrangements</li>
<li>Security practices</li>
<li>Drills and exercises</li>
<li>Cyber security</li>  	</ol>  <p>Consult the CNSC&rsquo;s <a href="/eng/acts-and-regulations/regulatory-documents/index#R20">Regulatory documents Web page</a> for a list of regulatory documents and CSA standards that may be applicable to the security SCA, depending on the proposed activity and type of licence being applied for.</p>  <p>When assessing the security SCA and the emphasis it should be given, the applicant should address the following considerations:</p>
<ol>
<li>Theft of material (highly enriched uranium, low enriched uranium, slightly enriched uranium, plutonium, tritium, other nuclear substances or prescribed equipment and/or information)</li>
<li>Sabotage (risk to facility and/or public)</li>
<li>Location</li>  	</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="2.2.13"></div>
<h4 id="sec2-2-13">2.2.13 Safeguards and non-proliferation</h4>  <p>The "safeguards and non-proliferation" SCA covers the programs and activities required for the successful implementation of the safeguards agreement<sup id="fnb1-ref"><a className="fn-lnk" href="#fnb1"><span className="wb-inv">Footnote </span>1</a></sup> between Canada and the International Atomic Energy Agency (IAEA), as well as all other measures arising from the <em>Treaty on the Non Proliferation of Nuclear Weapons</em>.</p>  <p>The safeguards and non-proliferation SCA covers the following specific areas:</p>
<ol>
<li>Nuclear material accountancy and control</li>
<li>Access and assistance to the IAEA</li>
<li>Operational and design information</li>
<li>Safeguards equipment, containment and surveillance</li>
<li>Import and export</li>  	</ol>  <p>Consult the CNSC&rsquo;s <a href="/eng/acts-and-regulations/regulatory-documents/index#R21">Regulatory documents Web page</a> for a list of regulatory documents and CSA standards that may be applicable to the safeguards and non-proliferation SCA, depending on the proposed activity and type of licence being applied for.</p>  <p>When assessing the safeguards and non-proliferation SCA and the emphasis it should be given, the applicant should address the following considerations:</p>
<ol>
<li>Types, quantity and form of nuclear materials</li>
<li>Measures taken to report, contain, verify and provide other information required by Canada&#39;s international obligations</li>  	</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="2.2.14"></div>
<h4 id="sec2-2-14">2.2.14 Packaging and transport</h4>  <p>The "packaging and transport" SCA covers programs that cover the safe packaging and transport of nuclear substances to and from the licensed facility.</p>  <p>The packaging and transport SCA is not included in an application for a licence to prepare site. This SCA is only included in an application for a licence to construct, and an application for a licence to operate.</p>  <p>The packaging and transport SCA covers the following specific areas:</p>
<ol>
<li>Package design and maintenance</li>
<li>Packaging and transport</li>
<li>Registration for use</li>  	</ol>  <p>Consult the CNSC&rsquo;s <a href="/eng/acts-and-regulations/regulatory-documents/index#R22">Regulatory documents Web page</a> for a list of regulatory documents and CSA standards that may be applicable to the packaging and transport SCA, depending on the proposed activity and type of licence being applied for.</p>  <p>When assessing the packaging and transport SCA and the emphasis it should be given, the applicant should address the following considerations:</p>
<ol>
<li>Frequency of shipments</li>
<li>Number of packages</li>
<li>Type and category of packages transported</li>
<li>Activity and physical form of radioactive material</li>
<li>Consignor vs consignee functions</li>
<li>Potential package contamination events</li>
<li>Type of region through which the shipment travels, if known (i.e., rural area versus a populated area)</li>  	</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="2.3"></div>
<h3 id="sec2-3">2.3 Other regulatory areas</h3>  <p>The following other regulatory areas are relevant to an application for a licence to prepare site for, to construct or to operate an SMR:</p>   <ol>
<li>Public information and disclosure program</li>
<li>Aboriginal engagement</li>
<li>Intergovernmental consultation</li>
<li>Financial guarantees</li>  	</ol>  <p>Consult the CNSC&rsquo;s <a href="/eng/acts-and-regulations/regulatory-documents/index#R23">Regulatory documents Web page</a> for a list of regulatory documents that articulate CNSC expectations and guidance on how to comply with regulatory requirements, and on content of licensing submissions, for the above-mentioned four matters.</p>
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
<h2 id="appA">Appendix A: Development of the Licensing Basis for a Small Modular Reactor Facility</h2>  <p>When applying for a licence to prepare site for, to construct or to operate a small modular reactor facility (SMR), the applicant is to address CNSC requirements in a manner that is commensurate with the novelty, complexity and potential for harm that the activity represents.</p>   <p>The CNSC&rsquo;s regulatory framework is an evolving set of requirements based on more than 70 years of operating experience, and is intended to be technology-neutral. However, as many requirements were originally written to reflect experience from water-cooled reactor designs, the CNSC recognizes that a graded approach may be applied, or alternative approaches used, to meet the intent of some requirements or to make a compelling case that the application of the requirements would not serve the underlying purpose or is not necessary to achieve the underlying purpose.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appA.1"></div>
<h3 id="appA-1">A.1 Applying a graded approach</h3>  <p>The graded approach is a method or process by which elements such as the level of analysis, the depth of documentation and the scope of actions necessary to comply with requirements are commensurate with the following:</p>
<ol>
<li>The relative risks to health, safety, security, the environment, and the implementation of international obligations to which Canada has agreed</li>
<li>The characteristics of a facility or activity</li>  	</ol>  <p>The Commission makes independent and objective decisions to ensure that risks are managed to a reasonable level, taking into consideration regulatory requirements, best available information from regulatory or credible third-party research, and all information provided by applicants/licensees, stakeholders, Indigenous peoples and staff. CNSC staff make recommendations to the Commission based on thorough assessments of factual evidence.</p>   <p>The Commission recognizes the role of professional judgment, particularly in areas where no objective standards exist. Its independence and transparency in decision making are supported by fair, open, transparent and predictable regulatory processes.</p>   <p>The CNSC carries out all of its activities in the context of risk-informed decision making. It considers information from operational experience, licensee performance, safety assessments, and expert judgment when developing regulatory requirements and guidance, and in planning activities for licensing, certification and compliance. In the development of regulatory requirements and guidance, risk insights are taken into account to prevent unreasonable risk to people and the environment.</p>  <p>Understanding risks, including associated uncertainties, and ensuring that these risks are mitigated plays a significant role in making regulatory recommendations and decisions. The risks and mitigation approaches need to be clearly described and well understood in order for the Commission to make an informed decision. Supporting evidence and the quality of that evidence is critical.</p>  <p>In their assessment of alternatives proposed by an applicant (see section A.2), CNSC staff evaluate if the alternatives:</p>
<ol>
<li>Meet regulatory requirements</li>
<li>Meet high-level safety objectives.</li>
<li>Meet fundamental safety functions of "control, cool, contain"</li>  	</ol>  <p>While demonstrating appropriate:</p>
<ol>
<li>Defence in depth</li>
<li>Safety margins in view of the uncertainties in the safety case and of specific hazards over the facility&rsquo;s lifecycle.</li>  	</ol>  <p>The CNSC applies proportionality<sup id="fnb2-ref"><a className="fn-lnk" href="#fnb2"><span className="wb-inv">Footnote </span>2</a></sup> to all safety and control areas (SCAs) in order to place an appropriate amount of regulatory scrutiny on activities, depending on the level of risk. Primary considerations for the extent and depth of application are the degree of novelty, complexity and potential harm posed by the proposed activity or facility. The degree of scrutiny, which may vary either upward or downward, is further informed by:</p>
<ul>
<li>Technical assessments of submissions</li>
<li>Safety performance history of the licensee (if applicable)</li>
<li>Relevant research</li>
<li>Information supplied by parties relevant to Commission proceedings</li>
<li>National and international activities that advance knowledge in nuclear and environmental safety</li>
<li>Cooperation with other regulatory bodies</li>  	</ul>  <p>When the CNSC assesses applications that use a graded approach, its primary consideration is to ensure that risk is demonstrated to be at a reasonable level. This includes ensuring that:</p>
<ul>
<li>Regulatory requirements have been met.</li>
<li>Fundamental safety functions have been met.</li>
<li>Defence in depth is demonstrated.</li>
<li>Safety margins are appropriate and in line with specific hazards over the facility&rsquo;s lifecycle.</li>  	</ul>  <p>Existing expectations provide a starting point for regulatory review, but each case will be reviewed on its own merits.</p>  <p>More detailed information on risk-informed techniques and other methodologies can be found in CAN/CSA-IEC/ISO 31010-10, <em>Risk management &ndash; Risk assessment techniques</em>.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appA.2"></div>
<h3 id="appA-2">A.2 Proposing alternative approaches</h3>  <p>The CNSC will consider alternative approaches to the requirements in its regulatory framework where one or more of the following conditions apply:</p>
<ol>
<li>The alternative approach would result in an equivalent or superior level of safety to that of the approach stated in the requirement.</li>
<li>The application of one or more CNSC requirement(s) would conflict with other rules or requirements.</li>
<li>The application of one or more CNSC requirement(s) would not serve the underlying purpose of the requirement(s) or is not necessary to achieve the underlying purpose of the requirement(s).</li>  	</ol>  <p>Any alternative approach shall demonstrate equivalence to the outcomes associated with the use of applicable requirements. Where risk characteristics contain uncertainties, the amount of evidence required for the applicant to demonstrate a credible decision increases. Suitable evidence may include results of research and development, computer modelling and consideration of operating experience, and the evidence must be demonstrated to be relevant to the specific proposal. All of these types of evidence should be documented, traceable and quality- assured. A proponent that is considering a licence application for an SMR is encouraged to engage with the CNSC early on, well in advance of submitting the application, in order to understand CNSC expectations for management systems and quality assurance. This will inform research and development work, with a view to supporting a potential future licence application.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appB"></div>
<h2 id="appB">Appendix B: Role of Pre-Licensing in Establishing the Licensing Basis for a Small Modular Reactor Facility</h2>  <p>There are two types of pre-licensing engagement with the CNSC:</p>
<ul>
<li>The vendor design review (VDR) process.</li>
<li>The process for establishing an appropriate strategy for risk-informed licensing.</li>  	</ul>  <p>Figure 1 illustrates these two types of pre-licensing activities at a conceptual level, including how the two processes can overlap while incorporating graded-approach considerations.</p>  <p><strong>Figure 1: Pre-Licensing Engagement Activities in Establishing the Licensing Basis for a Small Modular Reactor Facility</strong></p>
<div className="module-poster span-5">  	<img src="/images/regulatory-documents/regdoc-1-1-5/figure-1-eng.png" alt="" />
</div>  <div className="clear"></div>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appB.1"></div>
<h3 id="appB-1">B.1	The role of vendor design review in the licensing process</h3>  <p>SMRs differ greatly in size, design, and operation. Each SMR design has also varying degrees of uncertainty, which SMRs of similar types may address differently. In light of this variability, a vendor may wish to consult with the CNSC prior to licensing to ensure that its design meets high-level Canadian requirements. The CNSC offers an optional vendor design review (VDR) optional service in this regard.</p>  <p>A VDR is separate from the licensing process, and its primary purpose is to inform the vendor of the design&#39;s overall acceptability. This review provides early identification and resolution of potential regulatory or technical issues in the design process, particularly those that could result in significant changes to the design or safety case.</p>   <p>In a VDR, the CNSC enters into a service agreement with the vendor that is based on a fixed scope of work, under which the vendor can gain a comprehensive grasp of Canadian regulatory requirements while the CNSC can develop a better understanding of the specific technology being presented.</p>   <p>The VDR process is divided into three phases, each requiring increasingly detailed technical information, and is fully described in CNSC regulatory document GD-385, <em>Pre-licensing Review of a Vendor&#39;s Reactor Design</em>.</p>  <p>While the VDR process is separate from the process for determining an appropriate licensing strategy (described in section B.2), outputs from each phase can inform the determination of an appropriate licensing strategy. VDR results may also be used by an applicant in the licensing process.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appB.2"></div>
<h3 id="appB-2">B.2	Scope of the process to establish an appropriate licensing strategy for an SMR project</h3>  <p>The CNSC has a defined process for determining an appropriate licensing strategy for a novel nuclear technology. This process ensures that a risk-informed approach is systematically and consistently applied in the development of a licensing strategy for an innovative activity or facility that uses technology that is new to Canada.</p>  <p>This process is carried out prior to any licence application. It begins via early CNSC engagement with a potential SMR applicant to reach a common understanding of the nature of the proposed design and of the specificities of the approach to operation. Information acquired through a VDR can be very useful, and can be used in the licensing process at the applicant&#39;s discretion.</p>   <p>The establishment of a licensing strategy begins with a high-level analysis of the proposed project, including scoping of applicable regulations and regulatory process. Applicable regulatory documents and practices, with recommendations on their risk-informed application, are also identified. In some instances, a determination may be made that a licence under the NSCA is not required – for example, for the testing of a thermalhydraulic loop without the use of any nuclear substances.</p>  <p>The outcome of this process is an appropriate risk-informed strategy, which the CNSC will ultimately use in developing supplemental guidance for an applicant on how to prepare a licence application for a given project. The process is expected to be iterative, with several interactions between the CNSC and an applicant before the CNSC develops this supplemental guidance.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appB.2.1"></div>
<h4 id="appB-2-1">B.2.1	Process for determining an appropriate licensing strategy for a novel nuclear technology</h4>  <p>The process for determining an appropriate licensing strategy for a novel nuclear technology is divided into the following four activities:</p>
<ul className="list-bullet-none">
<li>Activity A:	Prepare for and establish preliminary description of activities and hazards.</li>
<li>Activity B:	Conduct risk assessment and document proposed strategy for novel nuclear technology.</li>
<li>Activity C:	Decide on licensing strategy.</li>
<li>Activity D:	Communicate licensing strategy via supplemental guidance letter.</li>  	</ul>  <p>The following text provides detailed descriptions of activities A, B, C and D.</p>
<h5>Activity A: Prepare for and establish preliminary description of activities and hazards</h5>  <p>The proponent provides conceptual information about the technology design to the CNSC. The proponent may also choose to submit information resulting from an optional VDR. See Section B.3 for additional guidance on what should be included in the preliminary description.</p>  <p>A discussion is facilitated with the proponent to understand what activities are being planned and the associated time frames. This communication with the proponent allows the CNSC to gain the required preliminary information about the activity or facility being proposed in Canada.</p>
<h5>Activity B: Conduct risk assessment and document proposed strategy for novel nuclear technology</h5>  <p>CNSC staff discuss the applicant&#39;s proposal and document a risk-informed licensing strategy report. This report documents the CNSC&#39;s understanding of the proposal and the key areas where risks influence the nature of the provisions (or safety and control measures) to satisfy the requirements of the relevant safety and control areas.</p>   <p>This activity involves:</p>
<ol>
<li>Evaluating risks and technical challenges.</li>
<li>Requesting additional information from the proponent where necessary.</li>
<li>Making a recommendation on whether a licence is required under section 26 (a–f) of the <em>Nuclear Safety and Control Act</em>.</li>
<li>Identifying applicable regulations and recommended application guides, regulatory documents and technical criteria that would be most appropriate.</li>  	</ol>
<h5>Activity C: Decide on licensing strategy</h5>  <p>CNSC staff prepare a report describing the proposed licensing strategy and seek approval from CNSC senior management for the report. (These steps are completed using internal CNSC processes.)</p>  <p>If staff recommendations made in the report are approved, a decision on the case-specific licensing strategy is formally documented in a supplemental guidance letter that is sent to the applicant.</p>
<h5>Activity D: Communicate licensing strategy via supplemental guidance letter</h5>  <p>Following the decision by CNSC management in Activity C, a supplemental guidance letter is prepared for the proponent. An applicant can then use this guidance in conjunction with section 2 of this document to prepare a licence application.</p>   <p>The supplemental guidance letter:</p>
<ul>
<li>Includes an overview of applicable regulations, licence application guides and information to be submitted in support of a licence application, and identifies a CNSC single point of contact.</li>
<li>May also provide information on the following: applicability of an environmental assessment; public and Indigenous consultation; considerations with respect to nuclear liability, security and safeguards; and potential licensing timelines.</li>  	</ul>  <p>The supplemental guidance letter is <strong>not</strong> a licensability statement and will not fetter the decision making of the Commission.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appB.3"></div>
<h3 id="appB-3">B.3	Preliminary description of activities and hazards</h3>  <p>The preliminary description of activities and hazards provided by the proponent should outline the activities and hazards, over the life of a potential project, to an extent that will allow CNSC staff to initiate a technical assessment in order to document regulatory considerations and propose a licensing strategy.</p>  <p>The preliminary description should be of sufficient detail to allow CNSC staff to:</p>
<ul>
<li>Understand the nature of the activities, including the hazards they may present to workers, the public and the environment.</li>
<li>Proceed to Activity B (conduct risk assessment and document proposed strategy for novel nuclear technology), which documents regulatory considerations and proposes the requirements applicable to the proposal and a draft licensing strategy.</li>  	</ul>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appB.3.1"></div>
<h4 id="appB-3-1">B.3.1	Information required in the preliminary description</h4>  <p>The purpose of the preliminary description is to provide necessary information for CNSC staff to document regulatory considerations and propose an appropriate licensing strategy.</p>  <p>The intent is for CNSC staff to obtain sufficient detail so as to obtain a preliminary understanding of the proposed activity and hazards.</p>   <p>The three topics of specific criteria are as follows:</p>
<ol>
<li>Description of the purpose of the project and key activities to be conducted.</li>
<li>Description of the nuclear facility or activity.</li>
<li>Estimate of quantity, form, origin and volume of any radioactive waste or hazardous waste.</li>  	</ol>  <p>The three topics are covered in further detail in the following sections.</p>
<h5>Description of the purpose of the project and key activities to be conducted</h5>  <p>The project should encompass the entire lifecycle up to and including decommissioning. Specific project dates are not required. Instead, relative times for conduct of each phase and sets of key activities should be provided.</p>  <p>The purpose of the project and key activities to be conducted should, at a conceptual level, describe:</p>
<ul>
<li>The ultimate purpose of the project, including primary objectives to be achieved as a result of performance of the project. (for example, a facility for the purpose of conducting research to support a safety case for a future demonstration facility).</li>
<li>Operating experience that exists from similar types of projects (if applicable).</li>
<li>The preliminary timelines of key project phases which have been identified, for example:
<ul>
<li>licence submissions</li>
<li>preparation of the site</li>
<li>construction/installation</li>
<li>commissioning</li>
<li>operational phase</li>
<li>decommissioning</li>
<li>site closure</li>
</ul></li>
<li>key project activities and organizational arrangements that have been identified for each project phase</li>  	</ul>
<h5>Description of the nuclear facility or activity</h5>  <p>The description should describe, as applicable, the following information at a conceptual level:</p>
<ul>
<li>The proposed plans of the nuclear facility, showing its layout, location, the location of its components and the location of adjacent areas that may be occupied by persons.</li>
<li>Where the facility may be located (e.g., on a university campus, near a populated region as an industrial facility, in a sparsely populated region).</li>
<li>The key structures and systems such that the operation of structures and systems by persons can be understood by CNSC staff for the purpose of understanding the proponent&#39;s description of potential hazards under all facility operating states.</li>
<li>The proposed organizational arrangements for the conduct of the activities to be licensed.</li>
<li>An estimate of quantity, form, origin and volume of any radioactive waste or hazardous waste that may result from the activity to be licensed, including waste that may be stored, managed, processed or disposed of at the site of the activity to be licensed, and the proposed method for managing and disposing of that waste.</li>
<li>How the environment could adversely affect the project (e.g., overview of key external natural or human induced events of concern being considered).</li>
<li>Key evolutions or configuration changes planned for the facility that could impact the safety case.</li>
<li>A description of radiological and non-radiological malfunctions and accidents that may occur at the facility in connection with each phase of the project as well as:
<ul>
<li>preventive measures being considered and mitigation measures such as monitoring, contingency, clean up or restoration work in the surrounding environment that would be required during or immediately following the postulated malfunction and accident scenarios</li>
<li>the source, quantity, mechanism, pathway, rate, form and characteristics of contaminants and other materials (physical and chemical) likely to be released to the surrounding environment during the postulated malfunctions and accidents</li>
<li>potential consequences to health of workers, the public and environment</li>
</ul></li>
<li>The conceptual environmental releases.</li>  	</ul>     <h5>Estimate of quantity, form, origin and volume of any radioactive waste or hazardous waste</h5>  <p>The preliminary description should describe, at a conceptual level, the radioactive and/or hazardous wastes that will be generated:</p>
<ul>
<li>During normal operation</li>
<li>As a result of major configuration changes planned for the facility over its life cycle</li>
<li>As a result of decommissioning</li>  	</ul>  <p>For each type of waste that will be produced, the following should be described:</p>
<ul>
<li>Where and how waste will originate</li>
<li>Estimates of quantities of each form to be generated</li>
<li>Hazards associated with handling and storage</li>
<li>Methods being considered for managing and disposing of the waste</li>  	</ul>
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
<div className="wb-fnote" role="note">
<section>
<h2 id="endnotes" className="mrgn-tp-md">Footnotes</h2>
<dl>
<dt>Footnote 1</dt>
<dd id="fnb1">
<p>Canada signed a comprehensive safeguards agreement with the IAEA in 1972 (IAEA INFCIRC/164, <em>Agreement Between the Government of Canada and the International Atomic Energy Agency for the Application of Safeguards in Connection with the Treaty on the Non Proliferation of Nuclear Weapons</em>). In 2000, an additional protocol (IAEA INFCIRC/164/Add.1, <em>Protocol Additional to INFCIRC/164) was brought into force</em>.</p>
<p className="fn-rtn"><a href="#fnb1-ref"><span className="wb-inv">Return to footnote </span>1<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 2</dt>
<dd id="fnb2">
<p>In this context, the following three terms are interchangeable: graded, risk-informed and proportional.</p>
<p className="fn-rtn"><a href="#fnb2-ref"><span className="wb-inv">Return to footnote </span>2<span className="wb-inv"> referrer</span></a></p>
</dd>
</dl>
</section>  </div>  <br />
<h2 id="glossary">Glossary</h2>  <p>For definitions of terms used in this document, see <a href="http://www.nuclearsafety.gc.ca/pubs_catalogue/uploads/REGDOC-3-6-Glossary-of-CNSC-Terminology-eng.pdf">REGDOC-3.6, <em>Glossary of CNSC Terminology</em></a>, which includes terms and definitions used in the <a href="http://laws-lois.justice.gc.ca/eng/acts/N-28.3/"><em>Nuclear Safety and Control Act</em></a> and the regulations made under it, and in CNSC regulatory documents and other publications. REGDOC-3.6 is provided for reference and information.</p>
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
<p>Effective April 2013, the CNSC&#39;s catalogue of existing and planned regulatory documents has been organized under three key categories and twenty-five series, as set out below. Regulatory documents produced by the CNSC fall under one of the following series:</p>
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
<p><strong>Note:</strong> The regulatory document series may be adjusted periodically by the CNSC. Each regulatory document series listed above may contain multiple regulatory documents. For the latest list of regulatory documents, visit the <a href="http://www.nuclearsafety.gc.ca/eng/acts-and-regulations/regulatory-documents/index">CNSC&#39;s website</a>.</p>
</div>  <div className="clear"></div>

                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }