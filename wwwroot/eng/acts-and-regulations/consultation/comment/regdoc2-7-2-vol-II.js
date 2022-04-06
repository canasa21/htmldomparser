import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "en",
                pageTitle: "REGDOC-2.7.2, Dosimetry, Volume II: Technical and Management System Requirements for Dosimetry Services", 
                dateModified: "2018-02-13",
                langToggleUrl: "/fra/acts-and-regulations/consultation/comment/regdoc2-7-2-vol-II"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<h2>Preface</h2>  <p>This regulatory document is part of the CNSC&#39;s radiation protection series of regulatory documents. The full list of regulatory document series is included at the end of this document and can also be found on the <a href="/eng/acts-and-regulations/regulatory-documents/index">CNSC&#39;s website</a>.</p>  <p>Regulatory document REGDOC-2.7.2, <em>Dosimetry, Volume II: Technical and Management System Requirements for Dosimetry Services</em>, sets out requirements and guidance to ensure that licensed dosimetry services meet technical requirements and implement quality assurance measures, in accordance with the purpose of the <em>Nuclear Safety and Control Act</em> and the Radiation Protection Regulations.</p>  <p>This document supersedes S-106, Rev. 1, <em>Technical and Quality Assurance Requirements for Dosimetry Services</em>, published in May 2006.</p>  <p>REGDOC-2.7.2, Volume II, is intended to form part of the licensing basis for a regulated facility or activity within the scope of the document. It is intended for inclusion in licences as either part of the conditions and safety and control measures in a licence, or as part of the safety and control measures to be described in a licence application and the documents needed to support that application.</p>  <p>Guidance contained in this document exists to inform the applicant, to elaborate further on requirements or to provide direction to licensees and applicants on how to meet requirements. It also provides more information about how CNSC staff evaluate specific problems or data during their review of licence applications. Licensees are expected to review and consider guidance; should they choose not to follow it, they should explain how their chosen alternate approach meets regulatory requirements.</p>
<div className="alert alert-info">
<p><strong>Important note:</strong> Where referenced in a licence either directly or indirectly (such as through licensee-referenced documents), this document is part of the licensing basis for a regulated facility or activity.</p>
<p>The licensing basis sets the boundary conditions for acceptable performance at a regulated facility or activity, and establishes the basis for the CNSC&rsquo;s compliance program for that regulated facility or activity.</p>
<p>Where this document is part of the licensing basis, the word &quot;shall&quot; is used to express a requirement to be satisfied by the licensee or licence applicant. &quot;Should&quot; is used to express guidance or that which is advised. &quot;May&quot; is used to express an option or that which is advised or permissible within the limits of this regulatory document. &quot;Can&quot; is used to express possibility or capability.</p>
<p>Nothing contained in this document is to be construed as relieving any licensee from any other pertinent requirements. It is the licensee&rsquo;s responsibility to identify and comply with all applicable regulations and licence conditions.</p>  </div>
<div className="module-table-contents">  <h2>Table of Contents</h2>
<ul>
<li><a href="#sec1">1. Introduction</a>
<ul>
<li><a href="#sec1-1">1.1 Purpose</a></li>
<li><a href="#sec1-2">1.2 Scope</a></li>
<li><a href="#sec1-3">1.3 Relevant Legislation</a></li>
</ul></li>
<li><a href="#sec2">2. Technical Requirements &ndash; Dosimetry Services for External Radiation</a>
<ul>
<li><a href="#sec2-1">2.1 Measurement quantities</a></li>
<li><a href="#sec2-2">2.2 Minimum measurable dose equivalent</a></li>
<li><a href="#sec2-3">2.3 Accuracy specifications and uncertainty limits</a></li>
<li><a href="#sec2-4">2.4 Type testing</a></li>
<li><a href="#sec2-5">2.5 Performance testing</a></li>
<li><a href="#sec2-6">2.6 Independent testing</a></li>
</ul></li>
<li><a href="#sec3">3. Technical Requirements &ndash; Neutron Dosimetry Services</a>
<ul>
<li><a href="#sec3-1">3.1 Data and reports</a></li>
<li><a href="#sec3-2">3.2 Independent testing</a></li>
<li><a href="#sec3-3">3.3 Performance testing</a></li>
<li><a href="#sec3-4">3.4 Documentation</a></li>
</ul></li>
<li><a href="#sec4">4. Technical Requirements &ndash; Dosimetry Services for Internal Radiation</a>
<ul>
<li><a href="#sec4-1">4.1 Measurement quantities</a></li>
<li><a href="#sec4-2">4.2 <em>In vitro</em> accuracy and precision specifications</a></li>
<li><a href="#sec4-3">4.3 Performance testing for <em>in vitro</em> measurements</a></li>
<li><a href="#sec4-4">4.4 Independent testing for <em>in vitro</em> measurements</a></li>
<li><a href="#sec4-5">4.5 <em>In vivo</em> accuracy and precision specifications</a></li>
<li><a href="#sec4-6">4.6 Independent testing for <em>in vivo</em> measurements</a></li>
<li><a href="#sec4-7">4.7 Interpretation of bioassay data</a></li>
</ul></li>
<li><a href="#sec5">5. Technical Requirements &ndash; Dosimetry Services for Radon Progeny and Radon Gas</a>
<ul>
<li><a href="#sec5-1">5.1 Measurement quantities</a></li>
<li><a href="#sec5-2">5.2 Minimum measurable exposure or concentration</a></li>
<li><a href="#sec5-3">5.3 Accuracy specifications for radon progeny measurements</a></li>
<li><a href="#sec5-4">5.4 Type testing for radon progeny measuring instruments</a></li>
<li><a href="#sec5-5">5.5 Independent testing for the monitoring of radon progeny</a></li>
<li><a href="#sec5-6">5.6 Accuracy specifications for radon gas measurements</a></li>
<li><a href="#sec5-7">5.7 Type testing for radon gas monitoring</a></li>
<li><a href="#sec5-8">5.8 Independent testing for radon gas measurements</a></li>
</ul></li>
<li><a href="#sec6">6. Technical Requirements &ndash; Dosimetry Services for Intakes of Airborne Radioactive Material</a>
<ul>
<li><a href="#sec6-1">6.1 Measurement quantities</a></li>
<li><a href="#sec6-2">6.2 Minimum measurable exposure or concentration</a></li>
<li><a href="#sec6-3">6.3 Accuracy for airborne radioactive material measurements</a></li>
<li><a href="#sec6-4">6.4 Documentation</a></li>
</ul></li>
<li><a href="#sec7">7. Management System Requirements</a>
<ul>
<li><a href="#sec7-1">7.1 General</a></li>
<li><a href="#sec7-2">7.2 Management policy</a></li>
<li><a href="#sec7-3">7.3 Quality assurance program description</a></li>
<li><a href="#sec7-4">7.4 Management review and self-assessments</a></li>
<li><a href="#sec7-5">7.5 Organization and authority</a></li>
<li><a href="#sec7-6">7.6 Personnel qualifications</a></li>
<li><a href="#sec7-7">7.7 Procurement</a></li>
<li><a href="#sec7-8">7.8 Work control</a></li>
<li><a href="#sec7-9">7.9 Change control</a></li>
<li><a href="#sec7-10">7.10 Document control</a></li>
<li><a href="#sec7-11">7.11 Calibration and maintenance</a></li>
<li><a href="#sec7-12">7.12 Verification</a></li>
<li><a href="#sec7-13">7.13 Non-conformance</a></li>
<li><a href="#sec7-14">7.14 Corrective action</a></li>
<li><a href="#sec7-15">7.15 Records</a></li>
<li><a href="#sec7-16">7.16 Audits</a></li>
</ul></li>
<li><a href="#appA">Appendix A: Accuracy and Uncertainty in External Dose Measurement</a>
<ul>
<li><a href="#appA-1">A.1 Introduction</a></li>
<li><a href="#appA-2">A.2 Conventionally true value</a></li>
<li><a href="#appA-3">A.3 Accuracy and precision</a></li>
<li><a href="#appA-4">A.4 Example calculations</a></li>
</ul></li>
<li><a href="#appB">Appendix B: Type Test Specifications for External Dosimetry</a>
<ul>
<li><a href="#appB-1">B.1 Introduction</a></li>
<li><a href="#appB-2">B.2 Influence quantities and system characteristics</a></li>
<li><a href="#appB-3">B.3 Phantoms</a></li>
<li><a href="#appB-4">B.4 Angle of incidence of radiation</a></li>
<li><a href="#appB-5">B.5 Photon energies</a></li>
<li><a href="#appB-6">B.6 Beta energies</a></li>
</ul></li>
<li><a href="#appC">Appendix C: Independent Test Specifications for External Photon Dosimetry</a>
<ul>
<li><a href="#appC-1">C.1 Introduction</a></li>
<li><a href="#appC-2">C.2 Protocol for dosimeters that require processing</a></li>
<li><a href="#appC-3">C.3 Protocol for dosimeters that do not require processing</a></li>
<li><a href="#appC-4">C.4 Reporting</a></li>
</ul></li>
<li><a href="#appD">Appendix D: Independent Test Specifications for Extremity Dosimetry</a>
<ul>
<li><a href="#appD-1">D.1 Introduction</a></li>
<li><a href="#appD-2">D.2 Protocol for dosimeters that require processing</a></li>
<li><a href="#appD-3">D.3 Protocol for dosimeters that do not require processing</a></li>
<li><a href="#appD-4">D.4 Reporting</a></li>
</ul></li>
<li><a href="#appE">Appendix E: Independent Test Specifications for Neutron Dosimetry</a>
<ul>
<li><a href="#appE-1">E.1 Introduction</a></li>
<li><a href="#appE-2">E.2 Protocol for personal dosimeters that require processing</a></li>
<li><a href="#appE-3">E.3 Protocol for personal dosimeters that do not require processing</a></li>
<li><a href="#appE-4">E.4 Reporting</a></li>
</ul></li>
<li><a href="#appF">Appendix F: Independent Test Specifications for Internal Dosimetry</a>
<ul>
<li><a href="#appF-1">F.1 Introduction</a></li>
<li><a href="#appF-2">F.2 <em>In Vitro</em> measurement independent tests</a></li>
<li><a href="#appF-3">F.3 <em>In Vivo</em> measurement independent tests</a></li>
<li><a href="#appF-4">F.4 Reporting</a></li>
</ul></li>
<li><a href="#appG">Appendix G: Independent Test Specifications for Radon Progeny and Radon Gas</a>
<ul>
<li><a href="#appG-1">G.1 Introduction</a></li>
<li><a href="#appG-2">G.2 Protocol for personal monitors</a></li>
<li><a href="#appG-3">G.3 Grab sampling</a></li>
<li><a href="#appG-4">G.4 Reporting</a></li>
</ul></li>
<li><a href="#appH">Appendix H: Example Calculations for Minimum Measurable Concentration and Counting Uncertainty</a>
<ul>
<li><a href="#appH-1">H.1 Example calculation for the determination of the minimum measurable concentration</a></li>
<li><a href="#appH-2">H.2 Example calculation for uncertainty</a></li>
</ul></li>
<li><a href="#appI">Appendix I: Specifications for Dose Records</a>
<ul>
<li><a href="#appI-1">I.1 Introduction</a></li>
<li><a href="#appI-2">I.2 Individual identification</a></li>
<li><a href="#appI-3">I.3 Dose data</a></li>
<li><a href="#appI-4">I.4 Supporting information</a></li>
</ul></li>
<li><a href="#appJ">Appendix J: Reference Calibration Centres</a>
<ul>
<li><a href="#appJ-1">J.1 Independent test specifications for external photon dosimetry, extremity dosimetry, and neutron dosimetry</a></li>
<li><a href="#appJ-2">J.2 Independent test specifications for in vitro measurements, in vivo measurements, and interpretation of bioassay data</a></li>
<li><a href="#appJ-3">J.3 Independent test specifications for radon gas and radon progeny</a></li>
</ul></li>
<li><a href="#glossary">Glossary</a></li>
<li><a href="#ref">References</a></li>
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
<h3 id="sec1-1">1.1 Purpose</h3>  <p>Regulatory document REGDOC-2.7.2, <em>Dosimetry, Volume II: Technical and Management System Requirements for Dosimetry Services</em>, sets out requirements and guidance to ensure that licensed dosimetry services meet technical requirements and implement quality assurance measures, in accordance with the purpose of the <a href="http://laws-lois.justice.gc.ca/eng/acts/N-28.3/index.html"><em>Nuclear Safety and Control Act</em></a> (NSCA) and the <a href="http://laws.justice.gc.ca/eng/regulations/sor-2000-203/page-1.html"><em>Radiation Protection Regulations</em></a>.</p>
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
<h3 id="sec1-2">1.2 Scope</h3>  <p>This regulatory document sets out the technical and management system requirements for a dosimetry service licensed by the CNSC.</p>
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
<h3 id="sec1-3">1.3 Relevant legislation</h3>  <p>The relevant provisions of the NSCA and the regulations made under the act to this standard are as follows:</p>
<ol>
<li>Section 24(4) of the NSCA provides that "No licence shall be issued, renewed, amended or replaced &ndash; and no authorization to transfer one given &ndash; unless, in the opinion of the Commission, the applicant or, in the case of an application for an authorization to transfer the licence, the transferee
<ul className="list-bullet-none">
<li>(a) is qualified to carry on the activity that the licence will authorize the licensee to carry on; and</li>
<li>(b) will, in carrying on that activity, make adequate provision for the protection of the environment, the health and safety of persons and the maintenance of national security and measures required to implement international obligations to which Canada has agreed."</li>
</ul></li>
<li>Section 24(5) of the NSCA states that a licence may contain any term or condition that the Commission considers necessary for the purposes of the Act</li>
<li>Section 18 of the <em>Radiation Protection Regulations</em> lists the information that is required for an application for a licence to operate a dosimetry service.</li>
<li>Section 19 of the <em>Radiation Protection Regulations</em> lists the information that the licensee of a dosimetry service must supply to the National Dose Registry for each nuclear energy worker.</li>
<li>Section 28(1) of the <em>General Nuclear Safety and Control Regulations</em> provides that "Every person who is required to keep a record by the Act, the regulations made under the Act or a licence shall retain the record for the period specified in the applicable regulations made under the Act or, if no period is specified in the regulations, for the period ending one year after the expiry of the licence that authorizes the activity in respect of which the records are kept."</li>
<li>Section 28(2) of the <em>General Nuclear Safety and Control Regulations</em> states that "No person shall dispose of a record referred to in the Act, the regulations made under the Act or a licence unless the person<br />
a) is no longer required to keep the record by the Act, the regulations made under the Act or the licence; and<br />
b) has notified the Commission of the date of disposal and of the nature of the record at least 90 days before the date of disposal."</li>
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
<div id="2"></div>
<h2 id="sec2">2. Technical Requirements &ndash; Dosimetry Services for External Radiation</h2>
<div className="module" style="background-color: #ffffb3;">  <p><strong>Requirements that apply to neutron dosimetry services are described in section 3.</strong></p>  </div>
<p>An external dosimetry service shall comply with the following requirements:</p>
<ol>
<li>Identify, at the licensing stage, the types of radiation and the expected respective energy ranges to which the dosimeters will be exposed during use.</li>
<li>Measure the quantity of interest within the accuracy specifications and uncertainty limits that apply to that quantity, as described in section 2.3, Accuracy specifications and uncertainty limits.</li>
<li>Demonstrate its ability to satisfy overall specifications through type testing at the licensing stage and when changes are made, as described in section 2.4, Type testing.</li>
<li>Demonstrate that it operates in a predictable and consistent way through routine and special performance testing, as described in section 2.5, Performance testing.</li>
<li>Have its performance and the calibration of its system verified through independent testing, as described in section 2.6, Independent testing.</li>
<li>Notify the CNSC immediately, in writing (electronic format acceptable), when it fails one of its periodic tests (i.e., performance or independent test).</li>
<li>Within 30 days, submit a detailed written report to the CNSC outlining the cause and consequence of any periodic test failure and a description of corrective action taken.</li>
<li>Repeat the test as soon as practicable in consultation with the CNSC, and submit the results to the CNSC.</li>
</ol>   <p>If repetition of the test results in a second consecutive failure, the CNSC may take further licensing action.</p>
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
<h3 id="sec2-1">2.1 Measurement quantities</h3>  <h4>2.1.1 Torso</h4>  <p>The quantity to be measured is the "personal dose equivalent", H<sub>p</sub>(d), as defined by the International Commission on Radiation Units and Measurements in Report 47 [1]. The values of d differ depending on tissue depth, as follows:</p>
<ol>
<li>d = 0.07 mm for a shallow (or skin) dose</li>
<li>d = 10 mm for a deep (or whole-body) dose</li>
</ol>  <p>The conventionally true value of d serves as the reference value for estimating errors in measurements. In the following sections, H<sub>p,c</sub>(d) designates the conventionally true value of the quantity H<sub>p</sub>(d). For more information on conventionally true values, see section A.2 of appendix A, Accuracy and Uncertainty in External Dose Measurement.</p>
<h4>2.1.2 Extremities</h4>  <p>The quantity to be measured for a specific extremity is the dose equivalent at a depth of 0.07 mm. In its Publication 103 [2], the ICRP recommends the depth of 0.07 mm, which is designated as H<sub>e</sub> for the purpose of this document. In the following sections, H<sub>e,c</sub> designates the conventionally true value of the quantity H<sub>e</sub>. For more information on conventionally true values, see section A.2 of appendix A, Accuracy and Uncertainty in External Dose Measurement.</p>
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
<h3 id="sec2-2">2.2	Minimum measurable dose equivalent</h3>  <p>The dosimetry service shall determine the lowest values of H<sub>p,c</sub>(d) and He,c that it can measure at the 95% confidence level. These values shall be determined under good laboratory conditions, using the usual calibration radiation at normal incidence to the dosimeter.</p>  <p>The method used to determine these quantities is left to the discretion of the dosimetry service. However, the reference used shall be indicated in the licence application.</p>
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
<h3 id="sec2-3">2.3 Accuracy specifications and uncertainty limits</h3>  <p>Table 1 lists the overall specifications for accuracy and precision. Type testing (which is described in section 2.4, Type testing, and appendix B, Type Test Specifications for External Dosimetry) determines a dosimetry system&rsquo;s ability to meet these specifications. Section A.3 of appendix A, Accuracy and Uncertainty in External Dose Measurement, describes the calculation methods for analyzing type test results. Section A.4 of appendix A provides example calculations.</p>
<table className="">  <caption className="text-left">Table 1: Accuracy and precision specifications</caption>  <tr>
<th className="text-center">Quantity</th>
<th className="text-center">Dose (mSv)</th>
<th className="text-center">Specifications</th>  </tr>  <tr>
<td className="text-center" rowspan="2">H<sub>p,c</sub>(10)</td>
<td className="text-center">4 to 10,000</td>
<td className="text-center">-33% / +50%</td>  </tr>  <tr>
<td className="text-center">0.4</td>
<td className="text-center">-50% / +100%</td>  </tr>  <tr>
<td className="text-center" rowspan="2">H<sub>p,c</sub>(0.07)</td>
<td className="text-center">100 to 10,000</td>
<td className="text-center">-33% / +50%</td>  </tr>  <tr>
<td className="text-center">10</td>
<td className="text-center">-50% / +100%</td>  </tr>  <tr>
<td className="text-center" rowspan="2">H<sub>e,c</sub></td>
<td className="text-center">100 to 10,000</td>
<td className="text-center">-67% / +200%</td>  </tr>  <tr>
<td className="text-center">10</td>
<td className="text-center">-67% / +200%</td>  </tr>  </table>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="2.4"></div>
<h3 id="sec2-4">2.4 Type testing</h3>  <p>The dosimetry service shall comply with the following requirements:</p>
<ol>
<li>Demonstrate the ability of its dosimetry system to satisfy overall specification requirements through type testing at the licence application stage.</li>
<li>Repeat the type tests when the dosimetry service makes changes that may affect the result of a dose measurement to the extent necessary to demonstrate that the specifications of table 1 (section 2.3, Accuracy specifications and uncertainty limits), continue to be met. Examples of such changes are dosimeter design, badge case filters, dose algorithm and temperature cycles (for thermoluminescent dosimetry).</li>
<li>Report the results of these type tests which have been repeated following changes made to the system, to the CNSC, along with the records described in section 2.4.1, Documentation, and obtain CNSC approval prior to the implementation of these changes.</li>
<li>Comply with the specifications described in appendix B, Type Test Specifications for External Dosimetry.</li>
</ol>  <h4>2.4.1 Documentation</h4>  <p>The dosimetry service shall maintain:</p>
<ol>
<li>Type test results in a format that clearly shows all the influence quantities and system characteristics that were considered and their range of possible values, as expected by the dosimetry service, based on the intended use of that particular dosimetry system.</li>
<li>Sample calculations that show how the mean response and the combined standard uncertainty were calculated.</li>
<li>The justification for any assumptions made and techniques used.</li>
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
<div id="2.5"></div>
<h3 id="sec2-5">2.5 Performance testing</h3>  <h4>2.5.1 Routine performance tests</h4>  <p>The dosimetry service shall conduct routine performance tests.</p>   <p>The dosimetry service shall include provisions for routine performance tests during every routine dosimeter issue period. In the case of biweekly issue periods, the test should be completed at least monthly. For extremity dosimetry, performance tests shall be performed at least once every three months. The frequency and nature of special performance tests shall be specified in the licence application. For routine performance tests, the dosimetry service shall comply with the following requirements:</p>
<ol>
<li>Irradiate test dosimeters to known doses, usually under standard exposure conditions (e.g., at normal incidence with the calibration radiation).</li>
<li>Treat test dosimeters in the same way as routine dosimeters; if processing is required, provide test dosimeters without identifying them to the processing laboratory.</li>
<li>In test irradiations, include doses comparable to or less than the smaller values in table 1 (section 2.3, Accuracy specifications and uncertainty limits.)</li>
<li>Establish, in consultation with the CNSC, control limits on the test results.</li>
</ol>  <p>The dosimetry service may maintain constant irradiation conditions and doses over time to permit more valid trend analysis.</p>
<h4>2.5.2 Special performance tests</h4>  <p>In addition to the routine performance tests, the dosimetry service shall conduct special performance tests at a minimum of every five years to confirm that the performance of the dosimetry system remains consistent with the results of the original type tests.</p>  <p>For special performance tests, the dosimetry service should subject the dosimeters to a subset of those influence quantities that the type tests showed to be significant and to which the response of the dosimetry system may have changed as a result of aging or replacement of components.</p>   <p>The results should be presented in a manner that is consistent with the original type test results and should indicate that the accuracy and specification requirements outlined in table 1 (section 2.3) are met.</p>
<h4>2.5.3 Documentation</h4>  <p>The dosimetry service shall keep a record of the following information:</p>
<ol>
<li>routine performance test procedures</li>
<li>routine and special performance test results</li>
</ol>  <p>The dosimetry service shall submit the routine performance test procedures to the CNSC for approval at the licensing application stage.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="2.6"></div>
<h3 id="sec2-6">2.6 Independent testing</h3>  <p>The requirements for independent testing include the following:</p>
<ol>
<li>External dosimetry services shall undergo and pass independent testing of each of its dosimeter designs prior to licensing.</li>
<li>Upon receipt of a licence, the dosimetry service shall undergo independent testing at regular intervals with a frequency of at least once every 12 months.</li>
<li>The dosimetry service shall have the independent tests performed by the relevant reference calibration centre for external dosimetry in Canada (see appendix J).</li>
<li>The dosimetry service shall comply with the specifications described in appendix C, Independent Test Specifications for External Photon Dosimetry, and appendix D, Independent Test Specifications for Extremity Dosimetry, as applicable.</li>
<li>If the dosimeters used by the dosimetry service require processing (e.g., thermoluminescent dosimeters [TLDs]), and more than one processing unit (e.g., TLD reader) is used, each processing unit shall be tested annually by using each unit to process at least one set of test dosimeters irradiated by the reference calibration centre.</li>
</ol>   <p>Note: If the dosimetry service has documented evidence that shows that all of its processing units respond in a consistent manner, only one unit shall be tested annually through the reference calibration centre. However, the dosimetry service shall establish response consistency of the processing units by showing that the mean response (i.e., the mean calculated dose) of a set of dosimeters processed by any given unit is within &plusmn;5% (at the 95% confidence level) of the average of the mean responses obtained from all of the processing units. For whole-body dosimeters, the coefficient of variation of dosimeters processed by each unit shall not be greater than 0.075, and for extremity dosimeters, the coefficient of variation of dosimeters processed by each unit shall not be greater than 0.2.</p>
<h4>2.6.1 Accuracy specifications</h4>  <p>The accuracy specifications that a dosimetry service shall maintain in each of the independent tests for photon and beta radiation are represented in table 2 by the mean response <span style="text-decoration: overline;">R</span> and by the coefficient of variation of the responses for the complete set of measurements. For dosimeters worn on the torso, the mean response corresponds with the complete set of measurements of the collision air kermas (or exposures) delivered. For dosimeters worn on the extremities, the mean response corresponds with the complete set of measurements of tissue doses delivered.</p>
<table className="">  <caption className="text-left">Table 2: Accuracy specifications for dosimeters</caption>  <tr>
<th className="text-center">Dosimeter</th>
<th className="text-center">Mean response <span style="text-decoration: overline;"><em>R</em></span></th>
<th className="text-center">Coefficient of variation</th>  </tr>  <tr>
<td className="text-center">Worn on the torso</td>
<td className="text-center">0.9 &le; <span style="text-decoration: overline;">R</span> &le; 1.1</td>
<td className="text-center">&le; 0.075</td>  </tr>  <tr>
<td className="text-center">Worn on the extremities</td>
<td className="text-center">0.80 &le; <span style="text-decoration: overline;">R</span> &le; 1.25</td>
<td className="text-center">&le; 0.2</td>  </tr>  </table>  <p>Note: For these tests, table 2 defines the response relative to the conventionally true value of the appropriate quantity.</p>
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
<h2 id="sec3">3. Technical Requirements &ndash; Neutron Dosimetry Services</h2>  <p>A neutron dosimetry service shall comply with the following requirements:</p>
<ol>
<li>Ensure compatibility between the dosimetry service&rsquo;s neutron dosimeters and the neutron fields in which they are to be used, and where possible, include a description of the neutron sources and the expected neutron spectra to which workers will be exposed.</li>
<li>Document detailed technical descriptions of the dosimeters and associated equipment.</li>
<li>Record data and prepare reports with quantitative information on the performance of the dosimeters and the service (type testing is not required, except to show that the response is appropriate to the neutron energy spectra to which workers may be exposed).</li>
<li>Have the calibration of its system directly traceable to the reference calibration centre (see appendix J) or another recognized national or international laboratory, in consultation with the CNSC.</li>
</ol>  <p>If neutron survey meters are used instead of personal neutron dosimeters, the dosimetry service shall meet the requirements listed above regarding such instruments. It shall also establish a routine calibration program with the relevant reference calibration centre (see appendix J) or another recognized national or international laboratory, in consultation with the CNSC.</p>
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
<h3 id="sec3-1">3.1 Data and reports</h3>  <p>Further to item 3 in section 3, the following information shall be recorded as data and provided in reports:</p>
<ol>
<li>a description of the calibration source, the calibration field and a reference to the calibration protocol</li>
<li>the dose equivalent energy response of the dosimeters</li>
<li>a statement on the limitations of the dosimetry system and a qualitative estimate of its accuracy and precision in measuring H<sub>p,c</sub>(10), under the conditions that the dosimeters are intended to be used, including the variability among the processing components</li>
<li>an estimate of the lowest value of Hp,c(10) that the dosimetry system is capable of measuring at the 95% confidence level</li>
<li>the minimum reportable dose</li>
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
<div id="3.2"></div>
<h3 id="sec3-2">3.2 Independent testing</h3>  <p>The dosimetry service shall undergo independent testing with the relevant reference calibration centre (see appendix J) prior to licensing and, upon receipt of a licence, at regular intervals with a frequency of at least once every 12 months.</p>   <p>This is a consistency test that enables dosimetry services to demonstrate consistency of performance on a periodic basis. The conditions upon which the consistency will be judged are established at the time of licensing. Table 3 shows the pass criteria for the complete set of measurements.</p>
<table className="">  <caption className="text-left">Table 3: Accuracy specifications for neutron dosimeters</caption>  <tr>
<th className="align=center">Dosimeter</th>
<th className="text-center">Mean response <span style="text-decoration: overline;">R</span></th>
<th className="text-center">Coefficient of variation</th>  </tr>  <tr>
<td>All types</td>
<td className="text-center">0.7 &le; <span style="text-decoration: overline;">R</span>  &le; 1.5</td>
<td className="text-center">&le; 0.25</td>  </tr>  </table>
<p>When neutron survey meters are used for dosimetry, the requirement for an annual independent test may be combined with the requirement described in section 2.7, Requirements for routine neutron dosimetry services, for routine calibration. It is sufficient to send one neutron survey meter for such a test, providing that any additional neutron survey meters used by the dosimetry service are calibrated against the one sent to the reference calibration centre.</p>  <p>The dosimetry service shall comply with the specifications described in appendix E, Independent Test Specifications for Neutron Dosimetry.</p>
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
<h3 id="sec3-3">3.3 Performance testing</h3>  <p>The dosimetry service shall comply with the following requirements:</p>
<ol>
<li>Establish a program for routine performance tests on the dosimetry systems.</li>
<li>Include provisions for routine performance tests during every routine dosimeter issue period. In the case of biweekly issue periods or the use of survey instruments for dose assessment, the test should be completed at least monthly.</li>
<li>Submit relevant documentation, including the frequency of the testing, to the CNSC at the licence application stage.</li>
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
<div id="3.4"></div>
<h3 id="sec3-4">3.4 Documentation</h3>  <p>The neutron doses shall be recorded and reported separately from other types of doses.</p>
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
<h2 id="sec4">4. Technical Requirements &ndash; Dosimetry Services for Internal Radiation</h2>  <p>An internal dosimetry service shall comply with the following requirements:</p>
<ol>
<li>Measure the activities and activity concentrations for selected radionuclides, as described in section 4.1, Measurement quantities.</li>
<li>Measure the quantity of interest within the accuracy and precision specifications, as described in section 4.2, <em>In vitro</em> accuracy and precision specifications, and section 4.5, <em>In vivo</em> accuracy and precision specifications.</li>
<li>Demonstrate that the internal dosimetry service operates in a predictable and consistent way through performance testing, as described in section 4.3, Performance testing for <em>in vitro</em> measurements.</li>
<li>Demonstrate that it operates in a reliable way by participating in independent testing, as described in section 4.4, Independent testing for <em>in vitro</em> measurements, and section 4.6, Independent testing for <em>in vivo</em> measurements.</li>
<li>Ascertain doses as described in section 4.7, Ascertaining the committed effective dose.</li>
<li>Notify the CNSC immediately, in writing (electronic format acceptable), when it fails one of its periodic tests (i.e., performance or independent test).</li>
<li>Within 30 days, submit a detailed written report to the CNSC outlining the cause and consequence of the failure of any periodic test and a description of corrective actions taken.</li>
<li>Repeat any failed test as soon as practicable in consultation with the CNSC and submit the results to the CNSC.</li>
</ol>   <p>If a repetition of the test results in a second consecutive failure, the CNSC may take further licensing action.</p>
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
<h3 id="sec4-1">4.1 Measurement quantities</h3>  <p>Licensed internal dosimetry services are intended to support radiation protection programs; therefore, this document does not cover requirements regarding the dosimetry service&rsquo;s detection capabilities (e.g., minimum detectable activity).</p>   <p>The internal dosimetry service shall participate in independent tests involving quantities, activities or activity concentrations equal to or greater than the minimum testing levels (MTLs) shown in table 4, up to a maximum of 20 times the relevant MTL, for the radionuclides for which they are licensed. This does not preclude the dosimetry service from carrying out its performance tests at levels below the MTLs. Radionuclide activities and activity concentrations are measured in becquerels (Bq) and becquerels per litre (Bq/L). The list of radionuclides in table 4 is not comprehensive for fission and activation products, but is representative for demonstrating competence in measurement techniques.</p>   <p>To simulate working conditions, radionuclides other than those listed in table 4 may be introduced during the required independent testing described in section 4.4, Independent testing for in vitro measurements, and section 4.6, Independent testing for in vivo measurements. These radionuclides are considered separate from the test, but are added as interferences to challenge the service&rsquo;s analytical system. Consequently, the dosimetry service may pass the test without identifying or measuring them. However, failure to correct for such interferences would jeopardize performance of the test and may result in a failed test.</p>
<table className="">  <caption className="text-left">Table 4: Minimum testing levels</caption>  <tr>
<th className="text-center text-center">Radionuclide</th>
<th className="text-center"><em>In vitro</em> bioassay<br />
(per litre or per sample)</th>
<th className="text-center text-center"><em>In vivo</em> biosaay (Bq)</th>  </tr>  <tr>
<td>Hydrogen-3</td>
<td className="text-center">2000 Bq</td>
<td className="text-center">Test not available</td>  </tr>  <tr>
<td>Carbon-14</td>
<td className="text-center">2000 Bq</td>
<td className="text-center">3 &times; 10<sup>5</sup> (lung)</td>  </tr>  <tr>
<td>Iron-59</td>
<td className="text-center">Test not available</td>
<td className="text-center">2,500</td>  </tr>  <tr>
<td>Cobalt-57<sup>a</sup></td>
<td className="text-center">25 Bq</td>
<td className="text-center">2,500</td>  </tr>  <tr>
<td>Cobalt-60</td>
<td className="text-center">25 Bq</td>
<td className="text-center">2,500</td>  </tr>  <tr>
<td>Strontium-90</td>
<td className="text-center">2 Bq</td>
<td className="text-center">Test not available</td>  </tr>  <tr>
<td>Zirconium-95 +<br />
Niobium-95</td>
<td className="text-center text-center">Test not available</td>
<td className="text-center">2,000</td>  </tr>  <tr>
<td>Antimony-124</td>
<td className="text-center">Test not available</td>
<td className="text-center">2,000</td>  </tr>  <tr>
<td>Iodine-125<sup>b</sup></td>
<td className="text-center">20 Bq</td>
<td className="text-center">1,000</td>  </tr>  <tr>
<td>Iodine-131<sup>c</sup></td>
<td className="text-center">20 Bq</td>
<td className="text-center">1,000</td>  </tr>  <tr>
<td>Cesium-137</td>
<td className="text-center">20 Bq</td>
<td className="text-center">2,000</td>  </tr>  <tr>
<td>Cerium-144</td>
<td className="text-center">250 Bq</td>
<td className="text-center">25,000</td>  </tr>  <tr>
<td>Radium-226</td>
<td className="text-center">0.05 Bq</td>
<td className="text-center">5,000</td>  </tr>  <tr>
<td>Thorium-230</td>
<td className="text-center">0.02 Bq</td>
<td className="text-center">Test not available</td>  </tr>  <tr>
<td>Natural thorium<sup>d</sup></td>
<td className="text-center">0.02 Bq</td>
<td className="text-center">150 (lung)</td>  </tr>  <tr>
<td>Natural uranium<sup>e</sup></td>
<td className="text-center">5 &micro;g</td>
<td className="text-center">10 mg (lung)</td>  </tr>  <tr>
<td>Uranium-235</td>
<td className="text-center">0.02 Bq</td>
<td className="text-center">30 (lung)</td>  </tr>  <tr>
<td>Plutonium-238/239/240</td>
<td className="text-center">0.01 Bq</td>
<td className="text-center">9,000 (lung)</td>  </tr>  <tr>
<td>Plutonium (TIMS<sup>f</sup>)</td>
<td className="text-center">0.02 pg/L</td>
<td className="text-center">Test not available</td>  </tr>  <tr>
<td >Americium-241</td>
<td className="text-center">0.05 Bq</td>
<td className="text-center">100 (lung)</td>  </tr>  </table>
<p>Notes:</p>
<ul className="list-bullet-none">
<li>a) Cobalt-57 is used as a surrogate for cerium-144.</li>
<li>b  If iodine (I)-129 is used as a surrogate for I-125, the same MTL values apply as for I-125.</li>
<li>c) If barium-133 is used as a surrogate for I-131, the same MTL values apply as for I-131.</li>
<li>d) One gram of natural thorium contains equal quantities, 4.06E+03 Bq, of thorium (Th)-232 and Th 228. The mass percentages are 99.9999%, 1.3E-08% for Th-232 and Th-228 respectively, while the specific activity is 8.12E+03 Bq/gram (g)</li>
<li>e) One gram of natural uranium contains equal quantities, 1.26E+04 Bq, of uranium (U)-234 and U-238, and 569 Bq of U-235. The mass percentages are 99.2837%, 0.7110% and 0.0053% for U-238, U-235 and U-234 respectively; and the specific activity is 2.52E+04 Bq/g.</li>
<li>f) TIMS: thermal ionization mass spectrometry</li>
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
<div id="4.2"></div>
<h3 id="sec4-2">4.2 <em>In vitro</em> accuracy and precision specifications</h3>  <p>The mean relative bias, B, shall be calculated from replicate measurements, A<sub>i</sub>, of each concentration or level of activity, A. Since bias is often greater at lower concentrations near the limits of detection than at higher concentrations, dosimetry service laboratories shall be tested at several concentrations no lower than the MTL. The in vitro accuracy and precision specifications for independent and performance tests are such that the root mean squared error (RMSE) of B and SB must be less than or equal to 0.25, as follows:</p>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<mtext>RMSE&#x00A0;=&#x00A0;</mtext><msqrt>
<mrow>
<msup>
<mi>B</mi>
<mn>2</mn>
</msup>
<mo>+</mo><msub>
<mi>S</mi>
<mi>B</mi>
</msub>
<msup>
<mrow></mrow>
<mn>2</mn>
</msup>
</mrow>
</msqrt>
<mo>&#x2264;</mo><mtext>0</mtext><mtext>.25</mtext></mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaaeOuaiaab2
eacaqGtbGaaeyraiaabccacaqG9aGaaeiiamaakaaabaGaamOqamaa
CaaaleqabaGaaGOmaaaakiabgUcaRiaadofadaWgaaWcbaGaamOqaa
qabaGcdaahaaWcbeqaaiaaikdaaaaabeaakiabgsMiJkaabcdacaqG
UaGaaeOmaiaabwdaaaa@4539@
</annotation>   </semantics>  </math>
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
<h3 id="sec4-3">4.3 Performance testing for <em>in vitro</em> measurements</h3>  <p>The dosimetry service shall conduct routine performance tests. It shall include provisions for routine performance tests for in vitro bioassay, which are to be performed at least once every three months, or, for infrequently used <em>in vitro</em> measurements, at a frequency determined in consultation with the CNSC.</p>  <p>For routine performance tests, the dosimetry service shall comply with the following requirements:</p>
<ol>
<li>Prepare the test samples to concentrations of analyte not known to the person analyzing the test samples.</li>
<li>Determine the concentration of analyte in the test samples.</li>
<li>Treat the test samples in the same way as routine <em>in vitro</em> bioassay samples, so that the two are indistinguishable.</li>
<li>Include the same categories of radionuclides in the performance tests that are included in the independent tests in which the dosimetry service participates.</li>
</ol>  <h4>4.3.1 Documentation</h4>  <p>The dosimetry service shall keep records of performance test procedures and performance test results.</p>  <p>The dosimetry service shall submit the performance test procedures to the CNSC for approval at the licence application stage.</p>
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
<h3 id="sec4-4">4.4 Independent testing for <em>in vitro</em> measurements</h3>  <p>Internal dosimetry services shall undergo and pass independent testing prior to licensing. Upon receipt of a licence, the dosimetry service shall undergo independent testing at regular intervals at least every 12 months, or at other intervals determined in consultation with the CNSC.</p>  <p>If a dosimetry service uses more than one measurement instrument (e.g., several liquid scintillation counters for tritium analysis), the instruments that were not used for the independent test shall be verified at regular intervals at least every 12 months against the measurement instrument that was used for the test. The laboratory shall show that all other measurement instruments also meet the accuracy and precision requirements. It shall consider factors such as chemical recovery, quenching, concentration range, sample preparation methods and so on, where applicable.</p>  <p>The dosimetry service shall have the independent tests performed by the relevant reference calibration centre (see appendix J) unless otherwise stated in the dosimetry service licence. If the relevant reference calibration centre does not offer the test, the dosimetry service shall seek CNSC approval to use a different organization to perform the independent tests.</p>  <p>Dosimetry services shall also have their analytical performance tested at levels of activity encountered in routine personnel monitoring as well as at expected levels following accidental exposures. Test samples will be spiked with a known quantity of a traceable activity greater than or equal to the MTL. Measurement reproducibility will be tested by providing several identical samples of each level of activity.</p>  <p>The dosimetry service shall comply with the specifications described in appendix F, Independent Test Specifications for Internal Dosimetry.</p>
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
<h3 id="sec4-5">4.5	<em>In vivo</em> accuracy and precision specifications</h3>  <p>The mean relative bias, B, shall be calculated from measurements, A<sub>i</sub>, of each level of activity, A, included in the test. Since bias is often greater at lower levels of activity near the limits of detection than at higher levels of activity, dosimetry service laboratories shall be tested at several levels of activity no lower than the MTL. The in vitro accuracy and precision specifications for independent and performance tests are such that the root mean squared error (RMSE) of B and SB must be less than or equal to 0.25, as follows:</p>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<mtext>RMSE&#x00A0;=&#x00A0;</mtext><msqrt>
<mrow>
<msup>
<mi>B</mi>
<mn>2</mn>
</msup>
<mo>+</mo><msub>
<mi>S</mi>
<mi>B</mi>
</msub>
<msup>
<mrow></mrow>
<mn>2</mn>
</msup>
</mrow>
</msqrt>
<mo>&#x2264;</mo><mtext>0</mtext><mtext>.25</mtext></mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaaeOuaiaab2
eacaqGtbGaaeyraiaabccacaqG9aGaaeiiamaakaaabaGaamOqamaa
CaaaleqabaGaaGOmaaaakiabgUcaRiaadofadaWgaaWcbaGaamOqaa
qabaGcdaahaaWcbeqaaiaaikdaaaaabeaakiabgsMiJkaabcdacaqG
UaGaaeOmaiaabwdaaaa@4539@
</annotation>   </semantics>  </math>
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
<h3 id="sec4-7">4.6	Independent testing for <em>in vivo</em> measurements</h3>  <p>Internal dosimetry services shall undergo and pass independent testing prior to licensing. Upon receipt of a licence, the dosimetry service shall undergo independent testing at regular intervals at least every 12 months, or at other intervals determined in consultation with the CNSC so that continuing competence can be demonstrated even if no changes are made to the measurement system. Such factors as variation of source distribution within the phantom, variations in ambient background, and positioning error shall be taken into account where applicable.</p>  <p>The dosimetry service shall have the independent tests performed by the relevant reference calibration centre (see appendix J) unless otherwise stated in the dosimetry service licence. If the relevant reference calibration centre does not offer the test, the dosimetry service shall seek CNSC approval to use a different organization to perform the independent tests.</p>  <p>If the dosimetry service makes alterations to the detectors, counting geometry, or the electronics of the measurement system that may affect the calibration, a further independent test is required. Phantoms used for calibration at photon energies below 100 kiloelectron volts (keV) shall be constructed of tissue-equivalent material and shall be anthropomorphic. For photon energies above 100 keV, acceptable phantoms can be made from other materials.</p>  <p>The dosimetry service shall comply with the specifications described in appendix F.</p>
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
<h3 id="sec4-7">4.7	Interpretation of bioassay data</h3>  <h4>4.7.1 Ascertaining the committed effective dose</h4>  <p>Internal dosimetry services shall ascertain and record the committed effective dose to workers from the types of measurements referred to in the licence, taking into consideration appropriate human physiological parameters and other relevant information on the conditions of exposure. The method used to ascertain the dose shall be submitted to the CNSC for approval.</p>  <p>When ascertaining the committed effective dose to workers, dosimetry services shall consider site-specific parameters, unless other values (e.g., default values) have been previously approved by the CNSC. All key parameters shall be documented.</p>  <h4>4.7.2 Documentation</h4>  <p>The dosimetry service shall submit the procedures for ascertaining the committed effective dose to workers to the CNSC for approval at the licence application stage.</p>
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
<h2 id="sec5">5. Technical Requirements &ndash; Dosimetry Services for Radon Progeny and Radon Gas</h2>  <p>Exposures to radon progeny and radon gas are estimated from grab-sampling measurements combined with occupancy time records or from personal monitoring.</p>  <p>A dosimetry service for radon progeny and radon gas shall comply with the following requirements:</p>
<ol>
<li>Determine the lowest exposure or concentration in air that the dosimetry service can measure at the 95% confidence level with the overall accuracies specified, as described in section 5.2, Minimum measurable exposure or concentration.</li>
<li>Measure the quantity of interest within the accuracy specifications and uncertainty limits that apply to that quantity, as described in section 5.3, Accuracy specifications for radon progeny measurements, and section 5.6, Accuracy specifications for radon gas measurements.</li>
<li>Demonstrate its ability to satisfy overall specifications through type testing, as described in section 5.4, Type testing for radon progeny measuring instruments, and section 5.7, Type testing for radon gas monitoring.</li>
<li>Demonstrate that it operates in a reliable way through independent testing, as described in section 5.5, Independent testing for the monitoring of radon progeny, and section 5.8, Independent testing for radon gas measurements.</li>
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
<div id="5.1"></div>
<h3 id="sec5-1">5.1 Measurement quantities</h3>  <p>The quantities to be measured include the following characteristics:</p>
<ol>
<li>the concentration in air of potential alpha energy from short-lived radon progeny</li>
<li>the exposure to airborne short-lived radon progeny</li>
<li>the concentration in air of radon gas</li>
</ol>  <p>There are historical and International System of Units (SI), or SI-compatible units of measurement for the concentration of short-lived radon progeny in air and exposure to radon progeny.</p>   <p>The working level (WL) is the historical unit for the measurement of radon progeny concentration in air. The corresponding SI unit is the joule per cubic metre (J m<sup>-3</sup>), where</p>  <p className="text-center">1 WL = 20.8 &micro;J m<sup>-3</sup>	&nbsp;and&nbsp;	1 &micro;J m<sup>-3</sup> = 4.8 x 10<sup>-2</sup> WL</p>  <p>The working-level month (WLM) is the historical unit used to express exposures to radon progeny. The SI-compatible unit is the joule-hour per cubic metre (J h m<sup>-3</sup>) where</p>  <p className="text-center">1 WLM = 3.54 mJ h m<sup>-3</sup>&nbsp; and &nbsp;	1 mJ h m<sup>-3</sup> = 0.283 WLM</p>  <p>The concentration of radon gas in air is measured in activity per unit volume of that atmosphere (i.e., Bq m<sup>-3</sup>). The intake (Bq) from this concentration is calculated by multiplying the concentration by a defined breathing rate (i.e., 1.2 m<sup>3</sup> h<sup>-</sup>1) and the occupancy time (h). Alternatively, exposure can be determined in Bq h m<sup>-3</sup> and the intake would be this value multiplied by the breathing rate.</p>
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
<h3 id="sec5-2">5.2	Minimum measurable exposure or concentration</h3>  <p>The dosimetry service shall perform the following tasks:</p>
<ol>
<li>Determine and record the lowest exposure or concentration in air that it can measure at the 95% confidence level with the overall accuracies of +50% / -33%.</li>
<li>Express the minimum measurable exposure in the same units as the measured quantity.</li>
</ol>  <p>Section H.1 of appendix H provides examples of the statistical method used to determine the minimum measurable activity concentration.</p>
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
<h3 id="sec5-3">5.3	Accuracy specifications for radon progeny measurements</h3>  <p>Two categories of instruments monitor individual exposures to radon progeny:</p>
<ol>
<li>personal monitors, which give a direct estimation of individual exposures</li>
<p>grab-sampling instruments, which provide a measure of radon progeny concentration at a given place and time, and whose readings are used in combination with occupancy time records to calculate individual exposures</p>
</ol>  <p>Both categories of instruments shall meet the corresponding requirements of this section.</p>   <h4>5.3.1 Personal monitors</h4>  <p>The test for personal monitors shall be conducted in an environment with stable and fixed concentration. The 95% confidence limit calculated from the test results shall fall within the confidence interval limits indicated in table 5. Historical units are given first, followed by SI or SI-compatible units in parentheses.</p>
<table className="">  <caption className="text-left">Table 5: Accuracy specifications for measurement of exposure to radon progeny for one dosimetry period</caption>  <tr>
<th className="text-center text-center">Range of measurement</th>
<th className="text-center">Overall accuracy<br />
(95% confidence)</th>  </tr>  <tr>
<td className="text-center">&ge; 0.05 WLM (177 &micro;J h m<sup>-3</sup>) to < 0.10 WLM (354 &micro;J h m<sup>-3</sup>)</td>
<td className="text-center">+100% / -50%</td>  </tr>  <tr>
<td className="text-center">&ge; 0.10 WLM (354 &micro;J h m<sup>-3</sup>)</td>
<td className="text-center">+50% / -33%</td>  </tr>  </table>
<h4>5.3.2 Grab sampling</h4>  <p>The 95% confidence limit calculated from the test results shall fall within the confidence interval limits indicated in table 6. Historical units are given first, followed by SI or SI-compatible units in parentheses.</p>
<table className="">  <caption className="text-left">Table 6: Accuracy specifications for measurement of concentration of potential alpha energy in air</caption>  <tr>
<th className="text-center text-center">Range of measurement</th>
<th className="text-center">Overall accuracy<br />
(95% confidence)</th>  </tr>  <tr>
<td className="text-center">&ge; 0.05 WL (1.03 &micro;J h m<sup>-3</sup>) to < 0.10 WL (2.08 &micro;J h m<sup>-3</sup>)</td>
<td className="text-center">+100% / -50%</td>  </tr>  <tr>
<td className="text-center">&ge; 0.10 WL (2.08 &micro;J h m<sup>-3</sup>)</td>
<td className="text-center">+50% / -33%</td>  </tr>  </table>  <p>For grab sampling, the testing program highlighted in section G.3 of appendix G, Independent Test Specifications for Radon Progeny and Radon Gas, may be used to assess compliance with the accuracy requirements of table 6.</p>
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
<h3 id="sec5-4">5.4	Type testing for radon progeny measuring instruments</h3>  <p>The dosimetry service shall demonstrate its ability to satisfy overall specification requirements through type testing at the licence application stage. The type testing requirements for radon progeny measuring instruments are as follows:</p>
<ol>
<li>Type testing for personal monitors shall identify all possible sources of error and quantify their contribution to the overall error and uncertainty in individual exposures.</li>
<li>In addition to establishing a personal monitor&rsquo;s overall accuracy, the type testing shall indicate the limitations of the device (such as conditions that may result in the onset of filter saturation problems), the time during which the device can be reliably used without the need to recharge the battery, and so on.</li>
<li>Type testing for grab-sampling instruments shall identify and quantify all possible sources that contribute to the overall error and uncertainty in measured instantaneous radon progeny concentrations, except for errors and uncertainties in actual personal exposures derived from grab-sampling measurements, which are excluded.</li>
<li>When the dosimetry service makes changes (e.g., to the instrumentation or methods used) that may affect the performance of personal monitors and grab-sampling instruments, the dosimetry service shall repeat the type tests for measurement accuracy and precision to the extent necessary to demonstrate that the specifications of tables 5 and 6 continue to be met.</li>
<li>The dosimetry service shall report the results of these type tests, which have been repeated following changes made to the system, to the CNSC along with the records described in section 5.4.2,Documentation, and shall obtain CNSC approval prior to the implementation of these changes.</li>
</ol>
<h4>5.4.1 Influence quantities that may affect accuracy or uncertainty</h4>  <p>The dosimetry service shall consider the following influence quantities and evaluate those that are likely to significantly affect accuracy or uncertainty. Other influence quantities that may contribute to overall uncertainty shall also be considered (i.e., all influence quantities contributing to the uncertainty of the measurement) shall be taken into account.</p>  <p>For sampling parameters of personal monitors, the following quantities shall be taken into account:</p>
<ol>
<li>duration of operation at design performance at full charge of the battery</li>
<li>sampling flow rate</li>
<li>flow rate variability</li>
<li>influence of particle size distribution, particularly unattached fraction of radon progeny on sampling efficiency</li>
</ol>  <p>For detection and counting parameters of personal monitors, the following quantities shall be taken into account:</p>
<ol>
<li>filter-detector geometry</li>
<li>energy-dependent detection efficiency</li>
<li>sensitivity to radiation emitted from sources other than radon progeny</li>
<li>sensitivity to deviations from detector processing specifications</li>
<li>sensitivity to time variability of radon progeny concentrations</li>
</ol>  <p>For grab-sampling instruments, the following quantities shall be taken into account:</p>
<ol>
<li>sampling flow rate</li>
<li>flow rate variability</li>
<li>sensitivity to particle size distribution, particularly unattached fraction of radon progeny in the test atmosphere</li>
<li>calibration and stability of field alpha counters</li>
<li>the method used to calculate radon progeny concentrations</li>
</ol>
<h4>5.4.2 Documentation</h4>  <p>The dosimetry service shall maintain:</p>
<ol>
<li>type test results in a format that clearly shows all the influence quantities and system characteristics that were considered, and the range of possible values expected of them by the dosimetry service, based on the intended use of that particular dosimetry system</li>
<li>sample calculations that show how the mean response and the combined standard uncertainty were calculated</li>
<li>the justification for any assumptions made and techniques used</li>
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
<div id="5.5"></div>
<h3 id="sec5-5">5.5	Independent testing for the monitoring of radon progeny</h3>  <p>The dosimetry service shall comply with the following requirements:</p>
<ol>
<li>Undergo independent testing to demonstrate that it meets the accuracy specifications, as described in section 5.3, Accuracy specifications for radon progeny measurements.</li>
<li>Perform the independent tests through the relevant reference calibration centre for the monitoring of radon progeny in Canada (see appendix J).</li>
<li>Send a representative sample of its personal monitors to the reference calibration centre at regular intervals at least every 12 months, or at other intervals determined in consultation with the CNSC, and also following any changes in design that could affect the performance of monitors.</li>
<li>Comply with the specifications for grab sampling described in appendix G, Independent Test Specifications for Radon Progeny and Radon Gas.</li>
<li>Notify the CNSC immediately, in writing (electronic format acceptable), when it fails one of its independent tests.</li>
<li>Within 30 days, submit a detailed written report to the CNSC outlining the cause and consequence of failure and a description of corrective action taken.</li>
<li>Immediately repeat the failed test and submit the results to the CNSC.</li>
</ol>  <p>If a repetition of the test results in a second consecutive failure, the CNSC may take further licensing action.</p>
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
<h3 id="sec5-6">5.6 Accuracy specifications for radon gas measurements</h3>  <h4>5.6.1 Personal monitors</h4>  <p>The test for personal monitors shall be conducted in an environment with stable and fixed concentration. The 95% confidence limit calculated from the test results shall fall within the confidence interval limits indicated in table 7.</p>
<table className="">  <caption className="text-left">Table 7: Accuracy specifications for measurement of personal radon gas exposure for a dosimetry period</caption>  <tr>
<th className="text-center text-center">Range of measurement</th>
<th className="text-center">Overall accuracy<br />
(95% confidence)</th>  </tr>  <tr>
<td className="text-center">&ge; 2.0 MBq h m<sup>-3</sup> to < 4.0 MBq h m<sup>-3</sup></td>
<td className="text-center">+100% / -50%</td>  </tr>  <tr>
<td className="text-center">&ge; 4.0 MBq h m<sup>-3</sup></td>
<td className="text-center">+50% / -33%</td>  </tr>  </table>
<h4>5.6.2 Grab sampling</h4>  <p>Table 8 shows the specifications with which monitoring systems shall comply under expected conditions of use.</p>
<table className="">  <caption className="text-left">Table 8: Accuracy specifications for measurement of concentration of radon gas in air</caption>  <tr>
<th className="text-center text-center">Range of measurement</th>
<th className="text-center">Overall accuracy<br />
(95% confidence)</th>  </tr>  <tr>
<td className="text-center">&ge; 10 kBq m<sup>-3</sup> to < 20 kBq m<sup>-3</sup></td>
<td className="text-center">+100% / -50%</td>  </tr>  <tr>
<td className="text-center">&ge; 20 kBq m<sup>-3</sup></td>
<td className="text-center">+50% / -33%</td>  </tr>  </table>
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
<h3 id="sec5-7">5.7	Type testing for radon gas monitoring</h3>  <p>Through type testing at the licence application stage, the dosimetry service shall demonstrate its ability to satisfy the following overall specification requirements:</p>
<ol>
<li>Type testing for instruments used to determine exposures to radon gas shall identify all possible sources of error and shall quantify their contribution to the overall error and uncertainty in individual exposures.</li>
<li>If the dosimetry service changes the monitor design or the measurement method (e.g., different detector or filters, different casing, different sampling protocol), it shall repeat the type tests to the extent necessary to demonstrate the influence on overall accuracy and uncertainty.</li>
</ol>
<h4>5.7.1 Influence quantities that may affect accuracy or uncertainty</h4>  <p>The dosimetry service shall consider the following influence quantities and evaluate those that are likely to significantly affect accuracy or uncertainty. Other influence quantities that may contribute to the overall uncertainty, in addition to those listed here, shall also be considered.</p>   <p>For personal radon gas monitors, the following quantities shall be taken into account:</p>
<ol>
<li>detector efficiency</li>
<li>sensitivity to radiation emitted from sources other than radon progeny</li>
<li>sensitivity to deviations from detector processing specifications</li>
<li>durability for the work environment</li>
</ol>  <p>For grab-sampling instruments, the following quantities shall be taken into account:</p>
<ol>
<li>sampling flow rate</li>
<li>flow rate variability</li>
<li>detector efficiency</li>
<li>sensitivity to radiation other than from radon</li>
<li>sensitivity to other physical and chemical agents in the environment</li>
<li>saturation</li>
<li>durability for the work environment</li>
</ol>
<h4>5.7.2 Documentation</h4>  <p>The dosimetry service shall maintain:</p>
<ol>
<li>Type test results in a format that clearly shows all the influence quantities and system characteristics that were considered, and the range of possible values expected of them by the dosimetry service, based on the intended use of that particular dosimetry system.</li>
<li>Sample calculations that show how the mean response and the combined standard uncertainty were calculated.</li>
<li>The justification for any assumptions made and techniques used.</li>
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
<div id="5.8"></div>
<h3 id="sec5-8">5.8	Independent testing for radon gas measurements</h3>  <p>The dosimetry service shall comply with the following requirements:</p>
<ol>
<li>Undergo independent testing to demonstrate that it meets the accuracy specifications described in section 5.6, Accuracy specifications for radon gas measurements.</li>
<li>Perform the independent tests through the relevant reference calibration centre for the monitoring of radon gas in Canada (see appendix J).</li>
<li>Send a representative sample of its personal monitors to the reference calibration centre at regular intervals at least every 12 months, or at other intervals determined in consultation with the CNSC, and also following any changes in design that could affect the performance of monitors.</li>
<li>Comply with the specifications for grab sampling described in appendix G, Independent Test Specifications for Radon Progeny and Radon Gas.</li>
<li>Notify the CNSC immediately, in writing (electronic format acceptable), when it fails one of its independent tests.</li>
<li>Within 30 days, submit a detailed written report to the CNSC, outlining the cause and consequence of failure and a description of corrective action taken.</li>
<li>Immediately repeat the failed test and submit the results to the CNSC.</li>
</ol>  <p>If a repetition of the test results in a second consecutive failure, the CNSC may take further licensing action.</p>
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
<h2 id="sec6">6. Technical Requirements &ndash; Dosimetry Services for Intakes of Airborne Radioactive Material</h2>  <p>Airborne radioactive material refers to any suspension in air of radioactive material whose characteristics or concentrations are such that there is no practical means to determine dose through bioassay. Such materials may include, but are not limited to, U-238 and its decay products (other than radon and radon progeny), Th-232, and some plutonium isotopes. Airborne radioactive materials exist in various physical and chemical forms including dust, gas, fumes, or vapours. This section applies to measurements of radioactive material in air that are used for dosimetry purposes.</p>  <p>Monitoring for airborne radioactive material helps to estimate individual doses or exposures to those radiological risks for workers in uranium processing facilities, research facilities, and at other facilities where radioactive-material-laden atmospheres are found. Estimates are made from personal monitoring.</p>
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
<h3 id="sec6-1">6.1 Measurement quantities</h3>  <p>The concentrations of airborne radioactive material in air are measured in activity or mass per unit volume of that atmosphere (e.g.,<br /> Bq m<sup>-3</sup>). The intake (e.g., Bq) from this concentration is calculated by multiplying the concentration by a defined breathing rate (e.g.,<br /> 1.2 m<sup>3</sup> h<sup>-1</sup>) and the occupancy time (h). Alternatively, exposure can be determined in Bq h m<sup>-3</sup> and the intake would be this value multiplied by the breathing rate.</p>  <p>The concentration of airborne radioactive material may also be expressed in units of derived air concentration (DAC). The DAC is the concentration of radioactive material in air breathed by a worker for 2000 hours that results in a committed effective dose of 20 mSv. The worker is assumed to breathe the air at a rate of 1.2 m<sup>3</sup> h<sup>-1</sup>. Similarly, exposure may be expressed in terms of DAC-hours.</p>
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
<h3 id="sec6-2">6.2	Minimum measurable exposure or concentration</h3>  <p>Type testing methods, criteria, and facilities, as well as independent testing facilities are currently unavailable for airborne radioactive material measurements. Therefore, this standard does not specify requirements for type testing and independent testing for airborne radioactive material measurements. However, a dosimetry service for airborne radioactive material measurements shall perform the following tasks:</p>
<ol>
<li>Measure the quantity of interest within the accuracy specifications that apply to that quantity, as described in section 6.3, Accuracy for airborne radioactive material measurements.</li>
<li>Determine and record the lowest exposure or concentration in air that it can measure at the 95% confidence level with the overall accuracies of +50% / -33%.</li>
</ol>  <p>Section H.1 of appendix H provides examples of the statistical method used to determine the minimum measurable activity concentration. The minimum measurable exposure shall be expressed in the same units as the measured quantity.</p>
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
<h3 id="sec6-3">6.3	Accuracy for airborne radioactive material measurements</h3>  <p>The dosimetry service shall demonstrate that it follows standard good practices expected in routine industrial hygiene personal monitoring in the measurement of airborne radioactive material concentration in air. In particular, the flow rate of sampling pumps, where used, shall not deviate by more than 5% from the value used to calculate concentration. The airflow rate should be verified on each day of air sampler use. If the airflow rate changes by more than &plusmn;5% during the collection of a sample, the flow rate used for dosimetry purposes should be the average of the initial and final airflow rates.</p>  <p>Air samplers shall have a means of ascertaining the volume of air sampled. Airflow meters shall be calibrated at least annually, as well as after the meters have been repaired or modified, or may have been damaged. The calibration methods shall be based on a current method recommended by the American Conference of Governmental Industrial Hygienists (ACGIH) or the Occupational Safety and Health Administration (OSHA). The method, instrument unique identifier and date of calibration shall be documented.</p>  <p>If personal air samplers are not worn within 30 cm of the worker&rsquo;s head, the licensee should demonstrate that the air sampled is representative of breathing-zone air.</p>  <p>Air sampler particle collection efficiency shall be insensitive to size, to the greatest extent possible. This excludes the use of cyclones to collect and measure airborne radioactive material.</p>  <p>The dosimetry service shall determine the overall uncertainty in airborne radioactive material measurements from the combination of all the uncertainties in all the parameters used to derive the airborne radioactive material concentration from the activity measured on the monitor&rsquo;s filter.</p>  <p>Section H.2 of appendix H, <em>Example calculation for Uncertainty</em>, provides examples of the statistical method used to estimate uncertainties in counting.</p>
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
<h3 id="sec6-4">6.4	Documentation</h3>  <p>The dosimetry service shall maintain:</p>
<ol>
<li>Test results in a format that clearly displays all the sample calculations of the influence quantities, showing how the mean response and the combined standard uncertainty were calculated.</li>
<li>The justification for any assumptions made and techniques used.</li>
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
<div id="7"></div>
<h2 id="sec7">7. Management System Requirements</h2>
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
<h3 id="sec7-1">7.1 General</h3>  <p>Quality in a dosimetry service is defined by accuracy and repeatability of dose measurements. A well-defined and implemented management system provides for the effective quality assurance of a dosimetry service, and helps ensure that dosimetry results are accurate, repeatable, verifiable and properly recorded. Sections 7.2&ndash;7.16 outline the minimum licensee requirements for developing an effective quality assurance program in a dosimetry service.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="7.2"></div>
<h3 id="sec7-2">7.2 Management policy</h3>
<ol>
<li>Senior management shall document its quality policy. The quality policy shall be appropriate for a dosimetry service (see section 7.1) and shall include a commitment to operate according to its quality assurance program, to regularly review its adequacy, and to continually improve.</li>
<li>The quality policy and objectives shall be communicated to staff.</li>
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
<div id="7.3"></div>
<h3 id="sec7-3">7.3	Quality assurance program description</h3>  <p>The description of the quality assurance program shall consist of interrelated documents that collectively provide clear, comprehensive and accurate descriptions of the following information:</p>
<ol>
<li>statements of quality policy and quality objectives</li>
<li>documented processes, procedures and instructions</li>
<li>documents needed by the dosimetry service to ensure effective planning, operation and control of its processes</li>
<li>records required to demonstrate compliance with the quality assurance program</li>
</ol>  <p>Note: The documentation can be in any form or medium.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="7.4"></div>
<h3 id="sec7-4">7.4	Management review and self-assessments</h3>  <ol>
<li>Managers shall perform self-assessments of their areas of responsibility at least once per year. These self-assessments shall determine whether the dosimetry service meets standards and objectives, and evaluate the effectiveness of processes and procedures. Performance metrics shall be developed and used in self-assessments.</li>
<li>At least annually, senior management shall conduct a formal review to ensure that processes are optimized, under control, and producing accurate results that conform to specifications. The review shall include assessing opportunities for improvement and the need for changes to policies, processes, and requirements in the quality assurance program, including the quality policy and objectives. The annual review shall encompass, at a minimum, the following sources of information:<br />   a)	comparisons of quality objectives and standards against actual achievements<br />   b)	analyses of inspection and test results<br />
c)	analyses of non conformances (e.g., frequency, significance, consequence, cause and accountability), of corresponding corrective and preventive measures, and of deficiency trends<br />
d)	analyses of results from internal audits<br />
e)	complaints and implementation problems or errors<br />
f)	results of management self-assessments<br />   g)	analysis of the effectiveness of corrective actions</li>
<li>Records of the reviews shall be maintained.</li>  </ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="7.5"></div>
<h3 id="sec7-5">7.5	Organization and authority</h3>  <ol>
<li>Management shall define the responsibilities and authorities of managers and staff. The lines of internal and external communications shall be defined.</li>
<li>Management shall appoint an individual who will be responsible for independently assessing the effectiveness of the quality assurance program, and who reports to a level of management such that sufficient freedom from the pressures of cost and schedule considerations is preserved.</li>  </ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="7.6"></div>
<h3 id="sec7-6">7.6	Personnel qualifications</h3>  <ol>
<li>All personnel performing dosimetry service activities, including the tasks described in section 7.2, Management system requirements, shall have the training, qualifications and competence necessary to perform their assigned tasks effectively.</li>
<li>Standards of training, qualification and competence shall be set by the dosimetry service.</li>  </ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="7.7"></div>
<h3 id="sec7-7">7.7	Procurement</h3>  <ol>
<li>The purchase of equipment, material and services needed for accurate dose or exposure measurement shall be controlled by procedures established by the dosimetry service.</li>
<li>Purchasing procedures shall ensure that purchased equipment, material and services conform to specified purchase requirements. Specified purchase requirements shall include a clear description of the item on a requirement or technical data sheet that includes measuring accuracy and repeatability, traceability of calibration to national standards, inspection and testing specifications, acceptance criteria, the quality assurance program specifications that the supplier shall meet, and recording specifications.</li>
<li>Suppliers shall be evaluated and selected based on their ability to meet specifications. A vendor or supplier list shall be maintained.</li>
<li>Purchased materials and equipment shall be verified as having met the specified purchase requirements.</li>  </ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="7.8"></div>
<h3 id="sec7-8">7.8	Work control</h3>  <ol>
<li>All work or activities that can influence the assignment of the correct dose to the right individual and the maintenance of an effective dose record system shall be controlled by established procedures that provide details of the following items:
<ul className="list-lower-alpha">
<li>work methods and sequence</li>
<li>equipment to be used and special working environments</li>
<li>acceptance criteria</li>
<li>inspection points</li>
<li>logging specifications</li>
</ul></li>
<li>Work control procedures shall control the preservation of identification through marking and number control of dosimeters, samples, standards, measurements, dose records and other data on which dose is based, and maintain their traceability to the individuals concerned.</li>
<li>Work control procedures shall prescribe specifications and special precautions to control the handling, storage and shipping of dosimeters and samples to protect against loss of sensitivity, loss of information, loss of accuracy, and against damage to, or complete loss of the dosimeters or samples. Distribution, use and handling of control dosimeters and handling of samples shall also be described.</li>
<li>Conclusions regarding assigned dose shall be adequately documented to enable traceability to the input data (e.g., identification information, measurements and models used) and to show conformance to standards.</li>
<li>The method of transferring dose data meet the specifications described in appendix I, Specifications for Dose Records.</li>  </ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="7.9"></div>
<h3 id="sec7-9">7.9 Change control</h3>  <ol>
<li>Changes to dosimetry processes, software and equipment needed for accurate dose or exposure measurement and changes to dose records shall be controlled by the dosimetry service.</li>
<li>Change control shall provide equivalent reviews and approvals to those applied to the original dosimetry processes, software, equipment and dose records.</li>
<li>Proposed changes shall be reviewed and approved by qualified persons before implementation.</li>
<li>Records of proposed and implemented changes shall be kept.</li>
<li>Procedures shall ensure that changes to dose records are properly documented.</li>
<li>Where changes involve a revision to approved procedures and instructions, the specifications of section 7.11, Document control, shall be met.</li>  </ol>  <p>More information on how to request the CNSC to change dose records is being developed in REGDOC-2.7.2, Volume I, <em>Ascertaining Occupational Exposure</em>.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="7.10"></div>
<h3 id="sec7-10">7.10 Document control</h3>  <ol>
<li>Procedures shall be established for the preparation, review, approval, issue, distribution, and revision of documents and procedures. This includes documents and procedures that contain technical specifications or prescribe activities for the achievement and verification of technical specifications; for example, technical standards, dosimetry manuals, specifications and procedures for dose records, operating procedures, software programs, calibration techniques, and analytical methods. It also includes quality assurance program procedures.</li>
<li>Documents shall be legible, available and readily identifiable.</li>
<li>Documents shall be removed from use when obsolete, or be clearly identified as obsolete if retained for reference purposes.</li>  </ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="7.11"></div>
<h3 id="sec7-11">7.11 Calibration and maintenance</h3>  <ol>
<li>Recording, measuring, testing, analyzing or counting devices, and instruments or standards whose performance is critical to accurate dose measurements shall be identified, controlled and maintained.</li>
<li>Such devices, instruments, and standards shall be of a type, sensitivity and accuracy that meet the appropriate minimum specifications set out in sections 2 through 6.</li>
<li>Periodic calibration and maintenance requirements shall be determined and documented based on the necessary accuracy, purpose, degree of usage, stability characteristics and other factors affecting measurement control.</li>
<li>Maintenance and calibration procedures shall be documented.</li>
<li>Calibration status shall be recorded and maintained, and calibrated equipment shall be clearly and indelibly identified (e.g., through the use of labels). When calibration is performed before use or with a high frequency (e.g., daily), logging of calibrations may be sufficient.</li>
<li>Inaccurate, uncalibrated or malfunctioning equipment shall be identified and removed from use.</li>
<li>Measurement equipment that has been repaired or modified shall be calibrated and have its performance checked before being placed in use.</li>
<li>Calibrations shall be traceable to national reference standards that are traceable to any Canadian or international government standard-setting authority (National Research Council of Canada, National Institute of Standards and Technology, etc.). Equipment used as calibration transfer standards shall have calibration traceable to national standards. Where calibrated reference standards are used as transfer standards to set the reference level by which data is directly measured, methods shall be established to preserve the integrity of the process and the results.</li>
<li>When equipment is found to be inaccurate (see section 7.14, Non-conformance), reviews shall be conducted to determine the validity of previous data or results and corrective action is to be taken (see section 7.15, Corrective action).</li>  </ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="7.12"></div>
<h3 id="sec7-12">7.12 Verification</h3>  <ol>
<li>Verifications of the intermediate and final stages of work shall be identified, planned, resourced, controlled, documented and conducted in accordance with defined acceptance and performance criteria.</li>
<li>Verification shall be carried out by qualified persons other than those who have participated in the work being verified.</li>
<li>The method, timing and results of the verifications shall be recorded, and the person performing the verification shall be identified in the record.</li>
<li>Inspections, checks and reviews shall be identified and planned to verify that work is performed (see section 7.9, items 1 to 4) in an acceptable manner.</li>
<li>The dosimetry service operator shall participate in independent tests as described in sections 2 through 6 and discrepancies shall be processed according to the specifications provided in section 7.14, Non-conformance, and section 7.15, Corrective action.</li>  </ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="7.13"></div>
<h3 id="sec7-13">7.13 Non-conformance</h3>  <ol>
<li>Non-conforming items, services and activities shall be identified, reported and documented.</li>
<li>Non-conformances shall be reviewed and remedial actions identified, executed, verified and recorded, and the impact of the non-conformance on previous work shall be assessed for potential effects on dose assignments.</li>
<li>Non-conforming items or services shall be controlled to prevent unauthorized use.</li>
<li>Backup arrangements in case of equipment or other failure or error shall be described.</li>  </ol>  <p>Note: Non-conformances may occur as a result of, for example, inadequate procedures, equipment failure, equipment inaccuracy, calculation error, wrong identification, wrong input data, the use of inappropriate dosimeter or sample, or improper handling or processing of information.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="7.14"></div>
<h3 id="sec7-14">7.14 Corrective action</h3>  <ol>
<li>Significant or recurring non conformances shall be analyzed to determine their underlying cause, and corrective action taken to prevent repetition.</li>
<li>The cause and the subsequent corrective action shall be reported to the appropriate level of management, and follow up reviews conducted to verify the effectiveness of the corrective action.</li>  </ol>  <p>Note: Significant non conformances are those that lead to, or could lead to, an undetected overexposure, an incorrect dose being assigned to an individual, or a dose being assigned to the wrong person.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="7.15"></div>
<h3 id="sec7-15">7.15 Records</h3>  <ol>
<li>The dosimetry service shall control the identification, storage, protection, retrieval, and disposition of records, in a format that will be defined by the licensee.</li>
<li>Records shall be prepared and retained as evidence of the satisfactory accomplishment of specified activities and the acceptability of results.</li>
<li>Sufficient records shall be retained to support final conclusions and to show traceability.</li>
<li>Sufficient records and documentation shall be prepared during the work process to enable reasonable recreation and checking of results from the referenced input data.</li>
<li>A list of records that relate to the licensed operation shall be maintained. Retention and disposal of records shall be in accordance with section 28 of the <em>General Nuclear Safety and Control Regulations</em>.</li>
<li>Records shall remain legible, readily identifiable and retrievable as and when needed.</li>
<li>Records shall be maintained in a secure manner to protect against the release of personal information, in accordance with relevant applicable legislation.</li>  </ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="7.16"></div>
<h3 id="sec7-16">7.16 Audits</h3>  <ol>
<li>Management shall have an audit program. The audit shall determine whether procedures and processes are being effectively implemented and are resulting in the satisfactory performance of the dosimetry service.</li>
<li>The entire quality program shall be audited on an annual basis.</li>
<li>Audits shall be planned and performed by appropriately trained personnel. Auditors shall not have direct responsibility for the activity being assessed.</li>
<li>Audit results shall be documented. These results shall be reviewed by the manager responsible for the activity that has been assessed. This person shall take action to correct any deficiencies and their causes. Follow up actions shall include verification of actions taken (see section 6.15, Corrective action).</li>  </ol>  <p>Note: See the CSA Group publication CAN/CSA ISO 19011:03 [3] for guidance.</p>
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
<h2 id="appA">Appendix A: Accuracy and Uncertainty in External Dose Measurement</h2>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appA-1"></div>
<h3 id="appA-1">A.1 Introduction</h3>  <p>This appendix provides information and instructions on how to demonstrate that the accuracy and precision requirements of this regulatory document can be met. The sample calculations in section A.4 illustrate how various quantities are evaluated.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appA-2"></div>
<h3 id="appA-2">A.2	Conventionally true value</h3>  <p>In principle, the objective of personal dosimetry is to measure the "personal dose equivalent" H<sub>p</sub>(d), as defined by International Commission on Radiation Units and Measurements Report 47 [1]. The values of d are 0.07 mm for shallow (or skin) dose and 10 mm for deep (or whole-body) dose. In practice, the "true" value of a quantity is impossible to determine, as explained in the International Organization for Standardization&rsquo;s <em>Guide to the Expression of Uncertainty in Measurement</em> [4]. Instead, the result of a measurement is compared with the "conventionally true value" of that quantity to assess errors in the measured results.</p>  <p>Even if a perfect measurement of Hp(d) were possible, its definition would lead to different expected true values for persons of different sizes and shapes who are exposed to the same photon radiation field. This is therefore an unsuitable quantity to use for specification of the performance and properties of a dosimeter, and a conventionally true value of H<sub>p</sub>(d) replaces the true measurement. In the case of photon radiation, for example, the conventionally true value is established by measuring the free-in-air collision air kerma (or exposure) in a well-defined field with a calibrated instrument and by applying a conversion coefficient to the result. A computer model calculates the conversion coefficient to simulate irradiation of a standard phantom, which approximates the torso of a human body. The conventionally true value obtained in this way is assumed to have a negligible uncertainty compared with the uncertainty in routine dose measurements. It therefore serves as the reference value for estimating errors in the latter measurements.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appA-3"></div>
<h3 id="appA-3">A.3	Accuracy and precision</h3>  <p>The information contained in this section follows the method developed by C. R. Hirning and P. S. Yuen [5]. The specifications at the end of this section are based on the recommendations of ICRP Publication 60 [2] and Publication 75 [6], as well as on the CNSC requirement that external dosimetry services achieve levels of performance consistent with the use of up-to-date equipment and operating methods.</p>  <p>In analyzing dosimeter response uncertainty, one should first decide on the number, N, of influence quantities to be considered that would affect the dosimeter response significantly, such as energy, angle of incidence, temperature, humidity and so on. Each influence quantity should be treated as a statistical variable, as denoted by the following symbol:</p>  <p>&nbsp;&nbsp;<strong>X<sub>i</sub></strong></p>  <p>where <em>i</em> = 1, 2,...,N</p>  <p>For example, <em>X<sub>2</sub></em> denotes all the values that influence quantity number 2 can take on between a lower and an upper limit.</p>   <p>After deciding on the number of influence quantities to consider, one should group the N influence quantities into single, first-type composite, second-type composite, or third-type composite independent influence quantities. This will enable the dosimeter response to become a separable function of these independent influence quantities and to be expressed as a product of relative responses. The conditions for separability are satisfied if, for each grouped independent influence quantity, the fractional change in the overall relative response at conditions other than the reference conditions arising from a change in the grouped influence quantity is independent of other grouped influence quantities [5].</p>
<h4>A.3.1 Types of influence quantities</h4>  <p><strong>A single independent influence quantity</strong>, <em>x<sub>q</sub></em>, consists of only one influence quantity such that the above condition of overall relative-response separability is satisfied. The dose linearity of a thermoluminescent dosimeter (TLD) is an example of a single independent influence quantity, in which the response of the TLD tends to increase as the absorbed dose in the dosimeter increases to a high value in the order of grays. The increase in the dosimeter response does not depend on the type of photon source (photon energy) that has delivered the absorbed dose or any other influence quantities.</p>  <p><strong>A composite influence quantity</strong> consists of a subset of the N influence quantities being considered. Similar to a single independent influence quantity, the fractional change in the overall relative response depends only on this independent composite influence quantity alone.</p>  <p><strong>A first-type composite influence quantity</strong> consists of influence quantities <em>x<sub>i</sub></em> and <em>x<sub>j</sub></em> and can be extended to more than two. The relative response as a function of <em>x<sub>i</sub></em> and <em>x<sub>j</sub></em> is not separable and therefore, in discrete form, consists of a matrix whose elements are linearly independent of one another. The occurrence probability, <em>p<sub>ij</sub></em>, however, can be separable into independent probability functions <em>p<sub>i</sub></em> and <em>p<sub>j</sub></em>. An example of a first-type composite influence quantity is given by the combination of photon energy and angle of incidence (i.e., energy-angle or <em>E-&theta;</em>). Energy angle is a first-type composite influence quantity because the dosimeter relative response depends on both the energy and angle and is not separable. Therefore, the relative response, in discrete form, must be expressed as a two dimensional matrix, <em>r<sub>E&theta;</sub></em>, whose elements are linearly independent of one another. The occurrence probability function, however, is separable into two independent probability functions, <em>p<sub>E</sub></em> and <em>p<sub>&theta;</sub></em>, as energy and angle are not correlated.</p>  <p><strong>A second-type composite influence quantity</strong> consists of influence quantities <em>x<sub>k</sub></em> and <em>x<sub>l</sub></em>. The dosimeter relative response function is separable and therefore, in discrete form, consists of two independent vectors (as opposed to a matrix), each of which is dependent on only one influence quantity, <em>x<sub>k</sub></em> or <em>x<sub>l</sub></em>. The occurrence probability function, <em>p<sub>kl</sub></em>, however, cannot be separated. An example of a second-type composite influence quantity is humidity-temperature (or <em>H-T</em>). The dosimeter relative response is separable into two independent relative response functions, <em>r<sub>H</sub></em> and <em>r<sub>T</sub></em>, because the fractional change of the relative response due to the change in either influence quantity is independent of each other. The occurrence probability function, however, is not separable because relative humidity depends on temperature and, in discrete form, is denoted by a matrix <em>p<sub>HT</sub></em>.</p>  <p><strong>A third-type composite influence quantity</strong> consists of influence quantities <em>x<sub>u</sub></em> and <em>x<sub>v</sub></em>, in which neither the relative response, <em>r<sub>uv</sub></em>, nor the occurrence probability function, <em>p<sub>uv</sub></em>, is separable. Thus, in discrete form, each of <em>r<sub>uv</sub></em> and <em>p<sub>uv</sub></em> consists of a two-dimensional matrix whose elements are linearly independent of one another. No example is provided because it is rare to encounter such a composite influence quantity in external dosimetry</p>
<h4>A.3.2 Dosimeter response</h4>  <p>The response of a dosimeter, <em>R</em>, is defined as the result of a measurement under defined conditions, <em>H<sub>m</sub></em>, divided by the conventionally true dose that would be received under those conditions, <em>H<sub>c</sub></em>, as shown in the following equation:</p>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<mi>R</mi><mo>=</mo><mfrac>
<mrow>
<msub>
<mi>H</mi>
<mi>m</mi>
</msub>
</mrow>
<mrow>
<msub>
<mi>H</mi>
<mi>c</mi>
</msub>
</mrow>
</mfrac>
</mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaamOuaiabg2
da9maalaaabaGaamisamaaBaaaleaacaWGTbaabeaaaOqaaiaadIea
daWgaaWcbaGaam4yaaqabaaaaaaa@3BB9@
</annotation>   </semantics>  </math>
<p>The mean response, <span style="text-decoration: overline;"><em>R</em></span>, of a dosimeter under the intended conditions of use may be expressed as a separable function and written as the following product [5]:</p>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<mover accent=&#39;true&#39;>
<mi>R</mi>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mo>=</mo><msubsup>
<mi>R</mi>
<mn>0</mn>
<mrow></mrow>
</msubsup>
<mover accent=&#39;true&#39;>
<mrow>
<msubsup>
<mi>r</mi>
<mn>1</mn>
<mrow></mrow>
</msubsup>
</mrow>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mover accent=&#39;true&#39;>
<mrow>
<msubsup>
<mi>r</mi>
<mn>2</mn>
<mrow></mrow>
</msubsup>
</mrow>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mn>...</mn><mover accent=&#39;true&#39;>
<mrow>
<msubsup>
<mi>r</mi>
<mi>q</mi>
<mrow></mrow>
</msubsup>
</mrow>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mn>...</mn><mover accent=&#39;true&#39;>
<mrow>
<msubsup>
<mi>r</mi>
<mrow>
<mi>i</mi><mi>j</mi></mrow>
<mrow></mrow>
</msubsup>
</mrow>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mn>...</mn><mover accent=&#39;true&#39;>
<mrow>
<msubsup>
<mi>r</mi>
<mi>k</mi>
<mrow></mrow>
</msubsup>
<msubsup>
<mi>r</mi>
<mi>l</mi>
<mrow></mrow>
</msubsup>
</mrow>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mn>...</mn><mover accent=&#39;true&#39;>
<mover accent=&#39;true&#39;>
<mrow>
<msubsup>
<mi>r</mi>
<mrow>
<mi>u</mi><mi>v</mi></mrow>
<mrow></mrow>
</msubsup>
</mrow>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mn>...</mn><mover accent=&#39;true&#39;>
<mrow>
<msubsup>
<mi>r</mi>
<mi>N</mi>
<mrow></mrow>
</msubsup>
</mrow>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
</mrow>   <annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=   feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn   hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr   4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9   vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x   fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaWaa0aaaeaaca   WGsbaaaiabg2da9iaadkfadaqhaaWcbaGaaGimaaqaaaaakmaanaaa   baGaamOCamaaDaaaleaacaaIXaaabaaaaaaakmaanaaabaGaamOCam   aaDaaaleaacaaIYaaabaaaaaaakiaac6cacaGGUaGaaiOlamaanaaa   baGaamOCamaaDaaaleaacaWGXbaabaaaaaaakiaac6cacaGGUaGaai   OlamaanaaabaGaamOCamaaDaaaleaacaWGPbGaamOAaaqaaaaaaaGc   caGGUaGaaiOlaiaac6cadaqdaaqaaiaadkhadaqhaaWcbaGaam4Aaa   qaaaaakiaadkhadaqhaaWcbaGaamiBaaqaaaaaaaGccaGGUaGaaiOl   aiaac6cadaqdbaqaaiaadkhadaqhaaWcbaGaamyDaiaadAhaaeaaaa   aaaOGaaiOlaiaac6cacaGGUaWaa0aaaeaacaWGYbWaa0baaSqaaiaa   d6eaaeaaaaaaaaaa@56EB@   </annotation>  </semantics>  </math>
<p>where:</p>
<table className="">  <tr>
<td><span style="font-size: medium;"><em>R<sub>0</sub></em></span></td>
<td>=</td>
<td>the reference response of a dosimeter; that is, the response when all influence quantities are held at reference conditions (normally those conditions under which the dosimeter is calibrated). The overall relative response of the dosimeter, r, is defined as the ratio <em>R/R<sub>0</sub></em>, and a relative response, <em>r<sub>q</sub></em>, applicable to an independent influence quantity, <em>q</em>, is defined as the overall relative response of the dosimeter when all influence quantities except <em>q</em> are held at the reference conditions</td>  </tr>  <tr>
<td><span style="font-size: medium;"><em>N</em></span></td>
<td>=</td>
<td>the number of influence quantities that may affect the response (when two or more influence quantities are not independent, they may be combined into a composite influence quantity, which is independent of other influence quantities)</td>  </tr>  <tr>
<td><span style="font-size: medium;"><span style="text-decoration: overline;"><em>r<sub>q</sub></em></span></span></td>
<td>=</td>
<td>the mean relative response arising from variations in the values <em>x<sub>q</sub></em> attainable by the qth single independent influence quantity</td>  </tr>  <tr>
<td><span style="font-size: medium;"><span style="text-decoration: overline;"><em>r<sub>ij</sub></em></span></span></td>
<td>=</td>
<td>mean relative response arising from variations in the values <em>x<sub>i</sub></em> and <em>x<sub>j</sub></em> attainable by the <em>i<sup>th</sup></em> and <em>j<sup>th</sup></em> influence quantities that form a composite independent influence quantity of the first type introduced when the relative response for this composite independent influence quantity, <em>r<sub>ij</sub></em> , cannot be separated into independent relative responses <em>r<sub>i</sub></em> and <em>r<sub>j</sub></em>, while the occurrence probability function <em>p<sub>ij</sub></em> is separable and expressed as the product of individual probability functions <em>p<sub>i</sub></em> and <em>p<sub>j</sub></em>, which are independent of each other</td>  </tr>  <tr>
<td><span style="font-size: medium;"><span style="text-decoration: overline;"><em>r<sub>k</sub>r<sub>l</sub></em></span></span></td>
<td>=</td>
<td>mean relative response arising from variations in the values <em>x<sub>k</sub></em> and <em>x<sub>l</sub></em> attainable by the <em>k<sup>th</sup></em> and <em>l<sup>th</sup></em> influence quantities that form a composite independent influence quantity of the second type introduced when the relative response for this composite independent influence quantity, <em>r<sub>kl</sub></em> , can be separated into independent relative responses <em>r<sub>k</sub></em> and <em>r<sub>l</sub></em>, while the occurrence probability function <em>p<sub>ij</sub></em> is not separable into independent probability functions <em>p<sub>i</sub></em> and <em>p<sub>j</sub></em></td>  </tr>  <tr>
<td><span style="font-size: medium;"><math display=&#39;block&#39;>   <semantics>
<mrow>
<mover accent=&#39;true&#39;>
<mover accent=&#39;true&#39;>
<mrow>
<msubsup>
<mi>r</mi>
<mrow>
<mi>u</mi><mi>v</mi></mrow>
<mrow></mrow>
</msubsup>
</mrow>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
</mrow>   <annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=   feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn   hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr   4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9   vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x   fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaWaa0qaaeaaca   WGYbWaa0baaSqaaiaadwhacaWG2baabaaaaaaaaaa@3921@   </annotation>  </semantics>  </math>  </td>
<td>=</td>
<td>mean relative response arising from variations in values <em>x<sub>u</sub></em> and <em>x<sub>v</sub></em> attainable by the <em>u<sup>th</sup></em> and <em>v<sup>th</sup></em> influence quantities that form a composite independent influence quantity of the third type introduced when neither the relative response <em>r<sub>uv</sub></em> nor occurrence probability <em>p<sub>uv</sub></em> for this composite independent influence quantity can be separated into individual relative responses <em>r<sub>u</sub></em> and <em>r<sub>v</sub></em>, or independent occurrence probabilities <em>p<sub>u</sub></em> and <em>p<sub>v</sub></em></td>
</tr>  </table>
<p>If the effect of a change in an influence quantity on the relative response is known and the probability distribution of that influence quantity can be measured or estimated, the mean relative response due to that influence quantity can be calculated using the usual statistical techniques, as follows.</p>  <p>For an independent influence quantity, q, the mean relative response in equation 2 is expressed as shown in the following equation:</p>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<mover accent=&#39;true&#39;>
<mrow>
<msub>
<mi>r</mi>
<mi>q</mi>
</msub>
</mrow>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mo>=</mo><mstyle displaystyle=&#39;true&#39;>
<munderover>
<mo>&#x2211;</mo>
<mrow>
<mi>s</mi><mo>=</mo><mn>1</mn></mrow>
<mrow>
<msub>
<mi>M</mi>
<mi>q</mi>
</msub>
</mrow>
</munderover>
<mrow>
<msub>
<mi>r</mi>
<mrow>
<mi>q</mi><mo>,</mo><mi>s</mi></mrow>
</msub>
<msub>
<mi>p</mi>
<mrow>
<mi>q</mi><mo>,</mo><mi>s</mi></mrow>
</msub>
</mrow>
</mstyle></mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbiqaaqXbdaqdaa
qaaiaadkhadaWgaaWcbaGaamyCaaqabaaaaOGaeyypa0ZaaabCaeaa
caWGYbWaaSbaaSqaaiaadghacaGGSaGaam4CaaqabaGccaWGWbWaaS
baaSqaaiaadghacaGGSaGaam4CaaqabaaabaGaam4Caiabg2da9iaa
igdaaeaacaWGnbWaaSbaaWqaaiaadghaaeqaaaqdcqGHris5aaaa@47BD@
</annotation>   </semantics>  </math>
<p>where</p>
<ul className="list-bullet-none">
<li><em>M<sub>q</sub></em> = the number of measured relative responses for the <em>q<sup>th</sup></em> influence quantity</li>
<li><em>r<sub>q,s</sub></em> = the <em>s<sup>th</sup></em> of <em>M<sub>q</sub></em> measured relative responses for the corresponding <em>s<sup>th</sup></em> interval in <em>x<sub>q</sub></em></li>
<li><em>p<sub>q,s</sub></em> = the probability that <em>x<sub>q</sub></em> will take on a value in the <em>s<sup>th</sup></em> interval</li>
</ul>
<p>For a composite influence quantity of the first type, the mean relative response is expressed as shown in the following equation:</p>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<mover accent=&#39;true&#39;>
<mrow>
<msub>
<mi>r</mi>
<mrow>
<mi>i</mi><mi>j</mi></mrow>
</msub>
</mrow>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mo>=</mo><mstyle displaystyle=&#39;true&#39;>
<munderover>
<mo>&#x2211;</mo>
<mrow>
<mi>s</mi><mo>=</mo><mn>1</mn></mrow>
<mrow>
<msub>
<mi>M</mi>
<mi>i</mi>
</msub>
</mrow>
</munderover>
<mrow></mrow>
</mstyle><mstyle displaystyle=&#39;true&#39;>
<munderover>
<mo>&#x2211;</mo>
<mrow>
<mi>t</mi><mo>=</mo><mn>1</mn></mrow>
<mrow>
<mi>M</mi><mi>j</mi></mrow>
</munderover>
<mrow>
<msub>
<mi>r</mi>
<mrow>
<mi>i</mi><mi>j</mi><mo>,</mo><mi>s</mi><mo>,</mo><mi>t</mi></mrow>
</msub>
<msub>
<mi>p</mi>
<mrow>
<mi>i</mi><mo>,</mo><mi>s</mi></mrow>
</msub>
</mrow>
</mstyle><msub>
<mi>p</mi>
<mrow>
<mi>j</mi><mo>,</mo><mi>t</mi></mrow>
</msub>
</mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbiqaaqXbdaqdaa
qaaiaadkhadaWgaaWcbaGaamyAaiaadQgaaeqaaaaakiabg2da9maa
qahabaaaleaacaWGZbGaeyypa0JaaGymaaqaaiaad2eadaWgaaadba
GaamyAaaqabaaaniabggHiLdGcdaaeWbqaaiaadkhadaWgaaWcbaGa
amyAaiaadQgacaGGSaGaam4CaiaacYcacaWG0baabeaakiaadchada
WgaaWcbaGaamyAaiaacYcacaWGZbaabeaaaeaacaWG0bGaeyypa0Ja
aGymaaqaaiaad2eacaWGQbaaniabggHiLdGccaWGWbWaaSbaaSqaai
aadQgacaGGSaGaamiDaaqabaaaaa@55AE@
</annotation>   </semantics>  </math>
<p>where</p>
<ul className="list-bullet-none">
<li><em>r<sub>ij,s,t</sub></em> = a response matrix that is dependent on both the <em>i<sup>th</sup></em> and <em>j<sup>th</sup></em> influence quantities and <em>p<sub>i,s</sub></em> and <em>p<sub>j,t</sub></em> are occurrence probability vectors that are independent of each other</li>
</ul>
<p>For a composite influence quantity of the second type, the mean relative response is expressed as shown in the following equation:</p>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<msub>
<mrow>
<mover accent=&#39;true&#39;>
<mrow>
<msub>
<mi>r</mi>
<mi>k</mi>
</msub>
<mi>r</mi></mrow>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
</mrow>
<mi>l</mi>
</msub>
<mo>=</mo><mstyle displaystyle=&#39;true&#39;>
<munderover>
<mo>&#x2211;</mo>
<mrow>
<mi>s</mi><mo>=</mo><mn>1</mn></mrow>
<mrow>
<msub>
<mi>M</mi>
<mi>k</mi>
</msub>
</mrow>
</munderover>
<mrow></mrow>
</mstyle><mstyle displaystyle=&#39;true&#39;>
<munderover>
<mo>&#x2211;</mo>
<mrow>
<mi>t</mi><mo>=</mo><mn>1</mn></mrow>
<mrow>
<mi>M</mi><mi>l</mi></mrow>
</munderover>
<mrow>
<msub>
<mi>r</mi>
<mrow>
<mi>k</mi><mo>,</mo><mi>s</mi></mrow>
</msub>
<msub>
<mi>r</mi>
<mrow>
<mi>l</mi><mo>,</mo><mi>t</mi></mrow>
</msub>
</mrow>
</mstyle><msub>
<mi>p</mi>
<mrow>
<mi>k</mi><mi>l</mi><mo>,</mo><mi>s</mi><mo>,</mo><mi>t</mi></mrow>
</msub>
</mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbiqaaqXbdaqdaa
qaaiaadkhadaWgaaWcbaGaam4AaaqabaGccaWGYbaaamaaBaaaleaa
caWGSbaabeaakiabg2da9maaqahabaaaleaacaWGZbGaeyypa0JaaG
ymaaqaaiaad2eadaWgaaadbaGaamyAaaqabaaaniabggHiLdGcdaae
WbqaaiaadkhadaWgaaWcbaGaam4AaiaacYcacaWGZbaabeaakiaadk
hadaWgaaWcbaGaamyAaiaacYcacaWG0baabeaaaeaacaWG0bGaeyyp
a0JaaGymaaqaaiaad2eacaWGQbaaniabggHiLdGccaWGWbWaaSbaaS
qaaiaadUgacaWGSbGaaiilaiaadohacaGGSaGaamiDaaqabaaaaa@56E6@
</annotation>   </semantics>  </math>
<p>where</p>
<ul className="list-bullet-none">
<li><em>p<sub>kl,s,t</sub></em> = an occurrence probability matrix that is dependent on the <em>k<sup>th</sup></em> and <em>l<sup>th</sup></em> influence quantities, and <em>r<sub>k,s</sub></em> and <em>r<sub>l,t</sub></em> are relative response vectors that are independent of each other</li>
</ul>  <p>For a composite influence quantity of the third type, the mean relative response is expressed as shown in the following equation:</p>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<mover accent=&#39;true&#39;>
<mover accent=&#39;true&#39;>
<mrow>
<msub>
<mi>r</mi>
<mrow>
<mi>u</mi><mi>v</mi></mrow>
</msub>
</mrow>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mo>=</mo><mstyle displaystyle=&#39;true&#39;>
<munderover>
<mo>&#x2211;</mo>
<mrow>
<mi>s</mi><mo>=</mo><mn>1</mn></mrow>
<mrow>
<mi>M</mi><mi>u</mi></mrow>
</munderover>
<mrow></mrow>
</mstyle><mstyle displaystyle=&#39;true&#39;>
<munderover>
<mo>&#x2211;</mo>
<mrow>
<mi>t</mi><mo>=</mo><mn>1</mn></mrow>
<mrow>
<mi>M</mi><mi>v</mi></mrow>
</munderover>
<mrow>
<msub>
<mi>r</mi>
<mrow>
<mi>u</mi><mi>v</mi><mo>,</mo><mi>s</mi><mo>,</mo><mi>t</mi></mrow>
</msub>
</mrow>
</mstyle><msub>
<mi>p</mi>
<mrow>
<mi>u</mi><mi>v</mi><mo>,</mo><mi>s</mi><mo>,</mo><mi>t</mi></mrow>
</msub>
</mrow>   <annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=   feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn   hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr   4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9   vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x   fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbiqaaqXbdaqdba   qaaiaadkhadaWgaaWcbaGaamyDaiaadAhaaeqaaaaakiabg2da9maa   qahabaaaleaacaWGZbGaeyypa0JaaGymaaqaaiaad2eacaWG1baani   abggHiLdGcdaaeWbqaaiaadkhadaWgaaWcbaGaamyDaiaadAhacaGG   SaGaam4CaiaacYcacaWG0baabeaaaeaacaWG0bGaeyypa0JaaGymaa   qaaiaad2eacaWG2baaniabggHiLdGccaWGWbWaaSbaaSqaaiaadwha   caWG2bGaaiilaiaadohacaGGSaGaamiDaaqabaaaaa@54B7@   </annotation>  </semantics>  </math>
<p>where</p>
<ul className="list-bullet-none">
<li><em>r<sub>uv,s,t</sub></em> and <em>p<sub>uv,s,t</sub></em> = relative response and occurrence probability matrices respectively, which are both dependent on influence quantities <em>u</em> and <em>v</em></li>
</ul>  <p>The probabilities are normalized so that</p>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<mstyle displaystyle=&#39;true&#39;>
<munderover>
<mo>&#x2211;</mo>
<mrow>
<mi>s</mi><mo>=</mo><mn>1</mn></mrow>
<mrow>
<msub>
<mi>M</mi>
<mi>i</mi>
</msub>
</mrow>
</munderover>
<mrow>
<msub>
<mi>p</mi>
<mrow>
<mi>i</mi><mo>,</mo><mi>s</mi></mrow>
</msub>
<mo>=</mo><mn>1</mn></mrow>
</mstyle><mi>&#x0020;</mi><mi>&#x0020;</mi><mi>&#x0020;</mi><mspace width="50px" /><mtext>and</mtext><mspace width="50px" /><mi>&#x0020;</mi><mi>&#x0020;</mi><mi>&#x0020;</mi><mstyle displaystyle=&#39;true&#39;>
<munderover>
<mo>&#x2211;</mo>
<mrow>
<mi>t</mi><mo>=</mo><mn>1</mn></mrow>
<mrow>
<mi>M</mi><mi>j</mi></mrow>
</munderover>
<mrow>
<msub>
<mi>p</mi>
<mrow>
<mi>j</mi><mo>,</mo><mi>t</mi></mrow>
</msub>
<mo>=</mo><mn>1</mn></mrow>
</mstyle></mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaWaaabCaeaaca
WGWbWaaSbaaSqaaiaadMgacaGGSaGaam4CaaqabaGccqGH9aqpcaaI
XaaaleaacaWGZbGaeyypa0JaaGymaaqaaiaad2eadaWgaaadbaGaam
yAaaqabaaaniabggHiLdqefqvyO9wBHbacfiGccaWFGaGaa8hiaiaa
=bcacaqGHbGaaeOBaiaabsgacaWFGaGaa8hiaiaa=bcadaaeWbqaai
aadchadaWgaaWcbaGaamOAaiaacYcacaWG0baabeaakiabg2da9iaa
igdaaSqaaiaadshacqGH9aqpcaaIXaaabaGaamytaiaadQgaa0Gaey
yeIuoaaaa@57AC@
</annotation>   </semantics>  </math>
<p>and</p>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<mstyle displaystyle=&#39;true&#39;>
<munderover>
<mo>&#x2211;</mo>
<mrow>
<mi>s</mi><mo>=</mo><mn>1</mn></mrow>
<mrow>
<msub>
<mi>M</mi>
<mi>k</mi>
</msub>
</mrow>
</munderover>
<mrow></mrow>
</mstyle><mstyle displaystyle=&#39;true&#39;>
<munderover>
<mo>&#x2211;</mo>
<mrow>
<mi>t</mi><mo>=</mo><mn>1</mn></mrow>
<mrow>
<msub>
<mi>M</mi>
<mi>l</mi>
</msub>
</mrow>
</munderover>
<mrow>
<msub>
<mi>p</mi>
<mrow>
<mi>k</mi><mi>l</mi><mo>,</mo><mi>s</mi><mo>,</mo><mi>t</mi></mrow>
</msub>
</mrow>
</mstyle><mo>=</mo><mn>1</mn><mspace width="50px" /><mi>&#x0020;</mi><mi>&#x0020;</mi><mi>&#x0020;</mi><mi>&#x0020;</mi><mi>&#x0020;</mi><mi>&#x0020;</mi><mtext>and</mtext><mspace width="50px" /><mi>&#x0020;</mi><mi>&#x0020;</mi><mi>&#x0020;</mi><mi>&#x0020;</mi><mi>&#x0020;</mi><mi>&#x0020;</mi><mstyle displaystyle=&#39;true&#39;>
<munderover>
<mo>&#x2211;</mo>
<mrow>
<mi>s</mi><mo>=</mo><mn>1</mn></mrow>
<mrow>
<msub>
<mi>M</mi>
<mi>u</mi>
</msub>
</mrow>
</munderover>
<mrow></mrow>
</mstyle><mstyle displaystyle=&#39;true&#39;>
<munderover>
<mo>&#x2211;</mo>
<mrow>
<mi>t</mi><mo>=</mo><mn>1</mn></mrow>
<mrow>
<msub>
<mi>M</mi>
<mi>v</mi>
</msub>
</mrow>
</munderover>
<mrow>
<msub>
<mi>p</mi>
<mrow>
<mi>u</mi><mi>v</mi><mo>,</mo><mi>s</mi><mo>,</mo><mi>t</mi></mrow>
</msub>
</mrow>
</mstyle><mo>=</mo><mn>1</mn></mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaWaaabCaeaaaS
qaaiaadohacqGH9aqpcaaIXaaabaGaamytamaaBaaameaacaWGRbaa
beaaa0GaeyyeIuoakmaaqahabaGaamiCamaaBaaaleaacaWGRbGaam
iBaiaacYcacaWGZbGaaiilaiaadshaaeqaaaqaaiaadshacqGH9aqp
caaIXaaabaGaamytamaaBaaameaacaWGSbaabeaaa0GaeyyeIuoaki
abg2da9iaaigdaiiGacqWFGaaicqWFGaaicqWFGaaicqWFGaaicqWF
GaaicqWFGaaicaqGHbGaaeOBaiaabsgaruavHH2BTfgaiuGacaGFGa
Gaa4hiaiaa+bcacaGFGaGaa4hiaiaa+bcadaaeWbqaaaWcbaGaam4C
aiabg2da9iaaigdaaeaacaWGnbWaaSbaaWqaaiaadwhaaeqaaaqdcq
GHris5aOWaaabCaeaacaWGWbWaaSbaaSqaaiaadwhacaWG2bGaaiil
aiaadohacaGGSaGaamiDaaqabaaabaGaamiDaiabg2da9iaaigdaae
aacaWGnbWaaSbaaWqaaiaadAhaaeqaaaqdcqGHris5aOGaeyypa0Ja
aGymaaaa@6FA9@
</annotation>   </semantics>  </math>
<p>In the special case where all values of <em>x<sub>i</sub></em> within the range of possible values [<em>x<sub>i</sub><sup>min</sup>, x<sub>i</sub><sup>max</sup></em>] are equally likely, the probability is just equal to the width of the interval, &Delta;x<sub>i,s</sub> , divided by width of the range:</p>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<msub>
<mi>p</mi>
<mrow>
<mi>i</mi><mo>,</mo><mi>s</mi></mrow>
</msub>
<mo>=</mo><mfrac>
<mrow>
<mi>&#x0394;</mi><msub>
<mi>x</mi>
<mrow>
<mi>i</mi><mo>,</mo><mi>s</mi></mrow>
</msub>
</mrow>
<mrow>
<msubsup>
<mi>x</mi>
<mi>i</mi>
<mrow>
<mi>max</mi></mrow>
</msubsup>
<mo>&#x2212;</mo><msubsup>
<mi>x</mi>
<mi>i</mi>
<mrow>
<mi>min</mi></mrow>
</msubsup>
</mrow>
</mfrac>
</mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaamiCamaaBa
aaleaacaWGPbGaaiilaiaadohaaeqaaOGaeyypa0ZaaSaaaeaacqqH
uoarcaWG4bWaaSbaaSqaaiaadMgacaGGSaGaam4Caaqabaaakeaaca
WG4bWaa0baaSqaaiaadMgaaeaaciGGTbGaaiyyaiaacIhaaaGccqGH
sislcaWG4bWaa0baaSqaaiaadMgaaeaaciGGTbGaaiyAaiaac6gaaa
aaaaaa@4AC9@
</annotation>   </semantics>  </math>
<p>Probabilities may also be estimated in this way when information on the actual probabilities is unavailable.</p>  <p>The variance, <em>u<sup>2</sup></em>, of measured responses about the mean response can also be calculated with the usual statistical techniques, and its positive square root yields the standard uncertainty in the dosimeter response, <em>u</em>. The general expression for the variance in the response is as follows:</p>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<msup>
<mi>u</mi>
<mn>2</mn>
</msup>
<mo>=</mo><msubsup>
<mi>R</mi>
<mn>0</mn>
<mn>2</mn>
</msubsup>
<mover accent=&#39;true&#39;>
<mrow>
<msubsup>
<mi>r</mi>
<mn>1</mn>
<mn>2</mn>
</msubsup>
</mrow>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mover accent=&#39;true&#39;>
<mrow>
<msubsup>
<mi>r</mi>
<mn>2</mn>
<mn>2</mn>
</msubsup>
</mrow>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mn>...</mn><mover accent=&#39;true&#39;>
<mrow>
<msubsup>
<mi>r</mi>
<mi>q</mi>
<mn>2</mn>
</msubsup>
</mrow>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mn>...</mn><mover accent=&#39;true&#39;>
<mrow>
<msubsup>
<mi>r</mi>
<mrow>
<mi>i</mi><mi>j</mi></mrow>
<mn>2</mn>
</msubsup>
</mrow>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mn>...</mn><mover accent=&#39;true&#39;>
<mrow>
<msubsup>
<mi>r</mi>
<mi>k</mi>
<mn>2</mn>
</msubsup>
<msubsup>
<mi>r</mi>
<mi>l</mi>
<mn>2</mn>
</msubsup>
</mrow>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mn>...</mn><mover accent=&#39;true&#39;>
<mover accent=&#39;true&#39;>
<mrow>
<msubsup>
<mi>r</mi>
<mrow>
<mi>u</mi><mi>v</mi></mrow>
<mn>2</mn>
</msubsup>
</mrow>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mn>...</mn><mover accent=&#39;true&#39;>
<mrow>
<msubsup>
<mi>r</mi>
<mi>N</mi>
<mn>2</mn>
</msubsup>
</mrow>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mo>&#x2212;</mo><msup>
<mrow>
<mo stretchy=&#39;false&#39;>(</mo><mover accent=&#39;true&#39;>
<mi>R</mi>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mo stretchy=&#39;false&#39;>)</mo></mrow>
<mn>2</mn>
</msup>
</mrow>   <annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=   feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn   hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr   4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9   vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x   fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaamyDamaaCa   aaleqabaGaaGOmaaaakiabg2da9iaadkfadaqhaaWcbaGaaGimaaqa   aiaaikdaaaGcdaqdaaqaaiaadkhadaqhaaWcbaGaaGymaaqaaiaaik   daaaaaaOWaa0aaaeaacaWGYbWaa0baaSqaaiaaikdaaeaacaaIYaaa   aaaakiaac6cacaGGUaGaaiOlamaanaaabaGaamOCamaaDaaaleaaca   WGXbaabaGaaGOmaaaaaaGccaGGUaGaaiOlaiaac6cadaqdaaqaaiaa   dkhadaqhaaWcbaGaamyAaiaadQgaaeaacaaIYaaaaaaakiaac6caca   GGUaGaaiOlamaanaaabaGaamOCamaaDaaaleaacaWGRbaabaGaaGOm   aaaakiaadkhadaqhaaWcbaGaamiBaaqaaiaaikdaaaaaaOGaaiOlai   aac6cacaGGUaWaa0qaaeaacaWGYbWaa0baaSqaaiaadwhacaWG2baa   baGaaGOmaaaaaaGccaGGUaGaaiOlaiaac6cadaqdaaqaaiaadkhada   qhaaWcbaGaamOtaaqaaiaaikdaaaaaaOGaeyOeI0Iaaiikamaanaaa   baGaamOuaaaacaGGPaWaaWbaaSqabeaacaaIYaaaaaaa@62AD@   </annotation>  </semantics>  </math>
<p>In this equation, the factors related to relative responses that depend on single influence quantities are given by the following equation:</p>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<mover accent=&#39;true&#39;>
<mrow>
<msubsup>
<mi>r</mi>
<mi>q</mi>
<mn>2</mn>
</msubsup>
</mrow>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mo>=</mo><mi>&#x0020;</mi><mstyle displaystyle=&#39;true&#39;>
<munderover>
<mo>&#x2211;</mo>
<mrow>
<mi>s</mi><mo>=</mo><mn>1</mn></mrow>
<mrow>
<mi>M</mi><mi>q</mi></mrow>
</munderover>
<mrow>
<msubsup>
<mi>r</mi>
<mrow>
<mi>q</mi><mo>,</mo><mi>s</mi></mrow>
<mn>2</mn>
</msubsup>
<msub>
<mi>p</mi>
<mrow>
<mi>q</mi><mo>,</mo><mi>s</mi></mrow>
</msub>
</mrow>
</mstyle></mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaWaa0aaaeaaca
WGYbWaa0baaSqaaiaadghaaeaacaaIYaaaaaaakiabg2da9erbufgA
V1wyaGqbciaa=bcadaaeWbqaaiaadkhadaqhaaWcbaGaamyCaiaacY
cacaWGZbaabaGaaGOmaaaakiaadchadaWgaaWcbaGaamyCaiaacYca
caWGZbaabeaakiabg2da9iaaigdaaSqaaiaadohacqGH9aqpcaaIXa
aabaGaamytaiaadghaa0GaeyyeIuoaaaa@4DE2@
</annotation>   </semantics>  </math>
<p>The terms in equation 8 involving composite influence quantities of the first type become expressed as shown in the following equation:</p>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<mover accent=&#39;true&#39;>
<mrow>
<msubsup>
<mi>r</mi>
<mrow>
<mi>i</mi><mi>j</mi></mrow>
<mn>2</mn>
</msubsup>
</mrow>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mo>=</mo><mstyle displaystyle=&#39;true&#39;>
<munderover>
<mo>&#x2211;</mo>
<mrow>
<mi>s</mi><mo>=</mo><mn>1</mn></mrow>
<mrow>
<msub>
<mi>M</mi>
<mi>i</mi>
</msub>
</mrow>
</munderover>
<mrow></mrow>
</mstyle><mstyle displaystyle=&#39;true&#39;>
<munderover>
<mo>&#x2211;</mo>
<mrow>
<mi>t</mi><mo>=</mo><mn>1</mn></mrow>
<mrow>
<mi>M</mi><mi>j</mi></mrow>
</munderover>
<mrow>
<msubsup>
<mi>r</mi>
<mrow>
<mi>i</mi><mi>j</mi><mo>,</mo><mi>s</mi><mo>,</mo><mi>t</mi></mrow>
<mn>2</mn>
</msubsup>
<msub>
<mi>p</mi>
<mrow>
<mi>i</mi><mo>,</mo><mi>s</mi></mrow>
</msub>
</mrow>
</mstyle><msub>
<mi>p</mi>
<mrow>
<mi>j</mi><mo>,</mo><mi>t</mi></mrow>
</msub>
</mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbiqaaqXbdaqdaa
qaaiaadkhadaqhaaWcbaGaamyAaiaadQgaaeaacaaIYaaaaaaakiab
g2da9maaqahabaaaleaacaWGZbGaeyypa0JaaGymaaqaaiaad2eada
WgaaadbaGaamyAaaqabaaaniabggHiLdGcdaaeWbqaaiaadkhadaqh
aaWcbaGaamyAaiaadQgacaGGSaGaam4CaiaacYcacaWG0baabaGaaG
OmaaaakiaadchadaWgaaWcbaGaamyAaiaacYcacaWGZbaabeaaaeaa
caWG0bGaeyypa0JaaGymaaqaaiaad2eacaWGQbaaniabggHiLdGcca
WGWbWaaSbaaSqaaiaadQgacaGGSaGaamiDaaqabaaaaa@5728@
</annotation>   </semantics>  </math>
<p>Similarly, the second type of composite term in equation 8 is expressed as shown in the following equation:</p>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<mover accent=&#39;true&#39;>
<mrow>
<msubsup>
<mi>r</mi>
<mi>k</mi>
<mn>2</mn>
</msubsup>
</mrow>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mover accent=&#39;true&#39;>
<mrow>
<msubsup>
<mi>r</mi>
<mi>l</mi>
<mn>2</mn>
</msubsup>
</mrow>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mo>=</mo><mstyle displaystyle=&#39;true&#39;>
<munderover>
<mo>&#x2211;</mo>
<mrow>
<mi>s</mi><mo>=</mo><mn>1</mn></mrow>
<mrow>
<msub>
<mi>M</mi>
<mi>i</mi>
</msub>
</mrow>
</munderover>
<mrow></mrow>
</mstyle><mstyle displaystyle=&#39;true&#39;>
<munderover>
<mo>&#x2211;</mo>
<mrow>
<mi>t</mi><mo>=</mo><mn>1</mn></mrow>
<mrow>
<mi>M</mi><mi>j</mi></mrow>
</munderover>
<mrow>
<msubsup>
<mi>r</mi>
<mrow>
<mi>k</mi><mo>,</mo><mi>s</mi></mrow>
<mn>2</mn>
</msubsup>
<msubsup>
<mi>r</mi>
<mrow>
<mi>l</mi><mo>,</mo><mi>t</mi></mrow>
<mn>2</mn>
</msubsup>
</mrow>
</mstyle><msub>
<mi>p</mi>
<mrow>
<mi>k</mi><mi>l</mi><mo>,</mo><mi>s</mi><mo>,</mo><mi>t</mi></mrow>
</msub>
</mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbiqaaqXbdaqdaa
qaaiaadkhadaqhaaWcbaGaam4AaaqaaiaaikdaaaaaaOWaa0aaaeaa
caWGYbWaa0baaSqaaiaadUgaaeaacaaIYaaaaaaakiabg2da9maaqa
habaaaleaacaWGZbGaeyypa0JaaGymaaqaaiaad2eadaWgaaadbaGa
amyAaaqabaaaniabggHiLdGcdaaeWbqaaiaadkhadaqhaaWcbaGaam
4AaiaacYcacaWGZbaabaGaaGOmaaaakiaadkhadaqhaaWcbaGaamiB
aiaacYcacaWG0baabaGaaGOmaaaaaeaacaWG0bGaeyypa0JaaGymaa
qaaiaad2eacaWGQbaaniabggHiLdGccaWGWbWaaSbaaSqaaiaadUga
caWGSbGaaiilaiaadohacaGGSaGaamiDaaqabaaaaa@59ED@
</annotation>   </semantics>  </math>
<p>while the third type of composite term in equation 8 is expressed as shown in the following equation:</p>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<mover accent=&#39;true&#39;>
<mover accent=&#39;true&#39;>
<mrow>
<msubsup>
<mi>r</mi>
<mrow>
<mi>u</mi><mi>v</mi></mrow>
<mn>2</mn>
</msubsup>
</mrow>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mo>=</mo><mstyle displaystyle=&#39;true&#39;>
<munderover>
<mo>&#x2211;</mo>
<mrow>
<mi>s</mi><mo>=</mo><mn>1</mn></mrow>
<mrow>
<mi>M</mi><mi>u</mi></mrow>
</munderover>
<mrow></mrow>
</mstyle><mstyle displaystyle=&#39;true&#39;>
<munderover>
<mo>&#x2211;</mo>
<mrow>
<mi>t</mi><mo>=</mo><mn>1</mn></mrow>
<mrow>
<mi>M</mi><mi>v</mi></mrow>
</munderover>
<mrow>
<msubsup>
<mi>r</mi>
<mrow>
<mi>u</mi><mi>v</mi><mo>,</mo><mi>s</mi><mo>,</mo><mi>t</mi></mrow>
<mn>2</mn>
</msubsup>
</mrow>
</mstyle><msub>
<mi>p</mi>
<mrow>
<mi>u</mi><mi>v</mi><mo>,</mo><mi>s</mi><mo>,</mo><mi>t</mi></mrow>
</msub>
</mrow>   <annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=   feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn   hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr   4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9   vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x   fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbiqaaqXbdaqdba   qaaiaadkhadaqhaaWcbaGaamyDaiaadAhaaeaacaaIYaaaaaaakiab   g2da9maaqahabaaaleaacaWGZbGaeyypa0JaaGymaaqaaiaad2eaca   WG1baaniabggHiLdGcdaaeWbqaaiaadkhadaqhaaWcbaGaamyDaiaa   dAhacaGGSaGaam4CaiaacYcacaWG0baabaGaaGOmaaaaaeaacaWG0b   Gaeyypa0JaaGymaaqaaiaad2eacaWG2baaniabggHiLdGccaWGWbWa   aSbaaSqaaiaadwhacaWG2bGaaiilaiaadohacaGGSaGaamiDaaqaba   aaaa@5631@   </annotation>  </semantics>  </math>
<p>In addition to the standard uncertainty in the response, there will be a statistical relative uncertainty, <em>u<sub>s</sub></em>, arising from random errors in the measurement process. The size of this uncertainty is determined using a Type A evaluation [4]. The combined standard uncertainty in a single dose measurement is expressed as shown in the following equation:</p>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<msub>
<mi>u</mi>
<mi>c</mi>
</msub>
<mo>=</mo><mover accent=&#39;true&#39;>
<mi>R</mi>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<msqrt>
<mrow>
<msup>
<mrow>
<mrow><mo>(</mo>
<mrow>
<mfrac>
<mi>u</mi>
<mrow>
<mover accent=&#39;true&#39;>
<mi>R</mi>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
</mrow>
</mfrac>
</mrow>
<mo>)</mo></mrow></mrow>
<mn>3</mn>
</msup>
<mo>+</mo><msubsup>
<mi>u</mi>
<mi>s</mi>
<mn>2</mn>
</msubsup>
</mrow>
</msqrt>
</mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaamyDamaaBa
aaleaacaWGJbaabeaakiabg2da9maanaaabaGaamOuaaaadaGcaaqa
amaabmaabaWaaSaaaeaacaWG1baabaWaa0aaaeaacaWGsbaaaaaaai
aawIcacaGLPaaadaahaaWcbeqaaiaaiodaaaGccqGHRaWkcaWG1bWa
a0baaSqaaiaadohaaeaacaaIYaaaaaqabaaaaa@4238@
</annotation>   </semantics>  </math>
<p>Using these definitions, the overall specification for accuracy and precision is given by the following expression:</p>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<mfrac>
<mn>1</mn>
<mi>&#x03C1;</mi>
</mfrac>
<mo>&#x2264;</mo><mover accent=&#39;true&#39;>
<mi>R</mi>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mo>&#x00B1;</mo><mn>2</mn><msub>
<mi>u</mi>
<mi>c</mi>
</msub>
<mo>&#x2264;</mo><mi>&#x03C1;</mi></mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaWaaSaaaeaaca
aIXaaabaGaeqyWdihaaiabgsMiJoaanaaabaGaamOuaaaacqGHXcqS
caaIYaGaamyDamaaBaaaleaacaWGJbaabeaakiabgsMiJkabeg8aYb
aa@4355@
</annotation>   </semantics>  </math>
<p>where</p>  <p>   <ul className="list-bullet-none">
<li>&rho; = 1.5 for d = 10 mm and 4 mSv &lt; H<sub>p,c</sub>(10) &lt; 10 Sv;</li>
<li>&nbsp;&nbsp;&nbsp;= 2 for d = 10 mm and H<sub>p,c</sub>(10) = 0.4 mSv;</li>
<li>&nbsp;&nbsp;&nbsp;= 1.5 for d = 0.07 mm and 100 mSv &lt; H<sub>p,c</sub>(0.07) &lt; 10 Sv;</li>
<li>&nbsp;&nbsp;&nbsp;= 2 for d = 0.07 mm and H<sub>p,c</sub>(0.07) = 10 mSv;</li>
<li>&nbsp;&nbsp;&nbsp;= 3 for 100 mSv &lt; H<sub>e,c</sub> &lt; 10 Sv; and</li>
<li>&nbsp;&nbsp;&nbsp;= 3 for H<sub>e,c</sub> = 10 mSv.</li>   </ul>
<p>The combined standard uncertainty <em>u<sub>c</sub></em> is multiplied by a coverage factor of 2 to give an uncertainty interval for individual measurements of R corresponding to a level of confidence of approximately 95%. Section A.4, Example calculations, provides a practical example of the calculation described above.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appA-4"></div>
<h3 id="appA-4">A.4 Example calculations</h3>  <p>This section gives an example of the calculation of mean response and combined standard uncertainty, using hypothetical data. For simplicity, only five influence quantities are assumed to significantly affect the response of the dosimeter, and only photon fields will be addressed. The five influence quantities are photon energy, photon angle of incidence, relative humidity, temperature and dose (dose linearity in dosimeter). The five influence quantities are grouped into one single (dose), one first-type composite (energy-angle) and one second-type composite (humidity-temperature) independent grouped influence quantities. It is assumed that the dosimeter will be used in the environment of a nuclear generating station.</p>
<h4>A.4.1 Photon energy and angle of incidence</h4>  <p>For the first step, measure the relative response for a range of energies and angles that represents those expected to be present in the station, while maintaining all other influence quantities at the reference values. The results from the array <em>r<sub>ij</sub></em> or <em>r<sub>E&theta;</sub></em> are shown in table A.1.</p>
<table className="">  <caption className="text-left">Table A.1: Hypothetical measured relative response, <em>r<sub>E&theta;,s,t</sub></em>, as a function of photon energy and angle of incidence, with reference to the Cs-137 gamma ray response at 0 degrees</caption>  <tr>
<th className="text-center text-center" rowspan="4" colSpan="2">Energy (<em>E</em>)</th>
<th className="text-center" colSpan="5">Angle (&theta;)</th>  </tr>  <tr>
<th className="text-center" colSpan="5">Index, <em>t</em></th>  </tr>  <tr>
<th className="text-center">1</th>
<th className="text-center">2</th>
<th className="text-center">3</th>
<th className="text-center">4</th>
<th className="text-center">5</th>  </tr>  <tr>
<th className="text-center" colSpan="5">Value (deg)</th>  </tr>  <tr>
<th className="text-center">Index, s</th>
<th className="text-center">Value (keV)</th>
<th className="text-center">0</th>
<th className="text-center">20</th>
<th className="text-center">40</th>
<th className="text-center">60</th>
<th className="text-center">80</th>  </tr>  <tr>
<td className="text-center">1</td>
<td className="text-center">33</td>
<td className="text-center">0.85</td>
<td className="text-center">0.84</td>
<td className="text-center">0.82</td>
<td className="text-center">0.80</td>
<td className="text-center">0.75</td>  </tr>  <tr>
<td className="text-center">2</td>
<td className="text-center">48</td>
<td className="text-center">0.97</td>
<td className="text-center">0.97</td>
<td className="text-center">0.96</td>
<td className="text-center">0.94</td>
<td className="text-center">0.89</td>  </tr>  <tr>
<td className="text-center">3</td>
<td className="text-center">65</td>
<td className="text-center">1.08</td>
<td className="text-center">1.08</td>
<td className="text-center">1.07</td>
<td className="text-center">1.05</td>
<td className="text-center">1.00</td>  </tr>  <tr>
<td className="text-center">4</td>
<td className="text-center">83</td>
<td className="text-center">1.16</td>
<td className="text-center">1.16</td>
<td className="text-center">1.15</td>
<td className="text-center">1.13</td>
<td className="text-center">1.09</td>  </tr>  <tr>
<td className="text-center">5</td>
<td className="text-center">100</td>
<td className="text-center">1.14</td>
<td className="text-center">1.14</td>
<td className="text-center">1.13</td>
<td className="text-center">1.12</td>
<td className="text-center">1.08</td>  </tr>  <tr>
<td className="text-center">6</td>
<td className="text-center">118</td>
<td className="text-center">1.10</td>
<td className="text-center">1.10</td>
<td className="text-center">1.10</td>
<td className="text-center">1.09</td>
<td className="text-center">1.05</td>  </tr>  <tr>
<td className="text-center">7</td>
<td className="text-center">164</td>
<td className="text-center">1.08</td>
<td className="text-center">1.08</td>
<td className="text-center">1.08</td>
<td className="text-center">1.07</td>
<td className="text-center">1.03</td>  </tr>  <tr>
<td className="text-center">8</td>
<td className="text-center">208</td>
<td className="text-center">1.05</td>
<td className="text-center">1.05</td>
<td className="text-center">1.05</td>
<td className="text-center">1.04</td>
<td className="text-center">1.00</td>  </tr>  <tr>
<td className="text-center">9</td>
<td className="text-center">250</td>
<td className="text-center">1.02</td>
<td className="text-center">1.02</td>
<td className="text-center">1.02</td>
<td className="text-center">1.01</td>
<td className="text-center">0.98</td>  </tr>  <tr>
<td className="text-center">10</td>
<td className="text-center">662</td>
<td className="text-center">1.00</td>
<td className="text-center">1.00</td>
<td className="text-center">1.00</td>
<td className="text-center">0.99</td>
<td className="text-center">0.96</td>  </tr>  <tr>
<td className="text-center">11</td>
<td className="text-center">1250</td>
<td className="text-center">0.95</td>
<td className="text-center">0.95</td>
<td className="text-center">0.95</td>
<td className="text-center">0.94</td>
<td className="text-center">0.92</td>  </tr>  </table>
<p>Next, for each measurement point, define intervals of energy and angle, and estimate the probability of exposure in each interval. Tables A.2 and A.3 show the results. Although it is possible that the energy and angle of incidence will be correlated for a particular location and orientation, the averaging effect of moving about in the field will greatly reduce any correlation, and the two influence quantities can be treated as uncorrelated.</p>
<table className="">  <caption className="text-left">Table A.2: Energy intervals and assumed probability, <em>p<sub>E,s</sub></em>, of receiving dose in each</caption>  <tr>
<th className="text-center">Index, s</th>
<th className="text-center">E (keV)</th>
<th className="text-center">Interval (keV)</th>
<th className="text-center">Probability, <em>p<sub>E,s</sub></em></th>  </tr>  <tr>
<td className="text-center">1</td>
<td className="text-center">33</td>
<td className="text-center">0-40</td>
<td className="text-center">0.01</td>  </tr>  <tr>
<td className="text-center">2</td>
<td className="text-center">48</td>
<td className="text-center">41-55</td>
<td className="text-center">0.01</td>  </tr>  <tr>
<td className="text-center">3</td>
<td className="text-center">65</td>
<td className="text-center">56-74</td>
<td className="text-center">0.03</td>  </tr>  <tr>
<td className="text-center">4</td>
<td className="text-center">83</td>
<td className="text-center">75-91</td>
<td className="text-center">0.05</td>  </tr>  <tr>
<td className="text-center">5</td>
<td className="text-center">100</td>
<td className="text-center">92-109</td>
<td className="text-center">0.05</td>  </tr>  <tr>
<td className="text-center">6</td>
<td className="text-center">118</td>
<td className="text-center">110-141</td>
<td className="text-center">0.05</td>  </tr>  <tr>
<td className="text-center">7</td>
<td className="text-center">164</td>
<td className="text-center">142-186</td>
<td className="text-center">0.05</td>  </tr>  <tr>
<td className="text-center">8</td>
<td className="text-center">208</td>
<td className="text-center">187-229</td>
<td className="text-center">0.05</td>  </tr>  <tr>
<td className="text-center">9</td>
<td className="text-center">250</td>
<td className="text-center">230-450</td>
<td className="text-center">0.25</td>  </tr>  <tr>
<td className="text-center">10</td>
<td className="text-center">662</td>
<td className="text-center">451-950</td>
<td className="text-center">0.30</td>  </tr>  <tr>
<td className="text-center">11</td>
<td className="text-center">1250</td>
<td className="text-center">951-1500</td>
<td className="text-center">0.15</td>  </tr>  <tr>
<td className="text-right" colSpan="3">Sum&nbsp;&nbsp;</td>
<td className="text-center">1.00</td>  </tr>  </table>  <br />
<table className="">  <caption className="text-left">Table A.3: Angle of incidence intervals and assumed probability, <em>p<sub>&theta;,t</sub></em>, of receiving dose in each</caption>  <tr>
<th className="text-center">Index, t</th>
<th className="text-center">&theta; (deg)</th>
<th className="text-center">Interval (deg)</th>
<th className="text-center">Probability, <em>p<sub>&theta;,t</sub></em></th>  </tr>  <tr>
<td className="text-center">1</td>
<td className="text-center">0</td>
<td className="text-center">0-10</td>
<td className="text-center">0.20</td>  </tr>  <tr>
<td className="text-center">2</td>
<td className="text-center">20</td>
<td className="text-center">11-30</td>
<td className="text-center">0.30</td>  </tr>  <tr>
<td className="text-center">3</td>
<td className="text-center">40</td>
<td className="text-center">31-50</td>
<td className="text-center">0.30</td>  </tr>  <tr>
<td className="text-center">4</td>
<td className="text-center">60</td>
<td className="text-center">51-70</td>
<td className="text-center">0.10</td>  </tr>  <tr>
<td className="text-center">5</td>
<td className="text-center">80</td>
<td className="text-center">71-90</td>
<td className="text-center">0.10</td>  </tr>  <tr>
<td className="mrgn-bttm-xl text-right" colSpan="3">Sum&nbsp;&nbsp;</td>
<td className="text-center">1.00</td>  </tr>  </table>
<p>The mean relative response for photon energy-angle is given by equation 4 (see section A.3 for the equations referred to in this section). It may be calculated from the relative responses in table A.1 and the probability distributions in tables A.2 and A.3 using matrix multiplication. The equations referred to in this section are found in section A.3 of this appendix. By substituting <em>E</em> for <em>i, &theta;</em> for <em>j, 11</em> for <em>M<sub>i</sub></em>, and 5 for <em>M<sub>j</sub></em>, equation 4 becomes expressed as shown in the following equation:</p>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<mover accent=&#39;true&#39;>
<mrow>
<msubsup>
<mi>r</mi>
<mrow>
<mi>E</mi><mi>&#x03B8;</mi></mrow>
<mrow></mrow>
</msubsup>
</mrow>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mo>=</mo><mstyle displaystyle=&#39;true&#39;>
<munderover>
<mo>&#x2211;</mo>
<mrow>
<mi>s</mi><mo>=</mo><mn>1</mn></mrow>
<mrow>
<mi>s</mi><mo>=</mo><mn>11</mn></mrow>
</munderover>
<mrow></mrow>
</mstyle><mstyle displaystyle=&#39;true&#39;>
<munderover>
<mo>&#x2211;</mo>
<mrow>
<mi>t</mi><mo>=</mo><mn>1</mn></mrow>
<mrow>
<mi>t</mi><mo>=</mo><mn>5</mn></mrow>
</munderover>
<mrow>
<msubsup>
<mi>r</mi>
<mrow>
<mi>E</mi><mi>&#x03B8;</mi><mo>,</mo><mi>s</mi><mo>,</mo><mi>t</mi></mrow>
<mrow></mrow>
</msubsup>
<msub>
<mi>p</mi>
<mrow>
<mi>E</mi><mo>,</mo><mi>s</mi></mrow>
</msub>
</mrow>
</mstyle><msub>
<mi>p</mi>
<mrow>
<mi>&#x03B8;</mi><mo>,</mo><mi>t</mi></mrow>
</msub>
</mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbiqaaqXbdaqdaa
qaaiaadkhadaqhaaWcbaGaamyraiabeI7aXbqaaaaaaaGccqGH9aqp
daaeWbqaaaWcbaGaam4Caiabg2da9iaaigdaaeaacaWGZbGaeyypa0
JaaGymaiaaigdaa0GaeyyeIuoakmaaqahabaGaamOCamaaDaaaleaa
caWGfbGaeqiUdeNaaiilaiaadohacaGGSaGaamiDaaqaaaaakiaadc
hadaWgaaWcbaGaamyraiaacYcacaWGZbaabeaaaeaacaWG0bGaeyyp
a0JaaGymaaqaaiaadshacqGH9aqpcaaI1aaaniabggHiLdGccaWGWb
WaaSbaaSqaaiabeI7aXjaacYcacaWG0baabeaaaaa@5A1D@
</annotation>   </semantics>  </math>
<p>yielding the following</p>  <math display=&#39;block&#39;>   <semantics>
<mrow>
<mover accent=&#39;true&#39;>
<mrow>
<msub>
<mi>r</mi>
<mrow>
<mi>E</mi><mi>&#x03B8;</mi></mrow>
</msub>
</mrow>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mo>=</mo><mn>1.018</mn></mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaWaa0aaaeaaca
WGYbWaaSbaaSqaaiaadweacqaH4oqCaeqaaaaakiabg2da9iaaigda
caGGUaGaaGimaiaaigdacaaI4aaaaa@3E5E@
</annotation>   </semantics>  </math>
<p>Similarly, after squaring the elements of the response matrix, Equation 10 becomes expressed as shown in the following equation:</p>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<mover accent=&#39;true&#39;>
<mrow>
<msubsup>
<mi>r</mi>
<mrow>
<mi>E</mi><mi>&#x03B8;</mi></mrow>
<mn>2</mn>
</msubsup>
</mrow>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mo>=</mo><mstyle displaystyle=&#39;true&#39;>
<munderover>
<mo>&#x2211;</mo>
<mrow>
<mi>s</mi><mo>=</mo><mn>1</mn></mrow>
<mrow>
<mi>s</mi><mo>=</mo><mn>11</mn></mrow>
</munderover>
<mrow></mrow>
</mstyle><mstyle displaystyle=&#39;true&#39;>
<munderover>
<mo>&#x2211;</mo>
<mrow>
<mi>t</mi><mo>=</mo><mn>1</mn></mrow>
<mrow>
<mi>t</mi><mo>=</mo><mn>5</mn></mrow>
</munderover>
<mrow>
<msubsup>
<mi>r</mi>
<mrow>
<mi>E</mi><mi>&#x03B8;</mi><mo>,</mo><mi>s</mi><mo>,</mo><mi>t</mi></mrow>
<mn>2</mn>
</msubsup>
<msub>
<mi>p</mi>
<mrow>
<mi>E</mi><mo>,</mo><mi>s</mi></mrow>
</msub>
</mrow>
</mstyle><msub>
<mi>p</mi>
<mrow>
<mi>&#x03B8;</mi><mo>,</mo><mi>t</mi></mrow>
</msub>
</mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbiqaaqXbdaqdaa
qaaiaadkhadaqhaaWcbaGaamyraiabeI7aXbqaaiaaikdaaaaaaOGa
eyypa0ZaaabCaeaaaSqaaiaadohacqGH9aqpcaaIXaaabaGaam4Cai
abg2da9iaaigdacaaIXaaaniabggHiLdGcdaaeWbqaaiaadkhadaqh
aaWcbaGaamyraiabeI7aXjaacYcacaWGZbGaaiilaiaadshaaeaaca
aIYaaaaOGaamiCamaaBaaaleaacaWGfbGaaiilaiaadohaaeqaaaqa
aiaadshacqGH9aqpcaaIXaaabaGaamiDaiabg2da9iaaiwdaa0Gaey
yeIuoakiaadchadaWgaaWcbaGaeqiUdeNaaiilaiaadshaaeqaaaaa
@5B95@
</annotation>   </semantics>  </math>
<p>resulting in the following</p>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<mover accent=&#39;true&#39;>
<mrow>
<msubsup>
<mi>r</mi>
<mrow>
<mi>E</mi><mi>&#x03B8;</mi></mrow>
<mn>2</mn>
</msubsup>
</mrow>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mo>=</mo><mn>1.041</mn></mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaWaa0aaaeaaca
WGYbWaa0baaSqaaiaadweacqaH4oqCaeaacaaIYaaaaaaakiabg2da
9iaaigdacaGGUaGaaGimaiaaisdacaaIXaaaaa@3F17@
</annotation>   </semantics>  </math>
<h4>A.4.2 Relative humidity and temperature</h4>  <p>Since these two influence quantities are assumed to affect the dosimeter response independently, the relative responses can be measured for a series of values for each quantity while maintaining the other at its reference value. Again, intervals are defined about each of the measured values, so that the full range of interest is covered. Tables A.4 and A.5 give the measurement points, the corresponding intervals and the relative responses.</p>
<table className="">  <caption className="text-left">Table A.4: Measured relative response, <em>r<sub>H,s</sub></em>, as a function of relative humidity, H, with reference value of 50 percent</caption>  <tr>
<th className="text-center">Index, s</th>
<th className="text-center">H (%)</th>
<th className="text-center">Interval (%)</th>
<th className="text-center">Relative response <em>r<sub>H,s</sub></em></th>  </tr>  <tr>
<td className="text-center">1</td>
<td className="text-center">40</td>
<td className="text-center">0-50</td>
<td className="text-center">1.00</td>  </tr>  <tr>
<td className="text-center">2</td>
<td className="text-center">60</td>
<td className="text-center">51-70</td>
<td className="text-center">0.99</td>  </tr>  <tr>
<td className="text-center">3</td>
<td className="text-center">80</td>
<td className="text-center">71-90</td>
<td className="text-center">0.98</td>  </tr>  <tr>
<td className="text-center">4</td>
<td className="text-center">95</td>
<td className="text-center">91-100</td>
<td className="text-center">0.95</td>  </tr>  </table>  <br />
<table className="">  <caption className="text-left">Table A.5: Measured relative response <em>r<sub>T,t</sub></em>, as a function of temperature, T, with reference value of 20&deg;C</caption>  <tr>
<th className="text-center">Index, t</th>
<th className="text-center">T (&deg;C)</th>
<th className="text-center">Interval (&deg;C)</th>
<th className="text-center">Relative response <em>r<sub>T,t</sub></em></th>  </tr>  <tr>
<td className="text-center">1</td>
<td className="text-center">-10</td>
<td className="text-center">(-15)&ndash;(-5)</td>
<td className="text-center">1.05</td>  </tr>  <tr>
<td className="text-center">2</td>
<td className="text-center">0</td>
<td className="text-center">(-6)&ndash;(5)</td>
<td className="text-center">1.03</td>  </tr>  <tr>
<td className="text-center">3</td>
<td className="text-center">10</td>
<td className="text-center">6-15</td>
<td className="text-center">1.01</td>  </tr>  <tr>
<td className="text-center">4</td>
<td className="text-center">20</td>
<td className="text-center">16-25</td>
<td className="text-center">1.00</td>  </tr>  <tr>
<td className="text-center">5</td>
<td className="text-center">30</td>
<td className="text-center">26-35</td>
<td className="text-center">0.99</td>  </tr>  <tr>
<td className="text-center">6</td>
<td className="text-center">40</td>
<td className="text-center">36-45</td>
<td className="text-center">0.95</td>  </tr>  <tr>
<td className="text-center">7</td>
<td className="text-center">50</td>
<td className="text-center">46-55</td>
<td className="text-center">0.90</td>  </tr>  </table>
<p>Since temperature and relative humidity are correlated in the workplace environment, a probability matrix, pHT, is estimated as shown in table A.6.</p>
<table className="table table-striped">  <caption className="text-left">Table A.6: Assumed relative probability of occurrence, <em>p<sub>HT,s,t</sub></em>, in the workplace of each combination of temperature and relative humidity interval</caption>  <tr>
<th className="text-center text-center" rowspan="3" colSpan="2">&nbsp;</em></th>
<th className="text-center" colSpan="8">Temperature</th>  </tr>  <tr>
<th className="text-center" colSpan="8">Index, <em>t</em></th>  </tr>  <tr>
<th className="text-center">1</th>
<th className="text-center">2</th>
<th className="text-center">3</th>
<th className="text-center">4</th>
<th className="text-center">5</th>
<th className="text-center">6</th>
<th className="text-center">7</th>
<th className="text-center">&nbsp;</th>  </tr>  <tr>
<th className="text-center" colSpan="2">Humidity</th>
<th className="text-center" colSpan="8">Interval (&deg;C)</th>  </tr>  <tr>
<th className="text-center">Index, s</th>
<th className="text-center">Interval (%)</th>
<th className="text-center">(-15)&ndash;(-5)</th>
<th className="text-center">(-6)&ndash;(5)</th>
<th className="text-center">6-15</th>
<th className="text-center">16-25</th>
<th className="text-center">26-35</th>
<th className="text-center">36-45</th>
<th className="text-center">46-55</th>
<th className="text-center">Sum</th>  </tr>  <tr>
<td className="text-center">1</td>
<td className="text-center">0-50</td>
<td className="text-center">0.01</td>
<td className="text-center">0.01</td>
<td className="text-center">0.02</td>
<td className="text-center">0.00</td>
<td className="text-center">0.00</td>
<td className="text-center">0.00</td>
<td className="text-center">0.00</td>
<td className="text-center">0.04</td>  </tr>  <tr>
<td className="text-center">2</td>
<td className="text-center">51-70</td>
<td className="text-center">0.00</td>
<td className="text-center">0.00</td>
<td className="text-center">0.11</td>
<td className="text-center">0.30</td>
<td className="text-center">0.05</td>
<td className="text-center">0.00</td>
<td className="text-center">0.00</td>
<td className="text-center">0.46</td>  </tr>  <tr>
<td className="text-center">3</td>
<td className="text-center">71-90</td>
<td className="text-center">0.00</td>
<td className="text-center">0.00</td>
<td className="text-center">0.00</td>
<td className="text-center">0.25</td>
<td className="text-center">0.15</td>
<td className="text-center">0.03</td>
<td className="text-center">0.00</td>
<td className="text-center">0.43</td>  </tr>  <tr>
<td className="text-center">4</td>
<td className="text-center">91-100</td>
<td className="text-center">0.00</td>
<td className="text-center">0.00</td>
<td className="text-center">0.00</td>
<td className="text-center">0.00</td>
<td className="text-center">0.05</td>
<td className="text-center">0.01</td>
<td className="text-center">0.01</td>
<td className="text-center">0.07</td>  </tr>  <tr>
<td className="text-right" colSpan="9">Sum&nbsp;&nbsp;</td>
<td className="text-center">1.00</td>  </tr>  </table>
<p>Substituting <em>H</em> for <em>k</em>, <em>T</em> for <em>l</em>, 4 for <em>M<sub>k</sub></em>, and 7 for <em>M<sub>l</sub></em>, equation 5 becomes expressed as shown in the following equation:</p>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<msub>
<mrow>
<mover accent=&#39;true&#39;>
<mrow>
<msub>
<mi>r</mi>
<mi>H</mi>
</msub>
<mi>r</mi></mrow>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
</mrow>
<mi>T</mi>
</msub>
<mo>=</mo><mstyle displaystyle=&#39;true&#39;>
<munderover>
<mo>&#x2211;</mo>
<mrow>
<mi>s</mi><mo>=</mo><mn>1</mn></mrow>
<mrow>
<mi>s</mi><mo>=</mo><mn>4</mn></mrow>
</munderover>
<mrow></mrow>
</mstyle><mstyle displaystyle=&#39;true&#39;>
<munderover>
<mo>&#x2211;</mo>
<mrow>
<mi>t</mi><mo>=</mo><mn>1</mn></mrow>
<mrow>
<mi>t</mi><mo>=</mo><mn>7</mn></mrow>
</munderover>
<mrow>
<msubsup>
<mi>r</mi>
<mrow>
<mi>H</mi><mo>,</mo><mi>s</mi></mrow>
<mrow></mrow>
</msubsup>
<msub>
<mi>r</mi>
<mrow>
<mi>T</mi><mo>,</mo><mi>t</mi></mrow>
</msub>
</mrow>
</mstyle><msub>
<mi>p</mi>
<mrow>
<mi>H</mi><mi>T</mi><mo>,</mo><mi>s</mi><mo>,</mo><mi>t</mi></mrow>
</msub>
</mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbiqaaqXbdaqdaa
qaaiaadkhadaWgaaWcbaGaamisaaqabaGccaWGYbaaamaaBaaaleaa
caWGubaabeaakiabg2da9maaqahabaaaleaacaWGZbGaeyypa0JaaG
ymaaqaaiaadohacqGH9aqpcaaI0aaaniabggHiLdGcdaaeWbqaaiaa
dkhadaqhaaWcbaGaamisaiaacYcacaWGZbaabaaaaOGaamOCamaaBa
aaleaacaWGubGaaiilaiaadshaaeqaaaqaaiaadshacqGH9aqpcaaI
XaaabaGaamiDaiabg2da9iaaiEdaa0GaeyyeIuoakiaadchadaWgaa
WcbaGaamisaiaadsfacaGGSaGaam4CaiaacYcacaWG0baabeaaaaa@5807@
</annotation>   </semantics>  </math>
<p>yielding the following</p>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<mover accent=&#39;true&#39;>
<mrow>
<msub>
<mi>r</mi>
<mi>H</mi>
</msub>
<msub>
<mi>r</mi>
<mi>T</mi>
</msub>
</mrow>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mo>=</mo><mn>0.980</mn></mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaWaa0aaaeaaca
WGYbWaaSbaaSqaaiaadIeaaeqaaOGaamOCamaaBaaaleaacaWGubaa
beaaaaGccqGH9aqpcaaIWaGaaiOlaiaaiMdacaaI4aGaaGimaaaa@3EB8@
</annotation>   </semantics>  </math>
<p>Similarly, equation 11 becomes expressed as shown in the following equation:</p>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<mover accent=&#39;true&#39;>
<mrow>
<msubsup>
<mi>r</mi>
<mi>H</mi>
<mn>2</mn>
</msubsup>
<msubsup>
<mi>r</mi>
<mi>T</mi>
<mn>2</mn>
</msubsup>
</mrow>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mo>=</mo><mstyle displaystyle=&#39;true&#39;>
<munderover>
<mo>&#x2211;</mo>
<mrow>
<mi>s</mi><mo>=</mo><mn>1</mn></mrow>
<mrow>
<mi>s</mi><mo>=</mo><mn>4</mn></mrow>
</munderover>
<mrow></mrow>
</mstyle><mstyle displaystyle=&#39;true&#39;>
<munderover>
<mo>&#x2211;</mo>
<mrow>
<mi>t</mi><mo>=</mo><mn>1</mn></mrow>
<mrow>
<mi>t</mi><mo>=</mo><mn>7</mn></mrow>
</munderover>
<mrow>
<msubsup>
<mi>r</mi>
<mrow>
<mi>H</mi><mo>,</mo><mi>s</mi></mrow>
<mn>2</mn>
</msubsup>
<msubsup>
<mi>r</mi>
<mrow>
<mi>T</mi><mo>,</mo><mi>t</mi></mrow>
<mn>2</mn>
</msubsup>
</mrow>
</mstyle><msub>
<mi>p</mi>
<mrow>
<mi>H</mi><mi>T</mi><mo>,</mo><mi>s</mi><mo>,</mo><mi>t</mi></mrow>
</msub>
</mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbiqaaqXbdaqdaa
qaaiaadkhadaqhaaWcbaGaamisaaqaaiaaikdaaaGccaWGYbWaa0ba
aSqaaiaadsfaaeaacaaIYaaaaaaakiabg2da9maaqahabaaaleaaca
WGZbGaeyypa0JaaGymaaqaaiaadohacqGH9aqpcaaI0aaaniabggHi
LdGcdaaeWbqaaiaadkhadaqhaaWcbaGaamisaiaacYcacaWGZbaaba
GaaGOmaaaakiaadkhadaqhaaWcbaGaamivaiaacYcacaWG0baabaGa
aGOmaaaaaeaacaWG0bGaeyypa0JaaGymaaqaaiaadshacqGH9aqpca
aI3aaaniabggHiLdGccaWGWbWaaSbaaSqaaiaadIeacaWGubGaaiil
aiaadohacaGGSaGaamiDaaqabaaaaa@5AFA@
</annotation>   </semantics>  </math>
<p>resulting in the following</p>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<mover accent=&#39;true&#39;>
<mrow>
<msubsup>
<mi>r</mi>
<mi>H</mi>
<mn>2</mn>
</msubsup>
<msubsup>
<mi>r</mi>
<mi>T</mi>
<mn>2</mn>
</msubsup>
</mrow>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mo>=</mo><mn>0.961</mn></mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaWaa0aaaeaaca
WGYbWaa0baaSqaaiaadIeaaeaacaaIYaaaaOGaamOCamaaDaaaleaa
caWGubaabaGaaGOmaaaaaaGccqGH9aqpcaaIWaGaaiOlaiaaiMdaca
aI2aGaaGymaaaa@4031@
</annotation>   </semantics>  </math>
<h4>A.4.3 Dose linearity</h4>  <p>In this simpler case of a single independent influence quantity, the relative responses, <em>r<sub>q</sub></em>, and corresponding probabilities of occurrence, <em>p<sub>q</sub></em>, can be represented in the form of the independent vectors shown in table A.7.</p>
<table className="">  <caption className="text-left">Table A.7: Measured relative response, <em>r<sub>D,s</sub></em>, to increasing dose (linearity) and the assumed probability <em>p<sub>D,s</sub></em>, of receiving dose in each interval</caption>  <tr>
<th className="text-center">Index, s</th>
<th className="text-center">Dose, D (mSv)</th>
<th className="text-center">Range, q (mSv)</th>
<th className="text-center">Relative response, <em>r<sub>D,s</sub></em></th>
<th className="text-center">Probability, <em>p<sub>D,s</sub></em></th>  </tr>  <tr>
<td className="text-center">1</td>
<td className="text-center">0.1</td>
<td className="text-center">0-0.2</td>
<td className="text-center">1.05</td>
<td className="text-center">0.900</td>  </tr>  <tr>
<td className="text-center">2</td>
<td className="text-center">0.5</td>
<td className="text-center">0.2-0.7</td>
<td className="text-center">1.02</td>
<td className="text-center">0.050</td>  </tr>  <tr>
<td className="text-center">3</td>
<td className="text-center">1.0</td>
<td className="text-center">0.7-2.0</td>
<td className="text-center">1.00</td>
<td className="text-center">0.030</td>  </tr>  <tr>
<td className="text-center">4</td>
<td className="text-center">5.0</td>
<td className="text-center">2.0-7.0</td>
<td className="text-center">1.00</td>
<td className="text-center">0.010</td>  </tr>  <tr>
<td className="text-center">5</td>
<td className="text-center">10</td>
<td className="text-center">7-20</td>
<td className="text-center">1.00</td>
<td className="text-center">0.009</td>  </tr>  <tr>
<td className="text-center">6</td>
<td className="text-center">50</td>
<td className="text-center">20-70</td>
<td className="text-center">1.00</td>
<td className="text-center">0.001</td>  </tr>  <tr>
<td className="text-center">7</td>
<td className="text-center">100</td>
<td className="text-center">70-200</td>
<td className="text-center">1.00</td>
<td className="text-center">0.000</td>  </tr>  <tr>
<td className="text-center">8</td>
<td className="text-center">500</td>
<td className="text-center">200-700</td>
<td className="text-center">1.00</td>
<td className="text-center">0.000</td>  </tr>  <tr>
<td className="text-center">9</td>
<td className="text-center">1,000</td>
<td className="text-center">700-1,500</td>
<td className="text-center">1.02</td>
<td className="text-center">0.000</td>  </tr>  <tr>
<td className="text-center">10</td>
<td className="text-center">2,000</td>
<td className="text-center">1,500-3,000</td>
<td className="text-center">1.05</td>
<td className="text-center">0.000</td>  </tr>  <tr>
<td className="text-center">11</td>
<td className="text-center">4,000</td>
<td className="text-center">3,000-5,000</td>
<td className="text-center">1.08</td>
<td className="text-center">0.000</td>  </tr>  <tr>
<td className="text-center">12</td>
<td className="text-center">6,000</td>
<td className="text-center">5,000-7,000</td>
<td className="text-center">1.11</td>
<td className="text-center">0.000</td>  </tr>  <tr>
<td className="text-center">13</td>
<td className="text-center">8,000</td>
<td className="text-center">7,000-9,000</td>
<td className="text-center">1.15</td>
<td className="text-center">0.000</td>  </tr>  <tr>
<td className="text-center">14</td>
<td className="text-center">10,000</td>
<td className="text-center">9,000-11,000</td>
<td className="text-center">1.20</td>
<td className="text-center">0.000</td>  </tr>  <tr>
<td className="text-right" colSpan="4">Sum&nbsp;&nbsp;</td>
<td className="text-center">1.000</td>  </tr>  <tr>
<td colSpan="5">Note: The reference value is 10 mSv.</td>  </tr>  </table>
<p>In this case, by substituting <em>D</em> for <em>q</em> and 14 for <em>M<sub>q</sub></em>, equation 3 becomes expressed as shown in the following equation:</p>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<mover accent=&#39;true&#39;>
<mrow>
<msub>
<mi>r</mi>
<mi>D</mi>
</msub>
</mrow>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mo>=</mo><mstyle displaystyle=&#39;true&#39;>
<munderover>
<mo>&#x2211;</mo>
<mrow>
<mi>s</mi><mo>=</mo><mn>1</mn></mrow>
<mrow>
<mi>s</mi><mo>=</mo><mn>14</mn></mrow>
</munderover>
<mrow>
<msub>
<mi>r</mi>
<mrow>
<mi>D</mi><mo>,</mo><mi>s</mi></mrow>
</msub>
<msub>
<mi>p</mi>
<mrow>
<mi>D</mi><mo>,</mo><mi>s</mi></mrow>
</msub>
</mrow>
</mstyle></mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbiqaaqXbdaqdaa
qaaiaadkhadaWgaaWcbaGaamiraaqabaaaaOGaeyypa0ZaaabCaeaa
caWGYbWaaSbaaSqaaiaadseacaGGSaGaam4CaaqabaGccaWGWbWaaS
baaSqaaiaadseacaGGSaGaam4CaaqabaaabaGaam4Caiabg2da9iaa
igdaaeaacaWGZbGaeyypa0JaaGymaiaaisdaa0GaeyyeIuoaaaa@48B8@
</annotation>   </semantics>  </math>
<p>yielding the following</p>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<mover accent=&#39;true&#39;>
<mrow>
<msub>
<mi>r</mi>
<mi>D</mi>
</msub>
</mrow>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mo>=</mo><mn>1.046</mn></mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaWaa0aaaeaaca
WGYbWaaSbaaSqaaiaadseaaeqaaaaakiabg2da9iaaigdacaGGUaGa
aGimaiaaisdacaaI2aaaaa@3CA8@
</annotation>   </semantics>  </math>
<p>Similarly, equation 9 becomes expressed as shown in the following equation:</p>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<mover accent=&#39;true&#39;>
<mrow>
<msubsup>
<mi>r</mi>
<mi>D</mi>
<mn>2</mn>
</msubsup>
</mrow>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mo>=</mo><mstyle displaystyle=&#39;true&#39;>
<munderover>
<mo>&#x2211;</mo>
<mrow>
<mi>s</mi><mo>=</mo><mn>1</mn></mrow>
<mrow>
<mi>s</mi><mo>=</mo><mn>14</mn></mrow>
</munderover>
<mrow>
<msubsup>
<mi>r</mi>
<mrow>
<mi>D</mi><mo>,</mo><mi>s</mi></mrow>
<mn>2</mn>
</msubsup>
<msub>
<mi>p</mi>
<mrow>
<mi>D</mi><mo>,</mo><mi>s</mi></mrow>
</msub>
</mrow>
</mstyle></mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbiqaaqXbdaqdaa
qaaiaadkhadaqhaaWcbaGaamiraaqaaiaaikdaaaaaaOGaeyypa0Za
aabCaeaacaWGYbWaa0baaSqaaiaadseacaGGSaGaam4Caaqaaiaaik
daaaGccaWGWbWaaSbaaSqaaiaadseacaGGSaGaam4CaaqabaaabaGa
am4Caiabg2da9iaaigdaaeaacaWGZbGaeyypa0JaaGymaiaaisdaa0
GaeyyeIuoaaaa@4A32@
</annotation>   </semantics>  </math>
<p>resulting in the following</p>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<mover accent=&#39;true&#39;>
<mrow>
<msubsup>
<mi>r</mi>
<mi>D</mi>
<mn>2</mn>
</msubsup>
</mrow>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mo>=</mo><mn>1.094</mn></mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaWaa0aaaeaaca
WGYbWaa0baaSqaaiaadseaaeaacaaIYaaaaaaakiabg2da9iaaigda
caGGUaGaaGimaiaaiMdacaaI0aaaaa@3D68@
</annotation>   </semantics>  </math>
<h4>A.4.4 Mean response and combined uncertainty</h4>  <p>If the dosimeter has been calibrated to give the conventionally true value of the dose at the reference conditions, then <em>R<sub>0</sub></em> = 1. Equation 2 can now be expressed as shown in the following equation:</p>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<mover accent=&#39;true&#39;>
<mi>R</mi>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mo>=</mo><mn>l</mn><mo>&#x2217;</mo><mover accent=&#39;true&#39;>
<mrow>
<msub>
<mi>r</mi>
<mi>D</mi>
</msub>
</mrow>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mo>&#x2217;</mo><mover accent=&#39;true&#39;>
<mrow>
<msub>
<mi>r</mi>
<mrow>
<mi>E</mi><mi>&#x03B8;</mi></mrow>
</msub>
</mrow>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mo>&#x2217;</mo><mover accent=&#39;true&#39;>
<mrow>
<msub>
<mi>r</mi>
<mi>H</mi>
</msub>
<msub>
<mi>r</mi>
<mi>T</mi>
</msub>
</mrow>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
</mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaWaa0aaaeaaca
WGsbaaaiabg2da9iaaigdacqGHxiIkdaqdaaqaaiaadkhadaWgaaWc
baGaamiraaqabaaaaOGaey4fIOYaa0aaaeaacaWGYbWaaSbaaSqaai
aadweacqaH4oqCaeqaaaaakiabgEHiQmaanaaabaGaamOCamaaBaaa
leaacaWGibaabeaakiaadkhadaWgaaWcbaGaamivaaqabaaaaaaa@4538@
</annotation>   </semantics>  </math>
<p>Using this value and the results of preceding sections in equation 2A gives a mean response of the following:</p>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<mover accent=&#39;true&#39;>
<mi>R</mi>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mo>=</mo><mn>1.044</mn></mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaWaa0aaaeaaca
WGsbaaaiabg2da9iaaigdacaGGUaGaaGimaiaaisdacaaI0aaaaa@3B87@
</annotation>   </semantics>  </math>
<p>The variance in the response is given by equation 8, which can be rewritten as shown in the following equation:</p>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<msup>
<mi>u</mi>
<mn>2</mn>
</msup>
<mo>=</mo><msup>
<mi>l</mi>
<mn>2</mn>
</msup>
<mo>&#x2217;</mo><mover accent=&#39;true&#39;>
<mrow>
<msubsup>
<mi>r</mi>
<mi>D</mi>
<mn>2</mn>
</msubsup>
</mrow>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mo>&#x2217;</mo><mover accent=&#39;true&#39;>
<mrow>
<msubsup>
<mi>r</mi>
<mrow>
<mi>E</mi><mi>&#x03B8;</mi></mrow>
<mn>2</mn>
</msubsup>
</mrow>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mo>&#x2217;</mo><mover accent=&#39;true&#39;>
<mrow>
<msubsup>
<mi>r</mi>
<mi>H</mi>
<mn>2</mn>
</msubsup>
<msubsup>
<mi>r</mi>
<mi>T</mi>
<mn>2</mn>
</msubsup>
</mrow>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mo>&#x2212;</mo><msup>
<mrow>
<mrow><mo>(</mo>
<mrow>
<mover accent=&#39;true&#39;>
<mi>R</mi>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
</mrow>
<mo>)</mo></mrow></mrow>
<mn>2</mn>
</msup>
</mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaamyDamaaCa
aaleqabaGaaGOmaaaakiabg2da9iaadYgadaahaaWcbeqaaiaaikda
aaGccqGHxiIkdaqdaaqaaiaadkhadaqhaaWcbaGaamiraaqaaiaaik
daaaaaaOGaey4fIOYaa0aaaeaacaWGYbWaa0baaSqaaiaadweacqaH
4oqCaeaacaaIYaaaaaaakiabgEHiQmaanaaabaGaamOCamaaDaaale
aacaWGibaabaGaaGOmaaaakiaadkhadaqhaaWcbaGaamivaaqaaiaa
ikdaaaaaaOGaeyOeI0YaaeWaaeaadaqdaaqaaiaadkfaaaaacaGLOa
GaayzkaaWaaWbaaSqabeaacaaIYaaaaaaa@4EAB@
</annotation>   </semantics>  </math>
<p>resulting in the following</p>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<msup>
<mi>u</mi>
<mn>2</mn>
</msup>
<mo>=</mo><mn>0.0045</mn></mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaamyDamaaCa
aaleqabaGaaGOmaaaakiabg2da9iaaicdacaGGUaGaaGimaiaaicda
caaI0aGaaGynaaaa@3D46@
</annotation>   </semantics>  </math>
<p>A series of replicated measurements at doses greater than 4 millisieverts (mSv), with all of the five influence quantities held constant at the reference conditions, shows a statistical relative uncertainty, <em>u<sub>s</sub></em>, of 10 percent. This can be taken as the Type A assessment of uncertainty due to random errors.</p>  <p>Combining the standard uncertainty in the response with the statistical relative uncertainty according to equation 13 leads to the combined standard uncertainty in a single measurement:</p>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<msub>
<mi>u</mi>
<mi>c</mi>
</msub>
<mo>=</mo><mn>1.044</mn><msqrt>
<mrow>
<mfrac>
<mrow>
<mn>0.0045</mn></mrow>
<mrow>
<msup>
<mrow>
<mo stretchy=&#39;false&#39;>(</mo><mn>1.044</mn><mo stretchy=&#39;false&#39;>)</mo></mrow>
<mn>2</mn>
</msup>
</mrow>
</mfrac>
<mo>+</mo><msup>
<mrow>
<mo stretchy=&#39;false&#39;>(</mo><mn>0.1</mn><mo stretchy=&#39;false&#39;>)</mo></mrow>
<mn>2</mn>
</msup>
</mrow>
</msqrt>
</mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaamyDamaaBa
aaleaacaWGJbaabeaakiabg2da9iaaigdacaGGUaGaaGimaiaaisda
caaI0aWaaOaaaeaadaWcaaqaaiaaicdacaGGUaGaaGimaiaaicdaca
aI0aGaaGynaaqaaiaacIcacaaIXaGaaiOlaiaaicdacaaI0aGaaGin
aiaacMcadaahaaWcbeqaaiaaikdaaaaaaOGaey4kaSIaaiikaiaaic
dacaGGUaGaaGymaiaacMcadaahaaWcbeqaaiaaikdaaaaabeaaaaa@4C6E@
</annotation>   </semantics>  </math>
<p><math display=&#39;block&#39;>   <semantics>
<mrow>
<msub>
<mi>u</mi>
<mi>c</mi>
</msub>
<mo>=</mo><mn>0.1240</mn></mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaamyDamaaBa
aaleaacaWGJbaabeaakiabg2da9iaaicdacaGGUaGaaGymaiaaikda
caaI0aGaaGimaaaa@3D6F@
</annotation>   </semantics>  </math>
<p>The upper and lower limits defined by equation 14 are 0.80 and 1.29, which lie well within the required limits of 0.67 and1.5, corresponding to &rho; = 1.5.</p>  <p>At 0.4 mSv, where the requirement is given by &rho; = 2, the mean relative response and the uncertainty in the response are likely to be the same as at higher doses. The uncertainty arising from random errors is the component of the overall uncertainty that is likely to increase and must be separately determined at this lower dose.</p>
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
<h2 id="appB">Appendix B : Type Test Specifications for External Dosimetry</h2>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appB-1"></div>
<h3 id="appB-1">B.1 Introduction</h3>  <p>Section 2.4, Type testing, describes a requirement for type testing in addition to the in-house quality assurance program described in section 7, Management System Requirements. Dosimeters in routine use may be exposed to conditions other than those mentioned here, which may influence the result of a dose measurement. Such conditions shall be identified and included in the type tests, in addition to those listed below.</p>  <p>Wherever possible, an error introduced by an influence quantity should be corrected by applying a correction factor to the calculation of <em>H<sub>m</sub></em> (the result of a measurement under defined conditions) with the objective of making the mean relative response for that influence quantity close to unity. The use of such an influence quantity must be clearly stated in the type test report. Circumstances may exist, however, in which it is impractical or undesirable to apply a correction for a particular influence quantity. In such cases, the error introduced by the influence quantity will be included in the determination of the mean response.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appB-2"></div>
<h3 id="appB-2">B.2	Influence quantities and system characteristics</h3>  <p>The dosimetry service shall consider the following influence quantities and evaluate those that are likely to significantly affect accuracy or uncertainty. In deciding on the potential significance of the influence quantities, both the design of the dosimetry system and the intended conditions of use shall be taken into account.</p>  <p>Influence quantities include the following:</p>
<ol>
<li>angle of incidence of radiation</li>
<li>distance of dosimeter from phantom</li>
<li>dose (i.e., linearity of dose response)</li>
<li>dose rate, including in pulsed radiation fields</li>
<li>electrical and magnetic fields, both static and alternating</li>
<li>energy of photons and beta rays</li>
<li>humidity and splashing</li>
<li>ionizing radiations other than those intended to be measured</li>
<li>mechanical shock, both dropping and vibration of the dosimeter</li>
<li>mixed radiation fields</li>
<li>temperature variations, both gradual and abrupt</li>
<li>time between zeroing and irradiation, and between irradiation and reading</li>
<li>visible and ultraviolet light flux (effect on both dosimeter and reader)</li>
<li>voltage supply to reader, both voltage spikes and gradual variations</li>
</ol>  <p>In addition, the dosimetry service shall estimate the effects of the following system characteristics, as applicable:</p>
<ol>
<li>batch homogeneity</li>
<li>calibration uncertainty</li>
<li>repeatability (a measure of the stability of response of both the dosimeter and the reader)</li>
<li>residual signal</li>
<li>self-irradiation</li>
<li>zero-dose variations</li>
</ol>  <p>Where an influence quantity or system characteristic causes a large and sudden change in the measured dose, but has a low probability of occurring, it is inappropriate to include that change as a component of the combined standard uncertainty. Instead, steps shall be taken to minimize the probability that the influence quantity will cause the effect, either by changing the dosimeter design or by instituting procedural controls, and estimating the reduced probability of occurrence.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appB-3"></div>
<h3 id="appB-3">B.3	Phantoms</h3>  <p>During irradiation, dosimeters shall be mounted on an appropriate phantom for type tests of the following influence quantities: angle of incidence of radiation, distance of dosimeter from phantom, and energy of photons and beta rays. For tests of other influence quantities requiring irradiation, any convenient irradiation geometry may be used, provided that the relative doses delivered to the dosimeters are known to the degree of accuracy appropriate to the test. The signal produced by the dosimeters in these tests can be related to the corresponding conventionally true dose using the results of the on-phantom irradiations.</p>  <p>For dosimeters to be worn during torso (whole-body) irradiations, the phantom to be used for photon irradiations is a parallelepiped ("slab"), constructed of polymethylmethacrylate (PMMA) walls and filled with water [7]. The external dimensions are 30 cm x 30 cm x 15 cm, and the wall thicknesses are 2.5 mm for the front wall (one of the 30 cm x 30 cm faces) and 10 mm for the other five walls. The phantom shall be constructed in a way that ensures that the front face remains flat when the phantom is filled with water. For beta irradiations, the phantom to be used may be the same water-filled slab phantom as described above. A solid PMMA slab phantom of the same face dimensions and a thickness greater than one half of the range of the most energetic beta particles may also be used.</p>  <p>For extremity dosimeters, the phantoms to be used shall be radiologically suitable representations of the appropriate parts of the extremities where the dosimeters will be worn. These will usually be the fingers, wrists and ankles. The phantoms to be used shall be appropriate to both the dosimeter design and the radiological environment in which they will be used. Two possible phantoms for use are indicated below. Only the one that is most representative of the limb on which the dosimeter would be most frequently placed, shall be used in the type testing. The dosimetry service shall consult the CNSC prior to using other phantoms.</p>
<ol>
<li>Finger: solid PMMA cylinder with a 19-mm diameter and a length of 300 mm [8], [9], [10], [11], [12]</li>
<li>Wrist/ankle: water-filled PMMA cylinder with an outer diameter of 73 mm, a wall thickness of 2.5 mm and a length of 300 mm [12]</li>
</ol>  <p>The references include the associated air-kerma-to-dose conversion coefficients. More recent references containing more up-to-date information may also be used as they become available. However, the dosimetry service shall consult the CNSC prior to using other references.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appB-4"></div>
<h3 id="appB-4">B.4 Angle of incidence of radiation</h3>  <p>For dosimeters that are irradiated on the slab phantom described above, the test radiations shall be incident on the front face of the dosimeter at angles of 0&deg;, 20&deg;, 40&deg; and 60&deg;, relative to normal incidence. If the design of the dosimeter results in an angular response that is cylindrically symmetric about the axis perpendicular to its front face, it will be sufficient to make the measurements along only one direction in one plane (i.e., 4 measurements will be required). If cylindrical symmetry does not apply, the measurements may be required in both directions in two perpendicular planes (i.e., up to 13 measurements may be required) to adequately characterize the angular response of the dosimeter. In the latter case, the average response for each angle is calculated and indicated as the response for that angle.</p>  <p>For extremity dosimeters, the test radiations shall be incident on the front face of the dosimeter at angles of 0&deg;, 30&deg; and 60&deg; relative to normal incidence in two perpendicular planes (i.e., a minimum of 5 measurements will be required). If the dosimeter is not cylindrically symmetrical, 9 measurements may be required. The average response for each angle is calculated and indicated as the response for that angle.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appB-5"></div>
<h3 id="appB-5">B.5 Photon energies</h3>  <p>For all types of dosimeters, the photon energies used for the test irradiations shall conform to ISO 4037-1 [13]. Coefficients to convert from exposure or collision air kerma to H<sub>p,c</sub>(d) have been calculated and published for these energy spectra (see ISO 4037-3 [7]). The calculations are based on a slab phantom made from the ICRU standard tissue that is of the same dimensions as the water-filled phantom described above. The difference in backscatter between the ICRU tissue phantom and the water-filled phantom is small enough that it can be neglected. Coefficients to convert from collision air kerma to H<sub>e,c</sub> on cylindrical phantoms have been calculated and published. There may be a need to add build-up material in front of the dosimeter for higher photon energies for H<sub>p,c</sub>(0.07) and <em>H<sub>e,c</sub></em> to ensure charged particle equilibrium.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appB-6"></div>
<h3 id="appB-6">B.6 Beta energies</h3>  <p>The standard beta sources listed in table B.1 shall be used for type testing dosimeters intended to measure H<sub>p</sub>(0.07) and He.</p>
<table className="">  <caption className="text-left">Table B.1: Standard beta sources</caption>  <tr>
<th className="text-center">Isotope</th>
<th className="text-center">Maximum beta energy (keV)</th>  </tr>  <tr>
<td className="text-center">Sr-90/Y-90</td>
<td className="text-center">2274</td>  </tr>  <tr>
<td className="text-center">Kr-85 or Tl-204</td>
<td className="text-center">763 or 687</td>  </tr>  <tr>
<td className="text-center">Pm-147</td>
<td className="text-center">225</td>  </tr>  </table>
<p>Note that for intermediate beta energies, either krypton (Kr)-85 or thallium (Tl)-204 shall be used. ISO 6980[14] (or more recent revisions of this reference) provides further information about these sources, except for Kr-85. The source manufacturer will provide information for Kr-85. These sources are commercially available with traceable calibrations for irradiation at normal incidence. For extremity dosimeters irradiated at off-normal angles of incidence, the angular dependence factors for a tissue equivalent slab phantom may be used. The conversion coefficients normalized to 0&deg; for H<sub>p</sub>(0.07) at other angles of incidence have been published (see the European Commission report, <em>Technical Recommendations for Monitoring Individuals Occupationally Exposed to External Radiation</em> [15]).</p>  <p>The accurate measurement of H<sub>p</sub>(0.07) and He for beta radiation becomes increasingly difficult as the beta energy decreases and the angle of incidence increases. The overall specification in section 4.1.2, Minimum measurable dose equivalent, and table 1 in section 2.3, Accuracy specifications and uncertainty limits, will therefore be applied as follows:</p>  <p>For Sr-90/ Y-90 beta radiation:</p>  <p>The responses at all angles of incidence specified in section B.4, Angle of incidence of radiation, shall be used in the calculation of the mean response.</p>  <p>For Kr-85 or Tl-204 beta radiation:</p>  <p>The response at 0&deg; shall be used in the calculation of the mean response. However, the response shall be measured at the other angles specified in section B.4, Angle of incidence of radiation.</p>  <p>For Pm-147 beta radiation:</p>  <p>The response shall be measured at the angles specified in section B.4, Angle of incidence of radiation, However, the data need not be used in the calculation of the mean response.</p>  <p>The mean relative responses and standard uncertainties for photons and betas are determined separately for comparison with the specifications defined by equation 14 in section A.3, Accuracy and precision, of appendix A, Accuracy and Uncertainty in External Dose Measurement.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appC"></div>
<h2 id="appC">Appendix C: Independent Test Specifications for External Photon Dosimetry</h2>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appC-1"></div>
<h3 id="appC-1">C.1 Introduction</h3>  <p>Section 2.6, Independent testing, describes a requirement for independent testing in addition to the in-house quality assurance program described in section 7, Management System Requirements.</p>  <p>Dosimetry services that are ready to undergo independent testing shall make arrangements directly with the relevant reference calibration centre (see appendix J). Dosimetry services using dosimeters that require processing (e.g., thermoluminescent dosimeters) shall follow the protocol outlined in section C.2. Dosimetry services using dosimeters that do not require processing (e.g., electronic dosimeters) shall follow the protocol outlined in section C.3. Although section C.3 describes the use of air kerma units specifically, corresponding exposure units may also be used, if preferred by the dosimetry service, in consultation with the reference calibration centre.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appC-2"></div>
<h3 id="appC-2">C.2	Protocol for dosimeters that require processing</h3>  <p>Where necessary, a dosimetry service shall determine a factor to convert from H<sub>p</sub>(10), as measured by the dosimeters on a phantom, to collision air kerma free-in-air (or exposure free-in-air) due to Co-60 gamma radiation. This is necessary since the irradiations performed at the reference calibration centre are free-in-air.</p>  <p>Prior to licensing and subsequently at regular intervals with a frequency of at least once every 12 months, each dosimetry service shall send to the relevant calibration centre at least 50 identified dosimeters per processing unit being tested plus sufficient control dosimeters to satisfy the readout process. For each unit being tested, the calibration centre will divide the submitted dosimeters into at least 10 groups of at least five dosimeters per group and irradiate each group of dosimeters, free-in-air, in a Co-60 photon beam to a different but known collision air kerma between 1.0 milligray (mGy) and 50 mGy. The collision air kerma delivered to the dosimeters will not be revealed at this time to the dosimetry service.</p>  <p>The irradiated dosimeters and controls will be returned to the dosimetry service for processing by the established routine procedures of the service. The results in collision air kerma units, adjusted as necessary using the factor determined in the first protocol above, will be reported to the reference calibration centre by the dosimetry service.</p>  <p>The reference calibration centre will compare the reported results with its values of collision air kerma and report the results, including the values of both the service and the centre, to the CNSC, with a copy sent to the dosimetry service. In order to pass this test, the reported results shall lie within the criteria described in section 4.1.6, Independent Testing.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appC-3"></div>
<h3 id="appC-3">C.3	Protocol for dosimeters that do not require processing</h3>  <p>Where necessary, a dosimetry service using dosimeters that do not require processing shall determine a factor to convert from Hp(10), as measured by the dosimeters on a phantom, to collision air kerma free-in-air (or exposure free-in-air) due to Co-60 gamma radiation. This is necessary since the irradiations performed at the reference calibration centre are free-in-air.</p>  <p>Prior to licensing and subsequently at regular intervals with a frequency of at least once every 12 months, each dosimetry service shall send at least 10 identified dosimeters to the reference calibration centre. The reference calibration centre will irradiate at least 10 groups of at least five dosimeters each, free-in-air, in a Co-60 photon beam to different but known collision air kermas of between 1.0 mGy and 50 mGy. The dosimeters in each group of five will either be exposed to the same collision air kerma or to different collision air kermas but within a similar range. This will result in a total of at least 50 readings that will be recorded by the reference calibration centre. In view of the number of dosimeters involved in this case, any given dosimeter may be irradiated several times.</p>  <p>The reference calibration centre will correct the dosimeter readings using the conversion factors determined in the first protocol above and compare the results with the reference calibration centre values of collision air kerma. The reference calibration centre will report the results, including the values of both the participant and the reference calibration centre, to the CNSC at the address below, and send a copy to the dosimetry service. The dosimeters will be returned to the dosimetry service upon completion of all irradiations. In order to pass this test, reported results shall lie within the criteria described in section 2.6, Independent testing.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appC-4"></div>
<h3 id="appC-4">C.4	Reporting</h3>  <p>The reference calibration centre reports the results to the CNSC at the following address:</p>   <p>Dosimetry Services Licensing Specialist<br />
Canadian Nuclear Safety Commission<br />
P.O. Box 1046, Station B<br />
Ottawa, ON  K1P 5S9<br />
Canada</p>  <p>Further details on these tests may be obtained from the reference calibration centre.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appD"></div>
<h2 id="appD">Appendix D: Independent Test Specifications for Extremity Dosimetry</h2>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appD-1"></div>
<h3 id="appD-1">D.1 Introduction</h3>  <p>Section 2.6, Independent testing, describes a requirement for independent testing In addition to the in-house quality assurance program described in section 7, Management System Requirements.</p>  <p>Dosimetry services that are ready to undergo independent testing shall make arrangements directly with the relevant reference calibration centre (see appendix J). Dosimetry services using dosimeters that require processing (e.g., thermoluminescent dosimeters) shall follow the protocol outlined in section D.2. Dosimetry services using dosimeters that do not require processing (e.g., electronic dosimeters) shall follow the protocol outlined in section D.3.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appD-2"></div>
<h3 id="appD-2">D.2	Protocol for dosimeters that require processing</h3>  <p>Prior to licensing and subsequently at regular intervals with a frequency of at least once every 12 months, each dosimetry service shall send to the reference calibration centre at least 25 identified extremity dosimeters per processing unit being tested plus sufficient control dosimeters to satisfy the readout process. For each unit being tested, the reference calibration centre will divide the submitted dosimeters into at least five groups of at least five dosimeters per group and irradiate each group of dosimeters to a known absorbed dose to soft tissue of between 10 mGy and 90 mGy at a depth of 7 mg/cm<sup>2</sup> using its Sr-90/Y-90 source. The doses delivered to the dosimeters will not be revealed at this time to the dosimetry service.</p>  <p>The irradiated dosimeters and controls are returned to the dosimetry service for processing by the established routine procedures of the service. The dosimetry service reports the results in absorbed dose units to the reference calibration centre.</p>  <p>The reference calibration centre will compare the reported doses with those that were given to the dosimeters and report the results, including the values of both the service and the centre, to the CNSC (see the address in section D.4), with a copy sent to the dosimetry service. In order to pass this test, the reported results shall lie within the criteria described in section 2.6, Independent testing.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appD-3"></div>
<h3 id="appD-3">D.3	Protocol for dosimeters that do not require processing</h3>  <p>Prior to licensing and subsequently at regular intervals with a frequency of at least once every 12 months, each dosimetry service shall send at least 10 identified dosimeters to the reference calibration centre. The reference calibration centre will irradiate them to different but known absorbed doses to soft tissue of between 10 mGy and 90.0 mGy at a depth of 7 mg/cm<sup>2</sup> using its Sr-90/Y-90 source.</p>  <p>The reference calibration centre will compare the results with the doses to which the dosimeters were irradiated and report the results, including the values of both the participant and the centre, to the CNSC at the address below, with a copy sent to the dosimetry service. The dosimeters will be returned to the dosimetry service upon completion of all irradiations. In order to pass this test, reported results within the accuracy described in section 2.6, Independent testing, are required.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appD-4"></div>
<h3 id="appD-4">D.4	Reporting</h3>  <p>The reference calibration centre reports the test results to the CNSC at the following address:</p>   <p>Dosimetry Services Licensing Specialist<br />
Canadian Nuclear Safety Commission<br />
P.O. Box 1046, Station B<br />
Ottawa, ON  K1P 5S9<br />
Canada</p>  <p>Further details on these tests may be obtained from the reference calibration centre.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appE"></div>
<h2 id="appE">Appendix E: Independent Test Specifications for Neutron Dosimetry</h2>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appE-1"></div>
<h3 id="appE-1">E.1 Introduction</h3>  <p>Section 2.6, Independent testing, describes a requirement for independent testing in addition to the in-house quality assurance program described in section 7, Management System Requirements.</p>  <p>Dosimetry services that are ready to undergo independent testing shall make arrangements directly with the reference calibration centre. Dosimetry services using dosimeters that require processing (e.g., solid-state nuclear track detectors) shall follow the protocol outlined in section E.2. Dosimetry services using dosimeters that do not require processing (e.g., electronic dosimeters) shall follow the protocol outlined in section E.3.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appE-2"></div>
<h3 id="appE-2">E.2 Protocol for personal dosimeters that require processing</h3>  <p>Prior to licensing and subsequently at regular intervals with a frequency of at least once every 12 months, each dosimetry service shall send to the reference calibration centre at least 10 identified dosimeters plus sufficient control dosimeters to satisfy the readout process. The reference calibration centre will divide the submitted dosimeters into two groups of at least five dosimeters per group and irradiate each group of dosimeters in an Americium-241-Beryllium neutron field to a different but known value of H<sub>p</sub>(10) due to neutrons of between 1 mSv and 10 mSv. The delivered values will not be revealed at this time to the dosimetry service.</p>  <p>The irradiated dosimeters and controls will be returned to the dosimetry service for processing by the established routine procedures of the service. The dosimetry service reports the results to the reference calibration centre.</p>  <p>The reference calibration centre will compare the reported results with its values and report the results, including the values of both the service and the centre, to the CNSC at the address below, with a copy sent to the dosimetry service. In order to pass this test, the reported results shall lie within the criteria described in section 2.7, Requirements for routine neutron dosimetry services.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appE-3"></div>
<h3 id="appE-3">E.3 Protocol for personal dosimeters that do not require processing</h3>  <p>Prior to licensing and subsequently at regular intervals with a frequency of at least once every 12 months, each dosimetry service shall send a representative sample of identified dosimeters to the reference calibration centre. The reference calibration centre will irradiate them in an Americium-241-Beryllium neutron field to two different but known values of H<sub>p</sub>(10) due to neutrons of between 1 mSv and 10 mSv.</p>   <p>The reference calibration centre will compare the readings with its values and report the results, including the values of both the participant and the centre, to the CNSC at the address below, with a copy sent to the dosimetry service. The dosimeters will be returned to the dosimetry service upon completion of all irradiations. In order to pass this test, reported results shall lie within the criteria described in section 2.7, Requirements for routine neutron dosimetry services.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appE-4"></div>
<h3 id="appE-4">E.4	Reporting</h3>  <p>The reference calibration centre reports the test results to the CNSC at the following address:</p>   <p>Dosimetry Services Licensing Specialist<br />
Canadian Nuclear Safety Commission<br />
P.O. Box 1046, Station B<br />
Ottawa, ON  K1P 5S9<br />
Canada</p>  <p>Further details on these tests may be obtained from the reference calibration centre.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appF"></div>
<h2 id="appF">Appendix F: Independent Test Specifications for Internal Dosimetry</h2>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appF-1"></div>
<h3 id="appF-1">F.1 Introduction</h3>  <p>Section 3.4, Independent testing for <em>in vitro</em> measurements, and section 3.6, Independent testing for in vivo measurements, describe requirements for independent testing in addition to the in-house quality assurance program described in section 7, Management System Requirements.</p>  <p>Dosimetry services shall make arrangements for participating in these independent tests directly with the relevant reference calibration centre.</p>  <p>Upon completion of the testing and analysis of the results, the reference calibration centre staff submits a report containing the identity of each participating dosimetry service and its corresponding test results to the CNSC. When the reference calibration centre staff becomes aware that a licensed internal dosimetry service has failed an independent test, it informs the CNSC and the dosimetry service. The reference calibration centre also submits to each participating laboratory a report of the test results in which the identities of the laboratories are represented by a code.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appF-2"></div>
<h3 id="appF-2">F.2	<em>In Vitro</em> measurement independent tests</h3>  <p>Prior to licensing and subsequently at regular intervals at least once every 12 months, or at other intervals determined in consultation with the CNSC, the reference calibration centre supplies each participating laboratory with appropriate samples and blanks. (Dosimetry services participate for the applicable radionuclides.) The dosimetry service analyzes the samples according to a schedule supplied by the reference calibration centre. Results are entered on a standard reporting form and returned to the reference calibration centre. When all laboratories have responded, the reference calibration centre analyzes the results and issues a report, with each laboratory identified only by a code. The reference calibration centre informs each laboratory of its own code and informs the CNSC of the codes for all the dosimetry services (licensees and applicants).</p>  <p>Further details of the independent tests and the method of analysis may be obtained from the reference calibration centre. Dosimetry services shall participate in these independent tests and obtain passing results prior to being granted a dosimetry service licence by the CNSC, and at least once per year thereafter, or at intervals determined in consultation with the CNSC, to demonstrate continuing capability. The procedure shall be repeated if the measurement method or equipment undergo any significant changes that may have an adverse impact on the precision, accuracy, and reliability of the measurements.</p>  <p>The independent tests for <em>in vitro</em> bioassay will be designed so that the following precautions can or will occur:</p>
<ol>
<li>Each laboratory is provided with up to five aliquots of each spiked sample as well as a urine blank from which the spiked samples were prepared.</li>
<li>Colour quenching may be increased for some samples.</li>
<li>The <em>in vitro</em> independent test for fission/activation products may include up to three radionuclides, which may be varied from one year to another.</li>
<li>For a given test, all participating laboratories are sent aliquots of the same samples.</li>
<li>Instructions for sample analysis and the date of spiking are enclosed with the samples.</li>
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
<div id="appF-3"></div>
<h3 id="appF-3">F.3	<em>In Vivo</em> measurement independent tests</h3>  <p>The reference calibration centre has tissue equivalent phantoms available for a variety of radionuclides in the lung, Iodine-125 and Iodine-131 thyroid neck phantoms and water filled bottle manakin absorption (BOMAB) calibration phantoms of varying size for higher photon energies.</p>  <p>Prior to licensing and subsequently at regular intervals at least once every 12 months, or at other intervals determined in consultation with the CNSC, the dosimetry service shall undergo independent testing to demonstrate continuing capability. If the measurement method or equipment undergo any significant changes that may have an adverse impact on the precision, accuracy and reliability of the measurements after a dosimetry service licence has been granted and prior to implementing the new measurement method or putting the equipment back into service, the affected bioassay method and equipment shall pass an independent test.</p>   <p>The independent tests for <em>in vivo</em> bioassay will be designed so that the following precautions can or will occur:</p>
<ol>
<li>The radionuclide mixtures for measurement in phantoms are limited to three radionuclides chosen from table 4 in section 4.1, Measurement quantities not including potassium (K)-40.</li>
<li>The location of the activity in the phantoms is realistic (e.g., in the lungs or gastrointestinal region).</li>
<li>The radionuclides used in <em>in vivo</em> testing may vary from one test to another.</li>
<li>The water-filled BOMAB phantoms that are used for <em>in vivo</em> testing all contain K-40 and include
<ul className="list-bullet-none">
<li>a) reference female,</li>
<li>b) 5th-percentile male,</li>
<li>c) reference male, and</li>
<li>d) 95th-percentile male</li>
</ul></li>
</ol>  <p>Also, in order to be representative of the chest wall thickness of individuals in the workplace, overlay plates may be used in <em>in vivo</em> tests.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appF-4"></div>
<h3 id="appF-4">F.4	Reporting</h3>  <p>The reference calibration centre reports the test results to the CNSC at the following address:</p>   <p>Dosimetry Services Licensing Specialist<br />
Canadian Nuclear Safety Commission<br />
P.O. Box 1046, Station B<br />
Ottawa, ON  K1P 5S9<br />
Canada</p>  <p>Further details on these tests may be obtained from the reference calibration centre.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appG"></div>
<h2 id="appG">Appendix G: Independent Test Specifications for Radon Progeny and Radon Gas</h2>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appG-1"></div>
<h3 id="appG-1">G.1 Introduction</h3>  <p>Section 5.5, Independent testing for the monitoring of radon progeny, and section 5.8, Independent testing for radon gas measurements, describe requirements for independent testing in addition to the in-house quality assurance program described in section 7, Management System Requirements.</p>  <p>Dosimetry services for radon and radon progeny that are ready to undergo independent testing shall make arrangements for participating in these tests directly with the relevant reference calibration centre (see appendix J).</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appG-2"></div>
<h3 id="appG-2">G.2	Protocol for personal monitors</h3>  <p>The instruments sent shall be clean and uncontaminated, and in working order. The overall performance of a given system shall meet the accuracy specifications for measuring exposure to radon progeny and radon gas described in table 7, section 5.6.1, Personal monitors, and in table 9, section 5.6, Accuracy specifications of radon gas. The dosimetry service shall contact the reference calibration centre to arrange suitable scheduling before instruments are sent.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appG-3"></div>
<h3 id="appG-3">G.3	Grab sampling</h3>  <p>Independent testing is also required for dosimetry services that use grab sampling to determine exposure of workers to radon progeny and radon gas. Grab sampling for radon gas may be used in situations where there are high concentrations of radon gas in the air but without the simultaneous presence of the corresponding levels of radon progeny (i.e., where the gas does not have time to decay significantly). In situations where there is time for the radon gas to decay, it is assumed that the air will be sampled for progeny.</p>  <p>The use of grab sampling for the determination of radon progeny exposures is a staged process that requires the collection of aerosols on a filter over a short time period, the measurement of the radioactivity of the aerosols and a calculation of the potential alpha radiation (working levels (WL), or &micro;J/m<sup>3</sup>) due to the short-lived radon progeny. Calibration procedures are also required for the air-sampling train and for the counting system. The determination is complex and sources of error include instrumental sources and variances in the implementation of the collection procedure by the technicians conducting the determination.</p>  <p>A conventional independent testing program to validate the performance of the measurements may be impractical since it would require all measurement systems and the techniques of individual technicians to be verified at the CNSC reference calibration facility on a routine basis. As an alternative, a designated CNSC inspector&rsquo;s qualifications in measuring radon progeny and radon gas will be verified by the reference calibration centre on an annual basis. Dosimetry services may have the performance of their technicians verified on an annual basis by one of the following two methods:</p>
<ol>
<li>The designated CNSC inspector individually validates all technicians at each dosimetry service.<br />
or</li>
<li>The CNSC validates a designated technician representing the dosimetry service in the above-described method, and that technician in turn validates all other technicians on site who conduct radon progeny and radon gas grab sampling for dosimetry purposes. The results of the validations shall be recorded and retained by the dosimetry service.</li>
</ol>  <p>The validations described above require a minimum of 10 samples. The differences in the results of the overall performance of the instruments and sampling technicians shall enable the dosimetry service to meet the accuracy specifications in table 6, section 5.3, Accuracy specifications for radon progeny measurements, and in table 8, section 5.6, Accuracy specifications for radon gas measurements.</p>  <p>Questions with respect to direct validation of technicians at the reference calibration centre should be directed to the reference calibration centre.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appG-4"></div>
<h3 id="appG-4">G.4	Reporting</h3>  <p>For personal monitors, the reference calibration centre reports the test results to the CNSC at the following address:</p>   <p>Dosimetry Services Licensing Specialist<br />
Canadian Nuclear Safety Commission<br />
P.O. Box 1046, Station B<br />
Ottawa, ON  K1P 5S9<br />
Canada</p>  <p>If the second method is used for grab sampling, the licensee&rsquo;s designated technician shall report the test results to the CNSC at the address indicated above.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appH"></div>
<h2 id="appH">Annexe H : Exemples de calculs pour les mesures de la concentration minimale et incertitudes li&eacute;es au comptage </h2>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appH-1"></div>
<h3 id="appH-1">H.1 Example calculation for the determination of the minimum measurable concentration</h3>  <p>The minimum measurable activity concentration (MMC) in air varies with the parameters of the counting system and the volume of the sample. The following equation, derived from Strom and Stansbury [16], is such that the probability of failing to detect the activity concentration is not greater than five percent. Other equations may be acceptable depending upon the situation.</p>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<mi>M</mi><mi>M</mi><mi>C</mi><mo>=</mo><mfrac>
<mrow>
<mn>2.71</mn><mo>+</mo><mn>4.65</mn><msqrt>
<mrow>
<msub>
<mi>C</mi>
<mi>b</mi>
</msub>
</mrow>
</msqrt>
</mrow>
<mrow>
<msub>
<mi>T</mi>
<mi>c</mi>
</msub>
</mrow>
</mfrac>
<mo>&#x2217;</mo><mfrac>
<mn>1</mn>
<mrow>
<mi>E</mi><mo>&#x2217;</mo><mi>V</mi></mrow>
</mfrac>
</mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaamytaiaad2
eacaWGdbGaeyypa0ZaaSaaaeaacaaIYaGaaiOlaiaaiEdacaaIXaGa
ey4kaSIaaGinaiaac6cacaaI2aGaaGynamaakaaabaGaam4qamaaBa
aaleaacaWGIbaabeaaaeqaaaGcbaGaamivamaaBaaaleaacaWGJbaa
beaaaaGccqGHxiIkdaWcaaqaaiaaigdaaeaacaWGfbGaey4fIOIaam
Ovaaaaaaa@486D@
</annotation>   </semantics>  </math>
<p>where</p>  <p><em>C<sub>b</sub></em> = the background count of the detector<br />
<em>T<sub>c</sub></em> = the count time in seconds<br />
<em>E</em> = the efficiency of the detector in counts per second per Bq<br />
<em>V</em> = the volume of the sample in m<sup>3</sup></p>  <p>An MMC of 0.05 Bq/m<sup>3</sup> can be achieved by varying the parameters in the equation. For example, if a background count of 250 is used with a total count time of 3600 seconds, a counter efficiency of 0.35, and a volume of 1.2 m<sup>3</sup>, the MMC would be:</p>  <p>MMC = 0.05 Bq/m<sup>3</sup></p>  <p>which is acceptable</p>  <p>Note: The volume of the sample is dependent upon both the flow rate of the air sampling pump and the duration of the sample collecting period.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appH-2"></div>
<h3 id="appH-2">H.2 Example calculation for uncertainty</h3>  <p>When the difference in count rate, expressed in counts per minute (cpm), is 2 or more, and the total number of counts (sample plus background) is more than 40, the following equations can be used to calculate the limits within which the true (unknown) count lies, 95 percent of the time [17] [18].</p>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<mi>L</mi><mi>o</mi><mi>w</mi><mi>e</mi><mi>r</mi><mi>&#x0020;</mi></mi><mspace width="5px" /><mi>l</mi><mi>i</mi><mi>m</mi><mi>i</mi><mi>t</mi><mo>=</mo><mo stretchy=&#39;false&#39;>(</mo><msub>
<mi>C</mi>
<mi>t</mi>
</msub>
<mo>&#x2212;</mo><msub>
<mi>C</mi>
<mi>b</mi>
</msub>
<mo stretchy=&#39;false&#39;>)</mo><mo>&#x2212;</mo><mn>1.96</mn><msqrt>
<mrow>
<msub>
<mi>C</mi>
<mi>t</mi>
</msub>
<mo>+</mo><msub>
<mi>C</mi>
<mi>b</mi>
</msub>
</mrow>
</msqrt>
</mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaamitaiaad+
gacaWG3bGaamyzaiaadkhaiiGacqWFGaaicaWGSbGaamyAaiaad2ga
caWGPbGaamiDaiabg2da9iaacIcacaWGdbWaaSbaaSqaaiaadshaae
qaaOGaeyOeI0Iaam4qamaaBaaaleaacaWGIbaabeaakiaacMcacqGH
sislcaaIXaGaaiOlaiaaiMdacaaI2aWaaOaaaeaacaWGdbWaaSbaaS
qaaiaadshaaeqaaOGaey4kaSIaam4qamaaBaaaleaacaWGIbaabeaa
aeqaaaaa@4FEA@
</annotation>   </semantics>  </math>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<mi>U</mi><mi>p</mi><mi>p</mi><mi>e</mi><mi>r</mi><mi>&#x0020;</mi><mspace width="5px" /><mi>l</mi><mi>i</mi><mi>m</mi><mi>i</mi><mi>t</mi><mo>=</mo><mo stretchy=&#39;false&#39;>(</mo><msub>
<mi>C</mi>
<mi>t</mi>
</msub>
<mo>&#x2212;</mo><msub>
<mi>C</mi>
<mi>b</mi>
</msub>
<mo stretchy=&#39;false&#39;>)</mo><mo>+</mo><mn>1.96</mn><msqrt>
<mrow>
<msub>
<mi>C</mi>
<mi>t</mi>
</msub>
<mo>+</mo><msub>
<mi>C</mi>
<mi>b</mi>
</msub>
</mrow>
</msqrt>
</mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaamyvaiaadc
hacaWGWbGaamyzaiaadkhaiiGacqWFGaaicaWGSbGaamyAaiaad2ga
caWGPbGaamiDaiabg2da9iaacIcacaWGdbWaaSbaaSqaaiaadshaae
qaaOGaeyOeI0Iaam4qamaaBaaaleaacaWGIbaabeaakiaacMcacqGH
RaWkcaaIXaGaaiOlaiaaiMdacaaI2aWaaOaaaeaacaWGdbWaaSbaaS
qaaiaadshaaeqaaOGaey4kaSIaam4qamaaBaaaleaacaWGIbaabeaa
aeqaaaaa@4FE2@
</annotation>   </semantics>  </math>
<p>where</p>  <p><em>C<sub>b</sub></em> = background count for the sample counting time<br />
<em>C<sub>t</sub></em> = total count<br />
<em>C<sub>t</sub>&ndash;C<sub>b</sub></em> = net count</p>  <p>for example, with</p>
<ol>
<li>an ALI value of 3190 Bq and consequently a DAC of 1.33 Bq m<sup>-3</sup></li>
<li>2,000 hr of work/year and a breathing rate of 1.2 m<sup>3</sup>/hr</li>
<li>a sampling rate of 2.5 L min<sup>-1</sup> (2.5 x 10<sup>-3</sup> m<sup>3</sup> min<sup>-1</sup>)</li>
<li>duration of sampling of 6 hours</li>
<li>counting efficiency of 0.4</li>
<li>background count rate of 1 cpm</li>
<li>the airborne radioactive material concentration is 1/10 of the DAC (i.e., 0.133 Bq m<sup>-3</sup>)</li>
</ol>  <p>the activity collected on the filter is</p>  <p>0.133 Bq m<sup>-3</sup> x 2.5 x 10<sup>-3</sup> m<sup>3</sup> min<sup>-1</sup> x 60 min h<sup>-1</sup> x 6 h = 0.120 Bq</p>  <p>and the total count rate (sample plus background) is</p>  <p>1 cpm + (60 s min<sup>-1</sup> x 0.120 Bq x 0.4) = 3.87 cpm.</p>  <p>If both the background and the sample are counted for 20 minutes, the background count is 20 and the sample count (total count) is expressed in the following equation:</p>  <p>20 x 3.87 = 77 (rounded to the nearest integer)</p>  <p>Solving the above equations with the above values (i.e., with C<sub>b</sub> = 20 and C<sub>t</sub> = 77), one obtains the following:</p>  <p>Lower limit of the 95% confidence interval is 38</p>  <p>Upper limit of the 95% confidence interval is 76</p>  <p>Therefore, there is a 95 percent probability that the true count is larger than 38, and smaller than 76.</p>  <p>Since 57 is the best estimate of the true count, there is a 95 percent probability that the airborne radioactive material concentration measurement lies within (57&ndash;38)/57 and + (76&ndash;57)/57, that is within &plusmn; 33%.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appI"></div>
<h2 id="appI">Appendix I: Specifications for Dose Records</h2>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appI-1"></div>
<h3 id="appI-1">I.1 Introduction</h3>  <p>All dosimetry services shall submit dose data on a regular basis to the National Dose Registry (NDR) at the frequency specified in their licence. Operators of such services shall ensure that the data to be transmitted to the NDR is in a form compatible with the NDR.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appI-2"></div>
<h3 id="appI-2">I.2	Individual identification</h3>  <p>To ensure unambiguous individual identification, the following minimum information is required:</p>
<ol>
<li>social insurance number (SIN)</li>
<li>surname/previous surnames</li>
<li>first given name (formal form, not nickname)</li>
<li>second given name (formal form, not nickname)</li>
<li>sex</li>
<li>date of birth (year/month/day)</li>
<li>place of birth (province, if born in Canada, or country, if born outside Canada)</li>
<li>individual occupational codes or classifications</li>
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
<div id="appI-3"></div>
<h3 id="appI-3">I.3	Dose data</h3>  <h4>I.3.1 Dose from external sources</h4>  <p>Measurements of H<sub>p</sub>(10) shall be reported as effective dose. Measurements of H<sub>p</sub>(0.07) shall be reported as equivalent dose to the skin. Measurements of doses to the extremities or the lens of the eye shall be reported as equivalent doses to those tissues.</p>  <h4>I.3.2 Dose from internal sources</h4>  <p>Dose estimates from internal sources other than those given in section 4.2, Dosimetry services for internal radiation, are to be reported to the NDR by indicating the radionuclide that was taken in and the associated committed effective dose.</p>  <h4>I.3.3 Exposures to radon, radon progeny, and intakes of airborne radioactive material</h4>  <p>Exposures to radon progeny shall be recorded in working level months (WLM). Doses from intakes of radon and airborne radioactive material shall be recorded in millisieverts (mSv).</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appI-4"></div>
<h3 id="appI-4">I.4	Supporting information</h3>  <p>In addition to the dose data, the dosimetry services shall retain all pertinent data used to generate the dose, exposure, or concentration totals, where applicable, such as the following:</p>
<ol>
<li>readings of personal dosimeters and other data used for measuring external radiation</li>
<li>measurements of organ burdens</li>
<li>estimates of intakes of prescribed substances</li>
<li>method of measurement of concentrations in bioassay samples</li>
<li>chemical forms</li>
<li>dosimetry models used</li>
<li>measurements of radon gas and radon progeny exposures</li>
<li>measurements of radon gas and radon progeny concentrations in air</li>
<li>time spent by individuals in specific locations of a mine</li>
</ol>  <p>Any reports made as a result of the investigation of overexposures or other unusual doses shall also be kept.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appJ"></div>
<h2 id="appJ">Appendix J: Reference Calibration Centres</h2>  <p>This section lists the reference calibration centers, and the corresponding dosimetry type for which each is responsible, that the CNSC recognizes.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appJ-1"></div>
<h3 id="appJ-1">J.1	Independent test specifications for external photon dosimetry, extremity dosimetry, and neutron dosimetry</h3>  <p>National Research Council of Canada</p>  <p>Contact information:</p>  <p>Team Lead, Measurement Science and Standards<br />
National Research Council of Canada<br />
Ottawa, ON K1A 0R6<br />
Canada<br />
Telephone: 613-993 2715 ext. 240<br />
TTY: 613-949-3042<br />
<a href="http://www.nrc-cnrc.gc.ca/">www.nrc-cnrc.gc.ca</a></p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appJ-2"></div>
<h3 id="appJ-2">J.2	Independent test specifications for in vitro measurements, in vivo measurements, and interpretation of bioassay data</h3>  <p>National Calibration Reference Centre for Bioassay and In Vivo Monitoring, Health Canada</p>  <p>Contact information:</p>  <p>Head, National Internal Radiation Assessment Section<br />
Radiation Protection Bureau<br />
Health Canada<br />
775 Brookfield Road<br />
Ottawa, ON K1A 1C1<br />
Canada<br />
Telephone: 613-954-6668</p>  <p><a href="https://www.canada.ca/en/health-canada/services/environmental-workplace-health/occupational-health-safety/occupational-radiation.html">https://www.canada.ca/en/health-canada/services/environmental-workplace-health/occupational-health-safety/occupational-radiation.html</a></p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appJ-3"></div>
<h3 id="appJ-3">J.3	Independent test specifications for radon gas and radon progeny</h3>  <p>Bowser-Morner, Inc.</p>  <p>Contact information:</p>  <p>Manager, Radon Reference Laboratory<br />
Bowser-Morner, Inc.<br />
4514 Taylorsville Road<br />
Dayton, OH 45424<br />
U.S.A.<br />
Telephone: 937-236-8805 ext. 259</p>  <p><a href="http://www.bowser-morner.com/radon-reference-lab">http://www.bowser-morner.com/radon-reference-lab</a></p>
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
<h2 id="glossary">Glossary</h2>  <p>For definitions of terms used in this document, see <a href="http://www.nuclearsafety.gc.ca/pubs_catalogue/uploads/REGDOC-3-6-Glossary-of-CNSC-Terminology-eng.pdf">REGDOC 3.6, <em>Glossary of CNSC Terminology</em></a>, which includes terms and definitions used in the <a href="http://laws-lois.justice.gc.ca/eng/acts/N-28.3/"><em>Nuclear Safety and Control Act</em></a> (NSCA) and the regulations made under it, and in CNSC regulatory documents and other publications. REGDOC 3.6 is provided for reference and information.</p>
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
<li>International Commission on Radiation Units and Measurements, <em>Measurement of Dose Equivalents from External Photon and Electron Radiations</em>, Report 47. Bethesda, Maryland. 1992.</li>
<li>International Commission on Radiological Protection (ICRP), Publication 103 (Annals of the ICRP Vol. 37/2-4), <em>2007 Recommendations of the International Commission on Radiological Protection</em>, 2007.</li>
<li>CSA Group, CAN/CSA-ISO 19011-03, <em>Guidelines for Quality and/or Environmental Management Systems Auditing</em>, (Adopted ISO 19011:2002), 2002.</li>
<li>International Organization for Standardization (ISO), <em>Guide to the Expression of Uncertainty in Measurement</em>. 1995.</li>
<li>Hirning, C. R., and P. S. Yuen, "Accuracy in External Dosimetry of Ionizing Radiation". <em>Health Physics</em> 75, 2 (1998).</li>
<li>ICRP, <em>General Principles for the Radiation Protection of Workers</em>, Publication 75 (Annals of the ICRP Vol. 27/1). Oxford, 1997.</li>
<li>ISO, <em>X and gamma reference radiation for calibrating dosemeters and doserate meters and for determining their response as a function of photon energy &ndash; Part 3: Calibration of area and personal dosemeters and the measurement of their response as a function of energy and angle of incidence</em>, ISO 4037-3:1999.</li>
<li>Wolters Kluwer, <em>Health Physics: The Radiation Safety Journal</em>, Issue 57, Roberson, P. L., F. N. Eichner, and W. D. Reece. "Determination of Photon Conversion Factors Relating Exposure and Dose for Several Extremity Phantom Designs", 1989.</li>
<li>Oxford Academic, <em>Radiation Protection Dosimetry</em>, Issue 3, Grosswendt, B. "Angular Dependence Factors and Air Kerma to Dose Equivalent Conversion Coefficients for Cylindrical Phantoms Irradiated by Plane-Parallel Extended Monoenergetic Photon Beams", 1995.</li>
<li>Oxford Academic, <em>Radiation Protection Dosimetry</em>, Issue 3, Grosswendt, B. "Angular Dependence Factors and Air Kerma to Dose Equivalent Conversion Coefficients for 1.9 cm Rod and 7.3 cm Pillar Phantoms Irradiated by Extended Monodirectional X Ray Beams", 1995.</li>
<li>Oxford Academic, <em>Radiation Protection Dosimetry</em>, Issue 59, Grosswendt, B. "Air Kerma to Dose Equivalent Conversion Coefficients for Cylindrical Phantoms Irradiated by Extended Plane-Parallel Photon Beams of Oblique Incidence Relative to the Cylinder Main Axis", 1995.</li>
<li>ISO, ISO 12794:2000, <em>Nuclear energy &ndash; Radiation protection &ndash; Individual thermoluminescence dosemeters for extremities and eyes</em>, 1999.</li>
<li>ISO, ISO 4037-1:1996, <em>X and gamma reference radiation for calibrating dosemeters and doserate meters and for determining their response as a function of photon energy &ndash; Part 1: Radiation characteristics and production methods</em>, 1996.</li>
<li>ISO, ISO 6980: 1996, <em>Reference beta radiations for calibrating dosemeters and dose rate meters and for determining their response as a function of beta radiation energy</em>, 1996.</li>
<li>European Commission, Christensen P., H.W. Julius, and T.O. Marshall, European Community Report EUR 14852 EN, <em>Technical Recommendations for Monitoring Individuals Occupationally Exposed to External Radiation</em>, Luxembourg, 1994.</li>
<li>Wolters Kluwer, <em>Health Physics: The Radiation Safety Journal</em>, Issue 63, Strom, Daniel J. and Paul S. Stansbury, "Minimum Detectable Activity When Background Is Counted Longer than the Sample", 1993.</li>
<li>Massy: S. C. F. du Bastet, Ballot, G., <em>Vade-mecum du technicien nucl&eacute;aire</em>, "<span lang="fr">Application des mÃ©thodes statistiques aux probl&egrave;mes de la mesure de la radioactivit&eacute; d&rsquo;un corps</span>", 2nd ed., 1982.</li>
<li>National Radiological Protection Board, Sumerling, T. J. and S. C. Darby, NRPB-R113, <em>Statistical Aspects of the Interpretation of Counting Experiments Designed to Detect Low Levels of Radioactivity</em>, London, 1981.</li>  </ol>
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