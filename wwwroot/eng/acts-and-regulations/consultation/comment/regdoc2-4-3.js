import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "en",
                pageTitle: "REGDOC-2.4.3: Nuclear Criticality Safety", 
                dateModified: "2014-07-04",
                langToggleUrl: "/fra/acts-and-regulations/consultation/comment/regdoc2-4-3"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<h2>Preface</h2>  <p>This regulatory document is part of the CNSC&rsquo;s safety analysis series of regulatory documents, which also covers deterministic and probabilistic safety analysis. The full list of regulatory document series is included at the end of this document and can also be found on the <a href="\eng\acts and-regulations\regulatory-documents\index">CNSC&rsquo;s website</a>.</p>  <p>Regulatory document REGDOC 2.4.3, <em>Nuclear Criticality Safety</em> sets out requirements for nuclear criticality safety and provides guidance on how those requirements may be met. It provides information for the prevention of criticality accidents in the handling, storage, processing and transportation of fissionable materials and the long term management of nuclear waste.</p>  <p>This document clarifies the minimum physical constraints and limits on fissionable materials in order to ensure nuclear criticality safety during the construction, operation, decommissioning, or abandonment of the licensed facility. It applies to operations with fissionable materials outside nuclear reactors, except for the assembly of these materials under controlled conditions (such as in critical experiments).</p>  <p>Key principles and elements used in developing this document are consistent with national and international standards. Some sections of this document are extracted from certain standards from the American National Standards Institute (ANSI), with permission of the publisher, the American Nuclear Society (ANS). Where necessary, the text has been adapted to make it applicable to Canada&rsquo;s international obligations to the International Atomic Energy Agency (IAEA) and consistent with CNSC&rsquo;s regulatory requirements.</p>  <p>REGDOC-2.4.3, <em>Nuclear Criticality Safety</em> supersedes RD-327, <em>Nuclear Criticality Safety</em> and GD-327, <em>Guidance for Nuclear Cricitality Safety</em>, previously published by the CNSC.</p>  <p>This document will be used to assess licence applications for proposed new activities and facilities and for licence renewals for existing activities and facilities. Once the Commission has granted a licence, the nuclear criticality safety measures described in the licence application and the documents needed to support those safety measures will form part of the licensing basis.</p>  <p>Guidance contained in this document exists to inform the applicant, to elaborate further on requirements or to provide direction to licensees and applicants on how to meet requirements. It also provides more information about how CNSC staff evaluate the information during their review of licence applications.</p>  <p>Licensees are expected to review and consider guidance; should they choose not to follow it, they should explain how their chosen alternate approach meets regulatory requirements. An applicant or licensee may put forward a case to demonstrate that the intent of a specification is addressed by other means and demonstrated with supportable evidence.</p>  <p>A graded approach, commensurate with risk, may be defined and used when applying the requirements and guidance contained in this regulatory document. The use of a graded approach is not a relaxation of requirements. With a graded approach, the application of requirements is commensurate with the risks and particular characteristics of the facility or activity.</p>
<div className="alert alert-info">
<p><strong>Important note:</strong> Where referenced in a licence either directly or indirectly (such as through licensee-referenced documents), this document is part of the licensing basis for a regulated facility or activity.</p>
<p>The licensing basis sets the boundary conditions for acceptable performance at a regulated facility or activity, and establishes the basis for the CNSC&rsquo;s compliance program for that regulated facility or activity.</p>
<p>Where this document is part of the licensing basis, the word &quot;shall&quot; is used to express a requirement to be satisfied by the licensee or licence applicant. &quot;Should&quot; is used to express guidance or that which is advised. &quot;May&quot; is used to express an option or that which is advised or permissible within the limits of this regulatory document. &quot;Can&quot; is used to express possibility or capability.</p>
<p>Nothing contained in this document is to be construed as relieving any licensee from any other pertinent requirements. It is the licensee&rsquo;s responsibility to identify and comply with all applicable regulations and licence conditions.</p>  </div>  <div className="clear"></div>  </div><div className="col-md-12 module-table-contents">
<h2>Table of Contents</h2>
<ul>
<li><a href="#sec1">1. Introduction</a>
<ul>
<li><a href="#sec1-1">1.1 Purpose</a></li>
<li><a href="#sec1-2">1.2 Scope</a></li>
<li><a href="#sec1-3">1.3 Relevant legislation</a></li>
<li><a href="#sec1-4">1.4 National and international standards</a></li>
</ul></li>
<li><a href="#sec2">2. Nuclear Criticality Safety in Operations with Fissionable Materials Outside Reactors</a>
<ul>
<li><a href="#sec2-1">2.1 Introduction</a></li>
<li><a href="#sec2-2">2.2 Scope</a></li>
<li><a href="#sec2-3">2.3 Nuclear criticality safety practices</a>
<ul>
<li><a href="#sec2-3-1">2.3.1 Categorization of operations with fissionable materials</a>
<ul>
<li><a href="#sec2-3-1-1">2.3.1.1 Exempted quantity of fissionable materials</a></li>
<li><a href="#sec2-3-1-2">2.3.1.2 Small quantity of fissionable materials</a></li>
<li><a href="#sec2-3-1-3">2.3.1.3 Large quantity of fissionable materials</a></li>
<li><a href="#sec2-3-1-4">2.3.1.4 Nuclear criticality safety program relative to categorization</a></li>
</ul></li>
<li><a href="#sec2-3-2">2.3.2 Program management practices</a>
<ul>
<li><a href="#sec2-3-2-1">2.3.2.1 Responsibilities</a></li>
<li><a href="#sec2-3-2-2">2.3.2.2 Process analysis</a></li>
<li><a href="#sec2-3-2-3">2.3.2.3 Written procedures</a></li>
<li><a href="#sec2-3-2-4">2.3.2.4 Materials control</a></li>
<li><a href="#sec2-3-2-5">2.3.2.5 Equipment control</a></li>
<li><a href="#sec2-3-2-6">2.3.2.6 Quality management program</a></li>
<li><a href="#sec2-3-2-7">2.3.2.7 Operational control</a></li>
<li><a href="#sec2-3-2-8">2.3.2.8 Operational reviews</a></li>
<li><a href="#sec2-3-2-9">2.3.2.9 <em>Emergency procedures</em></a></li>
</ul></li>
<li><a href="#sec2-3-3">2.3.3 Technical practices</a>
<ul>
<li><a href="#sec2-3-3-1">2.3.3.1 Controlled parameters</a></li>
<li><a href="#sec2-3-3-2">2.3.3.2 Availability and reliability</a></li>
<li><a href="#sec2-3-3-2-a">Double contingency principle</a></li>
<li><a href="#sec2-3-3-2-b">Redundancy</a></li>
<li><a href="#sec2-3-3-2-c">Independence</a></li>
<li><a href="#sec2-3-3-2-d">Diversity</a></li>
<li><a href="#sec2-3-3-2-e">Fail-safe design</a></li>
<li><a href="#sec2-3-3-2-f">Testability</a></li>
<li><a href="#sec2-3-3-3">2.3.3.3 Geometry control</a></li>
<li><a href="#sec2-3-3-4">2.3.3.4 Neutron absorbers</a></li>
<li><a href="#sec2-3-3-5">2.3.3.5 Subcritical limit</a></li>
<li><a href="#sec2-3-3-6">2.3.3.6 Neutron reflection</a></li>
<li><a href="#sec2-3-3-7">2.3.3.7 Neutron interaction</a></li>
</ul></li>
<li><a href="#sec2-3-4">2.3.4 Validation of a calculational method</a>
<ul>
<li><a href="#sec2-3-4-1">2.3.4.1 Establishment of bias</a></li>
<li><a href="#sec2-3-4-2">2.3.4.2 Bias trends</a></li>
<li><a href="#sec2-3-4-3">2.3.4.3 Bias uncertainties</a></li>
<li><a href="#sec2-3-4-4">2.3.4.4 Computer dependence</a></li>
<li><a href="#sec2-3-4-5">2.3.4.5 Consistency with measurements</a></li>
<li><a href="#sec2-3-4-6">2.3.4.6 Validation report</a></li>
</ul></li>
</ul></li>
<li><a href="#sec2-4">2.4 Single parameter limits for fissile nuclides</a>
<ul>
<li><a href="#sec2-4-1">2.4.1 Uniform aqueous solutions</a></li>
<li><a href="#sec2-4-2">2.4.2 Aqueous mixtures</a>
<ul>
<li><a href="#sec2-4-2-1">2.4.2.1 Enrichment limits</a></li>
</ul></li>
<li><a href="#sec2-4-3">2.4.3 Metallic units</a></li>
<li><a href="#sec2-4-4">2.4.4 Oxides</a></li>
</ul></li>
<li><a href="#sec2-5">2.5 Multiparameter control</a>
<ul>
<li><a href="#sec2-5-1">2.5.1 Uranium metal- and uranium oxide- water mixtures at low <sup>235</sup>U enrichment</a></li>
<li><a href="#sec2-5-2">2.5.2 Aqueous uranium solutions at low <sup>235</sup>U enrichment</a></li>
<li><a href="#sec2-5-3">2.5.3 Uniform aqueous solutions of Pu(NO<sub>3</sub>)<sub>4</sub> containing <sup>240</sup>Pu</a></li>
<li><a href="#sec2-5-4">2.5.4 Aqueous mixtures of plutonium containing <sup>240</sup>Pu</a></li>
</ul></li>
</ul></li>
<li><a href="#sec3">3. Criticality Accident Alarm System</a>
<ul>
<li><a href="#sec3-1">3.1 Introduction</a></li>
<li><a href="#sec3-2">3.2 Scope</a></li>
<li><a href="#sec3-3">3.3 General principles</a>
<ul>
<li><a href="#sec3-3-1">3.3.1 General</a></li>
<li><a href="#sec3-3-2">3.3.2 Coverage</a>
<ul>
<li><a href="#sec3-3-2-1">3.3.2.1 Evaluation of criticality alarm systems</a></li>
<li><a href="#sec3-3-2-2">3.3.2.2 Installation of criticality alarm systems</a></li>
<li><a href="#sec3-3-2-3">3.3.2.3 Detection of criticality accidents</a></li>
</ul></li>
<li><a href="#sec3-3-3">3.3.3 Criticality alarm</a></li>
<li><a href="#sec3-3-4">3.3.4 Dependability</a></li>
</ul></li>
<li><a href="#sec3-4">3.4 Criteria for system design</a>
<ul>
<li><a href="#sec3-4-1">3.4.1 Reliability</a></li>
<li><a href="#sec3-4-2">3.4.2 System vulnerability</a></li>
<li><a href="#sec3-4-3">3.4.3 Seismic tolerance</a></li>
<li><a href="#sec3-4-4">3.4.4 Failure warning</a></li>
<li><a href="#sec3-4-5">3.4.5 Response time</a></li>
<li><a href="#sec3-4-6">3.4.6 Detection criterion</a></li>
<li><a href="#sec3-4-7">3.4.7 Sensitivity</a></li>
<li><a href="#sec3-4-8">3.4.8 Placement of detectors</a></li>
<li><a href="#sec3-4-9">3.4.9 Interlocking with ventilation system</a> </li>
</ul></li>
<li><a href="#sec3-5">3.5 Testing</a>
<ul>
<li><a href="#sec3-5-1">3.5.1 Initial tests</a></li>
<li><a href="#sec3-5-2">3.5.2 Special tests</a></li>
<li><a href="#sec3-5-3">3.5.3 Response to radiation</a></li>
<li><a href="#sec3-5-4">3.5.4 Periodic tests</a></li>
<li><a href="#sec3-5-5">3.5.5 Corrective action</a></li>
<li><a href="#sec3-5-6">3.5.6 Test procedures</a></li>
<li><a href="#sec3-5-7">3.5.7 Records</a></li>
<li><a href="#sec3-5-8">3.5.8 Out of service</a></li>
</ul></li>
<li><a href="#sec3-6">3.6 Employee familiarization</a>
<ul>
<li><a href="#sec3-6-1">3.6.1 Posted instructions</a></li>
<li><a href="#sec3-6-2">3.6.2 Training and criticality alarm drills</a></li>
</ul></li>
</ul></li>
<li><a href="#sec4">4. Use of Borosilicate-Glass Raschig Rings as a Neutron Absorber in Solutions of Fissile Material</a>
<ul>
<li><a href="#sec4-1">4.1 Introduction</a></li>
<li><a href="#sec4-2">4.2 Scope</a></li>
<li><a href="#sec4-3">4.3 General requirements</a>
<ul>
<li><a href="#sec4-3-1">4.3.1 Physical environment</a>
<ul>
<li><a href="#sec4-3-1-1">4.3.1.1 Mechanical environment</a></li>
<li><a href="#sec4-3-1-2">4.3.1.2 Radiation environment</a></li>
</ul></li>
<li><a href="#sec4-3-2">4.3.2 Chemical environment</a>
<ul>
<li><a href="#sec4-3-2-1">4.3.2.1 Near neutral environment</a></li>
<li><a href="#sec4-3-2-2">4.3.2.2 Acidic environment</a></li>
<li><a href="#sec4-3-2-3">4.3.2.3 Basic environment</a></li>
</ul></li>
</ul></li>
<li><a href="#sec4-4">4.4 Ring specifications</a>
<ul>
<li><a href="#sec4-4-1">4.4.1 Composition</a>
<ul>
<li><a href="#sec4-4-1-1">4.4.1.1 Type of glass</a></li>
<li><a href="#sec4-4-1-2">4.4.1.2 Density of glass</a></li>
<li><a href="#sec4-4-1-3">4.4.1.3 <sup>10</sup>B content of glass</a></li>
</ul></li>
<li><a href="#sec4-4-2">4.4.2 Ring diameter</a></li>
<li><a href="#sec4-4-3">4.4.3 Surface finish</a></li>
<li><a href="#sec4-4-4">4.4.4 Chemical</a></li>
<li><a href="#sec4-4-5">4.4.5 Mechanical</a></li>
</ul></li>
<li><a href="#sec4-5">4.5 Specifications for packed vessels</a>
<ul>
<li><a href="#sec4-5-1">4.5.1 Installation of rings</a></li>
<li><a href="#sec4-5-2">4.5.2 Unpacked piping in vessels</a></li>
<li><a href="#sec4-5-3">4.5.3 Determination of ring level</a></li>
<li><a href="#sec4-5-4">4.5.4 Determination of glass volume fraction</a></li>
<li><a href="#sec4-5-5">4.5.5 Allowable volume of solution in a vessel packed with rings</a></li>
</ul></li>
<li><a href="#sec4-6">4.6 Maximum specified concentrations of fissile solutions</a></li>
<li><a href="#sec4-7">4.7 Maintenance inspection</a>
<ul>
<li><a href="#sec4-7-1">4.7.1 Settling</a></li>
<li><a href="#sec4-7-2">4.7.2 Fissile solids</a></li>
<li><a href="#sec4-7-3">4.7.3 Physical properties</a></li>
<li><a href="#sec4-7-4">4.7.4 Inspection intervals</a></li>
</ul></li>
</ul></li>
<li><a href="#sec5">5. Safety in Conducting Subcritical Neutron Multiplication Measurements In Situ</a>
<ul>
<li><a href="#sec5-1">5.1 Introduction</a></li>
<li><a href="#sec5-2">5.2 Scope</a></li>
<li><a href="#sec5-3">5.3 Administrative practices</a></li>
<li><a href="#sec5-4">5.4 Equipment criteria</a></li>
<li><a href="#sec5-5">5.5 Operational practices</a></li>
</ul></li>
<li><a href="#sec6">6. Nuclear Criticality Safety in the Storage of Fissile Materials</a>
<ul>
<li><a href="#sec6-1">6.1 Introduction</a></li>
<li><a href="#sec6-2">6.2 Scope</a></li>
<li><a href="#sec6-3">6.3 Nuclear criticality safety practices</a>
<ul>
<li><a href="#sec6-3-1">6.3.1 Administrative practices</a></li>
<li><a href="#sec6-3-2">6.3.2 Technical practices</a></li>
</ul></li>
<li><a href="#sec6-4">6.4 Parameters, limits, and conditions</a>
<ul>
<li><a href="#sec6-4-1">6.4.1 Unit mass limits</a></li>
<li><a href="#sec6-4-2">6.4.2 Moderation</a></li>
<li><a href="#sec6-4-3">6.4.3 Position of unit in cell</a></li>
<li><a href="#sec6-4-4">6.4.4 Other reflectors</a></li>
<li><a href="#sec6-4-5">6.4.5 Double batching</a></li>
<li><a href="#sec6-4-6">6.4.6 Vault pairs</a></li>
<li><a href="#sec6-4-7">6.4.7 Reduction factors</a></li>
<li><a href="#sec6-4-8">6.4.8 Aisles</a></li>
<li><a href="#sec6-4-9">6.4.9 Fissile material containment and shelving materials</a></li>
<li><a href="#sec6-4-10">6.4.10 Unit subcriticality</a></li>
<li><a href="#sec6-4-11">6.4.11 Unit spacing</a></li>
<li><a href="#sec6-4-12">6.4.12 Unit shape</a></li>
</ul></li>
<li><a href="#sec6-5">6.5 Other applications</a>
<ul>
<li><a href="#sec6-5-1">6.5.1 Commingling of dissimilar cells</a></li>
<li><a href="#sec6-5-2">6.5.2 Interpolation</a></li>
<li><a href="#sec6-5-3">6.5.3 Non-cubic cells</a></li>
<li><a href="#sec6-5-4">6.5.4 Position of unit in cell</a></li>
<li><a href="#sec6-5-5">6.5.5 Array shape</a></li>
<li><a href="#sec6-5-6">6.5.6 <sup>238</sup>Plutonium</a></li>
</ul></li>
</ul></li>
<li><a href="#sec7">7. Criteria for Nuclear Criticality Safety Controls in Operations with Shielding and Confinement</a>
<ul>
<li><a href="#sec7-1">7.1 Introduction</a></li>
<li><a href="#sec7-2">7.2 Scope</a></li>
<li><a href="#sec7-3">7.3 Criteria for adequate shielding and confinement</a>
<ul>
<li><a href="#sec7-3-1">7.3.1 Conditions</a></li>
<li><a href="#sec7-3-2">7.3.2 Adequacy of shielding and confinement</a>
<ul>
<li><a href="#sec7-3-2-1">7.3.2.1 Radiation dose</a></li>
<li><a href="#sec7-3-2-2">7.3.2.2 Shielding and confinement criterion</a></li>
<li><a href="#sec7-3-2-3">7.3.2.3 Structural integrity</a></li>
<li><a href="#sec7-3-2-4">7.3.2.4 Space in lieu of shielding</a></li>
</ul></li>
</ul></li>
<li><a href="#sec7-4">7.4 Criteria for adequate shielding and confinement</a>
<ul>
<li><a href="#sec7-4-1">7.4.1 Single contingency operation</a></li>
<li><a href="#sec7-4-2">7.4.2 Methods for unshielded facilities</a></li>
</ul></li>
</ul></li>
<li><a href="#sec8">8. Nuclear Criticality Control and Safety of Plutonium-Uranium Fuel Mixtures Outside Reactors</a>
<ul>
<li><a href="#sec8-1">8.1 Introduction</a></li>
<li><a href="#sec8-2">8.2 Scope</a></li>
<li><a href="#sec8-3">8.3 Nuclear criticality safety practices</a>
<ul>
<li><a href="#sec8-3-1">8.3.1 Administrative and technical practices</a></li>
<li><a href="#sec8-3-2">8.3.2 Homogeneity control</a></li>
</ul></li>
<li><a href="#sec8-4">8.4 Subcritical limits for uniform, homogeneous plutonium-uranium mixtures in water</a>
<ul>
<li><a href="#sec8-4-1">8.4.1 Homogeneous aqueous mixtures</a></li>
<li><a href="#sec8-4-2">8.4.2 Variation of subcritical limits with PuO<sub>2</sub> content</a></li>
<li><a href="#sec8-4-3">8.4.3 Dry and damp mixed-oxide powders</a></li>
<li><a href="#sec8-4-4">8.4.4 Limiting concentrations of plutonium in unlimited quantities of mixtures of the oxides and nitrates of plutonium and natural uranium</a></li>
</ul></li>
<li><a href="#sec8-5">8.5 Subcritical limits for mixed-oxide heterogeneous systems</a></li>
</ul></li>
<li><a href="#sec9">9. Use of Soluble Neutron Absorbers in Nuclear Facilities Outside Reactors</a>
<ul>
<li><a href="#sec9-1">9.1 Introduction</a></li>
<li><a href="#sec9-2">9.2 Scope</a></li>
<li><a href="#sec9-3">9.3 Administrative requirements and guidance</a>
<ul>
<li><a href="#sec9-3-1">9.3.1 Selection of a soluble neutron absorber</a></li>
<li><a href="#sec9-3-2">9.3.2 System design and system modifications</a></li>
<li><a href="#sec9-3-3">9.3.3 Nuclear criticality safety evaluations</a></li>
<li><a href="#sec9-3-4">9.3.4 Quality management program</a></li>
<li><a href="#sec9-3-5">9.3.5 Facility operation with soluble absorbers</a></li>
</ul></li>
</ul></li>
<li><a href="#sec10">10. Nuclear Criticality Control of Special Actinide Elements</a>
<ul>
<li><a href="#sec10-1">10.1 Introduction</a></li>
<li><a href="#sec10-2">10.2 Scope</a></li>
<li><a href="#sec10-3">10.3 Nuclear criticality safety practices</a></li>
<li><a href="#sec10-4">10.4 Single parameter limits for special actinide nuclides</a>
<ul>
<li><a href="#sec10-4-1">10.4.1 Non-fissile nuclides</a></li>
<li><a href="#sec10-4-2">10.4.2 Fissile nuclides</a></li>
<li><a href="#sec10-4-3">10.4.3 Diluted solutions</a></li>
<li><a href="#sec10-4-4">10.4.4 Operations with oxides</a></li>
</ul></li>
</ul></li>
<li><a href="#sec11">11. Criticality Safety Criteria for the Handling, Transportation, Storage, and Long term Waste Management of Reactor Fuel Outside Reactors</a>
<ul>
<li><a href="#sec11-1">11.1 Introduction</a></li>
<li><a href="#sec11-2">11.2 Scope</a></li>
<li><a href="#sec11-3">11.3 General safety criteria</a>
<ul>
<li><a href="#sec11-3-1">11.3.1 Process analysis</a></li>
<li><a href="#sec11-3-2">11.3.2 Pre-commencement</a></li>
<li><a href="#sec11-3-3">11.3.3 Neutron-absorbing materials</a></li>
<li><a href="#sec11-3-4">11.3.4 Composition and nuclear characteristics of fuel</a></li>
<li><a href="#sec11-3-5">11.3.5 Transport</a></li>
</ul></li>
<li><a href="#sec11-4">11.4 Criteria to establish subcriticality</a></li>
</ul></li>
<li><a href="#sec12">12. Administrative Practices for Nuclear Criticality Safety</a>
<ul>
<li><a href="#sec12-1">12.1 Introduction</a></li>
<li><a href="#sec12-2">12.2 Scope</a></li>
<li><a href="#sec12-3">12.3 Responsibilities</a>
<ul>
<li><a href="#sec12-3-1">12.3.1 Management responsibilities</a></li>
<li><a href="#sec12-3-2">12.3.2 Supervisory responsibilities</a></li>
<li><a href="#sec12-3-3">12.3.3 Nuclear criticality safety staff responsibilities</a></li>
</ul></li>
<li><a href="#sec12-4">12.4 Operating procedures</a></li>
<li><a href="#sec12-5">12.5 Process evaluation for nuclear criticality safety (nuclear criticality safety evaluation)</a></li>
<li><a href="#sec12-6">12.6 Materials control</a></li>
<li><a href="#sec12-7">12.7 Planned response to nuclear criticality accidents</a></li>
<li><a href="#sec12-8">12.8 Nuclear criticality safety program</a>
<ul>
<li><a href="#sec12-8-1">12.8.1 Minimum list of documents in support for a licensing submission on nuclear criticality safety</a></li>
<li><a href="#sec12-8-2">12.8.2 Content of nuclear criticality safety program</a></li>
</ul></li>
</ul></li>
<li><a href="#sec13">13. Nuclear Criticality Safety Training</a>
<ul>
<li><a href="#sec13-1">13.1 Introduction</a></li>
<li><a href="#sec13-2">13.2 Scope</a></li>
<li><a href="#sec13-3">13.3 Objective</a></li>
<li><a href="#sec13-4">13.4 Program responsibilities</a></li>
<li><a href="#sec13-5">13.5 Program structure</a></li>
<li><a href="#sec13-6">13.6 Program content</a>
<ul>
<li><a href="#sec13-6-1">13.6.1 Fission chain reactions and accident consequences</a></li>
<li><a href="#sec13-6-2">13.6.2 Neutron behaviour in fissioning systems</a></li>
<li><a href="#sec13-6-3">13.6.3 Criticality accident history</a></li>
<li><a href="#sec13-6-4">13.6.4 Response to criticality alarm signals</a></li>
<li><a href="#sec13-6-5">13.6.5 Control parameters</a></li>
<li><a href="#sec13-6-6">13.6.6 Policy and procedures</a></li>
</ul></li>
<li><a href="#sec13-7">13.7 Evaluation</a>
<ul>
<li><a href="#sec13-7-1">13.7.1 Training program</a></li>
<li><a href="#sec13-7-2">13.7.2 Personnel</a></li>
<li><a href="#sec13-7-3">13.7.3 Documentation</a></li>
</ul></li>
</ul></li>
<li><a href="#sec14">14. Use of Fixed Neutron Absorbers in Nuclear Facilities Outside Reactors</a>
<ul>
<li><a href="#sec14-1">14.1 Introduction</a></li>
<li><a href="#sec14-2">14.2 Scope</a></li>
<li><a href="#sec14-3">14.3 General safety considerations</a></li>
<li><a href="#sec14-4">14.4 Requirements and guidance</a>
<ul>
<li><a href="#sec14-4-1">14.4.1 Design</a></li>
<li><a href="#sec14-4-2">14.4.2 Safety evaluations</a></li>
<li><a href="#sec14-4-3">14.4.3 Verification and inspection</a></li>
</ul></li>
</ul></li>
<li><a href="#sec15">15. Nuclear Criticality Safety Based on Limiting and Controlling Moderators</a>
<ul>
<li><a href="#sec15-1">15.1 Introduction</a></li>
<li><a href="#sec15-2">15.2 Scope</a></li>
<li><a href="#sec15-3">15.3 Nuclear criticality safety practices</a>
<ul>
<li><a href="#sec15-3-1">15.3.1 Training program</a></li>
<li><a href="#sec15-3-2">15.3.2 Personnel</a></li>
</ul></li>
<li><a href="#sec15-4">15.4 Engineered practices for moderator control areas</a>
<ul>
<li><a href="#sec15-4-1">15.4.1 Moderator control area barriers</a></li>
<li><a href="#sec15-4-2">15.4.2 Equipment and containers</a></li>
<li><a href="#sec15-4-3">15.4.3 Penetrations</a></li>
<li><a href="#sec15-4-4">15.4.4 Fire prevention and suppression</a></li>
<li><a href="#sec15-6-5">15.4.5 Instrumentation and controls</a></li>
</ul></li>
</ul></li>
<li><a href="#sec16">16. Nuclear Criticality Accident Emergency Planning and Response</a>
<ul>
<li><a href="#sec16-1">16.1 Introduction</a></li>
<li><a href="#sec16-2">16.2 Scope</a></li>
<li><a href="#sec16-3">16.3 Responsibilities</a>
<ul>
<li><a href="#sec16-3-1">16.3.1 Management responsibilities</a></li>
<li><a href="#sec16-3-2">16.3.2 Technical staff responsibilities</a>
<ul>
<li><a href="#sec16-3-2-1">16.3.2.1 Planning</a></li>
<li><a href="#sec16-3-2-2">16.3.2.2 Emergency responses</a></li>
</ul></li>
</ul></li>
<li><a href="#sec16-4">16.4 Emergency response planning</a>
<ul>
<li><a href="#sec16-4-1">16.4.1 Evaluation</a></li>
<li><a href="#sec16-4-2">16.4.2 Emergency response plan</a></li>
<li><a href="#sec16-4-3">16.4.3 Equipment</a></li>
</ul></li>
<li><a href="#sec16-5">16.5 Evaluation</a>
<ul>
<li><a href="#sec16-5-1">16.5.1 Personnel in the immediate evacuation zone</a></li>
<li><a href="#sec16-5-2">16.5.2 Monitoring in adjacent areas</a></li>
<li><a href="#sec16-5-3">16.5.3 Monitoring at assembly stations</a></li>
<li><a href="#sec16-5-4">16.5.4 Further evacuation of non-emergency-response personnel</a></li>
<li><a href="#sec16-5-5">16.5.5 Exits</a></li>
<li><a href="#sec16-5-6">16.5.6 Identification of assembly stations</a></li>
<li><a href="#sec16-5-7">16.5.7 Evacuation route planning</a></li>
</ul></li>
<li><a href="#sec16-6">16.6 Re-entry, rescue, and stabilization</a>
<ul>
<li><a href="#sec16-6-1">16.6.1 Re-entry</a></li>
<li><a href="#sec16-6-2">16.6.2 Rescue</a></li>
<li><a href="#sec16-6-3">16.6.3 Stabilization</a></li>
</ul></li>
<li><a href="#sec16-7">16.7 Classroom training, exercises, and evacuation drills</a>
<ul>
<li><a href="#sec16-7-1">16.7.1 Classroom training</a></li>
<li><a href="#sec16-7-2">16.7.2 Exercises</a></li>
<li><a href="#sec16-7-3">16.7.3 Evacuation drills</a></li>
</ul></li>
<li><a href="#appA">Appendix A: Normal and Credible Abnormal Conditions</a></li>
<li><a href="#appB">Appendix B: Calculation Methods Yielding k<sub>eff</sub></a>
<ul>
<li><a href="#appB-1">B.1 Purpose</a></li>
<li><a href="#appB-2">B.2 Background</a></li>
<li><a href="#appB-3">B.3 Establishing the upper subcritical limit</a></li>
<li><a href="#appB-4">B.4 Ensuring practicality of compliance; upper subcritical limit</a></li>
<li><a href="#appB-5">B.5 Extending area (or areas) of applicability</a></li>
<li><a href="#appB-6">B.6 Validation report</a></li>
</ul></li>
<li><a href="#appC">Appendix C: Example: Validation of a Calculational Method</a>
<ul>
<li><a href="#appC-1">C.1 The problem</a></li>
<li><a href="#appC-2">C.2 The method</a></li>
<li><a href="#appC-3">C.3 Validation</a></li>
</ul></li>
<li><a href="#appD">Appendix D: Detector Placement</a>
<ul>
<li><a href="#appD-1">D.1 Introduction</a></li>
<li><a href="#appD-2">D.2 General considerations</a>
<ul>
<li><a href="#appD-2-1">D.2.1 Operability characteristics of the detection system</a></li>
<li><a href="#appD-2-2">D.2.2 Radiation field characterization of criticality accidents</a></li>
</ul></li>
<li><a href="#appD-3">D.3 Methods</a>
<ul>
<li><a href="#appD-3-1">D.3.1 <em>In situ source testing</em></a></li>
<li><a href="#appD-3-2">D.3.2 Simple hand calculations</a></li>
<li><a href="#appD-3-3">D.3.3 One-dimensional deterministic or Monte Carlo transport computations</a></li>
<li><a href="#appD-3-4">D.3.4 Two- and three-dimensional deterministic or Monte Carlo transport computations</a></li>
</ul></li>
</ul></li>
<li><a href="#appE">Appendix E: Fuel Unit Handling, Storage, and Transportationâ€”Criticality Safety Considerations</a>
<ul>
<li><a href="#appE-1">E.1 Fuel rod parameters</a></li>
<li><a href="#appE-2">E.2 Fuel unit configuration</a></li>
<li><a href="#appE-3">E.3 Array parameters</a></li>
<li><a href="#appE-4">E.4 Moderator conditions</a></li>
<li><a href="#appE-5">E.5 Reflector and interaction conditions</a></li>
</ul></li>
<li><a href="#appF">Appendix F: Moderators and Moderating Materials</a>
<ul>
<li><a href="#appF-1">F.1 Typical moderating materials</a></li>
<li><a href="#appF-2">F.2 Potential sources of moderators</a></li>
<li><a href="#appF-3">F.3 Moderator content measurements</a></li>
<li><a href="#appF-4">F.4 Examples of engineered barriers to control moderators</a></li>
</ul></li>
<li><a href="#appG">Appendix G: Example of a Partial Description of a Nuclear Criticality Safety Program for a Fuel Storage Facility</a>
<ul>
<li><a href="#appG-1">G.1 Template of contents of nuclear criticality safety program</a></li>
<li><a href="#appG-2">G.2 Identifying the requirements</a>
<ul>
<li><a href="#appG-2-a">Sample text</a></li>
</ul></li>
<li><a href="#appG-3">G.3 Sample procedure for criticality accident sequence assessment</a>
<ul>
<li><a href="#appG-3-1">G.3.1 Assessing the effectiveness of the CSC</a></li>
<li><a href="#appG-3-2">G.3.2 Risk score evaluation summary</a></li>
<li><a href="#appG-3-3">G.3.3 Accident summary and likelihood index assignment for Table G-1</a></li>
<li><a href="#appG-3-3-a">Accident Sequence / Identifier</a></li>
<li><a href="#appG-3-3-b">Initiating Event (a1) and Enabling Event (a2) (if applicable)</a></li>
<li><a href="#appG-3-3-c">Preventive Safety Parameter 1 or CSC 1 Failure/Success (b)</a></li>
<li><a href="#appG-3-3-d">Preventive Safety Parameter 2 or CSC 2 Failure/Success (c)</a></li>
<li><a href="#appG-3-3-e">Preventive Safety Parameters or CSC Failure/Success (d1, d2...)</a></li>
<li><a href="#appG-3-3-f">Likelihood Index / Risk Score* T uncontrolled/ controlled (e)</a></li>
<li><a href="#appG-3-3-g">Consequence Evaluation Reference</a></li>
<li><a href="#appG-3-3-h">Comments and Recommendations</a></li>
<li><a href="#appG-3-4">G.3.4 Determination of failure frequency index numbers in Table G-2</a></li>
<li><a href="#appG-3-5">G.3.5 Determination of failure probability index numbers in Table G-3</a></li>
<li><a href="#appG-3-6">G.3.6 Determining management measures for CSC</a></li>
<li><a href="#appG-3-7">G.3.7 Risk-informed review of CSC</a></li>
</ul></li>
</ul></li>
<li><a href="#glossary">Glossary</a></li>
<li><a href="#ref">References</a></li>
</ul>  </div>  <div className="clear"></div>
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
<h3 id="sec1-1">1.1 Purpose</h3>  <p>This regulatory document sets out requirements for nuclear criticality safety and provides guidance on how those requirements may be met. It provides information for the prevention of criticality accidents in the handling, storage, processing, and transportation of fissionable materials and the long term management of nuclear waste.</p>
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
<h3 id="sec1-2">1.2 Scope</h3>  <p>This document clarifies the minimum physical constraints and limits on fissionable materials in order to ensure nuclear criticality safety during the construction, operation, decommissioning, or abandonment of the licensed facility and with respect to the handling, storing, processing and transportation of certain fissionable materials.</p>  <p>This document also provides guidance on how the requirements for nuclear criticality safety may be met. The information set out in this document applies to operations with fissionable materials outside nuclear reactors, except for the assembly of these materials under controlled conditions (such as in critical experiments).</p>
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
<h3 id="sec1-3">1.3 Relevant legislation</h3>  <p>The following provisions of the <em>Nuclear Safety and Control Act</em> (NSCA) and the regulations made under the NSCA are relevant to this document:</p>
<ul>
<li>subsection 24(4) of the NSCA states that "No licence may be issued, renewed, amended or replaced unless, in the opinion of the Commission, the applicant (a) is qualified to carry on the activity that the licence will authorize the licensee to carry on; and (b) will, in carrying on that activity, make adequate provision for the protection of the environment, the health and safety of persons and the maintenance of national security and measures required to implement international obligations to which Canada has agreed"</li>
<li>subsection 24(5) of the NSCA states that "A licence may contain any term or condition that the Commission considers necessary for the purposes of this Act"</li>
<li>paragraphs 3(1)(i) and (j) of <em>the General Nuclear Safety and Control Regulations</em> state that "An application for a licence shall contain the following information:<br />
(i) a description and the results of any test, analysis or calculation performed to substantiate the information included in the application;<br />
(j) the name, quantity, form, origin and volume of any radioactive waste or hazardous waste that may result from the activity to be licensed, including waste that may be stored, managed, processed or disposed of at the site of the activity to be licensed, and the proposed method for managing and disposing of that waste"</li>
<li>paragraph 12(1)(f) of the <em>General Nuclear Safety and Control Regulations</em> states that "Every licensee shall...(f) take all reasonable precautions to control the release of radioactive nuclear substances or hazardous substances within the site of the licensed activity and into the environment as a result of the licensed activity"</li>
<li>subsection 13(1) of the <em>Radiation Protection Regulations</em> states that "Every licensee shall ensure that the effective dose received by and committed to a person described in column 1 of an item of the table to this subsection, during the period set out in column 2 of that item, does not exceed the effective dose set out in column 3 of that item"</li>
<li>paragraph 5(i) of the <em>Class I Nuclear Facilities Regulations</em> states that "An application for a licence to construct a Class I nuclear facility shall contain the following information...: (i) the effects on the environment and the health and safety of persons that may result from the construction, operation and decommissioning of the nuclear facility..."</li>
<li>paragraph 6(h) of the <em>Class I Nuclear Facilities Regulations</em> states that "An application for a licence to operate a Class I nuclear facility shall contain the following information...: (h) the effects on the environment and the health and safety of persons that may result from the operation and decommissioning of the nuclear facility..."</li>
<li>paragraph 7(f) of the <em>Class I Nuclear Facilities Regulations</em> states that "An application for a licence to decommission a Class I nuclear facility shall contain the following information...: (f) the effects on the environment and the health and safety of persons that may result from the decommissioning"</li>
<li>paragraphs 14(3)(c) and (d) of the <em>Class I Nuclear Facilities Regulations</em> state that "Every licensee who decommissions a Class I nuclear facility shall keep a record of<br />
(c) the manner in which and the location at which any nuclear or hazardous waste is managed, stored, disposed of or transferred;<br />
(d) the name and quantity of any radioactive nuclear substances, hazardous substances and radiation that remain at the nuclear facility after completion of the decommissioning"</li>
<li>subsection 2(1) of the <em>Packaging and Transport of Nuclear Substances Regulations, 2015</em> states that these regulations "apply to the packaging and transport of<br />
(a) prescribed equipment; and<br />
(b)  nuclear substances, including
<ol className="list-bullet-none">
<li>(i) the design, production, use, inspection, maintenance and repair of packaging and packages for nuclear substances, and</li>
<li>(ii) the preparation, consigning, handling, loading, carriage, storage during transport, receipt at final destination and unloading of packages and unpacking of their contents"</li>
</ol></li>
</ul>  <p>The <em>Nuclear Fuel Waste Act</em> and the <em>Nuclear Liability and Compensation Act</em> may also apply to operations with fissionable materials.</p>
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
<h3 id="sec1-4">1.4 National and international standards</h3>  <p>Key principles and elements used in developing this document are consistent with national and international standards.</p>  <p>Some sections of this document are extracted from the following standards from the American National Standards Institute (ANSI), with permission of the publisher, the American Nuclear Society (ANS). Where necessary, the text has been adapted to make it applicable to Canada&rsquo;s international obligations to the International Atomic Energy Agency (IAEA) and consistent with CNSC&rsquo;s regulatory requirements. These sections are independent (not all sections apply to any one facility), and are presented in order according to the ANSI/ANS numerical identification, as follows:</p>
<ol>
<li>ANSI/ANS-8.1-2014, <em>Nuclear Criticality Safety in Operations with Fissionable Materials Outside Reactors</em></li>
<li>ANSI/ANS-8.3-1997 (reaffirmed in 2012), <em>Criticality Accident Alarm System</em></li>
<li>ANSI/ANS-8.5-1996 (reaffirmed in 2012), <em>Use of Borosilicate-Glass Raschig Rings as a Neutron Absorber in Solutions of Fissile Material</em></li>
<li>ANSI/ANS-8.6-1983 (reaffirmed in 2010), <em>Safety in Conducting Subcritical Neutron-Multiplication Measurements In Situ</em></li>
<li>ANSI/ANS-8.7-1998 (reaffirmed in 2007), <em>Nuclear Criticality Safety in the Storage of Fissile Materials</em></li>
<li>ANSI/ANS-8.10-2015, <em>Criteria for Nuclear Criticality Safety Controls in Operations With Shielding and Confinement</em></li>
<li>ANSI/ANS-8.12-1987 (reaffirmed in 2016), <em>Nuclear Criticality Control and Safety of Plutonium-Uranium Fuel Mixtures Outside Reactors</em></li>
<li>ANSI/ANS-8.14-2004 (Reaffirmed in 2011), <em>Use of Soluble Neutron Absorbers in Nuclear Facilities Outside Reactors</em></li>
<li>ANSI/ANS-8.15-2014, <em>Nuclear Criticality Safety Control of Selected Actinide Nuclides</em></li>
<li>ANSI/ANS-8.17-2004 (reaffirmed in 2014), <em>Criticality Safety Criteria for the Handling, Storage, and Transportation of LWR Fuel Outside Reactors</em></li>
<li>ANSI/ANS-8.19-2014, <em>Administrative Practices for Nuclear Criticality Safety</em></li>
<li>ANSI/ANS-8.20-1991 (reaffirmed in 2015), <em>Nuclear Criticality Safety Training</em></li>
<li>ANSI/ANS-8.21-1995 (reaffirmed in 2011), <em>Use of Fixed Neutron Absorbers in Nuclear Facilities Outside Reactors</em></li>
<li>ANSI/ANS-8.22-1997 (Reaffirmed in 2011), <em>Nuclear Criticality Safety Based on Limiting and Controlling Moderators</em></li>
<li>ANSI/ANS-8.23-2007 (reaffirmed in 2012), <em>Nuclear Criticality Accident Emergency Planning and Response</em></li>
<li>ANSI/ANS-8.24-2007 (reaffirmed in 2012), <em>Validation of Neutron Transport Methods for Nuclear Criticality Safety Calculations</em></li>
</ol>  <p>This document is consistent with:</p>
<ol>
<li>IAEA Safety Standards, <em>Safety of Conversion Facilities and Uranium Enrichment Facilities</em>, IAEA SSG-5, 2010</li>
<li>IAEA Safety Standards, <em>Safety of Nuclear Fuel Cycle Facilities Safety Requirements</em>, IAEA NS-5 (Rev. 1), 2014 [1]</li>
<li>IAEA Safety Standards, <em>Safety of Uranium Fuel Fabrication Facilities</em>, IAEA SSG-6, 2010 [2]</li>
<li>IAEA Safety Standards Series No. GS-R-2, <em>Preparedness and Response for a Nuclear or Radiological Emergency, Safety Requirements</em>, 2002 [3]</li>
<li>Health Canada, <em>Canadian Guidelines for Intervention during a Nuclear Emergency</em>, H46-2/03-326E, 2003 [4]</li>
<li>CSA Group, CSA Standard N292.2-13, <em>Interim dry storage of irradiated fuel</em> [5]</li>
<li>CSA Group, CSA Standard N292.1-16, <em>Wet storage of irradiated fuel and other radioactive materials</em> [6]</li>
<li>ISO Standard 1709, <em>Nuclear energy &ndash; Fissile materials &ndash; Principles of criticality safety in storing, handling, and processing</em>, 1995 (reviewed in 2011) [7]</li>
<li>ISO Standard 7753, <em>Nuclear energy &ndash; Performance and testing requirements for criticality detection and alarm systems</em>, 1987 (reviewed in 2011) [8]</li>
<li>ISO Standard 11320, <em>Nuclear criticality safety &ndash; Emergency preparedness and response</em>, 2011</li>
<li>ISO Standard 14943, <em>Nuclear fuel technology &ndash; Administrative criteria related to nuclear criticality safety</em>, 2004 (reviewed in 2013) [9]</li>
<li>IEC Standard 60860, <em>Radiation Protection Instrumentation &ndash; Warning Equipment for Criticality Accidents</em>, 2014 [10]</li>
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
<div id="2"></div>
<h2 id="sec2">2. Nuclear Criticality Safety in Operations with Fissionable Materials Outside Reactors</h2>  <p>Some parts of this section are extracted from ANSI/ANS-8.1-2014, <em>Nuclear Criticality Safety in Operations with Fissionable Materials Outside Reactors</em>, with permission of the publisher, the American Nuclear Society. The text may have been adapted to make it applicable to Canada&rsquo;s international obligations to IAEA and consistent with CNSC&rsquo;s regulatory requirements.</p>
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
<h3 id="sec2-1">2.1 Introduction</h3>  <p>Operations with some fissionable materials introduce risks of a criticality accident resulting in a release of radiation that can be lethal to nearby personnel. However, experience has shown that extensive operations can be performed safely and economically when proper precautions are exercised. The few criticality accidents that have occurred show frequency and severity rates far below those typical of non nuclear accidents.</p>  <p>This favourable record can be maintained only by continued adherence to good operating practices such as those embodied in this document; however, the document, by itself, cannot establish safe processes in an absolute sense.</p>  <p>Good safety practices should recognize economic considerations, but the protection of operating personnel and the public must be the dominant consideration.</p>
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
<h3 id="sec2-2">2.2 Scope</h3>  <p>Generalized basic criteria are presented and limits are specified for some single fissionable units of simple shape containing <sup>233</sup>U, <sup>235</sup>U, or <sup>239</sup>Pu but not for multiunit arrays.</p>  <p>Criteria are stated for establishing the validity and areas of applicability of any calculational method used in assessing nuclear criticality safety.</p>  <p>This section does not include the details of administrative controls, the design of processes or equipment, the description of instrumentation for process control, nor detailed criteria to be met in transporting fissionable materials.</p>
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
<h3 id="sec2-3">2.3 Nuclear criticality safety practices</h3>  <p>Operations with fissionable materials shall meet the requirements and follow the recommendations of this document.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="2.3.1"></div>
<h4 id="sec2-3-1">2.3.1 Categorization of operations with fissionable materials</h4>  <h5 id="sec2-3-1-1">2.3.1.1	Exempted quantity of fissionable materials</h5>  <p>An exempted quantity of fissionable materials in the licensed site is defined as an inventory of fissionable materials, as follows:</p>
<ol>
<li>less than 100 g of <sup>233</sup>U, or <sup>235</sup>U, or <sup>239</sup>Pu, or of any combination of these three isotopes in fissionable material combined in any proportion; or</li>
<li>an unlimited quantity of natural or depleted uranium or natural thorium, if no other fissionable materials nor significant quantities of graphite, heavy water, beryllium, or other moderators more effective than light water are allowed in the licensed site; or</li>
<li>less than 200 kg in total of natural or depleted uranium or natural thorium if some other fissionable materials are present in the licensed site, but the total amount of fissile nuclides in those fissionable materials is less than 100 g</li>
</ol>  <p>Licensed sites operating with exempted quantities of fissionable materials are exempt from the requirements and recommendations of this document.</p>
<h5 id="sec2-3-1-2">2.3.1.2	Small quantity of fissionable materials</h5>  <p>A small quantity of fissionable materials in the licensed site is defined as an inventory of fissionable materials, which:</p>
<ol>
<li>exceeds the exempt limits listed in section 2.3.1.1; but</li>
<li>does not exceed the following limits:
<ul>
<li>500 g of <sup>233</sup>U, or 700 g of <sup>235</sup>U, or 450 g of <sup>239</sup>Pu, or 450 g of any combination of these three isotopes. These limits apply to operations with plutonium, <sup>233</sup>U, or uranium enriched in <sup>233</sup>U or <sup>235</sup>U. These limits do not apply if significant quantities of graphite, heavy water, beryllium, or other moderators more effective than light water are present; or</li>
<li>80% of the appropriate smallest critical mass</li>
</ul></li>   </ol>  <p>This document is partially applicable, as further specified in section 2.3.1.4, to licensed sites operating with small quantities of fissionable materials.</p>
<h5 id="sec2-3-1-3">2.3.1.3	Large quantity of fissionable materials</h5>  <p>A large quantity of fissionable materials in the licensed site is defined as an inventory of fissionable materials that exceeds the limits listed in section 2.3.1.2.</p>  <p>This document is applicable to licensed sites operating with large quantities of fissionable materials.</p>  <p>Note that a licensed site containing a large quantity of fissionable materials may be subject to the <em>Nuclear Liability and Compensation Act</em>.</p>
<h5 id="sec2-3-1-4">2.3.1.4	Nuclear criticality safety program relative to categorization</h5>  <p>A nuclear criticality safety program shall be developed and maintained in the licensed site to meet the CNSC nuclear criticality safety requirements and to support its safe operation. The extent of the program depends on the category of operations with fissionable materials:</p>
<ol>
<li>licensed sites involved in operations with small quantities of fissionable materials, as defined in section 2.3.1.2, shall develop and maintain a reduced-scope program based on the applicable sections of this document, taking into account that the requirements of sections 2.3.2.2, 2.3.2.9, 3, 11, 12.5, and 12.7 are not applicable. The program shall ensure that the entire process remains subcritical such that inadvertent criticality cannot occur.</li>
<li>licensed sites involved in activities with large quantities of fissionable materials, as defined in section 2.3.1.3, shall develop and maintain a full-scope program based on the applicable sections of this document and the CNSC requirements. Characteristics of a full-scope program are described in section 12.8 of this document.</li>
</ol>  <p>Applicability of the criticality safety program to separate areas of the licensed site should be based on the categorizations in section 2.3.1.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="2.3.2"></div>
<h4 id="sec2-3-2">2.3.2	Program management practices</h4>  <h5 id="sec2-3-2-1">2.3.2.1	Responsibilities</h5>  <p>Management shall clearly establish responsibility for nuclear criticality safety. Supervisors should be made as responsible for nuclear criticality safety as they are for production, development, research, or other functions. Each individual, regardless of position, shall be made aware that nuclear criticality safety in their work area is ultimately their responsibility. This may be accomplished through training and periodic retraining of all operating and support personnel. Nuclear criticality safety does not differ in any intrinsic way from industrial safety, and good managerial practices apply to both.</p>  <p>Management shall provide personnel skilled in the interpretation of data pertinent to nuclear criticality safety, and familiar with operations, to serve as advisors to supervisors. These specialists should be, to the extent practicable, administratively independent of process supervisors.</p>  <p>Management shall establish the criteria to be satisfied by nuclear criticality safety controls. Distinction may be made between shielded and unshielded facilities, and the criteria may be less stringent when adequate shielding and confinement assure the protection of personnel.</p>
<h5 id="sec2-3-2-2">2.3.2.2	Process analysis</h5>  <p>Before a new operation with fissionable material is begun, or before an existing operation is changed, it shall be determined that the entire process will be subcritical under both normal and credible abnormal conditions that have frequency of occurrence equal to or greater than 10<sup>-6</sup> per year [5, 6]. Examples of such conditions are given in appendix A.</p>
<ol>
<li>An adequate upper subcritical limit (USL) shall be established and justified such that:
<ul>
<li>if calculational methods are applied to predict neutron multiplication factors for safety assessment:
<ol className="list-lower-roman">
<li>the USL is calculated using the formulas presented in appendix B, and</li>
<li>a minimum administrative margin of subcriticality, as presented in the formulas for calculating the USL, is 5% in neutron multiplication factor [5, 6]</li>
</ol></li>
<li>if calculational methods are not applied to predict neutron multiplication factors for safety assessment:
<ol className="list-lower-roman">
<li>the USL is 500 g of <sup>233</sup>U, or 700 g of <sup>235</sup>U, or 450 g of <sup>239</sup>Pu, or 450 g of any combination of these three isotopes. These limits shall be applied only when the surrounding materials, including other nearby fissionable materials, can be shown to increase the effective multiplication factor (k<sub>eff</sub>) no more than it would be increased if the unit were enclosed by a contiguous layer of water of unlimited thickness; or</li>
<li>otherwise, the minimum administrative margin of subcriticality shall be 20% of the critical mass [5, 6]</li>
</ol></li>
</ul></li>
<li>The established adequate USL shall be maintained under all normal and credible abnormal conditions, and:
<ul>
<li>all credible abnormal conditions having frequency of occurrence equal to or more than 10<sup>-6</sup>/year are identified and assessed; and</li>
<li>the frequency of occurrence for the identified credible abnormal conditions is clearly demonstrated using quantitative or semi-quantitative methods (see appendix G)</li>
</ul></li>
<li>It shall be demonstrated that adequate mitigation measures are in place such that off site consequences of a representative nuclear criticality accident, as calculated from the start of the accident, do not violate criteria established as a trigger for a temporary public evacuation by the following international standard and national guidance [5, 6]:
<ul>
<li>IAEA Safety Standards Series No. GS-R-2, <em>Preparedness and Response for a Nuclear or Radiological Emergency, Safety Requirements</em>, Annex III, Subsection III 2 [3]</li>
<li>Health <em>Canada, Canadian Guidelines for Intervention during a Nuclear Emergency</em>, H46-2/03-326E [4]</li>
</ul></li>
<li>In item 3, above (the list of requirements to demonstrate the mitigation of off site consequences of a representative nuclear criticality accident), the licensee may exclude any of the following independent sets of abnormal conditions:
<ul>
<li>an external event that leads to a criticality accident with frequency of occurrence less than 10<sup>-7</sup>/year; or</li>
<li>process deviations for which there is a convincing argument, given by physical laws, that they are not possible, or are unquestionably extremely unlikely; the validity of the argument must not depend on any feature of the design or materials controlled by the facilityâ€™s system of criticality safety controls, or management measures</li>
</ul></li>
</ol>  <p>Considering the impact of external events on the facility, the frequency of occurrence of the impact should be calculated by evaluating the vulnerable impact areas; i.e., areas where fissionable materials are processed or stored. To evaluate the consequences of the impact or the adequacy of the design to resist the impact, only realistic impact scenarios should be considered, which might require the knowledge of various factors such as angle of impact for aircraft crash, etc [2]. If there are no historic records or other scientific grounds to estimate impact of a natural phenomena event at the low limit frequency of occurrence (10<sup>-7</sup>/year), the impact of the event that is the most severe reasonably possible (sometimes referred to as probable maximum natural phenomena event) may be treated as the bounding event.</p>
<h5 id="sec2-3-2-3">2.3.2.3	Written procedures</h5>  <p>Operations to which nuclear criticality safety is pertinent shall be governed by written procedures.</p>  <p>All persons participating in these operations shall understand and be familiar with the procedures.</p>  <p>The procedures shall specify all parameters that they are intended to control. They should be such that no single, inadvertent departure from a procedure can cause a criticality accident.</p>
<h5 id="sec2-3-2-4">2.3.2.4	Materials control</h5>  <p>The movement of fissionable material shall be controlled. Appropriate material labelling, signs, and area posting shall be maintained specifying material identification and all limits on parameters subject to procedural control.</p>
<h5 id="sec2-3-2-5">2.3.2.5	Equipment control</h5>  <p>Prior to starting a new or modified process or processing line, it shall be ascertained that all equipment is consistent in dimension and material with the assumptions made to ensure subcriticality [7].</p>
<h5 id="sec2-3-2-6">2.3.2.6	Quality management program</h5>  <p>A quality management (QM) program that meets the applicable requirements of ANSI/ASME-NQA-1-2015, <em>Quality Assurance Requirements for Nuclear Facility Applications</em> [11], CSA-N286-12, <em>Management system requirements for nuclear facilities</em> [12], or equivalent, shall be established to implement the activities specified in this document.</p>  <p>Records shall be maintained according to the QM program to demonstrate that the facility and its equipment were constructed according to the design specifications. The licensee shall define a formal design change procedure as part of their QM program, so that all modifications made to the facility or to the facility&rsquo;s processes or procedures during all stages of the facility life cycle are accurately recorded and their impact assessed with respect to nuclear criticality safety [1]. These QM measures are expected to be an integral part of the facility&rsquo;s overall QM program.</p>  <p>Throughout this document, "quality assurance" is considered to be one element of the quality management system.</p>
<h5 id="sec2-3-2-7">2.3.2.7	Operational control</h5>  <p>Deviations from procedures and unforeseen alterations in process conditions that affect nuclear criticality safety shall be reported to management and shall be investigated promptly. When available, the information about incidents and events in other installations of the same type shall also be investigated and lessons learnt shall be considered. Possible improvements in criticality safety practices or equipment shall be considered and action shall be taken to prevent recurrence [1, 7].</p>
<h5 id="sec2-3-2-8">2.3.2.8	Operational reviews</h5>  <p>Operations shall be reviewed frequently (at least annually) to verify that procedures are being followed and that process conditions have not been altered in any way that would affect the applicable nuclear criticality safety evaluation (NCSE). These reviews shall be conducted in consultation with operating personnel, by individuals who are knowledgeable in nuclear criticality safety and who, to the extent practicable, are not immediately responsible for the operation.</p>
<h5 id="sec2-3-2-9">2.3.2.9	Emergency procedures</h5>  <p>Emergency procedures shall be prepared and approved by management. On site and off site organizations that are expected to respond to emergencies shall be made aware of conditions that might be encountered, and they should be assisted in preparing suitable procedures governing their responses.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="2.3.3"></div>
<h4 id="sec2-3-3">2.3.3	Technical practices</h4>  <p>The effective multiplication factor (k<sub>eff</sub>) of a system depends on the mass, distribution, and nuclear properties of the fissionable materials and all other materials with which they are associated.</p>  <p>Nuclear criticality safety is achieved by controlling one or more parameters of the system within subcritical limits and by allowances for process contingencies. Control may be exercised through:</p>
<ol>
<li>physical restraints, such as confining a solution to a cylindrical vessel with diameter no greater than a specified value, or controlling the spacing between material and equipment [7]</li>
<li><p>use of instrumentation</p>
<p>During normal operations, a number of parameters shall be measured and controlled to prevent a criticality, such as keeping a fissile concentration below a specified value by devices that measure concentration and prevent its buildup in a chemical system. The measuring devices shall be of high integrity and calibrated against known standards [1].</p></li>
<li>chemical means, such as prevention of conditions that allow precipitation</li>
<li>reliance on a natural or credible course of events, such as a process whose nature is to keep the density of uranium oxide less than a specified fraction of maximum theoretical density</li>
<li>administrative procedures, such as requiring that a mass not exceed an established limit</li>
<li>other means</li>
</ol>
<h5 id="sec2-3-3-1">2.3.3.1	Controlled parameters</h5>  <p>All controlled parameters and their limits shall be specified. The influence of variations in these parameters on the k<sub>eff</sub> of the system shall be understood.</p>
<h5 id="sec2-3-3-2">2.3.3.2	Availability and reliability</h5>  <p>The licensee shall ensure that the necessary levels of availability and reliability are maintained for nuclear criticality safety controls, as established by the process analysis for normal and credible abnormal conditions.</p>  <p>The following principles shall be incorporated as appropriate to attain the required availability and reliability of engineered nuclear criticality safety controls [1].</p>  <h6 id="sec2-3-3-2-a">Double contingency principle</h6>  <p>Process designs should incorporate sufficient factors of safety to require at least two unlikely, independent, and concurrent changes in process conditions before a criticality accident is possible.</p>  <h6 id="sec2-3-3-2-b">Redundancy</h6>  <p>The principle of redundancy should be applied as an important design principle for improving the reliability of systems important to safety. The design shall ensure that no single failure can result in a loss of capability of engineered nuclear criticality safety controls to perform their intended safety function. Multiple sets of equipment that cannot be tested individually should not be considered as redundant. The adopted degree of redundancy shall also reflect the potential for undetected failures that could degrade reliability [1].</p>  <h6 id="sec2-3-3-2-c">Independence</h6>  <p>The principle of independence (as functional isolation, or as physical separation by distance, barriers, or layout of process equipment or components) shall be applied, as appropriate, to enhance the reliability of systems, in particular with respect to common cause failures. Multiple sets of equipment that cannot be tested individually should not be considered as redundant. The adopted degree of redundancy shall also reflect the potential for undetected failures that could degrade reliability [1].</p>  <h6 id="sec2-3-3-2-d">Diversity</h6>  <p>The principle of diversity can enhance reliability and reduce the potential for common cause failures. It should be adopted on safety significant systems wherever appropriate and reasonably practicable [1].</p>  <h6 id="sec2-3-3-2-e">Fail-safe design</h6>  <p>Where practicable, the fail safe principle should be applied to components important to safety; i.e., if a system or component should fail, the facility should pass into a safe state without a requirement to initiate any protective or mitigating actions [1].</p>  <h6 id="sec2-3-3-2-f">Testability</h6>  <p>All engineered nuclear criticality safety controls shall be designed and arranged so that:</p>
<ol>
<li>their safety function can be adequately inspected and tested</li>
<li>the engineered nuclear criticality safety controls can be maintained, as appropriate before commissioning and at suitable and regular intervals thereafter in accordance with their importance to safety</li>
</ol>  <p>If it is not practicable to provide adequate testability of a component, the safety analysis should take into account the possibility of undetected failures of such equipment [1].</p>
<h5 id="sec2-3-3-3">2.3.3.3	Geometry control</h5>  <p>Where practicable, reliance should be placed on equipment design in which dimensions are limited rather than on administrative controls. Full advantage may be taken of any nuclear characteristics of the process materials and equipment. All dimensions and nuclear properties on which reliance is placed shall be verified prior to the beginning of operations, and control shall be exercised to maintain them.</p>  <p>Process areas where criticality control vessels contain significant quantities of nuclear materials in liquid form should be equipped with alarms to prevent overfilling and with drip trays of appropriate capacity and critically safe configuration [1].</p>
<h5 id="sec2-3-3-4">2.3.3.4	Neutron absorbers</h5>  <p>Reliance may be placed on neutron-absorbing materials, such as cadmium and boron that are incorporated in process materials, or in equipment, or in both. Control shall be exercised to maintain their continued presence with the intended distributions and concentrations. Where practicable, the incorporation of solid neutron absorbers as permanent, integral parts of equipment is more desirable than the use of neutron absorbers in solution, because of the processing controls required to demonstrate the continued presence of dissolved absorbers.</p>  <p>Neutron-absorbing materials are most effective for neutrons of thermal energy and care shall be exercised to ensure that their effectiveness is not seriously reduced in operational or accident conditions, which might change the fissile assembly into one characterized by neutrons of intermediate or high energy [7].</p>
<h5 id="sec2-3-3-5">2.3.3.5	Subcritical limit</h5>  <p>Where applicable data are available, subcritical limits shall be established on bases derived from experiments, with adequate allowance for uncertainties in the data. In the absence of directly applicable experimental measurements, the limits may be derived from calculations made by a method shown by comparison with experimental data to be valid in accordance with section 2.3.4.</p>
<h5 id="sec2-3-3-6">2.3.3.6	Neutron reflection</h5>  <p>Where applicable, neutron reflection shall be considered as a parameter for criticality control. The most effective neutron reflector commonly encountered in handling and in processing fissionable material is water of thickness sufficient to yield maximum nuclear reactivity. However, careful consideration shall be given to systems where significant thicknesses of other common structural materials (e.g., wood, concrete, steel), which may be more effective neutron reflectors than water, may be present. For some situations, the reflection provided by personnel may be important [7] (the material content of the human body can provide significant moderating capability [appendix F]).</p>
<h5 id="sec2-3-3-7">2.3.3.7	Neutron interaction</h5>  <p>Consideration shall be given to neutron interaction between units when at least two units containing fissionable material are present. It is possible to reduce neutron interaction to acceptable proportions either by spacing units, by insertion of suitable neutron-moderating and absorbing materials between units, or by some combination of these methods [7].</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="2.3.4"></div>
<h4 id="sec2-3-4">2.3.4	Validation d&#39;une méthode de calcul</h4>  <p>Des méthodes de calcul convenables pour déterminer l&#39;état de sous-criticité d&#39;un système doivent être sélectionnées et justifiées conformément à une norme d&#39;assurance de la qualité pertinente. Les méthodes varient considérablement quant à leur fondement et leur forme, et chacune trouve une application dans la vaste gamme des situations qui se présentent en ce qui a trait à la sûreté-criticité nucléaire. Cependant, la procédure générale à suivre dans l&#39;établissement de la validité est commune à toutes. Se reporter à l&#39;annexe C pour un exemple de validation d&#39;une méthode de calcul.</p>  <h5 id="sec2-3-4-1">2.3.4.1	Établissement du biais</h5>  <p>Le biais doit être établi en corrélant les résultats d&#39;expériences critiques et d&#39;expériences exponentielles avec les résultats obtenus pour ces mêmes systèmes grâce à la méthode de calcul validée.</p>  <p>Dans les cas où aucune donnée expérimentale n&#39;est disponible, l&#39;établissement du biais pour une méthode de calcul est impossible et ces exigences ne peuvent être respectées. La validation d&#39;une méthode de calcul en comparant les résultats avec ceux d&#39;une autre méthode de calcul, par exemple, est inacceptable.</p>  <p>Souvent, la corrélation est exprimée en valeurs de k<sub>eff</sub> calculées pour les systèmes expérimentaux à l&#39;état critique, et dans ce cas, le biais est l&#39;écart entre les valeurs calculées de k<sub>eff</sub> et l&#39;unité. Toutefois, d&#39;autres états physiques et paramètres peuvent être utilisés; en l&#39;absence de données d&#39;expériences de criticité, les résultats obtenus à l&#39;aide de techniques permettant de déterminer dans quelle mesure un système est sous-critique peuvent être utilisés. Le biais a pour but de normaliser une méthode pour l&#39;ensemble des domaines d&#39;applicabilité, de manière à ce qu&#39;elle prévoie les conditions critiques à l&#39;intérieur des limites d&#39;incertitude dans le biais. De façon générale, ni le biais ni son incertitude ne sont constants; les deux devraient être fonction de la composition et d&#39;autres variables.</p>
<h5 id="sec2-3-4-2">2.3.4.2	Tendances du biais</h5>  <p>Le domaine (ou les domaines) d&#39;applicabilité d&#39;une méthode de calcul peuvent être étendus au-delà de la gamme de conditions expérimentales pour lesquelles le biais est établi, en ayant recours aux tendances du biais. Lorsque cette extension est grande, la méthode doit être complétée par d&#39;autres méthodes de calcul, afin de fournir une meilleure estimation du biais, et plus particulièrement de son incertitude dans la zone (ou les zones) élargies, et de démontrer l&#39;uniformité des résultats calculés.</p>
<h5 id="sec2-3-4-3">2.3.4.3	Incertitudes liées au biais</h5>  <p>Les incertitudes liées au biais doivent contenir des tolérances liées aux incertitudes dans les conditions expérimentales, des tolérances pour le manque d&#39;exactitude et de précision dans la méthode de calcul et des tolérances pour l&#39;élargissement du domaine (ou des domaines) d&#39;applicabilité. Après avoir établi les tolérances pour l&#39;exactitude et la précision de la méthode et pour le biais et les incertitudes, une marge relativement au keff ou à un autre paramètre de corrélation doit être appliquée. Celle-ci doit être suffisamment grande pour s&#39;assurer que les conditions (calculées par la méthode et considérées sous-critiques par la valeur de cette marge) seront réellement sous-critiques. Comme le biais et ses incertitudes, cette marge peut varier en fonction de la composition et d&#39;autres variables.</p>
<h5 id="sec2-3-4-4">2.3.4.4	Dépendance face aux programmes informatiques</h5>  <p>Si la méthode de calcul utilise un programme informatique, des vérifications doivent être faites pour confirmer que les opérations mathématiques sont exécutées tel que prévu. Tout changement dans le programme informatique doit être suivi d&#39;une nouvelle confirmation précisant que les opérations mathématiques sont réalisées comme prévu.</p>
<h5 id="sec2-3-4-5">2.3.4.5	Conformité avec les mesures</h5>  <p>Les propriétés nucléaires, comme les sections efficaces, qui sont utilisées dans la méthode de calcul doivent être conformes avec les mesures expérimentales de ces propriétés.</p>
<h5 id="sec2-3-4-6">2.3.4.6	Rapport de validation</h5>  <p>Un rapport de validation écrit doit être préparé. Ce rapport doit :</p>
<ol>
<li>décrire la méthode avec suffisamment de détails, de clarté et sans ambiguïté, pour permettre une reproduction indépendante des résultats</li>
<li>identifier les données expérimentales et énumérer les paramètres dérivés des données afin de les utiliser dans la validation de la méthode</li>
<li>préciser le domaine (ou les domaines) d&#39;applicabilité</li>
<li>énoncer le biais et les incertitudes pour le domaine (ou les domaines) d&#39;applicabilité</li>
<li>préciser la marge de sous-criticité pour le domaine (ou les domaines) d&#39;applicabilité, y compris la justification de la pertinence de la marge de sous-criticité</li>
<li>préciser la limite supérieure de sous-criticité (voir annexe B pour les renseignements détaillés)</li>
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
<div id="2.4"></div>
<h3 id="sec2-4">2.4 Single-parameter limits for fissile nuclides</h3>  <p>If single-parameter limits for 233U, 235U, and plutonium given in sections 2.4.1, 2.4.2, 2.4.3, and 2.4.4 are used, an adequate administrative margin of subcriticality shall be applied to ensure compliance with section 2.3.2.2.</p>  <p>These limits were calculated by methods satisfying the requirements of section 2.3.4. A limit shall be applied only when the surrounding materials, including other nearby fissionable materials, can be shown to increase the effective multiplication factor (k<sub>eff</sub>) no more than it would be increased if the unit were enclosed by a contiguous layer of water of unlimited thickness. A limit may be applied to a mixture of fissile nuclides by considering all components of the mixture to be the one with the most restrictive limit.</p>  <p>Process specifications shall incorporate margins to protect against uncertainties in process variables and against a limit being accidentally exceeded.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="2.4.1"></div>
<h4 id="sec2-4-1">2.4.1 Uniform aqueous solutions</h4>  <p>Any one of the limits of Table 2-1 is applicable provided a uniform aqueous solution is maintained. It is therefore implied that the concentrations of the saturated solutions are not exceeded.</p>  <p>The <sup>239</sup>Pu limits apply to mixtures of plutonium isotopes, provided that the concentration of <sup>240</sup>Pu exceeds that of <sup>241</sup>Pu and provided that <sup>241</sup>Pu is considered to be <sup>239</sup>Pu in computing mass or concentration. Less restrictive limits are provided in section 2.5.3 for plutonium isotopic compositions containing appreciable concentrations of <sup>240</sup>Pu.</p>  <p>The limit on atomic ratio is equivalent to the limit on solution concentration, but the ratio limit may also be applied to non aqueous solutions, regardless of the chemical form of the fissile nuclide.</p>
<table className="table table-striped">  <caption className="text-left">Table 2-1: Single-Parameter Limits for Uniform Aqueous Solutions of Fissile Nuclides [ANSI/ANS-8.1]</caption>   <tr>
<th rowspan="2" className="text-center text-center">Parameter</th>
<th colSpan="5" className="text-center">Subcritical limit for fissile solute</th>   </tr>   <tr>
<th><sup>233</sup>UO<sub>2</sub>F<sub>2</sub><br />
[13]</td>
<th><sup>233</sup>UO<sub>2</sub>(NO<sub>3</sub>)<sub>2</sub><br />
[13]</td>
<th><sup>235</sup>UO<sub>2</sub>F<sub>2</sub><br />
[14]</td>
<th><sup>235</sup>UO<sub>2</sub>(NO<sub>3</sub>)<sub>2</sub><br />
[14]</td>
<th><sup>239</sup>Pu(NO<sub>3</sub>)<sub>4</sub><br />
[14]</td>   </tr>   <tr>
<td className="text-left">Mass of fissile nuclide, kg</td>
<td className="text-center">0.54</td>
<td className="text-center">0.55</td>
<td className="text-center">0.76</td>
<td className="text-center">0.78</td>
<td className="text-center">0.48</td>   </tr>   <tr>
<td className="text-left">Diameter of cylinder of solution, cm</td>
<td className="text-center">10.5</td>
<td className="text-center">11.7</td>
<td className="text-center">13.7</td>
<td className="text-center">14.4</td>
<td className="text-center">15.4</td>   </tr>   <tr>
<td className="text-left">Thickness of slab of solution, cm</td>
<td className="text-center">2.5</td>
<td className="text-center">3.1</td>
<td className="text-center">4.4</td>
<td className="text-center">4.9</td>
<td className="text-center">5.5</td>   </tr>   <tr>
<td className="text-left">Volume of solution, L</td>
<td className="text-center">2.8</td>
<td className="text-center">3.6</td>
<td className="text-center">5.5</td>
<td className="text-center">6.2</td>
<td className="text-center">7.3</td>   </tr>   <tr>
<td className="text-left">Concentration of fissile nuclide, g/L</td>
<td className="text-center">10.8</td>
<td className="text-center">10.8</td>
<td className="text-center">11.6</td>
<td className="text-center">11.6</td>
<td className="text-center">7.3</td>   </tr>   <tr>
<td className="text-left">Atomic ratio of hydrogen to fissile nuclide <sup>(a)</sup></td>
<td className="text-center">2390</td>
<td className="text-center">2390</td>
<td className="text-center">2250</td>
<td className="text-center">2250</td>
<td className="text-center">3630</td>   </tr>   <tr>
<td className="text-left">Areal density of fissile nuclide, g/cm<sup>2</sup></td>
<td className="text-center">0.35</td>
<td className="text-center">0.35</td>
<td className="text-center">0.40</td>
<td className="text-center">0.40</td>
<td className="text-center">0.25</td>   </tr>  </table>  <p><sup>(a)</sup> Lower limit</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="2.4.2"></div>
<h4 id="sec2-4-2">2.4.2 Aqueous mixtures</h4>  <p>The areal densities of Table 2-1 are independent of the chemical compound and are valid for mixtures that have density gradients, provided the areal densities are uniform.</p>  <p>The subcritical mass limits for <sup>233</sup>U, <sup>235</sup>U, and <sup>239</sup>Pu in mixtures that might not be uniform are 0.50, 0.70, and 0.45 kg, respectively, and are likewise independent of compound [13, 14, 15].</p>  <h5 id="sec2-4-2-1">2.4.2.1	Enrichment limits</h5>  <p>Table 2-2 contains <sup>235</sup>U enrichment limits for uranium compounds mixed homogeneously with water with no limitations on mass or concentration.</p>
<table className="">  <caption className="text-left"> Table 2-2: <sup>235</sup>U Enrichment Limits for Uranium Mixed Homogeneously with Water [ANSI/ANS-8.1]</caption>   <tr>
<th className="text-center">Compound</th>
<th className="text-center">Subcritical Limit: wt% <sup>235</sup>U&nbsp;[14]</th>   </tr>   <tr>
<td className="text-left">Uranium metal</td>
<td className="text-center">0.93</td>   </tr>   <tr>
<td className="text-left">UO<sub>2</sub>, U<sub>3</sub>O<sub>8</sub>, or UO<sub>3</sub></td>
<td className="text-center">0.96</td>   </tr>   <tr>
<td className="text-left">UO<sub>2</sub>(NO<sub>3</sub>)<sub>2</sub></td>
<td className="text-center">1.96</td>   </tr>   </table>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="2.4.3"></div>
<h4 id="sec2-4-3">2.4.3 Metallic units</h4>  <p>The enrichment limit for uranium and the mass limits given in Table 2-3 apply to a single piece having no concave surfaces. They may be extended to an assembly of pieces, provided that there is no interspersed moderation.</p>  <p>The <sup>233</sup>U and <sup>235</sup>U limits apply to mixtures of either isotope with <sup>234</sup>U, <sup>236</sup>U, or <sup>238</sup>U provided that <sup>234</sup>U is considered to be <sup>233</sup>U or <sup>235</sup>U, respectively, in computing mass [14]. The <sup>239</sup>Pu limits apply to isotopic mixtures of plutonium, provided that the concentration of <sup>240</sup>Pu exceeds that of <sup>241</sup>Pu and all isotopes are considered to be <sup>239</sup>Pu in computing mass [15]. Density limits may be adjusted for isotopic composition.</p>
<table className="table table-striped">  <caption className="text-left">Table 2-3: Single-Parameter Limits for Metal Units [ANSI/ANS-8.1]</caption>   <tr>
<th rowspan="2" className="text-center text-center">Parameter</th>
<th colSpan="3" className="text-center">Subcritical limit</th>   </tr>   <tr>
<th><sup>233</sup>U&nbsp;[13]</th>
<th><sup>235</sup>U&nbsp;[14]</th>
<th><sup>239</sup>Pu&nbsp;[15</th>   </tr>   <tr>
<td className="text-left">Mass of fissile nuclide, kg</td>
<td className="text-center">6.0</td>
<td className="text-center">20.1</td>
<td className="text-center">5.0</td>   </tr>   <tr>
<td className="text-left">Cylinder diameter, cm</td>
<td className="text-center">4.5</td>
<td className="text-center">7.3</td>
<td className="text-center">4.4</td>   </tr>   <tr>
<td className="text-left">Slab thickness, cm</td>
<td className="text-center">0.38</td>
<td className="text-center">1.3</td>
<td className="text-center">0.65</td>   </tr>   <tr>
<td className="text-left">Uranium enrichment, wt% <sup>235</sup>U</td>
<td className="text-center">&ndash;</td>
<td className="text-center">5.0</td>
<td className="text-center">&ndash;</td>   </tr>   <tr>
<td className="text-left">Maximum density for which mass and dimension limits are valid, g/cm<sup>3</sup></td>
<td className="text-center">18.65</td>
<td className="text-center">18.81</td>
<td className="text-center">19.82</td>   </tr>   </table>   <br />
<table className="table table-header small">  <caption className="text-left">Table 2-4: Single-parameter limits for oxides containing no more than 1.5% water by weight at full density [ANSI/ANS 8.1]</caption>
<tr>
<th>Parameter</th>
<th><sup>233</sup>UO<sub>2</sub>&nbsp;[13]</th>
<th><sup>233</sup>U<sub>3</sub>O<sub>8</sub>&nbsp;[13]</th>
<th><sup>233</sup>UO<sub>3</sub>&nbsp;[13]</th>
<th><sup>235</sup>UO<sub>2</sub>&nbsp;[14]</th>
<th><sup>235</sup>U<sub>3</sub>O<sub>8</sub>&nbsp;[14]</th>
<th><sup>235</sup>UO<sub>3</sub>&nbsp;[14]</th>
<th><sup>239</sup>PuO<sub>2</sub>&nbsp;[15]</th>
</tr>
<tr>
<td className="text-left">Mass of fissile nuclide, kg</td>
<td className="text-center">10.1</td>
<td className="text-center">13.4</td>
<td className="text-center">15.2</td>
<td className="text-center">32.3</td>
<td className="text-center">44.0</td>
<td className="text-center">51.2</td>
<td className="text-center">10.2</td>
</tr>
<tr>
<td className="text-left">Mass of oxide, <sup>(a)</sup> kg</td>
<td className="text-center">11.7</td>
<td className="text-center">16.0</td>
<td className="text-center">18.7</td>
<td className="text-center">37.2</td>
<td className="text-center">52.8</td>
<td className="text-center">62.6</td>
<td className="text-center">11.5</td>
</tr>
<tr>
<td className="text-left">Cylinder diameter, cm</td>
<td className="text-center">7.2</td>
<td className="text-center">9.0</td>
<td className="text-center">9.9</td>
<td className="text-center">11.6</td>
<td className="text-center">14.6</td>
<td className="text-center">16.2</td>
<td className="text-center">7.2</td>
</tr>
<tr>
<td className="text-left">Slab thickness, cm</td>
<td className="text-center">0.8</td>
<td className="text-center">1.1</td>
<td className="text-center">1.3</td>
<td className="text-center">2.9</td>
<td className="text-center">4.0</td>
<td className="text-center">4.6</td>
<td className="text-center">1.4</td>
</tr>
<tr>
<td className="text-center">Maximum bulk density <sup>(b)</sup> for which limits are valid, g/cm<sup>3</sup></td>
<td headers="SParameter_2"><img src="/images/gd-327/gd_327-e-2.gif" width="104" height="34" alt="" /></td>
<td headers="SParameter_3"><img src="/images/gd-327/gd_327-e-3.gif" width="109" height="34" alt="" /></td>
<td headers="SParameter_4"><img src="/images/gd-327/gd_327-e-4.gif" width="109" height="34" alt="" /></td>
<td headers="SParameter_5"><img src="/images/gd-327/gd_327-e-5.gif" width="109" height="34" alt="" /></td>
<td headers="SParameter_6"><img src="/images/gd-327/gd_327-e-6.gif" width="109" height="34" alt="" /></td>
<td headers="SParameter_7"><img src="/images/gd-327/gd_327-e-7.gif" width="110" height="34" alt="" /></td>
<td headers="SParameter_8"><img src="/images/gd-327/gd_327-e-8.gif" width="108" height="34" alt="" /></td>
</tr>  </table>  <p><sup>(a)</sup> These values include the mass of any associated moisture up to the limiting value of 1.5% by weight.<br />
<sup>(b)</sup> w represents the quantity of water, in wt %, in the oxide.</p>  <br />
<table className="table table-header small">  <caption className="text-left">Table 2-5: Single-parameter limits for oxides Containing no more than 1.5% water by weight at no more than half density <sup>(a)</sup> [ANSI/ANS 8.1]</caption>
<tr>
<th>Parameter</th>
<th><sup>233</sup>UO<sub>2</sub>&nbsp;[13]</th>
<th><sup>233</sup>U<sub>3</sub>O<sub>8</sub>&nbsp;[13]</th>
<th><sup>233</sup>UO<sub>3</sub>&nbsp;[13]</th>
<th><sup>235</sup>UO<sub>2</sub>&nbsp;[14]</th>
<th><sup>235</sup>U<sub>3</sub>O<sub>8</sub>&nbsp;[14]</th>
<th><sup>235</sup>UO<sub>3</sub>&nbsp;[14]</th>
<th><sup>239</sup>PuO<sub>2</sub>&nbsp;[15]</th>
</tr>
<tr>
<td className="text-left">Mass of fissile nuclide, kg</td>
<td className="text-center">23.4</td>
<td className="text-center">30.5</td>
<td className="text-center">34.7</td>
<td className="text-center">88</td>
<td className="text-center">122</td>
<td className="text-center">142</td>
<td className="text-center">27</td>
</tr>
<tr>
<td className="text-left">Mass of oxide, <sup>(b)</sup> kg</td>
<td className="text-center">27.0</td>
<td className="text-center">36.6</td>
<td className="text-center">42.4</td>
<td className="text-center">102</td>
<td className="text-center">146</td>
<td className="text-center">174</td>
<td className="text-center">30</td>
</tr>
<tr>
<td className="text-left">Cylinder diameter, cm</td>
<td className="text-center">11.9</td>
<td className="text-center">14.8</td>
<td className="text-center">16.3</td>
<td className="text-center">20.4</td>
<td className="text-center">26.0</td>
<td className="text-center">28.8</td>
<td className="text-center">12.6</td>
</tr>
<tr>
<td className="text-left">Slab thickness, cm</td>
<td className="text-center">1.6</td>
<td className="text-center">2.2</td>
<td className="text-center">2.6</td>
<td className="text-center">5.8</td>
<td className="text-center">8.0</td>
<td className="text-center">9.3</td>
<td className="text-center">2.8</td>
</tr>  </table>  <p><sup>(a)</sup> These are half the maximum bulk densities of Table&nbsp;2-4.<br />
<sup>(b)</sup> These values include the mass of any associated moisture up to the limiting value of 1.5% by weight.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="2.4.4"></div>
<h4 id="sec2-4-4">2.4.4 Oxides</h4>  <p>The limits in Tables 2-4 and 2-5 apply only if the oxide contains no more than 1.5% water by weight. The mass limits apply to a single piece having no concave surfaces. They may be extended to an assembly of pieces, provided that there is no additional interspersed moderation.</p>  <p>The mass limit is given equivalently as mass of nuclide and as mass of oxide (including moisture). It is emphasized that the limits in Tables 2-4 and 2-5 are valid only under the specified bulk density restrictions. Note that, particularly for UO<sub>3</sub>, material densities in excess of the full densities of Table 2-4 may be possible and hence that the limits of Table 2-4 may not be valid for highly compacted oxides. With water content limited to 1.5%, the enrichment limit of Table 2-2 for uranium oxides is increased to 3.2% <sup>235</sup>U.</p>
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
<h3 id="sec2-5">2.5 Multiparameter control</h3>  <p>Although the single-parameter limits are adequate for many purposes, they are inconveniently and uneconomically small for many others. Simultaneous limitation of two or more parameters results in a less restrictive limit for the one of interest.</p>  <p>If multi-parameter limits for <sup>233</sup>U, <sup>235</sup>U, and plutonium given in sections 2.5.1, 2.5.2, 2.5.3, and 2.5.4 are used, an adequate administrative margin of subcriticality shall be applied to ensure compliance with section 2.3.2.2.</p>  <p>A few particularly useful examples are given in Subsections 2.5.1 through 2.5.4. All were calculated by methods satisfying section 2.3.4. These limits shall be applied only when the surrounding materials can be shown to increase the effective multiplication factor (k<sub>eff</sub>) no more than it would be increased if the unit were enclosed by a contiguous layer of water of unlimited thickness. General guidance for multiparameter control may be found in the technical literature [16, 17, 18, 19].</p>  <p>Note that process specifications shall incorporate margins to protect against uncertainties in process variables and against a limit being accidentally exceeded.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="2.5.1"></div>
<h4 id="sec2-5-1">2.5.1 Uranium metal- and uranium oxide- water mixtures at low <sup>235</sup>U enrichment</h4>  <p>An application of multiparameter control is control of both the <sup>235</sup>U enrichment of uranium and one of the parameters of section 2.4. Parameter limits [20] applicable to aqueous systems containing uranium metal or uranium oxide (UO<sub>2</sub>), regardless of the size and shape of metal or oxide pieces, are specified as functions of enrichment in Tables VI-VIII of [20] which give, respectively, the mass of <sup>235</sup>U, the cylinder diameter, the slab thickness, the volume, and the areal density.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="2.5.2"></div>
<h4 id="sec2-5-2">2.5.2 Aqueous uranium solutions at low <sup>235</sup>U enrichment</h4>  <p>A similar application of multiparameter control is control of both <sup>235</sup>U enrichment and one of the parameters of Table 2-1, together with the maintenance of a uniform aqueous solution. Table 2-6 lists parameter limits for uniform aqueous solutions of uranium where the enrichment is controlled within the stated limit. Concentrations of saturated solutions, which are here taken to be 5 molar for UO<sub>2</sub>F<sub>2</sub> solutions and 2.5 molar for UO<sub>2</sub>(NO<sub>3</sub>)2 solutions, shall not be exceeded.</p>
<table className="table table-striped">  <caption className="text-left">Table 2-6: Limits for uniform aqueous solutions of low-enriched uranium [14]</caption>   <tr>
<th rowspan="2" className="text-center text-center">Parameter</th>
<th rowspan="2" className="text-center text-center">Enrichment, wt% <sup>235</sup>U</th>
<th colSpan="2" className="text-center">Subcritical limit</th>   </tr>   <tr>
<th className="text-center">UO<sub>2</sub>F<sub>2</sub></th>
<th className="text-center">UO<sub>2</sub>(NO<sub>3</sub>)<sub>2</sub></th>   </tr>   <tr>
<td rowspan="5" className="text-left text-center">Mass, kg <sup>235</sup>U</td>
<td className="text-center">10.0</td>
<td className="text-center">1.07</td>
<td className="text-center">1.47</td>   </tr>   <tr>
<td className="text-center">5.0</td>
<td className="text-center">1.64</td>
<td className="text-center">3.30</td>   </tr>   <tr>
<td className="text-center">4.0</td>
<td className="text-center">1.98</td>
<td className="text-center">6.50</td>   </tr>   <tr>
<td className="text-center">3.0</td>
<td className="text-center">2.75</td>
<td className="text-center"><sup>(b)</sup></td>   </tr>   <tr>
<td className="text-center">2.0</td>
<td className="text-center">8.00</td>
<td className="text-center">(b)</sup></td>   </tr>   <tr>
<td rowspan="5" className="text-left text-center">Cylinder diameter, cm</td>
<td className="text-center">10.0</td>
<td className="text-center">20.1</td>
<td className="text-center">25.2</td>   </tr>   <tr>
<td className="text-center">5.0</td>
<td className="text-center">26.6</td>
<td className="text-center">42.7</td>   </tr>   <tr>
<td className="text-center">4.0</td>
<td className="text-center">30.2</td>
<td className="text-center">58.6</td>   </tr>   <tr>
<td className="text-center">3.0</td>
<td className="text-center">37.4</td>
<td className="text-center"><sup>(b)</sup></td>   </tr>   <tr>
<td className="text-center">2.0</td>
<td className="text-center">63.0</td>
<td className="text-center"><sup>(b)</sup></td>   </tr>   <tr>
<td rowspan="5" className="text-left text-center">Slab thickness, cm</td>
<td className="text-center">10.0</td>
<td className="text-center">8.3</td>
<td className="text-center">11.9</td>   </tr>   <tr>
<td className="text-center">5.0</td>
<td className="text-center">12.6</td>
<td className="text-center">23.4</td>   </tr>   <tr>
<td className="text-center">4.0</td>
<td className="text-center">15.1</td>
<td className="text-center">33.7</td>   </tr>   <tr>
<td className="text-center">3.0</td>
<td className="text-center">20.0</td>
<td className="text-center"><sup>(b)</sup></td>   </tr>   <tr>
<td className="text-center">2.0</td>
<td className="text-center">36.5</td>
<td className="text-center"><sup>(b)</sup></td>   </tr>   <tr>
<td rowspan="5" className="text-left text-center">Volume, L</td>
<td className="text-center">10.0</td>
<td className="text-center">14.8</td>
<td className="text-center">26.7</td>   </tr>   <tr>
<td className="text-center">5.0</td>
<td className="text-center">30.6</td>
<td className="text-center">111.0</td>   </tr>   <tr>
<td className="text-center">4.0</td>
<td className="text-center">42.7</td>
<td className="text-center">273.0</td>   </tr>   <tr>
<td className="text-center">3.0</td>
<td className="text-center">77.0</td>
<td className="text-center"><sup>(b)</sup></td>   </tr>   <tr>
<td className="text-center">2.0</td>
<td className="text-center">340.0</td>
<td className="text-center"><sup>(b)</sup></td>   </tr>   <tr>
<td rowspan="7" className="text-left text-center">Concentration, g U/L</td>
<td className="text-center">10.0</td>
<td className="text-center">123.0</td>
<td className="text-center">128.0</td>   </tr>   <tr>
<td className="text-center">5.0</td>
<td className="text-center">261.0</td>
<td className="text-center">283.0</td>   </tr>   <tr>
<td className="text-center">4.0</td>
<td className="text-center">335.0</td>
<td className="text-center">375.0</td>   </tr>   <tr>
<td className="text-center">3.0</td>
<td className="text-center">470.0</td>
<td className="text-center"><sup>(b)</sup></td>   </tr>   <tr>
<td className="text-center">2.88</td>
<td className="text-center"><sup>(b)</sup></td>
<td className="text-center">594.9 <sup>(a)</sup></td>   </tr>   <tr>
<td className="text-center">2.0</td>
<td className="text-center">770.0</td>
<td className="text-center"><sup>(b)</sup></td>   </tr>   <tr>
<td className="text-center">1.45</td>
<td className="text-center">1190.0 <sup>(a)</sup></td>
<td className="text-center"><sup>(b)</sup></td>   </tr>   </table>   <p><sup>(a)</sup>&nbsp;Saturated solution<br />   <sup>(b)</sup>&nbsp;Data not available</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="2.5.3"></div>
<h4 id="sec2-5-3">2.5.3	Uniform aqueous solutions of Pu(NO<sub>3</sub>)<sub>4</sub> containing <sup>240</sup>Pu</h4>  <p>Reliance on, and hence control of, the isotopic concentration of <sup>240</sup>Pu in plutonium permits greater limits for Pu(NO<sub>3</sub>)<sub>4</sub> solutions than are listed in Table 2-1. Where plutonium, in addition, is intimately mixed with natural uranium, limits are even greater. Limits for this case are included in section 8, <em>Nuclear Criticality Control and Safety of Plutonium-Uranium Fuel Mixtures Outside Reactors</em>. However, the amount of the increase is dependent on <sup>241</sup>Pu concentration.</p>
<table className="table table-striped">  <caption className="text-left">Table 2-7: Limits for uniform aqueous solutions of Pu(NO<sub>3</sub>)<sub>4</sub> Containing <sup>240</sup>Pu</caption>   <tr>
<th rowspan="2" className="text-center text-center">Parameter</th>
<th colSpan="3" className="text-center">Subcriticality Limit</th>   </tr>   <tr>
<th>&ge;5 wt% <sup>240</sup>Pu<br />
&le;1 wt% <sup>241</sup>Pu</th>
<th>&ge;15 wt% <sup>240</sup>Pu<br />
&le;6 wt% <sup>241</sup>Pu</th>
<th>&ge;26 wt% <sup>240</sup>Pu<br />
&le;15 wt% <sup>241</sup>Pu</th>   </tr>   <tr>
<td className="text-left">Mass, kg Pu</td>
<td className="text-center">0.57</td>
<td className="text-center">0.78</td>
<td className="text-center">1.02</td>   </tr>   <tr>
<td className="text-left">Cylinder diameter, cm</td>
<td className="text-center">17.4</td>
<td className="text-center">19.5</td>
<td className="text-center">21.3</td>   </tr>   <tr>
<td className="text-left">Slab thickness, cm</td>
<td className="text-center">6.7</td>
<td className="text-center">8.0</td>
<td className="text-center">9.2</td>   </tr>   <tr>
<td className="text-left">Volume, L</td>
<td className="text-center">10.0</td>
<td className="text-center">13.6</td>
<td className="text-center">17.2</td>   </tr>   <tr>
<td className="text-left">Concentration, g Pu/L</td>
<td className="text-center">7.8</td>
<td className="text-center">8.9</td>
<td className="text-center">10.2</td>   </tr>   <tr>
<td className="text-left">H/Pu, <sup>(a)</sup></td>
<td className="text-center">3400</td>
<td className="text-center">2980</td>
<td className="text-center">2600</td>   </tr>   <tr>
<td className="text-left">Areal density, g Pu/cm<sup>2</sup></td>
<td className="text-center">0.28</td>
<td className="text-center">0.34</td>
<td className="text-center">0.4</td>   </tr>   </table>   <p><sup>(a)</sup>&nbsp;Atomic ratio of hydrogen to plutonium</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="2.5.4"></div>
<h4 id="sec2-5-4">2.5.4	Aqueous mixtures of plutonium containing <sup>240</sup>Pu</h4>  <p>Subcritical mass limit for plutonium as PuO<sub>2</sub> in aqueous mixtures, which might be non-uniform, where <sup>240</sup>Pu and <sup>241</sup>Pu are subject to the three pairs of restrictions on isotope composition of Table 2-7, are, in increasing order of <sup>240</sup>Pu concentration, 0.53, 0.74, and 0.99 kg, respectively [15].</p>
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
<h2 id="sec3">3. Criticality Accident Alarm System</h2>  <p>Some parts of this section are extracted from ANSI/ANS-8.3-1997 (Reaffirmed in 2012), <em>Criticality Accident Alarm System</em>, with permission of the publisher, the American Nuclear Society. The text may have been adapted to make it applicable to Canada&rsquo;s international obligations to IAEA and consistent with CNSC&rsquo;s regulatory requirements.</p>
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
<h3 id="sec3-1">3.1 Introduction</h3>  <p>Guidance for the prevention of criticality accidents in the handling, storing, processing, and transporting of fissionable materials is presented in section 2 of this document. In most operations with fissionable materials the risk of inadvertent criticality is very low; however, this risk cannot be eliminated. Where a criticality accident may lead to an excessive radiation dose, it is important to provide a means of alerting personnel and a procedure for their prompt evacuation, or other protective actions to limit their exposure to radiation.</p>
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
<h3 id="sec3-2">3.2 Scope</h3>  <p>Section 3 (this section) applies to all operations involving fissionable materials in which inadvertent criticality can occur and cause personnel to receive an excessive radiation dose.</p>  <p>This section does not apply to detection of criticality events where no excessive radiation dose to personnel is credible, nor to nuclear reactors or critical experiments. This document does not include details of administrative actions or of emergency response actions that occur after alarm activation.</p>
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
<h3 id="sec3-3">3.3 General principles</h3>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.3.1"></div>
<h4 id="sec3-3-1">3.3.1 General</h4>  <p>The purpose of an alarm system is to reduce risk to personnel. Evaluation of the overall risk should recognize that hazards may result from false alarms and subsequent sudden interruption of operations and relocation of personnel.</p>  <p>Subject to the evaluation of the overall risk described above, a criticality alarm system meeting the requirements of this regulatory document shall be installed in areas where:</p>
<ol>
<li>inadvertent criticality can occur, and</li>
<li>excessive radiation dose to personnel is credible should the inadvertent criticality occur</li>
</ol>  <p>Where alarm systems are installed, emergency procedures shall be maintained. Guidance for the preparation of emergency plans is provided in section 16.</p>  <p>Process equipment used in areas from which immediate evacuation is required should be so designed that leaving the equipment does not introduce significant risk.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.3.2"></div>
<h4 id="sec3-3-2">3.3.2 Coverage</h4>  <h5 id="sec3-3-2-1">3.3.2.1	Evaluation of criticality alarm systems</h5>  <p>In view of the requirement of List Item 1 in section 3.3.1, the need for criticality alarm systems shall be evaluated:</p>
<ol>
<li>for all activities involving <sup>233</sup>U, <sup>235</sup>U, and <sup>239</sup>Pu, in which the inventory of fissionable materials (containing any of these three isotopes) exceeds 500 g of <sup>233</sup>U, 700 g of <sup>235</sup>U, 450 g of <sup>239</sup>Pu, or 450 g of any combination of these three isotopes</li>
<li>for all activities involving fissionable materials in which neutron moderators or reflectors more effective than light water are present, or unique material configurations exist such that critical mass requirements may be less than the subcritical mass limits listed above, or</li>
<li>for all activities in which inventory of fissionable materials exceeds 80% of the appropriate critical mass if subcritical mass limits listed above are not applicable, or not appropriate</li>
</ol>  <p>This evaluation shall be performed for all activities in which the inventory of fissionable materials in individual unrelated areas exceeds the subcritical mass limits noted above.</p>  <p>For this evaluation, individual areas may be considered unrelated when the boundaries between the areas are such that there can be no transfer of materials between areas [8], the minimum separation between material in adjacent areas is 10 cm, and the areal density of fissile material averaged over each individual area is less than 50 g/m<sup>2</sup>. This stipulation applies only to <sup>233</sup>U, <sup>235</sup>U, and <sup>239</sup>Pu.</p>
<h5 id="sec3-3-2-2">3.3.2.2	Installation of criticality alarm systems</h5>  <p>A criticality alarm system meeting the requirements of this section shall be installed in areas where personnel would be subject to an excessive radiation dose. For this purpose, the maximum fission yield integrated over the duration of the accident may be assumed not to exceed 2.0 x 10<sup>19</sup> fissions. The basis for a different maximum fission yield shall be documented.</p>  <p>If criticality accidents of lesser magnitude than the minimum accident of concern given in section 3.4.6 are of concern, then other detection methods (e.g., audible personnel dosimetry) should be considered. These other detection methods are not considered to be criticality alarm systems and are not covered by section 3 of this document.</p>
<h5 id="sec3-3-2-3">3.3.2.3	Detection of criticality accidents</h5>  <p>In areas in which criticality alarm coverage is required, a means shall be provided to detect a criticality accident and to signal that prompt protective action is required.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.3.3"></div>
<h4 id="sec3-3-3">3.3.3 Criticality alarm</h4>  <p>Criticality alarm signals shall be for prompt evacuation or other protective actions. The criticality alarm signals should be uniform throughout the system. The signals shall be distinctive from other signals or alarms that require a response different from the response necessary in the event of a criticality accident.</p>  <p>The signal generators shall be automatically and promptly actuated upon detection of a criticality accident.</p>  <p>After actuation, the signal generators shall continue to function as required by emergency procedures, even if the radiation falls below the alarm point, and at least long enough to allow people to reach their evacuation assembly points and perform the procedures to account for all personnel. Manual resets, with limited access, should be provided outside areas that require evacuation [8].</p>  <p>A means for manual actuation of the criticality alarm signal may be provided.</p>  <p>For all occupied areas where personnel protective action is required in the event of criticality accident detection, the number and placement of criticality alarm signal generators shall be such that the signals are adequate to notify personnel promptly throughout those areas.</p>  <p>The audio generators should produce an overall sound pressure level of at least 75 dB, but not less than 10 dB above the maximum ambient noise level typical of each area for which audio coverage is to be provided.</p>  <p>Because excessive noise levels can be injurious to personnel, the audio generators should not produce an A-weighted sound level in excess of 115 dB at the ear of an individual.</p>  <p>In areas with very high audio background or mandatory hearing protection, visual signals or other alarm means should be considered.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.3.4"></div>
<h4 id="sec3-3-4">3.3.4 Dependability</h4>  <p>Consideration shall be given to the avoidance of false alarms. This may be accomplished by providing reliable single detector channels or by requiring concurrent response of two or more detectors to initiate the alarm.</p>  <p>In redundant systems, failure of any single channel shall not prevent compliance with the detection criterion specified in section 3.4.6.</p>  <p>A means that will not cause an evacuation should be provided to test the response and performance of the alarm system [8].</p>  <p>Portable instruments may be used in special situations to augment an installed criticality accident alarm system. Examples of such situations include alarm system maintenance or testing, evacuation drills, activities in areas not normally occupied by personnel, or other special operations.</p>  <p>Where portable instruments are used to meet the intent of section 3 of this document, the usage shall be evaluated to determine appropriate criteria are met. Criteria for such use of portable instruments shall be specified in procedures.</p>  <p>Process areas in which activities will continue during power outages shall have emergency power supplies for alarm systems, or such activities shall be monitored continuously with portable instruments.</p>  <p>Adequate sensitivity of the alarm system to respond to the minimum accident of concern is addressed in section 3.4.7.</p>  <p>Detectors shall not fail to trigger an alarm when subjected to intense radiation exceeding 1000 Gy/h. Compliance with this provision may be demonstrated by a test of sample detectors or by a manufacturer&rsquo;s test of production samples [8].</p>
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
<h3 id="sec3-4">3.4 Criteria for system design</h3>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.4.1"></div>
<h4 id="sec3-4-1">3.4.1 Reliability</h4>  <p>The system shall be designed for high reliability and should use components that do not require frequent servicing (such as lubrication or cleaning).</p>  <p>The system should be designed to minimize the effects of non-use, deterioration, power surges, and other adverse conditions. The design of the system should be as simple as is consistent with the objectives of ensuring reliable actuation of the criticality alarm signal and avoidance of false alarms.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.4.2"></div>
<h4 id="sec3-4-2">3.4.2 System vulnerability</h4>  <p>All components of the system should be located or protected to minimize damage in case of fire, explosion, corrosive atmosphere, or other extreme conditions. The system should be designed to minimize the potential for failure (including false alarm) due to human error. Major system components should be labelled.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.4.3"></div>
<h4 id="sec3-4-3">3.4.3 Seismic tolerance</h4>  <p>The system should remain operational in the event of seismic shock equivalent to the site-specific design basis earthquake, or to the equivalent value specified by the National Building Code of Canada that applies to the structure.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.4.4"></div>
<h4 id="sec3-4-4">3.4.4 Failure warning</h4>  <p>The system should be designed to provide a visible or audible warning signal at some normally occupied location to indicate system malfunction or the loss of primary power.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.4.5"></div>
<h4 id="sec3-4-5">3.4.5 Response time</h4>  <p>The system shall be designed to produce the criticality alarm signal within one half second (0.5 s) of detector recognition of a criticality accident.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.4.6"></div>
<h4 id="sec3-4-6">3.4.6 Detection criterion</h4>  <p>A basic consideration in the design of a criticality accident alarm system is the definition of the lower magnitude of the event size to be detected, termed the "minimum accident of concern".</p>  <p>Criticality alarm systems shall be designed to respond immediately to the minimum accident of concern. In situations where there is only nominal shielding, the definition of minimum accident of concern provided in the glossary should be used. The basis for a different definition of minimum accident of concern shall be documented.</p>  <p>Document LA-13638 [21] describes nuclear criticality accidents that occurred during processing or handling of fissionable material. Consideration of these events resulted in the definition of the minimum accident of concern provided in the glossary.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.4.7"></div>
<h4 id="sec3-4-7">3.4.7 Sensitivity</h4>  <p>Criticality alarm systems shall be designed so that alarm actuation shall occur as a result of the minimum duration transient. It may be assumed that the minimum duration of the radiation transient is one millisecond (1 ms).</p>  <p>The alarm trip point shall be set low enough to detect the minimum accident of concern. The alarm trip point should be set high enough to minimize the probability of an alarm from sources other than criticality.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.4.8"></div>
<h4 id="sec3-4-8">3.4.8 Placement of detectors</h4>  <p>The spacing of detectors shall be consistent with the selected alarm trip point and with the detection criterion.</p>  <p>The location and spacing of detectors should be chosen to minimize the effect of shielding by massive equipment or materials. Shielding from low-density materials of construction, such as wood framing, thin interior walls, hollow brick tiles, etc., may be disregarded.</p>  <p>Appendix D provides examples of gamma and neutron detector placement.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.4.9"></div>
<h4 id="sec3-4-9">3.4.9 Interlocking with ventilation system</h4>  <p>Interlocking with the ventilation system should be provided for shutting off ventilation to prevent release of fission gases outside of the affected area. Consideration should be given that shutting off ventilation does not generate other safety hazards.</p>
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
<h3 id="sec3-5">3.5 Testing</h3>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.5.1"></div>
<h4 id="sec3-5-1">3.5.1 Initial tests</h4>  <p>Initial tests, inspections, and checks of the system shall verify that the fabrication and installation were made in accordance with design plans and specifications.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.5.2"></div>
<h4 id="sec3-5-2">3.5.2 Special tests</h4>  <p>Following modifications or repairs, or events that call the system performance into question, there shall be tests and inspections adequate to demonstrate system operability.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.5.3"></div>
<h4 id="sec3-5-3">3.5.3 Response to radiation</h4>  <p>System response to radiation shall be measured periodically to confirm continuing instrument performance. The test interval should be determined on the basis of experience. In the absence of experience, tests should be performed at least monthly.</p>  <p>Records of tests shall be maintained. System designs may incorporate self-checking features to automate portions of this testing.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.5.4"></div>
<h4 id="sec3-5-4">3.5.4 Periodic tests</h4>  <p>The entire alarm system shall be tested periodically. Each signal generator should be tested at least annually. Field observations shall establish that criticality alarm signals are functional throughout all areas where personnel could be subject to an excessive radiation dose. All personnel in affected areas shall be notified before testing of the criticality alarm signals.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.5.5"></div>
<h4 id="sec3-5-5">3.5.5 Corrective action</h4>  <p>When tests reveal inadequate performance, corrective action shall be taken without unnecessary delay. If portable instrument use is required, the criteria of section 3.3.4 shall be met.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.5.6"></div>
<h4 id="sec3-5-6">3.5.6 Test procedures</h4>  <p>Procedures for system testing shall minimize both false alarms and inadvertent initiation of emergency response. The procedures shall require that the systems be returned to normal operation immediately following tests.</p>  <p>The IEC 60860 Standard, <em>Radiation Protection Instrumentation &ndash; Warning Equipment for Criticality Accidents</em> [10], holds useful information regarding electrical characteristics and testing procedures for alarm equipment. This document may be used as a guide in these areas.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.5.7"></div>
<h4 id="sec3-5-7">3.5.7 Records</h4>  <p>Records of tests and corrective actions for each system shall be maintained. These records provide information on system operability and help identify sources of failure.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.5.8"></div>
<h4 id="sec3-5-8">3.5.8 Out of service</h4>  <p>The licensee shall develop and implement out-of-service criteria for the nuclear criticality alarm system.</p>  <p>If the system is removed from service due to an unforeseen problem, the licensee shall immediately inform CNSC as to the cause of the removal and its expected duration.</p>  <p>If an adequate back up alarm system, as described in section 3.3.4, is in use during this unforeseen situation and the system will be returned to service within the timeframe specified in the out of service criteria, it may be acceptable to continue processes within the facility.</p>
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
<h3 id="sec3-6">3.6 Employee familiarization</h3>
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
<h4 id="sec3-6-1">3.6.1 Posted instructions</h4>  <p>Instructions regarding response to criticality alarm signals shall be posted at strategic locations within areas requiring alarm coverage.</p>
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
<h4 id="sec3-6-2">3.6.2 Training and criticality alarm drills</h4>  <p>Guidance for training of employees and visitors, and for conduct of criticality alarm drills, is provided in section 12, <em>Administrative Practices for Nuclear Criticality Safety</em>.</p>
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
<h2 id="sec4">4. Use of Borosilicate-Glass Raschig Rings as a Neutron Absorber in Solutions of Fissile Material</h2>  <p>Some parts of this section are extracted from ANSI/ANS-8.5-1996 (Reaffirmed in 2012), <em>Use of Borosilicate-Glass Raschig Rings as a Neutron Absorber in Solutions of Fissile Material</em>, with permission of the publisher, the American Nuclear Society. The text may have been adapted to make it applicable to Canada&rsquo;s international obligations to IAEA and consistent with CNSC&rsquo;s regulatory requirements.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.1"></div>
<h3 id="sec4-1">4.1 Introduction</h3>  <p>Raschig rings are used inside vessels and tanks containing solutions of fissile material to act as neutron absorbers and prevent a potential criticality accident.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.2"></div>
<h3 id="sec4-2">4.2 Scope</h3>  <p>Section 4 (this section) provides guidance for the use of borosilicate-glass Raschig rings as a neutron absorber for criticality control in ring-packed vessels containing solutions of <sup>235</sup>U, <sup>239</sup>Pu, or <sup>233</sup>U. The chemical and physical environment, properties of the rings and packed vessels, maintenance inspection procedures, and operating guidelines are specified.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.3"></div>
<h3 id="sec4-3">4.3 General requirements</h3>  <p>The purpose of Raschig rings in criticality safety applications is to assure subcriticality for normal and credible abnormal conditions over the operating life of a vessel. General requirements for use of Raschig rings for criticality control are:</p>
<ol>
<li>the nuclear criticality safety criteria of section 2, <em>Nuclear Criticality Safety in Operations with Fissionable Materials Outside Reactors</em>, shall be applied</li>
<li>the physical and chemical properties of Raschig rings specified in this document shall be verified before their initial use as a criticality control</li>
<li>subsequent to initial use, periodic verification shall assure that the required physical and chemical properties of the Raschig rings are maintained</li>
<li>the extent and frequency of the verification of the physical and chemical properties may be determined from a documented history of trends in these properties of the Raschig rings in the particular environment in which they are used; otherwise, the frequencies specified in section 4.7.4 shall apply at all times</li>
<li>methods for measuring the Raschig ring properties shall be documented and reviewed by qualified personnel for applicability and technical validity</li>
<li>Raschig rings shall be compatible with the chemical environment and physical conditions of the solutions in which they are immersed</li>
<li>use of Raschig rings in criticality safety applications other than those addressed by this document should be evaluated on a case-by-case basis</li>
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
<div id="4.3.1"></div>
<h4 id="sec4-3-1">4.3.1 Physical environment</h4>  <h5 id="sec4-3-1-1">4.3.1.1	Mechanical environment</h5>  <p>Raschig rings shall not be used in applications where credible agitation or movement of the rings can damage the rings sufficiently to compromise their effectiveness as a criticality control. Applications where the potential for such damage exists include but are not limited to evaporators, portable vessels, pulsed columns, and vessels equipped for sparging [22].</p>
<h5 id="sec4-3-1-2">4.3.1.2	Radiation environment</h5>  <p>Raschig rings shall not be used in fields of intense ionizing radiation. Maximum time-averaged radiation dose rates for rings shall be limited to the following [22]:</p>
<ol>
<li>gamma radiation: 10<sup>6</sup> Gy/y</li>
<li>beta radiation (energy &le;0.05 MeV): 10<sup>7</sup> Gy/y</li>
<li>beta radiation (energy > 0.05 MeV): 10<sup>6</sup> Gy/y
<li>neutron radiation: 500 Gy/y
<li>alpha radiation: absorbed dose rate in glass equivalent to that received from a uniform solution source generating 2 watts per litre of solution total alpha particle power</li>
</li>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.3.2"></div>
<h4 id="sec4-3-2">4.3.2 Chemical envieonment</h4>  <h5 id="sec4-3-2-1">4.3.2.1	Near-neutral environment</h5>  <p>Ordinary water and other near neutral solutions that do not exceed the free fluoride and phosphate ion concentrations specified in section 4.3.2.2, items 3 and 4, are acceptable chemical environments for Raschig rings, even though such solutions may have a pH slightly greater than 7.0.</p>
<h5 id="sec4-3-2-2">4.3.2.2	Acidic environment</h5>  <p>The solution in contact with the glass rings shall be limited to:</p>
<ol>
<li>pH less than or equal to 7.0, except as noted in section 4.3.2.1 above</li>
<li>temperature no greater than 120&deg;C</li>
<li>free fluoride concentration no greater than 0.0001 molar, unless compatibility with such a concentration is established according to sections 4.4.4 and 4.7.4 of this document</li>
<li>phosphate ion concentration no greater than 1 molar</li>
</ol>  <p>Subject to these restrictions, acceptable chemical environments include solutions of salts of organic or inorganic acids, hydrocarbons, and solutions of complexing or chelating agents in hydrocarbons. Results of corrosion tests on borosilicate-glass Raschig rings that support these requirements appear in the literature [22, 23].</p>
<h5 id="sec4-3-2-3">4.3.2.3	Basic environment</h5>  <p>Raschig rings shall not be used as a criticality control in basic solutions unless chemical and physical limits for the application have been determined and documented. If rings are so used, inspection frequencies should be derived from a trending analysis to assure the requirements of this regulatory document are met. Studies of the corrosion of borosilicate-glass in basic environments appear in the literature [23].</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.4"></div>
<h3 id="sec4-4">4.4 Ring specifications</h3>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.4.1"></div>
<h4 id="sec4-4-1">4.4.1 Composition</h4>  <h5 id="sec4-4-1-1">4.4.1.1	Type of glass</h5>  <p>The normal composition of glass used for Raschig rings shall be Type I, Class A glass as specified in <em>Standard Specification for Glasses in Laboratory Apparatus</em>, ASTM E-438-1992 [24].</p>
<h5 id="sec4-4-1-2">4.4.1.2	Density of glass</h5>  <p>The density of glass used for Raschig rings shall not be less than 2.22 mg/mm<sup>3</sup> at 25&deg;C.</p>
<h5 id="sec4-4-1-3">4.4.1.3	<sup>10</sup>B content of glass</h5>  <p>The <sup>10</sup>B isotope content of glass used for Raschig rings shall be no less than 0.655 wt% of the total glass weight. This isotopic content may be determined directly or inferred from:</p>
<ol>
<li>a measurement of elemental boron and the <sup>10</sup>B/<sup>11</sup>B ratio, or</li>
<li>a measurement of the boron oxide content, the <sup>10</sup>B/<sup>11</sup>B ratio, and a determination of the boron/oxygen ratio of the oxide</li>
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
<div id="4.4.2"></div>
<h4 id="sec4-4-2">4.4.2 Ring diameter</h4>  <p>Each Raschig ring shall have an average outside diameter no greater than 38 mm (1.5 in), except at the ends, where a slightly larger diameter, such as might be produced by fire polishing, is acceptable [22].</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.4.3"></div>
<h4 id="sec4-4-3">4.4.3 Surface finish</h4>  <p>All surfaces of the finished Raschig rings shall be smooth and free of sharp edges.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.4.4"></div>
<h4 id="sec4-4-4">4.4.4 Chemical</h4>  <p>Chemical tests to which the Raschig rings will be exposed, and the tests&rsquo; acceptance criteria, shall be established, documented, and reviewed by qualified personnel. These tests shall be performed on the rings to demonstrate their compatibility under normal and credible abnormal conditions of service (e.g., exposure to nitric acid, sodium hydroxide, and hydrogen fluoride).</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.4.5"></div>
<h4 id="sec4-4-5">4.4.5 Mechanical</h4>  <p>Raschig rings shall be subjected to mechanical tests designed to evaluate glass integrity. These tests shall demonstrate that the rings will remain intact while in service under anticipated normal and credible abnormal conditions. If use is generally static, such that liquid flows easily into and out of a vessel with no dynamic motion between rings, mechanical tests need merely confirm that the glass can withstand the static loading. If use involves vigorous mixing actions that might cause breakage through movement, mechanical tests must confirm that the rings can also withstand dynamic forces without breaking.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.5"></div>
<h3 id="sec4-5">4.5 Specifications for packed vessels</h3>  <p>Vessels to contain Raschig rings shall be designed and fabricated to facilitate:</p>
<ol>
<li>the addition and removal of solution</li>
<li>the addition and removal of Raschig rings</li>
<li>the removal and replacement of representative samples of both solution and rings for testing purposes</li>
<li>the measurement of the volume of solution</li>
<li>the verification of the level of the rings packed in the vessel</li>
<li>the cleaning of the vessel and the rings</li>
</ol>  <p>Pipes intended for the removal of solution shall be designed and installed to prevent removal of pieces of glass along with the solution (e.g., a screen over the removal pipe).</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.5.1"></div>
<h4 id="sec4-5-1">4.5.1 Installation of rings</h4>  <p>All regions of the vessel shall be filled with well-settled rings (that is, rings that have been gently manipulated during loading such that they are not likely to settle further during use).</p>  <p>Carefully hand-placed rings may have a greater glass volume fraction than even randomly oriented rings; both are allowed. An installation and compaction procedure that minimizes breakage, aids settling, and minimizes voids should be used.</p>  <p>The initial loading of rings into a vessel may use unmarked rings that satisfy the requirements of this regulatory document. However, if rings are added to the initial loading (to compensate for settling or to replace rings removed for some analysis), the added rings shall be permanently identified to preclude their subsequent use as rings characteristic of that initial loading.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.5.2"></div>
<h4 id="sec4-5-2">4.5.2 Unpacked piping in vessels</h4>  <p>The ring-packed vessel may contain regions free of Raschig rings (in apparent contradiction to section 4.5.1) provided each ring-free region has an outside diameter less than 64 mm (2.5 in). These might be formed by pipes embedded in an otherwise well-settled packing of rings. The edge-to-edge spacing between each ring-free region shall be at least 305 mm (12 in). The ring-free region may be produced by a single pipe or a cluster of pipes, provided the cluster of pipes also has an outside diameter less than 64 mm (2.5 in). These regions may serve any purpose (e.g., a perforated pipe to contain a set of control Raschig rings) [22].</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.5.3"></div>
<h4 id="sec4-5-3">4.5.3 Determination of ring level</h4>  <p>The top surface of the Raschig rings within a vessel shall be inspected periodically to detect settling through time and use. This inspection may be visual or non visual (e.g., radiography). If a visual method is to be used to inspect the level of the rings, sufficient ports or sight glasses should be provided to allow inspection of the entire upper surface. See section 4.7.1 for restoration of ring volume if settling is detected.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.5.4"></div>
<h4 id="sec4-5-4">4.5.4 Determination of glass volume fraction</h4>  <p>The glass volume fraction shall be determined each time new rings are installed in the vessel. This shall apply to either a full replacement or a partial addition of rings to compensate for settling.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.5.5"></div>
<h4 id="sec4-5-5">4.5.5 Allowable volume of solution in a vessel packed with rings</h4>  <p>The level of the solution shall not exceed the level of uniformly packed rings. There shall be a method of determining that this condition is met even if the rings should settle through time or use, to preclude the possibility of solution accumulation in a ring-free region. This protection may be afforded by:</p>
<ol>
<li>inspections made with a frequency shown to be adequate to identify unacceptable settling between inspections (see section 4.7.1)</li>
<li>an overflow pipe that limits the liquid level in the vessel, or</li>
<li>operating procedures that limit the liquid level in the vessel provided the vessel is equipped with a liquid-level indicating device augmented by an appropriate alarm system</li>
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
<div id="4.6"></div>
<h3 id="sec4-6">4.6 Maximum specified concentrations of fissile solutions</h3>  <p>Raschig rings pack differently in different vessels, leading to small variations in the resulting glass volume fraction in the vessel. Table 4-1 gives the maximum permissible fissile isotope concentration for uranium and plutonium solutions in vessels of unlimited size packed with borosilicate-glass Raschig rings that meet the requirements of this regulatory document [22, 25].</p>  <p><strong>Note:</strong> Table 4-1 shall not be used with mixtures of uranium and plutonium in solution. Low-level contamination of one element with the other is allowed. The definition of low-level contamination shall be justified and documented. The solutions referred to in the table shall have a hydrogen density not less than 75 g H per litre and not greater than 115 g H per litre.</p>
<table className="table table-striped">  <caption className="text-left">Table 4-1: Maximum permissible concentrations<sup>1</sup> of solutions<sup>2</sup> of fissile materials in vessels of unlimited size packed with borosilicate-glass Raschig rings [ANSI/ANS-8.5]</caption>   <tr>
<th rowspan="4" className="text-center">Glass volume fraction in vessel</th>
<th colSpan="5" className="text-center">Isotopic composition in weight-percent</th>   </tr>   <tr>
<th colSpan="3" className="text-center">Uranium<sup>3</sup></th>
<th colSpan="2" className="text-center">Plutonium</th>   </tr>   <tr>
<th rowspan="2"><sup>235</sup>U is less than or equal to 5<br />
<strong>and</strong><br />
<sup>233</sup>U is less than or equal to 0.01</th>
<th rowspan="2"><sup>235</sup>U is less than or equal to 100<br />
<strong>and</strong><br />
<sup>233</sup>U is less than or equal to 1</th>
<th rowspan="2"><sup>235</sup>U is less than or equal to 99<br />
<strong>and</strong><br />
<sup>233</sup>U is more than 1</th>
<th colSpan="2"><sup>239</sup>Pu is present in any quantity,<br />
<strong>and</strong><br />
<sup>241</sup>Pu is present in lesser quantity than <sup>240</sup>Pu,<br />
<strong>and</strong><br />
<sup>241</sup>Pu is less than or equal to 15</th>   </tr>   <tr>
<th><sup>240</sup>Pu is less than or equal to 5</th>
<th><sup>240</sup>Pu is more than 5</th>   </tr>   <tr>
<td className="text-center">24%</td>
<td className="text-center">unrestricted</td>
<td className="text-center">270 g/L</td>
<td className="text-center">150 g/L</td>
<td className="text-center">115 g/L</td>
<td className="text-center">140 g/L</td>   </tr>   <tr>
<td className="text-center">28%</td>
<td className="text-center">unrestricted</td>
<td className="text-center">330 g/L</td>
<td className="text-center">180 g/L</td>
<td className="text-center">140 g/L</td>
<td className="text-center">170 g/L</td>   </tr>   <tr>
<td className="text-center">32%</td>
<td className="text-center">unrestricted</td>
<td className="text-center">400 g/L</td>
<td className="text-center">200 g/L</td>
<td className="text-center">180 g/L</td>
<td className="text-center">220 g/L</td>   </tr>   </table>  <p><sup>1</sup>&nbsp;Interpolation between these data points is allowed.<br />
<sup>2</sup>&nbsp;Any fissile material deposited as solids or precipitates or suspended in the liquid shall be included in the calculation of the "solution" concentration.<br />
<sup>3</sup>&nbsp;See section 4.6 for a general description of the applicability of the three columns.</p>
<p>The three columns under the heading "Uranium" are intended to refer to solutions generally characterized by uranium enrichments as follows:</p>
<ol>
<li>the left column pertains to solutions having low enrichments of both isotopes</li>
<li>the center column pertains to nominal <sup>235</sup>U solutions with low levels of <sup>233</sup>U contamination</li>
<li>the right column pertains to nominal <sup>233</sup>U solutions</li>
</ol>  <p>Whenever any combination of isotopes falls into more than one category, the concentration limit of either column may be applied. In all cases, low levels of plutonium contamination are allowed. The definition of low-level contamination shall be justified and documented. Isotope ranges given at the top of each column define the allowed actinide compositions for the concentrations shown. Graphical interpolation between tabulated glass volume fractions is allowed.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.7"></div>
<h3 id="sec4-7">4.7 Maintenance inspection</h3>  <p>Raschig rings shall be inspected periodically to determine whether they have settled, whether there have been changes in their physical or	 chemical properties, and whether solids have accumulated. A record of the results of inspections of installed rings shall be maintained for each packed vessel. These data shall be used to determine the frequency of inspection through documented analysis. Any change in inspection frequency, and its justification, shall be documented.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.7.1"></div>
<h4 id="sec4-7-1">4.7.1 Settling</h4>  <p>If settling is detected, rings meeting specifications of this document shall be added to restore full packing. Those rings shall be permanently identified to preclude subsequent use as samples for maintenance because they are not characteristic of the initial loading. The number of rings added and other appropriate comments shall be recorded and maintained for the life of the set of rings packed into the vessel. Settling trends may be determined by comparison with past results.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.7.2"></div>
<h4 id="sec4-7-2">4.7.2 Fissile solids</h4>  <p>A record shall be maintained to enable evaluation of, and to set appropriate controls over, the accumulation of fissile solids on the Raschig rings and on the inner surface of the vessel. The rings in the vessel shall be cleaned or replaced and the vessel walls cleaned if the deposited solids contain more than 50 g of <sup>233</sup>U, <sup>235</sup>U, Pu, or any combination of these isotopes per litre of glass [22].</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.7.3"></div>
<h4 id="sec4-7-3">4.7.3 Physical properties</h4>  <p>In-service Raschig rings shall be periodically retested, to determine their current physical properties, by testing of ring samples from representative regions of each vessel. The purpose is to assure that the requirements of this section continue to be met.</p>  <p>Procedures shall be implemented to prevent the inclusion in the sample of Raschig rings that were not part of the initial loading in the vessel (see section 4.7.1).</p>  <p>Control Raschig rings may be used for these tests provided the control Raschig rings remain in the vessel except for test periods not exceeding two weeks per test and a total of four weeks per year. The vessel may be in continued use while control Raschig rings are removed from it, provided the specifications of sections 4.5.2 and 4.5.3 continue to be met.</p>  <p>If any of the tested in service Raschig rings fail to meet any of the ring specifications given in section 4.4 during their maintenance inspection, then an evaluation shall be performed to determine appropriate action. These appropriate actions may be (but are not limited to) one or more of the following actions:</p>
<ol>
<li>reanalyze the failed parameter(s) on the same set of rings</li>
<li>obtain a new sample of rings and reanalyze the failed parameter(s) on this new set of samples, or</li>
<li>replace the entire packing of rings in the vessel</li>
</ol>  <p>Trending analysis of periodic physical and chemical tests may be used to predict the useful lifetime of Raschig rings.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.7.4"></div>
<h4 id="sec4-7-4">4.7.4 Inspection intervals</h4>  <p>Raschig rings shall be inspected periodically to demonstrate their continued criticality control properties. These required tests shall include ring settling (see section 4.7.1), solids accumulation (see section 4.7.2), and physical properties of the glass (see section 4.7.3). The initial interval for inspection of rings shall not exceed:</p>
<ol>
<li>13 months for rings not subjected to agitation, or</li>
<li>7 months for rings subjected to agitation</li>
</ol>  <p>This initial inspection interval may be set at longer times when justified by a documented and approved analysis.</p>  <p>Subsequent intervals between inspections may be based on the analysis of the trends in the data. If records and inspections confirm that no solution has been present in a vessel since the preceding inspection and if the vessel has not been subject to corrosive fumes, then only the settling test (see section 4.7.1) shall be required.</p>  <p>If Raschig rings are exposed to solutions in which the free fluoride concentration is greater than 0.0001 molar, an appropriate frequency of inspection shall be established to ensure the rings retain the chemical and mechanical properties specified in section 4.4.</p>
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
<h2 id="sec5">5. Safety in Conducting Subcritical Neutron Multiplication Measurements In Situ</h2>  <p>Some parts of this section are extracted from ANSI/ANS-8.6-1983 (Reaffirmed in 2010), <em>Safety in Conducting Subcritical Neutron Multiplication Measurements In Situ</em>, with permission of the publisher, the American Nuclear Society. The text may have been adapted to make it applicable to Canada&rsquo;s international obligations to IAEA and consistent with CNSC&rsquo;s regulatory requirements.</p>
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
<h3 id="sec5-1">5.1 Introduction</h3>  <p>Safe and economical operations with fissile materials require knowledge of the subcriticality of configurations that arise in material processing, storage, and transportation. Data from critical experiments have been a principal source of information with which to establish safe practices; however, the need has developed for measurements of limited application that can more expeditiously provide guidance for safe operations with fissile materials in the specific arrangements encountered in industrial environments. Such measurements are made in some plant process areas and are referred to as <em>in situ</em> nuclear measurements.</p>  <p>Personnel protection during <em>in situ</em> experiments depends on the avoidance of a criticality accident. Section 5 (this section) contains safety criteria and practices for conducting such experiments. This section is oriented toward measurements of neutron multiplication and thus reflects the preponderance of this experience, but the principles presented in this section may be applied to measurements based on other reactivity indexes, such as the prompt-neutron decay constant.</p>
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
<h3 id="sec5-2">5.2 Scope</h3>  <p>This section provides safety guidance for conducting subcritical neutron-multiplication measurements where physical protection of personnel against the consequences of a criticality accident is not provided. The objectives of in situ measurements are either to confirm an adequate safety margin or to improve an estimate of such a margin. The first objective may constitute a test of the criticality safety of a design that is based on calculations. The second may affect improved operating conditions by reducing the uncertainty of safety margins and providing guidance to new designs.</p>
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
<h3 id="sec5-3">5.3 Administrative practices</h3>  <p>A written procedure for each new in <em>situ</em> experiment shall be prepared and reviewed in a manner approved by management. Primary responsibility for safety shall be assigned to one individual experienced in the performance of subcritical or critical experiments. Another experienced experimenter shall review the procedure.</p>  <p>The written procedure shall be reviewed by all who are expected to take part in the experiment.</p>  <p>At least two persons shall be present during an experiment.</p>  <p>A record of the status and progress of the experiment shall be maintained with particular emphasis on safety.</p>  <p>Emergency procedures and radiation detection instrumentation appropriate to the experiment shall be provided.</p>
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
<h3 id="sec5-4">5.4 Equipment criteria</h3>  <p>The mechanical integrity of equipment to be used in conjunction with the fissile assembly shall be verified prior to the experiment.</p>  <p>The proper functioning of all counting circuits, neutron- and gamma-ray-sensing devices, alarms, and other necessary instrumentation shall be verified prior to the experiment.</p>  <p>A source of neutrons shall be present to produce a meaningful indication of neutron multiplication. This source may be inherent in the fissile assembly, i.e., neutrons from spontaneous fission or from (&alpha;, n) reactions.</p>  <p>At least two independent neutron-sensitive counting devices shall monitor the neutron population in the fissile assembly under investigation.</p>  <p>A signal continuously indicative of the neutron level shall be audible and may be supplemented by an otherwise apparent signal such as a flashing light.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="5.5"></div>
<h3 id="sec5-5">5.5 Operational practices</h3>  <p>If anyone participating in the experiment expresses doubt of the safety of a particular action or step, the experiment shall be suspended until the doubt is resolved.</p>  <p>The cause of any unexpected behaviour of the assembly and its associated equipment or of any peculiarity in the resulting data shall be resolved before further reactivity additions.</p>  <p>A reactivity limit for the fissile assembly shall be defined in the written procedure. This limit may be stated in terms of a maximum value of neutron multiplication or of a fraction of an estimated critical mass, volume, or dimension. The margin below criticality shall be commensurate with experimental uncertainties; allowance shall be made for effects of neutron reflection brought about by personnel or other movable objects.</p>  <p>Plots of reciprocal neutron multiplication as a function of the parameter identifying reactivity change shall be maintained independently by at least two persons using data from two or more neutron-detector channels. These plots shall have a sufficient number of points to permit meaningful extrapolation.</p>  <p>The magnitude of reactivity additions shall be guided by extrapolation of the plots of reciprocal neutron multiplication and shall be such that the reactivity limit defined in section 5.5 is not exceeded. Caution is recommended in the interpretation of reciprocal neutron multiplication curves; typical experimental curves are discussed in <em>The Technology of Nuclear Reactor Safety</em>, Vol. 1, Chapter 5 [26].</p>  <p>Every addition of reactivity shall be authorized by the person assigned primary responsibility for safety in accordance with section 5.3.</p>  <p>No reactivity addition shall be made until the effects of preceding additions have been evaluated and until the response to be expected from the subsequent addition has been estimated.</p>  <p>Reactivity additions shall not be made simultaneously by more than one method.</p>  <p>Alteration in the method of reactivity addition shall not be such as to invalidate the extrapolation of the plot of reciprocal multiplication.</p>  <p>Consideration shall be given to the possibility of inadvertent reactivity additions such as might occur from the instability of slurries, from collapse or formation of voids, from inadvertent transfer of material, or from other conditions.</p>  <p>Place of source and detectors shall be such that the neutrons observed are predominantly those produced by the fissile assembly.</p>  <p>If a neutron source or detector is to be moved from one location to another, or if attenuating material is to be inserted between the source and detectors, the effect on neutron counting rate of such change shall be measured before further reactivity addition.</p>  <p>Changing the spacing between elements of an array should not be the means of changing reactivity. Data from reciprocal multiplication plots obtained from separate experiments with different spacings may be used to evaluate the effect of element spacing on neutron multiplication.</p>
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
<h2 id="sec6">6. Nuclear Criticality Safety in the Storage of Fissile Materials</h2>  <p>Some parts of this section are extracted from ANSI/ANS-8.7-1998 (reaffirmed in 2007), <em>Nuclear Criticality Safety in the Storage of Fissile Materials</em>, with permission of the publisher, the American Nuclear Society. The text may have been adapted to make it applicable to Canada&rsquo;s international obligations to IAEA and consistent with CNSC&rsquo;s regulatory requirements.</p>
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
<h3 id="sec6-1">6.1 Introduction</h3>  <p>Section 6 (this section) provides general storage criteria based on validated calculations, and includes some engineering and administrative practices appropriate to the storage of fissile material [27, 28].</p>  <p>The tabulated mass limits presented in this section are for idealized storage configurations. While these configurations may not be commonly encountered in practice, they do provide bases for establishing safe storage arrays. Because this section cannot effectively cover all conditions of interest, the use of supplementary information is encouraged [16, 29, 30]. For example, subcriticality of arrays not specified in this section may be confirmed by conducting neutron source multiplication measurements as described in section 5, <em>Safety in Conducting Subcritical Neutron Multiplication Measurements in Situ</em>.</p>
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
<h3 id="sec6-2">6.2 Scope</h3>  <p>This section applies to the storage of fissile materials. Mass and spacing limits are tabulated for uranium containing greater than 30 wt % <sup>235</sup>U, for <sup>233</sup>U, and for plutonium, as metals and oxides. Criteria for the range of application of these limits are provided.</p>
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
<h3 id="sec6-3">6.3	Nuclear criticality safety practices</h3>
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
<h4 id="sec6-3-1">6.3.1 Administrative practices</h4>  <p>All operations with fissile material, including storage, shall be conducted in accordance with section 2, <em>Nuclear Criticality Safety in Operations with Fissionable Materials Outside Reactors</em>. This section is intended to supplement section 2 by providing storage criteria applicable to many fissile materials. If the limits given in this section are used, an adequate administrative margin of subcriticality shall be applied to ensure compliance with section 2.1.2.2.</p>  <p>Methods of storage control and operational practices approved by management shall be described in written procedures. Persons participating in the transfer and storage of material shall be familiar with these procedures. Limits for storage shall be posted.</p>  <p>Management shall provide for inspections to verify compliance with established procedures.</p>  <p>Access to storage areas shall be controlled.</p>  <p>Additional guidance for administrative practices can be found in section 12, <em>Administrative Practices for Nuclear Criticality Safety</em>.</p>
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
<h4 id="sec6-3-2">6.3.2 Technical practices</h4>  <p>Limits for the storage of fissile material shall be based on experimental data or on the results of calculations made through the use of validated computational techniques.</p>  <p>Storage facilities and structures shall be designed, fabricated, and maintained in accordance with good engineering practices.</p>  <p>The design of storage structures should preclude unacceptable arrangements or configurations, thereby reducing reliance on administrative controls.</p>  <p>Fissile materials shall be stored in such a way that accidental nuclear criticality resulting from fire or from flood, earthquake, or other natural calamities is not a concern.</p>  <p>Storage areas should contain essentially no combustible materials. Where the presence of significant quantities of combustible materials is unavoidable, as in the storage of combustible scrap, a fire protection system shall be installed.</p>  <p>Shelving shall be sturdy and non-combustible. Spacing of storage units may be maintained by the use of birdcage fixtures, covered metal cans, or physical barriers on shelves.</p>  <p>Containers of fissile materials in areas with sprinkler systems shall be designed to prevent accumulation of water.</p>  <p>In fissile material storage areas equipped with sprinkler systems, consideration shall be given to the possibility of criticality occurring in an accumulation of runoff water from the sprinkler system.</p>  <p>A criticality accident alarm shall be provided in accordance with section 3, <em>Criticality Accident Alarm System</em>.</p>  <p>Good housekeeping shall be incorporated as an important part of nuclear criticality safety practices.</p>
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
<h3 id="sec6-4">6.4	Parameters, limits, and conditions</h3>  <p>Tables 6-1 through 6-11 list mass limits for array storage of individual units of specified fissile materials. The information given in the tables may be applied directly to the solution of practical storage problems. If the limits are found to be unnecessarily restrictive for a particular application, they may, at a minimum, serve as lower bounds for comparison with limits derived through the use of other techniques.</p>  <p>The limits were derived and subsequently checked through the use of validated computational techniques (see section 2, <em>Nuclear Criticality Safety in Operations with Fissionable Materials Outside Reactors</em>) to interpolate within sets of experimental data and to extrapolate from them. The validated computational techniques employed provide numerical approximations to the solutions of the neutron transport equation for given formulations of neutron cross section data. The basis for the limits is a set of calculational results for individual fissile material units in cubic arrays [31]. These arrays are reflected on all faces by 200 mm of ordinary water.</p>  <p>The mass limits in Tables 6-1 through 6-11 yielded evaluated array neutron multiplication factors, keff less than 0.95 for their associated cubic array sizes. It should be noted that calculations of these arrays through the use of other computational techniques, especially those employing other neutron cross section formulations, may yield different array neutron multiplication factors.</p>  <p>The units are spheres of the specified fissile materials, characterized by their main isotopic constituents, centered in cubic cells:</p>
<ol>
<li>in the application of limits for uranium enriched in <sup>235</sup>U, isotopes other than <sup>238</sup>U shall be considered as <sup>235</sup>U and the material shall not contain more than 1 wt % <sup>233</sup>U</li>
<li>in the application of limits for <sup>233</sup>U, other isotopes of uranium shall be considered as <sup>233</sup>U</li>
<li>the <sup>239</sup>Pu limits of Table 6-8 apply to mixtures of plutonium isotopes [32] if the concentration of <sup>240</sup>Pu exceeds that of <sup>241</sup>Pu and if the <sup>241</sup>Pu is considered to be <sup>239</sup>Pu in computing H/Pu atomic ratios and mass or concentration (see section 2, <em>Nuclear Criticality Safety in Operations with Fissionable Materials Outside Reactors</em>)</li>
<li>less restrictive <sup>239</sup>Pu limits are provided in Tables 6-9 and 6-10 for isotopic compositions containing appreciable concentrations of <sup>240</sup>Pu</li>
</ol>  <p>The fissile material storage limits presented for the oxides are based on void-free mixtures of the dioxides and water at theoretical densities corresponding to the specified ratio of hydrogen to fissile element atoms. These limits may be applied to other oxides, fluorides, chlorides, and nitrates and to other salts that do not exceed the stated ratio of hydrogen to fissile element atoms and that do not exceed the associated fissile element density characteristic of the tabulated mixture.</p>  <p>A number of the tabulated values exceed the critical mass of a water-reflected sphere. Tabulated mass limits that exceed 90% of the water-reflected critical mass are indicated in Tables 6-1 through 6-11. Subcriticality of such units shall be provided by appropriate controls, e.g., geometry.</p>  <p>Caution in the interpretation of the tabulated values is advised. They are intended to specify capacities of the cells and must be supplemented by good nuclear criticality safety practices. Other operational considerations may dictate smaller limits.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.4.1"></div>
<h4 id="sec6-4-1">6.4.1 Unit mass limits</h4>  <p>The mass of the units shall not exceed the values specified in Tables 6-1 through 6-11.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.4.2"></div>
<h4 id="sec6-4-2">6.4.2 Moderation</h4>  <p>The ratios of hydrogen to fissile material atoms are determined within the fissile region and do not include contiguous hydrogenous materials. Margins inherent in the mass limits specified are sufficient to compensate for incidental moderation such as that resulting from enclosing each unit in a thin plastic bag. The effects of more significant moderation should be evaluated through the use of a validated computational technique.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.4.3"></div>
<h4 id="sec6-4-3">6.4.3 Position of unit in cell</h4>  <p>The units shall be centered to within 10% of the cell dimensions. This restriction may be relaxed to permit freedom of horizontal position if the unit mass limit is reduced to 60% of the stated value. If this reduced value exceeds 20% of the unreflected spherical critical mass of the material, the minimum edge-to-edge separation between units shall be 152 mm (6 in.) [33].</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.4.4"></div>
<h4 id="sec6-4-4">6.4.4 Other reflectors</h4>  <p>The mass limits in the tables are also applicable for concrete reflectors up to 127 mm (5 in.) thick (the areal density of concrete equals 290 kg/m<sup>2</sup> or 60 lb/ft<sup>2</sup>). The mass limits shall be reduced to 75% of the tabulated values for a concrete reflector that is 203 mm (8 in) thick and to 60% for greater thicknesses of concrete. Equivalent thicknesses of other masonry materials may be established on the basis of their areal densities [31].</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.4.5"></div>
<h4 id="sec6-4-5">6.4.5 Double batching</h4>  <p>Double batching of certain tabulated unit masses would, in some geometries, result in criticality [34]. Most massive storage units of practical interest, however, would be of much less reactive geometry. If a double-batched cell, reflected by water on all its faces, can be shown to have a value of k<sub>eff</sub> not exceeding 0.93, such a double-batched cell in an array satisfying the tabulated requirements will not result in array criticality. Alternatively, if a double-batched cell can be shown to be subcritical when water reflected on all its faces, double batching in a few (8 or fewer) cells in an array satisfying the tabulated requirements will not result in array criticality.</p>  <p>Double batching shall be considered in storage safety analyses and in the establishment of operating procedures. If double batching is credible, it shall be determined that double batching in a single storage cell will not result in array criticality. Administrative controls, limited capacity containers, and storage cell design may be useful for the prevention of double batching.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.4.6"></div>
<h4 id="sec6-4-6">6.4.6 Vault pairs</h4>  <p>Mass limits shall be reduced to 55% of their tabulated values for two contiguous vaults where the concrete walls separating and surrounding the storage areas have the same thickness [31]. This reduction is sufficient to include the effect of concrete as a reflector.</p>  <p>The conditions specified in the tables apply to individual storage areas as follows:</p>
<ol>
<li>two vaults that are separated by a distance not less than the smallest dimension of the facing surfaces of the arrays stored within the vaults may be considered as individual arrays</li>
<li>two subarrays separated by not less than the smallest dimension of the facing surfaces of the subarrays may be evaluated as individual reflected arrays</li>
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
<div id="6.4.7"></div>
<h4 id="sec6-4-7">6.4.7 Reduction factors</h4>  <p>The mass reduction factors called for in sections 6.4.3 through 6.4.6, above, are multiplicative. If the application of these limits produces an undesirably conservative result, then calculations specific to the system of interest should be performed through the use of a validated computational technique. Consideration should be given to the precision and any bias in the calculational technique used in determining that k<sub>eff</sub> of 0.95 is not exceeded, as described in appendix B to this document.</p>  <p>Increases in cell size to effect reduction factors may be more desirable than decreases in the mass limits.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.4.8"></div>
<h4 id="sec6-4-8">6.4.8 Aisles</h4>  <p>Aisles may be provided in the arrays specified in Tables 6-1 through 6-11 by removing units from the array or by increasing the total array volume to provide space. The margin of safety is adequate to permit personnel within the resultant storage area.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.4.9"></div>
<h4 id="sec6-4-9">6.4.9 Fissile material containment and shelving materials</h4>  <p>The specified limits allow for thicknesses of steel less than 12.7 mm (0.5 in.) as shelving or as close-fitting containers in contact with the fissile material or spaced to less than 26 mm (approx. 1.0 in.) from the fissile material [27]. Effects of greater thicknesses of steel or of other materials shall be investigated experimentally or by applying validated computational techniques.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.4.10"></div>
<h4 id="sec6-4-10">6.4.10 Unit subcriticality</h4>  <p>The contents of each storage cell shall be subcritical if fully reflected with water.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.4.11"></div>
<h4 id="sec6-4-11">6.4.11 Unit spacing</h4>  <p>Where flooding is credible, unit surface separations shall be at least 152 mm (6 in.).</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.4.12"></div>
<h4 id="sec6-4-12">6.4.12 Unit shape</h4>  <p>The mass limits may be applied to units of any shape.</p>
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
<h3 id="sec6-5">6.5	Other applications</h3>  <p>The tabulated limits are not directly applicable to all systems of interest. When the provisions of section 6.4 are satisfied, application of the tabulated mass limits may be extended as described in this section.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.5.1"></div>
<h4 id="sec6-5-1">6.5.1 Commingling of dissimilar cells</h4>  <p>Each cell within any array described in Tables 6-1 through 6-11 is assigned an index equal to the quotient of 100 and the number of cells in the array [33]. Commingling, in one array, of any of the cells is permitted if the aggregate of the indexes of all the cells within the resultant array does not exceed 100.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.5.2"></div>
<h4 id="sec6-5-2">6.5.2 Interpolation</h4>  <p>Interpolation may be made among mass limits, number of cells, and hydrogen content. Interpolation of <sup>235</sup>U enrichment is permitted. Linear interpolation is not necessarily appropriate.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.5.3"></div>
<h4 id="sec6-5-3">6.5.3 Non-cubic cells</h4>  <p>Any tabulated mass limit may be applied to a non-cubic cell equal in volume to that tabulated containing a near-equilateral unit if the largest dimension of the cell does not exceed the smallest by more than a factor of 2.5 [33].</p>  <p>The tabulated values may be applied to other than near-equilateral units in non-cubic cells if the unit and cell volumes are maintained and if the ratio of the dimensions that characterize the shape of the unit is approximately equal to the ratio of the corresponding dimensions of the cell.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.5.4"></div>
<h4 id="sec6-5-4">6.5.4 Position of unit in cell</h4>  <p>Units placed in non cubic cells shall be centered to within 10% of the smallest cell dimension. This restriction may be relaxed to permit freedom of horizontal position if the mass limit is reduced to 60% of the tabulated value [33]. If this reduced value exceeds 20% of the unreflected spherical critical mass of the material, the minimum edge-to-edge separation between units shall be 152 mm (6 in.).</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.5.5"></div>
<h4 id="sec6-5-5">6.5.5 Array shape</h4>  <p>The tabulated limits may be applied to arrays of any shape.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.5.6"></div>
<h4 id="sec6-5-6">6.5.6 <sup>238</sup>Plutonium</h4>  <p>The tabulated mass limits for plutonium containing 5.2 wt % <sup>240</sup>Pu (see Table 6 9) may be applied to the storage of units of any non-fissile <sup>238</sup>Pu content [35]. The footnote to Tables 6-7 through 6-10 regarding 90% of the water-reflected critical spherical mass is appropriate for <sup>238</sup>Pu (see section 10, <em>Nuclear Criticality Control of Special Actinide Elements</em>).</p>
<table className="table table-striped">  <caption className="text-left">Table 6-1: Unit mass limit in kilograms of uranium per cell in water-reflected storage arrays &ndash; Metal [ANSI/ANS-8.7]</caption>  <tr>
<th rowspan="2" className="text-center text-center">Number of units in cubic storage arrays</th>
<th colSpan="6" className="text-center">Minimum dimension of cubic storage cell (mm)</th>   </tr>   <tr>
<th className="text-center">254</th>
<th className="text-center">305</th>
<th className="text-center">381</th>
<th className="text-center">457</th>
<th className="text-center">508</th>
<th className="text-center">610</th>   </tr>   <tr>
<td colSpan="7" className="text-center">H/U<sup>a</sup> &le; 0.01; 100 wt-% <sup>235</sup>U; U density &le; 18.7 g/cm<sup>3</sup>)</td>   </tr>   <tr>
<td className="text-center">64</td>
<td className="text-center">8.8</td>
<td className="text-center">11.5</td>
<td className="text-center">15.2</td>
<td className="text-center">18.5</td>
<td className="text-center">20.4<sup>b</sup></td>
<td className="text-center">23.5<sup>b</sup></td>   </tr>   <tr>
<td className="text-center">125</td>
<td className="text-center">7.3</td>
<td className="text-center">9.6</td>
<td className="text-center">13.1</td>
<td className="text-center">16.3</td>
<td className="text-center">18.2</td>
<td className="text-center">21.4<sup>b</sup></td>   </tr>   <tr>
<td className="text-center">216</td>
<td className="text-center">6.2</td>
<td className="text-center">8.3</td>
<td className="text-center">11.5</td>
<td className="text-center">14.5</td>
<td className="text-center">16.4</td>
<td className="text-center">19.7<sup>b</sup></td>   </tr>   <tr>
<td className="text-center">343</td>
<td className="text-center">5.4</td>
<td className="text-center">7.3</td>
<td className="text-center">10.3</td>
<td className="text-center">13.1</td>
<td className="text-center">15.0</td>
<td className="text-center">18.2</td>   </tr>   <tr>
<td className="text-center">512</td>
<td className="text-center">4.8</td>
<td className="text-center">6.5</td>
<td className="text-center">9.3</td>
<td className="text-center">12.0</td>
<td className="text-center">13.7</td>
<td className="text-center">17.0</td>   </tr>   <tr>
<td className="text-center">729</td>
<td className="text-center">4.3</td>
<td className="text-center">5.9</td>
<td className="text-center">8.5</td>
<td className="text-center">11.0</td>
<td className="text-center">12.7</td>
<td className="text-center">15.9</td>   </tr>   <tr>
<td className="text-center">1000</td>
<td className="text-center">3.9</td>
<td className="text-center">5.4</td>
<td className="text-center">7.8</td>
<td className="text-center">10.2</td>
<td className="text-center">11.8</td>
<td className="text-center">14.9</td>   </tr>   <tr>
<td colSpan="7" className="text-center">(H/U<sup>a</sup> &le; 0.01; 93.2 wt-% <sup>235</sup>U; 6.8 wt-% <sup>238</sup>U; U density &le; 18.7 g/cm<sup>3</sup>)</td>   </tr>   <tr>
<td className="text-center">64</td>
<td className="text-center">9.6</td>
<td className="text-center">12.6</td>
<td className="text-center">16.9</td>
<td className="text-center">20.8</td>
<td className="text-center">23.0<sup>b</sup></td>
<td className="text-center">26.8<sup>b</sup></td>   </tr>   <tr>
<td className="text-center">125</td>
<td className="text-center">7.9</td>
<td className="text-center">10.5</td>
<td className="text-center">14.5</td>
<td className="text-center">18.1</td>
<td className="text-center">20.4</td>
<td className="text-center">24.3<sup>b</sup></td>   </tr>   <tr>
<td className="text-center">216</td>
<td className="text-center">6.7</td>
<td className="text-center">9.1</td>
<td className="text-center">12.7</td>
<td className="text-center">16.1</td>
<td className="text-center">18.3</td>
<td className="text-center">22.2<sup>b</sup></td>   </tr>   <tr>
<td className="text-center">343</td>
<td className="text-center">5.9</td>
<td className="text-center">8.0</td>
<td className="text-center">11.3</td>
<td className="text-center">14.5</td>
<td className="text-center">16.6</td>
<td className="text-center">20.4</td>   </tr>   <tr>
<td className="text-center">512</td>
<td className="text-center">5.2</td>
<td className="text-center">7.1</td>
<td className="text-center">10.1</td>
<td className="text-center">13.2</td>
<td className="text-center">15.2</td>
<td className="text-center">18.9</td>   </tr>   <tr>
<td className="text-center">729</td>
<td className="text-center">4.7</td>
<td className="text-center">6.4</td>
<td className="text-center">9.2</td>
<td className="text-center">12.1</td>
<td className="text-center">14.0</td>
<td className="text-center">17.7</td>   </tr>   <tr>
<td className="text-center">1000</td>
<td className="text-center">4.2</td>
<td className="text-center">5.8</td>
<td className="text-center">8.5</td>
<td className="text-center">11.2</td>
<td className="text-center">13.0</td>
<td className="text-center">16.5</td>   </tr>   </table>  <p><sup>a</sup>&nbsp;Atomic ratio of hydrogen to uranium.<br />
<sup>b</sup>&nbsp;Values are greater than 90% of critical spherical mass, water reflected.</p>  <br />
<table className="table table-striped">  <caption className="text-left">Table 6-2: Unit mass limit in kilograms of uranium per cell in water-reflected storage arrays &ndash; oxides, 93.2 wt-% <sup>235</sup>U, 6.8 wt-% <sup>238</sup>U [ANSI/ANS-8.7]</caption>   <tr>
<th rowspan="2" className="text-center text-center">Number of units in cubic storage arrays</th>
<th colSpan="6" className="text-center">Minimum dimension of cubic storage cell (mm)</th>   </tr>   <tr>
<th className="text-center">254</th>
<th className="text-center">305</th>
<th className="text-center">381</th>
<th className="text-center">457</th>
<th className="text-center">508</th>
<th className="text-center">610</th>   </tr>   <tr>
<td colSpan="7" className="text-center">(H/U<sup>a</sup> &le; 0.4; U density &le; 8.37 g/cm<sup>3</sup>)</td>   </tr>   <tr>
<td className="text-center">64</td>
<td className="text-center">9.9</td>
<td className="text-center">13.4</td>
<td className="text-center">18.8</td>
<td className="text-center">24.1</td>
<td className="text-center">27.4</td>
<td className="text-center">33.5</td>   </tr>   <tr>
<td className="text-center">125</td>
<td className="text-center">8.0</td>
<td className="text-center">10.9</td>
<td className="text-center">15.6</td>
<td className="text-center">20.4</td>
<td className="text-center">23.5</td>
<td className="text-center">29.4</td>   </tr>   <tr>
<td className="text-center">216</td>
<td className="text-center">6.7</td>
<td className="text-center">9.3</td>
<td className="text-center">13.4</td>
<td className="text-center">17.8</td>
<td className="text-center">20.6</td>
<td className="text-center">26.2</td>   </tr>   <tr>
<td className="text-center">343</td>
<td className="text-center">5.8</td>
<td className="text-center">8.0</td>
<td className="text-center">11.8</td>
<td className="text-center">15.7</td>
<td className="text-center">18.4</td>
<td className="text-center">23.6</td>   </tr>   <tr>
<td className="text-center">512</td>
<td className="text-center">5.1</td>
<td className="text-center">7.1</td>
<td className="text-center">10.5</td>
<td className="text-center">14.1</td>
<td className="text-center">16.6</td>
<td className="text-center">21.5</td>   </tr>   <tr>
<td className="text-center">729</td>
<td className="text-center">4.5</td>
<td className="text-center">6.4</td>
<td className="text-center">9.4</td>
<td className="text-center">12.8</td>
<td className="text-center">15.1</td>
<td className="text-center">19.8</td>   </tr>   <tr>
<td className="text-center">1000</td>
<td className="text-center">4.1</td>
<td className="text-center">5.8</td>
<td className="text-center">8.6</td>
<td className="text-center">11.7</td>
<td className="text-center">13.9</td>
<td className="text-center">18.3</td>   </tr>   <tr>
<td colSpan="7"className="text-center" >(H/U<sup>a</sup> &le; 3.0; U density &le; 4.56 g/cm<sup>3</sup>)</td>   </tr>   <tr>
<td className="text-center">64</td>
<td className="text-center">6.1</td>
<td className="text-center">8.4</td>
<td className="text-center">12.0</td>
<td className="text-center">15.6</td>
<td className="text-center">18.0</td>
<td className="text-center">22.3</td>   </tr>   <tr>
<td className="text-center">125</td>
<td className="text-center">4.9</td>
<td className="text-center">6.8</td>
<td className="text-center">9.9</td>
<td className="text-center">13.1</td>
<td className="text-center">15.2</td>
<td className="text-center">19.3</td>   </tr>   <tr>
<td className="text-center">216</td>
<td className="text-center">4.1</td>
<td className="text-center">5.7</td>
<td className="text-center">8.4</td>
<td className="text-center">11.3</td>
<td className="text-center">13.2</td>
<td className="text-center">17.1</td>   </tr>   <tr>
<td className="text-center">343</td>
<td className="text-center">3.6</td>
<td className="text-center">5.0</td>
<td className="text-center">7.3</td>
<td className="text-center">9.9</td>
<td className="text-center">11.7</td>
<td className="text-center">15.3</td>   </tr>   <tr>
<td className="text-center">512</td>
<td className="text-center">3.1</td>
<td className="text-center">4.4</td>
<td className="text-center">6.5</td>
<td className="text-center">8.9</td>
<td className="text-center">10.5</td>
<td className="text-center">13.8</td>   </tr>   <tr>
<td className="text-center">729</td>
<td className="text-center">2.8</td>
<td className="text-center">3.9</td>
<td className="text-center">5.8</td>
<td className="text-center">8.0</td>
<td className="text-center">9.5</td>
<td className="text-center">12.7</td>   </tr>   <tr>
<td colSpan="7" className="text-center">(H/U<sup>a</sup> &le; 10; U density &le; 2.05 g/cm<sup>3</sup>)</td>   </tr>   <tr>
<td className="text-center">64</td>
<td className="text-center">3.1</td>
<td className="text-center">4.2</td>
<td className="text-center">5.9</td>
<td className="text-center">7.7</td>
<td className="text-center">8.9</td>
<td className="text-center">11.1</td>   </tr>   <tr>
<td className="text-center">125</td>
<td className="text-center">2.5</td>
<td className="text-center">3.4</td>
<td className="text-center">4.9</td>
<td className="text-center">6.5</td>
<td className="text-center">7.6</td>
<td className="text-center">9.6</td>   </tr>   <tr>
<td className="text-center">216</td>
<td className="text-center">2.1</td>
<td className="text-center">2.9</td>
<td className="text-center">4.2</td>
<td className="text-center">5.6</td>
<td className="text-center">6.6</td>
<td className="text-center">8.5</td>   </tr>   <tr>
<td className="text-center">343</td>
<td className="text-center">1.8</td>
<td className="text-center">2.5</td>
<td className="text-center">3.6</td>
<td className="text-center">4.9</td>
<td className="text-center">5.8</td>
<td className="text-center">7.6</td>   </tr>   <tr>
<td className="text-center">512</td>
<td className="text-center">1.5</td>
<td className="text-center">2.2</td>
<td className="text-center">3.2</td>
<td className="text-center">4.4</td>
<td className="text-center">5.2</td>
<td className="text-center">6.9</td>   </tr>   <tr>
<td className="text-center">729</td>
<td className="text-center">1.4</td>
<td className="text-center">1.9</td>
<td className="text-center">2.9</td>
<td className="text-center">4.0</td>
<td className="text-center">4.7</td>
<td className="text-center">6.3</td>   </tr>   <tr>
<td className="text-center">1000</td>
<td className="text-center">1.2</td>
<td className="text-center">1.8</td>
<td className="text-center">2.6</td>
<td className="text-center">3.6</td>
<td className="text-center">4.3</td>
<td className="text-center">5.8</td>   </tr>   <tr>
<td colSpan="7" className="text-center">(H/U<sup>a</sup> &le; 20; U density &le; 1.15 g/cm<sup>3</sup>)</td>   </tr>   <tr>
<td className="text-center">64</td>
<td className="text-center">1.8</td>
<td className="text-center">2.4</td>
<td className="text-center">3.5</td>
<td className="text-center">4.5</td>
<td className="text-center">5.2</td>
<td className="text-center">6.5<sup>b</sup></td>   </tr>   <tr>
<td className="text-center">125</td>
<td className="text-center">1.4</td>
<td className="text-center">2.0</td>
<td className="text-center">2.9</td>
<td className="text-center">3.8</td>
<td className="text-center">4.4</td>
<td className="text-center">5.6</td>   </tr>   <tr>
<td className="text-center">216</td>
<td className="text-center">1.2</td>
<td className="text-center">1.7</td>
<td className="text-center">2.4</td>
<td className="text-center">3.3</td>
<td className="text-center">3.8</td>
<td className="text-center">4.9</td>   </tr>   <tr>
<td className="text-center">343</td>
<td className="text-center">1.0</td>
<td className="text-center">1.4</td>
<td className="text-center">2.1</td>
<td className="text-center">2.9</td>
<td className="text-center">3.4</td>
<td className="text-center">4.4</td>   </tr>   <tr>
<td className="text-center">512</td>
<td className="text-center">0.9</td>
<td className="text-center">1.3</td>
<td className="text-center">1.9</td>
<td className="text-center">2.6</td>
<td className="text-center">3.0</td>
<td className="text-center">4.0</td>   </tr>   <tr>
<td className="text-center">729</td>
<td className="text-center">0.8</td>
<td className="text-center">1.1</td>
<td className="text-center">1.7</td>
<td className="text-center">2.3</td>
<td className="text-center">2.8</td>
<td className="text-center">3.7</td>   </tr>   <tr>
<td className="text-center">1000</td>
<td className="text-center">0.7</td>
<td className="text-center">1.0</td>
<td className="text-center">1.5</td>
<td className="text-center">2.1</td>
<td className="text-center">2.5</td>
<td className="text-center">3.4</td>   </tr>   </table>  <p><sup>a</sup>&nbsp;Atomic ratio of hydrogen to uranium.<br />
<sup>b</sup>&nbsp;Values are greater than 90% of critical spherical mass, water reflected.</p>  <br />
<table className="table table-striped">  <caption className="text-center">Table 6-3: Unit mass limit in kilograms of uranium per cell in water-reflected storage arrays &ndash; oxides, 80 wt-% <sup>235</sup>U, 20 wt-% <sup>238</sup>U [ANSI/ANS-8.7]</caption>   <tr>
<th rowspan="2" className="text-center text-center">Number of units in cubic storage arrays</th>
<th colSpan="6" className="text-center">Minimum dimension of cubic storage cell (mm)</th>   </tr>   <tr>
<th className="text-center">254</th>
<th className="text-center">305</th>
<th className="text-center">381</th>
<th className="text-center">457</th>
<th className="text-center">508</th>
<th className="text-center">610</th>   </tr>   <tr>
<td colSpan="7" className="text-center">(H/U<sup>a</sup> &le; 0.4; U density &le; 8.36 g/cm<sup>3</sup>)</td>   </tr>   <tr>
<td className="text-center">64</td>
<td className="text-center">11.1</td>
<td className="text-center">15.1</td>
<td className="text-center">21.4</td>
<td className="text-center">27.7</td>
<td className="text-center">31.7</td>
<td className="text-center">39.1</td>   </tr>   <tr>
<td className="text-center">125</td>
<td className="text-center">8.9</td>
<td className="text-center">12.3</td>
<td className="text-center">17.7</td>
<td className="text-center">23.3</td>
<td className="text-center">27.0</td>
<td className="text-center">34.1</td>   </tr>   <tr>
<td className="text-center">216</td>
<td className="text-center">7.5</td>
<td className="text-center">10.4</td>
<td className="text-center">15.1</td>
<td className="text-center">20.2</td>
<td className="text-center">23.6</td>
<td className="text-center">30.2</td>   </tr>   <tr>
<td className="text-center">343</td>
<td className="text-center">6.4</td>
<td className="text-center">9.0</td>
<td className="text-center">13.2</td>
<td className="text-center">17.8</td>
<td className="text-center">20.9</td>
<td className="text-center">27.1</td>   </tr>   <tr>
<td className="text-center">512</td>
<td className="text-center">5.7</td>
<td className="text-center">7.9</td>
<td className="text-center">11.7</td>
<td className="text-center">15.9</td>
<td className="text-center">18.8</td>
<td className="text-center">24.6</td>   </tr>   <tr>
<td className="text-center">729</td>
<td className="text-center">5.0</td>
<td className="text-center">7.1</td>
<td className="text-center">10.6</td>
<td className="text-center">14.4</td>
<td className="text-center">17.1</td>
<td className="text-center">22.6</td>   </tr>   <tr>
<td className="text-center">1000</td>
<td className="text-center">4.6</td>
<td className="text-center">6.4</td>
<td className="text-center">9.6</td>
<td className="text-center">13.1</td>
<td className="text-center">15.7</td>
<td className="text-center">20.8</td>   </tr>   <tr>
<td colSpan="7" className="text-center">(H/U<sup>a</sup> &le; 3.0; U density &le; 4.57 g/cm<sup>3</sup>)</td>   </tr>   <tr>
<td className="text-center">64</td>
<td className="text-center">7.0</td>
<td className="text-center">9.5</td>
<td className="text-center">13.5</td>
<td className="text-center">17.6</td>
<td className="text-center">20.2</td>
<td className="text-center">25.0</td>   </tr>   <tr>
<td className="text-center">125</td>
<td className="text-center">5.6</td>
<td className="text-center">7.7</td>
<td className="text-center">11.2</td>
<td className="text-center">14.8</td>
<td className="text-center">17.2</td>
<td className="text-center">21.7</td>   </tr>   <tr>
<td className="text-center">216</td>
<td className="text-center">4.7</td>
<td className="text-center">6.5</td>
<td className="text-center">9.5</td>
<td className="text-center">12.8</td>
<td className="text-center">14.9</td>
<td className="text-center">19.2</td>   </tr>   <tr>
<td className="text-center">343</td>
<td className="text-center">4.0</td>
<td className="text-center">5.6</td>
<td className="text-center">8.3</td>
<td className="text-center">11.2</td>
<td className="text-center">13.2</td>
<td className="text-center">17.2</td>   </tr>   <tr>
<td className="text-center">512</td>
<td className="text-center">3.5</td>
<td className="text-center">5.0</td>
<td className="text-center">7.4</td>
<td className="text-center">10.0</td>
<td className="text-center">11.9</td>
<td className="text-center">15.6</td>   </tr>   <tr>
<td className="text-center">729</td>
<td className="text-center">3.2</td>
<td className="text-center">4.4</td>
<td className="text-center">6.6</td>
<td className="text-center">9.1</td>
<td className="text-center">10.8</td>
<td className="text-center">14.3</td>   </tr>   <tr>
<td className="text-center">1000</td>
<td className="text-center">2.8</td>
<td className="text-center">4.0</td>
<td className="text-center">6.0</td>
<td className="text-center">8.3</td>
<td className="text-center">9.9</td>
<td className="text-center">13.2</td>   </tr>   <tr>
<td colSpan="7" className="text-center">(H/U<sup>a</sup> &le; 10; U density &le; 2.05 g/cm<sup>3</sup>)</td>   </tr>   <tr>
<td className="text-center">64</td>
<td className="text-center">3.3</td>
<td className="text-center">4.6</td>
<td className="text-center">6.5</td>
<td className="text-center">8.5</td>
<td className="text-center">9.7</td>
<td className="text-center">12.1</td>   </tr>   <tr>
<td className="text-center">125</td>
<td className="text-center">2.7</td>
<td className="text-center">3.7</td>
<td className="text-center">5.4</td>
<td className="text-center">7.1</td>
<td className="text-center">8.3</td>
<td className="text-center">10.5</td>   </tr>   <tr>
<td className="text-center">216</td>
<td className="text-center">2.2</td>
<td className="text-center">3.1</td>
<td className="text-center">4.6</td>
<td className="text-center">6.1</td>
<td className="text-center">7.2</td>
<td className="text-center">9.3</td>   </tr>   <tr>
<td className="text-center">343</td>
<td className="text-center">1.9</td>
<td className="text-center">2.7</td>
<td className="text-center">4.0</td>
<td className="text-center">5.4</td>
<td className="text-center">6.4</td>
<td className="text-center">8.3</td>   </tr>   <tr>
<td className="text-center">512</td>
<td className="text-center">1.7</td>
<td className="text-center">2.4</td>
<td className="text-center">3.5</td>
<td className="text-center">4.8</td>
<td className="text-center">5.7</td>
<td className="text-center">7.5</td>   </tr>   <tr>
<td className="text-center">729</td>
<td className="text-center">1.5</td>
<td className="text-center">2.1</td>
<td className="text-center">3.2</td>
<td className="text-center">4.3</td>
<td className="text-center">5.2</td>
<td className="text-center">6.9</td>   </tr>   <tr>
<td className="text-center">1000</td>
<td className="text-center">1.4</td>
<td className="text-center">1.9</td>
<td className="text-center">2.9</td>
<td className="text-center">4.0</td>
<td className="text-center">4.7</td>
<td className="text-center">6.3</td>   </tr>   <tr>
<td colSpan="7" className="text-center">(H/U<sup>a</sup> &le; 20; U density &le; 1.15 g/cm<sup>3</sup>)</td>   </tr>   <tr>
<td className="text-center">64</td>
<td className="text-center">1.8</td>
<td className="text-center">2.5</td>
<td className="text-center">3.6</td>
<td className="text-center">4.7</td>
<td className="text-center">5.4</td>
<td className="text-center">6.7<sup>b</sup></td>   </tr>   <tr>
<td className="text-center">125</td>
<td className="text-center">1.5</td>
<td className="text-center">2.0</td>
<td className="text-center">3.0</td>
<td className="text-center">3.9</td>
<td className="text-center">4.6</td>
<td className="text-center">5.8</td>   </tr>   <tr>
<td className="text-center">216</td>
<td className="text-center">1.2</td>
<td className="text-center">1.7</td>
<td className="text-center">2.5</td>
<td className="text-center">3.4</td>
<td className="text-center">4.0</td>
<td className="text-center">5.1</td>   </tr>   <tr>
<td className="text-center">343</td>
<td className="text-center">1.1</td>
<td className="text-center">1.5</td>
<td className="text-center">2.2</td>
<td className="text-center">3.0</td>
<td className="text-center">3.5</td>
<td className="text-center">4.6</td>   </tr>   <tr>
<td className="text-center">512</td>
<td className="text-center">0.9</td>
<td className="text-center">1.3</td>
<td className="text-center">2.0</td>
<td className="text-center">2.7</td>
<td className="text-center">3.1</td>
<td className="text-center">4.1</td>   </tr>   <tr>
<td className="text-center">729</td>
<td className="text-center">0.8</td>
<td className="text-center">1.2</td>
<td className="text-center">1.8</td>
<td className="text-center">2.4</td>
<td className="text-center">2.9</td>
<td className="text-center">3.8</td>   </tr>   <tr>
<td className="text-center">1000</td>
<td className="text-center">0.7</td>
<td className="text-center">1.1</td>
<td className="text-center">1.6</td>
<td className="text-center">2.2</td>
<td className="text-center">2.6</td>
<td className="text-center">3.5</td>   </tr>   </table>   <p><sup>a</sup>&nbsp;Atomic ratio of hydrogen to uranium.<br />
<sup>b</sup> Values are greater than 90% of critical spherical mass, water reflected.</p>  <br />
<table className="table table-striped">  <caption className="text-left">Table 6-4: Unit mass limit in kilograms of uranium per cell in water-reflected storage arrays &ndash; oxides, 70 wt-% <sup>235</sup>U, 30 wt-% <sup>238</sup>U [ANSI/ANS-8.7]</caption>   <tr>
<th rowspan="2" className="text-center text-center">Number of units in cubic storage arrays</th>
<th colSpan="6" className="text-center">Minimum dimension of cubic storage cell (mm)</th>   </tr>   <tr>
<th className="text-center">254</th>
<th className="text-center">305</th>
<th className="text-center">381</th>
<th className="text-center">457</th>
<th className="text-center">508</th>
<th className="text-center">610</th>   </tr>   <tr>
<td colSpan="7" className="text-center">(H/U<sup>a</sup> &le; 0.4; U density &le; 8.37 g/cm<sup>3</sup>)</td>   </tr>   <tr>
<td className="text-center">64</td>
<td className="text-center">12.3</td>
<td className="text-center">16.8</td>
<td className="text-center">24.0</td>
<td className="text-center">31.2</td>
<td className="text-center">35.9</td>
<td className="text-center">44.6</td>   </tr>   <tr>
<td className="text-center">125</td>
<td className="text-center">9.9</td>
<td className="text-center">13.7</td>
<td className="text-center">19.8</td>
<td className="text-center">26.2</td>
<td className="text-center">30.5</td>
<td className="text-center">38.7</td>   </tr>   <tr>
<td className="text-center">216</td>
<td className="text-center">8.3</td>
<td className="text-center">11.5</td>
<td className="text-center">16.9</td>
<td className="text-center">22.6</td>
<td className="text-center">26.5</td>
<td className="text-center">34.2</td>   </tr>   <tr>
<td className="text-center">343</td>
<td className="text-center">7.1</td>
<td className="text-center">10.0</td>
<td className="text-center">14.7</td>
<td className="text-center">19.9</td>
<td className="text-center">23.5</td>
<td className="text-center">30.6</td>   </tr>   <tr>
<td className="text-center">512</td>
<td className="text-center">6.3</td>
<td className="text-center">8.8</td>
<td className="text-center">13.1</td>
<td className="text-center">17.8</td>
<td className="text-center">21.1</td>
<td className="text-center">27.7</td>   </tr>   <tr>
<td className="text-center">729</td>
<td className="text-center">5.6</td>
<td className="text-center">7.8</td>
<td className="text-center">11.7</td>
<td className="text-center">16.1</td>
<td className="text-center">19.1</td>
<td className="text-center">25.4</td>   </tr>   <tr>
<td className="text-center">1000</td>
<td className="text-center">5.0</td>
<td className="text-center">7.1</td>
<td className="text-center">10.7</td>
<td className="text-center">14.6</td>
<td className="text-center">17.5</td>
<td className="text-center">23.4</td>   </tr>   <tr>
<td colSpan="7" className="text-center">(H/U<sup>a</sup> &le; 3.0; U density &le; 4.57 g/cm<sup>3</sup>)</td>   </tr>   <tr>
<td className="text-center">64</td>
<td className="text-center">7.5</td>
<td className="text-center">10.3</td>
<td className="text-center">14.7</td>
<td className="text-center">19.2</td>
<td className="text-center">22.2</td>
<td className="text-center">27.7</td>   </tr>   <tr>
<td className="text-center">125</td>
<td className="text-center">6.0</td>
<td className="text-center">8.3</td>
<td className="text-center">12.1</td>
<td className="text-center">16.1</td>
<td className="text-center">18.8</td>
<td className="text-center">23.9</td>   </tr>   <tr>
<td className="text-center">216</td>
<td className="text-center">5.0</td>
<td className="text-center">7.0</td>
<td className="text-center">10.3</td>
<td className="text-center">13.9</td>
<td className="text-center">16.3</td>
<td className="text-center">21.1</td>   </tr>   <tr>
<td className="text-center">343</td>
<td className="text-center">4.3</td>
<td className="text-center">6.0</td>
<td className="text-center">9.0</td>
<td className="text-center">12.2</td>
<td className="text-center">14.4</td>
<td className="text-center">18.8</td>   </tr>   <tr>
<td className="text-center">512</td>
<td className="text-center">3.8</td>
<td className="text-center">5.3</td>
<td className="text-center">7.9</td>
<td className="text-center">10.8</td>
<td className="text-center">12.9</td>
<td className="text-center">17.0</td>   </tr>   <tr>
<td className="text-center">729</td>
<td className="text-center">3.4</td>
<td className="text-center">4.8</td>
<td className="text-center">7.1</td>
<td className="text-center">9.8</td>
<td className="text-center">11.7</td>
<td className="text-center">15.6</td>   </tr>   <tr>
<td className="text-center">1000</td>
<td className="text-center">3.0</td>
<td className="text-center">4.3</td>
<td className="text-center">6.5</td>
<td className="text-center">8.9</td>
<td className="text-center">10.7</td>
<td className="text-center">14.3</td>   </tr>   <tr>
<td colSpan="7" className="text-center">(H/U<sup>a</sup> &le; 10; U density &le; 2.05 g/cm<sup>3</sup>)</td>   </tr>   <tr>
<td className="text-center">64</td>
<td className="text-center">3.5</td>
<td className="text-center">4.8</td>
<td className="text-center">6.8</td>
<td className="text-center">9.0</td>
<td className="text-center">10.4</td>
<td className="text-center">13.0</td>   </tr>   <tr>
<td className="text-center">125</td>
<td className="text-center">2.8</td>
<td className="text-center">3.8</td>
<td className="text-center">5.6</td>
<td className="text-center">7.5</td>
<td className="text-center">8.7</td>
<td className="text-center">11.2</td>   </tr>   <tr>
<td className="text-center">216</td>
<td className="text-center">2.3</td>
<td className="text-center">3.2</td>
<td className="text-center">4.8</td>
<td className="text-center">6.4</td>
<td className="text-center">7.6</td>
<td className="text-center">9.8</td>   </tr>   <tr>
<td className="text-center">343</td>
<td className="text-center">2.0</td>
<td className="text-center">2.8</td>
<td className="text-center">4.1</td>
<td className="text-center">5.6</td>
<td className="text-center">6.7</td>
<td className="text-center">8.8</td>   </tr>   <tr>
<td className="text-center">512</td>
<td className="text-center">1.7</td>
<td className="text-center">2.5</td>
<td className="text-center">3.7</td>
<td className="text-center">5.0</td>
<td className="text-center">6.0</td>
<td className="text-center">7.9</td>   </tr>   <tr>
<td className="text-center">729</td>
<td className="text-center">1.6</td>
<td className="text-center">2.2</td>
<td className="text-center">3.3</td>
<td className="text-center">4.5</td>
<td className="text-center">5.4</td>
<td className="text-center">7.2</td>   </tr>   <tr>
<td className="text-center">1000</td>
<td className="text-center">1.4</td>
<td className="text-center">2.0</td>
<td className="text-center">3.0</td>
<td className="text-center">4.1</td>
<td className="text-center">4.9</td>
<td className="text-center">6.6</td>   </tr>   <tr>
<td colSpan="7" className="text-center">(H/U<sup>a</sup> &le; 20; U density &le; 1.15 g/cm<sup>3</sup>)</td>   </tr>   <tr>
<td className="text-center">64</td>
<td className="text-center">2.0</td>
<td className="text-center">2.7</td>
<td className="text-center">3.8</td>
<td className="text-center">5.0</td>
<td className="text-center">5.8</td>
<td className="text-center">7.2<sup>b</sup></td>   </tr>   <tr>
<td className="text-center">125</td>
<td className="text-center">1.6</td>
<td className="text-center">2.2</td>
<td className="text-center">3.2</td>
<td className="text-center">4.2</td>
<td className="text-center">4.9</td>
<td className="text-center">6.3</td>   </tr>   <tr>
<td className="text-center">216</td>
<td className="text-center">1.3</td>
<td className="text-center">1.8</td>
<td className="text-center">2.7</td>
<td className="text-center">3.6</td>
<td className="text-center">4.3</td>
<td className="text-center">5.5</td>   </tr>   <tr>
<td className="text-center">343</td>
<td className="text-center">1.1</td>
<td className="text-center">1.6</td>
<td className="text-center">2.3</td>
<td className="text-center">3.2</td>
<td className="text-center">3.8</td>
<td className="text-center">4.9</td>   </tr>   <tr>
<td className="text-center">512</td>
<td className="text-center">1.0</td>
<td className="text-center">1.4</td>
<td className="text-center">2.1</td>
<td className="text-center">2.8</td>
<td className="text-center">3.4</td>
<td className="text-center">4.5</td>   </tr>   <tr>
<td className="text-center">729</td>
<td className="text-center">0.9</td>
<td className="text-center">1.2</td>
<td className="text-center">1.9</td>
<td className="text-center">2.6</td>
<td className="text-center">3.1</td>
<td className="text-center">4.1</td>   </tr>   <tr>
<td className="text-center">1000</td>
<td className="text-center">0.8</td>
<td className="text-center">1.1</td>
<td className="text-center">1.7</td>
<td className="text-center">2.3</td>
<td className="text-center">2.8</td>
<td className="text-center">3.7</td>   </tr>   </table>   <p><sup>a</sup>&nbsp;Atomic ratio of hydrogen to uranium.<br />
<sup>b</sup>&nbsp;Values are greater than 90% of critical spherical mass, water reflected.</p>  <br />
<table className="table table-striped">  <caption className="text-left">Table 6-5: Unit mass limit in kilograms of uranium per cell in water-reflected storage arrays &ndash; oxides, 50 wt-% <sup>235</sup>U, 50 wt-% <sup>238</sup>U [ANSI/ANS-8.7]</caption>   <tr>
<th rowspan="2" className="text-center text-center">Number of units in cubic storage arrays</th>
<th colSpan="6" className="text-center">Minimum dimension of cubic storage cell (mm)</th>   </tr>   <tr>
<th className="text-center">254</th>
<th className="text-center">305</th>
<th className="text-center">381</th>
<th className="text-center">457</th>
<th className="text-center">508</th>
<th className="text-center">610</th>   </tr>   <tr>
<td colSpan="7" className="text-center">(H/U<sup>a</sup> &le; 0.4; U density &le; 8.37 g/cm<sup>3</sup>)</td>   </tr>   <tr>
<td className="text-center">125</td>
<td className="text-center">12.7</td>
<td className="text-center">17.7</td>
<td className="text-center">26.0</td>
<td className="text-center">34.9</td>
<td className="text-center">40.9</td>
<td className="text-center">52.9</td>   </tr>   <tr>
<td className="text-center">216</td>
<td className="text-center">10.6</td>
<td className="text-center">14.8</td>
<td className="text-center">22.0</td>
<td className="text-center">29.9</td>
<td className="text-center">35.3</td>
<td className="text-center">46.2</td>   </tr>   <tr>
<td className="text-center">343</td>
<td className="text-center">9.1</td>
<td className="text-center">12.8</td>
<td className="text-center">19.1</td>
<td className="text-center">26.1</td>
<td className="text-center">31.0</td>
<td className="text-center">41.1</td>   </tr>   <tr>
<td className="text-center">512</td>
<td className="text-center">8.0</td>
<td className="text-center">11.2</td>
<td className="text-center">16.9</td>
<td className="text-center">23.2</td>
<td className="text-center">27.7</td>
<td className="text-center">37.0</td>   </tr>   <tr>
<td className="text-center">729</td>
<td className="text-center">7.1</td>
<td className="text-center">10.0</td>
<td className="text-center">15.1</td>
<td className="text-center">20.9</td>
<td className="text-center">25.0</td>
<td className="text-center">33.7</td>   </tr>   <tr>
<td colSpan="7" className="text-center">(H/U<sup>a</sup> &le; 3.0; U density &le; 4.58 g/cm<sup>3</sup>)</td>   </tr>   <tr>
<td className="text-center">64</td>
<td className="text-center">8.7</td>
<td className="text-center">12.0</td>
<td className="text-center">17.5</td>
<td className="text-center">23.2</td>
<td className="text-center">27.0</td>
<td className="text-center">34.5</td>   </tr>   <tr>
<td className="text-center">125</td>
<td className="text-center">6.9</td>
<td className="text-center">9.7</td>
<td className="text-center">14.3</td>
<td className="text-center">19.2</td>
<td className="text-center">22.6</td>
<td className="text-center">29.4</td>   </tr>   <tr>
<td className="text-center">216</td>
<td className="text-center">5.8</td>
<td className="text-center">8.1</td>
<td className="text-center">12.1</td>
<td className="text-center">16.4</td>
<td className="text-center">19.4</td>
<td className="text-center">25.6</td>   </tr>   <tr>
<td className="text-center">343</td>
<td className="text-center">5.0</td>
<td className="text-center">7.0</td>
<td className="text-center">10.5</td>
<td className="text-center">14.3</td>
<td className="text-center">17.1</td>
<td className="text-center">22.7</td>   </tr>   <tr>
<td className="text-center">512</td>
<td className="text-center">4.3</td>
<td className="text-center">6.1</td>
<td className="text-center">9.2</td>
<td className="text-center">12.7</td>
<td className="text-center">15.2</td>
<td className="text-center">20.4</td>   </tr>   <tr>
<td className="text-center">729</td>
<td className="text-center">3.9</td>
<td className="text-center">5.5</td>
<td className="text-center">8.3</td>
<td className="text-center">11.4</td>
<td className="text-center">13.7</td>
<td className="text-center">18.5</td>   </tr>   <tr>
<td colSpan="7" className="text-center">(H/U<sup>a</sup> &le; 10; U density &le; 2.06 g/cm<sup>3</sup>)</td>   </tr>   <tr>
<td className="text-center">125</td>
<td className="text-center">3.2</td>
<td className="text-center">4.4</td>
<td className="text-center">6.4</td>
<td className="text-center">8.6</td>
<td className="text-center">10.1</td>
<td className="text-center">13.0</td>   </tr>   <tr>
<td className="text-center">216</td>
<td className="text-center">2.6</td>
<td className="text-center">3.7</td>
<td className="text-center">5.4</td>
<td className="text-center">7.4</td>
<td className="text-center">8.7</td>
<td className="text-center">11.4</td>   </tr>   <tr>
<td className="text-center">343</td>
<td className="text-center">2.3</td>
<td className="text-center">3.2</td>
<td className="text-center">4.7</td>
<td className="text-center">6.4</td>
<td className="text-center">7.7</td>
<td className="text-center">10.1</td>   </tr>   <tr>
<td className="text-center">512</td>
<td className="text-center">2.0</td>
<td className="text-center">2.8</td>
<td className="text-center">4.2</td>
<td className="text-center">5.7</td>
<td className="text-center">6.8</td>
<td className="text-center">9.1</td>   </tr>   <tr>
<td className="text-center">729</td>
<td className="text-center">1.8</td>
<td className="text-center">2.5</td>
<td className="text-center">3.7</td>
<td className="text-center">5.2</td>
<td className="text-center">6.2</td>
<td className="text-center">8.3</td>   </tr>   <tr>
<td className="text-center">1000</td>
<td className="text-center">1.6</td>
<td className="text-center">2.2</td>
<td className="text-center">3.4</td>
<td className="text-center">4.7</td>
<td className="text-center">5.6</td>
<td className="text-center">7.6</td>   </tr>   <tr>
<td colSpan="7" className="text-center">(H/U<sup>a</sup> &le; 20; U density &le; 1.15 g/cm<sup>3</sup>)</td>   </tr>   <tr>
<td className="text-center">64</td>
<td className="text-center">2.1</td>
<td className="text-center">2.9</td>
<td className="text-center">4.2</td>
<td className="text-center">5.4</td>
<td className="text-center">6.3</td>
<td className="text-center">7.8</td>   </tr>   <tr>
<td className="text-center">125</td>
<td className="text-center">1.7</td>
<td className="text-center">2.4</td>
<td className="text-center">3.4</td>
<td className="text-center">4.5</td>
<td className="text-center">5.3</td>
<td className="text-center">6.8</td>   </tr>   <tr>
<td className="text-center">216</td>
<td className="text-center">1.4</td>
<td className="text-center">2.0</td>
<td className="text-center">2.9</td>
<td className="text-center">3.9</td>
<td className="text-center">4.6</td>
<td className="text-center">6.0</td>   </tr>   <tr>
<td className="text-center">512</td>
<td className="text-center">1.1</td>
<td className="text-center">1.5</td>
<td className="text-center">2.2</td>
<td className="text-center">3.1</td>
<td className="text-center">3.6</td>
<td className="text-center">4.8</td>   </tr>   <tr>
<td className="text-center">729</td>
<td className="text-center">1.0</td>
<td className="text-center">1.3</td>
<td className="text-center">2.0</td>
<td className="text-center">2.8</td>
<td className="text-center">3.3</td>
<td className="text-center">4.4</td>   </tr>   <tr>
<td className="text-center">1000</td>
<td className="text-center">0.9</td>
<td className="text-center">1.2</td>
<td className="text-center">1.8</td>
<td className="text-center">2.5</td>
<td className="text-center">3.0</td>
<td className="text-center">4.0</td>   </tr>   </table>   <p><sup>a</sup>&nbsp;Atomic ratio of hydrogen to uranium.</p>  <br />
<table className="table table-striped">  <caption className="text-left">Table 6-6: Unit mass limit in kilograms of uranium per cell in water-reflected storage arrays &ndash; oxides, 30 wt-% <sup>235</sup>U, 70 wt-% <sup>238</sup>U [ANSI/ANS-8.7]</caption>   <tr>
<th rowspan="2" className="text-center text-center">Number of units in cubic storage arrays</th>
<th colSpan="6" className="text-center">Minimum dimension of cubic storage cell (mm)</th>   </tr>   <tr>
<th className="text-center">254</th>
<th className="text-center">305</th>
<th className="text-center">381</th>
<th className="text-center">457</th>
<th className="text-center">508</th>
<th className="text-center">610</th>   </tr>   <tr>
<td colSpan="7" className="text-center">(H/U<sup>a</sup> &le; 0.4; U density &le; 8.38 g/cm<sup>3</sup>)</td>   </tr>   <tr>
<td className="text-center">64</td>
<td className="text-center">24.6</td>
<td className="text-center">34.2</td>
<td className="text-center">50.5</td>
<td className="text-center">68.0</td>
<td className="text-center">80.0</td>
<td className="text-center">103.9</td>   </tr>   <tr>
<td className="text-center">125</td>
<td className="text-center">19.5</td>
<td className="text-center">27.4</td>
<td className="text-center">40.8</td>
<td className="text-center">55.7</td>
<td className="text-center">66.1</td>
<td className="text-center">87.3</td>   </tr>   <tr>
<td className="text-center">216</td>
<td className="text-center">16.2</td>
<td className="text-center">22.9</td>
<td className="text-center">34.3</td>
<td className="text-center">47.3</td>
<td className="text-center">56.4</td>
<td className="text-center">75.4</td>   </tr>   <tr>
<td className="text-center">343</td>
<td className="text-center">13.9</td>
<td className="text-center">19.6</td>
<td className="text-center">29.7</td>
<td className="text-center">41.0</td>
<td className="text-center">49.2</td>
<td className="text-center">66.4</td>   </tr>   <tr>
<td className="text-center">512</td>
<td className="text-center">12.1</td>
<td className="text-center">17.2</td>
<td className="text-center">26.1</td>
<td className="text-center">36.3</td>
<td className="text-center">43.7</td>
<td className="text-center">59.3</td>   </tr>   <tr>
<td className="text-center">729</td>
<td className="text-center">10.8</td>
<td className="text-center">15.3</td>
<td className="text-center">23.3</td>
<td className="text-center">32.5</td>
<td className="text-center">39.2</td>
<td className="text-center">53.6</td>   </tr>   <tr>
<td className="text-center">1000</td>
<td className="text-center">9.7</td>
<td className="text-center">13.8</td>
<td className="text-center">21.1</td>
<td className="text-center">29.5</td>
<td className="text-center">35.6</td>
<td className="text-center">48.9</td>   </tr>   <tr>
<td colSpan="7" className="text-center">(H/U<sup>a</sup> &le; 3.0; U density &le; 4.58 g/cm<sup>3</sup>)</td>   </tr>   <tr>
<td className="text-center">64</td>
<td className="text-center">11.1</td>
<td className="text-center">15.3</td>
<td className="text-center">22.4</td>
<td className="text-center">29.8</td>
<td className="text-center">34.8</td>
<td className="text-center">44.5</td>   </tr>   <tr>
<td className="text-center">125</td>
<td className="text-center">8.8</td>
<td className="text-center">12.3</td>
<td className="text-center">18.2</td>
<td className="text-center">24.6</td>
<td className="text-center">29.0</td>
<td className="text-center">37.8</td>   </tr>   <tr>
<td className="text-center">216</td>
<td className="text-center">7.4</td>
<td className="text-center">10.3</td>
<td className="text-center">15.4</td>
<td className="text-center">21.0</td>
<td className="text-center">24.9</td>
<td className="text-center">32.9</td>   </tr>   <tr>
<td className="text-center">343</td>
<td className="text-center">6.3</td>
<td className="text-center">8.9</td>
<td className="text-center">13.3</td>
<td className="text-center">18.3</td>
<td className="text-center">21.8</td>
<td className="text-center">29.1</td>   </tr>   <tr>
<td className="text-center">512</td>
<td className="text-center">5.5</td>
<td className="text-center">7.8</td>
<td className="text-center">11.8</td>
<td className="text-center">16.2</td>
<td className="text-center">19.4</td>
<td className="text-center">26.2</td>   </tr>   <tr>
<td className="text-center">729</td>
<td className="text-center">4.9</td>
<td className="text-center">7.0</td>
<td className="text-center">10.5</td>
<td className="text-center">14.6</td>
<td className="text-center">17.5</td>
<td className="text-center">23.7</td>   </tr>   <tr>
<td className="text-center">1000</td>
<td className="text-center">4.4</td>
<td className="text-center">6.3</td>
<td className="text-center">9.5</td>
<td className="text-center">13.3</td>
<td className="text-center">16.0</td>
<td className="text-center">21.7</td>   </tr>   <tr>
<td colSpan="7" className="text-center">(H/U<sup>a</sup> &le; 20; U density &le; 1.15 g/cm<sup>3</sup>)</td>   </tr>   <tr>
<td className="text-center">125</td>
<td className="text-center">1.9</td>
<td className="text-center">2.6</td>
<td className="text-center">3.9</td>
<td className="text-center">5.1</td>
<td className="text-center">6.0</td>
<td className="text-center">7.7</td>   </tr>   <tr>
<td className="text-center">216</td>
<td className="text-center">1.6</td>
<td className="text-center">2.2</td>
<td className="text-center">3.3</td>
<td className="text-center">4.4</td>
<td className="text-center">5.2</td>
<td className="text-center">6.7</td>   </tr>   <tr>
<td className="text-center">343</td>
<td className="text-center">1.4</td>
<td className="text-center">1.9</td>
<td className="text-center">2.9</td>
<td className="text-center">3.9</td>
<td className="text-center">4.6</td>
<td className="text-center">6.0</td>   </tr>   <tr>
<td className="text-center">512</td>
<td className="text-center">1.2</td>
<td className="text-center">1.7</td>
<td className="text-center">2.5</td>
<td className="text-center">3.5</td>
<td className="text-center">4.1</td>
<td className="text-center">5.4</td>   </tr>   <tr>
<td className="text-center">729</td>
<td className="text-center">1.1</td>
<td className="text-center">1.5</td>
<td className="text-center">2.3</td>
<td className="text-center">3.1</td>
<td className="text-center">3.7</td>
<td className="text-center">5.0</td>   </tr>   <tr>
<td className="text-center">1000</td>
<td className="text-center">1.0</td>
<td className="text-center">1.4</td>
<td className="text-center">2.1</td>
<td className="text-center">2.8</td>
<td className="text-center">3.4</td>
<td className="text-center">4.6</td>   </tr>   </table>
<p><sup>a</sup>&nbsp;Atomic ratio of hydrogen to uranium.</p>  <br />
<table className="table table-striped">  <caption className="text-left">Table 6-7: Unit mass limit in kilograms of plutonium per cell in water-reflected storage arrays &ndash; metal, 100 wt-% <sup>239</sup>Pu [ANSI/ANS-8.7]</caption>   <tr>
<th rowspan="2" className="text-center text-center">Number of units in cubic storage arrays</th>
<th colSpan="6" className="text-center">Minimum dimension of cubic storage cell (mm)</th>   </tr>   <tr>
<th className="text-center">254</th>
<th className="text-center">305</th>
<th className="text-center">381</th>
<th className="text-center">457</th>
<th className="text-center">508</th>
<th className="text-center">610</th>   </tr>   <tr>
<td colSpan="7" className="text-center">(H/Pu<sup>a</sup> &le; 0.01 ; Pu density &le; 19.7 g/cm<sup>3</sup>)</td>   </tr>   <tr>
<td className="text-center">64</td>
<td className="text-center">3.4</td>
<td className="text-center">4.1</td>
<td className="text-center">4.9</td>
<td className="text-center">5.5<sup>b</sup></td>
<td className="text-center">5.8<sup>b</sup></td>
<td className="text-center">6.3<sup>b</sup></td>   </tr>   <tr>
<td className="text-center">125</td>
<td className="text-center">2.9</td>
<td className="text-center">3.6</td>
<td className="text-center">4.4</td>
<td className="text-center">5.1<sup>b</sup></td>
<td className="text-center">5.4<sup>b</sup></td>
<td className="text-center">6.0<sup>b</sup></td>   </tr>   <tr>
<td className="text-center">216</td>
<td className="text-center">2.6</td>
<td className="text-center">3.2</td>
<td className="text-center">4.1</td>
<td className="text-center">4.7</td>
<td className="text-center">5.1<sup>b</sup></td>
<td className="text-center">5.7<sup>b</sup></td>   </tr>   <tr>
<td className="text-center">343</td>
<td className="text-center">2.3</td>
<td className="text-center">2.9</td>
<td className="text-center">3.8</td>
<td className="text-center">4.4</td>
<td className="text-center">4.8<sup>b</sup></td>
<td className="text-center">5.4<sup>b</sup></td>   </tr>   <tr>
<td className="text-center">512</td>
<td className="text-center">2.1</td>
<td className="text-center">2.7</td>
<td className="text-center">3.5</td>
<td className="text-center">4.2</td>
<td className="text-center">4.6</td>
<td className="text-center">5.2<sup>b</sup></td>   </tr>   <tr>
<td className="text-center">729</td>
<td className="text-center">1.9</td>
<td className="text-center">2.5</td>
<td className="text-center">3.3</td>
<td className="text-center">3.9</td>
<td className="text-center">4.3</td>
<td className="text-center">5.0<sup>b</sup></td>   </tr>   <tr>
<td className="text-center">1000</td>
<td className="text-center">1.7</td>
<td className="text-center">2.3</td>
<td className="text-center">3.1</td>
<td className="text-center">3.7</td>
<td className="text-center">4.1</td>
<td className="text-center">4.8</td>   </tr>   </table>   <p><sup>a</sup>&nbsp;Atomic ratio of hydrogen to plutonium.<br />
<sup>b</sup>&nbsp;Values are greater than 90% of critical spherical mass, water reflected.</p>  <br />
<table className="table table-striped">  <caption className="text-left">Table 6-8: Unit mass limit in kilograms of plutonium per cell in water-reflected storage arrays &ndash; oxides, 100 wt-% <sup>239</sup>Pu [ANSI/ANS-8.7]</caption>   <tr>
<th rowspan="2" className="text-center text-center">Number of units in cubic storage arrays</th>
<th colSpan="6" className="text-center">Minimum dimension of cubic storage cell (mm)</th>   </tr>   <tr>
<th className="text-center">254</th>
<th className="text-center">305</th>
<th className="text-center">381</th>
<th className="text-center">457</th>
<th className="text-center">508</th>
<th className="text-center">610</th>   </tr>   <tr>
<td colSpan="7" className="text-center">(H/Pu<sup>a</sup> &le; 0.4 ; Pu density &le; 8.73 g/cm<sup>3</sup>)</td>   </tr>   <tr>
<td className="text-center">64</td>
<td className="text-center">4.7</td>
<td className="text-center">6.1</td>
<td className="text-center">8.2</td>
<td className="text-center">10.0</td>
<td className="text-center">11.1<sup>b</sup></td>
<td className="text-center">12.9<sup>b</sup></td>   </tr>   <tr>
<td className="text-center">125</td>
<td className="text-center">3.9</td>
<td className="text-center">5.1</td>
<td className="text-center">7.0</td>
<td className="text-center">8.8</td>
<td className="text-center">9.9</td>
<td className="text-center">11.7<sup>b</sup></td>   </tr>   <tr>
<td className="text-center">216</td>
<td className="text-center">3.3</td>
<td className="text-center">4.4</td>
<td className="text-center">6.2</td>
<td className="text-center">7.8</td>
<td className="text-center">8.9</td>
<td className="text-center">10.7<sup>b</sup></td>   </tr>   <tr>
<td className="text-center">343</td>
<td className="text-center">2.9</td>
<td className="text-center">3.9</td>
<td className="text-center">5.5</td>
<td className="text-center">7.1</td>
<td className="text-center">8.1</td>
<td className="text-center">9.9</td>   </tr>   <tr>
<td className="text-center">512</td>
<td className="text-center">2.5</td>
<td className="text-center">3.5</td>
<td className="text-center">4.9</td>
<td className="text-center">6.4</td>
<td className="text-center">7.4</td>
<td className="text-center">9.2</td>   </tr>   <tr>
<td className="text-center">729</td>
<td className="text-center">2.3</td>
<td className="text-center">3.1</td>
<td className="text-center">4.5</td>
<td className="text-center">5.9</td>
<td className="text-center">6.8</td>
<td className="text-center">8.6</td>   </tr>   <tr>
<td className="text-center">1000</td>
<td className="text-center">2.1</td>
<td className="text-center">2.9</td>
<td className="text-center">4.1</td>
<td className="text-center">5.5</td>
<td className="text-center">6.3</td>
<td className="text-center">8.0</td>   </tr>   <tr>
<td colSpan="7" className="text-center">(H/Pu<sup>a</sup> &le; 3.0 ; Pu density &le; 4.70 g/cm<sup>3</sup>)</td>   </tr>   <tr>
<td className="text-center">64</td>
<td className="text-center">3.9</td>
<td className="text-center">5.2</td>
<td className="text-center">7.2</td>
<td className="text-center">9.0</td>
<td className="text-center">10.1</td>
<td className="text-center">12.0<sup>b</sup></td>   </tr>   <tr>
<td className="text-center">125</td>
<td className="text-center">3.2</td>
<td className="text-center">4.3</td>
<td className="text-center">6.1</td>
<td className="text-center">7.8</td>
<td className="text-center">8.8</td>
<td className="text-center">10.7</td>   </tr>   <tr>
<td className="text-center">216</td>
<td className="text-center">2.7</td>
<td className="text-center">3.7</td>
<td className="text-center">5.2</td>
<td className="text-center">6.8</td>
<td className="text-center">7.8</td>
<td className="text-center">9.7</td>   </tr>   <tr>
<td className="text-center">343</td>
<td className="text-center">2.3</td>
<td className="text-center">3.2</td>
<td className="text-center">4.6</td>
<td className="text-center">6.1</td>
<td className="text-center">7.0</td>
<td className="text-center">8.9</td>   </tr>   <tr>
<td className="text-center">512</td>
<td className="text-center">2.1</td>
<td className="text-center">2.9</td>
<td className="text-center">4.1</td>
<td className="text-center">5.5</td>
<td className="text-center">6.4</td>
<td className="text-center">8.1</td>   </tr>   <tr>
<td className="text-center">729</td>
<td className="text-center">1.8</td>
<td className="text-center">2.6</td>
<td className="text-center">3.8</td>
<td className="text-center">5.0</td>
<td className="text-center">5.9</td>
<td className="text-center">7.5</td>   </tr>   <tr>
<td className="text-center">1000</td>
<td className="text-center">1.7</td>
<td className="text-center">2.3</td>
<td className="text-center">3.4</td>
<td className="text-center">4.6</td>
<td className="text-center">5.4</td>
<td className="text-center">7.0</td>   </tr>   <tr>
<td colSpan="7" className="text-center">(H/Pu<sup>a</sup> &le; 10 ; Pu density &le; 2.10 g/cm<sup>3</sup>)</td>   </tr>   <tr>
<td className="text-center">64</td>
<td className="text-center">2.4</td>
<td className="text-center">3.3</td>
<td className="text-center">4.6</td>
<td className="text-center">5.8</td>
<td className="text-center">6.6</td>
<td className="text-center">8.1<sup>b</sup></td>   </tr>   <tr>
<td className="text-center">125</td>
<td className="text-center">1.9</td>
<td className="text-center">2.7</td>
<td className="text-center">3.8</td>
<td className="text-center">5.0</td>
<td className="text-center">5.7</td>
<td className="text-center">7.1</td>   </tr>   <tr>
<td className="text-center">216</td>
<td className="text-center">1.6</td>
<td className="text-center">2.3</td>
<td className="text-center">3.3</td>
<td className="text-center">4.3</td>
<td className="text-center">5.0</td>
<td className="text-center">6.3</td>   </tr>   <tr>
<td className="text-center">343</td>
<td className="text-center">1.4</td>
<td className="text-center">2.0</td>
<td className="text-center">2.9</td>
<td className="text-center">3.8</td>
<td className="text-center">4.5</td>
<td className="text-center">5.7</td>   </tr>   <tr>
<td className="text-center">512</td>
<td className="text-center">1.2</td>
<td className="text-center">1.7</td>
<td className="text-center">2.5</td>
<td className="text-center">3.4</td>
<td className="text-center">4.0</td>
<td className="text-center">5.2</td>   </tr>   <tr>
<td className="text-center">729</td>
<td className="text-center">1.1</td>
<td className="text-center">1.6</td>
<td className="text-center">2.3</td>
<td className="text-center">3.1</td>
<td className="text-center">3.7</td>
<td className="text-center">4.8</td>   </tr>   <tr>
<td className="text-center">1000</td>
<td className="text-center">1.0</td>
<td className="text-center">1.4</td>
<td className="text-center">2.1</td>
<td className="text-center">2.8</td>
<td className="text-center">3.4</td>
<td className="text-center">4.4</td>   </tr>   <tr>
<td colSpan="7" className="text-center">(H/Pu<sup>a</sup> &le; 20 ; Pu density &le; 1.17 g/cm<sup>3</sup>)</td>   </tr>   <tr>
<td className="text-center">64</td>
<td className="text-center">1.6</td>
<td className="text-center">2.1</td>
<td className="text-center">3.0</td>
<td className="text-center">3.8</td>
<td className="text-center">4.4</td>
<td className="text-center">5.4<sup>b</sup></td>   </tr>   <tr>
<td className="text-center">125</td>
<td className="text-center">1.3</td>
<td className="text-center">1.7</td>
<td className="text-center">2.5</td>
<td className="text-center">3.2</td>
<td className="text-center">3.7</td>
<td className="text-center">4.7</td>   </tr>   <tr>
<td className="text-center">216</td>
<td className="text-center">1.1</td>
<td className="text-center">1.5</td>
<td className="text-center">2.1</td>
<td className="text-center">2.8</td>
<td className="text-center">3.3</td>
<td className="text-center">4.2</td>   </tr>   <tr>
<td className="text-center">343</td>
<td className="text-center">0.9</td>
<td className="text-center">1.3</td>
<td className="text-center">1.9</td>
<td className="text-center">2.5</td>
<td className="text-center">2.9</td>
<td className="text-center">3.8</td>   </tr>   <tr>
<td className="text-center">512</td>
<td className="text-center">0.8</td>
<td className="text-center">1.1</td>
<td className="text-center">1.6</td>
<td className="text-center">2.2</td>
<td className="text-center">2.6</td>
<td className="text-center">3.4</td>   </tr>   <tr>
<td className="text-center">729</td>
<td className="text-center">0.7</td>
<td className="text-center">1.0</td>
<td className="text-center">1.5</td>
<td className="text-center">2.0</td>
<td className="text-center">2.4</td>
<td className="text-center">3.1</td>   </tr>   <tr>
<td className="text-center">1000</td>
<td className="text-center">0.6</td>
<td className="text-center">0.9</td>
<td className="text-center">1.3</td>
<td className="text-center">1.8</td>
<td className="text-center">2.2</td>
<td className="text-center">2.9</td>   </tr>   </table>   <p><sup>a</sup>&nbsp;Atomic ratio of hydrogen to plutonium.<br />
<sup>b</sup>&nbsp;Values are greater than 90% of critical spherical mass, water reflected.</p>  <br />
<table className="table table-striped">  <caption>Table 6-9: Unit mass limit in kilograms of plutonium per cell in water-reflected storage arrays &ndash; metal and oxides, 94.8 wt-% <sup>239</sup>Pu, 5.2-wt % <sup>240</sup>Pu [ANSI/ANS-8.7]</caption>   <tr>
<th rowspan="2" className="text-center text-center">Number of units in cubic storage arrays</th>
<th colSpan="6" className="text-center">Minimum dimension of cubic storage cell (mm)</th>   </tr>   <tr>
<th className="text-center">254</th>
<th className="text-center">305</th>
<th className="text-center">381</th>
<th className="text-center">457</th>
<th className="text-center">508</th>
<th className="text-center">610</th>   </tr>   <tr>
<td colSpan="7" className="text-center">(Metal; H/Pu<sup>a</sup> &le; 0.01; Pu density &le; 19.7 g/cm<sup>3</sup>)</td>   </tr>   <tr>
<td className="text-center">64</td>
<td className="text-center">3.5</td>
<td className="text-center">4.3</td>
<td className="text-center">5.2</td>
<td className="text-center">5.8<sup>b</sup></td>
<td className="text-center">6.2<sup>b</sup></td>
<td className="text-center">6 7<sup>b</sup></td>   </tr>   <tr>
<td className="text-center">125</td>
<td className="text-center">3.0</td>
<td className="text-center">3.8</td>
<td className="text-center">4.7</td>
<td className="text-center">5.4<sup>b</sup></td>
<td className="text-center">5.8<sup>b</sup></td>
<td className="text-center">6.3<sup>b</sup></td>   </tr>   <tr>
<td className="text-center">216</td>
<td className="text-center">2.7</td>
<td className="text-center">3.4</td>
<td className="text-center">4.3</td>
<td className="text-center">5.0</td>
<td className="text-center">5.4<sup>b</sup></td>
<td className="text-center">6.0<sup>b</sup></td>   </tr>   <tr>
<td className="text-center">343</td>
<td className="text-center">2.4</td>
<td className="text-center">3.0</td>
<td className="text-center">3.9</td>
<td className="text-center">4.7</td>
<td className="text-center">5.1</td>
<td className="text-center">5.8<sup>b</sup></td>   </tr>   <tr>
<td className="text-center">512</td>
<td className="text-center">2.2</td>
<td className="text-center">2.8</td>
<td className="text-center">3.7</td>
<td className="text-center">4.4</td>
<td className="text-center">4.8</td>
<td className="text-center">5.5<sup>b</sup></td>   </tr>   <tr>
<td className="text-center">729</td>
<td className="text-center">2.0</td>
<td className="text-center">2.6</td>
<td className="text-center">3.4</td>
<td className="text-center">4.2</td>
<td className="text-center">4.6</td>
<td className="text-center">5.3</td>   </tr>   <tr>
<td className="text-center">1000</td>
<td className="text-center">1.8</td>
<td className="text-center">2.4</td>
<td className="text-center">3.2</td>
<td className="text-center">3.9</td>
<td className="text-center">4.4</td>
<td className="text-center">5.1</td>   </tr>   <tr>
<td colSpan="7" className="text-center">(Oxides of Plutonium; H/Pu<sup>a</sup> &le; 0.4; Pu density &le; 8.73 g/cm<sup>3</sup>)</td>   </tr>   <tr>
<td className="text-center">64</td>
<td className="text-center">5.0</td>
<td className="text-center">6.6</td>
<td className="text-center">8.8</td>
<td className="text-center">10.9</td>
<td className="text-center">12.0<sup>b</sup></td>
<td className="text-center">14.0<sup>b</sup></td>   </tr>   <tr>
<td className="text-center">125</td>
<td className="text-center">4.1</td>
<td className="text-center">5.5</td>
<td className="text-center">7.6</td>
<td className="text-center">9.5</td>
<td className="text-center">10.7</td>
<td className="text-center">12.7<sup>b</sup></td>   </tr>   <tr>
<td className="text-center">216</td>
<td className="text-center">3.5</td>
<td className="text-center">4.7</td>
<td className="text-center">6.6</td>
<td className="text-center">8.4</td>
<td className="text-center">9.6</td>
<td className="text-center">11.6<sup>b</sup></td>   </tr>   <tr>
<td className="text-center">343</td>
<td className="text-center">3.1</td>
<td className="text-center">4.2</td>
<td className="text-center">5.9</td>
<td className="text-center">7.6</td>
<td className="text-center">8.7</td>
<td className="text-center">10.7</td>   </tr>   <tr>
<td className="text-center">512</td>
<td className="text-center">2.7</td>
<td className="text-center">3.7</td>
<td className="text-center">5.3</td>
<td className="text-center">6.9</td>
<td className="text-center">8.0</td>
<td className="text-center">9.9</td>   </tr>   <tr>
<td className="text-center">729</td>
<td className="text-center">2.4</td>
<td className="text-center">3.3</td>
<td className="text-center">4.8</td>
<td className="text-center">6.3</td>
<td className="text-center">7.3</td>
<td className="text-center">9.2</td>   </tr>   <tr>
<td className="text-center">1000</td>
<td className="text-center">2.2</td>
<td className="text-center">3.0</td>
<td className="text-center">4.4</td>
<td className="text-center">5.9</td>
<td className="text-center">6.8</td>
<td className="text-center">8.7</td>   </tr>   <tr>
<td colSpan="7" className="text-center">(Oxides of Plutonium; H/Pu<sup>a</sup> &le; 3.0; Pu density &le; 4.70 g/cm<sup>3</sup>)</td>   </tr>   <tr>
<td className="text-center">64</td>
<td className="text-center">4.4</td>
<td className="text-center">5.9</td>
<td className="text-center">8.1</td>
<td className="text-center">10.3</td>
<td className="text-center">11.6</td>
<td className="text-center">13.9<sup>b</sup></td>   </tr>   <tr>
<td className="text-center">125</td>
<td className="text-center">3.5</td>
<td className="text-center">4.8</td>
<td className="text-center">6.8</td>
<td className="text-center">8.8</td>
<td className="text-center">10.0</td>
<td className="text-center">12.3<sup>b</sup></td>   </tr>   <tr>
<td className="text-center">216</td>
<td className="text-center">3.0</td>
<td className="text-center">4.1</td>
<td className="text-center">5.9</td>
<td className="text-center">7.7</td>
<td className="text-center">8.9</td>
<td className="text-center">11.1</td>   </tr>   <tr>
<td className="text-center">343</td>
<td className="text-center">2.6</td>
<td className="text-center">3.6</td>
<td className="text-center">5.2</td>
<td className="text-center">6.8</td>
<td className="text-center">7.9</td>
<td className="text-center">10.1</td>   </tr>   <tr>
<td className="text-center">512</td>
<td className="text-center">2.3</td>
<td className="text-center">3.2</td>
<td className="text-center">4.6</td>
<td className="text-center">6.2</td>
<td className="text-center">7.2</td>
<td className="text-center">9.2</td>   </tr>   <tr>
<td className="text-center">729</td>
<td className="text-center">2.0</td>
<td className="text-center">2.8</td>
<td className="text-center">4.2</td>
<td className="text-center">5.6</td>
<td className="text-center">6.6</td>
<td className="text-center">8.5</td>   </tr>   <tr>
<td className="text-center">1000</td>
<td className="text-center">1.8</td>
<td className="text-center">2.6</td>
<td className="text-center">3.8</td>
<td className="text-center">5.1</td>
<td className="text-center">6.1</td>
<td className="text-center">7.9</td>   </tr>   <tr>
<td colSpan="7" className="text-center">(Oxides of Plutonium;<sup>c</sup> H/Pu<sup>a</sup> &le; 10; Pu density &le; 2.10 g/cm<sup>3</sup>)</td>   </tr>   <tr>
<td className="text-center">64</td>
<td className="text-center">3.0</td>
<td className="text-center">4.1</td>
<td className="text-center">5.8</td>
<td className="text-center">7.5</td>
<td className="text-center">8.5</td>
<td className="text-center">10.5</td>   </tr>   <tr>
<td className="text-center">125</td>
<td className="text-center">2.5</td>
<td className="text-center">3.4</td>
<td className="text-center">4.8</td>
<td className="text-center">6.3</td>
<td className="text-center">7.3</td>
<td className="text-center">9.2</td>   </tr>   <tr>
<td className="text-center">216</td>
<td className="text-center">2.1</td>
<td className="text-center">2.8</td>
<td className="text-center">4.1</td>
<td className="text-center">5.5</td>
<td className="text-center">6.4</td>
<td className="text-center">8.2</td>   </tr>   <tr>
<td className="text-center">343</td>
<td className="text-center">1.8</td>
<td className="text-center">2.5</td>
<td className="text-center">3.6</td>
<td className="text-center">4.9</td>
<td className="text-center">5.7</td>
<td className="text-center">7.3</td>   </tr>   <tr>
<td className="text-center">512</td>
<td className="text-center">1.6</td>
<td className="text-center">2.2</td>
<td className="text-center">3.2</td>
<td className="text-center">4.4</td>
<td className="text-center">5.1</td>
<td className="text-center">6.7</td>   </tr>   <tr>
<td className="text-center">729</td>
<td className="text-center">1.4</td>
<td className="text-center">2.0</td>
<td className="text-center">2.9</td>
<td className="text-center">3.9</td>
<td className="text-center">4.7</td>
<td className="text-center">6.1</td>   </tr>   <tr>
<td className="text-center">1000</td>
<td className="text-center">1.3</td>
<td className="text-center">1.8</td>
<td className="text-center">2.6</td>
<td className="text-center">3.6</td>
<td className="text-center">4.3</td>
<td className="text-center">5.7</td>   </tr>   </table>   <p><sup>a</sup>&nbsp;Atomic ratio of hydrogen to plutonium.<br />
<sup>b</sup>&nbsp;Values are greater than 90% of critical spherical mass, water reflected.<br />
<sup>c</sup>&nbsp;Limits applicable to materials containing less that 1 wt-% <sup>241</sup>Pu [32].</p>  <br />
<table className="table table-striped">  <caption>Table 6-10: Unit mass limit in kilograms of plutonium per cell in water-reflected storage arrays &ndash; metal and oxides, 80 wt-% <sup>239</sup>Pu, 20 wt-% <sup>240</sup>Pu [ANSI/ANS-8.7]</caption>   <tr>
<th rowspan="2" className="text-center text-center">Number of units in cubic storage arrays</th>
<th colSpan="6" className="text-center">Minimum dimension of cubic storage cell (mm)</th>   </tr>   <tr>
<th className="text-center">254</th>
<th className="text-center">305</th>
<th className="text-center">381</th>
<th className="text-center">457</th>
<th className="text-center">508</th>
<th className="text-center">610</th>   </tr>   <tr>
<td colSpan="7" className="text-center">(Metal; H/Pu<sup>a</sup> &le; 0.01; Pu density &le; 19.7 g/cm<sup>3</sup>)</td>   </tr>   <tr>
<td className="text-center">64</td>
<td className="text-center">3.9</td>
<td className="text-center">4.7</td>
<td className="text-center">5.7</td>
<td className="text-center">6.5<sup>b</sup></td>
<td className="text-center">6.9<sup>b</sup></td>
<td className="text-center">7.4<sup>b</sup></td>   </tr>   <tr>
<td className="text-center">125</td>
<td className="text-center">3.4</td>
<td className="text-center">4.2</td>
<td className="text-center">5.2</td>
<td className="text-center">6.0</td>
<td className="text-center">6.4<sup>b</sup></td>
<td className="text-center">7.1<sup>b</sup></td>   </tr>   <tr>
<td className="text-center">216</td>
<td className="text-center">2.9</td>
<td className="text-center">3.7</td>
<td className="text-center">4.7</td>
<td className="text-center">5.6</td>
<td className="text-center">6.0</td>
<td className="text-center">6.7<sup>b</sup></td>   </tr>   <tr>
<td className="text-center">343</td>
<td className="text-center">2.6</td>
<td className="text-center">3.4</td>
<td className="text-center">4.4</td>
<td className="text-center">5.2</td>
<td className="text-center">5.7</td>
<td className="text-center">6.4<sup>b</sup></td>   </tr>   <tr>
<td className="text-center">512</td>
<td className="text-center">2.4</td>
<td className="text-center">3.1</td>
<td className="text-center">4.0</td>
<td className="text-center">4.9</td>
<td className="text-center">5.4</td>
<td className="text-center">6.1<sup>b</sup></td>   </tr>   <tr>
<td className="text-center">729</td>
<td className="text-center">2.2</td>
<td className="text-center">2.8</td>
<td className="text-center">3.8</td>
<td className="text-center">4.6</td>
<td className="text-center">5.1</td>
<td className="text-center">5.9</td>   </tr>   <tr>
<td className="text-center">1000</td>
<td className="text-center">2.0</td>
<td className="text-center">2.6</td>
<td className="text-center">3.5</td>
<td className="text-center">4.3</td>
<td className="text-center">4.8</td>
<td className="text-center">5.7</td>   </tr>   <tr>
<td colSpan="7" className="text-center">(Oxides of Plutonium; H/Pu<sup>a</sup> &le; 0.4; Pu density &le; 8.73 g/cm<sup>3</sup>)</td>   </tr>   <tr>
<td className="text-center">64</td>
<td className="text-center">5.7</td>
<td className="text-center">7.5</td>
<td className="text-center">9.9</td>
<td className="text-center">12.1</td>
<td className="text-center">13.4</td>
<td className="text-center">15.5<sup>b</sup></td>   </tr>   <tr>
<td className="text-center">125</td>
<td className="text-center">4.7</td>
<td className="text-center">6.3</td>
<td className="text-center">8.5</td>
<td className="text-center">10.6</td>
<td className="text-center">11.9</td>
<td className="text-center">14.1</td>   </tr>   <tr>
<td className="text-center">216</td>
<td className="text-center">4.0</td>
<td className="text-center">5.4</td>
<td className="text-center">7.5</td>
<td className="text-center">9.5</td>
<td className="text-center">10.7</td>
<td className="text-center">12.9</td>   </tr>   <tr>
<td className="text-center">343</td>
<td className="text-center">3.5</td>
<td className="text-center">4.7</td>
<td className="text-center">6.7</td>
<td className="text-center">8.6</td>
<td className="text-center">9.8</td>
<td className="text-center">11.9</td>   </tr>   <tr>
<td className="text-center">512</td>
<td className="text-center">3.1</td>
<td className="text-center">4.2</td>
<td className="text-center">6.0</td>
<td className="text-center">7.8</td>
<td className="text-center">9.0</td>
<td className="text-center">11.1</td>   </tr>   <tr>
<td className="text-center">729</td>
<td className="text-center">2.8</td>
<td className="text-center">3.8</td>
<td className="text-center">5.5</td>
<td className="text-center">7.2</td>
<td className="text-center">8.3</td>
<td className="text-center">10.4</td>   </tr>   <tr>
<td className="text-center">1000</td>
<td className="text-center">2.5</td>
<td className="text-center">3.5</td>
<td className="text-center">5.0</td>
<td className="text-center">6.6</td>
<td className="text-center">7.7</td>
<td className="text-center">9.7</td>   </tr>   <tr>
<td colSpan="7" className="text-center">(Oxides of Plutonium; H/Pu<sup>a</sup> &le; 3.0; Pu density &le; 4.70 g/cm<sup>3</sup>)</td>   </tr>   <tr>
<td className="text-center">64</td>
<td className="text-center">5.4</td>
<td className="text-center">7.2</td>
<td className="text-center">10.0</td>
<td className="text-center">12.6</td>
<td className="text-center">14.3</td>
<td className="text-center">17.1</td>   </tr>   <tr>
<td className="text-center">125</td>
<td className="text-center">4.4</td>
<td className="text-center">5.9</td>
<td className="text-center">8.4</td>
<td className="text-center">10.8</td>
<td className="text-center">12.4</td>
<td className="text-center">15.2</td>   </tr>   <tr>
<td className="text-center">216</td>
<td className="text-center">3.7</td>
<td className="text-center">5.0</td>
<td className="text-center">7.2</td>
<td className="text-center">9.5</td>
<td className="text-center">10.9</td>
<td className="text-center">13.7</td>   </tr>   <tr>
<td className="text-center">343</td>
<td className="text-center">3.2</td>
<td className="text-center">4.4</td>
<td className="text-center">6.4</td>
<td className="text-center">8.4</td>
<td className="text-center">9.8</td>
<td className="text-center">12.4</td>   </tr>   <tr>
<td className="text-center">512</td>
<td className="text-center">2.8</td>
<td className="text-center">3.9</td>
<td className="text-center">5.7</td>
<td className="text-center">7.6</td>
<td className="text-center">8.9</td>
<td className="text-center">11.4</td>   </tr>   <tr>
<td className="text-center">729</td>
<td className="text-center">2.5</td>
<td className="text-center">3.5</td>
<td className="text-center">5.1</td>
<td className="text-center">6.9</td>
<td className="text-center">8.1</td>
<td className="text-center">10.5</td>   </tr>   <tr>
<td className="text-center">1000</td>
<td className="text-center">2.3</td>
<td className="text-center">3.2</td>
<td className="text-center">4.7</td>
<td className="text-center">6.3</td>
<td className="text-center">7.5</td>
<td className="text-center">9.7</td>   </tr>   <tr>
<td colSpan="7" className="text-center">(Oxides of Plutonium;<sup>c</sup> H/Pu<sup>a</sup> &le; 10; Pu density &le; 2.10 g/cm<sup>3</sup>)</td>   </tr>   <tr>
<td className="text-center">64</td>
<td className="text-center">3.7</td>
<td className="text-center">5.1</td>
<td className="text-center">7.3</td>
<td className="text-center">9.5</td>
<td className="text-center">11.0</td>
<td className="text-center">13.6</td>   </tr>   <tr>
<td className="text-center">125</td>
<td className="text-center">3.0</td>
<td className="text-center">4.1</td>
<td className="text-center">6.0</td>
<td className="text-center">7.9</td>
<td className="text-center">9.3</td>
<td className="text-center">11.8</td>   </tr>   <tr>
<td className="text-center">216</td>
<td className="text-center">2.6</td>
<td className="text-center">3.5</td>
<td className="text-center">5.1</td>
<td className="text-center">6.8</td>
<td className="text-center">8.0</td>
<td className="text-center">10.4</td>   </tr>   <tr>
<td className="text-center">343</td>
<td className="text-center">2.2</td>
<td className="text-center">3.0</td>
<td className="text-center">4.5</td>
<td className="text-center">6.0</td>
<td className="text-center">7.1</td>
<td className="text-center">9.3</td>   </tr>   <tr>
<td className="text-center">512</td>
<td className="text-center">2.0</td>
<td className="text-center">2.6</td>
<td className="text-center">3.9</td>
<td className="text-center">5.4</td>
<td className="text-center">6.4</td>
<td className="text-center">8.4</td>   </tr>   <tr>
<td className="text-center">729</td>
<td className="text-center">1.7</td>
<td className="text-center">2.4</td>
<td className="text-center">3.6</td>
<td className="text-center">4.8</td>
<td className="text-center">5.8</td>
<td className="text-center">7.7</td>   </tr>   <tr>
<td className="text-center">1000</td>
<td className="text-center">1.6</td>
<td className="text-center">2.2</td>
<td className="text-center">3.2</td>
<td className="text-center">4.5</td>
<td className="text-center">5.3</td>
<td className="text-center">7.1</td>   </tr>   </table>   <p><sup>a</sup>&nbsp;Atomic ratio of hydrogen to plutonium.<br />
<sup>b</sup>&nbsp;Values are greater than 90% of critical spherical mass, water reflected.<br />
<sup>c</sup>&nbsp;Limits applicable to materials containing less that 1 wt-% <sup>241</sup>Pu [32].</p>  <br />
<table className="table table-striped"><caption>Table 6-11: Unit mass limit in kilograms of uranium per cell in water-reflected storage arrays &ndash; 100 wt-% <sup>233</sup>U [ANSI/ANS-8.7]</caption>   <tr>
<th rowspan="2" className="text-center text-center">Number of units in cubic storage arrays</th>
<th colSpan="6" className="text-center">Minimum dimension of cubic storage cell (mm)</th>   </tr>   <tr>
<th className="text-center">254</th>
<th className="text-center">305</th>
<th className="text-center">381</th>
<th className="text-center">457</th>
<th className="text-center">508</th>
<th className="text-center">610</th>   </tr>   <tr>
<td colSpan="7" className="text-center">(Metal; H/U<sup>a</sup> &le; 0.01; U density &le; 18.4 g/cm<sup>3</sup>)</td>   </tr>   <tr>
<td className="text-center">64</td>
<td className="text-center">4.2</td>
<td className="text-center">5.3</td>
<td className="text-center">6.7</td>
<td className="text-center">7.8<sup>b</sup></td>
<td className="text-center">8.5<sup>b</sup></td>
<td className="text-center">9.4<sup>b</sup></td>   </tr>   <tr>
<td className="text-center">125</td>
<td className="text-center">3.5</td>
<td className="text-center">4.5</td>
<td className="text-center">5.9</td>
<td className="text-center">7.1<sup>b</sup></td>
<td className="text-center">7.7<sup>b</sup></td>
<td className="text-center">8.8<sup>b</sup></td>   </tr>   <tr>
<td className="text-center">216</td>
<td className="text-center">3.1</td>
<td className="text-center">4.0</td>
<td className="text-center">5.3</td>
<td className="text-center">6.4</td>
<td className="text-center">7.1<sup>b</sup></td>
<td className="text-center">8.2<sup>b</sup></td>   </tr>   <tr>
<td className="text-center">343</td>
<td className="text-center">2.7</td>
<td className="text-center">3.5</td>
<td className="text-center">4.8</td>
<td className="text-center">5.9</td>
<td className="text-center">6.6</td>
<td className="text-center">7.7<sup>b</sup></td>   </tr>   <tr>
<td className="text-center">512</td>
<td className="text-center">2.4</td>
<td className="text-center">3.2</td>
<td className="text-center">4.4</td>
<td className="text-center">5.5</td>
<td className="text-center">6.1</td>
<td className="text-center">7.3<sup>b</sup></td>   </tr>   <tr>
<td className="text-center">729</td>
<td className="text-center">2.2</td>
<td className="text-center">2.9</td>
<td className="text-center">4.0</td>
<td className="text-center">5.1</td>
<td className="text-center">5.8</td>
<td className="text-center">6.9<sup>b</sup></td>   </tr>   <tr>
<td className="text-center">1000</td>
<td className="text-center">2.0</td>
<td className="text-center">2.7</td>
<td className="text-center">3.7</td>
<td className="text-center">4.8</td>
<td className="text-center">5.4</td>
<td className="text-center">6.6</td>   </tr>   <tr>
<td colSpan="7" className="text-center">(Oxides of Uranium; H/U<sup>a</sup> &le; 0.4; U density &le; 8.21 g/cm<sup>3</sup>)</td>   </tr>   <tr>
<td className="text-center">64</td>
<td className="text-center">4.9</td>
<td className="text-center">6.6</td>
<td className="text-center">9.1</td>
<td className="text-center">11.5</td>
<td className="text-center">12.9<sup>b</sup></td>
<td className="text-center">15.4<sup>b</sup></td>   </tr>   <tr>
<td className="text-center">125</td>
<td className="text-center">4.0</td>
<td className="text-center">5.4</td>
<td className="text-center">7.7</td>
<td className="text-center">9.9</td>
<td className="text-center">11.2</td>
<td className="text-center">13.7<sup>b</sup></td>   </tr>   <tr>
<td className="text-center">216</td>
<td className="text-center">3.4</td>
<td className="text-center">4.6</td>
<td className="text-center">6.6</td>
<td className="text-center">8.6</td>
<td className="text-center">9.9</td>
<td className="text-center">12.4</td>   </tr>   <tr>
<td className="text-center">343</td>
<td className="text-center">2.9</td>
<td className="text-center">4.0</td>
<td className="text-center">5.8</td>
<td className="text-center">7.7</td>
<td className="text-center">8.9</td>
<td className="text-center">11.3</td>   </tr>   <tr>
<td className="text-center">512</td>
<td className="text-center">2.6</td>
<td className="text-center">3.6</td>
<td className="text-center">5.2</td>
<td className="text-center">6.9</td>
<td className="text-center">8.1</td>
<td className="text-center">10.3</td>   </tr>   <tr>
<td className="text-center">729</td>
<td className="text-center">2.3</td>
<td className="text-center">3.2</td>
<td className="text-center">4.7</td>
<td className="text-center">6.3</td>
<td className="text-center">7.4</td>
<td className="text-center">9.6</td>   </tr>   <tr>
<td className="text-center">1000</td>
<td className="text-center">2.1</td>
<td className="text-center">2.9</td>
<td className="text-center">4.3</td>
<td className="text-center">5.8</td>
<td className="text-center">6.8</td>
<td className="text-center">8.9</td>   </tr>   </table>   <p><sup>a</sup>&nbsp;Atomic ratio of hydrogen to uranium.<br />
<sup>b</sup>&nbsp;Values are greater than 90% of critical spherical mass, water reflected.</p>  <br />
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="7"></div>
<h2 id="sec7">7. Criteria for Nuclear Criticality Safety Controls in Operations with Shielding and Confinement</h2>  <p>Some parts of this section are extracted from ANSI/ANS-8.10-2015, <em>Criteria for Nuclear Criticality Safety Controls in Operations with Shielding and Confinement</em>, with permission of the publisher, the American Nuclear Society. The text may have been adapted to make it applicable to Canada&rsquo;s international obligations to IAEA and consistent with CNSC&rsquo;s regulatory requirements.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="7.1"></div>
<h3 id="sec7-1">7.1	Introduction</h3>  <p>Section 2, <em>Nuclear Criticality Safety in Operations with Fissionable Materials Outside Reactors</em>, provides guidance for the prevention of criticality accidents in the handling, storing, processing, and transporting of fissionable materials. Section 2.3.2.1 states, in part, that "Distinction may be made between shielded and unshielded facilities, and the criteria may be less stringent when adequate shielding and confinement assure the protection of personnel."</p>  <p>Section 7 (this section) recognizes that, if adequate shielding against radiation and confinement of radioactive materials are provided, the hazards normally attendant with criticality in a facility lacking shielding and confinement are minimized.</p>  <p>This section provides criteria for:</p>
<ol>
<li>the prevention of nuclear criticality accidents in facilities with shielding and confinement, and</li>
<li>the adequacy of the required shielding and confinement</li>
</ol>  <p>This section does not apply to those operations requiring entry of personnel inside the shielded process areas wherein fissile and fissionable materials are contained. This section does not include engineering specifications for shield design nor for establishing its adequacy. Nothing in this section shall be interpreted as discouraging additional safety features that can be conveniently incorporated.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="7.2"></div>
<h3 id="sec7-2">7.2	Scope</h3>  <p>This section applies to operations, with <sup>235</sup>U, <sup>233</sup>U, <sup>239</sup>Pu and other fissile and fissionable materials outside of nuclear reactors, in which shielding and confinement are provided for protection of personnel and the public, except the assembly of these materials under controlled conditions, such as in critical experiments. Criteria are provided that may be used for criticality control under these conditions. This section does not include the details of administrative procedures for control (which are considered to be management prerogatives) or details regarding the design of processes and equipment or descriptions of instrumentation for process control.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="7.3"></div>
<h3 id="sec7-3">7.3	Criteria for adequate shielding and confinement</h3>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="7.3.1"></div>
<h4 id="sec7-3-1">7.3.1 Conditions</h4>  <p>The provisions of this section may be applied only in those shielded facilities that meet the following criteria:</p>
<ol>
<li>all operations and manipulations involving fissile and fissionable materials are conducted remotely by persons located outside the shielded area, and</li>
<li>shielding and confinement provided are adequate to meet the radiation dose limits set forth in section 7.3.2</li>
</ol>  <p>Thus, a storage vault does not qualify unless additions or withdrawals of the fissile material are made by remotely operated devices. The criteria that are presented herein consider only the adequacy of the shielding and confinement for criticality accidents. Additional shielding may be required by the process conditions.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="7.3.2"></div>
<h4 id="sec7-3-2">7.3.2 Adequacy of shielding and confinement</h4>  <p>Shielding and confinement are considered adequate when the following conditions are satisfied during and subsequent to an accident. However, better shielding and confinement are desirable if practical.</p>  <h5 id="sec7-3-2-1">7.3.2.1	Radiation dose</h5>  <p>For design evaluation purposes, the radiation source strengths and releases may be estimated by detailed analysis of criticality accidents.</p>  <p>The shielding and confinement shall be such that, following a criticality accident, the whole-body radiation dose [36] received by an individual located at any point outside the shielded and confined area will not exceed the effective dose set out in column 3 of item 1(a) of section 13(1) of the <em>Radiation Protection Regulations</em>.</p>  <p>In addition, the shielding and confinement shall be such that the off site consequences of a criticality accident, as calculated from the start of the accident, do not violate criteria established as a trigger for a temporary public sheltering by <em>Canadian Guidelines for Intervention during a Nuclear Emergency</em> [4].</p>
<h5 id="sec7-3-2-2">7.3.2.2	Shielding and confinement criterion</h5>  <p>The shielding and confinement system of a facility shall be designed to limit the dose resulting from exposure to direct radiation and to radionuclides released from the facility following a criticality accident, to that specified by section 7.3.2.1.</p>
<h5 id="sec7-3-2-3">7.3.2.3	Structural integrity</h5>  <p>The shielding and confinement system shall be designed to withstand physical damage that could cause breach of confinement or injury to personnel in the event of a criticality accident.</p>
<h5 id="sec7-3-2-4">7.3.2.4	Space in lieu of shielding</h5>  <p>If personnel are located remotely from the fissile and fissionable materials, distance may serve in lieu of some or all of the shielding, provided personnel entry into the intervening space is constrained and the other conditions set forth in section 7.3.2 are met.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="7.4"></div>
<h3 id="sec7-4">7.4	Criticality safety practices</h3>  <p>Where shielding and confinement satisfy the criteria of section 7.3, the consequences of criticality accidents are primarily damage to equipment, disruption of processes, spillage of product, contamination of facilities, or other similar consequences.</p>  <p>Accordingly, one may be willing to accept a reduced conservatism in the process analysis. However, facility design and operations are to be based on good engineering practices, which dictate that criticality not occur under normal and abnormal conditions with frequency of occurrence equal to or greater than 10<sup>-5</sup> per year.</p>  <p>Additional guidance for administrative practices can be found in section 12, <em>Administrative Practices for Nuclear Criticality Safety</em>.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="7.4.1"></div>
<h4 id="sec7-4-1">7.4.1	Single contingency operation</h4>  <p>The double contingency principle (described in section 2.3.2.2) recommends that at least two unlikely, independent, and concurrent changes in process conditions occur before nuclear criticality is possible. The number of contingencies may be reduced to unity where the principles of this section are met and the probability of failure of any primary control is shown to be low.</p>  <p>The use of a single contingency should be kept to a minimum; examples of primary methods of control that may constitute acceptable single contingency operation include:</p>
<ul>
<li><strong>Soluble neutron absorber</strong>: reliance on maintaining the prescribed concentration of absorbers, such as boron, gadolinium, or cadmium, the loss of which by precipitation or other means would likely result in a criticality accident</li>
<li><strong>Concentration control</strong>: reliance on maintaining the prescribed concentration of the fissionable nuclide in a solution at a subcritical level</li>
<li><strong>Chemical form</strong>: reliance on maintaining the prescribed concentration of nitrate (NO<sub>3</sub>) or sulphate (SO<sub>4</sub>) or other ions in a solution of fissionable nuclides</li>
<li><strong>Reflectors</strong>: reliance on maintaining prescribed reflector conditions; for example, the exclusion of water flooding</li>
<li><strong>Fission products</strong>: reliance on maintaining the prescribed concentration of fission products associated with the fissionable nuclides</li>
<li><strong>Geometry control</strong>: reliance on maintaining the prescribed geometry of the process material</li>
<li><strong>Isotopic composition of fissionable material</strong>: reliance on maintaining the prescribed concentrations of fissile and nonfissile material</li>
<li><strong>Spacing</strong>: reliance on maintaining the prescribed spacing between discrete units of fissile material</li>
</ul>  <p>If criticality prevention is dependent primarily on administrative action for control, i.e., where improper performance of a required routine operation on the part of an individual might lead to criticality (such as failing to add soluble neutron absorber or exceeding a safe batch limit), then procedures shall be established to ensure that no single administrative error on the part of any one individual leads to criticality.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="7.4.2"></div>
<h4 id="sec7-4-2">7.4.2 Methods for unshielded facilities</h4>  <p>This section in no way precludes the application of section 2, <em>Nuclear Criticality Safety in Operations with Fissionable Materials Outside Reactors</em>, to shielded facilities.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="8"></div>
<h2 id="sec8">8. Nuclear Criticality Control and Safety of Plutonium-Uranium Fuel Mixtures Outside Reactors</h2>  <p>Some parts of this section are extracted from ANSI/ANS-8.12-1987 (reaffirmed in 2016), <em>Nuclear Criticality Control and Safety of Plutonium-Uranium Fuel Mixtures Outside Reactors</em>, with permission of the publisher, the American Nuclear Society. The text may have been adapted to make it applicable to Canada&rsquo;s international obligations to IAEA and consistent with CNSC&rsquo;s regulatory requirements.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="8.1"></div>
<h3 id="sec8-1">8.1	Introduction</h3>  <p>Section 2, <em>Nuclear Criticality Safety in Operations with Fissionable Materials Outside Reactors</em>, provides single-parameter limits for fissionable units of simple shape containing <sup>233</sup>U, <sup>235</sup>U and <sup>239</sup>Pu. As an example of multi-parameter control, it provides an increase in the limits of <sup>235</sup>U resulting from control of the amount of <sup>238</sup>U associated with <sup>235</sup>U in uranium metal and oxide enriched to no more than 5 wt% <sup>235</sup>U. Larger limits for plutonium likewise result from placing reliance on, and hence controlling, the isotopic concentration of <sup>240</sup>Pu and the amount of uranium associated with the plutonium. Such increases may prove valuable for operations with mixed oxides of plutonium and uranium encountered in light water, liquid metal fast breeder, gas-cooled fast reactor, etc, fuel cycle operations.</p>  <p>The limits provided here were calculated [37, 38] by methods satisfying the requirements for validation of a calculational method as set forth in section 2.3.4.</p>  <p>The administrative and technical practices for criticality safety and control as embodied in section 2 and section 12, <em>Administrative Practices for Nuclear Criticality Safety</em>, are applicable herein.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="8.2"></div>
<h3 id="sec8-2">8.2	Scope</h3>  <p>Section 8 (this section) is applicable to operations with plutonium-uranium oxide fuel mixtures outside nuclear reactors, except the assembly of these materials under controlled conditions, such as in critical experiments. Basic criteria are presented for plutonium-uranium fuel mixtures in single units of simple shape containing no more than 30 wt% plutonium combined with uranium containing no more than 0.71 wt% <sup>235</sup>U. The limits for uniform aqueous mixtures (solution) are applicable to homogeneous mixtures and slurries in which the particles constituting the mixture are uniformly distributed and have a diameter no larger than 127 &micro;m (0.005 in.), i.e., are capable of being passed through 120 mesh screen.</p>  <p>This section does not include the details of administrative controls, the design of processes or equipment, the description of instrumentation for process control or detailed criteria to be met in transporting fissionable materials.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="8.3"></div>
<h3 id="sec8-3">8.3	Nuclear criticality safety practices</h3>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="8.3.1"></div>
<h4 id="sec8-3-1">8.3.1	Administrative and technical practices</h4>  <p>Operations within the scope of this section shall be conducted in accordance with section 2. If the limits for plutonium-uranium mixtures given herein are used, an adequate administrative margin of subcriticality shall be applied to ensure compliance with section 2.3.2.2. Attention shall be given to credible abnormal conditions such as those listed in Appendix A.</p>  <p>Additional guidance for administrative practices can be found in section 12.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="8.3.2"></div>
<h4 id="sec8-3-2">8.3.2	Homogeneity control</h4>  <p>Consideration shall be given to the possibility of preferential separation of plutonium from uranium. Neither the limits for homogeneous systems nor those for heterogeneous systems apply unless the plutonium and uranium oxides remain intimately and homogeneously mixed.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="8.4"></div>
<h3 id="sec8-4">8.4	Subcritical limits for uniform, homogeneous plutonium-uranium mixtures in water</h3>  <p>Operations with the fuel mixtures specified may be performed safely by complying with any one of the subcritical limits given in Tables 8-1, 8-2, or 8-3, provided the conditions under which the limit applies are maintained.</p>  <p>A limit shall be applied only when the effect of neutron reflectors and other nearby fissionable materials is no greater than that of a contiguous water reflector of effectively infinite thickness.</p>  <p>Process specifications shall incorporate margins to protect against uncertainties in process variables and against a limit being accidentally exceeded.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="8.4.1"></div>
<h4 id="sec8-4-1">8.4.1	Homogeneous aqueous mixtures</h4>  <p>The limits of Table 8-1 are applicable to homogeneous mixtures of oxides of natural uranium and plutonium provided the plutonium oxide content of the mixture of oxides is between 3 wt% and 30 wt%. Limits are provided for three isotopic compositions of plutonium. In applying these limits, any <sup>238</sup>Pu and <sup>242</sup>Pu present shall be omitted in computing the isotopic composition. All limits in Table 8-1 are valid for uranium containing no more than 0.71 wt% of (<sup>235</sup>U plus <sup>239</sup>Pu).</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="8.4.2"></div>
<h4 id="sec8-4-2">8.4.2	Variation of subcritical limits with PuO<sub>2</sub> content</h4>  <p>The limits of Table 8-1 are appropriate for criticality prevention.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="8.4.3"></div>
<h4 id="sec8-4-3">8.4.3	Dry and damp mixed-oxide powders</h4>  <p>The limits given in Table 8-2 apply to dry and damp mixtures of the oxides of plutonium and natural uranium provided the concentration of <sup>240</sup>Pu exceeds that of <sup>241</sup>Pu. Because completely dry oxide may be difficult to ensure, limits are provided for damp oxides in which 0 < H : (Pu + U) &le; 0.45. (1.48 wt% water corresponds to an H : (Pu + U) &asymp; 0.45). Limits are also provided for oxide powders with 50% voids.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="8.4.4"></div>
<h4 id="sec8-4-4">8.4.4	Limiting concentrations of plutonium in unlimited quantities of mixtures of the oxides and nitrates of plutonium and natural uranium</h4>  <p>The maximum safe concentrations of plutonium in (PuO<sub>2</sub> + UO<sub>2</sub>) or in (Pu(NO<sub>3</sub>)<sub>4</sub> + UO<sub>2</sub>(NO<sub>3</sub>)<sub>2</sub>) in unlimited quantity under the stated conditions are given in Table 8-3. In each case, the value of the infinite multiplication factor, k<sup>&infin;</sup>, is less than unity for these conditions and is independent of the density of the mixture. For example, criticality cannot be achieved in a homogeneous mixture of (PuO<sub>2</sub> + UO<sub>2</sub>) in water if the plutonium content is &le; 0.13 wt% of the combined mass of the (Pu + U) in the oxides. These limits are not applicable to mixtures of elemental plutonium and uranium in water.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="8.5"></div>
<h3 id="sec8-5">8.5	Subcritical limits for mixed-oxide heterogeneous systems</h3>  <p>Lumping the mixed-oxide fuel produces an effect on criticality similar to that which occurs in natural or moderately enriched uranium. The total absorption in <sup>238</sup>U and <sup>240</sup>Pu resonances in the mixed oxide is minimized if the mixed oxide is separated from the moderator, e.g., in a lattice assembly of fuel rods in water, as compared to an aqueous homogeneous mixture of the oxides. Because of the decreased absorption of the <sup>240</sup>Pu as a result of lumping, the effect of <sup>240</sup>Pu on the subcritical limit also can be expected to be smaller than in the case of aqueous homogeneous mixtures.</p>  <p>Subcritical limits are specified in ANSI/ANS-8-12 as a function of both the PuO<sub>2</sub> content in the mixed oxides and the <sup>240</sup>Pu content of the plutonium. In applying these limits, any <sup>238</sup>Pu and <sup>242</sup>Pu present shall be excluded when computing isotopic composition. Those limits are applicable to heterogeneous systems regardless of the size or shape of the mixed oxide pieces or degree of moderation by water.</p>  <p>Process specifications shall incorporate margins to protect against uncertainties in process variables and against a limit being accidentally exceeded.</p>
<table className="table table-header small">  <caption className="text-left">Table&nbsp;8-1: Subcritical Limits for uniform aqueous mixtures of the oxides of plutonium and natural uranium [ANSI/ANS 8-12]<br />
<span className="small">(Note: All values are upper limits except atomic ratios which are lower limits)</span></caption>
<tr>
<th className="text-center">PuO<sub>2</sub> in (PuO<sub>2</sub> + UO<sub>2</sub>), wt%</th>
<th colSpan="3" className="text-center">3</th>
<th colSpan="3" className="text-center">8</th>
<th colSpan="3" className="text-center">15</th>
<th colSpan="3" className="text-center">30<sup>b</sup></th>
</tr>
<tr>
<th className="text-center">Plutonium Isotopic Composition <sup>a</sup></strong></th>
<th className="text-center">I</th>
<th className="text-center">II</th>
<th className="text-center">III</th>
<th className="text-center">I</th>
<th className="text-center">II</th>
<th className="text-center">III</th>
<th className="text-center">I</th>
<th className="text-center">II</th>
<th className="text-center">III</th>
<th className="text-center">I</th>
<th className="text-center">II</th>
<th className="text-center">III</th>
</tr>
<tr>
<td className="text-left">Mass of plutonium in oxide mixture, kg</td>
<td className="text-center">0.73</td>
<td className="text-center">1.35</td>
<td className="text-center">2.00</td>
<td className="text-center">0.61</td>
<td className="text-center">1.06</td>
<td className="text-center">1.53</td>
<td className="text-center">0.54</td>
<td className="text-center">0.94</td>
<td className="text-center">1.28</td>
<td className="text-center">0.50</td>
<td className="text-center">0.87</td>
<td className="text-center">1.16</td>
</tr>
<tr>
<td className="text-left">Mass of (PuO<sub>2</sub>&nbsp;+&nbsp;UO<sub>2</sub>), kg</td>
<td className="text-center">27.5</td>
<td className="text-center">51.3</td>
<td className="text-center">75.9</td>
<td className="text-center">8.6</td>
<td className="text-center">15.1</td>
<td className="text-center">21.7</td>
<td className="text-center">4.1</td>
<td className="text-center">7.1</td>
<td className="text-center">9.7</td>
<td className="text-center">1.9</td>
<td className="text-center">3.3</td>
<td className="text-center">4.4</td>
</tr>
<tr>
<td className="text-center">&#160;</td>
<td className="text-center">&#160;</td>
<td className="text-center">&#160;</td>
<td className="text-center">&#160;</td>
<td className="text-center">&#160;</td>
<td className="text-center">&#160;</td>
<td className="text-center">&#160;</td>
<td className="text-center">&#160;</td>
<td className="text-center">&#160;</td>
<td className="text-center">&#160;</td>
<td className="text-center">&#160;</td>
<td className="text-center">&#160;</td>
<td className="text-center">&#160;</td>
</tr>
<tr>
<td className="text-left">Diameter of infinite cylinder, cm</td>
<td className="text-center">24.3</td>
<td className="text-center">30.8</td>
<td className="text-center">34.8</td>
<td className="text-center">19.8</td>
<td className="text-center">24.9</td>
<td className="text-center">27.5</td>
<td className="text-center">17.8</td>
<td className="text-center">22.5</td>
<td className="text-center">24.8</td>
<td className="text-center">16.2</td>
<td className="text-center">21.0</td>
<td className="text-center">23.4</td>
</tr>
<tr>
<td className="text-left">Thickness of infinite slab, cm</td>
<td className="text-center">11.0</td>
<td className="text-center">14.9</td>
<td className="text-center">17.4</td>
<td className="text-center">8.2</td>
<td className="text-center">11.2</td>
<td className="text-center">12.9</td>
<td className="text-center">6.9</td>
<td className="text-center">9.6</td>
<td className="text-center">11.0</td>
<td className="text-center">5.9</td>
<td className="text-center">8.7</td>
<td className="text-center">9.9</td>
</tr>
<tr>
<td className="text-left">Volume of oxide mixture, liter</td>
<td className="text-center">23.5</td>
<td className="text-center">44.8</td>
<td className="text-center">63.4</td>
<td className="text-center">14.0</td>
<td className="text-center">25.9</td>
<td className="text-center">34.4</td>
<td className="text-center">11.0</td>
<td className="text-center">20.4</td>
<td className="text-center">26.6</td>
<td className="text-center">8.5</td>
<td className="text-center">16.8</td>
<td className="text-center">21.6</td>
</tr>
<tr>
<td className="text-center">&#160;</td>
<td className="text-center">&#160;</td>
<td className="text-center">&#160;</td>
<td className="text-center">&#160;</td>
<td className="text-center">&#160;</td>
<td className="text-center">&#160;</td>
<td className="text-center">&#160;</td>
<td className="text-center">&#160;</td>
<td className="text-center">&#160;</td>
<td className="text-center">&#160;</td>
<td className="text-center">&#160;</td>
<td className="text-center">&#160;</td>
<td className="text-center">&#160;</td>
</tr>
<tr>
<td className="text-left">Concentration of plutonium, g&nbsp;Pu/liter</td>
<td className="text-center">6.8<sup>c</sup></td>
<td className="text-center">8.1</td>
<td className="text-center">9.3</td>
<td className="text-center">6.9</td>
<td className="text-center">8.2</td>
<td className="text-center">9.4</td>
<td className="text-center">7.0</td>
<td className="text-center">8.2</td>
<td className="text-center">9.4</td>
<td className="text-center">7.0</td>
<td className="text-center">8.1</td>
<td className="text-center">9.3</td>
</tr>
<tr>
<td className="text-left">Concentration of oxides, g (PuO<sub>2</sub> + UO<sub>2</sub>)/liter</td>
<td className="text-center">257<sup>c</sup></td>
<td className="text-center">305</td>
<td className="text-center">351</td>
<td className="text-center">97.3</td>
<td className="text-center">116</td>
<td className="text-center">134</td>
<td className="text-center">52.9</td>
<td className="text-center">61.7</td>
<td className="text-center">71.0</td>
<td className="text-center">26.5</td>
<td className="text-center">30.7</td>
<td className="text-center">35.2</td>
</tr>
<tr>
<td className="text-left">H:Pu atomic ratio</td>
<td className="text-center">3780</td>
<td className="text-center">3203</td>
<td className="text-center">2780</td>
<td className="text-center">3780</td>
<td className="text-center">3210</td>
<td className="text-center">2790</td>
<td className="text-center">3780</td>
<td className="text-center">3237</td>
<td className="text-center">2818</td>
<td className="text-center">3780</td>
<td className="text-center">3253</td>
<td className="text-center">2848</td>
</tr>
<tr>
<td className="text-center">&#160;</td>
<td className="text-center">&#160;</td>
<td className="text-center">&#160;</td>
<td className="text-center">&#160;</td>
<td className="text-center">&#160;</td>
<td className="text-center">&#160;</td>
<td className="text-center">&#160;</td>
<td className="text-center">&#160;</td>
<td className="text-center">&#160;</td>
<td className="text-center">&#160;</td>
<td className="text-center">&#160;</td>
<td className="text-center">&#160;</td>
<td className="text-center">&#160;</td>
</tr>
<tr>
<td className="text-left">Areal density of plutonium, g&nbsp;Pu/cm<sup>2</sup></td>
<td className="text-center">0.27</td>
<td className="text-center">0.38</td>
<td className="text-center">0.47</td>
<td className="text-center">0.25</td>
<td className="text-center">0.34</td>
<td className="text-center">0.42</td>
<td className="text-center">0.25</td>
<td className="text-center">0.33</td>
<td className="text-center">0.41</td>
<td className="text-center">0.24</td>
<td className="text-center">0.32</td>
<td className="text-center">0.37</td>
</tr>
<tr>
<td className="text-left">Areal density of oxides, g (PuO<sub>2</sub> + UO<sub>2</sub>)/cm<sup>2</sup></td>
<td className="text-center">10.2</td>
<td className="text-center">14.4</td>
<td className="text-center">17.7</td>
<td className="text-center">3.5</td>
<td className="text-center">4.8</td>
<td className="text-center">5.9</td>
<td className="text-center">1.9</td>
<td className="text-center">2.5</td>
<td className="text-center">3.1</td>
<td className="text-center">0.9</td>
<td className="text-center">1.2</td>
<td className="text-center">1.4</td>
</tr>  </table>  <p><sup>a</sup>&nbsp;Plutonium isotopic composition&nbsp;:<br/>
<strong>I&nbsp;:</strong> <sup>240</sup>Pu&nbsp;&gt;&nbsp;<sup>241</sup>Pu&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>II&nbsp;:</strong> <sup>240</sup>Pu&nbsp;&#8805;&nbsp;15&nbsp;wt% and <sup>241</sup>Pu&nbsp;&#8804;&nbsp;6&nbsp;wt%&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>III&nbsp;:</strong> <sup>240</sup>Pu&nbsp;&#8805;&nbsp;25&nbsp;wt% and <sup>241</sup>Pu&nbsp;&#8804;&nbsp;15&nbsp;wt%.<br />
<sup>b</sup> Dimensional and volume limits do not apply for isotopic compositions II and III, unless for II, the concentration of oxides is less than 5700&nbsp;g/L and, for III, less than 4500&nbsp;g/L.<br />
<sup>c</sup> This concentration limit is not applicable to oxide mixtures in which the PuO<sub>2</sub>/(PuO<sub>2</sub>&nbsp;+&nbsp;UO<sub>2</sub>) ratio is less than 3&nbsp;wt% because of the increased relative importance of <sup>235</sup>U in high-uranium-bearing materials. Limited guidance for material of less than 3&nbsp;wt%&nbsp;PuO<sub>2</sub> may be found in Table&nbsp;8-3.</p>  <br />
<table className="table table-header small">  <caption className="text-left">Table&nbsp;8-2: Subcritical Limits for single units of homogeneously mixed oxides of plutonium and natural uranium at low moderation<br />
[ANSI/ANS 8-12]<br />
<span className="small text-left">(Note: The limits apply to combinations of plutonium isotopes provided <sup>240</sup>Pu&nbsp;&gt;&nbsp;<sup>241</sup>Pu.)</span></caption>
<tr>
<th rowspan="2" className="text-center">PuO<sub>2</sub> in (PuO<sub>2</sub> + UO<sub>2</sub>), wt%</th>
<th colSpan="2" className="text-center">3</th>
<th colSpan="2" className="text-center">8</th>
<th colSpan="2" className="text-center">15</th>
<th colSpan="2" className="text-center">30</th>
</tr>
<tr>
<th className="text-center">Mass of Plutonium, kg</th>
<th className="text-center">Mass of (PuO<sub>2</sub>&nbsp;+&nbsp;UO<sub>2</sub>), kg</th>
<th className="text-center">Mass of Plutonium, kg</th>
<th className="text-center">Mass of (PuO<sub>2</sub>&nbsp;+&nbsp;UO<sub>2</sub>), kg</th>
<th className="text-center">Mass of Plutonium, kg</th>
<th className="text-center">Mass of (PuO<sub>2</sub>&nbsp;+&nbsp;UO<sub>2</sub>), kg</th>
<th className="text-center">Mass of Plutonium, kg</th>
<th className="text-center">Mass of (PuO<sub>2</sub>&nbsp;+&nbsp;UO<sub>2</sub>), kg</th>
</tr>
<tr>
<td><p>Dry mixed oxides at theoretical density</p>
<p>Density of<br/>
(PuO<sub>2</sub> + UO<sub>2</sub>) &#8804; 11 g/cm<sup>3</sup><br/>
H&nbsp;:&nbsp;(Pu + U) = 0</p></td>
<td colSpan="2" className="text-center text-center">Subcritical in any amount</td>
<td className="text-center text-center">122</td>
<td className="text-center text-center">1729</td>
<td className="text-center text-center">47.0</td>
<td className="text-center text-center">355</td>
<td className="text-center text-center">26.1</td>
<td className="text-center text-center">98.6</td>
</tr>
<tr>
<td>&#160;</td>
<td>&#160;</td>
<td>&#160;</td>
<td>&#160;</td>
<td>&#160;</td>
<td>&#160;</td>
<td>&#160;</td>
<td>&#160;</td>
<td>&#160;</td>
</tr>
<tr>
<td><p>Damp mixed oxides at theoretical density</p>
<p>Density of<br/>
(PuO<sub>2</sub> + UO<sub>2</sub>) &#8804; 9.4 g/cm<sup>3</sup><br/>
0&nbsp;&lt;&nbsp;H&nbsp;:&nbsp;(Pu + U) &#8804; 0.45</p></td>
<td className="text-center text-center">236</td>
<td className="text-center text-center">8919</td>
<td className="text-center text-center">49.4</td>
<td className="text-center text-center">700</td>
<td className="text-center text-center">32.9</td>
<td className="text-center text-center">249</td>
<td className="text-center text-center">23.3</td>
<td className="text-center text-center">88.1</td>
</tr>
<tr>
<td>&#160;</td>
<td>&#160;</td>
<td>&#160;</td>
<td>&#160;</td>
<td>&#160;</td>
<td>&#160;</td>
<td>&#160;</td>
<td>&#160;</td>
<td>&#160;</td>
</tr>
<tr>
<td><p>Damp mixed oxides with 50% voids</p>
<p>Density of<br/>
(PuO<sub>2</sub> + UO<sub>2</sub>) &#8804; 4.7 g/cm<sup>3</sup><br/>
0&nbsp;&lt;&nbsp;H&nbsp;:&nbsp;(Pu + U) &#8804; 0.45</p></td>
<td className="text-center text-center">885</td>
<td className="text-center text-center">33,447</td>
<td className="text-center text-center">161</td>
<td className="text-center text-center">2282</td>
<td className="text-center text-center">102</td>
<td className="text-center text-center">771</td>
<td className="text-center text-center">67.9</td>
<td className="text-center text-center">256.6</td>
</tr>  </table>  <br />
<table className="">  <caption className="text-left">Table 8-3: Subcritical concentration limits for plutonium in homogeneous mixtures of plutonium and natural uranium of unlimited mass<sup>a</sup> [ANSI/ANS 8-12]<br />  <span className="small text-left">(Note: These limits apply to combinations of plutonium isotopes provided <sup>240</sup>Pu &gt; <sup>241</sup>Pu.)</span></caption>   <tr>
<th className="text-center">PuO<sub>2</sub> in (PuO<sub>2</sub> + UO<sub>2</sub>)</th>
<th className="text-center">Plutonium Content Pu/(Pu + U), wt%</p></th>   </tr>   <tr>
<td className="text-left">Dry Mixed Oxides, H : (Pu + U) = 0</td>
<td className="text-center">4.4</td>   </tr>   <tr>
<td className="text-left">Damp Mixed Oxides, 0 &lt; H : (Pu + U) &le; 0.45</td>
<td className="text-center">1.8</td>   </tr>   <tr>
<td className="text-left">Oxides in water</td>
<td className="text-center">0.13</td>   </tr>   <tr>
<td className="text-left">Pu(NO<sub>3</sub>)<sub>4</sub> in [Pu(NO<sub>3</sub>)<sub>4</sub> + UO<sub>2</sub>(NO<sub>3</sub>)<sub>2</sub>]</td>
<td className="text-center">0.65</td>   </tr>   </table>   <p><sup>a</sup>&nbsp;These limits are not applicable to atom mixtures of elemental plutonium and uranium</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="9"></div>
<h2 id="sec9">9. Use of Soluble Neutron Absorbers in Nuclear Facilities Outside Reactors</h2>  <p>Some parts of this section are extracted from ANSI/ANS-8.14-2004 (reaffirmed in 2011), <em>Use of Soluble Neutron Absorbers in Nuclear Facilities Outside Reactors</em>, with permission of the publisher, the American Nuclear Society. The text may have been adapted to make it applicable to Canada&rsquo;s international obligations to IAEA and consistent with CNSC&rsquo;s regulatory requirements.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="9.1"></div>
<h3 id="sec9-1">9.1	Introduction</h3>  <p>Guidance for criticality control in process and handling operations with fissile material was presented in section 2, <em>Nuclear Criticality Safety in Operations with Fissionable Materials Outside Reactors</em>. However, for solutions, the single parameter subcritical limits on unit mass, volume, concentration, and geometric dimensions can be highly restrictive. Significantly larger limits are possible if soluble neutron absorbers are present in such solutions.</p>  <p>Experience has shown that operations involving the use of such absorbers can be performed both safely and economically.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="9.2"></div>
<h3 id="sec9-2">9.2	Scope</h3>  <p>Section 9 (this section) provides specific guidance for the use of soluble neutron absorbers for criticality control, and also addresses neutron absorber selection, system design and modifications, safety evaluations, and quality assurance programs. Note that section 2 provides general guidance for the use of soluble neutron absorbers for criticality accident prevention.</p>  <p>When soluble neutron absorbers are present, but are not required for nuclear criticality safety, their use is outside the scope of this section. The required guidance addressing specific applications of neutron absorbers can be found in section 4, <em>Use of Borosilicate-Glass Raschig Rings as a Neutron Absorber in Solutions of Fissile Material</em>, and section 14, <em>Use of Fixed Neutron Absorbers in Nuclear Facilities Outside Reactors</em>.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="9.3"></div>
<h3 id="sec9-3">9.3	Administrative requirements and guidance</h3>  <p>Requirements and guidance for the use of soluble neutron absorbers as a criticality safety control are grouped under five topics:</p>
<ul>
<li>soluble neutron absorber selection</li>
<li>system design and modification</li>
<li>safety evaluations</li>
<li>quality assurance program</li>
<li>facility operations with soluble absorbers</li>
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
<div id="9.3.1"></div>
<h4 id="sec9-3-1">9.3.1	Selection of a soluble neutron absorber</h4>  <p>When selecting a soluble neutron absorber, the following considerations shall be taken into account:</p>
<ol>
<li>selection of a soluble neutron absorber shall include assessment of the operating environment and of the chemical compatibility of the neutron absorber with the process for which it is to be used; consideration shall be given to the solubility of the neutron absorber and to materials and conditions (e.g., temperature and pressure) that could cause precipitation or plateout of the neutron absorber</li>
<li>the soluble neutron absorber shall maintain its minimum required neutron absorption capability during its intended operating life</li>
<li>selection of a soluble neutron absorber shall include an assessment of the absorber effectiveness under credible conditions of neutron moderation and reflection</li>
<li>selection of a neutron absorber shall include evaluation of radiation effects (e.g., depletion by neutron absorption, radiolysis) over its operating life</li>
<li>selection of a soluble neutron absorber shall include evaluation of the requirements of operations and of fissile material accountability</li>
</ol>  <p>Selection of a soluble neutron absorber should include evaluation of the requirements of other safety disciplines.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="9.3.2"></div>
<h4 id="sec9-3-2">9.3.2	System design and system modifications</h4>  <p>The following requirements shall apply to both system design and system modifications:</p>
<ol>
<li>for the range evaluated as subcritical, the system design shall prevent inadvertent concentration of fissile solution and removal or dilution of the neutron absorber</li>
<li>for the range evaluated as subcritical, the system design shall account for potential degradation of the neutron absorber and the chemicals used to dissolve or stabilize the neutron absorber</li>
<li>the system design shall consider the need for inspection, sampling, and verification of the adequacy of the neutron absorbing capability prior to use and during the operational lifetime of the neutron absorber</li>
<li>a means of verification shall be provided to determine that the system design, safety, and operating requirements are met for all operations that utilize soluble neutron absorbers</li>
</ol>  <p>The design of the system equipment incorporating soluble neutron absorbers should incorporate human factors engineering practices for preparation, use, and control of the neutron absorber.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="9.3.3"></div>
<h4 id="sec9-3-3">9.3.3	Nuclear criticality safety evaluations</h4>  <p>Nuclear criticality safety evaluations (NCSE) shall:</p>
<ol>
<li>include allowances for uncertainties in the neutron absorber concentration, distribution, and neutronic properties (i.e., accuracy of neutron cross section values)</li>
<li>include equipment design tolerances, chemical reaction tolerances, material substitutions, geometry changes, modeling assumptions, process variables, neutron absorber isotopic distribution, and relevant uncertainties</li>
<li>consider the potential for neutron absorber degradation in the normal operating environment due to physical or chemical actions and solution composition changes</li>
<li>consider the effect on nuclear criticality safety of potential non-uniform distribution of the neutron absorber</li>
<li>consider the impact on the neutron absorber, and subsequent effect on system reactivity, of changes to process conditions that lead to adverse environmental and operating conditions (e.g., radiolysis, chemical reactions, temperature variations, changes in pressure, depletion, and dilution)</li>
<li>consider worst-case credible concentrations of both soluble absorber and fissile materials for operations involving the dissolution of fissile material</li>
<li>be based on data from applicable experiments or validated calculations in accordance with section 2</li>
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
<div id="9.3.4"></div>
<h4 id="sec9-3-4">9.3.4	Quality management program</h4>  <p>A quality management (QM) program that meets the applicable requirements of ANSI/ASME NQA-1-2015, <em>Quality Assurance Requirements for Nuclear Facility Applications</em> [11], CSA N286-12, <em>Management system requirements for nuclear facilities</em> [12], or equivalent, shall be established to implement the activities specified in this section.</p>  <p>A documented QM program shall be implemented for soluble neutron absorber acquisition, storage, preparation, and use. The program should conform to the licensee&rsquo;s QM program. Records of the associated operations shall be maintained for the operating life of the facility.</p>  <p>The QM program for soluble neutron absorbers should include a combination of inspections, tests, sample analyses, and verifications. Actions taken as a result of the program shall not compromise the nuclear criticality safety of the operating system.</p>  <p>The frequencies of inspection, testing, sampling, and verification prior to use and during the operational lifetime of the neutron absorber shall be established such that they allow determination of the adequacy of the neutron absorbing capability. The frequencies shall allow sufficient time for corrective actions to be taken if absorbing capability shows degradation from established values. Factors that shall be considered include the environment in which the neutron absorbers are placed and the absorber material&rsquo;s chemical, physical, and other properties on which the NCSE is based.</p>  <p>Testing and sample analysis methods to verify neutron absorber concentrations and properties credited in the NCSE, prior to use and while in service, shall be calibrated using traceable standards.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="9.3.5"></div>
<h4 id="sec9-3-5">9.3.5	Facility operation with soluble absorbers</h4>  <p>Prior to operation, the parameters of the system design important to criticality safety shall be verified to conform to specifications.</p>  <p>Proper mixing and concentration of the soluble neutron absorber (elemental or isotopic, as appropriate) shall be verified before use.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="10"></div>
<h2 id="sec10">10. Nuclear Criticality Control of Special Actinide Elements</h2>  <p>Some parts of this section are extracted from ANSI/ANS-8.15-2014, <em>Nuclear Criticality Safety Control of Selected Actinide Nuclides</em>, with permission of the publisher, the American Nuclear Society. The text may have been adapted to make it applicable to Canada&rsquo;s international obligations to IAEA and consistent with CNSC&rsquo;s regulatory requirements.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="10.1"></div>
<h3 id="sec10-1">10.1 Introduction</h3>  <p>Section 2, <em>Nuclear Criticality Safety in Operations with Fissionable Materials Outside Reactors</em>, provides single-parameter limits for operations with <sup>233</sup>U, <sup>235</sup>U, and <sup>239</sup>Pu. The principal interest in criticality safety is in these isotopes of uranium and plutonium because they are the most abundant. However, other isotopes of these nuclides and other elements within the actinide group are capable of supporting a chain reaction, and these isotopes and elements may be encountered in sufficient quantities to cause concern.</p>  <p>Pertaining to criticality safety, a key factor is whether the nuclide contains an odd or even number of neutrons. Those with odd numbers of neutrons, such as <sup>241</sup><sub>94</sub>Pu, <sup>242m</sup><sub>95</sub>Am, <sup>243</sup><sub>96</sub>Cm, <sup>245</sup><sub>96</sub>Cm, <sup>247</sup><sub>96</sub>Cm, <sup>249</sup><sub>98</sub>Cf, and <sup>251</sup><sub>98</sub>Cf can be expected to have critical masses in aqueous solutions that are less than 1 kg, and in certain cases, very much less.</p>  <p>Those with even numbers of neutrons, for example, <sup>237</sup><sub>93</sub>Np, <sup>238</sup><sub>94</sub>Pu, <sup>240</sup><sub>94</sub>Pu, <sup>242</sup><sub>94</sub>Pu, <sup>241</sup><sub>95</sub>Am, <sup>243</sup><sub>95</sub>Am, and <sup>244</sup><sub>96</sub>Cm, can in many cases be made critical, but the mass required may be kilograms. The effect of moderation on these nuclides, such as in an aqueous solution, is to prevent (rather than enhance) criticality. These nuclides characteristically exhibit rather sharp thresholds in their fission cross sections, with little or no probability for sub-threshold fission. As a consequence, the value of k<sup>&infin;</sup> is reduced if even a small quantity of hydrogen is mixed uniformly with the element.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="10.2"></div>
<h3 id="sec10-2">10.2 Scope</h3>  <p>Section 10 (this section) is applicable to operations with the following: <sup>232</sup><sub>92</sub>U, <sup>234</sup><sub>92</sub>U, <sup>237</sup><sub>93</sub>Np, <sup>236</sup><sub>94</sub>Pu, <sup>238</sup><sub>94</sub>Pu, <sup>240</sup><sub>94</sub>Pu, <sup>241</sup><sub>94</sub>Pu, <sup>242</sup><sub>94</sub>Pu, <sup>241</sup><sub>95</sub>Am, <sup>242m</sup><sub>95</sub>Am, <sup>243</sup><sub>95</sub>Am, <sup>242</sup><sub>96</sub>Cm, <sup>243</sup><sub>96</sub>Cm, <sup>244</sup><sub>96</sub>Cm, <sup>245</sup><sub>96</sub>Cm, <sup>246</sup><sub>96</sub>Cm, <sup>247</sup><sub>96</sub>Cm, <sup>249</sup><sub>98</sub>Cf, and <sup>251</sup><sub>98</sub>Cf.</p>  <p>Subcritical mass limits are presented for isolated fissionable units. The limits are not applicable to interacting units.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="10.3"></div>
<h3 id="sec10-3">10.3 Nuclear criticality safety practices</h3>  <p>Operations within the scope of this section shall be conducted in accordance with section 2. If the limits given herein are used, an adequate administrative margin of subcriticality shall be applied to ensure compliance with section 2.3.2.2. Attention shall be given to credible abnormal conditions (examples of such conditions are given in appendix A).</p>  <p>Additional guidance for administrative practices can be found in section 12, <em>Administrative Practices for Nuclear Criticality Safety</em>.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="10.4"></div>
<h3 id="sec10-4">10.4 Single parameter limits for special actinide nuclides</h3>  <p>Operations may be performed safely by complying with the appropriate subcritical mass limits given in sections 10.4.1, 10.4.2 and 10.4.4 or the appropriate concentration limits given in section 10.4.3.</p>  <p><strong>Note:</strong> Process specifications shall incorporate margins to protect against uncertainties in process variables and against a limit being accidentally exceeded.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="10.4.1"></div>
<h4 id="sec10-4-1">10.4.1 Spherical metal systems</h4>  <p>The appropriate mass limits of table 10-1 are applicable only when the surrounding materials can be shown to be no more effective at increasing neutron multiplication than enclosing the unit in a contiguous layer of the reflector to which the limit corresponds. For example, to apply the water-reflected mass limit to a reflector other than water, it must be demonstrated that the system is less reactive with the surrounding material than with a water reflector.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="10.4.2"></div>
<h4 id="sec10-4-2">10.4.2 Metal-water mixtures</h4>  <p>The appropriate mass limits of table 10 2 are applicable to aqueous solutions and slurries, which may be non-uniform, provided surrounding material can be shown to increase k<sub>eff</sub> no more than would result from enclosing the unit by a contiguous layer of water to which the limit corresponds.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="10.4.3"></div>
<h4 id="sec10-4-3">10.4.3 Diluted solutions</h4>  <p>For operations with diluted solutions, the subcritical concentration limits and the associated minimum hydrogen-to-fissile atom ratios given in Table 10-3 may be used. Table 10-3 provides the ratios for 19 selected nuclides in homegeneous metal-water mixtures.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="10.4.4"></div>
<h4 id="sec10-4-4">10.4.4 Operations with oxides</h4>  <p>For operations with oxides, the subcritical mass limits for seven selected oxides are given in Table 10-4 provided the surrounding material can be shown to be no more effective at increasing neutron multiplication than enclosing the unit in a continguous layer of the reflector to which the limit corresponds.</p>
<table className="table table-striped">  <caption className="text-left">Table 10-1: Subcritical mass limits for non-fissile actinide nuclides [ANSI/ANS 8-15]</caption>   <tr>
<th rowspan="2" className="text-center text-center">Nuclide</th>
<th rowspan="2" className="text-center text-center">Chemical form</th>
<th colSpan="2" className="text-center">Limit <sup>a</sup> of nuclide with reflector of:</th>   </tr>   <tr>
<th className="text-center">Water <sup>b</sup> (kg)</th>
<th className="text-center">Steel <sup>c</sup> (kg)</th>   </tr>   <tr>
<td className="text-center"><sup>232</sup>U</td>
<td className="text-center">U</td>
<td className="text-center">1.0</td>
<td className="text-center">0.9</td>   </tr>   <tr>
<td className="text-center"><sup>234</sup>U</td>
<td className="text-center">U</td>
<td className="text-center">59</td>
<td className="text-center">34</td>   </tr>   <tr>
<td rowspan="2" className="text-center text-center"><sup>237</sup>Np</th>
<td className="text-center">Np</td>
<td className="text-center">35</td>
<td className="text-center">21</td>   </tr>   <tr>
<td className="text-center">NpO<sub>2</sub></td>
<td className="text-center">140</td>
<td className="text-center">90</td>   </tr>   <tr>
<td className="text-center"><sup>236</sup>Pu</td>
<td className="text-center">Pu</td>
<td className="text-center">1.7</td>
<td className="text-center">1.6</td>   </tr>   <tr>
<td rowspan="2" className="text-center text-center"><sup>238</sup>Pu</th>
<td className="text-center">Pu</td>
<td className="text-center">5.1</td>
<td className="text-center">3.3</td>   </tr>   <tr>
<td className="text-center">NpO<sub>2</sub></td>
<td className="text-center">12</td>
<td className="text-center">7.6</td>   </tr>   <tr>
<td rowspan="2" className="text-center text-center"><sup>240</sup>Pu</td>
<td className="text-center">Pu</td>
<td className="text-center">20</td>
<td className="text-center">15</td>   </tr>   <tr>
<td className="text-center">PuO<sub>2</sub></td>
<td className="text-center">70</td>
<td className="text-center">45</td>   </tr>   <tr>
<td className="text-center"><sup>241</sup>Pu</td>
<td className="text-center">Pu</td>
<td className="text-center">3.7</td>
<td className="text-center">3.7</td>   </tr>   <tr>
<td className="text-center"><sup>242</sup>Pu</td>
<td className="text-center">Pu</td>
<td className="text-center">55</td>
<td className="text-center">40</td>   </tr>   <tr>
<td rowspan="2" className="text-center text-center"><sup>241</sup>Am</td>
<td className="text-center">Am</td>
<td className="text-center">24</td>
<td className="text-center">16</td>   </tr>   <tr>
<td className="text-center">AmO<sub>2</sub></td>
<td className="text-center">40</td>
<td className="text-center">32</td>   </tr>   <tr>
<td className="text-center"><sup>242m</sup>Am</td>
<td className="text-center">Am</td>
<td className="text-center">1.6</td>
<td className="text-center">1.7</td>   </tr>   <tr>
<td rowspan="3" className="text-center text-center"><sup>243</sup>Am</td>
<td className="text-center">Am</td>
<td className="text-center">65</td>
<td className="text-center">45</td>   </tr>   <tr>
<td className="text-center">Am<sub>2</sub>O<sub>3</sub></td>
<td className="text-center">50</td>
<td className="text-center">37</td>   </tr>   <tr>
<td className="text-center">AmO<sub>2</sub></td>
<td className="text-center">120</td>
<td className="text-center">90</td>   </tr>   <tr>
<td className="text-center"><sup>242</sup>Cm</td>
<td className="text-center">Cm</td>
<td className="text-center">6</td>
<td className="text-center">4</td>   </tr>   <tr>
<td className="text-center"><sup>243</sup>Cm</td>
<td className="text-center">Cm</td>
<td className="text-center">1.4</td>
<td className="text-center">1.4</td>   </tr>   <tr>
<td rowspan="3" className="text-center text-center"><sup>244</sup>Cm</td>
<td className="text-center">Cm</td>
<td className="text-center">11</td>
<td className="text-center">7</td>   </tr>   <tr>
<td className="text-center">Cm<sub>2</sub>O<sub>3</sub></td>
<td className="text-center">14</td>
<td className="text-center">10</td>   </tr>   <tr>
<td className="text-center">CmO<sub>2</sub></td>
<td className="text-center">14</td>
<td className="text-center">10</td>   </tr>  <tr>
<td className="text-center"><sup>245</sup>Cm</td>
<td className="text-center">Cm</td>
<td className="text-center">1.3</td>
<td className="text-center">1.3</td>   </tr>
<tr>
<td className="text-center"><sup>246</sup>Cm</td>
<td className="text-center">Cm</td>
<td className="text-center">16</td>
<td className="text-center">10</td>   </tr>   <tr>
<td className="text-center"><sup>247</sup>Cm</td>
<td className="text-center">Cm</td>
<td className="text-center">1.5</td>
<td className="text-center">1.4</td>   </tr>   <tr>
<td className="text-center"><sup>249</sup>Cf</td>
<td className="text-center">Cf</td>
<td className="text-center">1.2</td>
<td className="text-center">1.4</td>   </tr>   <tr>
<td className="text-center"><sup>251</sup>Cf</td>
<td className="text-center">Cm</td>
<td className="text-center">0.6</td>
<td className="text-center">0.6</td>   </tr>   </table>   <p><sup>a</sup>&nbsp;References [39 and [40] serve as bases for the subcritical mass limits.<br />
<sup>b</sup>&nbsp;The mass limits for water reflectors also may be applied to combinations of steel and water (steel backed by water) for steel <br />
thickness &le; 1 cm.<br />
<sup>c</sup>&nbsp;The steel reflector thickness is 20 cm; i.e., effectively infinite.</p>  <br />
<table className="">  <caption className="text-left">Table 10-2: Subcritical mass limits for water-reflected fissile actinide nuclides [ANSI/ANS 8-15]</caption>   <tr>
<th className="text-center">Nuclide</th>
<th className="text-center">Mass limit <sup>a</sup> (g)</th>   </tr>   <tr>
<td className="text-center"><sup>239</sup>Pu</td>
<td className="text-center">450</td>   </tr>   <tr>
<td className="text-center"><sup>241</sup>Pu</td>
<td className="text-center">185</td>   </tr>   <tr>
<td className="text-center"><sup>242m</sup>Am</td>
<td className="text-center">11</td>   </tr>   <tr>
<td className="text-center"><sup>243</sup>Cm</td>
<td className="text-center">90</td>   </tr>   <tr>
<td className="text-center"><sup>245</sup>Cm</td>
<td className="text-center">23</td>   </tr>   <tr>
<td className="text-center"><sup>247</sup>Cm</td>
<td className="text-center">500</td>   </tr>   <tr>
<td className="text-center"><sup>249</sup>Cf</td>
<td className="text-center">10</td>   </tr>   <tr>
<td className="text-center"><sup>251</sup>Cf</td>
<td className="text-center">5</td>   </tr>   </table>   <p><sup>a</sup>&nbsp;Section 2 and reference [39] serve as bases for the subcritical mass limits. Section 2 provides the value for <sup>239</sup>Pu; others are from reference [39].</p>  <br />
<table className="table table-striped">  <caption className="text-left">Table 10-3: Subcritical mass limits for <sup>242m</sup>Am in (<sup>241</sup>Am + <sup>242m</sup>Am) for uniform water-reflected AmO<sub>2</sub> &#8211; H<sub>2</sub>O mixtures [ANSI/ANS 8-15]</caption>   <tr>
<th rowspan="2" className="text-center text-center"><sup>242m</sup>Am (wt%)h</th>
<th colSpan="2" className="text-center">Mass limit <sup>a</sup></th>   </tr>   <tr>
<th className="text-center"><sup>242m</sup>Am (g)</th>
<th className="text-center">Total quantity of Am (g)</th>   </tr>   <tr>
<td className="text-center">100</td>
<td className="text-center">13</td>
<td className="text-center">13</td>   </tr>   <tr>
<td className="text-center">20</td>
<td className="text-center">28</td>
<td className="text-center">140</td>   </tr>   <tr>
<td className="text-center">10</td>
<td className="text-center">105</td>
<td className="text-center">1,050</td>   </tr>   <tr>
<td className="text-center">8</td>
<td className="text-center">240</td>
<td className="text-center">3,000</td>   </tr>   <tr>
<td className="text-center">6.25</td>
<td className="text-center">1,830</td>
<td className="text-center">29,280</td>   </tr>   </table>   <p><sup>a</sup>&nbsp;Reference [39] provides these data.</p>  <br />
<table className="table table-striped">  <caption className="text-left">Table 10-4: Subcritical mass limits for <sup>245</sup>Cm in (<sup>244</sup>Cm + <sup>245</sup>Cm) for uniform water-reflected CmO<sub>2</sub> &#8211; H<sub>2</sub>O Mixtures [ANSI/ANS 8-15]</caption>   <tr>
<th rowspan="2" className="text-center text-center"><sup>245</sup>Cm (wt%)</th>
<th colSpan="2" id="Uniform_2" >Mass limit</th>   </tr>   <tr>
<th className="text-center"><sup>245</sup>Cm (g)</th>
<th className="text-center">Total quantity of Cm (g)</th>   </tr>   <tr>
<td className="text-center">100</td>
<td className="text-center">30.0</td>
<td className="text-center">30</td>   </tr>   <tr>
<td className="text-center">10</td>
<td className="text-center">32.7</td>
<td className="text-center">327</td>   </tr>   <tr>
<td className="text-center">5</td>
<td className="text-center">35.7</td>
<td className="text-center">714</td>   </tr>   <tr>
<td className="text-center">2.5</td>
<td className="text-center">41.7</td>
<td className="text-center">1,670</td>   </tr>   <tr>
<td className="text-center">1.25</td>
<td className="text-center">53.7</td>
<td className="text-center">4,300</td>   </tr>   </table>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="11"></div>
<h2 id="sec11">11. Criticality Safety Criteria for the Handling, Transportation, Storage, and Long term Waste Management of Reactor Fuel Outside Reactors</h2>  <p>Some parts of this section are extracted from ANSI/ANS-8.17-2004 (Reaffirmed in 2014), <em>Criticality Safety Criteria for the Handling, Storage, and Transportation of LWR Fuel Outside Reactors</em>, with permission of the publisher, the American Nuclear Society. The text may have been adapted to make it applicable to Canada&rsquo;s international obligations to IAEA and consistent with CNSC&rsquo;s regulatory requirements.</p>  <p>For additional information related to the transportation of fissile material, refer to:</p>
<ul>
<li><em>Packaging and Transport of Nuclear Substances Regulations, 2015</em></li>
<li>IAEA safety standard <em>Regulations for the Safe Transport of Radioactive Material</em> (SSR 6)[41] and the associated safety guide <em>Advisory Material for the IAEA Regulations for the Safe Transport of Radioactive Material (2012 Edition)</em> (SSG 26)[42]</li>
<li>RD-364 <em>Joint Canada &ndash; United States Guide for Approval of Type B(U) and Fissile Material Transportation Packages</em> [43]</li>
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
<div id="11.1"></div>
<h3 id="sec11-1">11.1 Introduction</h3>  <p>The potential for criticality accidents during the handling, transportation, storage, and long term waste management of fuel for nuclear reactors represents a health and safety risk to personnel involved in these activities, as well as to the general public. Appropriate design of equipment and facilities, handling procedures, and personnel training can minimize this risk.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="11.2"></div>
<h3 id="sec11-2">11.2 Scope</h3>  <p>Section 2, <em>Nuclear Criticality Safety in Operations with Fissionable Materials Outside Reactors</em>, provides general criteria for assurance of criticality safety. Section 11 (this section) provides additional guidance applicable to handling, transportation, storage, and long term waste management of reactor fuel units in any phase of the fuel cycle outside the reactor core.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="11.3"></div>
<h3 id="sec11-3">11.3 General safety criteria</h3>  <p>General administrative and technical practices are described in section 2.</p>   <p>At a licensed site for short- or interim-term (dry or wet) storage, an exempted quantity of fissionable materials (defined in section 2.3.1.1, list item 2) may include an unlimited quanity of natural or depleted uranium irradiated in a thermal nuclear reactor [6].</p>  <p>Methods used to calculate subcriticality shall be validated in accordance with section 2.</p>  <p>Guidance to determine the need for and use of criticality alarms for personnel protection is described in section 3, <em>Criticality Accident Alarm System</em>.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="11.3.1"></div>
<h4 id="sec11-3-1">11.3.1 Process analysis</h4>  <p>Prior to first use of, or before implementing changes to, any operation or system involving handling, transportation, storage, or long-term waste management of fuel units or rods, a nuclear criticality safety evaluation (NCSE) shall be performed for all normal and credible abnormal conditions to determine that the entire operation or system will be subcritical based on the criteria contained in section 11.4 as further specified in section 2.3.2.2. The NCSE shall explicitly identify the controlled parameters and their design and operating limits upon which nuclear criticality safety depends.</p>  <p>The NCSE shall be documented with sufficient detail, clarity, and lack of ambiguity to allow independent judgment of results.</p>  <p>Representative parameters and conditions for fuel unit handling, on-site transportation, on-site storage, and on-site long-term waste management are listed in appendix E.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="11.3.2"></div>
<h4 id="sec11-3-2">11.3.2 Pre-commencement</h4>  <p>Prior to commencing operation, an independent assessment shall be conducted that confirms the adequacy of the evaluation required by section 11.3.1.</p>  <p>Prior to commencing operation, the licensee shall verify that the as built conditions conform to the design limits specified in section 11.3.1.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="11.3.3"></div>
<h4 id="sec11-3-3">11.3.3 Neutron-absorbing materials</h4>  <p>Reliance may be placed on neutron-absorbing materials, such as gadolinium and boron that are incorporated in the fuel material itself, or in structures or equipment, or in both. However, when reliance is placed on neutron-absorbing materials, control shall be exercised to maintain their continued presence with the intended distributions and concentrations. Extraordinary care should be taken with solutions of absorbers because of the difficulty of exercising such control and with fuel units containing burnable poison to identify the maximum reactivity condition to be considered.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="11.3.4"></div>
<h4 id="sec11-3-4">11.3.4 Composition and nuclear characteristics of fuel</h4>  <p>In performing the NCSE, the composition and nuclear characteristics of the fuel shall be those resulting in the maximum neutron multiplication factor of the system. Credit may be taken for fuel burnup by:</p>
<ol>
<li>establishing a maximum fuel unit reactivity, and</li>
<li>assuring that each fuel unit has a reactivity no greater than the maximum established reactivity by:
<ul>
<li>a reactivity measurement, or</li>
<li>analysis and verification of the exposure history of each fuel unit</li>
</ul></li>
</ol>  <p>Consideration shall be given to the axial distribution of burnup in the fuel unit.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="11.3.5"></div>
<h4 id="sec11-3-5">11.3.5 Transport</h4>  <p>The fuel unit and rods should be handled, transported, stored, and placed in long-term waste management in a manner providing a sufficient factor of safety to require at least two unlikely, independent, and concurrent changes in conditions before a criticality accident is possible.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="11.4"></div>
<h3 id="sec11-4">11.4 General safety criteria</h3>  <p>Where methods of analysis are used to predict neutron multiplication factors, the calculated multiplication factor, k, shall be equal to or less than an established upper subcritical limit (USL), as detailed in appendix B.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="12"></div>
<h2 id="sec12">12. Administrative Practices for Nuclear Criticality Safety</h2>  <p>Some parts of this section are extracted from ANSI/ANS-8.19-2014, <em>Administrative Practices for Nuclear Criticality Safety</em>, with permission of the publisher, the American Nuclear Society. The text may have been adapted to make it applicable to Canada&rsquo;s international obligations to IAEA and consistent with CNSC&rsquo;s regulatory requirements.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="12.1"></div>
<h3 id="sec12-1">12.1 Introduction</h3>  <p>An effective nuclear criticality safety program includes cooperation among management, supervision, and the nuclear criticality safety staff. For each employee, the program relies upon conformance with operating procedures.</p>  <p>Although the extent and complexity of safety-related activities may vary greatly with the size and type of operation with fissionable material, certain safety elements are common. Section 12 (this section) represents a codification of such elements related to criticality safety.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="12.2"></div>
<h3 id="sec12-2">12.2 Scope</h3>  <p>This section provides criteria for the administration of a nuclear criticality safety program for operations outside reactors for which there exists a potential for criticality accidents.</p>  <p>Responsibilities of management, supervision, and the nuclear criticality safety staff are addressed. Objectives and characteristics of operating and emergency procedures are included.</p>  <p>General guidance for nuclear criticality safety can be found in section 2, <em>Nuclear Criticality Safety in Operations with Fissionable Materials outside Reactors</em>. Guidance for special isotopes that are fissionable can be found in section 10, <em>Nuclear Criticality Control of Special Actinide Elements</em>.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="12.3"></div>
<h3 id="sec12-3">12.3 Responsibilities</h3>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="12.3.1"></div>
<h4 id="sec12-3-1">12.3.1 Management responsibilities</h4>  <p>Management shall:</p>
<ol>
<li>accept overall responsibility for safety of operations and provide regular and systematic oversight</li>
<li>formulate nuclear criticality safety policy and make it known to all employees involved in operations with fissionable material. Distinction may be made between shielded and unshielded facilities, with appropriate criticality controls in all cases</li>
<li>assign responsibility and delegate commensurate authority to implement established policy; responsibility for nuclear criticality safety should be assigned in a manner compatible with that for other safety disciplines; each individual, regardless of position, shall be made aware that nuclear criticality safety in their work area is their responsibility</li>
<li>provide personnel familiar with the physics of nuclear criticality and with associated safety practices to furnish technical guidance appropriate to the scope of operations; this function should, to the extent practicable, be administratively independent of operations</li>
<li>establish a method of monitoring the nuclear criticality safety program</li>
<li>periodically participate in auditing the overall effectiveness of the nuclear criticality safety program</li>
<li>establish a defined process and procedures for equipment change control [9]</li>
<li>establish operating procedures and a process for modifying those procedures [9]</li>
</ol>  <p>Management may use consultants and nuclear criticality safety committees to achieve the objectives of the nuclear criticality safety program.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="12.3.2"></div>
<h4 id="sec12-3-2">12.3.2 Supervisory responsibilities</h4>  <p>Each supervisor shall:</p>
<ol>
<li>accept responsibility for the safety of operations under their control</li>
<li>be knowledgeable in those aspects of nuclear criticality safety relevant to operations under their control; training and assistance should be obtained from the nuclear criticality safety staff</li>
<li>provide training and require that personnel under their supervision have an understanding of procedures and safety considerations such that they may be expected to perform their functions without undue risk; guidance for a nuclear criticality safety training program may be obtained from section 13, <em>Nuclear Criticality Safety Training</em>; records of training activities and verification of personnel understanding shall be maintained</li>
<li>develop or participate in the development of written procedures applicable to the operations under their control; maintenance of these procedures to reflect changes in operations shall be a continuing supervisory responsibility</li>
<li>require conformance with good safety practices including unambiguous identification of fissionable materials and good housekeeping</li>
<li>be responsible for the inspection, testing and maintenance of engineered controls</li>
</ol>  <p>Each supervisor also verifies compliance with nuclear criticality safety specifications for new or modified equipment before its use. Verification may be based on inspection reports or other features of the quality assurance program.</p>  <p>Supervisors may obtain assistance for fulfilling the responsibilities outlined in list items 3 through 6, above, from other functions such as facility operations and maintenance.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="12.3.3"></div>
<h4 id="sec12-3-3">12.3.3 Nuclear criticality safety staff responsibilities</h4>  <p>The nuclear criticality safety staff (NCS staff) shall:</p>
<ol>
<li>provide, and accept responsibility for, technical guidance in the design of equipment and processes and for the development of operating procedures [9]</li>
<li>maintain familiarity with current developments in nuclear criticality safety standards, guides, and codes; knowledge of current nuclear criticality information should be maintained; the NCS staff should consult with knowledgeable individuals to obtain technical assistance as needed</li>
<li>maintain familiarity with all operations within the organization requiring nuclear criticality safety controls</li>
<li>assist supervisors, on request, in training personnel</li>
<li>conduct or participate in audits of criticality safety practices and compliance with procedures as directed by management</li>
<li>examine reports of procedural violations and other deficiencies, for possible improvement of safety practices and procedural requirements, and shall report their findings to management</li>
<li>upon request, participate in the verification of compliance with nuclear criticality-safety specifications for intended new or modified processes or equipment [9]</li>
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
<div id="12.4"></div>
<h3 id="sec12-4">12.4 Operating procedures</h3>  <p>The purpose of written operating procedures is to facilitate and document the safe and efficient conduct of the operation. Procedures should be organized for convenient use by operators and be easily available. They should be free of extraneous material. Copies of applicable written procedures should be posted up or available in operating areas [7].</p>  <p>Procedures shall include those controls and limits significant to nuclear criticality safety. Procedures should be such that no single inadvertent departure from a procedure can cause a criticality accident.</p>  <p>Supplementing and revising procedures, as improvements become desirable, shall be facilitated.</p>  <p>Operating procedures shall be reviewed periodically by supervisory personnel.</p>  <p>New or revised procedures that affect nuclear criticality safety shall be reviewed by the NCS staff and by the supervisory personnel, and shall be approved by management [9].</p>  <p>Deviations from operating procedures and unforeseen alterations in process conditions that affect nuclear criticality safety shall be reported to management, investigated promptly, corrected as appropriate, and documented. Action shall be taken to prevent a recurrence.</p>  <p>Operations shall be reviewed frequently (at least annually) to ascertain that procedures are being followed and that process conditions have not been altered so as to affect the nuclear criticality safety evaluation (NCSE). These reviews shall be conducted, in consultation with operating personnel, by individuals who are knowledgeable in criticality safety and who, to the extent practicable, are not immediately responsible for the operation.</p>  <p>Personnel should be encouraged to provide feedback on the nuclear criticality safety program, including:</p>
<ul>
<li>identification of concerns or circumstances that could adversely affect nuclear criticality safety</li>
<li>practices that favourably affect nuclear criticality safety</li>
<li>identification of potential improvements</li>
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
<div id="12.5"></div>
<h3 id="sec12-5">12.5 Process evaluation for nuclear criticality safety (nuclear criticality safety evaluation)</h3>  <p>Before the start of a new operation with fissionable material, or before an existing operation is changed, it shall be determined and documented that the entire process is subcritical under both normal and credible abnormal conditions.</p>  <p>The NCSE shall determine and explicitly identify the controlled parameters and their associated limits upon which nuclear criticality safety depends. The effect of changes in these parameters, or in the conditions to which they apply, shall be understood.</p>  <p>The NCSE shall be documented with sufficient detail, clarity, and lack of ambiguity to allow independent judgment of results.</p>  <p>Before the start of operation, there shall be an independent assessment that confirms the adequacy of the NCSE.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="12.6"></div>
<h3 id="sec12-6">12.6 Materials control</h3>  <p>The movement of fissionable materials shall be controlled as specified in documented procedures. The transport of fissionable materials within the public domain shall comply with appropriate national and international regulations [9, 41, 42, 43].</p>  <p>Appropriate material labelling and area posting shall be maintained, specifying material identification and all limits on parameters that are subject to procedural criticality control.</p>  <p>If reliance for criticality control is placed on neutron-absorbing materials that are incorporated into process materials or equipment, procedural control shall be exercised to maintain their continued presence with the intended distributions and concentrations.</p>  <p>Access to areas where fissionable material is handled, processed, or stored shall be controlled.</p>  <p>Control of spacing, mass, density, and geometry of fissionable material shall be maintained to assure subcriticality under all normal and credible abnormal conditions (note: this requirement is not applicable to operations with a small quantity of fissionable materials).</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="12.7"></div>
<h3 id="sec12-7">12.7 Planned response to nuclear criticality accidents</h3>  <p>Guidance for use of nuclear criticality accident alarm systems may be obtained from section 3, <em>Criticality Accident Alarm System</em>. Emergency planning and response are addressed in section 16, <em>Nuclear Criticality Accident Emergency Planning and Response</em>.</p>  <p>Emergency procedures shall be prepared, and shall be approved by management. Organizations on- and off-site, that are expected to provide assistance during emergencies, shall be informed of conditions that might be encountered. They should be assisted in the preparation of suitable emergency response procedures.</p>  <p>Emergency procedures shall clearly designate evacuation routes. Evacuation should follow the quickest and most direct routes practicable. These routes shall be clearly identified and should avoid recognized areas of higher risk.</p>  <p>Personnel assembly stations, outside the areas to be evacuated, shall be designated. Means to account for personnel shall be established.</p>  <p>Personnel in the area to be evacuated shall be trained in evacuation methods and informed of evacuation routes and assembly stations. Provision shall be made for the evacuation of transient personnel. Drills shall be performed at least annually to maintain familiarity with the emergency procedures. Drills shall be announced in advance.</p>  <p>Arrangements shall be made in advance for the care and treatment of injured and exposed persons. The possibility of personnel contamination by radioactive materials shall be considered.</p>  <p>Planning shall include a program for the immediate identification of exposed individuals and should include personnel dosimetry.</p>  <p>Instrumentation and procedures shall be provided for the determination of the radiation intensity at the assembly area and in the evacuated area following a criticality accident. Information should be correlated at a central control point.</p>  <p>Emergency procedures shall address re-entry procedures and the membership of response teams.</p>  <p>Emergency procedures shall provide for shutting off ventilation to prevent release of fission gases outside of affected area. Consideration should be given that shutting off ventilation does not generate other safety hazards.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="12.8"></div>
<h3 id="sec12-8">12.8 Nuclear criticality safety program</h3>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="12.8.1"></div>
<h4 id="sec12-8-1">12.8.1 Minimum list of documents in support for a licensing submission on nuclear criticality safety</h4>  <p>To support a licensing submission on nuclear criticality safety, the following documents are required:</p>
<ul className="list-bullet-none">
<li>(a)	letter from the applicant, committing to applicable sections of this document</li>
<li>(b)	Nuclear Criticality Safety Program</li>
<li>(c)	Qualification / Validation Report for the computer code used in NCSEs</li>
<li>(d)	NCSE Reports summarized, if necessary, in a non-proprietary form in the Nuclear Criticality Safety Analysis Report</li>
</ul>  <p>In the following text, these documents are referenced as References (a) through (d).</p>  <p>An initial self-check of completeness of the documentation can be done by considering whether or not there is sufficient information to support the following wording:</p>
<ul className="list-bullet-none">
<li><em>As more fully set forth in References (b) and (d), facility shall be {designed / operated &ndash; example} so that k<sub>eff</sub> shall not exceed an Upper Subcritical Limit of {0.9249 &ndash; example} for normal and credible abnormal conditions with frequency of occurrence of equal to or more than 10<sup>-6</sup> per year as analyzed in Reference (d) and covered by Area of Applicability in Reference (c).</em></li>
<li><em>As more fully set forth in References (b) and (d), facility shall be {designed / operated &ndash; example} so that a safety function of shielding and confinement will maintain the dose, resulting from exposure to direct radiation and to radionuclides released from the facility, below the Table [xx] of Reference (d) limits during and subsequent to a nuclear criticality accident.</em></li>
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
<div id="12.8.2"></div>
<h4 id="sec12-8-2">12.8.2 Content of nuclear criticality safety program</h4>  <p>The nuclear criticality safety program:</p>
<ol>
<li>identifies applicable nuclear criticality safety standards, guidelines, and the CNSC requirements (including the applicable sections of this regulatory document)</li>
<li>lists the requirements that must be met to comply with the applicable standards, guidelines, and the CNSC requirements</li>
<li>defines a model for the implementation of these requirements</li>
<li>identifies responsibilities arising from requirements</li>
<li>describes how the program meets the applicable nuclear criticality safety requirements in every functional category (such as administration, NCSE, criticality alarm system, engineering design, procedures, materials control, training, emergency response, ongoing oversight)</li>
<li>identifies the administrative margin of subcriticality (depending on whether it is based on k<sub>eff</sub> or on mass limits, or both, or other parameters), identifies the method used to determine the margin of subcriticality for safety and the upper subcritical limit</li>
<li>identifies the risk assessment methodology to be used to demonstrate that the upper subcritical limit will not be exceeded in all (out-of-reactor) nuclear processes under normal and credible abnormal conditions; that is, accidents or accident sequences that have a frequency of occurrence equal to or more than 10<sup>-6</sup> per year</li>
</ol>  <p>Appendix G gives an example of a nuclear criticality safety program.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="13"></div>
<h2 id="sec13">13. Nuclear Criticality Safety Training</h2>  <p>Some parts of this section are extracted from ANSI/ANS-8.20-1991 (Reaffirmed in 2015), <em>Nuclear Criticality Safety Training</em>, with permission of the publisher, the American Nuclear Society. The text may have been adapted to make it applicable to Canada&rsquo;s international obligations to IAEA and consistent with CNSC&rsquo;s regulatory requirements.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="13.1"></div>
<h3 id="sec13-1">13.1 Introduction</h3>  <p>Section 13 (this section) provides a framework for the training of employees associated with fissionable material operations outside reactors where potential exists for nuclear criticality accidents. An effective nuclear criticality safety training program requires the cooperative involvement of management, supervision, and the criticality safety staff.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="13.2"></div>
<h3 id="sec13-2">13.2 Scope</h3>  <p>This section provides criteria for nuclear criticality safety training for personnel associated with operations outside reactors where a potential exists for criticality accidents. This section does not apply to training of nuclear criticality safety staff.</p>  <p>General guidance for nuclear criticality safety is found in section 2, <em>Nuclear Criticality Safety in Operations with Fissionable Materials Outside Reactors</em>. Criteria for the administration of a nuclear criticality safety program for operations outside reactors in which there exists a potential for criticality accidents are found in section 12, <em>Administrative Practices for Nuclear Criticality Safety</em>.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="13.3"></div>
<h3 id="sec13-3">13.3 Objective</h3>  <p>This section identifies the basic characteristics of an effective nuclear criticality safety training program. The program is directed toward those who manage, work in, or work near facilities where the potential exists for a criticality accident. These personnel include, but are not limited to, the following:</p>
<ul>
<li>personnel who work with fissionable material and their supervisors</li>
<li>operations support personnel</li>
<li>design personnel</li>
<li>maintenance personnel</li>
<li>emergency response personnel</li>
<li>managers and other administrative personnel</li>
<li>any personnel who enter areas where fissionable material is processed, stored, or handled</li>
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
<div id="13.4"></div>
<h3 id="sec13-4">13.4 Program responsibilities</h3>  <p>Management shall establish a nuclear criticality safety training program that provides confidence in the continuing proficiency of personnel.</p>  <p>Supervisors shall ensure that their staffs are suitably trained.</p>  <p>Nuclear criticality safety staff shall participate in the development of the training program and should participate in its implementation and the evaluation of its effectiveness.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="13.5"></div>
<h3 id="sec13-5">13.5 Program structure</h3>  <p>Training requirements shall be determined and documented. The content of the training program shall be tailored to job responsibilities and shall support the conduct of the job.</p>  <p>Refresher training requirements shall be determined and documented. Such training shall be provided at least every two years.</p>  <p>The learning objectives of each lesson should be made available to the trainees.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="13.6"></div>
<h3 id="sec13-6">13.6 Program content</h3>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="13.6.1"></div>
<h4 id="sec13-6-1">13.6.1 Fission chain reactions and accident consequences</h4>  <p>The concept of a fission chain reaction should be discussed. The distinction should be made among families of chains in which fission rate decreases with time, those that are sustained with a constant fission rate, and those that have an exponential increase in the fission rate.</p>  <p>The time history of supercritical excursions should be described for metal (fast neutron) systems and for moderated (slow neutron) systems.</p>  <p>The kinetic energy released during the fission burst should be compared to the equivalent energy measured in familiar events, for example, chemical explosions.</p>  <p>A distinction should be made between the intensity of radiation that may appear essentially instantaneously, as from a spike yield, and that which may be expected to be associated with a continuing fission reaction. This information should be used to estimate the range of exposures that may be associated with process accidents.</p>  <p>Health effects of criticality accidents shall be discussed.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="13.6.2"></div>
<h4 id="sec13-6-2">13.6.2 Neutron behaviour in fissioning systems</h4>  <p>A description of neutron-induced fission, neutron capture, and neutron scattering and leakage should be included.</p>  <p>The influence of neutron energy on the fission probability should be discussed.</p>  <p>Neutron moderation should be explained as the mechanism that reduces the neutron energy. Several good neutron moderators should be identified.</p>  <p>Removal of neutrons from fissioning systems by neutron absorbers should be discussed.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="13.6.3"></div>
<h4 id="sec13-6-3">13.6.3 Criticality accident history</h4>  <p>Selected criticality accidents should be described.</p>  <p>The causes of the selected criticality accidents and the means of their termination should be discussed.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="13.6.4"></div>
<h4 id="sec13-6-4">13.6.4 Response to criticality alarm signals</h4>  <p>Training shall be provided in the recognition of and in the response to criticality alarms in accordance with section 3, <em>Criticality Accident Alarm System</em>.</p>  <p>An example of the reduction in the received dose as a function of distance, time, and shielding shall be given to emphasize the need for prompt evacuation.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="13.6.5"></div>
<h4 id="sec13-6-5">13.6.5 Control parameters</h4>  <p>The effects and applications of the following factors that are relevant to criticality safety of operations in the facility shall be explained and illustrated:</p>
<ul>
<li>mass</li>
<li>shape</li>
<li>interaction and separation</li>
<li>moderation</li>
<li>reflection</li>
<li>concentration</li>
<li>volume</li>
<li>density</li>
<li>neutron absorbers</li>
<li>heterogeneity</li>
<li>enrichment</li>
</ul>  <p>Single-parameter limits appropriate to the facility shall be discussed.</p>  <p>The concept of nuclear criticality shall be illustrated by examples appropriate to the facility. The following are typical illustrations:</p>
<ol>
<li>the change in critical mass of small pieces of fissionable material, such as lathe turnings or low-enriched pellets, upon immersion in water or oil</li>
<li>the influence of nonfissionable materials and of geometry on nuclear criticality</li>
<li>factors affecting interaction among units</li>
</ol>  <p>The concept of contingencies for checking the validity of criticality safety limits shall be discussed.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="13.6.6"></div>
<h4 id="sec13-6-6">13.6.6 Policy and procedures</h4>  <p>The facility management&rsquo;s nuclear criticality safety policy shall be described.</p>  <p>The facility policy for the use of check lists, sign-off sheets, and documentation in the execution of procedures that are pertinent to criticality safety shall be explained.</p>  <p>Relevant procedures that pertain to criticality safety shall be discussed. Emphasis shall be given to criticality safety limits, controls, and emergency procedures.</p>  <p>The policy that relates to situations not covered by procedures and to situations in which the safety of the operation is in question shall be described.</p>  <p>Employees shall be informed of their right to question any operations that they believe may not be safe.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="13.7"></div>
<h3 id="sec13-7">13.7 Evaluation</h3>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="13.7.1"></div>
<h4 id="sec13-7-1">13.7.1 Training program</h4>  <p>The criticality safety training program of an organization shall be evaluated periodically. The evaluation process should provide confidence in the adequacy of the training program. The evaluation process and the results of evaluation shall be documented.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="13.7.2"></div>
<h4 id="sec13-7-2">13.7.2 Personnel</h4>  <p>Satisfactory completion of training shall be based upon predetermined performance criteria. Evaluation methods should include written, oral, and operational examinations. Identified weaknesses shall be addressed by additional training. Acceptance of the adequacy of the individual&rsquo;s total training record shall be the responsibility of the immediate supervisor and of any other organizational units designated by management.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="13.7.3"></div>
<h4 id="sec13-7-3">13.7.3 Documentation</h4>  <p>The employee&rsquo;s training record shall be documented and retained for a minimum of four years. Management may specify a longer period of time for retention.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="14"></div>
<h2 id="sec14">14. Use of Fixed Neutron Absorbers in Nuclear Facilities Outside Reactors</h2>  <p>Some parts of this section are extracted from ANSI/ANS-8.21-1995 (reaffirmed in 2011), <em>Use of Fixed Neutron Absorbers in Nuclear Facilities Outside Reactors</em>, with permission of the publisher, the American Nuclear Society. The text may have been adapted to make it applicable to Canada&rsquo;s international obligations to IAEA and consistent with CNSC&rsquo;s regulatory requirements.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="14.1"></div>
<h3 id="sec14-1">14.1 Introduction</h3>  <p>Fixed neutron absorbers (poisons) are frequently used as part of the overall criticality safety control measures.</p>  <p>Section 2, <em>Nuclear Criticality Safety in Operations with Fissionable Materials Outside Reactors</em>, covers general considerations of neutron absorbers for criticality prevention. Section 14 (this section) supplements guidance provided in section 2 and section 11, <em>Criticality Safety Criteria for the Handling, Transportation, Storage, and Long-term Waste Management of Reactor Fuel Outside Reactors</em>. Section 4 of this document addresses specific applications of neutron absorbers and provides guidance on their use. Section 14 provides additional detailed guidance on the use of fixed neutron absorbers in the design, construction, and operation of nuclear facilities outside reactors.</p>  <p>For the purpose of this document, fixed neutron absorbers are materials that:</p>
<ol>
<li>are an integral part of a facility, equipment, or fuel components</li>
<li>have neutron absorption properties, and</li>
<li>are incorporated into designs to assure margins for subcriticality as needed for normal and abnormal conditions</li>
</ol>  <p>This guidance applies to the design, construction, and operation of facilities used for handling, processing, and storing of fissionable materials. This guidance also applies to equipment associated with the transportation of fissionable material.</p>  <p>Use of fixed neutron absorbers may reduce the need for reliance on administrative criticality safety controls. Such use may provide more cost-effective utilization of the facility or equipment while maintaining adequate safety margins. When fixed neutron absorbers are present but are not required to maintain subcriticality under normal or credible abnormal conditions, this section does not apply.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="14.2"></div>
<h3 id="sec14-2">14.2 Scope</h3>  <p>This section provides guidance for the use of fixed neutron absorbers as an integral part of nuclear facilities and fissionable material process equipment outside reactors, where such absorbers provide criticality safety control.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="14.3"></div>
<h3 id="sec14-3">14.3 General safety considerations</h3>  <p>The purpose of fixed neutron absorbers in criticality control applications is to assure subcriticality for normal and credible abnormal conditions over the operating life of the facility or equipment. The nuclear criticality safety practices of section 2 are applicable. Verification of the absorbers and their effectiveness to capture neutrons shall be required before the materials are used. After the installation, there shall be verification to ensure that the neutron absorber system is in place as intended. The extent and frequency of verification shall be dictated by the impact of the environment in which the absorbers are placed on the absorber material properties, and on the configuration.</p>  <p>Establishing the effectiveness of neutron absorbers requires either the use of applicable experimental data or the use of analytical methods that have been validated with suitable benchmark experiments. The material selection and protection for specific applications must be consistent with the neutron absorption requirements for the projected facility operation under both normal and credible abnormal conditions.</p>  <p>If moderator or structural materials are needed for criticality safety in a neutron absorber system, these materials are also subject to controls, analyses, and verifications as specified in the following sections.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="14.4"></div>
<h3 id="sec14-4">14.4 Requirements and guidance</h3>  <p>Requirements for the use of fixed neutron absorbers for criticality safety control are grouped under three topics: design, safety evaluations, and verification and inspection. These topics shall be considered as part of the implementation and application process during design, construction, testing, and operation.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="14.4.1"></div>
<h4 id="sec14-4-1">14.4.1 Design</h4>  <p>Fixed neutron absorbers shall be designed to maintain their required geometrical relationship with fissionable materials during the intended operating life.</p>  <p>A means of verification shall be provided to determine that the design, safety, and operating requirements are met for all neutron absorber system components. Requirements for in-service verification shall be considered during the design of the neutron absorber system.</p>  <p>The design shall include assessment of the operating environment. Degradation of the neutron absorber or materials used to protect the neutron absorber due to chemical, physical, radiological, and mechanical impacts shall be protected against or allowed for in the design process.</p>  <p>The fixed neutron absorber shall be designed to maintain its designed neutron absorption capability during its intended operating life, including all credible conditions of neutron moderation and reflection.</p>  <p>Radiation effects on the neutron absorber system over its expected life (e.g., depletion by neutron absorption, embrittlement, and radiolysis) shall be evaluated.</p>  <p>The design shall make allowances for process material variations, for manufacturing tolerances, for uncertainties in the absorber density and distribution, and for uncertainties in the nuclear properties (such as the accuracy of neutron cross sections) of the neutron absorber.</p>  <p>The neutron absorber system shall be designed such that the criticality safety function is not compromised under all normal and credible abnormal conditions for the facility or equipment.</p>  <p>The neutron absorber system shall be designed to prevent inadvertent removal, displacement, or alteration of its components.</p>  <p>The design of equipment and facilities incorporating fixed neutron absorbers shall incorporate human factors engineering practices for installation, operation, and maintenance of fixed neutron absorbers.</p>  <p>The requirements of operations, fissionable material accountability, and other safety disciplines shall be considered in the design of the neutron absorber system.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="14.4.2"></div>
<h4 id="sec14-4-2">14.4.2 Safety evaluations</h4>  <p>The criticality safety practices of section 2 shall be applied.</p>  <p>The potential for neutron absorber degradation in the normal operating environment due to physical or chemical actions and any material composition changes, and changes in the material of the neutron absorber system (for example, cladding), shall be assessed.</p>  <p>The impact of normal and credible abnormal conditions on the neutron absorber system, such as radiation damage, chemical reactions, fire, temperature variations, pressure conditions, vibrations, mechanical impacts, abrasion, corrosion, inadvertent removal, depletion, and flooding, shall be evaluated.</p>  <p>Any event that subjects the neutron absorber system to physical or chemical conditions outside the design envelope shall require the reassessment of the system prior to restart of operations.</p>  <p>Safety analyses shall be based on results obtained from validated calculational methods or results obtained from applicable experiments. The calculational methods shall be validated in accordance with section 2.</p>  <p>The calculational methods used shall replicate the effect of neutron flux depressions associated with localized neutron absorbers.</p>  <p>The effect on criticality of inhomogeneity (for example, neutron streaming through the neutron absorber material) of the fixed neutron absorbers shall be assessed.</p>  <p>Evaluations shall consider manufacturing tolerances, material substitutions, geometry changes, corrosion allowance, modeling assumptions, process variables, and other relevant uncertainties.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="14.4.3"></div>
<h4 id="sec14-4-3">14.4.3 Verification and inspection</h4>  <p>The inspection and verification plan for fixed neutron absorber systems shall conform to the licensee&rsquo;s quality assurance requirements. Any actions as a result of the plan shall not compromise the nuclear criticality safety of the operating system. The inspection and verification shall be documented, and records shall be maintained for the operating life of the facility and of the neutron absorber system.</p>  <p>The required frequency of inspection and the extent of in service verification shall be determined. Factors that shall be considered include the safety analyses, the environment in which the absorbers are placed, and the absorber material properties.</p>  <p>If required, the in service verification methods used to measure the properties of the absorber may include neutronic techniques, other non-destructive techniques, or chemical testing methods.</p>  <p>Testing methods used to verify neutron absorber properties shall be calibrated to material standards issued by a national or international standards body such as the U.S. National Institute of Standards and Technology.</p>  <p>The inspection and verification plan shall be implemented for the material acquisition, neutron absorber system component manufacturing, installation, operation, and maintenance of the neutron absorber system.</p>  <p>Fixed neutron absorber material verification (elemental or isotopic as appropriate) shall be obtained before use.</p>  <p>The neutron absorber system components shall be verified to conform with design drawings and specifications before installation.</p>  <p>Proper installation of the neutron absorber system shall be verified prior to use.</p>  <p>The operation of the neutron absorber system and its maintenance shall be verified to conform to the safety evaluation requirements.</p>  <p>Results of in-service verifications shall be evaluated and, if necessary, appropriate corrective actions shall be taken.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="15"></div>
<h2 id="sec15">15. Nuclear Criticality Safety Based on Limiting and Controlling Moderators</h2>  <p>Some parts of this section are extracted from ANSI/ANS-8.22-1997 (reaffirmed in 2011), <em>Nuclear Criticality Safety Based on Limiting and Controlling Moderators</em>, with permission of the publisher, the American Nuclear Society. The text may have been adapted to make it applicable to Canada&rsquo;s international obligations to IAEA and consistent with CNSC&rsquo;s regulatory requirements.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="15.1"></div>
<h3 id="sec15-1">15.1 Introduction</h3>  <p>For many operations, criticality safety is achieved through the limitation of parameters such as geometry, mass, enrichment, and spacing of fissionable materials. The amount of fissionable material that can be safely handled, stored, or processed at one time can also depend on the credible range of neutron moderation. Optimum moderation, by definition, results in the lowest critical mass of fissionable materials, other conditions being unchanged.</p>  <p>An allowable mass, significantly greater than the allowable mass at optimum moderation, can be justified by limitation and control of moderators, i.e., control of moderators within specified limits.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="15.2"></div>
<h3 id="sec15-2">15.2 Scope</h3>  <p>Section 15 (this section) provides guidance for achieving criticality safety by the limitation and control of moderators in the range from no moderation to optimum moderation for fissionable materials. This section does not apply to concentration control of fissionable materials.</p>  <p>Guidance for the prevention of criticality accidents in the handling, storing, processing, and transporting of fissionable materials is presented in section 2, <em>Nuclear Criticality Safety in Operations with Fissionable Materials Outside Reactors</em>.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="15.3"></div>
<h3 id="sec15-3">15.3 Nuclear criticality safety practices</h3>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="15.3.1"></div>
<h4 id="sec15-3-1">15.3.1 Administrative practices for limitation and control of moderators</h4>  <p>Written procedures shall include the nuclear criticality safety limits and controls of operation. These procedures should address any steps to be taken if a moderator control fails.</p>  <p>Written procedures shall be provided for monitoring, testing, and maintenance to ensure that the limits and controls specified in process evaluations are maintained.</p>  <p>Written procedures shall be provided for moderator sampling and analysis as required by the process evaluation.</p>  <p>Moderator control areas shall be identified to personnel in accordance with facility specific practices.</p>  <p>Appropriate limits and other means for moderator control shall be posted.</p>  <p>Moderator control requirements shall be included in the firefighting plans.</p>  <p>Combustible materials in moderator control areas should be minimized.</p>  <p>Training in understanding and complying with moderator limits and controls shall be provided to appropriate personnel as part of nuclear criticality safety training. Additional guidance can be found in section 13, <em>Nuclear Criticality Safety Training</em>.</p>  <p>Additional guidance for administrative practices can be found in section 12, <em>Administrative Practices for Nuclear Criticality Safety</em>.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="15.3.2"></div>
<h4 id="sec15-3-2">15.3.2 Process evaluations for limitation and control of moderators</h4>  <p>The process evaluation shall define the moderator control area.</p>  <p>The process evaluation shall demonstrate that the operation will be subcritical under both normal and credible abnormal conditions, as further specified in section 2.3.2.2.</p>  <p>The process evaluation shall explicitly identify the limits, controls, and engineered barriers for moderator control areas. The limits shall be based on experimental data or derived through the use of calculational methods which are validated as required by section 2.</p>  <p>The process evaluation shall address properties of all materials present that could change the moderator content. Examples of properties of interest include hygroscopic, hydric, absorptive, adsorptive, and radiolytic natures of materials.</p>  <p>The process evaluation shall address moderators present in, introduced to, or accumulated in a moderator control area, either by design or by accident. Appendix F provides examples of moderators in section F.1, <em>Typical Moderating Materials</em>, and examples of sources of moderators in section F.2, <em>Potential Sources of Moderators</em>.</p>  <p>The process evaluation shall address the distribution of the moderators within the fissionable material and between discrete fissionable material units. Non-uniform distribution of moderators that might occur during mechanical (e.g., mixing), thermal, or chemical processes shall also be addressed.</p>  <p>The process evaluation should address tolerances and changes in the appropriate chemical and physical properties of the moderator.</p>  <p>The process evaluation should address the adequacy and integrity of containers used to transfer and store moderators or moderator controlled materials in a moderator control area.</p>  <p>The process evaluation shall address moderators that might be encountered during maintenance, decontamination, construction, and non-operational activities.</p>  <p>The process evaluation shall address the need for special controls involving fire prevention and suppression. The impact of firefighting in adjacent areas should also be considered.</p>  <p>The process evaluation shall establish the requirements for moderator measurement necessary to ensure specified limits and controls are maintained. Appendix F, section F.3, <em>Moderator Content Measurements</em>, provides an example of some aspects and considerations to assure integrity of moderator content measurement.</p>  <p>The process evaluation shall address the double contingency principle as stated in section 2.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="15.4"></div>
<h3 id="sec15-4">15.4 Engineered practices for moderator control areas</h3>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="15.4.1"></div>
<h4 id="sec15-4-1">15.4.1 Moderator control area barriers</h4>  <p>Moderator control areas shall be provided with engineered barriers as required by the process evaluation. Consideration should be given to potential hazards external to the moderator control areas that could compromise the integrity of the engineered barriers.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="15.4.2"></div>
<h4 id="sec15-4-2">15.4.2 Equipment and containers</h4>  <p>Fissionable material processing equipment and containers used in moderator controlled areas shall be designed, constructed, and made to limit and control moderators in accordance with the process evaluation. Examples of these barriers are provided in appendix F, section F.4, <em>Examples of Engineered Barriers to Control Moderators</em>.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="15.4.3"></div>
<h4 id="sec15-4-3">15.4.3 Penetrations</h4>  <p>Penetrations into a moderator control area should be minimized.</p>  <p>Systems that penetrate a moderator control area and normally contain moderators shall have limits and controls as required by the process evaluation.</p>  <p>Systems (such as ventilation ducts, compressed gas lines, electrical conduits, and drains) that penetrate a moderator control area, but do not normally contain moderators, shall have controls as required by the process evaluation.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="15.4.4"></div>
<h4 id="sec15-4-4">15.4.4 Fire prevention and suppression</h4>  <p>Fire control in moderator control areas shall incorporate the design features identified by the process evaluation. The use of non-moderating fire suppressant media should be considered.</p>  <p>Preference should be given to the use of non-combustible or fire-resistant building components, equipment, and materials to reduce the probability of introducing moderator material in firefighting activities.</p>  <p>Combustible materials should be minimized in moderator control areas to reduce the probability of introducing moderator material during firefighting activities. Necessary materials that are combustible or not fire resistant should be maintained in a manner to minimize the risk of fire.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="15.4.5"></div>
<h4 id="sec15-4-5">15.4.5 Instrumentation and conntrols</h4>  <p>Instrumentation and controls may be used to detect or prevent the presence of moderators. Instrumentation and controls identified in the process evaluation shall be designed, installed, operated, and maintained in accordance with section 2.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="16"></div>
<h2 id="sec16">16. Nuclear Criticality Accident Emergency Planning and Response</h2>  <p>Some parts of this section are extracted from ANSI/ANS-8.23-2007 (Reaffirmed in 2012), <em>Nuclear Criticality Accident Emergency Planning and Response</em>, with permission of the publisher, the American Nuclear Society. The text may have been adapted to make it applicable to Canada&rsquo;s international obligations to IAEA and consistent with CNSC&rsquo;s regulatory requirements.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="16.1"></div>
<h3 id="sec16-1">16.1 Introduction</h3>  <p>Nuclear criticality safety programs at facilities that use fissionable material are primarily directed at the avoidance of nuclear criticality accidents. However, the possibility of such accidents exists and the consequences can be life-threatening. This possibility mandates advance planning practice in planned emergency responses and verification of readiness.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="16.2"></div>
<h3 id="sec16-2">16.2 Scope</h3>  <p>Section 16 (this section) provides guidance for minimizing risks to personnel during emergency response to a nuclear criticality accident outside reactors. Criticality accident emergency planning and response procedures shall be maintained in any facility where a criticality accident alarm system, as specified in section 3, <em>Criticality Accident Alarm System</em>, is in use.</p>  <p>The provisions of this section may be considered in emergency planning for nuclear power plant sites and research reactor facilities.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="16.3"></div>
<h3 id="sec16-3">16.3 Responsibilities</h3>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="16.3.1"></div>
<h4 id="sec16-3-1">16.3.1 Management responsibilities</h4>  <p>Management shall ensure that:</p>
<ul>
<li>staff with relevant expertise is provided</li>
<li>an emergency response plan is established, maintained and exercised</li>
<li>immediate evacuation zones and evacuation routes are established</li>
<li>a personnel assembly station (or stations) is established, and a method is provided for timely accounting of all personnel who were within the immediate evacuation zone at the time of the evacuation</li>
<li>instrumentation and equipment needed to respond to a criticality accident is provided</li>
<li>the level of readiness (including training) needed for response to a criticality accident is adequate</li>
<li>the capability to perform radiological dose assessments for response to criticality accidents is provided</li>
<li>a communication system for central coordination of all site emergency activities is provided</li>
<li>nuclear accident dosimeters, for both personal and fixed units, are provided</li>
<li>equipment such as a criticality accident alarm system (defined in section 3) and procedures are in place to activate the emergency response when needed</li>
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
<div id="16.3.2"></div>
<h4 id="sec16-3-2">16.3.2 Technical staff responsibilities</h4>  <h5 id="sec16-3-2-1">16.3.2.1 Planning</h5>  <p>The technical staff shall:</p>
<ul>
<li>identify potential criticality accident locations</li>
<li>evaluate and characterize potential criticality accidents including prediction of radiological dose</li>
<li>determine the instrumentation and equipment requirements for emergency response activities</li>
<li>define the immediate evacuation zone for each potential criticality accident location</li>
<li>participate in the planning, conduct, and evaluation of exercises and drills</li>
</ul>  <h5 id="sec16-3-2-2">16.3.2.2 Emergency responses</h5>  <p>During an emergency response the technical staff shall:</p>
<ul>
<li>be available to advise and assist the emergency coordinator in responding to the criticality accident</li>
<li>conduct a radiological dose assessment appropriate for a criticality accident</li>
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
<div id="16.4"></div>
<h3 id="sec16-4">16.4 Emergency response planning</h3>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="16.4.1"></div>
<h4 id="sec16-4-1">16.4.1 Evaluation</h4>  <p>If this section applies, as defined in section 16.2, then an evaluation shall be conducted and documented to identify potential criticality accident locations.</p>  <p>The evaluation shall describe the representative nuclear criticality accident. This description may be based on professional judgment or a more detailed analysis. The description should include the estimated fission yield and estimated likelihood of recurrence of criticality.</p>  <p>An immediate evacuation zone shall be established based on the documented evaluation. Emergency response planning shall establish a maximum acceptable value for the absorbed dose at the immediate evacuation zone boundary. The basis for the maximum acceptable value shall be documented. Shielding may be considered in establishing the immediate evacuation zone. The localized effects of a criticality accident, and the fact that rapid evacuation is not without risk can result in an immediate evacuation zone that is significantly smaller than an entire site.</p>  <p><strong>Note:</strong> The representative nuclear criticality accident(s) can be either:</p>
<ul>
<li>a bounding nuclear criticality accident, as described below, or</li>
<li>a less-conservative nuclear criticality accident if detailed analyses of nuclear criticality accidents are performed and shown to be applicable to the conditions being evaluated</li>
</ul>  <p>The bounding nuclear criticality accident (based on an accident description in the U.S. regulatory guide 3.71, <em>Nuclear Criticality Safety Standards for Fuels and Material Facilities</em> [44]) is used by CNSC staff to evaluate various applications in various facilities. The applicant should assess the description, select and use those details that are relevant to the intended application. The assumption is that the radiation source strengths and releases from a nuclear criticality accident arise from an excursion occurring in an unfavorable geometry containing a solution of 400 g/L of uranium enriched in <sup>235</sup>U. The excursion produces an initial burst of 1 x 10<sup>18</sup> fissions in 0.5 seconds, followed successively at 10-minute intervals by 47 bursts of 1.9 x 10<sup>17</sup> fissions, for a total of 1 x 10<sup>19</sup> fissions in 8 hours. The excursion is assumed to be terminated by evaporation of 100 litres of the solution.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="16.4.2"></div>
<h4 id="sec16-4-2">16.4.2 Emergency response plan</h4>  <p>Based on the above evaluation, an emergency response plan shall be established and maintained. The emergency response plan may form an integral part of, or be separate from, other plans.</p>  <p>The emergency response plan shall include guidance to management, technical staff, and response personnel for response to a criticality accident. The plan shall address recommended protective actions, functions of response personnel, and equipment needed for criticality accident response.</p>  <p>The emergency response plan shall identify potential criticality accident locations, and includes appropriate facility descriptions.</p>  <p>The emergency response plan shall include provisions for:</p>
<ul>
<li>providing an emergency coordinator</li>
<li>activating emergency response</li>
<li>responding to concurrent emergencies (for example, fire, personnel injury, security incidents)</li>
<li>identifying exposed personnel and determining their radiation dose</li>
<li>providing appropriate medical care for exposed personnel</li>
<li>evaluating the consequences of the criticality accident, including those from radioactive and non-radioactive hazardous materials that may be released as a result of the accident</li>
<li>determining when the emergency condition no longer exists</li>
<li>coordinating with emergency organizations expected to provide emergency response assistance (these organizations may be onsite or offsite)</li>
<li>assembly and accountability of personnel</li>
</ul>  <p>The emergency response plan may be activated if merely a perception exists that a criticality accident is developing, is occurring, or has occurred.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="16.4.3"></div>
<h4 id="sec16-4-3">16.4.3 Equipment</h4>  <p>Appropriate protective clothing and equipment shall be provided for response personnel. This clothing and equipment may include respiratory protection equipment, anti-contamination suits, both high-range and low-range gamma radiation detection equipment, neutron detection equipment, communications equipment, and personal monitoring devices (such as self-reading pocket dosimeters).</p>  <p>Appropriate monitoring equipment to determine if further evacuation is needed, and to identify exposed individuals, shall be provided for use at personnel assembly station(s).</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="16.5"></div>
<h3 id="sec16-5">16.5 Evacuation</h3>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="16.5.1"></div>
<h4 id="sec16-5-1">16.5.1 Personnel in the immediate evacuation zone</h4>  <p>When an evacuation is initiated, all personnel within the immediate evacuation zone shall evacuate without hesitation by planned evacuation routes to an established assembly station (or stations).</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="16.5.2"></div>
<h4 id="sec16-5-2">16.5.2 Monitoring in the adjacent areas</h4>  <p>Radiation levels shall be monitored in occupied areas adjacent to the immediate evacuation zone after initiation of the emergency response.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="16.5.3"></div>
<h4 id="sec16-5-3">16.5.3 Monitoring at assembly stations</h4>  <p>Radiation levels shall be monitored periodically at the assembly station (or stations) after initiation of the emergency response.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="16.5.4"></div>
<h4 id="sec16-5-4">16.5.4 Further evacuation of non-emergency-response personnel</h4>  <p>If the monitoring required by sections 16.5.2 and 16.5.3, above, indicates that the dose rate exceeds 1 mSv/h (100 mrem/h) in areas that continue to be occupied, non-emergency-response personnel shall be evacuated from those areas.</p>  <p>The dose rate of 1 mSv/h was adapted from NCRP Report No. 116 [36].</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="16.5.5"></div>
<h4 id="sec16-5-5">16.5.5 Exits</h4>  <p>Sufficient exits from the immediate evacuation zone shall be provided to enable rapid and unobstructed evacuation of personnel. Immediate evacuation for personnel protection shall take precedence over contamination control or security considerations.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="16.5.6"></div>
<h4 id="sec16-5-6">16.5.6 Identification of assembly stations</h4>  <p>Assembly stations shall be clearly identified or posted.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="16.5.7"></div>
<h4 id="sec16-5-7">16.5.7 Evacuation route planning</h4>  <p>Evacuation routes should be planned to minimize the total risk considering all potential hazards, for example, chemical, industrial, and radiation.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="16.6"></div>
<h3 id="sec16-6">16.6 Re-entry, rescue, and stabilization</h3>  <p>All activities associated with re entry, rescue, and stabilization shall be coordinated and authorized by the emergency coordinator. The emergency coordinator may delegate authority to other qualified individuals.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="16.6.1"></div>
<h4 id="sec16-6-1">16.6.1 Re-entry</h4>  <p>Re-entry shall be planned to minimize risks to personnel.</p>  <p>Re-entry during the emergency shall be made only by volunteers trained in emergency response and re-entry.</p>  <p>Re-entry should be made only if a preliminary radiological survey indicates that the radiation levels are acceptable for re entry. Existing instrumentation or temporary sensors with remote readout may be used.</p>  <p>All re-entries shall be made with continuous radiation monitoring.</p>  <p>If the system remains critical and is possibly causing excessive damage or significant releases of radioactive material, an early re-entry effort to disable the system may be permitted. The method for disabling the system shall be carefully planned and implemented to minimize hazards to the re-entry team.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="16.6.2"></div>
<h4 id="sec16-6-2">16.6.2 Rescue</h4>  <p>If personnel need to be rescued, the rescue shall be planned so as not to expose rescuers to life-threatening radiation doses. Consideration should be given to the possibility of a continuing or recurring criticality.</p>  <p>Rescue actions that require early re-entry into the immediate evacuation zone should be performed by more than one volunteer.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="16.6.3"></div>
<h4 id="sec16-6-3">16.6.3 Stabilization</h4>  <p>The technical staff shall determine if the system is subcritical and shall advise management of methods to ensure stabilization of affected equipment and safe conditions for personnel. This may include placing the fissile material in a favourable geometry, diluting the fissile solution below a critical concentration, or using neutron absorbers to maintain subcriticality.</p>  <p>If use of neutron absorbers is planned to shut down or stabilize a system, a sufficient quantity of absorbers shall be readily available. Prior to being selected for use, the effect of the neutron absorbers under accident conditions shall be evaluated. Consideration shall be given to material compatibility and to cases under which addition of the neutron absorber can increase system neutron multiplication.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="16.7"></div>
<h3 id="sec16-7">16.7 Classroom training, exercises, and evacuation drills</h3>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="16.7.1"></div>
<h4 id="sec16-7-1">16.7.1 Classroom training</h4>  <p>A program of training for response to a criticality accident shall be developed and provided in accordance with section 13, <em>Nuclear Criticality Safety Training</em>. This training shall be reviewed annually and as needed, to ensure that changes or modifications are incorporated into the training program. Other instructional formats, such as computer based training, may be used to satisfy these requirements.</p>  <p>Facility personnel who must respond to a criticality accident alarm shall be trained to recognize the alarm, and to know the layout of the facility, evacuation routes, location of personnel assembly stations, and personnel accountability and monitoring methods.</p>  <p>Emergency response personnel shall be trained on their specific duties and responsibilities to respond to a criticality accident. This training shall include procedures, facility layout, and characteristics of a criticality accident.</p>  <p>Visitors shall be briefed on their responsibilities in responding to a criticality accident alarm or criticality accident.</p>  <p>Training on re-entry procedures and facility hazards shall be provided annually for re-entry team personnel.</p>  <p>Technical staff shall be trained in their duties and responsibilities in the event of a criticality accident.</p>  <p>Training should emphasize that emergency actions, including evacuation, should be performed in a manner to reduce risk of injury.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="16.7.2"></div>
<h4 id="sec16-7-2">16.7.2 Exercises</h4>  <p>A criticality accident response exercise should be conducted annually to test the capabilities of the emergency organizations and communication system and to reinforce emergency training. Exercises may include a drill. If exercises are conducted, the following apply:</p>
<ul>
<li>exercises should include a realistic scenario involving a simulated criticality accident, and have defined objectives that specify the aspects of emergency response selected for testing or reinforcing</li>
<li>exercises should include a post-exercise critique involving observers, controllers, and representative participants</li>
<li>exercises should be planned and controlled by personnel who are not direct participants (players) in the exercise</li>
<li>emergency response personnel should participate in nuclear criticality accident exercises to update and reinforce their previous response training</li>
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
<div id="16.7.3"></div>
<h4 id="sec16-7-3">16.7.3 Evacuation drills</h4>  <p>Evacuation drills shall be conducted at least annually. Drills should be scheduled to include all personnel who routinely work within the immediate evacuation zone.</p>  <p>The drills shall be pre-announced (for example, by written notice, posted signs, or public address announcement) to minimize the possibility that accident or injury could result.</p>  <p>If the response tests the same evacuation practices as used for a criticality accident, an evacuation drill may involve a scenario other than a criticality accident. A response to a false alarm should not be substituted for a drill, unless the required actions are observed or demonstrated.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appA"></div>
<h2 id="appA">Appendix A: Normal and Credible Abnormal Conditions</h2>  <p>The determination that a process will be subcritical under normal and credible abnormal conditions requires careful study. The criticality accidents that have occurred in industrial operations have resulted from failure to anticipate conditions that might arise; none has resulted from a faulty calculation of k<sub>eff</sub>.</p>  <p>The engineered nuclear criticality safety controls should be designed to withstand the effects of extreme loadings and environmental conditions (for example, extremes of temperature, humidity, pressure, or radiation) arising from the following initiating conditions and any other conditions having a direct effect on nuclear criticality safety [1]:</p>
<ol>
<li>external postulated initiating events:
<ul>
<li>natural phenomena
<ul>
<li>extreme weather conditions (precipitation: rain, hail, snow, ice; frazil ice; wind: tornadoes, hurricanes, cyclones, dust or sand storm; lightning; high or low temperatures; humidity)</li>
<li>flooding</li>
<li>earthquake and eruption of volcano</li>
<li>natural fires</li>
<li>effect of terrestrial and aquatic flora and fauna (blockage of inlets and outlets, damages on structure)</li>
</ul></li>
<li>human induced phenomena
<ul>
<li>fire, explosion or release of corrosive or hazardous substance (from surrounding industrial and military installations or transport infrastructure)</li>
<li>aircraft crash</li>
<li>missiles due to structural or mechanical failure in surrounding installations</li>
<li>flooding (failure of a dam, blockage of a river)</li>
<li>power supply and potential loss of power</li>
</ul></li>
</ul></li>
<li>internal postulated events:
<ul>
<li>loss of energy and fluids (electrical power supplies, air and pressurized air, vacuum, superheated water and steam, coolant, chemical reagents, and ventilation)</li>
<li>use of electricity or chemicals</li>
<li>mechanical failure including drop loads, rupture (pressure retaining vessels), leaks (corrosion), plugging</li>
<li>instrumentation and control, human failures</li>
<li>internal fires and explosions (gas generation, process hazards)</li>
<li>flooding, vessel overflows</li>
<li>addition of organic solvent to aqueous solution (or vice versa) to cause unexpected concentration of fissile components in new solvent</li>
</ul></li>
</ol>  <p>The following are typical examples of variations in process conditions that should be considered:</p>
<ol>
<li>a change in intended shape or dimensions resulting from bulging, corrosion, or bursting of a container, or failure to meet specifications in fabrication</li>
<li>an increase in the mass of fissionable material in a location as the result of operational error, improper labelling, equipment failure, or failure of analytical techniques</li>
<li>a change in the ratio of moderator to fissionable material resulting from:
<ul>
<li>inaccuracies in instruments or chemical analyses</li>
<li>flooding, spraying, or otherwise supplying units or groups of units with water, oil, snow (i.e., low-density water), cardboard, wood, or other moderating material</li>
<li>evaporating or displacing moderator</li>
<li>precipitating fissionable material from solutions</li>
<li>diluting concentrated solutions with additional moderator</li>
<li>introducing air bubbles between rows of fuel assemblies in a storage basin</li>
</ul></li>
<li>a change in the fraction of the neutron population lost by absorption resulting from:
<ul>
<li>loss of solid absorber by corrosion or by leaching</li>
<li>loss of moderator</li>
<li>redistribution of absorber and fissionable material by precipitation of one but not the other from a solution</li>
<li>redistribution of solid absorber within a matrix of moderator or solution by clumping</li>
<li>failure to add the intended amount of absorber to a solution or failure to add it with the intended distribution</li>
<li>failure of analytical techniques to yield correct amounts of concentrations</li>
</ul></li>
<li>a change in the amount of neutron reflection resulting from:
<ul>
<li>an increase in reflector thickness by adding additional material (e.g., water or personnel)</li>
<li>a change in reflector composition such as loss of absorber (e.g., by corrosion of an outer casing of absorber)</li>
</ul></li>
<li>a change in the interaction between units and reflectors resulting from:
<ul>
<li>the introduction of additional units or reflectors (e.g., personnel)</li>
<li>improper placing of units</li>
<li>loss of moderator and absorber between units</li>
<li>collapse of a framework used to space units</li>
</ul></li>
<li>an increase in the density of fissionable material</li>
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
<div id="appB"></div>
<h2 id="appB">Appendix B: Calculation Methods Yielding k<sub>eff</sub></h2>  <p>This discussion of calculational methods yielding k<sub>eff</sub> illustrates the requirements of section 2.3.4, <em>Validation of a Calculational Method</em>.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appB.1"></div>
<h3 id="appB-1">B.1 Purpose</h3>  <p>The purpose of using calculational methods is to supplement experimental data by interpolation and extrapolation.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appB.2"></div>
<h3 id="appB-2">B.2 Background</h3>  <p>Verification is the process of confirming that an installed computer code correctly performs the intended numerical calculations.</p>  <p>A benchmark is a well-characterized experiment at the critical state that may be used to establish the reliability of calculational methods.</p>  <p>Validation is the process of determining the applicability of a computational method and establishing the bias of the method by using benchmarks appropriate for intended evaluation of operations.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appB.3"></div>
<h3 id="appB-3">B.3 Establishing the upper subcritical limit</h3>  <p>Where calculational methods of analysis are applied to predict neutron multiplication factors for safety assessments, the calculated multiplication factor, k<sub>p</sub>, for that application, plus its associated uncertainties, |&Delta;k<sub>p</sub>|, shall not exceed an established allowable value (the upper subcritical limit (USL)) for the neutron multiplication factor for all normal and credible abnormal conditions as follows:</p>  <p className="text-center">k<sub>p</sub> + |&Delta;k<sub>p</sub>| &le; USL</p>  <p>In these calculations, USL is the result of the validation process and may be expressed as:</p>  <p className="text-center">USL = k<sub>c</sub> &ndash; |&Delta;k<sub>c</sub>| &ndash; |&Delta;k<sub>m</sub>|</p>
<table className="table">  <tr>
<th>where:</th>
<th>&nbsp;</th>
<th>&nbsp;</th>
<th>&nbsp;</th>  </tr>  <tr>
<td>&nbsp;</td>
<td>k<sub>c</sub></td>
<td>=</td>
<td>the mean k<sub>eff</sub>, which results from the calculation of the benchmark criticality experiments through the use of a particular calculational method.<br />
<br />
If the calculated multiplication factors for the criticality experiments exhibit a trend with a parameter, then kc shall be determined on the basis of a best fit to the calculated values. The experiments used as benchmarks in computing kc should have material compositions (fissionable materials, neutron absorbers, and moderators), geometric configurations, neutron energy spectra, and nuclear characteristics (including reflectors) similar to those of the system being evaluated. The difference between the experimentally measured value of k<sub>eff</sub> and k<sub>c</sub> is defined as the bias. This bias is expected to be a function of composition and other variables and should be examined for trends.</td>  </tr>  <tr>
<td>&nbsp;</td>
<td>&Delta;k<sub>c</sub></td>
<td>=</td>
<td>a margin for k<sub>c</sub> bias and bias uncertainty, which includes allowance for:
<ul>
<li>Uncertainties in the critical experiments;</li>
<li>Statistical or convergence uncertainties, or both, in the computation of k<sub>c</sub>;</li>
<li>Uncertainties due to extrapolation of k<sub>c</sub> outside the range of experimental data; and</li>
<li>Uncertainties due to limitations in the geometrical or material representations used in the computational method.</li>
</ul></td>  </tr>  <tr>
<td>&nbsp;</td>
<td>&Delta;k<sub>m</sub></td>
<td>=</td>
<td>A minimum administrative margin of 50 mk to ensure the subcriticality of USL.</td>  </tr>  <tr>
<td>&nbsp;</td>
<td>k<sub>p</sub></td>
<td>=</td>
<td>the calculated multiplication factor, k<sub>eff</sub>, of the system being evaluated for normal and credible abnormal conditions or events.</td>  </tr>  <tr>
<td>&nbsp;</td>
<td>&Delta;k<sub>p</sub></td>
<td>=</td>
<td>an allowance for:
<ul>
<li>Statistical or convergence uncertainties, or both, in the computation of k<sub>p</sub>;</li>
<li>Uncertainties due to limitations in the geometric or material representations used in the computational method.</li>
</ul></td>  </tr>  </table>  <p>The various uncertainties may be combined statistically if they are independent (an example of this can be found in [45]). Correlated uncertainties should be combined additively.</p>  <p>Methods that do not directly yield k<sub>eff</sub>, but whose validity has been established in accordance with section 2, may be used to ensure subcriticality.</p>  <p>Appropriate experimental data or data derived from experiments, with an allowance adequate to ensure subcriticality, may be used directly.</p>  <p><em>In situ</em> measurements performed in accordance with section 5, <em>Safety in Conducting Subcritical Neutron Multiplication Measurements In Situ</em>, may be used to confirm subcriticality.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appB.4"></div>
<h3 id="appB-4">B.4	Ensuring practicality of compliance; upper subcritical limit</h3>  <p>In practice, statistical or convergence uncertainties, |&Delta;k<sub>p</sub>|, may be different in each specific calculation run. The approach, described in section B.3, ensures practicality of compliance with USL, which is an approved limit and, hence, cannot be changed in each specific calculation.</p>  <p><em>Example</em></p>  <p>For all normal and credible abnormal conditions, the following condition is to be demonstrated:</p>  <p className="align=center">k<sub>p</sub> + 2&sigma; &le; USL</p>  <p>where k<sub>p</sub> is the calculated multiplication factor, 2&sigma; is its statistical or convergence uncertainty at 95% confidence level, and USL is the established upper subcritical limit.</p>  <p>If, in the criticality evaluation, &sigma; is shown to be greater than all other combined allowances and uncertainties, i.e., if:</p>  <p className="text-center">&sigma; &gt; |&Delta;k<sub>c</sub>|</p>  <p>then the following more conservative equation should be used:</p>  <p className="text-center">k<sub>p</sub> + 3&sigma; &le; 0.95</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appB.5"></div>
<h3 id="appB-5">B.5	Extending area (or areas) of applicability</h3>  <p>The area (or areas) of applicability of a calculational method may be extended beyond the range of experimental conditions over which the bias is established by making use of correlated trends in the bias. Where the extension is large, the method should be:</p>
<ol>
<li><p>subjected to a study of the bias and potentially compensating biases associated with individual changes in materials, geometries, or neutron spectra, thus allowing changes that can affect the extension to be independently validated</p>
<p>In practice, this can be accomplished in a stepwise approach; that is, benchmarks for the validation should be chosen (where possible) such that the selected experiments differ from previous experiments by the addition of one new parameter so the effect of only the new parameter, on the bias can be observed.</p></li>
<li>supplemented by alternative calculational methods to provide an independent estimate of the bias (or biases) in the extended area (or areas) of applicability</li>
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
<div id="appB.6"></div>
<h3 id="appB-6">B.6	Validation report</h3>  <p>To satisfy the requirements of section 2, section 2.3.4.6 it is recommended to do the following:</p>
<ol>
<li>state the method that was validated (i.e., computer programs and options used, recipes for choosing mesh points (where applicable), the cross section sets, and any numerical parameters necessary to describe the input)</li>
<li>describe the analytical models (and inherent biases) used for the development of material composition atom densities in the experimental data</li>
<li><p>provide the basis and state the reliability of the terms that define the prescribed parameter limit (or limits), k<sub>p</sub>, where:</p>
<p className="text-center">k<sub>p</sub> &le; k<sub>c</sub> &ndash; |&Delta;k<sub>c</sub>| &ndash; |&Delta;k<sub>m</sub>| &ndash; |&Delta;k<sub>p</sub>|</p></li>
<li>identify and demonstrate the relationship (or relationships) and trend (or trends), if present, among the independent and dependent parameter (or parameters) used in the validation process for establishing biases, area (or areas) of applicability, and parameter limits</li>
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
<div id="appC"></div>
<h2 id="appC">Appendix C: Example: Validation of a Calculational Method</h2>  <p>This representative example uses fictional data to illustrate the application of the requirements of section 2.3.4, <em>Validation of a Calculational Method</em>.</p>  <p>The associated literature contains additional, more complex examples of validations generally meeting these requirements; in particular, the parameter limits were calculated by methods meeting these requirements.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appC.1"></div>
<h3 id="appC-1">C.1 The problem</h3>  <p>Validate a method for calculating subcritical mass limits for water-reflected solutions of fictitium (Fi) ranging in concentration from 2 to 32 g <sup>292</sup>Fi/L with no restriction on shape.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appC.2"></div>
<h3 id="appC-2">C.2 The method</h3>  <p>The method selected consists of the XYZ computer code for spherical systems using Smith&rsquo;s approximations as described in NIL-3638 and Jones&rsquo; three-group cross section.</p>  <p>The solution was contained in thin water-reflected spherical shells having nuclear properties differing insignificantly from those of water.</p>
<table className="">  <caption className="text-left">Table C-1: Available data from criticality experiments</caption>  <tr>
<th className="text-center">Concentration, &rho;&nbsp;(g <sup>292</sup>Fi/L)</th>
<th className="text-center">Critical radius (cm)</th>  </tr>  <tr>
<td className="text-center">2</td>
<td className="text-center">19.9</td>  </tr>  <tr>
<td className="text-center">8</td>
<td className="text-center">10.7</td>  </tr>  <tr>
<td className="text-center">16</td>
<td className="text-center">10.2</td>  </tr>  </table>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appC.3"></div>
<h3 id="appC-3">C.3 Validation</h3>  <p>The XYZ code was operational on the local computer. Sample problems distributed with the code were run. A comparison with results obtained from the code author for the sample problems indicated that the code was operating correctly for multiregion spherical systems.</p>  <p>Computations were made for the three experimental points and produced the following results:</p>
<table className="">  <caption className="text-left">Table C-2: Computations from experimental data</caption>  <tr>
<th className="text-center">Concentration, &rho;(g <sup>292</sup>Fi/L)</th>
<th className="text-center">k<sub>eff</sub></th>  </tr>  <tr>
<td className="text-center">2</td>
<td className="text-center">1.0046 &plusmn; 0.0057</td>  </tr>  <tr>
<td className="text-center">8</td>
<td className="text-center">0.9864 &plusmn; 0.0041</td>  </tr>  <tr>
<td className="text-center">16</td>
<td className="text-center">0.9696 &plusmn; 0.0041</td>  </tr>  </table>  <br />  <p>The quoted errors represent those introduced by the quoted experimental data errors.</p>  <p>The calculations were converged to a computational error in k<sub>eff</sub> of &plusmn; 0.0001, which is small compared with the experimental error. Within the area of applicability covered by experimental data (2 to 16 g/L), the computed value of k<sub>eff</sub> is a nearly linear function of concentration and there appears to be no reason to expect deviations from smooth behaviour. The area of applicability, however, must be extended to include concentrations as great as 32 g/L.</p>  <p>Between 2 and 16 g/L, k<sub>eff</sub> as a function of concentration is slightly concave upward (see Figure C-1); hence linear extrapolation of the values at 8 and 16 might be expected to give an estimate of k<sub>eff</sub> that is too low at 32 g/L. The linearly extrapolated result, shown in Figure C-1, is k<sub>eff</sub> = 0.936. The large extrapolation, however, should receive further support.</p>  <p><strong>Figure C-1: Computed k<sub>eff</sub> as a Function of <sup>292</sup>Fi Density for Experimentally Critical Systems</strong></p>
<div className="col-md-2"></div>  <div className="col-md-6 module-poster">  <img src="/images/regulatory-documents/regdoc-2-4-3/C-1.png" alt="Computed k<sub/>eff</sub> as a Function of <sup>292</sup>Fi Density for Experimentally Critical Systems" />  </div>  <div className="clear"></div>
<p>In view of the downward drift of k<sub>eff</sub> with an increase in concentration, a study was made to determine the cause. The result of this study was that the epithermal capture cross section of <sup>292</sup>Fi appeared to have the greatest uncertainty and was the likely cause of the discrepancy. A reduction of 20% in the epithermal capture cross section was made. Calculations made with the modified method (epithermal cross sections reduced by 20%) yielded:</p>
<table className="">  <caption className="text-left">Table C-3: Computations after 20% reduction</caption>  <tr>
<th className="text-center">Concentration, &rho;(g <sup>292</sup>Fi/L)</th>
<th className="text-center">k<sub>eff</sub></th>  </tr>  <tr>
<td className="text-center">2</td>
<td className="text-center">1.0109</td>  </tr>  <tr>
<td className="text-center">8</td>
<td className="text-center">1.0084</td>  </tr>  <tr>
<td className="text-center">16</td>
<td className="text-center">1.006</td>  </tr>  </table>  <br />  <p>This modification produced results that appear to minimize the drift with concentration variation and that may be expected to produce a k<sub>eff</sub> of approximately 1.01 at 32 g/L.</p>  <p>The following calculations were made at a concentration of 32 g/L:</p>
<table className="">  <caption className="text-left">Table C-4: Calculations at 32 g/L</caption>  <tr>
<th className="text-center">Radius (cm)</th>
<th className="text-center">k<sub>eff</sub> (original <sup>282</sup>Fi cross sections)</th>
<th className="text-center">k<sub>eff</sub> (80% epithermal <sup>282</sup>Fi cross sections)</th>  </tr>  <tr>
<td className="text-center">12.429</td>
<td className="text-center">1.0000</td>
<td className="text-center">1.0708</td>  </tr>  <tr>
<td className="text-center">11.274</td>
<td className="text-center">0.9343</td>
<td className="text-center">1.0000</td>  </tr>  </table>  <br />  <p>These calculations show that the reactivity difference or relative bias between the two calculations is:</p>  <p className="text-center">&Delta;k<sub>eff</sub>/k<sub>eff</sub> =  0.068 &plusmn; 0.002</p>  <p>Based on the assumption that the modified method would yield k<sub>eff</sub> = 1.01 for a critical system, it can be determined by linear interpolation of the data shown in Table C-4 that the unmodified method should give k<sub>eff</sub> = 0.9443 for a critical water-reflected solution containing 32 g when the XYZ code is used with the unmodified Jones cross sections.</p>  <p>The bias for the XYZ code with unmodified Jones cross sections, over the concentration range 2 &le; &rho; &le; 32, is thus estimated to be:</p>
<table className="">  <caption className="text-left">Table C-5: Bias estimate</caption>  <tr>
<th className="text-center">Concentration, &rho;(g <sup>292</sup>Fi/L)</th>
<th className="text-center">Bias</th>  </tr>  <tr>
<td className="text-center">2</td>
<td className="text-center">+0.0046</td>  </tr>  <tr>
<td className="text-center">8</td>
<td className="text-center">-0.01360</td>  </tr>  <tr>
<td className="text-center">16</td>
<td className="text-center">-0.0304</td>  </tr>  <tr>
<td className="text-center">32</td>
<td className="text-center">-0.0557</td>  </tr>  </table>  <br />  <p>The uncertainty in the bias in the range of 2 to 16 g <sup>292</sup>Fi is mainly due to experimental error (some uncertainty is associated with interpolation). The uncertainty at 32 g <sup>292</sup>Fi also must cover all errors introduced by extrapolation. A margin in keff sufficient to compensate for uncertainty in the bias and to assure subcriticality was judged to be 0.05 in the 2 to 32 g <sup>292</sup>Fi/L range. Any system with k<sub>eff</sub>, computed by this method, no greater than 0.95, 0.9264, 0.9196, or 0.8943 for concentrations of 2, 8, 16, and 32 g <sup>292</sup>Fi respectively, is confidently expected to be subcritical.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appD"></div>
<h2 id="appD">Appendix D: Detector Placement</h2>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appD.1"></div>
<h3 id="appD-1">D.1 Introduction</h3>  <p>This appendix provides general guidance for assessing the adequacy of detector placement. It is not intended to be inclusive with respect to all situations likely to be encountered, nor is it intended as a substitute for facility-specific analysis.</p>  <p>Specific examples and discussion in this appendix assume that the minimum accident of concern delivers the equivalent of an absorbed dose rate to free air of 0.20 Gy/min at 2 metres from the reacting material. However, the techniques are equally applicable for situations where the minimum accident to be detected has a different fission yield.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appD.2"></div>
<h3 id="appD-2">D.2 General considerations</h3>  <p>Prior to a discussion on the methods for assessing the adequacy of criticality alarm detector coverage, two general topics are addressed: operability characteristics of the detection system, and radiation field characterization of criticality accidents.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appD.2.1"></div>
<h4 id="appD-2-1">D.2.1	Operability characteristics of the detection system</h4>  <p>To meet the intent of section 3, <em>Criticality Accident Alarm System</em>, it is important to have knowledge of the detection system&rsquo;s characteristics, such as the type of radiation being detected, spectral dependencies, dead time, the potential for saturation, and whether the system is based on a rate or an integrated quantity, to name some of these characteristics.</p>  <p>Detector behaviour in response to a rapid transient fission pulse should be understood. For rate detectors, the effects of needle or indicator inertia on the actual detector&rsquo;s response should either be measured or estimated, i.e., what fraction of the peak dose does the detector actually indicate [46]. For integrating detectors, the signal strength is equivalent to the entire burst quantity, minus any dead time effects, provided the integration time is greater than the pulse width.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appD.2.2"></div>
<h4 id="appD-2-2">D.2.2	Radiation field characterization of criticality accidents</h4>  <p>Accident detectors detect either gamma rays or neutrons. To estimate properly a detector&rsquo;s response, it is therefore necessary to determine the relative contributions of gamma rays and neutrons to the 0.20 Gy (20 rad) total dose. This is necessary even for detector systems with dual detection capability, as the attenuation/buildup of each type of particle differs as the particles travel between the accident and detector locations.</p>  <p>In the past, estimates of neutron/gamma (or n/&gamma;) dose ratios were almost exclusively based on data from actual accidents or dosimetry experiments. The difficulty with these estimates is that they were based on absorbed tissue dose and could, depending on the type of accident, lead to an inaccurate n/&gamma; dose ratio estimate in air.</p>  <h5>D.2.2.1	Moderated assemblies</h5>  <p>An experimental recreation of the accident at Y-12 [47] (a moderated assembly), provides estimates of both the n/&gamma; dose ratio and the total fission yield necessary for 0.20 Gy/min total at 2 metres.</p>  <p>The experiment was operated at a sustained rate of 9.5 &Cross; 10<sup>12</sup> fissions/second for 42 minutes. This produced a neutron tissue dose of 0.48 Gy at 1.8 metres, a point at which the n/&gamma; tissue dose ratio had been previously measured as 0.30 from an earlier power run. Thus the total dose at 2 metres was approximately:</p>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<mrow><mo>(</mo>
<mrow>
<mn>0.48</mn><mtext>&#x00A0;Gy</mtext><mo>+</mo><mfrac>
<mrow>
<mn>0.48</mn><mtext>&#x00A0;Gy</mtext></mrow>
<mrow>
<mn>0.3</mn></mrow>
</mfrac>
</mrow>
<mo>)</mo></mrow><msup>
<mrow>
<mrow><mo>(</mo>
<mrow>
<mfrac>
<mrow>
<mn>1.8</mn><mtext>&#x00A0;m</mtext></mrow>
<mrow>
<mn>2.0</mn><mtext>&#x00A0;m</mtext></mrow>
</mfrac>
</mrow>
<mo>)</mo></mrow></mrow>
<mn>2</mn>
</msup>
<mo>=</mo><mn>1.685</mn><mtext>&#x00A0;Gy</mtext></mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaWaaeWaaeaaca
aIWaGaaiOlaiaaisdacaaI4aGaaeiiaiaabEeacaqG5bGaey4kaSYa
aSaaaeaacaaIWaGaaiOlaiaaisdacaaI4aGaaeiiaiaabEeacaqG5b
aabaGaaGimaiaac6cacaaIZaaaaaGaayjkaiaawMcaamaabmaabaWa
aSaaaeaacaaIXaGaaiOlaiaaiIdacaqGGaGaaeyBaaqaaiaaikdaca
GGUaGaaGimaiaabccacaqGTbaaaaGaayjkaiaawMcaamaaCaaaleqa
baGaaGOmaaaakiabg2da9iaaigdacaGGUaGaaGOnaiaaiIdacaaI1a
GaaeiiaiaabEeacaqG5baaaa@566A@
</annotation>   </semantics>  </math>
<p>A total dose rate of 0.20 Gy/min at 2 metres would then be composed of 0.046 Gy/min from neutrons and 0.154 Gy/min from gamma rays, and would require a power level of:</p>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<mrow><mo>(</mo>
<mrow>
<mfrac>
<mrow>
<mn>0.20</mn><mtext>&#x00A0;Gy/min</mtext></mrow>
<mrow>
<mn>1.685</mn><mtext>&#x00A0;Gy</mtext></mrow>
</mfrac>
</mrow>
<mo>)</mo></mrow><mtext>(42&#x00A0;min)(9</mtext><mtext>.5&#x00A0;</mtext><mo>&#x00D7;</mo><msup>
<mrow>
<mn>10</mn></mrow>
<mrow>
<mn>12</mn></mrow>
</msup>
<mtext>&#x00A0;fissions&#x00A0;/&#x00A0;s)</mtext><mo>=</mo><mn>4.7</mn><mo>&#x00D7;</mo><msup>
<mrow>
<mtext>10</mtext></mrow>
<mrow>
<mn>13</mn></mrow>
</msup>
<mtext>&#x00A0;fissions&#x00A0;/&#x00A0;s</mtext></mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaWaaeWaaeaada
WcaaqaaiaaicdacaGGUaGaaGOmaiaaicdacaqGGaGaae4raiaabMha
caqGVaGaaeyBaiaabMgacaqGUbaabaGaaGymaiaac6cacaaI2aGaaG
ioaiaaiwdacaqGGaGaae4raiaabMhaaaaacaGLOaGaayzkaaGaaeik
aiaabsdacaqGYaGaaeiiaiaab2gacaqGPbGaaeOBaiaabMcacaqGOa
Gaaeyoaiaab6cacaqG1aGaaeiiaiabgEna0kaaigdacaaIWaWaaWba
aSqabeaacaaIXaGaaGOmaaaakiaabccacaqGMbGaaeyAaiaabohaca
qGZbGaaeyAaiaab+gacaqGUbGaae4CaiaabccacaqGVaGaaeiiaiaa
bohacaqGPaGaeyypa0JaaGinaiaaiEdacqGHxdaTcaqGXaGaaeimam
aaCaaaleqabaGaaGymaiaaiodaaaGccaqGGaGaaeOzaiaabMgacaqG
ZbGaae4CaiaabMgacaqGVbGaaeOBaiaabohacaqGGaGaae4laiaabc
cacaqGZbaaaa@73DC@
</annotation>   </semantics>  </math>
<p>Despite the fact that this estimate is based on tissue dose, it is still an acceptable estimate of the n/&gamma; dose ratio in air and the fission rate for the corresponding minimum accident of concern. This is true because the radiation field at 2 metres for moderated assemblies is dominated by gamma rays, and 0.01 Gy tissue dose from x-rays is about equal to 0.00877 Gy air from gamma rays (i.e., 1 Gy tissue is approximately 1 Gy air).</p>  <p>Computer-based estimates that use tissue and air dose flux conversion factors support this conclusion (see Table D-1).</p>
<table className="table table-striped">  <caption className="text-left">Table D-1: Moderated assembly n/&gamma; dose ratio comparison</caption>  <tr>
<th className="text-center">Estimated source</th>
<th className="text-center">n/&gamma; Dose ratio</th>
<th className="text-center">Yield for 0.20 Gy</th>  </tr>  <tr>
<td className="text-center">Y-12 accident (Tissue)</td>
<td className="text-center">0.30</td>
<td className="text-center">2.8 &Cross; 10<sup>15</sup> fissions</td>  </tr>  <tr>
<td className="text-center">Computed tissue dose</td>
<td className="text-center">0.66</td>
<td className="text-center">2.6 &Cross; 10<sup>15</sup> fissions</td>  </tr>  <tr>
<td className="text-center">Computed air dose</td>
<td className="text-center">0.11</td>
<td className="text-center">7.7 &Cross; 10<sup>15</sup> fissions</td>  </tr>  </table>  <br />
<h5>D.2.2.2	Unmoderated Assemblies</h5>  <p>For unmoderated assemblies it is possible to estimate the n/&gamma; dose ratio in air from tissue doses received during actual accidents. Two criticality accidents have occurred, under conditions similar to those specified, with a metallic, partially reflected <sup>239</sup>Pu system. In one such accident [21], a transient of 3 &Cross; 10<sup>15</sup> fissions produced an estimated 0.51 Gy neutron and 0.051 Gy gamma ray tissue dose at 1.8 metres. For a bare metallic 239Pu system, the neutron leakage would be higher, and a n/&gamma; tissue dose ratio of 12 is assumed. Therefore, the 0.20 Gy dose in air would consist of 0.185 Gy from neutrons and 0.015 Gy from gamma rays, and result from:</p>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<mn>3</mn><mo>&#x00D7;</mo><msup>
<mrow>
<mn>10</mn></mrow>
<mrow>
<mn>15</mn></mrow>
</msup>
<mtext>&#x00A0;fissions</mtext><mrow><mo>(</mo>
<mrow>
<mfrac>
<mrow>
<mn>0.20</mn><mtext>&#x00A0;Gy</mtext></mrow>
<mrow>
<mn>0.561</mn><mtext>&#x00A0;Gy</mtext></mrow>
</mfrac>
</mrow>
<mo>)</mo></mrow><msup>
<mrow>
<mrow><mo>(</mo>
<mrow>
<mfrac>
<mrow>
<mn>2.0</mn><mtext>&#x00A0;m</mtext></mrow>
<mrow>
<mn>1.8</mn><mtext>&#x00A0;m</mtext></mrow>
</mfrac>
</mrow>
<mo>)</mo></mrow></mrow>
<mn>2</mn>
</msup>
<mo>=</mo><mn>1.3</mn><mo>&#x00D7;</mo><msup>
<mrow>
<mn>10</mn></mrow>
<mrow>
<mn>15</mn></mrow>
</msup>
<mtext>&#x00A0;fissions</mtext></mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaaG4maiabgE
na0kaaigdacaaIWaWaaWbaaSqabeaacaaIXaGaaGynaaaakiaabcca
caqGMbGaaeyAaiaabohacaqGZbGaaeyAaiaab+gacaqGUbGaae4Cam
aabmaabaWaaSaaaeaacaaIWaGaaiOlaiaaikdacaaIWaGaaeiiaiaa
bEeacaqG5baabaGaaGimaiaac6cacaaI1aGaaGOnaiaaigdacaqGGa
Gaae4raiaabMhaaaaacaGLOaGaayzkaaWaaeWaaeaadaWcaaqaaiaa
ikdacaGGUaGaaGimaiaabccacaqGTbaabaGaaGymaiaac6cacaaI4a
Gaaeiiaiaab2gaaaaacaGLOaGaayzkaaWaaWbaaSqabeaacaaIYaaa
aOGaeyypa0JaaGymaiaac6cacaaIZaGaey41aqRaaGymaiaaicdada
ahaaWcbeqaaiaaigdacaaI1aaaaOGaaeiiaiaabAgacaqGPbGaae4C
aiaabohacaqGPbGaae4Baiaab6gacaqGZbaaaa@6BAB@
</annotation>   </semantics>  </math>
<p>A comparison of this estimate along with computed dose ratio estimates is shown in Table D-2. The computed dose ratio estimates indicate that the 0.20 Gy total in air would consist of 0.146 Gy from neutrons and 0.054 Gy from gamma rays, slightly different than the estimate based on tissue dose. In contrast to moderated systems, the radiation field at 2 metres from an unmoderated system is dominated by neutrons that have significantly different energy deposition properties in air than in tissue.</p>
<table className="table table-striped">  <caption className="text-left">Table D-2: Unmoderated assembly n/&gamma; dose ratio comparison</caption>  <tr>
<th className="text-center">Estimated source</th>
<th className="text-center">n/&gamma; Dose ratio</th>
<th className="text-center">Yield for 0.20 Gy</th>  </tr>  <tr>
<td className="text-center">Los Alamos accidents (Tissue)</td>
<td className="text-center">12.0</td>
<td className="text-center">1.3 &Cross; 10<sup>15</sup> fissions</td>  </tr>  <tr>
<td className="text-center">Computed tissue dose</td>
<td className="text-center">14.5</td>
<td className="text-center">2.2 &Cross; 10<sup>15</sup> fissions</td>  </tr>  <tr>
<td className="text-center">Computed air dose</td>
<td className="text-center">2.7</td>
<td className="text-center">5.7 &Cross; 10<sup>15</sup> fissions</td>  </tr>  </table>  <br />
<h5>D.2.2.3	Summary of n/&gamma; Ratios for Moderated and Unmoderated Systems</h5>  <p>The estimates presented above are for highly-enriched low-concentration solution systems, and highly enriched metal systems. Clearly, as the transition from low concentration to metal is made, the n/&gamma; dose ratio must also change as does the total number of fissions required, although in the latter case the relationship between the two is weakly coupled. These items should be considered by an evaluator along with any other effects caused by differences, such as fissionable material type or enrichment, for those facilities where such accidents are deemed credible.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appD.3"></div>
<h3 id="appD-3">D.3 Methods</h3>  <p>Determining the adequacy of detector coverage is inherently a complicated process. Several options are available to the evaluator, including but not limited to: <em>in situ</em> source testing; simple hand calculations; one-dimensional deterministic or Monte Carlo transport computations; and two- or three-dimensional deterministic or Monte Carlo transport computations.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appD.3.1"></div>
<h4 id="appD-3-1">D.3.1	<em>In situ</em> source testing</h4>  <p>In lieu of, or as a supplement to, computations, a fixed neutron or gamma ray source may be used to estimate the adequacy of detector coverage for a facility. This would simply amount to placing a source at a hypothetical criticality accident location and observing the detectors&rsquo; response. Factors that should be considered are:</p>
<ol>
<li>Source strength. The source should be strong enough to provide an adequate signal, i.e., statistically significant, at the detector through the intervening shielding and distance.</li>
<li>Source scaling. A relationship between the source strength and the type of accident under investigation must be known. The scaling may be as simple as a constant for a source calibrated in Gy/h, or more complicated, as in the case of fission based sources.</li>
<li>Source spectrum. The source must either represent the spectral characteristics of credible accidents, or some type of estimated correction should be made to account for spectral differences. For example, the gamma rays from a monoenergetic cobalt-60 source attenuates differently than the gamma rays from an accident, despite the fact that both could produce the same dose rate at 2 metres.</li>
</ol>  <p>The advantage of <em>in situ</em> source testing is that it is a physical measurement, relieving the evaluator of the need to estimate locations, thicknesses, and compositions of the intervening materials. For some situations, however, the source strength required could be so high as to be impractical.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appD.3.2"></div>
<h4 id="appD-3-2">D.3.2	Simple hand calculations</h4>  <p>For cases in which little or no shielding exists, it may be possible to apply a simple hand calculation to estimate the range of a detector. Use of this type of calculation is best illustrated by example.</p>  <p><strong>Example D-1:</strong> A Gamma Ray Rate Meter Detector</p>  <p>Given:</p>
<ol>
<li>The system must respond to the minimum accident of concern due to a sustained fission reaction in moderated, unreflected fissile material delivering 0.0033 Gy/s.</li>
<li>The system must respond to the minimum accident of concern due to a rapid transient in an unreflected fissile system, moderated or unmoderated. A 1 ms minimum duration of the rapid transient may be assumed.</li>
<li>The detector is set to trip at a gamma ray dose rate of 0.0005 Gy/h.</li>
</ol>  <p>Assumptions:</p>
<ol>
<li>the n/&gamma; dose ratio in air for a moderated system is 0.11 (see Table D-1), so that at 2 metres, 0.18 Gy is due to gamma rays and 0.02 Gy is due to neutrons</li>
<li>the n/&gamma; dose ratio in air for an unmoderated system is 2.7 (see Table D-2), so that at 2 metres, 0.054 Gy is due to gamma rays, and 0.146 Gy is due to neutrons</li>
<li>the indicated detector response (needle movement) to a rapid transient is assumed to be at least 1/2500 of the actual peak dose rate</li>
<li>the gamma ray dose rate varies inversely as the square of the distance from the 2 metre point</li>
<li>an air transmission factor of 1/3 is assumed at large distances</li>
</ol>  <p>Assumptions (4) and (5) are equivalent to decoupling the problem into two parts: transport through a vacuum, and a constant attenuation factor of 2/3 to account for absorption in the air.</p>  <p><strong>Sustained reaction calculations</strong></p>  <p>The dose rate as a function of distance is given by:</p>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<msub>
<mi>D</mi>
<mi>r</mi>
</msub>
<mo stretchy=&#39;false&#39;>(</mo><mi>r</mi><mo stretchy=&#39;false&#39;>)</mo><mo>=</mo><msub>
<mi>D</mi>
<mrow>
<mn>2</mn><mi>m</mi></mrow>
</msub>
<mo>&#x00D7;</mo><msup>
<mrow>
<mrow><mo>(</mo>
<mrow>
<mfrac>
<mn>2</mn>
<mi>r</mi>
</mfrac>
</mrow>
<mo>)</mo></mrow></mrow>
<mn>2</mn>
</msup>
<mo>&#x00D7;</mo><msub>
<mi>t</mi>
<mrow>
<mi>a</mi><mi>i</mi><mi>r</mi></mrow>
</msub>
</mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaamiramaaBa
aaleaacaWGYbaabeaakiaacIcacaWGYbGaaiykaiabg2da9iaadsea
daWgaaWcbaGaaGOmaiaad2gaaeqaaOGaey41aq7aaeWaaeaadaWcaa
qaaiaaikdaaeaacaWGYbaaaaGaayjkaiaawMcaamaaCaaaleqabaGa
aGOmaaaakiabgEna0kaadshadaWgaaWcbaGaamyyaiaadMgacaWGYb
aabeaaaaa@4A4C@
</annotation>   </semantics>  </math>
<table className="table">  <tr>
<td>where:</td>
<td>&nbsp;</td>
<td>&nbsp;</td>  </tr>  <tr>
<td>&nbsp;</td>
<td>D<sub>r</sub> =</td>
<td>the dose rate at r metres</td>  </tr>  <tr>
<td>&nbsp;</td>
<td>D<sub>2m</sub> =</td>
<td>the dose rate at 2 metres</td>  </tr>  <tr>
<td>&nbsp;</td>
<td>t<sub>air</sub> =</td>
<td>the transmission factor for air</td>  </tr>  </table>  <br />
<p>Rearranging and using the values cited above gives:</p>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<mi>r</mi><mo>=</mo><mo stretchy=&#39;false&#39;>(</mo><mn>2</mn><mtext>&#x00A0;meters)</mtext><mo>&#x00D7;</mo><msqrt>
<mrow>
<mfrac>
<mrow>
<mo stretchy=&#39;false&#39;>(</mo><mn>0.180</mn><mtext>&#x00A0;Gy/min)(60&#x00A0;min/h)</mtext></mrow>
<mrow>
<mn>0.0005</mn><mtext>&#x00A0;Gy/h)</mtext><mo>&#x00D7;</mo><mtext>3</mtext></mrow>
</mfrac>
</mrow>
</msqrt>
<mo>=</mo><mn>170</mn><mtext>&#x00A0;metres</mtext></mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaamOCaiabg2
da9iaacIcacaaIYaGaaeiiaiaab2gacaqGLbGaaeiDaiaabwgacaqG
YbGaae4CaiaabMcacqGHxdaTdaGcaaqaamaalaaabaGaaiikaiaaic
dacaGGUaGaaGymaiaaiIdacaaIWaGaaeiiaiaabEeacaqG5bGaae4l
aiaab2gacaqGPbGaaeOBaiaabMcacaqGOaGaaeOnaiaabcdacaqGGa
GaaeyBaiaabMgacaqGUbGaae4laiaabIgacaqGPaaabaGaaGimaiaa
c6cacaaIWaGaaGimaiaaicdacaaI1aGaaeiiaiaabEeacaqG5bGaae
4laiaabIgacaqGPaGaey41aqRaae4maaaaaSqabaGccqGH9aqpcaaI
XaGaaG4naiaaicdacaqGGaGaaeyBaiaabwgacaqG0bGaaeOCaiaabw
gacaqGZbaaaa@6AA4@
</annotation>   </semantics>  </math>
<p>as the effective radius of coverage for a moderated system with a sustained reaction.</p>  <p><strong>Rapid transient calculations</strong></p>  <p>The indicated detector response as a function of distance from a rapid transient is given by:</p>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<msub>
<mi>D</mi>
<mi>r</mi>
</msub>
<mo stretchy=&#39;false&#39;>(</mo><mi>r</mi><mo stretchy=&#39;false&#39;>)</mo><mo>=</mo><msub>
<mi>D</mi>
<mrow>
<mn>2</mn><mi>m</mi></mrow>
</msub>
<mo>&#x00D7;</mo><msup>
<mrow>
<mrow><mo>(</mo>
<mrow>
<mfrac>
<mn>2</mn>
<mi>r</mi>
</mfrac>
</mrow>
<mo>)</mo></mrow></mrow>
<mn>2</mn>
</msup>
<mo>&#x00D7;</mo><msub>
<mi>t</mi>
<mrow>
<mi>a</mi><mi>i</mi><mi>r</mi></mrow>
</msub>
<mo>&#x00D7;</mo><mi>&#x03B5;</mi></mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaamiramaaBa
aaleaacaWGYbaabeaakiaacIcacaWGYbGaaiykaiabg2da9iaadsea
daWgaaWcbaGaaGOmaiaad2gaaeqaaOGaey41aq7aaeWaaeaadaWcaa
qaaiaaikdaaeaacaWGYbaaaaGaayjkaiaawMcaamaaCaaaleqabaGa
aGOmaaaakiabgEna0kaadshadaWgaaWcbaGaamyyaiaadMgacaWGYb
aabeaakiabgEna0kabew7aLbaa@4E14@
</annotation>   </semantics>  </math>
<table className="table">  <tr>
<td>where:</td>
<td>&nbsp;</td>
<td>&nbsp;</td>  </tr>  <tr>
<td>&nbsp;</td>
<td>D<sub>r</sub> =</td>
<td>the dose rate at r metres</td>  </tr>  <tr>
<td>&nbsp;</td>
<td>D<sub>2m</sub> =</td>
<td>the dose rate at 2 metres</td>  </tr>  <tr>
<td>&nbsp;</td>
<td>t<sub>air</sub> =</td>
<td>the transmission factor for air</td>  </tr>  <tr>
<td>&nbsp;</td>
<td>&epsilon; =</td>
<td>the assumed detector response to the fast transient</td>  </tr>  </table>  <br />
<p>Rearranging and using the values cited above gives:</p>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<mi>r</mi><mo>=</mo><mo stretchy=&#39;false&#39;>(</mo><mn>2</mn><mtext>&#x00A0;meters)</mtext><mo>&#x00D7;</mo><msqrt>
<mrow>
<mfrac>
<mrow>
<mo stretchy=&#39;false&#39;>(</mo><mn>0.180</mn><mtext>&#x00A0;Gy/min)(</mtext><mn>3.6</mn><mo>&#x00D7;</mo><msup>
<mrow>
<mn>10</mn></mrow>
<mn>6</mn>
</msup>
<mtext>&#x00A0;ms/h)</mtext></mrow>
<mrow>
<mo stretchy=&#39;false&#39;>(</mo><mn>0.0005</mn><mtext>&#x00A0;Gy/h)</mtext><mo>&#x00D7;</mo><mn>3</mn><mo>&#x00D7;</mo><mn>2500</mn></mrow>
</mfrac>
</mrow>
</msqrt>
<mo>=</mo><mn>831</mn><mtext>&#x00A0;meters</mtext></mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaamOCaiabg2
da9iaacIcacaaIYaGaaeiiaiaab2gacaqGLbGaaeiDaiaabwgacaqG
YbGaae4CaiaabMcacqGHxdaTdaGcaaqaamaalaaabaGaaiikaiaaic
dacaGGUaGaaGymaiaaiIdacaaIWaGaaeiiaiaabEeacaqG5bGaae4l
aiaab2gacaqGPbGaaeOBaiaabMcacaqGOaGaaG4maiaac6cacaaI2a
Gaey41aqRaaGymaiaaicdadaahaaWcbeqaaiaaiAdaaaGccaqGGaGa
aeyBaiaabohacaqGVaGaaeiAaiaabMcaaeaacaGGOaGaaGimaiaac6
cacaaIWaGaaGimaiaaicdacaaI1aGaaeiiaiaabEeacaqG5bGaae4l
aiaabIgacaqGPaGaey41aqRaaG4maiabgEna0kaaikdacaaI1aGaaG
imaiaaicdaaaaaleqaaOGaeyypa0JaaGioaiaaiodacaaIXaGaaeii
aiaab2gacaqGLbGaaeiDaiaabwgacaqGYbGaae4Caaaa@74C0@
</annotation>   </semantics>  </math>
<p>as the effective radius of coverage for a moderated system, and:</p>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<mi>r</mi><mo>=</mo><mo stretchy=&#39;false&#39;>(</mo><mn>2</mn><mtext>&#x00A0;meters)</mtext><mo>&#x00D7;</mo><msqrt>
<mrow>
<mfrac>
<mrow>
<mo stretchy=&#39;false&#39;>(</mo><mn>0.054</mn><mtext>&#x00A0;Gy/min)(</mtext><mn>3.6</mn><mo>&#x00D7;</mo><msup>
<mrow>
<mn>10</mn></mrow>
<mn>6</mn>
</msup>
<mtext>&#x00A0;ms/h)</mtext></mrow>
<mrow>
<mo stretchy=&#39;false&#39;>(</mo><mn>0.0005</mn><mtext>&#x00A0;Gy/h)</mtext><mo>&#x00D7;</mo><mn>3</mn><mo>&#x00D7;</mo><mn>2500</mn></mrow>
</mfrac>
</mrow>
</msqrt>
<mo>=</mo><mn>455</mn><mtext>&#x00A0;meters</mtext></mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaamOCaiabg2
da9iaacIcacaaIYaGaaeiiaiaab2gacaqGLbGaaeiDaiaabwgacaqG
YbGaae4CaiaabMcacqGHxdaTdaGcaaqaamaalaaabaGaaiikaiaaic
dacaGGUaGaaGimaiaaiwdacaaI0aGaaeiiaiaabEeacaqG5bGaae4l
aiaab2gacaqGPbGaaeOBaiaabMcacaqGOaGaaG4maiaac6cacaaI2a
Gaey41aqRaaGymaiaaicdadaahaaWcbeqaaiaaiAdaaaGccaqGGaGa
aeyBaiaabohacaqGVaGaaeiAaiaabMcaaeaacaGGOaGaaGimaiaac6
cacaaIWaGaaGimaiaaicdacaaI1aGaaeiiaiaabEeacaqG5bGaae4l
aiaabIgacaqGPaGaey41aqRaaG4maiabgEna0kaaikdacaaI1aGaaG
imaiaaicdaaaaaleqaaOGaeyypa0JaaGinaiaaiwdacaaI1aGaaeii
aiaab2gacaqGLbGaaeiDaiaabwgacaqGYbGaae4Caaaa@74C2@
</annotation>   </semantics>  </math>
<p>as the effective radius of coverage for an unmoderated system.</p>  <p>Clearly, the limiting case in the example above is the sustained reaction. Figure D-1 shows a plot of the gamma ray dose rate versus distance for this case as well as the unmoderated rapid transient, as determined by this method.</p>
<p><strong>Figure D-1: Gamma Ray Dose Rate versus Distance, Based on a Total Dose of 0.20 Gy at 2 Metres</strong></p>  <p>&#8212;&#8212;&#8212;&#8212;&#8212;&nbsp;Total dose delivered in 1 millisecond, unmoderated rapid transient criticality</p>  <p>-----------&nbsp;Total dose delivered in 1 minute, moderated sustained criticality</p>
<div className="col-md-2"></div>  <div className="col-md-6 module-poster">  <img src="/images/regulatory-documents/regdoc-2-4-3/D-1.png" alt="Gamma Ray Dose Rate versus Distance, Based on a Total Dose of 0.20 Gy at 2 Metres" />  </div>  <div className="clear"></div>
<p>The appeal of this method is its simplicity. However, it is noted that there are items that should be considered by an evaluator using this technique. First of all, the validity of the transmission factor of 1/3 for air should be defended, perhaps with the aid of experimental results or attenuation arguments. Secondly, technical justification for ignoring other intervening materials should be provided.</p>  <p>Note that the preceding example should not serve as the sole technical basis for the adequacy of detector placement for any facility. Additional technical justification of the technique and consideration of facility-specific conditions are warranted.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appD.3.3"></div>
<h4 id="appD-3-3">D.3.3	One-dimensional deterministic or Monte Carlo transport computations</h4>  <p>In cases where simple hand calculations are insufficient, more detailed one-dimensional models can be constructed through the use of either deterministic or Monte Carlo computer codes.</p>  <p>The advantage of using a computer code is that spectral effects, absorption, scattering, and distance attenuation are all taken into account simultaneously. In addition, the method is not limited by the number of intervening materials, although it does require estimates of the amount and composition of those materials. Results can be generated that are either generic or detector-specific.</p>  <p>Generic results are a set of guidelines of allowed distances and shielding (types and amounts) between a hypothetical accident location and a detector&rsquo;s position. These criteria could then be applied to a facility floor plan to demonstrate coverage. For detector-specific results, a separate computation can be performed for each detector and each hypothetical accident location, with estimates of distance and amounts of intervening shielding being scenario-specific.</p>  <p><strong>A one-dimensional example</strong></p>  <p>In this example, a computer code with an appropriate neutron/gamma ray coupled cross section library containing air dose flux conversion factors was used to demonstrate how generic criteria might be generated. Figure D-2 shows a geometric representation of the computational model.</p>  <p><strong>Figure D-2:</strong> Example of a One-Dimensional Computational Model</p>  <p>Where:
<ul className="list-bullet-none">
<li>*&nbsp;is the source location;</li>  	<li>R<sub>1</sub> is the distance from the source to the beginning of any intervening material other than air in the model (R<sub>1</sub> &gt; 2 metres);</li>  	<li>R<sub>d</sub> is the distance from the source to the detector;</li>  	<li>R<sub>b</sub> is the distance from the source to the boundary of the problem (R<sub>b</sub> &gt; R<sub>d</sub>); and</li>  	<li>T<sub>m</sub> is the sum of the thicknesses of all the intervening material other than air</li>
</ul></p>
<div className="col-md-2"></div>  <div className="col-md-6 module-poster">  <img src="/images/regulatory-documents/regdoc-2-4-3/D-2.png" alt="Example of a One-Dimensional Computational Model" />  </div>  <div className="clear"></div>
<p>In this example:</p>
<ol>
<li>The source term is equivalent in strength and spectrum to the neutron and gamma ray leakage from a 25 g/L Pu (95/5) solution criticality accident scaled to produce 0.20 Gy total at 2 metres with no other materials present.</li>
<li>The detector distance, R<sub>d</sub>, is set at 50 metres.</li>
<li>The initial boundary for intervening materials, R<sub>1</sub>, is set at 25 metres.</li>
<li><p>The problem boundary, R<sub>b</sub>, is placed at 150 metres.</p>
<p>(In this type of calculations, it is important to set Rb at a large distance beyond any location at which results are desired. Failure to do so may result in underprediction of the dose at the detector due to underestimation of "sky shine" effects).</p></li>
<li>The only type of intervening material considered was concrete.</li>
</ol>  <p>Table D-3 shows a summary of the integrated computational results for this example.</p>
<table className="table table-striped">  <caption className="text-left">Table D-3: Integrated quantities for a 25 g/l Pu (95/5) solution criticality</caption>   <tr>
<td rowspan="3" className="text-center">&#160; </td>
<th colSpan="5" className="text-center">Integrated quantities at 2 metres</th>   </tr>   <tr>
<th className="text-center">air &gamma;-dose (Gy)</th>
<th className="text-center">air n-dose (Gy)</th>
<th className="text-center">&#934;<sub>n</sub> (n-cm/cm<sup>3</sup>)</th>
<th className="text-center">&#934;<sub>T</sub> (n-cm/cm<sup>3</sup>)*</th>
<th className="text-center">&#934;<sub>&gamma;</sub> (n-cm/cm<sup>3</sup>)</th>   </tr>   <tr>
<td className="text-center">0.180</td>
<td className="text-center">0.02</td>
<td className="text-center">5.5 &times; 10<sup>9</sup></td>
<td className="text-center">6.4 &times; 10<sup>8</sup></td>
<td className="text-center">3.9 &times; 10<sup>10</sup></td>   </tr>   <tr>
<th rowspan="2" className="text-center text-center">Thickness of concrete (cm)</th>
<th colSpan="5" className="text-center">Integrated quantities at 50 metres</th>   </tr>   <tr>
<th>air &gamma;-dose (Gy)</th>
<th>air n-dose (Gy)</th>
<th>&#934;<sub>n</sub> (n-cm/cm<sup>3</sup>)</th>
<th>&#934;<sub>T</sub> (n-cm/cm<sup>3</sup>)*</th>
<th>&#934;<sub>&gamma;</sub> (n-cm/cm<sup>3</sup>)</th>   </tr>   <tr>
<td className="text-center">0.0</td>
<td className="text-center">2.7 &times; 10<sup>-4</sup></td>
<td className="text-center">4.3 &times; 10<sup>-5</sup></td>
<td className="text-center">1.8 &times; 10<sup>7</sup></td>
<td className="text-center">2.6 &times; 10<sup>6</sup></td>
<td className="text-center">9.3 &times; 10<sup>7</sup></td>   </tr>   <tr>
<td className="text-center">10.0</td>
<td className="text-center">1.5 &times; 10<sup>-4</sup></td>
<td className="text-center">3.3 &times; 10<sup>-5</sup></td>
<td className="text-center">1.5 &times; 10<sup>7</sup></td>
<td className="text-center">3.1 &times; 10<sup>6</sup></td>
<td className="text-center">5.2 &times; 10<sup>7</sup></td>   </tr>   <tr>
<td className="text-center">20.0</td>
<td className="text-center">8.0 &times; 10<sup>-5</sup></td>
<td className="text-center">2.0 &times; 10<sup>-5</sup></td>
<td className="text-center">8.2 &times; 10<sup>6</sup></td>
<td className="text-center">2.4 &times; 10<sup>6</sup></td>
<td className="text-center">2.5 &times; 10<sup>7</sup></td>   </tr>   <tr>
<td className="text-center">30.0</td>
<td className="text-center">4.3 &times; 10<sup>-5</sup></td>
<td className="text-center">1.0 &times; 10<sup>-5</sup></td>
<td className="text-center">4.0 &times; 10<sup>6</sup></td>
<td className="text-center">1.4 &times; 10<sup>6</sup></td>
<td className="text-center">1.2 &times; 10<sup>7</sup></td>   </tr>   <tr>
<td className="text-center">60.0</td>
<td className="text-center">6.8 &times; 10<sup>-6</sup></td>
<td className="text-center">1.0 &times; 10<sup>-6</sup></td>
<td className="text-center">3.9 &times; 10<sup>5</sup></td>
<td className="text-center">1.6 &times; 10<sup>5</sup></td>
<td className="text-center">1.7 &times; 10<sup>6</sup></td>   </tr>   </table>  <p><sup>*</sup>&nbsp;&#934;<sub>T</sub> is the thermal neutron fluence, E &lt; 0.4 eV.</p>  <p>Usage of these results is specific to the detector type and dynamics of the accident. Two examples of application of the results follow.</p>  <p><strong>Application 1: A thermal neutron fluence detector</strong>  <p>Given:</p>
<ol>
<li>The system must respond to the minimum accident of concern due to a sustained fission reaction in moderated, unreflected fissile material delivering 0.0033 Gy/s.</li>
<li>The system must respond to the minimum accident of concern due to a rapid transient in an unreflected fissile system, moderated or unmoderated. A 1 ms minimum duration of the rapid transient may be assumed.</li>
<li>The detector is set to trip if 16 counts are received within the cycle time of 1 s. For this detector, 16 counts correspond to a thermal neutron fluence of 500 n-cm/cm<sup>3</sup>.</li>
</ol>  <p>The number of counts received by the detector during its cycle time is given by:</p>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<msub>
<mi>C</mi>
<mi>D</mi>
</msub>
<mo>=</mo><mfrac>
<mrow>
<msub>
<mi>&#x03D5;</mi>
<mi>T</mi>
</msub>
</mrow>
<mrow>
<msub>
<mi>&#x03C4;</mi>
<mi>T</mi>
</msub>
</mrow>
</mfrac>
<mo>&#x00D7;</mo><mtext>&#x00A0;MIN</mtext><mrow><mo>[</mo> <mrow>
<msub>
<mi>&#x03C4;</mi>
<mi>C</mi>
</msub>
<mo>,</mo><msub>
<mi>&#x03C4;</mi>
<mi>p</mi>
</msub>
</mrow> <mo>]</mo></mrow><mo>&#x00D7;</mo><mtext>&#x00A0;FTCC</mtext></mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaam4qamaaBa
aaleaacaWGebaabeaakiabg2da9maalaaabaGaeqy1dy2aaSbaaSqa
aiaadsfaaeqaaaGcbaGaeqiXdq3aaSbaaSqaaiaadsfaaeqaaaaaki
abgEna0kaabccacaqGnbGaaeysaiaab6eadaWadaqaaiabes8a0naa
BaaaleaacaWGdbaabeaakiaacYcacqaHepaDdaWgaaWcbaGaamiCaa
qabaaakiaawUfacaGLDbaacqGHxdaTcaqGGaGaaeOraiaabsfacaqG
dbGaae4qaaaa@51E0@
</annotation>   </semantics>  </math>
<table className="table">  <tr>
<td>where:</td>
<td>&nbsp;</td>
<td>&nbsp;</td>  </tr>  <tr>
<td>&nbsp;</td>
<td>C<sub>D</sub> =</td>
<td>the number of counts</td>  </tr>  <tr>
<td>&nbsp;</td>
<td>&#934;<sub>T</sub> =</td>
<td>the thermal neutron fluence</td>  </tr>  <tr>
<td>&nbsp;</td>
<td>&tau;<sub>p</sub> =</td>
<td>the pulse width duration</td>  </tr>  <tr>
<td>&nbsp;</td>
<td>&tau;<sub>C</sub> =</td>
<td>the cycle time of the integrating detector</td>  </tr>  <tr>
<td>&nbsp;</td>
<td>MIN[&tau;<sub>C</sub>,&tau;<sub>p</sub>]</td>
<td>use the smaller of these two time frames in determining the total counts</td>  </tr>  <tr>
<td>&nbsp;</td>
<td>FTCC =</td>
<td>the fluence-to-counts conversion factor</td>  </tr>  </table>  <br />  <p>For 30 cm of concrete, the number of counts received at the detector from a sustained reaction would be:</p>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<mfrac>
<mrow>
<mn>1.4</mn><mo>&#x00D7;</mo><msup>
<mrow>
<mn>10</mn></mrow>
<mn>6</mn>
</msup>
<msup>
<mrow>
<mtext>&#x00A0;n-cm/cm</mtext></mrow>
<mn>3</mn>
</msup>
</mrow>
<mrow>
<mn>60</mn><mtext>&#x00A0;s</mtext></mrow>
</mfrac>
<mo>&#x00D7;</mo><mn>1</mn><mtext>&#x00A0;sec</mtext><mo>&#x00D7;</mo><mfrac>
<mrow>
<mn>16</mn><mtext>&#x00A0;counts</mtext></mrow>
<mrow>
<mn>500</mn><msup>
<mrow>
<mtext>&#x00A0;n-cm/cm</mtext></mrow>
<mn>3</mn>
</msup>
</mrow>
</mfrac>
<mo>=</mo><mn>747</mn><mtext>&#x00A0;counts</mtext></mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaWaaSaaaeaaca
aIXaGaaiOlaiaaisdacqGHxdaTcaaIXaGaaGimamaaCaaaleqabaGa
aGOnaaaakiaabccacaqGUbGaaeylaiaabogacaqGTbGaae4laiaabo
gacaqGTbWaaWbaaSqabeaacaaIZaaaaaGcbaGaaGOnaiaaicdacaqG
GaGaae4CaaaacqGHxdaTcaaIXaGaaeiiaiaabohacaqGLbGaae4yai
abgEna0oaalaaabaGaaGymaiaaiAdacaqGGaGaae4yaiaab+gacaqG
1bGaaeOBaiaabshacaqGZbaabaGaaGynaiaaicdacaaIWaGaaeiiai
aab6gacaqGTaGaae4yaiaab2gacaqGVaGaae4yaiaab2gadaahaaWc
beqaaiaaiodaaaaaaOGaeyypa0JaaG4naiaaisdacaaI3aGaaeiiai
aabogacaqGVbGaaeyDaiaab6gacaqG0bGaae4Caaaa@6AE9@
</annotation>   </semantics>  </math>
<p>and from a rapid transient of duration 1 millisecond:</p>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<mfrac>
<mrow>
<mn>1.4</mn><mo>&#x00D7;</mo><msup>
<mrow>
<mn>10</mn></mrow>
<mn>6</mn>
</msup>
<msup>
<mrow>
<mtext>&#x00A0;n-cm/cm</mtext></mrow>
<mn>3</mn>
</msup>
</mrow>
<mrow>
<mn>1</mn><mtext>&#x00A0;ms</mtext></mrow>
</mfrac>
<mo>&#x00D7;</mo><mn>1</mn><mtext>&#x00A0;msec</mtext><mo>&#x00D7;</mo><mfrac>
<mrow>
<mn>16</mn><mtext>&#x00A0;counts</mtext></mrow>
<mrow>
<mn>500</mn><msup>
<mrow>
<mtext>&#x00A0;n-cm/cm</mtext></mrow>
<mn>3</mn>
</msup>
</mrow>
</mfrac>
<mo>=</mo><mn>44</mn><mo>,</mo><mn>800</mn><mtext>&#x00A0;counts</mtext></mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaWaaSaaaeaaca
aIXaGaaiOlaiaaisdacqGHxdaTcaaIXaGaaGimamaaCaaaleqabaGa
aGOnaaaakiaabccacaqGUbGaaeylaiaabogacaqGTbGaae4laiaabo
gacaqGTbWaaWbaaSqabeaacaaIZaaaaaGcbaGaaGymaiaabccacaqG
TbGaae4CaaaacqGHxdaTcaaIXaGaaeiiaiaab2gacaqGZbGaaeyzai
aabogacqGHxdaTdaWcaaqaaiaaigdacaaI2aGaaeiiaiaabogacaqG
VbGaaeyDaiaab6gacaqG0bGaae4CaaqaaiaaiwdacaaIWaGaaGimai
aabccacaqGUbGaaeylaiaabogacaqGTbGaae4laiaabogacaqGTbWa
aWbaaSqabeaacaaIZaaaaaaakiabg2da9iaaisdacaaI0aGaaiilai
aaiIdacaaIWaGaaGimaiaabccacaqGJbGaae4BaiaabwhacaqGUbGa
aeiDaiaabohaaaa@6E2C@
</annotation>   </semantics>  </math>
<p>Table D-4 shows the results for all thicknesses of concrete included in Table D-3 for this type of detector.</p>
<table className="table table-striped">  <caption className="text-left">Table D-4: Thermal neutron fluence detector response</caption>   <tr>
<th rowspan="2" className="text-center text-center">Thickness of concrete (cm)</th>
<th colSpan="2" className="text-center">Counts received during the cycle time at 50 metres</th>   </tr>   <tr>
<th className="text-center">Sustained reaction</th>
<th className="text-center">1 ms transient</th>   </tr>   <tr>
<td className="text-center">0.0</td>
<td className="text-center">1,387</td>
<td className="text-center">83,200</td>   </tr>   <tr>
<td className="text-center">10.0</td>
<td className="text-center">1,653</td>
<td className="text-center">99,200</td>   </tr>   <tr>
<td className="text-center">20.0</td>
<td className="text-center">1,280</td>
<td className="text-center">76,800</td>   </tr>   <tr>
<td className="text-center">30.0</td>
<td className="text-center">747</td>
<td className="text-center">44,800</td>   </tr>   <tr>
<td className="text-center">60.0</td>
<td className="text-center">85</td>
<td className="text-center">5,120</td>   </tr>  </table>  <br />
<p>Given the conditions of this example, it is now possible to generate position criteria to be applied to a facility floor plan; for example, "A detector must be within 50 metres of a credible location for the minimum accident of concern, with no more than 60 cm of intervening concrete, for the detector to respond to the accident by setting off the alarm."</p>  <p><strong>Note:</strong> This example is for illustrative purposes only. The data of Table D-3 and the sample application for a thermal neutron detector system should not be used as a technical basis for the adequacy of detector placement at any specific facility.</p>  <p><strong>Application 2: A gamma ray dose rate meter</strong></p>  <p>Given:</p>
<ol>
<li>The system must respond to the minimum accident of concern due to a sustained fission reaction in moderated, unreflected fissile material delivering 0.0033 Gy/s.</li>
<li>The system must respond to the minimum accident of concern due to a rapid transient in an unreflected fissile system, moderated or unmoderated. A 1 ms minimum duration of the rapid transient may be assumed.</li>
<li>The detector is set to trip at a gamma ray dose rate of 0.0005 Gy/h.</li>
<li>The indicated detector response (needle movement) to a rapid transient is assumed to be at least 1/2500 of the actual peak dose rate.</li>
</ol>  <p>The dose rate (D<sub>r</sub>) at the detector is given by:</p>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<msub>
<mi>D</mi>
<mi>r</mi>
</msub>
<mo>=</mo><mfrac>
<mrow>
<msub>
<mi>d</mi>
<mrow>
<mn>50</mn><mi>m</mi></mrow>
</msub>
<mo stretchy=&#39;false&#39;>(</mo><mi>&#x03B3;</mi><mo stretchy=&#39;false&#39;>)</mo></mrow>
<mrow>
<msub>
<mi>&#x03C4;</mi>
<mi>p</mi>
</msub>
</mrow>
</mfrac>
<mo>&#x00D7;</mo><mi>&#x03B5;</mi></mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaamiramaaBa
aaleaacaWGYbaabeaakiabg2da9maalaaabaGaamizamaaBaaaleaa
caaI1aGaaGimaiaad2gaaeqaaOGaaiikaiabeo7aNjaacMcaaeaacq
aHepaDdaWgaaWcbaGaamiCaaqabaaaaOGaey41aqRaeqyTdugaaa@463A@
</annotation>   </semantics>  </math>
<table className="table">  <tr>
<td>where:</td>
<td>&nbsp;</td>
<td>&nbsp;</td>  </tr>  <tr>
<td>&nbsp;</td>
<td>d<sub>50m</sub>(&gamma;) =</td>
<td>the total gamma ray dose at 50 metres</td>  </tr>  <tr>
<td>&nbsp;</td>
<td>&tau;<sub>p</sub> =</td>
<td>the pulse width duration</td>  </tr>  <tr>
<td>&nbsp;</td>
<td>&epsilon; =</td>
<td>the assumed detector response to a fast transient (note: for sustained fission reactions, &epsilon; = 1.0)</td>  </tr>  </table>  <br />
<p>For the unshielded condition (concrete thickness of zero), the gamma ray dose rate at the detector from a sustained reaction would be:</p>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<msub>
<mi>D</mi>
<mi>r</mi>
</msub>
<mo>=</mo><mfrac>
<mrow>
<mn>2.7</mn><mo>&#x00D7;</mo><msup>
<mrow>
<mn>10</mn></mrow>
<mrow>
<mo>&#x2212;</mo><mn>4</mn></mrow>
</msup>
<mtext>&#x00A0;Gy</mtext></mrow>
<mrow>
<mn>60</mn><mtext>&#x00A0;s</mtext></mrow>
</mfrac>
<mo>=</mo><mn>4.5</mn><mo>&#x00D7;</mo><msup>
<mrow>
<mn>10</mn></mrow>
<mrow>
<mo>&#x2212;</mo><mn>6</mn></mrow>
</msup>
<mtext>&#x00A0;Gy/s</mtext><mo>=</mo><mn>16.2</mn><mtext>&#x00A0;mGy/h</mtext></mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaamiramaaBa
aaleaacaWGYbaabeaakiabg2da9maalaaabaGaaGOmaiaac6cacaaI
3aGaey41aqRaaGymaiaaicdadaahaaWcbeqaaiabgkHiTiaaisdaaa
GccaqGGaGaae4raiaabMhaaeaacaaI2aGaaGimaiaabccacaqGZbaa
aiabg2da9iaaisdacaGGUaGaaGynaiabgEna0kaaigdacaaIWaWaaW
baaSqabeaacqGHsislcaaI2aaaaOGaaeiiaiaabEeacaqG5bGaae4l
aiaabohacqGH9aqpcaaIXaGaaGOnaiaac6cacaaIYaGaaeiiaiaab2
gacaqGhbGaaeyEaiaab+cacaqGObaaaa@5BB6@
</annotation>   </semantics>  </math>
<p>For a rapid transient of duration 1 millisecond:
<math display=&#39;block&#39;>   <semantics>
<mrow>
<msub>
<mi>D</mi>
<mi>r</mi>
</msub>
<mo>=</mo><mfrac>
<mrow>
<mn>2.7</mn><mo>&#x00D7;</mo><msup>
<mrow>
<mn>10</mn></mrow>
<mrow>
<mo>&#x2212;</mo><mn>4</mn></mrow>
</msup>
<mtext>&#x00A0;Gy</mtext></mrow>
<mrow>
<mn>1</mn><mtext>&#x00A0;ms</mtext></mrow>
</mfrac>
<mo>&#x00D7;</mo><mfrac>
<mn>1</mn>
<mrow>
<mn>2500</mn></mrow>
</mfrac>
<mo>=</mo><mn>1.1</mn><mo>&#x00D7;</mo><msup>
<mrow>
<mn>10</mn></mrow>
<mrow>
<mo>&#x2212;</mo><mn>4</mn></mrow>
</msup>
<mtext>&#x00A0;Gy/s</mtext><mo>=</mo><mn>388.8</mn><mtext>&#x00A0;mGy/h</mtext></mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaamiramaaBa
aaleaacaWGYbaabeaakiabg2da9maalaaabaGaaGOmaiaac6cacaaI
3aGaey41aqRaaGymaiaaicdadaahaaWcbeqaaiabgkHiTiaaisdaaa
GccaqGGaGaae4raiaabMhaaeaacaaIXaGaaeiiaiaab2gacaqGZbaa
aiabgEna0oaalaaabaGaaGymaaqaaiaaikdacaaI1aGaaGimaiaaic
daaaGaeyypa0JaaGymaiaac6cacaaIXaGaey41aqRaaGymaiaaicda
daahaaWcbeqaaiabgkHiTiaaisdaaaGccaqGGaGaae4raiaabMhaca
qGVaGaae4Caiabg2da9iaaiodacaaI4aGaaGioaiaac6cacaaI4aGa
aeiiaiaab2gacaqGhbGaaeyEaiaab+cacaqGObaaaa@627B@
</annotation>   </semantics>  </math>
<p>Table D-5 shows the results for all thicknesses of concrete of Table D-3 for this type of detector.</p>
<table className="table table-striped">  <caption className="text-left">Table D-5: Gamma ray dose rate detector response</caption>   <tr>
<th rowspan="2" className="text-center text-center">Thickness of concrete (cm)</th>
<th colSpan="2" className="text-center">Gamma ray dose rate at 50 metres (mGy/h)</th>   </tr>   <tr>
<th className="text-center">Sustained reaction</th>
<th className="text-center">1 ms transient</th>   </tr>   <tr>
<td className="text-center">0.0</td>
<td className="text-center">16.20</td>
<td className="text-center">388.80</td>   </tr>   <tr>
<td className="text-center">10.0</td>
<td className="text-center">9.0</td>
<td className="text-center">216.00</td>   </tr>   <tr>
<td className="text-center">20.0</td>
<td className="text-center">4.80</td>
<td className="text-center">115.20</td>   </tr>   <tr>
<td className="text-center">30.0</td>
<td className="text-center">2.58</td>
<td className="text-center">61.92</td>   </tr>   <tr>
<td className="text-center">60.0</td>
<td className="text-center">0.41</td>
<td className="text-center">9.80</td>   </tr>  </table>  <br />
<p>Given the conditions of this example, it is clear that a detector 50 metres from the location of the minimum accident of concern with 30 cm of intervening concrete would respond to the accident by setting off the alarm. With more than 30 cm of concrete, an alarm would not be guaranteed by the results shown, and more detailed computations would be required for thicknesses between 30 and 60 cm.</p>  <p><strong>Note:</strong> This example is for illustrative purposes only. The data of Table D-3 and the sample application for a gamma ray detector should not be used as a technical basis for the adequacy of detector placement at any specific facility.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appD.3.4"></div>
<h4 id="appD-3-4">D.3.4	Two- and three-dimensional deterministic or Monte Carlo transport computations</h4>  <p>More detailed facility- and accident-scenario-specific models can be constructed through the use of two- or three- dimensional computer codes, if judged to be necessary and cost-effective with respect to other options, e.g., adding more detectors. In addition to all of the advantages associated with the one-dimensional modeling, a three-dimensional model includes contributions from floor, ceiling, and possibly sky scatter, as well as a more detailed representation of streaming and scatter from room and corridor walls. Two-dimensional models are often adequate for situations where radial symmetry may be assumed.</p>  <p>In contrast to one-dimensional modeling, however, there are several aspects of two- or three-dimensional modeling that should be acknowledged by an evaluator prior to the use of this option. These include, but are not necessarily limited to, the following:</p>
<ol>
<li>The modeling effort is more difficult and therefore more time consuming and error prone.</li>
<li>In the case of Monte Carlo calculations, it may be necessary to make heavy use of variance reduction techniques, such as source biasing and regional probability weighting, to obtain a sufficiently accurate and timely answer. Such biasing is problem-specific, and therefore, separate cases would have to be executed for each detector and accident scenario of concern. Furthermore, for results of this type (i.e., location-specific and energy-dependent, in which very few of the total sampled population may contribute), it is quite possible to obtain completely erroneous results despite low estimated standard deviations. Additional measures, such as multiple runs with different random number sequences, or more in-depth statistical analysis of the results (e.g., variance of the variance), should be performed to reduce this possibility.</li>
<li>In the case of deterministic calculations, the amount and detail of meshing required could be computationally prohibitive. Furthermore, any deterministic method relying on a discretized angular mesh (without some type of mitigation such as a first-collision source) is subject to ray effects that can lead to questionable or incorrect results.</li>
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
<div id="appE"></div>
<h2 id="appE">Appendix E: Fuel Unit Handling, Storage, and Transportation &ndash; Criticality Safety Considerations</h2>  <p>Fuel design parameters, storage array dimensions, fuel handling procedures, and moderation and reflection conditions are selected in performing nuclear criticality safety evaluations (NCSEs) to assure consideration of the most reactive credible conditions. Section 11, <em>Criticality Safety Criteria for the Handling, Transportation, Storage, and Long-term Waste Management of Reactor Fuel Outside Reactors</em>, section 11.3, <em>General Safety Criteria</em>, requires that consideration be given to normal and credible abnormal conditions and to related uncertainties, including design tolerances, associated with controlled parameters. Representative parameters and conditions are listed below.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appE.1"></div>
<h3 id="appE-1">E.1: Fuel rod parameters</h3>  <p>Fuel rod parameters include:</p>
<ol>
<li>fissile material content, form, density, nuclear properties, and distribution</li>
<li>burnable poison content, density, and distribution<br />
<strong>Caution:</strong> The reactivity of irradiated fuel containing burnable poisons may exceed that of unirradiated fuel.</li>
<li>fuel rod geometry including cladding material and thickness</li>
<li>other materials within the fuel rod that may affect reactivity</li>
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
<div id="appE.2"></div>
<h3 id="appE-2">E.2: Fuel unit configuration</h3>  <p>Fuel unit configuration considerations include:</p>
<ol>
<li>number of fuel rods and their location within a fuel unit</li>
<li>dimensions of each fuel unit</li>
<li>other materials or rods that may be present</li>
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
<div id="appE.3"></div>
<h3 id="appE-3">E.3: Array parameters</h3>  <p>Array parameters include:</p>
<ol>
<li>spacing of fuel units</li>
<li>fixed neutron absorbers between fuel units</li>
<li>materials of construction within the array (nuclear properties, quantities, location, and dimensions)</li>
<li>fuel handling during loading and unloading operations</li>
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
<div id="appE.4"></div>
<h3 id="appE-4">E.4: Moderator conditions</h3>  <p>Moderator conditions include:</p>
<ol>
<li>credible conditions of moderation within and between fuel units; for example:
<ul>
<li>inclusion of plastic shims or other moderating material (fog, snow, mist, or personnel) for dry storage of fuel units</li>
<li>water density and temperature including consideration of void formation by boiling for storage of fuel units under water</li>
</ul></li>
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
<div id="appE.5"></div>
<h3 id="appE-5">E.5: Reflector and interaction conditions</h3>  <p>Reflector and interaction conditions include:</p>
<ol>
<li>reflector composition, configuration and location</li>
<li>interaction with other fissile material</li>
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
<div id="appF"></div>
<h2 id="appF">Appendix F: Moderators and Moderating Materials</h2>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appF.1"></div>
<h3 id="appF-1">F.1: Typical moderating materials</h3>  <p>Many materials routinely encountered in nuclear facilities can be neutron moderators. Some of these materials may be more effective moderators than water. The following list, while not complete, is intended to promote the consideration of the possible moderating properties of materials that could be encountered.</p>
<div className="span-3">
<ul className="list-bullet-none">
<li>Alcohol</li>
<li>Ammonium or other hydrated radicals</li>
<li>Antifreeze</li>
<li>Benelex</li>
<li>Beryllium</li>
<li>Biological materials</li>
<li>Butvar &reg;</li>
<li>Carbon (e.g., graphite, charcoal)</li>
<li>Cane fiber board (Cellotex &reg;)</li>
<li>Cleaning agents</li>
<li>Concrete</li>
<li>Construction materials</li>
<li>Deuterium compounds</li>
<li>Environmental or atmospheric moisture</li>
<li>Fire suppressants</li>
<li>Fuel pellet binders and pore-formers</li>
<li>Gasoline, kerosene</li>
<li>Gloves</li>
<li>Hands *</li>
<li>Heavy water</li>
<li>Hydraulic fluid</li>
</ul>  </div>
<div className="pull-right mrgn-bttm-xl">
<ul className="list-bullet-none">
<li>Hydrides</li>
<li>Hydrocarbons and other organic materials</li>
<li>Lubricants</li>
<li>Oils</li>
<li>Paint</li>
<li>Paper and paper products</li>
<li>Paraffin</li>
<li>Partially halogenated organics</li>
<li>People *</li>
<li>Plastic (containers, bags, sheets, etc.)</li>
<li>Plexiglas, Lucite &reg;, etc.</li>
<li>Polyethylene</li>
<li>Rags</li>
<li>Resins</li>
<li>Shielding materials</li>
<li>Solvents</li>
<li>Sponges</li>
<li>Stabilizers</li>
<li>Water</li>
<li>Moist sand or soils</li>
<li>Wood and wood products</li>
</ul>  </div>  <div className="clear"></div>
<p>*&nbsp;The material content of the human body can provide significant moderating capability.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appF.2"></div>
<h3 id="appF-2">F.2: Potential sources of moderators</h3>  <p>This appendix lists types of moderating materials commonly found in nuclear facilities. These materials could be introduced either by design or inadvertently from sources such as those examples listed below.</p>
<ol>
<li>Service lines:
<ul>
<li>steam water</li>
<li>fire sprinkler lines</li>
<li>roof drains</li>
<li>floor drains</li>
<li>process/instrument air lines</li>
</ul></li>
<li>Connections to fissile material operations:
<ul>
<li>instrument lines</li>
<li>processing lines</li>
<li>ventilation ducts</li>
<li>electrical conduit</li>
<li>vent lines</li>
<li>heating and cooling systems</li>
</ul></li>
<li>Equipment:
<ul>
<li>gloveboxes and fume hoods</li>
<li>hydraulic systems</li>
<li>heating and cooling lines</li>
<li>HEPA filters</li>
<li>buckets and containers</li>
<li>lubrication systems</li>
<li>criticality safety drains and overflows</li>
</ul></li>
<li>Construction materials:
<ul>
<li>Room-Temperature Vulcanizing (RTV) silicone sealant</li>
<li>epoxy</li>
</ul></li>
<li>Maintenance and modification activities</li>
<li>Decontamination materials:
<ul>
<li>cleaning agents</li>
<li>rags and paper towels</li>
<li>sponges</li>
</ul></li>
<li>Environment:
<ul>
<li>atmospheric moisture</li>
<li>precipitation (such as rain and snow)</li>
<li>water films</li>
</ul></li>
<li>Process chemicals or additives:
<ul>
<li>binders and pore-formers</li>
<li>feed streams</li>
<li>solvents</li>
<li>holdup of moderators from process operations</li>
</ul></li>
<li>Accident and emergency response sources:
<ul>
<li>fire sprinkler lines</li>
<li>fire hoses</li>
<li>flooding</li>
<li>type A fire extinguisher</li>
</ul></li>
<li>Human intervention:
<ul>
<li>fire fighting introduction of moderator</li>
<li>introduction of unapproved moderators</li>
<li>mop water</li>
<li>personnel presence</li>
</ul></li>
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
<div id="appF.3"></div>
<h3 id="appF-3">F.3: Moderator content measurements</h3>  <p>The considerations in this appendix are intended to provide assurance of the integrity of the measurement and process controls.</p>
<ol>
<li>Appropriate procedures include:
<ul>
<li>precautions needed during preparation and analysis of samples</li>
<li>operational maintenance requirements for the measurement equipment</li>
<li>configuration requirements for instrumentation</li>
<li>verification requirements</li>
</ul></li>
<li>Sampling methodology provides representative samples for analysis. The integrity of each sample is maintained throughout the sampling and analysis process.</li>
<li>Consideration is given to analysis of at least two samples by independent analytical techniques. However, where reliance is based on a single analytical technique, the samples are analyzed by independent instrumentation.</li>
<li>Independent moderator measurements agree within a specified confidence level.</li>
<li>Appropriate control standards are used to verify that the attributes of each analytical technique are in conformance with applicable qualification plans.</li>
<li>Control standards are used to demonstrate acceptable results after system maintenance and are measured periodically prior to, and after, measurement of individual or groups of samples. Requirements are established for control of standards.</li>
<li>Analytical techniques are qualified by identifying the bias, uncertainty, and minimum and maximum moderator detection limits at a specified confidence level.</li>
<li>Continuous process monitoring techniques are used to demonstrate that process systems reliably produce material within the required moderator limits.</li>
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
<div id="appF.4"></div>
<h3 id="appF-4">F.4: Examples of engineered barriers to control moderators</h3>  <p>Engineered barriers can be used as a means to control the introduction of moderators. Typical barriers include:</p>
<ul>
<li>secondary roofs</li>
<li>false ceilings (drop ceilings)</li>
<li>secondary walls</li>
<li>vapour barriers</li>
<li>raised floors or structures</li>
<li>normally closed apertures</li>
<li>seals</li>
<li>syphon breaks</li>
<li>backflow prevention devices</li>
<li>condensate traps</li>
<li>double block and drain (bleed)</li>
<li>double block and blank</li>
<li>containers</li>
<li>gloveboxes</li>
<li>equipment (air dryers)</li>
<li>instrumented and controlled systems (dew point indicators, neutron interrogation)</li>
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
<div id="appG"></div>
<h2 id="appG">Appendix G: Example of a Partial Description of a Nuclear Criticality Safety Program for a Fuel Storage Facility</h2>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appG.1"></div>
<h3 id="appG-1">G.1	Template of contents of nuclear criticality safety program</h3>  <p>This example is not a prescribed format and content guide for a nuclear criticality safety program. It presents one of a number of acceptable ways to satisfy the information requirements (items 1 and 2 in section 12.8.2). The main purposes of this example are:</p>
<ul>
<li>to identify a list of the sections of this regulatory document that apply to a specific facility</li>
<li>to highlight that a nuclear criticality safety program should contain exact text quoted directly from the applicable standards, guidelines, and CNSC requirements</li>
</ul>  <p>In this example, the fuel storage facility is assumed to be a new facility; therefore, the example encompasses the full spectrum of activities necessary to establish a nuclear criticality safety program, including design, analysis, alarm systems, emergency response, training, management responsibilities, and administrative practices. For each activity, the example gives a partial list of relevant requirements. The complete list is to be created by taking into account the profile of the facility.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appG.2"></div>
<h3 id="appG-2">G.2	Identifying the requirements</h3>  <p>This section presents one acceptable method of satisfying the information requirements (item 1 in section 12.8.2).</p>  <h5 id="appG-2-a">Sample text:</h5>  <p><em>The facility is committed to the following subset of regulatory document REGDOC-2.4.3, Nuclear Criticality Safety as appropriate to the needs of the facility:</em></p>
<ol>
<li><em>Section 2, Nuclear Criticality Safety in Operations with Fissionable Materials Outside Reactors</em></li>
<li><em>Section 3, Criticality Accident Alarm System</em></li>
<li><em>Section 6, Nuclear Criticality Safety in the Storage of Fissile Materials</em></li>
<li><em>Section 11, Criticality Safety Criteria for the Handling, Transportation, Storage, and Long-term Waste Management of Reactor Fuel Outside Reactors</em></li>
<li><em>Section 12, Administrative Practices for Nuclear Criticality Safety</em></li>
<li><em>Section 13, Nuclear Criticality Safety Training</em></li>
<li><em>Section 16, Nuclear Criticality Accident Emergency Planning and Response</em></li>
</ol>  <p><em>This subset of regulatory document REGDOC-2.4.3 captures all requirements that are relevant to the proposed operations at the facility. Some sections of regulatory document REGDOC-2.4.3 have been excluded, for example, those related to the handling of powders or solutions.</em></p>  <p><em>The facility is committed to the following CNSC requirements:</em></p>
<ul>
<li><em>Administrative margin of subcriticality is 50 mk in k<sub>eff</sub> or, where appropriate, 20% of the critical mass</em></li>
<li><em>Semi-quantitative method will be used to demonstrate that the margin of subcriticality is not violated under normal and credible abnormal conditions (accidents or accident sequences) that have frequency of occurrence equal to or more than 10<sup>-6</sup> per year</em></li>
<li><em>The shielding and confinement system of the facility will be designed and operated such that the dose, resulting from exposure to direct radiation and to radionuclides released from the facility following a criticality accident, does not violate criteria established by international standards (Reference X1, Annex III, Section III-2) and national guidance (Reference X2) as a trigger for a temporary public evacuation</em></li>
</ul>  <p><em>This subset of regulatory document REGDOC-2.4.3 encompasses the full spectrum of activities necessary to establish a Nuclear Criticality Safety Program, including design, analysis, alarm systems, emergency response, training, management responsibilities, and administrative practices.</em></p>  <p><em>Reference X1: Food and Agriculture Organization of the United Nations, International Atomic Energy Agency, International Labour Organisation, OECD Nuclear Energy Agency, Pan American Health Organization, United Nations Office for the Co-Ordination of Humanitarian Affairs, World Health Organization, Preparedness and Response for a Nuclear or Radiological Emergency, Safety Requirements, Safety Standards Series No. GS-R-2, IAEA, Vienna, Austria, 2002.</em></p>  <p><em>Reference X2: Health Canada, Canadian Guidelines for Intervention during a Nuclear Emergency, Document H46-2/03-326E, Ottawa, Ontario, November 2003.</em></p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appG.3"></div>
<h3 id="appG-3">G.3	Sample procedure for criticality accident sequence assessment</h3>  <p>This section provides an example of criticality accident sequence assessment (CASA). It employs a semi-quantitative risk index method for assessing accident sequences in terms of their likelihood of occurrence.</p>  <p>The risk index method framework enables the applicant to identify which accidents or accident sequences exceed the likelihood level identified in section 2.3.2.2 and, therefore, require designation of criticality safety controls (CSC) (i.e., engineered and/or administrative CSC) and supporting management measures. Descriptions of these accident sequences need to be reported in the Safety Analysis Report (SAR).</p>  <p>This section works through an example of how the Risk Index Method can be applied to a uranium powder blender. It describes one method of evaluating compliance with the likelihood level identified in section 2.3.2.2. The method is intended to permit quantitative information to be considered, if available. Since likelihoods are inherently quantitative, evaluation of a particular accident should be consistent with any facts available, which may include quantitative information concerning the availability and reliability of CSC involved.</p>  <p>This section presents one method of analysis of credible accident sequences for either the nuclear criticality safety evaluation (NCSE) or the SAR. The method of this section describes semi-quantitative criteria for evaluating frequency indexes of criticality safety controls. These criteria for assigning indexes, particularly the descriptive criteria provided in some tables of this section, are intended to be examples, not universal criteria.</p>  <p>It is preferable that each applicant develops such criteria, based on the particular types of CSC and management measure programs. The applicant should modify and improve such criteria as insights are gained during performance of the CASA.</p>  <p>If the applicant evaluates accidents using a different method, the method should produce similar results in terms of the accident&rsquo;s likelihood. The method should be regarded as a screening method, not as a definitive method of proving the adequacy or inadequacy of the CSC for any particular accident. Because methods can rarely be universally valid, individual accidents for which this method does not appear applicable may be justified by an evaluation using other methods. The method does have the benefit that it evaluates, in a consistent manner, the characteristics of CSC used to limit accident sequences. This method permits identification of accident sequences with defects in the combination of CSC used. Such CSC can then be further evaluated or improved to establish adequacy. The procedure also ensures the consistent evaluation of similar CSC by different CASA teams. Sequences or CSC that have risk significance and are evaluated as marginally acceptable are good candidates for more detailed evaluation by the applicant and the reviewer.</p>  <p>The tabular accident summary resulting from the CASA should identify, for each sequence, what engineered or administrative CSC must fail to allow the likelihood that exceeds the levels identified in section 2.3.2.2. These requirements state that sequences of events leading to credible abnormal conditions shall be evaluated. The likelihood and possible consequences of such occurrences should be evaluated using reliable data and methodologies. The purpose of this section is to provide an example of an acceptable semi-quantitative method to perform such an evaluation.</p>  <p>The accident evaluation method described below does not preclude the need to comply with the double-contingency principle. Although exceptions are permitted with compensatory measures, double contingency protection should, in general, be applied. Double contingency protection is needed as there are usually insufficient firm data on the reliability of the CSC equipment and administrative CSC procedures used in criticality safety. If only one CSC were relied on to prevent a criticality, and it proved to be less reliable than expected, then the first time it failed, a criticality accident could result. For this reason, at least two independent CSC should be used. Inadequate CSC can then be determined by observing their failures without also suffering the consequences of a criticality accident. Even with double contingency protection, each CSC should be sufficiently unlikely to fail, so that if one of the two items that establish double contingency protection is actually ineffective, criticality is still extremely unlikely.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appG.3.1"></div>
<h3 id="appG-3-1">G.3.1	Assessing the effectiveness of the CSC</h3>  <p>The risk of an accident sequence is reduced through the application of different numbers and types of CSC. By either reducing the likelihood of occurrence or by mitigating the consequences, CSC can reduce the overall resulting risk. The designation of CSC should generally be made to reduce the likelihood (i.e., prevent an accident), but the consequences may also be reduced by minimizing the potential hazards (i.e., mitigate the consequences) if practical. Based on hazards identification and accident sequence analyses for which the resulting unmitigated or uncontrolled risks are unacceptable, administrative and/or engineered CSC may be designated to reduce the likelihood of occurrence and/or mitigate severity of the consequences.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appG.3.2"></div>
<h4 id="appG-3-2">G.3.2	Risk score evaluation summary</h4>  <p>As previously mentioned, an acceptable way for the applicant to present the results of the CASA is a tabular summary of the identified accident sequences. Table G-1 is an acceptable format for such a table. This table lists several example accident sequences for a powder blender at a typica
                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }