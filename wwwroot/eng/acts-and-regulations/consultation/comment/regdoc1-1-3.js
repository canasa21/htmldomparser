import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "en",
                pageTitle: "REGDOC-1.1.3, Licence Application Guide: Licence to Operate a Nuclear Power Plant", 
                dateModified: "2016-05-17",
                langToggleUrl: "/fra/acts-and-regulations/consultation/comment/regdoc1-1-3"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<h2 id="preface">Preface</h2>
<p>This regulatory document is part of the Canadian Nuclear Safety Commission (CNSC)&#39;s reactor facilities series of regulatory documents, which also covers licence application guides for nuclear power plant (NPP) licences for other lifecycle stages (such as licence to prepare a site and licence to construct an NPP). The full list of regulatory document series is included at the end of this document and can also be found on the <a href="/eng/acts-and-regulations/regulatory-documents/index">CNSC&#39;s website</a>.</p>
<p>Regulatory document REGDOC-1.1.3, <em>Licence Application Guide: Licence to Operate a Nuclear Power Plant</em> sets out requirements and guidance on submitting a formal application to the CNSC to obtain a licence to operate an NPP in Canada, and identifies the information that should be included in the application.</p>
<p>This document will be used to assess licence applications for proposed new NPPs and for licence renewals for existing NPPs. Once the Commission has granted a licence, the safety and control measures described in the licence application and the documents needed to support those safety and control measures will form part of the licensing basis.</p>
<p>Guidance contained in this document exists to inform the applicant, to elaborate further on requirements or to provide direction to licensees and applicants on how to meet requirements. It also provides more information about how CNSC staff evaluate the information during their review of licence applications.</p>
<p>Licensees are expected to review and consider guidance; should they choose not to follow it, they should explain how their chosen alternate approach meets regulatory requirements. An applicant or licensee may put forward a case to demonstrate that the intent of a specification is addressed by other means and demonstrated with supportable evidence.</p>
<p>A graded approach, commensurate with risk, may be defined and used when applying the requirements and guidance contained in this regulatory document. The use of a graded approach is not a relaxation of requirements. With a graded approach, the application of requirements is commensurate with the risks and particular characteristics of the facility or activity.</p>
<div className="alert alert-info">
<h3>Important note:</h3>
<p> Where referenced in a licence either directly or indirectly (such as through licensee-referenced documents), this document is part of the licensing basis for a regulated facility or activity.</p>
<p>The licensing basis sets the boundary conditions for acceptable performance at a regulated facility or activity, and establishes the basis for the CNSC&rsquo;s compliance program for that regulated facility or activity.</p>
<p>Where this document is part of the licensing basis, the word &quot;shall&quot; is used to express a requirement to be satisfied by the licensee or licence applicant. &quot;Should&quot; is used to express guidance or that which is advised. &quot;May&quot; is used to express an option or that which is advised or permissible within the limits of this regulatory document. &quot;Can&quot; is used to express possibility or capability.</p>
<p>Nothing contained in this document is to be construed as relieving any licensee from any other pertinent requirements. It is the licensee&rsquo;s responsibility to identify and comply with all applicable regulations and licence conditions.</p>  </div>
<p>By following the information in this regulatory document, applicants will submit the appropriate information to demonstrate that they are qualified and will make adequate and reasonable provisions to undertake the activity to be licensed.</p>
<p>The information in this document is consistent with modern national and international practices addressing issues and elements that control and enhance nuclear safety. In particular, they establish a modern, risk-informed approach to the licensing of nuclear power plants.</p>
</div>  <div className="clear"></div>
<div className="col-md-12 module-table-contents">
<h2>Table of Contents</h2>
<ul>
<li><a href="#sec1">1. Introduction</a>
<ul>
<li><a href="#sec1-1">1.1 Purpose</a></li>
<li><a href="#sec1-2">1.2 Scope</a></li>
<li><a href="#sec1-3">1.3 Relevant legislation</a></li>
<li><a href="#sec1-4">1.4 CNSC contact information</a></li>
</ul></li>
<li><a href="#sec2">2. Licensing Basis, Process and Submission</a>
<ul>
<li><a href="#sec2-1">2.1 Licensing basis</a></li>
<li><a href="#sec2-2">2.2 Licensing process</a></li>
<li><a href="#sec2-3">2.3 Submitting the license application</a></li>
</ul></li>
<li><a href="#sec3">3. Applicant&#39;s General Information</a>
<ul>
<li><a href="#sec3-1">3.1 Identification and contact information</a></li>
<li><a href="#sec3-2">3.2 Facility and activities to be licensed</a></li>
<li><a href="#sec3-3">3.3 Supporting information</a></li>
</ul></li>
<li><a href="#sec4">4. Safety Policies, Programs, Procedures and Other Safety and Control Measures</a>
<ul>
<li><a href="#sec4-1">4.1 Management system</a>
<ul>
<li><a href="#sec4-1-1">4.1.1 General considerations</a></li>
<li><a href="#sec4-1-2">4.1.2 Management system</a></li>
<li><a href="#sec4-1-3">4.1.3 Organization</a></li>
<li><a href="#sec4-1-4">4.1.4 Performance assessment, improvement and management review</a></li>
<li><a href="#sec4-1-5">4.1.5 Operating experience</a></li>
<li><a href="#sec4-1-6">4.1.6 Configuration management and change control</a></li>
<li><a href="#sec4-1-7">4.1.7 Safety culture</a></li>
<li><a href="#sec4-1-8">4.1.8 Records management</a></li>
<li><a href="#sec4-1-9">4.1.9 Business continuity</a></li>
</ul></li>
<li><a href="#sec4-2">4.2 Human performance management</a>
<ul>
<li><a href="#sec4-2-1">4.2.1 General considerations</a></li>
<li><a href="#sec4-2-2">4.2.2 Human performance program</a></li>
<li><a href="#sec4-2-3">4.2.3 Personnel training</a></li>
<li><a href="#sec4-2-4">4.2.4 Personnel certification</a></li>
<li><a href="#sec4-2-5">4.2.5 Initial certification examination and requalification tests</a></li>
<li><a href="#sec4-2-6">4.2.6 Work organization and job design</a></li>
<li><a href="#sec4-2-7">4.2.7 Fitness for duty</a></li>
</ul></li>
<li><a href="#sec4-3">4.3 Operating performance</a>
<ul>
<li><a href="#sec4-3-1">4.3.1 General considerations</a></li>
<li><a href="#sec4-3-2">4.3.2 Procedures</a></li>
<li><a href="#sec4-3-3">4.3.3 Safe operating envelope</a></li>
<li><a href="#sec4-3-4">4.3.4 Outage management performance</a></li>
<li><a href="#sec4-3-5">4.3.5 Accident and severe accident management and recovery</a></li>
</ul></li>
<li><a href="#sec4-4">4.4 Safety analysis</a>
<ul>
<li><a href="#sec4-4-1">4.4.1 General considerations</a></li>
<li><a href="#sec4-4-2">4.4.2 Postulated initiating events</a></li>
<li><a href="#sec4-4-3">4.4.3 Deterministic safety analysis</a></li>
<li><a href="#sec4-4-4">4.4.4 Hazard analysis</a></li>
<li><a href="#sec4-4-5">4.4.5 Probabilistic safety assessment</a></li>
<li><a href="#sec4-4-6">4.4.6 Severe accident analysis</a></li>
<li><a href="#sec4-4-7">4.4.7 Summary of analysis</a></li>
<li><a href="#sec4-4-8">4.4.8 Event migration</a></li>
</ul></li>
<li><a href="#sec4-5">4.5 Physical design</a>
<ul>
<li><a href="#sec4-5-1">4.5.1 General considerations</a></li>
<li><a href="#sec4-5-2">4.5.2 Site characterization</a></li>
<li><a href="#sec4-5-3">4.5.3 Design principles and requirements</a></li>
<li><a href="#sec4-5-4">4.5.4 Facility design</a></li>
<li><a href="#sec4-5-5">4.5.5 Structure design</a></li>
<li><a href="#sec4-5-6">4.5.6 System design</a></li>
<li><a href="#sec4-5-7">4.5.7 Fire safety and fire protection system</a></li>
<li><a href="#sec4-5-8">4.5.8 Reactor and reactor coolant system</a></li>
<li><a href="#sec4-5-9">4.5.9 Safety systems and safety support systems</a></li>
<li><a href="#sec4-5-10">4.5.10 Electrical power systems</a></li>
<li><a href="#sec4-5-11">4.5.11 Instrumentation and control</a></li>
<li><a href="#sec4-5-12">4.5.12 Control facilities</a></li>
<li><a href="#sec4-5-13">4.5.13 Steam supply system</a></li>
<li><a href="#sec4-5-14">4.5.14 Plant auxiliary systems</a></li>
<li><a href="#sec4-5-15">4.5.15 Fuel handling and storage</a></li>
<li><a href="#sec4-5-16">4.5.16 Waste treatment and control</a></li>
<li><a href="#sec4-5-17">4.5.17 Laboratories and Class II nuclear facilities</a></li>
</ul></li>
<li><a href="#sec4-6">4.6 Fitness for service</a>
<ul>
<li><a href="#sec4-6-1">4.6.1 General considerations</a></li>
<li><a href="#sec4-6-2">4.6.2 Reliability program</a></li>
<li><a href="#sec4-6-3">4.6.3 Maintenance program</a></li>
<li><a href="#sec4-6-4">4.6.4 Aging management program</a></li>
<li><a href="#sec4-6-5">4.6.5 Chemistry control program</a></li>
<li><a href="#sec4-6-6">4.6.6 Periodic and in-service inspection and testing programs</a></li>
</ul></li>
<li><a href="#sec4-7">4.7 Radiation protection</a>
<ul>
<li><a href="#sec4-7-1">4.7.1 Radiological hazard identification and assessment</a></li>
<li><a href="#sec4-7-2">4.7.2 Application of ALARA</a></li>
<li><a href="#sec4-7-3">4.7.3 Elements of the radiation protection program</a></li>
<li><a href="#sec4-7-4">4.7.4 Dose to the public</a></li>
</ul></li>
<li><a href="#sec4-8">4.8 Conventional health and safety</a>
<ul>
<li><a href="#sec4-8-1">4.8.1 General considerations</a></li>
</ul></li>
<li><a href="#sec4-9">4.9 Environmental protection</a>
<ul>
<li><a href="#sec4-9-1">4.9.1 General considerations</a></li>
<li><a href="#sec4-9-2">4.9.2 Effluent and emissions control (releases)</a></li>
<li><a href="#sec4-9-3">4.9.3 Environmental management system</a></li>
<li><a href="#sec4-9-4">4.9.4 Assessment and monitoring</a></li>
<li><a href="#sec4-9-5">4.9.5 Protection of the public</a></li>
</ul></li>
<li><a href="#sec4-10">4.10 Emergency management and fire protection</a>
<ul>
<li><a href="#sec4-10-1">4.10.1 General considerations</a></li>
<li><a href="#sec4-10-2">4.10.2 Nuclear emergency preparedness and response</a></li>
<li><a href="#sec4-10-3">4.10.3 Conventional emergency preparedness and response</a></li>
<li><a href="#sec4-10-4">4.10.4 Fire emergency preperedness and response</a></li>
</ul></li>
<li><a href="#sec4-11">4.11 Waste management</a>
<ul>
<li><a href="#sec4-11-1">4.11.1 General considerations</a></li>
<li><a href="#sec4-11-2">4.11.2 Waste management practices</a></li>
<li><a href="#sec4-11-3">4.11.3 Waste characterization</a></li>
<li><a href="#sec4-11-4">4.11.4 Waste minimization</a></li>
<li><a href="#sec4-11-5">4.11.5 Decommissioning practices</a></li>
</ul></li>
<li><a href="#sec4-12">4.12 Security</a>
<ul>
<li><a href="#sec4-12-1">4.12.1 General considerations</a></li>
<li><a href="#sec4-12-2">4.12.2 Facilities and equipment</a></li>
<li><a href="#sec4-12-3">4.12.3 Response arrangements</a></li>
<li><a href="#sec4-12-4">4.12.4 Security practices</a></li>
<li><a href="#sec4-12-5">4.12.5 Security training and qualification</a></li>
<li><a href="#sec4-12-6">4.12.6 Cyber security</a></li>
</ul></li>
<li><a href="#sec4-13">4.13 Safeguards and non-proliferation</a>
<ul>
<li><a href="#sec4-13-1">4.13.1 General considerations</a></li>
<li><a href="#sec4-13-2">4.13.2 Nuclear accountancy and control</a></li>
<li><a href="#sec4-13-3">4.13.3 Access and assistance to the IAEA</a></li>
<li><a href="#sec4-13-4">4.13.4 Operational and design information</a></li>
<li><a href="#sec4-13-5">4.13.5 Safeguards equipment, containment and surveillance</a></li>
</ul></li>
<li><a href="#sec4-14">4.14 Packaging and transport</a>
<ul>
<li><a href="#sec4-14-1">4.14.1 General considerations</a></li>
<li><a href="#sec4-14-2">4.14.2 Package design and maintenance</a></li>
<li><a href="#sec4-14-3">4.14.3 Packaging and transport program</a></li>
<li><a href="#sec4-14-4">4.14.4 Registration for use</a></li>
</ul></li>
</ul></li>
<li><a href="#sec5">5. Other Matters of Regulatory Interest</a>
<ul>
<li><a href="#sec5-1">5.1 Reporting requirements</a></li>
<li><a href="#sec5-2">5.2 Public information and disclosure program</a></li>
<li><a href="#sec5-3">5.3 Aboriginal engagement</a></li>
<li><a href="#sec5-4">5.4 Cost recovery, financial guarantees and insurance</a>
<ul>
<li><a href="#sec5-4-1">5.4.1 Cost recovery</a></li>
<li><a href="#sec5-4-2">5.4.2 Financial guarantees</a></li>
<li><a href="#sec5-4-3">5.4.3 Nuclear liability insurance</a></li>
</ul></li>
</ul></li>
<li><a href="#AppA">Appendx A: Safety and Control Areas</a></li>
<li><a href="#AppB">Appendx B: Regulatory Documents and Industry Standards</a>
<ul>
<li><a href="#AppB-1">B.1: Regulatory documents and industry standards to be applied as requirements for all applicants</a></li>
<li><a href="#AppB-2">B.2: Regulatory documents and industry standards to be applied as requirements for new facilities and addressed as guidance for existing facilities</a></li>
<li><a href="#AppB-3">B.3: Regulatory documents and industry standards to be addressed as guidance</a></li>
</ul></li>
<li><a href="#glossary">Glossary</a></li>
<li><a href="#ref">References</a></li>   </ul>
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
<h3 id="sec1-1">1.1 Purpose</h3>  <p>This licence application guide identifies the information to be provided in support of an application for a licence to operate a nuclear power plant (NPP). It provides instructions, direction and guidance for completing an application and submitting the information to the Canadian Nuclear Safety Commission (CNSC).</p>  <p>By following the information in this regulatory document, applicants will submit the appropriate information to demonstrate that they are qualified and will make adequate and reasonable provisions to undertake the activity to be licensed.</p>  <p>This document is not intended for applications for a licence amendment or revocation of an operating licence.</p>
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
<h3 id="sec1-2">1.2 Scope</h3>  <p>This document provides information for licensing a nuclear power plant. It will be used to assess licence applications for proposed new reactor facilities and for licence renewals for existing facilities. When the Commission grants a licence, the information provided in the licence application will form part of the licensing basis.</p>  <p>A proponent must possess a licence to operate before operation of the nuclear facility commences. Initial operation of a nuclear facility commences when fuel is loaded (i.e., no fuel may be loaded before the licence to operate has been granted by the CNSC).</p>  <p>Existing licensees will have already submitted the majority of the required information with previous licence applications; in such cases, they may map the information to the safety and control area framework (described in this document) instead of resubmitting existing information.</p>
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
<h3 id="sec1-3">1.3 Relevant legislation</h3>  <p>The following provisions of the <em>Nuclear Safety and Control Act</em> (NSCA) are relevant to this document:</p>
<ul>
<li>subsection 24(4) of the NSCA states that "No licence shall be issued, renewed, amended or replaced &ndash; and no authorization to transfer one given &ndash; unless, in the opinion of the Commission, the applicant or, in the case of an application for an authorization to transfer the licence, the transferee<br />
(a) is qualified to carry on the activity that the licence will authorize the licensee to carry on; and<br />
(b) will, in carrying on that activity, make adequate provision for the protection of the environment, the health and safety of persons and the maintenance of national security and measures required to implement international obligations to which Canada has agreed."</li>
<li>subsection 24(5) of the NSCA states that "a licence may contain any term or condition that the Commission considers necessary for the purposes of this Act, including a condition that the applicant provide a financial guarantee in a form that is acceptable to the Commission"</li>
<li>paragraphs (a) and (e) of section 26 of the NSCA state that "Subject to the regulations, no person shall, except in accordance with a licence,<br />
(a) possess, transfer, import, export, use or abandon a nuclear substance, prescribed equipment or prescribed information<br />
[…]<br />
(e) prepare a site for, construct, operate, modify, decommission or abandon a nuclear facility"</li>
</ul>  <p>The relevant sections of the regulations made under the NSCA are included in the content of this document.</p>  <p>The applicant must also comply with all applicable laws and regulations at all jurisdictional levels, provided they do not conflict with the NSCA and the regulations made under the NSCA. The applicant is expected to notify CNSC staff of any conflicts and to address these on a case-by-case basis by working collaboratively with other agencies to minimize duplicate or conflicting requirements. Some examples of other applicable legislation include the <em>Canada Labour Code</em>, the <em>Transportation of Dangerous Goods Act, 1992</em> and the <em>Fisheries Act</em>.</p>
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
<h3 id="sec1-4">1.4 CNSC contact information</h3>  <p>A single point of contact from the CNSC is assigned to work with every licensee or applicant. This point of contact can provide the licensee or applicant with additional information or explanation of the information contained within this document.</p>  <p>The applicant should contact the CNSC early in the licence application process, and request the name and contact information of the single point of contact assigned to their licence application.</p>  <p>To contact the CNSC, refer to the CNSC&#39;s website at nuclearsafety.gc.ca/eng/contact-us/.</p>
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
<h2 id="sec2">2. Licensing Basis, Process and Submission</h2>  <p>This section provides information on the licensing basis and process, and on submitting the licence application.</p>
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
<h3 id="sec2-1">2.1 Licensing basis</h3>  <p>The licensing basis sets the boundary conditions for acceptable performance at a nuclear facility. It establishes the basis for the CNSC&#39;s compliance program, which is designed to ensure that the licensee continues to meet requirements and conduct the licensed activity within the licensing basis. The concept of the licensing basis is explained in the CNSC&#39;s information document INFO-0795, <em>Licensing Basis Objective and Definition</em>. [1]</p>  <p>CNSC staff will review the application and assess whether the information is acceptable. When the Commission grants a licence, the information describing the safety and control measures (provided in support of the licence application) will form part of the licensing basis.</p>
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
<h3 id="sec2-2">2.2 Licensing process</h3>  <p>The CNSC information document INFO-0756, rev. 1, <em>Licensing Process for New Nuclear Power Plants in Canada</em> [2] clarifies the current licensing process in the context of the NSCA.</p>  <p>The licensing process is initiated when the applicant submits a licence application. The licence application must contain sufficient information to meet regulatory requirements and to demonstrate that the applicant is qualified to carry on the licensed activity and will make adequate provisions to protect the health, safety and security of persons and the environment.</p>  <p>The applicant should ensure that the licence application includes all of the information requested in this licence application guide and a full description of the safety case for the facility. Note: It is acceptable to provide a cross-reference to a supporting document that is included with the licence application.</p>  <p>For an application for a new licence, the applicant should complete all sections of this licence application guide and provide references to, or updates to the references to, any documents that were previously provided in applications for a licence for site preparation or construction. The application for a new licence should be submitted no later than 24 months in advance of the target start date of operation.</p>  <p>For the renewal of an existing licence, the applicant should provide the information described in this licence application guide and the results of the integrated implementation plan (IIP) derived from a periodic safety review (PSR).</p>  <p>A PSR is used to determine the extent to which the nuclear power plant conforms to applicable regulatory requirements and to modern codes, standards and practices, and to identify any factors that would limit its continued safe operation. In performing a PSR, the licensee is required to conduct comprehensive reviews, addressing all aspects of safety, in order to conduct a global assessment and develop an IIP that describes the requirements for repairs, replacements and modifications to be carried out by the licensee during the next licence period. The IIP prepared in support of the PSR should be mapped to the framework provided in this document and submitted as reference in the application.</p>   <p>The application should be completed in the official language of the applicant. Where there is some redundancy of information requested in various sections, the applicant is encouraged to cross-reference to detailed information in other sections as appropriate.</p>  <p>When necessary for increased clarity, the CNSC may request additional information even though the application generally conforms to the guidelines provided in this document. Applicants should ensure they have included sufficiently detailed information to allow the licensing process to proceed efficiently.</p>  <p>For additional information on conducting a PSR, refer to REGDOC-2.3.3, <em>Integrated Safety Reviews</em>. [3]</p>
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
<h3 id="sec2-3">2.3 Submitting the licence application</h3>  <p>The applicant should ensure that the application is complete, dated and signed by the appropriate authority, and that all supporting documents are clearly identified and cross-referenced.</p>  <p>If the licence application is subject to the <em>Canadian Nuclear Safety Commission Cost Recovery Fees Regulations</em>, ensure that payment is enclosed. For further details, contact the CNSC Cost Recovery Advisory Group at 613-995-5894 or toll-free at 1-888-229-2672.</p>  <p>The applicant should submit two printed copies of the application (signed and dated) to the Commission at:</p>
<ul className="list-bullet-none">
<li>Commission Secretary<br />
Canadian Nuclear Safety Commission<br />
P.O. Box 1046, Station B<br />
280 Slater Street<br />
Ottawa, ON K1P 5S9</li>
</ul>  <p>As required by section 27 of the <em>General Nuclear Safety and Control Regulations</em>, the applicant shall keep a complete copy of the application for their records.</p>  <p>Applicants are strongly encouraged to submit the documents in electronic format (for example, on secure memory devices). Note that prescribed information, such as details of the security program, may be transmitted only by secure means such as letter mail or encrypted secure memory devices. It is prohibited to submit prescribed information via unencrypted email. Guidance for the protection and transmission of prescribed information can be found in REGDOC-2.12.3, <em>Security of Nuclear Substances: Sealed Sources</em>. [4]</p>  <p>All information submitted is subject to the provisions of the <em>Access to Information Act and the Privacy Act</em>. It is the responsibility of the applicant to identify and justify any material that is not suitable for disclosure.</p>
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
<h2 id="sec3">3. Applicant&#39;s General Information</h2>  <p>This section addresses the requirements of the following regulations made under the NSCA:</p>
<ul>
<li><em>General Nuclear Safety and Control Regulations</em>, paragraphs 3(1)(a), (b), (c), (k) and (m) and sections 15 and 27</li>
<li><em>Class I Nuclear Facilities Regulations</em>, paragraphs 3(c), (i) and (j)</li>
</ul>  <p>The licence application should include the following general information.</p>
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
<h3 id="sec3-1">3.1 Identification and contact information</h3>  <p><strong>Current licence number (for renewal)</strong><br />  If this licence application is for renewal of an existing licence, provide the current power reactor operating licence (PROL) number.</p>  <p><strong>Applicant&#39;s name</strong><br />  Provide the name of the person or organization applying for the licence. Indicate the name as it appears on the proof of legal status documentation, such as the proof of incorporation or sole proprietorship. Name an individual only if that person is a sole proprietor or will be solely responsible for the licence.</p>  <p><strong>Head office address</strong><br />  Provide the legal, physical address of the applicant&#39;s head office, including the complete street name and number, rural route number if appropriate, city, province or territory, and postal code. A post office box number is not acceptable for a head office address.</p>  <p>Notify the Commission within 15 days of any changes to this information.</p>  <p><strong>Mailing address</strong><br />  Provide the mailing address if different from the head office address, including the complete street name and number, rural route number if appropriate, city, province or territory, and postal code.</p>  <p>If no address is provided here, the licence issued in response to the application will be mailed to the head office address. A post office box is acceptable as a mailing address.</p>  <p>Notify the Commission within 15 days of any changes to this information.</p>  <p><strong>All persons who have authority to interact for the applicant with the CNSC</strong><br />  Provide a list of names, positions, and contact information of all persons who are authorized by the applicant to interact with the CNSC.</p>   <p>Notify the Commission within 15 days of any changes to this information.</p>  <p><strong>Proof of legal status</strong><br />  First-time applicants must provide proof of legal status by appending proof of incorporation, corporation number or charter. When submitting an application to renew a licence, proof of legal status should be provided if the applicant&#39;s original organization name has changed.</p>  <p>If the applicant is a corporation, the application should include the following information:</p>
<ul>
<li>corporation&#39;s legal name</li>
<li>corporation number</li>
<li>date of incorporation</li>
<li>registered office address (if different from the head office address)</li>
</ul>  <p><strong>Evidence that the applicant is the owner of the site or has authority from the owner of the site to carry on the activity to be licensed</strong><br />  Provide evidence that the applicant is the owner of the site or that it has the authority from the owner to operate a nuclear power plant on that site.</p>  <p><strong>Identification of persons responsible for management and control of the licensed activity</strong><br />  Provide a comprehensive list of all persons responsible for management and control of the licensed activity, including:</p>
<ul>
<li>names</li>
<li>positions</li>
<li>contact information (email, telephone, facsimile)</li>
<li>mailing addresses (if different from the business mailing address); include the complete street name and number, rural route number if appropriate, city, province or territory, and postal code</li>
<li>responsibilities</li>
</ul>  <p><strong>Billing contact person</strong><br />  Provide the following information for the person responsible for licence fee payments:</p>
<ul>
<li>name</li>
<li>position</li>
<li>contact information (email, telephone, facsimile)</li>
<li>mailing address (if different from the business mailing address); include the complete street name and number, rural route number if appropriate, city, province or territory, and postal code</li>
</ul>  <p><strong>Legal signing authority</strong><br />  Provide the name, title and contact information (address, email address and telephone number) of the individual who is signing the application as the applicant authority.</p>  <p>By signing, the applicant authority is indicating that they understand that all statements and representations made in the application and on supplementary pages are binding on the applicant.</p>
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
<h3 id="sec3-2">3.2 Facility and activities to be licensed</h3>  <p><strong>Licence period</strong><br />  State the requested licence period (years or months).</p>  <p>The CNSC uses flexible licence periods, which enable it to regulate NPPs in a risk-informed manner by adjusting the licence period in consideration of the licensee&#39;s previous performance and findings of its compliance-verification activities. With the implementation of the PSR process, CNSC staff will be recommending to the Commission a 10 year licence period. The licensee may request a specific licence period to match planned activities or anticipated change in status (such as the beginning or end of refurbishment).</p>  <p><strong>Statement of the main purpose</strong><br />  Provide a summary of the main purpose, and a list of all activities to be licensed for this facility.</p>  <p><strong>Description of site</strong><br />  Provide a site plan and site description (drawings), and land ownership and control documentation.</p>  <p><strong>Description of the facility&#39;s existing licensing status, if any</strong><br />  If a facility on the site is currently licensed by the CNSC, or a previous licence application is pending, provide a description of the licensing status.</p>  <p><strong>Nuclear substances</strong><br />  Provide a list of any nuclear substance to be encompassed by the licence. Include the scientific name, the maximum quantity and the form of each nuclear substance.</p>
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
<h3 id="sec3-3">3.3 Supporting information</h3>  <p><strong>Permits, certificates and other licences</strong><br />  Describe the relationship of this application to any previous licences (for example, siting, construction or operation) issued by the CNSC for this facility, including any changes to the safety case that was included in the previous licences.</p>  <p>The applicant should reference any other CNSC licences that control other nuclear substances at the nuclear facility; for example, licences for nuclear substances and radiation devices, dosimetry service, and import/export of nuclear substances.</p>  <p><strong>Similar facilities</strong><br />  Provide a list of any similar facilities owned or operated by the applicant that have been assessed and licensed by either the CNSC or any foreign national regulatory body, and a description of the main differences or design improvements made since that earlier licence was granted. Include the following information:</p>
<ul>
<li>facility name</li>
<li>location</li>
<li>description</li>
</ul>  <p><strong>Supporting documents</strong><br />  Provide a summary list of all supporting documents that are incorporated by reference in this application. Provide accurate document titles, identifiers, issuance dates and revision numbers for all supporting documents. An example of a possible format for this list may be found in tables B.1, B.2 and B.3 in appendix B.</p>  <p>The documents listed in this summary should also be referenced in other sections of this application, as appropriate. Any references made to a supporting document should indicate the relevant parts of the documents.</p>  <p>Material that is incorporated by reference should have been previously submitted to the CNSC or be available from the applicant upon request.</p>  <p>Supporting documents include:</p>
<ul>
<li>the results of experimental programs, tests or analyses (for example, results of manufacturers&#39; material tests and qualification data, and results of fuel behaviour experimental programs)</li>
<li>those that have been submitted to, received from, or published by a foreign national regulatory body</li>
<li>information published by a national agency or an international nuclear agency such as the International Atomic Energy Agency (IAEA) or the International Commission on Radiological Protection (ICRP)</li>
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
<div id="4"></div>
<h2 id="sec4">4. Safety Policies, Programs, Procedures and Other Safety and Control Measures</h2>  <p>It is the responsibility of the applicant to ensure that they have included sufficiently detailed information about the safety policies, programs, procedures and other documents that describe safety and control measures. CNSC staff&#39;s review of the information will be used to verify that the applicant is qualified to carry on the licensed activity, and that adequate provision will be made to protect the health, safety and security of persons and the environment.</p>  <p>The CNSC uses safety and control areas (SCAs) as the technical topics to assess, review, verify and report on regulatory requirements and performance across all regulated facilities and activities. Each of the 14 SCAs is further divided into specific areas that cover all of the detailed information required for a complete assessment and review.</p>  <p>The applicant&#39;s safety policies, programs, procedures and other safety and control measures shall address the following SCAs (see also appendix A):</p>
<ul>
<li>management system</li>
<li>human performance management</li>
<li>operating performance</li>
<li>safety analysis</li>
<li>physical design</li>
<li>fitness for service</li>
<li>radiation protection</li>
<li>conventional health and safety</li>
<li>environmental protection</li>
<li>emergency management and fire protection</li>
<li>waste management</li>
<li>security</li>
<li>safeguards and non-proliferation</li>
<li>packaging and transport</li>
</ul>  <p>The applicant&#39;s policies, programs and procedures shall also address other matters of regulatory interest, such as public information and disclosure programs, financial guarantees and Aboriginal engagement.</p>  <p>If the application does not follow the order and organization of SCAs as shown above, the applicant should provide a formal mapping of their application to the CNSC&#39;s SCA framework, showing how each SCA is addressed in the application.</p>  <p>The requirements and guidance provided in this document do not prevent applicants from proposing alternatives, but any proposal should appropriately reflect the complexities and hazards of the activities described in the application.</p>   <p>The application should cite CNSC regulatory documents and other codes and standards that will govern program objectives that demonstrate the applicant&#39;s ability to meet the safety and control measures. Appendix B provides three lists of documents:</p>
<ul>
<li>all applicants shall cite the documents listed in table B.1</li>
<li>new applicants shall cite the documents listed in table B.2; for licence renewals at existing NPPs, applicants should cite them to the extent practicable</li>
<li>all applicants should take into consideration the documents listed in table B.3</li>
</ul>  <p>For new licence applications, the applicant should confirm which editions of the codes and standards have received regulatory acceptance prior to the development of safety policies, programs, procedures and other safety and control measures.</p>  <p>For licence renewals at existing NPPs:</p>
<ul>
<li>The applicant should indicate the editions of the codes and standards used.</li>
<li>The applicant shall submit improvement plans and significant activities to be carried out during the proposed licence period. These improvements include activities to be carried out during special outages (such as refurbishment outages), programmatic changes and major hardware modifications, replacements or repairs. Where changes are planned to meet new industry standards or practices (for example, changes related to the implementation of new documents listed in table B.2), the applicant shall identify the standard to be met and provide an implementation plan that includes target dates for compliance. The integrated implementation plan (IIP) derived from a periodic safety review (PSR) will provide much of the information required to address this section.</li>
<li>The applicant shall provide a statement of performance assessment that includes significant findings and lessons learned over the previous licence period. This statement should describe, at a minimum:
<ul>
<li>industrial safety performance history</li>
<li>past performance under each SCA; for the SCAs covered by the PSR, this information may come from the PSR for safety factor 8: safety performance</li>
<li>significant findings that affect or have previously affected the conduct of licensed activities</li>
<li>significant lessons learned from operating experience (OPEX) ; for the SCAs covered by the PSR, this information may come from the PSR for safety factors 8 : safety performance and 9 : use of experience from other plants and research findings</li>
<li>significant changes to operational states (for example, return to service from refurbishment, changes to output, units entering or leaving prolonged layup)</li>
<li>results from major self-assessments (for example, a periodic safety review (PSR) or any functional area review  such as a management system review or OPEX effectiveness review), including strengths and areas for improvements</li>
<li>results from any environmental assessments (EAs) conducted in support of this application or a previous application</li>
</ul></li>
</ul>  <p>The applicant should demonstrate how EA information (such as an environmental impact statement) has informed the relevant SCAs in the licence application.</p>  <p>All programs should allow for continuous development on an on-going basis.</p>  <p>For cases where the applicant has previously submitted a program to the CNSC, the applicant may reference the documentation and provide a mapping to the framework provided in this document rather than resubmit the program.</p>  <p>Any additional planned changes that may affect the applicant&#39;s ability to carry out the licensed activities (for example, significant organizational changes, business continuity and management structure) should be described.</p>
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
<h3 id="sec4-1">4.1 Management system</h3>  <p>The management system SCA covers the framework that establishes the processes and programs required to ensure an organization achieves its safety objectives, continuously monitors its performance against these objectives, and fosters a healthy safety culture.</p>  <p>This section addresses the requirements of the following regulations made under the NSCA:</p>
<ul>
<li><em>General Nuclear Safety and Control Regulations</em>, paragraphs 3(1)(k) and 12(1)(a), and sections 15, 27 and 28</li>
<li><em>Class I Nuclear Facilities Regulations</em>, paragraphs 3(c), (d) and (f), 6(d) and (g), and section 14</li>
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
<div id="4.1.1"></div>
<h4 id="sec4-1-1">4.1.1 General considerations</h4>  <p>The application should describe the management system programs, processes and procedures that have been or will be put in place to protect health, safety and the environment, and a description of the organizational management structure.</p>  <p>The application should also describe the safety policies, the roles of safety assessment organizations, and the advisory committees that will advise the management of the operating organization.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.1.2"></div>
<h4 id="sec4-1-2">4.1.2 Management system</h4>  <p>The applicant&#39;s management system should address all aspects of the management of the facility, including health, safety, security, environment, economics (with regards to safe operation) and quality. The management system should be implemented in all plant activities, such as engineering assessment and analysis, procurement of goods and services, manufacturing, commissioning and operation.</p>  <p>The application should describe the programs and processes in place to manage the key functions important to safety.</p>  <p>The application should include an explanation of the management controls for the design, construction, commissioning, operations and technical support functions (including control of contractors) and sufficient objective evidence to demonstrate how these controls have been and will continue to be exercised so as to promote and assure the safety aspects of work being performed.</p>  <p>The application should describe the measures taken to ensure the implementation and observance of the management system procedures.</p>  <p>The application should describe how management will make its high-level expectations clear to all personnel, through formal and well-publicized statements on its vision, mission, core values, guiding principles, safety policy and safety culture. The applicant should confirm that personnel responsible for compliance have access, whenever required, to senior levels of the applicant&#39;s management structure.</p>  <p>The applicant should describe the procurement program for licensed activity use. The application should include the provisions to ensure that procurement documents are clear and complete.</p>  <p>The overall approach to procurement and manufacturing should be systematically controlled in all respects. The application should explain the steps to be taken and the measures implemented to assure that applicable specifications of each good or service to be procured are met.</p>  <p>If the applicant plans to apply a different management system and organizational structure for operating the plant (as compared to constructing and commissioning), the application should describe the arrangements including those for the transition from construction to commissioning to operations.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.1.3"></div>
<h4 id="sec4-1-3">4.1.3	Organization</h4>  <p>The applicant should document the organizational structure, including all positions with responsibilities for the management and control of the licensed activity. The description of the corporate and site management structures should include information on major technical support organizations, designer, constructor, major contractors and subcontractors, and the internal allocation of functions, responsibilities and authority.</p>  <p>The application should describe:</p>
<ul>
<li>the roles and responsibilities of each component within the applicant&#39;s organization, and the qualifications for each component, including those of the oversight bodies (for example, safety committees, advisory panels)</li>
<li>the approach, programs and processes proposed for staffing and service procurement</li>
<li>the monitoring and management of contractors</li>
</ul>  <p>The application should describe how management functions (such as policy making, operating, support and review functions) necessary for the safe operation of the plant are integrated into the management system.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.1.4"></div>
<h4 id="sec4-1-4">4.1.4	Performance assessment, improvement and management review</h4>  <p>The applicant should describe the audit and review program. The applicant should provide sufficient objective evidence from the audit and review program to demonstrate that the safety policy is implemented effectively.</p>  <p>The application should describe the provisions made for an independent and ongoing safety review, including an objective internal self-evaluation program supported by periodic external reviews and taking into account national and international experience and feedback from the nuclear industry.</p>  <p>The application should describe how organizational effectiveness and safety performance are measured, including the development of performance indicators. The indicators should be used to detect any shortcomings and deteriorations in safety such that they will be addressed in a timely manner.</p>  <p>The program should ensure that any development or change in organization that could lead to the degradation of safety performance during plant operation is identified. Measures should be in place to prevent such degradation.</p>  <p>The applicant should demonstrate that the analysis of the causes of all incidents and events will consider technical, organizational and human factors aspects, and that the necessary arrangements have been made to report and analyze near-miss events.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.1.5"></div>
<h4 id="sec4-1-5">4.1.5	Operating experience</h4>  <p>The application should describe how the program has addressed the ways in which plant incidents and events are identified, recorded, investigated, trended and reported, both internally and to the regulator, including how these incidents and events will be used to promote enhanced safety performance of the personnel and the plant.</p>  <p>The applicant should demonstrate that the program covers feedback of relevant operational experience from other plants, including the identification of generic problems and the implementation of measures for improvements as required. The applicant should also explain how feedback from non-event-related operational feedback (for example, observation of good practices, lessons learned from post-job briefings) will be collected, analyzed and disseminated.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.1.6"></div>
<h4 id="sec4-1-6">4.1.6	Configuration management and change control</h4>  <p>The application should describe the processes proposed to identify, review, approve, control, plan, execute, audit and document the activities related to modifications to the following elements:</p>
<ul>
<li>program management &ndash; directing and monitoring the development and implementation of configuration management</li>
<li>design requirements &ndash; establishing, documenting, maintaining and communicating design requirements associated with structures, systems and components (SSCs)</li>
<li>information control &ndash; identifying and managing facility configuration information related to the physical configuration and the design requirements</li>
<li>change control &ndash; maintaining conformance among the design requirements, physical configuration and the facility configuration information as changes are made, and resolving identified configuration management discrepancies</li>
<li>assessments &ndash; defining facility-configuration management needs and measuring the effectiveness of design requirements, physical configuration and facility configuration information</li>
<li>training &ndash; providing assurance that personnel have sufficient knowledge of the configuration management concepts, terminology (including definitions) and procedures</li>
</ul>  <p>The applicant should demonstrate that processes are in place to evaluate the safety significance of proposed modifications, including the requirements for seeking CNSC approvals where necessary.</p>  <p>For pressure boundary SSCs, the application should describe the arrangements that have been made to ensure the related quality assurance program, its implementation processes and procedures. Any modifications to SSCs are subject to approval by an authorized inspection agency acceptable to the CNSC.</p>  <p>The modification control processes should cover the changes made to the physical plant, to safety-related software, to operating limits and to other important plant procedures.</p>  <p>The applicant should ensure that the as-built configuration of the plant is aligned with the design and safety analysis.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.1.7"></div>
<h4 id="sec4-1-7">4.1.7	Safety culture</h4>  <p>The applicant should demonstrate that the following elements and characteristics are included in a safety culture program:</p>
<ul>
<li>a common understanding of the key aspects of safety culture</li>
<li>means to support individuals and teams to carry out their tasks safely and successfully by reinforcing learning and cultivating a questioning attitude</li>
<li>means by which the organization continually seeks to develop and improve safety performance</li>
<li>safety culture applies throughout the organization; i.e., everyone in the organization has an obligation to ensure that safety is the top priority</li>
<li>safety is a clearly recognized value</li>
<li>accountability for safety in the organization is clear</li>
<li>safety is integrated into all activities in the organization</li>
<li>a safety leadership process exists in the organization</li>
<li>safety culture is learning-driven in the organization</li>
</ul>  <p>The application should describe the strategy leading to the establishment and maintenance of a healthy safety culture for all personnel performing licensed activities, including all levels of contractors. For additional information, refer to the documents listed in appendix B.</p>  <p>The application should clearly state how the principles of safety culture will be continually promoted and assessed throughout the organization. In addition, the application should describe how the results of documented periodic self-assessments will be used in the overall strategy for improving safety performance.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.1.8"></div>
<h4 id="sec4-1-8">4.1.8	Records management</h4>  <p>The application should describe the provisions for maintaining all required documents and records, including the processes for identifying and categorizing controlled documents. The description should include the measures for creating, receiving, classifying, controlling, storing, retrieving, updating, tracking, revising and deleting documents and records that relate to plant operation.</p>  <p>Record management controls should include considerations of elements such as retention periods, methods for indexing and placing records in proper locations, and provisions for security and access.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.1.9"></div>
<h4 id="sec4-1-9">4.1.9	Business continuity</h4>  <p>The applicant should submit a business continuity plan, a pandemic plan and a contingency plan to deal with possible labour disruptions while maintaining staffing of key positions in support of the minimum shift complement.</p>  <p>The pandemic plan should include proactive measures to prevent the spread of disease. It should also contain measures to mitigate the effects of widespread absenteeism that could occur during the height of a pandemic outbreak.</p>
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
<h3 id="sec4-2">4.2 Human performance management</h3>  <p>The human performance management SCA covers activities that enable effective human performance through the development and implementation of processes that ensure a sufficient number of licensee personnel are in all relevant job areas and have the necessary knowledge, skills, procedures and tools in place to safely carry out their duties.  This section addresses the requirements of the following regulations made under the NSCA:</p>
<ul>
<li><em>General Nuclear Safety and Control Regulations</em>, sections 12 and 17</li>
<li><em>Class I Nuclear Facilities Regulations</em>, paragraphs 3(f) and 6(d), (l), (m) and (n), and sections 9, 10, 11, and 12</li>
<li><em>Nuclear Security Regulations</em>, section 38 (all requirements related to security training)</li>
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
<div id="4.2.1"></div>
<h4 id="sec4-2-1">4.2.1	General considerations</h4>  <p>The application should describe the qualifications, adequate numbers, skills and competencies required by personnel (both staff and contractors) at the facility.</p>  <p>The description should include the measures to ensure a sufficient number of personnel in all job areas, and that personnel have the necessary knowledge, skills, procedures and tools in place to safely carry out their duties.</p>  <p>The application should describe the measures to promote and support human performance at all levels in the organization. The application should demonstrate how the applicant&#39;s programs and processes interface to support continuous enhancement of human performance. The application should demonstrate various measures to identify and monitor human performance weaknesses and to correct any organizational deficiencies to minimize human error.</p>  <p>The application should describe the succession plan &ndash; including measures for knowledge transfer – to ensure that personnel are recruited and trained to fill each key role within the organization.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.2.2"></div>
<h4 id="sec4-2-2">4.2.2	Human performance program</h4>  <p>The application should describe how the human performance program addresses and integrates the range of human factors that influence human performance, including but not limited to:</p>
<ul>
<li>the provision of qualified personnel</li>
<li>the reduction of human error</li>
<li>organizational support for safe work activities</li>
<li>the continuous improvement of human performance</li>
<li>monitoring hours of work</li>
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
<div id="4.2.3"></div>
<h4 id="sec4-2-3">4.2.3	Personnel training</h4>  <p>The applicant shall provide a training system that is in accordance with REGDOC-2.2.2, <em>Personnel Training</em>. [5]. The training system should systematically define, design, develop, implement, evaluate, record and manage all training, including continuing training, for all personnel who are employed in safety-sensitive occupations and/or safety-sensitive positions.</p>  <p>The applicant should submit a description of the full-scope training simulator used for the facility and the manner in which the simulator will be used to support operation.</p>  <p>The training programs and facilities, including simulator facilities, should reflect the operating status of the plant. The applicant should describe the provisions to ensure that, as the facility undergoes physical changes during operation or changes to operational state, the training programs will be revised to accommodate these changes. The applicant should include information on how such changes are captured and reviewed and how the training program is modified appropriately.</p>  <p>The application should identify the personnel positions required for all plant states, along with the proposed occupational groupings. The application should explain in general terms how the analysis connecting the two has been performed, as well as how the individual personnel will be recruited, their skills assessed and the ensuing performance gaps identified to determine the required level of training programs. Finally, the application should outline the qualification and skill requirements that have been set for contracting organizations and their personnel who perform activities relating to the plant.</p>  <p>For new applicants who plan to use previously-certified or experienced staff for certified positions, the applicant should perform a training needs analysis.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.2.4"></div>
<h4 id="sec4-2-4">4.2.4	Personnel certification</h4>  <p>For positions requiring certification as set out in RD-204, <em>Certification of Persons Working at Nuclear Power Plants</em>, [6] the application shall include details on the program that will be implemented to achieve the specified requirements for certification training.</p>  <p>The application should describe the program established for the certification of personnel for work relating to the operation and maintenance of the plant. The application should describe how the certification training will be linked to, or build upon, the training programs that are common to other personnel. The additional training for certified personnel should use a systematic approach.</p>  <p>The application should include any proposed alternate approaches that will be implemented to achieve certification and information on how the certification program training and testing positions will be staffed. The application should include information on the personnel required for certification-related activities on the full-scope training simulator.</p>  <p>The applicant should demonstrate that training and assessment of certified personnel addresses the skills and knowledge necessary to perform the duties required to oversee and supervise operating activities. The applicant should submit the certification exam results or provide references where appropriate.</p>  <p>The applicant should submit roles and responsibilities of certified positions to support the training programs for certified personnel at the plant. The applicant should demonstrate that the program ensures that only personnel who hold a certification for that position are assigned to the positions directly related to safe operation (for example, responsible health physicist, shift manager, authorized nuclear operator).</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.2.5"></div>
<h4 id="sec4-2-5">4.2.5	Initial certification examinations and requalification tests</h4>  <p>The application shall describe an examination program to support personnel certification in accordance with RD-204, <em>Certification of Persons Working at Nuclear Power Plants</em>. [6]</p>  <p>The applicant should demonstrate that the program ensures that CNSC examination guides EG 1 and EG 2 and the document <em>Requirements for the Requalification Testing of Certified Shift Personnel at Nuclear Power Plants, Revision 2</em> are applied while administering the certification examinations required by RD-204. [6]</p>  The applicant should demonstrate that the document Requirements for the Requalification Testing of Certified Shift Personnel at Nuclear Power Plants, Revision 2 is applied for persons seeking renewal of certification.  <p>The two examination guides and the document <em>Requirements for the Requalification Testing of Certified Shift Personnel at Nuclear Power Plants, Revision 2</em> are available from the CNSC (through the single point of contact between the applicant and the CNSC).</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.2.6"></div>
<h4 id="sec4-2-6">4.2.6	Work organization and job design</h4>  <p>The application should describe the minimum number of workers with specific qualifications required for normal operations and accident conditions (minimum shift complement), and the measures in place to mitigate the effect of any violations of the minimum shift complement until minimum complement is restored. The application should demonstrate that each shift&#39;s minimum shift complement will be monitored and records of each shift&#39;s complement will be kept.</p>  <p>The application should state the minimum number and position of certified personnel at all times in the nuclear facility and in the main control room.</p>  <p>The applicant should demonstrate that the adequacy of the minimum shift complement has been determined through a systematic analysis to identify the required number of workers and their qualifications. The applicant should demonstrate that the minimum shift complement can meet the performance requirements and support the safe operation of the plant.</p>  <p>For more information, refer to G-323, <em>Ensuring the Presence of Sufficient Qualified Staff at Class I Nuclear Facilities &ndash; Minimum Staff Complement</em> [7] and G-278, <em>Human Factors Verification and Validation Plans</em>. [8]</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.2.7"></div>
<h4 id="sec4-2-7">4.2.7	Fitness for duty</h4>  <p>The application shall describe how the requirements for fitness for duty will be implemented for all workers, in accordance with  RD-204, <em>Certification of Persons Working at Nuclear Power Plants</em>. [6]</p>  <p>The application should identify the oversight requirements for supervisors of certified and security personnel from the perspective of fitness for duty.</p>  <p>For more information, refer to G-323, <em>Ensuring the Presence of Sufficient Qualified Staff at Class I Nuclear Facilities &ndash; Minimum Staff Complement</em>. [7]</p>
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
<h3 id="sec4-3">4.3 Operating performance</h3>  <p>The operating performance SCA includes an overall review of the conduct of the licensed activities and the activities that enable effective performance.</p>  <p>This section addresses the requirements of the following regulations made under the NSCA:</p>
<ul>
<li><em>General Nuclear Safety and Control Regulations</em>, paragraphs 3(1)(k) and 12(1)(c), (e) and (f); subsection 12(2); paragraphs 17(b), (c) and (e); and sections 29, 30, 31 and 32</li>
<li><em>Class I Nuclear Facilities Regulations</em>, paragraphs 6(c), (d), (e), (g) and (k)</li>
<li><em>Radiation Protection Regulations</em></li>
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
<div id="4.3.1"></div>
<h4 id="sec4-3-1">4.3.1	General considerations</h4>  <p>The application shall include information on how the applicant will ensure that normal plant operations:</p>
<ul>
<li>are carried out safely, such that radiation doses to workers and members of the public &ndash; as well as any planned discharges or releases of radioactive material or hazardous substances from the plant &ndash; will be within the authorized limits specified in the <em>General Nuclear Safety and Control Regulations</em>, the Class I Nuclear Facilities Regulations and the Radiation Protection Regulations</li>
<li>adhere to the requirements in the regulations listed above, in REGDOC-2.9.1, <em>Environmental Protection: Environmental Policy, Assessments and Protection Measures</em> [9], and in any provincial legislation or other applicable codes and standards</li>
</ul>  <p>The application should describe how the SSCs will be operated in accordance with approved operating procedures during normal operation, abnormal and unplanned operational occurrences, and accident conditions. The description should include the preparation of equipment for maintenance and the monitoring of SSCs to confirm that they will continue to operate as required by the design.</p>  <p>The application should describe the principles, policies, programs and procedures for operating and maintaining the plant. The application should also describe how the applicant will:</p>
<ul>
<li>exercise overall responsibility for safety in conducting licensed activities, including ongoing upgrades and modifications to the facility</li>
<li>carry out effective oversight of these activities</li>
</ul>  <p>The application should describe how the operating principles, policies and programs will confirm that the SSCs, as an integrated unit, will perform and function in accordance with the design specifications and regulatory requirements, and as credited in the safety analysis.</p>  <p>The application should include information regarding the development, verification, validation and implementation of programs and procedures related to commissioning, reliability testing, maintenance and operation.</p>  <p>For a new facility, the application should describe the processes used to ensure that the performance of the SSCs has been assured from construction to operation and when (in the future) major modifications are made to the facility.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.3.2"></div>
<h4 id="sec4-3-2">4.3.2	Procedures</h4>  <p>The application should describe the overriding safety principles and the operating organization&#39;s management approach, policies and programs that are to be followed in the development, verification, validation and implementation of operating procedures covering normal, abnormal, unplanned and emergency conditions (including beyond-design-basis accidents and severe accidents). The application should include information on how the applicant will ensure that the normal operating procedures are conducted safely in all normal operational configurations (including startup, power operation, shutting down, shutdown, cooldown, load changes, power transients and fuel handling), and that operation will be consistent with the safe operating envelope for the plant.</p>  <p>The application should include sufficient information to demonstrate that the operator actions required to diagnose and respond to anticipated and unanticipated events are covered appropriately and use symptom-based and/or event-based procedures.</p>  <p>The application should include details of the validation and implementation of all normal, abnormal, unplanned and emergency operating procedures.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.3.3"></div>
<h4 id="sec4-3-3">4.3.3	Safe operating envelope</h4>  <p>The applicant should provide information related to the plant&#39;s safe operating envelope. The application should include a description of how the corresponding requirements for surveillance, maintenance and repair are specified, to ensure that these parameters remain within acceptable limits and that systems and components are operable. Where appropriate, this information should be supported by means of a deterministic safety analysis and a probabilistic safety assessment.</p>  <p>The application should state the safe operating limits for parameters that affect reactor core, channel and fuel bundle powers. The information submitted should describe how the applicant will comply with limits imposed by the design and safety analysis assumptions &ndash; specifically, the total power generated in any one fuel bundle, the total power generated in any fuel channel, and the total thermal power from the reactor fuel. The application should clearly describe the actions to be taken if the limits and conditions are not met.</p>  <p>The information submitted should be sufficient to demonstrate that the set of limits and conditions and the accompanying design information for the plant will be used to establish and carry out the training, qualification and certification of plant personnel.</p>  <p>The application should identify and explain how essential administrative aspects (such as minimum shift composition, hours of work and the frequency of internal reviews) have been covered in specific limits and conditions documents.</p>  <p>If a currently-licensed facility is transitioning to a safe operating envelope (SOE) program from operating policies and principles (OP&P) documents, the application should include a copy of the OP&P documents. The application should state whether the original intent of the OP&P documents has been changed in the transition to the SOE program, and describe how the changes will be addressed. The original intent of the OP&P documents was to:</p>   <ul>
<li>define the operating rules consistent with the safety analyses and other licensing support documentation within which the station will be operated, maintained and modified, all of which should ensure nuclear safety</li>
<li>specify the authorities of the station staff positions to make decisions within the defined boundaries</li>
<li>identify and differentiate between actions where discretion may be applied and where jurisdictional authorization is required</li>   </ul>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.3.4"></div>
<h4 id="sec4-3-4">4.3.4	Outage management performance</h4>  <p>The application should describe the approach and relevant arrangements that are proposed for conducting periodic shutdowns of the reactor, as required by the operating cycle and other factors. The information submitted should demonstrate that an outage management program exists for the management of planned outages, including a review to ensure proper scoping, planning and execution of safety-related commitments (such as for heat sinks and dose control). The application should also describe the policies, programs, processes and procedures governing the various aspects of outages, including human resources aspects.</p>  <p>The applicant should provide an outage schedule, including any major safety-related work that will be performed for the next licensing period. The details of the outage work may initially be limited to high-level information. The information should include, to the extent practicable:</p>
<ul>
<li>a listing of all regulatory undertakings and commitments for the outage and written notification of any changes to regulatory undertakings and commitments as soon as they become aware that the changes are required</li>
<li>outage plans that detail all major work at the NPP</li>
<li>a schedule for the submission of outage completion assurances</li>
</ul>  <p>The outage management program should include provisions to ensure that, following the restart of the reactor, an outage completion assurance statement is submitted to the CNSC to confirm that all regulatory undertakings and major work on SSCs important to safety have been successfully completed and that the nuclear facility is safe for operation. It should include designated criteria that the licensee will follow to confirm that planned and discovery work has been satisfactorily completed.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.3.5"></div>
<h4 id="sec4-3-5">4.3.5	Accident and severe accident management and recovery</h4>  <p>The application shall include guidelines for a severe accident management (SAM) program in accordance with REGDOC-2.3.2, <em>Accident Management</em>, version 2. [10]</p>  <p>The application should also include emergency operating procedures (EOPs) for accident management.</p>   <p>The information submitted should demonstrate that these procedures and guidelines support the operator when responding to anticipated and unanticipated events. The application should clearly indicate the role of the safety analysis in supporting the EOPs, including SAM guidelines.</p>  <p>A systematic approach should be taken for the development of EOPs and SAM guidelines. The description of the measures in place for accident and severe accident management should demonstrate that the following have been taken into account in the development of the EOPs and SAM guidelines (including timelines and milestones):</p>
<ul>
<li>results of all accident analyses</li>
<li>identified vulnerabilities of the plant to such accidents</li>
<li>strategies selected to deal with those vulnerabilities</li>
<li>measures to be taken to minimize the likelihood of severe accidents and to mitigate their consequences should they occur</li>
<li>principles used for development and structure of EOPs or their equivalents</li>
<li>information that is necessary for effective accident management</li>
<li>approach to operators&#39; training to deal with accidents, including plant simulator and in field drills</li>
</ul>  <p>In the application, the description of the accident management program should include high-level information on:</p>
<ul>
<li>management structure (including management, operational and technical support staff) in place to deal with the in-plant and off-plant consequences of severe accidents and the roles and responsibilities of these personnel</li>
<li>guidelines for operating procedures and training needs</li>
<li>protocol for interface with the public and with regulatory or other agencies</li>
<li>analysis methods and results of the study of the feasibility of the planned emergency arrangements</li>
</ul>  <p>The application should describe any natural event or event caused by human actions within and beyond the design basis that would affect emergency management requirements, such as forest fires, earthquakes, extreme weather conditions, toxic fume clouds, explosions and airplane crashes.</p>
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
<h3 id="sec4-4">4.4 Safety analysis</h3>  <p>The safety analysis SCA covers maintenance of the safety analysis that supports the overall safety case for the facility. Safety analysis is a systematic evaluation of the potential hazards associated with the conduct of a proposed activity or facility and considers the effectiveness of preventive measures and strategies in reducing the effects of such hazards.</p>  <p>This section addresses the requirements of the following regulations made under the NSCA:</p>
<ul>
<li><em>General Nuclear Safety and Control Regulations</em>, paragraphs 3(1)(d), (e) and (i) and 12(1)(c) and (f)</li>
<li><em>Class I Nuclear Facilities Regulations</em>, paragraphs 3(b) and (d), and 6(a), (b), (c), (d) and (h)</li>
<li><em>Radiation Protection Regulations</em> (all requirements related to dose)</li>
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
<div id="4.4.1"></div>
<h4 id="sec4-4-1">4.4.1	General considerations</h4>  <p>The application should include a safety analysis of the NPP. The safety analysis should consist of a deterministic safety analysis, a probabilistic safety assessment (PSA) and a hazards analysis. The safety analysis should demonstrate achievement of all levels of defence in depth and should confirm that the facility&#39;s design is capable of meeting the applicable expectations, dose acceptance criteria and safety goals.</p>  <p>Whenever operator action is taken into account, the analysis should demonstrate that the operators will have reliable information, sufficient time to perform the required actions, documented procedures to follow, and will have been trained.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.4.2"></div>
<h4 id="sec4-4-2">4.4.2	Postulated initiating events</h4>  <p>The safety analysis shall identify postulated initiating events (PIEs) using a systematic methodology (for example, failure modes and effects analysis). The scope and classification of PIEs in the application shall meet the requirements specified in REGDOC-2.4.1, <em>Deterministic Safety Analysis</em> [11] and REGDOC-2.5.2, <em>Design of Reactor Facilities: Nuclear Power Plants</em>. [12]</p>  <p>The information provided should demonstrate that all foreseeable events with the potential for serious consequences or with a significant frequency of occurrence are anticipated and considered.</p>  <p>For a site with multiple units, the design and safety analysis should take due account of the potential for specific hazards simultaneously affecting several units on the site.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.4.3"></div>
<h4 id="sec4-4-3">4.4.3	Deterministic safety analysis</h4>  <p>The application shall include a deterministic safety analysis to evaluate and justify plant safety, conducted in accordance with REGDOC-2.4.1, <em>Deterministic Safety Analysis</em>. [11] The level of conservatism of each deterministic safety analysis should be appropriate for the class of event analyzed and the analysis objectives.</p>  <p>The application should provide the dose limits and should describe the trip coverage and trip setpoints.</p>  <p>The deterministic safety analysis should demonstrate that:</p>
<ul>
<li>normal plant operations can be carried out safely such that radiation doses to workers and members of the public, and any planned discharges or releases of radioactive material from the plant, will be within authorized limits</li>
<li>doses under design-basis accidents (DBAs) are met</li>
</ul>  <p>For a currently-licensed facility, it is recognized that full compliance with REGDOC-2.4.1 [11] may not be possible or provide any additional safety benefit beyond the current safety case. The application should include a method of evaluating the significance of gaps identified (such as applying a graded approach) against REGDOC-2.4.1 and the importance to safety of each gap.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.4.4"></div>
<h4 id="sec4-4-4">4.4.4	Hazard analysis</h4>  <p>The applicant shall provide a hazard analysis that has been performed in accordance with the requirements of REGDOC-2.4.2, <em>Probabilistic Safety Assessment (PSA) for Nuclear Power Plants</em> [13] and REGDOC-2.5.2, <em>Design of Reactor Facilities: Nuclear Power Plants</em> [12], and taking into account the information in REGDOC-2.4.1. [11]</p>  <p>This analysis should include all potential hazards (internal and external), both natural and human-induced. Some examples are:</p>
<ul>
<li>for natural external hazards: earthquakes, droughts, floods, high winds, tornadoes, abnormal surges in water level and extreme meteorological conditions</li>
<li>for human-induced external hazards: those that are identified in the site evaluation, such as airplane crashes and ship collisions</li>
<li>for internal hazards: internal fires, internal floods, turbine missiles, onsite transportation accidents and releases of hazardous substances from onsite storage facilities</li>
</ul>  <p>The analysis should include any potential combinations of the external hazards. It should also consider the potential interaction of external and internal hazards, such as external events initiating internal fires or floods, or that may lead to missile generation.</p>  <p>For a site with multiple units, the analysis should take due account of the potential for specific hazards simultaneously affecting several units.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.4.5"></div>
<h4 id="sec4-4-5">4.4.5	Probabilistic safety assessment</h4>  <p>The application shall include a probabilistic safety assessment (PSA) conducted in accordance with the requirements specified in REGDOC-2.4.2, <em>Probabilistic Safety Assessment (PSA) for Nuclear Power Plants</em>. [13]</p>  <p>The PSA should demonstrate that a systematic analysis was carried out to ensure the probabilistic safety goals (such as core damage frequency and large release frequency) are met. The PSA should demonstrate that a balanced design has been achieved and no particular feature or postulated initiating event makes a disproportionately large or significantly uncertain contribution to the overall risk.</p>  <p>The PSA should identify any plant vulnerabilities. It should also identify any systems for which design improvements or modifications to operational procedures could reduce the probabilities of severe accidents or mitigate the consequences. The PSA should verify that emergency operating procedures are adequate. The PSA should provide insights into the severe accident management program.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.4.6"></div>
<h4 id="sec4-4-6">4.4.6	Severe accident analysis</h4>  <p>The applicant shall demonstrate that a severe accident analysis has been performed in accordance with the requirements of:</p>
<ul>
<li>REGDOC-2.3.2, <em>Accident Management version 2</em> [10]</li>
<li>REGDOC-2.4.1, <em>Deterministic Safety Analysis</em> [11]</li>
<li>REGDOC-2.4.2, <em>Probabilistic Safety Assessment (PSA) for Nuclear Power Plants</em> [13]</li>
</ul>  <p>The application should demonstrate that the information in REGDOC-2.5.2, <em>Design of Reactor Facilities: Nuclear Power Plants</em> [12] has been taken into account.</p>  <p>The format and content of the beyond-design-basis accident (BDBA) analyses should be consistent with the presentation of the analyses for anticipated operational occurrences and design basis events, with the following modifications:</p>
<ul>
<li>the BDBA analysis should state the objective and/or the specific acceptance criteria</li>
<li>the analysis should provide a discussion of the additional postulated failures in the accident scenario, including the reasons for their selection</li>
<li>the analysis should compare the key results of the analyses with specific acceptance criteria, and should clearly state the conclusions on meeting the acceptance criteria</li>
</ul>  <p>The applicant should provide detailed information concerning the analysis to identify accidents that can lead to significant core damage, and/or offsite releases of radioactive material (severe accidents). In addition, the information submitted should describe the evaluation that has been carried out on the capability of complementary plant design features to meet the design criteria.</p>  <p>The information submitted should demonstrate the capability of the design to mitigate certain BDBAs. The applicant should explain the choice of the BDBAs to be analyzed and justified, indicating whether the choice was made on the basis of a PSA or according to another fault analysis that identifies potential vulnerabilities of the plant. Additionally, the applicant should describe, explain and justify the approach taken.</p>  <p>BDBA events are typically sequences involving more than one failure (unless they are taken into account in the DBAs at the design stage), such as plant blackout, design basis events with degraded performance of a safety system, and sequences that lead to containment bypass and/or confinement bypass. The analysis may:</p>
<ul>
<li>use best estimate models and assumptions</li>
<li>take credit for realistic system action and performance beyond original intended functions, including systems not important to safety</li>
<li>take credit for realistic operator actions</li>
</ul>  <p>Where this is not possible, reasonably conservative assumptions should be made. These assumptions should consider uncertainties in the understanding of the physical processes being modelled.</p>  <p>The submission should include an explanation of the analysis performed for severe accident sequences, including (as applicable) hydrogen fire, steam explosion and molten fuel-coolant interaction, and a description of the results of the most relevant severe accident analyses used in the development of the accident management programs and emergency preparedness planning for the plant.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.4.7"></div>
<h4 id="sec4-4-7">4.4.7	Summary of analysis</h4>  <p>The application should include information concerning the integrated review of the plant design and operational safety, carried out to complement the results of the deterministic analyses already performed and to give an indication of the success of the deterministic design in achieving the design objectives.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.4.8"></div>
<h4 id="sec4-4-8">4.4.8	Event mitigation</h4>  <p>The applicant shall provide the results of a review of event mitigation measures in accordance with the requirements of REGDOC-2.3.2, <em>Accident Management version 2</em>. [10]</p>
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
<h3 id="sec4-5">4.5 Physical design</h3>  <p>The physical design SCA relates to activities that affect the ability of SSCs to meet and maintain their design basis, given new information arising over time and taking changes in the external environment into account.</p>  <p>This section addresses the requirements of the following regulations made under the NSCA:</p>
<ul>
<li><em>General Nuclear Safety and Control Regulations</em>, paragraphs 3(1)(d), (e), (i), and (j); and 12(1)(c) and (f)</li>
<li><em>Class I Nuclear Facilities Regulations</em>, paragraphs 3(a), (b), (d) and (i), and 6(a), (b), (c), (m) and (n)</li>
<li><em>Radiation Protection Regulations</em></li>
<li><em>Nuclear Security Regulations</em></li>
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
<div id="4.5.1"></div>
<h4 id="sec4-5-1">4.5.1	General considerations</h4>  <p>The application should include a general description of the overall conceptual physical design of the NPP, the design practices and the safety concepts. The application should also describe the approach followed for the general design of the SSCs.</p>  <p>For a new NPP, the application should include a comparison of the NPP&#39;s design, construction, commissioning and operation with prevailing modern standards and international practices.</p>  <p>For existing NPPs, the application should address the information in this section to the extent practicable. Any alternative approaches selected or mitigating measures applied should be identified.</p>  <p>The application may refer to information that was submitted previously (for example, in the application for a licence to construct). The set of documents that address the requirements in this section should be submitted only once (for the initial application), with few subsequent revisions.</p>
<h5>Description of structures, systems and components</h5>  <p>For each SSC, the application should describe in detail the characteristics, major components and design basis requirements (such as the functional and performance requirements associated with the definition of design basis), including the following information:</p>
<ul>
<li>objective of the system and how it relates to the entire plant</li>
<li>design description of the system and its main components with their configuration and their modes of operation, including:
<ul>
<li>functional requirements (for example, postulated demands and required performance for all plant states)</li>
<li>the design basis events that contribute to the determination of the system design requirements, and which design limits are determined by which events</li>
<li>interfaces with other systems</li>
<li>measures taken to minimize the generation of hazardous and radioactive waste through design</li>
<li>any other specific requirements imposed by applicable regulations, codes and standards</li>
</ul></li>
<li>supporting design documentation and any related documents, such as design requirements of the system</li>
<li>safety and pressure boundary code classifications, quality assurance, seismic and equipment requirements, human factors requirements, requirements developed to ensure consistency with other systems and the safety analysis, the design reliability targets for systems and main components, and any requirements resulting from operational feedback</li>
<li>detailed elements of system design, including, as appropriate:
<ul>
<li>design flowsheets for fluid systems</li>
<li>single line diagrams for electrical, and instrumentation and control systems</li>
<li>functional block diagrams for logic systems</li>
<li>physical location and isometric drawings</li>
<li>system boundaries as a function of mode of operation</li>
<li>containment boundaries including isolation requirements</li>
<li>code classification and classification boundaries for pressure-retaining systems and components</li>
<li>seismic categories and seismic boundaries and their interfaces with support systems providing services, such as electric, pneumatic or hydraulic power, cooling, lubrication and sampling systems</li>
<li>chemical control specifications</li>
</ul></li>
<li>operational aspects, such as:
<ul>
<li>operation of the system and its expected performance (including under beyond-design conditions, if important)</li>
<li>interdependence with the operation of other systems</li>
<li>requirements for technical specifications regarding system operability</li>
<li>system testing for availability, reliability and capability, including online health monitoring, reporting and trending</li>
</ul></li>
<li>maintenance aspects, including:
<ul>
<li>surveillance</li>
<li>condition-based preventive maintenance</li>
<li>periodic maintenance and overhauls to ensure continued safety performance and to meet design reliability targets throughout the system&#39;s qualified life</li>
</ul></li>
<li>in service inspection specifications, including visual, surface and/or volumetric non-destructive examination for SSCs to confirm that the actual condition of the SSC complies with design assumptions</li>
<li>commissioning testing requirements to:
<ul>
<li>demonstrate to the extent practicable that the SSCs meet their performance requirements in all operational states and accident conditions credited in the safety analysis (particularly important for those design features which are new or first of a kind)</li>
<li>verify that the SSCs have been correctly installed/constructed</li>
</ul></li>
</ul>  <p>The application should describe any design features necessary to support commissioning tests.</p>  <p>The design information should reflect all design modifications and changes made during previous licensing periods or phases.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.5.2"></div>
<h4 id="sec4-5-2">4.5.2	Site characterization</h4>  <p>The application should refer to, or summarize, the information previously submitted in any relevant environmental assessment or licensing documentation, such as environmental impact statements and any previous licence application. This information includes:</p>
<ul>
<li>geological, geotechnical, seismological, hydrological, hydrogeological and meteorological data</li>
<li>site plan and description, and site reference data</li>
<li>exclusion zone authority and control</li>
<li>proximity of industrial, transport and military facilities</li>
</ul>  <p>For additional information on site characterization, refer to RD-346, Site Evaluation for New Nuclear Power Plants. [14]</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.5.3"></div>
<h4 id="sec4-5-3">4.5.3	Design principles and requirements</h4>  <p>The application should describe the design principles and requirements that cover the processes for the overall conceptual design of the facility, and the operation and interaction of all of the SSCs to be addressed. To ensure that the NPP will be reliable, robust and maintainable, the applicant should ensure that the design:</p>
<ul>
<li>conforms to high quality levels</li>
<li>incorporates the latest developments in knowledge and technology</li>
<li>is resistant to the effects of common-cause events and, to the extent practicable, to severe accidents</li>
</ul>  <p>When aspects of the design are based on conservative deterministic principles, such as those outlined in international codes and standards or in regulatory documents, the application should describe the use of such principles. If the design of the plant does not fully comply with a specific deterministic principle in a regulatory document, the applicant should demonstrate that the overall level of safety is not impaired.</p>  <p>The application should identify the criteria used for determining the level of acceptable risk, and should show that the criteria meet general safety objectives and concepts.</p>  <p>The application should describe the decision-making methodology (for example, cost/benefit, best available technology, and so on) that was used to select the design option.</p>
<h5>Safety objectives and goals</h5>  <p>The application should describe how the safety objectives and goals have been met in the design of SSCs. Where there is some redundancy of information requested in various sections, the application may include cross-references to detailed information in other sections as appropriate.</p>  <p>Safety objectives include general nuclear safety objectives, radiation protection objectives, technical safety objectives and environmental protection objectives. Safety goals include qualitative and quantitative safety goals, core damage frequency, and small and large release frequencies.</p>
<h5>Design authority</h5>  <p>The application should identify the design authority responsible for the overall design. If the design authority has been transferred from another organization, the applicant should provide the formal relationships (including roles and responsibilities) and the prerequisites that had to be met prior to the transfer.</p>
<h5>Applicable regulations, codes and standards</h5>  <p>The application should include declarations of the design&#39;s compliance with the codes and standards used. The applicant should evaluate these documents for their applicability, sufficiency and adequacy, and provide the results in the application. If necessary, the standards used should be supplemented with additional requirements that should also be identified in the application.</p>  <p>The applicant should provide an assessment, such as a gap analysis, if the codes and standards differ from those used in Canada. The application should include information pertaining to cases where requirements contained in any of the applicable regulations or codes and standards are not met.</p>  <p>The application should include an assessment of the safety significance of any deviations from applicable codes and standards. Where necessary, a separate and complete justification should be provided for each deviation. This justification should include all information necessary to assure the CNSC that any deviations will not negatively affect the facility&#39;s overall level of safety. This justification should be included wherever applicable in the licence application or in documents referenced in the licence application.</p>
<h5>Safety assessment and engineering evaluation</h5>  <p>The applicant should demonstrate that a systematic process has been applied throughout the design phase to ensure that the design meets all relevant safety requirements, and that the plant design process has followed proven engineering practices.</p>  <p>The applicant should ensure that the plant design meets all other applicable safety and regulatory requirements.</p>  <p>This section should provide the following information for each system that is credited (or that supports a credited system) in the safety analysis:</p>
<ul>
<li>an assessment of the functional capability of the system that is directly credited in the safety analysis, including but not limited to:
<ul>
<li>timing of system operation</li>
<li>minimum system performance envelope to meet safety analysis assumptions</li>
<li>ability of the system to perform over the lifetime of the plant</li>
<li>ability of the system to perform in any abnormal environmental conditions in accident scenarios for which the system is credited</li>
</ul></li>
<li>a demonstration that the physical separation, the electrical and/or fluid isolation devices and the environmental qualification requirements (or any other special protective measures) provide sufficient capacity to deliver the credited functions reliably</li>
</ul>
<h5>Identification of plant states and operational configurations</h5>  <p>The application should identify all plant states and operational configurations.</p>  <p>For operational states (normal operation and anticipated operational occurrences (AOOs)), the information should cover configurations such as start-up, normal power operation, shutting down, shutdown, refueling and any other normal operating configuration. The application should identify the key parameters and unique characteristics of each operational configuration, including the specific design provision for maintaining the configuration. The application should also provide the permissible periods of operation at different conditions (for example, power level) in the event of a deviation from normal operating conditions.</p>
<h5>Plant design envelope</h5>  <p>The application should include a cross-reference to the plant design envelope, which includes all plant states. The applicant should demonstrate that the design authority has established the plant design envelope.</p>
<h5>Defence in depth</h5>  <p>The applicant should provide, in general terms, the approach taken to incorporate the defence-in-depth concept into the design of the NPP. The design approach adopted should ensure that multiple and (to the extent practicable) independent levels and barriers for defence are present in order to provide protection against AOOs and accidents, regardless of their origin.</p>  <p>The application should describe the selection of the main barriers, with particular emphasis placed on SSCs important to safety. The application should describe any proposed operator actions to mitigate the consequences of events and to assist in the performance of important plant safety functions.</p>
<h5>Safety functions</h5>  <p>The application should describe how the fundamental safety functions have been incorporated into the design of the NPP. The application should provide information on the SSCs used to perform necessary safety functions at various time intervals following a PIE.</p>  <p>The application should also identify and provide a description of any additional plant safety functions; for example, heat removal from irradiated fuel in fuel handling and storage systems.</p>
<h5>Safety classification of structures, systems and components</h5>  <p>The application should describe the approach adopted in the design for the safety classification of the SSCs. It should include criteria for deciding on the appropriate design requirements for each class, such as:</p>
<ul>
<li>appropriate codes and standards to be used in the design, manufacturing, construction, testing and inspection of individual SSCs</li>
<li>system-related characteristics, such as the degree of redundancy, diversity, separation, and reliability, environmental qualification and seismic qualification</li>
<li>availability requirements for particular SSCs for on demand duty and for reliability for the prescribed mission time</li>
<li>quality assurance requirements</li>
</ul>
<h5>Design for reliability</h5>  <p>The application shall include the basis for reliability targets that meet the requirements in RD/GD-98, <em>Reliability Programs for Nuclear Power Plants</em>. [15]</p>  <p>The description of the reliability program should include the following:</p>
<ul>
<li>methods used for reliability assessment</li>
<li>how aging-related considerations are taken into account</li>
<li>selection criteria for the reliability assessment input data and subsequent updates, based on testing, surveillance and other experience</li>
</ul>  <p>The applicant should demonstrate that all SSCs important to safety have been designed with sufficient quality and reliability to meet the design limits. The applicant should provide a reliability analysis for each of these SSCs. The application should include considerations of:</p>
<ul>
<li>common-cause failures</li>
<li>single-failure criterion</li>
<li>fail-safe design</li>
<li>allowance for equipment outages</li>
<li>shared systems</li>
</ul>
<h5>Human factors</h5>  <p>The application should describe how the plant design takes into account human factors. It should describe the systematic process that has been followed, for all systems, to incorporate considerations of human factors into the specification, definition and analysis of requirements; design activities; and verification and validation activities.</p>  <p>The application should describe the interfaces of human factors in design with other areas (for example, as inputs to the development of operating and other procedures and training). The application should also describe the considerations of human factors that apply to the design of specific SSCs, including:</p>
<ul>
<li>human-machine interfaces for all plant states</li>
<li>instrumentation, displays and alarms provided to monitor system operations</li>
<li>physical location, accessibility and usability of equipment that is operated, tested, maintained or monitored</li>
<li>physical interlocks, and indication of bypassed or inoperable status</li>
</ul>  <p>The application should include a list of human factors analyses and activities that were used in developing the design. The applicant should demonstrate that human factors engineering and human-machine interface considerations have been applied to all operational states and accident conditions, and for all plant locations where such interactions are anticipated.</p>  <p>The applicant should also provide a human factors engineering program plan.</p>  <p>For additional information on human factors design requirements, refer to:</p>
<ul>
<li>G-276, <em>Human Factors Engineering Program Plans</em> [16]</li>
<li>G-278, <em>Human Factors Verification and Validation Plans</em> [8]</li>
</ul>
<h5>Radiation protection</h5>  <p>The application should include a description of the design approach adopted that demonstrates the facility design meets the requirements of the <em>Radiation Protection Regulations</em>.</p>  <p>The information submitted should demonstrate that, in all operational states, radiation doses within the plant or any planned release of radioactive material from the plant are kept below regulatory limits and are as low as reasonably achievable (ALARA).</p>
<h5>Robustness against malevolent acts</h5>  <p>The information submitted should demonstrate that the design includes considerations of both physical protection concerns and transportation routes, in accordance with the requirements of the Nuclear Security Regulations and RD-346, <em>Site Evaluation for New Nuclear Power Plants</em>. [14]</p>  <p>The application should describe both the general design approach and the approach and provisions followed to ensure the physical protection of the plant (including control areas) against internal and external sabotage. These measures should take into account the selection of specific materials, the physical separation of redundant systems, the performance requirements of the equipment, and the use of barriers to segregate redundant safety trains.</p>  <p>The description of the design approach should include:</p>
<ul>
<li>rules followed to establish the scope of threats</li>
<li>justification for the specification of vital areas and the anticipated loads (for example., impact forces, blast pressure waves, internal induced vibrations, fires and missiles) on SSCs and buildings</li>
<li>methodology used for assessing the vulnerability of the plant, along with the measures selected to address these vulnerabilities and their consequences</li>
</ul>  <p>The application should also describe the provisions for protecting the capability of:</p>
<ul>
<li>monitoring and control of plant parameters</li>
<li>emergency management and response</li>
<li>mitigation and recovery measures to ensure the safety of the plant personnel and the public</li>
</ul>  <p><strong>Note:</strong> Applicant submission and resultant review correspondence related to this topic is considered to be prescribed information under the NSCA and must be submitted in a secure manner. Refer to the Treasury Board of Canada Secretariat <em>Policy on Government Security</em> [17] for further details on handling, submitting and transmitting assets considered security-sensitive.</p>
<h5>Safeguards in the design and design process</h5>  <p>With respect to the design and design process, the information submitted should demonstrate that the design and design process comply with the obligations arising from the safeguards agreement between Canada and the International Atomic Energy Agency (IAEA). For additional information on safeguards, see section 4.13.</p>
<h5>Design changes</h5>  <p>The application should describe the control of design modifications such that the NPP is maintained and modified within the limits prescribed by the design, analysis and (once established) licensing basis.</p>  <p>To ensure adequate configuration management, the design basis should be documented and maintained to reflect design changes. The design basis should be maintained to reflect new information, operating experience, safety analyses, resolution of safety issues or correction of deficiencies.</p>  <p>The effects of the design changes should be fully assessed, addressed and accurately reflected in the safety analyses or analysis of record prior to implementation.</p>
<h5>Feedback into the design and design process from operating experience and safety research</h5>  <p>The application should describe how lessons learned from the operation of other plants or results of new research have been incorporated into the submitted plant design.</p>  <p>With respect to the design and design process, feedback from operating experience (OPEX) and safety research should take into account:</p>
<ul>
<li>changes in design due to recent advances in material properties</li>
<li>improved methods of construction and fabrication</li>
<li>considerations related to improvement in reliability and in the operability and maintainability of the plant</li>
<li>considerations on the current safety approach</li>
<li>the understanding of important phenomena governing plant behaviour</li>
<li>methods and tools used in design and analysis</li>
</ul>
<h5>Plant operability and maintainability</h5>  <p>The application should describe how, in general, the design process and its outputs support the design for system and equipment operability and maintainability.</p>
<h5>Control of foreign material</h5>  <p>The information submitted should demonstrate that the design provides for the detection, exclusion and removal of all foreign material and corrosion products that may have an effect on safety.</p>
<h5>Other safety functions</h5>  <p>The application should specify, describe and explain the appropriateness of any other safety requirements or criteria that have been respected in the design to reduce the effect of failures and enhance the safety of the design. The description should include, but not be limited to:</p>
<ul>
<li>adequate safety margins</li>
<li>simplified design</li>
<li>passive safety features</li>
<li>gradually responding plant systems</li>
<li>fault-tolerant plant and systems</li>
<li>operator-friendly systems</li>
<li>leak-before-break concepts</li>
<li>fail-safe design</li>
</ul>
<h5>Decommissioning</h5>  <p>The application should include considerations of future plant decommissioning and dismantling activities.</p>  <p>The application should also include considerations of the requirements for storage of radioactive waste after the end of commercial operation.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.5.4"></div>
<h4 id="sec4-5-4">4.5.4	Facility design</h4>  <p>The application should describe the processes that pertain to the overall adequacy of the facility design, including layout of the facility itself.</p>
<h5>Basic technical characteristics</h5>  <p>The application should include a description (in a table, if appropriate) of the principal features and specifications of the NPP, including (but not limited to):</p>
<ul>
<li>number of reactor units</li>
<li>type of NPP and its main features and characteristics</li>
<li>safety systems</li>
<li>type of nuclear steam supply system</li>
<li>type of containment structure</li>
<li>thermal power levels to be reached in the core</li>
<li>corresponding net electrical power output for each thermal power level</li>
<li>any other characteristics necessary for understanding the main technological processes of the design</li>
</ul>  <p>In cases where the NPP design is similar to earlier designs licensed by the CNSC, the applicant should provide a comparison that identifies and justifies the main modifications and improvements that have been incorporated into the submitted design.</p>
<h5>Layout of main systems and equipment in the facility</h5>  <p>The application should include basic technical and schematic drawings of the main facility SSCs, including:</p>
<ul>
<li>details of the physical and geographical location of the NPP</li>
<li>connections with the electrical grid</li>
<li>means of access to the site by rail, road and water</li>
</ul>  <p>This information should be sufficient for the CNSC to verify that the NPP design includes adequate provision for an appropriate exclusion zone. The information submitted should demonstrate that the facility layout takes into account PIEs to enhance the protection of SSCs important to safety. The application should also include general layout drawings of the entire NPP, accompanied by a brief description of the main systems and equipment, and their individual purposes and interactions. Information on NPP layout that contains security-related information should be submitted in a secure manner.</p>  <p>The application should include references to other sections that provide more detailed descriptions of SSCs. The application should describe the main interfaces and boundaries between onsite equipment and systems provided by different design organizations, including the interfaces with equipment and systems external to the NPP (for example, the electrical grid). The description should provide sufficient detail to reveal how the NPP operation will be coordinated.</p>  <p>The application should refer to the confidential information on the provisions made for the physical protection of the NPP.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.5.5"></div>
<h4 id="sec4-5-5">4.5.5	Structure design</h4>  <p>The application should present relevant information on the design of the site layout and on civil engineering works and structures associated with the nuclear facility. The application should describe the design and analysis procedures, the assumed boundary conditions and the computer codes used in the analysis. Site and plant layout information should include the main building and structures, sources of cooling water, grid connection, and access to all essential services required for both normal and emergency operation.</p>  <p>The application should describe the design principles, design basis requirements and criteria, and applicable codes and standards used in the design. The application should demonstrate that the safety margins are sufficient for the buildings and structures important to safety (for example, seismic design and robustness against internal and external events). The application should clearly state and justify any deviation from applicable codes and standards or from other design requirements.</p>  <p>The safety classification for each building containing equipment or used for operations important to safety should be commensurate with the classification of the systems and equipment that it contains or the operations it is used for.</p>  <p>The application should include the seismic classification for each structure and building. The descriptions provided here should include the extent to which various load combinations have been considered in order to confirm the building&#39;s ability to meet its safety functions. If a structure performs a function other than structural support (for example, radiation shielding, separation barrier, containment), the application should specify the additional requirements for this function and should reference them in other relevant sections of the application.</p>  <p>The application should describe the range of anticipated structural loadings and performance requirements, including design consideration for specific hazards during operation, and for any design considerations or mitigation measures in place to deal with beyond-design-basis accidents.</p>  <p>The description of structures that house nuclear material (such as new and spent fuel or tritiated light or heavy water) should include the design considerations (for example, applied loads, codes and standards, analytical tools and material properties), the structural stability, the relative displacements, and the means of protection against internal and external events that were considered.</p>  <p>The description should address the safety requirements for the containment building or system, including, for example, its structural strength, leak tightness, and resistance to steady-state and transient loads (such as those arising from pressure, temperature, radiation and mechanical effects that could be caused by postulated internal and external events). The description should also include the main design features of the structures provided to comply with these safety requirements.</p>  <p>The description should provide details on the safety requirements and design features for the containment internal structures, such as the reactor vault structure, the shielding doors, the airlocks and the access control and facilities. The description should include the coupling between the internal structures and the main containment structure that affects the transmission of loads from external events to the internal structures.</p>  <p>The containment description should also cover details such as:</p>
<ul>
<li>identification of the applicable design guides and design requirements</li>
<li>description of the structure, including:
<ul>
<li>base slab and sub-base</li>
<li>containment wall design</li>
<li>containment wall openings and penetrations</li>
<li>pre-stressing system</li>
<li>containment liner and its attachment method</li>
</ul></li>
</ul>  <p>If the design incorporates confinement or secondary confinement, the application should describe the confinement, including the analytical models and methods used and the results of the design evaluation of the containment&#39;s ultimate pressure capacity with the corresponding acceptance criteria. For designs incorporating a liner plate, the application should provide the analysis and design procedures for the liner plate and its anchorage.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.5.6"></div>
<h4 id="sec4-5-6">4.5.6	System design</h4>  <p>The applicant should present relevant information for the system description, pressure-retaining SSCs, equipment environmental qualification, electromagnetic interference, seismic qualification, and fire safety/fire protection.</p>
<h5>System description</h5>  <p>The applicant should provide, in detail, the characteristics and major components of the system and its design basis requirements (for example, the functional and performance requirements associated with the definition of design basis).</p>
<h5>Design of pressure-retaining structures, systems and components</h5>  <p>The application should describe the basis for the design of the pressure-retaining SSCs and their supports. The selection of codes and standards should be commensurate with each SSC&#39;s safety classification and should be adequate to provide confidence that potential failures are minimized.</p>
<h5>Equipment qualification</h5>  <p>The applicant should provide detailed processes and specifications for an equipment qualification program. The program should identify equipment service conditions. The application should demonstrate that equipment can perform its intended safety functions under the environmental conditions defined for all plant states in which it is credited. For SSCs important to safety, the program should include the consideration of aging effects due to service life.</p>
<h5>Electromagnetic interference</h5>  <p>The applicant should demonstrate that instrumentation and electrical equipment of SSCs important to safety are protected from electromagnetic interference (EMI)-induced faults for all plant states in which they are credited.</p>   <p>The information submitted should demonstrate the capability, as specified in the design, of instrumentation and electrical equipment to function within the applied electromagnetic environment of the plant in different states, and without introducing significant electromagnetic disturbances to other equipment within the plant.</p>  <p>The application should include the plant layout strategies for grounding and shielding, and should also provide EMI-qualified device handling and storage requirements.</p>
<h5>Seismic qualification</h5>  <p>The application should describe how the plant design protects SSCs (including building structures) from earthquake damage. The applicant should ensure there is instrumentation available to monitor seismic activity at the site for the lifecycle of the plant.</p>  <p>SSCs important to safety should be designed to withstand a design-basis earthquake (DBE) event. For a beyond-design-basis earthquake, the applicant should demonstrate that there is a high confidence of low probability of failure of the SSCs that are credited to function during and after the event.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.5.7"></div>
<h4 id="sec4-5-7">4.5.7	Fire safety and fire protection system</h4>  <p>The application should describe how the plant&#39;s design provisions will address prevention of, protection from, control of, mitigation of, response to, and recovery from fires (including explosions) in order to protect the SSCs, persons and the environment.</p>  <p>The application should include an independent third-party review of the design, assessing compliance against the applicable fire codes and standards used in the design for protection from fires and explosions.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.5.8"></div>
<h4 id="sec4-5-8">4.5.8	Reactor and reactor coolant system</h4>  <p>The information submitted should demonstrate that the reactor and reactor coolant system meet the requirements in REGDOC-2.5.2. [12]</p>  <p>The applicant should provide relevant information concerning the reactor, including a summary description of:</p>
<ul>
<li>mechanical, nuclear, thermal and hydraulic behaviour of the designs of the various reactor components</li>
<li>fuel, reactor internals, and reactivity control systems</li>
<li>related instrumentation and control systems in place to demonstrate the capability of the reactor to perform its design safety functions in all operational states throughout its design life</li>
</ul>  <p>The applicant should ensure that the nuclear criticality safety program meets the requirements in RD-327, <em>Nuclear Criticality Safety</em>. [18] For additional information, refer also to GD-327, <em>Guidance for Nuclear Criticality Safety</em>. [19]</p>
<h5>Design of fuel system</h5>  <p>The applicant should provide the following information concerning the thermal, mechanical, thermal-hydraulic and material design of all fuel systems and components, including a description of the fuel manufacturing and a summary of the in-core fuel management:</p>
<ul>
<li>the design documents of all fuel systems to be used, including the fuel design drawings</li>
<li>the fuel design basis requirements</li>
<li>evaluations of the fuel design</li>
<li>a description of the methods and computer codes used to assess the fuel behaviour under normal and accident conditions</li>
<li>testing, inspection and surveillance plans</li>
<li>the manufacturing process</li>
</ul>
<h5>Design of the reactor internals</h5>  <p>The application should describe the design of the reactor internals and their design basis requirements, specifically:</p>
<ul>
<li>structures into which the fuel has been assembled (for example, the fuel assembly or fuel bundle)</li>
<li>related components required for fuel positioning</li>
<li>all supporting elements internal to the reactor, including any separate provisions for moderation and fuel location</li>
</ul>  <p>The information provided should link to and complement other sections that cover related aspects of the reactor fuel and its handling and storage, such as:</p>
<ul>
<li>physical and chemical properties of the fuel components including:
<ul>
<li>thermalhydraulic, structural and mechanical aspects</li>
<li>the expected response to static and dynamic mechanical loads and their behaviour</li>
<li>a description of the effects of irradiation on the ability of the reactor internals to perform their safety functions adequately over the design life of the plant</li>
</ul></li>
<li>any significant sub-system components, including any separate provisions for moderation and fuel location (corresponding design drawings should be provided)</li>
<li>consideration of service effects on the performance of safety functions, including surveillance and/or inspection programs for reactor internals to monitor the effects of irradiation and aging on them</li>
<li>program to monitor the behaviour and performance of the core, which should include provisions to monitor the neutronics, dimensions, and temperatures of the core</li>
</ul>
<h5>Nuclear design and core nuclear performance</h5>  <p>The application should describe how the design meets the design basis requirements for:</p>
<ul>
<li>nuclear design of the fuel</li>
<li>reactivity control systems (including nuclear and reactivity control limits such as excess reactivity, fuel burn-up, reactivity feedbacks)</li>
<li>core design lifetime</li>
<li>fuel replacement strategies</li>
<li>reactivity coefficients</li>
<li>stability criteria</li>
<li>maximum controlled reactivity insertion and removal rates</li>
<li>control of power distributions</li>
<li>shutdown margins</li>
<li>rod speeds and stuck rod criteria</li>
<li>chemical and mechanical shim control</li>
<li>neutron poison requirements</li>
<li>all shutdown provisions</li>
</ul>  <p>The description should also include any of the following areas of the design if applicable:</p>
<ul>
<li>fuel enrichment distributions</li>
<li>burnable poison distributions</li>
<li>physical features of the lattice or assemblies relevant to nuclear design parameters</li>
<li>delayed neutron fractions and neutron lifetimes</li>
<li>core lifetime and burn-up</li>
<li>plutonium build-up</li>
<li>soluble poison insertion rates</li>
<li>xenon burnout or any other transient requirements</li>
</ul>  <p>Further detailed information should be provided on the following topics, as appropriate:</p>
<ul>
<li>power distributions</li>
<li>reactivity coefficients</li>
<li>reactivity control requirements</li>
<li>reactivity devices</li>
<li>criticality during refueling</li>
<li>reactor core stability, irradiation issues</li>
<li>analytical methods used (with verification and validation information and uncertainties)</li>
<li>testing and inspection plans</li>
<li>operational limits and conditions</li>
</ul>
<h5>Core thermalhydraulic design</h5>  <p>The applicant should provide information concerning the reactor and reactor coolant system thermalhydraulic design, including:</p>
<ul>
<li>design basis requirements, the thermal and hydraulic design for the reactor core and attendant structures, and the interface requirements for the thermal and hydraulic design of the reactor coolant system</li>
<li>analytical tools, methods and computer codes (with codes for verification, and validation information and uncertainties) used to calculate thermal and hydraulic parameters</li>
<li>flow, pressure, void and temperature distributions, and the specification of their limiting values and a comparison with design limits</li>
<li>justification for the thermalhydraulic stability of the core; for example, stability in forced or natural circulation flow against:
<ul>
<li>neutronic/thermalhydraulic feedback</li>
<li>flow oscillations</li>
<li>parallel channel instabilities</li>
</ul></li>
</ul>
<h5>Reactivity control systems</h5>  <p>The design of the reactivity control systems should provide the means for detecting levels and distributions of neutron flux. Information on the reactivity control systems should include, but not be limited to:</p>
<ul>
<li>design basis requirements for the systems</li>
<li>demonstration that the reactivity control systems, including any essential ancillary equipment, are designed to provide the required functional performance and are properly isolated from other equipment</li>
<li>description of the qualification and commissioning tests that have been carried out, in order to ensure that the equipment and system performance comply with the design requirements and meet the claims for their performance made in the safety analysis</li>
<li>description on how separation and diversity have been achieved</li>
<li>description of the rate of reactivity insertion and the depth of each reactivity control system</li>
</ul>  <p>Taken together, the SSCs important to safety instrumentation and control systems and the reactivity control systems should meet the expectations for shutdown means.</p>
<h5>Reactor materials</h5>  <p>The application should describe the materials used for the components of the reactor (including the materials for the reactor coolant system pressure boundary, the materials for the core support function and the materials for in-core components such as control rods and instrumentation). The application should include information on the material specifications, including:</p>
<ul>
<li>chemical, physical and mechanical properties</li>
<li>resistance to corrosion</li>
<li>dimensional stability, strength, toughness, hardness and crack tolerance</li>
<li>where important, microstructure and material fabrication details</li>
</ul>  <p>The application should describe the properties and required performance of seals, gaskets and fasteners in the primary pressure boundary.</p>  <p>The application should describe a material surveillance program that will address potential material degradation for all components, particularly for components operated in high radiation fields, in order to determine the metallurgical or other degradation effects of factors such as irradiation, stress corrosion cracking, flow-accelerated corrosion, thermal embrittlement, vibration fatigue, and other aging mechanisms.</p>  <p>Neutronic properties of control rod materials should be considered in the nuclear design and core nuclear performance section.</p>
<h5>Design of the reactor coolant system and reactor auxiliary system</h5>  <p>The application should provide the design basis requirements for the reactor coolant system and its major components. The application should describe the system design performance and features to ensure that its various components and its interfacing subsystems meet the safety requirements for design.</p>  <p>The information submitted should demonstrate that the reactor coolant SSCs are designed, manufactured and installed in a manner to allow periodic inspections and tests during their operating lifetime.</p>  <p>Where applicable, the information provided should cover:</p>
<ul>
<li>reactor coolant pumps</li>
<li>steam generators or boilers</li>
<li>depressurization system</li>
<li>reactor coolant system piping</li>
<li>main steamline isolation system</li>
<li>isolation cooling system for the reactor core</li>
<li>main steamline and feedwater piping</li>
<li>pressurizer</li>
<li>pressure-relief discharge system</li>
<li>provisions for main and emergency cooling</li>
<li>residual heat removal system and its components, such as pumps and valves</li>
<li>supports for piping, vessels and components</li>
</ul>  <p>The application should indicate the location of specified inspection information in the design documentation, including the volumetric or visual examination and testing.</p>  <p>The application should describe any additional systems associated with the reactor that are not described elsewhere in the application. For example, for CANDU reactors, such information would include the moderator system and its auxiliaries, the end shield cooling system and the annulus gas system. For light water reactors, an example would be the primary leak detection system.</p>
<h5>Integrity of the reactor coolant system pressure boundary</h5>  <p>The application should include the results of the detailed analytical and numerical stress evaluations, and of the engineering mechanics and fracture mechanics studies for all components comprising the reactor coolant system pressure boundary.</p>  <p>The application should take into account the entire range of operating and postulated accident conditions in all operating and shutdown states. The description should directly refer to the detailed stress analyses for each of the major components, to permit further evaluations to be made, if necessary.</p>  <p>The information should be detailed enough to demonstrate that the materials, fabrication methods, inspection techniques, loading conditions and load combinations used conform to all applicable regulations, codes and standards. The pressure boundary materials, the pressure-temperature limits and the integrity of the reactor pressure boundary &ndash; including embrittlement considerations – should all be taken into account in this information.</p>  <p>If the reactor design includes a calandria vessel, the application should present similar information for these components, at a level of detail commensurate with their importance to safety.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.5.9"></div>
<h4 id="sec4-5-9">4.5.9	Safety systems and safety support systems</h4>  <p>The information submitted in the application should demonstrate that the safety systems ensure the safe shutdown of the reactor or the residual heat removal from the core, or limit the consequences of AOOs and DBAs. The application should describe how the safety support system supports the operation of one or more safety systems.</p>
<h5>Means of shutdown</h5>  <p>The application should describe the means of reactor shutdown, reducing reactor power to a low value, and maintaining that power for the required duration, when the reactor power control system and the inherent characteristics are insufficient or incapable of maintaining reactor power within the requirements of the SOE.</p>
<h5>Emergency core cooling system</h5>  <p>The application should describe the emergency core cooling system (ECCS). Systems that supply electrical power or cooling water to equipment used in the operation of the ECCS should be considered as a safety support system.</p>  <p>The applicant should ensure that, if injection of emergency coolant is required, an operator cannot easily prevent the injection from taking place.</p>  <p>The application should demonstrate that plant safety would not be affected even if all or part of the ECCS was operated inadvertently.</p>
<h5>Containment</h5>  <p>The application should describe the containment structure in place to minimize the release of radioactive materials to the environment during operational states and DBAs. The containment should also assist in mitigating the consequences of design-extension conditions (DECs). Containment should be part of the safety system and may include complementary design features.</p>
<h5>Emergency heat removal system</h5>  <p>The application should describe the emergency heat removal system (EHRS), which provides for removal of residual heat in order to meet fuel design limits and reactor coolant boundary condition limits.</p>  <p>If the EHRS is required to mitigate the consequences of a DBA, then the EHRS should be designed as a safety system.</p>  <p>The applicant should demonstrate that, during DECs, the EHRS will function as required.</p>
<h5>Safety support system</h5>  <p>The information submitted should demonstrate that the safety support systems ensure the fundamental safety functions are available in operational states, DBAs and DECs. The design should include emergency safety support systems to cope with the possibility of loss of normal service and, where applicable, concurrent loss of backup systems.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.5.10"></div>
<h4 id="sec4-5-10">4.5.10	Electrical power systems</h4>  <p>The application should specify the required functions and performance characteristics of each electrical power system that provides normal, standby, emergency and alternate power supplies to ensure:</p>
<ul>
<li>sufficient capacity to support the safety functions of the connected loads in operational states, DBAs and DECs</li>
<li>availability and reliability is commensurate with the safety significance of the connected loads</li>
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
<div id="4.5.11"></div>
<h4 id="sec4-5-11">4.5.11	Instrumentation and control</h4>  <p>The application should describe the instrumentation and control (I&C) systems used to support the safety case of the facility. The applicant should include provision of instrumentation to monitor and control plant variables and systems over the respective ranges for operational states, DBAs and DECs, in order to ensure plant safety and that adequate information can be obtained on plant status.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.5.12"></div>
<h4 id="sec4-5-12">4.5.12	Control facilities</h4>  <p>The applicant should provide a description of the plant control facilities, including the main control room, secondary control room and emergency support facilities.</p>  <p>The description should cover the habitability systems, equipment, supplies and procedures that are in place to ensure that essential plant personnel, including those in the main and secondary control rooms, can remain at their posts and operate the plant safely in all operational states, or to maintain the plant in a safe condition under all accident conditions considered in the safety case.</p>  <p>The application should include considerations of escape routes and means of communication. The documentation should explain how personnel will relocate from the main control room to the secondary control room when the circumstances demand it, and should demonstrate that the route is properly qualified to ensure safe passage in these circumstances. In addition to the habitability systems for the control rooms, this section should cover:</p>
<ul>
<li>shielding</li>
<li>air purification systems</li>
<li>systems for the control of climatic conditions</li>
<li>storage capacity for food and water, as required</li>
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
<div id="4.5.13"></div>
<h4 id="sec4-5-13">4.5.13	Steam supply system</h4>  <p>The applicant should provide design information related to the steam supply system, including the steam lines, steam and feedwater system piping and vessels and turbine generators. The applicant should ensure there is sufficient margin in the design such that pressure boundary limits are not exceeded in operational states and DBAs.</p>  <p>The application should demonstrate that piping and vessels are separated from electrical and control systems to the extent practicable.</p>  <p>The application should demonstrate that turbine generators have protection systems in place to minimize the potential for any missiles from a turbine break up striking SSCs important to safety.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.5.14"></div>
<h4 id="sec4-5-14">4.5.14	Plant auxiliary systems</h4>  <p>The application should describe the plant auxiliary systems, including their design basis requirements. It should also describe any other plant auxiliary system whose operation may influence plant safety, but has not been covered elsewhere in the application (for example, communication and lighting systems).</p>
<h5>Water systems</h5>  <p>The applicant should provide information concerning the water systems associated with the NPP, including the station service water systems, the cooling system for reactor auxiliaries, the makeup system for demineralized water, the condenser cooling water system, the ultimate heat sink, and the condensate storage facilities.</p>  <p>The safety significance and reliability requirements of each of the water systems should be addressed with respect to any claims made in the safety case for their availability to provide cooling. Those water systems that support SSCs important to safety or safety functions should meet the expectations of the safety support system.</p>
<h5>Heat transfer to an ultimate heat sink</h5>  <p>The application should describe the systems for transferring residual heat from SSCs important to safety to an ultimate heat sink. This overall function should be subject to very high levels of reliability during operational states, DBAs and DECs.</p>
<h5>Process auxiliaries</h5>  <p>The application should describe the auxiliary systems associated with the reactor process system, including but not limited to the following:</p>
<ul>
<li>compressed-air systems</li>
<li>process and post-accident sampling systems</li>
<li>equipment drainage and floor drainage systems</li>
<li>chemical control systems and volume control systems</li>
<li>purification system</li>
</ul>  <p>The application should also define the guaranteed shutdown state (GSS) that will support safe maintenance activities of the NPP.</p>
<h5>Heating, ventilation and air conditioning systems</h5>  <p>The application should describe the plant&#39;s heating, ventilation, and air conditioning (HVAC) systems. The description should include areas such as control facilities, the spent fuel pool area, the auxiliary and radioactive waste area, the turbine building (in boiling water reactors), and the ventilation systems for safety systems.</p>  <p>The safety significance of any HVAC system credited in the plant safety analysis should be clearly stated, including all common safety-related functionality dependencies such as the air-conditioning system for an equipment room that may contain multiple divisions or groupings of support systems.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.5.15"></div>
<h4 id="sec4-5-15">4.5.15	Fuel handling and storage</h4>  <p>The application should include a description of the fuel handling and storage systems, including details for:</p>
<ul>
<li>monitoring and alarming</li>
<li>criticality prevention</li>
<li>shielding, handling, storage, cooling, transfer and transport of non-irradiated and irradiated fuel</li>
</ul>  <p>The application should also include a description of methods for detection of failed fuel in the reactor.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.5.16"></div>
<h4 id="sec4-5-16">4.5.16	Waste treatment and control</h4>  <p>The application should describe how the generation of radioactive and hazardous wastes is minimized, and how the wastes are characterized, controlled, handled, conditioned and disposed of.</p>  <p>The application should also describe how releases within the plant and to the environment will be monitored and controlled such that they remain within prescribed limits.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.5.17"></div>
<h4 id="sec4-5-17">4.5.17	Laboratories and Class II nuclear facilities</h4>  <p>The applicant should provide information on the design of laboratories and Class II nuclear facilities within the NPP. The design of laboratories and Class II nuclear facilities should meet the requirements of the <em>Class II Nuclear Facilities and Prescribed Equipment Regulations</em> and the <em>Nuclear Substances and Radiation Devices Regulations</em>, as applicable.</p>  <p>The applicant should provide information on the provisions for storage of items such as, but not limited to, contaminated tooling and radiation sources.</p>  <p>For more information, refer to GD-52, <em>Design Guide for Nuclear Substance Laboratories and Nuclear Medicine Rooms</em>. [20]</p>
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
<h3 id="sec4-6">4.6 Fitness for service</h3>  <p>The fitness for service SCA covers activities that affect the physical condition of SSCs to ensure that they remain effective over time. This area includes programs that ensure all equipment is available to perform its intended design function when called upon to do so.</p>  <p>This section addresses the requirements of the following regulations made under the NSCA:</p>
<ul>
<li>General Nuclear Safety and Control Regulations, paragraphs 3(1)(d), (e), (i) and (j), and 12(1)(c) and (f)</li>
<li>Class I Nuclear Facilities Regulations, paragraphs 3(f), and 6(b), (c), (d), (m) and (n)</li>
<li>Radiation Protection Regulations</li>
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
<div id="4.6.1"></div>
<h4 id="sec4-6-1">4.6.1	General considerations</h4>  <p>The application should identify all SSCs important to safety (as described in REGDOC-2.5.2, <em>Design of Reactor Facilities: Nuclear Power Plants</em> [12]) in the licence application.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.6.2"></div>
<h4 id="sec4-6-2">4.6.2	Reliability program</h4>  <p>The reliability program shall meet the requirements of RD/GD-98, <em>Reliability Programs for Nuclear Power Plants</em>. [15]</p>  <p>The applicant should submit a description of the reliability program for plant systems whose failure affects the risk of a release of radioactive or hazardous material. The program should include requirements for:</p>
<ul>
<li>setting reliability targets</li>
<li>performing reliability assessments</li>
<li>testing and monitoring</li>
<li>regulatory reporting</li>
</ul>  <p>Reliability programs establish processes to demonstrate that SSCs are always capable of performing their design function in accordance with predefined specifications. The programs include processes for measuring performance against objectives, goals and targets, and for continuous improvement initiatives. Program elements include identification of systems important to safety for the reliability program, system health reports and analysis, and response actions for pressure boundary degradation reports.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.6.3"></div>
<h4 id="sec4-6-3">4.6.3	Maintenance program</h4>  <p>Maintenance activities include monitoring, inspecting, testing, assessing, calibrating, servicing, overhauling, repairing and replacing parts.</p>  <p>The maintenance program shall meet the requirements of RD/GD-210, <em>Maintenance Programs for Nuclear Power Plants</em>. [21]</p>  <p>The application should include a clearly defined maintenance program containing the proposed measures, policies, methods and procedures that provide direction for maintaining SSCs. Maintenance programs should ensure that SSCs remain capable of maintaining their functions as described in design documents and safety analyses that are included in the plant licensing basis.</p>  <p>The maintenance program should include processes for planning, monitoring, scheduling and executing work activities that ensure SSCs continue to meet design specifications, prevent future degradation, or correction of current failure and impairments.</p>  <p>The maintenance program should describe:</p>
<ul>
<li>preventive maintenance activities</li>
<li>maintenance processes and record retention requirements</li>
<li>corrective maintenance</li>
<li>calibration of measuring and monitoring devices</li>
<li>SSC monitoring, activity optimization</li>
<li>outage management, work assessment</li>
<li>work planning and scheduling</li>
<li>work execution</li>
<li>maintenance procedures</li>
<li>post-maintenance verification and testing</li>
<li>maintenance program assessment</li>
</ul>  <p>The maintenance program should be optimized through a careful analysis of the plant systems and equipment. The program may use reliability-centered maintenance methodology, whereby maintenance activities are focused on the systems and equipment critical to the operation, safety and reliability of the plant.</p>  <p>Maintenance performance indicators should be established, along with a process for comparison of maintenance activities with industry best practices. For more information on maintenance performance indicators, see REGDOC-3.1.1, <em>Reporting Requirements for Nuclear Power Plants</em>. [22]</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.6.4"></div>
<h4 id="sec4-6-4">4.6.4	Aging management program</h4>  <p>The application shall include a clearly defined integrated aging management program that meets the requirements of REGDOC-2.6.3, <em>Aging Management</em>. [23]</p>  <p>The aging management program should include the processes that ensure reliability and availability of required safety functions of SSCs throughout the service life of the NPP.</p>  <p>Aging management should address both physical aging and obsolescence of SSCs.</p>  <p>The aging management program should contain the following elements:</p>
<ul>
<li>organizational arrangements</li>
<li>data collection and record keeping</li>
<li>screening and selection process for aging management</li>
<li>evaluations for aging management</li>
<li>condition assessments</li>
<li>SSC-specific aging management programs</li>
<li>management of obsolescence</li>
<li>interfaces with other supporting plant programs</li>
<li>implementation of aging management programs</li>
<li>review and improvement process for aging management programs</li>
</ul>  <p>SSC-specific aging management programs (also called lifecycle management plans (LCMPs)) should be submitted for major components in accordance with the overall integrated aging management program framework and address the attributes of an effective aging management program as listed in appendix A of REGDOC-2.6.3, <em>Aging Management</em>. [23] Examples of major components that may require LCMPs are fuel channels, feeder piping, steam generators and reactor components, and structures. The SSC-specific aging management programs (or LCMPs) should include structured, forward-looking inspection and maintenance schedules, requirements to monitor and trend aging effects, and any preventive actions necessary to minimize and control aging degradation of the SSCs.</p>  <p>Periodic inspection or in service inspection programs may be incorporated directly into aging management programs or LCMPs, or may be treated as stand-alone programs. When such programs are treated as stand-alone programs, their role in the aging management framework should be defined.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.6.5"></div>
<h4 id="sec4-6-5">4.6.5	Chemistry control program</h4>  <p>The application should include a clearly defined chemistry control program that states the goals and objectives of the program. The program should:</p>
<ul>
<li>preserve the integrity of SSCs important to safety</li>
<li>minimize the harmful effects of chemical impurities and corrosion on plant SSCs</li>
<li>support the minimization of buildup of radioactive material and occupational radiation exposure</li>
<li>limit the release of chemicals and radioactive material to the environment</li>
</ul>  <p>The applicant should demonstrate that the chemistry control program establishes processes and overall requirements for effective control during operation and under lay-up conditions to ensure critical plant equipment performs safely and reliably over the requested licensing period. The application should include a set of technical basis documents establishing the design basis for chemistry control.</p>  <p>The applicant should demonstrate that a chemistry surveillance program is established and implemented to verify the effectiveness of chemistry control in plant systems. The surveillance program should be used to detect trends in parameters and to discover and eliminate undesirable effects and consequences of out of range chemistry parameters.</p>  <p>The applicant should demonstrate that consideration is given to the use of online monitoring of control parameters as the preferable monitoring method for evaluating chemistry conditions in plant systems. The applicant should demonstrate that a calibration and maintenance program is established and applied to all online and laboratory monitoring instrumentation. The applicant should demonstrate that redundancy or equivalency of laboratory facilities is provided to ensure analytical services at all times.</p>  <p>The applicant should demonstrate that the chemistry control program includes defined chemistry specifications for systems; procedures for chemistry parameter monitoring, trending and monitoring activities; and procedures for the storage and handling of chemicals.</p>  <p>The application should include a post-accident sampling system or other adequate sampling facility. If one does not exist, the applicant should describe the other approaches that have been adopted for core damage evaluation and for estimation of the inventory of fission products released into containment.</p>  <p>The applicant should demonstrate that the operating organization has procedures for chemicals and for controlling their required quality. The application should include lists of approved chemicals.</p>  <p>The applicant should demonstrate that the chemistry control program includes procedures for selection, monitoring and analysis of chemistry regime, instructions for operations involving chemistry processes and evaluation of operating results, the operation and reference limits for chemistry parameters and action levels, and possible remedial actions, including ensuring that the chemicals and their quantities used are correct.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.6.6"></div>
<h4 id="sec4-6-6">4.6.6	Periodic and in-service inspection and testing programs</h4>  <p>The application should include periodic and in service inspection and testing programs for the following SSCs:</p>
<ul>
<li>nuclear pressure boundary components</li>
<li>containment components</li>
<li>containment structures</li>
<li>safety-related structures</li>
<li>balance-of-plant pressure boundary components important to safety</li>
</ul>  <p>Periodic and in service inspection and testing programs require physical inspection and testing of SSCs to confirm that service-induced degradation has not increased the likelihood of a failure of a barrier against the release of radioactive substances.</p>  <p>The application should state the codes and standards that the applicant intends to use as the basis of the design, inspection and testing programs. Regulatory acceptance of the proposed codes and standards will be considered as part of the application review process.</p>  <p>The application should include inspection programs for balance-of-plant pressure boundary components based upon the aging management program requirements.</p>  <p>Program documents should describe baseline inspection activities implemented to establish the condition of an SSC at the time it was placed into service and describe periodic inspection activities spanning the intended operating life of the plant.</p>  <p>If the codes and standards listed in appendix B do not apply to a particular plant design, the application should identify alternate codes or standards that meet the intent of current standards from the CSA Group and justify the selection of those codes or standards in the application.</p>  <p>It is acceptable to divide inspection programs by component type or other relevant criteria and to submit separate inspection program documents.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.7"></div>
<h3 id="sec4-7">4.7 Radiation protection</h3>  <p>The radiation protection SCA covers the implementation of a radiation protection program in accordance with the <em>Radiation Protection Regulations</em>. This program must ensure that contamination levels and radiation doses received by individuals are monitored, controlled and maintained as low as reasonably achievable (ALARA).</p>  <p>This section addresses the requirements of the following regulations made under the NSCA:</p>
<ul>
<li><em>General Nuclear Safety and Control Regulations</em>, paragraphs 3(1)(e) and (f)</li>
<li><em>Class I Nuclear Facilities Regulations</em>, paragraph 6(d), (e), (h), (i), (k), (m) and (n) and section 14</li>
<li><em>Radiation Protection Regulations</em></li>
<li><em>Nuclear Substances and Radiation Devices Regulations</em>, sections 5, 8, 20 and 23</li>
</ul>  <p>The radiation protection program should be designed commensurate with the radiological hazards associated with the licensed activities, based on a thorough analysis of radiological hazards, radiation exposure and dose assessments, and an optimization of doses to conform to the ALARA principle.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.7.1"></div>
<h4 id="sec4-7-1">4.7.1	Radiological hazard identification and assessment</h4>  <p>The applicant should provide the radiological evaluation and safety assessment performed in the development of their radiation protection program.</p>  <p>Potential sources of radiation should be identified, and exposure pathways analyzed. The applicant should take into account contained and immobile sources, potential out-of-core criticality (resulting from mishandling of enriched fuel), and potential sources of airborne radioactive material. The applicant should ensure that the nuclear criticality safety program meets the requirements in RD-327, <em>Nuclear Criticality Safety</em>. [18] For additional information, refer also to GD-327, <em>Guidance for Nuclear Criticality Safety</em>. [19]</p>  <p>Estimated annual collective, individual effective and individual equivalent radiation doses for individuals selected for monitoring should be provided, including methods for estimating the doses.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.7.2"></div>
<h4 id="sec4-7-2">4.7.2	Application of ALARA</h4>  <p>The applicant should provide the policy that documents the application of the ALARA principle. The policy should be integrated within the radiation protection program to ensure that radiation exposures and doses conform to the ALARA principle. The information submitted should demonstrate that there is sufficient management commitment in establishing this policy.</p>  <p>For additional information, refer to G-129 rev 1, <em>Keeping Radiation Exposures and Doses "As Low as Reasonably Achievable (ALARA)"</em>. [24]</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.7.3"></div>
<h4 id="sec4-7-3">4.7.3	Elements of the radiation protection program</h4>  <p>The applicant should demonstrate that the radiation protection program includes the following elements:</p>
<ul>
<li>organization and administration for radiation protection</li>
<li>radiation protection training and qualification</li>
<li>classification of areas and local rules</li>
<li>radiation exposure and dose control</li>
<li>radiation protection equipment and instrumentation</li>
<li>radiation monitoring and dose assessment</li>
<li>contamination control</li>
<li>planning for unusual situations</li>
<li>radiation protection program oversight</li>
</ul>  <p>The information submitted should demonstrate that the radiation protection program is based on an assessment that takes into account the location and magnitude of all radiological hazards.</p>
<h5>Organization and administration for radiation protection</h5>  <p>The applicant should provide the organizational structure related to the radiation protection program, including the roles and responsibilities of each position and their experience, training and qualification requirements.</p>  <p>The applicant should provide the policies and procedures that will ensure sufficient management control over work practices.</p>
<h5>Radiation protection training and qualification</h5>  <p>The applicant should provide their radiation protection training program. The program should include methods for training, retraining and indoctrination training, and for maintenance of radiation protection instruction manuals.</p>  <p>The application should identify the knowledge and skills required for all employees, including radiation protection personnel, health physics staff, contractors and visitors.</p>
<h5>Classification of areas and local rules</h5>  <p>The applicant should provide the classification of areas within the NPP. The applicant should also provide the criteria and rationale for radiation zone designations, including zone boundaries during normal, refueling and accident conditions. Zones should be based on predicted dose rates, contamination levels, concentration of airborne radionuclides, access requirements and specific requirements such as the need to separate safety trains. The rationale for zoning should include control of radiation exposures to conform to the ALARA principle, to prevent spread of contamination and to prevent or limit potential radiation exposures.</p>  <p>The applicant should demonstrate that proper signage within areas is provided.</p>  <p>The information submitted should demonstrate that local rules for the areas have been established and described.</p>
<h5>Radiation exposure and dose control</h5>  <p>The applicant should provide methods for radiation exposure and dose control, including policies and procedures that provide the basis for work instructions with the intent of ensuring radiation exposures and doses conform to the ALARA principle.</p>  <p>The applicant should provide the policy and procedures for radiation work planning and radiation work protection. The application should demonstrate that anticipated radiological hazards are also considered in the establishment of operating and maintenance procedures.</p>  <p>The applicant should provide the policies for radiation personal protective equipment (RPPE) and respiratory protection, which includes selection, use and maintenance.</p>  <p>The applicant should identify the equipment for radiation exposure and dose control.</p>  <p>The applicant should provide the action levels and their bases.</p>
<h5>Radiation protection equipment and instrumentation</h5>  <p>The radiation protection program should contain criteria for selecting fixed, portable and laboratory technical equipment and instrumentation for:</p>
<ul>
<li>performing radiation and contamination surveys</li>
<li>in plant airborne radioactivity monitoring and sampling</li>
<li>area radiation monitoring</li>
<li>personnel monitoring for normal operation, AOOs and accident conditions</li>
</ul>  <p>The applicant should provide the quantity of each type of instrument. The quantities and types of equipment should be adequate for anticipated needs in normal operations and emergencies, taking into consideration unavailability during calibration, maintenance and repair.</p>  <p>The application should describe the provisions for instrument storage, calibration and maintenance facilities. The provisions should include details on the frequency of calibration, the maintenance programs and the traceability of the instrumentation&#39;s usage. The application should also describe the calibration services for instrumentation, including how the service ensures traceability to a national standards laboratory.</p>
<h5>Radiation monitoring and dose assessment</h5>  <p>In the radiation protection program, the application should include the policy for a radiation monitoring and survey program with provisions for:</p>
<ul>
<li>routine monitoring, which is conducted to demonstrate that the working environment is satisfactory for continued operations and that no change has taken place that would call for a reassessment of operational procedures</li>
<li>task-related monitoring, which supplies information about a particular task or operation and to provide, if necessary, a basis for immediate decisions on the execution of the task</li>
<li>special monitoring, such as during the commissioning stage for new facilities, following major modifications to either facilities or procedures, or when operations are being carried out under abnormal circumstances such as those following an incident or an accident</li>
</ul>  <p>The application should describe the methods for monitoring and performing surveys, as well as the frequency, types and locations of the measurements to be performed.</p>  <p>The applicant should provide the policy for personnel radiation monitoring and dose assessments. The information should include details on personnel monitoring procedures, bioassays and recording and reporting personnel doses.</p>
<h5>Contamination control</h5>  <p>In the radiation protection program, the application should include the policy for a contamination control program. The contamination control program should include provisions for monitoring and decontaminating objects and persons in controlled areas, including storage areas for contaminated tools and other items.</p>
<h5>Planning for unusual situations</h5>  <p>The application should include the policy describing provisions for radiation protection during AOOs, DBAs and BDBAs/severe accidents. The provisions should consider access controls, properly designed habitability controls, communications systems, adequate radiation monitoring capabilities, portable emergency response radiation protection equipment and instrumentation, and radiation personal protective equipment (RPPE), instrumentation and equipment.</p>
<h5>Radiation protection program oversight</h5>  <p>The applicant should provide a policy for oversight of the radiation protection program, including, but not limited to, considerations of:</p>
<ul>
<li>management commitment</li>
<li>assignment of responsibilities for quality assurance and oversight of the radiation protection program</li>
<li>corrective action feedback into the radiation protection program</li>
</ul>  <p>The applicant should provide a policy for conducting regular reviews of the radiation protection program. The policy should include details on the frequency of, and the process for, conducting the review. The review should include updating procedures, equipment and facilities where improvements are warranted.</p>  <p>The applicant should provide the policy for developing performance indicators (such as goals, objectives and guiding principles for their development).</p>  <p>The applicant should also provide details on which records are generated and the retention periods for those records.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.7.4"></div>
<h4 id="sec4-7-4">4.7.4	Dose to the public</h4>  <p>Where applicable, the application should include the maximum effective doses to the public as a result of activities conducted at the plant during the licence period. The applicant should also submit the technical basis for calculating the dose to the public from licensed activities.</p>  <p>This information may be submitted as part of the information addressing environmental protection.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.8"></div>
<h3 id="sec4-8">4.8 Conventional health and safety</h3>  <p>The conventional health and safety SCA covers the implementation of a program to manage workplace safety hazards and to protect personnel and equipment.</p>  <p>This section addresses the requirements of the following regulations made under the NSCA:</p>
<ul>
<li><em>General Nuclear Safety and Control Regulations</em>, paragraph 3(1)(k)</li>
<li><em>Class I Nuclear Facilities Regulations</em>, paragraphs 3(e) and (f)</li>
</ul>  <p>It also addresses the requirements of the <em>Canada Labour Code Part II</em>.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.8.1"></div>
<h4 id="sec4-8-1">4.8.1	General considerations</h4>  <p>The application should describe the program and implementation of policies to minimize risk to the health and safety of workers posed by conventional (non-radiological) hazards in the workplace, including the management of workplace safety hazards and the protection of personnel and equipment.</p>  <p>The applicant should demonstrate that the occupational health and safety (OHS) program meets the requirements set out in all applicable provincial and federal legislation. The applicant should ensure that all workers, including contractors, comply with the applicant&#39;s health and safety policies and procedures.</p>  <p>OHS is regulated by federal and provincial bodies for nuclear facilities in Canada, including Employment and Social Development Canada, the CNSC and various provincial ministries of labour. The application should address any memoranda of understanding (MOUs) that deal with OHS matters that may be in place between the federal and provincial bodies.</p>  <p>The application should demonstrate that the applicant has policies in place to:</p>
<ul>
<li>adequately execute the worker health and safety policies and procedures</li>
<li>make adequate provision for the protection of the health and safety of persons, including provisions to:
<ul>
<li>demonstrate adequate oversight of the site OHS program</li>
<li>ensure compliance with applicable OHS regulations and requirements</li>
<li>ensure adequate OHS training of persons involved in OHS activities</li>
<li>have the capabilities for reporting, investigating and identifying root causes of incidents and significant events</li>
</ul></li>
<li>implement corrective actions to eliminate the identified root causes and verify completion to prevent recurrence</li>
</ul>  <p>The applicant should identify potential OHS hazards, assess the associated risks, and put in place the necessary materials, equipment, programs and measures to effectively manage, control and minimize those risks. The applicant should demonstrate that the handling and storing of hazardous materials complies with the Workplace Hazardous Materials Information System (WHMIS) program.</p>  <p>The applicant&#39;s health and safety program should include, but not be limited to, periodic inspections, safety meetings, OHS committees and continuous improvement.</p>  <p>In the case of licence renewal, existing measures for safety rates allow the performance of the OHS program to be monitored. These measures should include accident severity rate, accident frequency, lost-time injuries, medically-treated injuries and disabling injuries.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.9"></div>
<h3 id="sec4-9">4.9 Environmental protection</h3>  <p>The environmental protection SCA covers programs that identify, control and monitor all releases of radioactive and hazardous substances and effects on the environment from facilities or as the result of licensed activities.</p>  <p>This section addresses the requirements of the following regulations made under the NSCA:</p>
<ul>
<li><em>General Nuclear Safety and Control Regulations</em>, paragraphs 3(1)(e) and 12(1)(c) and (f)</li>
<li><em>Class I Nuclear Facilities Regulations</em>, paragraphs 3(e), (g), and (h), and 6(h), (i), (j) and (k)</li>
<li><em>Radiation Protection Regulations</em></li>
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
<div id="4.9.1"></div>
<h4 id="sec4-9-1">4.9.1	General considerations</h4>  <p>The application shall include a comprehensive set of environmental protection policies, measures and procedures that meet the requirements of  REGDOC-2.9.1, <em>Environmental Protection: Policy, Assessments and Protection Measures</em>. [9] The application should include detailed information related to the overall environmental effects resulting from facility operation.</p>  <p>The environmental protection strategies described in the application should address the principles of ALARA, pollution prevention, precautionary approach, sustainable development and adaptive management. Emphasis should be placed on preventing or mitigating the cause or source of an effect or sequence of effects, before addressing how to reverse or compensate for an effect after it occurs.</p>  <p>The application should describe all preventive and control measures that will be taken for the protection of the environment during operation. The applicant should demonstrate that the best available technology economically achievable (BATEA) has been incorporated into the plant operation to:</p>
<ul>
<li>prevent or minimize controlled releases of contaminants (for example, radionuclides, hazardous substances or thermal pollution) to the environment</li>
<li>prevent uncontrolled releases to the environment of solid, liquid and gaseous radioactive effluents and non-radiological/hazardous substances</li>
<li>mitigate physical effects such as impingement and entrainment of biota</li>
</ul>  <p>Where a cause cannot be prevented, or the effect cannot be sufficiently mitigated, the application should describe the further contingency responses that have been developed and identify how and when they will be implemented, up to and including activation of the emergency response plan if necessary.</p>  <p>The application should identify and describe all standards, guidelines or criteria that have been applied with respect to preventive and control measures for environmental protection from plant discharges, including:</p>
<ul>
<li>preventive and control measures pertaining to environmental protection, including their expected performance</li>
<li>a list of all SSCs that are important for preventive and control measures</li>
<li>the maintenance program established to ensure the sustained operational performance of preventive and control measures</li>
<li>alarm systems to be installed to respond to failure of preventive and control measures</li>
<li>identification of the measures that will be taken to make appropriate data available to the authorities and the public</li>
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
<div id="4.9.2"></div>
<h4 id="sec4-9-2">4.9.2	Effluent and emissions control (releases)</h4>  <p>The application should describe the effluent monitoring program that will be the primary indicator of plant performance in terms of releases to air, surface waters, groundwater and soils, from both plant operation and waste management activities.</p>  <p>The applicant should demonstrate that the program encompasses all activities to be carried out related to monitoring releases of radioactive and hazardous substances with potential environmental effects. The program should also document and integrate all site routines that will sample, measure and analyze radiological and hazardous substances and physical parameters.</p>  <p>The application should include detailed information on:</p>
<ul>
<li>criteria established to identify the radioactive and hazardous substances that will be monitored, and the detection limits that will be set to verify the performance of the preventive and control measures taken to manage releases</li>
<li>inventory of potential radionuclides and physio-chemical elements that could be released and affect the environment</li>
<li>identification of the authorized limits (for example, dose to the public, derived release limits, action levels and discharge limits) and operational targets for releases and the mitigation of physical effects</li>
<li>alarm systems provided to respond to unplanned releases</li>
<li>availability targets for the various monitoring devices, and a maintenance program to assure sustained performance of monitoring equipment at their availability targets</li>
<li>documentation on personnel qualifications and the training program for specialist staff and contractors participating in the implementation of this effluent monitoring program</li>
<li>documentation on quality assurance and quality control to be followed when undertaking specific monitoring tasks</li>
<li>documentation on procedures for sampling, analytical methods, calibration of equipment and data management</li>
<li>documentation outlining the audit and review process for each of the elements of the effluent monitoring program</li>
</ul>  <p>The applicant should establish derived release limits (DRLs) for radionuclides such as tritium, iodine, carbon 14, noble gases and particulates. The applicant should demonstrate how these DRLs were derived using mathematical equations that describe the transfer of radioactive materials through the environment to humans.</p>  <p>The information submitted should demonstrate how the radiological emissions will be monitored and controlled to conform to the ALARA principle, within the DRLs.</p>  <p>The applicant should establish environmental action levels (EALs) that are approximately 10 percent of the DRLs for respective radionuclides release via airborne, waterborne or sewage discharge pathways.</p>  <p>The program should describe non-radiological aspects of site activity that could have environmental effects, including exposure to members of the public. The program should include detailed information on:</p>
<ul>
<li>identification of the chemical and physical nature of the releases and the potential chemical and physical effects</li>
<li>identification of the authorized limits and operational targets for releases and the measures taken to comply with such limits</li>
<li>the offsite monitoring regime for hazardous substances and the physical effects they cause</li>
<li>the alarm systems for responding to unplanned releases</li>
<li>identification of the measures that will be taken to make appropriate data available to the authorities and the public</li>
</ul>  <p>The application should include an explanation of the measures that will be taken to identify potential or expected releases of hazardous substances to the environment and to identify any physical effects to biota, such as impingement and entrainment or habitat loss.</p>  <p>Where applicable, the applicant should provide information on the monitoring of routine discharges of radioactive effluents and hazardous substances (such as SO2, NO2, CO2, ammonia, hydrazine, chlorine, morpholine and ozone-depleting substances).</p>  <p>If applicable, the applicant should provide the current DRLs and EALs for releases via air, water or sewage at the plant. Guidance criteria for establishing EALs are set out in G-228, <em>Developing and Using Action Levels</em>. [26]</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.9.3"></div>
<h4 id="sec4-9-3">4.9.3	Environmental management system</h4>  <p>The application should describe the environmental management system established to ensure protection of the environment throughout operation.</p>   <p>The environmental management system should include provisions to:</p>
<ul>
<li>control the release of radioactive and hazardous substances into the environment</li>
<li>reduce the generation of wastes</li>
<li>prevent or mitigate adverse environmental effects (including a site environmental emergency preparedness and response program)</li>
</ul>  <p>The environmental management system should include information on:</p>
<ul>
<li>emissions management</li>
<li>spills management</li>
<li>land assessment and remediation management</li>
<li>waste management</li>
<li>management of polychlorinated bi-phenyls (PCBs)</li>
<li>management of ozone-depleting substances</li>
<li>management of environmental impacts</li>
<li>radiological emission limits and action levels</li>
<li>monitoring of radioactivity in effluents</li>
<li>management of the offsite radiological environmental monitoring program</li>
<li>management of adverse effects on fish population (fish impingement and entrainment, and thermal effects)</li>
</ul>  <p>The applicant should identify and document all activities at the facility (such as discharges, emissions, startups and shutdowns) that can affect the environment. The applicant should demonstrate that the establishment, implementation and maintenance of the environmental management system are based upon the management and significance of those activities.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.9.4"></div>
<h4 id="sec4-9-4">4.9.4	Assessment and monitoring</h4>  <p>The application should describe the monitoring system established to cover all environmental monitoring activities on the site during operation. The program should be commensurate to the risk posed by the plant&#39;s anticipated release of substances into the environment and should integrate and document all the activities that sample, measure and analyze radiological and hazardous substances and physical and biological parameters.</p>  <p>The program should document all important pathways, contaminants and parameters, and their relevance to the protection of the environment and human and non-human biota. The program should include the following elements:</p>
<ul>
<li>a design document that describes the structural framework, environmental monitoring components and associated rationale for the environmental monitoring program, including:
<ul>
<li>description of objectives and monitoring rationale</li>
<li>methodology and criteria to identify radiological and hazardous substances and physical and biological parameters that require monitoring</li>
<li>sampling and analytical frequency</li>
<li>sampling locations</li>
<li>environmental media to be sampled</li>
<li>analytical detection limits</li>
<li>performance indicators, targets and action levels</li>
<li>corrective action plan to be implemented if the levels or performance targets are exceeded</li>
</ul></li>
<li>documentation on personnel qualifications and the training program required by staff and contractors</li>
<li>documentation on quality assurance and quality control programs to be followed when planning, monitoring and controlling specific laboratory and field tasks</li>
<li>information on sampling, analytical methods, calibration of equipment and data management</li>
<li>documentation outlining the audit and review process for each of the elements of the environmental monitoring program</li>
</ul>  <p>The application should:</p>
<ul>
<li>take into account the radiological conditions in the environment of the plant site and the radiological effects of any neighbouring plant units and other external sources</li>
<li>provide an understanding of the prevailing radiological conditions at the site</li>
<li>be detailed enough to serve as an initial reference point of the prevailing radiological conditions</li>
</ul>  <p>The application should also describe the provisions for monitoring the site-related parameters affected by:</p>
<ul>
<li>seismic events, atmospheric events, and water- and groundwater-related events</li>
<li>demographic, industrial and transport-related developments</li>
</ul>  <p>This description should be sufficiently detailed to provide the information necessary to support emergency actions in response to external events, to support a periodic review of safety at the site, and to develop dispersion modeling for radioactive material. The description should also serve as confirmation of the completeness of the set of site-specific hazards that have been taken into account.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.9.5"></div>
<h4 id="sec4-9-5">4.9.5	Protection of the public</h4>  <p>The application should identify and describe all the radiological and non-radiological aspects of site activities that could have environmental effects, including exposure to members of the public during operation.</p>  <p>The application should address the measures taken to identify releases of solid, liquid and gaseous radioactive effluents into the environment. It should indicate how the effluents will be managed to conform to the ALARA principle, and should include information on:</p>
<ul>
<li>identification of the authorized limits and operational targets for solid, liquid and gaseous effluent releases and the measures taken to comply with such limits</li>
<li>the offsite monitoring regime for contamination levels and radiation levels in the various components of the surrounding environment, and the methods to be followed to estimate radiation doses to members of the public</li>
<li>the methods to be used to prepare, store and retain records of the radioactive releases that will be made routinely from the site</li>
<li>the dedicated release monitoring programs and alarm systems that are required to respond to unplanned radioactive releases and the automatic devices to be provided to interrupt such releases, if applicable</li>
<li>identification of the measures that will be taken to make appropriate data available to the authorities and the public</li>
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
<div id="4.10"></div>
<h3 id="sec4-10">4.10 Emergency management and fire protection</h3>  <p>The emergency management and fire protection SCA covers emergency plans and emergency preparedness programs that exist for emergencies and for non-routine conditions. This area also includes any results of participation in exercises.</p>   <p><strong>Note:</strong> This SCA includes conventional emergency and fire response. It also includes the fire response rating while fire protection operations, design and analysis are discussed and rated in the appropriate SCA of operating performance, safety analysis or physical design.</p>  <p>This section addresses the requirements of the following regulations made under the NSCA:</p>
<ul>
<li><em>General Nuclear Safety and Control Regulations</em>, paragraphs 3(1.1)(b); 3(1)(d) and (i) [all requirements related to fire]; and articles 12 and 17</li>
<li><em>Class I Nuclear Facilities Regulations</em>, paragraphs 3(f), 6(k) and 7(i)</li>
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
<div id="4.10.1"></div>
<h4 id="sec4-10-1">4.10.1	General considerations</h4>  <p>The emergency preparedness program shall meet the requirements of REGDOC-2.10.1, <em>Nuclear Emergency Preparedness and Response</em>. [27]</p>  <p>An effective emergency preparedness program is based on the following components:</p>
<ul>
<li>planning basis</li>
<li>program management</li>
<li>response plan and procedures</li>
<li>preparedness</li>
</ul>  <p>The applicant should consider those components in the development of plans to prevent or mitigate the effects of accidental releases.</p>  <p>The application should describe the preparations that have been made to ensure that onsite and offsite emergencies and severe accidents will be dealt with safely and effectively. The application should reference population studies and emergency planning considerations related to the site.</p>  <p>The application should include a pandemic plan that contains proactive measures to prevent the spread of disease and to mitigate the effects of widespread absenteeism that could occur during the height of a pandemic outbreak.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.10.2"></div>
<h4 id="sec4-10-2">4.10.2	Nuclear emergency preparedness and response</h4>  <p>The applicant should provide a nuclear emergency program that encompasses both emergency preparedness and emergency response measures. The program should:</p>
<ul>
<li>address emergency situations that could endanger the safety of onsite personnel, the environment and the public</li>
<li>include information outlining the interfaces with the provincial nuclear emergency response plans and coordination with the municipalities and foreign states in the surrounding region when implementing the emergency plan and related protective actions</li>
<li>provide information on the proximity to the plant of airports, railways, roads and emergency services</li>
</ul>  <p>The application should describe how the applicant intends to conduct emergency exercises and drills as outlined in their nuclear emergency plan.</p>  <p>The application should describe any natural or artificial events within and beyond the design basis that would affect emergency management requirements (for example, forest fires, earthquakes, extreme weather conditions, toxic fume clouds, explosions and airplane crashes).</p>  <p>An adequate emergency plan typically covers the following:</p>
<ul>
<li>basis for emergency planning</li>
<li>personnel selection and qualification</li>
<li>emergency preparedness and response organizations</li>
<li>staffing levels</li>
<li>emergency training, drills and exercises</li>
<li>emergency procedures</li>
<li>assessment of emergency response capability</li>
<li>assessment of accidents</li>
<li>activation and termination of emergency responses</li>
<li>protection of facility personnel and equipment</li>
<li>interface with offsite organizations</li>
<li>recovery program</li>
<li>public education program</li>
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
<div id="4.10.3"></div>
<h4 id="sec4-10-3">4.10.3	Conventional emergency preparedness and response</h4>  <p>The application should describe all non-radiological, non-routine conditions at the facility for which the emergency preparedness program has been established. The description should include details about which provisions exist on site and which provisions involve off site response support.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.10.4"></div>
<h4 id="sec4-10-4">4.10.4	Fire emergency preparedness and response</h4>  <p>The applicant should provide a comprehensive fire protection program to ensure the licensed activities do not result in unreasonable risk to the health and safety of persons and the environment due to fire. The program should include provisions for a third-party audit of the industrial fire brigade once every two years.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.11"></div>
<h3 id="sec4-11">4.11 Waste management</h3>  <p>The waste management SCA covers internal waste-related programs that form part of the facility&#39;s operations up to the point where the waste is removed from the facility to a separate waste management facility. This area also covers the planning for decommissioning.</p>  <p>This section addresses the requirements of the following regulations made under the NSCA:</p>
<ul>
<li><em>General Nuclear Safety and Control Regulations</em>, paragraphs 3(1)(d), (e), (f) and (i) and 12(1)(c)</li>
<li><em>Class I Nuclear Facilities Regulations</em>, paragraphs 3(f) and (k), 4(e), 6(h), (i) and (j), and 7(f) and (k)</li>
<li><em>Radiation Protection Regulations</em></li>
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
<div id="4.11.1"></div>
<h4 id="sec4-11-1">4.11.1	General considerations</h4>  <p>The application should describe the waste program that will address waste generated during day-to-day operations of the plant and during planned or unplanned outages to its transfer to the waste storage facility or an authorized facility.</p>  <p>The waste management program should address both conventional and radioactive waste, and should include information on:</p>
<ul>
<li>controls for handling</li>
<li>storage</li>
<li>disposal</li>
<li>characterization</li>
<li>classification</li>
<li>minimization</li>
<li>segregation</li>
<li>clearance</li>
<li>exemption</li>
<li>processing</li>
<li>packaging</li>
<li>training</li>
<li>auditing</li>
<li>transportation</li>
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
<div id="4.11.2"></div>
<h4 id="sec4-11-2">4.11.2	Waste management practices</h4>  <p>The application should identify the main sources of solid, liquid and gaseous radioactive and hazardous waste within the facility. The measures taken for the safe management and disposal of these wastes throughout operation should be described.</p>  <p>The application should describe the types, quantities and volumes of radioactive and hazardous waste that will be accumulated, and how waste will be categorized and separated within the storage areas.</p>  <p>The program should describe the provisions for safe handling of radioactive and hazardous waste of all types produced during operation.</p>  <p>Where the application includes the consolidation of the waste management facility into an NPP operating licence, the application should describe the process for handling (including receipt, transfer and loading of waste), storage and disposal of the solid radioactive waste and the management of spent fuel from the spent fuel bay to the dry storage facility.</p>  <p>The application should address the potential need for specialized systems to deal with issues of storage in both the near and longer term (for example, cooling, containment, volatility, chemical stability, reactivity, retrievability and criticality). Any system already in place should be described.</p>  <p>The program should include the common safety considerations for waste storage, including:</p>
<ul>
<li>immobility and energy state of the radioactive material</li>
<li>stability and resistance to degradation of the waste form and container</li>
<li>multi-barrier containment approach</li>
<li>waste package life and retrievability</li>
<li>facility resistant to hazards, with minimized need for monitoring and maintenance</li>
<li>appropriate robustness for the storage period, prior to disposal activities</li>
</ul>  <p>The program should take into account the possible need to retrieve waste at some point in the future, including during the decommissioning stage.</p>  <p>With respect to the storage and management of spent nuclear fuel, the program should reflect the fundamental safety concerns related to criticality, exposure, heat control, containment and retrievability.</p>  <p>If waste will be transported to another specified location for long-term storage, the application should include provisions for ensuring safe transport.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.11.3"></div>
<h4 id="sec4-11-3">4.11.3	Waste characterization</h4>  <p>The applicant should demonstrate that the waste management program includes the measures taken to categorize and separate waste. The categories should include physical, chemical and radiological waste.</p>  <p>The application should also include the measures taken to condition the waste produced during operation, and describe the procedures for processing the waste.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.11.4"></div>
<h4 id="sec4-11-4">4.11.4	Waste minimization</h4>  <p>The application should describe the measures taken to minimize the accumulation of waste produced during operation. The application should include provisions to reduce the waste to a level that is as low as practicable.</p>  <p>Radioactive waste generation should be minimized at the source by methods such as:</p>
<ul>
<li>design measures</li>
<li>operating procedures</li>
<li>product changes</li>
<li>source control</li>
<li>technology</li>
</ul>  <p>The application should show that both the volume and the activity of the waste are minimized, and that the volume and the activity of the waste meet any specific requirements that may be posed by the design of the waste storage facility.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.11.5"></div>
<h4 id="sec4-11-5">4.11.5	Decommissioning practices</h4>  <p>The application should include a strategy for the management of waste and spent fuel when the reactor and waste storage facility are decommissioned.</p>  <p>The decommissioning strategy should contain provisions for periodic updates to include additional details and to reflect recent developments in the decommissioning plan.</p>  <p>For further guidance on decommissioning, refer to G-219, <em>Decommissioning Planning for Licensed Activities</em>, [28] and G-206, <em>Financial Guarantees for the Decommissioning of Licensed Activities</em>. [29]</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.12"></div>
<h3 id="sec4-12">4.12 Security</h3>  <p>The security SCA covers the programs required to implement and support the security requirements stipulated in the regulations, the licence, orders, or expectations for the facility or activity.</p>  <p>This section addresses the requirements of the following regulations made under the NSCA:</p>
<ul>
<li><em>General Nuclear Safety and Control Regulations</em>, paragraphs 3(1)(d), (e), (g), (h) and (i); 12(1)(c), (g), (h) and (j); sections 21, 22, and 23; subsection 28(1); and section 30</li>
<li><em>Class I Nuclear Facilities Regulations</em>, paragraphs 3(a), (b) and (i), and 6(l)</li>
<li><em>Nuclear Security Regulations</em></li>
<li><em>Nuclear Substances and Radiation Devices Regulations</em>, paragraphs 36(1)(a) and (d)</li>
<li><em>Packaging and Transport of Nuclear Substances Regulations</em>, 2015, section 29</li>
</ul>  <p>It also addresses the requirements of the <em>Private Investigators and Security Guards Act</em>.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.12.1"></div>
<h4 id="sec4-12-1">4.12.1	General considerations</h4>  <p>The security program shall meet the requirements of:</p>
<ul>
<li>RD-361, <em>Criteria for Explosive Substance Detection, X ray Imaging, and Metal Detection Devices at High-Security Sites</em> [32]</li>
<li>REGDOC-2.12.2, <em>Site Access Security Clearance</em> [33]</li>
<li>RD-321, <em>Criteria for Physical Protection Systems and Devices at High-Security Sites</em> [34]</li>
<li>REGDOC-2.12.1, <em>High-Security Sites: Nuclear Response Force</em> [35]</li>
<li>REGDOC-2.12.3, <em>Security of Nuclear Substances: Sealed Sources</em> [4]</li>
<li>RD-363, <em>Nuclear Security Officer Medical, Physical, and Psychological Fitness</em> [36]</li>
</ul>  <p>The application should describe the security program and plan that will encompass all licensed activities, including a description of:</p>
<ul>
<li>the threat risk assessment (TRA) process and results</li>
<li>the cyber security program</li>
<li>response arrangements</li>
<li>security practices</li>
<li>the security training and qualification program</li>
</ul>  <p>The applicant should provide information related to:</p>
<ul>
<li>site access control and measures to prevent loss or illegal use, illegal possession or illegal removal of the nuclear substance</li>
<li>prescribed assets (equipment or prescribed information)</li>
<li>the proposed measures to prevent acts of sabotage or attempted sabotage at the nuclear facility</li>
<li>specific information related to meeting the requirements for high-security sites and the transportation of Category I, II or III nuclear material</li>
</ul>  <p>The applicant should perform a complete TRA to mitigate any threats, risks or vulnerabilities to the facility. Vital areas within the nuclear facility should be protected against design-basis threats and any other credible threats identified in the TRA. The security program should be based on credible risks and vulnerabilities, and should contain a site plan that conforms to the <em>Nuclear Security Regulations</em>.</p>  <p>The applicant should ensure that the TRA will be an ongoing process that continuously monitors for any change in the threat environment.</p>  <p>Regulatory document G-208, <em>Transportation Security Plans for Category I, II or III Nuclear Material</em> [30] provides information on preparing and submitting a written transportation security plan.</p>  <p>Regulatory document G-274, <em>Security Programs for Category I or II Nuclear Material or Certain Nuclear Facilities</em> [31] provides information that should be included with a licence application. Specific topics include, for example, how security information should be organized and the administrative procedures to be followed when providing the security program description.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.12.2"></div>
<h4 id="sec4-12-2">4.12.2	Facilities and equipment</h4>  <p>The security program should ensure that:</p>
<ul>
<li>security systems, devices and equipment provide deterrence, detection, assessment and delay functions</li>
<li>operational readiness is maintained</li>
</ul>  <p>The applicant should ensure that adequate engineered safety barriers are in place to protect against malevolent acts. The provisions for the protection against malevolent acts should be documented as part of a managed program or process within the management system. Changes in design, analysis or operational procedures that are credited for the protection against malevolent acts in the annual threat and risk assessment are to be summarized and submitted to the Commission in accordance with the <em>Nuclear Security Regulations</em>.</p>  <p>The application should describe the control of personnel and vehicle access to vital areas. Control mechanisms should include at least one of the following elements: access control devices, identification badges, escorted access, detection and assessment systems.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.12.3"></div>
<h4 id="sec4-12-3">4.12.3	Response arrangements</h4>  <p>The security program should ensure that onsite and offsite response arrangements provide effective response to unauthorized removal of nuclear or radioactive material or to the sabotage of nuclear facilities.</p>  <p>The applicant should provide a tactical deployment plan, including having protection arrangements with an offsite response force.</p>  <p>The program should ensure that a nuclear response force is in place and authorized to prevent and detect unauthorized entry into a protected area or inner area, including unauthorized entry of weapons and explosive substances.</p>  <p>Communications systems should be implemented commensurate to the threats, risks and vulnerabilities.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.12.4"></div>
<h4 id="sec4-12-4">4.12.4	Security practices</h4>  <p>The security program should describe measures to ensure administrative and technical measures are implemented, maintained and documented in a security program.</p>  <p>Access to prescribed assets should be limited to those personnel having the appropriate security clearance and a valid need-to-know basis.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.12.5"></div>
<h4 id="sec4-12-5">4.12.5	Security training and qualification</h4>  <p>The program shall describe measures in place to ensure response personnel are trained and capable in accordance with REGDOC-2.2.2, <em>Personnel Training</em>. [5] Testing includes conducting realistic drills and exercises to test the performance of security systems, processes, procedures and personnel.</p>  <p>The program should describe the duties of the security officers. The applicant should demonstrate that the security officers are adequately equipped to perform their assigned duties and tasks.</p>  <p>Before authorizing a person to act as a nuclear security officer, the applicant should ensure that the required documentation and necessary medical, physical and psychological certification of that person has been obtained.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.12.6"></div>
<h4 id="sec4-12-6">4.12.6	Cyber security</h4>  <p>The applicant should submit a cyber security program that ensures cyber assets that are subject to cyber security requirements are protected from cyber attacks. The application should address internal and external cyber threats.</p>  <p>The application should describe how the cyber security program is designed, implemented and maintained as an effective program. The application should provide information on the following program elements, including but not limited to:</p>
<ul>
<li>defensive strategy and security architecture</li>
<li>policies and procedures</li>
<li>asset identification and classification</li>
<li>roles and responsibilities of the involved parties</li>
<li>security controls</li>
<li>awareness and training</li>
<li>configuration management</li>
<li>coordination with other programs</li>
<li>incident response, reporting and recovery plan</li>
<li>program review and maintenance</li>
<li>lifecycle approach to cyber assets</li>
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
<div id="4.13"></div>
<h3 id="sec4-13">4.13 Safeguards and non-proliferation</h3>  <p>The safeguards and non-proliferation SCA covers the programs and activities required for the successful implementation of the obligations arising from the Canada/International Atomic Energy Agency (IAEA) safeguards agreements as well as all other measures arising from the <em>Treaty on the Non-Proliferation of Nuclear Weapons</em>.</p>  <p>This section addresses the requirements of the following regulations made under the NSCA:</p>
<ul>
<li><em>General Nuclear Safety and Control Regulations</em>, subsections 3(1.1) and 3(2), paragraphs 3(1)(g) and (h), 10(b) and 12(1)(i); section 18, paragraphs 20(d) and 21(1)(a) and (b); subsection 23(2) and section 30</li>
<li><em>Class I Nuclear Facilities Regulations</em>, paragraph 6(f)</li>
<li><em>Nuclear Non-proliferation Import and Export Control Regulations</em></li>
</ul>  <p>It also addresses the requirements of the following international protocols:</p>
<ul>
<li>IAEA INFCIRC/164, <em>Agreement between Government of Canada and IAEA for the Application of Safeguards in Connection with the Treaty on the Non-Proliferation of Nuclear Weapons</em> [37]</li>
<li>IAEA INFCIRC/164/Add.1, <em>Protocol additional to INFCIRC/164</em> [38]</li>
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
<div id="4.13.1"></div>
<h4 id="sec4-13-1">4.13.1	General considerations</h4>  <p>The applicant shall provide a description of the arrangements made by the applicant that will permit the CNSC to discharge Canada&#39;s obligations and provide information to the IAEA. The arrangements shall address the requirements in REGDOC-2.13.2, <em>Import and Export</em> [39] and RD-336, <em>Accounting and Reporting of Nuclear Material</em>. [40]</p>  <p>The arrangements should describe measures related to site buildings and structures, operational parameters and the flow and storage of nuclear material, from the plant&#39;s design and commissioning phases through to its decommissioning and eventual abandonment.</p>  <p>For NPPs, the non-proliferation program is limited to the tracking and reporting of foreign obligations and origins of nuclear material.</p>  <p>For the purposes of the application and its review, document ownership will vary between the IAEA, the CNSC and the applicant:</p>
<ul>
<li>the IAEA is responsible for the generic safeguards approach</li>
<li>the CNSC is responsible for providing assistance in developing the generic approach, assisting in developing the procedures at the applicant level, and monitoring compliance with safeguard documents and obligations</li>
<li>the applicant is responsible for establishing and implementing the safeguards program</li>
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
<div id="4.13.2"></div>
<h4 id="sec4-13-2">4.13.2	Nuclear accountancy and control</h4>  <p>The program should ensure that the collection, storage and reporting to the CNSC and IAEA on the inventory and transfer of fissionable and fertile substances. The program should describe measures to ensure that nuclear materials are tracked and reports are submitted to the CNSC on the inventory and transfer of fissionable and fertile substances and application of IAEA safeguards.</p>  <p>The safeguards program should include provisions for timely submission of accurate reports and information on nuclear material. Further information is available in GD-336, <em>Guidance for Accounting and Reporting of Nuclear Material</em>. [41]</p>  <p>The program should also include provisions for the submission of:</p>
<ul>
<li>annual operational information</li>
<li>accurate design information of plant structures</li>
<li>processes and procedures</li>
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
<div id="4.13.3"></div>
<h4 id="sec4-13-3">4.13.3	Access and assistance to the IAEA</h4>  <p>The program should ensure that the IAEA is able, upon request, to access the facility for inspections and other verification activities. Additionally, the applicant should ensure that such activities are supported by facility personnel and resources.</p>  <p>The applicant&#39;s program should address reviews of the effectiveness of safeguards procedures, and of assistance to the IAEA for site access and inspections.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.13.4"></div>
<h4 id="sec4-13-4">4.13.4	Operational and design information</h4>  <p>The applicant&#39;s program should:</p>
<ul>
<li>describe the processes that collect, store and report relevant operational information to the CNSC and the IAEA</li>
<li>ensure that the facility&#39;s design information questionnaire is complete and correct</li>
<li>ensure that updates are reported to the CNSC</li>
</ul>  <p>The program should also include methods of development and implementation of an appropriate safeguards approach based on the plant&#39;s specific designs.</p>  <p>In the development and implementation of the safeguards approach, the applicant should engage both the CNSC and the IAEA to ensure the approach taken is suitable for its purpose.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.13.5"></div>
<h4 id="sec4-13-5">4.13.5	Safeguards equipment, containment and surveillance</h4>  <p>The applicant should ensure that adequate resources (such as power and lighting) are provided to IAEA equipment and that measures are in place for the protection of IAEA equipment and seals.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.14"></div>
<h3 id="sec4-14">4.14 Packaging and transport</h3>  <p>The packaging and transport SCA covers programs for the safe packaging and transport of nuclear substances to and from the licensed facility.</p>  <p>This section addresses the requirements of the following regulations made under the NSCA:</p>
<ul>
<li><em>General Nuclear Safety and Control Regulations</em>, section 3(2) and paragraph 20(a)</li>
<li><em>Class I Nuclear Facilities Regulations</em>, paragraph 6(e)</li>
<li><em>Packaging and Transport of Nuclear Substances Regulations</em>, 2015</li>
</ul>  <p>It also addresses the requirements of the following regulations and international protocols:</p>
<ul>
<li><em>Transportation of Dangerous Goods Regulations</em></li>
<li>United States Nuclear Regulatory Commission (U.S. NRC), USNRC 10 CFR Part 71, <em>Packaging and Transportation of Radioactive Material</em> [42] (required when U.S. NRC certification is sought)</li>
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
<div id="4.14.1"></div>
<h4 id="sec4-14-1">4.14.1	General considerations</h4>  <p>The applicant should provide:</p>
<ul>
<li>information related to site access control and measures to prevent loss or illegal use, illegal possession or illegal removal of the nuclear substance, prescribed equipment or prescribed information</li>
<li>the proposed measures to prevent acts of sabotage or attempted sabotage at the nuclear facility</li>
<li>specific information related to meeting the requirements for high-security sites and the transportation of Category I, II or III nuclear material</li>
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
<div id="4.14.2"></div>
<h4 id="sec4-14-2">4.14.2	Package design and maintenance</h4>  <p>The program should include measures to ensure that all shipping packages are designed and maintained for the protection and containment of the quantities transported.</p>  <p>The program should address elements such as package certification, package testing, inspection and maintenance.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.14.3"></div>
<h4 id="sec4-14-3">4.14.3	Packaging and transport program</h4>  <p>The application should describe the measures to ensure that appropriate training is provided for personnel involved in the handling, preparation for transport, and transport of dangerous goods. The program should ensure that training certificates are issued to workers.</p>  <p>The applicant should prepare and maintain documentation demonstrating that the packages to be used to transport nuclear substances meet the requirements of the <em>Packaging and Transport of Nuclear Substances Regulations, 2015</em> and the <em>Transportation of Dangerous Goods Regulations</em>.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.14.4"></div>
<h4 id="sec4-14-4">4.14.4	Registration for use</h4>  <p>The application should describe the measures in place to ensure that certified packages are registered prior to transport.</p>
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
<h2 id="sec5">5. Other Matters of Regulatory Interest</h2>  <p>This section addresses the requirements of the following regulations made under the NSCA:</p>
<ul>
<li><em>General Nuclear Safety and Control Regulations</em>, paragraphs 3(1)(l) and (m) and sections 29 to 32</li>
<li><em>Class I Nuclear Facilities Regulations</em>, paragraph 3(j)</li>
<li><em>Canadian Nuclear Safety Commission Cost Recovery Fees Regulations</em></li>
</ul>  <p>It also addresses the requirements of the <em>Nuclear Liability Act</em>.</p>
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
<h3 id="sec5-1">5.1 Reporting requirements</h3>  <p>The reporting and trending programs shall meet the requirements of REGDOC-3.1.1, <em>Reporting Requirements for Nuclear Power Plants</em>. [22]</p>  <p>The applicant should provide information on the program, process and procedures for reporting, in accordance with REGDOC-3.1.1, [22] on:</p>
<ul>
<li>scheduled reporting or compliance monitoring</li>
<li>unscheduled reporting of events</li>
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
<div id="5.2"></div>
<h3 id="sec5-2">5.2 Public information and disclosure program</h3>  <p>Applicants shall provide information on their proposed public information and disclosure programs (required by all licensees).</p>  <p>For new facilities, the applicant should demonstrate that ongoing engagement with appropriate parties has been continued from construction activities and integrated into operational activities.</p>  <p>All applications should describe the public information and disclosure program, which includes how the applicant has and will engage with interested stakeholders, and address all requirements and expectations contained in RD/GD-99.3, <em>Public Information and Disclosure</em>. [43]</p>  <p>The program should describe how and with what tools the licensee will communicate with the public, particularly with those persons living in the vicinity of the site. It shall include the general nature and characteristics of the anticipated effects on the environment and the health and safety of persons that may result from the operation of the facility, which is listed under "General Requirements for Licence Applications" under section 3(j) of the <em>Class I Nuclear Facilities Regulations</em>.</p>  <p>Because the program is designed and intended for the public, the information should be presented in a manner that is understandable to the general public, using plain, non-technical language when possible. This should correspond to the public&#39;s perception of risk and the level of public interest in the licensed activities.</p>
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
<h3 id="sec5-3">5.3 Aboriginal engagement</h3>  <p>The CNSC, as an agent of the Crown, has the responsibility to ensure that Canada&#39;s legal obligations to Canada&#39;s Aboriginal peoples, as outlined in section 35 of the <em>Constitution Act, 1982</em>, are respected. Applicants and licensees&#39; Aboriginal engagement activities help inform the CNSC&#39;s approach to Aboriginal consultation.</p>  <p>In accordance with REGDOC-3.2.2, <em>Aboriginal Engagement</em>, [44] applicants are encouraged to provide the CNSC a summary of their engagement activities with Aboriginal groups.</p>
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
<h3 id="sec5-4">5.4 Cost recovery, financial guarantees and insurance</h3>  <p>Each NPP licensee in Canada has the prime responsibility for the safety of its facility, including providing adequate financial resources to support the safety of each NPP throughout its life.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="5.4.1"></div>
<h4 id="sec5-4-1">5.4.1	Cost recovery</h4>  <p>An operating licence for a nuclear power plant is subject to the requirements of Part 2 of the <em>Canadian Nuclear Safety Commission Cost Recovery Fees Regulations</em>. Applicants are responsible for payment of the annual fees determined by CNSC. Payments are normally requested on a quarterly basis and are due to the Receiver General of Canada.</p>  <p>The applicant should discuss the details of the amount and payment plan with the CNSC.</p>  <p>For additional information, refer to the <em>Canadian Nuclear Safety Commission Cost Recovery Fees Regulations</em>.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="5.4.2"></div>
<h4 id="sec5-4-2">5.4.2	Financial guarantees</h4>  <p>The applicant should provide financial guarantees for the costs of decommissioning the NPP according to the NSCA and the <em>General Nuclear Safety and Control Regulations</em>. The applicant should also provide a cross-reference to the supporting document regarding the value and form of the financial guarantee.</p>  <p>For more information about financial guarantees and licensing, consult G-206, <em>Financial Guarantees for the Decommissioning of Licensed Activities</em>. [29]</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="5.4.3"></div>
<h4 id="sec5-4-3">5.4.3	Nuclear liability insurance</h4>  <p><em>The Nuclear Liability Act</em> requires a nuclear power plant to have coverage for nuclear liability insurance.</p>  <p>The applicant should provide a certificate of insurance specifying the limit and policy terms. The applicant should also provide cross-references to all supporting documents regarding the value and form of the applicant&#39;s nuclear liability insurance.</p>  <p>For additional information, refer to the <em>Nuclear Liability Act</em>.</p>
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
<h2 id="appA">Appendix A: Safety and Control Areas</h2>  <p>The CNSC&#39;s regulatory requirements and expectations for the safety performance of programs are grouped into three functional areas and 14 safety and control areas (SCAs). The SCAs are further divided into specific areas that define the key components of each SCA. Table A shows a list of the functional areas, SCAs and the specific areas that define the key components of each SCA.</p>
<table className="width-100 table">  <caption className="text-left">Table A.1: The CNSC&#39;s functional areas, safety and control areas and specific areas for assessing licensee safety performance</caption>
<tr>
<th width="135" className="text-center">Functional area</th>
<th width="263" className="text-center">Safety and control area (SCA)</th>
<th width="386" className="text-center text-center">Specific area</th>
</tr>
<tr>
<td rowspan="23">Management</td>
<td rowspan="10">Management system</td>
<td>Management system</td>
</tr>
<tr>
<td>Organization</td>
</tr>
<tr>
<td>Performance assessment, improvements and management review</td>
</tr>
<tr>
<td>Operating experience (OPEX)</td>
</tr>
<tr>
<td>Change management</td>
</tr>
<tr>
<td>Safety culture</td>
</tr>
<tr>
<td>Configuration management</td>
</tr>
<tr>
<td>Records management</td>
</tr>
<tr>
<td>Management of contractors</td>
</tr>
<tr>
<td>Business continuity</td>
</tr>
<tr>
<td rowspan="6">Human performance management</td>
<td>Human performance program</td>
</tr>
<tr>
<td>Personnel training</td>
</tr>
<tr>
<td>Personnel certification</td>
</tr>
<tr>
<td>Initial certification examinations and requalification tests</td>
</tr>
<tr>
<td>Work organization and job design</td>
</tr>
<tr>
<td>Fitness for duty</td>
</tr>
<tr>
<td rowspan="7">Operating performance</td>
<td>Conduct of licensed activity</td>
</tr>
<tr>
<td>Procedures</td>
</tr>
<tr>
<td>Reporting and trending</td>
</tr>
<tr>
<td>Outage management performance</td>
</tr>
<tr>
<td>Safe operating envelope</td>
</tr>
<tr>
<td>Severe accident management and recovery</td>
</tr>
<tr>
<td>Accident management and recovery</td>
</tr>
<tr>
<td rowspan="18">Facility and equipment</td>
<td rowspan="6">Safety analysis</td>
<td>Deterministic safety analysis</td>
</tr>
<tr>
<td>Hazard analysis</td>
</tr>
<tr>
<td>Probabilistic safety analysis</td>
</tr>
<tr>
<td>Criticality safety</td>
</tr>
<tr>
<td>Severe accident analysis</td>
</tr>
<tr>
<td>Management of safety issues (including R&amp;D programs)</td>
</tr>
<tr>
<td rowspan="6">Physical design</td>
<td>Design governance</td>
</tr>
<tr>
<td>Site characterizations</td>
</tr>
<tr>
<td>Facility design</td>
</tr>
<tr>
<td>Structure design</td>
</tr>
<tr>
<td>System design</td>
</tr>
<tr>
<td>Components design</td>
</tr>   <tr>
<td rowspan="6">Fitness for service</td>
<td>Equipment fitness for service / equipment performance</td>
</tr>
<tr>
<td>Maintenance</td>
</tr>
<tr>
<td>Structural integrity</td>
</tr>
<tr>
<td>Aging management</td>
</tr>
<tr>
<td>Chemistry control</td>
</tr>
<tr>
<td>Periodic inspections and testing</td>
</tr>
<tr>
<td rowspan="32">Core control process</td>
<td rowspan="5">Radiation protection</td>
<td>Application of ALARA</td>
<tr>
<td>Worker dose control</td>
</tr>
<tr>
<td>Radiation protection program performance</td>
</tr>
<tr>
<td>Radiological hazard control</td>
</tr>
<tr>
<td>Estimated dose to public</td>
</tr>
<tr>
<td rowspan="3">Conventional health and safety</td>
<td>Performance</td>
</tr>
<tr>
<td>Practices</td>
</tr>
<tr>
<td>Awareness</td>
</tr>
<tr>
<td rowspan="5">Environmental protection</td>
<td>Effluent and emissions control (releases)</td>
</tr>
<tr>
<td>Environmental management system</td>
</tr>
<tr>
<td>Assessment and monitoring</td>
</tr>
<tr>
<td>Protection of the public</td>
</tr>
<tr>
<td>Environmental risk assessment</td>
</tr>
<tr>
<td rowspan="3">Emergency management and fire protection</td>
<td>Conventional emergency preparedness and response</td>
</tr>
<tr>
<td>Nuclear emergency preparedness and response</td>
</tr>
<tr>
<td>Fire emergency preparedness and response</td>
</tr>
<tr>
<td rowspan="4">Waste management</td>
<td>Waste characterization</td>
</tr>
<tr>
<td>Waste minimization</td>
</tr>
<tr>
<td>Waste management practices</td>
</tr>
<tr>
<td>Decommissioning plans</td>
</tr>
<tr>
<td rowspan="4">Security</td>
<td>Facilities and equipment</td>
</tr>
<tr>
<td>Response arrangements</td>
</tr>
<tr>
<td>Security practices</td>
</tr>
<tr>
<td>Drills and exercises</td>
</tr>
<tr>
<td rowspan="5">Safeguards and non-proliferation</td>
<td>Nuclear material accountancy and control</td>
</tr>
<tr>
<td>Access and assistance to the IAEA</td>
</tr>
<tr>
<td>Operational and design information</td>
</tr>
<tr>
<td>Safeguards equipment, containment and surveillance</td>
</tr>
<tr>
<td>Import and export</td>
</tr>
<tr>
<td rowspan="3">Packaging and transport</td>
<td>Package design and maintenance</td>
</tr>
<tr>
<td>Packaging and transport</td>
</tr>
<tr>
<td>Registration for use</td>
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
<div id="AppB"></div>
<h2 id="secAppB">Appendix B: Regulatory Documents and Industry Standards</h2>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="AppB.1"></div>
<h3 id="AppB-1">B.1: Regulatory documents and industry standards to be applied as requirements for all applicants</h3>  <p>Licensees are required to meet these requirements, codes and standards. The application shall include a description of how these documents and standards will be met.</p>
<table className="width-100 table">
<tr>
<th className="text-center">Document source</th>
<th className="text-center">Document number</th>
<th className="text-center">Document title</th>
<th className="text-center">Related SCAs</th>
</tr>
<tr>
<td>CNSC</td>
<td>RD/GD-99.3</td>
<td><em>Public Information and Disclosure</em></td>
<td>N/A</td>
</tr>
<tr>
<td>CNSC</td>
<td>REGDOC-3.2.2</td>
<td><em>Aboriginal Engagement</em></td>
<td>N/A</td>
</tr>
<tr>
<td>CNSC</td>
<td>RD-204</td>
<td><em>Certification of Persons Working at Nuclear Power Plants</em></td>
<td>2</td>
</tr>
<tr>
<td>CNSC</td>
<td>RD-321</td>
<td><em>Criteria for Physical Protection Systems and Devices at High-Security Sites</em></td>
<td>12</td>
</tr>
<tr>
<td>CNSC</td>
<td>RD-336</td>
<td><em>Accounting and Reporting of Nuclear Material</em></td>
<td>3, 13</td>
</tr>
<tr>
<td>CNSC</td>
<td>RD-361</td>
<td><em>Criteria for Explosive Substance Detection, X-ray Imaging and Metal Detection at High Security Sites</em></td>
<td>12</td>
</tr>
<tr>
<td>CNSC</td>
<td>RD-363</td>
<td><em>Nuclear Security Officer Medical, Physical and Psychological Fitness</em></td>
<td>2, 12</td>
</tr>
<tr>
<td>CNSC</td>
<td>RD/GD-98</td>
<td><em>Reliability Programs for Nuclear Power Plants</em></td>
<td>3, 5, 6</td>
</tr>
<tr>
<td>CNSC</td>
<td>RD/GD-210</td>
<td><em>Maintenance Programs for Nuclear Power Plants</em></td>
<td>3, 5, 6</td>
</tr>
<tr>
<td>CNSC</td>
<td>REGDOC-2.2.2</td>
<td><em>Personnel Training</em></td>
<td>2, 10</td>
</tr>
<tr>
<td>CNSC</td>
<td>REGDOC-2.3.2</td>
<td><em>Accident Management, version&nbsp;2</em></td>
<td>3, 10</td>
</tr>
<tr>
<td>CNSC</td>
<td>REGDOC-2.4.1</td>
<td><em>Deterministic Safety Analysis</em></td>
<td>3, 4</td>
</tr>
<tr>
<td>CNSC</td>
<td>REGDOC-2.4.2</td>
<td><em>Probabilistic Safety Assessment (PSA) for Nuclear Power Plants</em></td>
<td>3, 4</td>
</tr>
<tr>
<td>CNSC</td>
<td>REGDOC-2.6.3</td>
<td><em>Aging Management</em></td>
<td>3, 5, 6</td>
</tr>
<tr>
<td>CNSC</td>
<td>REGDOC-2.9.1</td>
<td><em>Environmental Protection: Environmental Policy, Assessments and Protection Measures</em></td>
<td>3, 9</td>
</tr>
<tr>
<td>CNSC</td>
<td>REGDOC-2.10.1</td>
<td><em>Nuclear Emergency Preparedness and Response</em></td>
<td>10</td>
</tr>
<tr>
<td>CNSC</td>
<td>REGDOC-2.12.1</td>
<td><em>High-Security Sites: Nuclear Response Force</em></td>
<td>12</td>
</tr>
<tr>
<td>CNSC</td>
<td>REGDOC-2.12.2</td>
<td><em>Site Access Security Clearance</em></td>
<td>12</td>
</tr>
<tr>
<td>CNSC</td>
<td>REGDOC-3.1.1</td>
<td><em>Reporting Requirements for Nuclear Power Plants</em></td>
<td>3</td>
</tr>
<tr>
<td>CSA Group</td>
<td>N285.0</td>
<td><em>General requirements for pressure-retaining systems and components in CANDU nuclear power plants</em></td>
<td>3, 5, 6</td>
</tr>
<tr>
<td>CSA Group</td>
<td>N285.4</td>
<td><em>Periodic inspection of CANDU nuclear power plant components</em></td>
<td>3, 5, 6</td>
</tr>
<tr>
<td>CSA Group</td>
<td>N285.5</td>
<td><em>Periodic inspection of CANDU nuclear power plant containment components</em></td>
<td>3, 5, 6</td>
</tr>
<tr>
<td>CSA Group</td>
<td>N286</td>
<td><em>Management system requirements for nuclear facilities</em></td>
<td>1, 3</td>
</tr>
<tr>
<td>CSA Group</td>
<td>N286.7</td>
<td><em>Quality Assurance of Analytical, Scientific and Design Computer Programs for Nuclear Power Plants</em></td>
<td>1, 4, 5, 6</td>
</tr>
<tr>
<td>CSA Group</td>
<td>N287.7</td>
<td><em>In-service examination and testing requirements for concrete containment structures for CANDU nuclear power plants</em></td>
<td>3, 5, 6</td>
</tr>
<tr>
<td>CSA Group</td>
<td>N288.1</td>
<td><em>Guidelines for calculating derived release limits for radioactive material in airborne and liquid effluents for normal operation of nuclear facilities</em></td>
<td>3, 9</td>
</tr>
<tr>
<td>CSA Group</td>
<td>N288.4</td>
<td><em>Environmental monitoring programs at Class I nuclear facilities and uranium mines and mills</em></td>
<td>3, 9</td>
</tr>
<tr>
<td>CSA Group</td>
<td>N288.5</td>
<td><em>Effluent monitoring programs at Class I nuclear facilities and uranium mines and mills</em></td>
<td>3, 9</td>
</tr>
<tr>
<td>CSA Group</td>
<td>N288.6</td>
<td><em>Environmental risk assessments at Class I nuclear facilities and uranium mines and mills</em></td>
<td>3, 9</td>
</tr>
<tr>
<td>CSA Group</td>
<td>N289.1</td>
<td><em>General requirements for seismic design and qualification of CANDU nuclear power plants</em></td>
<td>3, 5, 6</td>
</tr>
<tr>
<td>CSA Group</td>
<td>N290.13</td>
<td><em>Environmental Qualification of Equipment for CANDU Nuclear Power Plants</em></td>
<td>3, 5, 6</td>
</tr>
<tr>
<td>CSA Group</td>
<td>N290.15</td>
<td><em>Requirements for the safe operating envelope of nuclear power plants</em></td>
<td>3, 4</td>
</tr>
<tr>
<td>CSA Group</td>
<td>N292.3</td>
<td><em>Management of low- and intermediate-level radioactive waste</em></td>
<td>3, 11</td>
</tr>
<tr>
<td>CSA Group</td>
<td>N293</td>
<td><em>Fire protection for nuclear power plants</em></td>
<td>3, 10</td>
</tr>
<tr>
<td>CSA Group</td>
<td>N294</td>
<td><em>Decommissioning of facilities containing nuclear substances</em></td>
<td>3, 11</td>
</tr>
<tr>
<td>CSA Group</td>
<td>B51</td>
<td><em>Boiler, pressure vessel, and pressure piping code</em></td>
<td>3, 5, 6</td>
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
<div id="AppB.2"></div>
<h3 id="AppB-2">B.2: Regulatory documents and industry standards to be applied as requirements for new facilities and addressed as guidance for existing facilities</h3>  <p>In addition to the documents listed in table B.1, applicants for new facilities are required to meet the requirements, codes and standards listed in table B.2; the application shall include a description of how these documents and standards will be met. For any licence renewals for existing facilities, the application shall address these documents and standards to the extent practicable; for example, in a periodic safety review.</p>
<table className="width-100 table">
<tr>
<th className="text-center">Document source</th>
<th className="text-center">Document number</th>
<th className="text-center">Document title</th>
<th className="text-center">Related SCAs</th>
</tr>
<tr>
<td>CNSC</td>
<td>RD-346</td>
<td><em>Site Evaluation for New Nuclear Power Plants</em></td>
<td>5</td>
</tr>
<tr>
<td>CNSC</td>
<td>RD-353</td>
<td><em>Testing and Implementation of Emergency Measures</em></td>
<td>12</td>
</tr>
<tr>
<td>CNSC</td>
<td>REGDOC 2.3.1</td>
<td><em>Conduct of Licensed Activities: Construction and Commissioning Programs</em></td>
<td>3</td>
</tr>
<tr>
<td>CNSC</td>
<td>REGDOC-2.5.2</td>
<td><em>Design of Reactor Facilities: Nuclear Power Plants</em></td>
<td>5</td>
</tr>
<tr>
<td>ASME</td>
<td>B31.1</td>
<td><em>Power Piping</em></td>
<td>3, 5, 6</td>
</tr>
<tr>
<td>ASME</td>
<td>BPVC</td>
<td><em>Boiler and Pressure Vessel Code</em></td>
<td>3, 5, 6</td>
</tr>
<tr>
<td>CSA Group</td>
<td>N285.0/N285.6 Series</td>
<td><em>General requirements for pressure-retaining systems and components in CANDU nuclear power plants/Material standards for reactor components for CANDU nuclear power plants</em></td>
<td>3, 5, 6</td>
</tr>
<tr>
<td>CSA Group</td>
<td>N285.8</td>
<td><em>Technical requirements for in service evaluation of zirconium alloy pressure tubes in CANDU reactors</em></td>
<td>3, 5, 6</td>
</tr>
<tr>
<td>CSA Group</td>
<td>N287.1</td>
<td><em>General requirements for concrete containment structures for nuclear power plants</em></td>
<td>3, 5, 6</td>
</tr>
<tr>
<td>CSA Group</td>
<td>N287.2</td>
<td><em>Material requirements for concrete containment structures for CANDU nuclear power plants</em></td>
<td>3, 5, 6</td>
</tr>
<tr>
<td>CSA Group</td>
<td>N287.3</td>
<td><em>Design requirements for concrete containment structures for nuclear power plants</em></td>
<td>3, 5, 6</td>
</tr>
<tr>
<td>CSA Group</td>
<td>N287.4</td>
<td><em>Construction, fabrication, and installation requirements for concrete containment structures for CANDU nuclear power plants</em></td>
<td>3, 5, 6</td>
</tr>
<tr>
<td>CSA Group</td>
<td>N287.5</td>
<td><em>Examination and testing requirements for concrete containment structures for nuclear power plants</em></td>
<td>3, 5, 6</td>
</tr>
<tr>
<td>CSA Group</td>
<td>N287.6</td>
<td><em>Pre-operational proof and leakage rate testing requirements for concrete containment structures for nuclear power plants</em></td>
<td>3, 5, 6</td>
</tr>
<tr>
<td>CSA Group</td>
<td>N289.2</td>
<td><em>Ground motion determination for seismic qualification of nuclear power plants</em></td>
<td>3, 5, 6</td>
</tr>
<tr>
<td>CSA Group</td>
<td>N289.3</td>
<td><em>Design procedures for seismic qualification of nuclear power plants</em></td>
<td>5, 6</td>
</tr>
<tr>
<td>CSA Group</td>
<td>N298.4</td>
<td><em>Testing procedures for seismic qualification of nuclear power plant structures, systems, and components</em></td>
<td>12</td>
</tr>
<tr>
<td>CSA Group</td>
<td>N289.5</td>
<td><em>Seismic instrumentation requirements for nuclear power plants and nuclear facilities</em></td>
<td>3, 5, 6</td>
</tr>
<tr>
<td>CSA Group</td>
<td>N290.0</td>
<td><em>General requirements for safety systems of nuclear power plants</em></td>
<td>3, 5, 6</td>
</tr>
<tr>
<td>CSA Group</td>
<td>N290.1</td>
<td><em>Requirements for emergency core cooling systems of nuclear power plants</em></td>
<td>3, 5, 6</td>
</tr>
<tr>
<td>CSA Group</td>
<td>N290.2</td>
<td><em>Requirements for emergency core cooling systems of nuclear power plants</em></td>
<td>3, 5, 6</td>
</tr>
<tr>
<td>CSA Group</td>
<td>N290.3</td>
<td><em>Requirements for the containment system of nuclear power plants</em></td>
<td>3, 5, 6</td>
</tr>
<tr>
<td>CSA Group</td>
<td>N290.4</td>
<td><em>Requirements for reactor control systems of nuclear power plants</em></td>
<td>3, 5, 6</td>
</tr>
<tr>
<td>CSA Group</td>
<td>N290.5</td>
<td><em>Requirements for Electrical Power and Instrument Air Systems of CANDU Nuclear Power Plants</em></td>
<td>3, 5, 6</td>
</tr>
<tr>
<td>CSA Group</td>
<td>N290.6</td>
<td><em>Requirements for monitoring and display of nuclear power plant safety functions in the event of an accident</em></td>
<td>3, 5, 6</td>
</tr>
<tr>
<td>CSA Group</td>
<td>N290.7</td>
<td><em>Cyber security for nuclear power plants and small reactor facilities</em></td>
<td>3, 5, 6</td>
</tr>
<tr>
<td>CSA Group</td>
<td>N290.11</td>
<td><em>Requirements for reactor heat removal capability during outage of nuclear power plants</em></td>
<td>3, 5, 6</p></td>
</tr>
<tr>
<td>CSA Group</td>
<td>N290.12</td>
<td><em>Human factors in design for nuclear power plants</em></td>
<td>5, 6</td>
</tr>
<tr>
<td>CSA Group</td>
<td>N290.14</td>
<td><em>Qualification of digital hardware and software for use in instrumentation and control applications for nuclear power plants</em></td>
<td>3, 5, 6</td>
</tr>
<tr>
<td>CSA Group</td>
<td>N291</td>
<td><em>Requirements for Safety-Related Structures for CANDU Nuclear Power Plants</em></td>
<td>3, 5, 6</td>
</tr>
<tr>
<td>CSA Group</td>
<td>N393</td>
<td><em>Fire protection for facilities that process, handle or store nuclear substances</em></td>
<td>5, 6, 10</td>
</tr>
<tr>
<td>CSA Group</td>
<td>N1600</td>
<td><em>General requirements for nuclear emergency management programs</em></td>
<td>10</td>
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
<div id="AppB.3"></div>
<h3 id="AppB-3">B.3: Regulatory documents and industry standards to be addressed as guidance</h3>  <p>For all facilities, the application should demonstrate that the guidance in the following regulatory documents and industry standards has been considered.</p>
<table className="width-100 table">
<tr>
<th className="text-center">Document source</th>
<th className="text-center">Document number</th>
<th className="text-center">Document title</th>
<th className="text-center">Related SCAs</th>
</tr>
<tr>
<td>CNSC</td>
<td>G-129</td>
<td><em>Keeping Radiation Exposures and Doses "As Low as Reasonably Achievable (ALARA)"</em></td>
<td>7</td>
</tr>
<tr>
<td>CNSC</td>
<td>G-206</td>
<td><em>Financial Guarantees for the Decommissioning of Licensed Activities</em></td>
<td>3, 11</td>
</tr>
<tr>
<td>CNSC</td>
<td>G-208</td>
<td><em>Transportation Security Plans for Category I, II or III Nuclear Material</em></td>
<td>12, 14</td>
</tr>
<tr>
<td>CNSC</td>
<td>G-219</td>
<td><em>Decommissioning Planning for Licensed Activities</em></td>
<td>3, 11</td>
</tr>
<tr>
<td>CNSC</td>
<td>G-228</td>
<td><em>Developing and Using Action Levels</em></td>
<td>3, 7, 9</td>
</tr>
<tr>
<td>CNSC</td>
<td>G-274</td>
<td><em>Security Programs for Category I or II Nuclear Material or Certain Nuclear Facilities</em></td>
<td>3, 12</td>
</tr>
<tr>
<td>CNSC</td>
<td>G-276</td>
<td><em>Human Factors Engineering Program Plans</em></td>
<td>2, 4, 5</td>
</tr>
<tr>
<td>CNSC</td>
<td>G-278</td>
<td><em>Human Factors Verification and Validation Plans</em></td>
<td>2, 4, 5</td>
</tr>
<tr>
<td>CNSC</td>
<td>G-323</td>
<td><em>Ensuring the Presence of Sufficiently Qualified Staff at Class I Nuclear Facilities &ndash; Minimum Shift Complement</em></td>
<td>2, 3</td>
</tr>
<tr>
<td>CNSC</td>
<td>GD-336</td>
<td><em>Guidance for Accounting and Reporting of Nuclear Material</em></td>
<td>3, 13</td>
</tr>
<tr>
<td>ASME</td>
<td>ASME/ANS RA-Sa-2009</td>
<td><em>Addenda to ASME/ANS RA-S-2880 Standard for Level 1/ Large Early Release Frequency Probabilistic Risk Assessment for Nuclear Power Plant Applications</em></td>
<td>4</td>
</tr>
<tr>
<td>ASME</td>
<td>B31.3</td>
<td><em>Process Piping Guide</em></td>
<td>3, 5, 6</td>
</tr>
<tr>
<td>ASME</td>
<td>B31.5</td>
<td><em>Refrigeration Piping and Heat Transfer Components</em></td>
<td>3, 5, 6</td>
</tr>
<tr>
<td>COG</td>
<td>05-9011</td>
<td><em>Interim Implementation Guidelines for CANDU Nuclear Plant Reliability Programs</em></td>
<td>3, 5, 6</td>
</tr>
<tr>
<td>EPRI</td>
<td>TR-1019194</td>
<td><em>Guidelines for Performance of Internal Flooding Probabilistic Risk Assessment</em></td>
<td>4</td>
</tr>
<tr>
<td>IAEA</td>
<td>&nbsp;</td>
<td><em>Nuclear Security Series No. 4 Technical Guidance: Engineering Safety Aspects of the Protection of Nuclear Power Plants against Sabotage</em></td>
<td>5, 12</td>
</tr>
<tr>
<td>IAEA</td>
<td>NSS-17</td>
<td><em>Nuclear Security Series No. 17: Computer Security at Nuclear Facilities</em></td>
<td>5, 12</td>
</tr>
<tr>
<td>IAEA</td>
<td>INFCIRC 225 Rev 5</td>
<td><em>Nuclear Security Recommendations on Physical Protection of Nuclear Material and Nuclear Facilities</em></td>
<td>5, 12, 13</td>
</tr>
<tr>
<td>IAEA</td>
<td>INSAG 4</td>
<td><em>Safety Series No. 75: Safety Culture</em></td>
<td>4</td>
</tr>
<tr>
<td>IAEA</td>
<td>SSG-3</td>
<td><em>Development and Application of Level 1 Probabilistic Safety Assessment for Nuclear Power Plants</em></td>
<td>4</td>
</tr>
<tr>
<td>IAEA</td>
<td>SSG-4</td>
<td><em>Development and Application of Level 2 Probabilistic Safety Assessment for Nuclear Power Plants</em></td>
<td>4</td>
</tr>
<tr>
<td>IAEA</td>
<td>TECDOC-1511</td>
<td><em>Determining the quality of probabilistic safety assessment (PSA) for applications in nuclear power plants</em></td>
<td>4</td>
</tr>
<tr>
<td>IEEE</td>
<td>Std 1023-2004</td>
<td><em>IEEE Recommended Practice for the Application of Human Factors Engineering to Systems, Equipment, and Facilities of Nuclear Power Generating Stations and Other Nuclear Facilities</em></td>
<td>2, 4, 5</td>
</tr>
<tr>
<td>US DOD</td>
<td>UFC 3-340 02</td>
<td><em>Structures to Resist the Effects of Accidental Explosions</em></td>
<td>12</td>
</tr>
<tr>
<td>US NRC</td>
<td>NUREG-0700</td>
<td><em>Human-System Interface Design Review Guidelines</em></td>
<td>2, 3, 5</td>
</tr>
<tr>
<td>US NRC</td>
<td>NUREG-0711 Rev. 3</td>
<td><em>Human Factors Engineering Program Review Model</em></td>
<td>2, 4, 5</td>
</tr>
<tr>
<td>US NRC</td>
<td>NUREG/CR-2300</td>
<td><em>PRA Procedures Guide: A Guide to the Performance of Probabilistic Risk Assessments for Nuclear Power Plants</em></td>
<td>4</p></td>
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
<div id="glossary"></div>
<h2 id="glossary">Glossary</h2>  <dl>
<dt><strong>acceptance criteria</strong></dt>
<dd>Specified bounds on the value of a functional or condition indicator used to assess the ability of a structure, system or component to meet its design and safety requirements.</dd>
<dt><strong>accident</strong></dt>
<dd>Any unintended event (including operating errors, equipment failures or other mishaps), the consequences or potential consequences of which are not negligible from the point of view of protection or safety. For the purposes of this document, accidents include design-basis accidents and beyond-design-basis accidents. Accidents exclude anticipated operational occurrences, which have negligible consequences from the perspective of protection or safety.</dd>
<dt><strong>accident conditions</strong></dt>
<dd>Deviations from normal operation more severe than anticipated operational occurrences, including design basis accidents and beyond design basis accidents.</dd>
<dt><strong>accident management</strong></dt>
<dd>The taking of a set of actions during the evolution of a beyond-design-basis accident to:
<ul>
<li>prevent the escalation of the event into a severe accident</li>
<li>	mitigate the consequences of a severe accident</li>
<li>achieve a long term safe stable state</li>
</ul></dd>
<dt><strong>action level</strong></dt>
<dd>A specific dose of radiation or other parameter that, if reached, may indicate a loss of control of part of a licensee&#39;s radiation protection program (or environmental protection program) and triggers a requirement for specific action to be taken.</dd>
<dt><strong>anticipated operational occurrence (AOO)</strong></dt>
<dd>An operational process deviating from normal operation that is expected to occur at least once during the operating lifetime of a nuclear power plant but which, in view of the appropriate design provisions, does not cause any significant damage to items important to safety or lead to accident conditions.</dd>
<dt><strong>applicant</strong></dt>
<dd>The organization that has applied to the CNSC for a licence to construct a nuclear power plant and which has the overall responsibility, and controlling and coordinating authority, for overseeing the safe and satisfactory completion of all design, procurement, manufacturing, construction and commissioning work. In most cases, the applicant is also the responsible organization that will later operate the plant (also referred to as the operating organization). Where this is not so, responsibility for the plant and its safety nevertheless continues to reside with the applicant, who must supervise the activities of an operating organization that operates the plant.</dd>
<dt><strong>beyond-design-basis accident (BDBA)</strong></dt>
<dd>Accident conditions less frequent and more severe than a design-basis accident. A beyond-design-basis accident may or may not involve core degradation.</dd>
<dt><strong>configuration management</strong></dt>
<dd>The process of identifying and documenting the characteristics of a facility&#39;s structures, systems and components (including computer systems and software), and of ensuring that changes to these characteristics are properly developed, assessed, approved, issued, implemented, verified, recorded and incorporated into the facility documentation.</dd>
<dt><strong>credible abnormal conditions</strong></dt>
<dd>Accidents or accident sequences that have a frequency of occurrence equal to or more than one in a million years.</dd>
<dt><strong>design authority</strong></dt>
<dd>The entity (person or organization) that has the overall responsibility for the design process, or the responsibility for approving design changes and for ensuring that the requisite knowledge is maintained.</dd>
<dt><strong>design basis</strong></dt>
<dd>The range of conditions and events taken explicitly into account in the design of a facility, according to established criteria, such that the facility can withstand them without exceeding authorized limits by the planned operation of safety systems.</dd>
<dt><strong>design-basis accident (DBA)</strong></dt>
<dd>Accident conditions against which a facility is designed according to established design criteria, and for which the damage to the fuel and the release of radioactive material are kept within authorized limits.</dd>
<dt><strong>deterministic safety analysis</strong></dt>
<dd>An analysis of a reactor facility&#39;s response to an event performed using predetermined rules and assumptions (for example, those concerning the initial facility operational state, availability and performance of the facility systems and operator actions). Deterministic safety analysis can use conservative or best estimate methods.</dd>
<dt><strong>emergency core cooling system</strong></dt>
<dd>A safety system, the function of which is to transfer heat from the reactor core following a loss of reactor coolant that exceeds makeup capability.</dd>
<dt><strong>emergency operating procedures (EOPs)</strong></dt>
<dd>Reactor specific procedures containing instructions to operating staff for implementing measures to terminate some anticipated operational occurrences and to prevent core degradation in design basis accidents and/or beyond-design-basis accidents.</dd>
<dt><strong>exclusion zone</strong></dt>
<dd>A parcel of land within or surrounding a nuclear facility on which there is no permanent dwelling and over which a licensee has the legal authority to exercise control.</dd>
<dt><strong>facility state</strong></dt>
<dd>A configuration of components in the facility, including the physical and thermodynamic states of the materials and the process fluids in them.  Note: For the purpose of this document, a facility is said to be in one of the following states: normal operation, anticipated operational occurrence, design basis accident or beyond design basis accident (severe accidents are a subset of the beyond design basis state).</dd>
<dt><strong>human factors</strong></dt>
<dd>Factors that influence human performance as it relates to the safety of a nuclear facility or activity over all phases, including design, construction, commissioning, operation, maintenance and decommissioning. Factors may include the characteristics of the person, task, equipment, organization, environment and training.</dd>
<dt><strong>human performance</strong></dt>
<dd>The outcomes of human behaviours, functions and actions in a specified environment, reflecting the ability of workers and management to meet the system&#39;s defined performance, under the conditions in which the system will be employed.</dd>
<dt><strong>licensing basis</strong></dt>
<dd>A set of requirements and documents for a regulated facility or activity comprising:
<ul>
<li>the regulatory requirements set out in the applicable laws and regulations</li>
<li>the conditions and safety and control measures described in the facility&#39;s or activity&#39;s licence and the documents directly referenced in that licence</li>
<li>the safety and control measures described in the licence application and the documents needed to support that licence application</li>
</ul></dd>
<dt><strong>members of the public with the greatest exposure</strong></dt>
<dd>Individuals who receive the highest dose from a particular source due to factors such as proximity to the release, dietary and behavioural habits, age and metabolism, and variations in the environment.</dd>
<dt><strong>normal operation</strong></dt>
<dd>Operation within specified operational limits and conditions including startup, power operation, shutting down, shutdown, maintenance, testing and refuelling.</dd>
<dt><strong>operating organization</strong></dt>
<dd>The organization that is responsible for operating the facility. This organization may be the applicant, or may be an organization that will operate the facility on behalf of the applicant. In the latter case, the applicant must supervise the activities of the operating organization.</dd>
<dt><strong>operation</strong></dt>
<dd>All activities performed to achieve the purpose for which a facility was constructed. For nuclear power plants, this includes maintenance, refuelling, in service inspection and other associated activities.</dd>
<dt><strong>operational limits and conditions</strong></dt>
<dd>A set of rules setting forth parameter limits and the functional capability and performance levels of equipment and personnel, which are approved by the regulatory body for safe operation of an authorized facility. This set of limits and conditions is monitored by or on behalf of the operator and can be controlled by the operator.</dd>
<dt><strong>operational states</strong></dt>
<dd>States defined under normal operation and anticipated operational occurrences.</dd>
<dt><strong>periodic safety review (PSR)</strong></dt>
<dd>A comprehensive assessment of nuclear facility design and operation that deals with the cumulative effects of aging, modifications, operating experience, technical developments and siting aspects, and aims at ensuring a high level of safety throughout the operating life of the facility (or activity).</dd>
<dt><strong>postulated initiating event (PIE)</strong></dt>
<dd>An event identified in a design as leading to either an anticipated operational occurrence or accident conditions. Note: Not necessarily an accident itself, a PIE is the event that initiates a sequence that may lead to an operational occurrence, a design-basis accident, or a beyond-design-basis accident, depending on the additional failures that occur.</dd>
<dt><strong>practicable</strong></dt>
<dd>Technically feasible and justifiable while taking cost-benefit considerations into account.</dd>
<dt><strong>probabilistic safety assessment (PSA)</strong></dt>
<dd>A comprehensive and integrated assessment of the safety of a reactor facility. The safety assessment considers the probability, progression and consequences of equipment failures or transient conditions to derive numerical estimates that provide a consistent measure of the safety of the plant or reactor facility, as follows:
<ul>
<li>a level 1 PSA identifies and quantifies the sequences of events that may lead to the loss of core structural integrity and massive fuel failures</li>
<li>a level 2 PSA starts from the level 1 results, and analyzes the containment behaviour, evaluates the radionuclides released from the failed fuel and quantifies the releases to the environment</li>
<li>a level 3 PSA starts from the level 2 results, and analyzes the distribution of radionuclides in the environment and evaluates the resulting effect on public health</li>
</ul>
Note: A PSA may also be referred to as a probabilistic risk assessment.</dd>
<dt><strong>protective zone</strong></dt>
<dd>The area beyond the exclusion zone that needs to be considered with respect to implementing emergency measures. This includes consideration of such matters as population distribution and density, land and water usage, roadways, and consequence and evacuation planning.</dd>
<dt><strong>regulation</strong></dt>
<dd>The legal requirements prescribed in the <em>Nuclear Safety and Control Act</em>, its regulations and specific licence conditions.</dd>
<dt><strong>safe operating envelope (SOE)</strong></dt>
<dd>The set of limits and conditions within which the nuclear power plant must be operated to ensure compliance with the safety analysis upon which the reactor operation is licensed and that can be monitored by or on behalf of the operator and can be controlled by the operator.</dd>
<dt><strong>safety case</strong></dt>
<dd>An integrated collection of arguments and evidence to demonstrate the safety of the facility and that all applicable regulatory requirements are met. This will normally include a safety assessment, but could also typically include information (including supporting evidence and reasoning) on the robustness and reliability of the safety assessment and the assumptions made therein.</dd>
<dt><strong>safety culture</strong></dt>
<dd>The characteristics of the work environment, such as values, rules and common understandings, that influence employee perceptions and attitudes about the importance that the organization places on safety.</dd>
<dt><strong>safety function</strong></dt>
<dd>A specific purpose that must be accomplished for safety.</dd>
<dt><strong>safety support system</strong></dt>
<dd>A safety system, the function of which is to provide services such as electrical power, compressed air, water, air conditioning and ventilation to systems important to safety.</dd>
<dt><strong>safety system</strong></dt>
<dd>A system important to safety, provided to ensure the safe shutdown of the reactor or the residual heat removal from the core, or to limit the consequences of anticipated operational occurrences and design basis accidents.</dd>
<dt><strong>severe accident</strong></dt>
<dd>Accident conditions more severe than a design basis accident and involving significant core degradation.</dd>
<dt><strong>severe accident management guidelines (SAM guidelines)</strong></dt>
<dd>A set of recommendations for actions to take when handling severe accidents.</dd>
<dt><strong>single failure</strong></dt>
<dd>A failure that results in the loss of capability of a component to perform its intended safety function(s), and any consequential failure(s) resulting from it.</dd>
<dt><strong>single-failure criterion</strong></dt>
<dd>A criterion (or requirement) applied to a system such that it will be capable of performing its task in the presence of any single failure.</dd>
<dt><strong>site characterization</strong></dt>
<dd>The distinguishing characteristics, qualities, physical features and environment of the piece of land on which the nuclear facility is located.</dd>
<dt><strong>structures, systems and components (SSCs)</strong></dt>
<dd>A general term encompassing all of the elements (items) of a facility or activity that contribute to protection and safety. Structures are the passive elements: buildings, vessels, shielding, etc. A system comprises several components, assembled in such a way as to perform a specific (active) function. A component is a discrete element of a system. Examples are wires, transistors, integrated circuits, motors, relays, solenoids, pipes, fittings, pumps, tanks and valves.</dd>
<dt><strong>structures, systems and components (SSCs) important to safety</strong>
<dd>As defined in REGDOC 2.5.2, <em>Design of Reactor Facilities: Nuclear Power Plants</em>, [12] structures, systems and components of the NPP associated with the initiation, prevention, detection or mitigation of any failure sequence that have an impact in reducing the possibility of damage to fuel, associated release of radionuclides, or both.</dd>
<dt><strong>systems important to safety</strong></dt>
<dd>As defined in RD/GD 98, <em>Reliability Programs for Nuclear Power Plants</em>, [15] structures, systems and components of a nuclear power plant associated with the initiation, prevention, detection or mitigation of any failure sequence and that have the most significant impact in reducing the possibility of damage to fuel, associated release of radionuclide or both.</dd>
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
<h2 id="ref">References</h2>  <ol>
<li>Canadian Nuclear Safety Commission (CNSC), <a href="http://nuclearsafety.gc.ca/pubs_catalogue/uploads/INFO_0795_E.pdf">INFO-0795, <em>Licensing Basis Objective and Definition</em></a>, Ottawa, Canada, 2010.</li>
<li>CNSC, <a href="http://www.nuclearsafety.gc.ca/pubs_catalogue/uploads/I0756_R1_e.pdf">INFO-0756, rev. 1, <em>Licensing Process for New Nuclear Power Plants in Canada</em></a>, Ottawa, Canada, 2008.</li>
<li>CNSC, <a href="http://www.nuclearsafety.gc.ca/pubs_catalogue/uploads/REGDOC-2-3-3-Periodic-Safety-Reviews-eng.pdf">REGDOC-2.3.3, <em>Integrated Safety Reviews</em></a>, Ottawa, Canada, 2015.</li>
<li>CNSC, <a href="http://www.nuclearsafety.gc.ca/pubs_catalogue/uploads/REGDOC-2-12-3-Security-of-Nuclear-Substances-Sealed-Sources.pdf">REGDOC-2.12.3, <em>Security of Nuclear Substances: Sealed Sources</em></a>, Ottawa, Canada, 2013.</li>
<li>CNSC, <a href="http://www.nuclearsafety.gc.ca/pubs_catalogue/uploads/REGDOC-2-2-2-Personnel-Training-ENG.pdf">REGDOC-2.2.2, <em>Personnel Training</em></a>, Ottawa, Canada, 2014.</li>
<li>CNSC, <a href="http://www.nuclearsafety.gc.ca/pubs_catalogue/uploads/RD-204_e_PDF.pdf">RD-204, <em>Certification of Persons Working at Nuclear Power Plants</em></a>, Ottawa, Canada, 2008.</li>
<li>CNSC, <a href="http://www.nuclearsafety.gc.ca/pubs_catalogue/uploads/G-323_e.pdf">G-323, <em>Ensuring the Presence of Sufficient Qualified Staff at Class I Nuclear Facilities &ndash; Minimum Staff Complement</em></a>, Ottawa, Canada, 2007.</li>
<li>CNSC, <a href="http://www.nuclearsafety.gc.ca/pubs_catalogue/uploads/G278_e.pdf">G-278, <em>Human Factors Verification and Validation Plans</em></a>, Ottawa, Canada, 2003.</li>
<li>CNSC, REGDOC-2.9.1, Environmental Protection: Environmental Protection: Environmental Policy, Assessments and Protection Measures, Ottawa, Canada, [date]. [not yet final; will be published before this document is finalized]</li>
<li>CNSC, <a href="http://www.nuclearsafety.gc.ca/pubs_catalogue/uploads/REGDOC-2-3-2-Accident-Management-v2-eng.pdf">REGDOC-2.3.2, <em>Accident Management, version 2</em></a>, Ottawa, Canada, 2015.</li>
<li>CNSC, <a href="http://www.nuclearsafety.gc.ca/pubs_catalogue/uploads/REGDOC-2-4-1-Deterministic-Safety-Analysis-eng.pdf">REGDOC-2.4.1, <em>Deterministic Safety Analysis</em></a>, Ottawa, Canada, 2014.</li>
<li>CNSC, <a href="http://www.nuclearsafety.gc.ca/pubs_catalogue/uploads/REGDOC-2-5-2-Design-of-Reactor-Facilities-Nuclear-Power-Plants-eng.pdf">REGDOC-2.5.2, <em>Design of Reactor Facilities: Nuclear Power Plants</em></a>, Ottawa, Canada, 2014.</li>
<li>CNSC, <a href="http://www.nuclearsafety.gc.ca/pubs_catalogue/uploads/REGDOC-2-4-2-Probabilistic-Safety-Assessment-NPP-eng.pdf">REGDOC-2.4.2, <em>Probabilistic Safety Assessment (PSA) for Nuclear Power Plants</em></a>, Ottawa, Canada, 2014.</li>
<li>CNSC, <a href="http://www.nuclearsafety.gc.ca/pubs_catalogue/uploads/RD-346_e.pdf">RD-346, <em>Site Evaluation for New Nuclear Power Plants</em></a>, Ottawa, Canada, 2008.</li>
<li>CNSC, <a href="http://www.nuclearsafety.gc.ca/pubs_catalogue/uploads/June-2012-RDGD-98-Reliability-Programs-for-Nuclear-Power-Plants_e.pdf">RD/GD-98, <em>Reliability Programs for Nuclear Power Plants</em></a>, Ottawa, Canada, 2012.</li>
<li>CNSC, <a href="http://www.nuclearsafety.gc.ca/pubs_catalogue/uploads/44019-G276E.pdf">G-276, <em>Human Factors Engineering Program Plans</em></a>, Ottawa, Ontario, 2003.</li>
<li><a href="http://www.tbs-sct.gc.ca/pol/doc-eng.aspx?section=text&id=16578"><em>Treasury Board of Canada Secretariat Policy on Government Security</em></a>, 2009, revised 2012</li>
<li>CNSC, <a href="http://www.nuclearsafety.gc.ca/pubs_catalogue/uploads/RD-327-Nuclear-Criticality-Safety-e.pdf">RD-327, <em>Nuclear Criticality Safety</em></a>, Ottawa, Canada, 2010.</li>
<li>CNSC, <a href="http://www.nuclearsafety.gc.ca/pubs_catalogue/uploads/GD-327-Guidance-For-Nuclear-Criticality-Safety-e.pdf">GD-327, <em>Guidance for Nuclear Criticality Safety</em></a>, Ottawa, Canada, 2010.</li>
<li>CNSC, <a href="http://www.nuclearsafety.gc.ca/pubs_catalogue/uploads/GD-52_Design_Guide_for_Nuclear_Substance_Laboratories_and_Nuclear_Medicine_Rooms.pdf">GD-52, <em>Design Guide for Nuclear Substance Laboratories and Nuclear Medicine Rooms</em></a>, Ottawa, Canada, 2010.</li>
<li>CNSC, <a href="http://www.nuclearsafety.gc.ca/pubs_catalogue/uploads/GD-52_Design_Guide_for_Nuclear_Substance_Laboratories_and_Nuclear_Medicine_Rooms.pdf">RD/GD-210, <em>Maintenance Programs for Nuclear Power Plants</em></a> Ottawa, Canada, 2012.</li>
<li>CNSC, <a href="http://www.nuclearsafety.gc.ca/pubs_catalogue/uploads/REGDOC-3-1-1-Reporting-Requirements-for-Nuclear-Power-Plants.pdf">REGDOC-3.1.1, <em>Reporting Requirements for Nuclear Power Plants</em></a>, Ottawa, Canada, 2014.</li>
<li>CNSC, <a href="http://www.nuclearsafety.gc.ca/pubs_catalogue/uploads/REGDOC-2-6-3-Fitness-for-Service-Aging-Management-eng.pdf">REGDOC-2.6.3, <em>Aging Management</em></a>, Ottawa, Canada, 2014.</li>
<li>CNSC, <a href="http://www.nuclearsafety.gc.ca/pubs_catalogue/uploads/G129rev1_e.pdf">G-129 rev 1, <em>Keeping Radiation Exposures and Doses "As Low as Reasonably Achievable (ALARA)"</em></a>, Ottawa, Canada, 2004.</li>
<li>CNSC, <a href="http://www.nuclearsafety.gc.ca/pubs_catalogue/uploads/P-223_e.pdf">P-223, <em>Protection of the Environment</em></a>, Ottawa, Canada, 2001.</li>
<li>CNSC, <a href="http://www.nuclearsafety.gc.ca/pubs_catalogue/uploads/G228_e.pdf">G-228, <em>Developing and Using Action Levels</em></a>, Ottawa, Canada, 2001.</li>
<li>CNSC, <a href="http://www.nuclearsafety.gc.ca/pubs_catalogue/uploads/REGDOC-2-10-1-Nuclear-Emergency-Preparedness-and-Response-eng.pdf">REGDOC-2.10.1, <em>Nuclear Emergency Preparedness and Response</em></a>, Ottawa, Canada, 2014.</li>
<li>CNSC, <a href="http://www.nuclearsafety.gc.ca/pubs_catalogue/uploads/G219_e.pdf">G-219, <em>Decommissioning Planning for Licensed Activities</em></a>, Ottawa, Canada, 2000.</li>
<li>CNSC, <a href="http://www.nuclearsafety.gc.ca/pubs_catalogue/uploads/G206_e.pdf">G-206, <em>Financial Guarantees for the Decommissioning of Licensed Activities</em></a>, Ottawa, Canada, 2000.</li>
<li>CNSC, <a href="http://www.nuclearsafety.gc.ca/pubs_catalogue/uploads/G208_e.pdf">G-208, <em>Transportation Security Plans for Category I, II or III Nuclear Material</em></a>, Ottawa, Canada, 2003.</li>
<li>CNSC, <a href="http://www.nuclearsafety.gc.ca/pubs_catalogue/uploads/G-274_e.pdf">G-274, <em>Security Programs for Category I or II Nuclear Material or Certain Nuclear Facilities</em></a>, Ottawa, Canada, 2003.</li>
<li>CNSC, RD-361, <em>Criteria for Explosive Substance Detection, X ray Imaging, and Metal Detection Devices at High-Security Sites</em> (prescribed), Ottawa, Canada, 2010.</li>
<li>CNSC, <a href="http://www.nuclearsafety.gc.ca/pubs_catalogue/uploads/April-2013-REGDOC-2-12-2-Site-Access-Security-Clearance-eng.pdf">REGDOC-2.12.2, <em>Site Access Security Clearance</em></a>, Ottawa, Canada, 2013.</li>
<li>CNSC, RD-321, <em>Criteria for Physical Protection Systems and Devices at High-Security Sites</em> (prescribed), Ottawa, Canada, 2010.</li>
<li>CNSC, REGDOC-2.12.1, <em>High-Security Sites: Nuclear Response Force</em> (prescribed), Ottawa, Canada, 2013.</li>
<li>CNSC, <a href="http://www.nuclearsafety.gc.ca/pubs_catalogue/uploads/rd-363-e.pdf">RD-363, <em>Nuclear Security Officer Medical, Physical, and Psychological Fitness</em></a>, Ottawa, Canada, 2008.</li>
<li>International Atomic Energy Agency (IAEA), INFCIRC/164, <em>Agreement between Government of Canada and IAEA for the Application of Safeguards in Connection with the Treaty on the Non-Proliferation of Nuclear Weapons</em></li>
<li>IAEA, <em>Protocol Additional to the Agreement between Canada and the International Atomic Energy Agency for the Application of Safeguards in Connection with the Treaty on the Non-Proliferation of Nuclear Weapons</em>, IAEA INFCIRC/164/Add 1, 2000.</li>
<li>CNSC, REGDOC-2.13.2, <em>Import and Export</em>, Ottawa, Canada, [date]. [not yet final; will be published before this document is finalized]</li>
<li>CNSC, <a href="http://www.nuclearsafety.gc.ca/pubs_catalogue/uploads/RD-336_Final_Accounting_and_Reporting_of_Nuclear_Material_e.pdf">RD-336, <em>Accounting and Reporting of Nuclear Material</em></a>, Ottawa, Canada, 2010.</li>
<li>CNSC, <a href="http://www.nuclearsafety.gc.ca/pubs_catalogue/uploads/GD-336_Guidance_for_Accounting_and_Reporting_of_Nuclear_Material_e.pdf">GD-336, <em>Guidance for Accounting and Reporting of Nuclear Material</em></a>, Ottawa, Canada, 2010.</li>
<li>United States Nuclear Regulatory Commission, <em>Packaging and Transportation of Radioactive Material</em>, Title 10, Part 71 of the Code of Federal Regulations (10 CFR Part 71).</li>
<li>CNSC, <a href="http://www.nuclearsafety.gc.ca/pubs_catalogue/uploads/RD_GD-99_3-eng.pdf">RD/GD-99.3, <em>Public Information and Disclosure</em></a>, Ottawa, Canada, 2012</li>
<li>CNSC, REGDOC-3.2.2, <em>Aboriginal Engagement</em>, Ottawa, Canada, 2016.</li>  </ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<h2>CNSC Regulatory Document Series</h2>
<p>Facilities and activities within the nuclear sector in Canada are regulated by the Canadian Nuclear Safety Commission (CNSC). In addition to the <em>Nuclear Safety and Control Act </em>and associated regulations, there may also be requirements to comply with other&nbsp;regulatory instruments such as regulatory documents or standards.</p>
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
<li>3.5 Information dissemination</li>
</ul>
</li>
</ul>
<p><strong>Note:</strong> The regulatory document series may be adjusted periodically by the CNSC. Each regulatory document series listed above may contain multiple regulatory documents. For the latest list of regulatory documents, visit the CNSC&#39;s Web site at <a href="http://www.nuclearsafety.gc.ca/eng/acts-and-regulations/regulatory-documents/index">nuclearsafety.gc.ca/regulatory-documents/index</a>.</p>
</div>  <div className="clear">
                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }