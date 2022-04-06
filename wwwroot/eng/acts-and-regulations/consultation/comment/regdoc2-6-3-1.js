import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "en",
                pageTitle: "Draft for Public Consultation", 
                dateModified: "2013-06-26",
                langToggleUrl: "/fra/acts-and-regulations/consultation/comment/regdoc2-6-3-1"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<h2>REGDOC-2.6.3: Fitness for Service: Aging Management</h2>
<a name="preface"></a>
<h2>Preface</h2>  <p>This regulatory document is part of the CNSC&#8217;s Fitness for Service series of regulatory documents, which also covers reliability and maintenance programs for nuclear power plants. The full list of regulatory document series is included at the end of this document and can also be found on the CNSC&#8217;s Web site at
<a href="/eng/acts-and-regulations/regulatory-documents/index">nuclearsafety.gc.ca/regulatory-documents</a></p>  <p>REGDOC-2.6.3, <em>Aging Management</em>, sets out the requirements of the CNSC for managing aging of structures, systems and components (SSCs) of a nuclear power plant. It also provides guidance as to how these requirements may be met. This document replaces RD-334,&nbsp;<em>Aging Management for Nuclear Power Plants</em>, which was published in June 2011.</p>  <p>Aging management is the set of engineering, operational, inspection and maintenance actions that control, within acceptable limits, the effects of physical aging and obsolescence of SSCs that occur over time or with use. An aging management program is a set of policies, processes, procedures, arrangements and activities for managing the aging of SSCs of a nuclear power plant. Effective aging management ensures that required safety functions are reliable and available throughout the service life of the plant, in accordance with the licensing basis.</p>  <p>This document is intended to form part of the licensing basis for a regulated facility or activity. It is intended for inclusion in licences as either part of the conditions and safety and control measures in a licence, or as part of the safety and control measures to be described in a licence application and the documents needed to support that application.</p>  <p className="border-highlight"><strong>Important note: </strong>Where referenced in a  licence either directly or indirectly (such as through licensee&#8209;referenced  documents), this document is part of the licensing basis for a regulated facility  or activity. <br />
<br />
The  licensing basis sets the boundary conditions for acceptable performance at a  regulated facility or activity and establishes the basis for the CNSC&rsquo;s  compliance program for that regulated facility or activity. <br />
<br />
Where this  document is part of the licensing basis, the word &ldquo;shall&rdquo; is used to express a  requirement to be satisfied by the licensee or licence applicant. &ldquo;Should&rdquo; is  used to express guidance or that which is advised. &ldquo;May&rdquo; is used to express an  option or that which is advised or permissible within the limits of this  regulatory document. &ldquo;Can&rdquo; is used to express possibility or capability.<br />
<br />
Nothing contained  in this document is to be construed as relieving any licensee from any other  pertinent requirements. It is the licensee&rsquo;s responsibility to identify and  comply with all applicable regulations and licence conditions.</p>
<a name="toc"></a>
<h2 className="reportHeading2">Table of Contents</h2>  <div className="IndentLeft10">
<p><a href="#P114_4141"><strong>1.0 Introduction</strong></a></p>  </div>  <div className="IndentLeft20">
<p><a href="#P115_4157">1.1 Purpose</a></p>
<p><a href="#P117_4334">1.2 Scope</a></p>
<p><a href="#P121_5236">1.3 Relevant regulations</a></p>
<p><a href="#P130_7822">1.4 International standards</a></p>  </div>  <div className="IndentLeft10">
<p><a href="#P135_8481"><strong>2.0 General Concepts</strong></a></p>  </div>  <div className="IndentLeft20">
<p><a href="#P139_9010">2.1 Aging and obsolescence of structures, systems and  components</a></p>
<p><a href="#P126_7978">2.2 Systematic and integrated approach to aging  management</a></p>  </div>  <div className="IndentLeft10">
<p><a href="#P153_9844"><strong>3.0 Proactive Strategy for Aging  Management</strong></a></p>  </div>  <div className="IndentLeft20">
<p><a href="#P164_11373">3.1 Design</a></p>
<p><a href="#P209_19671">3.2 Fabrication, construction and installation</a></p>
<p><a href="#P211_19831">3.3 Commissioning</a></p>
<p><a href="#P266_25241">3.4 Operation</a></p>
<p><a href="#P306_30164">3.5 Decommissioning</a></p>
</div>  <div className="IndentLeft10">
<p><a href="#P171_12015"><strong>4.0 Integrated Aging Management</strong></a></p>  </div>  <div className="IndentLeft20">
<p><a href="#P173_12187">4.1 Organizational arrangements for effective aging  management</a></p>
<p><a href="#P178_12865">4.2 Data collection and record-keeping system to  support aging management</a></p>
<p><a href="#P179_12890">4.3 Screening and selection of structures, systems and  components</a></p>
<p><a href="#P190_14207">4.4 Evaluations for aging management</a></p>
<p><a href="#P196_14844">4.5 Condition assessments</a></p>
<p><a href="#P203_15953">4.6 SSC&ndash;specific aging management programs</a></p>
<p><a href="#P204_15976">4.7 Management of technological obsolescence</a></p>
<p><a href="#P208_16307">4.8 Interfaces with other supporting programs</a></p>
<p><a href="#P212_16692">4.9 Implementation of aging management programs</a></p>
<p><a href="#P217_17136">4.10 Review and improvement</a></p>  </div>
<div className="IndentLeft10">
<p><a href="#P302_26654"><strong>Appendix&nbsp;A: Attributes of an Effective Aging Management  Program</strong></a></p>
<p><a href="#P295_25980"><strong>Appendix&nbsp;B: Sample Methodology for Aging Evaluation</strong></a></p>
<p><a href="#P363_28109"><strong>Glossary</strong></a></p>
<p><a href="#P283_24351"><strong>References</strong></a></p>
<p><a href="#P126_7975"><strong>Additional Information</strong></a></p>  </div>
<a name="1.0"></a>
<h2><a name="P114_4141" id="P114_4141"></a>1.0 Introduction</h2>
<a name="1.1"></a>
<h3><a name="P115_4157"></a>1.1 Purpose</h3>
<p>REGDOC-2.6.3, <em>Aging Management</em>, sets out the requirements of the Canadian Nuclear  Safety Commission (CNSC) for managing the aging of structures, systems and  components (SSCs) of a nuclear power plant (NPP). Guidance is also provided as  to how these requirements may be met.</p>
<p>
Managing the aging of an NPP means to  ensure the availability of required safety functions throughout the facility&#39;s service  life, with consideration given to changes that occur over time and with use.  This requires addressing both physical aging and obsolescence of SSCs where  this can, directly or indirectly, have an adverse effect on the safe operation  of the NPP.</p>
<p>
This document is intended for use  by licensees and applicants in establishing, implementing and improving aging  management programs (AMPs) for NPPs.</p>
<a name="1.2"></a>
<h3><a name="P117_4334"></a>1.2 Scope</h3>
<p><em>Aging Management</em> sets requirements to  provide assurance that aging management is appropriately and proactively  considered in the different phases of an NPP&#39;s lifecycle. The lifecycle phases  can apply to individual SSCs as well as the entire NPP. Specific requirements  are also provided for establishment, implementation and improvement of AMPs  through application of a systematic and integrated approach.</p>
<p>
This document provides a framework  within which codes and standards can be applied to provide assurance that  physical aging and obsolescence of SSCs are effectively managed.</p>
<p>
Where appropriate, this document  may be applied to other nuclear facilities, with due consideration of the  differences compared to those of an NPP in hazard potential and complexity of  affected systems.</p>
<a name="1.3"></a>
<h3><a name="P121_5236"></a>1.3 Relevant legislation</h3>
<p>The following provisions of the <em>Nuclear Safety and Control Act</em> (NSCA)  and the regulations made under it are relevant to this document:</p>
<ul>
<li> Subsection&nbsp;24(4) of the NSCA states  that &quot;No licence shall be issued, renewed, amended or replaced&nbsp;&ndash; and no authorization  to transfer one given&nbsp;&ndash; unless, in the opinion of the Commission, the applicant  or, in the case of an application for an authorization to transfer the licence,  the transferee (<em>a</em>)&nbsp;is qualified  to carry on the activity that the licence will authorize the licensee to carry on,  and (<em>b</em>)&nbsp;will, in carrying on  that activity, make adequate provision for the protection of the environment,  the health and safety of persons and the maintenance of national security and  measures required to implement international obligations to which Canada has  agreed&quot;</li>
<li> Paragraph&nbsp;3(1)(<em>k</em>) of the <em>General Nuclear Safety and Control Regulations</em> states that &quot;an application  for a licence shall contain the following information:... (<em>k</em>)&nbsp;the applicant&#39;s organizational management structure insofar  as it may bear on the applicant&#39;s compliance with the Act and the regulations  made under the Act, including the internal allocation of functions,  responsibilities and authority&quot;</li>
<li> Paragraphs 12(1)(<em>c</em>) and (<em>f</em>) of the <em>General Nuclear  Safety and Control Regulations</em> state that &quot;every licensee shall (<em>c</em>)&nbsp;take all reasonable precautions  to protect the environment and the health and safety of persons and to maintain  security of nuclear facilities and nuclear substances;&quot; and &quot;(<em>f</em>)&nbsp;take all reasonable precautions  to control the release of radioactive nuclear substances or hazardous  substances within the site of the licensed activity and into the environment as  a result of the licensed activity&quot;</li>
<li> Paragraphs&nbsp;6(<em>d</em>), (<em>m</em>),  and (<em>n</em>) of the <em>Class&nbsp;I Nuclear Facilities Regulations</em> state that &quot;an  application for a licence to operate a Class&nbsp;I nuclear facility shall  contain&quot;, in addition to other information:<br />
&quot;(<em>d</em>)&nbsp;the proposed measures,  policies, methods and procedures for operating and maintaining the nuclear  facility;&quot;<br />
&quot;(<em>m</em>)&nbsp;the proposed  responsibilities of and qualification requirements and training program for  workers, including the procedures for the requalification of workers;&quot;<br />
&quot;(<em>n</em>)&nbsp;the results that have been  achieved in implementing the program for recruiting, training and qualifying  workers in respect of the operation and maintenance of the nuclear facility&quot;</li>
<li> Paragraphs&nbsp;14(2)(<em>a</em>) and (<em>c</em>)of the <em>Class&nbsp;I Nuclear  Facilities Regulations</em> states that &quot;every licensee who operates a  Class&nbsp;I nuclear facility shall keep a record of (<em>a</em>)&nbsp;operating and maintenance procedures&quot; and &quot;(<em>c</em>)&nbsp;the results of the inspection  and maintenance programs referred to in the licence&quot;</li>
<li> Subsection 14(4) of the <em>Class&nbsp;I Nuclear Facilities Regulations</em> states that&quot; Every person who is required by this section to keep a record  referred to in paragraph (2)(<em>a</em>) to (<em>d</em>) or (3)(<em>a</em>) to (<em>d</em>) shall retain  the record for 10 years after the expiry date of the licence to abandon issued  in respect of the Class I nuclear facility.&quot;</li>
</ul>
<a name="1.4"></a>
<h3><a name="P130_7822"></a>1.4 International standards</h3>
<p>This document is consistent with  the philosophy and technical content of modern codes and standards. In  particular, this regulatory document is based in part on the following  international publications:</p>
<ul>
<li><em>Ageing Management for Nuclear Power Plants</em>,  Safety Guide NS-G-2.12 from the International Atomic Energy Agency  (IAEA)&nbsp;[1]</li>
<li><em>Safe Long Term Operation of Nuclear Power Plants</em>, Safety Report Series No.&nbsp;57, from the IAEA&nbsp;[2]</li>
<li><em>Glossary of Nuclear Power Plant Ageing</em> from  the Organisation for Economic Cooperation and Development (OECD), Nuclear  Energy Agency&nbsp;[3]</li>
</ul>
<a name="2.0"></a>
<h2><a name="P135_8481"></a>2.0 General Concepts</h2>
<a name="2.1"></a>
<h4><a name="P139_9010"></a>2.1 Aging and obsolescence of  structures, systems and components</h4>
<p><strong>Guidance</strong></p>
<p> The SSCs  of an NPP experience two kinds of time-dependent changes:</p>
<ul>
<li> physical aging, in which the  physical and/or performance characteristics of SSCs degrade with time or use</li>
<li> technology aging or obsolescence,  in which SSCs become out-of-date relative to current knowledge, standards and  technology</li>
</ul>
<p> Over time, and if not properly  managed, physical aging can reduce the ability of a structure, system or  component to perform its safety functions within the limits and specifications  assumed in the design basis and safety analysis. Several aging mechanisms can  combine synergistically to cause unexpected or accelerated aging effects, or  premature failure of a component or structural element. The aggregate of multiple  degraded components or elements can significantly degrade the safety  performance of a system or structure. For instance, while individual degraded  components might meet their respective fitness-for-service criteria, the  combined effect of all the multiple degraded components could still result in  unacceptable safety performance of a system or facility.</p>
<p> NPP safety can also be affected if  obsolescence of SSCs is not identified and corrected before associated declines  occur in their reliability or availability. This is more likely to apply to  systems and components (particularly instrumentation and control) rather than  the main structural elements of a facility (although there are examples of the  latter, such as concrete expansion anchors). SSCs at risk of obsolescence need  to be identified to ensure that an adequate supply of spare parts is available  until an appropriate solution is found. The solution will depend on the  particular circumstances, but may involve providing alternative components or  items of equipment that can carry out the same safety duty. It could also involve  redesigning the facility to remove the need for the obsolescent system or  components.</p>
<p> Physical aging and obsolescence of SSCs  can lead to increased probability of failure or common&ndash;cause failures, as well  as reduced defence in depth. Other consequences may include: </p>
<ul>
<li>the need to derate the reactor power  to maintain safety margins </li>
<li>forced or unplanned outages </li>
<li>significantly extended or more  frequent maintenance outages </li>
<li>additional inspections </li>
<li>corrective maintenance and repairs </li>
<li>increase in dose to the associated  workers </li>
<li>or, in extreme cases, the premature shutdown of a facility </li>
</ul>
<p>Accordingly, both physical aging  and obsolescence of SSCs in NPPs should be understood and managed effectively  and proactively at each stage of the lifecycle of an NPP and its SSCs. This  should begin with design, fabrication and construction and commissioning, and  continue through operation (including extended or long-term operation, and  during any extended shutdowns) and during decommissioning. Particular attention  should be paid to aging phenomena that might affect the availability of SSCs that,  directly or indirectly, have an adverse effect on the safe operation of the NPP.  Attention should also be paid to aging effects on SSCs that do not have safety  functions, but whose failure could prevent safety-related SSCs from performing  their intended functions for design-basis accidents, or that should be relied  upon for design extension conditions. Specific requirements for the different  lifecycle phases are provided in section 3.0.</p>
<a name="2.2"></a>
<h3><a name="P126_7978"></a>2.2 Systematic and integrated  approach to aging management</h3>
<p><strong>Guidance</strong></p>
<p>Effective aging management uses a  systematic approach providing an integrated framework for coordinating all  supporting programs and activities associated with the understanding, control,  monitoring and mitigation of aging effects at the facility. This approach (see  figure 1) is an adaptation of Deming&#39;s &quot;PLAN-DO-CHECK-ACT&quot; cycle related to the  aging management of an SSC&nbsp;[2]:</p>
<ol>
<li>Effective  aging management of a system, structure or component relies upon an understanding  of how it ages. This understanding involves consideration  of the design basis (including applicable codes and standards), safety  analysis, safety functions, design and fabrication, materials, operation and  maintenance history, generic and facility-specific operating experience,  relevant research results, and identification of potential obsolescence  concerns.</li>
<li>The PLAN activity involves coordinating,  integrating, and modifying existing programs and activities that relate to  managing the aging of a system, structure or component, and if necessary,  developing new programs. This activity includes making provisions for spare  parts and long&ndash;term service agreements with suppliers.</li>
<li>The DO activity is the  minimization of expected degradation of a system, structure or component  through its &quot;careful&quot; operation or use in accordance with operating procedures  and technical specifications.</li>
<li>The CHECK activity is the timely  detection and characterization of significant degradation through inspection  and monitoring of a structure or component, and the assessment of observed  degradation to determine the type and timing of corrective actions required.</li>
<li>The ACT activity is the timely  mitigation and correction of component degradation through appropriate  maintenance and design modifications, including component repair and  replacement of a structure or component.</li>
</ol>
<p>This process relies on the  continuous improvement of an aging management program, based on improved  understanding of component aging and on the results of self-assessment and peer  reviews. The information obtained through this approach provides important  inputs to existing facility programs, such as maintenance and operations.</p>
<p> In practice, effective aging  management requires the involvement and support of many internal and external  organizations, and essential facility programs and processes. Examples include:<br />
</p>
<ul>
<li>safety analysis:
<ul>
<li> RD-310 and GD-310, <em>Safety Analysis for Nuclear Power Plants</em> [4,5]</li>
<li> S-294, <em>Probabilistic Safety Assessment for Nuclear Power Plants</em> [6]</li>
</ul>
</li>
<li> design, engineering change control:
<ul>
<li> RD-337, <em>Design of New Nuclear Power Plants</em> [7]</li>
<li> CSA N285, <em>General requirements for pressure-retaining systems and components in  CANDU nuclear power plants</em>&nbsp;[8]</li>
<li> CSA N286, <em>Management system requirements for nuclear facilities</em>&nbsp;[9]</li>
<li> CSA N287.1, <em>General requirements for concrete containment structures for nuclear  power plants</em>&nbsp;[10]</li>
<li> CSA N291, <em>Requirements for safety-related structures for CANDU nuclear power  plants</em>&nbsp;[11]</li>
</ul>
</li>
<li> periodic and in-service inspection  programs:
<ul>
<li> CSA N285.4, <em>Periodic inspection of CANDU nuclear power plant components</em> [12]</li>
<li> CSA N284.5 <em>Periodic inspection of CANDU nuclear power plant containment components</em> [13]</li>
<li> CSA N287.7, <em>In-service examination and testing requirements for concrete  containment structures for nuclear power plants</em> [14]</li>
</ul>
</li>
<li> equipment reliability:
<ul>
<li> RD/GD-98, <em>Reliability Programs for Nuclear Power Plants</em> [15]</li>
</ul>
</li>
<li> maintenance programs:
<ul>
<li> RD/GD-210, <em>Maintenance Programs for Nuclear Power Plants</em> [16]</li>
</ul>
</li>
<li> environmental  qualification programs:
<ul>
<li> CSA N290.13, <em>Environmental qualification of equipment for CANDU nuclear power plants</em> [17]</li>
</ul>
</li>
<li> operating procedures, chemistry  programs:
<ul>
<li> CSA N286, <em>Management system  requirements for nuclear facilities</em> [9]</li>
</ul>
</li>
<li> operating experience, significant  events analysis and research programs:
<ul>
<li> S-99, <em>Reporting Requirements for Operating Nuclear Power Plants</em> [19]</li>
</ul>
</li>
</ul>
<p> While each of these facility  programs and processes contribute to aging management, this is usually not  their primary purpose or focus; none of these programs or processes, in  themselves, provides a complete program or process for managing the aging of SSCs.</p>
<p>Reliability and maintenance programs  [15, 16] usually provide for a performance-based approach to ensure component  reliability. These programs include maintenance, testing and surveillance  activities, but they tend to focus primarily on:</p>
<ul>
<li> active SSCs, such as shutoff / control rod drives, cooling fans,  diesel/gas turbine generators, motors</li>
<li> SSCs that can be relatively more  easily replaced during a maintenance outage, such as batteries, switches,  transistors, valves, snubbers and supports</li>
</ul>
<p> They typically do not include  passive, long-life SSCs (such as reactor assembly components, fuel channels,  feeders, steam generators, pressure vessels and piping, structures and cables)  that are difficult or impossible to replace or change except in an extended  maintenance or refurbishment outage.</p>
<p> Inspection and surveillance  programs provide information used to confirm the current condition or fitness  for service of these SSCs, but this information addresses only the CHECK activity  in figure 1.</p>
<p> Lifecycle management plans are  developed for structures and components, but do not typically consider the  effects of other components or overall system safety performance. An important aspect  is the determination of the impact of aging on facility safety, including  safety margins as determined through an updated safety analysis, which requires  a systematic and integrated approach to aging management.</p>
<p id="fig1">Figure 1: A systematic and integrated approach to aging management [1]</p>
<img src="/eng/acts-and-regulations/regulatorydocuments/published/html/rd334/images/rd-334-e.png" alt=""/>
<p><a href="/eng/acts-and-regulations/consultation/comment/regdoc2-6-3/longdesc/longdesc">Figure 1: Text Equivalent</a></p>
<p> The licensee&#39;s management system  processes should therefore include requirements to ensure there is a documented  overall integrated AMP framework for the NPP. The integrated AMP framework  should provide a comprehensive, umbrella-type program. Alternatively, the AMP  framework could include a &quot;road map&quot; document that demonstrates how the current  processes and programs meet requirements for effective aging management. Aging management  does not necessarily replace existing programs but, on the basis of evaluation,  modifies them (reduces, enhances, eliminates, or supplements them) to achieve a  systematic, integrated program for effective aging management.</p>
<p> SSC-specific or mechanistic-based  AMPs should be established and implemented in accordance with the licensee&#39;s  integrated AMP framework, and should address the attributes of an effective AMP  as presented in Appendix A. The scope of the AMP for SSCs should be  commensurate with the importance to safety, design function and required  performance of the SSCs, and its effect on the safe operation of the NPP. For  example, the critical life-limiting NPP SSCs of current CANDU reactors â€“ such  as fuel channels, heat transport feeder piping, steam generators, reactor  assembly and structures, and containment structures â€“ will have detailed life  cycle management plans, as will their SSC-specific AMPs. Other types of mechanistic-based  AMPs include flow-accelerated corrosion and fatigue monitoring.</p>
<p> Existing facility programs or  practices that are credited as AMPs (such as water chemistry, periodic and  in-service inspection, and environmental qualification) should be evaluated  against the attributes listed in Appendix A. Programs that do not include these  attributes should be modified as appropriate. For example, existing maintenance  or inspection programs or practices may be adequate for the aging management of  an SSC, provided they address the attributes listed in Appendix A.</p>
<p> Specific requirements for the  licensee&#39;s integrated AMP framework and associated AMPs are provided in section  4.0.</p>
<a name="3.0"></a>
<h2><a name="P153_9844"></a>3. Proactive Strategy for Aging  Management</h2>
<p>Aging management activities shall  be implemented proactively throughout the lifecycle of an NPP or SSC (e.g., in  design, fabrication and construction, commissioning, operating, and  decommissioning).</p>
<p><strong>Guidance</strong></p>
<p> This document emphasises the need  for proactive consideration of aging management during each lifecycle phase of  an NPP: design, construction, commissioning, operation (including long-term operation  and extended shutdowns) and decommissioning. The lifecycle phases can apply to  individual SSCs as well as the entire NPP.</p>
<a name="3.1"></a>
<h3><a name="P164_11373"></a>3.1 Design</h3>
<p>Appropriate measures shall be taken  and design features shall be introduced in the design stage to facilitate  effective aging management throughout the lifetime of the NPP.</p>
<p> Aging management shall also be  considered in the design of modifications to existing operating facilities, and  for design changes related to modifications and repairs or replacements of  individual SSCs.</p>
<p><strong>Guidance</strong></p>
<p> A proactive approach to aging  management begins with the design phase during which important decisions having  significant impact for preventing and managing aging effects are made.</p>
<p> RD/GD&ndash;337, <em>Design of New Nuclear Power Plants</em>&nbsp;[7] establishes design  requirements for new NPPs which include taking into account the effects of  aging and wear of SSCs. This document applies to new facilities, as well as to  future design changes, repairs and replacements that apply to operating facilities  and SSCs.</p>
<p> The requirement to take appropriate  measures, and to introduce design features â€“ during the design stage â€“ to  facilitate effective aging management, complements the requirements in RD/GD-337.  The following aspects related to aging management should be considered at the  design stage:</p>
<ol>
<li>apply a systematic approach at  the design stage to ascertain the understanding of aging of SSCs, in order to  evaluate effective approaches and design features for aging prevention,  monitoring and mitigation, and to establish AMPs for SSCs (see  sections&nbsp;4.3, 4.4, and&nbsp;4.6)</li>
<li>consider the effects and  interactions between mechanical, thermal, chemical, electrical, physical,  biological and radiation stressors on materials properties, materials aging and  degradation processes. In design documentation, demonstrate how past relevant  generic aging issues, relevant aging management experience, and research  results are addressed</li>
<li>define the safe service life or  qualified life for SSCs in the design documentation, with an assessment of  design margins that takes into account all known aging and wear mechanisms and  potential degradation, including the effects of testing and maintenance  processes. Identify SSCs that have shorter service lives than the nominal  design life, and provide management strategies in the design documentation</li>
<li>consider aging effects under  design-basis conditions, including transient conditions and postulated  initiating event conditions, in the specifications for equipment qualification  programs; e.g., environmental qualification and seismic qualification programs</li>
<li>include features in the plant  layout and design of SSCs to facilitate inspection, testing, surveillance,  maintenance, repair, and replacement activities, and to keep potential  radiation exposures from these activities as low as reasonably achievable</li>
<li>specify the reference  (baseline) and other pre-service, inaugural, or in-service inspection and test  data that is required to be collected and documented for aging management  purposes during fabrication, construction, commissioning, operation, and  decommissioning</li>
<li>identify potential obsolescence  issues for SSCs, evaluate effects on safety and reliability performance, and  provide management strategies</li>
<li>in design documents, specify  any special process applied to fabrication (or manufacturing) and construction  of SSCs that prevent, mitigate, or eliminate known aging mechanisms;  e.g.,&nbsp;heat treatment, surface finishing, cure time</li>
<li>specify required provisions for  aging management in procurement documents for new facilities and SSCs,  including documents from suppliers and other contractors (design institutions,  vendors, manufacturers, inspection agencies, etc.) </li>
</ol>
<p>Aging management is also to be  considered in the design of modifications to existing operating facilities, and  for the design of modifications, repairs, and replacements of individual SSCs.  This does not preclude the use of like-for-like items for repairs and  replacements; however, if failure or degraded performance of a structure,  system or component is caused by premature aging, then consideration should be  given to incorporating improvements that will prevent or slow down the aging  effects. In refurbishment projects, the change-out of all of the pressure tubes  is considered a &quot;replacement&quot; activity and the change-out of all the feeder  pipes is considered a &quot;repair&quot; activity. In both of these examples, aging  management should be an important consideration in the design (e.g., selection  of improved materials, increased wall thickness), fabrication (stress relief of  feeder pipe bends), and commissioning (baseline measurements) of these repair  and replacement activities.</p><h4>3.1.1 Aging management content in  safety analysis reports</h4>
<p>The safety analysis for the NPP  shall account for the cumulative effects of aging degradation of SSCs on  overall systems and facility safety performance&nbsp;[4,&nbsp;5,&nbsp;6].</p>
<p> Periodic reviews of the safety  analysis reports are to include operating experience and research findings with  respect to aging and the implementation of the results of that analysis (see  also section&nbsp;3.4.1).</p>
<p><strong>Guidance</strong></p>
<p> The safety analysis for the NPP  should be based on complete and accurate design and operational information and  is to account for the cumulative effects of aging degradation of SSCs on  overall systems and facility safety performance&nbsp;[4,&nbsp;5,&nbsp;6].  Significant uncertainties in analysis or data relevant to aging assumptions,  including those associated with NPP performance, operational measurements, and  modelling parameters, should be identified and considered.</p>
<p>
The  safety analysis report for the NPP should address the following items relating  to aging management:</p>
<ol>
<li>an outline of the proactive  strategy for aging management and prerequisites for its implementation</li>
<li>safety-significant SSCs of the  NPP that could be affected by aging</li>
<li>assumptions, methods,  acceptance criteria, and data used to account for the effects of the aging of  SSCs in the safety analysis, including any time-limited assumptions and failure  data for probabilistic safety assessments</li>
<li>critical service conditions,  operational limits and conditions, and any other parameters to be monitored  and/or controlled that affect aging assumptions used in safety analyses or  equipment qualification</li>
<li>data and information to be  collected for aging management in order to confirm that safety analysis  assumptions and acceptance criteria continue to be met</li>
</ol>
<a name="3.2"></a>
<h3><a name="P209_19671"></a>3.2 Fabrication, construction, and installation</h3>
<p>Aging management shall be  considered in the fabrication, construction, and installation processes for new  NPPs, and the processes for modifications, repairs, and replacements of SSCs for  existing operating NPPs.</p>
<p>
Methods to ensure that fabrication  (or manufacturing), construction, and installation processes do not adversely  affect aging performance of SSCs shall be defined in relevant procedures.</p>
<p><strong>Guidance</strong></p>
<p> Fabrication and construction  practices can have a significant effect on the aging resistance of SSCs, which  often only become apparent much later in the operating life. Provisions to  monitor, manage, and control aging degradation of SSCs should therefore be  established and implemented, to ensure that the fabrication, construction, and  installation processes do not adversely affect the aging resistance of SSCs.  These provisions should take account of current aging management knowledge and  experience, and other relevant factors affecting aging and aging management of  SSCs.</p>
<p> The  licensee should ensure the following items are taken into consideration:</p>
<ol>
<li>current knowledge about  relevant aging mechanisms, effects/degradation, and possible preventive and  mitigation measures are taken into account in fabrication, construction, and  installation of SSCs </li>
<li>relevant information on the  factors affecting aging management and parameters influencing aging degradation  is clearly specified in procurement documents and provided to SSCs suppliers  and contractors</li>
<li>suppliers and contractors  adequately address factors affecting aging management</li>
<li>reference (baseline) data  required for aging management are collected and documented</li>
<li>surveillance specimens for  specific aging monitoring programs are made available and installed in  accordance with design specifications</li>
</ol>
<a name="3.3"></a>
<h3><a name="P211_19831"></a>3.3 Commissioning</h3>
<p>Aging management shall be  considered in the commissioning activities for new NPPs and in projects for  existing NPPs that involve major repairs, replacements and modifications of SSCs.<br />
Appropriate measures shall be taken  to ensure that baseline data required for aging management of SSCs is recorded  during commissioning.</p>
<p> Critical service conditions and  parameters, such as those considered in equipment qualification and aging  assumptions in the design and safety analyses, shall be verified.</p>
<p><strong>Guidance</strong></p>
<p> The  following should be taken into account in commissioning activities:</p>
<ol>
<li>relevant information on the  factors affecting aging management and parameters influencing aging degradation  should be identified, taken into account, monitored, and controlled in  commissioning</li>
<li>required baseline or inaugural  inspection data for aging management should be recorded</li>
<li>critical service conditions and  parameters, such as those considered in equipment qualification and aging  assumptions in safety analyses, should be verified as being in compliance with  the design and safety</li>
<li>special attention should be  paid to identification and recording of thermal and radiation hot spots, and to  measurement of vibration levels</li>
</ol>
<a name="3.4"></a>
<h3><a name="P266_25241"></a>3.4 Operation</h3>
<p>Licensees shall establish and  implement processes, programs and procedures to manage aging and obsolescence  of SSCs, to ensure that required safety functions are maintained during the facility  operation phase.</p>
<p> Facility operations shall be  monitored and recorded to demonstrate compliance with critical service  conditions, operational limits and conditions, and any other parameters that  were identified (see section 3.1.1) as affecting aging assumptions used in  safety analyses or equipment qualification.</p>
<p> In the event of operational changes  or modifications to SSCs, a review of possible changes in environmental or  process conditions (e.g., flow pattern, velocity, vibration) that could affect  aging and failure of SSCs (see section 3.1) shall be performed.</p>
<p> Corrective actions identified by  AMP activities shall be managed within the NPP corrective action program.<br />
Measures shall be taken to store spare  or replacement parts and consumables in appropriately controlled environments (i.e.,  with appropriate temperatures and moisture levels, and to prevent chemical  attack or dust accumulation), taking shelf life into account, in order to  preclude aging degradation.</p>
<p><strong>Guidance</strong></p>
<p> During the facility operating  phase, licensees are expected to establish and implement an overall facility  AMP framework that ensures the coordination and communication between all  relevant facility and external programs for managing aging and obsolescence of  SSCs. A systematic approach (including appropriate organizational arrangements,  data collection and record keeping, SSC screening and aging evaluations) should  be applied in order to ensure:</p>
<ol>
<li>all SSCs that are susceptible  to aging effects or obsolescence that can, directly or indirectly, have an  adverse effect on the safe operation of the NPP are identified</li>
<li>aging effects of SSCs and  potential impacts on safety functions due to aging and obsolescence are  systematically identified, evaluated and documented</li>
<li>effective actions for  preventing, monitoring and mitigating aging are evaluated and implemented to  ensure that the required SSCs and safety functions will not be impaired during  normal operation and design-basis accident conditions, as well as those relied  on for design-extension conditions </li>
</ol>
<p>Additional detail is provided in  section 4.0.</p>
<p> Critical service conditions, operational  limits and conditions, and other parameters identified as affecting aging  assumptions used in safety analyses, design or equipment qualification should  be monitored and recorded to ensure compliance, and to provide for timely  detection, reporting and evaluation of unexpected service conditions â€“ so that  corrective actions can be taken before NPP safety is negatively impacted.</p>
<p> Procedures should be in place to  ensure that any changes to system operations or design modifications are  reviewed for the effect on environment or process conditions (e.g.,  temperature, flow pattern, velocity, vibration, radiation fluence) of SSCs,  including neighbouring or connected SSCs, such that they do not introduce a  detrimental aging effect or new failure mechanism. In such cases, AMPs should  be updated accordingly.</p>
<p> Procedures should be in place to  ensure that if a new aging mechanism is discovered (e.g., through feedback from  inspections, surveillance, operating experience or research findings), an  appropriate aging management review is carried out.</p><h4>3.4.1 Review and update of safety  analysis</h4>
<p>As part of the safety analysis  review and update, licensees shall account for the effects of the aging of SSCs,  research findings, and advances in knowledge and understanding of aging  mechanisms. This shall include an evaluation of the cumulative effects of the aging  of SSCs on overall system and facility safety performance, as well as risk.</p>
<p><strong>Guidance</strong></p>
<p> The  safety analysis should be periodically reviewed and updated to account for  changes in NPP configuration and conditions, operating parameters and  procedures, research findings, and advances in knowledge and understanding of  physical phenomena.</p>
<p> Data  and information collected from AMPs should be reviewed to confirm that safety  analysis assumptions, credited parameters and predictions remain valid, and  that limiting criteria and required design margins continue to be met as the facility  ages. </p><h4>3.4.2 Long&ndash;term operation</h4>
<p>The licensee shall complete an in&ndash;depth  review of the effects of aging on NPP safety and evaluate the effectiveness of  AMPs for long&ndash;term operation in order to identify corrective actions and areas  for improvement. Condition assessments shall be completed as part of the review  of aging for long&ndash;term operation (see section&nbsp;4.5).</p>
<p> The  review shall demonstrate that:</p>
<ol>
<li>all SSCs that can, directly or  indirectly, have an adverse effect on the safe operation of the NPP are  evaluated for the proposed period of long&ndash;term operation</li>
<li>the effects of aging will  continue to be identified and managed for these SSCs during the planned period  of long&ndash;term operation</li>
<li>all safety analyses involving  time&ndash;limited assumptions are validated for the proposed period of long&ndash;term  operation to ensure that the aging effects will be effectively managed (i.e.,  to demonstrate that the intended function of an SSC will remain within the  design safety margins throughout the planned period of long&ndash;term operation)</li>
</ol>
<p>The results of the review of aging  management for long&ndash;term operation shall be documented, and the findings shall  be addressed.</p>
<p><strong>Guidance</strong></p>
<p> Long-term  operation of an NPP denotes operation beyond the assumed design life of the facility,  which has been justified by safety assessment, considering life limiting  processes and features for SSCs. For the current fleet of reactors in Canada, this is  operation beyond approximately 30 years or 210,000 effective full-power hours. A  review of the actual condition of SSCs and of the management of aging for long-term  operation should be conducted in accordance with CNSC regulatory document RD&ndash;360, <em>Life Extension of Nuclear Power Plants</em> [19], and IAEA Safety Guide N&ndash;S&ndash;G 2.10, <em>Periodic  Safety Review of Nuclear Power Plants</em> [20].</p><h4>3.4.3 Extended shutdowns</h4>
<p>Licensees shall review and, where  necessary, revise SSC-specific AMPs to ensure that relevant factors affecting  aging degradation are taken into account for SSCs placed in lay-up or safe&ndash;storage  states during extended shutdowns.</p>
<p> Required provisions for aging  management shall be defined in system lay-up specifications or preservation  plans, including requirements for any condition assessments to be completed  prior to the return to service of an NPP following an extended shutdown (see  section 4.5).</p>
<p><strong>Guidance</strong></p>
<p> Extended shutdowns are reactor  shutdowns lasting for a period exceeding one year, and exclude regular  maintenance outages. During extended shutdowns, SSCs may need to be placed in  temporary lay-up or safe-storage states that require supplementary measures and  controls to prevent aging degradation.</p>
<p> The review and revision to  SSC-specific aging management processes may take into consideration the  differences in hazard potential and operating conditions between the temporary  lay-up or safe storage states and the normal operating states.</p>
<p> Provisions for aging management  should include defining any requirements for a condition assessment or any  other aging management activities. Not all condition assessments in the scope  of the aging management program need to be completed prior to return to service  from an extended shutdown. The scope of the condition assessments should be  based on the lay-up conditions, the results and time since the last condition  assessment and the duration of the shutdown.</p>
<p> The provisions for aging  management, including scope of condition assessments, should be reassessed if  the duration of the shutdown is greatly extended beyond what was originally  anticipated (for example, due to unforeseen issues or delays in the return to  service).</p>
<a name="3.5"></a>
<h3><a name="P306_30164"></a>3.5 Decommissioning</h3>
<p>Licensees shall establish and  implement aging management activities in decommissioning plans and procedures  for SSCs that are required to remain available and functional during  decommissioning.</p>
<p><strong>Guidance</strong></p>
<p> During the transition period from  reactor unit shutdown to decommissioning and, where required, to facilitate  decommissioning, appropriate aging management arrangements need to be continued  to ensure that required SSCs remain available and functional. This may require  implementing relatively long-term aging management provisions for certain SSCs;  for example, containment and spent fuel bay systems, fire protection systems,  lifting equipment and monitoring equipment. Such provisions must be consistent  with licensing requirements. </p>
<a name="4.0"></a>
<h2><a name="P171_12015"></a>4.0 Integrated Aging Management</h2>
<p>Licensees shall apply a systematic and  integrated approach to establish, implement and improve appropriate programs to  manage aging and obsolescence of SSCs. NPP management processes shall include  requirements to ensure there is a documented overall integrated AMP framework  for the NPP that addresses the following elements:</p>
<ol>
<li>organizational arrangements</li>
<li>data collection and record  keeping</li>
<li>screening and selection process  for aging management</li>
<li>evaluations for aging  management</li>
<li>condition assessments</li>
<li>SSC-specific AMPs</li>
<li>management of obsolescence</li>
<li>interfaces with other  supporting facility programs</li>
<li>implementation of AMPs</li>
<li>review and improvement of AMPs</li>
</ol>
<p>SSC-specific  AMPs shall be implemented in accordance with the overall integrated AMP  framework.</p>
<p><strong>Guidance</strong></p>
<p> The integrated AMP framework should  provide a comprehensive, umbrella-type program or, alternatively, a &quot;road map&quot;  document that demonstrates how the current processes and programs meet the  requirements for effective aging management. The AMP framework would be subject  to CNSC compliance program inspections and reviews.</p>
<p> Detailed requirements are provided  in the following sections. Alternative approaches may be acceptable, provided  these elements are addressed in an equivalent manner that is demonstrated to be  effective in managing aging.</p>
<a name="4.1"></a>
<h3><a name="P173_12187"></a>4.1 Organizational arrangements for  effective aging management</h3>
<p>The NPP management processes shall include requirements to ensure  that appropriate organizational arrangements are established to facilitate the  effective implementation of AMPs.</p>
<p><strong>Guidance</strong></p>
<p> The following aspects should be considered:</p>
<ol>
<li>established policy and  objectives of the overall integrated AMP framework, allocated resources (such  as human, financial, training, tools, and equipment), and processes to monitor  the program to ensure it is meeting its objectives</li>
<li>defined responsibilities for  the implementation of aging management activities</li>
<li>provision of training to  operations, maintenance, engineering, and other pertinent staff to ensure they  have adequate awareness and understanding of aging management concepts and  program requirements</li>
<li>external organizations required  for specific services related to aging management, such as specialized  inspections, assessments, research, and standards development</li>
</ol>
<a name="4.2"></a>
<h3><a name="P178_12865"></a>4.2 Data collection and record-keeping system to support aging management</h3>
<p>The licensee shall have an appropriate data collection and record-keeping  system to support aging management activities and to provide a basis for  decisions on the type and timing of aging management actions.</p>
<p> Data entered into the  system shall be auditable to demonstrate an adequate verification of the data  entered, detailed description of the basis for any conclusion, and to trace all  applicable sources of information.</p>
<p><strong>Guidance</strong></p>
<p> A data collection and record keeping system should be established  early in the life of an NPP to support the AMPs. Data and records relevant to  aging management include:</p>
<ol>
<li>reference (baseline) data on  the design, fabrication, and construction of the facility or SSCs and  conditions at the beginning of the service life, including results of equipment  qualification tests, inspections, commissioning tests, and mappings of  environmental conditions during commissioning</li>
<li>data on the operating history  of the facility, service conditions for SSCs (including transient data),  chemistry conditions, SSC condition indicators, event reports, and data on the  testing of availability and failure of SSCs </li>
<li>results of in&ndash;service  inspections and material surveillance, including inspection specifications and  results, as well as findings that exceed reporting levels</li>
<li>data on the maintenance  history, including data on the monitoring of the condition and maintenance of  components and structures, assessments of aging related failures or significant  degradation of SSCs, including results of root-cause analyses</li>
<li>records of SSC aging evaluations  and condition assessments, performance indicators of AMP effectiveness, SSC  health indicators, internal and external operating experience, and research  results</li>
</ol>
<a name="4.3"></a>
<h3><a name="P179_12890"></a>4.3 Screening and selection of  structures, systems and components</h3>
<p>A documented screening and selection process shall be used to  establish the list of SSCs to be included in the scope of the overall  integrated AMP framework. This process shall include SSCs susceptible to aging  degradation or aging effects that can, directly or indirectly, have an adverse  effect on the safe operation of the NPP. The process shall include SSCs that do  not have safety functions, but whose failure could prevent safety-related SSCs from  performing their intended functions.</p>
<p><strong>Guidance</strong></p>
<p> The screening and selection requirements in section&nbsp;4.3 are  commensurate with RD/GD&ndash;210, <em>Maintenance  Programs for Nuclear Power Plants</em>&nbsp;[16], which covers all SSCs within  the bounds of the facility. The selection process for aging management will  include long-lived passive SSCs that may not be covered by maintenance  programs. The screening and selection requirements for aging management are  intentionally broader in scope than those of RD/GD-98, <em>Reliability Programs for Nuclear Power Plants</em>&nbsp;[15], which  focuses on reliability performance of primarily active components in systems  important to safety.</p>
<p> The screening and selection process for SSCs should follow a  safety-based approach. The following list is an example of such considerations:</p>
<ol>
<li>From a comprehensive list of  all SSCs, identify those whose malfunction or failure could lead directly or  indirectly to the loss or impairment of a safety function.</li>
<li>Ensure that the list includes  all SSCs whose degradation may challenge or affect the assumptions made in the safety  analyses.</li>
<li>Ensure that the list includes all  SSCs relied upon for design extension conditions (for example, emergency  filtered containment vent, provisions for emergency water makeup, equipment to  mitigate hydrogen and combustible gases, and dedicated instrumentation for beyond&ndash;design-basis  accidents).</li>
<li>For each SSC, identify those  structural elements and components whose failure could lead directly or  indirectly to the loss or impairment of a safety function. This may include  consideration of surrounding or neighbouring structures, piping, components and  supports that are not safety-related, but whose failure could affect a  safety-related item.</li>
<li>From the list of structural  elements and components, identify those for which aging degradation has the  potential to cause component failure; provide justification for the excluded  components.</li>
<li>To ensure that the aging  evaluation is resource-effective, arrange the final list of elements and  components into related categories.</li>
</ol>
<p>This screening and selection process should consider relevant  operating experience and research findings.</p>
<p>For SSCs that are not included in the AMP, appropriate provisions  should be implemented to ensure their safety significance will not change  throughout the facility&#39;s life because of degradation due to aging.</p>
<p>The documentation of the screening and selection process should  include the information sources and any criteria used, and arrange the final  list of elements and components into related categories.</p>
<p>The records produced should be identified as permanent records.</p>
<a name="4.4"></a>
<h3><a name="P190_14207"></a>4.4 Evaluations for aging management</h3>
<p>The NPP management  processes and procedures shall include requirements for conducting,  documenting, and keeping records of evaluations for aging management. The  evaluations address the following elements:</p>
<ol>
<li>understanding aging</li>
<li>preventive actions to minimize  and control aging degradation</li>
<li>methods for detection,  monitoring, and trending of aging effects</li>
<li>methods for mitigating aging  effects and corrective actions</li>
</ol>
<p>The procedure for conducting the evaluations for aging management  shall be documented, as well as the results of the evaluations.</p>
<p><strong>Guidance</strong></p>
<p> A recommended methodology is to conduct an evaluation of relevant  information and then document the findings (see Appendix B).</p>
<p> The results of operating experience, research and development, and  available previous aging evaluations (both generic and facility-specific) can  be used in the evaluations. Relevant applicable aging management reviews (i.e.,  those prepared by the licensee, suppliers or support organizations) should be  used to minimize duplication of effort, if available. Appropriate references  should be made, and an explanation of the use of these references should be  provided.</p>
<p> The results of the evaluations should summarize the pertinent aging  issues and effectiveness of current practices. They should also provide  recommendations for activities in the SSC aging management plan and for facility-supporting  programs in design, operation, and maintenance, and identify areas for further  research and development.</p><h4>4.4.1 Understanding of aging </h4>
<p>NPP management processes  shall include requirements for the evaluation of the current understanding of  aging for the selected structure, system or component.</p>
<p><strong>Guidance</strong></p>
<p> The current understanding  of aging for the selected structure, system or component should be documented  based on an evaluation of possible and actual aging mechanisms. The evaluation  is to consider the effects of aging degradation on SSC safety function, the  effect on the ability of other SSCs to perform their intended safety functions,  and other consequences of failure.</p>
<p> The evaluation should  identify:</p>
<ol>
<li>SSC design and licensing basis  requirements relevant to aging and aging management (including applicable codes  and standards, safety analysis, safety functions, and consequences of failure)</li>
<li>SSC materials, service conditions,  stressors, degradation sites, aging mechanisms and effects</li>
<li>indicators of the physical or  functional condition of SSCs (condition indicators)</li>
<li>anticipated obsolescence issues</li>
<li>quantitative or qualitative  models for predicting relevant aging effects, and any gaps in understanding</li>
<li>SSC life-limiting conditions  and acceptance criteria against which the need for corrective action is  evaluated</li>
<li>a list of data needs for the  assessment of SSC aging (including any deficiencies in availability and quality  of existing records)</li>
</ol><h4>4.4.2 Preventive actions to minimize and control aging degradation</h4>
<p>Methods to prevent and  control aging degradation shall be evaluated to establish appropriate actions  that can be taken.</p>
<p><strong>Guidance</strong></p>
<p> The evaluation should identify:</p>
<ol>
<li>preventive actions to be taken in design,  selection of materials and coatings, fabrication and construction practices,  commissioning, service conditions, and preventive operation and maintenance  practices (including specifications for SSC lay-up conditions)</li>
<li>parameters to be monitored or inspected to  ensure the preventive actions are effective</li>
<li>service  conditions (environmental conditions and operating conditions) to be maintained and operating practices aimed at slowing down  potential degradation of the structure or component</li>
</ol><h4>4.4.3 Methods for detecting, monitoring, and trending aging effects</h4>
<p>Methods for the detection,  monitoring, and trending of aging effects shall be evaluated to establish  appropriate actions that can be taken.</p>
<p><strong>Guidance</strong></p>
<p> The evaluation should  identify:</p>
<ol>
<li>parameters and condition  indicators for detecting, monitoring, and trending aging degradation of the  structure or component</li>
<li>effective technology  (inspection, testing, surveillance, and monitoring methods) for detecting aging  effects&nbsp;&ndash; with sufficient sensitivity, reliability, and accuracy&nbsp;&ndash; before SSCs fail</li>
<li>data to be collected to facilitate assessment of the aging of SSCs</li>
<li>data evaluation techniques (including  data analysis and trending) for recognizing significant degradation and for  predicting future performance of the SSCs </li>
</ol>
<p>National and international operating experience should be considered  in the evaluation. The evaluation of technology and methods should consider the  need for the detection of unexpected degradation, depending on how critical the  SSC is to safety. For example, while inspections to deal with known degradation  mechanisms may incidentally result in discovery of unexpected degradation,  there is no assurance that unexpected degradation will always be detected. Surveillance  programs involving the removal of items (e.g., pressure tubes, material  coupons) can assist in discovery of degradation mechanisms that were not  previously known.</p>
<p> As well, it is known that measurements of degradation on specific  components can demonstrate a large variation even for similar items (e.g.,  feeder pipe wall thinning, pressure tube flaws). The evaluation should take  into account the need for an appropriate level of statistical confidence that  significant degradation will not go undetected.</p>
<p> The evaluation should also include an assessment of the safety risks  to the facility and workers from the data collection activities.</p><h4>4.4.4 Methods for mitigating aging effects and corrective actions</h4>
<p>Methods for mitigating aging effects shall be evaluated to establish  appropriate corrective actions that can be taken.</p>
<p><strong>Guidance</strong></p>
<p>The evaluation should identify:</p>
<ol>
<li>operations, maintenance, repair  and replacement actions to allow timely mitigation of detected aging effects or  degradation</li>
<li>acceptance criteria against  which the need for corrective action is evaluated</li>
<li>corrective actions if a  component fails to meet the acceptance criteria </li>
</ol>
<p>The  effectiveness of existing methods and practices for mitigating aging  degradation should take account of relevant operating experience and research  results.</p>
<a name="4.5"></a>
<h3><a name="P196_14844"></a>4.5 Condition assessments</h3>
<p>NPP management processes shall include requirements to evaluate the  actual condition of a structure, system or component at the initiation of the  SSC-specific AMP and at periodic intervals throughout the service life of the  NPP or structure, system or component, as required, to validate AMP  effectiveness.</p>
<p> The procedure for  conducting condition assessments and the results shall be documented. Condition  assessments are used to establish the actual condition of an SSC, usually at  the initiation of the SSC-specific AMP, and certain times during the service  life of the NPP or SSC as required for validating AMP effectiveness. For  example, condition assessments are also completed as part of the review of  aging for extended or long-term operation (see section 3.4.2), and may be  required before an NPP returns to service after an shutdown period or SSC lay-up  (see section 3.4.3).</p>
<p> The condition assessments should  provide information on:</p>
<ol>
<li>the current performance and  condition of the SSC, including assessment of any aging related failures or  indications of significant material degradation, previously unidentified aging  mechanisms or effects, and comparisons against predictions for the aging  mechanisms and acceptance criteria</li>
<li>estimation of future  performance, degradation due to aging, and residual service life, where  feasible, of the SSC (i.e., the length of time the SSC is likely to meet its  function and performance requirements)</li>
<li>recommended follow-up or  prevention, monitoring, and mitigation measures to be completed and/or  incorporated into the AMP, including appropriate intervals for follow-up  condition assessments and areas for further research and development</li>
</ol>
<p>Condition assessments of  SSCs may be conducted as part of the evaluations for aging management (see section  4.4).</p>
<a name="4.6"></a>
<h3><a name="P203_15953"></a>4.6 SSC&ndash;specific aging management programs</h3>
<p>NPP management processes shall  include requirements to develop, document, and maintain a specific program for  the aging management of SSCs (or groups of structures and components) selected  by the screening process, or alternatively a program for managing a specific  aging mechanism or effect.</p>
<p> The SSC-specific AMPs shall be  documented and address the attributes of an effective AMP as listed in  Appendix&nbsp;A.</p>
<p><strong>Guidance</strong></p>
<p> AMPs should specify what range of  outcomes they can reasonably accommodate, and take into account the ability to  adjust the plans to outcomes outside of that range.</p>
<p> The scope of the SSC-specific AMP  should be commensurate with the importance to safety, design function and  required performance of the structure, system or component, and its effect on  the safe operation of the NPP. For example, the critical life-limiting SSCs of  current CANDU reactors&nbsp;&ndash; such as fuel channels, heat transport feeder piping  and steam generators&nbsp;&ndash; will have detailed lifecycle management plans as part of  their SSC-specific AMPs. AMPs may not necessarily be specific to SSCs, but could  instead focus on degradation mechanisms or operational requirements to control  or predict degradation; for example, programs for flow-accelerated corrosion,  water chemistry and fatigue monitoring.</p>
<p> Each SSC-specific AMP should cover  the nine attributes of an effective program (see Appendix A). Existing facility  programs that are credited as AMPs should be evaluated against the attributes  listed in Appendix A. Programs that do not include these attributes should be  modified as appropriate. For example, existing maintenance or inspection  programs or practices may be adequate for the aging management of an SSC,  provided they address the attributes listed in Appendix A.</p>
<p> The required attributes of  SSC-specific AMPs are typically implemented through several facility programs.  Recognizing this, the documentation of an SSC-specific AMP should provide, for  each attribute, a summary description of the SSC-specific application of the  relevant facility program(s) and references to NPP documents containing the  supporting basis/evidence.</p>
<p> It is up to the NPP licensee to  identify its AMP performance indicators. This could include the program health  indicators currently used in system health reports. Other examples of  indicators include:</p>
<ol>
<li>material condition with respect to  acceptance criteria</li>
<li>trends of data relating to failure  and degradation</li>
<li>comparison of preventive and  corrective maintenance efforts (e.g., in terms of person-years or cost)</li>
<li>number of recurrent failures and  instances of degradation</li>
<li>status of compliance with  inspection programs</li>
</ol>
<p>The AMP document should also  include a summary page that highlights the key information useful for  understanding and managing aging, including materials, degradation sites, aging  stressors and environment, aging mechanisms and effects, inspection and  monitoring requirements and methods, mitigation methods, regulatory  requirements, and acceptance criteria.</p>
<a name="4.7"></a>
<h3><a name="P204_15976"></a>4.7 Management of technological obsolescence</h3>
<p>The licensee shall establish a  program for management of technological obsolescence. The provisions for the  management of obsolescence shall be documented.</p>
<p><strong>Guidance</strong></p>
<p> The  program for management of technological obsolescence should address the following:</p>
<ol>
<li>spare parts supplies for  planned service life </li>
<li>long-term arrangements for  manufacturers and spare parts suppliers, and for required technical support</li>
<li>availability of documentation  to support maintenance and replacement of SSCs</li>
<li>availability of documentation and  technology to support development of equivalent SSCs, if needed</li>
<li>arrangements for modernization and technology updates</li>
</ol>
<a name="4.8"></a>
<h3><a name="P208_16307"></a>4.8 Interfaces with other supporting programs</h3>
<p>All supporting programs and activities that are credited as an integral part of the NPP aging management  shall be identified, and their interfaces and information requirements defined  in the overall integrated AMP framework document, including safety analysis&nbsp;[4,&nbsp;5,&nbsp;6],  maintenance&nbsp;[16], and reliability programs&nbsp;[15].</p>
<p><strong>Guidance</strong></p>
<p> The integrated AMP framework should  also identify the aging management information that needs to be provided as  inputs into other facility programs and activities. As an example,  section&nbsp;3.4.1 includes a requirement for data and information collected  from the AMP to be reviewed within the program for the periodic review and  update of the safety analysis.</p>
<a name="4.9"></a>
<h3><a name="P212_16692"></a>4.9 Implementation of aging management programs</h3>
<p>The  overall integrated AMP framework and SSC&ndash;specific AMPs and major actions related  to aging management shall be implemented under the licensee&#39;s management system  for the facility. <br />
Data identified in the AMP shall be  collected and recorded to provide a basis for decisions on the type and timing  of aging management actions.</p>
<p><strong>Guidance</strong></p>
<p> The implementation  of AMPS should provide a systematic aging management process, based on an understanding  of aging, consisting of the following aging management tasks (see figure&nbsp;1):</p>
<ol>
<li>planning activities, including  documentation of applicable regulatory requirements and safety and reliability  criteria, relevant programs and activities</li>
<li>operation within operating  guidelines aimed at minimizing the rate of degradation</li>
<li>inspection and monitoring  activities aimed at timely detection and assessment of aging degradation</li>
<li>maintenance activities aimed at  mitigating aging effects and corrective actions for unacceptable degradation</li>
</ol>
<a name="4.10"></a>
<h3><a name="P217_17136"></a>4.10 Review and improvement</h3>
<p>The effectiveness of the overall integrated AMP framework and SSC&ndash;specific AMPs shall be periodically reviewed using feedback from the program and performance indicators.</p>
<p> The licensee shall update AMPs and interfacing programs, and their implementation, to improve their effectiveness based on the results of the review as appropriate.</p>
<p> In accordance with S-99, <em>Reporting Requirements for Operating Nuclear Power Plants</em> [18], licensees are required to report the discovery of information that may reveal an aging effect or hazard that is different in nature, significantly greater in probability, or greater in magnitude than was previously  provided to the CNSC in licensing documents.</p>
<p><strong>Guidance</strong></p>
<p> The reviews should be conducted on an annual basis and documented. Program reviews should include consideration of the operating performance, inspection and maintenance histories, results of  condition assessments, event reports, information from the results of research and development, self assessments, and operating experience, current issues, and future actions. Recommendations and corrective actions for AMPs and  supporting programs should be implemented in a timely manner, as appropriate.</p>
<p> Consideration should be given to  arranging for peer reviews of AMPs to obtain an independent assessment, to  establish if they are consistent with generally accepted practices and to  identify areas for improvement.</p>
<p> Whenever an AMP deficiency is identified,  the licensee should assess its significance and, where appropriate, conduct a  root-cause determination and take corrective actions. AMPs should be adjusted  as appropriate in response to the new information. When a component fails to  meet the acceptance criteria, the cause of the component failure should be  identified and reviewed, in order to determine corrective actions that should  be implemented in a timely manner to prevent recurrences. Lead times to plan  and implement options can be a significant factor in aging management planning.  Therefore, it is recommended for AMPs to identify when work should be started, with  regard given to when critical options are needed in order to manage the range  of uncertainties. A confirmation process should be established to ensure that  corrective actions have been completed and are effective.</p>
<p> Adequately funded research and  development programs should be put in place to respond to any new aging issues  and to provide for continuous improvement of the understanding and  predictability of aging mechanisms and the causes of aging, and associated  monitoring and mitigation methods or practices. A strategic approach should be  made to promoting relevant long-term research and development programs.</p>
<a name="a"></a>
<h2><a name="P302_26654"></a>Appendix A: Attributes of an Effective Aging Management Program</h2>
<table border="1" className="widthFull">
<caption className="left">
Adapted from the International  Atomic Energy Agency Safety Guide <em>Ageing  Management of Nuclear Power Plants</em> NS&ndash;G 2.12 [1].
</caption>
<tr>
<th className="left" scope="col">Attribute</th>
<th className="left" scope="col">Description</th>
</tr>
<tr>
<td className="left">1. Scope of the aging management program (AMP) based on understanding of aging</td>
<td className="left">Systems, structures and components (SSCs) subject to aging management (structures include structural elements) <br />
Understanding of aging phenomena (significant aging mechanisms, susceptible sites):
<ul>
<li>design and licensing basis requirements relevant to aging</li>
<li>SSC materials, service conditions, stressors, degradation sites, aging mechanisms and effects</li>
<li>SSC condition indicators and acceptance criteria</li>
<li>quantitative or qualitative predictive models of relevant aging phenomena</li>
</ul></td>
</tr>
<tr>
<td className="left">2. Preventive actions to minimize and control degradation due to aging</td>
<td className="left">Identification of preventive actions<br />
Identification of parameters to be monitored or inspected<br />
Service conditions (i.e., environmental conditions and operating conditions) to be maintained and operating practices aimed at slowing down potential degradation of the structure or component</td>
</tr>
<tr>
<td className="left">3. Detection of aging effects</td>
<td className="left">Effective technology (inspection, testing and monitoring methods) for detecting aging effects before failure of the SSCs</td>
</tr>
<tr>
<td className="left">4. Monitoring and trending of aging effects</td>
<td>Condition indicators and parameters to be monitored<br />
Data to be collected to facilitate assessment of structure or component aging<br />
Assessment methods (including data analysis and trending)</td>
</tr>
<tr>
<td className="left">5. Mitigating aging effects</td>
<td>Operations, maintenance, repair and replacement actions to mitigate detected aging effects / degradation of SSCs </td>
</tr>
<tr>
<td className="left">6. Acceptance criteria</td>
<td>Acceptance criteria against which the need for corrective action is evaluated</td>
</tr>
<tr>
<td className="left">7. Corrective actions</td>
<td>Corrective actions if a component fails to meet the acceptance criteria</td>
</tr>
<tr>
<td className="left">8. Operating experience feedback and feedback of research and development (R&amp;D) results</td>
<td className="left">Mechanism that ensures timely feedback of operating experience and R&amp;D results (if applicable), and provides objective evidence that they are taken into account in the AMP</td>
</tr>
<tr>
<td className="left">9. Quality management</td>
<td>Organizational roles and responsibilities<br />
Administrative controls that document the implementation of the AMP and actions taken<br />
Indicators to facilitate evaluation and improvement of the AMP<br />
Confirmation (verification) process for ensuring that preventive actions are adequate and appropriate and all corrective actions have been completed and are effective<br />
Record-keeping practices to be followed</td>
</tr>
</table>
<a name="b"></a>
<h2><a name="P295_25980"></a>Appendix B: Sample Methodology for Aging Evaluation</h2>
<p>Adapted from the International  Atomic Energy Agency Safety Guide <em>Ageing  Management of Nuclear Power Plants</em> NS-G 2.12 [1].</p>
<h4>Understanding of aging</h4>
<ul>
<li>Design and specifications</li>
<li>Materials and material properties</li>
<li>Service conditions</li>
<li>Performance requirements</li>
<li>Operation and maintenance histories</li>
<li>Generic operating experience</li>
<li>Relevant research and development (R&amp;D) results</li>
</ul>
<p>Documentation of the information, including:</p>
<ul>
<li> current  understanding of the aging of structures, systems and components (SSCs) (e.g., aging  mechanisms and effects, sites of degradation, any analytical/empirical models  for predicting SSC degradation, any gaps in understanding of aging)</li>
<li> acceptance  criteria including applicable regulatory or code requirements, safety analysis  limits and conditions, and reliability targets</li>
<li> list of data requirements for the assessment of  SSC aging (including any deficiencies in availability and quality of existing  records)</li>
</ul>
<h4>Prevention of aging</h4>
<p>Evaluation of the effectiveness
of methods and practices for prevention of aging degradation of the SSC</p>
<p>Documentation of the information,
including:</p>
<ul>
<li>design,
materials, fabrication (or manufacturing) and construction, operations and
maintenance methods and practices to prevent aging degradation of the SSC</li>
<li>operating
conditions and practices that prevent or minimize the rate of aging
degradation of the SSC</li>
</ul>
<h4>Monitoring of aging</h4>
<p>Evaluation of monitoring methods, taking  into account relevant operating experience and research results.</p>
<p>Documentation of the information, including:</p>
<ul>
<li> functional  parameters and condition indicators for detecting, monitoring, and trending aging  degradation of the SSC</li>
<li> an  assessment of the capability and practicability of existing monitoring  techniques to measure these parameters and indicators with sufficient  sensitivity, reliability, and accuracy</li>
<li> data evaluation techniques for recognizing  significant degradation and for predicting future performance of the SSC </li>
</ul>
<h4>Mitigation of aging</h4>
<p>Evaluation of the effectiveness of  existing methods and practices for mitigating aging degradation of the SSC.</p>
<p>Documentation of the information,  including:</p>
<ul>
<li> maintenance  methods and practices, condition monitoring (including refurbishment and  periodic replacement of parts and consumables) to control aging degradation of  the SSC</li>
<li> operating  conditions and practices that minimize the rate of aging degradation of the SSC</li>
<li> possible modifications to design and materials  of the component to control aging degradation of the SSC </li>
</ul>
<h4>Report on aging management  review</h4>
<p>SSC&ndash;specific  information on understanding, monitoring, and mitigating aging</p>
<p>Recommendations for the  application of results of the aging management review in facility design,  operation and maintenance, and for R&amp;D to address gaps in knowledge and  technology</p>
<a name="glossary"></a>
<h2><a name="P363_28109"></a>Glossary</h2>
<dl className="margins-removed">
<dt><strong>acceptance criteria</strong></dt>
<dd>Specified bounds on the value of a functional indicator or condition indicator used to assess the ability of a structure, system or component to perform its design function.</dd>
<dt><strong>aging</strong></dt>
<dd>A general process in which characteristics of a structure, system or component gradually change over time or with use. This process may proceed by a single aging mechanism or by a combination of several aging mechanisms. Non-physical aging is the process of becoming out-of-date (obsolete) owing to the evolution of knowledge and technology and associated changes in codes and standards. Physical aging is due to physical, mechanical, thermal, electrical, chemical, irradiation and/or biological processes (aging mechanisms).</dd>
<dt><strong>aging degradation</strong></dt>
<dd>Aging effects that could impair the ability of a structure, system or component to function within its acceptance criteria.</dd>
<dt><strong>aging effects</strong></dt>
<dd>Net changes in the characteristics of a structure, system or component that occur with time or use and are due to aging mechanisms.</dd>
<dt><strong>aging management</strong></dt>
<dd>Engineering, operations, inspection, and maintenance actions to control, within acceptable limits, the effects of physical aging and obsolescence of structures, systems and components.</dd>
<dt><strong>aging management program (AMP)</strong></dt>
<dd>A set of policies, processes, procedures, arrangements, and activities that provides direction for managing the aging of a nuclear power plant&#8217;s structures, systems and components.</dd>
<dt><strong>aging mechanism</strong></dt>
<dd>A specific process that gradually changes characteristics of a structure, system or component with time or use, such as thermal or radiation embrittlement, corrosion, fatigue, creep, erosion, etc.</dd>
<dt><strong>commissioning</strong></dt>
<dd>A process consisting of activities intended to demonstrate that installed structures, systems and componentsand equipment perform in accordance with their specifications and design intent before they are put into service.</dd>
<dt><strong>common-cause failure</strong></dt>
<dd>A concurrent failure of two or more structures, systems, or components due to a single specific event or cause, such as natural phenomena (earthquakes, tornadoes, floods, etc.), design deficiency, manufacturing flaws, operation and maintenance errors, human-induced destructive events, or aging effects.</dd>
<dt><strong>condition assessment</strong></dt>
<dd>An assessment performed to determine the current performance and condition of a structure, system or component (including assessment of any age-related failures or indications of significant material degradation), and to predict future performance, extent and rate of aging degradation, and residual service life of the structure, system or component.</dd>
<dt><strong>condition indicator</strong></dt>
<dd>A characteristic of a structure, system or component that can be observed, measured, or trended to infer or directly indicate the current and future ability of the structure, system or component to function within acceptance criteria.</dd>
<dt><strong>defence in depth</strong></dt>
<dd>The application of more than one protective measure for a given safety objective, such that the objective is achieved even if one of the protective measures fails.</dd>
<dt><strong>design basis</strong></dt>
<dd>The range of conditions and events taken explicitly into account in the design of a facility, according to established criteria, such that the facility can withstand them without exceeding authorized limits by the planned operation of safety systems.</dd>
<dt><strong>design extension conditions</strong></dt>
<dd>A subset of beyond-design-basis accidents that are considered in the design process of the facility in accordance with best-estimate methodology to keep releases of radioactive material within acceptable limits. Design extension conditions could include severe accident conditions. </dd>
<dt><strong>failure</strong></dt>
<dd>The inability or interruption of ability of a structure, system or component to function within acceptance criteria.</dd>
<dt><strong>functional indicator</strong></dt>
<dd>A condition indicator that is a direct indication of the current ability of a structure, system or component to function within acceptance criteria.</dd>
<dt><strong>licensing basis</strong></dt>
<dd>A set of requirements and documents for a regulated facility or activity comprising:</dd>
<ul>
<li>the regulatory requirements set out in the applicable laws and regulations</li>
<li>the conditions and safety and control measures described in the facility&#8217;s or activity&#8217;s licence and the documents directly referenced in that licence</li>
<li>the safety and control measures described in the licence application and the documents needed to support that licence application</li>
</ul>
<dt><strong>long-term operation</strong></dt>
<dd>Operation beyond the assumed design life of a nuclear power plant, which has been justified by the results of safety analysis, taking into consideration the conditions of structures, systems and components, life-limiting processes, and a review of the facility design and operational measures in place against modern codes and practices.</dd>
<dt><strong>maintenance</strong></dt>
<dd>The organized activities &#8211; both administrative and technical &#8211; of keeping structures, systems and components in good operating condition, including both preventive and corrective (or repair) aspects.</dd>
<dt><strong>management system</strong></dt>
<dd>A set of interrelated or interacting elements (system) for establishing policies and objectives and enabling the objectives to be achieved efficiently and effectively. The management system integrates all elements of an organization into one coherent system to enable all organizational objectives to be achieved. These elements include the organization&#8217;s structure, resources, and processes. Personnel, equipment, and organizational culture, as well as the documented policies and processes, are all parts of the management system. The organization&#8217;s processes have to address the totality of the requirements on the organization as established in, for example, IAEA safety standards and other international codes and standards.</dd>
<dt><strong>nuclear power plant (NPP)</strong></dt>
<dd>Any nuclear fission reactor installation that has been constructed to generate electricity on a commercial scale and is a Class&nbsp;IA nuclear facility, as defined in the <em>Class&nbsp;I Nuclear Facilities Regulations</em>.</dd>
<dt><strong>operational limits and conditions</strong></dt>
<dd>The set of limits and conditions that can be monitored by, or on behalf of, the operator and can be controlled by the operator.</dd>
<dt><strong>root-cause analysis</strong></dt>
<dd>An objective, structured, systematic and comprehensive analysis that is designed to determine the underlying reason(s) for a situation or event, and that is conducted with the level of effort that is consistent with the safety significance of the event.</dd>
<dt><strong>safety functions</strong></dt>
<dd>A specific purpose that must be accomplished by a structure, system or component for safety, including those necessary to prevent accident conditions and to mitigate the consequences of accident conditions.</dd>
<dt><strong>safety systems</strong></dt>
<dd>Systems provided to ensure the safe shutdown of the reactor or the residual heat removal from the core, or to limit the consequences of anticipated operational occurrences and design-basis accidents.</dd>
<dt><strong>service life</strong></dt>
<dd>The period from initial operation to final withdrawal from service of a structure, system or component.</dd>
<dt><strong>stressor</strong></dt>
<dd>An agent or stimulus stemming from pre-service and service conditions that can produce immediate or gradual aging degradation of a structure, system or component. Examples include heat, steam, chemicals, radiation, and electrical cycling.</dd>
<dt><strong>structures, systems or components (SSCs)</strong></dt>
<dd>A general term encompassing all of the elements (items) of a facility or activity that contribute to protection and safety, except human factors. Structures are the passive elements: buildings, vessels, shielding, etc. A system comprises several components, assembled in such a way as to perform a specific (active) function. A component is a discrete element of a system. Examples are wires, transistors, integrated circuits, motors, relays, solenoids, pipes, fittings, pumps, tanks, and valves.</dd>
<dt><strong>testing</strong></dt>
<dd>The observation or measurement of condition or functional indicators under controlled conditions to verify that the current performance of a structure, system or component conforms to acceptance criteria.</dd>
<dt><strong>time-limited assumptions</strong></dt>
<dd>Assumptions used in certain facility- or SSC-specific safety or design analyses that are based on an explicitly specified length of facility or SSC life; for example, metal fatigue calculation, pressurized thermal shock analysis, radiation-induced deformation and embrittlement, thermal aging, loss of material, and equipment qualification of electrical equipment, instrumentation and control equipment, and cables are included in analyses.</dd>  </dl>
<a name="references"></a>
<h2><a name="P283_24351"></a>References</h2>
<ol>
<li>International  Atomic Energy Agency (IAEA), Safety Standards Series, Safety Guide, No.&nbsp;NS&ndash;G&nbsp;2.12, <em>Ageing Management for Nuclear Power  Plants</em>, Vienna, Austria,&nbsp;2009.</li>
<li>IAEA, Safety  Report Series No. 57, <em>Safe Long Term  Operation of Nuclear Power Plants</em>, Vienna,   Austria,&nbsp;2008.</li>
<li>Organisation for  Economic Cooperation and Development, Nuclear Energy Agency; <em>Glossary of Nuclear Power Plant Ageing</em>, Paris, France,  1999. </li>
<li>Canadian Nuclear  Safety Commission (CNSC), Regulatory Document RD-310, <em>Safety Analysis for Nuclear Power Plants</em>, Ottawa,  Canada,&nbsp;2008.</li>
<li>CNSC, Regulatory  Document GD-310, <em>Guidance on </em><em>Safety Analysis for Nuclear Power Plants</em>, Ottawa,   Canada,&nbsp;2012.</li>
<li>CNSC, Regulatory  Standard S-294, <em>Probabilistic Safety  Assessment (PSA) for Nuclear Power Plants</em>, Ottawa, Canada,&nbsp;2005. </li>
<li>CNSC, Regulatory  Document RD-337, <em>Design of  New Nuclear Power Plants</em>, (draft) Ottawa, Canada,&nbsp;2008. </li>
<li>CSA  Group, CSA N285, <em>General requirements for  pressure-retaining systems and components in CANDU nuclear power plants</em>, Mississauga,  Canada, 2012.</li>
<li>CSA Group, CSA N286, <em>Management system requirements for nuclear facilities </em>Mississauga,  Canada, 2012.</li>
<li>CSA Group, CSA N287.1 <em>General requirements for concrete containment structures for nuclear  power plants</em>, Mississauga,   Canada, 1993.</li>
<li>CSA Group, CSA N291, <em>Requirements for safety-related structures for CANDU nuclear power  plants</em>, Mississauga, Canada, 2008.</li>
<li>CSA Group, CSA N285.4, <em>Periodic inspection of CANDU nuclear power plant components</em> Mississauga,  Canada, 2009.</li>
<li>CSA Group, CSA N284.5 <em>Periodic inspection of CANDU nuclear power plant containment components</em> Mississauga, Canada, 2008.</li>
<li>CSA Group, CSA N287.7, <em>In-service examination and testing requirements for concrete  containment structures for nuclear power plants</em> Mississauga, Canada, 2008. </li>
<li>CNSC, Regulatory Document RD/GD-98, <em>Reliability Programs for Nuclear Power  Plants</em>, Ottawa, Canada,&nbsp;2012.</li>
<li>CNSC, Regulatory Document RD/GD-210, <em>Maintenance Programs for Nuclear Power Plants</em>, Ottawa, Canada,&nbsp;2012.</li>
<li>CSA  Group, CSA N290.13 <em>Environmental  qualification of equipment for CANDU nuclear power plant</em>, Mississauga, Canada, 2005. </li>
<li>CNSC, Regulatory Standard  S-99, <em>Reporting Requirements for Operating Nuclear Power Plants</em>, Ottawa, Canada,&nbsp;2003.</li>
<li>CNSC, Regulatory  Document RD-360<em>, Life Extension of  Nuclear Power Plants</em>, Ottawa, Canada,&nbsp;2008.</li>
<li>International Atomic Energy Agency, (IAEA)Safety Standards Series, Safety Guide, N-S-G  2.10, <em>Periodic Safety Review of Nuclear  Power Plants</em>, Vienna, Austria,&nbsp;2003.</li>
</ol>
<a name="additional"></a>
<h2><a name="P126_7975"></a>Additional Information</h2>
<p>The following documents contain  additional information that may be of interest to persons involved in designing  and implementing an aging management program.</p>
<ol>
<li>International  Atomic Energy Agency (IAEA), Safety Standards Series, Safety Requirements, NS&ndash;R&ndash;1, <em>Safety of Nuclear Power Plants: Design</em>, Safety Requirements, Vienna, Austria,  2000</li>
<li>IAEA, Safety Standards  Series, Safety Guide, NS&ndash;G&ndash;2.6, <em>Maintenance, Surveillance and In&ndash;Service  Inspection in Nuclear Power Plants</em>, Vienna,   Austria, 2002</li>
<li>IAEA, Safety  Standards Series, Safety Guide, NS&ndash;G&ndash;2.4, <em>The Operating Organization for  Nuclear Power Plants</em>, Vienna, Austria, 2001</li>
<li>IAEA, Safety  Standards Series, Safety Requirements, NS&ndash;R&ndash;2, <em>Safety of Nuclear Power  Plants: Operation</em>, Vienna,   Austria, 2000</li>
<li>IAEA, Safety  Report Series No.&nbsp;3, <em>Equipment Qualification in Operational Nuclear  Power Plants: Upgrading, Preserving and Reviewing</em>, Vienna, Austria,  1998</li>
<li>IAEA, Safety  Report Series No. 62, <em>Proactive  Management of Ageing of Nuclear Power Plants</em>, Vienna, Austria, 2009</li>
<li>IAEA, Technical Document,  TECDOC 1197, <em>Assessment and Management of  Ageing of Major Nuclear Power Plant Components Important to Safety: CANDU  Reactor Assemblies</em>, Vienna,   Austria, 2001</li>
<li>IAEA, Technical  Document, TECDOC 1188, <em>Assessment and  Management of Ageing of Major Nuclear Power Plant Components Important to  Safety: In-containment Instrumentation and Control cables, Volumes I &amp; II</em>,  Vienna, Austria, 2000</li>
<li>IAEA, Technical  Document, TECDOC 1025, <em>Assessment and  Management of Ageing of Major Nuclear Power Plant Components Important to  Safety: Concrete Containment  Buildings</em>, Vienna, Austria,  1998</li>
<li>IAEA, Technical Document, TECDOC 981, <em>Assessment and Management of Ageing of Major  Nuclear Power Plant Components Important to Safety: Steam Generators</em>, Vienna, Austria,  1997</li>
<li>IAEA, Safety Report Series No. 15, <em>Implementation and Review of a Nuclear Power  Plant Ageing Management</em><em> Programme</em>, Vienna, Austria, 1999</li>
<li>United States Nuclear Regulatory Commission,  NUREG-1801, <em>Generic Aging Lessons Learned  (GALL) Report, </em>Volumes 1 and 2, Washington, DC, United States, 2011</li>
<li>Institute of Nuclear Power Operations, INPO AP-913  Revision 1, <em>Equipment Reliability Process  Description,</em> Atlanta, Georgia, United States, 2001</li>
</ol>
<h2>CNSC  Regulatory Document Series</h2>
<p>Facilities and activities within the nuclear sector  in Canada  are regulated by the Canadian Nuclear Safety Commission (CNSC). In  addition to the <em>Nuclear Safety and Control Act </em>and associated  regulations, these facilities and activities may also be required to comply  with other regulatory instruments such as regulatory documents or standards.</p>
<p> Effective April 2013, the CNSC&#39;s catalogue of  existing and planned regulatory documents has been organized under three key  categories and twenty-five series, as set out below. Regulatory documents  produced by the CNSC fall under one of the following series:</p>
<p><strong>1.0 Regulated  facilities and activities</strong></p>
<p>Series 1.1 Reactor facilities<br />
<div className="indent2">1.2 Class IB facilities<br />
1.3 Uranium mines and mills<br />
1.4 Class II facilities<br />
1.5 Certification of prescribed equipment<br />
1.6 Nuclear  substances and radiation devices</div></p>
<p><strong>2.0 Safety  and control areas</strong></p>
<p>Series 2.1 Management system<br />
<div className="indent2">2.2 Human performance management<br />
2.3 Operating performance<br />
2.4 Safety analysis<br />
2.5 Physical design<br />
2.6 Fitness for service<br />
2.7 Radiation protection<br />
2.8 Conventional health and safety<br />
2.9 Environmental protection<br />
2.10 Emergency  management and fire protection<br />
2.11 Waste  management<br />
2.12 Security<br />
2.13 Safeguards  and non-proliferation<br />
2.14 Packaging and transport</div></p>
<p><strong>3.0 Other  regulatory areas</strong></p>
<p>Series 3.1 Reporting  requirements<br />
<div className="indent2">3.2 Public and Aboriginal engagement<br />
3.3 Financial guarantees<br />
3.4 Commission proceedings<br />
3.5 Information  dissemination</div></p>
<p><strong>Note:</strong> The regulatory document series may be  adjusted periodically by the CNSC. Each regulatory document series listed above  may contain multiple regulatory documents. For the latest list of regulatory documents,  visit the CNSC&#39;s Web site at <a href="/eng/acts-and-regulations/regulatory-documents/index">nuclearsafety.gc.ca/regulatory-documents</a></p>
<div style="background-color:#cecece;padding:5px;text-align:center;">
<p><a href="#toc">Table of Contents</a></p>
</div>  
                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }