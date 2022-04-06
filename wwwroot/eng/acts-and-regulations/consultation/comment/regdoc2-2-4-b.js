import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "en",
                pageTitle: "REGDOC-2.2.4: Fitness for Duty", 
                dateModified: "2015-10-28",
                langToggleUrl: "/fra/acts-and-regulations/consultation/comment/regdoc2-2-4-b"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<h2>Preface</h2>
<p>This regulatory document is part of the CNSC&rsquo;s Human Performance Management series of regulatory documents, which also covers human factors, personnel training and personnel certification. The full list of regulatory document series is included at the end of this document and can also be found on the <a href="http://www.nuclearsafety.gc.ca/eng/acts-and-regulations/regulatory-documents/index">CNSC&rsquo;s website</a>.</p>  <p>Regulatory document REGDOC-2.2.4, <em>Fitness for Duty</em>, sets out requirements and guidance for managing fitness for duty of workers at all high-security sites, as defined in the <em>Nuclear Security Regulations</em>.</p>   <p>REGDOC-2.2.4 has incorporated the content of RD-363, <em>Nuclear Security Officer Medical, Physical, and Psychological Fitness</em>. Once published, REGDOC-2.2.4 will replace RD-363.</p>  <p>REGDOC-2.2.4 is intended to form part of the licensing basis for a regulated facility or activity within the scope of the document. It is intended for inclusion in licences as either part of the conditions and safety and control measures in a licence, or as part of the safety and control measures to be described in a licence application and the documents needed to support that application.</p>  <p>The CNSC&rsquo;s regulatory framework includes CNSC regulatory documents as well as national and international standards. Specifically, the Canadian Standards Association (CSA Group) N-Series standards provides an interlinked set of regulatory requirements for the management of nuclear facilities and activities. The CSA N286 standard provides an overall management framework and direction to develop and implement sound management practices and controls for the licensing basis. This regulatory document does not duplicate the generic requirements of CSA N286. However, it provides more specific direction for those requirements.</p>  <p>For proposed new regulated facilities and activities, this document will be used to assess licence applications.</p>  <p>Guidance contained in this document exists to inform the applicant, to elaborate further on requirements or to provide direction to licensees and applicants on how to meet requirements. It also provides more information about how CNSC staff evaluate specific problems or data during their review of licence applications. Licensees are expected to review and consider guidance; should they choose not to follow it, they should explain how their chosen alternate approach meets regulatory requirements.</p>   <p>For existing facilities: The requirements contained in this document do not apply unless they have been included, in whole or in part, in the licence or licensing basis.</p>   <p>A graded approach, commensurate with risk, may be defined and used when applying the requirements and guidance contained in this regulatory document. The use of a graded approach is not a relaxation of requirements. With a graded approach, the application of requirements is commensurate with the risks and particular characteristics of the facility or activity.</p>  <div className="module ">
<p><strong>Important note:</strong> Where referenced in a licence either directly or indirectly (such  as through licensee-referenced documents), this document is part of the licensing  basis for a regulated facility or activity.</p>
<p>The licensing  basis sets the boundary conditions for acceptable performance at a regulated  facility or activity, and establishes the basis for the CNSC&rsquo;s compliance  program for that regulated facility or activity.</p>
<p>Where this  document is part of the licensing basis, the word &ldquo;shall&rdquo; is used to express a  requirement to be satisfied by the licensee or licence applicant. &ldquo;Should&rdquo; is  used to express guidance or that which is advised. &ldquo;May&rdquo; is used to express an  option or that which is advised or permissible within the limits of this  regulatory document. &ldquo;Can&rdquo; is used to express possibility or capability.</p>
<p>Nothing  contained in this document is to be construed as relieving any licensee from  any other pertinent requirements. It is the licensee&rsquo;s responsibility to  identify and comply with all applicable regulations and licence conditions.</p>  </div>  </div>  <div className="col-md-12 module-table-contents">
<ul>
<li><a href="#sec-1">1. Introduction</a>
<ul>
<li><a href="#sec-1.1">1.1 Purpose</a></li>
<li><a href="#sec-1.2">1.2 Scope</a></li>
<li><a href="#sec-1.3">1.3 Relevant legislation</a></li>
<li><a href="#sec-1.4">1.4 Relevant international standards and guidelines</a></li>
</ul>
</li>
<li><a href="#sec-2">2. Background</a></li>
<li><a href="#sec-3">3. Programmatic Elements Applicable to the Broad Population</a>
<ul>
<li><a href="#sec-3.1">3.1 Policy statements</a></li>
<li><a href="#sec-3.2">3.2 Fitness-for-duty program</a></li>
<li><a href="#sec-3.3">3.3 Authorities, accountabilities and responsibilities</a></li>
<li><a href="#sec-3.4">3.4 General fitness-for-duty process</a></li>
<li><a href="#sec-3.5">3.5 Access to assistance</a></li>
<li><a href="#sec-3.6">3.6 Behavioural observation</a>
<ul>
<li><a href="#sec-3.6.1">3.6.1 Peer observation and reporting</a></li>
<li><a href="#sec-3.6.2">3.6.2 Supervisory awareness program</a></li>
</ul>
</li>
<li><a href="#sec-3.7">3.7 Assessment and continual improvement</a></li>
<li><a href="#sec-3.8">3.8 Training, education, and awareness</a></li>
</ul>
</li>
<li><a href="#sec-4">4. Specific Fitness-for-duty Assessments and Tests for Safety-Sensitive Positions</a>
<ul>
<li><a href="#sec-4.1">4.1 Identification of safety-sensitive positions</a></li>
<li><a href="#sec-4.2">4.2 Identification of fitness-for-duty requirements</a></li>
<li><a href="#sec-4.3">4.3 Medical assessments</a>
<ul>
<li><a href="#sec-4.3.1">4.3.1 Certified workers</a></li>
<li><a href="#sec-4.3.2">4.3.2 Security personnel</a></li>
<li><a href="#sec-4.3.3">4.3.3 Minimum staff complement and licensee identified safety-sensitive positions</a></li>
</ul>
</li>
<li><a href="#sec-4.4">4.4 Psychological assessment</a>
<ul>
<li><a href="#sec-4.4.1">4.4.1 Certified workers</a></li>
<li><a href="#sec-4.4.2">4.4.2 Security personnel</a></li>
<li><a href="#sec-4.4.3">4.4.3 Minimum staff complement and licensee identified safety-sensitive positions</a></li>
</ul>
</li>
<li><a href="#sec-4.5">4.5 Occupational fitness assessment</a>
<ul>
<li><a href="#sec-4.5.1">4.5.1 Certified workers</a></li>
<li><a href="#sec-4.5.2">4.5.2 Security personnel</a></li>
<li><a href="#sec-4.5.3">4.5.3 Minimum staff complement and licensee identified safety-sensitive positions</a></li>
</ul>
</li>
<li><a href="#sec-4.6">4.6 Alcohol and drug testing</a>
<ul>
<li><a href="#sec-4.6.1">4.6.1 Pre-placement alcohol and drug testing</a></li>
<li><a href="#sec-4.6.2">4.6.2 For-cause alcohol and drug testing</a></li>
<li><a href="#sec-4.6.3">4.6.3 Follow-up alcohol and drug testing</a></li>
<li><a href="#sec-4.6.4">4.6.4 Random alcohol and drug testing</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#sec-5">5. Processes to Assess, Test and Monitor Safety-sensitive Positions</a>
<ul>
<li><a href="#sec-5.1">5.1 Medical assessment process</a></li>
<li><a href="#sec-5.2">5.2 Psychological assessment process</a></li>
<li><a href="#sec-5.3">5.3 Occupational fitness assessment process</a></li>
<li><a href="#sec-5.4">5.4 Alcohol and drug testing process</a>
<ul>
<li><a href="#sec-5.4.1">5.4.1 Breath alcohol testing process</a></li>
<li><a href="#sec-5.4.2">5.4.2 Urine drug-testing process</a></li>
<li><a href="#sec-5.4.3">5.4.3 Process for positive alcohol and drug tests</a></li>
</ul>
</li>
<li><a href="#sec-5.5">5.5 Substance abuse evaluation process</a></li>
<li><a href="#sec-5.6">5.6 Investigative and impairment screening tools</a></li>
<li><a href="#sec-5.7">5.7 Records</a></li>
</ul>
</li>
<li><a href="#sec-a">Appendix A: Assessments by workgroup and circumstance</a>
<ul>
<li><a href="#sec-a1">A.1 Type of assessment by workgroup and circumstance</a></li>
<li><a href="#sec-a2">A.2 Alcohol and drug testing by workgroup and circumstance</a></li>
</ul>
</li>
<li><a href="#sec-b">Appendix B: Recommended medical standards for  designated non-nuclear response force personnel</a></li>
<li><a href="#sec-c">Appendix C: Nuclear security officer physical fitness test</a>
<ul>
<li><a href="#sec-c1">C.1 Background</a></li>
<li><a href="#sec-c2">C.2 Objectives</a></li>
<li><a href="#sec-c3">C.3 The test</a></li>
</ul>
</li>
<li><a href="#sec-d">Appendix D: Alcohol and drug testing thresholds</a>
<ul>
<li><a href="#sec-d1">D.1 Blood alcohol concentration ranges and associated actions</a></li>
<li><a href="#sec-d2">D.2 Immunoassay screening</a></li>
<li><a href="#sec-d3">D.3 GC-MS and LC-MS/MS confirmation</a></li>
<li><a href="#sec-d4">D.4 Recommended dilution protocol cut-off concentrations</a></li>
</ul>
</li>
<li><a href="#sec-abbr">Abbreviations</a></li>
<li><a href="#sec-glossary">Glossary</a></li>
<li><a href="#sec-ref">References</a></li>
<li><a href="#sec-add">Additional Information</a></li>  </ul>  </div>  <div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="1"></div>
<h2 id="sec-1">1. Introduction</h2>
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
<h3 id="sec-1.1">1.1 Purpose</h3>  <p>This regulatory document establishes requirements and guidance for managing worker fitness for duty.</p>
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
<h3 id="sec-1.2">1.2 Scope</h3>  <p>This regulatory document is intended for high-security sites as defined in the <a href="http://laws-lois.justice.gc.ca/eng/regulations/sor-2000-209/page-1.html"><em>Nuclear Security Regulations</em></a>. The requirements and guidance in section 3 of this regulatory document apply to all workers who could pose a risk to nuclear safety or security, also referred to as the broad population. Requirements and guidance in sections 4 and 5 apply only to a subset of workers holding safety-sensitive positions as described in section 4.1. </p>
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
<h3 id="sec-1.3">1.3 Relevant legislation</h3>  <p>The following provisions of the Nuclear Safety and Control Act (NSCA) and regulations made under the Act are relevant to this regulatory document:</p>
<ul>
<li>Subparagraph 9(<em>a</em>)(i) of the NSCA states that one of the objects of the Commission is "to regulate the development, production and use of nuclear energy and the production, possession and use of nuclear substances, prescribed equipment and prescribed information in order to prevent unreasonable risk, to the environment and to the health and safety of persons, associated with that development, production, possession or use".</li>
<li>Paragraph 12(1)(<em>a</em>) of the <em>General Nuclear Safety and Control Regulations</em> requires that every licensee shall "ensure the presence of a sufficient number of qualified workers to carry on the licensed activity safely and in accordance with the Act, the regulations made under the Act and the licence".</li>
<li>Paragraph 12(1)(<em>b</em>) of the <em>General Nuclear Safety and Control Regulations</em> requires that every licensee shall "train the workers to carry on the licensed activity in accordance with the Act, the regulations made under the Act and the licence".</li>
<li>Paragraph 17(<em>b</em>) of the <em>General Nuclear Safety and Control Regulations</em> requires that every worker shall "comply with the measures established by the licensee to protect the environment and the health and safety of persons, maintain security, control the levels and doses of radiation, and control releases of radioactive nuclear substances and hazardous substances into the environment".</li>
<li>Subparagraph 17(<em>c</em>)(i) of the <em>General Nuclear Safety and Control Regulations</em> requires that every worker shall "promptly inform the licensee or the worker&rsquo;s supervisor of any situation in which the worker believes there may be a significant increase in the risk to the environment or the health and safety of persons".</li>
<li>Paragraph 17(<em>e</em>) of the <em>General Nuclear Safety and Control Regulations</em> requires that every worker shall "take all reasonable precautions to ensure the worker&rsquo;s own safety, the safety of the other persons at the site of the licensed activity, the protection of the environment, the protection of the public and the maintenance of the security of nuclear facilities and of nuclear substances".</li>
<li>Paragraph 6(<em>d</em>) of the <em>Class I Nuclear Facilities Regulations</em> stipulates that an application for a licence to operate a Class I nuclear facility shall contain "the proposed measures, policies, methods and procedures for operating and maintaining the nuclear facility".</li>
<li>Paragraph 6(<em>n</em>) of the <em>Class I Nuclear Facilities Regulations</em> stipulates that an application for a licence to operate a Class I nuclear facility shall contain "the results that have been achieved in implementing the program for recruiting, training and qualifying workers in respect of the operation and maintenance of the nuclear facility".</li>
<li>Subsection 18(2) of the <em>Nuclear Security Regulations</em> states that "subject to section 18.6, no person shall act as a nuclear security officer without the recorded authorization of the licensee".</li>
<li>Section 18.2 of the <em>Nuclear Security Regulations</em> requires that "a licensee, before issuing an authorization referred to in subsection 18(2) to a person referred to in that subsection, shall satisfy the conditions set out in section 18.1 in respect of the person &ndash; other than the condition set out in paragraph 17(2)(b) &ndash; and shall obtain from the person<br />
(a) documentary proof that the person is a Canadian citizen or a permanent resident within the meaning of the <a href="http://laws.justice.gc.ca/eng/acts/I-2.5"><em>Immigration and Refugee Protection Act</em></a>;<br />
(b) a certificate, signed by a duly qualified medical practitioner, certifying that the person does not have a medical condition that would prevent them from performing the tasks that are likely to be assigned by the licensee;<br />
(c) a certificate, signed by a fitness consultant recognized by the Canadian Society for Exercise Physiology or a person with equivalent or higher qualifications, certifying that the person is physically able to perform tasks that are likely to be assigned by the licensee; and<br />
(d) a certificate, signed by a duly qualified psychologist, certifying that the person is psychologically able to perform tasks that are likely to be assigned by the licensee."</li>
<li>Section 18.4 of the <em>Nuclear Security Regulations</em> states that "an authorization referred to in section 18 may be issued for any term not exceeding five years and shall be subject to any terms and conditions necessary to minimize the risk to the security of the facility."</li>
<li>Section 38 of the <em>Nuclear Security Regulations</em> requires that "every licensee shall develop a supervisory awareness program and implement it on an ongoing basis to ensure that its supervisors are trained to recognize behavioural changes in all personnel, including contractors, that could pose a risk to security at a facility at which it carries on licensed activities".</li>   </ul>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="1.4"></div>
<h3 id="sec-1.4">1.4 Relevant international standards and guidelines</h3>  <p>The International Atomic Energy Agency (IAEA) has identified the need for nuclear facilities to address fitness for duty. The IAEA&rsquo;s framework that supports fitness for duty is embedded in two safety requirement documents [1, 2] and in numerous safety guides [3-6].</p>  <p>For all nuclear facilities, the IAEA recommends that regulators inspect licensees&rsquo; fitness-for-duty programs and evaluate their effectiveness [3]. Regulators are also to ensure nuclear facility operators have "guidelines on fitness for duty in relation to hours of work, health, and substance abuse" [4].</p>  <p>With respect to drugs and alcohol, the IAEA recommends that all nuclear facilities have guidelines on fitness for duty related to substance use. Licensees are to establish and implement a policy applicable to employees, contractors and visitors, which addresses "the illicit use of drugs ... and alcohol abuse, in consonance with national regulations" [5]. Licensees are to have methods for identifying those with a tendency toward alcohol or drug abuse, and it is recommended that administrative controls be established to allow the fitness for duty of shift personnel to be observed, verified and controlled. As well, the IAEA also advises that "personnel prone to drug or alcohol abuse should not be employed for safety related tasks" [6].</p>
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
<h2 id="sec-2">2. Background</h2>  <p>Human performance is a key contributor to the safety and security of nuclear facilities. One factor that affects human performance is fitness for duty. For the purposes of this document fitness for duty is defined as:</p>  <div className="module">  <p>A condition in which workers are physically, physiologically, and psychologically capable of competently and safely performing their tasks.</p>  </div>  <p>The implementation of an effective fitness-for-duty program provides reasonable assurance that workers have the capacity, and are free of any impairment that could hinder their ability, to competently and safely perform the duties of their position, and as such do not pose a safety or security risk.</p>  <p>The fitness-for-duty requirements herein represent reasonable occupational and operational requirements for the applicable worker population [7]. An employer is responsible for assessing the extent, where considered necessary, of the duty to accommodate. The licensee is also responsible for ensuring that any duties assigned to a worker do not pose a risk to his or her health or safety, the health or safety of others, the safety of the facility, and do not impact the effectiveness of the licensee&rsquo;s operation.</p>
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
<h2 id="sec-3">3. Programmatic Elements Applicable to the Broad Population</h2>  <p>Licensees shall manage the fitness for duty of workers who could pose a risk to nuclear safety or security (also referred to as the broad population) in accordance with their management system as defined in the licensee&rsquo;s licensing basis. The following subsections specify how the management system&rsquo;s generic requirements apply to managing fitness for duty. Additional elements including fitness for duty-related policy statements, programs and processes are also addressed.</p>  <p>Licensees shall identify positions in the broad population in their governing documents.</p>
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
<h3 id="sec-3.1">3.1 Policy statements</h3>  <p>Licensees shall establish, implement and maintain clear fitness-for-duty policy statements. The policy statements shall provide workers with information on what is expected of them and the consequences that may result from policy violations.</p>  <p>Under these policy statements, licensees shall:</p>
<ol>
<li>address factors that could adversely affect the worker&rsquo;s ability to competently and safely perform his or her duties</li>
<li>prohibit reporting to work or remaining at work under the influence of alcohol or illicit drugs</li>
<li>prohibit bringing, keeping or consuming alcohol, illicit drugs, drug paraphernalia, or prescribed medications without a legal prescription on the grounds of the high-security site</li>
<li>reinforce the responsible use of prescription, or over-the-counter medications, and the process to follow if a medication is used that impairs or has the potential to impair a worker&rsquo;s ability to competently and safely perform his or her duties</li>
<li>address stand-by, on call, and unexpected call-in requirements related to fitness for duty</li>
<li>describe the responsibilities of workers, supervisors, oversight personnel and escorts to report fitness-for-duty concerns</li>
</ol>  <h4>Guidance</h4>  <p>In developing policy statements, several factors that are known to adversely affect workers&rsquo; ability to competently and safely perform their duties should be addressed. These include mental stress, fatigue, illness, injury, alcohol and drug use.</p>
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
<h3 id="sec-3.2">3.2 Fitness-for-duty program</h3>  <p>The licensee shall implement a documented fitness-for-duty program that includes a set of coordinated measures designed to provide reasonable assurance that workers are capable of performing their tasks and as such do not pose a risk to their safety, the safety of others, or the safety or security of the facility.</p>
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
<h3 id="sec-3.3">3.3 Authorities, accountabilities and responsibilities</h3>  <p>Licensees shall define and document the authorities, accountabilities, and responsibilities for those involved with managing worker fitness for duty including the interfaces with external organizations.</p>  <h4>Guidance</h4>  <p>Licensees should define and document the authorities, accountabilities, and responsibilities for the following, if applicable:</p>
<ul>
<li>senior management</li>
<li>supervisors, oversight personnel and escorts</li>
<li>workers</li>
<li>security personnel</li>
<li>human resources</li>
<li>fitness-for-duty program administrators</li>
<li>duly qualified medical practitioners</li>
<li>duly qualified health professionals</li>
<li>duly qualified psychologists</li>
<li>duly qualified forensic toxicologists</li>
<li>duly qualified pharmacists</li>
<li>fitness consultants</li>
<li>breath alcohol technicians</li>
<li>urine collectors</li>
<li>medical review officers (MROs)</li>
<li>accredited laboratories</li>
<li>third-party providers</li>
<li>employee assistance program (EAP) providers</li>
<li>substance abuse evaluation providers</li>
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
<div id="3.4"></div>
<h3 id="sec-3.4">3.4 General fitness-for-duty process</h3>  <p>Licensees shall establish, implement and maintain a process to identify and manage workers who have temporary or ongoing limitations that may make them incapable of performing their assigned duties competently and safely. This process shall include actions for a supervisor to take if he or she believes, through self-reporting, peer reporting, observed behaviour, physical condition, a fitness-for-duty screening or assessment, a health professional&rsquo;s report or after receiving credible information, that a worker may be unable to competently and safely perform his or her assigned duties.</p>  <p>Licensees shall establish, implement and maintain a referral process to guide workers to seek assistance from the appropriate resources.</p>  <p>When fitness-for-duty assessments are conducted, they shall be conducted by a duly qualified health professional who shall categorize the job applicant&rsquo;s or incumbent&rsquo;s fitness with respect to the job performance requirements for the position. The health professional&rsquo;s report to the licensee shall certify that the applicant or incumbent worker is either fit, unfit, or fit to perform with restrictions. These restrictions shall be reported as either temporary or permanent.</p>  <p>Licensees shall identify the conditions under which a fitness-for-duty assessment is required to make return-to-work recommendations.</p>  <h4>Guidance</h4>  <p>The fitness-for-duty process should include both self-referrals and directed referrals to appropriate fitness-for-duty resources, such as health professionals, employee assistance program provider, or testing program through the fitness-for duty administrator. Processes should identify the conditions that will warrant for-cause assessments.</p>
<p>Prior to a directed referral based on observed behaviour, a fitness-for-duty screening should be conducted. The screening should be based on face-to-face interaction between the worker, his or her supervisor and at least one other person. A screening checklist should be used.</p>
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
<h3 id="sec-3.5">3.5 Access to assistance</h3>  <p>Licensees shall ensure that workers have access to an EAP. EAPs shall be designed to achieve early intervention and provide confidential assistance.</p>  <h4>Guidance</h4>  <p>The EAP should offer confidential assessment, short-term counselling, referral services, and treatment monitoring to workers who have problems that could adversely affect the worker&rsquo;s ability to competently and safely perform his or her duties.</p>
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
<h3 id="sec-3.6">3.6 Behavioural observation</h3>  <p>Licensees shall ensure that all workers who could pose a risk to nuclear safety or security at high-security sites are subject to behavioural observation.</p>  <h4 id="sec-3.6.1">3.6.1 Peer observation and reporting</h4>  <p>Licensees shall ensure that expectations regarding peer observation and reporting are included in their fitness-for-duty processes and aligned with their respective policy statements on peer observation.</p>  <h4 id="sec-3.6.2">3.6.2 Supervisory awareness program</h4>  <p>As indicated in section 1.3 of this document, section 38 of the <em>Nuclear Security Regulations</em> requires licensees to develop a supervisory awareness program. This is to ensure that supervisors are trained to recognize behavioural changes in all personnel, including contractors that could pose a risk to security at a facility.</p>  <p>Supervisory awareness training shall be delivered to supervisors and other designated personnel identified by the licensee.</p>  <h4>Guidance</h4>  <p>Observations related to a worker&rsquo;s fitness for duty should be made in a variety of situations, such as during task assignments, observation and coaching sessions, field inspections, pre-job briefings, performance reviews, one-on-one sessions, shift turnovers and incident investigations.</p>  <p>A process to document and trend aberrant behavioural incidents (acute vs. repetitive) for individual workers should be established to facilitate appropriate intervention strategies based on risk.</p>  <p>Supervisory awareness training should include the following aspects:</p>
<ul>
<li>knowledge of the authorities, accountabilities, and responsibilities of supervisors and other designated personnel with respect to behavioural observation</li>
<li>knowledge of the interfaces between related fitness-for-duty policies, procedures, and supporting programs</li>
<li>the ability to detect, assess, and effectively respond to behaviours that have the potential to impact safety and security</li>
<li>the ability to detect behaviours that may indicate the possible use, sale, or possession of illegal drugs; use or possession of alcohol or impairment from prescription and over-the-counter medication onsite or while on duty</li>
<li>the ability to detect  behaviours that may indicate impairment from fatigue or any mental or physical  impairment that, if left unattended, may pose a risk to safety and security</li>
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
<div id="3.7"></div>
<h3 id="sec-3.7">3.7 Assessment and continual improvement</h3>  <p>An assessment of the fitness-for-duty program and the supervisory awareness program shall be performed periodically to identify opportunities for continual improvement and to confirm the program&rsquo;s effectiveness.</p>  <p>Licensees shall carry out trend analyses of problems and causes related to fitness for duty.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.8"></div>
<h3 id="sec-3.8">3.8 Training, education, and awareness</h3>  <p>Licensees shall ensure that those with authorities, accountabilities, and responsibilities for managing fitness for duty, including workers, receive initial and continuing training commensurate with their authorities, accountabilities, and responsibilities.</p>  <h4>Guidance</h4>  <p>Licensees&rsquo; training, education, and awareness for workers who are subject to the fitness-for-duty program should include the following aspects:</p>
<ul>
<li>knowledge of the fitness-for-duty policy statements and procedures that apply to the worker, the methods that will be used to implement them, and the consequences of violating the policy and procedures</li>
<li>knowledge of the individual&rsquo;s authorities, accountabilities, and responsibilities under the fitness-for-duty program</li>
<li>knowledge of the EAP services available to the worker</li>
<li>knowledge of the health and safety hazards associated with abuse of illegal and legal drugs and alcohol</li>
<li>knowledge of the potential adverse effects on job performance of prescription and over-the-counter drugs, alcohol, dietary factors, illness, mental stress, and fatigue</li>
<li>knowledge of the prescription and over-the-counter drugs and dietary factors that have the potential to affect drug and alcohol test results</li>
<li>the ability to detect behaviours in peers that may indicate the possible use, sale or possession of illegal drugs; use or possession of alcohol or impairment from prescription and over-the-counter medication on site or while on duty</li>
<li>the ability to detect behaviours that may indicate impairment from fatigue or any mental or physical impairment that, if left unattended, may pose a risk to safety and security</li>
<li>knowledge of the individual&rsquo;s responsibility to report a fitness-for-duty concern and the ability to initiate appropriate actions related to self- and peer-reporting</li>
</ul>  <p>Additional requirements and guidance related to training can be found in sections 3.6.2, Supervisory awareness program</em>; 5.4.1, Breath alcohol testing process; 5.4.2, Urine drug-testing process; and 5.6, Investigative and impairment screening tools.</p>   <p>Requirements and guidance for training systems are found in REGDOC-2.2.2, <em>Personnel Training</em>.</p>
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
<h2 id="sec-4">4. Specific Fitness-for-duty Assessments and Tests for Safety-Sensitive Positions</h2>
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
<h3 id="sec-4.1">4.1 Identification of safety-sensitive positions</h3>  <p>Licensees shall identify safety-sensitive positions through a documented, risk-informed analysis.</p>   <p>Safety-sensitive positions shall include:</p>
<ol>
<li>certified workers</li>
<li>the following security personnel: Nuclear Security Officers (NSOs), onsite nuclear response force (NRF) members, and designated non-NRF personnel</li>
<li>positions that are part of the minimum staff complement at high-power reactor facilities, unless excluded based on the results of the risk-informed analysis</li>
<li>any other positions identified via the risk-informed analysis performed by the licensee</li>
</ol>  <p>Licensees shall list all safety-sensitive positions in their governing documents.</p>  <h4>Guidance</h4>  <p>The risk-informed analysis to identify safety-sensitive positions should consider the following:</p>
<ul>
<li>tasks of the worker during normal and emergency operating conditions</li>
<li>nature of equipment and material that he or she handles or could handle</li>
<li>actions assigned to the workgroup that could directly cause or contribute to a significant incident; or could result in an inadequate response to a significant incident</li>
</ul>  <p>Additional information regarding certified workers may be found in RD-204, <em>Certification of Persons Working at Nuclear Power Plants</em> [8].</p>
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
<h3 id="sec-4.2">4.2 Identification of fitness-for-duty requirements</h3>  <p>Licensees shall establish, implement and maintain a process for identifying medical, psychological, and occupational fitness requirements that are appropriate to the worker&rsquo;s job performance requirements.</p>   <p>For each safety-sensitive position, licensees shall clearly document applicable fitness-for-duty requirements. Fitness-for-duty assessments and tests and the circumstances under which the assessments and tests are to be conducted shall be specified. The medical, psychological and occupational fitness assessments and tests specified in this section and summarized in appendix A shall be included.</p>  <p>Note that for NSOs and NSOs with NRF qualifications, some of these requirements are prescribed in the <em>Nuclear Security Regulations</em>.</p>  <h4>Guidance</h4>  <p>The process for identifying fitness-for-duty requirements should be risk-informed and should consider the tasks of the worker during normal and emergency operating conditions, and the nature of equipment and material that he or she handles or could handle. Consideration should be made for workers required to conduct tasks, use equipment, or wear personal protective equipment that is known to add additional physiological or psychological stress or burden to the worker&rsquo;s duties (e.g., use of respiratory protective equipment).</p>  <p>In determining which safety-sensitive positions require an occupational fitness assessment or test, the physicality of tasks should be rated as part of the job analysis process. The physicality ratings could be used along with the ratings of task difficulty, importance and frequency that are specified in REGDOC-2.2.2, <em>Personnel Training</em>.</p>
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
<h3 id="sec-4.3">4.3 Medical assessments</h3>  <p>Medical assessments for safety-sensitive positions shall be conducted in accordance with the medical assessment process described in section 5.1.</p>
<h4 id="sec-4.3.1">4.3.1 Certified workers</h4>  <p>All certified workers shall undergo a medical assessment pre-placement, periodically at an interval to be determined by the licensee, and for cause when a medical concern that may affect the worker&rsquo;s fitness for duty is suspected or identified.</p>  <h5>Guidance</h5>  <p>When conducting the certified worker&rsquo;s medical assessment, the medical practitioner should be guided by a recognized medical standard (for example, American National Standards Institute (ANSI) 3.4 <em>Medical Certification and Monitoring of Personnel Requiring Operator Licenses for Nuclear Power Plants)</em> [9].</p>
<h4 id="sec-4.3.2">4.3.2 Security personnel</h4>  <h5>Nuclear security officers (including on-site nuclear response force members)</h5>  <p>All NSOs shall undergo a medical assessment pre-placement, at least every two years, and for cause when a medical concern that may affect the worker&rsquo;s fitness for duty is suspected or identified.</p>  <p>The medical assessment shall include one or more medical examinations, vision tests, and hearing tests. The duly qualified medical practitioner shall determine the medical examinations, vision tests, and hearing tests to be used in the medical assessment.</p>  <p>In accordance with REGDOC-2.12.1, <em>High-Security Sites: Nuclear Response Force</em>, [10] an onsite nuclear response force member shall also undergo a medical assessment if the person wishes to return to duty after any period of extended leave greater than six months.</p>  <h5>Guidance</h5>  <p>When conducting the NSO&rsquo;s medical assessment, the medical practitioner should be guided by the following documents:</p>
<ul>
<li>A. Trottier and J. Brown,  <em>Police health: A physician&rsquo;s guide for the assessment of police officers</em> [11]</li>
<li>Ontario Association of Chiefs of Police, <em>Constable Selection System:</em>
<ul>
<li><em>Guidelines for Examining Physicians &ndash; Medical Evaluation of Police Constable Applicants</em> [12]</li>
<li><em>Guidelines for Examining Ophthalmologists / Optometrists</em> [13]</li>
<li><em>Hearing Performance Standard</em> [14]</li>
</ul></li>
<li>other equivalent recognized guidelines for policing within the province of employment</li>
</ul>  <h5>Designated non-nuclear response force personnel</h5>  <p>Designated non-nuclear response force personnel shall undergo a medical assessment pre-placement and periodically at least every four years. Designated non-nuclear response force personnel shall also undergo a medical assessment for cause when a medical concern that may affect fitness for duty is suspected or identified.</p>  <h5>Guidance</h5>  <p>When conducting the designated non-nuclear response force personnel&rsquo;s medical assessment, the medical practitioner should refer to the guidance in appendix B.</p>  <p>In addition, further guidance can be found in the following documents from the Ontario Association of Chiefs of Police, <em>Constable Selection System</em>,</p>
<ul>
<li><em>Guidelines for Examining Physicians &ndash; Medical Evaluation of Police Constable Applicants</em> [12]</li>
<li><em>Guidelines for Examining Ophthalmologists / Optometrists</em> [13]</li>
<li><em>Hearing Performance Standard</em> [14]</li>
</ul>
<h4 id="sec-4.3.3">4.3.3 Minimum staff complement and licensee identified safety-sensitive positions</h4>  <ul>
<li>Applicable minimum staff complement positions and licensee-identified safety-sensitive positions (see section 4.1) shall undergo a medical assessment pre-placement, periodically at an interval to be determined by the licensee, and for cause when a medical concern that may affect the worker&rsquo;s fitness for duty is suspected or identified</li>  </ul>  <p>CSA Group nuclear standard N293, <em>Fire Protection for CANDU Nuclear Power Plants</em> [15] requires emergency response teams (ERT) / industrial fire brigade members to undergo a medical assessment annually, and after each medical leave of absence.</p>
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
<h3 id="sec-4.4">4.4 Psychological assessment</h3>  <p>Psychological assessments for safety-sensitive positions shall be conducted in accordance with the psychological assessment process described in section 5.2.</p>
<h4 id="sec-4.4.1">4.4.1 Certified workers</h4>  <p>All certified workers shall undergo a psychological assessment pre-placement and for cause when a mental health concern that may affect the worker&rsquo;s fitness for duty is suspected or identified.</p>
<h4 id="sec-4.4.2">4.4.2 Security personnel</h4>  <h5>Nuclear security officers (including onsite nuclear response force members)</h5>  <p>NSOs shall undergo a psychological assessment pre-placement, and for cause when a mental health concern that may affect the worker&rsquo;s fitness for duty is suspected or identified.</p>  <p>In accordance with REGDOC-2.12.1, <em>High-Security Sites: Nuclear Response Force</em>, an onsite nuclear response force member shall also undergo a psychological assessment if the person wishes to return to duty after any period of extended leave greater than six months. The duly qualified psychologist carrying out the reassessment shall be made aware of the workplace duties and responsibilities that the prospective NRF applicant or candidate must carry out, including the fact that they possess and carry prohibited firearms while on duty.</p>  <p>For any leave period where the person has been on military duty in a combat or war zone, the licensee shall ensure that the psychologist is aware that the person has been in this type of environment so that they can be assessed accordingly.</p>  <p>The psychological reassessment assists in determining if an NRF applicant, candidate or member is psychologically capable of performing the tasks that are likely to be assigned by the licensee and as such does not pose a risk to his or her own safety, the safety of others, or the safety and security of the facility.</p>   <h5>Designated non-nuclear response force personnel</h5>  <p>Designated non-nuclear response force personnel shall undergo a psychological assessment pre-placement, and for cause when a mental health concern is suspected or identified.</p>  <p>A designated non-nuclear response force personnel shall also undergo a psychological assessment if the person wishes to return to duty after any period of extended leave greater than six months.</p>  <p>The psychologist carrying out the reassessment shall be made aware of the workplace duties and responsibilities that the prospective applicant or candidate must carry out, including the fact that he or she possesses and carries prohibited firearms while on duty.</p>  <p>For any leave period where the person has been on military duty in a combat or war zone, the licensee shall ensure that the psychologist is aware that the person has been in this type of environment so that they can be assessed accordingly.</p>  <p>The psychological reassessment assists in determining if an applicant or candidate is psychologically capable of performing the tasks that are likely to be assigned by the licensee and as such does not pose a risk to his or her own safety, the safety of others, or the facility.</p>
<h4 id="sec-4.4.3">4.4.3 Minimum staff complement and licensee identified safety-sensitive positions</h4>  <p>Those occupying applicable minimum staff complement positions, including ERT / fire brigade members, and licensee-identified safety-sensitive positions (see section 4.1) shall undergo a psychological assessment for cause when a mental health concern that may affect fitness for duty is suspected or identified.</p>
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
<h3 id="sec-4.5">4.5 Occupational fitness assessment</h3>  <p>Occupational fitness assessments for safety-sensitive positions shall be conducted in accordance with the occupational fitness assessment process described in section 5.3.</p>
<h4 id="sec-4.5.1">4.5.1 Certified workers</h4>  <p>Licensees shall evaluate certified workers&rsquo; positions to determine which positions require occupational fitness assessments or tests (see section 4.2).</p>
<h4 id="sec-4.5.2">4.5.2 Security personnel</h4>  <h5>Nuclear security officers (including onsite nuclear response force personnel)</h5>  <p>All NSOs shall undergo a physical fitness test pre-placement, periodically at least every 12 months, and for cause when a physical fitness concern is suspected or identified.</p>  <p>The physical fitness test shall be the CNSC-approved NSO Physical Fitness Test found in appendix C, or equivalent.</p>  <p>The physical fitness test requirements for NSOs that are onsite nuclear response force members are contained in REGDOC 2.12.1, <em>High-Security Sites: Nuclear Response Force</em>. NRF personnel shall undergo a physical fitness test pre-placement, periodically at least every six months, and for cause when a physical fitness concern is suspected or identified. In accordance with REGDOC 2.12.1, <em>High-Security Sites: Nuclear Response Force</em>, onsite nuclear response force members shall also be physically reassessed if the person wishes to return to duty after any period of extended leave greater than six months.</p>
<h4 id="sec-4.5.3">4.5.3 Minimum staff complement and licensee identified safety-sensitive positions</h4>  <p>Licensees shall evaluate applicable minimum staff complement and licensee-identified safety-sensitive positions to determine which positions require occupational fitness assessments or tests (see section 4.2).</p>  <p>Emergency response team/fire brigade members at high-security sites that have been identified as safety-sensitive positions shall be assessed against the established physical fitness performance requirements that are based on assigned emergency response activities, including duties conducted under adverse conditions. The assessment shall be conducted pre-placement and annually.</p>  <h5>Guidance</h5>  <p>In developing requirements for physical fitness standards for industrial fire brigades, licensees should consider the 13 essential job tasks of a local fire department defined in the National Fire Protection Association (US) <em>Standard on Comprehensive Occupational Medical Program for Fire Departments</em> NFPA 1582 (2013)[16] in the context of fire response for an industrial fire brigade at a nuclear facility.</p>  <p>Given the nature of firefighting, it is important to make a distinction between the individual workers responsible for performing fire response and those responsible for directing fire response (incident command), as per the fire attack plan. Due to the decrements in physical fitness associated with advancing age, licensees should consider the development and adoption of physical fitness standard(s) that take age-related fitness declines into account for individuals holding incident command roles.</p>
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
<h3 id="sec-4.6">4.6 Alcohol and drug testing</h3>  <p>Alcohol and drug testing of workers holding safety-sensitive positions shall be conducted in accordance with the breath alcohol-testing and urine drug-testing processes described in section 5.4.</p>
<h4 id="sec-4.6.1">4.6.1 Pre-placement alcohol and drug testing</h4>  <p>Licensees shall require all applicants to a safety-sensitive position to submit to alcohol and drug testing. Incumbent workers transferring to any safety-sensitive position shall also be required to submit to a pre-placement alcohol and drug test.</p>  <h5>Guidance</h5>  <p>A substance test should not be used as an initial employment screening tool, and should not take place before determining that the candidate has met all other qualifications necessary.</p>
<h4 id="sec-4.6.2">4.6.2 For-cause alcohol and drug testing</h4>  <p>Licensees shall require all workers in safety-sensitive positions to submit to for-cause testing under reasonable grounds and post-incident circumstances.</p>  <p>Under reasonable grounds testing, workers in safety-sensitive positions shall be required to submit to for-cause testing when there is reasonable cause to believe, through observed behaviour, physical condition or after receiving credible information, that the individual is unfit to perform his or her duties, due to the adverse effects of alcohol or drug use. The grounds for for-cause testing shall be independently verified by at least two people (one of whom is the supervisor).</p>  <p>Under post-incident testing, workers in safety-sensitive positions shall be required to submit to for-cause testing as soon as practical after a significant incident where a human act or omission by the worker may have caused or contributed to the event.</p>  <h5>Guidance</h5>  <p>Observed behaviours and physical conditions that may establish for-cause reasonable grounds testing include:</p>
<ul>
<li>breath odour</li>
<li>observed use or possession of alcohol, illicit drugs, or drug paraphernalia</li>
<li>speech patterns</li>
<li>physical appearance and behaviour</li>
<li>an episode or events that suggest irrational or reckless behaviour</li>
</ul>  <p>Significant incidents refer to a subset of incidents that have safety significance. See the definitions of "incident" and "safety significance".</p>
<h4 id="sec-4.6.3">4.6.3 Follow-up alcohol and drug testing</h4>  <p>Licensees shall require all workers in safety-sensitive positions to submit to follow-up testing after confirmation of a substance abuse or dependency issue by a health professional.</p>  <p>Workers shall be subject to follow-up alcohol and drug testing in an unannounced and random fashion every 3 months for a minimum of 2 years.</p>
<h4 id="sec-4.6.4">4.6.4 Random alcohol and drug testing</h4>  <p>Licensees shall require all workers holding safety-sensitive positions to submit to random alcohol and drug testing. Licensees&rsquo; sampling process used to select workers for random testing shall ensure that the number of random tests performed annually is equal to at least 25 percent of the safety-sensitive position population.</p>  <p>Licensees shall develop procedures and practices to ensure that random testing is administered in a manner that provides reasonable assurance that individuals are unable to predict when specimens will be collected.</p>  <p>The following shall be addressed for the implementation and conduct of random testing:</p>
<ol>
<li>ensure that all individuals in the population subject to testing have an equal probability of being selected and tested</li>
<li>require that individuals who are offsite when selected for testing, or who are onsite and are not reasonably available for testing when selected, be tested at the earliest reasonable opportunity when both the donor and collectors are available to collect specimens for testing and without prior notification to the individual that he or she has been selected for testing</li>
<li>provide that an individual completing a test is immediately eligible for another unannounced test</li>
</ol>  <h5>Guidance</h5>  <p>The following should be considered for the implementation and conduct of random testing:</p>
<ul>
<li>collect specimens on an unpredictable schedule, including weekends, nightshifts and holidays, and at various times during a shift</li>
<li>be administered by the fitness-for-duty program on a nominal weekly frequency</li>
<li>require individuals who are selected for random testing to report to the collection site as soon as reasonably practical after notification, within the time period specified in the fitness-for-duty program policy</li>
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
<div id="5"></div>
<h2 id="sec-5">5. Processes to Assess, Test and Monitor Safety-sensitive Positions</h2>  <p>The sub-sections below describe several process-related requirements. Note that distinct and separate processes are not necessarily required.</p>
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
<h3 id="sec-5.1">5.1 Medical assessment process</h3>  <p>When conducted, medical assessments shall determine whether the worker, from a medical perspective, is capable of performing their tasks and as such does not pose a risk to his or her safety, the safety of others or the facility.</p>  <p>The medical assessment shall be conducted by a duly qualified medical practitioner.</p>  <p>Subsequent to the medical assessment a certificate shall:</p>
<ol>
<li>be issued signed by a duly qualified medical practitioner</li>
<li>certify whether or not the worker is medically capable of safely performing their tasks</li>
<li>include any temporary or permanent work restrictions</li>
</ol>  <h4>Guidance</h4>  <p>To help standardize and improve the transfer of medical information between the examining medical practitioner and the licensee&rsquo;s duly qualified medical practitioner(s), licensees should consider use of a standardized medical evaluation report (MER) template [17].</p>  <p>The examining medical practitioner would then complete the MER and forward it to the licensee&rsquo;s duly qualified medical practitioner(s), where information would be reviewed and a medical certificate &ndash; categorized as fit, unfit, or fit with employment limitations &ndash; would be forwarded to the licensee&rsquo;s management.</p>
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
<h3 id="sec-5.2">5.2 Psychological assessment process</h3>  <p>When conducted, psychological assessments shall determine whether the worker from a psychological perspective, is capable of performing their tasks and as such does not pose a risk to his or her safety, the safety of others, or the facility.</p>  <p>The psychological assessment shall include an interview and one or more tests. A duly qualified psychologist shall determine the interview and tests to use in the assessment. The interview and tests, along with their interpretation, shall be conducted by the duly qualified psychologist.</p>  <p>Subsequent to the psychological assessment, a certificate shall</p>
<ol>
<li>be issued and signed by a duly qualified psychologist</li>
<li>certify whether or not the worker is psychologically capable of safely performing their tasks</li>
<li>include any temporary or permanent work restrictions</li>
</ol>
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
<h3 id="sec-5.3">5.3 Occupational fitness assessment process</h3>  <p>When conducted, occupational fitness assessments shall determine if the worker possesses the physical fitness attributes and capacity to perform their physically demanding tasks and as such does not pose a risk to his or her safety, the safety of others, or the facility.</p>  <p>Licensees shall establish, implement and maintain an occupational fitness assessment process to ensure that job performance requirements are met. Licensees shall consider the expected physical demands in both normal and emergency conditions.</p>  <p>Physical fitness tests, when conducted as part of an occupational fitness assessment, shall be administered by a fitness consultant recognized by the Canadian Society for Exercise Physiology, or a person with equivalent or higher qualifications. Pass/fail criteria for physical fitness tests shall be specified.</p>  <p>Subsequent to the physical fitness test a certificate shall:</p>
<ol>
<li>be issued signed by a fitness consultant recognized by the Canadian Society for Exercise Physiology or a person with equivalent or higher qualifications</li>
<li>certify whether or not the worker is physically capable of safely performing their tasks</li>
<li>include any temporary or permanent work restrictions</li>
</ol>  <h4>Guidance</h4>  <p>When developing the occupational fitness assessments and tests, licensees should consider the safety analysis report, job tasks analysis and physical demands analysis. Additionally, licensees should consider the equipment used (task-specific, protective and respiratory), the facility design and layout (single- vs. multi-unit), and environmental factors (heat, humidity, and/or cold).</p>  <p>Licensees should consider the establishment of a wellness program to enable candidates or incumbents to attain and maintain required levels of fitness and recover from potential setbacks in fitness due to illness or injury.</p>
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
<h3 id="sec-5.4">5.4 Alcohol and drug testing process</h3>  <h4 id="sec-5.4.1">5.4.1 Breath alcohol testing process</h4>  <p>Licensees shall establish, implement and maintain a process to test workers holding safety-sensitive positions for the presence of alcohol.</p>  <p>Licensees shall retain or maintain competency in the administration, collection, and analysis of evidential breath alcohol testing. The qualified technicians conducting the breath alcohol testing shall be independent from workgroups subject to testing.</p>  <p>Licensees shall ensure that an evidential breath testing instrument is used that has been evaluated, tested and recommended by the Alcohol Test Committee (a committee under the auspices of Canada&rsquo;s Department of Justice) as an approved instrument published in the <em>Approved Breath Analysis Instruments Order</em> (SI/85-201)[18].</p>  <p>Licensees shall establish, implement, and maintain procedures for the administration of evidential breath alcohol testing.</p>  <p>Licensees shall ensure that the following blood alcohol concentrations (BACs) are used for the determination of positive breath alcohol test results:</p>
<ol>
<li>A BAC below 20 mg/100mL shall be considered a negative test, and no further action is required.</li>
<li>A BAC from 20 to 39 mg/100mL shall be considered an action level. The licensees shall prohibit the worker from performing safety-sensitive duties until a determination of fitness indicates that the worker is fit to competently and safely perform his or her duties.</li>
<li>A BAC of 40 mg/100mL or greater shall be considered a positive test and a fitness-for-duty policy violation (see section 5.4.3 process for positive alcohol and drug tests)</li>
</ol>  <p>Appendix D, table D1 provides a summary of BAC ranges and associated actions [19].</p>  <h5>Guidance</h5>  <p>Licensees should refer to the Alcohol Test Committee when establishing procedures for the administration of evidential breath alcohol testing, including:</p>
<ul>
<li>the initial and continuing training and qualification of  breath alcohol technicians for the operation of approved instruments, including conversion training</li>
<li>the initial and continuing training and qualification of designated service personnel for the preventative and corrective maintenance of approved instruments</li>
<li>the development and implementation of protocol(s) for:
<ul>
<li>maintaining approved instruments authorized for use at the nuclear site</li>
<li>the preparation required prior to conducting alcohol testing</li>
<li>handling and processing workers that will be tested, including escort procedures</li>
<li>conducting an initial alcohol test using a breath specimen</li>
<li>determining the need for a confirmatory test for alcohol</li>
<li>conducting a confirmatory test for alcohol</li>
<li>determining a confirmed positive breath alcohol test result</li>
<li>documenting and reporting requirements of breath alcohol specimens</li>
</ul></li>
</ul>
<h4 id="sec-5.4.2">5.4.2 Urine drug-testing process</h4>  <p>Licensees shall establish, implement and maintain a process to test workers holding safety-sensitive positions for the presence of drugs.</p>  <p>Licensees shall develop, implement, and maintain procedures for the administration of urine drug testing including the collection, storage, and transportation of specimens to a designated accredited laboratory.</p>  <p>Licensees shall retain or maintain competency in the collection, storage and transportation of specimens, and shall ensure that urine collectors are independent from workgroups subject to testing.</p>   <p>Licensees shall retain and utilize the services of a laboratory accredited by the Canada Standards Council or the Substance Abuse and Mental Health Services Administration to analyze and report the results of urine drug specimens.</p>  <p>Licensees shall direct the accredited laboratory to report positive test results in conjunction with the urine drug panel (initial and confirmatory cut-off thresholds) as established in appendix D, tables D2 and D3 [20].</p>  <p>Licensees shall develop, implement, and maintain a procedure for reviewing and verifying positive, adulterated, or invalid urine drug test results from a medical, toxicological or pharmacological perspective. The procedure shall ensure that competent specialists are designated to review, interpret, and verify the test results for each drug class as specified in the urine drug panels in appendix D [20].</p>  <p>Licensees shall direct the accredited laboratory to report all positive, adulterated, or invalid test results directly to the designated specialist conducting the drug test review.</p>  <p>In determining whether the donor has violated the fitness-for-duty policy, licensees shall direct the designated specialist to:</p>
<ol>
<li>provide the donor an opportunity to explain any alternative reasons for the positive test result</li>
<li>only report verified positive test results to the licensee</li>
</ol>  <p>Licensees shall direct the designated specialist to raise any for-cause directed referrals for other fitness-for-duty assessments, as necessary, to ensure safety and security.</p>  <h5>Guidance</h5>  <p>Procedures for the administration of urine drug-testing collection and transportation of specimens should include or make reference to the following:</p>
<ul>
<li>licensee-approved collection kits, containers, and other supplies for urine specimen collection</li>
<li>protocol for chain of custody, including relevant forms</li>
<li>protocol for urine specimen collection, including collector duties, specific collection site requirements, verification of donor identity, and potential collection errors (recoverable and non-recoverable)</li>
<li>protocols for handling and processing workers that will be tested, including escort procedures</li>
<li>protocol for verification and assurance of sample integrity</li>
<li>protocols for urine specimen storage and security</li>
<li>protocols for urine specimen packaging and transportation to a designated accredited laboratory</li>
<li>licensee-approved shipment containers</li>
<li>protocol for shy bladder</li>
<li>protocol for refusal to test</li>
<li>initial and continuing training and qualification of urine collectors</li>
</ul>  <p>Licensees should retain and utilize the services of a third-party provider, where feasible, for the administration, collection, verification and assurance of specimen integrity and chain of custody, and shipment of specimens to an accredited laboratory.</p>  <p>Licensees should consider adopting a dilution protocol and should consider testing samples identified as dilute against the urine drug panel (initial and confirmatory cut-off thresholds) established in appendix D, table D4 [20].</p>  <p>When designating competent specialists to review, interpret, and verify the test results for each drug class, licensees should consider the use of MROs, duly qualified forensic toxicologists, or duly qualified pharmacists.</p>  <p>In the event that the designated specialist determines that there is a legitimate medical explanation for the positive drug test &ndash; such as legitimate use of prescription drugs, or a medical condition &ndash; the positive test should not be considered verified. However, a fitness-for-duty assessment may be required to determine if the worker is fit for duty.</p>
<h4 id="sec-5.4.3">5.4.3 Process for positive alcohol and drug tests</h4>  <p>Workers who provide a verified positive alcohol or drug test shall be removed from safety-sensitive duties and referred to the EAP.</p>   <p>The licensee shall not consider the worker for reinstatement to safety-sensitive duties until a recommendation for reinstatement has been received from a duly qualified health professional.</p>
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
<h3 id="sec-5.5">5.5 Substance abuse evaluation process</h3>  <p>Licensees shall establish, implement and maintain an assessment process to evaluate workers in safety-sensitive positions for substance abuse and or dependency. Licensees shall identify the conditions under which a substance abuse evaluation is required.</p>  <p>Licensees shall ensure that both licit and illicit drugs are addressed.</p>   <p>The substance abuse evaluation shall be conducted by a duly qualified health professional. Duly qualified health professionals shall be certified by a professional association or shall have received training in substance abuse evaluation and be affiliated with a college of physicians or nurses.</p>   <p>Workers assessed as having a substance abuse or dependency issue shall not return to safety-sensitive duties until they have met conditions for reinstatement, as recommended by the duly qualified health professional.</p>  <h5>Guidance</h5>  <p>The assessment process should include consideration of the following aspects:</p>
<ul>
<li>organizational and procedural interfaces between internal and external stakeholders with defined roles in the management of substance dependency, such as the duly qualified health professionals, supervisors and oversight personnel, and external third-party providers</li>
<li>reporting to the designated fitness-for-duty program administrator</li>
<li>referral to the licensee&rsquo;s designated substance testing facility</li>
</ul>  <p>In determining the duly qualified health professional&rsquo;s qualifications, licensees should consider the following or equivalent certifying bodies as listed below:</p>
<ul>
<li>Canadian Addiction Counsellors Certification Federation</li>
<li>Canadian Society for Addiction Medicine</li>
<li>Canadian Counselling and Psychotherapy Association</li>
<li>Association of Cooperative Counselling Therapists of Canada</li>
<li>Canadian Professional Counsellors Association</li>
<li>Indigenous Certification Board of Canada</li>
<li>Canadian Council of Professional Certification</li>
</ul>  <p>Alcohol-related disorders or drug abuse and dependence may also be diagnosed through medical or psychological assessments.</p>  <p>Licensees should consider adopting relapse agreements with workers assessed with substance dependence.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="5.6"></div>
<h3 id="sec-5.6">5.6 Investigative and impairment screening tools</h3>  <p>Licensees shall establish and document the accepted use of investigative and impairment screening tools included in their respective fitness-for-duty programs. Use of these tools shall be clearly documented, and training programs shall be provided to support the designated personnel in the proper use of the tools.</p>  <h4>Guidance</h4>  <p>Licensees may consider the adoption of the following investigative and impairment screening tools:</p>
<ul>
<li>fitness-for-duty assessment screening checklist for supervisors</li>
<li>fitness-for-duty self-assessment screening checklist for workers</li>
<li>passive alcohol screening devices</li>
<li>drug detection dogs and devices (for example ion scanners)</li>
<li>physical searches</li>
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
<div id="5.7"></div>
<h3 id="sec-5.7">5.7 Records</h3>  <p>The licensee shall retain:</p>
<ol>
<li>medical, physical and psychological certificates for workers holding safety-sensitive positions</li>
<li>alcohol and drug testing results for workers holding safety-sensitive positions</li>
</ol>
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
<h2 id="sec-a">Appendix A: Assessments by workgroup and circumstance</h2>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="a1"></div>
<h3 id="sec-a1">A.1 Type of assessment by workgroup and circumstance</h3>  <p>Table A.1 provides a summary of the assessments to be conducted by workgroup and circumstance.</p>  <table className="width-100 table">
<tr>
<th>&nbsp;</th>
<th className="text-center" colSpan="12">Assessment type</td>
</tr>
<tr>
<th className="text-center text-center" rowspan="2">Workgroup</th>
<th className="text-center text-center" colSpan="3">Pre-placement</th>
<th className="text-center text-center" colSpan="3">Periodic <br />
(months)</th>
<th className="text-center" colSpan="3">For-cause<br />
reasonable grounds</th>
<th className="text-center text-center" colSpan="3">Return to work (months)</th>
</tr>
<tr>
<th className="text-center">M</th>
<th className="text-center">P</th>
<th className="text-center">OF</th>
<th className="text-center">M</th>
<th className="text-center">P</th>
<th className="text-center">OF</th>
<th className="text-center">M</th>
<th className="text-center">P</th>
<th className="text-center">OF</th>
<th className="text-center">M</th>
<th className="text-center">P</th>
<th className="text-center">OF</th>
</tr>
<tr>
<td className="text-left"><strong>Certified workers</strong></td>
<td className="text-center">Yes</td>
<td className="text-center">Yes</td>
<td className="text-center">&nbsp;</td>
<td className="text-center">TBD</td>
<td className="text-center">&nbsp;</td>
<td className="text-center">&nbsp;</td>
<td className="text-center">Yes</td>
<td className="text-center">Yes</td>
<td className="text-center">&nbsp;</td>
<td className="text-center">&nbsp;</td>
<td className="text-center">&nbsp;</td>
<td className="text-center">&nbsp;</td>
</tr>
<tr>
<td colSpan="13" className="text-left"><strong>Security personnel</strong></td>
</tr>
<tr>
<td className="text-left"><strong>&nbsp;&nbsp;&nbsp;Nuclear security officers (NSOs)</strong></td>
<td className="text-center">Yes</td>
<td className="text-center">Yes</td>
<td className="text-center">Yes</td>
<td className="text-center">24</td>
<td className="text-center">&nbsp;</td>
<td className="text-center">12</td>
<td className="text-center">Yes</td>
<td className="text-center">Yes</td>
<td className="text-center">Yes</td>
<td className="text-center">&nbsp;</td>
<td className="text-center">&nbsp;</td>
<td className="text-center">&nbsp;</td>
</tr>
<tr>
<td className="text-left"><strong>&nbsp;&nbsp;&nbsp;Onsite nuclear response force (NRF)<br />
&nbsp;&nbsp;&nbsp;members</strong></td>
<td className="text-center">Yes</td>
<td className="text-center">Yes</td>
<td className="text-center">Yes</td>
<td className="text-center">24</td>
<td className="text-center">&nbsp;</td>
<td className="text-center">6</td>
<td className="text-center">Yes</td>
<td className="text-center">Yes</td>
<td className="text-center">Yes</td>
<td className="text-center">&gt;6</td>
<td className="text-center">&gt;6</td>
<td className="text-center">&gt;6</td>
</tr>
<tr>
<td className="text-left"><strong>&nbsp;&nbsp;&nbsp;Designated non-NRF</strong></td>
<td className="text-center">Yes</td>
<td className="text-center">Yes</td>
<td className="text-center">&nbsp;</td>
<td className="text-center">48</td>
<td className="text-center">&nbsp;</td>
<td className="text-center">&nbsp;</td>
<td className="text-center">Yes</td>
<td className="text-center">Yes</td>
<td className="text-center">&nbsp;</td>
<td className="text-center">&nbsp;</td>
<td className="text-center">&gt;6</td>
<td className="text-center">&nbsp;</td>
</tr>
<tr>
<td className="text-left"><strong>Applicable minimum staff complement</strong></td>
<td className="text-center">Yes</td>
<td className="text-center">&nbsp;</td>
<td className="text-center">&nbsp;</td>
<td className="text-center">TBD</td>
<td className="text-center">&nbsp;</td>
<td className="text-center">&nbsp;</td>
<td className="text-center">Yes</td>
<td className="text-center">Yes</td>
<td className="text-center">&nbsp;</td>
<td className="text-center">&nbsp;</td>
<td className="text-center">&nbsp;</td>
<td className="text-center">&nbsp;</td>
</tr>
<tr>
<td className="text-left"><strong>&nbsp;&nbsp;&nbsp;ERT / fire brigade</strong></td>
<td className="text-center">Yes</td>
<td className="text-center">&nbsp;</td>
<td className="text-center">Yes</td>
<td className="text-center">12</td>
<td className="text-center">&nbsp;</td>
<td className="text-center">12</td>
<td className="text-center">Yes</td>
<td className="text-center">Yes</td>
<td className="text-center">&nbsp;</td>
<td className="text-center">Yes</td>
<td className="text-center">&nbsp;</td>
<td className="text-center">&nbsp;</td>
</tr>
<tr>
<td className="text-left"><strong>Licensee-identified safety-sensitive positions</td>
<td className="text-center">Yes</td>
<td className="text-center">&nbsp;</td>
<td className="text-center">&nbsp;</td>
<td className="text-center">TBD</td>
<td className="text-center">&nbsp;</td>
<td className="text-center">&nbsp;</td>
<td className="text-center">Yes</td>
<td className="text-center">Yes</td>
<td className="text-center">&nbsp;</td>
<td className="text-center">&nbsp;</td>
<td className="text-center">&nbsp;</td>
<td className="text-center">&nbsp;</td>
</tr>  </table>  <tfoot>M = Medical assessment<br />
P = Psychological assessment<br />
OF = Occupational fitness assessment<br />
TBD = Frequency of the mandatory periodic assessment to be determined by the licensee</tfoot>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="a2"></div>
<h3 id="sec-a2">A.2 Alcohol and drug testing by workgroup and circumstance</h3>  <p>Table A.2 provides a summary of the alcohol and drug testing to be conducted by workgroup and circumstance.</p>  <table className="width-100 table">
<tr>
<th className="text-center text-center"><strong>Workgroup</strong></th>
<th className="text-center text-center"><strong>Pre-placement</strong></th>
<th className="text-center"><strong>For-cause<br />
reasonable grounds</strong></th>
<th className="text-center"><strong>For-cause</strong><br />
<strong>post-incident</strong></th>
<th className="text-center text-center"><strong>Follow-up</strong></th>
<th className="text-center text-center"><strong>Random</strong></th>
</tr>
<tr>
<td><strong>Certified workers</strong></td>
<td className="text-center text-center">YES</td>
<td className="text-center text-center">YES</td>
<td className="text-center text-center">YES</td>
<td className="text-center text-center">YES</td>
<td className="text-center text-center">YES</td>
</tr>
<tr>
<td colSpan="6" className="text-left"><strong>Security personnel</strong></td>
</tr>
<tr>
<td><strong>&nbsp;&nbsp;&nbsp;Nuclear security officers (NSO)</strong></td>
<td className="text-center text-center">YES</td>
<td className="text-center text-center">YES</td>
<td className="text-center text-center">YES</td>
<td className="text-center text-center">YES</td>
<td className="text-center text-center">YES</td>
</tr>
<tr>
<td><strong>&nbsp;&nbsp;&nbsp;Onsite nuclear response force (NRF)<br/>
&nbsp;&nbsp;&nbsp;members</strong></td>
<td className="text-center text-center">YES</td>
<td className="text-center text-center">YES</td>
<td className="text-center text-center">YES</td>
<td className="text-center text-center">YES</td>
<td className="text-center text-center">YES</td>
</tr>
<td><strong>&nbsp;&nbsp;&nbsp;Designated non-NRF</strong></td>
<td className="text-center text-center">YES</td>
<td className="text-center text-center">YES</td>
<td className="text-center text-center">YES</td>
<td className="text-center text-center">YES</td>
<td className="text-center text-center">YES</td>
</tr>
<tr>
<td><strong>Applicable minimum staff complement</strong></td>
<td className="text-center text-center">YES</td>
<td className="text-center text-center">YES</td>
<td className="text-center text-center">YES</td>
<td className="text-center text-center">YES</td>
<td className="text-center text-center">YES</td>
</tr>
<tr>
<td><strong>&nbsp;&nbsp;&nbsp;ERT / Fire brigade</strong></td>
<td className="text-center text-center">YES</td>
<td className="text-center text-center">YES</td>
<td className="text-center text-center">YES</td>
<td className="text-center text-center">YES</td>
<td className="text-center text-center">YES</td>
</tr>
<tr>
<td><strong>Licensee-identified safety-sensitive positions </strong></td>
<td className="text-center text-center">YES</td>
<td className="text-center text-center">YES</td>
<td className="text-center text-center">YES</td>
<td className="text-center text-center">YES</td>
<td className="text-center text-center">YES</td>
</tr>  </table>
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
<h2 id="sec-b">Appendix B: Recommended medical standards for  designated non-nuclear response force personnel</h2>  <p>The following table provides a summary of the recommended medical standards to be assessed during medical assessments conducted for designated non-nuclear response force personnel.</p>  <table className="table table-striped">
<tr>
<td><strong>Distant vision</strong></td>
</tr>
<tr>
<td>Uncorrected distant vision equal or better than 6/60 (20/200) in each eye<br />
Corrected distant vision equal or better than 6/9 (20/30) in the better eye and no worse than 6/12 (20/40) in the other eye</td>
</tr>
<tr>
<td><strong>Near vision</strong></td>
</tr>
<tr>
<td>Near vision correctable to 6/12 (20/40) with both eyes</td>
</tr>
<tr>
<td><strong>Colour vision</strong></td>
</tr>
<tr>
<td>Abnormal colour vision &ndash; safe</td>
</tr>
<tr>
<td><strong>Depth perception</strong></td>
</tr>
<tr>
<td>Stereo acuity of 80 seconds of arc or better</td>
</tr>
<tr>
<td><strong>Peripheral vision</strong></td>
</tr>
<tr>
<td>Each eye 75 degrees laterally from the 0-degree meridian</td>
</tr>
<tr>
<td><strong>Hearing</strong></td>
</tr>
<tr>
<td>Hearing in each ear &le; 40dB at each of 500, 1000, 2000, 3000 Hz and &le; 55dB at 4000 Hz</td>
</tr>
<tr>
<td><strong>Cardiovascular</strong></td>
</tr>
<tr>
<td>Must have no established cardiovascular condition that, in the opinion of the medical practitioner, may compromise the safe and effective performance of all essential tasks and duties</td>
</tr>
<tr>
<td><strong>Respiratory</strong></td>
</tr>
<tr>
<td>Must have no established respiratory condition that, in the opinion of the medical practitioner, may compromise the safe and effective performance of all
essential tasks and duties</td>
</tr>
<tr>
<td><strong>Musculoskeletal</strong></td>
</tr>
<tr>
<td>Must have no established musculoskeletal condition that, in the opinion of the medical practitioner, may compromise the safe and effective performance of all essential tasks and duties</td>
</tr>  </table>
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
<h2 id="sec-c">Appendix C: Nuclear security officer physical fitness test</h2>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="c1"></div>
<h3 id="sec-c1">C.1 Background</h3>  <p>Physiology is the identification of physiological mechanisms underlying physical activity, thereby enabling comprehensive delivery of treatment services concerned with the analysis, improvement, and maintenance of health and fitness. The Canadian Society for Exercise Physiology is a voluntary organization composed of professionals involved in the scientific study of exercise physiology, exercise biochemistry, fitness, and health. The Canadian Society for Exercise Physiology (then known as the Canadian Association of Sport Sciences), was founded at the 1967 Pan American Games, in Winnipeg, Manitoba â€“ the result of four years of cooperative efforts by the Canadian Medical Association and the Canadian Association for Health, Physical Education, Recreation and Dance.</p>   <p>A physical fitness assessment is a snapshot of a person&rsquo;s current physical fitness level. The Canadian Society for Exercise Physiology sets national standards of practice required for validity, accuracy, and reliability in physical fitness assessments. These standards must be met in order for an organization to be designated as an Accredited Fitness Appraisal Centre (AFAC). This designation demonstrates meeting required criteria for direct physiological exercise assessments, thereby ensuring accurate, valid, and reliable data.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="c2"></div>
<h3 id="sec-c2">C.2 Objectives</h3>  <p>This physical fitness test is designed to assess the following:</p>
<ol>
<li>static balance in three planes of motion, proprioception, and flexibility</li>
<li>base aerobic fitness and agility, middle aerobic fitness</li>
<li>core strength, grip strength and force discrimination</li>
</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="c3"></div>
<h3 id="sec-c3">C.3 The test</h3>  <p>This physical fitness test involves a series of stations, as described below. In order to pass the physical fitness test, the individual must obtain a pass mark at each station. The individual must complete each station in the order they appear below. If the individual fails to pass any station, the entire test must be repeated.</p>  <h4>Station 1 &ndash; Search station</h4>  <p>Station 1 is a series of five traffic cones (18-inch pylons) set in line with a 60.96-cm (2-ft) separation between each cone. A symbol (or shape or other identifiable item) measuring about 21 cm (8 in.) is concealed by the bottom of the cone. The individual is given the following instructions:</p>  <p>At the first cone, raise both arms overhead, go up on tiptoes and hold the position for two seconds. Return to your original stance.  Stand at arm&rsquo;s length from cone, lower into a squat position, tip the cone and report the symbol seen. Return the cone to its original position, stand up and return to the start position.</p>  <p>Move to the second cone, stand at arm&rsquo;s length with the cone to your left, and lower your body until the left hand contacts the top of the cone. Tip the cone with one hand and report the symbol seen. Return the cone to its original position, stand up and return to the start position.</p>  <p>Move to the third cone, stand at arm&rsquo;s length with the cone to your left, and lower your body while twisting until the right hand contacts the top of the cone. Tip the cone with one hand and report the symbol seen. Return the cone to its original position, stand up and return to the start position.</p>  <p>Move to the fourth cone, stand at arm&rsquo;s length with the cone to your right, and lower your body while twisting until the left hand contacts the top of the cone. Tip the cone with one hand and report the symbol seen Return the cone to its original position, stand up and return to the start position.  Move to the fifth cone, stand at arm&rsquo;s length with the cone to your right, and lower your body until the right hand contacts the top of the cone. Tip the cone with one hand and report the symbol seen. Return the cone to its original position, stand up and return to the start position.</p>  <p>Return to the first cone wearing a 9-kg (19.8-lb) vest. Perform the above station 1 series again, while wearing the vest.</p>  <p>This vest will be worn for all subsequent stations in the test.</p>  <h4>Station 1 &ndash; Pass mark</h4>  <p>The individual must complete station 1 with a maximum of one fault permitted when not wearing a vest, and a maximum of two faults permitted when wearing a vest. Faults are defined as: losing balance or falling, moving feet after arriving at the cone, knocking over or moving the cone beyond tipping needed to identify the hidden symbol, or erroneously reporting the symbol. This station is not timed.</p>  <h4>Station 2A &ndash; Speed walk station</h4>  <p>Station 2A is a series of eight speed walks conducted around a rectangular perimeter with 27.43 m (90 ft.) sides and 13.72 m (45 ft.) ends, demarcated by perimeter tape circumscribing the perimeter at a 1.22-m (4-ft.) height. The individual is given the following instructions:</p>  <p>At the command "Go", walk clockwise around the circuit at sufficient speed to complete the circuit around the perimeter in less than 51 seconds while under control and without touching the perimeter boundary line. Upon return to the start point, rest for 10 seconds.</p>  <p>This circuit is then repeated seven more times in less than 51 seconds per circuit, with a 10-second rest permitted after each lap. Each alternate lap is to be conducted counter-clockwise.</p>  <h4>Station 2A &ndash; Pass mark</h4>  <p>The individual must complete station 2A in the prescribed time and without any faults. Faults are defined as: tripping, falling or striking the perimeter tape or the tape support at the corners, or not completing the circuit in less than 51 seconds. While no faults are permitted, one restart is permitted immediately after the first lap only if the first lap speed exceeds 51 seconds.</p>  <h4>Station 2B &ndash; Stair climb station</h4>  <p>Station 2B is a series of eight stair climbs and descents on a stairway with a 3.66-m (12-ft) vertical rise of continuous stairs. The individual is given the following instructions:</p>  <p>At the command "Go", climb the stairs using the same size step (one or two stairs at a time) throughout the climb without using the railing until reaching the top. Time for the climb is stopped and time for the rest portion commences. Turn about and immediately descend the stairs under control to the start point.</p>   <p>The stair climb ascent must be completed in less than 7 seconds, and then repeated seven more times in less than 7 seconds per climb, with a 25-second rest after each ascent. This rest starts once reaching the top of the climb, and includes the time required to return to the start point.</p>  <h4>Station 2B &ndash; Pass mark</h4>  <p>The individual must complete station 2B in the prescribed time and without any faults. Faults are defined as: tripping, falling, grabbing the railing during the stair climb, pace change (one stair climb to two stairs or vice versa), or not completing the climb in less than 7 seconds.</p>  <h4>Station 3 &ndash; Lift/carry for control station</h4>  <p>Station 3 involves a series of movements of a 34.07-litre (36-qt) container loaded with an unstable weight load (water) of 12 kg contained freely within the container. The individual stands facing a 1.83 x by 0.91 m (6 x 3 ft.) table, with the waist touching the table edge. The table is circumscribed by a 0.91 m (3 ft.) border outward from the table. The original position of the container is marked on the table with a rectangular border area 2.54 cm (1 in.) larger on each side in comparison to the container.</p>  <p>The individual is given the following instructions:</p>  <p>Lift the container until it is in contact with your chest. Move to the end of the table, keeping the container in contact with your chest. Tilt the container right 30 degrees and return it to the centre balanced position.</p>  <p>Keeping the container in contact with your chest, move to the opposite end of the table. Tilt the container left 30 degrees and return it to the centre balanced position.</p>  <p>Keeping the container in contact with your chest, move to the original start position and place the container back in its original position.</p>  <h4>Station 3 &ndash; Pass mark</h4>  <p>The individual must complete Station 3with a maximum of one fault. Faults are defined as: dropping the container, losing control of the container as evidenced by the need to re grip the container, failure to maintain the container in contact with the chest while walking, stepping out of the station path boundary, or failure to return the container to the target area.</p>  <p>The test for the NSO is complete at this point.</p>
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
<h2 id="sec-d">Appendix D: Alcohol and drug testing thresholds</h2>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="d1"></div>
<h3 id="sec-d1">D.1 Blood alcohol concentration ranges and associated actions</h3>  <p>Table D.1 provides a summary of blood alcohol concentration (BAC) ranges and associated actions to be taken by licensees.</p>  <table className="width-100 table">
<tr>
<th className="text-center text-center"><strong>BAC range</strong></th>
<th className="text-center text-center"><strong>Action</strong></td>
</tr>
<tr>
<td>Below 20 mg/100mL</td>
<td>Negative test &ndash; no action required</td>
</tr>
<tr>
<td>20 to 39 mg/100mL</td>
<td>Action level &ndash; removal of worker from safety-sensitive duties until assessed as fit</td>
</tr>
<tr>
<td>40 mg/100mL or greater</td>
<td>Positive test &ndash; fitness-for-duty policy violation and removal of worker from safety-sensitive duties until assessed as fit by duly qualified health professional</td>
</tr>  </table>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="d2"></div>
<h3 id="sec-d2">D.2 Immunoassay screening</h3>  <p>Table D.2 provides the urine analysis drug  panel and the associated cut-off values to be used for immunoassay screening.</p>  <table className="width-100 table">
<tr>
<th className="text-center text-center"><strong>Drug / Drug Class</strong></th>
<th className="text-center text-center"><strong>Cut-off value (ng/mL)</strong></th>
</tr>
<tr>
<td>Cocaine metabolite (Benzoylecgonine)</td>
<td className="text-center">150</p></td>
</tr>
<tr>
<td>Opiates&nbsp;:</td>
<td className="text-center">&nbsp;</td>
</tr>
<tr>
<td>&nbsp;&nbsp;&nbsp;Morphine, codeine</td>
<td className="text-center">2000</td>
</tr>
<tr>
<td>&nbsp;&nbsp;&nbsp;Hydromorphone, hydrocodone, and oxycodone</td>
<td className="text-center">300</td>
</tr>
<tr>
<td>&nbsp;&nbsp;&nbsp;6-acetylmorphine</td>
<td className="text-center">10</td>
</tr>
<tr>
<td>Amphetamines</td>
<td className="text-center">500</td>
</tr>
<tr>
<td>Cannabinoids</td>
<td className="text-center">50</td>
</tr>
<tr>
<td>Benzodiazepines</td>
<td className="text-center">100</td>
</tr>
<tr>
<td>Methadone metabolite (EDDP)</td>
<td className="text-center">100</td>
</tr>  </table>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="d3"></div>
<h3 id="sec-d3">D.3 GC-MS and LC-MS/MS confirmation</h3>  <p>Table D.3 provides the urine analysis drug panel and the associated cut-off values to be used for GC-MS and LC-MS/MS confirmation.</p>  <table className="width-100 table">
<tr>
<th className="text-center text-center"><strong>Drug/Drug Class</strong></th>
<th className="text-center text-center"><strong>Cut-off value (ng/mL)</strong></th>
</tr>
<tr>
<td >Amphetamines (Amphetamine, methamphetamine, MDMA, MDA, MDEA)</td>
<td className="text-center">250</td>
</tr>
<tr>
<td>Cannabinoids (as 11-nor-&Delta;-9 THC COOH)</td>
<td className="text-center">15</td>
</tr>
<tr>
<td>Cocaine metabolite (benzoylecgonine)</td>
<td className="text-center">100</td>
</tr>
<tr>
<td>Methadone metabolite (EDDP)</td>
<td className="text-center">100</td>
</tr>
<tr>
<td>Opiates:</td>
<td className="text-center">&nbsp;</td>
</tr>
<tr>
<td>&nbsp;&nbsp;&nbsp;Morphine, codeine</td>
<td className="text-center">2000</td>
</tr>
<tr>
<td>&nbsp;&nbsp;&nbsp;Hydromorphone, hydrocodone and oxycodone</td>
<td className="text-center text-center">300</td>
</tr>
<tr>
<td>&nbsp;&nbsp;&nbsp;6-monoacetyl morphine (6-AM, heroin metabolite)</td>
<td className="text-center">10</td>
</tr>
<tr>
<td>Benzodiazepines (LC-MS/MS):</td>
<td className="text-center">&nbsp;</td>
</tr>
<tr>
<td>&nbsp;&nbsp;&nbsp;Oxazepam, temazepam, diazepam, nordiazepam</td>
<td className="text-center">50</td>
</tr>
<tr>
<td>&nbsp;&nbsp;&nbsp;Alprazolam, lorazepam, triazolam, clonazepam</td>
<td className="text-center">50</td>
</tr>
<tr>
<td>&nbsp;&nbsp;&nbsp;Bromazepam, flurazepam</td>
<td className="text-center">50</td>
</tr>  </table>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="d4"></div>
<h3 id="sec-d4">D.4 Recommended dilution protocol cut-off concentrations</h3>  <p>Table D.4 provides the urine analysis drug panel and the associated cut-off values recommended to be used as part of a dilution protocol for immunoassay screening and GC-MS and LC-MS/MS confirmation.</p>  <table className="width-100 table">
<tr>
<th className="text-center text-center"><strong>Drug / Drug Class</strong></th>
<th className="text-center text-center"><strong>Screening cut-off value (ng/mL)</strong></th>
<th className="text-center text-center"><strong>Confirmation cut-off value (ng/mL)</strong></th>
</tr>
<tr>
<td>Amphetamine / methamphetamine</td>
<td className="text-center">100</td>
<td className="text-center">100</td>
</tr>
<tr>
<td>Benzodiazepines</td>
<td className="text-center">50</td>
<td className="text-center">50</td>
</tr>
<tr>
<td>Cannabinoids</td>
<td className="text-center">20</td>
<td className="text-center">6</td>
</tr>
<tr>
<td>Cocaine metabolite</td>
<td className="text-center">15</td>
<td className="text-center">15</td>
</tr>
<tr>
<td>Opiates (codeine and morphine only)</td>
<td className="text-center">120</td>
<td className="text-center">120</td>
</tr>
<tr>
<td>Methadone metabolite</td>
<td className="text-center">50</td>
<td className="text-center">50</td>
</tr>  </table>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="abbr"></div>
<h2 id="sec-abbr">Abbreviations</h2>  <dl className="cnsc-glossary">
<dt>AFAC </dt>
<dd>accredited fitness appraisal centre</dd>
<dt>ANSI </dt>
<dd>American National Standards Institute</dd>
<dt>BAC </dt>
<dd>blood alcohol concentration</dd>
<dt>CSA </dt>
<dd>Canadian Standards Association </dd>
<dt>EAP </dt>
<dd>employee assistance program</dd>
<dt>ERT </dt>
<dd>emergency response team</dd>
<dt>FFD </dt>
<dd>fitness for duty</dd>
<dt>GC-MS </dt>
<dd>gas chromatography-mass spectrometry</dd>
<dt>IAEA </dt>
<dd>International Atomic Energy Agency</dd>
<dt>LC-MS/MS </dt>
<dd>liquid chromatography-tandem mass spectrometry</dd>
<dt>MER </dt>
<dd>medical evaluation report </dd>
<dt>MRO </dt>
<dd>medical review officer</dd>
<dt>NRF </dt>
<dd>nuclear response force</dd>
<dt>NSO </dt>
<dd>nuclear security officer</dd>
<dt>SSP </dt>
<dd>safety-sensitive position</dd>  </dl>
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
<h2 id="sec-glossary">Glossary</h2>  <dl>  <dt><strong>Alcohol Test Committee</strong></dt>  <dd>A scientific committee, under the auspices of the Canadian Society of Forensic Science, that evaluates the scientific, technical and law enforcement aspects of breath alcohol. Its scope includes road-side screening devices, the advent of automated breath test equipment, mobile breath testing and provisions to demand blood samples.</dd>  <dt><strong>approved instruments</strong></dt>  <dd>With respect to breath samples, an instrument of a kind that is designed to receive and make an analysis of a sample of the breath of a person in order to measure the concentration of alcohol in the blood of that person and is approved as suitable for the purposes of section 258 by order of the Attorney General of Canada.</dd>  <dt><strong>breath alcohol technician</strong></dt>  <dd>With respect to breath samples, a person that is qualified to operate an approved instrument. Also known as a qualified technician. See also "approved instrument".</dd>  <dt><strong>broad population</strong></dt>  <dd>Population of workers who have the potential through their work activities to pose a risk to nuclear safety or security.</dd>  <dt><strong>certified</strong></dt>  <dd>Certified by the Commission under paragraph 21(1)(i) of the <em>Nuclear Safety and Control Act</em> or by a designated officer authorized under paragraph 37(2)(b) of the NSCA.</dd>  <dt><strong>conversion training</strong></dt>  <dd>Additional training a breath alcohol technician previously qualified to operate an approved instrument is required to take to become qualified to operate a different approved instrument.</dd>  <dt><strong>designated non-nuclear response force personnel</strong></dt>  <dd>Designated non-nuclear response force personnel are security staff that are authorized under the <em>Public Agents Firearms Regulations</em> to possess or have access to prohibited and restricted firearms, items or devices on behalf of and under the authority of the CNSC for the purpose of carrying out his or her duties. These duties may encompass the storage, transport, handling, maintenance and use of firearms related to NRF functions.</dd>  <dt><strong>fitness for duty (FFD)</strong></dt>  <dd>A condition in which workers are physically, physiologically, and psychologically capable of competently and safely performing their tasks.</dd>  <dt><strong>follow-up testing</strong></dt>  <dd>As part of a follow-up plan to verify an individual&rsquo;s continued abstinence from substance abuse.</dd>   <dt><strong>for-cause testing</strong></dt>  <dd>With respect to fitness for duty, for-cause testing includes post-incident testing and reasonable grounds testing.<br />  See also "post-incident testing" and "reasonable grounds testing".</dd>  <dt><strong>high-power reactor facilities</strong></dt>  <dd>Power production and research reactors greater than 10MWt (also referred to as high-energy reactor facilities)</dd>  <dt><strong>high-security site</strong></dt>  <dd>A nuclear power plant or a nuclear facility where Category I or II nuclear material is processed, used or stored.</dd>  <dt><strong>incident</strong></dt>  <dd>Any unintended event, including operating errors, equipment failures, initiating events, accident precursors, near misses or other mishaps, or unauthorized act, malicious or non-malicious, the consequences or potential consequences of which are not negligible from the point of view of protection or safety. (IAEA Safety Glossary 2007)</dd>  <dt><strong>licensing basis</strong></dt>  <dd>A set of requirements and documents for a regulated facility or activity comprising:
<ol>
<li>the regulatory requirements set out in the applicable laws and regulations</li>
<li>the conditions and safety and control measures described in the facility&rsquo;s or activity&rsquo;s licence and the documents directly referenced in that licence</li>
<li>the safety and control measures described in the licence application and the documents needed to support that licence application</li>
</ol></dd>  <dt><strong>medical review officer (MRO)</strong></dt>  <dd>A person who is a licensed physician and board certified as a medical review officer responsible for receiving and reviewing laboratory results generated by an employer&rsquo;s drug testing program and evaluating medical explanations for certain drug test results.</dd>  <dt><strong>minimum staff complement</strong></dt>   <dd>The minimum number of qualified workers who must be present at all times to ensure the safe operation of the nuclear facility and to ensure adequate emergency response capability.</dd>   <dt><strong>nuclear security officer (NSO)</strong></dt>  <dd>A person whose function is to provide security at a high-security site and to whom an authorization referred to in subsection 18(2) of the <em>Nuclear Security Regulations</em> has been issued.</dd>  <dt><strong>onsite nuclear response force (NRF)</strong></dt>  <dd>
<ol className="list-lower-alpha">
<li>a team of nuclear security officers whose members are
<ol className="list-lower-roman">
<li>trained in the use of firearms, authorized to carry firearms in Canada and qualified to use them, and</li>
<li>permanently located at a high-security site or</li>
</ol></li>
<li>a local, provincial or federal police service, a Canadian Forces unit or any other force
<ol className="list-lower-roman">
<li>under contract to a licensee</li>
<li>whose members are trained in the use of firearms, authorized to carry firearms in Canada and qualified to use them, and</li>
<li>whose members are permanently located at a high-security site</li>
</ol></li>
</ol></dd>  <dt><strong>post-incident testing</strong></dt>  <dd>An element of for-cause testing, where an alcohol or drug test is administered to a worker designated in a safety-sensitive position as soon as practical after a significant incident, where an act or omission by the worker may have caused or contributed to the event.  See also "incident" and "safety significance".</dd>  <dt><strong>pre-placement testing</strong></dt>  <dd>An assessment of fitness for duty of an applicant to a safety-sensitive position before employment begins or a fitness-for-duty assessment conducted before the transfer of an incumbent worker into a safety-sensitive position.</dd>  <dt><strong>qualification</strong></dt>  <dd>A recognized level of mastery of task performance in a work-related field, which is normally acquired through successful completion of training. Qualification involves mastery of all the knowledge, skills and safety-related attributes required for successful task performance on the job.</dd>  <dt><strong>random testing</strong></dt>  <dd>A statistically random and unannounced basis for selecting which workers designated in safety-sensitive positions will be subject to alcohol and drug testing, so that each worker has an equal probability of being selected and tested.</dd>  <dt><strong>reasonable grounds testing</strong></dt>  <dd>An element of for-cause testing, where workers in safety-sensitive positions are required to submit to testing when there is reasonable cause to believe, through observed behaviour, physical condition or after receiving credible information, that the individual is unfit to perform their duties, due to the adverse effects of alcohol or drug use.</dd>  <dt><strong>safety-sensitive position</strong></dt>  <dd><p>A position that has a role in the operation of the high-security site, where impaired performance could result in a significant incident affecting the environment, the public, the health and safety of workers and others at site, or the safety and security of the facility. This includes all workers who are regularly required to rotate through or regularly relieve in safety-sensitive positions.</p>
<p>Supervisors and managers who directly supervise working-level positions, or who may perform the same duties or exercise the same responsibilities as safety-sensitive positions, are deemed to hold safety-sensitive positions.</p></dd>  <dt><strong>safety significance</strong></dt>   <dd>The significance of a situation, event or issue with respect to the impact on meeting the nuclear safety objectives as defined by the International Atomic Energy Agency in document SF1, Fundamental Safety Principles. In general, a situation, event or issue has safety significance if it denotes a deviation from the safety case accepted in the licence, in a direction detrimental to safety, such as but not limited to:
<ul>
<li>reducing margins to (or exceeding) the accepted limits</li>
<li>increasing risk to the health, safety and security of persons and the environment</li>
<li>impairments (various degrees) of the special safety systems or of the safety functions for accident mitigation</li>
<li>reduction in defence in depth</li>
<li>events causing radioactive releases and spills of hazardous substances, injuries to workers or the public, etc.</li>
</ul></dd>  <dt><strong>worker</strong></dt>  <dd>A person who performs work that is referred to in a licence, including someone directly employed by a licensee, contractor or subcontractor.</dd>  </dl>
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
<h2 id="sec-ref">References</h2>  <ol>
<li>International Atomic Energy Agency (IAEA), <em>Legal and Governmental Infrastructure for Nuclear, Radiation, Radio-active Waste and Transport Safety</em>, GS-R-1, Vienna, 2000. Available from: <a href="http://www-pub.iaea.org/books/IAEABooks/5861/Legal-and-Governmental-Infrastructure-for-Nuclear-Radiation-Radioactive-Waste-and-Transport-Safety-Safety-Requirements">http://www-pub.iaea.org/books/IAEABooks/5861/Legal-and-Governmental-Infrastructure-for-Nuclear-Radiation-Radioactive-Waste-and-Transport-Safety-Safety-Requirements</a></li>
<li>IAEA, <em>Safety of Nuclear Power Plants: Operation, Requirements</em>, NS-R-2, Vienna, 2000. Available from: <a href="http://www-pub.iaea.org/books/IAEABooks/5858/Safety-of-Nuclear-Power-Plants-Operation-Safety-Requirements">http://www-pub.iaea.org/books/IAEABooks/5858/Safety-of-Nuclear-Power-Plants-Operation-Safety-Requirements</a></li>
<li>IAEA, <em>Regulatory Inspection of Nuclear Facilities and Enforcement by the Regulatory Body</em>, GS-G-1.3, Vienna, 2002. Available from: <a href="http://www-pub.iaea.org/books/IAEABooks/6417/Regulatory-Inspection-of-Nuclear-Facilities-and-Enforcement-by-the-Regulatory-Body-Safety-Guide">http://www-pub.iaea.org/books/IAEABooks/6417/Regulatory-Inspection-of-Nuclear-Facilities-and-Enforcement-by-the-Regulatory-Body-Safety-Guide</a></li>
<li>IAEA, <em>Review and Assessment of Nuclear Facilities by the Regulatory Body</em>, GS-G-1.2, Vienna, 2002 Available from: <a href="http://www-pub.iaea.org/books/IAEABooks/6416/Review-and-Assessment-of-Nuclear-Facilities-by-the-Regulatory-Body-Safety-Guide">http://www-pub.iaea.org/books/IAEABooks/6416/Review-and-Assessment-of-Nuclear-Facilities-by-the-Regulatory-Body-Safety-Guide</a></li>
<li>IAEA, <em>The Operating Organization for Nuclear Power Plants</em>, NS-G-2.4, Vienna, 2001. Available from: <a href="http://www-pub.iaea.org/MTCD/publications/PDF/Pub1115_scr.pdf">http://www-pub.iaea.org/MTCD/publications/PDF/Pub1115_scr.pdf</a></li>
<li>IAEA, <em>Recruitment, Qualification and Training of Personnel for Nuclear Power Plants</em>, NS-G-2.8, Vienna, 2002. Available from: <a href="http://www-pub.iaea.org/books/IAEABooks/6620/Recruitment-Qualification-and-Training-of-Personnel-for-Nuclear-Power-Plants-Safety-Guide">http://www-pub.iaea.org/books/IAEABooks/6620/Recruitment-Qualification-and-Training-of-Personnel-for-Nuclear-Power-Plants-Safety-Guide</a></li>
<li>Canadian Human Rights Commission, <em>Bona Fide Occupational Requirements and Bona Fide Justifications under the Canadian Human Rights Act</em>, Ottawa, 2007.</li>
<li>Canadian Nuclear Safety Commission (CNSC), RD-204, <em>Certification of Persons Working at Nuclear Power Plant</em>, Ottawa, 2008.</li>
<li>American Nuclear Society, ANSI/ANS-3.4, <em>Medical Certification and Monitoring of Personnel Requiring Operator Licenses for Nuclear Power Plants</em>, La Grange Park, Illinois.</li>
<li>CNSC, RD-2.12.1, <em>Nuclear Security Response Force</em>, Ottawa, 2013 (Confidential document)</li>
<li>A. Trottier and J. Brown, <em>Police Health: Physician&rsquo;s Guide for the Assessment of Police Officers</em>, Canada Communication Group, 1994. Ottawa.</li>
<li>Ontario Association of Chiefs of Police, <em>Constable Selection System: Guidelines for Examining Physicians &ndash; Medical Evaluation of Police Constable Applicants</em>, Ontario Association of Chiefs of Police, 2006. Toronto.</li>
<li>Ontario Association of Chiefs of Police, <em>Constable Selection System: Guidelines for Examining Ophthalmologists/Optometrists &ndash; Vision Assessment of Police Constable Applicants</em>, Ontario Association of Chiefs of Police, 2006. Toronto.</li>
<li>Ontario Association of Chiefs of Police, <em>Constable Selection System: Hearing Performance Standard</em>, Ontario Association of Chiefs of Police, 2006. Toronto.</li>
<li>National Fire Protection Association. 1582, <em>Standard on Comprehensive Occupational Medical Program for Fire Departments</em>, Quincy, Massachusetts, 2013. </li>
<li>Canadian Standards Association, N293, <em>Fire Protection for Nuclear Power Plants</em>, Mississauga, Ontario.</li>
<li>R. Davidson, MD. <em>Medical Fitness Standards for Non-Nuclear Response Force Program Support Personnel with Firearms and Ammunition Related Duties. A Report to the Canadian Nuclear Safety Commission</em>, Ottawa, 2014.</li>
<li>Justice Department. Canadian Criminal Code. <em>Approved Breath Analysis Instruments Order</em> (SI/85-201). Available from: <a href="http://laws-lois.justice.gc.ca/eng/regulations/SI-85-201/page-1.html">http://laws-lois.justice.gc.ca/eng/regulations/SI-85-201/page-1.html</a></li>
<li>J. Wigmore. <em>The Forensic Toxicology of Alcohol and Best Practices for Alcohol Testing in the Workplace: A Report to the Canadian Nuclear Safety Commission</em>, Ottawa, 2014.</li>
<li>A. Fraser, PhD. <em>Urine Drug Testing Practice: Report to the Canadian Nuclear Safety Commission</em>, Ottawa, 2014.</li>  </ol>
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
<h2 id="sec-add">Additional Information</h2>  <ol>
<li>International Atomic Energy Agency, Recruitment, <em>Qualification and Training of Personnel for Nuclear Power Plants: Safety Guide</em>, Safety standards series, NS-G-2.8, December 2002. Vienna.</li>
<li>Canadian Nuclear Safety Commission. INFO-0831, <em>Recent Alcohol and Drug Workplace Policies in Canada: Considerations for the Nuclear Industry</em>, 2012.</li>
<li>United States Nuclear Regulatory Commission, <em>Best Practices for Behavioral Observation Programs at Operating Power Reactors and Power Reactor Construction Sites</em> (NUREG-7183). Washington, D.C., 2014.</li>
<li>United States Department of Transportation, <em>Prescription and Over-the Counter Medications Tool Kit</em>, Washington, D.C., 2011.</li>  </ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="clear"></div>

                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }