import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "en",
                pageTitle: "Draft for Public Consultation REGDOC-2.3.1: Commissioning of Reactor Facilities", 
                dateModified: "2013-11-01",
                langToggleUrl: "/fra/acts-and-regulations/consultation/comment/regdoc2-3-1"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="preface"></div>
<h2 className="mrgn-tp-0">Preface</h2>
<p> This regulatory document is part of the CNSC&#39;s Operating Performance series of regulatory documents, which also covers accident management and periodic safety reviews. The full list of regulatory document series is included at the end of this document and can be found on the CNSC&#39;s Web site at <a href="http://www.nuclearsafety.gc.ca/eng/acts-and-regulations/regulatory-documents/index">nuclearsafety.gc.ca/eng/acts-and-regulations/regulatory-documents/index</a></p>
<p>REGDOC-2.3.1, <em>Commissioning of Reactor Facilities</em>, sets out requirements and guidance for the commissioning of facilities in Canada that use nuclear reactors. These facilities (hereafter called &quot;reactor facilities&quot; in this document) include:</p>
<ul>
<li>nuclear power plants (NPPs) or small reactors for the generation of power or heat for industrial process</li>
<li>small reactors for non-power-generation uses (e.g., isotope production, and research and development activities)</li>
</ul>
<p>The requirements and guidance in this document apply primarily to NPPs. However, the principles behind the requirements and guidance are equally applicable to smaller facilities in a risk-informed (graded) manner, and should be considered in the overall safety case for any reactor facility.</p>
<p>Key principles used in developing this document and the associated regulatory document are consistent with national and international documents. In particular, this document takes into account IAEA&nbsp;NS-G-2.9, <em>Commissioning for Nuclear Power Plants</em>.</p>
<p>This document is intended to form part of the licensing basis for a regulated facility or activity. It is intended for inclusion in licences as either part of the conditions and safety and control measures in a licence, or as part of the safety and control measures to be described in a licence application and the documents needed to support that application.</p>  <div className="alert alert-info col-md-12">  <h3><span className="">Important note</span></h3>
<p>Where referenced in a licence either directly or indirectly (such as through licensee-referenced documents), this document is part of the licensing basis for a regulated facility or activity.</p>
<p>The licensing basis sets the boundary conditions for acceptable performance at a regulated facility or activity, and establishes the basis for the CNSC&#39;s compliance program for that regulated facility or activity.</p>
<p>Where this document is part of the licensing basis, the word &quot;shall&quot; is used to express a requirement, to be satisfied by the licensee or licence applicant. &quot;Should&quot; is used to express guidance or that which is advised. &quot;May&quot; is used to express an option or that which is advised or permissible within the limits of this regulatory document. &quot;Can&quot; is used to express possibility or capability.</p>
<p>Nothing contained in this document is to be construed as relieving any licensee from any other pertinent requirements. It is the licensee&#39;s responsibility to identify and comply with all applicable regulations and licence conditions.</p>
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
<div id="toc"></div>
<div className="col-md-12 module-table-contents">
<h2>Table of Contents</h2>
<ul>
<li><a href="#sec1">1.0 Introduction</a>
<ul>
<li><a href="#sec1-1">1.1 Purpose</a></li>
<li><a href="#sec1-2">1.2 Scope</a></li>
<li><a href="#sec1-3">1.3 Relevant legislation</a></li>
</ul>
</li>
<li><a href="#sec2">2. Commissioning Program</a></li>
<li><a href="#sec3">3. Management and Organization</a>
<ul>
<li><a href="#sec3-1">3.1 Management system</a></li>
<li><a href="#sec3-2">3.2 Organizational responsibilities</a></li>
<li><a href="#sec3-3">3.3 Transfer of SSCs and the reactor facility</a></li>
<li><a href="#sec3-4">3.4 Qualifications and training</a></li>
<li><a href="#sec3-5">3.5 Performance measurement, assessment and improvement</a></li>
<li><a href="#sec3-6">3.6 Emergency management</a></li>
</ul>
</li>
<li><a href="#sec4">4.0 Commissioning Tests</a>
<ul>
<li><a href="#sec4-1">4.1 Test objectives</a></li>
<li><a href="#sec4-2">4.2 Test scope and methods</a></li>
<li><a href="#sec4-3">4.3 Acceptance criteria</a></li>
<li><a href="#sec4-4">4.4 Test procedures</a></li>
<li><a href="#sec4-5">4.5 Review, evaluation and reporting of test results</a></li>
<li><a href="#sec4-6">4.6 Modifications</a></li>
</ul>
</li>
<li><a href="#sec5">5. Testing Phases and Regulatory Hold Points</a>
<ul>
<li><a href="#sec5-1">5.1 Phase A: Prior to fuel load</a></li>
<li><a href="#sec5-2">5.2 Phase B: Prior to leaving reactor shutdown state</a></li>
<li><a href="#sec5-3">5.3 Phase C: Approach to critical and low-power tests</a></li>
<li><a href="#sec5-4">5.4 Phase D: High-power tests</a></li>
</ul>
</li>
<li><a href="#appA">Appendix A: Recommended Phase A Commissioning Tests</a></li>
<li><a href="#appB">Appendix B: Recommended Phase B Commissioning Tests</a></li>
<li><a href="#appC">Appendix C: Recommended Phase C Commissioning Tests</a></li>
<li><a href="#appD">Appendix D: Recommended Phase D Commissioning Tests</a></li>
<li><a href="#appE">Appendix E: Recommended Organizational Responsibilities</a></li>
<li><a href="#appF">Appendix F: Recommended Interface Arrangements</a></li>
<li><a href="#gloss">Glossary</a></li>
<li><a href="#ref">References</a></li>
<li><a href="#info">Additional Information</a></li>
</ul>  </div>  <div className="clear"></div>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="1"></div>
<h2 id="sec1" className="mrgn-tp-0">1. Introduction</h2>
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
<h3 id="sec1-1" className="mrgn-tp-0">1.1 Purpose</h3>
<p>REGDOC-2.3.1, <em>Commissioning of Reactor Facilities</em>, sets out the requirements and guidance of the Canadian Nuclear Safety Commission (CNSC) for the commissioning of facilities in Canada that use nuclear reactors. These facilities (hereafter called &quot;reactor facilities&quot; in this document) include:</p>
<ul>
<li>nuclear power plants (NPPs) or small reactors for the generation of power or heat for industrial processes</li>
<li>small reactors for non-power generation uses (e.g., isotope production, and research and development activities)</li>
</ul>
<p>This regulatory document also sets out requirements and guidance to ensure that commissioning activities meet applicable codes, standards, and design requirements, and that the reactor facility is capable of operating safely and reliably over its lifetime.</p>
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
<h3 id="sec1-2" className="mrgn-tp-0">1.2 Scope</h3>
<p>This regulatory document applies to the commissioning of a new reactor facility. However, the principles set out in this document also apply to commissioning activities related to the life extension, refurbishment and modification of an existing reactor facility.</p>
<p>This document is not intended to override the requirements of other regulatory documents, codes and standards. Rather, it aims to provide a framework within which these can be applied to provide assurance that commissioning is effectively managed. Applicable regulatory documents, codes and standards are referenced in this document.</p>
<p>Note that, where necessary or deemed important, CANDU-specific experience, requirements and expectations are cited in the guidance material in this document.</p>
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
<h3 id="sec1-3" className="mrgn-tp-0">1.3 Relevant legislation</h3>
<p>The provisions of the <em>Nuclear Safety and Control Act </em>(NSCA) and the regulations made under the NSCA relevant to this document are as follows:</p>
<ul>
<li>subsection 24(4) of the NSCA, which provides that &quot;No licence shall be issued, renewed, amended or replaced&nbsp;- and no authorization to transfer one given&nbsp;- unless, in the opinion of the Commission, the applicant or, in the case of an application for an authorization to transfer the licence, the transferee (<em>a</em>) is qualified to carry on the activity that the licence will authorize the licensee to carry on; and (<em>b</em>) will, in carrying on that activity, make adequate provision for the protection of the environment, the health and safety of persons and the maintenance of national security and measures required to implement international obligations to which Canada has agreed.&quot;</li>
<li>subsection&nbsp;24(5) of the NSCA, which provides that &quot;A licence may contain any term or condition that the Commission considers necessary for the purposes of this Act&hellip;&quot;</li>
<li>section&nbsp;3 of the <em>General Nuclear Safety and Control Regulations</em>, which states the general licence application requirements</li>
<li>paragraph 12(1)(<em>a</em>) of the <em>General Nuclear Safety and Control Regulations</em>, which provides that &quot;Every licensee shall (a) ensure the presence of a sufficient number of qualified workers to carry on the licensed activity safely and in accordance with the Act, the regulations made under the Act and the licence;&quot;</li>
<li>paragraph 12(1)(<em>b</em>) of the <em>General Nuclear Safety and Control Regulations</em>, which provides that &quot;Every licensee shall train the workers to carry on the licensed activity in accordance with the Act, the regulations made under the Act and the licence;&quot;</li>
<li>paragraph 6(<em>g</em>) of the <em>Class I Nuclear Facilities Regulations</em>, which provides that an application for a licence to operate a Class I nuclear facility shall contain, in addition to other information, &quot;the proposed commissioning program for the systems and equipment that will be used at the nuclear facility;&quot;</li>
<li>paragraph 14(2)(<em>b</em>) of the <em>Class I Nuclear Facilities Regulations</em>, which provides that &quot;Every licensee who operates a Class I facility shall keep a record of the results of the commissioning program referred to in the licence;&quot; </li>
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
<div id="2"></div>
<h2 id="sec2" className="mrgn-tp-0">2. Commissioning Program</h2>
<p>The licensee shall establish and implement a program for the commissioning of a reactor facility that:</p>
<ul>
<li>includes management systems and requirements for participating organizations</li>
<li>defines clear responsibilities for commissioning activities and oversight, specifying interfaces between construction, commissioning and operating organizations</li>
<li>is structured to enable the objectives and methods of testing to be understood and to allow management control and coordination</li>
<li>outlines the testing and verification activities that must be performed to ensure that structures, systems and components (SSCs) important to safety are built as designed and meet the requirements of the facility design and safety analysis</li>
<li>verifies safety analysis assumptions and the presence of adequate safety and operating margins between design, safety requirements and normal operating conditions<br/>
ensures tests are only conducted if the reactor facility falls within the range of assumptions made in the safety analysis and the licensing basis remains valid</li>
<li>includes provision of temporary utilities (i.e., power, HVAC, demineralized water, fire protection, lightning, communications, compressed air, waste water processing and discharge)</li>
<li>identifies the security systems to be commissioned before nuclear fuel or material is brought onsite</li>
<li>documents the results of testing and verification activities, and identifies any impacts on&nbsp;or changes to the facility design basis</li>
<li>validates operating and surveillance procedures for which the commissioning tests provide representative activities and conditions</li>
<li>verifies operating and emergency procedures by trial use</li>
<li>ensures integrated system validation of control rooms and control areas</li>
<li>ensures all personnel participating in commissioning activities are trained and qualified </li>
<li>ensures a schedule, including milestones and regulatory hold points, and test results to be submitted for review are identified and communicated to the CNSC</li>
</ul>
<p>The licensee shall submit the commissioning program to the CNSC for approval at least one year before commencing commissioning activities.</p>
<p>For sites that will contain multiple reactor facilities, the commissioning program shall clearly identify and track commissioning activities for each individual unit or module.</p>
<p>The content of the final safety analysis report shall be updated according to commissioning results.</p>
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
<h2 id="sec3" className="mrgn-tp-0">3. Management and Organization</h2>
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
<h3 id="sec3-1" className="mrgn-tp-0">3.1 Management system</h3>
<p>All commissioning and related activities shall be developed and implemented under the control of the licensee using a management system meeting the requirements of CSA&nbsp;N286-12, <em>Management system requirements for nuclear facilities</em>.</p>
<p>The licensee, contractors and the operating, commissioning and construction organizations shall ensure that their management systems of processes, procedures and practices are relevant to their scope, responsibilities and associated activities (i.e. design, construction and operation).</p>
<h4>Guidance</h4>
<p>Management system controls should ensure that safety matters are not dealt with in isolation, but are considered within the context of all commissioning activities. This means that health and safety, environmental, security, quality and economic considerations should be integrated so that requirements for safety are established and applied coherently with other requirements or demands. N286-12 permits the use of a graded approach, based on the relative importance to safety of each activity. </p>
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
<h3 id="sec3-2" className="mrgn-tp-0">3.2 Organizational responsibilities </h3>
<p>The licensee is responsible for safety and security and shall oversee the organization, planning, execution and assessment of the commissioning program.</p>
<p>The licensee shall be responsible for the construction, commissioning and operating organizations, which may be part of the licensee&#39;s organization or from a contracted organization responsible for their scope of work.</p>
<p>The licensee shall ensure that necessary resources are available to carry out the commissioning activities and to establish, implement, assess and continually improve commissioning activities. </p>
<p>During and following commissioning, under the overall direction of the licensee:</p>
<ul>
<li>The construction organization shall ensure that SSCs have been constructed as per design and that quality assurance requirements have been satisfied.</li>
<li>The commissioning organization shall ensure that SSCs are tested to provide assurance that the reactor facility has been properly designed and constructed and is ready for safe operation.</li>
<li>The operating organization shall:
<ul>
<li>carry out operation and maintenance</li>
<li>satisfy itself that the systems transferred comply with the specified performance, design intent and safety case</li>
<li>satisfy itself through integrated system validation exercises that the human-machine system design and supporting mechanisms facilitate human performance in achieving safety and operational goals</li>
<li>accept responsibility for the transferred systems</li>
<li>become competent in the management and operations of the reactor facility</li>
<li>ensure that there will be a sufficient number of qualified workers to operate the facility</li>
</ul>
</li>
<li>SSCs shall be operated in accordance with the assumptions and intent of the commissioning program, respecting the relevant operating limits and conditions that apply to each testing stage.</li>
<li>The responsibilities of other participants such as designers, manufacturers and supporting technical organizations shall be specified in appropriate documents.</li>
</ul>
<p>Interface arrangements shall be identified and agreed upon between the licensee, commissioning organization, operating organization, construction organization and any other organizational units performing the work. The interface arrangements shall be specified in management system documentation and in appropriate contracts.</p>
<p>Interface control shall include the assignment of responsibilities and the establishment of procedures for the identification, review, approval, release, distribution and release of documents that cross organizational boundaries.</p>
<h4>Guidance</h4>
<p>Responsibilities of each organization should remain clear at all times, even if activities overlap in respect to the use of personnel. The participating organizations may adopt various arrangements in discharging their responsibilities. Appendix E provides examples of typical responsibilities, and Appendix F gives further guidance on recommended interface arrangements.</p>
<p>
Commissioning activities should be aligned with the regulatory licensing process. The principal activities performed in commissioning may be divided into the following categories:</p>
<ul>
<li>those associated with the final stage of construction and installation of the reactor facility</li>
<li>those specific to commissioning, including testing and safety review activities</li>
<li>those associated with the operation, security and maintenance of the reactor facility</li>
</ul>
<p>Accordingly, personnel performing the above activities may belong to the construction, commissioning or operating organizations, depending on industrial practice and contractual arrangements, as well as upon the physical size and design of the reactor facility. The composition of these organizations may also be influenced by the availability and experience of personnel performing specialized functions. If the operating organization decides to contract the commissioning activities to another organization, it should be made clear that the ultimate responsibility for commissioning and safety remains with the operating organization.</p>
<p>Integrated system validation and minimum shift complement validation should meet the expectations set out in CNSC guides G-278, <em>Human Factors Verification and Validation Plans</em> and G-323, <em>Ensuring Presence of Sufficient Qualified Staff at Class I Nuclear Facilities&nbsp;- Minimum Staff Complement</em>, respectively.</p>
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
<h3 id="sec3-3" className="mrgn-tp-0">3.3 Transfer of SSCs and the reactor facility</h3>
<p>Appropriate procedures shall be in place for the transfer and ownership of SSCs and the reactor facility from the construction organization and non-licensee commissioning staff to the licensee&#39;s operating organization.</p>  <p>These procedures shall describe the detailed process steps, including responsibilities and authorities of the parties involved.</p>
<p>Prior to fuel-in-core testing, all systems shall be under the control of the operating organization.</p>
<p>Before the transfer takes place, representatives of the organizations involved in the handover process shall carry out facility walk downs of all systems.</p>
<p>The licensee shall maintain responsibility for safety and security at all times during the transfer.</p>
<p>After the transfer, any turnback for rework/repair shall remain under the ownership of the operating organization.</p>
<p>The transfer of shall be documented. All commissioning records shall be turned over to the operating organization&#39;s records-management program and retained for the life of the reactor facility.</p>
<h4>Guidance</h4>
<p>Facility handover includes the transfer of SSCs and documentation, and may also include the transfer of personnel. The transfer of documentation (paper and electronic) is a key feature in the handover process. Documentation should be transferred in system packages and over a reasonable period of time, to enable reactor facility personnel to perform a comprehensive review of every package. Document transfers should also depend on how responsibilities for testing after fuel loading, at initial criticality, at low power and at power escalation are assigned.</p>
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
<h3 id="sec3-4" className="mrgn-tp-0">3.4 Qualifications and training</h3>
<p>Personnel engaged in commissioning activities shall have appropriate training, qualifications and competence to perform their assigned tasks effectively.</p>
<p>Training program subjects relevant to the commissioning program shall include:</p>
<ul>
<li>commissioning procedures</li>
<li>reactor facility systems</li>
<li>conduct of testing and maintaining the reactor facility in safe conditions</li>
<li>procedural and design changes</li>
<li>permanent and temporary modifications</li>
<li>work control and equipment isolation</li>
<li>interfaces of construction, design and operation with commissioning</li>
<li>test limitation boundaries in mechanical and electrical systems</li>
<li>the criteria for, and importance of, reporting incidents and deviations</li>
<li>commissioning methods and techniques</li>
<li>safety culture</li>
<li>nuclear safety, industrial safety, fire protection, radiation protection and security</li>
<li>design criteria, technology and operational limits and conditions (or the equivalent) for the reactor facility</li>
<li>environmental protection and waste management of spent fuel and radioactive waste</li>
<li>full-scope simulator training of operators for reactor start-up, regular operations, reactor shutdown and cooldown and handling of various transients, including accidents</li>
</ul>
<p>Training shall be systematically reassessed based on experience gained in commissioning, including any incidents. Such experience shall be appropriately incorporated into the training material. </p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.5"></div>
<h3 id="sec3-5" className="mrgn-tp-0">3.5 Performance measurement, assessment and improvement</h3>
<p>Commissioning activities that do not conform to requirements shall be identified, and corrective actions shall be employed for their resolution.</p>
<p>Experience and information gained from other commissioning projects shall be reviewed and considered for potential improvements, as applicable.</p>
<h4>Guidance</h4>
<p>Major and safety-related non-conformances should be reported as per CNSC requirements. All personnel should be made aware that they are expected to identify and report non-conformances. A system should be in place to define non-conformances and specify the roles and responsibilities of the licensee, commissioning organization, and other involved organizations for reporting and correcting non-conformances. In addition, this system should incorporate the regulatory approval process for handling problems and non-conformances when required.</p>
<p>Non-conformances of safety significance should be treated as events by the licensee, and resolved via a corrective action program in a graded manner. The process of determining the safety significance and corrective actions of the non-conformance should include appropriate experts and, if necessary, the design authority. Corrective actions should be assessed in relation to their safety significance and dealt with at the appropriate management level.</p>
<p>Records of corrective actions taken to resolve non-conformances should be maintained. The effectiveness of corrective actions in preventing similar non-conformances should be monitored.</p>
<p>Due to the challenging nature of commissioning, such as tight schedules, new technology or limited availability of resources, corrective actions to non-conformances may require a long time and may stay as pending issues even after handovers from one party to another. These pending non-conformances should be tracked to completion. A comprehensive tracking system should be implemented to ensure that non-conformances are resolved as soon as possible, records are maintained and relevant parties are informed.</p>
<p>The commissioning stage yields much information that should be taken into account in the subsequent operation of the reactor facility. Systematic processes and procedures should be established for reporting on and analyzing abnormal events, human errors and &quot;near misses&quot;. Experience gained at this stage should be fed back into the training program for commissioning and operating personnel. Available information on operating experience, including reportable occurrences at the operating power reactor, should be used appropriately in developing and executing procedures. Consideration should also be given to the need for any changes in the design and related documents.</p>
<p>Experience and information gained from commissioning projects should be made available to other licensees, as applicable.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.6"></div>
<h3 id="sec3-6" className="mrgn-tp-0">3.6 Emergency management</h3>
<p>The licensee shall ensure an appropriate plan is in place for managing emergencies during commissioning.</p>
<p>Emergency management to address the radiological consequences of events shall be established from the time that nuclear fuel is brought to the site. Emergency preparedness management shall be in place and tested before fuel loading begins.</p>
<p>All parties involved in the commissioning program shall be trained to cope with any anticipated emergency at the reactor facility under commissioning.</p>
<h4>Guidance</h4>
<p>Emergency management for commissioning should take into account the fact that non-nuclear hazards, such as fire, could arise while the nuclear fuel is on the site.</p>
<p>A potential nuclear hazard could arise if an operating reactor facility is adjacent to a construction site or a commissioning site. If this is the case, emergency management measures should be taken for the protection of construction and commissioning personnel. Emergency management should also take into account any other local hazards.</p>
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
<h2 id="sec4" className="mrgn-tp-0">4. Commissioning Tests</h2>
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
<h3 id="sec4-1" className="mrgn-tp-0">4.1 Test objectives</h3>
<p>Testing is the core activity of the commissioning program. It shall be sufficiently comprehensive to demonstrate that the reactor facility can operate in the modes for which it has been designed.</p>
<p>In developing test objectives, the safety functions of the SSCs shall be systematically reviewed to ensure that all safety requirements are met.</p>
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
<h3 id="sec4-2" className="mrgn-tp-0">4.2 Test scope and methods</h3>
<p>Tests necessary to demonstrate operability, safety and safety-related functions shall be fully performed. For tests which cannot be performed to their fullest extent, it shall be documented how the safety and design intent is met.</p>
<p>Functional and performance requirements and parameters that clearly identify the approach used for each testing aspect shall be defined.</p>
<p>The commissioning program shall have provisions to ensure that there have been no omissions in testing complex systems.</p>
<p>Tests shall be performed under the most realistic operating conditions practicable and shall support analytical tool validation.</p>
<p>Facility-level integrated tests shall be performed for every reactor facility, irrespective of the availability of similar or identical tests from other single- or multi-unit reactor facilities. Where integrated testing cannot be performed for safety reasons, the licensee shall provide a technical argument that includes acceptable testing alternatives to meet the objectives of the commissioning program.</p>
<p>For any offsite tests, their applicability at the component level shall be documented. Their applicability shall also be documented when integrated at system and facility levels.</p>
<p>For multi-unit reactor facilities:</p>
<ul>
<li>component- and system-level integration tests shall be done onsite for every unit in the reactor facility</li>
<li>special provisions shall be made to ensure that the commissioning tests of a unit do not jeopardize the safety of another unit; such provisions shall include safety analysis (of the operating unit), conducting a hazard assessment, obtaining specific written approval from the manager responsible for the operating unit and obtaining the required approvals from the CNSC</li>
<li>that have SSCs common to more than one unit, tests shall be conducted on each unit to provide assurance that the specified performance requirements of these SSCs meet the design intent of each unit</li>
</ul>
<h4>Guidance</h4>
<p>If the testing procedure uses SSC test results from offsite tests, this should be defined and justified, showing the validity and applicability of performed offsite tests to:</p>
<ul>
<li>the onsite physical and functional condition of SSCs</li>
<li>their interfaces with the rest of the reactor facility</li>
</ul>
<p>For some reactor technologies and construction processes, some tests on SSCs performed offsite may need to be considered as part of the commissioning process. In such cases, specific justification should be provided showing the validity of the performed tests for the current installed conditions of the SSCs and related functional and physical interfaces. </p>
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
<h3 id="sec4-3" className="mrgn-tp-0">4.3 Acceptance criteria</h3>
<p>Acceptance criteria for the commissioning tests, against which the acceptability of the test results will be evaluated, shall be defined by the test procedures.</p>
<p>Acceptance criteria shall be classified as either important to safety or not important to safety.</p>
<p>The technical basis of the acceptance criteria, which is consistent with the safety, design and performance requirements, shall be documented in preparation for and prior to conducting the tests.</p>
<h4>Guidance</h4>
<p>CNSC approval of the acceptance criteria important to safety may be needed before performing the commissioning tests. This will depend on the facility-specific commissioning program.</p>
<p>Parameters measured during the test should directly relate to, or correlate with, the design requirements important to safety while recognizing the safety limits and integrity of the structure, system or component. In cases where measured parameters do not directly relate to the acceptance criteria, analytical tools may be used to demonstrate that the safety objectives are met. However, before their first use, the validation and verification of the analytical tools, in compliance with regulatory requirements, should be documented.</p>
<p>Acceptance criteria, especially those directly or indirectly linked to safety, should not change during the execution of a test.</p>
<p>After completion of a test, there may be a discrepancy between the results and acceptance criteria. Observed discrepancies and their resolution should be documented; impact assessment of the discrepancies on the past and pending tests should also be performed and approvals should be secured before proceeding with further tests.</p>
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
<h3 id="sec4-4" className="mrgn-tp-0">4.4 Test procedures</h3>
<p>All commissioning tests shall be performed in accordance with the commissioning program and authorized written procedures.</p>
<p>Preparation of test procedures, including their verification and approval, shall be documented.</p>
<p>The test procedures, including acceptance criteria, shall be reviewed, verified and approved by the design, commissioning and operating organizations.</p>
<p>Test procedures shall establish actions for deviations from procedures, where test results fall outside the acceptance criteria or if unexpected events occur.</p>
<p>Deviations from approved test procedures shall be addressed according to the operating organization&#39;s control change procedures, leading to updated and approved procedures as per the original commissioning program.</p>
<p>Should a deviation occur, tests shall only resume after any existing issue is dispositioned (e.g., through design change, change in operating requirements, or change in operating modes,) by the commissioning organization and approved by the relevant parties.</p>
<p>Depending on the facility-specific commissioning program, some commissioning tests for safety systems may require onsite regulatory oversight. In such cases, the CNSC shall be informed of these tests in a timely manner so that CNSC staff can attend.</p>
<p>Competent personnel and sufficient controls shall be in place to validate test procedures.</p>
<h4>Guidance</h4>
<p>For some tests, the test procedures may require SSCs to be placed in a different configuration than the normal operating configuration. Such deviations or changes may involve temporary interlock bypasses, temporary additional interlocks, temporary system bypasses, valve configurations and instrument settings. Consideration should be given to minimize such arrangements, and to ensure that any deviations from the normal functioning of the as-built systems do not invalidate the test objectives. In such instances, the test procedures should:</p>
<ul>
<li>specify the deviations/changes for the SSCs from the normal operating configurations</li>
<li>specify back-out provisions and anticipate response to events that could arise from the test</li>
<li>provide supporting evidence with reference to safety analysis</li>
<li>include all the necessary steps for the restoration of the SSCs to their normal configuration after the test is completed</li>
<li>include a list of all necessary checks that are needed to ensure that:
<ul>
<li>the deviations/changes are made safely and correctly</li>
<li>the SSCs are returned to their normal configuration safely and correctly</li>
</ul>
</li>
</ul>
<p>Test procedures should use normal facility operating procedures to ease their verification. Where improvements to operating procedures are identified during commissioning, commissioning personnel should consider, in consultation with the operating organization, amending the procedures to permit operating personnel to become familiar with them. Where operating procedures have not yet been developed, the operating organization should have processes in place to manage commissioning records for use in developing operating procedures.</p>
<p>The development, verification and validation of commissioning test procedures may benefit from the use of validated simulator and computer codes. The use of the facility simulator should be considered in training and preparing commissioning teams, particularly for complex commissioning tests or for investigating possible adverse conditions that may occur during the test.</p>
<p>The process for preparing test procedures should allow for sufficient time to:</p>
<ul>
<li>conduct various levels of review, including responding to potential review requests from the CNSC. The scope and depth of reviews should be commensurate with the nature of the test&nbsp;- regardless of whether a test requires SSCs to be placed in a different configuration from the normal operating configuration&nbsp;- and the impact on system safety</li>
<li>report test results</li>
<li>enable review of the test results to proceed safely and efficiently</li>
</ul>
<p>Examples of deviations from approved test procedures to be addressed according to the operating organization&#39;s control change procedures include: </p>
<ul>
<li>a test acceptance criterion that is not met</li>
<li>inability to demonstrate compliance with the acceptance criterion because of at least one of the test conditions not being fulfilled</li>
<li>the determination of an inadvertent change to the test procedure steps that impacts the acceptance criterion</li>
<li>inability to implement the test completely, as developed in the test procedure</li>
</ul>
<p>Should a deviation occur, a review that includes the following should be carried out:</p>
<ul>
<li>immediate corrective actions to ensure facility and personnel safety</li>
<li> safety implications of the deviation</li>
<li>root-causes of the deviation</li>
<li>an assessment of whether the deviation prevents continuation of the commissioning activities</li>
<li>violations of safety and regulatory requirements</li>
<li>appropriate corrective actions, such as:
<ul>
<li>re-performing the test as per procedures</li>
<li>modifying the design</li>
<li>updating the safety analysis</li>
<li>updating/correcting test procedures</li>
<li>updating operational documentation</li>
</ul>
</li>
</ul>
<p>The deviation review process should not be finalized until all corrective actions are completed and the commissioning procedures are updated and approved. For any deviations requiring a design change, the affected test(s) should be repeated to confirm conformance after the design change modifications have been implemented.</p>
<p>For unexpected events, consideration should be given to any fault responses and emergency actions required for each test procedure. In some cases it may be the same response to alarms as would be necessary for planned operation, whereas other cases may require specific actions because of the configuration of the reactor facility during testing. The test procedures should identify the specific limits and conditions applicable to the test and the actions to be taken if the limits are approached.</p>
<p>Although the format of procedures may vary from facility to facility, the contents of test procedures should include the following:</p>
<ul>
<li><strong>Introduction:</strong> a summary of the main test objectives and of the safety aspects to be demonstrated. The system to be tested should be identified and the anticipated test results should be indicated. The relationship of the test being carried out to the main phases of the commissioning program should be highlighted.</li>
<li><strong>Test objectives and methods:</strong> the objectives of the test and the means by which they are to be achieved, including step-by-step actions.</li>
<li><strong>Limiting criteria:</strong> applicable operational limits and conditions, including temporary ones. Limits and conditions that must be adhered to in order to prevent damage to the reactor facility should also be included.</li>
<li><strong>Prerequisites and initial conditions:</strong> the state of all relevant SSCs and other pertinent conditions that might affect the operation of the system to be tested (including coordinating construction, commissioning, operations, verification activities and hold points), particularly if different from normal. This information should include, where appropriate, the precautions necessary to maintain the desired system configuration.</li>
<li><strong>Test conditions and procedures:</strong> the way in which the system to be tested is required to be brought up to test conditions and details of the test procedures, preferably be in a step-by-step format. This information should include any temporary changes or abnormal alignments of the system or of adjacent systems, and supported by safety analysis.</li>
<li><strong>Acceptance criteria:</strong> the stated acceptance criteria. Wherever possible, this statement should be quantitative as well as qualitative (e.g., for fuel loading).</li>
<li><strong>List of instrumentation and special test equipment:</strong> all special equipment and calibrations necessary to perform the test. The equipment should have appropriate accuracy and should be clearly identifiable.</li>
<li><strong>Staffing, qualification and responsibilities: </strong>staffing needs, qualification requirements and assignment of duties and responsibilities for conducting tests, including personnel required to oversee and/or witness.</li>
<li><strong>Special precautions:</strong> measures and actions necessary for the safety of personnel and the security of equipment.</li>
<li><strong>Completion of test:</strong> indication by the responsible personnel that the test has been completed and the systems have been returned to normal conditions. The removal of temporary changes or of any abnormal lineup should be individually specified (i.e., as steps in the test procedure).</li>
<li><strong>Permanent records:</strong> information necessary for permanent records, including baseline data.</li>
<li><strong>Identification, cross-referencing and distribution:</strong> a unique identification system (such as one using reference numbering), including comprehensive cross-references to associated documents and a distribution list of those persons who should receive it.</li>
<li><strong>Data collection and processing:</strong> arrangements for tabulating data and test results. Test sheets should have standardized forms and each sheet should be signed by the data collector. Chronological recording is desirable (test data, date and time). Data pre-processing by the data acquisition system and post-processing, if any, should be validated and verified.</li>
<li><strong>Non-conformities:</strong> arrangements to manage any non-conformities identified as a result of the tests.</li>
<li><strong>Provisions for the techniques and methods of data analysis, including the analysis of measurement results:</strong> verification and validation of the software used for data collection, storage and analysis prior to the test. These are important, and the repeatability, accuracy and measurement uncertainty should be documented.</li>
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
<div id="4.5"></div>
<h3 id="sec4-5" className="mrgn-tp-0">4.5 Review, evaluation and reporting of test results</h3>
<p>Test results shall be reviewed by the commissioning organization to ensure that all deviations are resolved and that operating constraints, if any, are identified and documented.</p>
<p>Interpretation of test data shall be reviewed by persons who have the technical expertise to determine that the operational characteristics of the SSC and/or process are captured.</p>
<p>Formal reports for each test shall be prepared by individuals responsible for the tests, and approved by the commissioning organization.</p>
<p>The reactor facility design, operational and safety documentation shall be updated during the commissioning process to reflect test results and resolution of deviations.</p>
<p>If test results indicate that a change to the scope of subsequent tests is required, a documented assessment shall be performed prior to proceeding with the remaining tests to ensure that:</p>
<ul>
<li>the proposed changes do not fall outside the range of assumptions made in the safety analysis and do not invalidate the licensing basis</li>
<li>the proposed changes do not invalidate the results of the previous tests</li>
<li>the proposed changes do not adversely impact future tests in terms of scope, objectives and sequence</li>
<li>the commissioning documents are updated with the nature of, and justification for, the proposed changes as per management system requirements</li>
</ul>
<p>The commissioning organization shall report the test results to the operating organization and to other participants in the commissioning program, as required.</p>
<h4>Guidance</h4>
<p>Although it may be expedient to prepare summary reports as an interim measure for a quick assessment of the test results, a formal comprehensive report that includes a final evaluation of the test results should be prepared.</p>
<p>The format of a report may vary, but should typically include:</p>
<ul>
<li>an introduction, which includes a summary of test objectives with evidence of safety objectives, a description of the test method and acceptance criteria</li>
<li>references to appropriate test procedures</li>
<li>the conduct of the test, including the duration, the initial and final states of the reactor facility, the actual limitations experienced and the problems encountered and actions taken to overcome them (including modifications to the facility or procedures)</li>
<li>a concise description of any special test equipment used</li>
<li>a summary of data collected and analysis of the data</li>
<li>an evaluation of results, including both qualitative observations (e.g., visual observations) and a comparison of applicable test data with the acceptance criteria</li>
<li>conclusions regarding system or component adequacy</li>
<li>deficiencies relating to design and construction found during conduct of the tests, as well as system modifications and corrective actions required to correct these deficiencies</li>
<li>cross-references and a distribution list</li>
</ul>
<p>Formal reports may serve as valid test/phase completion certificates, as long as they contain all the required information. In addition to individual test reports, phase test reports and a final station commissioning report should be prepared.</p>
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
<h3 id="sec4-6" className="mrgn-tp-0">4.6 Modifications</h3>
<p>Modifications to test procedures and other related documents shall be authorized by means of a formal licensee-approved process to control changes in documentation.</p>
<p>For modifications to the sequence of a test within a hold point or across hold points, appropriate reviews shall be performed, and formal approvals shall be obtained from the commissioning organization. The review shall ensure that all the prerequisites for the out-of-sequence test are met in order to ensure the test is performed safely.</p>
<p>Temporary modifications to an approved design configuration for the purposes of commissioning testing shall be controlled by the commissioning organization, with licensee oversight. A review shall be performed to ensure that safety implications are considered.</p>
<h4>Guidance</h4>
<p>Modifications to the test sequence may be made because of:</p>
<ul>
<li>changes in external conditions (e.g., availability of the grid)</li>
<li>progress in other tests</li>
<li>status of periodic tests or maintenance activities </li>
</ul>
<p>Proposals for design modifications to address a deviation should consider regulatory requirements and the stipulations of the operating organization. Proposals for modifications should assess the impact on other systems as well as safety implications for the commissioning program or individual tests.</p>
<p>The CNSC should be informed in advance of any major modifications to test procedures.</p>
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
<h2 id="sec5" className="mrgn-tp-0">5. Testing Phases and Regulatory Hold Points</h2>
<p>Tests shall be performed in phases and in a logical progressive sequence. Where applicable to the type of reactor facility, the following commissioning test phases shall constitute the minimum regulatory hold points for the reactor start-up:</p>
<ul>
<li>Phase A: prior to fuel load </li>
<li>Phase B: prior to leaving reactor shutdown state</li>
<li>Phase C: approach to critical and low power tests</li>
<li>Phase D: high-power tests </li>
</ul>
<p>For each regulatory hold point, it shall be confirmed that all prerequisites established between the licensee and the CNSC necessary for proceeding beyond the regulatory hold point are met.</p>
<p>Licensees shall submit a written request and obtain written approval from the CNSC before proceeding beyond each regulatory hold point.</p>
<h4>Guidance</h4>
<p>Testing of a specific structure, system or component may require changes to the reactor facility configuration and modes of operation. Such testing may also place demands on appropriate functioning of other SSCs and the availability of various safety functions. Therefore, the sequence of testing is important to the overall safety of the reactor facility.</p>
<p>Tests should be planned in chronological order. Before nuclear material is brought onsite, applicable security systems should be commissioned and operational. Safety systems and safety-related systems (e.g., fire protection system, radiation protection system, emergency power system) should be operational before other systems are tested, for the protection of personnel, public and the environment, and facility or nuclear safety. Tasks necessary for the preparation of the next sequence of tests, in particular the availability requirements of the systems that are necessary, should be identified. Relevant safety system(s) and alarm settings, including those of radiological protection instruments, should be specified at appropriate stages during commissioning.</p>
<p>A system/component-level functional dependency matrix (within a system, across systems, at system interfaces, and across units for multi-unit sites) may help identify and plan the chronology and sequence of tests. Some tests across systems may need to be grouped and performed at the same time to ensure appropriate interfacing of such systems. Support systems (e.g., compressed air system, electrical system, service water system, demineralized water supply system) should be tested prior to the testing of other systems that depend on their availability.</p>
<p>Within the overall fuel-out (Phase A) or fuel-in (Phase B and up) (see sections 5.1 and 5.2, respectively) commissioning program, activities are usually further divided into cold and hot performance tests.</p>
<p>Cold performance tests are thermal hydraulic tests under cold conditions and involve: </p>
<ul>
<li>pressure and pressure drop</li>
<li>flow</li>
<li>pump-head/pump-flow characteristics</li>
<li>equipment and instrument performance tests of the nuclear steam plant and balance of plant</li>
</ul>
<p>Cold performance testing includes the initial starting of fluid and support systems. The objectives of these tests are to obtain initial operational data on equipment, determine operational compatibility with interfacing systems, and verify the functional performance of these systems.</p>
<p>Hot performance tests are thermal hydraulic tests under hot conditions and involve:</p>
<ul>
<li>pressure, and pressure drop</li>
<li>flow</li>
<li>equipment and instrument performance tests of the primary and secondary side systems</li>
</ul>
<p>Hot performance testing should be undertaken to verify the conformance of systems with specified requirements. Where possible, these tests should follow cold performance tests under operating conditions that simulate typical temperatures, pressures and flow rates for anticipated operational occurrences (AOOs) and design-basis accidents (DBAs).</p>
<p>The tests should verify the effectiveness of heat insulation and heat removal systems. Initial flow rates, pump-head/pump-flow characteristics, pressure drop and temperature measurements at various locations around the reactor facility should be checked and confirmed against design calculations. The vibration levels, clearances and other provisions that were made to accommodate thermal expansion of SSCs should be checked and confirmed.</p>
<p>Phases or hold points are imposed to ensure proper assessment of available commissioning results against pre-defined acceptance criteria. Licensees may incorporate as many phases or hold points as they see fit, as long as the minimum regulatory hold points are included. Depending on the situation, the CNSC may request additional regulatory hold points beyond the set minimum. The selection of regulatory hold points will generally be agreed upon between the licensee and the CNSC and incorporated into the licence.</p>
<p>At each hold point, the test results and the general condition of the reactor facility should be reviewed and approved by the commissioning and operating organizations. To facilitate the release of hold points, including regulatory hold points, it is recommended that the licensee develop detailed matrices of the prerequisites to be formally demonstrated for each hold point. These matrices should be developed in agreement with all stakeholders.</p>
<p>The following steps should be undertaken at the end of each hold point:</p>
<ul>
<li>Documents to certify the performance of tests and provide phase clearances for the continuation of the commissioning program should be prepared and issued.</li>
<li>Test certificates should be issued by the commissioning organization to certify that the tests have been completed in accordance with authorized procedures, stating any reservations about departures from or limitations of the procedures.</li>
<li>Phase completion certificates should be issued by the commissioning organization to certify that all the tests in the respective commissioning phase have been satisfactorily completed (listing all deficiencies and non-conformances, if any). Phase completion certificates should also list associated test certificates.</li>
<li>It should be ensured that succeeding phases can be conducted safely and that the safety of the reactor facility is never dependent on the performance of untested SSCs.</li>
</ul>
<p>The written request to the CNSC for approval to proceed beyond a regulatory hold point should confirm that:</p>
<ul>
<li>all related project commitments tied to the regulatory hold point have been completed</li>
<li>all systems required for safe operation beyond the regulatory hold point are available</li>
<li>all specified operating procedures have been formally validated</li>
<li>specified training has been completed and staff are qualified</li>
<li>all non-conformances and unexpected results identified leading up to the regulatory hold point have been addressed</li>
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
<div id="5.1"></div>
<h3 id="sec5-1" className="mrgn-tp-0">5.1 Phase A: Prior to fuel load</h3>
<p>Before fuel is loaded into the core, the operability, availability and performance of the SSCs that will ensure safety with fuel in the core shall be tested, and appropriate tests of fuel handling equipment shall be completed.</p>
<h4>Guidance</h4>
<p>Satisfactory pre-operational tests (see Appendix A for recommended tests) should take into account the proper sequence of tests of electrical systems, instrumentation systems and other service systems (such as cooling water and fire protection systems). This is to ensure the availability of the services required to implement the entire commissioning program. Special instrumentation and control required for the first fuel load and start-up should be installed and checked during this phase.</p>
<p>During this phase, operations personnel should take the opportunity to use, verify and validate operating procedures.</p>
<p>Some critical elements of heat sinks (flow rates, pressures, etc.) may be tested with fuel imitators in the core. These tests provide early assurances that safety will be maintained once fuel is loaded. Typically, testing of these systems will continue after fuel load.</p>
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
<h3 id="sec5-2" className="mrgn-tp-0">5.2 Phase B: Prior to leaving reactor shutdown state</h3>
<p>This phase focuses on ensuring the fuel is loaded into the reactor safely, and on confirming that the reactor is in a suitable condition to be started up and that all prerequisites for permitting the reactor to go critical have been met. This phase must be successfully completed before approaching criticality.</p>
<p>During this phase: </p>
<ul>
<li>the reactivity control mechanism shall be available and in service and the reactor shall be maintained subcritical at all times</li>
<li>availability of the automatic shutdown systems shall be confirmed where possible</li>
<li>
the availability of the reactor trip system against neutronic and process-related upsets shall be confirmed</li>
<li>subcriticality checks shall be performed at regular steps during fuel loading to determine safe loading increments for subsequent loading</li>
<li>predictions of the behaviour of the core in terms of its reactivity shall be available for the evaluation of subcriticality margin</li>
<li>acceptance criteria for the maximum permissible deviation of predicted values from measurements shall be defined</li>
<li>tests on coolant flow, pressure, temperature and the performance of associated instrumentation and control mechanisms shall be conducted</li>
<li>fuel loading shall be supervised by certified representatives from the operating organization</li>
</ul>
<h4>Guidance</h4>
<p>This phase involves initial fuel loading and subcriticality tests (see Appendix B for recommended tests).</p>
<p>For applicable reactor designs, the core should be fuelled in accordance with a predetermined loading pattern. Fuel loading procedures should include, as appropriate: </p>
<ul>
<li>periodic data recording</li>
<li>audible indication of flux increase</li>
<li>monitoring of neutron count rate when reactivity is being inserted or removed and during any other operations that could potentially affect core reactivity</li>
</ul>
<p>Any changes occurring in the reactor should be reported immediately to the control room personnel. Fuel loading should be stopped if measurements deviate from predicted values and commence only after the root-causes are determined and appropriate corrective actions are taken. If required by the safety analysis, the position of each core element should be independently confirmed and documented.</p>
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
<h3 id="sec5-3" className="mrgn-tp-0">5.3 Phase C: Approach to critical and low-power tests </h3>
<p>This phase focuses on confirming reactor behaviour at the stage of initial criticality and subsequent low-power tests. It includes activities that cannot be performed with the reactor held in a subcritical state (shutdown state).</p>
<p>During this phase: </p>
<ul>
<li>trip set points shall be verified to ensure that they are compatible with the demands of the tests scheduled in this phase</li>
<li>the availability of the automatic shutdown systems shall be confirmed for low-power shutdown</li>
<li>radiological surveys and functional tests of radiation protection equipment shall be made</li>
<li>changes in reactivity shall be continuously monitored and evaluated so that the prediction of the point of criticality is continually checked</li>
<li>the performance of the reactor core shall be commensurate with design assumptions and predictions, and comply fully with the safety analysis report</li>
<li>it shall be confirmed that the reactor core is in proper condition to operate higher power levels</li>
<li>characteristics of the reactivity control systems and shielding shall be commensurate with design assumptions and predictions, and shall comply fully with the safety analysis report</li>
<li>integrated system validation shall be completed if it has not been conducted during earlier phases of commissioning</li>
</ul>
<h4>Guidance</h4>
<p>During this phase, criticality of the fuel in the reactor core is achieved for the first time (see Appendix C for recommended tests). The power levels of this phase will be the lowest that give reliable and stable measurements and that enable the required conditions to perform the specified tests. Special very-low-power (start-up) instrumentation may be used if necessary and may need to be connected into the shutdown logic where trip coverage is not available from the normal shutdown means (detectors out of range).</p>
<p>The sequence and magnitude of the reactivity changes should be done in accordance with defined procedures, using reactivity devices such as mechanical control rods (and rods of other types), adjustable reflectors, liquid poison, and adjustment of process fluids such as coolant flow or moderator level. In these tests, reactor trip set points for different shutdown means should be set to conservative values.</p>
<p>Achieving criticality requires a cautious approach and continuous monitoring of the neutron flux. After the subcritical multiplication factor has been determined, predictions for the point of criticality should be performed while making smaller, successive adjustments to positive reactivity. The objective of these actions is to avoid passing through the point of criticality with a high rate of change in neutron flux (short period of multiplication). After criticality has been achieved, a conservative start-up rate of flux increase should be used in attaining low power.</p>
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
<h3 id="sec5-4" className="mrgn-tp-0">5.4 Phase D: High-power tests</h3>
<p>This phase focuses on demonstrating reactor and systems behaviour at higher power levels, including activities that could not be carried out at the power levels in Phase C.</p>
<p>During this phase:</p>
<ul>
<li>high-power tests shall be performed at various bulk power intervals. Where specified in the licence, these intervals shall be approved by the CNSC</li>
<li>in accordance with the design, tests shall be made to demonstrate that the reactor facility is able to:
<ul>
<li>safely operate at steady state under normal operating conditions</li>
<li>mitigate or prevent AOOs escalating to more severe events</li>
<li>safely cope with DBAs (note that the facility need not be put into a DBA condition, but rather the function of mitigating systems verified)</li>
</ul>
</li>
<li>a documented review shall be carried out at the end of each high-power test to confirm that the operational limits and conditions are adequate and practicable and identify any constraints on the operation of the reactor facility</li>
</ul>
<h4>Guidance</h4>
<p>This phase should generally be limited to those tests that can only be carried out at high power (see Appendix D for recommended tests).</p>
<p>This phase of commissioning tests consists of incremental approach to full power. A comprehensive range of power tests should be made to confirm that the reactor facility can be operated in accordance with the design intent and that the reactor facility can continue to operate safetly. Typically, power is increased in increments until full power is reached. At each increment, a series of prerequisite tests are performed that must be met before proceeding to the next power level. The CNSC may stipulate more than one regulatory hold point as power increases, based on the specifics of the testing program and the relevance to demonstrating the safe operation of the facility.</p>
<p>During testing, in order to minimize time at risk, tests that are necessary to demonstrate safe operability should be completed without delay.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="a"></div>
<h2 id="appA" className="mrgn-tp-0">Appendix A: Recommended Phase A Commissioning Tests</h2>
<p> The following tests, as applicable to the facility should be performed prior to fuel loading:</p>
<ul>
<li> testing of relevant systems in main and secondary control rooms in service to support Phase A testing</li>
<li>confirmation that reactor coolant and connected systems meet cleanliness requirements</li>
<li>confirmation of the availability and functionality of the reactor control system</li>
<li>testing of neutron detectors</li>
<li>service tests:
<ul>
<li>compressed air systems used for safety-related functions in service</li>
<li>fire protection systems in service throughout facility</li>
<li>safety-important process cooling systems in service (e.g., heat sink systems important reactor cooling and emergency sources of water)</li>
<li>facility heating, ventilating and air conditioning systems (fans, ducts, dampers, chiller units, piping, tanks, instrumentation and control)</li>
<li>facility communication system (annunciating system, telephones and wireless)</li>
<li>nuclear security systems</li>
</ul>
</li>
<li>CANDU&nbsp;- moderator system tests:
<ul>
<li>leak test</li>
<li>pumps and motors</li>
<li>cover gas recombination units</li>
<li>relief valves in cover gas system</li>
<li>purification columns</li>
<li>liquid poison addition system</li>
<li>leakage collection system</li>
<li>heavy water addition and transfer system</li>
<li>vibration</li>
<li>water quality</li>
</ul></li>
<li>electrical system tests (as needed to support safe reactor operation):
<ul>
<li>AC power (normal, emergency and standby)</li>
<li>DC power (normal, emergency and standby)</li>
<li>back-up, emergency diesel, black-out diesel load sequencing tests</li>
<li>preliminary loss of offsite and house load power tests</li>
</ul></li>
<li>safety systems tests:
<ul>
<li>made operational to the extent possible</li>
<li>check insertion and withdrawal speeds for control absorbers/shut-off rods/adjustable reflectors</li>
<li>check insertion speeds for second shutdown system (if applicable)</li>
<li>logic/interlocks</li>
</ul></li>
<li>fuel storage and handling tests:
<ul>
<li>test and calibration of fuelling machines (CANDU)</li>
<li>fuel transfer systems</li>
<li>spent fuel storage bay cooling and purification systems (including alarms)</li>
<li>decontamination facilities</li>
</ul></li>
<li>radiation protection system tests:
<ul>
<li>area radiation monitors</li>
<li>personnel monitors and radiation survey instruments</li>
<li>laboratory equipment</li>
<li><em>in situ</em> efficiency tests of air and absorption filters</li>
</ul></li>
<li>other generic commissioning for systems to support fuel load</li>
<li>other prerequisites that could be considered for this phase include:
<ul>
<li>automatic shutdown systems poised</li>
<li>start-up monitoring instrumentation verified and made available to initiate automatic and manual reactor shutdown when necessary</li>
<li>wiring continuity and electrical protective devices checked</li>
<li>settings on torque-limiting devices and calibration adjusted (CANDU)</li>
<li>all necessary &quot;jumpers&#39; and interlocks installed for the specific testing configuration</li>
<li>requirements and procedures ready to test the fuel handling and fuelling machine (CANDU) and/or any other tool or system as necessary</li>
<li>the means to prevent inadvertent criticality specified</li>
<li>the readiness of the neutron flux monitoring system</li>
<li>availability of qualified personnel, and verification of SSCs important to safety </li>
</ul></li>
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
<div id="b"></div>
<h2 id="appB" className="mrgn-tp-0">Appendix B: Recommended Phase B Commissioning Tests</h2>
<p>The following tests, as applicable to the facility, should be performed prior to leaving the shutdown state: </p>
<ul>
<li>reactor coolant system (RCS) pressure boundary integrity before filling</li>
<li>testing of neutron detectors</li>
<li>RCS tests:
<ul>
<li>flow verification (confirm flow distribution and absence of flow blockage)</li>
<li>pressurizer heaters available and feed/bleed paths open</li>
<li>RCS inventory control systems in service</li>
<li>pumps and motors</li>
<li>pressure control and relief valves</li>
<li>strainers/filters, purification columns, tanks, etc.</li>
<li>instrumentation used for monitoring system performance and logic functions</li>
<li>coolant water addition and transfer system available to supply make-up water on demand</li>
<li>vibration</li>
<li>water quality within specifications</li>
<li>boration systems</li>
</ul></li>
<li>containment integrity tests:
<ul>
<li>containment leak-rate test</li>
<li>functional tests on containment isolation valves, dampers, air locks and associated logic and instrumentation</li>
<li>leak detection and associated filtration and vent paths systems calibrated and functional</li>
<li>containment btn-up logic to be fully tested and available for service</li>
</ul></li>
<li>RCS hot performance, including:
<ul>
<li>garter spring location check (CANDU)</li>
<li>baseline data for creep measurement</li>
</ul></li>
<li>check reactor trip logic available</li>
<li>reactivity control system tests:
<ul>
<li>check control rod withdrawal and insert speeds</li>
<li>rod position indication</li>
<li>protective interlocks and circuitry</li>
<li>liquid zone control function (CANDU)</li>
<li>ion chambers in service</li>
<li>chemical control of liquid poison addition within specifications</li>
</ul></li>
<li>reactor auxiliary systems (CANDU):
<ul>
<li>ventilation and heavy water vapor recovery system (fans, dampers, air coolers, dryers, temperature control, control logic, air flows and flow balancing, etc.)</li>
<li>end shield cooling system (flow, pumps and valves, venting, make-up system, chemical control, instrumentation, etc.)</li>
<li>calandria vault cooling system (pumps and valves, make-up system, chemical control, instrumentation, etc.)</li>
<li>annulus gas monitoring system (gas addition, piping, valves and associated instrumentation)</li>
</ul></li>
<li>power conversion system:
<ul>
<li>steam generators</li>
<li>steam expansion, restraint and operability tests</li>
<li>steam and feed water process lines</li>
<li>condensate and auxiliary feed water system</li>
<li>chemical treatment systems</li>
<li>turbine stop, control and intercept valves</li>
<li>steam dump, discharge and safety relief valves</li>
<li>steam extraction system</li>
<li>auxiliary feedwater flow measurement</li>
<li>condenser cooling water system</li>
<li>turbo generator and its auxiliaries (hydrogen cooling, seal and oil  systems)</li>
<li>hydrogen leak detection system</li>
<li>turbine governing system</li>
<li>datum block readings</li>
</ul></li>
<li>radioactive waste capture, treatment and disposal systems:
<ul>
<li>liquid waste drainage systems available and activity/level monitoring in service</li>
<li>decontamination centre</li>
<li>liquid effluent segregation and storage system, treatment and disposal  in service</li>
<li>solid waste handling and storage facilities in service for the level of  waste anticipated</li>
<li>sampling and surveillance systems</li>
</ul></li>
<li>instrumentation and control systems in service:
<ul>
<li>main and secondary control rooms in service</li>
<li>emergency response center in service</li>
<li>pressurizer pressure and level control</li>
<li>bleed condenser pressure, temperature and level control (CANDU)</li>
<li>feed water flow control</li>
<li>steam generator pressure and level control</li>
<li>RCS pressure control, and flow and temperature monitoring</li>
<li>regulation and protection system</li>
<li>seismic instrumentation</li>
<li>failed fuel detection system</li>
<li>in-core flux monitoring and ion chamber instrumentation</li>
<li>calibration and neutron response check</li>
<li>detection of internal and external flooding conditions (CANDU)</li>
<li>control operator information system, programmable digital comparator  system, radiation data acquisition system, fuel handling control system, etc.</li>
<li>sampling systems (light water, heavy water, steam, air)</li>
</ul></li>
<li>secondary control room tests:
<ul>
<li>verification of independent protection, control and monitoring</li>
<li>check of habitability and emergency procedures</li>
</ul></li>
<li>pressure testing of SSCs and overpressure protection devices per CAN/CSA N285.0-12, General requirements for  pressure-retaining systems and components in CANDU nuclear power plants</li>
<li>
integrated testing of fuel  handling and transfer system (CANDU)</li>
<li>verification of proper operation of associated alarms and protective functions</li>
<li>generic commissioning for systems to support first criticality</li>
<li>other prerequisites that could be considered for this phase include:
<ul>
<li>availability and readiness of qualified personnel and SSCs important to safety, to ensure the reactor is ready for start-up</li>
<li>surveillance necessary to demonstrate proper operation of interlocks, set-points and other protective features</li>
<li>appropriate start-up monitoring instrumentation available to initiate automatic and manual reactor shutdown when necessary</li>
<li>field inspections made to ensure that the equipment is ready for testing, including inspection for proper fabrication and cleanliness</li>
<li>availability of communication tools and verification of their operability</li>
</ul></li>
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
<div id="c"></div>
<h2 id="appC" className="mrgn-tp-0">Appendix C: Recommended  Phase C Commissioning Tests</h2>  <p>The  following approach to critical and low-power tests, as applicable to the  facility, should be used:</p>  <ul>
<li>testing of neutron detectors</li>
<li>
achievement of first criticality in a safe, controlled, predicable manner</li>
<li>
check of the regulating system&#39;s  automatic control function</li>
<li>
confirmation of temperature  coefficient of reactivity for reactor coolant systems (all reactor types) and  moderator (CANDU)</li>
<li>
measurement of the combined  reactivity worth of the zone control units (CANDU)</li>
<li>
determination of the reactivity  worth of each mechanical absorber rod</li>
<li>
measurement of axial and radial  flux distribution for defined configurations of reactivity mechanisms</li>
<li>
testing of reactor shutdown and  control systems</li>
<li>
neutron and gamma radiation  surveys</li>
<li>
confirmation of performance of the  low-power neutronic instrumentation</li>
<li>
commissioning of emergency core  cooling systems to the extent possible</li>
<li>
confirmation of critical poison  concentration (if applicable)</li>
<li>
verification of efficiency of reactivity  control and shut-off means</li>
<li>
verification that auxiliary  feedwater/cooling pumps are available</li>  </ul>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="d"></div>
<h2 id="appD" className="mrgn-tp-0">Appendix D: Recommended Phase D Commissioning Tests</h2>  <p>The  following tests, as applicable to the facility, should be performed in the  approach to full power:</p>  <ul>
<li>testing of neutron detectors</li>
<li>performance of the following, at  various power levels:
<ul>
<li>power manoeuvre tests as would be required during normal operation</li>
<li>reactor setback and stepback tests as would be required during normal operation (CANDU)</li>
<li>verification of channel flow (CANDU)</li>
<li>calibration of flux mapping detectors (CANDU)</li>
<li>calibration of neutron power versus thermal power</li>
<li>calibration of ion chambers and in-core flux detectors</li>
<li>dynamic response to load rejections, including turbine trip</li>
<li>verification of chemical and radiochemical control systems and sampling yield results within specification</li>
<li>verification that piping and component movement, vibrations and  expansions are acceptable for safety systems</li>
<li>verification of performance of main plant control, reactor coolant  system pressure control, steam generator level control, generator speed, steam  pressure control, etc.
<li>
verification of performance of control room instrumentation and control  systems (comparison of measured to monitored values, validate analogue and  digital safety functions)
<li>
radiation surveys to verify shielding effectiveness
<li>
verification of performance of heating, ventilating and air  conditioning systems
<li>
verification of shutdown capability of secondary control room<br/>
</ul>
</li>
<li>performance of the following, at lower power levels:
<ul>
<li>thermal and control performance tests of nuclear steam plant and  balance of plant systems</li>
<li>gaseous fission product / delayed neutron scan</li>
<li>atmospheric steam discharge valve capacity test (CANDU); power-operated relief valve and safety valve tests (all)</li>
<li>condenser vacuum test</li>
<li>digital control computer transfer of control test (CANDU)</li>
<li>generator run-up and overspeed tests</li>
<li>turbine stop valve / governor valve leak test</li>
<li>generator open-/short-circuit tests</li>
<li>generator voltage adjustment and reactive capability checks</li>
<li>automatic voltage regulation limit checks</li>
<li>generator synchronization to grid</li>
<li>dynamic response to single and multiple reactor coolant pump trips</li>
<li>steam generator moisture carry-over test</li>
<li>dual computer failure test (CANDU)</li>
</ul></li>
<li>performance of the following, at higher power levels:</li>
<li>reactor coolant system boiling check (CANDU)</li>
<li>crash cool rundown test</li>
<li>testing of reactor shutdown and control systems</li>
<li>duty changeover tests (condensate extraction pump, boiler feed pump, steam generator, de-aerator and condenser level control valves)</li>
<li>test for loss of offsite / house power</li>  </ul>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="e"></div>
<h2 id="appE" className="mrgn-tp-0">Appendix E: Recommended Organizational Responsibilities</h2>  <h3>Commissioning organization</h3>  <p>The responsibilities of the commissioning organization should include, but are not limited to, the following:</p>  <ul>
<li>planning the development of the commissioning program in advance, including detailed test sequences, time schedules and staffing requirements</li>
<li>updating the commissioning program in light of experience in commissioning and as a result of design modifications</li>
<li>establishing a procedure for the preparation, review and approval of test and other procedures</li>
<li>ensuring that field visual aids (e.g., drawings, flow sheets), operating and maintenance instructions, commissioning procedures, formats for commissioning and test reports, reactor facility handover documents and submissions to the CNSC are available</li>
<li>establishing a procedure for the systematic recording of reactor facility data for future use</li>
<li>establishing a procedure to ensure that incidents and unexpected events during commissioning are handled and analyzed, so that the experience can be fed back to the designers and the operating organization</li>
<li>verifying that SSCs have been  satisfactorily installed and codified for proper identification</li>
<li>ensuring that the prerequisites for the commissioning program have been satisfied and that pre-operational tests (such as system flushing, functional checks, logic checks, interlock checks and system integrity checks) have been completed</li>
<li>ensuring that commissioning  procedures comply with appropriate rules and regulations for security and safety, including radiological and environmental protection and nuclear, industrial and fire safety</li>
<li>ensuring that systems are commissioned safely, and confirming that procedures are adequate</li>
<li>implementing all tests in the commissioning program, including repeat testing of the systems that have been commissioned initially as partially installed</li>
<li>making suitable arrangements for testing and maintaining systems (particularly safety-related items) for which responsibility has been accepted</li>
<li>directing the operation of systems in the commissioning program and providing input for updating operational flow sheets, operating and maintenance instructions and procedures based on commissioning experience</li>
<li>issuing commissioning test reports</li>
<li>ensuring the CNSC has approved safety-related  test results as necessary </li>
<li>ensuring a process is in place to  control the calibration of test and measurement equipment</li>
<li>establishing a procedure to ensure that all participants in the commissioning process are suitably qualified and experienced</li>
<li>ensuring the configuration control  maintains consistency between the physical state of the installation and the test procedures and design requirements, and reporting any discrepancies to the relevant parties</li>
<li>ensuring that design changes are  requested, reviewed, implemented and re-tested when design criteria are not met  or when they fall short</li>
<li>establishing and implementing a system for controlling, recording and communicating temporary changes to reactor facility and equipment</li>
<li>issuing test and completion certificates or their equivalent</li>
<li>providing up-to-date baseline information to the operating organization</li>
<li>informing the operating organization of any deficiency detected in commissioning tests, so corrective actions can be taken</li>
<li>maintaining a record of limiting conditions in commissioning, and ensuring tests to be performed do not exceed  these conditions</li>
<li>ensuring that reactor facility performance is in accordance with the design intent, including all aspects of radiological and environmental protection, and nuclear, industrial and fire  safety</li>
<li>documenting that the commissioning program has been satisfactorily completed</li>
<li>transferring the responsibility  for operation and maintenance of commissioned systems and the reactor facility  to the operating organization, using a system of relevant documents</li>
<li>establishing and implementing  procedures that ensure the orderly transfer of responsibilities for structures,  systems and components from the construction organization to the commissioning organization,  and from the commissioning organization to the operating organization<br/>
establishing procedures for analyzing test results</li>
<li>ensuring that any detected deviations are recorded, resolved and documented</li>
<li>recording all commissioning feedback experience</li>
<li>establishing a procedure in order to compile the lessons learned from commissioning activities and related corrective actions</li>  </ul>  <h3>Operating organization</h3>  <p>The responsibilities of the operating organization should include, but are not limited to, the following:</p>  <ul>
<li>overseeing the commissioning program (including compliance monitoring activities)</li>
<li>being qualified to participate as  early as possible in the commissioning activities</li>
<li>satisfying itself that the transferred  systems comply with specified performance requirements, the design intent and  safety and regulatory requirements</li>
<li>accept responsibility (operational, maintenance and safety as per operating limits and conditions) for the transferred systems</li>
<li>increasing competency in the methods of operation of the reactor facility</li>
<li>carrying out operation and maintenance with competent and duly authorized staff using approved techniques to meet the needs of the commissioning program (RD/GD-210, <em>Maintenance Programs for Nuclear Power Plants</em> provides more detailed requirements for maintenance programs)</li>
<li>establishing and implementing a procedure for the systematic recording of reactor facility data generated by the commissioning tests</li>
<li>maintaining reactor facility  design and configuration control over the commissioning phase up to the start of operating life of the facility; this also includes maintaining the safety analysis report current and </li>
<li>participating in a safety assessment when necessary</li>
<li>assisting with design modifications to rectify design deficiencies and produce complete documentation of the modification, including requalification tests</li>
<li>recording all operating experience feedback and associated lessons learned</li>
<li>establishing and implementing appropriate emergency arrangements</li>  </ul>  <h3>Construction organization</h3>  <p>The responsibilities of the construction organization  should include, but are not limited to, the following: </p>  <ul>
<li>ensuring that structures, systems and components have been built and installed in accordance with design requirements and specifications</li>
<li>making suitable arrangements for surveillance, preservation and maintenance to prevent deterioration after  installation (construction) is complete, and before the handover</li>
<li>providing, for use as baseline data, as-built documentation of installation construction and test reports, highlighting design changes and concessions</li>
<li>ensuring that configuration control is maintained and that the affected systems&#39; design basis documentation&nbsp;- including the final safety analysis report&nbsp;- has been updated to reflect any design changes and concessions</li>
<li>transferring the installed systems to the commissioning organization using a system of reactor facility handover  documents</li>
<li>ensuring the clearance of remaining open points conditioning the acceptance of the transfer</li>
<li>correcting deficiencies in construction and installation that were detected during commissioning</li>
<li>assisting the commissioning organization in resolving construction-related issues</li>  </ul>  <h3>Other participants in commissioning activities</h3>  <p>The responsibilities of the other participants, such as designers, manufacturers and supporting technical organizations in the commissioning activities, should be specified in the appropriate contracts. The following responsibilities should be considered:</p>  <ul>
<li>co-operating with relevant parties engaged in commissioning activities by means of active participation when required</li>
<li>providing specialist knowledge, expertise and relevant experience from reactor facilities already commissioned</li>
<li>providing support for evaluation and assessment of tests results including any deviation</li>
<li>providing baseline data and all necessary information</li>
<li>providing a safety assessment when necessary</li>
<li>participating in the analysis of discrepancies and unexpected events</li>
<li>devising modifications in order to rectify design deficiencies, and providing complete documentation (including requalification tests) of the modifications</li>  </ul>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="f"></div>
<h2 id="appF" className="mrgn-tp-0">Appendix F: Recommended Interface Arrangements</h2>  <h3>Interfaces between construction and commissioning organizations:</h3>  <ul>
<li>procedures for transferring structures, systems and components (SSCs) from construction to commissioning</li>
<li>procedures for isolating reactor facility portions transferred to commissioning from the part remaining under construction</li>
<li>prerequisites for the start of the commissioning program and the start of system commissioning</li>
<li>special precautions necessary for the commissioning of partly installed systems</li>
<li>procedures for performing work on systems under commissioning</li>  </ul>  <h2>Interfaces between commissioning and  operating organizations:</h2>  <ul>
<li>provisions in the definition of  role, functions and delineation of responsibilities of operating and  commissioning organizations before transfer of SSCs for operation</li>
<li>procedures for transferring SSCs,  the unit and the facility for operation</li>
<li>methods of identifying special technical, operational or staffing restrictions necessary as a result of partial completion of a construction or commissioning activity</li>
<li>baseline data derived from commissioning, such as the issuing of formal test reports and a statement of the existing radiological conditions</li>
<li>changes in responsibility for safety, depending on considered commissioning milestones and performed transfers to operation, including the nomination of responsible persons</li>
<li>modifications to the reactor facility and to the procedures</li>
<li>availability of as-built drawings, instructions and procedures for operating and maintaining the systems and the reactor facility</li>
<li>conditions for access of  personnel, with consideration given to delineation between systems already in operation and those being tested</li>
<li>control of temporary procedures and equipment available during commissioning but not appropriate to normal operation; e.g., special start-up instrumentation or duplicate safety keys and authorization for the use of jumpers and vetoes</li>
<li>the implementation of operating and maintenance requirements for SSCs as each system is transferred to the operating organization</li>
<li>provision of sufficient opportunity for the operating personnel to become trained in, and familiar with, operating and maintenance techniques for the reactor facility</li>
<li>procedures for radiological zone mapping, monitoring (including personal dose recording) and radiation protection</li>
<li>training in radiological safety and authorization of commissioning personnel to work in the controlled area</li>
<li>reassessment of routine operating and maintenance instructions and procedures in light of experience gained in commissioning</li>
<li>development and implementation of measures for emergency preparedness and response</li>
<li>training in required areas for nuclear security</li>
<li>development and implementation of procedures for nuclear security, including access control, alarm assessment and response</li>
<li>during commissioning, the recording of information that could have implications for decommissioning, and subsequentÂ handover of these records to the operating organization (this information could include records of spills or other unusual occurrences with potential long-term effects)</li>  </ul>
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
<h2 id="gloss" className="mrgn-tp-0">Glossary</h2>  <dl className="margins-removed">
<dt><strong>anticipated operating occurrence (AOO)</strong></dt>
<dd>An operational process deviating from normal operation that  is expected to occur once or several times during the operating lifetime of the reactor facility but which, in view of the appropriate design provisions, does not cause any significant damage to items important to safety or lead to accident conditions.</dd>
<dt><strong>commissioning</strong></dt>
<dd>Activities intended to demonstrate that installed systems, structures and components and equipment perform in accordance with their specifications and design intent before they are put into service.</dd>
<dt><strong> commissioning documentation</strong></dt>
<dd>The plans, instructions, procedures, drawings, reviews, records, reports, and the like, which together describe the commissioning of a system or the integrated reactor facility.</dd>
<dt><strong>commissioning report</strong></dt>
<dd>A report written on completion of a logical group of commissioning activities to record results, assess compliance with the acceptance criteria, record actions taken to rectify any deficiencies.</dd>
<dt><strong>commissioning tests</strong></dt>
<dd>Testing to demonstrate that structures, systems and components perform within their design specifications.</dd>
<dt><strong>construction</strong></dt>
<dd>The process of procuring, manufacturing and assembling the components, carrying out civil work, installing and maintaining  components and systems, and performing associated tests.</dd>
<dt><strong>design-basis accident (DBA)</strong></dt>
<dd>Accident conditions against which a reactor facility is designed according to established design criteria, and for which the damage to the fuel and the release of radioactive material are kept within authorized limits.</dd>
<dt><strong>hold point</strong></dt>
<dd>A commissioning activity that requires approval of the designated authority in order for commissioning to proceed.</dd>
<dt><strong>integrated system validation</strong></dt>
<dd>An evaluation, using performance-based tests, to determine whether an integrated system&#39;s design (i.e. hardware, software and personnel element) meets performance requirements and supports the facility&#39;s safe operation.</dd>
<dt><strong>licensee</strong></dt>
<dd>The organization authorized by a licence from the Canadian Nuclear Safety Commission to build and operate a reactor facility in accordance with specified requirements. The licensee has the overall responsibility and controlling authority to oversee the safe and satisfactory completion of the reactor facility design, procurement, manufacturing, construction, commissioning and operation, and decommissioning.</dd>
<dt><strong>licensing basis</strong></dt>
<dd>A set of requirements and documents for a regulated facility or activity comprising:
<ul>
<li>the regulatory requirements set out in the applicable laws and regulations</li>
<li>the conditions and safety and control measures described in the facility&#39;s or activity&#39;s licence and the documents directly referenced in that licence</li>
<li>the safety and control measures described in the licence application and the documents needed to support that licence application</li>  </ul></dd>
<dt><strong>management system</strong></dt>
<dd>A set of interrelated or interacting elements (system) for establishing an organization&#39;s policies and objectives and enabling the objectives to be achieved efficiently and effectively. These elements include the structure, resources, and processes. Personnel, equipment, and organizational culture, as well as the documented policies and processes, are parts of the management system. The organization&#39;s processes have to address the totality of organization&#39;s requirements as established in, for example, IAEA safety standards and other  international codes and standards.</dd>
<dt><strong>nuclear power plant (NPP)</strong></dt>
<dd>A nuclear facility consisting of any fission-reactor installation that has been constructed to generate electricity on a commercial scale.</dd>
<dt><strong>operation</strong></dt>
<dd>All activities performed to achieve the purpose for which a facility was constructed. For nuclear power plants, this includes maintenance, refuelling, in-service inspection and other associated activities.</dd>
<dt><strong>reactor facility</strong></dt>
<dd>Any fission reactor as described in the <em>Class&nbsp;I  Nuclear Facilities Regulations</em>, including structures, systems and  components:
<ul>
<li>that are necessary for shutting down the reactor, ensuring that it can be kept in a safe shutdown state</li>
<li>that may contain radioactive material and that cannot be reliability isolated from the reactor</li>
<li>whose failure can lead to a limiting accident for the reactor</li>
<li>that are tightly integrated into the operation of the nuclear facility</li>
<li>that are needed to maintain security and safeguards</li>  </ul></dd>
<dt><strong>regulatory hold point</strong></dt>
<dd>A commissioning activity that requires approval of the Canadian Nuclear Safety Commission in order for commissioning to proceed.</dd>
<dt><strong>small reactor</strong></dt>
<dd>A reactor with a power level of less than approximately 200&nbsp;megawatts thermal (MWt) that is used for research, isotope production, steam generation, electricity production or other applications.</dd>
<dt><strong>structures, systems and components (SSCs)</strong></dt>
<dd>A general term encompassing all of the elements (items) of a facility or activity that contribute to protection and safety.  Structures are the passive elements: buildings, vessels, shielding, etc. A system comprises several components, assembled in such a way as to perform a specific (active) function. A component is a discrete element of a system. Examples are wires, transistors, integrated circuits, motors, relays, solenoids, pipes, fittings, pumps, tanks, and valves.</dd>
</dl>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="references"></div>
<h2 id="ref" className="mrgn-tp-0">References</h2>  <ol>
<li>Canadian  Standards Association (CSA), N286-12, <em>Management  system requirements for nuclear facilities</em>, 2012.</li>
<li>Canadian Nuclear Safety Commission, RD/GD-210, <em>Maintenance  Programs for Nuclear Power Plants</em>, 2012.</li>
<li>International Atomic  Energy Agency, NS-G-2.9, <em>Commissioning for  Nuclear Power Plants</em>: <em>Safety Guide</em>,  2003.<em><br/>
</em></li>
<li>Canadian Standards Association, (CSA) N285.0-12, <em>General requirements for pressure-retaining  systems and components in CANDU nuclear power plants</em>, 2012. </li>
<li>Canadian Nuclear Safety Commission, G-278, <em>Human Factors Verification and Validation  Plans, </em>2003. </li>
<li>Canadian Nuclear Safety Commission, G-323, <em>Ensuring the Presence of Sufficient  Qualified Staff at Class I Nuclear Facilities&nbsp;- Minimum Shift Complement</em>,  2007. </li>  </ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="additional"></div>
<h2 id="info" className="mrgn-tp-0">Additional Information</h2>  <ol>
<li>Canadian Nuclear Safety Commission (CNSC), RD-360,<em> Life Extension for Nuclear Power Plants</em>,  2008.</li>
<li>CSA, N287.7-08, <em>In-service examination and testing  requirements for concrete containment structures for CANDU nuclear power plants</em>,  2008.</li>
<li>CSA, N293-95, <em>Fire protection for CANDU nuclear power  plants</em>, 1995.</li>
<li>International Atomic Energy Agency (IAEA), NS-G-2.3, <em>Modifications to Nuclear Power Plants:</em>&nbsp;<em>Safety  Guide</em>, 2001.</li>
<li>IAEA,  SS-2/2, <em>Safety of Nuclear Power Plants:  Commissioning and Operation</em>, 2011.</li>
<li>IAEA,  GS-R-3, <em>The Management System for  Facilities and Activities</em>, 2006.</li>
<li>IAEA,  GS-G-3.1, <em>Application of the Management  System for Facilities and Activities</em>, 2006. </li>
<li>IAEA,  GS-G-3.5, <em>The Management System for  Nuclear Installations</em>, 2009. </li>
<li>IAEA,  NS-G-2.2, <em>Operating Limits and Conditions  and Operating Procedures for Nuclear Power Plants</em>, 2000.</li>
<li>IAEA, GS-R-2, <em>Preparedness and Response  for a Nuclear or Radiological Emergency</em>, 2002.</li>
<li>IAEA, GS-G-2.1, <em>Arrangements for Preparedness for a Nuclear  or Radiological Emergency</em>, 2007.</li>
<li>Atomic Energy Control Board (AECB), R-7, <em>Requirements for Containment  Systems for CANDU Nuclear Power Plants</em>, 1991.</li>
<li>AECB, R-8, <em>Requirements  for Shutdown Systems for CANDU Nuclear Power Plants</em>, 1991.</li>
<li>AECB, R-9, <em>Requirements  for Emergency Core Cooling Systems for CANDU Nuclear Power Plants</em>, 1991.</li>
<li>CNSC, RD-334, <em><a href="/eng/acts-and-regulations/consultation/comment/rd-334-1">Aging Management for Nuclear Power Plants</a></em>, 2011.</li>
<li>CNSC, RD-204, <em>Certification  of Persons Working at Nuclear Power Plants</em>, February 2008.</li>
<li>CNSC, S-296, <em>Environmental Protection Policies,  Programs and Procedures at Class I Nuclear Plants and Uranium Mines and Mills</em>,  2006. </li>
<li>CNSC, G-225, <em>Emergency Planning at Class I Nuclear  Facilities and Uranium Mines and Mills</em>,&nbsp;2001.</li>
<li>American Society of Mechanical Engineers (ASME), NQA-1-2008, <em>Quality Assurance Requirements for Nuclear Facility Applications</em>, 2008.</li>
<li>ASME, NQA-1a-2009, <em>Addenda to ASME NQA-1-2008:</em> <em>Quality Assurance Requirements for Nuclear Facility Applications</em>, 2009.</li>
<li>Bristish Standards Institution, OHSAS 18001:2007, <em>Occupational Health and Safety Management Systems&nbsp;- Requirements</em>, 2007.</li>  </ol>
<h2>CNSC Regulatory Document Series</h2>  <p>Facilities and activities within the nuclear sector in Canada are regulated by the Canadian Nuclear Safety Commission (CNSC).&nbsp;In addition to&nbsp;the <em>Nuclear Safety and Control Act </em>and associated regulations, there may also be requirements to comply with other&nbsp;regulatory instruments such as regulatory documents or standards.</p>  <p>Effective April 2013, the CNSC&#39;s catalogue of existing and planned regulatory documents has been organized under three key categories and twenty-five series, as set out below. Regulatory documents produced by the CNSC fall under one of the following series:</p>
<ul className="list-bullet-none">
<li><strong>1.0 Regulated facilities and activities</strong></li>
<li>Series 1.1 Reactor facilities
<ul className="list-bullet-none">
<li>1.2 Class IB facilities</li>
<li>1.3 Uranium mines and mills</li>
<li>1.4 Class II facilities</li>
<li>1.5 Certification of prescribed equipment</li>
<li>1.6 Nuclear  substances and radiation devices</li>
</ul></li>
<li><strong>2.0 Safety and control areas</strong></li>
<li>Series 2.1 Management system
<ul className="list-bullet-none">
<li>2.2 Human performance management</li>
<li>2.3 Operating performance</li>
<li>2.4 Safety analysis</li>
<li>2.5 Physical design</li>
<li>2.6 Fitness for service</li>
<li>2.7 Radiation protection/li>
<li>2.8 Conventional health and safety</li>
<li>2.9 Environmental protection</li>
<li>2.10 Emergency management and fire protection</li>
<li>2.11 Waste management</li>
<li>2.12 Security</li>
<li>2.13 Safeguards and non-proliferation</li>
<li>2.14 Packaging and transport</li>
</ul></li>
<li><strong>3.0 Other regulatory areas</strong></li>
<li>Series 3.1 Reporting requirements
<ul className="list-bullet-none">
<li>3.2 Public and Aboriginal engagement</li>
<li>3.3 Financial guarantees</li>
<li>3.4 Commission proceedings</li>
<li>3.5 Information dissemination</li>
</ul></li>
</ul>
<p><strong>Note:</strong> The regulatory document series may be adjusted periodically by the CNSC. Each regulatory document series listed above may contain multiple regulatory documents. For the latest list of regulatory documents, visit the CNSC&#39;s Web site at <a href="/eng/acts-and-regulations/regulatory-documents/index">nuclearsafety.gc.ca/regulatory-documents</a>.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="clear">
                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }