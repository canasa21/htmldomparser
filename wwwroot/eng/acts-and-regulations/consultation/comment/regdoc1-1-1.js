import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "en",
                pageTitle: "REGDOC-1.1.1: Licence to Prepare Site and Site Evaluation for New Reactor Facilities", 
                dateModified: "2016-07-05",
                langToggleUrl: "/fra/acts-and-regulations/consultation/comment/regdoc1-1-1"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<h2 id="preface">Preface</h2>
<p>This regulatory document is part of the CNSC&#39;s Reactor Facilities series of regulatory documents, which also includes licence application guides for licences to construct, operate and decommission nuclear power plants. The full list of regulatory document series is included at the end of this document and can also be found on the <a href="/eng/acts-and-regulations/regulatory-documents/index">CNSC&#39;s website</a>.</p>  <p>Regulatory document REGDOC-1.1.1, <em>Licence to Prepare Site and Site Evaluation for New Reactor Facilities</em>, sets out requirements and guidance for site preparation and site evaluation. It also addresses requirements and guidance for a licence to prepare site. This document refers to both nuclear power plants and small reactor facilities as "reactor facilities". Its content also addresses the information needed for subsequent lifecycle phases of construction and operation.</p>  <p>This document replaces the previously published RD-346, <em>Site Evaluation for Nuclear Power Plants</em>. This regulatory document has revised the earlier RD-346 to:</p>
<ul>
<li>clarify requirements and guidance language</li>
<li>expand scope to include small reactor facilities using a graded approach</li>
<li>include site preparation requirements and guidance</li>
<li>address the relevant Fukushima Task Force recommendations</li>
</ul>  <p>REGDOC-1.1.1 updates RD-346 by incorporating lessons learned from the Fukushima nuclear event of March 2011. The updates were made to address findings from INFO-0824, <em>CNSC Fukushima Task Force Report</em>, and the subsequently issued action plans as applicable to RD-346. The changes focused on the need for robust characterization of the site to include:</p>
<ul>
<li>consideration of events to include multiple and simultaneous severe external events that could exceed the design basis</li>
<li>multiple and simultaneous reactor accidents</li>
<li>discussions around emergency planning and preparations for extreme events earlier in a project</li>
</ul>  <p>REGDOC-1.1.1 is intended to form part of the licensing basis for a regulated facility or activity within the scope of the document. It is intended for inclusion in licences as either part of the conditions and safety and control measures in a licence, or as part of the safety and control measures to be described in a licence application and the documents needed to support that application.</p>  <p>For proposed new facilities: This document will be used to assess new licence applications for reactor facilities.</p>   <p>For existing facilities: The requirements contained in this document do not apply unless they have been included, in whole or in part, in the licence or licensing basis.</p>  <p>Guidance contained in this document exists to inform the applicant, to elaborate further on requirements or to provide direction to licensees and applicants on how to meet requirements. It also provides more information about how CNSC staff evaluate specific problems or data during their review of licence applications. Licensees are expected to review and consider guidance; should they choose not to follow it, they should explain how their chosen alternate approach meets regulatory requirements.</p>   <p>A graded approach, commensurate with risk, may be defined and used when applying the requirements and guidance contained in this regulatory document. The use of a graded approach is not a relaxation of requirements. With a graded approach, the application of requirements is commensurate with the risks and particular characteristics of the facility or activity.</p>  <p>An applicant or licensee may put forward a case to demonstrate that the intent of a requirement is addressed by other means and demonstrated with supportable evidence.</p>  <p>The requirements and guidance in this document are consistent with modern national and international practices addressing issues and elements that control and enhance nuclear safety. In particular, they establish a modern, risk-informed approach to the categorization of accidents &ndash; one that considers a full spectrum of possible events, including events of greatest consequence to the public.</p>
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
<li><a href="#sec1">1. Introduction</a>
<ul className="list-bullet-none">
<li><a href="#sec1-1">1.1 Purpose</a></li>
<li><a href="#sec1-2">1.2 Scope</a></li>
<li><a href="#sec1-3">1.3 Relevant legislation</a>
<ul className="list-bullet-none">
<li><a href="#sec1-3-1">1.3.1 <em>Nuclear Safety and Control Act</em> and associated regulations</a></li>
<li><a href="#sec1-3-2">1.3.2 Other acts and regulations</a></li>
</ul></li>
</ul></li>
<li><a href="#sec2">2. Background</a>
<ul className="list-bullet-none">
<li><a href="#sec2-1">2.1 Support for environmental assessments under CEAA 2012</a></li>
</ul></li>
<li><a href="#PartA">Part A: Requirements and Guidance for a Licence to Prepare Site for New Reactor Facilities</a></li>
<li><a href="#sec3">3. General</a></li>
<li><a href="#sec4">4. Project Information</a>
<ul>
<li><a href="#sec4-1">4.1 General description of the project</a><</li>
<li><a href="#sec4-2">4.2 Applicant information</a></li>
<li><a href="#sec4-3">4.3 Nuclear substances</a>
<ul className="list-bullet-none">
<li><a href="#sec4-3-1">4.3.1 General considerations</a></li>
</ul></li>
</ul></li>
<li><a href="#sec5">5. Public Information and Aboriginal Engagement</a>
<ul className="list-bullet-none">
<li><a href="#sec5-1">5.1 Public information and disclosure program</a></li>
<li><a href="#sec5-2">5.2 Aboriginal engagement</a></li>
<li><a href="#sec5-3">5.3 Intergovernmental consultation</a></li>
</ul></li>
<li><a href="#sec6">6. Management System</a>
<ul className="list-bullet-none">
<li><a href="#sec6-1">6.1 Management system considerations for the design of the nuclear facility &ndash; design control measures</a>
<ul className="list-bullet-none">
<li><a href="#sec6-1-1">6.1.1 Application for licence to prepare site where the selection of a specific facility design is deferred</a></li>
<li><a href="#sec6-1-2">6.1.2 Application for licence to prepare site where a specific facility design has been selected</a></li>
</ul></li>
<li><a href="#sec6-2">6.2 Management system considerations for site evaluation</a></li>
<li><a href="#sec6-3">6.3 Management system considerations for the security program</a></li>
</ul></li>
<li><a href="#sec7">7. Operating Performance &ndash; Conduct of the Licensed Activity</a></li>
<li><a href="#sec8">8. Safety Analysis</a></li>
<li><a href="#sec9">9. Physical Design</a>
<ul className="list-bullet-none">
<li><a href="#sec9-1">9.1 Civil structures and civil works</a></li>
<li><a href="#sec9-2">9.2 Description of the exclusion zone and proposed layout of structures within the zone</a></li>
<li><a href="#sec9-3">9.3 Case for the exclusion zone</a>
<ul className="list-bullet-none">
<li><a href="#sec9-3-1">9.3.1 Approach 1: Simplified exclusion boundary case</a></li>
<li><a href="#sec9-3-2">9.3.2 Approach 2: Comprehensive exclusion boundary case</a></li>
</ul></li>
<li><a href="#sec9-4">9.4 Protective zones</a></li>
</ul></li>
<li><a href="#sec10">10. Radiation Protection</a></li>
<li><a href="#sec11">11. Conventional Health and Safety</a>
<ul className="list-bullet-none">
<li><a href="#sec11-1">11.1 Health and safety organization</a></li>
</ul></li>
<li><a href="#sec12">12. Emergency Management and Fire Protection</a></li>
<li><a href="#sec13">13. Environmental Protection</a>
<ul className="list-bullet-none">
<li><a href="#sec13-1">13.1 Environmental risk assessment</a></li>
<li><a href="#sec13-2">13.2 Environmental management system</a></li>
<li><a href="#sec13-3">13.3 Effluent and emissions control and monitoring</a></li>
<li><a href="#sec13-4">13.4 Environmental monitoring</a></li>
</ul></li>
<li><a href="#sec14">14. Waste Management</a>
<ul className="list-bullet-none">
<li><a href="#sec14-1">14.1 Hazardous substances/hazardous wastes</a></li>
<li><a href="#sec14-2">14.2 Decommissioning</a></li>
<li><a href="#sec14-3">14.3 Financial guarantee associated with the preliminary decommissioning plan</a></li>
</ul></li>
<li><a href="#sec15">15. Security</a>
<ul className="list-bullet-none">
<li><a href="#sec15-1">15.1 Prescribed information</a></li>
<li><a href="#sec15-2">15.2 Site security program</a>
<ul className="list-bullet-none">
<li><a href="#sec15-2-1">15.2.1 Site access clearance</a></li>
<li><a href="#sec15-2-2">15.2.2 Security arrangements with offsite response forces</a></li>
<li><a href="#sec15-2-3">15.2.3 Physical security</a></li>
<li><a href="#sec15-2-4">15.2.4 Cyber security</a></li>
<li><a href="#sec15-2-5">15.2.5 Security officer program</a></li>
</ul></li>
</ul></li>
<li><a href="#PartB">Part B: Site Evaluation for New Nuclear Power Plants and Small Reactor Facilities</a></li>
<li><a href="#sec16">16. Introduction</a>
<ul className="list-bullet-none">
<li><a href="#sec16-1">16.1 Purpose</a></li>
<li><a href="#sec16-2">16.2 Scope</a></li>
<li><a href="#sec16-3">16.3 Overview</a></li>
<li><a href="#sec16-4">16.4 Site evaluation methodology</a></li>
</ul></li>
<li><a href="#sec17">17. General Criteria for Site Evaluation</a>
<ul className="list-bullet-none">
<li><a href="#sec17-1">17.1 Evaluation against safety goals from a site perspective</a></li>
<li><a href="#sec17-2">17.2 Consideration of the evolution of natural and human-induced factors</a></li>
<li><a href="#sec17-3">17.3 Evaluation of hazards associated with external events</a></li>
<li><a href="#sec17-4">17.4 Determining the potential impact of the site on the environment</a></li>
<li><a href="#sec17-5">17.5 Population and emergency planning considerations</a>
<ul className="list-bullet-none">
<li><a href="#sec17-5-1">17.5.1 Exclusion zones and protective zones</a></li>
<li><a href="#sec17-5-2">17.5.2 Planning considerations</a></li>
</ul></li>
<li><a href="#sec17-6">17.6 Consideration of future life-extension activities</a></li>
</ul></li>
<li><a href="#sec18">18. Gathering Baseline Data</a>
<ul className="list-bullet-none">
<li><a href="#sec18-1">18.1 Atmospheric and meteorological data</a></li>
<li><a href="#sec18-2">18.2 Geological data</a></li>
<li><a href="#sec18-3">18.3 Geophysical data</a></li>
<li><a href="#sec18-4">18.4 Hydrological data</a></li>
<li><a href="#sec18-5">18.5 Hydrogeological data</a></li>
<li><a href="#sec18-6">18.6 Biological data</a></li>
<li><a href="#sec18-7">18.7 Baseline ambient radioactivity and pre-existing hazardous substances</a></li>
</ul></li>
<li><a href="#sec19">19. Evaluation of Natural External Events</a>
<ul className="list-bullet-none">
<li><a href="#sec19-1">19.1 Climate change</a></li>
<li><a href="#sec19-2">19.2 Meteorological hazards</a>
<ul className="list-bullet-none">
<li><a href="#sec19-2-1">19.2.1 Temperature and humidity</a></li>
<li><a href="#sec19-2-2">19.2.2 High winds</a></li>
<li><a href="#sec19-2-3">19.2.3 Abrasive dust and sand storms</a></li>
<li><a href="#sec19-2-4">19.2.4 Precipitation</a></li>
<li><a href="#sec19-2-5">19.2.5 Lightning</a></li>
</ul></li>
<li><a href="#sec19-3">19.3 Surface water hazards</a>
<ul className="list-bullet-none">
<li><a href="#sec19-3-1">19.3.1 Floods</a></li>
<li><a href="#sec19-3-2">19.3.2 Adequacy of water supply</a></li>
</ul></li>
<li><a href="#sec19-4">19.4 Groundwater hazards</a></li>
<li><a href="#sec19-5">19.5 Geotechnical hazards</a></li>
<li><a href="#sec19-6">19.6 Seismic and geological hazards</a>
<ul className="list-bullet-none">
<li><a href="#sec19-6-1">19.6.1 Earthquakes</a></li>
<li><a href="#sec19-6-2">19.6.2 Surface faulting</a></li>
<li><a href="#sec19-6-3">19.6.3 Volcanic hazards</a></li>
</ul></li>
<li><a href="#sec19-7">19.7 Biological hazards</a></li>
<li><a href="#sec19-8">19.8 Natural fire hazards</a></li>
</ul></li>
<li><a href="#sec20">20. Evaluation of External, Non-Malevolent, Human-Induced Events</a>
<ul className="list-bullet-none">
<li><a href="#sec20-1">20.1 Aircraft crashes</a></li>
<li><a href="#sec20-2">20.2 Other transportation hazards</a></li>
<li><a href="#sec20-3">20.3 Fires and explosions</a></li>
<li><a href="#sec20-4">20.4 Chemical and radiological hazards</a></li>
<li><a href="#sec20-5">20.5 Electromagnetic interference hazards</a></li>
<li><a href="#sec20-6">20.6 Consideration of future connections to the grid</a></li>
</ul></li>
<li><a href="#sec21">21. Security Considerations</a>
<ul className="list-bullet-none">
<li><a href="#sec21-1">21.1 Physical protection</a>
<ul className="list-bullet-none">
<li><a href="#sec21-1-1">21.1.1 Remote areas</a></li>
</ul></li>
<li><a href="#sec21-2">21.2 Transportation routes</a>
<ul className="list-bullet-none">
<li><a href="#sec21-2-1">21.2.1 Waterways</a></li>
<li><a href="#sec21-2-2">21.2.2 Land routes</a></li>
<li><a href="#sec21-2-3">21.2.3 Airspace</a></li>
</ul></li>
</ul></li>
<li><a href="#sec22">22. Decommissioning</a></li>
<li><a href="#sec23">23. Management system or quality assurance</a></li>
<li><a href="#AppA">Appendix A: Licence Application Guide: Licence to Prepare Site for a Class I Nuclear Facilities: Nuclear Power Plants and Small Reactor Facilities</a>
<ul className="list-bullet-none">
<li><a href="#AppA-1">A.1 Introduction</a></li>
<li><a href="#AppA-2">A.2 Applicant Information</a>
<ul className="list-bullet-none">
<li><a href="#AppA-2-1">A.2.1 Applicant&#39;s name and business address</a></li>
<li><a href="#AppA-2-2">A.2.2 Activity to be licensed</a></li>
<li><a href="#AppA-2-3">A.2.3 Proof of site ownership or authority from owner to conduct activities on the site</a></li>
<li><a href="#AppA-2-4">A.2.4 Nuclear substances</a></li>
</ul></li>
<li><a href="#AppA-3">A.3 Public Consultation and Aboriginal Consultation</a>
<ul className="list-bullet-none">
<li><a href="#AppA-3-1">A.3.1 Public information program</a></li>
<li><a href="#AppA-3-2">A.3.2 Aboriginal consultation</a></li>
<li><a href="#AppA-3-3">A.3.3 Intergovernmental consultation</a></li>
</ul></li>
<li><a href="#AppA-4">A.4 Management System</a>
<ul className="list-bullet-none">
<li><a href="#AppA-4-1">A.4.1 Management system for nuclear facility design activities occurring during site preparation</a></li>
<li><a href="#AppA-4-2">A.4.2 Proposed management system for site evaluation</a></li>
<li><a href="#AppA-4-3">A.4.3 Management system for the security program</a></li>
<li><a href="#AppA-4-4">A.4.4 Consideration of safety culture</a></li>
</ul></li>
<li><a href="#AppA-5">A.5 Operating Performance &ndash; Conduct of the Licensed Activity</a>
<ul className="list-bullet-none">
<li><a href="#AppA-5-1">A.5.1 Identification of risks to health and safety of persons</a></li>
</ul></li>
<li><a href="#AppA-6">A.6 Safety Analysis</a></li>
<li><a href="#AppA-7">A.7 Physical Design</a>
<ul className="list-bullet-none">
<li><a href="#AppA-7-1">A.7.1 Civil structures and civil works</a></li>
<li><a href="#AppA-7-2">A.7.2 Description of the exclusion zone and proposed layout of structures within the zone</a></li>
<li><a href="#AppA-7-3">A.7.3 Protective zones</a></li>
</ul></li>
<li><a href="#AppA-8">A.8 Radiation Protection</a></li>
<li><a href="#AppA-9">A.9 Conventional Health and Safety</a></li>
<li><a href="#AppA-10">A.10 Emergency Management and Fire Protection</a></li>
<li><a href="#AppA-11">A.11 Environmental Protection</a></li>
<li><a href="#AppA-12">A.12 Waste Management</a>
<ul className="list-bullet-none">
<li><a href="#AppA-12-1">A.12.1 Hazardous substances / hazardous wastes</a></li>
<li><a href="#AppA-12-2">A.12.2 Decommissioning</a></li>
</ul></li>
<li><a href="#AppA-13">A.13 Security</a>
<ul className="list-bullet-none">
<li><a href="#AppA-13-1">A.13.1 Prescribed information</a></li>
<li><a href="#AppA-13-2">A.13.2 Site security program</a></li>
</ul></li>
</ul></li>
<li><a href="#AppB">Appendix B: Working-Level Site Evaluation Requirements and Guidance</a>
<ul className="list-bullet-none">
<li><a href="#AppB-1">B.1 General</a></li>
<li><a href="#AppB-2">B.2 Licensee&#39;s Site Evaluation Program and Processes</a>
<ul className="list-bullet-none">
<li><a href="#AppB-2-1">B.2.1 General considerations</a></li>
<li><a href="#AppB-2-2">B.2.2 Licensee&#39;s oversight of the site evaluation process</a></li>
<li><a href="#AppB-2-3">B.2.3 Process for gathering baseline data</a></li>
<li><a href="#AppB-2-4">B.2.4 Process to evaluate natural and human-induced factors that may affect safety and security</a></li>
</ul></li>
<li><a href="#AppB-3">B.3 Baseline Data Used to Evaluate Suitability Throughout the Facility Lifecycle</a>
<ul className="list-bullet-none">
<li><a href="#AppB-3-1">B.3.1 Baseline climate, meteorological data and air quality data</a></li>
<li><a href="#AppB-3-2">B.3.2 Baseline geological, geotechnical, and coastal geomorphological data and baseline information on geotechnical and seismic hazards</a></li>
<li><a href="#AppB-3-3">B.3.3 Baseline hydrology &ndash; Normal flow, flood and drought</a></li>
<li><a href="#AppB-3-4">B.3.4 Baseline surface water, sediment and groundwater quality data</a></li>
<li><a href="#AppB-3-5">B.3.5 Baseline terrestrial, flora, fauna, and food chain data</a></li>
<li><a href="#AppB-3-6">B.3.6 Baseline aquatic, flora, fauna, and food chain data</a></li>
<li><a href="#AppB-3-7">B.3.7 Baseline ambient radioactivity and ambient non-radioactive hazardous substances</a></li>
<li><a href="#AppB-3-8">B.3.8 Baseline land use data</a></li>
<li><a href="#AppB-3-9">B.3.9 Security baseline data &ndash; Security risks presented by the site location</a></li>
</ul></li>
<li><a href="#AppB-4">B.4 Prediction of Effects of the Environment on the Project over the Facility Lifecycle</a>
<ul className="list-bullet-none">
<li><a href="#AppB-4-1">B.4.1 Potential change of the climate and environment</a></li>
<li><a href="#AppB-4-2">B.4.2 Prediction of meteorological events</a></li>
<li><a href="#AppB-4-3">B.4.3 Design-basis flood and water supply adequacy</a></li>
<li><a href="#AppB-4-4">B.4.4 Prediction of groundwater, geotechnical, seismic, and surface faulting events</a></li>
<li><a href="#AppB-4-5">B.4.5 Prediction of non-malevolent biological events</a></li>
<li><a href="#AppB-4-6">B.4.6 Prediction of non-malevolent external fire and explosion events</a></li>
<li><a href="#AppB-4-7">B.4.7 Prediction of external malevolent events</a></li>
</ul></li>
<li><a href="#AppB-5">B.5 Assessment of Non-Malevolent Accidents and Malfunctions and Their Consequences</a>
<ul className="list-bullet-none">
<li><a href="#AppB-5-1">B.5.1 Considerations specific to the licence to prepare site</a></li>
<li><a href="#AppB-5-2">B.5.2 Considerations applicable to all licensing phases</a></li>
</ul></li>
<li><a href="#secB-6">B.6 Effects of the Project on the Environment</a>
<ul className="list-bullet-none">
<li><a href="#AppB-6-1">B.6.1 Effects of the project on air quality</a></li>
<li><a href="#AppB-6-2">B.6.2 Effects of the project on terrestrial environment</a></li>
<li><a href="#AppB-6-3">B.6.3 Effects of radioactive and hazardous substances on the terrestrial environment</a></li>
<li><a href="#AppB-6-4">B.6.4 Effects of the project on aquatic environment</a></li>
<li><a href="#AppB-6-5">B.6.5 Effects of the project on hydrogeology</a></li>
<li><a href="#AppB-6-6">B.6.6 Effects of the project on human health</a></li>
<li><a href="#AppB-6-7">B.6.7 Prediction of non-human biota dose</a></li>
</ul></li>
<li><a href="#AppB-7">B.7 Facility Decommissioning as a Consideration for Site Evaluation</a></li>
</ul></li>
<li><a href="#abbrev">Abbreviations</a></li>
<li><a href="#glossary">Glossary</a></li>
<li><a href="#ref">References</a></li>
<li><a href="#addinfo">Additional Information</a></li>   </ul>
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
<h3 id="sec1-1">1.1 Purpose</h3>  <p>This regulatory document addresses site preparation and site evaluation for reactor facilities. Its content addresses suitability of a site for the construction and operation of a nuclear power plant or a small reactor. Site evaluation is integral to site preparation, and provides information to subsequent lifecycle phases. This document refers to both nuclear power plants and small reactor facilities as "reactor facilities".</p>
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
<h3 id="sec1-2">1.2 Scope</h3>  <p>This regulatory document sets out the requirements and guidance for a licence to prepare site and site evaluation for new reactor facilities. It has two parts:</p>
<ul>
<li>Part A: Requirements and guidance for an application for a licence to prepare site</li>
<li>Part B: Requirements and guidance for site evaluation (site evaluation is integral to the site preparation licence application, and provides input information for construction, operation, and decommissioning). Further explanation on the application in the lifecycle phases is provided in section 2, Background.</li>
</ul>  <p>Appendices are provided to support the above parts:</p>
<ul>
<li>Appendix A: Licence application guide to support part A for licence to prepare site</li>
<li>Appendix B: Contains working-level requirements and guidance to support part B for site evaluation</li>
</ul>  <p>For the purposes of this document, a nuclear power plant is a fission reactor with a thermal power greater than approximately 200 megawatts (MW). A small reactor is considered to be a fission reactor with a thermal power less than approximately 200 MW. All criteria in this document are intended to be scalable to a smaller reactor facility.</p>
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
<h3 id="sec1-3">1.3 Relevant legislation</h3>  <p>The provisions of the <em>Nuclear Safety and Control Act</em> (NSCA) and the associated regulations that pertain to site preparation and site evaluation are listed below.</p>  <p>Data and analysis results from site evaluation may be used to satisfy information needed for subsequent licensing phases, as specified in the NSCA and associated regulations listed in section 1.3.1.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="1.3.1"></div>
<h4 id="sec1-3-1">1.3.1	<em>Nuclear Safety and Control Act</em> and associated regulations</h4>
<ul>
<li>Paragraph 44(1)(e) of the NSCA states that "The Commission may, with approval of the Governor in Council, make regulations [...] respecting the location, design, construction, installation, operation, maintenance, modification, decommissioning, abandonment and disposal of a nuclear facility or part of a nuclear facility;"</li>
<li>Paragraph 44(1)(o) of the NSCA states that "The Commission may, with approval of the Governor in Council, make regulations [...] establishing requirements to be complied with by any person who possesses, uses, packages, stores or disposes of a nuclear substance or prescribed equipment or who locates, designs, constructs, installs, operates, maintains, modifies, decommissions or abandons a nuclear facility or nuclear powered vehicle;"</li>
<li>Paragraphs 3(a) through 3(k) of the <em>Class I Nuclear Facilities Regulations</em> state that "An application for a licence in respect of a Class I nuclear facility, other than a licence to abandon, shall contain the following information in addition to the information required by section 3 of the General Nuclear Safety and Control Regulations:
<ul className="list-bullet-none">
<li>(a) a description of the site of the activity to be licensed, including the location of any exclusion zone and any structures within that zone;</li>
<li>(b) plans showing the location, perimeter, areas, structures and systems of the nuclear facility;</li>
<li>(c) evidence that the applicant is the owner of the site or has authority from the owner of the site to carry on the activity to be licensed;</li>
<li>(d) the proposed quality assurance program for the activity to be licensed;</li>
<li>(e) the name, form, characteristics and quantity of any hazardous substances that may be on the site while the activity to be licensed is carried on;</li>
<li>(f) the proposed worker health and safety policies and procedures;</li>
<li>(g) the proposed environmental protection policies and procedures;</li>
<li>(h) the proposed effluent and environmental monitoring programs;</li>
<li>(i) if the application is in respect of a nuclear facility referred to in paragraph 2(b) of the <em>Nuclear Security Regulations</em>, the information required by section 3 of those Regulations;</li>
<li>(j) the proposed program to inform persons living in the site vicinity of the general nature and characteristics of the anticipated effects on the environment and the health and safety of persons that may result from the activity to be licensed; and</li>
<li>(k) the proposed plan for the decommissioning of the nuclear facility or of the site."</li>
</ul></li>
<li>Paragraphs 4(a) through 4(e) of the <em>Class I Nuclear Facilities Regulations</em> state that "An application for a licence in respect of a Class I nuclear facility, other than a licence to abandon, shall contain the following information in addition to the information required by section 3:
<ul className="list-bullet-none">
<li>(a) a description of the site evaluation process and of the investigations and preparatory work that have been and will be done on the site and in the surrounding area;</li>
<li>(b) a description of the site&#39;s susceptibility to human activity and natural phenomena, including seismic events, tornadoes and floods;</li>
<li>(c) the proposed program to determine the environmental baseline characteristics of the site and the surrounding area;</li>
<li>(d) the proposed quality assurance program for the design of the nuclear facility; and</li>
<li>(e) the effects on the environment and the health and safety of persons that may result from the activity to be licensed, and the measures that will be taken to prevent or mitigate those effects."</li>
</ul></li>
<li>Paragraphs 5(a), (b), (i) and (j) of the <em>Class I Nuclear Facilities Regulations</em> state that: "An application for a licence to construct a Class I nuclear facility shall contain the following information in addition to the information required by section 3:
<ul className="list-bullet-none">
<li>(a) a description of the proposed design of the nuclear facility, including the manner in which the physical environmental characteristics of the site are taken into account in the design;</li>
<li>(b) a description of the environmental baseline characteristics of the site and the surrounding area; [...]</li>
<li>(i) the effects on the environment and the health and safety of persons that may result from the construction, operation and decommissioning of the nuclear facility, and the measures that will be taken to prevent or mitigate those effects;</li>
<li>(j) the proposed location of points of release, the proposed maximum quantities and concentrations, and the anticipated volume and flow rate of releases of nuclear substances and hazardous substances into the environment, including their physical, chemical and radiological characteristics"</li>
</ul></li>
<li>Paragraphs 6(h) and 6(i) of the <em>Class I Nuclear Facilities Regulations</em> state that: "An application for a licence to operate a Class I nuclear facility shall contain the following information in addition to the information required by section 3:
<ul className="list-bullet-none">
<li>(h) the effects on the environment and the health and safety of persons that may result from the operation and decommissioning of the nuclear facility, and the measures that will be taken to prevent or mitigate those effects;</li>
<li>(i) the proposed location of points of release, the proposed maximum quantities and concentrations, and the anticipated volume and flow rate of releases of nuclear substances and hazardous substances into the environment, including their physical, chemical and radiological characteristics;"</li>
</ul></li>
<li>Paragraphs 7(b), 7(e), 7(f), 7(g), 7(h), 7(i) of the <em>Class I Nuclear Facilities Regulations</em> state that: "An application for a licence to decommission a Class I nuclear facility shall contain the following information in addition to the information required by section 3:
<ul className="list-bullet-none">
<li>(b) the nuclear substances, hazardous substances, land, buildings, structures, systems and equipment that will be affected by the decommissioning;</li>
<li>(e) the nature and extent of any radioactive contamination at the nuclear facility;</li>
<li>(f) the effects on the environment and the health and safety of persons that may result from the decommissioning, and the measures that will be taken to prevent or mitigate those effects;</li>
<li>(g) the proposed location of points of release, the proposed maximum quantities and concentrations, and the anticipated volume and flow rate of releases of nuclear substances and hazardous substances into the environment, including their physical, chemical and radiological characteristics;</li>
<li>(h) the proposed measures to control releases of nuclear substances and hazardous substances into the environment;</li>
<li>(i) the proposed measures to prevent or mitigate the effects of accidental releases of nuclear substances and hazardous substances on the environment, the health and safety of persons and the maintenance of national security, including an emergency response plan;"</li>
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
<div id="1.3.2"></div>
<h4 id="sec1-3-2">1.3.2	Other acts and regulations</h4>  <p>Section 35 of the <em>Constitution Act, 1982</em> states:</p>
<ul>
<li>(1)	The existing aboriginal and treaty rights of the aboriginal peoples of Canada are hereby recognized and affirmed.</li>
<li>(2)	In this Act, "aboriginal peoples of Canada" includes the Indian, Inuit and Métis peoples of Canada.</li>
<li>(3)	For greater certainty, in subsection (1) "treaty rights" includes rights that now exist by way of land claims agreements or may be so acquired.</li>
<li>(4)	Notwithstanding any other provision of this Act, the aboriginal and treaty rights referred to in subsection (1) are guaranteed equally to male and female persons.</li>
</ul>  <p>The <em>Canadian Environmental Assessment Act, 2012</em> (CEAA 2012) applies in the following instances:</p>
<ul>
<li>designated projects as defined in section 2 of the CEAA 2012 and outlined in the associated <em>Regulations Designating Physical Activities</em></li>
<li>projects proposed to be carried out on federal lands, as defined in section 66 of CEAA 2012</li>
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
<h2 id="sec2">2. Background</h2>  <p>For a licence to prepare site, the applicant is to address the information requirements listed in parts A and B of this document.</p>   <p>It is important to note that, under the NSCA, the initial application does not necessarily have to be for a licence to prepare site. As such, the applicant could apply for any of the following licences as long as they address all applicable regulatory requirements, including those for the licence to prepare site:</p>
<ul>
<li>licence to prepare site</li>
<li>licence to construct</li>
<li>licence to operate</li>
<li>licence to prepare site and construct</li>
<li>licence to construct and operate</li>
<li>license to prepare site, construct and operate</li>
<li>licence to decommission</li>
</ul>  <p>In most cases, programs, processes and procedures developed at the licence to prepare site stage will continue to be used, and will be adapted to support future phases of the project (i.e., facility construction and operation).</p>  <p>Part A: Part A of this document describes all information needed to satisfy the requirements under the regulations applicable to the licence to prepare site.</p>  <p>A substantial part of the submissions for the application for a licence to prepare site is used to demonstrate that the proposed site will be suitable for the construction and operation of the proposed facility.</p>   <p>The Commission&#39;s granting of the licence to prepare site declares the site suitable and permits the licensee to perform the licensed activity, namely site preparation. Granting of the licence does not relinquish the licensee&#39;s responsibility to ensure that the site continues to be suitable throughout the project lifecycle.</p>  <p>Site characterization and environmental impact information is necessary to determine, for the entire lifecycle of the project, whether:</p>
<ul>
<li>siting option choices were made to avoid or minimize environmental effects</li>
<li>the proposed facility and site infrastructure designs to be established are adequate (including the exclusion zone boundary, where appropriate)</li>
<li>the applicant will ensure adequate provision for the protection of the environment, the health and safety of persons and maintaining national security</li>
<li>effects are likely significant, taking into consideration mitigation measures</li>
</ul>  <p>Significant site evaluation work should be completed before initiating the application for a licence to prepare site. It is recommended that the applicant use the pre-application period to develop the safety case for the licensing basis, along with supporting information.</p>  <p>The licensing of reactor facilities in Canada involves several steps beginning with consideration of the proposed site and issuance of a licence to prepare site. The application for a licence to prepare site must be accompanied by the appropriate regulatory fee as outlined in the <em>Canadian Nuclear Safety Commission Cost Recovery Fees Regulations</em>.</p>  <p>The information in an application for a licence to prepare site and its referenced documents satisfies several primary purposes:</p>
<ul>
<li>provides the safety case for the site preparation phase of the project, which in turn is incorporated into the licensing basis for the site preparation activities</li>
<li>documents the conditions of the site and surrounding region that must be addressed in any technologies being considered, and associated safety and control measures</li>
<li>demonstrates that any technologies under consideration for the site will be able to withstand the conditions imposed on the nuclear facility by the site and its surroundings</li>
<li>demonstrates that the site is suitable for a reactor facility&#39;s full lifecycle</li>
</ul>  <p>This regulatory document does not presuppose or limit an applicant&#39;s intention to implement a particular kind of technology in future licensing phases.</p>  <p>To obtain a licence to prepare site, the CNSC may request additional information from applicants, in order to further substantiate claims made in the application or to address any gaps found in the application.</p>  <p>Appendix A is provided to guide the licensee or licence applicant in the preparation for the application for the licence to prepare site.</p>   <p>Part B: Part B of this document describes the CNSC adaptation of the site evaluation principles set forth by the International Atomic Energy Agency (IAEA) in NS-R-3, <em>Site Evaluation for Nuclear Installations</em>. The scope of this document goes beyond NS-R-3 in several aspects, such as the protection of the environment, security of the site, and protection of prescribed information and equipment, which are not addressed in the IAEA document.</p>  <p>Part B is written to serve the broader licensing needs under the NSCA and provide additional guidance for facilitating a more effective and efficient regulatory review. As with NS-R-3, part B considers all licensing phases, because information from the site evaluation process is required to support the CNSC licensing process at all phases of the facility lifecycle.</p>  <p>Information from the site evaluation should be considered throughout the lifecycle of the proposed facility, in order to ensure that the design basis of the facility remains current with changing environmental conditions or modifications to the facility itself. A brief summary of the application of site evaluation information to the facility lifecycle phases is provided below.</p>  <p>Site Preparation: Site evaluation using part B of this document is part of the information gathering and initial submission activities for the proposed site, and the application for a licence to prepare site.</p>  <p>Construction: The results of the site evaluation and, in particular, the site characterization are considered in the facility design and supporting safety analysis, which are in turn assessed as part of the review of a construction licence application.</p>   <p>Operation: The site evaluation information is considered in the design and licensing basis, and carried through to the subsequent lifecycle phases, including the licence to operate. Information gathered during site evaluation, including the assumptions and bounding envelope would be reconfirmed at the continuing operation phase. Part B of the document would also be considered as part of the suite of modern codes and standards during a periodic safety review.</p>  <p>Appendix B contains working-level requirements and guidance that support part B for site evaluation.</p>
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
<h3 id="sec2-1">2.1	Support for environmental assessments under CEAA 2012</h3>  <p>For environmental assessments (EAs) conducted by the CNSC in accordance with the <em>Canadian Environmental Assessment Act, 2012</em> (CEAA 2012), the Commission must render an EA decision prior to making a licensing decision under the <em>Nuclear Safety and Control Act</em> (NSCA).</p>  <p>It should be noted that site evaluation comprises a substantial part of an EA conducted pursuant to the NSCA or the CEAA 2012. As such, information gathered during the site evaluation process should be used during the EA process, and will be reviewed by the CNSC during the assessment of all licence applications in the facility&#39;s lifecycle, in particular for preparing the application for a licence to prepare site.</p>   <p>The following document provides more information on the CNSC&#39;s EA and licensing processes:</p>
<ul>
<li>REGDOC-2.9.1, <em>Environmental Protection: Environmental Policy, Assessments and Protection Measures</em> (draft 2015)</li>
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
<div id="PartA"></div>
<h2 id="PartA">Part A: Requirements and Guidance for a Licence to Prepare Site for New Reactor Facilities</h2>
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
<h2 id="sec3">3. General</h2>  <p>Part A identifies requirements and guidance to be addressed for site preparation for a new reactor facility.</p>   <p>Applicants are to address parts A and B (site evaluation), and the relevant sections of appendix A when submitting an application for a licence to prepare site. Applicable regulations are referenced at the beginning of each section. Appendix A describes additional information to be submitted in an application for a licence to prepare site.</p>
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
<h2 id="sec4">4. Project Information</h2>
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
<h3 id="sec4-1">4.1	General description of the project</h3>  <p>Applicable regulatory basis:</p>
<ul>
<li><em>General Nuclear Safety and Control Regulations</em>, paragraph 3(1)(b), 3(1)(d)</li>
</ul>  <p>All high-level activities proposed to be conducted under the licence to prepare site shall be described.</p>  <p>If site preparation activities involve construction of non-nuclear facility structures, systems and components (SSCs), technical information shall be provided that demonstrates that these SSCs are appropriate for any reactor technology proposed for the site. Examples of such SSCs include water treatment plants, excavation and condenser cooling structures.</p>  <p>The following shall be provided in the description of the project:</p>
<ul>
<li>a labelled map or series of maps showing the location of the project</li>
<li>a map of the site with the layout locations (if possible) of the proposed structures determined for the site at the post-construction stage</li>
</ul>  <p>The ultimate purpose of the facility shall be described. This shall include the total facility capacity (in Megawatts thermal [MWth] and/or Megawatts electric [MWe]), and the total number of nuclear units to be located at the site.</p>  <p>Selection of a specific facility technology is not required when submitting a licence to prepare site application. However, a licence to prepare site may be issued with conditions that restrict activities to those which are not technology dependent, until such time as the applicant chooses a facility technology. Therefore, projects considering several technologies shall identify those site activities proposed to be undertaken under a licence to prepare site which are not impacted by the technology choice, as well as those which are.</p>  <p>The bounding parameters that encompass all technologies under consideration shall be considered in the preparation of a site. Sufficient design information that is necessary for the proposed facility shall be supplied to support proposed site preparation activities such as, plant footprint excavation, and excavation of cooling water intake tunnels.</p>  <h4>Guidance</h4>  <p>The activity to be licensed is "site preparation" &ndash; preparing a site for the construction and operation of a reactor facility (specify anticipated thermal power output) &ndash; followed by the eventual decommissioning and abandonment of the site.</p>  <p>The projected in-service dates for each unit should be provided.</p>
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
<h3 id="sec4-2">4.2	Applicant information</h3>  <p>Applicable regulatory basis:</p>
<ul>
<li><em>Nuclear Safety and Control Act</em>, paragraph 24(4)(a)</li>
<li><em>General Nuclear Safety and Control Regulations</em>, paragraphs 3(1)(a), 15(a), 15(b), 15(c)</li>
<li><em>Class I Nuclear Facilities Regulations</em>, paragraph 3(c)</li>
</ul>  <p>The full legal name of the applicant&#39;s business entity shall be provided. Legal documentation demonstrating the validity of the business entity shall be supplied. The applicant&#39;s business address shall be a civic address in Canada, and documentation shall be provided validating the applicant&#39;s address.</p>  <h4>Guidance</h4>  <p>The applicant is the organization accountable for compliance with the NSCA, its associated regulations and the conditions of the licence to prepare site.</p>  <p>Examples of such evidence should contain the applicant&#39;s full legal name and include:</p>
<ul>
<li>municipal tax statement</li>
<li>copy of a licence used at the address</li>
<li>articles of incorporation</li>
</ul>  <p>The following documents are considered to be acceptable for providing proof of ownership or authority from the landowner to conduct the licensed activity on the site:</p>
<ul>
<li>evidence that the applicant is the owner of the site or has authority from the owner of the site to carry on the activity to be licensed</li>
<li>as proof of site ownership:
<ul>
<li>land title or registry office documentation</li>
<li>legal drawing (signed by a registered land surveyor) of the site showing the proposed exclusion area boundary and significant features in the vicinity of the site (such as major transportation routes, large industrial facilities); or</li>
</ul></li>
<li>as proof of authority from owner to conduct activities on the site:
<ul>
<li>legal agreement with the land owner for activities that will include site preparation and eventual construction and operation of the facilities described per paragraph 3(b) of the Class I Nuclear Facilities Regulations in the application for licence to prepare site</li>
<li>land owner&#39;s land title or registry office documentation</li>
<li>legal drawing (signed by a registered land surveyor) of the site showing the proposed exclusion area boundary and significant features in the vicinity of the site (such as major transportation routes, large industrial facilities)</li>
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
<div id="4.3"></div>
<h3 id="sec4-3">4.3	Nuclear substances</h3>  <p>Applicable regulatory basis:</p>
<ul>
<li><em>General Nuclear Safety and Control Regulations</em>, paragraph 3(1)(c)</li>
<li><em>Nuclear Substance and Radiation Devices Regulations</em> (NSRDR)</li>
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
<h4 id="sec4-3-1">4.3.1	General considerations</h4>  <p>For any activities that may use  radioactive or nuclear substances during site preparation activities, and that are not exempt from a licence by the NSRDR, it shall be stated whether the substances will be encompassed by their own CNSC nuclear substance and device licences, or encompassed by the licence to prepare site. Any activities using radioactive or nuclear substances outside of the licence to prepare site need a separate licence.</p>  <h5>Guidance</h5>  <p>"Nuclear substance" is defined in section 2 of the NSCA. It is not expected that activities encompassed by the licence to prepare site will involve the handling of radioactive or nuclear substances.</p>
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
<h2 id="sec5">5. Public Information and Aboriginal Engagement</h2>
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
<h3 id="sec5-1">5.1 Public information and disclosure program</h3>  <p>Applicable regulatory basis:</p>
<ul>
<li><em>General Nuclear Safety and Control Regulations</em>, paragraph 3(1)(m)</li>
<li><em>Class I Nuclear Facilities Regulations</em>, paragraph 3(j)</li>
</ul>  <p>Applicants shall develop and implement a public information and disclosure program and submit it to the CNSC. RD/GD-99.3, <em>Public Information and Disclosure</em>, provides guidance on how licensees and licence applicants can meet the regulatory requirements by providing explanatory information, process and procedural guidance, and examples of good practices currently in use in the nuclear sector.</p>  <h4>Guidance</h4>  <p>The primary goal of the program, as it relates to the licensed activities, is to ensure that information related to the health, safety and security of persons and the environment are effectively communicated to the public. As a component, the program will need to include a commitment to and protocol for ongoing, timely communication of information related to the licensed activity during the course of the licence period.</p>  <p>In an application for a licence to prepare site, the licensee or applicant should demonstrate that ongoing engagement with identified target audiences, as described in RD/GD-99.3, will be continued from construction site evaluation activities and integrated into future operational activities.</p>  <p>As the program is designed and intended for the public, the information should be presented in a manner that is understandable to the general public, using plain, non-technical language when possible. The program needs to be commensurate with the public&#39;s perception of risk and the level of public interest in the licensed activities.</p>
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
<h3 id="sec5-2">5.2 Aboriginal engagement</h3>  <p>Applicable regulatory basis:</p>
<ul>
<li><em>General Nuclear Safety and Control Regulations</em>, subsection 3(1.1)</li>
<li><em>Class I Nuclear Facilities Regulations</em>, paragraph 3(j)</li>
<li><em>Constitution Act, 1982</em>, section 35</li>
</ul>  <p>REGDOC-3.2.2, <em>Aboriginal Engagement</em>, sets out CNSC&#39;s requirements and guidance for Licensees about their engagement activities. When needed, licensees shall submit the following to the CNSC:</p>
<ul>
<li>an Aboriginal engagement plan and report, including a summary of any Aboriginal engagement activities conducted to date, and a proposed schedule for interim reporting to the CNSC</li>
<li>a material change update</li>
</ul>  <h4>Guidance</h4>  <p>The CNSC, as an agent of the Crown, has a duty to consult and, where appropriate, accommodate when the Crown contemplates conduct that might adversely impact potential or established Aboriginal or treaty rights.</p>   <p>While licence applicants and existing licensees of nuclear projects do not bear the Crown&#39;s legal obligation to consult Aboriginal peoples under subsection 35 of the <em>Constitution Act, 1982</em>, their role to engage Aboriginal peoples is important to the efficacy of the Commission&#39;s decision-making. The outcome of all such activities, including any proposed accommodation measures by the licensee, will also form part of the evidence presented by licensees for consideration by the Commission.</p>  <p>Early engagement with Aboriginal groups by the applicant can enhance relationships, promote trust, improve understanding of the project by the potentially affected Aboriginal groups, and help the applicant to understand the interests of those in the affected region.</p>
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
<h3 id="sec5-3">5.3	Intergovernmental consultation</h3>  <h4>Guidance</h4>  <p>A summary of the results of consultation with all levels of government, to indicate their intended involvement and support for the project, should be provided.</p>  <p>Federal consultation should include any consultation with other national governments, if the proposed project may have interfaces with or potential environmental impacts on jurisdictions outside Canada.</p>  <p>The summary should provide an overview of those outstanding issues resulting from consultations that must be resolved before the project can proceed.</p>
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
<h2 id="sec6">6. Management System</h2>  <p>Applicable regulatory basis:</p>
<ul>
<li><em>General Nuclear Safety and Control Regulations</em>, paragraph 3(1)(k)</li>
<li><em>Class I Nuclear Facilities Regulations</em>, paragraph 3(d)</li>
</ul>  <p>The management system shall have provisions for effective management of design, construction, commissioning and technical support functions (including contractor management) being performed under the licence to prepare site so as to promote and assure safety.</p>  <p>Management system arrangements shall demonstrate adherence to CSA N286, <em>Management system requirements for nuclear facilities</em>, or equivalent standard established in the licensing basis, as applicable to the relative project phase.</p>  <p>In cases where there may be the need for early procurement of SSCs to accommodate early use or long (critical path) procurement spans (e.g., long-lead items), the respective design and safety analysis, and supply chain programs, processes and procedures shall be in place.</p>   <p>Where the applicant plans for a different management system and organizational structure for the future construction and operation of the plant, the overall arrangements &ndash; including those for the transition to construction to commissioning to ensure continuity &ndash; shall be provided.</p>   <h3>Guidance</h3>  <p>The management system is the framework of processes, procedures and practices used to ensure the organization can fulfill all tasks required to achieve its objectives and ensure safety.</p>  <p>The management system integrates safety, health, environmental, and security elements to ensure that safety is properly taken into account in all of an organization&#39;s activities. The management system&#39;s main objective is to ensure, by considering the implications of all actions not within separate management systems but with regard to safety as a whole, that safety is not compromised.</p>  <p>The management system for the licensee or licence applicant assures that it is responsible for the oversight of contractor activities, ensuring that all licensed activities are carried out in compliance with the NSCA and its associated regulations and licence conditions. Where site preparation activities will be executed by contractors external to the applicant&#39;s organization, the applicant&#39;s/licensee&#39;s oversight of contractor activities should be documented, including:</p>
<ul>
<li>contractor&#39;s site preparation organization, showing the line of accountability to the applicant organization</li>
<li>organization chart for the site activities for which the contractor is responsible</li>
<li>contractor&#39;s level of authority for site activities</li>
<li>oversight provisions by the licensee/applicant for the activities of the contractors</li>
</ul>  <p>The management system includes:</p>
<ul>
<li>appropriate provisions for integrating safety, health, environmental protection, security, and quality for all site preparation activities, and to understand and promote a safety culture</li>
<li>measures taken to ensure the implementation and observance of the management system programs, processes, procedures and practices</li>
<li>provisions for personnel responsible for compliance to have direct access to senior levels of the applicant or licensee&#39;s management structure, to ensure that their needs and concerns receive adequate consideration</li>
<li>a description of the applicant&#39;s site preparation organization for each aspect of the site preparation program, including the corporate and site management structures, and the position titles of the persons responsible for the management and control of each program</li>
<li>management system documentation that describes the corporate and site management structures of the applicant/licensee, major technical support organizations, designer, and major contractors and sub-contractors</li>
</ul>  <p>The management system sets expectations for, and supports, human performance and is instrumental in understanding and promoting a safety culture. It provides the means by which work is to be carried out safely and the processes to understand and improve the safety culture. These provisions extend to contracted workers who are implementing activities under the oversight of the applicant organization.</p>  <p>Refer to RD/GD-369, <em>Licence Application Guide, Licence to Construct a Nuclear Power Plant</em>, section 8.3.1 for guidance on long-lead items.</p>  <p>Refer to the general considerations and the operations management processes in RD/GD-369 for guidance on management system and management structure for future project steps. Provisions for decommissioning should also be outlined.</p>
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
<h3 id="sec6-1">6.1	Management system considerations for the design of the nuclear facility &ndash; design control measures</h3>  <p>Applicable regulatory basis:</p>
<ul>
<li><em>Class I Nuclear Facilities Regulations</em>, paragraph 4(d)</li>
</ul>   <p>The design programs, processes, procedures and practices for the selected facility technology shall satisfy the applicable criteria for management systems established in the licensing basis such as the following as applicable:</p>
<ul>
<li>REGDOC-2.5.2, <em>Design of Reactor Facilities: Nuclear Power Plants</em> or <em>RD-367, Design Requirements for Small Reactors</em></li>
<li>CSA N286, <em>Management system requirements for nuclear facilities</em></li>
</ul>   <p>Where the applicant and reactor technology organization&#39;s design programs, processes procedures and practices are structured to standards other than CSA N286, information shall be provided that demonstrates how these satisfy the applicable criteria of CSA N286.</p>  <p>Applicable portions of the management system shall be in place before undertaking any design activities.</p>   <h4>Guidance</h4>  <p>At this stage in the project lifecycle, it is important to ensure that design activities are managed according to the design organization&#39;s management system for the reactor technologies under consideration. Design control measures, in the form of management system processes, procedures and practices, ensure consistent quality of the design of facility systems, structures and components. High-quality design and design management minimize latent design flaws, which may manifest themselves as safety issues later in the plant&#39;s life.</p>   <p>The design organization, if different than the applicant, must have a management system compliant with the requirements in CSA N286.</p>  <p>Design includes and is not limited to:</p>
<ul>
<li>technical activities that start with the identification of conceptual input and produce documentation</li>
<li>process and the result of developing the concept, detailed plans, supporting calculations and specifications for a nuclear facility and its parts</li>
<li>engineering/technical and safety analyses and assessments</li>
</ul>  <p>Design management includes and is not limited to:</p>
<ul>
<li>demonstration of sufficient competent managerial and suitably qualified and experienced technical staff to carry out its safety functions, make safety judgments and to comply with any regulatory requirements</li>
<li>that there are adequate control and supervision arrangements to be able to demonstrate that the responsible authority is in control of its undertakings</li>
<li>provisions to:
<ul>
<li>monitor performance, compliance, cultural attitudes and behaviours, and take appropriate action (monitoring may include audits, surveillance, surveys and participation in design verification activities)</li>
<li>determine that there are adequate numbers of suitably trained, qualified and experienced staff</li>
<li>verify that the technology, tools and methods used are proven and state-of-the-art</li>
<li>assess the technical and safety assessment capabilities in the context of the reactor technology organization being an intelligent user of consortium members and subcontractors</li>
<li>ensure the product and/or work produced is of appropriate quality, through review and acceptance of engineering deliverables</li>
<li>understand the relevance of the product and/or work to the relevant safety case or safety cases</li>
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
<div id="6.1.1"></div>
<h4 id="sec6-1-1">6.1.1	Application for licence to prepare site where the selection of a specific facility design is deferred</h4>  <p>Where the applicant/licensee plans to proceed with site preparation using another organization until the selection of a reactor technology and a contract is in place, information shall be provided that demonstrates that the contractor organization has the capability to design environmental measures.</p>  <h5>Guidance</h5>  <p>Examples of environmental measures include the design of flood protection and erosion control, as well as design of adequately supporting structures and civil works.</p>  <p>In cases where the selection of a specific facility design is deferred, the management system should include:</p>
<ul>
<li>programs, processes, procedures, execution plans, etc. for the selected project execution model and contracting strategy</li>
<li>description of the organization including interrelationships, areas of responsibility, where the applicant retains and exercises overall project and management system responsibility, limits of authority and boundaries between the applicant, designer (usually the design authority up to some point during facility construction and commissioning), major technical support organizations, constructor and consortium members and major sub-contractors</li>
<li>provisions for assuring effective management control has been and will continue to be exercised for the design (including the design authority), to promote and assure the safety aspects of work being performed</li>
<li>provisions for assuring proper implementation and observance of the management system</li>
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
<div id="6.1.2"></div>
<h4 id="sec6-1-2">6.1.2	Application for licence to prepare site where a specific facility design has been selected</h4>  <h5>Guidance</h5>  <p>For reactor technologies under consideration whose design parameters are included in the application for a licence to prepare site, the design management system of the reactor vendor should be assessed to ensure it meets the requirements of CSA N286.</p>
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
<h3 id="sec6-2">6.2	Management system considerations for site evaluation</h3>  <p>Site evaluation work shall be carried out in accordance with the requirements and guidance for management systems described in section 6 of part A and in section 23 of part B.</p>  <h4>Guidance</h4>  <p>The assessment of the results of the site evaluation is a key part of the activities carried out under a licence to prepare site. As described in part B, site evaluation work will need to be carried out before submitting an application for a licence to prepare site.</p>  <p>Refer to sections A.4 of appendix A for additional requirements and guidance.</p>
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
<h3 id="sec6-3">6.3	Management system considerations for the security program</h3>  <p>The management for the security program shall provide oversight, management and control, with documented policies and procedures under the licence to prepare site.</p>   <h4>Guidance</h4>  <p>The management system for the security program includes:</p>
<ul>
<li>the proposed structure and organization of the security officer service that should be documented, including the duties, responsibilities and training of security officers</li>
<li>a description of the site security policy, including a list of reference documents, that demonstrates the security quality assurance program is integrated into the overall quality assurance program and meets applicable requirements of the management system established in the licensing basis such as CSA N286, <em>Management system requirements for nuclear facilities</em>. A graded approach should be used. The program should take into account the increasing complexity of the project as it evolves.</li>
<li>a demonstration that the proposed security program has considered the applicable quality assurance criteria contained in ISO 17799:2005, <em>Information Technology &ndash; Security Techniques &ndash; Code of Practice for Information Security Management</em></li>
<li>a description of security measures, procedures and processes that ensure that the required quality is defined and consistently achieved within the security policy</li>
<li>documentation of how site personnel will be trained in security (high-level training strategy), measured and maintained, including measures to ensure that all security personnel are skilled, knowledgeable and accountable in performing assigned tasks and responsibilities</li>
<li>information on the security system and subsystem availability program, including provisions for documentation and archiving, and maintaining records of functional testing and routine field testing</li>
</ul>  <p>Refer to sections A.4 of appendix A for additional requirements and guidance.</p>
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
<h2 id="sec7">7. Operating Performance &ndash; Conduct of the Licensed Activity</h2>  <p>Applicable regulatory basis:</p>
<ul>
<li><em>Class I Nuclear Facilities Regulations</em>, paragraphs 3(e), 4(a), 4(e)</li>
</ul>  <p>For activities to be conducted under the licence to prepare site, the risks to health, safety and the environment that may be encountered by workers and the public shall be characterized.</p>   <p>The applicant shall outline the strategy that the applicant will take (including development of mitigation measures) upon discovery of additional risks to the health and safety of the public that were not anticipated during the licence application process.</p>  <h3>Guidance</h3>  <p>These risks are generally similar to those encountered during pre-construction activities at a conventional large-scale construction project. Risks include:</p>
<ul>
<li>noise hazards, primarily from blasting activities and operation of heavy machinery</li>
<li>dust from overburden and rock removal and movement</li>
<li>chemical hazards from fuel spills, and conventional chemicals used during the construction of non-nuclear plant structures</li>
<li>mechanical hazards from excavation, earth movement, road building, etc.</li>
<li>ground vibration and flying rock hazards from blasting activities</li>
<li>electrical hazards from establishing construction electrical infrastructure</li>
</ul>  <p>The risks to the health and safety of workers and the public resulting from the activities encompassed by the licence to prepare site should be assessed. This includes consideration of accidents and malfunctions that could occur during site preparation activities including those that might originate from adjacent nuclear facilities, where applicable.</p>   <p>Where risks to health and safety of either workers or the public could be higher than for a conventional project, credible research supporting the potential consequences, and measures to mitigate the risks should be provided. For example, if site investigation has indicated the presence of a sub-surface hazardous substance, an investigation of the effects of that substance, if unearthed, on the health and safety of workers and the local public should be provided in the submissions.</p>  <p>Refer to part A, section 10 for further information regarding radiation protection aspects.</p>
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
<h2 id="sec8">8. Safety Analysis</h2>  <p>Applicable regulatory basis:</p>
<ul>
<li><em>Class I Nuclear Facilities Regulations</em>, paragraph 4(e)</li>
</ul>  <p>For the purposes for a licence to prepare site, a hazard analysis focusing on activities under this licence shall be conducted. For information to support the hazard analysis, refer to section 11 on conventional health and safety and section 13.1 on environmental risk assessment.</p>
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
<h2 id="sec9">9. Physical Design</h2>
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
<h3 id="sec9-1">9.1 Civil structures and civil works</h3>  <p>Design measures pertaining to site preparation activities, such as flood protection and erosion control, shall be described. In addition, any safety-important civil work carried out during site preparation and on civil structures used in site preparation (e.g., containment dykes, retaining walls, earthworks) shall be described.</p>
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
<h3 id="sec9-2">9.2	Description of the exclusion zone and proposed layout of structures within the zone</h3>  <p>Applicable regulatory basis:</p>
<ul>
<li><em>General Nuclear Safety and Control Regulations</em>, paragraph 3(d)</li>
<li><em>Class I Nuclear Facilities Regulations</em>, paragraphs 3(a) and 3(b)</li>
<li><em>Nuclear Security Regulations</em>, paragraph 3(b)</li>
</ul>  <p>As per section 1 of the <em>Class I Nuclear Facilities Regulations</em>, "exclusion zone" means a parcel of land within or surrounding a nuclear facility on which there is no permanent dwelling and over which a licensee has the legal authority to exercise control.</p>  <p>The exclusion zone size is characterized based on a combination of dose limits, security and robustness design considerations, and emergency preparedness considerations that are affected by the land use around the site.</p>   <p>The following criteria (for an operating unit) shall be considered in determining the size of the proposed exclusion zone:</p>
<ul>
<li>committed whole-body dose for average members of the critical groups who are most at risk at or beyond the exclusion zone boundary, is calculated in the deterministic safety analysis for a period of 30 days after the analyzed event</li>
<li>under normal operating conditions, the effective dose at the exclusion zone boundary to a person who is not a nuclear energy worker shall not exceed 1 mSv over the period of one calendar year</li>
<li>under anticipated operational occurrence (AOO) conditions, the effective dose at the exclusion zone boundary to a person who is not a nuclear energy worker shall not exceed 0.5mSv over the release time due to the AOO</li>
<li>under design-basis accident (DBA) conditions, the effective dose at the exclusion zone boundary to a person who is not a nuclear energy worker shall not exceed 20 mSv over the release time due to the DBA</li>
<li>demonstration that the dispersion model used for the dose calculations is not unduly impacted by the proximity of the nuclear facility to the exclusion boundary</li>
</ul>  <p>Information shall be provided that clearly demonstrates that the applicant has the legal authority to exercise control over activities conducted inside the exclusion zone (refer to part A, section 4.2 of this document).</p>  <p>Information related to security and robustness design considerations, and emergency preparedness considerations also supports the establishment of the exclusion zone boundary.</p>  <p>Refer to part A, sections 9 and 15, as well as part B, section 21 for requirements and guidance on these aspects.</p>  <p>The proposed layout of structures within the exclusion zone shall be presented in its final layout state, to the extent practicable.</p>   <p>For each proposed plant design and proposed layout(s) of areas, structures and systems of the nuclear facility(ies), the following information shall be provided:</p>
<ul>
<li>satellite photographs of the site and surrounding region, with a resolution scale of 1:1,440 or better, including the proposed exclusion zone and site boundary</li>
<li>topographical map(s) for each site layout in 1:50,000 to no smaller than 1:250,000 scale for all structures and associated infrastructure (all drawings are to scale and include a legend)</li>
<li>proposed layouts of labelled structures, such as:
<ul>
<li>reactor building</li>
<li>turbine-generator block</li>
<li>auxiliary power buildings (e.g., diesels) and related fuel storage</li>
<li>switchyard</li>
<li>cooling tower structures, water intakes and outlets</li>
<li>large structures (e.g., shops or parts stores) in the immediate vicinity to the proposed NPP</li>
</ul></li>
<li>proposed conventional and radiological waste transfer and storage areas</li>
<li>layouts of all site roads and proposed transmission corridors</li>
<li>locations of transportation corridors in the vicinity of the site (e.g., rail lines, shipping lanes, roads, proximity to airports)</li>
</ul>  <p>Note: While map and photograph resolution criteria may be driven by security needs, submissions are not considered to be prescribed information under the NSCA.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="9.3"></div>
<h3 id="sec9-3">9.3	Case for the exclusion zone</h3>  <p>There are two acceptable approaches that the applicant may consider in determining the location of the exclusion zone boundary. In both cases, site characterization information is to be used, as described below.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="9.3.1"></div>
<h4 id="sec9-3-1">9.3.1	Approach 1: Simplified exclusion boundary case</h4>  <p>A specific distance for the boundary from the facility may be selected, based on predicted bounding values for radiological dose and exposures to hazardous substances (along with assumptions of facility robustness and emergency preparedness capabilities of the site and surrounding area). Key considerations are:</p>
<ul>
<li>this approach requires only a high level of knowledge of the facility designs being considered</li>
<li>if assumptions are correct, the boundary location will be conservatively located and will maximize options for locating structures on the site</li>
<li>the site footprint may be larger than that used for approach 2</li>
</ul>  <p>There may be implications for the construction and operations phases. At a later licensing stage, it may be determined that the exclusion zone boundary is too close to the facility, or the assumptions regarding releases to the environment during normal and accident conditions are not met. Mitigating actions may be required; these could include facility design changes or changes to the facility&#39;s operating parameters. An extension of the exclusion zone boundary later in the licensing process would likely involve significant regulatory reviews, because of the relationship between the exclusion zone boundary and technical areas such as security and emergency preparedness.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="9.3.2"></div>
<h4 id="sec9-3-2">9.3.2	Approach 2: Comprehensive exclusion boundary case</h4>  <p>Using a systematic process, a detailed case is developed for the exclusion zone boundary location, based on predicted values for radiological dose and exposures to hazardous substances (along with assumptions of facility robustness and emergency preparedness capabilities of the site and surrounding area). Key considerations are:</p>
<ul>
<li>greater certainty that the design(s) proposed for the site will not require extensive design changes to meet exclusion zone radiological dose and hazardous substances exposures criteria</li>
<li>optimization of the site footprint from the onset of the project</li>
<li>a detailed exclusion zone case must rely on detailed facility design information; for example:
<ul>
<li>descriptions of all major SSCs that could significantly influence the course or consequences of principal types of accidents and malfunctions</li>
<li>impacts of facility on emergency preparedness</li>
<li>security considerations</li>
</ul></li>
</ul>  <p>Refer to the following sections for additional requirements and guidance:</p>
<ul>
<li>Part B, section 17.4, 17.5</li>
<li>Appendix A, section A.7</li>
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
<div id="9.4"></div>
<h3 id="sec9-4">9.4	Protective zones</h3>  <p>The protective zone is the area beyond the exclusion zone that should be considered with respect to implementing emergency measures. This includes consideration of such matters as population distribution and density, residential development and sensitive public facilities, land and water usage, roadways, evacuation planning, and consequence analysis.</p>  <p>Establishment of a protective zone should take the following into account:</p>
<ul>
<li>the planning basis as described in REGDOC-2.10.1, <em>Nuclear Emergency Preparedness and Response</em></li>
<li>population density, characterization and distribution within the protective zone, with particular focus on existing and projected population densities and distributions in the region including resident populations and transient populations (this data is to be kept up to date over the lifetime of the reactor facility)</li>
<li>present and future use of land and resources</li>
<li>physical site characteristics that could impede the development and implementation of emergency plans (for example, the ability to deliver fuel in a timely manner to backup generators)</li>
<li>populations in the vicinity of the reactor facility that are, or may become, difficult to evacuate or shelter (i.e., schools, prisons, hospitals)</li>
<li>ability to maintain population and land-use activities in the protective zone at levels that will not impede implementation of the emergency plans</li>
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
<div id="10"></div>
<h2 id="sec10">10. Radiation Protection</h2>  <p>Applicable regulatory basis:</p>
<ul>
<li><em>Radiation Protection Regulations</em></li>
<li><em>General Nuclear Safety and Control Regulations</em>, paragraphs 3(e), 3(f), 29(1)(b), 17(d), and 17(e)</li>
<li><em>Class I Nuclear Facilities Regulations</em>, paragraph 3(g)</li>
</ul>  <p>In the event that nuclear substances are encountered during activities carried out under the licence to prepare site (e.g., such as situations described in this section of this document), radiation protection measures shall be implemented.</p>   <p>Where applicable, the doses to workers and the public associated with activities to be encompassed by the licence to prepare site, or from exposures to any radioactive substances resulting from past or present nuclear activities (for example, discovery of contaminated soils during excavation) shall be evaluated.</p>   <p>In the event that radioactive substances are encountered, the dose assessment shall demonstrate that the predicted annual effective dose, including the committed effective dose associated with annual intakes of radionuclides, to persons during site preparation will:</p>
<ul>
<li>not exceed the applicable dose limits of the <em>Radiation Protection Regulations</em></li>
<li>be as low as reasonably achievable (ALARA)</li>
</ul>  <p>Any associated mitigation measures that are technically and economically feasible shall be considered. In particular, engineering controls to be applied to reduce the magnitude of each source, and work practices aimed at controlling radiation exposure of workers, shall be identified and mitigation measures adopted, as appropriate.</p>   <h3>Guidance</h3>  <p>The radiation protection measures should address the information provided in RD/GD-369, section 11 and be commensurate with the hazards that may be encountered.</p>  <p>The <em>Nuclear Substance and Radiation Devices Regulations</em> address the activities that involve the use of devices or nuclear substances (such as radiography) and the conditions for that activity, including radiation protection.</p>
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
<h2 id="sec11">11. Conventional Health and Safety</h2>  <p>Applicable regulatory basis:</p>
<ul>
<li><em>Class I Nuclear Facilities Regulations</em>, paragraphs 3(f) and 4(e)</li>
</ul>  <p>The production and use of nuclear energy is under federal jurisdiction. When in the presence of a federal undertaking, and integral to the operation and management of that undertaking, the labour relations and working conditions &ndash; which includes occupational health and safety (OHS) &ndash; fall under federal jurisdiction. The regulation of OHS in nuclear power plants may involve three regulatory agencies, including:</p>
<ul>
<li>Employment and Social Development Canada (ESDC)</li>
<li>the provincial ministry of labour where the site is located</li>
<li>CNSC</li>
</ul>  <p>Governance of OHS matters is determined by analyzing and identifying the applicable jurisdiction for each case. Although OHS matters at nuclear facilities usually fall under the responsibility of the labour program at ESDC, provincial licensee organizations that operate nuclear facilities benefit from provincial Crown immunity unless it is displaced by law. This excludes federal jurisdiction over OHS matters at nuclear facilities that are operated by provincial crown corporations.</p>   <p>For provinces and territories where the governance over OHS matters has not been formally assigned by law, jurisdiction and governance over OHS issues remain with ESDC, and the applicable <em>Canada Labour Code, Part II</em>.</p>  <p>OHS programs shall be developed, implemented and maintained to prevent occupational injuries and illnesses.</p>   <p>Under the OHS program, OHS hazards shall be identified, associated risks assessed, and the necessary materials, equipment, programs and measures put in place to effectively manage, control and minimize those risks.</p>  <p>The occupational health and safety policies and procedures of the licensee, or contractors engaged by the licensee for purposes of site preparation, shall be compliant with the applicable provincial/territorial requirements.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="11.1"></div>
<h3 id="sec11-1">11.1 Health and safety organization</h3>  <p>Applicable regulatory basis:</p>
<ul>
<li><em>General Nuclear Safety and Control Regulations</em>, paragraph 3(1)(k)</li>
</ul>  <p>The health and safety organization shall:</p>
<ul>
<li>adequately execute the proposed worker health and safety policies and procedures described in sections 6 and 7 of this regulatory document</li>
<li>be qualified and make adequate provision for the protection of the health and safety of persons</li>
</ul>   <p>This includes, but is not limited to:</p>
<ul>
<li>demonstrating adequate oversight of the site OHS program</li>
<li>ensuring compliance with applicable OHS regulations and requirements</li>
<li>ensuring adequate OHS training of persons involved in site preparation activities</li>
<li>having capabilities for reporting and investigation of incidents and significant events</li>
</ul>  <p>The proposed health and safety organization shall meet the requirements in the applicable provincial or federal codes.</p>
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
<h2 id="sec12">12. Emergency Management and Fire Protection</h2>  <p>Applicable regulatory basis:</p>
<ul>
<li><em>General Nuclear Safety and Control Regulations</em>, paragraph 3(1)(k)</li>
<li><em>Class I Nuclear Facilities Regulations</em>, paragraph 3(f)</li>
</ul>  <p>To protect the health and safety of all persons who may be at the licensed site, management support for the implementation and maintenance of the emergency preparedness program, the financial and personnel resources, and oversight of the emergency preparedness program shall be commensurate with the hazards on the licensed site.</p>  <p>Where emergency response resources are shared between the site and other nearby nuclear facilities, the site shall maintain sufficient complement to adequately address emergency response needs.</p>  <p>The emergency preparedness program shall ensure that there is an adequate response capability to respond to and mitigate the emergency situations that could occur at the site, including malevolent acts, accidents and malfunctions for the site preparation phase.</p>  <p>Details of the site emergency response organizations of the applicant and other applicable organizations, including the numbers and positions of all site staff assigned emergency response duties, shall be provided.</p>  <h3>Guidance</h3>  <p>Activities performed at this stage in the development of a future nuclear site are similar to those found at any large-scale construction/land development project; however, because the undertaking is a licensed activity under the NSCA, the applicant must clearly demonstrate the protection of the health and safety of persons and the environment as well as the maintenance of national security.</p>  <p>An emergency response plan is required for the licence to prepare site, in order to ensure that adequate and timely emergency assistance is available to protect workers, the public and the integrity of site security, while mitigating adverse environmental impacts during project activities.</p>  <p>Hazards of a malevolent nature are not described here, but the results of such hazards are likely to be similar to accidents and malfunctions.</p>  <p>The proposed nuclear emergency preparedness program and response plans should consider REGDOC 2.10.1, <em>Nuclear Emergency Preparedness and Response</em>, as applicable for site preparation.</p>  <p>The program should contain the following elements:</p>
<ul>
<li>a training program for emergency response personnel, commensurate with evolving hazards at the site</li>
<li>site hazard change program that, when implemented, can inform emergency preparedness staff of changing hazards on the licensed site to maintain adequate emergency response capability for all potential accident situations; a sufficient notification process should be implemented to allow emergency response organizations to adequately prepare prior to the introduction of new hazards on the licensed work site</li>
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
<div id="13"></div>
<h2 id="sec13">13. Environmental Protection</h2>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="13.1"></div>
<h3 id="sec13-1">13.1 Environmental risk assessment</h3>  <p>Applicable regulatory basis:</p>
<ul>
<li><em>Class I Nuclear Facilities Regulations</em>, paragraphs 3(h), 3(j), 4(a), 4(b), 4(c), 4(e)</li>
</ul>  <p>Applications for new reactor facilities shall have an environmental risk assessment (ERA). ERAs are defined and described in draft REGDOC-2.9.1, <em>Environmental Protection: Environmental Policy, Assessments and Protection Measures</em>.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="13.2"></div>
<h3 id="sec13-2">13.2 Environmental management system</h3>  <p>Applicable regulatory basis:</p>
<ul>
<li><em>Class I Nuclear Facilities Regulations</em>, paragraphs 3(g), 3(h), 4(e)</li>
</ul>  <p>Environmental protection policies, program and procedures shall demonstrate consideration of the project&#39;s environmental risk assessment.</p>  <p>The proposed environmental protection policies, programs and procedures are required for the licence to prepare site. Environmental protection policies, program and procedures shall address P-223, <em>Protection of the Environment</em> (or successor documents), REGDOC-2.9.1, <em>Environmental Protection: Environmental Policy, Assessments and Protection Measures</em> (draft), and CAN/CSA ISO 14001, <em>Environmental Management Systems &ndash; Requirements with Guidance for Use</em> (2004) (or successor document).</p>  <h4>Guidance</h4>  <p>An environmental management system (EMS) refers to the management of an organization&#39;s environmental policies, measures and procedures in a comprehensive, systematic, planned and documented manner. It includes the organizational structure, planning and resources for developing, implementing and maintaining policy for environmental protection.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="13.3"></div>
<h3 id="sec13-3">13.3 Effluent and emissions control and monitoring</h3>  <p>Applicable regulatory basis:</p>
<ul>
<li><em>General Nuclear Safety and Control Regulations</em>, paragraphs 12(1)(c), 12(1)(f)</li>
<li><em>Class I Nuclear Facilities Regulation</em>, paragraphs 3(e), 3(g), 3(h), 3(j), 4(a), 4(b), 4(c), 4(d), 4(e)</li>
<li><em>Radiation Protection Regulations</em>, paragraph 4(b)</li>
</ul>  <p>All reasonable precautions shall be taken to control and monitor the release of radioactive nuclear substances or hazardous substances to the environment and ensure that licence limits are being respected.</p>  <p>Releases of nuclear substances or hazardous substances to the environment shall be kept as low as reasonably achievable (ALARA), social and economic consideration taken into account.</p>  <p>The proposed effluent monitoring program is required for the licence to prepare site. The effluent monitoring program shall address the clauses of CSA Group, Standard N288.5-11, <em>Effluent monitoring program at Class I nuclear facilities and uranium mines and mills</em>, or equivalent standard, as appropriate to the licence to prepare site project phase.</p>  <p>In addition, the design of the effluent monitoring program shall take into consideration:</p>
<ul>
<li>effluent and emissions monitoring recommended in an ERA</li>
</ul>   <h4>Guidance</h4>  <p>The effluent monitoring program should also address the following:</p>
<ul>
<li>CSA Group, N288.1-14, <em>Guidelines for calculating derived release limits for radioactive material in airborne and liquid effluents for normal operation of nuclear facilities</em></li>
<li>CSA Group, N288.2-14, <em>Guidelines for calculating radiation doses to the public from a release of airborne radioactive material under hypothetical accident conditions in nuclear reactors</em></li>
<li>CNSC, G-219, <em>Decommissioning Planning for Licensed Activities</em></li>
<li>CNSC, G-228, <em>Developing and Using Action Levels</em></li>
<li>CNSC, REGDOC-2.9.1, <em>Environmental Protection: Environmental Policy, Assessments and Protection Measures</em> (draft)</li>
<li>IAEA Safety Guide No WS-G-2.3 <em>Regulatory Control of Radioactive Discharges to the Environment</em></li>
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
<div id="13.4"></div>
<h3 id="sec13-4">13.4 Environmental monitoring</h3>  <p>Applicable regulatory basis:</p>
<ul>
<li><em>General Nuclear Safety and Control Regulations</em>, paragraphs 12(1)(c), 12(1)(f)</li>
<li><em>Class I Nuclear Facilities Regulation</em>, paragraphs 3(e), 3(g), 3(h), 3(j), 4(a), 4(b), 4(c), 4(d), 4(e)</li>
<li><em>Radiation Protection Regulations</em>, paragraph 13(1), subsection 4(b)</li>
</ul>  <p>The proposed environmental monitoring program is an application requirement for a licence to prepare site. The environmental monitoring program shall address clauses of CSA Group Standard N288.4-10, <em>Environmental monitoring programs at Class I nuclear facilities and uranium mines and mills</em>, or equivalent standard, as appropriate to the licence to prepare site project phase and shall be managed within the environmental management system. The environmental monitoring programs, plans and/or data shall provide sufficient information in order to assess exposure or potential effects on human health and the environment due to contaminant releases or physical perturbations, and to ensure adherence to the licensing basis.</p>  <p>The design of the environmental monitoring program shall address the environmental interactions identified in the ERA related to the activities associated with the licence to prepare site project phase. The design shall also take into consideration:</p>
<ul>
<li>environmental monitoring recommended in an EA follow-up program</li>
<li>environmental monitoring recommended in an ERA</li>
<li>the proposed program to inform persons living in the vicinity of the site of the general nature and characteristics of the anticipated effects on the environment and the health and safety of persons that may result from the activity to be licensed required for potential future phases of the proposed project.</li>
</ul>  <h4>Guidance</h4>  <p>The environmental monitoring program should consider the following as applicable:</p>
<ul>
<li>CSA Group, N288.1-14, <em>Guidelines for calculating derived release limits for radioactive material in airborne and liquid effluents for normal operation of nuclear facilities</em></li>
<li>CSA Group, N288.6-12, <em>Environmental risk assessments at Class 1 nuclear facilities and uranium mines and mills</em></li>
<li>REGDOC-2.9.1, <em>Environmental Protection: Environmental Policy, Assessments and Protection Measures</em> (draft)</li>
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
<div id="14"></div>
<h2 id="sec14">14. Waste Management</h2>  <p>Information about waste management, decommissioning and financial guarantees is provided in sections 14.1 through 14.3 below.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="14.1"></div>
<h3 id="sec14-1">14.1 Hazardous substances/hazardous wastes</h3>  <p>Applicable regulatory basis:</p>
<ul>
<li><em>Class I Nuclear Facilities Regulations</em>, paragraphs 3(e), 4(a), 4(e)</li>
</ul>  <p><em>The General Nuclear Safety and Control Regulations</em> define a hazardous substance or hazardous waste as "a substance or waste, other than a nuclear substance, that is used or produced in the course of carrying on a licensed activity and that may pose a risk to the environment or the health and safety of persons."</p>  <p>Existing hazardous substances on the site that are identified during site evaluation, as well as the hazardous substances that will exist during activities encompassed by the licence to prepare site, shall be addressed in the development of the waste management program supporting site preparation.</p>  <p>The following shall be addressed in the description of the hazardous substances and hazardous wastes:</p>
<ul>
<li>quantities and physical characteristics (including hazards posed to health and safety) of each substance/waste, including by-products</li>
<li>if the substances or by-products are regulated or controlled, the appropriate list of regulations governing their control</li>
<li>transport, storage and use of hazardous substances</li>
<li>managing and disposing of hazardous wastes</li>
</ul>  <h4>Guidance</h4>  <p>All hazardous substances and hazardous wastes should be characterized in a list as follows:</p>
<ul>
<li>name of hazardous substance or hazardous waste</li>
<li>origin of hazardous substance or hazardous waste</li>
<li>if the substances or by-products are regulated or controlled, the appropriate list of regulations governing their control</li>
<li>anticipated quantity/volume and form</li>
<li>possible by-products that could evolve from the hazardous substance. hazardous waste and their interactions</li>
<li>hazard(s) to workers and the public that may be exposed to the hazardous substance or hazardous waste, or by products thereof</li>
<li>whether the hazardous substance or hazardous waste will be processed or disposed of at the site of the activity to be licensed or offsite</li>
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
<div id="14.2"></div>
<h3 id="sec14-2">14.2 Decommissioning</h3>  <p>Applicable regulatory basis:</p>
<ul>
<li><em>Class I Nuclear Facilities Regulations</em>, paragraph 3(k)</li>
</ul>  <p>Three areas of decommissioning shall be considered:</p>
<ul>
<li>Site evaluation from a decommissioning perspective: future decommissioning shall be considered in the site evaluation and planning for the nuclear facility.</li>
<li>End of life facility decommissioning shall address the requirements and guidance contained in section A.12.2 of appendix A as part of demonstrating that the proposed site is suitable for future development.</li>
<li>Activities encompassed by the licence to prepare site: a preliminary decommissioning plan and financial guarantee shall cover the scope of work and related costs to return the site from the conditions expected at the end of a licence to prepare site to an agreed-upon end state.</li>
</ul>  <h4>Guidance</h4>  <p>An adequate preliminary decommissioning plan ensures that the cost estimate associated with the financial guarantee can adequately decommission the facility to an acceptable end-state condition. ("Nuclear facility" refers to the site encompassed by the licence to prepare site in its expected state at the end of completion of site preparation activities.)</p>  <p>The proposed plan or plans for the decommissioning of the nuclear facility should consider guidance contained in G-219, <em>Decommissioning Planning for Licensed Activities</em> and CSA Group, N294, <em>Decommissioning of facilities containing nuclear substances activities</em>.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="14.3"></div>
<h3 id="sec14-3">14.3 Financial guarantee associated with the preliminary decommissioning plan</h3>  <p>Applicable regulatory basis:</p>
<ul>
<li><em>General Nuclear Safety and Control Regulations</em>, paragraph 3(1)(l)</li>
</ul>  <p>Financial guarantees under the licence to prepare site shall address restoration of the site should the project be discontinued. The amount of the proposed financial guarantee shall be sufficient to complete all site decommissioning activities that are described in the preliminary decommissioning plan.</p>  <h4>Guidance</h4>  <p>Regulatory guide G-206, <em>Financial Guarantees for Decommissioning of Licensed Activities</em>, provides guidance for determining the amount and source of the financial guarantee. The financial guarantee would need to be supplied in proportion to the outstanding liabilities for decommissioning and related activities needed to complete the decommissioning plan. The following should be considered in establishing the value of the financial guarantee:</p>
<ul>
<li>cost estimates using current defensible rates for consultants and contractors</li>
<li>all work, including project management to be conducted by independent consultants and contractors using commercial rates</li>
<li>escalation to the end of the proposed licence period</li>
<li>contingencies reflecting the quality and adequacy of the preliminary decommissioning plan</li>
<li>realistic timelines for regulatory approvals and processes</li>
<li>administrative overheads for maintaining the facility over the planning, EA, decommissioning, and post-decommissioning work periods</li>
<li>federal and provincial cost recovery fees for regulatory approvals</li>
</ul>  <p>The applicant is not required to supply a financial guarantee for complete decommissioning of the future nuclear facility (e.g., reactor facility) under the assumption that the facility will not be constructed and operational for a time period that could last a decade.</p>
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
<h2 id="sec15">15. Security</h2>  <p>At the site preparation stage, the security program is primarily focused on protection of prescribed information. The security program is developed in view of the project progressing to the construction stage. Elements of the security program include:</p>
<ul>
<li>site security program</li>
<li>site access clearance</li>
<li>security arrangements with offsite response forces</li>
<li>physical security</li>
<li>cyber security</li>
<li>security program officer</li>
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
<div id="15.1"></div>
<h3 id="sec15-1">15.1 Prescribed information</h3>  <p>Applicable regulatory basis:</p>
<ul>
<li><em>General Nuclear Safety and Control Regulations</em>, paragraphs 3(1)(d), 3(1)(g), 3(1)(h)</li>
<li><em>Nuclear Security Regulations</em>, section 3</li>
</ul>  <p>Prescribed information is defined in section 21 of the <em>General Nuclear Safety and Control Regulations</em>. Applicant submissions and resultant review correspondence related to this topic is considered to be prescribed information under the NSCA and is to be submitted in a secure manner. Prescribed equipment, as defined by section 20 of the <em>General Nuclear Safety and Control Regulations</em>, is not expected to be part of a licence to prepare site.</p>  <h4>Guidance</h4>  <p>The quantity of prescribed information to be encompassed by the licence to prepare site will be small and therefore the scale of the program should be commensurate with the quantity and nature of the information.</p>  <p>Prescribed information includes, but is not limited to:</p>
<ul>
<li>security threat and risk assessments</li>
<li>electronic data/communications and/or written records</li>
<li>security arrangements</li>
<li>security equipment</li>
<li>security systems</li>
<li>security procedures established by the applicant including any details around the management of records related to security incidents</li>
<li>the proposed measures to control access to the site of the activity, including proposed measures to prevent loss or illegal use of information relating to security</li>
</ul>  <p>In addition to the international comprehensive safeguards agreement, Canada has adopted the additional protocol, which prevents unauthorized sharing of information such as for detailed designs. For additional information, refer to the following as applicable to site preparation: REGDOC-2.13.2, <em>Import and Export</em> (draft).</p>  <p>The submission should include a description of adequate processes, including management system or quality assurance, that adequate management of any changes to the prescribed information description to be encompassed by the licence to prepare site shall be provided. The security program shall have prescribed information inventory change control process.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="15.2"></div>
<h3 id="sec15-2">15.2 Site security program</h3>  <p>The security program shall:</p>
<ul>
<li>be based on risk/vulnerabilities and considers applicable criteria contained in G-274, <em>Security Programs for Category I or II Nuclear Materials or Certain Nuclear Facilities</em></li>
<li>have a site plan that conforms to section 16 of the <em>Nuclear Security Regulations</em></li>
<li>contain adequate criteria for the classification of prescribed information; electronic and hard copy information that discusses security risks, vulnerabilities, and strategies may require a higher classification pursuant to the <em>Treasury Board Policy on Government Security</em></li>
<li>have adequate measures for reporting events internally and to the CNSC</li>
<li>be implemented according to the applicant&#39;s established quality assurance program</li>
<li>have a configuration management program for physical assets and “soft” assets, such as information technology and records</li>
<li>have an adequate skills (training) program, with a particular focus on staff who maintain cyber / network security</li>
<li>have fitness-for-duty criteria</li>
<li>have processes to examine, assess and implement lessons learned from similar projects and industry operational experience</li>
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
<div id="15.2.1"></div>
<h4 id="sec15-2-1">15.2.1 Site access clearance</h4>  <p>For administrative processes and physical assets used in the security program, the effectiveness of the security mitigation measures should be maintained, and that the security program meets the changing security needs due to “new” threats, risks and vulnerabilities.</p>  <p>The security program shall describe the process for issuing an authorization for a site access clearance, as per the <em>Treasury Board Policy on Government Security &ndash; Personnel Security Standard</em>. An authorization for a site-access clearance is required for security staff and security support persons, including individuals requiring unescorted access to areas/processes where prescribed information is used or stored. The security program shall contain procedures by which to adequately maintain staff security clearances (which are valid for up to five years from date of issue).</p>  <p>The security program shall also contain procedures for security of persons who may not have a site access clearance but have a valid “need” to enter a location containing the prescribed assets Typically, this is accomplished through the provision of an escort at all times.</p>   <p>Further requirements and guidance are provided in REGDOC-2.12.2, <em>Site Access Security Clearance</em>.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="15.2.2"></div>
<h4 id="sec15-2-2">15.2.2 Security arrangements with offsite response forces</h4>  <p>The security program shall describe the communication protocols and processes for:</p>
<ul>
<li>effective consultation between the licensee and the offsite response force regarding the arrangements</li>
<li>the necessary resources</li>
<li>the equipment available to the licensee and the offsite response force</li>
<li>any other matter relating to the security of the facility</li>
</ul>  <p>Offsite communications equipment, systems and procedures shall be adequately described. Where offsite response force capability is required, arrangements are presented that demonstrate the offsite response force can respond or support the onsite security response force in making an effective intervention when requested by the licensee. Where an offsite response force is integrated into the security program, the security program shall contain plans for annual familiarization visits to the facility by members of an offsite response force.</p>  <p>Written arrangements (e.g., memorandum of understanding or other such agreement) with the offsite response force shall consider response time to an incident. If response time is not achievable in a reasonable time, additional controls such as alarms or remote surveillance shall be considered, in order to ensure the offsite response force has additional time for an effective intervention.</p>  <h5>Guidance</h5>  <p>Written arrangements should also consider other emergency response requirements of the response force, such as natural disasters, and specific training limitations of the members of the force. Response-time analysis should be clearly presented and credible for the environmental conditions of the site and the capabilities of the offsite response force (e.g., weather, geography, layout of roads, and recall time for off-duty staff).</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="15.2.3"></div>
<h4 id="sec15-2-3">15.2.3 Physical security</h4>  <p>Security measures relating to detection, delay and response to security events shall be considered. Security measures should address adverse weather conditions that could impede the effectiveness of the measures (e.g., heavy snowfall preventing security patrols, response and/or police response from offsite, detection device operability in areas where ice build-up is problematic).</p>   <p>Protection measures to control access to prescribed information shall be provided pursuant to sections 21 to 23 of the <em>General Nuclear Safety and Control Regulations</em>, and to prevent loss, illegal use, illegal possession or illegal removal of such prescribed information. This information shall be managed on a "need to know" basis.</p>  <p>Security system devices shall meet the expectations contained in RD-321, <em>Criteria for Physical Protection Systems and Devices at High-Security Sites</em>, and RD-361, <em>Criteria for Explosive Substance Detection, X-ray Imaging, and Metal Detection Devices at High-Security Sites</em>.</em>   <h5>Guidance</h5>  <p>Onsite communications equipment, systems and procedures should be described. Security measures should give special consideration to prescribed information assets stored outside, even temporarily</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="15.2.4"></div>
<h4 id="sec15-2-4">15.2.4 Cyber security</h4>  <p>A cyber security policy that considers risks/vulnerabilities identified in the site selection threat and risk assessment (SSTRA), defining the objectives and elements of the cyber security program shall be provided.</p>  <h5>Guidance</h5>  <p>Operational procedures should be defined, including high-level technical requirements for protecting prescribed assets from a cyber attack.</p>   <p>The program model can be categorized into the core security principles of confidentiality, integrity and availability. The cyber security element of the security program should consider the following:</p>
<ul>
<li>IAEA Nuclear Security Series 17, <em>Computer Security at Nuclear Facilities</em></li>
<li>Nuclear Energy Institute, NEI 04-04, <em>Cyber Security Program for Power Reactors</em></li>
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
<div id="15.2.5"></div>
<h4 id="sec15-2-5">15.2.5 Security officer program</h4>  <p>The security officer program meets the requirements in RD-363, <em>Nuclear Security Officer Medical, Physical and Psychological Fitness Training</em>. The skills management program for security officers should ensure the necessary skills and knowledge are maintained to accomplish the assigned duties and tasks.</p>   <p>In an effective screening criteria process, the physical, medical and psychological requirements (based on a physical demands analysis) shall be part of the job description (e.g., performing foot/vehicle patrols, detaining unarmed intruders, comprehending procedures and successfully completing assigned tasks). The site-specific criteria for assessing physical, medical and psychological fitness associated to training and in performing assigned duties should be included as screening criteria for security officer positions.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="PartB"></div>
<h2 id="PartB">Part B: Site Evaluation for New Nuclear Power Plants and Small Reactor Facilities</h2>
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
<h2 id="sec16">16. Introduction</h2>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="16.1"></div>
<h3 id="sec16-1">16.1 Purpose</h3>  <p>Part B of this document sets out the CNSC&#39;s requirements and guidance for the evaluation of sites for new nuclear power plants and small reactor facilities (collectively, reactor facilities).</p>  <p>Site evaluation should begin before the submission of an application to prepare a site for the construction of a reactor facility.</p>  <p>Site evaluation is a process that continues throughout the lifecycle of the proposed facility, in order to ensure that the facility&#39;s design basis remains current with changing environmental conditions or modifications to the facility itself. Site evaluation information is also a key input into reactor facility design and subsequent lifecycle phases.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="16.2"></div>
<h3 id="sec16-2">16.2 Scope</h3>  <p>Part B of this document provides requirements and guidance pertaining to site evaluation activities. The information gathered during site evaluation is to be used in the reactor facility design and licensing processes.</p>  <p>Site selection is not regulated under the <em>Nuclear Safety and Control Act</em> (NSCA), and is therefore not addressed as a regulatory requirement in this document.</p>  <p>This document does not address site evaluation for Class IA and IB facilities other than nuclear power plants and small reactor facilities.</p>  <p>Part B represents the CNSC&#39;s adoption of the tenets set forth by the IAEA in its safety requirements document NS-R-3, <em>Site Evaluation for Nuclear Installations</em>, and the adaptation of those tenets to align with Canadian expectations. Some Canadian expectations, such as protection of the environment, security of the site, and protection of prescribed information and equipment, are not addressed in NS-R-3.</p>  <p>The IAEA guides that support NS-R-3 have also been adopted to support REGDOC-1.1.1. Where applicable, references to these guides are provided in the appropriate section in this document. These applicable references are also included in the publications list in the "Additional Information" section.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="16.3"></div>
<h3 id="sec16-3">16.3 Overview</h3>  <p>It should be noted that site evaluation comprises a substantial part of an environmental assessment (EA) conducted pursuant to the NSCA or the <em>Canadian Environmental Assessment Act, 2012</em> (CEAA 2012). As such, information gathered during the site evaluation process should be used during the EA process, and will be reviewed by the CNSC during the assessment of all licence applications in the facility&#39;s lifecycle, in particular for preparing the application for a licence to prepare site.</p>   <p>More information on the CNSC&#39;s EA and licensing processes are provided in the following documents:</p>
<ul>
<li>REGDOC-2.9.1, <em>Environmental Protection: Environmental Policy, Assessments and Protection Measures</em> (draft 2015)</li>
<li>REGDOC-3.5.1, <em>Licensing Process for Class I Nuclear Facilities and Uranium Mines and Mills</em></li>
</ul>  <p>Figure 16.1 depicts where site evaluation fits within the initial stages of reactor facility development, and shows the role of site evaluation in the CNSC regulatory process. Site evaluation is part of the information gathering and initial submission activities for the proposed site and includes public and aboriginal consultations, with considerations of the NSCA, CEAA 2012 and their respective regulations, this document, and bounding envelope information. This information then provides input to potential environmental impact statements and submissions for application for a licence to prepare site.</p>  <p>It is important to note that the results of site evaluation and, in particular, site characterization, are also inputs into facility design and supporting safety analysis. Facility design and safety analysis information are assessed as part of the review of a construction licence application. It is acceptable to reference the site evaluation information previously submitted in a site preparation licence application that may be referenced in the construction licence application. Requirements and guidance for design are provided in REGDOC-2.5.2, <em>Design of Reactor Facilities: Nuclear Power Plants</em>.</p>  <p>Site evaluation information is also to be carried through to subsequent facility lifecycle phases, including the licence to operate. In addition, in accordance with CSA Group Standard N288.6, <em>Environmental risk assessments at Class I nuclear facilities and uranium mines and mills</em>, the site evaluation is periodically re-evaluated. The re-evaluation should focus on confirmation of the site characteristics (in particular external events), and assessing the effects of the updated information. Design modifications, updates to operations, or both, may be needed.</p>  <p><strong>Figure 16.1: The role of site evaluation in the CNSC regulatory process</strong></p>  <img src="/images/regdoc1-1-1/figure16-1-regdoc-1-1-1-eng.jpg" className="image-actual mrgn-bttm-0" alt="" />
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="16.4"></div>
<h3 id="sec16-4">16.4 Site evaluation methodology</h3>  <p>The process of site evaluation typically involves conducting a site survey to identify one or more candidate sites, and then performing a detailed evaluation of those preferred sites, in order to:</p>
<ul>
<li>minimize the effects of the proposed reactor facility on the environment</li>
<li>minimize the effects of the environment on the ability of the reactor facility to operate within the defined safe operating envelope</li>
<li>identify mitigation strategies that may be needed &ndash; if the site is later selected for the proposed reactor facility – to reduce risk to national security, the health and safety of persons, and the environment</li>
</ul>  <p>An additional goal of the site evaluation process is to anticipate satisfying the requirements of the NSCA and associated regulations by providing technical data that will be used in processes related to the design, construction, operation, and eventual decommissioning and abandonment of the reactor facility.</p>  <p>Site characteristics and the effects of external events are integral considerations in the site evaluation process, for the following reasons:</p>
<ul>
<li>They may be used in assessing the risks to both the reactor facility and the environment, and in determining the mitigation strategies required to minimize those risks and their consequences.</li>
<li>Mitigation strategies feed into reactor facility site preparation and design through various safety assessment processes.</li>
<li>Site characteristics and associated risks feed into the Aboriginal and public consultation processes.</li>
<li>Emergency preparedness and security needs can be anticipated, to ensure that adequate measures can be implemented at the appropriate licensing stages.</li>
</ul>  <p>The degree of focus given to external events depends on their probability and severity. The amount of focus given to site characteristics is contingent on their ability to influence postulated events and contribute to an increased risk of adverse effects on the environment, or on the health and safety of people, or to adversely affect the execution of emergency response measures.</p>  <p>Detailed and methodical site evaluation, commensurate with risks posed by the reactor facility, is essential in preparing site mitigation strategies &ndash; including emergency response plans &ndash; that will adequately protect reactor facility personnel, the public and the environment from the effects of ionizing radiation and hazardous substances arising from licensed activities. Allowing for ongoing advances in technology and scientific knowledge with respect to nuclear safety, this document is consistent with the present IAEA consensus on what is expected in the site evaluation process.</p>  <p>It is expected that the applicant will reject any inappropriate site before applying for a licence to prepare site, without requiring CNSC involvement. Submission of site evaluation information on rejected sites is not necessary or expected in future EAs or in future licensing phases under the NSCA.</p>  <p>Site evaluation takes the following considerations into account:</p>
<ul>
<li>population density, population distribution and other characteristics of the protective zone, insofar as they may affect the implementation of emergency response measures and the need to evaluate the risks to individuals and the general population</li>
<li>the technical basis for the safety and security analysis issues that will be included in the licence application (particularly important for the licence to prepare site)</li>
<li>categorization and assessment of the characteristics of the natural and human environment in the region that may be affected by potential radiological or conventional impacts associated with site preparation and construction, operational states, and accident conditions</li>
<li>predictions about the evolution of the natural and human environment in the region, particularly population growth and distribution, which may have a bearing on safety and security throughout the projected lifetime of the reactor facility</li>
<li>site evaluation with respect to the storage and transport of input and output materials &ndash; such as fresh and spent fuel, and radioactive waste</li>
<li>information about non-radiological impact due to chemical or thermal releases, or other site activities such as damage to aquatic organisms from entrainment into cooling water intakes, or physical disruption of landscape and shoreline from site development, and the potential for explosion and the dispersion of chemical products</li>
<li>as far as practicable, information about the potential for interactions between nuclear and conventional effluents, such as the combination of heat or chemicals with radioactive material in liquid effluents</li>
<li>predictions about the reactor facility&#39;s impact on the population, including those that could lead to emergency conditions, with due consideration of relevant factors (e.g., population distribution, use of land and water, radiological impact of any other releases of radioactive material in the region)</li>
<li>hazards associated with natural and human-induced external events, including future alterations of magnitude and frequency due to effects of climate change.</li>
</ul>  <p>Refer to appendix B for additional requirements and guidance.</p>
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
<h2 id="sec17">17. General Criteria for Site Evaluation</h2>  <p>As the first step in establishing a reactor facility site, site evaluation shall take into account all phases of the facility lifecycle, from site preparation to abandonment.</p>   <p>A systematic process for prioritizing the risks associated with site characteristics and external events shall be documented, and shall include consideration of the synergy of multiple simultaneous events &ndash; such as combinations of:</p>
<ul>
<li>external hazards</li>
<li>reactor facility events, including beyond-design-basis-events and severe accidents</li>
<li>multiple effects of different activities on the site</li>
</ul>  <p>Analysis of external hazards is required to consider both design-basis and beyond-design-basis events. In particular, the concept of potential cliff-edge effects shall be considered when analyzing external hazards, where a small change of conditions may lead to a catastrophic increase in the severity of consequences. For reactor facilities, the analysis of external hazards shall be done at the site evaluation stage, in order to confirm that the reactor facility will be able to respond effectively to such events.</p>  <p>Site evaluation shall include consideration of:</p>
<ul>
<li>site characteristics that could have an impact on the public or on the environment</li>
<li>population density, distribution, and other characteristics of the protective zone that may have an impact on the implementation of emergency response measures or on the evaluation of risk to individuals, the general population, and the environment</li>
<li>the effects of natural or human-induced external events occurring in the environment of the site</li>
</ul>  <p>Site evaluation shall include:</p>
<ul>
<li>the range of technologies being considered, including the estimated total power for the reactor facility</li>
<li>evaluation against the reactor facility&#39;s safety goals</li>
<li>consideration of evolving natural and human-induced factors</li>
<li>evaluation of the hazards associated with external events</li>
<li>determination of the potential effects of the reactor facility on the environment</li>
<li>consideration of projected population growth, changes in land-use in the vicinity of the site, other future development (such as airports, industry, commercial buildings/activities), and emergency planning that takes those projections into account</li>
</ul>  <p>The evaluation shall also take into account the combined radiological and conventional effects of the site and the reactor facility on each other during normal and abnormal situations, based on both temporal (lifecycle) and spatial (regional, local and site) considerations.</p>  <p>Refer to sections B.2.1-B.2.4, B.5 and B.6 of appendix B for additional requirements and guidance.</p>  <h3>Guidance</h3>  <p>The main objective of site evaluation is to ensure that a reactor facility constructed and operated at the site will not create an unreasonable risk to the public or to the environment.</p>  <p>A high level overview of alternate sites considered prior to selecting the proposed site should be provided. A brief description of the degree and depth of site evaluation used to narrow down the final choice(s) should be included.</p>  <p>If the site evaluation indicates deficiencies for which design features, site protection measures, or administrative procedures cannot compensate, the site should be deemed unacceptable by the applicant or licensee.</p>  <p>The characteristics of the natural and human induced hazards, as well as the demographic, meteorological and hydrological conditions of relevance to the nuclear installation, should be monitored over the nuclear installation&#39;s lifetime.</p>   <p>Site specific hazards should be periodically reviewed using updated knowledge, typically every 10 years, and be re-evaluated when necessary. A review after a shorter interval should be considered if there is evidence of potentially significant changes in hazards (e.g., in light of feedback of operating experience, a major accident or extreme events). The implications of such a review of site specific hazards for the safe operation of the reactor facility should be evaluated.</p>   <p>Guidance on safety goals related to quantitative and qualitative safety goals is provided in REGDOC 2.5.2, <em>Design of Reactor Facilities: Nuclear Power Plants</em>, and in appendix B, section B.5.2.2.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="17.1"></div>
<h3 id="sec17-1">17.1 Evaluation against safety goals from a site perspective</h3>  <p>Reactor facility designs shall be evaluated against applicable safety goals, taking into account the characteristics of the site, the risks associated with external hazards (including any potential cliff-edge effects that may arise from small increases in the severity of external hazards), and the potential negative impact of the reactor facility on the environment. The evaluation shall include the effects of multiple unit events and &ndash; where applicable &ndash; effects from events that may affect multiple units.</p>  <p>To support this evaluation, the process by which the different nuclear power plant or small reactor technologies being considered have been included in the site evaluation shall be outlined. Bounding approaches for site evaluation will be considered; however, bounding limits for a proposed facility shall be based on credible information from designs being considered for that site.</p>  <p>Part A, section 9.3 provides requirements and guidance for characterization of accidents and malfunctions, and the level of facility design detail needed for a bounding approach. Sections B.5, B.5.1 and B.5.2 of appendix B provide additional requirements and guidance.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="17.2"></div>
<h3 id="sec17-2">17.2 Consideration of the evolution of natural and human-induced factors</h3>  <p>The evolution of natural and human-induced factors in the environment that may have a bearing on safety and security shall be evaluated across a time period that encompasses the projected lifetime of the reactor facility, with the understanding that different levels of evaluation and monitoring apply to the various phases of the reactor facility lifetime.</p>  <p>Refer to sections B.2, B.5, B.5.1 and B.5.2 of appendix B for additional requirements and guidance.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="17.3"></div>
<h3 id="sec17-3">17.3 Evaluation of hazards associated with external events</h3>  <p>The site shall be examined with regard to the frequency and severity of external natural and human-induced events that could affect the safety and security of the reactor facility. The analysis shall include an examination of potential cliff-edge effects that may arise from small increases in the severity of events. This information provides a baseline for future assessments over the life of the facility.</p>  <p>A systematic approach for identifying and assessing the hazards associated with external events (including the underlying rationale) shall be developed, documented, and implemented in an auditable fashion.</p>  <p>Each external natural and human-induced event shall be identified and assessed with the following considerations:</p>
<ol>
<li>the potential direct and indirect effects of the event on the reactor facility structures, systems, and components (SSCs), including those that could affect the safe operation of the reactor facility in both normal and abnormal operating states; for example:
<ul className="list-lower-alpha">
<li>direct effect &ndash; an earthquake resulting in a main steam line break</li>
<li>indirect effect &ndash; a corrosive gas release from a nearby chemical plant degrading reactor facility safety system trip circuits via ventilation intakes</li>
</ul></li>
<li>the potential combined effects of external and human-induced events with normal and accidental releases from the reactor facility that would exceed environmental limits, or cause a significant adverse effect to occur</li>
<li>effects of natural external and human-induced events &ndash; including consequential events or reasonable combinations of independent events &ndash; that could influence the ability to successfully implement emergency response plans</li>
</ol>  <p>Derivation of the hazards associated with external events shall include consideration of the combined effects of these hazards with the ambient conditions (e.g., simultaneous aircraft crash and heavy snowstorm). Combined effects of external hazards can have significant impact on such facets of the reactor facility as the implementation of emergency response plans, accident mitigation, and contaminant dispersion.</p>  <p>The region assessed for each identified external event shall encompass the environment that could be affected.</p>  <p>The evaluation shall consider foreseeable changes in land use for the projected lifetime of the reactor facility, in order to assess and plan for mitigation of new external hazards introduced by changes in land use.</p>  <p>Refer to sections B.5, B.5.1 and B.5.2 of appendix B for additional requirements and guidance.</p>  <h4>Guidance</h4>  <p>Site-specific data should be used to determine hazards, unless such data is unobtainable. In this case, data from similar regions that is sufficiently relevant to the region of interest, or data derived from appropriate and acceptable simulation techniques, may be used. Data from similar regions and from simulated findings may also be used to augment site-specific data.</p>  <p>Prehistoric, historic, and instrumentally recorded information, and records of the identified external events and their severity, should be collected for the region and analyzed for reliability, accuracy, and completeness.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="17.4"></div>
<h3 id="sec17-4">17.4 Determining the potential impact of the site on the environment</h3>  <p>Considerations such as those listed in table 17.1 shall be taken into account during site evaluation to minimize the potential impact of the site&#39;s interaction with the environment (i.e., moving, destroying or substantially altering rare or sensitive habitats, biota, or areas of socio-economic importance), including the structural, compositional, and functional components of its biodiversity.</p>  <p>The table below describes these considerations with respect to specific areas and activities that may be particularly sensitive to such interaction.</p>
<table className="table table-striped">  <caption>Table 17.1: Potential impact &ndash; Considerations for special areas or activities</caption>  <tr>
<th>Areas or activities</th>
<th>Considerations</th>  </tr>  <tr>
<td>Habitats essential to maintaining the viability of valued components (VCs*), and designated protected habitats (national or provincial parks, reserves, etc.)</td>
<td>1) Assess and minimize any potential interaction with critical habitats, or with individuals or species of conservation status.<br />
2) Assess and minimize any potential for destruction or substantial alteration of breeding, nesting, or spawning habitats.<br />
3) Assess and minimize any potential for destruction or substantial alteration of other critical habitats to VCs, such as over-wintering, feeding, or nursery habitats.</td>  </tr>  <tr>
<td>Areas containing migratory routes of VCs.</td>
<td>1) Assess and minimize any potential for compromising these natural heritage features, which may be site- or region-specific, and may include woodlands, wetlands, meadows, valley lands, estuaries, and the shorelines of streams and lakes</td>  </tr>  <tr>
<td>Areas of high biological production (e.g., staging, feeding and rearing grounds for numerous VCs) and their connecting links or buffer zones.</td>
<td>1) Assess and minimize any potential for compromising these natural heritage features, which may be site- or region-specific, and may include woodlands, wetlands, meadows, valley lands, estuaries, and the shorelines of streams and lakes.<br />
2) Consider that wetlands, salt marshes, mud flats, aquatic littoral zones, and offshore shoals may need buffer zones to protect areas of critical biodiversity functions from adverse effects such as contaminants and intrusions.</td>  </tr>  </table>  <p>*&nbsp;See section 18.0 for further information on VCs</p>
<p>The site shall be examined with respect to the risk from radiological and hazardous substances to the public and the environment, and these risks are to be kept as low as reasonably achievable. This includes the effects of thermal pollution on surrounding bodies of water, and the effects of long-term onsite radiological waste management.</p>  <p>The synergy of multiple events shall be considered. Such events include:</p>
<ul>
<li>those that affect multiple units, including those leading to severe accidents</li>
<li>multiple effects of several different activities, such as simultaneous oil spill and fire</li>
<li>spills of multiple chemicals and interactions thereof</li>
</ul>  <p>Contaminant (radiological and hazardous substances) pathway modelling shall incorporate atmospheric dispersion, surface water dispersion, and groundwater movement, as well as the associated abiotic and biotic environmental compartments.</p>  <p>Models used for dispersion and pathways analyses shall include site-specific, local, and regional topographic features and characteristics of the reactor facility, and take into account natural and human-induced events that may influence contaminant behaviour.</p>  <p>The pathways analyses shall take specific environmental and site characteristics into account, with special attention paid to the function of the biosphere in the accumulation and transport of radionuclides and hazardous substances.</p>  <p>To determine the potential contaminant impact on the environment, assessments of all releases shall be made under normal and accident conditions for all phases of the reactor facility&#39;s lifecycle. This shall include an examination of potential releases from multiple unit events, or events affecting multiple units.</p>  <p>Refer to sections B.2.4, B.5, B.5.1, B.5.2, B.6 and B.6.1–B.6.7 of appendix B for additional requirements and guidance.</p>  <h4>Guidance</h4>  <p>Bounding scenarios involving modelling of potential effects from maximum possible releases should be completed, in order to establish the outer boundaries or worst-case scenarios for the reactor facility. These bounding scenarios also contribute to the scenarios used for emergency planning.</p>  <p>Assessments of releases or disturbances associated with normal or routine operations should be based on expected performance (e.g., average concentrations) and upper threshold bounding conditions, as well as possible pulse releases (high concentration with short exposure period) from anticipated operational occurrences.</p>  <p>The locations of the reactor facility and of the subsidiary structures on the site should be examined at a high level, with the assistance of environmental modelling. Such structures should be located so as to minimize potential impact on the public and on the environment. This includes emission or effluent release points, and air or water intake structures.</p>  <p>The estimates of releases and disturbances used in risk modelling will be re-evaluated during the assessment of the construction licence application, when the design and safety features of the reactor facility have been confirmed. The licensee re-evaluates risk modelling, as operating experience is gained over the reactor facility lifetime.</p>   <p>Ultimately the future selection of the area of land allocated to the site should be balanced between the needs associated with reactor facility construction, operation and security, and those of the commercial and recreational uses of the land surrounding the site.</p>  <p>Reference areas are needed that will be unexposed to project interactions but close enough to be similar to the special areas or activities (see table 17.1). These are used to detect project effects relative to changes in background conditions. Reference areas should be sampled during baseline conditions to establish the natural differences from exposure sites. The baseline should be characterized sufficiently to allow for a statistically significant assessment of project impacts. Two or more reference areas are needed to characterize natural spatial variability in measured parameters as a “noise” factor to be accounted for when monitoring to detect project effects.</p>   <p>Further guidance is provided in:</p>
<ul>
<li>IAEA Safety Standards Series No. NS-G-3.2, <em>Dispersion of Radioactive Material in Air and Water and Consideration of Population Distribution in Site Evaluation for Nuclear Power Plants</em></li>
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
<div id="17.5"></div>
<h3 id="sec17-5">17.5 Population and emergency planning considerations</h3>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="17.5.1"></div>
<h4 id="sec17-5-1">17.5.1 Exclusion zones and protective zones</h4>  <p>The exclusion zone is defined in section 1 of the <em>Class I Nuclear Facilities Regulations</em> as "a parcel of land within or surrounding a nuclear facility on which there is no permanent dwelling and over which a licensee has the legal authority to exercise control."</p>  <h5>Guidance</h5>  <p>The protective zone is the area beyond the exclusion zone that should be considered with respect to implementing emergency measures. This includes consideration of such matters as population distribution and density, residential development and sensitive public facilities, land and water usage, roadways, evacuation planning, and consequence analysis.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="17.5.2"></div>
<h4 id="sec17-5-2">17.5.2 Planning considerations</h4>  <p>In order to support the achievement of safety objectives, the evaluation shall take the following population and emergency planning considerations into account:</p>
<ul>
<li>the planning basis as described in REGDOC-2.10.1, <em>Nuclear Emergency Preparedness and Response</em>, version 2</li>
<li>population density, characterization and distribution within the protective zone, with particular focus on existing and projected population densities and distributions in the region including resident populations and transient populations (this data is to be kept up to date over the lifetime of the reactor facility)</li>
<li>present and future use of land and resources</li>
<li>physical site characteristics that could impede the development and implementation of emergency plans (e.g., the ability to deliver fuel in a timely manner to backup generators)</li>
<li>populations in the vicinity of the reactor facility that are, or may become, difficult to evacuate or shelter (e.g., schools, prisons, hospitals)</li>
<li>ability to maintain population and land-use activities in the protective zone at levels that will not impede implementation of the emergency response plans</li>
</ul>  <p>Before submitting the application for a licence to prepare site, it shall be confirmed with the surrounding municipalities and the affected provinces, territories, foreign states, and neighbouring countries that the implementation of their respective emergency plans and related protective actions will accommodate the lifecycle of the proposed project. Discussions around early plans shall include plans and consideration of the following:</p>
<ul>
<li>onsite response, including the capacity to bring offsite equipment onsite</li>
<li>ability of offsite licensee staff to report to site during a catastrophic event</li>
<li>offsite response, and how it is coordinated between the licensee and federal, provincial and municipal government agencies playing a role in emergency preparedness and response</li>
<li>how the licensee will coordinate with regulatory bodies</li>
<li>how the licensee will respond and coordinate with emergency service providers (fire department, ambulance, hospital, fuel, food, etc.)</li>
</ul>  <p>Because of the time involved for this task, it is important to initiate these discussions during the initial (pre-licensing) site evaluation phase. The CNSC will expect these agreements to be in place before granting a licence to prepare site.</p>  <p>The strategy and process for effective two-way ongoing consultation with emergency management agencies affected by site operations throughout the project&#39;s lifecycle shall be documented. Emergency management agencies include security agencies involved in the development of the site selection threat risk assessment report.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="17.6"></div>
<h3 id="sec17-6">17.6 Consideration of future life-extension activities</h3>  <p>Where appropriate, the site evaluation shall consider the potential effects of life extension, power uprate activities and modifications to accommodate additional or modified uses:</p>
<ul>
<li>increased reactor facility service life</li>
<li>additional conventional and radiological waste generated, as well as estimated resulting impact on handling, transport, and storage of waste</li>
<li>impact of external and human induced events on the life extension, power uprate and/or modifications project activities</li>
<li>impact on security and emergency planning</li>
</ul>  <h4>Guidance</h4>  <p>Life extension involves the replacement or refurbishment of major components, or substantial modifications to the plant, or both.</p>  <p>Anticipated power uprate projects represent early plans to seek to use reactor facility design margins and future operating efficiencies and experience, in order to increase reactor facility output capacity by some degree.</p>  <p>Power uprate projects may also require plant modernization activities, in order to maintain compliance with the NSCA and associated regulations.</p>  <p>Small reactors, in particular research reactors, may seek, at some point during their lifecycle, to modify the design in order to accommodate additional uses (such as new or alternate medical isotope production, or district heating).</p>
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
<h2 id="sec18">18. Gathering Baseline Data</h2>  <p>A systematic process for gathering baseline data shall be documented and demonstrated, and shall include analysis of variability and uncertainties. Baseline data shall be captured within auditable management systems, quality management or quality assurance programs.</p>  <p>The baseline data shall consider valued components (VCs). VCs are environmental attributes or components identified as having a legal, scientific, cultural, economic or aesthetic value. The term "VC" is sometimes applied to all components of the environment including air, land, soil, water, aquatic and terrestrial plants and animals and people. The general criteria used to identify VCs that may be affected by the project shall be described.</p>  <p>VCs in the existing environment shall be identified and used as specific assessment end-points. Measurement end-points shall be identified, as appropriate.</p>  <p>The baseline data shall also consider contaminants of potential concern (COPCs). COPCs are those contaminants associated with historical, present or proposed future use of the site. An understanding of COPCs prior to collecting environmental baseline data will direct the selection of parameters to be included in the environmental baseline data collection program.</p>   <p>Refer to part A, section 8 and sections B.2.3 and B.3 of appendix B for additional requirements and guidance. The baseline data collected in the initial assessment shall be verified in subsequent periodic assessments carried out over the life of the facility.</p>  <h3>Guidance</h3>  <p>Where possible, baseline data should take into account archeological, paleontological, and prehistoric data (including the oral history of Aboriginal peoples), as well as historic and instrumentally recorded sources.</p>  <p>Baseline data should be of sufficient sample size and duration to conduct hypothesis testing against post-commissioning (follow-up) monitoring data, with sufficient power to detect relevant effect sizes.</p>  <p>As stated in Environment Canada and Parks Canada, 2010, <em>Addressing Species at Risk Act Considerations Under the Canadian Environmental Assessment Act for Species Under the Responsibility of the Minister Responsible for Environment Canada and Parks Canada</em>, all provincially or federally listed wildlife species occurring or reasonably expected to occur, within the spatial boundaries should be identified as VCs.</p>   <p>Further guidance on the selection of appropriate VCs is available from CSA Group N288.6-12, <em>Environmental risk assessments at Class I nuclear facilities and uranium mines and mills</em>. The applicant should note that CSA Group N288.6 refers to VCs as receptors.</p>  <p>Further guidance is also available in:</p>
<ul>
<li>REGDOC-2.9.1, <em>Environmental Protection: Environmental Policy, Assessments and Protection Measures</em> (draft 2015)</li>
<li>IAEA Safety Standards Series No. SSG-9, <em>Seismic Hazards in Site Evaluation for Nuclear Installations</em></li>
<li>IAEA Safety Standards Series No. NS-G-1.5, <em>External Events Excluding Earthquakes in the Design of Nuclear Power Plants</em></li>
<li>IAEA Safety Standards, Series No. NS-G-3.6, <em>Geotechnical Aspects of Site Evaluation and Foundations for Nuclear Power Plants</em></li>
<li>IAEA Safety Standards Series, Specific Safety Guide No. SSG-18, <em>Meteorological and Hydrological Hazards in Site Evaluation for Nuclear Installations</em></li>
<li>NUREG/CR-7046, PNNL-20091, <em>Design Basis Flood Estimation for Site Characterization at Nuclear Power Plants in the United States of America</em></li>
<li>NUREG/CR-7005, <em>Technical Basis for Regulatory Guidance on Design-Basis Hurricane Wind Speeds for Nuclear Power Plants</em></li>
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
<div id="18.1"></div>
<h3 id="sec18-1">18.1 Atmospheric and meteorological data</h3>  <p>A description of the ambient air quality in the study areas is to be provided, with emphasis on those parameters for which there will be radiological and non-radiological emissions resulting from the project.</p>  <p>A comprehensive site evaluation relies on understanding how meteorological phenomena may affect the site. The evaluation shall take into account prehistoric, historic, and instrumentally recorded climate data sources that reflect the regional conditions, such as Canadian climate normals published by the Canadian Weather Office.</p>  <p>Descriptions of basic meteorological variables shall include:</p>
<ul>
<li>wind speed and direction</li>
<li>air temperature</li>
<li>precipitation</li>
<li>humidity</li>
<li>atmospheric pressure</li>
</ul>  <p>A program for meteorological measurements shall be prepared and carried out at &ndash; or near &ndash; the site, with the use of instrumentation capable of measuring and recording the main meteorological variables at appropriate elevations, locations, durations and time intervals.</p>   <p>This program initially provides data for site evaluation, and then provides ongoing data for use in revisions to basis documents in response to safety analysis results during future phases of the reactor facility&#39;s lifecycle.</p>  <p>Refer to appendix B, section B.3.1 for additional requirements and guidance.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="18.2"></div>
<h3 id="sec18-2">18.2 Geological data</h3>  <p>Site evaluation shall include a description of the regional, local and site geology and will include a description of important geological structures.</p>   <p>The geotechnical properties of the overburden, including shear strength and liquefaction potential, shall be investigated. The geotechnical properties support the assessment of slope stability and the bearing capacity of foundations under both static and dynamic conditions.</p>  <p>Refer to appendix B, section B.3.2 for additional requirements and guidance.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="18.3"></div>
<h3 id="sec18-3">18.3 Geophysical data</h3>  <p>Seismotectonic data shall include, without being limited to, information on prehistoric, historic, and instrumentally recorded seismic activity in the region.</p>  <p>Information on geophysical hazards shall include the influence of surface faults on seismic activity in the region.</p>  <p>Refer to appendix B, section B.3.2 for additional requirements and guidance.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="18.4"></div>
<h3 id="sec18-4">18.4 Hydrological data</h3>  <p>The site evaluation shall describe surface water hydrology, including delineation of the drainage basins and available prehistoric, historic, and instrumentally recorded hydrological data, such as water levels and flow rates.</p>  <p>A program of hydrological investigations shall be carried out using both deterministic and probabilistic approaches as appropriate, so as to permit the assessment of normal flow, flooding, and drought properties of water bodies, as well as the interactions between surface water and groundwater flow systems. This program shall include predictions of changes to site surface water hydrology (flows and chemistry) that are expected from foreseeable changes in upstream land use.</p>  <p>Baseline surface water and sediment quality data shall be gathered and provided.</p>  <p>Refer to sections B.3.3 and B.3.4 of appendix B for additional requirements and guidance.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="18.5"></div>
<h3 id="sec18-5">18.5 Hydrogeological data</h3>  <p>The site evaluation shall describe the hydrogeology of the local environment, including the groundwater distribution, groundwater quality, and physical and geochemical properties of water-bearing formations (hydrogeological units) and their interactions with surface waters.</p>  <p>A program of hydrogeological investigations shall be carried out to permit the assessment of groundwater distribution and flow, as well as radionuclide and other contaminant movement in the hydrogeological environment. This program shall include predictions of the interaction between the project and the hydrogeology, including changes to the site hydrogeology (groundwater distribution, groundwater flows and chemistry, and migration of COPCs) that are expected to result from foreseeable changes in upstream land use the project or migration of existing contaminant plumes.</p>  <p>Baseline groundwater quality data shall be gathered and provided.</p>  <p>Refer to appendix B, section B.3.4 for additional requirements and guidance.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="18.6"></div>
<h3 id="sec18-6">18.6 Biological data</h3>  <p>The biotic characteristics of the proposed site shall be identified and documented, taking into account the environmental considerations set out in table 17.1, Potential impact &ndash; Considerations for special areas or activities. Documentation of the biota utilizing the habitat at the proposed site shall be provided, and includes descriptions of vegetation communities, birds, mammals, reptiles, fish, and invertebrate communities.</p>   <p>This information is then used to:</p>
<ul>
<li>identify likely interactions between the project and the biota in the area</li>
<li>predict potential environmental effects</li>
<li>identify mitigation measures</li>
<li>evaluate the significance of the residual effects once the mitigation measures are applied</li>
<li>develop a follow-up monitoring program</li>
</ul>  <p>Biological data plays an important role in identifying VCs, which are used as the final receptors in pathways modelling.</p>  <p>Refer to sections B.3.5 and B.3.6 of appendix B for additional requirements and guidance.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="18.7"></div>
<h3 id="sec18-7">18.7 Baseline ambient radioactivity and pre-existing hazardous substances</h3>  <p>The overburden and any bedrock to be removed shall be characterized with respect to both natural and anthropogenic sources, so as to assess any conventional and radiological risks to health, safety, and the environment. Where an area on the site has received substantial contamination from previous nuclear or non-nuclear industrial activities, baseline characterization shall consider radionuclide and hazardous substance levels within biota and relevant environmental media of interest. The presence of contamination may result in the need for a radiation protection program during site preparation activities (see section 10).</p>  <p>Prior to active commissioning of the nuclear installation under a licence to operate, the ambient radioactivity of the atmosphere, hydrosphere, lithosphere, and biota in the region shall be assessed, including an assessment of ambient radionuclide activity levels in ingested water and food used in the human pathways modelling.</p>   <p>Refer to appendix B, section B.3.7 for additional requirements and guidance.</p>
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
<h2 id="sec19">19. Evaluation of Natural External Events</h2>  <p>A systematic approach for identifying all natural external events shall be developed, documented and implemented. The assessment shall address environmental effects over the lifecycle of the proposed facility.</p>  <p>Refer to sections B.2.4, B.4, and B.4.1–B.4.7 of appendix B for additional requirements and guidance.</p>  <h3>Guidance</h3>  <p>The hazards described below are indicative of the types of natural external events to be considered:</p>
<ul>
<li>climate change</li>
<li>meteorological hazards</li>
<li>surface water hazards</li>
<li>groundwater hazards</li>
<li>geotechnical hazards</li>
<li>geophysical hazards</li>
<li>biological hazards</li>
<li>natural fire hazards</li>
</ul>  <p>Further guidance regarding natural external events is available in:</p>
<ul>
<li>IAEA Safety Standards Series No. SSG-9, <em>Seismic Hazards in Site Evaluation for Nuclear Installations</em></li>
<li>IAEA Safety Standards Series No. NS-G-1.5, <em>External Events Excluding Earthquakes in the Design of Nuclear Power Plants</em></li>
<li>IAEA Safety Standards, Series No. NS-G-3.6, <em>Geotechnical Aspects of Site Evaluation and Foundations for Nuclear Power Plants</em></li>
<li>IAEA Safety Standards Series, Specific Safety Guide No. SSG-18, <em>Meteorological and Hydrological Hazards in Site Evaluation for Nuclear Installations</em></li>
<li>NUREG/CR-7046, PNNL-20091, <em>Design Basis Flood Estimation for Site Characterization at Nuclear Power Plants in the United States of America</em></li>
<li>NUREG/CR-7005, <em>Technical Basis for Regulatory Guidance on Design-Basis Hurricane Wind Speeds for Nuclear Power Plants</em></li>
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
<div id="19.1"></div>
<h3 id="sec19-1">19.1 Climate change</h3>  <p>The evaluation of natural external events shall consider potential climate change over the projected lifetime of the reactor facility.</p>  <p>Refer to sections B.4 and B.4.1 of appendix B for additional requirements and guidance.</p>  <h4>Guidance</h4>  <p>Climate change can potentially influence all of the other natural external events. With respect to those indicated earlier, some examples of this influence are provided in table 19.1.</p>
<table className="table table-striped">  <caption>Table 19.1: Potential influence of climate change on other natural external events</caption>  <tr>
<th>Natural external event</th>
<th>Examples of potential influence of climate change</th>  </tr>  <tr>
<td>Meteorological factors</td>
<td>Averages and extremes of temperature, humidity, evaporation, high winds, abrasive dust and sand storms, precipitation, lightning</td>  </tr>  <tr>
<td>Surface water hazards</td>
<td>Water supply, magnitude and frequency of floods and droughts, storm surges</td>  </tr>  <tr>
<td>Groundwater hazards</td>
<td>Groundwater levels, flow pattern and velocity change resulting from changes in surface water recharge and evaporation</td>  </tr>  <tr>
<td>Geotechnical hazards</td>
<td>Stabilities including landslides related to changes in permafrost, surface water levels, such as in rivers, seas and lakes, and groundwater flow systems</td>  </tr>  <tr>
<td>Geophysical hazards</td>
<td>Magnitude and frequency of earthquakes and avalanches, etc., due to changing sea and lake levels and melting glaciers</td>  </tr>  <tr>
<td>Biological hazards</td>
<td>Biological community, population and distribution changes due to temperature and humidity changes</td>  </tr>  <tr>
<td>Natural fire hazards</td>
<td>Changes in temperature and vegetation cover</td>  </tr>  </table>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="19.2"></div>
<h3 id="sec19-2">19.2 Meteorological hazards</h3>  <p>Refer to sections B.4 and B.4.2 of appendix B for additional requirements and guidance for the topics addressed in sections 19.2.1 through 19.2.5.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="19.2.1"></div>
<h4 id="sec19-2-1">19.2.1 Temperature and humidity</h4>  <p>The following potential factors shall be included in the assessment of temperature and humidity:</p>
<ul>
<li>effects of sudden or prolonged extreme temperatures on future reactor facility SSCs that will be important to safety (e.g., cooling air intakes)</li>
<li>effects of condensation and evaporation on future reactor facility SSCs that will be important to safety (e.g., electronic components)</li>
<li>potential for temperature and humidity to affect releases from the reactor facility into the environment and to affect the temperature of the condenser cooling water</li>
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
<div id="19.2.2"></div>
<h4 id="sec19-2-2">19.2.2 High winds</h4>  <p>The frequency and intensity of strong winds, including tornadoes and hurricanes, shall be assessed on the basis of historic and recorded data for the region.</p>  <h5>Guidance</h5>  <p>The following potential factors should be included in the assessment:</p>
<ul>
<li>wind and pressure-loading effects</li>
<li>wind-propelled missiles that could have an impact on SSCs, or that could render offsite power supplies unavailable</li>
<li>effects on emergency plan execution</li>
<li>possibility of affecting releases from the reactor facility into the environment</li>
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
<div id="19.2.3"></div>
<h4 id="sec19-2-3">19.2.3 Abrasive dust and sand storms</h4>  <p>Assessment of the risk of dust and sand storms shall be made on the basis of historic and recorded data for the region, and should include consideration of the following potential factors:</p>
<ul>
<li>abrasion or erosion of SSCs</li>
<li>impact on air or water intakes</li>
<li>effect of static electricity generation on electrical or electronic SSCs</li>
<li>impact on offsite power supplies to the site</li>
<li>effect on emergency plan execution</li>
<li>possibility of affecting releases from the reactor facility into the environment</li>
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
<div id="19.2.4"></div>
<h4 id="sec19-2-4">19.2.4 Precipitation</h4>  <p>All types of precipitation shall be assessed on the basis of historic and recorded data for the region. The assessment should take into account the potential effects on:</p>
<ul>
<li>structural loading, including acute impact from heavy precipitation, such as hail</li>
<li>cooling air or water intakes</li>
<li>offsite power supplies to the site</li>
<li>dispersion of releases from the reactor facility through surface or groundwater</li>
<li>emergency plan execution</li>
<li>possibility of affecting releases from the reactor facility into the environment</li>
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
<div id="19.2.5"></div>
<h4 id="sec19-2-5">19.2.5 Lightning</h4>  <p>The frequency and severity of lightning shall be evaluated to determine potential impact on the reactor facility, including the influence of lightning events on the risks of natural fire.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="19.3"></div>
<h3 id="sec19-3">19.3 Surface water hazards</h3>  <p>Refer to sections B.4 and B.4.3 of appendix B for additional requirements and guidance for the topics addressed in sections 19.3.1 and 19.3.2.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="19.3.1"></div>
<h4 id="sec19-3-1">19.3.1 Floods</h4>  <p>The region shall be assessed to determine the potential for flooding due to natural causes that may affect the safety of the reactor facility. The external flood could be caused by several hydrometeorological, geoseismic, or structural-failure phenomena, such as runoff from precipitation or snow melt, high tide, storm surge, tsunamis or wind waves, etc. The design-basis flood shall be determined. A design-basis flood is a flood caused by one or an appropriate combination of several hydrometeorological, geoseismic, or structural-failure phenomena, which results in the most severe hazards to structures, systems, and components (SSCs) important to the safety of reactor facility.</p>  <h5>Guidance</h5>  <p>While the CNSC does not have guidance yet on design-basis floods, the proponent may use NUREG/CR-7046, <em>Design-Basis Flood Estimation for Site Characterization at Nuclear Power Plants in the United States of America</em> as a reference, taking into consideration site-specific hydrological characteristics. Other references include the IAEA Safety Standards Series No. NS G-1.5 and SSG-18.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="19.3.2"></div>
<h4 id="sec19-3-2">19.3.2 Adequacy of water supply</h4>  <p>Evaluation of water supplies to the site shall include the following components:</p>
<ul>
<li>surface and groundwater sources</li>
<li>quantity and quality of water</li>
<li>reliability and availability of supply</li>
</ul>  <p>The evaluation shall also include consideration of the potential impact of:</p>
<ul>
<li>debris and fouling</li>
<li>additional water requirements for emergency cooling or process needs</li>
<li>effects on contaminant transportation</li>
<li>fluctuations in water temperature that could affect heat sinks</li>
<li>effects on firefighting capability</li>
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
<div id="19.4"></div>
<h3 id="sec19-4">19.4 Groundwater hazards</h3>  <p>A program of hydrogeological investigations, based on groundwater probing, monitoring data, and numerical modelling, shall assess the potential impact of the groundwater flow system (groundwater level and quality) on the reactor facility, such as:</p>
<ul>
<li>effects on the stability of the reactor facility&#39;s foundations</li>
<li>effects on the integrity of the reactor facility&#39;s below-grade structures, such as fuel bays</li>
</ul>  <p>Refer to sections B.4 and B.4.4 of appendix B for additional requirements and guidance.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="19.5"></div>
<h3 id="sec19-5">19.5 Geotechnical hazards</h3>  <p>Geological maps and other appropriate reference sources for the region shall be examined to determine the existence of natural features that could affect the surface and subsurface stability of the site.</p>  <p>The stability of the foundation material under dynamic, static, and seismic loading shall be assessed, with a detailed description of surface and subsurface conditions (including hydrogeochemical effects) being incorporated into a geotechnical investigation program for the purposes of hazard determination and mitigation. The investigation shall describe any potential site instability, such as collapse, subsidence, surface uplift, and liquefaction of the subsurface materials and the backfill materials.</p>  <p>The stability of natural slopes and human made features such as mines, cut slopes, dams and embankments, and waste stockpiles under static, dynamic, and seismic loading shall be analyzed with site-specific data to assess their potential impact on the nuclear facility.</p>  <p>Settlements (magnitude and rate) of foundations and/or foundation soils caused by large surface loadings and/or underground water drainage shall be assessed with project-specific data. The differential settlement and soil distortion shall also be analyzed as required to assess their potential impact on the nuclear facility.</p>   <p>For underground excavations, underground instability (rock falls and underground collapses) and groundwater inflow shall be analyzed with site-specific geotechnical and hydrogeological data to assess the potential risks to worker safety.</p>  <p>Refer to sections B.4 and B.4.4 of appendix B for additional requirements and guidance.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="19.6"></div>
<h3 id="sec19-6">19.6 Seismic and geological hazards</h3>  <p>Refer to sections B.4 and B.4.4 of appendix B for additional requirements and guidance for the topics addressed in sections 19.6.1 and 19.6.2.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="19.6.1"></div>
<h4 id="sec19-6-1">19.6.1 Earthquakes</h4>  <p>A seismotectonic evaluation shall be conducted for the region, using geophysical data and information on geotechnical hazards. The potential effects that seismic events and faults may have on sub-surface contaminant transport shall be evaluated for the region.</p>  <p>For the final selected site to be referenced in an application for a licence to prepare site, a site-specific seismic hazard assessment, including a paleoseismic investigation and probabilistic seismic hazard analysis to develop ground motion response spectra is required.</p>  <h5>Guidance</h5>  <p>For nuclear power plants, the assessment is to be conducted in accordance with the latest approved version of CSA N289.2, <em>Ground motion determination for seismic qualification of nuclear power plants</em>.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="19.6.2"></div>
<h4 id="sec19-6-2">19.6.2 Surface faulting</h4>  <p>The assessment of whether a fault or any part of a fault is capable shall be included, on the basis of geological, geophysical, geodetic, or seismological data (including paleoseismological, geomorphological data, etc.).</p>   <p>A capable fault is a fault that has exhibited one or more of the following:</p>
<ul>
<li>evidence of past movement along the fault, which occurred within the appropriate assessment time span; the assessment time-span is proportional to the earthquake recurrence interval or, movement along the fault that has occurred within the last 35,000 years. For highly active regions with short earthquake recurrence intervals, the time frame will be shorter.</li>
<li>a structural or macro-seismically determined (with instrumentation) relationship with a known capable fault, such that movement on one may be expected to result in movement on the other</li>
<li>the maximum potential seismic event associated with the fault is sufficiently large enough that it is reasonable to infer that movement at (or near) the surface could occur</li>
</ul>  <p>Where applicable, the tsunami risk from earthquakes and/or landslides shall be evaluated.</p>  <h5>Guidance</h5>  <p>In some cases, surface evidence of past fault activity may be obscured at a particular site (e.g. where overburden is very thick). In such instances, geological evidence from elsewhere along the fault within the vicinity of the site can be used to evaluate surface faulting, and to determine whether or not a fault is a capable fault.</p>   <p>See section 19.5, Geotechnical hazards, regarding landslides and avalanches.</p>  <p>Refer to NRC Regulations (10 CFR), appendix A to part 100 &ndash; <em>Seismic and Geologic Siting Criteria for Nuclear Power Plants</em>, for additional guidance.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="19.6.3"></div>
<h4 id="sec19-6-3">19.6.3 Volcanic hazards</h4>  <p>Where applicable, an evaluation of the potential for a volcanic event to occur that could affect the safe operation of the reactor facility shall be provided. It shall include all available information (both recorded and those available from geoscientific studies and historical accounts) on volcanic activity that has occurred in the region. It shall also include:</p>
<ul>
<li>characteristics of potential volcanic event, such as tectonic setting, type of volcanism and nature of material produced during eruption including volatile gas emissions</li>
<li>potential effects on ventilation systems</li>
<li>volcanic missiles that could have an impact on SSCs</li>
<li>potential abrasion or chemical impact on SSCs</li>
<li>effects on air and water intakes</li>
<li>effects of static electricity generation on electrical or electronic SSCs</li>
<li>effects on offsite power supplies to the site</li>
<li>effects on emergency plan execution</li>
</ul>  <h5>Guidance</h5>  <p>Further guidance is available in: IAEA Safety Standards Series No. SSG-21, <em>Volcanic Hazards in Site Evaluation for Nuclear Installations</em>.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="19.7"></div>
<h3 id="sec19-7">19.7 Biological hazards</h3>  <p>Site evaluation shall include consideration of the biological phenomena that may pose a risk to the safe operation of the reactor facility.</p>  <p>The evaluation shall also consider the potential for unusual weather events to increase the risk of ventilation and cooling intake systems being clogged by biota (for example, flooding or large storm events can dislodge large biomasses of aquatic macrophytes that will foul the intake structures).</p>  <p>The potential for the rapid growth of pathogens in the ultimate heat sink and other elements of the cooling system poses a potential risk to both humans and non-humans, and shall therefore be considered in the evaluation.</p>  <p>The potential risk to human and non-human biota from biocides and other means of managing these biohazards shall be evaluated.</p>  <p>Refer to sections B.4 and B.4.5 of appendix B for additional requirements and guidance.</p>  <h4>Guidance</h4>  <p>Particular attention should be paid to biological phenomena that may pose a risk to cooling water systems. The potential for the colonization and excessive growth of algae, mussels, or clams within these systems, and the clogging of intake structures by large quantities of biological material (such as aquatic plants, fishes, or jellyfish) are therefore considered.</p>  <p>Consideration should also be given to biological hazards (such as those that may be posed by rodents and birds) that damage or disrupt electrical or other systems within the facility.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="19.8"></div>
<h3 id="sec19-8">19.8 Natural fire hazards</h3>  <p>Natural fire hazards shall be assessed with respect to their potential risk to reactor facility safety.</p>  <p>Refer to sections B.4 and B.4.6 of appendix B for additional requirements and guidance.</p>
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
<h2 id="sec20">20. Evaluation of External, Non-Malevolent, Human-Induced Events</h2>  <p>A systematic approach shall be taken to identify all external, non-malevolent, human-induced events over the lifecycle of the proposed project. Such events shall include:</p>
<ul>
<li>aircraft crashes</li>
<li>other transportation hazards</li>
<li>fires and explosions</li>
<li>chemical and radiological hazards</li>
<li>electromagnetic interference hazards</li>
</ul>  <p>Information provided shall demonstrate how design information provided in support of site evaluation is credible and sufficient to adequately bound the evaluations of environmental impacts.</p>  <p>Refer to appendix B, section B.2.4 for additional requirements and guidance.</p>  <h3>Guidance</h3>  <p>Further guidance is available in:</p>
<ul>
<li>IAEA Safety Standards Series No. NS-G-3.1, <em>External Human Induced Events in Site Evaluation for Nuclear Power Plants</em></li>
<li>IAEA Specific Safety Guide No. SSG-18, <em>Meteorological and Hydrological Hazards in Site Evaluation for Nuclear Installations</em></li>
<li>NUREG/CR-7046, PNNL-20091, <em>Design Basis Flood Estimation for Site Characterization at Nuclear Power Plants in the United States of America</em></li>
<li>NUREG/CR-7004, <em>Technical Basis for Regulatory Guidance on Design-Basis Hurricane-Borne Missile Speeds for Nuclear Power Plants</em></li>
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
<div id="20.1"></div>
<h3 id="sec20-1">20.1 Aircraft crashes</h3>  <p>The potential for aircraft crashes on the site shall be assessed, taking into account the probable characteristics of future air traffic and aircraft. If the assessment reveals an unreasonable risk of an aircraft crash on the site, then an assessment of the associated hazards, including impact, fire, and explosion, is conducted.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="20.2"></div>
<h3 id="sec20-2">20.2 Other transportation hazards</h3>  <p>Present and proposed land and water transportation routes in the region shall be evaluated with respect to potential collisions with SSCs, generation of explosions, chemical and radiological hazards, and fires.</p>  <p>The potential effects on emergency plan execution, including effects on evacuation routes, shall be considered.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="20.3"></div>
<h3 id="sec20-3">20.3 Fires and explosions</h3>  <p>All potential fire and explosion events in the region that could affect the safe operation of the reactor facility shall be evaluated, including:</p>
<ul>
<li>direction and force of pressure waves and their effects on SSCs and unprotected personnel</li>
<li>temperature effects on SSCs and unprotected personnel</li>
<li>potential secondary fires and explosions generated by the primary explosion or fire</li>
<li>release of volatile gases, asphyxiants, or chemicals that could affect safe function of SSCs or harm unprotected personnel</li>
<li>missiles that could have an impact on SSCs</li>
<li>effects that could render offsite power supplies unavailable</li>
<li>potential effects on emergency plan execution
</li>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="20.4"></div>
<h3 id="sec20-4">20.4 Chemical and radiological hazards</h3>  <p>All chemical and radiological hazards in the region that could affect the safe operation of the reactor facility shall be evaluated, with particular focus on:</p>
<ul>
<li>activities that involve the handling, processing, transport, and storage of materials with the potential for explosions, or the production of radioactive materials, volatile and reactive gases, or asphyxiants</li>
<li>effects of the above on SSCs and unprotected personnel, including estimates of overpressure, toxicity, and transport characteristics in air</li>
<li>secondary chemical interactions on SSCs</li>
<li>potential effects on emergency plan execution</li>
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
<div id="20.5"></div>
<h3 id="sec20-5">20.5 Electromagnetic interference hazards</h3>  <p>Electromagnetic emitters in the region shall be evaluated during normal and abnormal operations, with respect to their potential to affect the safe operation of the reactor facility.</p>  <p>Emitters include the following:</p>
<ul>
<li>telecommunications facilities, including military and civilian radar installations</li>
<li>particle accelerators or other research facilities utilizing large electromagnetic fields</li>
<li>high-voltage transmission lines, including the effects of solar storms on transmission</li>
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
<div id="20.6"></div>
<h3 id="sec20-6">20.6 Consideration of future connections to the grid</h3>  <p>Where applicable, it shall be confirmed with the grid owner(s) that, with appropriate grid and plant mitigation measures in place, the location of the reactor facility will not adversely affect the grid. This confirmation shall be documented and provided in the application.</p>  <p>Note: The design and safety analysis against loss of grid events is addressed in the application for a licence to construct.</p>
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
<h2 id="sec21">21. Security Considerations</h2>  <p>Development of security-related physical protection objectives for reactor facilities shall include the gathering of information about the reactor facility&#39;s proposed siting location, in order to study threats or issues presented by the geographical location and characteristics of the proposed site, including potential acts of terrorism. The findings from this study shall be compiled by the applicant in a site selection threat and risk assessment (SSTRA) report &ndash; this applies to new sites, and to reactor facilities on existing sites. The contents of the SSTRA report may be merged into the licensee&#39;s overall security program after the licence to prepare site has been granted.</p>  <p>Prior to initiating licensing, the SSTRA report provides the basis for identifying physical protection requirements and proposed mitigation strategies, to ensure that all security-related regulatory requirements are met. The SSTRA also identifies security concerns that may render the site undesirable from a security perspective.</p>  <p>The SSTRA shall include comprehensive consideration of both physical protection concerns and transportation routes, as described in the following subsections.</p>  <p>The SSTRA report shall be classified as prescribed information, and protected from release under access to information / freedom of information requests, on the basis of national security.</p>  <p>Refer to sections B.3.9 and B.4.7 of appendix B for additional requirements and guidance for the topics addressed in this section.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="21.1"></div>
<h3 id="sec21-1">21.1 Physical protection</h3>  <p>The proposed physical protection requirements shall ensure that the appropriate detection, delay, and response considerations are taken into account.</p>  <p>Physical protection design requirements are influenced by the site location. Site evaluation shall, therefore, address the physical dimensions of the reactor facility and its surrounding environment, including:</p>
<ul>
<li>the topology of the area that can be considered a component of the overall security barrier design (such as line-of-sight view)</li>
<li>the proximity of various infrastructure elements that could adversely affect physical protection, such as a chemical plant that could release a noxious substance, a hydroelectric dam that could be accidentally or deliberately breached (resulting in flood), or an airport that provides significant flight traffic in the vicinity of the site</li>
<li>site boundaries</li>
<li>weather that could factor as a potential impediment to the operability of physical protection systems</li>
<li>details pertaining to the establishment of a construction site, such as the positioning of perimeter fences, access and egress points, and storage of construction drawings</li>
</ul>  <h4>Guidance</h4>  <p>Reactor facilities located in a remote area bordered by a small population density may require different physical protection considerations than those that apply to reactor facilities located in a large urban area.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="21.1.1"></div>
<h4 id="sec21-1-1">21.1.1 Remote areas</h4>  <p>Remote sites shall be evaluated with respect to the anticipated time required to implement essential response services, including how long it will take offsite armed responders to reach the reactor facility.</p>   <h5>Guidance</h5>  <p>This aspect of the SSTRA should support early identification of the need for establishing an onsite nuclear response force capability, to ensure that a trained response group is in position during the construction phase of possible target sets (such as vital areas) that are part of the reactor facility.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="21.2"></div>
<h3 id="sec21-2">21.2 Transportation routes</h3>  <p>The transportation routes in the vicinity of the site shall be considered as part of the site evaluation, to ensure that they are adequately taken into account during future site development activities. The routes to be considered include waterways, land routes and airspace, as described in the following text.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="21.2.1"></div>
<h4 id="sec21-2-1">21.2.1 Waterways</h4>  <p>The site evaluation shall include assessment of all waterways in the vicinity of the site, from the perspective of physical protection. For example, there may be a potential for a waterborne vehicle &ndash; or its personnel or contents &ndash; to be used in a manner that may pose a threat to the reactor facility (e.g., being an explosive risk) to disable operations, equipment, or systems, in an act of sabotage that could have radiological implications.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="21.2.2"></div>
<h4 id="sec21-2-2">21.2.2 Land routes</h4>  <p>All vehicular access land routes in proximity to the site, including rail lines, shall be assessed to determine the security threat they may pose to potential locations of future vital areas.</p>  <h5>Guidance</h5>  <p>Where possible, the surrounding terrain may be considered as a natural barrier in reducing vehicle-borne explosive risk. Where this is not possible, consideration should be given to delineate areas from which land vehicles must be restricted.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="21.2.3"></div>
<h4 id="sec21-2-3">21.2.3 Airspace</h4>  <p>The SSTRA shall consider the threats and risks associated with private and commercial airports, including associated flight pathways. This involves discussions with municipal, provincial, and federal governments to establish measures for deterring entry into airspace identified as being of “high risk” to the site.</p>
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
<h2 id="sec22">22. Decommissioning</h2>  <p>Site evaluation shall include consideration of the effects and requirements of site decommissioning and abandonment activities, including:</p>
<ul>
<li>decommissioning of site preparation or construction activities</li>
<li>execution of a site restoration plan should the project be discontinued</li>
<li>consideration of guidance contained in CNSC G-219, <em>Decommissioning Planning for Licensed Activities, and CSA Group, N294-09, Decommissioning of Facilities Containing Nuclear Substances</em></li>
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
<div id="23"></div>
<h2 id="sec23">23. Management System or Quality Assurance</h2>  <p>A management system, quality management or quality assurance (QA) program shall be established when it can be applied to the site evaluation process.</p>  <p>A management system, quality management or complete site evaluation QA program shall include:</p>
<ul>
<li>procedures to control the effectiveness of assessments and engineering activities performed in the different stages of the site evaluation process</li>
<li>appropriate organization, planning, work control, personnel qualification and training, and activity verification and documentation, to ensure that the management system, quality management or QA program is carried out as effectively as possible</li>
<li>records of all work carried out in the site evaluation process</li>
<li>documentation of the results of studies (including models and simulations) and investigations in sufficient detail to permit independent review</li>
<li>a report that documents the results of all site evaluation work, laboratory tests, and geotechnical analyses and evaluations</li>
</ul>  <p>Information on frequency and severity derived from the characterization of the hazards resulting from external events shall be used in establishing the design basis hazard level for the nuclear installation. Uncertainties in the design basis hazard level shall be taken into account.</p>  <p>In addition, site evaluation shall be carried out in accordance with the relevant requirements in REGDOC 2.9.1, <em>Environmental Protection: Environmental Policy, Assessments and Protection Measures</em> (draft).</p>  <p>These requirements apply to all activities that may influence safety, or that may contribute to the derivation of parameters that will ultimately contribute to the design basis for the site.</p>   <h3>Guidance</h3>  <p>The site evaluation process is part of the overall management system, or management arrangements for the reactor facility (refer to part A, section 6 for further information on management system requirements and guidance). Site evaluation activities are initiated long before the reactor facility is established.</p>  <p>The process of establishing site evaluation-related management system, quality management or QA parameters should involve technical and engineering analyses, along with judgments that require extensive experience and knowledge. In many cases, the parameters and analyses may not lend themselves to direct verification by inspections, tests, or other techniques that can be precisely defined and controlled. In these cases, evaluations should be reviewed and verified by individuals or groups that are independent of those who did the work.</p>  <p>Feedback associated with experienced engineering judgment and expertise in geotechnical engineering is an important aspect of assuring the quality of the site evaluation process. For example, in the assessment of matters such as liquefaction potential and slope stability, the accuracy of the evaluation results depends heavily on insight into failures that have occurred in comparable situations. The information gathered from these assessments should be documented and analyzed to provide evidence that similar failures will not occur.</p>  <p>A management system, quality management or complete site evaluation QA program should include:</p>
<ul>
<li>data control, verification and validation</li>
<li>data format</li>
<li>traceability of data</li>
<li>configuration control (including data, environmental, meteorological, geological, geophysical, survey, hydrological, biological)</li>
<li>measuring and test equipment</li>
<li>use and control of computer modelling</li>
<li>field and laboratory work</li>
<li>calculations and analyses</li>
<li>measures to ensure that the results of the site characterization are accurate, complete, reproducible, traceable and verifiable</li>
</ul>  <p>In addition, the management system, quality management or QA program may be graded in accordance with the importance to safety of the individual evaluation activity under consideration.</p>  <p>Further guidance is available in:</p>
<ul>
<li>IAEA Safety Series No. GS-R-3, <em>The Management System for Facilities and Activities Safety Requirements</em></li>
<li>IAEA Safety Series No. GS-G-3.1, <em>Application of the Management System for Facilities and Activities Safety Guide</em></li>
<li>IAEA Safety Series No. GS-G-3.5, <em>The Management System for Nuclear Installations Safety Guide</em></li>
<li>CSA Group, N286-05, <em>Management systems requirements for nuclear power plants</em></li>
<li>CNSC REGDOC-2.9.1, <em>Environmental Protection: Environmental Policy, Assessments and Protection Measures</em> (draft)</li>
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
<div id="AppA"></div>
<h2 id="AppA">Appendix A: Licence Application Guide: Licence to Prepare Site for a Class I Nuclear Facilities: Nuclear Power Plants and Small Reactor Facilities</h2>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="AppA.1"></div>
<h2 id="AppA-1">A.1 Introduction</h2>  <p>This appendix identifies the information that should be submitted in support of an application for a licence to prepare site for a nuclear power plant (NPP) or a small reactor facility. See part A for the requirements and guidance for the licence to prepare site.</p>  <p>Each application should comprise a document, or series of connected documents, consisting of chapters with the information described in this document. This information should be accompanied by documentation that has the necessary information to complete the safety case being presented for the activity to be licensed.</p>  <p>Regulations applicable to each section are referenced at the beginning of each section. This document also reflects the requirements and expectations stated in regulatory documents and guidance documents available on the <a href="/eng/acts-and-regulations/regulatory-documents/index">CNSC website</a>.</p>  <p>The CNSC may request additional information even though the application generally conforms to these guidelines. Applicants should ensure that they have included sufficiently detailed information to allow the regulatory safety assessment and licensing process to proceed efficiently.</p>   <p>The applicant should demonstrate that alternate approaches taken to those outlined in this document will provide an equal or greater level of safety. Alternate approaches should be explained in the applicable section, or documented in the application&#39;s submissions.</p>   <p>Applicants are strongly encouraged to submit the documents electronically. Security program information and certain other information are sensitive and should be submitted to CNSC in a secure manner.</p>  <p>The application should introduce the application and describe its structure. The objectives and scope of each chapter, as well as the intended connections between them, should be described. The applicant should also describe the process that will be followed if it acquires new information that may invalidate or put in doubt information previously submitted to the CNSC as a part of or in support of the licence application.</p>   <p>In most cases, programs, processes and procedures developed at the licence to prepare site stage will continue to be used, and will adapted to support future phases of the project (i.e., facility construction and operation).</p>  <p>The applicant may elect to submit a complete application or a partial application. For a partial application, the applicant should submit the following information:</p>
<ul>
<li>the information outlined in section A.2</li>
<li>the schedule of submissions of the remaining material</li>
<li>the intended approach for the conduct of the EA and licensing processes (e.g., parallel or sequential approach)</li>
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
<div id="AppA.2"></div>
<h2 id="AppA-2">A.2 Applicant Information</h2>  <p>Applicable regulatory basis:</p>
<ul>
<li><em>Nuclear Safety and Control Act</em>, paragraph 24(4)(a)</li>
<li><em>General Nuclear Safety and Control Regulations</em>, paragraphs 3(1)(a), 3(1)(b), 15(a), 15(b), 15(c)</li>
<li><em>Class I Nuclear Facilities Regulations</em>, paragraph 3(c)</li>
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
<div id="AppA.2.1"></div>
<h3 id="AppA-2-1">A.2.1 Applicant&#39;s name and business address</h3>  <p>The applicant will be the organization accountable for compliance with the associated regulations under the <em>Nuclear Safety and Control Act</em> (NSCA) and the conditions of the licence to prepare site.</p>  <p>This section should contain a description of the applicant&#39;s business entity, including the following information:</p>
<ul>
<li>names of the persons who have authority to interact with the CNSC on behalf of the applicant</li>
<li>names and position titles of the persons who are to be responsible for the management and control of the licensed activity</li>
</ul>  <p>The applicant&#39;s name is the full legal name of the applicant&#39;s business entity. Legal documentation demonstrating the validity of the business entity should be supplied.</p>  <p>The applicant&#39;s business address should be a civic address in Canada, and documentation should be provided to validate the applicant&#39;s address. Such evidence should contain the applicant&#39;s full legal name, and examples include:</p>
<ul>
<li>municipal tax statement</li>
<li>copy of a licence used at the address</li>
<li>articles of incorporation</li>
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
<div id="AppA.2.2"></div>
<h3 id="AppA-2-2">A.2.2 Activity to be licensed</h3>  <p>The activity to be licensed is site preparation &ndash; preparing a site for the construction and long-term operation of a nuclear power plant (or small reactor facility) (specify anticipated thermal power output), followed by the eventual decommissioning and abandonment of the site.</p>  <p>The applicant should provide the following:</p>
<ul>
<li>a labelled map or series of maps showing the project&#39;s location</li>
<li>a map of the site with the proposed or final layout locations (if possible) of the proposed structures determined for the site at the post-construction stage</li>
</ul>  <p>The applicant should provide total facility capacity, in Megawatts thermal (MWth), and/or Megawatts electric (MWe), to be located at the site, including the ultimate purpose of the facility. This includes, for example, the total number of nuclear units and the projected in-service dates for each unit.</p>  <p>This section should clearly itemize all high-level activities proposed to be conducted under the licence to prepare site.</p>  <p>Selection of a specific facility technology is not required when submitting a licence to prepare site application. The Commission may, however, issue a licence to prepare site with conditions that restrict activities to those that are not technology-dependent, until the applicant selects a facility technology. Applications for a licence to prepare site submitted without the selection of a specific facility technology should ensure the bounding parameters encompass all technologies under consideration.</p>   <p>An application considering several technologies should clearly identify those site activities proposed to be undertaken under a licence to prepare site that are not impacted by the technology choice, as well as those that are.</p>  <p>Activities proposed by the applicant to be encompassed by the licence to prepare site will be reviewed taking into account the following:</p>
<ul>
<li>where appropriate, sufficient facility design information has been supplied to support the proposed site preparation activity (for example, plant foot print excavation, cooling water intake)</li>
<li>activities are controlled/undertaken to adequately to protect the health and safety of persons, the environment, and meet international obligations</li>
<li>financial guarantee under the licence to prepare site adequately addresses restoration of the site required as a result of the proposed activities, should the project be abandoned</li>
<li>adequate oversight will be in place during execution of activities, to ensure compliance with the NSCA and its associated regulations</li>
</ul>  <p>Site preparation activities may involve construction of facility structures, systems and components (SSCs), including:</p>
<ul>
<li>facility foundation structures (including support pilings)</li>
<li>facility intake and outlet channels and structures (including cooling ponds, cooling towers and related connections to the ultimate heat sink)</li>
<li>non-nuclear facility SSCs, such as a plant water treatment plant, unless it can be shown that the design of these systems will be independent of the reactor technology(ies) being considered and will be sufficient for any reactor technology proposed for the site</li>
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
<div id="AppA.2.3"></div>
<h3 id="AppA-2-3">A.2.3	Proof of site ownership or authority from owner to conduct activities on the site</h3>  <p>The following documents are considered to be acceptable:</p>
<ul>
<li>as proof of site ownership:
<ul>
<li>land title or registry office documentation</li>
<li>legal drawing (signed by a registered land surveyor) of the site showing the proposed exclusion area boundary and significant features in the vicinity of the site (such as major transportation routes, large industrial facilities); or</li>
</ul></li>
<li>as proof of authority from owner to conduct activities on the site:
<ul>
<li>legal agreement with the land owner for activities that will include site preparation, and eventual construction and operation of the facilities described per paragraph 3(b) of the <em>Class I Nuclear Facilities Regulations</em> in the application for licence to prepare site</li>
<li>land owner&#39;s land title or registry office documentation</li>
<li>legal drawing (signed by a registered land surveyor) of the site showing the proposed exclusion area boundary and significant features in the vicinity of the site (such as major transportation routes, large industrial facilities)</li>
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
<div id="AppA.2.4"></div>
<h3 id="AppA-2-4">A.2.4	Nuclear substances</h3>  <p>Applicable regulatory basis:</p>
<ul>
<li><em>General Nuclear Safety and Control Regulations</em>, paragraph 3(1)(c)</li>
<li><em>Nuclear Substances and Radiation Devices Regulations</em> (NSRDR)</li>
</ul>  <h4>A.2.4.1 General considerations</h4>  <p>"Nuclear substance" is defined in section 2 of the <em>Nuclear Safety and Control Act</em>. Typically it is not expected that activities encompassed by the licence to prepare site involve handling of radioactive or nuclear substances, except for substances exempt from a licence by the NSRDR.</p>  <p>For any radioactive or nuclear substances that are proposed for site preparation activities, and that are not exempt from a licence by the NSRDR, the application for licence to prepare site should state whether the substances will be encompassed by their own CNSC nuclear substance and device licenses, or encompassed by the licence to prepare site.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="AppA.3"></div>
<h2 id="AppA-3">A.3	Public Consultation and Aboriginal Consultation</h2>  <p>The applicant should demonstrate that ongoing consultations with the appropriate parties were performed during site evaluation, as described in part A, section 5 of this document and that these ongoing consultations are integrated into site preparation activities. The consultation process should demonstrate involvement of stakeholders in good faith, with a genuine desire to utilize the input received.</p>   <p>Applicants should reference the description of the public information program as described in RD/GD-99.3, <em>Public Information and Disclosure</em>, and work with all stakeholders to establish:</p>
<ul>
<li>the most appropriate methods by which to consult</li>
<li>the objectives and expectations of the consultation process</li>
<li>the means by which interested parties will be able to participate in the formulation and implementation of decisions</li>
<li>a dispute resolution mechanism that documents disputes and records efforts taken in their resolution</li>
</ul>  <p>Applicants are encouraged to thoroughly document the consultation process, and to include a summary of that process when submitting an application to construct a nuclear power plant to the CNSC. The summary should include such information as:</p>
<ul>
<li>a list of the stakeholders that were engaged, and how they were identified</li>
<li>the project information provided to the stakeholders</li>
<li>a summary of issues raised</li>
<li>a description of how the applicant has already responded, or plans to respond, to any issues raised</li>
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
<div id="AppA.3.1"></div>
<h3 id="AppA-3-1">A.3.1	Public information program</h3>  <p>Applicable regulatory basis:</p>
<ul>
<li><em>General Nuclear Safety and Control Regulations</em>, paragraph 3(1)(k)</li>
<li><em>Class I Nuclear Facilities Regulations</em>, paragraph 3(j)</li>
</ul>  <p>Site preparation activities performed in the development of a future nuclear site and its associated facility are usually similar to those activities under large scale construction/land development projects. As such, the hazards resulting from the project are non-nuclear or conventional as described in section A.5.</p>   <p>The applicant should initiate its public information program well ahead of the start of site preparation activities subsequent to the issuance of a licence to prepare site. Applicants should refer to part A, section 5.1 of this document for further information.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="AppA.3.2"></div>
<h3 id="AppA-3-2">A.3.2	Aboriginal consultation</h3>  <p>Canada has statutory, contractual and common law obligations to consult with Aboriginal groups on the effects of proposed projects on established or potential Aboriginal rights. The common-law duty to consult is based on judicial interpretation of the obligations of the Crown in the context of existing Aboriginal and treaty rights of the Aboriginal peoples of Canada, recognized and affirmed in section 35 of the <em>Constitution Act, 1982</em>.</p>  <p>The duty to consult by the CNSC arises when it has knowledge, real or constructive, of the potential existence of an Aboriginal right or title, and the CNSC contemplates conduct that might adversely affect the right or title.</p>  <p>Although this legal obligation does not extend to third parties such as industry proponents, early engagement with Aboriginal groups by the proponent can enhance relationships, promote trust, improve understanding of the project by the affected Aboriginal groups, and help the proponent to understand the interests of those in the affected region.</p>  <p>Aboriginal consultation is described in further detail in <a href="http://nuclearsafety.gc.ca/eng/pdfs/duty-to-consult/August-2011-Codification-of-Current-Practice-CNSC-Commitment-to-Aboriginal-Consultation_e.pdf"><em>Codification of Current Practice: CNSC Commitment to Aboriginal Consultation</em></a>. Applicants should also refer to part A, section 5.2 of this document regarding Aboriginal consultation activities.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="AppA.3.3"></div>
<h3 id="AppA-3-3">A.3.3	Intergovernmental consultation</h3>  <p>This section should provide a summary of the results of consultation with all levels of government, to indicate their intended involvement and support for the project. Refer to part A, section 5.3 for information on intergovernmental and interdepartmental consultation.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="AppA.4"></div>
<h2 id="AppA-4">A.4	Management System</h2>  <p>Applicable regulatory basis:</p>
<ul>
<li><em>General Nuclear Safety and Control Regulations</em>, paragraph 3(1)(k)</li>
<li><em>Class I Nuclear Facilities Regulations</em>, paragraph 3(d)</li>
</ul>  <p>The management system integrates safety, health, environmental, and security elements to ensure that safety is properly taken into account in all the activities of an organization. The main objective of the requirements for the management system is to ensure, by considering the implications of all actions not within separate management systems but with regard to safety as a whole, that safety is not compromised.</p>  <p>This section should describe the licensee&#39;s or licence applicant&#39;s management system being implemented for the management and control of all licensed activities. The description should demonstrate that appropriate provisions integrating safety, health, environmental protection, security, and quality have been implemented for all safety-related activities. This section should also describe measures taken to ensure the implementation and observance of the management system programs, processes and procedures.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="AppA.4.1"></div>
<h3 id="AppA-4-1">A.4.1	Management system for nuclear facility design activities occurring during site preparation</h3>  <p>Applicable regulatory basis:</p>
<ul>
<li><em>Class I Nuclear Facilities Regulations</em>, paragraph 4(d)</li>
</ul>  <p>"Design" includes:</p>
<ul>
<li>technical activities that start with the identification of conceptual input and produce documentation</li>
<li>process and the result of developing the concept, detailed plans, supporting calculations and specifications for a nuclear facility and its parts</li>
<li>engineering/technical and safety analyses and assessments</li>
</ul>  <p>The intent of the regulation at this stage of licensing in the project lifecycle is for the applicant to ensure design activities are managed according to the design organization&#39;s management system for the reactor technologies under consideration. The applicant should ensure the applicable portions of the management system are in place before undertaking any design activities. The applicant should demonstrate that design organization&#39;s management system has been reviewed, adequately implemented and accepted.</p>  <p>Design control measures, in the form of management system processes, procedures and practices, ensure consistent quality of the design of facility systems, structures and components. High quality design, and design management serves to minimize latent design flaws. These latent flaws may manifest themselves as safety issues later in the plant life.</p>  <p>Refer to sections 6.1–6.3 of part A for applicable requirements and guidance regarding the management system for the design of the nuclear facility.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="AppA.4.2"></div>
<h3 id="AppA-4-2">A.4.2	Proposed management system for site evaluation</h3>  <p>The assessment of the results of the site evaluation is a key part of the activities carried out under a licence to prepare site. The management system governing the conduct of site evaluation activities is described in the application. Refer to part A, section 6.2 and part B, section 23 regarding the management system as it pertains to site evaluation.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="AppA.4.3"></div>
<h3 id="AppA-4-3">A.4.3	Management system for the security program</h3>  <p>Refer to part A, section 6.3 for applicable requirements and guidance regarding management system for the security program.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="AppA.4.4"></div>
<h3 id="AppA-4-4">A.4.4	Consideration of safety culture</h3>  <p>Safety culture is applicable to all the activities that can have an impact on health, safety and on the environment, and it applies to all personnel involved in every phase of the plant&#39;s lifecycle. A strong safety culture in the site preparation phase increases confidence in the licensee&#39;s future performance in later licensing steps. Information should be provided on the strategy leading to the establishment and maintenance of a healthy safety culture for all parties (including contractors and sub-contractors) involved in site preparation activities.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="AppA.5"></div>
<h2 id="AppA-5">A.5	Operating Performance &ndash; Conduct of the Licensed Activity</h2>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="AppA.5.1"></div>
<h3 id="AppA-5-1">A.5.1	Identification of risks to health and safety of persons</h3>  <p>Applicable regulatory basis:</p>
<ul>
<li><em>Class I Nuclear Facilities Regulations</em>, paragraphs 3(e), 4(a), 4(e)</li>
<li>For activities to be conducted under the licence to prepare site, the risks to health and safety that may be encountered by workers and the public should be characterized. These risks are generally similar to those encountered during pre-construction activities at a conventional large scale construction project.</li>
</ul>   <p>The risks to the health and safety of workers and the public resulting from the activities encompassed by the licence to prepare site should be assessed and should be comparable to those for pre-construction activities at a conventional large-scale construction project.</p>  <p>Refer to part A, section 7 for applicable requirements and guidance regarding the risks to the health and safety of persons.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="AppA.6"></div>
<h2 id="AppA-6">A.6	Safety Analysis</h2>  <p>Applicable regulatory basis:</p>
<ul>
<li><em>Class I Nuclear Facilities Regulations</em>, paragraph 4(e)</li>
</ul>   <p>For the purposes of a licence to prepare site, a hazard analysis focusing on activities under this licence should be conducted. For information to support the hazard analysis, refer to section 11 on conventional health and safety and section 13.1 on environmental risk assessment (ERA).</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="AppA.7"></div>
<h2 id="AppA-7">A.7	Physical Design</h2>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="AppA.7.1"></div>
<h3 id="AppA-7-1">A.7.1	Civil structures and civil works</h3>  <p>As pertaining to the licence to prepare site, the application should include information on the design measures such as flood protection and erosion control. In addition, the application should provide information on any safety important civil work carried out during site preparation and on civil structures used in site preparation (e.g., containment dykes, retaining walls, earthworks).</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="AppA.7.2"></div>
<h3 id="AppA-7-2">A.7.2	Description of the exclusion zone and proposed layout of structures within the zone</h3>  <p>Applicable regulatory basis:</p>
<ul>
<li><em>General Nuclear Safety and Control Regulations</em>, paragraph 3(d)</li>
<li><em>Class I Nuclear Facilities Regulations</em>, paragraphs 3(a) and 3(b)</li>
<li><em>Nuclear Security Regulations</em>, paragraph 3(b)</li>
</ul>  <p>As per section 1 of the <em>Class I Nuclear Facilities Regulations</em>, "exclusion zone" means a parcel of land within or surrounding a nuclear facility on which there is no permanent dwelling and over which a licensee has the legal authority to exercise control.</p>   <p>Whether the technology has been chosen or not, the exclusion zone size should be characterized based on a combination of dose limits, security and robustness design considerations, and emergency preparedness considerations that are affected by the land use around the site.</p>  <p>There are two acceptable approaches that the applicant may consider in determining the location of the exclusion zone boundary. In both cases, the approach used is expected to consider site characterization information that meets requirements contained in sections 9 and 15 of part A of this document.</p>   <p>This section of the application should contain a link to other sections of the application related to security and robustness design considerations, and emergency preparedness considerations in support for the exclusion zone boundary.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="AppA.7.3"></div>
<h3 id="AppA-7-3">A.7.3	Protective zones</h3>  <p>The protective zone is the area beyond the exclusion zone that should be considered with respect to implementing emergency measures. This includes consideration of such matters as population distribution and density, residential development and sensitive public facilities, land and water usage, roadways, evacuation planning, and consequence analysis. Refer to part A, section 9.4 for further information regarding protective zones.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="AppA.8"></div>
<h2 id="AppA-8">A.8	Radiation Protection</h2>  <p>Applicable regulatory basis:</p>
<ul>
<li><em>Radiation Protection Regulations</em></li>
<li><em>General Nuclear Safety and Control Regulations</em> paragraphs 3(e), 3(f), 29(1)(b), 17(d), and 17(e)</li>
<li><em>Class I Nuclear Facilities Regulations</em>, paragraphs 3(g)</li>
</ul>  <p>In the event that nuclear substances are encountered during activities carried out under the licence to prepare site (e.g., such as situations described in part A, section 7 of this document), radiation protection measures are implemented.</p>  <p>Where applicable, the doses to workers and the public associated with activities to be encompassed by the licence to prepare site, or from exposures to any radioactive substances resulting from past or present nuclear activities (for example, discovery of contaminated soils during excavation) is evaluated.</p>   <p>Refer to part A, section 10 for further information regarding applicable radiation protection aspects for activities conducted under the site preparation licence.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="AppA.9"></div>
<h2 id="AppA-9">A.9	Conventional Health and Safety</h2>  <p>Applicable regulatory basis:</p>
<ul>
<li><em>Class I Nuclear Facilities Regulations</em>, paragraphs 3(f) and 4(e)</li>
</ul>  <p>The production and use of nuclear energy is under federal jurisdiction. When in the presence of a federal undertaking, and integral to the operation and management of that undertaking, the labour relations and working conditions &ndash; which includes occupational health and safety (OHS) &ndash; fall under federal jurisdiction. The regulation of OHS in nuclear power plants involves three regulatory agencies:</p>
<ul>
<li>Employment and Social Development Canada (ESDC)</li>
<li>the provincial ministry of labour where the site is located</li>
<li>CNSC</li>
</ul>  <p>Under ESDC, the <em>Canada Labour Code, Part II</em> applies. In Ontario, however, the provincial legislation concerning OHS has been incorporated by reference into the Canada Labour Code, and a memorandum of understanding (MOU) is in place. Therefore, in Ontario, OHS matters are governed by provincial requirements, on behalf of ESDC.</p>  <p>In other provinces and territories, governance of the OHS matters is determined by analyzing and identifying the applicable jurisdiction for each case. Although OHS matters at nuclear facilities usually fall under the responsibility of the labour program at ESDC, provincial licensee organizations that operate nuclear facilities benefit from provincial Crown immunity unless it is displaced by law. This excludes federal jurisdiction over OHS matters at nuclear facilities that are operated by provincial crown corporations. MOUs between the CNSC and provincial labour ministries to formally establish jurisdiction over the administration of OHS matters may be in place, and should also be considered when reviewing any site licence application.</p>  <p>The current MOU with the province of Saskatchewan for handling OHS matters at the uranium mines would need to be expanded to include OHS provisions for any other future nuclear facilities in that province. Other provinces and territories would also need to perform this kind of evaluation.</p>  <p>For other provinces and territories where the governance over OHS matters has not been formally assigned by law, jurisdiction and governance over OHS issues remains with ESDC, and the applicable <em>Canada Labour Code, Part II</em>.</p>  <p>Refer to part A, section 11 for applicable requirements and guidance regarding conventional health and safety.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="AppA.10"></div>
<h2 id="AppA-10">A.10 Emergency Management and Fire Protection</h2>  <p>Applicable regulatory basis:</p>
<ul>
<li><em>General Nuclear Safety and Control Regulations</em>, paragraphs 3(1)(k)</li>
<li><em>Class I Nuclear Facilities Regulations</em>, paragraphs 3(f)</li>
</ul>  <p>Activities performed at this stage in the development of a future nuclear site are similar to those found at any large-scale construction/land development project; however, because the undertaking is a licensed activity under the NSCA, the applicant must clearly demonstrate the protection of the health and safety of persons and the environment as well as the maintenance of national security.</p>  <p>Refer to part A, section 12 regarding applicable requirements and guidance for emergency management and fire protection.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="AppA.11"></div>
<h2 id="AppA-11">A.11 Environmental Protection</h2>  <p>The proposed environmental protection policies, programs and procedures needed for the subsequent licensing phases are established.</p>  <p>Applicable regulatory basis:</p>
<ul>
<li><em>Class I Nuclear Facilities Regulations</em>, paragraphs 3(g), 3(h), 4(e)</li>
</ul>  <p>The objective of environmental protection policies, programs and procedures is to establish adequate provision for the protection of the environment through an integrated set of documented activities that meet the requirements of CNSC regulatory document REGDOC-2.9.1, <em>Environmental Protection: Environmental Policy, Assessments and Protection Measures</em> (draft 2015). When effectively implemented throughout the project, environmental protection policies, programs and procedures, assist the applicant in ensuring that there will be no significant adverse environmental effects.</p>  <p>Submissions surrounding environmental protection policies, programs and procedures should demonstrate consideration of criteria contained in the project&#39;s environmental impact statement guidelines.</p>  <p>Refer to part A, section 13 for applicable requirements and guidance regarding environmental protection.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="AppA.12"></div>
<h2 id="AppA-12">A.12 Waste Management</h2>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="AppA.12.1"></div>
<h3 id="AppA-12-1">A.12.1 Hazardous substances / hazardous wastes</h3>  <p>Applicable regulatory basis:</p>
<ul>
<li><em>Class I Nuclear Facilities Regulations</em>, paragraphs 3(e), 4(a), 4(e)</li>
</ul>  <p><em>The General Nuclear Safety and Control Regulations</em> define a hazardous substance or hazardous waste as "a substance or waste, other than a nuclear substance, that is used or produced in the course of carrying on a licensed activity and that may pose a risk to the environment or the health and safety of persons."</p>  <p>Refer to part A, section 14.1 for applicable requirements and guidance regarding waste management.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="AppA.12.2"></div>
<h3 id="AppA-12-2">A.12.2 Decommissioning</h3>  <p>Two areas of decommissioning should be considered:</p>
<ul>
<li>site evaluation from a decommissioning perspective: the applicant should demonstrate that site evaluation has appropriately considered future decommissioning in its planning for the nuclear facility, and to confirm that the site evaluation process has adequately considered end-of-life decommissioning,</li>
<li>activities encompassed by the licence to prepare site: a preliminary decommissioning plan and financial guarantee should to cover the scope of work and related costs to return the site from the conditions expected at the end of a licence to prepare site to an agreed-upon end-state.</li>
</ul>  <p>Refer to part A, section 14.2 for applicable requirements and guidance regarding decommissioning.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="AppA.13"></div>
<h2 id="AppA-13">A.13 Security</h2>  <p>At the site preparation stage, the security program is primarily focused on protection of prescribed information: The security program is developed in view of the project progressing to the construction stage.</p>  <p>Elements of the security program include:</p>
<ul>
<li>site security program</li>
<li>site access clearance</li>
<li>security arrangements with offsite response forces</li>
<li>physical security</li>
<li>cyber security</li>
<li>security program officer</li>
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
<div id="AppA.13.1"></div>
<h3 id="AppA-13-1">A.13.1 Prescribed information</h3>  <p>Applicable regulatory basis:</p>
<ul>
<li><em>General Nuclear Safety and Control Regulations</em>, paragraphs 3(1)(d), 3(1)(g), 3(1)(h)</li>
<li><em>Nuclear Security Regulations</em>, section 3</li>
</ul>  <p>Prescribed information is defined in section 21 of the <em>General Nuclear Safety and Control Regulations</em>. Applicant submissions and resultant review correspondence related to this topic is considered to be prescribed information under the NSCA and is to be submitted in a secure manner. Prescribed equipment, as defined by section 20 of the <em>General Nuclear Safety and Control Regulations</em>, is not expected to be part of a licence to prepare site.</p>  <p>The quantity of prescribed information to be encompassed by the licence to prepare site will be small and therefore the scale of the program should be commensurate with the quantity and nature of the information.</p>  <p>Refer to part A, section 15.1 for further information regarding protection of prescribed information.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="AppA.13.2"></div>
<h3 id="AppA-13-2">A.13.2 Site security program</h3>  <p>The security program is to:</p>
<ul>
<li>be based on risk/vulnerabilities and considers applicable criteria contained in G-274, <em>Security Programs for Category I or II Nuclear Materials or Certain Nuclear Facilities</em></li>
<li>have a site plan that conforms to section 16 of the <em>Nuclear Security Regulations</em></li>
<li>contain adequate criteria for the classification of prescribed information; electronic and hard copy information that discusses security risks, vulnerabilities, and strategies may require a higher classification pursuant to the <em>Treasury Board Policy on Government Security</em></li>
<li>have adequate measures for reporting events internally and to the CNSC</li>
<li>be implemented according to the applicant&#39;s established quality assurance program</li>
<li>have a configuration management program for physical assets and "soft" assets, such as information technology and records</li>
<li>have an adequate skills (training) program, with a particular focus on staff who maintains cyber/network security</li>
<li>have fitness-for-duty criteria</li>
<li>have processes to examine, assess and implement "lessons learned" from similar projects and industry operational experience</li>
</ul>  <p>Refer to part A, section 15.2 for further information on the site security program</p>
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
<h2 id="AppB">Appendix B: Working-Level Site Evaluation Requirements and Guidance</h2>
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
<h2 id="AppB-1">B.1 General</h2>  <p>The additional requirements and guidance in this appendix are intended to provide more detailed information to practitioners conducting site evaluation activities for a reactor facility. These requirements and guidance supplement the requirements and guidance articulated in part B, and are intended to be used to develop and maintain information related to site evaluation for a reactor facility.</p>  <p>For the purposes of this manual, the term "licensee" represents either a licensee or an applicant for a licence under the <em>Nuclear Safety and Control Act</em>.</p>  <p>Where language is used, such as "current licensing phase" or "activities being conducted under the current licence", the reader should interpret the text in the literal sense, but also from the point of view of an applicant seeking a decision from the Commission to conduct activities under that licensing phase. For example, if the current licensing phase is the licence to construct, requirements and guidance refers to a licensee conducting activities under a licence to construct or to an applicant seeking a decision on a construction licence application.</p>
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
<h2 id="AppB-2">B.2 Licensee&#39;s Site Evaluation Program and Processes</h2>  <p>Refer to part B, section 17 for high-level requirements.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="AppB.2.1"></div>
<h3 id="AppB-2-1">B.2.1 General considerations</h3>  <p>The process used for the evaluation of the site shall document:</p>
<ul>
<li>the methodology used to determine the suitability of the site over the full lifecycle of the proposed facility</li>
<li>the processes used to manage the quality of work during site evaluation and the activities which verify compliance</li>
</ul>  <p>Because characterization methods and tools evolve over time, the licensee shall demonstrate that the process of site evaluation will continue to be periodically updated in future licensing phases to ensure that the design basis and the licensing basis are supported by up-to-date information.</p>  <h4>Guidance</h4>  <p>The site evaluation process should satisfy the criteria contained in the following documents that apply to the facility being considered:</p>
<ul>
<li>applicable federal environmental legislation</li>
<li>REGDOC-2.5.2, <em>Design of Reactor Facilities: Nuclear Power Plants</em>, or RD-367, <em>Design Requirements for Small Reactors</em></li>
<li>EPS 1/PG/2 <em>Environmental Codes of Practice for Steam Electric Power Generation: Siting Phase</em> (Environment Canada, 1987)</li>
<li>CSA Group, N288.6-12, <em>Environmental Risk Assessments at Class I Nuclear Facilities and Uranium Mines and Mills</em>, 2012.</li>
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
<div id="AppB.2.2"></div>
<h3 id="AppB-2-2">B.2.2 Licensee&#39;s oversight of the site evaluation process</h3>  <p>The licensee&#39;s site evaluation organization should be documented and include a description of relationships between the applicant and contractors used in the performance of site evaluation activities.</p>   <h4>Guidance</h4>  <p>A clear and direct oversight presence in every aspect of site evaluation should be demonstrated.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="AppB.2.3"></div>
<h3 id="AppB-2-3">B.2.3 Process for gathering baseline data</h3>  <p>The process by which it reviews the credibility and quality of data collection and the analysis methods used by consulting companies should be documented. The process should describe the steps to continue data collection into future licensing stages.</p>  <p>Where sampling is used to gather field data, standard sampling techniques and approaches should be from recognized government agencies and peer-reviewed published scientific literature for the appropriate technical discipline (e.g., groundwater monitoring, fish monitoring). Guidance contained in Environment Canada&#39;s <em>Inspector&#39;s Field Sampling Manual: A Sampling Manual and Reference Guide for Environment Canada Inspectors</em> (EC 2005) may be considered. This manual, developed by Environment Canada, sets and implements national standards and uniformity for field sampling practices. It also serves as a training manual and a reference guide for field inspectors. The manual describes planning, sampling in the field, sampling for specific media and protocols.</p>  <p>Other relevant guidance for field sampling baseline is CSA Group N288.4-10 and US EPA <em>Guidance on choosing a sampling design for environmental data collection</em> (EPA QA/G-5S December 2002).</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="AppB.2.4"></div>
<h3 id="AppB-2-4">B.2.4	Process to evaluate natural and human-induced factors that may affect safety and security</h3>  <p>The process used to define and evaluate evolving natural and human-induced factors over the lifecycle of the proposed facility that may affect safety and security shall be documented.</p>   <h4>Guidance</h4>  <p>The process should include factors such as:</p>
<ul>
<li>external events</li>
<li>major planned facility evolutions such as plant life extension activities</li>
<li>impact of the site on the environment</li>
<li>changes to population density and land use in the protective zone, including future facilities that may be difficult to evacuate</li>
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
<div id="AppB.3"></div>
<h2 id="AppB-3">B.3	Baseline Data Used to Evaluate Suitability Throughout the Facility Lifecycle</h2>  <p>A comprehensive site evaluation includes a demonstration of the applicant&#39;s understanding of site-specific and regional baseline characteristics and their impact(s) on site operations. The site baseline data shall be sufficiently robust to support site evaluation claims.</p>   <p>Adequate and sufficient baseline data is required to assist with confirmation that:</p>
<ul>
<li>predicted effects of external events on the site are credible</li>
<li>predicted effects of external events on site events, the predicted environmental impacts and the testing of those predictions are credible</li>
<li>proposed plant design and the design of site infrastructure to be established are adequate</li>
</ul>  <h3>Guidance</h3>  <p>For each site baseline data topic, information should justify the size of the local and regional study areas used for that topic.</p>  <p>The uncertainties and types of uncertainties (e.g., natural randomness, insufficient knowledge, and sampling or measurement error) should be described.</p>  <p>The process used for each type of data collection should be managed consistent with the licensee&#39;s management system. The results of the site baseline characterization should be accurate, complete, reproducible, traceable and verifiable.</p>  <p>Limitations and data gaps in the quality and completeness of baseline information should be identified and addressed. This includes specifying the deviation from a reference conditions that would be considered an adverse effects, taking into consideration the normal natural variation for that parameter. This can be done through the implementation of statistical design into baseline studies.</p>  <p>Reference sites used to track changes that are not project-related, but that coincide with project activities (for example, bird nesting habits) should be established. This is important to support site findings on baseline characterization of species occurrence. The selection basis and planned use of reference sites should be specified.</p>   <p>Site baseline data submissions should, where appropriate, also provide details on the present human population distribution and land use and indicate how each of the topics described in section B.2 of this appendix has affected population distribution and land use (for example, seasonal floods may have rendered a particular area near the site unsuitable for industrial development).</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="AppB.3.1"></div>
<h3 id="AppB-3-1">B.3.1	Baseline climate, meteorological data and air quality data</h3>  <p>Information should include:</p>
<ul>
<li>prehistoric, historic, and instrumentally recorded climate data sources that reflect the regional conditions (e.g., Canadian climate normals published by Environment Canada)</li>
<li>one year of onsite meteorological data for the most recent one-year period, to evaluate the potential environmental impacts to the surrounding areas. This information would provide the atmospheric dispersion in the vicinity of the site and the surrounding areas. The assumptions used should be clearly identified under a separate header. Conservatism should be addressed</li>
<li>information about climatic parameters such as air masses, general airflow, pressure patterns, frontal systems, and temperature and humidity conditions, as compared against references</li>
<li>information about the ambient air quality of the study areas prior to the initiation of the project</li>
<li>a description of the methods used to identify nuclear and hazardous substances that will be included in the baseline air quality characterization</li>
<li>topographic descriptions of the site area and information about local (site) meteorological parameters. The information provided should establish that the data represents conditions at the site and its immediate vicinity. The location of onsite meteorological stations and other local sources of meteorological data should be described with respect to local topographic characteristics that could impact local airflow patterns (e.g., local circulation conditions, such as "drainage flow") and meteorological parameters, such as temperature and humidity.</li>
<li>information about land-lake interactions if the site is to be located close to a lake</li>
<li>extreme (minimum or maximum) and average values of meteorological variables for regional and onsite locations including: air temperature, relative humidity, precipitation, wind speed and direction, atmospheric pressure, solar radiation</li>
<li>information about rare (infrequent) and other meteorological phenomena, owing to their possible impact on facility safety, such as tornadoes, hurricanes (tropical cyclones), blizzards, dust and sand storms, drought, icing, hail and lightning</li>
</ul>  <p>Typically, one year of meteorological data is sufficient if it covers the most recent one-year period. If this is not the case, then average data covering a longer recent period up to five years is used. Further, data covering the most recent one-year period should be verified against the five-year average to ensure that it is typical of the conditions at the site. If the data is not typical, then the five-year average data should be used.</p>  <p>The locations of all meteorological and air quality data collection stations should be identified on an appropriately sized topographical map with a justification of their locations.</p>  <p>The regional and local meteorological data should be appropriate as bases for:</p>
<ul>
<li>applicant/licensee evaluation of potential changes in normal and extreme values</li>
<li>severe weather phenomena</li>
<li>air quality conditions resulting from:
<ul>
<li>site preparation</li>
<li>facility construction</li>
<li>facility operation</li>
<li>decommissioning</li>
<li>site abandonment</li>
</ul></li>
</ul>  <p>Data on regional climatological and local meteorological conditions and phenomena should be adequate as bases for assessing the:</p>
<ul>
<li>effects on design and siting of the reactor facility and its heat dissipation system</li>
<li>impact on the atmospheric environment resulting from site preparation, station construction, operation, decommissioning, and abandonment</li>
</ul>  <p>Baseline information should demonstrate consideration of criteria contained in the following International Atomic Energy Agency safety guides:</p>
<ul>
<li>IAEA Safety Guide Safety Standards Series NS-G-3.2, <em>Dispersion of Radioactive Material in Air and Water and Consideration of Population Distribution in Site Evaluation for Nuclear Power Plants</em></li>
<li>IAEA Safety Standards Series, Specific Safety Guide No. SSG-18, <em>Meteorological and Hydrological Hazards in Site Evaluation for Nuclear Installations</em></li>
</ul>  <p>For baseline air quality data, air quality assessment results should be compared against applicable provincial and federal air quality criteria and objectives, such as annual, 24-hour and one-hour maximum acceptable concentrations. Precise guidance can be obtained from provincial regulations and standards.</p>   <p>For complete hazardous substance analysis, volatile organic compounds (VOCs) are compared to ozone, particulate matter related to total suspended particulates (TSP), particulate matter < 10 µm (PM10) and particulate matter < 2.5 µm (PM2.5), sulphur dioxide (SO<sub>2</sub>), nitrogen oxides (NO<sub>x</sub>) and carbon monoxide (CO) are to be included.</p>  <p>For nuclear substance analysis, tritium oxide and tritium gas, carbon 14 (C-14), noble gases, iodine-131, and particulates are to be included.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="AppB.3.2"></div>
<h3 id="AppB-3-2">B.3.2	Baseline geological, geotechnical, and coastal geomorphological data and baseline information on geotechnical and seismic hazards </h3>  <p>The following baseline data and information within the site, local and regional areas shall be documented:</p>   <ul>
<li>geological history and physical, chemical, and mechanical characteristics of geological formations</li>
<li>structural geology and tectonic setting</li>
<li>geotechnical properties of overburden materials (within the site and local areas)</li>
<li>coastal geomorphology (e.g., erosion mechanisms and characteristics)</li>
<li>natural or human-induced geotechnical hazards</li>
<li>natural or human-induced seismic hazards</li>   </ul>  <h4>Guidance</h4>  <p>The baseline information should address the criteria contained in the following documents:</p>
<ul>
<li>CSA Group, N289.2, <em>Ground motion determination for seismic qualification of nuclear power plants</em></li>
<li>CSA Group, N289.3, <em>Design procedures for seismic qualification of nuclear power plants</em></li>
<li>IAEA, IAEA Safety Guide NS-G-3.6, <em>Geotechnical Aspects of Site Evaluation and Foundations for Nuclear Power Plants</em></li>
<li>IAEA Safety Guide NS-R-3, <em>Site Evaluation for Nuclear Installations</em></li>
</ul>
<h4>B.3.2.1	Geology and structural geology</h4>  <p>Data sources shall be defined (literature review, borehole information, geophysical investigation, etc.). Data obtained from in-situ investigations will include borehole locations; their positions relative to the planned facility should be shown on maps. If no in-situ data exists in the footprint of the proposed facility, the applicant shall justify other applicable data.</p>   <p>The geological history of the area shall be presented, and include information on bedrock lithology and stratigraphy. Relative and absolute age information shall be included where available, based on published government reports or journal articles.</p>  <p>Three-dimensional models of the geology and structural geology at three different scales (site, local and regional scales) shall be documented. Cross sections through the three-dimensional models showing the geological units, unit thicknesses, and structural information shall be provided.</p>  <p>In addition to classical geological information, descriptions of physical, chemical, hydrogeological and mechanical properties of rocks and overburden materials shall be provided.</p>  <p>For structures such as faults, lineaments and arches, an assessment of their seismogenic potential and their potential to constitute preferential groundwater flow paths shall be provided, with a description of their tectonic setting.</p>
<h4>B.3.2.2	Geotechnical data</h4>  <p>Cross-sections showing the soil deposits (with a definition of the soil units) and the upper bedrock and the groundwater levels shall be provided. For data obtained with in-situ investigations, the location of the boreholes shall be indicated on maps and cross-sections with their positions relative to the planned facility shown. If no in-situ data exists in the footprint of the proposed facility and immediate vicinity, the applicant shall justify other applicable data.</p>  <p>Geotechnical properties of the soil units, such as index properties, shear strength, deformation characteristics, and liquefaction potential shall be provided. Dynamic properties (such as shear wave velocities, damping ratio, shear modulus) to be used in soil response and soil-structure interaction analyses shall be provided.</p>
<h4>B.3.2.3	Coastal geomorphological data</h4>  <p>Possible mechanisms for coastal erosion in the vicinity of the proposed facility should be identified and should include natural (such as high lake levels) or human-induced (engineering structures along the shore, dams on contributing rivers, etc.)</p>  <p>Estimates of the rate(s) of erosion of shores or riverbanks on or near the site should be provided. These estimates should be conducted for the average long term and also for the historical occurrence of unusual events (for example, unusually high lake or sea levels.)</p>  <p>An assessment of how coastal erosion could affect site facilities should be submitted. An assessment of how the activities to be licensed for each licensing stage of the site would affect coastal erosion should be submitted.</p>
<h4>B.3.2.4	Characterization of potential geotechnical hazards</h4>  <p>Assessment of geotechnical hazards shall include consideration of factors such as slope instability, underwater instability, collapse, subsidence or uplift of site surfaces and instability of soil foundations due to static or dynamic loads.</p>  <h5>Guidance</h5>  <p>Evaluations of these hazards should include information about:</p>
<ul>
<li>natural or human made slopes in the vicinity or on the site whose failure could affect the safety of the site facilities</li>
<li>underground excavations in the vicinity or on the site whose failure could affect the safety of the workers and the site facility</li>
<li>the geographical location of any sub-surface features on or near the proposed site such as:
<ul>
<li>caverns</li>
<li>karstic formations</li>
<li>human made features such as mines/quarries, water wells and oil wells, and water reservoirs</li>
</ul></li>
<li>soil units that could liquefy under seismic conditions (liquefiable materials are usually loose sands below the phreatic surface)</li>
<li>whether collapsible soils, expansive soils, and swelling types of rock that could create significant problems for the facility&#39;s foundations (<em>Canadian Foundation Engineering Manual</em>, 2006)</li>
<li>geological processes (e.g. glacial rebound, tectonic force) that are responsible for subsidence or rebound and estimated rates of subsidence and rebound attributed to these processes</li>
</ul>
<h4>B.3.2.5	Characterization of potential seismic hazards</h4>  <p>A site-specific seismic hazard assessment shall be conducted including a paleoseismic investigation and probabilistic seismic hazard analysis, to develop ground motion response spectra. Sufficient information shall be provided to characterize the seismology for both the facility design basis and design extension conditions (beyond design basis).</p>  <h5>Guidance</h5>  <p>The seismic hazard assessment for the site and region immediately surrounding the site should include:</p>
<ul>
<li>seismic sources identified through a review of the seismic records</li>
<li>identification of faults in the regional, local and site scales, and the potential that these faults are seismogenic should be evaluated</li>
<li>magnitude-recurrence relationships for the seismic sources should be determined</li>
<li>seismic motion should be predicted in terms of response spectrum, peak ground acceleration, or any other pertinent measure of the earthquake&#39;s intensity at the facility&#39;s site (this information will be used in the earthquake-resistant design of the foundations, and the structures, systems and components of the facility)</li>
</ul>  <p>Active faults may not be found even in well-mapped places. These undetected faults may or may not change the estimated hazard, depending on the relative contribution of the faults compared to the other sources which have been included.</p>   <p>The assessment should be developed using the most current knowledge, information, and standards (e.g., CSA Group N289.1, CSA Group N289.2, CSA Group N289.3).</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="AppB.3.3"></div>
<h3 id="AppB-3-3">B.3.3	Baseline hydrology &ndash; Normal flow, flood and drought</h3>  <p>Surface-water bodies that could affect the facility&#39;s water supply and effluent or that could be affected by facility construction, operation, decommissioning or abandonment of the proposed project (including transmission corridors), and that are part of the project shall be identified. In addition, site-specific and regional data on the hydrological characteristics of the above surface water bodies under normal, flood and drought conditions shall be provided.</p>
<h4>B.3.3.1	General surface-water data and information</h4>  <p>The following information should be provided, where applicable:</p>
<ul>
<li>maps (including digital databases such as a geographic information system [GIS]) showing the relationship of the site to major hydrological systems that could affect or be affected by plant construction, operation, decommissioning, or abandonment</li>
<li>for surface-water bodies used as a heat sink or process water source, information about maximum, average maximum, average, average minimum, and minimum monthly temperature of the water bodies</li>
<li>for surface-water bodies and wetlands, estimated erosion characteristics and sediment transport, including rate, bed, and suspended load fractions, and graduation analyses; a description of the floodplain and its relationship to the site</li>
<li>a description of wetlands and their relationship to the site</li>
<li>the design-basis flood (DBF) elevation and the DBF discharge, if applicable. The derivation of the DBF should be described</li>
</ul>
<h4>B.3.3.2	Data and information for freshwater streams</h4>  <p>Characterization information should include a list of major streams, size of drainage areas, stream order and gradient. For each of the major streams listed, the following information should be documented:</p>
<ul>
<li>maximum, average maximum, average, average minimum, and minimum monthly flow</li>
<li>flood frequency distributions, including levee failures</li>
<li>flood control measures (reservoirs, levees, flood forecasting)</li>
<li>historical drought stages and discharges by month, and the seven-day once-in-10-years low flow</li>
<li>important short-duration flow fluctuations (e.g., diurnal release variations from peaking operation of upstream hydroelectric project)</li>
<li>within the influence of the intake and discharge structures, velocity distribution (horizontal and vertical), bathymetry at and near the intake structure, bathymetry at and downstream of the discharge structure, and stream cross-sections</li>
<li>other hydrographic modifications (e.g., diversion dams, channelization)</li>
<li>a list of wetlands and floodplains and their seasonal characteristics</li>
</ul>
<h4>B.3.3.3	Data and information for lakes and impoundments</h4>  <p>Characterization information should include a description of lakes or impoundments that could be affected by the project.</p>   <p>For each of the lakes or major waterbodies described, the following information should be documented:</p>
<ul>
<li>where influenced by the intake or discharge structures, size, location, and elevation of outlets</li>
<li>where influenced by the intake or discharge structures, elevation-area-capacity curves</li>
<li>a summary description of lake operating rules</li>
<li>annual yield and dependability</li>
<li>variations in inflows, outflows, water surface elevations, and storage volumes and retention time</li>
<li>waves (statistics of wave heights, run-up, etc.) including information about historic seiche activity. Where waves can have an impact on the safe operation of the facility, information about the design basis wave conditions should be supplied, including how those conditions were derived.</li>
<li>net loss, including evaporation and seepage</li>
<li>information about current patterns, including frequency distributions of current speed, direction, and persistence. These current patterns should be described at the local and regional spatial scale, and the whole-water body spatial scale within a reasonable distance from the site.</li>
<li>temperature distribution (horizontal and vertical) and stratification and seasonal variations of density induced currents</li>
<li>detailed bathymetry in vicinity of planned station intake(s) and outfall(s)</li>
<li>where lake level can have an impact on the safe operation of the facility, the design basis maximum and minimum lake levels, including how those levels were derived</li>
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
<div id="AppB.3.4"></div>
<h3 id="AppB-3-4">B.3.4	Baseline surface water, sediment and groundwater quality data</h3>  <p>Baseline surface water quality, sediment quality and groundwater quality shall be evaluated relative to established standards, criteria, guidelines and/or objectives, to ensure that changes due to a given project does not pose a present, imminent, or long-term risk to human health and the environment.</p>
<h4>B.3.4.1	Contaminants of potential concern (COPC)</h4>  <p>Concentrations of COPCs in groundwater, surface water and sediments should be measured at detection limits that allow comparison to criteria and objectives ("benchmarks") that protect human and/or aquatic life. The benchmark selection for each COPC should be supported by scientific literature that justifies its use for the proposed site.
<h4>B.3.4.2	Baseline surface water quality</h4>  <p>Baseline surface water quality, including general water quality parameters (i.e., pH, conductivity, temperature, dissolved oxygen) shall be reported. The expected COPCs shall form the basis of the parameters to be analyzed in baseline surface water samples.</p>   <p>The sample station locations, along with the justification for their selection and statistical basis (number of samples and variability) by which “baseline” is defined, shall be included.</p>  <h5>Guidance</h5>  <p>The focus should be on those parameters expected to change as a result of project activities assessed throughout all licensing stages.</p>  <p>Baseline surface water quality data should be compared to water quality guidelines, such as the <em>Canadian Environmental Quality Guidelines</em> published by the Canadian Council of Ministers of the Environment (CCME). Without federal or provincial standards and guidelines, water quality benchmarks from the peer-reviewed scientific literature may be used with appropriate rationale. Water quality benchmarks from peer-reviewed scientific literature will be recognized only when no federal or provincial benchmarks exist. The benchmarks should include sufficient rationale that indicates conservativeness in the selection process among a range of benchmarks also published in the peer-reviewed scientific literature.</p>
<h4>B.3.4.3	Baseline sediment quality</h4>  <p>Baseline sediment quality, including sediment physical parameters (i.e., pH, total organic carbon, particle size analysis) shall be reported. The expected COPCs shall form the basis of the parameters to be analyzed in baseline sediment samples. The sample station locations, justification for their selection and statistical basis (number of samples and variability) by which "baseline" is defined shall be included.</p>  <h5>Guidance</h5>  <p>The focus should be on those parameters expected to change as a result of project activities assessed throughout all licensing stages.</p>  <p>Baseline sediment quality data should be compared to federal sediment quality guidelines, such as the <em>Canadian Environmental Quality Guidelines</em> published by CCME. Without federal or provincial standards and guidelines, sediment quality benchmarks from the peer-reviewed scientific literature should be used with appropriate rationale.</p>
<h4>B.3.4.4	Baseline hydrogeology and groundwater quality</h4>  <p>Baseline groundwater quality, including pH, conductivity and turbidity, shall be determined and reported. The expected COPCs shall form the basis of the parameters to be analyzed in baseline groundwater quality samples. The sample station locations, justification for their selection and statistical basis (number of samples and variability) by which “baseline” is defined shall be included.</p>  <h5>Guidance</h5>  <p>The focus should be on those parameters expected to change as a result of project activities assessed throughout all licensing stages.  Baseline groundwater quality data should be compared to federal water quality guidelines, such as the <em>Canadian Environmental Quality Guidelines</em> published by CCME. Without federal or provincial standards and guidelines, water quality benchmarks from the peer-reviewed scientific literature should be used with appropriate rationale.</p>   <h5>Groundwater elevations and hydraulic heads</h5>  <p>The acquisition and interpretation of groundwater level and hydraulic head measurements are important elements of hydrogeological characterization. Aquifer physical properties and hydraulic head measurements allow the rates and directions of groundwater flow to be estimated.</p>  <p>Groundwater elevations and hydraulic heads should also be presented as contour maps. Seasonal variations should also be presented.</p>  <h5>Lithological logs, well construction drawings and borehole geophysical logs</h5>  <p>These logs and drawings are needed to develop and support hydrogeological characterization, groundwater monitoring programs, and groundwater remediation.</p>  <h5>Hydrogeological cross-sections</h5>  <p>Site-specific hydrogeological cross-sections shall be documented.</p>  <h5>Guidance</h5>  <p>Hydrogeological cross-sections illustrate the distribution of geological materials and hydraulic properties that control groundwater flow and influence contaminant transport. Identifying vertical and horizontal groundwater flow paths supports hydrogeological characterization, groundwater monitoring programs and groundwater remediation. The resulting hydrogeological cross-sections provide a basis for interpreting and illustrating contaminant distributions.</p>  <p>Cross-sections should incorporate available geological and hydrogeological information, including lithological logs, cone penetrometer logs, borehole geophysical logs, surface geological mapping, surface geophysical surveys and trench logs. Cross-sections should be drawn to scales that depict important site features. Cross-sections and accompanying maps should be maintained using the same scales.</p>   <p>Cross-sections should depict the interpretation of hydrostratigraphy. The rationale for the interpretation should also be documented. Cross-sections should be amended as additional monitoring or geological data are developed. If new data result in significant changes to the conceptual models, the results should be reported. Final drawings should accompany both draft and ongoing remedial investigation reports.</p>  <h5>Structure contour maps</h5>  <p>Site-specific geological structure contour maps illustrating the interpreted elevation of geological contacts, thickness of geological units and the saturated thickness, extent, and overall geometry of hydrostratigraphic zones should be provided. If new data result in significant changes to the conceptual models, the changes should be reported. Final drawings do not need to be submitted until the draft remedial investigation report is due.</p>  <p>Site-specific structure contour maps should use the same scale(s) as groundwater. Contour intervals should be selected commensurate with the density and precision of the data.  Maps should be amended (and include the amendment date) as additional monitoring or geological data are developed.</p>   <h5>Groundwater elevation contour maps and potentiometric surface maps</h5>  <p>Groundwater elevation contour maps provide for illustration and interpretation of the horizontal distribution of hydraulic head across a study area. These maps, combined with knowledge of aquifer hydraulic properties, estimate rates and directions of groundwater flow (and associated contaminant transport) within specific hydrostratigraphic zones.</p>   <p>Groundwater elevation contour maps should be provided for each water-bearing zone, to illustrate the extent of water-bearing zones, horizontal groundwater flow directions, and to support interpretation and illustration of the groundwater flow system.</p>  <p>Site-specific groundwater elevation maps should be drawn to scales that depict important site features.</p>  <p>Groundwater elevation contour maps illustrate the horizontal distribution of hydraulic head. The vertical distribution of hydraulic head should be illustrated on cross-sections. All potentiometric data used to develop individual contour maps should be from the same hydrostratigraphic zone and possibly from the same relative position. Groundwater elevation contour maps should incorporate all potentiometric data from a single groundwater elevation survey for the hydrostratigraphic zone illustrated. Groundwater elevation data should be posted with the well identification on each map.</p>  <h5>Aquifer properties</h5>  <p>Estimates of the hydraulic properties of hydrostratigraphic units shall be documented. These include hydraulic conductivity and porosity of aquifers and aquitards, and the transmissivity and storage coefficient of aquifers. This information will aid in subsequent determinations of monitoring locations and frequencies, predictions of contaminant fate and transport, and design of remedial measures.</p>   <p>The method used to estimate hydraulic properties shall be identified, whether from pumping tests, slug tests, or laboratory tests of core samples.</p>   <h5>Guidance</h5>  <p>Anisotropy of hydraulic properties should be documented. The range and spatial distribution of hydraulic conductivity and/or transmissivity should be depicted in graphical form, on maps and cross-sections.</p>  <h5>Rates and directions of groundwater flow</h5>  <p>Hydraulic properties, in conjunction with water level and gradient information, shall be used to estimate rates and directions of groundwater flow, the rate of transfer of water between aquifers, and the capture zones of wells.</p>  <h5>Guidance</h5>  <p>Any chemical or isotopic tracer data that provide constraints on fluid direction, flow velocity or mixing, should also be included.</p>  <p>Using potentiometric data and hydraulic properties, the rates and directions of groundwater flow in each hydrostratigraphic unit should be described and depicted on maps and cross sections.</p>  <h5>Potable groundwater supplies</h5>  <p>Characterization information shall describe any potable groundwater supplies, their current and potential use near and around the proposed plant.</p>  <h5>Guidance</h5>  <p>Characterization should include maps showing the locations of the groundwater supplies.</p>  <h5>Baseline water quality</h5>  <p>Baseline water quality, including general water quality parameters, shall be documented.</p>   <h5>Guidance</h5>  <p>The sample locations and statistics used to define baseline water quality should be explained.</p>  <p>Well purge and recovery rates, well volume, purge volume, temperature, specific conductance and any other parameters measured in the field should be reported for each well sampled.</p>   <p>Graphs illustrating historical analytical data for COPCs should be provided for selected wells. Trends in concentrations should be interpreted and described.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="AppB.3.5"></div>
<h3 id="AppB-3-5">B.3.5	Baseline terrestrial, flora, fauna, and food chain data</h3>  <p>Aquatic mammals, waterfowl, amphibians and aquatic-associated reptiles (e.g., turtles) are included in this category. Information about the terrestrial biotic environment to be obtained for the site and surrounding areas shall include the following:</p>
<ul>
<li>maps that identify important terrestrial habitats on and in the vicinity of the site</li>
<li>descriptions and maps of the area occupied by each natural and human-made habitat type</li>
<li>descriptions and maps of major soil types in the site, local and regional study areas</li>
<li>list and description of important floral and faunal species and their spatial and temporal distribution on and in the site&#39;s vicinity, including abundance, critical habitat, and life histories that include critical life stages, biological significant activities, seasonal habitat requirement, trophic, and interspecific relationships</li>
<li>characterization of the existing vegetation communities (ecological land classification) to assess the likely effects on potential valued component (VC) habitat suitability/availability and potential direct effects on plants identified as potential VCs.</li>
<li>description of existing wildlife communities to evaluate likely acute and chronic toxicity or direct mortality effects on fauna (birds, mammals, amphibians, reptiles, and invertebrates).</li>
<li>identification of any conservation status species, that is species designated at risk by a government agency, that are known to occur, or have the potential to occur within the zone of influence of project activities, including an assessment of the importance of the habitat within that zone for these species</li>
<li>locations of travel corridors for important terrestrial species and alternate routes for those corridors that could potentially be affected by the site&#39;s use</li>
<li>description of wetlands and their relationship to the site</li>
<li>description of natural and human-induced pre-existing environmental stresses and the current ecological conditions that indicate such stresses</li>
<li>description and location of any recent or currently in progress ecological or biological studies of the site or its environs</li>
<li>description and map of boundaries of the proposed project in a regional context, showing existing and planned future land use, and existing infrastructure</li>
</ul>  <p>The biotic characteristics of the proposed site shall be identified and documented, while taking into account environmental considerations such as: habitats essential to maintaining the viability of potential VCs, designated protected habitats, areas containing migratory routes of important species, and areas of high biological production.</p>   <p>Characterization shall also contain a description of soil types at the site and within local and regional study areas and the quantitative baseline data of the soil characteristics that are most likely to influence future assessments and required for modelling purposes (e.g., pH, soil bulk density, soil moisture content).</p>  <h4>Guidance</h4>  <p>Documentation of biota utilizing habitat at the proposed site should include descriptions of birds, mammals, and reptiles communities. This information helps identify interactions between the project and the biological components of the area, predict potential environmental effects, identify mitigation measures, and evaluate the significance of the residual effects when the mitigation measures are applied. Biological data play an important role in the identification of potential VCs, which are used as the final receptors in pathways modelling.</p>  <p>Background information should be documented for understanding the potential changes in, or impacts on, the terrestrial environment and the adequacy of environmental monitoring programs to identify these potential changes. Consideration should be given to the need for and design of wildlife population monitoring (i.e., spatial distribution, abundance, and density) to put residual adverse effects into proper context for those species at risk. Population monitoring is complex and requires estimates with minimum bias and maximum precision.</p>  <p>The area of consideration may extend beyond the regional study area to include potential VC home ranges, critical habitats, and migration corridors. The boundaries in space and time take into account the home range, migration corridors and dispersal areas of potentially affected species. The VC information will be used to adjust the assessment spatial and temporal boundaries.</p>  <p>For commercially or recreationally valuable species, the applicant should list the types of wildlife and plants that could be adversely impacted by the proposed facility. The provincial, local conservation agencies or organizations that maintain harvest level records of these species should also be identified.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="AppB.3.6"></div>
<h3 id="AppB-3-6">B.3.6	Baseline aquatic flora, fauna, and food chain data</h3>
<h4>B.3.6.1	Baseline aquatic flora, fauna and habitat</h4>  <p>Characterization information shall address the site and surrounding region potentially affected by the project, such as the following:</p>
<ul>
<li>aquatic finfish, their prey (e.g., benthic and other aquatic invertebrates, phytoplankton, zooplankton) shellfish and aquatic plants</li>
<li>identification of any conservation status species designated as species at risk by a government agency, which are known to occur or have the potential to occur within the zone of influence of project activities, including an assessment of the importance of the habitat within that zone for these species</li>
<li>aquatic habitats of aquatic finfish, shellfish (and associated prey) that are pelagic (open water), littoral (near-shore and shallow), benthic (bottom-associated), riparian (shoreline) and wetland, onsite ponds and streams that provide habitat for aquatic biota, and include:
<ul>
<li>parameters of habitat quality, quantity and frequency of use</li>
<li>all lentic (standing water) and lotic (flowing water) water bodies, wetlands located within the geographic study areas</li>
<li>fish habitat mapping, including spatial and temporal variation by life stage for spawning, nursery, rearing, feeding, refuge/cover, wintering and corridors for movement, considering that:
<ul>
<li>the spatial scale of mapping beyond this is governed by interaction with the project</li>
<li>this includes mapping of streams and ditches that contain fish for substrate type, cover and structure (run, riffle, pool) and stream channel morphology, according to published protocols from government agencies or externally peer-reviewed references</li>
<li>the area of consideration may extend beyond the regional study area to include potential VC home ranges, critical habitats, natural corridors (e.g., larval and adult fish migration corridors)</li>
<li>the boundaries in space and time take into account the home range, migration corridors and dispersal areas of potentially affected species</li>
<li>the VC information will be used to adjust the assessment boundaries; aquatic mammals, water birds, waterfowl, reptiles and wetlands as potential VC entities considered in part B, section 18</li>
</ul></li>
</ul></li>
<li>general criteria used to identify aquatic and wetland VCs that may be affected by the project, and consider that:
<ul>
<li>typically the list of VCs that result from stakeholder consultation is too long to be of practical use and selection criteria must be applied to reduce the list to a manageable size</li>
<li>the VC selection criteria must be clearly stated and the manner in which they were applied to come up with the final list of VCs for the Environmental Assessment Screening Report readily transparent</li>
<li>a supporting rationale statement is expected for each VC and must clearly describe how the preliminary list was changed in response to external input.</li>
</ul></li>
<li>mapping of watersheds, sub-watersheds local, site, regional areas and size of drainage areas showing types of land use (e.g., pasture cattle, cottage, housing, aggregate extraction former or active) tied into ecological land classification mapping done for terrestrial baseline work</li>
<li>existing physically altered or contaminated habitats (i.e., seasonal or annual concentrations above background) that were changed by past operations at sites where there is an existing facility (e.g., thermal discharge channels, thermal plumes and past/present physical disruption/structures in near-shore uplands, shoreline/riparian and water bodies)</li>
<li>for existing facilities on the same site, a description of the zone of influence of existing thermal plumes (>1ºC above ambient) in horizontal and vertical space with maps and plots (e.g., delta above ambient versus distance alongshore and offshore relative to maps of lake bottom depths and substrates)</li>
<li>fish habitat mapping that includes existing operations thermal discharge areas of elevated temperatures and physical disruption of lake currents (depth and area) identification of habitats exposed to existing facility stressors and those potentially exposed through data review and field reconnaissance, including:
<ul>
<li>contaminant and thermal effluents and plumes</li>
<li>storm water release points</li>
<li>present and projected radiological and conventional groundwater contaminant plumes</li>
<li>road salt application</li>
<li>spring freshet effects on biota and habitat quality in site streams or offsite receiving water bodies</li>
<li>radiological and conventional accidents and spills</li>
</ul></li>
<li>the distribution, density and type of aquatic plants in shoreline and wetland areas</li>
<li>baseline habitat information for VCs, including data from reference sites as close as possible to the project site, but unlikely to be on an exposure pathway from the project.
<ul>
<li>Note: Actual reference site sample data is preferred; calibrated and validated model estimates of baseline habitat condition are acceptable when linked to proposed VC responses, if actual reference site sample data or filling gaps in sparse reference databases is not possible</li>
</ul></li>
<li>baseline characterization field study of site reference ditches that provide habitat for aquatic biota, providing typical values and variability for types of aquatic biota present and chemistry of water and sediment</li>
<li>the effects of climate change on habitat suitability and how that may alter spatial distributions of biota (e.g., temperature and water level change effects on location and timing of use of spawning habitat by lake and round whitefish)</li>
<li>habitat criticality and frequency of use in space and time needs to be specified for VC, in order to determine overlap with stressor exposure distributions in space and time</li>
<li>review of past site clearing and shoreline development, if applicable (this information determines the succession trajectory of the site habitat)</li>
<li>background ranges for measured habitat characteristics, especially those that may be affected by the project (e.g., temperature, flow, turbidity, water and sediment chemistry, percent cover streams)</li>
<li>background information on the potential changes and impacts on the aquatic environment and the adequacy of environmental monitoring programs including:
<ul>
<li>site background information (e.g., history of past exposure) and biological life history information that affect population growth rates</li>
<li>the capability to recover from adverse effects (e.g., development and maturation time, longevity, generation time, body size</li>
<li>maximum population growth rate per generation, fecundity, likelihood of immigration)</li>
</ul></li>
<li>cover and standing biomass for aquatic plants as a basis to predict and detect changes</li>
<li>adequate characterization of the VC structural attributes (e.g., population range and size, density, age/size distributions, etc.) and functional attributes (e.g., food type, ingestion rates, activity, bioaccumulation, etc.) including the specific attribute that is the focus in this assessment as important to protect and may be affected by the project;
<ul>
<li>Note: For example, for fish this would include whether the species population geographic distribution is likely local, regional or lakewide, whether it is a stream, wetland or lake spawner, etc.; this characterization should also include comment on the level of confidence attached to the information for each species</li>
</ul></li>
<li>information on stability of VCs (variability in key biological attributes) and present levels of exposure to stressors; these aspects affect VC vulnerability or the capability to cope with additional project interactions; this includes documenting baseline values and ongoing trends (normal seasonal and year-to-year fluctuations) for standard biological attributes for the VCs, such as density, biomass, richness, abundance, community indices, growth, size and age distributions</li>
<li>information on the variation in spatial distribution (e.g., depth) and seasonal distribution by life stage for each VC</li>
<li>a total aquatic species inventory list based on field studies for the site and local study area and available published information for the regional study area;
<ul>
<li>Note: Include quality assurance evidence that the information is representative, including identifying species from literature or atlases that are expected but were absent during past surveys</li>
</ul></li>
</ul>  <h5>Guidance</h5>  <p>Characterization information should also consider:</p>
<ul>
<li>statistical design for baseline monitoring or the rationale for aspects that may not be amenable to statistical design. Special consideration should be given to the requirement and design of finfish or shellfish population monitoring (i.e., spatial distribution, abundance, and density) to put residual adverse effects into the proper context for species that should be at risk. The complexity of population monitoring requires the sample survey statistical design to produce unbiased, precise estimates</li>
<li>inferential basis for information provided on the use of habitat types and species is transparent including comments on the quality of the inference (e.g., field observed or estimated from models or published species range atlases or maps)</li>
<li>habitat suitability model criteria from U.S. Fish and Wildlife Service, Marcus, M.D., W.A. Hubert, and S.H. Anderson. 1984. <em>Habitat Suitability Index Models: Lake trout (Exclusive of the Great Lakes)</em>. U.S. Fish and Wildlife Service. FWS/OBS-82/10.84. 12pp</li>
<li>M. L. Jones, R.G. Randall, D. Hayes, W. Dunlop, J. Imhof, G. Lacroix, and NJR. Ward, 1996. <em>Assessing the ecological effects of habitat change: moving beyond productive capacity</em>. Canadian Journal Fisheries Aquatic Sciences 53 (Suppl. 1):446-457.</li>
<li>DFO fish habitat requirements</li>
<li>provincial and conservation authority agency standards for classification, mapping and evaluation of fish habitat</li>
<li>riparian habitat guidelines for assessment of present condition streams onsite or within the exposure zone</li>
<li>federal and provincial water and sediment quality objectives/guidelines, including total suspended solids and turbidity</li>
<li>mapping of lake shorelines and wetland substrate types, according to a federal or provincial government agency or published reference</li>
</ul>
<h4>B.3.6.2	Baseline food chain data</h4>  <p>Characterization information shall include:</p>
<ul>
<li>conceptual models of existing baseline aquatic biota endpoints (e.g., survival, growth, reproduction, age/size distributions) including linkages with abiotic environmental media and other biota (feeding); This includes describing the baseline sources and distribution of stressors along transport and exposure pathways resulting in baseline hazard quotients for contaminants to aquatic organisms through diet and direct exposure; the conceptual model shall include potential VCs from each trophic level (e.g., piscivore, benthic prey feeder, zooplankton feeder, herbivore, primary producers)</li>
<li>descriptions of any background changes expected in energy transfer from field results and agency literature of present trends in near-shore and offshore food web, such as:
<ul>
<li>existing disruptions of food webs and associated community dynamics as a result of non-project related influences (e.g, invasive species impacts on Great Lakes food webs and associated aquatic communities) which must be considered when considering project related interactions and impacts into the future.</li>
</ul></li>
<li>baseline fish and fish prey (benthic invertebrate) tissue concentration levels (typical values and variability) for radionuclides and chemicals for existing exposure areas and reference sites</li>
<li>baseline information on the benthic invertebrate community for representative habitats (e.g., exposed rocky inshore areas; embayment wetland) to allow the calculation of standard endpoints quality and quantity of information on benthic invertebrate community consistent with federal standards (Environment Canada 2002) and scientific literature protocols; data from collections in the site and local study area, and reference locations that would not be exposed to project effects made over multiple years in order to understand natural year-to-year variability</li>
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
<div id="AppB.3.7"></div>
<h3 id="AppB-3-7">B.3.7	Baseline ambient radioactivity and ambient non-radioactive hazardous substances</h3>  <p>As defined in section 1 of the <em>General Nuclear Safety and Control Regulations</em>, "hazardous substance" or "hazardous waste" means a substance or waste, other than a nuclear substance, that is used or produced in carrying on a licensed activity and that may pose a risk to the environment or the health and safety of persons.</p>   <p>Characterization information shall address the following:</p>
<ul>
<li>characteristics of the ambient radioactivity and non-radioactive hazardous substances for the proposed site and the surrounding area</li>
<li>projected baseline for ambient radioactivity and ambient hazardous substances during site preparation activities and for the long term during all succeeding licensing phases</li>
</ul>  <p>Characterization information shall include the following:</p>
<ul>
<li>baseline concentration of radiological and hazardous substances in the environment. Regional background and/or historical data should also be provided where possible.</li>
<li>detailed maps to show the locations of sampling/monitoring stations for measurements of radioactive and hazardous environmental concentrations</li>
<li>an inventory of natural and anthropogenic sources for radioactive and hazardous substances at the site and within local and regional study areas</li>
<li>criteria/benchmarks used in the evaluation of effects associated with radioactive and hazardous substances in the aquatic and terrestrial environment</li>
<li>relevant pathways of exposure to radioactivity and hazardous substances for aquatic and terrestrial biota</li>
<li>background radiation doses to aquatic and terrestrial receptors from all natural and anthropogenic sources</li>
<li>predicted/estimated concentrations of radioactive and hazardous substances as a result of the project, including comparisons to baseline conditions</li>
<li>selection of potential aquatic and terrestrial VCs for the project based on concentrations of radioactive and hazardous substances in the aquatic and terrestrial environment</li>
<li>predicted/estimated radiation doses to aquatic and terrestrial VC receptors from the project including comparisons to baseline conditions</li>
<li>parameter values used to predict/calculate the environmental concentrations of radioactive and hazardous substances or exposure to aquatic and terrestrial VC receptors</li>
<li>assessment of effects from potential changes in the aquatic and terrestrial environment from predicted radioactive and hazardous substance concentrations and predicted cumulative effects</li>
<li>identification of mitigation measures for project phases to minimize or eliminate the effects of the project on potential aquatic and terrestrial VC receptors</li>
</ul>  <h4>Guidance</h4>  <p>Note: A green-field site will have natural ambient radioactivity present.</p>  <p>Ambient radioactivity baseline information should consider the following:</p>
<ul>
<li>CSA Group, N288.4-10, <em>Environmental monitoring programs at class I nuclear facilities and uranium mines and mills</em></li>
<li>International Atomic Energy Agency, IAEA Safety Guide Safety Standards Series RS-G-1.8, <em>Environmental and Source Monitoring for Purposes of Radiation Protection</em></li>
</ul>  <p>Ambient hazardous substances baseline information should consider the following:</p>
<ul>
<li>CSA Group, N288.4-10, <em>Environmental monitoring programs at class I nuclear facilities and uranium mines and mills</em></li>
<li>Federal guidelines such as CCME <em>Soil quality guidelines, CCME Air quality objectives</em> and Canada-wide standards</li>
<li>Provincial guidelines and standards, such as:
<ul>
<li>Ontario Ministry of the Environment, <em>Soil Quality Criteria, Air Quality Criteria and Upper Limit of Normal Contaminant Guidelines for Vegetation</em></li>
<li>Ontario Ministry of the Environment, <em>Operations Manual for Air Quality Monitoring in Ontario</em></li>
</ul></li>
<li>International and foreign guidelines and standards such as:
<ul>
<li>United States Environmental Protection Agency, Report EPA QA/G-5S, <em>Guidance on Choosing a Sampling Design for Environmental Data Collection for use in Developing a Quality Assurance Project Plan</em></li>
</ul></li>
</ul>  <p>The typical, natural variation in radioactivity and hazardous substances concentrations at reference sites should be described and documented by implementing a statistical design into the baseline studies. Uncertainties and types of uncertainties included in the data (e.g., natural randomness, insufficient knowledge, and sampling or measurement error) should be specified.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="AppB.3.8"></div>
<h3 id="AppB-3-8">B.3.8	Baseline land use data</h3>  <p>Baseline land-use information that includes future changes in land use is used to predict the effects on the proposed site operations, and of the site operations on the environment.</p>  <p>Land-use information is a major factor in determining the suitability of the site from a health, safety and environmental perspective, and the appropriate size of the site&#39;s proposed exclusion zone.</p>  <p>A detailed description of the baseline uses of land in the local and regional study areas shall be documented. Data is not expected to include an economic study of land values or cultural and heritage issues.</p>  <h4>Guidance</h4>  <p>Characterization information should provide a brief history of land use in the regional study area, including any information on major industries in the vicinity of the proposed site. This information should also:</p>
<ul>
<li>identify local agencies, user groups and Aboriginal groups interested in local land uses and resources for previous projects in the regional study area. Land use information from Aboriginal groups may require separate studies to quantify using land for hunting, fishing, trapping, medicinal plant gathering, habitation, spiritual, ceremonial, burial, or any other traditional pursuits</li>
<li>consider and identify information collected and analyzed by federal, provincial or municipal agencies responsible for land-use management</li>
<li>consider and identify information contained in provincial land use policies and regional/municipal official plans, relevant to the regional study area for current and planned land uses</li>
<li>provide a description of primary recreational land uses</li>
<li>describe existing and proposed modes and routes of transportation that will be used throughout the site preparation activities and subsequent phases of the project</li>
<li>provide natural resources data such as commercial fishing, including catch and quota, for the previous 10-year period; timber harvesting; and oil, gas and mineral extraction data</li>
</ul>  <p>For studies based on interviews with resource users, the methods used to conduct the study should be described, including interview questions that demonstrate how the process validates the studies&#39; results (e.g., on traditional use of lands).</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="AppB.3.9"></div>
<h3 id="AppB-3-9">B.3.9	Security baseline data &ndash; Security risks presented by the site location </h3>  <p>Characterization information related to this topic shall be considered to be prescribed information under the NSCA and be adequately protected.</p>  <p>A site selection threat and risk assessment (SSTRA) is conducted prior to the submission of a licence to prepare site application and the resulting report contains an analysis of physical barriers to security presented by the location of the site over the proposed lifecycle of the project. The intent of the SSTRA is to aid the applicant in determining the suitability of the site from a security perspective. The information from the SSTRA will feed into the process of developing appropriate security mitigation measures for activities to be encompassed by a licence under the NSCA.</p>  <p>The SSTRA report and its basis information shall be maintained as security baseline characterization data for the life of the facility. The following subsections provide additional guidance for the development and management of SSTRA information:</p>  <p>For guidance on the proposed format of the report, the licensee&#39;s security organization should contact the CNSC&#39;s Directorate of Security and Safeguards at: <a href="mailto:cnsc.info.ccsn@cnsc-ccsn.gc.ca">cnsc.info.ccsn@cnsc-ccsn.gc.ca</a></p>
<h4>B.3.9.1	Site selection threat and risk assessment management</h4>  <p>The SSTRA report shall describe the applicant&#39;s organization that provided oversight for the SSTRA process.</p>   <h5>Guidance</h5>  <p>The description should demonstrate the organization&#39;s technical capability to perform the assessment and assess mitigation measures, and include:</p>
<ul>
<li>the composition of the team, member names, titles, position in the organization, area of expertise or input to the report, relevant qualifications and experience</li>
<li>contributing organizations or subject matter experts not identified as team members or intelligence sources</li>
</ul>
<h4>B.3.9.2	Quality assurance of the site selection threat and risk assessment</h4>  <p>The SSTRA shall be developed under a quality assurance or management system that is designed to continually improve performance based on established principles.</p>   <p>The following elements necessary for verifying the quality of the SSTRA should be described:</p>
<ul>
<li>methods of verifying accuracy and completeness of data</li>
<li>descriptions of assumptions and interpretations of CNSC or other legal guidance</li>
<li>methods of documenting storing and retaining SSTRA basis records for future security analyses</li>
<li>details of the program or process to periodically review and update the SSTRA with a goal of merging processes into the future site threat and risk assessment analysis process</li>
</ul>
<h4>B.3.9.3	Policies and procedures</h4>  <p>The report shall identify security policies, procedures, standards, guides or related documentation that provide the basis for the management and conduct of the SSTRA.</p>  <h5>Guidance</h5>  <p>The report should identify procedures and processes that may require development based on SSTRA findings.</p>
<h4>B.3.9.4	Description of site selection threat and risk assessment methodology</h4>  <h5>Analysis methods</h5>  <p>Methods of performing the SSTRA shall be described and include:</p>
<ul>
<li>process flowcharts with SSTRA critical phases identified and described</li>
<li>descriptions of the theoretical frameworks or types of risk analysis methodologies used (e.g., fault trees, CARVER or other attack modelling software)</li>
<li>descriptions of assessment considerations or limitations</li>
</ul>  <h5>Intelligence inputs</h5>  <p>Intelligence sources used to gather threat related data in support of the SSTRA should be identified and include:</p>
<ul>
<li>government sources</li>
<li>threat trending and analysis</li>
<li>local sources</li>
<li>law enforcement sources</li>
<li>non-governmental sources of intelligence-related data</li>
</ul>
<h4>B.3.9.5	Results of the analysis</h4>  <h5>Information about the site</h5>  <p>The site location should be described using illustrations (including topographical maps) of all threat environments, risks or vulnerabilities presented by the location of the site.</p>  <p>Information about the site should include:</p>
<ul>
<li>For the application for a licence to prepare site:
<ul>
<li>a layout of all configurations of site structures being considered</li>
<li>proximity to provincial or national borders</li>
<li>location of the nearest communities</li>
</ul></li>
<li>For all licensing phases:
<ul>
<li>a description of safeguard requirements</li>
<li>landscape features overlooking the site (topographical details)</li>
<li>proximity to access roads (includes road size, traffic patterns and bounding vehicle types)</li>
<li>proximity to rail corridors (includes traffic patterns and cargo characteristics)</li>
<li>proximity to water and navigable water routes (includes traffic patterns, and cargo characteristics and bounding ship types)</li>
<li>proximity to airports and air access routes (includes traffic patterns and bounding aircraft types)</li>
<li>proximity to publicly accessible areas or buildings around the site</li>
<li>specific details of industrial operations surrounding the site and threats they may present to the site</li>
</ul></li>
</ul>  <h5>Identification of threats and resulting risks that could affect the site</h5>  <p>Descriptions of threats and resulting risks shall be documented with the full-project lifecycle in mind for areas on or near the site including vulnerabilities due to forecasted changes in land use:</p>
<ul>
<li>vulnerabilities from landscape features</li>
<li>vulnerabilities from water approaches</li>
<li>vulnerabilities from land approaches</li>
<li>areas where visibility or detection methods may be affected by weather-related events such as snow and fog</li>
<li>areas where blind approaches require additional security mitigation</li>
<li>areas where blockades might make the site vulnerable</li>
<li>areas where normal public access might distract security staff with nuisance alarms/alerts that provide unnecessary diversion of security personnel from other areas</li>
</ul>  <p>For deliberate threat events to the site, a description of the various threat agents shall be documented, including an assessment of organizational capabilities, motivations, and equipment, potential. The likelihood of the threat events being realized by threat agent action shall be analyzed. Consideration should be given to the target suitability, feasibility of the action, and acceptability to the threat agent.</p>  <p>The report shall contain relevant intelligence data related to threat agents and events to support conclusions. For non-deliberate threat events, a brief description of the event shall be documented, including a description of the potential vulnerability concerns and estimates of event occurrence based upon historical and statistical data.</p>  <h5>Guidance</h5>  <p>Postulated events should be identified for each threat, including events that could cause loss of or harm in the site preparation or construction phase. These events should be categorized as deliberate or non-deliberate. The bounding postulated events and accompanying rationale should be identified.</p>  <h5>Mitigation of identified threats and risks</h5>  <p>The SSTRA report shall identify:</p>
<ul>
<li>risk acceptance criteria developed and employed to manage the threat</li>
<li>at a high level, possible mitigation measures and countermeasures for each threat, as appropriate for the likelihood of the threat events</li>
</ul>  <p>An explanation of the amount of risk reduction expected when proposed countermeasures or security measures are implemented to reduce the risk to an acceptable level shall be documented.</p>   <h5>Guidance</h5>  <p>For each proposed mitigation measure, the explanation should include residual security risks remaining after mitigation, so as to ensure that residual risks will not present unreasonable challenges to the future site security program (i.e., mitigation may result in new security enhancements that were not anticipated).</p>
<h4>B.3.9.6	References used in the site selection threat and risk assessment</h4>  <p>All references used as the basis for the SSTRA should be listed and include:</p>
<ul>
<li>policies</li>
<li>procedures</li>
<li>guidelines</li>
<li>industry references</li>
<li>contributory reports</li>
</ul>  <p>Classified source information should be listed by referencing the title, author, date and source agency.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="AppB.4"></div>
<h2 id="AppB-4">B.4	Prediction of Effects of the Environment on the Project over the Facility Lifecycle</h2>  <p>A comprehensive site evaluation includes a demonstration of the understanding of the effects of credible site-specific and regional natural and human-induced external events that could impact site operations for each phase of the facility lifecycle.</p>   <p>All design basis parameters arising from consideration of natural and human-induced external events shall be identified, and their design basis values justified. These "site-related" parameters influence the design basis values for the nuclear facility and are an important input to the design and overall safety case.</p>  <p>The largest impacts during the project lifecycle are expected to occur during the site preparation and construction stages. Project activities resulting in large and certain environmental impacts during site preparation and construction include land re-contouring and water-body infill work.</p>  <p>Early planning ensures that natural and human-induced external events are considered when evaluating environmental impacts and effects on the health and safety and security mitigation measures.</p>   <p>Information on external events shall be provided, in order to determine, for the entire lifecycle of the project that:</p>
<ul>
<li>the predicted effects of external events on site events and the subsequent analyses of environmental impacts are credible</li>
<li>the facility design and the design of site infrastructure are adequate</li>
<li>the licensee will ensure adequate provisions for the protection of the environment, the health and safety of persons, and national security</li>
</ul>  <p>The process used for each type of event analysis shall be consistent with the applicant / licensee&#39;s management system.</p>  <p>Limitations presented by data used in the study shall be clearly documented for future use.</p>  <p>For each of the following sections, any parameters having an influence on the design of the facility (design basis parameters) shall be identified, and their design basis values given and justified. All design basis parameters and their values arising from siting considerations shall be documented.</p>  <p>For the licence to prepare site application, where multiple technologies are being considered, the plant design parameters for each of the technologies being considered for the facility shall be provided, so as to demonstrate that each of the technologies is capable of withstanding the design basis conditions attributed to siting considerations.</p>   <h3>Guidance</h3>  <p>The analysis of postulated events should address combinations of events that are credible for the site and its surrounding region, and may have a larger cumulative impact than the events in isolation.</p>  <p>Examples of design basis parameters include maximum/minimum air temperatures, maximum snow load, maximum seismic ground motion, extreme flood, maximum tornado wind speeds, maximum loadings arising from events on nearby transportation routes.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="AppB.4.1"></div>
<h3 id="AppB-4-1">B.4.1 Potential change of the climate and environment</h3>  <p>The detailed steps and procedures used for assessing the impacts of climate change on the site shall be documented. Guidance is available in the Canadian Environmental Assessment Agency&#39;s <em>Procedural Guide: Incorporating Climate Change Considerations in Environmental Assessment: General Guidance for Practitioners</em>.</p>  <h4>Guidance</h4>  <p>Effects predictions should have sufficient detail for follow-up verification (e.g., quantitative expression of change, such as percent loss; degree of confidence in prediction [related to type of evidence]; roles of mitigation, detailed compensation and performance monitoring; and a rationale for the importance of the follow-up and mitigation provisions.)</p>  <p>Effects predictions should include the following:</p>
<ul>
<li>temperature, humidity, evaporation, high winds, abrasive dust and storms, precipitation, and lightning</li>
<li>water levels and temperature changes of open water bodies (lakes, bays, and oceans), river floods and droughts (flow rates)</li>
<li>groundwater level, flow pattern and velocity change resulting from changes of surface water recharge and evaporation</li>
<li>earthquakes and landslides, etc., due to changing sea and lake levels and melting glaciers</li>
</ul>  <p>Effects predictions should pay additional attention to potential environmental effects on the water systems of the project, due to:</p>
<ul>
<li>ice from water bodies (lake or river ice) or frazil ice in forebay</li>
<li>suspended silt</li>
<li>bio-fouling due to biofilms, attached algae, mussels, fish</li>
</ul>  <p>Effects predictions should consider the effects of climate and environmental change on populations of non-human biota that could adversely alter predicted environmental effects due to site activities or introduce new potential environmental effects. The mitigation plans for prevention or reduction of plant intake fouling should take into account projected effects of climate change, including frazil ice and bio-fouling (mussels, algae, marine plants).</p>  <p>Future meteorological conditions (i.e., account for climate change) and the extent of thermal plume from modelling should be used as a basis for extrapolating the long-term ice conditions / silt/fish/mussel/algae density observations for source water body and future potential for effects on the project. Experience with similar operating facilities, such as thermal and nuclear power plants using the same or a similar source water body should also be considered.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="AppB.4.2"></div>
<h3 id="AppB-4-2">B.4.2 Prediction of meteorological events</h3>  <p>A systematic approach for identifying meteorological events for the site and surrounding region (natural external events) should be documented. This includes steps for continued data collection for meteorological events over the project&#39;s lifecycle, such as information that shows that the representative data series is complete, of adequate quality and all sources are identified for verification.</p>  <p>The verification of the appropriateness, limitations and rationale of the statistical distributions for the data sets should be documented.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="AppB.4.3"></div>
<h3 id="AppB-4-3">B.4.3 Design-basis flood and water supply adequacy</h3>  <h4>Guidance on design-basis flood</h4>  <p>IAEA Specific Safety Guide No. SSG-18, <em>Meteorological and Hydrological Hazards in Site Evaluation for Nuclear Installations</em></p>  <p>NUREG/CR-7046, PNNL-20091, <em>Design-Basis Flood Estimation for Site Characterization at Nuclear Power Plants in the United States of America</em></p>  <h4>Guidance on prediction of water supply adequacy</h4>   <p>The approach for identifying water supply adequacy for the site and surrounding region should be described. This should include the steps for continued data collection over the project&#39;s lifecycle. Water supply adequacy studies should consider:</p>
<ul>
<li>reliability and availability of water supply (considering existing water-taking projects in the region, and the potential for additional water-taking projects that could exist in the region)</li>
<li>water supply changes from naturally induced failures of offsite structures, such as dams, flood control dykes</li>
<li>if groundwater is used as the water supply: groundwater levels, flow patterns, pumping rates, water quality and the effects on water quality during flooding or drought events (e.g., excess minerals released into groundwater during flood events)</li>
</ul>  <p>For this topic IAEA Safety Standards Series, Specific Safety Guide No. SSG-18, <em>Meteorological and Hydrological Hazards in Site Evaluation for Nuclear Installations</em> should be considered.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="AppB.4.4"></div>
<h3 id="AppB-4-4">B.4.4 Prediction of groundwater, geotechnical, seismic, and surface faulting events</h3>  <p>The investigation and evaluation of the site&#39;s and surrounding areas&#39; susceptibility to the following events over the project&#39;s lifecycle shall be documented, and address:</p>
<ul>
<li>groundwater related events (groundwater flow and contaminant transport)</li>
<li>geotechnical events</li>
<li>seismic and surface faulting events</li>
</ul>  <h4>Guidance</h4>  <p>Information should be provided on the effects of:</p>
<ul>
<li>groundwater conditions:
<ul>
<li>groundwater flow patterns, rates and groundwater level influence the risk of seismic events, and the stability of slopes and foundations</li>
<li>the adverse effects of groundwater conditions on site preparation should be evaluated by combining the groundwater conditions with the geotechnical analysis</li>
</ul></li>
<li>geotechnical events:
<ul>
<li>slope instability</li>
<li>underground collapse and/or rock fall</li>
<li>subsidence or uplift of the site surface</li>
<li>instability of the soil foundation due to static or dynamic loads</li>
</ul></li>
<li>geotechnical events on future site activities by combining qualitative explanations with the results of quantitative analyses</li>
<li>seismic events and surface faulting events:
<ul>
<li>surface faults and lineaments in the regional, local and site scales are identified</li>
<li>the potential for these faults to be seismogenic and seismotectonic should be evaluated</li>
<li>their effects on future site activities should be assessed</li>
<li>mine-induced seismic events, where applicable, and their effects on the SSCs</li>
</ul></li>
<li>liquefiable soil units should be identified, and their effects on structures and site preparation should be assessed</li>
</ul>  <p>The following documents should be considered:</p>
<ul>
<li>CSA Group, N289.2, <em>Ground motion determination for seismic qualification of nuclear power plants</em></li>
<li>CSA Group, N289.3, <em>Design procedures for seismic qualification of nuclear power plants</em></li>
<li>International Atomic Agency, IAEA Safety Series NS-G-3.6, <em>Geotechnical Aspects of Site Evaluation and Foundations for Nuclear Power Plants</em></li>
<li>Canadian Dam Association, <em>Dam Safety Guidelines</em>, 2007</li>
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
<div id="AppB.4.5"></div>
<h3 id="AppB-4-5">B.4.5	Prediction of non-malevolent biological events</h3>  <p>A systematic process shall be used for characterizing and prioritizing risks of external biological events over the project&#39;s lifecycle, with emphasis on the facility&#39;s operational phase. This requires a well characterized biological baseline to allow for the prediction of the effects of biological hazards for the project (episodic events and ongoing hazards) and testing mitigation performance.</p>   <p>Analyses shall characterize potential biological phenomena that could affect facility SSCs, such as:</p>
<ul>
<li>plant matter, mussels or fish impingement events (e.g., smelt runs) that could block water intakes</li>
<li>bird species, insects or other fauna that may nest near or in air intakes (this could result in blockages of air intakes and pathogens or chemically reactive agents from nesting areas entering air systems)</li>
<li>moulds, organisms or pathogens, either naturally present or generated by site activities (e.g., cooling tower mist or algae in cooling water ponds), which could chemically react with SSCs and may result in reduced reliability of systems if not mitigated in design (e.g., lichens chemically attacking concrete), and affect human health, either on- or offsite</li>
<li>algae or micro-organisms in thermal plume of the facility outlet that could degrade the quality of water entering intakes for drinking and personal hygiene or affect plant intake water quality</li>
<li>wildlife that could potentially reside within the facility structures and systems and cause damage or long-term degradation</li>
</ul>  <h4>Guidance</h4>  <p>Mitigation strategies to counter postulated biological events should demonstrate an effort to minimize impacts on the environment and the health and safety of the workers and the public.</p>  <p>If any credible biological events are postulated, a description of a follow-up monitoring plan should be documented. The plans should include methods to test the performance of mitigation of those biological hazards.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="AppB.4.6"></div>
<h3 id="AppB-4-6">B.4.6	Prediction of non-malevolent external fire and explosion events</h3>  <p>These events occur outside the boundaries of the site, but have the potential to have a credible impact on site operations or the execution of emergency plans.</p>  <p>The examination of postulated accidents and malfunctions events and their mitigating strategies shall address the impact of postulated non-malevolent external fire and explosion events for each phase of site development, and shall address:</p>
<ul>
<li>environmental impacts</li>
<li>site security program</li>
<li>site and regional emergency plans for the project</li>
</ul>  <p>The following shall be addressed:</p>
<ul>
<li>history of significant non-malevolent external fire and explosion events in the region surrounding the site</li>
<li>fire and explosion risks that may develop from changes in land use around the site (e.g., industrial growth)</li>
<li>the effects of climate change that may increase the risks or effects of postulated fire events (e.g., increased wind speed, drier weather conditions, increased lightning)</li>
<li>effects on the ability to maintain effective site security during and following these events</li>
<li>effects on the health and safety of workers and the public, where these events interact with activities performed under the licence (for example, if the event causes a secondary fire in a chemical storage area, which causes an explosion or release of combustion products)</li>
<li>emergency response requirements posed by these types of events (i.e., fire response, chemical spill-control and response)</li>
</ul>  <h4>Guidance</h4>  <p>In addition, the following should be addressed:</p>
<ul>
<li>external fire criteria contained in IAEA Safety Series NS-G-1.5, <em>External Events Excluding Earthquakes in the Design of Nuclear Power Plants</em></li>
<li>where applicable, criteria contained in:
<ul>
<li>CSA Group, N293, <em>Fire protection for nuclear power plants</em></li>
<li>National Fire Protection Association (NFPA)
<ul>
<li>NFPA 1141, Standard for Fire Protection Infrastructure for Land Development in Suburban and Rural Areas, 2008</li>
<li>NFPA 1142, Standard on Water Supplies for Suburban and Rural Fire Fighting, 2007</li>
<li>NFPA 1143, Standard for Wildland Fire Management, 2008</li>
<li>NFPA 1144, Standard for Reducing Structure Ignition Hazards from Wildland Fire, 2008</li>
</ul></li>
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
<div id="AppB.4.7"></div>
<h3 id="AppB-4-7">B.4.7	Prediction of external malevolent events</h3>  <p>These events originate outside the boundaries of the site but have the potential to have a credible impact on site operations or the execution of emergency plans. Licensee documents related to this topic is considered prescribed information under the NSCA.</p>  <p>See section B.3.9 of this appendix for information about the SSTRA report.</p>  <h4>Guidance</h4>  <p>For guidance regarding the proposed format of the report, the applicant&#39;s security organization should contact the CNSC&#39;s Directorate of Security and Safeguards at: <a href="mailto:cnsc.info.ccsn@cnsc-ccsn.gc.ca">cnsc.info.ccsn@cnsc-ccsn.gc.ca</a>.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="AppB.5"></div>
<h2 id="AppB-5">B.5	Assessment of Non-Malevolent Accidents and Malfunctions and Their Consequences</h2>  <p>As part of site evaluation, the licensee shall demonstrate that the facility is capable of safely operating within the constraints of the proposed site. Environmental impacts shall be as low as reasonably achievable over its full lifecycle, while taking mitigating measures into account.</p>  <p>Any design information provided by the licensee shall be credible and sufficient to adequately bound the evaluations of environmental impacts and site evaluation.</p>  <p>Regardless of the approach used with regards to applying facility design information to their site selection case, the licensee/applicant will be required to demonstrate a clear understanding of the bases from which the safety case is developed.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="AppB.5.1"></div>
<h3 id="AppB-5-1">B.5.1	Considerations specific to the licence to prepare site</h3>  <h4>B.5.1.1	Decision-making considerations</h4>  <p>Decisions by the Commission on an application for a licence to prepare site under the NSCA for a nuclear reactor project may be made with high-level facility design information from a range of reactor designs without specifying the technology to be constructed.</p>  <p>Sufficient information shall be provided to describe the plant-site interface and take into consideration the characteristics of the proposed site. A combination of site characteristics and bounding design parameters will be the focus for comparison with the design characteristics of the actual plant selected for the application for a licence to construct.</p>  <p>If the applicant chooses to pursue a licence to prepare site without choosing a final technology for the site, the activities permitted under the issued licence to prepare site will be limited to site preparation activities that are independent of any specific reactor technology (e.g., clearing and grading the site, building site support infrastructure such as roads, site power, water and sewer services).</p>
<h4>B.5.1.2	Considerations that will carry forward to an application for a licence to construct</h4>  <p>The design that is eventually selected for construction need not be specifically referenced in the licence to prepare site application; but shall fit within the bounding envelope in the approved EA and licensing process. This evaluation would be performed once a reactor technology is selected. This evaluation will be required to be demonstrated as part of an application for a licence to construct, or for an amended licence to prepare site, where the licensee wishes to carry out activities such as excavation to bedrock for the plant foot print, or excavation of cooling water intake and outlet tunnels (note that concrete pour will not be permitted under a licence to prepare site).</p>  <p>The less facility design information provided in the licence to prepare site regulatory review processes, the greater the burden will be on the construction licence review process.</p>   <p>The underpinning of the bounding approach is that the environmental impacts of the reactor design eventually selected for construction should be less than the bounding impacts assessed in the application for a licence to prepare site. Similarly, if the site is deemed suitable to host nuclear units using bounding parameters, then the site should also be suitable for any reactor design that falls within the accepted bounding envelope.</p>
<h4>B.5.1.3	Criteria for level of design detail for an application for a licence to prepare site</h4>  <p>At the licence to construct application phase (or for an amended site preparation licence, as described above), detailed design information to verify that the evaluations presented previously remain valid shall be submitted.</p>  <p>Information required to support site evaluation around the assessment of accidents of accidents and malfunctions for the licence to prepare site includes:</p>
<ul>
<li>a technical outline of the facility layout</li>
<li>qualitative descriptions (or technical outline) of all major SSCs that could significantly influence the course or consequences of principal types of accidents and malfunctions</li>
<li>qualitative descriptions (or technical outline) of the functionality of the SSCs important to safety</li>
<li>qualitative descriptions of principal types of accidents and malfunctions to identify limiting credible sequences that include external hazards (natural and human-induced), design-basis accidents and beyond-design-basis accidents (severe accidents)</li>
</ul>  <p>For site evaluation carried out in support of licensing (including emergency planning purposes) severe accident sequences shall be addressed. The severe accident sequences include, where applicable, simultaneous multiple unit events, with loss of grid/station blackout events, and events with a simultaneous loss of offsite power with loss of normal access to the ultimate heat sink for an extended period of time. Considerations shall also include radioactive sources such as the spent fuel pool (also called irradiated fuel bay).</p>  <p>A description of out-of-core criticality events shall be provided showing that these events would not violate criteria established by international standards and national guidance as a trigger for a temporary public evacuation.</p>  <p>It shall be demonstrated that the safety goals and functional requirements are met.</p>   <h5>Guidance</h5>  <p>In situations where the technology to be used on the site has either not been selected (subject to a technology selection process that will occur either during or beyond site preparation) or the technology being considered is a first of a kind in Canada (design not yet fully developed), detailed quantified information about accidents and malfunctions characteristics may not be fully established. As a result, the CNSC will accept qualitative information in support of the site selection case with the understanding that there will be an increased level of regulatory scrutiny during the construction and operation licensing processes to validate the claims made.</p>   <p>Demonstration that safety goals and functional requirements are met should be done through a high-level safety analysis that demonstrates that the behaviour of the reactors being proposed is understood, and that their consequences can be accurately predicted.</p>  <p>Information on safety goals is provided in REGDOC-2.5.2, <em>Design of Reactor Facilities: Nuclear Power Plants</em>, in the facility licence (where applicable), and in Appendix B, Section B.5.2.2.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="AppB.5.2"></div>
<h3 id="AppB-5-2">B.5.2	Considerations applicable to all licensing phases</h3>  <p>Site evaluation information shall describe possible malfunctions or accidents associated with the project, the probability of occurrence, and the potential adverse environmental effects of any event sequence that may result in hazardous substance releases or large releases of energy (such as steam or electrical arcs) over the project&#39;s lifecycle and the set of corresponding bounding plant parameters that will form the basis of the design.</p>  <p>Severe accident sequences shall be addressed. These include, where applicable, simultaneous multiple-unit events, with loss of grid / station blackout events, and events with a simultaneous loss of offsite power with loss of normal access to the ultimate heat sink for an extended period of time. Considerations shall also include radioactive sources such as the spent fuel pool (also called irradiated fuel bay).</p>  <h4>Guidance</h4>  <p>Although documentation should provide a greater level of detail for the current licensing phase, information on future phases should be provided, to demonstrate that site evaluation is being maintained with a long-term view.</p>
<h4>B.5.2.1	Assessment of non-malevolent conventional accidents and malfunctions events</h4>  <p>For the facility technology to be constructed and operated on the site, documentation shall demonstrate that the safety goals and functional requirements established for non-malevolent conventional accidents and malfunction events are met, through safety analysis demonstrating that the behaviour of the design is understood, and that consequences can be accurately predicted.</p>  <h5>Guidance</h5>  <p>Conventional accidents and malfunctions are potential events which result in the release of non-radiological hazardous substances or large releases of energy.</p>  <p>The following should be considered in the establishment and maintenance of the bounding site and facility parameters:</p>
<ul>
<li>past (in the context of existing facilities adjacent to the selected site) and potential abnormal plant operations, accidents and spills of relevance</li>
<li>malfunction and accident events that have a reasonable probability of occurring during the project&#39;s life, and may involve the release of non-radiological hazardous substances or large release of energy that could significantly impact the environment</li>
<li>the source, quantity, mechanism, rate, form and characteristics, spatial and temporal extent of above-background levels of contaminants and other materials (physical, chemical, etc.) likely to be released to the surrounding environment during the postulated malfunctions and accidents</li>
<li>the effects of contaminant releases from conventional accidents and malfunctions on human health and the environment</li>
<li>mitigation means and measures, including policy, procedures and plans to mitigate, prepare for, respond to, and recover from emergencies from accidents and malfunctions (including emergency response and preparedness)</li>
<li>contingency, clean-up or remediation work in the surrounding environment (including long-term monitoring) during or immediately following, the postulated malfunction or accident</li>
<li>measures and provisions, to protect against the postulated accidents and malfunctions</li>
<li>accident and severe accident management policy and procedures</li>
<li>supporting infrastructure information external to the site and the exclusion zone; this information should show that emergency response within and external to the site will be sustainable for the project&#39;s lifecycle</li>
</ul>
<h4>B.5.2.2	Assessment of non-malevolent nuclear accidents and malfunctions</h4>  <p>The information considered shall be in line with level of plant design information available at each licensing phase while being mindful of later licensing risks. For reactors with a thermal power output below 200 MW, the CNSC will consider application of a graded approach to safety analysis and facility design in certain areas where the applicant can demonstrate that risk is low for the facility type being considered.</p>  <h5>Identification and classification of accidents</h5>  <p>Continuing site evaluation shall include consideration of unplanned events involving the reactor which challenge the performance of the safety functions and lead to radiological releases and releases of hazardous substances to the environment.</p>  <p>Licensee information shall identify and describe the principal types of accidents in the categories described below including the rationales for selecting these sequences as representative accidents.</p>   <p>Events involving the nuclear reactor are classified as follows:</p>
<ul>
<li>anticipated operational occurrences</li>
<li>design-basis accidents</li>
<li>beyond-design-basis accidents, including severe accidents</li>
</ul>  <p>For site evaluation carried out in support of licensing (including emergency planning purposes) severe accident sequences shall be addressed. The severe accident sequences include, where applicable, simultaneous multiple unit events, with loss of grid/station blackout events, and events with a simultaneous loss of offsite power with loss of normal access to the ultimate heat sink for an extended period of time.</p>  <h5>Calculation of accidents consequences</h5>  <p>The representative accident sequences in these categories of accident shall be assessed to determine releases of fission products and the potential releases of hazardous and radioactive substances from the facility.</p>   <p>For anticipated operational occurrences and for design basis accidents, licensee information shall demonstrate that designs would be capable of meeting the dose limits specified in REGDOC-2.5.2.</p>   <p>The potential offsite releases of radioactive products from representative severe accident sequences shall be documented. The severe accident sequences include, where applicable, simultaneous multiple unit events, with loss of grid/station blackout events, and events with a simultaneous loss of offsite power with loss of normal access to the ultimate heat sink for an extended period of time.</p>   <p>The ex-plant source term shall be described (i.e., list of radionuclides, magnitude and timing of the release), including a description of the process followed to arrive to the final list of radionuclides, along with a justification, where applicable, of the basis for screening out radionuclides not included.</p>  <h5>Meeting safety goals</h5>  <p>Quantitative safety goals shall be considered to ensure that the individual and societal risk posed by the facility to the public living nearby will be small compared with other risks it is exposed to.</p>  <p>Licensee information shall demonstrate that the design will be capable of meeting safety goals. The results and insights from analyses regarding the representative accident sequences used to define the safety goals should be described.</p>  <p>Two safety goals are defined to protect the environment and the health and safety of the public:</p>
<ul>
<li>Small release frequency: This addresses releases of radioactive material that would trigger temporary evacuation of the population within a few kilometres of the plant in order to prevent unacceptable health effects resulting from limited reactor core damage with impaired containment. The sum of frequencies of all event sequences that could lead to a release that could trigger temporary evacuation shall be less than 1:100,000 per reactor year.</li>
<li>Large release frequency: This addresses releases of radioactive material that could require long-term relocation of the public to prevent unacceptable health effects resulting from severe reactor core damage and containment failure. The sum of frequencies of all event sequences that can lead to a release that could require long-term relocation of the public shall be less than 1:1,000,000 per reactor year.</li>
</ul>
<h4>B.5.2.3	Prediction of non-malevolent radiological accidents and malfunctions occurring outside the reactor core and out-of-core nuclear criticality safety</h4>  <p>The information considered shall be in line with level of plant design information available at each licensing phase while being mindful of later licensing risks. For reactors with a thermal power output below 200 MW, CNSC will consider application of a graded approach to safety analysis and facility design in certain areas where the applicant can demonstrate that risk is low for the facility type being considered.</p>  <h5>Identification of the source, quantity, form and characteristics of radioactive and hazardous substances</h5>   <p>To support the site evaluation case around the discussion of non-malevolent radiological accidents and malfunctions occurring outside the reactor core and out-of-core nuclear criticality safety, a documented description of all major systems, other than the reactor, that contain radioactive and hazardous substances that could be released in the environment in significant quantities during an accident at or near the reactor facility shall be provided. The description shall include the quantity, form and characteristics of radioactive and hazardous substances that could be released.</p>  <p>In some cases, there may be separate facilities on the site that will support the reactor facility such as: fuel bay, fresh fuel storage, radioactive waste handling and storage facilities. For each of these facilities, accurate records of inventory shall describe:</p>
<ul>
<li>type and amount of radioactive products and radioactive substances to be contained in the facilities</li>
<li>types and quantities of hazardous substances</li>
</ul>  <h5>Guidance</h5>  <p>The radioactive sources where direct radiation may be an environmental hazard in accident conditions should also be identified.</p>  <h5>Identification of accidents and malfunctions</h5>   <p>Unplanned occurrences not involving the reactor and that may lead to radiological releases and releases of hazardous substances to the environment shall be characterized. This includes accidents with sufficiently low frequency leading to public evacuation or relocation.</p>   <p>The characterization process shall identify and describe the principal types of accident and their frequencies, and the rationales for selecting these sequences as representative.</p>  <p>For site evaluation carried out in support of licensing (including emergency planning purposes) severe accident sequences shall be addressed. The severe accident sequences include, where applicable, simultaneous multiple-unit events, with loss of grid/station blackout events, and events with a simultaneous loss of offsite power with loss of normal access to the ultimate heat sink for an extended period of time.</p>  <h5>Calculation of releases to the environment</h5>  <p>The representative accident sequences in these categories of accidents shall be assessed to determine the potential releases of hazardous and radioactive substances from the plant. The assessment shall describe the radiological source terms, including the limiting source terms (i.e., list of radionuclides, magnitude and timing of the release) and the process followed to arrive to the final list of radionuclides, along with a justification, where applicable, of the basis for screening out radionuclides not included.</p>  <p>The licensee shall demonstrate that the accident frequencies are well below the frequency limit of 10-5 for the small release frequency safety goal for evacuation, and the frequency limit of 10-6 for the large release frequency safety goal for relocation.</p>  <h5>Additional characterization information regarding out-of-core criticality safety</h5>  <p>Out-of-reactor criticality events shall be described, taking into account mitigation measures. Requirements for criticality safety are provided in RD-327, <em>Nuclear Criticality Safety</em>.</p>   <p>Nuclear criticality safety is defined as protection against the consequences of a criticality accident, preferably by the prevention of the accident.</p>  <h5>Guidance</h5>  <p>Guidance is found in GD-327, <em>Guidance for Nuclear Criticality Safety</em>. Out-of-reactor criticality events should adequately consider the criteria in the following documents as triggers for a temporary public evacuation and relocation:</p>
<ul>
<li>Health Canada, <em>Canadian Guidelines for Intervention during a Nuclear Emergency</em>, Document H46-2/03-326E, 2003</li>
<li>International Atomic Energy Agency, Safety Standards Series No. GS-R-2, <em>Preparedness and Response to Nuclear or Radiological Emergency</em>, Safety Requirements, IAEA, 2002</li>
</ul>
<h4>B.5.2.4	Prediction of accidents and malfunctions events due to malevolent acts</h4>  <p>The information considered shall be in line with the level of plant design information available at each licensing phase while being mindful of later licensing risks.</p>  <p>Certain information for this area may be considered to be prescribed information, as per section 21 of the <em>General Nuclear Safety and Control Regulations</em>, and require an increased level of information security and protection.</p>   <p>A systematic process shall be used to identify, assess and screen postulated malevolent acts and their consequential event sequences. Site-specific design-basis threats and beyond-design-basis threats, along with the appropriate safety goals and functional requirements that will be met, shall be described.</p>  <h5>Guidance</h5>  <p>The following should be addressed in the establishment and maintenance of the bounding site and facility parameters:</p>
<ul>
<li>while intentional malevolent acts are not accidents, environmental effects resulting from malevolent acts should be compared with the effects identified for conventional and radiological accidents and malfunctions</li>
<li>site-related information contained in the SSTRA report that may have a bearing on the events</li>
<li>events that may involve radioactive or nuclear material in and out of the core</li>
<li>events that may involve quantities of hazardous substances, with the potential to create significant environmental impact</li>
<li>events that may involve the large release of energy, with the potential to create significant environmental impact</li>
<li>events with the potential for significant impact to generation capacity</li>
</ul>  <p>For each of the event sequences postulated, submissions should consider the:</p>
<ul>
<li>source, quantity, mechanism, rate, form and characteristics of contaminants and other materials (physical, chemical and radioactive) likely to be released to the surrounding environment during the postulated event</li>
<li>mitigation means and measures, including policy, procedures and plans to mitigate, prepare for, respond to, and recover from emergencies for malevolent act event sequences (including security needs)</li>
<li>contingency, clean-up or restoration work in the surrounding environment that would be required during, or immediately following, the postulated malevolent initiated event sequence</li>
<li>measures, provisions and safeguards to protect against the postulated malevolent act event sequence</li>
<li>event or accident management policy and procedures for design basis events</li>
<li>beyond-design-basis malevolent initiated event sequences</li>
<li>supporting infrastructure external to the site (exclusion zone)</li>
</ul>  <p>This process may utilize the consequence analysis of non-malevolent events used in the assessment of the effects of the site activities on the environment.</p>  <h5>Identification and classification of accidents</h5>  <p>Malevolent acts resulting in accidents should be identified and classified in consideration of the following categories:</p>
<ul>
<li>conventional accidents and spills</li>
<li>fires and explosions</li>
<li>internally and externally generated missiles</li>
<li>human error</li>
<li>human manipulation of SSCs</li>
<li>equipment failure or malfunction</li>
<li>failure of pressurized components or cylinders</li>
<li>airplane crash</li>
<li>transportation initiated or related events</li>
<li>release or dispersion of radioactive or nuclear material</li>
<li>flooding</li>
</ul>  <h5>Calculation of accident consequences</h5>  <p>Releases of hazardous substances or radioactive products shall be calculated for a limited number of events representative for bounding or limiting credible accidents and malfunctions of malevolent origin. Consequence analyses shall be performed as part of the demonstrating of meeting the safety goals.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="AppB.6"></div>
<h2 id="AppB-6">B.6	Effects of the Project on the Environment</h2>  <p>See sections B.6.1 to B.6.7 of this appendix for high-level requirements.</p>  <p>Adequate and sufficient environmental impact information is required to determine, for the entire lifecycle of the project, whether:</p>
<ul>
<li>siting option choices were made to avoid or reduce environmental effects</li>
<li>the facility design and site infrastructure designs are adequate (including the exclusion zone boundary, where appropriate)</li>
<li>the applicant will ensure adequate provision for the protection of the environment, the health and safety of persons and maintaining national security</li>
</ul>  <p>Assumptions used in the prediction of the project&#39;s effects on the environment over the project lifecycle shall include information about facility operations under normal conditions, and during accidents and malfunctions.</p>   <p>Radioactive and hazardous wastes that will be generated over the nuclear facility&#39;s lifecycle shall be described in the predictions of effects on the environment.</p>  <p>The evaluation of the proposed approach for environmental effects monitoring for the current licensing phase, including projected minimum detectable critical effect size, and the confidence associated with the design of the monitoring and baseline data shall be documented.</p>   <h3>Guidance</h3>  <p>The goal of monitoring is to generate information for informed decision-making on whether the applicant will make adequate provisions for the protection of the environment for activities being conducted under the current licence.</p>  <p>Provision for environmental protection should be based, in part, on criteria and recommendations that are relevant to the current licensed activities, such as those from the <em>Environmental Codes of Practice for Steam Electric Power Generation &ndash; Construction Phase</em> 1989 (Environment Canada, 1989). For example, for activities being conducted under a licence to prepare site, information should include appropriate environmental protection practices in site surface preparation activities, and plans for environmental inspections, performance verification monitoring for predicted effects and mitigation.</p>  <p>Effects predictions and statistical approaches should be documented and used (i.e., random sampling wherever feasible) for testing these effects predictions according to published protocols. Effects predictions for pulse exposures (e.g., spills, accidental or intended releases, silt and storm water runoff events) should be developed appropriately, since they have different requirements than predictions for continuous exposures.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="AppB.6.1"></div>
<h3 id="AppB-6-1">B.6.1	Effects of the project on air quality</h3>  <p>The evaluation of the proposed approach for environmental effects monitoring for the current licensing phase, including projected minimum detectable critical effect size, and the confidence associated with the design of the monitoring and baseline data shall be documented.</p>   <h4>Guidance</h4>  <p>The goal of monitoring is to generate information for informed decision-making on the likelihood and significance of adverse effects from activities being conducted under the current licence.</p>  <p>The following should be addressed:</p>
<ul>
<li>characterization of the effects of emissions of nuclear and hazardous substances from the project to the atmosphere during normal operations and during postulated accident and malfunction scenarios</li>
<li>assessment of the potential impacts of atmospheric nuclear and hazardous substance emission to air quality for each phase of the project, and the ability of the described mitigation measures in eliminating or minimizing any adverse effects.</li>
</ul>  <p>Air quality assessments should include, as applicable:</p>
<ul>
<li>information on project-related emission sources from stationary and mobile sources</li>
<li>information on point source emissions</li>
<li>information on proposed pollution-control technologies, including environmental effects; the information should be prepared with an awareness of pollution-control technologies available in industry</li>
<li>analysis of the facility&#39;s air emissions, using emission estimates that are "conservative" (reasonably expected to exceed the actual emission rates) or with an accurate emissions scenario that assumes operating conditions resulting in the highest concentrations at offsite receptors
<ul>
<li>emission rates and the duration of elevated rates of emission during plausible accident or malfunctions scenarios should also be described</li>
</ul></li>
<li>anticipated frequency and duration of warm and cold start-ups and present emissions of key pollutants under these start-up and any other lower-efficiency scenarios</li>
<li>descriptions of appropriate atmospheric dispersion modelling, to predict impacts at the project exclusion zone boundary, fence line and offsite</li>
<li>models and techniques should be consistent with guidelines such as the Ontario Ministry of the Environment&#39;s <em>Air Dispersion Modelling Guideline for Ontario</em>, and relevant modelling guidance published by the U.S. Environmental Protection Agency</li>
<li>standard dispersion modelling results, including maximum offsite one-hour and 24-hour concentrations (for comparison to applicable standards and objectives), frequency analysis for any offsite dispersion that has exceeded limits, and maps of dispersion modelling results</li>
<li>description of the cumulative effect of emissions from the facility and regional air emissions or air quality, including:
<ul>
<li>representative background concentrations in the worst-case air quality assessment</li>
<li>the applicability of the background data (for example, major local air pollution sources would also impact air quality)</li>
</ul></li>
<li>comparison of air-quality assessment results against applicable provincial and federal air-quality criteria and objectives, such as 24-hour, 3-hour and 1-hour maximum acceptable concentrations. Precise guidance can be obtained from provincial regulations and standards.</li>
<li>where applicable, potential trans-boundary air quality impacts or impacts on First Nations&#39; lands</li>
</ul>  <p>Proposed air quality mitigation strategies should include measures to reduce emissions or formation of dust and particles from construction activities and vehicles, and to minimize air emissions from the project during the construction phase, so as to prevent undue impact to surface water quality and any sensitive biological (including human) receptors downwind. Federal guidance can be found in:</p>
<ul>
<li><em>Best Practices for the Reduction of Air Emissions from Construction and Demolition Activities</em>, Cheminfo Services Inc., Prepared for Environment Canada, March 2005.</li>
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
<div id="AppB.6.2"></div>
<h3 id="AppB-6-2">B.6.2	Effects of the project on terrestrial environment</h3>  <p>The effects of the proposed project on the terrestrial environment, including flora and fauna, shall be examined and documented, including impacts to wildlife corridors, protected areas, and other valued components (VCs). This assessment includes potential impact from project activities during site preparation, construction, operation, decommissioning and abandonment at the site, local, and regional scales.</p>  <p>The assessment of effects from the project on the terrestrial environment shall be conducted in a manner consistent with guidance provided in CSA Group N288.6-12, <em>Environmental Risk at Class I nuclear facilities and uranium mines and mills</em>.</p>  <p>Species and habitats that will be considered important ecological resources for the site, vicinity, transmission corridors, and other related areas for evaluation of any potential impacts shall be identified.</p>  <h4>Guidance</h4>  <p>The assessment of project effects on the terrestrial environment should include:</p>
<ul>
<li>concentration of contaminants in soil</li>
<li>concentration of contaminants in the food chain</li>
<li>characterization of effects on potential terrestrial VCs</li>
<li>effects of loss of habitat and disturbance on flora and fauna</li>
<li>effects of physical barriers, including disruption of migration corridors, on wildlife</li>
<li>effects of disruption, blockage, impediment and sensory disturbance on wildlife</li>
<li>mortality, direct and indirect, of terrestrial wildlife</li>
<li>reduction in wildlife productivity and population attributes</li>
<li>effects prediction using quantitative ecological risk assessment modelling</li>
<li>impact on biodiversity</li>
<li>identification of potential credible mitigation measures for all project phases to minimize or eliminate the effects of the project on the proposed terrestrial VCs</li>
</ul>  <p>Well-prepared effects predictions:</p>
<ul>
<li>provide a quantitative expression of change (e.g., percent loss)</li>
<li>state a degree of confidence in the prediction of habitat loss (related to type of evidence)</li>
<li>describe the roles of mitigation, habitat compensation and performance monitoring</li>
<li>provide a rationale for significance and mitigation follow-up</li>
<li>include a discussion of any uncertainties or limitation of the assessment</li>
<li>specify predicted effects as the difference in attribute(s) between a future condition without the project, and a future with the project:
<ul>
<li>a future condition without the project has a present condition trajectory into the future, and takes into account any future changes in baseline factors</li>
<li>a future with the project has a present trajectory plus the incremental effect of the project</li>
</ul></li>
</ul>  <p>The degree of detail provided in the assessment of the effects is expected to be commensurate with the magnitude of the potential impact.</p>  <p>Sufficient data should be provided for the assessment of anticipated impacts during the period of site preparation, facility construction, facility operations and decommissioning. Effects descriptions should include direct exposure effects (e.g., on survival, growth, reproduction, age, species distribution of community) and indirect effects (e.g., altered predators, prey, competition, exposure via the food chain).</p>  <p>Information and data on the terrestrial effects should be evaluated against reliable criteria and objectives, so as to ensure that the information can identify likely interactions between the project and its effects on the terrestrial environment&#39;s biological components. Guidance on selecting appropriate toxicological benchmarks is provided in CSA Group, N288.6-12.</p>  <p>Refer to the following documents for further guidance:</p>
<ul>
<li>Canadian Council of Ministers of the Environment (CCME), <em>Framework for Ecological Risk Assessment</em></li>
<li>Environment Canada, <em>A Framework for Ecological Risk Assessment at Contaminated Sites in Canada: Review and Recommendations</em></li>
<li>Environment Canada and Health Canada, <em>CEPA Priority Substances List Assessment Report: Releases of Radionuclides from Nuclear Facilities (Impact on Non-human Biota)</em></li>
<li>where applicable, provincial guidelines and the following standards:
<ul>
<li>CSA Group, N288.4-10 <em>Environmental Monitoring Programs at Class I Nuclear Facilities and Uranium Mines and Mills</em></li>
<li>CSA Group, N288.6-12 <em>Environmental Risk Assessment at Class I Nuclear Facilities and Uranium Mines and Mills</em></li>
<li>CSA Group, N288.5-11 <em>Effluent Monitoring Program at Class I Nuclear Facilities and Uranium Mines and Mills</em></li>
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
<div id="AppB.6.3"></div>
<h3 id="AppB-6-3">B.6.3	Effects of radioactive and hazardous substances on the terrestrial environment</h3>  <p>Uncertainties included in the data (e.g., natural randomness, insufficient knowledge, and sampling or measurement error) shall be specified.</p>  <h4>Guidance</h4>  <p>The typical, natural variation in radioactivity and hazardous substances concentrations at reference sites should be determined through the implementation of a statistical design into the baseline studies.</p>  <p>Relevant federal and provincial guidelines should be addressed and include, for all cumulative project effects above baseline data, the following:</p>
<ul>
<li>detailed maps showing the proposed locations of sampling/monitoring stations for all measurements of radioactive and hazardous environmental concentrations</li>
<li>an inventory of natural and anthropogenic sources for radioactive and hazardous substances at the site and within local and regional study areas, including predicted/estimated concentrations of radioactive and hazardous substances from the project</li>
<li>relevant pathways of exposure to radioactivity and hazardous substances for terrestrial biota, including parameter values used to predict/calculate the environmental concentrations of radioactive and hazardous substances or exposure for terrestrial VC receptors</li>
<li>predicted/estimated radiation doses and contaminant exposure to terrestrial VC receptors from the project, including the criteria and benchmarks used in the evaluation of effects associated with radioactive and hazardous substances in the terrestrial environment</li>
<li>assessment of possible effects from potential changes in the terrestrial environment, due to predicted radioactive and hazardous substances concentrations and predicted cumulative effects</li>
<li>identification of potential credible mitigation measures for all project phases to minimize or eliminate the effects of the project on the proposed terrestrial VC receptors</li>
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
<div id="AppB.6.4"></div>
<h3 id="AppB-6-4">B.6.4	Effects of the project on aquatic environment</h3>  <p>The effects from project activities on the aquatic environment shall be addressed, including aquatic habitat and associated aquatic biota.</p>  <h4>Guidance</h4>  <p>The following general areas should be addressed:</p>
<ul>
<li>using the parameters of habitat quality, quantity and frequency of use, the following aquatic habitats:
<ul>
<li>pelagic (open water)</li>
<li>littoral (near-shore and shallow)</li>
<li>benthic (bottom-associated)</li>
<li>riparian (shoreline)</li>
<li>wetland</li>
<li>onsite pond and streams that provide habitat for aquatic biota;</li>
</ul></li>
<li>the existing physically altered or contaminated habitats that were changed by past operations where there is an existing facility (for example, thermal discharge channels, thermal plumes and past/present physical disruption/structures in near-shore uplands, shoreline/riparian and water bodies)</li>
<li>habitat of aquatic finfish, shellfish and aquatic plants, excluding aquatic mammals, water birds, waterfowl and reptiles (these are within the scope of effects of the project on the terrestrial environment)</li>
<li>maps (including digital databases such as a geographic information system) should show the relationship of the site to major hydrological systems that could affect or be affected by plant construction or operation</li>
</ul>  <p>Well-prepared effects predictions:</p>
<ul>
<li>provide a quantitative expression of change (for example, percent loss)</li>
<li>state a degree of confidence in the prediction of habitat loss (related to type of evidence)</li>
<li>describe the roles of mitigation, habitat compensation and performance monitoring</li>
<li>provide a rationale for significance and mitigation follow-up</li>
<li>include a discussion of any uncertainties or limitations of the assessment</li>
<li>specify predicted effects as the difference in attribute(s) between a future condition without the project, and a future with the project:
<ul>
<li>a future condition without the project has a present condition trajectory into the future, and takes into account any future changes in baseline factors</li>
<li>a future with the project has a present trajectory plus the incremental effect of the project</li>
</ul></li>
</ul>  <p>Pre-project or baseline aquatic habitat classification and mapping are precursors to any decisions associated with aquatic habitat loss. Assessing the potential for habitat loss should include:</p>
<ul>
<li>numerical statements on the size, frequency, duration and magnitude of change of the affected area and/or volume of habitat, and an assessment of how critical and unique the affected habitat is to biota exploiting the habitat (quantity and quality)
<ul>
<li>this should be supported by maps showing areas of project activities, and overlap with aquatic VC habitat in time and space (including VC home range and migration and dispersal estimates)</li>
</ul></li>
<li>descriptions of any project effects which are physical, biological, chemical or radiological in space and time on the habitat, and occurrence of interacting organisms</li>
<li>descriptions of disturbances of land, shoreline and water bodies from activities in project phases, with linkages to any expected change in aquatic habitat (offshore placement of excavated material, placement of intake and discharge structures, cofferdams or shoreworks or shoreline protection) and an assessment of the water column volume and area affected by the intake water withdrawal</li>
<li>descriptions of possible future habitat loss and also of past habitat loss, in order to set the context for the evaluation of the importance of the possible future losses</li>
<li>defensible arguments for or against using the benthic invertebrate community as indicator of loss of fish habitat, since this is the food base for many fish species</li>
</ul>  <p>Submissions should address the Fisheries Act from Fisheries and Oceans Canada (DFO). The applicant should review their proposed activities against the requirements of the Fisheries Act, as an authorization may be required if an activity is likely to cause "serious harm to fish". The applicant should consult the Fisheries and Oceans Canada <a href="http://www.dfo-mpo.gc.ca/pnw-ppe/index-eng.html">Projects Near Water</a> website for further guidance on self-assessing "serious harm to fish" and the authorization application process. Depending on the location of the activity (within the proposed licence boundary or outside), the application would be submitted for review to the CNSC or DFO, respectively.</p>  <p>Information and data on the aquatic effects should be evaluated against credible criteria and objectives, to ensure that the information is sufficient to identify likely interactions between the project and its effects on the biological components of the aquatic environment. When determining the appropriate aquatic effects criteria and objectives, guidelines and standards such as those listed below should be considered:</p>
<ul>
<li>Canadian Council of Ministers of the Environment (CCME), <em>Framework for Ecological Risk Assessment</em></li>
<li>Environment Canada, <em>A Framework for Ecological Risk Assessment at Contaminated Sites in Canada: Review and Recommendations</em></li>
<li>Environment Canada and Health Canada, <em>CEPA Priority Substances List Assessment Report: Releases of Radionuclides from Nuclear Facilities (Impact on Non-human Biota)</em></li>
<li>where applicable, provincial guidelines and the following standards:
<ul>
<li>CSA Group, N288.4-10 <em>Environmental Monitoring Programs at Class I Nuclear Facilities and Uranium Mines and Mills</em></li>
<li>CSA Group, N288.6-12 <em>Environmental Risk Assessment at Class I Nuclear Facilities and Uranium Mines and Mills</em></li>
<li>CSA Group, N288.5-11 <em>Effluent Monitoring Program at Class I Nuclear Facilities and Uranium Mines and Mills</em></li>
</ul></li>
</ul>
<h4>B.6.4.1	Effects of liquid effluent on the aquatic environment</h4>  <p>The following areas of concern shall be addressed:</p>
<ul>
<li>identification of all plant-related structures or alterations of the natural topography that lead to aquatic contaminant inputs to receiving water bodies, floodplains or wetlands at the site</li>
<li>known (historical and present) aquatic contaminants found at the site and within the local and regional study areas, potentially affecting or affected by plant construction and operation</li>
<li>information contains sufficient linkage of hydrological mappings to known (historical and present) data and predicted future changes in aquatic contaminant concentrations</li>
</ul>  <h5>Guidance</h5>  <p>Sufficient data should be provided for the assessment of anticipated impacts during the period of site preparation, facility construction, facility operations and decommissioning within, upstream and downstream of the zone of influence of the intake and discharge structures.</p>  <p>Information should follow collective lines of evidence approaches that are recognized by provincial and federal government agencies, for example, the Ontario Ministry of the Environment&#39;s <em>Guidelines for Identifying, Assessing and Managing Contaminated Sediments in Ontario: An integrated approach</em>, or United States Environmental Protection Agency EPA-540-R-05-012, <em>Contaminated Sediment Remediation Guidance for Hazardous Waste Sites</em>.</p>  <p>The approach should project the effects on individual biota to those of the population. Information should be supported by peer-reviewed published scientific literature, and be based on a combination of water and sediment chemistry, benthic invertebrate and fish field surveys (accounting for the most sensitive VCs), laboratory toxicity tests and computer modelling. The approach should confirm whether there are or will be significant adverse effects on the aquatic community.</p>  <p>Measurements and data development programs should demonstrate accepted and established and published aquatic contaminant sampling and modelling protocols and field study designs.</p>  <p>Predicted changes to surface water and sediment quality from modelling data should be evaluated using criteria that ensure that surface water and/or sediment quality changes and liquid effluent input into water bodies does not pose risks to human health and the environment. When determining appropriate surface water quality criteria and objectives, licensee information should consider federal guidelines, such as the <em>Canadian Environmental Quality Guidelines</em> published by the CCME, as well as provincial guidelines and standards, and use water-quality benchmarks from reputable scientific literature.</p>  <p>The description of zones of influence of stressors in space and time should be relative to habitat and occurrence of interacting organisms, specified and supportable from site studies and/or scientific/agency publications dealing with pulse-type and continuous release aquatic effects.</p>  <p>Effects descriptions should include direct exposure effects (e.g., on survival, growth, reproduction, age, species distribution of community), and indirect effects (e.g., altered predators, prey, competition, exposure via the food chain).</p>  <p>To determine the dilution factors and to perform mixing zone calculations, it is expected that a conservative final exposure concentration of contaminants in the liquid effluents entering water bodies will be used in accordance with the <em>Canadian Environmental Quality Guidelines</em>.</p>
<h4>B.6.4.2	Blasting and excavating effects on aquatic biota</h4>  <p>Information for this area should be commensurate with the level of blasting and excavating to be performed under each licence phase of the project.</p>   <p>Activities should be planned to avoid critical fish habitat use times and locations within the zone of influence.</p>  <p>The following should be addressed:</p>
<ul>
<li>criteria contained in Fisheries and Oceans Canada (DFO)&#39;s <em>Guidelines for the Use of Explosives in or Near Canadian Fisheries Water</em></li>
<li>Environment Canada&#39;s total suspended solids and turbidity criteria</li>
<li>control/impact testing for site preparation blasting effects on aquatic biota in nearby site ditches, streams or ponds within the zone of influence</li>
<li>habitat disruption (e.g., through siltation or propagation of sound pressure waves) or physical disruption (e.g., disrupting groundwater flows to streams during spawning periods)</li>
<li>estimates of individual losses of aquatic fauna provided in the context of population attributes (e.g., spatial distribution, abundance or density)</li>
</ul>  <p>It should be demonstrated that the site preparation and construction activity monitoring plan design will be sufficient to define the magnitude, temporal and spatial extent of the source terms and effects (e.g., spatial extent of lake bottom affected, numbers of fish killed or injured per blast extrapolated to whole period of activity, effects on benthic invertebrates)</p>
<h4>B.6.4.3	Impingement, and entrainment effects on aquatic biota</h4>  <p>The following shall be addressed for each project phase:</p>
<ul>
<li>site evaluation from the perspective of project-related intake impingement and entrainment effects on aquatic organisms (with an emphasis on VCs). However, total losses of all species are considered to ensure adequate provision for the protection of the environment</li>
<li>effects for all consumable and cooling water system options</li>
<li>defensible and testable predictions of residual adverse effects of water intakes (such as cooling water intakes) on aquatic biota, so that the significance of all effects of the project, and the cumulative effects of other projects, can be assessed</li>
<li>monitoring programs for entrainment and impingement should be based on peer-reviewed published standards (e.g., Electric Power Research Institute, <em>Impingement Abundance Monitoring Technical Support Document, Final Report and Entrainment Abundance Monitoring Technical Support Document, Final Report</em>)</li>
<li>screenings of VCs for susceptibility to intake withdrawal based on susceptibility factors</li>
<li>descriptions of conceptual model(s), linking source terms for entrainment and impingement to measures and predictions of effect</li>
</ul>  <h5>Guidance</h5>  <p>Impingement effects occur when large aquatic organisms, such as adult and juvenile fish, aquatic birds, amphibians and aquatic mammals within the source water, are drawn into plant consumable water systems (such as condenser cooling water). These organisms are also trapped against intake debris screens. The resulting impingement catch is usually automatically washed from the intake screens and conveyed to debris bins for disposal as waste. Mortality is 100 percent for juvenile fish. The mortality rate is the same for adult fish, unless there is a system for adult live handling and return to the water body.</p>  <p>Entrainment effects occur when small organisms (such as fish eggs, larvae, invertebrates and plankton) within the source water pass through the intake screen(s), are transported through the consumable water system, and are discharged at the system outlet back into the source water body (or nearby cooling pond). These organisms are exposed to chemical, mechanical (impact) and thermal stresses during entrainment. Mortality rates vary from 25 percent to 100 percent, depending upon the type of organism and species.</p>  <p>The estimates of intake losses (cropping rates) for all life stages of aquatic biota in numbers and biomass should be extrapolated to the whole year, with confidence intervals based upon industry-accepted methods of sampling and analysis. This includes the conversion of immature stages to age-1 adult equivalents for estimates of losses of population-level importance (e.g., Dey 2003; <em>Defining and Assessing Adverse Environmental Impact from Power Plant Impingement and Entrainment of Aquatic Organisms</em>, U.S. EPA 2002). Standard modelling and statistical approaches and contextual methods from government agencies and peer-reviewed published scientific literature should be used to project the effects on individual biota to those of the year-class or population. Mortality is assumed to be 100 percent from impingement, unless a fish handling and return system is included. The effectiveness predictions also vary by species and life stage. For example, alewife are fragile and easily killed, whereas sucker and eels are not; juveniles are easily injured and do not easily withstand mechanical handling systems.</p>
<h4>B.6.4.4	Thermal plume effects on the aquatic environment</h4>  <p>The following shall be addressed:</p>
<ul>
<li>clear pictorial descriptions showing the locations of discharge structures and areas of influence (temperature, discharge jet) relative to intakes and known/suspected areas of VC-focused habitat use (spawning, rearing, nursery, feeding, wintering areas) and features (e.g., substrates, bathymetry, wetlands, aquatic plants)</li>
<li>descriptions of models (physical, mathematical, conceptual) used to predict temperature effects and thermal discharge jet effects, and to account for long-term effects of climate warming relative to incremental effects of project</li>
<li>listing of aquatic fish and shellfish species, aquatic plants, invertebrates, and which life stages are susceptible to exposure to the interaction and which subset of species are most sensitive</li>
<li>descriptions of zones of influence of thermal plume temperature effect (greater than 1ºC above ambient) and physical discharge jet effect with maps and plots (e.g., delta above ambient versus distance alongshore and offshore and incremental effect on existing thermal plumes)</li>
<li>descriptions of alongshore currents, including direction, speed and sediment transport and how these are changed by discharge plumes (deflection, distance and entrainment time for passively drifting biota, such as eggs, larvae)</li>
<li>direct consequences to the ecosystem (process, structure, function) aquatic invertebrates (bacteria, protozoans, viruses, zooplankton, benthic and other macroinvertebrates) phytoplankton, rooted aquatic plants and fish, and indirect effects (via food chain) to aquatic birds and mammals</li>
<li>descriptions of worst-case and average conditions of discharge water effects, including:
<ul>
<li>the effects of thermal plume on aquatic habitat temporal and spatial changes (for example, discharge jet interruption of ambient lake currents, scouring, temperature changes, sedimentation and particle size, algal cover)</li>
<li>consideration of risk to aquatic biota from "pulse" temperature increases and decreases relative to ambient changes such as thermal shock from ongoing operations, outages and anticipated operational occurrences</li>
</ul></li>
<li>temperature predictions (mean, median, maximum and minimum) during critical life stage periods for potential VCs and plots of hourly maxima showing duration at peak temperatures</li>
<li>effects of contaminants released in the thermal discharge, including the combined effects of temperature and contaminants, as well as the potential for gas-bubble disease</li>
<li>effects on fish, including:
<ul>
<li>physical displacement of life stages exposed to discharge jets</li>
<li>lethal and sub-lethal effects</li>
<li>behavioural responses (attraction and avoidance) for all life stages</li>
<li>direct effects (survival, growth, reproduction, diet, condition) and indirect effects (e.g., discharge angling mortality, increased larval mortality from predation due to physical transfer out of discharge channel to open water body, disease prevalence) analysis and evaluation of the incremental effects from the project, and the cumulative effects of combined discharges</li>
</ul></li>
<li>the monitoring and sampling methodologies that will be used on the site along with descriptions of sampling/monitoring points and equipment</li>
</ul>  <h5>Guidance</h5>  <p>When considering the use of a nearby large body of water as the ultimate heat sink for heat rejection (using, for example, once-through condenser cooling water), the effects of the resultant thermal plume, and the physical effects of the discharge water flow on nearby bodies of water shall be predicted, monitored and documented. The potential effects of using cooling towers on air quality, terrestrial and aquatic environment are considered.</p>  <p>The scope of information should be scaled to the scope of anticipated adverse effects. For example a once-through cooling system (diffuser) would require complex analysis, whereas cooling towers would not.</p>  <p>Where using a cooling pond that is separate from the body of water, the interactions between the cooling pond and the nearby bodies of water should consider and mitigate any potential effects of cooling pond containment dike breaches.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="AppB.6.5"></div>
<h3 id="AppB-6-5">B.6.5	Effects of the project on hydrogeology</h3>  <p>The effects from project activities on hydrogeology shall be addressed.</p>  <p>Information should address the prediction and monitoring of effects of activities on:</p>
<ul>
<li>flow patterns and rates of groundwater flow</li>
<li>physical, chemical, and biological characteristics of the groundwater within the site, local and regional areas, during site preparation, construction, operation, decommissioning or abandonment of the facility</li>
</ul>  <h4>Guidance</h4>  <p>Information should:</p>
<ul>
<li>describe how the hydrogeological investigations program is being conducted to permit the assessment of the impact of features and processes from the baseline hydrogeology and groundwater quality information contained in the licensing submissions</li>
<li>include the physical, chemical, and biological water-quality parameters, rates, flow patterns of groundwater flow and movements of released contaminants through local and regional groundwater flow systems</li>
<li>provide sufficient information to enable the reader to become familiar with the physiographic, hydrologic, hydrogeological and groundwater uses at the site and in its vicinity</li>
</ul>  <p>Investigations of groundwater, as well as the investigation and modelling of dispersion and retention of radionuclides in groundwater should demonstrate consideration of the criteria contained in IAEA Safety Standards Series NS-G-3.2, <em>Dispersion of Radioactive Material in Air and Water and Consideration of Population Distribution in Site Evaluation for Nuclear Power</em>.</p>   <p>Well-supported effects predictions should be provided (e.g., quantitative expression of change and a rationale provided for significance and mitigation follow-up). Guidance is available from the Canadian Environmental Assessment Agency&#39;s <em>Operational Policy Statement: Assessing Cumulative Environmental Effects under the Canadian Environmental Assessment Act, 2012</em>.</p>  <p>Potential radiological doses and exposures to hazardous substances to persons, including mitigation strategies, should be assessed and documented for each phase of the facility&#39;s lifecycle.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="AppB.6.6"></div>
<h3 id="AppB-6-6">B.6.6	Effects of the project on human health</h3>  <p>The following effects on health and safety of persons shall be addressed:</p>
<ul>
<li>onsite during normal operations, and during accidents and malfunctions</li>
<li>offsite during normal operations, and during accidents and malfunctions</li>
</ul>  <p>For each area of concern itemized, appropriate human receptors shall be identified and characterized.</p>   <p>Normal operations include unplanned exposures and upset conditions that do not cause an emergency to be declared.</p>   <p>Key components of the assessment process include the identification of:</p>
<ul>
<li>potential project-human interactions</li>
<li>radiological and non-radiological (hazardous substances) COPCs</li>
<li>human receptors and assessment criteria</li>
</ul>  <h4>Guidance</h4>  <p>Receptor exposure characteristics (e.g., inhalation or ingestion rates), when used, should be referenced from accepted Canadian (for example, for hazardous substances: Health Canada, <em>Compendium of Canadian Human Exposure factors for Risk Assessment</em>, Richardson, 1997) or International sources (such as the most up to date International Commission on Radiological Protection (ICRP) references and the U.S. Environmental Protection Agency&#39;s Agency for Toxic Substances and Disease Registry). Guidance for protection of workers from hazardous chemicals can be found in American Conference of Governmental Industrial Hygienists. Reason for selecting an alternate source of receptor characteristics should be given, with the source/citation clearly documented and accompanied by justified assumptions. A conservative approach should be used in assessments of project effects on human health.</p>  <p>The effects documented for accidents and malfunctions should correlate with the postulated accidents and malfunctions scenarios.</p>
<h4>B.6.6.1	Radiological risks</h4>  <p>The method used to estimate effective and equivalent doses shall be described and documented.</p>   <h5>Guidance</h5>  <p>Documentation should identify radiation doses received by persons on and offsite at similar existing facilities (when they exist) that use the best available technology. This benchmarking exercise should be used to develop a licensing basis that achieves similar or lower doses.</p>  <p>These estimates may be based on modelling of prospective radionuclide exposure (both external exposure and, internal exposure via intakes of radionuclides) to the identified human receptors using methods and/or dose coefficient acceptable to the CNSC (for example, as described in CSA Group N288.1, <em>Guidelines for calculating derived release limits for radioactive material in airborne and liquid effluents for normal operation of nuclear facilities</em>; ICRP 68, <em>Dose Coefficients for Intakes of Radionuclides by Workers</em>; ICRP 72, <em>Age-dependent Doses to the Members of the Public from Intake of Radionuclides Part 5, Compilation of Ingestion and Inhalation Coefficients</em>; and U.S. Environmental Protection Agency Federal Guidance Report no.12, <em>External Exposure to radionuclides in air, water, and soil</em>). For direct exposure to radiation from photon-emitting sources, methods based on Monte Carlo techniques and point kernel codes may also be used.</p>  <p>Information provided to verify the reference dose data should be demonstrated to be reliable and associated with workplace and work activities that represent the proposed facility-related workplace and work activities.</p>  <p>The basis for assumptions regarding exposure duration and exposure frequency should be documented.</p>  <p>Calculated doses to persons, both on and offsite, should be traceable to the input data (e.g., receptor exposure characteristics, relevant radiological data). Sample dose calculations should be included that demonstrate the link from input data (such as concentrations of radionuclides in air) to dose to persons, with all relevant assumptions provided.</p>
<h4>B.6.6.2	Mitigation strategies</h4>  <p>Mitigation strategies shall reflect preventative principles and be technically and economically feasible. Emphasis shall be placed on eliminating or minimizing hazards through design and engineered controls.</p>   <p>Engineered controls shall demonstrate that the controls reduce the magnitude of each radiation source and keep radiological exposures of workers as low as reasonably achievable (ALARA) during routine and non-routine work practices (i.e. operating and maintenance activities). The radiological design objectives for these engineered controls shall also be specified.</p>  <p>Administrative controls that will be used to minimize doses to workers shall be identified. In the event of failed engineered and administrative controls, further measures in the form of contingency responses shall be described.</p>  <p>The significance of effects resulting from the project shall consider the implementation of the proposed mitigation measures. The assessment results shall demonstrate that the predicted effective and equivalent doses to workers and members of the public will be ALARA and below the applicable radiation dose limits specified in sections 13 and 14 of the <em>Radiation Protection Regulations</em>. The criteria for determining whether significant adverse effects to workers onsite, resulting from the accidents and malfunctions associated with the reactor facility, for each phase of the project are presented in section 15 of the <em>Radiation Protection Regulations</em>. All necessary measures should be taken to evacuate any persons from site who are not involved in the control of the emergency situation. Once the emergency has ended, and the recovery phase has begun, the dose limits in sections 13 and 14 of the <em>Radiation Protection Regulations</em> will apply. It is also a regulatory requirement that doses be ALARA. The proponent should also credibly demonstrate that the design meets the dose acceptance criteria and safety goals defined in REGDOC 2.5.2, <em>Design of Reactor Facilities: Nuclear Power Plants</em>.</p>  <h5>Guidance</h5>  <p>Doses to workers from routine and non-routine work practices should be estimated, including the maximum annual effective and equivalent doses to categories of workers.</p>   <p>Where prevention of effects cannot be assured, administrative mitigation controls such as personal protective equipment, training and procedures should be described. Only mitigation measures that are technically and economically feasible should be considered.</p>
<h4>B.6.6.3	Hazardous substances</h4>  <p>Licensee information should identify and describe:</p>
<ul>
<li>the methods used to estimate exposure, via various pathways, of the various human receptors to hazardous substances</li>
<li>the engineering controls to be applied to reduce the magnitude of each source</li>
</ul>   <p>When estimating the significance of the effects resulting from the project, information should account for the implementation of the proposed mitigation measures. The assessment results should demonstrate that the estimated exposure to hazardous substances of persons onsite during the normal operation will not exceed criteria specified by Health Canada, the CCME or other agencies acceptable to the CNSC.</p>   <p>Additional guidance is available from the U.S. Environmental Protection Agency, the World Health Organization and the Organization for Economic Cooperation and Development.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="AppB.6.7"></div>
<h3 id="AppB-6-7">B.6.7	Prediction of non-human biota dose</h3>  <p>Information in this area shall address non-human biota radiation dose assessment methods used to quantify effects for releases of nuclear substances. The scope shall include analysis of both the effects of chronic and acute exposures on terrestrial and aquatic organisms.</p>
<h4>B.6.7.1	Exposure information</h4>  <p>Explicit calculation of radiation doses to non-human biota shall be performed with recognized approaches and software tools. A high-level discussion of the relative merits of alternative approaches should be provided to put the presented approach in a current national and international context.</p>  <h5>Guidance</h5>  <p>An example of an acceptable approach is available from Environment Canada and Health Canada. Details of transfer parameters and their validation for site conditions should be documented. Site-specific data, and/or authoritative data sources, should support model structure and parameter choices. The choice of food chain transfer factors for VCs, which can vary by orders of magnitude in different environments for different species, should be noted.</p>  <p>Using a software tool is acceptable, if it addresses risks to VCs explicitly or by reasonable analogy. If the above-cited approach provided by Environment Canada and Health Canada is not used, the model structure and implementation should be described. A few representative examples of dose calculations starting with media and/or food concentrations should be documented, regardless of the approach taken.</p>
<h4>B.6.7.2	Selection of radiation benchmarks</h4>  <p>For controlled releases, doses shall be quantified and interpreted for the effects on life history parameters (morbidity, mortality, reproduction). If numerical benchmarks for chronic radiation effects are exceeded, effects shall be interpreted at multiple levels of organization in an ecological context relative to the potential for effects on individual biota, populations, communities and ecosystems.</p>   <p>Long-term consequences of accidental releases (e.g., as shown from studies of major nuclear accidents (Møller, A.P. et al. (2013) <em>Differences in effects of radiation on abundance of animals in Fukushima and Chernobyl. Ecological Indicators</em> 24: 75-81)) shall be described.</p>  <h5>Guidance</h5>  <p>For accidental releases, the notional range of 1–10 Gy should be used to describe the effects of acute exposure. Comparisons may only be possible for analogous organisms. Consideration should also be given to statistical interpretation of acute exposures.</p>   <p>As derivation of non-human biota dose benchmarks for generic use is still ongoing, alternative interpretations of radiation risk should be referenced and described. A documented detailed description would be appropriate only if more restrictive criteria could lead to a conclusion of likely and significant adverse effects.</p>   <p>Suitable approaches and their relationships to environmental protection goals are summarized in the following documents:</p>
<ul>
<li>Bradshaw C. et al. (2014), "Using an Ecosystem Approach to complement protection schemes based on organism-level endpoints," <em>Journal of Environmental Radioactivity</em> 136: 98-104.</li>
<li>International Commission on Radiological Protection, “Environmental Protection: Concept and Use of Reference Animals and Plants,” <em>Annals of the ICRP</em> Volume 38, Issue 4-6</li>
</ul>
<h4>B.6.7.3	Uncertainties</h4>  <p>The effects of using radiation weighting factors suggested by Environment Canada and Health Canada for calculating a "biota effective dose" from absorbed dose should be addressed (i.e., weighting factors of 40 for alpha particles, and 3 for tritium beta particles.)</p>  <p>Chronic exposures that are less than a "biota effective dose" screening criterion of 10 µGy/h require minimal interpretation or discussion.</p>  <p>A deterministic modelling approach is acceptable, providing that model structure and parameters are documented, reasonably conservative, and whenever possible, supported by site-specific data.</p>   <p>Examples of conservative choices are:</p>
<ul>
<li>selection of high transfer factor and diet exposure scenarios</li>
<li>use of dose coefficients that assume all energy is absorbed regardless of body size and geometry</li>
<li>setting radionuclide concentrations in some non-human biota equal to surrounding media and/or food items</li>
<li>assuming secular equilibrium for the presence of radioactive daughters, not adjusting for bioavailability for sediment/soil ingestion</li>
<li>calculating maximum possible doses to critical and sensitive organs (e.g., bone marrow) relative to average whole-body doses</li>
</ul>  <p>A probabilistic modelling approach is preferred, if there is ambiguity in the validity of dose estimates for site-specific conditions and/or VCs. For example, a probabilistic approach is appropriate when it is necessary to grossly extrapolate information for other areas or species, or when there is ambiguity in the protection of any threatened or endangered species, or species of concern.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="AppB.7"></div>
<h2 id="AppB-7">B.7	Facility Decommissioning as a Consideration for Site Evaluation</h2>  <p>As part of site evaluation, the licensee should demonstrate how facility decommissioning at the end of the project is being considered in the overall site evaluation case.</p>   <p>Site evaluation is affected by:</p>
<ul>
<li>ease by which the proposed facility can be decommissioned (i.e., the facility designed to be readily dismantled and disposed of in a fashion that minimizes environmental impacts)</li>
<li>proximity and transport considerations to recycling, waste storage and disposal infrastructure</li>
</ul>  <p>The following documents provide additional information for this area:</p>
<ul>
<li>(Guidance) NEA/OECD, <em>Decommissioning Considerations for New Nuclear Power Plants</em>, 2010, Nuclear Energy Agency, OECD. ISBN 987-92-64-99132-3 (available from http://www.oecd-nea.org/rwm/reports/2010)</li>
<li>(Guidance) NEA/OECD, <em>Applying Decommissioning Experience to the Design and Operation of New Nuclear Power Plants</em>, 2010, Nuclear Energy Agency, OECD. ISBN 987-92-64-99118-7 (available from http://www.oecd-nea.org/rwm/reports/2010)</li>
<li>(Operational experience) IAEA-TECDOC-1657: <em>Design Lessons Drawn from the Decommissioning of Nuclear Facilities</em>, International Atomic Energy Agency, Vienna, 2011, ISBN 978-92-0-113210-9.</li>
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
<div id="abbrev"></div>
<h2 id="abbrev">Abbreviations</h2>  <table className="table table-striped">  <tr>
<td>AOO</td>
<td>anticipated operational occurrence</td>  </tr>  <tr>
<td>BDBA</td>
<td>beyond-design-basis accident</td>  </tr>  <tr>
<td>CCME</td>
<td>Canadian Council of Ministers of the Environment</td>  </tr>  <tr>
<td>CEAA 2012</td>
<td><em>Canadian Environmental Assessment Act, 2012</em></td>  </tr>  <tr>
<td>CNSC</td>
<td>Canadian Nuclear Safety Commission</td>  </tr>  <tr>
<td>COPC</td>
<td>Contaminant of potential concern</td>  </tr>  <tr>
<td>CSA</td>
<td>CSA Group (formerly Canadian Standards Association)</td>  </tr>  <tr>
<td>DBA</td>
<td>design-basis accident</td>  </tr>  <tr>
<td>DFO</td>
<td>Fisheries and Oceans Canada</td>  </tr>  <tr>
<td>EA</td>
<td>environmental assessment</td>  </tr>  <tr>
<td>ESDC</td>
<td>Employment and Social Development Canada</td>  </tr>  <tr>
<td>ERA</td>
<td>environmental risk assessment</td>  </tr>  <tr>
<td>IAEA</td>
<td>International Atomic Energy Agency</td>  </tr>  <tr>
<td>NPP</td>
<td>Nuclear power plant</td>  </tr>  <tr>
<td>NSCA</td>
<td><em>Nuclear Safety and Control Act</em></td>  </tr>  <tr>
<td>NSRDR</td>
<td><em>Nuclear Substances and Radiation Devices Regulations</em></td>  </tr>  <tr>
<td>SSCs</td>
<td>structures, systems and components</td>  </tr>  <tr>
<td>SSTRA</td>
<td>site selection threat and risk assessment</td>  </tr>  <tr>
<td>VC</td>
<td>valued component</td>  </tr>  <tr>
<td>WHO</td>
<td>World Health Organization</td>  </tr>  </table>
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
<dt><strong>abiotic</strong></dt>
<dd>Refers to the non-living parts of the environment such as air, rock, soil, and water.</dd>
<dt><strong>accident management</strong></dt>
<dd><p>The taking of a set of actions during the evolution of a beyond-design-basis accident, in order to:
<ul>
<li>prevent the escalation of the event into a severe accident</li>
<li>mitigate the consequences of a severe accident</li>
<li>achieve a long-term safe stable state</li>
</ul></p></dd>
<dt><strong>anticipated operational occurrence</strong></dt>
<dd>An operational process deviating from normal operation that is expected to occur once or several times during the operating lifetime of the NPP but which, in view of the appropriate design provisions, does not cause any significant damage to items important to safety nor lead to accident conditions.</dd>
<dt><strong>applicant</strong></dt>
<dd>The organization that submits the application and will be authorized by a licence from the CNSC to prepare the site. The applicant will have the overall responsibility and the controlling and coordinating authority for overseeing the safe and satisfactory completion of all site preparation work. The applicant is usually the responsible organization that will oversee the construction and operation of the facility or the operating organization. Where this is not so, responsibility for the facility and its safety nevertheless continues to reside with the applicant, who must supervise the activities of an operating organization that operates the facility.</dd>
<dt><strong>biotic</strong></dt>
<dd>Refers to the living parts of the environment such as plants, animals and microorganisms.</dd>
<dt><strong>bounding envelope</strong></dt>
<dd>A combination of facility design parameters and site characteristics that establishes a set of limiting values for any facility design that could be proposed for the site and which allows for the assessment of environmental impacts and site evaluation. The design eventually selected must fit within the bounding envelope.</dd>
<dt><strong>brownfield land</strong></dt>
<dd>Abandoned or underused industrial and commercial sites available for re-use. Expansion or redevelopment of such a site may be complicated by real or perceived environmental contaminations.</dd>
<dt><strong>cliff-edge effect</strong></dt>
<dd>A small change of conditions which may lead to a catastrophic increase in the severity of consequences.<br />
Note: cliff-edge effects can be caused by changes in the characteristics of the environment, the event or changes in the plant response.</dd>
<dt><strong>consequential events</strong></dt>
<dd>Events that arise as a consequence of an initiating event.</dd>
<dt><strong>contaminants of potential concern (COPCs)</strong></dt>
<dd>Contaminants that could potentially be released to the environment as a result of the proposed project, and may cause a change to one or more of the environmental components (e.g., atmospheric, aquatic, terrestrial).</dd>
<dt><strong>design basis</strong></dt>
<dd>The range of conditions and events taken explicitly into account in the design of the facility, according to established criteria, such that the facility can withstand them without exceeding authorized limits by the planned operation of safety systems.</dd>
<dt><strong>design-basis accident (DBA)</strong></dt>
<dd>Accident conditions for which a nuclear facility is designed according to established design criteria, and for which the damage to the fuel and the release of radioactive material are kept within authorized limits.</dd>
<dt><strong>design-basis event</strong></dt>
<dd>An event that is taken into account in the design of structures, systems and components of a nuclear facility, according to established criteria, such that the facility can withstand it without exceeding authorized limits by the planned operation of safety systems.</dd>
<dt><strong>direct effect</strong></dt>
<dd>An effect in which the cause-effect relationship has no intermediary effects.</dd>
<dt><strong>environment</strong></dt>
<dd><p>The components of the earth, including:
<ul>
<li>land, water and air, including all layers of the atmosphere</li>
<li>all organic and inorganic matter and living organisms</li>
<li>the interacting natural systems that include components referred to above</li>
</ul></p></dd>
<dt><strong>environmental effect</strong></dt>
<dd>Any change that an activity, substance, equipment, or facility that is regulated by the CNSC may cause in the environment, including any effect of any such change: on health and socio-economic conditions; on physical and cultural heritage; on the current use of lands and resources for traditional purposes by Aboriginal persons; or on any structure, site, or thing that is of historical, archaeological, paleontological, or architectural significance.</dd>
<dt><strong>external event</strong></dt>
<dd>An event, unconnected with the operation of a facility or the conduct of an activity that could have an effect on the safety of the facility or activity.<br />
Note: Typical examples of external events for nuclear facilities include earthquakes, tornadoes, tsunamis and aircraft crashes</dd>
<dt><strong>external hazard</strong></dt>
<dd>An event of natural or human-induced origin, that originates outside the site and whose effects on the reactor facility are considered as potentially hazardous.< br />
Note: Such events are identified and selected for design purposes during the site evaluation process. In some cases hazards originating onsite but outside the safety related buildings can be treated as external hazards, if the characteristics of the generated loads are similar to those caused by hazards originating outside the site.</dd>
<dt><strong>geomorphological</strong></dt>
<dd>Pertaining to geological structures, the structural effects of folding and faulting of the earth&#39;s surface.</dd>
<dt><strong>graded approach</strong></dt>
<dd><p>A method or process by which elements such as the level of analysis, the depth of documentation and the scope of actions necessary to comply with requirements are commensurate with:
<ul>
<li>the relative risks to health, safety, security, the environment, and the implementation of international obligations to which Canada has agreed</li>
<li>the particular characteristics of a facility or activity</li>
</ul></p></dd>
<dt><strong>greyfield land</strong></dt>
<dd>Economically obsolescent, outdated, failing, moribund and/or underutilized real estate assets or land. Unlike brownfields, greyfields typically do not require remediation in order to unlock value to an investor.</dd>
<dt><strong>hazardous substance</strong></dt>
<dd>A substance, other than a nuclear substance, that is used or produced in the course of carrying on a licensed activity and that may pose a risk to the environment or the health and safety of persons.</dd>
<dt><strong>hydrogeology</strong></dt>
<dd>The branch of geology concerned with the properties and distribution of water.</dd>
<dt><strong>hydrostratigraphy</strong></dt>
<dd>The mapping of surface and sub-surface water flow pathways for characterization and remediation activities.</dd>
<dt><strong>indirect effect</strong></dt>
<dd>An effect in which the cause-effect relationship (e.g., between the project&#39;s impacts and the ultimate effect on a valued component) has intermediary effects.</dd>
<dt><strong>karstic formations</strong></dt>
<dd>Soluble bedrock, such as limestone, dolostone and evaporates that has been eroded and produces formations such as ridges, towers, fissures, sinkholes and caves.</dd>
<dt><strong>licensing basis</strong></dt>
<dd><p>For a regulated facility or activity, is a set of requirements and documents comprising:
<ul>
<li>regulatory requirements set out in the applicable laws and regulations</li>
<li>conditions and safety and control measures described in the facility&#39;s or activity&#39;s licence and the documents directly referenced in that licence</li>
<li>safety and control measures described in the licence application and the documents needed to support that licence application</li>
</ul></p></dd>
<dt><strong>malevolent act</strong></dt>
<dd>An illegal action or an action that is committed with the intent of causing wrongful harm.</dd>
<dt><strong>management arrangements</strong></dt>
<dd><p>The means by which an organization functions to achieve its objectives, including:
<ul>
<li>physical elements, such as people, buildings, work areas, equipment, tools, etc.</li>
<li>intangible elements, such as roles and responsibilities, knowledge, skills and behaviour of the people, cultural norms, agreements, understandings, and decision-making processes</li>
<li>the documentation that is essential to meeting the organization&#39;s objectives.</li>
</ul></p></dd>
<dt><strong>normal operation</strong></dt>
<dd>Operation of a nuclear power plant within specified operational limits and conditions including start-up, power operation, shutting down, shutdown, maintenance, testing and refuelling.</dd>
<dt><strong>nuclear power plant</strong></dt>
<dd>Any fission reactor installation constructed to generate electricity on a commercial scale. A nuclear power plant is a Class IA nuclear facility, as defined in the <em>Class I Nuclear Facilities Regulations</em>. Note for context in this document: Although the definition of a nuclear power plant is contained in section 1 of the Nuclear Security Regulations, the definition should be considered in context of the definition of small reactor facility with the understanding that a nuclear power plant might be constructed for a purpose other than generating electricity.</dd>
<dt><strong>nuclear power plant or small reactor facility lifetime</strong></dt>
<dd>The time between the granting of the licence to prepare site and the granting of a licence to abandon.</dd>
<dt><strong>operation</strong></dt>
<dd>All activities performed to achieve the purpose for which a facility was constructed. For a nuclear power plant, this includes maintenance, refuelling, in-service inspection and other associated activities.</dd>
<dt><strong>operational states</strong></dt>
<dd>States defined under normal operation and anticipated operational occurrences.</dd>
<dt><strong>overburden</strong></dt>
<dd>Any loose material that overlies bedrock.</dd>
<dt><strong>physiography</strong></dt>
<dd>The systematic classification and description of nature.</dd>
<dt><strong>protective zone</strong></dt>
<dd>The area beyond the exclusion zone that needs to be considered with respect to implementing emergency measures.</dd>
<dt><strong>protective zone</strong></dt>
<dd>The area beyond the exclusion zone that needs to be considered with respect to implementing emergency measures. This includes consideration of such matters as population distribution and density, land and water usage, roadways, and consequence and evacuation planning.</dd>
<dt><strong>reactor protection system</strong></dt>
<dd>System which monitors the operation of a reactor and which, on sensing an abnormal condition, automatically initiates actions to prevent an unsafe or potentially unsafe condition.</dd>
<dt><strong>region</strong></dt>
<dd>A specific area to be studied; the spatial characteristics of a "region" will vary for each hazard being studied. For example, the region being investigated for groundwater effects of an NPP or small reactor facility may be substantially different from the region being investigated for effects due to atmospheric releases.</dd>
<dt><strong>risk</strong></dt>
<dd>The product derived from the multiplication of the probability of a particular event by a parameter corresponding to the consequences of this event.</dd>
<dt><strong>safety case</strong></dt>
<dd>An integrated collection of arguments and evidence to demonstrate the safety of the facility and that all applicable regulatory requirements are met.</dd>
<dt><strong>safety function</strong></dt>
<dd>A specific purpose that needs to be accomplished for safety.</dd>
<dt><strong>seiche</strong></dt>
<dd>An oscillation of an enclosed or semi-enclosed body of water in response to an atmospheric, oceanographic or seismic disturbing force. In the Great Lakes area, a seiche could mean any sudden rise in the water of a harbor or a lake, whether or not it is oscillatory.</dd>
<dt><strong>severe accident</strong></dt>
<dd>An accident more severe than a design-basis accident and involving significant core degradation or significant fuel degradation in the spent fuel pool (also called irradiated fuel bay).</dd>
<dt><strong>site</strong></dt>
<dd>The area within the exclusion zone where the nuclear power plant or small reactor facility and all associated support structures and systems are located.</dd>
<dt><strong>site evaluation</strong></dt>
<dd>The processes and methodologies to determine whether the characteristics of the site and the surrounding region are appropriate for the construction, operation and future decommissioning of a facility regulated under the NSCA.</dd>
<dt><strong>site personnel</strong></dt>
<dd>All persons working in the site area of an authorized facility, either permanently or temporarily.</dd>
<dt><strong>site preparation</strong></dt>
<dd>The act of establishing basic infrastructure to support the future construction and operation of a facility regulated under the <em>Nuclear Safety and Control Act</em>.</dd>
<dt><strong>site preparation organization</strong></dt>
<dd>The responsible organization that will oversee all licensed activities encompassed by a licence to prepare site. This organization may be the applicant or an organization that will perform licensed activities on behalf of the applicant. The applicant must supervise the activities of the site preparation organization.</dd>
<dt><strong>siting</strong></dt>
<dd>The process of selecting a suitable site for a facility, including appropriate assessment and definition of the related design bases.</dd>
<dt><strong>small reactor facility</strong></dt>
<dd>Any fission reactor installation with a thermal power less than approximately 200 megawatt (MW) (or about 75 MW electrical output). A small reactor facility is a Class IA nuclear facility, as defined in the <em>Class I Nuclear Facilities Regulations</em>.</dd>
<dt><strong>station blackout</strong></dt>
<dd>A complete loss of alternating current (AC) power from offsite and onsite main generator, standby and emergency power sources. Note that it does not include failure of AC uninterruptible power supplies (UPS) and DC power supplies. It also does not include failure of alternate AC power. Note: The requirements for alternate AC power are provided in REGDOC-2.5.2, <em>Design of Reactor Facilities: Nuclear Power Plants</em>.</dd>
<dt><strong>storm surge</strong></dt>
<dd>Abnormal rise in sea level accompanying a hurricane or other intense storm.</dd>
<dt><strong>uprate</strong></dt>
<dd>The action of increasing existing nuclear power plant&#39;s or small reactor facility&#39;s output capacity. This term is generally applied to increasing thermal or electrical output through engineered means.</dd>
<dt><strong>valued component (VC)</strong></dt>
<dd><p>An environmental feature that may be affected by a project and that has been identified to be of concern by the proponent, government agencies, Aboriginal peoples or the public. The value of a component not only relates to its role in the ecosystem, but also to the value people place on it. For example, it may have been identified as having scientific, social, cultural, economic, historical, archaeological or aesthetic importance.</p>
<p>Note: VCs are selected from the abiotic and biotic information collected as part of the baseline characterization. They may be surrogate organisms rather than actual plant or animal species (for example, a theoretical benthic feeding fish species), communities (for example, a benthic macroinvertebrate community) or specific species (for example, an endangered species), but may also include significant ecological features of the environment, such as wetlands.</p></dd>  </dl>
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
<h2 id="ref">References</h2>  <p>Note: References to specific draft documents will be deleted in the document and removed from the reference list if they have not yet been published upon publication of this document.</p>  <ol>
<li>Canadian Nuclear Safety Commission (CNSC), REGDOC-2.5.2, <em>Design of Reactor Facilities: Nuclear Power Plants</em>.</li>
<li>CNSC, RD-367, <em>Design of Small Reactor Facilities</em>.</li>
<li>CNSC, RD/GD-99.3, <em>Requirements and Guidance for Public Information and Disclosure</em>.</li>
<li>CNSC, REGDOC-3.2.2, <em>Public and Aboriginal Engagement: Aboriginal Consultation</em>, (draft).</li>
<li>CNSC, REGDOC-2.9.1, <em>Environmental Assessment</em>, (draft).</li>
<li>CNSC, RD/GD-369, <em>Licence Application Guide, Licence to Construct a Nuclear Power Plant</em>. 2011.</li>
<li>CNSC, REGDOC-2.10.1, <em>Nuclear Emergency Preparedness and Response</em>.</li>
<li>CNSC, REGDOC-2.9.1, <em>Environmental Protection: Environmental Policy, Assessments and Protection Measures</em> (draft).</li>
<li>CNSC, P-223, <em>Protection of the Environmen</em>t.</li>
<li>CNSC, G-129, <em>Keeping Radiation Exposures As Low As Reasonably Achievable (ALARA)</em> (Revision 1).</li>
<li>CNSC, G-219, <em>Decommissioning Planning for Licensed Activities</em>.</li>
<li>CNSC, G-228, <em>Developing and Using Action Levels</em>.</li>
<li>CNSC, G-206, <em>Financial Guarantees for the Decommissioning of Licensed Activities</em>.</li>
<li>CNSC, REGDOC-2.13.2, <em>Import and Export</em>, (draft).</li>
<li>CNSC, G-274, <em>Security Programs for Category I or II Nuclear Materials or Certain Nuclear Facilities</em>, 2003.</li>
<li>CNSC, REGDOC-2.12.2, <em>Site Access Security Clearance</em>.</li>
<li>CNSC, RD-321, <em>Criteria for Physical Protection Systems and Devices at High-Security Sites</em>.</li>
<li>CNSC, RD-361, <em>Criteria for Explosive Substance Detection, X-ray Imaging, and Metal Detection Devices at High-Security Sites</em>.</li>
<li>CNSC, RD-363, <em>Nuclear Security Officer Medical, Physical and Psychological Fitness Training</em>.</li>
<li>CNSC, REGDOC-3.5.1, <em>Licensing Process for Class I Nuclear Facilities and Uranium Mines and Mills</em>.</li>
<li>CNSC, RD-327, <em>Nuclear Criticality Safety</em>.</li>
<li>CNSC, <em>Codification of Current Practice: Canadian Nuclear Safety Commission (CNSC) Commitment to Aboriginal Consultation</em>.</li>
<li>CSA Group, N286-05, <em>Management System Requirements for Nuclear Power Plants</em>, Toronto, 2005.</li>
<li>CSA Group, N286-12, <em>Management system requirements for nuclear facilities</em>, Toronto, 2012.</li>
<li>CSA Group, CAN/CSA ISO 14001, <em>Environmental Management Systems &ndash; Requirements with Guidance for Use</em>.</li>
<li>CSA Group, N288.1-14, <em>Guidelines for calculating derived release limits for radioactive material in airborne and liquid effluents for normal operation of nuclear facilities</em>.</li>
<li>CSA Group, N288.2-14, <em>Guidelines for calculating radiation doses to the public from a release of airborne radioactive material under hypothetical accident conditions in nuclear reactors</em>.</li>
<li>CSA Group, N288.4-10, <em>Environmental monitoring programs and Class I nuclear facilities and uranium mines and mills</em>.</li>
<li>CSA Group, N288.5-11, <em>Effluent monitoring program at Class I nuclear facilities and uranium mines and mills</em>.</li>
<li>CSA Group, N288.6-12, <em>Environmental risk assessments at class 1 nuclear facilities and uranium mines and mills</em>.</li>
<li>CSA Group, N289.1, <em>General requirements for seismic design and qualification of nuclear power plants</em>.</li>
<li>CSA Group, N289.2, <em>Ground motion determination for seismic qualification of nuclear power plants</em>.</li>
<li>CSA Group, N289.3, <em>Design procedures for seismic qualification of nuclear power plants</em>.</li>
<li>CSA Group, N293, <em>Fire protection for nuclear power plants</em>.</li>
<li>CSA Group, N294, <em>Decommissioning of facilities containing nuclear substances</em>.</li>
<li><em>Canadian Foundation Engineering Manual</em>, 2006.</li>
<li>Environment Canada, EPS 1/PG/2, <em>Environmental Codes of Practice for Steam Electric Power Generation: Siting Phase</em>, 1987.</li>
<li>Environment Canada, <em>Inspector&#39;s Field Sampling Manual: A Sampling Manual and Reference Guide for Environment Canada Inspectors</em>, 2005.</li>
<li>Environment Canada, <a href="http://climate.weather.gc.ca/climate_normals/index_e.html">Canadian climate normals</a>.</li>
<li>Environment Canada, <em>Environmental Codes of Practice for Steam Electric Power Generation &ndash; Construction Phase 1989</em>, 1989.</li>
<li>Cheminfo Services Inc, Prepared for Environment Canada, <em>Best Practices for the Reduction of Air Emission from Construction and Demolition Activities</em>, 2005.</li>
<li>Environment Canada, <em>A Framework for Ecological Risk Assessment at Contaminated Sites in Canada: Review and Recommendations</em>.</li>
<li>Environment Canada and Health Canada, <em>CEPA Priority Substances List Assessment Report: Releases of Radionuclides from Nuclear Facilities (Impact on Non-human Biota)</em>.</li>
<li>Environment Canada and Parks Canada, <em>Addressing Species at Risk Act Considerations Under the Canadian Environmental Assessment Act for Species Under the Responsibility of the Minister Responsible for Environment Canada and Parks Canada</em>, 2010.</li>
<li>Canadian Council of Ministers of the Environment (CCME), <em>Canadian Environmental Quality Guidelines</em>.</li>
<li>CCME, <em>Soil quality guidelines</em>.</li>
<li>CCME, <em>Air quality objectives and Canada-wide standards</em>.</li>
<li>CCME, <em>Framework for Ecological Risk Assessment</em>.</li>
<li>Ontario Ministry of the Environment, <em>Soil Quality Criteria, Air Quality Criteria and Upper Limit of Normal Contaminant Guidelines for Vegetation</em>.</li>
<li>Ontario Ministry of the Environment, <em>Operations Manual for Air Quality Monitoring in Ontario</em>.</li>
<li>Ontario Ministry of the Environment, <em>Air Dispersion Modelling Guideline for Ontario</em>.</li>
<li>Ontario Ministry of the Environment, <em>Guidelines for Identifying, Assessing and Managing Contaminated Sediments in Ontario: An integrated approach</em>.</li>
<li>Canadian Environmental Assessment Agency, <em>Procedural Guide: Incorporating Climate Change Considerations in Environmental Assessment: General Guidance for Practitioners</em>, 2003.</li>
<li>Canadian Environmental Assessment Agency, <em>Operational Policy Statement: Assessing Cumulative Environmental Effects under the Canadian Environmental Assessment Act</em>.</li>
<li>Fisheries and Oceans Canada (DFO) <em>Policy for Management of Fish Habitat</em>.</li>
<li>M. L. Jones, R.G. Randall, D. Hayes, W. Dunlop, J. Imhof, G. Lacroix, and NJR. Ward, 1996. <em>Assessing the ecological effects of habitat change: moving beyond productive capacity</em>. Canadian Journal Fisheries Aquatic Sciences 53 (Suppl. 1):446-457.</li>
<li>U.S. Fish and Wildlife Service. FWS/OBS-82/10.84. 12pp, Marcus, M.D., W.A. Hubert, and S.H. Anderson. 1984. <em>Habitat Suitability Index Models: Lake trout (Exclusive of the Great Lakes)</em>.</li>
<li>DFO, <em>Guidelines for the Use of Explosives in or Near Canadian Fisheries Water</em>.</li>
<li>Labour Canada, <em>Canada Labour Code, Part II</em>.</li>
<li>Treasury Board Secretariat (Canada), <em>Treasury Board Policy on Government Security &ndash; Personnel Security Standard</em>.</li>
<li>Health Canada, Document H46-2/03-326E, <em>Canadian Guidelines for Intervention during a Nuclear Emergency</em>, 2003.</li>
<li>Health Canada, <em>Compendium of Canadian Human Exposure factors for Risk Assessment</em>, Richardson, 1997.</li>
<li>Canadian Dam Association, <em>Dam Safety Guidelines</em>, 2007.</li>
<li>International Atomic Energy Agency (IAEA), IAEA Safety Series No. GS-R-3, <em>The Management System for Facilities and Activities Safety Requirements</em>.</li>
<li>IAEA, IAEA Safety Guide No WS-G-2.3 <em>Regulatory Control of Radioactive Discharges to the Environment</em>.</li>
<li>IAEA, IAEA Nuclear Security Series 17, <em>Computer Security at Nuclear Facilities</em>.</li>
<li>IAEA, IAEA Safety Standards Series No. NS-R-3, <em>Site Evaluation for Nuclear Installations</em>, Vienna, 2003.</li>
<li>IAEA, IAEA Safety Standards Series No. NS-G-3.2, <em>Dispersion of Radioactive Material in Air and Water and Consideration of Population Distribution in Site Evaluation for Nuclear Power Plants</em>, Vienna, 2002.</li>
<li>IAEA, IAEA Safety Standards Series No. SSG-9, <em>Seismic Hazards in Site Evaluation for Nuclear Installations</em>.</li>
<li>IAEA, IAEA Safety Standards Series No. NS-G-1.5, <em>External Events Excluding Earthquakes in the Design of Nuclear Power Plants</em>, Vienna, 2003.</li>
<li>IAEA, IAEA Safety Standards, Series No. NS-G-3.6, <em>Geotechnical Aspects of Site Evaluation and Foundations for Nuclear Power Plants</em>, Vienna, 2005.</li>
<li>IAEA, IAEA Specific Safety Guide No. SSG-18, <em>Meteorological and Hydrological Hazards in Site Evaluation for Nuclear Installations</em>, 2011.</li>
<li>IAEA, IAEA Safety Standards Series No. NS-G-3.1, <em>External Human Induced Events in Site Evaluation for Nuclear Power Plants</em>, Vienna, 2002.</li>
<li>IAEA, IAEA Safety Series No. GS-G-3.5, <em>The Management System for Nuclear Installations Safety Guide</em>.</li>
<li>IAEA, IAEA Safety Guide Safety Standards Series RS-G-1.8, <em>Environmental and Source Monitoring for Purposes of Radiation Protection</em>.</li>
<li>IAEA, IAEA Safety Standards Series No. GS-R-2, <em>Preparedness and Response to Nuclear or Radiological Emergency, Safety Requirements</em>, 2002.</li>
<li>(Operational Experience) IAEA-TECDOC-1657: <em>Design Lessons Drawn from the Decommissioning of Nuclear Facilities</em>, International Atomic Energy Agency, Vienna, 2011, ISBN 978-92-0-113210-9.</li>
<li>ISO, ISO/IEC 17799:2005, <em>Information Technology &ndash; Security Techniques &ndash; Code of Practice for Information Security Management</em>.</li>
<li>International Commission on Radiological Protection, (ICRP), ICRP 68, <em>Dose Coefficients for Intakes of Radionuclides by Workers</em>.</li>
<li>ICRP, ICRP 72, <em>Age-dependent Doses to the Members of the Public from Intake of Radionuclides Part 5, Compilation of Ingestion and Inhalation Coefficients</em></li>
<li>Nuclear Energy Institute, NEI 04-04, <em>Cyber Security Program for Power Reactors</em>.</li>
<li>United States Nuclear Regulatory Commission (U.S.NRC) NUREG/CR-7046, PNNL-20091, <em>Design-Basis Flood Estimation for Site Characterization at Nuclear Power Plants in the United States of America</em>, November 2011.</li>
<li>U.S.NRC, NUREG/CR-7004, <em>Technical Basis for Regulatory Guidance on Design-Basis Hurricane-Borne Missile Speeds for Nuclear Power Plants</em>, November 2011.</li>
<li>U.S.NRC, NUREG/CR-7005, <em>Technical Basis for Regulatory Guidance on Design-Basis Hurricane Wind Speeds for Nuclear Power Plants</em>, November 2011.</li>
<li>United States NRC Regulations, 10 CFR, Appendix A to Part 100 &ndash; <em>Seismic and Geologic Siting Criteria for Nuclear Power Plants</em>.</li>
<li>United States, EPA QA/G-5S, <em>Guidance on Choosing a Sampling Design for Environmental Data Collection for use in Developing a Quality Assurance Project Plan</em>, December 2002.</li>
<li>United States, EPA-540-R-05-012, <em>Contaminated Sediment Remediation Guidance for Hazardous Waste Sites</em>.</li>
<li>United States, EPA Federal Guidance Report no.12, <em>External Exposure to radionuclides in air, water, and soil</em>.</li>
<li>ICRP, <em>Environmental Protection: Concept and Use of Reference Animals and Plants</em>, Annals of the ICRP Volume 38, Issue 4-6.</li>
<li>(Guidance) NEA/OECD document, <a href="http://www.oecd-nea.org/rwm/reports/2010/nea6833-decommissioning-considerations.pdf"><em>Decommissioning Considerations for New Nuclear Power Plants</em></a>, 2010, Nuclear Energy Agency, OECD. ISBN 987-92-64-99132-3.</li>
<li>(Guidance) NEA/OECD document, <a href="http://www.oecd-nea.org/rwm/reports/2010/nea6924-applying-decommissioning.pdf"><em>Applying Decommissioning Experience to the Design and Operation of New Nuclear Power Plants</em></a>, 2010, Nuclear Energy Agency, OECD. ISBN 987-92-64-99118-7.</li>
<li>Electric Power Research Institute, <em>Impingement Abundance Monitoring Technical Support Document</em>, Final Report 1008470, Palo Alto, California, 2004.</li>
<li>Electric Power Research Institute, <em>Entrainment Abundance Monitoring Technical Support Document</em>, Final Report 1011280, 2005.</li>
<li>Dey, W.P., <em>Defining and Assessing Adverse Environmental Impact from Power Plant Impingement and Entrainment of Aquatic Organisms</em>, pages 247-263, <em>Use of Equivalent Loss Models Under Section 316(b) of the Clean Water Act</em>. Lisse, Netherlands, 2003.</li>
<li>Bradshaw C. et al. (2014) <em>Using an Ecosystem Approach to complement protection schemes based on organism-level endpoints</em>. Journal of Environmental Radioactivity 136: 98-104.</li>
<li>Møller, A.P. et al. (2013) <em>Differences in effects of radiation on abundance of animals in Fukushima and Chernobyl</em>. Ecological Indicators 24: 75-81.</li>
<li>National Fire Protection Association (NFPA), NFPA 1141, <em>Standard for Fire Protection Infrastructure for Land Development in Suburban and Rural Areas</em>, 2008.</li>
<li>NFPA, NFPA 1142, <em>Standard on Water Supplies for Suburban and Rural Fire Fighting</em>, 2007.</li>
<li>NFPA, NFPA 1143, <em>Standard for Wildland Fire Management</em>, 2008.</li>
<li>NFPA, NFPA 1144, <em>Standard for Reducing Structure Ignition Hazards from Wildland Fire</em>, 2008.</li>  </ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="addinfo"></div>
<h2 id="addinfo">Additional Information</h2>  <ol>
<li><em>Nuclear Safety and Control Ac</em>t, S.C.,1997, c.9</li>
<li><em>Class I Nuclear Facilities Regulations</em>, SOR/2000-204</li>
<li>CNSC INFO-0756, Licensing Process for New Nuclear Power Plants in Canada</li>
<li>CNSC RD-360, <em>Life Management of Nuclear Power Plants</em></li>
<li>Aboriginal Affairs and Northern Development Canada, <em>Aboriginal Consultation and Accommodation &ndash; Interim Guidelines for Federal Officials to Fulfill the Legal Duty to Consult</em></li>
<li>Aboriginal Affairs and Northern Development Canada, <em>Aboriginal Workforce Participant Initiative &ndash; Establishing Relationships with Aboriginal Communities Checklist</em></li>
<li>Aboriginal Affairs and Northern Development Canada, <em>Aboriginal Workforce Participant Initiative &ndash; Employer Toolkit</em></li>
<li>Environment Canada and Health Canada, <em>CEPA Second Priority Substances List (PSL2) Assessment Report: Releases of Radionuclides from Nuclear Facilities (Impact on Non-human Biota)</em></li>
<li>Canadian Environmental Assessment Agency, <em>Technical Guidance for Assessing Cumulative Environmental Effects under the Canadian Environmental Assessment Act</em></li>
<li>Health Canada, <em>National Ambient Air Quality Objectives</em></li>
<li>United States Enironmental Protection Agency, <em>Methods Used to Evaluate I &E, Chapter A5 in Case Study Analysis for the Proposed Section 316(b) Phase II Existing Facilities Rule</em>, Report No. EPA-821-R-02-002, Washington, 2002</li>
<li>Swedish Radiation Protection Authority, PROTECT (2008a) <em>Environmental Protection, Radioactive Substances, Protection of the Environment from Ionising Radiation in a Regulatory Context</em>, EC Euratom 6th Framework programme: Contract No. FP6-036425</li>
<li>Canadian Association of Petroleum Producers, <em>Industry Best Practices Guide: Developing Effective Working Relationships with Aboriginal Communities</em></li>
<li>Prospectors and Developers Association of Canada, <em>Mining Information Kit for Aboriginal Communities</em></li>
<li>INFCIRC/164, <em>Comprehensive Safeguards Agreement</em> (often referred to as the Canada-IAEA Safeguards Agreement), 1972</li>
<li>INFCIRC/164 Add.1, <em>The Protocol Additional to the Comprehensive Safeguards Agreement</em>, (commonly termed the additional protocol or AP), 2000</li>  </ol>  <p>The following IAEA publications provide guidance on aspects of this regulatory document:</p>
<ol start="17">
<li>IAEA Safety Series No. 110, <em>The Safety of Nuclear Installations</em>, Vienna, 1993</li>
<li>IAEA-TECDOC-1487, <em>Advanced Nuclear Plant design options to cope with external events</em>, IAEA, Austria, February 2006, ISBN 92–0–100506–7</li>
</ol>
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
</div>  <div className="clear"></div>  
                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }