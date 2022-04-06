import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "en",
                pageTitle: "REGDOC-1.6.2, Developing and Implementing an Effective Radiation Protection Program for Nuclear Substances and Radiation Devices Licences ", 
                dateModified: "2019-11-18",
                langToggleUrl: "/fra/acts-and-regulations/consultation/comment/regdoc1-6-2"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<h2>Preface</h2>  <p>This regulatory document is part of the CNSC&rsquo;s Nuclear Substances and Radiation Devices series of regulatory documents. The full list of regulatory document series is included at the end of this document and can also be found on the <a href="/eng/acts-and-regulations/regulatory-documents/index">CNSC&rsquo;s website</a>.</p>  <p>Regulatory document REGDOC-1.6.2, <em>Developing and Implementing an Effective Radiation Protection Program for Nuclear Substances and Radiation Devices Licences</em> provides guidance to nuclear substances and radiation devices licensees and applicants on the development, implementation, management and assessment of their radiation protection programs.</p>  <p>For information on the implementation of regulatory documents and on the graded approach, see REGDOC-3.5.3, <em>Regulatory Fundamentals</em>.</p>
<div className="alert alert-info module-simplify ">  <p>The words "shall" and "must" are used to express requirements to be satisfied by the licensee or licence applicant. "Should" is used to express guidance or that which is advised. "May" is used to express an option or that which is advised or permissible within the limits of this regulatory document. "Can" is used to express possibility or capability.</p>  <p>Nothing contained in this document is to be construed as relieving any licensee from any other pertinent requirements. It is the licensee&rsquo;s responsibility to identify and comply with all applicable regulations and licence conditions.</p>  </div>  <br />
<div className="col-md-12 module-table-contents">
<h2>Table of Contents</h2>
<ul>
<li><a href="#sec1">1. Introduction</a>
<ul>
<li><a href="#sec1-1">1.1 Purpose</a></li>
<li><a href="#sec1-2">1.2 Scope</a></li>
<li><a href="#sec1-3">1.3 Relevant legislation</a></li>
</ul></li>
<li><a href="#sec2">2. Responsibility for Radiation Safety</a></li>
<li><a href="#sec3">3. Radiation Safety Officer</a>
<ul>
<li><a href="#sec3-1">3.1 Duties</a></li>
<li><a href="#sec3-2">3.2 Authority of the RSO</a></li>
<li><a href="#sec3-3">3.3 Qualifications</a></li>
<li><a href="#sec3-4">3.4 Experience</a></li>
<li><a href="#sec3-5">3.5 Continuing education</a></li>
<li><a href="#sec3-6">3.6 RSO staffing</a>
<ul>
<li><a href="#sec3-6-1">3.6.1 Alternate RSO</a></li>
<li><a href="#sec3-6-2">3.6.2 Site RSO</a></li>
<li><a href="#sec3-6-3">3.6.3 Consultant</a></li>
</ul></li>
</ul></li>
<li><a href="#sec4">4. Development and Implementation of an Effective RPP</a></li>
<li><a href="#sec5">5. Management System</a>
<ul>
<li><a href="#sec5-1">5.1. Safety culture</a></li>
<li><a href="#sec5-2">5.2. Assessment of the RPP</a>
<ul>
<li><a href="#sec5-2-1">5.2.1 Self-assessments</a></li>
<li><a href="#sec5-2-2">5.2.2 Independent assessments</a></li>
<li><a href="#sec5-2-3">5.2.3 Management reviews</a></li>
</ul></li>
<li><a href="#sec5-3">5.3 Event investigation</a></li>
<li><a href="#sec5-4">5.4 Documentation</a></li>
</ul></li>
<li><a href="#AppA">Appendix A: Duties of the RSO</a></li>
<li><a href="#AppB">Appendix B: Radiation Safety Committee</a>
<ul>
<li><a href="#B-1">B.1 RSC Role and Responsibilities</a></li>
<li><a href="#B-2">B.2 Membership</a></li>
<li><a href="#B-3">B.3 Terms of Reference</a></li>
<li><a href="#B-4">B.4 Meetings</a></li>
</ul></li>
<li><a href="#glossary">Glossary</a></li>
<li><a href="#ref">References</a></li>   </ul>  </div>  <div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="1"></div>
<h2 id="sec1">1. Introduction</h2>  <p>CNSC licensees are required to implement a radiation protection program (RPP) as per section 4 of the <em>Radiation Protection Regulations</em>. Licensees must ensure that their RPP is commensurate with the scope and risks associated with their use of nuclear substances and radiation devices.</p>   <p>An effective RPP is essential for the protection of the environment and the health and safety of persons. An RPP is required for every nuclear substances and radiation devices licensee and it ensures that the licence conditions and regulatory requirements are met. It is also an important principle of radiation protection that radiation doses are kept as low as reasonably achievable (ALARA), taking into account social and economic factors.</p>  <p>A proposed RPP must be provided with the licence application. The application should demonstrate, with supportable evidence, how the RPP meets regulatory requirements.</p>  <p>Sections 2 and 3 of this document describe the roles and responsibilities of the radiation safety officer (RSO), who is responsible for overseeing the RPP. Sections 4 and 5 provide information about the elements that should be considered when developing, implementing, managing and assessing an RPP.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="1.1"></div>
<h3 id="sec1-1">1.1 Purpose</h3>  <p>This document provides guidance for nuclear substances and radiation devices licensees and applicants on how to develop, implement, manage and assess an RPP.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="1.2"></div>
<h3 id="sec1-2">1.2 Scope</h3>  <p>This document contains guidance for nuclear substances and radioactive devices licensees and applicants. Nuclear substances and radioactive devices licensed under other classes of licence may wish to consult this document for information.</p>   <p>Appendix B provides information for licensees and applicants with a complex program, but could also be useful for other applicants. Characteristics of a complex program include, among others:</p>
<ul>
<li>consolidated use of nuclear substances licence (use type 815)</li>
<li>multiple licensed locations</li>
<li>multiple licences issued at the same location</li>
<li>multiple licences issued for the same organization</li>  	</ul>  <p>Licensees and applicants that have a complex program have medium and high-risk use types, as defined in appendix B of REGDOC-1.6.1, <em>Licence Application Guide: Nuclear Substances and Radiation Devices</em> [1]. Any licensee or applicant that is unsure whether it has a complex program should contact the CNSC for clarification.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="1.3"></div>
<h3 id="sec1-3">1.3 Relevant legislation</h3>  <p>The following provisions of the <a href="https://laws-lois.justice.gc.ca/eng/acts/N-28.3/"><em>Nuclear Safety and Control Act</em></a> (NSCA) and the Regulations made under it are relevant to this document:</p>
<ul>
<li>NSCA, sections 24, 26 and 27</li>
<li><a href="https://laws.justice.gc.ca/eng/regulations/sor-2003-212/page-1.html"><em>Canadian Nuclear Safety Commission Cost Recovery Fees Regulations</em></a>, Part 3</li>
<li><a href="https://laws-lois.justice.gc.ca/eng/regulations/SOR-2000-202/"><em>General Nuclear Safety and Control Regulations</em></a>, sections 3&ndash;7, 10, 12, 15, 17, 27, 28, 29 and 31</li>
<li><a href="https://laws-lois.justice.gc.ca/eng/regulations/SOR-2000-210/"><em>Nuclear Non-proliferation Import and Export Control Regulations</em></a>, section 3</li>
<li><a href="https://laws.justice.gc.ca/eng/regulations/sor-2000-209/page-1.html"><em>Nuclear Security Regulations</em></a>, sections 3, 4 and 5</li>
<li><a href="https://laws-lois.justice.gc.ca/eng/regulations/SOR-2000-207/"><em>Nuclear Substances and Radiation Devices Regulations</em></a>, sections 3&ndash;9, 11, 16, 17, 18, 20, 22, 23, 24, 30&ndash;38 and Schedule 1</li>
<li><a href="https://laws-lois.justice.gc.ca/eng/regulations/SOR-2015-145/"><em>Packaging and Transport of Nuclear Substances Regulations, 2015</em></a>, sections 19, 25, 26, 29, 37, 40 and 42</li>
<li><a href="https://laws-lois.justice.gc.ca/eng/regulations/SOR-2000-203/"><em>Radiation Protection Regulations</em></a>, sections 3&ndash;14, 20, 21, 22 and 24</li>  	</ul>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="2"></div>
<h2 id="sec2">2. Responsibility for Radiation Safety</h2>  <p>The licensee is responsible for radiation safety and for the conduct of all licensed activities that are authorized under its CNSC licence. The applicant authority is an individual at the senior management level with sufficient authority for both financial and human resources, thus has the ultimate responsibility for ensuring that an RPP is implemented in accordance with all regulatory requirements. The applicant authority should delegate duties for the day-to-day oversight of the RPP, but not accountability, to an individual known as the radiation safety officer (RSO). More details on applicant authority responsibilities can be found in REGDOC-1.6.1, <em>Licence Application Guide: Nuclear Substances and Radiation Devices</em> [1].</p>  <p>RSO is the designation commonly assigned to a radiation safety specialist who administers an RPP on a day-to-day basis. RSOs are designated by the applicant authority pursuant to section 15 of the <em>General Nuclear Safety and Control Regulations</em>. The applicant authority designates the RSO by completing the <a href="/eng/nuclear-substances/licensing-nuclear-substances-and-radiation-devices/index#forms">Request to appoint a new Radiation Safety Officer</a> form. By signing this form, the RSO agrees to take responsibility for overseeing the implementation and management of the RPP and to communicate with the CNSC for any matters pertaining to the RPP. Section 3 describes the RSO&rsquo;s roles and responsibilities.</p>  <p>The applicant authority should ensure that sufficient resources are allocated to the RSO in order to meet all of the regulatory obligations, such as:</p>  <ul>
<li>human resources to assist in managing and executing the required duties</li>
<li>sufficient authority to meet the regulatory requirements (see section 3.2)</li>
<li>administrative assistance with correspondence, record-keeping requirements and document management associated with a CNSC licence</li>
<li>financial resources to meet regulatory expectations and address non-compliance, such as for personnel training and for purchasing radiation monitoring equipment or other equipment</li>  	</ul>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3"></div>
<h2 id="sec3">3. Radiation Safety Officer</h2>  <p>The RSO is a critical component of an effective RPP. The RSO must have the authority to enforce policies and procedures established under the RPP in order to meet all regulatory requirements.</p>  <p>Depending on the structure and size of the licensed organization, an RSO could be designated to oversee RPP management at the corporate level (corporate RSO) and assisted by other individuals to oversee the program at the site (site RSOs) to ensure the RPP is effectively implemented and applied at the local level.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.1"></div>
<h3 id="sec3-1">3.1 Duties</h3>  <p>The applicant authority is accountable for ensuring adequate resources are available to implement the RPP. The applicant authority should ensure that competing duties or priorities are not assigned to the RSO that might detract significantly from their ability or availability to manage the RPP. The responsibilities of an RSO are not an adjunct to another job task; they are an essential element for ensuring the safe use of nuclear substances and radiation devices.</p>   <p>As best practice the applicant authority should provide the RSO with a description of the duties, as well as the number of hours the RSO should be dedicating to them. The ability of the RSO to manage the RPP should be evaluated by the applicant authority at defined intervals, in order to identify where additional time or other assistance is needed.</p>   <p>The RSO typically provides day-to-day administrative oversight of radiation safety. A non-exhaustive list of duties is provided in appendix A. The necessary competence in terms of educational training and practical experience required of an RSO is based on the size, scope, complexity or diversity of the licensed activities.</p>   <p>The RSO must be given sufficient time to properly plan, monitor, manage and conduct the activities required to demonstrate compliance with all regulatory requirements. The allocated time will be estimated by the licensee or applicant, taking into consideration the number of workers, the magnitude of operations and the geographic disparity of sites within the organization. For overseeing a complex RPP, the regulatory burden is expected to be handled by a full-time RSO. For low-risk use types, the RSO could manage the RPP on a part-time basis, while assuming other duties. Depending on the organizational size and geographic disparity of sites, additional support may be required, as described in section 3.6.2.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.2"></div>
<h3 id="sec3-2">3.2 Authority of the RSO</h3>  <p>The RSO must have necessary authority to implement the RPP, identify non-compliance, initiate corrective actions and verify the implementation and effectiveness of corrective actions. The RSO must have the authority to terminate any unsafe work practices that have or may potentially have a negative impact on the health and safety of any person, regardless of the potential impact this may have on the organization&rsquo;s operations.</p>  <p>In particular, the RSO must have necessary authority to:</p>  <ol>
<li>communicate directly with the applicant authority</li>
<li>act as signing authority on all matters of radiation safety, the CNSC licence and the obligations of the licensee</li>
<li>immediately stop any work, task or undertaking that the RSO considers unsafe or which may contravene the NSCA, its regulations or the CNSC licence</li>
<li>implement and enforce any changes to any work, task or undertaking which are necessary to ensure that the licensee remains compliant or returns to compliance</li>
<li>modify any policy and any procedure, and ensure that the changes are properly documented and communicated to workers</li>  	</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.3"></div>
<h3 id="sec3-3">3.3 Qualifications</h3>  <p>The RSO must have sufficient knowledge to effectively manage activities with nuclear substances and radiation devices in accordance with the licence conditions of the CNSC licence.</p>   <p>The RSO is encouraged to make use of accreditation programs for RSOs which provide qualifications for the proposed use of nuclear substances and prescribed equipment. The learning objectives must be aligned with the RSO&rsquo;s duties. The suitability of a training provider can be evaluated by feedback from previous clients. The RSO must have adequate knowledge of regulatory requirements and CNSC expectations, including the:</p>
<ul>
<li>NSCA and its relevant regulations</li>
<li>applicable CNSC regulatory documents</li>
<li>CNSC&rsquo;s licensing and compliance verification programs</li>
<li>defined authorities and responsibilities of the RSO</li>
<li>security of nuclear substances</li>  	</ul>  <p>Additional knowledge, based on the proposed licensed activities, could include:</p>
<ul>
<li>source recovery activities for industrial radiography licences</li>
<li>transportation of dangerous goods for those shipping or receiving nuclear substances and radiation devices</li>
<li>contamination control and spill management techniques for those using unsealed nuclear substances</li>
<li>safe management and use of the nuclear substances and radiation devices, including any special considerations (e.g., confined spaces, biohazardous materials)</li>  </ul>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.4"></div>
<h3 id="sec3-4">3.4 Experience</h3>  <p>The RSO should have relevant and practical work experience in conducting the proposed licensed activities.</p>   <p>The CNSC expects the RSO to be familiar with the nature and characteristics of the nuclear substances and radiation devices that are to be authorized under the CNSC licence, any proposed licensed activities that will be conducted and other ancillary hazards that may impact the licensed activities.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.5"></div>
<h3 id="sec3-5">3.5 Continuing education</h3>  <p>RSOs must maintain their qualifications through continuing education. Refresher training should be determined based on an evaluation of the complexity, importance and frequency of the tasks assigned. A training-needs analysis should be conducted when any changes are made to the RSOs&rsquo; activities or responsibilities.</p>   <p>The frequency and extent of the refresher training should be determined, defined and documented. This will depend on the licensed activities authorized by the CNSC licence and the capabilities of the RSO.</p>  <p>As part of the refresher training, RSOs should review their knowledge of the CNSC regulatory requirements. RSOs should be made aware of any changes to regulatory requirements that may impact the licensed activities authorized under the CNSC licence. Refresher training should be provided at least every five years and when changes to regulatory requirements or licence conditions occur, or in the case of an RSO&rsquo;s return after a lengthy absence.</p>  <p>Periodic refresher training for workers and the RSO should be part of the training program included in the RPP. More details on radiation safety training programs can be found in appendix A of REGDOC-2.2.2, <em>Personnel Training</em> [2].</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.6"></div>
<h3 id="sec3-6">3.6 RSO staffing</h3>  <p>The effectiveness of the RPP must be maintained while licensed activities are being conducted. As a result, a designated alternate RSO is necessary during an RSO&rsquo;s temporary absence. In addition, a site RSO may be required when multiple locations are authorized under the same RPP.</p>  <p>The corporate RSO or any person assigned RSO duties, such as an alternate RSO, a site RSO or a consultant, should be available while licensed activities are being performed.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.6.1"></div>
<h4 id="sec3-6-1">3.6.1 Alternate RSO</h4>  <p>During the RSO&rsquo;S absence, an alternate RSO must be designated in order to carry on the licensed activities and ensure that continuous oversight of the RPP is maintained. The alternate RSO can also be involved with the day-to-day management of the RPP as an assistant to the RSO.</p>   <p>For short-term absences, such as vacation, illness or injury, the alternate RSO should, at a minimum, have knowledge of the regulatory requirements of the licensed activity and all reporting requirements. The CNSC should be notified in the case of short-term absences. RSO training for alternate RSOs is recommended.</p>  <p>In the case of long-term absences, such as maternity or parental leave, temporary assignment to other duties, severe illness or injury, the alternate RSO must have the same level of knowledge about and training on the licensed activities and the regulatory requirements as the RSO. The <a href="/eng/pdfs/Forms_Applications/appoint-a-radiation-safety-officer-form-201904-eng.pdf">Request to Appoint a Radiation Safety Officer or an Alternate Radiation Safety Officer</a> form must be completed and submitted to notify the CNSC of the replacement.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.6.2"></div>
<h4 id="sec3-6-2">3.6.2 Site RSO</h4>  <p>When a licence application to conduct licensed activities in more than one geographical location is submitted, a site RSO should be appointed at each licensed location to implement and maintain the RPP. The purpose of designating a site RSO is to ensure direct RPP oversight at all locations. The site RSO can be designated by the corporate RSO.</p>  <p>The site RSO should report to the corporate RSO on all radiation protection matters. The site RSO should have similar levels of experience, training and authority as the corporate RSO. The roles and responsibilities and the lines of authority for the site RSO must be clearly defined. It should be clear that the corporate RSO remains the person responsible for overseeing the overall RPP and is the main liaison with the CNSC.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.6.3"></div>
<h4 id="sec3-6-3">3.6.3 Consultant</h4>  <p>If there are no qualified or available personnel to assume the role of the RSO, it is acceptable to contract an independent consultant to serve as the corporate or site RSO. The consultant must have the same level of knowledge about and training on the licensed activities and the regulatory requirements as is expected of an RSO. In addition, the licensee or applicant must ensure that the consultant can spend enough time at the licensed location to oversee the RPP, even if that individual is managing several programs simultaneously.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4"></div>
<h2 id="sec4">4. Development and Implementation of an Effective RPP</h2>  <p>The RPP submitted as part of the licence application is the licensee&rsquo;s proposal on how it intends to comply with regulatory requirements. As such, the RPP is referenced in the appendix to the licence, and its implementation is verified during inspections by the CNSC.</p>  <p>An effective RPP is typically developed, implemented and managed to suit the licensed activity, complexity and circumstances of the licensee. The RPP is normally developed by the RSO in collaboration with specialists and other relevant staff. To ensure radiation safety and compliance with the relevant requirements, a typical RPP includes operating policies and procedures that demonstrate its effectiveness and describe how it will be maintained. REGDOC-1.6.1, <em>Licence Application Guide: Nuclear Substances and Radiation Devices</em> [1] provides a comprehensive list of policies and procedures that must be submitted as part of a licence application. Additional information on the content of an RPP can be found in REGDOC-2.7.1, <em>Radiation Protection</em>.</p>  <p>The fundamental elements of an RPP are procedures and people. The RPP includes procedures that inform and direct persons who use or oversee the use of nuclear substances and radiation devices. In order to successfully maintain effective control and oversight of the RPP, the necessary authority, financial and physical resources must be allocated to the RSO, such as the facilities and equipment required for developing, implementing and maintaining the program.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="5"></div>
<h2 id="sec5">5. Management System</h2>  <p>An effective management system helps ensure that safety is properly considered in all decisions and actions. It ensures that the organization is aligned with top management direction and able to establish, communicate and achieve the objectives and priorities it sets for itself. REGDOC-2.1.1, <em>Management System</em> [3] outlines management system principles, including:</p>
<ol>
<li>the business is defined, planned and controlled</li>
<li>the organization is defined and understood</li>
<li>personnel are competent at the work they do</li>
<li>personnel know what is expected of them</li>
<li>work is planned</li>
<li>experience is sought, shared and used</li>
<li>information is provided in a timely manner to the people who need it</li>
<li>the performance of work is controlled</li>
<li>the preparation and distribution of documents are controlled</li>
<li>work is verified to confirm that it is correct</li>
<li>problems are identified and resolved</li>
<li>changes are controlled</li>
<li>records are maintained</li>
<li>assessments are performed</li>  	</ol>  <p>The following subsections describe four important management system components that should be included in the RPP: safety culture, assessment of the RPP, event investigation and documentation.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="5.1"></div>
<h3 id="sec5-1">5.1 Safety culture</h3>  <p>A healthy safety culture is a key factor in minimizing the likelihood of safety-related events and mitigating their potential impact. Fostering a healthy safety culture is an important aspect of ensuring that the oversight of radiation safety is commensurate with the defined complexity and risks inherent in the licensed activities and the RPP.</p>   <p>The CNSC defines safety culture as "the characteristics of the work environment, such as the values, rules, and common understandings that influence employee perceptions and attitudes about the importance that the organization places on safety."</p>  <p>A healthy safety culture evolves from the development and application of a questioning attitude at all levels of the organization, including management. Fostering a healthy safety culture requires support and commitment at all levels of management within the organization. It also relies equally on the mutual commitment of the applicant authority, RSOs and workers. Managers at all levels should strive to promote a healthy safety culture within the workplace. All individuals in the organization are expected to help foster and sustain that culture.</p>   <p>Understanding an organization&rsquo;s safety culture is an important part of fostering a healthy safety culture. The development of a shared understanding of the perceptions and attitudes of both the workers and management is vital to maintaining and improving radiation safety.</p>  <p>Licensees or applicants may foster a healthy safety culture by:</p>
<ol>
<li>promoting the commitment to protection and safety at all levels of the organization</li>
<li>ensuring a common understanding of the key principles of the safety culture within the organization</li>
<li>providing the means by which the organization supports individuals and teams so they can carry out their tasks safely and effectively, taking into account the interactions between individuals, technology and the organization</li>
<li>encouraging workers and their representatives and other relevant persons to participate in the development and implementation of policies, rules and procedures that deal with protection and safety</li>
<li>ensuring the accountability of the organization and of individuals at all levels for protection and safety</li>
<li>encouraging open communication about protection and safety within the organization and with relevant parties, as appropriate</li>
<li>encouraging a questioning attitude to challenge prevailing assumptions with respect to the planning and execution of work</li>
<li>encouraging the development and maintenance of processes that promote transparency, continuous learning and improvement</li>
<li>providing the means by which the organization continually seeks to better understand, develop and strengthen its safety culture</li>
<li>providing a safe work environment that enables reporting without fear of reprisal</li>  	</ol>  <p>From time to time, it is important to reflect on the maturity of the organization&rsquo;s safety culture. At Stage 1, there is an awareness of the risks associated with a job, the ability to use appropriate safety equipment or proper work control methods to mitigate those risks, and management reinforcement of appropriate safety practices. For further information and guidance on how to assess and improve safety culture, see appendix C of REGDOC-2.1.2, <em>Safety Culture</em> [4].</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="5.2"></div>
<h3 id="sec5-2">5.2 Assessment of the RPP</h3>  <p>The RPP should include means to periodically assess the performance of the program. This may be performed through self-assessments, independent assessments or management reviews. The RPP should define the type(s) of assessment(s) to perform, the frequency and the method(s) to be used. <strong>Note:</strong> An inspection performed by a CNSC inspector is not considered an assessment activity.</p>  <p>The results of these assessments should be documented and shared with the applicant authority and with the radiation safety committee (RSC), if one has been established. A follow-up of the deficiencies identified and their corrective actions should be conducted to ensure the items of non-compliance are properly resolved.</p>  <p>Assessments ensure that the RPP is adequate, up to date and implemented in accordance with the ALARA principles. The information collected during the assessments may be used to improve any weaknesses identified.</p>  <p>Although the RPP should be assessed at least every five years, the frequency of the assessments will depend on the complexity of the RPP and the risk associated with the licensed activity. The frequency and the chosen method(s) should be defined and documented in the RPP. The basis of the assessments may need to be expanded to account for different use types, associated hazards and mitigating controls.</p><p>  These assessments can be carried out using checklists, document reviews, observations of actual work being performed against procedures and staff interviews. The following are some examples of elements that could be included in the assessment of the RPP. This is not a comprehensive list:</p>
<ol>
<li>governance documentation</li>
<li>workers&rsquo; training and authorization</li>
<li>licensed activities carried out by workers</li>
<li>inventory of unsealed sources, sealed sources and radiation devices</li>
<li>licensed activities (use, store, transfer, import and export)</li>
<li>leak tests of sealed sources</li>
<li>location of use</li>
<li>dose records (dosimetry and dose estimates)</li>
<li>policies and procedures to ensure they are consistent with current regulatory requirements</li>
<li>use and storage areas (contamination and dose rate)</li>
<li>calibration of radiation detection instruments performed at the prescribed frequency</li>
<li>waste handling</li>
<li>decommissioning records</li>
<li>past events</li>
<li>maintenance of records</li>
<li>appropriate use of radiation warning signs</li>
<li>posting of 24-hour emergency contact</li>
<li>room classification</li>
<li>control of authorized rooms (accessible to authorized users)</li>
<li>transport requirements</li>
<li>import/export restrictions and requirements</li>
<li>emergency management and unplanned events procedure accuracy and applicability</li>  	</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="5.2.1"></div>
<h4 id="sec5-2-1">5.2.1 Self-assessments</h4>  <p>Self-assessments, such as internal audits or inspections, are vital in evaluating the implementation and effectiveness of the RPP. Self-assessments are generally conducted by the RSO to assess the work practices against requirements established in the RPP and to identify opportunities for improvement. These assessments are also conducted to confirm that the work being performed in their area of responsibility meets the requirements of the RPP. They may be planned or unplanned.</p>  <p>The RPP should describe the frequency of self-assessments and describe the elements that will be assessed. The frequency should be determined based on the complexity of the licensed activities and the results of previous assessments, with specific regard to deficiencies identified. Based on best practices, self-assessments should be performed at least annually, or in response to significant changes in the organization&rsquo;s licensed activities or the identification of weaknesses in safety.</p>   <p>The list of examples of <a href="/eng/nuclear-substances/licensing-nuclear-substances-and-radiation-devices/licensing-process/index">Type II inspection worksheets</a> on the CNSC&rsquo;s website can be useful when developing a self-assessment policy and procedure.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="5.2.2"></div>
<h4 id="sec5-2-2">5.2.2 Independent assessments</h4>  <p>Independent assessments are often referred to as external audits and are planned and carried out by an external organization at defined frequencies. The primary objective of an independent assessment is to confirm that the documented RPP meets the requirements and that the implementation of the RPP is effective.</p>   <p>The results of independent assessments are reported to the applicant authority or to the management level with sufficient authority to resolve the issues identified.</p>   <p>Independent assessments should be based on the results of self-assessments. They should also be conducted after substantive changes to work practices have been implemented.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="5.2.3"></div>
<h4 id="sec5-2-3">5.2.3 Management reviews</h4>  <p>Management reviews are conducted by the applicant authority at a set frequency as an oversight activity to assess the effectiveness of the RPP and to proactively make improvements as required.</p>   <p>The frequency of the management reviews should be defined in the RPP and should be based on the complexity of the licensed activities, the occurrence of major changes to the licensed activities or as a result of event investigations.</p>   <p>The results of self- and independent assessments should form the basis for decisions and actions at management review meetings. Management reviews should be documented and communicated to staff as necessary. Problems identified should be tracked and the appropriate corrective actions should be established as described in the RPP.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="5.3"></div>
<h3 id="sec5-3">5.3 Event investigation</h3>  <p>In accordance with the regulatory requirements established in the <em>General Nuclear Safety and Control Regulations, Radiation Protection Regulations</em>, and <em>Packaging and Transport of Nuclear Substances Regulations, 2015</em>, an investigation must be conducted to determine the probable cause of an event. Event investigation is a formal process to identify the probable cause or causes of an event, including the technical issues and organizational factors underlying the event. This determination is also used to help develop corrective actions to restore the effectiveness of the RPP and to prevent the occurrence of a similar event. All events in which a loss of control or a deviation from the RPP occurs must be immediately controlled, documented and evaluated for significance.</p>   <p>When regulatory limits are exceeded or events are determined to be systematic (e.g., recurring action level exceedances), a detailed event report must be provided to CNSC staff. It should contain the following information, as far as practicable and applicable:</p>
<ol>
<li>a summary of any analysis completed, including the cause(s) and the conclusion(s) drawn from the investigation(s) after the event</li>
<li>a description of the resulting effects on the health, safety and security of persons and the environment</li>
<li>the effective dose and equivalent dose of radiation received by any person as a result of the event, including the measured or estimated doses to personnel and the public as a consequence of the event</li>
<li>the actions that have been taken or proposed, including actions identified and taken to restore the effectiveness of the RPP</li>
<li>any review of a comparable event</li>  	</ol>  <p>The corrective actions taken to resolve problems associated with the event need to be accepted by the applicant authority and the RSO, and be evaluated for effectiveness during a periodic management review.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="5.4"></div>
<h3 id="sec5-4">5.4 Documentation</h3>  <p>The RPP should contain all necessary operational information for working with nuclear substances and radiation devices. It should be the first point of reference for workers and provide all necessary policies and procedures. The specific details of the RPP are usually documented in a radiation safety manual, which is submitted as part of the licence application. The radiation safety manual should be signed and dated by the RSO and applicant authority to confirm that the published version of the manual was reviewed and approved. It is recommended that the RPP be reviewed periodically and updated as necessary to reflect any changes to policies, procedures and regulatory requirements. The frequency of the reviews should be determined, defined and documented. It is important to note that the licensee is to inform and submit any changes made to CNSC licensing staff for review and approval prior to implementing the new version of the radiation safety manual.</p>   <p>It is important to ensure that revisions include version control and that they are signed and dated by the RSO and applicant authority. Workers must be given training on the changes or modifications made in any policies and procedures within the radiation safety manual. For good practices in writing technical procedures, see:</p>
<ul>
<li><em>Procedure Writing: Principles and Practices</em> [5]</li>
<li><em>Procedure Writers&rsquo; Manual</em> [6]</li>
<li><em>Procedure Process Description</em> [7]</li>
<li><em>Guidance for Preparing Standard Operating Procedures</em> [8]</li>
<li><em>Procedure Writer&rsquo;s Guide, Licensee Document: ML111820250</em> [9]</li>  	</ul>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="AppA"></div>
<h2 id="AppA">Appendix A: Duties of the RSO</h2>  <p>The duties of the RSO may vary depending on the licensed activity. The following list includes examples of tasks that may be required of the RSO. It is organized by safety and control area (SCA). The SCAs are the technical topics used by the CNSC to assess, review, verify and report on regulatory requirements and performance across all regulated facilities and activities.</p>
<em>Conventional health and safety</em>  <p>This SCA covers the implementation of a program to manage workplace safety hazards and to protect workers.</p>
<ul>
<li>stop unsafe work practices</li>  	</ul>
<em>Emergency management and fire protection</em>  <p>This SCA covers emergency plans and emergency preparedness programs for emergencies and for non-routine conditions. This area also includes any results of participation in emergency exercises.</p>
<ul>
<li>coordinate or participate in emergency responses to events involving nuclear substances and radiation devices</li>
<li>investigate all unusual occurrences, determine the cause, identify corrective actions and implement such actions</li>  	</ul>
<em>Environmental protection</em>  <p>This SCA covers programs that identify, control and monitor all releases of radioactive and hazardous substances and effects on the environment from facilities or as the result of licensed activities.</p>
<ul>
<li>determine whether additional measures are required due to a release of nuclear substances into the environment</li>  	</ul>
<em>Fitness for service</em>  <p>This SCA covers activities that impact the physical condition of structures, systems and components to ensure that they remain effective over time. This includes programs that ensure all equipment is available to perform its intended design function when called upon to do so.</p>
<ul>
<li>ensure that sealed sources are leak tested at the required frequency and in accordance with the regulatory requirements</li>
<li>ensure that radiation-monitoring instruments are calibrated in accordance with the regulatory requirements</li>
<li>maintain a sufficient supply of radiation monitoring instruments that are capable of detecting the nuclear substances in use at the lowest level of contamination</li>  	</ul>
<em>Human performance management</em>  <p>This SCA covers activities that enable effective human performance through the development and implementation of processes that ensure a sufficient number of licensee personnel are in all relevant job areas and have the necessary knowledge, skills, procedures and tools in place to safely carry out their duties.</p>
<ul>
<li>ensure that workers who are required to use nuclear substances and radiation devices are adequately trained in radiation safety and radiation protection procedures</li>
<li>authorize qualified workers to use nuclear substances or radiation devices</li>
<li>ensure that the certification of exposure device operators is valid</li>
<li>ensure that auxiliary personnel (e.g., clerical, janitorial, security) whose duties may occasionally expose them to nuclear substances and radiation devices receive appropriate training in radiation safety</li>
<li>provide refresher training</li>  	</ul>
<em>Management system</em>  <p>This SCA covers the framework that establishes the processes and programs required to ensure an organization achieves its safety objectives, continuously monitors its performance against these objectives, and fosters a healthy safety culture.</p>
<ul>
<li>ensure that the licensed activity complies with regulatory requirements</li>
<li>ensure that all records and reports are prepared, maintained and submitted in accordance with licence conditions and regulatory requirements</li>
<li>propose or initiate any revisions to policies or procedures and changes to equipment or room design, and submit licence amendments, as required</li>
<li>prepare and implement corrective actions to address any deficiencies identified</li>
<li>conduct assessments of the RPP</li>  	</ul>
<em>Operating performance</em>  <p>This SCA includes an overall review of the conduct of the licensed activities and the activities that enable effective performance.</p>
<ul>
<li>monitor, advise and consult regarding issues related to the handling of nuclear substances and radiation devices in accordance with licence conditions and regulatory requirements</li>
<li>develop, implement, manage and assess an RPP that is consistent with the scope of the licensed activities to ensure compliance with regulatory requirements</li>
<li>review requests for authorization to purchase or use nuclear substances and radiation devices, in order to ensure that the proposed handling and location of storage are acceptable and comply with the RPP, licence conditions and regulatory requirements</li>
<li>develop and implement programs to inspect and review licensed activities, the locations of nuclear substance and radiation devices and the adequacy of worker training, safety procedures and the work environment</li>
<li>investigate all reports of overexposures to ionizing radiation, as well as accidents and losses involving nuclear substances and radiation devices, determine pertinent facts or confirm events and recommend appropriate actions to mitigate the consequences or prevent recurrences</li>
<li>ensure that the events and the results of related investigations are reported to the CNSC and other relevant authorities in accordance with the licence conditions and regulatory requirements</li>
<li>maintain a presence in the workplace by periodically observing work to promote good work practices and prevent non-compliance</li>
<li>administer or control the distribution, use and maintenance of personnel radiation monitoring equipment</li>
<li>maintain open communication with all workers and management</li>
<li>act on behalf of the applicant in communicating with the CNSC</li>
<li>advise workers on decontamination methods and techniques</li>  	</ul>
<em>Packaging and transport</em>  <p>This SCA covers programs for the safe packaging and transport of nuclear substances to and from the licensed facility.</p>
<ul>
<li>ensure packaging and transport of nuclear substances and radiation devices comply with the <em>Packaging and Transport of Nuclear Substances Regulations, 2015</em></li>  	</ul>
<em>Physical design</em>  <p>This SCA relates to activities that impact the ability of structures, systems and components to meet and maintain their design basis given new information arising over time and taking changes in the external environment into account.</p>
<ul>
<li>ensure that a design assessment form is submitted and approved for each room, area or enclosure in which nuclear substances and radiation devices will be used or stored</li>  	</ul>
<em>Radiation protection</em>  <p>This SCA covers the implementation of a radiation protection program in accordance with the <em>Radiation Protection Regulations</em>. The program must ensure that contamination levels and radiation doses received by individuals are monitored, controlled and maintained ALARA.</p>
<ul>
<li>provide appropriate personal radiation detection equipment to workers</li>
<li>design and implement appropriate personnel monitoring programs</li>
<li>review the occupational radiation exposures of workers</li>
<li>recommend measures to reduce occupational radiation exposures in accordance with ALARA</li>
<li>provide information to nuclear energy workers in accordance with the <em>Radiation Protection Regulations</em></li>
<li>design and implement a radiation survey and contamination monitoring program, and assess the results</li>
<li>establish internal administrative and action levels</li>  	</ul>
<em>Safeguards and non-proliferation</em>  <p>This SCA covers the programs and activities required for the successful implementation of the obligations arising from the Canada/International Atomic Energy Agency (IAEA) safeguards agreements, as well as all other measures arising from the Treaty on the Non-Proliferation of Nuclear Weapons.</p>
<ul>
<li>ensure compliance with the regulatory requirements for safeguards and non-proliferation</li>  	</ul>
<em>Safety analysis</em>  <p>This SCA includes maintenance of the safety analysis that supports the overall safety case for the facility. Safety analysis is a systematic evaluation of the potential hazards associated with the conduct of a proposed activity or facility and considers the effectiveness of preventive measures and strategies in reducing the effects of such hazards.</p>
<ul>
<li>evaluate potential hazards and preventive measures</li>
<li>manage safety issues (including research and development programs)</li>  	</ul>
<em>Security</em>  <p>This SCA covers the programs required to implement and support the security requirements.</p>
<ul>
<li>ensure that measures are in place for the physical security of sealed and unsealed sources</li>
<li>ensure appropriate access control measures are in place for designated areas</li>
<li>maintain and submit information to update the Sealed Source Tracking System</li>  	</ul>
<em>Waste management</em>  <p>This SCA covers internal waste-related programs that form part of the facility&rsquo;s operations up to the point where the waste is removed from the facility to a separate waste management facility. This area also covers the planning for decommissioning.</p>
<ul>
<li>arrange for the safe storage of nuclear substances and radiation devices</li>
<li>ensure the safe handling and disposal of any radioactive waste in compliance with the local, provincial and federal authorities</li>
<li>provide support in decommissioning tasks</li>  	</ul>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="AppB"></div>
<h2 id="AppB">Appendix B: Radiation Safety Committee</h2>  <p>The additional information included in this appendix should be considered when developing a complex RPP. It is recommended that licensees and applicants with complex programs establish a radiation safety committee (RSC). The RSC may have corporate responsibilities for radiation safety, or it may simply have an advisory or evaluation role. Depending on the complexity and risk inherent in the RPP, the RSC may require that designated policies and procedures are approved by the committee before implementation.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="B.1"></div>
<h3 id="B-1">B.1 RSC Role and Responsibilities</h3>  <p>The role and responsibilities of an RSC may be to provide advice or direction on radiation safety matters and to ensure the implementation and oversight of an effective RPP. Such committees are usually established or retained with the approval of the applicant authority.</p>  <p>The RSC works with the applicant authority and the RSO to define, plan and control the RPP implementation to ensure that it is aligned and integrated with the core business objectives of the licensed activity. As such, the RSC should be involved in establishing policies and procedures for managing the RPP. The role of the RSC may include the following:</p>
<ol>
<li>oversee the RPP and radiation safety matters</li>
<li>advise on radiation safety matters, including the safe use of nuclear substances and radiation devices during licensed activities</li>
<li>ensure that radiation exposures are maintained ALARA</li>
<li>review all proposed uses of nuclear substances and radiation devices and determine whether they comply with the RPP and regulatory requirements</li>
<li>assess the adequacy and the effectiveness of the training programs</li>
<li>review the results of RPP assessments</li>
<li>discuss positive and negative operational experiences to determine where improvement is needed</li>
<li>review any reports concerning events or unusual occurrences</li>
<li>recommend corrective measures or improvements when the review or assessment identifies deficiencies</li>
<li>recommend measures or improvements to prevent the reoccurrence of any events</li>
<li>advise the applicant authority of any need for additional resources to establish, maintain or improve RPP effectiveness</li>   </ol>  <p>The RSC should maintain written records of their meetings, as detailed in section B.4.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="B.2"></div>
<h3 id="B-2">B.2 Membership</h3>  <p>RSCs should include members selected or appointed because of their expertise or involvement in radiation safety matters. Collectively, these members should advise their managers and RSOs on radiation safety matters in general and on the RPP effectiveness within the organization in particular. RSC members may participate on a full-time or part-time basis.</p>  <p>The RSC should comprise members from multiple disciplines. An RSC should include at least corporate and site RSOs, an authorized user from each type of licensed activity, a representative of the auxiliary personnel (e.g., clerical, janitorial, security), a representative of the nursing service where applicable (therapeutic nuclear medicine licence) and a representative of management. The RSC may also include physicians, physicists and representatives of corporate interest groups, such as managers (senior staff members), workers or specific user units. It should also include a representative of the health and safety committee. Every department that receives occupational dose or has an impact on radiation exposure or safety should also be represented.</p>   <p>When selecting a chairperson for the committee, several factors should be considered, such as knowledge of radiation safety and leadership abilities. The chairperson should have sufficient time to devote to this position in addition to other responsibilities. In general, the RSO should not be appointed chairperson of the RSC, since the RSO is responsible for the day-to-day oversight of the RPP and may be too closely involved in the licensed activities to be objective.</p>  <p>The chairperson should work closely with the applicant authority to ensure effective decisions are made and carried out.</p>  <p>The corporate RSO&rsquo;s participation is essential, as is that of a site RSO from each authorized location.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="B.3"></div>
<h3 id="B-3">B.3 Terms of Reference</h3>  <p>The RSC&rsquo;s terms of reference depend on individual circumstances, such as management decisions, corporate procedures, available resources, licence requirements and the magnitude, diversity or complexity of the licensed activities. The terms of reference should contain the following:</p>
<ol>
<li>committee&rsquo;s decision-making system</li>
<li>quorum requirements</li>
<li>membership</li>
<li>RSC roles and responsibilities (refer to section B.1)</li>
<li>RSC members&rsquo; roles and responsibilities</li>
<li>required meeting agenda items</li>
<li>meeting frequency</li>  	</ol>  <p>The terms of reference should be part of the RPP.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="B.4"></div>
<h3 id="B-4">B.4 Meetings</h3>  <p>Meetings are vital to the effective functioning of the committee and its ability to provide oversight on matters pertinent to radiation safety. They are necessary for decision making,  problem solving, discussing issues, and reviewing and approving the policies and procedures that form the radiation safety program.</p>   <p>A quorum should ensure a minimum participation. Quorum can be a majority but has to be defined according to the needs and the purposes of the committee.  An RSC meeting should be held as necessary, but at least annually. The circumstances that can trigger a non-routine meeting should also be described in the terms of reference.</p>  <p>Written minutes and any associated actions should be maintained for future reference and circulated to all committee members. The minutes should include the date of the meeting, the members present and absent to demonstrate quorum was respected, a summary of the discussions, recommendations and any decisions made during the meeting.</p>  <p>The RSC depends on the RSO&rsquo;s experience with the details of the RPP and applicable regulatory requirements, since RSC members do not have the same level of knowledge in radiation safety.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="glossary"></div>
<h2 id="glossary">Glossary</h2>  <p>For definitions of terms used in this document, see <a href="/pubs_catalogue/uploads/REGDOC-3-6-Glossary-of-CNSC-Terminology-eng.pdf">REGDOC-3.6, <em>Glossary of CNSC Terminology</em></a>, which includes terms and definitions used in the <a href="http://laws-lois.justice.gc.ca/eng/acts/N-28.3/"><em>Nuclear Safety and Control Act</em></a> and the regulations made under it, and in CNSC regulatory documents and other publications. REGDOC-3.6 is provided for reference and information.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="ref"></div>
<h2 id="ref">References</h2>  <ol>  	<li>Canadian Nuclear Safety Commission (CNSC), <a href="/eng/acts-and-regulations/regulatory-documents/published/html/regdoc1-6-1-v2/index">REGDOC-1.6.1, <em>Licence Application Guide: Nuclear Substances and Radiation Devices</em></a>, Ottawa, Canada, 2017.</li>
<li>CNSC, <a href="/eng/acts-and-regulations/regulatory-documents/published/html/regdoc2-2-2-v2/index">REGDOC-2.2.2, <em>Personnel Training</em></a>, Ottawa, Canada, 2016.</li>
<li>CNSC, <a href="/eng/acts-and-regulations/regulatory-documents/published/html/regdoc2-1-1/index">REGDOC-2.1.1, <em>Management System</em></a>, Ottawa, Canada, 2019.</li>
<li>CNSC, <a href="/eng/acts-and-regulations/regulatory-documents/published/html/regdoc2-1-2/index">REGDOC-2.1.2, <em>Safety Culture</em></a>, Ottawa, Canada, 2018.</li>
<li>Wierenga, D. et al. <em>Procedure Writing: Principles and Practices</em>, Columbus: Battelle Press, 1993.</li>
<li>Procedure Professionals Association (PPA), <a href="http://www.ppaweb.org/documents/ppa-ap-907-005.pdf"><em>Procedure Writers&rsquo; Manual</em></a>, PPA AP-907-005, USA, 2016.</li>
<li>PPA, <a href="http://www.ppaweb.org/documents/ppa-ap-907-001.pdf"><em>Procedure Process Description</em></a>, PPA AP-907-001, USA, 2016.</li>
<li>United States Environmental Protection Agency, <a href="https://www.epa.gov/sites/production/files/2015-06/documents/g6-final.pdf"><em>Guidance for Preparing Standard Operating Procedures</em></a>, EPA QA/G-6, USA, 2001.</li>
<li>Wisconsin Public Service Corporation, <a href="http://www.nrc.gov/docs/ML1118/ML111820250.pdf"><em>Procedure Writer&rsquo;s Guide</em></a>, U.S. NRC Licensee Document: ML111820250, USA, 1993.</li>  </ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<h2>CNSC Regulatory Document Series</h2>  <p>Facilities and activities within the nuclear sector in Canada are regulated by the CNSC. In addition to the <em>Nuclear Safety and Control Act</em> and associated regulations, these facilities and activities may also be required to comply with other regulatory instruments such as regulatory documents or standards.</p>  <p>CNSC regulatory documents are classified under the following categories and series:</p>  <ul className="list-bullet-none">
<li><strong>1.0 Regulated facilities and activities</strong></li>
<li>Series 1.1 Reactor facilities
<ul className="list-bullet-none">
<li>1.2 Class IB facilities</li>
<li>1.3 Uranium mines and mills</li>
<li>1.4 Class II facilities</li>
<li>1.5 Certification of prescribed equipment</li>
<li>1.6 Nuclear substances and radiation devices</li>
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