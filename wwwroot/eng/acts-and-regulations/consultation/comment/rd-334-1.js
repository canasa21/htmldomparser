import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "en",
                pageTitle: "Archived Web Page - RD&ndash;334: Aging Management for Nuclear Power Plants", 
                dateModified: "2012-09-19",
                langToggleUrl: "/fra/acts-and-regulations/consultation/comment/rd-334-1"
        
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
<h2 className="reportHeading2">Preface</h2>  <p>This regulatory document sets out the requirements of the Canadian Nuclear Safety Commission (CNSC) for managing aging of structures, systems, and components (SSCs) of a nuclear power plant (NPP). Aging management is the engineering, operational, inspection, and maintenance actions that control, within acceptable limits, the effects of physical aging and obsolescence of SSCs occurring over time or with use. An aging management program (AMP) is a set of policies, processes, procedures, arrangements, and activities for managing the aging of SSCs of an NPP. </p>  <p>This regulatory document is intended for use by licensees and applicants in establishing, implementing, and improving AMPs for NPPs. The document may be applied, where appropriate, to nuclear facilities other than NPPs. These requirements are specified to provide assurance that aging management is properly taken into account at each stage of an NPP&#8217;s life cycle; i.e., in design, fabrication and construction, commissioning, operation (including extended or long-term operation and extended shutdown), and decommissioning.</p>  <p>Requirements are provided for the establishment, implementation, and improvement of AMPs through application of a systematic and integrated approach, including organizational arrangements, data management, SSC selection, aging evaluation and condition assessment processes, AMP documentation, interfaces with other supporting program areas, and AMP review and improvement.</p>  <p>The requirements outlined in this regulatory document are consistent with international guidelines, including <em>Ageing Management for Nuclear Power Plants</em>, Safety Guide NS-G-2.12, and <em>Safe Long Term Operation of Nuclear Power Plants</em>, Safety Report Series No.&nbsp;57, both from the International Atomic Energy Agency (IAEA), and the <em>Glossary of Nuclear Power Plant Ageing</em> from the Organisation for Economic Cooperation and Development (OECD) Nuclear Energy Agency.</p>  <p>It is not the intent of this document to override the requirements of other codes and standards but rather to provide the expected framework within which codes and standards are applied to provide assurance that physical aging and obsolescence of SSCs are effectively managed.</p>  <p>This document addresses issues and features that control and enhance nuclear safety. Other health, safety, and environmental considerations may dictate adherence to additional standards. It is the licensee&#8217;s or applicant&#8217;s responsibility to identify and comply with all other applicable legislation or standards.</p>
<a name="#RDsection[2]#"></a>
<h2 className="reportHeading2">Table of Contents</h2>  <div className="IndentLeft10">
<p><a href="#P105_4991"><strong>1.0 Introduction </strong></a></p>  </div>  <div className="IndentLeft20">
<p><a href="#P106_5007">1.1 Purpose</a></p>
<p><a href="#P110_5714">1.2 Scope</a></p>
<p><a href="#P114_6552">1.3 Relevant regulations</a></p>
<p><a href="#P122_9634">1.4 International standards</a></p>  </div>  <div className="IndentLeft10">
<p><a href="#P127_10238"><strong>2.0 General Requirements for Aging Management</strong></a></p>
<p><a href="#P147_13474"><strong>3.0 Requirements for Proactive Management</strong></a></p>  </div>  <div className="IndentLeft20">
<p><a href="#P149_13646">3.1 Design</a></p>  </div>  <div className="IndentLeft30">
<p><a href="#P161_16884">3.1.1 Aging management content in safety analysis reports</a></p>  </div>  <div className="IndentLeft20">
<p><a href="#P170_18609">3.2 Fabrication and construction</a></p>
<p><a href="#P177_19523">3.3 Commissioning</a></p>
<p><a href="#P183_20521">3.4 Operation</a></p>  </div>  <div className="IndentLeft30">
<p><a href="#P189_22324">3.4.1 Review and update of safety analysis</a></p>
<p><a href="#P195_23344">3.4.2 Extended or long-term operation</a></p>
<p><a href="#P203_25277">3.4.3 Extended shutdowns</a></p>  </div>  <div className="IndentLeft20">
<p><a href="#P207_26065">3.5 Decommissioning</a></p>  </div>  <div className="IndentLeft10">
<p><a href="#P209_26235"><strong>4.0 Integrated Aging Management</strong></a></p>  </div>  <div className="IndentLeft20">
<p><a href="#P223_27183">4.1 Organizational arrangements for effective aging management</a></p>
<p><a href="#P229_28680">4.2 Data collection and record keeping system to support aging management</a></p>
<p><a href="#P239_30580">4.3 Screening and selection of structures, systems and components (SSCs)</a></p>
<p><a href="#P244_31587">4.4 Evaluations for aging management</a></p>  </div>  <div className="IndentLeft30">
<p><a href="#P253_32469">4.4.1 Understanding aging </a></p>
<p><a href="#P263_33621">4.4.2 Methods to prevent aging</a></p>
<p><a href="#P268_34289">4.4.3 Methods to detect and monitor aging</a></p>
<p><a href="#P274_35227">4.4.4 Methods to mitigate aging</a></p>  </div>  <div className="IndentLeft20">
<p><a href="#P279_35945">4.5 Condition assessments</a></p>
<p><a href="#P288_37635">4.6 SSC-specific aging management programs (AMPs)</a></p>
<p><a href="#P293_38496">4.7 Management of technological obsolescence</a></p>
<p><a href="#P302_39393">4.8 Interfaces with other plant supporting programs</a></p>
<p><a href="#P305_40079">4.9 Implementation of AMPs</a></p>
<p><a href="#P309_40608">4.10 Review and continuous improvement</a></p>  </div>  <div className="IndentLeft10">
<p><a href="#P317_41549"><strong>Appendix&nbsp;A: Attributes of an Effective AMP</strong> </a></p>
<p><a href="#P357_43988"><strong>Glossary</strong></a></p>
<p><a href="#P420_51216"><strong>References</strong></a></p>
<p><a href="#P432_52277"><strong>Additional Information</strong></a></p>  </div>
<a name="1.0"></a>
<h2 className="reportHeading2"><a name="P105_4991" id="P105_4991"></a>1.0 Introduction</h2>
<a name="1.1"></a>
<h3 className="reportHeading3"><a name="P106_5007" id="P106_5007"></a>1.1 Purpose</h3>  <p>This regulatory document sets out the requirements of the Canadian Nuclear Safety Commission (CNSC) for managing aging of structures, systems, and components (SSCs) of a nuclear power plant (NPP).</p>  <p>Aging management is the engineering, operational, inspection, and maintenance actions that control, within acceptable limits, the effects of physical aging and obsolescence of SSCs occurring over time or with use. An aging management program (AMP) is a set of policies, processes, procedures, arrangements, and activities for managing the aging of the SSCs for an NPP.</p>  <p>This regulatory document is intended for use by licensees and applicants in establishing, implementing, and improving AMPs for NPPs.</p>
<a name="1.2"></a>
<h3 className="reportHeading3"><a name="P110_5714" id="P110_5714"></a>1.2 Scope</h3>  <p>This regulatory document sets out CNSC requirements to provide assurance that aging management is appropriately and proactively considered at each stage of an NPP&#8217;s life cycle. Specific requirements are also provided for establishment, implementation, and improvement of AMPs through application of a systematic and integrated approach.</p>  <p>It is not the intent of this document to override the requirements of other codes and standards but rather to provide a framework within which codes and standards can be applied to provide assurance that physical aging and obsolescence of SSCs are effectively managed.</p>  <p>Where appropriate, this regulatory document may be applied to nuclear facilities other than NPPs, with due consideration of the differences compared to those of an NPP in hazard potential and complexity of affected systems.</p>
<a name="1.3"></a>
<h3 className="reportHeading3"><a name="P114_6552" id="P114_6552"></a>1.3 Relevant regulations</h3>  <p>The following provisions of the <em>Nuclear Safety and Control Act</em> (NSCA; the Act) and the regulations made under the NSCA are relevant to this document:</p>  <ol>
<li>subsection&nbsp;24(4) of the NSCA prohibits the Commission from issuing, renewing, amending or replacing a licence, &#8220;unless in the opinion of the Commission, the applicant (<em>a</em>)&nbsp;is qualified to carry on the activity that the licence will authorize the licensee to carry on, and (<em>b</em>)&nbsp;will, in carrying on that activity, make adequate provision for the protection of the environment, the health and safety of persons and the maintenance of national security and measures required to implement international obligations to which Canada has agreed&#8221;</li>
<li> paragraph&nbsp;3(1)(<em>k</em>) of the <em>General Nuclear Safety and Control Regulations</em> states that &#8220;an application for a licence shall contain the following information:&nbsp;... (<em>k</em>)&nbsp;the applicant&#8217;s organizational management structure insofar as it may bear on the applicant&#8217;s compliance with the Act and the regulations made under the Act, including the internal allocation of functions, responsibilities and authority&#8221;</li>
<li>subsection&nbsp;12(1) of the <em>General Nuclear Safety and Control Regulations</em> states that &#8220;every licensee shall (<em>c</em>)&nbsp;take all reasonable precautions to protect the environment and the health and safety of persons and to maintain security of nuclear facilities and nuclear substances;&#8221; and &#8220;(<em>f</em>)&nbsp;take all reasonable precautions to control the release of radioactive nuclear substances or hazardous substances within the site of the licensed activity and into the environment as a result of the licensed activity&#8221;</li>
<li>paragraphs&nbsp;6(<em>d</em>), (<em>m</em>), and (<em>n</em>) of the <em>Class&nbsp;I Nuclear Facilities Regulations</em> state that &#8220;an application for a licence to operate a Class&nbsp;I nuclear facility shall contain&#8221;, in addition to other information,<br/>
&#8220;(<em>d</em>)&nbsp;the proposed measures, policies, methods and procedures for operating and maintaining the nuclear facility;<br/>
&#8220;(<em>m</em>)&nbsp;the proposed responsibilities of and qualification requirements and training program for workers, including the procedures for the requalification of workers;<br/>
&#8220;(<em>n</em>)&nbsp;the results that have been achieved in implementing the program for recruiting, training and qualifying workers in respect of the operation and maintenance of the nuclear facility&#8221;</li>
<li> subsection&nbsp;14(2) of the <em>Class&nbsp;I Nuclear Facilities Regulations</em> states that &#8220;every licensee who operates a Class&nbsp;I nuclear facility shall keep a record of (<em>a</em>)&nbsp;operating and maintenance procedures&#8221; and &#8220;(<em>c</em>)&nbsp;the results of the inspection and maintenance programs referred to in the licence&#8221;</li>
<li>subsection&nbsp;14(4) of the <em>Class&nbsp;I Nuclear Facilities Regulations</em> states that &#8220;every person who is required by [14(2)&nbsp;of those regulations] to keep a record [of the &#8220;operating and maintenance procedures&#8221; and &#8220;the results of the inspection and maintenance programs referred to in the licence&#8221;] shall retain the record for 10&nbsp;years after the expiry date of the licence to abandon issued in respect of the Class&nbsp;I nuclear facility&#8221;</li>  </ol>
<a name="1.4"></a>
<h3 className="reportHeading3"><a name="P122_9634" id="P122_9634"></a>1.4 International standards</h3>  <p>This regulatory document is consistent with the philosophy and technical content of modern codes and standards. In particular, this regulatory document is based in part on the following international publications:</p>  <ol>
<li><em>Aging Management for Nuclear Power Plants</em>, Safety Guide NS-G-2.12 from the International Atomic Energy Agency (IAEA)&nbsp;[<a href="#R1">1</a>]</li>
<li><em>Safe Long Term Operation of Nuclear Power Plants</em>, Safety Report Series No.&nbsp;57, from the IAEA&nbsp;[<a href="#R2">2</a>]</li>
<li><em>Glossary of Nuclear Power Plant Ageing</em> from the Organisation for Economic Cooperation and Development (OECD) Nuclear Energy Agency&nbsp;[<a href="#R3">3</a>]</li>  </ol>
<a name="2.0"></a>
<h2 className="reportHeading2"><a name="P127_10238" id="P127_10238"></a>2.0 General Requirements for Aging Management</h2>  <p>Structures, systems, and components (SSCs) of a nuclear power plant experience two kinds of time-dependant changes:</p>  <ol>
<li>physical aging and wear of SSCs causing degradation of their performance characteristics over time or with use</li>
<li>obsolescence, where SSCs become out of date in comparison with current knowledge, technology, standards, and regulations</li>  </ol>  <p>Over time, physical aging may reduce an SSC&#8217;s ability to perform its safety functions, within the limits and specifications assumed in the design basis and safety analysis. Aging may also increase the probability of common cause failures and lead to a reduction of defence in depth.</p>  <p>Aging mechanisms can combine synergetically to cause premature or accelerated aging effects. This aggregate effect of component aging on overall system and NPP safety performance and risk must also be managed.</p>  <p>NPP safety can also be affected if obsolescence of SSCs is not identified and corrected before associated declines occur in SSC reliability or availability. Accordingly, physical aging and obsolescence of SSCs in NPPs must be understood and managed effectively and proactively at each stage of an NPP and SSC&#8217;s life cycle, beginning with design, fabrication and construction, commissioning, through operation (including extended or long-term operation, and during any extended shutdowns), and during decommissioning.</p>  <p>In practice, effective aging management requires the involvement and support of many internal and external organizations, and essential plant programs and processes. Examples include nuclear safety, engineering design, change control, safety analysis, configuration management, equipment qualification, equipment reliability, operations, chemistry control, maintenance, in-service inspection and testing, procurement, quality management, and research and development.</p>  <p>Effective aging management uses a systematic approach providing an integrated framework for coordinating all supporting programs and activities associated with the understanding, control, monitoring, and mitigation of aging effects at the facility. Such an approach is illustrated in Figure&nbsp;1.</p>  <p>An overall integrated aging management program (Integrated AMP) for the NPP defines:</p>  <ol>
<li> program policy, organization and resources, and data management arrangements</li>
<li>processes for selecting SSCs, conducting aging evaluations and condition assessments, and developing SSC-specific AMPs</li>
<li>interfaces with other plant programs and technical areas, including training and quality management</li>
<li>AMP documentation</li>
<li>mechanisms for AMP review and improvement</li>  </ol>  <p>SSC-specific AMPs are implemented in accordance with the overall Integrated AMP framework, based on the current understanding and predictability of SSC aging. SSC AMPs shall be commensurate with the importance to safety, design function, required performance of the SSC, and its effect on the safe operation of the NPP, and shall address the attributes of an effective AMP as presented in Appendix&nbsp;A, Table&nbsp;A.</p>  <p>The effectiveness of both the overall integrated and SSC-specific AMPs shall be continually reviewed and improvements shall be implemented. </p>  <a href="/eng/acts-and-regulations/consultation/comment/rd-334/images/rd-334-figure-1-eng-large.png"><img src="/eng/acts-and-regulations/consultation/comment/rd-334/images/rd-334-figure-1-eng-550.png" alt="Systematic and integrated approach to manage aging" width="624" height="537" border="0" /></a>  <p><strong>Figure 1: Systematic and integrated approach to manage aging&nbsp;[<a href="#R1">1</a>].</strong></p>
<a name="3.0"></a>
<h2 className="reportHeading2"><a name="P147_13474" id="P147_13474"></a>3.0 Requirements for Proactive Management</h2>  <p>The following subsections provide CNSC requirements for aging management activities during each stage of the life cycle for an NPP.</p>
<a name="3.1"></a>
<h3 className="reportHeading3"><a name="P149_13646" id="P149_13646"></a>3.1 Design</h3>  <p>Appropriate measures shall be taken and design features shall be introduced in the design stage to facilitate effective aging management throughout the life cycle of the NPP. Aging management shall also be considered in the design and modifications or replacements of SSCs in operating plants.</p>  <p>RD-337, <em>Design of New Nuclear Power Plants</em>,&nbsp;[<a href="#R4">4</a>] establishes design requirements for new NPPs. The following aspects relating to aging management shall be taken into account:</p>  <ol>
<li>a systematic approach shall be applied at the design stage to ascertain the understanding of aging of SSCs, to evaluate effective approaches and design features for aging prevention, monitoring, and mitigation, and to establish AMPs for SSCs (see sections&nbsp;4.3, <em>Screening and selection of structures, systems and components (SSCs)</em>, 4.4, <em>Evaluations for aging management</em>, and 4.6, <em>SSC-specific aging management programs (AMPs)</em></li>
<li>the effects and interactions between mechanical, thermal, chemical, electrical, physical, biological and radiation stressors on materials properties, materials aging and degradation processes shall be considered in the design of SSCs. Relevant aging management experience and research results shall be reviewed and taken into account. Details shall be provided to demonstrate how past relevant generic aging issues are addressed in the design</li>
<li>safe service life for SSCs shall be defined with an assessment of design margins, taking into account all known aging and wear mechanisms and potential degradation, including the effects of testing and maintenance processes. SSCs that have shorter service life than the NPP life shall be identified and replacement strategies described in the design documentation</li>
<li>aging effects under design basis conditions, including transient conditions and postulated initiating event conditions, shall be taken into account in equipment qualification programs</li>
<li>plant layout and design of SSCs shall facilitate inspection, testing, surveillance, monitoring to assess aging mechanisms, verify predictions, and identify unanticipated behaviours or degradation that may occur during operation as a result of aging and wear. The design shall be such that radiation exposures for these activities can be kept as low as reasonably achievable (ALARA)</li>
<li>reference (baseline) and other pre-service, inaugural, or in-service inspection and test data that is required to be collected and documented for aging management purposes during fabrication, construction, commissioning, operation, and decommissioning shall be specified</li>
<li> potential obsolescence issues for SSCs shall be identified, effects on safety and reliability performance evaluated, and strategies or processes for their management defined</li>
<li>design documentation shall specify any special process applied to fabrication (or manufacturing) and construction of SCCs that prevent, mitigate, or eliminate known aging mechanisms, for example, heat treatment, surface finishing, cure time, etc.</li>
<li>required provisions for aging management shall be clearly specified in procurement documents for new facilities and SSCs, including documents from suppliers and other contractors (design institutions, vendors, manufacturers, inspection agencies, etc.)</li>  </ol>
<a name="3.1.1"></a>
<h4 className="reportHeading4"><a name="P161_16884" id="P161_16884"></a>3.1.1 Aging management content in safety analysis reports</h4>  <p>The safety analysis for the NPP shall be based on complete and accurate design and operational information and shall account for the effects of aging of SSCs&nbsp;[<a href="#R5">5</a>,&nbsp;<a href="#R6">6</a>]. The cumulative effects of aging of components on overall system and plant safety performance and risk shall be considered in the safety analysis. Significant uncertainties in analysis or data relevant to aging assumptions, including those associated with NPP performance, operational measurements, and modelling parameters, shall be identified and considered.</p>  <p>Aging management shall be addressed in the safety analysis reports for the NPP, including the following topics:</p>  <ol>
<li>the strategy for SSC aging management and prerequisites for its implementation</li>
<li>safety significant SSCs of the NPP that could be affected by aging</li>
<li>assumptions, methods, acceptance criteria, and data used to account for the effects of SSC aging in the safety analysis, including any time-limited assumptions and failure data for probabilistic safety assessments and analyses</li>
<li>critical service conditions, operational limits and conditions (OLCs), and any other parameters to be monitored and/or controlled that affect aging assumptions used in safety analyses or equipment qualification</li>
<li>data and information to be collected for aging management in order to confirm safety analysis assumptions and acceptance criteria continue to be met</li>  </ol>  <p>The safety analysis reports shall be periodically reviewed, updated and /or revalidated to account for operating experience and research findings with respect to aging and the implementation of the results of that analysis (see also section&nbsp;3.4.1, <em>Review and update of safety analysis</em>).</p>
<a name="3.2"></a>
<h3 className="reportHeading3"><a name="P170_18609" id="P170_18609"></a>3.2 Fabrication and construction</h3>  <p>Appropriate measures shall be taken to ensure that fabrication (or manufacturing) and construction processes do not adversely affect aging performance of SSCs. Licensees shall ensure that:</p>  <ol>
<li>current knowledge about relevant aging mechanisms, effects/degradation, and possible preventive and mitigation measures are taken into account in fabrication and construction of SSCs</li>
<li>relevant information on the factors affecting aging management and parameters influencing aging degradation is clearly specified in procurement documents and provided to SSC suppliers and contractors</li>
<li>suppliers and contractors adequately address factors affecting aging management</li>
<li>reference (baseline) data required for aging management are collected and documented</li>
<li>surveillance specimens for specific aging monitoring programs are made available and installed in accordance with design specifications</li>  </ol>
<a name="3.3"></a>
<h3 className="reportHeading3"><a name="P177_19523" id="P177_19523"></a>3.3 Commissioning</h3>  <p>Appropriate measures shall be taken to ensure that baseline data required for aging management of SSCs is measured and recorded during commissioning.</p>  <p>The following aspects shall be taken into account:</p>  <ol>
<li>relevant information on the factors affecting aging management and parameters influencing aging degradation shall be identified, taken into account, monitored, and controlled in commissioning</li>
<li>required baseline data for aging management shall be recorded, including mapping the actual service and environmental conditions in each critical spot of the plant or SSC; thermal and radiation hot spots, vibration levels, and other critical conditions and parameters that were identified in safety analyses or equipment qualification as affecting aging shall be recorded</li>
<li>critical service conditions and parameters, such as those considered in equipment qualification and aging assumptions in safety analyses, shall be verified to be in compliance with the design and safety analyses</li>  </ol>
<a name="3.4"></a>
<h3 className="reportHeading3"><a name="P183_20521" id="P183_20521"></a>3.4 Operation</h3>  <p>Licensees shall establish and implement appropriate programs to manage aging and obsolescence of SSCs to ensure that required safety functions are maintained during the plant operation stage. Specific additional information is provided in section&nbsp;4.0<em>, Integrated Aging</em><em> Management</em>.</p>  <p>Facility operations shall be monitored and recorded to demonstrate compliance with critical service conditions, operational limits and conditions (OLCs), and any other parameters that were identified (see section&nbsp;3.1.1, <em>Aging </em><em>management content in safety analysis reports</em>) as affecting aging assumptions used in safety analyses or equipment qualification.</p>  <p>In the event of operational changes or modifications to SSCs, the licensee shall review for possible changes in environmental or process conditions (e.g., flow pattern, velocity, vibration) that could affect aging and failure of SSCs (see also section&nbsp;3.1, <em>Design</em>).</p>  <p>Corrective actions identified by AMP activities shall be implemented in a timely manner to prevent recurrences. In addition, whenever a new or previously undetected or unforeseen aging phenomenon is discovered, the licensee shall assess its significance and, where appropriate, conduct a root cause analysis and take corrective actions. A confirmation process shall be established to ensure that corrective actions have been completed and are effective.</p>  <p>The availability of spare or replacement parts and the shelf life of spare or replacement parts or consumables shall be continually monitored and controlled. Measures shall be taken to ensure that spare or replacement parts and consumables are stored in appropriately controlled environments to preclude aging degradation due to their storage environment (e.g., high or low temperatures, moisture, chemical attack, dust accumulation).</p>
<a name="3.4.1"></a>
<h4 className="reportHeading4"><a name="P189_22324" id="P189_22324"></a>3.4.1 Review and update of safety analysis</h4>  <p>Licensees shall periodically review and update the safety analysis to account for the effects of SSC aging, research findings, and advances in knowledge and understanding of aging mechanisms.</p>  <p>Data and information collected from the AMPs shall be reviewed to confirm that safety analysis assumptions, credited parameters and predictions remain valid, and that limiting criteria and required design margins continue to be met as the plant ages.</p>  <p>An evaluation of the cumulative effects of SSC aging on overall system and plant safety performance and risk shall be completed and documented.</p>  <p>Licensees shall report the discovery of information that may reveal an aging effect or hazard that is different in nature, greater in probability, or greater in magnitude than was presented to CNSC in the safety analysis or other licensing basis documents.</p>  <p>These activities shall be reported in accordance with CNSC regulatory document S-99, <em>Reporting Requirements for Nuclear Power Plants</em>&nbsp;[<a href="#R7">7</a>].</p>
<a name="3.4.2"></a>
<h4 className="reportHeading4"><a name="P195_23344" id="P195_23344"></a>3.4.2 Extended or long-term operation</h4>  <p>A licensee may choose to implement a project for the purpose of extended or long-term operation of the NPP beyond its assumed design life. In such cases, the licensee shall complete an in-depth review of the effects of aging on NPP safety and evaluate the effectiveness of AMPs for the extended or long-term operation in order to identify corrective actions and areas for improvement. </p>  <p>The review of aging for extended or long-term operation shall be conducted as part of the Integrated Safety Review (ISR) in accordance with CNSC regulatory document RD-360, <em>Life Extension of Nuclear Power Plants</em>&nbsp;[<a href="#R8">8</a>], and IAEA Safety Guide NS-G-2.10, <em>Periodic Safety Review of Nuclear Power Plants</em>&nbsp;[<a href="#R9">9</a>]. The review of aging for extended or long-term operation shall also address the technical considerations and activities in IAEA Safety Report Series No.&nbsp;57, <em>Safe Long Term Operation of Nuclear Power Plants</em>&nbsp;[<a href="#R2">2</a>].</p>  <p>The licensee shall:</p>  <ol>
<li>ensure that all SSCs that can, directly or indirectly, have an adverse effect on the safe operation of the NPP are evaluated for the proposed period of extended or long term operation</li>
<li>demonstrate that the effects of aging will continue to be identified and managed for each SSC during the planned period of extended or long-term operation</li>
<li>revalidate all safety analyses involving time-limited assumptions to demonstrate their continuing validity and that the aging effects will be effectively managed (i.e., to demonstrate that the intended function of an SSC will remain within the design safety margins throughout the planned period of extended or long-term operation)</li>  </ol>  <p>The results of the review of aging management for extended or long-term operation shall be documented, and the findings shall be addressed through the Integrated Implementation Plan (IIP) for the project in accordance with CNSC regulatory document RD-360, <em>Life Extension of Nuclear Power Plants</em>&nbsp;[<a href="#R8">8</a>].</p>
<a name="3.4.3"></a>
<h4 className="reportHeading4"><a name="P203_25277" id="P203_25277"></a>3.4.3 Extended shutdowns</h4>  <p>Extended shutdowns are reactor shutdowns lasting for a period exceeding one year, and exclude shutdowns for normal maintenance outages. During extended shutdowns, SSCs may need to be placed in temporary lay-up or safe-storage states which require supplementary measures and controls to prevent aging degradation.</p>  <p>Licensees shall continue aging management activities for SSCs during extended shutdowns at the NPP. Licensees shall review and revise AMPs to ensure that relevant factors affecting aging degradation for SSCs placed in lay-up or safe-storage states during extended shutdowns are taken into account.</p>  <p>Condition assessments shall be completed prior to the return to service of an NPP following an extended shutdown (see section&nbsp;4.5, <em>Condition assessments</em>).</p>
<a name="3.5"></a>
<h3 className="reportHeading3"><a name="P207_26065" id="P207_26065"></a>3.5 Decommissioning</h3>  <p>Licensees shall continue aging management activities for those SSCs that are required to continue functioning to facilitate decommissioning activities.</p>
<a name="4.0"></a>
<h2 className="reportHeading2"><a name="P209_26235" id="P209_26235"></a>4.0 Integrated Aging Management</h2>  <p>Licensees shall apply a systematic and integrated approach to establish, implement, and improve appropriate programs for managing aging and obsolescence of SSCs. The overall Integrated AMP for the NPP shall be documented and shall address the following elements:</p>  <ol>
<li>organizational arrangements</li>
<li>data collection and record keeping</li>
<li>screening and selection process for aging management</li>
<li>evaluations for aging management</li>
<li>condition assessments</li>
<li>SSC-specific AMPs</li>
<li>management of obsolescence</li>
<li> interfaces with other supporting plant programs</li>
<li>implementation of AMPs</li>
<li>review and improvement of AMPs</li>  </ol>  <p>SSC-specific AMPs shall be implemented in accordance with the overall Integrated AMP framework.</p>  <p>Detailed requirements are provided in the following sections. Alternative approaches may be acceptable, provided these elements are addressed in an equivalent manner that is demonstrated to be effective in managing aging.</p>
<a name="4.1"></a>
<h3 className="reportHeading3"><a name="P223_27183" id="P223_27183"></a>4.1 Organizational arrangements for effective aging management</h3>  <p>Licensees shall ensure that appropriate organizational arrangements are established to facilitate the effective implementation of AMPs, including consideration of the following aspects:</p>  <ol>
<li>NPP senior management shall establish the policy and objectives of the overall Integrated AMP, allocate the necessary resources (such as human, financial, training, tools, and equipment), and monitor the program to ensure that it is meeting its objectives</li>
<li>NPP senior management shall assign clear responsibility for the implementation of aging management activities. A specific individual or organizational unit (for example, an existing organization such as operation, maintenance, engineering, or quality management, or a dedicated aging management unit) shall be assigned responsibility to coordinate relevant programs, including supporting programs, periodic reviews of the effectiveness of the AMPs, and continuous improvement of the AMPs</li>
<li>training shall be provided to operations, maintenance, engineering, and other pertinent staff to ensure they have an adequate awareness and understanding of aging management concepts and program requirements, and to enable them to make informed and positive contributions to the management of aging at the NPP</li>
<li>in addition to the internal teams, external organizations may be required to provide expert services on specific topics, such as condition assessments, research, and standards development</li>  </ol>
<a name="4.2"></a>
<h3 className="reportHeading3"><a name="P229_28680" id="P229_28680"></a>4.2 Data collection and record keeping system to support aging management</h3>  <p>The licensee shall establish an appropriate data collection and record keeping system to support aging management activities and provide a basis for decisions on the type and timing of aging management actions.</p>  <p>The data and records shall include all information relevant to aging management, including:</p>  <ol>
<li>reference (baseline) data on the design, fabrication, and construction of the plant or SSC and conditions at the beginning of the service life, including results of equipment qualification tests, inspections, commissioning tests, and mappings of environmental conditions during commissioning</li>
<li>data on the operating history of the plant, service conditions for SSCs (including transient data), chemistry conditions, SSC condition indicators, event reports, and data on the testing of availability and failure of SSCs</li>
<li>results of in-service inspections and material surveillance, including inspection specifications and results, as well as findings that exceed reporting levels</li>
<li>data on the maintenance history, including data on the monitoring of the condition and maintenance of components and structures, assessments of aging related failures or significant degradation of SSCs, including results of root cause analyses</li>
<li>records of SSC aging evaluations and condition assessments, AMP performance indicators, internal and external operating experience, and research results</li>  </ol>  <p>The data shall be used by the licensee to assist in optimizing operating conditions and practices that reduce the rate of aging degradation, and in identifying new, emerging aging effects that might negatively affect NPP safety. </p>  <p>Data entered into the system shall be auditable, to demonstrate an adequate verification of the data entered, detailed description of the basis for any conclusion, and all applicable references to source information.</p>
<a name="4.3"></a>
<h3 className="reportHeading3"><a name="P239_30580" id="P239_30580"></a>4.3 Screening and selection of structures, systems and components (SSCs)</h3>  <p>A screening and selection process shall be used to establish the list of SSCs to be included in the scope of the overall integrated AMP; i.e., SSCs susceptible to aging degradation or aging effects that can, directly or indirectly, have an adverse effect on the safe operation of the NPP. This list shall include SSCs that do not have safety functions but whose failure could prevent other SSCs from performing their intended safety functions.</p>  <p>The SSC screening and selection process shall take into account deterministic and probabilistic safety analysis, relevant operating experience and research findings.</p>  <p>The method and results of the screening and selection process shall be documented, including the information sources and any criteria used, and the final list of SSC elements and components in related categories with potential aging mechanisms and sites of concern.</p>  <p>The records produced shall be identified as permanent records.</p>
<a name="4.4"></a>
<h3 className="reportHeading3"><a name="P244_31587" id="P244_31587"></a>4.4 Evaluations for aging management</h3>  <p>Evaluations shall be completed for the management of aging of each SSC or group of structures and components selected by the screening process in order to acquire information and knowledge about the following four elements:</p>  <ol>
<li>understanding aging</li>
<li>methods to prevent aging</li>
<li>methods to detect and monitor aging</li>
<li>methods to mitigate aging</li>  </ol>  <p>The procedure for conducting the evaluations for aging management shall be documented.</p>  <p>The results of the evaluations for aging management shall be documented. The report shall summarize the pertinent aging issues and effectiveness of current practices, and provide recommendations for activities in the SSC aging management plan, for plant supporting programs in design, operation, and maintenance, and areas for further research and development.</p>  <p>The records produced shall be identified as permanent records.</p>
<a name="4.4.1"></a>
<h4 className="reportHeading4"><a name="P253_32469" id="P253_32469"></a>4.4.1 Understanding aging</h4>  <p>The current understanding of aging for the selected SSCs shall be documented based on an evaluation of possible and actual aging mechanisms. The evaluation shall consider the effects of aging degradation on SSC safety function, the effect on the ability of other SSCs to perform their intended safety functions, and other consequences of failure. The evaluation shall identify:</p>  <ol>
<li>SSC design and licensing basis requirements relevant to aging and aging management (including applicable codes and standards, safety analysis, and safety functions)</li>
<li>SSC materials, service conditions, stressors, degradation sites, aging mechanisms and effects</li>
<li>SSC condition indicators</li>
<li>anticipated obsolescence issues</li>
<li>quantitative or qualitative models for predicting relevant aging effects, and any gaps in the understanding</li>
<li>SSC life-limiting conditions and acceptance criteria against which the need for corrective action is evaluated</li>
<li>corrective actions if an SSC fails to meet the acceptance criteria</li>
<li>list of data needs for the assessment of SSC aging (including any deficiencies in the availability and quality of existing records)</li>  </ol>
<a name="4.4.2"></a>
<h4 className="reportHeading4"><a name="P263_33621" id="P263_33621"></a>4.4.2 Methods to prevent aging</h4>  <p>Methods to prevent and control aging degradation shall be evaluated to establish appropriate actions that can be taken. The evaluation shall identify:</p>  <ol>
<li>preventive actions to be taken in the design, selection of materials and coatings, fabrication and construction practices, commissioning, service conditions, and preventive operation and maintenance practices</li>
<li>parameters to be monitored or inspected to ensure the preventive actions are effective</li>
<li>service conditions (environmental conditions and operating conditions) to be maintained and operating practices aimed at slowing down potential degradation of the structure or component</li>  </ol>
<a name="4.4.3"></a>
<h4 className="reportHeading4"><a name="P268_34289" id="P268_34289"></a>4.4.3 Methods to detect and monitor aging</h4>  <p>The effectiveness of methods for timely detection and characterization of aging degradation shall be evaluated, with account taken of relevant operating experience and research results, to establish appropriate strategies and requirements for inspection, surveillance, testing, sampling, and monitoring programs for aging of SSCs. The evaluation shall identify:</p>  <ol>
<li> parameters and condition indicators for detecting, monitoring, and trending aging degradation of the structure or component</li>
<li>effective technology (inspection, testing, surveillance, and monitoring methods) for detecting aging effects before failure of the SSC with sufficient sensitivity, reliability, and accuracy</li>
<li>data to be collected to facilitate assessment of SSC aging</li>
<li>data evaluation techniques for recognizing significant degradation and for predicting future performance of the SSC (including data analysis and trending)</li>  </ol>
<a name="4.4.4"></a>
<h4 className="reportHeading4"><a name="P274_35227" id="P274_35227"></a>4.4.4 Methods to mitigate aging</h4>  <p>The effectiveness of methods for timely mitigation and correction of SSC degradation shall be evaluated to establish appropriate strategies and requirements for preventive and corrective maintenance, repairs, replacements (including refurbishment and periodic replacement of items), and/or design modifications. The evaluation shall identify:</p>  <ol>
<li> methods and actions to allow timely mitigation and correction of aging degradation of the structure or component</li>
<li>operating conditions and practices that minimize the rate of aging degradation of the structure or component</li>
<li>possible changes in design and materials of the component to control aging degradation of the structure or component</li>  </ol>
<a name="4.5"></a>
<h3 className="reportHeading3"><a name="P279_35945" id="P279_35945"></a>4.5 Condition assessments</h3>  <p>The actual condition of an SSC shall be established at the initiation of the SSC AMP, and assessed at periodic intervals throughout the service life of the NPP or SSC as required to validate AMP effectiveness.</p>  <p>Condition assessments shall also be completed as part of the review of aging for extended or long-term operation (see section&nbsp;3.4.2, <em>Extended or long-term operation</em>), and prior to the return to service of an NPP following an extended period of shutdown or SSC lay-up (see section&nbsp;3.4.3, <em>Extended shutdowns</em>).</p>  <p>The condition assessments shall provide information on:</p>  <ol>
<li>the current performance and condition of the SSC, including assessment of any aging related failures or indications of significant material degradation, previously unidentified aging mechanisms or effects, and comparisons against predictions for the aging mechanisms and acceptance criteria</li>
<li>estimation of future performance, aging degradation, and residual service life, where feasible, of the SSC (i.e., the length of time the SSC is likely to meet its function and performance requirements)</li>
<li>recommended follow-up or prevention, monitoring, and mitigation measures to be completed and/or incorporated into the AMP, including appropriate intervals for follow-on condition assessments and areas for further research and development</li>  </ol>  <p>The procedure for conducting condition assessments shall be documented. SSC condition assessments may be conducted as part of the evaluations for aging management (see section&nbsp;4.4, <em>Evaluations for aging management</em>). </p>  <p>The results of the completed SSC condition assessments shall be documented. The records produced shall be identified as permanent records.</p>
<a name="4.6"></a>
<h3 className="reportHeading3"><a name="P288_37635" id="P288_37635"></a>4.6 SSC-specific aging management programs (AMPs)</h3>  <p>A specific program for the aging management of each SSC (or group of structures and components) selected by the screening process, or alternatively a program for managing a specific aging mechanism or effect, shall be developed and documented.</p>  <p>The SSC AMP shall be commensurate with the importance to safety, design function and required performance of the SSC, and its effect on the safe operation of the NPP.</p>  <p>The effectiveness of current practices shall be confirmed in light of completed aging evaluations and condition assessments (see sections&nbsp;4.4, <em>Evaluations for aging management</em> and&nbsp;4.5, <em>Condition assessments</em>) and the applicable recommendations for the SSC AMP shall be implemented.</p>  <p>The SSC AMPs shall be documented and shall address the attributes of an effective AMP as listed in Appendix&nbsp;A, Table&nbsp;A.</p>
<a name="4.7"></a>
<h3 className="reportHeading3"><a name="P293_38496" id="P293_38496"></a>4.7 Management of technological obsolescence</h3>  <p>The licensee shall establish and implement programs for the management of technological obsolescence that address the following:</p>  <ol>
<li>spare parts provisions for planned service life and timely replacement of parts</li>
<li>long-term arrangements for manufacturers and spare parts suppliers, and for required technical support</li>
<li>availability of documentation to support SSC maintenance and replacement</li>
<li>availability of documentation to support development of equivalent SSCs, if needed</li>
<li>arrangements for modernization and technology updates</li>  </ol>  <p>This evaluation may be performed as part of the evaluation for aging management or condition assessments (see sections&nbsp;4.4, <em>Evaluations for aging management</em> and&nbsp;4.5, <em>Condition assessments</em>).</p>  <p>The program for the management of obsolescence shall be documented, and may be part of the overall integrated or SSC-specific AMPs.</p>
<a name="4.8"></a>
<h3 className="reportHeading3"><a name="P302_39393" id="P302_39393"></a>4.8 Interfaces with other plant supporting programs</h3>  <p>All supporting plant programs and activities that are credited as an integral part of the NPP aging management (see section&nbsp;2.0, <em>General Requirements for Aging Management</em>) shall be identified, and their interfaces and information requirements defined in the overall integrated AMP document.</p>  <p>The effectiveness of current programs with respect to managing aging shall be confirmed in light of applicable aging evaluations, condition assessments, and AMP reviews (see section&nbsp;4.10, <em>Review and continuous improvement</em>). Recommendations and corrective actions for supporting programs shall be implemented in a timely manner, as appropriate.</p>
<a name="4.9"></a>
<h3 className="reportHeading3"><a name="P305_40079" id="P305_40079"></a>4.9 Implementation of AMPs</h3>  <p>The overall Integrated and SSC-specific AMPs and major actions relating to aging management shall be implemented under the licensee&#8217;s Quality Management System for the facility.</p>  <p>The implementation of AMPs shall include periodic reporting on the performance of SSCs and on the indicators for evaluation of effectiveness of the Integrated and SSC-specific AMPs.</p>  <p>Data identified in the AMP shall be collected and recorded to provide a basis for decisions on the type and timing of aging management actions.</p>
<a name="4.10"></a>
<h3 className="reportHeading3"><a name="P309_40608" id="P309_40608"></a>4.10 Review and continuous improvement</h3>  <p>The effectiveness of the overall Integrated and SSC-specific AMPs shall be periodically reviewed using feedback from the program and performance indicators, the operating performance, inspection and maintenance histories, event reports, information from the results of research and development, self assessments, and generic operating experience. </p>  <p>Consideration shall also be given to the use of third-party peer reviews to obtain an independent assessment to establish whether the AMPs are consistent with generally accepted practices and to identify areas for improvement.</p>  <p>The licensee shall update the AMPs and interfacing programs, and their implementation, to improve their effectiveness based on the results of the review as appropriate.</p>  <p>The licensee shall submit an annual report on the review of the Integrated AMP effectiveness and improvements to the CNSC for review and assessment. </p>
<a name="#RDsection[ArrayLen(RDsection)-3]#"></a>
<h2 className="reportHeading2"><a name="P317_41549" id="P317_41549"> </a>Appendix&nbsp;A: Attributes of an Effective AMP</h2>  <table border="1" summary="Attributes of an effective AMP">
<caption>
Table A: Attributes of an effective AMP (adapted from IAEA NS-G-2.12&nbsp;[<a href="#R1">1</a>]).
</caption>
<tr>
<td valign="top" width="211"><p align="center"><strong>Attribute</strong></p></td>
<td valign="top" width="456"><p align="center"><strong>Description</strong></p></td>
</tr>
<tr>
<td valign="top" width="211"><p>1.  Scope of the AMP based on understanding aging</p></td>
<td valign="top" width="456"><ul>
<li> Systems, structures (including structural elements) and components subject to aging management;</li>
<li>Understanding of aging phenomena (significant aging mechanisms, susceptible sites):
<ul>
<li> Design and licensing basis requirements relevant to aging;</li>
<li>SSC materials, service conditions, stressors, degradation sites, aging mechanisms and effects; </li>
<li>SSC condition indicators and acceptance criteria; </li>
<li>Quantitative or qualitative predictive models of relevant aging phenomena.</li>
</ul>
</li>
</ul></td>
</tr>
<tr>
<td valign="top" width="211"><p>2.  Preventive actions to minimize and control aging degradation</p></td>
<td valign="top" width="456"><ul>
<li>Identification of preventive actions;</li>
<li>Identification of parameters to be monitored or inspected;</li>
<li>Service conditions (i.e. environmental conditions and operating conditions) to be maintained and operating practices aimed at slowing down potential degradation of the structure or component.</li>
</ul></td>
</tr>
<tr>
<td valign="top" width="211"><p>3.  Detection of aging effects</p></td>
<td valign="top" width="456"><ul>
<li>Effective technology (inspection, testing and monitoring methods) for detecting aging effects before failure of the SSC.</li>
</ul></td>
</tr>
<tr>
<td valign="top" width="211"><p>4.  Monitoring and trending of aging effects</p></td>
<td valign="top" width="456"><ul>
<li>Condition indicators and parameters to be monitored;</li>
<li>Data to be collected to facilitate assessment of structure or component aging;</li>
<li>Assessment methods (including data analysis and trending).</li>
</ul></td>
</tr>
<tr>
<td valign="top" width="211"><p>5.  Mitigating aging effects</p></td>
<td valign="top" width="456"><ul>
<li>Operations, maintenance, repair and replacement actions to mitigate detected aging effects / degradation of SSCs.</li>
</ul></td>
</tr>
<tr>
<td valign="top" width="211"><p>6.  Acceptance criteria</p></td>
<td valign="top" width="456"><ul>
<li>Acceptance criteria against which the need for corrective action is evaluated.</li>
</ul></td>
</tr>
<tr>
<td valign="top" width="211"><p>7.  Corrective actions</p></td>
<td valign="top" width="456"><ul>
<li>Corrective actions if a component fails to meet the acceptance criteria.</li>
</ul></td>
</tr>
<tr>
<td valign="top" width="211"><p>8.  Operating experience feedback and feedback of R&amp;D results</p></td>
<td valign="top" width="456"><ul>
<li>Mechanism that ensures timely feedback of operating experience and R&amp;D results (if applicable), and provides objective evidence that they are taken into account in the AMP.</li>
</ul></td>
</tr>
<tr>
<td valign="top" width="211"><p>9.  Quality management</p></td>
<td valign="top" width="456"><ul>
<li>Organizational roles and responsibilities;</li>
<li>Administrative controls that document the implementation of the AMP and actions taken;</li>
<li>Indicators to facilitate evaluation and improvement of the AMP;</li>
<li>Confirmation (verification) process for ensuring that preventive actions are adequate and appropriate and all corrective actions have been completed and are effective;</li>
<li>Record keeping practices to be followed;</li>
<li>References.</li>
</ul></td>
</tr>  </table>
<a name="#RDsection[ArrayLen(RDsection)-2]#"></a>
<h2 className="reportHeading2"><a name="P357_43988" id="P357_43988"></a>Glossary</h2>  <dl className="margins-removed">
<dt>acceptance criteria</dt>
<dd>Specified bounds on the value of a functional indicator or condition indicator used to assess the ability of a structure, system, or component (SSC) to perform its design function.</dd>
<dt>aging</dt>
<dd>A general process in which characteristics of an SSC gradually change over time or with use. This process may proceed by a single aging mechanism or by a combination of several aging mechanisms. Non-physical aging is the process of becoming out-of-date (obsolete) owing to the evolution of knowledge and technology and associated changes in codes and standards. Physical aging is due to physical, mechanical, thermal, electrical, chemical, irradiation and/or biological processes (aging mechanisms).</dd>
<dt>aging degradation</dt>
<dd>Aging effects that could impair the ability of an SSC to function within its acceptance criteria.</dd>
<dt>aging effects</dt>
<dd>Net changes in the characteristics of an SSC that occur with time or use and are due to aging mechanisms.</dd>
<dt>aging management</dt>
<dd>Engineering, operations, inspection, and maintenance actions to control, within acceptable limits, the effects of physical aging and obsolescence of SSCs.</dd>
<dt>aging management program (AMP)</dt>
<dd>A set of policies, processes, procedures, arrangements, and activities that provides direction for managing the aging of an NPP&#8217;s SSCs.</dd>
<dt>aging mechanism</dt>
<dd>A specific process that gradually changes characteristics of an SSC with time or use, such as thermal or radiation embrittlement, corrosion, fatigue, creep, erosion, etc.</dd>
<dt>commissioning</dt>
<dd>Process consisting of activities intended to demonstrate that installed SSCs and equipment perform in accordance with their specifications and design intent before they are put into service.</dd>
<dt>common cause failure</dt>
<dd>A concurrent failure of two or more structures, systems or components due to a single specific event or cause, such as natural phenomena (earthquakes, tornadoes, floods, etc.), design deficiency, manufacturing flaws, operation and maintenance errors, human-induced destructive events, aging effects and others.</dd>
<dt>condition assessment</dt>
<dd>An assessment performed to determine current performance and condition of an SSC (including assessment of any age-related failures or indications of significant material degradation), and to predict future performance, extent and rate of aging degradation, and residual service life of the SSC.</dd>
<dt>condition indicator</dt>
<dd>A characteristic of an SSC that can be observed, measured, or trended to infer or directly indicate the current and future ability of an SSC to function within acceptance criteria.</dd>
<dt>defence in depth</dt>
<dd>The application of more than one protective measure for a given safety objective, such that the objective is achieved even if one of the protective measures fails.</dd>
<dt>design basis</dt>
<dd>The range of conditions and events taken into account in the design of a facility, according to established criteria, such that the facility can withstand them without exceeding authorized limits for the planned operation of safety systems.</dd>
<dt>failure</dt>
<dd>The inability or interruption of ability of an SSC to function within acceptance criteria.</dd>
<dt>functional indicator</dt>
<dd>A condition indicator that is a direct indication of the current ability of an SSC to function within acceptance criteria.</dd>
<dt>licensing basis</dt>
<dd>For a regulated facility or activity, the set of requirements and documents comprising: </dd>  </dl>  <ol className="lower-roman">
<li>&nbsp;the regulatory requirements set out in the applicable laws and regulations </li>
<li>&nbsp;the conditions and safety and control measures described in the facility&#8217;s or activity&#8217;s licence and the documents directly referenced in that licence </li>
<li>&nbsp;the safety and control measures described in the licence application and the documents needed to support that licence application.</li>  </ol>  <dl className="margins-removed">
<dt>maintenance</dt>
<dd>The organized activities, both administrative and technical, of keeping structures, systems, and components in good operating condition, including both preventive and corrective (or repair) aspects.</dd>
<dt>management system</dt>
<dd>A set of interrelated or interacting elements (system) for establishing policies and objectives and enabling the objectives to be achieved in an efficient and effective way. The management system integrates all elements of an organization into one coherent system to enable all of the organization&#8217;s objectives to be achieved. These elements include the structure, resources, and processes. Personnel, equipment, and organizational culture as well as the documented policies and processes are parts of the management system. The organization&#8217;s processes have to address the totality of the requirements on the organization as established in, for example, IAEA safety standards and other international codes and standards.</dd>
<dt>nuclear power plant (NPP)</dt>
<dd>Any nuclear fission reactor installation that has been constructed to generate electricity on a commercial scale and is a Class&nbsp;1A nuclear facility, as defined in the <em>Class&nbsp;I Nuclear Facilities Regulations</em>.</dd>
<dt>operational limits and conditions (OLCs)</dt>
<dd>The set of limits and conditions that can be monitored by, or on behalf of, the operator and can be controlled by the operator.</dd>
<dt>root cause analysis</dt>
<dd>An objective, structured, systematic and comprehensive analysis that is designed to determine the underlying reason(s) for a situation or event, and that is conducted with the level of effort that is consistent with the safety significance of the event.</dd>
<dt>safety functions</dt>
<dd>A specific purpose that must be accomplished by an SSC for safety, including those necessary to prevent accident conditions and to mitigate the consequences of accident conditions.</dd>
<dt>safety systems</dt>
<dd>Systems designed for the sole purpose of limiting or mitigating the accidents for which the operational limits and conditions (OLCs) may be exceeded.</dd>
<dt>service life</dt>
<dd>The period from initial operation to final withdrawal from service of an SSC.</dd>
<dt>stressor</dt>
<dd>An agent or stimulus stemming from pre-service and service conditions that can produce immediate or gradual aging degradation of an SSC. Examples include heat, steam, chemicals, radiation, and electrical cycling.</dd>
<dt>structures, systems, or components (SSCs)</dt>
<dd>A general term encompassing all of the elements (items) of a facility or activity that contribute to protection and safety, except human factors. Structures are the passive elements: buildings, vessels, shielding, etc. A system comprises several components, assembled in such a way as to perform a specific (active) function. A component is a discrete element of a system. Examples are wires, transistors, integrated circuits, motors, relays, solenoids, pipes, fittings, pumps, tanks, and valves.</dd>
<dt>testing</dt>
<dd>The observation or measurement of condition or functional indicators under controlled conditions to verify that the current performance of an SSC conforms to acceptance criteria.</dd>
<dt>time-limited assumptions</dt>
<dd>Revalidation of safety analyses with time-limited assumptions is an assessment of an identified aging effect (time-dependent degradation due to normal service conditions) and certain plant-specific safety analyses that are based on an explicitly specified length of plant life; for example, metal fatigue calculation, pressurized thermal shock (PTS) analysis, radiation-induced deformation and embrittlement, thermal aging, loss of material and equipment qualification of electrical and I&amp;C cables are included in the analyses.</dd>  </dl>
<a name="#RDsection[ArrayLen(RDsection)-1]#"></a>
<h2 className="reportHeading2"><a name="P420_51216" id="P420_51216"></a>References</h2>  <ol>
<li><a name="R1" id="R1"></a>International Atomic Energy Agency (IAEA), Safety Standards Series, Safety Guide, No.&nbsp;NS-G-2.12, <em>Aging Management for Nuclear Power Plants</em>, Vienna, Austria,&nbsp;2009.</li>
<li><a name="R2" id="R2"></a>IAEA, Safety Report Series No. 57, <em>Safe Long Term Operation of Nuclear Power Plants</em>, Vienna, Austria,&nbsp;2008.</li>
<li><a name="R3" id="R3"></a>Organisation for Economic Cooperation and Development (OECD) Nuclear Energy Agency; <em>Glossary of Nuclear Power Plant Ageing</em>. Paris, France, 1999.</li>
<li><a name="R4" id="R4"></a>Canadian Nuclear Safety Commission (CNSC), Regulatory Document RD-337, <em>Design of New Nuclear Power Plants</em>,&nbsp;2008.</li>
<li><a name="R5" id="R5"></a>CNSC, Regulatory Document RD-310, <em>Safety Analysis for Nuclear Power Plants</em>, 2008.</li>
<li><a name="R6" id="R6"></a>CNSC, Regulatory Standard S-294, <em>Probabilistic Safety Assessment (PSA) for Nuclear Power Plants</em>, 2005.</li>
<li><a name="R7" id="R7"></a>CNSC, Regulatory Document S-99, <em>Reporting Requirements for Operating Nuclear Power Plants</em>, 2003.</li>
<li><a name="R8" id="R8"></a>CNSC, Regulatory Document RD-360, <em>Life Extension of Nuclear Power Plants</em>,&nbsp;2008.</li>
<li><a name="R9" id="R9"></a>IAEA, Safety Standards Series, Safety Guide, No.&nbsp;NS-G-2.10, <em>Periodic Safety Review of Nuclear Power Plants</em>,&nbsp;Vienna, Austria,&nbsp;2003.</li>  </ol>
<a name="#RDsection[ArrayLen(RDsection)]#"></a>
<h2 className="reportHeading2"><a name="P432_52277" id="P432_52277"></a>Additional Information</h2>  <p>The following documents contain additional information related to aging and aging management programs for nuclear power plants:</p>  <ol>
<li>Canadian Nuclear Safety Commission (CNSC), Regulatory Standard S-98 rev 1, <em>Reliability Programs for Nuclear Power Plants</em>, 2005.</li>
<li>CNSC, Regulatory Standard S-210, <em>Maintenance Programs for Nuclear Power Plants</em>, 2007.</li>
<li>Canadian Standards Association (CSA), CSA&nbsp;N285.4, <em>Periodic Inspection of CANDU Nuclear Power Plant Components</em>.</li>
<li>CSA&nbsp;N285.5<em>, Periodic Inspection of CANDU Nuclear Power Plant Containment Components</em>.</li>
<li>CSA&nbsp;N285.8, <em>Technical Requirements for In-Service Evaluation of Zirconium Alloy Pressure Tubes in CANDU</em>.</li>
<li>CSA&nbsp;N287.7, <em>In-Service Examination and Testing Requirements for Concrete Containment Structures for CANDU Nuclear Power Plants</em>.</li>
<li>CSA&nbsp;N290.13, <em>Environmental Qualification of Equipment for CANDU Nuclear Power Plants</em>.</li>
<li>IAEA, Safety Standards Series,Requirements, No. NS-R-1, <em>Safety of Nuclear Power Plants: Design</em>, Vienna, Austria, 2000.</li>
<li> IAEA, Safety Standards Series, Requirements, No. NS-R-2, <em>Safety of Nuclear Power Plants: Operation</em>, Vienna, Austria, 2000.</li>
<li> IAEA, Safety Standards Series, Safety Guide, NS-G-2.4, <em>The Operating Organization for Nuclear Power Plants, </em>Vienna, Austria, 2001.</li>
<li>IAEA, Safety Standards Series, Safety Guide, NS-G-2.6, <em>Maintenance, Surveillance and In-Service Inspection in Nuclear Power Plants</em>, Vienna, Austria, 2002.</li>
<li>IAEA, Safety Report Series No.&nbsp;3, <em>Equipment Qualification in Operational Nuclear Power Plants: Upgrading, Preserving and Reviewing</em>, Vienna, Austria, 1998.</li>
<li> IAEA, Safety Report Series No. 15, <em>Implementation and Review of a Nuclear Power Plant Ageing Management Programme</em>, Vienna, Austria, 1999.</li>
<li>IAEA, Safety Report Series No.&nbsp;62, <em>Proactive Management of Ageing for Nuclear Power Plants</em>, Vienna, Austria, 2009.</li>
<li>IAEA, TECDOC&nbsp;981, <em>Assessment and Management of Ageing of Major Nuclear Power Plant Components Important to Safety: Steam Generators</em>, Vienna, Austria, 1997.</li>
<li>IAEA, TECDOC&nbsp;1025, <em>Assessment and Management of Ageing of Major Nuclear Power Plant Components Important to Safety: Concrete Containment Buildings</em>, Vienna, Austria, 1998.</li>
<li>IAEA, TECDOC&nbsp;1188, <em>Assessment and Management of Ageing of Major Nuclear Power Plant Components Important to Safety: In-containment Instrumentation and Control Cables. Volumes&nbsp;I &amp; II</em>, Vienna, Austria, 2000.</li>
<li>IAEA, TECDOC&nbsp;1197, <em>Assessment and Management of Ageing of Major Nuclear Power Plant Components Important to Safety: CANDU Reactor Assemblies</em>, Vienna, Austria, 2001.</li>
<li> Institute of Nuclear Power Operations (INPO) AP-913 Revision&nbsp;1, <em>Equipment Reliability Process Description</em>, Atlanta, USA, 2001.</li>
<li>United States Nuclear Regulatory Commission (USNRC), NUREG-1801, <em>Generic Aging Lessons Learned (GALL) Report, Vol.&nbsp;1 and&nbsp;2</em>, Washington, DC, USA, 2005.</li>  </ol>

                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }