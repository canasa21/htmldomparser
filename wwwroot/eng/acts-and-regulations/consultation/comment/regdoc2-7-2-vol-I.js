import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "en",
                pageTitle: "REGDOC-2.7.2, Dosimetry, Volume I: Ascertaining Occupational Dose", 
                dateModified: "2019-03-21",
                langToggleUrl: "/fra/acts-and-regulations/consultation/comment/regdoc2-7-2-vol-I"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<h2>Preface</h2>  <p>This regulatory document is part of the CNSC&rsquo;s radiation protection series of regulatory documents. The full list of regulatory document series is included at the end of this document and can also be found on the <a href="/eng/acts-and-regulations/regulatory-documents/index">CNSC&rsquo;s website</a>.</p>  <p>Regulatory document REGDOC-2.7.2, Volume I sets out requirements and guidance for ascertaining occupational dose. It also provides requirements and guidance for making changes to dose-related information filed with the NDR.</p>  <p>For information on the implementation of regulatory documents referred to in the licensing basis, and on the graded approach, see REGDOC-3.5.3, <em>Regulatory Fundamentals</em>.</p>
<div className="alert alert-info module-simplify ">
<p>The words &ldquo;shall&rdquo; and "must" are used to express requirements to be satisfied by the licensee or licence applicant. "Should" is used to express guidance or that which is advised. &#39;May" is used to express an option or that which is advised or permissible within the limits of this regulatory document. "Can" is used to express possibility or capability.</p>
<p>Nothing contained in this document is to be construed as relieving any licensee from any other pertinent requirements. It is the licensee&rsquo;s responsibility to identify and comply with all applicable regulations and licence conditions.</p>  </div>  <br />
<div className="module-table-contents">  <h2>Table of Contents</h2>
<ul>
<li><a href="#sec1">1. Introduction</a>
<ul>
<li><a href="#sec1-1">1.1 Purpose</a></li>
<li><a href="#sec1-2">1.2 Scope</a></li>
<li><a href="#sec1-3">1.3 Relevant Legislation</a></li>
</ul></li>
<li><a href="#sec2">2. General Information</a>
<ul>
<li><a href="#sec2-1">2.1 Effective dose limits</a></li>
<li><a href="#sec2-2">2.2 Dosimetry methods</a></li>
<li><a href="#sec2-3">2.3 Dosimetry modelling</a></li>
<li><a href="#sec2-4">2.4 Dose services</a></li>
<li><a href="#sec2-5">2.5 Dose records</a></li>
</ul></li>
<li><a href="#partA">Part A: External Exposure</a></li>
<li><a href="#sec3">3. Operational Dose Quantities</a>
<ul>
<li><a href="#sec3-1">3.1 Ambient dose equivalent, H*(d)</a></li>
<li><a href="#sec3-2">3.2 Directional dose equivalent, H&rsquo;(d, &Omega;)</a></li>
<li><a href="#sec3-3">3.3 Personal dose equivalent H<sub>p</sub>(d)</a></li>
</ul></li>
<li><a href="#sec4">4. Characterization of Radiation Conditions</a>
<ul>
<li><a href="#sec4-1">4.1 Photon, beta and electron radiation</a></li>
<li><a href="#sec4-2">4.2 Neutron radiation</a></li>
</ul></li>
<li><a href="#sec5">5. Direct Monitoring</a>
<ul>
<li><a href="#sec5-1">5.1 Dosimeter technologies</a></li>
<li><a href="#sec5-2">5.2 Whole-body dosimetry</a></li>
<li><a href="#sec5-3">5.3 Multiple whole-body dosimetry</a></li>
<li><a href="#sec5-4">5.4 Extremity dosimetry</a></li>
<li><a href="#sec5-5">5.5 Lens of the eye dosimetry</a></li>
<li><a href="#sec5-6">5.6 Neutron dosimetry</a></li>
</ul></li>
<li><a href="#sec6">6. Ascertaining External Dose Through Estimation</a>
<ul>
<li><a href="#sec6-1">6.1 Indirect monitoring</a></li>
<li><a href="#sec6-2">6.2 Dose modelling</a></li>
<li><a href="#sec6-3">6.3 Skin contamination</a></li>
</ul></li>
<li><a href="#partB">Part B: Internal Exposure</a></li>
<li><a href="#sec7">7. Quantities</a></li>
<li><a href="#sec8">8. Characterization of Potential Sources of Intakes in the Workplace</a></li>
<li><a href="#sec9">9. Intake Monitoring Methods</a>
<ul>
<li><a href="#sec9-1">9.1 Individual monitoring</a></li>
<li><a href="#sec9-2">9.2 Air monitoring to ascertain worker dose</a></li>
</ul></li>
<li><a href="#sec10">10. Interpreting Monitoring Results</a>
<ul>
<li><a href="#sec10-1">10.1 Administrative levels</a></li>
<li><a href="#sec10-2">10.2 Accuracy of bioassay results</a></li>
</ul></li>
<li><a href="#sec11">11. Ascertaining the Committed Effective Dose</a></li>
<li><a href="#sec12">12. Calibration</a></li>
<li><a href="#sec13">13. Limiting Intakes of Nuclear Substances by Workers Who Are Breastfeeding</a></li>
<li><a href="#sec14">14. Ascertaining the Dose Resulting From an Intake of Nuclear Substances Via a Wound</a></li>
<li><a href="#partC">Part C: Making Changes to Dose-Related Information  Filed With the National Dose Registry</a></li>
<li><a href="#sec15">15. General Process</a></li>
<li><a href="#sec16">16. Individual Dose Information Change Request Procedure</a></li>
<li><a href="#sec17">17. Group Dose Information Change Request Procedure</a></li>
<li><a href="#sec18">18. Contact Information</a></li>
<li><a href="#appA">Appendix A: Guidance on Choosing Dosimetry for the Lens of the Eye</a></li>
<li><a href="#appB">Appendix B: Assessing the Activity Handled for Selecting Participants in a Routine Intake Monitoring Program</a>
<ul>
<li><a href="#appB-1">B.1 Technical Basis</a></li>
<li><a href="#appB-2">B.2 Example: Determining Participation in a Bioassay Program</a></li>
</ul></li>
<li><a href="#appC">Appendix C: Radiobioassay Protocols for Responding to Abnormal Intakes of Radionuclides</a>
<ul>
<li><a href="#appC-1">C.1 Introduction</a></li>
<li><a href="#appC-2">C.2 Radiobioassay Methods</a></li>
<li><a href="#appC-3">C.3 "Routine" and "Non-Routine" Radiobioassays</a></li>
<li><a href="#appC-4">C.4 Selecting and Applying Radiobioassay Methods</a></li>
<li><a href="#appC-5">C.5 Response Protocols</a></li>
<li><a href="#appC-6">C.6 A Response Protocol Triggered by a Routine Radiobioassay</a></li>
<li><a href="#appC-7">C.7 A Response Protocol Triggered by an Abnormal Incident</a></li>
<li><a href="#appC-8">C.8 Collecting and Handling Radiobioassay Samples</a></li>
</ul></li>
<li><a href="#appD">Appendix D: Radionuclide-Specific Recommendations Related to Bioassay Measurements and Internal Dosimetry &ndash; Tritium</a>
<ul>
<li><a href="#appD-1">D.1 Analytical Methods for Tritium in Urine</a></li>
<li><a href="#appD-2">D.2 Monitoring Frequency</a></li>
<li><a href="#appD-3">D.3 Ascertaining Dose</a></li>
<li><a href="#appD-4">D.4 LSC Quality Control</a></li>
</ul></li>
<li><a href="#appE">Appendix E: Radionuclide-Specific Recommendations Related to Bioassay Measurements and Internal Dosimetry &ndash; Radioiodines</a>
<ul>
<li><a href="#appE-1">E.1 Background</a></li>
<li><a href="#appE-2">E.2 Screening Participation</a></li>
<li><a href="#appE-3">E.3 Instrument Selection</a></li>
<li><a href="#appE-4">E.4 Screening Method</a></li>
<li><a href="#appE-5">E.5 Monitoring Period</a></li>
<li><a href="#appE-6">E.6 Validation of Screening Results</a></li>
<li><a href="#appE-7">E.7 Volatile Radioiodine Compounds</a></li>
<li><a href="#appE-8">E.8 Instrument Calibration</a></li>
<li><a href="#appE-9">E.9 Sample thyroid screening log for iodine-131</a></li>
<li><a href="#appE-10">E.10 Quality Control Charts</a></li>
</ul></li>
<li><a href="#appF">Appendix F: Radionuclide-Specific Recommendations Related to Bioassay Measurements and Internal Dosimetry &ndash; Uranium</a>
<ul>
<li><a href="#appF-1">F.1 Annual Limits on Intake of Uranium Compounds</a></li>
<li><a href="#appF-2">F.2 Chemical Toxicity of Uranium Compounds</a></li>
<li><a href="#appF-3">F.3 Ascertaining Dose From Intakes of Uranium Compounds</a></li>
</ul></li>
<li><a href="#glossary">Glossary</a></li>
<li><a href="#ref">References</a></li>
<li><a href="#addInfo">Additional Information</a></li>
</ul>  </div>  <br />
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="1"></div>
<div className="alert alert-info module-simplify ">  <p>REGDOC-2.7.2, Volume I aligns with the proposed amendments to the <a href="http://laws.justice.gc.ca/eng/regulations/sor-2000-203/page-1.html"><em>Radiation Protection Regulations</em></a> (the Regulations, RPR) which are outlined in the <a href="/eng/acts-and-regulations/consultation/completed/dis-13-01">What We Heard Report</a> for discussion paper <a href="/eng/acts-and-regulations/consultation/comment/d-13-01">DIS-13-01, <em>Proposals to Amend the Radiation Protection Regulations</em></a>.</p>   <p>Public consultation on the proposed amendments will take place via publication in the Canada Gazette, Part I. The CNSC will notify stakeholders of the opportunity to provide comments via its website and email. This regulatory document will be revised as necessary as a result of the consultation on the proposed amendments to the RPR and the comments received on the document.</p>  </div>
<h2 id="sec1">1. Introduction</h2>  <p>Draft regulatory document REGDOC-2.7.2, <em>Dosimetry, Volume I: Ascertaining Occupational Dose</em>, updates and supersedes the following previously published regulatory documents on dosimetry-related topics:</p>
<ul>
<li>G-91, <em>Ascertaining and Recording Radiation Doses to Individuals</em> (2003)</li>
<li>G-147, <em>Radiobioassay Protocols for Responding to Abnormal Intakes of Radionuclides</em> (2003)</li>
<li>RD-58, <em>Thyroid Screening for Radioiodine</em> (2008)</li>
<li>GD-150, <em>Designing and Implementing a Bioassay Program</em> (2010)</li>
<li>S-260, <em>Making Changes to Dose-Related Information Filed with the National Dose Registry</em> (2004)</li>
</ul>  <p>REGDOC-2.7.2, Volume I provides new guidance on the following topics:</p>
<ul>
<li>ascertaining and recording of the equivalent dose to the lens of the eye</li>
<li>use of licensed dosimetry services for annual doses to extremities greater than 50 mSv</li>
</ul>  <p>REGDOC-2.7.2, Volume I is divided into three parts:</p>
<ul>
<li>Part A provides information on ascertaining occupational dose from external sources of radiation.</li>
<li>Part B provides information on ascertaining occupational dose from internal sources of radiation.</li>
<li>Part C describes the process for making changes to dose-related information filed with the National Dose Registry (NDR).</li>
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
<h3 id="sec1-1">1.1 Purpose</h3>  <p>Regulatory document REGDOC-2.7.2, Volume I provides requirements and guidance for ascertaining occupational dose. It also provides requirements and guidance for making changes to dose-related information filed with the NDR.</p>
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
<h3 id="sec1-2">1.2 Scope</h3>  <p>This document provides requirements and guidance on the Canadian Nuclear Safety Commission&rsquo;s (CNSC) expectations for dosimetry to ensure the protection of workers. The scope of this document does not include:</p>
<ul>
<li>requirements and guidance for radiation protection, which is provided in draft REGDOC 2.7.1: <em>Radiation Protection</em> [1]<sup id="fnb1-ref"><a className="fn-lnk" href="#fnb1"><span className="wb-inv">Footnote </span>1</a></sup></li>
<li>requirements and guidance for dosimetry services, which is provided in draft REGDOC-2.7.2, <em>Dosimetry, Volume II: Technical and Quality Management System Requirements for Dosimetry Services</em> [2]<sup id="fnb2-ref"><a className="fn-lnk" href="#fnb2"><span className="wb-inv">Footnote </span>2</a></sup></li>
<li>requirements and guidance as it relates to environmental protection, which is provided in REGDOC 2.9.1, <em>Environmental Principles, Assessments and Protection Measures</em>, version 1.1 [3]</li>
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
<div id="1.3"></div>
<h3 id="sec1-3">1.3 Relevant legislation</h3>  <p>The following provisions of the <a href="https://laws-lois.justice.gc.ca/eng/acts/n-28.3/"><em>Nuclear Safety and Control Act</em></a> (NSCA) and the regulations made under it are relevant to this regulatory document:</p>
<ul>
<li>Section 2 of the NSCA defines the term nuclear energy worker (NEW) as "a person who is required, in the course of the person&rsquo;s business or occupation in connection with a nuclear substance or nuclear facility, to perform duties in such circumstances that there is a reasonable probability that the person may receive a dose of radiation that is greater than the prescribed limit for the general public"; these prescribed dose limits are defined in sections 13, 14 and 15 of the RPR.</li>
<li>Section 27 of the NSCA states : "Every licensee and every prescribed person shall (a) keep the prescribed records, including a record of the dose of radiation received by or committed to each person who performs duties in connection with any activity that is authorized by this Act or who is present at a place where that activity is carried on, retain those records for the prescribed time and disclose them under the prescribed circumstances ..."</li>
<li>Subsection 5(1) of the RPR requires every licensee to ascertain and record the magnitude of exposure to radon progeny, effective dose and equivalent dose received by and committed to each person referred to in section 27 of the NSCA.</li>
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
<h2 id="sec2">2. General Information</h2>
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
<h3 id="sec2-1">2.1 Effective dose limits</h3>  <p>The limits on effective dose apply to all sources of radiation exposure combined, namely, from sources external to the body, and to those from sources within the body.</p>  <p>Section 13 of the <a href="https://laws-lois.justice.gc.ca/eng/regulations/SOR-2000-203/?wbdisable=false"><em>Radiation Protection Regulations</em></a> (RPR) sets out limits on the effective dose to various persons. These persons are 1) nuclear energy workers (NEWs), 2) pregnant nuclear energy workers, and 3) persons who are not nuclear energy workers. Section 15 of the RPR sets out effective dose limits for specific cases of emergency exposures. For each of these persons or cases, the effective dose limits apply to the sum of:</p>
<ul>
<li>the effective dose received from sources of ionizing radiation outside of the body</li>
<li>the committed effective dose (CED) from radon and radon progeny, when taken into the body, excluding pregnant NEWs</li>
<li>the CED from radionuclides (other than radon-222 and its progeny) taken into the body</li>
</ul>  <p>The total effective dose, as determined by the above summation method, is compared to the applicable effective dose limits, stipulated in sections 13 and 15 of the RPR, to determine compliance with these limits.</p>
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
<h3 id="sec2-2">2.2 Dosimetry methods</h3>  <p>Dosimetry methods to ascertain occupational doses can be classified in three general categories: direct monitoring, indirect monitoring and dose modelling.</p>   <h4>2.2.1	Direct monitoring</h4>  <p>Also called personal dosimetry, it is used primarily to ascertain doses to individuals who are exposed to radiation related to their work activities. Personal dosimetry techniques vary and depend partly on whether the source of radiation is outside the body (external) or taken into the body (internal). For external exposures, personal monitoring devices, also known as personal dosimeters, are worn by an individual to measure external radiation exposures. For internal exposures, personal monitoring devices consist of an air pump and filter to estimate the airborne radioactivity inhaled by workers. Such devices include personal air samplers (to measure airborne particulates generally) and personal alpha dosimeters (to measure radon progeny and uranium ore dust in air). In addition, there are two individual monitoring techniques to ascertain internal doses without the use of personal monitoring devices, namely <em>in vivo</em> and <em>in vitro</em> bioassay. <em>In vivo</em> bioassay consists of measuring nuclear substances in the body, while <em>in vitro</em> bioassay consists of measuring nuclear substances excreted by the body. Direct monitoring, also known as individual monitoring, is the most accurate and preferred method to ascertain doses to workers.</p>  <h4>2.2.2	Indirect monitoring</h4>  <p>Also called workplace monitoring, it may be used in some situations in which a person occupies an area with a known concentration of airborne radioactivity or a known radiation field, for a known period of time. This knowledge can be used in conjunction with other information to estimate the person&rsquo;s dose during the particular occupancy time. This approach is often used where an airborne radioactive substance is the source of exposure, and the cost of personal monitoring is not warranted based on the expected exposure levels (e.g., radon progeny) or cannot be carried out. In such instances, the concentration in air of radon progeny, either in a specific area or in close proximity to each worker, is measured by air sampling or another method, and the time spent in the areas by a person or persons is recorded. Measurements such as concentrations of airborne radioactivity, recorded period of occupancy and air inhalation rates can then be used to estimate a person&rsquo;s dose.</p>
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
<h3 id="sec2-3">2.3	Dose modelling</h4>  <p>Dose modelling may be used in some situations in which the radiation source is well understood. The radiation source information is used to calculate doses using published dose coefficients and shielding information by modelling doses using software (e.g., Monte Carlo simulations).</p>
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
<h3 id="sec2-4">2.4 Dosimetry services</h3>  <p>Section 8 of the RPR requires licensees to use licensed dosimetry services to measure and monitor doses received and committed by NEWs who have a reasonable probability of receiving an effective dose greater than 5 mSv per one-year dosimetry period. This requirement ensures that doses are monitored with sufficient accuracy and precision. Requirements relating to licensed dosimetry services can be found in REGDOC-2.7.2, Volume II.</p>  <p>In some instances, workers may be exposed to multiple sources of radiation. Consequently, they may be monitored using various methods. Each source may contribute a dose less than 5 mSv/year, but when combined may exceed this value. The 5-mSv effective dose requirement for using a dosimetry service applies to the sum of the individual components. In these instances the dose component expected to contribute the most to worker exposure must be ascertained using licensed dosimetry. Licensed dosimetry should also be used for any components that are a significant contribution to effective doses to workers (e.g. &ge; 1 mSv/year). In cases where a dosimetry device measures more than one source of radiation (e.g., a personal alpha dosimeter for radon progeny and long-lived radioactive dust), these should be treated as a single component for the purposes of determining dosimetry requirements.</p>  <p>If effective doses are not expected to exceed 5 mSv per one-year dosimetry period, licensees may choose to use licensed dosimetry services or to determine doses using other dosimetry methods outlined in section 2.2. When evaluating the applicant&rsquo;s proposed dosimetry method, the CNSC considers the relative potential risk to workers.</p>
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
<h3 id="sec2-5">2.5 Dose records</h3>  <p>All data used to ascertain doses, reports generated as part of investigations or documents associated with dose change requests (DCRs), including the investigation report, DCR form and the CNSC approval letter, must be kept for the period of time prescribed in the RPR. Such data should enable reasonable re-creation and checking of results from referenced input data. A clear method to identify workers and maintain dose records should be established. The identification, storage, protection, retrieval and disposition of records should be controlled.</p>  <h4>2.5.1	National Dose Registry</h4>  <p>According to the RPR, if dose measurements are recorded by a licensed dosimetry service, dose records for NEWs are required to be submitted to the NDR along with specific personal information identified in the RPR.</p>   <p>The NDR is a database, owned and operated by Health Canada, which tracks the lifetime dose history of registered individuals. The CNSC has a memorandum of understanding with Health Canada that sets out Health Canada&rsquo;s responsibilities to operate the registry, to maintain the information required under the RPR and to make this information available to the CNSC.<sup id="fnb3-ref"><a className="fn-lnk" href="#fnb3"><span className="wb-inv">Footnote </span>3</a></sup></p>
<p>The NDR allows the CNSC to gain information on trends of dose data for facilities or groups of facilities; detailed dose information for individuals and licensees; and necessary information for health studies, including epidemiological studies. Health Canada informs the CNSC of any records indicating that a dose limit for a NEW has been exceeded. Prompt identification of such records allows the CNSC to act immediately to ensure that licensees have taken appropriate action.</p>   <p>A licensee may request a change to a dose record or changes to a group of dose records in the NDR. Part C describes the process for making changes to dose-related information filed with the NDR.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="partA"></div>
<h2 id="partA">Part A: External Exposure</h2>  <p>External dosimetry is the measurement of dose when radiation sources are outside of the body. External dosimetry is concerned with radiation that can penetrate the dead layer of skin: photon, beta, electron<sup id="fnb4-ref"><a className="fn-lnk" href="#fnb4"><span className="wb-inv">Footnote </span>4</a></sup>  and neutron radiation. Since photons, betas and electrons result in charged particle interactions and neutrons interact through nuclear forces, their dosimetry and the methods for detecting them are substantially different.</p>   <p>External exposure to radiation can be measured by direct monitoring. However, if the time and resources required for direct measurement outweigh the usefulness of that method, the exposure can be estimated.</p>
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
<h2 id="sec3">3. Operational Dose Quantities</h2>  <p>Operational dose quantities are defined in the International Commission on Radiation Units and Measurements&rsquo; (ICRU) Report 51, <em>Quantities and Units in Radiation Protection Dosimetry</em> [4], as a set of measurable quantities of external exposures that can be used to demonstrate compliance with regulatory dose limits. The following information is based on this report.</p>
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
<h3 id="sec3-1">3.1	Ambient dose equivalent, H*(d)</h3>  <p>The ambient dose equivalent is used when area monitoring is used to ascertain external dose. For strongly penetrating radiation, a depth of 10 mm is used. For weakly penetrating radiation, depths of 0.07 mm for the skin and 3 mm for the lens of the eye are used. H*(d) represents the ambient dose equivalent, where (d) is the depth measured in millimetres.</p>
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
<h3 id="sec3-2">3.2	Directional dose equivalent, H&rsquo;(d, &Omega;)</h3>  <p>The directional dose equivalent is used when area monitoring is used to ascertain external dose. This operational quantity takes into consideration the specified direction of the radiation field, &Omega;. For strongly penetrating radiation, a depth of 10 mm is used. For weakly penetrating radiation, depths of 0.07 mm for the skin and 3 mm for the lens of the eye are used. H&rsquo;(d, &Omega;) represents the directional dose equivalent, where d is the depth measured in millimetres. </p>
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
<h3 id="sec3-3">3.3	Personal dose equivalent H<sub>p</sub>(d)</h3>  <p>The personal dose equivalent is the operational quantity employed when direct (or individual) monitoring is used to ascertain external dose. For strongly penetrating radiation, a depth of 10 mm is used. For weakly penetrating radiation, depths of 0.07 mm for the skin and 3 mm for the lens of the eye are used. H<sub>p</sub>(d) represents personal dose equivalent, where (d) is the depth measured in millimetres.</p>
<p className="text-left"><strong>Table 1: Summary of operational quantities</strong></p>  <table className="">
<tr>
<th>Operational quantity</th>
<th>Description</th>
</tr>
<tr>
<td>H*(10)</td>
<td className="text-center">Ambient dose equivalent at 10 mm depth</td>
</tr>
<tr>
<td>H*(0.07)</td>
<td className="text-center">Ambient dose equivalent at 0.07 mm depth</td>
</tr>
<tr>
<td>H*(3)</td>
<td className="text-center">Ambient dose equivalent at 3 mm depth</td>
</tr>
<tr>
<td>H&rsquo;(10, &Omega;)</td>
<td className="text-center">Directional dose equivalent at 10 mm depth</td>
</tr>
<tr>
<td>H&rsquo;(0.07, &Omega;)</td>
<td className="text-center">Directional dose equivalent at 0.07 mm depth</td>
</tr>
<tr>
<td>H&rsquo;(3, &Omega;)</td>
<td className="text-center">Directional dose equivalent at 3 mm depth</td>
</tr>
<tr>
<td>H<sub>p</sub>(10)</td>
<td className="text-center">Personal dose equivalent at 10 mm depth</tr>
</tr>
<tr>
<td>H<sub>p</sub>(0.07)</td>
<td className="text-center">Personal dose equivalent at 0.07 mm depth</td>
</tr>
<tr>
<td>H<sub>p</sub>(3)</td>
<td className="text-center">Personal dose equivalent at 3 mm depth</td>
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
<div id="4"></div>
<h2 id="sec4">4. Characterization of Radiation Conditions</h2>  <p>Radiological conditions at a licensed facility or a location where a licensed activity is being carried out should be characterized, documented, monitored and updated in the event of changes that may impact doses to workers (e.g., the facility layout, the types of radionuclides and the activities being undertaken). Characterization of radiological conditions should provide a comprehensive description of radiation sources and the nature of radiation present in all work locations that may result in external exposure. Radiological characterization should include, for all locations in a facility:</p>
<ul>
<li>the radionuclides expected to be present at the workplace, their half-life, progeny and relative abundances</li>
<li>the radiation types and energies emitted by these radionuclides</li>
<li>a description of radiation sources (e.g., physical form, geometry and applicable shielding information)</li>
</ul>  <p>Characterization of radiation conditions in a workplace provides necessary information to determine the type of dosimetry that should be used.</p>
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
<h3 id="sec4-1">4.1	Photon, beta and electron radiation</h3>  <p>At energies typically encountered in the workplace, alpha, beta, electron and photon radiation exhibit a wide variety of ranges in air and in human tissues. The range of radiation (that is, the distance that it travels) influences which tissues are at greater risk from exposure.</p>  <p>Alpha radiation typically travels 2.6 to 6 cm in air and 30 to 60 &micro;m in tissue.<sup id="fnb5-ref"><a className="fn-lnk" href="#fnb5"><span className="wb-inv">Footnote </span>5</a></sup>  Alpha radiation emitted from radionuclides that are outside of the body generally cannot reach the sensitive cells of the skin and consequently do not pose a radiological concern unless these radionuclides are taken into the body. Guidance on the latter case can be found in Part B of this document.</p>  <p>Beta radiation and electrons typically have a longer range than alpha radiation. In air, beta and electron radiation may travel distances from less than 1 cm up to about 10 m. In tissue, however, their range typically extends from a few micrometres to about 1 cm, depending on their energy.<sup id="fnb6-ref"><a className="fn-lnk" href="#fnb6"><span className="wb-inv">Footnote </span>6</a></sup>  They pose a potential risk to the skin and the lens of the eye. Unless taken into the body, radionuclides emitting beta or electron radiation do not pose a risk to organs under the skin, given their range.</p>  <p>Photons, referred to as gamma radiation or X-rays, are associated with much longer ranges due to their mechanism of interaction with matter. They pose a potential risk not only to the skin and the lens of the eye, but also to tissues and organs within the body.</p>  <p>Therefore, while photon, beta and electron radiation can contribute to an equivalent dose to the skin and the lens of the eye, photons are the main contributor to the external effective dose.</p>   <p>The penetrating ability or probability of interaction of radiation is related to the radiation&rsquo;s energy. Each different nuclear substance emits radiation of a specific energy or energy range when it undergoes radioactive decay; therefore, only some photons, beta particles and electron particles present an external risk to the human body. For example, tritium (H-3) is a nuclear substance that emits only beta radiation with an average energy of 5.7 kiloelectronvolts (keV) and a maximum energy of 18.6 keV. These types of energies are too low to penetrate any more deeply than the dead layer of human skin. Therefore, beta radiation from tritium is not an external dose hazard; tritium presents solely an internal dose hazard through ingestion, inhalation and absorption through the skin.</p>  <p>The lowest energy of radiation that can be measured depends on the dosimeter. The types of dosimeters described in this document respond minimally or not at all to many sources of low-energy beta radiation. As part of the radiation protection program, licensees are expected to be aware of the radiation fields their workers will be exposed to and to choose the appropriate method for ascertaining occupational dose.</p>
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
<h3 id="sec4-2">4.2	Neutron radiation</h3>  <p>When neutrons are produced, they usually have a wide distribution of energies called an energy spectrum, which varies depending on the nature of the source. The type of reaction that a neutron undergoes depends very heavily on its energy. Many factors, including the nature of the source; the thickness, shape and composition of shielding material; or the geometry of the work environment, can alter the energy spectrum that comes into contact with a worker&rsquo;s body. As part of the radiation protection program, the licensee is expected to be aware of the neutron energy spectrum and choose a suitable method for ascertaining occupational dose.</p>
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
<h2 id="sec5">5. Direct Monitoring</h2>  <p>In order to ascertain external doses to workers, direct monitoring is carried out using a dosimeter. A dosimeter is a radiation detection device worn by an individual to measure radiation dose. Both licensed and non-licensed dosimetry may be used to ascertain dose using direct monitoring.</p>   <p>Dosimeters are classified into two general categories:</p>
<ul>
<li>passive dosimeters produce a radiation-induced signal, which is stored in the device. The dosimeter is then processed and the output is analyzed</li>
<li>active dosimeters produce a radiation-induced signal and display a direct reading of the detected dose or dose rate</li>
</ul>  <p>A typical passive dosimeter used to measure photon, beta and electron radiation consists of a detector inserted into a holder. Various dosimeters are configured differently; however, the detector contains the sensitive element(s) and the holder contains the filter(s). In a dosimeter that measures photon, beta and electron radiation, it is mainly the filter/holder that permits the instrument to differentiate between the personal dose equivalent to the skin or eye (H<sub>p</sub>(0.07) and H<sub>p</sub>(3) respectively), and the personal dose equivalent to the whole body (H<sub>p</sub>(10)). One part of the holder may have an open window (no filter or a very thin filter) to measure H<sub>p</sub>(0.07), and the other part of the detector may have a thicker filter that allows for measurement of H<sub>p</sub>(10). The thicker filter or filters shield the low-energy photons and beta radiation, and allow only the more penetrating radiation to deposit energy. Some dosimeters have multiple filters of different thicknesses and compositions that allow them to discriminate among different energy levels.</p>  <p>Active dosimeters most commonly used to measure photon, beta and electron radiation display dose readings electronically on a screen. Pencil dosimeters (also known as pocket dosimeters) are also active dosimeters. In a pencil dosimeter, doses are indicated by the position of a thin line on a radiation exposure scale.</p>  <p>There are many dosimeter technologies available for measuring photon, beta and electron radiation. Passive whole-body dosimeters include thermoluminescent dosimeters (TLDs) and optically stimulated luminescence dosimeters (OSLDs). Active whole-body dosimeters include direct reading dosimeters (DRDs), also known as electronic personal dosimeters (EPDs) or personal alarming dosimeters (PADs).</p>  <p>Measurement techniques for determining doses due to photon, beta and electron radiation are generally inappropriate for measuring neutron radiation, since neutrons interact differently in matter.</p>  <p>Various neutron dosimeter options exist. Examples include personal neutron dosimeters (of which the most popular is the solid-state nuclear track detector) and portable neutron survey meters. These dosimeter technologies are further described in section 5.1.</p>  <p>Many factors influence the quality of a dosimeter&rsquo;s results:</p>
<ul>
<li>A dosimeter&rsquo;s response will vary depending on the energy of the radiation and the angle of incidence of radiation relative to the dosimeter&rsquo;s detector</li>
<li>Dosimeters vary in their abilities to detect different types of radiation (photon, beta, electron or neutron.</li>
<li>A dosimeter&rsquo;s signal can fade over time; this can be caused by environmental factors such as temperature, light and humidity.</li>
<li>Some dosimeters are limited in their ability to perform in pulsed radiation fields.<sup id="fnb7-ref"><a className="fn-lnk" href="#fnb7"><span className="wb-inv">Footnote </span>7</a></sup></li>
<li>Some dosimeters are more sensitive and can detect a lower quantity of radiation than others.</li>
<li>Dosimeters differ in their ability to withstand severe environmental conditions.</li>
</ul>  <p>Any limitations regarding the above factors should be discussed with the dosimetry service provider or manufacturer so that they are well understood. These limitations should be documented and workers should be trained so that appropriate precautions can be taken to prevent any impact on dose results. For example, many active dosimeters are known to have poor performance in pulsed radiation fields. Therefore, if pulsed radiation fields contribute significantly to dose, this should be taken into account when selecting the most appropriate dosimeter for ascertaining worker dose.</p>  <p>A dosimeter&rsquo;s response is the measured or evaluated value divided by the conventionally true value. The conventionally true value, also known as &ldquo;best estimate&rdquo;, is the value attributed to a quantity and accepted as having an uncertainty appropriate for a given purpose. The response will vary depending on the type and energy of radiation to which the dosimeter is exposed. Dosimetry service providers may provide the option to apply standard correction factors applicable to specific radionuclides or energies to obtain more accurate results. These options should be carefully considered in consultation with the dosimetry service provider. If correction factors are applied, they should be documented and reviewed if any changes occur in the workplace or work activities that could affect their validity.</p>  <p>Dosimeters should be secured to the body to prevent them from falling off during work activities, and should be facing outward, and not covered by other items or devices. They should be worn on the trunk of the body between the waist and shoulders at the location of the highest expected exposure (or placed as per the manufacturer&rsquo;s specifications).</p>  <p>When dosimeters are not worn, they should be stored in an area where dose rates are as close to background as possible and where storage conditions are favourable (areas where dosimeters are protected from direct sunlight, extreme temperature conditions, dust, etc.). Dosimeters should never be stored near radioactive materials or exposure devices. At least one control dosimeter should be kept in each dosimeter storage area during the wearing period. The control dosimeter is used to monitor non-occupational dose, to which personal dosimeters are also exposed while they are not worn (i.e., during storage and transport). This includes dose from background radiation and other sources that are not related to licensed activities. When processed, the doses reported by the control dosimeter may be subtracted from the doses reported by worker dosimeters so that the net occupational dose can be accurately determined. Control dosimeters should be shipped with dosimeters during transport in order to identify potential exposure to radiation during transport. Dosimeters should be shipped using services that will not result in inadvertent exposure to radiation above ambient background levels while the dosimeters are in transit. For example, shipping services that ship radioactive material should not be used.</p>  <p>When travelling by air with a dosimeter, the dosimeter should not be packed in checked baggage. This will prevent non-personal dose from being recorded on the dosimeter as a result of exposure to X-ray/CT scanners in use by most airports as part of baggage security screening protocols. Best practice is to carry or wear the dosimeter through the security screening point. If necessary, the dosimeter can be placed in carry-on baggage. The doses from carry-on baggage x-ray machines are not as significant.</p>   <p>Precautions should be taken to protect dosimeters from being contaminated with radioactive material. However, this should always be done in consultation with the manufacturer or dosimetry service provider to ensure that any precautions taken do not impact dosimeter results.</p>  <p>Procedures should be in place to deal with dosimeters that have been compromised (e.g., lost, damaged or subjected to non-personal exposures). These situations should be investigated and appropriate actions should be taken as soon as possible. The investigation should involve discussions with the worker whose dosimeter was compromised and the dosimetry service provider. A replacement dosimeter should be provided and, if appropriate, a dose change request should be submitted to the CNSC as per guidance provided in Part C of this document.</p>
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
<h3 id="sec5-1">5.1 Dosimeter technologies</h3>  <p>The dosimeter technologies described in this section are examples of commonly used dosimeters. Other technologies are also available.</p>  <p>If a dosimeter reports an unexpected result or exceeds an action level, an investigation should be carried out as per REGDOC-2.7.1. This should include inspection of the dosimeter for contamination, if applicable. The dosimetry service provider should be consulted to investigate the analysis associated with the dosimeter in question.</p>
<h4>5.1.1	Thermoluminescent dosimeters</h4>   <p>Thermoluminescent dosimeters (TLDs) are commonly used dosimeters in Canada and around the world. The following overview explains how a TLD works:</p>
<ol>
<li>When ionizing radiation passes through the detector, the detector&rsquo;s atoms release some of their electrons.</li>
<li>The electrons become trapped in impurities (also called doping centres) within the dosimeter material, where they remain in their excited state (their energy is elevated relative to ground state).</li>
<li>The chip is then heated in a TLD reader, which consists mainly of a heater, a photomultiplier tube (which amplifies weak light pulses into a large electrical signal) and a recorder.</li>
<li>The trapped electrons return to ground state with the emission of photons of visible light; the amount of light emitted relative to the temperature is called the glow curve.</li>
<li>This curve is analyzed to determine the dose.</li>
<li>Once a TLD has been read, it cannot be reread to verify the result.</li>
</ol>  <p>There are many types of TLDs available, including lithium fluoride, calcium sulfate and lithium borate dosimeters.</p>
<h4>5.1.2	Optically stimulated luminescence dosimeters</h4>  <p>An optically stimulated luminescence dosimeter (OSLD) offers advantages that include the ability to be reread, and it has a low minimum measurable dose. OSLDs operate much like TLDs; the major difference being that luminescence is produced by a light beam rather than by heat.</p>
<h4>5.1.3	Direct reading dosimeters</h4>  <p>Direct reading dosimeters (DRDs) are active dosimeters, since they display doses and dose rates while in use. Many direct reading dosimeters have alarms that sound at preset doses and dose rates. The most commonly used DRDs display dose readings electronically and are composed of either a diode or a Geiger-M&uuml;ller (GM) detector. However, ion chamber pencil dosimeters are still used as well.</p>   <p>DRDs are used for controlling dose and are often worn in addition to a passive dosimeter. When there is a possibility that radiation fields could increase unexpectedly by a factor of 10 or more, a DRD should be used. For many years, DRDs have been used as dose control devices, particularly in the nuclear power industry.</p>  <p>DRDs are not typically used to measure doses of record but may be used for this purpose when licensed dosimetry is not required or in the event of a lost or damaged passive dosimeter. When active dosimeters are used, the energy range, sensitivity, linearity and precision should be appropriate for the exposure situations in which they will be used. In addition, quality control measures and calibration procedures should be in place to ensure dosimeters are performing appropriately. In particular, if active dosimeters using GM tubes as detectors are used, their potentially significant under-response to high dose rate fields (&gt;100 mSv/h) must be taken into consideration.</p>
<h4>5.1.4	Solid-state nuclear track detector</h4>  <p>A solid-state nuclear track detector uses a plastic material called CR&ndash;39 (composed of allyl diglycol carbonate). CR&ndash;39 technology is based on the reaction of neutrons with material in the detector. The reaction produces charged particles, such as protons, at the site of interaction. The protons produce tracks in the dosimeter that are made visible through a chemical etching process. After etching, the tracks are counted to determine the dose.</p>
<h4>5.1.5	Portable neutron survey meters</h4>  <p>Portable neutron survey meters are based on a design that allows them to respond to neutrons with a wide range of energies. When used, portable neutron survey meters are usually placed in an area in the work environment where radiation readings are highest. By integrating the dose rate over the period of time that workers spend in that location, doses can be estimated and assigned to each worker. With this measurement method, the neutron survey meter&rsquo;s highest measured dose rate is used. This ensures that resulting assigned doses remain conservative.</p>
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
<h3 id="sec5-2">5.2 Whole-body dosimetry</h3>  <p>The most common dosimeters are those used to ascertain external effective dose to the whole body and/or equivalent dose to the skin of the whole body as a result of external exposure to photons, betas and electrons. These dosimeters are commonly referred to as &ldquo;whole-body dosimeters&rdquo; or &ldquo;whole-body badges&rdquo; and are typically worn on the front of the torso between the waist and neck. Whole-body dosimeters measure H<sub>p</sub>(10) and/or H<sub>p</sub>(0.07). The most common dosimeter technologies used as whole-body dosimeters include TLDs, OSLDs, and DRDs.</p>   <p>In some situations, the use of multiple whole-body dosimeters (commonly known as &ldquo;multiple badging&rdquo;) is more appropriate to ascertain external effective dose than the use of one whole-body dosimeter worn on the trunk. These situations arise when worker exposures to radiation are non-uniform.</p>
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
<h3 id="sec5-3">5.3 Multiple whole-body dosimetry</h3>  <p>The guidance provided in this section on the use of multiple whole-body dosimeters is based on the American National Standards Institute&rsquo;s ANSI/HPS N.13.41-2011, <em>Criteria for Performing Multiple Dosimetry</em> [6].</p>  <p>The following are situations in which radiation exposures are non-uniform and may require the use of multiple whole-body dosimeters.</p>
<ol>
<li>Workers wear protective clothing or partial body shields, as in the following examples:
<ol className="list-lower-alpha">
<li>lead aprons worn to offer protection to a worker who is required to be in a diagnostic imaging room at the time of an exposure</li>
<li>partial body shields used in radioisotope laboratories, where bench-top shielding is used to protect workers who are preparing radiopharmaceuticals</li>
</ol></li>
<li>Workers are required to maintain a fairly constant position with respect to a localized field, as in the following examples:
<ol className="list-lower-alpha">
<li>boiler maintenance work in a nuclear generating station, where the upper part of the body may be exposed to higher levels of radiation than the lower part</li>
<li>work performed in close proximity to a localized source of radiation, so that the parts of the body closest to the source are in a more intense field than the rest of the body</li>
</ol></li>
<li>Operations are performed near radiation leaks, such as cracks or small holes in shielding materials.</li>
<li>Workers are exposed on sides of the body opposite to where the dosimeter is usually worn, for example, maintenance work that requires diving in used nuclear fuel bays, where there is a potential for exposure to high dose rates from multiple angles.</li>
</ol>  <p>Section 5.3.1 provides guidance for situations 1&ndash;3 above.</p>   <p>For situation 4, the number of dosimeters required must be determined on a case-by-case basis: one dosimeter should be worn at the usual wearing location and additional dosimeters at other exposed areas of the body. The external effective dose would be calculated using an algorithm determined to be appropriate for the specific exposure situation. An assessment should be performed on a case-by-case basis to determine the appropriate algorithm.</p>  <p>While multiple whole-body dosimeters may be used at any time to provide more accurate dose estimates, the use of more than one dosimeter is strongly recommended when the following two conditions exist.</p>  <p>The personal dose equivalent to any portion of the body (such as the head) has the potential to vary by 50% from the personal dose equivalent that would be measured with the dosimeter in its usual wearing location (the trunk).</p>  <p>The resulting personal dose equivalent may exceed 10% of a dose limit when a significant component of the effective dose from external sources comes from a non-uniform radiation field.</p>  <p>When it has been determined that a worker will carry out specific tasks wearing multiple whole-body dosimeters in addition to routine work in a uniform field where routine monitoring is used, a special set of dosimeters should be issued to the worker to be worn during the specific work instead of routine monitoring dosimeters. The worker&rsquo;s total dose is the sum of the dose associated with work in the uniform radiation field where routine monitoring is used and the dose(s) for one or more periods of work in a non-uniform field where multiple dosimeters are used.</p>  <p>The placement of multiple dosimeters should be clearly documented. A dosimeter worn on a part of the body covered by a lead apron should be worn between the lead apron and the body.</p>   <p>The number of dosimeters needed when using multiple dosimeters depends on the radiation field, the work to be performed, the location of the worker relative to the source(s) of radiation and the level of information desired from multiple dosimetry.</p>
<h4>5.3.1	Calculating whole-body external effective dose from multiple dosimeters</h4>  <p>To obtain an estimate of the external effective dose, E, the doses reported by multiple dosimeters are combined using a weighted sum. To this end, the body is considered to be made up of compartments, and each compartment is monitored by an assigned dosimeter.</p>   <p>Compartment factors (<em>W<sub>C</sub></em>) have been developed for various compartments or areas of the body. These compartment factors are based on ICRP Publication 103, <em>The 2007 Recommendations of the International Commission on Radiological Protection</em> [7], tissue weighting factors to account for the radiosensitivities of tissues and organs that make up various compartments. The compartments and their associated compartment factors are provided in table 2.</p>
<p className="text-left"><strong>Table 2: Compartments and their compartment factors</strong></p>  <table className="">
<tr>
<th>Compartment</th>
<th>Compartment factor, <em>W<sub>C</sub></em></th>
</tr>
<tr>
<td>Head and neck</td>
<td className="text-center">0.12</td>
</tr>
<tr>
<td>Thorax, above the diaphragm</td>
<td className="text-center">0.40</td>
</tr>
<tr>
<td>Abdomen, including the pelvis</td>
<td className="text-center">0.46</td>
</tr>
<tr>
<td>Upper right arm, including the elbow</td>
<td className="text-center">0.005</td>
</tr>
<tr>
<td>Upper left arm, including the elbow</td>
<td className="text-center">0.005</td>
</tr>
<tr>
<td>Right thigh, including the knee</td>
<td className="text-center">0.005</td>
</tr>
<tr>
<td>Left thigh, including the knee</td>
<td className="text-center">0.005</td>
</tr>  </table>
<p>The dose equivalent, H<sub>p</sub>(10), for each compartment may be determined by the results of the dosimeter worn at that location of the body. If there is no dosimeter placed on a compartment area, it may be judged appropriate to use the dose equivalent determined by a dosimeter placed at a nearby location of the body that is shielded in the same way.</p>  <p>The external component of the whole-body effective dose, E, can be calculated using the following equation:</p>
<table className=" table-border-none">
<tr>  	<td className="text-center text-center" width="20">(1)</td>  	<td width="70" className="text-center">  <math display=&#39;block&#39;>   <semantics>
<mrow>
<mi>E</mi><mo>=</mo><mstyle displaystyle=&#39;true&#39;>
<mo>&#x2211;</mo> <mrow>
<msub>
<mi>W</mi>
<mi>C</mi>
</msub>
<msub>
<mi>H</mi>
<mrow>
<mi>p</mi><mo>,</mo><mi>C</mi></mrow>
</msub>
<mo stretchy=&#39;false&#39;>(</mo><mn>10</mn><mo stretchy=&#39;false&#39;>)</mo></mrow>
</mstyle></mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaamyraiabg2
da9maaqaeabaGaam4vamaaBaaaleaacaWGdbaabeaakiaadIeadaWg
aaWcbaGaamiCaiaacYcacaWGdbaabeaakiaacIcacaaIXaGaaGimai
aacMcaaSqabeqaniabggHiLdaaaa@41F2@
</annotation>   </semantics>  </math>
</td>  	</tr>  </table>
<table className="table-border-none">  <tr>
<td>Where:</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>  </tr>  <tr>  	<td>W<sub>C</sub></td>  	<td>is the compartment factor</td>  	<td>(unitless)</td>  </tr>  <tr>  	<td>H<sub>p,C</sub></td>  	<td>is the dose equivalent assigned to compartment <em>C</em></td>  	<td>mSv</td>  </tr>  </table>
<p>If a need for a more complex method of combining dosimeter results arises, further guidance is provided in the American National Standards Institute&rsquo;s ANSI/HPS N.13.41-2011, <em>Criteria for Performing Multiple Dosimetry</em>. For example, in some situations, neck collars (also known as thyroid collars) are also worn along with the lead apron. In this case, the model may be adjusted, as the neck is protected by the collar.</p>  <h5>Example calculation</h5>  <p>When protective lead aprons are used, at least two dosimeters should be worn (one on the thorax and one on the head or neck). An example calculation is provided below for the common situation in which workers wear protective lead aprons covering the thorax, abdomen and thighs. In this example, workers wear one dosimeter on the head or neck facing the source of radiation and one dosimeter on the trunk under the apron facing the source of radiation. The head/neck dosimeter measures the personal dose equivalent to the head and neck and the unshielded arms. The trunk dosimeter worn under the apron measures the personal dose equivalent to the thorax, abdomen and thighs. Table 3 provides an example of a calculation of the external component of the effective dose for each compartment.</p>
<p className="text-left"><strong>Table 3: Example of a calculation of the external component of effective dose for each compartment</strong></p>  <table className="">
<tr>
<th className="text-center">Compartment</th>
<th className="text-center">Compartment factor, <em>W<sub>C</sub></em></th>
<th className="text-center">Assigned dosimeter</th>
<th>Personal dose equivalent, <em>H<sub>p,C</sub></em> (mSv)</th>
<th className="text-center">Compartment effective dose, <em>E<sub>C</sub></em> (mSv)</th>
</tr>
<tr>
<td>Head and neck</td>
<td className="text-center">0.12</td>
<td className="text-center">Head/neck</td>
<td className="text-center">5.0</td>
<td className="text-center">0.6</td>
</tr>
<tr>
<td>Thorax, above the diaphragm</td>
<td className="text-center">0.40</td>
<td className="text-center">Trunk</td>
<td className="text-center">0.2</td>
<td className="text-center">0.08</td>
</tr>
<tr>
<td>Abdomen, including the pelvis</td>
<td className="text-center">0.46</td>
<td className="text-center">Trunk</td>
<td className="text-center">0.2</td>
<td className="text-center">0.092</td>
</tr>
<tr>
<td>Upper right arm, including the elbow</td>
<td className="text-center">0.005</td>
<td className="text-center">Head/neck</td>
<td className="text-center">5.0</td>
<td className="text-center">0.025</td>
</tr>
<tr>
<td>Upper left arm, including the elbow</td>
<td className="text-center">0.005</td>
<td className="text-center">Head/neck</td>
<td className="text-center">5.0</td>
<td className="text-center">0.025</td>
</tr>
<tr>
<td>Right thigh, including the knee</td>
<td className="text-center">0.005</td>
<td className="text-center">Trunk</td>
<td className="text-center">0.2</td>
<td className="text-center">0.001</td>
</tr>
<tr>
<td>Left thigh, including the knee</td>
<td className="text-center">0.005</td>
<td className="text-center">Trunk</td>
<td className="text-center">0.2</td>
<td className="text-center">0.001</td>
</tr>  </table>  <p>Therefore, summing the effective dose for each compartment, whole-body external effective dose is 0.82 mSv.</p>
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
<h3 id="sec5-4">5.4	Extremity dosimetry</h3>  <p>Non-uniform exposure of the skin of the extremities (hands and feet) is a special case, as is evident by a separate dose limit for equivalent dose to the hands and feet. The American National Standards Institute&rsquo;s ANSI/HPS N13.41-2011 defines the hand as the arm below the elbow and the foot as the leg below the knee [6].</p>   <p>A person who handles radioactive sources with the hand may need to wear extremity dosimeters in order to adequately measure the equivalent dose to the skin of the hand. Nuclear medicine and nuclear fuel processing are two examples of industry sectors whose workers sometimes wear extremity dosimeters. In these situations, the administration of nuclear substances or the processing of nuclear fuel could expose the skin of a worker&rsquo;s hands to higher levels of radiation than the skin of the rest of the body. Nuclear power plant workers also wear extremity dosimeters when their duties cause their hands or feet to come in close contact with radioactive materials.</p>  <p>The RPR require that licensed dosimetry be used to monitor doses of radiation received by and committed to NEWs who have a reasonable probability of receiving an equivalent dose to the skin, or to the skin of the hands and feet, that is greater than 50 mSv in a one-year dosimetry period. In order to determine if extremity dosimeters are needed (i.e., if there is a reasonable probability of receiving an equivalent greater than 50 mSv), a radiation monitoring instrument may be used to estimate doses to the hands or feet as a result of work activities to be conducted. Another option would be to use direct monitoring for the hands and/or feet and assess whether it is necessary to use licensed dosimetry based on the results. Extremities should be monitored whenever there is any uncertainty as to whether the criterion for extremity dosimeters applies.</p>   <p>Extremity dosimeters are used to measure H<sub>p</sub>(0.07) and should be worn on or as close as practicable to the 1 cm<sup>2</sup> area of the extremity that receives the highest dose. It is also common practice to wear extremity dosimeters on both hands. Monitoring is most commonly done with TLD rings for the fingers or TLD chips taped or strapped to the extremities. In some cases, a whole-body dosimeter is worn on the wrist or ankle with the use of a strap.</p>  <p>Wearing instructions of the dosimetry service provider should be followed. In general, however, the extremity dosimeter should be worn next to the skin, inside any clothing that shields the skin from exposure to low-energy photons and beta/electron particles. Placing the dosimeter under the clothing also protects it from potential contamination.</p>  <p>Since the equivalent dose limits apply to each extremity separately, doses to different extremities should be recorded separately.</p>
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
<h3 id="sec5-5">5.5	Lens of the dosimetry</h3>  <p>A workplace hazard assessment should be carried out and documented to evaluate if workers are at higher risk of receiving elevated exposure to the lens of the eye. If it is determined that workers are at higher risk, doses to the lens of the eye should be estimated. These situations include:</p>
<ul>
<li>workers subject to non-uniform exposures to the eye</li>
<li>workers exposed to weakly penetrating radiation that contributes to dose to the lens of the eye, but less so, or not at all, to the effective dose (i.e., whole body dose)</li>
</ul>  <p>Radiological workplace hazards should be reviewed and evaluated to determine if additional measures should be put in place to better protect workers from radiation exposure to the lens of the eye. In some cases doses to the lens of the eye may be effectively reduced through:</p>
<ul>
<li>implementation of engineered controls that, ideally, should be considered at the design stage of facilities and equipment</li>
<li>use of personal protective equipment, such as protective eyewear</li>
<li>use of administrative controls, such as procedural requirements and restrictions</li>
</ul>  <p>If doses to the lens of the eye have a reasonable probability of exceeding 15 mSv per year, direct monitoring with a passive dosimeter should be carried out. The operational quantity measured (H<sub>p</sub>(3), H<sub>p</sub>(10) or H<sub>p</sub>(0.07)) will depend on the exposure situation, which should be assessed as part of the workplace hazard assessment.</p>   <p>The workplace hazard assessment should determine if any workers fall into one of the following two categories:</p>
<ul>
<li>workers exposed to weakly penetrating radiation such as beta particles or photons of low energies (i.e., below about 40 keV) &ndash; note that beta radiation requires a maximum energy greater than 700 keV to penetrate to the sensitive depth of the lens; therefore, beta energies below 700 keV need not be considered</li>
<li>workers exposed to non-uniform radiation fields, including when:
<ul>
<li>the head is closer to the radiation source than the rest of the body (such as when viewing or manipulating a radioactive source, for example, looking closely at a syringe containing medical isotopes or inspecting manufactured fuel pellets)</li>
<li>the trunk of the body is shielded (e.g., by equipment or protective gear) and the eyes are not</li>
</ul></li>
</ul>  <p>If workers fall under one or more of the above two categories, the nature of the exposures should be documented and the method(s) of assessing doses to the lens of the eye should be determined. Individual monitoring for the lens of the eye includes:</p>
<ul>
<li>dosimeters worn near the lens of the eye that measure H<sub>p</sub>(3)</li>
<li>dosimeters worn near the eyes or on other parts of the body that measure H<sub>p</sub>(10) or H<sub>p</sub>(0.07)</li>
</ul>  <p>If workers do not fall under one of the two categories, doses to the lens of the eye can be assumed to be equivalent to H<sub>p</sub>(10) or H<sub>p</sub>(0.07) and doses may be measured by whole-body dosimeters worn on the trunk. Using this assumption, compliance with effective dose limits will also ensure compliance with the equivalent dose limits for the lens of the eye.</p>   <p>Tables A.1 and A.2 in appendix A provide specific guidance on how to choose the appropriate dosimeter for various situations. This guidance is based on information from IAEA TECDOC 1731, <em>Implications for Occupational Radiation Protection of the New Dose Limit for the Lens of the Eye</em> [8]. Please refer to this document for further information.</p>   <p>The dosimeter selected to measure H<sub>p</sub>(3), should have the appropriate filter to measure the dose equivalent at a depth of 3 mm. Dosimeters should also be capable of measuring a range of doses appropriate for potential worker doses and be appropriate for workplace radiation fields. Dosimetry service providers should be consulted to ensure dosimeters are appropriate for the workplace environment in which they may be used. A dosimetry service provider should be selected that has a management system and calibration procedure.</p>  <p>For monitoring the lens of the eye for neutron radiation, see section 5.6.</p>  <p>When a dosimeter is worn near the eyes to monitor dose to the lens of the eye, the location where it should be worn (e.g., left side of the left eye, right side of the right eye, centre of the forehead, etc.) should be assessed. The location where the dosimeter would receive the highest dose should determine the placement of the dosimeter.</p>   <p>Eye shielding with lead may be used to reduce dose rates from photon radiation. Plastic eye shielding is not effective for shielding photon radiation but may reduce dose rates from beta radiation. If eye shielding is used, the dosimeter should be placed such that the shielding will be accounted for. If this is not practicable, a filter that mimics the shielding may be used with the dosimeter or correction factors may be applied. The basis for any correction factors used should be documented.</p>
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
<h3 id="sec5-6">5.6 Neutron dosimetry</h3>  <p>The most popular instruments used to monitor occupational doses to workers who may be exposed to neutrons are the solid-state nuclear track detector and portable neutron survey meters.</p>   <p>Personal neutron dosimeters are typically worn on the front of the torso between the waist and neck, and are often attached with, or alongside, the whole-body dosimeter used to measure external dose from photon, beta and electron radiation. Personal neutron dosimeters are generally the preferred option for neutron dosimetry and should be considered when neutron dosimetry is required. The dosimeters selected should be appropriate for the neutron energy spectrum of the work environment. In cases where the neutron energy spectrum at a given location is very broad, more than one type of dosimeter may be needed.</p>  <p>Rather than being worn on the person, a portable neutron survey meter is placed in the location where radiation readings are highest, and this information is used to estimate an individual&rsquo;s dose. When measuring occupational doses due to neutrons it is important to know the neutron energy spectra of the work environment in order to choose an appropriate measurement device. In cases where the neutron energy spectrum at a given location is very broad, more than one type of device may be needed.</p>  <p>Portable neutron survey meters should only be used for dosimetry when they are the best option for ascertaining doses to workers from neutron radiation. Portable neutron survey meters should not be used in work areas in which there are spatial variations in neutron dose rates such that the instrument may not reflect doses to the workers. If portable neutron survey meters are used for dosimetry, data and reports should demonstrate that there is no appreciable spatial variation in dose rates and that portable neutron survey meters are the most appropriate dosimetry option given the work environment and neutron energy spectrum.</p>   <p>Neutron dosimeters are used to measure H<sub>p</sub>(10) and should be worn on the trunk of the body between the waist and neck at the location of the highest expected exposure.</p>   <p>If neutron fields are non-uniform, personal dosimeters that measure H<sub>p</sub>(10) from neutron radiation may be worn near the eyes to provide a conservative estimate for dose to the lens of the eye. Note that this is in addition to neutron dosimetry used to monitor dose to the whole body.</p>
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
<h2 id="sec6">6. Ascertaining External Dose Through Estimation</h2>  <p>Although direct monitoring is the preferred method for ascertaining external doses to workers, the RPR state that &ldquo;if the time and resources required for direct measurement as a result of monitoring outweigh the usefulness of ascertaining the amount of exposure and doses using that method&rdquo;, doses may be ascertained through estimation. For the purpose of this document, estimation refers to two types of approaches to estimating doses: indirect (i.e., workplace) monitoring and dose modelling (i.e., calculating doses based on the characteristics of the source, exposure geometry and other relevant parameters).This section provides guidance on workplace monitoring and dose modelling. Guidance is also included on how to evaluate the equivalent dose to the skin as a result of a skin contamination incident. Quality assurance measures that should be considered when ascertaining doses using dose estimation methods are also included.</p>
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
<h3 id="sec6-1">6.1 Indirect monitoring</h3>  <p>Indirect or workplace monitoring consists of measuring the dose rate in a radiation field and multiplying this dose rate by each worker&rsquo;s occupancy time in that field. Workplace monitoring provides information on dose rates in a workplace and can help with work planning and exposure control. It may be used for prospective assessments of doses as a planning tool. It can also be used for retrospective assessments of doses, for example, in situations in which doses are low and constant over time.</p>  <p>For the purpose of estimating personal doses, workplace measurements should only be used in radiation fields that are uniform and consistent over time. The locations of workplace monitoring should be representative of worker occupancy. If the radiation field is uniform in space and in time, only a few monitoring locations may be used. Locations where indirect monitoring is carried out should be assessed to determine where instruments should be placed and how many instruments should be used. The number of workplace measurement locations should be increased for radiation fields that are non-uniform in space. Measurements should be taken immediately following environment changes that have a potential to affect monitoring results. If changes are frequent or sudden, monitoring should be continuous. When ascertaining doses on the basis of workplace monitoring, the monitoring results should be representative of all working areas where doses are ascertained in this manner. Workplace monitoring data, including the time and location associated with each measurement and the associated result, should be documented.</p>  <p>Workplace monitoring to estimate personal doses should utilize the appropriate instrumentation. For mixed radiation fields it may be necessary to use more than one type of instrument. In order to ensure workplace monitoring is appropriate, the instrument(s) used should be:</p>
<ul>
<li>selected to measure the types and energies of radiation present</li>
<li>selected to cover the range of dose rates present</li>
<li>selected to operate under environmental conditions or external influences present</li>
<li>calibrated appropriately for the type and energies of radiation present</li>
<li>placed in an appropriate location and direction such that measurements conservatively reflect worker doses</li>
</ul>
<p>Instruments should also be selected such that it is obvious to the individual taking measurements when the instrument is beyond its range.  Instruments used to estimate personal doses typically measure in operational quantities, such as H*(10) and/or H&rsquo;(0.07, &Omega;). An explanation of operational quantities can be found in section 3. It is important to determine which operational quantity is appropriate to use as a surrogate for the protection quantity of interest. For more information, consult ICRU report 51, <em>Quantities and Units in Radiation Protection Dosimetry</em> [4]. For example, the ambient dose equivalent, H*(10), may be used as a surrogate for effective dose. For exposures to low penetrating radiation, either the ambient dose equivalent H*(0.07) or the directional dose equivalent H&rsquo;(0.07, 0<sup>o</sup>) may be used as a surrogate for equivalent dose to the skin.</p>  <p>Methods used to ascertain worker doses using workplace monitoring should be consistent with the following:</p>
<ol>
<li>Workplace monitoring and dose ascertainment should only be carried out by trained and qualified workers, and workers should have a good understanding of the instruments selected for use, the appropriate use of the instruments, and their limitations.</li>
<li>	Workplace monitoring equipment needed for accurate dose or exposure measurement should be controlled by procedures; such procedures should ensure that workplace monitoring equipment conforms to specified requirements in order to ensure that the measured result meet any specific dosimetry needs. Factors that can influence the accuracy and reliability of measurements include:
<ol className="list-lower-alpha">
<li>energy response</li>
<li>impact of angle of radiation relative to the detector</li>
<li>shock and vibration</li>
<li>atmospheric pressure</li>
<li>dust</li>
<li>water</li>
<li>dose rate, including in pulsed radiation fields</li>
<li>electric and magnetic fields</li>
<li>temperature and humidity</li>
<li>radiation not intended to be measured</li>
<li>response time</li>
<li>stability of response</li>
<li>sensitivity</li>
<li>repeatability of measurements</li>
</ol></li>
<li>Procedures for estimating doses using workplace monitoring should:
<ol className="list-lower-alpha">
<li>be in place to document all work activities that can influence the assignment of the correct dose to the right individual and the maintenance of a dose record system</li>
<li>provide details of work methods and equipment to be used</li>
<li>be reviewed and revised as needed when changes in the workplace may impact the precision, accuracy and reliability of dose estimates</li>
</ol></li>
<li>The practices listed below should be followed with regard to the maintenance and calibration of workplace monitoring equipment:
<ol className="list-lower-alpha">
<li>Workplace monitoring equipment should be identified, controlled and maintained.</li>
<li>Periodic calibration and maintenance requirements should be determined based on accuracy, purpose, degree of use, stability characteristics and other factors affecting measurement control.</li>
<li>Maintenance and calibration procedures should be documented.</li>
<li>Calibration status should be recorded and maintained, and calibrated equipment should be clearly and indelibly identified (e.g., through the use of labels).</li>
</ol></li>
<li>Inspections, checks and reviews should be identified and planned to verify that the method for ascertaining worker doses using workplace monitoring is performed in an acceptable manner.</li>
</ol>
<h4>6.1.1	Special consideration for the lens of the eye</h4>  <p>Direct monitoring is the preferred method for assessing dose to the lens of the eye. However, when radiation fields are predictable over long periods of time, it is possible to estimate doses using indirect monitoring at relevant locations. The locations should be representative of the conditions under which individuals will be exposed. If ambient monitoring is being considered, then instruments that measure ambient dose equivalent and directional dose equivalent may be used. If ambient monitoring is being considered, H<sub>p</sub>(10) and H<sub>p</sub>(0.07) may be replaced with H*(10) and H&rsquo;(0.07) respectively, in table A.1 of appendix A, which provides guidance on direct monitoring.</p>
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
<h3 id="sec6-2">6.2 Dose modelling</h3>  <p>Dose modelling to ascertain external doses to workers involves calculation of doses based on knowledge of the source, and using published dose coefficients and shielding information or modelling of doses using software. Various software packages are available either online or for purchase that allow the user to calculate doses and dose rates from various types of sources and geometries.</p>   <p>Dose modelling to ascertain doses to workers can only be used if radiation sources present, work environments and worker exposure geometries are well understood. When dose calculation methods are used, the latest dose coefficients published by the International Commission on Radiological Protection should be used when applicable.</p>  <p>Dose modelling methods to ascertain worker doses should be consistent with the following quality practices.</p>
<ul>
<li>dose modelling should only be carried out by trained and qualified workers</li>
<li>procedures for modelling doses should:
<ul>
<li>be in place to document all work activities that can influence the assignment of the correct dose to the right individual and the maintenance of a dose record system</li>
<li>provide details of dose modelling methods</li>
<li>be reviewed and revised as needed when changes in the workplace may impact the precision, accuracy and reliability of dose estimates</li>
</ul></li>
<li>verification of dose modelling methods and results should be carried out by trained and qualified persons other than those who have participated in the work being verified</li>
</ul>  <p>For more guidance to carry out simple dose or dose rate calculations, refer to the CNSC&rsquo;s <a href="/eng/resources/radiation/radionuclide-information"><em>Radionuclide Information Booklet</em></a>.</p>
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
<h3 id="sec6-3">6.3 Skin contamination</h3>  <p>This section provides guidance to licensees on evaluating skin dose as a result of a skin contamination incident.</p>  <p>Experience gained has shown that most skin contamination incidents, if detected promptly, actually result in relatively low equivalent doses. The general principles for responding to contamination incidents are as follows:</p>
<ul>
<li>the circumstances of the event should be documented, recorded and investigated to ensure that work practices are optimized and to minimize the probability of repeat occurrences.</li>
<li>the skin dose should be calculated and recorded by the licensee</li>
<li>the licensee should report the incident in accordance with their licence requirements</li>
<li>the licensee should submit a dose change request to the CNSC for equivalent doses resulting from skin contamination that is above 50 mSv, as this will ensure that the skin dose is added to the worker&rsquo;s dose of record in the NDR</li>
</ul>
<h4>6.3.1	Contamination meter efficiencies</h4>  <p>Guidance on monitoring for radioactive contamination is provided in appendix C of REGDOC 2.7.1. This guidance should be used to establish detector efficiencies for radionuclides used before unsealed sources are manipulated, even if skin contamination is unlikely.</p>
<h4>6.3.2	Background measurements</h4>  <p>Background count rate measurements using the selected contamination meter should be made and kept on record for future use in case of a skin contamination incident. These measurements should be made in a low-dose-rate area where nuclear substances are not present.</p>
<h4>6.3.3	Measuring skin contamination</h4>  <p>Step-by-step instructions are provided below to measure and record the net count rate.</p>  <p>Estimate the size of the contaminated skin area using the contamination meter.</p>  <p>Measure and record the count rate directly over the affected portion of skin with the highest count rate, and record the time of measurement as well as the time of the contamination event.</p>  <p>If practicable, and if a radiation detector is within close proximity, the first measurement should be taken before decontamination efforts.</p>   <p>The measurement should be taken with the detector placed as close to the skin as possible without direct contact.</p>   <p>Determine the net count rate in counts per second by subtracting the background count rate from the count rate measured on the skin; if the net count rate is in counts per minute, divide it by 60 to convert it to counts per second.</p>  <p>If the net count rate is above zero, decontaminate by washing immediately; however, excessive cleaning should be avoided to prevent damaging the skin and causing an intake by absorption through the skin.</p>  <p>Repeat steps 1&ndash;3 until the net count rate is zero, or subsequent measurements are no longer decreasing.</p>  <p>Some situations may warrant an attempt to extract fixed skin contamination more quickly, such as wearing an impermeable glove over the affected skin surface to encourage sweating. The radiation safety officer should be consulted for specific guidance.</p>
<h4>6.3.4	Calculating skin dose from contamination</h4>  <p>If the timing of the skin contamination event is not known, or if a significant amount of time (more than 30 minutes) has elapsed between the contamination event and the first measurement, a conservative assumption with respect to the time of the event should be made. For example, the time of contamination may be assumed to be the time the radioactive material was first handled.</p>  <p>The average surface concentration (Bq/cm2) for each measurement may be determined using the following formula:</p>
<table className=" table-border-none">
<tr>  	<td className="text-center text-center" width="20">(2)</td>  	<td width="70" className="text-center">  <math display=&#39;block&#39;>   <semantics>
<mrow>
<mover accent=&#39;true&#39;>
<mi>C</mi>
<mo>&#x00AF;</mo>
</mover>
<mo>=</mo><mfrac>
<mrow>
<mtext>Net&#x00A0;count&#x00A0;rate</mtext></mrow>
<mrow>
<mtext>Area</mtext><mo>&#x00D7;</mo><mi>&#x03B5;</mi></mrow>
</mfrac>
</mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGabm4qayaara
Gaeyypa0ZaaSaaaeaacaqGobGaaeyzaiaabshacaqGGaGaae4yaiaa
b+gacaqG1bGaaeOBaiaabshacaqGGaGaaeOCaiaabggacaqG0bGaae
yzaaqaaiaabgeacaqGYbGaaeyzaiaabggacqGHxdaTcqaH1oqzaaaa
aa@4B95@
</annotation>   </semantics>  </math>
</td>  	</tr>  </table>
<table className="table-border-none">  <tr>
<td className="text-center"><span style="text-decoration: overline;">C</span></td>
<td>=</td>
<td>the average surface concentration in Bq/cm<sup>2</sup>. If the instrument reports its results in Bq/cm<sup>2</sup>, it is important to understand the surface area that was assumed for the conversion because a correction factor may be required. For example, if an instrument reports a result in Bq/cm<sup>2</sup> based on a 100 cm<sup>2</sup> calibration source and the contaminated skin surface area is 1 cm<sup>2</sup>, the result reported by the instrument should be multiplied by a factor of 100.</td>  </tr>  <tr>
<td className="text-center">Net count rate</td>
<td>=</td>
<td>the measured average count rate minus the background count rate in counts per second (If the net count rate is obtained in counts per minute, divide the measurement by 60 to obtain the value in counts per second.)</td>  </tr>  <tr>
<td className="text-center">Area</td>
<td>=</td>
<td>the contaminated skin surface area in cm<sup>2</sup> if the contaminated area is less than the probe surface area, and the measurement was taken such that the area of contaminated skin was directly under the probe (if the area is unknown or the skin is unevenly contaminated, 1 cm<sup>2</sup> may be conservatively assumed), or the probe&rsquo;s active surface area in cm<sup>2</sup> if skin is evenly contaminated over a larger area than the probe</td>  </tr>  <tr>
<td className="text-center">&epsilon;</td>
<td>=</td>
<td>contamination meter efficiency in cps/Bq</td>  </tr>  </table>  <br />
<p>The following formula may be used to calculate the skin dose in &micro;Sv, corresponding to each measurement interval:</p>
<table className=" table-border-none">
<tr>  	<td className="text-center text-center" width="20">(3)</td>  	<td width="70" className="text-center">  <math display=&#39;block&#39;>   <semantics>
<mrow>
<mi>D</mi><mo>=</mo><mover accent=&#39;true&#39;>
<mi>C</mi>
<mo>&#x00AF;</mo>
</mover>
<mo>&#x00D7;</mo><mi>D</mi><mi>C</mi><mi>F</mi><mo>&#x00D7;</mo><mn>1.443</mn><mo>&#x00D7;</mo><msub>
<mi>T</mi>
<mrow>
<mn>1</mn><mo>/</mo><mn>2</mn></mrow>
</msub>
<mrow><mo>(</mo>
<mrow>
<mn>1</mn><mo>&#x2212;</mo><msup>
<mi>e</mi>
<mrow>
<mfrac>
<mrow>
<mn>0.693</mn><mo>&#x00D7;</mo><mi>T</mi></mrow>
<mrow>
<msub>
<mi>T</mi>
<mrow>
<mn>1</mn><mo>/</mo><mn>2</mn></mrow>
</msub>
</mrow>
</mfrac>
</mrow>
</msup>
</mrow>
<mo>)</mo></mrow></mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaamiraiabg2
da9iqadoeagaqeaiabgEna0kaadseacaWGdbGaamOraiabgEna0kaa
igdacaGGUaGaaGinaiaaisdacaaIZaGaey41aqRaamivamaaBaaale
aacaaIXaGaai4laiaaikdaaeqaaOWaaeWaaeaacaaIXaGaeyOeI0Ia
amyzamaaCaaaleqabaWaaSaaaeaacaaIWaGaaiOlaiaaiAdacaaI5a
GaaG4maiabgEna0kaadsfaaeaacaWGubWaaSbaaWqaaiaaigdacaGG
VaGaaGOmaaqabaaaaaaaaOGaayjkaiaawMcaaaaa@5653@
</annotation>   </semantics>  </math>  	</td>  	</tr>  </table>
<table className="table-border-none">  <tr>
<td>where:</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>  </tr>  <tr>
<td className="text-center">DCF</td>
<td>=</td>
<td>skin dose rate conversion factors in &micro;Sv/h per Bq/cm<sup>2</sup> (see table 4 below)</td>  </tr>  <tr>
<td className="text-center">T<sub>1/2</sub></td>
<td>=</td>
<td>half-life in hours</td>  </tr>  <tr>
<td className="text-center">T</td>
<td>=</td>
<td><p className="mrgn-tp-0">For the first measurement, T is the elapsed time between the first and second measurement plus the estimated elapsed time between the contamination event and the first measurement.</p>
<p>For subsequent measurements, T is the elapsed time between the current and subsequent measurement.</p></td>  </tr>  </table>  <br />
<p className="text-left"><strong>Table 4: Skin dose rate conversion factors for commonly used isotopes</strong></p>  <p>This table is adapted from IAEA-TECDOC-1162, <em>Generic procedures for assessment and response during a radiological emergency</em> [9]</p>  <table className="">
<tr>
<th>Radionuclide</th>
<th>Half-life (hours)</th>
<th>Conversion factors (&micro;Sv/h per Bq/cm<sup>2</sup>)</th>
</tr>
<tr>
<td><sup>14</sup>C</td>
<td className="text-center">5.02 x 10<sup>7</sup></td>
<td className="text-center">0.32</td>
</tr>
<tr>
<td><sup>18</sup>F</td>
<td className="text-center">1.83</td>
<td className="text-center">1.9</td>
</tr>
<tr>
<td><sup>32</sup>P</td>
<td className="text-center">343</td>
<td className="text-center">1.9</td>
</tr>
<tr>
<td><sup>67</sup>Ga</td>
<td className="text-center">78.2</td>
<td className="text-center">0.35</td>
</tr>
<tr>
<td><sup>90</sup>Sr/<sup>90</sup>Y</td>
<td className="text-center">2.55 x 10<sup>5</sup></td>
<td className="text-center">3.5</td>
</tr>
<tr>
<td><sup>90</sup>Y</td>
<td className="text-center">64.1</td>
<td className="text-center">2.0</td>
</tr>
<tr>
<td><sup>99</sup>Mo/<sup>99m</sup>Tc</td>
<td className="text-center">65.94</td>
<td className="text-center">1.9</td>
</tr>
<tr>
<td><sup>99m</sup>Tc</td>
<td className="text-center">6.0</td>
<td className="text-center">0.25</td>
</tr>
<tr>
<td><sup>111</sup>In</td>
<td className="text-center">67.2</td>
<td className="text-center">0.38</td>
</tr>
<tr>
<td><sup>123</sup>I</td>
<td className="text-center">13.2</td>
<td className="text-center">0.38</td>
</tr>
<tr>
<td><sup>125</sup>I</td>
<td className="text-center">1,442</td>
<td className="text-center">0.021</td>
</tr>
<tr>
<td><sup>131</sup>I</td>
<td className="text-center">192</td>
<td className="text-center">1.6</td>
</tr>
<tr>
<td><sup>201</sup>Tl</td>
<td className="text-center">73.0</td>
<td className="text-center">0.27</td>
</tr>  </table>
<p>A list of conversion factors for additional radionuclides may be found in IAEA-TECDOC-1162 [9] and in the <em>Health Physics</em> article titled &ldquo;Electron dose-rate conversion factors for external exposure of the skin from uniformly deposited activity on the body surface&rdquo; [10].</p>  <p>If the final net count rate is zero, sum the calculated doses to obtain the total skin dose. However, if the net count rate is not zero, determine the dose for the time following the last measurement using the formula below and then sum the doses to obtain the total skin dose:</p>
<table className=" table-border-none">
<tr>  	<td className="text-center text-center" width="20">(4)</td>  	<td width="70" className="text-center">
<em>D</em> = <em><span style="text-decoration: overline;">C</span></em> &times; <em>DCF</em> &times; 1.443 &times; <em>T<sub>1/2</sub></em>  	</td>  	</tr>  </table>
<p>If the licensee submits a request to add the dose to the worker&rsquo;s dose records in the NDR, Part C should be consulted.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="partB"></div>
<h2 id="partB">Part B: Internal Exposure</h2>
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
<h2 id="sec7">7. Quantities</h2>  <p>Internal exposures are those exposures to ionizing radiation that result from radionuclides that have been taken into the body. Quantities that are specific to ascertaining doses from internal exposure are described in this section.</p>  <p>The committed equivalent dose, H<sub>T</sub>(50), is the equivalent dose received by an organ or tissue from a radionuclide during the 50 years after the radionuclide is taken into the body of a person 18 years of age or older.</p>  <p>The committed effective dose (CED), E(50), is the effective dose from a radionuclide during the 50 years after the radionuclide is taken into the body of a person 18 years of age or older.</p>  <p>The annual limit on intake (ALI) is the activity of a radionuclide that, when taken into the body, will deliver a CED of 20 mSv. ALI values may be calculated for inhalation or for ingestion. The ALI for inhalation (ALI<sub>inh</sub>) is given by</p>
<table className=" table-border-none">  <tr>  	<td className="text-center text-center" width="20">(5)</td>  	<td width="70" className="text-center">  <math display=&#39;block&#39;>   <semantics>
<mrow>
<mi>A</mi><mi>L</mi><msub>
<mi>I</mi>
<mrow>
<mi>i</mi><mi>n</mi><mi>h</mi></mrow>
</msub>
<mo stretchy=&#39;false&#39;>[</mo><mi>B</mi><mi>q</mi><mo stretchy=&#39;false&#39;>]</mo><mo>=</mo><mfrac>
<mrow>
<mn>0.02</mn><mo stretchy=&#39;false&#39;>[</mo><mi>S</mi><mi>v</mi><mo stretchy=&#39;false&#39;>]</mo></mrow>
<mrow>
<msub>
<mi>e</mi>
<mrow>
<mi>i</mi><mi>n</mi><mi>h</mi></mrow>
</msub>
<mo stretchy=&#39;false&#39;>(</mo><mn>50</mn><mo stretchy=&#39;false&#39;>)</mo><mrow><mo>[</mo> <mrow>
<mfrac>
<mrow>
<mi>S</mi><mi>v</mi></mrow>
<mrow>
<mi>B</mi><mi>q</mi></mrow>
</mfrac>
</mrow> <mo>]</mo></mrow></mrow>
</mfrac>
</mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbiqaaqXbcaWGbb
GaamitaiaadMeadaWgaaWcbaGaamyAaiaad6gacaWGObaabeaakiaa
cUfacaWGcbGaamyCaiaac2facqGH9aqpdaWcaaqaaiaaicdacaGGUa
GaaGimaiaaikdacaGGBbGaam4uaiaadAhacaGGDbaabaGaamyzamaa
BaaaleaacaWGPbGaamOBaiaadIgaaeqaaOGaaiikaiaaiwdacaaIWa
GaaiykamaadmaabaWaaSaaaeaacaWGtbGaamODaaqaaiaadkeacaWG
XbaaaaGaay5waiaaw2faaaaaaaa@52D7@
</annotation>   </semantics>  </math>  	</td>  	</tr>  </table>
<p>ALI for ingestion (ALI<sub>ing</sub>) is given by
<table className=" table-border-none">  <tr>  	<td className="text-center text-center" width="20">(6)</td>  	<td width="70" className="text-center">	  <math display=&#39;block&#39;>   <semantics>
<mrow>
<mi>A</mi><mi>L</mi><msub>
<mi>I</mi>
<mrow>
<mi>i</mi><mi>n</mi><mi>g</mi></mrow>
</msub>
<mo stretchy=&#39;false&#39;>[</mo><mi>B</mi><mi>q</mi><mo stretchy=&#39;false&#39;>]</mo><mo>=</mo><mfrac>
<mrow>
<mn>0.02</mn><mo stretchy=&#39;false&#39;>[</mo><mi>S</mi><mi>v</mi><mo stretchy=&#39;false&#39;>]</mo></mrow>
<mrow>
<msub>
<mi>e</mi>
<mrow>
<mi>i</mi><mi>n</mi><mi>h</mi></mrow>
</msub>
<mo stretchy=&#39;false&#39;>(</mo><mn>50</mn><mo stretchy=&#39;false&#39;>)</mo><mrow><mo>[</mo> <mrow>
<mfrac>
<mrow>
<mi>S</mi><mi>v</mi></mrow>
<mrow>
<mi>B</mi><mi>q</mi></mrow>
</mfrac>
</mrow> <mo>]</mo></mrow></mrow>
</mfrac>
</mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbiqaaqXbcaWGbb
GaamitaiaadMeadaWgaaWcbaGaamyAaiaad6gacaWGObaabeaakiaa
cUfacaWGcbGaamyCaiaac2facqGH9aqpdaWcaaqaaiaaicdacaGGUa
GaaGimaiaaikdacaGGBbGaam4uaiaadAhacaGGDbaabaGaamyzamaa
BaaaleaacaWGPbGaamOBaiaadIgaaeqaaOGaaiikaiaaiwdacaaIWa
GaaiykamaadmaabaWaaSaaaeaacaWGtbGaamODaaqaaiaadkeacaWG
XbaaaaGaay5waiaaw2faaaaaaaa@52D7@
</annotation>   </semantics>  </math>  	</td>  	</tr>  </table>
<p>In the above equations, <em>e<sub>inh</sub></em>(50) and <em>e<sub>ing</sub></em>(50) are the CED per unit intake by inhalation and ingestion, respectively. These values should consider site-specific solubility data for the nuclear substances of interest. When such data are not available, the values may be obtained from current<sup id="fnb8-ref"><a className="fn-lnk" href="#fnb8"><span className="wb-inv">Footnote </span>8</a></sup>  ICRP publications and should be based on conservative assumptions of solubility. For inhalation intakes of particulates, unless site-specific information is available, the particle size (activity median aerodynamic diameter, AMAD) should be assumed to be 5 &micro;m. For inhalation intakes of gases and vapours, unless site-specific information is available, the appropriate CED per unit intake should be selected according to recommendations of the ICRP.</p>  <p>The derived air concentration (DAC) is the concentration of a radionuclide in air, that when inhaled at a breathing rate of 1.2 m<sup>3</sup> per hour for 2,000 working hours per year, results in the intake of 1 ALI of that radionuclide.</p>   The DAC for a radionuclide is given by
<table className=" table-border-none">  <tr>  	<td className="text-center text-center" width="20">(7)</td>  	<td width="70" className="text-center">	  <math display=&#39;block&#39;>   <semantics>
<mrow>
<mi>D</mi><mi>A</mi><mi>C</mi><mrow><mo>[</mo> <mrow>
<mfrac>
<mrow>
<mi>B</mi><mi>q</mi></mrow>
<mrow>
<msup>
<mi>m</mi>
<mn>3</mn>
</msup>
</mrow>
</mfrac>
</mrow> <mo>]</mo></mrow><mo>=</mo><mfrac>
<mrow>
<mi>A</mi><mi>L</mi><msub>
<mi>I</mi>
<mrow>
<mi>i</mi><mi>n</mi><mi>h</mi></mrow>
</msub>
<mo stretchy=&#39;false&#39;>[</mo><mi>B</mi><mi>q</mi><mo stretchy=&#39;false&#39;>]</mo></mrow>
<mrow>
<mn>2</mn><mo>,</mo><mn>400</mn><mo stretchy=&#39;false&#39;>[</mo><msup>
<mi>m</mi>
<mn>3</mn>
</msup>
<mo stretchy=&#39;false&#39;>]</mo></mrow>
</mfrac>
</mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaamiraiaadg
eacaWGdbWaamWaaeaadaWcaaqaaiaadkeacaWGXbaabaGaamyBamaa
CaaaleqabaGaaG4maaaaaaaakiaawUfacaGLDbaacqGH9aqpdaWcaa
qaaiaadgeacaWGmbGaamysamaaBaaaleaacaWGPbGaamOBaiaadIga
aeqaaOGaai4waiaadkeacaWGXbGaaiyxaaqaaiaaikdacaGGSaGaaG
inaiaaicdacaaIWaGaai4waiaad2gadaahaaWcbeqaaiaaiodaaaGc
caGGDbaaaaaa@4F32@
</annotation>   </semantics>  </math>  	</td>  	</tr>  </table>
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
<h2 id="sec8">8. Characterization of Potential Sources of Intakes in the Workplace</h2>  <p>The radiological conditions during normal operations of a facility, or a location where a licensed activity is being carried out, should be characterized and documented. The radiological conditions should be verified periodically and the documentation should be kept up to date. The radiological characterization relating to internal dosimetry and bioassay should provide a comprehensive description of the nature, extent and variability of surface contamination, airborne radioactivity and other potential sources of intakes, as appropriate, at all work locations. The radiological characterization should also include, for all locations in a facility:</p>  <ul>
<li>the radionuclides expected to be present at the workplace, and their half-life, progeny and relative abundances</li>
<li>the radiation types and energies emitted by these radionuclides</li>
<li>their chemical forms and related respiratory tract clearance types</li>
<li>the particle size (e.g., expressed as the AMAD), if applicable</li>
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
<div id="9"></div>
<h2 id="sec9">9. Intake Monitoring Methods</h2>  <p>Monitoring workers for potential intakes of radionuclides may be conducted through either individual measurement methods or workplace measurements.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="9.1"></div>
<h3 id="sec9-1">9.1	Individual monitoring</h3>  <p>The purpose of individual intake monitoring is to verify and document that workers are adequately protected from internal radiological risks and to demonstrate compliance with the RPR. More specifically, individual intake monitoring aims to ascertain workers&rsquo; doses, to serve as an indicator of potential intake, to verify that workers are adequately protected from the chemical toxicity associated with nuclear substances, and overall, to support the licensee&rsquo;s radiation protection program. In emergency situations, the purpose of individual intake monitoring is to ascertain and document workers&rsquo; doses, including the absorbed dose to organs or tissues, and to serve as a trigger for initiating health surveillance and treatment.</p>  <p>Monitoring for intakes of radionuclides may consist of both workplace and individual monitoring. The types of workplace and individual monitoring methods at a facility (or location where a licensed activity is being carried out) should be selected to ensure the detection of those radionuclides identified by the radiological characterization for the facility or licensed activity that have a potential to be taken into the body in normal and abnormal (unplanned) operating conditions (e.g., as a result of the re-suspension of loose surface contamination or the inhalation of airborne radioactivity). The intake monitoring program is considered an integral part of the radiation protection program and should provide the necessary data to ascertain the dose to workers from intakes of radionuclides or to trigger the ascertaining of worker doses in a timely manner.</p>  <p>Individual monitoring may consist of measurements of the activity of radionuclides in the body (known as either in vivo monitoring or in vivo bioassay; the terms are equivalent), monitoring of excreta (known as either <em>in vitro</em> monitoring or <em>in vitro</em> bioassay), air sampling with personal air samplers, or a combination of these methods. The preferred monitoring method depends on a number of factors, which are discussed in this section.</p>  <p><em>In vivo</em> monitoring involves photon (e.g., gamma radiation) detectors placed at specific positions relative to the person being measured, to detect photons emitted by radionuclides that have been deposited within the person&rsquo;s body. This method can only be used for radionuclides that emit X ray or gamma radiation, radionuclides that emit positrons (via the detection of annihilation gamma radiation) or radionuclides emitting energetic beta particles. In the latter case, bremsstrahlung radiation is detected. <em>In vivo</em> monitoring is not the method of choice when the radionuclides to be detected emit gamma or X ray radiation with a low yield, when they do not emit radiation that can readily be detected outside of the body (e.g., photons of energy less than 25 keV) or when their biological half-time or physical half-life is short (e.g., less than 1 day). For further information, consult ICRU report 69, <em>Direct Determination of the Body Content of Radionuclides</em> [11].</p>  <p><em>In vivo</em> monitoring methods include whole-body monitoring and partial-body monitoring. Whole-body monitoring should be used to monitor for intakes of radionuclides that are rapidly absorbed from the respiratory tract into systemic circulation, and that either distribute uniformly throughout the body, as is the case for Cs-134 for example, or distribute throughout several organs, such as Fe-59. Partial-body monitoring of the relevant organ should be selected to monitor for radionuclides that are preferentially deposited in one organ. These include, for example, I-131, for which thyroid monitoring is appropriate. In addition, lung monitoring is recommended for radionuclides that are absorbed slowly from the respiratory tract (i.e., materials with Type M or S absorption<sup id="fnb9-ref"><a className="fn-lnk" href="#fnb9"><span className="wb-inv">Footnote </span>9</a></sup> ). According to ICRP Publication 119, <em>Compendium of Dose Coefficients based on ICRP Publication 60</em>, such radionuclides include U-235 and Am-241 [12].</p>  <p><em>In vivo</em> measurements are acceptable to detect photon-emitting radionuclides imbedded in a wound. Further guidance on intakes via wounds is presented in section 14.</p>  <p>Detailed guidance on establishing an in vivo measurement facility, including construction, installation and operation, is not within the scope of this document. It may be found, however, in IAEA Safety Series No. 114, <em>Direct Methods for Measuring Radionuclides in the Human Body</em> [13], and ICRU Report 69, <em>Direct Determination of the Body Content of Radionuclides</em> [14].</p>  <p><em>In vitro</em> monitoring generally involves urinalysis, and may also include fecal bioassay in the case of inhaled insoluble compounds, as well as other investigative measurements such as nasal smears. Urine bioassay programs designed for the purpose of dosimetry should be designed &ndash; with the exception of tritium bioassay &ndash; to collect and analyze samples collected over a period of 24 consecutive hours. In cases where this is not feasible, other alternatives should be considered. These include:</p>
<ul>
<li>the collection and analysis of first morning urine voiding</li>
<li>the measurement of creatinine concentration in urine to estimate 24-hour excretion (based on a urine sample collected over part of a day) normalization by:
<ul>
<li>volume, with or without a correction for specific gravity</li>
<li>the length of the sampling interval</li>
</ul></li>
</ul>  <p>The minimum quantity of urine required for the analysis of a sample depends on the analytical method. Licensees should document and implement a mechanism to (i) ensure that a sufficient quantity of sample is submitted in each in vitro sample submitted for analysis, and (ii) follow up with sample submitters to request a second sample when the sample is of insufficient quantity.</p>  <p><em>In vitro</em> analyses involving radiochemical separation of radionuclides should include measures to control the measurement process by the use of chemical yield tracers. Such tracers may be added to samples to be analyzed, or alternately, may be added to similar samples, such as artificial samples or samples from an uncontaminated subject. The licensee should establish acceptance criteria for <em>in vitro</em> sample results from the laboratory. Such criteria should include a minimum chemical yield. Samples with a chemical yield below this threshold should not be used for dosimetry, and a reanalysis of the sample should be requested.</p>  <p>In the case of urine bioassay measuring tritium excretion as tritiated water, single (spot) urine samples of a few millilitres (for routine monitoring) may be analyzed for tritium activity. Converting the concentration of titrated water in urine to the resulting effective dose rate is addressed in appendix D.</p>  <p>Urine bioassay programs may also be useful for non-dosimetry purposes, specifically, as a screening tool to identify potential intakes of radionuclides. In such cases, spot samples may be sufficient to allow for the detection of intakes. However, the sample submission frequency and the sensitivity of the analytical method should be demonstrated to ensure that intakes potentially leading to an annual committed effective dose (CED) of 1 mSv do not go undetected. Urine bioassay programs should include measures to avoid contamination of the samples. Such programs should also ensure that the sample volume required for analysis is sufficient so that adequate sensitivity can be achieved to meet the needs of the radiation protection program it supports.</p>  <p>The analysis of fecal samples is generally carried out as part of a response to a known or suspected abnormal inhalation intake of Type M or S material. If possible, collection over a period of two to three days should occur in the first week following the abnormal intake. Fecal excretion rates of radionuclides in the first few days following an acute inhalation vary significantly. Furthermore, early fecal sampling results may allow for the identification of exposed individuals.</p>  <p>Nasal smears may be used as a screening tool to identify potential inhalation intakes. Positive nasal smear results should be followed up with <em>in vitro</em> and/or <em>in vivo</em> measurements, as appropriate for the radionuclide(s) identified and their associated solubility, in order to confirm whether an intake has occurred and to quantify it.</p>  <p>Several factors should be considered when selecting the method of bioassay monitoring. The first factor is the objective of monitoring &ndash; there should be a balance between the needs for intake monitoring and dose assessment. Intake monitoring requires timely information about the occurrence of intakes and should be based on the following indicators of intake, in order of preference:</p>
<ol>
<li>personal air sampler (PAS) or workplace static air sampler (SAS)</li>
<li>nasal swabs</li>
<li>if appropriate for the radionuclides of concern:
<ol className="list-lower-alpha">
<li><em>in vivo</em> bioassay</li>
<li><em>in vitro</em> bioassay</li>
</ol></li>
</ol>  <p>When the objective of monitoring is ascertaining dose, the order of preference is different than above:</p>
<ol>
<li>if appropriate for the radionuclides of concern :
<ol className="list-lower-alpha">
<li><em>in vivo</em> bioassay</li>
<li><em>in vitro</em> bioassay</li>
</ol></li>
<li>personal air sampling</li>
</ol>  <p>Information on air sampling can be found in section 9.2. Table 5 illustrates suggested methods of bioassay measurement that may be performed for selected radionuclides, taking into account their physical and metabolic characteristics. Note that table 5 is not exhaustive and the appropriate methods depend on the physical and chemical form of the radionuclide as well as its route of excretion.</p>
<p><strong>Table 5: Examples of bioassay methods for selected radionuclides</strong></p>  <table className="">
<tr>
<th>Bioassay method</th>
<th colSpan="3">Radionuclide</th>
</tr>
<tr>
<th className="text-left" colSpan="4"><em>In vivo</em> bioassay</th>
</tr>
<tr>
<td rowspan="5">Whole-body counting</td>
<td><sup>51</sup>Cr</td>
<td><sup>95</sup>Zr/<sup>95</sup>Nb</td>
<td><sup>144</sup>Ce</td>
</tr>
<tr>
<td height="26"><sup>54</sup>Mn</td>
<td><sup>106</sup>Ru</td>
<td><sup>203</sup>Hg</td>
</tr>
<tr>
<td><sup>59</sup>Fe</td>
<td><sup>110m</sup>Ag</td>
<td><sup>226</sup>Ra, <sup>228</sup>Ra</td>
</tr>
<tr>
<td><sup>57</sup>Co, <sup>58</sup>Co, <sup>60</sup>Co</td>
<td><sup>124</sup>Sb, <sup>125</sup>Sb</td>
<td><sup>134</sup>Cs, <sup>137</sup>Cs</td>
</tr>
<tr>
<td><sup>85</sup>Sr</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td rowspan="3">Lung counting</td>
<td><sup>14</sup>C(particulate)*</td>
<td><sup>239</sup>Pu, <sup>240</sup>Pu</td>
<td><sup>244</sup>Cm</td>
</tr>
<tr>
<td><sup>60</sup>Co</td>
<td><sup>90</sup>Sr*</td>
<td><sup>241</sup>Am</td>
</tr>
<tr>
<td><sup>235</sup>U</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>Thyroid counting</td>
<td><sup>123</sup>I, <sup>124</sup>I, <sup>125</sup>I, <sup>131</sup>I</td>
</tr>
<th className="text-left" colSpan="4"><em>In vitro</em> bioassay</th>
<tr>
<td rowspan="3">Liquid scintillation counting (&beta; counting) of urine samples</td>
<td><sup>3</sup>H</td>
<td><sup>35</sup>S</td>
<td><sup>45</sup>Ca</td>
</tr>
<tr>
<td><sup>14</sup>C</td>
<td><sup>36</sup>Cl</td>
<td><sup>129</sup>I, <sup>131</sup>I</td>
</tr>
<tr>
<td><sup>32</sup>P, <sup>33</sup>P</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>Liquid scintillation counting of urine after chemical separation</td>
<td><sup>14</sup>C</td>
<td><sup>89</sup>Sr, <sup>90</sup>Sr</td>
<td><sup>228</sup>Ra</td>
</tr>
<tr>
<td>&beta; counting of fecal sample after chemical separation</td>
<td><sup>14</sup>C (particulates)</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td rowspan="2">Gamma spectroscopy of urine samples</td>
<td><sup>57</sup>Co, <sup>58</sup>Co, <sup>60</sup>Co</td>
<td><sup>85</sup>Sr</td>
<td><sup>124</sup>I, <sup>125</sup>I, <sup>131</sup>I</td>
</tr>
<tr>
<td><sup>106</sup>Ru</td>
<td><sup>134</sup>Cs, <sup>137</sup>Cs</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>Gamma spectroscopy of fecal samples (possibly after chemical separation)</td>
<td><sup>60</sup>Co</td>
<td><sup>144</sup>Ce</td>
<td>&nbsp;</td>
</tr>
<tr>
<td rowspan="3">Alpha spectroscopy of urine/fecal sample after radiochemical separation</td>
<td><sup>223</sup>Ra, <sup>226</sup>Ra</td>
<td><sup>238</sup>Pu</td>
<td><sup>241</sup>Am</td>
</tr>
<tr>
<td><sup>228</sup>Th, <sup>232</sup>Th</td>
<td><sup>239</sup>Pu/<sup>240</sup>Pu**</td>
<td><sup>242</sup>Cm, <sup>244</sup>Cm</td>
</tr>
<tr>
<td><sup>233</sup>U, <sup>234</sup>U, <sup>235</sup>U, <sup>238</sup>U</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>ICP-MS (inductively coupled plasma mass spectrometry)</td>
<td><sup>239</sup>Pu, <sup>240</sup>Pu</td>
<td><sup>234</sup>U, <sup>235</sup>U, <sup>236</sup>U, <sup>238</sup>U</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>TIMS (thermal ionization mass spectrometry)</td>
<td><sup>239</sup>Pu, <sup>240</sup>Pu</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>  </table>  <p>*&nbsp;Measurement of bremsstrahlung radiation<br />  **&nbsp;Alpha spectroscopy cannot normally distinguish between Pu-239 and Pu-240.</p>
<h4>Categories of individual intake monitoring programs and selecting participants</h4>  <p>Under paragraph 27(a) of the NSCA, every licensee is required to keep any records prescribed by the regulations under the NSCA, as well as a record of the dose received by or committed to each person who performs duties in connection with any activity that is authorized by the NSCA or who is present at a place where that activity is conducted. This is intended to apply to all persons who may be on the licensee&rsquo;s premises and exposed to radiation, and who are therefore under the licensee&rsquo;s responsibility with regard to determining and controlling doses. This requirement is also stated in subsection 5(1) of the RPR. A radiation exposure or dose can be ascertained by direct measurement as a result of monitoring, as required by paragraph 5(2)(a) of the RPR. This section is concerned with the "direct measurement as a result of monitoring". Paragraph 5(2)(b) of the RPR stipulates that &ldquo;if the time and resources required for direct measurement as a result of monitoring outweigh the usefulness of ascertaining the amount of exposure and doses using that method ...&rdquo; they are to be estimated.</p>  <p>Participation in an individual monitoring program should be based on workers&rsquo; likelihood of intakes during routine operations as well as during accidental situations. The monitoring program should be designed to provide sufficient data of a level of quality necessary to achieve the program&rsquo;s objective, for example, to ascertain workers&rsquo; CED, to assess the likelihood of an intake, and to assess the potential for nephrotoxicity as a result of uranium intakes where applicable.</p>  <p>Sections 9.1.1 to 9.1.4 describe four types of individual monitoring programs:</p>
<ul>
<li>routine bioassay monitoring</li>
<li>special bioassay monitoring</li>
<li>confirmatory monitoring</li>
<li>task-related monitoring</li>
</ul>  <p>Baseline bioassay assessments are also described.</p>
<h4>9.1.1	Routine bioassay monitoring</h4>  <p>Routine monitoring is carried out in situations in which intakes of radionuclides by workers are probable during the normal operations of the licensed activity. It is also conducted to detect unplanned intakes, and is generally carried out when the potential for intakes is essentially continuous as a result of normal operations, that is, when intakes could occur at any time during normal operations. Because routine measurements are carried out at predetermined times, some assumptions are made about the time and pattern of intakes (e.g., acute vs. chronic, acute at the midpoint in the monitoring interval).</p>  <p>Routine monitoring programs should ensure that annual CEDs to workers of 1 mSv or more do not go undetected. The licensee should therefore identify which workers have a reasonable probability of receiving:</p>
<ul>
<li>an annual CED (i.e., resulting from all occupational intakes of radionuclides in one year) up to 1 mSv (non NEWs)</li>
<li>an annual CED greater than 1 mSv and a total annual effective dose (i.e., the sum of the annual effective dose from external sources and the annual CED) up to 5 mSv (NEWs participating in a routine bioassay program, but not necessarily provided by a licensed dosimetry service)</li>
<li>an annual CED greater than 1 mSv and a total annual effective dose greater than 5 mSv (NEWs participating in a routine bioassay program and for whom measurements are provided by a licensed dosimetry service) (RPR, section 8)</li>
</ul>  <p>In some circumstances, the probability of exceeding 1 mSv per year may be assessed on the basis of the activity handled by the worker, the type of radionuclides involved, the physical and chemical form of the radionuclides, the type of containment used, and the nature of the operations performed. When one type of radionuclide is handled daily (i.e., approximately 250 days per year), workers handling the activities in table 6 should participate in a bioassay program. Note that in order for a decision to be made on participation, bioassay monitoring results from over at least a two-year period may supersede the data in table 6.</p>  <p>Workers who do not have a reasonable probability of exceeding a CED of 1 mSv/year should also be considered for routine monitoring. However, the licensee may ascertain doses to these workers by estimation, under paragraph 5(2)(b) of the RPR "if the time and resources required for direct measurement as a result of monitoring outweigh the usefulness of ascertaining the amount of exposure and doses using that method".</p>  <p>The basis for the values in table 6 is presented in appendix B, "Assessing the Activity Handled for Selecting Participants in a Routine Intake Monitoring Program", and may be used to derive site-specific values. Appendix B defines parameters needed to define the potential intake fraction (PIF). Given a particular scenario of intake, the value ALI/PIF represents the activity handled per day of operation that could result in an annual intake equal to the ALI, consequently resulting in a CED of 20 mSv per year. The criterion set for the bioassay participation is 1 mSv. Therefore, the data shown in table 6 represent the quantity ALI / (20 &times; PIF).</p>
<p><strong>Table 6: Activity handled daily throughout the period of one year, above which routine bioassay is recommended</strong></p>  <table className="">
<tr>
<th className="text-center" rowspan="2">Confinement</th>
<th colSpan="3">Volatility</th>
</tr>
<tr>
<th>Gases and volatile liquids</th>
<th className="text-center">Powders</th>
<th>Non-volatile liquids and solids</th>
</tr>
<tr>
<td>None</td>
<td className="text-center">&ge; 2 &times; ALI</td>
<td className="text-center">&ge; 20 &times; ALI</td>
<td className="text-center">&ge; 200 &times; ALI</td>
</tr>
<tr>
<td>Fume hood</td>
<td className="text-center">&ge; 200 &times; ALI</td>
<td className="text-center">&ge; 2,000 &times; ALI</td>
<td className="text-center">&ge; 20,000 &times; ALI</td>
</tr>
<tr>
<td>Glovebox</td>
<td className="text-center">&ge; 20,000 &times; ALI</td>
<td className="text-center">&ge; 200,000 &times; ALI</td>
<td className="text-center">&ge; 2,000,000 &times; ALI</td>
</tr>
<tr>
<td>Sealed vials and syringes</td>
<td className="text-center">&ge; 50 &times; ALI</td>
<td className="text-center">Not applicable</td>
<td className="text-center">&ge; 10,000 &times; ALI</td>
</tr>  </table>
<p>When radionuclides are handled less frequently than daily, the values in table 6 may be modified following the method in appendix B.</p>  <p>Bioassay is also recommended for workers who are required to wear respiratory protection equipment specifically to limit the intake of radionuclides.</p>  <p>The category "Sealed vials and syringes" in table 6 applies to sources that meet the following conditions:</p>
<ul>
<li>they are handled exclusively in sealed vials and syringes</li>
<li>they have a radiological half-life of less than seven days</li>
<li>the handling of radioactivity is more or less uniform throughout the year</li>
<li>the radioactive material is not aerosolized, or boiled in an open or vented container</li>
<li>the radioactive material is in the form of a dilute liquid solution</li>
<li>the radioactive material is contained in a multi-dose vial that is never opened, and amounts are withdrawn only into hypodermic syringes for immediate injection into another multi-dose vial, or another form of closed containment, or into patients</li>
<li>contamination control measures are effective, and routine surface monitoring is being carried out where the sealed vials and syringes are handled</li>
</ul>  <p>The "Sealed vials and syringes" category is intended to encompass those compounds for which routine bioassay monitoring periods may be impractical due to their short half-life, with additional consideration given to the added containment afforded by the vial as described in item 6 above. Compounds may be classified as "Sealed vials and syringes" provided that the potential for intake is controlled by effective contamination control and the radiation protection measures are effective.</p>  <p>The data in table 6 are provided as generalizations and may not cover all scenarios. In addition, where there are mechanical or other physical barriers in place to protect the worker (such as gloveboxes and fume hoods), the barriers should be appropriate for the radioisotope being handled and they should be used as intended and maintained in a proper manner.</p>  <p>When more than one type of radionuclide is handled in one or more chemical forms, or when more than one process can lead to intakes (e.g., involving various containment types or occupancy factors), the following steps should be followed to determine if a worker should participate in a bioassay program:</p>
<ol>
<li>calculate the ratio, r<sub>j</sub>, of the quantity of one radionuclide, j, handled in daily operation, to the maximum quantity of that radionuclide that can be handled in daily operation above which bioassay is recommended, from table 6</li>
<li>calculate this ratio for all <em>N</em> radionuclides handled</li>
<li>add all of the ratios calculated in steps 1 and 2 above:</li>
</ol>
<table className=" table-border-none">  <tr>  	<td className="text-center text-center" width="20">(8)</td>  	<td width="70" className="text-center">  <math display=&#39;block&#39;>   <semantics>
<mrow>
<mtext>Bioassay&#x00A0;Threshold</mtext><mo stretchy=&#39;false&#39;>(</mo><msub>
<mi>B</mi>
<mi>T</mi>
</msub>
<mo stretchy=&#39;false&#39;>)</mo><mo>=</mo><mstyle displaystyle=&#39;true&#39;>
<munderover>
<mo>&#x2211;</mo>
<mi>j</mi>
<mi>N</mi>
</munderover>
<mrow>
<msub>
<mi>r</mi>
<mi>j</mi>
</msub>
</mrow>
</mstyle></mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaaeOqaiaabM
gacaqGVbGaaeyyaiaabohacaqGZbGaaeyyaiaabMhacaqGGaGaaeiv
aiaabIgacaqGYbGaaeyzaiaabohacaqGObGaae4BaiaabYgacaqGKb
GaaiikaiaadkeadaWgaaWcbaGaamivaaqabaGccaGGPaGaeyypa0Za
aabCaeaacaWGYbWaaSbaaSqaaiaadQgaaeqaaaqaaiaadQgaaeaaca
WGobaaniabggHiLdaaaa@5074@
</annotation>   </semantics>  </math>  	</td>  	</tr>  </table>
<p>Bioassay should be performed for any radionuclide for which r<sub><em>j</em></sub> &ge; 1. If B<sub>T</sub> &ge; 1, and bioassay should be performed for any radionuclide, chemical form or process for which r<sub><em>j</em></sub> &ge; 0.3. In situations where B<sub>T</sub> &lt; 1 but any of the r<sub><em>j</em></sub> values are greater than 0.3, the licensee may choose to monitor the worker for these radionuclides. When assessing the need to carry out routine intake monitoring, radioactive impurities that may be present in a product, such as a radiopharmaceutical, should be included in the assessment.</p>  <p>Baseline assessments should be realized before performing work requiring routine bioassay monitoring. This assessment determines the worker&rsquo;s exposure to radionuclides due to previous work experience, medical procedures or natural radioactivity in the body.</p>  <p>The purpose of a baseline bioassay assessment is to assess the amount of radionuclides in a worker&rsquo;s body as a result of intakes prior to work requiring routine bioassay monitoring.</p>   <p>Baseline bioassay assessment is appropriate for any of the following circumstances:</p>
<ol>
<li>The worker has had prior exposure to the pertinent radionuclides and the effective retention in the body might exceed the derived activity (DA) (see section 9.1.6)</li>
<li>The exposure history is missing or inconclusive</li>
<li>The worker will be working with radionuclides that may be detectable in bioassay due to non-occupational sources (e.g., radionuclides administered for medical purposes)</li>
</ol>
<h4>9.1.2	Special bioassay monitoring</h4>  <p>Special bioassay monitoring is performed in response to a particular circumstance, such as a known or suspected intake of radionuclides due to an abnormal incident in the workplace. Special bioassays are also termed "non-routine" or "ad hoc". Special bioassay monitoring may be triggered by either a routine monitoring result or an abnormal incident suggesting that an action level (as defined in the RPR) or the dose limit may have been exceeded. Special bioassays may also be triggered by a licensee-defined criterion such as a worker&rsquo;s CED exceeding 1 mSv. In such cases the dose should be ascertained on the basis of case-specific data. Guidance on special bioassay monitoring can be found in appendix C.</p>
<h4>9.1.3	Confirmatory monitoring</h4>  <p>A confirmatory bioassay program is intended to verify whether:</p>
<ul>
<li>assumptions about radiological exposure conditions in the workplace are accurate</li>
<li>protection measures are effective</li>
<li>routine bioassay is required</li>
</ul>  <p>It may involve workplace monitoring or limited individual monitoring of workers who do not meet the criteria for participation in a routine bioassay monitoring program. When workers handle or may be exposed to unsealed radionuclides, but do not meet the criteria for participation in a routine bioassay program, intake monitoring may be assessed as part of a confirmatory monitoring program. The monitoring frequency may be the same as for routine monitoring or may vary if potential exposure to the unsealed radionuclides is infrequent (taking into account the biological half-life of the radionuclides).</p>  <p>In a confirmatory monitoring program, workers submit to <em>in vivo</em> or <em>in vitro</em> bioassay and may involve sampling a fraction of a group of workers. When the results of confirmatory monitoring show that an annual CED of 1 mSv could go undetected without routine monitoring, further measurements should be taken to confirm the intake, and an investigation should be carried out to determine the cause of the unexpected result. If the intake is confirmed, assumptions about radiological exposure conditions in the workplace and the effectiveness of protection measures in place should be reviewed, and the need for involved workers to participate in a routine bioassay program should be re-evaluated. All confirmatory monitoring results should be recorded.</p>  <p>Confirmatory monitoring should be used to review the basis for a routine monitoring program if major changes have been made to the facility or to the operations at the facility. Also, confirmatory monitoring, consisting of using personal air samplers or individual bioassay measurements, should be used to verify that workplace air monitoring results can be considered to be representative.</p>
<h4>9.1.4	Task-related monitoring</h4>  <p>The purpose of task-related monitoring is to provide information about a particular operation or task and may provide a basis for decisions on the conduct of the operation or task. It is typically used for short-term tasks. Task-related monitoring should be conducted as routine monitoring, unless the circumstances of the operation dictate otherwise, for example, if the radionuclides involved may be different or if the probability or potential magnitude of internal exposure may be significantly greater.</p>
<h4>9.1.5 Monitoring interval</h4>  <p>When selecting a routine monitoring frequency, the main factors to be taken into account are:</p>
<ol>
<li>the workplace characteristics</li>
<li>the uncertainty regarding the time of intake</li>
<li>instrument sensitivity</li>
<li>the need for timely information concerning the occurrence of intakes</li>
<li>the effective half-life of the radionuclides for which monitoring is being carried out</li>
</ol>  <p>The routine monitoring frequency should be determined on an a priori basis and should consider workers&rsquo; likely exposures. For each radionuclide in the workplace, the physical and chemical form should be known for both routine and non-routine monitoring. These forms determine the retention and clearance from the respiratory tract following inhalation of each radionuclide, as well as their respective excretion routes and rates. The latter will also guide the selection of appropriate bioassay methods.</p>  <p>Guidance on the selection of lung absorption types for various compounds can be found in ICRP Publication 119, <em>Compendium of Dose Coefficients based on ICRP Publication 60</em> [12]. Details of the International Commission on Radiological Protection (ICRP) human respiratory tract model can be found in ICRP Publication 66, <em>Human Respiratory Tract Model for Radiological Protection</em> [15] and its update [11].</p>   <p>Another factor in selecting a routine monitoring frequency is the uncertainty in the intake estimate, due to the unknown time of intake. Unless evidence exists supporting a chronic intake pattern, routine measurement results should be assessed in such a way that the intake is assumed to have taken place at the midpoint in the monitoring period.</p><p>  Instrument sensitivity has a significant impact on the monitoring frequency. The monitoring frequency should be selected so as to ensure that significant doses are not missed. A dose could be missed if, following an intake, the body content or excretion rate of radionuclides taken into the body was reduced to a level less than the instrument&rsquo;s minimum detectable activity (MDA) during the time between the intake and measurement. The effective half-life is a measure of the rate at which the body content and excretion rate of radionuclides decrease over time after being taken into the body. When practicable, the monitoring period should be such that annual intakes corresponding to a CED of 1 mSv do not go undetected. If this cannot be achieved, workplace monitoring and personal air sampling should be used to supplement intake monitoring. By applying the appropriate metabolic model and assuming a pattern of intake, a suitable monitoring period can be determined.</p>  <p>In order to relate bioassay results to the extrapolated annual dose, the DA has been defined as follows:</p>
<table className=" table-border-none">  <tr>  	<td className="text-center text-center" width="20">(9)</td>  	<td width="70" className="text-center">  <math display=&#39;block&#39;>   <semantics>
<mrow>
<mtext>DA&#x00A0;=&#x00A0;</mtext><mfrac>
<mn>1</mn>
<mrow>
<mn>20</mn></mrow>
</mfrac>
<mtext>ALI</mtext><mfrac>
<mtext>T</mtext>
<mrow>
<mn>365</mn></mrow>
</mfrac>
<mi>m</mi><mrow><mo>(</mo>
<mrow>
<mfrac>
<mtext>T</mtext>
<mn>2</mn>
</mfrac>
</mrow>
<mo>)</mo></mrow></mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaaeiraiaabg
eacaqGGaGaaeypaiaabccadaWcaaqaaiaaigdaaeaacaaIYaGaaGim
aaaacaqGbbGaaeitaiaabMeadaWcaaqaaiaabsfaaeaacaaIZaGaaG
OnaiaaiwdaaaGaamyBamaabmaabaWaaSaaaeaacaqGubaabaGaaGOm
aaaaaiaawIcacaGLPaaaaaa@4568@
</annotation>   </semantics>  </math>
</td>  	</tr>  </table>
<table className="table-border-none">  <tr>
<td>Where:</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>  </tr>  <tr>
<td className="text-center">T</td>
<td>=</td>
<td>the monitoring period, in days</td>  </tr>  <tr>
<td className="text-center"><em>m</em>(T/2)</td>
<td>=</td>
<td>the fraction of the intake that is retained in a tissue, organ or the whole body, or excreted from the body at the midpoint in the monitoring period</td>  </tr>  <tr>
<td className="text-center">ALI</td>
<td>=</td>
<td>the fraction of the intake that is retained in a tissue, organ or the whole body, or excreted from the body at the midpoint in the monitoring period  annual limit on intake</td>  </tr>  </table>
<p>Values of <em>m</em>(T/2) should be obtained based on current<sup id="fnb10-ref"><a className="fn-lnk" href="#fnb10"><span className="wb-inv">Footnote </span>10</a></sup>  ICRP biokinetic models.</p>   <p>Since the uncertainty due to the unknown time of intake relative to the time of monitoring should be less than a factor of 3, the monitoring interval should also satisfy the following condition</p>
<table className=" table-border-none">  <tr>  	<td className="text-center text-center" width="20">(10)</td>  	<td width="70" className="text-center">  <math display=&#39;block&#39;>   <semantics>
<mrow>
<mfrac>
<mrow>
<mi>m</mi><mrow><mo>(</mo>
<mrow>
<mi>T</mi><mo>/</mo><mn>2</mn></mrow>
<mo>)</mo></mrow></mrow>
<mrow>
<mi>m</mi><mo stretchy=&#39;false&#39;>(</mo><mi>T</mi><mo stretchy=&#39;false&#39;>)</mo></mrow>
</mfrac>
<mo>&#x2264;</mo><mn>3</mn></mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaWaaSaaaeaaca
WGTbWaaeWaaeaacaWGubGaai4laiaaikdaaiaawIcacaGLPaaaaeaa
caWGTbGaaiikaiaadsfacaGGPaaaaiabgsMiJkaaiodaaaa@405F@
</annotation>   </semantics>  </math>  	</td>  	</tr>  </table>
<p>When the above condition is met, the recommended maximum monitoring period is taken as the time at which the DA is equal to the MDA. If exposures to more than one radionuclide may occur, the monitoring period should be determined so that an annual CED of 1 mSv from all radionuclides can reliably be detected and assessed. The MDA is defined as follows (when the sample or subject count time is different that the background count time). For further information, consult <em>Health Physics</em> article titled "Minimum detectable Activity When Background is Counted Longer than Sample" [18]:</p>
<table className=" table-border-none">  <tr>  	<td className="text-center text-center" width="20">(11)</td>  	<td width="70" className="text-center">  <math display=&#39;block&#39;>   <semantics>
<mrow>
<mi>M</mi><mi>D</mi><mi>A</mi><mo>=</mo><mfrac>
<mrow>
<mroot>
<mrow>
<msub>
<mi>R</mi>
<mi>b</mi>
</msub>
<msub>
<mi>t</mi>
<mi>g</mi>
</msub>
<mo stretchy=&#39;false&#39;>(</mo><mn>1</mn><mo>+</mo><mfrac>
<mrow>
<msub>
<mi>t</mi>
<mi>g</mi>
</msub>
</mrow>
<mrow>
<msub>
<mi>t</mi>
<mi>b</mi>
</msub>
</mrow>
</mfrac>
<mo stretchy=&#39;false&#39;>)</mo></mrow>
<mrow>
<mn>3</mn><mo>+</mo><mn>3.29</mn></mrow>
</mroot>
</mrow>
<mrow>
<mi>&#x03B5;</mi><mi>K</mi><msub>
<mi>t</mi>
<mi>g</mi>
</msub>
</mrow>
</mfrac>
</mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaamytaiaads
eacaWGbbGaeyypa0ZaaSaaaeaadaGcbaqaaiaadkfadaWgaaWcbaGa
amOyaaqabaGccaWG0bWaaSbaaSqaaiaadEgaaeqaaOGaaiikaiaaig
dacqGHRaWkdaWcaaqaaiaadshadaWgaaWcbaGaam4zaaqabaaakeaa
caWG0bWaaSbaaSqaaiaadkgaaeqaaaaakiaacMcaaSqaaiaaiodacq
GHRaWkcaaIZaGaaiOlaiaaikdacaaI5aaaaaGcbaGaeqyTduMaam4s
aiaadshadaWgaaWcbaGaam4zaaqabaaaaaaa@4DED@
</annotation>   </semantics>  </math>  	</td>  	</tr>  </table>
<table className="table-border-none">  <tr>
<td>In the above equation:</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>  </tr>  <tr>
<td className="text-center">K</td>
<td>=</td>
<td>a correction factor</td>  </tr>  <tr>
<td className="text-center">R<sub>b</sub></td>
<td>=</td>
<td>the background count rate</td>  </tr>  <tr>
<td className="text-center">t<sub>g</sub></td>
<td>=</td>
<td>the gross count time (the sample or individual count time)</td>  </tr>  <tr>
<td className="text-center">t<sub>b</sub></td>
<td>=</td>
<td>the background count time</td>  </tr>  <tr>
<td className="text-center">&epsilon;</td>
<td>=</td>
<td>the counting efficiency</td>  </tr>  </table>
<p>For <em>in vitro</em> bioassay:</p>
<table className=" table-border-none">  <tr>  	<td className="text-center text-center" width="20">(12)</td>  	<td width="70" className="text-center">  <math display=&#39;block&#39;>   <semantics>
<mrow>
<msup>
<mrow>
<mtext>K=VYe</mtext></mrow>
<mrow>
<mo>&#x2212;</mo><mi>&#x03BB;</mi><mi>&#x0394;</mi><mi>t</mi></mrow>
</msup>
</mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaae4saiaab2
dacaqGwbGaaeywaiaabwgadaahaaWcbeqaaiabgkHiTiabeU7aSjab
fs5aejaadshaaaaaaa@3F4E@
</annotation>   </semantics>  </math>  	</td>  	</tr>  </table>
<table className="table-border-none">  <tr>
<td>Where:</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>  </tr>  <tr>
<td className="text-center">V</td>
<td>=</td>
<td>the sample size in units of mass or volume, depending on the sample type</td>  </tr>  <tr>
<td className="text-center">Y</td>
<td>=</td>
<td><p className="mrgn-tp-0">the fractional chemical yield, when applicable (no units)<br />
(note: if not applicable, Y=1)</p></td>  </tr>  <tr>
<td className="text-center">&lambda;</td>
<td>=</td>
<td>the radioactive decay constant of the radionuclide, in 1/seconds</td>  </tr>  <tr>
<td className="text-center">&Delta;t</td>
<td>=</td>
<td>the time between sample collection and counting, in seconds</td>  </tr>  </table>
<p>For <em>in vivo</em> bioassay, K is the correction for self-absorption when appropriate.</p>  <p>In some cases, the best available monitoring methods may still be unable to reliably detect intakes corresponding to 1 mSv per year. In these circumstances it is useful to determine the maximum dose that could be missed if an intake occurred at the start of each monitoring period. Such an approach provides a useful perspective for some internal hazards that are difficult to detect but can become overly conservative, particularly when there are several monitoring periods per year.</p>  <p>Using this method for monitoring period determination, a recommended monitoring period of one year could be possible for some radionuclides. However, most individuals&rsquo; retention and excretion rates tend to vary from the model on which the DA values are based. Also, timely information about the occurrence of intakes is needed. There should be a balance between using bioassay as an intake indicator and using bioassay for dose assessment purposes. To account for this, a monitoring period shorter than one year may be selected depending on other types of monitoring in place (such as workplace air monitoring) and the practicability of carrying out the bioassay measurements. ISO 20553:2006, <em>Radiation Protection &ndash; Monitoring of workers occupationally exposed to a risk of internal contamination with radioactive material</em> [19], provides suggestions regarding monitoring frequency for various radionuclides and their typical chemical forms.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="9.2"></div>
<h3 id="sec9-2">9.2	Air monitoring to ascertain worker dose</h3>  <p>Airborne radioactive material refers to any suspension in air of radioactive material. Their characteristics or concentrations may be such that there is no practical means to determine dose through bioassay. Airborne radioactive materials exist in various physical and chemical forms including dust, gas, fumes or vapours. This section applies to measurements of radioactive material in air that are used for dosimetry purposes.</p>   <p>Workplace monitoring methods that may be used to monitor individual intakes of radionuclides include personal air sampling and static air sampling. A personal air sampler (PAS) is a portable device that is worn by an individual. It includes a sampling head containing an appropriate collection medium (e.g., filter), a calibrated air pump, an air flow rate control and a battery. The sampling head should be worn on the upper trunk and in the individual&rsquo;s breathing zone, which is defined as being within 30 cm of the individual&rsquo;s head, NUREG-1400, <em>Air Sampling in the Workplace</em> [20]. Air is drawn through the filter by a calibrated pump, also worn by the worker. The activity on the filter should be measured at the end of the wearing period. Static (or fixed-location) air samplers are used to monitor the concentration of radionuclides in the workplace air. A static air sampler (SAS) may consist of a grab sampling device or a continuous monitor. A SAS consists of an appropriate collection medium, an air pump and air flow adjustment. The collection medium may be analyzed in a laboratory. However, some SAS provide real-time monitoring and may be equipped with an alarm set to sound at a predetermined activity or collection rate.</p>  <p>SAS and PAS results should be used with caution, as studies have shown that there is a poor correlation between PAS and SAS results, with SAS results generally being an order of magnitude less than PAS results. Studies have also shown a poor correlation between SAS and bioassay results [11]. For further information, consult ICRP Publication 130, <em>Occupational Intakes of Radionuclides: Part I</em>. PAS and SAS measurements may be used as part of a comprehensive workplace monitoring program, as they may provide early identification of possible intakes. Therefore, a personal air sampling program should be designed to detect potential abnormal intakes and to trigger special bioassay measurements. It may also be used to identify potential problem areas with increased airborne radioactivity through review and trending of the applicable static air sampling data.</p>  <p>The concentrations of airborne radioactive material in air are measured in activity or mass per unit volume of that atmosphere (e.g., Bq/m<sup>3</sup>). The intake (e.g., Bq) from this concentration is calculated by multiplying the concentration by a defined breathing rate (e.g., 1.2 m<sup>3</sup>/h) and the occupancy time (h). Alternatively, exposure can be determined in Bq h/m<sup>3</sup> and the intake will be this value multiplied by the breathing rate. The concentration of airborne radioactive material may also be expressed in units of derived air concentration (DAC). Similarly, exposure may be expressed in terms of DAC-hours.</p>  <p>The flow rate of both personal and static air sampling pumps, where used, should not deviate by more than five percent from the value used to calculate concentration. The airflow rate should be verified each day of air sampler use. If the airflow rate changes by more than &plusmn;10% during the collection of a sample, the flow rate used for dosimetry purposes should be the average of the initial and final airflow rates.</p>   <p>Air samplers should have a means of ascertaining the volume of air sampled. Airflow meters should be calibrated at least annually, after repairs or modifications have been done to the meter or if it may have been damaged. In addition, at the time of airflow calibration, a verification of air samplers and sampling lines should be carried out to ensure there is no in-leakage of air upstream of the airflow measurement point. The calibration methods should be based on a current method recommended by the American Conference of Governmental Industrial Hygienists or the U.S. Occupational Health and Safety Administration. The method, instrument unique identifier and date of calibration should be documented.</p>  <p>The licensee should demonstrate that the air sampled is representative of breathing zone air whenever one or more of the following conditions exist: (i) personal air samplers are not worn within 30 cm of the worker&rsquo;s head, (ii) the workers&rsquo; doses will be ascertained on the basis of air monitoring, and/or (iii) annual exposures are likely to exceed 100 DAC-hours (or the annual CED resulting for inhaled radionuclides is likely to exceed 1 mSv).</p>  <p>This may be accomplished by confirmatory monitoring using bioassay. In order for the air sampling to be considered representative of breathing zone air, the ratio of intakes calculated from air monitoring to the intakes calculated from confirmatory bioassays, averaged over all workers participating in the confirmatory monitoring, should be more than 0.7. The same ratio for each individual worker should be more than 0.5. For further information, consult NUREG-1400, <em>Air Sampling in the Workplace</em> [20].</p>  <p>Air sampler particle collection efficiency should be insensitive to size, to the greatest extent possible. This excludes the use of cyclones to collect and measure airborne radioactive material.</p>
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
<h2 id="sec10">10. Interpreting Monitoring Results</h2>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="10.1"></div>
<h3 id="sec10-1">10.1	Administrative levels</h3>  <p>Administrative levels, also called investigative levels, are values to which measurement quantities from an individual or workplace monitoring program are compared. When such measurement quantities exceed an administrative level, specified actions should be taken.</p>  <p>Administrative levels signal potential intakes by workers and allow for a graded response to such intakes. They are not intended to be a regulatory limit per se and may be expressed as fractions of the appropriate ALI or committed effective dose (CED). When setting administrative levels, the contribution from other radionuclides as well as external exposures should be taken into account.</p>  <p>Because bioassay monitoring programs do not directly measure intakes or CED, administrative levels expressed in terms of the quantity that is measured are generally a more useful quantity. A bioassay result exceeding an administrative level indicates a departure from normal conditions and the need to take further action. For routine bioassay programs, administrative levels may be based on an assumption of intake at the midpoint in the monitoring period.</p>  <p>For some radionuclides and types of bioassay, non-occupational sources may cause typical results to exceed the analytical decision level and an administrative level. If bioassay results normally or often exceed an administrative level due to non-occupational sources, such as from naturally occurring radionuclides, the administrative level may be increased if expected bioassay results due to non-occupational sources are known (a study using a control group with similar non-occupational exposure but no potential for occupational exposure may be used for this purpose). If non-occupational levels exceed the administrative level, then alternate methods of intake monitoring should be used if possible.</p>  <p>Licensees may choose to adopt administrative levels depending on the circumstances of their programs. Furthermore, an administrative level should be established to ensure intakes of soluble uranium compounds approaching the threshold for chemical toxicity are investigated.</p>  <p>An administrative level may be established so that intakes that lead to a CED exceeding 1 mSv (or exceeding the detection limit if the latter results in a CED &gt; 1 mSv) are investigated. This is appropriate in cases where the probability of more than one such intake in a year is low. When the probability is higher, the administrative level should be based on an extrapolated annual dose. An example of such an administrative level is the derived investigational level (DIL), which may be defined as:</p>
<table className=" table-border-none">  <tr>  	<td className="text-center text-center" width="20">(13)</td>  	<td width="70" className="text-center">  <math display=&#39;block&#39;>   <semantics>
<mrow>
<mi>D</mi><mi>I</mi><mi>L</mi><mtext>&#x00A0;=&#x00A0;</mtext><mi>I</mi><mi>L</mi><mrow><mo>(</mo>
<mrow>
<mfrac>
<mi>T</mi>
<mrow>
<mn>365</mn></mrow>
</mfrac>
</mrow>
<mo>)</mo></mrow><mi>m</mi><mrow><mo>(</mo>
<mrow>
<mfrac>
<mi>T</mi>
<mn>2</mn>
</mfrac>
</mrow>
<mo>)</mo></mrow></mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaamiraiaadM
eacaWGmbGaaeiiaiaab2dacaqGGaGaamysaiaadYeadaqadaqaamaa
laaabaGaamivaaqaaiaaiodacaaI2aGaaGynaaaaaiaawIcacaGLPa
aacaWGTbWaaeWaaeaadaWcaaqaaiaadsfaaeaacaaIYaaaaaGaayjk
aiaawMcaaaaa@44D1@
</annotation>   </semantics>  </math>  	</td>  	</tr>  </table>
<table className="table-border-none">  <tr>
<td>where:</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>  </tr>  <tr>
<td className="text-center">IL</td>
<td>=</td>
<td>the intake leading to the annual CED above which an investigation should be carried out, that is, an investigational level (IL)</td>  </tr>  <tr>
<td className="text-center">T</td>
<td>=</td>
<td>the monitoring period, in days</td>  </tr>  <tr>
<td className="text-center" nowrap><em>m</em>(T/2)</td>
<td>=</td>
<td>the fraction of the intake that is retained in a tissue, organ or the whole body, or excreted from the body, at the end of the monitoring period, when an acute intake has occurred at the midpoint in the monitoring period</td>  </tr>  </table>
<p>The IL should not exceed &frac14; &times; ALI (i.e., a CED of 5 mSv), and operational experience should be considered in its selection so that the IL is chosen to be less than 5 mSv. However, if the DIL is less than the detection limit, an investigation should be carried out whenever the detection limit is exceeded.</p>  <p>To account for the reduced dose limit for pregnant workers, a DIL for pregnant workers should be established, as described above, on the basis of a fraction of the 4 mSv dose limit for NEWs. The pregnant worker dose limit is 4 mSv for the balance of the pregnancy (that is, from the time the worker informs the licensee). Given conservative assumptions (for example, that the pregnancy is declared immediately), ensuring that the pregnant worker&rsquo;s dose is &lt; 0.4 mSv per month helps to ensure the 4 mSv limit is not exceeded. Consequently, a DIL for pregnant workers, DIL<sub>PW</sub>, may be set as:</p>
<table className=" table-border-none">  <tr>  	<td className="text-center text-center" width="20">(14)</td>  	<td width="70" className="text-center">  <math display=&#39;block&#39;>   <semantics>
<mrow>
<mi>D</mi><mi>I</mi><msub>
<mi>L</mi>
<mrow>
<mi>P</mi><mi>W</mi></mrow>
</msub>
<mtext>&#x00A0;=&#x00A0;0</mtext><mtext>.02</mtext><mi>A</mi><mi>L</mi><mi>I</mi><mrow><mo>(</mo>
<mrow>
<mfrac>
<mi>T</mi>
<mrow>
<mn>30</mn></mrow>
</mfrac>
</mrow>
<mo>)</mo></mrow><mi>m</mi><mrow><mo>(</mo>
<mrow>
<mfrac>
<mi>T</mi>
<mn>2</mn>
</mfrac>
</mrow>
<mo>)</mo></mrow></mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaamiraiaadM
eacaWGmbWaaSbaaSqaaiaadcfacaWGxbaabeaakiaabccacaqG9aGa
aeiiaiaabcdacaqGUaGaaeimaiaabkdacaWGbbGaamitaiaadMeada
qadaqaamaalaaabaGaamivaaqaaiaaiodacaaIWaaaaaGaayjkaiaa
wMcaaiaad2gadaqadaqaamaalaaabaGaamivaaqaaiaaikdaaaaaca
GLOaGaayzkaaaaaa@4985@
</annotation>   </semantics>  </math>  	</td>  	</tr>  </table>
<p>When intake monitoring detects only one radionuclide, bioassay results that exceed the DA or the MDA, whichever is greater, should be verified by recounting the sample or subject before ascertaining and recording the CED. Furthermore, if the bioassay result is equal to or greater than the DIL or DIL<sub>PW</sub>, an investigation should be carried out to identify and correct the cause of the intake and prevent recurrence.</p>   <p>In cases of intakes of more than one radionuclide, a DA should be calculated for the mixture of radionuclide. Alternatively, a DA should be calculated to represent the extrapolated annual dose from all radionuclides combined. The latter approach may be used when monitoring is done using one radionuclide as an indicator for a mixture of radionuclides.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="10.2"></div>
<h3 id="sec10-2">10.2	Accuracy of bioassay results</h3>  <p>Measurement uncertainties arise from counting statistics and other sources that depend on the monitoring method. In the case of in vivo measurements, measurement uncertainties may arise from such sources as variations in the detector positioning, in the background count rate, in subject body size and in the distribution of activity within the body. In the case of <em>in vitro</em> measurements, such uncertainties can arise from the measurement of the sample volume or mass, pipetting errors, the use of tracers to determine chemical yield, and other causes.</p>  <p>Measurement uncertainties resulting from counting statistics, which can be described by the Poisson distribution, are referred to as Type A uncertainties. All other uncertainties are referred to as Type B uncertainties. The overall uncertainty over an individual monitoring result may be described in terms of a log-normal distribution. The geometric standard deviation of this distribution is called the scattering factor (SF). For further information, consult EURADOS Report 2013-01, <em>IDEAS Guidelines (Version 2) for the Estimation of Committed Doses from Incorporation Monitoring Data</em> [21].</p>  <p>For Type A uncertainties, the SF may be calculated as follows:</p>
<table className=" table-border-none">  <tr>  	<td className="text-center text-center" width="20">(15)</td>  	<td width="70" className="text-center">  <math display=&#39;block&#39;>   <semantics>
<mrow>
<mi>S</mi><msub>
<mi>F</mi>
<mi>A</mi>
</msub>
<mo>=</mo><msup>
<mi>e</mi>
<mrow>
<mrow><mo>[</mo> <mrow>
<mfrac>
<mrow>
<msub>
<mi>&#x03C3;</mi>
<mi>A</mi>
</msub>
</mrow>
<mi>M</mi>
</mfrac>
</mrow> <mo>]</mo></mrow></mrow>
</msup>
</mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaam4uaiaadA
eadaWgaaWcbaGaamyqaaqabaGccqGH9aqpcaWGLbWaaWbaaSqabeaa
daWadaqaamaalaaabaGaeq4Wdm3aaSbaaWqaaiaadgeaaeqaaaWcba
GaamytaaaaaiaawUfacaGLDbaaaaaaaa@4047@
</annotation>   </semantics>  </math>  	</td>  	</tr>  </table>
<p>In the above equation, &sigma;<sub>A</sub> is the Type A uncertainty of measurement result M.</p>  <p>The SF for Type B uncertainties may be calculated as follows:</p>
<table className=" table-border-none">  <tr>  	<td className="text-center text-center" width="20">(16)</td>  	<td width="70" className="text-center">  <math display=&#39;block&#39;>   <semantics>
<mrow>
<mi>S</mi><msub>
<mi>F</mi>
<mi>B</mi>
</msub>
<mo>=</mo><msup>
<mi>e</mi>
<mrow>
<mrow><mo>[</mo> <mrow>
<mfrac>
<mrow>
<msub>
<mi>&#x03C3;</mi>
<mrow>
<msub>
<mi>C</mi>
<mrow>
<mi>r</mi><mi>n</mi></mrow>
</msub>
</mrow>
</msub>
</mrow>
<mrow>
<msub>
<mi>C</mi>
<mrow>
<mi>r</mi><mi>n</mi></mrow>
</msub>
</mrow>
</mfrac>
</mrow> <mo>]</mo></mrow></mrow>
</msup>
</mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaam4uaiaadA
eadaWgaaWcbaGaamOqaaqabaGccqGH9aqpcaWGLbWaaWbaaSqabeaa
daWadaqaamaalaaabaGaeq4Wdm3aaSbaaWqaaiaadoeadaWgaaqaai
aadkhacaWGUbaabeaaaeqaaaWcbaGaam4qamaaBaaameaacaWGYbGa
amOBaaqabaaaaaWccaGLBbGaayzxaaaaaaaa@446D@
</annotation>   </semantics>  </math>  	</td>  	</tr>  </table>
<p>In the above equation, C<sub>rn</sub> is the normalization factor, which is the reciprocal of the efficiency, and &sigma;<sub>C<sub>rn</sub></sub> is the uncertainty on C<sub>rn</sub>. Typical values of SF for Type A and B uncertainties are shown in tables 7 and 8, EURADOS Report 2013-01,  IDEAS Guidelines (Version 2) for the Estimation of Committed Doses from Incorporation Monitoring Data [21]. The total uncertainty may be calculated using the following equation:</p>
<table className=" table-border-none">  <tr>  	<td className="text-center text-center" width="20">(17)</td>  	<td width="70" className="text-center">  <math display=&#39;block&#39;>   <semantics>
<mrow>
<mi>S</mi><mi>F</mi><mo>=</mo><msup>
<mi>e</mi>
<mrow>
<mrow><mo>[</mo> <mrow>
<msqrt>
<mrow>
<mstyle displaystyle=&#39;true&#39;>
<munder>
<mo>&#x2211;</mo>
<mi>i</mi>
</munder>
<mrow></mrow>
</mstyle><msup>
<mrow>
<mi>ln</mi></mrow>
<mn>2</mn>
</msup>
<mo stretchy=&#39;false&#39;>(</mo><mi>S</mi><msub>
<mi>F</mi>
<mi>i</mi>
</msub>
<mo stretchy=&#39;false&#39;>)</mo></mrow>
</msqrt>
</mrow> <mo>]</mo></mrow></mrow>
</msup>
</mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaam4uaiaadA
eacqGH9aqpcaWGLbWaaWbaaSqabeaadaWadaqaamaakaaabaWaaabu
aeaaaWqaaiaadMgaaeqaoiabggHiLdWcciGGSbGaaiOBamaaCaaame
qabaGaaGOmaaaaliaacIcacaWGtbGaamOramaaBaaameaacaWGPbaa
beaaliaacMcaaWqabaaaliaawUfacaGLDbaaaaaaaa@45E8@
</annotation>   </semantics>  </math>  	</td>  	</tr>  </table>  <br />
<p><strong>Table 7: Typical values of Type A and Type B uncertainties for <em>in vivo</em> measurements</strong></p>  <table className="">
<tr>
<th rowspan="2">&nbsp;</th>
<th colSpan="3">Scattering factor (SF)</th>
</tr>
<tr>
<th>Photon energies less than 20 keV</th>
<th>Photon energies from 20 keV to 100 keV</th>
<th>Photon energies greater than 100 keV</th>
</tr>
<tr>
<td>Type A uncertainties</td>
<td className="text-center">1.5</td>
<td className="text-center">1.3</td>
<td className="text-center">1.07</td>
</tr>
<tr>
<td>Type B uncertainties</td>
<td className="text-center">2.06</td>
<td className="text-center">1.25</td>
<td className="text-center">1.15</td>
</tr>
<tr>
<td>Total SF</td>
<td className="text-center">2.3</td>
<td className="text-center">1.4</td>
<td className="text-center">1.2</td>
</tr>  </table>  <br />
<p><strong>Table 8: Typical values of Type B uncertainties for <em>in vitro</em> measurements</strong></p>  <table className="">
<tr>
<th>Quantity</th>
<th>Scattering factor (SFB)</th>
</tr>
<tr>
<td>True 24-hour urine sample</td>
<td className="text-center">1.1</td>
</tr>
<tr>
<td>Activity concentration of tritiated water in urine</td>
<td className="text-center">1.1</td>
</tr>
<tr>
<td>Simulated 24-hour urine, creatinine, volume or specific gravity normalized</td>
<td className="text-center">1.6</td>
</tr>
<tr>
<td>Spot urine sample (a single void used to estimate the 24- hour excretion rate)</td>
<td className="text-center">2</td>
</tr>
<tr>
<td>Fecal 24-hour sample</td>
<td className="text-center">3</td>
</tr>
<tr>
<td>Fecal 72-hour sample</td>
<td className="text-center">2</td>
</tr>  </table>
<p>In designing and setting up any bioassay monitoring program, it is important to consider the accuracy of the instrumentation relative to the measurement that has to be made. The complete measurement system should be such that any error in the final measurement would have a minor influence on the overall accuracy of the estimated radiation dose received by the worker. The following considerations should be included in the evaluation of detection instrument accuracy and measurement methodology:</p>
<ol>
<li>net statistical counting error:<br />
This includes the statistical error in the bioassay count and the statistical error in the measurement of the background count; the background count time should be appropriate for the standard, sample or subject.</li>
<li>error caused by variations in counting geometry:<br />
This should include allowances for physical variations in the subjects or samples being counted, particularly as related to the specific counting equipment being used.</li>
<li>error introduced by the attenuation of the emitted radiation by overlying tissue during in vivo counting:<br />
The effect of overlying tissue should be considered where the gamma emission of a nuclide in question is less than 200 keV, or where bremsstrahlung from beta emissions are being counted; this requires the estimation of the average depth and density of the overlying tissue (e.g., the chest wall thickness), which may vary significantly from one individual to another.</li>
<li>instrument calibration with respect to the isotope being measured in a geometry that is relevant to the actual measurement:<br />
The response of the bioassay instrument should be calibrated with respect to the isotope of interest, and a regular quality control program should be in place to ensure that this calibration is constantly maintained &ndash; frequent internal checks using a long lived radioactive source should be performed on a regular basis to confirm that the detector response is constant over time and that the instrument is functioning properly.</li>
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
<div id="11"></div>
<h2 id="sec11">11. Ascertaining the Committed Effective Dose</h2>  <p>When the time between the intake and a single bioassay measurement is known, the intake should be calculated as follows:</p>
<table className=" table-border-none">  <tr>  	<td className="text-center text-center" width="20">(18)</td>  	<td width="70" className="text-center">  <math display=&#39;block&#39;>   <semantics>
<mrow>
<mi>I</mi><mo>=</mo><mfrac>
<mi>M</mi>
<mrow>
<mi>m</mi><mo stretchy=&#39;false&#39;>(</mo><mi>t</mi><mo stretchy=&#39;false&#39;>)</mo></mrow>
</mfrac>
</mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaamysaiabg2
da9maalaaabaGaamytaaqaaiaad2gacaGGOaGaamiDaiaacMcaaaaa
aa@3BF0@
</annotation>   </semantics>  </math>  	</td>  	</tr>  </table>
<p>In this case, I represents the intake, for example, in Bq or mg; M is the measured quantity; and m(t) is the predicated value of retention or excretion functions at a time t after the intake. The value of m(t) is based on appropriate biokinetic models and is available for default solubility characteristics for the material from the ICRP. Values of m(t) may also be derived for material-specific solubility or particle sizes. The measured quantity and m(t) should be expressed in consistent units. For example, for urinalysis, M should be the activity of the radionuclide of interest excreted per day at the end of the sample collection period, while m(t) is the urinary excretion rate of the same radionuclide at the end of the sample collection period. The latter scenario typically applies in special or task-related monitoring.</p>  <p>In routine monitoring, the time between an intake and the bioassay monitoring time may not be known. In such cases the CED may be ascertained by assuming that the intake occurred at the midpoint in the monitoring period of T days. The intake should be calculated as follows, based on the measured quantity at the end of the monitoring period.</p>
<table className=" table-border-none">  <tr>  	<td className="text-center text-center" width="20">(19)</td>  	<td width="70" className="text-center">  <math display=&#39;block&#39;>   <semantics>
<mrow>
<mi>I</mi><mo>=</mo><mfrac>
<mi>M</mi>
<mrow>
<mi>m</mi><mrow><mo>(</mo>
<mrow>
<mfrac>
<mi>T</mi>
<mn>2</mn>
</mfrac>
</mrow>
<mo>)</mo></mrow></mrow>
</mfrac>
</mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaamysaiabg2
da9maalaaabaGaamytaaqaaiaad2gadaqadaqaamaalaaabaGaamiv
aaqaaiaaikdaaaaacaGLOaGaayzkaaaaaaaa@3CCC@
</annotation>   </semantics>  </math>  	</td>  	</tr>  </table>
<p>In both cases above, the CED may be ascertained by multiplying the intake by the appropriate CED per unit intake. In some cases, as with tritiated water, measurements of activity may be used to ascertain the effective dose directly. In such cases, the above method may be replaced by a method presented for specific radionuclides in the appendices, or as approved by the CNSC.</p>  <p>If more than about 10% of the actual measured quantity can be attributed to intakes in a previous monitoring interval, a correction may be made. The correction to the current monitoring interval&rsquo;s measured quantity may be done by:</p>
<ul>
<li>determining the intake in the previous monitoring interval</li>
<li>using the appropriate m(t) to predict the contribution of the previous intake to the current measured quantity</li>
<li>subtracting the contribution as calculated above from the current measured quantity</li>
</ul>  <p>In some circumstances, including special bioassay monitoring, individual monitoring results taken at various times and using multiple monitoring methods (e.g., <em>in vitro</em> and <em>in vivo</em> bioassay) may be available. In these cases, the best estimate of the intake should be calculated by determining:</p>
<ul>
<li>the value of m<sub>j</sub>(t<sub>i</sub>) for each monitoring result and for each monitoring method</li>
<li>the best estimate of the intake, such that I &times; m<sub>j</sub>(t<sub>i</sub>) best fits the measurement results M<sub>i, j</sub></li>
</ul>  <p>When multiple monitoring methods are used, the intake should be ascertained by fitting predicted values (I &times; m<sub>j</sub>(t<sub>i</sub>)) to the results from all monitoring methods simultaneously. For example, urine and fecal bioassay data sets may be obtained as part of a special bioassay monitoring campaign. The intake in this case should be ascertained by fitting the predicted values (I &times; m<sub>j</sub>(t<sub>i</sub>) to both data sets simultaneously. Statistical methods are available for data fitting; the two most commonly used for bioassay are the maximum likelihood method and Bayesian approach. These, as well as others, are described in IAEA Safety Reports Series No. 37: <em>Methods for Assessing Occupational Radiation Doses Due to Intakes of Radionuclides</em> [22], and EURADOS Report 2013-01: <em>IDEAS Guidelines (Version 2) for the Estimation of Committed Doses from Incorporation Monitoring Data</em> [21].</p>  <p>When ascertaining an intake from data fitting, the starting assumption is that the data are consistent with the biokinetic model; that is, the measurement results M<sub>i, j</sub> are consistent with the predictions I &times; m<sub>j</sub>(t<sub>i</sub>). The criteria for rejecting the fit may be based on the chi-squared test statistic, and each measurement M<sub>i, j</sub> may be assumed to be taken from a lognormal distribution. The fit to the data should be judged to be inadequate if the p-value is less than 0.05. The p-value is the fraction of the expected (the theoretical) &chi;<sup>2</sup> distribution that is greater than the calculated &chi;<sub>o</sub><sup>2</sup> value. More information on the criteria for rejecting a data fit in the context of bioassay may be found in Castellani, et al. [21].</p>  <p>When the fit is rejected and the estimated intake leads to a CED &gt; 1 mSv, the material-specific absorption parameters from the ICRP human respiratory tract model may be adjusted. For further information, consult ICRP Publication 66, <em>Human Respiratory Tract Model for Radiological Protection</em> [15]. Specifically, the values of f<sub>r</sub> and s<sub>s</sub> may be varied, but not the value of s<sub>r</sub><sup id="fnb11-ref"><a className="fn-lnk" href="#fnb11"><span className="wb-inv">Footnote </span>11</a></sup>   (which should be kept at the value recommended by the ICRP) until the fit is not rejected.</p>  <p>The method to ascertain the CED may differ or include some additional considerations during consideration of specific radionuclides. Recommendations specific to tritium, radioiodines and uranium are discussed in appendices D to F, respectively.</p>
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
<h2 id="sec12">12. Calibration</h2>  <p>Instruments used for <em>in vivo</em> or <em>in vitro</em> bioassay measurements should be identified, controlled, maintained and calibrated periodically. Calibration should be performed for the radioisotope measured in the bioassay program. Periodic calibration and maintenance requirements should be determined and documented based on the necessary accuracy, purpose, degree of usage, stability characteristics and other factors affecting measurement control. Maintenance and calibration procedures should be documented.</p>  <p>Calibration status should be recorded and maintained, and calibrated equipment should be clearly and indelibly identified (e.g., through the use of labels). When calibration is performed before use or with a high frequency (e.g., daily), logging of calibrations may be sufficient.</p>  <p>Inaccurate, uncalibrated or malfunctioning equipment should be identified and removed from use. Measurement equipment that has been repaired or modified should be calibrated and have its performance checked before being put into use.</p>  <p>Calibrations should be traceable to national reference standards. Equipment used as calibration transfer standards should have calibration traceable to national standards. Where calibrated reference standards are used as transfer standards to set the level of reference by which data are directly measured, methods should be established to preserve the integrity of the process and the results.</p>  <p>When equipment is found to be inaccurate, reviews should be conducted to determine the validity of data or results, and corrective action should be taken.</p>
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
<h2 id="sec13">13. Limiting Intakes of Nuclear Substances by Workers Who Are Breastfeeding</h2>  <p>The RPR require licensees to make accommodations to limit intakes of nuclear substances by a NEW who is breastfeeding. Section 11 of REGDOC-2.7.1, <em>Radiation Protection</em>, provides guidance regarding NEWs who are breastfeeding. In particular, when a licensee is informed in writing that a NEW is breastfeeding, the licensee must make any accommodation that will not cause undue financial hardship or business inconvenience. The licensee may need to implement administrative controls for a breastfeeding NEW to ensure that intakes of nuclear substances by the NEW, which can subsequently be transferred to the breastfed infant, are minimized. Administrative controls may include ensuring that the working conditions are such that there is no significant risk of intake of nuclear substances. Consequently, breastfeeding NEWs who do not participate in a routine monitoring bioassay program due to the low risk of intakes should undergo confirmatory monitoring to confirm that there have been no intakes.</p>  <p>In the event of an intake, the magnitude of the intake should be estimated to ensure that the dose (committed effective dose (CED)) to the breastfed infant does not exceed 1 mSv. As a rule of thumb for most nuclear substances, if inhalation intakes of nuclear substances by NEWs who are breastfeeding are controlled to keep the annual CED below 1 mSv to the NEW, then the breastfed infant will not receive a CED above 1 mSv per calendar year from these intakes. There are exceptions in which intakes of certain nuclear substances (such as <sup>35</sup>S, <sup>125</sup>I, <sup>131</sup>I and tritiated water) by the NEW may result in a CED of more than 1 mSv to the breastfed infant, relative to the dose received by the NEW.</p>  <p>Licensees should compare dose coefficients for NEWs to those for breastfed infants (ICRP Publication 95: <em>Doses to Infants from Ingestion of Radionuclides in Mothers&rsquo; Milk</em> [23] for nuclear substances relevant to their facilities to verify that doses to breastfed infants do not pose a risk to the infant and are maintained below dose limits. The ratios of the CED received by a breastfed infant to the corresponding CED received by the breastfeeding NEW after an acute inhalation intake are shown in table 9 for selected nuclear substances. In order to estimate the dose to a breastfed infant in those circumstances where the worker continues to breastfeed following an intake, the CED to a breastfeeding NEW may be multiplied by the appropriate ratio in table 9 to obtain the CED to the breastfed infant. This method may be used to verify that the dose to a breastfed infant, from all nuclear substances taken in by the breastfeeding NEW, is maintained at less than 1 mSv per calendar year. The factors shown in Table 9 assume breastfeeding continues for 6 months. If there has been an intake and breastfeeding is expected to continue for more than 6 months, the licensee should consult with the CNSC to determine appropriate dose coefficients.</p>
<p><strong>Table 9: Ratio of the CED to a breastfed infant to the CED to the breastfeeding NEW</strong></p>  <table className="">
<tr>
<th>Nuclear substance</th>
<th>Ratio: CED infant to CED mother</th>
</tr>
<tr>
<td className="text-center"><sup>3</sup>H (water)</td>
<td className="text-center">1.1</td>
</tr>
<tr>
<td className="text-center"><sup>14</sup>C</td>
<td className="text-center">0.6</td>
</tr>
<tr>
<td className="text-center"><sup>35</sup>S</td>
<td className="text-center">2.6</td>
</tr>
<tr>
<td className="text-center"><sup>45</sup>Ca</td>
<td className="text-center">0.8</td>
</tr>
<tr>
<td className="text-center"><sup>47</sup>Ca</td>
<td className="text-center">0.7</td>
</tr>
<tr>
<td className="text-center"><sup>55</sup>Fe</td>
<td className="text-center">0.02</td>
</tr>
<tr>
<td className="text-center"><sup>59</sup>Fe</td>
<td className="text-center">0.03</td>
</tr>
<tr>
<td className="text-center"><sup>60</sup>Co</td>
<td className="text-center">0.3</td>
</tr>
<tr>
<td className="text-center"><sup>95</sup>Zr</td>
<td className="text-center">0.004</td>
</tr>
<tr>
<td className="text-center"><sup>95</sup>Nb</td>
<td className="text-center">9.2&times;10<sup>-5</sup></td>
</tr>
<tr>
<td className="text-center"><sup>125</sup>I</td>
<td className="text-center">1.1</td>
</tr>
<tr>
<td className="text-center"><sup>131</sup>I</td>
<td className="text-center">2.6</td>
</tr>
<tr>
<td className="text-center"><sup>134</sup>Cs</td>
<td className="text-center">0.2</td>
</tr>
<tr>
<td className="text-center"><sup>137</sup>Cs</td>
<td className="text-center">0.2</td>
</tr>
<tr>
<td className="text-center"><sup>210</sup>Pb</td>
<td className="text-center">0.2</td>
</tr>
<tr>
<td className="text-center"><sup>210</sup>Po</td>
<td className="text-center">0.043</td>
</tr>
<tr>
<td className="text-center"><sup>226</sup>Ra</td>
<td className="text-center">4.0&times;10<sup>-3</sup></td>
</tr>
<tr>
<td className="text-center"><sup>238</sup>U</td>
<td className="text-center">5.5&times;10<sup>-4</sup></td>
</tr>
<tr>
<td className="text-center"><sup>241</sup>Am</td>
<td className="text-center">2.6&times;10<sup>-4</sup></td>
</tr>
<tr>
<td className="text-center"><sup>238</sup>Pu</td>
<td className="text-center">1.1&times;10<sup>-3</sup></td>
</tr>
<tr>
<td className="text-center"><sup>239</sup>Pu</td>
<td className="text-center">1.1&times;10<sup>-3</sup></td>
</tr>
<tr>
<td className="text-center"><sup>244</sup>Cm</td>
<td className="text-center">3.2&times;10<sup>-4</sup></td>
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
<div id="14"></div>
<h2 id="sec14">14. Ascertaining the Dose Resulting From an Intake of Nuclear Substances Via a Wound</h2>  <p>Intakes of radionuclides via a wound are assessed in the context of special bioassay monitoring. The purpose of these bioassay measurements is to ensure compliance with dose limits and to inform decisions regarding patient treatment (e.g., excision of the wound, decorporation). In addition to bioassay measurements, special monitoring should include measurements of local activity at the wound site.</p>  <p>The selection of monitoring methods depends on the type of wound (e.g., puncture, laceration, thermal burn), the category of wound contaminant (e.g., radionuclides in solution, particles, fragments) and the biokinetics of the radionuclide. While soluble compounds are rapidly transferred to blood, insoluble compounds may be retained at the wound site, and a fraction may be translocated to regional lymph nodes, remaining at both these locations for an extended period of time.</p>  <p>The biokinetics of specific compounds taken in through a wound depend on the type of wound and its physiological evolution (e.g., healing). In general, the proportion of a soluble compound absorbed to blood from a wound site decreases in the following order:</p>
<ol>
<li>intravenous injection (greatest proportion of compound absorbed to blood)</li>
<li>puncture wounds</li>
<li>lacerations and abrasions</li>
<li>burned skin (thermal or chemical)</li>
<li>intact skin (smallest proportion of compound absorbed to blood)</li>
</ol>  <p>Categories of wound contaminants are defined in NCRP Report No. 156, <em>Development of a Biokinetic Model for Radionuclide-Contaminated Wounds and Procedures for their Assessment, Dosimetry and Treatment</em> [24]. The categories are:</p>
<ol>
<li>radionuclides initially in solution
<ol className="list-lower-alpha">
<li>weak retention at the wound site (up to 10% of initial activity remains at the wound site 24 hours after wound intake)</li>
<li>moderate retention at the wound site (10% to 30% of initial activity remains at the wound site 24 hours after wound intake)</li>
<li>strong retention at the wound site (30% to 80% of initial activity remains at the wound site 24 hours after wound intake)</li>
<li>avid retention at the wound site (more than 80% of initial activity remains at the wound site 24 hours after wound intake)</li>
</ol></li>
<li>radionuclides initially insoluble in water
<ol className="list-lower-alpha">
<li>colloids</li>
<li>particles</li>
<li>fragments</li>
</ol></li>
</ol>  <p>Particles and fragments are solids. They, as well as colloids, can be deposited in lymph nodes after clearing from the wound site.</p>  <p>The following steps should be followed when monitoring a contaminated wound:</p>
<ol>
<li>The wound contamination should be characterized by documenting:
<ol className="list-lower-alpha">
<li>the date, time, and method and circumstances of the wound contamination incident</li>
<li>the type, characteristics and location of the wound</li>
<li>the characteristics of the radiological contaminant at the wound site, including the radionuclides, their chemical form and total activity or concentration</li>
</ol></li>
<li>the activity deposited at the wound site should be measured as soon as practicable after the wound incident and periodically afterwards, as this will help guide the medical management of the case, and
<ol className="list-lower-alpha">
<li>follow-up measurements are recommended in order to gauge the effectiveness of decontamination and medical interventions</li>
<li>Guidance on the selection of instruments for wound monitoring can be found in NCRP Report No. 156. [24]</li>
</ol></li>
<li>An <em>in vitro</em> or <em>in vivo</em> bioassay measurement should be carried out, as appropriate, for the radionuclides and their associated chemical forms as determined in step 1 as soon as practicable after the wound incident and periodically afterwards according to the frequency set out in appendix C.</li>
<li>The equivalent dose to skin at the wound site should be ascertained based on the activity at the wound site as measured in step 2.</li>
<li>The committed effective dose (CED) from intakes of radionuclides through the wound should be ascertained.</li>
</ol>  <p>The equivalent dose to tissue at the wound site should be ascertained to determine whether tissue reactions are likely, and to verify compliance with the equivalent dose limit for the skin. Once the activity deposited at the wound site has been ascertained, an initial conservative estimate may be carried out. This may be done by multiplying the activity concentration at the wound site by the appropriate skin dose conversion factor, listed in table 10.</p>
<p><strong>Table 10: Equivalent dose coefficients for radionuclides at the wound site [24]</strong></p>  <table className="">
<tr>
<th className="text-center" rowspan="2">Radionuclide</th>
<th colSpan="2">Equivalent dose rate received by the skin (mSv.h<sup>-1.</sup>kBq<sup>-1</sup>.cm<sup>2</sup>)</th>
</tr>
<tr>
<th>Surface contamination</th>
<th>Deep contamination</th>
</tr>
<tr>
<td><sup>3</sup>H</td>
<td className="text-center">0</td>
<td className="text-center">1.3&times;10<sup>-3</sup></td>
</tr>
<tr>
<td><sup>14</sup>C</td>
<td className="text-center">3.2&times;10<sup>-1</sup></td>
<td className="text-center">1.8</td>
</tr>
<tr>
<td><sup>22</sup>Na</td>
<td className="text-center">1.7</td>
<td className="text-center">3.2</td>
</tr>
<tr>
<td><sup>32</sup>P</td>
<td className="text-center">1.9</td>
<td className="text-center">4.2</td>
</tr>
<tr>
<td><sup>35</sup>S</td>
<td className="text-center">3.5&times;10<sup>-1</sup></td>
<td className="text-center">1.7</td>
</tr>
<tr>
<td><sup>36</sup>Cl</td>
<td className="text-center">1.8</td>
<td className="text-center">3.2</td>
</tr>
<tr>
<td><sup>45</sup>Ca</td>
<td className="text-center">8.5&times;10<sup>-1</sup></td>
<td className="text-center">2.2</td>
</tr>
<tr>
<td><sup>51</sup>Cr</td>
<td className="text-center">1.5&times;10<sup>-2</sup></td>
<td className="text-center">2.7&times;10<sup>-2</sup></td>
</tr>
<tr>
<td><sup>54</sup>Mn</td>
<td className="text-center">6.2&times;10<sup>-2</sup></td>
<td className="text-center">8.1&times;10<sup>-2</sup></td>
</tr>
<tr>
<td><sup>57</sup>Co</td>
<td className="text-center">1.2&times;10<sup>-1</sup></td>
<td className="text-center">1.9&times;10<sup>-1</sup></td>
</tr>
<tr>
<td><sup>58</sup>Co</td>
<td className="text-center">3.1&times;10<sup>-1</sup></td>
<td className="text-center">5.6&times;10<sup>-1</sup></td>
</tr>
<tr>
<td><sup>60</sup>Co</td>
<td className="text-center">7.8&times;10<sup>-1</sup></td>
<td className="text-center">3.2</td>
</tr>
<tr>
<td><sup>59</sup>Fe</td>
<td className="text-center">9.6&times;10<sup>-1</sup></td>
<td className="text-center">3.3</td>
</tr>
<tr>
<td><sup>63</sup>Ni</td>
<td className="text-center">6.5&times;10<sup>-7</sup></td>
<td className="text-center">4.5&times;10<sup>-1</sup></td>
</tr>
<tr>
<td><sup>67</sup>Ga</td>
<td className="text-center">3.4&times;10<sup>-1</sup></td>
<td className="text-center">1.1</td>
</tr>
<tr>
<td><sup>90</sup>Sr, <sup>90</sup>Y</td>
<td className="text-center">3.6</td>
<td className="text-center">7.9</td>
</tr>
<tr>
<td><sup>95</sup>Zr, <sup>95</sup>Nb</td>
<td className="text-center">1.6</td>
<td className="text-center">4.3</td>
</tr>
<tr>
<td><sup>99m</sup>Tc</td>
<td className="text-center">2.5&times;10<sup>-1</sup></td>
<td className="text-center">4.0&times;10<sup>-1</sup></td>
</tr>
<tr>
<td><sup>106</sup>Ru, <sup>106</sup>Nb</td>
<td className="text-center">2.2</td>
<td className="text-center">6.5</td>
</tr>
<tr>
<td><sup>110m</sup>Ag</td>
<td className="text-center">6.7&times;10<sup>-1</sup></td>
<td className="text-center">1.9</td>
</tr>
<tr>
<td><sup>111</sup>In</td>
<td className="text-center">3.8&times;10<sup>-1</sup></td>
<td className="text-center">6.7&times;10<sup>-1</sup></td>
</tr>
<tr>
<td><sup>123</sup>I</td>
<td className="text-center">3.7&times;10<sup>-1</sup></td>
<td className="text-center">6.8&times;10<sup>-1</sup></td>
</tr>
<tr>
<td><sup>125</sup>I</td>
<td className="text-center">2.1&times;10<sup>-2</sup></td>
<td className="text-center">3.5&times;10<sup>-1</sup></td>
</tr>
<tr>
<td><sup>131</sup>I</td>
<td className="text-center">1.6</td>
<td className="text-center">3.1</td>
</tr>
<tr>
<td><sup>137</sup>Cs, <sup>137m</sup>Ba</td>
<td className="text-center">1.6</td>
<td className="text-center">3.4</td>
</tr>
<tr>
<td><sup>144</sup>Ce, <sup>144m</sup>Pr, <sup>144</sup>Pr</td>
<td className="text-center">3.1</td>
<td className="text-center">8.2</td>
</tr>
<tr>
<td><sup>147</sup>Pm</td>
<td className="text-center">6.0&times;10<sup>-1</sup></td>
<td className="text-center">2.0</td>
</tr>
<tr>
<td><sup>192</sup>Ir</td>
<td className="text-center">1.9</td>
<td className="text-center">3.4</td>
</tr>
<tr>
<td><sup>201</sup>Tl</td>
<td className="text-center">2.8&times;10<sup>-1</sup></td>
<td className="text-center">1.0</td>
</tr>
<tr>
<td><sup>204</sup>Tl</td>
<td className="text-center">1.6</td>
<td className="text-center">3.0</td>
</tr>
<tr>
<td><sup>235</sup>U</td>
<td className="text-center">1.8&times;10<sup>-1</sup></td>
<td className="text-center">3.0&times;10<sup>3</sup></td>
</tr>
<tr>
<td><sup>238</sup>U</td>
<td className="text-center">2.3&times;10<sup>-3</sup></td>
<td className="text-center">2.9&times;10<sup>3</sup></td>
</tr>
<tr>
<td><sup>238</sup>Pu</td>
<td className="text-center">3.7&times;10<sup>-3</sup></td>
<td className="text-center">3.4&times;10<sup>3</sup></td>
</tr>
<tr>
<td><sup>239</sup>Pu</td>
<td className="text-center">1.4&times;10<sup>-3</sup></td>
<td className="text-center">3.2&times;10<sup>3</sup></td>
</tr>
<tr>
<td><sup>241</sup>Pu</td>
<td className="text-center">1.3&times;10<sup>-5</sup></td>
<td className="text-center">8.0&times;10<sup>-2</sup></td>
</tr>
<tr>
<td><sup>241</sup>Am</td>
<td className="text-center">2.0&times;10<sup>-2</sup></td>
<td className="text-center">3.4&times;10<sup>3</sup></td>
</tr>  </table>
<p>The radionuclides may be assumed to be surface contamination in the case of chemical burns or abrasions. In other cases, unless evidence exists for surface contamination, the radionuclides should be assumed to be retained as deep contamination. For a more accurate dose assessment, skin dosimetry software should be used.</p>  <p>An upper bound to the CED may be calculated by assuming all of the activity at the wound site will be taken up into the blood. Dose coefficients for selected radionuclides for this purpose are shown in table 11 under the &ldquo;Weak&rdquo; heading. Once bioassay measurement results become available, they should be used to ascertain the CED. The bioassay measurements may be corrected to account for previous intakes of radionuclides.</p>  <p>For cases in which the activity is cleared rapidly from the wound site (e.g., less than 10% of the activity measured in step 2 immediately following the wound contamination incident remains at the wound site 24 hours later), the intake may be treated as an injection intake. The intake can be ascertained using the equation in section 11:</p>
<table className=" table-border-none">  <tr>  	<td className="text-center text-center" width="20">(20)</td>  	<td width="70" className="text-center">  <math display=&#39;block&#39;>   <semantics>
<mrow>
<mi>I</mi><mo>=</mo><mfrac>
<mi>M</mi>
<mrow>
<mi>m</mi><mo stretchy=&#39;false&#39;>(</mo><mi>t</mi><mo stretchy=&#39;false&#39;>)</mo></mrow>
</mfrac>
</mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaamysaiabg2
da9maalaaabaGaamytaaqaaiaad2gacaGGOaGaamiDaiaacMcaaaaa
aa@3BF0@
</annotation>   </semantics>  </math>  	</td>  	</tr>  </table>
<p>The parameter m(t) is the predicted activity in the bioassay measurement per unit intake. These parameters can be obtained from ICRP Publication 78: <em>Individual monitoring for internal exposure of workers: Replacement of ICRP Publication 54</em> [25] or ISO 27048:2011: <em>Radiological protection &ndash; Dose assessment for the monitoring of workers for internal radiation exposure</em> [26]. The CED may then be determined by calculating I &times; e<sub>inj</sub>(50). The latter parameter, the dose coefficient for an injection intake, may be obtained from table 11, under the "Weak" heading, or calculated using internal dosimetry software incorporating ICRP biokinetic models. The criteria defining the categories of wound contaminants, as described above, may be used to determine which heading under table 11 to use. For more guidance see NCRP Report No. 156 [24]. Data in table 11 had been sourced from <em>Health Physics</em> article, "Dose Coefficients for Intakes of Radionuclides via Contaminated Wounds" [27].</p>  <p>For cases in which the activity is retained at the wound site, as determined by measurements at the wound site in the first few days after the wound contamination incident, the CED should be ascertained using the wound biokinetic model from NCRP Report No. 156 [24]. An initial assessment using a NCRP wound model category chosen a priori may be carried out. When bioassay monitoring data become available, the CED should be ascertained for the wound category that best fits the excretion and/or retention data. If the goodness of fit is not acceptable with one wound category, based on the criteria in section 11, the dose should be calculated considering a mixture of two default retention categories.</p>
<p><strong>Table 11: Committed effective dose coefficients for intakes via wounds</strong></p>  <table className="table table-striped">
<tr>
<th>Radionuclide</th>
<th>Weak</th>
<th>Moderate</th>
<th>Strong</th>
<th>Avid</th>
<th>Colloid</th>
<th>Particle</th>
<th>Fragment</th>
</tr>
<tr>
<td><sup>3</sup>H (HTO)</td>
<td>1.84 &times; 10<sup>-11</sup></td>
<td>1.84 &times; 10<sup>-11</sup></td>
<td>1.78 &times; 10<sup>-11</sup></td>
<td>1.61 &times; 10<sup>-11</sup></td>
<td>1.56 &times; 10<sup>-11</sup></td>
<td>1.01 &times; 10<sup>-11</sup></td>
<td>4.07 &times; 10<sup>-13</sup></td>
</tr>
<tr>
<td><sup>3</sup>H (OBT)</td>
<td>4.16 &times; 10<sup>-11</sup></td>
<td>4.16 &times; 10<sup>-11</sup></td>
<td>4.01 &times; 10<sup>-11</sup></td>
<td>3.64 &times; 10<sup>-11</sup></td>
<td>3.52 &times; 10<sup>-11</sup></td>
<td>2.28 &times; 10<sup>-11</sup></td>
<td>9.19 &times; 10<sup>-13</sup></td>
</tr>
<tr>
<td><sup>14</sup>C</td>
<td>5.77 &times; 10<sup>-10</sup></td>
<td>5.77 &times; 10<sup>-10</sup></td>
<td>5.75 &times; 10<sup>-10</sup></td>
<td>5.68 &times; 10<sup>-10</sup></td>
<td>5.77 &times; 10<sup>-10</sup></td>
<td>5.71 &times; 10<sup>-10</sup></td>
<td>3.19 &times; 10<sup>-11</sup></td>
</tr>
<tr>
<td><sup>32</sup>P</td>
<td>2.20 &times; 10<sup>-9</sup></td>
<td>2.00 &times; 10<sup>-9</sup></td>
<td>1.32 &times; 10<sup>-9</sup></td>
<td>4.61 &times; 10<sup>-10</sup></td>
<td>1.14 &times; 10<sup>-10</sup></td>
<td>6.13 &times; 10<sup>-12</sup></td>
<td>6.53 &times; 10<sup>-12</sup></td>
</tr>
<tr>
<td><sup>35</sup>S (inorganic)</td>
<td>1.24 &times; 10<sup>-10</sup></td>
<td>1.20 &times; 10<sup>-10</sup></td>
<td>9.11 &times; 10<sup>-11</sup></td>
<td>3.44 &times; 10<sup>-11</sup></td>
<td>1.86 &times; 10<sup>-11</sup></td>
<td>1.44 &times; 10<sup>-12</sup></td>
<td>2.95 &times; 10<sup>-13</sup></td>
</tr>
<tr>
<td><sup>35</sup>S (organic)</td>
<td>7.76 &times; 10<sup>-10</sup></td>
<td>7.51 &times; 10<sup>-10</sup></td>
<td>5.70 &times; 10<sup>-10</sup></td>
<td>2.15 &times; 10<sup>-10</sup></td>
<td>1.16 &times; 10<sup>-10</sup></td>
<td>9.01 &times; 10<sup>-12</sup></td>
<td>1.85 &times; 10<sup>-12</sup></td>
</tr>
<tr>
<td><sup>59</sup>Fe</td>
<td>8.36 &times; 10<sup>-9</sup></td>
<td>7.95 &times; 10<sup>-9</sup></td>
<td>5.73 &times; 10<sup>-9</sup></td>
<td>1.99 &times; 10<sup>-9</sup></td>
<td>8.56 &times; 10<sup>-10</sup></td>
<td>5.43 &times; 10<sup>-11</sup></td>
<td>1.08 &times; 10<sup>-11</sup></td>
</tr>
<tr>
<td><sup>57</sup>Co</td>
<td>6.36 &times; 10<sup>-10</sup></td>
<td>6.28 &times; 10<sup>-10</sup></td>
<td>5.16 &times; 10<sup>-9</sup></td>
<td>4.01 &times; 10<sup>-10</sup></td>
<td>1.84 &times; 10<sup>-10</sup></td>
<td>2.45 &times; 10<sup>-11</sup></td>
<td>3.00 &times; 10<sup>-12</sup></td>
</tr>
<tr>
<td><sup>58</sup>Co</td>
<td>1.53 &times; 10<sup>-9</sup></td>
<td>1.47 &times; 10<sup>-9</sup></td>
<td>1.10 &times; 10<sup>-9</sup></td>
<td>4.01 &times; 10<sup>-10</sup></td>
<td>2.03 &times; 10<sup>-10</sup></td>
<td>1.46 &times; 10<sup>-11</sup></td>
<td>3.07 &times; 10<sup>-12</sup></td>
</tr>
<tr>
<td><sup>60</sup>Co</td>
<td>1.94 &times; 10<sup>-8</sup></td>
<td>1.94 &times; 10<sup>-8</sup></td>
<td>1.81 &times; 10<sup>-8</sup></td>
<td>1.49 &times; 10<sup>-8</sup></td>
<td>1.38 &times; 10<sup>-8</sup></td>
<td>6.11 &times; 10<sup>-9</sup></td>
<td>2.47 &times; 10<sup>-10</sup></td>
</tr>
<tr>
<td><sup>85</sup>Sr</td>
<td>1.10 &times; 10<sup>-9</sup></td>
<td>1.06 &times; 10<sup>-9</sup></td>
<td>7.86 &times; 10<sup>-10</sup></td>
<td>2.83 &times; 10<sup>-10</sup></td>
<td>1.39 &times; 10<sup>-10</sup></td>
<td>9.77 &times; 10<sup>-12</sup></td>
<td>2.05 &times; 10<sup>-12</sup></td>
</tr>
<tr>
<td><sup>89</sup>Sr</td>
<td>3.13 &times; 10<sup>-9</sup></td>
<td>2.98 &times; 10<sup>-9</sup></td>
<td>2.17 &times; 10<sup>-9</sup></td>
<td>7.61 &times; 10<sup>-10</sup></td>
<td>3.43 &times; 10<sup>-10</sup></td>
<td>2.24 &times; 10<sup>-11</sup></td>
<td>4.59 &times; 10<sup>-12</sup></td>
</tr>
<tr>
<td><sup>90</sup>Sr</td>
<td>8.80 &times; 10<sup>-8</sup></td>
<td>8.81 &times; 10<sup>-8</sup></td>
<td>8.66 &times; 10<sup>-8</sup></td>
<td>8.26 &times; 10<sup>-8</sup></td>
<td>8.22 &times; 10<sup>-8</sup></td>
<td>6.57 &times; 10<sup>-8</sup></td>
<td>2.87 &times; 10<sup>-9</sup></td>
</tr>
<tr>
<td><sup>99m</sup>Tc</td>
<td>1.50 &times; 10<sup>-11</sup></td>
<td>1.17 &times; 10<sup>-11</sup></td>
<td>3.21 &times; 10<sup>-12</sup></td>
<td>3.41 &times; 10<sup>-12</sup></td>
<td>1.50 &times; 10<sup>-14</sup></td>
<td>1.34 &times; 10<sup>-15</sup></td>
<td>6.91 &times; 10<sup>-19</sup></td>
</tr>
<tr>
<td><sup>106</sup>Ru</td>
<td>3.02 &times; 10<sup>-8</sup></td>
<td>2.99 &times; 10<sup>-8</sup></td>
<td>2.51 &times; 10<sup>-8</sup></td>
<td>1.39 &times; 10<sup>-8</sup></td>
<td>1.04 &times; 10<sup>-8</sup></td>
<td>1.67 &times; 10<sup>-9</sup></td>
<td>1.65 &times; 10<sup>-10</sup></td>
</tr>
<tr>
<td><sup>125</sup>I</td>
<td>1.54 &times; 10<sup>-8</sup></td>
<td>1.48 &times; 10<sup>-8</sup></td>
<td>1.09 &times; 10<sup>-8</sup></td>
<td>3.90 &times; 10<sup>-9</sup></td>
<td>1.87 &times; 10<sup>-9</sup></td>
<td>1.28 &times; 10<sup>-10</sup></td>
<td>2.68 &times; 10<sup>-11</sup></td>
</tr>
<tr>
<td><sup>129</sup>I</td>
<td>1.07 &times; 10<sup>-7</sup></td>
<td>1.07 &times; 10<sup>-7</sup></td>
<td>1.06 &times; 10<sup>-7</sup></td>
<td>1.05 &times; 10<sup>-7</sup></td>
<td>1.07 &times; 10<sup>-7</sup></td>
<td>1.06 &times; 10<sup>-7</sup></td>
<td>5.87 &times; 10<sup>-9</sup></td>
</tr>
<tr>
<td><sup>131</sup>I</td>
<td>2.13 &times; 10<sup>-8</sup></td>
<td>1.88 &times; 10<sup>-8</sup></td>
<td>1.19 &times; 10-<sup>8</sup></td>
<td>4.35 &times; 10<sup>-9</sup></td>
<td>7.36 &times; 10<sup>-10</sup></td>
<td>3.85 &times; 10<sup>-11</sup></td>
<td>2.45 &times; 10<sup>-12</sup></td>
</tr>
<tr>
<td><sup>134</sup>Cs</td>
<td>1.94 &times; 10<sup>-8</sup></td>
<td>1.94 &times; 10<sup>-8</sup></td>
<td>1.71 &times; 10<sup>-8</sup></td>
<td>1.16 &times; 10<sup>-8</sup></td>
<td>9.70 &times; 10<sup>-9</sup></td>
<td>2.45 &times; 10<sup>-9</sup></td>
<td>1.48 &times; 10<sup>-10</sup></td>
</tr>
<tr>
<td><sup>137</sup>Cs</td>
<td>1.36 &times; 10<sup>-8</sup></td>
<td>1.36 &times; 10<sup>-8</sup></td>
<td>1.34 &times; 10<sup>-8</sup></td>
<td>1.28 &times; 10<sup>-8</sup></td>
<td>1.27 &times; 10<sup>-8</sup></td>
<td>1.03 &times; 10<sup>-8</sup></td>
<td>4.77 &times; 10<sup>-10</sup></td>
</tr>
<tr>
<td><sup>192</sup>Ir</td>
<td>6.67 &times; 10<sup>-9</sup></td>
<td>6.43 &times; 10<sup>-9</sup></td>
<td>4.82 &times; 10<sup>-9</sup></td>
<td>1.77 &times; 10<sup>-9</sup></td>
<td>9.09 &times; 10<sup>-10</sup></td>
<td>6.65 &times; 10<sup>-11</sup></td>
<td>1.39 &times; 10-<sup>11</sup></td>
</tr>
<tr>
<td><sup>201</sup>Tl</td>
<td>8.34 &times; 10<sup>-11</sup></td>
<td>6.91 &times; 10<sup>-11</sup></td>
<td>4.11 &times; 10<sup>-11</sup></td>
<td>1.70 &times; 10<sup>-12</sup></td>
<td>1.29 &times; 10<sup>-12</sup></td>
<td>6.83 &times; 10<sup>-14</sup></td>
<td>1.50 &times; 10<sup>-15</sup></td>
</tr>
<tr>
<td><sup>210</sup>Po</td>
<td>2.36 &times; 10<sup>-6</sup></td>
<td>2.31 &times; 10<sup>-6</sup></td>
<td>1.81 &times; 10<sup>-6</sup></td>
<td>7.52 &times; 10<sup>-7</sup></td>
<td>4.60 &times; 10<sup>-7</sup></td>
<td>4.31 &times; 10<sup>-8</sup></td>
<td>7.72 &times; 10<sup>-9</sup></td>
</tr>
<tr>
<td><sup>226</sup>Ra</td>
<td>1.36 &times; 10<sup>-6</sup></td>
<td>1.36 &times; 10<sup>-6</sup></td>
<td>1.44 &times; 10<sup>-6</sup></td>
<td>1.62 &times; 10<sup>-6</sup></td>
<td>1.77 &times; 10<sup>-6</sup></td>
<td>2.64 &times; 10<sup>-6</sup></td>
<td>1.65 &times; 10<sup>-7</sup></td>
</tr>
<tr>
<td><sup>228</sup>Ra</td>
<td>3.37 &times; 10<sup>-6</sup></td>
<td>3.96 &times; 10<sup>-6</sup></td>
<td>1.41 &times; 10<sup>-5</sup></td>
<td>3.81 &times; 10<sup>-5</sup></td>
<td>4.56 &times; 10<sup>-5</sup></td>
<td>4.04 &times; 10<sup>-5</sup></td>
<td>1.13 &times; 10<sup>-6</sup></td>
</tr>
<tr>
<td><sup>228</sup>Th</td>
<td>1.18 &times; 10<sup>-4</sup></td>
<td>1.17 &times; 10<sup>-4</sup></td>
<td>1.03 &times; 10<sup>-4</sup></td>
<td>6.86 &times; 10<sup>-5</sup></td>
<td>5.68 &times; 10<sup>-5</sup></td>
<td>1.37 &times; 10<sup>-5</sup></td>
<td>8.64 &times; 10<sup>-7</sup></td>
</tr>
<tr>
<td><sup>230</sup>Th</td>
<td>4.19 &times; 10<sup>-4</sup></td>
<td>4.19 &times; 10<sup>-4</sup></td>
<td>4.13 &times; 10<sup>-4</sup></td>
<td>3.99 &times; 10<sup>-4</sup></td>
<td>3.99 &times; 10<sup>-4</sup></td>
<td>3.35 &times; 10<sup>-4</sup></td>
<td>1.44 &times; 10<sup>-5</sup></td>
</tr>
<tr>
<td><sup>232</sup>Th</td>
<td>4.52 &times; 10<sup>-4</sup></td>
<td>4.52 &times; 10<sup>-4</sup></td>
<td>4.48 &times; 10<sup>-4</sup></td>
<td>4.40 &times; 10<sup>-4</sup></td>
<td>4.47 &times; 10<sup>-4</sup></td>
<td>4.17 &times; 10<sup>-4</sup></td>
<td>1.92 &times; 10<sup>-5</sup></td>
</tr>
<tr>
<td><sup>234</sup>U</td>
<td>2.27 &times; 10<sup>-6</sup></td>
<td>2.27 &times; 10<sup>-6</sup></td>
<td>2.25 &times; 10<sup>-6</sup></td>
<td>2.18 &times; 10<sup>-6</sup></td>
<td>2.19 &times; 10<sup>-6</sup></td>
<td>1.92 &times; 10<sup>-6</sup></td>
<td>8.75 &times; 10<sup>-8</sup></td>
</tr>
<tr>
<td><sup>235</sup>U</td>
<td>2.11 &times; 10<sup>-6</sup></td>
<td>2.11 &times; 10<sup>-6</sup></td>
<td>2.09 &times; 10<sup>-6</sup></td>
<td>2.03 &times; 10<sup>-6</sup></td>
<td>2.04 &times; 10<sup>-6</sup></td>
<td>1.78 &times; 10<sup>-6</sup></td>
<td>8.13 &times; 10<sup>-8</sup></td>
</tr>
<tr>
<td><sup>238</sup>U</td>
<td>2.03 &times; 10<sup>-6</sup></td>
<td>2.03 &times; 10<sup>-6</sup></td>
<td>2.01 &times; 10<sup>-6</sup></td>
<td>1.96 &times; 10<sup>-6</sup></td>
<td>1.97 &times; 10<sup>-6</sup></td>
<td>1.73 &times; 10<sup>-6</sup></td>
<td>7.89 &times; 10<sup>-8</sup></td>
</tr>
<tr>
<td><sup>237</sup>Np</td>
<td>2.05 &times; 10<sup>-4</sup></td>
<td>2.05 &times; 10<sup>-4</sup></td>
<td>2.03 &times; 10<sup>-4</sup></td>
<td>1.98 &times; 10<sup>-4</sup></td>
<td>1.99 &times; 10<sup>-4</sup></td>
<td>1.76 &times; 10<sup>-4</sup></td>
<td>7.91 &times; 10<sup>-6</sup></td>
</tr>
<tr>
<td><sup>238</sup>Pu</td>
<td>4.44 &times; 10<sup>-4</sup></td>
<td>4.43 &times; 10<sup>-4</sup></td>
<td>4.36 &times; 10<sup>-4</sup></td>
<td>4.18 &times; 10<sup>-4</sup></td>
<td>4.17 &times; 10<sup>-4</sup></td>
<td>3.36 &times; 10<sup>-4</sup></td>
<td>1.41 &times; 10<sup>-5</sup></td>
</tr>
<tr>
<td><sup>239</sup>Pu</td>
<td>4.89 &times; 10<sup>-4</sup></td>
<td>4.89 &times; 10<sup>-4</sup></td>
<td>4.83 &times; 10<sup>-4</sup></td>
<td>4.66 &times; 10<sup>-4</sup></td>
<td>4.67 &times; 10-<sup>4</sup></td>
<td>3.90 &times; 10<sup>-4</sup></td>
<td>1.67 &times; 10<sup>-5</sup></td>
</tr>
<tr>
<td><sup>240</sup>Pu</td>
<td>4.89 &times; 10<sup>-4</sup></td>
<td>4.89 &times; 10<sup>-4</sup></td>
<td>4.83 &times; 10<sup>-4</sup></td>
<td>4.66 &times; 10<sup>-4</sup></td>
<td>4.67 &times; 10<sup>-4</sup></td>
<td>3.90 &times; 10<sup>-4</sup></td>
<td>1.67 &times; 10<sup>-5</sup></td>
</tr>
<tr>
<td><sup>241</sup>Pu</td>
<td>9.40 &times; 10<sup>-6</sup></td>
<td>9.40 &times; 10<sup>-6</sup></td>
<td>9.42 &times; 10<sup>-6</sup></td>
<td>9.46 &times; 10<sup>-6</sup></td>
<td>9.68 &times; 10<sup>-6</sup></td>
<td>9.23 &times; 10<sup>-6</sup></td>
<td>4.10 &times; 10<sup>-7</sup></td>
</tr>
<tr>
<td><sup>241</sup>Am</td>
<td>3.97 &times; 10<sup>-4</sup></td>
<td>3.96 &times; 10<sup>-4</sup></td>
<td>3.91 &times; 10<sup>-4</sup></td>
<td>3.79 &times; 10<sup>-4</sup></td>
<td>3.80 &times; 10<sup>-4</sup></td>
<td>2.23 &times; 10<sup>-4</sup></td>
<td>1.41 &times; 10<sup>-5</sup></td>
</tr>
<tr>
<td><sup>242</sup>Cm</td>
<td>1.35 &times; 10<sup>-5</sup></td>
<td>1.33 &times; 10<sup>-5</sup></td>
<td>1.09 &times; 10<sup>-5</sup></td>
<td>5.66 &times; 10<sup>-6</sup></td>
<td>4.22 &times; 10<sup>-6</sup></td>
<td>1.66 &times; 10<sup>-6</sup></td>
<td>1.02 &times; 10<sup>-7</sup></td>
</tr>
<tr>
<td><sup>244</sup>Cm</td>
<td>2.34 &times; 10<sup>-4</sup></td>
<td>2.34 &times; 10<sup>-4</sup></td>
<td>2.27 &times; 10<sup>-4</sup></td>
<td>2.11 &times; 10<sup>-4</sup></td>
<td>2.06 &times; 10<sup>-4</sup></td>
<td>1.44 &times; 10<sup>-4</sup></td>
<td>5.72 &times; 10<sup>-6</sup></td>
</tr>
<tr>
<td><sup>252</sup>Cf</td>
<td>1.52 &times; 10<sup>-4</sup></td>
<td>1.51 &times; 10<sup>-4</sup></td>
<td>1.36 &times; 10<sup>-4</sup></td>
<td>9.79 &times; 10<sup>-5</sup></td>
<td>8.43 &times; 10<sup>-5</sup></td>
<td>2.49 &times; 10<sup>-5</sup></td>
<td>1.30 &times; 10<sup>-6</sup></td>
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
<div id="partC"></div>
<h2 id="partC">Part C: Making Changes to Dose-Related Information Filed With the National Dose Registry</h2>
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
<h2 id="sec15">15. General Process</h2>  <p>The CNSC uses dose records to monitor licensee compliance with regulatory occupational dose limits. Dose information filed with the NDR may be changed for various reasons (e.g., following an investigation that concludes there is an incorrect dose record). The following steps describe the general process for a licensee to request a change to a dose record filed with the NDR:</p>  <p>The licensee submits to the CNSC the investigation report and the dose information change request form, which includes details of the change(s) to be made.</p>   <p>The CNSC evaluates the request and approves or denies it based on the information provided in the investigation report.</p>  <p>If the CNSC approves the requested change, the dose information change request form is sent to the dosimetry service provider; a copy of the form is also sent to the worker, the licensee contact and the NDR; and the dosimetry service provider is responsible for notifying the NDR of the change.</p>  <p>If the CNSC denies the request, the licensee is informed of the refusal.</p>
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
<h2 id="sec16">16. Individual Dose Information Change Request Procedure</h2>  <ol>
<li>The licensee conducts an investigation of the event that prompted a request for a dose information change and summarizes the information in an investigation report, which should contain the following information:
<ol className="list-lower-alpha">
<li>reasons for requesting the dose information change</li>
<li>description of the circumstances and time frame involved</li>
<li>justification for changing the reported dose(s) to the proposed value(s)</li>
<li>calculations to support the request, if applicable</li>
<li>copy of the relevant section of the dosimetry service dose report</li>
<li>other relevant information, as determined by the CNSC</li>
</ol></li>
<li>The licensee provides the following information in section A of the dose information change request form:
<ol className="list-lower-alpha">
<li>dosimetry service name and group or account number that is assigned to the licensee by the dosimetry service</li>
<li>company name that appears on the dosimetry service dose report</li>
<li>licensee name that appears on the CNSC licence</li>
<li>licence number that appears on the CNSC licence</li>
<li>name of the worker and his or her social insurance number</li>
<li>whether the worker is a nuclear energy worker</li>
<li>serial number of the dosimeter that is shown on the original dose report, if applicable</li>
<li>wearing period or monitoring period as listed on the original dose report, if applicable</li>
<li>the requested dose information change</li>
<li>investigation report as described in step 1</li>
</ol></li>
<li>The worker whose dose information will be affected signs and dates "section B &ndash; Worker Declaration" of the dose information change request form. If the worker cannot be located, the licensee should demonstrate that every effort was made to contact the worker. In some cases, CNSC staff may approve the dose information change request without the worker&rsquo;s signature. These situations are assessed on a case-by-case basis.</li>
<li>The licensee submits the completed the Dose Information Change Request Form and any attachments to the attention of the CNSC single point of contact for the licence.</li>
<li>CNSC staff complete, date and sign "section A &ndash; Licensee Declaration" of the Dose Information Change Request Form.</li>
<li>The licensee informs the affected worker of any change to the dose information.</li>  </ol>  <p>If the licensee submits a request to add the skin dose, as determined in section 6.3.4, to the worker&rsquo;s dose records in the National Dose Registry, the request should be in the form of a dose information change request. The following information should also be included with the dose change request:</p>
<ul>
<li>the contamination meter&rsquo;s make, model and calibration certificate</li>
<li>a detailed description of how the detector efficiency was determined</li>
<li>a detailed dose calculation including measurement times and results</li>
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
<div id="17"></div>
<h2 id="sec17">17. Group Dose Information Change Request Procedure</h2>  <p>There may be situations in which dose information change requests are required for a large number of individuals, and providing dose information change request forms for each individual is not practical. In these situations, the licensee may provide the required information in another format, such as a table, to accommodate the large number of workers to whom the dose information change request applies.</p>  <p>The licensee should demonstrate that every effort was made to inform each worker of the change and that each worker agrees to the proposed change(s) to his or her dose records.</p>  <p>The licensee is also required to provide an investigation report as described in section 16.</p>
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
<h2 id="sec18">18. Contact Information</h2>  <p>The investigation report and the Dose Information Change Request Form should be submitted to:</p>  <p>Canadian Nuclear Safety Commission<br />
P.O. Box 1046, Station B<br />
280 Slater Street,<br />
Ottawa, Ontario<br />
K1P 5S9<br />
Telephone: 1-888-229-2672<br />
Fax: 613-995-5086</p>
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
<h2 id="appA">Appendix A: Guidance on Choosing Dosimetry for the Lens of the Eye</h2>  <p>Tables A.1 and A.2 provide guidance on choosing the appropriate dosimetry to monitor dose to the lens of the eye.</p>   <p><strong>Table A.1: Recommended dosimetry for photon radiation based on energy and angle of incidence and uniformity of the radiation field</strong></p>
<table className="">
<tr>
<th>Mean energy<br /> &ge; 40 keV</th>
<th>Mean energy<br /> &lt; 40 keV</th>
<th className="text-center">Angle of incident radiation</th>
<th>Is the body uniformly exposed?</th>
<th>Operational quantity to be used</th>
<th>Recommended dosimeter type and placement</th>
</tr>
<tr>
<td className="text-center text-center">&ndash;</td>
<td className="text-center text-center">Yes</td>
<td>Not applicable</td>
<td className="text-center text-center">Yes</td>
<td className="text-center text-center">H<sub>p</sub>(0.07)</td>
<td className="text-center"><p>&ndash;Whole-body dosimeter<br />
&ndash;Worn on trunk</p></td>
</tr>
<tr>
<td className="text-center text-center">&ndash;</td>
<td className="text-center text-center">Yes</td>
<td>Not applicable</td>
<td>No, eyes preferentially exposed</td>
<td className="text-center text-center">H<sub>p</sub>(0.07)</td>
<td className="text-center"><p>&ndash;Extremity dosimeter<br />
&ndash;Worn near the eyes</p></td>
</tr>
<tr>
<td className="text-center text-center">Yes</td>
<td className="text-center text-center">&ndash;</td>
<td>Radiation is coming from the front or the person is moving about in the field</td>
<td className="text-center text-center">Yes</td>
<td className="text-center text-center">H<sub>p</sub>(0.07) or H<sub>p</sub>(10)</td>
<td className="text-center"><p>&ndash;Whole-body dosimeter<br />
&ndash;Worn on the trunk</p></td>
</tr>
<tr>
<td className="text-center text-center">Yes</td>
<td className="text-center text-center">&ndash;</td>
<td>Radiation is coming from the front or the person is moving about in the field</td>
<td>No, eyes preferentially exposed</td>
<td className="text-center text-center">H<sub>p</sub>(0.07) or H<sub>p</sub>(10)</td>
<td className="text-center"><p>&ndash;Extremity dosimeter<br />
&ndash;Worn near the eyes</p></td>
</tr>
<tr>
<td className="text-center text-center">Yes</td>
<td className="text-center text-center">&ndash;</td>
<td>Radiation <strong>is not</strong> coming from the front, <strong>nor</strong> is the person moving about in the field</td>
<td className="text-center text-center">Yes</td>
<td className="text-center text-center">H<sub>p</sub>(0.07)</td>
<td className="text-center"><p>&ndash;Whole-body dosimeter<br />
&ndash;Worn on the trunk</p></td>
</tr>
<tr>
<td className="text-center text-center">Yes</td>
<td className="text-center text-center">&ndash;</td>
<td>Radiation <strong>is not</strong> coming from the front, <strong>nor</strong> is the person moving about in the field</td>
<td>No, eyes preferentially exposed</td>
<td className="text-center text-center">H<sub>p</sub>(0.07)</td>
<td className="text-center"><p>&ndash;Extremity dosimeter<br />
&ndash;Worn near the eyes</p></td>
</tr>  </table>  <br />
<p><strong>Table A.2: Recommended dosimetry for beta/electron radiation based on energy and angle of incidence and uniformity of the radiation field</strong>  <table className="">
<tr>
<th>Are protective eye shields used (protective eyewear)?</th>
<th>Does eye shield absorb beta radiation?</th>
<th>Operational quantity to be used</th>
<th>Recommended dosimeter type and placement</th>
</tr>
<tr>
<td className="text-center text-center">No</td>
<td className="text-center text-center">N/A</td>
<td className="text-center text-center">H<sub>p</sub>(3)</td>
<td className="text-center">&ndash;Eye lens dosimeter<br />
&ndash;Worn near eyes</td>
</tr>
<tr>
<td className="text-center text-center">Yes</td>
<td className="text-center text-center">No</td>
<td className="text-center text-center">H<sub>p</sub>(3)</td>
<td className="text-center">&ndash;Eye lens dosimeter<br />
&ndash;Worn near eyes</td>
</tr>
<tr>
<td className="text-center text-center">Yes</td>
<td className="text-center text-center">Yes</td>
<td className="text-center text-center">Not needed (eye dose nil)</td>
<td className="text-center">Not needed (eye dose nil)</td>
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
<div id="appB"></div>
<h2 id="appB">Appendix B: Assessing the Activity Handled for Selecting Participants in a Routine Intake Monitoring Program</h2>
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
<h3 id="appB-1">B.1 Technical Basis</h3>  <p>Guidance on selecting participants in a routine bioassay program on the basis of the activity handled or the activity in process can be found in various references. The values in table 6 have been mainly based on the approach in the Health Physics Society&rsquo;s ANSI/HPS N13.39&ndash;2001: <em>American National Standard for Design of Internal Dosimetry Programs</em> [28]. However, similar values may be obtained using other references.</p>
<h4>Potential intake fraction</h4>   <p>The potential intake fraction (PIF) is defined as:</p>
<table className=" table-border-none">  <tr>  	<td className="text-center text-center" width="20">(21)</td>  	<td width="70" className="text-center">PIF = 10<sup>-6</sup> &times; R &times; C &times; D &times; O &times; S</td>  </tr>  </table>
<table className="table-border-none">  <tr>
<td>where:</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>  </tr>  <tr>
<td className="text-center">10<sup>-6</sup></td>
<td>=</td>
<td>Brodsky&rsquo;s factor</td>  </tr>  <tr>
<td className="text-center">R</td>
<td>=</td>
<td>release factor</td>  </tr>  <tr>
<td className="text-center">C</td>
<td>=</td>
<td>confinement factor</td>  </tr>  <tr>
<td className="text-center">D</td>
<td>=</td>
<td>dispersibility factor</td>  </tr>  <tr>
<td className="text-center">O</td>
<td>=</td>
<td>occupancy factor</td>  </tr>  <tr>
<td className="text-center">S</td>
<td>=</td>
<td>special form factor</td>  </tr>  </table>
<p><strong>Table B.1: Recommended values for calculating the potential intake fraction</strong></p>  <table className="">
<tr>
<th colSpan="3">Recommended Values</th>
</tr>
<tr>
<td rowspan="5"><strong>Release Factor (R)</strong></td>
<td>Gases, strongly volatile liquids</td>
<td className="text-center">1.0</td>
</tr>
<tr>
<td>Non-volatile powders, somewhat volatile liquids</td>
<td className="text-center">0.1</td>
</tr>
<tr>
<td>Liquids, general, large area contamination</td>
<td className="text-center">0.01</td>
</tr>
<tr>
<td>Solids, spotty contamination, material trapped on large particles, e.g., resins</td>
<td className="text-center">0.001</td>
</tr>
<tr>
<td>Encapsulated material</td>
<td className="text-center">0</td>
</tr>
<tr>
<td rowspan="5"><strong>Confinement Factor (C)</strong></td>
<td>Glovebox or hot cell</td>
<td className="text-center">0.01</td>
</tr>
<tr>
<td>Enhanced fume hood (enclosed with open ports for arms)</td>
<td className="text-center">0.1</td>
</tr>
<tr>
<td>Fume hood</td>
<td className="text-center">1.0</td>
</tr>
<tr>
<td>Bagged or wrapped contaminated material, bagged material in wooden/ cardboard boxes, greenhouses</td>
<td className="text-center">10</td>
</tr>
<tr>
<td>Open bench top, surface contamination in a room with normal ventilation</td>
<td className="text-center">100</td>
</tr>
<tr>
<td rowspan="2"><strong>Dispersibility factor (D)</strong></td>
<td>Actions that add energy to the material (heating, cutting, grinding, milling, welding, pressurizing, exothermic reactions)</td>
<td className="text-center">10</td>
</tr>
<tr>
<td>Other actions (that do not enhance dispersibility)</td>
<td className="text-center">1</td>
</tr>
<tr>
<td rowspan="4"><strong>Occupancy Factor (O)*</strong></td>
<td>Annual or one-time use</td>
<td className="text-center">1</td>
</tr>
<tr>
<td>Monthly use or a few times per year</td>
<td className="text-center">10</td>
</tr>
<tr>
<td>Weekly, tens of times per year or tens of days for a one-time project</td>
<td className="text-center">50</td>
</tr>
<tr>
<td>Essentially daily use</td>
<td className="text-center">250</td>
</tr>
<tr>
<td rowspan="2"><strong>Special Form Factor (S)</strong></td>
<td>DNA precursors (except <sup>32</sup>P, <sup>35</sup>S or <sup>131</sup>I)</td>
<td className="text-center">10</td>
</tr>
<tr>
<td>Other material</td>
<td className="text-center">1</td>
</tr>  </table>
<p>*&nbsp;It should be noted that the occupancy factor is intended to reflect the number of times a radionuclide is handled in one year. It is not intended to be applied as a fraction of the total time that a worker may be exposed to a radionuclide and is therefore a unit-less quantity. Setting O = 1, the PIF would represent in this specific case the fraction of activity handled that could be inhaled from a single use. In situations in which handling is more frequent that once per year, O &gt; 1, and the PIF represents the fraction of activity handled in one year that could potentially be inhaled.</p>
<h4>Values in table 6</h4>  <p>Table 6 is reproduced below.</p>  <p><strong>Table 6: Activity handled daily throughout the period of one year, above which routine bioassay is recommended</strong></p>
<table className="">
<tr>
<th className="text-center" rowspan="2">Confinement</th>
<th colSpan="3">Volatility</th>
</tr>
<tr>
<th>Gases and volatile liquids</th>
<th className="text-center">Powders</th>
<th>Non-volatile liquids and solids</th>
</tr>
<tr>
<td>None</td>
<td className="text-center">&ge; 2 &times; ALI</td>
<td className="text-center">&ge; 20 &times; ALI</td>
<td className="text-center">&ge; 200 &times; ALI</td>
</tr>
<tr>
<td>Fume hood</td>
<td className="text-center">&ge; 200 &times; ALI</td>
<td className="text-center">&ge; 2,000 &times; ALI</td>
<td className="text-center">&ge; 20,000 &times; ALI</td>
</tr>
<tr>
<td>Glovebox</td>
<td className="text-center">&ge; 20,000 &times; ALI</td>
<td className="text-center">&ge; 200,000 &times; ALI</td>
<td className="text-center">&ge; 2,000,000 &times; ALI</td>
</tr>
<tr>
<td className="text-center">Sealed vials and syringes</td>
<td className="text-center">&ge; 50 &times; ALI</td>
<td className="text-center">Not applicable</td>
<td className="text-center">&ge; 10,000 &times; ALI</td>
</tr>  </table>  <p>The values in table 6 were derived from the following parameter values:</p>
<table className="">
<tr>
<td className="text-center">Gases and volatile liquids</td>
<td>R = 1 (gases, strongly volatile liquids)<br />
D = 1 (no energy added to system)<br />
O = 250 (essentially daily use)<br />
S = 1</td>
</tr>
<tr>
<td className="text-center">Powders</td>
<td>R = 0.1<br />
D = 1 (no energy added to system)<br />
O = 250 (essentially daily use)<br />
S = 1</td>
</tr>
<tr>
<td className="text-center">Non-volatile liquids and solids</td>
<td>R = 0.01 (liquids, large area contamination)<br />
D = 1 (no energy added to system)<br />
O = 250 (essentially daily use)<br />
S = 1</td>
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
<div id="B.2"></div>
<h3 id="appB-2">B.2	Example: Determining Participation in a Bioassay Program</h3>  <p>Work at a radiopharmacy involves the handling of I-123 and I-131. Work with these radionuclides may be carried out by the same person; therefore, both radionuclides are considered in the determination of whether the workers should be participating in a routine intake monitoring program and, if so, for which radionuclides.</p>  <p>1) I-123: At this facility 1.1 GBq of I-123 are used twice per week to produce metaiodobenzylguanidine (mIBG) for patient doses. The process is carried out in a hot cell, and heating is applied as part of the procedure. The I-123 is initially in NaI form. The following parameters have been selected for Na I-123:</p>  <p>R = 1 (gases, strongly volatile liquids)</p>  <p>C = 0.01 (hot cell)</p>  <p>D = 10 (actions that add energy to the material, e.g., heating)</p>  <p>O = 100 (weekly &times; 2)</p>  <p>A Te-121 impurity is known to be present in the stock solution (up to 3% of the total activity, i.e., 33 MBq). The above parameter values are applied to the Te-121 impurity as well.</p>  <p>The 1.1 GBq of NaI-123 are required to produce 850 MBq of I-123-mIBG. The parameter values for handling this latter type of compound are:</p>  <p>R = 0.1 (somewhat volatile liquids, to account for an unbound impurity)</p>  <p>C = 1 (fume hood)</p>  <p>D = 1 (other actions (that do not enhance dispersibility))</p>  <p>O = 100 (weekly &times; 2)</p>  <p>The activity remaining in the fume hood, 250 MBq, as NaI-123, is assigned the following parameter values:</p>  <p>R = 1 (gases, strongly volatile liquids)</p>  <p>C = 1 (fume hood)</p>  <p>D = 1 (other actions (that do not enhance dispersibility))</p>  <p>O = 100 (weekly &times; 2)</p>  <p>Weekly QC checks are carried out on the product. These checks involve handling about 0.1 MBq I-123 as mIBG under a fume hood. The following parameters have been selected for this process:</p>  <p>R = 0.1 (non-volatile powders, somewhat volatile liquids)</p>  <p>C = 1 (fume hood)</p>  <p>D = 1 (other actions (that do not enhance dispersibility))</p>  <p>O = 50 (weekly)</p>  <p>In situations where the release factor for a non-volatile compound is not known, R = 0.1 should be selected by default. Alternately, a material specific value for R may be used when available.</p>  <p>2) 111 GBq of I-131 in the form of NaI is handled once weekly for dispensing patient doses. Handling is carried out under a fume hood. The following parameters have been selected:</p>  <p>R = 1 (gases, strongly volatile liquids)</p>  <p>C = 1 (fume hood)</p>  <p>D = 1 (other actions (that do not enhance dispersibility))</p>  <p>O = 50 (weekly)</p>  <p>The following parameters are defined in section 9.1.1:</p>
<table className=" table-border-none">  <tr>  	<td className="text-center text-center" width="20">(22)</td>  	<td width="70" className="text-center">  <math display=&#39;block&#39;>   <semantics>
<mrow>
<msub>
<mi>B</mi>
<mi>T</mi>
</msub>
<mo>=</mo><mstyle displaystyle=&#39;true&#39;>
<mo>&#x2211;</mo> <mrow>
<msub>
<mi>r</mi>
<mi>j</mi>
</msub>
</mrow>
</mstyle></mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaamOqamaaBa
aaleaacaWGubaabeaakiabg2da9maaqaeabaGaamOCamaaBaaaleaa
caWGQbaabeaaaeqabeqdcqGHris5aaaa@3CED@
</annotation>   </semantics>  </math>  	</td>  	</tr>  </table>  <br />
<table className=" table-border-none">  <tr>  	<td className="text-center text-center" width="20">(23)</td>  	<td width="70" className="text-center">  <math display=&#39;block&#39;>   <semantics>
<mrow>
<msub>
<mi>r</mi>
<mi>j</mi>
</msub>
<mo>=</mo><mfrac>
<mrow>
<msub>
<mi>Q</mi>
<mi>j</mi>
</msub>
<mo>&#x00D7;</mo><mi>P</mi><mi>I</mi><msub>
<mi>F</mi>
<mi>j</mi>
</msub>
</mrow>
<mrow>
<mn>0.05</mn><mi>A</mi><mi>L</mi><msub>
<mi>I</mi>
<mi>j</mi>
</msub>
</mrow>
</mfrac>
</mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaamOCamaaBa
aaleaacaWGQbaabeaakiabg2da9maalaaabaGaamyuamaaBaaaleaa
caWGQbaabeaakiabgEna0kaadcfacaWGjbGaamOramaaBaaaleaaca
WGQbaabeaaaOqaaiaaicdacaGGUaGaaGimaiaaiwdacaWGbbGaamit
aiaadMeadaWgaaWcbaGaamOAaaqabaaaaaaa@4732@
</annotation>   </semantics>  </math>  	</td>  	</tr>  </table>
<p>In the above expressions, Q<sub>j</sub> is the activity of radionuclide j handled daily (with specified confinement and release factors), PIF<sub>j</sub> is the potential intake fraction for the specified confinement and release factors, and ALI<sub>j</sub> is the annual limit on intake for radionuclide j.</p>  <p>The potential intake fraction is defined as PIF = 10<sup>-6</sup> &times; R &times; C &times; D &times; O &times; S, where</p>  <p>R	=	is the release factor, a measure of the volatility of compounds. R may take values from 0 for encapsulated materials to 1 for gases and strongly volatile liquids.</p>  <p>C	=	is the confinement factor. Values of C vary from 0.01, for gloveboxes and hot cells, to 100, to represent work on an open bench top.</p>  <p>D	=	is the dispersibility factor. For actions that add energy to the material (heating, cutting, grinding, milling, welding, pressurizing, exothermic reactions), D is assigned the value of 10. For all other actions that do not enhance dispersibility, D is assigned the value of 1.</p>  <p>O	=	is the occupancy factor, which reflects the frequency with which the activity "Q" is handled in one year. The product Q &times; O is the activity handled per year (Bq/year).</p>  <p>S	=	is the special form factor, which accounts for the risk associated with intakes of some DNA precursors. S is assigned a value of 10 for radionuclides bound to DNA precursors, with the exception of P-32, S-35, and I-131. For these radionuclides, and for all compounds other than DNA precursors, S is assigned a value of 1.</p>  <p>From section 9.1.1, routine individual intake monitoring should be carried out for workers whose value of B<sub>T</sub> &ge; 1. Furthermore, when B<sub>T</sub> &ge; 1, routine individual intake monitoring should be carried out for radionuclides whose value of r<sub>j</sub> &ge; 0.3.</p>  <p>The r<sub>j</sub> values for I-123 and I-131 in this example are shown in table B.2. The processes involving I-123 consist of only two items. Consequently, an I-123-specific value of r<sub>j</sub> is calculated as follows. The parameters Q<sub>a</sub> and Q<sub>b</sub> represent the I-123 activity handled per day of use for each of the processes involving I-123.</p>
<table className=" table-border-none">  <tr>  	<td className="text-center text-center" width="20">(24)</td>  	<td width="70" className="text-center">  <math display=&#39;block&#39;>   <semantics>
<mrow>
<msub>
<mi>r</mi>
<mrow>
<mi>I</mi><mn>123</mn></mrow>
</msub>
<mo>=</mo><mfrac>
<mrow>
<msub>
<mi>Q</mi>
<mi>a</mi>
</msub>
<mi>P</mi><mi>I</mi><msub>
<mi>F</mi>
<mi>a</mi>
</msub>
<mo>+</mo><msub>
<mi>Q</mi>
<mi>b</mi>
</msub>
<mi>P</mi><mi>I</mi><msub>
<mi>F</mi>
<mi>b</mi>
</msub>
</mrow>
<mrow>
<mn>0.05</mn><mi>A</mi><mi>L</mi><mi>I</mi></mrow>
</mfrac>
</mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaamOCamaaBa
aaleaacaWGjbGaaGymaiaaikdacaaIZaaabeaakiabg2da9maalaaa
baGaamyuamaaBaaaleaacaWGHbaabeaakiaadcfacaWGjbGaamOram
aaBaaaleaacaWGHbaabeaakiabgUcaRiaadgfadaWgaaWcbaGaamOy
aaqabaGccaWGqbGaamysaiaadAeadaWgaaWcbaGaamOyaaqabaaake
aacaaIWaGaaiOlaiaaicdacaaI1aGaamyqaiaadYeacaWGjbaaaaaa
@4C61@
</annotation>   </semantics>  </math>  	</td>  	</tr>  </table>
<p>For all processes that involve handling radioiodines in this case, B<sub>T</sub> = 111. Since B<sub>T</sub> &gt; 1, individual intake monitoring at this facility should be carried out. Because r<sub>j</sub> = 111 for I-131, the facility carries out routine thyroid monitoring for I-131. For I-123, the value of r<sub>j</sub> &asymp; 0.01. Consequently, routine intake monitoring for I-123 is not carried out at this facility.</p>  <p><strong>Table B.2: Example: Determining participation in a bioassay program</strong></p>
<table className="table table-striped">
<tr>
<th>Protocol</th>
<th colSpan="5">mIBG production</th>
<th>NaI dispensing</th>
</tr>
<tr>
<th>Radionuclide</th>
<th colSpan="4"><sup>123</sup>I</th>
<th><sup>121</sup>Te</th>
<th><sup>131</sup>I</th>
</tr>
<tr>
<th>Form</th>
<td className="text-center"><strong>mIBG</strong></td>
<td className="text-center"><strong>NaI</strong></td>
<td className="text-center"><strong>mIBG</strong></td>
<td className="text-center"><strong>NaI</strong></td>
<td className="text-center"><strong>NaI</strong></td>
<td className="text-center"><strong>NaI</strong></td>
</tr>
<tr>
<th className="text-center">Use description</th>
<td>Weekly QC checks</td>
<td>Remaining NaI handled in fume hood</td>
<td>mIBG handled in fume hood</td>
<td>NaI stock solution in hot cell</td>
<td>Impurity in stock solution (3% of total initial activity)</td>
<td>Stock used for dispensing</td>
</tr>
<tr>
<th>Activity per use (Q<sub>i</sub>) MBq</th>
<td className="text-center text-center">0.1</td>
<td className="text-center text-center">250</td>
<td className="text-center text-center">850</td>
<td className="text-center text-center">1,100</td>
<td className="text-center text-center">33</td>
<td className="text-center text-center">111,000</td>
</tr>
<tr>
<th>R</th>
<td className="text-center text-center">0.1</td>
<td className="text-center text-center">1</td>
<td className="text-center text-center">0.1</td>
<td className="text-center text-center">1</td>
<td className="text-center text-center">1</td>
<td className="text-center text-center">1</td>
</tr>
<tr>
<th>C</th>
<td className="text-center text-center">1</td>
<td className="text-center text-center">1</td>
<td className="text-center text-center">1</td>
<td className="text-center text-center">0.01</td>
<td className="text-center text-center">0.01</td>
<td className="text-center text-center">1</td>
</tr>
<tr>
<th>D</th>
<td className="text-center text-center">1</td>
<td className="text-center text-center">1</td>
<td className="text-center text-center">1</td>
<td className="text-center text-center">10</td>
<td className="text-center text-center">10</td>
<td className="text-center text-center">1</td>
</tr>
<tr>
<th>O</th>
<td className="text-center text-center">50</td>
<td className="text-center text-center">100</td>
<td className="text-center text-center">100</td>
<td className="text-center text-center">100</td>
<td className="text-center text-center">100</td>
<td className="text-center text-center">50</td>
</tr>
<tr>
<th>PIF<sub>i</sub></th>
<td className="text-center text-center">5&times;10<sup>-6</sup></td>
<td className="text-center text-center">1&times;10<sup>-4</sup></td>
<td className="text-center text-center">1&times;10<sup>-5</sup></td>
<td className="text-center text-center">1&times;10<sup>-5</sup></td>
<td className="text-center text-center">1&times;10<sup>-5</sup></td>
<td className="text-center text-center">5&times;10<sup>-5</sup></td>
</tr>
<tr>
<th>e(50) Sv/Bq</th>
<td className="text-center text-center">2.1&times;10<sup>-10</sup></td>
<td className="text-center text-center">2.1&times;10<sup>-10</sup></td>
<td className="text-center text-center">2.1&times;10<sup>-10</sup></td>
<td className="text-center text-center">2.1&times;10<sup>-10</sup></td>
<td className="text-center text-center">3.9&times;10<sup>-10</sup></td>
<td className="text-center text-center">2.0&times;10<sup>-8</sup></td>
</tr>
<tr>
<th>ALI Bq</th>
<td className="text-center text-center">9.5&times;10<sup>7</sup></td>
<td className="text-center text-center">9.5&times;10<sup>7</sup></td>
<td className="text-center text-center">9.5&times;10<sup>7</sup></td>
<td className="text-center text-center">9.5&times;10<sup>7</sup></td>
<td className="text-center text-center">5.1&times;10<sup>7</sup></td>
<td className="text-center text-center">1.0&times;10<sup>6</sup></td>
</tr>
<tr>
<th>r<sub>j</sub></th>
<td className="text-center text-center" colSpan="4">0.01</td>
<td className="text-center text-center">1.3&times;10<sup>-4</sup></td>
<td className="text-center text-center">111</td>
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
<div id="AppC"></div>
<h2 id="appC">Appendix C: Radiobioassay Protocols for Responding to Abnormal Intakes of Radionuclides</h2>
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
<h3 id="appC-1">C.1 Introduction</h3>  <p>This appendix describes two radiobioassay protocols that may be used by CNSC licensees to respond to situations in which persons may have experienced an abnormal intake of radioactive material. It also provides advice on how to collect and handle radiobioassay samples.</p>  <p>Sections C.6 and C.7 describe two response protocols, involving the conduct of non-routine radiobioassays that can be used by CNSC licensees to ascertain the radiation dose to individuals when an abnormal intake of a radionuclide is known or suspected to have occurred.</p>
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
<h3 id="appC-2">C.2 Radiobioassay Methods</h3>  <p>The radiation protection programs that the RPR require of CNSC licensees will typically include provisions for radiobioassays. These radiobioassays may be "direct" or "indirect".</p>  <p>A "direct" (or <em>in vivo</em>) radiobioassay is a measurement on the human body for the purpose of determining the amount of radioactive material in the body, utilizing instrumentation that detects the radiation emitted from the radioactive material.</p>  <p>An "indirect" (or <em>in vitro</em>) radiobioassay consists of the collection and analysis of a sample of human hair, tissue, blood, urine or feces for the purpose of determining the amount of radioactive material that might have been taken into the body.</p>
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
<h3 id="appC-3">C.3	"Routine" and "Non-Routine" Radiobioassays</h3>  <p>Direct and indirect radiobioassays to ascertain radiation doses may be further characterized as "routine" or "non-routine", as follows:</p>
<ul>
<li>A "routine" radiobioassay is any radiobioassay that involves collecting and analyzing samples or taking measurements on the body at scheduled intervals, or at predetermined times, during normal operations.</li>
<li>A "special" radiobioassay is any radiobioassay that is implemented as part of an ad hoc response to a particular circumstance, such as a known or suspected intake of radioactive material due to an abnormal incident in the workplace. "Non-routine" radiobioassays are often termed "ad hoc" or "special" radiobioassays.</li>
</ul>  <p>By definition, a dose monitoring program that includes routine radiobioassays is proactive and precautionary in nature. Typically, such a program is intended to provide routine and timely detection, measurement and confirmation of any radioactive intakes that occur on an ongoing basis during normal operations. An example of a routine radiobioassay is the submission of a biweekly (every 14 days) urine sample for analysis for the presence of tritiated water.</p>  <p>A monitoring program that consists only of non-routine radiobioassays is typically reactive and ad hoc in nature. Such a program is usually custom designed for the purpose of obtaining key parameters that are necessary in order to conduct a specific dose assessment in response to a specific, identified need. To avoid prejudicing the results, a non-routine radiobioassay is typically performed with the subject individual removed from further contact with, or exposure to, radioactive substances.</p>
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
<h3 id="appC-4">C.4	Selecting and Applying Radiobioassay Methods</h3>  <p>In situations in which response protocols involving non-routine radiobioassays are implemented, the associated program for conducting radiobioassays and analyses will typically depend upon case-specific factors, including:</p>
<ul>
<li>the time of intake of the radioactive contaminant(s)</li>
<li>the mode of intake of the radioactive contaminant(s)</li>
<li>the preliminary assessment of the radioactive intake and resulting dose, using the precipitating radiobioassay result and default parameters</li>
<li>whether the radiation is due to a single radionuclide or a mixture of radionuclides</li>
<li>the chemical and physical forms (e.g., particle size) of the radioactive contaminant(s)</li>
<li>the types and energy of the radiation emitted by the contaminant(s)</li>
<li>the rate of decay of the radioactive contaminant(s)</li>
<li>the metabolic characteristics and behaviour of each suspected radioactive contaminant (e.g., retention time within the body, solubility within the body, rate of excretion from the body)</li>
<li>when the radiobioassay results are expected be available</li>
<li>the number of radiobioassay results required</li>
<li>the convenience, sensitivity, quality and suitability of the available radiobioassay equipment and facilities</li>
</ul>  <p>The radiobioassay methods that are most often used to assess radiation doses from internal sources are <em>in vivo</em> counting and the analysis of collected samples of excreta, such as urine and feces. These methods are appropriate to a variety of situations. For example, radiobioassays of excreta may be the only reasonable option in a situation that involves radionuclides with no gamma-ray emissions or only low-energy photon emissions. Conversely, if a person may have been internally exposed to a mixture of radionuclides that emits penetrating gamma photons, a combination of <em>in vivo</em> counting, and the collection and analysis of excreta may be appropriate.</p>  <p>In certain situations where a standard radiobioassay method, or a combination of such methods, does not suffice to detect all radionuclides of concern, it may still be possible to use the method or combination of methods in conjunction with other knowledge or information to identify and estimate the impact of all radionuclides of concern. For example, where standard methods indicate the presence of certain radionuclides, it may be reasonable to conclude that certain other radionuclides, that is, those that are known to be normally associated with the radionuclides detected by the standard methods, are also present. The routine association, in irradiated uranium fuel, of fission product gamma emitters (detectable by in vivo counting or gamma spectroscopy on fecal samples using germanium detectors) with certain transuranic radionuclides is an example of such a situation. Accordingly, when a standard radiobioassay method detects a surrogate radionuclide, that discovery in light of the known or typical association of the surrogate with other radionuclides, may indicate that associated radionuclides that can only be detected by some supplementary <em>in vivo</em> counting techniques or special analyses (e.g., fission track analysis for Pu 239 in urine) are also present.</p>  <p>In addition, relevant metabolic data &ndash; such as organ or whole-body retention times, and urine and fecal excretion rates &ndash; can often be used (with appropriate adjustments) along with the results of radiobioassays to help ascertain the radiation exposures and doses from radioactive intakes.</p>
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
<h3 id="appC-5">C.5	Response Protocols</h3>  <p>The response protocols that are described in this section are intended to be used following suspected or actual intakes of significant quantities of radionuclides. Such intakes typically occur during abnormal incidents in the workplace, such as those involving:</p>
<ul>
<li>the breach or failure of a sealed source</li>
<li>the handling of unsealed radioactive sources</li>
<li>air-borne contamination as a consequence of fires or explosions</li>
<li>the failure of personnel protection measures, such as respiratory equipment, during the maintenance or servicing of contaminated equipment or systems</li>
</ul>  <p>An abnormal incident that occurs at a CNSC-licensed facility or during a CNSC-regulated activity could trigger a requirement (under applicable legislation, a CNSC licence or the licensee&rsquo;s radiation protection program) for a non-routine radiobioassay.</p>  <p>In particular, when a licensee becomes aware that a dose to a person or an organ or a tissue may have exceeded an applicable dose limit prescribed by sections 13, 14 or 15 of the RPR, the licensee must conduct an investigation in order to determine the magnitude of the dose and to establish the causes of the exposure (paragraph 16(c) of the RPR). The activities completed as part of the required investigation to determine the magnitude of the dose could include the conduct of a non-routine bioassay.</p>  <p>If the results of non-routine radiobioassays are to be credible, care should be given to such details as the choice and application of assay methods, the timing and number of <em>in vivo counts</em>, or the timing of the collection of excreta samples relative to the time of intake of radiation. Accordingly, persons who are responsible for designing and implementing response protocols should exercise competent judgment on key matters. For example, they should decide whether to collect and retain samples for confirmatory analyses, they should select appropriate times for truncation of sampling, and they should weigh and balance the associated advantages and disadvantages.</p>  <p>When selecting the preferred radiobioassay methods and identifying any complementary requirements for additional biological monitoring, the responsible persons should take into account the factors discussed in section 4 above.</p>  <p>The response protocols that are described in section 6 of this appendix can be used by licensees to ascertain the committed effective dose (CED) resulting from an intake of radionuclides. However, users should exercise sound judgement. They should adjust and refine the recommended protocols to suit their specific needs and individual circumstances. These needs and circumstances will typically depend upon case-specific factors, including radiation hazards in the workplaces and the circumstances associated with the internal exposures.</p>  <p>It is recommended that material-specific data (e.g., solubility, particle size) be used over International Commission on Radiological Protection (ICRP) defaults in such evaluations, because observed rates are typically more realistic than default values and thus more likely to result in more realistic assessment of the associated radiation doses. An individual&rsquo;s rate of retention or excretion cannot be adequately constructed on the basis of two or three randomly collected measurements or samples. Accordingly, these recommendations and protocols are designed to systematically yield case-specific radiobioassay data that are sufficient to generate scientifically defensible dose assessments.</p>  <p>The following situations would trigger the response protocols described in sections C.6 and C.7:</p>
<ul>
<li>when a routine radiobioassay program yields an abnormal result, indicating that a person may have been exposed to abnormal levels of radiation</li>
<li>when it is known or suspected that an abnormal incident has occurred (e.g., an initiating event such as a fire, explosion or a failure of a ventilation system) that has a recognized potential to give rise to significant intakes of radionuclides by an affected person</li>
</ul>  <p>Figures C.1 and C.2 illustrate excretion-sampling patterns that could be appropriate in specific situations.</p>
<div className="span-5">  <p><strong>Figure C.1: A typical schedule for sampling fecal excretions that may contain Type S compounds</strong></p>  <img src="/images/regdocs/regdoc-2-7-2-vol1/figure-c1-eng.png" alt="" />  </div>  <div className="clear"></div>  <br />
<p><strong>Figure C.2: A typical schedule for sampling urine excretions that may contain Type F compounds</strong></p>  <div className="span-5">  <img src="/images/regdocs/regdoc-2-7-2-vol1/figure-c2-eng.png" alt="" />  </div>  <div className="clear"></div>
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
<h3 id="appC-6">C.6	A Response Protocol Triggered by a Routine Radiobioassay</h3>  <p>As the first phase of this recommended response protocol:</p>
<ol>
<li>remove the exposed individual from any possibility of further intake</li>
<li>confirm the precipitating radiobioassay result as soon as practical, using the laboratory that performed the analysis</li>
<li>perform preliminary assessments of intake and dose using the results of the initial radiobioassays, taking factors such as those presented in section 4 into account</li>
<li>if the precipitating result is unusually high (e.g., much greater than a relevant "action level", as defined in section 6(1) of the RPR, consider confirming it with a laboratory that is independent of the laboratory that obtained the precipitating result</li>
<li>where possible, when routine radiobioassays of a sample yield elevated results, retain the precipitating sample until all investigations associated with the incident are complete</li>
</ol>  <p>Typically, samples can be most conveniently retained for use in repeat or additional analyses when only a small portion of the total collection is required for each analysis. For example, each determination of tritium in tritiated water in urine typically requires only 5 ml of urine, whereas the typical volume of a urine sample may range from 0.1 L to 1 L. Accordingly, a relatively small sample of urine, which occupies commensurate storage space, is sufficient for several "tritium" analyses.</p>  <p>Where practical, the unused portions of a urine or fecal sample should be retained for further analysis. For example, when non-destructive gamma spectroscopy of a feces sample indicates significantly elevated levels of fission and activation products, it may be both practical and prudent to reduce the sample to ash, and to save a portion of the ash for further analyses. In a few situations, it might be worthwhile to retain the unused portion of a sample until such time as improvements in analytical techniques or equipment give rise to more sensitive, accurate or reliable results.</p>  <p>As part of this protocol, non-routine sampling and radiobioassays are required in response to a routine bioassay that indicates that a worker has received a radiation dose or radioactive intake that exceeds a regulatory limit, or that equals or exceeds a relevant &ldquo;action level&rdquo;, as defined in section 6(1) of the RPR.</p>  <p>To be effective, a follow-up program of non-routine bioassays should take relevant factors into account. These factors include the considerations discussed in section C.4, the sampling and counting recommendations in table C.1, the radiation protection program, and the characteristics of the radionuclides involved.</p>  <p>Table C.1 recommends biological sampling and <em>in vivo</em> counting campaigns for three contiguous time periods ("1&ndash;10 days", "10&ndash;100 days", and "More than 100 days"), following a routine bioassay that indicates that a radioactive intake equals or exceeds an trigger level. The recommendations of table C.1 cover the time period during which the exposed person is removed from further work involving radiation or radioactive substances in the workplace.</p>  <p>Table C.1 addresses many, but not all, situations that are likely to be encountered by CNSC licensees. For example, where short-lived radionuclides (i.e., less than 3 days) are of concern, the time that is available for the purpose of conducting effective sampling will be commensurately short, and consequently, the sampling regime recommended in table C.1 may not be entirely appropriate. Similarly, the recommendations of table C.1 may not be entirely appropriate in situations in which long-lived radionuclides are incorporated into compounds that have short half-lives (less than 3 days). For such situations, sample daily during the 10 days that immediately follow intake in order to accurately define the shapes of the individual&rsquo;s retention or excretion curves.</p>  <p>Where the results of a routine radiobioassay indicate that a worker&rsquo;s intake of radioactive material may be greater than a relevant trigger level, arrange for the non-routine sampling and radiobioassays recommended in table C.1, and for any supplementary biological samplings (e.g., of blood, saliva or breath) and radiobioassays that are required by the applicable radiation protection program, or necessary in order to generate or improve estimates of radioactive intake or radiation doses. For example, when an estimated dose exceeds 100 mSv, collect blood samples for chromosomal analyses.</p>
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
<h3 id="appC-7">C.7	A Response Protocol Triggered by an Abnormal Incident</h3>  <p>This protocol is intended to be implemented in response to abnormal incidents in the workplace, such as accidents involving fire, explosions, failure of ventilation systems or failures of protective equipment. Abnormal incidents typically increase the levels of airborne radioactivity, and can result in increased intakes of radioactive materials by affected workers. In addition abnormal incidents that result in skin wetting by tritiated water can also result in increased intakes of radioactive material.</p>  <p>Because incidents such as fires, explosions or ventilation failures may be self-evident or typically trigger protective alarms or monitors, their times of occurrence are usually well known. When this is so, the time of any associated intake of radioactive contaminants by workers can typically be established with similar accuracy.</p>  <p>Following an abnormal incident at a nuclear facility, an increased intake by workers may be suspected from indirect evidence. For example, the detection of facial or nasal contamination by portal monitors or hand-held detectors, or the presence of surface cuts or sores that are radioactively contaminated, the presence of tritiated water on skin may indicate that the individuals has been subjected to an unplanned intake. Such evidence can be sufficient reason to immediately initiate a non-routine radiobioassay, instead of awaiting the results of routine radiobioassay monitoring.</p>  <p>Where an intake of radioactive contaminants is suspected but not confirmed, the timely collection of non-radiobioassay and radiobioassay samples may help establish whether or not such an incident has occurred.</p>  <p>Non-radiobioassay samples include swabs of nasal fluid and surface wipes of protective clothing or workplace surfaces. Either the presence of radionuclides in such media or the lack thereof can serve as a reasonable indicator of whether an inhalation incident has occurred.</p>  <p>Collect samples, confirm results and estimate doses as follows:</p>
<ol>
<li>Arrange for the timely collection of radiobioassay samples from the exposed individuals and the timely completion of <em>in vivo</em> counting, since the initial results of the radiobioassay or <em>in vivo</em> monitoring will influence decisions about further sampling; in cases of suspect tritium intakes, the bladder should be voided prior to bioassay sample collection.</li>
<li>If widespread contamination is present, take particular care to obtain uncontaminated radiobioassay samples (see section C.8 below).</li>
<li>While awaiting the results of the initial radiobioassay sampling and the initial <em>in vivo</em> monitoring, continue to sample at the frequencies recommended in table C.1.</li>
<li>Review the results of the initial <em>in vitro</em> radiobioassay or <em>in vivo</em> counting and compare them with the results of the available non-radiobioassay samples, such as nasal swabs or surface contamination wipe samples.</li>
<li>If the radionuclides detected in the nasal swab and workplace wipe samples are the same as those reported in the radiobioassay results, consider this agreement to be a confirmation that a corresponding radioactive intake has occurred.</li>
<li>Perform preliminary assessments of intake and dose using the results of the initial radiobioassay results, taking factors such as those presented in section C.4 into account.</li>
</ol>  <p>Possible responses to the preliminary assessments of intake and dose are shown below:</p>
<ul>
<li>If the estimated intake or dose is less than a relevant "trigger level", adjust the protocols recommended in table C.1 accordingly. Since the intake is relatively low, consider ending sampling much sooner than recommended in the table.</li>
<li>If the estimated intake or dose is equal to or greater than a relevant "trigger level", follow the protocols recommended in table C.1. If appropriate, arrange for additional specialized analyses and biological monitoring, as discussed in sections C.4 and C.5, respectively. For example, if the estimated dose may exceed 100 mSv, collect blood samples for chromosomal analyses.</li>
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
<div id="C.8"></div>
<h3 id="appC-8">C.8	Collecting and Handling Radiobioassay Samples</h3>  <h4>C.8.1	General rules</h4>
<ul>
<li>Ensure that all persons who handle radiobioassay samples are properly instructed in the safe handling of biological and radioactive specimens.</li>
<li>Use the services of a qualified medical agency or practitioner to collect blood samples.</li>
<li>When collecting samples in restricted zones, work in areas where the probabilities of contamination of the samples are lowest.</li>
<li>Collect all samples in sterile disposable containers.</li>
<li>When a fecal sample is required from a subject, instruct the subject to exercise caution to avoid contaminating the required sample with urine.</li>
<li>After collecting a sample in a potentially contaminated workplace, shower or wash your hands carefully before removing the samples to an unrestricted area.</li>
<li>Where possible, retain all samples collected until all investigations associated with the incident are complete.</li>
</ul>
<h4>C.8.2	Labelling samples</h4>  <p>After collecting a radiobioassay sample from a person, label the sample container with the name or identification number of the person, and the date and time of sample collection.</p>
<h4>C.8.3	Treating and storing urine samples</h4>  <p>If the urine sample is to be retained for more than 24 hours before it is analyzed, place the sample in cold storage (such as in a refrigerator or cooler) immediately following its collection.</p>  <p>If a urine sample is to be retained for a significant or indeterminate period of time before it is analyzed, treat the sample to prevent or minimize bacterial growth or radionuclide losses to the walls of the sample container immediately following collection of the sample. Use measures that are appropriate to the situation, taking into account the characteristics and chemical forms of the radionuclides present in the sample. Typical approaches include adding acid to certain types of samples to prevent precipitation, or adding a preservative such as thymol to minimize bacterial growth.</p>  <p>Where appropriate, urine samples may be preserved by freezing. Freezing may be particularly appropriate and convenient for urine samples containing organically-bound tritium, particularly those which may require a repeat or confirmatory analysis to determine the organically-bound tritium present in the sample. Where possible, retain part of the collected samples for repeat or multiple analyses.</p>
<h4>C.8.4	Collecting and storing fecal samples</h4>  <p>When collecting fecal samples, use specialty kits (e.g., a "commode specimen collection system") that are designed for the purpose and readily available from commercial medical equipment suppliers.</p>  <p>Fecal samples that are not to be analyzed immediately must be frozen as soon as they are received.</p>
<h4>C.8.5	Packaging and transporting radiobioassay samples</h4>  <p>To prevent discharge, emission or loss of radiobioassay samples during transport, package them securely in accordance with paragraph 2.2(3)(b) of the <a href="https://www.tc.gc.ca/eng/tdg/clear-tofc-211.htm"><em>Consolidated Transportation of Dangerous Goods Regulations including Amendment (SOR/2017-253)</em></a>. Pay particular attention to the packaging of liquids and fluid samples.</p>  <p>If liquid radiobioassay samples are to be more than two hours in transport, package them in a cooler containing dry ice.  Maintain fecal samples in a frozen state during transport.</p>  <p><strong>Table C.1: Conducting radiobioassays when the preliminary estimate of intake is equal to or greater than a trigger level</strong></p>
<table className="">
<tr>
<th>Period after radioactive intake</th>
<th className="text-center">Urine-sampling frequency</th>
<th className="text-center">Fecal-sampling frequency</th>
<th className="text-center"><em>In vivo</em> count frequency</th>
<th className="text-center">Comments</th>
</tr>
<tr>
<td>1-10 days</td>
<td>Collect a 24-hour urine sample each day.</td>
<td>Collect a 24-hour fecal sample each day.</td>
<td>Perform in <em>vivo</em> counting each day.</td>
<td>End sampling and/or <em>in vivo</em> counting when results fall below detection limits or reach chronic baseline values.</td>
</tr>
<tr>
<td>10-100 days</td>
<td>Collect a 24-hour urine sample every 14 days.</td>
<td>Collect 24-hour fecal samples on 3 consecutive days.</td>
<td>Repeat the collection program every 14 days.	Perform <em>in vivo</em> counting every 14 days.</td>
<td>End sampling or <em>in vivo</em> counting when results fall below detection limits or reach chronic baseline values.</td>
</tr>
<tr>
<td>More than 100 days.</td>
<td>Collect a 24-hour urine sample every 30 days.</td>
<td>Collect 24-hour fecal samples on 3 consecutive days. Repeat collection program every 30 days.</td>
<td>Perform <em>in vivo</em> counting every 30 days.</td>
<td>End sampling and/or <em>in vivo</em> counting when results fall below detection limits or reach chronic baseline values.</td>
</tr>  </table>  <p>Notes:</p>
<ul>
<li>The radiobioassay schedule recommended in table C.1 should typically be followed until the subject returns to work. However, users may need to modify the protocol to take into account individual circumstances. For example, the three discrete sampling periods shown in this table may not be appropriate for radionuclides with half-lives &lt; 3 days, for long-lived radionuclides in chemical form that have biological half-lives &lt; 3 days, and when the intake is above a detection limit but below an action level.</li>
<li>In table C.1 a "24-hour" sample is a sample integrated over a contiguous 24-hour period.</li>
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
<div id="appD"></div>
<h2 id="appD">Appendix D: Radionuclide-Specific Recommendations Related to Bioassay Measurements and Internal Dosimetry &ndash; Tritium</h2>
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
<h3 id="appD-1">D.1	Analytical Methods for Tritium in Urine</h3>  <p>Tritium in urine is most readily assessed by liquid scintillation counting (LSC) of a urine sample. This method involves adding an aliquot of the urine sample to an organic liquid scintillator. Light photons, emitted by the scintillator as it absorbs beta particle energy, are detected by photomultiplier tubes operating in coincidence.</p>  <p>Because tritium is a low-energy beta emitter it may be necessary to correct for other beta emitters in a sample. Consequently, it is important to have a good knowledge of the beta-emitting radionuclides that may be present in the workplace. In order to take these interfering radionuclides into consideration, energy discrimination regions may be set on the LSC system. For example, energy discrimination regions may be selected in the ranges 0 to 18.6 keV for H-3, 35 to 110 keV for C-14, and 180 to 2,000 keV for other beta-emitting radionuclides. Regions should be selected so as to optimize the detection efficiency for counting urine samples.</p>  <p>The LSC system&rsquo;s energy windows should be set using an unquenched standard (as quality control to verify the instrument stability). This setting should also be verified periodically. Because chemical and colour quenching from materials in the sample influence the counting efficiency, and because these factors vary from one sample to another, the assumed efficiency should be based on the characteristics of each sample. Most LSCs have an automatic quench correction mechanism. When this is not the case, a quench calibration curve should be established in order to determine the efficiency. The efficiency for each energy region should be calibrated using traceable standards under various quench conditions.</p>  <p>In addition, volumetric dispensers should be verified periodically and corrections made if the variation exceeds &plusmn; 10%. Periodic verification of the system performance should be carried out.</p>  <p>Sample preparation should be carried out under a fume hood. An aliquot of the sample and LSC cocktail are dispensed into an LSC vial and mixed thoroughly. Traceability checks should be used to ensure reliable sample identification. The activity measured in the low energy region may be corrected to account for the low energy contributions from the higher energy beta particles if such higher energy beta- emitting radionuclides are present.</p>
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
<h3 id="appD-2">D.2	Monitoring Frequency</h3>  <p>Doses to workers from intakes of tritiated water, or tritiated compounds that partially convert to hydrogenated tritium oxide (HTO) in the body (e.g., elemental tritium gas (HT)), should be ascertained by linear interpolation between successive routine bioassay measurements. The linear interpolation method may introduce some bias in the calculated doses. This bias should not exceed 50%. The routine monitoring frequency should be determined for each worker potentially exposed to HTO (or to tritiated compounds that partially convert to HTO in the body) such that the bias does not exceed 50%. The following criteria ensure that this condition is met:</p>
<ul>
<li>a single measurement of HTO in urine exceeds 1 MBq/L: weekly monitoring</li>
<li>a single measurement of HTO in urine exceeds 0.2 MBq/L: monitoring every 14 days</li>
</ul>  <p>Workers remaining between 45 kBq/L and 0.2 MBq/L should submit routine urine samples at least monthly. Those individuals not submitting routine urine samples should submit a urine sample for tritium analysis when exposures to HTO may exceed 10 DAC-hours. The derived air concentration (DAC) for HTO should be calculated by reducing the DAC for inhalation of tritiated water only by a factor of 1.5 to account for absorption of tritiated water through intact skin.</p>  <p>In special bioassay monitoring, because the concentration of HTO in body water reaches a maximum a few hours after an acute intake, sampling should account for dilution of HTO with the existing bladder contents.</p>
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
<h3 id="appD-3">D.3	Ascertaining Dose</h3>  <p>When routine bioassay is carried out and no significant acute intake is suspected (i.e., when special bioassay monitoring is not initiated), the committed effective dose (CED) (in Sv), resulting from tritium intakes during a reporting period (e.g., one quarter or one year) should be ascertained using the method illustrated below. This method should be used for intakes of HTO and HT.</p>  <p>The accumulated dose, E<sub>k</sub>, received during the reporting period k, should be calculated from a series of N measurements of tritium in urine made during period k, as shown below.</p>
<table className=" table-border-none">  <tr>  	<td className="text-center text-center" width="20">(25)</td>  	<td width="70" className="text-center">  <math display=&#39;block&#39;>   <semantics>
<mrow>
<msub>
<mi>E</mi>
<mi>k</mi>
</msub>
<mo>=</mo><mn>5.8</mn><mo>&#x00D7;</mo><msup>
<mrow>
<mn>10</mn></mrow>
<mrow>
<mo>&#x2212;</mo><mn>11</mn></mrow>
</msup>
<mstyle displaystyle=&#39;true&#39;>
<munderover>
<mo>&#x2211;</mo>
<mrow>
<mi>i</mi><mo>=</mo><mn>0</mn></mrow>
<mrow>
<mi>i</mi><mo>=</mo><mi>N</mi><mo>&#x2212;</mo><mn>1</mn></mrow>
</munderover>
<mrow>
<mfrac>
<mrow>
<msub>
<mi>C</mi>
<mi>i</mi>
</msub>
<mo>+</mo><msub>
<mi>C</mi>
<mrow>
<mi>i</mi><mo>+</mo><mn>1</mn></mrow>
</msub>
</mrow>
<mn>2</mn>
</mfrac>
</mrow>
</mstyle><mrow><mo>(</mo>
<mrow>
<msub>
<mi>t</mi>
<mrow>
<mi>i</mi><mo>+</mo><mn>1</mn></mrow>
</msub>
<mo>&#x2212;</mo><msub>
<mi>t</mi>
<mi>i</mi>
</msub>
</mrow>
<mo>)</mo></mrow></mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaamyramaaBa
aaleaacaWGRbaabeaakiabg2da9iaaiwdacaGGUaGaaGioaiabgEna
0kaaigdacaaIWaWaaWbaaSqabeaacqGHsislcaaIXaGaaGymaaaakm
aaqahabaWaaSaaaeaacaWGdbWaaSbaaSqaaiaadMgaaeqaaOGaey4k
aSIaam4qamaaBaaaleaacaWGPbGaey4kaSIaaGymaaqabaaakeaaca
aIYaaaaaWcbaGaamyAaiabg2da9iaaicdaaeaacaWGPbGaeyypa0Ja
amOtaiabgkHiTiaaigdaa0GaeyyeIuoakmaabmaabaGaamiDamaaBa
aaleaacaWGPbGaey4kaSIaaGymaaqabaGccqGHsislcaWG0bWaaSba
aSqaaiaadMgaaeqaaaGccaGLOaGaayzkaaaaaa@5A1E@
</annotation>   </semantics>  </math>  	</td>  	</tr>  </table>
<p>Here, C<sub>i</sub> is the concentration of tritiated water in urine, in units of Bq/L, measured at time ti days. The concentration C<sub>0</sub> is the result of the last concentration measurement made in the reporting period previous to period k.</p>  <p>The CED, that is, the effective dose received from HTO in the body for 50 years following intake, from the end of reporting period k, is E<sub>k</sub>(50). It should be calculated as follows.</p>
<table className=" table-border-none">  <tr>  	<td className="text-left text-center" width="20">(26)</td>  	<td width="70" className="text-left">E<sub>k</sub>(50) = 8.5 &times; 10<sup>-10</sup>C<sub>N</sub></td>  </tr>  </table>
<p>The committed effective dose for a dosimetry year is the sum of all E<sub>k</sub> values for the year, and E<sub>k</sub>(50). In figure D.1, ta is a reporting time, and the dose reported at ta is the accumulated dose to time t<sub>1</sub>, as well as the dose between t<sub>1</sub> and t<sub>a</sub> (calculated assuming the biological half-life of HTO to be 10 days). The dose accumulated between t<sub>a</sub> and t<sub>b</sub> may be calculated as follows:</p>
<table className=" table-border-none">  <tr>  	<td className="text-center text-center" width="20">(27)</td>  	<td width="70" className="text-center">  <math display=&#39;block&#39;>   <semantics>
<mrow>
<msub>
<mi>E</mi>
<mi>b</mi>
</msub>
<mo>=</mo><mn>5.8</mn><mo>&#x00D7;</mo><msup>
<mrow>
<mn>10</mn></mrow>
<mrow>
<mo>&#x2212;</mo><mn>11</mn></mrow>
</msup>
<mrow><mo>[</mo> <mrow>
<mfrac>
<mrow>
<msub>
<mi>C</mi>
<mn>1</mn>
</msub>
<mo>+</mo><msub>
<mi>C</mi>
<mn>2</mn>
</msub>
</mrow>
<mn>2</mn>
</mfrac>
<mrow><mo>(</mo>
<mrow>
<msub>
<mi>t</mi>
<mn>2</mn>
</msub>
<mo>&#x2212;</mo><msub>
<mi>t</mi>
<mn>1</mn>
</msub>
</mrow>
<mo>)</mo></mrow><mo>+</mo><mfrac>
<mrow>
<msub>
<mi>C</mi>
<mn>2</mn>
</msub>
<mo>+</mo><msub>
<mi>C</mi>
<mn>3</mn>
</msub>
</mrow>
<mn>2</mn>
</mfrac>
<mrow><mo>(</mo>
<mrow>
<msub>
<mi>t</mi>
<mn>3</mn>
</msub>
<mo>&#x2212;</mo><msub>
<mi>t</mi>
<mn>2</mn>
</msub>
</mrow>
<mo>)</mo></mrow><mo>+</mo><mstyle displaystyle=&#39;true&#39;>
<mrow><munderover>
<mo>&#x222B;</mo>
<mn>0</mn>
<mrow>
<msub>
<mi>t</mi>
<mi>b</mi>
</msub>
<mo>&#x2212;</mo><msub>
<mi>t</mi>
<mn>3</mn>
</msub>
</mrow>
</munderover>
<mrow>
<msup>
<mi>e</mi>
<mrow>
<mo>&#x2212;</mo><mi>&#x03BB;</mi><mi>t</mi></mrow>
</msup>
<mi>d</mi><mi>t</mi><mo>&#x2212;</mo><msub>
<mi>C</mi>
<mn>1</mn>
</msub>
<mstyle displaystyle=&#39;true&#39;>
<mrow><munderover>
<mo>&#x222B;</mo>
<mn>0</mn>
<mrow>
<msub>
<mi>t</mi>
<mi>a</mi>
</msub>
<mo>&#x2212;</mo><msub>
<mi>t</mi>
<mn>1</mn>
</msub>
</mrow>
</munderover>
<mrow>
<msup>
<mi>e</mi>
<mrow>
<mo>&#x2212;</mo><mi>&#x03BB;</mi><mi>t</mi></mrow>
</msup>
<mi>d</mi><msub>
<mi>t</mi>
<mn>1</mn>
</msub>
</mrow>
</mrow>
</mstyle></mrow>
</mrow>
</mstyle></mrow> <mo>]</mo></mrow></mrow>  <annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=  feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn  hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr  4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9  vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x  fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaamyramaaBa  aaleaacaWGIbaabeaakiabg2da9iaaiwdacaGGUaGaaGioaiabgEna  0kaaigdacaaIWaWaaWbaaSqabeaacqGHsislcaaIXaGaaGymaaaakm  aadmaabaWaaSaaaeaacaWGdbWaaSbaaSqaaiaaigdaaeqaaOGaey4k  aSIaam4qamaaBaaaleaacaaIYaaabeaaaOqaaiaaikdaaaWaaeWaae  aacaWG0bWaaSbaaSqaaiaaikdaaeqaaOGaeyOeI0IaamiDamaaBaaa  leaacaaIXaaabeaaaOGaayjkaiaawMcaaiabgUcaRmaalaaabaGaam  4qamaaBaaaleaacaaIYaaabeaakiabgUcaRiaadoeadaWgaaWcbaGa  aG4maaqabaaakeaacaaIYaaaamaabmaabaGaamiDamaaBaaaleaaca  aIZaaabeaakiabgkHiTiaadshadaWgaaWcbaGaaGOmaaqabaaakiaa  wIcacaGLPaaacqGHRaWkdaWdXbqaaiaadwgadaahaaWcbeqaaiabgk  HiTiabeU7aSjaadshaaaGccaWGKbGaamiDaiabgkHiTiaadoeadaWg  aaWcbaGaaGymaaqabaGcdaWdXbqaaiaadwgadaahaaWcbeqaaiabgk  HiTiabeU7aSjaadshaaaGccaWGKbGaamiDamaaBaaaleaacaaIXaaa  beaaaeaacaaIWaaabaGaamiDamaaBaaameaacaWGHbaabeaaliabgk  HiTiaadshadaWgaaadbaGaaGymaaqabaaaniabgUIiYdaaleaacaaI  WaaabaGaamiDamaaBaaameaacaWGIbaabeaaliabgkHiTiaadshada  WgaaadbaGaaG4maaqabaaaniabgUIiYdaakiaawUfacaGLDbaaaaa@7CA7@  </annotation>  </semantics>  </math>  	</td>  	</tr>  </table>
<p><strong>Figure D.1: Calculation of doses from routine tritium bioassay samples</strong></p>  <div className="span-5">  <img src="/images/regdocs/regdoc-2-7-2-vol1/figure-d1-eng.png" alt="" />  </div>  <div className="clear"></div>
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
<h3 id="appD-4">D.4	LSC Quality Control</h3>  <p>The performance of liquid scintillation counting (LSC) used for measurements of tritium in urine should be verified each day it is in use. Verifications should also be carried out following the installation or servicing of an LSC, and after any event that may influence its accuracy. The information shown in table D.1 should be recorded as part of the quality control program. These data should also be recorded graphically on control charts.</p>
<p><strong>Table D.1:	LSC Performance Log</strong></p>  <table className="table table-striped">
<tr>
<th colSpan="4">Check source identification</th>
<th colSpan="4">Instrument settings</th>
</tr>
<tr>
<th>Source</th>
<th>Number</th>
<th>Activity (dpm)</th>
<th>Date</th>
<th>Channel</th>
<th>Gain</th>
<th>Low level</th>
<th>High level</th>
</tr>
<tr>
<td>Background</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td className="text-center">1</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>Tritium</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td className="text-center">2</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>Carbon-14</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td className="text-center">3</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<th className="text-center" rowspan="2">Date</th>
<th colSpan="2">Count time (min)</th>
<th colSpan="3">Count rates (cpm)</th>
<th className="text-center" rowspan="2">Comments</th>
<th className="text-center" rowspan="2">Operator&rsquo;s initials</th>
</tr>
<tr>
<th>Background source</th>
<th>Check sources</th>
<th>Cackground source</th>
<th>H-3 check source</th>
<th>C-14 check source</th>
</tr>
<tr>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>  </table>
<p>The check sources used for verifying the counter performance should be flame-sealed. They should be used for no more than five years after sealing. The check source should be counted daily, long enough to accumulate at least 20,000 counts. The minimum counting time should be 30 seconds and the same counting time should be used for each measurement. In addition to a flame-sealed check source, a flame-sealed background source is recommended and should be counted twice per day. The count time for the background checks should not change.</p>  <p>The standard deviation of the check source and background count rates should be calculated monthly. The check source and background count rates should be plotted on a control chart. Control limits at two standard deviations should be placed on the control chart. About 95% of the daily check source count rates should lie within the two standard deviation control limits. If either a daily check source or a background count rate is outside the control limits, the measurement should be repeated. If the second measurement is also outside the control limits, the instrument settings should be verified.</p>
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
<h2 id="appE">Appendix E: Radionuclide-Specific Recommendations Related to Bioassay Measurements and Internal Dosimetry &ndash; Radioiodines</h2>  <p>This appendix provides guidance to licensees with respect to developing a thyroid screening program for radioiodines. Thyroid screening of workers handling radioiodines may be required by licence conditions. This appendix includes recommendations for selecting participants in the screening program, instrument selection, the screening method, monitoring periods, the interpretation of results, validation procedures, and record keeping. This appendix considers iodine-123, iodine-124, iodine-125 and iodine-131; however, the approach may also be applied to other radioiodines.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="E.1"></div>
<h3 id="appE-1">E.1	Background</h3>  <p>The purpose of a thyroid screening program is to monitor the intake of radioiodines. Timely information produced by the program is used to assess any intake of radioiodines, provide assurance that the radiation protection program is working and demonstrate compliance with regulatory dose limits.</p>  <p>In the thyroid screening program, workers are individually monitoring for intakes of radioiodines by <em>in vivo</em> counting of the thyroid. Results are compared to a predetermined level. Exceeding the predetermined level requires confirmation of intake and an investigation. The license conditions regarding thyroid monitoring depend on the physical characteristics of the radioiodine handled. Physical characteristics of the four radioiodines considered in this appendix are shown in table E.1 [13, 27, 28].</p>  <p><strong>Table E.1: Physical characteristics of selected radioiodine isotopes</strong></p>
<table className="">
<tr>
<th>Characteristics</th>
<th><sup>123</sup>I</th>
<th><sup>124</sup>I</th>
<th><sup>125</sup>I</th>
<th><sup>131</sup>I</th>
</tr>
<tr>
<td>Physical half-life (days)</td>
<td className="text-center">0.55</td>
<td className="text-center">4.176</td>
<td className="text-center">59.40</td>
<td className="text-center">8.02</td>
</tr>
<tr>
<td>Effective half-life in the thyroid (days)</td>
<td className="text-center">0.55</td>
<td className="text-center">3.97</td>
<td className="text-center">34.09</td>
<td className="text-center">7.29</td>
</tr>
<tr>
<td>Time to maximum thyroid burden after acute exposure<sup id="fnb12-ref"><a className="fn-lnk" href="#fnb12"><span className="wb-inv">Footnote </span>12</a></sup>  (days)</td>
<td className="text-center">0.5</td>
<td className="text-center">1.1</td>
<td className="text-center">1.9</td>
<td className="text-center">1.3</td>
</tr>
<tr>
<td>Main photon energy (kiloelectron volt (keV))</td>
<td className="text-center">158.97</td>
<td className="text-center">602.7</td>
<td className="text-center">27.0</td>
<td className="text-center">364.5</td>
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
<div id="E.2"></div>
<h3 id="appE-2">E.2	Screening Participation</h3>  <h4>E.2.1	Workers &ndash; Normal handling</h4>  <p>Workers (NEWs and non-NEWs) who handle a total quantity of radioiodine in one day that exceeds the amounts indicated in table E.2 should be screened for I-123, I-124, I-125 or I-131, as applicable. Examples of volatile radioiodine compounds can be found in section E.7. This section also illustrates actions that may generate such compounds.</p>
<p><strong>Table E.2: Criteria for participating in thyroid screening: Activity handled without confinement per daily operation</strong></p>  <table className="">
<tr>
<th colSpan="2" rowspan="2">&nbsp;</th>
<th colSpan="3">Confinement</th>
</tr>
<tr>
<th>None</th>
<th>Fume hood</th>
<th>Glovebox</th>
</tr>
<tr>
<th rowspan="2">Quantity of <sup>125</sup>I or <sup>131</sup>I (MBq)</th>
<th>Gases, volatile liquids and powders</th>
<td className="text-center">2</td>
<td className="text-center">200</td>
<td className="text-center">20,000</td>
</tr>
<tr>
<th>Non-volatile liquids and solids</th>
<td className="text-center">200</td>
<td className="text-center">20,000</td>
<td className="text-center">2 &times; 10<sup>6</sup></td>
</tr>
<tr>
<th rowspan="2">Quantity of <sup>124</sup>I (MBq)</th>
<th>Gases, volatile liquids and powders</th>
<td className="text-center">3</td>
<td className="text-center">300</td>
<td className="text-center">30,000</td>
</tr>
<tr>
<th>Non-volatile liquids and solids</th>
<td className="text-center">300</td>
<td className="text-center">30,000</td>
<td className="text-center">3 &times; 10<sup>6</sup></td>
</tr>
<tr>
<th rowspan="2">Quantity of <sup>123</sup>I (MBq)</th>
<th>Gases, volatile liquids and powders</th>
<td className="text-center">200</td>
<td className="text-center">20,000</td>
<td className="text-center">2 &times; 10<sup>6</sup></td>
</tr>
<tr>
<th>Non-volatile liquids and solids</th>
<td className="text-center">20,000</td>
<td className="text-center">2 &times; 10<sup>6</sup></td>
<td className="text-center">2 &times; 10<sup>8</sup></td>
</tr>  </table>  <p>Other persons who regularly work close to a worker handling more than the amounts in table E.2 without confinement should also be screened for the relevant radioiodine.</p>
<h4>E.2.2	Screening in response to spills and personnel contamination</h4>  <p>Workers and other persons who have been in proximity to a spill, as described by one of the following situations, should be screened for the relevant radioiodine:</p>
<ul>
<li>involved in a spill of I-125 or I-131 in volatile form, where the activity exceeds 2 MBq</li>
<li>involved in a spill of I-124 in volatile form, where the activity exceeds 3 MBq</li>
<li>involved in a spill of I-123 in volatile form, where the activity exceeds 200 MBq</li>
<li>externally contaminated by a volatile radioiodine</li>
</ul>  <p>Guidance on responding to personnel contamination can be found in REGDOC-2.7.1, <em>Radiation Protection</em>.</p>  <p>Workers who were within two metres of a person whose screening measurement results are equal to or greater than 1 kBq, and who were working within one hour after the suspected exposure occurred, should also undergo a thyroid screening.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="E.3"></div>
<h3 id="appE-3">E.3	Instrument Selection</h3>  <p>The scintillation detector is currently the most common type of instrument used for measuring radioiodine in the thyroid. It typically consists of a probe (usually containing a sodium iodide (NaI) crystal) operated in conjunction with a counter and a spectrum analyzer.</p>  <p>Systems can be as simple as a portable unit that produces results in counts per unit time, or as sophisticated as a gamma spectroscopy system that generates the energy spectrum of the isotope and then quantifies the total activity.</p>  <p>When choosing an instrument, it is advisable to read the instrument specifications carefully or consult with the manufacturer to ensure that the probe and detector are capable of detecting the applicable radioiodine. For more information on selecting a detector for I-125 or I-131, consult The <em>Canadian Journal of Medical Radiation Technology</em>, "Thyroid Monitoring Part VI: Choosing a Detector for Either I-125 and/or I-131" [30].</p>  <p>The NaI detector comes in various sizes and configurations depending on the desired use and sensitivity. When choosing a NaI detector, licensees should consider:</p>
<ul>
<li>the gamma energy of the radioiodine isotope to be measured</li>
<li>the thickness of the NaI crystal</li>
<li>the diameter of the NaI crystal</li>
<li>the window material and configuration of the probe</li>
</ul>
<h4>E.3.1	Crystal thickness</h4>  <p>The thickness of the NaI crystal required varies depending on the isotope of radioiodine being measured.</p>  <p>Detection and measurement of I-125 requires only a thin crystal to efficiently detect low energy I-125 photons. Typically, NaI crystals approximately 1 mm thick are used to measure low-energy photon emitters such as I-125.</p>   <p>Conversely, a thicker crystal is required for the efficient detection of higher energy I-131 photons. A crystal approximately 25 mm thick is recommended for detecting I-131.</p>  <p>Due to the similarity in the energies of the gamma radiation emitted, the detector used for measurements of I-125 (thin crystal NaI) may be used for the detection and measurement of I-123. Similarly, the detector used for measurements of I-131 (thick crystal NaI) may be used for the detection and measurement of both I-123 and I-124.</p>
<h4>E.3.2	Crystal diameter</h4>  <p>Another factor to consider is the diameter of the crystal. A large diameter results in greater overall counting efficiency. It also helps reduce error that may result from any variances such as neck-to-detector distances, misalignment of detector with thyroid, and size of thyroid. However, a larger detector diameter increases the background reading.</p>
<h4>E.3.3	Window material of probe</h4>  <p>The window material of the probe is also a factor to be considered. The low energy I-125 photons require a window material, such as Mylar or beryllium, thin enough to allow the I-125 photons to penetrate the crystal.</p>   <p>If a probe is required to detect both I-125 and I-131, the crystal should be thick enough to detect I-131 and the window material thin enough to allow penetration of I-125.</p>  <p>Table E.3 summarizes the recommended specifications for detector uses to measure I-125 and I-131.</p>
<p><strong>Table E.3: Summary of detector specifications</strong></p>  <table className="">
<tr>
<th>Specification</th>
<th><sup>125</sup>I</th>
<th><sup>125</sup>I, <sup>124</sup>I, <sup>131</sup>I</th>
</tr>
<tr>
<td>Minimum crystal thickness (mm)</td>
<td>1</td>
<td>25</td>
</tr>
<tr>
<td>Minimum crystal diameter (mm)</td>
<td>25</td>
<td>25</td>
</tr>
<tr>
<td>Typical window material of probe</td>
<td>Mylar or beryllium</td>
<td>Aluminum or stainless steel</td>
</tr>
<tr>
<td>Typical energy range of detector (keV)</td>
<td>20&ndash;200</td>
<td>&ge; 40</td>
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
<div id="E.4"></div>
<h3 id="appE-4">E.4	Screening Method</h3>  <h4>E.4.1	Set-up</h4>  <p>To install a counting system:</p>
<ul>
<li>Set up the counting system in an area of low or at least non-variable background radiation.</li>
</ul>  <p>Ensure that the equipment is set up according to the manufacturer&rsquo;s specifications.</p>
<ul>
<li>Determine the background count rate using a neck phantom (ideally containing potassium).</li>
<li>Calibrate the system by following the procedure provided in section E.8.</li>
<li>Calculate and record the count rate equivalent to 1 kBq and 10 kBq in the screening log (see section E.9 for a sample screening log).</li>
<li>Verify the set-up every time the system or location is changed to confirm its adequacy or make appropriate modifications.</li>
</ul>
<h4>E.4.2	Quality control verifications</h4>  <p>To verify the ambient background and the reproducibility of the system&rsquo;s count rate, the following steps should be taken on each day that thyroid screening is conducted:</p>
<ul>
<li>measure and record the background count rate, accumulating at least 400 counts</li>
<li>measure and record the net count rate of a standard source</li>
<li>record the background and standard source count rates so that deviations from the norm can be readily observed (see section e.10 for a method of recording count rates using control charts)</li>
</ul>  <p>As a best practice, verify controls annually by participating in a thyroid intercomparison program such as the one provided by Health Canada and described in the Human Monitoring Laboratory technical report titled <em>The Thyroid Intercomparison Program</em> [31].</p>
<h4>E.4.3	Screening measurement</h4>  <p>To perform a screening measurement:</p>
<ol>
<li>measure the person&rsquo;s background count rate:
<ol className="list-lower-alpha">
<li>this may be done by taking the measurement on the person&rsquo;s lower thigh: although a thigh measurement simulates iodine that might be in the circulatory system, it should be noted that some detection equipment does not allow thigh measurements, and in addition, thigh measurements may be affected by contamination of clothes or skin.</li>
<li>if it is not feasible to carry out a background measurement on the thigh, an alternate method of measuring the background is to use a neck phantom (ideally containing potassium); if the background measurement is higher than usual, verify for possible contamination and repeat the measurement if necessary.</li>
</ol></li>
<li>record the reading in the screening log</li>
<li>measure the person&rsquo;s count rate resulting from the thyroid</li>
<li>record the reading in the screening log</li>
<li>compare the result to the investigation and reporting levels recorded on the screening log.</li>
<li>depending on the measurement results, take the appropriate action based on the options provided in section E.6 and complete the screening log.</li>
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
<div id="E.5"></div>
<h3 id="appE-5">E.5	Monitoring Period</h3>  <p>Thyroid screening for I-124, I-125 and I-131 on workers and other persons who meet the screening participation guidelines (see section E.2) should be carried out between one and five days after the last use that resulted in any of the above values in table E.2 being exceeded.</p>  <p>Thyroid screening for I-123 on workers and other persons who meet the screening participation guidelines (see section E.2) should be carried out between 8 and 48 hours after the last use that resulted in any of the above values in table E.2 being exceeded. Any request for deviation from the above should be submitted to the CNSC for review and approval.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="E.6"></div>
<h3 id="appE-6">E.6	Validation of Screening Results</h3>  <h4>E.6.1	General level &ndash; Measurement results &ge; 1 kBq</h4>  <p>For all screening measurement results equal to or greater than 1 kBq, the licensee should proceed as follows:</p>
<ol>
<li>Verify that the method of screening measurement described in section E.4.3 has been followed.</li>
<li>If necessary, make any corrections and repeat the measurement.</li>
<li>If the measurement result is still equal to or greater than 1 kBq, verify clothes or skin for contamination.</li>
<li>If clothes or skin are contaminated, remove the clothes or decontaminate the skin and repeat the measurement.</li>
<li>If the measurement result is still equal to or greater than 1 kBq, ascertain and record the committed effective dose, and follow the steps in sections E.6.2 or E.6.3, as applicable.</li>
<li>Screen all persons who worked in proximity to the person whose results are equal to or greater than 1 kBq.</li>
</ol>
<h4>E.6.2	Investigation level &ndash; Measurement results &ge; 1 kBq and &lt; 10 kBq</h4>  <p>For all screening measurement results equal to or greater than 1 kBq and less than 10 kBq, the licensee should:</p>
<ol>
<li>validate the results as per section E.6.1</li>
<li>perform an internal investigation to determine and correct the cause of the screening results</li>
<li>record the findings</li>
<li>correct any deficiencies found by the investigation</li>
<li>record the event in the annual compliance report</li>
</ol>
<h4>E.6.3	Reporting level &ndash; Measurement results &ge; 10 kBq</h4>  <p>For I-124, I-125 and I-131, a 10-kBq thyroid screening result is approximately equal to a committed effective dose of 1mSv. Under section 16 of the RPR, the CNSC must be notified when a licensee becomes aware that a dose to a person may have exceeded an applicable dose limit (e.g., 1 mSv per year for a non-NEW). For NEWs, the effective dose from each component of the dose that contributes more than 1 mSv per year should be ascertained.</p>  <p>For all screening measurement results equal to or greater than 10 kBq, the licensee should:</p>
<ol>
<li>validate the results as per section E.6.1</li>
<li>immediately inform the CNSC if the measurement was made on a person other than a NEW</li>
<li>have a radioiodine bioassay performed by an organization that has passed the relevant intercomparison test from Health Canada in the last 12 months or, if such an organization is unavailable, seek CNSC approval to permit someone else to perform the radioiodine bioassay</li>
<li>use the results of the bioassay to ascertain the committed effective dose</li>
<li>perform an internal investigation aimed at determining and correcting the cause of the screening results, including area and contamination monitoring at the site of the radioiodine intake, if applicable</li>
<li>record the event in the annual compliance report</li>
</ol>
<h4>E.6.4	Screening log</h4>  <p>The licensee should maintain a thyroid screening log. An example is provided in section E.9.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="E.7"></div>
<h3 id="appE-7">E.7	Volatile Radioiodine Compounds</h3>  <p>Volatile radioiodine compounds include such compounds as sodium iodide (NaI) and radioiodines in a disassociated form. The volatility of radioiodine compounds may increase as a result of acidifying or freezing.</p>   <p>Activities that may cause radioiodine to be released include opening stock reagent containers, opening packages containing capsules used for therapeutic or diagnostic purposes, and working with such open packages. Hence, capsules given to patients for diagnostic tests or for therapeutic purposes are considered to contain radioiodine in volatile radioiodine form.</p>  <p>The addition of antioxidants, for example, sodium thiosulfate, to either labelled or NaI solutions reduces both decomposition and volatility. Also, maintaining radioiodine solutions at dilute concentrations minimizes radiolytic decomposition. It should also be noted that radioimmunoassay kits contain small quantities of I-125 in a non-volatile form.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="E.8"></div>
<h3 id="appE-8">E.8	Instrument Calibration</h3>  <h4>E.8.1	General</h4>  <p>All equipment and instruments used for thyroid screening should be maintained in good operating condition and calibrated before use. Calibration should be performed for the isotope of interest under conditions mimicking the thyroid in the neck. An example of a calibration procedure can be found in "Thyroid Monitoring Calibration Part III: A Basic Calibration Procedure for Thyroid Monitoring" [32]. Once set up (as per section E.4.1) the measurement equipment should be calibrated if a quality control measurement is outside the control limits, as described in section E.10. Also, the measurement equipment should be recalibrated prior to being put back into service if it has undergone any significant changes that may have an adverse impact on the precision, accuracy or reliability of the measurements, such as if the equipment has been repaired or replaced.</p>
<h4>E.8.2	Detector efficiency</h4>  <p>To determine detector efficiency, measure the activity of a traceable standard source of the radioisotope of interest and use the following formula:</p>
<table className=" table-border-none">  <tr>  	<td className="text-left text-center" width="20">(28)</td>  	<td width="70" className="text-left">E = (C &ndash; B)/A</td>  </tr>  </table>
<p>Where:</p>   <p>E&nbsp;&nbsp;is the efficiency in counts per second (cps) per becquerel (Bq)</p>  <p>C&nbsp;&nbsp;is the measured counts per unit time of the standard source, in cps</p>   <p>B&nbsp;&nbsp;is the background count rate, in cps</p>   <p>A&nbsp;&nbsp;is the known activity of the standard source, traceable to a national standardizing laboratory within 5% (1&sigma;, or standard deviation) accuracy, in Bq.</p>  <p>The licensee should ensure that if a short-lived standard source is used (e.g., I-131), the activity of the source is corrected for decay to the day on which the calibration is performed. Appropriate, longer-lived, surrogate standard sources include: Ce-139 (for I-123), Cs-137 (for I-124), I-129 (for I-125) and B-133 (for (I-131).</p>  <p>The instrument and measurement parameters used to determine counting efficiency should be the same as those used for routine screening. Placing the detector as close to the thyroid as possible achieves the greatest efficiency. However, due to variations in thyroid depth, size, shape and positioning, large uncertainties can be introduced into the activity estimate. Such an error can be reduced by increasing the distance between the neck and the detector. Each system has its own optimal compromise between high efficiency and error reduction, but generally a good neck-to-detector distance is 12 cm.</p>  <p>The licensee should ensure a long enough count time for both the standard source and the background count rate so that overall error (1&sigma;) in the count is less than 5%. This means approximately 400 gross counts for the background measurement.</p>
<h4>E.8.3	Minimum detectable activity</h4>  <p>The licensee should conduct measurements to achieve a minimum detectable activity (MDA) that is less than 1 kBq. The MDA is described in section 9.1.6. When the sample and background count times are equal, the MDA formula shown in section 9.1.6 reduces to the formula below:</p>
<table className=" table-border-none">  <tr>  	<td className="text-center text-center" width="20">(29)</td>  	<td width="70" className="text-center">  <math display=&#39;block&#39;>   <semantics>
<mrow>
<mi>M</mi><mi>D</mi><mi>A</mi><mo>=</mo><mfrac>
<mrow>
<mn>4.65</mn><msqrt>
<mi>B</mi>
</msqrt>
<mo>+</mo><mn>3</mn></mrow>
<mrow>
<mi>E</mi><mi>T</mi></mrow>
</mfrac>
</mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaamytaiaads
eacaWGbbGaeyypa0ZaaSaaaeaacaaI0aGaaiOlaiaaiAdacaaI1aWa
aOaaaeaacaWGcbaaleqaaOGaey4kaSIaaG4maaqaaiaadweacaWGub
aaaaaa@408A@
</annotation>   </semantics>  </math>  	</td>  	</tr>  </table>
<p>Where:</p>  <p>B&nbsp;&nbsp;is the total background counts collected during time, "T"</p>   <p>E&nbsp;&nbsp;is the efficiency in cps/Bq</p>  <p>T&nbsp;&nbsp;is the time in seconds</p>
<h4>E.8.4	Sample MDA calculation</h4>  <p>If a system&rsquo;s MDA is not low enough &ndash; either because of a low efficiency or high background &ndash; it can be improved. This can be done by increasing the counting time used for the measurement, or decreasing the background, or both.</p>  <p>As an example, consider I-125. Assuming that the efficiency is 0.0060 cps/Bq and the gross background count is 400 counts, a 300-second count time would result in the following MDA, using the equation in section E.8.3:</p>
<table className=" table-border-none">  <tr>  	<td className="text-center text-center" width="20">(30)</td>  	<td width="70" className="text-center">  <math display=&#39;block&#39;>   <semantics>
<mrow>
<mi>M</mi><mi>D</mi><mi>A</mi><mo>=</mo><mfrac>
<mrow>
<mn>4.65</mn><msqrt>
<mi>B</mi>
</msqrt>
<mo>+</mo><mn>3</mn></mrow>
<mrow>
<mi>E</mi><mi>T</mi></mrow>
</mfrac>
</mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaamytaiaads
eacaWGbbGaeyypa0ZaaSaaaeaacaaI0aGaaiOlaiaaiAdacaaI1aWa
aOaaaeaacaWGcbaaleqaaOGaey4kaSIaaG4maaqaaiaadweacaWGub
aaaaaa@408A@
</annotation>   </semantics>  </math>  	</td>  	</tr>  </table>  <br />
<table className=" table-border-none">  <tr>  	<td className="text-center text-center" width="20">&nbsp;</td>  	<td width="70" className="text-center">  <math display=&#39;block&#39;>   <semantics>
<mrow>
<mi>M</mi><mi>D</mi><mi>A</mi><mo>=</mo><mfrac>
<mrow>
<mn>4.65</mn><msqrt>
<mrow>
<mn>400</mn></mrow>
</msqrt>
<mo>+</mo><mn>3</mn></mrow>
<mrow>
<mo stretchy=&#39;false&#39;>(</mo><mn>0.0060</mn><mo stretchy=&#39;false&#39;>)</mo><mo stretchy=&#39;false&#39;>(</mo><mn>300</mn><mo stretchy=&#39;false&#39;>)</mo></mrow>
</mfrac>
</mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaamytaiaads
eacaWGbbGaeyypa0ZaaSaaaeaacaaI0aGaaiOlaiaaiAdacaaI1aWa
aOaaaeaacaaI0aGaaGimaiaaicdaaSqabaGccqGHRaWkcaaIZaaaba
GaaiikaiaaicdacaGGUaGaaGimaiaaicdacaaI2aGaaGimaiaacMca
caGGOaGaaG4maiaaicdacaaIWaGaaiykaaaaaaa@498F@
</annotation>   </semantics>  </math>  	</td>  	</tr>  </table>  <br />
<p><em>MDA</em> = 53 Bq</p>  <p>The resulting value, 53 Bq, is acceptable for I-125.</p>  <p>The counting time used to monitor personnel does not have to be as long as that used for calibration. In the example above, the background is 400 counts/300 seconds, or 1.3 cps. Assuming the background count rate is stable, a 60-second count time would result in approximately 80 counts. Substituting these new figures into the equation produces a new MDA value, as shown in the following formula:</p>
<table className=" table-border-none">  <tr>  	<td className="text-center text-center" width="20">(31)</td>  	<td width="70" className="text-center">  <math display=&#39;block&#39;>   <semantics>
<mrow>
<mi>M</mi><mi>D</mi><mi>A</mi><mo>=</mo><mfrac>
<mrow>
<mn>4.65</mn><msqrt>
<mrow>
<mn>80</mn></mrow>
</msqrt>
<mo>+</mo><mn>3</mn></mrow>
<mrow>
<mo stretchy=&#39;false&#39;>(</mo><mn>0.0060</mn><mo stretchy=&#39;false&#39;>)</mo><mo stretchy=&#39;false&#39;>(</mo><mn>60</mn><mo stretchy=&#39;false&#39;>)</mo></mrow>
</mfrac>
</mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaamytaiaads
eacaWGbbGaeyypa0ZaaSaaaeaacaaI0aGaaiOlaiaaiAdacaaI1aWa
aOaaaeaacaaI4aGaaGimaaWcbeaakiabgUcaRiaaiodaaeaacaGGOa
GaaGimaiaac6cacaaIWaGaaGimaiaaiAdacaaIWaGaaiykaiaacIca
caaI2aGaaGimaiaacMcaaaaaaa@4822@
</annotation>   </semantics>  </math>  	</td>  	</tr>  </table>  <br />
<p><em>MDA</em> = 124 Bq</p>
<h4>E.8.5	Records</h4>  <p>Accurate calibration and service records should be maintained on the measurement system. The records should contain the following information:</p>
<ol>
<li>calibration date</li>
<li>reference method</li>
<li>calibration source current activity</li>
<li>background values (these should be compared to previous values to detect changes)</li>
<li>MDA</li>
<li>calculated efficiency</li>
<li>authorization signature</li>
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
<div id="E.9"></div>
<h3 id="appE-9">E.9	Sample thyroid screening log for iodine 131</h3>  <p>Investigation level:&nbsp;&nbsp;________________________________&nbsp;&nbsp;net cps = 1 kBq of <sup>131</sup>I</p>  <p>Reporting level:&nbsp;&nbsp;___________________________________&nbsp;&nbsp;net cps = 10 kBq of <sup>131</sup>I  <p>Employee name::&nbsp;&nbsp;_____________________________________________________</p>  <p>Instrument used::&nbsp;&nbsp;_____________________________________________________</p>
<table className="table table-striped">
<tr>
<th>Date of measurement</th>
<th>Last use of radioiodine (date)</th>
<th>Background count rate (cps)</th>
<th>Gross counts</th>
<th>Count time (seconds)</th>
<th>Net count rate (cps)</th>
<th>Technician (initials)</th>
<th>Action taken</th>
</tr>
<tr>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
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
<div id="E.10"></div>
<h3 id="appE-10">E.10	Quality Control Charts</h3>  <p>This section provides a method for recording background and standard source count rates for quality control verifications.</p>  <p>Prepare two control charts, one for each of the background and standard source quality control verifications described in section E.4.2. Each control chart should show the date that measurements were taken and the corresponding count rates. After approximately 20 days of counting operations, there will be enough observations to estimate the standard deviations for the distributions. The standard deviation can be estimated in the following equation:</p>
<table className=" table-border-none">  <tr>  	<td className="text-center text-center" width="20">(32)</td>  	<td width="70" className="text-center">  <math display=&#39;block&#39;>   <semantics>
<mrow>
<mi>S</mi><mo>=</mo><msqrt>
<mrow>
<mfrac>
<mn>1</mn>
<mrow>
<mi>n</mi><mo>&#x2212;</mo><mn>1</mn></mrow>
</mfrac>
<mstyle displaystyle=&#39;true&#39;>
<munderover>
<mo>&#x2211;</mo>
<mrow>
<mi>i</mi><mo>=</mo><mn>1</mn></mrow>
<mi>n</mi>
</munderover>
<mrow>
<msup>
<mrow>
<mrow><mo>(</mo>
<mrow>
<msub>
<mi>N</mi>
<mi>i</mi>
</msub>
<mo>&#x2212;</mo><mover accent=&#39;true&#39;>
<mi>N</mi>
<mo>&#x00AF;</mo>
</mover>
</mrow>
<mo>)</mo></mrow></mrow>
<mn>2</mn>
</msup>
</mrow>
</mstyle></mrow>
</msqrt>
</mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaam4uaiabg2
da9maakaaabaWaaSaaaeaacaaIXaaabaGaamOBaiabgkHiTiaaigda
aaWaaabCaeaadaqadaqaaiaad6eadaWgaaWcbaGaamyAaaqabaGccq
GHsislceWGobGbaebaaiaawIcacaGLPaaadaahaaWcbeqaaiaaikda
aaaabaGaamyAaiabg2da9iaaigdaaeaacaWGUbaaniabggHiLdaale
qaaaaa@476F@
</annotation>   </semantics>  </math>  	</td>  	</tr>  </table>
<p>Where:</p>  <p>S&nbsp;&nbsp;is the standard deviation</p>  <p>n&nbsp;&nbsp;is the number of either background or standard source measurements</p>  <p>N<sub>i</sub> is the count rate of each individual measurement</p>  <p><span style="text-decoration: overline;">N</span>&nbsp;&nbsp;is the average of n measurements of N<sub>i</sub></p>  <p>The licensee should draw control limits at &plusmn;2S on each chart. Nearly all the quality control measurements (95%) should lie within the control limits.</p>  <p>If a quality control measurement of the background or standard source is outside the control limits, repeat the measurement immediately. If the repeated measurement is also outside the limits, verify the instrument settings. Finally, if no cause can be found, the licensee may need to take remedial action, including recalibrating or repairing the instruments to ensure that subsequent quality control measurements are within the control limits.</p>
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
<h2 id="appF">Appendix F: Radionuclide-Specific Recommendations Related to Bioassay Measurements and Internal Dosimetry &ndash; Uranium</h2>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="F.1"></div>
<h3 id="appF-1">F.1	Annual Limits on Intake of Uranium Compounds</h3>  <p>Natural uranium contains three isotopes, U-234, U-235 and U-238. Their respective activities per gram of natural uranium are 12,430 Bq, 575.9 Bq and 12, 350Bq. The mass percentages are 99.2742%, 0.7204% and 0.0054% for U-238, U-235 and U-234 respectively, and the specific activity is 2.54 &times; 10<sup>4</sup> Bq g<sup>-1</sup>, this is outlined in ICRP Publication 107, <em>Nuclear Decay Data for Dosimetric Calculations</em> [29] and NIST, "Atomic Weights and Isotopic Compositions" [33]. This section presents guidance regarding the selection of appropriate annual limits on intake (ALIs) for various uranium compounds, including those that have been enriched or depleted in the U-235 content.</p>  <p>The committed effective dose per unit intake (dose coefficients), and the corresponding ALIs, for the inhalation of uranium compounds, should be calculated for the solubility characteristics of those compounds to which workers may be exposed in the workplace. When no such material-specific dose coefficients and ALIs are available, the values from Table F.1 should be used. Data for Table F.1 was sources from CNSC-RSP-0297, <em>Evaluation of Default Annual Limit on Intake (ALI) for Yellowcake and Uranium Ore</em> [34].</p>
<p><strong>Table F.1: Recommended annual limits on intake for various uranium compounds</strong></p>  <table className="">
<tr>
<th className="text-center" rowspan="2">Uranium compound</th>
<th className="text-center" colSpan="3">Annual limit on intake (Bq)</th>
</tr>
<tr>
<th>Natural uranium</th>
<th>Enriched (3.5%) uranium</th>
<th>Depleted uranium</th>
</tr>
<tr>
<td>Uranium ore</td>
<td className="text-center">4,500</td>
<td className="text-center">N/A</td>
<td className="text-center">N/A</td>
</tr>
<tr>
<td>Dried yellowcake</td>
<td className="text-center">48,000</td>
<td className="text-center">N/A</td>
<td className="text-center">N/A</td>
</tr>
<tr>
<td>Calcined yellowcake</td>
<td className="text-center">3,100</td>
<td className="text-center">N/A</td>
<td className="text-center">N/A</td>
</tr>
<tr>
<td>ICRP default Type F</td>
<td className="text-center">32,400</td>
<td className="text-center">31,300</td>
<td className="text-center">33,600</td>
</tr>
<tr>
<td>ICRP default Type M</td>
<td className="text-center">12,000</td>
<td className="text-center">9,850</td>
<td className="text-center">11,600</td>
</tr>
<tr>
<td>ICRP default Type S</td>
<td className="text-center">3,190</td>
<td className="text-center">3,010</td>
<td className="text-center">3,390</td>
</tr>  </table>  <p>Material-specific ALIs should be derived from in vitro solubility studies of the relevant compounds. The study methodology and results should be documented as part of the licensee&rsquo;s dosimetry technical basis. The solubility study should be updated periodically to reflect changes in processes or types of compounds encountered at the licensed facility, or to verify that solubility parameters have not changed.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="F.2"></div>
<h3 id="appF-2">F.2	Chemical Toxicity of Uranium Compounds</h3>  <p>Because uranium is a heavy metal, it is chemically toxic above a threshold concentration in the kidneys. Chemical toxicity should be considered when inhalation intakes of soluble uranium compounds, and intakes by ingestion as well as via wounds, are likely. In order to prevent uranium from affecting the kidneys, urine bioassay measurements should be used to verify that the concentration of uranium does not exceed 3 &mu;g of uranium per gram of kidney tissue. For further information, consult ISO 16638-1, <em>Radiological protection &ndash; Monitoring and internal dosimetry for specific materials &ndash; Part 1: Inhalation of uranium compounds</em> [35]. Table F.2 shows urinary concentrations resulting from a peak kidney burden of 3 &micro;g of uranium per gram of kidney tissue . The concentrations are averages for the 24-hour period listed. For the time period of 1 day, the concentration is the average for the period from time 0 to 24 hours following the intake. Table F.3 provides the excretion rates and concentrations for smaller time intervals in the first 48 hours following an intake. Data for both Table F.2 and F.3 was sourced from CNSC, RSP-0165, <em>Uranium Intake &ndash; Dose Estimation Methods</em> [36].</p>
<p><strong>Table F.2: Urinary concentrations resulting from a peak kidney burden of 3 &mu;g of uranium per gram of kidney tissue</strong></p>  <table className="">
<tr>
<th className="text-center" rowspan="2">Time post intake (days)</th>
<th className="text-center" colSpan="4">Uranium in urine concentration &micro;g/L</th>
</tr>
<tr>
<th>Type F</th>
<th>Type M</th>
<th>Type S</th>
<th>Ingestion</th>
</tr>
<tr>
<td className="text-center">1</td>
<td className="text-center">3,760</td>
<td className="text-center">3,760</td>
<td className="text-center">3,720</td>
<td className="text-center">3,700</td>
</tr>
<tr>
<td className="text-center">2</td>
<td className="text-center">130</td>
<td className="text-center">182</td>
<td className="text-center">233</td>
<td className="text-center">204</td>
</tr>
<tr>
<td className="text-center">3</td>
<td className="text-center">105</td>
<td className="text-center">138</td>
<td className="text-center">137</td>
<td className="text-center">109</td>
</tr>
<tr>
<td className="text-center">4</td>
<td className="text-center">95</td>
<td className="text-center">128</td>
<td className="text-center">125</td>
<td className="text-center">98</td>
</tr>
<tr>
<td className="text-center">5</td>
<td className="text-center">86</td>
<td className="text-center">119</td>
<td className="text-center">116</td>
<td className="text-center">89</td>
</tr>
<tr>
<td className="text-center">6</td>
<td className="text-center">78</td>
<td className="text-center">111</td>
<td className="text-center">108</td>
<td className="text-center">81</td>
</tr>
<tr>
<td className="text-center">7</td>
<td className="text-center">71</td>
<td className="text-center">105</td>
<td className="text-center">101</td>
<td className="text-center">74</td>
</tr>
<tr>
<td className="text-center">8</td>
<td className="text-center">65</td>
<td className="text-center">99</td>
<td className="text-center">95</td>
<td className="text-center">67</td>
</tr>
<tr>
<td className="text-center">9</td>
<td className="text-center">60</td>
<td className="text-center">93</td>
<td className="text-center">90</td>
<td className="text-center">62</td>
</tr>
<tr>
<td className="text-center">10</td>
<td className="text-center">55</td>
<td className="text-center">88</td>
<td className="text-center">85</td>
<td className="text-center">57</td>
</tr>
<tr>
<td className="text-center">14</td>
<td className="text-center">40</td>
<td className="text-center">72</td>
<td className="text-center">69</td>
<td className="text-center">41</td>
</tr>
<tr>
<td className="text-center">30</td>
<td className="text-center">14</td>
<td className="text-center">43</td>
<td className="text-center">41</td>
<td className="text-center">14</td>
</tr>  </table>  <br />
<p><strong>Table F.3: Urinary concentrations 48 hours after an intake resulting in a peak kidney burden of 3 &micro;g of uranium per gram of kidney tissue</strong>  </p>  <table className="table table-striped">
<tr>
<th width="162" rowspan="2" className="text-center">Time post intake (hours)</th>
<th className="text-center" colSpan="2">Type F</th>
<th className="text-center" colSpan="2">Type M</th>
<th className="text-center" colSpan="2">Type S</th>
<th className="text-center" colSpan="2">Ingestion</th>
</tr>
<tr>
<th width="83">&micro;g U per 4 h</th>
<th width="44">&micro;g/L</th>
<th width="82">&micro;g U per 4 h</th>
<th width="44">&micro;g/L</th>
<th width="82">&micro;g U per 4 h</th>
<th width="36">&micro;g/L</th>
<th width="82">&micro;g U per 4 h</th>
<th width="36">&micro;g/L</th>
</tr>
<tr>
<td className="text-center">4</td>
<td className="text-center">3,100</td>
<td className="text-center">13,300</td>
<td className="text-center">2,600</td>
<td className="text-center">11,100</td>
<td className="text-center">1,310</td>
<td className="text-center">5,620</td>
<td className="text-center">819</td>
<td className="text-center">3,510</td>
</tr>
<tr>
<td className="text-center">8</td>
<td className="text-center">1,330</td>
<td className="text-center">5,690</td>
<td className="text-center">1,430</td>
<td className="text-center">6,150</td>
<td className="text-center">1,680</td>
<td className="text-center">7,220</td>
<td className="text-center">1,850</td>
<td className="text-center">7,930</td>
</tr>
<tr>
<td className="text-center">12</td>
<td className="text-center">477</td>
<td className="text-center">2,040</td>
<td className="text-center">659</td>
<td className="text-center">2,830</td>
<td className="text-center">1,120</td>
<td className="text-center">4,780</td>
<td className="text-center">1,290</td>
<td className="text-center">5,530</td>
</tr>
<tr>
<td className="text-center">16</td>
<td className="text-center">202</td>
<td className="text-center">865</td>
<td className="text-center">319</td>
<td className="text-center">1,368</td>
<td className="text-center">609</td>
<td className="text-center">2,611</td>
<td className="text-center">696</td>
<td className="text-center">2,982</td>
</tr>
<tr>
<td className="text-center">20</td>
<td className="text-center">99</td>
<td className="text-center">423</td>
<td className="text-center">164</td>
<td className="text-center">702</td>
<td className="text-center">318</td>
<td className="text-center">1,363</td>
<td className="text-center">351</td>
<td className="text-center">1,504</td>
</tr>
<tr>
<td className="text-center">24</td>
<td className="text-center">57</td>
<td className="text-center">245</td>
<td className="text-center">93</td>
<td className="text-center">400</td>
<td className="text-center">170</td>
<td className="text-center">728</td>
<td className="text-center">178</td>
<td className="text-center">761</td>
</tr>
<tr>
<td className="text-center">28</td>
<td className="text-center">40</td>
<td className="text-center">171</td>
<td className="text-center">61</td>
<td className="text-center">263</td>
<td className="text-center">99</td>
<td className="text-center">422</td>
<td className="text-center">96</td>
<td className="text-center">410</td>
</tr>
<tr>
<td className="text-center">32</td>
<td className="text-center">33</td>
<td className="text-center">140</td>
<td className="text-center">47</td>
<td className="text-center">201</td>
<td className="text-center">65</td>
<td className="text-center">278</td>
<td className="text-center">58</td>
<td className="text-center">249</td>
</tr>
<tr>
<td className="text-center">36</td>
<td className="text-center">29</td>
<td className="text-center">126</td>
<td className="text-center">40</td>
<td className="text-center">173</td>
<td className="text-center">49</td>
<td className="text-center">210</td>
<td className="text-center">41</td>
<td className="text-center">176</td>
</tr>
<tr>
<td className="text-center">40</td>
<td className="text-center">28</td>
<td className="text-center">119</td>
<td className="text-center">37</td>
<td className="text-center">159</td>
<td className="text-center">41</td>
<td className="text-center">177</td>
<td className="text-center">33</td>
<td className="text-center">142</td>
</tr>
<tr>
<td className="text-center">44</td>
<td className="text-center">27</td>
<td className="text-center">115</td>
<td className="text-center">35</td>
<td className="text-center">151</td>
<td className="text-center">37</td>
<td className="text-center">160</td>
<td className="text-center">30</td>
<td className="text-center">127</td>
</tr>
<tr>
<td className="text-center">48</td>
<td className="text-center">26</td>
<td className="text-center">112</td>
<td className="text-center">34</td>
<td className="text-center">147</td>
<td className="text-center">35</td>
<td className="text-center">151</td>
<td className="text-center">28</td>
<td className="text-center">119</td>
</tr>  </table>
<p>When a worker&rsquo;s urine monitoring result exceeds the applicable value from tables F.2 or F.3, the worker should be removed from work with soluble uranium compounds, and an additional urine sample should be obtained to confirm the initial result. If the intake is confirmed, the worker should be referred to medical personnel for a kidney function test.</p>  <p>The dominant mode of uranium toxicity depends on the compound solubility, the U-235 enrichment and the presence of other uranium isotopes.</p>  <p>Chemical toxicity is limiting in the following conditions:</p>
<ul>
<li>acute inhalation intakes of Type F compounds of all U-235 enrichments</li>
<li>acute inhalation intakes of Type M compounds of U-235 enrichments less than 30% by mass</li>
<li>chronic inhalation intakes of Type F compounds of U-235 enrichments less than 3% by mass</li>
</ul>  <p>Radiological toxicity is limiting in the following conditions:</p>
<ul>
<li>acute or chronic inhalation intakes of Type S compounds of any U-235 enrichment</li>
<li>acute or chronic inhalation intakes of any absorption type when U-232 or U-236 are present</li>
<li>chronic inhalation intakes of Type F compounds of U-235 enrichments of 3% or more by mass</li>
<li>chronic inhalation intakes of Type M compounds of any U-235 enrichment</li>
</ul>  <p>Chemical and radiological toxicity are equivalent for acute inhalation intakes of Type M compounds with U-235 enrichments of 30% or more by mass. In cases of intakes via a wound, the radiological and chemical toxicity should both be assessed on a case-by-case basis. For further information, consult ISO 16638-1, <em>Radiological protection &ndash; Monitoring and internal dosimetry for specific materials &ndash; Part 1: Inhalation of uranium compounds</em> [34].</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="F.3"></div>
<h3 id="appF-3">F.3	Ascertaining Dose From Intakes of Uranium Compounds</h3>  <p>In addition to the recommendations in Part B of this regulatory document, the following should be considered when ascertaining the dose from intakes of uranium compounds.</p>  <h4>F.3.1	<em>In vitro</em> bioassay</h4>  <p>Measurements of uranium in urine samples should be used to:</p>
<ul>
<li>ascertain doses from intakes of soluble uranium compounds</li>
<li>serve as an indicator of intakes for uranium compounds of any solubility</li>
<li>verify that intakes calculated from air monitoring are representative of actual intakes</li>
<li>supplement in vivo monitoring data in special bioassay monitoring to ascertain the dose</li>
<li>verify the proper functioning of respiratory protective equipment</li>
</ul>  <h4>F.3.2	<em>In vivo</em> bioassay</h4>  <p><em>In vivo</em> bioassay monitoring for intakes of uranium consists of lung counting. The following should be considered when measuring uranium in the lungs.</p>  <p>Measurements of the chest wall thickness (CWT) should be carried out for every worker taking part in a lung counting program for uranium. The measurements may be made by ultrasound. The frequency of these measurements should be documented. Calibration of the ultrasound units used for CWT measurements should be documented and verified periodically. The CWT of every worker taking part in a lung counting program should be documented and updated periodically. Each worker&rsquo;s CWT should be used in ascertaining their lung burden (e.g., mg of uranium) from the lung counting results.</p>  <p>Triggers for repeating lung counts should be established and documented. These should be based on considerations of surface contamination of counted workers. When surface contamination has been confirmed on a worker such that their lung count results are inaccurate, the worker should be requested to shower and be recounted.</p>
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
<h2 id="glossary">Glossary</h2>  <p>For definitions of terms used in this document, see <a href="http://www.nuclearsafety.gc.ca/pubs_catalogue/uploads/REGDOC-3-6-Glossary-of-CNSC-Terminology-eng.pdf">REGDOC-3.6, <em>Glossary of CNSC Terminology</em></a>, which includes terms and definitions used in the <a href="http://laws-lois.justice.gc.ca/eng/acts/N-28.3/"><em>Nuclear Safety and Control Act</em></a> and the regulations made under it, and in CNSC regulatory documents and other publications. REGDOC-3.6 is provided for reference and information.</p>
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
<h2 id="ref">References</h2>  <p>Note: The references for the draft documents listed below will be updated prior the publication of REGDOC-2.7.2, Volume I.</p>
<ol>
<li>Canadian Nuclear Safety Commission (CNSC), REGDOC-2.7.1, <em>Radiation Protection</em>, (draft). Public consultation is running concurrently with REGDOC-2.7.2, Volume I. See the <a href="/eng/acts-and-regulations/regulatory-documents/index">CNSC&#39;s website</a> for more details.</li>
<li>CNSC, REGDOC-2.7.2, Volume II, <em>Technical and Quality Management System Requirements for Dosimetry Services</em>, is expected to be published in early Spring 2019. See the <a href="/eng/acts-and-regulations/regulatory-documents/index">CNSC&#39;s website</a> for more details.</li>
<li>CNSC, REGDOC 2.9.1, <a href="http://www.nuclearsafety.gc.ca/eng/pdfs/REGDOCS/REGDOC-2-9-1-Environmental-Principles-Assessments-and-Protection-Measures-eng.pdf"><em>Environmental Principles, Assessments and Protection Measures</em></a>, version 1.1, Ottawa, 2017.</li>
<li>International Commission on Radiation Units and Measurements (ICRU) Report 51, <em>Quantities and Units in Radiation Protection Dosimetry</em>, Bethesda, Maryland, 1993.</li>
<li>National Institute of Standards and Technology (NIST), Physical Measurement Laboratory, <a href="https://www.nist.gov/pml/stopping-power-range-tables-electrons-protons-and-helium-ions"><em>Stopping-Power & Range Tables for Electrons, Protons, and Helium Ions</em></a>, NIST Standard Reference Database 124.</li>
<li>American National Standards Institute/Health Physics Society, ANSI/HPS N13.41-2011, <em>Criteria for Performing Multiple Dosimetry</em>, 2011.</li>
<li>International Commission on Radiological Protection (ICRP), ICRP Publication 103, <a href="http://www.icrp.org/publication.asp?id=ICRP%20Publication%20103"><em>The 2007 Recommendations of the International Commission on Radiological Protection</em></a>, Oxford, 2007.
<li>International Atomic Energy Agency (IAEA) TECDOC-1731, <a href="https://www-pub.iaea.org/books/iaeabooks/10628/Implications-for-Occupational-Radiation-Protection-of-the-New-Dose-Limit-for-the-Lens-of-the-Eye"><em>Implications for Occupational Radiation Protection of the New Dose Limit for the Lens of the Eye</em></a>, Vienna, 2013.
<li>IAEA, TECDOC-1162, <a href="https://www-pub.iaea.org/books/IAEABooks/5926/Generic-Procedures-for-Assessment-and-Response-during-a-Radiological-Emergency"><em>Generic procedures for assessment and response during a radiological emergency</em></a>, Vienna, 2000.</li>
<li>Kocher, D. C., and K. F. Eckerman, "Electron dose-rate conversion factors for external exposure of the skin from uniformly deposited activity on the body surface," <em>Health Physics</em>, Vol. 53, No. 2, pp. 135&ndash;141, 1987.</li>
<li>ICRP, ICRP Publication 130, <a href="https://www.osti.gov/servlets/purl/1376336"><em>Occupational Intakes of Radionuclides: Part I</em></a>, Vol. 44, No. 2, 2015.</li>
<li>ICRP, ICRP Publication 119, <a href="http://www.icrp.org/publication.asp?id=ICRP%20Publication%20119"><em>Compendium of Dose Coefficients based on ICRP Publication 60</em></a>, Oxford, 2012.</li>
<li>IAEA, Safety Series No. 114, <a href="https://inis.iaea.org/search/search.aspx?orig_q=RN:27047480"><em>Direct Methods for Measuring Radionuclides in the Human Body</em></a>, Vienna, 1996.</li>
<li>ICRU, Report 69, <em>Direct Determination of the Body Content of Radionuclides</em>, Bethesda, Maryland, 2016.</li>
<li>ICRP, ICRP Publication 66, <em>Human Respiratory Tract Model for Radiological Protection</em>, Vol. 24, Nos. 1&ndash;3, 1994.</li>
<li>ICRP, ICRP Publication 67, <em>Age-Dependent Doses to Members of the Public from Intakes of Radionuclides: Part 2 &ndash; Ingestion Dose Coefficients</em>, Vol. 23, No. 3/4, 1993.</li>
<li>ICRP, ICRP Publication 69, <em>Age-Dependent Doses to Members of the Public from Intakes of Radionuclides: Part 3 &ndash; Ingestion Dose Coefficients</em>, Vol. 25, No. 1, 1995.</li>
<li>Strom, D. J., and P. S. Stansbury, "Minimum Detectable Activity When Background Is Counted Longer Than the Sample", <em>Health Physics</em>, Vol. 63, No. 3, pp. 360&ndash;361, 1992.</li>
<li>International Organization for Standardization, ISO 20553:2006, <em>Radiation Protection &ndash; Monitoring of workers occupationally exposed to a risk of internal contamination with radioactive material</em>.</li>
<li>20.	Hickey, E. E., G. A. Stoetzel, D. J. Strom, G. R. Cicotte, C. M. Wiblin, and S. A. McGuire, NUREG 1400, <a href="https://www.nrc.gov/docs/ML1305/ML13051A671.pdf"><em>Air Sampling in the Workplace</em></a>, 1993.</li>
<li>Castellani, C. M., J. W. Marsh, C. Hurtgen, E. Blanchardon, P. Berard, A. Giussani, and M. A. Lopez, EURADOS Report 2013-01, <em>IDEAS Guidelines (Version 2) for the Estimation of Committed Doses from Incorporation Monitoring Data</em>, 2013.</li>
<li>IAEA, Safety Reports Series No. 37, <a href="https://www-pub.iaea.org/books/iaeabooks/6979/Methods-for-Assessing-Occupational-Radiation-Doses-due-to-Intakes-of-Radionuclides"><em>Methods for Assessing Occupational Radiation Doses Due to Intakes of Radionuclides</em></a>, Vienna, 2004.</li>
<li>ICRP, ICRP Publication 95, <em>Doses to Infants from Ingestion of Radionuclides in Mothers&rsquo; Milk</em>, Vol. 34, Nos. 3&ndash;4, 2004.</li>
<li>National Council on Radiation Protection & Measurements, NCRP Report No. 156, <em>Development of a Biokinetic Model for Radionuclide-Contaminated Wounds and Procedures for their Assessment, Dosimetry and Treatment</em>, 2006.</li>
<li>ICRP, ICRP Publication 78, <em>Individual monitoring for internal exposure of workers: Replacement of ICRP Publication 54</em>, Vol. 27, Nos. 3&ndash;4, 1997.</li>
<li>International Organization for Standardization, ISO 27048: 2011, <em>Radiological protection &ndash; Dose assessment for the monitoring of workers for internal radiation exposure</em>.</li>
<li>Toohey, R. E., L. Bertelli, S. L. Sugarman, A. L. Wiley, and D. M. Christensen, "Dose Coefficients for Intakes of Radionuclides via Contaminated Wounds", <em>Health Physics</em>, Vol. 100, No. 5, 2011.</li>
<li>Health Physics Society, ANSI/HPS N13.39&ndash;2001, <em>American National Standard for Design of Internal Dosimetry Programs</em>, McLean, Virginia.</li>
<li>ICRP, ICRP Publication 107, <em>Nuclear Decay Data for Dosimetric Calculations</em>, Vol. 38, No. 3, 2008.</li>
<li>Kramer, G. H., and S. Yiu, "The Canadian National Calibration Reference Centre for In-Vivo Monitoring: Thyroid Monitoring. Part VI: Choosing a Detector for Either I-125 and/or I 131", <em>The Canadian Journal of Medical Radiation Technology</em>, Vol. 27, No. 2, 1996.</li>
<li>Burns, L. C., et al., <em>The Thyroid Intercomparison Program</em>, Human Monitoring Laboratory Technical Report, HMLTD-88&ndash;3, Health Canada, 1996, Ottawa.</li>
<li>Kramer, G. H., and D. P. Meyerhof, "The Canadian National Calibration Reference Centre for In-Vivo Monitoring: Thyroid Monitoring Part III: A Basic Calibration Procedure for Thyroid Monitoring", <em>Canadian Journal of Medical Radiation Technology</em>, Volume 25, No. 2, 1994.</li>
<li>NIST Physical Measurement Laboratory 2015. Atomic Weights and Isotopic Compositions. (http://www.nist.gov/pml/data/comp)</li>
<li>SENES Consultants, <em>Evaluation of Default Annual Limit on Intake (ALI) for Yellowcake and Uranium Ore</em>, CNSC-RSP-0297, 2013.</li>
<li>International Organization for Standardization, ISO 16638-1, <em>Radiological protection &ndash; Monitoring and internal dosimetry for specific materials &ndash; Part 1: Inhalation of uranium compounds</em>, 2015.</li>
<li>CNSC, RSP-0165, <em>Uranium Intake &ndash; Dose Estimation Methods</em>, 2003.</li>
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
<div id="addInfo"></div>
<h2 id="addInfo">Additional Information</h2>  <p>The following documents are not referenced in this regulatory document but contain information that may be useful to the reader:</p>
<ul>
<li>Advisory Committee on Radiological Protection, ACRP 17, <em>Report on External Occupational Dosimetry in Canada</em>, 1995.</li>
<li>American National Standards Institute, ANSI/HPS N13.30-2011 (R2017), <em>Performance Criteria for Radiobioassay</em>, 2017.</li>
<li>American National Standards Institute/Health Physics Society, ANSI/HPS N.13.4.1, <em>Criteria for Performing Multiple Dosimetry</em>, Washington, 1997.</li>
<li>Becker, D. V., et al., <em>Society of Nuclear Medicine Procedure Guideline for Thyroid Uptake Measurement</em>, Society of Nuclear Medicine, Version 2.0, Reston, Virginia, 1999.</li>
<li>Birchall, A., M. Puncher, J. W. Marsh, K. Davis, M. R. Bailey, N. S. Jarvis, A. D. Peach, M. D. Dorrian, and A. C. James, "IMBA Professional Plus: a flexible approach to internal dosimetry", <em>Radiation Protection Dosimetry</em>, Vol. 125, Nos. 1&ndash;4, pp. 194&ndash;197, 2007.</li>
<li>Christensen, P., H. W. Julius, and T.O. Marshall, "Implication of New CEC Recommendations for Individual Monitoring for External Radiation Doses to the Skin and the Extremities", <em>Radiation Protection Dosimetry</em>, Vol. 39, pp. 91&ndash;94, Oxford, 1991.</li>
<li>Faulkner, K., and R. M. Harrison, "Estimation of Effective Dose Equivalent to Staff in Diagnostic Radiology", <em>Physics in Medicine and Biology</em>, No. 33, Institute of Physics, Philadelphia, 1988.</li>
<li>IAEA, IAEA-TECDOC-869, <em>Assessment and treatment of external and internal radionuclide contamination</em>, Vienna, 1996.</li>
<li>Kramer, G. H., and S. Yiu, "Examination of the Effect of Counting Geometry on I&ndash;125 Monitoring using MCNP", <em>Health Physics</em>, Vol. 72, No. 3, 1997.</li>
<li>National Council on Radiation Protection and Measurements, NCRP Report No. 122: <em>Use of Personal Monitors to Estimate Effective Dose Equivalent and Effective Dose to Workers for External Exposure to Low-LET Radiation</em>, Bethesda, MD, 1995</li>
<li>Reece, W.D., R. Harty, L. W. Brackenbush, and P. L. Roberson, NUREG/CR-4297, <em>Extremity Monitoring: Considerations for Use, Dosimeter Placement, and Evaluation</em>, United States Nuclear Regulatory Commission, Washington, 1985.</li>
<li>Rosenstein, M., and E. W. Webster, "Effective dose to personnel wearing protective aprons during fluoroscopy and interventional radiology", <em>Health Physics</em>, Vol. 67, pp. 88-89. Philadelphia, 1994.</li>
</ul>
<div className="wb-fnote" role="note">
<section>
<h2 id="fnb">Footnotes</h2>
<dl>
<dt>Footnote 1</dt>
<dd id="fnb1">
<p>Public consultation on REGDOC-2.7.1, <em>Radiation Protection</em>, is running concurrently with this regulatory document. See the <a href="/eng/acts-and-regulations/regulatory-documents/index">CNSC&#39;s website</a> for more details. </p>
<p className="fn-rtn"><a href="#fnb1-ref"><span className="wb-inv">Return to </span>1<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 2</dt>
<dd id="fnb2">
<p>REGDOC-2.7.2, Volume II, <em>Technical and Quality Management System Requirements for Dosimetry Services</em> [2], is expected to be published in Spring 2019. See the <a href="/eng/acts-and-regulations/regulatory-documents/index">CNSC&#39;s website</a> for more details.</p>
<p className="fn-rtn"><a href="#fnb2-ref"><span className="wb-inv">Return to </span>2<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 3</dt>
<dd id="fnb3">
<p>The NDR is a registry of occupational doses to Canadian workers. The NDR also includes doses received by foreign workers; however, these doses are not used for analyses of the NDR data. They are included so that dosimetry services can comply with section 19 of the RPR.</p>
<p className="fn-rtn"><a href="#fnb3-ref"><span className="wb-inv">Return to </span>3<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 4</dt>
<dd id="fnb4">
<p>Beta particles include electrons and positrons emitted from a nucleus during radioactive decay, while electrons include Auger and conversion electrons emitted during radioactive decay, as well as electron and positron beams produced by human-made devices.</p>
<p className="fn-rtn"><a href="#fnb4-ref"><span className="wb-inv">Return to </span>4<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 5</dt>
<dd id="fnb5">
<p>For alpha particle energies from 4 MeV to 7 MeV. NIST, "Stopping-Power & Range Tables for Electrons, Protons, and Helium Ions" [5].</p>
<p className="fn-rtn"><a href="#fnb5-ref"><span className="wb-inv">Return to </span>5<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 6</dt>
<dd id="fnb6">
<p>For beta particle energies from 10 keV to 2.5 MeV. NIST, "Stopping-Power & Range Tables for Electrons, Protons, and Helium Ions" [5].</p>
<p className="fn-rtn"><a href="#fnb6-ref"><span className="wb-inv">Return to </span>6<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 7</dt>
<dd id="fnb7">
<p>Pulsed radiation fields are characterized by dose rates periodically varying in intensity with time.</p>
<p className="fn-rtn"><a href="#fnb7-ref"><span className="wb-inv">Return to </span>7<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 8</dt>
<dd id="fnb8">
<p>ICRP Publication 119 [12] or more recent publications when published.</p>
<p className="fn-rtn"><a href="#fnb8-ref"><span className="wb-inv">Return to </span>8<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 9</dt>
<dd id="fnb9">
<p>The ICRP classifies inhaled particulates into three types, depending on their rate of absorption into blood from the lungs. Type F particulates are fast-clearing, being retained in the respiratory tract with a biological half-life of less than 1 hour. Materials classified as Type M follow a moderate clearance rate from the respiratory tract (typically 90% of the inhaled particulates have a biological half-life of about 100 days), while Type S materials are slow clearing and may be retained in the respiratory tract for periods exceeding one year (typically 99.9% of the inhaled Type S particulates have a biological half-life of about 7,000 days). The chemical characteristics of a compound determine its absorption type.</p>
<p className="fn-rtn"><a href="#fnb9-ref"><span className="wb-inv">Return to </span>9<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 10</dt>
<dd id="fnb10">
<p>Current ICRP biokinetic models can be found in ICRP Publication 67 [16] and 69 [17], for example, or more recent models when published.</p>
<p className="fn-rtn"><a href="#fnb10-ref"><span className="wb-inv">Return to </span>10<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 11</dt>
<dd id="fnb11">
<p>Absorption of radionuclides from the respiratory tract to blood is described using f<sub>r</sub>, which is the fraction of the activity deposited in the respiratory tract that dissolves rapidly, at a rate s<sub>r</sub> (d<sup>-1</sup>). The remainder of the activity deposited in the respiratory tract dissolves more slowly, at a rate s<sub>s</sub> (d<sup>-1</sup>) ICRP Publication 66, <em>Human Respiratory Tract Model for Radiological Protection</em> [15].</p>
<p className="fn-rtn"><a href="#fnb11-ref"><span className="wb-inv">Return to </span>11<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 12</dt>
<dd id="fnb12">
<p>Assuming elemental iodine vapour</p>
<p className="fn-rtn"><a href="#fnb12-ref"><span className="wb-inv">Return to </span>12<span className="wb-inv"> referrer</span></a></p>
</dd>
</dl>
</section>  </div>
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
<p>CNSC regulatory documents are classified under the following categories and series:</p>
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
<p><strong>Note:</strong> The regulatory document series may be adjusted periodically by the CNSC. Each regulatory document series listed above may contain multiple regulatory documents. Visit the CNSC&rsquo;s website for the latest <a href="/eng/acts-and-regulations/regulatory-documents/index">list of regulatory documents</a>.</p>

                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }