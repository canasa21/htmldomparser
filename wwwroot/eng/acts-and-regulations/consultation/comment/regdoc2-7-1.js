import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "en",
                pageTitle: "REGDOC-2.7.1, Radiation Protection", 
                dateModified: "2019-02-19",
                langToggleUrl: "/fra/acts-and-regulations/consultation/comment/regdoc2-7-1"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<h2>Preface</h2>  <p>This regulatory document is part of the CNSC&#39;s radiation protection series of regulatory documents, which also covers dosimetry as well as radiation protection guidelines for the safe handling of decedents. The full list of regulatory document series is included at the end of this document and can also be found on the CNSC&#39;s website.</p>  <p>Regulatory document REGDOC-2.7.1, <em>Radiation Protection</em>, provides requirements and guidance on the topics of radiation protection programs, the principles of worker dose control and the principles of radiological hazard control to ensure the protection of workers and members of the public.</p>   <p>For information on the implementation of regulatory documents in the licensing basis, and on the graded approach, see REGDOC-3.5.3, Regulatory Fundamentals.</p>
<div className="module ">  <p>The words "shall" and "must" are used to express requirements to be satisfied by the licensee or licence applicant. "Should" is used to express guidance or that which is advised. "May" is used to express an option or that which is advised or permissible within the limits of this regulatory document. "Can" is used to express possibility or capability.</p>  <p>Nothing contained in this document is to be construed as relieving any licensee from any other pertinent requirements. It is the licensee&#39;s responsibility to identify and comply with all applicable regulations and licence conditions.</p>  </div>  <br /><div className="module-table-contents">  <h2>Table of Contents</h2>
<ul>
<li><a href="#sec1">1. Introduction</a>
<ul>
<li><a href="#sec1-1">1.1 Purpose</a></li>
<li><a href="#sec1-2">1.2 Scope</a></li>
</ul></li>
<li><a href="#sec2">2. Interpretation and Application of the <em>Radiation Protection Regulations</em></a></li>
<li><a href="#sec3">3. Administration of Nuclear Substance for Medical Purposes</a></li>
<li><a href="#sec4">4. Radiation Protection Program</a>
<ul>
<li><a href="#sec4-1">4.1 Application of ALARA</a></li>
<li><a href="#sec4-2">4.2 Management control over work practices</a></li>
<li><a href="#sec4-3">4.3 Personnel qualification and training</a></li>
<li><a href="#sec4-4">4.4 Control of occupational and public exposure to radiation</a></li>
<li><a href="#sec4-5">4.5 Planning for unusual situations</a></li>
<li><a href="#sec4-6">4.6 Nuclear substances released as a result of a licensed activity</a></li>
</ul></li>
<li><a href="#sec5">5. Ascertaining and Recording of Doses</a>
<ul>
<li><a href="#sec5-1">5.1 Methods to measure exposure and doses directly</a></li>
<li><a href="#sec5-2">5.2 Methods to estimate exposures and doses</a></li>
<li><a href="#sec5-3">5.3 Direct measurement versus the estimating of exposures and doses</a></li>
<li><a href="#sec5-4">5.4 Dosimetry</a></li>
</ul></li>
<li><a href="#sec6">6. Action Levels</a>
<ul>
<li><a href="#sec6-1">6.1 Developing, using and revising action levels</a></li>
<li><a href="#sec6-2">6.2 Monitoring</a></li>
<li><a href="#sec6-3">6.3 Responding when an action level is reached</a></li>
</ul></li>
<li><a href="#sec7">7. Provision of Information to Nuclear Energy Workers</a></li>
<li><a href="#sec8">8. Requirement to Use a Licensed Dosimetry Service</a></li>
<li><a href="#sec9">9. Collection of Personal Information</a></li>
<li><a href="#sec10">10. Obligations of Nuclear Energy Workers</a></li>
<li><a href="#sec11">11. Pregnant and Breastfeeding Nuclear Energy Workers</a></li>
<li><a href="#sec12">12. Interpretation of Radiation Dose Limits</a></li>
<li><a href="#sec13">13. Effective Dose Limits</a></li>
<li><a href="#sec14">14. Equivalent Dose Limits</a></li>
<li><a href="#sec15">15. Emergencies</a></li>
<li><a href="#sec16">16. Exceedance of a Regulatory Dose Limit</a></li>
<li><a href="#sec17">17. Authorization of Return to Work</a></li>
<li><a href="#sec18">18. Application for a Licence to Operate a Dosimetry Service</a></li>
<li><a href="#sec19">19. Obligations of Licensees</a></li>
<li><a href="#sec20">20. Labelling of Containers and Devices</a></li>
<li><a href="#sec21">21. Posting of Signs at Boundaries and Points of Access</a></li>
<li><a href="#sec22">22. Use of the Radiation Warning Symbol</a></li>
<li><a href="#sec23">23. Frivolous Posting</a></li>
<li><a href="#sec24">24. Records To Be Kept by Licensees</a></li>
<li><a href="#sec25">25. Radiation Detection and Measurement Instrumentation</a>
<ul>
<li><a href="#sec25-1">25.1 Calibration of radiation survey meters and direct reading dosimeters</a></li>
<li><a href="#sec25-2">25.2 Performance of contamination monitoring equipment</a></li>
</ul></li>
<li><a href="#AppA">Appendix A: Guidance on the Provision of Radiation Protection Training by Work Group</a>
<ul>
<li><a href="#A.1">A.1 Management</a></li>
<li><a href="#A.2">A.2 Radiation protection personnel</a></li>
<li><a href="#A.3">A.3 Nuclear energy workers</a></li>
<li><a href="#A.4">A.4 General employees</a></li>
<li><a href="#A.5">A.5 Contractor personnel</a></li>
<li><a href="#A.6">A.6 Visitors</a></li>
<li><a href="#A.7">A.7 Emergency response personnel</a></li>
</ul></li>
<li><a href="#AppB">Appendix B: Guidance on Workplace Monitoring Programs</a>
<ul>
<li><a href="#B.1">B.1 Contamination control program</a></li>
<li><a href="#B.2">B.2 Radiation dose rate monitoring and control</a></li>
<li><a href="#B.3">B.3 Airborne radioactivity monitoring and control</a></li>
</ul></li>
<li><a href="#AppC">Appendix C: Monitoring for Radioactive Contamination</a>
<ul>
<li><a href="#C.1">C.1 Method of measurement</a></li>
<li><a href="#C.2">C.2 Purpose of confirmatory contamination monitoring</a></li>
<li><a href="#C.3">C.3 Instrument checks</a></li>
<li><a href="#C.4">C.4 Frequency of confirmatory contamination monitoring</a></li>
<li><a href="#C.5">C.5 Decontamination</a></li>
<li><a href="#C.6">C.6 Monitoring records</a></li>
<li><a href="#C.7">C.7 Direct measurement of contamination using a portable meter</a></li>
<li><a href="#C.8">C.8 Indirect measurement of contamination with wipes</a></li>
<li><a href="#C.9">C.9 Detector efficiency</a></li>
<li><a href="#C.10">C.10 Relating measurement readings to contamination criteria</a></li>
<li><a href="#C.11">C.11 Minimum detectable activity</a></li>
<li><a href="#C.12">C.12 Reporting results with uncertainty</a></li>
<li><a href="#C.13">C.13 Instrument sensitivity</a></li>
<li><a href="#C.14">C.14 Selection of contamination monitoring instruments</a></li>
</ul></li>
<li><a href="#AppD">Appendix D: Calibration of Radiation Survey Meters and Direct Reading Dosimeters</a>
<ul>
<li><a href="#D.1">D.1 Calibration procedure documentation</a></li>
<li><a href="#D.2">D.2 Radiation survey meter pre-calibration check</a></li>
<li><a href="#D.3">D.3 Physical and environmental expectations for jigs and radiation survey meters</a></li>
<li><a href="#D.4">D.4 Expectations for calibration sources</a></li>
<li><a href="#D.5">D.5 Expectations for radiation survey meter calibration</a></li>
<li><a href="#D.6">D.6 Expectations for direct reading dosimeter calibration</a></li>
<li><a href="#D.7">D.7 Expectations for record completion</a></li>
<li><a href="#D.8">D.8 Documentation of calibration</a></li>
<li><a href="#D.9">D.9 Maintenance of records</a></li>
</ul></li>
<li><a href="#glossary">Glossary</a></li>
<li><a href="#ref">References</a></li>
</ul>  </div>  <br />
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="1"></div>
<div className="module mrgn-bttm-lg ">  <p>REGDOC-2.7.1, aligns with the proposed amendments to the <a href="http://laws.justice.gc.ca/eng/regulations/sor-2000-203/page-1.html"><em>Radiation Protection Regulations</em></a> (the Regulations, RPR) which are outlined in the <a href="/eng/acts-and-regulations/consultation/completed/dis-13-01">What We Heard Report</a> for discussion paper <a href="/eng/acts-and-regulations/consultation/comment/d-13-01">DIS-13-01, <em>Proposals to Amend the Radiation Protection Regulations</em></a>.</p>   <p>Public consultation on the proposed amendments will take place via publication in the <em>Canada Gazette</em>, Part I. The CNSC will notify stakeholders of the opportunity to provide comments via its website and email. This regulatory document will be revised as necessary as a result of the consultation on the proposed amendments to the RPR and the comments received on the document.</p>  </div>
<h2 id="sec1">1. Introduction</h2>  <p>Draft regulatory document REGDOC-2.7.1, <em>Radiation Protection</em>, along with volumes I and II of draft REGDOC-2.7.2, <em>Dosimetry</em><sup id="fnb1-ref"><a className="fn-lnk" href="#fnb1"><span className="wb-inv">Footnote </span>1</a></sup>&nbsp;<sup id="fnb2-ref"><a className="fn-lnk" href="#fnb2"><span className="wb-inv">Footnote </span>2</a></sup> , supersedes the following previously published regulatory documents on topics related to radiation protection:</p>
<ul>
<li>G-121, rev. 1, <em>Radiation Safety in Educational, Medical and Research Institutions</em></li>
<li>G-129, <em>Keeping Radiation Exposures and Doses "As Low as Reasonably Achievable (ALARA)"</em></li>
<li>G-91, <em>Ascertaining and Recording Radiation Doses to Individuals</em></li>
<li>GD-150, <em>Designing and Implementing a Bioassay Program</em></li>
<li>G-228, <em>Developing and Using Action Levels</em></li>
<li>G-313, <em>Radiation Safety Training Programs for Workers Involved in Licensed Activities with Nuclear Substances and Radiation Devices, and with Class II Nuclear Facilities and Prescribed Equipment</em></li>
</ul>  <p>This regulatory document provides new guidance on the following topics:</p>
<ul>
<li>radiation protection programs</li>
<li>principles of worker dose control</li>
<li>principles of radiological hazard control</li>
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
<div id="1.1"></div>
<h3 id="sec1-1">1.1 Purpose</h3>  <p>This regulatory document provides requirements and guidance for the application of the Regulations. This regulatory document will help ensure that licensees implement adequate measures for radiation protection in accordance with the <a href="http://laws-lois.justice.gc.ca/eng/acts/N-28.3/"><em>Nuclear Safety and Control Act</em></a> (NSCA, the Act) and the Regulations. This regulatory document is intended for use by CNSC licensees and applicants.</p>
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
<h3 id="sec1-2">1.2 Scope</h3>  <p>This regulatory document provides guidance on the application and implementation of the Regulations to ensure the protection of workers and members of the public. The scope of this regulatory document does not include guidance as it relates to environmental protection, which is provided in CNSC regulatory document REGDOC-2.9.1, <em>Environmental Principles, Assessments and Protection Measures</em>, version 1.1[3].</p>  <p>Requirements and guidance on ascertaining and recording doses is included in this regulatory document. However, CNSC regulatory document REGDOC-2.7.2, <em>Dosimetry</em>, volumes I and II (draft), should be referred to for more information on ascertaining occupational exposures (Volume I) and technical and quality management system requirements for dosimetry services (Volume II).</p>
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
<h2 id="sec2">2. Interpretation and Application of the <em>Radiation Protection Regulations</em></h2>  <p>Section 1 of the Regulations provides the definitions that apply to the Regulations, while section 2 states the applicability of the Regulations.</p>  <p>The NSCA and the regulations made under the NSCA apply to the development, production and use of nuclear energy and the production, possession and use of nuclear substances, prescribed equipment and prescribed information in Canada. While the Regulations generally apply to all licensees for the purposes of the NSCA, there are specific exceptions. The Regulations do not apply to a licensee in respect of a dose of radiation received by or committed to a person:</p>
<ul>
<li>in the course of a person&rsquo;s examination, diagnosis or treatment by a medical practitioner</li>
<li>as a result of a person&rsquo;s voluntarily participation in a biomedical research study</li>
<li>while a person is acting as caregiver</li>
</ul><p>A caregiver is a person who willingly and voluntarily &ndash; and not as an occupation &ndash; helps in the support and comfort of a patient who has been administered a nuclear substance for therapeutic purposes. A caregiver could include a family member of a patient, other than young children and infants, directly involved in the care of the patient.</p>  <p>Although the requirements of the Regulations would not apply to licensees in respect of a dose received by a caregiver, the CNSC recommends that doses to caregivers be kept as low as reasonably achievable (ALARA). The International Commission on Radiological Protection&rsquo;s (ICRP) Publication 103, <a href="http://www.icrp.org/publication.asp?id=ICRP%20Publication%20103"><em>The 2007 Recommendations of the International Commission on Radiological Protection</em></a> [4], recommends that doses to caregivers of patients treated with radionuclides be kept ALARA and below 5 mSv per episode (i.e., for the duration of a given release after therapy).</p>
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
<h2 id="sec3">3. Administration of Nuclear Substance for Medical Purposes</h2>  <p>Section 3 of the Regulations specifies the obligations of licensees when a nuclear substance is administered to a person for therapeutic purposes. Licensees are required to inform the person of methods to reduce radiation exposure to others that could occur as a result of their treatment, including anyone providing that person with care and assistance.</p>  <p>For information on providing instructions to patients, see CNSC regulatory documents REGDOC-1.6.1, <em>Licence Application Guide: Nuclear Substances and Radiation Devices</em> [5], and REGDOC-1.4.1, <em>Licence Application Guide: Class II Nuclear Facilities and Prescribed Equipment</em> (draft)<sup id="fnb3-ref"><a className="fn-lnk" href="#fnb3"><span className="wb-inv">Footnote </span>3</a></sup>  [6].</p>
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
<h2 id="sec4">4. Radiation Protection Program</h2>  <p>Section 4 of the Regulations requires every licensee to implement a radiation protection program that meets the regulatory requirements and ensures that doses to persons are ALARA, taking into account social and economic factors. Licensees must observe this requirement by implementing the following: management control over work practices, personnel qualification and training, control of occupational and public exposure to radiation, and planning for unusual situations.</p>  <p>As part of the radiation protection program, licensees must also ascertain the quantity and concentration of any nuclear substance released to the environment as a result of the licensed activity by direct measurement as a result of monitoring. If the time and resources required for direct measurement as a result of monitoring outweigh the usefulness of ascertaining the quantity and concentration using that method, then quantity and concentration may be estimated. This requirement is also considered as part of an environmental protection program; additional information on these requirements is provided in section 4.6 of this regulatory document, and in CNSC regulatory document REGDOC-2.9.1, <em>Environmental Principles, Assessments and Protection Measures</em>, version 1.1 [3].</p>  <h3>Program development and implementation</h3>  <p>An effective radiation protection program includes a policy, strategy, and method for radiation protection and the achievement of ALARA. Implementation of the ALARA principle should be integrated into all aspects of the radiation protection program, including measures to prevent or reduce potential exposures and to mitigate the consequences of accidents. The application of ALARA is discussed in further detail in subsection 4.1 of this regulatory document.</p>  <p>The radiation protection program should be developed following the licensees&rsquo; management system principles. There should be a process guiding regular review of the radiation protection program and procedures to ensure that the program remains current and has incorporated best practices. The documented review should include the outcomes and follow-up, such as updating procedures, equipment and facilities where improvements are warranted.</p>  <p>The effectiveness of the radiation protection program&rsquo;s implementation should be evaluated at regular intervals established by the licensee, and performance goals and objectives should be used. Monitoring of performance against established goals and objectives should be done using performance indicators or metrics that are easily gathered as part of the program&rsquo;s outputs. Examples of indicators used to monitor radiation protection program performance include:</p>
<ul>
<li>individual and collective doses to workers and the public</li>
<li>exceedances of radiation dose action levels</li>
<li>surface and personnel contamination events</li>
<li>performance of portable and fixed radiological survey instruments in terms of calibration and source-check failures</li>
</ul>  <p>Additionally, performance targets may be set to monitor the effectiveness of ALARA measures, and additional information on this topic may be found in subsection 4.1.5.</p>  <p>The basic structure of a radiation protection program should include the policies and procedures for key elements of the radiation protection framework, including:</p>
<ul>
<li>application of the ALARA principle (see subsection 4.1)</li>
<li>management control over work practices (see subsection 4.2)</li>
<li>personnel qualification and training (see subsection 4.3)</li>
<li>control of occupational and public exposure to radiation (see subsection 4.4)</li>
<li>planning for unusual situations (see subsection 4.5)</li>
<li>ascertaining the quantity and concentration of any nuclear substance released as a result of the licensed activity (see subsection 4.6)</li>
</ul>  <p>The graded approach should be applied in the design and complexity of the radiation protection program, commensurate with the radiological hazards / radiological risks associated with the licensed activities. Additionally, specific requirements for radiation protection programs are found in the following CNSC licence application guides and should be consulted by applicants and licensees as appropriate:</p>
<ul>
<li>RD/GD-369, <em>Licence Application Guide: Licence to Construct a Nuclear Power Plant</em> [7]</li>
<li>REGDOC-1.1.3, <em>Licence Application Guide: Licence to Operate a Nuclear Power Plant</em> [8]</li>
<li>REGDOC-1.4.1, <em>Licence Application Guide: Class II Nuclear Facilities and Prescribed Equipment</em> (draft) [6]</li>
<li>REGDOC-1.6.1, <em>Licence Application Guide: Nuclear Substances and Radiation Devices</em>, Version 2  [5]</li>
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
<div id="4.1"></div>
<h3 id="sec4-1">4.1 Application of ALARA</h3>  <p>Paragraph 4(a) of the Regulations requires licensees to implement measures to keep the effective dose and equivalent dose received by and committed to persons ALARA, taking into account social and economic factors. It is insufficient for a licensee to just respect the appropriate dose limits; efforts must be made to further minimize doses whenever it is possible and reasonable to do so. Management and workers are expected to be committed to the principle of maintaining doses ALARA and to take appropriate measures to reduce doses where practical.</p>  <p>From a practical viewpoint, the ALARA principle calls for an approach that:</p>
<ul>
<li>considers all possible actions involving the nuclear substance, radiation device and/or prescribed equipment, and the way workers operate with or near the nuclear substance, radiation device and/or prescribed equipment</li>
<li>implies a "management by objective" process with the following sequence: planning, setting objectives, monitoring, measuring performance, evaluating and analyzing performance to define improvement initiatives and/or corrective actions, and setting new objectives</li>
<li>should be adapted to take into account any significant change or evolution in the state of techniques and technology, the resources available, and the prevailing social context</li>
<li>requires ownership and encourages accountability and engagement, such that all parties adopt a responsible attitude towards the process</li>
<li>encourages creative thinking and organized efforts to identify opportunities for improving and learning from operating experience</li>
</ul>
<h4>4.1.1	Commitment to ALARA</h4>  <p>A policy committing to the ALARA principle should be adopted by licensees as evidence of compliance with paragraph 4(a) of the Regulations.</p>  <p>It is essential that all levels of management within a licensee&rsquo;s organization &ndash; in particular at the senior level &ndash; commit to a policy of safety and sound radiation protection practices in order to keep all doses ALARA. This commitment should be made through written policy statements from the highest level of management, and through clear and demonstrable support (e.g., management leadership) for those persons with direct responsibility for radiation protection in the workplace.</p>  <p>Licensees should develop a process by which they will implement the ALARA policy commitment. In some instances, the application of sound radiation protection principles by well-trained employees will be all that is required to fulfill the policy statement in maintaining doses ALARA.</p>  <p>To translate the policy commitment into effective action, licensees should identify appropriate organizational arrangements and assign clear responsibilities and authorities to put these actions into effect. Licensees should ensure that mechanisms are in place to encourage the involvement of all persons within the organization in the development of methods to keep doses ALARA, and that they have the opportunity to provide feedback on the effectiveness of radiation protection measures.</p>  <p>Radiation protection is part of the safety culture of a licensee&rsquo;s organization. A licensee&rsquo;s management has a role in fostering a safety culture in which everyone in the organization recognizes the importance of optimizing doses from exposure to radiation. Requirements and guidance for fostering and assessing safety culture are provided in CNSC regulatory document REGDOC-2.1.2, <em>Safety Culture</em> [9]</p>
<h4>4.1.2	Allocation of resources</h4>  <p>As part of its policy commitment to ALARA, licensees can contribute to the control of doses to persons by providing appropriate resources, both financial and human.</p>  <p>The provision of appropriate resources from a financial perspective relate to adequate equipment and facilities to support radiation protection, and financial means to implement ALARA initiatives. Economic factors are considered as part of the ALARA process and are discussed in more detail in subsection 4.1.4. The provision of human resources by licensees to support the application of ALARA may relate to staffing of supporting roles, such as oversight of radiation protection and ALARA (which is discussed in more detail in subsection 4.2) and training. The allocation of appropriate human resources by licensees should also consider staff having sufficient time to dedicate to the resources of the program. For this reason, care should be taken when assigning more than one role to an individual who has responsibilities for radiation protection and the application of ALARA. For some licensees, an integrated health and safety approach towards the application of ALARA (i.e., one in which the resources allocated to reduce radiological and non-radiological risks are considered together) would be advantageous. This approach prevents introducing dose reduction at the expense of controlling conventional risks that may have greater impact on health and safety.</p>  <p>The best option for minimizing doses is always specific to the exposure situation and takes into account the best level of protection that can be achieved under the prevailing circumstances. The best option is usually a result of an evaluation (discussed further in subsection 4.1.3), which considers the detriment from the exposure against the resources available for enhancing the protection of individuals. Thus, the best option is not necessarily the one with the lowest dose. For example, in the case where doses are already at very low levels, the best option may be to put available resources towards enhancing other health and safety aspects for workers and the workplace, rather than towards additional dose reduction efforts. Therefore, while the dose to some workers or work groups may be higher than the licensee&rsquo;s average dose, the dose may already be considered ALARA, making further dose reduction efforts impractical for the given circumstance. Dose reduction efforts should not be directed solely at workers with the highest dose. Practical means to reduce dose may be found for other workers whose doses are not the highest.</p>  <p>During their initial analysis, if the licensee can demonstrate that:</p>
<ul>
<li>individual occupational doses are unlikely to exceed 1 mSv per year, and</li>
<li>doses to individual members of the public are unlikely to exceed 50 &micro;Sv per year,</li>
</ul>  <p>the CNSC may consider that an ALARA assessment is not required. This would minimize the commitment of resources that are likely to have a limited return in safety improvements.</p>
<h4>4.1.3	Process for the application of ALARA</h4>  <p>The application of the ALARA principle needs to be considered at all stages &ndash; from design of facilities, processes, structures, systems and components, through to operation, decommissioning and waste management. The application of ALARA should be implemented by licensees through an ongoing, cyclical process (i.e., the optimization process or the ALARA process) that involves evaluation of the exposure situation to identify the need for action (framing of the process); identification of the possible options to keep the exposure ALARA; selection of the best option under the prevailing circumstances; implementation of the selected option through an effective optimization program; and regular review of the exposure situation to evaluate if the prevailing circumstances call for the implementation of corrective actions.</p>  <p>The judgment of reasonableness is inherent in the ALARA process. Understanding, good practice and feasibility help in judging the reasonableness of an action:</p>
<ul>
<li>Understanding is based on experience, knowledge and the exercise of professional judgement (e.g., a very low-cost, practical change that reduces dose should be made even if doses are already low).</li>
<li>Good practice considers the radiation protection practices and performance of other, similar operations.</li>
<li>Feasibility includes approaching improvements in radiation protection pragmatically (i.e., weighing cost versus benefits of implementing changes in accordance with their practical significance).</li>
</ul>  <p>ICRP Publication 101b, <em>The Optimisation of Radiological Protection: Broadening the Process</em> [10], provides some guidance on developing an optimization process. The following steps provide an example of a process for assessing options for achieving ALARA:</p>
<ol>
<li>identify the exposure situation and make a preliminary analysis of the type and level of doses expected</li>
<li>identify the radiation protection options (refer to section 4.4):
<ol className="list-lower-alpha">
<li>application of engineered controls (elimination of the hazard, use of shielding, distancing location of persons from sources of radiation, etc.)</li>
<li>application of administrative controls (restricting access and the time in proximity to sources of radiation, use of personal protective equipment (PPE), etc.)</li>
</ol></li>
<li>quantify, where possible, the impact of the radiation protection options in terms of cost, dose, time, etc. (for some factors, a qualitative assessment may be necessary)</li>
<li>compare the options</li>
<li>select and implement an optimized solution</li>
<li>monitor performance of the implemented solution and re-assess when warranted</li>
</ol>  <p>Increases in dose levels are not normally expected if the circumstances of the exposure situation do not change. Changes may impact worker dose levels and are considered opportunities to revisit the ALARA option(s) being implemented for a given practice. Justification is required for any proposal that may result in a predicted increase in worker doses.</p>
<h4>4.1.4	Taking into account social and economic factors</h4>  <p>The ALARA principle takes into account social and economic factors, and licensees have the overall responsibility of assessing and documenting the justification and rationale for how they will take these factors into account in the application of the ALARA principle in order to substantiate their decisions.</p>  <p>Social factors that could be considered include equity, sustainability, individual benefit, social benefit and social trust. In all instances, the views of the public may also be relevant.</p>  <p>Economic factors could include, for example, the financial impact of protection measures as balanced against the benefit obtained. Some decisions on whether the efforts to reduce doses are economically justifiable may be made using cost-benefit analysis or other quantitative techniques. However, it may be inappropriate to solely consider quantitative arguments in judging reasonableness. A discussion of the monetary value of the unit collective dose can be found in IAEA Safety Reports Series No. 21, <a href="https://www-pub.iaea.org/books/iaeabooks/6288/Optimization-of-Radiation-Protection-in-the-Control-of-Occupational-Exposure"><em>Optimization of Radiation Protection in the Control of Occupational Exposure</em></a> [11], which provides guidance when such decisions must be made. Additional guidance is found in ICRP Publication 55: <em>Optimization and Decision-Making in Radiological Protection</em> [12].</p>
<h4>4.1.5	Oversight of the application of ALARA</h4>  <p>The ALARA principle incorporates the notion that the level of effort that should be applied to optimize doses depends on the magnitude of projected or historical doses. The regular review of dose records and other appropriate indicators, such as the frequency of contamination incidents, form a critical part of the oversight of the application of ALARA. These reviews identify trends that enable licensees to evaluate the effectiveness of dose reduction efforts.</p>  <p>As well as reviewing doses and other relevant statistics, licensees can demonstrate effective oversight of the application of ALARA by regularly reviewing information on new technologies and procedures that might enhance radiation protection measures. Licensees should keep themselves informed of technological advances in protective equipment and instrumentation in order to identify improved methods for exposure monitoring and dose reduction.</p>  <p>Licensees should also ensure that periodic internal reviews and inspections of the workplace are conducted by management to observe, first-hand, workers&rsquo; adherence to the established radiation protection and conventional safety practices. These inspections should be documented to capture the way in which the ALARA principle is being implemented, and the information should be shared throughout the organization.</p>  <p>Other measures that may be integrated into day-to-day operations by licensees to help facilitate the oversight of the application of the ALARA principle include the following:</p>
<ol>
<li>ALARA programs may help organize and document ALARA initiatives and activities, helping to demonstrate that actions are being taken to keep doses ALARA.</li>
<li>Committees consisting of management and workers can be beneficial. Typically, committees will develop ALARA initiatives and review performance in meeting these initiatives, and discuss and review incidents. Committees with multi-disciplinary membership should be considered, as they can help to increase awareness and engagement in ALARA initiatives throughout the organization.</li>
<li>Setting ALARA performance targets and tracking performance against these targets enable management and workers to focus their efforts on those areas of radiation protection that require improvement. A target may be defined in terms of a statistic such as average dose or collective dose during a specified period, or in terms of the frequency of an event (e.g., contamination incidents). The specified period is the time interval that has been chosen for monitoring performance (e.g., each quarter, semi-annually). A review of the performance in meeting these targets may also suggest that the licensee set more stringent targets for subsequent periods. ALARA performance targets should be established at set frequencies in accordance with a documented process. Progress towards achieving the targets should be monitored and appropriate corrective actions taken. Targets should be adjusted periodically to ensure that they are realistic. Targets should be challenging and forward-looking.</li>
<li>Exposure control levels can be developed and documented into work planning and procedures &ndash; for example, for the performance of a specific work activity. Use of facility conditions and operating experience can allow licensees to plan actions and set conservative exposure control levels for work activities. This also allows for retrospective analysis following work activities, and provides for identifying and incorporating lessons learned into future work-planning activities. Work planning can include a work permit system and use of operating experience, trends and doses from previous jobs.</li>
<li>Dose constraints can be used prospectively in optimizing radiation protection in various situations encountered in planning and executing tasks, and in designing facilities or equipment. They should therefore be determined and documented on a case-by-case basis according to the specific characteristics of the exposure. Examples of dose constraints may be in units of individual dose, collective doses or ambient dose rate. The process of deriving a dose constraint for any specific situation should include a review of operating experience and feedback from similar situations if possible, as well as considerations of economic, social and technical factors. For occupational exposure, experience and benchmarking with industry best practices are of particular importance in setting dose constraints.</li>
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
<div id="4.2"></div>
<h3 id="sec4-2">4.2	Management control over work practices</h3>  <p>Licensees can best ensure that radiation protection program requirements are achieved if all levels of the organization &ndash; managers and workers &ndash; contribute constructively. The respective contributions of these persons in individual situations will depend upon regulatory requirements and the responsibilities of workers as mandated by corporate decisions and structures.</p>  <p>The responsibility for the implementation of the radiation protection program within a licensee&rsquo;s organization should be allocated by management to staff as appropriate. The responsibilities of each hierarchical level (from top management to workers involved in specific tasks) regarding each aspect of the radiation protection program should be clearly delineated and documented in written policy statements to ensure that all are aware of them.</p>  <p>Licensees typically assign to senior managers overall corporate responsibility for regulatory compliance and radiation protection matters. In turn, these managers usually delegate routine responsibilities for the day-to-day administration and enforcement of radiation protection to suitably qualified staff. However, notwithstanding any such delegation, licensees remain legally responsible for the compliance with CNSC regulatory requirements.</p>  <p>Managers have responsibilities for assuring the safety of staff, workers and the public during the conduct of licensed activities. Accordingly, managers at all levels should strive to promote a positive safety culture within the workplace and the organization at large. By promoting, implementing and enforcing appropriate policies, programs, practices, procedures and controls, managers can demonstrate both personal and corporate commitments to conventional safety and radiation protection in the workplace.</p>  <p>Accordingly, managers should ensure that any staff assigned with responsibilities for routine administration of radiation protection matters act effectively. Managers should encourage positive job performance by establishing adequate communication, reporting and supervision links with the staff involved. Managers should provide the authority as well as the physical and financial resources required to do the job. To reflect the importance of radiation protection, key staff with responsibilities for administration of the radiation protection program should report directly to a senior manager with adequate authority and resources. In order to achieve and maintain adequate standards of workplace safety, the licensees&rsquo; senior management should provide any essential human, physical and financial resources. For example, senior managers of such institutions typically retain and assign persons to oversee and ensure radiation protection on a daily basis.</p>
<h4>Division of responsibilities for radiation protection</h4>  <p>There should be a management policy and organizational structure related to the radiation protection program, and it should complement the policy considerations for ALARA, as discussed in subsection 4.1.1. The description should include assignment of responsibilities for radiation protection to different management levels, as well as the corresponding organizational arrangements.</p>  <p>A description of the administrative organization of the radiation protection program including authority and responsibility of each position should be documented. The description should also include the applicable responsibilities and the related activities to be conducted by individuals having responsibility for radiation protection and the policy of maintaining occupational exposures ALARA. Experience and qualification requirements for each position responsible for conducting various aspects of the radiation protection program should be developed.</p>  <p>Licensees should appoint a person or position within the licensee&#39;s organization to be responsible for the day-to-day administration and control of the radiation protection program on behalf of their employers. These positions would include the following: a radiation safety officer (RSO); an RSO certified in accordance with subsection 15.04 of the <a href="http://laws-lois.justice.gc.ca/eng/regulations/SOR-2000-205/index.html"><em>Class II Nuclear Facilities and Prescribed Equipment Regulations</em></a>; a position certified in accordance with subsection 9(2) of the <a href="http://laws.justice.gc.ca/eng/regulations/sor-2000-204/page-1.html"><em>Class I Nuclear Facilities Regulations</em></a>; or any other position responsible for implementing radiation protection for the licensed activity. The necessary competence in terms of educational training and practical experience that is required of this position will vary according to the responsibilities assigned to the responsible individual, and the magnitude, complexity or diversity of the licensed activities. Competence in radiation protection matters may be gained by completion of classroom instruction in radiation protection, relevant work experience, or any appropriate combination of formal training and practical experience.</p>  <p>The qualifications and experience required of the personnel who administer and enforce licensee radiation protection programs will vary accordingly. Additional information on requirements for RSOs may be found in subsection 4.3 and in the following CNSC regulatory documents:</p>
<ul>
<li>REGDOC-1.6.1, <em>Licence Application Guide: Nuclear Substances and Radiation Devices</em>, Version 2 [5]</li>
<li>REGDOC-1.4.1, <em>Licence Application Guide: Class II Nuclear Facilities and Prescribed Equipment</em> (draft) [6]</li>
<li>REGDOC-2.2.3, <em>Personnel Certification: Radiation Safety Officers</em> [13]</li>
<li>RD-204, <em>Certification of Persons Working at Nuclear Power Plants</em> [14]</li>
</ul>  <p>Positions that are delegated radiation protection responsibilities should not be assigned competing duties or priorities that might detract significantly from their ability or availability to participate in or supervise radiation protection matters.</p>
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
<h3 id="sec4-3">4.3	Personnel qualification and training</h3>  <p>Subparagraph 4(a)(ii) of the Regulations requires the implementation of personnel training and qualification as part of a radiation protection program. Radiation protection knowledge and skills should be identified for and provided to all persons accessing the site of the licensed activity, including workers, radiation protection personnel, contractor personnel and visitors. Radiation protection training programs should be developed to accommodate the specific needs and requirements of the persons in each of these categories. The training program should include the methods for ensuring development of training, requalification, indoctrination training and the radiation protection instruction manuals.</p>  <p>CNSC regulatory document REGDOC-2.2.2, <em>Personnel Training</em>, Version 2 [15] sets out the CNSC&rsquo;s requirements for licensees regarding the development and implementation of a training system. It also provides guidance on how these requirements should be met.</p>  <p>Training for those workers directly involved in work with nuclear substances and prescribed equipment should include relevant information &ndash; presented in the form of documents, lectures, applied training and on-the-job training &ndash; that emphasizes procedures specific to the worker&rsquo;s job assignment. Training for workers should address topics at a level of detail commensurate with the workers&rsquo; job assignments and the potential radiological hazard. The training should cover topics such as:</p>   <ul>
<li>risks associated with ionizing radiation</li>
<li>basic quantities and units used in radiation protection</li>
<li>radiation protection principles (ALARA, regulatory dose limits, etc.)</li>
<li>fundamentals of practical radiation protection (time, distance, shielding, use of PPE, behaviour in designated areas, etc.)</li>
<li>specific task-related issues</li>
<li>responsibility to inform a designated person immediately in the event of any unforeseen occurrence involving increased radiological risk</li>
<li>where appropriate, actions that may need to be taken in the event of an emergency</li>
</ul>  <p>Where work involving exposure to radiation is to be undertaken, consideration should be given to the use of training on mock-ups or simulators to ensure that the work will proceed as smoothly as possible, that all unnecessary hazards will be avoided and that exposures will be ALARA.</p>  <p>Workers&rsquo; knowledge of the fundamentals of radiation protection, their level of training and their competence to perform the specified tasks safely should be evaluated and determined to be adequate prior to any unsupervised assignment. Licensees should establish a process for the qualification of workers based on their knowledge, level of training and competence.</p>  <p>Radiation protection training programs should be documented and approved at an appropriate level within the organization. Retraining should be provided to ensure that workers have the most up-to-date knowledge relevant to their work and that they do not become complacent about workplace hazards. Retraining should also be undertaken when there are significant changes in policy or procedures. Training should be updated at regular intervals, such as when there are changes made to the RP program or operational procedures and practices.</p>  <p>Additional guidance on provision of training by work group is provided in appendix A.</p>
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
<h3 id="sec4-4">4.4 Control of occupational and public exposure to radiation</h3>  <p>Subparagraph 4(a)(iii) of the Regulations requires the implementation of measures for the control of occupational and public exposure to radiation as part of a radiation protection program.</p>  <p>The preferred method of exposure control is through the elimination or reduction of the hazard. If elimination or significant reduction is not possible, the primary means of controlling occupational and public exposure to radiation is typically through engineered controls. When the use of physical design features, including specific engineered controls to limit radiation exposures, is impractical or inadequate, the implementation of administrative controls may need to be considered to ensure that protection is optimized. Examples of administrative controls are provided in section 4.4.2.</p>  <p>Control measures such as quality in design, maintenance and operation, together with administrative arrangements and operating procedures/instruction should be used to the maximum extent possible before relying on PPE for ensuring the protection of workers. In circumstances in which engineered and administrative controls are not sufficient to provide adequate levels of worker protection, PPE should be provided to minimize the exposures of the workers. Additional guidance on this topic is provided in section 4.4.4.</p>  <p>CNSC regulatory document REGDOC 2.9.1, <em>Environmental Principles, Assessments and Protection Measures</em>, version 1.1 [3] should be referred to for measures for controlling radioactive releases to the environment in order to control public exposures.</p>
<h4>4.4.1	Engineered controls for radiation protection</h4>  <p>To assure radiation protection, licensees should provide essential facilities and equipment. These typically include a properly designed workplace as well as appropriate personnel safety, radiation monitoring and emergency response equipment. These provisions should be selected, designed, constructed, operated and maintained so as to ensure radiation protection while accommodating work activities. The design should account for frequently occupied locations, and support the need for human access to locations and equipment. Following the hierarchy of control, engineering considerations are preferred when elimination or substitution is not possible.</p>  <p>From a radiological protection perspective, careful assessment should be made of the access requirements for operation, inspection, maintenance, repair, replacement and decommissioning of equipment; these considerations should be incorporated into the design.</p>  <p>General guidance on design features for radiation protection is provided in the following subsections. Specific CNSC requirements and guidance on radiation protection in the design of Class II nuclear facilities, reactor facilities, radiography installations, nuclear substance laboratories and nuclear medicine rooms are found in the following CNSC regulatory documents:</p>
<ul>
<li>REGDOC-1.4.1, <em>Licence Application Guide: Class II Nuclear Facilities and Prescribed Equipment</em> (draft) [6]</li>
<li>REGDOC-2.5.2, <em>Design of Reactor Facilities: Nuclear Power Plants</em> [16]</li>
<li>REGDOC-2.5.5, <em>Design of Industrial Radiography Installations</em> [17]</li>
<li>GD-52, <em>Design Guide for Nuclear Substance Laboratories and Nuclear Medicine Rooms</em>  [18]</li>
<li>RD-367, <em>Design of Small Reactor Facilities</em> [19]</li>
</ul>  <h5>Shielding</h5>  <p>The provision of shielding can be an effective form of engineered control. At the design stage, adequate thickness of the shield material should be provided to give an acceptable level of protection to the workers during normal as well as abnormal situations. The adequacy of the shielding in abnormal conditions, including accident situations leading to maximum foreseeable (worst-case) radiological consequences, should be evaluated and, where necessary, additional shielding or other engineered controls (e.g., interlocks) should be considered. The effectiveness of the shielding should be actively monitored by installed workplace radiation dose-rate monitoring instruments and/or by regular area radiation dose rate surveys performed by suitably qualified personnel. Additional local shielding should be provided to reduce the radiation dose rates as needed.</p>  <h5>Ventilation and containment systems</h5>  <p>The primary ventilation system in a facility provides fresh air to the workplaces. Installed fume hoods and glove boxes are also examples of engineered controls. Careful attention should be given to the design of the ventilation and containment systems network, including the calculation and verification of rates and velocities of air flow, to ensure that they are adequate for controlling airborne contamination. The design philosophy of ventilation systems for radioactive areas in a facility or activity where airborne contamination is possible is to contain and confine nuclear substances by:</p>
<ul>
<li>maintaining adequate negative pressure with respect to the atmospheric pressure</li>
<li>providing a directed flow of air from potentially lower radioactive areas to potentially higher radioactive areas</li>
<li>providing an adequate number of air changes in the work atmosphere</li>
<li>providing the appropriate exhaust air off gas cleaning systems (including scrubbers and/or HEPA filtration) so that the discharges from the facility will be as per the authorized levels</li>
</ul>  <p>CNSC regulatory document REGDOC-2.5.4, <em>Design of Uranium Mines and Mills: Ventilation Systems</em> [20] contains information for applicants on the CNSC requirements for the submission of ventilation-related information when applying for a licence to site and construct, operate or decommission a uranium mine or mill.</p>  <h5>Classification of areas and access control</h5>  <p>Facilities should be divided into zones based on considerations such as predicted dose rates, radioactive contamination levels, concentration of airborne radionuclides, access requirements and any other specific requirements. Appendix B.1.1 provides guidance on deriving contamination control limits for zones within facilities.</p>  <p>Inter-zonal boundaries should be clearly marked, and radiation detection equipment available and used as required (for personnel, tools, equipment and material) at points of exit from radiation zones and/or contaminated zones. Provisions should be made for controlling the exit(s) from the radiation zones. Monitoring of personnel and materials should be established at the access and egress points for the radiation zones. Access to areas of high dose rates or high levels of radioactive contamination should be controlled through the provision of lockable doors and interlocks. Routes for personnel through radiation zones and contamination zones should be minimized in order to reduce the time spent in transiting these zones. Radiation zones where personnel spend substantial time should be designed to the lowest practical dose rates and ALARA. Within the radiation zones, changing areas for personnel should be provided at selected locations to prevent the spread of radioactive contamination. Within these change areas, consideration should be given to the need for decontamination facilities for personnel, radiation monitoring instruments and storage areas for protective clothing. A physical barrier should clearly separate the clean area from the potentially contaminated area.</p>
<h4>4.4.2	Administrative controls for radiation protection</h4>  <p>Examples of administrative controls for radiation protection include work procedures such as written safety policies, work authorizations (such as radiation work permits) and restrictions, access controls to areas with the potential for radiological hazards, and training. Administrative controls should have an emphasis on limiting the time spent by workers in proximity to the source of radiation, and increasing the distance between workers and the source of radiation. Administrative controls are only supplements to the engineered controls described in subsection 4.4.1.</p>
<h4>4.4.3	Personal protective equipment</h4>  <p>Personal protective equipment (PPE) should be selected with due consideration of the hazards involved. The equipment should not only provide adequate protection, but should also be convenient and comfortable to use. Examples of PPE include reinforced clothing, ventilated suits, gloves, laboratory coats/smocks, and protective glasses. Workers who may have to use such equipment should be properly trained in its use, operation, maintenance and limitations. It is important that PPE fit the wearer correctly.</p>  <p>Consideration should be made to determine if the benefit afforded by the PPE is outweighed by the consequence of wearing the equipment. For example, the use of a respirator may afford the wearer a high degree of protection from intakes of radionuclides in air, but may impede the wearer&rsquo;s mobility, thereby adding additional time to completing a task in a high-radiation area, leading to an elevated external dose.</p>  <p>Workers should be trained in the use of PPE prior to use. Licensees should ensure that their staff and workers have access to the personnel safety equipment that is necessary to limit radiation exposures in accordance with the ALARA principle, regulatory dose limits and corporate procedures. Since safety equipment needs may vary or fluctuate according to case-specific circumstances, the personnel safety measures should be reviewed at regular intervals to confirm whether they remain adequate.</p>  <p>Several factors influence the success of PPE as a control measure. These include:</p>
<ul>
<li>selection of PPE for the task and the hazard, with regard to both the type and fit of PPE</li>
<li>training in the use of PPE</li>
<li>donning and doffing of PPE</li>
<li>maintenance of PPE (maintenance includes storage, cleaning, inspection and disposal/replacement of PPE)</li>
</ul>  <p>PPE should be used and maintained in accordance with the manufacturer&rsquo;s directions.</p>  <p>Where there is the potential for contamination, PPE should be removed in suitable changing areas to control the spread of radioactive contamination. Individuals should shower and change clothes upon leaving contaminated workplaces. When contaminated PPE are stored, laundered or otherwise decontaminated or disposed of, licensees should put in place measures to prevent the spread of contamination to other persons or workplaces and to minimize the exposures of individuals and the release of contaminants to the environment. The licensee should provide suitable laundry facilities, boot washes, vacuum systems or other means of decontamination, as necessary.</p>
<h4>4.4.4	Respiratory protection from airborne nuclear substances</h4>  <p>Respirators for protection from airborne nuclear substances should only be used if other hazard control methods are not practical or possible. Respirators should not be the first choice for dose reduction in workplaces. They should only be used:</p>
<ul>
<li>when the hierarchy of control is not possible (elimination, substitution, engineering or administrative controls)</li>
<li>while engineering controls are being installed or repaired</li>
<li>when emergencies or other temporary situations arise (e.g., infrequent maintenance operations)</li>
</ul>  <p>Before considering use of a respirator by workers, licensees should have a documented respiratory protection program that describes the proper procedures for selection, use (including fit testing) and care of respiratory protection equipment. The correct use of a respirator is just as important as the selection of the appropriate respirator. Licensees should align their respiratory protection programs with CSA standard Z94.4-18, <em>Selection, use and care of respirators</em> [21].</p>  <p>A program for the care and maintenance of respirators should be established to include cleaning and sanitizing, inspection, testing and repair, storage and record keeping. Respirators should be cleaned and sanitized according to the manufacturer&rsquo;s instructions or procedures authorized by the respiratory protection program in consultation with the respirator&rsquo;s manufacturer. Respirators designed for a single use should be disposed of after use.</p>  <p>Since respirator filters capture particles, it is important to check that these filters are not clogged, as it makes it harder for air to pass through and increases the likelihood of contaminated air entering the mask. Cartridges can also become "full" or saturated. If this occurs, the cartridge will stop working as designed, and particulates will leak through the cartridge. Both cartridges and filters should be replaced on a regular basis as per the manufacturers&rsquo; recommendations. If cartridges are re-used, a cleaning and testing program should be implemented that includes methods for pressure differential/resistance testing of cartridges to ensure that they are not saturated and are fit for continued service. The program should include testing methodologies and acceptance criteria for such testing.</p>
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
<h3 id="sec4-5">4.5	Planning for unusual situations</h3>  <p>Subparagraph 4(a)(iv) of the Regulations requires the implementation of planning for unusual situations as part of a radiation protection program. A situation is considered unusual when it is outside of routine operations for which work planning would be needed, and could include the potential for high doses where routine doses are low. For such operations, radiation protection efforts should be directed to reducing, to the extent possible, the probability of occurrence of events that can result in high doses.</p>  <p>Work plans should be developed for work in areas where existing or potential radiological hazards may result in workers accumulating significant doses. The radiation protection component of work plans should include sufficient information to guide the worker in executing the task safely and keeping their dose ALARA. This information should include the following as a minimum:</p>
<ul>
<li>radiological surveys of the hazards present</li>
<li>estimates of optimum time to be spent by workers in radiation fields</li>
<li>an estimate of doses to the workers involved</li>
<li>identification of protective equipment and clothing to be used</li>
<li>actions such as back-out, to be taken should the anticipated radiation fields (airborne radioactivity concentration, dose or dose rate) be exceeded</li>
</ul>  <p>The review of work plans by management, radiation protection staff, and those conducting the work prior to and following execution of the work also contribute to keeping the doses ALARA. The experience gained from the reviews done following the completion of a project can be used in the planning of future jobs of a similar nature with a view to further reducing worker doses where possible. The level of review and approval of work plans should be commensurate with the potential or existing hazard level of the work activity. At a minimum, approval of work plans should involve a level of management higher than the level that is directly supervising the job.</p>
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
<h3 id="sec4-6">4.6	Nuclear substances released as a result of a licensed activity</h3>  <p>Paragraph 4(b) of the Regulations requires that as part of a radiation protection program, licensees must ascertain the quantity and concentration of any nuclear substance released as a result of the licensed activity. This can be done by direct measurement as a result of monitoring or by estimating quantity and concentration, if the time and resources required for direct measurement outweigh the usefulness of that method.</p>  <p>Appendix C provides guidance on contamination monitoring in order to ascertain quantities of nuclear substances in work areas or for release from a nuclear facility as a result of the licensed activity.</p>  <p>For guidance on effluent and/or emission monitoring in order to ascertain quantities of nuclear substances for release from a nuclear facility, refer to CNSC regulatory document REGDOC-2.9.1, <em>Environmental Protection: Environmental Principles, Assessments and Protection Measures</em>, version 1.1 [3]</p>
<h4>4.6.1	Workplace monitoring programs</h4>   <p>Licensees should establish, maintain and review workplace monitoring under the radiation protection program. The type and frequency of workplace monitoring should allow for the evaluation and review of the radiological conditions in all workplaces, as well as assessment of radiation exposures. It should also be based on dose rate, radioactivity concentration in air and surface contamination, and their expected fluctuations, and on the likelihood and magnitude of exposures in anticipated operational occurrences and accident conditions. This information should be used in support of pre- and post-job evaluations, work planning, contamination control and management of radiological control operations. Significant changes in monitoring results should be identified and trends analyzed periodically. Corrective actions should be taken as necessary.</p>  <p>Workplace monitoring records must be available for inspection by CNSC staff. The records should also be readily available to workers.</p>  <p>The programs for monitoring of the workplace should specify:</p>
<ul>
<li>the quantities to be measured</li>
<li>where and when the measurements are to be made and at what frequency</li>
<li>the most appropriate measurement methods and procedures</li>
<li>investigation levels and the actions to be taken if they are exceeded</li>
</ul>  <p>Particular attention should be given to the selection and use of instruments to ensure that their performance characteristics are appropriate for the specific workplace monitoring situation. This should include consideration of alarming capabilities of instrumentation where warranted. Guidance on considerations related to the acquisition, use, maintenance, calibration and testing of radiation instrumentation and equipment are provided in section 25.</p>  <p>Additional guidance on workplace monitoring programs is provided in appendix B.</p>
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
<h2 id="sec5">5. Ascertaining and Recording of Doses</h2>  <p>Section 5 of the Regulations requires all licensees to ascertain and record doses assigned to anyone who performs duties associated with licensed activities or who is present at the site of licensed activities. This section introduces the approaches that may be used by licensees to ascertain and record radiation exposures and doses. Comprehensive guidance on the ascertainment and recording of doses as required by section 5 of the Regulations is detailed in CNSC regulatory document REGDOC-2.7.2, Dosimetry, Volume I: Ascertaining Occupational Dose (draft) [1].</p>  <p>Under paragraph 27(a) of the <a href="http://laws-lois.justice.gc.ca/eng/acts/N-28.3/"><em>Nuclear Safety and Control Act</em></a> (NSCA), every licensee is required to keep any records prescribed by the regulations under the NSCA, as well as a record of the dose received by or committed to each person who performs duties in connection with any activity that is authorized by the NSCA or who is present at a place where that activity is conducted. Radiation exposures due to naturally occurring nuclear substances must be considered if those exposures occur as a direct result of a CNSC-licensed activity, such as exposures to radon and radon progeny in uranium mining and milling.</p>  <p>Records of occupational exposure should be kept up to date, and procedures should be established to ensure that assessments of exposure from any monitoring period are incorporated into the individual&rsquo;s exposure record promptly.</p>  <p>Accordingly, CNSC licensees should keep the following dose-related records to satisfy regulatory requirements or to facilitate regulatory review:</p>
<ul>
<li>a record of the dose received by or committed to each person who performs duties in connection with any activity that is authorized by the NSCA or who is present at a place where that activity is carried on (paragraph 27(a) of the NSCA)</li>
<li>a record of the time period over which the above dose was accumulated</li>
<li>a description of the dosimetric model that was used to obtain the dose from measured data</li>
<li>any other dosimetry record or information required by a condition of the licence, the NSCA or the CNSC pursuant to paragraph 3(1)(m) of the <a href="http://laws-lois.justice.gc.ca/eng/regulations/SOR-2000-202/page-1.html#h-5"><em>General Nuclear Safety and Control Regulations</em></a></li>
</ul>  <p>Retention periods for such records are discussed in section 24.</p>
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
<h3 id="sec5-1">5.1	Methods to measure exposure and doses directly</h3>  <p>A radiation exposure or dose may be ascertained by direct measurement as a result of monitoring. A direct measurement typically involves the use or application of personal monitoring equipment and techniques. In each situation involving direct measurement as a result of monitoring, the choice of the most appropriate equipment and techniques will depend upon case-specific factors. Such factors include whether the source of the radiation that is to be measured is external to the person&rsquo;s body, or whether it could be incorporated into the body (e.g., by inhalation or ingestion).</p>  <p>For example, personal monitoring devices that are worn or carried on a person&rsquo;s body (e.g., an optically stimulated luminescent dosimeter) can be used to directly measure the person&rsquo;s exposure to radiation from sources that remain outside the body. Alternatively, a person&rsquo;s exposure to radiation taken into the body may be ascertained by direct measurements on the body (e.g., <em>in vivo</em> measurements using instruments such as whole-body counters, thyroid probes, lung counters) or by direct measurements on material that is excreted, exhaled or otherwise sampled from the body (i.e., <em>in vitro</em> measurements of urine, feces and sputum).</p>  <p>Typically, a radiation dose that is ascertained by direct measurement as a result of monitoring is reasonably representative of the actual dose received.</p>
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
<h3 id="sec5-2">5.2	Methods to estimate exposures and doses</h3>  <p>A radiation exposure or dose may be estimated by indirect methods that take into account non-personal monitoring results and other relevant data.</p>  <p>For example, in a case in which a person occupies, for a known period of time, an area that has a known concentration of airborne radioactivity or a known radiation field, this knowledge can be used, in conjunction with other information, to estimate the person&rsquo;s radiation exposure during that occupancy. This approach is often used where an airborne radioactive substance is the source of exposure. In such instances, the concentration in air of radon progeny or other radionuclides are measured by air sampling or another method, and the time spent in the area by a person is recorded. The measured concentrations of airborne radioactivity, the recorded period of occupancy, representative metabolic data, and air-inhalation rates are then used to estimate the exposures of the person to airborne radiation.</p>
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
<h3 id="sec5-3">5.3	Direct measurement versus the estimating of exposures and doses</h3>  <p>When deciding on whether to measure directly or to estimate a radiation exposure or radiation dose from an activity to be licensed by the CNSC, licensees should take into account the advice of radiation protection experts, as well as any other relevant factors. The relevant factors could include such considerations as the number of workers involved; the nature of the work activity and its processes; the nature, number, activity and size of the associated radiation sources; the magnitude, distribution and range of the anticipated radiation exposures or doses; and the techniques and equipment that are available and suitable for measuring and monitoring the exposure or dose.</p>  <p>For situations that could involve radiation exposures or doses from multiple sources or via different pathways, licensees should determine which is appropriate for each contributing component: direct measurement as a result of monitoring, or estimation of the associated exposures or doses.</p>  <p>The need for and appropriateness of direct monitoring of persons will depend on factors such as:</p>
<ul>
<li>the amount of nuclear substance present and the radionuclide(s) involved, or the maximum energy and potential dose rates to which persons will be exposed as a result of the operation of radiation devices and prescribed equipment, and the duration of their exposure</li>
<li>the physical and chemical form of the nuclear substance, where applicable</li>
<li>the type of containment or shielding used</li>
<li>the operations performed</li>
<li>the expected levels and likely variations in the dose rates, doses or intakes</li>
<li>the complexity of the measurement and interpretation procedures comprising the measurement program</li>
<li>general working conditions</li>
</ul>  <p>The need for direct monitoring is likely to be greater in the early stages of an operation. As experience in the workplace is gained, the need for routine direct monitoring can be reviewed to decide on the need for continuance of direct monitoring or whether estimation through workplace monitoring is sufficient for radiation protection purposes. Consideration should also be given to the potential for accidental exposures in determining the necessity for individual monitoring.</p>  <p>Any proposal to ascertain dose by estimation should be technically sound and substantiated. The decision to estimate should be justified on the basis of the time and resources that would otherwise be required for direct measurement.</p>  <p>An estimation method should be consistent with good quality practices and accepted techniques, which are further described in CNSC regulatory document REGDOC-2.7.2, <em>Dosimetry, Volume I: Ascertaining Occupational Dose</em> (draft) [1</p>
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
<h3 id="sec5-4">5.4	Dosimetry</h3>  <p>This section of the regulatory document introduces guidance on dosimetry and radiation protection programmatic considerations.</p>
<h4>5.4.1	External dosimetry</h4>  <p>External dosimetry is the measurement of dose when the radiation source is outside of (or external to) the body. External dosimetry should be used, handled and stored in accordance with radiation protection program requirements. Procedures should be in place to estimate the dose in the event of the loss of or damage to a dosimeter, or an unexpected/unusual dosimeter reading. Guidance on external dosimetry, including decisions on when to use external dosimetry, is provided in CNSC regulatory document REGDOC-2.7.2, <em>Dosimetry, Volume I: Ascertaining Occupational Dose</em> (draft)[1].</p>  <p>In general, wearing periods for external dosimetry should be determined considering the radiological hazards present in the facility, and the technical and performance specifications for the dosimeter type (e.g., minimum detection limits), as well as practical and logistical considerations. For licensed dosimetry, wearing periods should also be informed by consultation with the dosimetry service provider. Licensees who possess, use or produce exposure devices are required by subsection 31(3) of the <a href="http://laws-lois.justice.gc.ca/eng/regulations/SOR-2000-207/page-5.html#h-38"><em>Nuclear Substances and Radiation Devices Regulations</em></a> to adopt a 15-day wearing period. Such dosimeters must be returned to their dosimetry service within 10 days after the end of the wearing period as per paragraph 30(1)(c) of the <a href="http://laws.justice.gc.ca/eng/regulations/sor-2000-207/page-1.html"><em>Nuclear Substances and Radiation Devices Regulations</em></a>.</p>
<h4>5.4.2	Internal dosimetry</h4>  <p>Internal dosimetry is the measurement of doses due to nuclear substances that have entered the body by way of ingestion, inhalation or other means. It may consist of measurements of the activity of radionuclides in the body (known as either <em>in vivo</em> monitoring or <em>in vivo</em> bioassay; the terms are equivalent), monitoring of excreta (known as either in vitro monitoring or in vitro bioassay), air sampling with personal air samplers, or a combination of these methods.</p>  <p>Bioassay programs ensure that intakes of radionuclides are accurately determined and recorded, and in some instances, facilitate dose assignment. The primary objective of a bioassay monitoring program is to assess a worker&rsquo;s body burden from exposure to radionuclides in order to ensure the safety of workers.</p>  <p>The principal components of a bioassay monitoring program are the criteria for participation in the program, the frequency of monitoring, and the actions taken on the basis of measurement results. The type and frequency of bioassay sampling and measurement is based upon the likelihood of intake, the potential for large acute uptakes, and suitable dosimetry methods being available. Monitoring workers for potential intakes of radionuclides may be accomplished by either individual measurement methods or workplace measurements.</p>  <p>Personal air sampling can also be performed to accurately estimate breathing zone concentrations of radionuclides and in turn, can be used for internal dose assignment. Use of personal air sampling equipment includes the following elements: equipment worn or located in an appropriate environment and position; a quality control program; a preventive maintenance program; and appropriate minimum detection limits.</p>  <p>Guidance on internal dosimetry, including decisions on when to use internal dosimetry, is provided in CNSC regulatory document REGDOC-2.7.2, <em>Dosimetry, Volume I: Ascertaining Occupational Dose</em> (draft) [1].</p>
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
<h2 id="sec6">6. Action Levels</h2>  <p>Section 6 of the Regulations defines an action level as "a specific dose of radiation or other parameter that, if reached, may indicate a loss of control of part of a licensee&#39;s radiation protection program and triggers a requirement for specific action to be taken."</p>  <p>The definition of "action level" in the <a href="https://laws.justice.gc.ca/eng/regulations/sor-2000-206/page-1.html"><em>Uranium Mines and Mills Regulations</em></a> encompasses both radiation protection and environmental protection, whereas the definition of "action level" in the Regulations refers only to radiation protection. For the purposes of section 6 of the Regulations and section 12, "action levels" are those developed for the parameters of the radiation protection program. "Action levels" for environmental protection (i.e., releases of nuclear substances, hazardous substances and physical parameters) are discussed in CSA standard N288.8-17, <em>Establishing and implementing action levels for releases to the environment from nuclear facilities</em> [22].</p>  <p>Action levels are designed to alert licensees before regulatory dose limits are reached. Action levels may be established as part of licensees&rsquo; radiation protection programs. Licensees are responsible for identifying the parameters of their program that represent timely indicators of potential losses of control of their program. For this reason, action levels are facility/activity-specific and may change over time depending on operational and radiological conditions. By definition, if an action level is reached, a loss of control of some part of the associated radiation protection program may have occurred, and specific action is required. If an action level is reached, the specified action under the Regulations consists of establishing the cause for reaching the action level, restoring the effectiveness of the radiation protection program, and notifying the CNSC within a specified period of time.</p>  <p>Exceeding an action level is not considered a non-compliance. The exceedance of an action level and the successful implementation of the required follow-up activities (notification, investigation and implementation of corrective actions) to restore the effectiveness of the program is a clear demonstration of due diligence and a well-maintained and well-managed control system. However, failure to inform the CNSC, complete an investigation and implement corrective actions (if required) is a non-compliance.</p>  <p>It is important to note that occasional exceedances indicate that the action level chosen is likely an adequately sensitive indicator of a potential loss of control of the radiation protection program. Action levels that are never exceeded may not be sensitive enough to detect the emergence of a potential loss of control. For this reason, licensee performance is not based on the number of action level exceedances in a given period, but rather how the licensee responds and identifies corrective actions (if required) to enhance their program performance and prevent reoccurrence.</p>  <p>CNSC licensees may use action levels to help them monitor and maintain the effectiveness of the radiation protection programs. In particular, licensees may set action levels and monitor related parameters so as to provide for early warnings of any actual or potential losses of control of the parts of the radiation protection program to which the action levels apply, thereby maximizing their opportunities for follow-up investigations and any interventions that may be necessary in order to restore control.</p>  <p>Action levels may be expressed in terms of any parameters that, if reached, may indicate a loss of control of an associated part of the licensee&rsquo;s radiation protection program. Some examples of such parameters are:</p>
<ul>
<li>the quantity of radiation exposure or dose that an individual receives ("individual dose")</li>
<li>a radiation level within a work area ("ambient dose rate")</li>
<li>radioactivity per unit surface area ("surface contamination level")</li>
<li>an air-exchange rate in a workplace ("ventilation rate")</li>
<li>a concentration or a quantity of a nuclear substance in a workplace</li>
</ul>  <p>Action levels are typically facility- or activity-specific. An action level value for a particular parameter for one licensee could lie within the normal operating range of another licensee. Over the lifetime of a facility or activity, an action level may be dynamic or static. That is, it may be revised upwards or downwards to accommodate the prevailing circumstances. For example, an action level for a new facility or activity may warrant refinement once sufficient operating experience is gained. Similarly, if conditions at a facility change, a related action level may also need to be reviewed and revised accordingly.</p>  <p>Licensees are encouraged to develop administrative levels in conjunction with their action levels. Administrative levels are internal tools for dose monitoring and control, and exceedances of these levels do not typically require reporting to the CNSC. Administrative levels are usually set based on the expected high end of normal operations or based on the statistics from past performance for similar work activities. The exceedance of an administrative level should trigger an internal investigation and disposition according to the licensee&rsquo;s corrective action program.</p>
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
<h3 id="sec6-1">6.1	Developing, using and revising action levels</h3>  <p>Typically, an action level for a nuclear facility or licensed activity will be developed as part of the CNSC licensing process, in accordance with paragraph 3(l)(f) of the <a href="http://laws-lois.justice.gc.ca/eng/regulations/SOR-2000-202/page-1.html#h-5"><em>General Nuclear Safety and Control Regulations</em></a>. For nuclear substances released to the environment, CSA N288.8-17, <em>Establishing and implementing action levels for releases to the environment from nuclear facilities</em> [22], should be consulted for requirements on establishing and implementing environmental protection action levels for CNSC-licensed nuclear facilities.</p>  <p>If it is to be useful and credible, an action level must be a meaningful indicator over a defined time period of the state of a radiation protection program. An action level for a nuclear facility should take into account the facility&rsquo;s design and relevant operating experience. A licence applicant who lacks such experience, as in the case of new activities or operations, may be able to draw upon the experience of comparable designs and operations. To facilitate regulatory review of any proposed action level, the licence applicant should thoroughly and clearly explain the rationale for the level and its planned use.</p>  <p>Accordingly, the following steps for developing and using action levels may be helpful to licence applicants and licensees:</p>
<ul>
<li>from the design, identify those processes and activities that could result in doses to workers or the public</li>
<li>for activities and processes that could result in doses to workers or the public, identify the measurable parameters that will indicate, directly or indirectly, whether the radiation protection program is adequately controlled</li>
<li>on the basis of realistic assumptions, select appropriate action levels, expressed in terms of the appropriate parameters, for all key processes and activities. incorporate use of the selected action levels into the proposed radiation protection program</li>
<li>implement the radiation protection program and the associated action levels in accordance with the CNSC licence</li>
<li>as operating experience accumulates, revise action levels accordingly as needed to ensure that they remain a meaningful indicator of a potential loss of control of the radiation protection program</li>
</ul>  <p>The radiation protection program should include requirements for regular review of &ndash; and when appropriate, revision of &ndash; action levels. To revise an action level that is referenced in a licence, the licensee must obtain an appropriate licensing action from the CNSC, such as a licence amendment or revision to the licence condition handbook. When applying for this action, the applicant should demonstrate that the proposed revision is appropriate for the purposes of section 6 of the Regulations and any relevant requirements of the licence.</p>
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
<h3 id="sec6-2">6.2	Monitoring</h3>  <p>To serve as an effective indicator of a possible loss of control of a part of a radiation protection program, an action level must be supported by a monitoring program that can accurately detect when the action level is reached. Accordingly, licence applications that include any proposed action level should also describe the monitoring program that the applicant plans to implement in order to detect when the action level is reached.</p>  <p>Since the purpose of monitoring action levels is to provide timely warning of any potential or actual loss of control of part of the radiation protection program, a corresponding monitoring proposal should consist of an appropriate methodology and frequency of sampling or measurement. This selection of methodology and frequency will be influenced by case-specific factors and should be commensurate with the probability and consequences of a loss of control of a part of the radiation protection program. For example, as the probability increases that regulatory dose limits could be approached or exceeded as a consequence of a loss of control of part of a radiation protection program, more rigorous action-level monitoring programs may be appropriate.</p>  <p>When a proposal for an action level is accepted and incorporated into a CNSC licence, the licensee must ensure that the program is implemented and maintained in accordance with the licence.</p>
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
<h3 id="sec6-3">6.3	Responding when an action level is reached</h3>  <p>When an action level referred to in a licence is reached, specific actions are required pursuant to subsection 6(2) of the Regulations. The licensee must conduct an investigation to determine the cause, take action to restore the effectiveness of the radiation protection program if required, and notify the CNSC within the time period specified in the licence.</p>  <p>Although an action level is not an enforceable dose limit, a failure to meet the above obligations would contravene the Regulations and would constitute an offence under the NSCA.</p>  <p>The reaching of an action level could be due to any number of causes. An action level could be reached repeatedly as a consequence of chronic deficiencies in the associated radiation protection program. Ongoing occurrences could be triggered by a shift in normal operating conditions. Occasional occurrences could be triggered by transient conditions that might not relate to a loss of control of the radiation protection program or to a significant change in the radiation doses associated with normal operating conditions. For any of the above cases, repeatedly reaching an action level would be cause for additional analysis and may be an indicator that either the action level is not set appropriately, or the corrective actions implemented have not been effective in restoring the control of the radiation protection program.</p>  <p>The investigation that a licensee undertakes to determine why an action level referred to in a licence has been reached may first need to confirm whether the evidence (e.g., measurements, observations or calculations) that indicates that the action level has been reached is valid (i.e., whether the action level has indeed been reached).</p>  <p>Further to determining the cause for reaching an action level, the licensee must identify and take actions to restore the effectiveness of the radiation protection program. These actions should be appropriate to the circumstances and commensurate with the level of risk associated with the reaching of the action level. If the licensee cannot restore effectiveness immediately, the licensee should propose interim measures for CNSC consideration. The measures to restore the effectiveness of the radiation protection program, whether interim or final, should be based on credible experience, data or analyses, and should take into account the consequences of the loss of control.</p>  <p>Typically, the greater the radiological hazards that result when an action level is reached, the more immediate, complex or rigorous the measures will be to restore the effectiveness of the radiation protection program.</p>  <p>In addition to the above responses when an action level is reached, paragraph 6(2)(c) of the Regulations requires the licensee to notify the CNSC within the period specified by the licence.</p>
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
<h2 id="sec7">7. Provision of Information to Nuclear Energy Workers</h2>  <p>Section 7 of the Regulations requires licensees to provide certain information to all nuclear energy workers (NEWs).</p>  <p>There is an obligation on licensees to identify individuals as NEWs. In accordance with the NSCA, a NEW is any person that is required, in the course of their business or occupation in connection with a nuclear substance or nuclear facility, to perform duties in such circumstances that there is a reasonable probability that the person may receive a dose greater than the prescribed limit for the general public (which is 1 mSv per calendar year). There is no provision in the NSCA or its regulations that sets out the process for how to determine whether a person is a NEW. It is the licensee&rsquo;s responsibility to determine whether a person meets the definition of a NEW under the NSCA and its regulations. This requires that a case-by-case factual determination be made, based on the potential occupational exposure related to the duties that will be performed by the person for the licensee. Licensees should also be aware that the <a href="http://laws-lois.justice.gc.ca/eng/regulations/C.R.C.,_c._986/index.html"><em>Canada Labour Standards Regulations</em></a> restricts the employment of persons under the age of 17 in work activities that would require NEW status, as defined in the NSCA.</p>  <p>The risk information provided to NEWs should be relevant to the radiological risks that may be encountered during regular work activities. As a best practice, the provision of risk information should be offered to all persons working where licensed activities are taking place. Information on the applicable effective dose limits and equivalent dose limits prescribed in sections 13, 14 and 15 of the Regulations must also be provided to NEWs.</p>  <p>Licensees are required to inform NEWs of their dose levels. The dose levels are the radiation doses (effective and equivalent) that have been ascertained and recorded by a licensee (as required by section 5 of the Regulations) for a NEW as a result of the NEW performing their duties associated with the licensed activity. Additional guidance on requirements dictated by section 5 of the Regulations may be found in section 5.</p>  <p>Dose levels must be communicated to NEWs in writing on an annual basis, at a minimum. Providing dose levels in writing includes providing them online and sending the information by email. The objective of informing workers of their dose information is to ensure that they are aware of their exposures, that they understand their specific situation, and that they know whom to contact if they have questions or concerns. An informed workforce leads to a stronger culture of safety and individual accountability. The licensee should document how they inform workers of their dose levels in the radiation protection program. The process should be reviewed periodically to ensure that it is effective.</p>  <p>Licensees&rsquo; obligations to inform NEWs of their dose levels do not cease if the NEW leaves employment during the course of a year (e.g., contractor personnel, retirees and employee terminations). Licensees should make efforts to inform any NEW who has left their employment of their radiation dose levels in a timely manner, once this information is available.</p>  <p>Licensees must inform all workers of the risks associated with potential emergency activities in relation to the dose limits established in section 15 of the Regulations, and of how they should protect themselves while conducting their assigned duties during the emergency. Commensurate with the licensee&rsquo;s emergency plans and the worker&rsquo;s roles and responsibilities, licensees should provide training to workers as required to meet this regulatory requirement. Some workers may simply need to be trained in evacuation procedures, whereas others may also require training related to their specific roles during emergencies. Certain licensees would also need to provide this information to offsite authorities&rsquo; emergency response personnel, who may be expected to assist during an emergency. Training of emergency response personnel is also discussed in appendix A.7.</p>  <p>Licensees must inform each female NEW, in writing:</p>
<ul>
<li>of the risks associated with the exposure of embryos and fetuses to radiation</li>
<li>of the risks to breastfed infants from intakes of nuclear substances</li>
<li>of the importance of informing the licensee, upon becoming aware of her pregnancy or if she is breastfeeding</li>
<li>of the female NEW&rsquo;s rights if they are pregnant or breastfeeding</li>
</ul>  <p>Providing this information to female NEWs will assist them in deciding if and when they will inform the licensee that they are pregnant or breastfeeding.</p>   <p>Once a female NEW notifies the licensee, the licensee must assess working conditions and, where necessary, to make accommodations to ensure that the dose limit for a pregnant NEW is respected, and to limit the potential for intakes of nuclear substances by the breastfeeding worker. See section 11 of this document for more information on accommodations for pregnant or breastfeeding NEWs.</p>  <p>All NEWs must provide written acknowledgement to the licensee attesting that they have been informed of their NEW status and the corresponding radiological risks commensurate with their work. In addition, each female NEW must provide written acknowledgement that she has been informed of the risks associated with the exposure of embryos and fetuses to radiation and of the risks to breastfed infants from intakes of nuclear substances, and that she has been informed of the importance of informing the licensee, in writing, upon becoming aware of her pregnancy or if she is breastfeeding. Records of written acknowledgments by NEWs must be retained by the licensee in accordance with subsection 28(1) of the <a href="http://laws.justice.gc.ca/eng/regulations/sor-2000-202/page-1.html"><em>General Nuclear Safety and Control Regulations</em></a>.</p>
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
<h2 id="sec8">8. Requirement to Use a Licensed Dosimetry Service</h2>  <p>Section 8 of the Regulations requires licensees to use a dosimetry service that is licensed by the CNSC (LDS) to measure and monitor the doses of radiation received by and committed to NEWs who have a reasonable probability of receiving:</p>
<ul>
<li>an effective dose greater than 5 mSv in a one-year dosimetry period</li>
<li>an equivalent dose to the skin, or to the skin of the hands and feet, that is greater than 50 mSv in a one-year dosimetry period</li>
</ul>  <p>These requirements ensure that doses are monitored with sufficient accuracy and precision.  When determining when licensed dosimetry is required, licensees should be considering the anticipated doses to be received as a result of the worker&rsquo;s duties for a given licensed activity. An occupational dose that may have been received by the NEW under another licensee&rsquo;s program is not used in the determination of whether licensed dosimetry is required. Instead, the NEW&rsquo;s previous dose history is used by the licensee to ensure that the regulatory dose limits are not exceeded. Additional guidance on this subject is provided in section 10.</p>  <p>Licensees are required to ascertain doses to all persons who are exposed to radiation due to the licensed activity; even if NEWs may not have a reasonable probability of receiving an effective dose greater than 5 mSv in a one-year dosimetry period or an equivalent dose to the skin or the skin of the hands and feet greater than 50 mSv in a one-year dosimetry period. Licensees may choose to use a CNSC-licensed dosimetry service as an acceptable method for ascertaining doses in these circumstances.</p>  <p>To determine whether NEWs have a reasonable probability of receiving an effective dose greater than 5 mSv in a one-year dosimetry period, or an equivalent dose to the skin or the skin of the hands and feet greater than 50 mSv in a one-year dosimetry period, licensees may estimate the expected doses, refer to the typical doses received at similar licensed facilities or activities, or benchmark with similar/historical doses received by NEWs in connection to their licensed activity.</p>  <p>Section 5 of this regulatory document provides additional information on ascertaining doses through direct measurement or by estimation, and these methods are elaborated further in CNSC regulatory document REGDOC-2.7.2, <em>Dosimetry, Volume I: Ascertaining Occupational Dose</em> (draft) [1].</p>  <p>All radiation dose components and pathways that comprise the total effective dose to NEWs (i.e., internal dose and external dose) must be considered in the determination of whether to use a CNSC-licensed dosimetry service. As an example, if the sum of doses from all components results in a probable effective dose greater than 5 mSv in a one-year dosimetry period, licensees should use CNSC-licensed dosimetry services, if available, to measure each dose component that is likely to contribute more than 1 mSv towards the total effective dose. If there is no licensed dosimetry technique available for a given dose pathway or the benefits of using the licensed dosimetry service outweigh the usefulness of the dose result, licensees should propose a method to estimate the doses received as part of their licence application. There is an expectation that non-licensed dosimetry methods are developed using quality requirements as described in CNSC regulatory document REGDOC-2.7.2, <em>Dosimetry, Volume I: Ascertaining Occupational Dose</em> (draft) [1].</p>   <p>Licensees who use a licensed dosimetry service are required to provide certain personal information to the licensed dosimetry service with respect to each NEW, including the worker&rsquo;s given names, surname and any previous surname; the worker&rsquo;s social insurance number; the worker&rsquo;s gender; the worker&rsquo;s job category; and the worker&rsquo;s date, province and country of birth. Where dose measurements are recorded by a licensed dosimetry service, records for NEWs are submitted to the National Dose Registry (NDR), along with this specific personal information. A dose to an individual that has been submitted to the NDR is commonly referred to as a "dose of record".</p>  <p>This specific personal information facilitates the transmission of dose information to the NDR by dosimetry services licensed by the CNSC. All of the information listed is required in order to avoid errors in the maintenance of occupational exposure records in the NDR.</p>  <p>The NDR is a database owned and operated by Health Canada, which tracks the lifetime dose history of registered individuals. Health Canada provides the CNSC with access to the NDR and informs the CNSC of any records indicating that a dose limit has been exceeded. Prompt identification of such records allows the CNSC to act immediately to ensure that licensees have taken appropriate actions. Access to the NDR allows the CNSC to gain information on trends of dose data for facilities or groups of facilities; detailed dose information for individuals and licensees; and necessary information for health studies, including epidemiological studies.</p>
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
<h2 id="sec9">9. Collection of Personal Information</h2>  <p>Section 9 of the Regulations requires that if a licensee collects personal information, as defined in section 3 of the <a href="http://laws-lois.justice.gc.ca/eng/acts/p-21/"><em>Privacy Act</em></a>, that may be required to be disclosed to the Commission, another government institution as defined in that section, or a dosimetry service, the licensee must inform the person to whom the information relates why it is being collected.</p>  <p>Although there are no specific requirements under the NSCA, any personal information collected as a result of the licensed activity is subject to protection under the <em>Privacy Act</em>.</p>
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
<h2 id="sec10">10. Obligations of Nuclear Energy Workers</h2>  <p>As per section 10 of the Regulations, every NEW must, on request by the licensee, inform the licensee of their given names, surname and any previous surname; social insurance number; gender; date, province and country of birth; and dose record for the current one-year and five-year dosimetry periods. This information provided by every NEW facilitates various obligations of the licensee under the Regulations.</p>  <p>The NEW&rsquo;s dose records may be obtained from the NDR with the individual&rsquo;s written permission. However, the information in the NDR may not contain information on doses received by the NEW outside of Canada or doses ascertained through estimation and dosimetry methods that are not licensed by the CNSC. For this reason, as a best practice, the licensee should also request information on any doses received by the NEW in the one-year and five-year dosimetry period that may not be included in the NDR, in order to take doses into consideration for optimization purposes.</p>  <p>The licensee uses the dose record for the current one-year and five-year dosimetry periods to properly control the worker&rsquo;s dose for the remainder of the one-year and five-year dosimetry period and ensure compliance with the regulatory dose limits provided in sections 13 and 14 of the Regulations. The radiation protection program should provide instructions for the use of this information, including related dose control measures. The radiation protection program should also specify restrictions on the work that may be conducted by the NEW until the complete dose record is obtained.</p>
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
<h2 id="sec11">11. Pregnant and Breastfeeding Nuclear Energy Workers</h2>  <p>Section 11 of the Regulations specifies the rights of pregnant and breastfeeding NEWs.</p>   <p>When a licensee is informed, in writing, that a NEW is pregnant or breastfeeding, the licensee is required to make any necessary accommodations or adaptations to the working conditions that will not cause undue financial hardship or business inconvenience.</p>
<h3>Accommodations for nuclear energy workers who are pregnant</h3>  <p>Once informed of a pregnancy, the licensee must ensure that the working conditions of the pregnant NEW will be such that her external exposures to, and intakes of, nuclear substances are kept ALARA and remain below the effective dose limit of 4 mSv for the balance of her pregnancy. Therefore, the licensee will need to review the pregnant NEW&rsquo;s work practices, including the nuclear substances handled, in order to identify where accommodations can be made to limit the radiological exposures of the pregnant NEW and by extension, of the embryo or fetus. Accommodations could include changes to work assignments that significantly reduce or eliminate the pregnant NEW&rsquo;s potential for radiological exposures. Other options could be the use of shielding, PPE, and respiratory protection by the pregnant NEW. The licensee should inform the pregnant NEW of the accommodations to be made, including if there is a need to apply more stringent work restrictions to ensure that the effective dose limit for the pregnant NEW is respected, and that the radiological exposure of the embryo or fetus during pregnancy is kept ALARA. Furthermore, the working conditions should be adapted so as to avoid any significant potential exposure due to accidents or other events that could result in high radiation doses received by the pregnant NEW from an external or internal exposure.</p>   <p>Special consideration should be given to situations where an intake of a nuclear substance by a pregnant NEW is possible. In these cases, it is important to be aware that some nuclear substances, if taken into the body of the pregnant NEW, may be absorbed more readily by the tissues of the placenta, resulting in a higher committed effective dose and/or equivalent dose to a sensitive organ of the embryo or fetus when compared to that of the pregnant NEW. The gestational age of the embryo and fetus will also influence the resultant dose received by it. For example, exposure of the pregnant NEW to volatile radioiodine (e.g. iodine-125 and iodine-131) could result in an internal dose to the pregnant NEW as well as an elevated equivalent dose to the fetal thyroid (because of fetal organ sensitivity). In addition to radioiodines, intakes of other nuclear substances by the pregnant NEW that may result in a higher committed effective dose and/or equivalent dose to an organ of an embryo or fetus include: tritiated water, carbon-14, sulfur-35 phosphorus-32, as well as isotopes of calcium and strontium. If the pregnant NEW&rsquo;s work activities involve any of these nuclear substances, additional steps should be taken to implement controls to completely avoid intakes to the extent possible. This may include more stringent work restrictions and possible cessation of work activities with these nuclear substances by the pregnant NEW. ICRP Publication 88, <em>Doses to the Embryo and Fetus from Intakes of Radionuclides by the Mother</em> [23], provides dose coefficients for the embryo and fetus, and can be consulted by licensees for calculating doses to a developing embryo or fetus from intakes of nuclear substances by a pregnant NEW. Licensees may use this information when preparing risk information to provide to pregnant NEWs pursuant to section 7 of the Regulations. Further, such dose calculations can be used to inform decisions on necessary accommodations and possible work restrictions for the pregnant NEW such that doses to the embryo or fetus remain ALARA for the duration of the pregnancy.</p>
<h3>Accommodations for nuclear energy workers who are breastfeeding</h3>  <p>A licensee that is informed by a NEW that she is breastfeeding must make necessary accommodations to the breastfeeding NEW&rsquo;s working conditions in order to limit intakes of nuclear substances by the breastfeeding NEW. The licensee will need to review the breastfeeding NEW&rsquo;s work practices, including the nuclear substances handled, when identifying accommodations to be taken to limit intakes of nuclear substances by the breastfeeding NEW. This will ensure that the dose to the breastfed infant remains ALARA. In assessing whether an intake by the NEW may result in a dose to the breastfed infant, the licensee should be aware that certain nuclear substances, when taken into the body, are more likely to become concentrated in breast milk and that the dose to the infant may be more elevated relative to the dose received by the breastfeeding NEW (for example, in the cases of tritiated water, sulfur-35, iodine-125 and iodine-131). Additional information on assessing the dose to a breastfed infant can be found in CNSC regulatory document REGDOC-2.7.2, <em>Dosimetry, Volume I: Ascertaining Occupational Dose</em> (draft) [1].</p>   <p>Accommodations made by the licensee to limit intakes of nuclear substances by the breastfeeding NEW could include changes to work assignments such that the potential for intakes is significantly reduced or eliminated. Other options could be the use of PPE and respiratory protection by the NEW. The licensee should inform the breastfeeding NEW of any accommodations to be made. In the event that an intake occurs, the licensee should assess the dose to the breastfeeding NEW and the resultant dose to the infant in the event that the NEW wants to continue to breastfeed. The licensee should advise the NEW of the associated risks of continuing to breastfeed and if necessary, make recommendations to stop breastfeeding for a period of time to ensure that the dose to the infant is kept ALARA. For work activities that do not have the potential for intakes of nuclear substances, no accommodations for a NEW who is breastfeeding would be required.</p>  <p>The duty to make accommodations for pregnant and breastfeeding NEWs is not meant to prevent the worker from entering or working in a designated radiation and/or contamination zone. Accommodations should, however, ensure that under normal operating conditions the dose is kept ALARA and that the dose limits are respected. The revised working conditions should also ensure that in the event of an accident or other event, any radiological exposure (internal or external) that could result in a dose above the dose limit is avoided.</p>   <p>The licensee will also need to identify if the pregnant or breastfeeding NEW needs further information and training as a result of any change of working conditions related to accommodations made pursuant to section 11 of the Regulations.</p>  <p>Once informed by a NEW that she is pregnant or breastfeeding, the licensee should also redefine the dosimetry monitoring program for the NEW. For example; a shorter monitoring period (i.e., a greater frequency) may be necessary in order to monitor and control radiological exposures, including possible inadvertent exposures to the NEW. A wearing period for an external dosimeter worn by a pregnant NEW should be chosen in consideration of the technical and performance specifications for the dosimeter type (e.g., minimum detection limit). An active dosimeter (i.e., a direct reading dosimeter [DRD]) may also be used to help control radiological exposures. Modification of the monitoring program for internal exposures may also be necessary for both pregnant and breastfeeding NEWs, especially in consideration of nuclear substances handled by the worker that may be of more relevance for a developing embryo, fetus, or infant.</p>
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
<h2 id="sec12">12. Interpretation of Radiation Dose Limits</h2>  <p>Section 12 of the Regulations specifies that for the purposes of sections 13 and 14, doses of radiation include those received from X-rays or other artificially produced sources of radiation. Therefore, a person&rsquo;s total dose, for the purposes of compliance with this requirement, must include any components received occupationally as X-rays or from any other artificially produced sources of ionizing radiation. Artificially produced sources refer to sources that are inherently tied to a CNSC-licensed facility/activity and to which the workers are exposed as a result of their occupation. Examples of licensees who would be affected include those who employ radiographers who also perform non-destructive testing using X-ray machines, and hospital staff in nuclear medicine departments who work with dual modality imaging devices and/or in proximity to radiology departments.</p>
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
<h2 id="sec13">13. Effective Dose Limits</h2>  <p>Section 13 of the Regulations establishes the effective dose limits for a NEW, a pregnant NEW and a person who is not a NEW.</p>  <p>The ICRP recommends that dose limits for workers should be set in such a way and at such a level that the total effective dose received by an individual during a full working life would not exceed about 1 sievert (Sv), received somewhat uniformly year by year, and that the application of the radiological protection system should be such that this lifetime dose (1 Sv over a full working life) would rarely be approached. Annual dose limits have historically been used as a means of managing exposures over time. In 1990, to allow for further flexibility, the International Commission on Radiological Protection (ICRP) introduced a limit for effective dose that applies over a period of five years, while retaining an annual limit. The objective of the five-year dosimetry period limit is to optimize worker exposures over the duration of their full working life. This general concept has been widely adopted by many nuclear regulators; that is, most regulators set an annual dose limit as well as a five-year dose limit.</p>  <p>It is the licensee&rsquo;s obligation to ensure that NEWs, persons who are not NEWs, and pregnant NEWs do not exceed the applicable effective dose limits in section 13 of the Regulations. When determining an individual&rsquo;s accrued dose for the purposes of comparing against the effective dose limits, previously assigned doses associated with exposure to ionizing radiation from activities not regulated under the NSCA and its regulations should also be taken into account by a licensee (as discussed in section 12). In addition, if it is determined that a worker is a NEW, the licensee must also consider doses that the NEW had received prior to the commencement of the work for the licensee in order to ensure that the licensee is managing the worker&rsquo;s dose below the effective dose limits. Licensees should obtain occupational dose information for NEWs who perform work (i.e., contractor personnel) at other facilities where they may have been exposed to ionizing radiation.</p>  <p>Effective dose is the sum of doses, measured in sieverts, received from external radiation exposures and committed doses from intakes of radioactive substances during the same time period. Effective dose limits are in place to reduce the risk of stochastic effects, which may lead to later effects or illness such as cancer. Stochastic effects are effects that occur by chance with a probability that is proportional to the dose magnitude.</p>  <p>In addition, reference should be made to section 1 of the Regulations, which specifies that the dose limit for the general public is 1 mSv per calendar year.</p>  <p>The five-year dosimetry period has been defined as a fixed period of five calendar years, at the end of which a new period begins. For example, the current five-year dosimetry period began on January 1, 2016 and will end on December 31, 2020, with a new five-year dosimetry period beginning on January 1, 2021.</p>  <p>There is flexibility in the Regulations, which allow for situations in which the end of a dosimeter-wearing period or a bioassay sampling period does not coincide with the end of a dosimetry period. A licensee may extend or reduce a dosimetry period by two weeks in order to align with the dosimeter-wearing period or bioassay sampling period. For example, a dosimetry period ending on December 31, 2020 may end as early as December 17, 2020 if a reduction by up to two weeks is needed, or may be extended to as late as January 14, 2021 if an extension is needed.</p>  <p>More detailed information on the concept of effective dose, including ascertaining effective doses, may be found in CNSC regulatory document REGDOC-2.7.2, <em>Radiation Protection: Dosimetry, Volume I: Ascertaining Occupational Dose</em> (draft) [1].</p>
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
<h2 id="sec14">14. Equivalent Dose Limits</h2>  <p>Section 14 of the Regulations establishes the equivalent dose limits for NEWs and any other person (i.e., a person who is not a NEW).</p>  <p>It is the licensee&rsquo;s obligation to ensure that NEWs and any other persons do not exceed the applicable equivalent dose limits in section 14 of the Regulations. When determining an individual&rsquo;s accrued dose for the purposes of comparing against the equivalent dose limits, previously assigned doses associated with exposure to ionizing radiation from activities not regulated under the NSCA and its regulations should also be taken into account by a licensee (as discussed in section 12). In addition, if it is determined that a worker is a NEW, the licensee must also consider doses that the NEW had received prior to the commencement of the work for the licensee in order to ensure that the licensee is managing the worker&rsquo;s dose below the equivalent dose limits. Licensees should obtain dose information for NEWs who perform work (i.e., contractor personnel) at other facilities where they may be exposed to ionizing radiation.</p>  <p>"Equivalent dose" means the product, in sievert, obtained by multiplying the absorbed dose by the weighting factor of a given type of radiation.</p>  <p>When living matter absorbs radiation, the radiation can produce a biological effect. Since different types of ionizing radiation vary in how they interact with biological materials, absorbed doses of equal value do not necessarily have equal biological effects. For example, a given quantity of alpha radiation is more harmful to tissue than the same quantity of beta radiation. This is because an alpha particle is more heavily charged and deposits its energy much more densely along its path.</p>  <p>A radiation weighting factor is used to equate different types of radiation with different levels of biological effectiveness. The concept of equivalent dose allows different types of ionizing radiation to be considered equally with respect to their potential to cause harm.</p>  <p>Equivalent dose limits are in place to avoid deterministic (threshold) effects. Equivalent doses, or doses to specific tissues or organs, are distinguished from effective or whole-body doses in order to account for the particular sensitivity of certain organs and body parts to radiation. Special dose limits are necessary to control radiation exposure to the lens of the eye, the skin of the hands and feet, and the skin of the whole body, since large overexposures to these parts of the body can lead to deterministic effects such as tissue reactions and organ dysfunction. Deterministic effects appear only above a certain threshold dose and increase in severity with increased dose. They are distinguished from stochastic effects, which have no known dose thresholds and whose severity is independent of the magnitude of the dose.</p>  <p>As the dose limits are set based on a deterministic effect, it is important to note that the dose limit for the skin of each hand and foot is for each individual hand and foot. Therefore, when assessing the dose to the skin of the left hand and the right hand, they should be treated as separate entities, with separate dose limits.</p>  <p>There is flexibility allowed in the Regulations for situations in which the end of a dosimeter-wearing period does not coincide with the end of a dosimetry period for equivalent dose limits. For example, a dosimetry period ending on December 31, 2020 may end as early as December 17, 2020 if a reduction by up to two weeks is needed, or may be extended to as late as January 14, 2021 if an extension is needed.</p>  <p>The Regulations also specify that when skin is unevenly irradiated, the equivalent dose received by the skin is the average equivalent dose over the 1 cm<sup>2</sup> area that received the highest equivalent dose.</p>  <p>More detailed information on the concept of equivalent dose, including ascertaining dose to the lens of the eye, the skin of the hands and feet, and the skin of the whole body, may be found in CNSC regulatory document REGDOC-2.7.2, <em>Dosimetry, Volume I: Ascertaining Occupational Dose</em> (draft) [1].</p>
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
<h2 id="sec15">15. Emergencies</h2>  <p>Section 15 of the Regulations details regulatory requirements related to exposures of persons who form part of the licensee&rsquo;s response organization during the control of an emergency.</p>  <p>CNSC regulatory document REGDOC-2.10.1, <em>Nuclear Emergency Preparedness and Response</em>, Version 2 [24], sets out the emergency preparedness requirements and guidance related to the development of emergency measures for licensees and licence applicants of Class I nuclear facilities and uranium mines and mills.</p>  <p>An emergency preparedness program establishes how nuclear facilities prepare for and plan to respond to emergencies (including nuclear or radiological emergencies), in order to protect workers, the public and the environment.</p>  <p>As part of the preparedness and response measures, licensees must establish an emergency response organization (ERO), which is defined as a group of inter-related responders who undertake the emergency response function during an emergency. Licensees should ensure that there is clarity on the roles and responsibilities and authorities of each position within the ERO. In addition, licensees must develop and document emergency radiation protection measures and provide training to individuals to ensure that they are qualified and able to fulfill their assigned emergency response role. Licensees&rsquo; responsibilities for providing information to workers regarding their role and responsibilities in an emergency are covered in more detail in section 7.</p>  <p>The management of exposures of workers who are part of emergency response organizations under the authority of the local jurisdiction, the province or a federal entity is outside the scope of the requirements of section 15 of the Regulations. Guidance values for restricting exposures of these emergency workers are addressed in Health Canada&rsquo;s <em>Generic Criteria and Operational Intervention Levels for Nuclear Emergency Planning and Response</em> [25].</p>  <p>It is expected that the dose limits specified in section 15 of the Regulations would only be applied when the control of an urgent situation cannot be managed within the dose limits prescribed in sections 13 and 14 of the Regulations.</p>  <p>If it is deemed necessary to declare an emergency, which requires the application of the dose limits specified in section 15 of the Regulations, it is important to note that the doses received during the control of the emergency situation are considered separate from doses received during normal planned exposure situations.</p>  <p>For the purposes of the emergency, a licensee who requests a person to participate in the control of an emergency must ensure that the person does not receive an effective dose greater than 50 mSv or an equivalent dose to the skin greater than 500 mSv for the duration of their participation in the control of the emergency unless that person is taking an emergency action described in Column 1 of the table to subsection 15(3) of the Regulations.</p>  <p>Action item 1 (actions to minimize dose consequences, for members of the public, associated with the release of radioactive material) may include taking actions to establish emergency management and operations; identifying, notifying and activating; assessing the initial phase; assisting in the implementation of urgent protective actions; and managing the medical response.</p>  <p>Action item 2 (actions to prevent health effects of radiation that are fatal or life-threatening, or that result in permanent injury) may involve, for example, action required by a worker to remove an injured or unconscious fellow worker from a very high-hazard area.</p>  <p>Action item 3 (actions to prevent the development of conditions that could significantly affect people and the environment) may include mitigating actions taken by the operator or first responder.</p>  <p>If a person takes emergency actions described in more than one item of the table to subsection 15(3) of the Regulations at the request of the licensee, the licensee must ensure that the effective dose received by that person does not exceed 500 mSv and that the equivalent dose to the skin received by that person does not exceed 5,000 mSv. In other words, the dose limits specified in this subsection are not to be considered cumulative under any circumstance.</p>  <p>Further, licensees must also limit effective dose and equivalent dose received by and committed to all persons participating in the control of an emergency by applying the ALARA principle, taking into account social and economic factors. Planning for such actions should be done as part of emergency preparedness and response as outlined in CNSC regulatory document REGDOC-2.10.1, <em>Nuclear Emergency Preparedness and Response</em>, Version 2 [24].</p>  <p>Licensees must notify the person who received a dose of radiation and the Commission as soon as feasible, in the event that the licensee becomes aware that any of the dose limits prescribed in section 15 of the Regulations may have been exceeded. This notification process should occur in a timely manner to ensure that necessary actions can be initiated to restrict further exposure of the individual in order to minimize any radiation-related health effects.</p>  <p>As per section 15 of the Regulations, licensees must not ask pregnant women to participate in the direct control of an emergency. This restriction extends to all pregnant women who may be involved in the control of an emergency, including emergency personnel and other workers who provide assistance during an emergency. The CNSC acknowledges that a pregnant worker may play an active role in aiding emergency response activities, but must not be subject to the dose limits prescribed in section 15 of the Regulations because of the potential risks to the developing embryo or fetus. It is possible in certain situations for a pregnant worker to contribute to the emergency response, but only from a remote, radiologically stable and safe location where she would continue to be subject to the dose limits prescribed in sections 13 and 14 of the Regulations.</p>   <p>A breastfeeding worker is not exempt from participating in the control of an emergency, but measures should be taken to ensure the protection of the breastfed infant. If there are internal radiological hazards that a breastfeeding worker may be exposed to as a result of the emergency response activities, the licensee should take action to limit the intakes of nuclear substances by the worker. Measures may include assignment of tasks that do not have the potential for internal exposures. When this is not possible, the licensee should provide protective equipment to limit the intakes of nuclear substances. Cessation of breastfeeding for a period of time may be required if the protective measures are not effective in limiting the potential exposure to the breastfed infant.</p>  <p>The dose limits prescribed by subsections 15(2) and (3), and sections 13 and 14 of the Regulations may be exceeded by a person acting voluntarily to save or protect human life.</p>  <p>Once the emergency is terminated, occupational exposures continue to be managed under the requirements of the licensee&rsquo;s radiation protection program and the dose limits prescribed in sections 13 and 14 of the Regulations. As a general principle, a worker should not be prevented from returning to future planned work because of doses received during an emergency. However, a case-by-case consideration for return to work may be required, and should take into account the magnitude of the doses received and any relevant medical advice, and may entail certain conditions as specified by the Commission.</p>
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
<h2 id="sec16">16. Exceedance of a Regulatory Dose Limit</h2>  <p>Section 16 of the Regulations specifies the actions that licensees must take upon becoming aware that an applicable dose limit as prescribed by section 13 or 14 of the Regulations has been exceeded.</p>  <p>A person who may have received an exposure in excess of a dose limit for a NEW must not perform work involving possible radiation exposure that would add to the dose in order to:</p>
<ul>
<li>allow for the investigation to be completed</li>
<li>avoid further exposures that could cause a risk to the individual</li>
</ul>  <p>The licensee cannot permit the person to return to their duties with the potential for occupational radiation exposure until the Commission or a designated officer authorized under paragraph 37(2)(h) of the NSCA formally authorizes the return to work pursuant to section 17 of the Regulations. Additional information on the authorization of the return to work of a person is found in section 17.</p>  <p>Paragraph 48(h) of the NSCA makes it an offence to terminate or vary the conditions of employment of a NEW who has received, or is committed to, a dose of radiation in excess of the regulatory limits, except in the prescribed manner. When a dose limit is exceeded, it may be accidental or it may be the result of some faulty practice on the part of the licensee or the NEW. When investigation reveals that the cause was accidental or the licensee was responsible, the NEW should not be subject to unjust economic penalties (i.e., terminated or placed on leave without compensation). When the investigation concludes that the cause was the result of a faulty practice of the NEW, the licensee should identify corrective actions that will address any human performance issues that the NEW may have before considering disciplinary action.</p>  <p>It is important to note that the requirement to remove the person from work only applies to situations in which the person may have exceeded a dose limit for a NEW.</p>  <p>When a dose limit has been exceeded, licensees must conduct an investigation to determine the magnitude of the dose and to establish the causes of the overexposure. The investigation into the magnitude of the dose will vary depending on the nature of the exposure: external, internal, skin contamination, and so on, and whether or not a dosimetry service licensed by the CNSC was used at the time of the event to ascertain the dose. If a licensed dosimetry service was not in use, a dose reconstruction will be necessary as part of the investigation into the magnitude of the dose.</p>  <p>If a dose reconstruction is required to determine the amount of radiation exposure due to a radiation source outside the person&rsquo;s body or due to skin contaminations, licensees should refer to CNSC regulatory document REGDOC-2.7.2, <em>Dosimetry, Volume I: Ascertaining Occupational Dose</em> (draft) [1], for guidance.</p>  <p>When investigating an internal dose resulting from a nuclear substance taken into the person&rsquo;s body, licensees should refer to CNSC regulatory document REGDOC-2.7.2, <em>Dosimetry, Volume I: Ascertaining Occupational Dose</em> (draft) [1], for guidance in collecting and handling radiobioassay samples, determining monitoring frequencies and other procedures to verify the magnitude of the dose.</p>  <p>Corrective actions may be required as a result of the investigation into the event. If the dose limit was exceeded, the objective is to identify and apply corrective actions that will prevent a reoccurrence to the same or a different person. Remedial measures may include identifying and correcting physical deficiencies in the workplace, revising procedures and retraining workers. If the investigation determines that the dose limit was not exceeded, and the CNSC agrees with this conclusion, the cause(s) that contributed to the event should be investigated and corrective actions should be proposed to address causes such as an inappropriate dosimeter storage location, inadequate worker training, improper dosimeter handling or human error.</p>  <p>The actions to be completed must be formally documented by the licensee and available for review by the Commission.</p>
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
<h2 id="sec17">17. Authorization of Return to Work</h2>  <p>Once the investigation required by section 16 of the Regulations is complete, the cause of the real or apparent dose limit exceedance has been investigated, and corrective actions have been implemented by the licensee to the satisfaction of the CNSC, the licensee must submit a written request to the CNSC for authorization of the return to work of a person, as per section 17 of the Regulations.</p>  <p>This written request should include a declaration that the person involved has been informed of the results of the investigation and, if a dose limit has been exceeded, of the risks associated with the exposure itself and with returning to work. The Commission or a designated officer authorized by the Commission will then consider authorizing the return to work of a person.</p>  <p>When the Commission or a designated officer authorizes the return to work of a person, the authorization may specify conditions to protect the health and safety of the person. Before a person is authorized to return to work, they may be subject to conditions including but not limited to:</p>
<ul>
<li>prorated dose limits for the remainder of the one-year and/or five-year dosimetry period</li>
<li>additional training requirements for workers</li>
<li>requirements for the licensee to modify work practices and/or possibly the method of dose control</li>
</ul>  <p>If the investigation reveals that an official dose record, which has been filed with the NDR, requires a change, the authorization of the return to work of a person will include a request that the dose change request be filed by a specified date. Further information on the requirements for making changes to dose-related information filed with the NDR may be found in CNSC regulatory document REGDOC-2.7.2, <em>Dosimetry, Volume I: Ascertaining Occupational Dose</em> (draft) [1].</p>
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
<h2 id="sec18">18. Application for a Licence to Operate a Dosimetry Service</h2>  <p>Section 18 of the Regulations lists the information that will form the basis for granting a CNSC licence to operate a dosimetry service. Licensees who operate their own dosimetry services will require a separate licence. A licensed dosimetry service will also need a nuclear substance licence for any radioactive sources it may possess.</p>  <p>Full details of the criteria for granting a dosimetry service licence can be found in CNSC regulatory document REGDOC-2.7.2, <em>Dosimetry, Volume II: Technical and Quality Management System Requirements for Dosimetry Services</em> (draft) [2].</p>
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
<h2 id="sec19">19. Obligations of Licensees</h2>  <p>Section 19 of the Regulations lists the data that a CNSC-licensed dosimetry service operator is obliged to submit to the NDR for the purpose of uniquely identifying each NEW for whom a dose of radiation has been measured and monitored. The service operator should assure the privacy of all personal information. Further information on this topic can be found in CNSC regulatory document REGDOC-2.7.2, <em>Dosimetry, Volume II: Technical and Quality Management System Requirements for Dosimetry Services</em> (draft) [2].</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="20"></div>
<h2 id="sec20">20. Labelling of Containers and Devices</h2>  <p>Section 20 of the Regulations outlines the requirements for the labelling of containers and devices containing nuclear substances in order to alert persons to the presence of a nuclear substance and the real or potential hazard that exists. The labelling is important because it alerts persons to the contents of the container or device, and by extension, to the associated risk.</p>  <p>Containers or devices that contain a nuclear substance must be labelled with the radiation warning symbol and the words "RAYONNEMENT &ndash; DANGER &ndash; RADIATION". The radiation warning symbol as set out in in Schedule 3 of the Regulations must be displayed, as further described in section 22. The following information must also be included on the label:</p>
<ol>
<li>The name of the nuclear substance is in standard nuclear notation (e.g., carbon-14, C-14, 14C); if there is more than one nuclear substance present, each must be identified.</li>
<li>Quantity should be in units of measure, such as activity (e.g., Becquerel (Bq)) or activity concentration (Bq/g), mass (g) or a mass unit (ppm)).</li>
<li>Date of measurement is the date upon which the quantity measurement was made.</li>
<li>Form is the chemical or physical form of the nuclear substance (solid, liquid or gas, special form, etc.).</li>
</ol>  <p>Labelling requirements do not apply if a container or device meets one or more of the following criteria:</p>
<ol>
<li><strong>It is an essential component of the operation of the nuclear facility at which it is located:</strong> An example of an essential component is a vessel or hopper that contains a nuclear substance as part of the operation of a nuclear facility (such as in a uranium mine or mill).</li>
<li><strong>It is used to hold radioactive nuclear substances for current or immediate use and is under the continuous direct observation of the licensee:</strong> As an example, in a laboratory setting, a nuclear substance may be transferred to / decanted into a smaller container while a worker conducts their work. This particular exemption allows for that type of use without the burden of having to label the container since there is unbroken and uninterrupted care and control. The container holding the decanted nuclear substance would have to be labelled once the worker discontinued their activity. The continuous direct observation of the licensee can be interpreted to mean the constant visual observation of the container or device by an appropriately trained worker.</li>
<li><strong>The quantity of radioactive nuclear substances is less than or equal to the exemption quantity:</strong> Containers and devices containing nuclear substances in quantities below the exemption quantities dictated in Schedule 1 of the <a href="http://laws-lois.justice.gc.ca/eng/regulations/SOR-2000-207/page-8.html#h-48"><em>Nuclear Substances and Radiation Devices Regulations</em></a> are exempt from labelling requirements.</li>
<li><strong>It is used exclusively for transporting radioactive nuclear substances and labelled in accordance with the <em>Packaging and Transport of Nuclear Substances Regulations, 2015</em>:</strong> Packages for transporting nuclear substances must be labelled, but in a manner specified in the <a href="http://laws-lois.justice.gc.ca/eng/regulations/SOR-2015-145/"><em>Packaging and Transport of Nuclear Substances Regulations, 2015</em></a>.</li>
<li><strong>The device is a radium luminous device, provided that a radium luminous compound is the only nuclear substance in the device and the device is intact and not tampered with:</strong> Persons possessing devices containing radium luminous compounds who are exempt from licensing requirements pursuant to the indefinite exemption granted by the Commission to paragraph 8(b) of the <a href="http://laws.justice.gc.ca/eng/regulations/sor-2000-207/page-1.html"><em>Nuclear Substances and Radiation Devices Regulations</em></a> are excepted from the requirements for labelling such devices.</li>
</ol>  <p>Paragraph 20(3) of the Regulations provides an exception to the requirements for labelling of containers that are used to temporarily store radioactive nuclear substances. This exception is particularly applicable to waste in active containers (i.e., those in use) where the waste is accumulating over time; the requirement to maintain up-to-date information on the container itself is a difficult task that is administratively burdensome and does not enhance safety. At all times, it remains important that waste containers in use continue to have the radiation warning symbol and the words "RAYONNEMENT &ndash; DANGER &ndash; RADIATION" to alert workers to the potential radiological hazards of the contents. When the waste container is full and destined for storage, the labelling requirements apply in full and ensure that the waste is managed and the details concerning the container waste are available for inclusion in the waste inventory. The licensee should set out in their program documents how waste is managed and how they will meet all of the requirements of section 20 of the Regulations, including any provisions to address the exception for containers temporarily storing nuclear substances. Generally, it is understood that "temporarily" in this context refers to a relatively short period of time, in the order of days.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="21"></div>
<h2 id="sec21">21. Posting of Signs at Boundaries and Points of Access</h2>  <p>Every licensee is required by section 21 of the Regulations to post and keep posted, at the boundary of and at every point of access to an area, room, vehicle or enclosure, a durable and legible sign that bears the radiation warning symbol set out in Schedule 3 (as described in section 22) and the words "RAYONNEMENT &ndash; DANGER &ndash; RADIATION", if there is a radioactive nuclear substance in a quantity greater than 100 times its exemption quantity in the area, room, vehicle or enclosure; or if there is a reasonable probability that a person in the area, room, vehicle or enclosure will be exposed to an effective dose rate greater than 25 &micro;Sv/h.</p>  <p>The words "RAYONNEMENT &ndash; DANGER &ndash; RADIATION" must be complete and must appear as indicated in the Regulations.</p>  <p>Exemption quantities are specified in Schedule 1 of the <a href="http://laws.justice.gc.ca/eng/regulations/sor-2000-207/page-1.html"><em>Nuclear Substances and Radiation Devices Regulations</em></a>.</p>  <p>Where areas, rooms or enclosures within a building are used to store or handle nuclear substances, signs should be prominently displayed on all access points/doors to these areas, rooms or enclosures, or alternatively, where they are visible immediately upon entry to the area, room or enclosure.</p>  <p>The interpretation of "dose rate greater than 25 &micro;Sv/h" should be that of effective dose rate, and should therefore exclude dose rate measurements made on contact with sources of radiation inside an area, room, vehicle or enclosure. The effective dose rate can be ascertained either by direct measurement or by estimation. If a direct measurement is taken, it should be at a working distance (no less than 30 cm) from the source of radiation, using a calibrated radiation survey meter, in any accessible space inside an area, room, vehicle or enclosure. In this instance, the operational quantity H*10 (used for the calibration of radiation survey meters) is used as a surrogate for effective dose rate. If the dose rate is ascertained by estimation, published effective dose rate constants (such as those found in the CNSC&rsquo;s <a href="/pubs_catalogue/uploads/Radionuclide-Information-Booklet-2016-eng.pdf">Radionuclide Information Booklet</a>) [26] should be used to calculate dose rates at working distances no smaller than 30 cm from the source of radiation in any accessible space inside the area, room, vehicle or enclosure.</p>  <p>Vehicles containing a consignment as defined by the <a href="http://laws-lois.justice.gc.ca/eng/regulations/SOR-2015-145/"><em>Packaging and Transport of Nuclear Substance Regulations, 2015</em></a> are exempt from the posting requirements dictated in section 21 of the Regulations. However, if a vehicle is not in transit but is used to store a nuclear substance, the regulatory requirement applies if the conditions stipulated for posting of signs exist.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="22"></div>
<h2 id="sec22">22. Use of the Radiation Warning Symbol</h2>  <p>Section 22 of the Regulations requires the radiation warning symbol as set out in Schedule 3 of the Regulations to be displayed. The three blades and the central disk of the symbol must be magenta or black, and located on a yellow background. When the radiation warning symbol (trefoil) set out in Schedule 3 is used, the Regulations require that it be fully visible, of a size appropriate for the size of the container or device to which it is affixed or attached, or the area, room or enclosure in respect of which it is posted, in the proportions depicted in Schedule 3, and oriented with one blade pointed downward and centred on the vertical axis. There must be no wording superimposed on it.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="23"></div>
<h2 id="sec23">23. Frivolous Posting</h2>  <p>Section 23 of the Regulations requires that no person post or keep posted a sign that indicates the presence of radiation, a nuclear substance or prescribed equipment at a place where the radiation, nuclear substance or prescribed equipment indicated on the sign is not present.</p>  <p>Signs must be removed when the radiological hazard is no longer present. However, it is not considered frivolous to post signs where there is a potential for contamination or radiation exposure (e.g., signs posted in areas in the proximity of X-ray facilities).</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="24"></div>
<h2 id="sec24">24. Records to be Kept by Licensees</h2>  <p>As per section 24 of the Regulations, every licensee must retain certain records in order to meet regulatory requirements. They include the name and job category of each NEW, and records of doses received by persons who perform duties in connection with any activity that is authorized by the NSCA or who are present at a place where that activity is carried on.</p>  <p>Licensees must ensure that the records are accurate and maintained. Dose records must be retained for a period of five years after the date that the information was collected. This retention period allows for the management and control of doses to persons in accordance with regulatory requirements, including for NEWs over the one-year and five-year dosimetry periods. This retention period also takes into consideration that doses to NEWs who use a licensed dosimetry service are also stored in the NDR. This registry is the most appropriate database for the retention of cumulative occupational dose records for future use (i.e., epidemiological studies, litigation).</p>  <p>In addition to meeting regulatory requirements, the maintenance and retention of dose records enables the licensee to evaluate the effectiveness of the radiation protection program and the effectiveness of the optimization process, and also enables them to identify trends in exposure. Further, the licensee can use this information to develop and improve upon their monitoring procedures and programs.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="25"></div>
<h2 id="sec25">25. Radiation Detection and Measurement Instrumentation</h2>  <p>Licensees are required by section 24.1 of the Regulations to ensure that instruments and equipment used for radiation measurements are appropriately selected, tested and calibrated for their intended use.</p>  <p>Instruments and equipment used for radiation measurements include those that are fixed and portable, automated or manual, multi-purpose or single purpose. For example, fixed and portable radiation survey meters may be used to perform radiation measurements to assess or confirm radiation fields at different locations or over large areas. Both fixed and portable contamination detection instruments may be needed to detect or assess radioactive contamination of equipment, premises or persons. As well, DRDs and air monitoring/sampling equipment may be used for radiation measurements in order to measure, estimate or control radiological exposures.</p>  <p>Radiation measurements are essential in order to assess, verify or demonstrate the credibility and effectiveness of a radiation protection program. Licensees must therefore ensure that properly calibrated instruments and equipment used for radiation measurements of appropriate design and function are conveniently available for use at locations where nuclear substances, radiation devices and/or prescribed equipment are stored, handled or used.</p>  <p>Instruments and equipment used for radiation measurements should be made available in sufficient types and numbers to accommodate the anticipated user demand. The quantities and types of instruments and equipment used for radiation measurements needed in a specific situation will depend on such factors as the type, forms, location, magnitude and extent of the type(s) of radiation. The quantities and types of instruments and equipment available should be adequate for anticipated needs in normal operations and emergencies, as well as during calibration, maintenance and repairs.</p>  <p>Instruments and equipment used for radiation measurements must be calibrated, serviced and operated in accordance with manufacturers&rsquo; specifications, CNSC licence conditions and CNSC regulatory requirements.</p>  <p>Defective or out-of-tolerance instruments should be identified and properly labelled, and corrective measures taken in a timely manner.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="25.1"></div>
<h3 id="sec25-1">25.1	Calibration of radiation survey meters and direct reading dosimeters</h3>  <p>The Regulations require that instruments and equipment used for radiation measurements be calibrated in order to assure persons that the unit is functioning properly and that the readings obtained are representative of the actual conditions. Additional regulatory requirements for having a calibrated radiation survey meter are specified in section 20 of the <a href="http://laws-lois.justice.gc.ca/eng/regulations/SOR-2000-207/page-4.html#h-26"><em>Nuclear Substances and Radiation Devices Regulations</em></a> and in subsection 18(1) of the <a href="http://laws-lois.justice.gc.ca/eng/regulations/SOR-2000-205/page-4.html#h-36"><em>Class II Nuclear Facilities and Prescribed Equipment Regulations</em></a>. Subparagraphs 30(3)(d)(iii) and (e)(iv) of the <a href="https://laws-lois.justice.gc.ca/eng/regulations/SOR-2000-207/page-5.html#docCont"><em>Nuclear Substances and Radiation Devices Regulations</em></a> specify additional requirements for the calibration of DRDs used by certified exposure device operators.</p>  <p>In order to ensure that the requirements of the regulations are met for having a radiation survey meter that is calibrated, calibrations must be carried out in accordance with the expectations set out in appendix D. The CNSC does not authorize, certify or licence persons to conduct radiation survey meter calibrations. It is the responsibility of the licensee to ensure that any person conducting a radiation survey meter calibration on their behalf can do so in accordance with CNSC regulatory requirements and the expectations outlined in appendix D. This should be performed using the licensee&rsquo;s contractor validation and verification process management system.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="25.2"></div>
<h3 id="sec25-2">25.2	Performance of contamination monitoring equipment</h3>  <p>The instruments, equipment and techniques used for contamination monitoring should be appropriate for the types, levels and energies of the radiation encountered. Instruments and equipment must be regularly maintained and tested (efficiency checked) for the prevailing environmental conditions and must be routinely tested for operability. A suitable contamination meter should be available wherever unsealed radioactive substances such as liquids and powders are in use. However, care must be taken to avoid the instrument coming into contact with potentially contaminated surfaces.</p>  <p>Even low levels of surface contamination may give rise to a risk of internal exposure. Contamination monitoring instruments have detection efficiencies ranging from 0 to 40% (at best) for different nuclear substances (excluding contributions from progeny in secular equilibrium<sup id="fnb4-ref"><a className="fn-lnk" href="#fnb4"><span className="wb-inv">Footnote </span>4</a></sup> ). Measurements must therefore be made using an efficiency-checked instrument with the best available predetermined detection efficiency for the radionuclide(s) of concern. The measurements, in counts per second, need to be converted to units of becquerels per square centimetre. Additional guidance is provided in appendix C.</p>  <p>When selecting contamination monitoring equipment, it should be noted that the sensitivity of the instrument increases with the surface area of the probe. Licensees should consult qualified experts as appropriate for advice in the selection of the monitoring equipment. Appendix C provides additional guidance on selection and functionality of contamination monitoring instruments and equipment.</p>  <p>Each instrument must be efficiency checked before the very first use, at regular intervals (i.e., annually) and after any repair that may have affected the instrument&rsquo;s performance. These tests should be conducted by qualified experts using traceable, uniformly contaminated planar sources with an active area of similar dimensions to the detector. The nuclear substance used should emit radiation similar to that of the potential contaminant. The objectives are:</p>
<ul>
<li>to determine the operating voltage for each detector, especially interchangeable probes; other electrical and mechanical features may also be tested</li>
<li>to obtain or confirm the detection efficiency of the instrument for each relevant radionuclide</li>
</ul>  <p>Using the detection efficiency, a response can then be provided to the user to convert the reading (in counts per second) to surface activity concentration (in becquerels per square centimetre). The linearity of response and inter-range differences may also be investigated. The instrument user should keep a certificate relating to the most recent formal test and should carry out routine checks on the instrument. The battery condition should be checked each time the instrument is used.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="AppA"></div>
<h2 id="appA">Appendix A: Guidance on the Provision of Radiation Protection Training by Work Group</h2>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="A.1"></div>
<h3 id="A.1">A.1 Management</h3>  <p>Licensees or their managers (in larger organizations) have the ultimate responsibility for ensuring worker safety. They should therefore have a good understanding of the NSCA and of any other legislation and regulations relevant to their licensed activities. They should also know the principles of radiation protection and safety culture, and understand their responsibility for managing radiological risks by implementing the ALARA principle.</p>  <p>Senior management should be trained in the risks associated with radiation, the basic principles of protection and safety, their main responsibilities regarding radiological risk management, and the principal elements of the radiation protection program.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="A.2"></div>
<h3 id="A.2">A.2 Radiation protection personnel</h3>  <p>Radiation protection personnel are responsible for ensuring the radiation protection of workers, and may be assisted by technical personnel responsible for performing specific tasks. All licensees, regardless of their size, will have someone responsible for radiation protection, licensing and compliance matters. These individuals should understand the NSCA, the applicable regulations made pursuant to the NSCA, and the conditions of the licence under which their activities are being carried out. Radiation protection personnel should also be well informed about the current radiation protection principles, methods and practices related to the licensed activity.</p>  <p>Training for radiation protection personnel should cover at least all topics associated with radiation protection at the level of detail required by their responsibility in ensuring the day-to-day safety of workers and of the public. Radiation protection personnel should also be trained in methods and techniques for controlling, using, handling, storing and disposing of nuclear substances and prescribed equipment, and for controlling, using or operating the applicable radiation devices and prescribed equipment. Training should cover the methods and techniques for monitoring radioactive contamination and supervising decontamination work, and for monitoring and controlling the radiation dose rates and radiation exposure of all workers.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="A.3"></div>
<h3 id="A.3">A.3 Nuclear energy workers</h3>  <p>NEWs are defined in the NSCA as persons having a reasonable probability of exceeding the annual regulatory effective dose limit of 1 mSv for a member of the public due to the nature of their work activities in connection to a CNSC-licensed activity or facility. In practical terms, NEWs are individuals who routinely use nuclear substances or operate radiation devices or prescribed equipment. As such, they are occupationally exposed to radiation and are closely monitored for the radiation dose they may receive.</p>  <p>NEWs generally require more extensive and specialized radiation protection training than workers who may only occasionally be exposed to radiation. The training objectives for these workers and the level of detail with which each topic should be covered depend on the licensed activity, the radiological hazards to which they may be exposed, the nature of their jobs and the associated tasks and responsibilities, and the difficulty, importance and frequency of those tasks. For example, workers operating an irradiation facility or involved in radiation therapy, whose duties involve the continuous use of nuclear substances or prescribed equipment, would likely need more extensive training than those who work in the vicinity of fixed nuclear gauges.</p>  <p>Where appropriate and safe, training for NEWs should include practical exercises and on-the-job-training. In some cases, NEWs should work under supervision for a period of time after training is completed, until they have acquired sufficient experience and self-confidence to independently perform their jobs safely and competently.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="A.4"></div>
<h3 id="A.4">A.4 General employees</h3>  <p>This group includes workers whose duties do not typically involve the direct use of nuclear substances, prescribed equipment or radiation devices, but who may occasionally go into areas where they could be exposed to radiation. Whether or not a worker can be classified as a general employee depends on several factors, including the frequency with which they may be required to enter areas where radiological hazards exist, the duration of their stay in those areas, the magnitude of potential exposure, and the level of supervision.</p>  <p>This group typically includes cleaning and maintenance staff; storage, shipping and receiving personnel; and administrative staff; and may include some categories of nurses, visitors and students. These workers should be provided with radiation awareness training that addresses the radiological hazards present in the workplace, the level of exposure they may receive, basic protective measures against radiation, and how to recognize radiation warning signs and symbols.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="A.5"></div>
<h3 id="A.5">A.5 Contractor personnel</h3>  <p>Some licensees outsource specific work to an outside contractor. Contractor personnel may include general labourers, technicians, consultants, and maintenance and security personnel. In all cases, radiation protection training for contractor personnel should be similar to that required by full-time personnel performing identical tasks, and should be commensurate with the radiological hazards to which they may be exposed. Previous training can be identified from the contractor personnel&rsquo;s documented experience and assessed through training program entry testing. If previous training is inadequate, the licensee should ensure that contractor personnel receive additional training appropriate to their duties, or should arrange for them to be directly supervised by suitably trained workers.</p>  <p>Some contractors may provide services that would require them to be defined as NEWs, and therefore guidance for provision of training for nuclear energy workers should be referred to.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="A.6"></div>
<h3 id="A.6">A.6 Visitors</h3>  <p>Individuals entering a licensed facility for brief periods of time, such as members of a visiting group, personnel of a delivery firm or messengers, are usually accompanied by an escort and normally should not need any radiation protection training. They should, however, be informed of the radiological hazards in the facility and the risk of accidental radiation exposures. For institutions such as hospitals and universities, where members of the public routinely have unescorted access, licensees should ensure that visitors entering controlled areas, such as nuclear medicine departments or laboratories using nuclear substances, are informed of any mandatory safety requirements.</p>  <p>Other individuals visiting a facility for longer periods than those described above, such as scientists and students, should undergo appropriate training similar to what is discussed in A.5.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="A.7"></div>
<h3 id="A.7">A.7 Emergency response personnel</h3>  <p>Emergency situations may occur at any licensed facility, and the potential radiological risk to workers, the public and the environment in emergency situations is directly proportional to the nature of the radiological hazards present.</p>  <p>During an emergency, there may be a need for the intervention of specialized personnel other than the licensee&rsquo;s workers, such as firefighters, police and medical personnel, and it is recognized that in some situations, emergency response personnel from outside organizations may not have received radiation protection training.</p>  <p>To ensure adequate preparedness of all parties, the CNSC recommends that the licensee liaise with emergency response personnel to coordinate the response capability and to provide information pertaining to provincial, territorial and federal health and safety regulations associated with the facility or the activities carried out therein. Emergency response personnel should at least be informed about the hazards they may encounter and the associated risks, and in the event of an emergency, should be accompanied and closely supervised by the licensee&rsquo;s radiation protection personnel while carrying out their response duties.</p>  <p>Further information on the provision of information to NEWs regarding their duties and responsibilities during an emergency is discussed in section 7.</p>  <p>Additional guidance on emergency preparedness and response at nuclear facilities may be found in CNSC regulatory document REGDOC-2.10.1, <em>Nuclear Emergency Preparedness and Response</em>, Version 2 [24].</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="AppB"></div>
<h2 id="appB">Appendix B: Guidance on Workplace Monitoring Programs</h2>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="B.1"></div>
<h3 id="B.1">B.1 Contamination control program</h3>  <p>Work with unsealed nuclear substances creates the potential for contamination of surfaces and persons. A contamination control program should be implemented as part of the radiation protection program to identify surface contamination and prevent the inadvertent transfer of such contamination.</p>  <p>In implementing a contamination control program, physical design features for controlling surface contamination at source is a very important element. The physical design features used in a contamination control program may include:</p>
<ul>
<li>specific design features aimed at containment of the nuclear substance to prevent it from causing surface contamination in the first place</li>
<li>ventilation systems aimed at preventing the buildup of surface contamination as a result of the settling of airborne particles</li>
</ul>  <p>Especially during non-routine work such as equipment maintenance, design features may be the primary methods of controlling workers&rsquo; internal exposures from inhalation of radionuclides in airborne particles. When the use of physical design features (including specific engineered controls) to restrict individual exposures is impractical or not sufficiently effective, administrative controls should be implemented. Such administrative controls might include restrictions on access to a contaminated area or the use of specific work practices designed to minimize contamination transfer.</p>  <p>Work in contaminated areas should be conducted in a manner that minimizes the spread of contamination to adjacent surfaces, to individuals in the area and to the workplace atmosphere. To control the spread of contamination and restrict individual exposures, a graded, multiple-tier system, such as a physical barrier or cordoning of the affected areas, should be used in and around contaminated areas.</p>  <p>Control of access to contaminated areas may be necessary to ensure that workers entering the area are informed of the radiological status and potential hazards and, if necessary, are provided with the appropriate protective equipment. Visual display of the levels of contamination and caution boards should be prominently displayed. Control of the workers&rsquo; exit from contaminated areas ensures that the nuclear substance is not inadvertently removed from the area by personnel or equipment. Efforts should be made to limit the degree of contamination and the size and number of contaminated areas within a facility.</p>
<h4>B.1.1	Contamination control limits</h4>  <p>Contamination control limits should be established in all areas/locations at a nuclear facility or site of a licensed activity where unsealed nuclear substances are handled, used or stored. Areas/locations should include clean areas (such as eating areas) as well as areas where work with nuclear substances or prescribed equipment is conducted. These areas should be monitored at regular intervals to ensure that the contamination present is below the established contamination control limits specified in the CNSC licence or documented in CNSC licensees&rsquo; radiation protection programs, as applicable. Additional guidance on classification of areas and access control is discussed in section 4.4.1.</p>  <p>Contamination control limits for each area or zone should be established based on the principles of isolating contamination at the source and maintaining levels of contamination ALARA. The contamination control limits for each area should be determined in consideration of the work activities to be conducted in the area, expected levels of contamination resulting from the activities, and PPE that is appropriate for use in the area. Areas with the highest contamination control limits should always be separated from the public domain by transitioning areas/zones with lower allowable limits. It is best practice to have a zero-tolerance policy for any detectable loose contamination; it should be cleaned up immediately upon detection.</p>  <p>Any surface contamination control limits for clean areas and release criteria chosen by a licensee must meet the definition of a conditional clearance level as defined in the <em>Nuclear Substances and Radiation Devices Regulations</em>. Demonstrating that a chosen surface contamination release criterion meets the definition of a conditional clearance level is the responsibility of the licensee, and may be done on a case-by-case basis. Alternatively, criteria in existing American National Standards Institute/Health Physics Society (ANSI/HPS) N13.12-2013, <em>Surface and Volume Radioactivity Standards for Clearance</em> [27] may be used that include surface contamination criteria conservatively derived based on an annual dose of 10 &micro;Sv to the most exposed person.</p>
<h4>B.1.2	Measurement and evaluation of surface contamination</h4>  <p>The instruments and techniques used for contamination measurement and evaluation should be appropriate for the types, levels and energies of the radiation encountered. Instruments should be regularly maintained and calibrated for the prevailing environmental conditions and should be routinely tested for operability. Additional information on performance requirements for contamination monitoring equipment is found in subsection 25.2. Guidance and requirements for monitoring for radioactive contamination is provided in appendix A.</p>
<h4>B.1.3	Personnel contamination monitoring</h4>  <p>Personnel contamination monitoring should be performed to keep radiation exposures ALARA. Personnel leaving contaminated areas should use appropriate radiation monitoring equipment to monitor their hands, feet and other areas suspected of being contaminated. Adequate decontamination facilities should be made available. To minimize the spread of contamination, licensees should provide washing facilities for all workers, and should allow sufficient time for each worker to use washing facilities before breaks and at the end of shifts. Exits from contaminated areas should include provisions to facilitate retention of contamination in the area and provisions for monitoring of individuals and the area to ensure control has been maintained. Any personal items carried into the area should be monitored for surface contamination.</p>  <p>No person should eat, drink, chew or smoke in working areas where nuclear substances could be ingested. Licensees should provide &ndash; at locations that are reasonably accessible to every worker &ndash; clean eating areas that are supplied with water, good-quality air and handwashing facilities to prevent the intake of nuclear substances.</p>
<h4>B.1.4	Personnel contamination monitoring equipment</h4>  <p>Portable contamination monitoring instruments, and/or stationary contamination monitoring equipment such as hand and foot and/or whole-body monitors, may be used to ensure that personnel are not contaminated. Appropriate and properly functioning contamination monitoring devices should be placed and used in strategic locations to ensure that persons are not contaminated, for example, prior to entering eating areas, at zone transitions or upon exiting licensed locations.</p>  <p>Additional information on performance requirements for contamination monitoring equipment is found in subsection 25.2.</p>
<h4>B.1.5	Decontamination of personnel and equipment</h4>  <p>Licensees should provide, as necessary, a dedicated area and decontamination agents for the decontamination of equipment and contaminated tools, and the means for cleaning contaminated areas of floors and walls. Cleaning agents should be selected based upon their effectiveness, hazardous properties, amount of waste generated, compatibility with the contaminated surface and other systems or items that may be contaminated (including protective clothing and waste handling systems), and ease of disposal.</p>  <p>Adequate decontamination facilities should also be made available if personnel contamination is detected. When skin or personal clothing contamination is detected, the responsible radiation protection personnel should be informed in order to ensure adequate characterization of the potential for significant skin dose by assessing the extent of the contamination, retaining samples of the contamination as necessary to perform a detailed dose assessment, and initiating decontamination procedures. Levels of contamination that trigger the need for dose assessments should be established for site-specific radionuclides; additional guidance may be found in CNSC regulatory document REGDOC-2.7.2, <em>Volume I, Dosimetry: Ascertaining Occupational Dose</em> (draft) [1]. Skin decontamination methods should be established for site-specific radionuclides.</p>  <p>Contaminated personal clothing should be decontaminated by laundering or other appropriate methods (such as holding for decay in the case of short-lived nuclear substances), monitored and returned to the owner or, if necessary, disposed of as radioactive waste.</p>  <p>Medical treatment of injuries takes precedence over radiological considerations. Emergency medical care should be administered immediately for injuries involving nuclear substances. The use of universal precautions (e.g., gloves, face mask) is generally sufficient for protecting medical personnel from any contamination transferred from the patient. Decontamination efforts should start immediately thereafter to minimize the potential uptake of soluble nuclear substances, which could lead to a radiation dose to the individual.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="B.2"></div>
<h3 id="B.2">B.2 Radiation dose rate monitoring and control</h3>  <p>The workplace monitoring program should include frequent radiation dose rate surveys to ensure radiation exposures are kept ALARA, commensurate with the radiological hazards present. Radiation dose rate surveys should be performed by qualified and trained individuals with appropriate and properly functioning and calibrated radiation detection instrumentation.</p>  <p>The radiation protection program should include the policy for a radiation dose rate monitoring and survey program that includes provisions for the following:</p>
<ul>
<li>routine monitoring (conducted to demonstrate that the working environment is satisfactory for continued operations and that no change has taken place that would call for a reassessment of operational procedures)</li>
<li>task-related monitoring (to supply information about a particular task or operation and to provide, if necessary, a basis for immediate decisions on the execution of the task)</li>
<li>special monitoring (such as during the commissioning stage for new facilities, following major modifications to either facilities or procedures, or when operations are being carried out under abnormal circumstances such as those following an incident or an accident)</li>
</ul>  <p>The description of the methods for monitoring and performing surveys, as well as the frequency, types and locations of the measurements to be performed should be documented in the radiation protection program.</p>  <p>Radiation dose rates above established control limits should be investigated and timely action should be taken to address unusual conditions.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="B.3"></div>
<h3 id="B.3">B.3 Airborne radioactivity monitoring and control</h3>  <p>To ensure that adequate methods for the control of airborne radioactive contamination are in place, a program for the air sampling and control of airborne contaminants should be formalized in the radiation protection program with the objective of ensuring adequate protection of workers against the inhalation of airborne contaminants. As part of this program, the following measures should be taken:</p>
<ul>
<li>The generation of airborne radioactive contaminants in operations should be reduced to the extent reasonably feasible by the use of appropriate techniques such as the use of water and other suppression techniques and the use of appropriate equipment. Extra care should be taken for work that involves the opening of any radioactive system, and during the welding, burning or grinding of any surfaces where there is a potential for loose or fixed contamination.</li>
<li>Where necessary and practicable, the source should be enclosed under negative air pressure.</li>
<li>Care should be taken to avoid the resuspension of dust or any loose contamination as a result of high air velocities.</li>
</ul>  <p>Workplace air sampling should be performed in work areas to monitor concentrations of radionuclides in workers&rsquo; breathing zones to ensure that concentrations remain ALARA. Use of workplace air sampling equipment includes the following elements:</p>
<ul>
<li>equipment located in an appropriate environment and position</li>
<li>quality control program</li>
<li>preventive maintenance program</li>
<li>appropriate minimum detection limits</li>
</ul>  <p>Performance specifications for airborne radioactivity monitoring instrumentation should be developed and documented in the radiation protection program. ANSI N42.17B-1989, <em>American National Standard Performance Specifications for Health Physics Instrumentation: Occupational Airborne Radioactivity Monitoring Instrumentation</em> [28] should be consulted for guiding principles.</p>  <p>Continuous air monitors (CAMs) can be used in areas where airborne radioactivity levels can fluctuate or change rapidly due to an upset condition or nature of the work activities being performed. If CAMs are used, they should also be appropriately deployed throughout the facility. For example, CAMs should be deployed in work areas to provide immediate feedback to those working in the areas. Requirements and guidance on the placement of CAMs to ensure their effectiveness should be established in the radiation protection program. Consideration should be given to CAM placement that is representative of the workers&rsquo; breathing zone, including in work areas, areas where protective equipment is removed by workers after work completion, and nearby areas where workers are not typically donning respiratory protection. The operation and maintenance of CAMs should be performed in accordance with the licensee&rsquo;s management system principles and requirements, which ensure that the systems are functioning as required. CAMs&rsquo; alarm set points should be set appropriately for the work areas and work activities where they are located.</p>  <p>Testing and calibration of all air monitoring instrumentation and associated components (such as rotameters and pumps) should be done at regular intervals depending on the conditions of use, or at least annually. Additional guidance may be found in section 25. In addition; ANSI/IEEE N323c-2009: <em>Radiation Protection Instrumentation Test and Calibration &ndash; Air Monitoring Instruments</em> [29], should be consulted for guiding principles.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="AppC"></div>
<h2 id="AppC">Appendix C: Monitoring for Radioactive Contamination</h2>  <p>This appendix provides general guidance for monitoring and controlling radioactive contamination and relating the monitoring results to contamination control limits specified in a CNSC licence or as documented in CNSC licensees&rsquo; radiation protection programs, as applicable. The appendix also provides guidance on contamination monitoring instrument selection.</p>  <p>Certain CNSC licences authorizing the use of unsealed nuclear substances contain a condition that states the regulatory criteria pertaining to radioactive contamination. Other types of licences do not contain licence conditions directly pertaining to surface contamination criteria. In these cases, appropriate criteria must be established and licensees should be prepared to provide justification for the values chosen (additional guidance on this topic may be found in appendix B.1.1).</p>  <p>The specified contamination criteria should be applied to all areas where unsealed nuclear substances are used and/or present, or have been used. Notwithstanding these limits, licensees should maintain levels of radioactive contamination ALARA.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="C.1"></div>
<h3 id="C.1">C.1 Method of measurement</h3>  <p>Radioactive contamination may be measured directly or indirectly. Direct measurement means the use of portable radiation detection instruments to detect both fixed and removable contamination. Direct measurement may be used when background radiation levels are negligible compared to licence criteria. Indirect measurement only detects removable contamination by means of a sampling program.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="C.2"></div>
<h3 id="C.2">C.2 Purpose of confirmatory contamination monitoring</h3>  <p>Confirmatory contamination monitoring such as weekly wipe tests are intended to confirm the results of routine direct and indirect monitoring ("operational monitoring") performed every time there is a risk of contamination. Operational monitoring is done to identify when contamination is generated and to limit the spread of contamination. The confirmatory monitoring is used to document and prove that the operational monitoring was successful.</p>  <p>The locations selected for confirmatory contamination monitoring should be numbered on a plan of the work area. These locations should include working surfaces (such as benches, countertops or fume hoods), storage areas and non-working surfaces (such as floors, instruments and equipment, door handles, light switches, sink taps and telephones). Several random locations should also be monitored. If the set of locations is too rigid, problem areas may be overlooked. A review of the list of locations should be conducted at a specific frequency to ensure that the list is current or determine whether new locations should be added as required.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="C.3"></div>
<h3 id="C.3">C.3 Instrument checks</h3>  <p>All instruments used for counting samples, such as liquid scintillation counters, well-type crystal gamma counters, gas-flow proportional counters, and semiconductor gamma spectrometers, should be routinely serviced according to the manufacturer&rsquo;s instructions. Licensees should keep a record of the servicing with the date. Before they are monitored for contamination, all instruments should be given operational checks as specified by the manufacturer, that is, battery check, high-voltage check and response check (i.e., source check), and the background radiation level should be measured.</p>  Instruments that are not operating within the parameters of operational checks, or that show anomalous background, blank or standard measurements, should not <p>be used until their proper operation can be verified. These instruments should be tagged indicating that they are out of service and should not be used until their proper operation can be verified.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="C.4"></div>
<h3 id="C.4">C.4 Frequency of confirmatory contamination monitoring</h3>  <p>Contamination monitoring frequencies should conform to the requirements indicated in the licensee&rsquo;s radiation protection program. When radioactive substances are not used for a prolonged period of time, contamination monitoring is not required, but such a period should be identified in the records.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="C.5"></div>
<h3 id="C.5">C.5 Decontamination</h3>  <p>Any area that is found to have non-fixed contamination exceeding the contamination criteria should typically be cleaned and monitored again. If the area cannot be cleaned to meet those criteria, the contaminated area must be sealed or shielded until the criteria are met or some other provisions are made to ensure the contamination remains contained.</p>  <p>Note: For short-lived radionuclides, the room or area may be posted with a radiation warning sign and secured until the radioisotope decays.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="C.6"></div>
<h3 id="C.6">C.6 Monitoring records</h3>  <p>Contamination monitoring records should include:</p>
<ul>
<li>date of measurement</li>
<li>name of the person performing the measurement</li>
<li>make and model of the instrument</li>
<li>monitoring locations</li>
<li>contamination monitoring results in Bq/cm<sup>2</sup> before and after decontamination, if applicable</li>
<li>results of operational checks and background measurements</li>
<li>standard measurement results</li>
<li>measured or predicted efficiency</li>
<li>recording and updating of instrument servicing records as necessary</li>
<li>demonstration that the chosen instrument and counting methods yield a minimum detectable activity below the applicable criteria</li>
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
<div id="C.7"></div>
<h3 id="C.7">C.7 Direct measurement of contamination using a portable meter</h3>  <p>Direct measurement instrument readings include both fixed and non-fixed contamination. Subsequently, a direct reading may be used to satisfy licence criteria for non-fixed contamination.</p>  <p>However, in cases where licensees have separate criteria for both fixed and removable contamination, swipes, followed by decontamination, followed by direct measurements, should be performed.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="C.8"></div>
<h3 id="C.8">C.8 Indirect measurement of contamination with wipes</h3>  <p>Perform the following steps for indirect measurements.</p>  <p>Wipe each of the locations shown on the plan of the working area with a filter paper, wipe or cotton swab lightly moistened with alcohol or water. Use one numbered wipe per location. If contamination is found, the contaminated area must be identified and decontaminated.</p>  <p>Wipe an area of 100 cm<sup>2</sup>. Using uniform and constant pressure, wipe the entire area. In situations where wipes of 100 cm<sup>2</sup> areas are not feasible, such as wipes of some equipment and light switches, take note of the area of the surface wiped and ensure the appropriate conversion factor is applied.</p>  <p>If necessary, carefully dry the wipe to prevent loss of activity. Since the contamination may be absorbed into the wipe material, the use of a wetting agent may lead to a significant underestimate of alpha and low-energy beta contamination with some counting methods.</p>  <p>Count the wipes in a low-background area and record all results.</p>  <p>If the wipes are to be counted on a contamination meter, the wipe should be smaller than or equal to the sensitive area of the detector. Note that the geometry of the wipe material (flat like filter paper or round like a swab) may change results.</p>  <p>Clean any contaminated areas and monitor again. record results before and after decontamination.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="C.9"></div>
<h3 id="C.9">C.9 Detector efficiency</h3>  <p>The detector efficiency depends upon:</p>
<ul>
<li>the type of detector (e.g., Geiger-M&uuml;ller, NaI scintillation, plastic/organic scintillation, proportional counter)</li>
<li>the detector size and shape</li>
<li>the distance from the detector to the radioactive material</li>
<li>the nuclear substance and type of radiation measured (alpha, beta and gamma radiations and their energies)</li>
<li>the backscatter of radiation toward the detector</li>
<li>the absorption of the radiation before it reaches the detector (by air, by the material itself, and by the detector covering)</li>
</ul>  <p>The detector efficiency can be determined by:</p>
<ul>
<li><p>counting an appropriate standard source of known activity with your detector, in counts per second (cps):</p>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<mtext>efficiency&#x00A0;=&#x00A0;</mtext><mfrac>
<mrow>
<mtext mathvariant="italic">detector&#x00A0;count&#x00A0;rate&#x00A0;-&#x00A0;background&#x00A0;count&#x00A0;rate</mtext></mrow>
<mrow>
<mtext mathvariant="italic">known&#x00A0;activity&#x00A0;of&#x00A0;standard&#x00A0;source</mtext></mrow>
</mfrac>
</mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaaeyzaiaabA
gacaqGMbGaaeyAaiaabogacaqGPbGaaeyzaiaab6gacaqGJbGaaeyE
aiaabccacaqG9aGaaeiiamaalaaabaGaaeizaiaabwgacaqG0bGaae
yzaiaabogacaqG0bGaae4BaiaabkhacaqGGaGaae4yaiaab+gacaqG
1bGaaeOBaiaabshacaqGGaGaaeOCaiaabggacaqG0bGaaeyzaiaabc
cacaqGTaGaaeiiaiaabkgacaqGHbGaae4yaiaabUgacaqGNbGaaeOC
aiaab+gacaqG1bGaaeOBaiaabsgacaqGGaGaae4yaiaab+gacaqG1b
GaaeOBaiaabshacaqGGaGaaeOCaiaabggacaqG0bGaaeyzaaqaaiaa
bUgacaqGUbGaae4BaiaabEhacaqGGaGaaeyyaiaabogacaqG0bGaae
yAaiaabAhacaqGPbGaaeiDaiaabMhacaqGGaGaae4BaiaabAgacaqG
GaGaae4CaiaabshacaqGHbGaaeOBaiaabsgacaqGHbGaaeOCaiaabs
gacaqGGaGaae4Caiaab+gacaqG1bGaaeOCaiaabogacaqGLbaaaaaa
@8414@
</annotation>   </semantics>  </math>
<li>referring to the documentation supplied by the vendor for your specific nuclear substance(s); if not specified, by contacting the vendor for the required information</li>
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
<div id="C.10"></div>
<h3 id="C.10">C.10 Relating measurement readings to contamination criteria</h3>  <p>The readings from contamination meters can be related to contamination criteria if the efficiency of the instrument for a specific nuclear substance is known.</p>  <p>For mixtures of nuclear substances, identify the isotope for which the detector has the lowest response at the applicable contamination limit. This can be done by multiplying the contamination limit (Bq/cm<sup>2</sup>) by the detector efficiency (counts/Bq) by the area measured (cm<sup>2</sup>).</p>  <p>The result will indicate the lowest count that would indicate the presence of contamination at the limit. The nuclear substance associated with the lowest count rate at the limit is the most restrictive when using that instrument. Combinations of instruments may be required to demonstrate compliance with the limits for nuclear substance mixtures.</p>  <p>Using the following equation, calculate the measurement results in Bq/cm<sup>2</sup>:</p>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<mtext>Removable&#x00A0;activity</mtext><mo>=</mo><mfrac>
<mrow>
<mi>N</mi><mo>&#x2212;</mo><mi>N</mi><mi>B</mi></mrow>
<mrow>
<mi>E</mi><mo>&#x00D7;</mo><mn>60</mn><mo>&#x00D7;</mo><mi>A</mi><mo>&#x00D7;</mo><mi>F</mi></mrow>
</mfrac>
</mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaaeOuaiaabw
gacaqGTbGaae4BaiaabAhacaqGHbGaaeOyaiaabYgacaqGLbGaaeii
aiaabggacaqGJbGaaeiDaiaabMgacaqG2bGaaeyAaiaabshacaqG5b
Gaeyypa0ZaaSaaaeaacaWGobGaeyOeI0IaamOtaiaadkeaaeaacaWG
fbGaey41aqRaaGOnaiaaicdacqGHxdaTcaWGbbGaey41aqRaamOraa
aaaaa@54E0@
</annotation>   </semantics>  </math>  <p>Where:</p>
<ol className="list-bullet-none">
<li>N =	total count rate in counts per minute (cpm) measured directly or on the wipe</li><br />
<li>NB = normal background count rate (in cpm) from a portable survey instrument or the count rate (in cpm) from measuring a blank wipe using a benchtop instrument</li><br />
<li>E = instrument efficiency factor (expressed as a decimal, i.e., for 5% efficiency, E=0.05) for the nuclear substance being measured. Consult the manufacturer or determine using a nuclear substance with a known amount of activity in a counting geometry similar to that used when surveying for contamination</li><br />
<li>60 = sec/min</li><br />
<li>A = area wiped (not to exceed 100 cm<sup>2</sup> with the exception of applying transport regulations) or open detector area in cm<sup>2</sup> (for direct measurement)</li><br />
<li>F = collection factor for the wipe (used only when calculating indirect wipe monitoring results). If F is not determined experimentally, a value of F=0.1 (i.e., 10%) must be used</li>
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
<div id="C.11"></div>
<h3 id="C.11">C.11 Minimum detectable activity</h3>  <p>The minimum detectable activity (MDA) is defined as the minimum amount of activity in a sample that can be detected with a 5% probability of erroneously detecting radioactivity when none is present, and, a 5% probability of not detecting radioactivity when it is present. For any given system designed to count and quantify radioactivity, the MDA must be calculated for the most restrictive scenario (e.g., for the nuclide that has lowest detection efficiency and most restrictive regulatory criterion). The units of the MDA (Bq, Bq/g, Bq/cm<sup>2</sup>) should be the same as those expressed in the licence or regulatory criterion, as applicable. The MDA, in Bq/cm<sup>2</sup>, can be calculated as follows:</p>  <math display=&#39;block&#39;>   <semantics>
<mrow>
<mi>M</mi><mi>D</mi><mi>A</mi><mo stretchy=&#39;false&#39;>(</mo><mi>B</mi><mi>q</mi><mo>/</mo><mi>c</mi><msup>
<mi>m</mi>
<mn>2</mn>
</msup>
<mo stretchy=&#39;false&#39;>)</mo><mo>=</mo><mfrac>
<mrow>
<mn>2.71</mn><mo>+</mo><mn>4.66</mn><msqrt>
<mrow>
<mi>N</mi><mi>B</mi><mo>&#x00D7;</mo><mrow><mo>[</mo> <mrow>
<mfrac>
<mi>T</mi>
<mrow>
<mn>60</mn></mrow>
</mfrac>
</mrow> <mo>]</mo></mrow></mrow>
</msqrt>
</mrow>
<mrow>
<mi>E</mi><mo>&#x00D7;</mo><mi>T</mi><mo>&#x00D7;</mo><mi>A</mi><mo>&#x00D7;</mo><mi>F</mi></mrow>
</mfrac>
</mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaamytaiaads
eacaWGbbGaaiikaiaadkeacaWGXbGaai4laiaadogacaWGTbWaaWba
aSqabeaacaaIYaaaaOGaaiykaiabg2da9maalaaabaGaaGOmaiaac6
cacaaI3aGaaGymaiabgUcaRiaaisdacaGGUaGaaGOnaiaaiAdadaGc
aaqaaiaad6eacaWGcbGaey41aq7aamWaaeaadaWcaaqaaiaadsfaae
aacaaI2aGaaGimaaaaaiaawUfacaGLDbaaaSqabaaakeaacaWGfbGa
ey41aqRaamivaiabgEna0kaadgeacqGHxdaTcaWGgbaaaaaa@5863@
</annotation>   </semantics>  </math>  <p>See section C.10 for the meaning of the terms NB, E, A and F. "T" is the counting time, in seconds, for indirect wipe monitoring, and is the instrument response time for direct measurements (or the actual time if performing scalar counting). The instrument response time will vary between instruments and is a parameter that can be selected by the user on some devices, that is, via either software selection of the actual time, or a "fast/slow" switch set to predefined times specified in the user manual. Other instruments may auto-select the response time based on the count rate. Longer response times will improve the MDA, but the instrument must stay stationary over each area for a period that is at least as long as the response time.</p>  <p>Note: The efficiency, and hence the MDA, of the instrument is highly dependent on the distance between the source and the detector. The MDA should be calculated for the distance at which the detector will be when monitoring.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="C.12"></div>
<h3 id="C.12">C.12 Reporting results with uncertainty</h3>  <p>All measured and reported results that are to be compared against a contamination criterion must be reported with their associated 2&sigma; uncertainty (i.e., 95% confidence). The 2&sigma; uncertainty can be calculated as follows for measurements reported in Bq/cm<sup>2</sup>:</p>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<mn>2</mn><mi>&#x03C3;</mi><msup>
<mrow>
<mtext>&#x00A0;uncertainty&#x00A0;(Bq/cm</mtext></mrow>
<mn>2</mn>
</msup>
<mo stretchy=&#39;false&#39;>)</mo><mo>=</mo><mo>&#x00B1;</mo><mn>2</mn><mo>&#x00D7;</mo><mfrac>
<mrow>
<msqrt>
<mrow>
<mi>N</mi><mo>&#x00D7;</mo><mrow><mo>[</mo> <mrow>
<mfrac>
<mi>T</mi>
<mrow>
<mn>60</mn></mrow>
</mfrac>
</mrow> <mo>]</mo></mrow><mo>+</mo><mi>N</mi><mi>B</mi><mo>&#x00D7;</mo><mrow><mo>[</mo> <mrow>
<mfrac>
<mi>T</mi>
<mrow>
<mn>60</mn></mrow>
</mfrac>
</mrow> <mo>]</mo></mrow></mrow>
</msqrt>
</mrow>
<mrow>
<mi>E</mi><mo>&#x00D7;</mo><mi>T</mi><mo>&#x00D7;</mo><mi>A</mi><mo>&#x00D7;</mo><mi>F</mi></mrow>
</mfrac>
</mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaaGOmaiabeo
8aZjaabccacaqG1bGaaeOBaiaabogacaqGLbGaaeOCaiaabshacaqG
HbGaaeyAaiaab6gacaqG0bGaaeyEaiaabccacaqGOaGaaeOqaiaabg
hacaqGVaGaae4yaiaab2gadaahaaWcbeqaaiaaikdaaaGccaGGPaGa
eyypa0JaeyySaeRaaGOmaiabgEna0oaalaaabaWaaOaaaeaacaWGob
Gaey41aq7aamWaaeaadaWcaaqaaiaadsfaaeaacaaI2aGaaGimaaaa
aiaawUfacaGLDbaacqGHRaWkcaWGobGaamOqaiabgEna0oaadmaaba
WaaSaaaeaacaWGubaabaGaaGOnaiaaicdaaaaacaGLBbGaayzxaaaa
leqaaaGcbaGaamyraiabgEna0kaadsfacqGHxdaTcaWGbbGaey41aq
RaamOraaaaaaa@6A3A@
</annotation>   </semantics>  </math>  <p>See section C.10 for the meaning of the terms N, NB, E, A, and F, and section C.11 for T, which is assumed to be the same value for both the background and sample.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="C.13"></div>
<h3 id="C.13">C.13 Instrument sensitivity</h3>  <p>Portable and benchtop contamination monitoring instruments must be capable of making reproducible measurements below any applicable contamination criteria. Licensees must be able to demonstrate that for the nuclear substance(s) of interest, the corresponding contamination criterion or limit can be detected using the proposed instrumentation. This requires determination of both the MDA for the detector and isotope of interest, and the uncertainty (2&sigma;). There are various methods for ensuring that the chosen counting time translates to an MDA that is sufficiently below the contamination criterion of interest.</p>  <p>The following are two examples of how to establish adequate instrument sensitivity for a given nuclear substance:</p>  <p>For conservatism, set the MDA at 0.5 times the applicable contamination criterion or limit:</p>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<mfrac>
<mrow>
<mn>2.71</mn><mo>+</mo><mn>4.66</mn><msqrt>
<mrow>
<mi>N</mi><mi>B</mi><mo>&#x00D7;</mo><mrow><mo>[</mo> <mrow>
<mfrac>
<mi>T</mi>
<mrow>
<mn>60</mn></mrow>
</mfrac>
</mrow> <mo>]</mo></mrow></mrow>
</msqrt>
</mrow>
<mrow>
<mi>E</mi><mo>&#x00D7;</mo><mi>T</mi><mo>&#x00D7;</mo><mi>A</mi><mo>&#x00D7;</mo><mi>F</mi></mrow>
</mfrac>
<mo>&#x2264;</mo><mn>0.5</mn><mo>&#x00D7;</mo><mtext>contamination&#x00A0;limit</mtext></mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaWaaSaaaeaaca
aI0aGaaiOlaiaaiEdacaaIXaGaey4kaSIaaGinaiaac6cacaaI2aGa
aGOnamaakaaabaGaamOtaiaadkeacqGHxdaTdaWadaqaamaalaaaba
GaamivaaqaaiaaiAdacaaIWaaaaaGaay5waiaaw2faaaWcbeaaaOqa
aiaadweacqGHxdaTcaWGubGaey41aqRaamyqaiabgEna0kaadAeaaa
GaeyizImQaaGimaiaac6cacaaI1aGaey41aqRaae4yaiaab+gacaqG
UbGaaeiDaiaabggacaqGTbGaaeyAaiaab6gacaqGHbGaaeiDaiaabM
gacaqGVbGaaeOBaiaabccacaqGSbGaaeyAaiaab2gacaqGPbGaaeiD
aaaa@65CB@
</annotation>   </semantics>  </math>
<p>Assume that a typical measurement near the applicable criterion is twice the background measurement (i.e., N = 2NB) and that the counting time T is identical for both:</p>  <math display=&#39;block&#39;>   <semantics>
<mrow>
<mfrac>
<mrow>
<mn>2.71</mn><mo>+</mo><mn>4.66</mn><msqrt>
<mrow>
<mi>N</mi><mi>B</mi><mo>&#x00D7;</mo><mrow><mo>[</mo> <mrow>
<mfrac>
<mi>T</mi>
<mrow>
<mn>60</mn></mrow>
</mfrac>
</mrow> <mo>]</mo></mrow></mrow>
</msqrt>
</mrow>
<mrow>
<mi>E</mi><mo>&#x00D7;</mo><mi>T</mi><mo>&#x00D7;</mo><mi>A</mi><mo>&#x00D7;</mo><mi>F</mi></mrow>
</mfrac>
<mo>+</mo><mn>2</mn><mfrac>
<mrow>
<msqrt>
<mrow>
<mn>3</mn><mi>N</mi><mi>B</mi><mo>&#x00D7;</mo><mrow><mo>[</mo> <mrow>
<mfrac>
<mi>T</mi>
<mrow>
<mn>60</mn></mrow>
</mfrac>
</mrow> <mo>]</mo></mrow></mrow>
</msqrt>
</mrow>
<mrow>
<mi>E</mi><mo>&#x00D7;</mo><mi>T</mi><mo>&#x00D7;</mo><mi>A</mi><mo>&#x00D7;</mo><mi>F</mi></mrow>
</mfrac>
<mo>&#x2264;</mo><mtext>contamination&#x00A0;limit</mtext></mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaWaaSaaaeaaca
aI0aGaaiOlaiaaiEdacaaIXaGaey4kaSIaaGinaiaac6cacaaI2aGa
aGOnamaakaaabaGaamOtaiaadkeacqGHxdaTdaWadaqaamaalaaaba
GaamivaaqaaiaaiAdacaaIWaaaaaGaay5waiaaw2faaaWcbeaaaOqa
aiaadweacqGHxdaTcaWGubGaey41aqRaamyqaiabgEna0kaadAeaaa
Gaey4kaSIaaGOmamaalaaabaWaaOaaaeaacaaIZaGaamOtaiaadkea
cqGHxdaTdaWadaqaamaalaaabaGaamivaaqaaiaaiAdacaaIWaaaaa
Gaay5waiaaw2faaaWcbeaaaOqaaiaadweacqGHxdaTcaWGubGaey41
aqRaamyqaiabgEna0kaadAeaaaGaeyizImQaae4yaiaab+gacaqGUb
GaaeiDaiaabggacaqGTbGaaeyAaiaab6gacaqGHbGaaeiDaiaabMga
caqGVbGaaeOBaiaabccacaqGSbGaaeyAaiaab2gacaqGPbGaaeiDaa
aa@7598@
</annotation>   </semantics>  </math>
<p>or:</p>  <math display=&#39;block&#39;>   <semantics>
<mrow>
<mfrac>
<mrow>
<mn>2.71</mn><mo>+</mo><mn>8.12</mn><msqrt>
<mrow>
<mi>N</mi><mi>B</mi><mo>&#x00D7;</mo><mrow><mo>[</mo> <mrow>
<mfrac>
<mi>T</mi>
<mrow>
<mn>60</mn></mrow>
</mfrac>
</mrow> <mo>]</mo></mrow></mrow>
</msqrt>
</mrow>
<mrow>
<mi>E</mi><mo>&#x00D7;</mo><mi>T</mi><mo>&#x00D7;</mo><mi>A</mi><mo>&#x00D7;</mo><mi>F</mi></mrow>
</mfrac>
<mo>&#x2264;</mo><mtext>contamination&#x00A0;limit</mtext></mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaWaaSaaaeaaca
aI0aGaaiOlaiaaiEdacaaIXaGaey4kaSIaaGioaiaac6cacaaIXaGa
aGOmamaakaaabaGaamOtaiaadkeacqGHxdaTdaWadaqaamaalaaaba
GaamivaaqaaiaaiAdacaaIWaaaaaGaay5waiaaw2faaaWcbeaaaOqa
aiaadweacqGHxdaTcaWGubGaey41aqRaamyqaiabgEna0kaadAeaaa
GaeyizImQaae4yaiaab+gacaqGUbGaaeiDaiaabggacaqGTbGaaeyA
aiaab6gacaqGHbGaaeiDaiaabMgacaqGVbGaaeOBaiaabccacaqGSb
GaaeyAaiaab2gacaqGPbGaaeiDaaaa@6184@
</annotation>   </semantics>  </math>
<p>See section C.10 for the meaning of the terms NB, E, A, and F, and section C.11 for T, which is assumed to be the same value for both the background and the sample.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="C.14"></div>
<h3 id="C.14">C.14 Selection of contamination monitoring instruments</h3>  <p>The MDA for a nuclear substance will depend on both the types and energies of radiation emitted by that nuclear substance, and on the type of detector used. In general, there are three basic detector design considerations that will impact instrument sensitivity, and each of these parameters will have a different impact, depending upon the type and energy of radiation being detected.</p>
<h4>C.14.1	Window thickness and composition</h4>  <p>Consideration should be given to whether the window density is small enough to allow the radiation emitted by source to enter the detector. This is critical for low-energy beta radiation and alpha radiation, which can be completely absorbed, even by materials as thin as a sheet of paper. Note that some isotopes, such as H-3 or Ni-63, cannot be detected by most instruments because the beta radiation they emit gets completely absorbed within the window. For such isotopes, indirect monitoring using liquid scintillation is generally the best choice.</p>
<h4>C.14.2	Detector density</h4>  <p>Every radiation detector functions by detecting interactions between the radiation and a material within the detector. There are two broad classes of detectors: gas-filled detectors, and solid or liquid scintillators. Gas-filled detectors, such as Geiger detectors and proportional counters, will generally work well for detecting alpha or beta radiation, since these types of radiation will cause interactions even in low-density materials. Conversely, gamma rays may readily pass through a low-density gas without interaction, especially at high energies. Solid scintillators, such as NaI detectors, are generally much better suited to detecting gamma radiation. Thin crystal detectors are suitable for low-energy gamma emitters such as Tc-99m, while thicker detectors will enhance sensitivity for high-energy gammas such as those from Cs-137 or Co-60.</p>
<h4>C.14.3	Detector output</h4>  <p>Every time radiation interacts with a detector, a tiny amount of energy is released within the detector. This energy is then converted into an electronic signal that can be measured. Some detectors, such as Geiger counters, produce uniform pulses, which can be counted. Other systems, such as scintillators or proportional counters, may produce a signal that is proportional to the amount of energy released in the initial radiation interaction. This can be used to distinguish between different types of radiation or different energies of radiation of the same type. Such detectors are useful in applications for which distinguishing between multiple different isotopes may be necessary.</p>
<p><strong>Table C.1: Sample table</strong></p>  <table className="">
<tr>
<th>Hand-held contamination monitoring instrument<sup>1</sup></th>
<th>Recommended applications<sup>2</sup></th>
</tr>
<tr>
<td>Thin-window G-M detector</td>
<td>Beta emitters, alpha emitters</td>
</tr>
<tr>
<td>Gas-filled proportional detector</td>
<td>Variable, refer to manufacturer&rsquo;s specifications</td>
</tr>
<tr>
<td>Thin-crystal sodium iodide scintillation detector</td>
<td>Low- energy gamma emitters (&lt;200 keV)</td>
</tr>
<tr>
<td>Thick-crystal sodium iodide scintillation detector</td>
<td>High-energy gamma emitters (&gt;200 keV)</td>
</tr>
<tr>
<td>Organic/plastic scintillation detector</td>
<td>Generally specifically designed for alpha and beta detection with low background. Gamma detection is variable; refer to manufacturer&rsquo;s specifications.</td>
</tr>
<tr>
<td>Zinc sulphide scintillation detector</td>
<td>Alpha emitters</td>
</tr>
<tr>
<td>Thick zinc sulphide scintillator with proprietary discrimination</td>
<td>Beta emitters, alpha emitters, gamma emitters</td>
</tr>
<tr>
<th>Non-portable monitoring instruments (wipe counters)</th>
<th>Recommended applications<sup>2</sup></th>
</tr>
<tr>
<td>Liquid scintillation counter</td>
<td>Alpha and beta wipe samples, especially for very low-energy beta emitters such as H-3, Ni-63, and C-14</td>
</tr>
<tr>
<td>Sodium iodide well counter</td>
<td>Gamma wipe samples, allows for spectroscopic analysis of different isotopes if multiple isotopes are being used</td>
</tr>
<tr>
<td>Gas-flow proportional counter</td>
<td>Alpha and beta wipe samples</td>
</tr>
<tr>
<td>Semiconductor gamma spectrometer (High-purity germanium)</td>
<td>Gamma wipe samples, allows for high-resolution spectroscopic analysis of different isotopes if multiple isotopes are being used</td>
</tr>  </table>  <p><sup>1</sup>&nbsp;Ion chambers are another major type of portable detector. These devices are intended for measurement of radiation dose rates rather than contamination. In general, they are poorly suited to contamination monitoring and should not be used for this purpose.</p>  <p><sup>2</sup>&nbsp;Nuclear substances that decay via emission of alpha or beta particles often also emit gamma rays. Many isotopes, especially high atomic number materials such as uranium and radium, may exist in equilibrium with the other isotopes in their "decay chain", which in turn emit many different types and energies of radiation. When choosing a contamination monitor, it is important to consider exactly what types of radiation will be present. For example, positron emission tomography (PET) isotopes decay by the emission of a positron (beta+), which in turn produces two high-energy (511 keV) gamma rays. It is the gamma rays that are of primary importance in the use of these isotopes, and a thick crystal NaI scintillator will detect these gammas very efficiently. However, a thin-window Geiger detector will detect the beta+ emissions even more efficiently, and will generally have a much lower background (NB) count rate.</p>  <p>For further information on nuclide-specific instrument selection, see the CNSC&rsquo;s <a href="/pubs_catalogue/uploads/Radionuclide-Information-Booklet-2016-eng.pdf"><em>Radionuclide Information Booklet</em></a> [26].</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="AppD"></div>
<h2 id="AppD">Appendix D: Calibration of Radiation Survey Meters and Direct Reading Dosimeters</h2>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="D.1"></div>
<h3 id="D.1">D.1 Calibration procedure documentation</h3>  <p>To ensure the calibration of the radiation survey meter is done correctly and consistently, a documented calibration procedure includes:</p>
<ul>
<li>a general description of the method of calibration</li>
<li>an identification and proof of verification of uncertainties associated with the jig, the exposure or air kerma (Ka) reference rate, the source activity, the attenuators, and the decay correction that are associated with the total uncertainty of the calibration</li>
<li>step-by-step procedures, preferably including manufacturers&rsquo; manuals, to show that sufficient information about the radiation survey meter is available to operate, to perform pre-calibration checks and to calibrate the radiation survey meter</li>
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
<div id="D.2"></div>
<h3 id="D.2">D.2 Radiation survey meter pre-calibration check</h3>  <p>The pre-calibration check of the radiation survey meter consists of:</p>
<ul>
<li>a battery check to ensure a satisfactory voltage as per the manufacturer&rsquo;s specifications (as applicable) can be maintained throughout the calibration</li>
<li>a verification of operating voltage as applicable</li>
<li>a comprehensive functional check on all ranges of the radiation survey meter as applicable</li>
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
<div id="D.3"></div>
<h3 id="D.3">D.3 Physical and environmental expectations for jigs and radiation survey meters</h3>  <p>For the calibration to be accurate, the beam calibrator jig and the device are configured in the following manner:</p>
<ol>
<li>To minimize radiation scatter, the jig is at least 1 metre (m) from the floor, the ceiling and any wall.</li>
<li>The distance between any scattering object and the source is at least 0.5 m:
<ol className="list-lower-alpha">
<li>in an area free of interference from sources of ionizing radiation other than the calibration source, and</li>
<li>in an area where electrostatic, electrical and magnetic fields and other non-ionizing radiation, such as radio frequency and microwave, will not affect instrument response.</li>
</ol></li>
<li>The device to be calibrated:
<ol className="list-lower-alpha">
<li>is positioned on the jig to minimize bias due to geotropism, directional dependence, and non-uniformity of the source radiation beam across and through the detector volume,</li>
<li>has any beta window or shield in the optimum position (normally closed) for best (i.e., flattest) energy response, and</li>
<li>in the case of a direct reading dosimeter (DRD), is placed on a torso phantom (30 cm x 30 cm x 15 cm) to be consistent with the intended application of the dosimeter.</li>
</ol></li>
<li>The uncertainty in calibration distance cannot be greater than 2% and is the quadratic sum of the uncertainty of the jig distance scale, the uncertainty in physical placement and repositioning of the radiation survey meter, the uncertainty in location of the source centre when on the jig, and the uncertainty of the centre of the sensitive volume of the radiation survey meter detector.</li>
<li>The calibration is carried out where the level of background radiation is known and the appropriate corrections are made to compensate for the contribution from this potential source of error. This is particularly important when measuring at the lowest ranges on the radiation survey meter.</li>
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
<div id="D.4"></div>
<h3 id="D.4">D.4 Expectations for calibration sources</h3>  <p>It is preferable to use the same reference isotope as the manufacturer for the calibration source, especially if the manufacturer&#39;s specified energy response is to be assumed. Whatever isotope is used, the energy dependence of the dose rate response of the device to be calibrated must be known and be within 30% of the true dose rate over the energy spectrum of interest.</p>  <p>If the conventionally true dose rate is established directly from a source activity, the calibration source activity must be known to an uncertainty of not greater than &plusmn; 10%. This uncertainty includes attenuators (used singly or in combination) if they are an integral part of the source assembly. The calibration source must be traceable through a source supplier to a national or international standard, and the calibration source activity must be corrected for decay at a frequency to ensure its activity is within 1% of its specified value. Conventionally true doses of radiation can be established using the following dose rate conversion factors from a known source activity.</p>  <p><strong>Table D.1: Air kerma, exposure and dose conversion factors per MBq (point source) at 1 metre</strong></p>  <table className="table table-striped">
<tr>
<th className="text-center">Isotope</th>
<th className="text-center">Air kerma (Ka)<br /> Gy/h</th>
<th className="text-center">Exposure (Roentgens)<br /> R/h</th>
<th>Effective dose (E) anterior-posterior geometry<br /> Sv/h</th>
<th>Ambient dose equivalent (H*10) Sv/h</th>
<th>Personal dose equivalent (Hp10) Sv/h</th>
</tr>
<tr>
<td className="text-center">Cs-137</td>
<td className="text-center">7.699E-08</td>
<td className="text-center">8.789E-06</td>
<td className="text-center">7.789E-08</td>
<td className="text-center">9.268E-08</td>
<td className="text-center">9.353E-08</td>
</tr>
<tr>
<td className="text-center">Co-60</td>
<td className="text-center">3.055E-07</td>
<td className="text-center">3.487E-05</td>
<td className="text-center">3.045E-07</td>
<td className="text-center">3.543E-07</td>
<td className="text-center">3.521E-07</td>
</tr>  </table>
<p>Note: Air kerma and effective dose calculated based on the International Commission on Radiological Protection&rsquo;s (ICRP) fluence-to-dose conversion coefficients (linearly interpolated when necessary) provided in ICRP Publication 116, <em>Conversion Coefficients for Radiological Protection Quantities for External Radiation Exposures</em> [30]. Fluence was calculated based on the photon energies and probabilities obtained from the Nuclear Energy Agency&rsquo;s (NEA) <em>Joint Evaluated Fission and Fusion File</em> (JEFF) 3.1 nuclide library [31]. All photon emissions above 15 keV with a probability above 0.01% were considered in the calculation. Operational quantities calculated based on the air-kerma-to-dose conversion coefficients (linearly interpolated when necessary) provided in ICRP Publication 74, <em>Conversion Coefficients for use in Radiological Protection against External Radiation</em> [32].</p>   <p>If the conventionally true dose rate is established using a measurement of exposure or air kerma rate, a calibration certificate must be available for any transfer standards (e.g., ion chamber and electrometer) used to make the measurement. Exposure rates (R/h) are converted to air kerma rates (Gy/h) using the following conversion: 1 R = 0.00876 Gy. Air kerma rates are then converted to the operational quantities H*10 for the purposes of calibrating gamma dose rate meters and Hp10 for the purposes of calibrating electronic DRDs measuring deep gamma dose using the following conversion factors:</p>  <p>Cs-137: H*10: 1.204 Sv/Gy, Hp10: 1.215 Sv/Gy</p>  <p>Co-60: H*10: 1.160 Sv/Gy, Hp10: 1.153 Sv/Gy</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="D.5"></div>
<h3 id="D.5">D.5 Expectations for radiation survey meter calibration</h3>  <p>Each radiation survey meter is calibrated up to its highest range. The manufacturer&rsquo;s recommended calibration method, if any, is followed, and the calibration is verified at approximately 20 to 25% and 75 to 80% of the measurement of each range. For auto-ranging meters, the calibration is verified at a minimum of one dose rate per decade throughout the meter&rsquo;s entire operating dose rate range. Meters cannot be placed at a distance smaller than 0.5 m from the source of radiation.</p>  <p>When possible, dose rates measured using survey meters are performed using a scaler function, with a minimum integration time of 60 seconds. When scaler functions are not available, the meter can be exposed for 60 seconds in the beam, followed by another 60-second exposure where readings are observed remotely, with the highest and lowest dose rate readings noted. The measured dose rate reading is the average of both readings.</p>  <p>Measurements are recorded before and after any necessary (or preferred) calibration adjustments. A survey meter meets the criteria for calibration when each observed measurement is within &plusmn; 20% of the conventionally true dose rate.</p>  <p>If dose rates cannot be delivered throughout a meter&rsquo;s entire range, this limitation is clearly stipulated on the calibration certificate with the maximum calibrated dose rate displayed on the calibration sticker. However, each range must be checked to ensure response and, as far as practicable, by decreasing the calibration distance and confirming the increasing dose rate response.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="D.6"></div>
<h3 id="D.6">D.6 Expectations for direct reading dosimeter calibration</h3>  <p>For each dose measurement made using a direct reading dosimeter (DRD), the exposure time in the beam is a minimum of 60 seconds. Measurements are recorded before and after any necessary (or preferred) calibration adjustments. A DRD meets the criteria for calibration when each observed measurement is within &plusmn; 20% of the conventionally true dose rate.</p>  <p>Dose measurements are made at dose rates that are equivalent to 0.01%, 0.1%, 1% and 10% of the manufacturer&rsquo;s specified maximum dose rate, up to the highest dose rates that can be achieved at a distance no smaller than 0.5 m from the calibration source.</p>  <p>For pencil-type ion chamber DRDs, a single dose delivered between 20% and 80% of the measurement dose range at any dose rate is considered adequate. If so equipped, the alarm features of DRDs (e.g., for dose rate and cumulative dose levels) are verified to operate at the required alarm set points.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="D.7"></div>
<h3 id="D.7">D.7 Expectations for record completion</h3>  <p>Following calibration, the person performing the calibration must complete a calibration certificate, and complete and affix to the radiation survey meter a durable calibration sticker bearing the date of calibration. The person conducting the calibration must return the original certificate with the radiation survey meter to the user.</p>  <p>If a radiation survey meter fails to meet the criteria for calibration, the person conducting the calibration must immediately notify the person who requested the calibration.</p>  <p>If requested to do so, the person conducting the calibration may, if qualified through training or other certification, repair a radiation survey meter before returning it to the user. Subsequent to any repair that exceeds the manufacturer&rsquo;s instructions for normal maintenance, a radiation survey meter must be recalibrated.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="D.8"></div>
<h3 id="D.8">D.8 Documentation of calibration</h3>  <p>In order to meet regulatory requirements, licensees must make available a document for each radiation survey meter that includes the following information:</p>
<ol>
<li>licensee name and CNSC licence number</li>
<li>radiation survey meter make and model, including serial number of the detector unit and the probe used in the calibration, if appropriate</li>
<li>the calibration source used, including isotope and activity</li>
<li>the results of the calibration, including:
<ol className="list-lower-alpha">
<li>battery condition</li>
<li>operating voltage</li>
<li>temperature, pressure and humidity, at the time of calibration</li>
<li>results for each range calibrated in the range on the radiation survey meter that was calibrated</li>
<li>the conventionally true dose rate using the calibration device with the total uncertainty</li>
<li>the observed dose rate on the radiation survey meter, with units, including both pre- and post- calibration</li>
<li>the calculated percent variance of the observed dose rate versus expected dose rate</li>
<li>any notes of concerns or anomalies for that range</li>
<li>any notes of anomalies or problems associated with the calibration of the radiation survey meter in general</li>
<li>the date of the calibration of the radiation survey meter</li>
<li>the name and signature of the person who conducted the calibration</li>
<li>acknowledgement that the calibration was carried out in accordance with these requirements</li>
</ol></li>
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
<div id="D.9"></div>
<h3 id="D.9">D.9 Maintenance of records</h3>  <p>The licensee must retain a record of each radiation survey meter calibration as required by the NSCA and regulations, and must retain those records for the period specified in the licence or the regulations, as appropriate.</p>
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
<h2 id="glossary">Glossary</h2>  <p>For definitions of terms used in this document, see <a href="/pubs_catalogue/uploads/REGDOC-3-6-Glossary-of-CNSC-Terminology-eng.pdf">REGDOC-3.6, <em>Glossary of CNSC Terminology</em></a>, which includes terms and definitions used in the <a href="http://laws-lois.justice.gc.ca/eng/acts/N-28.3/"><em>Nuclear Safety and Control Act</em></a> (NSCA) and the regulations made under it, and in CNSC regulatory documents and other publications. REGDOC-3.6 is provided for reference and information.</p>
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
<h2 id="ref">References</h2>  <p>Note: The references for the draft documents listed below will be updated prior the publication of REGDOC-2.7.1.</p>  <ol>
<li>Canadian Nuclear Safety Commission (CNSC), REGDOC-2.7.2, Volume I, <em>Ascertaining Occupation Dose</em> (draft). (Public consultation is running concurrently with REGDOC-2.7.1. See the <a href="/eng/acts-and-regulations/regulatory-documents/index">CNSC&#39;s website</a> for more details.)</li>
<li>CNSC, REGDOC-2.7.2, Volume II, <em>Technical and Quality Management System Requirements for Dosimetry Services</em>, is expected to be published in early Spring 2019. See the <a href="/eng/acts-and-regulations/regulatory-documents/index">CNSC&#39;s website</a> for more details.</li>
<li>CNSC, <a href="/eng/acts-and-regulations/regulatory-documents/published/html/regdoc2-9-1-new-v1.1/index">REGDOC-2.9.1, <em>Environmental Principles, Assessments and Protection Measures</em></a>, version 1.1, Ottawa, 2017.</li>
<li>International Commission on Radiological Protection (ICRP) Publication 103, <a href="http://www.icrp.org/publication.asp?id=ICRP%20Publication%20103"><em>The 2007 Recommendations of the International Commission on Radiological Protection</em></a>, Annals of the ICRP, Vol. 37, Nos. 2&ndash;4, 2007.</li>
<li>CNSC, <a href="/eng/acts-and-regulations/regulatory-documents/published/html/regdoc1-6-1-v2/index">REGDOC-1.6.1, <em>Licence Application Guide: Nuclear Substances and Radiation Devices</em></a>, Ottawa, 2017.</li>
<li>CNSC, REGDOC-1.4.1, <em>Licence Application Guide: Class II Nuclear Facilities and Prescribed Equipment</em> (draft), Ottawa. Publication is expected Spring 2019.</li>
<li>CNSC, <a href="/eng/acts-and-regulations/regulatory-documents/published/html/rdgd369/index">RD/GD-369, <em>Licence Application Guide: Licence to Construct a Nuclear Power Plant</em></a>, Ottawa, 2011.</li>
<li>CNSC, <a href="/eng/acts-and-regulations/regulatory-documents/published/html/regdoc1-1-3/index">REGDOC-1.1.3, <em>Licence Application Guide: Licence to Operate a Nuclear Power Plant</em></a>, Ottawa, 2017.</li>
<li>CNSC, <a href="/eng/acts-and-regulations/regulatory-documents/published/html/regdoc2-1-2/index">REGDOC-2.1.2, <em>Safety Culture</em></a>, Ottawa, 2018.</li>
<li>International Commission on Radiological Protection (ICRP), Publication 101b, <em>The Optimisation of Radiological Protection: Broadening the Process</em>, Annals of the ICRP, Vol. 36, No. 3, 2006.</li>
<li>International Atomic Energy Agency (IAEA), Safety Reports Series No. 21, <a href="https://www-pub.iaea.org/books/iaeabooks/6288/Optimization-of-Radiation-Protection-in-the-Control-of-Occupational-Exposure"><em>Optimization of Radiation Protection in the Control of Occupational Exposure</em></a>, Vienna, 2002.</li>
<li>ICRP Publication 55, <em>Optimization and Decision-Making in Radiological Protection</em>, Annals of the ICRP, Vol. 20, No. 1, 1990.</li>
<li>CNSC, <a href="/eng/acts-and-regulations/regulatory-documents/published/html/regdoc2-2-3/index">REGDOC-2.2.3, <em>Personnel Certification: Radiation Safety Officers</em></a>, Ottawa, 2014.</li>
<li>CNSC, <a href="/pubs_catalogue/uploads/RD-204_e_PDF.pdf">RD-204, <em>Certification of Persons Working at Nuclear Power Plants</em></a>, Ottawa, 2008.</li>
<li>CNSC, <a href="/eng/acts-and-regulations/regulatory-documents/published/html/regdoc2-2-2-v2/index">REGDOC-2.2.2, <em>Personnel Training</em></a>, Version 2, Ottawa, 2016.</li>
<li>CNSC, <a href="/eng/acts-and-regulations/regulatory-documents/published/html/regdoc2-5-2/index">REGDOC-2.5.2, <em>Design of Reactor Facilities: Nuclear Power Plants</em></a>, Ottawa, 2014.</li>
<li>CNSC, <a href="/eng/acts-and-regulations/regulatory-documents/published/html/regdoc2-5-5/index">REGDOC-2.5.5, <em>Design of Industrial Radiography Installations</em></a>, Ottawa, 2018.</li>
<li>CNSC, <a href="http://suretenucleaire.gc.ca/eng/acts-and-regulations/regulatory-documents/published/html/gd52/">GD-52, <em>Design Guide for Nuclear Substance Laboratories and Nuclear Medicine Rooms</em></a>, Ottawa, 2010.</li>
<li>CNSC, <a href="/eng/acts-and-regulations/regulatory-documents/published/html/rd367/index">RD-367, <em>Design of Small Reactor Facilities</em></a>, Ottawa, 2011.</li>
<li>CNSC, <a href="/eng/acts-and-regulations/regulatory-documents/published/html/regdoc2-5-4/index">REGDOC-2.5.4, <em>Design of Uranium Mines and Mills: Ventilation Systems</em></a>, Ottawa, 2018.</li>
<li>CSA Group, CSA Z94.4-18, <em>Selection, use and care of respirators</em>, Mississauga, 2018</li>
<li>CSA Group, CSA N288.8-17, <em>Establishing and implementing action levels for releases to the environment from nuclear facilities</em>, 2017.</li>
<li>ICRP Publication 88, <em>Doses to the Embryo and Fetus from Intakes of Radionuclides by the Mother</em>, Annals of the ICRP, Vol. 31, No.1&ndash;3, 2001.</li>
<li>CNSC, REGDOC 2.10.1, <a href="/eng/acts-and-regulations/regulatory-documents/published/html/regdoc2-10-1v2/index"><em>Nuclear Emergency Preparedness and Response</em></a>, Version 2, Ottawa, 2017.</li>
<li>Health Canada, <a href="http://publications.gc.ca/collections/collection_2018/sc-hc/H129-86-2018-eng.pdf"><em>Generic Criteria and Operational Intervention Levels for Nuclear Emergency Planning and Response</em></a>.
<li>CNSC, <a href="/pubs_catalogue/uploads/Radionuclide-Information-Booklet-2018-eng.pdf"><em>Radionuclide Information Booklet</em></a>, Ottawa, 2018.</li>
<li>American National Standards Institute / Health Physics Society, ANSI/HPS N13.12-2013, <em>Surface and Volume Radioactivity Standards for Clearance</em>, Washington, 2013.</li>
<li>American National Standards Institute, ANSI N42.17B-1989, <em>American National Standard Performance Specifications for Health Physics Instrumentation. Occupational Airborne Radioactivity Monitoring Instrumentation</em>, Washington, 1989.</li>
<li>American National Standards Institute / IEEE Standards Association, ANSI/IEEE N323c-2009, <em>Radiation Protection Instrumentation Test and Calibration &ndash; Air Monitoring Instruments</em>, Washington, 2009.</li>
<li>ICRP Publication 116, <em>Conversion Coefficients for Radiological Protection Quantities for External Radiation Exposures</em>, Annals of the ICRP, Vol. 40, Nos. 2&ndash;5, Oxford, 2010.</li>
<li>Nuclear Energy Agency, <a href="https://www.oecd-nea.org/dbforms/data/eva/evatapes/jeff_31/">Joint Evaluated Fission and Fusion File (JEFF) 3.1 evaluated data library</a></li>
<li>ICRP Publication 74, <em>Conversion Coefficients for use in Radiological Protection against External Radiation</em>, Annals of the ICRP, Vol. 26, Nos. 3&ndash;4, Oxford, 1996.</li>  </ol>
<div className="wb-fnote" role="note">
<section>
<h2 id="fnb" className="mrgn-tp-lg">Footnotes</h2>
<dl>
<dt>Footnote 1</dt>
<dd id="fnb1">
<p>Public consultation on REGDOC-2.7.2, Volume I, <em>Ascertaining Occupation Dose</em> (draft) [1] is running concurrently with this regulatory document. See the <a href="/eng/acts-and-regulations/regulatory-documents/index">CNSC&#39;s website for more details</a>.</p>
<p className="fn-rtn"><a href="#fnb1-ref"><span className="wb-inv">Return to footnote </span>1<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 2</dt>
<dd id="fnb2">
<p>REGDOC-2.7.2, Volume II, <em>Technical and Quality Management System Requirements for Dosimetry Services</em> [2], is expected to be published in early Spring 2019. See the <a href="/eng/acts-and-regulations/regulatory-documents/index">CNSC&#39;s website</a> for more details.</p>
<p className="fn-rtn"><a href="#fnb2-ref"><span className="wb-inv">Return to footnote </span>2<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 3</dt>
<dd id="fnb3">
<p>The CNSC expects to publish REGDOC-1.4.1 in early spring 2019.</p>
<p className="fn-rtn"><a href="#fnb3-ref"><span className="wb-inv">Return to footnote </span>3<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 4</dt>
<dd id="fnb4">
<p>Secular equilibrium is a type of radioactive equilibrium in which the half-life of the precursor (parent) radioisotope is so much longer than that of the product (progeny) that the radioactivity of the progeny becomes equal to that of the parent with time.</p>
<p className="fn-rtn"><a href="#fnb4-ref"><span className="wb-inv">Return to footnote </span>4<span className="wb-inv"> referrer</span></a></p>
</dd>
</dl>
</section>
</div>
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
<p><strong>Note:</strong> The regulatory document series may be adjusted periodically by the CNSC. Each regulatory document series listed above may contain multiple regulatory documents. For the latest list of regulatory documents, visit the <a href="/eng/acts-and-regulations/regulatory-documents/index">CNSC&rsquo;s website</a>.</p>  </div>
<div className="clear"></div>  
                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }