import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "en",
                pageTitle: "Draft for Public Consultation", 
                dateModified: "2013-10-25",
                langToggleUrl: "/fra/acts-and-regulations/consultation/comment/regdoc2-2-1-1"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<h2>REGDOC-2.2.1: Human Performance: Managing Worker Fatigue and Hours of Work</h2>
<a name="preface"></a>
<h2>Preface</h2>  <p> This regulatory document&nbsp;is part of the CNSC&#39;s Human Performance Management series of regulatory documents, which also covers personnel training and personnel certification. The full&nbsp;list of regulatory document series&nbsp;can  be found  at
<a href="/eng/acts-and-regulations/regulatory-documents/index">nuclearsafety.gc.ca/regulatory-documents</a>.</p>  <p> Regulatory document REGDOC-2.2.1, <cite>Human Performance: Managing Worker Fatigue and Hours of Work</cite>, sets out requirements and guidance of the CNSC with respect to managing worker fatigue and hours of work for workers at nuclear power plants and at the Nuclear Research Universal reactor located at the Chalk River Laboratories.</p>  <p> This document is intended to form part of the licensing basis for a regulated facility or activity. It is intended for inclusion in licences, either as part of the conditions and safety and control measures in a licence, or as part of the safety and control measures to be described in a licence application and the documents needed to support that application.</p>  <div className="border-highlight" style="margin-bottom: 20px;">
<p><strong>Important note:</strong> Where referenced in a licence either directly or indirectly (such as through licensee-referenced documents), this document is part of the licensing basis for a regulated facility or activity. </p>
<p> The licensing basis sets the boundary conditions for acceptable performance at a regulated facility or activity, and establishes the basis for the CNSC&#39;s compliance program for that regulated facility or activity. </p>
<p> Where this document is part of the licensing basis, the word "shall"; is used to express a requirement to be satisfied by the licensee or licence applicant. "Should"; is used to express guidance or that which is advised. "May"; is used to express an option or that which is advised or permissible within the limits of this regulatory document. &quot;Can&quot;; is used to express possibility or capability.</p>
<p> Nothing contained in this document is to be construed as relieving any licensee from any other pertinent requirements. It is the licensee&#39;s responsibility to identify and comply with all applicable regulations and licence conditions.</p>  </div>
<a name="toc"></a>
<a id="toc"></a>  <h2 className="reportHeading2">Table of Contents</h2>  <ul style="padding-left: 0px;">
<li style="list-style-type: none; list-style: none;"><strong><a href="#sec-1">1.0 Introduction</a> </strong>
<ul>
<li style="list-style-type: none; list-style: none;"><a href="#sec-1-1">1.1 Purpose</a> </li>
<li style="list-style-type: none; list-style: none;"><a href="#sec-1-2">1.2 Scope</a> </li>
<li style="list-style-type: none; list-style: none;"><a href="#sec-1-3">1.3 Relevant legislation</a> </li>
<li style="list-style-type: none; list-style: none;"><a href="#sec-1-4">1.4 National and international standards and guidelines</a> </li>
</ul>
</li>
<li style="list-style-type: none; list-style: none;"><a href="#sec-2"><strong>2.0 Background</strong></a></li>
<li style="list-style-type: none; list-style: none;"><a href="#sec-3"><strong>3.0 Requirements and Guidance</strong></a>
<ul>
<li style="list-style-type: none; list-style: none;"><a href="#sec-3-1">3.1 Management of fatigue and hours of work</a>
<ul>
<li style="list-style-type: none; list-style: none;"><a href="#sec-3-1-1">3.1.1 Roles and responsibilities</a> </li>
<li style="list-style-type: none; list-style: none;"><a href="#sec-3-1-2">3.1.2 Training</a> </li>
<li style="list-style-type: none; list-style: none;"><a href="#sec-3-1-3">3.1.3 Identifying and managing worker fatigue</a> </li>
<li style="list-style-type: none; list-style: none;"><a href="#sec-3-1-4">3.1.4 Emergencies or exceptional circumstances</a> </li>
<li style="list-style-type: none; list-style: none;"><a href="#sec-3-1-5">3.1.5 Control of changes to shift schedules</a> </li>
<li style="list-style-type: none; list-style: none;"><a href="#sec-3-1-6">3.1.6 Problem identification and resolution</a> </li>
<li style="list-style-type: none; list-style: none;"><a href="#sec-3-1-7">3.1.7 Assessment and continual improvement</a> </li>
<li style="list-style-type: none; list-style: none;"><a href="#sec-3-1-8">3.1.8 Records</a> </li>
</ul>
</li>
<li style="list-style-type: none; list-style: none;"><a href="#sec-3-2">3.2 Limits on hours of work and recovery periods</a>
<ul>
<li style="list-style-type: none; list-style: none;"><a href="#sec-3-2-1">3.2.1 Limits on hours of work</a> </li>
<li style="list-style-type: none; list-style: none;"><a href="#sec-3-2-2">3.2.2 Recovery periods</a> </li>
</ul>
</li>
</ul>
</li>
<li style="list-style-type: none; list-style: none;"><a href="#glossary"><strong>Glossary</strong></a> </li>
<li style="list-style-type: none; list-style: none;"><a href="#references"><strong>References</strong></a></li>
<li style="list-style-type: none; list-style: none;"><a href="#addtl-info"><strong>Additional Information</strong></a></li>  </ul>
<a name="1.0"></a>
<h2><a id="sec-1"></a>1.0 Introduction</h2>  <p>Human performance is a key contributor to the safety of nuclear facilities. As a result, the Canadian Nuclear Safety Commission (CNSC) requires licensees to implement and maintain human performance programs. These programs address a broad range of factors that affect human performance with the aim of minimizing the potential for errors. One of these factors is a worker&#39;s fitness for duty.</p>  <p> Fatigue is widely recognized to affect fitness for duty because of its potential to degrade several aspects of human performance. Therefore, licensees must address fatigue and hours of work as part of their approach to ensure that workers are fit for duty. </p>
<a name="1.1"></a>
<h3><a id="sec-1-1"></a>1.1 Purpose</h3>  <p>The purpose of this regulatory document is to specify requirements and guidance for managing worker fatigue and hours of work. </p>
<a name="1.2"></a>
<h3><a id="sec-1-2"></a>1.2 Scope</h3>  <p>This regulatory document is intended for workers at Canadian nuclear power plants and at the Nuclear Research Universal reactor at the Chalk River Laboratories while an operating licence is in effect. </p>  <p> The requirements and guidance in this regulatory document apply to all workers who work on safety-related systems or perform safety-related tasks with the potential for an immediate and direct effect on safety at the licensed facility. As per the <cite>General Nuclear Safety and Control Regulations</cite>, a worker is defined as a "person who performs work that is referred to in a licence";. This definition applies to workers directly employed by a licensee, as well as to contractors and to subcontractors when they perform work referred to in a licence. </p>
<a name="1.3"></a>
<h3><a id="sec-1-3"></a>1.3 Relevant legislation</h3>  <p>The following provisions of the <cite>Nuclear Safety and Control Act</cite> and regulations made under the <cite>Act</cite> are relevant to this regulatory document:</p>  <ul>
<li>Sub-paragraph 9(a)(i) of the Act states that one of the objects of the Commission is "to regulate the development, production and use of nuclear energy and the production, possession and use of nuclear substances, prescribed equipment and prescribed information in order to prevent unreasonable risk, to the environment and to the health and safety of persons, associated with that development, production, possession or use"</li>
<li>Paragraph 12(1)(a) of the <cite>General Nuclear Safety and Control Regulations </cite>requires that every licensee shall "ensure the presence of a sufficient number of qualified workers to carry on the licensed activity safely and in accordance with the Act, the regulations made under the Act and the licence"<br/>
Paragraph 12(1)(b) of the <cite>General Nuclear Safety and Control Regulations </cite>requires that every licensee shall "train the workers to carry on the licensed activity in accordance with the Act, the regulations made under the Act and the licence"</li>
<li>Paragraph 17(b) of the <cite>General Nuclear Safety and Control Regulations</cite> requires that every worker shall "comply with the measures established by the licensee to protect the environment and the health and safety of persons, maintain security, control the levels and doses of radiation, and control releases of radioactive nuclear substances and hazardous substances into the environment"<br/>
Sub-paragraph 17(c)(i) of the <cite>General Nuclear Safety and Control Regulations</cite> requires that every worker shall "promptly inform the licensee or the worker&#39;s supervisor of any situation in which the worker believes there may be a significant increase in the risk to the environment or the health and safety of persons"</li>
<li>Paragraph 17(e) of the <cite>General Nuclear Safety and Control Regulations</cite> requires that every worker shall "take all reasonable precautions to ensure the worker&#39;s own safety, the safety of the other persons at the site of the licensed activity, the protection of the environment, the protection of the public and the maintenance of the security of nuclear facilities and of nuclear substances"</li>
<li>Paragraph 6(d) of the <cite>Class I Nuclear Facilities Regulations </cite>stipulates that an application for a licence to operate a Class I nuclear facility shall contain "the proposed measures, policies, methods and procedures for operating and maintaining the nuclear facility"</li>
<li>Paragraph 6(n) of the <cite>Class I Nuclear Facilities Regulations </cite>stipulates that an application for a licence to operate a Class I nuclear facility shall contain "the results that have been achieved in implementing the program for recruiting, training and qualifying workers in respect of the operation and maintenance of the nuclear facility"</li>
<li>Section 38 of the <cite>Nuclear Security Regulations</cite> stipulate that "every licensee shall develop a supervisory awareness program and implement it on an ongoing basis to ensure that its supervisors are trained to recognize behavioural changes in all personnel, including contractors, that could pose a risk to security at a facility at which it carries on licensed activities"</li>  </ul>
<a name="1.4"></a>
<h3><a id="sec-1-4"></a>1.4 National and international standards and guidelines</h3>  <p>The International Atomic Energy Agency (IAEA) has identified the need for nuclear facilities to have fitness for duty programs. [1, 2] This regulatory document addresses the IAEA&#39;s recommendations for restrictions on excessive overtime, mandatory requirements for rest periods between shifts, and guidelines on fitness for duty in relation to hours of work. [1, 2, 3, 4]</p>  <p> There is broad consensus internationally that fatigue-related risks can be managed through an organization&#39;s safety management system. [5] The programmatic requirements and guidance for managing worker fatigue in this document are consistent with the CSA Group&#39;s management system standard established in the licensing basis (e.g., N286-05, <cite>Management system requirements for nuclear power plants</cite>). [6]</p>
<a name="2.0"></a>
<h2><a id="sec-2"></a>2.0 Background</h2>  <p>For the purpose of this regulatory document, fatigue is defined as a state of reduced mental or physical performance capability resulting from sleep loss, extended wakefulness, phase of the circadian rhythm or workload. As fatigue increases, declines occur in many aspects of human performance, especially alertness. Alertness is fundamental to many cognitive tasks. Recovery from fatigue, particularly the recovery of cognitive function, requires sufficient sleep.</p>  <p> Work schedules are an important contributor to fatigue since they set the boundaries for the timing and time available for sleep. Key aspects of a work schedule that affect fatigue are night work, extended shifts, the number of consecutive shifts, and time off between blocks of shifts.</p>  <p> Even when complying with limits on hours of work, a worker may be fatigued. Therefore, this document specifies additional requirements and guidance for managing worker fatigue to be integrated into a licensee&#39;s management system. </p>  <p> Independent research reports commissioned by the CNSC over several years have been considered in the development of this regulatory document. [7, 8, 9] </p>
<a name="3.0"></a>
<h2><a id="sec-3"></a>3.0 Requirements and Guidance</h2>
<a name="3.1"></a>
<h3><a id="sec-3-1"></a>3.1 Management of fatigue and hours of work</h3>  <p>Licensees shall manage worker fatigue and hours of work in accordance with their management system.  In particular, the following requirements shall be applied to manage worker fatigue and hours of work.</p>
<h4><a id="sec-3-1-1"></a>3.1.1 Roles and responsibilities</h4>  <p>Licensees shall define and document the roles and responsibilities for those involved with managing worker fatigue and hours of work of workers who work on safety-related systems or perform safety-related tasks with the potential for an immediate and direct effect on safety at the licensed facility, including the following:</p>  <ol>
<li>senior management</li>
<li>supervisors of workers who perform safety-related tasks or work on safety-related systems</li>
<li>workers who perform safety-related tasks or work on safety-related systems</li>
<li>key support positions involved with  managing worker fatigue and hours of work (e.g., medical, human resources, workforce planning and scheduling)</li>
<li>contractor organizations</li>
<li>those granted the authority to approve work beyond the limits on hours of work and recovery periods during emergencies or exceptional circumstances as described in section 3.1.4</li>  </ol>
<h3><a id="sec-3-1-2"></a>3.1.2 Training</h3>  <p>Licensees shall ensure that those with roles and responsibilities for managing worker fatigue and hours of work receive initial and ongoing training commensurate with the roles and responsibilities identified in section 3.1.1.</p>  <p> <strong>Guidance</strong></p>  <p> Training about fatigue and about the measures for managing worker fatigue should address the following topics: </p>  <ul>
<li>causes, risks and consequences of fatigue (e.g., effects of fatigue and circadian rhythms on alertness and performance; importance of sleep and strategies to maximize the benefits of recovery opportunities; sleep disorders and their treatment; symptoms of fatigue; measures to minimize the effects of fatigue) </li>
<li>licensee&#39;s measures for managing worker fatigue and hours of work (e.g., roles and responsibilities for managing worker fatigue and controlling hours of work; process to follow when a performance impairment due to fatigue is suspected</li>
<li>regulatory requirements related to fatigue and hours of work </li>  </ul>
<h4><a id="sec-3-1-3"></a>3.1.3 Identifying and managing worker fatigue</h4>  <p>As part of the fitness for duty program, licensees shall have a process to identify and manage workers who have temporary or ongoing fatigue-related limitations that may make them incapable of performing their assigned duties safely. This process shall address the following:</p>  <ol>
<li>expectations for self-reporting when workers believe they are too fatigued to perform their assigned duties safely and competently</li>
<li>actions for a supervisor to take if he or she believes, through self-reporting or observation, that a worker may be unable to safely and competently perform his or her assigned duties because of fatigue</li>
<li>identification and management of workers with a condition that causes a higher risk of experiencing fatigue </li>
<li>definition and documentation of acceptable location(s) for napping, if permitted, along with the length of time before resuming duties following a nap and the process for transferring duties before and after a nap</li>  </ol>  <p><strong>Guidance</strong></p>  <p>Licensees should define and implement a range of controls and conditions to reduce fatigue or the risk of fatigue-related errors, such as:</p>  <ul>
<li>nurturing an environment that encourages self-reporting when workers believe they are too fatigued to perform their duties safely and competently</li>
<li>employing additional supervisory oversight and independent verification when the risk of fatigue is highest (e.g., during the night shift, near the end of a shift, working beyond 12 hours)</li>
<li>scheduling safety-related tasks outside of peak times for fatigue from midnight to 5 a.m. when possible <br/>
rotating workers among tasks of varying cognitive and physical workloads when possible</li>
<li>providing a work environment designed to enhance alertness (e.g., appropriate lighting, temperature, and humidity) </li>
<li>allowing rest periods or naps with appropriate conditions defined (e.g., turnover of duties, location, duration) </li>  </ul>  <p>Additional information may be found in:</p>  <ul>
<li>CNSC, RD-204, <cite>Certification of Persons Working at Nuclear Power Plants</cite>, Ottawa, Canada, 2008.</li>
<li>CNSC, G-323, <cite>Ensuring the Presence of Sufficient Qualified Staff at Class I Nuclear Facilities - Minimum Staff Complement</cite>, Ottawa, Canada, 2007.</li>  </ul>
<h4><a id="sec-3-1-4"></a>3.1.4 Emergencies or exceptional circumstances</h4>  <p>Licensees shall address fatigue and hours of work limits when planning for business continuity.</p>  <p>Licensees shall define a process for exceeding the limits specified in section 3.2 during an emergency or exceptional circumstance. This process shall specify the controls and conditions to be implemented to reduce the likelihood of fatigue and fatigue-related errors. </p>  <p>Although this regulatory document allows provisions for internal approval to exceed the limits during emergencies or exceptional circumstances, regulatory reporting requirements shall remain in effect.</p>  <p><strong>Guidance</strong></p>  <p>There may be emergencies or exceptional circumstances (e.g., severe weather) during which licensees must keep essential workers onsite. In planning for these situations, expectations for controls and conditions to be implemented beyond those listed in section 3.1.3 should be defined, such as: </p>  <ul>
<li>sufficient opportunities and accommodations appropriate for restorative sleep (e.g., horizontal sleeping surface, darkened environment, minimal intrusive noise)</li>
<li>delays to non-essential maintenance, testing and operations activities </li>  </ul>  <p>The rationale for the controls and conditions, including rest periods, should be documented.</p>  <p>Additional information may be found in:</p>  <ul>
<li>CSA Group, CSA Z1600-08, <cite>Emergency management and business continuity programs</cite>. Toronto, Canada, 2008. </li>  </ul>
<h4><a id="sec-3-1-5"></a>3.1.5 Control of changes to shift schedules </h4>  <p>Changes to shift schedules (e.g., modifications to start time or shift length) shall be controlled. </p>  <p>After modified shift schedules have been implemented, their effectiveness shall be reviewed.</p>
<h4><a id="sec-3-1-6"></a>3.1.6 Problem identification and resolution</h4>  <p>When problems related to fatigue or hours of work arise, such problems shall be identified, recorded, assessed, dispositioned and appropriately resolved.</p>  <p>Trend analyses shall be performed to identify repetitive problems or causes related to fatigue or hours of work.</p>  <p><strong>Guidance</strong></p>  <p>When a human error may have caused or contributed to an event, the event analysis team should record and consider fatigue-related factors of the people directly involved (e.g., work schedule and sleep obtained prior to the event; consecutive hours awake at the time of the event) and should determine if performance was consistent with the effects of fatigue. </p>
<h4><a id="sec-3-1-7"></a>3.1.7 Assessment and continual improvement</h4>  <p>Assessments shall be conducted to determine the effectiveness of the management system in managing worker fatigue and hours of work.</p>  <p>An assessment shall be performed annually to ensure that hours of work can be managed during normal operations, including maintenance outages, with existing and projected staffing levels. </p>  <p>An assessment of hours of work shall be performed annually to assist licensees in assessing the adequacy of staffing levels for minimum staff complement positions.</p>  <p><strong>Guidance</strong></p>  <p>Licensees should use multiple methods to assess the effectiveness of the management system in managing worker fatigue and hours of work, including:</p>  <ul>
<li>performance indicators</li>
<li>trend analyses</li>
<li>internal and external operating experience</li>
<li>benchmarking</li>
<li>self-assessments</li>
<li>independent assessments</li>
<li>worker surveys</li>  </ul>  <p>Staffing levels should be sufficient to ensure that training activities, sickness vacation, or staff turnover do not lead to hours of work violations. </p>
<h4><a id="sec-3-1-8"></a>3.1.8 Records</h4>  <p>For workers defined in section 3.2 who are employed directly by a licensee, the licensees shall retain records of shifts worked and approvals granted for work beyond the limits in section 3.2.1 and 3.2.2 for at least five years. </p>  <p>For workers defined in section 3.2 who are employed by a contractor or subcontractor, the licensee shall ensure that records of shifts worked and approvals granted for work beyond the limits in section 3.2.1 and 3.2.2 are retained for at least five years.</p>
<a name="3.2"></a>
<h3><a id="sec-3-2"></a>3.2 Limits on hours of work and recovery periods</h3>  <p>Limits on hours of work (section 3.2.1) and recovery periods (section 3.2.2) shall apply to all workers who work on safety-related systems at the licensed facility, including those who perform the following duties: </p>  <ol>
<li>operations or onsite directing of operations of safety-related systems (e.g., certified staff,  control room operators, field operators, fuel handling operators)</li>
<li>maintenance or onsite directing of maintenance of safety-related systems</li>  </ol>  <p>In addition, limits on hours of work and recovery periods shall apply to all workers who perform safety-related tasks with the potential for an immediate and direct effect on safety at the licensed facility, including those who fill the following positions or perform the following duties: </p>  <ol>
<li>minimum staff complement </li>
<li>industrial fire brigade</li>
<li>nuclear security officers and nuclear response team members</li>  </ol>
<h4><a id="sec-3-2-1"></a>3.2.1 Limits on hours of work</h4>  <p>A normal work shift shall not exceed 12 hours. On rare occasions (e.g., to fill an unplanned minimum staff complement vacancy or complete an unplanned essential task), the number of hours worked in a 24-hour period may extend up to 16 hours, but shall not exceed 16 hours. As far as reasonably practicable, night shifts should not extend beyond 12 hours.</p>  <p>The number of hours worked in a 48-hour period shall not exceed 26 hours. </p>  <p>The number of hours worked in a 7-day period shall not exceed 60 hours. </p>  <p>The number of hours worked in a 6-week period shall not exceed 312 hours (equivalent to 52 hours per week on average). </p>  <p>The number of hours worked in a 12-month period shall not exceed 2,400 hours. </p>  <p>With the exception of shift turnover, all time present at work shall be included when determining compliance with the limits in this section. Shift turnover should normally be less than 30 minutes per shift. </p>
<h4><a id="sec-3-2-2"></a>3.2.2 Recovery periods</h4>  <p>Within each 24-hour period,&nbsp;a worker shall normally be given 11 consecutive hours free from work. On rare occasions (e.g., to fill an unplanned minimum staff complement vacancy or complete an unplanned essential task), the consecutive hours free from work may be reduced to 8, but shall not be less than 8.<br/>
For persons working shifts over 10 hours and up to 12 hours: </p>  <ol>
<li>A maximum of 5 consecutive day shifts or 4 consecutive night shifts shall not be exceeded.</li>
<li>A minimum recovery period of 36 hours shall follow a block of 3 or 4 consecutive day shifts.</li>
<li>A minimum recovery period of 48 hours shall follow a block of 5 or more consecutive day shifts or 2 consecutive night shifts.</li>
<li>A minimum recovery period of 72 hours shall follow a block of 3 or more consecutive night shifts.</li>
<li>A minimum recovery period of 36 hours shall apply before a worker resumes 12-hour shifts following a block of supernumerary 8-hour day shifts.</li>  </ol>  <p>For persons working shifts from 8 to 10 hours:</p>  <ol>
<li>A minimum recovery period of 36 consecutive hours shall occur in any consecutive 7-day period.</li>
<li>A maximum of 5 consecutive night shifts shall not be exceeded. A minimum recovery period of 48 hours shall follow a block of 4 or more consecutive night shifts.</li>
<li>The direction of shift rotation shall be clockwise (e.g., days, evenings, nights).</li>  </ol>  <p>Table 1 summarizes limits on hours of work and the required recovery periods presented in sections 3.2.1 and 3.2.2, respectively.</p>  <table border="1" className="widthFull">
<caption className="left">
<strong>  Table 1: Limits on hours of work and required recovery periods
</strong>
</caption>
<thead>
<tr>
<th className="left">Time frame </th>
<th className="left">Limits on hours of work <br/>
(see section 3.2.1)</th>
</tr>
</thead>
<tbody>
<tr>
<td>24 hours (normal shift)</td>
<td>12</td>
</tr>
<tr>
<td>24 hours (upper limit on rare occasions)</td>
<td>16</td>
</tr>
<tr>
<td>48 hours</td>
<td>26</td>
</tr>
<tr>
<td>7 days</td>
<td>60</td>
</tr>
<tr>
<td>6 weeks</td>
<td>312</td>
</tr>
<tr>
<td>12 months</td>
<td>2,400</td>
</tr>
<tr>
<th className="left" colSpan="2">Recovery periods for shifts over 10 hours and up to 12 hours</th>
</tr>
<tr>
<th>&nbsp;</th>
<th className="left">Consecutive hours off<br/>
(see section 3.2.2)</th>
</tr>
<tr>
<td>Following a block of 3 or 4 days</td>
<td>36</td>
</tr>
<tr>
<td>Following a block of 5 or more days or 2 nights</td>
<td>48</td>
</tr>
<tr>
<td>Following a block of 3 or more nights</td>
<td>72</td>
</tr>
<tr>
<td>24 hours (normal shift)</td>
<td>11</td>
</tr>
<tr>
<td>24 hours (lower limit on rare occasions)</td>
<td>8</td>
</tr>
</tbody>
<tr>
<th className="left" colSpan="2">Recovery periods for shifts from 8 to 10 hours</th>
</tr>
<tbody>
<tr>
<td>Each period of 7 consecutive days</td>
<td>36</td>
</tr>
<tr>
<td>Following a block of 4 or more nights</td>
<td>48</td>
</tr>
</tbody>
<tfoot>
</tfoot>  </table>
<a name="glossary"></a>
<a id="glossary"></a>  <h2 className="report">Glossary</h2>  <dl className="margins-removed">
<dt><strong>alertness</strong></dt>
<dd>Ability to remain awake and sustain attention.</dd>
<dt><strong>block of consecutive shifts</strong></dt>
<dd>Set of consecutive shifts with the same start and end times that is followed by a minimum recovery period and a subsequent set of consecutive shifts. </dd>
<dt><strong>business continuity</strong></dt>
<dd>An ongoing process supported by management and adequately funded to ensure that the necessary steps are taken to identify the impact of potential losses and maintain viable recovery strategies and recovery plans for the continuity of operations.</dd>
<dt><strong>certified worker</strong></dt>
<dd>Person named on a certificate issued by the CNSC, or that an officer authorized by the CNSC attests to being competent to carry out the duties of a given position referred to in the nuclear power plant licence. </dd>
<dt><strong>circadian rhythm </strong></dt>
<dd>The variation in physiological functions that repeat on an approximate 24-hour cycle. These functions are controlled by an internal biological clock in the brain. Examples are the sleep/wake cycle, alertness, cognitive performance, and body temperature.</dd>
<dt><strong>contractor </strong></dt>
<dd>An organization or individual providing services to another organization in accordance with agreed-upon specifications, terms, and conditions. <strong></strong></dd>
<dt><strong>emergency</strong></dt>
<dd>An abnormal situation that may increase the risk of harm to the health and safety of persons, the environment, or national security, and that requires the immediate attention of the licensee. This would include, but not be limited to, medical events, fires, toxic gas releases, or radioactive releases.</dd>
<dt><strong>fatigue </strong></dt>
<dd>A state of reduced mental or physical performance capability resulting from sleep loss, extended wakefulness, phase of the circadian rhythm or workload. </dd>
<dt><strong>human performance</strong></dt>
<dd>The outcomes of human behaviours, functions and actions in a specified environment, reflecting the ability of workers and management to meet the system&#39;s defined performance, under the conditions in which the system will be employed.</dd>
<dt><strong>licensing basis </strong></dt>
<dd>A set of requirements and documents for a regulated facility or activity comprising:
<ul>
<li>the regulatory requirements set out in the applicable laws and regulations</li>
<li>the conditions and safety and control measures described in the facility&#39;s or activity&#39;s licence and the documents directly referenced in that licence</li>
<li>the safety and control measures described in the licence application and the documents needed to support that licence application</li>
</ul>
</dd>
<dt><strong>maintenance</strong></dt>
<dd>The organized activities, both administrative and technical, of keeping structures, systems, and components in good operating condition, including both preventive and corrective (or repair) aspects. </dd>
<dt><strong>minimum staff complement</strong></dt>
<dd>The minimum number of qualified workers who must be present at all times to ensure the safe operation of the nuclear facility and to ensure adequate emergency response capability.</dd>
<dt><strong>night shift</strong></dt>
<dd>Shift that includes time at work between midnight and 5 a.m.</dd>
<dt><strong>normal operation </strong></dt>
<dd>Operation of a reactor facility within specified operational limits and conditions, including start-up, power operation, shutting down, shutdown, maintenance, testing and refuelling.</dd>
<dt><strong>safety-related systems</strong></dt>
<dd>Those systems and their related components and supports that, by failing to perform in accordance with the design intent, have the potential to impact the radiological safety of the public or plant personnel. These systems and their components involve:
<ul>
<li>the regulation (including controlled start-up and shutdown) and cooling of the reactor core under normal conditions (including all normal operating and shutdown conditions)</li>
<li>the regulation, shutdown, and cooling of the reactor core under anticipated transient conditions, accident conditions, and the maintenance of the reactor core in a safe shutdown state for an extended period following such conditions </li>
<li>limiting the release of radioactive material and the exposure of plant personnel and/or the public to meet the criteria established by the regulatory authority with respect to radiation exposure during and following normal, anticipated transient, and accident conditions </li>
</ul>
</dd>
<dt><strong>shift turnover </strong></dt>
<dd>Transfer of information and responsibilities between two individuals within a work unit, one of which is relieving the other. Shift turnover activities may include, but are not limited to, discussions of the status of plant equipment, and the status of ongoing activities, such as extended tests of safety systems and components. </dd>
<dt><strong>supernumerary day shifts </strong></dt>
<dd>Periodic sequences of eight-hour day shifts that are built into a shift worker&#39;s schedule.</dd>
<dt><strong>worker </strong></dt>
<dd>A person who performs work that is referred to in a licence. </dd>  </dl>  <p><strong>Note: </strong>This definition applies to workers directly employed by a licensee, as well as to contractors and to subcontractors.</p>
<a name="references"></a>
<a id="references"></a>  <h2>References</h2>  <ol>
<li>International Atomic Energy Agency (IAEA),  Specific Safety Requirements SSR 2/2, <cite>Safety  of Nuclear Power Plants: Commissioning and Operation</cite>, Vienna, 2011.<br/>
</li>
<li>IAEA, GS-G-1.2, <cite>Review and Assessment of Nuclear Facilities by the Regulatory Body</cite>,  Vienna, 2002.</li>
<li>IAEA, SSG-12, <cite>Licensing  Process for Nuclear Installations</cite>, Vienna,  2010.</li>
<li>IAEA, NS-G-2.14, <cite>Conduct of Operations at Nuclear Power Plants</cite>, Vienna, 2008.</li>
<li>Lerman, S., et al., "Fatigue Risk Management in  the Workplace,"; <cite>Journal of Occupational  and Environmental Medicine</cite> 54, 2 (2012): 231-258.</li>
<li>CSA Group,  N286-05, <cite>Management System Requirements  for Nuclear Power Plants</cite>, Toronto,   Canada, reaffirmed  2010.</li>
<li>Smiley, A. and C. Rudin-Brown, RSP-0289, <cite>Review of Criteria for Assessing Shift  Schedules in the Nuclear Industry</cite>, Ottawa, 2013. </li>
<li>Kulp, K., RSP-0096, <cite>Development of a Regulatory Monitoring Program for Shiftwork Systems at  Canadian Nuclear Power Plants</cite>, Ottawa, 1999.</li>
<li>Smiley, A. and N. Moray, INFO-0318, <cite>A Review of 12 Hour Shifts at Nuclear  Generating Stations, Atomic Energy Control Board</cite>, Ottawa, Canada, 1989. </li>  </ol>
<a name="additional"></a>
<h2><a id="addtl-info"></a>Additional Information</h2>  <p>The following documents  contain additional information that may be of interest to persons involved in  managing worker fatigue and controlling hours of work. </p>  <ol>
<li>CSA Group, CSA Z1600-08, <cite>Emergency  management and business continuity programs</cite>, Toronto, Canada,  2008.</li>
<li>CSA Group, N286-12, <cite>Management  system requirements for nuclear facilities</cite>, Toronto, Canada,  2012.</li>
<li>Canadian Nuclear Safety  Commission (CNSC), RD-204, Certification <cite>of  Persons Working at Nuclear Power Plants</cite>, Ottawa, Canada,  2008.</li>
<li>CNSC, G-323, <cite>Ensuring the Presence of Sufficient  Qualified Staff at Class I Nuclear Facilities - Minimum Staff Complement</cite>, Ottawa,  Canada, 2007. </li>  </ol>
<div style="background-color:#cecece;padding:5px;text-align:center;">
<p><a href="#toc">Table of Contents</a></p>
</div>

                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }