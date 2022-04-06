import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "en",
                pageTitle: "REGDOC-1.2.1, Guidance on Deep Geological Repository Site Characterization", 
                dateModified: "2018-10-19",
                langToggleUrl: "/fra/acts-and-regulations/consultation/comment/regdoc1-2-1"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<h2>Preface</h2>
<p>This regulatory document is part  of the CNSC&rsquo;s regulated facilities and activities series of regulatory documents. The full list of regulatory document series is included at the end of  this document and can also be found on the <a href="http://www.nuclearsafety.gc.ca/eng/acts-and-regulations/regulatory-documents/index">CNSC&rsquo;s  website</a>. </p>
<p>Regulatory document REGDOC-1.2.1, <em>Guidance on Deep Geological Repository Site  Characterization,</em> sets out guidance for the site characterization stage of  the siting process for a deep geological repository (DGR) facility for  radioactive waste, as information gathered for site characterization may be  used in subsequent licence applications.</p>
<p>This document supersedes R-72, <em>Geological Considerations in Siting a  Repository for Underground Disposal of High-Level Radioactive Waste</em>, published  in September 1987.</p><div className="col-md-12 module-table-contents">
<h2>Table of Contents</h2>
<ul>
<li><a href="#sec1">1. Introduction</a>
<ul>
<li><a href="#sec1-1">1.1 Purpose</a></li>
<li><a href="#sec1-2">1.2 Scope</a></li>
<li><a href="#sec1-3">1.3 Relevant legislation</a></li>
<li><a href="#sec1-4">1.4 Early regulatory involvement</a></li>
</ul>
</li>
<li><a href="#sec2">2. Overview of Siting Process</a>
<ul>
<li><a href="#sec2-1">2.1 Conceptual and planning stage</a></li>
<li><a href="#sec2-2">2.2 Survey stage</a></li>
<li><a href="#sec2-3">2.3 Site characterization stage</a></li>
<li><a href="#sec2-4">2.4	Site confirmation stage</a></li>
</ul>
</li>
<li><a href="#sec3">3. Site Characterization Program</a>
<ul>
<li><a href="#sec3-1">3.1	Site characteristics I: geological environment</a>
<ul>
<li><a href="#sec3-2">3.1.1Geological setting</a></li>
<li><a href="#sec3-3">3.1.2	Hydrogeological setting</a> </li>
<li><a href="#sec3-4">3.1.3	Geochemistry</a> </li>
<li><a href="#sec3-5">3.1.4 Geological stability</a> </li>
<li><a href="#sec3-6">3.1.5 Geomechanical characteristics</a></li>
</ul>
</li>
<li><a href="#sec3-7">3.2 Site characteristics II: surface environment</a>
<ul>
<li><a href="#sec3-8">3.2.1 Climate</a></li>
<li><a href="#sec3-9">3.2.2 Aquatic and terrestrial environment</a></li>
<li><a href="#sec3-10">3.2.3 Topography, hydrology and flooding</a></li>
<li><a href="#sec3-11">3.2.4 Geomorphology characterization</a></li>
<li><a href="#sec3-12">3.2.5 Geotechnical characterization of surficial deposits</a></li>
</ul>
</li>
</ul>
<li><a href="#sec4">4. Human Activities and Land Use</a>
<li><a href="#sec5">5. Data Acquisition and Verification Activities</a>
<ul>
<li><a href="#sec5-1">5.1 Management system</a></li>
<li><a href="#sec5-2">5.2 Data management program</a></li>
<li><a href="#sec5-3">5.3 Sampling and testing procedures</a></li>
<li><a href="#sec5-4">5.4 Integration and interpretation</a></li>
</ul>
</li>
<li><a href="#sec6">6. Facilities for Verification and Characteristic Activities</a>
</li>  <li><a href="#glossary">Glossary</a></li>
<li><a href="#fnb">References</a></li>
</ul>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="1"></div>
<h2 id="sec1">1. Introduction</h2>  	<p>A deep geological repository (DGR) is an engineered  facility where radioactive waste is emplaced in a deep, stable geological  formation (usually several hundred metres or more below the surface) designed  to isolate and contain radioactive waste to provide the long-term isolation of  nuclear substances from the biosphere <sup><a  id="fnb1a-ref" className="fn-lnk ui-link" href="#fnb1"><span className="wb-inv">Footnote </span>1</a></sup>. After closure there is no intention  to retrieve or transfer the radioactive waste<sup><a href="#fnb2" id="fnb2a-ref" className="fn-lnk ui-link"><span className="wb-inv">Footnote </span>2</a></sup>.</p>
<p>Site characterization involves detailed technical site  investigations undertaken to increase the state of knowledge about a particular  site. Site characterization involves desktop and both regional and site-specific  investigations to identify and provide an understanding of particular features  and processes. These processes are typically studied in different disciplines  (hydrogeology, rock mechanics, geochemistry, etc.) but should be understood in  an integrated manner.</p>
<p>The data gathered in the preliminary stages of the site  characterization may be used to support the initial Canadian Nuclear Safety  Commission (CNSC) licence application (i.e., licence to prepare site or a  combined licence to prepare site and construct) and form part of the safety  case.</p>
<p>Other regulators will have jurisdiction over activities  carried out for site characterization before a site is selected and before an  applicant engages in activities that would require a licence from the CNSC. It  is recommended that site characterization activities be conducted in  consultation with the relevant regulatory bodies early to ensure that  regulatory expectations, permitting, licensing or other requirements are  clearly understood, and that potential issues associated with data acceptance  are identified and mitigated.</p>
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
<h3 id="sec1-1">1.1 Purpose</h3>
<p>This regulatory document sets out the CNSC&rsquo;s guidance for  licence applicants on technical aspects that may be considered during the site  characterization stage of the siting process for a DGR facility for radioactive  waste. </p>
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
<h3 id="sec1-2">1.2 Scope</h3>
<p>REGDOC-1.2.1 provides guidance for a DGR&rsquo;s site  characterization process. The guidance in this document focuses on technical matters.</p>  <p>The CNSC  uses a comprehensive licensing system that covers the lifecycle of a DGR &#45; from  site preparation to construction, operation and decommissioning (closure and  post-closure), and finally, release from the CNSC licence. This approach  requires a licensing authorization at each phase, although the site preparation  and site construction licence may be combined. </p>  <p>It is  important to note that while in general, site characterization activities will  begin before the CNSC&rsquo;s regulatory process, the methods and processes that are  used and the data that are collected may form part of future licence  applications and will be formally reviewed for quality and adequacy.</p>  <p>While this document does not provide  guidance on finding or selecting a site, the site characterization stage will  be carried out at a level sufficient to confirm the technical suitability of a  site. </p>  <p>In this document,  the pre-closure period of a DGR encompasses site preparation, construction,  operation and decommissioning. The post-closure or long-term period is the  period that follows the closure of a DGR facility, with a time frame of tens of  thousands of years or more<sup><a id="fnb3a-ref" href="#fnb3" className="fn-lnk ui-link"><span className="wb-inv">Footnote </span>3</a></sup>.</p>  <p>Note that this document does  not: </p>  <ul>  	<li>apply to surface and near-surface waste management facilities, including waste from uranium mines and mills</li>  	<li>provide guidance on long-term  waste management strategies </li>  	</ul>
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
<h3 id="sec1-3">1.3 Relevant legislation</h3>
<p>The <em>Nuclear Safety  and Control Act</em> (NSCA) applies once site preparation activities begin.  Accordingly, it is important to be aware of legislation other than the NSCA,  such as provincial laws, that might apply to site characterization activity. Facilities  for the long-term management of radioactive waste, such as a DGR, are generally  licensed under <em>Class I Nuclear Facilities  Regulations</em>. There is no regulatory process identified in this regulation  for selecting a site. The regulatory process is not triggered until an  application for a licence to prepare site or combined licence to  prepare/construct site is received, which in turn would trigger a federal  impact assessment. Note also that the <em>Nuclear  Fuel Waste Act</em> is authoritative for Canada&rsquo;s nuclear fuel waste DGR.</p>
<p>A licence applicant may refer to licence application  requirements in the <em>Class I Nuclear  Facilities Regulations</em> to inform site characterization activities. For  example, for a licence to prepare a site, paragraph 4(a) requires the applicant  to provide "a description of the site evaluation process and the investigations  and preparatory work that have been done and will be done on the site and in  the surrounding area &rdquo;and to&rdquo;&#46;&#46;&#46; determine the environmental baseline characteristics of the site and the surrounding  area". </p>
<p>Accordingly, regulatory approvals are not required for  site selection, and some site investigation activities will be performed prior  to licensing. The "site evaluation process and the investigations and  preparatory work that have been done" refer to pre-licensing site  characterization activities that are needed to collect enough site-specific  data to design and assess the facility and to prepare the required  documentation for environmental assessment and/or licensing. The extent of these  pre-licensing activities should be discussed with the regulator to avoid initiating  activities that require a licence. The purpose for collecting the site-specific  data will determine the requirements for data quantity and quality that the site  characterization plan should meet. </p>
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
<h3 id="sec1-4">1.4	Early regulatory involvement</h3>
<p>Early consultation with the regulator for clarity with  respect to regulatory expectations and requirements is recommended. Included in  this process is the identification of site characterization activities that may  not require a licence from the CNSC.</p>
<p>The extent of consultation between the applicant and the regulator  should be balanced in order to preserve the independence of the regulator while  providing adequate guidance to the applicant. It is recommended that a service  agreement be established between the regulator and the applicant. </p>
<p>As part of the service agreement, it is recommended that  the regulator have the opportunity to conduct informal inspections and  assessments&#45; for example, to ensure that a licence applicant&rsquo;s management  system is commensurate with the scope of the project, as laid out in CSA  standard N286-12, <em>Management system  requirements for nuclear facilities</em>. For instance, assessments at this  stage could investigate whether management system programs, methods of data  collection and contractor procurement are in line with CNSC requirements.</p>
<p>It is further recommended that the applicant keep the CNSC  apprised of key milestones and activities in regard to site characterization  activities. Applicants are encouraged to inform the regulator early of  potential requests for pre-licensing reviews by the CNSC, such as the site  characterization program.</p>
<p>The CNSC may choose to observe activities or request information. Prior  to a formal application being submitted, CNSC staff may also request data,  results and materials from the site characterization activities in order, for  example, for the CNSC to conduct independent research</p>
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
<h2 id="sec2">2. Overview of Siting Process</h2>  <p>The objective of the siting process, which includes site  characterization, should be to select a site that, along with a proper design  and engineered barriers, has properties that provide adequate containment and  isolation of radionuclides and hazardous substances from the accessible environment  for the desired period of time, usually the assessment timeframe<sup><a  id="fnb4a-ref" href="#fnb4" className="fn-lnk ui-link"><span className="wb-inv">Footnote </span>4</a></sup>.  </p>  <p>The process for selecting a site and the decision to  choose a particular site are the responsibility of the licence applicant.</p>
<p>The data gathered in the preliminary stages of the siting  process may form part of the initial licence application and part of the safety  case. Information gathered at this stage may be used as baseline information to  support the demonstration of safety throughout the lifecycle of the DGR  facility. </p>  <p>The International Atomic Energy Agency (IAEA) identifies  four stages to the siting process for a DGR<sup><a  id="fnb4b-ref" href="#fnb4" className="fn-lnk ui-link"><span className="wb-inv">Footnote </span>4</a></sup>:</p>  <ol>
<li>a conceptual and planning stage: desktop data  compilation and interpretation</li>
<li>a survey stage: regional mapping and screening</li>
<li>a site characterization stage </li>
<li>a site confirmation stage  </li>  </ol>  <p>Site characterization, the focus of this regulatory  document, begins at the earliest stage of the investigation of a site and is  expected to become more intensive as the siting process progresses through to  confirmation of the site<sup><a  id="fnb4c-ref" href="#fnb4" className="fn-lnk ui-link"><span className="wb-inv">Footnote </span>4</a></sup>. </p>  <p>Note: the transition from one stage to another is somewhat  arbitrary owing to the inevitable overlap in siting activities. </p>  <p>Following confirmation of the site and the initial phases  of licensing, characterization activities are normally expected to continue  into the site preparation, construction and operational phases. The  characterization activities continue through these phases in order to  contribute further to an adequate baseline for future monitoring, as well as to  help confirm assumptions made in earlier safety cases and reduce any residual  uncertainties in the safety case<sup><a  id="fnb4d-ref" href="#fnb4" className="fn-lnk ui-link"><span className="wb-inv">Footnote </span>4</a></sup>. Those characterization activities that  continue until closure of the DGR are usually defined in a geoscience  verification program. The safety case and associated safety assessment should  identify uncertainties and assess the robustness of the facility so that the  geoscience verification program can be developed and a research program designed  and executed to address these uncertainties throughout the lifecycle of the  DGR.  </p>
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
<h3 id="sec2-1">2.1 Conceptual and planning stage</h3>
<p>The goal of the conceptual and planning stage is the  development of an overall plan for the site selection process and includes the  identification of desirable features as a basis for the second stage, as well  as the conceptualization of a generic facility design based on the type, volume  and radionuclide content of the radioactive waste to be managed (for guidance, see  REGDOC-2.11.1, Waste Management, Volume II: <em>Assessing  the Long Term Safety of Radioactive Waste Management</em> <sup><a id="fnb5a-ref" href="#fnb5" className="fn-lnk ui-link"><span className="wb-inv">Footnote </span>5</a></sup> and CSA N292.0-14, <em>General principles for the management of  radioactive waste and irradiated fuel</em>). Site screening criteria should be  developed for selecting or rejecting potential sites, and eventually, a  preferred site.</p>
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
<h3 id="sec2-2">2.2	Survey stage</h3>
<p>The survey stage involves the screening of identified potential  siting areas and regional geological mapping and other regional scale  characterization activities (e.g., airborne geophysical surveys). Other  constraints that should be accounted for include engineering concerns and  environmental constraints. The goal of activities carried out at the surveying  stage is to inform the screening process, which may narrow down potential  sites. </p>
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
<h3 id="sec2-3">2.3 Site characterization stage</h3>
<p>The site characterization stage involves extensive field  work and laboratory study, usually to gather site-specific data on a range of site  conditions, including a site&rsquo;s geology, geochemistry and geomechanical suitability. </p>  <p>Early-stage site characterization activities involve  scientific studies and desktop data compilation work, and include activities  such as geophysical surveys and borehole drilling, though such activities would  stop short of breaking the ground to excavate a shaft.</p>  <p>Preliminary safety assessments should be completed at this  time to test the site&rsquo;s suitability to host a DGR facility, as well as to guide  further characterization and confirmation activities. These safety assessments  may also form part of a comparative analysis of the remaining site (if  applicable), which would lead to the next stage of site confirmation, in which detailed,  extensive work would be focused on one site.</p>
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
<h3 id="sec2-4">2.4 Site confirmation stage</h3>  <p>Site confirmation generally consists of detailed,  extensive field and laboratory studies at the selected site. It is at this  stage that evaluation of whether sinking a shaft or construction of an underground  research facility (URF) may be necessary to obtain more information. </p>  <p>A final safety assessment should be prepared based on all  of the data gathered during prior siting stages and in combination with  geological and hydrogeological information, and information about other  barriers such as the engineered barrier system, canister design and radioactive  waste characteristics. This information may be used to develop the safety case  that will be submitted in the initial licence application (i.e., licence to  prepare site or combined licence to prepare site and construct).</p>
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
<h2 id="sec3">3. Site Characterization Program</h2>
<p>As part of the siting process, the licence applicant  should prepare and implement a program for site characterization for the  proposed site for a DGR facility. The program should provide information sufficient  to support a general understanding of the site in its current state and how it  is expected to evolve over extended time frames associated with the safety case  [6]. The site characterization program should establish baseline conditions for  the site and environment in its present condition; support the understanding of  the normal evolution; identify any events and processes associated with the  site that might disturb the normal evolution of the DGR system; and support the  understanding of the effect on safety of any features, events and processes  associated with the DGR system<sup><a id="fnb6a-ref" href="#fnb6" className="fn-lnk ui-link"><span className="wb-inv">Footnote </span>6</a></sup>.</p>
<p>Data collected during site characterization will form the  basis of descriptive site models and geological, hydrogeological, geochemical  and geomechanical frameworks that will be relied on to evaluate long-term  safety. The data will provide baseline data for detecting potential short- and  long-term environmental impacts at various stages and for tracking throughout  the CNSC&rsquo;s licensing lifecycle for a DGR. Data needs include relevant regional-  and site-scale information.</p>
<p>Baseline data include the biosphere and geosphere, and support  an understanding of current conditions at the site, its geological history, and  its likely future evolution over the safety case time frame. These data provide  the initial information for safety assessments at the conceptual stage and  during initial facility design. They will serve as the basis for the first  iteration of the full safety case and any initial geoscience verification  program at the site once it has been selected. As well as in the event that development  (at any phase) is licensed to proceed. </p>
<p>The order of the criteria described herein does not imply  priority of one element of characterization over another; relative relevance of  specific criteria will in some cases be site specific. Specific criteria  provided for the collection of baseline data may not be exhaustive and may constitute  recommendations. Alternative approaches and innovative techniques that address  additional elements of site characterization are also valid. </p>
<p>In this  document, the pre-closure period of a DGR encompasses site preparation,  construction, operation and decommissioning. The post-closure or long-term  period is the period that follows the closure of a DGR facility, with a time  frame of tens of thousands of years or more<sup><a id="fnb3b-ref" href="#fnb3" className="fn-lnk ui-link"><span className="wb-inv">Footnote </span>3</a></sup>.</p>
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
<h3 id="sec3-1">3.1 Site characteristics I: geological environment </h3>
<p>The data  gathered during the siting phase on the characteristics listed in this section  form a significant component of the long-term safety assessments and safety  case.</p>  <p>The  characteristics of the geological environment are necessary to assess the  long-term safety of a DGR. The key characterization factors of the geological  environment should include:</p>  <ul>
<li>containment and isolation characteristics of the  host rock: geological, hydrogeological, mineralogical, chemical and mechanical </li>
<li>past and future geological stability of the  site, including orogeny, seismicity, glaciation and volcanism</li>
<li>sufficient extent of suitable host rock at the  repository depth</li>
<li>site characteristics that would allow the  development of a robust safety case</li>
<li>demonstrated isolation of groundwaters at  selected repository depth from shallow groundwater systems</li>
<li>characteristics favourable for sorption,  precipitation or other mechanisms to limit contaminant release and transport  away from a DGR</li>
<li>low potential for inadvertent future human  intrusion</li>  </ul>  <p>Note that  for future NSCA licensing applications, quantitative data should be provided in  addition to qualitative descriptions where possible. </p>  <p>As siting  progresses, more extensive geological information would be gathered to verify  the initial safety case and to update the safety case iteratively. Although  this guidance is focused on the site characterization activities during the  siting process, it should be noted that data collection would continue until  closure of the DGR, and possibly for some time after closure, in order to  verify and update the safety case, and demonstrate long-term safety is  maintained. </p>  <p>The key  geological factors that are used to assess the long-term evolution of the repository  are demonstrated through the documentation of the following characteristics. </p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.1.1"></div>
<h4 id="sec3-1-1">3.1.1	Geological setting </h4>  	<p>The geological characteristics, in combination with the  engineered barriers and the design of the DGR, should indicate that a DGR at  the chosen site would remain safe for the entire time period of concern &#45; for tens of thousands to millions of years. </p>  	<p>This information should include:</p>  	<ul>
<li>tectonic setting </li>
<li>structural geology</li>
<li>stratigraphy </li>
<li>chosen host rock type, predictability, extent</li>
<li>fracture characteristics: frequency,  orientation, mineralogy, spacing</li>
<li>history of glacial cycles</li>
<li>petrology </li>
<li>geomechanical properties</li>
<li>natural resource potential</li>
</ul>  	<p>Natural resource potential should be assessed, preferably  in a quantitative way, and should include historical and current data.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.1.2"></div>
<h4 id="sec3-1-2">3.1.2	Hydrogeological setting</h4>
<p>Similar  to the geological setting, hydrogeological setting characteristics should  demonstrate site suitability. Information should include the following data:</p>
<ul>
<li>definition of regional hydrogeological regime  and/or units </li>
<li>regional and site-specific groundwater flow  conditions</li>
<li>flow rate</li>
<li>direction</li>
<li>hydrogeology of major rock units</li>
<li>porosity</li>
<li>hydraulic conductivity</li>
<li>hydraulic heads and gradients</li>
<li>location of existing and predicted future  significant water-use areas (e.g., groundwater wells)</li>
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
<div id="3.1.3"></div>
<h4 id="sec3-1-3">3.1.3	Geochemistry </h4>  	<p>Together  with the geological and hydrogeological, the geochemical conditions provide  essential information for predicting how contaminants could migrate from a DGR  to the biosphere. Special emphasis should be placed on geochemical properties  that can affect the migration of radionuclides in groundwater. </p>  	<p>Information  should include:</p>
<ul>
<li>mineralogy, including petrographic study</li>
<li>groundwater/porewater geochemistry</li>
<li>effective diffusion rates of radionuclides</li>
<li>solubility, speciation and retardation of  radionuclides</li>
<li>groundwater corrosivity toward engineered  barriers</li>
<li>potential for gas generation</li>
<li>water-rock interaction</li>
</ul>
<p>Any  process that can be shown to demonstrate the potential for radionuclide  migration or retardation from the DGR engineered facility through the geological  environment should be documented.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.1.4"></div>
<h4 id="sec3-1-4">3.1.4	Geological stability</h4>
<p>The site should be located in a seismically stable region,  with low potential for seismic or volcanic events. It should be demonstrated  that any credible geological event that could occur during the assessment time  frame would not impact the isolation and containment capability of a DGR. </p>
<p>The information that should be collected for the site and  region include: </p>
<ul>
<li>evidence of recent or historic active tectonic  processes (neotectonics) - e.g., information on quaternary faulting and  movement, soil liquefaction and volcanism </li>
<li>record of seismicity at the site, documentation  of historical earthquakes, their epicentres, magnitude and intensity, and  recurrence (link with regional tectonics, structural geology)</li>
<li>resistance of the site to future glacial events,  over the time frame of the safety case, linking to hydrogeological, geochemical  and geomechanical rock properties and glacial history</li>
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
<div id="3.1.5"></div>
<h4 id="sec3-1-5">3.1.5	Geomechanical characteristics </h4>  	<p>Geomechanical characteristics should be collected and used  to assess the pre-closure and long-term stability of the underground  excavations, and the evolution of the damage zone around those excavations. </p>
<p>Geomechanical  characteristics should include: </p>
<ul>
<li>the magnitude and orientation of the <em>in situ</em> stress</li>
<li>the stress-strain-strength properties of the  intact rock, the fractures and rock mass</li>
<li>the influence of time, temperature, scale,  anisotropy, pore fluid pressure and other relevant factors on  stress-strain-strength properties  </li>
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
<div id="3.2"></div>
<h3 id="sec3-2">3.2	Site characteristics II: surface environment </h3>
<p>Baseline  environmental data is needed to ensure that the environment will be adequately  protected and any potentially adverse effects mitigated. For example, baseline  data will support assessment of potential interactions with the environment and  potential for associated effects. Surface processes at the site should be  sufficiently characterized to ensure that natural hazard events such as  flooding, landslides and erosion would not impact the ability of the  radioactive waste management system to function safely during the pre-closure  of a DGR facility.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.2.1"></div>
<h4 id="sec3-2-1">3.2.1	Climate </h4>
<p>The site area climate should be characterized in such a  way that the effect of unexpected extreme meteorological conditions can be  adequately identified and considered in the design of the DGR facility.  Meteorological conditions should be determined from onsite and nearby  meteorological stations where possible, and used to predict potential effects  of extreme precipitation on the hydrological and hydrogeological systems at the  site. This data should also be used as baseline data to evaluate the transport  of potential airborne releases during the pre-closure period of the DGR  facility. The minimum meteorological data (i.e., number of years of site-specific  data) provided should be justified by the applicant and demonstrated to be  commensurate with the type of project and the chosen site. Climate normal data  (30 years of climate data) should also be included.</p>
<p>Specific information that should be collected includes:</p>
<ul>
<li>local and  regional climatic history and expected future trends at both the regional and  more global scale</li>
<li>meteorological  data, which should be collected at the site, local and regional scales to  adequately capture future meteorological conditions that could occur over the  time scales of the project</li>
<li>regional  and local precipitation characteristics (precipitation and snow)</li>
<li>extreme  and average data on temperature, precipitation, snow, wind speed and any other  relevant phenomenon for the chosen site</li>
<li>wind and  atmospheric dispersion characteristics for potential atmospheric releases</li>
<li>potential  for extreme weather phenomena, such as hurricanes, tornadoes and severe winter  storms</li>
<li>ground  frost and snow cover</li>
<li>evapotranspiration:  evaporation and transpiration from soils, water bodies and plants</li>
<li>ice  dynamics on lakes and streams</li>
<li>air  quality  </li>
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
<div id="3.2.2"></div>
<h4 id="sec3-2-2">3.2.2	Aquatic and terrestrial environment  </h4>  <p>Site characterization should contribute to the  identification of the Valued Ecosystem Components that will be used as  environmental assessment end points. Appropriate measurement end points should  also be identified. Where possible, consideration should be given to  documentation of specific attribute(s) and a rationale for their selection in  the assessment. The ecosystem components should be characterized in sufficient  detail to assess their importance, potential interaction with the project and  the potential for environmental effects arising from the project activities. When  undertaking characterization, consideration is to be given to both radiological  and non-radiological aspects of a given medium (e.g., soil quality).</p>  <p>The elements of the aquatic ecology that should be  characterized in the area of interest include:</p>  <ul>
<li>surface  water quality</li>
<li>sediment  quality</li>
<li>phytoplankton  communities</li>
<li>aquatic  macrophytes</li>
<li>zooplankton  communities</li>
<li>benthic  macroinvertebrates</li>
<li>fish </li>
<li>fish  habitat</li>
<li>species designated  as &ldquo;at risk&ldquo;</li>  </ul>  <p>The elements of the terrestrial ecology that  should be characterized in the area of interest include: </p>  <ul>
<li>soil quality</li>
<li>vegetation</li>
<li>wildlife</li>
<li>terrestrial  habitat</li>
<li>species designated  as &ldquo;at risk&ldquo;</li>  </ul>  <p>The aspects and level of detail in the description of each  of the above components should be in proportion to the potential for  interactions.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.2.3"></div>
<h4 id="sec3-2-3">3.2.3	Topography, hydrology and flooding </h4>
<p>The drainage systems in the area should be assessed to  determine the confining capacity of the site during the pre-closure period of the DGR facility. Stream, lake,  pond and wetland networks in the vicinity of the planned facility should be  characterized to evaluate potential for flooding, erosion, sediment transport  and associated consequences. </p>  <p>Information that should be collected and evaluated  includes:</p>  <ul>
<li>topography  of the site and drainage features, including contributing drainage basin limits  (extent, shape)</li>
<li>magnitude  and frequency of floods in the region</li>
<li>location  of surface water bodies</li>
<li>gradient  of the land surface</li>
<li>density of  the drainage network</li>
<li>slope of  the major stream channels</li>
<li>identification  and characterization of groundwater recharge areas and discharge areas  (including receiving water bodies)</li>
<li>drainage  basins water balance</li>
<li>regional  and local water table characteristics, and seasonality</li>  </ul>  <p>For sites along large lakes or seashores, consideration  should be given to flooding potential as a result of tsunamis, seiches or tidal  waves. </p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.2.4"></div>
<h4 id="sec3-2-4">3.2.4	Geomorphology characterization </h4>
<p>The existing  geomorphology of a site will permit an understanding of the Quaternary  geological history of an area relevant for siting a DGR. It will also  contribute to the geotechnical characterization. Characterization includes:</p>
<ul>
<li>the  distribution of land forms and thickness of surficial material (depth to  bedrock)</li>
<li>documentation  of surface deposits and any existing or potential aggregate resources </li>
<li>Quaternary  geological history</li>
</ul>
<p>This may be done via:</p>
<ul>
<li>topographical  mapping</li>
<li>aerial  photograph interpretation</li>
<li>soil  sampling to assess soil deposition and transportation processes  </li>
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
<div id="3.2.5"></div>
<h4 id="sec3-2-5">3.2.5 Geotechnical characterization of surficial deposits </h4>
<p>Geotechnical characterization of surficial deposits is  important, as the integrity of the surface infrastructure could be affected by  geotechnical properties of overburden materials during the pre-closure period of the DGR  facility. Areas of concern include slope stability, excavation  activities, physical stability and degradation of material stockpiles,  stability of facility foundations, quality of human-made barriers constructed  using overburden or other materials, waste settlement, settlement and damage of  the facility covers, or any issue that could cause water infiltration and  contaminant migration. </p>  <p>Geotechnical studies should include standard geotechnical  sampling, field investigations and laboratory studies to assess:</p>  <ul>
<li>past occurrence of landslides and other  potentially unstable slopes in the area</li>
<li>soil properties (typically grain size,  plasticity, dispersion, cohesive properties, etc.)</li>
<li>shear strength parameters</li>
<li>bearing capacity of foundation material</li>
<li>liquefaction potential of loose granular  material</li>
<li>compaction properties</li>
<li>hydraulic conductivity </li>
<li>other site or facility design-specific  properties  </li>  </ul>
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
<h2 id="sec4">4. Human Activities and Land Use</h2>
<p>The siting process will collect information that will eventually be included in the safety case for a DGR. Information on past, present and  potential future human activities at or near the site should be collected, and  the likelihood of whether these activities could have an impact should be  assessed. </p>
<p>To limit adverse impacts on human activities and land use, the following information should be considered:</p>
<ul>
<li>economically valuable resources (e.g.,  groundwater wells, mineral resources)</li>
<li>known and potential for competing land-use activities  at the proposed site</li>
<li>current and historical mineral exploration and  mining activities &#45; records of boreholes, shafts and other features that could  represent potential instabilities or radionuclide migration pathways  </li>
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
<h2 id="sec5">5. Data Acquisition and Verification Activities </h2>  	<p>The licence applicant would demonstrate in their licence  application that the results of site characterization activities are accurate,  complete, reproducible, traceable and verifiable.</p>
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
<h3 id="sec5-1">5.1	Management system </h3>  	<p>In accordance with the <em>General  Nuclear Safety and Control Regulations,</em> section 3(1)(k), the applicant for  a licence describes the organizational management structure, including the  internal allocation of functions, responsibilities and authority. <em>Class I Nuclear Facilities Regulations</em>,  section 3(d), specifies that the applicant proposes the management system,  including measures to promote and support safety culture for the activity to be  licensed. The adequacy of the quality assurance program (management system) for  a licence is assessed by CNSC staff. By implementing a management system, the  organization would demonstrate compliance, ensure consistency in meeting  requirements, set priorities and continuously improve.</p>
<p>The licence applicant should develop and implement a  management system for site characterization in accordance with the requirements  specified in CSA N286-12,<em> Management system  requirements for nuclear facilities</em> <sup><a id="fnb7a-ref" href="#fnb7" className="fn-lnk ui-link"><span className="wb-inv">Footnote </span>7</a></sup>. </p>
<p>Topics  covered under management system governance documentation are expected to  include the generic and specific requirements for site characterization processes  and practices. </p>
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
<h3 id="sec5-2">5.2	Data management program  </h3>  	<p>The integrity, accuracy and completeness of the  information and data generated as a result of the site characterization  activities are of utmost importance. The licence applicant should ensure the consistency  and quality of the data used to develop the safety case submitted in support of  any formal licence application. </p>
<p>The licence applicant should establish quality assurance  and quality control programs to ensure high data quality and traceability. The  programs should be focused on the production of documentary evidence to  demonstrate that the required data quality has been achieved. Wherever  possible, data should be collected, presented, stored and archived in a  suitably standardized controlled fashion. Data should be compiled in a format  that facilitates examination, comparison, identification of information gaps  and independent review. For each site characterization component, the  documentation should clearly indicate the properties being investigated, the  data collection and investigation methods used, the results, and the associated  assumptions and uncertainties. </p>
<p>The process of data evaluation and establishing site-related  parameters involves technical and engineering analyses and judgments, which  requires extensive experience and knowledge. In many cases the parameters and  analyses may not lend themselves to direct verifications through inspections  and tests, or by other techniques that can be precisely identified and  controlled. Therefore, these evaluations should be reviewed and verified by  independent individuals or groups (e.g., peer review) that are separate from  those who initially did the work. The reviews should be carried out at the  different stages of the siting process in accordance with the work instructions  and procedures.</p>
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
<h3 id="sec5-3">5.3	Sampling and testing procedures</h3>  	<p>Site characterization is necessary to confirm, refine  and adapt initial interpretations based on the initial data acquired at the  earlier siting phase. The following activities (where applicable) may serve to  obtain the data necessary to guide later development phases and updates to  safety assessments and the safety case: </p>  	<ul>
<li>geoscientific data compilation</li>
<li>airborne geophysical surveys (e.g., magnetic,  gravity)</li>
<li>geological mapping</li>
<li>geochemical rock property testing</li>
<li>borehole drilling</li>
</ul>  	<p>Site characterization involves the collection of reliable  information on the subsurface conditions that can only be collected by  conducting various tests in and between boreholes drilled specifically for this  purpose. Accordingly, the site characterization program should describe the  following:</p>
<ul>
<li>number, locations and types (i.e., diamond drill  vs. air percussion) of boreholes to be drilled on the site</li>
<li>purpose of each borehole and its intended  orientation, length and diameter</li>
<li>types of drilling lubricants and drilling fluid  tracers that will be used during drilling </li>
<li>types of and schedule for borehole deviation  monitoring to control orientation </li>
<li>core recovery specifications, sampling intervals,  and core logging and storage procedures, or chip sampling, logging and storage  procedures</li>
<li>number and types of physical tests to be done on  core samples or chip samples</li>
<li>schedule for drilling advance and for downtime  for testing</li>
<li>types of hydrogeologic testing (drill stem  shut-in testing, pulse testing, tracer testing, etc.) to be performed during  the drilling program </li>
<li>groundwater samples that will be collected  during drilling and the types of analyses of the groundwater that will be done</li>
<li>borehole development and completion procedures  (flushing, casing and grouting)</li>
<li>borehole sealing procedures that will be  followed should a borehole require abandonment</li>
</ul>
<p>A borehole quality assurance and quality control program  should be used to ensure that the objectives of the drilling program are  achieved and controlled, including:</p>
<ul>
<li>maintenance of a drilling journal by a qualified  drill-site geologist who records drilling and relevant drilling-related  activities such as the cleaning of drill rods prior to commencement of  drilling, surface casing installation and grouting procedures, drilling  penetration rates, core recovery, presence of water-producing intervals and flow  rates, amount of drilling fluid added and zones of water loss, measurements of  tracer concentrations in drilling fluid and return water, additions of drilling  lubricants, borehole development related to the removal of residual drill  cuttings and drilling fluid, and core or chip sample information</li>
<li>recording of &ldquo;static&ldquo; water-level information  during shutdowns in drilling operations and the &ldquo;field chemistry&ldquo; of  groundwater that is airlifted to the surface during the drilling of air  percussion boreholes, and the procedures followed to collect and preserve such  water samples</li>
<li>conducting post-drilling borehole surveys to  confirm that the borehole has been drilled to the prescribed depth, diameter  and orientation</li>
<li>Establishing an electronic record that documents  all borehole drilling activities and measurements  </li>
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
<div id="5.4"></div>
<h3 id="sec5-4">5.4	Integration and interpretation </h3>  	<p>Site characterization involves the quantification and  interpretation of a large number of physical and environmental components that  interact with each other to a greater or lesser degree. This results in several  more or less independent systems of related or interacting components. The  components in each system are usually interpreted to develop a site model for  that system. For example, the stratigraphy, lithology and spatial distribution  of <em>in situ</em> stress can be interpreted  to give a conceptual model of both current and evolutionary structural geology  of the site, while the distribution of mineralogy in the rock matrix and in  fracture infilling can be interpreted to give a separate model of the geological  evolution of the site.</p>
<p>Each scientific and engineering discipline can contribute  to one or more independent site models. This is particularly true for geochemistry, in which several independent  chemical systems coexist. Since all of  these chemical and physical systems coexist at the one site, the independent  models derived from each system should be consistent. For example, there should  not be inconsistencies between evolutionary models based on mineralization, and  dating methods. </p>
<p>The different site models from different surveys and  disciplines, then, should be integrated into a single consistent model of the  site&rsquo;s geological and hydrogeological history, current conditions and expected  (unperturbed) evolution. The model of current conditions at a site provides the  necessary information for design purposes. The history of the site should provide  a model of how the site has responded to past perturbations. Extrapolating the  history of the site through the current conditions should provide a model of  how the site is expected to evolve if not used. Applying estimates of the  perturbations imposed by the planned facility and the site response to past  perturbations to the model of undisturbed site evolution should provide a model  of the anticipated evolution of the site with the facility.</p>
<p>Such integration and interpretation of the site  characteristics are documented in a geosynthesis report, which will constitute  an important supporting document to the safety case.</p>
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
<h2 id="sec6">6. Facilities for Verification and Characteristic Activities</h2>  <p>An underground research facility (URF) is an underground  facility typically constructed at depth to provide an environment to acquire  knowledge and training, help characterize the geology, conduct experiments,  test equipment and designs, and help demonstrate feasibility of a DGR.</p>
<p>Many geoscientific characteristics cannot be obtained from  the above-ground activities. Therefore, verification and characterization  activities (e.g., underground excavation and research that would typically be  carried out in an underground research facility) have been conducted by other countries  as a best practice for DGRs for high-level radioactive waste, including used  nuclear fuel<sup><a  id="fnb8a-ref" href="#fnb8" className="fn-lnk ui-link"><span className="wb-inv">Footnote </span>8</a></sup>. Those activities reduce uncertainties and therefore provide a  stronger safety case.</p>
<p>Setting up an underground research facility is a very time-consuming  process, and there may be a significant time lapse between the selection of a  potential site and the availability of such a facility at that site. Therefore,  it is best practice to start planning for this facility as early as possible in  the siting process, and build support and expertise by using available  underground research facilities.</p>
<p>It is important for the licence applicant to discuss its  plans with the CNSC early for verification of site characteristics, such as an underground  research facility or similar facility, to clarify the regulatory approval  process and to identify those site characterization activities. These  consultations are also necessary to identify those site characterization  activities that may not require a CNSC licence to prepare site and/or licence  to construct.</p>
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
<h2>Glossary</h2>
<p>For definitions of terms used in  this document, see <a href="http://www.nuclearsafety.gc.ca/pubs_catalogue/uploads/REGDOC-3-6-Glossary-of-CNSC-Terminology-eng.pdf">REGDOC-3.6, <em>Glossary of CNSC Terminology</em></a>,  which includes terms and definitions used in the <a href="http://laws-lois.justice.gc.ca/eng/acts/N-28.3/"><em>Nuclear Safety and  Control Act</em></a> and the regulations made under it, and in CNSC  regulatory documents and other publications. REGDOC-3.6 is provided for  reference and information.</p>
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
<div className="wb-fnote" role="note">
<section>
<h2 id="fnb">References</h2>
<dl>
<dt>Footnote 1</dt>
<dd id="fnb1">
<p>International Atomic Energy Agency (IAEA), <em>IAEA Safety Glossary: Terminology Used in  Nuclear Safety and Radiation Protection, 2007 Edition,</em> Vienna, 2007.</p>
<p className="fn-rtn"><a href="#fnb1-ref" className="ui-link"><span className="wb-inv">Return to footnote </span>1 <span className="wb-inv">referrer</span></a></p>
</dd>
<dt>Footnote 2</dt>
<dd id="fnb2">
<p>CSA Group, CSA N292.0-14, <em>General principles for the management of radioactive  waste and irradiated fuel, </em>Mississauga, 2014.</p>  <p className="fn-rtn"><a href="#fnb2a-ref" className="ui-link"><span className="wb-inv">Return to <span>first</span> footnote </span>2<span className="wb-inv"> referrer</span></a></p>
<p className="fn-rtn"><a href="#fnb2b-ref" className="ui-link"><span className="wb-inv">Return to <span>second</span> footnote </span>2<span className="wb-inv"> referrer</span></a></p>
<p className="fn-rtn"><a href="#fnb2c-ref" className="ui-link"><span className="wb-inv">Return to <span>third</span> footnote </span>2<span className="wb-inv"> referrer</span></a></p>
<p className="fn-rtn"><a href="#fnb2d-ref" className="ui-link"><span className="wb-inv">Return to
fourth footnote </span>2<span className="wb-inv"> referrer</span></a></p>
<p className="fn-rtn"><a href="#fnb2e-ref" className="ui-link"><span className="wb-inv">Return to <span>fifth</span> footnote </span>2<span className="wb-inv"> referrer</span></a></p>
<p className="fn-rtn"><a href="#fnb2f-ref" className="ui-link"><span className="wb-inv">Return to <span>sixth</span> footnote </span>2<span className="wb-inv"> referrer</span></a></p>
<p className="fn-rtn"><a href="#fnb2g-ref" className="ui-link"><span className="wb-inv">Return to <span>seventh</span> footnote </span>2<span className="wb-inv"> referrer</span></a></p>
<p className="fn-rtn"><a href="#fnb2h-ref" className="ui-link"><span className="wb-inv">Return to
eighth footnote </span>2<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 3</dt>
<dd tabIndex="-1" id="fnb3" aria-labelledby="fnb3">
<p>IAEA, Draft TECDOC,<em> Managing integration of pre-closure  activities and post-closure safety in the Safety Case for Geological Disposal</em>.</p>  <p className="fn-rtn"><a href="#fnb3a-ref" className="ui-link"><span className="wb-inv">Return to <span>first</span> footnote </span>3<span className="wb-inv"> referrer</span></a></p>
<p className="fn-rtn"><a href="#fnb3b-ref" className="ui-link"><span className="wb-inv">Return to <span>second</span> footnote </span>3<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 4</dt>
<dd tabIndex="-1" id="fnb4" aria-labelledby="fnb4">
<p>IAEA, IAEA Safety Standards Series,  No. SSG-14, <em>Geological Disposal  Facilities for Radioactive Waste,</em> Vienna, 2011.</p>  <p className="fn-rtn"><a href="#fnb4a-ref" className="ui-link"><span className="wb-inv">Return to <span>first</span> footnote </span>4<span className="wb-inv"> referrer</span></a></p>
<p className="fn-rtn"><a href="#fnb4b-ref" className="ui-link"><span className="wb-inv">Return to <span>second</span> footnote </span>4<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 5</dt>
<dd id="fnb5">
<p>Canadian Nuclear Safety Commission,  REGDOC-2.11.1, Waste Management, Volume II: Assessing the Long Term Safety of  Radioactive Waste Management, Ottawa, 2018.</p>
<p className="fn-rtn"><a href="#fnb5a-ref" className="ui-link"><span className="wb-inv">Return to <span>first</span> footnote </span>5<span className="wb-inv"> referrer</span></a></p>
<p className="fn-rtn"><a href="#fnb5b-ref" className="ui-link"><span className="wb-inv">Return to <span>second</span> footnote </span>5<span className="wb-inv"> referrer</span></a></p>
<p className="fn-rtn"><a href="#fnb5c-ref" className="ui-link"><span className="wb-inv">Return to <span>third</span> footnote </span>5<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 6</dt>
<dd tabIndex="-1" id="fnb6" aria-labelledby="fnb6">
<p>Western European Nuclear Regulators&rsquo; Association, <em>Report:</em> Radioactive Waste Disposal  Facilities Safety Reference Levels, 2014.</p>
<p className="fn-rtn"><a href="#fnb6a-ref" className="ui-link"><span className="wb-inv">Return to <span>first</span> footnote </span>6<span className="wb-inv"> referrer</span></a></p>
<p className="fn-rtn"><a href="#fnb6b-ref" className="ui-link"><span className="wb-inv">Return to <span>second</span> footnote </span>6<span className="wb-inv"> referrer</span></a></p>
<p className="fn-rtn"><a href="#fnb6c-ref" className="ui-link"><span className="wb-inv">Return to <span>third</span> footnote </span>6<span className="wb-inv"> referrer</span></a></p>
<p className="fn-rtn"><a href="#fnb6d-ref" className="ui-link"><span className="wb-inv">Return to <span>fourth</span> footnote </span>6<span className="wb-inv"> referrer</span></a></p>
<p className="fn-rtn"><a href="#fnb6e-ref" className="ui-link"><span className="wb-inv">Return to <span>fifth</span> footnote </span>6<span className="wb-inv"> referrer</span></a></p>
<p className="fn-rtn"><a href="#fnb6f-ref" className="ui-link"><span className="wb-inv">Return to <span>sixth</span> footnote </span>6<span className="wb-inv"> referrer</span></a></p>
<p className="fn-rtn"><a href="#fnb6g-ref" className="ui-link"><span className="wb-inv">Return to <span>seventh</span> footnote </span>6<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 7</dt>
<dd tabIndex="-1" id="fnb7" aria-labelledby="fnb7">
<p>CSA Group, CSA N286-12, <em>Management system requirements for nuclear facilities</em>, 2012.</p>
<p className="fn-rtn"><a href="#fnb7a-ref" className="ui-link"><span className="wb-inv">Return to <span>first</span> footnote </span>7<span className="wb-inv"> referrer</span></a></p>
<p className="fn-rtn"><a href="#fnb7b-ref" className="ui-link"><span className="wb-inv">Return to <span>second</span> footnote </span>7<span className="wb-inv"> referrer</span></a></p>
<p className="fn-rtn"><a href="#fnb7c-ref" className="ui-link"><span className="wb-inv">Return to <span>third</span> footnote </span>7<span className="wb-inv"> referrer</span></a></p>
<p className="fn-rtn"><a href="#fnb7d-ref" className="ui-link"><span className="wb-inv">Return to <span>fourth</span> footnote </span>7<span className="wb-inv"> referrer</span></a></p>
<p className="fn-rtn"><a href="#fnb7e-ref" className="ui-link"><span className="wb-inv">Return to <span>fifth</span> footnote </span>7<span className="wb-inv"> referrer</span></a></p>
<p className="fn-rtn"><a href="#fnb7f-ref" className="ui-link"><span className="wb-inv">Return to <span>sixth</span> footnote </span>7<span className="wb-inv"> referrer</span></a></p>
<p className="fn-rtn"><a href="#fnb7h-ref" className="ui-link"><span className="wb-inv">Return to <span>seventh</span> footnote </span>7<span className="wb-inv"> referrer</span></a></p>
<p className="fn-rtn"><a href="#fnb7i-ref" className="ui-link"><span className="wb-inv">Return to <span>seventh</span> footnote </span>7<span className="wb-inv"> referrer</span></a></p>
<p className="fn-rtn"><a href="#fnb7j-ref" className="ui-link"><span className="wb-inv">Return to <span>seventh</span> footnote </span>7<span className="wb-inv"> referrer</span></a></p>
<p className="fn-rtn"><a href="#fnb7k-ref" className="ui-link"><span className="wb-inv">Return to <span>seventh</span> footnote </span>7<span className="wb-inv"> referrer</span></a></p>
<p className="fn-rtn"><a href="#fnb7l-ref" className="ui-link"><span className="wb-inv">Return to <span>seventh</span> footnote </span>7<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 8</dt>
<dd tabIndex="-1" id="fnb8" aria-labelledby="fnb8">
<p>IAEA, Safety Standards Series, No.  SSG-23, <em>The Safety Case and Safety  Assessment for the Disposal of Radioactive Waste,</em> Specific Safety Guide,  Vienna, 2012.</p>  <p className="fn-rtn"><a href="#fnb8a-ref" className="ui-link"><span className="wb-inv">Return to footnote <span>first</span> foonote </span>8<span className="wb-inv"> referrer</span></a></p>
<p className="fn-rtn"><a href="#fnb8b-ref" className="ui-link"><span className="wb-inv">Return to
footnote <span>second</span> foonote </span>8<span className="wb-inv"> referrer</span></a></p>
<p className="fn-rtn"><a href="#fnb8c-ref" className="ui-link"><span className="wb-inv">Return to
footnote <span>third</span> foonote </span>8<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 9</dt>
<dd tabIndex="-1" id="fnb9" aria-labelledby="fnb9">
<p>IAEA, IAEA Safety Standards Series, No. GSG-1, <em>Classification of Radioactive Waste</em>,  Vienna, 2009.</p>
<p className="fn-rtn"><a href="#fnb9a-ref" className="ui-link"><span className="wb-inv">Return to <span>first</span> footnote </span>9<span className="wb-inv"> referrer</span></a></p>
<p className="fn-rtn"><a href="#fnb9b-ref" className="ui-link"><span className="wb-inv">Return to <span>second</span> footnote </span>9 <span className="wb-inv">referrer</span></a></p>
<p className="fn-rtn"><a href="#fnb9c-ref" className="ui-link"><span className="wb-inv">Return to <span>third</span> footnote </span>9<span className="wb-inv"> referrer</span></a></p>
<p className="fn-rtn"><a href="#fnb9d-ref" className="ui-link"><span className="wb-inv">Return to fourth footnote </span>9<span className="wb-inv"> referrer</span></a></p>
<p className="fn-rtn"><a href="#fnb9e-ref" className="ui-link"><span className="wb-inv">Return to <span>fifth</span> footnote </span>9<span className="wb-inv"> referrer</span></a></p>
<p className="fn-rtn"><a href="#fnb9f-ref" className="ui-link"><span className="wb-inv">Return to sixth footnote </span>9<span className="wb-inv"> referrer</span></a></p>
<p className="fn-rtn"><a href="#fnb9g-ref" className="ui-link"><span className="wb-inv">Return to sixth footnote </span>9<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 10</dt>
<dd tabIndex="-1" id="fnb10" aria-labelledby="fnb10">
<p>IAEA, IAEA Safety Standards Series,  No. SSR-5, <em>Disposal of Radioactive Waste,</em> Vienna, 2011.</p>  <p className="fn-rtn"><a href="#fnb10a-ref" className="ui-link"><span className="wb-inv">Return to <span>first</span> footnote </span>10<span className="wb-inv"> referrer</span></a></p>
<p className="fn-rtn"><a href="#fnb10b-ref" className="ui-link"><span className="wb-inv">Return to <span>second</span> footnote </span>10<span className="wb-inv"> referrer</span></a></p>
<p className="fn-rtn"><a href="#fnb10c-ref" className="ui-link"><span className="wb-inv">Return to <span>second</span> footnote </span>10<span className="wb-inv"> referrer</span></a></p>
</dd>
<dd tabIndex="-1" id="fnb100" aria-labelledby="fnb100">
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
<h2>CNSC Regulatory Document Series</h2>  <p>Facilities  and activities within the nuclear sector in Canada are regulated by the  Canadian Nuclear Safety Commission (CNSC).&nbsp;In addition to&nbsp;the <em>Nuclear  Safety and Control Act</em> and associated regulations, these facilities and  activities may also be required to comply with other&nbsp;regulatory  instruments such as regulatory documents or standards.</p>  <p>Effective  April 2013, the CNSC&rsquo;s catalogue of existing and planned regulatory documents has  been organized under three key categories and twenty-five series, as set out  below. Regulatory documents produced by the CNSC fall under one of the  following series:</p>  <ul className="list-bullet-none">
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
<li>3.6 CNSC Glossary</li>
</ul>
</li>
</ul>  <p>Note: The regulatory document series may be adjusted  periodically by the CNSC. Each regulatory document series listed above may  contain multiple regulatory documents. For the latest list of regulatory documents, visit  the <a href="http://www.nuclearsafety.gc.ca/eng/acts-and-regulations/regulatory-documents/index">CNSC&rsquo;s  website</a>.</p>

                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }