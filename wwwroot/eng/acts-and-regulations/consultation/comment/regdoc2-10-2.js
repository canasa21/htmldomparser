import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "en",
                pageTitle: "REGDOC-2.10.2: Fire Protection", 
                dateModified: "2019-11-08",
                langToggleUrl: "/fra/acts-and-regulations/consultation/comment/regdoc2-10-2"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<h2>Preface</h2>
<p>This regulatory document&nbsp;is part of the CNSC&#39;s&nbsp;emergency management and fire protection series of regulatory documents, which also covers nuclear emergency preparedness and framework for recovery. The full list of regulatory document series is included at the end of this document and can also be found on the <a href="/eng/acts-and-regulations/regulatory-documents/index">CNSC&#39;s website</a>.</p>
<p>REGDOC-2.10.2, <i>Fire Protection</i>, provides CNSC guidance for fire protection at nuclear facilities and uranium mines and mills. It also provides guidance on the development of a fire protection program (FPP).</p>
<p>The FPP ensures that the requirements of the <i>Nuclear Safety and Control Act</i> and the fire protection codes and standards included in the facility&#39;s licence or licence condition handbook are incorporated into the facility&#39;s design and operation in a controlled, coordinated and effective manner for all operational stages of the facility. </p>
<p>In accordance with the graded approach, the level of detail necessary for an acceptable FPP is related to the complexity of the facility and the potential risk to persons and the environment. For information on the implementation of regulatory documents and on the graded approach, see REGDOC-3.5.3, <i>Regulatory Fundamentals</i>.</p>
<div className="alert alert-info module-simplify mrgn-bttm-lg mrgn-tp-md">
<p>The words “shall” and “must” are used to express requirements to be satisfied by the licensee or licence applicant. “Should” is used to express guidance or that which is advised. “May” is used to express an option or that which is advised or permissible within the limits of this regulatory document. “Can” is used to express possibility or capability.</p>
<p>Nothing contained in this document is to be construed as relieving any licensee from any other requirements. It is the licensee&#39;s responsibility to identify and comply with all applicable regulations and licence conditions.</p>
</div><div className="col-md-12 module-table-contents">
<h2>Table of contents</h2>
<ul>
<li><a href="#sec1">1.Introduction</a>
<ul>
<li><a href="#sec1-1">1.1 Purpose.</a></li>
<li><a href="#sec1-2">1.2 Scope.</a></li>
<li><a href="#sec1-3">1.3 Relevant legislation.</a></li>
<li><a href="#sec1-4">1.4 National and international standards.</a></li>
</ul>
</li>
<li><a href="#sec2">2. Application</a></li>
<li><a href="#sec3">3. Requirements</a></li>
<li><a href="#sec4">4. Fire Protection Objectives</a></li>
<li><a href="#sec5">5. Defence in Depth – Fire Protection Perspective</a></li>
<li><a href="#sec6">6. Fire Protection Program.</a>
<ul>
<li><a href="#sec6-1">6.1 Roles, responsibilities and accountabilities.</a></li>
<li><a href="#sec6-2">6.2 Fire protection assessment</a>
<ul>
<li><a href="#sec6-2-1">6.2.1 Code compliance review..</a></li>
<li><a href="#sec6-2-2">6.2.2 Fire hazard assessment</a></li>
</ul>
</li>
<li><a href="#sec6-3">6.3 Additional information.</a>
<ul>
<li><a href="#sec6-3-1">6.3.1 Fire safe shutdown analysis.</a></li>
<li><a href="#sec6-3-2">6.3.2 Fire probabilistic safety assessment</a></li>
</ul>
</li>
<li><a href="#sec6-4">6.4 Additional information.</a></li>
<li><a href="#sec6-5">6.5 Fire protection assessment</a></li>
<li><a href="#sec6-6">6.6 Design and modification.</a>
<ul>
<li><a href="#sec6-6">6.6.1 Engineering change control</a></li>
<li><a href="#sec6-6">6.6.2 Third-party review of design and modifications with the potential to impact protection from fire </a></li>
</ul>
</li>
<li><a href="#sec6-7">6.7 Inspection, testing and maintenance.</a></li>
<li><a href="#sec6-8">6.8 Impairments of fire protection structures, systems and components.</a>
<ul>
<li><a href="#sec6-8">6.8.1 Compensatory measures.</a></li>
</ul>
</li>
<li><a href="#sec6-9">6.9 Training.</a></li>
<li><a href="#sec6-10">6.10 Additional information.</a>
<ul>
<li><a href="#sec6-10-1">6.10.1 Fire safety training.</a></li>
<li><a href="#sec6-10-2">6.10.2 Fire watch.</a></li>
</ul>
</li>
<li><a href="#sec6-11">6.11 Quality management system..</a></li>
<li><a href="#sec6-12">6.12 Additional information.</a></li>
<li><a href="#sec6-13">6.13 FPP measurement, assessment and improvement</a>
<ul>
<li><a href="#sec6-13-1">6.13.1 Fire protection program audit</a></li>
<li><a href="#sec6-13-2">6.13.2 Plant or facility compliance inspection.</a></li>
<li><a href="#sec6-13-3">6.13.3 Non-compliance tracking system..</a></li>
</ul>
</li>
<li><a href="#sec6-14">6.14 Fire investigation and reporting fires.</a></li>
<li><a href="#sec6-15">6.15 Additional information.</a></li>
<li><a href="#sec6-16">6.16 Fire response capability.</a></li>
<li><a href="#sec6-17">6.17 Additional information.</a></li>
</ul>
<li><a href="#ann-A">Appendix A: Fire Protection Objectives Performance Criteria</a>
<ul>
<li><a href="#ann-A-1">A.1 Health and Safety of Persons</a></li>
<li><a href="#ann-A-2">A.2 Protection of the Environment</a></li>
<li><a href="#ann-A-3">A.3 Radiation Safety</a></li>
<li><a href="#ann-A-4">A.4 Nuclear Criticality Safety</a></li>
<li><a href="#ann-A-5">A.5 Reactor Safety</a></li>
<li><a href="#ann-A-6">A.6 Additional Information</a></li>
</ul>
</li>
<li><a href="#ann-B">Appendix B: Levels of Defence in Depth</a></li>
<li><a href="#ann-C">Appendix C: Fire Modelling</a>
<ul>
<li><a href="#ann-C-1">C.1 Report Identification</a></li>
<li><a href="#ann-C-2">C.2 Project Deadline</a></li>
<li><a href="#ann-C-3">C.3 Building Description</a></li>
<li><a href="#ann-C-4">C.4 Analyst Qualifications</a></li>
<li><a href="#ann-C-5">C.5 Objective</a></li>
<li><a href="#ann-C-6">C.6 Model Input Data</a></li>
<li><a href="#ann-C-7">C.7 Acceptance or Performance Criteria</a></li>
<li><a href="#ann-C-8">C.8 Limitations</a></li>
<li><a href="#ann-C-9">C.9 Fire Scenarios</a></li>
<li><a href="#ann-C-10">C.10 Fire Model Used</a></li>
<li><a href="#ann-C-11">C.11 Fire Model Assumptions</a></li>
<li><a href="#ann-C-12">C.12 Uncertainty</a></li>
<li><a href="#ann-C-13">C.13 Sensitivity</a></li>
<li><a href="#ann-C-14">C.14 Summary of Results</a></li>
<li><a href="#ann-C-15">C.15 Conclusion</a></li>
<li><a href="#ann-C-16">C.16 References</a></li>
<li><a href="#ann-C-17">C.17 Appendices</a></li>
<li><a href="#ann-C-18">C.18 Additional Information</a></li>
</ul>
</li>
<li><a href="#ann-D">Appendix D: Deviations From Fire Protection Codes and Standards</a>
<ul>
<li><a href="#ann-D-1">D.1 Performance-Based Approach</a></li>
<li><a href="#ann-D-2">D.2 Equivalencies</a></li>
<li><a href="#ann-D-3">D.3 Exceptions</a></li>
<li><a href="#ann-D-4">D.4 Approval by the Authority Having Jurisdiction</a></li>
</ul>
</li>
<li><a href="#ann-E">Appendix E: Operational Practices</a>
<ul>
<li><a href="#ann-E-1">E.1 Control of Radioactive Material and Nuclear Substances</a></li>
<li><a href="#ann-E-2">E.2 Control of Hazardous Substances</a></li>
<li><a href="#ann-E-3">E.3 Control of Compressed Gases, Flammable Liquids and Combustible Liquids</a></li>
<li><a href="#ann-E-4">E.4 Control of Combustibles</a></li>
<li><a href="#ann-E-5">E.5 Management of Transient Material and Housekeeping</a></li>
<li><a href="#ann-E-6">E.6 Control of Ignition Source</a></li>
<li><a href="#ann-E-7">E.7 Additional Information</a></li>
<li><a href="#ann-E-8">E.8 Fire Watch</a></li>
<li><a href="#ann-E-9">E.9 Access to Restricted Areas</a></li>
<li><a href="#ann-E-10">E.10 Operation of Fire Protection Equipment</a></li>
<li><a href="#ann-E-11">E.11 Fire Prevention Oversight and Surveillance</a></li>
</ul>
</li>
<li><a href="#ann-F">Appendix F: Facility Design and Construction</a>
<ul>
<li><a href="#ann-F-1">F.1 Considerations Specific to Nuclear Facilities</a></li>
<li><a href="#ann-F-2">F.2 Design Basis</a></li>
<li><a href="#ann-F-3">F.3 Building Design and Layout</a></li>
<li><a href="#ann-F-4">F.4 Fire Separations and Barriers</a></li>
<li><a href="#ann-F-5">F.5 Local Heat Shields</a></li>
<li><a href="#ann-F-6">F.6 Control of Combustible Material (Solids, Liquids and Gases)</a></li>
<li><a href="#ann-F-7">F.7 Spill Control</a></li>
<li><a href="#ann-F-8">F.8 Protection of SSCs and Hazardous Substances From Fire Hazards</a></li>
<li><a href="#ann-F-9">F.9 Seismic Qualification</a></li>
<li><a href="#ann-F-10">F.10 Voice Communication Systems</a></li>
<li><a href="#ann-F-11">F.11 Emergency Lighting</a></li>
<li><a href="#ann-F-12">F.12 Egress and Exiting</a></li>
<li><a href="#ann-F-13">F.13 Areas of Refuge</a></li>
</ul>
</li>
<li><a href="#ann-G">Appendix G: Third-Party Review Report</a>
<ul>
<li><a href="#ann-G-1">G.1 Expectation for the Third-Party Report</a></li>
<li><a href="#ann-G-2">G.2 Expectation of Facility or Plant Conditions Assessment</a></li>
<li><a href="#ann-G-3">G.3 Independent Third-Party Reviewer Qualifications</a></li>
</ul>
</li>
<li><a href="#ann-H">Appendix H: Impairments</a>
<ul>
<li><a href="#ann-H-1">H.1 Planned Impairments</a></li>
<li><a href="#ann-H-2">H.2 Notification</a></li>
<li><a href="#ann-H-3">H.3 Unplanned Impairments</a></li>
<li><a href="#ann-H-4">H.4 Restoring Systems to Service</a></li>
<li><a href="#ann-H-5">H.5 Documentation</a></li>
</ul>
</li>
<li><a href="#ann-I">Appendix I: Fire Response</a>
<ul>
<li><a href="#ann-I-1">I.1 Planning for Firefighting at Nuclear Facilities</a></li>
<li><a href="#ann-I-2">I.2 Identifying the Risks</a></li>
<li><a href="#ann-I-3">I.3 Pre-fire Planning</a></li>
<li><a href="#ann-I-4">I.4 Response Capability</a></li>
<li><a href="#ann-I-5">I.5 Incident Management</a></li>
<li><a href="#ann-I-6">I.6 Incident Commander</a></li>
<li><a href="#ann-I-7">I.7 Command Post</a></li>
<li><a href="#ann-I-8">I.8 Risk Management</a></li>
<li><a href="#ann-I-9">I.9 Firefighting Equipment</a></li>
<li><a href="#ann-I-10">I.10 Industrial Fire Brigade</a></li>
<li><a href="#ann-I-10">I.10.1 Qualifications</a></li>
<li><a href="#ann-I-11">I.11 Firefighting Access</a></li>
<li><a href="#ann-I-12">I.12 Smoke and Heat Removal</a></li>
<li><a href="#ann-I-13">I.13 Training</a></li>
<li><a href="#ann-I-14">I.14 Offsite Fire Department</a></li>
<li><a href="#ann-I-15">I.15 Agreements and Communications</a></li>
<li><a href="#ann-I-16">I.16 Basis for Determining the Firefighting Resource Requirements</a></li>
<li><a href="#ann-I-17">I.17 Firefighter Wellness</a></li>
<li><a href="#ann-I-18">I.18 Drills</a></li>
<li><a href="#ann-I-19">I.19 Air Management</a></li>
</ul>
</li>
<li><a href="#ann-J">Appendix J: Fire Incident Reporting Table</a></li>
<li><a href="#ann-K">Appendix K: Acronyms</a></li>
<li><a href="#glossary">Glossary</a></li>
<li><a href="#ref">References</a></li>
<li><a href="#sup">Additional Information</a></li>
</ul>
</div>
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
<h3 id="sec1-1">1.1 Purpose</h3>
<p>REGDOC-2.10.2, <i>Fire Protection</i>, provides guidance for the development and implementation of a fire protection program (FPP) for nuclear facilities in Canada. An FPP ensures that fire protection measures are implemented in a controlled, coordinated and effective manner in order to achieve fire protection objectives.</p>
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
<h3 id="sec1-2">1.2 Scope</h3>
<p>This document elaborates on FPP requirements contained in CSA standards CSA N293, <i>Fire protection for nuclear power plants,</i> and CSA N393, <i>Fire protection for facilities that process, handle or store nuclear substances. </i>For N293 and N393, the CNSC is the authority having jurisdiction (AHJ).</p>
<p>Licensees whose licencing basis do not include CSA N293 and N393 are encouraged to use this document as information concerning FPPs at nuclear facilities.</p>
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
<h3 id="sec1-3">1.3 Relevant legislation</h3>
<p>The following provisions of the <i><a href="https://laws-lois.justice.gc.ca/eng/acts/N-28.3/">Nuclear Safety and Control Act</a></i> (NSCA) and the regulations made under it are most relevant to this document:</p>
<ul>
<li>NSCA, paragraph 3(a), subparagraph 9(a)(i) and paragraph 24(4)(b)</li>
<li><i><a href="https://laws-lois.justice.gc.ca/eng/regulations/SOR-2000-202/">General Nuclear Safety and Control Regulations</a></i> (GNSCR), paragraphs 12(1)(c), (d) and (f), and paragraph 17(e)</li>
<li><i><a href="https://laws-lois.justice.gc.ca/eng/regulations/SOR-2000-204/">Class&nbsp;I Nuclear Facilities Regulations</a></i>, paragraph 5(e) and paragraph 6(b)</li>
<li><i><a href="https://laws-lois.justice.gc.ca/eng/regulations/SOR-2000-205/">Class&nbsp;II Nuclear Facilities and Prescribed Equipment Regulations</a></i>, paragraphs 3(d), (e) and (f)</li>
<li><i><a href="https://laws-lois.justice.gc.ca/eng/regulations/SOR-2000-206/">Uranium Mines and Mills Regulations</a></i>, paragraph 5(1)(c), paragraph 5(2)(c), paragraph 6(1)(b) and paragraph 6(2)(b)</li>
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
<div id="1.4"></div>
<h3 id="sec1-4">1.4 National and international standards</h3>
<p>Key principles and elements used in developing this document are consistent with national and international standards.</p>
<p>The following standards are relevant to this regulatory document:</p>
<ul>
<li>CSA N293, <i>Fire protection for nuclear power plants</i><sup id="fnb1-ref"><a className="fn-lnk" href="#fnb1"><span className="wb-inv">Footnote </span>1</a></sup>  </li>
<li>CSA N393, <i>Fire protection for facilities that process, handle or store nuclear substances</i> <sup id="fnb2-ref"><a className="fn-lnk" href="#fnb2"><span className="wb-inv">Footnote </span>2</a></sup>  </li>
<li>International Atomic Energy Agency, IAEA Safety Standards Series, Safety Guide No. NS-G-2.1, <i><a href="https://www-pub.iaea.org/MTCD/Publications/PDF/Pub1091_web.pdf">Fire Safety in the Operation of Nuclear Power Plants</a>,</i> Vienna, 2000.<sup id="fnb3-ref"><a className="fn-lnk" href="#fnb3"><span className="wb-inv">Footnote </span>3</a></sup>  </li>
<li><i>National</i> <i>Building Code of Canada 2015 </i><sup id="fnb4-ref"><a className="fn-lnk" href="#fnb4"><span className="wb-inv">Footnote </span>4</a></sup>  </li>
<li><i>National</i> <i>Fire Code of Canada 2015 </i>(NFCC) <sup id="fnb5-ref"><a className="fn-lnk" href="#fnb5"><span className="wb-inv">Footnote </span>5</a></sup>  </li>
<li>National Fire Protection Association, NFPA 600, Standard on Industrial Fire Brigades, Quincy, Massachusetts, 2005.<sup id="fnb6-ref"><a className="fn-lnk" href="#fnb6"><span className="wb-inv">Footnote </span>6</a></sup>  </li>
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
<div id="2"></div>
<h2 id="sec2">2. Application</h2>
<p>Fire protection programs (FPPs) are site specific. FPPs reflect the particular nuclear facility type and the risks to persons and the environment associated with the particular characteristics of the facility and activity.</p>
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
<h2 id="sec3">3. Requirements</h2>
<p>CSA N293 and CSA N393 are commonly mandatory components of a nuclear facility&#39;s licensing basis. Such licensees must meet the requirements set out in these CSA standards.</p>
<p>In addition, all federally regulated buildings are required to apply the <i>National Building Code of Canada </i>(NBCC), and the <i>National Fire Code of Canada </i>(NFCC). These codes are complementary and intended to be applied together, and they identify the minimum requirements for fire protection and life safety in conventional buildings.</p>
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
<h2 id="sec4">4. Fire Protection Objectives</h2>
<p>Under the NSCA, the CNSC&#39;s mandate is to prevent unreasonable risk to the environment and the health and safety of persons.&nbsp;In accordance with this mandate, the regulatory fire protection objectives (as applicable) are to ensure:</p>
<ul>
<li>health and safety of persons</li>
<li>protection of the environment</li>
<li>nuclear substances safety</li>
<li>nuclear criticality safety</li>
<li>reactor safety</li>
</ul>
<p>The above objectives are met when the corresponding performance criteria are satisfied. Guidance on the performance criteria is presented in appendix A, Fire Protection Objectives Performance Criteria. The provisions which satisfy the performance criteria in appendix A should be available at all times (i.e., before, during and after a fire). </p>
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
<h2 id="sec5">5. Defence in Depth – Fire Protection Perspective</h2>
<p>Defence in depth (DID) sets out the basic safety framework for a nuclear facility, compensating for potential human and mechanical failures. It imposes several layers of protection and successive barriers to prevent the release of hazardous substances, nuclear substances and radioactive material to the environment. This framework includes protection of the barriers by averting damage both to the installation and to the barriers themselves. It also includes further measures to protect the public and the environment from harm in case the barriers are not fully effective.</p>
<p>The concept of DID helps in supporting the general safety objectives for the nuclear facility. It applies to all organizational, behavioural, operational and design-related safety activities to promote overlap between and across barriers and layers of protection. The objective is to minimize the risk of failure, support timely detection and control of failure should it occur, and limit or mitigate the results of a failure.</p>
<p>For further information on CNSC expectations regarding DID, see REGDOC-3.5.3, <i>Regulatory Fundamentals. </i></p>
<p>From a fire protection perspective, DID is achieved through a combination of design (e.g., physical barriers, spatial separation, fire detection and suppression systems), management of fire protection (e.g., operational procedures), quality assurance and emergency arrangements. DID applies to fire protection at all levels of the facility and its associated activities, from establishing high-level facility objectives to defining the detailed procedures and equipment required to meet those objectives.</p>
<p>FPPs maintain an appropriate level of DID throughout the lifetime of a facility. This is achieved through the fulfilment of the five elements of the DID principles as outlined in figure 1.</p>
<p><b>Figure 1: The five levels of defence in depth with respect to fire protection </b></p>
<img src="/images/regdoc-2-10-2/figure-1-eng.png" alt="The five levels of defence in depth with respect to fire protection"/> </div>
<p>Appendix B, Levels of Defence in Depth, outlines the means by which these levels are typically achieved with respect to fire protection at nuclear facilities. Barriers and levels of protection are developed as appropriate to the given facility.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6"></div>
<h2 id="sec6">6. Fire Protection Program</h2>
<p>Fire protection programs (FPPs) aim to minimize both the probability of occurrence and the consequences of fire. FPPs at nuclear facilities provide reasonable assurance, through defence in depth, that a fire will not prevent the necessary safe-shutdown functions from being performed. FPPs also ensure that radioactive releases to the environment and the impact to health and safety of persons in the event of a fire will be minimized.</p>
<p>The purpose of an FPP is to achieve and enhance fire safety by:</p>
<ul>
<li>identifying and referencing the procedures and processes for managing fire protection activities in a coherent manner and preventing unreasonable risk to nuclear safety, the environment, and to the health and safety of persons as a result of a fire</li>
<li>describing the planned, systematic approach necessary to provide reasonable confidence that all fire protection requirements are satisfied</li>
<li>demonstrating compliance with regulatory requirements related to fire protection</li>
</ul>
<p>FPPs are implemented in a planned, coordinated and controlled manner during each phase of the lifecycle of a facility.</p>
<p>FPPs should detail:</p>
<ul>
<li>roles, responsibilities and accountabilities</li>
<li>fire safety assessment (e.g., code compliance, fire hazard assessments, fire safe shutdown analysis and fire probabilistic safety assessment)</li>
<li>fire prevention operation controls</li>
<li>design (e.g., fire detection and notification, fire suppression, fire resistance rating of building structures, building materials, egress and water supply)</li>
<li>prevention (e.g., control of ignition sources; inspection, testing and maintenance (ITM) of fire protection features; and control of flammable, combustible materials)</li>
<li>inspection, testing and maintenance</li>
<li>impairments of fire protecti</li>
<li>on structures, systems and components (SSCs)</li>
<li>training</li>
<li>quality management system</li>
<li>FPP measurement, assessment and improvement</li>
<li>fire investigation and reporting fires</li>
<li>fire response capability</li>
</ul>
<p>Each program element requires sufficient resources governed by the licensee&#39;s approved policies, processes and procedures. These elements, when integrated, will form a comprehensive FPP. As described in sections 6.1 to 6.11, each FPP element has a number of criteria. </p>
<p>Facilities that handle, use, process or store nuclear substances can be part of larger institutions with pre-existing FPPs. For example, universities may have nuclear research facilities on campus. In such cases, the main facility&#39;s program may be acceptable as is, or augmented to demonstrate that the fire protection objectives are met. Where this is the case, it is typical for the licenced facility to document how all requirements of the FPP are addressed in the main facility&#39;s FPP. </p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.1"></div>
<h3 id="sec6-1">6.1 Roles, responsibilities and accountabilities</h3>
<p>Requirements related to defining the roles, responsibilities and accountability of personnel associated with fire protection activities are found in CSA N293 and CSA N393.</p>
<p>The FPP should:</p>
<ul>
<li>identify the senior management position that has immediate authority and responsibility for the FPP</li>
<li>outline the fire protection interfaces with other organizations and identify responsibilities for the coordination of activities</li>
<li>identify the position responsible for the daily administration and coordination of the FPP and its implementation</li>
<li>identify the authorities responsible for implementing the various areas of the FPP</li>
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
<div id="6.2"></div>
<h3 id="sec6-2">6.2 Fire protection assessment</h3>
<p>A fire protection assessment (FPA) is a set of analyses and/or assessments that demonstrate that the objectives of nuclear safety, radioactive release prevention, life safety and economic loss prevention are achieved. The FPA is composed of a code compliance review (CCR), a fire hazard assessment (FHA), and for reactors (including power, non-power and medical isotope production), a fire safe shutdown analysis (FSSA). FPA-related requirements can be found in CSA N293 and CSA N393. For additional information on fire modelling, refer to appendix B.</p>
<p>The FPA provides the appropriate level of confidence in demonstrating compliance with the applicable standards, such as CSA N293 and CSA N393, by providing:</p>
<ul>
<li>an approved QA process performed by qualified analysts</li>
<li>a systematic analysis method</li>
<li>verified data</li>
<li>justified assumptions</li>
<li>verified and validated fire models</li>
<li>a degree of conservatism</li>
<li>a review process</li>
</ul>
<p>The results of the FPA are used to provide input into:</p>
<ul>
<li>facility design</li>
<li>design and functional requirements of SSCs</li>
<li>commissioning programs</li>
<li>design and operating manuals</li>
<li>operating procedures</li>
<li>periodic inspection and testing procedures</li>
<li>maintenance activities</li>
<li>emergency operating procedures</li>
<li>emergency management plans</li>
<li>decommissioning plans for the facility</li>
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
<div id="6.2.1"></div>
<h4 id="sec6-2-1">6.2.1 Code compliance review</h4>
<p>The CCR assesses the facility&#39;s design and operation against the applicable codes of construction (e.g., the <i>National Building Code of Canada</i>), the current fire code and the applicable nuclear standards (e.g., CSA N293, CSA N393). This should include a review of fire protection structures, systems and components such as: </p>
<ul>
<li>suppression systems (e.g., water supply reticulation and pumps)</li>
<li>detection systems</li>
<li>manual fire suppression equipment (e.g., portable fire extinguishers, hose stations and fire hydrants)</li>
<li>storage, supply and use of flammable liquids and gases</li>
<li>fire protection features (e.g., fire separations, fire doors and penetration seals)</li>
</ul>
<p>Where the design of the fire protection feature has been reviewed by an independent third party, the third-party review (TPR) report should be referenced in the CCR. </p>
<p>If alternative solutions are used, the CCR must outline how the intent of the requirements is met. For additional information on deviations from the applicable codes and standards and exceptions approved by the authority having jurisdiction, refer to appendix D, Deviations from Fire Protection Codes and Standards. </p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.2.2"></div>
<h4 id="sec6-2-2">6.2.2 Fire hazard assessment</h4>
<p>An FHA is performed to demonstrate that the fire safety objectives are met by the incorporation of appropriate fire protection systems and features into the facility design, construction and operation. This analysis is integral to an effective FPP, as it provides a comprehensive assessment of initiating events, consequences and safety provisions for the facility. FHA-related requirements can be found in CSA N293 and CSA N393. </p>
<p>An FHA evaluates potential fire hazards, as well as the fire protection systems and features (including both physical attributes and program elements) used to mitigate the effects of fire. The FHA confirms that a facility (including the design, operation and maintenance provisions) will meet the fire protection objectives of the FPP. CSA N293 and CSA N393 provide additional guidance on preparing an FHA. </p>
<p>In accordance with the graded approach, the level of detail necessary for an acceptable FHA is related to the complexity of the facility and the potential risk to persons and the environment. </p>
<p>The FHA can be an input for probabilistic safety assessments (PSAs). </p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.3"></div>
<h3 id="sec6-3">6.3 Additional information</h3>
<p>Additional information regarding deterministic safety analysis may be found in REGDOC-2.4.1, <i>Deterministic Safety Analysis</i> <sup id="fnb7-ref"><a className="fn-lnk" href="#fnb7"><span className="wb-inv">Footnote </span>7</a></sup>  . </p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.3.1"></div>
<h4 id="sec6-3-1">6.3.1 Fire safe shutdown analysis</h4>
<p>Fire safe shutdown analysis (FSSA) demonstrates that established means of achieving nuclear safety objectives and performance criteria are available in the event of a fire. FSSA-related requirements can be found in CSA N293 and CSA N393. </p>
<p>The FSSA can be an input for PSAs. </p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.3.2"></div>
<h4 id="sec6-3-2">6.3.2 Fire probabilistic safety assessment</h4>
<p>PSAs are prepared for facilities with a reactor. The objectives of a fire PSA are to: </p>
<ul>
<li>identify event scenarios with the potential for significant core degradation</li>
<li>provide a systematic analysis to give confidence that the design and operation of the plan pose an acceptable level of risk to the public</li>
<li>provide probability assessments for the occurrence of severe damage states and major offsite releases</li>
<li>identify plant vulnerabilities and systems for which design improvements or modifications to operating procedures could reduce the probability of severe accidents or mitigate their consequences</li>
<li>assess the adequacy of plant accident management and emergency procedures</li>
</ul>
<p>Fire PSAs are not required under CSA N293 or CSA N393. However, licensees are required to comply with regulatory document REGDOC-2.4.2, <i>Probabilistic Safety Assessment (PSA) for Nuclear Power Plants </i><sup id="fnb8-ref"><a className="fn-lnk" href="#fnb8"><span className="wb-inv">Footnote </span>8</a></sup>  <i>.</i></p>
<p>REGDOC-2.4.2, requires licensees to seek CNSC acceptance of the methodology and computer codes to be used for the PSA before using them. In addition, CNSC staff use ASME/ANS <i>Probabilistic Risk Assessment Standard;</i> CSA N290.17.17, <i>Probabilistic safety assessment for nuclear power plants </i><sup id="fnb9-ref"><a className="fn-lnk" href="#fnb9"><span className="wb-inv">Footnote </span>9</a></sup>  ; NUREG (e.g., NUREG/CR-6850 for fire)<sup id="fnb10-a-ref"><a className="fn-lnk" href="#fnb10"><span className="wb-inv">Footnote </span>10</a></sup>  , IAEA documents (such as IAEA-TECDOC-1135, <i>Regulatory review of probabilistic safety assessment (PSA)</i> <i>Level 1 </i><sup id="fnb11-ref"><a className="fn-lnk" href="#fnb11"><span className="wb-inv">Footnote </span>11</a></sup>  <i>,</i> and IAEA-TECDOC-1229,<i> Regulatory review of probabilistic safety assessment (PSA) Level 2</i>) <sup id="fnb12-ref"><a className="fn-lnk" href="#fnb12"><span className="wb-inv">Footnote </span>12</a></sup>   to review the quality of fire PSAs<i>.</i></p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.4"></div>
<h3 id="sec6-4">6.4 Additional information</h3>
<p>Additional information on conducting PSAs may be found in REGDOC-2.4.2, <i>Probabilistic Safety Assessment (PSA) for Nuclear Power Plants</i>, CSA N290.17.17, <i>Probabilistic safety assessment for nuclear power plants</i> and the United States Nuclear Regulatory Commission&#39;s <i>Fire PRA Methodology for Nuclear Power Facilities, Volume 2: Detailed Methodology</i> <sup id="fnb10-b-ref"><a className="fn-lnk" href="#fnb10"><span className="wb-inv">Footnote </span>10</a></sup>  . </p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.5"></div>
<h3 id="sec6-5">6.5 Fire protection assessment</h3>
<p>Fire prevention operational controls-related requirements can be found in CSA N293 and CSA N393. FPPs include appropriate operational procedures detailing processes and controls in place to ensure that the fire safety objectives continue to be met during all operational states. </p>
<p>Procedures for fire prevention may include:</p>
<ul>
<li>control of radioactive material and nuclear substances</li>
<li>control of hazardous substances</li>
<li>control of compressed gases, flammable liquids and combustible liquids</li>
<li>control of combustible materials</li>
<li>management of transient material</li>
<li>ignition source control and hot works</li>
<li>fire watch</li>
<li>housekeeping</li>
<li>access to restricted areas</li>
<li>operation of fire protection equipment</li>
<li>fire prevention oversight and surveillance</li>
</ul>
<p>The procedures will vary according to facility type and commensurate risk. For additional information on operational controls, refer to appendix E. </p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.6"></div>
<h3 id="sec6-6">6.6 Design and modification</h3>
<p>A review process ensures the facility and the associated operations continue to meet fire protection objectives and applicable building and fire codes and standards for:</p>
<ul>
<li>new designs</li>
<li>modifications and alterations to existing facilities</li>
<li>change of usage</li>
<li>regulatory changes to operational requirements (e.g., required ITM of fire protection systems in accordance with the NFCC)</li>
</ul>
<p>Procedures are established to ensure appropriate review of changes in design, operation, procedures, occupancy, fieldwork or fire hazards to confirm continued adherence to FPP safety objectives. </p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.6.1"></div>
<h4 id="sec6-6-1">6.6.1 Engineering change control</h4>
<p>Engineering change control processes ensure that modifications, change of usage or alterations to the facility or processes comply with applicable codes and standards and do not increase the risk from fire to persons or the environment. The change control process should include consideration of the following variables:</p>
<ul>
<li>the fire-protection-related codes and standards in effect</li>
<li>the current editions of the codes and standards when upgrades or modifications are made</li>
<li>review against the FHA and, if applicable, the FSSA</li>
<li>updates to the CCR, FHA and FSSA as a result of the change of use or alteration</li>
<li>the review of fire protection equipment purchases by persons familiar with the fire protection requirements</li>
<li>ITM requirements associated with the design</li>
<li>verification inspections and commissioning testing to ensure the new or modified SSC functions as designed</li>
<li>updated drawings, records and specifications reflect the design</li>
<li>the potential need for appropriate peer review of the design</li>
<li>the potential need for independent TPR of the design</li>
</ul>
<p>For additional information and guidance regarding specific or unique design requirements or features, refer to appendix F, Facility Design and Construction.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.6.2"></div>
<h4 id="sec6-6-2">6.6.2 Third-party review of design and modifications with the potential to impact protection from fire</h4>
<p>Third-party reviews assess compliance with the codes and standards referenced in the licensing basis of a nuclear facility. The reviews do not grant deviations or equivalencies. The review may offer a professional opinion on the methodology and adequacy of an alternative solution or equivalency, but final acceptance will be granted by the CNSC.</p>
<p>Modifications include temporary or permanent changes that may affect protection from fire, and are not limited to active fire protection systems (e.g., egress, change of use and storage).</p>
<p>The review should evaluate the design documentation for the following:</p>
<ul>
<li>review of alterations, modifications or change of use to determine compliance with the appropriate codes, standards and good engineering practice</li>
<li>review of the design documentation to assess if the design intent will be achieved</li>
<li>review of impact to the facility&#39;s safety analysis or FHA, or ensuring that the FHA impact was addressed</li>
<li>review of requirements that stem from the alteration, modification or change of usage (e.g., installation of a fire sprinkler system may also require via the <i>National Building Code of Canada</i> the installation of a fire alarm system and dyking to contain sprinkler water runoff)</li>
</ul>
<p>In some cases, at the discretion of the reviewer, field inspections or Commission test witnessing is undertaken. The need for additional review activities over and above the desktop review is based on the complexity and scope of the modification and the potential hazards that may exist. </p>
<p>For additional information on the expectation of the TPR report, refer to appendix H, Impairments. </p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.7"></div>
<h3 id="sec6-7">6.7 Inspection, testing and maintenance</h3>
<p>Inspection, testing and maintenance (ITM) activities minimize the risk of inadequate performance due to improper maintenance or lack of maintenance.</p>
<p>ITM-related requirements can be found in CSA N293 and CSA N393.</p>
<p>To ensure that the ITM tasks are carried out consistently and at the correct frequency, such tasks should be entered into a work control or work tracking system. The procedures should include:</p>
<ul>
<li>the position responsible for carrying out the ITM</li>
<li>the frequency of the tasks</li>
<li>referencing of the required tasks to the applicable code or standard requirement</li>
<li>specific tools required to complete the task</li>
<li>work permits and system lockouts</li>
<li>means for reporting and tracking deficiencies</li>
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
<div id="6.8"></div>
<h3 id="sec6-8">6.8 Impairments of fire protection structures, systems and components</h3>
<p>The FPP identifies the procedures for planned and unplanned impairments of fire protection structures, systems and components (SSCs). This ensures that fire protection objectives at the facility are achieved and that the risks associated with the abnormal condition imposed by impairments are adequately managed. Impairment procedures are as follows: </p>
<ul>
<li>Minimize the duration of the impairment (planned and unplanned)</li>
<li>Prevent simultaneous impairment or degradation of redundant systems or protective processes</li>
<li>Control impairments under a managed system (e.g., a permit)</li>
<li>Ensure that all required parts and components are available in advance of planned impairments</li>
<li>Ensure that measures are in place to mitigate the risk due to unplanned impairments (e.g., maintaining spare parts and redundant backup systems)</li>
<li>Implement compensatory measures to maintain a level of safety equivalent to that provided by the impaired system</li>
</ul>
<p>For additional information regarding planned and unplanned impairments, refer to appendix G.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.8.1"></div>
<h4 id="sec6-8-1">6.8.1 Compensatory measures</h4>
<p>Requirements related to compensatory measures can be found in CSA N293 and CSA N393. </p>
<p>Compensatory measures are measures and actions taken if impairment of a fire protection SSC prevents that system or feature from performing its intended function. Compensatory measures are a temporary alternative means of providing reasonable assurance that the necessary function will be compensated for during the impairment, or that actions will be taken to reduce the likelihood or mitigate the consequence of a fire. Compensatory measures should be clearly tied to the degraded condition or deficient fire protection SSC.</p>
<p>Impairment procedures should include guidance on appropriate compensatory measures such as: </p>
<ul>
<li>fire watches or temporary detection methods to compensate for impairment of fixed automatic detection systems</li>
<li>alternate means of notifying occupants, including means of alerting occupants to an impairment to the fire notification system</li>
<li>pre-deployed suppression systems or apparatus to compensate for impaired suppression systems</li>
<li>temporary water connections to fire suppression systems and equipment to compensate for water supply impairments</li>
<li>means of notifying emergency responders of the nature and impact of the impairment, and of any requirement for additional apparatus or resources</li>
<li>minimizing of potential fire risks by placing temporary limits on combustible loading or exposed combustibles</li>
<li>placement of temporary limitations on ignition sources</li>
<li>restriction of operational activities</li>
<li>restriction of occupant access to applicable areas of the facility</li>
<li>increase in the number of industrial fire brigade members at the facility during an impairment</li>
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
<div id="6.9"></div>
<h3 id="sec6-9">6.9 Training</h3>
<p>Training-related requirements can be found in CSA N293 and CSA N393. Training should include training for workers who are not full-time employees at the facility. A systematic approach to training (SAT) provides the licensee with direction for establishing the training needs, along with guidance for training program development and delivery.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.10"></div>
<h3 id="sec6-10">6.10 Additional information</h3>
<p>Additional information on the SAT and record keeping may be found in REGDOC-2.2.2, <i>Personnel Training,</i> Version 2 <sup id="fnb13-ref"><a className="fn-lnk" href="#fnb13"><span className="wb-inv">Footnote </span>13</a></sup>  . </p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.10.1"></div>
<h4 id="sec6-10-1">6.10.1 Fire safety training</h4>
<p>Requirements related to facility safety training can be found in CSA N293 and CSA N393. All facility occupants should be provided with basic fire safety and fire prevention training, including familiarization with fire prevention procedures, fire reporting and facility emergency alarms. In addition, all occupants should be aware of the overall fire protection organization for the facility and of their responsibilities within the FPP. </p>
<p>Adequate fire prevention training for all facility personnel provides instruction in the areas that apply to their individual function at the facility. Training can include: </p>
<ul>
<li>fire prevention</li>
<li>basic fire science</li>
<li>identification and interpretation of warning signs and notifications</li>
<li>identification and response to alarms</li>
<li>notification procedures and associated information, such as emergency telephone numbers and alarm-raising procedures</li>
<li>restrictions and permitted locations for the temporary placement of transient combustible and non-combustible material</li>
<li>restrictions on the use and storage of hazardous substances</li>
<li>appropriate actions to take upon discovering a fire (e.g., notifying the control room, security or other emergency responders, attempting to extinguish the fire, actuating local fire suppression systems)</li>
<li>appropriate response to receiving notification</li>
<li>administrative controls on the use of combustibles and ignition sources</li>
<li>response to flammable or combustible liquid spills, gas releases or leaks</li>
<li>live practice fires using extinguishment equipment</li>
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
<div id="6.10.2"></div>
<h4 id="sec6-10-2">6.10.2 Fire watch</h4>
<p>Requirements related to fire watch can be found in CSA N293 and CSA N393. Fire watches provide for observation and control of fire hazards associated with hot work, and they may act as compensatory measures for impaired fire protection systems and features. Depending on the complexity of the facility, nature of the hazard and associated risks, FPPs may include both continuous fire watch and roving fire watch training.</p>
<p>Continuous fire watch entails constant watch activities for a predetermined period within an area where continuous surveillance is possible. Roving fire watch applies to scheduled, recurring watches of specified areas on a predetermined patrol route. </p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.11"></div>
<h3 id="sec6-11">6.11 Quality management system</h3>
<p>Requirements related to the quality management system (QMS) can be found in CSA N293 and CSA&nbsp;N393.</p>
<p>QMS arrangements associated with the FPP include processes to verify that fire protection systems are designed, fabricated, implemented, tested, maintained and operated so that they will function as intended. In particular, QMS arrangements are in place to facilitate control of:</p>
<ul>
<li>design and procurement documents</li>
<li>instruction, procedures and drawings</li>
<li>purchased material, equipment and services</li>
<li>inspection activities</li>
<li>ITM and operating status</li>
<li>nonconforming items and corrective actions</li>
<li>records and audits</li>
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
<div id="6.12"></div>
<h3 id="sec6-12">6.12 Additional information</h3>
<p>Additional information may be found in CSA N286, <i>Management system requirements for nuclear power plants </i><sup id="fnb14-ref"><a className="fn-lnk" href="#fnb14"><span className="wb-inv">Footnote </span>14</a></sup>  . </p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.13"></div>
<h3 id="sec6-13">6.13 FPP measurement, assessment and improvement</h3>
<p>Requirements related to FPP measurement, assessment and improvement can be found in CSA N293 and CSA N393.</p>
<p>Improvement needs are determined by regularly verifying the adequate implementation of the FPP, which involves: </p>
<ul>
<li>monitoring and measuring the organizational processes that support the program</li>
<li>conducting self-assessments and independent assessments, and analyzing assessment results</li>
<li>identifying non-conformances and developing corrective and preventive actions</li>
<li>regularly reviewing assessment results and actions taken</li>
</ul>
<p>The continuous improvement cycle begins with regular performance monitoring, and flows through scheduled assessment reviews to identify any non-conformances and ensure that the appropriate preventive or corrective actions are taken. </p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.13.1"></div>
<h4 id="sec6-13-1">6.13.1 Fire protection program audit</h4>
<p>A fire protection program audit is an assessment by a third party of the implementation and effectiveness of each program element. FPP audit-related requirements can be found in CSA N293 and CSA N393. Findings resulting from the third-party audit should be made available to the CNSC. The audit should verify that: </p>
<ul>
<li>roles and responsibilities are documented and understood by fire protection personnel</li>
<li>ITM of fire protection systems is being scheduled and completed on time</li>
<li>fire prevention inspections are being performed</li>
<li>the fire hazard in each fire area has not increased above that which the fire hazard and safety shutdown analysis reports specify</li>
<li>plant personnel receive appropriate training in fire prevention and firefighting procedures, and the training program is consistent with approved standards</li>
<li>administrative controls limit transient combustibles in areas important to safety, and the storage areas are analyzed by knowledgeable staff</li>
<li>controls for the handling and storage of compressed gas cylinders are implemented</li>
<li>controls for eliminating, minimizing and controlling ignition sources are implemented</li>
<li>permit procedures (hot work and storage transient materials) are being followed</li>
<li>impairment of fire protection systems is adequately managed and corrected as soon as is reasonably practical to minimize the duration of the impairment (impairment forms are completed correctly and compensatory measures are implemented and provide a comparable level of safety)</li>
<li>general facility conditions are adequate by performing field inspections to ensure adherence to FPP procedures</li>
<li>identified deficiencies have been promptly and adequately corrected</li>
<li>fire protection records are documented and maintained</li>
<li>fire incidents are investigated to determine cause, effect and actions to prevent recurrence</li>
<li>problem areas identified in previous audits have been corrected</li>
</ul>
<p>The audit should analyze all problem areas identified and recommend appropriate fire protection measures to provide a level of fire safety that achieves the fire protection objectives. </p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.13.2"></div>
<h4 id="sec6-13-2">6.13.2 Plant or facility compliance inspection</h4>
<p>A plant or facility condition inspection is performed and documented to assess compliance with the requirements of the <i>National Fire Code of Canada</i>, CSA N293 or CSA N393, and applicable referenced standards through visual inspections. </p>
<p>The inspection is to be of sufficient depth to ensure that the fire protection objectives continue to be met by the plant or facility. Refer to appendix G for additional guidance. </p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.13.3"></div>
<h4 id="sec6-13-3">6.13.3 Non-compliance tracking system</h4>
<p>Requirements related to non-compliance tracking systems can be found in CSA N293 and CSA N393. </p>
<p>A tracking system should be implemented to document and monitor trends related to fire protection and non-compliances with the FPP. This should include where and when the non-compliance was identified, who is responsible for remedying the non-compliance and a target completion date for bringing the issue into compliance with requirements. The tracking system should be set up and maintained so as to allow trending of minor non-compliances that may be an indication of a precursor to a more significant non-compliance or event. </p>
<p>The corrective action plan should indicate: </p>
<ul>
<li>corrective actions to resolve the non-compliance</li>
<li>corrective actions to prevent recurrence of the non-compliance where applicable</li>
<li>commitment to a completion date</li>
<li>position responsible for the implementation of the corrective action</li>
<li>interim compensatory measures that will provide an equivalent level of safety to the identified non-compliance to be implemented until the corrective action or actions are fully implemented</li>
</ul>
<p>Completion dates should be assigned based upon the impact or safety of persons and the environment associated with the deficiencies. </p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.14"></div>
<h3 id="sec6-14">6.14 Fire investigation and reporting fires</h3>
<p>The FPP should identify the procedures for reporting fires to facility management and to the CNSC. This should include determining the cause of the fire and investigating any injury or any damage to SSCs or equipment. The fire report should indicate the probable cause(s) and conclusions, drawn from the investigation(s) after the situation or event. Appendix J provides a template for the required information that should be provided when reporting fire events. The results of the investigation or the progress that has been made in conducting an investigation should be reported to CNSC. </p>
<p>Measures should be in place to track facility fire events and operational experience for comparable facility types in order to identify areas of possible risks and improvements. </p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.15"></div>
<h3 id="sec6-15">6.15 Additional information</h3>
<p>For the CNSC&#39;s reporting requirements and guidance, refer to REGDOC-3.1.1, <i>Reporting Requirements for Nuclear Power Plants, </i>Version 2 <sup id="fnb15-ref"><a className="fn-lnk" href="#fnb15"><span className="wb-inv">Footnote </span>15</a></sup>   and REGDOC-3.1.2, <i>Reporting Requirements for Non-Nuclear Power Plants and Uranium Mines and Mills</i> <sup id="fnb16-ref"><a className="fn-lnk" href="#fnb16"><span className="wb-inv">Footnote </span>16</a></sup>. </p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.16"></div>
<h3 id="sec6-16">6.16 Fire response capability</h3>
<p>Fire response is a key element in fire protection, and is integral to the requirements of the building and fire codes. Adequate fire response depends on effective planning, resourcing, training, exercises and communication. </p>
<p>The organization provides for fire response by way of emergency responders drawn from an onsite force (commonly referred to as the industrial fire brigade), offsite service providers such as municipal fire departments, or a combination of the two. Under the NSCA, adequate provision for response to hazards and risks at the facility remains the responsibility of the licensee. This responsibility includes the determination of what constitutes an appropriate aggregate number of responders and appropriate resources. Requirements related to fire response capability can be found in CSA N293 and CSA N393. </p>
<p>For facilities that present a higher risk, a documented fire response needs analysis should be performed to determine credible fire scenarios and resources required to extinguish a fire and mitigate any adverse effects of the fire suppression activities. The fire response needs analysis should take into consideration the topics identified in appendix I. </p>
<p>Licensees should provide adequate guidance to the responding fire department to ensure familiarity with the facilities operation and potential hazards. Responding fire departments should receive training and familiarization tours so that responders are knowledgeable and equipped to deal with credible fire scenarios at the facility.</p>
<p>Additional details on fire response are provided in appendix I.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.17"></div>
<h3 id="sec6-17">6.17 Additional information</h3>
<p>Additional information can be found in REGDOC-2.10.1, <i>Nuclear Emergency Preparedness and Response, </i>Version 2 <sup id="fnb17-ref"><a className="fn-lnk" href="#fnb17"><span className="wb-inv">Footnote </span>17</a></sup>  . </p>
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
<h2 id="ann-A">Appendix A: Fire Protection Objectives Performance Criteria</h2>
<p>To achieve the fire protection objectives outlined in section 4, the following corresponding performance criteria are satisfied. The performance criteria presented below are not mutually exclusive and typically support multiple objectives. The provisions that satisfy the performance criteria below should be available at all times (i.e., before, during and after a fire).</p>
<h3 id="ann-A-1">A.1 Health and Safety of Persons</h3>
<p>The health and safety of persons is achieved when the following performance criteria are met:</p>
<ul>
<li>1. Individuals not intimate with the initial event (including the public, facility occupants and emergency responders) are protected from injury or loss of life.</li>
<li>2. Risk of injury or death to persons intimate with the initial event is minimized.</li>
<li>3. Effective procedures are established for responding to fire events.</li>
<li>4. The reliance on manual field actions is minimized.</li>
<li>5. The reliance on the post-fire plans to repair or replace critical nuclear safety structures, systems and components (SSCs) is minimized (e.g., shutdown heat removal for reactors, ventilation and filtering of contaminated air).</li>
<li>6. The initiation of fires is prevented.</li>
<li>7. Initiating events can be detected and suppressed in a timely manner to limit damage.</li>
<li>8. The propagation and effects of fires are limited.</li>
<li>9. The spread of fires is confined.</li>
<li>10. Combustion by-products are effectively managed.</li>
<li>11. Hazardous substances are protected.</li>
<li>12. Alarm signals are communicated to all areas of the facility.</li>
<li>13. There are effective and reliable means in place for notifying occupants of an emergency and of the protective actions to be taken.</li>
<li>14. There are multiple, independent, safe and easily accessible egress paths from each area.</li>
<li>15. Egress routes and exits are effectively and reliably identified, kept free of obstructions and illuminated.</li>
<li>16. Access and egress routes are provided with adequate structural resistance to ensure stability during and after an event.</li>
<li>17. Exiting capacity is sufficient to accommodate the emergency movement of crowds.</li>
<li>18. Established tenability and human factors criteria are used to:
<ul className="list-bullet-none">
<li>a. protect persons from the fire and its by-products (e.g., combustion products, smoke and heat) during egress</li>
<li>b. protect persons inside areas of refuge during the event sequence</li>
<li>c. protect persons performing facility control and mitigation functions during or following the initiating event</li>
</ul>
</li>
<li>19. The supporting infrastructure (e.g., water, lighting and access) is adequate to enable performance of emergency response, facility control, mitigation and recovery actions during and after the initiating event.</li>
<li>20. Structural integrity is adequate to provide for occupant and emergency responder safety during and after the initiating event.</li>
<li>21. Appropriate measures are provided for drainage and containment of flammable and combustible liquids, combustible dust, hazardous substances, nuclear substances and radioactive material.</li>
<li>22. Flooding from fire suppression activities is prevented in areas that contain hazardous substances, nuclear substances or radioactive material.</li>
<li>23. Release of hazardous substances, nuclear substances and radioactive material from pressure-retaining SSCs is prevented, including release from over-pressure protection devices and high-low pressure system interfaces.</li>
<li>24. People are protected from the release or dispersion of hazardous substances, nuclear substances or radioactive material using established radiological, toxicological and human factors criteria.</li>
<li>25. Fire protection measures are balanced with prevention, early detection, and early suppression and confinement, without over-reliance on any single aspect of fire protection.</li>
</ul>
<h3 id="ann-A-2">A.2 Protection of the Environment</h3>
<p>Environmental protection is achieved when the release, dispersion and impact of hazardous substances, nuclear substances and radioactive material on the environment is minimized in accordance with the ALARA (as low as reasonably achievable) principle and the limits imposed by legal requirements. </p>
<p>The fire protection objective of protection of the environment is achieved when the following performance criteria are met: </p>
<ul>
<li>Release of hazardous substances, nuclear substances and radioactive material is prevented at the source.</li>
<li>Reliable means of detecting releases are provided.</li>
<li>Releases are controlled and their effects are mitigated.</li>
<li>Effective recovery from the effects of releases is provided.</li>
<li>Firefighting water is appropriately managed.</li>
</ul>
<h3 id="ann-A-3">A.3 Radiation Safety</h3>
<p>Nuclear substances or radioactive material safety is achieved when the following performance criteria are met:</p>
<ul>
<li>Exposure and dose is minimized.</li>
<li>Uncontrolled release and unacceptable dispersion of nuclear substances and radioactive material is prevented.</li>
<li>Detrimental effects due to fire or firefighting activities are mitigated.</li>
<li>Radioactive material is protected from:</li>
<li>the effects of fire</li>
<li>uncontrolled release or dispersion due to fire and firefighting activities</li>
<li>dispersion of material from storage containers or system boundaries</li>
<li>Nuclear substances can be quickly located and safely recovered.</li>
</ul>
<h3 id="ann-A-4">A.4 Nuclear Criticality Safety</h3>
<p>In a nuclear facility where an inadvertent criticality event is possible, nuclear criticality safety is achieved when the following criteria are met: </p>
<ul>
<li>The nuclear process or nuclear facility can be maintained in a safe, stable and controlled state.</li>
<li>Processes and parameters designated as criticality safety controls can be monitored and are readily available to operators.</li>
<li>Nuclear substance can be maintained in a sub-critical state.</li>
</ul>
<p>Note: Prevention of an inadvertent criticality is important not only in nuclear reactors but in any nuclear facility where an inadvertent criticality event is possible.</p>
<h3 id="ann-A-5">A.5 Reactor Safety</h3>
<p>Reactor safety is achieved when the following performance criteria are met: </p>
<ul>
<li>Nuclear fuel is maintained in a safe and stable condition.</li>
<li>Nuclear fuel (in-core or post irradiation) is provided with continuously sufficient coolant levels and decay heat removal such that fuel design limits are not exceeded.</li>
<li>Negative reactivity is readily available to be quickly inserted into the reactor core to achieve and maintain sub-critical conditions.</li>
<li>The necessary SSCs (e.g., compressed air, emergency power) are provided to ensure that the fundamental safety functions are available in all operating states at all times.</li>
<li>The rupture or spurious or inadvertent operation of fire suppression systems will not significantly impair the capability of SSCs important to safety or invalidate the assumption of single-failure criterion in the safety analysis.</li>
</ul>
<h3 id="ann-A-6">A.6 Additional Information</h3>
<p>Additional information regarding the above performance criteria may be found in REGDOC-2.5.2, <i>Design of Reactor Facilities: Nuclear Power Plants</i> <sup id="fnb18-ref"><a className="fn-lnk" href="#fnb18"><span className="wb-inv">Footnote </span>18</a></sup>   and REGDOC-2.4.3, <i>Nuclear Criticality Safety</i> <sup id="fnb19-ref"><a className="fn-lnk" href="#fnb19"><span className="wb-inv">Footnote </span>19</a></sup>  . </p>
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
<h2 id="ann-B">Appendix B: Levels of Defence in Depth</h2>
<p>Table 2 provides supplemental information to the guidance found in N293 and CSA N393. </p>
<p>The guidance provided summarizes the general levels of defence in depth and provides the means by which those levels are typically achieved with respect to fire protection at nuclear facilities. Barriers and levels of protection are developed, as appropriate to the given facility. </p>
<p><b>Table 2: </b><b>Levels of defence in depth</b></p>
<table className="table table-striped">
<thead>
<tr>
<th>Level</th>
<th>Objectives</th>
<th>Essential means</th>
</tr>
</thead>
<tr>
<td>1</td>
<td>Prevent fires</td>
<td><ul>
<li>Controlling and monitoring fire sources that could initiate fire</li>
<li> Controlling and monitoring fire load (combustibles, flammables, compressed gases) </li>
<li>Establishing fire protection program</li>
<li>Minimizing failures in fire protection structures, systems and components (SSCs) (managing and monitoring the fire protection system impairments)</li>
<li>Controlling fire protection activities (through engineering change control, work permits, analysis, etc.)</li>
</ul></td>
</tr>
<tr>
<td>2</td>
<td>Detect and respond to deviation from normal operation to prevent escalation of failures</td>
<td><ul>
<li>Provision of adequate fire detection and automatic fire suppression system</li>
<li>Appropriate inspection, testing and maintenance programs</li>
<li>Surveillance features</li>
<li>Operational and abnormal incident procedures</li>
<li>Adequate impairment procedures</li>
</ul></td>
</tr>
<tr>
<td>3</td>
<td>Minimize the consequences of fires</td>
<td><ul>
<li>Adequate fire barriers and fire separations to limit the spread of fire and its effects</li>
<li>Provision of physical separation of safety-related systems and their associated components is implemented in design provisions to correct or terminate abnormal situations</li>
<li>Robust design (fire protection SSCs are designed and installed in accordance with the applicable codes and standards</li>
<li>Implementation of FHA and FSSA recommendations to minimize the consequences of fire events</li>
</ul></td>
</tr>
<tr>
<td>4</td>
<td>Control severe plant conditions and mitigate the consequences of severe accidents</td>
<td><ul>
<li>Severe accident management provisions</li>
<li>Pre-incident planning and emergency action plan</li>
<li>Emergency procedures and emergency response capability</li>
<li>Plans and procedures to control fire event progression and mitigate the consequences of postulated fire scenarios and failure modes</li>
</ul></td>
</tr>
<tr>
<td>5</td>
<td>Mitigate radiological consequences of significant releases of radioactive material</td>
<td><ul>
<li>Adequate emergency control centre</li>
<li>Coordinated offsite emergency response</li>
<li>Plans for onsite and offsite emergency response to mitigate the radiological consequences of an event</li>
</ul></td>
</tr>
</table>
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
<h2 id="ann-C">Appendix C: Fire Modelling</h2>
<p>Fire modelling should be adequately documented in a fire modelling report. The objective of the fire modelling report is to ensure that there is adequate documentation to allow peer, third-party and regulatory review of the fire modelling development and its results, as well as to provide a written basis for any future uses of the fire modelling. The documentation process involves compiling a comprehensive fire modelling report. This includes plant drawings, schematics, and a description of the fire scenarios and relevant input tables used in the fire modelling analysis. Fire modelling is intended for use only by those competent in the field of fire protection and modelling, and is intended only to supplement the informed judgment of a qualified user. </p>
<p>The following is a recommended structure for documenting the fire modelling and its results. </p>
<h3 id="ann-C-1">C.1 Report Identification</h3>
<p>The fire modelling report should be clearly identified with the following information provided: </p>
<ul>
<li>title or project name</li>
<li>version or issue number of fire modelling tool</li>
<li>date</li>
<li>author</li>
<li>peer reviewer</li>
<li>acceptor</li>
<li>signatures and stamps</li>
</ul>
<h3 id="ann-C-2">C.2 Project Deadline</h3>
<p>A project description should be provided that clearly identifies the project, the scope and the project limitations. This gives the peer and regulatory reviewer a clear understanding of the project modelling and allows for future use or modification of the model. </p>
<h3 id="ann-C-3">C.3 Building Description</h3>
<p>A building description should be provided to clearly demonstrate how the fire modelling fits into the overall scope of the building and to ensure that the fire modelling is considered in a holistic sense. This may include:</p>
<ul>
<li>building occupancy and use</li>
<li>proximity to other buildings and hazards</li>
<li>proximity to fire service and fire service access</li>
<li>number and area of floors</li>
<li>construction type</li>
<li>openings in floors</li>
</ul>
<h3 id="ann-C-4">C.4 Analyst Qualifications</h3>
<p>The analyst&#39;s qualifications should demonstrate that the appropriate training, education and experience are commensurate with the complexity of the analysis. For complex projects, such as fire modelling to support a fire safe shutdown analysis, a diverse team may be required. In this case, the team lead and the team members&#39; qualifications should be identified. </p>
<h3 id="ann-C-5">C.5 Objective</h3>
<p>The first step in the analysis is to identify and state the modelling objectives. Clearly defining the objectives is essential when selecting fire scenarios, describing the scenario and selecting the appropriate model(s). It is important to provide specific objectives when describing the end result of a fire modelling analysis in engineering terms. </p>
<p>The fire modelling objectives should answer the following fundamental questions: </p>
<ul>
<li>Why is this being done?</li>
<li>What is being calculated?</li>
</ul>
<p>The fire modelling objectives should be stated in such a way that the results of the analysis can be effectively compared with the acceptance criteria (see subsection below) so that a decision can be reached. </p>
<h3 id="ann-C-6">C.6 Model Input Data</h3>
<p>The input data used in the calculations and simulations should be clearly documented. For example: </p>
<ul>
<li>compartment dimensions (e.g., width, depth and height)</li>
<li>wall thickness</li>
<li>construction materials</li>
<li>dimensions and positions of horizontal and vertical openings (e.g., doors, windows, openings between floor levels)</li>
<li>locations of fire safe shutdown cables or other targets (e.g., stored radioactive materials, glove boxes and processes)</li>
<li>fire protection systems</li>
<li>ventilation (e.g., natural, mechanical)</li>
<li>location of large fixed objects</li>
<li>proximity to other hazards</li>
<li>unusual features or processes</li>
</ul>
<h3 id="ann-C-7">C.7 Acceptance or Performance Criteria</h3>
<p>Although the acceptance criteria are dependent on the objective of the fire modelling, they should be clearly stated so that the appropriate decisions can be made and conclusions drawn. For example: </p>
<ul>
<li>if the objective were to determine whether a cable would be damaged given a certain fire size, the damage or failure criteria of the cable would be stated (usually expressed in terms of temperature or incident heat flux thresholds)</li>
<li>if a room were to remain tenable for a certain period of time (e.g., to allow safe egress or manual actions to be carried out), the acceptance criteria would be a hot gas layer height above a certain level and below a certain temperature</li>
</ul>
<h3 id="ann-C-8">C.8 Limitations</h3>
<p>All limitations such as unknowns and limitations set in the scope of the review should be clearly documented and, where applicable, an indication should be provided of how the limitations were overcome or that the limitation does not affect the final conclusions. </p>
<h3 id="ann-C-9">C.9 Fire Scenarios</h3>
<p>Fire scenarios should be clearly identified and defined. </p>
<p>The fire scenario should be developed in consideration of the fire modelling objective. For example, the scenario may be used to challenge a proposed design (e.g., the fire resistance rating of a structural member) or to confirm the acceptability of a storage location (e.g., the positioning of a storage laydown area adjacent to a fire safe shutdown area). Multiple fire scenarios are typically used to capture the variations in hazards, and to establish appropriate design and operational provisions. </p>
<p>The fire scenario should present credible worst case and other scenarios that could negatively impact the fire protection objectives. For example, if the tenability of a space to carry out credited manual actions is the acceptance criteria, a slow burning fire with insufficient heat to activate a sprinkler head may fail the performance criteria, whereas the performance criteria may be met for a larger hot fire with early notification and fire containment. </p>
<p>An analysis of fire loading and fire spread scenarios should be performed for each operational mode of the facility. For example, scenarios that occur during maintenance or shutdown of a nuclear facility may result in changes in combustible loading or ignition mechanisms, which lead to fire scenarios that are different from those that occur during normal operation, with potentially different consequences. </p>
<h3 id="ann-C-10">C.10 Fire Model Used</h3>
<p>The type of model(s) to be used (e.g., empirical, zone, field) should be stated, including a justification for applying the chosen model. The justification should include applicable verification and validation studies. </p>
<h3 id="ann-C-11">C.11 Fire Model Assumptions</h3>
<p>The assumptions that are necessary to run the fire model should be stated. The assumptions may include: </p>
<ul>
<li>geometry</li>
<li>fire size (constant heat release rate (HRR) or an HRR curve)</li>
<li>materials of walls, ceilings and floors, including their dimensions and material properties</li>
<li>target failure criteria (e.g., thermal properties, geometry)</li>
<li>ventilation (e.g., location, dimension, material, flow rate, cracks, number of vents)</li>
<li>detection devices</li>
<li>suppression systems</li>
<li>personnel movement and response</li>
<li>opening of doors</li>
<li>the time or temperature of windows breaking</li>
<li>interpretation or extrapolation of data</li>
</ul>
<h3 id="ann-C-12">C.12 Uncertainty</h3>
<p>Uncertainty is unavoidable in fire modelling, as fire models are simplifications or idealizations of physical phenomena. Uncertainty arises from two primary sources: </p>
<ul>
<li>model uncertainty, which results from attempting to model physical phenomena through numerical formulas based on simplifying assumptions</li>
<li>input uncertainty, which results from the assumptions made when choosing input parameters; the input parameters are generally based on available, generic data or on fire protection engineering judgment</li>
</ul>
<p>How the uncertainties in the model, the modelling input and the modelling output are dealt with should be identified. The detail of the uncertainty discussion should be in relation to the complexity of the modelled scenario, as well as to the potential hazards or negative consequences relating to the scenario. </p>
<h3 id="ann-C-13">C.13 Sensitivity</h3>
<p>A sensitivity analysis attempts to determine the change in model output values that results from modest changes in model input values. A model may be insensitive to an uncertain variable. Conversely, a variable to which a model is very sensitive may not be uncertain. It is important to have an understanding of the sensitivities of variables so that adequate redundancy and defence in depth is maintained without providing too great a reliance on a variable that may negatively impact the model output with small variations in performance. </p>
<h3 id="ann-C-14">C.14 Summary of Results</h3>
<p>A summary of the results from analysis should be provided using tables, graphs, drawings and model run snap shots. This information should be provided in a format that will make it easy for the peer and regulatory reviewer to confirm the acceptability of the output and conclusions. </p>
<h3 id="ann-C-15">C.15 Conclusion</h3>
<p>The conclusions reached from the analysis of the calculations or modelling against the acceptance criteria should be stated. Any additional procedures, process modifications, and any active or passive fire protection systems, structures or components to be installed to meet the acceptance criteria should be identified. Additional modelling may be needed to demonstrate that the acceptance criteria are met. Any specific maintenance requirements, especially where non-standard systems are used, should be identified. </p>
<h3 id="ann-C-16">C.16 References</h3>
<p>The references that act as a source of input for all the calculations and simulations should be listed. Reference to vendor-specific material cut sheet properties may also be included here. The references should be from recognized texts or papers in journals and conference proceedings that have been refereed. Unpublished materials, in-house reports or data collections
should not be included as references. </p>
<h3 id="ann-C-17">C.17 Appendices</h3>
<p>Any supporting material should be included as appendix
material. This could include: </p>
<ul>
<li>detailed
model inputs and hand calculations</li>
<li>drawings</li>
<li>graphs</li>
<li>vendor-specific cut sheets containing material properties used in calculations</li>
<li>material
safety data sheets</li>
<li>specific Underwriters
Laboratories of Canada (ULC) or other approved testing agency documentation</li>
</ul>
<h3 id="ann-C-18">C.18 Additional Information</h3>
<p>Additional information
may be found in the U.S. Nuclear
Regulatory Commission&#39;s NUREG-1934, <i>Nuclear Power Plant Fire Modeling
Application Guide</i> <sup id="fnb20-ref"><a className="fn-lnk" href="#fnb20"><span className="wb-inv">Footnote </span>20</a></sup>  . </p>
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
<h2 id="ann-D">Appendix D: Deviations From Fire Protection Codes and Standards</h2>
<p>Where codes and standards are required to be met
(e.g., under Part II of the <i>Canada Labour
Code,</i> national or provincial legislation, or when prescribed by CNSC-imposed
licence conditions), they should be incorporated into the facility&#39;s design and
operation. However, it is understood that deviations from the prescriptive
requirements of the codes and standards are sometimes inevitable. </p>
<p>Some examples of challenges that may lead to
deviations from codes and standards include the following: </p>
<ul>
<li>The requirements were not intended to apply to the specific occupancy or application.</li>
<li>Application is not possible due to the unique design or attributes of the facility, structure or operation.</li>
<li>Compliance is not possible due to overriding safety concerns related to the unique safety
requirements of the facility.</li>
<li>There are conflicting requirements imposed by the layered application of regulations, codes and standards.</li>
</ul>
<p>In addition to the above challenges, subsequent editions of a standard or code often contain improvements that reflect new
technology, industry operating experience or more explicit allowances for
performance-based approaches. </p>
<p>Deviations from code or standard requirements are
dealt with by means of performance-based approaches, equivalencies or
exceptions. Where there is a deviation, the proposed alternative should
demonstrate a level of safety that is at least equivalent to that provided by
the respective code or standard. This includes demonstrating that: </p>
<ul>
<li>the intent of the prescribed requirement is met</li>
<li>the intended functional and objective attributes of structures, systems and
components (SSCs) are retained</li>
<li>the
reliability of the system remains the same or better</li>
<li>the robustness of the SSCs, including
protection from failure due to common-cause effects, remains the same or better</li>
</ul>
<p>Performance-based designs, equivalencies and deviations
should be documented and accepted by the authority having jurisdiction (AHJ). </p>
<h3 id="ann-D-1">D.1 Performance-Based Approach</h3>
<p>The performance-based methodology focuses on achieving the intended objectives of prescriptive requirements through the application of qualitative engineering judgment. This approach is supported by quantitative methods using acceptable numerical techniques, probabilistic or fire models, and calculations to determine how specific facility performance criteria can be achieved. Any alternative solution should achieve at least the minimum level of performance required by an acceptable solution, as defined by its associated objectives and functional statements. </p>
<p>Direct comparison of functional attributes, reliability or robustness may not be possible. However, the licensee should be able to document what the performance objectives are, demonstrate that they are achieved through the design and indicate the inspection, testing and maintenance activities that will be required to ensure performance objectives will be maintained for the life of the facility.</p>
<h3 id="ann-D-2">D.2 Equivalencies</h3>
<p>The fire and life safety codes and standards permit employment of equivalencies to meet the intent of requirements. Equivalencies should be used when:</p>
<ul>
<li>the use of equivalent systems, methods or devices of equivalent or superior quality, strength, fire resistance, effectiveness, durability and safety is justified</li>
<li>new technologies or alternate arrangements will provide the level of safety associated with the respective code or standard without compromise</li>
</ul>
<p>Technical documentation that demonstrates equivalency is submitted to the AHJ for assessment. In many cases this equivalency will be demonstrated through fire modelling or fire testing.</p>
<h3 id="ann-D-3">D.3 Exceptions</h3>
<p>In rare cases, the AHJ grants exceptions to the prescriptive fire protection requirements. Such cases typically involve challenges that arise during application of codes or standards where safety may be compromised or the application is not suited to a given arrangement or occupancy. Exceptions are evaluated on a case-by-case basis and require documented justification.</p>
<h3 id="ann-D-4">D.4 Approval by the Authority Having Jurisdiction</h3>
<p>Performance-based designs, equivalencies and exceptions are required to be comprehensively documented to demonstrate how the intent of the code requirements is met. To ensure that the justification for the deviation from the code requirement is retained and that the design will continue to meet the intended design functional requirements for the life of the facility (including following future renovations), the documentation should be retained and documented in the code compliance review. </p>
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
<h2 id="ann-E">Appendix E: Operational Practices</h2>
<p>The fire protection program (FPP) should include procedures and processes for overseeing work activities and responding to degradations in the level of fire protection or prevention.</p>
<p>Procedures and processes should be regularly reviewed by appropriate facility personnel to assess and ensure compliance with fire protection and prevention measures.</p>
<h3 id="ann-E-1">E.1 Control of Radioactive Material and Nuclear Substances</h3>
<p>Under certain conditions, a fire event may lead to a situation in which it is difficult to prevent the release or dispersion of small quantities of radioactive material or nuclear substances. It is expected that the FPP will include additional direction and provisions to ensure that these materials are adequately protected and separated from combustible materials.</p>
<h3 id="ann-E-2">E.2 Control of Hazardous Substances</h3>
<p>The FPP should identify the design, control and administrative needs for the storage, handling and use of hazardous substances in a manner that provides optimal minimization of fire risk. This should include provisions to minimize substance quantity, protect substances from fire and avoid any reactions due to substance incompatibility.</p>
<h3 id="ann-E-3">E.3 Control of Compressed Gases, Flammable Liquids and Combustible Liquids</h3>
<p>The FPP should define the parameters associated with the control of compressed gases, flammable liquids and combustible liquids, including: </p>
<ul>
<li>handling, use and storage in a manner that complies with applicable codes and standards</li>
<li>adequate capacity, appropriate location and adequate fire protection features for storage and laydown areas</li>
<li>limitations for quantities located outside of appropriately designed storage rooms and those required for immediate use</li>
<li>assessment of the potential for dispersion or migration of the substances, and the associated consequences</li>
</ul>
<h3 id="ann-E-4">E.4 Control of Combustibles</h3>
<p>The FPP should define the provisions for management and minimization of combustible material. Procedures for controlling combustible material should include measures to: </p>
<ul>
<li>prohibit or minimize the use of combustible building materials or equipment through the use of engineering change control practices to ensure that non-combustible materials, limited combustible materials, or fire-retardant-treated alternatives are used for modifications to equipment or buildings</li>
<li>control delivery, storage, handling, transport and use of flammable and combustible solids, liquids and gases</li>
<li>establish a procedure to eliminate unnecessary packaging material through purchasing agreements or control of deliveries to the site, and to minimize the quantity of combustible packaging material from entering the operational areas of the facility</li>
<li>control fire hazards that may impact safety-related structures, systems and components (SSCs), obstructions to emergency access and egress and security activities</li>
<li>restrict the amount of flammable or combustible solids, liquids and gases to the amount needed for normal plant operation and during maintenance or modification activities, and store all spare combustibles in designated or protected storage areas commensurate with the respective hazards</li>
<li>control transient combustibles so they do not pose a hazard beyond the capabilities of existing fire protection measures</li>
<li>use additional passive or active fire protection systems that have adequate design capacity and are appropriately located in areas of significant risk where combustible material cannot be minimized</li>
<li>ensure flammable gas cylinders are stored in a dedicated area located outside the main storage building such that a fire affecting the main storage area will not compromise safety</li>
<li>maintain flammable liquid storage cabinets where it is necessary to store small amounts of flammable or combustible liquids, and display clear and prominent labelling to
indicate the contents of all containers of flammable or combustible liquids</li>
<li>design, operate and
maintain systems that contain combustible material in a manner that minimizes
leakage or release of their contents under all normal, anticipated operational
occurrences and design-basis accident conditions</li>
<li>provide for the
retention of releases though diversion to or retention in secondary containment</li>
</ul>
<h3 id="ann-E-5">E.5 Management of Transient Material and Housekeeping</h3>
<p> The FPP should
include procedures for the control of transient material. Improper placement of
combustible material and equipment is a nuclear safety concern. Transient
material may include combustible material (e.g., wood, plastic, rubber, fibrous
material, combustible or flammable liquids, and combustible radioactive and/or
contaminated combustible materials), as well as non-combustible material (e.g.,
equipment or supplies, temporary structures). As transient combustible
materials are not part of the permanent design of the facility, the fire
protection features and safety-related systems were not designed to mitigate
the impact of fire events involving these materials or structures. As a result,
administrative requirements should be provided to ensure placement is properly
assessed, analyzed and authorized before being implemented in the field. </p>
<p>Control of transient material should be administered
in the form of a permit or other documentation that accompanies the material
until it is removed from the facility. Permits should include: </p>
<ul>
<li>a description
of the material</li>
<li>the permit
initiation and removal date</li>
<li>the specific
intended location</li>
<li>the
responsible person</li>
<li>any
specific compensatory requirements</li>
</ul>
<p>Procedures should indicate how temporary storage areas
are assessed and include any requirements for compensatory measures. Approved
locations for transient materials should be based on an evaluation of the FHA, fire
safe shutdown analysis or the site review for the facility, location of nearby
plant equipment and safety-related SSCs, and the presence and proximity of
fixed fire protection equipment. </p>
<p>Combustible transient material presents an obvious
fuel load and potential fire hazard. However, both combustible and
non-combustible transient material should be minimized, as they present
potential obstructions to emergency access, egress and firefighting operations. </p>
<p>The fire prevention section of the FPP should include
a description of the general housekeeping practices associated with the
implementation of the program. These practices should include periodic
housekeeping inspections to ensure continued alignment with administrative
controls. </p>
<h3 id="ann-E-6">E.6 Control of Ignition Source</h3>
<p>The FPP should include appropriate measures for
controlling all ignition sources. Electrical equipment (permanent and
temporary), hot-work activities (e.g., open flame, welding, cutting and
grinding), high-temperature equipment and surfaces, heating equipment
(permanent and temporary installation), reactive chemicals, static electricity
and smoking are all potential ignition sources. </p>
<p>The effectiveness of ignition source control measures
is dependent on many factors, including engineering design practices, to ensure
that: </p>
<ul>
<li>electrical equipment is
properly designed and installed in accordance with industry standards</li>
<li>heat-generating equipment or
equipment with hot surfaces is properly cooled or separated from combustible
materials</li>
<li>systems containing flammable
and combustible liquids or gases are properly designed and located to minimize
the exposure of these materials to ignition sources</li>
</ul>
<p>Work involving ignition sources such as welding and
flame cutting should be carried out under closely controlled conditions.
Persons performing such work should be trained and equipped to prevent and
combat fires. In addition, a person qualified to perform hot-work fire watch
duties should directly monitor the work and function as a fire watch. </p>
<p>The use of ignition sources should be governed by a
hot-work permit system to control open flames, welding, cutting and other hot
work. A separate permit should be issued for each area where work is to be
done. </p>
<p>Facility administrative controls should provide for an
engineering review of temporary electrical installations and temporary heating
devices. These reviews should ensure that appropriate precautions, limitations
and maintenance practices are established for the term of such installations,
and should ensure that temporary heating devices are properly installed
according to the listing, including required separations from combustible
materials and surfaces. </p>
<h3 id="ann-E-7">E.7 Additional Information</h3>
<p>Additional information may be found in CSA standard
W117.2, <i>Safety in welding, cutting and allied
processes</i> <sup id="fnb21-ref"><a className="fn-lnk" href="#fnb21"><span className="wb-inv">Footnote </span>21</a></sup>  . </p>
<h3 id="ann-E-8">E.8 Fire Watch</h3>
<p>The FPP should include procedures and training for
fire watch. Fire watch should be performed as a compensatory measure where the
level of fire risk at a facility is increased due to non-standard conditions.
Situations that may require a fire watch when fire protection SSCs are impaired
(i.e., out of service) or fire hazards are increased (e.g., welding). </p>
<p>Specific fire watch training should provide
appropriate instruction on fire watch duties, responsibilities and required
actions for the different types of fire watches, such as continuous hot-work
fire watches and hourly fire watches. Fire watch qualifications should include
hands-on training on a practice fire with the extinguishing equipment to be
used while on fire watch, if applicable. </p>
<p>A log or documentation system is used to provide a
record that ensures compliance with fire watch. </p>
<p>Fire watches for welding, cutting, grinding, or open
flame activity are to be performed according to hot-work procedures. </p>
<h3 id="ann-E-9">E.9 Access to Restricted Areas</h3>
<p>The FPP should identify the procedures for accessing
restricted areas such as confined spaces, security protected areas and areas of
high radiation fields during emergency response. This should be coordinated
with the facility&#39;s pre-fire plans. </p>
<h3 id="ann-E-10">E.10 Operation of Fire Protection Equipment</h3>
<p>Procedures relating to the operation of fire
protection equipment should be established for all activities in which interaction
of personnel is required to perform tasks such as: </p>
<ul>
<li>manual
activation of a fixed fire suppression system</li>
<li>any other
tasks that involve manual use of equipment associated with the FPP closing of
valves on piping that conveys flammable liquids or gases</li>
<li>activation
of ventilation systems</li>
<li>shutdown of
equipment that may interfere with emergency response activities or add to a
fire hazard</li>
<li>any
other tasks that involve manual use of equipment associated with the FPP</li>
</ul>
<p>The procedures for using the fire protection equipment
should include information on applicable training and drill requirements. </p>
<h3 id="ann-E-11">E.11 Fire Prevention Oversight and Surveillance</h3>
<p>Procedures for surveillance and oversight of the
operational requirements associated with the FPP should be established to
facilitate program enforcement. Surveillance activities should include periodic
tours through the facility by designated persons to verify such program
features, including: </p>
<ul>
<li>integrity
and control of fire separations</li>
<li>control of
transient materials</li>
<li>general
housekeeping</li>
<li>access to
fire equipment</li>
<li>egress
paths and exits</li>
<li>control
ignition sources</li>
<li>any
other applicable facet of facility operations</li>
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
<div id="AppF"></div>
<h2 id="ann-F">Appendix F: Facility Design and Construction</h2>
<p>Design and construction of nuclear facilities is
subject to the fire and life safety codes and standards referenced in the
facility&#39;s licensing basis. The fire and life safety codes present the minimum
acceptable level of fire safety. Due to the unique construction requirements of
some areas of nuclear facilities, full compliance with standard requirements
may not be possible. Therefore, performance-based approaches, alternative
measures or equivalent measures may need to be considered in order to achieve
the safety objectives for fire protection. For further information on the CNSC&#39;s
regulatory approach, please see REGDOC-3.5.3, <i>Regulatory Fundamentals.</i></p>
<h3 id="ann-F-1">F.1 Considerations Specific to Nuclear Facilities</h3>
<p>Design and construction considerations that are unique
to nuclear facilities include: </p>
<ul>
<li>provisions
to support compliance with radiation protection requirements</li>
<li>protection
of hazardous materials, nuclear substances and radioactive material from the
effects of fire</li>
<li>prevention
of radioactive material dispersion by fire or firefighting activities</li>
<li>protection
of persons and structures, systems and components (SSCs) from the effects and
by-products of combustion</li>
<li>resistance
to aging degradation mechanisms and potentially harsh environmental operating
conditions</li>
</ul>
<p>In cases where the provisions of fire and life safety
codes and standards are inadequate to address the unique safety considerations
of the facility, criteria may need to be established to determine the
tenability of the local environment and the acceptability of consequences. </p>
<p>Tenability criteria may be used to evaluate the
adequacy of design measures and to determine design features that can mitigate
risk and enhance the safety of individuals remaining in the environment. For
example, tenability criteria for a facility where essential personnel will need
to remain in place to perform their tasks during a fire may lead to the
implementation of such design features as early warning detection, smoke
extraction and fire suppression systems. Tenability criteria and associated
analyses are required to contain sufficient conservatism and safety factors to
account for uncertainty and errors in knowledge and analysis tools. </p>
<p>In some situations, the design, material selection,
construction and maintenance of SSCs related to fire protection requires
additional consideration beyond the minimum requirements mandated by fire
protection standards to ensure they are reliable and suitably robust to meet
the needs related to their mission, operating conditions and anticipated
operational period. </p>
<p>Fire protection SSCs may need to operate in harsh
environments (e.g., vibration, extreme temperatures, radiation fields and
humidity). In addition, as fire protection systems are prerequisites for
occupancy or operation, they are normally one of the first in-service systems
installed and one of the last to be removed prior to demolition. The design
therefore considers the lifecycle of these SSCs, including maintenance
requirements and provisions for replacement or overhaul. </p>
<h3 id="ann-F-2">F.2 Design Basis</h3>
<p>The fire protection provisions established by the fire
protection program should be incorporated into the design basis for the nuclear
facility. The design basis should take into account both internal and external
events, features, hazards and risks. </p>
<h3 id="ann-F-3">F.3 Building Design and Layout</h3>
<p>The nuclear facility and the SSCs integral to its
operation should be designed, located and constructed to accommodate all
operating states, configurations and exposures in a manner that meets all
safety objectives. </p>
<p>Some design considerations that are specific fire
protection needs of nuclear facilities include: </p>
<ul>
<li>non-combustible
construction for all buildings and structures</li>
<li>non-combustible
or fire-retardant and heat-resistant material</li>
<li>pressure-retaining
components of fire suppression systems that are designed in accordance with the
licensing basis for pressure-retaining equipment</li>
<li>lightning
protection in accordance with applicable standards</li>
</ul>
<p>Nuclear facility design and construction should also
include special consideration of: </p>
<ul>
<li>fire
separation and barriers</li>
<li>local heat
shields</li>
<li>control of
combustible material</li>
<li>spill
control</li>
<li>protection
of SSCs and hazardous substances from fire hazards</li>
<li>bulk
storage of dangerous goods</li>
<li>seismic
qualification</li>
<li>voice
communication systems</li>
<li>emergency
lighting</li>
<li>egress and
exiting</li>
<li>areas
of refuge</li>
</ul>
<h3 id="ann-F-4">F.4 Fire Separations and Barriers</h3>
<p>Fire separations should be used to ensure that: </p>
<ul>
<li>building
elements maintain structural stability and load-bearing capacity</li>
<li>the spread
of fire is prevented</li>
<li>safe
egress paths and rescue routes are maintained</li>
<li>barriers
to ensure the protection of persons and the environment are in place</li>
<li>safety-related
systems are not located near a fire hazard without an adequate fire barrier or
spatial separation</li>
<li>SSCs
important to safety are separated by barriers with a designated fire resistance
rating suited to the hazards associated with fire, explosion and projectiles</li>
<li>fire
separations used to protect essential staff, nuclear safety components,
hazardous substances, nuclear substances or radioactive material, closures,
penetration seals and fire stops have a fire resistance rating at least equal
to the fire separation rating</li>
</ul>
<p>The following
three separation strategies should be employed for fire protection: </p>
<ul>
<li>physical
barriers designed to accommodate exposures to fire and explosion</li>
<li>spatial
separation</li>
<li>a
combination of the above two strategies</li>
</ul>
<h3 id="ann-F-5">F.5 Local Heat Shields</h3>
<p>In some situations, separation by a continuous fire
barrier is either impractical or impossible due to the location and relative
spacing of targets and fire hazards. In these situations, a local heat shield
should be used to prevent the exposure of a specific target. The design of each
heat shield is unique to the given hazard, and therefore needs an engineered
solution based upon performance criteria as stated in section&nbsp;4. </p>
<p>Local heat shields should be installed to attenuate a
radiant heat flux exposure. If applicable, upper hot gas layer formations
should be considered in terms of both a radiator and an immersion in a fire
plume, ceiling jet or hot gas layer. </p>
<p>If the target is suspended from supports from a
ceiling or at high elevation, the supports should be assessed to ensure they
will not fail in response to critical heat flux or critical temperature. </p>
<p>Radiant and convective fluxes, including the
contribution from the upper hot gas layer, should be considered. </p>
<h3 id="ann-F-6">F.6 Control of Combustible Material (Solids, Liquids and Gases)</h3>
<p>Where present, combustible solid material should be
minimized and protected from ignition. The potential consequences of fires
involving the combustible material should be assessed. </p>
<p>SSCs that generate or could potentially release
combustible liquids or gases &#8210; either during normal operation or under
other conditions such as anticipated operational occurrences (AOOs) or design-based
accidents &#8210; should be designed and operated in a manner that will prevent
fires. This goal can be met by: </p>
<ul>
<li>venting</li>
<li>dilution</li>
<li>confinement</li>
<li>controlled
combustion</li>
<li>recombination</li>
</ul>
<p>Systems containing combustible liquids or gases typically take the following
aspects into consideration: </p>
<ul>
<li>Compressed
gas cylinders are located apart from safety-related SSCs in order to prevent
damage from fires, explosions or missiles.</li>
<li>Where piping
or tubing is routed through fire compartments containing fire safe shutdown
systems, the piping or tubing is seismically qualified.</li>
<li>Systems containing
combustible lubrication oils and hydraulic oils are designed to minimize
leakage.</li>
<li>In locations
where leakage could jeopardize safety-related SSCs, the design provides devices
to collect, divert and safely contain leakages from pressurized and
non-pressurized components in order to prevent the ignition of the substance or
limit the size and consequence of fire.</li>
<li>Systems that
produce hydrogen or deuterium gas during normal operation or AOOs are designed
to prevent the creation of an ignitable mixture &#8210; this can be achieved
using venting, dilution, controlled combustion or recombination.</li>
<li>Hydrogen
control failures will set off an alarm in the main control room, initiating
operator action.</li>
</ul>
<h3 id="ann-F-7">F.7 Spill Control</h3>
<p>The design includes measures for control and containment
of liquids released by a spill, by fire, or as a result of firefighting
activities. These control measures apply to flammable and combustible liquids,
and to areas that may contain hazardous substances, nuclear substances or
radioactive material. </p>
<p>Control and containment of liquids includes drainage
directly to safe areas and, where applicable, containment to prevent flooding
of equipment and endangerment to surrounding areas. </p>
<p>Spill control is typically accomplished by a
combination of multiple design features, such as: </p>
<ul>
<li>floor
drains</li>
<li>floor
trenches</li>
<li>open
doorways or other wall openings</li>
<li>curbs for
containing or directing drainage</li>
<li>equipment
pedestals</li>
<li>pits, sumps and sump pumps</li>
</ul>
<p>Drainage, drainage facilities and containment measures
for a given area are sized to accommodate the potential volume of liquid
produced within that area, as determined by an area-specific fire hazards
assessment (see subsection 6.5.2). </p>
<p>Floor drainage from areas containing flammable or
combustible liquids should be trapped to prevent the spread of burning liquids
beyond the fire area. </p>
<p>Where gaseous fire suppression systems are installed,
floor drains should be provided with adequate seals or the fire suppression
system should be sized to compensate for the loss of fire suppression agent
through the drains. </p>
<p>For systems located outside of the facility that
contain liquefied gases, flammable or combustible liquids such as oil-insulated
transformers, the ground should be sloped such that liquid spills flow away
from adjacent SSCs. Curbing areas or pits should be provided around outside
systems to contain both flammable or combustible liquids and fire suppression
agents. </p>
<h3 id="ann-F-8">F.8 Protection of SSCs and Hazardous Substances From Fire Hazards</h3>
<p>External installations, such as flammable liquid or
gas storage facilities, should be evaluated and appropriate protective measures
taken to protect structures containing radioactive material or structures,
systems and components (SSCs) that are important to safety from fire exposure.
Areas such as shops, warehouses, auxiliary boiler rooms, fuel oil tanks, and
flammable and combustible liquid storage tanks should be located and protected
such that a fire or effects of a fire, including smoke, will not adversely
affect any systems or equipment important to safety. </p>
<p>In geographic areas where there is a potential for
damage from wildfires, the risk potential from wildfire should be evaluated for
structures that contain radioactive material or SSCs important to safety.
Appropriate measures should be taken. </p>
<p>The bulk storage
of dangerous goods should incorporate the following design provisions: </p>
<ul>
<li>location
in cut-off rooms or outdoors in detached storage buildings</li>
<li>location
to limit exposures that can affect nuclear safety</li>
<li>separation
from other buildings in accordance with applicable codes and standards</li>
<li>protection
using fire separations or spatial separation from:
<ul>
<li>outdoor transformers</li>
<li>building egress paths</li>
<li>fire department vehicle access routes</li>
<li>ventilation intake openings</li>
<li>storage warehouses</li>
<li>buildings of combustible construction</li>
<li>water supplies for fire protection</li>
<li>isolation valves that control processes or fire
protection systems</li>
<li>sewage drains</li>
</ul>
</li>
</ul>
<h3 id="ann-F-9">F.9 Seismic Qualification</h3>
<p>The design of the nuclear facility should include
provisions for prevention, suppression or containment such that SSCs will
remain available to meet the fire protection objectives of section 4. These
provisions should take into account the potential failure of SSCs that are not
qualified to withstand earthquakes. </p>
<p>Where the direct or consequential failure of fire
protection systems or fire separations can lead to the failure of SSCs that are
required to function after an earthquake, those systems and separations should
be built to seismically qualified designs. </p>
<p>For fire protection systems that are required to
function after an earthquake, the SSC design and layout should provide that the
services needed to support those systems (e.g., power, water, and compressed
air) are qualified to remain functional following the event. </p>
<h3 id="ann-F-10">F.10 Voice Communication Systems</h3>
<p>Emergency notification for occupants and emergency
responders within the facility should be performed by way of a fire alarm or
other paging system. Voice communication systems should meet Underwriters
Laboratories of Canada&#39;s CAN/ULC Standard S-524, <i>Installation of Fire Alarm Systems </i><sup id="fnb22-ref"><a className="fn-lnk" href="#fnb22"><span className="wb-inv">Footnote </span>22</a></sup>  <i>. </i></p>
<h3 id="ann-F-11">F.11 Emergency Lighting</h3>
<p>Emergency lighting is used in scenarios, including fire-initiated
events that cause the total or partial loss of electrical lighting systems. A
distributed system is commonly employed to limit the potential for common mode
failures. The design of the lighting system should take into account the
duration of the scenario and the intervention time frames associated with the
response. This includes performance of manual field actions that may require
lighting durations in excess of those prescribed in the building and fire codes. </p>
<p>Emergency lighting should be designed and maintained
to be available on demand to assist emergency responders and occupants, and for
the anticipated duration of the event. </p>
<p>The design should include consideration of the
following provisions: </p>
<ul>
<li>emergency
lighting to support fire suppression actions, safe shutdown operations and emergency
egress during a fire</li>
<li>emergency lighting systems that
operate automatically upon loss of power to lighting circuits</li>
<li>emergency lighting units that
are sized to provide illumination of egress and access routes to areas
containing safe shutdown equipment until all required operator actions are
completed, or until normal facility lighting is established</li>
<li>illumination of the floors of
egress paths, exits and areas where manual field actions are performed to
values of not less than 10 lux measured at the floor</li>
<li>arrangement of illumination
such that the failure of any single lighting unit, such as the burning out of a
single light bulb, will not leave any area in darkness</li>
<li>a
distribution system for emergency lights powered from a central battery or
batteries that contain such protective devices that a fire in one area will not
cause a loss of emergency lighting in any unaffected area</li>
</ul>
<h3 id="ann-F-12">F.12 Egress and Exiting</h3>
<p>The fire and life safety codes and standards
referenced in the nuclear facility&#39;s licensing basis establish the basic egress
and exiting requirements, and are applicable to all facilities. </p>
<p>Egress and exiting provisions for the facility should
be designed and maintained in a manner that interfaces appropriately with
provisions for: </p>
<ul>
<li>emergency response</li>
<li>security</li>
<li>radiation protection</li>
<li>control of hazardous releases</li>
<li>environmental
qualification</li>
</ul>
<h3 id="ann-F-13">F.13 Areas of Refuge</h3>
<p>Due to the nature of the hazards associated with a
nuclear facility, evacuation of all facility occupants may not be desirable.
Sheltering, either in place or at designated areas of refuge, is one possible
strategy to meet the objectives of section 4 during an event. </p>
<p>The facility design should provide areas of refuge
that ensure tenable environments where facility occupants can remain safely in
place, protected from the environment during and following an event. </p>
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
<h2 id="ann-G">Appendix G: Third-Party Review Report</h2>
<p>In general, the
independent third-party review (TPR) is used to evaluate various aspects of the
fire protection program elements such as new design, modification with the
potential to impact protection from fire, drill, inspection, testing and maintenance
activities, review of general facility conditions, or fire protection audit.
The intent of requiring independent TPRs is to provide another layer of
independent verification to ensure that the requirements of the applicable
codes and standards are met. The TPR results
should be provided to the CNSC for review to ensure that the requirements of
the NSCA and supporting regulations, as well as CNSC staff&#39;s expectations, are
met. </p>
<h3 id="ann-G-1">G.1 Expectation for the Third-Party Report</h3>
<p>The results of the TPR will typically consist of a
report that compares the requirements of the applicable codes and standards. </p>
<p>The report should identify any non-compliance and
formulate a conclusion if the licensee&#39;s proposed modification, drill or
implementation of the fire protection program meets the requirements of the
codes and standards referenced in the facility&#39;s licence condition handbook.
The format of the submission is not specified and can be tailored to the
facility. However, as a guideline, the following suggestions for the content
and format of the written report are provided: </p>
<ul>
<li>name, address and phone number of the preparing agency or organization</li>
<li>names of review team members, including brief descriptions of their experience and education</li>
<li>name, address and phone number of licensee</li>
<li>title of report, name of project, project number(s), date and document number</li>
<li>introduction briefly describing the area of interest audited</li>
<li>statement of review scope specifically listing any exclusions</li>
<li>objectives of the review</li>
<li>a list of applicable codes and
standards</li>
<li>summary of the review
methodology, including areas and documents reviewed</li>
<li>observations in relation to
code or standard requirements against (new design, modification, drill or fire
protection program implementation)</li>
<li>conclusions, including a
statement that meets the requirements of the applicable codes and standards, meets
good engineering practices and achieves the fire protection objectives</li>
<li>a summary of non-compliances</li>
<li>recommendations (if any)</li>
<li>issues tracking table</li>
</ul>
<h3 id="ann-G-2">G.2 Expectation of Facility or Plant Conditions Assessment</h3>
<p>Sufficient depth referenced in section 6.9.2 refers to
inspection and documentation of the plant or facility condition addressing, but
not limited to, the following elements: </p>
<ul>
<li>building and occupant safety: fire separation, fire
hazards, firefighting requirements, means of egress, emergency planning</li>
<li>indoor and outdoor storage</li>
<li>flammable and combustible liquids</li>
<li>hazardous process and operations, including hot
work</li>
<li>fire protection equipment: portable fire
extinguishers, fire detection, alarm and voice communication system,
water-based fire protection systems, special fire protection systems, emergency
power systems, emergency lighting and exit signs</li>
</ul>
<p>Refer to the CSA N293 or CSA N393 and applicable licence
conditions handbook for requirements concerning frequency of this inspection. </p>
<h3 id="ann-G-3">G.3 Independent Third-Party Reviewer Qualifications</h3>
<p>An independent third-party reviewer should be an
expert in their discipline and qualified through specific education and direct
industry experience as described in the <i>National
Building Code of Canada</i> and <i>National
Fire Code of Canada</i>. The specific qualifications required of an independent
TPR are highly dependent on the nature and complexity of the modification, fire
safety systems, audits and facility. Some TPRs should have a multi-disciplinary
team approach to accommodate the degree of specialization required in a number
of fields (e.g., knowledge of licence condition imposed codes and standards,
automatic fire protection systems, manual firefighting, storage and use of
hazardous materials, and process analysis). The third-party reviewer should be
independent or at arm&#39;s length from the management of the facility and the
design authority to ensure total impartiality. </p>
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
<h2 id="ann-H">Appendix H: Impairments</h2>
<p>Fire protection structures, systems
and components (SSCs) ensure that the health and safety of persons and the
environment is maintained during fire events. When planning impairments for
testing purposes, it is imperative that the following factors are taken into
consideration: </p>
<ul>
<li>egress and emergency access
routes</li>
<li>fire detection and alarm systems</li>
<li>automatic or manual suppression
systems (e.g., water, gaseous and foam fire suppression systems and their
associated effluent discharge mechanisms, valves, power supplies and alarm
devices)</li>
<li>fire water supply systems
(e.g., delivery systems, system valves, fire pumps, all associated power or
fuel supplies, and alarms)</li>
<li>emergency lighting provided for
occupant safety and to support operator manual actions required for safe
shutdown of processes</li>
<li>public address system and
associated devices</li>
<li>fire barrier systems (e.g.,
fire doors, fire dampers, fire rated assemblies, fire retardant coatings,
barrier penetration seals)</li>
<li>hazard mitigation SSCs or
features such as dikes for spill control or containment</li>
<li>emergency response SSCs (i.e.,
firefighting equipment) and provisions</li>
<li>issues tracking table</li>
</ul>
<h3 id="ann-H-1">H.1 Planned Impairments</h3>
<p>Before authorization is given to impair a fire
protection SSC, the following steps should be implemented: </p>
<ul>
<li>The person or persons
responsible for the oversight and coordination of the impairment and the subsequent
reinstatement of the system or feature are assigned.</li>
<li>The extent and expected
duration of the impairment is determined.</li>
<li>The areas or buildings involved
are inspected and the increase in risks is determined.</li>
<li>Compensatory measures are
established and implemented.</li>
<li>Means to reduce the extent and
duration of the impairment are considered.</li>
<li>The fire department, industrial
fire brigade and other emergency responders are notified.</li>
<li>The alarm monitoring company,
property owner or designated representative and other authorities having
jurisdiction are notified.</li>
<li>The supervisors in the areas to
be affected are notified.</li>
<li>Impaired SSCs are identified in
the field (e.g., tag system).</li>
<li>All necessary tools and
materials are assembled on the impairment site prior to work beginning.</li>
</ul>
<h3 id="ann-H-2">H.2 Notification</h3>
<p>Parties affected by the impairment of a fire
protection SSC should be made aware of the impairment, the compensatory measure
and any changes to their response to an emergency. Affected or interested
parties may include: </p>
<ul>
<li>building occupants, including
building workers and any persons visiting or working temporarily in the
building</li>
<li>building management or their
designated authorities</li>
<li>alarm monitoring companies</li>
<li>emergency responders, including
industrial fire brigades (where applicable) and fire departments</li>
<li>other authorities having
jurisdiction</li>
</ul>
<p>Where notification of a planned impairment is
provided, it should be done in a timely manner to allow feedback or
implementation of additional actions. </p>
<p>The requirement to notify the CNSC of impairments is
detailed in the applicable CSA nuclear standard (CSA N293 or CSA N393) and is
normally limited to situations in which a credited SSC is unable to achieve its
design intent due to an unplanned impairment.</p>
<h3 id="ann-H-3">H.3 Unplanned Impairments</h3>
<p>Preplanning of impairments and potential compensatory
measures should be carried out for key fire protection SSCs where the risk of
an impaired fire protection SSC may pose an unacceptable risk to persons and
the environment. The preplanning should take into account likely impairment
scenarios. </p>
<p>To the extent feasible, compensatory measures for
unplanned impairments should be comparable to the measures expected for a
planned impairment. </p>
<h3 id="ann-H-4">H.4 Restoring Systems to Service</h3>
<p>At the completion of the impairment, the following
steps should be carried out to verify that all impaired equipment is restored
to normal working order: </p>
<ul>
<li>Any necessary inspections and
tests have been conducted to verify that affected systems are operational.</li>
<li>Supervisors have been informed that
protection has been restored.</li>
<li>The fire department has been informed
that protection has been restored.</li>
<li>The property owner or
designated representative and other authorities having jurisdiction have been informed
that protection has been restored.</li>
<li>The impairment tag has been
removed.</li>
</ul>
<h3 id="ann-H-5">H.5 Documentation</h3>
<p>Procedures for planned and unplanned impairments of
fire protection SSCs should be included in the facility&#39;s fire protection
program. The procedures should include sufficient information to ensure and
demonstrate that expectations have been met. </p>
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
<h2 id="ann-I">Appendix I: Fire Response</h2>
<p>The effectiveness of the facility&#39;s fire response
organization is directly related to the adequacy of the firefighting resources
and the respective training programs, combined with a comprehensive
understanding of the hazards as defined in the fire hazard assessment (FHA) and
safety analyses, the standard operating guidelines, the pre-incident plan and
the emergency action plan. </p>
<p>A number of factors can potentially have an impact on
fire suppression activities. While these factors may contribute differently to
response effectiveness, they are all interrelated and include: </p>
<ul>
<li>quality of the firefighting
resources (e.g., human resources, firefighting equipment and apparatus)</li>
<li>responder knowledge, skill
level and performance</li>
<li>responder understanding of the
magnitude of the fire risk</li>
<li>ability to achieve intervention times, including detection, reporting, alarm processing and dispatching, response time and setup, as detailed in the fire brigade&#39;s organizational statement, and in the applicable codes, standards and operating guidelines, or
credited in supporting analysis</li>
<li>effectiveness of operation command and control</li>
<li>completeness of standard operating guidelines, including pre-incident plan and emergency action plan</li>
<li>responder safety</li>
<li>establishment of water supplies</li>
</ul>
<h2 id="ann-I-1">I.1 Planning for Firefighting at Nuclear Facilities</h2>
<p>Planning is a critical step in fire protection
management and is part of the risk management process. Effective planning and
clear understanding of risk is fundamental to the development and structuring
of effective emergency response provisions. </p>
<p>The actions required by emergency responders and/or
facility operators to respond to, mitigate, terminate and recover from
emergencies should be appropriately documented and coordinated with the facility&#39;s
pre-fire plans and incident action plans. </p>
<h3 id="ann-I-2">I.2 Identifying the Risks</h3>
<p>Effective emergency response planning depends on
identifying fire risks, and understanding the nature and extent of the risk in
relation to fuel load, heat release rate and the consequences of failure of structures,
systems and components. </p>
<p>In most cases, the required emergency response
provisions are directly related to the risks for a given facility. </p>
<h3 id="ann-I-3">I.3 Pre-fire Planning</h3>
<p>The fire protection program (FPP) should establish the
planning parameters and identify the positions within the organization that are
accountable for maintaining the FPP. </p>
<p>The fire response organization for the facility should
evaluate the construction and operational features of the facility with respect
to fire protection. With the assistance of operational and managerial staff, emergency
responders should develop pre-incident plans. </p>
<p>The primary objective of pre-incident planning is to
assist in effective response to fires at the facility, including the
termination and recovery from fires. </p>
<p>Pre-incident planning should evaluate the following
factors under emergency conditions: </p>
<ul>
<li>events identified in the fire
safety analysis</li>
<li>location</li>
<li>construction</li>
<li>structure size and complexity</li>
<li>protection systems</li>
<li>exposure factors</li>
<li>water supply information</li>
<li>occupant characteristics</li>
<li>capabilities of public or
industrial responders</li>
<li>availability of emergency
responders</li>
<li>potential life safety hazards</li>
<li>type and location of hazardous
substances</li>
<li>hazardous processes or
equipment</li>
<li>susceptibility to natural disasters</li>
<li>manual fire suppression
priorities</li>
<li>backup system requirements,
including the paths to these safety-related systems as detailed in the fire
hazard assessment and the fire safe shutdown analysis</li>
</ul>
<p>Pre-fire plans are developed to cover all areas of the
facility and adjacent exposures (e.g., neighbouring buildings, wild lands and
transportation corridors). This information should be concisely documented and
should include any specialized equipment, procedures or tactics needed to carry
out the plan. </p>
<p>Review and revision of the pre-fire plan should be
incorporated into the planning process for new construction, and should include
features such as water supply, hydrant availability and response routes. At a
minimum, pre-fire plans should be reviewed annually and revised to address
areas of concern identified during drills, testing or an incident. </p>
<p>The pre-fire plan should be made readily available to
the fire response organization for updates, training and familiarization. </p>
<p>For additional guidance on pre-fire planning, refer to
the National Fire Protection Association&#39;s standard NFPA-1620, <i>Recommended Practice for Pre-Incident
Planning </i><sup id="fnb23-ref"><a className="fn-lnk" href="#fnb23"><span className="wb-inv">Footnote </span>23</a></sup>  <i>.</i></p>
<h3 id="ann-I-4">I.4 Response Capability</h3>
<p>Where buildings or accessible interior spaces
including subterranean spaces exist, a fire response capability should include
interior structural firefighting capability as defined by NFPA-600. </p>
<p>The fire response organization should: </p>
<ul>
<li>operate under a recognized
incident management system (IMS) that meets the intent of NFPA-1561, <i>Standard on Emergency Services Incident
Management System and Command Safety</i> <sup id="fnb24-ref"><a className="fn-lnk" href="#fnb24"><span className="wb-inv">Footnote </span>24</a></sup>  , or an equivalent, and has the
ability to implement a unified command approach</li>
<li>establish and document
arrangements for emergency response agreements with offsite service providers,
including clearly stated roles and responsibilities, expectations and levels of
service</li>
<li>develop and maintain
pre-incident plans</li>
<li>ensure the provision of
adequate resources &#8210; including responders, equipment and apparatus
&#8210; at all times to provide an effective and sustained response to the fire
event</li>
<li>ensure preparedness of
supporting groups (e.g., offsite responders, onsite security forces, radiation
protection personnel, maintenance staff and operations staff) to ensure that
all responders are familiar with the potential hazards, operation and layout of
the facility</li>
<li>intervene in a timely manner
with sufficient resources to respond to, terminate and recover from a fire
event</li>
<li>understand the effects of
response actions on the material and processes at the facility, as well as the
safety implications associated with those effects</li>
<li>include interior structural
firefighting capability as defined by NFPA-600</li>
</ul>
<h3 id="ann-I-5">I.5 Incident Management</h3>
<p>The incident management system (IMS) should follow the
guidance of NFPA-1561. If elements are not implemented or if alternative
approaches are used, they are explained and justified. </p>
<p>Training and qualifications of IMS personnel should
follow the guidance of NFPA-1026, <i>Standard
for Incident Management Personnel Professional Qualifications</i>. </p>
<p>The IMS should be modular to allow the application of
only those elements that are necessary at a particular incident and to allow
elements to be activated or deactivated as the needs of the incident change
with time. </p>
<p>The IMS should provide for a routine process of
escalation as additional resources are used. The incident commander (IC) should
determine which levels and elements of the IMS are to be implemented in each
case and should develop the command structure for each incident by assigning
supervisory responsibilities according to standard operating procedures (SOPs). </p>
<p>An effective span of control should be determined by
assessing the ability of each supervisory position to monitor the activities of
assigned subordinates and to communicate effectively with them. </p>
<p>The scope of authority to be delegated at each
supervisory level should be outlined in SOPs. Where the incident is under the
command authority of a single emergency services organization (ESO), the IC
should provide for liaison and coordination with all assisting and cooperating
agencies. </p>
<p>If the incident is under the overall jurisdiction of
another agency that has not implemented an IMS, the ESO should use the IMS to
manage its own operations and coordinate its activities with the authority
having jurisdiction. </p>
<p>The IC should establish a unified command at a
multi-agency or multi-jurisdictional incident when agencies have jurisdictional
responsibility for an incident, either geographic or functional. </p>
<h3 id="ann-I-6">I.6 Incident Commander</h3>
<p>The incident commander (IC) should have overall
authority for management of the incident. </p>
<p>The IC should have the responsibilities and duties of
all unassigned IC positions. </p>
<p>The IC should ensure that adequate safety measures are
in place. </p>
<p>The incident management system should identify who is
in overall command at the scene for the duration of the incident. </p>
<p>SOPs should provide for one individual to assume the
role of IC from the beginning of operations at the scene of each incident. </p>
<p>The IMS should provide for the transfer of the
assignment of IC one or more times during the course of an incident. </p>
<p>SOPs should define the circumstances and procedures
for transferring command to another position and should specify to which
position the command should be transferred. </p>
<p>Risk management principles should be employed
routinely by supervisory personnel at all levels of the IMS to define the
limits of acceptable and unacceptable positions and functions for all responders
at the incident scene. </p>
<p>Supervisory personnel should assume responsibility for
activities within their span of control, including responsibility for the
safety and health of responders and other authorized persons within their
designated areas. </p>
<h3 id="ann-I-7">I.7 Command Post</h3>
<p>The command post (CP) should be located in a safe,
fixed and sheltered area or tied to a vehicle. The CP should be accessible and
clearly visible. </p>
<p>The command post should include radio capability to
monitor and communicate with assigned tactical, command and designated
emergency traffic channels for an incident. The IC should be responsible for
overall responder accountability for an incident. The IC should be responsible
for controlling communications on the tactical, command and designated emergency
traffic channels for an incident. </p>
<p>The IC should maintain an awareness of the location
and function of all companies or units at the scene of the incident. </p>
<h3 id="ann-I-8">I.8 Risk Management</h3>
<p>The IC should apply the following risk management
principles: </p>
<ul>
<li>Activities that present a
significant risk to the safety of responders should be limited to situations
that have the potential to save endangered lives.</li>
<li>Activities that are routinely
employed to achieve the FPP objectives should be recognized as inherent risks
to the safety of responders, and actions should be taken to reduce or avoid
these risks.</li>
<li>No risk to the safety of
responders should be acceptable where there is no possibility of saving lives
or property.</li>
</ul>
<h3 id="ann-I-9">I.9 Firefighting Equipment</h3>
<p>Appropriate firefighting equipment should be provided
in accordance with the requirements of the applicable firefighting standards
and guidelines. Equipment needs (e.g., hoses, nozzles, breathing apparatus,
bottles for self-contained breathing apparatus, ancillary firefighting tools)
should be based on the requirements for controlling and extinguishing fires at
the given facility. The fire brigade should have at its disposal the equipment
necessary to assist with routing water to affected areas. </p>
<p>Firefighting equipment should be tested and maintained
as per manufacturer recommendations and National Fire Protection Association (NFPA)
standards. </p>
<h3 id="ann-I-10">I.10 Industrial Fire Brigade</h3>
<p>The industrial fire brigade should have the capacity
to conduct offensive and defensive fire suppression operations and transport
firefighting resources to the scene of a fire in a timely manner. Guidelines
for response times are provided in various fire response standards. </p>
<p>NFPA-1081, <i>Standard
for Facility Fire Brigade Member Professional Qualifications</i>, provides
requirements on minimum job performance for each site-specific task expected to
be performed by brigade members in advance of their participation in emergency
response operations. </p>
<h4 id="ann-I-10-1">I.10.1 Qualifications</h4>
<p>Industrial fire brigade members should be physically
qualified and tested to perform the assigned duties. Each member should pass an
annual physical examination to confirm their ability to perform strenuous
activity and to use respiratory protection equipment. Additional guidance can
be found in NFPA-1081. </p>
<h3 id="ann-I-11">I.11 Firefighting Access</h3>
<p>All facility areas should be accessible for
firefighting purposes, with access routes being identified in the pre-incident
plan. </p>
<p>Provisions should be made to allow access to locked
areas. This should include enabling security and radiation protection personnel
to respond to the fire area along with the fire brigade, if necessary. </p>
<p>Radiation protection personnel should confer with the
industrial fire brigade leader to determine the safest method of access to any
area where radioactive material is present. </p>
<h3 id="ann-I-12">I.12 Smoke and Heat Removal</h3>
<p>The fire brigade should have the equipment and ability
to remove heat and smoke using portable ventilation equipment. Areas that
should not be vented due to contamination concerns should be clearly identified
in the pre-incident plan for the facility. </p>
<h3 id="ann-I-13">I.13 Training</h3>
<p>All members of the industrial fire brigade should be
qualified to perform their respective duties commensurate with the objectives
of the FPP at the facility. </p>
<p>Training in emergency response is based on standard
operating procedures. These procedures are maintained in written form (in
conjunction with the FHA and FSSA) and address anticipated emergencies. </p>
<p>The industrial fire brigade is composed of personnel
who are provided with training consistent with the requirements of modern
applicable standards such as NFPA. This training includes regular updates on
firefighting practices and refresher instruction. </p>
<p>For each fire brigade member, written records should
be maintained to reflect the following information: </p>
<ul>
<li>initial
fire brigade classroom and hands-on training</li>
<li>refresher training</li>
<li>special training schools
attended</li>
<li>drill attendance records</li>
<li>leadership training for fire
brigades</li>
</ul>
<p>Offsite service providers who are expected to respond
to fire at the facility should be familiar with the facility layout. At a
minimum, familiarization should be carried out once per year. </p>
<p>Offsite responders should also be offered training
with respect to radioactive materials, radiation and hazardous substances that
could be present. The training, capabilities and equipment used by offsite
emergency service providers should be commensurate with their respective roles
and functions for which they are certified. </p>
<h3 id="ann-I-14">I.14 Offsite Fire Department</h3>
<p>The licensee should establish an agreement for mutual
aid with the local municipal fire department or other appropriate service
provider. </p>
<p>This agreement should include a plan for how the
industrial fire brigade and the offsite service providers will interface. </p>
<p>The industrial fire brigade should consult with the
offsite service provider to make plans for firefighting and rescue, including
procedures for obtaining assistance from other organizations. </p>
<p>The offsite responders should be invited to
participate in regular fire drills and exercises. </p>
<h3 id="ann-I-15">I.15 Agreements and Communications</h3>
<p>Formal documented agreements and communication
protocols are established between the facility&#39;s emergency response
organization and all other appropriate parties, such as security forces,
radiation protection personnel, maintenance, operations, other designated
personnel and offsite emergency response agencies. </p>
<p>Facility management designates a position to act as
liaison to the offsite emergency responders and should ensure that offsite
responders are escorted at all times. </p>
<h3 id="ann-I-16">I.16 Basis for Determining the Firefighting Resource Requirements</h3>
<p>The minimum firefighting resource requirements are
directly related to the operational firefighting priorities and the objectives
detailed in the pre-incident plan and the emergency action plan for the
facility. </p>
<p>Appropriate needs analyses should be conducted to
determine the minimum number of individuals required for fire response and to
establish the equipment that will be needed to support their role. These
analyses should take into account the physical condition of the facility in its
various modes of operation and all postulated fire scenarios. </p>
<p>The following considerations should be taken into
account when determining the minimum firefighting resource requirements: </p>
<ul>
<li>expected firefighting
activities</li>
<li>activities required to execute
the pre-incident plan and the emergency action plan</li>
<li>activities credited in the FSSA</li>
<li>challenges in gaining access to
specific areas within the facility</li>
<li>the minimum complement of
personnel and equipment required to safely deal with the fires that have or could
have an impact on safety-related systems (SRSs)</li>
</ul>
<p>Prior to the
task analysis, critical data should be collected and analyzed to: </p>
<ul>
<li>define the design-basis fire in
terms of the heat release rate versus time (fire growth) versus critical
exposures to safety systems for each fire zone</li>
<li>understand the fuel package and
its configuration with respect to its impact on fire growth and development,
and the respective requirements for fire suppression</li>
</ul>
<p>These two factors should dictate the amount and type
of extinguishing agent(s) and the number and type of hose streams that will be
needed to successfully control and extinguish the fire. These factors should
also dictate the firefighting resources required to successfully combat a given
design-basis fire and protect SRSs. </p>
<h3 id="ann-I-17">I.17 Firefighter Wellness</h3>
<p>A firefighter wellness program should be implemented
that identifies physical and mental health risk factors, and provides education
and counselling for the purpose of preventing health problems and enhancing
overall well-being. A firefighter wellness program should provide for physical
fitness, endurance and strength training. Ongoing fitness for duty monitoring
of emergency responders should be commensurate with individual roles and
responsibilities, accounting for associated physical and mental tasks. </p>
<p>For those involved in physically demanding roles (such
as fire suppression responders), a component of the program establishes
entrance requirements for ongoing periodic medical and physical fitness and
performance targets and evaluations, at least on an annual basis. The
documented job performance requirements define the physical, medical and
performance requirements for each role. </p>
<h3 id="ann-I-18">I.18 Drills</h3>
<p>Fire drills that simulate the initiating events and
event scenarios identified for the facility should be scheduled at regular
intervals. The scenarios being simulated should include complications such as
casualties. </p>
<p>Periodic drills should assess the effectiveness of: </p>
<ul>
<li>occupant response to
emergencies</li>
<li>integrated response capability,
including performance and coordination of the emergency response organization</li>
<li>use of the pre-incident plan
and the emergency action plan</li>
<li>use of emergency equipment</li>
</ul>
<p>Drills should be evaluated and the results of the
evaluation used to improve facility response to emergencies, as well as to
improve emergency planning. </p>
<p>Drill records should provide details about drill
scenarios, participants, observations and corrective actions. </p>
<h3 id="ann-I-19">I.19 Air Management</h3>
<p>NFPA-1404, <i>Standard
for Fire Service Respiratory Protection Training</i>,<i> </i>provides air management program requirements for industrial fire
brigades. </p>
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
<h2 id="ann-J">Appendix J: Fire Incident Reporting Table</h2>  <p>Appendix J  provides a <a href="/eng/pdfs/REGDOC-2-10-2-Appendix-J-eng.pdf">template</a> for the required information that should be provided when  reporting fire events.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="AppK"></div>
<h2 id="ann-K">Appendix K: Acronyms</h2>
<dl className="cnsc-glossary">
<dt><strong>AHJ</strong></dt>
<dd>authority having jurisdiction</dd>
<dt><strong>AOO</strong></dt>
<dd>anticipated operational occurrence</dd>
<dt><strong>CCR</strong></dt>
<dd>code compliance review</dd>
<dt><strong>CSA</strong></dt>
<dd>CSA Group (formerly Canadian Standards Association)</dd>
<dt><strong>DID</strong></dt>
<dd>defence in depth</dd>
<dt><strong>ESO</strong></dt>
<dd>emergency services organization</dd>
<dt><strong>FHA</strong></dt>
<dd>fire hazard assessment</dd>
<dt><strong>FPP</strong></dt>
<dd>fire protection program</dd>
<dt><strong>FSSA</strong></dt>
<dd>fire safe shutdown analysis</dd>
<dt><strong>HRR</strong></dt>
<dd>heat release rate</dd>
<dt><strong>IC</strong></dt>
<dd>incident commander</dd>
<dt><strong>IMS</strong></dt>
<dd>incident management system</dd>
<dt><strong>ITM</strong></dt>
<dd>inspection, testing and maintenance</dd>
<dt><strong>NBCC</strong></dt>
<dd><i>National Building Code of Canada</i></dd>
<dt><strong>NFCC</strong></dt>
<dd><i>National Fire Code of Canada</i></dd>
<dt><strong>NFPA</strong></dt>
<dd>National Fire Protection Association</dd>
<dt><strong>NSCA</strong></dt>
<dd><i>Nuclear Safety and Control Act</i></dd>
<dt><strong>PSA</strong></dt>
<dd>probabilistic safety assessment</dd>
<dt><strong>QMS</strong></dt>
<dd>quality management system</dd>
<dt><strong>SRS</strong></dt>
<dd>safety-related system</dd>
<dt><strong>SSCs</strong></dt>
<dd>structures, systems and components</dd>
<dt><strong>TPR</strong></dt>
<dd>third-party review</dd>
</dl>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="Glossary"></div>
<h2 id="glossary">Glossary</h2>
<p>For definitions of terms used in
this document, see <a href="/pubs_catalogue/uploads/REGDOC-3-6-Glossary-of-CNSC-Terminology-eng.pdf">REGDOC&#8209;3.6, <i>Glossary of CNSC Terminology</i></a>,
which includes terms and definitions used in the <i><a href="http://laws-lois.justice.gc.ca/eng/acts/N-28.3/">Nuclear Safety and
Control Act</a></i> and the regulations made under it, and in CNSC regulatory
documents and other publications. REGDOC&#8209;3.6 is provided for reference
and information.</p>
<p>The following terms are either new
terms being defined, or include revisions to the current definition for that
term. Following public consultation, the final terms and definitions will be
submitted for inclusion in the next version of REGDOC&#8209;3.6, <i>Glossary of CNSC Terminology</i>.</p>
<dl>
<dt><strong>areas of refuge</strong></dt>
<dd>Areas that provide tenable environments where facility occupants can remain safely in place, protected from the potential harsh environment during and following a fire.</dd>
<dt><strong>authority having jurisdiction</strong></dt>
<dd>The organization, office, agency or individual responsible for approving or accepting equipment, materials, installation or procedures according to the applicable codes and standards.</dd>
<dt><strong>closure</strong></dt>
<dd>A device or assembly that is intended to close an opening through a fire separation or an exterior wall. Closures include doors, shutters, wired glass and glass blocks, as well as components such as hardware, closing devices, frames and anchors.</dd>
<dt><strong>combustible dust</strong></dt>
<dd>Dust and particles that are ignitable and are likely to produce an explosion.</dd>
<dt><strong>combustible liquid</strong></dt>
<dd>Liquid having a flash point greater than or equal to 37.8 ºC (100°F) and less than 93.3 ºC (200°F).</dd>
<dt><strong>combustible material</strong></dt>
<dd>Material that, when in the form and under the conditions in which it is likely to be used, will ignite, support combustion, burn or release flammable vapour when subject to fire or heat.<br/>
<strong>Note:</strong> Material is considered to be combustible when it fails to pass the test specified in CAN/ULC-S114, 2005.
<dt><strong>combustion</strong></dt>
<dd>A chemical process that involves oxidation sufficient to produce heat or light.</dd>
<dt><strong>compensatory measures</strong></dt>
<dd>Actions taken when an impairment in plant design features or operational readiness reduces the level of fire protection below intended levels.<br/>
<strong>Note:</strong> Compensatory measures are temporary means of providing reasonable assurance that the affected fire protection function will be compensated for during an impairment. They include fire watches, administrative controls, and temporary fire protection systems or features.</dd>
<dt><strong>dangerous goods</strong></dt>
<dd>Those products or substances that are regulated by the Transportation of Dangerous Goods Act and regulations.</dd>
<dt><strong>design-basis fire</strong></dt>
<dd>hypothetical fire that is used for the purpose of fire protection design or analysis. The design-basis fire is a fire that would result in the most severe consequences in the area under consideration, in the absence of fire suppression by automatic or manual systems.</dd>
<dt><strong>fire area</strong></dt>
<dd>An area that is physically separated from other areas by space, barriers, walls or other means in order to contain fire within that area.</dd>
<dt><strong>fire barrier</strong></dt>
<dd>A vertical or horizontal construction assembly designed and constructed to limit the spread of heat and fire.<br/>
<strong>Note:</strong> Fire barriers include fire separations, cable enclosures and fire wraps, but do not include radiant heat shields.</dd>
<dt><strong>fire compartment</strong></dt>
<dd>An enclosed space in a building that is separated from all other parts of the building by enclosing construction that provides a fire separation and has a required fire resistance rating.</dd>
<dt><strong>fire hazard</strong></dt>
<dd>A condition with a potential to cause a fire.</dd>
<dt><strong>fire prevention</strong></dt>
<dd>Measures directed toward avoiding the inception of fire.</dd>
<dt><strong>fire protection</strong></dt>
<dd>Methods of providing for fire control or fire extinguishment.</dd>
<dt><strong>fire protection program</strong></dt>
<dd>A set of planned and coordinated activities by various contributing disciplines and organizations that is intended to ensure adequate protection against fire.</dd>
<dt><strong>fire protection rating</strong></dt>
<dd>The time, in minutes or hours, that a closure will withstand the passage of flame when exposed to fire.</dd>
<dt><strong>fire resistance rating</strong></dt>
<dd>The time, in minutes or hours, that a material or assembly of materials is expected to withstand the passage of flame and transmission of heat when exposed to fire.</dd>
<dt><strong>fire safe shutdown analysis</strong></dt>
<dd>An analysis to demonstrate that at least one means of achieving nuclear safety objectives and performance criteria is available in the event of a fire.</dd>
<dt><strong>fire safe shutdown systems</strong></dt>
<dd>Systems, subsystems, components, and cables that perform the nuclear safety criteria. Fire safe shutdown systems can include safety systems, safety-related systems, and non-safety systems. </dd>
<dt><strong>fire scenario</strong></dt>
<dd>The description of a fire, including the factors affecting it and affected by it, from ignition to extinguishment. Fire scenarios provide details on ignition sources, the nature and configuration of fuel, ventilation characteristics, the condition of supporting structures, the condition and status of operating equipment, and the location of occupants. </dd>
<dt><strong>fire separation</strong></dt>
<dd>A construction assembly that acts as a barrier against the spread of fire.</dd>
<dt><strong>firestop</strong></dt>
<dd>A construction that consists of a device or of material or materials that seal an opening in a fire separation in order to stop the passage of flame and smoke when subjected to a standard fire test. <br/>
<strong>Note:</strong> Openings include joints and expansion joints, blank openings and openings through termination devices such as electrical outlet boxes, and can be penetrated by cables, cable trays, conduit, ducts and pipes.</dd>
<dt><strong>fire zone</strong></dt>
<dd>A space that is designated for the purposes of the fire hazard assessment as being affected by the design-basis fire. Each fire zone can be separated from other fire zones by a fire separation with or without a fire resistance rating or by a spatial separation.</dd>
<dt><strong>flammable liquid</strong></dt>
<dd>Liquid having a flash point at temperatures less than 37.8 ºC (100°F) and having a vapour pressure of not more than 275.8 kPa (absolute) (40 psia) at 37.8 ºC (100°F), as determined by ASTM D 323.</dd>
<dt><strong>flash point</strong></dt>
<dd>The minimum temperature at which a liquid within a container gives off vapour in sufficient concentration to form an ignitable mixture with the air near the surface of the liquid.</dd>
<dt><strong>functional attributes</strong></dt>
<dd>Functional attributes of fire protection are the useful and intended functions that make up the capabilities of the fire protection structures, systems and components. These attributes include automatic starting of a fire pump, combined automatic and manual start capability of a fire pump, and minimum system availability times for fire alarm systems, while on the internal battery supply.</dd>
<dt><strong>hot work</strong></dt>
<dd>Activities that involve open flames or produce heat or sparks. Hot work includes cutting, welding, soldering, brazing, grinding, adhesive bonding, thermal spraying and thawing.</dd>
<dt><strong>impairment</strong></dt>
<dd>The inability or unavailability of a system, structure or component to perform as designed.<br/>
<strong>Note:</strong> Impairment can be the result of planned maintenance, unplanned events or failures. </dd>
<dt><strong>industrial fire brigade</strong></dt>
<dd>An organized group of staff within an industrial occupancy who are knowledgeable, trained and skilled in basic firefighting operations.<br/>
<strong>Note:</strong> Members of an industrial fire brigade can be employed full time or part time in the provision of fire suppression and related activities.</dd>
<dt><strong>injury</strong></dt>
<dd>Means personal injury and includes loss of life.</dd>
<dt><strong>laydown area</strong></dt>
<dd>An area used for staging.</dd>
<dt><strong>non-combustible material</strong></dt>
<dd>Material that, in the form and under the conditions in which it is likely to be used, will not ignite, burn, support combustion or release flammable vapours when subjected to fire or heat.</dd>
<dt><strong>occupancy</strong></dt>
<dd>The purpose for which a building or portion thereof is used or intended to be used.</dd>
<dt><strong>organizational statement</strong></dt>
<dd>
<p>A statement that identifies all of the information pertinent to the industrial fire brigade, and that is intended to provide industrial fire brigade members with a clear picture of the organization of the brigade and the response duties that each member is expected to perform as they relate to the industrial fire brigade. The purpose of the industrial fire brigade&#39;s organizational statement is to demonstrate management&#39;s commitment to the establishment of an industrial fire brigade.</p>
<p>Everything the brigade does should be in accordance with the information in the organizational statement. For this reason, the organizational statement requires periodic revision as the mission, organization or response duties of the brigade change. </p>
</dd>
<dt><strong>qualified person</strong></dt>
<dd>A person who possesses the required level of expertise and experience to perform an assigned task. </dd>
<dt><strong>qualified third party</strong></dt>
<dd>A qualified person or persons who have not been directly involved in or contributed to the work under consideration.</dd>
<dt><strong>radiant heat shield</strong></dt>
<dd>A barrier that provides protection of equipment and cabling from radiant heat energy resulting from fires. The radiant heat shield can be a rated or an unrated fire separation.</dd>
<dt><strong>spatial separation</strong></dt>
<dd>Separation by a physical distance sufficient to prevent damage by fire.</dd>
<dt><strong>staged or staging</strong></dt>
<dd>he temporary storage of material in preparation for future work.<br/>
<strong>Note:</strong> Replacement parts and maintenance materials are normally staged in laydown areas next to equipment about to undergo maintenance.</dd>
<dt><strong>storage or stored</strong></dt>
<dd>The location inside a fire compartment of material that is not in the process of being examined, serviced, dismantled, assembled, loaded, filled, refilled, used, transferred or unloaded. </dd>
<dt><strong>transient material</strong></dt>
<dd>Material that is not in storage.</dd>
</dl>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="Ref"></div>
<h2 id="ref">References</h2>
<p>The CNSC may include references to information
on best practices and standards such as those published by CSA Group. With
permission of the publisher, CSA Group, all nuclear-related CSA standards may
be viewed at no cost through the CNSC Web page “<a href="http://www.nuclearsafety.gc.ca/eng/acts-and-regulations/regulatory-documents/csa-standards">How to gain free access to all nuclear-related CSA standards</a>”.</p>
<div className="wb-fnote" role="note">
<section>
<h2 id="fnb" className="wb-inv">Endnotes</h2>
<dl>
<dt>Footnote 1</dt>
<dd id="fnb1">
<p>CSA Group, CSA N293-07, <a href="/eng/acts-and-regulations/regulatory-documents/csa-standards"><em>Fire protection for CANDU nuclear power plants</em></a>, Toronto, 2007.</p>
<p className="fn-rtn"><a href="#fnb1-ref"><span className="wb-inv">Return to </span>1<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 2</dt>
<dd id="fnb2">
<p>CSA Group, CSA N393, <em><a href="/eng/acts-and-regulations/regulatory-documents/csa-standards">Fire protection for facilities that process, handle or store nuclear substances</a></em>, Toronto 2013.</p>
<p className="fn-rtn"><a href="#fnb2-ref"><span className="wb-inv">Return to </span>2<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 3</dt>
<dd id="fnb3">
<p>International Atomic Energy Agency, IAEA Safety Standards Series, Safety Guide No. NS-G-2.1, <em><a href="https://www-pub.iaea.org/MTCD/Publications/PDF/Pub1091_web.pdf">Fire Safety in the Operation of Nuclear Power Plants</a></em>, Vienna, 2000</p>
<p className="fn-rtn"><a href="#fnb3-ref"><span className="wb-inv">Return to </span>3<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 4</dt>
<dd id="fnb4">
<p>National Research Council Canada (NRC), <em><a href="https://nrc.canada.ca/en/certifications-evaluations-standards/codes-canada/codes-canada-publications/national-building-code-canada-2015">National Building Code of Canada 2015</a></em>.</p>
<p className="fn-rtn"><a href="#fnb4-ref"><span className="wb-inv">Return to </span>4<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 5</dt>
<dd id="fnb5">
<p>NRC, <a href="https://nrc.canada.ca/en/certifications-evaluations-standards/codes-canada/codes-canada-publications/national-fire-code-canada-2015"><em>National Fire Code of Canada 2015</em></a>.</p>
<p className="fn-rtn"><a href="#fnb5-ref"><span className="wb-inv">Return to </span>5<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 6</dt>
<dd id="fnb6">
<p>National Fire Protection Association, NFPA 600, <em>Standard on Industrial Fire Brigades</em>, Quincy, Massachusetts, 2005</p>
<p className="fn-rtn"><a href="#fnb6-ref"><span className="wb-inv">Return to </span>6<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 7</dt>
<dd id="fnb7">
<p>CNSC, REGDOC-2.4.1, <em><a href="/eng/acts-and-regulations/regulatory-documents/published/html/regdoc2-4-1/index">Deterministic Safety Analysis</a></em>, Ottawa, 2014.</p>
<p className="fn-rtn"><a href="#fnb7-ref"><span className="wb-inv">Return to </span>7<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 8</dt>
<dd id="fnb8">
<p>CNSC, REGDOC-2.4.2,<em><a href="/eng/acts-and-regulations/regulatory-documents/published/html/regdoc2-4-2/index"> Probabilistic Safety Assessment (PSA) for Nuclear Power Plants</a></em>, Ottawa, 2014.</p>
<p className="fn-rtn"><a href="#fnb8-ref"><span className="wb-inv">Return to </span>8<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 9</dt>
<dd id="fnb9">
<p>CSA Group, CSA N290.17-17,<em><a href="/eng/acts-and-regulations/regulatory-documents/csa-standards"> Probabilistic safety assessment for nuclear power plants</a></em>, Toronto, 2017.</p>
<p className="fn-rtn"><a href="#fnb9-ref"><span className="wb-inv">Return to </span>9<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 10</dt>
<dd id="fnb10">
<p>U.S. Nuclear Regulatory Commission (U.S. NRC) and Electric Power Research Institute, NUREG/CR-6850,<em><a href="https://www.nrc.gov/docs/ML1516/ML15167A411.pdf"> Fire PRA Methodology for Nuclear Power Facilities, Volume 2: Detailed Methodology</a></em>, Palo Alto, California, and Washington, D.C., 2005.</p>
<p className="fn-rtn"><a href="#fnb10-ref"><span className="wb-inv">Return to </span>10<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 11</dt>
<dd id="fnb11">
<p>International Atomic Energy Agency (IAEA), IAEA-TECDOC-1135, <em><a href="https://www-pub.iaea.org/MTCD/Publications/PDF/te_1135_prn.pdf">Regulatory review of probabilistic safety assessment (PSA) Level 1</a></em>, Vienna, 2000.</p>
<p className="fn-rtn"><a href="#fnb11-ref"><span className="wb-inv">Return to </span>11<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 12</dt>
<dd id="fnb12">
<p>IAEA, IAEA-TECDOC-1229,<a href="http://www-pub.iaea.org/MTCD/publications/PDF/te_1229_prn.pdf"> Regulatory review of probabilistic safety assessment (PSA) Level 2</a>, Vienna, 2001.</p>
<p className="fn-rtn"><a href="#fnb12-ref"><span className="wb-inv">Return to </span>12<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 13</dt>
<dd id="fnb13">
<p>CNSC, REGDOC-2.2.2, <em><a href="/eng/acts-and-regulations/regulatory-documents/published/html/regdoc2-2-2-v2/index">Personnel Training, Version 2</a></em>, Ottawa, 2014.</p>
<p className="fn-rtn"><a href="#fnb13-ref"><span className="wb-inv">Return to </span>13<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 14</dt>
<dd id="fnb14">
<p>CSA Group, CSA N286, <em><a href="/eng/acts-and-regulations/regulatory-documents/csa-standards">Management system requirements for nuclear power plants</a></em>, Toronto 2012.</p>
<p className="fn-rtn"><a href="#fnb14-ref"><span className="wb-inv">Return to </span>14<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 15</dt>
<dd id="fnb15">
<p>CNSC, REGDOC-3.1.1, <a href="/eng/acts-and-regulations/regulatory-documents/published/html/regdoc3-1-1-v2/index">Reporting Requirements for Nuclear Power Plants, Version 2</a>, Ottawa, 2016.</p>
<p className="fn-rtn"><a href="#fnb15-ref"><span className="wb-inv">Return to </span>15<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 16</dt>
<dd id="fnb16">
<p>CNSC, REGDOC-3.1.2, <em><a href="/eng/acts-and-regulations/regulatory-documents/published/html/regdoc3-1-2-v1/index">Reporting Requirements for Non-Nuclear Power Plants and Uranium Mines and Mills</a></em>, Ottawa, 2018.</p>
<p className="fn-rtn"><a href="#fnb16-ref"><span className="wb-inv">Return to </span>16<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 17</dt>
<dd id="fnb17">
<p>CNSC, REGDOC-2.10.1, <em><a href="https://www.cnsc-ccsn.gc.ca/eng/acts-and-regulations/regulatory-documents/published/html/regdoc2-10-1v2/index">Nuclear Emergency Preparedness and Response, Version 2</a></em>, Ottawa, 2014.</p>
<p className="fn-rtn"><a href="#fnb17-ref"><span className="wb-inv">Return to </span>17<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 18</dt>
<dd id="fnb18">
<p>CNSC, REGDOC-2.5.2, <em><a href="https://www.cnsc-ccsn.gc.ca/eng/acts-and-regulations/regulatory-documents/published/html/regdoc2-5-2/index">Design of Reactor Facilities: Nuclear Power Plants</a></em>, Ottawa, 2014.</p>
<p className="fn-rtn"><a href="#fnb18-ref"><span className="wb-inv">Return to </span>18<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 19</dt>
<dd id="fnb19">
<p>CNSC, REGDOC-2.4.3, <em><a href="/eng/acts-and-regulations/regulatory-documents/published/html/regdoc2-4-3/index">Nuclear Criticality Safety</a></em>, Ottawa, 2019.</p>
<p className="fn-rtn"><a href="#fnb19-ref"><span className="wb-inv">Return to </span>19<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 20</dt>
<dd id="fnb20">
<p>U.S. NRC and Electric Power Research Institute, NUREG-1934, <em>Nuclear Power Plant Fire Modeling Application Guide</em>, Washington, D.C., 2012.</p>
<p className="fn-rtn"><a href="#fnb20-ref"><span className="wb-inv">Return to </span>20<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 21</dt>
<dd id="fnb21">
<p>CSA Group, CSA W117.2, <a href="/eng/acts-and-regulations/regulatory-documents/csa-standards">Safety in welding, cutting and allied processes</a>, Toronto, 2012.</p>
<p className="fn-rtn"><a href="#fnb21-ref"><span className="wb-inv">Return to </span>21<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 22</dt>
<dd id="fnb22">
<p>Underwriters Laboratories of Canada, CAN/ULC S-524, <em>Installation of Fire Alarm Systems</em>, Toronto, 2006.</p>
<p className="fn-rtn"><a href="#fnb22-ref"><span className="wb-inv">Return to </span>22<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 23</dt>
<dd id="fnb23">
<p>National Fire Protection Association (NFPA), NFPA-1620, <em>Recommended Practice for Pre-Incident Planning</em>, Quincy, Massachusetts, 2003.</p>
<p className="fn-rtn"><a href="#fnb23-ref"><span className="wb-inv">Return to </span>23<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 24</dt>
<dd id="fnb24">
<p>NFPA, NFPA-1561, <em>Standard on Emergency Services Incident Management System and Command Safety</em>, Quincy, Massachusetts.</p>
<p className="fn-rtn"><a href="#fnb24-ref"><span className="wb-inv">Return to </span>24<span className="wb-inv"> referrer</span></a></p>
</dd>
</dl>
</section>
</div>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="addInfo"></div>
<h2 id="sup">Additional Information</h2>
<p>The CNSC may recommend additional
information on best practices and standards such as those published by CSA
Group. With permission of the publisher, CSA Group, all nuclear-related CSA
standards may be viewed at no cost through the CNSC webpage “<a href="/eng/acts-and-regulations/regulatory-documents/csa-standards">How to gain free access to all nuclear-related CSA standards</a>”.</p>
<p>The following documents provide  additional information that may be relevant and useful for understanding the  requirements and guidance provided in this regulatory document:</p>
<ul>
<li>American  Institute of Aeronautics and Astronautics, AIAA G-095A -  Guide to Safety of Hydrogen and Hydrogen Systems, 2017</li>
<li>Andersson, P., Evaluation and Mitigation of Industrial Fire Hazards, Report LUTVDG/TVBB-1015, Lund  University, Lund, Sweden, 2000. </li>
<li>Australian Building Codes Board,  National Research Council of Canada, et. al., <em><a href="https://www.abcb.gov.au/Resources/Publications/Education-Training/International-Fire-Engineering-Guidelines">International Fire  Engineering Guidelines</a></em><em>,</em> Canberra, 2005.</li>
<li>CNSC, G-276, Human Factors Engineering Program Plans,  Ottawa, 2003.</li>
<li>CNSC,  G-278, Human Factors Verification and Validation Plans, Ottawa,  2003. </li>
<li>CNSC, S-210, Maintenance Programs for Nuclear Power Plants, Ottawa, 2007. </li>
<li>CNSC,  P-119, Policy on Human Factors, Ottawa, 2000. </li>
<li>CNSC,  REGDOC-2.2.5, Minimum Staff Complement,  Ottawa, 2019.</li>
<li>CSA Group, CAN/CSA-Q850-97, Risk  management: Guidelines for decision-makers, Toronto, 1997. </li>
<li>Department  of Public Safety, &ldquo;Lesson 6 Radiological  Material, Course Notes, First Responder Training Program Intermediate Level&rdquo;, <em>Chemical, Biological, Radiological and  Nuclear Strategy</em>, Ottawa, 2005. </li>
<li>Electric Power Research Institute,  NP-6434, <em>Interim Guidelines for Protecting  Fire-Fighting Personnel From Multiple Hazards at Nuclear Plant Sites</em>, Palo  Alto, California, 1989. </li>
<li>Keski-Rakhonen, O., <em>Demand for Extinguishing Media in Manual  Fire Fighting</em>, Lund, Sweden, 2000.</li>
<li>National  Fire Protection Association (NFPA), NFPA 80A, <em>Recommended Practice for Protection of Buildings from Exterior Fire  Exposures</em>, Quincy, Massachusetts, 2007. </li>
<li>NFPA, NFPA 20, Standard  for the Installation of Fire Pumps, Quincy, Massachusetts, 2019. </li>
<li>NFPA,  NFPA 55, Standard for the Storage, Use, and Handling of Compressed Gases and  Cryogenic Fluids in Portable and Stationary Containers, Cylinders, and Tanks,  Quincy, Massachusetts, 2005. </li>
<li>NFPA, NFPA 1143, Standard  for Wildland Fire Management, Quincy, Massachusetts, 2018. </li>
<li>NFPA, NFPA 1500, Standard  on Fire Department Occupational Safety and Health Program,  Quincy, Massachusetts, 2018. </li>
<li>Office of the  Ontario Fire Marshal, &ldquo;<a href="http://www.mcscs.jus.gov.on.ca/english/FireMarshal/FireServiceResources/ComprehensiveFireSafetyEffectivenessModel/FireGroundEffectivenessSub-Model/fireground_submodel.html">Fire Ground Effectiveness Sub-Model</a> (Web page)&rdquo;, Toronto. </li>
<li>Office of the Ontario Fire  Marshal, OFM-TG-02-2000, <em><a href="http://www.mcscs.jus.gov.on.ca/english/FireMarshal/Legislation/TechnicalGuidelinesandReports/TG-2000-02.html">Fire  Safety Planning for Industrial Occupancies</a>,</em> Toronto, 2000.</li>
<li>Office  of Radiation Programs, United States Environmental  Protection Agency Manual of Protective Action Guides and  Protective Actions for Nuclear Incidents, Washington, D.C., 1992. </li>
<li>Office  of Radiation Programs, United States Environmental  Protection Agency, Manual of Protective Action Guides and  Protective Actions for Nuclear Incidents, Washington, D.C., 1992. </li>
<li>Research  Institute for Science and Technology, Tokyo University of Science, &ldquo;Fire Tests in a Large Hall, Using Manually Applied High- and  Low-Pressure Water Sprays&rdquo;<em>,</em> <em>Fire Science and Technology,</em> Vol. 21,  No.&nbsp;1, pp. 1&#8210;17, Toyko, 2001. </li>
<li>Society  of Fire Protection Engineers and National Fire Protection Association, SFPE-00,  Guide  to Performance-Based Fire Protection, Analysis and Design of Buildings,  Quincy, Massachusetts, 2000. </li>
<li>Svensson, S., Lund University, Report  1025, <em><a href="http://www.cfbt-be.com/images/teksten/collegas/Operational-Problem-of-Fire-Control.pdf">The  Operational Problem of Fire Control</a></em>, Lund, Sweden,  2002.</li>
<li>United States  Nuclear Regulatory Commission (U.S. NRC), NRC Generic Letter 1978&#8209;023, <a href="https://www.nrc.gov/docs/ML1129/ML112990531.pdf">Manpower Requirements for Operating Reactors</a>,  Washington, D.C., 1978. </li>
<li>Williams, J., and H.  Stambaugh, United States Fire Administration, USFA-TR-123, <em><a href="https://www.usfa.fema.gov/downloads/pdf/publications/tr-123.pdf">Rapid  Intervention Teams and How to Avoid Needing Them</a>,</em> Washington, D.C., 2003.</li>
</ul>
<p><strong>Performance-based approaches to fire safety:</strong></p>
<ul>
<li>Barry, T., <em><a href="http://www.fireriskforum.com/">Risk-Informed, Performance-Based Industrial  Fire Protection: An Alternative to Prescriptive Codes</a></em>, 2002. </li>
<li>International Standards Organization, ISO/TR 13387, Part 1, <em>Application  of Fire Performance Concepts to Design Objectives</em>, Geneva, 1999. </li>
<li>National Fire Protection Association NFPA, NFPA 551, <em>Guide for the  Evaluation of Fire Risk Assessments</em>, Quincy, Massachusetts, 2019. </li>
<li>NFPA,  NFPA 101, <em>Life Safety Code</em><em>,</em> Quincy, Massachusetts, 2019. </li>
<li>NFPA, NFPA 101A, <em>Guide on Alternative Approaches to Life Safety</em>,  Quincy, Massachusetts, 2019. </li>
<li>NFPA, NFPA 101B, <em>Code for Means of Egress for  Buildings and Structures</em>, Quincy, Massachusetts, 2002. </li>
<li>NFPA, NFPA 550, <em>Guide to the Fire Safety Concepts Tree</em>, Quincy,  Massachusetts, 2017. </li>
<li>NFPA, NFPA 921, <em>Guide for Fire and Explosion Investigations</em>, Quincy,  Massachusetts, 2017. </li>
<li>NFPA,  FPH 1903, <em>Fire Protection Handbook</em>, 19th ed., Quincy, Massachusetts,  2003. </li>
<li>NFPA and SFPE, <em>Introduction to Performance-Based  Fire Safety</em>,  Quincy, Massachusetts, 1997. </li>
<li>Rasbash,  D., et al., <em>Evaluation of Fire Safety</em><em>,</em> Chichester, England, 2004. </li>
<li>Society of Fire Protection Engineers (SFPE), <em>Guidelines  for Peer Review in the Fire Protection Design Process</em>, Bethesda, Maryland, 2002. </li>
<li>SFPE and NFPA, NFPA No. HFPE-01, <em><a href="http://ogneborec.su/files/uploads/files/0460561_8A68C_sfpe_handbook_of_fire_protection_engineering.pdf">SFPE Handbook of Fire  Protection Engineering</a></em>, 3rd ed., Quincy, Massachusetts, 2002. </li>
<li>SFPE, <em>Reference Manual for the P.E. Exam in Fire  Protection Engineering</em>, 2nd ed., Quincy, Massachusetts, 2001. </li>
<li>SFPE  and NFPA, <em>Enforcer&rsquo;s Guide to Performance-Based Design Review</em>, Quincy,  Massachusetts, 2003. </li>
<li>SFPE  and NFPA, <em>SFPE</em> <em>Engineering Guide  to Performance-based Fire Protection</em>, 2nd ed., Quincy, Massachusetts, 2007. </li>
<li><strong>International Atomic Energy  Association </strong></li>
<li>International  Atomic Energy Association (IAEA), Fire Protection and Fire Fighting in Nuclear Installations: Proceedings  of a Symposium,  Vienna, 1989. </li>
<li>IAEA, IAEA Safety Series No. 50-SG-D2  (Rev. 1), Fire Protection in Nuclear Power Plants: A Safety Guide,  Vienna, 1992. </li>
<li>IAEA, IAEA Safety Series No. 50-P-6, Inspection  of Fire Protection Measures and Fire Fighting Capability at Nuclear Power  Plants, Vienna, 1994. </li>
<li>IAEA, IAEA Safety Standards Series, NS-G-1.7, <a href="https://www-pub.iaea.org/MTCD/Publications/PDF/Pub1186_web.pdf"><em>Protection  Against Internal Fires and Explosions in the Design of Nuclear Power Plants</em></a><em>,</em> Vienna, 2004.</li>
<li>IAEA, IAEA Safety Standards Series, Safety Guide No. NS-G-2.10, <em><a href="https://www-pub.iaea.org/MTCD/Publications/PDF/p1157_web.pdf">Periodic  Safety Review of Nuclear Power Plants</a>,</em> Vienna, 2003.</li>
<li>IAEA, IAEA-TECDOC-1112, ISSN 1011-4289, <a href="https://www-pub.iaea.org/MTCD/Publications/PDF/te_1112_prn.pdf"><em>Root  Cause Analysis for Fire Events at Nuclear Power Plants</em></a>, Vienna, 1999.</li>
<li>IAEA, IAEA Safety Standards Series NS R-1, <a href="https://www-pub.iaea.org/MTCD/Publications/PDF/Pub1099_scr.pdf"><em>Safety  of Nuclear Power Plants: Design</em></a><em>,</em> Vienna, 2000.</li>
<li>IAEA, IAEA Safety Standards Series  NS-R-2, Safety of Nuclear Power Plants: Operation, Vienna, 2000. </li>
<li>IAEA, IAEA Safety Standards Series NS-R-3, <a href="https://www-pub.iaea.org/MTCD/Publications/PDF/Pub1177_web.pdf"><em>Site  Evaluation for Nuclear Installations</em></a><em>,</em> Vienna, 2003.</li>
<li>IAEA, IAEA Safety Standards Series No.SF-1 <em>Fundamental  Safety Principles</em>, Vienna, 2006. </li>
<li>IAEA, IAEA Safety Report Series No. 10, <a href="https://www-pub.iaea.org/MTCD/Publications/PDF/P062_scr.pdf"><em>Treatment  of Internal Fires in Probabilistic Safety Assessment for Nuclear Power Plants</em></a>, Vienna, 1998.</li>
<li>IAEA, TECDOC-1134, <a href="https://www-pub.iaea.org/MTCD/Publications/PDF/te_1134_prn.pdf"><em>Use of  Operational Experience in Fire Safety Assessment of Nuclear Power Plants</em></a><em>, </em>Vienna,  2000.</li>
</ul>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<h2>CNSC Regulatory Document Series</h2>
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
<li>2.7 Radiation protection/li>
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
<p><strong>Note:</strong> The regulatory document series may be adjusted periodically by the CNSC. Each regulatory document series listed above may contain multiple regulatory documents. For the latest list of regulatory documents, visit the CNSC&#39;s Web site at <a href="/eng/acts-and-regulations/regulatory-documents/index">nuclearsafety.gc.ca/regulatory-documents</a>.</p>  
                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }