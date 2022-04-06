import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "en",
                pageTitle: "Archived Web Page: Draft for Public Consultation: GD-310: Guidance on Safety Analysis for Nuclear Power Plants", 
                dateModified: "2011-08-18",
                langToggleUrl: "/fra/acts-and-regulations/consultation/comment/gd-310-1"
        
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
<h2 className="reportHeading2">Preface</h2>  <p>Guidance document GD-310, <em>Guidance on Safety Analysis for Nuclear  Power Plants</em>, provides information on how the requirements in regulatory  document RD-310, <em>Safety <em>Analysis for  Nuclear Power Plants</em></em>, may be met.</p>  <p>To the extent  practicable, the guidance provided in this document is technology neutral with  respect to water-cooled reactors. It includes criteria to ensure that deterministic  safety analysis reports clearly demonstrate the safety of the nuclear power  plant. This guidance document provides information on preparing and  presenting deterministic safety analysis reports, including the selection of  events to be analyzed, acceptance criteria, safety analysis methods, safety  analysis documentation, and the review and update of safety analysis.</p>  <p>This document provides  guidance on a risk-informed approach to the categorization of accidents. This  approach considers a full spectrum of possible events, including the events of  greatest potential consequence to the public.</p>  <p>Key  principles and elements used in developing this guidance document and the  associated regulatory document are consistent with national and international  standards.</p>  <p>Nothing contained in this  document is to be construed as relieving any licensee from pertinent  requirements. It is the licensee&rsquo;s responsibility to identify and comply with  all applicable regulations and licence conditions.</p>
<a name="#RDsection[2]#"></a>
<h2 className="reportHeading2">Table of Contents</h2>  <div className="IndentLeft10">
<p><a href="#P134_4059">1.0 Purpose</a></p>
<p><a href="#P136_4425">2.0 Scope</a></p>
<p><a href="#P140_5115">3.0 Relevant Legislation</a></p>
<p><a href="#P150_8044">4.0 Safety Analysis Roles and Objectives</a></p>  </div>  <div className="IndentLeft20">
<p><a href="#P160_10469">4.1 Roles of deterministic safety analysis</a></p>
<p><a href="#P164_11512">4.2 Objectives of deterministic safety analysis</a></p>
<p><a href="#P184_13578">4.3 Roles of deterministic safety analysis in confirmation of defence in depth</a></p>  </div>  <div className="IndentLeft10">
<p><a href="#P196_15924">5.0 Safety Analysis Requirements</a></p>  </div>  <div className="IndentLeft20">
<p><a href="#P197_15956">5.1 Responsibilities</a></p>
<p><a href="#P209_16991">5.2 Events to be analyzed</a></p>  </div>  <div className="IndentLeft30">
<p><a href="#P210_17017">5.2.1 Identifying events</a></p>
<p><a href="#P235_19823">5.2.2 Scope of events</a></p>
<p><a href="#P287_25817">5.2.3 Classification of events</a></p>  </div>  <div className="IndentLeft20">
<p><a href="#P370_35308">5.3 Acceptance criteria</a></p>  </div>  <div className="IndentLeft30">
<p><a href="#P372_35706">5.3.1 Normal operation</a></p>
<p><a href="#P381_36711">5.3.2 Anticipated operational occurrences and design basis accidents</a></p>
<p><a href="#P409_41147">5.3.3 Beyond design basis accidents</a></p>
<p><a href="#P422_43407">5.3.4 Derived acceptance criteria for anticipated operational occurrences and design basis accidents</a></p>  </div>  <div className="IndentLeft20">
<p><a href="#P433_45952">5.4 Safety analysis methods and assumptions</a></p>  </div>  <div className="IndentLeft30">
<p><a href="#P434_45996">5.4.1 General</a></p>
<p><a href="#P438_46722">5.4.2 Analysis method</a></p>
<p><a href="#P505_55594">5.4.3 Analysis data</a></p>
<p><a href="#P540_58725">5.4.4 Analysis assumptions</a></p>
<p><a href="#P761_74502">5.4.5 Computer codes</a></p>
<p><a href="#P810_81824">5.4.6 Conservatism in analysis</a></p>  </div>  <div className="IndentLeft20">
<p><a href="#P823_84482">5.5 Safety analysis documentation</a></p>
<p><a href="#P835_86339">5.6 Safety analysis review and update</a></p>  </div>  <div className="IndentLeft30">
<p><a href="#P836_86377">5.6.1 Review of safety analysis results</a></p>
<p><a href="#P860_88112">5.6.2 Update of safety analysis</a></p>  </div>  <div className="IndentLeft20">
<p><a href="#P878_89871">5.7 Quality of safety analysis</a></p>  </div>  <div className="IndentLeft10">
<p><a href="#P892_90836">Appendix A: Examples of Event Classifications</a></p>
<p><a href="#P1832_99668">Appendix B: Examples of Derived Acceptance Criteria</a></p>
<p><a href="#P183_9966">Abbreviations</a></p>
<p><a href="#P2028_106113">Glossary</a></p>
<p><a href="#P2096_112795">Additional Information</a></p>  </div>   <a name="1.0"></a>
<h2 className="reportHeading2"><a name="P134_4059" id="P134_4059"></a>1.0 Purpose</h2>  <p>This guidance document clarifies the regulatory requirements of RD-310, <em>Safety Analysis for Nuclear Power Plants</em>. It provides information to ensure adequate deterministic safety analyses are completed in order to demonstrate the safety of the nuclear facility. This information facilitates the conduct, review and approval of deterministic safety analyses.</p>   <a name="2.0"></a>
<h2 className="reportHeading2"><a name="P136_4425" id="P136_4425"></a>2.0 Scope</h2>  <p>This document provides information on the preparation and presentation of deterministic safety analysis reports, including the selection of events to be analyzed, acceptance criteria, safety analysis methods, safety analysis documentation, and the review and update of safety analysis. </p>  <p>This document focuses on deterministic safety analysis. Probabilistic safety assessment is addressed in S-294, <em>Probabilistic Safety Assessment (PSA) for Nuclear Power Plants</em>. </p>  <p>Regulatory requirements and guidance related to the safe handling of fissionable materials outside the reactor core are provided in RD-327, <em>Nuclear Criticality Safety</em>, and GD-327, <em>Guidance for Nuclear Criticality Safety</em>. </p>   <a name="3.0"></a>
<h2 className="reportHeading2"><a name="P140_5115" id="P140_5115"></a>3.0 Relevant Legislation</h2>  <p>Relevant sections of the <em>Nuclear Safety and Control Act</em> (NSCA) and sections of its associated regulations to this guidance document include:</p>  <ul>
<li>Subsection 24(4) of the NSCA, which provides that the Commission may only issue, renew or amend licences if the licensee or the applicant: (<em>a</em>) is qualified to carry on the activity that the licence authorizes the licensee to carry on; and (<em>b</em>) in carrying out that activity, makes adequate provision for the protection of the environment, the health and safety of persons and the maintenance of national security and measures required to implement international obligations to which Canada has agreed</li>
<li> Subsection 24(5) of the NSCA, which authorizes the Commission to include in a licence any term or condition that the Commission considers necessary for the purposes of the Act</li>
<li> Paragraph 3(1)(<em>i</em>) of the <em>General Nuclear Safety and Control Regulations</em>, which provides that an application for a licence shall contain, in addition to other information, &#8220;a description and the results of any test, analysis or calculation performed to substantiate the information included in the application&#8221;</li>
<li> Paragraph 5(<em>f</em>) of the <em>Class I Nuclear Facilities Regulations</em>, which provides that an application for a licence to construct a Class I nuclear facility shall contain, in addition to other information, information on &#8220;a preliminary safety analysis report demonstrating the adequacy of the design of the nuclear facility&#8221;</li>
<li> Paragraph 5(<em>i</em>) of the <em>Class I Nuclear Facilities Regulations</em>, which provides that an application for a licence to construct a Class I nuclear facility shall contain, in addition to other information, information on &#8220;the effects on the environment and the health and safety of persons that may result from the construction, operation and decommissioning of the nuclear facility&#8230;&#8221;</li>
<li> Paragraph 6(<em>c</em>) of the <em>Class I Nuclear Facilities Regulations</em>, which provides that an application for a licence to operate a Class I nuclear facility shall contain, in addition to other information, information on &#8220;a final safety analysis report demonstrating the adequacy of the design of the nuclear facility&#8221;</li>
<li> Paragraph 6(<em>h</em>) of the <em>Class I Nuclear Facilities Regulations</em>, which provides that an application for a licence to operate a Class I nuclear facility shall contain, in addition to other information, information on &#8220;the effects on the environment and the health and safety of persons that may result from the operation and decommissioning of the nuclear facility&#8230;&#8221;</li>
<li> Paragraph 7(<em>f</em>) of the <em>Class I Nuclear Facilities Regulations</em>, which provides that an application for a licence to decommission a Class I nuclear facility shall contain, in addition to other information, information on &#8220;the effects on the environment and the health and safety of persons that may result from the decommissioning of the nuclear facility&#8230;&#8221;</li>  </ul>   <a name="4.0"></a>
<h2 className="reportHeading2"><a name="P150_8044" id="P150_8044"></a>4.0 Safety Analysis Roles and Objectives </h2>  <p>Safety assessments are systematic processes to verify that applicable safety requirements are met in all phases of the lifecycle of a nuclear power plant (NPP). These assessments are performed for various aspects of safety, security and safeguards such as management practices, quality assurance, human performance, safety culture, training, design adequacy, safety analysis, equipment fitness for service, emergency preparedness, environmental protection, and radiation protection.</p>  <p>A safety assessment includes the performance of a safety analysis, which is an analytical quantitative study performed mainly to demonstrate the safety of a nuclear power plant and the adequacy of its design and performance. Deterministic safety analysis, probabilistic safety assessment (PSA) and hazards analysis are three types of safety analysis. </p>  <p>PSA considers the likelihood and consequences of various plant transients and accidents. The primary objectives of the PSA are to help: </p>  <ul>
<li> identify the sequences of events and their probabilities, which lead to challenges to fundamental safety functions, loss of integrity of key structures, release of radionuclides into the environment and public health effects</li>
<li> develop a well balanced NPP design</li>
<li> assess the impact of changes to procedures and or components on the likelihood of core damage</li>  </ul>  <p>For new NPPs, PSAs help identify the importance of proposed complementary design features for severe accidents, or actions that operators can take during severe accidents to reduce risk. Requirements for probabilistic safety assessment for NPPs are provided in regulatory standard S-294, <em>Probabilistic Safety Assessment (PSA) for Nuclear Power Plants</em>. Probabilistic safety assessments complement the deterministic safety assessments.</p>  <p>A hazards analysis (such as fire hazards assessment or seismic margin assessment) will demonstrate the ability of the design to effectively respond to credible common-cause events. This analysis is meant to confirm that the NPP design incorporates sufficient diversity and physical separation to cope with credible common-cause events. It also confirms that credited structures, systems and components (SSCs) are qualified to survive and function during credible common-cause events, as applicable. </p>  <p>This document focuses on deterministic safety analysis. PSA and hazards analysis are outside the scope of this document.</p>   <a name="4.1"></a>
<h3 className="reportHeading3"><a name="P160_10469" id="P160_10469"></a>4.1 Roles of deterministic safety analysis </h3>  <p>The deterministic safety analysis confirms that the design is capable of meeting safety analysis requirements of RD-310 and dose acceptance criteria. It also helps demonstrate that safety goals are met, that the design reflects effective defence in depth, and that the plant design and operation are acceptable and robust.</p>  <p>Deterministic safety analysis is used to analyze the behaviour of a plant following a postulated failure of equipment, internal or external event, or operator error. For the analyzed event, the deterministic safety analysis allows prediction and quantification of challenges to the plant&#8217;s physical barriers and the performance of plant systems (particularly safety systems) in order to predict component failures and radioactivity releases.</p>  <p>Deterministic safety analysis methods can be applied to a wide range of plant operating modes and events (including normal operation, and equipment failure), operator errors and challenges arising from events like fires or earthquakes.</p>  <p></p>   <a name="4.2"></a>
<h3 className="reportHeading3">4.2 Objectives of deterministic safety analysis</h3>  <p>Deterministic safety analysis should meet the requirements of RD-310, <em>Safety Analysis for Nuclear Power Plants</em>. The objectives of a deterministic safety analysis are to: </p>  <ol>
<li> Confirm that the design of a nuclear power plant meets design and safety analysis requirements, by:
<ol className="lower-alpha">
<li> demonstrating that the plant as built can operate safely, taking the effect of aging into consideration </li>
<li> demonstrating that the design can withstand and effectively respond to identified postulated initiating events (PIEs)</li>
<li> demonstrating that the applicable expectations for defence in depth established in RD-337, <em>Design of New Nuclear Power Plants</em> are met </li>
<li>predicting expected harsh environmental conditions due to anticipated operational occurrences (AOOs), design basis accidents (DBAs) and beyond design basis accidents (BDBAs) </li>
</ol>
</li>
<li>Derive or confirm operational limits and conditions that are consistent with the design and safety requirements for the NPP (further guidance can be found in CSA N290.15-10, <em>Requirements for the Safe Operating Envelope of Nuclear Power Plants</em> including:
<ol className="lower-alpha">
<li> safety limits for reactor protection and control </li>
<li> safety limits for engineered safety systems </li>
<li> operational limits and reference settings for the control systems</li>
<li> procedural constraints for operational control of processes</li>
<li> identification of the allowable operating configurations</li>
</ol>
</li>
<li>Assist in establishing and validating accident management procedures and guidelines</li>
<li> Assist in demonstrating that safety goals, which may be established to limit the risks posed by the nuclear power plant, are met</li>  </ol>  <p>Deterministic safety analyses are also performed to:</p>  <ul>
<li>assist in confirming or validating the strategies that have been selected to recover the plant from an AOO or DBA</li>
<li>assist in developing a strategy for the operator to follow, should the automatic actions and emergency operating procedures fail to prevent a severe accident</li>
<li>confirm that modifications to the design and operation of the NPP have no significant adverse impact on safety</li>  </ul>   <a name="4.3"></a>
<h3 className="reportHeading3"><a name="P184_13578" id="P184_13578"></a>4.3 Roles of deterministic safety analysis in confirmation of defence in depth </h3>  <p>Application of the concept of defence in depth to the design of an NPP needs to be confirmed, so the design will provide layers of overlapping provisions, such that any failure would be compensated for or corrected without causing harm to individuals or the public. Deterministic safety analysis is an important part of this confirmation. </p>  <p>Five levels of defence in depth are defined in RD-337, <em>Design of New Nuclear Power Plants</em>. The applicability of deterministic safety analysis to these levels is as follows:</p>  <p><strong>Level 1</strong> &#8211; with the objective of preventing deviations from normal operation and preventing failures of SSCs</p>  <p><strong>Level 2</strong> &#8211; with the objective of detecting and intercepting deviations from normal operation, in order to prevent AOOs from escalating to accident conditions and to return the reactor facility to a state of normal operation</p>  <p>To support second-level defence in depth, AOOs are analyzed to demonstrate the robustness of the control systems in arresting most AOOs and in preventing damage to all SSCs that are not involved in the initiation of an AOO, to the extent that these SSCs will remain operable following the AOO.</p>  <p><strong>Level 3</strong> &#8211; with the objective of minimizing the consequences of accidents </p>  <p>To support third-level defence in depth, AOOs and DBAs are analyzed to demonstrate the safety systems&#8217; capabilities to mitigate any resulting radiological consequences, i.e., to demonstrate meeting the prescribed dose limits for AOOs and DBAs and related derived acceptance criteria for protecting fission product release barriers.</p>  <p>AOOs and DBAs are also analyzed to assist in developing emergency operating procedures that define actions that should be taken during these events.</p>  <p><strong>Level 4</strong> &#8211; with the objective of ensuring that radioactive releases caused by severe accidents are kept as low as practicable</p>  <p><strong>Level 5</strong> &#8211; with the objective of mitigating the radiological consequences of potential releases of radioactive materials, which may result from accident conditions</p>  <p>In support of fourth- and fifth-level defence in depth, BDBAs are analyzed. This analysis is to help understand the performance of complementary design features for severe accidents or actions that operators should take during severe accidents, in order to mitigate the consequences.</p>  <p></p>   <a name="5.0"></a>
<h2 className="reportHeading2"><a name="P196_15924" id="P196_15924"></a>5.0 Safety Analysis Requirements </h2>  <a name="5.1"></a>
<h3 className="reportHeading3"><a name="P197_15956" id="P197_15956"></a>5.1 Responsibilities </h3>  <p>The licensee or applicant is responsible for ensuring that the deterministic safety analysis requirements of RD-310 are met. The licensee or applicant shall: </p>  <ul>
<li> maintain the capability to perform or procure safety analysis to:
<ol className="lower-alpha">
<li> resolve technical issues that arise over the life of the plant </li>
<li> assure the safety analysis requirements are met for safety analysis developed by the operating organization or procured from a third party</li>
</ol>
</li>
<li> establish a process to verify that the safety analysis reflects:
<ol className="lower-alpha">
<li>current plant configuration</li>
<li> current operating limits and conditions</li>
<li> operating experience, including the experience from similar facilities</li>
<li> results available from experimental research, improved theoretical understanding or new modelling capabilities to assess potential impacts on the conclusions of safety analyses</li>
</ol>
</li>
<li> identify the quality assurance standards, and establish and apply detailed processes for performing, procuring, maintaining, reviewing, updating and documenting of the safety analysis</li>  </ul>  <p></p>   <a name="5.2"></a>
<h3 className="reportHeading3"><a name="P209_16991" id="P209_16991"></a>5.2 Events to be analyzed </h3>   <a name="5.2.1"></a>
<h4 className="reportHeading4"><a name="P210_17017" id="P210_17017"></a>5.2.1 Identifying events </h4>  <p>The safety analysis is performed for a set of events that could lead to challenges related to the NPP&#8217;s safety or control functions. These include events caused by SSC failures or human error, as well as human-induced or natural common-cause events. </p>  <p>The events considered in safety analysis could be single PIEs, sequences of several consequential events, or combinations of independent events. </p>  <p>The set of events to be considered in safety analysis is identified using a systematic process and by taking into account:</p>  <ul>
<li>reviews of the plant design using such methods as hazard and operability analysis, failure mode and effects analysis, and master logic diagrams </li>
<li> lists of events developed for safety analysis of other NPPs</li>
<li>analysis of operating experience data for similar plants</li>
<li> any events prescribed for inclusion in safety analysis by regulatory requirements</li>
<li> equipment failures, human errors and common-cause events identified iteratively with PSA</li>  </ul>  <p>The list of identified events should be iteratively reviewed for accuracy and completeness as the plant design and safety analyses proceed. Reviews should also be periodically conducted throughout the NPP lifecycle to account for new information and requirements.</p>  <p>When identifying events, all permissible plant operating modes should be considered and all operating modes used for extended periods of time should be analyzed. Modes that occur transiently or briefly can be addressed without specific analysis, as long as it can be shown that existing safety analyses bound the behaviour and consequences of those states. </p>  <p>NPP operating modes include, but are not limited to:</p>  <ol>
<li>initial approach to reactor criticality</li>
<li>reactor start-up from shutdown through criticality to power</li>
<li> steady-state power operation, including both full and low power</li>
<li> changes in the reactor power level, including load follow modes if employed</li>
<li> reactor shutting down from power operation</li>
<li> shutdown in a hot standby mode</li>
<li> shutdown in a cold shutdown mode</li>
<li> shutdown in a refuelling mode or maintenance mode that opens major closures in the reactor coolant pressure boundary</li>
<li> shutdown in other modes or plant configurations with unique temperature, pressure or coolant inventory conditions</li>
<li> operation of limited duration with some safety related systems unavailable</li>  </ol>  <p>For events identified by the systematic process used for this purpose, a full range of configurations and operating modes of equipment should be considered when performing deterministic safety analysis. </p>  <p>Special plant configurations may occur during major plant modifications such as plant refurbishment, lay-up, or decommissioning.  These configurations should be considered, and potential events should be identified and included in the deterministic safety analysis.</p>  <a name="5.2.2"></a>
<h4 className="reportHeading4"><a name="P235_19823" id="P235_19823"></a>5.2.2 Scope of events </h4>  <p>The list of events developed for the deterministic safety analysis includes: normal operation and all events initiated by credible failures or malfunctions of plant SSCs; operator errors; and common-cause events initiated internally or externally.</p>  <p><strong><em>5.2.2.1 Normal operation</em></strong></p>  <p>During the design phase, the normal plant operation is analyzed as a separate class of event. This allows sources of radiation or releases of radioactive materials to be assessed in various modes of operation or transition between modes. </p>  <p>For an existing plant, a safety analysis for normal operation may be required if a new operational mode is considered or if significant design changes are implemented. </p>  <p><strong><em>5.2.2.2 Failures or malfunctions of structures, systems and components</em></strong></p>  <p>Equipment failures include: failure to operate when required; erroneous operation; and partial failures. Events to be considered include:</p>  <ul>
<li> failures or malfunctions of active systems, such as pumps, valves, control systems or power supply</li>
<li> failures of passive systems, such as breaks in the reactor&#8217;s pressure-retaining boundaries, including pipes and rupture discs</li>  </ul>  <p><strong><em>5.2.2.3 Operator errors </em></strong></p>  <p>As initiating events, operator errors normally produce the same&nbsp;results as events caused by equipment failure. Therefore, they do not need to be considered separately.&nbsp;However, if a specific operator error could result in a unique initiating event, it should be included in the list of PIEs for the deterministic safety analysis.</p>  <p><strong><em>5.2.2.4 Internally and externally initiated common-cause events</em></strong></p>  <p>Common-cause events are multiple component failures that can be initiated by internal and external events (these events could be human induced or naturally occurring). </p>  <p>Internal common-cause events include fires, floods of internal origin, explosions, and equipment failures (such as turbine breakup) that may generate missiles. </p>  <p>External, naturally occurring events (triggers for plant equipment failures) that are considered in deterministic safety analysis include:</p>  <ul>
<li>earthquakes</li>
<li> external fires</li>
<li> floods occurring outside the site</li>
<li> biological hazards (for instance, mussels or seaweed affecting cooling water flow and/or temperature)</li>
<li> extreme weather conditions (temperature, precipitation, high winds)</li>  </ul>  <p>External initiating events may cause an internal event. For example, an earthquake could lead to plant equipment failures or to the loss of off-site power.</p>  <p>Human-induced external events that are considered in deterministic safety analysis include:</p>  <ul>
<li> aircraft or missile impacts</li>
<li> explosions at nearby industrial facilities or transportation systems</li>
<li> release of toxic or corrosive chemicals from nearby industrial facilities or transportation systems</li>
<li> electromagnetic interference</li>  </ul>  <p><strong><em>5.2.2.5 Combinations of events </em></strong></p>  <p>Combinations of events (that may occur either simultaneously or sequentially while restoring the plant to a stable state) should be considered. </p>  <p>Types of combinations include: </p>  <ul>
<li> multiple independent failures in safety-related equipment</li>
<li> failure of a process system and safety-related system</li>
<li> multiple process system failures</li>
<li> equipment failures and operator errors</li>
<li>common cause events and operator errors</li>  </ul>  <p>Examples of event combinations include:</p>  <ul>
<li> loss of coolant with subsequent loss of station electrical power</li>
<li> loss of coolant with loss of containment cooling </li>
<li> small loss of coolant accidents (LOCA) with failure of primary or secondary depressurization </li>
<li> main steam line break with failure of the operator to initiate a backup cooling system</li>  </ul>  <p><strong><em>5.2.2.6 Grouping of events</em></strong></p>  <p>Many events will be identified by following the aforementioned guidance, although it may not be practical or necessary to analyze all of these events. The identified events could be grouped into categories based on similarity of the initiating failures, key phenomena, or system and operator responses. Examples of event categories include: decrease of the reactor coolant inventory, reactivity and power anomalies, and increase of heat removal. Because plant responses to an event depend on the design and availability of plant systems, the most suitable classification of events may vary. </p>  <p>In the safety analysis of AOOs and DBAs for level-3 defence in depth, bounding events should be identified for each applicable acceptance criterion within each category of events. In some cases, one accident scenario in the same category of events may be more severe in terms of one acceptance criterion (for example, containment pressure limit) and another may be more severe in terms of a different acceptance criterion (for example, public doses). All these scenarios should be considered in the safety analysis process as bounding events for different acceptance criteria.</p>  <p><strong><em>5.2.2.7 Subdivision of events</em></strong></p>  <p>An event may be divided into sub-events for consideration in safety analysis when there are substantial differences between the subdivided events in:</p>  <ul>
<li> phenomena occurring at the plant in response to the events</li>
<li> challenges to safety and safety-related systems</li>
<li> frequencies</li>  </ul>  <p>For example, it is common practice to treat a small-break LOCA separately from a large-break LOCA. </p>  <p>An event should not be sub-divided for the explicit purpose of re-classifying one of the resulting sub-events from an AOO to a DBA, or from a DBA to BDBA.</p>  <p><strong><em>5.2.2.8 Cut-off frequency</em></strong></p>  <p>When beginning to identify events, those of low frequency and minor consequences should be included. In defining the scope of events to be analyzed, the deterministic safety analysis should select the same cut-off frequency as that used in the probabilistic analysis for the same facility. This frequency is chosen so the deterministic analysis can be integrated with the probabilistic analysis. </p>  <p>Some events may be excluded from the detailed consideration (for example, because of their negligible contribution to exceeding the safety goals, or because they are bounded by an analyzed event). Such an exclusion should be fully justified and the reasons well documented. </p>  <a name="5.2.3"></a>
<h4 className="reportHeading4"><a name="P287_25817" id="P287_25817"></a>5.2.3 Classification of events </h4>  <p>Events are classified because each plant state has different safety analysis requirements and acceptance criteria. Safety analysis requirements reflect the level of protection in accordance with the principle of defence in depth. The normal plant states and accident conditions are considered in the safety analysis. Classification of accident events are as follows: </p>  <ul>
<li> anticipated operational occurrences (AOOs) &#8211; events that are more complex than the normal operation manoeuvres, with the potential to challenge the safety of the reactor and that might be reasonably expected to happen during the lifetime of a plant, with frequencies of occurrences equal to or greater than 10<sup>-2</sup> per reactor year</li>
<li> design basis accidents (DBAs) &#8211; events that are not expected to occur during the lifetime of a plant but, in accordance with the principle of defence in depth, are considered in the design of the nuclear power plant (with frequencies of occurrence typically equal to or greater than 10<sup>-5</sup> per reactor year but less than 10<sup>-2</sup> per reactor year; however, certain groups of events with lower frequency may also be included in the plant design basis) </li>
<li> beyond design basis accidents (BDBAs) &#8211; events with low probabilities of expected occurrence (less than 10<sup>-5</sup> per reactor year), which are more severe than DBAs, and &#8212; due to multiple failures and/or operator errors &#8212; may result in safety systems that fail to perform their safety functions, leading to significant core damage, challenges to the integrity of the containment barrier, and, eventually, to the release of radioactive material from the plant</li>  </ul>  <p>While the assessed frequency of occurrence is the basis for event classification, it is recognized that such assessments may be characterized by significant uncertainty. Therefore, an event with a predicted frequency that is on the threshold between two classes of events, or with substantial uncertainty in the predicted event frequency, is classified into a higher frequency class. </p>  <p>Other factors may affect the selection of certain events for inclusion. In order to establish an understanding of margins of safety or the robustness of the design, the regulatory authority may request that certain events be analyzed as design basis events. Past practices and experience may indicate that certain scenarios are more critical and should be analyzed as DBAs. </p>  <p>Some plant operating modes may be used only for short periods of time. Normally, events are classified without regard to the frequency of these operating modes. However, frequency of operating modes in classifying events may be considered on a case-by-case basis. </p>  <p>Examples of events of different classes based on CANDU experience are provided in Appendix A. These illustrate possible outputs of the event identification and classification process described in subsection 5.2. This list is for demonstration only and is not meant to be comprehensive. It should be noted that in practice such a list would normally be generated by probabilistic methods. The list will be subject to grouping of events (see subsection 5.2.2.6). It is expected that only representative or bounding events for each group of events be analyzed. </p>  <p><strong><em>5.2.3.1 Anticipated operational occurrences </em></strong></p>  <p>Plant design is expected to be sufficiently robust such that most AOOs would not require the initiation of safety systems to prevent consequential damage to the plant SSCs. This is part of level-2 defence in depth and helps to ensure that events requiring use of safety systems are minimized. The plant control systems are expected to compensate for the event&#8217;s effects and to maintain the plant in a stable state long enough for an operator to intervene. The operator intervention may include, if deemed necessary, activation of safety systems and plant shutdown according to established procedures. After addressing the initiating event, it should be possible to resume plant operations. </p>  <p>For level-3 defence in depth, in addition to meeting the above expectations for level-2 defence in depth, the design is also expected to demonstrate with high confidence that safety systems can mitigate all AOOs without the assistance of plant control systems. </p>  <p>Examples of AOOs include those in Table 1, which provides examples for a CANDU reactor and a light water reactor (LWR). The following is not an exhaustive list. A complete list would depend on the type of reactor and the design of the plant systems.</p>  <table border="1" summary="Examples of anticipated operational occurrences">
<caption>
Table 1: Examples of anticipated operational occurrences
</caption>
<tr>
<td valign="top"><p><strong>Event Category</strong></p></td>
<td valign="top"><p align="center"><strong>Anticipated Operational Occurrences</strong></p></td>
</tr>
<tr>
<td valign="top"><p>Increase in reactor heat removal</p></td>
<td valign="top"><ul>
<li> inadvertent opening of steam relief valves</li>
<li> secondary pressure control malfunctions leading to an increase in steam flow rate</li>
<li> feedwater system malfunctions leading to an increase in the heat removal rate</li>
</ul></td>
</tr>
<tr>
<td valign="top"><p>Decrease in reactor heat removal</p></td>
<td valign="top"><ul>
<li> feedwater pump trips</li>
<li> reduction in the steam flow rate for various reasons (e.g. control malfunctions, main steam valve closure, turbine trip, loss of external load, loss of power, loss of condenser vacuum)</li>
</ul></td>
</tr>
<tr>
<td valign="top"><p>Changes in reactor coolant system flow rate</p></td>
<td valign="top"><ul>
<li> trip of one main coolant pump</li>
<li> inadvertent isolation of one main coolant system loop (if applicable)</li>
</ul></td>
</tr>
<tr>
<td valign="top"><p>Reactivity and power distribution anomalies</p></td>
<td valign="top"><ul>
<li> inadvertent single control rod withdrawal</li>
<li>neutron poison concentration dilution due to a malfunction in the volume control system</li>
<li> wrong placement of a fuel assembly (lwr), or refuelling incorrect channel (CANDU)</li>
</ul></td>
</tr>
<tr>
<td valign="top"><p>Increase in reactor coolant inventory</p></td>
<td valign="top"><ul>
<li>malfunctions of the chemical and inventory control system</li>
</ul></td>
</tr>
<tr>
<td valign="top"><p>Decrease in reactor coolant inventory</p></td>
<td valign="top"><ul>
<li> very small LOCA, due to the failure of an instrument line</li>
</ul></td>
</tr>
<tr>
<td valign="top"><p>Release of radioactive material from a subsystem or component</p></td>
<td valign="top"><ul>
<li> minor leakage from a radioactive waste system</li>
</ul></td>
</tr>  </table>  <p><strong><em>5.2.3.2 Design basis accidents </em></strong></p>  <p>The events leading to design basis accidents (DBAs) are classified based on the estimated frequencies of equipment failures, operator errors or common cause events. All the events identified as initiators of AOOs should also be considered as potential initiators for DBAs, given the relatively high likelihood of AOOs and the possibility of additional equipment failures or operator errors. </p>  <p>Examples of DBAs include those in Table 2, which provides examples for CANDU reactors, pressurized water reactors (PWRs) and other light water reactors (LWRs). The following list is not exhaustive. A complete list of DBAs would depend on the type of reactor and actual design.</p>  <table border="1" summary="Examples of design basis accidents">
<caption>
Table 2: Examples of design basis accidents
</caption>
<tr>
<td valign="top"><p><strong>Event Category</strong></p></td>
<td valign="top"><p align="center"><strong>Design Basis Accidents</strong></p></td>
</tr>
<tr>
<td valign="top"><p>Increase in reactor heat removal</p></td>
<td valign="top"><ul>
<li> steam line breaks</li>
</ul></td>
</tr>
<tr>
<td valign="top"><p>Decrease in reactor heat removal</p></td>
<td valign="top"><ul>
<li> feedwater line breaks</li>
</ul></td>
</tr>
<tr>
<td valign="top"><p>Changes in reactor coolant system flow rate</p></td>
<td valign="top"><ul>
<li> trip of more than one main coolant pump</li>
<li> main coolant pump seizure or shaft break</li>
<li> fuel channel flow blockage (CANDU)</li>
</ul></td>
</tr>
<tr>
<td valign="top"><p>Reactivity and power distribution anomalies</p></td>
<td valign="top"><ul>
<li> uncontrolled control rod withdrawal</li>
<li> control rod ejection (LWR)</li>
<li> boron dilution due to the start up of an inactive loop (PWR)</li>
</ul></td>
</tr>
<tr>
<td valign="top"><p>Increase in reactor coolant inventory</p></td>
<td valign="top"><ul>
<li>inadvertent operation of emergency core cooling</li>
</ul></td>
</tr>
<tr>
<td valign="top"><p>Decrease in reactor coolant inventory</p></td>
<td valign="top"><ul>
<li> a spectrum of possible LOCAs</li>
<li> inadvertent opening of the primary system relief valves</li>
<li> leaks of primary coolant into the secondary system</li>
</ul></td>
</tr>
<tr>
<td valign="top"><p>Release of radioactive material from a subsystem or component</p></td>
<td valign="top"><ul>
<li> overheating of, or damage to, used fuel in transit or storage</li>
<li> break in a gaseous or liquid waste treatment system</li>
</ul></td>
</tr>  </table>  <p>If a leak-before-break (LBB) safety case has been made for a piping system, then some reduction to the scope of DBAs may be credited, such as elimination of protection from local dynamic effects. The LBB safety case should use an accepted methodology.</p>  <p><strong><em>5.2.3.3 Beyond design basis accidents</em></strong></p>  <p>Probabilistic safety assessment (PSA) allows systematic identification of event sequences leading to challenges to the fundamental safety functions. Representative event sequences are then analyzed using deterministic safety analysis techniques to assess the extent of fuel failures, damage to the reactor core, primary heat transport system and containment, and releases of radionuclides. Use of any cut-off limit for the frequency of occurrence of analyzed BDBA should consider the safety goals established for the plant.</p>  <p>Examples of BDBAs include:</p>  <ul>
<li> complete loss of the residual heat removal from the reactor core</li>
<li> complete loss of electrical power for an extended period</li>  </ul>  <p>This class of events also includes massive failures of pressure vessels. Some massive failures of pressure vessels can be exempted from the deterministic safety analysis if it can be demonstrated that these failures are sufficiently unlikely and all the following conditions are satisfied:</p>  <ul>
<li> the vessel is designed, fabricated, installed, and operated in compliance with the nuclear requirements of the applicable engineering codes and other requirements</li>
<li> an in-service inspection program is implemented</li>
<li> operating experience, with vessels of similar design and operating condition, support a low likelihood of failure</li>
<li> the vessel has adequate restraints to limit propagation of damage to the plant</li>  </ul>  <p>Note: A CANDU heat transport system header is not considered a vessel. </p>  <p>Events that have been excluded from the DBA analysis based on LBB methodology is to be considered in the BDBA sequences. For example, any large LOCA or main steam line break that may have been excluded from the design basis accident set should be considered for the BDBA analysis.</p>  <a name="5.3"></a>
<h3 className="reportHeading3"><a name="P370_35308" id="P370_35308"></a>5.3 Acceptance criteria </h3>  <p>Acceptance criteria are established to serve as thresholds of safe operation in normal operation, AOO, DBA and, to the extent practicable, for BDBA. The limits and conditions used by plant designers and operators should be supported by adequate experimental evidence and be consistent with the safety analysis acceptance criteria as described in subsections 5.3.1 to 5.3.4. </p>  <p></p>   <a name="5.3.1"></a>
<h4 className="reportHeading4"><a name="P372_35706" id="P372_35706"></a>5.3.1 Normal operation </h4>  <p>The safety analysis acceptance criteria for normal operation are as follows: </p>  <ul>
<li> radiological doses to workers and doses to the public are within acceptable limits</li>
<li> releases of radioactive material from the NPP are within acceptable limits</li>
<li> doses to workers, doses to the public and the estimates of the releases of radioactive material into the environment meet the As Low As Reasonably Achievable (ALARA) principle</li>  </ul>  <p>The deterministic safety analysis for normal operation should also:</p>  <ul>
<li> verify that initiation of the safety systems would occur only when required </li>
<li> verify that process controls and alarms are effective in reducing or avoiding the need for safety system actions</li>
<li> address all NPP conditions under which systems and equipment are operated as expected, with no internal or external challenges, including all the operational configurations for which the NPP was designed to operate in the course of normal operations over its life, both at power and at shutdown </li>  </ul>   <a name="5.3.2"></a>
<h4 className="reportHeading4"><a name="P381_36711" id="P381_36711"></a>5.3.2 Anticipated operational occurrences and design basis accidents </h4>  <p>The aim of safety analysis for AOOs and DBAs is to demonstrate the effectiveness of the following key safety functions:</p>  <ul>
<li> controlling the reactor power including shutting down the reactor and maintaining it in a shutdown state</li>
<li> removing heat from the core</li>
<li> preserving the integrity of fission product barriers</li>
<li> preserve component fitness for service for AOOs</li>
<li> ensuring that the consequences of radioactive releases are below the acceptable limits</li>
<li> monitoring of critical safety parameters</li>  </ul>  <p>Acceptance criteria for AOOs and DBAs should include: </p>  <ul>
<li> acceptance criteria which relate to doses to the public</li>
<li> derived acceptance criteria which relate to the protection of the defence in depth physical barriers (see subsection 5.3.4 and Appendix B for examples)</li>  </ul>  <p>Quantitative derived acceptance criteria should be developed based on direct physical evidence and well-understood phenomena, and should account for uncertainties.</p>  <p>The committed whole-body dose for average members of the critical groups who are most at risk, at or beyond the site boundary is calculated in the deterministic safety analysis for a period of 30 days after the analyzed event.</p>  <p>This dose is less than or equal to one of the following dose acceptance criteria:</p>  <ul>
<li> 0.5 millisievert for any AOO</li>
<li> 20 millisieverts for any DBA</li>  </ul>  <p>These dose limits apply to new NPPs (effectively those licensed after RD-337, <em>Design of New Nuclear Power Plants</em> was issued in 2008). For existing reactors, the dose limits specified in the operating licences have to be met. </p>  <p>To demonstrate that the radiological consequences of an analyzed event do not exceed the limits, the doses should be calculated according to guidance in subsection 5.4.4.6. </p>  <p>Acceptance criteria for the class of events with higher frequencies of occurrence should be more stringent than those for the class of events with lower frequencies of occurrence. For example: </p>  <ul>
<li> The radiological acceptance criteria for AOOs should be more restrictive, since their frequencies are higher than other classifications.</li>
<li> Public dose limits for AOOs should be established such that there would be no restrictions on activities of the members of the public due to potential radiological releases. </li>
<li> Public dose limits for DBAs should be such that the risk of health effects caused by the received doses would be small. The radiological impact in the case of a DBA should be such that there would be no need for off-site emergency actions.</li>  </ul>  <p>To demonstrate compliance with the public dose acceptance criteria for an AOO, the automatic isolation and pressure suppression functions of the containment system should not be credited. However, the containment passive barrier capability and normally operating containment sub-systems could be credited if qualified for the AOO conditions. </p>  <p>Regarding the qualitative acceptance criteria (such as the examples provided in Appendix B), the following guides are applied only to AOOs:</p>  <ul>
<li> The qualitative acceptance criteria should be satisfied without reliance on automatic function of the safety systems, for a wide range of AOOs. The plant control systems should normally be able to correct the transient and prevent damage to the plant&#8217;s SSCs.</li>
<li> The control systems should be able to maintain the plant in a stable operating state for a sufficiently long time to allow the operator to diagnose the event, initiate required actions and, if necessary, shut the reactor down following the applicable procedures.</li>
<li> Even though control systems may be shown to maintain the plant in a safe state following an AOO without the initiation of safety systems (level-2 defence in depth), it should also be shown with high confidence, for all AOOs, that the safety systems can also mitigate the event without beneficial actions by the control systems (level-3 defence in depth).</li>  </ul>  <p>Certain accidents with predicted frequency of occurrence less than 10<sup>-5</sup> per reactor year could be used as the design basis event for a safety system. In this case, DBA dose limits shall still be met, and the analysis should also consider meeting qualitative acceptance criteria relevant to this particular safety system. For example, large break LOCA may have an estimated frequency of less than 10<sup>-5</sup> per reactor year, yet still be considered as a DBA. Safety system performance should be sufficient to ensure that the DBA dose limits are met. </p>  <p></p>   <a name="5.3.3"></a>
<h4 className="reportHeading4"><a name="P409_41147" id="P409_41147"></a>5.3.3 Beyond design basis accidents </h4>  <p>The deterministic and probabilistic safety assessment should demonstrate that the level-4 defence in depth prevents or mitigates the consequences of BDBAs including severe accidents, as described in RD-337. The BDBA deterministic analysis addresses a set of representative sequences in which the safety systems have malfunctioned and some of the barriers to the release of radioactive material may have failed or been bypassed. Representative BDBAs should be selected from the dominant accident sequences from the probabilistic safety assessment or by adding safety system failures or incorrect operator responses to the DBA sequences.</p>  <p>The aim of safety analysis for BDBAs is to:</p>  <ul>
<li> evaluate the ability of the design to withstand challenges posed by BDBA and to identify plant vulnerabilities</li>
<li> assess the effectiveness of design features incorporated in the plant design specifically to reduce the likelihood and/or mitigate the consequences of BDBAs, including assessment of equipment for accident management and instrumentation to monitor the accident</li>
<li> evaluate the ability to restore and maintain the safety functions using alternative or diverse systems, procedures and methods, including the use of non-safety-grade equipment</li>
<li> assist in the development of an accident management program for BDBAs and severe accident conditions</li>
<li> provide consequence data for accident sequences to use in the PSA</li>
<li> provide input for off-site emergency planning</li>  </ul>  <p>The acceptance criteria for BDBAs are usually formulated in terms of risk criteria such as safety goals related to frequency of severe core damage and significant releases of radioactivity, as assessed by PSA.</p>  <p>Deterministic calculations of the source terms for BDBAs can also be performed in accordance with the aim of the BDBA analysis, to demonstrate meeting the risk criteria. These calculations should demonstrate, for example, that:</p>  <ul>
<li> containment failure will not occur in the short term following a severe accident (see subsections 7.3.4 and 8.6.12 of RD-337)</li>
<li> members of the public are provided a level of protection from the consequences of nuclear power plant operation such that there is no significant additional risk to the life and health of individuals</li>  </ul>  <p></p>   <a name="5.3.4"></a>
<h4 className="reportHeading4"><a name="P422_43407" id="P422_43407"></a>5.3.4 Derived acceptance criteria for anticipated operational occurrences and design basis accidents </h4>  <p>In addition to the dose limits in subsection 5.3.2, acceptance criteria for AOOs and DBAs also include a set of derived acceptance criteria such as the examples of qualitative acceptance criteria identified in Appendix B. </p>  <p>These acceptance criteria are established by the designer to limit the damage to different defence barriers. Compliance with these requirements ensures that there are physical barriers preserved to limit the release of radioactive material and prevent unacceptable radiological releases following an AOO or DBA. Failure to meet a derived acceptance criterion does not necessarily mean that dose limits will be exceeded. However, if the derived acceptance criteria are met with significant margin, then the dose calculation can be simplified because fission product releases are expected to be limited.</p>  <p>The derived acceptance criteria are generally more stringent for events with a higher frequency of occurrence. For example, for most AOOs, the actions of the control systems should be able to prevent consequential degradation of any of the physical barriers to the extent that the related SSCs are no longer fit for continued service (including fuel matrix, fuel sheath (fuel cladding), reactor coolant pressure boundary or containment).</p>  <p>More demanding requirements may be set to demonstrate the availability of a margin between the predicted value and the quantitative acceptance criteria, or to simplify an analysis (for example, to avoid having to perform complex modelling). The conditions of applicability for each additional criterion should be clearly identified.</p>  <p>For each of the qualitative acceptance criteria as illustrated in Appendix B, quantitative acceptance criteria (or limits) should be established. The quantitative limits should:</p>  <ul>
<li> be applicable to the particular NPP system and accident scenario</li>
<li> provide a clear boundary between safe states when failure of an SSC is prevented with high confidence, and unsafe states when a failure of an SSC may occur</li>
<li> be supported by experimental data</li>
<li> incorporate margins or safety factors to account for uncertainty in experimental data and relevant models</li>  </ul>  <p>When there is insufficient data to identify the transition from a safe state to an unsafe state, or to develop accurate models, then the quantitative limit for the corresponding safety requirement should be set at the boundary of the available data, provided that the established limit is conservative.</p>  <p></p>   <a name="5.4"></a>
<h3 className="reportHeading3"><a name="P433_45952" id="P433_45952"></a>5.4 Safety analysis methods and assumptions </h3>  <a name="5.4.1"></a>
<h4 className="reportHeading4"><a name="P434_45996" id="P434_45996"></a>5.4.1 General </h4>  <p>Subsection 5.4 mainly addresses analysis methods and assumptions for the deterministic safety analysis of AOOs and DBAs for level-3 defence in depth. Similar analysis methods and assumptions can be applied for levels-2 and 4 defence in depth (with appropriate levels of conservatism). Certain conservative rules, such as the single failure criterion, are not applied in level-2 and level-4 analyses.</p>  <p>The safety analyst has the option of selecting safety analysis methods and assumptions, as long as the regulatory requirements and expectations are satisfied.</p>  <p>The selection of the safety analysis methods and assumptions should be such that the appropriate level of confidence can be placed in the analysis results.</p>  <p></p>   <a name="5.4.2"></a>
<h4 className="reportHeading4"><a name="P438_46722" id="P438_46722"></a>5.4.2 Analysis method </h4>  <p>The basic elements included in the safety analysis method are described in subsections 5.4.2.1 to 5.4.2.9. </p>  <p>There are three main analysis methods used in the deterministic safety analysis:</p>  <ol>
<li> conservative analysis method such as the method used for level-3 defence in depth</li>
<li> best estimate plus evaluation of uncertainties method such as the method used for level-3 defence in depth</li>
<li> best estimate analysis method such as the method used for levels-2 and 4 defence in depth</li>  </ol>  <p>Methods 1 and 2 above are considered as part of the application of conservatism in safety analysis and are addressed in subsection 5.4.6.</p>  <p><strong><em>5.4.2.1 Identifying the scenarios to be analyzed</em></strong></p>  <p>The scenario to be analyzed, or the analyzed event, should be defined by including descriptions of the following: </p>  <ul>
<li> initial conditions </li>
<li> the initiating event and any additional events</li>
<li> expected actions of the plant systems and the operator in response to the initiating event</li>
<li> general description of the anticipated transient </li>
<li> associated safety concerns</li>
<li> long term stable state at the end of event </li>  </ul>  <p><strong><em>5.4.2.2 Identifying the applicable acceptance criteria</em></strong></p>  <p>A set of applicable criteria should be identified, including any regulatory requirements. These criteria should address all safety challenges while also demonstrating compliance with the dose acceptance criteria given in subsection 5.3.2, as well as the derived acceptance criteria adopted by the designer. In addition to these criteria, others may be defined; for example, to simplify the analysis by imposing more restrictive criteria or to allow intermediate assessments in search of bounding cases.</p>  <p><strong><em>5.4.2.3 Identifying the important phenomena</em></strong></p>  <p>Key phenomena and the range of parameter values associated with the analyzed event should be identified. The supporting experimental data should also be provided or referenced and theoretical understanding demonstrated.</p>  <p>If an event is characterized by sufficiently different stages, then key phenomena should be identified for each stage.</p>  <p>The importance of the involved phenomena should be judged against each acceptance criterion separately. Key parameters are identified for each important phenomenon. These parameters are then ranked for their importance in influencing the applicable acceptance criteria. </p>  <p>Sensitivity analyses can be used, in conjunction with expert judgment, to help identify and rank the parameters by assessing their influence on analysis results for each acceptance criterion. Particular importance should be given to the identification of any abrupt changes in phenomena during any stage of the analysis.</p>  <p>The results of experiments should also be used to help identify important parameters, assist in ranking the importance, and to identify if and where abrupt changes occur.</p>  <p><strong><em>5.4.2.4 Models and computer codes</em></strong></p>  <p>Safety analysis is performed using models of the plant systems and physical phenomena.</p>  <p>All the important phenomena as identified in subsection 5.4.2.3 should be represented in the models embedded in the computer code used for the calculations.</p>  <p>In accordance with RD-310, <em>Safety Analysis for Nuclear Power Plants</em>, subsection 5.4, the models and computer code applicability to the analyzed event shall also be demonstrated. Models of plant systems shall be verified to reflect as-built plant condition, taking into account aging effects, and plant states.</p>  <p>Further guidance is provided in subsection 5.4.5.</p>  <p><strong><em>5.4.2.5 Defining boundary and initial conditions </em></strong></p>  <p>The analysis should define the data characterizing the plant condition preceding the analyzed event and plant performance during the event, such as, but not limited to:</p>  <ul>
<li> plant operating mode</li>
<li>reactor power</li>
<li> fuel burnup and burnup distribution</li>
<li> fuel temperatures</li>
<li> coolant temperatures and pressures</li>
<li> trip set-points and action set-points for mitigating systems</li>
<li> instrumentation delays and uncertainties</li>
<li> safety system performance characteristics</li>
<li> performance of other plant equipment (such as pumps, valves, coolers, boilers, and turbine)</li>
<li> weather conditions</li>  </ul>  <p>In the application of such data, the plant operating limits and conditions (OLCs) should be taken into account. The plant conditions used as the initial condition for the analysis may reflect the actual plant condition or in many cases, reflect limits selected for enforcement of the OLCs. This would be done so that the analysis can confirm that the selection of an OLC value is effective. Alternatively, the analysis results may be employed to derive a suitable value for use as an operating limit. Care and good judgment are required to ensure that the set of OLCs derived from such safety analyses are consistent with each other.</p>  <p><strong><em>5.4.2.6 Conducting calculations</em></strong></p>  <p>Comprehensive calculations are conducted to assess the plant performance against each applicable acceptance criterion. Sensitivity studies are undertaken to assess the impact on analysis results of key assumptions, for example, in identifying the worst single failures in various systems or to assess the impact of using simplified models in place of more accurate sophisticated approaches requiring significant effort in the calculations. Sensitivity analysis, with systematic variations in computer code input variables or modelling parameters, should confirm that there are no &#8220;cliff-edge&#8221; effects such as abrupt changes in plant response, or accident consequences resulting from a change in parameter values.</p>  <p>The duration of the transients considered in the analysis should be sufficient to determine the event consequences. Therefore, the calculations for plant transients are extended beyond the point where the NPP has been brought to shutdown and stable core cooling established by some identified means (i.e., to the point where a long-term, stable state has been reached and is expected to remain as long as required). </p>  <p>In cases where various stages of the transient are governed by different phenomena and/or different time scales, different methods and tools can be applied to model the consecutive stages.</p>  <p><strong><em>5.4.2.7 Accounting for uncertainties </em></strong></p>  <p>In deterministic safety analysis for level-3 defence in depth, all key uncertainties should be identified and accounted for. The safety analysis for level-3 should incorporate appropriate uncertainty allowances for the parameters relevant to the analyzed accident scenario. Such uncertainties should include modelling and input plant parameters uncertainties.</p>  <p>The code accuracy obtained as the result of validation work should be used as a source for the modelling uncertainties. The code accuracy is defined by the bias and the variability in bias and should be obtained from the comparison of code predictions with experimental data.</p>  <p>Input plant parameters (also referred to as operational parameters) are those parameters that characterize the state of plant SSCs or are used to actuate a mitigating system. These are measured using in-reactor instrumentation. </p>  <p>The measurement uncertainties are available from the plant instrumentation and control system documentation or the OLCs. The systematic (bias) and random uncertainty components (standard deviation) should be accounted for.</p>  <p>The measurement bias represents an element of measurement uncertainty arising from a systematic error that is known to cause deviation in a fixed direction. The standard deviation represents an element of measurement uncertainty that cannot be defined exactly or that can cause deviation in either direction but that can be estimated on the basis of a probability distribution.</p>  <p>The above presented uncertainties should be accounted for accordingly in either the conservative analysis or the best estimate plus evaluation of uncertainties methodologies. </p>  <p>In the safety analyses for level-2 and level-4 defence in depth (where a realistic, best-estimate analysis method may be used) it is not necessary to account for uncertainties to the same extent.</p>  <p><strong><em>5.4.2.8 Verification of results</em></strong></p>  <p>Verification is performed to ensure that the deterministic safety analysis results are:</p>  <ul>
<li> correctly extracted from the analysis codes&#8217; output</li>
<li> physically sound</li>
<li> consistent with experimental data from suitable integral tests, previous similar safety analyses or simulations with more advanced models</li>
<li> bounding predictions for each of the safety analysis acceptance criteria</li>  </ul>  <p><strong><em>5.4.2.9 Documentation of results</em></strong></p>  <p>Results of deterministic safety analysis calculations are documented in such a way as to facilitate their review and understanding. The documentation of safety analysis results should include:</p>  <ul>
<li> objective of the analysis</li>
<li> analysis assumptions and their justification</li>
<li> any computer code user options that differ from the options used in code validation</li>
<li> analysis results in comparison with acceptance criteria</li>
<li> findings from sensitivity and uncertainty calculations </li>  </ul>  <p>Further guidance is provided in subsection 5.5.</p>  <p></p>   <a name="5.4.3"></a>
<h4 className="reportHeading4"><a name="P505_55594" id="P505_55594"></a>5.4.3 Analysis data </h4>  <p>The safety analysis is based on plant design and as-built information that is complete and accurate. This information should cover plant SSCs, site specific characteristics and off-site interfaces.</p>  <p>For an NPP in the design phase, the operational data, if needed, should be derived from generic data from operating plants of similar design, or from research or test results. For an operating NPP, the safety analysis should use plant specific operational data.</p>  <p>The safety analysis values for each input parameter should be determined based on:</p>  <ul>
<li> design specifications</li>
<li> tolerances</li>
<li> permissible ranges of variability in operation</li>
<li> uncertainties in measurement or evaluation for that parameter</li>  </ul>  <p>The operational data should include:</p>  <ul>
<li> information on component and system performance, as measured during operation or tests</li>
<li> delays in control systems</li>
<li> biases and drift of instrumentation</li>
<li> system unavailability due to maintenance or testing</li>  </ul>  <p>Applicable limits for NPP parameters that are used as initial and boundary conditions should be identified. The NPP parameters assumed in the safety analysis should envelope the ranges of parameters allowed by the operating procedures or, in a statistical approach, cover a predetermined high percentile of each range at a predetermined high confidence level.</p>  <p>The following NPP parameters may be used in analysis as input data and should be specified in the OLCs, measured, or evaluated during plant operation:</p>  <ol>
<li> neutronic and thermal powers, including power distribution</li>
<li> pressures</li>
<li> temperatures</li>
<li> flows</li>
<li> levels</li>
<li> leakage or bypass of valves, seals, boiler tubes, and containment</li>
<li> inventory of radioactive materials</li>
<li> fuel sheath defects</li>
<li> flux shapes</li>
<li> isotopic purity of coolant and moderator (where relevant)</li>
<li> neutron poison concentration</li>
<li> core burnup and burnup distribution</li>
<li> instrument tolerances</li>
<li> instrument time constants and delays</li>
<li> parameters related to SSC aging (besides accounting for aging effects on other parameters) </li>
<li> position of rods, valves, dampers, doors, gates</li>
<li> number of operational components, such as pumps and valves</li>  </ol>  <p>Note: In the preparation of the data in the above list, there are some parameters (such as core burnup and burnup distribution) that are not measured directly. Core characteristics for all fuel loads should be accounted for. In this example, they are evaluated and extracted from computer simulation for which the accuracy of these tools is supported by station and experimental data. There are generally some inputs to the safety analysis that are derived or inferred from data obtained experimentally.</p>  <p>It should also be noted that effects of aging include long-term mechanisms that cause gradual degradation, as well as mechanisms that can cause rapid degradation. Degradation mechanisms include thermal cycles, deformation, strain, creep, scoring, fatigue, cracking, corrosion and erosion. The allowed aging limits are part of the safety analysis input data.</p>  <p>Uncertainties in plant data should be determined and recorded. These uncertainties should be considered in the uncertainty and sensitivity analyses.</p>  <p></p>   <a name="5.4.4"></a>
<h4 className="reportHeading4"><a name="P540_58725" id="P540_58725"></a>5.4.4 Analysis assumptions </h4>  <p>Assumptions are made in the input data, such as those related to the design and operating parameters as well as in the physical and numerical models implemented in the computer codes. </p>  <p>Assumptions may be intended to be realistic, or deliberately biased in a conservative direction.</p>  <p>The assumptions that are generally used for the level-3 defence in depth analysis of AOOs and DBAs are described in subsections 5.4.4.1 to 5.4.4.6. It should be noted that some of these assumptions are not necessary in the analysis of AOOs for assessing control system capability (level-2 defence in depth) if that can be justified.</p>  <p>For BDBA safety analysis, one aim is to demonstrate the capabilities of SSCs to meet the design requirements specified for BDBA conditions. For certain BDBA requirements, the analysis should account for the full design capabilities of the plant, including the use of some safety and non-safety systems beyond their originally intended function to return the potential severe accident to a controlled state or to mitigate its consequences. The BDBA analysis assumptions on crediting and modelling plant systems and their capability during a BDBA should be consistent with the objectives of the analysis. If credit is taken for use of systems beyond their originally intended function, there should be a reasonable basis to assume they can and will be used as assumed in analysis.</p>  <p><strong><em>5.4.4.1 Single failure in safety group</em></strong></p>  <p>The single failure criterion stipulates that the safety group consisting of a safety system and its support systems should be able to perform its specified functions even if a failure of single component occurs within this group. </p>  <p>Expectations related to the application of the single failure criterion in design can be found in the CNSC&#8217;s regulatory document RD-337, <em>Design of New Nuclear Power Plants</em>. </p>  <p>Any failures that occur as a consequence of the initiating event are part of that event and are not considered to be a single failure for the purpose of safety analysis. For example, equipment that is not qualified for specific accident conditions should be assumed to fail unless its normal operation leads to more conservative results.</p>  <p>The analysis should assume a single failure to occur for each element of a safety group in turn and identify the worst single failure for each acceptance criterion. In addition to a single failure of a component, the analysis should account for the impact on safety group performance of possible maintenance, testing, inspection or repair. </p>  <p>Safety analysis of AOOs and DBAs for level-3 defence in depth should apply the single failure criterion to each safety group.</p>  <p>The single-failure criterion does not need to be applied in the analysis of AOO for level-2 defence in depth and BDBA.</p>  <p><strong><em>5.4.4.2 Performance of structures, systems and components </em></strong></p>  <p><strong><em>5.4.4.2.1 Availability of systems</em></strong></p>  <p>The operation of systems should be credited only when they are designed or shown to be capable of performing the intended function and are qualified to withstand all challenges and cross-link effects arising from the accident.</p>  <p>In the safety analysis of an AOO for level-2 defence in depth, credit may be taken for operation of process and control systems whose actions could help mitigate the event, as long as the credited systems are not impaired as a consequence of the initiating event. The status of these systems and the values assigned to their parameters need to be justified.</p>  <p>In the safety analysis of AOOs and DBAs for level-3 defence in depth, no credit should be taken for the operation of the control systems in mitigating the effects of the initiating event. Effects of control system actions should be considered if these actions would aggravate the transient or delay the actuation of the protection features.</p>  <p>If operation of equipment that is not qualified results in worse event consequences, assume that such equipment is operated in the manner that makes the event worse.</p>  <p>Process equipment that is operating prior to the event is assumed to continue to operate if it is not affected by the initiating event (e.g., boiler feed can be assumed to continue until loss of electrical power for events which do not produce a harsh environment).</p>  <p><strong><em>5.4.4.2.2 Partial and total failures</em></strong></p>  <p>Partial and total failures of equipment should be considered in the analysis of each failure sequence to identify the worst failure for each acceptance criterion.</p>  <p><strong><em>5.4.4.2.3 Worst piping failure</em></strong></p>  <p>Various modes of piping failures should be considered in loss of coolant analyses. They include circumferential, guillotine, and longitudinal failures at any location in a system. </p>  <p>For circumferential and guillotine failures, analysis should consider a discharge area up to, and including, twice the cross sectional area of the piping.</p>  <p>For longitudinal breaks, the analysis should justify the upper limit of the range of postulated break size.</p>  <p>The worst break location, size, and orientation, in the context of posing the most challenges to a safety analysis requirement, should be identified through analysis, including sensitivity analysis, using a conservative break model.</p>  <p>For CANDU reactors, failures of reactor inlet and outlet headers are considered in the same way as piping failures.</p>  <p><strong><em>5.4.4.2.4 Loss of off-site power</em></strong></p>  <p>In addition to a single failure and any consequential failures, a loss of off-site power should be assumed unless a justification is provided. </p>  <p>The loss of off-site power may be assumed to occur either at the initiation of the event or as a consequence of reactor and turbine trip. For example, when loss of class IV power (CANDU) is assumed, the event should be analyzed both with and without the loss of off-site power and the most limiting results used.</p>  <p><strong><em>5.4.4.3 Safety system performance</em></strong></p>  <p>Safety systems should be credited at their minimum allowable performance in accordance with the OLCs.</p>  <p><strong><em>5.4.4.3.1 Shutdown means</em></strong></p>  <p>The deterministic safety analysis shall demonstrate the effectiveness of all credited shutdown means by demonstrating that the design meets applicable acceptance criteria (see subsection 5.3). </p>  <p>This subsection contains different expectations, depending on the reactor&#8217;s design and inherent characteristics as described in RD-337, subsection 8.4. Two broad categories of reactors are considered as follows: </p>  <ul>
<li> reactors with inherent safety: designs that demonstrate that an AOO or DBA&nbsp;with failure of the fast-acting shutdown means (anticipated transient without reactor trip type analysis) does not lead to severe core damage and a significant early challenge to containment </li>
<li> reactors with engineered safety: designs that cannot demonstrate that an AOO or DBA&nbsp;with failure of the fast-acting shutdown means does not lead to severe core damage and a significant early challenge to containment </li>  </ul>  <p>The following are the applicable acceptance criteria for the above two categories of reactors: </p>  <p>Reactors with inherent safety <br />
For the first shutdown means, which is fast-acting, the analysis should demonstrate that the criteria applicable to the initiating event class (AOO or DBA as applicable) are met. Operator actions to supplement the fast-acting shutdown means may be credited provided the conditions for manual reactor trip are satisfied (see the end of this subsection). </p>  <p>For the second shutdown means (which may be manually initiated):</p>  <ul>
<li> The frequency of occurrence of an AOO and the failure frequency of&nbsp;the fast-acting&nbsp;shutdown means may result in a combined frequency that falls in the DBA range, in which case the applicable limits are the DBA dose limits. If the designer can demonstrate a very high reliability for the fast-acting shutdown means, it may be acceptable to use BDBA limits, i.e. the safety goals.</li>
<li> The frequency of a&nbsp;DBA and the failure frequency for&nbsp;the fast-acting shutdown means may result in a combined frequency that falls in the BDBA range, in which case the applicable limits are the safety goals.</li>  </ul>  <p>Reactors with engineered safety<br />
The design includes two redundant, fast-acting means of shutdown, both of which should be demonstrated to be equally&nbsp;effective (RD-337, <em>Design of New Nuclear Power Plants</em>, subsection 8.4). The criteria for both shutdown means will be the same, and will be AOO or DBA criteria as applicable to the event class.</p>  <p>To assist with better understanding of trip parameter expectations, Table 3 can be used to determine the minimum expectations for the specific event under consideration. </p>  <p>Reactor designs with inherent safety are shown as &#8220;reactor design scenario 1&#8221;. </p>  <p>Reactor designs with engineered safety are shown as &#8220;reactor design scenario 2&#8221;.</p>  <table border="1" summary="Minimum Expectations for the Number of Trip Parameters">
<caption>
Table 3: Minimum Expectations for the Number of Trip Parameters
</caption>
<tr>
<td valign="top"><p align="left"><strong>Reactor Design Scenario</strong></p></td>
<td valign="top"><p align="center"><strong>Failure to Shutdown Challenges Containment</strong></p></td>
<td valign="top"><p align="center"><strong>Means of Shutdown (SD)</strong></p></td>
<td valign="top"><p align="center"><strong>Ideal Trip Parameter (TP) Expectation</strong></p></td>
<td valign="top"><p align="center"><strong>Is a Direct Trip Parameter Available?</strong></p></td>
<td valign="top"><p align="center"><strong>Minimum Expectation</strong></p></td>
<td valign="top"><p align="center"><strong>Trip Parameter Total</strong></p></td>
</tr>
<tr>
<td rowspan="4" valign="top"><p align="center">1</p></td>
<td rowspan="4" valign="top"><p align="center">No</p></td>
<td rowspan="2" valign="top"><p align="center">One fast-acting SD means</p></td>
<td rowspan="2" valign="top"><p align="center">One direct TP per event</p></td>
<td valign="top"><p align="center">Yes</p></td>
<td valign="top"><p align="center">One direct TP per event</p></td>
<td valign="top"><p align="center">One TP</p></td>
</tr>
<tr>
<td valign="top"><p align="center">No</p></td>
<td valign="top"><p align="center">Two diverse indirect TPs per event</p></td>
<td valign="top"><p align="center">Two TPs</p></td>
</tr>
<tr>
<td rowspan="2" valign="top"><p align="center">Second SD means</p></td>
<td rowspan="2" valign="top"><p align="center">One direct TP per event</p></td>
<td valign="top"><p align="center">Yes</p></td>
<td valign="top"><p align="center">One direct TP per event</p></td>
<td valign="top"><p align="center">One TP</p></td>
</tr>
<tr>
<td valign="top"><p align="center">No</p></td>
<td valign="top"><p align="center">Two diverse indirect TPs per event</p></td>
<td valign="top"><p align="center">Two TPs</p></td>
</tr>
<tr>
<td rowspan="4" valign="top"><p align="center">2</p></td>
<td rowspan="4" valign="top"><p align="center">Yes</p></td>
<td rowspan="2" valign="top"><p align="center">One fast-acting SD means</p></td>
<td rowspan="2" valign="top"><p align="center">Two TPs per event (at least one direct)</p></td>
<td valign="top"><p align="center">Yes</p></td>
<td valign="top"><p align="center">Two TPs (at least one direct)</p></td>
<td valign="top"><p align="center">Two TPs</p></td>
</tr>
<tr>
<td valign="top"><p align="center">No</p></td>
<td valign="top"><p align="center">Two indirect TPs</p></td>
<td valign="top"><p align="center">Two TPs</p></td>
</tr>
<tr>
<td rowspan="2" valign="top"><p align="center">Second fast-acting SD means</p></td>
<td rowspan="2" valign="top"><p align="center">Two TPs per event (at least one direct)</p></td>
<td valign="top"><p align="center">Yes</p></td>
<td valign="top"><p align="center">Two TPs (at least one direct)</p></td>
<td valign="top"><p align="center">Two TPs</p></td>
</tr>
<tr>
<td valign="top"><p align="center">No</p></td>
<td valign="top"><p align="center">Two indirect TPs</p></td>
<td valign="top"><p align="center">Two TPs</p></td>
</tr>  </table>  <p>The following major points from Table 3 should be noted:</p>  <ul>
<li> two shutdown means are always required for each reactor design scenario</li>
<li> if the consequences of a failure to shutdown challenge containment, then two fast-acting shutdown means are required (reactor design scenario 2)</li>
<li> if the consequences of a failure to shutdown challenge containment, then there are two trip parameters per event per shutdown means</li>
<li> multiple trip parameters on a shutdown means must be diverse, if practicable</li>
<li> trip parameters between shutdown means must be diverse, if practicable</li>  </ul>  <p>A manual reactor trip can be considered to be equivalent to a trip parameter if the requirements for crediting operator action from the main control room are met (see subsection 5.4.4.4) and the reliability of manual shutdown meets the reliability requirements for an automatic trip.</p>  <p><strong><em>5.4.4.3.2 Emergency core cooling system</em></strong></p>  <p>If emergency core cooling system (ECCS) logic has injection logic that is conditioned on the presence of other indicators (i.e. conditioning signal), then the safety analysis should identify and evaluate the consequences of situations where those conditioning signals may be blinded.</p>  <p>If the ECCS activation logic is complex (i.e., several different actions are required for the system to be considered fully activated), then the safety analysis should consider the consequences if some of these actions do not occur, for example, failure to re-align ECCS pump suction to the containment sump.</p>  <p>The potential for gas entrainment that could result in damage due to the occurrence of water hammer should be considered. There is also a need to assess the impact on recirculation flows in the presence of filter plugging, debris blockage, heat exchanger blockage, or pump cavitations. The impact of non-condensable gases on flow and heat transfer should be considered.</p>  <p>The safety analysis should consider the impact on the effectiveness of the ECCS of the inaction, partial action, and normal functioning of any other systems that supplement or degrade the cooling capability of the ECCS.</p>  <p><strong><em>5.4.4.3.3 Containment</em></strong></p>  <p>Deterministic safety analysis should identify and evaluate consequences of situations when the containment isolation instrumentation is blinded. For containment, &#8220;blinded&#8221; refers to conditions for which a containment isolation actuation setpoint is approached but not reached. For example, the containment may be blinded by the inaction, partial action, or normal functioning of other systems that supplement or degrade the containment performance. Containment blinding scenarios are important because an accident with a potential for radioactivity release may not trigger the activation of containment isolation. </p>  <p>The containment leakage rate assumed in the analysis should be based on containment design leak-tightness requirements and confirmed by the leakage rate tests.</p>  <p><strong><em>5.4.4.4 Operator action</em></strong></p>  <p>Specific operator actions required in response to an accident should be identified. Operator actions can be credited in safety analysis for level-3 defence in depth only if:</p>  <ul>
<li> there is reliable instrumentation designed to provide clear and unambiguous indication of the need to take action</li>
<li> the power plant has operating procedures that identify the necessary actions, operator training, support personnel, spare parts, and equipment</li>
<li> environmental conditions do not prevent safe completion of operator actions</li>  </ul>  <p>Following the first clear and unambiguous indication of the necessity for operator actions, such actions may normally be credited in safety analysis level-3 defence in depth no sooner than:</p>  <ul>
<li> 15 minutes for actions in the main control room</li>
<li> 30 minutes for actions outside the main control room (RD-337, <em>Design of New Nuclear Power Plants</em>, subsection 8.10.4)</li>  </ul>  <p>It should be shown by assessment that the specified times are sufficient for the operator to detect and completely diagnose the event, and carry out the required actions. Such assessment should account for the following: </p>  <ul>
<li> time starting from the occurrence of the initiating event to the receipt of the event indication by the operator</li>
<li> time to carry out the diagnosis </li>
<li> time required to perform the action</li>
<li> time for the safety related function to be completed</li>  </ul>  <p>In certain circumstances, time shorter than 15 minutes for a control room action might be assumed provided that:</p>  <ul>
<li> the operator is exclusively focused on the action in question</li>
<li> the required action is unique and does not involve a choice from several options</li>
<li> the required action is simple and does not involve multiple manipulations</li>  </ul>  <p>The assessment of the credited operator action items should be formal and include a validation process. Such a process could consist of:</p>  <ul>
<li> documented procedures that define specific operator action entry points and action</li>
<li> training of all station shift operators on those procedures</li>
<li> performing station drills for recording and assessing the response time </li>
<li> an assessment of those response times and an evaluation done to provide a time credible for safety analysis usage</li>  </ul>  <p><strong><em>5.4.4.5 Modelling assumptions</em></strong></p>  <p>The assumptions incorporated in the computer codes or made during code applications, should be such that safety analysis results, either best-estimate or conservative, remain physically sound. </p>  <p>For all instances in performing safety analysis where the assumptions used are different than those used in the validation, justifications should be provided.</p>  <p><strong><em>5.4.4.6 Dose calculations</em></strong></p>  <p>As mentioned in subsection 5.3, the committed whole-body dose for average members of the critical groups who are most at risk, at or beyond the site boundary is calculated in the deterministic safety analysis for a period of 30 days after the analyzed event. </p>  <p>The effective dose should be used in dose calculations and should include contributions from: </p>  <ul>
<li> external radiation from cloud and ground deposits</li>
<li> inhaled radioactive materials</li>
<li> skin absorption of tritium</li>  </ul>  <p>In dose calculations, the worst weather scenario in terms of predicted dose should be assumed. All weather scenarios with probabilities of occurrences higher than 5% should be accounted for. </p>  <p>No intervention in the form of decontamination or evacuation should be assumed. Intervention against ingestion of radioactive materials and natural removal processes may be assumed. </p>  <p>Dose calculations should also be conducted for several time intervals and up to 1 year after the accident. </p>  <a name="5.4.5"></a>
<h4 className="reportHeading4"><a name="P761_74502" id="P761_74502"></a>5.4.5 Computer codes </h4>  <p>The use of realistic computer codes in safety analysis is preferable, given that the use of conservative codes may produce misleading or unphysical results. However, an extensive experimental database should be established to demonstrate the code applicability and to validate the code, thereby providing a basis for confidence in code predictions. </p>  <p>Fully integrated models could give a more accurate representation of the event and should be used to the extent practicable. These models address all important phenomena within a single code or code package. Sequential application of single-discipline codes is likely to misrepresent feedback mechanisms and should be avoided unless there is a specific advantage.</p>  <p>CSA Standard N286.7-99, <em>Quality Assurance of Analytical, Scientific, and Design Computer Programs for Nuclear Power Plants</em> should be applied in safety analysis code development and use.</p>  <p>The selection of computer codes shall consider the code applicability, the extent of code validation, and the ability to adequately represent the physical system.</p>  <p><strong><em>5.4.5.1 Computer code applicability</em></strong></p>  <p>For the safety analysis of an event, the applicability of computer codes used to predict the consequences is established before conducting the analysis. The demonstration of code applicability includes the following steps:</p>  <ul>
<li> identification of all phenomena significantly influencing the key output parameters (see subsection 5.4.2.3)</li>
<li>confirmation that the code implements adequate models for all key phenomena and demonstrating that these models have been verified and validated against separate effect tests </li>
<li> assessing the closure equations and constitutive relationships</li>
<li> assessing scaling effects. The scalability of the integral effects tests should be assessed to confirm that there is no significant distortion in the database. Scaling distortions and their impact on the code assessment should be identified,&nbsp;evaluated and addressed in the safety analysis</li>
<li> assessing the numerical stability of calculations and temporal and special convergence of iterative approximations. The spatial and temporal convergence&nbsp;are&nbsp;achieved when an&nbsp;increase or a reduction in the node or time step sizes (which includes changing the minimum time step if necessary) does not change simulation results significantly</li>
<li> addressing any gaps or deficiencies in the code applicability for the analyzed event</li>  </ul>  <p>The code applicability assessment and relevant knowledge bases are documented in sufficient detail to allow for an independent review.</p>  <p>To model behaviour involving many coupled phenomena, it should be demonstrated that data is transferred through interfaces (i.e., from the calculation of one phenomenon to another) in a manner which adequately captures the physical phenomena and feedback mechanisms.</p>  <p><strong><em>5.4.5.2 Code validation and quantification of accuracy</em></strong></p>  <p>RD-310, <em>Safety Analysis for Nuclear Power Plants</em>, subsection 5.4.1 requires all computer codes to be validated for their application in safety analysis. The purpose of validation is to provide confidence in the ability of a code for a given application, and also to determine the code accuracy. </p>  <p>The validation should:</p>  <ul>
<li> demonstrate the capability and credibility of a computer code for use in specific analysis application </li>
<li> quantify the accuracy of the code calculations (quantified through comparison of code prediction with experimental data)</li>  </ul>  <p>Codes used in safety analysis are validated by comparing code predictions with:</p>  <ul>
<li> experimental data</li>
<li> commissioning data and operating experience</li>
<li> solutions to standard or benchmark problems</li>
<li> closed mathematical solutions </li>
<li> results of another validated computer program</li>  </ul>  <p>Comparison of code prediction with solutions to standard problems or closed mathematical solutions for the purposes of validation is acceptable but they should normally be supplemented with other types of comparisons.</p>  <p>The experimental database used for validation may encompass the separate effects, component and integrated tests. Chosen test validation should satisfy the following criteria: </p>  <ul>
<li> test data are obtained at physical and geometrical conditions and phenomena that are relevant either to normal operation conditions or to a postulated accident scenario in the reactor</li>
<li> tests used for validation are free of distortions due to geometry or other properties, to the extent practicable</li>
<li> measurement uncertainties are quantified</li>
<li> systematic errors (bias) are minimized and their sources understood</li>
<li> integrated tests used for validation should be specific to the reactor and contain components representative of those in NPPs</li>
<li> data used for model development is independent from data used for computer code validation</li>  </ul>  <p>Accuracy of code predictions should be provided for the key modelling parameters and for the plant parameters used to control power generation or to initiate a mitigating system. See subsection 5.4.2.7. </p>  <p>The bias and variability in bias of the computer code can be obtained from the comparison of code predictions with experimental data. </p>  <p>The code models used during validation should be identified and recommended for use in safety analysis, so that the safety analysis is consistent with the validation. Otherwise, the impact of using different models on the simulation results (code accuracy) should be assessed. </p>  <p>Recommendations should be made clear on the use of a code beyond the conditions for which validation has been performed, and the effects of such extrapolation should be assessed and accounted for. </p>  <p>The effect of the modelling assumptions on the validation results should be assessed, including confirmation that spatial and temporal convergence of the solution is achieved. </p>  <p>Documentation of the computer tools should be clear and easy to follow, so the uncertainties due to user effects would be negligible. The use of different computer hardware or operating systems should also have negligible effects. Means such as user training and compliance with quality assurance procedures should be clearly stated.</p>  <p>Computer code validation should be performed by qualified persons. Validation reports should be reviewed by qualified persons who had not participated in the validation. </p>  <p>The guidance given above is consistent with and complements the requirements in CSA N286.7-99, <em>Quality Assurance of Analytical, Scientific, and Design Computer Programs for Nuclear Power Plants</em>.</p>  <p><strong><em>5.4.5.3 Physical representations</em></strong></p>  <p>Data is also prepared to provide a mathematical representation of the physical components and their arrangements are to be represented by the computer simulation. This input data should be prepared with the following principles:</p>  <ul>
<li> a systematic method for representing components and connections should be developed</li>
<li> the basis for the methodology should be documented. The methods used are usually based on experience in representing experimental facilities and other plants of similar configurations</li>
<li> the representation should be verified and validated</li>
<li> in some cases, plant tests (sometimes as commissioning tests) are required to establish the precision of such representations</li>  </ul>  <p>In general, representations used for plant simulations should be created using the same principles as the representation used for code validation to minimize the related user effects. </p>  <a name="5.4.6"></a>
<h4 className="reportHeading4"><a name="P810_81824" id="P810_81824"></a>5.4.6 Conservatism in analysis </h4>  <p>Safety analysis needs to incorporate a degree of conservatism that is commensurate with the safety analysis objectives and is dependent on the event class. Conservatism in safety analysis is often necessary to cover the potential impact of uncertainties and could be achieved through judicial application of conservative assumptions and data.</p>  <p>The concept of conservatism has been introduced to level-3 defence in depth safety analysis to ensure limiting assumptions for the cases where knowledge of the physical phenomena is insufficient. </p>  <p>For level-2 and level-4 defence in depth, the safety analysis should be carried out using best estimate assumptions, data and methods. Where this is not possible, a reasonable degree of conservatism, appropriate for the objectives of these levels, should be used to compensate for the lack of adequate knowledge of physical processes governing these events. </p>  <p>While it is permissible and sometimes encouraged to use conservative codes, it is usually preferable to apply realistic (best estimate) computer codes. Where conservative analysis results are required for level-3 defence in depth (AOO and DBA) analysis, best estimate computer codes should be used along with the assessment of modelling and input plant parameter uncertainties. </p>  <p>The deterministic safety analysis for AOO and DBA (conservative analysis for level-3 defence in depth) should:</p>  <ul>
<li> apply the single-failure criterion to all safety groups and ensure that the safety groups are environmentally and seismically qualified</li>
<li> use minimum allowable performance (as established in the OLCs) for safety groups</li>
<li> account for consequential failures that may occur as a result of the initiating event</li>
<li> credit the actions of process and control systems only where the systems are passive and environmentally and seismically qualified for the accident conditions</li>
<li> include the actions of process and control systems when their actions may have a detrimental effect on the consequences of the analyzed accident </li>
<li> credit the normally running process systems that are not affected by the analyzed accident</li>  </ul>  <p>Independent selection of all parameters at their conservative values can lead to unphysical plant states. When this could be the case, it is recommended to select conservatively those key parameters that have the strongest influence on the results in comparison with the acceptance criterion under consideration. The remaining parameters can be specified more consistently in ensuing calculations. Each calculation should account for the impact of a particular parameter, so that the effects of all parameters can be assessed.</p>   <a name="5.5"></a>
<h3 className="reportHeading3"><a name="P823_84482" id="P823_84482"></a>5.5 Safety analysis documentation </h3>  <p>Safety analysis documentation shall be sufficiently detailed to allow for an independent review by suitably qualified experts. In particular, the following elements need to be included in the safety analysis documentation:</p>  <ol>
<li> the objective(s) of the analysis</li>
<li> a description of the analyzed event, which should include description of the NPP operating mode, action of SSCs, operator actions and significant phases of the analyzed event (other events bounded by the analyzed event should also be identified)</li>
<li> a description of safety concerns, challenges to safety, and applicable safety analysis criteria, requirements and numerical limits</li>
<li> identification of key phenomena significantly affected by the key parameters for the analyzed event, along with a description of the systematic process used for identification of key parameters</li>
<li> demonstration of the code applicability, including evidence that codes have been validated against prototypical experiments and assessment of the code accuracy, as well as references to the relevant experimental results </li>
<li> demonstration that the analysis assumptions are consistent with the plant operating limits, with evidence from NPP operation and experiments to demonstrate assumed observed variances in operating parameters and uncertainties in modelling parameters, respectively</li>
<li> results of analysis, including results of sensitivity and uncertainty studies with sufficient detail to show dominant phenomena</li>
<li> evidence of independent verification of the inputs and the results</li>
<li> evidence of analysis review, including assessment of the impact, if any, on the plant operating limits, conditions, manuals, etc.</li>  </ol>  <p>Safety analysis documentation should be written in a manner that can be easily understood by the station staff that control the plant&#8217;s operating limits and conditions.</p>  <p></p>   <a name="5.6"></a>
<h3 className="reportHeading3"><a name="P835_86339" id="P835_86339"></a>5.6 Safety analysis review and update </h3>  <a name="5.6.1"></a>
<h4 className="reportHeading4"><a name="P836_86377" id="P836_86377"></a>5.6.1 Review of safety analysis results </h4>  <p>The licensee should develop procedures to determine the extent of independent review to be applied to each step of the safety analysis. </p>  <p>To review the safety analysis and identify potential deficiencies, reviewers should be familiar with: </p>  <ul>
<li> safety standards, analytical methods, and technical and scientific research</li>
<li> changes in power plant data, design, operating envelope and operating procedures</li>
<li> information on operating experience from other nuclear power plants</li>  </ul>  <p>In reviewing the safety analysis, the following review elements should be considered:</p>  <ul>
<li> plant design information, supported by layout, system and equipment drawings, and design manuals</li>
<li> operating limits and permitted operational states</li>
<li> information about the functional capability of the plant, systems and major items of equipment</li>
<li> the findings of tests which validate the functional capability</li>
<li> the results of inspection of components</li>
<li> site characteristics, e.g. flood, seismic, meteorological, and hydrological databases</li>
<li> off-site characteristics, including population densities</li>
<li> results of similar analyses</li>
<li> developments in analytical methods and computer codes</li>
<li>regulatory rules for safety analysis</li>
<li> safety analysis standards and procedures</li>  </ul>  <p>The extent and method of the review should be commensurate with:</p>  <ul>
<li> the analysis complexity and novelty</li>
<li> similarity to previously reviewed analyses</li>
<li> predicted margins to acceptance criteria</li>  </ul>  <p>For novel and complex analysis, use of alternative methods should be considered to confirm analysis results. Alternative methods used for confirmation may be simplified but should be capable of demonstrating that the original analysis results are physically sound.</p>  <a name="5.6.2"></a>
<h4 className="reportHeading4"><a name="P860_88112" id="P860_88112"></a>5.6.2 Update of safety analysis </h4>  <p>The safety analysis report is periodically reviewed and updated to account for changes in NPP configuration, conditions (including those due to aging), operating parameters and procedures, research findings, and advances in knowledge and understanding of physical phenomena, in accordance with CNSC regulatory standard S-99, <em>Reporting Requirements for Operating Nuclear Power Plants</em>.</p>  <p>The periodic update of the safety analysis report should:</p>  <ul>
<li> incorporate new information</li>
<li> address identified new issues</li>
<li> use current tools and methods</li>
<li> assess the impact of modifications to the design and operating procedures that might happen over the life of the NPP</li>  </ul>  <p>Updating safety analysis ensures that it remains valid taking into account:</p>  <ul>
<li> the actual status of the NPP</li>
<li> permitted plant configuration and allowable operating conditions</li>
<li> predicted plant end-of-life state </li>
<li> changes to analytical methods, safety standards and knowledge that invalidate existing safety analysis </li>  </ul>  <p>In order to achieve the above objective, the following guidelines can be used in updating safety analyses:</p>  <ul>
<li> review safety analysis methods against the applicable standards, and research findings available in Canada and internationally to identify the elements that should be taken into account</li>
<li> review the changes made in the NPP data, design, operating envelope, and operating procedure to identify the elements that shall be updated</li>
<li> review information on NPP commissioning and operating experience, in Canada and worldwide, to identify relevant information that should be accounted for </li>
<li> review the progress with resolution of previously identified safety analysis issues, to identify the impact on the safety analysis methods and results</li>  </ul>  <p></p>   <a name="5.7"></a>
<h3 className="reportHeading3"><a name="P878_89871" id="P878_89871"></a>5.7 Quality of safety analysis </h3>  <p>All safety analysis activities should be performed consistent with the established quality assurance (QA) program. In particular, all sources of data should be referenced and documented, and the various steps of the process should be recorded and archived to allow independent checking.</p>  <p>The safety analysis QA program should comply with regulatory requirements, codes and standards, and be consistent with the best international practices. The following are some of the elements that should be considered in the QA program:</p>  <ul>
<li> organizational factors and responsibilities</li>
<li> classification and characterization of events</li>
<li> identification of applicable acceptance criteria</li>
<li> identification of key phenomena and parameters</li>
<li> preparation of analysis methods</li>
<li> preparation of input data</li>
<li> analyzing the failure sequences</li>
<li> conducting uncertainty assessments </li>
<li> verification and review of analysis results</li>
<li> documentation of analysis</li>  </ul>   <a name="A"></a>
<h2 className="reportHeading2"><a name="P892_90836" id="P892_90836"></a>Appendix A: Examples of Event Classifications</h2>  <p>Table A.1 provides grouping of the events into AOOs, DBAs and BDBAs and illustrates the outputs of the event identification and classification process described in subsection&nbsp;5.2. This list is for demonstration only and is not meant to be comprehensive.</p>  <table border="1" summary="Outputs of Event Identification and Classification">
<caption>
Table A.1: Outputs of Event Identification and Classification
</caption>
<tr>
<td  valign="top"><p align="left"><strong>Initiating Event </strong></p></td>
<td  valign="top"><p align="center"><strong>Additional Failures</strong></p></td>
<td  valign="top"><p align="center"><strong>AOO</strong></p></td>
<td  valign="top"><p align="center"><strong>DBA</strong></p></td>
<td  valign="top"><p align="center"><strong>BDBA</strong></p></td>
</tr>
<tr>
<td colSpan="5" valign="top">&nbsp;</td>
</tr>
<tr>
<td colSpan="5" valign="top"><p><strong>LOCA inside containment</strong></p></td>
</tr>
<tr>
<td valign="top"><p>Very small LOCA (leak)</p>
<ul>
<li> Heat transport system (HTS) leak inside containment (within the D<sub>2</sub>O feed pump capacity up to 50 kg/s)</li>
</ul></td>
<td valign="top"><p>No additional failures</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td rowspan="10" valign="top"><p>Small LOCA</p>
<ul>
<li>Small HTS pipe failure (~50-1000 kg/s)</li>
<li> Pipe failure at the top of pressurizer</li>
<li> End-fitting failure</li>
<li> Pressure tube failure with calandria tube intact</li>
<li> Pressure tube/calandria tube failure (in-core LOCA)</li>
</ul></td>
<td valign="top"><p>No additional failures</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Failure of D<sub>2</sub>O recovery / D<sub>2</sub>O feed</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Failure of Class IV power</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Failure of containment isolation</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td valign="top"><p>Failure of all vault coolers </p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td valign="top"><p>Failure of containment pressure relief valves (PRV)</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td valign="top"><p>Failure of containment pressure suppression</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td valign="top"><p>Failure of filtered containment discharge</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td valign="top"><p>Failure of steam generator (SG) cooldown</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td valign="top"><p>Failure of emergency core cooling system (ECCS)</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td rowspan="9" valign="top"><p>Transition break LOCA</p>
<ul>
<li> HTS pipe failure (1000&#8211;3000 kg/s)</li>
</ul></td>
<td valign="top"><p>No additional failures</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Failure of Class IV power</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Failure of containment isolation</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td valign="top"><p>Failure of all vault coolers </p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td valign="top"><p>Failure of containment PRV</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td valign="top"><p>Failure of containment pressure suppression</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td valign="top"><p>Failure of filtered containment discharge</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td valign="top"><p>Failure of SG cooldown</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td valign="top"><p>Failure of ECCS</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td rowspan="9" valign="top"><p>Large-break LOCA</p>
<ul>
<li> (&gt;3000 kg/s)</li>
</ul></td>
<td valign="top"><p>No additional failures</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Failure of Class IV power</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Failure of containment isolation</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td valign="top"><p>Failure of all vault coolers </p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td valign="top"><p>Failure of containment PRV</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td valign="top"><p>Failure of containment pressure suppression</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td valign="top"><p>Failure of filtered containment discharge</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td valign="top"><p>Failure of SG cooldown</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td valign="top"><p>Failure of ECCS</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td colSpan="5" valign="top"><p align="left"><strong>LOCA outside containment</strong></p></td>
</tr>
<tr>
<td rowspan="2" valign="top"><p>Very small LOCA (leak) outside containment</p>
<ul>
<li> HTS instrument tubing rupture outside containment</li>
</ul></td>
<td valign="top"><p>No additional failures</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Failure of shutdown cooling system (SDCS)</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>SG tube chronic leak (&lt;50kg/h) with high I<sub>131</sub> concentration</p></td>
<td valign="top"><p>No additional failures</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td rowspan="5" valign="top"><p>Single SG tube rupture</p></td>
<td valign="top"><p>No additional failures</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Failure of SDCS</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Failure of condenser steam discharge valves (CSDVs)</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Failure of affected SG main steam isolation valves (MSIV) </p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Failure of SDCS and CSDVs </p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td valign="top"><p>Multiple (&#8804;10) SG tube rupture</p></td>
<td valign="top"><p>No additional failures</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Multiple (&gt;10) SG tube rupture</p></td>
<td valign="top"><p>No additional failures</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td rowspan="2" valign="top"><p>HTS gland seal failure</p></td>
<td valign="top"><p>No additional failures</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Failure of SDCS</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td rowspan="2" valign="top"><p>HTS bleed line failure</p></td>
<td valign="top"><p>No additional failures</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Bleed valve failed open</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td rowspan="2" valign="top"><p>HTS feed line failure </p></td>
<td valign="top"><p>No additional failures</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Bleed valve failed open</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Failure of check valve to close</p></td>
<td valign="top"><p>No additional failures</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td colSpan="5" valign="top"><p align="left"><strong>Loss of flow</strong></p></td>
</tr>
<tr>
<td rowspan="2" valign="top"><p>Minor flow blockage in one channel </p></td>
<td valign="top"><p>No additional failures</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>ECCS or containment impairment</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td rowspan="2" valign="top"><p>Severe flow blockage in one channel</p></td>
<td valign="top"><p>No additional failures</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>ECCS or containment impairment</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td rowspan="9" valign="top"><p>Stagnation feeder break</p></td>
<td valign="top"><p>No additional failures</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Failure of Class IV power</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td valign="top"><p>Failure of containment isolation</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td valign="top"><p>Failure of all vault coolers </p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td valign="top"><p>Failure of containment PRV</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td valign="top"><p>Failure of containment pressure suppression</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td valign="top"><p>Failure of filtered containment discharge</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td valign="top"><p>Failure of SG cooldown</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td valign="top"><p>Failure of ECCS</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td colSpan="5" valign="top"><p align="left"><strong>Fuelling failures</strong></p></td>
</tr>
<tr>
<td rowspan="9" valign="top"><p>Fuel ejection from fuelling machine into containment</p></td>
<td valign="top"><p>No additional failures</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Failure of Class IV power</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td valign="top"><p>Failure of containment isolation</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td valign="top"><p>Failure of all vault coolers </p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td valign="top"><p>Failure of containment PRV</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td valign="top"><p>Failure of containment pressure suppression</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td valign="top"><p>Failure of filtered containment discharge</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td valign="top"><p>Failure of SG cooldown</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td valign="top"><p>Failure of ECCS</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td colSpan="5" valign="top"><p align="left"><strong>Feedwater system failures</strong></p></td>
</tr>
<tr>
<td rowspan="3" valign="top"><p>Total loss of feedwater</p></td>
<td valign="top"><p>No additional failures</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Failure of SDCS </p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Failure of steam generator emergency cooling system (SGECS) or emergency secondary water supply system (ESWS)</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td rowspan="3" valign="top"><p>Feedwater line failure upstream of the last check valve</p></td>
<td valign="top"><p>No additional failures</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Failure of SDCS </p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Failure of SGECS or ESWS</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td rowspan="3" valign="top"><p>Feedwater line failure downstream of the last check valve</p></td>
<td valign="top"><p>No additional failures</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Failure of SDCS </p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td valign="top"><p>Failure of SGECS or ESWS</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td colSpan="5" valign="top"><p align="left"><strong>Steam supply system failure</strong></p></td>
</tr>
<tr>
<td valign="top"><p>Inadvertent closing of one MSIV</p></td>
<td valign="top"><p>No additional failures</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Turbine/generator load rejection and turbine trip</p></td>
<td valign="top"><p>No additional failures</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Spurious opening of one or more main steam safety valves (MSSVs)</p></td>
<td valign="top"><p>No additional failures</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Turbine trip with CSDV unavailable</p></td>
<td valign="top"><p>No additional failures</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td rowspan="3" valign="top"><p>Large steam pipe failure:</p>
<ul>
<li> Main steam line rupture</li>
<li> Main steam balance header failure</li>
<li> SG steam nozzle rupture</li>
</ul></td>
<td valign="top"><p>No additional failures</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Failure of SDCS</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td valign="top"><p>Failure of SGECS or ESWS</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td rowspan="3" valign="top"><p>Reheater drain line failure</p></td>
<td valign="top"><p>No additional failures</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Failure of SDCS</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Failure of SGECS or ESWS</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td valign="top"><p>Loss of deaerator pressure due to rupture of extraction steam line</p></td>
<td valign="top"><p>No additional failures</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td colSpan="5" valign="top"><p align="left"><strong>Heat transport pump events</strong></p></td>
</tr>
<tr>
<td valign="top"><p>HTS pump trip</p></td>
<td valign="top"><p>No additional failures</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>HTS pump seizure</p></td>
<td valign="top"><p>No additional failures</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>HTS pump shaft failure</p></td>
<td valign="top"><p>No additional failures</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td colSpan="5" valign="top"><p align="left"><strong>Fuel handling system failures</strong></p></td>
</tr>
<tr>
<td rowspan="3" valign="top"><p>Loss of fuelling machine (FM) cooling in transit</p></td>
<td valign="top"><p>No additional failures</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Failure of containment isolation</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td valign="top"><p>Failure of containment PRVs</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td rowspan="4" valign="top"><p>Loss of FM coolant on reactor</p></td>
<td valign="top"><p>No additional failures</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Failure of containment isolation</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Failure of containment PRVs</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Failure of filtered containment discharge</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td rowspan="2" valign="top"><p>Bundle crushed with FM latched to reactor</p></td>
<td valign="top"><p>No additional failures</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Steam generator tube leak</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td rowspan="2" valign="top"><p>Fuel handling incidents at the irradiated fuel port (IFP)</p></td>
<td valign="top"><p>No additional failures</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Off-gas system not available</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td rowspan="2" valign="top"><p>Irradiated fuel bay (IFB) incidents</p></td>
<td valign="top"><p>No additional failures</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Loss of bay contaminated exhaust system</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td rowspan="3" valign="top"><p>Loss of IFB cooling</p></td>
<td valign="top"><p>No additional failures</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Loss of backup cooling</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Loss of bay contaminated exhaust system</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td rowspan="2" valign="top"><p>Loss of IFB inventory</p></td>
<td valign="top"><p>No additional failures</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Loss of bay contaminated exhaust system</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td colSpan="5" valign="top"><p align="left"><strong>Electrical failures</strong></p></td>
</tr>
<tr>
<td rowspan="2" valign="top"><p>Loss of Class IV power</p></td>
<td valign="top"><p>No additional failures</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Failure of Class III power</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Loss of unit Class I power</p></td>
<td valign="top"><p>No additional failures</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Loss of unit Class II power</p></td>
<td valign="top"><p>No additional failures</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Loss of unit emergency power supply (EPS) </p></td>
<td valign="top"><p>No additional failures</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Loss of common electrical power</p></td>
<td valign="top"><p>No additional failures</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td colSpan="5" valign="top"><p align="left"><strong>Control failures</strong></p></td>
</tr>
<tr>
<td valign="top"><p>Controlling computer failures</p></td>
<td valign="top"><p>No additional failures</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Loss of reactivity control</p></td>
<td valign="top"><p>No additional failures</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Loss of power reactor regulation</p></td>
<td valign="top"><p>No additional failures</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Steam generator (SG) pressure low-spurious opening of atmospheric steam discharge valves (ASDVs) and CSDVs</p></td>
<td valign="top"><p>No additional failures</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Loss of SG level control</p></td>
<td valign="top"><p>No additional failures</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Loss of dearator level control</p></td>
<td valign="top"><p>No additional failures</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Loss of heat transport pressure control: over-pressurization</p></td>
<td valign="top"><p>No additional failures</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Loss of heat transport pressure control: depressurization</p></td>
<td valign="top"><p>No additional failures</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td colSpan="5" valign="top"><p align="left"><strong>SDCS and shield cooling failures</strong></p></td>
</tr>
<tr>
<td valign="top"><p>Loss of cooling/temperature control</p></td>
<td valign="top"><p>No additional failures</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Loss of flow</p></td>
<td valign="top"><p>No additional failures</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Piping failure</p></td>
<td valign="top"><p>No additional failures</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>SDCS heat exchanger tube failure</p></td>
<td valign="top"><p>No additional failures</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td rowspan="2" valign="top"><p>Shield cooling system loss of circulation </p></td>
<td valign="top"><p>No additional failures</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Failure of SDCS</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Total loss of low-pressure service water open system (LPSWOS) </p></td>
<td valign="top"><p>No additional failures</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td rowspan="2" valign="top"><p>Loss of end shield inventory </p></td>
<td valign="top"><p>No additional failures</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Failure of SDCS</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Loss of shield temperature control</p></td>
<td valign="top"><p>No additional failures</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top">&#160; </td>
<td valign="top"><p>Failure of SDCS</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td colSpan="5" valign="top"><p align="left"><strong>Moderator system failures</strong></p></td>
</tr>
<tr>
<td rowspan="5" valign="top"><p>Loss of LPSWOS</p></td>
<td valign="top"><p>No additional failures</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Failure of moderator high-level trip</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Failure of containment isolation</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Failure of PRVs</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Failure of containment filtered discharge</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td rowspan="3" valign="top"><p>Loss of moderator circulation</p></td>
<td valign="top"><p>No additional failures</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Failure of moderator high level switch</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Failure of SDCS</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Loss of moderator temperature control low</p></td>
<td valign="top"><p>No additional failures</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td rowspan="2" valign="top"><p>Loss of moderator inventory </p></td>
<td valign="top"><p>No additional failures</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Failure of SDCS</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Moderator heat exchange tube failure</p></td>
<td valign="top"><p>No additional failures</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Loss of cover gas pressure </p></td>
<td valign="top"><p>No additional failures</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Loss of cover gas circulation </p></td>
<td valign="top"><p>No additional failures</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td rowspan="3" valign="top"><p>Loss of LPSWOS to moderator heat exchangers</p></td>
<td valign="top"><p>No additional failures</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Failure of moderator high level trip</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Failure of SDCS</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td colSpan="5" valign="top"><p align="left"><strong>Support system failures</strong></p></td>
</tr>
<tr>
<td rowspan="6" valign="top"><p>Loss of LPSWOS/Recirculating Cooling Water failure </p></td>
<td valign="top"><p>No additional failures</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Failure of moderator high level trip</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Failure of containment isolation</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Failure of PRVs</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Failure of containment filtered discharge</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Failure of ESWS</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>ESWS failure</p></td>
<td valign="top"><p>No additional failures</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Instrument air system failure</p></td>
<td valign="top"><p>No additional failures</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top"><p>Loss of condensate flow to deaerators</p></td>
<td valign="top"><p>No additional failures</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td colSpan="5" valign="top"><p align="left"><strong>Common mode triggered events</strong> (classification of these events would depend on the assumed parameters)</p></td>
</tr>
<tr>
<td valign="top"><p>Internal fires</p></td>
<td valign="top"><p>No additional failures</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td valign="top"><p>Tritium release</p></td>
<td valign="top"><p>No additional failures</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td valign="top"><p>Hydrogen fire</p></td>
<td valign="top"><p>No additional failures</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td valign="top"><p>Hydrogen explosion</p></td>
<td valign="top"><p>No additional failures</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td valign="top"><p>Design basis earthquake</p></td>
<td valign="top"><p>No additional failures</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td valign="top"><p>Turbine breakup</p></td>
<td valign="top"><p>No additional failures</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td valign="top"><p>Design basis tornado</p></td>
<td valign="top"><p>No additional failures</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td valign="top"><p>Design basis rail line blast</p></td>
<td valign="top"><p>No additional failures</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>
<tr>
<td valign="top"><p>Toxic/corrosive chemical rail line incident</p></td>
<td valign="top"><p>No additional failures</p></td>
<td valign="top">&#160; </td>
<td valign="top"><p align="center">&#8730;</p></td>
<td valign="top"><p align="center">&#8730;</p></td>
</tr>  </table>   <a name="B"></a>
<h2 className="reportHeading2"><a name="P1832_99668" id="P1832_99668"></a>Appendix B: Examples of Derived Acceptance Criteria</h2>  <p>In accordance with RD-310, <em>Safety Analysis for Nuclear Power Plants</em>, subsection 5.3.4, the licensee is to establish derived acceptance criteria. Appendix B provides guidance on the application of the derived acceptance criteria specified in this guidance document. The examples below are obtained from current practice in Canada and internationally.</p>  <p><strong>Anticipated operational occurrences</strong></p>  <p>The overall criteria for an AOO are as follows (see RD-337, <em>Design of New Nuclear Power Plants</em>, subsection 7.3.2): </p>  <ul>
<li> the dose acceptance criterion for an AOO is met</li>
<li> SSCs that are not involved in initiating the event are to remain fit for continued operation</li>  </ul>  <p>Subsection 7.3.2 of RD-337 expects that the majority of AOOs will be mitigated by the control systems and will not need the action of the safety systems to prevent damage. </p>  <p>Additionally, all AOOs shall be mitigated by the safety systems with no assistance from the control systems. Only the criteria that show successful mitigation by the safety systems are shown here in Table B.1.</p>  <table border="1" summary="Examples of Acceptance Criteria for Anticipated Operational">
<caption>
Table B.1: Examples of Acceptance Criteria for Anticipated Operational
</caption>
<tr>
<td valign="top"><p align="left"><strong>Barrier to Fission Product Releases or Fundamental Safety Function</strong></p></td>
<td valign="top"><p align="center"><strong>Criteria</strong></p></td>
</tr>
<tr>
<td valign="top"><p>Fuel matrix</p></td>
<td valign="top"><ul>
<li> Fit for service</li>
</ul></td>
</tr>
<tr>
<td valign="top"><p>Fuel sheath (fuel cladding)</p></td>
<td valign="top"><ul>
<li> No dryout/no departure of nucleate boiling (DNB)</li>
</ul></td>
</tr>
<tr>
<td valign="top"><p>Fuel assembly</p></td>
<td valign="top"><ul>
<li> Maintain fuel coolability</li>
<li> Retain rod-bundle geometry with adequate coolant channels to permit removal of residual heat</li>
<li> No impediment to reactor shutdown means due to geometry change (LWR)</li>
</ul></td>
</tr>
<tr>
<td valign="top"><p>Fuel channel (CANDU)</p></td>
<td valign="top"><ul>
<li> Fit for service:
<ul>
<li> ASME service level B not exceeded</li>
</ul>
</li>
</ul></td>
</tr>
<tr>
<td valign="top"><p>Primary coolant system (excluding CANDU fuel channel)</p></td>
<td valign="top"><ul>
<li> Fit for service:
<ul>
<li> ASME service level B not exceeded</li>
</ul>
</li>
</ul></td>
</tr>
<tr>
<td valign="top"><p>Secondary coolant system</p></td>
<td valign="top"><ul>
<li> Fit for service:
<ul>
<li>ASME service level B not exceeded</li>
</ul>
</li>
</ul></td>
</tr>
<tr>
<td valign="top"><p>Containment</p></td>
<td valign="top"><ul>
<li> Fit for service:
<ul>
<li>ASME service level B not exceeded </li>
</ul>
</li>
<li> Leakage remains within design limit leakage</li>
</ul></td>
</tr>
<tr>
<td valign="top"><p>Control of reactivity</p></td>
<td valign="top"><ul>
<li> Reactivity controlled by safety system</li>
<li> After shutdown, there is no inadvertent return to criticality</li>
</ul></td>
</tr>
<tr>
<td valign="top"><p>Removal of residual heat</p></td>
<td valign="top"><ul>
<li> Heat removal by safety system effective</li>
</ul></td>
</tr>
<tr>
<td valign="top"><p>Monitoring of conditions</p></td>
<td valign="top"><ul>
<li>Fit for service:
<ul>
<li> safety system instrumentation environmentally and seismically qualified</li>
</ul>
</li>
</ul></td>
</tr>
<tr>
<td valign="top"><p>Off-site dose</p></td>
<td valign="top"><ul>
<li> Within the dose acceptance criteria of RD-337, subsection 4.2.1, for an AOO</li>
</ul></td>
</tr>  </table>  <p>Design basis accidents</p>  <p>The overall criteria for a DBA are as follows:</p>  <ul>
<li> the dose acceptance criterion for a DBA is met</li>
<li> the event does not progress to more severe conditions</li>  </ul>  <p>Subsection 5.3.4 of RD-310 states the following general principles to be met by derived acceptance criteria:</p>  <ul>
<li> avoid the potential for consequential failures resulting from an initiating event</li>
<li>maintain the SSCs in a configuration that permits the effective removal of residual heat</li>
<li> prevent development of complex configurations or physical phenomena that cannot be modeled with high confidence</li>
<li> be consistent with the design requirements for plant SSCs</li>  </ul>  <p>Table B.2 provides examples of DBA acceptance criteria.</p>  <table border="1" summary="Examples of Acceptance Criteria for Design Basis Accidents">
<caption>
Table B.2: Examples of Acceptance Criteria for Design Basis Accidents
</caption>
<tr>
<td valign="top"><p align="left"><strong>Barrier to Fission Product Releases or Fundamental Safety Function</strong></p></td>
<td valign="top"><ul>
<p align="center"><strong>Criteria</strong></p>
</ul></td>
</tr>
<tr>
<td valign="top"><p>Fuel matrix</p></td>
<td valign="top"><ul>
<li> No fuel centreline melting </li>
<li> No fuel breakup</li>
<li> No excessive energy deposition </li>
</ul></td>
</tr>
<tr>
<td valign="top"><p>Fuel sheath (fuel cladding)</p></td>
<td valign="top"><ul>
<li> Fuel elements (fuel rods) that exceed the critical heat flux (CHF) or departure of nucleate boiling (DNB) criteria are assumed to rupture and contribute to offsite dose </li>
<li> No excessive strain of fuel sheath </li>
<li> Fuel elements are to meet applicable limits for:
<ul>
<li> sheath temperature </li>
<li> local sheath oxidation </li>
<li> oxygen embrittlement of fuel sheath</li>
</ul>
</li>
</ul></td>
</tr>
<tr>
<td valign="top"><p>Fuel assembly</p></td>
<td valign="top"><ul>
<li> Maintain fuel coolability</li>
<li> Retain rod-bundle geometry or fuel assembly with adequate coolant channels to permit removal of residual heat</li>
<li> No impediment to reactor shutdown means due to geometry change (LWR)</li>
</ul></td>
</tr>
<tr>
<td valign="top"><p>Fuel channel</p>
<p>(CANDU)</p></td>
<td valign="top"><ul>
<li> Fuel channel remains intact</li>
<li> Local pressure tube strain below failure threshold</li>
<li> Moderator subcooling precludes failure</li>
<li> No constrained expansion</li>
<li> No fuel sheath melting</li>
<li> No fuel centreline melting</li>
<li> No fuel breakup</li>
<li> No fuel element bowing and/or sagging into pressure tube (PT) contact </li>
</ul></td>
</tr>
<tr>
<td valign="top"><p>Primary coolant system</p>
<p>(excluding CANDU fuel channel)</p></td>
<td valign="top"><ul>
<li> Pressure boundary remains intact:
<ul>
<li> ASME service level C not exceeded</li>
<li> No consequential boiler tube leaks</li>
</ul>
</li>
</ul></td>
</tr>
<tr>
<td valign="top"><p>Secondary coolant system</p></td>
<td valign="top"><ul>
<li>Pressure boundary remains intact:
<ul>
<li> ASME service level C not exceeded</li>
</ul>
</li>
</ul></td>
</tr>
<tr>
<td valign="top"><p>Calandria and moderator system</p>
<p>(not applicable to LWR)</p></td>
<td valign="top"><ul>
<li> Pressure boundary remains intact:
<ul>
<li> ASME service level C not exceeded</li>
</ul>
</li>
</ul></td>
</tr>
<tr>
<td valign="top"><p>Containment </p></td>
<td valign="top"><ul>
<li> Containment conditions remain within design basis:
<ul>
<li> Pressure less than design pressure</li>
<li> Containment leakage remains within design leakage limit</li>
<li> Environmental qualification (EQ) conditions (temperature, humidity, radioactive doses) on credited SSCs met</li>
<li> No break local effects (missiles, break jets, pipe whip, hydrogen standing flame) that could fail confinement function</li>
<li> Local hydrogen concentrations below flame acceleration (FA) and deflagration to detonation transition (DDT) criteria</li>
<li> Combustion loads from slow deflagration less than those that could damage containment SSCs</li>
</ul>
</li>
</ul></td>
</tr>
<tr>
<td valign="top"><p>Control of reactivity</p></td>
<td valign="top"><ul>
<li> Reactivity is controlled:
<ul>
<li> No prompt criticality</li>
<li> After shutdown, any return to power is limited in extent and does not lead to exceeding any other derived acceptance criteria</li>
</ul>
</li>
</ul></td>
</tr>
<tr>
<td valign="top"><p>Removal of residual heat</p></td>
<td valign="top"><ul>
<li> Continuous long term core cooling is possible:
<ul>
<li> Core geometry is coolable</li>
<li> Residual heat is removed from the core</li>
<li> Heat is transported to ultimate heat sink</li>
</ul>
</li>
</ul></td>
</tr>
<tr>
<td valign="top"><p>Monitoring of conditions</p></td>
<td valign="top"><ul>
<li> Fit for service:
<ul>
<li> Safety system instrumentation environmentally and seismically qualified</li>
</ul>
</li>
</ul></td>
</tr>
<tr>
<td valign="top"><p>Off-site dose</p></td>
<td valign="top"><ul>
<ul>
<li> Within the dose acceptance criteria of RD-337, subsection
4.2.1 for a DBA</li>
</ul>
</ul></td>
</tr>  </table>
<a name="#RDsection[35]#"></a>
<h2 className="reportHeading2"><a name="P183_9966" id="P183_9966"></a>Abbreviations</h2>  <table className="table table-striped">
<tr>
<td valign="top"><p><strong>ALARA</strong></p></td>
<td valign="top"><p>as low as reasonably achievable</p></td>
</tr>
<tr>
<td valign="top"><p><strong>AOO</strong></p></td>
<td valign="top"><p>anticipated operational occurrence</p></td>
</tr>
<tr>
<td valign="top"><p><strong>ASME</strong></p></td>
<td valign="top"><p>American Society of Mechanical Engineers</p></td>
</tr>
<tr>
<td valign="top"><p><strong>BDBA</strong></p></td>
<td valign="top"><p>beyond design basis accident</p></td>
</tr>
<tr>
<td valign="top"><p><strong>CNSC</strong></p></td>
<td valign="top"><p>Canadian Nuclear Safety Commission</p></td>
</tr>
<tr>
<td valign="top"><p><strong>DBA</strong></p></td>
<td valign="top"><p>design basis accident</p></td>
</tr>
<tr>
<td valign="top"><p><strong>ECCS</strong></p></td>
<td valign="top"><p>emergency core cooling system</p></td>
</tr>
<tr>
<td valign="top"><p><strong>EPS</strong></p></td>
<td valign="top"><p>emergency power supply</p></td>
</tr>
<tr>
<td valign="top"><p><strong>HTS</strong></p></td>
<td valign="top"><p>heat transport system</p></td>
</tr>
<tr>
<td valign="top"><p><strong>IAEA</strong></p></td>
<td valign="top"><p>International Atomic Energy Agency</p></td>
</tr>
<tr>
<td valign="top"><p><strong>LBB</strong></p></td>
<td valign="top"><p>leak-before-break</p></td>
</tr>
<tr>
<td valign="top"><p><strong>LOCA</strong></p></td>
<td valign="top"><p>loss of coolant accident</p></td>
</tr>
<tr>
<td valign="top"><p><strong>LWR</strong></p></td>
<td valign="top"><p>light water reactor</p></td>
</tr>
<tr>
<td valign="top"><p><strong>MCR</strong></p></td>
<td valign="top"><p>main control room</p></td>
</tr>
<tr>
<td valign="top"><p><strong>NPP</strong></p></td>
<td valign="top"><p>nuclear power plant</p></td>
</tr>
<tr>
<td valign="top"><p><strong>NSCA</strong></p></td>
<td valign="top"><p><em>Nuclear Safety and Control Act</em></p></td>
</tr>
<tr>
<td valign="top"><p><strong>OLC</strong></p></td>
<td valign="top"><p>operating limits and conditions</p></td>
</tr>
<tr>
<td valign="top"><p><strong>PIE</strong></p></td>
<td valign="top"><p>postulated initiating event</p></td>
</tr>
<tr>
<td valign="top"><p><strong>PSA</strong></p></td>
<td valign="top"><p>probabilistic safety assessment</p></td>
</tr>
<tr>
<td valign="top"><p><strong>PWR</strong></p></td>
<td valign="top"><p>pressurized water reactors</p></td>
</tr>
<tr>
<td valign="top"><p><strong>RCS</strong></p></td>
<td valign="top"><p>reactor coolant system</p></td>
</tr>
<tr>
<td valign="top"><p><strong>SSCs</strong></p></td>
<td valign="top"><p>structures, systems and components</p></td>
</tr>  </table>
<a name="#RDsection[36]#"></a>
<h2 className="reportHeading2"><a name="P2028_106113" id="P2028_106113"></a>Glossary</h2>  <dl className="margins-removed">
<dt>acceptance criteria</dt>
<dd>specified bounds on the value of a functional or condition indicator used to assess the ability of a structure, system or component to meet its design and safety requirements</dd>
<dt>acceptance parameter </dt>
<dd>a plant parameter that characterizes plant response and has a defined acceptance criterion as a limit for the acceptable range of values </dd>
<dt>accident </dt>
<dd>any unintended event, including operating errors, equipment failures or other mishaps, the consequences or potential consequences of which are not negligible from the point of view of protection or safety</dd>
<dt>anticipated operational occurrence</dt>
<dd>an operational process deviating from normal operation that is expected to occur once or several times during the operating lifetime of the nuclear power plant, but which, in view of the appropriate design provisions, does not cause any significant damage to items important to safety nor lead to accident conditions</dd>
<dt>best estimate method</dt>
<dd>a method designed to give realistic results </dd>
<dt>beyond design basis accident</dt>
<dd>accident conditions less frequent and more severe than a design basis accident. A BDBA may or may not involve core degradation.</dd>
<dt>blinding </dt>
<dd>conditions for which an actuation or conditioning signal is approached but not reached, either because of the small magnitude of the initiating event or the actions of other process or safety systems</dd>
<dt>bounding event</dt>
<dd>the event with the smallest predicted margin to a specific acceptance criterion </dd>
<dt>code accuracy </dt>
<dd>the degree of closeness of a calculated quantity to its actual value. Comprised of the bias and variability of bias of a computer code that are derived from the comparison of code predictions with experimental data</dd>
<dt>common cause </dt>
<dd>a cause for a concurrent failure of two or more structures, systems or components, such as  natural phenomena (earthquakes, tornados or floods, etc.), design deficiency, manufacturing flaws, operation and maintenance errors, human-induced destructive events and others</dd>
<dt>conservatism </dt>
<dd>use of assumptions, based on experience or indirect information, about a phenomena or behaviour of a system being at or near the limit of expectation, which increases margins to safety or makes predictions regarding consequences more severe than if best-estimate assumptions had been made </dd>
<dt>design basis accident</dt>
<dd>accident conditions against which an NPP is designed according to established design criteria, and for which the damage to the fuel and the release of radioactive material are kept within authorized limits</dd>
<dt>deterministic safety analysis </dt>
<dd>an analysis of nuclear power plant responses to an event, performed using predetermined rules and assumptions (e.g., those concerning the initial operational state, availability and performance of the systems and operator actions). Deterministic analysis can use either conservative or best estimate methods</dd>
<dt>dose acceptance criteria</dt>
<dd>bounds for radiation doses that are established to protect workers and the public from harm due to the release of radioactive material in normal operation, anticipated operational occurrences and design basis accidents </dd>
<dt>emergency core cooling system </dt>
<dd>a safety system that transfers heat from the reactor core following a loss of reactor coolant that exceeds makeup capability</dd>
<dt>event category</dt>
<dd>a group of events characterized by the same or similar cause and similarity in the governing phenomena</dd>
<dt>measurement uncertainty</dt>
<dd>the amount by which a measured value may not represent the actual physical value of a parameter at the time of measurement</dd>
<dt>normal operation</dt>
<dd>operation of a nuclear power plant within specified operational limits and conditions, including start-up, power operation, shutting down, shutdown, maintenance, testing and refuelling</dd>
<dt>nuclear power plant</dt>
<dd>a nuclear power plant is any fission-reactor installation that has been constructed to generate electricity on a commercial scale. A nuclear power plant is a Class IA nuclear facility, as defined in the <em>Class I Nuclear Facilities Regulations</em></dd>
<dt>operational limits and conditions </dt>
<dd>a set of rules setting forth parameter limits or conditions that ensures the functional capability and the performance levels of equipment for safe operation of an NPP</dd>
<dt>operational mode </dt>
<dd>operational mode may include start-up, operation at various power levels, shutting down, shutdown, maintenance, testing and refuelling</dd>
<dt>postulated initiating event</dt>
<dd>an event identified in the design as leading to either an anticipated operational occurrence or accident conditions. This means that a postulated initiating event is not necessarily an accident itself; but rather it is the event that initiates a sequence that may lead to an AOO, a DBA, or a BDBA, depending on the additional failures that may occur</dd>
<dt>safety analysis </dt>
<dd>evaluation of the potential hazards associated with the conduct of a proposed activity</dd>
<dt>safety assessment</dt>
<dd>assessment of all aspects of the siting, design, commissioning, operation or decommissioning of an authorized facility that is relevant to safety</dd>
<dt>safety goal</dt>
<dd>objective to protect reactor facility staff, the public and the environment from harm by establishing and maintaining effective defences against the release of the radiological hazards </dd>
<dt>safety group</dt>
<dd>assembly of structures, systems and components designated to perform all actions required for a particular postulated initiating event, in order to ensure that the specified limits for anticipated operational occurrences and design basis accidents are not exceeded (it may include certain safety and safety support systems, and any interacting process system)</dd>
<dt>safety system </dt>
<dd>a system provided to ensure the safe shutdown of the reactor or the residual heat removal from the core, or to limit the consequences of anticipated operational occurrences and design basis accidents</dd>
<dt>sensitivity analysis</dt>
<dd>a quantitative examination of how the behaviour of a system varies with change, usually in the values of the governing parameters</dd>
<dt>shutdown state </dt>
<dd>a subcritical reactor state with defined margin to prevent a return to criticality without external actions</dd>
<dt>single failure</dt>
<dd>a failure that results in the loss of capability of a system or component to perform its intended function(s) and any consequential failure(s) that result from it</dd>
<dt>single-failure criterion </dt>
<dd>the criterion used to determine whether a system is capable of performing its function in the presence of a single failure</dd>
<dt>structures, systems and components</dt>
<dd>a general term encompassing all of the elements (items) of a facility or activity which contribute to protection and safety, except human factors</dd>
<dt>support features of safety systems</dt>
<dd>the collection of equipment that provides services such as cooling, lubrication and energy supply required by the protection system and the safety actuation systems</dd>  </dl>
<a name="#RDsection[37]#"></a>
<h2 className="reportHeading2"><a name="P2096_112795" id="P2096_112795"></a>Additional Information</h2>  <ol>
<li>Canadian Nuclear Safety Commission, RD-337, <em>Design of New Nuclear Power Plants</em>, Ottawa, 2008.</li>
<li> Canadian Nuclear Safety Commission, S-294, <em>Probabilistic Safety Assessment (PSA) for Nuclear Power Plants</em>, Ottawa, 2005.</li>
<li> Canadian Nuclear Safety Commission, S-99, <em>Reporting Requirements for Operating Nuclear Power Plants</em>, Ottawa, 2003.</li>
<li>Canadian Nuclear Safety Commission, G-149, <em>Computer Programs Used in Design and Safety Analyses of Nuclear Power Plants and Research Reactors</em>, Ottawa, 2000.</li>
<li> Canadian Nuclear Safety Commission, RD-327, <em>Nuclear Criticality Safety</em>, Ottawa, 2010.</li>
<li> Canadian Nuclear Safety Commission, GD-327, <em>Guidance for Nuclear Criticality Safety</em>, Ottawa, 2010.</li>
<li> Canadian Standards Association, N286.7-99, <em>Quality Assurance of Analytical, Scientific and Design Computer Programs for Nuclear Power Plants</em>, Toronto, 2003.</li>  </ol>

                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }