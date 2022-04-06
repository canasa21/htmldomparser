import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "en",
                pageTitle: "Archived Web Page: Draft for Public Consultation: RD/GD-210: Maintenance Programs for Nuclear Power Plants", 
                dateModified: "2012-03-09",
                langToggleUrl: "/fra/acts-and-regulations/consultation/comment/rd-gd-210-1"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<p><strong>Scroll down and the "archived" notice will fade in (at the top of your window)</strong></p>
<p><img src="/dist/js/images/archived/warning.gif" alt="Warning" title="Warning" className="image-actual mrgn-bttm-0" /> This Web page has been archived on the Web.</p>
<div id="archived" className="wet-boew-archived col-md-12">
<h2>Archived Content</h2>
<p>Information identified as archived on the Web is for reference, research or recordkeeping purposes. It has not been altered or updated after the date of archiving. Web pages that are archived on the Web are not subject to the Government of Canada Web Standards. As per the <a href="http://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=12316&amp;section=text">Communications Policy of the Government of Canada</a>, you can request alternate formats on the <a href="/eng/contact-us/">Contact Us</a> page.</p>
</div>
<a name="#RDsection[1]#"></a>
<h2 className="reportHeading2">Preface</h2>  <p>Regulatory document RD/GD-210, <em>Maintenance Programs for Nuclear Power Plants</em> sets out the requirements of the Canadian Nuclear Safety Commission (CNSC) with regard to maintenance programs for nuclear power plants (NPPs). An NPP maintenance program consists of policies, processes and procedures that provide direction for maintaining structures, systems or components (SSCs) of the plant.</p>  <p>Effective maintenance is essential for the safe operation of a nuclear power plant. The range of maintenance activities includes monitoring, inspection, testing, assessment, calibration, service, overhaul, repair and replacement of parts. The scope of the maintenance program covers all structures, systems or components (SSCs) within the bounds of the nuclear power plant. The type and frequency of maintenance activity applied to each SSC are understood to be commensurate with the SSC&#8217;s importance to safety, design function and required performance.</p>  <p>This document also provides information and guidance on how the requirements may be met. </p>  <p>The majority of maintenance activities are traditionally allocated to the concept of preventive maintenance. These maintenance activities can be derived, for example, from design or reliability requirements, codes and standards, and operating experience and are performed on the basis of service time, actual condition or predicted condition. Where the performance or condition of an SSC does not allow it to function as per design, corrective action must be taken.</p>  <p>The results of all maintenance activities are fed back through an optimization process that enables continuous improvement of the program.</p>  <p>The requirements outlined in this regulatory document are consistent with international guidelines, including <em>Safety Related Maintenance in the Framework of the Reliability Centered Maintenance Concept</em>, TECDOC-658, and <em>Maintenance, Surveillance and In-service Inspection in Nuclear Power Plants</em>, Safety Standards Series, No. NS-G-2.6, both from the International Atomic Energy Agency (IAEA).</p>  <p>It is not the intent of this regulatory document to override requirements provided by other codes and standards but rather to provide the framework within which such codes and standards are applied to ensure that SSCs function as per design.</p>  <p>When incorporated into a licence or other legally enforceable instrument, this regulatory document becomes a legal requirement.</p>  <p>In this document, &#8220;shall&#8221; is used to express a requirement, i.e., a provision that a licensee or licence applicant is obliged to satisfy in order to comply with this regulatory document. &#8220;Should&#8221; is used to express guidance, or that which is advised but not required. &#8220;May&#8221; is used to express an option or that which is permissible within the limits of this regulatory document. &#8220;Can&#8221; is used to express possibility or capability.</p>
<a name="#RDsection[2]#"></a>
<h2 className="reportHeading2">Table of Contents</h2>  <div className="IndentLeft10">  <p><a href="#P121_5881"><strong>1.0 Introduction </strong></a></p>  </div>  <div className="IndentLeft20">  <p><a href="#P122_5896">1.1 Purpose </a></p>  <p><a href="#P125_6291">1.2 Scope </a></p>  <p><a href="#P130_7528">1.3 Relevant regulations </a></p>  <p><a href="#P138_10718">1.4 National and international standards </a></p>  </div>  <div className="IndentLeft10">  <p><a href="#P144_11527"><strong>2.0 Background </strong></a></p>  <p><a href="#P151_12748"><strong>3.0 Elements in the Maintenance Program </strong></a></p>  </div>  <div className="IndentLeft20">  <p><a href="#P155_13609">3.1 Element One: Program Basis </a></p>  </div>  <div className="IndentLeft30">  <p><a href="#P156_13639">3.1.1 Requirements for Program Basis </a></p>  <p><a href="#P170_15392">3.1.2 Guidance for Program Basis </a></p>  </div>  <div className="IndentLeft20">  <p><a href="#P208_19630">3.2 Element Two: Maintenance Organization </a></p>  </div>  <div className="IndentLeft30">  <p><a href="#P209_19671">3.2.1 General requirements for maintenance organization </a></p>  <p><a href="#P211_19831">3.2.2 Organizational structure </a></p>  <p><a href="#P238_22672">3.2.3 Policies, processes and procedures </a></p>  <p><a href="#P266_25241">3.2.4 Training and qualification of workers </a></p>  <p><a href="#P306_30164">3.2.5 Maintenance facilities </a></p>  <p><a href="#P327_32507">3.2.6 Contract workers </a></p>  </div>  <div className="IndentLeft20">  <p><a href="#P345_34603">3.3 Element Three: Maintenance Activities </a></p>  </div>  <div className="IndentLeft30">  <p><a href="#P346_34644">3.3.1 General requirements for maintenance activities </a></p>  <p><a href="#P348_34796">3.3.2 General guidance for maintenance activities </a></p>  <p><a href="#P350_35202">3.3.3 Preventive maintenance </a></p>  <p><a href="#P374_38037">3.3.4 Corrective maintenance </a></p>  <p><a href="#P394_41065">3.3.5 Aging management </a></p>  <p><a href="#P398_41542">3.3.6 Activity optimization </a></p>  </div>  <div className="IndentLeft20">  <p><a href="#P413_42569">3.4 Element Four: SSC Monitoring </a></p>  </div>  <div className="IndentLeft30">  <p><a href="#P414_42601">3.4.1 General requirements for SSC monitoring </a></p>  <p><a href="#P417_43183">3.4.2 General guidance for SSC monitoring </a></p>  <p><a href="#P434_45537">3.4.3 Condition monitoring </a></p>  <p><a href="#P478_50594">3.4.4 Surveillance </a></p>  <p><a href="#P491_51871">3.4.5 Testing </a></p>  </div>  <div className="IndentLeft20">  <p><a href="#P514_54162">3.5 Element Five: Maintenance Work </a></p>  </div>  <div className="IndentLeft30">  <p><a href="#P515_54197">3.5.1 General requirements for maintenance work </a></p>  <p><a href="#P519_55009">3.5.2 General guidance for maintenance work </a></p>  <p><a href="#P543_57116">3.5.3 Work assessment </a></p>  <p><a href="#P564_59512">3.5.4 Work planning and scheduling </a></p>  <p><a href="#P600_63582">3.5.5 Outage management </a></p>  <p><a href="#P623_66206">3.5.6 Maintenance procedures </a></p>  <p><a href="#P682_73078">3.5.7 Post-maintenance verification and testing </a></p>  </div>  <div className="IndentLeft20">  <p><a href="#P699_75208">3.6 Element Six: Spare Parts and Procurement </a></p>  </div>  <div className="IndentLeft30">  <p><a href="#P700_75252">3.6.1 Requirements for spare parts and procurement </a></p>  <p><a href="#P705_76256">3.6.2 Guidance for spare parts and procurement </a></p>  </div>  <div className="IndentLeft20">  <p><a href="#P726_78164">3.7 Element Seven: Management Assessment and Program Review </a></p>  </div>  <div className="IndentLeft30">  <p><a href="#P727_78223">3.7.1 Requirements for management assessment and program review </a></p>  <p><a href="#P731_78914">3.7.2 Guidance for management assessment and program review </a></p>  </div>  <div className="IndentLeft20">  <p><a href="#P751_81599">3.8 Element Eight: Record Keeping </a></p>  </div>  <div className="IndentLeft30">  <p><a href="#P752_81632">3.8.1 Requirements for record keeping </a></p>  <p><a href="#P755_82394">3.8.2 Guidance for record keeping </a></p>  </div>  <div className="IndentLeft10">  <p><a href="#P778_83854"><strong>Glossary </strong></a></p>  <p><a href="#P849_89825"><strong>References </strong></a></p>  <p><a href="#P858_90218"><strong>Additional Information </strong></a></p>  </div>
<a name="1.0"></a>
<h2 className="reportHeading2"><a name="P121_5881" id="P121_5881"></a>1.0 Introduction</h2>
<a name="1.1"></a>
<h3 className="reportHeading3"><a name="P122_5896" id="P122_5896"></a>1.1 Purpose</h3>  <p>This regulatory document sets out the requirements of the Canadian Nuclear Safety Commission (CNSC) with regard to maintenance programs for nuclear power plants (NPPs). This document also provides information and guidance on how the requirements may be met.</p>  <p>When incorporated into a licence or other legally enforceable instrument, this regulatory document becomes a legal requirement.</p>
<a name="1.2"></a>
<h3 className="reportHeading3"><a name="P125_6291" id="P125_6291"></a>1.2 Scope</h3>  <p>An NPP maintenance program consists of policies, processes and procedures that provide direction for maintaining structures, systems or components (SSCs) of the plant.</p>  <p>Effective maintenance is essential for the safe operation of a nuclear power plant. The range of maintenance activities includes monitoring, inspection, testing, assessment, calibration, service, overhaul, repair and replacement of parts. The scope of the maintenance program covers all structures, systems or components (SSCs) within the bounds of the nuclear power plant. </p>  <p>It is not the intent of this regulatory document to override requirements provided by other codes and standards but rather to provide the framework within which such codes and standards are applied to ensure that SSCs function as per design.</p>  <p>In this document, &#8220;shall&#8221; is used to express a requirement, i.e., a provision that a licensee or licence applicant is obliged to satisfy in order to comply with this regulatory document. &#8220;Should&#8221; is used to express guidance, or that which is advised but not required. &#8220;May&#8221; is used to express an option or that which is permissible within the limits of this regulatory document. &#8220;Can&#8221; is used to express possibility or capability.</p>
<a name="1.3"></a>
<h3 className="reportHeading3"><a name="P130_7528" id="P130_7528"></a>1.3 Relevant regulations</h3>  <p>The following provisions of the <em>Nuclear Safety and Control Act</em> (NSCA, the Act) and regulations made under the NSCA are relevant to this regulatory document:</p>  <ul>
<li> subsection&nbsp;24(4) of the NSCA states that &#8220;no licence may be issued, renewed, amended or replaced unless, in the opinion of the Commission, the applicant<br />
(<em>a</em>)&nbsp;is qualified to carry on the activity that the licence will authorize the licensee to carry on<br />
(<em>b</em>)&nbsp;will, in carrying on that activity, make adequate provision for the protection of the environment, the health and safety of persons and the maintenance of national security and measures required to implement international obligations to which Canada has agreed&#8221;</li>
<li> subsection&nbsp;24(5) of the NSCA states that &#8220;a licence may contain any term or condition that the Commission considers necessary for the purposes of the Act&#8221;</li>
<li> subsection&nbsp;12(1) of the <em>General Nuclear Safety and Control Regulations</em> states that &#8220;every licensee shall <br />
(<em>a</em>)&nbsp;ensure the presence of a sufficient number of qualified workers to carry on the licensed activity safely and in accordance with the Act, the regulations made under the Act and the licence<br />
(<em>b</em>)&nbsp;train the workers to carry on the licensed activity in accordance with the Act, the regulations made under the Act and the licence<br />
(<em>c</em>)&nbsp;take all reasonable precautions to protect the environment and the health and safety of persons and to maintain the security of nuclear facilities and of nuclear substances<br />
(<em>d</em>)&nbsp;provide the devices required by the Act, the regulations made under the Act and the licence and maintain them within the manufacturer&#8217;s specifications<br />
(<em>e</em>)&nbsp;require that every person at the site of the licensed activity use equipment, devices, clothing and procedures in accordance with the Act, the regulations made under the Act and the licence&#8221;</li>
<li> paragraphs&nbsp;6(<em>d</em>), (<em>m</em>), and (<em>n</em>) of the <em>Class&nbsp;I Nuclear Facilities Regulations</em> state that &#8220;an application for a licence to operate a Class&nbsp;I nuclear facility shall contain&nbsp;[&#8230;]<br />
(<em>d</em>)&nbsp;the proposed measures, policies, methods and procedures for operating and maintaining the nuclear facility&nbsp;[&#8230;]<br />
(<em>m</em>)&nbsp;the proposed responsibilities of and qualification requirements and training program for workers, including the procedures for the requalification of workers<br />
(<em>n</em>)&nbsp;the results that have been achieved in implementing the program for recruiting, training and qualifying workers in respect of the operation and maintenance of the nuclear facility&#8221;</li>
<li> subsection&nbsp;14(2) of the <em>Class&nbsp;I Nuclear Facilities Regulations</em> states that &#8220;every licensee who operates a Class&nbsp;I facility shall keep a record of<br />
(<em>a</em>)&nbsp;operating and maintenance procedures&nbsp;[&#8230;]<br />
(<em>c</em>)&nbsp;the results of the inspection and maintenance programs referred to in the licence&#8221;</li>
<li> subsection&nbsp;14(4) of the <em>Class&nbsp;I Nuclear Facilities Regulations</em> states that &#8220;every person who is required by [section&nbsp;14(2) of those regulations] to keep a record of [the operating and maintenance procedures] and [the results of the inspection and maintenance programs] shall retain the record for 10&nbsp;years after the expiry date of the licence to abandon issued in respect of the Class&nbsp;I facility&#8221;</li>  </ul>
<a name="1.4"></a>
<h3 className="reportHeading3"><a name="P138_10718" id="P138_10718"></a>1.4 National and international standards</h3>  <p>This regulatory document is consistent with modern national and international guides and standards for maintenance programs for NPPs. In particular, this regulatory document is based in part on the following national and international publications:</p>  <ul>
<li> Canadian Nuclear Safety Commission (CNSC), S-98 Revision&nbsp;1, <em>Reliability Programs for Nuclear Power Plants</em>, June 2005&nbsp;[<a href="#R1">1</a>]</li>
<li> International Atomic Energy Agency (IAEA), TECDOC-658, <em>Safety Related Maintenance in the Framework of the Reliability Centered Maintenance Concept</em>, Vienna, July 1992</li>
<li> IAEA Safety Standards Series, No. NS-G-2.6, <em>Maintenance, Surveillance and In-service Inspection in Nuclear Power Plants</em>, Vienna, 2002</li>
<li> CAN/CSA N286-05, <em>Management System Requirements for Nuclear Power Plants</em>, 2005&nbsp;[<a href="#R2">2</a>]</li>  </ul>
<a name="2.0"></a>
<h2 className="reportHeading2"><a name="P144_11527" id="P144_11527"></a>2.0 Background</h2>  <p>Effective maintenance is essential for the safe operation of a nuclear power plant. The facility must be monitored, inspected, tested, assessed and maintained to ensure that SSCs function as per design. Various maintenance concepts can be used to form a maintenance strategy.</p>  <p>Figure&nbsp;1 illustrates an example of the relationship of maintenance concepts and associated maintenance activities that provide the basis of a good maintenance strategy. This strategy would be supported by the maintenance program.</p>  <p>The majority of maintenance activities are traditionally allocated to the concept of preventive maintenance. These maintenance activities can be derived, for example, from the safety analysis assumptions, design or reliability requirements, codes and standards, and operating experience and are performed on the basis of service time, actual condition or predicted condition. Where the performance or condition of an SSC does not allow it to function as per design, corrective action must be taken.</p>  <p>The results of all maintenance activities are fed back through an optimization process which enables the continuous improvement of the program.</p>  <p><img src="rd-gd-210/images/rdgd-120-4.png" width="600" height="380" alt="Flow diagram of Maintenance Strategy"/></p>  <p>Figure&nbsp;1: Relationship of maintenance concepts and activities</p>
<a name="3.0"></a>
<h2 className="reportHeading2"><a name="P151_12748" id="P151_12748"></a>3.0 Elements in the Maintenance Program</h2>  <p>To ensure that the overall maintenance strategy is effective, the maintenance program must include mutually supporting elements. These elements cover program basis, maintenance organization, maintenance activities, system health monitoring, maintenance work, spare parts and procurement, management assessment and program review, and record keeping.</p>  <p>Each program element requires sufficient resources governed by the licensee&#8217;s approved policies, processes and procedures. These elements, when integrated, will form a comprehensive maintenance program.</p>  <p>Each program element is divided into objectives, where each objective is directly related to the requirements. For each objective a number of criteria have been established. The elements, objectives and associated criteria are described in sections&nbsp;3.1 to&nbsp;3.8, below.</p>
<a name="3.1"></a>
<h3 className="reportHeading3"><a name="P155_13609" id="P155_13609"></a>3.1 Element One: Program Basis</h3>
<a name="3.1.1"></a>
<h4 className="reportHeading4"><a name="P156_13639" id="P156_13639"></a>3.1.1 Requirements for Program Basis</h4>  <p>The licensee shall define and follow a systematic approach to identify which maintenance activities are to be performed, on which SSCs, and at what intervals. The type and frequency of maintenance activity applied to each SSC is understood to be commensurate with the SSC&#8217;s importance to safety, design function and required performance. </p>  <p>The identification, selection and frequency of maintenance activities shall take the following into account:</p>  <ol>
<li> the relative SSC importance of the risks to national security, the health and safety of persons and the environment</li>
<li> the technical basis for demonstrating that safety goals and performance criteria are met as described in the licence and supporting documentation</li>
<li> the requirements of all applicable industry codes and standards</li>
<li> the radiation protection principle As Low As Reasonably Achievable (ALARA)</li>
<li> design requirements and operating conditions</li>
<li> vendor recommendations</li>
<li> operating experience</li>
<li> aging management requirements</li>
<li> reliability program requirements&nbsp;[<a href="#R1">1</a>]</li>  </ol>  <p>Since the purpose of the maintenance program is to ensure that SSCs can function as per design, it follows that a maintenance strategy must have its basis in the approved plant design and safety analysis. Strategy development, therefore, requires a close liaison between the operating and design organizations to ensure that the strategy is based on a clear understanding of design philosophy and plant details.</p>  <p>The results of maintenance activities shall be used to provide feedback for program changes or design modifications. Program changes and design modifications shall be controlled in accordance with the licensee&#8217;s approved procedures and the maintenance program updated accordingly.</p>
<a name="3.1.2"></a>
<h4 className="reportHeading4"><a name="P170_15392" id="P170_15392"></a>3.1.2 Guidance for Program Basis</h4>  <h4 className="reportHeading4">3.1.2.1 Objective: SSC identification and activity selection</h4>  <p>To ensure that a systematic approach is taken to identify which maintenance activities are to be performed, on which SSCs, and at what intervals, licensees should demonstrate that the following have been taken into account:</p>  <ol>
<li> SSCs are systematically identified, resulting in a master equipment list</li>
<li> the master equipment list is kept current, as equipment gets replaced, or new equipment is added</li>
<li> maintenance activities and their frequency are identified based on:
<ul>
<li> regulatory requirements and applicable codes and standards</li>
<li> design and operating conditions</li>
<li> vendor&#8217;s recommendations</li>
<li> operating experience</li>
<li> operating performance</li>
</ul>
</li>
<li> maintenance activities are prioritized according to the importance of the SSC </li>
<li> the relative importance of SSCs is assessed and categorized with respect to:
<ul>
<li> health and safety of persons</li>
<li> health and safety of the environment</li>
<li> national security, such as safeguards requirements and physical security</li>
</ul>
</li>
<li> a process exists for assessing the role that the SSC plays in meeting the safety goals and performance criteria as described in the licence, safety analysis, severe accident management guidelines and supporting documentation</li>
<li> radiation protection principles, including As Low As Reasonably Achievable (ALARA), operating experience and lessons learned from past maintenance activities are considered in the planning and execution of maintenance activities</li>
<li> maintenance activities are periodically reviewed for adequacy, optimization and improvement </li>
<li> issues related to the aging of the SSCs are identified and managed</li>
<li> reliability targets of SSCs important to safety&nbsp;[<a href="#R1">1</a>]</li>  </ol>  <h4 className="reportHeading4">3.1.2.2 Objective: Maintenance strategy</h4>  <p>To demonstrate that the maintenance strategy has its basis in the approved plant design and safety analysis, and that all SSCs function as per design, licensees should demonstrate that the following criteria have been taken into account:</p>  <ol>
<li> a process has been established to ensure that relevant design information is identified and used in developing the maintenance program</li>
<li> the design authority is clearly defined to maintenance personnel and has responsibility for the design philosophy, plant safety and design basis and safety margins</li>
<li> documents regarding plant design details and operational configuration status are accurate and accessible to maintenance personnel</li>
<li> communication interfaces are defined among groups responsible for design, engineering, operations and maintenance </li>
<li> operational requirements and restrictions imposed by the plant design are documented in specifications and incorporated into maintenance procedures or work instructions</li>
<li> engineering personnel use technical information, such as design analyses, operating experience information, severe accident management guidelines and safety analyses, to provide recommendations on maintenance activities</li>  </ol>  <h4 className="reportHeading4">3.1.2.3 Objective: Program feedback</h4>  <p>When using the results of maintenance activities to provide feedback for program changes or design modifications, licensees should demonstrate that the following criteria have been taken into account:</p>  <ol>
<li> a process is in place to capture lessons learned and operating experience after each maintenance activity </li>
<li> the feedback data collected are managed such that it can be used when doing future maintenance of a similar type, analyzed for failure mechanisms, activity optimization or when considering program changes or design modifications</li>
<li> a process exists for capturing program/procedure changes, design modifications, operating condition changes, equipment performance changes, and existence of degradation. This process includes the verification of the maintenance activities that could be affected by the change, and updating them</li>
<li> there is a process for capturing hazards encountered during the maintenance activity (i.e., radiological hazards)</li>
<li> documents affected by plant modifications such as drawings, procedures, and equipment indexes commonly used for maintenance are current and up to date</li>
<li> there is a process for feeding back the results of maintenance activities to design and engineering</li>
<li> changes to the maintenance program are controlled</li>  </ol>
<a name="3.2"></a>
<h3 className="reportHeading3"><a name="P208_19630" id="P208_19630"></a>3.2 Element Two: Maintenance Organization</h3>
<a name="3.2.1"></a>
<h4 className="reportHeading4"><a name="P209_19671" id="P209_19671"></a>3.2.1 General requirements for maintenance organization</h4>  <p>The licensee shall establish a maintenance organization to effectively implement the maintenance program.</p>
<a name="3.2.2"></a>
<h4 className="reportHeading4"><a name="P211_19831" id="P211_19831"></a>3.2.2 Organizational structure</h4>  <h4 className="reportHeading4">3.2.2.1 Requirements for organizational structure</h4>  <p>Senior plant management shall be responsible for establishing and implementing the maintenance program. They shall establish clear lines of authority and define the responsibilities of the various managerial and supervisory positions.</p>  <p>Functions necessary to meet program element requirements may not traditionally be performed by groups within the maintenance department. In such cases, the interfaces between such groups shall be identified.</p>  <p>Engineering and technical support, with competence in all disciplines important for safety, shall be available throughout the lifetime of the plant.</p>  <p>Interfaces between trades groups and other work groups such as operations or radiation protection who interact with the maintenance organization shall be described.</p>  <h4 className="reportHeading4">3.2.2.2 Guidance for organizational structure</h4>  <h4 className="reportHeading4"><em>3.2.2.2.1 Objective: Maintenance structure</em></h4>  <p>When establishing and implementing the structure of the maintenance program, licensees should demonstrate that the following criteria have been taken into account:</p>  <ol>
<li>senior plant management understands it is responsible for establishing and implementing the maintenance program</li>
<li> an organizational structure is established with clear lines of authority and defined responsibilities</li>
<li>job descriptions for maintenance personnel are available and match daily activities</li>  </ol>  <h4 className="reportHeading4"><em>3.2.2.2.2 Objective: Interfacing statements</em></h4>  <p>When establishing interfacing statements, licensees should demonstrate that the following criteria have been taken into account:</p>  <ol>
<li> interfaces with other groups (e.g., engineering, operation, radiation protection) are defined when functions necessary to meet program requirements are not performed by groups within the maintenance organization</li>
<li> maintenance personnel are aware of each group&#8217;s areas of responsibility</li>  </ol>  <h4 className="reportHeading4"><em>3.2.2.2.3 Objective: Engineering and technical support</em></h4>  <p>When managing engineering and technical support, licensees should demonstrate that the following criteria have been taken into account:</p>  <ol>
<li> a process is in place that provides direction to maintenance personnel when technical support is needed</li>
<li> technical support is available to maintenance personnel</li>
<li> processes are in place to communicate technical information and recommendations to maintenance staff</li>  </ol>  <h4 className="reportHeading4"><em>3.2.2.2.4 Objective: Interfaces with trades groups</em></h4>  <p>When establishing interfaces between trades groups and other work groups who interact with the maintenance organization, licensees should demonstrate that the following criteria have been taken into account:</p>  <ol>
<li> for multi-disciplinary jobs, a lead work group is identified, as required</li>
<li> roles and responsibilities are defined for each work group</li>
<li> work packages include designation of work group responsibilities</li>
<li> the interfaces of different disciplines or work groups are clearly defined</li>  </ol>
<a name="3.2.3"></a>
<h4 className="reportHeading4"><a name="P238_22672" id="P238_22672"></a>3.2.3 Policies, processes and procedures</h4>  <h4 className="reportHeading4">3.2.3.1 Requirements for policies, processes and procedures</h4>  <p>The licensee shall set out policies, processes and procedures that govern how the maintenance program is to be implemented.</p>  <p>The licensee shall ensure that the maintenance policies, processes and procedures are controlled, adhered to, and revised as necessary to reflect the current plant configuration.</p>  <p>The licensee shall have a process for ensuring that program documents are up-to-date.</p>  <h4 className="reportHeading4">3.2.3.2 Guidance for policies, processes and procedures</h4>  <h4 className="reportHeading4"><em>3.2.3.2.1 Objective: Program governance</em></h4>  <p>When setting out policies, processes and procedures that govern how the maintenance program is to be implemented, licensees should demonstrate that the following criteria have been taken into account:</p>  <ol>
<li> the licensee has a clear maintenance policy</li>
<li> strategic direction for maintaining and improving equipment performance is established</li>
<li> priorities are clearly communicated to maintenance personnel</li>
<li> maintenance program objectives have been documented</li>
<li> maintenance management direction, such as goals, initiatives, expectations and priorities, are provided to assist personnel in making decisions and taking actions that contribute to safe and reliable plant operation</li>
<li> the licensee has procedures that govern how the maintenance program is implemented in respect of the objectives and changing priorities </li>  </ol>  <h4 className="reportHeading4"><em>3.2.3.2.2 Objective: Control and adherence</em></h4>  <p>To ensure that the maintenance policies, processes and procedures are controlled, adhered to, and revised as necessary to reflect the current plant configuration, licensees should demonstrate that the following criteria have been taken into account:</p>  <ol>
<li> maintenance policies, processes and procedures:
<ul>
<li> are approved for use</li>
<li> are subject to revision control</li>
<li> reflect the current plant configuration</li>
</ul>
</li>
<li> plant modifications trigger maintenance procedure revisions</li>
<li> administrative controls are implemented for the conduct of maintenance activities that affect plant operations</li>  </ol>  <h4 className="reportHeading4"><em>3.2.3.2.3 Objective: Program status</em></h4>  <p>When developing the process to ensure that program documents are up-to-date, licensees should demonstrate that the following criteria have been taken into account:</p>  <ol>
<li> maintenance policies, processes and procedures reflect the current plant configuration</li>
<li> obsolete documents are removed from service</li>
<li> a process is in place to ensure workers are using the latest revision of a document</li>
<li> changes to plant equipment, procedures and processes are planned and implemented systematically to improve safe and reliable plant operation </li>  </ol>
<a name="3.2.4"></a>
<h4 className="reportHeading4"><a name="P266_25241" id="P266_25241"></a>3.2.4 Training and qualification of workers</h4>  <h4 className="reportHeading4">3.2.4.1 Requirements for training and qualification of workers</h4>  <p>The maintenance program shall be supported by sufficient numbers of trained and qualified personnel. The adequacy of these resources shall be determined based on maintenance program objectives.</p>  <p>The details and results of the training program and personnel qualifications shall be documented. Personnel training and qualifications shall be kept up-to-date.</p>  <p>All maintenance personnel shall be given facility specific training in plant systems, work control, radiation protection, safety rules, access control, security and emergency procedures commensurate with their responsibilities.</p>  <p>Where applicable to their duties, maintenance personnel shall be trained and qualified with respect to other plant programs such as configuration management and quality assurance.</p>  <p>Prior to performing special jobs with higher risk to plant and personnel safety, maintenance personnel shall receive additional training commensurate with the activity ranging from a special job briefing up to full scale mock-up.</p>  <h4 className="reportHeading4">3.2.4.2 Guidance for training and qualification of workers</h4>  <h4 className="reportHeading4"><em>3.2.4.2.1 Objective: Sufficient numbers of qualified personnel</em></h4>  <p>When determining the sufficient numbers of trained and qualified personnel to support the maintenance program, licensees should demonstrate that the following criteria have been taken into account:</p>  <ol>
<li> the licensee has a systematic process for determining the level of maintenance personnel resources that are required</li>
<li> the process includes an evaluation of the organization&#8217;s ability to meet maintenance program objectives</li>
<li> the maintenance staffing levels (including contractors) are consistent with the resource level requirements, and succession planning is in place</li>
<li> maintenance personnel training and qualification requirements are specified</li>
<li> maintenance line management is accountable for the training, qualification, and performance of maintenance personnel</li>
<li> independent work is only performed by qualified personnel</li>
<li> facilities, equipment, and tools are provided and maintained to effectively support training activities</li>  </ol>  <h4 className="reportHeading4"><em>3.2.4.2.2 Objective: Training and qualification requirements</em></h4>  <p>When documenting training and qualifications for personnel (including contractors), licensees should demonstrate that the following criteria have been taken into account:</p>  <ol>
<li> maintenance personnel training and qualification requirements are identified and documented</li>
<li> the details and results of the training program and personnel qualifications are documented and available for verification</li>
<li> maintenance personnel qualifications meet established criteria for their assigned positions</li>
<li> personnel training and qualifications are kept up-to-date</li>
<li> personnel training and qualification records are retained, as per the <em>Nuclear Safety and Control Act</em> and its associated regulations</li>
<li> continuing training is implemented to maintain and enhance knowledge and skills and to address areas such as plant equipment and procedure changes </li>  </ol>  <h4 className="reportHeading4"><em>3.2.4.2.3 Objective: Facility-specific training</em></h4>  <p>For facility-specific training of maintenance personnel, licensees should demonstrate that the following criteria have been taken into account:</p>  <ol>
<li> personnel exhibit competence in performing assigned tasks that consistently result in quality workmanship</li>
<li> personnel are trained on changes prior to maintaining modified equipment, as required</li>
<li> affected procedures, operational drawings, and work documents are available for training on modified equipment</li>  </ol>  <h4 className="reportHeading4"><em>3.2.4.2.4 Objective: Training on other plant programs</em></h4>  <p>For training of maintenance personnel on other plant programs, licensees should demonstrate that the following criteria have been taken into account:</p>  <ol>
<li> all maintenance personnel are given facility-specific training in plant systems, work control, radiation protection, safety rules, access control, security and emergency procedures as commensurate with their responsibilities</li>
<li> where applicable to their duties, maintenance personnel are trained and qualified with respect to other plant programs such as configuration management and quality assurance</li>
<li> environmental awareness should be included in the facility-specific training</li>  </ol>  <h4 className="reportHeading4"><em>3.2.4.2.5 Objective: Special jobs</em></h4>  <p>For training of maintenance personnel on special jobs, licensees should demonstrate that the following criteria have been taken into account:</p>  <ol>
<li> prior to performing special jobs with higher risk to plant and personnel safety, maintenance personnel receive additional training commensurate with the activity ranging from a special job briefing up to full scale mock-up</li>
<li> provision is made for permanent maintenance personnel to be involved with infrequent but major maintenance activities to obtain the experience and skills necessary to support future plant operations</li>
<li> facilities, equipment and tools are provided and maintained to effectively support training activities</li>  </ol>
<a name="3.2.5"></a>
<h4 className="reportHeading4"><a name="P306_30164" id="P306_30164"></a>3.2.5 Maintenance facilities</h4>  <h4 className="reportHeading4">3.2.5.1 Requirements for maintenance facilities</h4>  <p>Maintenance facilities and work areas shall be provided including housing for the shipping, receiving, handling and storing of spare parts, tools and equipment. Where necessary, the facilities shall be access controlled and operated in a manner that preserves the correct environmental conditions and guards against hazards such as fire and chemical spills.</p>  <h4 className="reportHeading4">3.2.5.2 Guidance for maintenance facilities</h4>  <p>When preparing maintenance facilities and work areas, licensees should demonstrate that the following criteria have been taken into account:</p>  <ol>
<li> maintenance facility size and arrangement promote safe and effective work and training activities</li>
<li> appropriate facilities are provided for work on radioactive components and hazardous materials</li>
<li> work area lighting and other environmental conditions promote safe and effective working conditions</li>
<li> work areas are maintained in a clean and orderly condition</li>
<li> tools, equipment, and consumable supplies are available to support work, and appropriate equipment is available for loading, lifting and transporting equipment</li>
<li> rigging equipment and scaffolding are identified, tested and properly stored</li>
<li> facilities, equipment and tools are maintained in good repair</li>
<li> measuring and test equipment is calibrated and controlled to provide accuracy and traceability</li>
<li> test equipment that is out of tolerance or overdue for calibration is removed from service</li>
<li> equipment is accessible for maintenance activities; fixed local area hoists and work platforms are provided, as needed, to facilitate maintenance access to plant equipment</li>
<li> communications equipment is provided and is available to support maintenance activities</li>
<li> all tools, jigs, fixtures, equipment and transient materials have suitable storage provided</li>
<li> where appropriate, the facilities are access-controlled and operated in a manner that preserves the correct environmental conditions and guards against hazards such as fire and chemical spills</li>
<li> suitable storage is provided for tools, supplies and equipment, and special tools are identified and stored to permit ready retrieval</li>
<li> a process is in place to deal with contaminated tools</li>
<li> maintenance facilities and work areas include appropriate monitoring equipment and personal protection equipment (PPE)</li>  </ol>
<a name="3.2.6"></a>
<h4 className="reportHeading4"><a name="P327_32507" id="P327_32507"></a>3.2.6 Contract workers</h4>  <h4 className="reportHeading4">3.2.6.1 Requirements for contract workers</h4>  <p>The licensee shall ensure that contractors comply with work procedures and standards that are higher than or equal to those applicable to plant staff, particularly in the areas of professional competence, adherence to procedures and evaluation of performance. Suitable steps shall be taken to ensure that contract workers conform to equivalent technical standards of the operating organization.</p>  <p>The licensee shall be responsible for assuring the quality of contractor work. Processes shall be in place to control and verify activities performed by contract workers.</p>  <h4 className="reportHeading4">3.2.6.2 Guidance for contract workers</h4>  <h4 className="reportHeading4"><em>3.2.6.2.1 Objective: Contractor work practices</em></h4>  <p>For contractor work, licensees should demonstrate that the following criteria have been taken into account:</p>  <ol>
<li> direction and control are maintained over vendor and contractor maintenance activities</li>
<li> suitable steps are taken to ensure that contract workers conform to equivalent technical standards of the operating organization</li>
<li> tasks, responsibilities, authorities, expectations for performance and interfaces are clearly defined and are understood by contractors</li>  </ol>  <h4 className="reportHeading4"><em>3.2.6.2.2 Objective: Contractor quality assurance</em></h4>  <p>For assuring the quality of contractor work, licensees should demonstrate that the following criteria have been taken into account:</p>  <ol>
<li> processes are in place to control and verify activities performed by contract workers</li>
<li> contractors working in the maintenance area use the same (or equivalent) station-approved policies, procedures and controls and the same quality standards as station maintenance personnel</li>
<li> contractors possess experience, knowledge and skills equivalent to those of station maintenance personnel for their assigned functions and are task-qualified prior to independent work assignment</li>
<li> a process is in place for assuring the quality of contractor work</li>
<li> the interface between the contractor&#8217;s staff and the licensee&#8217;s staff is defined</li>
<li> a process is in place that provides direction to the contractor&#8217;s staff when technical support is required</li>  </ol>
<a name="3.3"></a>
<h3 className="reportHeading3"><a name="P345_34603" id="P345_34603"></a>3.3 Element Three: Maintenance Activities</h3>
<a name="3.3.1"></a>
<h4 className="reportHeading4"><a name="P346_34644" id="P346_34644"></a>3.3.1 General requirements for maintenance activities</h4>  <p>The licensee shall include activities aimed at avoiding, detecting and repairing failures of SSCs.</p>
<a name="3.3.2"></a>
<h4 className="reportHeading4"><a name="P348_34796" id="P348_34796"></a>3.3.2 General guidance for maintenance activities</h4>  <p>As illustrated in Figure 1, maintenance activities aimed at avoiding and detecting incipient failures are considered preventive maintenance activities. Activities aimed at repairing failed SSCs are considered corrective maintenance activities. These activities can be combined at various levels to form a maintenance strategy to meet the program objectives.</p>
<a name="3.3.3"></a>
<h4 className="reportHeading4"><a name="P350_35202" id="P350_35202"></a>3.3.3 Preventive maintenance</h4>  <h4 className="reportHeading4">3.3.3.1 Requirements for preventive maintenance</h4>  <p>Preventive maintenance activities are categorized as periodic (time-based), planned or predictive. Results from periodic or predictive activities may result in additional planned activities. These activities shall include accepted industry standards.</p>  <p>Time-based preventive maintenance should not be scheduled just prior to performance or functional testing as this may mask equipment degradation. However, if the conditions dictate, other preventive maintenance activities should be performed as appropriate.</p>  <h4 className="reportHeading4">3.3.3.2 Guidance for preventive maintenance</h4>  <h4 className="reportHeading4"><em>3.3.3.2.1 Objective: Preventive maintenance activities</em></h4>  <p>For preventive maintenance activities, licensees should demonstrate that the following criteria have been taken into account:</p>  <ol>
<li> preventive maintenance activities have a technical basis to support equipment performance analysis and changes to the activities</li>
<li> preventive activities include accepted industry standards such as Canadian Standards Association (CSA) and ASME requirements for inspections, assessments, calibrations, and function and performance testing</li>
<li> processes and procedures for preventive maintenance activities are clearly documented</li>
<li> a process is in place to control and document any change in scope of the maintenance activities</li>
<li> failure mode analyses are used to help determine preventive activities</li>
<li> preventive maintenance is performed on equipment, including spare parts where appropriate, to maintain the equipment performance</li>
<li> the frequency and type of preventive maintenance have a technical basis and are adjusted based on operating experience, results of reliability analyses, changes in operating conditions and environment, and vendor recommendations</li>
<li> results from periodic or predictive activities are analyzed for additional planned activities</li>
<li> instruments and controls are calibrated entirely and within established criteria</li>
<li> model templates are used for equipment types</li>
<li> preventive maintenance activities are coordinated within blocks of equipment</li>
<li> equipment remains protected as necessary against the effects of environmental conditions, such as humidity, temperature, irradiation, dust and seismic shock</li>  </ol>  <h4 className="reportHeading4"><em>3.3.3.2.2 Objective: Scheduling preventive maintenance activities</em></h4>  <p>When scheduling preventive maintenance activities, licensees should demonstrate that the following criteria have been taken into account:</p>  <ol>
<li> there is a process for cross-checking preventive maintenance activities with testing activities to look for conflicts</li>
<li> conditions are recorded as found</li>
<li> time-based preventive maintenance is not scheduled just prior to performance or functional testing as this may mask equipment degradation; however, if the conditions dictate, other preventive maintenance activities are performed as appropriate</li>  </ol>
<a name="3.3.4"></a>
<h4 className="reportHeading4"><a name="P374_38037" id="P374_38037"></a>3.3.4 Corrective maintenance</h4>  <h4 className="reportHeading4">3.3.4.1 Requirements for corrective maintenance</h4>  <p>The licensee shall have processes in place for initiating corrective maintenance and performing failure diagnosis of equipment. The processes shall include evaluating the impact of failed equipment and prioritizing the repair work with respect to ongoing maintenance activities.</p>  <p>The licensee shall have a process in place for controlling and performing temporary repairs including proper approvals, equivalency assessments and time period until the permanent repair can be implemented or an approved modification made.</p>  <h4 className="reportHeading4">3.3.4.2 Guidance for corrective maintenance</h4>  <h4 className="reportHeading4"><em>3.3.4.2.1 Objective: Failure response</em></h4>  <p>For corrective maintenance activities, while keeping in mind that the processes include evaluating the impact of failed equipment and prioritizing the repair work with respect to ongoing maintenance activities, licensees should demonstrate that the following criteria have been taken into account:</p>  <ol>
<li> conditions adverse to safety have been identified, and corrective action for plant deficiencies has been pursued with incorporation of human performance tools</li>
<li> lessons learned are incorporated into surveillance and engineering procedures</li>
<li> maintenance is performed in a timely manner, considering the safety significance of the SSC</li>
<li> the causes of equipment problems are determined, and corrective actions are implemented and verified for effectiveness</li>
<li> in-depth analysis of equipment failure is commensurate with the importance to plant safety and reliable performance and the likelihood for recurrence</li>
<li> repetitive equipment failures are promptly identified and pursued to resolution, consistent with the safety significance of the equipment; preventive maintenance intervals are adjusted as appropriate; other susceptible components, which are identical to the ones found with repetitive anomalies, are assessed and corrected as necessary to preclude repetition</li>
<li> engineering personnel supports maintenance staff to diagnose the equipment failure in a proper manner</li>  </ol>  <h4 className="reportHeading4"><em>3.3.4.2.2 Objective: Temporary repairs</em></h4>  <p>When controlling and performing temporary repairs, licensees should demonstrate that the following criteria have been taken into account:</p>  <ol>
<li> the licensee employs a process for controlling and performing temporary repairs including proper approvals, equivalency assessments and time period until the permanent repair can be implemented or an approved modification made</li>
<li> temporary repairs are evaluated, controlled and tracked; the use of temporary repairs is minimized, and permanent repairs are made at the earliest reasonable opportunity</li>
<li> procedures are implemented to control the placement, removal and periodic review of temporary modifications for equipment, such as electrical jumpers, lifted leads, mechanical jumpers, hoses, pipe blanks and spool pieces</li>
<li> the limit of duration of a temporary repair for an existing system or component is specified and minimized, and a management action is generated to track removal of a temporary repair </li>  </ol>
<a name="3.3.5"></a>
<h4 className="reportHeading4"><a name="P394_41065" id="P394_41065"></a>3.3.5 Aging management</h4>  <h4 className="reportHeading4">3.3.5.1 Requirements for aging management</h4>  <p>The licensee shall have a process to detect, assess, and manage deterioration of SSCs as a result of aging effects such as irradiation, corrosion, erosion, fatigue, and other material degradation. The type and frequency of maintenance activities shall be modified to accommodate such effects.</p>  <p>For more information on aging management programs (AMPs), refer to RD-334, <em>Aging Management for Nuclear Power Plants</em>&nbsp;[<a href="#R3">3</a>].</p>
<a name="3.3.6"></a>
<h4 className="reportHeading4"><a name="P398_41542" id="P398_41542"></a>3.3.6 Activity optimization</h4>  <h4 className="reportHeading4">3.3.6.1 Requirements for activity optimization</h4>  <p>A process shall be in place to optimize the maintenance activities based on results from items such as (but not limited to) the following:</p>  <ol>
<li> failures in operation</li>
<li> the as-found condition</li>
<li> failures discovered during maintenance activities</li>
<li> frequency of faults and related information</li>
<li> maintainability improvements</li>
<li> operating experience in other plants</li>  </ol>  <h4 className="reportHeading4">3.3.6.2 Guidance for activity optimization</h4>  <p>When optimizing maintenance activities, licensees should demonstrate that the following criteria have been taken into account:</p>  <ol>
<li> a process is in place to optimize future maintenance activities</li>
<li> experience from plant operation and maintenance is used to improve equipment performance and overall plant safety and reliability</li>
<li> industry advancements in maintenance are used to improve overall performance of nuclear power plants</li>
<li> industry operating and maintenance experience is used to improve equipment performance and overall plant safety and reliability</li>  </ol>
<a name="3.4"></a>
<h3 className="reportHeading3"><a name="P413_42569" id="P413_42569"></a>3.4 Element Four: SSC Monitoring</h3>
<a name="3.4.1"></a>
<h4 className="reportHeading4"><a name="P414_42601" id="P414_42601"></a>3.4.1 General requirements for SSC monitoring</h4>  <p>The licensee shall establish baseline criteria against which the function and performance of SSCs can be measured. These criteria shall include reliability, availability, function and performance requirements and assumptions used in the plant design and safety analysis.</p>  <p>The licensee shall include processes and procedures for evaluating whether or not SSCs continue to perform within the baseline criteria and for initiating corrective actions. These processes and procedures shall include condition monitoring, surveillance and testing.</p>
<a name="3.4.2"></a>
<h4 className="reportHeading4"><a name="P417_43183" id="P417_43183"></a>3.4.2 General guidance for SSC monitoring</h4>  <p>When establishing baseline criteria for measuring the function and performance of SSCs (such as flow, pressure, temperature, amperage, etc.), licensees should demonstrate that the following factors have been taken into account:</p>  <ul>
<li> baseline criteria against which the function and performance of SSCs can be measured include reliability, availability, function and performance and assumptions used in the plant safety design, reliability analysis and/or probabilistic safety assessment&nbsp;(PSA)</li>
<li> plans are implemented for collecting data during start-up testing and initial power operation for use in defining baselines, verifying design parameters and validating models</li>
<li> the data required for proper monitoring is defined</li>
<li> acceptance criteria with appropriate margins are established</li>  </ul>  <p>As part of the processes and procedures for evaluating whether or not SSCs continue to perform within the baseline criteria and for initiating corrective actions, licensees should demonstrate that the following criteria have been taken into account:</p>  <ol>
<li> SSC performance goals are established and the basis for monitoring documented</li>
<li> responsibility for monitoring SSC parameters is established</li>
<li> both direct and indirect monitoring of process parameters to identify and evaluate SSC degradation is done</li>
<li> the staff responsible for monitoring has an understanding of the SSC degradation mechanisms and can relate those mechanisms to monitoring parameters</li>
<li> data collected for SSC monitoring is analyzed and compared with the acceptance criteria</li>
<li> a process for reviewing the SSC monitoring program is in place to assess its effectiveness</li>
<li> program level indicator conditions are trended as an indicator of plant performance</li>
<li> equipment performance monitoring is used to detect problems and degrading performance</li>
<li> engineering personnel monitor and evaluate equipment and system performance by examining and trending the results of condition-monitoring activities, reviewing equipment failure history, analyzing availability/reliability information and performing system walk-downs; follow-up actions, based on identified problems, trends and root cause determinations, are timely and effective</li>
<li> the extent and frequency of monitoring may vary but should reflect the ability for early detection and correction of negative trends</li>  </ol>
<a name="3.4.3"></a>
<h4 className="reportHeading4"><a name="P434_45537" id="P434_45537"></a>3.4.3 Condition monitoring</h4>  <h4 className="reportHeading4">3.4.3.1 Requirements for condition monitoring</h4>  <p>The licensee shall have processes and procedures for carrying out condition monitoring. These consist of such things as periodic and in-service inspections, measurements or trending of SSC performance or physical characteristics to indicate current condition and future potential for failure. This monitoring is usually conducted on a non-intrusive basis and includes the use of specialized equipment. Vibration analysis, tribology and thermography are all examples of condition monitoring techniques.</p>  <p>SSCs performing standby functions shall have condition monitoring requirements that indicate operational readiness.</p>  <p>A process shall be in place to ensure that equipment qualification is maintained. Note that equipment qualification includes both environmental qualification and seismic qualification.</p>  <p>A process shall be implemented to ensure that all instrumentation remains within the calibration tolerances as required for it to perform as per design.</p>  <h4 className="reportHeading4">3.4.3.2 Guidance for condition monitoring</h4>  <h4 className="reportHeading4"><em>3.4.3.2.1 Objective: Monitoring process and method</em></h4>  <p>As part of the processes and procedures for carrying out condition monitoring, licensees should demonstrate that the following criteria have been taken into account:</p>  <ol>
<li> collection and analysis of performance data and predictive monitoring information (such as thermal, hydraulic, chemical, electrical, acoustical, vibration and mechanical parameters) are used</li>
<li> use of available input data (consisting of such things as the results of periodic and in-service inspections, measurements or trending of SSC performance or physical characteristics to indicate current condition and future potential for failure) </li>
<li> monitoring is conducted on a non-intrusive basis and includes the use of specialized equipment (vibration analysis, tribology, non-destructive examination and thermography are all examples of condition monitoring techniques)</li>
<li> the extent and frequency of monitoring may vary but should reflect the ability for early detection and correction of negative trends</li>  </ol>  <h4 className="reportHeading4"><em>3.4.3.2.2 Objective: Effective monitoring</em></h4>  <p>When establishing SSC condition monitoring requirements, licensees should demonstrate that the following criteria have been taken into account:</p>  <ol>
<li> reviews and analyses of performance data are conducted to determine equipment operability and availability</li>
<li> SSCs performing standby functions have condition monitoring requirements that indicate operational readiness, and the monitoring equipment is properly maintained</li>
<li> extent and frequency are defined</li>
<li> results of monitoring are reviewed and frequency updated if required</li>
<li> standby equipment has been identified</li>
<li> appropriate monitoring is assigned</li>
<li> corrective maintenance/equipment failures are analyzed to determine if monitoring needs to be adjusted</li>  </ol>  <h4 className="reportHeading4"><em>3.4.3.2.3 Objective: Equipment qualification</em></h4>  <p>As part of the process to ensure that equipment qualification (which includes environmental qualification and seismic qualification) is maintained, licensees should demonstrate that the following criteria have been taken into account:</p>  <ol>
<li> for environmental qualification:
<ul>
<li> environmental qualification equipment list is identified</li>
<li> maintenance activities do not invalidate the environmental qualification status of the equipment </li>
<li> preventive maintenance activities with appropriate intervals are established to maintain the equipment&#39;s qualified life </li>
<li> maintenance documentation capturing the environmental qualification requirements is controlled </li>
<li> maintenance on the qualified equipment is documented and the documentation is readily accessible</li>
<li> failure of qualified equipment is reviewed to assess its impact on the qualification status of the equipment</li>
</ul>
</li>
<li> for seismic qualification:
<ul>
<li> seismically qualified equipment list is identified</li>
<li> maintenance activities do not invalidate the seismic qualification of the equipment and the functional requirements of a seismic category&nbsp;B equipment</li>
<li> replaced equipment should be procured to maintain seismic design basis or upgrade it if seismic hazard was increased</li>
<li> documentation regarding equipment seismic qualification design basis is readily available and records are kept</li>
<li> supports of seismically qualified equipment should be maintained within the design basis </li>
<li> maintenance activities do not lead to excessive SSC vibrations arising from fluid flow or from the functioning of rotating equipment </li>
<li> maintenance activities do not allow the seismic qualification of equipment to be challenged by interaction from adjacent SSCs during a seismic event</li>
<li> maintenance activities should compensate for degradation of equipment due to aging</li>
</ul>
</li>  </ol>  <h4 className="reportHeading4"><em>3.4.3.2.4 Objective: Instrumentation calibration</em></h4>  <p>As part of the process to ensure that instrumentation calibration is maintained, licensees should demonstrate that the following criteria have been taken into account:</p>  <ol>
<li> equipment requiring calibration is defined</li>
<li> a process is implemented to ensure that instrumentation remains within specified limits for it to perform as designed</li>  </ol>
<a name="3.4.4"></a>
<h4 className="reportHeading4"><a name="P478_50594" id="P478_50594"></a>3.4.4 Surveillance</h4>  <h4 className="reportHeading4">3.4.4.1 Requirements for surveillance</h4>  <p>The licensee shall have processes and procedures for carrying out SSC surveillance. Results shall be documented.</p>  <h4 className="reportHeading4">3.4.4.2 Guidance for surveillance</h4>  <p>Examples of surveillance are process system configuration checks, system walkdowns, trending, sampling, operator rounds and routine readings.</p>  <p>As part of the processes and procedures for carrying out SSC surveillance, licensees should demonstrate that the following criteria have been taken into account:</p>  <ol>
<li> parameter expectations should be provided to allow verification of correct operational states and to detect any abnormal conditions</li>
<li> surveillance procedures use specific acceptance criteria</li>
<li> appropriate frequencies for routine inspections and walk-downs are established and adhered to</li>
<li> surveillance includes SSC configuration checks, system walk-downs, trending, sampling, operator rounds and routine readings</li>
<li> procedures are in place for capturing deficiencies and reporting them to maintenance personnel </li>
<li> parameter expectations are provided to allow verification of correct operational states and to detect any abnormal conditions</li>
<li> adequate means are available to verify that proper conditions are established for each mode of plant operation and for mode changes</li>  </ol>
<a name="3.4.5"></a>
<h4 className="reportHeading4"><a name="P491_51871" id="P491_51871"></a>3.4.5 Testing</h4>  <h4 className="reportHeading4">3.4.5.1 Requirements for testing</h4>  <p>The licensee shall have processes and procedures for performance and function testing to verify that SSCs are in good working order and are in a state of readiness to perform their functions. The licensee shall prepare test plans and such plans shall include the test frequency and acceptance criteria.</p>  <p>Instrumentation and test equipment used in performing the test program shall have the range and accuracy required to demonstrate that acceptance criteria have been met. All such test equipment shall be properly calibrated in accordance with a recognized national standard.</p>  <p>Where appropriate, the test program results shall be provided to the reliability program&nbsp;[<a href="#R1">1</a>].</p>  <h4 className="reportHeading4">3.4.5.2 Guidance for testing</h4>  <h4 className="reportHeading4"><em>3.4.5.2.1 Objective: Testing processes and procedures</em></h4>  <p>As part of the processes and procedures for performance and function testing, licensees should demonstrate that the following criteria have been taken into account:</p>  <ol>
<li> testing processes and procedures are readily accessible and subject to document control</li>
<li> the licensee has defined the test frequency and acceptance criteria</li>
<li> testing is done under as-found conditions that simulate, as nearly as practical, actual expected operating conditions</li>
<li> procedures are in place for reporting test results to maintenance personnel </li>  </ol>  <p>The testing program should include a description of scope and responsibilities, scheduling mechanisms, test procedures, and methods for program updates.</p>  <h4 className="reportHeading4"><em>3.4.5.2.2 Objective: Test equipment </em></h4>  <p>For instrumentation and test equipment, licensees should demonstrate that the following criteria have been taken into account:</p>  <ol>
<li> control procedures are in place for test equipment</li>
<li> the appropriate test equipment and instruments, and their necessary range and accuracy, are identified in the test procedure </li>
<li> there is a process for confirming test equipment is calibrated in accordance with a recognized national standard </li>  </ol>  <h4 className="reportHeading4"><em>3.4.5.2.3 Objective: Test results </em></h4>  <p>For test program results, licensees should demonstrate that the following criteria have been taken into account:</p>  <ol>
<li> test results are analyzed and documented, taking into account available history and trending</li>
<li> test results are provided to the reliability program&nbsp;[<a href="#R1">1</a>]</li>
<li> deficiencies are identified and appropriately dispositioned</li>  </ol>
<a name="3.5"></a>
<h3 className="reportHeading3"><a name="P514_54162" id="P514_54162"></a>3.5 Element Five: Maintenance Work</h3>
<a name="3.5.1"></a>
<h4 className="reportHeading4"><a name="P515_54197" id="P515_54197"></a>3.5.1 General requirements for maintenance work</h4>  <p>The licensee shall have processes and procedures for initiating, managing, assessing, prioritizing, planning and scheduling maintenance work. The resulting maintenance activity schedules shall be reviewed routinely and revised to account for changing conditions, operating experiences, and modifications.</p>  <p>The licensee shall undertake and accomplish maintenance activities in a manner that is commensurate with the safety significance of the SSC and with effective allocation of resources.</p>  <p>Unit and equipment identification shall be clear in work procedures and in the field to ensure that the proper equipment is isolated, maintained, and returned to service. Appropriate personal protection procedures shall be implemented before carrying out maintenance activities.</p>
<a name="3.5.2"></a>
<h4 className="reportHeading4"><a name="P519_55009" id="P519_55009"></a>3.5.2 General guidance for maintenance work</h4>  <p>For the work management process, licensees should demonstrate that the following criteria have been taken into account:</p>  <ul>
<li> administrative controls are implemented for maintenance activities that affect safe and reliable plant operations; examples of activities that are controlled include job turnovers, use of procedures, use of special tools and lifting equipment, and use and traceability of measuring and test equipment</li>
<li> the licensee has processes and procedures for initiating, managing, assessing, prioritizing, planning and scheduling maintenance work</li>
<li> regular review meetings are specified (with frequency)</li>
<li> lessons learned from previous planning and scheduling results are incorporated</li>  </ul>  <p>To prioritize the maintenance activities, licensees should demonstrate that the following criteria have been taken into account:</p>  <ol>
<li> the licensee must undertake and accomplish maintenance activities in a manner that is commensurate with the safety significance of the SSC and with effective allocation of resources</li>
<li> equipment problems receive appropriate attention and timely resolution, based on priorities established through the work management process</li>
<li> technical support is available to resolve equipment priority conflicts</li>
<li> the licensee has a prioritization methodology and criteria, which are applied to work management; these should include the following licensing basis requirements:
<ul>
<li> safety analysis</li>
<li> PSA</li>
<li> regulatory requirements</li>
<li> ALARA</li>
<li> codes and standards</li>
<li> economics</li>
</ul>
</li>
<li> leaks and fire protection are considered based on the safety significance of the SSC</li>  </ol>  <p>To protect the safety of personnel, licensees should demonstrate that the following criteria have been taken into account:
</p>  <ol className="lower-alpha">
<li> maintenance work is properly controlled, and is documented</li>
<li> operations personnel control activities that affect the status of installed systems and equipment</li>
<li> appropriate personal protection procedures are implemented before carrying out maintenance activities</li>
<li> there is a procedure for properly identifying SSCs</li>
<li> equipment in the field is readily identified</li>  </ol>
<a name="3.5.3"></a>
<h4 className="reportHeading4"><a name="P543_57116" id="P543_57116"></a>3.5.3 Work assessment</h4>  <h4 className="reportHeading4">3.5.3.1 Requirements for work assessment</h4>  <p>The licensee shall implement a process for assessing maintenance activities. In addition to job tasks, the process shall assess the impact of maintenance activities on safety including such things as regulatory requirements, operating policies and principles, potential industrial and radiological hazards to site personnel, the public and the environment.</p>  <p>The assessment shall also take into account the cumulative effect of all plant equipment that is out of service on performance of safety functions.</p>  <p>(Note that &#8220;operating policies and principles&#8221; is standard Canadian terminology that is equivalent to the IAEA&#8217;s terminology of &#8220;operating limits and conditions&#8221;.)</p>  <h4 className="reportHeading4">3.5.3.2 Guidance for work assessment</h4>  <h4 className="reportHeading4"><em>3.5.3.2.1 Objective: Assessment of maintenance activities</em></h4>  <p>As part of the process for assessing maintenance activities, licensees should demonstrate that the following criteria have been taken into account:</p>  <ol>
<li> the assessment includes a review of requirements for tradespersons, bills of materials, and tools</li>
<li> the assessment includes the requirements for special qualifications</li>
<li> in addition to job tasks, the process assesses the impact of maintenance activities on safety</li>
<li> the process assesses the impact of maintenance activities on regulatory requirements and approvals</li>
<li> the assessment includes the impact on operating limits and conditions</li>
<li> potential industrial and radiological hazards to site personnel are considered</li>
<li> supporting tasks such as accessibility provisions, insulation removal, and scaffolding are identified</li>
<li> the assessment includes review of past maintenance activity results</li>
<li> the need for special procedures or work instructions is included</li>  </ol>  <h4 className="reportHeading4"><em>3.5.3.2.2 Objective: Assessment of safety impact of out-of-service plant equipment</em></h4>  <p>As part of the process for assessing the cumulative effect of out-of-service plant equipment on the performance of safety functions, licensees should demonstrate that the following criteria have been taken into account:</p>  <ol>
<li> the assessment includes review of the risk that may result from the proposed maintenance activities and how this risk should be assessed and managed; one of the accepted options is to use a risk monitor supported by plant-specific PSA, if possible</li>
<li> there is a process that assures maintenance activities are reviewed by nuclear safety staff, as required</li>  </ol>
<a name="3.5.4"></a>
<h4 className="reportHeading4"><a name="P564_59512" id="P564_59512"></a>3.5.4 Work planning and scheduling</h4>  <h4 className="reportHeading4">3.5.4.1 Requirements for work planning and scheduling</h4>  <p>The licensee shall implement processes and procedures for planning and scheduling all maintenance activities. Work planning shall take place at the overall plant level and at the individual job level. Procedures to deal with any deferral or omission of a scheduled maintenance activity shall be included.</p>  <p>All maintenance personnel shall be made aware of the importance to safety of the tasks they are performing and of the potential safety consequences of technical or procedural errors. Clear equipment identification procedures shall be used.</p>  <p>Coordination of work groups shall be incorporated into work planning and scheduling. Where appropriate, pre- and post-job briefings shall be included.</p>  <p>A process for foreign material exclusion shall be implemented as appropriate for all maintenance work. This is particularly important when opening up closed systems such as process piping and mechanical equipment.</p>  <h4 className="reportHeading4">3.5.4.2 Guidance for work planning and scheduling</h4>  <h4 className="reportHeading4"><em>3.5.4.2.1 Objective: Planning and scheduling maintenance activities</em></h4>  <p>As part of the processes and procedures for planning and scheduling maintenance activities, licensees should demonstrate that the following criteria have been taken into account:</p>  <ol>
<li> planning is done on several levels &#8211; daily maintenance planning, planning for next scheduled outage, and planning for future outages</li>
<li> at the individual job level, planning is done and involves ensuring that the tools, equipment and parts are available before the job is scheduled</li>
<li> when appropriate, grouping of maintenance activities is done to minimize equipment unavailability</li>
<li> coordination of work groups is incorporated into work planning</li>
<li> long-range planning is effectively used for maintenance activities, such as performance of major overhauls, modifications or the implementation of engineering changes</li>
<li> there is a process for scheduling maintenance activities in accordance with their importance to safety </li>
<li> the schedules are reviewed routinely and revised to account for changing conditions, operating experiences, and schedule delays or required changes</li>
<li> procedures are in place to deal with any deferral or omission of a scheduled maintenance activity</li>
<li> deviations from scheduled preventive maintenance outside of grace period are justified and authorized by qualified personnel</li>
<li> schedule deviations are minimized and tracked to provide feedback</li>
<li> coordination of work groups is incorporated into work scheduling</li>
<li> a process for foreign material exclusion is implemented as appropriate for all maintenance work</li>  </ol>  <h4 className="reportHeading4"><em>3.5.4.2.2 Objective: Risk awareness</em></h4>  <p>To address the potential safety consequences of technical or procedural errors, licensees should demonstrate that the following human performance tools have been taken into account:</p>  <ol>
<li> pre-job and post-job briefings </li>
<li> event-free tools </li>
<li> pre-job briefings include discussion of the following, as appropriate: potential nuclear safety impact, personnel safety hazards and protective equipment, special job rules, acceptance criteria, hold points and contingencies</li>
<li> planning of maintenance activities considers ALARA and conventional safety practices</li>
<li> communications to workers clearly and consistently identify the equipment to be worked on and the field nomenclature</li>
<li> where appropriate, post-job briefings include the following: lessons learned, procedure adequacy, maintenance practices, as-found condition and emergent work</li>  </ol>  <h4 className="reportHeading4"><em>3.5.4.2.3 Objective: Coordination of work groups</em></h4>  <p>When coordinating work groups, licensees should demonstrate that the following criteria have been taken into account:</p>  <ol>
<li> pre-job briefings include coordination requirements</li>
<li> effective communication is used between work groups</li>
<li> job briefings for turnover of work to subsequent work groups are conducted to provide as-left conditions and job-site hazards </li>  </ol>  <h4 className="reportHeading4"><em>3.5.4.2.4 Objective: Foreign material exclusion</em></h4>  <p>The licensee should take into account the need to implement procedures for foreign material exclusion during maintenance activities.</p>
<a name="3.5.5"></a>
<h4 className="reportHeading4"><a name="P600_63582" id="P600_63582"></a>3.5.5 Outage management</h4>  <h4 className="reportHeading4">3.5.5.1 Requirements for outage management</h4>  <p>The licensee shall have a process in place to appropriately manage the increased maintenance activities during plant outages. Effective work group coordination shall be established.</p>  <p>The plan to take equipment out of service for maintenance during an outage shall include measures to deal with all possible consequences of an event occurring while the equipment is out of service. This is particularly important when the equipment in question has a specific safety function or heat sink implication.</p>  <p>When planning and scheduling outage work, an assessment of the cumulative effect of all plant equipment that is out of service shall be undertaken to ensure no adverse effects on the performance of safety functions.</p>  <h4 className="reportHeading4">3.5.5.2 Guidance for outage management</h4>  <h4 className="reportHeading4"><em>3.5.5.2.1 Objective: Outage management</em></h4>  <p>When managing outage activities, licensees should demonstrate that the following criteria have been taken into account, in addition to those in section 3.5.2:</p>  <ol>
<li> the licensee implements specific procedures for planning outage maintenance activities</li>
<li> the station has a forced outage plan that is current</li>  </ol>  <h4 className="reportHeading4"><em>3.5.5.2.2 Objective: Outage safety planning</em></h4>  <p>When planning and performing maintenance on out-of-service equipment during plant outages, licensees should demonstrate that the following criteria have been taken into account:</p>  <ol>
<li> the decision to take equipment out of service for maintenance during an outage takes into consideration the likelihood and possible consequences of an event occurring while the equipment is out of service</li>
<li> outage plans are reviewed for nuclear safety</li>
<li> all work groups review outage plans in their area of responsibility</li>
<li> controls are applied during infrequently performed tests and evolutions to maintain the plant within the design basis</li>
<li> contingency plans are written for managing recall times and alternate measures to maintain safe shutdown</li>
<li> safety planning includes impacts on operating units or systems</li>  </ol>  <h4 className="reportHeading4"><em>3.5.5.2.3 Objective: Outage work scheduling</em></h4>  <p>When planning and scheduling outage work, licensees should demonstrate that the following criteria have been taken into account:</p>  <ol>
<li> clear statements are made that identify when safety-related equipment is being taken out of service, the duration and the impact of taking that equipment out of service</li>
<li> when scheduling outage work, an assessment takes into account the total plant equipment that is planned to be out of service to determine the overall effect on the performance of safety functions</li>
<li> reviews are routinely done to capture changes from the original plan and assess the impact</li>  </ol>
<a name="3.5.6"></a>
<h4 className="reportHeading4"><a name="P623_66206" id="P623_66206"></a>3.5.6 Maintenance procedures</h4>  <h4 className="reportHeading4">3.5.6.1 Requirements for maintenance procedures</h4>  <p>Maintenance shall be performed in accordance with approved written procedures, instructions or drawings as appropriate to the situation.</p>  <p>The licensee shall have a process in place for controlling procedure preparation, review, validation, issue, modification and revision. Where appropriate, acceptance criteria shall be defined and actions clearly specified in case acceptance criteria cannot be met.</p>  <p>When a procedure for carrying out a maintenance activity is found to be inadequate, there shall be measures to ensure that the activity is halted or safely managed until such time as the inadequacy in the procedure is corrected. If the inadequacy is not unique to the situation, a means of permanently correcting the procedure shall be provided.</p>  <p>Procedures shall include specific provisions when particular hazards are envisaged.</p>  <p>Temporary changes to procedures shall be properly controlled, be subject to review and licensee approval and specify the period over which the change is to apply.</p>  <p>Procedures shall be in place for the turnover of maintenance activities to relieving work crews.</p>  <h4 className="reportHeading4">3.5.6.2 Guidance for maintenance procedures</h4>  <h4 className="reportHeading4"><em>3.5.6.2.1 Objective: Procedure quality </em></h4>  <p>Written procedures, instructions or drawings should demonstrate that the following criteria have been taken into account:</p>  <ol>
<li> maintenance procedures, instructions and drawings are formally approved</li>
<li> mark-up on documentation is verified by independent personnel and subject to appropriate approval</li>
<li> maintenance procedures, instructions and drawings are prepared in such quality that take into account the following factors:
<ul>
<li> maintenance procedures and documents are clear and technically accurate, provide appropriate direction, and contain sufficient information for users to understand and perform activities effectively</li>
<li> human factors considerations, such as the sequence of procedure steps and the placement of notes and caution statements, are incorporated into procedures to reduce the likelihood of error</li>
<li> procedures include lessons learned from operating experience</li>
<li> acceptance criteria are defined and actions clearly specified; for example, technical details &#8211; such as set points, tolerances, control logic and equipment numbers &#8211; are correct and consistent among procedures, drawings, valve line-up sheets and system descriptions; similarly, hold points &#8211; such as quality assurance and radiological protection checks &#8211; are included in procedures as needed</li>
<li> the level of detail in procedures is consistent with the training and qualification of the users</li>
<li> equipment identification is clear in the work package to ensure that the proper equipment is isolated, maintained and returned to service</li>
<li> requirements for documentation of an action or recording of data are specified, when appropriate, in the procedure; the recording of information is done while the task is being performed</li>
</ul>
</li>  </ol>  <h4 className="reportHeading4"><em>3.5.6.2.2 Objective: Procedure control</em></h4>  <p>As part of the process for procedure control, licensees should demonstrate that the following criteria have been taken into account:</p>  <ol>
<li> the licensee has a process in place for controlling procedure preparation, review, validation, issuance, modification and revision</li>
<li> procedures are reviewed for technical accuracy, verified and validated for correctness and usability prior to initial use</li>
<li> documents, including procedures, drawings and other work-related references, are readily accessible and up to date</li>
<li> acceptance criteria are defined and actions clearly specified in case acceptance criteria cannot be met. Acceptance criteria should not be changed without adequate justification and approval</li>
<li> a policy governing the use of procedures is implemented and includes the following:
<ul>
<li> directions for when procedures are to be used as general guidance, followed step-by-step, or signed off for each step</li>
<li> directions for when a procedure must be physically at the job site</li>
<li> actions to be taken when procedures conflict or are inadequate for the intended task or when unexpected results occur</li>
<li> actions to be taken when a procedure activity is interrupted</li>
</ul>
</li>  </ol>  <h4 className="reportHeading4"><em>3.5.6.2.3 Objective: Procedure adequacy</em></h4>  <p>When a procedure is found to be inadequate, licensees should demonstrate that the following criteria have been taken into account:</p>  <ol>
<li> there is a process for users to provide feedback to procedure writers to identify such items as inaccuracies, difficulties in use, and suggestions for improvement</li>
<li> there is a process for ensuring a procedure inadequacy is formally corrected, unless the change is one-off</li>
<li> when a procedure is found to be invalid:
<ul>
<li> work is stopped in a safe manner, until an approved mark-up procedure or a revised procedure is issued</li>
<li> the procedure deficiency is timely and proactively reported through a formal process and, if possible, with recommendation for modification</li>
<li> a risk assessment is conducted to determine the effects of its previous uses, and if necessary, appropriate corrective actions are taken</li>
</ul>
</li>  </ol>  <h4 className="reportHeading4"><em>3.5.6.2.4 Objective: Identifying hazards</em></h4>  <p>When particular hazards are envisaged, licensees should demonstrate that the following criteria have been taken into account:</p>  <ol>
<li> when appropriate, procedures include cautions, warnings, hazard information to identify safety issues regarding maintenance personnel, plant equipment and maintainer actions</li>
<li> the procedure ensures that users are made aware of:
<ul>
<li> the potential plant safety consequences of technical or procedural errors</li>
<li> the safety impact of the tasks they are performing on other plant personnel</li>
</ul>
</li>
<li> if the work is high hazard or complex, prior training and/or rehearsal of the procedure are done, to familiarize users and to verify the controls and appropriate contingency actions </li>  </ol>  <h4 className="reportHeading4"><em>3.5.6.2.5 Objective: Temporary procedure change</em></h4>  <p>When applying temporary changes to procedures, licensees should demonstrate that the following criteria have been taken into account:</p>  <ol>
<li> a process is in place for controlling temporary changes to procedures</li>
<li> the period of the temporary change is specified</li>
<li> temporary procedure changes are properly controlled, reviewed and approved for release by authorized personnel</li>
<li> administrative control for temporary changes to procedures includes a method to ensure user awareness of applicable temporary changes, and timely incorporation into a permanent procedure (or made obsolete)</li>  </ol>  <h4 className="reportHeading4"><em>3.5.6.2.6 Objective: Procedure turnover</em></h4>  <p>When turning over a procedure to another working group, licensees should demonstrate that the following criteria have been taken into account:</p>  <ol>
<li> required procedures are in place for the turnover of maintenance activities</li>
<li> completed steps are clearly indicated in the procedure with signature</li>
<li> pertinent maintenance status information is recorded prior to turnover</li>
<li> temporary procedure changes are briefed between &#8220;in&#8221; and &#8220;out&#8221; teams</li>  </ol>
<a name="3.5.7"></a>
<h4 className="reportHeading4"><a name="P682_73078" id="P682_73078"></a>3.5.7 Post-maintenance verification and testing</h4>  <h4 className="reportHeading4">3.5.7.1 Requirements for post-maintenance verification and testing</h4>  <p>Before returning equipment to an operational state, the licensee shall ensure that post-maintenance verification has been completed, the affected configuration is verified, all relevant records are reviewed for completeness and any unexpected findings have been assessed and dispositioned. Where appropriate, post-maintenance testing shall be conducted and a fitness for service assessment shall be completed.</p>  <p>A process shall be in place to periodically assess that maintenance activities have been carried out within licensee expectations. This work shall be done by appropriately qualified individuals who do not have direct responsibility for performing the work. Assessment shall include direct observation of the specific maintenance activity as well as examination of the documentation.</p>  <h4 className="reportHeading4">3.5.7.2 Guidance for post-maintenance verification and testing</h4>  <h4 className="reportHeading4"><em>3.5.7.2.1 Objective: Returning equipment to operational state</em></h4>  <p>Before returning equipment to an operational state, licensees should demonstrate that the following criteria have been taken into account:</p>  <ol>
<li> the maintenance process specifies that a task is included to verify that equipment can perform its intended function after the maintenance activities are complete</li>
<li> the affected SSC configuration is verified before it is returned to service</li>
<li> any unexpected findings during post-maintenance verification and testing have been assessed and dispositioned</li>
<li> before returning equipment to an operational state, the licensee has ensured that post-maintenance verification has been completed</li>  </ol>  <h4 className="reportHeading4"><em>3.5.7.2.2 Objective: Maintenance activity assessment</em></h4>  <p>As part of the process to periodically assess maintenance activities, licensees should demonstrate that the following criteria have been taken into account:</p>  <ol>
<li> relevant records for the maintenance activity are reviewed for completeness</li>
<li> work sites are clean and in orderly condition</li>
<li> assessment work is done by appropriately qualified individuals</li>
<li> assessment includes direct observation of the specific maintenance activity</li>  </ol>
<a name="3.6"></a>
<h3 className="reportHeading3"><a name="P699_75208" id="P699_75208"></a>3.6 Element Six: Spare Parts and Procurement</h3>
<a name="3.6.1"></a>
<h4 className="reportHeading4"><a name="P700_75252" id="P700_75252"></a>3.6.1 Requirements for spare parts and procurement</h4>  <p>The licensee shall establish processes and procedures to procure, receive, store, secure and issue spare parts, tools and materials.</p>  <p>Authority for specifying technical and quality requirements shall be clearly defined when procuring spare parts. The spares shall meet the same technical standards and quality requirements as the installed plant items. The licensee shall have a change control process in place to deal with non-identical replacement parts and deviations from the original specifications.</p>  <p>Procurement processes shall include requirements for qualified suppliers. The receipt and acceptance procedures shall include a requirement to label, tag and quarantine items that are non-conforming.</p>  <p>Parts which have a limited lifetime shall be replaced accordingly. This is to ensure suitability for the expected service when needed. Defective parts which are not suitable for reuse shall be disposed of following a documented process to prevent reuse.</p>
<a name="3.6.2"></a>
<h4 className="reportHeading4"><a name="P705_76256" id="P705_76256"></a>3.6.2 Guidance for spare parts and procurement</h4>  <h4 className="reportHeading4">3.6.2.1 Objective: Spare parts and tools management</h4>  <p>As part of the processes and procedures to procure, receive, store, secure and issue spare parts, tools and materials, licensees should demonstrate that the following criteria have been taken into account:</p>  <ol>
<li> procurement programs conform to applicable safety standards</li>
<li> issuing of materials, tools and spare parts is controlled</li>
<li> materials and tools are controlled to prevent misuse, abuse or damage</li>
<li> spare parts and tools are stored in the facilities with appropriate environmental conditions, such as temperature, humidity, etc.</li>
<li> a process exists for controlling unused parts</li>
<li> parts that are not suitable for use are controlled and dispositioned, following a documented process</li>
<li> a tool maintenance program exists</li>
<li> defective tools that are not suitable for use are disposed of following a documented process to prevent reuse</li>  </ol>  <h4 className="reportHeading4">3.6.2.2 Objective: Technical requirements for spare parts</h4>  <p>When procuring spare parts, licensees should demonstrate that the following criteria have been taken into account:</p>  <ol>
<li> spare part technical requirements conform to applicable safety standards</li>
<li> a process is in place for maintenance personnel to deal with non-identical replacement parts and deviations from the original specifications </li>  </ol>  <h4 className="reportHeading4">3.6.2.3 Objective: Qualified suppliers for spare parts</h4>  <p>The licensee should ensure that qualified suppliers are identified according to applicable safety standards.</p>  <h4 className="reportHeading4">3.6.2.4 Objective: Shelf life for spare parts</h4>  <p>When replacing parts that have a limited lifetime, licensees should demonstrate that the following criteria have been taken into account:</p>  <ol>
<li> parts which have a limited lifetime are controlled </li>
<li> a process exists for ensuring preventive maintenance is performed as required on materials and equipment in storage; these activities are documented and made available to the plant personnel</li>  </ol>
<a name="3.7"></a>
<h3 className="reportHeading3"><a name="P726_78164" id="P726_78164"></a>3.7 Element Seven: Management Assessment and Program Review</h3>
<a name="3.7.1"></a>
<h4 className="reportHeading4"><a name="P727_78223" id="P727_78223"></a>3.7.1 Requirements for management assessment and program review</h4>  <p>The licensee shall establish a continuous process for assessment, review and improvement of the maintenance program to ensure that the maintenance strategy is effective, meets its objectives and has been implemented in accordance with applicable industry codes and standards.</p>  <p>Whenever a maintenance program deficiency is identified, its significance shall be assessed and where appropriate a cause determination shall be conducted and corrective actions taken. All reviews and assessments shall be properly documented and recorded.</p>  <p>Feedback from the improvement process shall be incorporated into the maintenance training program.</p>
<a name="3.7.2"></a>
<h4 className="reportHeading4"><a name="P731_78914" id="P731_78914"></a>3.7.2 Guidance for management assessment and program review</h4>  <h4 className="reportHeading4">3.7.2.1 Objective: Assessment process</h4>  <p>When establishing a continuous process for assessment, review and improvement of the maintenance program, licensees should demonstrate that the following criteria have been taken into account:</p>  <ol>
<li> goals are established for continuous improvement, and a strategic direction for improving performance is established</li>
<li> the priorities for performance are clearly identified for maintenance personnel</li>
<li> meaningful indicators are established and used to monitor and improve maintenance performance; the results are measurable and are periodically evaluated, to determine effectiveness</li>
<li> managers are committed to improve station performance and to achieve station goals and objectives</li>
<li> management expectations and station processes and performance are compared with industry benchmarks, to improve performance and identify opportunities to emulate best practices</li>
<li> future resource needs, such as maintenance personnel, equipment, tools, spare parts and information are identified and integrated into business plans by maintenance managers</li>
<li> self-assessment and peer audits are used to determine the effectiveness of processes and work activities and to identify improvement actions, and any follow-up action items are tracked to completion and periodically reviewed for timeliness and effectiveness</li>
<li> maintenance managers routinely monitor, observe, and assess maintenance work activities and plant conditions to maintain and reinforce high standards of performance</li>  </ol>  <h4 className="reportHeading4">3.7.2.2 Objective: Deficiency assessment</h4>  <p>Licensees are required to have a process in place for dispositioning maintenance program deficiencies. Whenever a maintenance program deficiency is identified, licensees should demonstrate that the following criteria have been taken into account:</p>  <ol>
<li> for program improvement purposes, findings from such things as events, rework, material defects and other symptoms of maintenance ineffectiveness are identified, assessed, documented, and trended </li>
<li> corrective actions are prioritized, assigned, tracked and completed in a timely fashion, so as to prevent recurrence</li>  </ol>  <h4 className="reportHeading4">3.7.2.3 Objective: Feedback</h4>  <p>When incorporating feedback from the improvement process, licensees should demonstrate that the following criteria have been taken into account:</p>  <ol>
<li> changes in objectives, responsibilities, practices and processes are clearly communicated to affected personnel, and appropriate training is provided</li>
<li> maintenance managers motivate personnel to improve performance by encouraging feedback for the training program</li>
<li> all program reviews and assessments are evaluated for inclusion in the training program</li>  </ol>
<a name="3.8"></a>
<h3 className="reportHeading3"><a name="P751_81599" id="P751_81599"></a>3.8 Element Eight: Record Keeping</h3>
<a name="3.8.1"></a>
<h4 className="reportHeading4"><a name="P752_81632" id="P752_81632"></a>3.8.1 Requirements for record keeping</h4>  <p>In addition to complying with the NSCA, regulations, and any other reporting and record-keeping requirements (such as CNSC regulatory document RD-99.1, <em>Reporting Requirements for Operating Nuclear Power Plants</em>&nbsp;[<a href="#R4">4</a>]), the records and reports shall include sufficient information to provide objective evidence that the maintenance program is being fully implemented and in accordance with the quality assurance program.</p>  <p>The licensee shall document a description of repairs carried out, identifying the component that failed, the cause of failure, the remedial action taken, and the state of the system after repairs. The licensee shall periodically review the maintenance results for evidence of incipient or recurring failures.</p>
<a name="3.8.2"></a>
<h4 className="reportHeading4"><a name="P755_82394" id="P755_82394"></a>3.8.2 Guidance for record keeping</h4>  <h4 className="reportHeading4">3.8.2.1 Objective: Compliance</h4>  <p>To comply with reporting and record-keeping requirements, licensees should clearly define which records have to be kept, and these records should provide objective evidence that the maintenance program is being effectively implemented and the applicable CSA standards are met. The records should include the following:</p>  <ol>
<li> maintenance work records </li>
<li> maintenance program and procedure revision records</li>
<li> staff training and qualification records</li>
<li> instrument and equipment qualification records</li>
<li> maintenance performance evaluation reports</li>
<li> system health reports</li>
<li> performance indicators report</li>
<li> maintenance-related events report</li>
<li> maintenance-related inspection and audit reports</li>
<li> performance demonstration records</li>  </ol>  <p>For more information on reporting and record-keeping, refer to GD&#8209;99.1, <em>Guide to the Reporting Requirements for Operating Nuclear Power Plants</em> [<a href="#R5">5</a>].</p>  <h4 className="reportHeading4">3.8.2.2 Objective: Repair records</h4>  <p>To comply with reporting and record-keeping requirements for repairs, licensees should demonstrate that the following criteria have been taken into account:</p>  <ol>
<li> maintenance results are periodically reviewed for seeking evidence of incipient or recurring failures</li>
<li> as-found and as-left conditions of the equipment and work performed are accurately documented</li>
<li> maintenance records are kept and maintained to facilitate reviews and collection of evidence of incipient or recurring failures</li>
<li> records from lessons learned, user feedback, maintenance history and operating experience are retrievable, and stored in a format useful for maintenance reviews</li>  </ol>
<a name="#RDsection[50]#"></a>
<h2 className="reportHeading2"><a name="P778_83854" id="P778_83854"></a>Glossary</h2>  <dl className="margins-removed">
<dt>aging management </dt>
<dd>Engineering, operations, inspection, and maintenance actions to control, within acceptable limits, the effects of physical aging and obsolescence of structures, systems or components (SSCs).</dd>
<dt>baseline criteria </dt>
<dd>A set of measurements (or metrics) representing the starting level of performance for a SSC. Baseline criteria are derived from design requirements and are usually established during commissioning and after replacement, overhaul or refurbishment. </dd>
<dt>calibration </dt>
<dd>The process to verify that with a known precision input, an instrument or channel gives the required output.</dd>
<dt>condition monitoring </dt>
<dd>Continuous or periodic inspections, measurements or trending of the performance or physical characteristics of SSCs to indicate current or future performance and the potential for failure.</dd>
<dt>corrective maintenance </dt>
<dd>Actions that, by means of repair, overhaul or replacement, restore the capability of a failed SSC to perform its defined function within acceptance criteria.</dd>
<dt>failure</dt>
<dd>The inability or interruption of ability of a SSC to function within acceptance criteria.</dd>
<dt>function testing </dt>
<dd>Testing done to verify that a SSC is capable of performing its design function.</dd>
<dt>in-service inspection </dt>
<dd>A periodic non-destructive examination of nuclear power plant SSCs in order to provide information about their current condition and damage, defect or degradation that might occur.</dd>
<dt>inspection</dt>
<dd>An examination, observation, measurement or test undertaken to assess an SSC&#8217;s condition.</dd>
<dt>maintenance </dt>
<dd>The organized activities, both administrative and technical, of keeping SSCs in good operating condition, including both preventive and corrective (or repair) aspects.</dd>
<dt>modification </dt>
<dd>Any alteration or addition that is temporary or permanent, to an SSC&#8217;s physical configuration or design requirements.</dd>
<dt>monitoring</dt>
<dd>See Condition Monitoring</dd>
<dt>nuclear power plant (NPP)</dt>
<dd>Any nuclear fission reactor installation that has been constructed to generate electricity on a commercial scale and is a Class&nbsp;IA nuclear facility, as defined in the <em>Class I Nuclear Facilities Regulations</em>.</dd>
<dt>overhaul</dt>
<dd>The comprehensive inspection and restoration of a SSC in order to maintain it in good operating condition or to restore its ability to function as per design. Includes such things as disassembly, cleaning, lubricating, adjusting, parts inspection or replacement and testing.</dd>
<dt>parameter expectations </dt>
<dd>Measures of criteria against which the performance of a SSC can be judged. </dd>
<dt>performance testing </dt>
<dd>Testing done to determine whether a system meets specified acceptance criteria.</dd>
<dt>periodic maintenance </dt>
<dd>Form of preventive maintenance consisting of servicing, parts replacement, surveillance, or testing at predetermined intervals of calendar time, operating time or number of cycles. Also known as time-based maintenance.</dd>
<dt>permanent repair </dt>
<dd>Any activity that restores a failed or degraded SSC to function within its original design.</dd>
<dt>planned maintenance </dt>
<dd>Form of preventive maintenance consisting of refurbishment or replacement that is scheduled and performed prior to unacceptable degradation of a SSC.</dd>
<dt>predictive maintenance </dt>
<dd>Form of preventive maintenance performed continuously or at intervals governed by observed condition to monitor, diagnose or trend an SSC&#8217;s condition indicators. Results indicate current and future functional ability or the nature of and schedule for planned maintenance. Also known as condition based maintenance.</dd>
<dt>preventive maintenance </dt>
<dd>Actions that detect, preclude or mitigate degradation of a functional SSC to sustain or extend its useful life by controlling degradation and failures to an acceptable level. Preventive maintenance may be periodic, planned or predictive.</dd>
<dt>qualification </dt>
<dd>A formal statement that an individual or team possesses the education, training and experience required to meet specified job performance requirements. A formal statement of competence.</dd>
<dt>repair</dt>
<dd>Any activity that allows a failed or degraded SSC to function as per original design. May be permanent or temporary.</dd>
<dt>replacement</dt>
<dd>The substitution of an SSC with an identical SSC or an SSC that has been approved as equivalent through an equivalency process.</dd>
<dt>structures, systems or components (SSCs) </dt>
<dd>A general term encompassing all of the elements (items) of a facility or activity that contribute to protection and safety, except human factors. Structures are the passive elements: buildings, vessels, shielding, etc. A system comprises several components, assembled in such a way as to perform a specific (active) function. A component is a discrete element of a system. Examples are wires, transistors, integrated circuits, motors, relays, solenoids, pipes, fittings, pumps, tanks, and valves.</dd>
<dt>surveillance </dt>
<dd>Activities carried out to confirm compliance with operating policies and principles, to verify correct operational states and to detect any abnormal condition before it can impair the SSC&#8217;s ability to meet its design intent.</dd>
<dt>temporary repair </dt>
<dd>A repair that temporarily enables a failed or degraded SSC to function within its original design until a permanent repair or a replacement can be completed. </dd>
<dt>testing </dt>
<dd>The observation or measurement of condition or functional indicators under controlled conditions to verify that the current performance of an SSC conforms to acceptance criteria.</dd>
<dt>thermography</dt>
<dd>A diagnostic technique, which uses a thermograph to record the heat produced by different components.</dd>
<dt>time-based preventive maintenance </dt>
<dd>Maintenance performed on equipment in accordance with a set time period (predefined) or given amount of operation.</dd>
<dt>trained and qualified</dt>
<dd>An individual who has achieved the specified level of knowledge, skills, attitudes and experience required to meet job performance requirements.</dd>
<dt>training </dt>
<dd>A combination of activities with the purpose of providing the knowledge, skills and attitudes to individuals or teams in order to allow performance of activities in an effective and efficient manner and to identified standards.</dd>
<dt>tribology</dt>
<dd>The systematic study of friction and its effects.</dd>  </dl>
<a name="#RDsection[51]#"></a>
<h2><a name="P849_89825" id="P849_89825"></a>References</h2>  <ol>
<li><a name="R1" id="R1"></a> Canadian Nuclear Safety Commission (CNSC), S-98 Revision&nbsp;1, <em>Reliability Programs for Nuclear Power Plants</em>, Ottawa, Canada,&nbsp;2005</li>
<li> <a name="R2" id="R2"></a>CAN/CSA N286-05, <em>Management System Requirements for Nuclear Power Plants</em>,&nbsp;2005</li>
<li> <a name="R3" id="R3"></a>CNSC, RD-334, <em>Aging Management for Nuclear Power Plants</em>, Ottawa, Canada,&nbsp;2011</li>
<li> <a name="R4" id="R4"></a>CNSC, RD-99.1, <em>Reporting Requirements for Operating Nuclear Power Plants</em>, Ottawa, Canada,&nbsp;2012</li>
<li><a name="R5" id="R5"></a>CNSC, GD&#8209;99.1, <em>Guide to the Reporting Requirements for Operating Nuclear Power Plants</em>, Ottawa, Canada, 2012</li>  </ol>
<a name="#RDsection[52]#"></a>
<h2><a name="P858_90218" id="P858_90218"></a>Additional Information</h2>  <p>The following documents contain additional information that may be of interest to persons involved in maintenance programs for nuclear power plants.</p>  <ul>
<li> International Atomic Energy Agency (IAEA), TECDOC-658, <em>Safety Related Maintenance in the Framework of the Reliability Centered Maintenance Concept</em>, Vienna,&nbsp;1992</li>
<li> IAEA, TECDOC-928, <em>Good Practices for Cost Effective Maintenance of Nuclear Power Plants</em>, Vienna,&nbsp;1997</li>
<li> IAEA, TECDOC-960, <em>Regulatory Surveillance of Safety Related Maintenance at Nuclear Power Plants</em>, Vienna,&nbsp;1997</li>
<li> IAEA, TECDOC-1383, <em>Guidance for Optimizing Nuclear Power Plant Maintenance Programmes</em>, Vienna,&nbsp;2003</li>
<li> IAEA, Safety Standards Series, No.&nbsp;NS-G-2.6, <em>Maintenance, Surveillance and In-service Inspection in Nuclear Power Plants</em>, Vienna,&nbsp;2002</li>
<li> IAEA, Safety Standards Series, No.&nbsp;NS-R-2, <em>Safety of Nuclear Power Plants: Operation</em>, Vienna,&nbsp;2000</li>
<li> IAEA, Safety Standards Series, No.&nbsp;42, <em>Safety Culture in the Maintenance of Nuclear Power Plants</em>, Vienna,&nbsp;2005</li>
<li> IAEA, Safety Series, No.&nbsp;110, <em>The Safety of Nuclear Installations</em>, Vienna,&nbsp;1993</li>  </ul>

                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }