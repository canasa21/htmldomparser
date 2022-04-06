import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "en",
                pageTitle: "Archived Web Page - RD&ndash;308: Deterministic Safety Analysis for Small Reactors", 
                dateModified: "2011-01-19",
                langToggleUrl: "/fra/acts-and-regulations/consultation/comment/rd-308-1"
        
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
<h2 className="reportHeading2">Preface</h2>  <p>This regulatory document sets out the requirements of the Canadian Nuclear Safety Commission (CNSC) for deterministic safety analysis for small reactors that must be submitted to the CNSC pursuant to the <i>General Nuclear Safety and Control Regulations</i> and <i>Class I Nuclear Facilities Regulations</i>.</p>  <p>It identifies regulatory criteria for the preparation and presentation of a deterministic safety analysis for a small reactor. Small reactors are defined as any reactor facility that is used for research, isotope production, steam generation, small-scale electricity production or other applications that are not designed for large-scale commercial power production. Reactors with a thermal power less than 200 MW are normally considered to be small reactors. </p>  <p>This document establishes a modern risk-informed approach to the classification of accidents, one that considers a full spectrum of possible events, including the events of greatest consequence to the public. </p>  <p>The regulatory document allows the use of a graded approach to determine the scope and depth of deterministic safety analysis.</p>  <p>The CNSC expects applicants for new small reactor licences to immediately apply this regulatory document to new-build submissions. In the context of existing small reactors, CNSC expects the licensees to apply this document, in a graduated manner, to all relevant programs in future submissions.</p>  <p>Nothing contained in this document is to be construed as relieving any licensee from pertinent requirements. It is the licensee&#8217;s responsibility to identify and comply with all applicable regulations and licence conditions.</p>
<a name="#RDsection[2]#"></a>
<h2 className="reportHeading2">Table of Contents</h2>  <div className="IndentLeft10">
<p><a href="#P114_4141"><strong>1.0 Introduction</strong></a></p>  </div>  <div className="IndentLeft20">
<p><a href="#P115_4157">1.1 Purpose</a></p>
<p><a href="#P117_4334">1.2 Scope</a></p>
<p><a href="#P121_5236">1.3 Relevant regulations</a></p>
<p><a href="#P130_7822">1.4 National and international standards</a></p>  </div>  <div className="IndentLeft10">
<p><a href="#P135_8481"><strong>2.0 Graded Approach</strong></a></p>  </div>  <div className="IndentLeft20">
<p><a href="#P139_9010">2.1 Application of graded approach to safety analysis</a></p>  </div>  <div className="IndentLeft10">
<p><a href="#P153_9844"><strong>3.0 Safety Analysis</strong></a></p>  </div>  <div className="IndentLeft20">
<p><a href="#P164_11373">3.1 Deterministic safety analysis objectives</a></p>  </div>  <div className="IndentLeft10">
<p><a href="#P171_12015"><strong>4.0 Deterministic Safety Analysis Requirements</strong></a></p>  </div>  <div className="IndentLeft20">
<p><a href="#P173_12187">4.1 Responsibilities</a></p>
<p><a href="#P178_12865">4.2 Events to be analyzed</a></p>  </div>  <div className="IndentLeft30">
<p><a href="#P179_12890">4.2.1 Identifying events</a></p>
<p><a href="#P190_14207">4.2.2 Scope of events analyzed</a></p>
<p><a href="#P196_14844">4.2.3 Classification of events</a></p>  </div>  <div className="IndentLeft20">
<p><a href="#P203_15953">4.3 Acceptance criteria</a></p>  </div>  <div className="IndentLeft30">
<p><a href="#P204_15976">4.3.1 Normal operations</a></p>
<p><a href="#P208_16307">4.3.2 Anticipated operational occurrences and design basis accidents</a></p>
<p><a href="#P212_16692">4.3.3 Beyond design basis accidents</a></p>
<p><a href="#P217_17136">4.3.4 Application of safety requirements for AOOs and DBAs</a></p>  </div>  <div className="IndentLeft20">
<p><a href="#P227_18773">4.4 Deterministic safety analysis methods and assumptions</a></p>  </div>  <div className="IndentLeft30">
<p><a href="#P238_19485">4.4.1 Deterministic safety analysis method</a></p>
<p><a href="#P251_20798">4.4.2 Deterministic safety analysis assumptions</a></p>
<p><a href="#P266_22350">4.4.3 Computer codes</a></p>
<p><a href="#P268_22777">4.4.4 Conservatism in deterministic safety analysis</a></p>  </div>  <div className="IndentLeft20">
<p><a href="#P270_23194">4.5 Deterministic safety analysis documentation</a></p>
<p><a href="#P282_24300">4.6 Deterministic safety analysis review and update</a></p>  </div>  <div className="IndentLeft30">
<p><a href="#P283_24351">4.6.1 Review of deterministic safety analysis results</a></p>
<p><a href="#P290_25145">4.6.2 Update of deterministic safety analysis</a></p>  </div>  <div className="IndentLeft20">
<p><a href="#P295_25980">4.7 Quality of deterministic safety analysis</a></p>  </div>  <div className="IndentLeft10">
<p><a href="#P302_26654"><strong>Appendix&nbsp;A: Acceptance Criteria Examples</strong></a></p>
<p><a href="#P363_28109"><strong>Glossary</strong></a></p>
<p><a href="#P451_36920"><strong>Additional Information</strong></a></p>  </div>
<a name="1"></a>
<h2 className="reportHeading2"><a name="P114_4141"></a>1.0 Introduction</h2>
<a name="1.1"></a>
<h3 className="reportHeading3"><a name="P115_4157"></a>1.1 Purpose</h3>  <p>This regulatory document sets out the requirements of the Canadian Nuclear Safety Commission (CNSC) with respect to deterministic safety analysis for small reactors.</p>
<a name="1.2"></a>
<h3 className="reportHeading3"><a name="P117_4334"></a>1.2 Scope</h3>  <p>A small reactor is defined as any reactor facility that is used for research, isotope production, steam generation, small-scale electricity production or any other application that is not designed for large-scale commercial power production. Reactors with a thermal power less than 200 MW are normally considered to be small reactors.</p>  <p>Technical criteria related to deterministic safety analysis and the conducting of deterministic safety analysis include the selection of events to be analyzed, acceptance criteria, deterministic safety analysis methods and assumptions, documentation, review and update, and quality control. </p>  <p>The overall safety assessment of the reactor facility design includes hazards analysis, deterministic safety analysis and probabilistic safety analysis techniques. This document focuses on the deterministic safety analysis used in the assessment of event consequences.</p>
<a name="1.3"></a>
<h3 className="reportHeading3"><a name="P121_5236"></a>1.3 Relevant regulations</h3>  <p>The relevance of the <i>Nuclear Safety and Control Act</i> (NSCA) and the regulations made under the NSCA to this regulatory document are as follows: </p>  <ul>
<li>Paragraph 3(1)(<i>i</i>) of the <i>General Nuclear Safety and Control Regulations</i> stipulates that an application for a licence shall contain, in addition to other information, &#8220;a description and the results of any test, analysis or calculation performed to substantiate the information included in the application&#8221;.</li>
<li>Paragraph 5(<i>f</i>) of the <i>Class I Nuclear Facilities Regulations</i> provides that an application for a licence to construct a Class I nuclear facility shall contain, in addition to other information, &#8220;a preliminary safety analysis report demonstrating the adequacy of the design of the nuclear facility&#8221;.</li>
<li>Paragraph 5(<i>i</i>) of the <i>Class I Nuclear Facilities Regulations</i> provides that an application for a licence to construct a Class I nuclear facility shall contain, in addition to other information, &#8220;the effects on the environment and the health and safety of persons that may result from the construction, operation and decommissioning of the nuclear facility, and the measures that will be taken to prevent or mitigate those effects&#8221;.</li>
<li>Paragraph 6(<i>c</i>) of the <i>Class I Nuclear Facilities Regulations</i> provides that an application for a licence to operate a Class I nuclear facility shall contain, in addition to other requirements, information on &#8220;a final safety analysis report demonstrating the adequacy of the design of the nuclear facility&#8221;.</li>
<li>Paragraph 6(<i>h</i>) of the <i>Class I Nuclear Facilities Regulations</i> stipulates that an application for a licence to operate a Class I nuclear facility shall contain, in addition to other requirements, information on &#8220;the effects on the environment and the health and safety of persons that may result from the operation and decommissioning of the nuclear facility, and the measures that will be taken to prevent or mitigate those effects&#8221;. </li>
<li>Paragraph 7(<i>f</i>) of the <i>Class I Nuclear Facilities Regulations</i> provides that an application for a licence to decommission a Class I nuclear facility shall contain, in addition to other requirements, information on &#8220;the effects on the environment and the health and safety of persons that may result from the decommissioning, and the measures that will be taken to prevent or mitigate those effects&#8221;.</li>
<li>Subsection 13(1) of the <i>Radiation Protection Regulations</i> prescribes the effective dose limits to nuclear energy workers and persons who are not nuclear energy workers, including members of the public.</li>  </ul>
<a name="1.4"></a>
<h3 className="reportHeading3"><a name="P130_7822"></a>1.4 National and international standards</h3>  <p>This regulatory document is consistent with the philosophy and technical content of international codes and standards. In particular, this regulatory document is based in part on the following national and international publications:</p>  <ul>
<li>Canadian Standards Association, <i>Quality Assurance of Analytical, Scientific and Design Computer Programs for Nuclear Power Plants</i>, CSA-N286.7-99, 1999</li>
<li>International Atomic Energy Agency,<i> Safety Analysis for Research Reactors</i>, IAEA Safety Reports Series No. 55, 2008</li>
<li>International Atomic Energy Agency, <i>Safety of Research Reactors</i>, IAEA Safety Standards Series No. NS-R-4, 2005</li>  </ul>
<a name="2"></a>
<h2 className="reportHeading2"><a name="P135_8481"></a>2.0 Graded Approach</h2>  <p>The graded approach is a method in which the stringency of the design measures and analyses applied are commensurate with the level of risk posed by the reactor facility.</p>  <p>The breadth and depth of analyses and magnitude of accepted uncertainties in the safety analyses shall demonstrate that the safety analysis objectives and the requirements in this document are met.</p>  <p>Licensees or applicants may use the graded approach described in International Atomic Energy Agency (IAEA) NS-R-4, <i>Safety of Research Reactors.</i></p>
<a name="2.1"></a>
<h3 className="reportHeading3"><a name="P139_9010"></a>2.1 Application of graded approach to safety analysis</h3>  <p>The scope, content and detail of the safety analysis for small reactors may not be the same as for power reactors. Different accident scenarios may apply and some scenarios may need only a limited safety analysis. Application of the graded approach to safety analysis shall be commensurate with the level of risk of the reactor facility. </p>  <p>When a graded approach is applied,&nbsp;factors to be considered include:</p>  <ul>
<li>reactor power</li>
<li>reactor safety characteristics</li>
<li>amount and enrichment of fissile and fissionable material</li>
<li>fuel design</li>
<li>type and mass of moderator, reflector and coolant</li>
<li>utilization of the reactor </li>
<li>presence of high-energy sources and other radioactive and hazardous sources</li>
<li>safety design features</li>
<li>source term </li>
<li>siting</li>
<li>proximity to populated areas</li>  </ul>
<a name="3"></a>
<h2 className="reportHeading2"><a name="P153_9844"></a>3.0 Safety Analysis</h2>  <p>The overall assessment of the reactor facility design includes hazards analysis, deterministic safety analysis and probabilistic safety analysis techniques. </p>  <p>These analyses identify all radiation sources in order to evaluate potential radiation doses to workers at the reactor facility and to the public, and to evaluate potential effects on the environment.</p>  <p>These analyses confirm that the design is capable of meeting the safety requirements, dose acceptance criteria and safety goals. These analyses also contribute to demonstrating that the reactor facility provides defence-in-depth.</p>  <p>The safety analyses shall:</p>  <ul>
<li>confirm the assumptions and intent of the design for normal operation of the reactor facility to establish the operational limits and conditions (OLCs) of the reactor facility, and to assist in establishing and validating accident management procedures and guidelines </li>
<li>as described in section 4.2, characterize the events that are appropriate for the site and reactor facility design</li>
<li>analyze and evaluate event sequences that result from failure of structures, systems and components (SSCs) </li>
<li>compare the results of the safety analyses with design limits and dose acceptance criteria </li>
<li>establish and confirm the design basis</li>
<li>demonstrate that anticipated operational occurrences (AOOs), design basis accidents (DBAs) and, to the extent practicable, beyond design basis accidents (BDBAs) can be managed by automatic response of safety systems in combination with operating procedures</li>  </ul>
<a name="3.1"></a>
<h3 className="reportHeading3"><a name="P164_11373"></a>3.1 Deterministic safety analysis objectives</h3>  <p>Objectives of the deterministic safety analysis shall: </p>  <ul>
<li>confirm that the design of a reactor facility meets design and safety requirements</li>
<li>derive or confirm OLCs that are consistent with the design and safety requirements for the reactor facility</li>
<li>assist in establishing and validating accident management procedures and guidelines</li>
<li>assist in demonstrating that safety goals, which are established to limit the safety risks posed by the reactor facility, are met</li>
<li>confirm that modifications to the design or operation of the reactor facility have no significant adverse impact on safety</li>  </ul>
<a name="4"></a>
<h2 className="reportHeading2"><a name="P171_12015"></a>4.0 Deterministic Safety Analysis Requirements</h2>  <p>The following sections outline the detailed requirements of the deterministic safety analysis that must be submitted to CNSC.</p>
<a name="4.1"></a>
<h3 className="reportHeading3"><a name="P173_12187"></a>4.1 Responsibilities </h3>  <p>The licensee or applicant is responsible for ensuring that the deterministic safety analysis meets the following requirements. The licensee or applicant shall:</p>  <ul>
<li>maintain adequate capability to either perform deterministic safety analysis or competently oversee deterministic safety analysis by an external resource</li>
<li>ensure that a formal process is followed to assess and update a deterministic safety analysis, which takes into account the impact of design modifications, operational experience, research findings and known safety issues</li>
<li>ensure that a documented quality assurance (QA) process is applied in conducting a deterministic safety analysis</li>  </ul>
<a name="4.2"></a>
<h3 className="reportHeading3"><a name="P178_12865"></a>4.2 Events to be analyzed</h3>
<a name="4.2.1"></a>
<h4 className="reportHeading4"><a name="P179_12890"></a>4.2.1 Identifying events</h4>  <p>The licensee or applicant shall use a systematic process to identify postulated initiating events (including criticality events), event sequences and event combinations (&#8220;events&#8221; hereafter in this document) that can potentially challenge the safety functions of the reactor facility. This process must consider regulatory requirements and guidance, past licensing precedents, operational experience, engineering judgment, results of deterministic and probabilistic safety assessments (PSA), and systematic review of the design.</p>  <p>The identification of events shall account for:</p>  <ul>
<li>all operating configurations, such as start-up, at-power operation, shutdown, maintenance, testing, surveillance, and refuelling</li>
<li>configurations and uses of the reactor facility</li>
<li>interactions between the reactor and any experimental devices, including:
<ol className="lower-alpha">
<li>administrative procedures </li>
<li> controls</li>
<li> provisions related to the experimental devices</li>
</ol>
</li>  </ul>  <p>The list of identified events shall be reviewed for completeness during the design and deterministic safety analysis process. After construction of a new reactor facility, the list of events shall be verified for the &#8220;as-built&#8221; state. Subsequent design changes or experiment designs shall also be reviewed and the list of identified events modified as necessary.</p>
<a name="4.2.2"></a>
<h4 className="reportHeading4"><a name="P190_14207"></a>4.2.2 Scope of events analyzed</h4>  <p>The list of events to be developed for the deterministic safety analysis shall include:</p>  <ul>
<li>SSCs failures or malfunctions</li>
<li>operator errors</li>
<li>common-cause failures initiated by internal and external events</li>  </ul>  <p>A cut-off frequency shall be selected such that the events with a frequency of occurrence less than the cut-off limit provide only a negligible contribution to the risk. Events of lower frequency than the cut-off limit are not considered to be credible. Elimination of such events from the deterministic safety analysis scope shall be justified and the reasons for eliminating them must be documented.</p>
<a name="4.2.3"></a>
<h4 className="reportHeading4"><a name="P196_14844"></a>4.2.3 Classification of events </h4>  <p>The identified events shall be classified, based on the results of probabilistic studies and engineering judgment, into the following three classes of events:</p>  <ul>
<li><strong>Anticipated operational occurrences (AOOs)</strong>, which include all events with frequencies of occurrence equal to or greater than 10<sup>-2</sup> per reactor year.</li>
<li><strong>Design basis accidents (DBAs)</strong>, which include all events with frequencies of occurrence equal to or greater than 10<sup>-5</sup> per reactor year but less than 10<sup>-2</sup> per reactor year. This class of events also includes any events that are used as a design basis for a safety system, regardless of whether the estimated frequencies are less than 10<sup>-5</sup> per reactor year.</li>
<li><strong>Beyond design basis accidents (BDBAs)</strong>, which include events with frequencies of occurrence less than 10<sup>-5</sup> per reactor year.</li>  </ul>  <p>Events with a frequency near the threshold between two classes of events, or with substantial uncertainty over the predicted event frequency, should be classified into a higher frequency class.</p>  <p>Credible common cause events shall also be classified within the AOO, DBA and BDBA classes.</p>
<a name="4.3"></a>
<h3 className="reportHeading3"><a name="P203_15953"></a>4.3 Acceptance criteria</h3>
<a name="4.3.1"></a>
<h4 className="reportHeading4"><a name="P204_15976"></a>4.3.1 Normal operations</h4>  <p>Safety analysis for normal operation of the reactor facility shall demonstrate that: </p>  <ul>
<li>radiological doses to workers and members of the public are within the limits prescribed in the <i>Radiation Protection Regulations</i></li>
<li>releases of radioactive materials into the environment are within the regulatory limits</li>  </ul>
<a name="4.3.2"></a>
<h4 className="reportHeading4"><a name="P208_16307"></a>4.3.2 Anticipated operational occurrences and design basis accidents</h4>  <p>Safety analysis for AOOs and DBAs shall demonstrate that:</p>  <ul>
<li>radiological doses to members of the public do not exceed the dose acceptance criteria as established in RD-367, <i>Design of Small Reactors</i></li>
<li>the applicable safety requirements established in accordance with section 4.3.4 are met, unless otherwise justified</li>  </ul>
<a name="4.3.3"></a>
<h4 className="reportHeading4"><a name="P212_16692"></a>4.3.3 Beyond design basis accidents</h4>  <p>Safety analysis for BDBAs shall demonstrate that:</p>  <ul>
<li>the reactor facility as designed is capable of meeting the safety goals as established
in RD-367</li>
<li>the accident management program is capable of providing mitigation for BDBAs, to the extent practicable</li>  </ul>  <p>Note that deterministic safety analysis supports probabilistic safety analysis in evaluating the reactor facility against the safety goals.</p>
<a name="4.3.4"></a>
<h4 className="reportHeading4"><a name="P217_17136"></a>4.3.4 Application of safety requirements for AOOs and DBAs</h4>  <p>Qualitative acceptance criteria shall be established for each AOO and DBA to confirm the effectiveness of reactor facility systems in maintaining the integrity of physical barriers against releases of radioactive material. These qualitative acceptance criteria shall:</p>  <ul>
<li>avoid the potential for consequential failures resulting from an initiating event </li>
<li>maintain the structures, systems and components in a configuration that permits the effective removal of residual heat</li>
<li>prevent development of complex configurations or physical phenomena that cannot be modelled with high confidence </li>
<li>be consistent with the design requirements for reactor facility SSCs </li>  </ul>  <p>To demonstrate that the safety requirements are met, acceptance criteria for AOOs and DBAs shall be established by the licensee or applicant prior to performing the deterministic safety analysis. Such acceptance criteria shall ensure that the safety functions are met, justified and supported by appropriate evidence. </p>  <p>Examples of acceptance criteria for AOOs and DBAs are provided in Appendix&nbsp;A, Acceptance Criteria Examples. Licence conditions may contain additional requirements to reflect events resulting from unique reactor facility design or experiments.</p>  <p>The results of a deterministic safety analysis shall meet acceptance criteria with margins sufficient to accommodate uncertainties associated with the deterministic safety analysis.</p>  <p>The deterministic safety analysis shall include the event that poses the most challenges in meeting the acceptance criteria (i.e., the limiting event in an event category).</p>
<a name="4.4"></a>
<h3 className="reportHeading3"><a name="P227_18773"></a>4.4 Deterministic safety analysis methods and assumptions</h3>  <p>The deterministic safety analysis must demonstrate that acceptance criteria will be met. To achieve this, the deterministic safety analysis shall:</p>  <ul>
<li>be performed in accordance with a QA process that meets the requirements specified in section 4.7</li>
<li>be performed by qualified analysts</li>
<li>apply a systematic deterministic safety analysis method</li>
<li>use verified and validated models and computer codes</li>
<li>use justified assumptions</li>
<li>account for uncertainties in the deterministic safety analysis models and inputs</li>
<li>build in a degree of conservatism that reflects the level of knowledge related to simulating the event</li>
<li>be subjected to a review process</li>  </ul>
<a name="4.4.1"></a>
<h4 className="reportHeading4"><a name="P238_19485"></a>4.4.1 Deterministic safety analysis method </h4>  <p>The deterministic safety analysis method shall include: </p>  <ul>
<li>identifying the scenarios to be analyzed to attain the deterministic safety analysis objectives, including sensitivity cases</li>
<li>identifying the applicable acceptance criteria and limits</li>
<li>collecting the information that describes the analyzed reactor facility and its permissible operating modes</li>
<li>defining the assumptions about the operating state, the availability and performance of reactor facility systems, and the actions of operators</li>
<li>identifying the important phenomena of the analyzed event</li>
<li>selecting the computational methods or computer codes, models and correlations that have been validated for the intended applications</li>
<li>accounting for the uncertainties associated with system performance, operational measurements, and reactor facility and accident modelling</li>
<li>preparing the input data for the deterministic safety analysis</li>
<li>conducting the calculations, including sensitivity cases, to predict the event transient, starting from the initial steady state up to the pre-defined end state</li>
<li>verifying the calculation results for physical and logical consistency</li>
<li>processing and documenting results of the calculations to demonstrate conformance with the acceptance criteria and limits</li>  </ul>
<a name="4.4.2"></a>
<h4 className="reportHeading4"><a name="P251_20798"></a>4.4.2 Deterministic safety analysis assumptions</h4>  <p>Deterministic safety analysis shall be based on complete and accurate reactor facility design and, where available, operational information. Assumptions made to simplify the deterministic safety analysis, as well as assumptions concerning the availability and performance of the systems and operators, shall be identified and justified.</p>  <p>The deterministic safety analysis for AOO and DBA shall:</p>  <ul>
<li>incorporate sufficient margins in the deterministic safety analysis assumptions to offset uncertainties associated with system performance, operational measurements, and reactor facility and accident modelling</li>
<li>apply the single-failure criterion to all safety systems and their support systems</li>
<li>use minimum allowable performance (as established in the OLCs) for safety systems and their support systems</li>
<li>account for consequential failures that may occur as a result of the initiating event</li>
<li>credit the actions of systems only where the systems are environmentally qualified for the accident conditions or when their actions may have a detrimental effect on the consequences of the analyzed accident</li>
<li>consider the effects of aging on SSCs</li>
<li>account for the possibility of equipment being taken out of service for maintenance</li>
<li>credit operator actions only when there are:
<ol className="lower-alpha">
<li> unambiguous indications of the need for such actions</li>
<li> adequate procedures and operator training for such actions</li>
<li> sufficient time to perform the credited actions</li>
<li> environmental conditions that do not prohibit such actions</li>
</ol>
</li>  </ul>
<a name="4.4.3"></a>
<h4 className="reportHeading4"><a name="P266_22350"></a>4.4.3 Computer codes</h4>  <p>Computer codes used in the deterministic safety analysis shall be developed, validated and used in accordance with a quality assurance program that meets or exceeds the Canadian Standards Association standard CSA-N286.7-99. The CNSC guidance document G-149, <i>Computer Programs Used in Design and Safety Analyses of Nuclear Power Plants and Research Reactors</i>, provides guidance on computer code expectations.</p>
<a name="4.4.4"></a>
<h4 className="reportHeading4"><a name="P268_22777"></a>4.4.4 Conservatism in deterministic safety analysis</h4>  <p>The deterministic safety analysis shall build in a degree of conservatism to offset any uncertainties associated with initial and boundary conditions, modelling of reactor performance in the analyzed event, and the code simulation biases and uncertainties. This conservatism shall depend on event class and shall reflect the deterministic safety analysis objectives.</p>
<a name="4.5"></a>
<h3 className="reportHeading3"><a name="P270_23194"></a>4.5 Deterministic safety analysis documentation</h3>  <p>The deterministic safety analysis documentation shall be comprehensive and sufficiently detailed to allow for an independent verification. The documentation shall include:</p>  <ul>
<li>the objective of the safety analysis </li>
<li>the technical basis for&nbsp;each event, and key phenomena and processes</li>
<li>a description of the analyzed event</li>
<li>a description of safety concerns, challenges to safety, and applicable safety criteria, requirements and numerical limits</li>
<li>identification of key phenomena taking place during the analyzed event for each of the identified safety concerns</li>
<li>demonstration of the code applicability, including evidence that codes have been validated against prototypical experiments and assessment of the code accuracy</li>
<li>demonstration that the analysis assumptions are consistent with the reactor facility operating limits</li>
<li>the results of sensitivity analysis and uncertainty analysis</li>
<li>the data and information to be provided to other programs at the reactor facility</li>
<li> a summary of significant results and conclusions regarding acceptability</li>  </ul>
<a name="4.6"></a>
<h3 className="reportHeading3"><a name="P282_24300"></a>4.6 Deterministic safety analysis review and update</h3>
<a name="4.6.1"></a>
<h4 className="reportHeading4"><a name="P283_24351"></a>4.6.1 Review of deterministic safety analysis results</h4>  <p>The licensee or applicant shall systematically review the deterministic safety analysis results to ensure that they are correct and meet the initial objective of the deterministic safety analysis. The results shall be assessed against the relevant CNSC requirements, applicable experimental data, expert judgment, comparison with similar calculations and sensitivity analyses.</p>  <p>The licensee or applicant shall review the deterministic safety analysis results using one or more of the following techniques, depending on the objectives of the deterministic safety analysis:</p>  <ul>
<li>supervisory review</li>
<li>peer review</li>
<li>independent review by qualified individuals</li>
<li>independent calculations using alternate tools and methods to the extent practicable</li>  </ul>
<a name="4.6.2"></a>
<h4 className="reportHeading4"><a name="P290_25145"></a>4.6.2 Update of deterministic safety analysis</h4>  <p>The deterministic safety analysis shall be periodically reviewed and updated to account for changes in the reactor facility configuration, conditions (including those due to aging), operating parameters and procedures, new research findings, and advances in knowledge. </p>  <p>In addition to periodic updates, the deterministic safety analysis shall also be updated when there are major design changes, refurbishments or both; and following the discovery of information that may reveal a hazard that is different in nature, greater in probability or greater in magnitude than was previously presented to the CNSC in the licensing documents. Such information includes:</p>  <ul>
<li>changes due to new research findings</li>
<li>the occurrence of an event that was not considered in the deterministic safety analysis</li>  </ul>
<a name="4.7"></a>
<h3 className="reportHeading3"><a name="P295_25980"></a>4.7 Quality of deterministic safety analysis</h3>  <p>Deterministic safety analysis shall be subjected to a comprehensive QA program that is applied to all activities affecting the quality of the results. The QA program shall identify the quality assurance standards to be applied and shall include documented procedures and instructions for the complete deterministic safety analysis process, including, but not limited to:</p>  <ul>
<li>collection and verification of reactor facility data</li>
<li>verification of the computer input data</li>
<li>validation of codes used in deterministic safety analysis</li>
<li>assessment of results of simulations</li>
<li>documentation of deterministic safety analysis results</li>  </ul>
<a name="a"></a>
<h2 className="reportHeading2"><a name="P302_26654"></a>Appendix&nbsp;A: Acceptance Criteria Examples</h2>  <p>Table A.1 provides examples of acceptance criteria for AOOs. Table A.2 provides examples of acceptance criteria for DBAs. Justified exceptions to the criteria shall be considered provided that the equivalent level of safety is assured and demonstrated. </p>  <table border="1" summary="Table A.1: Acceptance Criteria for AOO">
<caption>
Table A.1: Acceptance Criteria for AOO
</caption>
<tr>
<td valign="top" width="36"><p><strong>#</strong></p></td>
<td valign="top" width="276"><p align="center"><strong>Acceptance Criteria</strong></p></td>
<td valign="top" width="312"><p align="center"><strong>Notes</strong></p></td>
</tr>
<tr>
<td valign="top" width="36"><p>1</p></td>
<td valign="top" width="276"><p>No reliance on safety systems to the extent practicable.</p></td>
<td valign="top" width="312">&#160; </td>
</tr>
<tr>
<td valign="top" width="36"><p>2</p></td>
<td valign="top" width="276"><p>No consequential degradation of fuel condition.</p></td>
<td valign="top" width="312"><p>Degradation of fuel condition means that the fuel is no longer fit for continuous use after being subjected to the predicted conditions.</p></td>
</tr>
<tr>
<td valign="top" width="36"><p>3</p></td>
<td valign="top" width="276"><p>No consequential degradation of SSCs.</p></td>
<td valign="top" width="312"><p>All SSCs remain fit for continued service.</p></td>
</tr>  </table>  <table border="1" summary="Table A.2: Acceptance Criteria for DBA">
<caption>
Table A.2: Acceptance Criteria for DBA
</caption>
<tr>
<td valign="top" width="36"><p><strong>#</strong></p></td>
<td valign="top" width="276"><p align="center"><strong>Acceptance Criteria</strong></p></td>
<td valign="top" width="312"><p align="center"><strong>Notes</strong></p></td>
</tr>
<tr>
<td valign="top" width="36"><p>1</p></td>
<td valign="top" width="276"><p>No reliance on control systems.</p></td>
<td valign="top" width="312"><p>Where control systems make the event more severe, this should be included in the analysis.</p></td>
</tr>
<tr>
<td valign="top" width="36"><p>2</p></td>
<td valign="top" width="276"><p>Fuel configuration allows removal of residual heat.</p></td>
<td valign="top" width="312">&#160; </td>
</tr>
<tr>
<td valign="top" width="36"><p>3</p></td>
<td valign="top" width="276"><p>No further fuel damage after long-term cooling system re-establishes adequate cooling.</p></td>
<td valign="top" width="312">&#160; </td>
</tr>
<tr>
<td valign="top" width="36"><p>4</p></td>
<td valign="top" width="276"><p>No fuel break-up due to rapid energy addition.</p></td>
<td valign="top" width="312">&#160; </td>
</tr>
<tr>
<td valign="top" width="36"><p>5</p></td>
<td valign="top" width="276"><p>No consequential failure of safety systems functions.</p></td>
<td valign="top" width="312">&#160; </td>
</tr>
<tr>
<td valign="top" width="36"><p>6</p></td>
<td valign="top" width="276"><p>No consequential loss of primary cooling system integrity.</p></td>
<td valign="top" width="312">&#160; </td>
</tr>
<tr>
<td valign="top" width="36"><p>7</p></td>
<td valign="top" width="276"><p>Containment and/or confinement remains within design pressure range.</p></td>
<td valign="top" width="312">&#160; </td>
</tr>
<tr>
<td valign="top" width="36"><p>8</p></td>
<td valign="top" width="276"><p>No consequential hydrogen explosion or deflagration in any system in the reactor facility.</p></td>
<td valign="top" width="312">&#160; </td>
</tr>
<tr>
<td valign="top" width="36"><p>9</p></td>
<td valign="top" width="276"><p>Reactor remains subcritical after shutdown.</p></td>
<td valign="top" width="312">&#160; </td>
</tr>
<tr>
<td valign="top" width="36"><p>10</p></td>
<td valign="top" width="276"><p>Fuel outside of the reactor core remains subcritical.</p></td>
<td valign="top" width="312">&#160; </td>
</tr>
<tr>
<td valign="top" width="36"><p>11</p></td>
<td valign="top" width="276"><p>Spent fuel cooling is maintained.</p></td>
<td valign="top" width="312">&#160; </td>
</tr>  </table>
<a name="glossary"></a>
<h2 className="reportHeading2"><a name="P363_28109"></a>Glossary</h2>  <dl className="margins-removed">
<dt>acceptance criteria</dt>
<dd>Specified bounds on the value of a functional or condition indicator used to assess the ability of a structure, system or component to meet its design and safety requirements.</dd>
<dt>accident</dt>
<dd>Any unintended event&#8212;including operating errors, equipment failures or other mishaps&#8212;the consequences or potential consequences of which are not negligible from the point of view of protection or safety.</dd>
<dt>anticipated operational occurrence </dt>
<dd>An operational process deviating from normal operation which is expected to occur at least once during the operating lifetime of a reactor facility but which, in view of the appropriate design provisions, does not cause any significant damage to items important to safety or lead to accident conditions.</dd>
<dt>best estimate </dt>
<dd>Unbiased estimate obtained by the use of a mathematical model, calculation method or data to realistically predict behaviour and important parameters. </dd>
<dt>beyond design basis accident </dt>
<dd>Accident conditions less frequent and more severe than a design basis accident. A beyond design basis accident may or may not involve core degradation.</dd>
<dt>Class I nuclear facility</dt>
<dd>A Class I nuclear facility refers to a Class IA and a Class IB nuclear facility as described in the <i>Class I Nuclear Facilities Regulations</i>.</dd>
<dt>commissioning</dt>
<dd>A process of activities intended to demonstrate that installed structures, systems and components perform in accordance with their specifications and design intent before they are put into service. </dd>
<dt>common-cause failure </dt>
<dd>A concurrent failure of two or more structures, systems or components due to a single specific event or cause, such as natural phenomena (earthquakes, tornadoes, floods, etc.), design deficiency, manufacturing flaws, operation and maintenance errors, human-induced destructive events and others. </dd>
<dt>confinement</dt>
<dd>A continuous boundary without openings or penetrations that prevents the release of radioactive materials out of the enclosed space.</dd>
<dt>conservatism </dt>
<dd>Use of assumptions, based on experience or indirect information, about a phenomena or behaviour of a system being at or near the limit of expectation, which increases safety margins or makes predictions regarding consequences more severe than if best-estimate assumptions had been made. </dd>
<dt>containment</dt>
<dd>A method or physical structure designed to prevent the release of radioactive substances.</dd>
<dt>crediting</dt>
<dd>Assuming the correct operation of a structure, system or component or correct operator action, as part of an analysis.</dd>
<dt>design basis</dt>
<dd>The range of conditions and events taken into account in the design of structures, systems and components of a nuclear facility, according to established criteria such that the facility can withstand them without exceeding authorized limits for the planned operation of safety systems. The design basis includes the design description, design manuals, design drawings and the safety analysis report.</dd>
<dt>design basis accident </dt>
<dd>Accident conditions for which a reactor facility is designed according to established design criteria, and for which damage to the fuel and the release of radioactive material are kept within regulated limits.</dd>
<dt>deterministic safety analysis</dt>
<dd>An analysis of reactor facility responses to an event performed using predetermined rules and assumptions (e.g., those concerning the initial facility operational state, availability and performance of the facility systems and operator actions). Deterministic safety analysis can use either conservative or best-estimate methods.</dd>
<dt>dose acceptance criteria</dt>
<dd>Bounds for radiation dose to protect the public from harm due to the release of radioactive material in anticipated operational occurrences and design basis accidents. </dd>
<dt>event category</dt>
<dd>A group of events characterized by the same or similar cause and similarity in the governing phenomena.</dd>
<dt>fissile material</dt>
<dd>Material that is capable of sustaining a chain reaction of nuclear fission.</dd>
<dt>fissionable material</dt>
<dd>Any material that can undergo nuclear fission.</dd>
<dt>graded approach</dt>
<dd>A method in which the stringency of the design measures and analyses applied is commensurate with the level of risk posed by the reactor facility.</dd>
<dt>human factors </dt>
<dd>Factors that influence human performance as they relate to the safety of the reactor facility, including activities during design, construction, commissioning, operation, maintenance and decommissioning phases.</dd>
<dt>normal operation</dt>
<dd>Operation of a reactor facility within specified operational limits and conditions, including starting up, power operation, shutting down, maintenance, testing and refuelling.</dd>
<dt>operational limits and conditions </dt>
<dd>A set of rules setting out parameter limits or conditions that ensures the functional capability and the performance levels of equipment and personnel for safe operation of a reactor facility. This set of limits and conditions is monitored by or on behalf of the operator and can be controlled by the operator.</dd>
<dt>postulated initiating event</dt>
<dd>An event identified in the design as leading to either an anticipated operational occurrence or accident condition. This means that a postulated initiating event is not necessarily an accident itself; rather it is the event that initiates a sequence that may lead to an operational occurrence, a design basis accident or a beyond design basis accident, depending on the additional failures that occur.</dd>
<dt>probabilistic safety assessment</dt>
<dd>A comprehensive and integrated assessment of the safety of the reactor facility. The safety assessment considers the probability, progression and consequences of equipment failures or transient conditions to derive numerical estimates that provide a consistent measure of the safety of the reactor facility, as follows:</dd>
<ul>
<li>a Level 1 PSA identifies and quantifies the sequences of events that may lead to the loss of core structural integrity and massive fuel failures</li>
<li>a Level 2 PSA starts from the Level 1 results and analyses the containment behaviour, evaluates the radionuclides released from the failed fuel and quantifies the releases to the environment</li>
<li>a Level 3 PSA starts from the Level 2 results and analyses the distribution of radionuclides in the environment and evaluates the resulting effect on public health</li>
</ul>
<dt>reactor facility</dt>
<dd>Any fission reactor as described in the <i>Class I Nuclear Facilities Regulations</i>, including structures, systems and components:</dd>
<ul>
<li>that are necessary for shutting down the reactor ensuring that it can be kept in a safe shutdown state</li>
<li>that may contain radioactive material and which cannot be reliably isolated from the reactor</li>
<li>whose failure can lead to a limiting accident for the reactor</li>
<li>that are tightly integrated into the operation of the nuclear facility</li>
<li>that are needed to maintain security and safeguards</li>
</ul>
<dt>safety goal</dt>
<dd>Objective to protect reactor facility staff, the public and the environment from harm by establishing and maintaining effective defences against the release of the radiological hazards.</dd>
<dt>safety system </dt>
<dd>A system provided to ensure the safe shutdown of the reactor or the residual heat removal from the core, or to limit the consequences of anticipated operational occurrences and design basis accidents. </dd>
<dt>sensitivity analysis</dt>
<dd>A quantitative examination of how the behaviour of a system varies with change, usually in the values of the governing parameters.</dd>
<dt>single failure </dt>
<dd>A failure that results in the loss of capability of a component to perform its intended function(s) and any consequential failure(s) that result from it.</dd>
<dt>single-failure criterion</dt>
<dd>The criterion used to determine whether a system is capable of performing its function in the presence of a single failure.</dd>
<dt>small reactor</dt>
<dd>A reactor facility with a power level less than approximately 200 megawatts thermal (MWt) that is used for research, isotope production, steam generation, electricity production or other applications. </dd>
<dt>source term</dt>
<dd>The amount and isotopic composition of material released (or postulated to be released) from a facility.</dd>
<dt>structures, systems and components </dt>
<dd>A general term encompassing all of the elements (items) of a facility or activity which contribute to protection and safety, except human factors. </dd>
<dd>Structures are the passive elements: buildings, vessels, shielding, etc. A system comprises several components, assembled in such a way as to perform a specific (active) function. A component is a discrete element of a system. Examples are wires, transistors, integrated circuits, motors, relays, solenoids, pipes, fittings, pumps, tanks and valves, etc.</dd>
<dt>systematic review</dt>
<dd>A review in which specified and appropriate methods are used to identify, appraise and summarize studies addressing a defined question.</dd>
<dt>uncertainty analysis</dt>
<dd>The process of identifying and characterizing the sources of uncertainty in the safety analysis, evaluating their impact on the analysis results, and developing, to the extent practical, a quantitative measure of this impact.</dd>  </dl>
<a name="additional"></a>
<h2 className="reportHeading2"><a name="P451_36920"></a>Additional Information</h2>  <p>The following documents contain additional information that may be of interest to persons involved in deterministic safety analysis for small reactors:</p>  <ul>
<li>Canadian Standards Association,<i> Quality Assurance of Analytical, Scientific and Design Computer Programs for Nuclear Power Plants</i>, CSA-N286.7-99, 2003.</li>
<li>International Atomic Energy Agency, <i>Safety Analysis for Research Reactors</i>, IAEA Safety Report Series No. 55, 2008.</li>
<li>International Atomic Energy Agency, <i>Safety of Research Reactors</i>, IAEA Safety Standards Series No. NS-R-4, 2005.</li>
<li>RD-310, <i>Safety Analysis for Nuclear Power Plants</i>, 2008.</li>
<li>RD-367, <i>Design of Small Reactors</i> (draft under development).</li>  </ul>

                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }