import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "en",
                pageTitle: "REGDOC-1.4.1: Licence Application Guide: Class II Nuclear Facilities and Prescribed Equipment", 
                dateModified: "2016-09-01",
                langToggleUrl: "/fra/acts-and-regulations/consultation/comment/regdoc1-4-1"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<h2 id="preface">Preface</h2>  <p>This regulatory document is part of the Canadian Nuclear Safety Commission&#39;s (CNSC) Class II Nuclear Facilities series of regulatory documents. The full list of regulatory document series is included at the end of this document and can also be found on the <a href="http://www.nuclearsafety.gc.ca/">CNSC website</a>.</p>  <p>In accordance with the <em>Nuclear Safety and Control Act</em> (NSCA) and regulations made under it, a person wishing to construct, operate or decommission a Class II nuclear facility or possess, use, process, store, transfer, transport, import, export or abandon nuclear substances or service Class II prescribed equipment, requires a licence issued by the CNSC.</p>  <p>Regulatory document REGDOC-1.4.1, <em>Licence Application Guide: Class II Nuclear Facilities and Prescribed Equipment</em> sets out guidance for applicants wanting to apply for any Class II facilities and prescribed equipment licence, including licences for neutron generators, geophysical logging accelerators, portable and mobile industrial accelerators, Class II irradiators and manual brachytherapy.</p>  <p>This document also consolidates and supersedes a number of existing licence application guides:</p>
<ul>
<li>RD/GD-289, <em>Licence Application Guide, Class II Isotope Production Accelerators</em></li>
<li>RD/GD-120, <em>Licence Application Guide, Radiotherapy</em></li>
<li>RD/GD-207, <em>Licence Application Guide, Servicing Class II Prescribed Equipment</em></li>
</ul>  <p>The expectations set forth in this guide reflect the requirements laid out in the regulations under the NSCA. In the event of a disagreement between expectations contained in this document and these regulations, the regulations prevail.</p>  <p>Guidance in this document elaborates on regulatory requirements and provides direction to applicants on how to meet requirements. Applicants are expected to review and consider guidance given in this document; should they choose not to follow it, they should explain how their chosen alternate approach would meet regulatory requirements. An applicant may put forward a case to demonstrate that the intent of a regulatory requirement is addressed by its alternate approach and submit evidence to support it.</p>  <p>While the use of the application forms associated with this guide is not a specific requirement for licensing, it is intended to assist applicants in submitting complete and structured information to the Commission so that the request can be processed as quickly as possible. The application forms are available on the <a href="/eng/resources/forms/index">CNSC forms page</a>.</p>   <p>CNSC staff can provide additional guidance upon request; contact the CNSC at <a href="mailto:cnsc.info.ccsn@cnsc-ccsn.gc.ca">cnsc.info.ccsn@cnsc-ccsn.gc.ca</a>.</p>
<div className="alert alert-info">
<h3>Important note:</h3>
<p> Where referenced in a licence either directly or indirectly (such as through licensee-referenced documents), this document is part of the licensing basis for a regulated facility or activity.</p>
<p>The licensing basis sets the boundary conditions for acceptable performance at a regulated facility or activity, and establishes the basis for the CNSC&rsquo;s compliance program for that regulated facility or activity.</p>
<p>Where this document is part of the licensing basis, the word &quot;shall&quot; is used to express a requirement to be satisfied by the licensee or licence applicant. &quot;Should&quot; is used to express guidance or that which is advised. &quot;May&quot; is used to express an option or that which is advised or permissible within the limits of this regulatory document. &quot;Can&quot; is used to express possibility or capability.</p>
<p>Nothing contained in this document is to be construed as relieving any licensee from any other pertinent requirements. It is the licensee&rsquo;s responsibility to identify and comply with all applicable regulations and licence conditions.</p>  </div>
</div>  <div className="clear"></div>
<div className="col-md-12 module-table-contents">
<h2>Table of Contents</h2>
<ul>
<li><a href="#sec1"><strong>1. Introduction</strong></a>
<ul>
<li><a href="#sec1-1">1.1 Purpose</a></li>
<li><a href="#sec1-2">1.2 Scope</a></li>
<li><a href="#sec1-3">1.3 Relevant statutory provisions</a></li>
<li><a href="#sec1-4">1.4 Organization of this guide</a></li>
<li><a href="#sec1-5">1.5 Terminology</a></li>
<li><a href="#sec1-6">1.6 Symbols</a></li>
</ul></li>
<li><a href="#sec2"><strong>2. Process</strong></a>
<ul>
<li><a href="#sec2-1">2.1 Applying for a licence</a>
<ul>
<li><a href="#sec2-1-1">2.1.1 Application forms</a></li>
<li><a href="#sec2-1-2">2.1.2 Submitting an application</a></li>
<li><a href="#sec2-1-3">2.1.3 Processing standards</a></li>
</ul></li>
<li><a href="#sec2-2">2.2 Amending a licence</a></li>
<li><a href="#sec2-3">2.3 Renewing a licence</a></li>
<li><a href="#sec2-4">2.4 Revoking a licence</a></li>
<li><a href="#sec2-5">2.5 Licence period</a></li>
<li><a href="#sec2-6">2.6 Transferring a licence</a></li>
</ul></li>
<li><a href="#sec3"><strong>3. Completing an application</strong></a>
<ul>
<li><a href="#PartA">PART A: General Information</a>
<ul>
<li><a href="#PartA-1">A.1 Applicant information</a></li>
<li><a href="#PartA-2">A.2 Licenced activities and locations</a></li>
<li><a href="#PartA-3">A.3 Class II prescribed equipment and nuclear substances</a></li>
</ul></li>
<li><a href="#PartB">PART B: Facility Construction</a>
<ul>
<li><a href="#PartB-1">B.1 Facility design</a></li>
<li><a href="#PartB-2">B.2 Safety systems &ndash; Nuclear facilities</a></li>
<li><a href="#PartB-3">B.3 Other requirements</a></li>
</ul></li>
<li><a href="#PartC">PART C: Commissioning</a>
<ul>
<li><a href="#PartC-1">C.1 Commissioning plan</a></li>
</ul></li>
<li><a href="#PartD">PART D: Management System and Radiation Safety Program</a>
<ul>
<li><a href="#PartD-1">D.1 Management system</a></li>
<li><a href="#PartD-2">D.2 Radiation protection</a></li>
<li><a href="#PartD-3">D.3 Human performance management</a></li>
<li><a href="#PartD-4">D.4 Waste management</a></li>
<li><a href="#PartD-5">D.5 Security</a></li>
<li><a href="#PartD-6">D.6 Packaging and transport</a></li>
<li><a href="#PartD-7">D.7 Fitness for service</a></li>
</ul></li>
<li><a href="#PartE">PART E: Routine Operation and Confirmation of Facility Design</a>
<ul>
<li><a href="#PartE-1">E.1 Routine operation</a></li>
<li><a href="#PartE-2">E.2 Confirmation of facility design implementation</a></li>
</ul></li>
<li><a href="#PartF">PART F: Decommissioning</a></a>
<ul>
<li><a href="#PartF-1">F.1 Decommissioning plan</a></li>
</ul></li>
<li><a href="#PartG">PART G: Licence Renewal</a>
<ul>
<li><a href="#PartG-1">G.1 Licence renewal information</a></li>
</ul></li>
</ul></li>
<li><a href="#AppA"><strong>Appendix A: Licensing Expectations and Regulatory Requirements Cross-reference</strong></a></li>
<li><a href="#AppB"><strong>Appendix B: Safety and Control Area Definitions</strong></a></li>
<li><a href="#AppC"><strong>Appendix C: Licensing Phase</strong></a></li>
<li><a href="#AppD"><strong>Appendix D: Licensed Activities</strong></a></li>
<li><a href="#AppE"><strong>Appendix E: Room Classification</strong></a></li>
<li><a href="#AppF"><strong>Appendix F: Survey Meter Calibration</strong></a></li>
<li><a href="#AppG"><strong>Appendix G: Monitoring for Radioactive Contamination</strong></a></li>
<li><a href="#AppH"><strong>Appendix H: Classes of Nuclear Substances</strong></a></li>
<li><a href="#AppI"><strong>Appendix I: Categorization of Sealed Sources</strong></a></li>
<li><a href="#AppJ"><strong>Appendix J: Disposal of Activated Components</strong></a></li>
<li><a href="#glossary"><strong>Glossary</strong></a></li>
<li><a href="#abbrev"><strong>Abbreviations</strong></a></li>
<li><a href="#AddInfo"><strong>Additional Information</strong></a></li>   </ul>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="1"></div>
<h2 id="sec1">1. Introduction</h2>
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
<h3 id="sec1-1">1.1 Purpose</h3>  <p>This licence application guide provides instructions to assist prospective/current licensees on how to complete and submit an application for a Canadian Nuclear Safety Commission (CNSC) licence to:</p>
<ul>
<li>construct, operate, or decommission any Class II nuclear facility</li>
<li>operate or service Class II prescribed equipment</li>
<li>possess, use, store, transfer, transport, import or export nuclear substances used for manual brachytherapy</li>
<li>possess, use, process, store, transfer, transport, import, export or abandon nuclear substances that are associated with or arise from the above activities</li>
</ul>  <p>Note that a Class I licence may be required if the total activity for all isotopes processed or used exceeds 10<sup>15</sup> becquerels (Bq) in one calendar year.</p>
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
<h3 id="sec1-2">1.2 Scope</h3>  <p>The <em>Nuclear Safety and Control Act</em> (NSCA) empowers the CNSC to issue a licence to applicants who, in the opinion of the CNSC, are qualified and make adequate provisions for the protection of the environment and the security, health and safety of persons, and otherwise meet the requirements and other conditions of the NSCA.</p>   <p>All information requested for a licence application is based on the NSCA and the regulations made under it, which are administered by the CNSC. <a href="#AppA">Appendix A: Licensing Expectations and Regulatory Requirement Cross-reference</a> provides regulatory references for the information requested as part of the application process described in this guide.</p>   <p>Each application must demonstrate that the applicant is capable of, and committed to maintaining an effective radiation safety program. This guide will assist an applicant in providing the required information.</p>  <p>The associated application forms are tailored to different licensed activities or facility types and are intended to aid the applicant in preparing and submitting a complete application.</p>  <p>This guide and its associated forms may also be used to request the removal of commissioning restrictions in an operating licence for the purpose of commissioning ("routine operation amendment").</p>
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
<h3 id="sec1-3">1.3 Relevant statutory provisions</h3>  <p>Statutory provisions relevant to this guide are as follows:</p>
<ol>
<li>Subsection 24(4) of the NSCA states that "No licence may be issued, renewed, amended or replaced &ndash; and no authorization to transfer one given &ndash; unless, in the opinion of the Commission, the applicant or, in the case of an application to transfer the licence, the transferee (a) is qualified to carry on the activity that the licence will authorize the licensee to carry on; and (b) will, in carrying on that activity, make adequate provision for the protection of the environment, the health and safety of persons and the maintenance of national security and measures required to implement international obligations to which Canada has agreed."</li>
<li>Paragraphs (a), (b), (c), and (e) of section 26 of the NSCA state that "Subject to the regulations, no person shall, except in accordance with a licence: (a) possess, transfer, import, export, use or abandon a nuclear substance, prescribed equipment or prescribed information; (b) mine, produce, refine, convert, enrich, process, reprocess, package, transport, manage, store or dispose of a nuclear substance; (c) produce or service prescribed equipment; (e) prepare a site for, construct, operate, modify, decommission or abandon a nuclear facility."</li>
<li>Section 3 of the <em>General Nuclear Safety and Control Regulations</em> provides a list of the general information which an application for a licence shall contain.</li>
<li>Sections 3, 4, 5, 6 and 7 of the <em>Class II Nuclear Facilities and Prescribed Equipment Regulations</em> list the additional information which is required when applying for a licence to construct, to operate and to decommission a Class II Nuclear Facility or service Class II prescribed equipment.</li>
<li>Section 3 of the <em>Nuclear Substances and Radiation Devices Regulations</em> provides additional information which an application to possess, use, store, transfer, import, or export a nuclear substance shall contain.</li>
<li>Paragraph 4(a)(iii) of the <em>Radiation Protection Regulations</em> states that "Every licensee shall implement a radiation protection program and shall, as part of that program, (a) keep the amount of exposure to radon progeny and the effective dose and equivalent dose received by and committed to persons as low as is reasonably achievable, social and economic factors being taken into account, through the implementation of (i) management control over work practices, (ii) personnel qualification and training (iii) control of occupational and public exposure to radiation and, (iv) planning for unusual situations."</li>
<li>Section 21(1) of the <em>Packaging and Transport of Nuclear Substances Regulations</em> states that "No person, other than the consignor or the consignee of the package, shall open a package unless (a) measures are taken to prevent persons from receiving doses of radiation higher than the radiation dose limits prescribed by the <em>Radiation Protection Regulations</em>; and (b) the package is opened in the presence of an expert in radiation protection."</li>
<li>Section 2 of the <em>Canadian Nuclear Safety Commission Cost Recovery Fees Regulations</em> lists facilities that are exempt from those regulations.</li>
<li>Part 3 of the <em>Canadian Nuclear Safety Commission Cost Recovery Fees Regulations</em> provides fee calculation details for facilities listed in Schedule 1 of those regulations.</li>
<li>Part 5 of the <em>Canadian Nuclear Safety Commission Cost Recovery Fees Regulations</em> provides fee calculation details for facilities not listed in Schedule 1 of those regulations.</li>
</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="1.4"></div>
<h3 id="sec1-4">1.4 Organization of this guide</h3>  <p>The expectations included in this guide are organized into seven parts. The part detailing the expectations with respect to the radiation safety program is further subdivided by safety and control areas (SCAs). <a href="#AppB">Appendix B: Safety and Control Area Definitions</a> provides definitions of the SCAs.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="1.5"></div>
<h3 id="sec1-5">1.5 Terminology</h3>  <p>For the purpose of this guide:</p>
<ul>
<li>"teletherapy machine" means radioactive source teletherapy machines used in radiotherapy, such as cobalt teletherapy and stereotactic teletherapy units</li>
<li>"facility" refers to a Class II nuclear facility and includes the installed prescribed equipment</li>
<li>"prescribed equipment" may also refer to Class II prescribed equipment that is not installed in a nuclear facility (e.g., mobile or portable equipment)</li>
</ul>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="1.6"></div>
<h3 id="sec1-6">1.6 Symbols</h3>
<div className="mrgn-lft-0">  <img src="/images/1.4.1-ex.png" className="pull-left image-actual"  alt="" />  <p>Indicates important information in this guide that the applicant needs to consider before proceeding.</p>  </div>  <div className="clear"></div>  <div className="mrgn-lft-0">  <img src="/images/1.4.1-inf.png" className="pull-left image-actual mrgn-bttm-lg" alt="" />  <p>Indicates information in the application form that may be included in the licence appendix "Licence Documents". The licence requires compliance with the documents listed in this appendix.  </p>
</div>  <div className="clear"></div>
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
<h2 id="sec2">2. Process</h2>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="2.1"></div>
<h3 id="sec2-1">2.1 Applying for a licence</h3>  <p>An applicant shall provide all the applicable information outlined in this guide when requesting or renewing a Commission licence for:</p>
<ul>
<li>the construction, operation or decommissioning of a Class II nuclear facility that includes prescribed equipment</li>
<li>the operation of Class II prescribed equipment not installed in a facility</li>
<li>the servicing of Class II prescribed equipment</li>
<li>the possession, use, storage, transfer, import, or export of a nuclear substance used in manual brachytherapy</li>
</ul>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="2.1.1"></div>
<h4 id="sec2-1-1">2.1.1 Application forms</h4>  <p>Applicants may use the Class II facilities licence application forms to provide required information to the CNSC. Applicants can find the forms on the <a href="/eng/resources/forms/index">CNSC&#39;s website</a>.</p>   <p>While the use of the application form is not a requirement for licensing, it may assist applicants in submitting complete and structured information to the CNSC so the request can be processed as quickly as possible. Any attachments should have a title and be cross-referenced to the sections of the application they relate to.</p>  <p>For additional information, applicants should contact the CNSC:</p>
<ul>
<li>toll-free: 1-888-229-2672</li>
<li>fax: 613-995-5086</li>
<li>email: <a href="mailto:cnsc.info.ccsn@cnsc-ccsn.gc.ca">cnsc.info.ccsn@cnsc-ccsn.gc.ca</a></li>
</ul>
<h5>2.1.1.1 Selecting an application form</h5>  <p>Licence application forms are available for each facility or licensed activity type. Table 1 lists the facility and licensed activity type applicable to each form.</p>
<table className="table table-striped">  <caption className="text-left">Table 1: Application form by facility type</caption>  <tr>
<th>Application form</th>
<th>Applicable Class II nuclear facilities and licensed activities</th>  </tr>  <tr>
<td>Class II Nuclear Facility, General</td>
<td><p>
<ul>
<li>medical accelerators or teletherapy machines</li>
<li>brachytherapy remote afterloaders</li>
<li>industrial accelerators</li>
<li>research accelerators</li>
<li>neutron generators</li>
<li>irradiators, other than pool type</li>
<li>veterinary accelerators or teletherapy machines</li>
<li>development and testing of Class II prescribed equipment</li>
<li>servicing of any of the above by operator (“in-house” servicing)</li>
<li>any other facility or activity not yet listed in the table but that would fall under the purview of the NSCA</li>
</ul></p></td>  </tr>  <tr>
<td>Class II Nuclear Facility, Isotope Production Accelerator</td>
<td><p>
<ul>
<li>isotope production accelerator and associated isotope processing facilities</li>
<li>servicing of the above by operator (“in-house” servicing)</li>
</ul></p></td>  </tr>  <tr>
<td>Class II Nuclear Facility, Pool Type Irradiator</td>
<td><p>
<ul>
<li>pool type irradiator facilities and associated product handling equipment</li>
<li>servicing of the above by operator ("in-house" servicing)</li>
</ul></p></td>  </tr>  <tr>
<td>Class II Nuclear Facility, Operate Prescribed Equipment</td>
<td><p>
<ul>
<li>mobile accelerators</li>
<li>portable accelerators</li>
<li>neutron generators</li>
<li>geophysical logging accelerators</li>
<li>servicing of any of the above by operator ("in-house" servicing)</li>
</ul></p></td>  </tr>  <tr>
<td>Class II Nuclear Facility, Manual Brachytherapy</td>
<td>Possess, use, store, transfer, transport, import, or export nuclear substances used in manual brachytherapy activities</td>  </tr>  <tr>
<td>Class II Nuclear Facility, Service</td>
<td>Service by vendor or other third party only (applicants submitting an operating licence application should include request for in-house servicing in the same application)</td>  </tr>  </table>
<p>Applicants for an operating licence of prescribed equipment not contained in a dedicated facility but permanently installed, such as a neutron generator used for density measurements, should use the Operate Prescribed Equipment application form.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="2.1.2"></div>
<h4 id="sec2-1-2">2.1.2 Submitting an application</h4>
<div className="col-md-12 mrgn-bttm-0 well">  <div className="col-md-2  text-center text-center mrgn-bttm-0 mrgn-tp-lg">
<img src="/images/1.4.1-ex.png" className="image-actual" alt="" />  </div>  <div className="span-5  mrgn-bttm-0 ">  <p>Prescribed information, as it is defined in Section 21 of the GNSCR such as security program details, may only be transmitted by secure means such as letter or encrypted email. Unencrypted email submission of this information is prohibited. Guidance for the protection and transmission of prescribed information can be found in REGDOC-2.12.3, <em>Security of Nuclear Substances: Sealed Sources</em>. This document can be found on the <a href="http://www.nuclearsafety.gc.ca/eng/">CNSC&#39;s website</a>.</p>  </div>  </div>  <div className="clear"></div>  <p>Before submitting an application, the applicant should ensure that:</p>
<ul>
<li>all required information is included in the application</li>
<li>all supporting documents are attached, identified and cross-referenced</li>
<li>payment is enclosed if subject to the <em>Canadian Nuclear Safety Commission Cost Recovery Fees Regulations</em>
<ul>
<li>to arrange payment by credit card, contact the CNSC Cost Recovery Group at<br />
613-995-5894 or toll free at 1-888-229-2672</li>
</ul></li>
</ul>  <p>Submit the complete application to the CNSC using the "submit" btn embedded in the application forms.</p>  <p>The applicant may also submit the completed application by mail to the following address:</p>  <p>Canadian Nuclear Safety Commission<br />
Directorate of Nuclear Substance Regulation<br />
P.O. Box 1046, Station B<br />
280 Slater Street<br />
Ottawa ON K1P 5S9</p>  <p>Applicants should keep a completed copy of the application for their records. Applicants should be aware that all information submitted is subject to the provisions of the <em>Access to Information Act</em> and the <em>Privacy Act</em>.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="2.1.3"></div>
<h4 id="sec2-1-3">2.1.3 Processing standards</h4>  <p>The CNSC strives to meet published standards for licence application processing. The standards found on the <a href="http://www.nuclearsafety.gc.ca/eng/">CNSC website</a> specify expected licence processing times for applications with clear, relevant, precise, accurate and complete information. If applications are incomplete or unclear, processing times may exceed published standards.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="2.2"></div>
<h3 id="sec2-2">2.2 Amending a licence</h3>  <p>To request a licence amendment other than a routine operating amendment, the applicant shall submit a request to the CNSC containing the following information:</p>
<ul>
<li>a list of the changes to the information contained in the most recent licence application</li>
<li>a description of the effects that the proposed changes may have, or are expected to have, on land, areas, buildings, structures, components, equipment, systems or nuclear substances</li>
<li>the proposed start date and expected completion date of any modifications described in the request</li>
</ul>  <p>It is acceptable to request a licence amendment by email.</p>  <p>If information previously submitted to the CNSC as part of a licence application has not changed, the applicant can refer to:</p>
<ul>
<li>information listed in the current licence appendix</li>
<li>information submitted with previous applications</li>
</ul>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="2.3"></div>
<h3 id="sec2-3">2.3 Renewing a licence</h3>  <p>To request a licence renewal, the applicant shall provide the information required by all relevant sections of this guide. If information previously submitted to the CNSC as part of a licence application has not changed, the applicant can refer to the current licence appendix or a previous application rather than submitting again the same information.  </p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="2.4"></div>
<h3 id="sec2-4">2.4 Revoking a licence</h3>  <p>The applicant may request a revocation of an existing licence by sending a request in writing to the CNSC. An email is acceptable. CNSC staff may contact the applicant if additional information is required.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="2.5"></div>
<h3 id="sec2-5">2.5 Licence period</h3>  <p>Consolidated operating licences and operating licences are typically valid for a 10-year period. All other licences are typically valid for five years; however, the Commission or a designated officer, at their discretion, may issue a licence for a shorter or longer period. A specific licence period can be requested for long-term projects and may be granted by the Commission or a designated officer.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="2.6"></div>
<h3 id="sec2-6">2.6 Transferring a licence</h3>  <p>When requesting the transfer of an existing CNSC licence, the applicant shall complete the licence transfer form. This form is available on the <a href="http://www.nuclearsafety.gc.ca/eng/">CNSC website</a>. The completed form may be submitted to the CNSC by mail or by email at <a href="mailto:forms-formulaires@cnsc-ccsn.gc.ca">forms-formulaires@cnsc-ccsn.gc.ca</a>.</p>
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
<h2 id="sec3">3. Completing an application</h2>  <p>This application guide groups licence requirements into seven parts.</p>
<ul>
<li>Part A: General information</li>
<li>Part B: Facility construction</li>
<li>Part C: Commissioning</li>
<li>Part D: Management system and radiation safety program</li>
<li>Part E: Routine operation and confirmation of facility design</li>
<li>Part F: Decommissioning</li>
<li>Part G: Licence renewal</li>
</ul>  <p>Some parts or sections in this guide are not applicable to all licensed activities and facilities. Submit only the information that is relevant to the proposed activities and facilities.</p>  <p>Table 2 presents the parts and sections of this guide that apply to each licensing phase. A description of each licensing phase can be found in <a href="#AppC">Appendix C: Licensing Phase</a>. The applicant should submit only the information listed for the intended application. Mandatory sections are shaded in green with a letter "M". Sections that do not need to be completed for a particular licensing phase or activity are shaded grey with a letter "N". Optional sections are shaded in yellow with a letter "O". Note that sections that are optional in one phase are typically mandatory at the next facility licensing phase. The applicant shall resubmit sections A.1 through A.3 at each licensing phase. Applicants do not need to resubmit the other sections unless there have been changes to that information. References to previously submitted material which was required for another licence application should, as a minimum, include the other licence number, the document title and date and page numbers. References to the CNSC document number, if available, are preferred.</p>  <p><a href="#AppC">Appendix C: Licensing Phase</a> describes the licensing phases listed in table 2.</p>
<table className="width-100 table">  <caption>Table 2: Required application sections by facility type and licensing phase</caption>  <tr>
<th className="text-center">Facility or activity</th>
<th className="text-center">Licensing phase</th>
<th>A<br />1</th>
<th>A<br />2</th>
<th>A<br />3</th>
<th>B<br />1</th>
<th>B<br />2</th>
<th>B<br />3</th>
<th>C<br />1</th>
<th>D<br />1</th>
<th>D<br />2</th>
<th>D<br />3</th>
<th>D<br />4</th>
<th>D<br />5</th>
<th>D<br />6</th>
<th>D<br />7</th>
<th>E<br />1</th>
<th>E<br />2</th>
<th>F<br />1</th>   </tr>  <tr>
<td className="">Fixed facility<br />
&ndash; general</td>
<td>Construct</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#ffff00">O</td>
<td className="text-center" style="background-color:#ffff00">O</td>
<td className="text-center" style="background-color:#ffff00">O</td>
<td className="text-center" style="background-color:#ffff00">O</td>
<td className="text-center" style="background-color:#ffff00">O</td>
<td className="text-center"style="background-color:#ffff00">O</td>
<td className="text-center"style="background-color:#ffff00">O</td>
<td className="text-center" style="background-color:#ffff00">O</td>
<td className="text-center"style="background-color:#ffff00">O</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>  </tr>  <tr>
<td className="">Fixed facility<br />
&ndash; general</td>
<td>Commission*</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#ffff00">O</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>   </tr>  <tr>
<td className="">Fixed facility<br />
&ndash; general</td>
<td>Operate</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className=" text-center">N</td>   </tr>  <tr>
<td className="">Fixed facility<br />
&ndash; general</td>
<td>Decommission**</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>  </tr>  <tr>
<td>Fixed facility<br />
&ndash; IPA</td>
<td>Construct</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#ffff00">O</td>
<td className="text-center" style="background-color:#ffff00">O</td>
<td className="text-center" style="background-color:#ffff00">O</td>
<td className="text-center" style="background-color:#ffff00">O</td>
<td className="text-center" style="background-color:#ffff00">O</td>
<td className="text-center" style="background-color:#ffff00">O</td>
<td className="text-center" style="background-color:#ffff00">O</td>
<td className="text-center" style="background-color:#ffff00">O</td>
<td className="text-center" style="background-color:#ffff00">O</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>  </tr>  <tr>
<td>Fixed facility<br />
&ndash; IPA</td>
<td>Commission</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#ffff00">O</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>  </tr>  <tr>
<td>Fixed facility<br />
&ndash; IPA</td>
<td>Operate</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className=" text-center">N</td>  </tr>  <tr>
<td>Fixed facility<br />
&ndash; IPA</td>
<td>Decommission</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>  </tr>  <tr>
<td className="">Fixed facility<br />
&ndash; pool type</td>
<td>Construct</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#ffff00">O</td>
<td className="text-center" style="background-color:#ffff00">O</td>
<td className="text-center" style="background-color:#ffff00">O</td>
<td className="text-center" style="background-color:#ffff00">O</td>
<td className="text-center" style="background-color:#ffff00">O</td>
<td className="text-center" style="background-color:#ffff00">O</td>
<td className="text-center" style="background-color:#ffff00">O</td>
<td className="text-center" style="background-color:#ffff00">O</td>
<td className="text-center" style="background-color:#ffff00">O</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>  </tr>  <tr>
<td className="">Fixed facility<br />
&ndash; pool type</td>
<td>Commission</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#ffff00">O</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>  </tr>  <tr>
<td className="">Fixed facility<br />
&ndash; pool type</td>
<td>Operate</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className=" text-center">N</td>  </tr>  <tr>
<td className="">Fixed facility<br />
&ndash; pool type</td>
<td>Decommission</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>  </tr>  <tr>
<td>Operate prescribed equipment</td>
<td>Operate</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>  </tr>  <tr>
<td className="">Manual brachytherapy</td>
<td>Other</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>  </tr>  <tr>
<td>Sevice by third party</td>
<td>Service</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className="text-center" style="background-color:#9fdfbf">M</td>
<td className=" text-center">N</td>
<td className=" text-center">N</td>  </tr>  </table>
<p><strong>Note:</strong>  <p>*&nbsp;Licensees wishing to replace Class II prescribed equipment accelerators without otherwise modifying facility design may bypass the construction licensing phase and apply for an operating licence, for the purpose of commissioning, provided the new prescribed equipment has the same isocentre, same or smaller maximum field size and same or lower energy of the equipment it is replacing. However, the applicant shall submit the following information in addition to that required for a commissioning licence:</p>
<ul>
<li>the completed section B.1.2 through B.1.5; applicants may refer to previously submitted information if there is no change to it; particular attention should be given to changes in workload and dose rate</li>
<li>the completed section B.2, even if there are no changes</li>
</ul>  <p>**&nbsp;Licensees wishing to decommission a brachytherapy remote afterloader do not require a decommissioning licence. However, they shall submit evidence that the facility is safe for uncontrolled occupancy along with the request to revoke the operating licence and to release the facility for public occupancy.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="PartA"></div>
<h3 id="PartA">PART A: General Information</h3>  <p>This part describes the information the applicant shall submit including, the type of licence requested, name of the person or organization applying for the licence, the organization legal status, the proposed licence activities, the prescribed equipment and nuclear substances to be encompassed by the licence and the location where the applicant will carry on these activities. Depending on the type of request being made, the applicant may have to submit additional information from other parts of this guide.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="PartA.1"></div>
<h4 id="PartA-1">A.1 Applicant information</h4>  <h5>A.1.1 Type of request</h5>  <p>Specify the activities to be encompassed by the licence, the licensing phase and, if applicable, the current licence number.</p>
<h5>A.1.2 Language of licence</h5>  <p>Specify the official language of the licence.</p>
<h5>A.1.3 Applicant information</h5>  <p><strong>Applicant</strong> &ndash; Submit the name of the corporation or individual applying for the licence as it appears on the proof of legal status documentation, such as the proof of incorporation or sole proprietorship.</p>  <p>Name an individual as applicant only if that person is a sole proprietor or will be solely responsible for the licence.</p>  <p><strong>Head office address</strong> &ndash; Provide the civic address of the applicant&#39;s head office. The address should include the street name and number, the rural route number, the city, province or territory, and postal code, as appropriate. A post office box address is not acceptable as a head office address.</p>   <p><strong>Mailing address</strong> &ndash; Provide the mailing address if different from the head office address. The address should include the street name and number, post office box or rural route number, the city, province or territory, and postal code. A post office box is acceptable as a mailing address.</p>  <p>If no mailing address is given, the licence issued in response to the application will be mailed to the head office address.</p>
<h5>A.1.4 Proof of legal status</h5>  <p>Provide proof of legal status by submitting proof of incorporation, corporation number or sole proprietorship.</p>  <p>If the applicant is a public institution, specify the title of the enabling legislation (act) under which the institution was created, if applicable.</p>  <p>If the applicant is a corporation, submit proof of incorporation and an official corporation profile report, including:</p>
<ul>
<li>corporation&#39;s legal name</li>
<li>corporation number</li>
<li>date of incorporation</li>
<li>registered office address</li>
</ul>  <p>For federally incorporated companies under the <em>Canada Business Corporation Act</em>, R.S.C., c. C-44, an official corporation profile report can be obtained from Industry Canada. For provincially incorporated corporations, similar profile reports are available from the provincial department where the corporation was incorporated.</p>  <p>Applicants should submit the business number identifier assigned to them by the Canada Revenue Agency.</p>
<h5>A.1.5 Public access to information</h5>  <p>Specify whether any part of this application is subject to a request for exemption from public access as described below.</p>  <p>As a federal government institution, the Commission is subject to the <em>Access to Information Act</em> (ATIA) and to the <em>Privacy Act</em>. Pursuant to subsection 4(1) of the ATIA, every Canadian citizen or permanent resident has access to documents under the control of a government institution. Consequently, all information submitted with a licence application, subject to the exceptions listed in section 20, of the ATIA, can be made available to the public, on request. Requests for exemption should be made in writing to the CNSC, detailing the applicant&#39;s reasons for such an exemption. Note that requests for exemption may be denied if justification is not sufficient.</p>
<ul>
<li>If information may be made public, the applicant should check the "No exemption requested" box on the application form</li>
<li>If requesting that the information submitted not be disclosed, the applicant should check the "Exemption requested" box on the application form and reference the exceptions that justify the request </li>
</ul>
<h5>A.1.6 Billing contact person</h5>  <p>Provide the name and contact information of the person administratively responsible for licence fee payments. If the applicant is exempt from payment of fees under the <em>Canadian Nuclear Safety Commission Cost Recovery Fees Regulations</em>, the applicant does not need to complete this section. Those regulations are available on the <a href="http://www.nuclearsafety.gc.ca/eng/">CNSC&#39;s website</a>.</p>
<h5>A.1.7 Financial guarantees</h5>  <p>Section 24(5) of the NSCA allows the Commission, to include as a condition in a licence that the applicant provide a financial guarantee in a form that is acceptable to the Commission. For more information about financial guarantees and licensing, consult the <a href="http://www.nuclearsafety.gc.ca/eng/">CNSC&#39;s website</a>.</p>  <p>If required, provide the value and form of the financial guarantee for the licence being applied for.</p>
<h5>A.1.8 Applicant or licensee representative</h5>  <p>Provide the name and title of the person who submitted the application on behalf of the applicant. This person should have authority to act on behalf of the applicant. Applicant(s) wishing to notify the CNSC of changes in persons authorized to act for them should submit the form "Representatives of Applicants and Licensees" available on the <a href="http://www.nuclearsafety.gc.ca/eng/">CNSC&#39;s website</a>.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="PartA.2"></div>
<h4 id="PartA-2">A.2 Licensed activities and locations</h4>  <p>Identify the activities associated with the applicant&#39;s operations as they relate to the <em>Canadian Nuclear Safety Commission Cost Recovery Fees Regulations</em>.</p>   <h5>A.2.1 Licensed activities</h5>  <p>List all activities that the applicant intends to carry on with the nuclear substances encompassed by the licence. Refer to <a href="#AppD">Appendix D: Licensed Activities</a> for guidance in selecting licensed activities.</p>   <p>In instances where limited research is to be carried on utilizing Class II prescribed equipment that is primarily being used for other applications, the prescribed equipment should be licensed according to its primary intended use.</p>
<h5>A.2.2 Principal location of use or storage or both &ndash; Facilities</h5>  <p>Provide the address of the location where the facility will be constructed, operated or decommissioned and where the prescribed equipment or nuclear substances will be used or stored or both. The address should as a minimum, consist of a room or building identifier, a street name and number, city, province and postal code. Use the definitions in <a href="#AppE">Appendix E: Room Classification</a> to specify the classification of the rooms where the equipment and the nuclear substances will be used or stored.</p>  <p>For construction licence applications, submit evidence that the applicant is the owner of the site, or if the premises are rented or leased, submit a letter from the owner of the site confirming that the applicant has the authority to construct and operate a nuclear facility at the site.</p>  <p>For all new licence applications, if the premises are rented or leased, submit a letter from the owner of the site confirming that there are no objections to licensing this location for the use of prescribed equipment or use or storage of nuclear substances.</p>
<h5>A.2.3 Principal location of use or storage or both &ndash; Prescribed equipment</h5>  <p>For all new licence applications, if the premises are rented or leased, submit a letter from the owner of the site confirming that there are no objections to licensing this location for the use of prescribed equipment or use or storage of nuclear substances.</p>  <p>For the operation of prescribed equipment not installed in a facility, provide the addresses or locations where the equipment will be operated or stored.</p>
<h5>A.2.4 Principal location of use or storage or both &ndash; Manual brachytherapy</h5>  <p>Provide the address of the location where sealed sources used for manual brachytherapy treatments will be used or stored. The address should, as a minimum, consist of a room or building identifier, a street name and number, city, province and postal code. Specify the classification of the rooms where those sources will be used or stored using the definitions given in <a href="#AppE">Appendix E: Room Classification</a>.</p>
<h5>A.2.5 Principal location of use or storage or both &ndash; Unsealed nuclear substances</h5>  <p>Provide the address of the location where unsealed nuclear substances will be processed, used or stored. The address should, as a minimum, consist of a room or building identifier, a street name and number, city, province and postal code. Specify the classification of the rooms where the unsealed nuclear substances will be processed, used or stored using the definitions given in <a href="#AppE">Appendix E: Room Classification</a>.</p>  <p>For all new licence applications, if the premises are rented or leased, submit a letter from the owner of the site confirming that there are no objections to licensing this location for the processing, use or storage of nuclear substances.</p>
<h5>A.2.6 Other locations</h5>  <p>If prescribed equipment or nuclear substances to be encompassed by the licence will be used or stored at locations other than the principal locations listed in sections A.2.2 through A.2.5, provide the address of these locations. The address should, as a minimum, consist of a room or building identifier, a street name and number, city, province and postal code.</p>   <p>For each secondary location, indicate whether nuclear substances will be processed, used or stored at that location. Additional locations may be listed in an attached document if required.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="PartA.3"></div>
<h4 id="PartA-3">A.3 Class II prescribed equipment and nuclear substances</h4>  <h5>A.3.1 Class II prescribed equipment</h5>  <p>Unless exempt under section 10(b) of the <em>Class II Nuclear Facilities and Prescribed Equipment Regulations</em>, Class II prescribed equipment shall be certified by the Commission before it can be licensed for use in Canada. Prescribed equipment used solely for scientific research or for development purposes requires a licence, but is exempt from certification under section 10(b) of the regulations, provided that the research is not conducted on humans. For more information about certification of prescribed equipment, the applicant can refer to the CNSC Regulatory Guide RD/GD-254, <em>Certification of Radiation Devices or Class II Prescribed Equipment</em>, available on the <a href="http://www.nuclearsafety.gc.ca/eng/">CNSC&#39;s website</a>.</p>
<div className="col-md-12 mrgn-bttm-0 well">  <div className="col-md-2  text-center text-center mrgn-bttm-0 mrgn-tp-sm">
<img src="/images/1.4.1-ex.png" className="image-actual" alt="" />  </div>  <div className="span-5  mrgn-bttm-0 ">  <p>No person is permitted to use Class II prescribed equipment not certified by the Commission unless that equipment is exempt from certification under the <em>Class II Nuclear Facilities and Prescribed Equipment Regulations</em>.</p>  </div>  </div>  <div className="clear"></div>
<p>For each type of prescribed equipment the applicant wishes to licence, submit the following information:</p>
<ul>
<li>the certificate number</li>
<li>the name of the manufacturer</li>
<li>the model name</li>
<li>if applicable, the isotope and maximum activity of each source contained in the prescribed equipment; for medical and veterinary accelerators, the accelerator&#39;s maximum energy</li>
<li>for all other accelerators, the maximum energy and current, beam type and their intended use such as non-destructive testing, industrial radiography or sterilization</li>
<li>the type of servicing or maintenance the applicant intends to perform on the Class II prescribed equipment, for example:
<ul>
<li>none</li>
<li>preventive maintenance &ndash; limited to basic servicing activities and periodic inspections</li>
<li>corrective maintenance &ndash; limited to basic preventive maintenance activities, troubleshooting and limited repairs or adjustments</li>
<li>extensive servicing &ndash; corrective maintenance, replacement of major components, refurbishment of prescribed equipment, installation or replacement of prescribed equipment or nuclear substances contained within prescribed equipment or dismantling of prescribed equipment</li>
</ul></li>
</ul>  <p>If the prescribed equipment is being custom designed and built by the applicant, submit detailed technical drawings illustrating the design of the proposed equipment and its specifications.</p>
<h5>A.3.2 Nuclear substances &ndash; Sealed sources and activated components</h5>  <p>Some sealed sources, such as those used for manual brachytherapy treatments, are not incorporated in Class II prescribed equipment. With time, replacement or spent sources will be in the applicant&#39;s possession. In addition, other non-exempt check sources may also be in the applicant&#39;s possession. If these sources are not already covered by an existing CNSC licence, for each source specify:</p>
<ul>
<li>the name of the manufacturer</li>
<li>the model name of the source</li>
<li>the isotope and maximum activity of the source</li>
</ul>  <p>Specify whether activated components from an accelerator will be stored at the site or not.</p>
<h5>A.3.3 Accelerator targets &ndash; Isotope production</h5>  <p>Specify the targets to be used for isotope production. As a minimum, the information should include, if known, the manufacturer&#39;s part or model number, the nuclear reaction used to produce the desired isotope with that target, the target material, the beam current and bombardment time per run, and the maximum end of beam ("EOB") yields per run.</p>   <p>Table 3 illustrates a typical format for submitting this information.</p>  <p>CNSC staff may require additional information regarding the targets, including their technical drawings and specifications as part of an application for a licence. If designing and testing new targets, submit a detailed description of the quality assurance program that will be used for the design and testing and the safety procedures in place when conducting those tests as required in section D.1.6.</p>
<table className="table table-striped">  <caption>Table 3: Sample isotope production accelerator target table</caption>  <tr>
<th>Target part no.</th>
<th>Nuclear reaction</th>
<th>Product</th>
<th>Material</th>
<th>Maximum beam current (&micro;A)</th>
<th>Bombardment time (min)</th>
<th>Maximum EOB Yield (GBq)</th>  </tr>  <tr>
<td>Zr-ABC-1</td>
<td><sup>89</sup>Y(p,n)<sup>89</sup>Zr</td>
<td><sup>89</sup>Zr Metal</td>
<td>Rhodium/Body<br />
Havar/Window<br />
Aluminum/Body<br /></td>
<td className="text-center">30</td>
<td className="text-center">120</td>
<td className="text-center">2</td>  </tr>  <tr>
<td>Zn-CDE-1</td>
<td><sup>63</sup>Cu(p,n)<br />
<sup>63</sup>Zn</td>
<td><sup>63</sup>Zn Metal</td>
<td>Rhodium/Body<br />
Havar/Window<br />
Aluminum/Body<br /></td>
<td className="text-center">100</td>
<td className="text-center">450</td>
<td className="text-center">250</td>  </tr>  <tr>
<td>Tc-99-XYZ-1</td>
<td><sup>100</sup>Mo(p,2n)<br />
<sup>99m</sup>Tc</td>
<td><sup>99m</sup>Tc Metal</td>
<td>Rhodium/Body<br />
Havar/Window<br />
Aluminum/Body<br /></td>
<td className="text-center">10</td>
<td className="text-center">60</td>
<td className="text-center">20</td>  </tr>  <tr>
<td>FGH-212-C11</td>
<td><sup>14</sup>N(p,&alpha;)<sup>11</sup>C</td>
<td><sup>11</sup>C Gas</td>
<td>Havar/Window<br />
Aluminum/Body<br /></td>
<td className="text-center">40</td>
<td className="text-center">60</td>
<td className="text-center">150</td>  </tr>  <tr>
<td>TUV-213-F-20</td>
<td><sup>18</sup>O(p,n)<sup>18</sup>F</td>
<td><sup>18</sup>F Liquid</td>
<td>Havar/Window<br />
Niobium/Body<br /></td>
<td className="text-center">100</td>
<td className="text-center">45</td>
<td className="text-center">185</td>  </tr>  </table>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="PartB"></div>
<h3 id="PartB">PART B: Facility Construction</h3>  <p>This part describes the information the applicant shall submit to allow for a technical assessment of an application to construct including, the facility design, proposed workload, design dose targets, dose rates and annual doses calculations, facility safety systems, if applicable, isotope production and processing facilities and the special requirements for pool type irradiators.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="PartB.1"></div>
<h4 id="PartB-1">B.1 Facility Design</h4>  <p>The applicant shall demonstrate that the facility design provides for the adequate protection of workers, members of the public and the environment.</p>
<div className="col-md-12 mrgn-bttm-0 well">  <div className="col-md-2  text-center text-center mrgn-bttm-0 mrgn-tp-sm">
<img src="/images/1.4.1-ex.png" className="image-actual" alt="" />  </div>  <div className="span-5  mrgn-bttm-0 ">  <p>Once the licence to construct is issued, the facility shall be built in accordance with the proposed design. Any subsequent changes to the facility design will require a licence amendment subject to Commission or designated officer approval.</p>  </div>  </div>  <div className="clear"></div>
<h5>B.1.1 Facility plans and drawings</h5>  <p>Submit plans to scale and elevation drawings of the proposed facility. Those plans and drawings shall show:</p>
<ul>
<li>the direction of north</li>
<li>the scale of the drawings (e.g., 50:1, 1 cm per m)</li>
<li>the location of the facility with respect to nearby occupied or potentially occupied areas</li>
<li>the location and purpose of the adjacent areas, such as public areas, offices, laboratories, change rooms, washrooms and storerooms, including the areas above and below the facility; for each room, specify the room number, its name or give its description (this information will be used to determine the occupancy factors of each area or room as required in section B.1.2)</li>
<li>the position and orientation of the prescribed equipment and associated devices within the boundary of the facility</li>
<li>if applicable, the direction of the primary beam</li>
<li>for isocentric units the plane of beam rotation</li>
<li>the location, type, thickness and density of shielding materials used on all sides of the facility including floor and ceiling</li>
<li>if a shielded entrance door is proposed, specify the type, thickness and arrangement of the shielding materials incorporated into the door</li>
<li>the location and dimensions of access ways, exits, service ducts and other penetrations and voids in the shielding</li>
</ul>  <p>The plans and drawings should contain sufficient information to allow CNSC staff to evaluate the proposed facility. Typically, CNSC staff requires drawings showing both the vertical and lateral cross sections of the facility. If possible, submit those plans and drawings in electronic format provided there is sufficient resolution to magnify areas of interest and the scale is maintained.</p>
<h5>B.1.2 Classification of adjacent areas</h5>  <p>Submit occupancy types and occupancy factors of all areas adjacent to the facility.</p>  <p>The purpose of the areas adjacent to a Class II nuclear facility, their occupancy type such as general public or nuclear energy worker (NEW), and their occupancy factors are used to determine the facility shielding requirements.</p>  <p>Specify the intended use, such as office space, corridors and control areas of all areas adjacent to the facility, including areas above and below the facility. Based on the planned use of each area and an evaluation of the shielding, classify each area as:   <p><strong>Non-controlled:</strong> In a non-controlled area, access is not restricted to any person; OR</p>  <p><strong>Controlled:</strong> In a controlled area, access is restricted to trained and authorized personnel only. For each controlled area, describe the proposed access control measures, which should be commensurate with the radiation doses that may be incurred in that area; OR</p>  <p><strong>Exclusion:</strong> An exclusion area shall have access controls interlocked to the prescribed equipment so that no one can gain access to the area when the equipment is in operation. The interlock systems required are described in section B.2.1.</p>
<div className="col-md-12 mrgn-bttm-0 well">  <div className="col-md-2  text-center text-center mrgn-bttm-0 mrgn-tp-0">
<img src="/images/1.4.1-ex.png" className="image-actual mrgn-bttm-0 mrgn-tp-lg" alt="" />  </div>  <div className="span-5  mrgn-bttm-0 ">  <p>Designation of an "exclusion area" is only acceptable for completely enclosed spaces with entrances interlocked with the equipment to terminate irradiation if anyone attempts to access the area.</p>
</div>  </div>  <div className="clear"></div>
<p>The occupancy factor (T) for each area is the fraction of the facility&#39;s normal operating day during which a person might reasonably be expected to occupy a given area. Occupancy factors are usually selected from standard reference values such as those in table B1 of the document NCRP151. Such values are generally conservative. If the applicant elects to use a lower value for a particular area such as for the roof above a treatment room, the applicant should provide the rationale for using that occupancy factor. In general, use of very low occupancy factors requires some form of physical barrier that restricts access to the area.</p>  <p>Occupancy types and occupancy factors of areas adjacent to the facility may be incorporated directly into a table of annual doses, provided they are clearly identified in the table. Ensure that those areas can be identified on the submitted plans and drawings.</p>
<h5>B.1.3 Workload &ndash; General</h5>  <p>Submit an estimate, or a calculation, of the anticipated maximum annual workload (W) of the facility.</p>  <p>The workload represents the anticipated amount of use of the prescribed equipment over a defined period, usually one year, in a manner that can be related directly to the radiation doses incurred by persons occupying adjacent areas over that period. In general, this requires an estimate of the total time the prescribed equipment will be on, or the source exposed, combined with some measurement or estimate of the radiation dose rates at defined reference locations under typical operating conditions.</p>  <p>The workload is used to verify the adequacy of the facility&#39;s shielding design; hence, a workload calculation shall take into account all operating activities, namely:</p>
<ul>
<li>the equipment&#39;s intended use</li>
<li>research</li>
<li>quality assurance</li>
<li>maintenance and servicing</li>
</ul>  <p>In submitting the calculations, the applicant should describe any assumption made and specify the value of any parameter used.</p>
<h6>B.1.3.1 Workload &ndash; Medical or veterinary accelerators and teletherapy machines</h6>  <p>In addition to the type of operation listed in section B.1.3, the workload of medical or veterinary accelerators and teletherapy machines should clearly distinguish between:</p>
<ul>
<li>operation at different photon energies</li>
<li>operation using electrons</li>
</ul>  <p>If intensity modulated radiation therapy (IMRT), stereotactic, or extended distance treatments are planned, also specify:</p>
<ul>
<li>the energy used</li>
<li>the fraction of the total primary beam workload delivered using these techniques</li>
<li>the expected average IMRT factor (ratio of MU delivered to primary beam dose at isocentre)</li>
</ul>  <h6>B.1.3.2 Workload &ndash; Irradiators and brachytherapy remote afterloaders</h6>  <p>An estimate of the workload can be obtained based on the total time the sources would be typically exposed and the sources&#39; activity (i.e., in GBq-hours or equivalent). For the purpose of shielding design, this shall be converted into an equivalent dosimetric quantity, such as the air kerma at 1 m from the source over one year.</p>
<p>In addition to the type of operation listed in section B.1.3, the workload for irradiators and brachytherapy remote afterloaders shall also take into account the periodic calibration of the equipment.</p>  <h6>B.1.3.3 Workload &ndash; Industrial accelerators</h6>  <p>Electron accelerators – such as those used for industrial radiography, material processing or sterilization – are normally designed to produce an X-ray beam by accelerating electrons onto a heavy metal target. This target may be built into the accelerator itself or be placed just in front of the aperture at the end of the electron waveguide. In such cases, the dose rate (in Gy/min or equivalent) at a fixed location within the beam (e.g. at 1 m beyond the X-ray target), multiplied by the total hours per year of each operating activity listed in section B.1.3, will generally provide a suitable indication of the total workload.</p>  <h6>B.1.3.4 Workload &ndash; Research accelerators</h6>  <p>In research facilities, the radiation types, energies and dose rates produced by an accelerator will vary greatly depending on the design and configuration of the accelerator, the types of charged particles being accelerated, the accelerating potential and beam current, the target design and the materials of the target and of its housing. In such cases, the applicant should perform a detailed analysis of the intended use of the accelerator and of activities listed in section B.1.3 to characterize the workload in a manner that enables dose estimates.</p>  <h6>B.1.3.5 Workload &ndash; Isotope production accelerators</h6>  <p>For each isotope to be produced, list the maximum total quantity that will be possessed under the licence at any one time and the maximum total activity for each isotope produced in one calendar year. The determination of the maximum quantity that may be processed or used should be based on:</p>
<ul>
<li>the maximum end-of-beam (EOB) quantity that can be produced using any target</li>
<li>the number of targets used and the number of production runs per day</li>
<li>the time between production and shipment of the product to the end user</li>
<li>the amounts that will be kept in the facility for quality control or as waste</li>
<li>the isotope&#39;s half-life</li>
</ul>  <p>In the workload table, specify the nuclear reaction that yields the desired product and the beam/target combinations used. Specify the maximum EOB activity produced per run as well as annual quantities produced and total annual bombardment time. Include in the workload the time used in carrying on the applicable activities listed in section B.1.3.</p>   <h6>B.1.3.6 Workload &ndash; Pool type irradiators</h6>  <p>The workload can be evaluated by taking the product of the total time the sources are exposed by the sources&#39; activity (i.e. in GBq &ndash; hours or equivalent).</p>   <p>The workload should take into account the applicable operating activities listed in section B.1.3.</p>
<h5>B.1.4 Design dose targets</h5>  <p>Submit the design dose targets for Nuclear Energy Workers (NEWs), non-NEW staff and members of the public who may occupy areas adjacent to the facility.</p>   <p>The applicant shall demonstrate that these dose targets will keep doses to workers, and members of the public who may occupy areas adjacent to the facility, as low as reasonably achievable (ALARA).</p>   <p>Dose targets that meet the recommendations in the CNSC guide G-129 rev. 1, <em>Keeping Radiation Exposures and Doses "As Low As Reasonably Achievable (ALARA)</em>" will normally be accepted by the CNSC as being ALARA without further justification. This guide is available on the <a href="http://www.nuclearsafety.gc.ca/eng/">CNSC&#39;s website</a>.</p>  <p>The guide G-129 recommends that doses should be at or below:</p>
<ul>
<li>1 mSv/yr for NEWs</li>
<li>0.05 mSv/yr for non-NEW staff and members of the public</li>
</ul>  <p>Submit a cost-benefit analysis to justify any annual dose in excess of those recommended in guide G-129.</p>   <p>The CNSC will not accept dose targets greater than the dose limits for NEWs and members of the public as specified in section 13 of the <em>Radiation Protection Regulations</em> under any circumstance.</p>
<h5>B.1.5	Dose rates and annual dose calculations &ndash; General</h5>  <p>Submit detailed calculations showing the maximum dose rates and annual doses expected in each area listed in section B.1.2. State the equations, describe the assumptions and specify the value of each parameter used in the calculations.</p>  <p>The applicant shall demonstrate that, for the anticipated operating conditions, the shielding design ensures that radiation doses to persons occupying those areas will not exceed the dose targets.</p>
<p>In the submission:</p>
<ul>
<li>each calculation point should be associated to a location identified on the facility plans and drawings</li>
<li>at least one calculation point shall be located just outside the entrance barrier to the facility, such as a door or light curtain</li>
<li>each calculation should take into account:
<ul>
<li>the facility design workload (W)</li>
<li>the distribution of the workload between the different beam orientations, the use factor (U), where applicable</li>
<li>the distribution of the workload between the different operating modes where applicable</li>
<li>the type (public or NEW) and degree of occupancy (T) for each of those areas</li>
<li>the contribution from different components of the radiation fields produced by the equipment, including the primary beam, head leakage, scatter and neutrons. Note: Neutron dose rate and annual dose calculations are not required for electron accelerator facilities operating at photon energies less than 10 MV or any high-energy (&ge;10 MV) electron accelerator facilities that are being retrofitted for low energy  (&lt;10 MV) use</li>
<li>the contribution from all sources of radiation, such as the maximum dose rate at a point in a common hallway between two facilities</li>
<li>the different materials used for shielding and their characteristics with respect to the radiation types and energies produced by the equipment</li>
</ul></li>
<li>calculation parameters should be based on standard reference values for factors such as shielding tenth-value-layers, equipment head leakage rates, scatter factors and occupancy factors; If these are unavailable; for example, because of variations in the composition and density of heavy concrete, or where non-standard parameters such as occupancy factors less than 1/40th are used, the applicant should justify the values used</li>
<li>instantaneous dose rate at each calculation point should be calculated using the most conservative operating conditions such as maximum energy, maximum dose rate or current, minimum attenuation by shielding, and maximum source activity; these calculations are to:
<ul>
<li>provide reference values for comparison with the measured dose rates that will be obtained during a radiation survey</li>
<li>identify areas where posting of a radiation warning sign may be required pursuant to the requirements of section 21(b) of the CNSC <em>Radiation Protection Regulations</em></li>
</ul></li>
<li>if Monte Carlo simulations or other commercial shielding calculation software are used, the applicant should:
<ul>
<li>identify the code, such as MCNPX, and other software package, such as Alice 91, used as well as the key input parameters used in the simulation or calculations,</li>
<li>submit a brief description of the simulation such as geometry, materials, source definition, tallies, doses, graphics</li>
<li>submit copies of input and output files</li>
<li>specify shielding techniques employed, such as importance and weight windows</li>
<li>include mesh tally graphics</li>
</ul></li>
</ul>  <h6>B.1.5.1 Dose rates and annual dose calculations &ndash; Accelerators</h6>  <p>Submit the calculated annual doses and instantaneous dose rates to any person who may occupy areas adjacent to the facility. State the equations, describe the assumptions and specify the value of each parameter used.</p>   <p>The calculations should take into account:</p>
<ul>
<li>the accelerator workload</li>
<li>if applicable, the source term; i.e. a calculation or an estimate of the prompt gamma, X-ray and neutron radiation produced during bombardment for each beam/target/reaction combination</li>
<li>if applicable, the design specifications and configuration of proposed targets</li>
<li>the type and thickness of materials used in shielding barriers</li>
<li>the shielding properties or transmission factors of barriers for the types and energies of the radiation produced by the accelerator</li>
<li>radiation scatter down entrance mazes, ducts and other penetrations in the shielding</li>
</ul>  <p>For isotope production facilities, the calculated dose rate and annual dose estimates to facility staff should explicitly include an estimate of:</p>
<ul>
<li>whole-body (effective) annual doses in mSv/year from:
<ul>
<li>operation of the prescribed equipment, including commissioning</li>
<li>routine rebuild of accelerator targets or maintenance of activated components</li>
<li>if applicable, transfer of product from the accelerator to the isotope processing facilities</li>
<li>any processing activity carried out under the licence</li>
<li>packaging of isotopes for shipment</li>
<li>if applicable, routine and potential accidental environmental releases, such as stack releases</li>
</ul></li>
<li>annual extremity (equivalent) doses in mSv/year from:
<ul>
<li>routine rebuild or replacing accelerator targets or maintenance of activated components such as dees and stripping foils</li>
<li>processing of isotopes, quality control, packaging and contamination cleaning activities</li>
</ul></li>
</ul>  <p>The following parameters should also be used in calculating the dose from the transfer of product from the accelerators to the isotope processing facilities, the processing activities and the packaging of isotopes for shipment:</p>
<ul>
<li>type and activity of the products</li>
<li>proximity to source</li>
<li>shielding in hot cells, lead glass shields and storage or packaging containers</li>
<li>duration of each procedure</li>
<li>number of procedures per year</li>
</ul>
<h5>B.1.6 Evaluation of air activation and ozone production &ndash; Industrial electron beam accelerators and pool type irradiators</h5>  <p>Submit an evaluation of the adequacy of the proposed ventilation system, taking into account:</p>
<ul>
<li>the concentration of ozone or other toxic gases</li>
<li>the anticipated radiation doses to staff from nitrogen-13 and oxygen-15</li>
</ul>
<h5>B.1.7 Description of the isotope production targets</h5>  <p>Submit the following information:</p>
<ul>
<li>the drawings and the technical specifications of the isotope production targets</li>
<li>an evaluation of the potential release of radioactivity following the failure of a target</li>
</ul>   <p>If developing experimental targets, also submit:</p>
<ul>
<li>the drawings and the technical specifications of the proposed targets</li>
<li>the quality assurance program for the design and testing of the targets to ensure that they are fully compatible with the intended irradiation conditions</li>
<li>any additional safety procedure to accommodate all anticipated experimental configurations</li>
</ul>
<h5>B.1.8	Description of the isotope processing facilities</h5>  <p>The sections of this guide pertaining to the processing of isotopes are only applicable when the accelerator and the associated processing facilities are integrated into a single radiopharmaceutical production site, and the total quantity of radioactive material to be processed is less than 10<sup>15</sup> Bq/year. If the radioisotopes produced by the accelerator are shipped to and processed at a site other than the accelerator facility, then processing should be licensed separately under the <em>Nuclear Substances and Radiation Devices Regulations</em>.</p>  <p>Submit drawings illustrating the layout of the processing facilities, including:</p>
<ul>
<li>the scale</li>
<li>the location of all key components of the processing system, including hot cells</li>
<li>the location of the processing facility with respect to the accelerator and other nearby occupied or potentially occupied areas</li>
<li>if applicable, the location of the transfer lines used for delivering isotopes from the accelerator to the processing facility, including details of any shielding, radiation warning indicators or signs installed along the length of the transfer lines</li>
</ul>  <p>If possible, submit those plans and drawings in electronic format provided there is sufficient resolution to magnify areas of interest and the scale is maintained.</p>  <p>In addition, submit a description of:</p>
<ul>
<li>the tubing, valves and fittings connecting the target to the processing stations external to the accelerator, including the manufacturer&#39;s specifications showing that the tubing and connectors are compatible with the chemicals conveyed, the pressures used and the radiation doses expected; include in the description the specifications for gas regulators and other critical components of the transfer system</li>
<li>the chemical processes used, including the methods and equipment for handling the radioisotopes at each stage of production; the applicant shall demonstrate that components are physically and chemically compatible with the substances handled</li>
<li>the ventilation system of the radiochemical fume hoods and hot cells, including details of their filter media</li>
</ul>  <p>The applicant shall also submit a completed design assessment form for nuclear substance laboratories and nuclear medicine rooms as detailed in the CNSC guidance document GD-52, <em>Design Guide for Nuclear Substance Laboratories and Nuclear Medicine Rooms</em>, available on the <a href="http://www.nuclearsafety.gc.ca/eng/">CNSC&#39;s website</a>.</p>
<h5>B.1.9 Description of radiochemical hot cells and processing stations </h5>  <p>Submit a description of the hot cells or other shielded containers used for hot chemistry.</p>   <p>The description should include calculations or the results of the measurements taken to demonstrate that the shielding incorporated in the hot cells or containers is adequate to ensure that doses to staff and the public will be ALARA. Include a description of any remote handling tool, portable shielding or shielded container used to further reduce doses.</p>
<h5>B.1.10 Transfer and processing of isotopes</h5>  <p>Submit a detailed description of the transfer and processing of isotopes including:</p>
<ul>
<li>the method used to transfer the product from the target to the processing facility</li>
<li>the duration of the transfer process</li>
<li>a description of the processing procedures including the sequence of steps, the locations where the isotopes are handled, the chemical agents and the equipment used and the estimated duration of each step</li>
<li>a description of the product quality control activities, including the amount of product used in Bq, the method used to verify its activity, the sequence of steps, the locations where each isotope is handled and the estimated duration for each step of the quality control activities</li>
<li>a description of the packaging process prior to transport</li>
</ul>
<h5>B.1.11 Beam stops</h5>
<p>If some sections of the facility walls, ceiling or floor are not designed to adequately shield adjacent areas from the primary beam, it will be necessary to physically restrict aiming the primary beam in these directions. Submit a description of the electrical, mechanical or other physical means used to prevent aiming the beam towards these barriers.</p>  <p>If the restriction of the primary beam direction is through the use of software or firmware "virtual beam stops" as in the case of robotic arm radiotherapy devices, identify in the architectural drawings submitted the areas of the walls, ceiling or floors in the facility that are not primary barriers. For accelerators that use beam stops, such as Faraday cups, submit their description and an evaluation of their adequacy. Include in the description an estimate of the radiation dose rates in areas adjacent to the accelerator when the beam stop is operational.</p>
<h5>B.1.12 Technical security measures</h5>  <p>For medium and high-risk sealed sources, the applicant shall have technical security measures in place to prevent unauthorized access to these sources and protect against their illegal removal or sabotage.</p>  <p>Refer to the document REGDOC-2.12.3, <em>Security of Nuclear Substances: Sealed Sources</em>, for more information and guidance for secure transmission of the details of the security program. This document is available on the <a href="http://www.nuclearsafety.gc.ca/eng/">CNSC&#39;s website</a>.</p>
<div className="col-md-12 mrgn-bttm-0 well">  <div className="col-md-2  text-center text-center mrgn-bttm-0 mrgn-tp-0">
<img src="/images/1.4.1-ex.png" className="image-actual mrgn-bttm-0 mrgn-tp-lg" alt="" />  </div>  <div className="span-5  mrgn-bttm-0 ">  <p>Details of the technical security measures are considered prescribed information and may only be transmitted by secure means such as mail. Unencrypted email submission of this information is prohibited.</p>
</div>  </div>  <div className="clear"></div>
<p>In its security program the applicant shall detail the planned technical security measures including description of the intrusion detection system and of the physical barriers in place. With the application submit confirmation that this information has been submitted securely to the CNSC.</p>
<h5>B.1.13 Additional requirements for pool type irradiators</h5>  <p>For pool type irradiators, submit information demonstrating compliance with the following sections of American National Standards Institute (ANSI) standard N43.10-2001: <em>Safe Design and Use of Panoramic, Wet Source Storage Gamma Irradiators and Dry Source Storage Gamma Irradiators</em>:</p>
<ul>
<li>Section 7: Operational Safety Features</li>
<li>Section 9: Source Storage</li>
<li>Section 10: Control Identification</li>
<li>Section 11.4: Underwater Tools and Servicing</li>
</ul>
<h5>B.1.14 Other design considerations – Isotope production facilities</h5>  <p>For isotope production facilities, submit the following additional information:</p>
<ul>
<li>the location and design specifications of the ventilation system, the location and dimensions of the ventilation ducts and the characteristics of the filtration system</li>
<li>if applicable, the location of any holding tank or other containment system used to trap isotopes in the event of an accidental release due to a ruptured target window or release inside a hot cell</li>
<li>if applicable, the location, dimensions and shielding thicknesses of any radioactive waste storage pit that is an integral part of the facility</li>
</ul>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="PartB.2"></div>
<h4 id="PartB-2">B.2 Safety systems &ndash; Nuclear facilities</h4>  <p>Submit a description of the facility safety systems.</p>   <p>The systems listed in this section of the document are either explicitly required by the <em>Class II Nuclear Facilities and Prescribed Equipment Regulations</em> or are industry standards. Use of any substitute system shall be justified by demonstrating that it provides an equivalent level of safety.</p>  <p>In addition to the requirements for each individual safety system as described in the following sections, the applicant shall also submit:</p>
<ul>
<li>an architectural drawing showing the location of each safety system with respect to the physical layout of the prescribed equipment and, if applicable, of the isotope processing facilities</li>
<li>the wiring schematics of the last person out (LPO) circuit, the door or entrance interlocks and the emergency stops that are external to the prescribed equipment</li>
</ul>
<h5>Safety system exemptions</h5>  <p>The <em>Class II Nuclear Facilities and Prescribed Equipment Regulations</em> may exempt some facilities, such as self-shielded accelerators, from specific safety system requirements. In particular, subsection 15(14) of these regulations exempts a particle accelerator facility from the requirement for having an entrance interlock (section B.2.1), a pre-irradiation alarm (section B.2.3) and emergency stop btns at locations other than the console (section B.2.4) if the prescribed equipment meets at least one of the following criteria:</p>
<ul>
<li>its radiation dose rate at 30 cm is not greater than 200 &micro;Sv/hour with the equipment operating in a manner that produces the maximum dose rate as limited either by its characteristics or interlocks, and it is in a room that can be unlocked and entered only by persons authorized by the licensee</li>
<li>its radiation dose rate at 30 cm is not greater than 25 &micro;Sv/hour with the equipment operating in a manner that produces the maximum dose rate as limited either by its characteristics or interlocks</li>
</ul>
<h5>B.2.1 Door interlocks</h5>  <p>Submit the following information on the entrance interlock system:</p>
<ul>
<li>an electrical wiring schematic of the door interlock and the LPO circuit</li>
<li>an architectural drawing showing the location of the main components of the door interlock and LPO circuit, including:
<ul>
<li>the LPO activation switch</li>
<li>the door interlock</li>
<li>any other switch, sensor or additional door interlock to be incorporated into the entrance interlock and LPO circuit</li>
</ul></li>
<li>a description or flowchart of the door interlock and LPO system operation, including all system&#39;s sensors, specifying the type of sensor and how they are activated</li>
</ul>  <p>The system shall adequately protect against unintended exposure to personnel and members of the public. Consequently:</p>
<ul>
<li>there shall be an interlock at every entrance to an exclusion area that terminates irradiation if the door is opened while the prescribed equipment is in operation. This interlock must require the last person leaving the area to activate the circuit via an actuator (commonly referred to as LPO switch) inside the area and then, within a specified time, close the door to transition to the ready-state or "armed" condition</li>
<li>the LPO switch should be in a location that allows that person to verify that no one else remains inside the area prior to starting the irradiation; if there is no location within the area that allows for a clear view of the entire area, the applicant shall implement additional measures to ensure all the area is clear before irradiation commences (such measures may include adding other LPO switches at different locations, adding convex mirrors where needed, or other measures that provide an equivalent level of safety)</li>
<li>the entrance interlock shall be so designed that reopening of the door terminates or prevents irradiation until the sequence described above is repeated; furthermore it should be designed so that any defect or component failure in the system will prevent operation of the prescribed equipment and cause it to “fail safe”; i.e., to revert to a safe state</li>
<li>doorless entrances shall retain the same operational capability as that described above; however, with doorless entrances the interlock switch at the door entrance to the exclusion area may be replaced by other devices, such as electric eyes, active infrared sensors or motion detectors located at the entrance or within the entrance maze (such systems will be evaluated on a case-by-case basis, and the applicant shall demonstrate that they provide equivalent operational capability and level of safety)</li>
</ul>
<h5>B.2.2 Irradiation state indicators</h5>  <p>Submit a description of the irradiation state indicators, such as warning lights, identified in the facility plans and clearly show their location on those plans.</p>   <p>The applicant shall demonstrate that the irradiation state warning display clearly indicates the status of the prescribed equipment and whether or not it is safe to enter the room where it is located.</p>  <p>Irradiation state indicators shall be:</p>
<ul>
<li>installed at each entrance to a facility</li>
<li>clearly visible from the entrance of the facility in all ambient light conditions</li>
<li>located inside any potentially occupied enclosed area within the facility, such as equipment rooms and above or beside the entrance leading into the facility; if there are multiple entrances, a single warning display at a central location may suffice provided that it is clearly visible from all points within that area.</li>
</ul>  <p>Irradiation state indicators should:</p>
<ul>
<li>flash or illuminate in a clearly visible manner when the prescribed equipment is ON or sources are exposed</li>
<li>be consistent in design, color, wording, location and operation, for all facilities at a given site
<ul>
<li>any wording or symbol used to indicate the state of irradiation, such as "beam ON", "beam OFF", "source exposed", "source shielded", should be the same for all facilities of that type at a given site</li>
<li>where the color of a light also serves as an indicator of the state of irradiation, such as green for "beam OFF" or "source shielded" and red for "beam ON" or "source exposed", these colors should be the same for all facilities at a given site</li>
</ul></li>
</ul>  <p>The applicant may install additional indicators, such as radio frequency (RF) ON, KV imaging ON, magnet ON and interlock clear, provided they do not jeopardize the effectiveness of the radiation warning system. The installation of additional indicators inside the facility itself is recommended, but not required by the regulations.</p>
<h5>B.2.3 Pre-irradiation alarms</h5>  <p>Submit a description of the audible pre-irradiation alarm and show its location on the facility plans.</p>   <p>The purpose of the pre-irradiation alarm is to warn persons working in the exclusion area that irradiation will commence soon and they shall either exit that area or, if this is not possible, activate an emergency stop device to prevent irradiation. Consequently, the duration of the alarm shall be sufficient for a person inside the area to activate an emergency stop device (section B.2.4). This alarm shall sound prior to initiating an irradiation, regardless of whether the exclusion area has been accessed since the previous irradiation.</p>  <p>An applicant shall install a pre-irradiation alarm in every facility that:</p>
<ul>
<li>is not used on persons</li>
<li>does not satisfy the exemption requirements of section 15(14) of the <em>Class II Nuclear Facilities and Prescribed Equipment Regulations</em></li>
</ul>  <p>Applicants may propose other alarm systems if they can demonstrate that they provide an equivalent level of safety. Such proposals will be evaluated on a case-by-case basis.</p>
<h5>B.2.4 Emergency stop btns or devices</h5>  <p>Submit a description of the design of all emergency stop btns or equivalent devices and clearly show their locations on the facility plans.</p>
<p>Every facility shall be equipped with easily identifiable latching type push btns, or equivalent devices, that can be used in an emergency to immediately cause the prescribed equipment to revert to a safe state. These devices shall be designed so that once activated, the prescribed equipment cannot be restarted from the control console without first resetting the interlock safety circuit from the location where the device was activated. An interlock system that does not require manual resetting of the emergency stop btn, but requires re-entering the room where the prescribed equipment is located to reset the LPO circuit after an emergency stop device has been activated, is an acceptable alternative.</p>  <p>All Class II prescribed equipment shall have an emergency stop device at the control console.</p>  <p>For prescribed equipment that does not satisfy the exemption described in section 15(14) of the <em>Class II Nuclear Facilities and Prescribed Equipment Regulations</em>, emergency stop devices shall also be located:</p>
<ul>
<li>on the inside of each entrance to the facility</li>
<li>on both sides of the Class II prescribed equipment either on the walls or on the equipment itself except for brachytherapy remote afterloaders</li>
</ul>  <p>The emergency stop devices shall be located where they are unobstructed and easily accessible. With isocentric equipment, they shall not be in the equipment&#39;s primary beam.</p>
<p>Since all walls of a facility housing a robotic arm radiotherapy accelerator are considered primary shielding barriers, there shall be one emergency stop device on each wall.</p>  <p>Depending upon the size and configuration of the facility, additional emergency stop devices may be required to ensure that they are readily accessible from all locations within the facility, including any enclosure located inside the facility such as an equipment room.</p>
<h5>B.2.5 Radiation monitoring devices &ndash; General</h5>  <p>Submit a description of the facility radiation monitoring devices including:</p>
<ul>
<li>the make, model and sensitivity of detector</li>
<li>the back-up power system</li>
<li>the location of the detector</li>
<li>the location of the audible alarm</li>
</ul>  <p>The facility shall be equipped with a monitoring device independent of the prescribed equipment to warn facility staff of the presence of abnormally high radiation levels in the event the prescribed equipment does not return to its safe state when the facility door is opened.</p>  <h6>B.2.5.1	Radiation monitoring devices &ndash; Brachytherapy remote afterloaders, medical and veterinary teletherapy machines</h6>  <p>Submit a description of the facility radiation monitoring devices including its emergency power back-up.</p>  <p>The radiation monitoring devices shall:</p>
<ul>
<li>be capable of detecting when the source is not in the fully shielded position</li>
<li>produce an audible alarm at the entrance to the room if the door is opened when the source is in an unshielded position</li>
<li>operate independently from the prescribed equipment</li>
<li>have a battery back-up or be connected to the site emergency power supply to ensure that it continues to function in the event of a power failure</li>
</ul>  <p>Should the source not retract to its fully shielded position, the dose rate at the radiation monitoring device location would vary greatly depending on its location relative to the source, the orientation of the treatment unit and the exact location where the source has jammed. Consequently, the radiation monitoring device shall be sensitive enough to detect radiation levels as low as the normal ambient level with the source in its fully shielded position, while still remaining operational under the expected maximum exposure conditions. The alarm threshold should be adjusted to the lowest level that does not result in an alarm when the source is in the fully shielded position.</p>  <h6>B.2.5.2	Radiation monitoring devices &ndash; Irradiators</h6>  <p>Submit a description of the facility radiation monitoring devices.</p>  <p>The radiation monitoring devices shall:</p>
<ul>
<li>be installed in all irradiator facilities including research and calibration facilities</li>
<li>be capable of continuously monitor radiation dose rates</li>
<li>produce audible and visible alarms when detecting abnormally high radiation dose rates</li>
<li>have alarm thresholds appropriate to each area being monitored so they are not activated by dose rates expected under normal operating conditions</li>
</ul>
<p>Specify the thresholds proposed and justify their choice in terms of maintaining radiation doses ALARA.</p>  <h6>B.2.5.3	Radiation monitoring devices &ndash; Isotope production facilities</h6>  <p>Submit a description of the facility radiation monitoring devices.</p>  <p>The radiation monitoring devices shall:</p>
<ul>
<li>be installed in the accelerator vault, the hot cells, the ventilation system and the isotope processing stations</li>
<li>be capable of continuously monitor radiation dose rates</li>
<li>produce audible and visible alarms when detecting abnormally high radiation dose rates</li>
<li>have alarm thresholds appropriate to each area being monitored so that they are not activated by dose rates expected under normal operating conditions</li>
<li>in accelerators other than self-shielded accelerators, be interlocked with the access doors to prevent their opening if the radiation level inside the vault or, if applicable, the hot cells exceed a pre-set value</li>
</ul>  <p>Specify the thresholds proposed and justify their choice in terms of maintaining radiation doses ALARA.</p>
<h5>B.2.6 Viewing system &ndash; Medical and veterinary facilities</h5>   <p>Submit a description of the proposed viewing system which would permit continuous observation of the treatment room.</p>   <p>A viewing system may consist of:</p>
<ul>
<li>a closed circuit television system (CCTV)</li>
<li>shielded viewing window</li>
</ul>  <p>If a CCTV system is used, describe the actions to be taken in case of malfunction of the system. If a shielded viewing window is used, include a radiation transmission calculation through the window as part of the dose rate and annual dose calculations.</p>
<h5>B.2.7 Tools and equipment for stuck source emergencies &ndash; Brachytherapy remote afterloaders and teletherapy machines</h5>  <p>Submit a list of the tools available in the facility to deal with emergencies such as stuck sources.</p>   <p>The list may include:</p>
<ul>
<li>T-bars</li>
<li>source handling tools</li>
<li>cutters</li>
<li>lead containers</li>
</ul>  <p>In brachytherapy remote afterloader and teletherapy facilities the tools required to deal with those situations shall be available whenever the Class II prescribed equipment is used.</p>
<h5>B.2.8 Radioisotope release monitoring and containment &ndash; Isotope production facilities</h5>  <p>Submit a description of the system to monitor the containment and record releases of radioactive substances into the environment.</p>  <p>The monitoring and record system should be installed:</p>
<ul>
<li>in the exhaust ventilation systems from the hot cells</li>
<li>in the radioisotope processing stations</li>
<li>in the accelerator room</li>
</ul>  <p>If applicable, submit a description of the systems to prevent or delay the release of gases from failed targets such as hold up tanks or delay lines.</p>
<h5>B.2.9	Ventilation monitoring system &ndash; Isotope production facilities</h5>  <p>Submit a description of the ventilation monitoring system.</p>  <p>A ventilation monitoring system shall be installed:</p>
<ul>
<li>in the hot cells</li>
<li>the radioisotope processing areas</li>
<li>the accelerator vaults</li>
</ul>  <p>The ventilation monitoring system should ensure that the required air flows and pressure differentials are maintained and should warn workers in those areas if it fails.</p>
<h5>B.2.10 Personnel contamination monitoring system &ndash; Isotope production facilities</h5>  <p>Submit a description of the contamination monitoring system.</p>  <p>A personnel contamination monitoring system such as a hand and foot monitor unit should be installed:</p>
<ul>
<li>at each entrance to any area where isotopes are processed or handled</li>
<li>at the common entrance to multiple connected laboratories and rooms provided measures are in place to ensure that all normal access and egress by staff is via this entrance</li>
</ul>  <p>Specify the monitor sensitivity as per manufacturer specifications, or include an analysis showing that its sensitivity is adequate for detecting contamination from the isotopes being handled.</p>
<h5>B.2.11 Pulsed dose rate brachytherapy afterloader remote alarm</h5>  <p>Submit a description of the remote alarm system including:</p>
<ul>
<li>a drawing illustrating the location of the control panel and nursing station relative to the brachytherapy treatment room</li>
<li>the type and location of the remote audible alarm</li>
<li>a wiring diagram and functional description of the remote audible alarm system</li>
<li>confirmation that, once activated, it can only be reset from the treatment room</li>
</ul>  <p>If the pulsed dose rate brachytherapy afterloader control panel is not continuously monitored by staff during treatment, a remote alarm system shall be installed to warn staff of any interruption of the treatment or unauthorized access to the treatment room.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="PartB.3"></div>
<h4 id="PartB-3">B.3 Other requirements</h4>  <p>The applicant shall submit the information listed in the sections below when applying for a construction licence.</p>  <h5>B.3.1 Information program</h5>   <p>Submit the plan for informing persons living in the vicinity of the facility of:</p>
<ul>
<li>the nature and characteristics the facility</li>
<li>the anticipated effects on the environment and the health and safety of persons that may result from its operation</li>
</ul>
<h5>B.3.2 Preliminary decommissioning plan</h5>  <p>Submit the facility preliminary decommissioning plan.</p>  <p>The plan should contain the following information:</p>
<ul>
<li>an overview of the buildings, structures, components, systems and equipment that will be affected by the decommissioning</li>
<li>an outline of the main radiological and chemical hazards that may still exist at the end of operations</li>
<li>the anticipated final end state of the facility such as installation and operation of new prescribed equipment or release of the site for non-radiation-related uses</li>
<li>an outline of how decommissioning will be done, who will do the work and how radioactive materials, nuclear substances and other hazardous substances will be identified, segregated and disposed of</li>
<li>an estimate of the time and cost required to complete decommissioning following the end of facility operations</li>
</ul>  <p>The licensee will have to apply for a facility decommissioning licence once the prescribed equipment reaches the end of its operating life as detailed in part F of this guide. A detailed final decommissioning plan will be required at that time.</p>   <p>However, an early planning and provisions for the decommissioning activities are essential. Consequently, applicants should submit a preliminary decommissioning plan when applying for a construction or operating licence. This plan should be reviewed at each licence renewal during the operating life of the facility.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="PartC"></div>
<h3 id="PartC">PART C: Commissioning</h3>  <p>This part describes the information the applicant shall submit including, confirmation that the facility had been constructed according the specifications submitted with the construction licence application, the safety systems have been installed at the locations specified in that application, the description of the radiation survey performed to verify the adequacy of the shielding and of the tests to verify that the safety systems are operational.</p>  <p>The sections below list the information an applicant shall submit to obtain an operating licence for the purpose of commissioning. If available, this information should be submitted with the construction licence application.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="PartC.1"></div>
<h4 id="PartC-1">C.1 Commissioning plan</h4>  <h5>C.1.1 Facility design implementation &ndash; General</h5>  <p>Submit the plan to confirm that the facility had been built according to its design specifications.</p>  <p>This plan should stipulate that the applicant will:</p>
<ul>
<li>confirm that the density, composition and thickness of the shielding conform to the specifications described in the construction application and that all required safety systems have been installed in the locations specified in that application; this confirmation shall be submitted by the applicant and include confirmation by both the applicant and the contractor after the construction is completed</li>
<li>perform a radiation survey to verify the adequacy of the shielding; the plan of the survey should specify:
<ul>
<li>the physical and administrative controls used to restrict access to the area during the survey</li>
<li>where measurements will be taken, including all accessible areas adjacent to the facility where dose and dose rate were estimated</li>
<li>the verification of dose and dose rate estimates in those areas</li>
<li>the radiation detection instruments used for the survey with their characteristics</li>
<li>the conditions and operating parameters of the equipment during the survey</li>
<li>whether photon or neutron radiation or both will be measured; note that a neutron survey shall be performed for electron accelerators with a photon beam energy &ge;&nbsp;10MV; neutron surveys are not mandatory, but recommended for all other electron accelerators, particularly those with electron beam energy greater than 10MeV or low-energy accelerators in facilities whose maze has only one leg</li>
</ul></li>
<li>describe the tests performed to ensure that safety devices are functioning as intended; safety devices shall be tested and verified prior to any other commissioning activity; those tests shall be performed on the following safety devices:
<ul>
<li>the door interlock and LPO time delay system</li>
<li>all irradiation status indicators</li>
<li>the pre-irradiation alarm, if applicable</li>
<li>all emergency stop btns and devices</li>
<li>all radiation monitors and alarms</li>
</ul></li>
</ul>  <h6>C.1.1.1 Facility design implementation &ndash; Medical and veterinary facilities</h6>  <p>In addition to the requirements in section C.1.1, the commissioning plan should stipulate that the applicant will:</p>
<ul>
<li>in accelerators facilities:
<ul>
<li>take all dose measurements using the maximum dose rate at the isocentre, and maximum photon energy and field size</li>
<li>take dose measurements beyond the primary barrier with no phantom in the beam</li>
<li>take dose measurements beyond the secondary barriers with a tissue equivalent phantom placed in the beam at the normal treatment distance</li>
<li>take measurements of dose rates in the immediate vicinity of the gantry head due to activation, under conditions that represent an average treatment day</li>
<li>verify the functionality of virtual beam stops for robotic arm radiotherapy facilities, if applicable</li>
</ul></li>
<li>in brachytherapy remote afterloader facilities:
<ul>
<li>take all dose measurements with no phantom and using the maximum source activity, with the sources in the most adverse orientation with respect to the barrier</li>
<li>measure leakage dose rates to verify they conform to the manufacturer&#39;s specifications when the source is in the shielded position</li>
</ul></li>
<li>in teletherapy machine facilities:
<ul>
<li>take all dose measurements using the maximum field size</li>
<li>take dose measurements on teletherapy machine units with independently rotating heads using the minimum distance between the source and the primary barrier</li>
<li>measure leakage dose rates to verify that they conform to the manufacturer&#39;s specifications when with the source is in the shielded position</li>
<li>take dose measurements beyond the primary barriers with no phantom in the beam</li>
<li>take dose measurements beyond the secondary barriers with a tissue equivalent phantom placed in the beam at the normal treatment distance</li>
</ul></li>
</ul>  <h6>C.1.1.2 Facility design implementation &ndash; Isotope production facilities</h6>  <p>In addition to the requirements in section C.1.1, the commissioning plan should stipulate that the applicant will:</p>
<ul>
<li>confirm the stack height and dimensions</li>
<li>confirm that all components of the release monitoring and containment systems are functional</li>
<li>specify the target material irradiated during the radiation survey</li>
</ul>	  <p>For self-shielded cyclotrons, in addition to the requirements in sections C.1.1 and C.1.2, the commissioning plan should stipulate that the applicant will:</p>
<ul>
<li>submit the results of dose rates measurements at the external surface of the cyclotron and at any potentially occupied area within the accelerator room</li>
<li>confirm that the interlock or device designed to ensure closing of its shielding are operational</li>
<li>confirm the shielding integrity</li>
</ul>
<h5>C.1.2 Facility design implementation &ndash; Isotope processing facilities</h5>  <p>In addition to the requirements in section C.1.1, if radioisotope processing is encompassed by the licence, the plan should stipulate that the applicant will:</p>
<ul>
<li>confirm that the design of the laboratory conforms to the specifications described in the design assessment form for nuclear substance laboratories and nuclear medicine rooms</li>
<li>submit the results of the tests performed on any interlock or other safety system associated with the hot cells or other processing equipment</li>
<li>submit an air balance report confirming that the ventilation rates and pressure differentials are adequate</li>
<li>submit the results of the measurements taken to confirm the adequacy of the radiation shielding incorporated into the hot cells and along the transfer lines</li>
</ul>  <p>The design assessment form for nuclear substance laboratories and nuclear medicine rooms is available on the <a href="http://www.nuclearsafety.gc.ca/eng/">CNSC&#39;s website</a>.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="PartD"></div>
<h3 id="PartD">PART D: Management System and Radiation Safety Program</h3>  <p>This section describes the information the applicant shall submit on its radiation safety programs including, the applicant&#39;s management system, the radiation safety officer job description, the organization management structure, the applicant&#39;s quality assurance program and its commitment to conform to the ALARA principle, the requirements for personnel dose monitoring, radiation survey meter availability, contamination control, personnel qualifications and training, management of waste and procedures to control access to the facility and to nuclear substances. The topics of the radiation safety program are grouped according to the safety and control area described in <a href="#AppB">Appendix B: Safety and Control Area Definitions</a>.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="PartD.1"></div>
<h4 id="PartD-1">D.1 Management system</h4>  <h5>D.1.1 Public information program &ndash; Pool type irradiators and isotope production accelerators</h5>  <p>Submit a copy of the facility public information program.</p>  <p>In addition to the public information program requirement specified in section B.3.1, licence applicants for a pool type irradiator or isotope production facility which may release radioisotopes to the atmosphere, throughout the operating life of the facility, shall maintain a public disclosure and information program.</p>  <p>For more information about public disclosure and information programs, the applicant should refer to the document RD/GD-99.3, <em>Public Information and Disclosure</em>. This document is available on the <a href="http://www.nuclearsafety.gc.ca/eng/">CNSC&#39;s website</a>.</p>
<h5>D.1.2 Radiation safety officer job description</h5>
<div className="col-md-12 mrgn-bttm-0 well">  <div className="col-md-2  text-center text-center mrgn-bttm-0 mrgn-tp-sm">
<img src="/images/1.4.1-ex.png" className="image-actual" alt="" />  </div>  <div className="span-5  mrgn-bttm-0 ">  <p>Every licensee who operates or services Class II prescribed equipment shall have a radiation safety officer certified by the CNSC. See the document REGDOC-2.2.3, <em>Personnel Certification: Radiation Safety Officer, Class II Facilities</em>, for more information about the certification process.</p>  </div>  </div>  <div className="clear"></div>
<p>Submit the radiation safety officer (RSO) job description, including:</p>
<ul>
<li>the required qualifications for the position</li>
<li>the responsibilities of the RSO; those responsibilities may include:
<ul>
<li>taking all reasonable precautions to protect the environment, the health and safety of facility personnel and the public</li>
<li>the oversight of the implementation of the facility radiation protection program</li>
<li>acting as the primary contact with the CNSC for licensing and compliance matters</li>
<li>identifying radiation safety problems or concerns and implementing appropriate corrective actions</li>
<li>ensuring compliance with CNSC regulatory requirements</li>
<li>reporting regulatory non-compliances to the CNSC</li>
<li>having the authority to stop any activity related to the operation of a Class II nuclear facility or servicing of Class II prescribed equipment that might result in a non-compliance with the NSCA, the regulations or the licence</li>
<li>acting as the signing authority for CNSC licences</li>
<li>developing procedures and policies related to radiation safety and training</li>
<li>preparing the budget for radiation safety and related training</li>
</ul></li>
<li>the time and the resources allocated to the RSO which are needed to carry out the duties of the position</li>
</ul>
<h5>D.1.3 Organizational management</h5>   <p>Submit a detailed description of the organizational management structure as it relates to radiation safety, including:</p>
<ul>
<li>the job titles of the persons responsible for:
<ul>
<li>the management and operation of the prescribed equipment and handling the nuclear substances encompassed by the licence</li>
<li>establishing and maintaining an adequate and effective quality assurance program</li>
<li>developing and maintaining quality control procedures and tests to verify that the tests are effective, performed regularly and correctly</li>
</ul></li>
<li>the radiation safety related functions, responsibilities and authority of each position listed above</li>
<li>a chart showing the lines of reporting and communication between all applicant representatives including the RSO and senior management</li>
<li>the management&#39;s commitment to safety including:
<ul>
<li>management&#39;s accountability and responsibility for safety</li>
<li>developing a learning driven safety culture including encouragement of a questioning attitude, promotion of a “no-blame” environment, and willingness to change</li>
<li>promoting the value placed on safety culture including balancing production pressure and safety and staff taking responsibility for their own safety</li>
</ul></li>
</ul>
<h5>D.1.4 Radiation safety committee</h5>  <p>Submit the applicant&#39;s procedures and program in place to ensure the appropriate oversight and review of the effectiveness of the radiation safety program. Normally, the oversight and the overview of the radiation safety program are the responsibility of a radiation safety committee (RSC) or equivalent body. If applicable, submit the terms of reference or mandate of the RSC, or those of an equivalent body. However, establishing the RSC is optional and, in its absence, the applicant should explain who has the authority and responsibility equivalent to those of the RSC.</p>  <p>Periodic evaluations of the radiation safety program by internal or external auditors should be conducted at least annually and their results reported to facility management.</p>  <p>The RSC terms of reference should include:</p>
<ul>
<li>the frequency of the meetings (should be at least once a year)</li>
<li>the job titles of the members of the RSC and their roles</li>
<li>to whom the RSC reports and at what frequency</li>
<li>the roles of departments and services and the operational activities under the oversight of the RSC</li>
<li>the responsibilities of the RSC with respect to:
<ul>
<li>reviewing and approving a budget for radiation safety and related training</li>
<li>reviewing and approving procedures and policies for radiation safety and training</li>
<li>reviewing the effectiveness of the radiation safety program including:
<ul>
<li>the outstanding items from the last management review meeting</li>
<li>the results of internal and external audits</li>
<li>the feedback from staff relating to program deficiencies</li>
<li>the regulatory compliance</li>
<li>the outcomes of the corrective actions implemented or the recommendations for improvement</li>
</ul></li>
<li>reviewing all radiation safety related incidents</li>
<li>acting in an advisory role to the radiation safety officer and management</li>
</ul></li>
<li>the obligation to maintain the records of the meetings</li>
</ul>
<h5>D.1.5 Reporting requirements</h5>  <p>Submit the policy and the procedure to ensure that reportable occurrences are reported to the Commission within the required time period.</p>  <p>The policy should specify:</p>
<ul>
<li>the job title of the person responsible for filling the report</li>
<li>the occurrences or events that should be reported to the CNSC in accordance with section 29(1) of the <em>General Nuclear Safety and Control Regulations</em></li>
<li>the requirement for keeping a record of the report and the format of the report</li>
</ul>  <p>The procedure should require a description of:</p>
<ul>
<li>the event and its probable cause</li>
<li>the date, time and location of the event</li>
<li>the effects on the environment, the health and safety of persons and the maintenance of security that have resulted or may result from the event</li>
<li>the effective dose and equivalent dose of radiation received by any person as a result of the event</li>
<li>the actions taken or proposed with respect to the event</li>
</ul>
<h5>D.1.6 Quality assurance program</h5>  <p>Submit the quality assurance (QA) program as it applies to radiation safety at the facility.</p>  <p>Every applicant for a licence to construct, operate, or decommission a Class II nuclear facility or operate or service Class II prescribed equipment shall have a quality assurance program in place to ensure that the licensed activities are carried on in accordance with the <em>Nuclear Safety and Control Act</em>, the regulations made pursuant to the NSCA and the licence.</p>  <p>The required QA program should, as a minimum, address the following aspects of the licensed activities:</p>
<ul>
<li>conformance with the requirements of the NSCA and its regulations</li>
<li>conformance with the applicant&#39;s operating policies and procedures referenced in the licence</li>
<li>the equipment, items and activities to which the program applies</li>
<li>the periodic verification of the operation of safety systems and control mechanisms</li>
<li>the provisions for reviewing and updating manuals, policies and procedures because of equipment modifications or operating experience</li>
</ul>
<h5>D.1.7 Control of records</h5>  <p>Submit the policy and procedure governing the retention of records.</p>  <p>The policy should specify:</p>
<ul>
<li>the applicant&#39;s commitment to maintain records including those specified under section 24 of the CNSC <em>Radiation Protection Regulations</em> and those specified in Section 21(1) of the <em>Class II Nuclear Facilities and Prescribed Equipment Regulations</em></li>
<li>the job title of the person responsible for maintaining the records</li>
<li>the record retention period specified in the regulations or if not specified, one year after the expiration of the licence</li>
<li>the obligation to notify the Commission at least 90 days prior to the date of disposal of records</li>
<li>the obligation to have records available for inspection</li>
<li>the record storage requirements including the media i.e. electronic vs. paper</li>
<li>the record review requirements including:
<ul>
<li>the identification of the records subject to periodic review</li>
<li>the frequency of the review</li>
<li>the job title of the person responsible for reviewing and maintaining the records</li>
</ul></li>
<li>the provisions for ensuring regulatory compliance of record control including:
<ul>
<li>reporting of inaccuracies and deficiencies in records to the Commission within 21 days of becoming aware of the inaccuracy or deficiency</li>
</ul></li>
<li>preventing the unauthorized disposal of records referred to in the NSCA, the regulations or the licence unless they are no longer required to be kept</li>
</ul>  <p>The procedure should identify the records to be kept, such as:</p>
<ul>
<li>personnel records, including:
<ul>
<li>the names of the persons operating or servicing the prescribed equipment or handling nuclear substances</li>
<li>the names and job categories of nuclear energy workers</li>
<li>the training received by each person working with or servicing the prescribed equipment or handling nuclear substances, including the date and subject of training</li>
</ul></li>
<li>operating and performance records, including:
<ul>
<li>prescribed equipment workload</li>
<li>any other record required by operational and servicing procedures</li>
</ul></li>
<li>facility and prescribed equipment records, including:
<ul>
<li>the results of radiation surveys required by the Regulations or the licence</li>
<li>the inspections, verifications, and tests of the prescribed equipment</li>
<li>the transfer of prescribed equipment, including the date of transfer, the licence number of the organization to whom the equipment was transferred, and the model and serial number of the equipment</li>
<li>the facility plans and drawings, and design specifications</li>
<li>the facility commissioning test procedures and test results</li>
<li>if applicable, the quality assurance program for the design and testing of experimental targets</li>
<li>the list of laboratories, rooms and other locations designated for the use or storage of nuclear substances</li>
<li>the facility decommissioning reports</li>
<li>the modifications, repairs, maintenance and return to operation of the prescribed equipment and facility equipment</li>
</ul></li>
<li>nuclear substance records including:
<ul>
<li>the acquisition, disposal or transfers of nuclear substances and transport documents</li>
<li>the inventory of sealed and unsealed sources</li>
<li>the physical and radiological characteristics of waste and activated components to be stored, or disposed of, and the methods used for their storage or disposal</li>
</ul></li>
<li>radiation protection records, including:
<ul>
<li>the inventory and calibration of radiation detection instruments</li>
<li>if applicable, the contamination monitoring results</li>
<li>if applicable, the leak test monitoring results</li>
<li>the dosimetry results</li>
<li>if applicable, the internal bioassay results</li>
</ul></li>
<li>the records of emergencies and other incidents involving the prescribed equipment or nuclear substances</li>
<li>any other record specified by the NSCA, the regulations or the licence</li>
</ul>  <p>Additional records may be required by the CNSC as specified in licence conditions.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="PartD.2"></div>
<h4 id="PartD-2">Sections D.2 through D.10 &ndash; Radiation safety program</h4>  <p>The applicant shall describe its radiation safety program. This program should be documented and have detailed policies and procedures that are prepared under the supervision of the RSO and approved by RSC or senior management. These policies and procedures should be incorporated into a radiation safety manual readily available to all workers.</p>  <p>The radiation safety program components described in this guide do not prevent applicants from proposing alternatives, but any proposed radiation safety program should reflect the complexity and the hazards of the activities to be authorized by the licence.</p>
<h4>D.2 Radiation protection</h4>
<h5>D.2.1 ALARA policy</h5>  <p>Submit the policy that demonstrates the applicants&#39; commitment to keeping occupational and public doses as low as reasonably achievable, social and economic factors taken into consideration.</p>
<p>The policy should promote:</p>
<ul>
<li>management control over work practices and, specifically:
<ul>
<li>delegating the responsibilities for radiation safety to qualified individuals only</li>
<li>providing adequate resources both financial and human</li>
<li>ensuring the development and maintenance of radiation safety policies and procedures in accordance with industry best practices</li>
<li>comparing the applicant&#39;s radiation protection policies and procedures with industry best practices with the adoption of improvements where appropriate</li>
<li>providing for periodic internal reviews, such as self-audits, to verify workers&#39; adherence to the licensee&#39;s radiation protection procedures</li>
<li>senior management review of the radiation safety program and follow up to ensure the implementation of corrective action, as required</li>
</ul></li>
<li>personnel qualification and training:
<ul>
<li>providing adequate training to new staff</li>
<li>on an ongoing basis, verifying that existing staff maintain their competence and providing training as required to address perceived gaps in staff knowledge (see section D.3.2 for details of the expected training content)</li>
</ul></li>
<li>control over occupational and public exposure to radiation by monitoring radiation doses, investigating unusual doses and setting performance indicators; indicators may include:
<ul>
<li>personal dose trends</li>
<li>number of non-personal badge exposures</li>
<li>number of instances where action levels were exceeded</li>
<li>number of reported incidents</li>
<li>when possible, benchmarking exposure doses against those of similar facilities</li>
</ul></li>
<li>developing and maintaining emergency procedures for dealing with radiological incidents related to the licensed activities</li>
</ul>  <p>For more information on the expectations of the ALARA policy, applicants should consult section 4 of the CNSC <em>Radiation Protection Regulations</em>, and the CNSC guide, G-129 rev 1, <em>Keeping Radiation Exposures and Doses "As Low as Reasonably Achievable (ALARA)"</em> available on the <a href="http://www.nuclearsafety.gc.ca/eng/">CNSC&#39;s website</a>.</p>
<h5>D.2.2 Designation of nuclear energy workers</h5>  <p>Submit the policy and the procedure to designate positions as NEWs.</p>   <p>If there is a reasonable probability that a worker&#39;s effective dose may exceed the dose limit of 1 mSv/year for the public, the applicant shall designate that position as a NEW and inform the worker of this designation.</p>
<p>The <em>Radiation Protection Regulations</em> require that NEWs be informed of their status, the risks associated with the radiation levels to which they may be exposed, the applicable effective dose limits, their radiation dose levels and their obligations.</p>  <p>The policy should specify:</p>
<ul>
<li>the categories of workers who will be designated as NEWs</li>
<li>the rationale for that designation</li>
<li>the job title of the person responsible for designating positions as NEWs and for notifying workers occupying these positions of their status as NEWs</li>
<li>the job title of the person responsible for keeping a record of the workers being informed of their status as NEWs and of the signed acknowledgement that those workers have received the required information</li>
</ul>  <p>The procedure should describe:</p>
<ul>
<li>the personal information required of each person who occupies a position that has been designated as a NEW, including the worker exposure history</li>
<li>the notification to be given in writing to workers, including:
<ul>
<li>their designation of their position as a NEW</li>
<li>the risks associated with their radiation exposure</li>
<li>their regulatory dose limits</li>
<li>their obligations</li>
<li>the rights and obligations of a pregnant NEW</li>
</ul></li>
<li>the requirement to obtain written acknowledgement from each NEW that this information has been given</li>
<li>the requirement to maintain a record of the written notifications to the workers and of their acknowledgement of having received that information</li>
<li>any accommodation required for pregnant NEWs </li>
</ul>  <p>If the applicant elects not to designate positions as NEWs, it should justify this decision. In such a case, the applicant is nevertheless obliged to train its workers and to monitor their doses.</p>
<h5>D.2.3 Personal dose monitoring &ndash; General</h5>  <p>Submit the policy and procedure for personal dose monitoring that demonstrate that adequate provisions are in place for monitoring workers&#39; occupational doses.</p>
<p>The policy should specify:</p>
<ul>
<li>the applicant&#39;s commitment to monitor occupational doses to staff</li>
<li>the provisions for keeping records of personal doses</li>
<li>the categories of workers who will be required to wear a dosimeter</li>
<li>the obligation of workers to wear the dosimeter when on duty</li>
<li>the provisions for monitoring doses to visitors to the facility, if applicable</li>
<li>the job title of the person responsible for distributing and collecting the dosimeters</li>
<li>the job title of the person responsible for notifying workers of their doses</li>
<li>the dosimeter exchange periods</li>
<li>the CNSC licensed dosimetry service used</li>
</ul>  <p>The procedure should describe:</p>
<ul>
<li>the type of dosimeters normally used such as extremity or whole body dosimeters</li>
<li>the types of other personal dosimeters available</li>
<li>the instructions to workers on the proper handling, wearing and storing the dosimeters</li>
<li>the provisions for replacing lost or damaged personal dosimeters</li>
<li>the provisions for notifying the RSO of non-personal exposure of a dosimeter</li>
<li>the requirement to wear extremity dosimeters when handling nuclear substances or servicing the equipment-activated components</li>
<li>the methods for notifying workers of their doses</li>
</ul>  <p>If monitoring doses to staff without using personal dosimeters, provide a justification for using other monitoring methods and clearly demonstrate the adequacy of those methods for determining doses. Such methods are subject to CNSC approval.</p>   <p>For further guidance, the applicant should refer to the Regulatory Guide G-91, <em>Ascertaining and Recording Radiation Doses to Individuals</em>, available on the <a href="http://www.nuclearsafety.gc.ca/eng/">CNSC&#39;s website</a>.</p>  <h6>D.2.3.1 Personal dose monitoring &ndash; electronic personal dosimeters</h6>  <p>Submit the policy and procedure requiring the use of electronic personal dosimeters (EPDs) with direct reading display.</p>   <p>In addition to the requirements in section D.2.3, applicants for a licence to operate an isotope production facility, an industrial or a research accelerator, a mobile or a portable accelerator shall have a policy on the use of EPDs by the workers.</p>  <p>The policy should specify:</p>
<ul>
<li>if, where and when an EPD should be used</li>
<li>the daily dose limits to workers</li>
<li>the workers&#39; obligation to:
<ul>
<li>wear the EPDs when on duty</li>
<li>verify the functioning of the EPD&#39;s visual display and audible alarm</li>
<li>verify it has been calibrated within the last 12 months</li>
</ul></li>
</ul>  <p>The procedures should describe:</p>
<ul>
<li>where EPDs are kept</li>
<li>the instructions to workers on the use of those dosimeters</li>
<li>the pre-set alarm level</li>
<li>actions to be taken if the alarm sounds</li>
</ul>
<h5>D.2.4 Action levels</h5>  <p>Submit the policy on action levels and the procedure describing the actions to be taken when an action level has been exceeded.</p>  <p>Action levels are intended to alert management of a potential loss of control of a part of the radiation protection program before regulatory limits are reached and should be set at values close to the workers&#39; expected occupational doses. For this reason, it may be appropriate to define different dose action levels for different groups of workers.</p>  <p>The policy should specify:</p>
<ul>
<li>the proposed action levels for different groups of workers and for:
<ul>
<li>quarterly and/or annual whole body exposure</li>
<li>extremity exposures</li>
<li>pregnancy exposures</li>
</ul></li>
<li>the proposed action level related to environmental releases or radioactive contamination</li>
<li>the job title of the person responsible for establishing the cause for reaching an action level, and for identifying and implementing the appropriate corrective actions</li>
</ul>  <p>The procedure should identify:</p>
<ul>
<li>the timelines for implementing corrective actions when an action level has been exceeded</li>
<li>the feedback to be given to a worker who has exceeded an action level</li>
<li>the job title of the person responsible for notifying the CNSC within the time specified in the licence</li>
</ul>  <p>If action levels are not part of the applicant&#39;s radiation safety program, the applicant should demonstrate that measures are in places that ensure an equivalent level of safety.</p>  <p>Exceeding an action level does not imply a regulatory non-compliance. However, failure to report when an action level has been exceeded is a violation of the <em>Radiation Protection Regulations</em>.</p>
<h5>D.2.5 Radiation detection instruments</h5>  <p>Submit the policy and procedure governing the use and calibration of survey meters, neutron meters and EPDs.</p>   <p>The policy should specify:</p>
<ul>
<li>where, when and which instrument should be used</li>
<li>the job title of the person responsible for:
<ul>
<li>ensuring the instruments have been calibrated in the last 12 months</li>
<li>removing from service those instruments whose calibration certificate has expired</li>
<li>ensuring that all calibration certificates are kept on file and available for inspection</li>
<li>training users to operate instruments</li>
</ul></li>
<li>the workers&#39; obligation to verify prior to using the instrument that:
<ul>
<li>it has been calibrated within the last 12 months</li>
<li>it is functioning properly</li>
</ul></li>
</ul>  <p>The procedures should include:</p>
<ul>
<li>the description of locations where those instruments are kept</li>
<li>the instructions to workers on the use of those instruments</li>
<li>if applicable, the name and contact information of the calibration services used</li>
</ul>  <p>See sections below regarding suitability of survey meters by application. <a href="#AppF">Appendix F: Survey Meter Calibration</a> contains information on survey meter calibration.</p>  <h6>D.2.5.1 Survey meter suitability &ndash; Accelerators</h6>  <p>Some accelerators, such as medical accelerators, produce very short pulses of high-energy X-rays. For such accelerators, ion chambers are the preferred survey meters for dose rate measurements, because they provide accurate measurements in pulsed radiation fields. Geiger-Müller (G-M) detectors are not suitable and will not be accepted for dose-rate measurements in those accelerator facilities, because they typically exhibit a grossly non-linear response to short pulses of high-energy X-rays. However, they may be used for wide area scanning to identify “hot spots” during room surveys, provided dose rate measurements are subsequently taken with an ion chamber or other suitable instrument. G-M detectors may also be used to measure the gamma radiation from activated components or from ancillary equipment such as check sources. Other types of survey meters, such as scintillators, will be evaluated on a case-by-case basis, but will not be accepted unless the applicant can clearly demonstrate via the manufacturer&#39;s specifications or independent testing that the instrument is suitable for use in measuring dose rates from pulsed, high-energy X-rays.</p>  <h6>D.2.5.2 Survey meter suitability &ndash; Cyclotrons</h6>  <p>Instruments with analog displays such as magnetic deflection meters are not suitable for use in the strong magnetic fields present in the immediate vicinity of cyclotrons.</p>  <h6>D.2.5.3 Survey meter suitability &ndash; Sealed sources</h6>  <p>For sealed sources, regardless of whether contained in prescribed equipment or not, gamma survey meters of any type (such as G-M detectors, ion chambers and scintillators) may be used if the manufacturer&#39;s operating specifications confirm that the instrument chosen is suitable for the range of dose rates and energies being measured.</p>  <p>If a G-M detector is to be used, energy compensated models are generally preferable. If a non-compensated G-M is to be used, it shall be calibrated specifically for the energy of interest.</p>  <h6>D.2.5.4 Contamination instrument suitability</h6>  <p>See <a href="#AppG">Appendix G: Monitoring for Radioactive Contamination</a> for information on contamination monitoring, including selecting suitable instruments.</p>
<h5>D.2.6 Radioactive contamination control</h5>  <p>Submit the policy and the procedures for monitoring the workplace for evidence of radioactive contamination.</p>   <p>Monitoring for radioactive contamination can be done by indirect or direct methods. The indirect method involves collecting wipe samples from workplace surfaces and measuring the removable contamination with liquid scintillation counters. The direct method involves using portable instruments in areas with low background radiation to measure removable and fixed contamination. If the measurement shows that contamination exceeds the limits described below, the licensee shall take appropriate corrective actions. More information on contamination monitoring procedures can be found in <a href="#AppG">Appendix G: Monitoring for Radioactive Contamination</a>.</p>  <p>The policy should specify:</p>
<ul>
<li>the job title of the person responsible for carrying out the monitoring</li>
<li>the instruments available for monitoring contamination</li>
<li>the frequency of contamination monitoring, for example:
<ul>
<li>weekly</li>
<li>after each production run</li>
<li>after spills or incidents</li>
<li>before the equipment is released for non-radioactive use</li>
<li>before and after decommissioning</li>
</ul></li>
<li>the corrective actions to be taken if contamination limits are exceeded</li>
<li>the job title of the person responsible for maintaining contamination monitoring records</li>
</ul>  <p>The procedures should include:</p>
<ul>
<li>a description of the types of contamination that would dictate the use of either the indirect or the direct method</li>
<li>evidence that the instrument to be used can detect contamination at the limits identified in the section below</li>
<li>a description of the algorithm used to convert measurement results, e.g. in counts per unit time, to equivalent levels of surface contamination in Bq/cm<sup>2</sup></li>
<li>a description of the precautions to be taken when using the indirect or the direct method, including personal protective equipment</li>
<li>a drawing of the physical layout of the rooms where contamination monitoring may be required</li>
</ul>  <p>The amount of removable contamination permitted in an area is regulated through a licence condition in the facility operating licence.</p>  <p>For Class A, Class B and Class C radionuclides, which are typically long-lived alpha emitters, long-lived beta or gamma emitters, and short-lived beta or gamma emitters, respectively, removable contamination shall not exceed the following limits when averaged over a surface area of not more than 100 cm<sup>2</sup>:</p>
<ul>
<li>in controlled areas:
<ul>
<li>3 Bq/cm<sup>2</sup> of Class A radionuclides</li>
<li>30 Bq/cm<sup>2</sup> of Class B radionuclides</li>
<li>300 Bq/cm<sup>2</sup> of Class C radionuclides</li>
</ul></li>
<li>in supervised public areas and for decommissioning:
<ul>
<li>0.3Bq/cm<sup>2</sup> of Class A radionuclides</li>
<li>3 Bq/cm<sup>2</sup> of Class B radionuclides</li>
<li>30 Bq/cm<sup>2</sup> of Class C radionuclides</li>
</ul></li>
</ul>  <p>A list of Class A, B and C radionuclides is in <a href="#AppH">Appendix H: Classes of Nuclear Substances</a>. The applicant may request approval for other contamination limits if it can demonstrate the resulting maximum effective dose to any individual is less than 10 &micro;Sv/year.</p>
<h5>D.2.7 Rooms &ndash; Posting</h5>  <p>Submit the policy requiring the posting of rooms where prescribed equipment and nuclear substances are stored or used.</p>  <p>The policy should require:</p>
<ul>
<li>posting a durable and legible radiation warning sign with the words "<span lang="fr">RAYONNEMENT</span> &ndash; DANGER &ndash; RADIATION" and the universal radiation warning symbol defined in schedule 3 of the <em>Radiation Protection Regulations</em> at the boundary of, and at every point of access to an area, room or enclosure where there is more than 100 times the exemption quantity of a nuclear substance, or where there is a reasonable probability that a person will be exposed to a radiation dose rate greater than 25 &micro;Sv/h</li>
<li>posting at the entrance of a Class II facility a durable, legible sign indicating the job title and telephone number of a person who can be contacted 24 hours a day in case of an emergency in accordance with section 11 of the <em>Class II Nuclear Facility and Prescribed Equipment Regulations</em></li>
<li>posting in a conspicuous place at the site of the licensed activity, in accordance with Subsection 14 (1) of the <em>General Nuclear Safety and Control Regulations</em>:
<ul className="list-bullet-none">
<li>(a) a copy of the licence, with or without the licence number, and a notice indicating the place where any record referred to in the licence may be consulted; or</li>
<li>(b) a notice containing:
<ul className="list-bullet-none">
<li>(i) the name of the licensee</li>
<li>(ii) a description of the licensed activity</li>
<li>(iii) a description of the nuclear substance, nuclear facility or prescribed equipment encompassed by the licence</li>
<li>(iv) an indication of the location of the licence and any record referred to in it</li>
</ul></li>
</ul></li>
</ul>  <h6>D.2.7.1	Facilities processing or handling unsealed sources</h6>  <p>Submit examples of the posters outlining the precautions to be taken by workers in the following laboratories:</p>
<ul>
<li>Basic level &ndash; Use of unsealed nuclear substances</li>
<li>Intermediate level &ndash; Use of unsealed nuclear substances</li>
<li>High level &ndash; Use of unsealed nuclear substances</li>
<li>Containment level &ndash; Use of unsealed nuclear substances</li>
</ul>  <p>Applicants may download poster templates from the <a href="http://www.nuclearsafety.gc.ca/eng/">CNSC&#39;s website</a>.</p>
<h5>D.2.8 Sealed source changes</h5>  <p>Submit the policy and the procedure to ensure radiation safety when radiation sources are changed.</p>   <p>The applicant should demonstrate the adequacy of its procedures describing how sources used in Class II prescribed equipment are received, changed, stored and disposed of in a manner that provides for the security of the sources, and the safety of the workers and the public.</p>  <p>The policy should specify:</p>
<ul>
<li>that only workers trained on the requirements of the <em>Packaging and Transport of Nuclear Substances Regulations</em> may handle the sources</li>
<li>the job title of the person who should be notified of the arrival of the source</li>
<li>the job title of the person responsible for inspecting the source container upon its arrival</li>
<li>the job title of the person who will perform the source change</li>
<li>where the source will be stored while waiting for the transfer</li>
<li>the requirement for listing the source in the source inventory</li>
<li>the tools that will be required during the source change</li>
<li>the process for returning the spent source</li>
<li>for category I and II sources, the requirement to notify the CNSC of the receipt of the source</li>
</ul>
<p>The procedure should describe:</p>
<ul>
<li>the inspection required to detect signs of tampering or damage on the shipping package</li>
<li>the protocol for transferring the source from the loading dock to a storage room</li>
<li>the responsibilities of the supplier representative or of a person trained and qualified by the supplier for:
<ul>
<li>removing the spent source and installing the new</li>
<li>packing the spent source in the appropriate shipping container</li>
<li>completing the paperwork for shipping the source container to the supplier</li>
<li>taking measurements of radiation dose rates to verify that the dose rate with the source in its shielded position at 1m from does not exceed the manufacturer&#39;s specifications</li>
<li>if applicable, review with facility staff the operation of the afterloader and the emergency procedures</li>
</ul></li>
<li>if applicable, the protocol for taking measurements of radiation dose rates at all accessible locations adjacent to the room housing the teletherapy machine or the afterloader, with the source exposed</li>
</ul>
<div className="col-md-12 mrgn-bttm-0 well">  <div className="col-md-2  text-center text-center mrgn-bttm-0 mrgn-tp-0">
<img src="/images/1.4.1-ex.png" className="image-actual mrgn-bttm-0 mrgn-tp-lg" alt="" />  </div>  <div className="span-5  mrgn-bttm-0 ">  <p>Source changes for Class II prescribed equipment may only be performed by persons authorized to do so under the terms and conditions of a Class II prescribed equipment servicing licence.</p>
</div>  </div>  <div className="clear"></div>
<h5>D.2.9 Sealed source handling</h5>   <p>Submit the policies for receiving, storing and transferring sealed sources.</p>  <p>The policy for receiving sealed sources should specify that:</p>
<ul>
<li>only authorized workers with training in Transportation of Dangerous Goods (TDG) may handle packages containing sealed sources</li>
<li>packages received during normal working hours should be moved without undue delay to a designated nuclear substance storage location</li>
<li>packages that appear to be damaged or leaking should not be handled by receiving personnel and the RSO should be contacted immediately</li>
<li>outside normal working hours, packages should be stored in a designated, secure location</li>
</ul>  <p>The policy for storing sealed sources should specify that sources shall be stored in:</p>
<ul>
<li>the room specified in the CNSC licence that complies with the requirements of the <em>Nuclear Security Regulations</em> and is accessible to authorized facility staff only</li>
<li>the appropriately shielded container or enclosure</li>
</ul>  <p>The policy for transferring sealed sources should specify that:</p>
<ul>
<li>sources can only be transferred to another CNSC licensee authorized to possess this nuclear substance</li>
<li>any workers handling the source transfer container shall have training in Transportation of Dangerous Goods (TDG)</li>
<li>transfer of sources shall be done in compliance with the <em>Packaging and Transport of Nuclear Substances Regulations</em></li>
</ul>  <p>Additional information can be found in the CNSC document INFO-0744, <em>Guidelines for Handling Packages Containing Nuclear Substances</em>, available on the <a href="http://www.nuclearsafety.gc.ca/eng/">CNSC&#39;s website</a>.</p>
<h5>D.2.10 Post-treatment patient survey &ndash; brachytherapy remote afterloader</h5>  <p>Submit the policy and the procedure ensuring that after treatment patients are free of nuclear substance.</p>
<p>The policy should specify:</p>
<ul>
<li>the obligation to survey every patient following a treatment with a brachytherapy remote afterloader to ensure there is no residual activity within the patient</li>
<li>the job title of the person responsible for surveying the patient</li>
</ul>  <p>The procedure should describe:</p>
<ul>
<li>the type and model of the surveying instrument</li>
<li>the job title of the person responsible for maintaining survey records</li>
</ul>
<h5>D.2.11 Post-implant accounting of sources</h5>  <p>Submit the procedure used to account for manual brachytherapy sources following permanent implants and, for temporary implants, for the recovery of the sources following the treatment.</p>  <p>The procedure should describe the method used for:</p>
<ul>
<li>verifying that the number of sources implanted and spare sources remaining after the implant correspond to the pre-implant source inventory</li>
<li>recovering all sources used in temporary implants</li>
<li>verifying that all non-implanted sources are collected thus ensuring that they will not leave the procedure room</li>
</ul>
<h5>D.2.12 Instructions to patients following an implant</h5>  <p>Submit the instruction sheet given to patients implanted with manual brachytherapy sources and to their families. The instructions should cover:</p>
<ul>
<li>how to respond when a source is expelled from the body; i.e., "passed source"</li>
<li>how to reduce radiation exposures to others, including caregivers</li>
<li>how to respond to radiation alarms at airports and border crossings</li>
<li>the limitation or prohibition of cremation as specified in provincial regulations</li>
<li>the job title of the person to contact if patients or their families have questions</li>
</ul>
<h5>D.2.13 Control of patient treatment rooms</h5>   <p>Submit the policy regarding the room where patients undergoing manual brachytherapy treatments are hospitalized.</p>   <p>The policy should ensure that:</p>
<ul>
<li>the room is equipped with a private washroom</li>
<li>access to the room is restricted</li>
<li>radiation warning signs and the name of an emergency contact person are posted</li>
<li>the radiation dose rate in occupied areas adjacent to the room does not exceed 2.5&micro;Sv/h</li>
<li>the room will not be released for cleaning or reoccupation, until a survey of the room shows that no nuclear substance is present</li>
</ul>
<p>Any proposal that deviates from the above requirements will be assessed by the CNSC and may be approved if it demonstrates that it achieves an equivalent level of safety.</p>
<h5>D.2.14	Fire response</h5>   <p>Submit the plan to familiarize the responding fire department with facility operation and its potential hazards.</p>   <p>The plan should include details of the training given to fire department staff and the familiarization tours made with them to ensure they are prepared to deal with credible fire scenarios at the facility.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="PartD.3"></div>
<h4 id="PartD-3">D.3 Human performance management</h4>  <h5>D.3.1 Qualifications and duties of workers</h5>  <p>Submit the policy on the qualifications and duties of workers.</p>  <p>The policy should specify:</p>
<ul>
<li>the qualification requirements for each job category, in terms of:
<ul>
<li>education</li>
<li>training</li>
<li>experience</li>
</ul></li>
<li>the proposed responsibilities and duties of workers in each job category</li>
</ul>   <p>Submit a list of all job categories of workers who will be operating or servicing the prescribed equipment or handling the nuclear substances encompassed by the licence.</p>   <p>The applicant shall demonstrate that its workers have the appropriate qualifications and are formally authorized to operate or service the Class II prescribed equipment and to handle nuclear substances.</p>
<h5>D.3.2 Training program</h5>  <p>Submit the proposed training program for workers.</p>  <p>The applicant shall demonstrate that all workers understand the hazards associated with the licensed activities and that they will take all reasonable precautions to ensure their own safety, the safety of other persons at the site of the licensed activity, the protection of the environment, the protection of the public and the maintenance of the security of nuclear facilities and of nuclear substances. The training should be commensurate with the role of the worker.</p>  <p>The authorization of workers should be contingent on the successful completion of initial and ongoing refresher training. Operating staff shall receive radiation safety training as well as training on the operating procedures specific to each type of Class II prescribed equipment or to the nuclear substance. Any significant change to operating procedures should require re-training in the use of the changed procedures.</p>  <p>The training program should include the following elements:</p>  <h6>Responsibilities</h6>
<ul>
<li>The job title of the persons responsible for:
<ul>
<li>preparing, verifying and maintaining the content of the program</li>
<li>approving the content of the program</li>
<li>the training delivery and the verification of comprehension</li>
</ul></li>
</ul>  <h6>Training delivery methods</h6>
<ul>
<li>Training delivery may consist of:
<ul>
<li>formal classroom training</li>
<li>supervised hands-on training</li>
<li>Web-based training</li>
<li>self-study</li>
<li>job shadowing</li>
</ul></li>
</ul>  <p>Training may be delivered by the applicant or a third party such as a vendor.</p>  <h6>Verification of comprehension</h6>  <p>Once the training has been completed, a qualified person should verify comprehension and formally sign off on it.</p>  <p>Verification methods may consist of:</p>
<ul>
<li>written or online tests</li>
<li>demonstration of competency</li>
<li>quizzes</li>
<li>oral assessment</li>
</ul>  <h6>Refresher training frequency</h6>
<ul>
<li>Refresher training should be provided at a regular frequency or:
<ul>
<li>following the identification of a gap in knowledge</li>
<li>following a significant change in technology</li>
<li>following a change in operating or servicing procedures</li>
<li>when workers are assigned to roles different from their normal ones</li>
<li>when a worker returns from an extended absence from the position</li>
</ul></li>
</ul>  <p>Note: Hands-on emergency exercises should be practised at least annually.</p>  <h6>Records</h6>
<ul>
<li>The following records shall be maintained for each worker:
<ul>
<li>training completion</li>
<li>verification of comprehension</li>
</ul></li>
</ul>  <p>Additional guidance for developing a training program can be found in REGDOC-2.2.2, <em>Personnel Training</em>. This document is available on the <a href="http://www.nuclearsafety.gc.ca/eng/">CNSC&#39;s website</a>.</p>  <h6>D.3.2.1 Training program &ndash; Operational procedure content</h6>  <p>Submit a list of the safety-related topics to be included in the operational procedure training.</p>
<ul>
<li>Safety-related topics may include:
<ul>
<li>daily verification of safety system operational capability</li>
<li>security of prescribed equipment, including access control</li>
<li>response to equipment malfunction, including location and use of emergency stops and other safety equipment</li>
<li>interlock bypass procedures</li>
</ul></li>
</ul>  <h6>D.3.2.2 Training program &ndash; Radiation safety training content</h6>  <p>Submit an overview of the radiation safety training content.</p>   <p>Applicants should not assume that the radiation safety training workers may have obtained elsewhere is adequate for their operations. Applicants should provide site- and task-specific radiation safety training to all new employees. This training should be tailored to the educational background and practical needs of those attending. Auxiliary personnel, such as clerical, janitorial, maintenance and security staff, should also be instructed in basic concepts of radiation safety. More information on developing radiation safety training content can be found in REGDOC-2.2.2, <em>Personnel Training</em>. This document is available on the <a href="http://www.nuclearsafety.gc.ca/eng/">CNSC&#39;s website</a>.</p>  <h6>D.3.2.3	Training program &ndash; Transport of dangerous goods (TDG) training content</h6>  <p>Submit an overview of the TDG training and the list of the categories of workers to be trained.</p>  <p>Staff involved in the packaging, shipping or receiving nuclear substances shall be trained in the relevant requirements of Transport Canada&#39;s <em>Transportation of Dangerous Goods Regulations</em>, and shall possess a valid TDG certificate.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="PartD.4"></div>
<h4 id="PartD-4">D.4 Waste management</h4>  <h5>D.4.1	Management of radioactive and other hazardous wastes</h5>  <h6>Radioactive waste</h6>  <p>Submit a list of any radioactive waste or activated component to be handled, transferred or disposed of as a result of the licensed activities, including the following:</p>
<ul>
<li>isotope name of the nuclear substances</li>
<li>activity (in Bq)</li>
<li>description of activated component</li>
<li>weight or volume of the waste or both</li>
<li>physical or chemical form of the nuclear substances in the waste</li>
</ul>  <p>Submit the procedures for handling, transferring and disposing of radioactive waste. The following disposal methods may be authorized:</p>
<ul>
<li>storing for radioactive decay</li>
<li>returning to the supplier</li>
<li>transferring to a facility possessing an appropriate Commission licence</li>
<li>any other waste disposal method proposed shall be justified</li>
</ul>  <h6>Other hazardous waste</h6>  <p>Submit a list of non-radioactive hazardous substances to be handled and, for each substance include:</p>
<ul>
<li>the name of the substance</li>
<li>the quantity</li>
<li>the physical or chemical form</li>
<li>the nature of the hazard associated with the substance</li>
</ul>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="PartD.5"></div>
<h4 id="PartD-5">D.5 Security</h4>  <h5>D.5.1 Access control and physical security</h5>  <p>Submit the policy for restricting access to nuclear substances and Class II prescribed equipment outside normal working hours to authorized workers only.</p>  <p>The policy should specify:</p>
<ul>
<li>the requirement to store all Class II prescribed equipment and nuclear substances in locked areas, rooms or enclosures when not in use or when not under the direct supervision of authorized staff</li>
<li>the measures in place to prevent unauthorized access to those rooms, areas or enclosures</li>
<li>the measures to control access to radioactive material and sources destined for disposal</li>
<li>the job titles of the persons who may have unrestricted access outside working hours to rooms containing nuclear substances or prescribed equipment</li>
</ul>  <h6>D.5.1.1 Access control and security &ndash; High- and medium-risk sources</h6>
<div className="col-md-12 mrgn-bttm-0 well">  <div className="col-md-2  text-center text-center mrgn-bttm-0 mrgn-tp-sm">
<img src="/images/1.4.1-ex.png" className="image-actual mrgn-tp-lg" alt="" />  </div>  <div className="span-5  mrgn-bttm-0 ">  <p>Details of the security program are considered prescribed information and may only be transmitted by secure means such as mail. Unencrypted email submission of this information is prohibited. Guidance for the protection and transmission of prescribed information can be found in REGDOC-2.12.3, <em>Security of Nuclear Substances: Sealed Sources</em>.</p>  </div>  </div>  <div className="clear"></div>
<p>Additional security measures are required for medium and high risk sealed sources (IAEA categories 1 to 3). Unlike sealed sources dealt with in the Sealed Sources Tracking System and whose activity is the individual source activity, the activity of categories 1 to 3 sources is determined by their aggregate activity. <a href="#AppI">Appendix I: Categorization of Sealed Sources</a> contains information on the categorization of sources and their activity.</p>  <p>The security program for these sources should include provisions for detecting, delaying and responding to security threats. The following items shall be addressed in the security program:</p>
<ul>
<li>facility security plan</li>
<li>maintenance and testing of the intrusion detection systems</li>
<li>access control</li>
<li>response protocol</li>
<li>security awareness training</li>
<li>personal trustworthiness and reliability</li>
<li>if applicable, transport security</li>
</ul>  <p>In the application, state that the security program for medium- and high-risk sealed sources has been submitted securely to the CNSC.</p>
<h5>D.5.2	Inventory control</h5>  <p>Submit the policy and the procedure for inventory control.</p>  <p>The applicant shall maintain a current inventory of sealed sources or other nuclear substances in its possession. Its purpose is to alert the applicant if any source or nuclear substance is missing, stolen or unaccounted for.</p>  <p>The policy should specify:</p>
<ul>
<li>the requirement to keep a current inventory of sealed sources and other nuclear substances in the applicant&#39;s possession</li>
<li>the job title of the person responsible for maintaining the inventory up to date</li>
<li>the requirement to have the inventory available for inspection</li>
<li>the requirement to verify periodically the validity of the inventory by visual confirmation</li>
</ul>  <p>For each source, the procedure should describe:</p>
<ul>
<li>the name, quantity, form of the nuclear substance in the source and its location (room number)</li>
<li>the serial number of the source</li>
<li>if applicable, the source country of origin</li>
<li>the date the source was received</li>
<li>the name, address and licence number of the supplier</li>
<li>the job title of the person responsible for the secure storage, inventory verification and safe use of each source</li>
</ul>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="PartD.6"></div>
<h4 id="PartD-6">D.6 Packaging and transport</h4>  <h5>D.6.1 Packaging and transport of nuclear substances</h5>  <p>Submit the policy and procedures for packaging and transport of nuclear substances.</p>  <p>Packaging and transport of nuclear substances shall comply with the relevant requirements of Transport Canada&#39;s <em>Transportation of Dangerous Goods Regulations</em> and the CNSC <em>Packaging and Transport of Nuclear Substances Regulations</em>.</p>  <p>The policy should specify:</p>
<ul>
<li>the obligation to comply with the applicable requirements of Transport Canada and CNSC regulations listed above</li>
<li>the job title of the person responsible for ensuring compliance with those regulations</li>
<li>that only persons with a valid TDG certificate are authorized to receive, ship or handle packages containing nuclear substances</li>
</ul>  <p>The procedure should describe:</p>
<ul>
<li>the safety instruction to be followed when handling packages containing nuclear substances</li>
<li>the requirement to:
<ul>
<li>inspect packages for damage or leakage</li>
<li>measure dose rates at the package surface and at one meter from the unopened package</li>
<li>store the package in a secure area upon its arrival or when waiting to be shipped</li>
<li>verify that the shipping documents correspond to the content of the package</li>
</ul></li>
<li>if applicable, the requirement to complete the “Shipper Declaration for Dangerous Goods” form required for air transport</li>
<li>the job title of the person responsible for maintaining shipping document records</li>
</ul>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="PartD.7"></div>
<h4 id="PartD-7">D.7 Fitness for service</h4>  <h5>D.7.1 Fitness-for-service program</h5>  <p>Submit the policy to ensure that equipment, components and systems are operational.</p>   <p>Failure of any equipment or component should result in their being removed from service until they have been repaired and shown that they are again operational.</p>  <p>The policy should apply to equipment, components or systems that:</p>
<ul>
<li>have undergone extensive servicing</li>
<li>were involved in accidents or operated under conditions more severe than their design operating conditions</li>
<li>require periodic monitoring or calibration</li>
<li>are part of a safety system including, if applicable:
<ul>
<li>the LPO activation switch</li>
<li>the door interlock</li>
<li>any other switch, sensor, or additional door interlock, which are to be incorporated into the entrance interlock and LPO circuit</li>
<li>any irradiator state indictor</li>
<li>any pre-irradiation alarm</li>
<li>any emergency stop devices</li>
<li>the viewing system</li>
<li>any interlock that has been bypassed</li>
</ul></li>
<li>are part of a radioisotope release monitoring and containment system</li>
<li>are part of a ventilation monitoring system</li>
<li>are part of a personnel contamination monitoring system</li>
<li>are part of a pulse dose rate brachytherapy remote afterloader alarm system</li>
<li>are sealed sources and nuclear substances used for shielding</li>
<li>requires discontinuing their use following a failure to operate as intended</li>
</ul>  <h6>D.7.1.1	Post-servicing verification</h6>  <p>Submit the procedure to be followed to ensure that the prescribed equipment is safe for use after servicing.</p>   <p>The procedure should describe:</p>
<ul>
<li>the tests, measurements, verifications and analyses required to confirm that the equipment is safe for use</li>
<li>the obligation to have a documented, independent review and sign-off to attest that the equipment was correctly repaired before being released for use after servicing</li>
<li>the job title of the person qualified to approve the return of the equipment to normal use</li>
<li>the job title of the person responsible for maintaining records of the servicing and approvals</li>
</ul>  <h6>D.7.1.2	Verification following accident</h6>  <p>Submit the procedure to return to service equipment that was involved in an accident or that was operated under conditions more severe than its design operating conditions.</p>  <p>The procedures should describe:</p>   <ul>
<li>the accidents or abnormal conditions that would require discontinuing the use of the equipment</li>
<li>the tests and inspections required to verify that the equipment is operational</li>
<li>the job title of the person qualified to approve the return of the equipment to normal use</li>
<li>the job title of the person responsible for maintaining records of the verifications and approvals</li>   </ul>  <h6>D.7.1.3 Stack monitor calibration</h6>   <p>Submit the procedure for calibrating stack monitors and to correlate count rates to equivalent activities in Bq.</p>  <p>The procedure should describe:</p>
<ul>
<li>the maintenance and mechanical checks of the exhaust system required</li>
<li>the requirements to:
<ul>
<li>calibrate annually the stack monitor system and the detectors</li>
<li>test annually the algorithm correlating stack detector count rate to actual</li>
</ul></li>
<li>the calibration of the air flow monitoring system</li>
<li>the verification that the stack detectors have been calibrated in the last 12 months</li>
<li>the verification of the alarm set points for air flow rates</li>
<li>the verification of the dose alarm threshold related to the radioactive releases</li>
<li>the description of the type and amount of radioactive material that is released during the calibration</li>
<li>the job title of the person responsible for maintaining records of the results of the annual stack monitor calibration</li>
</ul>  <h6>D.7.1.4	Leak testing</h6>  <p>Submit the procedure for leak-testing of sealed sources and of nuclear substances used as shielding.</p>  <p><em>The Class II Nuclear Facilities and Prescribed Equipment Regulations</em> require licensees who possess or use sealed sources containing 50 MBq or more of a nuclear substance or use nuclear substances as shielding to conduct leak tests.</p>  <p>In addition to detailed technical instruction for leak test sampling and measurement, the procedure should describe:</p>
<ul>
<li>the nuclear substances used as shielding and their location</li>
<li>the method used to determine if the shielding components are safe and fit for continued operation</li>
<li>the frequency of leak tests</li>
<li>the circumstances that would require a leak test</li>
<li>the sampling technique, including:
<ul>
<li>the tools used</li>
<li>the locations where swipes will be taken</li>
<li>the safety precautions to keep radiation exposure to staff ALARA during sampling</li>
</ul></li>
<li>the detection instruments including:
<ul>
<li>manufacturer, model, radiation types detected, useable energy range</li>
<li>tests or calculations which demonstrate that the instrument can detect 200 Bq or less of the isotopes of interest</li>
<li>the algorithm or correction factor used to convert swipe measurement results to activity in Bq</li>
</ul></li>
<li>the actions to be taken if the nuclear substance is found to be leaking</li>
<li>the job title of the person responsible for maintaining records of leak tests results</li>
<li>if a commercial leak testing service is used, the name and contact information of the company performing the tests</li>
</ul>  <h6>D.7.1.5 Safety systems</h6>  <p>For equipment whose safety systems failed to operate, submit the procedure to return it to service.</p>  <p>The procedure should describe:</p>
<ul>
<li>the safety systems whose failure to operate would require discontinuing the use of the equipment</li>
<li>the methods in place to alert staff of the intended bypass, or of a malfunction of a safety system</li>
<li>the tests and inspections required to verify that the safety systems are operational</li>
<li>the methods to notify staff that the malfunction has been repaired or the bypass has been restored</li>
<li>the job title of the person qualified to approve the return of the equipment to normal use</li>
<li>the job title of the person responsible for maintaining records of the verifications and approvals</li>
</ul>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="PartE"></div>
<h3 id="PartE">PART E: Routine Operation and Confirmation of Facility Design</h3>  <p>This part describes the information the applicant should submit including, the policies identifying who may operate or service the facility prescribed equipment, the equipment start up and shut down procedures, the methods and equipment for performing radiation surveys, if applicable, the procedures for isotope production and processing, the results of safety system tests and radiation surveys, and the emergency procedures.</p>  <p>If not already submitted, provide the information listed in the following two sections when requesting a routine operation amendment of an existing operating to commission licence.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="PartE.1"></div>
<h4 id="PartE-1">E.1 Routine Operation</h4>  <h5>E.1.1 Operating procedures &ndash; General</h5>  <p>Submit the facility operating procedures.</p>   <p>These procedures should describe:</p>
<ul>
<li>the job titles of the persons who may operate or service the prescribed equipment. Only qualified and authorized personnel should operate or have access to the prescribed equipment and radiation areas</li>
<li>the methods, equipment and instructions for performing radiation surveys, including:
<ul>
<li>the frequency of the surveys</li>
<li>the location where surveys should be performed</li>
</ul></li>
<li>the daily start-up, warm-up and shutdown of equipment and radiation on/off protocols</li>
<li>if applicable, the instructions to staff to ensure that no one, other than a patient being treated, is in the room when the radiation is on</li>
</ul>  <h6>E.1.1.1 Operating procedures &ndash; Isotope production facilities</h6>  <p>In addition to the applicable requirements in section E.1.1, submit the procedures to be followed in the event of a failure of the ventilation system and for the periodic review of stack release monitor data.</p>
<h5>E.1.2 Processing procedures &ndash; Isotope production facilities</h5>  <p>In addition to the applicable requirements in section E.1.1, submit the procedures for processing isotopes, including:</p>
<ul>
<li>the list of the radioisotopes processed</li>
<li>the description of:
<ul>
<li>the provisions to prevent spills and mitigate their effects</li>
<li>the methods and equipment used for contamination control</li>
<li>the methods and instruments for performing contamination surveys, including the frequency of surveys</li>
<li>the means of transferring finished product out of containment</li>
<li>the means used to remove radioactive or other hazardous waste from containment</li>
<li>the provisions for container labeling</li>
</ul></li>
</ul>
<h5>E.1.3 Geophysical logging accelerator &ndash; Operating instructions</h5>  <p>Submit the instructions to workers for the safe operation of the accelerator. These instructions should include:</p>
<ul>
<li>the description of:
<ul>
<li>the specific tools that may be used e.g. remote handling tools</li>
<li>the procedure used in unusual circumstances, such as tool fishing</li>
<li>the inspection and verification program for the equipment encompassed by the licence</li>
<li>the field operations</li>
<li>the safety instructions and emergency procedures</li>
</ul></li>
</ul>
<h5>E.1.4 Emergency procedures &ndash; General</h5>  <p>Submit the procedures used in the event of a radiological emergency that may result in radiation exposures to staff or the public, contamination with nuclear substances, or both.</p>   <p>Prompt and proper action is a prime factor to limit the damage which may result from a radiological accident.</p>  <p>The emergency procedures should describe:</p>
<ul>
<li>the job title of the persons responsible for identifying and directing remedial actions</li>
<li>the location of emergency equipment and the instructions for their use</li>
<li>if applicable, the provisions for:
<ul>
<li>evacuating the immediate area of the incident and controlling entry to the site</li>
<li>limiting radiation doses to facility staff</li>
<li>limiting the spread of contamination</li>
<li>monitoring any potential release from the site</li>
<li>identifying, isolating and treating workers or other persons who may be contaminated or may have received high radiation doses</li>
<li>detecting or estimating the quantity of nuclear substances involved</li>
<li>decontaminating the site, equipment, workers and other persons</li>
<li>recording the details of the emergency and notifying the Commission pursuant to regulatory requirements</li>
</ul></li>
</ul>  <h6>E.1.4.1 Emergency procedures &ndash; Medical facilities</h6>  <p>In addition to the applicable procedures listed in section E.1.4, for teletherapy machines, high dose rate (HDR) and pulsed dose rate (PDR) brachytherapy afterloaders, submit the procedure for dealing with a stuck source.</p>   <h6>E.1.4.2 Emergency procedures &ndash; Isotope production accelerator facilities</h6>  <p>In addition to the applicable procedures listed in section E.1.4, submit the procedures addressing the following situations:</p>
<ul>
<li>a malfunction of the accelerator</li>
<li>the loss of containment of isotopes during production or processing, following a target failure, rupture of transfer lines, and laboratory spills</li>
<li>fires</li>
<li>spills of toxic chemicals</li>
<li>lost or stolen nuclear substances</li>
<li>accidental radiation exposures to facility staff or the public</li>
</ul>  <h6>E.1.4.3	Emergency procedures &ndash; Geophysical logging accelerator</h6>  <p>In addition to the applicable procedures listed in section E.1.4, submit the procedures covering:</p>
<ul>
<li>recovering borehole logging tools and sources, by fishing them out</li>
<li>abandoning logging tools and sealed sources when they cannot be recovered</li>
<li>maintaining a list of the available emergency equipment and of emergency contacts</li>
</ul>
<h5>E.1.5 Safety system verification</h5>  <p>Submit the procedure which addresses the verification of safety system and control mechanisms.</p>  <p>The procedure should describe:</p>
<ul>
<li>the steps required in performing the tests</li>
<li>the frequency of tests (test frequencies should meet or exceed industry standards)</li>
<li>the job title of the persons responsible for performing the tests</li>
<li>the checklist or other recording formats used for recording test results</li>
<li>the course of action when a malfunction is detected</li>
</ul>  <h6>E.1.5.1	Safety system verification &ndash; Robotic arm radiotherapy</h6>  <p>In addition to the applicable procedures specified in E.1.5, submit:</p>
<ul>
<li>the procedure to verify that this equipment is operational following a bypass release</li>
<li>if applicable, the procedure to verify the integrity of the virtual beam stops</li>
</ul>
<h5>E.1.6 Special instructions for nursing staff &ndash; Pulsed dose rate brachytherapy facilities</h5>  <p>Submit the special instructions for nursing staff at Pulsed Dose Rate (PDR) brachytherapy facilities including:</p>
<ul>
<li>the general safety instructions and precautions to be followed to ensure that exposure of nursing staff to radiation is kept ALARA</li>
<li>the instructions in the event of a fault or an interruption in the treatment</li>
<li>the radiation safety instructions when responding to medical emergencies of PDR patients such as cardiac or respiratory arrests</li>
</ul>
<h5>E.1.7 Servicing procedures</h5>  <p>For each make and model of Class II prescribed equipment encompassed by the servicing or the consolidated licence, submit the servicing procedures, including the procedures for ensuring the safety of servicing personnel.</p>
<h5>E.1.8 Requirements for licensees who do not have a prescribed equipment servicing licence</h5>  <p>Extensive servicing of Class II prescribed equipment can only be performed under a CNSC Class II prescribed equipment servicing licence or a consolidated licence, which lists the manufacturer and model of the equipment being serviced. However, even if the applicant does not intend to obtain a licence to service, some types of routine maintenance are still permitted subject to CNSC approval. In this case, submit the following information:</p>
<ul>
<li>a description of the routine maintenance activities which the applicant intends to perform on Class II prescribed equipment; identify any operation which may require bypassing or overriding any internal or external safety interlock, including software interlocks</li>
<li>a description of the conditions under which this maintenance may be performed, including who is authorized to perform it</li>
<li>if any proposed maintenance procedure requires the intentional bypass of an interlock, submit the proposed policy for bypassing the interlock, specifying:
<ul>
<li>the job title of the persons responsible for authorizing the bypass</li>
<li>the requirement to keep a record of the bypass</li>
<li>the requirement to post a warning sign at the control console if bypassing any safety system listed in section H</li>
<li>the requirement to remove the bypass and test the operation of the interlock prior to returning the equipment to normal use</li>
</ul></li>
</ul>
<h5>E.1.9 Perimeter access control for temporary work sites &ndash; mobile or portable accelerators</h5>  <p>Submit the procedure to restrict access to any controlled area in which the dose rate could exceed 0.1mSv/hr during operation of the mobile or portable accelerator.</p>
<p>The procedure should include:</p>
<ul>
<li>the requirement to install a barrier and to post a sufficient number of durable and legible signs along the barrier that bear the radiation warning symbol set out in Schedule 3 to the <em>Radiation Protection Regulations</em> and the words "<span lang="fr">RAYONNEMENT</span> &ndash; DANGER &ndash; RADIATION"</li>
<li>the description of the steps taken to minimize radiation exposures to staff if their movement cannot be controlled by the barrier</li>
</ul>
<h5>E.1.10	Portable shielding</h5>  <p>Submit the policy which ensures the portable shield is used and placed correctly before each treatment.</p>  <p>The policy should specify that a survey shall be performed to identify the position of the portable shield which results in dose rates in unrestricted area not greater than those for members of general public.</p>  <p>If portable shielding is used specify the size, thickness, and composition of the shielding.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="PartE.2"></div>
<h4 id="PartE-2">E.2 Confirmation of facility design implementation</h4>  <h5>E.2.1 Confirmation of safety system functionality</h5>  <p>Submit a report showing the results of the commissioning tests performed to verify that all safety systems are operational. If any safety device was found non-operational, the report should include a description of the remedial actions taken and the subsequent tests performed to confirm that the malfunction has been corrected. The report should include the results of the tests performed on:</p>
<ul>
<li>if applicable, the door interlock and LPO time delay circuit</li>
<li>the irradiation status indicators</li>
<li>if applicable, the pre-irradiation alarm</li>
<li>the emergency stop devices</li>
<li>the area monitors and alarms</li>
<li>if applicable, all components of the radioactive release monitoring and containment systems</li>
<li>for robotic arm medical accelerators, the door interlock following bypass release</li>
<li>for self-shielded cyclotrons any interlock or device designed to verify proper closure of the cyclotron shielding or to monitor its integrity</li>
<li>any other safety interlock incorporated into the facility</li>
</ul>
<h5>E.2.2 Radiation survey</h5>  <p>Submit the results of the radiation survey including:</p>
<ul>
<li>the prescribed equipment operating conditions</li>
<li>the make, model, serial numbers and calibration date for each radiation survey instrument used</li>
<li>the measurements of photon and, if required, neutron radiation</li>
<li>the locations on the facility plans and drawings where measurements were taken</li>
<li>a re-evaluation of the projected annual doses to staff and the general public given in section B.1.5 based on the measured dose rates; if the dose rates in any area exceed those estimated in the original shielding design, describe the remedial actions taken to reduce the doses that could potentially be incurred by persons occupying the area (those actions may include adding shielding, having access restrictions or controls, reducing the proposed workload, or demonstrating that the resulting doses are still ALARA and no remedial action is required)</li>
<li>for isotope production and research accelerators, the target material irradiated during the survey</li>
</ul>
<h5>E.2.3 Commissioning results &ndash; Isotope processing facilities</h5>  <p>Submit a report containing:</p>
<ul>
<li>the confirmation that the processing facilities have been built according to the specifications listed in the CNSC&#39;s design assessment form for nuclear substance laboratories and nuclear medicine rooms. Proposed design changes to correct flaws discovered during the commissioning phase shall be submitted to CNSC staff for evaluation and approval</li>
<li>the results of the tests performed on any interlock or other safety system associated with the hot cells or other processing equipment</li>
<li>the results of the stack monitor calibration</li>
<li>the confirmation that the ventilation system is operational</li>
<li>the results of the radiation survey to verify the adequacy of the shielding incorporated into the hot cells and along the transfer lines</li>
<li>an evaluation of anticipated extremity doses</li>
</ul>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="PartF"></div>
<h3 id="PartF">PART F: Decommissioning</h3>  <p>This part of the document describes the information the applicant shall submit including, an overview of the proposed decommissioning plan, the training and qualifications of personnel involved in the decommissioning, an estimate of the type and activities of nuclear substances remaining at the end of operation, the resulting radiation doses, the methods for disposing the prescribed equipment and the nuclear and hazardous substances and the final state of the facility.</p>  <p>The application for a licence to decommission a facility shall demonstrate that there is a clearly defined and appropriate plan of action for decommissioning both the prescribed equipment and the associated facilities such as isotope processing facilities. The plan should include the measures taken to ensure that staff participating in the decommissioning work will have the supervision, training and equipment needed to perform their duties in a safe manner.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="PartF.1"></div>
<h4 id="PartF-1">F.1 Decommissioning plan</h4>  <h5>F.1.1 Overview of decommissioning plan</h5>  <p>Submit an overview of the decommissioning work, including:</p>
<ul>
<li>a list of the land, buildings, structures, components, systems, equipment, nuclear and hazardous substances that will be affected by the decommissioning</li>
<li>a decommissioning schedule</li>
<li>a description of the effects, if any, on the environment and the health and safety of persons that may result from the decommissioning, and the measures that will be taken to prevent or mitigate those effects</li>
<li>a description of the planned state of the site upon completion of the decommissioning. Specify whether any radioactive material, contamination or hazardous substance will remain on-site after the decommissioning</li>
</ul>
<h5>F.1.2 Personnel qualifications and training</h5>  <p>Submit the following information:</p>
<ul>
<li>the job title of the person responsible for planning and supervising the decommissioning activities; if this person is not the RSO named in section B.1.1, describe the person&#39;s training, experience, position and responsibilities in the facility&#39;s organization</li>
<li>the proposed responsibilities, qualifications and training requirements for workers participating in decommissioning activities; if the applicant is contracting out any part of the decommissioning work, provide the name and contact information of the contracting firm and specify how the applicant will ensure that contract personnel have received a radiation safety training commensurate with the work they will be performing</li>
<li>a Class II prescribed equipment servicing licence is required to dismantle prescribed equipment; include the licence number under which this work is being performed and the job title of the person supervising this aspect of the decommissioning if this person is not the RSO</li>
</ul>
<h5>F.1.3 Estimate of types, activities and radiation doses from nuclear substances</h5>  <p>Submit a description of the nature, type and activity of any nuclear substance or contamination at the facility. Submit a list of open and sealed sources, of activated or contaminated items or components present at the time of decommissioning.</p>   <p>Based on that information, submit an estimate of the anticipated maximum dose rates persons may be exposed to and of the maximum dose of radiation that may be received by any person as a result of decommissioning.</p>
<h5>F.1.4 Disposal of Class II prescribed equipment, nuclear substances and hazardous materials</h5>  <p>Describe the disposal method of all major components of the prescribed equipment that will be used. If the applicant intends to transfer the entire equipment or any of its major components to another institution where they could be reused, provide the name and contact information of the recipient.</p>  <p>Specify the disposal method for all nuclear substances and activated components that will be used. See <a href="#AppJ">Appendix J: Disposal of Activated Components</a> for required waiting times prior to the disposal of activated components for certain models of accelerators. Specify the disposal method for potentially hazardous material, such as SF6. If these substances will be released into the environment, specify the maximum quantities and concentrations that may be released. Confirm that all releases of nuclear substances will be in compliance with the limits specified in the <em>Nuclear Substances and Radiation Devices Regulations</em>. If the applicant intends to transfer nuclear substances or activated components to another licensee, provide the licensees name, address and licence number.</p>
<h5>F.1.5 Disposal of Class II prescribed equipment, nuclear substances and hazardous materials &ndash; Isotope production accelerator facilities</h5>  <p>Describe the proposed methods of disposal of all major components of the processing facilities, including the hot cells. Specify the proposed measures to control releases of nuclear substances and hazardous substances into the environment.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="PartG"></div>
<h3 id="PartG">PART G: Licence renewal</h3>  <p>This part of the document describes the information the applicant should submit including, a summary of the most recent dosimetry results for its workers, the sealed source inventory, the reportable events that occurred in the previous licence period, a summary of the facility workload, the results of the most recent radiation survey and a summary of the number and types of servicing operations on the equipment during the previous licence period.</p>  <p>This section outlines the information the applicant should submit to renew an existing Class II nuclear facility licence. Most of the information required essentially updates key elements of the information submitted in previous licence applications.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="PartG.1"></div>
<h4 id="PartG-1">G.1 Licence renewal information</h4>  <h5>G.1.1 Radiation dose summary</h5>  <p>Submit a report summarizing the annual dosimetry results for all monitored workers for the previous five years. Where groups of monitored workers have significantly different exposures, the summary should group similar job types, types of exposure, nuclear substances handled, or work locations. Specify the dosimetry service used.</p>  <p>For the summary, report the number of persons who receive an annual effective dose in each of the following ranges:</p>
<ul>
<li>&lt;&nbsp;0.5 mSv</li>
<li>&ge;&nbsp;0.5 mSv but &lt;&nbsp;1.0 mSv</li>
<li>&ge;&nbsp;1.0 mSv but &lt;&nbsp;5.0 mSv</li>
<li>&ge;&nbsp;5.0 mSv but &lt;&nbsp;20.0 mSv</li>
<li>&ge;&nbsp;20.0 mSv</li>
</ul>  <p>If applicable, also report the number of persons who receive an extremity dose in each of the following ranges:</p>
<ul>
<li>&lt;&nbsp;50 mSv</li>
<li>&ge;&nbsp;50 mSv but &lt;&nbsp;100 mSv</li>
<li>&gt;&nbsp;100 mSv but &lt;&nbsp;200 mSv</li>
<li>&gt;&nbsp;200 mSv but &lt;&nbsp;500 mSv</li>
<li>&ge;&nbsp;500 mSv</li>
</ul>
<h5>G.1.2 Sealed sources acquired, transferred, or disposed of</h5>  <p>Submit a list of any sealed source that was acquired, transferred or disposed of during the previous licensing period.</p>  <p>The regulations require that acquisition, release and transfer records of sealed sources include the following:</p>
<ul>
<li>the name, activity and form of the sources acquired, transferred, or disposed of</li>
<li>the source model and serial number</li>
<li>the disposal method</li>
<li>date of receipt, transfer or disposal</li>
<li>the name, address and licence number of the supplier or the recipient</li>
</ul>  <h6>G.1.2.1	Nuclear substances or radioactive waste transferred or disposed of</h6>  <p>Submit a summary of nuclear substances and radioactive waste transferred, disposed of, released or abandoned in the previous licensing period.</p>  <p>For each substance or waste, report the quantities and the method of release, such as to municipal garbage systems, municipal sewers, the atmosphere or other methods.</p>  <p>The disposal records should show:</p>
<ul>
<li>the name, activity and form of the nuclear substance</li>
<li>the type of radioactive waste to be disposed of</li>
<li>the date of transfer or disposal</li>
<li>the disposal method</li>
<li>if applicable, the name, address and licence number for transfers to an organization having a waste nuclear substance licence</li>
</ul>
<h5>G.1.3 Sealed source inventory</h5>  <p>Submit an inventory of the sealed sources in the applicant&#39;s possession. Include sources in stock or storage, in use, or waiting for disposal. The inventory records shall include the following:</p>
<ul>
<li>the name of the nuclear substance in the source, its quantity, and form</li>
<li>the location where the source is stored</li>
<li>source model and serial number</li>
<li>the original intended use of the source</li>
</ul>
<h5>G.1.4 Reportable events</h5>  <p>Submit a summary of all events reported to the Commission pursuant to the NSCA, the regulations or the licence during the previous licensing period. Include the description of any remedial actions taken to prevent their recurrence.</p>
<h5>G.1.5 Occupancy review</h5>  <p>Submit an update of the information required in section B.1.5 of this guide regarding the purpose and occupancy of areas adjacent to the Class II nuclear facility. Highlight any change from the original facility design.</p>
<h5>G.1.6 Workload review</h5>  <p>Submit a summary of the prescribed equipment annual workload in the same format used in the construction licence application unless otherwise specified below.</p>  <h6>G.1.6.1 Operating workload &ndash; Medical and veterinary accelerators and teletherapy machines</h6>   <p>Specify the current total annual primary beam workload in centiGray (cGy) delivered at the isocentre and indicate the focus to axis or source-to-axis distance. For accelerators, if the total number of monitor units (MU) delivered differs significantly from the dose delivered at isocentre because of frequent use of intensity modulated radiation therapy (IMRT), or other beam modulation, also specify the total annual number of MU delivered.</p>
<p>Specify the maximum annual workload allowed for in the facility design. If the design workload is not available, as could be the case for teletherapy machines originally licensed prior to the year 2000, show the historical trend of the total workload for the past five years.</p>  <h6>G.1.6.2 Operating workload &ndash; Brachytherapy remote afterloaders</h6>  <p>Specify the current total annual workload for the brachytherapy remote afterloader. Refer to section B.1.3.2 for a description of suitable reporting formats for the workload of this equipment.</p>  <p>Specify the maximum annual workload allowed for in the facility design. If the design workload is not available, show the historical trend of the total workload for the past five years.</p>  <h6>G.1.6.3 Operating workload &ndash; Industrial and research facilities</h6>  <p>Specify the workload for each beam type, accelerating potential, beam current and target material. For irradiators, include the workload for the isotope used. Also provide the maximum annual workload allowed for in the facility design.</p>  <h6>G.1.6.4 Operating workload &ndash; Isotope production accelerator facilities</h6>  <p>List each parameter given in the summary table included with the application form. For each reaction and end product listed, also specify the maximum annual workload allowed for in the facility design.</p>
<h5>G.1.7 Radiation survey</h5>  <p>Submit the results of the most recent photon and neutron radiation surveys. The surveys should have been performed under the worst case conditions. The results should include drawings of the facility clearly showing the measurements points. Measurements should have been taken in each adjacent area of the facility listed in section B.1.2.</p>
<h5>G.1.8 Servicing operations</h5>  <p>Submit a report summarizing the number and types of servicing operations performed on prescribed equipment during the current licensing period.</p>
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
<h2 id="AppA">Appendix A: Licensing Expectations and Regulatory Requirement Cross-reference</h2>
<table className="table table-striped">  <tr>
<th>Section number</th>
<th className="text-center">Title</th>
<th className="text-center">Regulatory reference</th>  </tr>  <tr>
<td className="text-center">A.1.1</td>
<td>Type of request</td>
<td>GN.3.1(b)</td>  </tr>  <tr>
<td className="text-center">A.1.2</td>
<td>Language of licence</td>
<td>OLA.26</td>  </tr>  <tr>
<td className="text-center">A.1.3</td>
<td>Applicant information</td>
<td>GN.3.1(a)</td>  </tr>  <tr>
<td className="text-center">A.1.4</td>
<td>Proof of legal status</td>
<td>GN.3.1(a)</td>  </tr>  <tr>
<td className="text-center">A.1.5</td>
<td>Public access to information</td>
<td>ATIA.20</td>  </tr>  <tr>
<td className="text-center">A.1.6</td>
<td>Billing contact person</td>
<td>N.A.</td>  </tr>  <tr>
<td className="text-center">A.1.7</td>
<td>Financial guarantees</td>
<td>GN.3.1(l)</td>  </tr>  <tr>
<td className="text-center">A.1.8</td>
<td>Applicant or licensee representative</td>
<td>GN.15</td>  </tr>  <tr>
<td className="text-center">A.2.1</td>
<td>Licensed activities</td>
<td>GN.3.1(b)</td>  </tr>  <tr>
<td className="text-center">A.2.2</td>
<td>Principal location of use or storage or both &ndash; Facilities</td>
<td>GN.3.1(d), CII.3(e)</td>  </tr>  <tr>
<td className="text-center">A.2.3</td>
<td>Principal location of use or storage or both &ndash; Prescribed equipment</td>
<td>GN.3.1(d), CII.3(e)</td>  </tr>  <tr>
<td className="text-center">A.2.4</td>
<td>Principal location of use or storage or both &ndash; Manual brachytherapy</td>
<td>NSRD.3.1(d)</td>   </tr>  <tr>
<td className="text-center">A.2.5</td>
<td>Principal location of use or storage or both &ndash; Unsealed nuclear substances</td>
<td>NSRD.3.1(d)</td>  </tr>  <tr>
<td className="text-center">A.2.6</td>
<td>Other locations</td>
<td>GN.3.1(a), CII.3(e)</td>  </tr>  <tr>
<td className="text-center">A.3.1</td>
<td>Class II prescribed equipment</td>
<td>CII.3(c), CII.3(k), CII.4(e), CII.4(i), GN.3.1(d), CII.7(a), CII.10</td>  </tr>  <tr>
<td className="text-center">A.3.2</td>
<td>Nuclear substances – Sealed sources and activated components</td>
<td>CII.3(c), GN.3.1(c)</td>  </tr>  <tr>
<td className="text-center">A.3.3</td>
<td>Accelerator targets &ndash; Isotope production</td>
<td>GN.3.1(c), CII.3(c), CII.3(k)</td>  </tr>  <tr>
<td className="text-center">B.1.1</td>
<td>Facility plans and drawings</td>
<td>GN.3.1(d), CII.3(e), CII.3(h)</td>  </tr>  <tr>
<td className="text-center">B.1.2</td>
<td>Classification of adjacent areas</td>
<td>GN.3.1(d), CII.3(f)</td>  </tr>  <tr>
<td className="text-center">B.1.3</td>
<td>Workload &ndash; General</td>
<td>CII.3(n), CII.3(o), CII.4(p), CII.4(q)</td>  </tr>  <tr>
<td className="text-center">B.1.4</td>
<td>Design dose targets</td>
<td>CII.3(l), RP 4(a)</td>  </tr>  <tr>
<td className="text-center">B.1.5</td>
<td>Dose rates and annual dose calculations &ndash; General</td>
<td>CII.3(l), GN.3.1(i), CII.3(p)</td>  </tr>  <tr>
<td className="text-center">B.1.6</td>
<td>Evaluation of air activation and ozone production &ndash; Industrial electron beam accelerators and pool type irradiators</td>
<td>GN.3.1(i)</td>  </tr>  <tr>
<td className="text-center">B.1.7</td>
<td>Description of the isotope production targets</td>
<td>GN.3.1(c), CII.3(c), Cll.3(k)</td>  </tr>  <tr>
<td className="text-center">B.1.8</td>
<td>Description of the isotope processing facilities</td>
<td>NSRD.3.1(l)</td>  </tr>  <tr>
<td className="text-center">B.1.9</td>
<td>Description of radiochemical hot cells and processing stations</td>
<td>NSRD.3.1(a), NSRD.3.1(l)</td>  </tr>  <tr>
<td className="text-center">B.1.10</td>
<td>Transfer and processing of isotopes</td>
<td>NSRD.3.1(d), NSRD.3.1(l)</td>  </tr>  <tr>
<td className="text-center">B.1.11</td>
<td>Beam stops</td>
<td>CII.3(m), CII.4(j)</td>  </tr>  <tr>
<td className="text-center">B.1.12</td>
<td>Technical security measures</td>
<td>GN.3.1(g), GN.3.1(h)</td>  </tr>  <tr>
<td className="text-center">B.1.13</td>
<td>Additional requirements for pool type irradiators</td>
<td>Note 1</td>  </tr>  <tr>
<td className="text-center">B.1.14</td>
<td>Other design considerations &ndash; Isotope production facilities</td>
<td>CII.3(i)</td>  </tr>  <tr>
<td className="text-center">B.2.1</td>
<td>Door interlocks</td>
<td>CII.15.2, CII.15.3</td>  </tr>  <tr>
<td className="text-center">B.2.2</td>
<td>Irradiation state indicator</td>
<td>CII.15.5</td>  </tr>  <tr>
<td className="text-center">B.2.3</td>
<td>Pre-irradiation alarms</td>
<td>CII.4(n), CII.15.6</td>  </tr>  <tr>
<td className="text-center">B.2.4</td>
<td>Emergency stop btns or devices</td>
<td>CII.15.8, CII.15.9</td>  </tr>  <tr>
<td className="text-center">B.2.5</td>
<td>Radiation monitoring devices &ndash; General</td>
<td>CII.15.6</td>  </tr>  <tr>
<td className="text-center">B.2.6</td>
<td>Viewing system &ndash; Medical and veterinary facilities</td>
<td>CII.15.4</td>  </tr>  <tr>
<td className="text-center">B.2.7</td>
<td>Tools and equipment for stuck source emergencies &ndash; Brachytherapy remote afterloaders and teletherapy machines</td>
<td>CII.16.2(b), CII.16.2(c)</td>  </tr>  <tr>
<td className="text-center">B.2.8</td>
<td>Radioisotope release monitoring and containment &ndash; Isotope production facilities</td>
<td>GN.12.1(f), NSRD.3.1(b)(i)</td>  </tr>  <tr>
<td className="text-center">B.2.9</td>
<td>Ventilation monitoring system &ndash; Isotope production facilities</td>
<td>GN.12.1(c), CII.3(i)</td>  </tr>  <tr>
<td className="text-center">B.2.10</td>
<td>Personnel contamination monitoring system &ndash; Isotope production facilities</td>
<td>GN.12.1(f), NSRD.3.1(b)(iii)</td>  </tr>  <tr>
<td className="text-center">B.2.11</td>
<td>Pulsed dose rate brachytherapy afterloader remote alarm</td>
<td>CII.16.1.2(a)</td>  </tr>  <tr>
<td className="text-center">B.3.1</td>
<td>Information program</td>
<td>CII.3(r)</td>  </tr>  <tr>
<td className="text-center">B.3.2</td>
<td>Preliminary decommissioning plan</td>
<td>CII.3(s), GN.3.1(j)</td>  </tr>  <tr>
<td className="text-center">C.1.1</td>
<td>Facility design implementation &ndash; General</td>
<td>CII.3(g), CII.3(j), CII.4(b), CII.4(k)</td>  </tr>  <tr>
<td className="text-center">C.1.2</td>
<td>Facility design implementation &ndash; Isotope processing facilities</td>
<td>CII.4(b)</td>  </tr>  <tr>
<td className="text-center">D.1.1</td>
<td>Public information program &ndash; Pool type irradiators and isotope production accelerators</td>
<td>RD/GD-99.3</td>  </tr>  <tr>
<td className="text-center">D.1.2</td>
<td>Radiation safety officer job description</td>
<td>GN.3.1(k), GN.3.1.1</td>  </tr>  <tr>
<td className="text-center">D.1.3</td>
<td>Organizational management</td>
<td>GN.3.1(k)</td>  </tr>  <tr>
<td className="text-center">D.1.4</td>
<td>Radiation safety committee</td>
<td>GN.3.1(k)</td>  </tr>  <tr>
<td className="text-center">D.1.5</td>
<td>Reporting requirements</td>
<td>GN.29</td>  </tr>  <tr>
<td className="text-center">D.1.6</td>
<td>Quality assurance program</td>
<td>CII.4(h), CII.3(j)</td>  </tr>  <tr>
<td className="text-center">D.1.7</td>
<td>Control of records</td>
<td>CII.21, RP.24, GN.27, GN.28</td>  </tr>  <tr>
<td className="text-center">D.2.1</td>
<td>ALARA policy</td>
<td> RP.4(a)</td>  </tr>  <tr>
<td className="text-center">D.2.2</td>
<td>Designation of nuclear energy workers</td>
<td>RP.7, RP.9, RP.10, RP.11</td>  </tr>  <tr>
<td className="text-center">D.2.3</td>
<td>Personal dose monitoring &ndash; General</td>
<td>RP.5</td>  </tr>  <tr>
<td className="text-center">D.2.4</td>
<td>Action levels</td>
<td>RP.6, GN.3.1(f)</td>  </tr>  <tr>
<td className="text-center">D.2.5</td>
<td>Radiation detection instruments</td>
<td>CII.18, NSRD.20</td>  </tr>  <tr>
<td className="text-center">D.2.6</td>
<td>Radioactive contamination control</td>
<td>GN.12.1(f), NSRD.3.1(b)(iii)</td>  </tr>  <tr>
<td className="text-center">D.2.7</td>
<td>Rooms &ndash; Posting</td>
<td>RP.21, RP.22, NSRD.23(a), CII.15(11)</td>  </tr>  <tr>
<td className="text-center">D.2.8</td>
<td>Sealed source changes</td>
<td>CII.7(c), CII.17</td>  </tr>  <tr>
<td className="text-center">D.2.9</td>
<td>Sealed source handling</td>
<td>PTNS.15, PTNS.21, GN12.1(c)</td>  </tr>  <tr>
<td className="text-center">D.2.10</td>
<td>Post-treatment patient survey &ndash; brachytherapy remote afterloader</td>
<td>CII.16.1(1)</td>  </tr>  <tr>
<td className="text-center">D.2.11</td>
<td>Post-implant accounting of sources</td>
<td>GN.3.1(h)</td>  </tr>  <tr>
<td className="text-center">D.2.12</td>
<td>Instructions to patients following an implant</td>
<td>RP.3</td>  </tr>  <tr>
<td className="text-center">D.2.13</td>
<td>Control of patient treatment rooms</td>
<td>GN.12.1(c)</td>  </tr>  <tr>
<td className="text-center">D.2.14</td>
<td>Fire response</td>
<td>GN.12.1(c)</td>  </tr>  <tr>
<td className="text-center">D.3.1</td>
<td>Qualifications and duties of workers</td>
<td>CII.4(s), CII.7(d)</td>  </tr>  <tr>
<td className="text-center">D.3.2</td>
<td>Training program</td>
<td>CII.4(s), RP.4(a)(ii), GN.12.1(j), CII.7(d)</td>  </tr>  <tr>
<td className="text-center">D.4.1</td>
<td>Management of radioactive and other hazardous wastes</td>
<td>GN.3(1)(j)</td>  </tr>  <tr>
<td className="text-center">D.5.1</td>
<td>Access control and physical security</td>
<td>GN.3.1(g), GN.12.1(g), GN.12.1(h), GN.12.1(j), CII.15.12, REGDOC-2.12.3</td>  </tr>  <tr>
<td className="text-center">D.5.2</td>
<td>Inventory control</td>
<td>GN.12.1(g), GN.12.1(h), CII.21.5, GN.12.1(j), GN.3.1(h), NSRD.36.1, REGDOC-2.12.3</td>  </tr>  <tr>
<td className="text-center">D.6.1</td>
<td>Packaging and transporting nuclear substances</td>
<td>PTNS.15, PTNS.21, GN.13</td>  </tr>  <tr>
<td className="text-center">D.7.1</td>
<td>Fitness-for-service program</td>
<td>CII.18, NSRD.3.1(i), CII.16.2</td>  </tr>  <tr>
<td className="text-center">E.1.1</td>
<td>Operating procedures &ndash; General</td>
<td>CII.4(f)</td>  </tr>  <tr>
<td className="text-center">E.1.2</td>
<td>Processing procedures &ndash; Isotope production facilities</td>
<td>NSRD.3.1(a)</td>  </tr>  <tr>
<td className="text-center">E.1.3</td>
<td>Geophysical logging accelerator &ndash; Operating instructions</td>
<td>GN.12.1(e)</td>  </tr>  <tr>
<td className="text-center">E.1.4</td>
<td>Emergency procedures &ndash; General</td>
<td>RP.4(a)(iv)</td>  </tr>  <tr>
<td className="text-center">E.1.5</td>
<td>Safety system verification</td>
<td>GN.12.1(d)</td>  </tr>  <tr>
<td className="text-center">E.1.6</td>
<td>Special instructions for nursing staff – Pulsed dose rate brachytherapy facilities</td>
<td>GN.12.1(b)</td>  </tr>  <tr>
<td className="text-center">E.1.7</td>
<td>Servicing procedures</td>
<td>CII.7(c)</td>  </tr>  <tr>
<td className="text-center">E.1.8</td>
<td>Requirements for licensees who do not have a prescribed equipment servicing licence</td>
<td>CII.11.1(p)</td>  </tr>  <tr>
<td className="text-center">E.1.9</td>
<td>Perimeter access control for temporary work sites &ndash; mobile or portable accelerators</td>
<td>GN.3.1(g)</td>  </tr>  <tr>
<td className="text-center">E.1.10</td>
<td>Portable shielding</td>
<td>GN.12.1(c)</td>  </tr>  <tr>
<td className="text-center">E.2.1</td>
<td>Confirmation of safety system functionality</td>
<td>CII.4(c)</td>  </tr>  <tr>
<td className="text-center">E.2.2</td>
<td>Radiation survey</td>
<td>GN.3(i), CII.4(c)</td>  </tr>  <tr>
<td className="text-center">E.2.3</td>
<td>Commissioning results &ndash; Isotope processing facilities</td>
<td>GN.3(i), CII.4(c)</td>  </tr>  <tr>
<td className="text-center">F.1.1</td>
<td>Overview of decommissioning plan</td>
<td>CII.5</td>  </tr>  <tr>
<td className="text-center">F.1.2</td>
<td>Personnel qualifications and training</td>
<td>CII.5(j)</td>  </tr>  <tr>
<td className="text-center">F.1.3</td>
<td>Estimate of types, activities and radiation doses from nuclear substances</td>
<td>CII.5(g)</td>  </tr>  <tr>
<td className="text-center">F.1.4</td>
<td>Disposal of Class II prescribed equipment, nuclear substances and hazardous materials</td>
<td>CII.5(f), CII.5(h), CII.21.4, GN.3.1(j), NSRD.5.1(1), NSRD.19.2, GN.13</td>  </tr>  <tr>
<td className="text-center">F.1.5</td>
<td>Disposal of Class II prescribed equipment, nuclear substances and hazardous materials &ndash; Isotope production accelerator facilities</td>
<td>CII.5(f), CII.5(h), CII.21.4, GN.3.1(j), NSRD.5.1(1), NSRD.19.2, GN.13</td>  </tr>  <tr>
<td className="text-center">G.1.1</td>
<td>Radiation dose summary</td>
<td>NSCA.24.4</td>  </tr>  <tr>
<td className="text-center">G.1.2</td>
<td>Sealed sources acquired, transferred, or disposed of</td>
<td>NSCA.24.4, GN.13</td>  </tr>  <tr>
<td className="text-center">G.1.3</td>
<td>Sealed source inventory</td>
<td>NSCA.24.4</td>  </tr>  <tr>
<td className="text-center">G.1.4</td>
<td>Reportable events</td>
<td>NSCA.24.4</td>  </tr>  <tr>
<td className="text-center">G.1.5</td>
<td>Occupancy review</td>
<td>NSCA.24.4</td>  </tr>  <tr>
<td className="text-center">G.1.6</td>
<td>Workload review</td>
<td>NSCA.24.4</td>  </tr>  <tr>
<td className="text-center">G.1.7</td>
<td>Radiation survey</td>
<td>NSCA.24.4</td>  </tr>  <tr>
<td className="text-center">G.1.8</td>
<td>Servicing operations</td>
<td>NSCA.24.4</td>  </tr>  </table>
<p>ATIA: <em>Access to Information Act</em><br />
CII: <em>Class II Nuclear Facilities and Prescribed Equipment Regulations</em><br />
GN: <em>General Nuclear Safety and Control Regulations</em><br />
NSCA: <em>Nuclear Safety and Control Act</em><br />
NSRD: <em>Nuclear Substances and Radiation Devices Regulations</em><br />
OLA: <em>Official Languages Act</em><br />
PTNS: <em>Packaging and Transport of Nuclear Substances Regulations</em><br />
RP: <em>Radiation Protection Regulations</em><br /></p>
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
<h2 id="AppB">Appendix B: Safety and Control Area Definitions</h2>
<dl>
<dt><strong>management system</strong></dt>
<dd>Covers the framework that establishes the processes and programs required to ensure an organization achieves its safety objectives, continuously monitors its performance against these objectives, and fosters a healthy safety culture.</dd>
<dt><strong>human performance management</strong></dt>
<dd>Covers activities that enable effective human performance through the development and implementation of processes that ensure a sufficient number of licensee personnel are in all relevant job areas and have the necessary knowledge, skills, procedures and tools in place to safely carry out their duties.</dd>
<dt><strong>operating performance</strong></dt>
<dd>Includes an overall review of the conduct of the licensed activities and the activities that enable effective performance.</dd>
<dt><strong>physical design</strong></dt>
<dd>Relates to activities that impact the ability of structures, systems and components to meet and maintain their design basis given new information arising over time and taking changes in the external environment into account.</dd>
<dt><strong>fitness for service</strong></dt>
<dd>Covers activities that impact the physical condition of structures, systems and components to ensure that they remain effective over time. This area includes programs that ensure all equipment is available to perform its intended design function when called upon to do so.</dd>
<dt><strong>radiation protection</strong></dt>
<dd>Covers the implementation of a radiation protection program in accordance with the <em>Radiation Protection Regulations</em>. This program must ensure that contamination levels and radiation doses received by individuals are monitored, controlled and maintained ALARA.</dd>
<dt><strong>waste management</strong></dt>
<dd>Covers internal waste-related programs that form part of the facility&#39;s operations up to the point where the waste is removed from the facility to a separate waste management facility. This area also covers the planning for decommissioning.</dd>
<dt><strong>security</strong></dt>
<dd>Covers the programs required to implement and support the security requirements stipulated in the regulations, the licence, orders, or expectations for the facility or activity.</dd>
<dt><strong>packaging and transport</strong></dt>
<dd>Programs that cover the safe packaging and transport of nuclear substances to and from the licensed facility.</dd>  </dl>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="AppC"></div>
<h2 id="AppC">Appendix C: Licensing Phase</h2>
<p><strong>construct:</strong> licence to construct a nuclear facility as per section 3 of the <em>Class II Nuclear Facilities and Prescribed Equipment Regulations</em></p>  <p><strong>commission:</strong> licence to operate for the purpose of commissioning as per section 4 of the <em>Class II Nuclear Facilities and Prescribed Equipment Regulations</em></p>  <p><strong>operate:</strong> an amendment to the licence to operate for the purpose of commissioning to remove the commissioning restriction.</p>
<p><strong>decommission:</strong> licence to decommission a nuclear facility as per section 5 of the <em>Class II Nuclear Facilities and Prescribed Equipment Regulations</em></p>  <p><strong>other:</strong> for operation of non-fixed prescribed equipment, this phase refers to a request for a licence to operate as per section 4 of the <em>Class II Nuclear Facilities and Prescribed Equipment Regulations</em> or, in the case of manual brachytherapy, a licence as per section 3 of the <em>Nuclear Substances and Radiation Devices Regulations</em>.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="AppD"></div>
<h2 id="AppD">Appendix D: Licensed Activities</h2>
<table className="table table-striped">  <tr>
<th className="text-center">Facility or activity</th>
<th>Phase</th>
<th>Possess</th>
<th>Use</th>
<th>Store</th>
<th>Import</th>
<th>Export</th>
<th>Transfer</th>
<th>Process</th>
<th>Abandon</th>
<th>Service</th>   </tr>  <tr>
<td className="">Fixed installation<br />
&ndash; general</td>
<td>Operate</td>
<td className="text-center" style="background-color:#9fdfbf">Y</td>
<td className="text-center" style="background-color:#ffff00">3</td>
<td className="text-center" style="background-color:#ffff00">5</td>
<td className="text-center" style="background-color:#ffff00">7</td>
<td className="text-center" style="background-color:#ffff00">9</td>
<td className="text-center" style="background-color:#9fdfbf">Y</td>
<td className="text-center" style="background-color:#ffff00">11</td>
<td style="background-color:#808080">&nbsp;</td>
<td className="text-center" style="background-color:#ffff00">7</td>  </tr>  <tr>
<td className="">Fixed installation<br />
&ndash; general</td>
<td>Decommission</td>
<td className="text-center" style="background-color:#9fdfbf">Y</td>
<td style="background-color:#808080">&nbsp;</td>
<td style="background-color:#808080">&nbsp;</td>
<td style="background-color:#808080">&nbsp;</td>
<td className="text-center" style="background-color:#ffff00">9</td>
<td className="text-center" style="background-color:#9fdfbf">Y</td>
<td style="background-color:#808080">&nbsp;</td>
<td style="background-color:#808080">&nbsp;</td>
<td className="text-center" style="background-color:#ffff00">7</td>
</tr>  <tr>
<td>Fixed installation<br />
facility &ndash; IPA</td>
<td>Operate</td>
<td className="text-center" style="background-color:#9fdfbf">Y</td>
<td className="text-center" style="background-color:#ffff00">3</td>
<td className="text-center" style="background-color:#9fdfbf">Y</td>
<td className="text-center" style="background-color:#ffff00">7</td>
<td className="text-center" style="background-color:#ffff00">7</td>
<td className="text-center" style="background-color:#9fdfbf">Y</td>
<td className="text-center" style="background-color:#ffff00">12</td>
<td style="background-color:#808080">&nbsp;</td>
<td className="text-center" style="background-color:#ffff00">7</td>  </tr>  <tr>
<td>Fixed installation<br />
facility &ndash; IPA</td>
<td>Decommission</td>
<td className="text-center" style="background-color:#9fdfbf">Y</td>
<td style="background-color:#808080">&nbsp;</td>
<td style="background-color:#808080">&nbsp;</td>
<td style="background-color:#808080">&nbsp;</td>
<td className="text-center" style="background-color:#ffff00">7</td>
<td className="text-center" style="background-color:#9fdfbf">Y</td>
<td style="background-color:#808080">&nbsp;</td>
<td style="background-color:#808080">&nbsp;</td>
<td className="text-center" style="background-color:#ffff00">7</td>   </tr>  <tr>
<td className="">Fixed installation<br />
facility &ndash; pool type</td>
<td>Operate</td>
<td className="text-center" style="background-color:#9fdfbf">Y</td>
<td className="text-center" style="background-color:#ffff00">3</td>
<td style="background-color:#808080">&nbsp;</td>
<td className="text-center" style="background-color:#ffff00">7</td>
<td className="text-center" style="background-color:#ffff00">10</td>
<td className="text-center" style="background-color:#9fdfbf">Y</td>
<td style="background-color:#808080">&nbsp;</td>
<td style="background-color:#808080">&nbsp;</td>
<td style="background-color:#808080">&nbsp;</td>   </tr>  <tr>
<td className="">Fixed installation<br />
facility &ndash; pool type</td>
<td>Decommission</td>
<td className="text-center" style="background-color:#9fdfbf">Y</td>
<td style="background-color:#808080">&nbsp;</td>
<td style="background-color:#808080">&nbsp;</td>
<td style="background-color:#808080">&nbsp;</td>
<td className="text-center" style="background-color:#ffff00">10</td>
<td className="text-center" style="background-color:#9fdfbf">Y</td>
<td style="background-color:#808080">&nbsp;</td>
<td style="background-color:#808080">&nbsp;</td>
<td style="background-color:#808080">&nbsp;</td>   </tr>  <tr>
<td>Manual brachytherapy</td>
<td>Other</td>
<td className="text-center" style="background-color:#9fdfbf">Y</td>
<td className="text-center" style="background-color:#9fdfbf">Y</td>
<td className="text-center" style="background-color:#9fdfbf">Y</td>
<td className="text-center" style="background-color:#ffff00">7</td>
<td className="text-center" style="background-color:#ffff00">7</td>
<td className="text-center" style="background-color:#9fdfbf">Y</td>
<td style="background-color:#808080">&nbsp;</td>
<td style="background-color:#808080">&nbsp;</td>
<td style="background-color:#808080">&nbsp;</td>   </tr>  <tr>
<td className="">Prescribed equipment</td>
<td>Operate</td>
<td className="text-center" style="background-color:#9fdfbf">Y</td>
<td className="text-center" style="background-color:#ffff00">3</td>
<td className="text-center" style="background-color:#ffff00">6</td>
<td className="text-center" style="background-color:#ffff00">8</td>
<td className="text-center" style="background-color:#ffff00">8</td>
<td className="text-center" style="background-color:#9fdfbf">Y</td>
<td style="background-color:#808080">&nbsp;</td>
<td className="text-center" style="background-color:#ffff00">13</td>
<td className="text-center" style="background-color:#ffff00">7</td>
</tr>  <tr>
<td>Sevice</td>
<td>Service</td>
<td className="text-center" style="background-color:#9fdfbf">Y</td>
<td style="background-color:#808080">&nbsp;</td>
<td style="background-color:#808080">&nbsp;</td>
<td className="text-center" style="background-color:#ffff00">7</td>
<td className="text-center" style="background-color:#ffff00">7</td>
<td className="text-center" style="background-color:#ffff00">7</td>
<td style="background-color:#808080">&nbsp;</td>
<td style="background-color:#808080">&nbsp;</td>
<td className="text-center" style="background-color:#9fdfbf">Y</td>
</tr>  </table>
<p>Instructions:</p>  <p>Select the appropriate row based on your facility type and licensing phase. Licensed activities that are applicable are indicated by green shading and marked with a "Y". Activities that may be applicable are indicated by yellow shading with a corresponding note index number. Activities that are not applicable are shaded grey without a note.</p>  <p>Notes:</p>
<ol>
<li>Construction phase for fixed installation facilities omitted as no nuclear substances may be possessed during this phase.</li>
<li>Operate for the purpose of commissioning and routine operation are listed together as "operate". With the exception of "process" for isotope production accelerator facilities, there is no difference.</li>
<li>Only if check source listed on licence.</li>
<li>For neutron generators, mobile and portable accelerators, only if check source listed on licence.</li>
<li>Yes this is applicable for a remote brachytherapy remote afterloader. For accelerators, this is only applicable for storage of activated components or nuclear substances used as shielding (depleted uranium).</li>
<li>For accelerators, only for storage of activated components or nuclear substances used as shielding (depleted uranium).</li>
<li>On request.</li>
<li>On request. Not applicable for neutron generators, geophysical accelerators or any other prescribed equipment containing tritium or deuterium. Import and export of tritium or deuterium requires an import/export licence under the <em>Nuclear Non-proliferation Import and Export Control Regulations</em>.</li>
<li>On request for activated components, depleted uranium and category 3–5 sources. Not applicable for category 1 or 2 sources. Export of category 1 or 2 sources requires a separate export licence as per the IAEA&#39;s <em>Code of Conduct on the Safety and Security of Radioactive Sources</em> and the <em>Supplementary Guidance on the Import and Export of Radioactive Sources</em>. For categorization of sealed sources, refer to <a href="#AppI">Appendix I: Categorization of Sealed Sources</a>.</li>
<li>Not applicable for category 1 or 2 sources. Export of category 1 or 2 sources requires a separate export licence as per the IAEA&#39;s <em>Code of Conduct on the Safety and Security</em> of <em>Radioactive Sources and the Supplementary Guidance on the Import and Export of Radioactive Sources</em>. For categorization of sealed sources, refer to <a href="#AppI">Appendix I: Categorization of Sealed Sources</a>.</li>
<li>Accelerators used for isotope production research may require limited isotope processing.</li>
<li>Processing is not permitted during the commissioning phase.</li>
<li>Geophysical logging only.</li>
</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="AppE"></div>
<h2 id="AppE">Appendix E: Room Classification</h2>
<dl>
<dt><strong>Basic-level laboratory</strong></dt>
<dd>A room where the total quantity of an unsealed nuclear substance used at a single time does not exceed five times its corresponding annual limit on intake (ALI).</dd>
<dt><strong>bunker</strong></dt>
<dd>A shielded facility containing Class II prescribed equipment or a shielded target room used in isotope production accelerator facilities</dd>
<dt><strong>containment level laboratory</strong></dt>
<dd>A room where the total quantity of an unsealed nuclear substance used at a single time exceeds 500 times its corresponding ALI.</dd>
<dt><strong>high-level laboratory</strong></dt>
<dd>A room where the total quantity of an unsealed nuclear substance used at a single time does not exceed 500 times its corresponding ALI.</dd>
<dt><strong>intermediate-level laboratory</strong></dt>
<dd>A room where the total quantity of an unsealed nuclear substance used at a single time does not exceed 50 times its corresponding ALI.</dd>
<dt><strong>other room</strong></dt>
<dd>A room where sealed or unsealed nuclear substances or activated components are stored. Examples include waste storage and decay storage.</dd>
<dt><strong>treatment room</strong></dt>
<dd>A room where patients reside during treatments using sealed or unsealed nuclear substances. Note that a treatment room is not a bunker.</dd>  </dl>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="AppF"></div>
<h2 id="AppF">Appendix F: Survey Meter Calibration</h2>
<p>CNSC regulations require radiation survey meters to be calibrated, in order to assure persons using the survey meter that the unit is functioning properly and that the readings obtained are representative of the actual conditions.</p>  <p>This document outlines the CNSC&#39;s expectations for applicants and licensees to meet regulatory requirements with respect to the calibration of survey meters.</p>  <p>Nothing in this document shall be construed to imply that the CNSC authorizes, certifies or licences persons to calibrate survey meters. It is the responsibility of the licensee to ensure that any person calibrating a survey meter on its behalf can do so in accordance with CNSC regulatory requirements and the expectations outlined in this document.</p>
<h3>Regulatory basis</h3>  <p>The regulatory requirement to have a calibrated survey meter is specified in section 20 of the <em>Nuclear Substances and Radiation Devices Regulations</em> and in sub-section 18(2) of the <em>Class II Nuclear Facilities and Prescribed Equipment Regulations</em>:</p>  <p><em>"No person shall use, for the purpose of the Act, the regulations made under the Act or an order or a licence, a radiation survey meter that has not been calibrated within the 12 months preceding its use."</em></p>
<h3>Program expectations for calibration of survey meters</h3>  <p>In order to ensure that the requirements of the regulations are met for having a survey meter that is calibrated, applicants and licensees shall verify that the calibration is carried out in accordance with the expectations described below.</p>
<h3>Calibration procedure documentation</h3>  <p>Before calibrating any specific make and model of survey meter, the person conducting the calibration shall have available for inspection and assessment a documented calibration procedure consisting of:</p>
<ul>
<li>a general description of the method of calibration</li>
<li>an identification and proof of verification of uncertainties associated with the jig, the source, attenuators, and decay correction which are associated with the total uncertainty of the calibration</li>
<li>step-by-step procedures, preferably including manufacturers&#39; manuals, to show that sufficient information about the survey meter is available to operate, to perform precalibration checks and to calibrate the specific survey meter</li>
</ul>
<h3>Survey meter pre-calibration check</h3>  <p>Before calibration, each survey meter shall have a pre-calibration check that consists of:</p>
<ul>
<li>a battery check to ensure a satisfactory voltage can be maintained throughout the calibration</li>
<li>a verification of operating voltage</li>
<li>a comprehensive functional check on all energy ranges of the survey meter</li>
</ul>
<h3>Physical and environmental expectations for jigs and survey meters</h3>  <p>The beam calibrator jig shall be located:</p>
<ul>
<li>to minimize radiation scatter and be at least 1 m from the floor, the ceiling, and from any wall. The distance between any scattering object and the source shall be at least 0.5 m</li>
<li>in an area free of interference from sources of ionizing radiation other than the calibration source</li>
<li>in an area where electrostatic, electrical and magnetic fields and other non-ionizing radiation, such as radio frequency and microwave, will not affect instrument response</li>
</ul>  <p>The survey meter to be calibrated shall:
<ul>
<li>be positioned on the jig to minimize bias due to geotropism, directional dependence, and non-uniformity of the source radiation beam across and through the detector volume</li>
<li>have any beta window or shield in the optimum position (normally closed) for best (i.e. flattest) energy response</li>
</ul>  <p>The uncertainty in calibration distance shall not be greater than 2% and shall be added in quadrature to the uncertainty of the jig distance scale, the uncertainty in physical placement and repositioning of the survey meter, the uncertainty in location of the source centre when on the jig, and the uncertainty of the centre of the sensitive volume of the survey meter detector.</p>  <p>The survey meter to be calibrated shall have achieved equilibrium with the temperature, pressure and humidity of the local calibration area. These parameters should be noted and be within the range specified by the manufacturer of the survey meter. It is recommended to calibrate the instruments at 20°C (68°F) and 101.3 kPa (1 atmosphere), or at the anticipated operational parameters. It should be noted that the response of some survey meters requires correction for temperature and pressure. Therefore, where required, such corrections shall be made.</p>   <p>The calibration should be carried out where the level of background radiation is known and the appropriate corrections made to compensate for the contribution from this potential source of error. This is particularly important when measuring at the lowest ranges of energy.</p>
<h3>Expectations for calibration sources</h3>  <p>It is preferable to use the same reference isotope as the manufacturer for the calibration source, especially if the manufacturer&#39;s specified energy response is to be assumed. Whatever isotope is used, the energy dependence of the dose rate response of the survey meter shall be known and be within 30 percent of the true dose rate over the energy spectrum of interest.</p>  <p>The calibration source activity (or exposure rate) shall be known to an uncertainty of not greater than &plusmn; 10 percent. This uncertainty shall include attenuators (used singly or in combination), if they are an integral part of the source assembly. A calibration source certificate shall be available for inspection, and as a minimum the source shall be implicitly traceable through a source supplier to a national or international standard. The calibration source activity shall be corrected for decay at a frequency which ensures that its activity is within 1 percent of its current value.</p>
<h3>Expectations for survey meter calibration</h3>  <p>Each survey meter shall be calibrated up to its highest range or the highest rate achievable with the calibration source, whichever is lower. The manufacturer&#39;s recommended calibration method, if any, shall be followed, and the calibration shall be verified at about 20 to 25 percent and 75 to 80 percent of the measurement of each range or decade.</p>   <p>Measurement shall be recorded before and after any necessary (or preferred) calibration adjustments. A survey meter shall be considered to meet the criteria of an adequate calibration when each measurement is within &plusmn; 20 percent of the expected dose rate.</p>  <p>Measurements above 10 mSv/h need not be calibrated, but both its response in each range and, as far as practicable, the increasing dose rate response with decreasing calibration distance shall be checked.</p>
<h3>Expectations for record completion</h3>  <p>Immediately following calibration the person completing the calibration shall complete a calibration certificate, and complete and affix on the survey meter a durable calibration sticker, bearing the date of calibration. The person conducting the calibration shall return the original certificate with the survey meter to the user.</p>   <p>If a survey meter fails to meet the criteria for being adequately calibrated, the person conducting the calibration shall immediately notify the person who requested the calibration.</p>   <p>If requested to do so, a person conducting the calibration may, if they are qualified through training or other certification, repair a survey meter before returning to the user. Subsequent to any repair which exceeds the manufacturer&#39;s instructions for normal maintenance, a survey meter shall be recalibrated.</p>
<h3>Documentation of calibration</h3>  <p>In order to meet the requirements of section 20 of the <em>Nuclear Substances and Radiation Devices Regulations</em>, licensees shall make available on request to the CNSC a document for each survey meter that includes the following information:</p>
<ul>
<li>licensee name and CNSC licence number</li>
<li>survey meter make and model, including serial number of the detector unit and the probe used in the calibration, if appropriate</li>
<li>the calibration source used, including isotope and activity</li>
<li>total percentage of error on expected dose rate</li>
<li>the results of the pre-calibration checks, including:
<ul>
<li>battery condition</li>
<li>operating voltage</li>
<li>temperature, pressure and humidity, at the time of calibration</li>
</ul></li>
<li>for each energy range used in the calibration:
<ul>
<li>the expected dose rate using the calibration device</li>
<li>the dose rate measured with the survey meter, with units, before and after calibration</li>
<li>the calculated percent variance of the observed dose rate versus expected dose rate</li>
<li>any notes of concerns or anomalies for that range</li>
</ul></li>
<li>any notes of anomalies or problems associated with the calibration of the survey meter in general</li>
<li>the date of the calibration of the survey meter</li>
<li>the name and signature of the person who conducted the calibration</li>
<li>acknowledgement that the calibration was carried out in accordance with these requirements</li>
</ul>
<h3>Maintenance of records</h3>  <p>The licensee shall retain a record of each survey meter calibration as required by the NSCA and regulations and shall retain those records for the period specified in the licence or the Regulations, as appropriate.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="AppG"></div>
<h2 id="AppG">Appendix G: Monitoring for Radioactive Contamination</h2>
<p>This document provides general guidance for monitoring and controlling radioactive contamination, and relating the monitoring results to the CNSC radioisotope licence criteria. This document pertains primarily to laboratories, but may also be used for the control of radioactive contamination in other locations. The document also provides guidance on contamination monitoring instrument selection.</p>   <p>Each CNSC radioisotope licence authorizing the use of open radioactive sources contains a condition that states the regulatory criteria pertaining to radioactive contamination. This licence condition can be found in the section "Radioisotope licence criteria for radioactive contamination" below.</p>  <p>The specified contamination criteria shall be applied to all areas where radioisotopes are used. Notwithstanding these limits, licensees should maintain levels of radioactive contamination as low as reasonably achievable (ALARA).</p>
<h3>Elements of a contamination monitoring program</h3>  <h4>Method of measurement</h4>  <p>Radioactive contamination may be measured directly or indirectly. Direct measurement means the use of portable radiation detection instruments to detect both fixed and removable contamination. Direct measurement may be used when background radiation levels are negligible compared to licence criteria. Indirect measurement only detects removable contamination by means of a sampling program.</p>
<h4>Instrument selection</h4>  <p>The ability of various radiation instruments to detect radioisotopes of interest will vary by instrument and manufacturer. Guidance on the selection of instruments can be found in the section below on instrument selection. For specific information on a particular model, contact the manufacturer.</p>
<h4>Confirmatory contamination monitoring</h4>  <p>Confirmatory contamination monitoring such as weekly wipe tests are intended to confirm the results of routine direct and indirect monitoring ("operational monitoring") performed every time there is a risk of contamination. Operational monitoring is done to verify that there is no spread of contamination and the confirmatory monitoring should confirm this.</p>  <p>The locations selected for confirmatory contamination monitoring should be numbered on a plan of the radioisotope work area. These locations should include working surfaces (such as benches, countertops or fume hoods), storage areas, and non-working surfaces (such as floors, instruments and equipment, door handles, light switches, sink taps and telephones). Several random locations should also be monitored. Too rigid a set of locations may overlook problem areas. A review of the list of locations should be conducted at a specific frequency to ensure that the list is current or if new locations should be added as required.</p>
<h4>Instrument checks</h4>   <p>Non-portable instruments used for counting samples, such as liquid scintillation counters, well type crystal gamma counters, gas-flow proportional counters, semiconductor gamma spectrometers and gamma cameras, should be routinely serviced according to the manufacturer&#39;s instructions. Licensees must keep a record of the servicing with the date.</p>  <p>Before monitoring for contamination, all instruments should be given operational checks as specified by the manufacturer; i.e., battery check, high-voltage check, response check and the background radiation level should be measured. Licensees must keep a record of the operational checks and background measurement. Similarly, the instruments should be used to measure the radiation from a standard such as a check source for every set of contamination monitoring measurements planned. The results of those measurements allow the determination of the instrument efficiency.</p>  <p>Instruments that are not operating within the parameters of operational checks, or that show anomalous background, blank or standard measurements, should not be used until their proper operation can be verified. These instruments should be tagged indicating that they are out of service and should not be used until their proper operation can be verified.</p>
<h4>Frequency of monitoring</h4>  <p>Contamination monitoring frequencies should conform to the requirements indicated on the appropriate CNSC laboratory rules poster or in a radioisotope licence condition. Copies of the CNSC laboratory posters can be found on the <a href="http://www.nuclearsafety.gc.ca/eng/">CNSC&#39;s website</a>.</p>  <p>When radioactive substances are not used for a prolonged period of time, contamination monitoring is not required, but such a period shall be identified in the records.</p>
<h4>Decontamination</h4>  <p>Any area that is found to have non-fixed contamination exceeding the regulatory criteria shall be cleaned and monitored again. If the area cannot be cleaned to meet those criteria, the contaminated area shall be sealed or shielded until the criteria are met. All non-fixed contamination should be removed if possible.</p>  <p>Note: For short-lived radionuclides, the room or area may be posted and secured until the radioisotope decays.</p>
<h4>Monitoring records</h4>  <p>Contamination monitoring records shall be kept for three years and shall be available for inspection by CNSC staff. These records should include:</p>
<ul>
<li>date of measurement</li>
<li>make and model of the instrument</li>
<li>monitoring locations</li>
<li>contamination monitoring results in Bq/cm<sup>2</sup> before and after decontamination, if applicable</li>
<li>results of operational checks and background measurements</li>
<li>standard measurement results</li>
<li>measured or predicted efficiency</li>
<li>instrument servicing records should be recorded and updated as necessary</li>
</ul>
<h4>Direct measurement of contamination using a portable meter</h4>  <p>Direct measurement instrument readings include both fixed and non-fixed contamination. Thus a reading that satisfies the licence criteria gives a conservative estimate of non-fixed contamination.</p>
<h4>Indirect measurement of contamination with wipes</h4>  <p>Perform the following steps for indirect measurements:</p>
<ul>
<li>Wipe each of the locations shown on the plan of the working area with a filter paper, wipe or cotton swab lightly moistened with alcohol or water. Use one numbered wipe per location. If contamination is found, the contaminated area shall be identified and decontaminated.</li>
<li>Wipe an area of 100 cm<sup>2</sup>. Using uniform and constant pressure, ensure the area is wiped. In situations where wipes less than 100 cm<sup>2</sup> areas are not feasible such as wipes of some equipment, light switches, etc., take note of the area wiped and ensure the appropriate conversion factor is applied.</li>
<li>If necessary, carefully dry the wipe to prevent loss of activity. Since the contamination may be absorbed into the wipe material, the use of a wetting agent may lead to a significant underestimate of alpha and low-energy beta contamination with some counting methods.</li>
<li>Count the wipes in a low-background area and record all results.</li>
<li>If the wipes are to be counted on a contamination meter, the wipe should be smaller than or equal to the sensitive area of the detector. Note that the geometry of the wipe material (flat like filter paper or round like a swab) may change results.</li>
<li>Clean any contaminated areas and monitor again. Record results before and after decontamination.</li>
</ul>
<h4>Radioisotope licence criteria for radioactive contamination</h4>  <p>The licensee shall ensure that for nuclear substances listed in <a href="#AppH">Appendix H: Classes of Nuclear Substances</a>:</p>
<ul>
<li>non-fixed contamination in all areas, rooms or enclosures where unsealed nuclear substances are used or stored does not exceed:
<ul>
<li>3 Bq/cm<sup>2</sup> for all Class A radionuclides</li>
<li>30 Bq/cm<sup>2</sup> for all Class B radionuclides</li>
<li>300 Bq/cm<sup>2</sup> for all Class C radionuclides, averaged over an area not exceeding 100 cm<sup>2</sup></li>
</ul></li>
<li>non-fixed contamination in all other areas does not exceed:
<ul>
<li>0.3 Bq/cm<sup>2</sup> for all Class A radionuclides</li>
<li>3 Bq/cm<sup>2</sup> for all Class B radionuclides</li>
<li>30 Bq/cm<sup>2</sup> for all Class C radionuclides, averaged over an area not exceeding 100 cm<sup>2</sup></li>
</ul></li>
</ul>
<h4>Relating measurement readings to regulatory criteria</h4>  <p>The readings from contamination meters can be related to regulatory criteria if the efficiency of the instrument for a specific radioisotope is known.</p>  <p>Instrument efficiencies for specific radioisotopes can be obtained from the manufacturer or determined using an appropriate standard of known activity. For a description of instrument efficiency, refer to the section on detector efficiency below.</p>  <p>For mixtures of radioisotopes, do all the calculations using the radioisotope for which the instrument has the lowest detection efficiency.</p>  <p>Using the following equation, calculate the measurement results in Bq/cm<sup>2</sup></p>  <math display=&#39;block&#39;>   <semantics>
<mrow>
<mtext>Removable&#x00A0;activity&#x00A0;=&#x00A0;</mtext><mfrac>
<mrow>
<mtext>N-NB</mtext></mrow>
<mrow>
<mtext>E&#x00A0;x&#x00A0;60&#x00A0;x&#x00A0;A&#x00A0;x&#x00A0;F</mtext></mrow>
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
Gaaeiiaiaab2dacaqGGaWaaSaaaeaacaqGobGaaeylaiaab6eacaqG
cbaabaGaaeyraiaabccacaqG4bGaaeiiaiaabAdacaqGWaGaaeiiai
aabIhacaqGGaGaaeyqaiaabccacaqG4bGaaeiiaiaabAeaaaaaaa@5607@
</annotation>   </semantics>  </math>
</p>
<p>Where:</p>  <p>N = the total count rate in counts per minute (cpm) measured directly or on the wipe.</p>  <p>NB =	the normal background count rate (in cpm) from the survey instrument or the a blank wipe</p>  <p>E = the instrument efficiency factor (expressed as a decimal; i.e., for 5 percent efficiency, E=0.05) for the radioisotope being measured. Consult the manufacturer or determine using a radioactive source with a known amount of activity in a counting geometry similar to that used when surveying for contamination. For more information instrument efficiency, see section below.</p>  <p>60 =	sec/min</p>  <p>A = area wiped (not to exceed 100 cm<sup>2</sup>) or area of the detector in cm<sup>2</sup> (for direct measurement)</p>  <p>F =	the collection factor for the wipe (used only when calculating indirect wipe monitoring results). If F is not determined experimentally, a value of F=0.1 (i.e. 10%) shall be used.</p>
<h4>Instrument sensitivity</h4>  <p> Portable contamination monitoring instruments shall be capable of making reproducible measurements at the levels specified above. A minimum detection limit is approximately twice the background measurement. Applicants shall be able to demonstrate that for the isotope(s) of interest the corresponding contamination limit can be detected using the proposed instrumentation. This requires determination of both the minimum detectable activity (MDA) for the detector and isotope of interest, and the uncertainty (2σ). The instrument sensitivity is adequate for a given isotope if:</p>  <p>  <math display=&#39;block&#39;>   <semantics>
<mrow>
<mrow><mo>(</mo>
<mrow>
<mi>M</mi><mi>D</mi><mi>A</mi><mrow><mo>(</mo>
<mrow>
<mfrac>
<mrow>
<mi>B</mi><mi>q</mi></mrow>
<mrow>
<mi>c</mi><msup>
<mi>m</mi>
<mn>2</mn>
</msup>
</mrow>
</mfrac>
</mrow>
<mo>)</mo></mrow><mo>+</mo><mn>2</mn><mi>&#x03C3;</mi></mrow>
<mo>)</mo></mrow><mo>&#x2264;</mo><mtext>Contamination&#x00A0;Limit</mtext></mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaWaaeWaaeaaca
WGnbGaamiraiaadgeadaqadaqaamaalaaabaGaamOqaiaadghaaeaa
caWGJbGaamyBamaaCaaaleqabaGaaGOmaaaaaaaakiaawIcacaGLPa
aacqGHRaWkcaaIYaacciGae83WdmhacaGLOaGaayzkaaGae8hzImQa
ae4qaiaab+gacaqGUbGaaeiDaiaabggacaqGTbGaaeyAaiaab6gaca
qGHbGaaeiDaiaabMgacaqGVbGaaeOBaiaabccacaqGmbGaaeyAaiaa
b2gacaqGPbGaaeiDaaaa@5645@
</annotation>   </semantics>  </math></p>  <br />  <p>  <math display=&#39;block&#39;>   <semantics>
<mrow>
<mfrac>
<mrow>
<mn>2.71</mn><mo>+</mo><mn>4.66</mn><msqrt>
<mrow>
<mi>N</mi><mi>B</mi><mo>&#x2217;</mo><mfrac bevelled=&#39;true&#39;>
<mi>T</mi>
<mrow>
<mn>60</mn></mrow>
</mfrac>
</mrow>
</msqrt>
</mrow>
<mrow>
<mi>E</mi><mo>&#x2217;</mo><mi>T</mi><mo>&#x2217;</mo><mi>A</mi><mo>&#x2217;</mo><mi>F</mi></mrow>
</mfrac>
<mo>+</mo><mn>2</mn><mfrac>
<mrow>
<msqrt>
<mrow>
<mn>2</mn><mo>&#x2217;</mo><mi>N</mi><mi>B</mi><mo>&#x2217;</mo><mfrac bevelled=&#39;true&#39;>
<mi>T</mi>
<mrow>
<mn>60</mn></mrow>
</mfrac>
</mrow>
</msqrt>
</mrow>
<mrow>
<mi>T</mi><mo>&#x2217;</mo><mi>E</mi><mo>&#x2217;</mo><mi>A</mi><mo>&#x2217;</mo><mi>F</mi></mrow>
</mfrac>
<mo>&#x2264;</mo><mtext>Contamination&#x00A0;Limit</mtext></mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaWaaSaaaeaaca
aIYaGaaiOlaiaaiEdacaaIXaGaey4kaSIaaGinaiaac6cacaaI2aGa
aGOnamaakaaabaGaamOtaiaadkeacqGHxiIkdaWccaqaaiaadsfaae
aacaaI2aGaaGimaaaaaSqabaaakeaacaWGfbGaey4fIOIaamivaiab
gEHiQiaadgeacqGHxiIkcaWGgbaaaiabgUcaRiaaikdadaWcaaqaam
aakaaabaGaaGOmaiabgEHiQiaad6eacaWGcbGaey4fIOYaaSGaaeaa
caWGubaabaGaaGOnaiaaicdaaaaaleqaaaGcbaGaamivaiabgEHiQi
aadweacqGHxiIkcaWGbbGaey4fIOIaamOraaaacqGHKjYOcaqGdbGa
ae4Baiaab6gacaqG0bGaaeyyaiaab2gacaqGPbGaaeOBaiaabggaca
qG0bGaaeyAaiaab+gacaqGUbGaaeiiaiaabYeacaqGPbGaaeyBaiaa
bMgacaqG0baaaa@6924@
</annotation>   </semantics>  </math></p>
<p>or:</p>  <math display=&#39;block&#39;>   <semantics>
<mrow>
<mfrac>
<mrow>
<mn>2.71</mn><mo>+</mo><mn>5.37</mn><msqrt>
<mrow>
<mi>N</mi><mi>B</mi><mo>&#x2217;</mo><mfrac bevelled=&#39;true&#39;>
<mi>T</mi>
<mrow>
<mn>60</mn></mrow>
</mfrac>
</mrow>
</msqrt>
</mrow>
<mrow>
<mi>E</mi><mo>&#x2217;</mo><mi>T</mi><mo>&#x2217;</mo><mi>A</mi><mo>&#x2217;</mo><mi>F</mi></mrow>
</mfrac>
<mo>&#x2264;</mo><mtext>Contamination&#x00A0;Limit</mtext></mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaWaaSaaaeaaca
aIYaGaaiOlaiaaiEdacaaIXaGaey4kaSIaaGynaiaac6cacaaIZaGa
aG4namaakaaabaGaamOtaiaadkeacqGHxiIkdaWccaqaaiaadsfaae
aacaaI2aGaaGimaaaaaSqabaaakeaacaWGfbGaey4fIOIaamivaiab
gEHiQiaadgeacqGHxiIkcaWGgbaaaiabgsMiJkaaboeacaqGVbGaae
OBaiaabshacaqGHbGaaeyBaiaabMgacaqGUbGaaeyyaiaabshacaqG
PbGaae4Baiaab6gacaqGGaGaaeitaiaabMgacaqGTbGaaeyAaiaabs
haaaa@5AB6@
</annotation>   </semantics>  </math>
<p>where the terms <em>NB</em>, <em>E</em>, <em>A</em> and <em>F</em> have the same meanings as the section above:</p>  <p>T = the counting time, in seconds, for indirect wipe monitoring, and is the instrument response time for direct measurements. The instrument response time will vary between instruments and is a parameter which can be selected by the user on some devices; e.g., via either software selection of the actual time or "fast/slow" switch set to predefined times specified in the user manual. Other instruments may auto-select the response time based on the count rate. Longer response times will improve the MDA, but the instrument shall stay stationary over each area for a period that is at least as long as the response time.</p>
<h4>Selection of contamination monitoring instruments</h4>  <p>The MDA for an isotope will be highly dependent on both the types and energies of radiation emitted by that isotope and the type of detector used. In general, there are three basic detector design considerations that will impact instrument sensitivity, and each of these parameters will have a different impact, depending upon the type and energy of radiation being detected:</p>
<p><strong>Window thickness and composition:</strong> Consideration should be given to whether the window density is small enough to allow the radiation emitted by the source to enter the detector. This is critical for low-energy beta radiation and alpha radiation, which can be completely absorbed even by materials as thin as a sheet of paper. Note that some isotopes, such as H-3 or Ni-63, cannot be detected by most instruments, because the beta radiation they emit gets completely absorbed within the window. For such isotopes, indirect monitoring using liquid scintillation is generally the best choice.</p>  <p><strong>Detector density:</strong> Every radiation detector functions by detecting interactions between the radiation and a material within the detector. There are two broad classes of detectors: gas-filled detectors, and solid or liquid scintillators. Gas-filled detectors, such as Geiger detectors and proportional counters, will generally work well for detecting alpha or beta radiation, since these types of radiation will cause interactions even in low-density materials. Conversely, gamma rays may readily pass through a low-density gas without interaction, especially at high energies. Solid scintillators, such as NaI detectors, are generally much better suited to detecting gamma radiation. Thin crystal detectors are suitable for low-energy gamma emitters such as Tc-99m, while thicker detectors will enhance sensitivity for high-energy gammas such as those from Cs-137 or Co-60.</p>  <p><strong>Detector output:</strong> Every time radiation interacts with a detector, a tiny amount of energy is released within the detector. This energy is then converted into an electronic signal that can be measured. Some detectors, such as Geiger counters, produce uniform pulses which can be counted. Other systems, such as scintillators or proportional counters, may produce a signal that is proportional to the amount of energy released in the initial radiation interaction. This can be used to distinguish between different types of radiation or different energies of radiation of the same type. Such detectors are useful in applications where distinguishing between multiple different isotopes may be necessary.</p>  <p>There is a very wide range of instruments available for both direct and indirect contamination monitoring purposes. The most common types and recommended applications are summarized below.</p>
<table className="table table-striped">  <tr>
<th className="text-center text-center">Hand-held contamination monitoring instrument*</th>
<th className="text-center text-center">Recommended applications**</th>  </tr>  <tr>
<td className="text-center">Thin-window G-M detector</td>
<td className="text-center">Beta emitters, alpha emitters</td>  </tr>  <tr>
<td className="text-center">Gas-filled proportional detector</td>
<td className="text-center">Variable, refer to manufacturers specifications</td>  </tr>  <tr>
<td className="text-center">Thin-crystal sodium iodide scintillation detector</td>
<td className="text-center">Low-energy gamma emitters (&lt;200 keV)</td>  </tr>  <tr>
<td className="text-center">Thick-crystal sodium iodide scintillation detector</td>
<td className="text-center">High-energy gamma emitters (&gt;200 keV)</td>  </tr>  <tr>
<td className="text-center">Organic/plastic scintillation detector</td>
<td className="text-center">Generally specifically designed for alpha and beta detection with low background. Gamma detection is variable; refer to manufacturers specifications.</td>  </tr>  <tr>
<td className="text-center">Zinc sulphide scintillation detector</td>
<td className="text-center">Alpha emitters</td>  </tr>  <tr>
<th className="text-center">Non-portable monitoring instruments (wipe counters)</th>
<th className="text-center text-center">Recommended applications**</th>  </tr>  <tr>
<td className="text-center">Liquid scintillation counter</td>
<td className="text-center">Alpha and beta wipe samples, especially for very low-energy beta emitters such as H-3 and Ni-63</td>  </tr>  <tr>
<td className="text-center">Well-crystal sodium iodide counter</td>
<td className="text-center">Gamma wipe samples, allows for spectroscopic analysis of different isotopes if multiple isotopes are being used</td>  </tr>  </table>
<p>*&nbsp;Ion chambers are another major type of portable detector. These devices are intended for measurement of radiation dose rates rather than contamination. In general, they are poorly suited to contamination monitoring and should not be used for this purpose.</p>  <p>**&nbsp;Radioisotopes that decay via emission of alpha or beta particles often also emit gamma rays. Many isotopes, especially high atomic number materials such as uranium and radium, may exist in equilibrium with the other isotopes in their “decay chain”, which in turn emit many different types and energies of radiation. When choosing a contamination monitor, it is important to consider exactly what types of radiation will be present. For example, positron emission tomography (PET) isotopes decay by the emission of a positron (beta+) which in turn produces two high-energy (511 keV) gamma rays. It is the gamma rays that are of primary importance in the use of these isotopes, and a thick crystal NaI scintillator will detect these gammas very efficiently. However, a thin window Geiger detector will detect the beta+ emissions even more efficiently, and will generally have a much lower background (NB) count-rate.</p>
<h4>Detector efficiency</h4>  <p>The detector efficiency depends upon:</p>
<ul>
<li>the type of detector (Geiger-Müller, NaI scintillation, plastic/organic scintillation, proportional counter)</li>
<li>the detector size and shape</li>
<li>the distance from the detector to the radioactive material</li>
<li>the radioisotope and the type of radiation measured (alpha, beta and gamma radiations and their energies)</li>
<li>the backscatter of radiation toward the detector</li>
<li>the absorption of the radiation before it reaches the detector (by air and by the detector covering)</li>
</ul>  <p>The detector efficiency can be found by:</p>
<ol>
<li>counting standard source of known activity with your detector, in counts per second (cps).
<math display=&#39;block&#39;>   <semantics>
<mrow>
<mtext>efficiency&#x00A0;</mtext><mo>=</mo><mi>&#x0020;</mi><mi>&#x0020;</mi><mfrac>
<mrow>
<mtext>(detector&#x00A0;count&#x00A0;rate&#x00A0;-&#x00A0;background&#x00A0;count&#x00A0;rate)</mtext></mrow>
<mrow>
<mtext>known&#x00A0;activity&#x00A0;of&#x00A0;standard&#x00A0;source</mtext></mrow>
</mfrac>
</mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaaeyzaiaabA
gacaqGMbGaaeyAaiaabogacaqGPbGaaeyzaiaab6gacaqGJbGaaeyE
aiaabccacqGH9aqpiiGacqWFGaaicqWFGaaidaWcaaqaaiaabIcaca
qGKbGaaeyzaiaabshacaqGLbGaae4yaiaabshacaqGVbGaaeOCaiaa
bccacaqGJbGaae4BaiaabwhacaqGUbGaaeiDaiaabccacaqGYbGaae
yyaiaabshacaqGLbGaaeiiaiaab2cacaqGGaGaaeOyaiaabggacaqG
JbGaae4AaiaabEgacaqGYbGaae4BaiaabwhacaqGUbGaaeizaiaabc
cacaqGJbGaae4BaiaabwhacaqGUbGaaeiDaiaabccacaqGYbGaaeyy
aiaabshacaqGLbGaaeykaaqaaiaabUgacaqGUbGaae4BaiaabEhaca
qGUbGaaeiiaiaabggacaqGJbGaaeiDaiaabMgacaqG2bGaaeyAaiaa
bshacaqG5bGaaeiiaiaab+gacaqGMbGaaeiiaiaabohacaqG0bGaae
yyaiaab6gacaqGKbGaaeyyaiaabkhacaqGKbGaaeiiaiaabohacaqG
VbGaaeyDaiaabkhacaqGJbGaaeyzaaaaaaa@8795@
</annotation>   </semantics>  </math>
</li>
<li>referring to the documentation supplied by the vendor for your specific radioisotope(s). If not specified, contacting the vendor for the required information.</li>
</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="AppH"></div>
<h2 id="AppH">Appendix H: Classes of Nuclear Substances</h2>
<p>The following table organizes a number of common nuclear substances, including those for which surface contamination and waste disposal limits are typically incorporated into CNSC licences, into three classes &ndash; Class A, Class B, or Class C – on the basis of common radiological characteristics.</p>  <p>To find out the classification, for regulatory purposes, of any nuclear substance that is not listed below, contact the CNSC.</p>
<table className="table table-striped">  <tr>
<th>CLASS</th>
<th colSpan="5">RADIONUCLIDE</th>  </tr>  <tr>
<td rowspan="6" className="text-center"><strong>CLASS A</strong></td>
<td colSpan="5" className="text-center">Any listed alpha emitters and their daughter products</td>   </tr>  <tr>
<td className="text-center">Ag-110m</td>
<td className="text-center">Bi-210</td>
<td className="text-center">Co-56</td>
<td className="text-center">Co-60</td>
<td className="text-center">Cs-134</td>  </tr>  <tr>
<td className="text-center">Cs-137</td>
<td className="text-center">I-124</td>
<td className="text-center">Lu-177m</td>
<td className="text-center">Mn-52</td>
<td className="text-center">Na-22</td>  </tr>  <tr>
<td className="text-center">Po-210</td>
<td className="text-center">Pu-238</td>
<td className="text-center">Pu-239</td>
<td className="text-center">Pu-240</td>
<td className="text-center">Sb-124</td>  </tr>  <tr>
<td className="text-center">Ss-46</td>
<td className="text-center">Sr-82</td>
<td className="text-center">U-234</td>
<td className="text-center">U-235</td>
<td className="text-center">U-238</td>   </tr>  <tr>
<td className="text-center">V-48</td>
<td className="text-center">Zn-65</td>
<td className="text-center">&nbsp;</td>
<td className="text-center">&nbsp;</td>
<td className="text-center">&nbsp;</td>  </tr>  <tr>
<td rowspan="6"className="text-center" ><strong>CLASS B</strong></td>
<td className="text-center">Au-198</td>
<td className="text-center">Ba-133</td>
<td className="text-center">Br-82</td>
<td className="text-center">Ce-143</td>
<td className="text-center">Co-58</td>  </tr>  <tr>
<td className="text-center">Cu-67</td>
<td className="text-center">Fe-59</td>
<td className="text-center">Hg-194</td>
<td className="text-center">Hg-203</td>
<td className="text-center">I-131</td>  </tr>  <tr>
<td className="text-center">Ir-192</td>
<td className="text-center">La-140</td>
<td className="text-center">Mo-99</td>
<td className="text-center">Nb-95</td>
<td className="text-center">Pa-233</td>  </tr>  <tr>
<td className="text-center">Ra-223</td>
<td className="text-center">Re-186</td>
<td className="text-center">Re-188</td>
<td className="text-center">Ru-103</td>
<td className="text-center">Sb-122</td>  </tr>  <tr>
<td className="text-center">Sm-153</td>
<td className="text-center">Sr-90</td>
<td className="text-center">Xe-127</td>
<td className="text-center">Y-86</td>
<td className="text-center">Y-90</td>  </tr>  <tr>
<td className="text-center">Yb-169</td>
<td className="text-center">Zr-89</td>
<td className="text-center">Zr-95</td>
<td className="text-center">&nbsp;</td>
<td className="text-center">&nbsp;</td>  </tr>  <tr>
<td rowspan="11" className="text-center"><strong>CLASS C</strong></td>
<td className="text-center">C-11</td>
<td className="text-center">C-14</td>
<td className="text-center">Ca-45</td>
<td className="text-center">Cd-109</td>
<td className="text-center">Ce-141</td>  </tr>  <tr>
<td className="text-center">Cl-36</td>
<td className="text-center">Co-57</td>
<td className="text-center">Cr-51</td>
<td className="text-center">Cu-60</td>
<td className="text-center">Cu-61</td>  </tr>  <tr>
<td className="text-center">Cu-64</td>
<td className="text-center">F-18</td>
<td className="text-center">Fe-55</td>
<td className="text-center">Ga-67</td>
<td className="text-center">Ga-68</td>  </tr>  <tr>
<td className="text-center">Ge-68</td>
<td className="text-center">H-3</td>
<td className="text-center">I-123</td>
<td className="text-center">I-125</td>
<td className="text-center">In-111</td>  </tr>  <tr>
<td className="text-center">In-113m</td>
<td className="text-center">In-114</td>
<td className="text-center">K-42</td>
<td className="text-center">Kr-85</td>
<td className="text-center">Lu-177</td>  </tr>  <tr>
<td className="text-center">Mn-52m</td>
<td className="text-center">M-56</td>
<td className="text-center">N-13</td>
<td className="text-center">Na-24</td>
<td className="text-center">Nb-98</td>  </tr>  <tr>
<td className="text-center">Ni-63</td>
<td className="text-center">O-15</td>
<td className="text-center">P-32</td>
<td className="text-center">P-33</td>
<td className="text-center">Pd-103</td>  </tr>  <tr>
<td className="text-center">Pr-144</td>
<td className="text-center">Pu-241</td>
<td className="text-center">Rh-106</td>
<td className="text-center">S-35</td>
<td className="text-center">Sc-44</td>  </tr>  <tr>
<td className="text-center">Sn-113</td>
<td className="text-center">Sr-89</td>
<td className="text-center">Tc-94m</td>
<td className="text-center">Tc-99</td>
<td className="text-center">Tc-99m</td>  </tr>  <tr>
<td className="text-center">Te-127</td>
<td className="text-center">Tl-201</td>
<td className="text-center">V-49</td>
<td className="text-center">W-181</td>
<td className="text-center">W-188</td>  </tr>  <tr>
<td className="text-center">Xe-133</td>
<td className="text-center">Zn-63</td>
<td className="text-center">&nbsp;</td>
<td className="text-center">&nbsp;</td>
<td className="text-center">&nbsp;</td>  </tr>  </table>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="AppI"></div>
<h2 id="AppI">Appendix I: Categorization of Sealed Sources</h2>
<table className="table table-striped">  <tr>
<th className="text-center text-center">Radionuclide</th>
<th>Category 1 source activity (TBq)</th>
<th>Category 1 source activity (Ci)</th>
<th className="">Category 2 source activity (TBq)</th>
<th className="">Category 2 source activity (Ci)</th>
<th>Category 3 source activity (TBq)</th>
<th>Category 3 source activity (Ci)</th>  </tr>  <tr>
<td className="text-center">Americium-241<br /> (<sup>241</sup>Am)</td>
<td className="text-center">60</td>
<td className="text-center">1,600</td>
<td className="text-center">0.6</td>
<td className="text-center">16</td>
<td className="text-center">0.06</td>
<td className="text-center">1.6</td>  </tr>  <tr>
<td className="text-center">Americium-241 / Beryllium (<sup>241</sup>Am/Be)</td>
<td className="text-center">60</td>
<td className="text-center">1,600</td>
<td className="text-center">0.6</td>
<td className="text-center">16</td>
<td className="text-center">0.06</td>
<td className="text-center">1.6</td>  </tr>  <tr>
<td className="text-center">Californium 252 (<sup>252</sup>Cf)</td>
<td className="text-center">20</td>
<td className="text-center">540</td>
<td className="text-center">0.2</td>
<td className="text-center">5</td>
<td className="text-center">0.02</td>
<td className="text-center">0.5</td>  </tr>  <tr>
<td className="text-center">Cesium-137<br /> (<sup>137</sup>Cs)</td>
<td className="text-center">100</td>
<td className="text-center">2,700</td>
<td className="text-center">1</td>
<td className="text-center">27</td>
<td className="text-center">0.1</td>
<td className="text-center">2.7</td>  </tr>  <tr>
<td className="text-center">Cobalt-60<br /> (<sup>60</sup>Co)</td>
<td className="text-center">30</td>
<td className="text-center">810</td>
<td className="text-center">0.3</td>
<td className="text-center">8</td>
<td className="text-center">0.03</td>
<td className="text-center">0.8</td>  </tr>  <tr>
<td className="text-center">Curium-244<br /> (<sup>244</sup>Cm)</td>
<td className="text-center">50</td>
<td className="text-center">1,350</td>
<td className="text-center">0.5</td>
<td className="text-center">13</td>
<td className="text-center">0.05</td>
<td className="text-center">1.3</td>  </tr>  <tr>
<td className="text-center">Gadolinium-153 (<sup>153</sup>Gd)</td>
<td className="text-center">1,000</td>
<td className="text-center">27,000</td>
<td className="text-center">10</td>
<td className="text-center">270</td>
<td className="text-center">1</td>
<td className="text-center">27</td>  </tr>  <tr>
<td className="text-center">Iridium-192<br /> (<sup>192</sup>Ir)</td>
<td className="text-center">80</td>
<td className="text-center">2,160</td>
<td className="text-center">0.8</td>
<td className="text-center">21</td>
<td className="text-center">0.08</td>
<td className="text-center">2.1</td>  </tr>  <tr>
<td className="text-center">Plutonium-238 (<sup>238</sup>Pu)</td>
<td className="text-center">60</td>
<td className="text-center">1,620</td>
<td className="text-center">0.6</td>
<td className="text-center">16</td>
<td className="text-center">0.06</td>
<td className="text-center">1.6</td>  </tr>  <tr>
<td className="text-center">Plutonium-239 / Beryllium (<sup>239</sup>Pu/Be)</td>
<td className="text-center">60</td>
<td className="text-center">1,620</td>
<td className="text-center">0.6</td>
<td className="text-center">16</td>
<td className="text-center">0.06</td>
<td className="text-center">1.6</td>  </tr>  <tr>
<td className="text-center">Promethium-147 (<sup>147</sup>Pm)</td>
<td className="text-center">40,000</td>
<td className="text-center">1,080,000</td>
<td className="text-center">400</td>
<td className="text-center">10,080</td>
<td className="text-center">40</td>
<td className="text-center">1,100</td>  </tr>  <tr>
<td className="text-center">Radium-226<br /> (<sup>226</sup>Ra)</td>
<td className="text-center">40</td>
<td className="text-center">1,080</td>
<td className="text-center">0.4</td>
<td className="text-center">11</td>
<td className="text-center">0.04</td>
<td className="text-center">1.1</td>  </tr>  <tr>
<td className="text-center">Selenium-75<br /> (<sup>75</sup>Se)</td>
<td className="text-center">200</td>
<td className="text-center">5,400</td>
<td className="text-center">2</td>
<td className="text-center">54</td>
<td className="text-center">0.2</td>
<td className="text-center">5.4</td>  </tr>  <tr>
<td className="text-center">Strontium-90 (<sup>90</sup>Sr), Yttrium-90 (<sup>90</sup>Y)</td>
<td className="text-center">1,000</td>
<td className="text-center">27,000</td>
<td className="text-center">10</td>
<td className="text-center">270</td>
<td className="text-center">1</td>
<td className="text-center">27</td>  </tr>  <tr>
<td className="text-center">Thulium-170</td>
<td className="text-center">20,000</td>
<td className="text-center">540,000</td>
<td className="text-center">200</td>
<td className="text-center">5,400</td>
<td className="text-center">20</td>
<td className="text-center">540</td>  </tr>  <tr>
<td className="text-center">Ytterbium-169</td>
<td className="text-center">300</td>
<td className="text-center">8,100</td>
<td className="text-center">3</td>
<td className="text-center">81</td>
<td className="text-center">0.3</td>
<td className="text-center">8.1</td>  </tr>  </table>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="AppJ"></div>
<h2 id="AppJ">Appendix J: Disposal of Activated Components</h2>
<p>According the <em>Nuclear Substances and Radiation Devices Regulations</em>, a licensee may only dispose of nuclear substances once the activity of the material is below its exemption quantity (S5.1(2)). For accelerators, there are many isotopes present in the head of the machine due to activation. The following table indicates the required wait time to dispose of materials based on the decay time of the limiting isotope present in the machine and the time since the last "beam-on" time.</p>  <p><strong>Licensees wishing to dispose of materials prior to this wait time may only transfer the nuclear substances to a person licensed by the CNSC to possess these nuclear substances</strong>. Accelerators with a maximum X-ray beam of 10 MV or less have low activity or the isotopes present due to activation are short lived and consequently these accelerators may be disposed of within one day.</p>   <p>Licensees planning to dispose of the entire accelerator may use this table to help plan the operation of the machine for the final weeks of operation prior to disposal to minimize the wait time between decommissioning and disposal. Note that these wait times include the assumption that <strong>only one component or accelerator is being disposed of at a time</strong>. All other assumptions regarding the data in these tables are listed at the end of this appendix.</p>
<table className="table table-striped">  <caption className="text-left">Wait times in days after last 15 MV operation for 15 MV Elekta accelerators</caption>  <tr>
<th>Total annual workload (MU/100)</th>
<th>Entire linear accelerator</th>
<th>Target assembly and flattening filter</th>
<th>Linear accelerator w/o target assembly or flattening filter</th>
<th>Limiting isotopes for entire linear accelerator</th>  </tr>  <tr>
<td className="text-center">15000</td>
<td className="text-center">5</td>
<td className="text-center">4</td>
<td className="text-center">1</td>
<td className="text-center">Re-184, Co-57, Mn-54</td>  </tr>  <tr>
<td className="text-center">20000</td>
<td className="text-center">10</td>
<td className="text-center">6</td>
<td className="text-center">1</td>
<td className="text-center">Re-184, Co-57, Mn-54</td>  </tr>  <tr>
<td className="text-center">25000</td>
<td className="text-center">26</td>
<td className="text-center">19</td>
<td className="text-center">1</td>
<td className="text-center">Re-184, Co-57, Mn-54</td>  </tr>  <tr>
<td className="text-center">30000</td>
<td className="text-center">43</td>
<td className="text-center">35</td>
<td className="text-center">1</td>
<td className="text-center">Re-184, Co-57, Mn-54</td>  </tr>  <tr>
<td className="text-center">35000</td>
<td className="text-center">59</td>
<td className="text-center">49</td>
<td className="text-center">1</td>
<td className="text-center">Re-184, Co-57, Mn-54</td>  </tr>  <tr>
<td className="text-center">40000</td>
<td className="text-center">74</td>
<td className="text-center">63</td>
<td className="text-center">1</td>
<td className="text-center">Re-184, Co-57, Mn-54</td>  </tr>  </table>  <br />  <table className="table table-striped">  <caption className="text-left">Wait times in days after last 18 MV operation for Elekta accelerators</caption>  <tr>
<th>Total annual workload (MU/100)</th>
<th>Entire linear accelerator</th>
<th>Target assembly and flattening filter</th>
<th>Linear accelerator w/o target assembly or flattening filter</th>
<th>Limiting isotopes for entire linear accelerator</th>  </tr>  <tr>
<td className="text-center">15000</td>
<td className="text-center">95</td>
<td className="text-center">82</td>
<td className="text-center">1</td>
<td className="text-center">Mn-54, Co-57, W-181</td>  </tr>  <tr>
<td className="text-center">20000</td>
<td className="text-center">141</td>
<td className="text-center">123</td>
<td className="text-center">2</td>
<td className="text-center">Mn-54, Co-57, W-181</td>  </tr>  <tr>
<td className="text-center">25000</td>
<td className="text-center">188</td>
<td className="text-center">163</td>
<td className="text-center">3</td>
<td className="text-center">Mn-54, Co-57, W-181</td>  </tr>  <tr>
<td className="text-center">30000</td>
<td className="text-center">236</td>
<td className="text-center">205</td>
<td className="text-center">3</td>
<td className="text-center">Mn-54, Co-57, W-181</td>  </tr>  <tr>
<td className="text-center">35000</td>
<td className="text-center">283</td>
<td className="text-center">248</td>
<td className="text-center">4</td>
<td className="text-center">Mn-54, Co-57, W-181</td>  </tr>  <tr>
<td className="text-center">40000</td>
<td className="text-center">328</td>
<td className="text-center">290</td>
<td className="text-center">5</td>
<td className="text-center">Mn-54, Co-57, W-181</td>  </tr>  </table>  <br />  <table className="table table-striped">  <caption className="text-left">Wait times in days after last 15 MV operation for 15 MV Siemens accelerators</caption>  <tr>
<th>Total annual workload (MU/100)</th>
<th>Entire linear accelerator</th>
<th>Target assembly and flattening filter</th>
<th>Linear accelerator w/o target assembly or flattening filter</th>
<th>Limiting isotopes for entire linear accelerator</th>  </tr>  <tr>
<td className="text-center">15000</td>
<td className="text-center">3</td>
<td className="text-center">3</td>
<td className="text-center">1</td>
<td className="text-center">Co-57, W-181, W-185</td>  </tr>  <tr>
<td className="text-center">20000</td>
<td className="text-center">7</td>
<td className="text-center">4</td>
<td className="text-center">1</td>
<td className="text-center">Co-57, W-181, W-185</td>  </tr>  <tr>
<td className="text-center">25000</td>
<td className="text-center">48</td>
<td className="text-center">13</td>
<td className="text-center">1</td>
<td className="text-center">Co-57, W-181, W-185</td>  </tr>  <tr>
<td className="text-center">30000</td>
<td className="text-center">100</td>
<td className="text-center">61</td>
<td className="text-center">1</td>
<td className="text-center">Co-57, W-181, W-185</td>  </tr>  <tr>
<td className="text-center">35000</td>
<td className="text-center">146</td>
<td className="text-center">108</td>
<td className="text-center">1</td>
<td className="text-center">Co-57, W-181, Mn-54</td>  </tr>  <tr>
<td className="text-center">40000</td>
<td className="text-center">188</td>
<td className="text-center">152</td>
<td className="text-center">1</td>
<td className="text-center">Co-57, W-181, Mn-54</td>  </tr>  </table>  <br />  <table className="table table-striped">  <caption className="text-left">Wait times in days after last 18 MV operation for Siemans accelerators</caption>  <tr>
<th>Total annual workload (MU/100)</th>
<th>Entire linear accelerator</th>
<th>Target assembly and flattening filter</th>
<th>Linear accelerator w/o target assembly or flattening filter</th>
<th>Limiting isotopes for entire linear accelerator</th>  </tr>  <tr>
<td className="text-center">15000</td>
<td className="text-center">163</td>
<td className="text-center">146</td>
<td className="text-center">1</td>
<td className="text-center">Co-57, Mn-54, W-181</td>  </tr>  <tr>
<td className="text-center">20000</td>
<td className="text-center">266</td>
<td className="text-center">251</td>
<td className="text-center">1</td>
<td className="text-center">Co-57, Mn-54, W-181</td>  </tr>  <tr>
<td className="text-center">25000</td>
<td className="text-center">349</td>
<td className="text-center">335</td>
<td className="text-center">1</td>
<td className="text-center">Co-57, Mn-54, Zn-65</td>  </tr>  <tr>
<td className="text-center">30000</td>
<td className="text-center">419</td>
<td className="text-center">405</td>
<td className="text-center">1</td>
<td className="text-center">Co-57, Mn-54, Zn-65</td>  </tr>  <tr>
<td className="text-center">35000</td>
<td className="text-center">478</td>
<td className="text-center">464</td>
<td className="text-center">1</td>
<td className="text-center">Co-57, Mn-54, Zn-65</td>  </tr>  <tr>
<td className="text-center">40000</td>
<td className="text-center">530</td>
<td className="text-center">516</td>
<td className="text-center">1</td>
<td className="text-center">Co-57, Mn-54, Zn-65</td>  </tr>  </table>  <br />  <table className="table table-striped">  <caption className="text-left">Wait times in days after last 15 MV operation for 15 MV Varian accelerators</caption>  <tr>
<th>Total annual workload (MU/100)</th>
<th>Entire linear accelerator</th>
<th>Target assembly and flattening filter</th>
<th>Linear accelerator w/o target assembly or flattening filter</th>
<th>Limiting isotopes for entire linear accelerator</th>  </tr>  <tr>
<td className="text-center">15000</td>
<td className="text-center">6</td>
<td className="text-center">5</td>
<td className="text-center">1</td>
<td className="text-center">Co-57, W-181, W-185</td>  </tr>  <tr>
<td className="text-center">20000</td>
<td className="text-center">38</td>
<td className="text-center">6</td>
<td className="text-center">2</td>
<td className="text-center">Co-57, W-181, W-185</td>  </tr>  <tr>
<td className="text-center">25000</td>
<td className="text-center">87</td>
<td className="text-center">26</td>
<td className="text-center">2</td>
<td className="text-center">Co-57, W-181, W-185</td>  </tr>  <tr>
<td className="text-center">30000</td>
<td className="text-center">131</td>
<td className="text-center">65</td>
<td className="text-center">3</td>
<td className="text-center">Co-57, w-181, W-185</td>  </tr>  <tr>
<td className="text-center">35000</td>
<td className="text-center">169</td>
<td className="text-center">101</td>
<td className="text-center">4</td>
<td className="text-center">Co-57, W-181, Co-60</td>  </tr>  <tr>
<td className="text-center">40000</td>
<td className="text-center">205</td>
<td className="text-center">133</td>
<td className="text-center">4</td>
<td className="text-center">Co-57, W-181, Co-60</td>  </tr>  </table>  <br />  <table className="table table-striped">  <caption className="text-left">Wait times in days after last 18 MV operation for Varian accelerators</caption>  <tr>
<th>Total annual workload (MU/100)</th>
<th>Entire linear accelerator</th>
<th>Target assembly and flattening filter</th>
<th>Linear accelerator w/o target assembly or flattening filter</th>
<th>Limiting isotopes for entire linear accelerator</th>  </tr>  <tr>
<td className="text-center">15000</td>
<td className="text-center">161</td>
<td className="text-center">144</td>
<td className="text-center">4</td>
<td className="text-center">Co-57, W-181, Co-60</td>  </tr>  <tr>
<td className="text-center">20000</td>
<td className="text-center">247</td>
<td className="text-center">223</td>
<td className="text-center">9</td>
<td className="text-center">Co-57, W-181, Co-60</td>  </tr>  <tr>
<td className="text-center">25000</td>
<td className="text-center">321</td>
<td className="text-center">289</td>
<td className="text-center">35</td>
<td className="text-center">Co-57, W-181, Co-60</td>  </tr>  <tr>
<td className="text-center">30000</td>
<td className="text-center">386</td>
<td className="text-center">346</td>
<td className="text-center">66</td>
<td className="text-center">Co-57, Co-60, W-181</td>  </tr>  <tr>
<td className="text-center">35000</td>
<td className="text-center">444</td>
<td className="text-center">396</td>
<td className="text-center">94</td>
<td className="text-center">Co-57, Co-60, W-181</td>  </tr>  <tr>
<td className="text-center">40000</td>
<td className="text-center">497</td>
<td className="text-center">441</td>
<td className="text-center">118</td>
<td className="text-center">Co-57, Co-60, W-181</td>  </tr>  </table>
<p>Assumptions:</p>
<ul>
<li>The high-energy workload represents 1/3 of the total annual workload listed in the first column of the tables.</li>
<li>Results are normalized to seven years of continuous operation.</li>
<li>All activities are in the target assembly and flattening filter except:
<ul>
<li>Sb-122 and Sb-124, which are uniformly distributed within the lead shielding, modeled as a cylinder of 50 cm inner diameter and 60 cm outer diameter, 50 cm from isocentre</li>
<li>Co-60, which is present in the permanent magnets of the drive motors for the collimation system</li>
<li>W-181, W-185 and W-187, which are uniformly distributed within the tungsten collimation system</li>
<li>the flattening filter, upper and lower jaws and MLC are assumed to be at a distance of 80, 58, 48 and 37cm from isocentre, respectively</li>
</ul></li>
</ul>
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
<h2 id="glossary">Glossary</h2>
<dl>
<dt><strong>abandon</strong> <span lang="fr"><em>(abandonner)</em></span></dt>
<dd>Remove from regulatory control.</dd>
<dt><strong>action level</strong> <span lang="fr"><em>(seuil d&#39;intervention)</em></span></dt>
<dd>A specific dose of radiation or other parameter that, if reached, may indicate a loss of control of part of a licensee&#39;s radiation protection program and triggers a requirement for specific action to be taken. (Source: <a href="http://laws-lois.justice.gc.ca/eng/regulations/SOR-2000-203/"><em>Radiation Protection Regulations</em></a>)</dd>
<dt><strong>activity</strong> <span lang="fr"><em>(activité)</em></span></dt>
<dd>The number of nuclear transformations occurring per unit of time, as measured in becquerels. (Source: <a href="http://laws-lois.justice.gc.ca/eng/regulations/SOR-2015-145/"><em>Packaging and Transport of Nuclear Substances Regulations, 2015</em></a>)<br />
OR<br />
See licensed activity.<br />
OR<br />
The condition of being active or moving about.<br />
OR<br />
A particular occupation or pursuit.</dd>
<dt><strong>air kerma</strong> <span lang="fr"><em>(kerma de l&#39;air)</em></span></dt>
<dd>The kerma (kinetic energy released in matter) value for air, in gray, where kerma (K) is defined as:<br />
<math display=&#39;block&#39;>   <semantics>
<mrow>
<mi>K</mi><mo>=</mo><mfrac>
<mrow>
<mi>d</mi><msub>
<mi>E</mi>
<mrow>
<mi>t</mi><mi>r</mi></mrow>
</msub>
</mrow>
<mrow>
<mi>d</mi><mi>m</mi></mrow>
</mfrac>
</mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaam4saiabg2
da9maalaaabaGaamizaiaadweadaWgaaWcbaGaamiDaiaadkhaaeqa
aaGcbaGaamizaiaad2gaaaaaaa@3D90@
</annotation>   </semantics>  </math>
Where d<em>E<sub>tr</sub></em> is the sum of the initial kinetic energies of all charged ionizing particles liberated by uncharged ionizing particles in air of mass d<em>m</em>.</dd>
<dt><strong>annual limit on intake (ALI)</strong> <span lang="fr"><em>(limite annuelle d&#39;incorporation [LAI])</em></span></dt>
<dd>The activity, in becquerel, of a radionuclide that will deliver an effective dose of 20 mSv during the 50 year period after the radionuclide is taken into the body of a person 18 years old or older or during the period beginning at intake and ending at age 70 after it is taken into the body of a person less than 18 years old. (Source: <a href="http://laws-lois.justice.gc.ca/eng/regulations/SOR-2000-203/"><em>Radiation Protection Regulations</em></a>)</dd>
<dt><strong>as low as reasonably achievable (ALARA)</strong> <span lang="fr"><em>(niveau le plus bas qu&#39;il soit raisonnablement possible d&#39;atteindre [ALARA])</em></span></dt>
<dd>A principle of radiation protection that holds that exposures to radiation are kept as low as reasonably achievable, social and economic factors taken into account. Section 4 of the <a href="http://laws-lois.justice.gc.ca/eng/regulations/SOR-2000-203/"><em>Radiation Protection Regulations</em></a> stipulates licensee requirements with respect to ALARA.</dd>
<dt><strong>Category 1 source</strong> <span lang="fr"><em>(source de catégorie 1)</em></span></dt>
<dd>A sealed source that, if not safely managed or securely protected, would be likely to cause permanent injury to a person who handled it, or was otherwise in contact with it, for more than a few minutes. It would probably be fatal to be close to this amount of unshielded radioactive material for a period of a few minutes to an hour. In Canada, these sources are typically used in practices such as self-shielded irradiators and radiation teletherapy. <strong>Note:</strong> Use Arabic numerals for this term. Also note that categories for sources do not have the same meaning as categories for nuclear material (compare to Category I nuclear material).</dd>
<dt><strong>Category 2 source</strong> <span lang="fr"><em>(source de catégorie 2)</em></span></dt>
<dd>A sealed source that, if not safely managed or securely protected, could cause permanent injury to a person who handled it, or was otherwise in contact with it, for a short time (minutes to hours). It could possibly be fatal to be close to this amount of unshielded radioactive material for a period of hours to days. In Canada, these sources are typically used in practices such as industrial gamma radiography and oil well logging. <strong>Note:</strong> Use Arabic numerals for this term. Also note that categories for sources do not have the same meaning as categories for nuclear material (compare to Category II nuclear material).</dd>
<dt><strong>Category 3 source</strong> <span lang="fr"><em>(source de catégorie 3)</em></span></dt>
<dd>A sealed source that, if not safely managed or securely protected, could cause permanent injury to a person who handled it, or was otherwise in contact with it, for some hours. It could possibly – although it is unlikely &ndash; be fatal to be close to this amount of unshielded radioactive material for a period of days to weeks. In Canada, these sources are typically used in practices such as fixed nuclear gauges and high dose rate brachytherapy. <strong>Note:</strong> Use Arabic numerals for this term. Also note that categories for sources do not have the same meaning as categories for nuclear material (compare to Category III nuclear material).</dd>
<dt><strong>Category 4 source</strong> <span lang="fr"><em>(source de catégorie 4)</em></span></dt>
<dd>A sealed source that is very unlikely to permanently injure anyone. However, this amount of unshielded radioactive material, if not safely managed or securely protected, could possibly &ndash; although it is unlikely &ndash; temporarily injure someone who handled it or was otherwise in contact with it, or who was close to it for a period of many weeks. In Canada, these sources are typically used in practices such as portable nuclear gauges. <strong>Note:</strong> Use Arabic numerals for this term. Also note that categories for sources do not have the same meaning as categories for nuclear material (compare to Category I nuclear material, Category II nuclear material and Category III nuclear material).</dd>
<dt><strong>Category 5 source</strong> <span lang="fr"><em>(source de catégorie 5)</em></span></dt>
<dd>A sealed source that could not permanently injure someone. In Canada, these sources are typically used in practices such as low dose rate brachytherapy or in gas chromatography instruments. <strong>Note:</strong> Use Arabic numerals for this term. Also note that categories for sources do not have the same meaning as categories for nuclear material (compare to Category I nuclear material, Category II nuclear material, and Category III nuclear material).</dd>
<dt><strong>Class II nuclear facility</strong> <span lang="fr"><em>(installation nucléaire de catégorie II)</em></span></dt>
<dd>A facility that includes Class II prescribed equipment. (Source: <a href="http://laws-lois.justice.gc.ca/eng/regulations/SOR-2000-205/"><em>Class II Nuclear Facilities and Prescribed Equipment Regulations</em></a>)</dd>
<dt><strong>Class II prescribed equipment</strong> <span lang="fr"><em>(équipement réglementé de catégorie II)</em></span></dt>
<dd>[Any of the following:]<br />
(a) an irradiator that uses more than 1015 Bq of a nuclear substance;<br />
(b) an irradiator that requires shielding which is not part of the irradiator and that is designed to deliver a dose of radiation at a rate exceeding 1 cGy/min at a distance of 1 m;<br />
(c) a radioactive source teletherapy machine;<br />
(d) a particle accelerator that is capable of producing nuclear energy and has a beam energy of less than 50 MeV for beams of particles with a mass equal to or less than 4 atomic mass units;<br />
(e) a particle accelerator that is capable of producing nuclear energy and has a beam energy of no more than 15 MeV per atomic mass for beams of particles with a mass greater than 4 atomic mass units; or<br />
(f) a brachytherapy remote afterloader.<br />
(Source: <a href="http://laws-lois.justice.gc.ca/eng/regulations/SOR-2000-205/"><em>Class II Nuclear Facilities and Prescribed Equipment Regulations</em></a>)</dd>
<dt><strong>dosimeter</strong> <span lang="fr"><em>(dosimètre)</em></span></dt>
<dd>A device for measuring a dose of radiation that is worn or carried by an individual. (Sources: <a href="http://laws-lois.justice.gc.ca/eng/regulations/SOR-2000-203/"><em>Nuclear Substances and Radiation Devices Regulations</em></a>; <a href="http://laws-lois.justice.gc.ca/eng/regulations/SOR-2000-203/"><em>Radiation Protection Regulations</em></a>)<br />
<strong>Note:</strong> Among common types are thermoluminescent and optically stimulated luminescent dosimeters.</dd>
<dt><strong>dosimetry service</strong> <span lang="fr"><em>(services de dosimétrie)</em></span></dt>
<dd>A prescribed facility for the measurement and monitoring of doses of radiation. (Source: Nuclear Safety and Control Act)</dd>
<dt><strong>effective dose (E)</strong> <span lang="fr"><em>(dose efficace[E])</em></span></dt>
<dd>The sum of the products, in sievert, obtained by multiplying the equivalent dose of radiation received by and committed to each organ or tissue set out in column 1 of an item of Schedule 1 by the weighting factor set out in column 2 of that item. (Source: <a href="http://laws-lois.justice.gc.ca/eng/regulations/SOR-2000-203/"><em>Radiation Protection Regulations</em></a>)<br />
<strong>Note 1:</strong> "Effective dose" is a measure of the total detriment, or risk, due to an exposure to ionizing radiation. If the exposure to different organs or tissues is not uniform (as is the case when radionuclides are deposited in the body), the concept of effective dose is used. The basic idea is to express the risk from the exposure of a single organ or tissue in terms of the equivalent risk from an exposure to the whole body. The unit of effective dose is the sievert.<br />
<strong>Note 2:</strong> "Equivalent dose" and "effective dose" are protection quantities used to reflect how radiation exposure can affect overall health of the human body. They specify dose values, which are derived from the body&rsquo;s absorbed dose, for limiting the occurrence of stochastic health effects below acceptable levels and avoiding tissue reactions. The effective dose is designed to reflect these differences and how exposure can affect overall health of the whole body.<br />
<strong>Note 3:</strong> The term weighting factor refers to the tissue weighting factor, which takes into account that different organs and tissue have different radiation sensitivities. For example, bone marrow is much more radiosensitive than muscle or nerve tissue. Effective dose is the summation of the tissue equivalent doses, each multiplied by the appropriate tissue weighting factor. It is defined by:<br />
<math display=&#39;block&#39;>   <semantics>
<mrow>
<mi>E</mi><mo>=</mo><mstyle displaystyle=&#39;true&#39;>
<munderover>
<mo>&#x2211;</mo>
<mi>T</mi>
<mrow></mrow>
</munderover>
<mrow>
<msub>
<mi>w</mi>
<mi>T</mi>
</msub>
</mrow>
</mstyle><mstyle displaystyle=&#39;true&#39;>
<munderover>
<mo>&#x2211;</mo>
<mi>R</mi>
<mrow></mrow>
</munderover>
<mrow>
<msub>
<mi>w</mi>
<mi>R</mi>
</msub>
<msub>
<mi>D</mi>
<mrow>
<mi>T</mi><mo>,</mo><mi>R</mi></mrow>
</msub>
</mrow>
</mstyle></mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaamyraiabg2
da9maaqahabaGaam4DamaaBaaaleaacaWGubaabeaaaeaacaWGubaa
baaaniabggHiLdGcdaaeWbqaaiaadEhadaWgaaWcbaGaamOuaaqaba
GccaWGebWaaSbaaSqaaiaadsfacaGGSaGaamOuaaqabaaabaGaamOu
aaqaaaqdcqGHris5aaaa@454D@
</annotation>   </semantics>  </math>
where <em>w<sub>T</sub></em> is the tissue weighting factor with <em>&sum;w<sub>T</sub></em> = 1. The sum is performed over all organs and tissues considered in the definition of E.<br />
<strong>Note 4:</strong> Use of absorbed dose alone is not valid for estimating risk, as radiation effects depend not only on the absorbed dose but also on a) the type of radiation, b) the distribution of energy absorption in time and space within the human body and c) the radiosensitivity of the exposed tissues or organs.</dd>
<dt><strong>export</strong> <span lang="fr"><em>(exportation)</em></span></dt>
<dd>The transfer of a nuclear substance, prescribed equipment or prescribed information from Canada to a foreign destination.</dd>
<dt><strong>fail-safe</strong> <span lang="fr"><em>(à sûreté intégrée)</em></span></dt>
<dd>The ability of a system or component to move to a predetermined safe state when a failure occurs.</dd>
<dt><strong>general public</strong> <span lang="fr"><em>(population en général)</em></span></dt>
<dd>Any person who is not designated as a nuclear energy worker.</dd>
<dt><strong>import</strong> <span lang="fr"><em>(importation)</em></span></dt>
<dd>The transfer of a nuclear substance, prescribed equipment or prescribed information into Canada from a foreign location.</dd>
<dt><strong>industrial or research accelerator</strong> <span lang="fr"><em>(accélérateur industriel ou de recherche)</em></span></dt>
<dd>A particle accelerator that is used solely for industrial or research purposes. <strong>Note:</strong> In instances where research is to be conducted using an accelerator that is primarily being used for other applications, the accelerator should be licensed according to its primary intended use.</dd>
<dt><strong>isotope production accelerator</strong> <span lang="fr"><em>(accélérateur pour la production d&#39;isotopes)</em></span></dt>
<dd>A particle accelerator that is designed and used for producing nuclear substances by irradiating a target material.</dd>
<dt><strong>leak test</strong> <span lang="fr"><em>(épreuve d&#39;étanchéité)</em></span></dt>
<dd>With respect to sealed sources (including sealed sources within prescribed equipment) or nuclear substances used as shielding, a method of verifying the integrity of the   encapsulation of the sealed source or ensuring that the nuclear substance used for shielding is not readily removable from the surface of that shielding.</dd>
<dt><strong>licensed activity</strong> <span lang="fr"><em>(activité autorisée)</em></span></dt>
<dd>An activity described in paragraph 26(a), (c) or (e) of the Act that a licence authorizes the licensee to carry on in relation to a Class II nuclear facility or Class II prescribed equipment. (Source: <a href="http://laws-lois.justice.gc.ca/eng/regulations/SOR-2000-205/"><em>Class II Nuclear Facilities and Prescribed Equipment Regulations</em></a>)</dd>
<dt><strong>licensing basis</strong> <span lang="fr"><em>(fondement d&#39;autorisation)</em></span></dt>
<dd><p>A set of requirements and documents for a regulated facility or activity comprising:
<ul>
<li>the regulatory requirements set out in the applicable laws and regulations</li>
<li>the conditions and safety and control measures described in the facility&#39;s or activity&#39;s licence and the documents directly referenced in that licence</li>
<li>the safety and control measures described in the licence application and the documents needed to support that licence application</li>
</ul></p></dd>
<dt><strong>logging</strong> <span lang="fr"><em>(diagraphie)</em></span></dt>
<dd>The use of sealed sources to obtain subsurface geological information.</dd>
<dt><strong>nuclear energy worker (NEW)</strong> <span lang="fr"><em>(travailleur du secteur nucléaire [TSN])</em></span></dt>
<dd>A person who is required, in the course of the person&#39;s business or occupation in connection with a nuclear substance or nuclear facility, to perform duties in such circumstances that there is a reasonable probability that the person may receive a dose of radiation that is greater than the prescribed limit for the general public. (Source: <a href="http://laws-lois.justice.gc.ca/eng/acts/N-28.3/"><em>Nuclear Safety and Control Act</em></a>)</dd>
<dt><strong>nuclear substance</strong> <span lang="fr"><em>(substance nucléaire)</em></span></dt>
<dd>Means:<br />
(a) deuterium, thorium, uranium or an element with an atomic number greater than 92;<br />
(b) a derivative or compound of deuterium, thorium, uranium or of an element with an atomic number greater than 92;<br />
(c) a radioactive nuclide;<br />
(d) a substance that is prescribed as being capable of releasing nuclear energy or as being required for the production or use of nuclear energy;<br />
(e) a radioactive by-product of the development, production or use of nuclear energy; and <br />
(f) a radioactive substance or radioactive thing that was used for the development or production, or in connection with the use, of nuclear energy.<br />
(Source: <a href="http://laws-lois.justice.gc.ca/eng/acts/N-28.3/"><em>Nuclear Safety and Control Act</em></a>)</dd>
<dt><strong>occupancy factor</strong> <span lang="fr"><em>(facteur d&#39;occupation)</em></span></dt>
<dd>The fraction of total time during which a radiation field is present at a particular location, for which any one individual would reasonably be expected to be present at that location. This factor (&le;&nbsp;1) is multiplied by the total radiation dose at that location, to derive the maximum personal dose any single person would be expected to receive.</dd>
<dt><strong>possess</strong> <span lang="fr"><em>(avoir en sa possession)</em></span></dt>
<dd>For licensing purposes, have the care and control of a nuclear substance(s) or radiation device(s). Note that having possession is distinct from ownership.</dd>
<dt><strong>prescribed equipment </strong><span lang="fr"><em>(&eacute;quipement r&eacute;glement&eacute;)</em></span></dt>
<dd>The equipment prescribed by section 20. (Source: <a href="http://laws-lois.justice.gc.ca/eng/regulations/SOR-2000-202/"><em>General Nuclear Safety and Control Regulations</em></a>)<br />
<strong>Note 1:</strong> Section 20 states that each of the following items is prescribed equipment for the purposes of the NSCA:
<ul>
<li>a package, special form radioactive material, low dispersible radioactive material, fissile-excepted radioactive material, radioactive material that has a basic radionuclide value that is not listed in the IAEA Regulations and an instrument or article that has an alternative activity limit for an exempt consignment, as those terms are defined in subsection 1(1) of the <a href="http://laws-lois.justice.gc.ca/eng/regulations/SOR-2015-145/"><em>Packaging and Transport of Nuclear Substances Regulations, 2015</em></a></li>
<li>a radiation device and a sealed source, as defined in section 1 of the <a href="http://laws-lois.justice.gc.ca/eng/regulations/SOR-2000-207/"><em>Nuclear Substances and Radiation Devices Regulations</em></a></li>
<li>Class II prescribed equipment, as defined in section 1 of the <a href="http://laws-lois.justice.gc.ca/eng/regulations/SOR-2000-205/"><em>Class II Nuclear Facilities and Prescribed Equipment Regulations</em></a></li>
<li>equipment that is capable of being used in the design, production, operation or maintenance of a nuclear weapon or nuclear explosive device</li>
</ul>
<strong>Note 2:</strong> All controlled nuclear equipment is prescribed equipment for the purposes of the NSCA, with respect to the import and export of that equipment. See also <a href="#C17">controlled nuclear equipment</a>.</dd>
<dt><strong>prescribed information </strong><span lang="fr"><em>(renseignements r&eacute;glement&eacute;s)</em></span></dt>
<dd>The information prescribed by section 21. (Source: <a href="http://laws-lois.justice.gc.ca/eng/regulations/SOR-2000-202/"><em>General Nuclear Safety and Control Regulations</em></a>)<br />
<strong>Note 1:</strong> Section 21 states that information that concerns any of the following, including a record of that information, is prescribed information for the purposes of the <a href="http://laws-lois.justice.gc.ca/eng/acts/N-28.3/"><em>Nuclear Safety and Control Act</em></a> (NSCA):
<ul>
<li>a nuclear substance that is required for the design, production, use, operation or maintenance of a nuclear weapon or nuclear explosive device, including the properties of the nuclear substance</li>
<li>the design, production, use, operation or maintenance of a nuclear weapon or nuclear explosive device</li>
<li>the security arrangements, security equipment, security systems and security procedures established by a licensee in accordance with the NSCA, the regulations made under the NSCA or the licence, and any incident relating to security</li>
<li>the route or schedule for the transport of Category I, II or III nuclear material, as defined in section 1 of the <a href="http://laws-lois.justice.gc.ca/eng/regulations/SOR-2000-209/"><em>Nuclear Security Regulations</em></a></li>
</ul>
<strong>Note 2:</strong> All controlled nuclear information is prescribed information for the purposes of the NSCA, with respect to the import and export of that information, unless it is made public in accordance with the NSCA, the regulations made under the NSCA or a licence. See also <a href="#C18">controlled nuclear information</a>.</dd>
<dt><strong>radiation survey meter</strong> <span lang="fr"><em>(radiamètre)</em></span></dt>
<dd>An instrument that is capable of measuring radiation dose rates. (Sources: <a href="http://laws-lois.justice.gc.ca/eng/regulations/SOR-2000-205/"><em>Class II Nuclear Facilities and Prescribed Equipment Regulations</em></a>; <a href="http://laws-lois.justice.gc.ca/eng/regulations/SOR-2000-207/"><em>Nuclear Substances and Radiation Devices Regulations</em></a>)</dd>
<dt><strong>sealed source </strong><span lang="fr"><em>(source scell&eacute;e)</em></span></dt>
<dd>A radioactive nuclear substance in a sealed capsule or in a cover to which the substance is bonded, where the capsule or cover is strong enough to prevent contact with or the dispersion of the substance under the conditions for which the capsule or cover is designed. (Sources: <a href="http://laws-lois.justice.gc.ca/eng/regulations/SOR-2000-204/"><em>Class I Nuclear Facilities Regulations</em></a>; <a href="http://laws-lois.justice.gc.ca/eng/regulations/SOR-2000-205/"><em>Class II Nuclear Facilities and Prescribed Equipment Regulations</em></a>; <a href="http://laws-lois.justice.gc.ca/eng/regulations/SOR-2000-207/"><em>Nuclear Substances and Radiation Devices Regulations</em></a>)</dd>
<dt><strong>servicing</strong> <span lang="fr"><em>(entretien)</em></span></dt>
<dd>In respect of Class II prescribed equipment, means any maintenance of the equipment, including installation, repair or dismantling, other than any installation, repair or dismantling that constitutes routine operating procedures<br />
(a) as indicated in the manufacturer&#39;s operating manual for the equipment; or<br />
(b) as authorized in the licence issued in respect of the possession or use of the equipment.<br />
(Source: <a href="http://laws-lois.justice.gc.ca/eng/regulations/SOR-2000-205/"><em>Class II Nuclear Facilities and Prescribed Equipment Regulations</em></a>)<br />
<strong>Note:</strong> Sealed source installation or replacement, as well as any repair that could expose the sealed source, reduce the shielding around the sealed source, or affect the drive control for radiotherapy, is considered as servicing.</dd>
<dt><strong>storage</strong> <span lang="fr"><em>(stockage)</em></span></dt>
<dd>With respect to nuclear substances and radiation devices, possession for storage only.</dd>
<dt><strong>transfer</strong> <span lang="fr"><em>(transférer)</em></span></dt>
<dd>Move nuclear material, both domestic (between Canadian material balance areas) and foreign (imports and exports). <strong>Note:</strong> This definition applies specifically to nuclear material accounting.<br />
OR<br />
Change possession of a nuclear substance or radiation device from one licensee to another where both are located within Canada.<br />
OR<br />
Move a nuclear substance or radiation device from one location to another, where both places are located within Canada.<br />
OR<br />
See export <em>or</em> import.</dd>
<dt><strong>transport</strong> <span lang="fr"><em>(transporter)</em></span></dt>
<dd>The handling, carrying or storage in transit and receipt at the final destination of packages. Transport includes normal and accident conditions encountered in carriage and in storage during transit.</dd>
<dt><strong>unsealed source</strong> <span lang="fr"><em>(source non scellée)</em></span></dt>
<dd>A source other than a sealed source. (Source: Nuclear Substances and Radiation Devices Regulations)  <strong>Note:</strong> These nuclear substances are in a physical form where dispersion of the radioactive material is possible during use or handling. Usually a liquid, they may also be in solid, powder or gaseous form. Unsealed sources are commonly used in medical diagnostic and therapeutic treatments, as well as in laboratory research applications. Also called open source.</dd>
<dt><strong>use</strong> <span lang="fr"><em>(utiliser)</em></span></dt>
<dd>Manipulate or handle nuclear substances and radiation devices; operate radiation devices. Note: This definition applies to nuclear substances and radiation devices.</dd>
<dt><strong>use factor (U)</strong> <span lang="fr"><em>(facteur d&#39;utilisation [U])</em></span></dt>
<dd>The fraction of the total workload during which a radiation field is present at a particular location. This factor (&le;&nbsp;1) is multiplied by the workload and occupancy factor at that location, to derive the maximum personal dose any single person would be expected to receive.</dd>
<dt><strong>worker</strong> <span lang="fr"><em>(travailleur)</em></span></dt>
<dd>A person who performs work that is referred to in a licence. (Sources: <a href="http://laws-lois.justice.gc.ca/eng/regulations/SOR-2000-202/"><em>General Nuclear Safety and Control Regulations</em></a>; <a href="http://laws-lois.justice.gc.ca/eng/regulations/SOR-2000-204/"><em>Class I Nuclear Facilities Regulations</em></a>; <a href="http://laws-lois.justice.gc.ca/eng/regulations/SOR-2000-205/"><em>Class II Nuclear Facilities and Prescribed Equipment Regulations</em></a>; <a href="http://laws-lois.justice.gc.ca/eng/regulations/SOR-2000-207/"><em>Nuclear Substances and Radiation Devices Regulations</em></a>; <a href="http://laws-lois.justice.gc.ca/eng/regulations/SOR-2000-203/"><em>Radiation Protection Regulations</em></a>; <a href="http://laws-lois.justice.gc.ca/eng/regulations/SOR-2000-206/"><em>Uranium Mines and Mills Regulations</em></a>)<br />
<strong>Note:</strong> This definition applies to contractors and to subcontractors, as well as to workers directly employed by a licensee.</dd>
<dt><strong>workload</strong> <span lang="fr"><em>(charge de travail)</em></span></dt>
<dd>With respect to Class II prescribed equipment or radiation devices, a parameter that characterizes the amount of use over a defined period and that is directly related to the resulting radiation doses received by persons occupying adjacent areas over that period. Workload is typically calculated in grays per year at some reference distance from the source of radiation, for a specified source location.</dd>  </dl>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="abbrev"></div>
<h2 id="abbrev">Abbreviations</h2>
<table className="">  <tr>
<td>ALARA</td>
<td>as low as reasonably achievable</td>  </tr>  <tr>
<td>ATIA</td>
<td><em>Access to Information Act</em></td>  </tr>  <tr>
<td>ANSI</td>
<td>American National Standards Institute</td>  </tr>  <tr>
<td>CNSC</td>
<td>Canadian Nuclear Safety Commission</td>  </tr>  <tr>
<td>GM</td>
<td>Geiger-Müller</td>  </tr>  <tr>
<td>EOB</td>
<td>end of beam</td>  </tr>  <tr>
<td>IMRT</td>
<td>intensity modulated radiation therapy</td>  </tr>  <tr>
<td>PDR</td>
<td>pulsed dose rate</td>  </tr>  <tr>
<td>LDR</td>
<td>low dose rate</td>  </tr>  <tr>
<td>LPO</td>
<td>last person out</td>  </tr>  <tr>
<td>MU</td>
<td>Monitor Unit</td>  </tr>  <tr>
<td>NCRP</td>
<td>National Council on Radiation Protection</td>  </tr>  <tr>
<td>NEW</td>
<td>nuclear energy worker</td>  </tr>  <tr>
<td>NSCA</td>
<td><em>Nuclear Safety and Control Act</em></td>  </tr>  <tr>
<td>PDR</td>
<td>pulsed dose rate</td>  </tr>  <tr>
<td>QA</td>
<td>quality assurance</td>  </tr>  <tr>
<td>RD/GD</td>
<td>regulatory document / guidance document</td>  </tr>  <tr>
<td>RSC</td>
<td>radiation safety committee</td>  </tr>  <tr>
<td>RSO</td>
<td>radiation safety officer</td>  </tr>  <tr>
<td>TDG</td>
<td>transportation of dangerous goods</td>  </tr>  </table>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="AddInfo"></div>
<h2 id="AddInfo">Additional Information</h2>
<h3>Shielding calculations for medical facilities:</h3>  <p>There are many possible references for performing shielding calculations (e.g., McGinley2002, NCRP51, NCRP144, NCRP151, IAEA47). In general, the basic principles and equations they contain are essentially the same and can be used to perform the dose and dose rate calculations required to complete a licence application.</p>
<ol>
<li>IAEA47, <em>Safety Reports Series No. 47, Radiation Protection in the Design of Radiotherapy Facilities</em>, 2006, International Atomic Energy Agency.</li>
<li>McGinley2002, <em>Shielding Techniques for Radiation Oncology Facilities</em>, Second Edition 2002, Patton H. McGinley.</li>
<li>NCRP49, NCRP Report No. 49, <em>Structural Shielding Design and Evaluation for Medical Use of X Rays and Gamma Rays of Energies up to 10 MeV</em>, 1976, National Council on Radiation Protection and Measurements.</li>
<li>NCRP51, NCRP Report No. 51, <em>Radiation Protection Design Guidelines for 0.1 &ndash; 100 MeV Particle Accelerator Facilities</em>, 1977, National Council on Radiation Protection and Measurements.</li>
<li>NCRP144, NCRP Report No. 144, <em>Radiation Protection for Particle Accelerator Facilities</em>, 2003, National Council on Radiation Protection and Measurements.</li>
<li>NCRP151, NCRP Report No. 151, <em>Structural Shielding, Design and Evaluation for Megavoltage X- and Gamma-Ray Radiotherapy Facilities</em>, 2005, National Council on Radiation Protection and Measurements. (See notes 1, 2 below.)</li>
</ol>  <p>Notes:</p>
<ol>
<li><p>It is important to note that some of the recommendations made in these references may be specific to a particular regulatory jurisdiction and may not be applicable. For example, sections 1.4.1 and 1.4.2 of NCRP 151 recommend designing to 5 mSv y-1 for "controlled areas" (equivalent to NEW occupancy) and 1 mSv y-1 for “uncontrolled areas” (equivalent to general public occupancy). This approach is NOT acceptable with respect to designing and licensing a facility in Canada. (See section B.1.4: Design Dose Targets).</p>
<p>Conversely, section 1.4.3 of NCRP151 additionally recommends the application of a number of very conservative assumptions when performing the calculations, such as assuming the maximum permissible International Electrotechnical Commission head leakage rate, use of conservative occupancy factors, and the application of safety factors and the "two source rule". As stated in NCRP 151, the use of such conservative factors helps to ensure that "... the actual dose equivalent transmitted through the barrier ... will be much less than the applicable shielding design goal". Consequently, much of the conservatism recommended in NCRP151 is not strictly necessary within the Canadian regulatory context, since the design dose targets should be set at sufficiently low levels that the concept of ALARA will inherently be satisfied, and the goal is therefore simply to achieve the design targets, not to ensure that doses will be well below the design targets.</p>
<p>Finally, CNSC regulations do not place any restriction on the maximum dose equivalent in an area over a one hour period. This is very different from the NRC in the US, where a limit of 0.02 mSv applies (see NCRP151, section 3.3.2). Consequently, the concept of the "in-any-one-hour-time averaged dose-equivalent rate" as presented in NCRP151 is of no relevance in the context of the Canadian regulatory environment.</p></li>
<li>The same references given in note 1 above also provide many standard parameters useful for shielding design and dose estimation, including tenth-value-layers for common structural shielding materials, scatter factors, typical occupancy factors and neutron production rates. These may be used directly when calculating annual doses and dose rates if desired. However, as discussed in note 1 above, the application of extremely conservative parameters in the calculations is not required, due to the different approach in setting design dose targets. More realistic values for parameters such as occupancy factors may be used by the applicant, provided that they provide an acceptable rationale justifying the use of a lower value. Similarly, parameters such as head leakage rates can be taken from source-based teletherapy equipment manufacturer specifications rather than simply assuming the maximum permissible level recommended by the International Electrotechnical Commission.</li>
</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
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
<li>3.5 CNSC processes and practices</li>
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