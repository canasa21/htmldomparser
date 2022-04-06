import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "en",
                pageTitle: "Archived Web Page - RD&ndash;367: Design of Small Reactors", 
                dateModified: "2010-11-17",
                langToggleUrl: "/fra/acts-and-regulations/consultation/comment/rd-367-1"
        
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
<h2 className="reportHeading2">Preface</h2>  <p>This regulatory document sets out the requirements of the Canadian Nuclear Safety Commission (CNSC) concerning the design of new small reactors. It establishes a set of design requirements that aligns with accepted international codes and standards. </p>  <p>A small reactor is defined as a reactor facility with a power level less than approximately 200 megawatts thermal (MWt) that is used for research, isotope production, steam generation, electricity production or other applications. </p>  <p>The graded approach may be used for small reactors, as described in the International Atomic Energy Agency (IAEA) Safety Standards Series No. NS-R-4, <i>Safety of Research Reactors</i>. Designs using the graded approach shall demonstrate they meet the safety objectives and the requirements set out in this regulatory document.</p>  <p>The scope of RD-367, <i>Design of Small Reactors</i>, goes beyond IAEA NS-R-4 to address the interfaces between reactor design and topics such as environmental protection, radiation protection, aging, human factors, security, safeguards, transportation, and accident and emergency response planning.</p>  <p>Nothing contained in this document is to be construed as relieving any licensee from pertinent requirements. It is the licensee&#8217;s responsibility to identify and comply with all applicable regulations and licence conditions.</p>
<a name="#RDsection[2]#"></a>
<h2 className="reportHeading2">Table of Contents</h2>  <div className="IndentLeft10">
<p><a href="#P215_7054"><strong>1.0 Introduction</strong></a></p>  </div>  <div className="IndentLeft20">
<p><a href="#P216_7070">1.1 Purpose</a></p>
<p><a href="#P218_7230">1.2 Scope</a></p>
<p><a href="#P229_8733">1.3 Relevant regulations</a></p>  </div>  <div className="IndentLeft10">
<p><a href="#P245_13511"><strong>2.0 Graded Approach</strong></a></p>  </div>  <div className="IndentLeft20">
<p><a href="#P249_13932">2.1 Application of graded approach</a></p>  </div>  <div className="IndentLeft10">
<p><a href="#P262_14411"><strong>3.0 Safety Objectives and Concepts</strong></a></p>  </div>  <div className="IndentLeft20">
<p><a href="#P263_14445">3.1 General nuclear safety objective</a></p>  </div>  <div className="IndentLeft30">
<p><a href="#P266_15051">3.1.1 Radiation protection safety objective</a></p>
<p><a href="#P269_15564">3.1.2 Environmental protection safety objective</a></p>
<p><a href="#P272_16036">3.1.3 Technical safety objectives</a></p>  </div>  <div className="IndentLeft20">
<p><a href="#P275_16617">3.2 Safety concepts</a></p>  </div>  <div className="IndentLeft30">
<p><a href="#P276_16637">3.2.1 Defence in depth</a></p>
<p><a href="#P289_18047">3.2.2 Physical barriers</a></p>  </div>  <div className="IndentLeft10">
<p><strong><a href="#P301_18843">4.0 Safety Requirements</a></strong></p>  </div>  <div className="IndentLeft20">
<p><a href="#P303_18976">4.1 Application of defence in depth </a></p>
<p><a href="#P317_20420">4.2 Safety functions</a></p>
<p><a href="#P327_21261">4.3 Radiation protection and acceptance criteria</a></p>  </div>  <div className="IndentLeft30">
<p><a href="#P328_21309">4.3.1 Qualitative safety goals </a></p>
<p><a href="#P332_21838"> 4.3.2 Radiation protection for normal operation</a></p>
<p><a href="#P335_22340"> 4.3.3 Dose acceptance criteria for AOOs and DBAs</a></p>
<p><a href="#P340_22779">4.3.4 Quantitative safety goals for BDBAs </a></p>  </div>  <div className="IndentLeft20">
<p><a href="#P348_23435">4.4 Accident prevention, mitigation and management </a></p>
<p><a href="#P357_24494">4.5 Operational limits and conditions </a></p>  </div>  <div className="IndentLeft10">
<p><strong><a href="#P359_24775">5.0 Safety Analysis</a></strong></p>  </div>  <div className="IndentLeft20">
<p><a href="#P363_25432">5.1 Safety analysis objectives</a></p>
<p><a href="#P377_26707">5.2 Hazards analysis</a></p>
<p><a href="#P407_29285">5.3 Deterministic safety analysis </a></p>
<p><a href="#P416_30127">5.4 Probabilistic safety assessment </a></p>  </div>  <div className="IndentLeft10">
<p><strong><a href="#P425_31096">6.0 Safety Management During Design</a></strong></p>  </div>  <div className="IndentLeft20">
<p><a href="#P437_32140">6.1 Design authority </a></p>
<p><a href="#P449_33419">6.2 Design management </a></p>
<p><a href="#P462_34802">6.3 Design policies, processes and procedures </a></p>
<p><a href="#P481_35942"> 6.4 Proven engineering practices</a></p>
<p><a href="#P487_36943">6.5 Operational experience and safety research </a></p>
<p><a href="#P489_37150">6.6 Safety assessment </a></p>
<p><a href="#P494_37964">6.7 Design documentation </a></p>  </div>  <div className="IndentLeft10">
<p><strong><a href="#P496_38269">7.0 General Design Requirements </a></strong></a></p>  </div>  <div className="IndentLeft20">
<p><a href="#P497_38301">7.1 Radiation protection </a></p>  </div>  <div className="IndentLeft30">
<p><a href="#P507_38933">7.1.1 Design for radiation protection</a></p>
<p><a href="#P514_39773">7.1.2 Access and movement control </a></p>
<p><a href="#P517_40097">7.1.3 Monitoring </a></p>
<p><a href="#P528_41454">7.1.4 Sources </a></p>  </div>  <div className="IndentLeft20">
<p><a href="#P536_41955">7.2 Environmental protection and mitigation</a></p>  </div>  <div className="IndentLeft30">
<p><a href="#P537_41998">7.2.1 Design for environmental protection </a></p>
<p><a href="#P540_42444">7.2.2 Release of nuclear and hazardous substances </a></p>
<p><a href="#P554_43838">7.2.3 Monitoring environmental impact </a></p>  </div>  <div className="IndentLeft20">
<p><a href="#P557_44142"> 7.3 Classification of structures, systems and components</a></p>
<p><a href="#P561_44815">7.4 Reactor facility design envelope </a></p>
<p><a href="#P567_45476">7.5 Reactor states </a></p>  </div>  <div className="IndentLeft30">
<p><a href="#P570_45883">7.5.1 Normal operation </a></p>
<p><a href="#P580_47040"> 7.5.2 Anticipated operational occurrences</a></p>
<p><a href="#P584_47641">7.5.3 Design basis accidents </a></p>
<p><a href="#P588_48559"> 7.5.4 Beyond design basis accidents</a></p>
<p><a href="#P596_49824">7.5.5 Severe accidents </a></p>  </div>  <div className="IndentLeft20">
<p><a href="#P604_51186"> 7.6 Postulated initiating events</a></p>  </div>  <div className="IndentLeft30">
<p><a href="#P606_51420">7.6.1 Internal hazards </a></p>
<p><a href="#P611_52319">7.6.2 External hazards </a></p>
<p><a href="#P614_53042">7.6.3 Combinations of events </a></p>  </div>  <div className="IndentLeft20">
<p><a href="#P617_53457">7.7 Design rules and limits </a></p>
<p><a href="#P620_53913">7.8 Design for reliability </a></p>  </div>  <div className="IndentLeft30">
<p><a href="#P624_54421">7.8.1 Common-cause failures </a></p>
<p><a href="#P629_55029">7.8.2 Single failure criterion </a></p>
<p><a href="#P636_55916"> 7.8.3 Fail-safe design</a></p>
<p><a href="#P638_56033">7.8.4 Allowance for equipment outages </a></p>
<p><a href="#P641_56408"> 7.8.5 Shared systems</a></p>  </div>  <div className="IndentLeft20">
<p><a href="#P643_56658">7.9 Pressure-retaining structures, systems and components </a></p>
<p><a href="#P653_58318">7.10 Equipment environmental qualification </a></p>
<p><a href="#P657_58909">7.11 Instrumentation and control </a></p>  </div>  <div className="IndentLeft30">
<p><a href="#P659_59231">7.11.1 General considerations </a></p>
<p><a href="#P668_60796">7.11.2 Use of computer-based systems or equipment </a></p>
<p><a href="#P673_61874">7.11.3 Post-accident instrumentation </a></p>  </div>  <div className="IndentLeft20">
<p><a href="#P675_62076">7.12 Safety support systems </a></p>
<p><a href="#P687_63173">7.13 Guaranteed shutdown state </a></p>
<p><a href="#P691_63656">7.14 Provision for extended shutdown </a></p>
<p><a href="#P693_64127">7.15 Fire safety </a></p>  </div>  <div className="IndentLeft30">
<p><a href="#P696_64440">7.15.1 General provisions</a></p>
<p><a href="#P711_65555">7.15.2 Safety to life </a></p>
<p><a href="#P713_65775">7.15.3 Environmental protection and nuclear safety </a></p>  </div>  <div className="IndentLeft20">
<p><a href="#P715_66025">7.16 Seismic qualification </a></p>  </div>  <div className="IndentLeft30">
<p><a href="#P718_66285">7.16.1 Seismic design and classification </a></p>  </div>  <div className="IndentLeft20">
<p><a href="#P723_66997">7.17 In-service testing, maintenance, repair, inspection and monitoring </a></p>
<p><a href="#P725_67326">7.18 Civil structures </a></p>  </div>  <div className="IndentLeft30">
<p><a href="#P726_67348">7.18.1 Design </a></p>
<p><a href="#P734_68672">7.18.2 Surveillance </a></p>
<p><a href="#P738_69035">7.18.3 Lifting of large loads </a></p>  </div>  <div className="IndentLeft20">
<p><a href="#P740_69386">7.19 Commissioning </a></p>
<p><a href="#P743_69933">7.20 Aging and wear </a></p>
<p><a href="#P745_70041">7.21 Control of foreign material </a></p>
<p><a href="#P747_70211">7.22 Transport and packaging for fuel and radioactive waste </a></p>
<p><a href="#P749_70500">7.23 Escape routes and means of communication </a></p>
<p><a href="#P752_70841">7.24 Human factors </a></p>
<p><a href="#P767_73041">7.25 Robustness against malevolent acts</a></p>  </div>  <div className="IndentLeft30">
<p><a href="#P771_73773">7.25.1 Design principles </a></p>
<p><a href="#P775_74442">7.25.2 Design methods </a></p>
<p><a href="#P782_75693"> 7.25.3 Acceptance criteria</a></p>
<p><a href="#P786_76212">7.25.4 Prescribed information </a></p>  </div>  <div className="IndentLeft20">
<p><a href="#P788_76470">7.26 Safeguards </a></p>
<p><a href="#P791_76981">7.27 Provision for utilization and modification</a></p>
<p><a href="#P800_78757"> 7.28 Reactor facility layout</a></p>
<p><a href="#P803_79205">7.29 Decommissioning </a></p>  </div>  <div className="IndentLeft10">
<p><strong><a href="#P808_79845">8.0 System-specific Requirements </a></strong><a href="#P808_79845"></a></p>  </div>  <div className="IndentLeft20">
<p><a href="#P809_79878">8.1 Reactor core</a></p>  </div>  <div className="IndentLeft30">
<p><a href="#P838_83610">8.1.1 Experimental devices </a></p>
<p><a href="#P846_85099">8.1.2 Fuel elements and assemblies </a></p>
<p><a href="#P858_87619">8.1.3 Control system </a></p>  </div>  <div className="IndentLeft20">
<p><a href="#P865_89084">8.2 Reactor coolant system </a></p>  </div>  <div className="IndentLeft30">
<p><a href="#P871_90103">8.2.1 In-service coolant boundary inspection </a></p>
<p><a href="#P874_90501">8.2.2 Inventory </a></p>
<p><a href="#P876_90849">8.2.3 Cleanup </a></p>
<p><a href="#P879_91145">8.2.4 Removal of residual heat from reactor core </a></p>  </div>  <div className="IndentLeft20">
<p><a href="#P883_91751">8.3 Secondary side cooling system </a></p>
<p><a href="#P886_92054">8.4 Means of shutdown </a></p>  </div>  <div className="IndentLeft30">
<p><a href="#P899_94769">8.4.1 Reactor trip parameters </a></p>
<p><a href="#P908_96219"> 8.4.2 Reliability</a></p>
<p><a href="#P911_96572">8.4.3 Monitoring and operator action </a></p>  </div>  <div className="IndentLeft20">
<p><a href="#P915_96904">8.5 Emergency core cooling system </a></p>
<p><a href="#P934_99935"> 8.6 Means of confinement</a></p>  </div>  <div className="IndentLeft30">
<p><a href="#P936_100093">8.6.1 Confinement features </a></p>
<p><a href="#P961_104421">8.6.2 Containment </a></p>  </div>  <div className="IndentLeft20">
<p><a href="#P963_104661">8.7 Heat transfer to an ultimate heat sink </a></p>
<p><a href="#P967_105591">8.8 Emergency heat removal system</a></p>
<p><a href="#P975_106624">8.9 Normal and emergency power supply </a></p>
<p><a href="#P985_108242">8.10 Control facilities </a></p>  </div>  <div className="IndentLeft30">
<p><a href="#P987_108777">8.10.1 Main control room </a></p>  </div>  <div className="IndentLeft40">
<p><a href="#P997_110607">8.10.1.1 Safety parameter display system </a></p>  </div>  <div className="IndentLeft30">
<p><a href="#P1001_111152">8.10.2 Secondary control room </a></p>
<p><a href="#P1014_113271">8.10.3 Emergency support centre </a></p>
<p><a href="#P1020_114079">8.10.4 Equipment requirements for accident conditions </a></p>  </div>  <div className="IndentLeft20">
<p><a href="#P1027_115035">8.11 Waste treatment and control </a></p>  </div>  <div className="IndentLeft30">
<p><a href="#P1033_115863">8.11.1 Control of liquid releases to the environment </a></p>
<p><a href="#P1036_116370">8.11.2 Control of airborne material within the reactor facility </a></p>
<p><a href="#P1047_117640">8.11.3 Control of gaseous releases to the environment </a></p>  </div>  <div className="IndentLeft20">
<p><a href="#P1053_118151">8.12 Fuel handling and storage </a></p>  </div>  <div className="IndentLeft30">
<p><a href="#P1054_118182">8.12.1 Handling and storage of non-irradiated fuel </a></p>
<p><a href="#P1064_119097">8.12.2 Handling and storage of irradiated fuel </a></p>
<p><a href="#P1090_121214">8.12.3 Detection of failed fuel </a></p>  </div>  <div className="IndentLeft20">
<p><a href="#P1092_121411"> 8.13 Auxiliary systems</a></p>  </div>  <div className="IndentLeft10">
<p><strong><a href="#P1098_121763">Abbreviations</a></strong></p>
<p><strong><a href="#P1151_122498">Glossary</a></strong></p>
<p><strong><a href="#P1330_139936">Additional Information</a></strong></p>  </div>
<a name="1.0"></a>
<h2 className="reportHeading2"><a name="P215_7054" id="P215_7054"></a>1.0 Introduction</h2>
<a name="1.1"></a>
<h3 className="reportHeading3"><a name="P216_7070" id="P216_7070"></a>1.1 Purpose</h3>  <p>This regulatory document sets out the requirements of the Canadian Nuclear Safety Commission (CNSC) with respect to the design of new small reactors.</p>
<a name="1.2"></a>
<h3 className="reportHeading3"><a name="P218_7230" id="P218_7230"></a>1.2 Scope</h3>  <p>A small reactor is defined as a reactor facility with a power level less than approximately 200 megawatts thermal (MWt) that is used for research, isotope production, steam generation, electricity production or other applications. </p>  <p>This document is technology neutral and includes:</p>  <ul>
<li>safety goals and objectives for the design</li>
<li>safety concepts in the design</li>
<li>safety management principles</li>
<li>design of structures, systems and components</li>
<li>safety, security and engineering aspects of the reactor facility features and layout</li>
<li>integration of safety assessments and the design process</li>  </ul>  <p>When an applicant proposes to construct more than one reactor on a site, the design of the multi-reactor site shall meet the safety objectives in this regulatory document. The design of each reactor shall also satisfy the safety and design requirements in this document. In addition, the applicant&nbsp;shall ensure that the impact on the safety of all reactors on the site due to interactions between reactors; common-cause failure events; and any sharing of structures, systems and components (SSCs) between reactors is assessed for normal operation, anticipated operational occurrences (AOOs) and accident conditions.</p>  <p>This document is consistent with the philosophy and technical content of modern international codes and standards. In particular, it is based in part on the International Atomic Energy Agency&#8217;s (IAEA) publication,<i> Safety of Research Reactors</i>, IAEA Safety Standards Series No. NS-R-4, 2005.</p>
<a name="1.3"></a>
<h3 className="reportHeading3"><a name="P229_8733"></a>1.3 Relevant regulations</h3>  <p>The provisions of the <i>Nuclear Safety and Control Act</i> (NSCA) and the regulations made under the NSCA relevant to this document include:</p>  <ul>
<li>Paragraph 3(1)(<i>d</i>) of the <i>General Nuclear Safety and Control Regulations</i> stipulates that an application for a licence shall contain, in addition to other information, &#8220;a description of any nuclear facility, prescribed equipment or prescribed information to be encompassed by the licence&#8221;.</li>
<li>Paragraph 3(1)(<i>e</i>) of the <i>General Nuclear Safety and Control Regulations</i> stipulates that an application for a licence shall contain, in addition to other information, &#8220;the proposed measures to ensure compliance with the <i>Radiation</i> <i>Protection Regulations</i> and the <i>Nuclear Security Regulations</i>&#8221;.</li>
<li>Paragraph 3(1)(<i>g</i>) of the <i>General Nuclear Safety and Control Regulations</i> stipulates that an application for a licence shall contain, in addition to other information, &#8220;the proposed measures to control access to the site of the activity to be licensed and the nuclear substance, prescribed equipment or prescribed information&#8221;.</li>
<li>Paragraph 3(1)(<i>h</i>) of the <i>General Nuclear Safety and Control Regulations</i> stipulates that an application for a licence shall contain, in addition to other information, &#8220;the proposed measures to prevent loss or illegal use, possession or removal of the nuclear substance, prescribed equipment or prescribed information&#8221;.</li>
<li>Paragraph 3(1)(<i>i</i>) of the <i>General Nuclear Safety and Control Regulations</i> stipulates that an application for a licence shall contain, in addition to other information, &#8220;a description and the results of any test, analysis or calculation performed to substantiate the information included in the application&#8221;.</li>
<li>Paragraph 5(<i>f</i>) of the <i>Class I Nuclear Facilities Regulations</i> stipulates that an application for a licence to construct a Class I nuclear facility shall contain, in addition to other information, &#8220;a preliminary safety analysis report demonstrating the adequacy of the design of the nuclear facility&#8221;.</li>
<li>Paragraph 5(<i>g</i>) of the <i>Class I Nuclear Facilities Regulations</i> stipulates that an application for a licence to construct a Class I nuclear facility shall contain, in addition to other information, &#8220;a proposed quality assurance program for the design of the nuclear facility&#8221;.</li>
<li>Paragraph 12(1)(<i>c</i>) of the <i>General Nuclear Safety and Control Regulations</i> stipulates that every licensee shall &#8220;take all reasonable precautions to protect the environment and the health and safety of persons, and to maintain the security of nuclear facilities and of nuclear substances&#8221;.</li>
<li>Paragraph 12(1)(<i>f</i>) of the <i>General Nuclear Safety and Control Regulations</i> stipulates that every licensee shall &#8220;take all reasonable precautions to control the release of radioactive nuclear substances or hazardous substances within the site of the licensed activity and into the environment as a result of the licensed activity&#8221;.</li>
<li>Paragraph 5(a) of the <i>Class I Nuclear Facilities Regulations</i> stipulates that an application for a licence to construct a Class I nuclear facility shall contain, in addition to other requirements, &#8220;a description of the proposed design of the nuclear facility, including the manner in which the physical and environmental characteristics of the site are taken into account in the design&#8221;. </li>
<li>Paragraph 5(<i>i</i>) of the <i>Class I Nuclear Facilities Regulations</i> stipulates that an application for a licence to construct a Class I nuclear facility shall contain, in addition to other requirements, information on &#8220;the effects on the environment and the health and safety of persons that may result from the construction, operation and decommissioning of the nuclear facility, and the measures that will be taken to prevent or mitigate those effects&#8221;.</li>
<li>Paragraph 6(<i>h</i>) of the <i>Class I Nuclear Facilities Regulations</i> stipulates that an application for a licence to operate a Class I nuclear facility shall contain, in addition to other information, &#8220;the effects on the environment and the health and safety of persons that may result from the operation and decommissioning of the nuclear facility&#8221;.</li>
<li>Paragraph 7(<i>f</i>) of the <i>Class I Nuclear Facilities Regulations</i> stipulates that an application for a licence to decommission a Class I nuclear facility shall contain, in addition to other information, &#8220;the effects on the environment and the health and safety of persons that may result from the decommissioning, and the measures that will be taken to prevent or mitigate those effects&#8221;.</li>
<li>Other sections of the <i>Class I Nuclear Facilities Regulations</i>, the <i>Radiation Protection Regulations</i>, <i>Packaging and Transport of Nuclear Substances</i> <i>Regulations</i>, and the <i>Nuclear Security Regulations</i> that pertain to the design of a small reactor.</li>  </ul>
<a name="2.0"></a>
<h2 className="reportHeading2"><a name="P245_13511"></a>2.0 Graded Approach </h2>  <p>The graded approach is a method in which the stringency of the design measures and analyses applied are commensurate with the level of risk posed by the reactor facility.</p>  <p>Designs using the graded approach shall demonstrate that the safety objectives and the requirements in this document are met.</p>  <p>Licensees or applicants may use the graded approach described in IAEA NS-R-4, <i>Safety of Research Reactors.</i></p>
<a name="2.1"></a>
<h3 className="reportHeading3"><a name="P249_13932"></a>2.1 Application of graded approach </h3>  <p>When&nbsp;a graded approach is applied,&nbsp;factors to be considered include:</p>  <ul>
<li>reactor power</li>
<li>reactor safety characteristics</li>
<li>amount and enrichment of fissile and fissionable material</li>
<li>fuel design</li>
<li>type and mass of moderator, reflector and coolant</li>
<li>utilization of the reactor </li>
<li>presence of high energy sources and other radioactive and hazardous&nbsp;sources</li>
<li>safety design features</li>
<li>source term</li>
<li>siting</li>
<li>proximity to populated areas</li>  </ul>
<a name="3.0"></a>
<h2 className="reportHeading2"><a name="P262_14411"></a>3.0 Safety Objectives and Concepts</h2>
<a name="3.1"></a>
<h3 className="reportHeading3"><a name="P263_14445"></a>3.1 General nuclear safety objective</h3>  <p>Small reactors shall be designed and operated in a manner that will protect the health, safety and security of persons and the environment from unreasonable risk, and respect Canada&#8217;s international commitments on the peaceful use of nuclear energy. This objective relies on the establishment and maintenance of effective defences against radiological and hazardous substances.</p>  <p>The general nuclear safety objective is supported by three complementary safety objectives dealing with radiation protection, environmental protection and the technical aspects of the design.</p>
<a name="3.1.1"></a>
<h4 className="reportHeading4"><a name="P266_15051"></a>3.1.1 Radiation protection safety objective</h4>  <p>The reactor facility shall be designed to ensure that during normal operation or anticipated operational occurrences (AOOs), or due to any planned release of radioactive material from the reactor facility, radiation exposures within the reactor facility are kept below the limits prescribed in the <i>Radiation Protection Regulations</i> and as low as reasonably achievable (ALARA).</p>
<a name="3.1.2"></a>
<h4 className="reportHeading4"><a name="P269_15564"></a>3.1.2 Environmental protection safety objective</h4>  <p>The reactor facility shall be designed to ensure that during normal operation, anticipated operational occurrences and design basis accidents, there are no detrimental significant adverse effects on the environment as required by the <i>Canadian Environmental Assessment Act </i>(CEA Act).</p>  <p>The design shall also provide for the mitigation of the environmental consequences of beyond design basis accidents, to the extent practicable.</p>
<a name="3.1.3"></a>
<h4 className="reportHeading4"><a name="P272_16036"></a>3.1.3 Technical safety objectives</h4>  <p>The reactor facility shall be designed to ensure that all reasonably practicable measures to prevent accidents in the reactor facility are provided and that the consequences of accidents, if they do occur, are mitigated. This takes into account all possible accidents considered in the design, including those of very low probability. </p>  <p>With achievement of these objectives, any radiological consequences should be minor and below prescribed limits. The likelihood of accidents with serious radiological consequences is expected to be extremely low.</p>
<a name="3.2"></a>
<h3 className="reportHeading3"><a name="P275_16617"></a>3.2 Safety concepts</h3>
<a name="3.2.1"></a>
<h4 className="reportHeading4"><a name="P276_16637"></a>3.2.1 Defence in depth</h4>  <p>The concept of defence in depth shall be applied to all organizational, behavioural and design-related safety and security activities to ensure that they are subject to overlapping provisions. This concept is applied throughout the design process and operation of the reactor facility to provide a series of levels of defence aimed at preventing accidents and to ensure appropriate protection in the event that prevention fails. </p>  <p>The reactor facility design shall meet the safety objectives of all five levels of defence in depth as follows:</p>  <p><strong>Level 1 </strong></p>  <p>The objective of the first level of defence is to prevent deviations from normal operation and to prevent reactor facility failures. </p>  <p><strong>Level 2</strong></p>  <p>The objective of the second level of defence is to detect and intercept deviations from normal operation in order to prevent anticipated operational occurrences from escalating to accident conditions, and to return the reactor facility to a state of normal operation. </p>  <p><strong>Level 3</strong></p>  <p>The objective of the third level of defence is to minimize the consequences of accidents. </p>  <p><strong>Level 4</strong></p>  <p>The objective of the fourth level of defence is to ensure that radioactive releases caused by severe accidents are kept as low as practicable. </p>  <p><strong>Level 5</strong></p>  <p>The objective of the fifth level of defence is to mitigate the radiological consequences of potential releases of radioactive materials that may result from accident conditions.</p>
<a name="3.2.2"></a>
<h4 className="reportHeading4"><a name="P289_18047"></a>3.2.2 Physical barriers</h4>  <p>To ensure maintenance of the overall safety concept of defence in depth, the design shall provide multiple physical barriers to the uncontrolled release of radioactive materials to the environment.</p>  <p>The design shall minimize: </p>  <ul>
<li>challenges to the integrity of physical barriers</li>
<li>failure of a barrier when challenged</li>
<li>failure of a barrier as a consequence of failure of another barrier</li>  </ul>  <p>The design shall allow for the fact that the existence of multiple levels of defence is not a sufficient basis for continued power operation in the absence of one defence level.</p>  <p>The design shall determine the need for an exclusion zone based on several factors, including: </p>  <ul>
<li>evacuation needs (refer to section 4.3)</li>
<li>land usage needs</li>
<li>security requirements</li>
<li>environmental factors</li>  </ul>
<a name="4.0"></a>
<h2 className="reportHeading2"><a name="P301_18843"></a>4.0 Safety Requirements</h2>  <p>The licensee or applicant is responsible for ensuring that the design meets the following safety requirements.</p>
<a name="4.1"></a>
<h3 className="reportHeading3"><a name="P303_18976"></a>4.1 Application of defence in depth</h3>  <p>Defence in depth shall be incorporated into the design to meet the objectives of the five levels of defence in depth.</p>  <p>The design shall provide multiple physical barriers to the uncontrolled release of radioactive materials to the environment. </p>  <p><strong>Level 1</strong></p>  <p>The design shall be conservative and the construction shall be of sufficiently high quality to provide confidence that reactor facility failures and deviations from normal operations are minimized and accidents are prevented. </p>  <p><strong>Level 2 </strong></p>  <p>The design shall provide for control of the reactor facility behaviour during and following a postulated initiating event (PIE) using inherent and engineered design features to minimize or exclude uncontrolled transients, to the extent possible. </p>  <p><strong>Level 3 </strong></p>  <p>The design shall provide for inherent safety features, fail-safe design, engineered design features and procedures that minimize the consequences of design basis accidents (DBAs). Automatic activation of the engineered design features shall be provided to minimize the need for operator actions in the early phase of a DBA. </p>  <p><strong>Level 4 </strong></p>  <p>The design shall provide for equipment and procedures to manage accidents and mitigate their consequences, to the extent practicable. </p>  <p>Adequate protection shall be provided for the confinement function. </p>  <p><strong>Level 5</strong></p>  <p>The design shall provide for an adequately equipped emergency support centre and plans for on-site and off-site emergency response.</p>
<a name="4.2"></a>
<h3 className="reportHeading3"><a name="P317_20420"></a>4.2 Safety functions</h3>  <p>The design shall ensure that fundamental safety functions are available in normal operation, and during and following AOOs and DBAs. These functions include: </p>  <ul>
<li>control of reactivity </li>
<li>removal of heat from the core</li>
<li>confinement of radioactive material</li>
<li>control of operational discharges and hazardous substances</li>
<li>limitation of accidental releases </li>
<li>monitoring of safety critical parameters to guide operator actions </li>  </ul>  <p>The above functions shall also facilitate response to beyond design basis accidents (BDBAs), to the extent practicable. </p>  <p>Structures, systems and components (SSCs) necessary to fulfill safety functions following a PIE are to be identified. This approach shall identify the need for such functions as reactor shutdown, emergency core cooling, confinement, emergency heat removal and power systems.</p>
<a name="4.3"></a>
<h3 className="reportHeading3"><a name="P327_21261"></a>4.3 Radiation protection and acceptance criteria</h3>
<a name="4.3.1"></a>
<h4 className="reportHeading4"><a name="P328_21309"></a>4.3.1 Qualitative safety goals </h4>  <p>A limit is placed on the societal risks posed by reactor facility operation. For this purpose, the following two qualitative safety goals have been established: </p>  <ul>
<li>Individual members of the public are provided a level of protection from the consequences of reactor facility operation such that there is no significant additional risk to the life and health of individuals. </li>
<li>Societal risks to life and health from reactor facility operation should not significantly add to other societal risks.</li>  </ul>
<a name="4.3.2"></a>
<h4 className="reportHeading4"><a name="P332_21838"></a>4.3.2 Radiation protection for normal operation</h4>  <p>The design shall be such that during normal operation, including maintenance and decommissioning, doses are controlled to remain below the limits prescribed in the <i>Radiation Protection Regulations</i>. In addition, radiation doses to the public and to site personnel shall be ALARA.</p>  <p>All actual and potential sources of radiation shall be identified and provision shall be made to ensure that sources are kept under strict technical and administrative control.</p>
<a name="4.3.3"></a>
<h4 className="reportHeading4"><a name="P335_22340"></a>4.3.3 Dose acceptance criteria for AOOs and DBAs</h4>  <p>The design shall meet the following dose acceptance criteria: </p>  <ul>
<li>0.5 millisieverts (mSv) for any AOO </li>
<li>20 millisieverts (mSv) for any DBA</li>  </ul>  <p>These criteria refer to the committed whole-body dose for average members of the critical groups who are most at risk, at or beyond the site boundary, as calculated in the deterministic safety analysis for a period of 30 days after the analyzed event.</p>
<a name="4.3.4"></a>
<h4 className="reportHeading4"><a name="P340_22779"></a>4.3.4 Quantitative safety goals for BDBAs </h4>  <p>The design shall meet the following three quantitative safety goals: </p>  <p><strong>Core damage frequency</strong></p>  <p>The sum of frequencies of all event sequences that can lead to significant core degradation is less than 10<sup>-5</sup> per reactor year. </p>  <p><strong>Small release frequency</strong></p>  <p>The sum of frequencies of all event sequences, whose release to the environment requires temporary evacuation of the local population, shall be less than 10<sup>-5</sup> per reactor year. </p>  <p><strong>Large release frequency</strong></p>  <p>The sum of frequencies of all event sequences, whose release to the environment requires long-term relocation of the local population, is less than 10<sup>-6</sup> per reactor year.</p>
<a name="4.4"></a>
<h3 className="reportHeading3"><a name="P348_23435"></a>4.4 Accident prevention, mitigation and management </h3>  <p>The design shall include provisions to minimize the likelihood of an accident that could lead to the loss of normal control of the source of radiation. However, given that there is a remaining probability that an accident may occur, measures shall be taken to mitigate the radiological consequences of accidents.</p>  <p>The design shall apply the principle that reactor states that could result in high radiation doses or radioactive releases shall have a very low frequency of occurrence, and reactor states with significant frequency of occurrence shall have only minimal, if any, potential radiological consequences.</p>  <p>The design shall apply the principles of defence in depth to minimize sensitivity to PIEs and the need for operator intervention in order to bring the reactor to a safe state. </p>  <p>Following a PIE, the reactor facility shall be rendered safe by including: </p>  <ul>
<li>inherent safety features</li>
<li>passive safety features or action of control systems </li>
<li>action of safety systems </li>
<li>specified procedural actions</li>  </ul>
<a name="4.5"></a>
<h3 className="reportHeading3"><a name="P357_24494"></a>4.5 Operational limits and conditions</h3>  <p>The operational limits and conditions (OLCs) shall be established to ensure that the reactor facility operates in accordance with design assumptions and intent, and include the limits within which the reactor facility has been shown to be safe.</p>
<a name="5.0"></a>
<h2 className="reportHeading2"><a name="P359_24775"></a>5.0 Safety Analysis </h2>  <p>The overall safety assessment of the reactor facility design includes hazards analysis, deterministic safety analysis and probabilistic safety analysis techniques.</p>  <p>These analyses shall identify all sources of exposure in order to evaluate potential radiation doses to workers at the reactor facility and to the public, and to evaluate potential effects of the reactor facility on the environment.</p>  <p>The safety analysis confirms that the design is capable of meeting the safety requirements, dose acceptance criteria and safety goals. The safety analysis also contributes to demonstrating that the reactor facility provides defence in depth.</p>
<a name="5.1"></a>
<h3 className="reportHeading3"><a name="P363_25432"></a>5.1 Safety analysis objectives </h3>  <p>As per <i>Class I Nuclear Facilities Regulations</i>, a preliminary safety analysis report demonstrating the adequacy of the facility design is required for an application for a licence to construct a Class I nuclear facility. A final safety analysis report is required for an application for a licence to operate a Class I nuclear facility. </p>  <p>The final safety analysis shall:</p>  <ul>
<li>reflect the &#8216;as-built&#8217; reactor facility, including aging effects</li>
<li>demonstrate that the design can withstand and effectively respond to identified PIEs</li>
<li>demonstrate the effectiveness of the safety systems and safety support systems</li>
<li>derive the OLCs for the reactor facility, including:
<ol className="lower-alpha">
<li> operational limits and set points important to safety </li>
<li> allowable operating configurations and constraints for operational procedures</li>
</ol>
</li>
<li>establish requirements for emergency response and accident management</li>
<li>determine post-accident environmental conditions, including radiation fields and worker doses, to confirm that operators are able to carry out the actions credited in the safety analysis</li>
<li>confirm that the dose and derived acceptance criteria are met for all AOOs and DBAs</li>
<li>demonstrate that all safety goals for BDBAs, including severe accidents, have been met</li>  </ul>
<a name="5.2"></a>
<h3 className="reportHeading3"><a name="P377_26707"></a>5.2 Hazards analysis </h3>  <p>A hazards analysis shall demonstrate the ability of the design to effectively respond to credible common-cause events. </p>  <p>For each common-cause PIE, the hazards analysis shall identify: </p>  <ul>
<li>applicable acceptance criteria </li>
<li>the hazardous materials in the reactor facility and at the reactor facility site</li>
<li>all qualified mitigating SSCs credited during and following the event (all non-qualified safety or safety support systems are assumed to fail, except in cases where their continued operation would result in more severe consequences)</li>
<li>operator actions and operating procedures for the event</li>
<li>reactor facility or operating procedure parameters for which the event is limiting</li>  </ul>  <p>The hazards analysis shall confirm that:</p>  <ul>
<li>the reactor facility design incorporates sufficient diversity and separation to cope with credible common-cause events </li>
<li>credited SSCs are qualified to survive and function during and following credible common-cause events, as applicable </li>
<li>the following criteria are met:
<ol className="lower-alpha">
<li>reactor facility can be brought to a safe shutdown state </li>
<li> integrity of the fuel in the reactor core can be maintained </li>
<li>integrity of the reactor coolant boundary and confinement can be maintained </li>
<li> safety-critical parameters can be monitored by the operator </li>
</ol>
</li>  </ul>  <p>The hazards analysis report shall include the findings of the analysis and the basis for those findings. This report also:</p>  <ul>
<li>includes a general description of the physical characteristics of the reactor facility that outlines the prevention and protection systems to be provided</li>
<li>includes the list of safe shutdown equipment </li>
<li>defines and describes the characteristics associated with hazards for all areas that contain hazardous materials </li>
<li>describes the performance criteria for detection systems, alarm systems and mitigation systems, including requirements such as seismic or environmental qualification </li>
<li>describes the control and operating room areas and the protection systems provided for these areas, including additional facilities for maintenance and operating personnel </li>
<li>describes the operator actions and operating procedures of importance to the given analysis </li>
<li>identifies the reactor facility parameters for which the event is limiting </li>
<li>explains the inspection, testing and maintenance parameters needed to protect system integrity </li>
<li>defines the emergency planning and coordination requirements for effective mitigation, including any necessary measures to compensate for the failure or inoperability of any active or passive protection system or feature</li>  </ul>
<a name="5.3"></a>
<h3 className="reportHeading3"><a name="P407_29285"></a>5.3 Deterministic safety analysis </h3>  <p>The deterministic safety analysis shall:</p>  <ul>
<li>confirm that OLCs comply with the assumptions and intent of the design for normal operation of the reactor facility</li>
<li>characterize the events that are appropriate for the site and reactor facility design </li>
<li>analyze and evaluate event sequences that result from failure of SSCs </li>
<li>compare the results of the safety analysis with derived acceptance criteria, design limits, dose acceptance criteria and safety goals </li>
<li>establish and confirm the design basis </li>
<li>demonstrate that AOOs, DBAs and BDBAs can be managed by automatic response of safety systems in combination with prescribed operator actions </li>  </ul>  <p>Detailed requirements for the deterministic safety analysis are provided in CNSC regulatory document RD-308, <i>Deterministic Safety Analysis for Small Reactors</i>.</p></a>
<h3 className="reportHeading3"><a name="P416_30127"></a>5.4 Probabilistic safety assessment </h3>  <p>The probabilistic safety assessment (PSA) shall:</p>  <ul>
<li>identify accident scenarios with the potential for significant core degradation</li>
<li>demonstrate that a balanced design has been achieved such that no particular design feature or event makes a dominant contribution to the frequency of severe accidents, taking uncertainties into account </li>
<li>provide probability assessments for the occurrence of core damage states and major off-site releases </li>
<li>identify systems for which design improvements or modifications to operating procedures could reduce the probability of severe accidents or mitigate their consequences </li>
<li>assess the adequacy of reactor accident management and emergency procedures</li>
<li>consider the potential effects of human actions on system reliability </li>  </ul>  <p>The PSA is conducted in accordance with the requirements specified in CNSC regulatory standard S-294, <i>Probabilistic Safety Assessment (PSA) for Nuclear Power Plants</i>.</p>
<a name="6.0"></a>
<h2 className="reportHeading2"><a name="P425_31096"></a>6.0 Safety Management During Design </h2>  <p>The safety management system shall ensure that the reactor facility design: </p>  <ul>
<li>meets Canadian regulatory requirements </li>
<li>meets all design specifications, including those confirmed by safety analysis</li>
<li>takes into account current safety practices</li>
<li>fulfills the requirements of an effective safety management system </li>
<li>incorporates only those design changes that have been justified by technical and safety assessments <br/>
</li>  </ul>  <p>The design process shall be documented and carried out by technically qualified and appropriately trained staff at all levels, and includes such management arrangements as: </p>  <ul>
<li>a clear division of responsibilities with corresponding lines of authority and communication </li>
<li>clear interfaces between the groups engaged in different parts of the design, and between designers, utilities, suppliers, builders and contractors, as appropriate</li>
<li>policies, processes and procedures that form part of a management system </li>
<li>a positive safety culture throughout all levels of the organization</li>  </ul>
<a name="6.1"></a>
<h3 className="reportHeading3"><a name="P437_32140"></a>6.1 Design authority </h3>  <p>The licensee shall be ultimately responsible for the design of the reactor facility. </p>  <p>During the design phase a formal design authority shall be established. The tasks and functions of the design authority shall be formally documented.</p>  <p>The design authority shall achieve the following objectives during the design phase: </p>  <ul>
<li>establish a knowledge base of all relevant aspects of the reactor facility design and keep it up to date, while taking experience and research findings into account</li>
<li>ensure the availability of the design information that is needed for safe reactor facility operation and maintenance </li>
<li>establish the requisite security clearances and associated security measures to protect prescribed, designated and classified material</li>
<li>maintain design configuration control </li>
<li>review, verify, approve and document design changes </li>
<li>establish and control the necessary interfaces with responsible designers or other suppliers engaged in design work</li>
<li>ensure that the necessary engineering and scientific skills and knowledge have been maintained</li>
<li>ensure that, with respect to individual design changes or multiple changes that may have significant interdependencies, the associated impact on safety has been properly assessed and understood</li>  </ul>
<a name="6.2"></a>
<h3 className="reportHeading3"><a name="P449_33419"></a>6.2 Design management </h3>  <p>Design management policies, processes and procedures shall be established to control all aspects of the design and its evolution. </p>  <p>Appropriate design management shall achieve the following objectives: </p>  <ul>
<li>structures, systems and components important to safety meet their respective design requirements</li>
<li>due account is taken of the human capabilities and limitations of personnel </li>
<li>safety design information necessary for safe operation and maintenance of the reactor facility and for any subsequent reactor facility modifications is preserved</li>
<li>operational limits and conditions are provided for incorporation into the reactor facility administrative and operational procedures</li>
<li>the reactor facility design facilitates maintenance and aging management throughout the life of the facility</li>
<li>the results of the deterministic and probabilistic safety assessments are taken into account </li>
<li>due consideration is given to the prevention of accidents and mitigation of their consequences</li>
<li>generation of radioactive and hazardous waste is limited to minimum practicable levels, in terms of both activity and volume</li>
<li>a change control process is established to track design changes to provide configuration management during manufacturing, construction, commissioning and operation.</li>
<li>physical protection systems are provided to address design basis threats</li>  </ul>
<a name="6.3"></a>
<h3 className="reportHeading3"><a name="P462_34802"></a>6.3 Design policies, processes and procedures </h3>  <p>Design policies, processes&nbsp;and procedures&nbsp;shall be established as part of the overall management arrangements to achieve the reactor facility design objectives. </p>  <p>The&nbsp;policies, processes and procedures shall&nbsp;include:</p>  <ul>
<li>design initiation, specification of scope and planning </li>
<li>specification of design requirements </li>
<li>selection of the design authority (refer to section 6.1) </li>
<li>work control and planning of design activities </li>
<li>specification and control of design inputs </li>
<li>review of design concepts and selection </li>
<li>selection of design tools and computer software </li>
<li>conducting conceptual analysis </li>
<li>conducting detailed design and production of design documentation and records </li>
<li>conducting detailed safety analysis (refer to section 5.0) </li>
<li>defining any limiting conditions for safe operation </li>
<li>carrying out design verification and validation </li>
<li>independence of individuals or groups performing verifications, validations and approvals </li>
<li>configuration management </li>
<li>management of the design and control of design changes </li>
<li>identification and control of design interfaces</li>  </ul>
<a name="6.4"></a>
<h3 className="reportHeading3"><a name="P481_35942"></a>6.4 Proven engineering practices </h3>  <p>Proven and accepted engineering methods, procedures and practices shall be used to ensure compliance of the design with regulations, codes and standards. </p>  <p>Modern codes and standards shall be identified and evaluated for applicability, adequacy and sufficiency to the design of SSCs important to safety. </p>  <p>Structures, systems and components important to safety shall be of proven designs and shall be designed according to appropriate codes and standards.</p>  <p>When a new SSC design, feature or engineering practice is introduced, adequate safety shall be proven by a combination of supporting research and development programs and by examination of relevant experience from similar applications. </p>  <p>An adequate qualification program shall be established to verify that the new design meets all applicable safety design requirements. New designs shall be tested before being brought into service and shall be monitored in service to verify that the expected behaviour is achieved.</p>
<a name="6.5"></a>
<h3 className="reportHeading3"><a name="P487_36943"></a>6.5 Operational experience and safety research </h3>  <p>The reactor facility design shall draw on operational experience that has been gained in the nuclear industry and on the results of relevant research programs.</p>
<a name="6.6"></a>
<h3 className="reportHeading3"><a name="P489_37150"></a>6.6 Safety assessment </h3>  <p>A safety assessment process shall be applied throughout the design phase of the project to ensure that the design meets safety requirements.</p>  <p>Before the design is submitted, an independent review of the safety assessment shall be conducted by individuals or groups separate from those carrying out the design. </p>  <p>Safety assessment documentation shall identify those aspects of operation, maintenance and management that are important to safety. This documentation shall be maintained in a dynamic suite of documents to reflect changes in design as the reactor facility evolves. </p>  <p>Safety assessment documentation shall be presented clearly and concisely, in a logical and understandable format, and shall be made readily accessible to designers, operators and the Canadian Nuclear Safety Commission.</p>
<a name="6.7"></a>
<h3 className="reportHeading3"><a name="P494_37964"></a>6.7 Design documentation </h3>  <p>Design documentation shall include information to demonstrate the adequacy of the design and shall be used for procurement, construction, commissioning and safe operation, including maintenance, aging management, modification and eventual decommissioning of the reactor facility.</p>
<a name="7.0"></a>
<h2 className="reportHeading2"><a name="P496_38269"></a>7.0 General Design Requirements</h2>
<a name="7.1"></a>
<h3 className="reportHeading3"><a name="P497_38301"></a>7.1 Radiation protection </h3>  <p>The design and layout of the reactor facility shall make suitable provision to minimize exposure contamination from all sources. This includes the adequate design of SSCs to:</p>  <ul>
<li>control access to the reactor facility</li>
<li>minimize exposure during maintenance and inspection</li>
<li>provide shielding from direct and scattered radiation</li>
<li>provide ventilation and filtering to control airborne radioactive materials</li>
<li>limit the activation of corrosion products by proper specification of materials</li>
<li>minimize the spread of active material</li>
<li>monitor radiation levels</li>
<li>provide suitable decontamination facilities</li>  </ul>
<a name="7.1.1"></a>
<h4 className="reportHeading4"><a name="P507_38933"></a>7.1.1 Design for radiation protection </h4>  <p>The shielding design shall prevent radiation levels to the operator in operating areas from exceeding the prescribed limits.</p>  <p>To minimize radiation exposure, the reactor facility layout shall provide for efficient operation, inspection, maintenance and replacement. In addition, the design shall limit the amount of activated material and its build-up. </p>  <p>The design shall account for frequently occupied locations and support the need for human access to locations and equipment. </p>  <p>Access routes shall be shielded where needed. </p>  <p>The design shall enable operator access for actions credited for post-accident conditions. </p>  <p>Adequate protection shall be provided against exposure to radiation and radioactive contamination in accident conditions in those parts of the reactor facility to which access is required.</p>
<a name="7.1.2"></a>
<h4 className="reportHeading4"><a name="P514_39773"></a>7.1.2 Access and movement control </h4>  <p>The reactor facility layout and procedures shall control access to radiation areas and areas of potential contamination. </p>  <p>The design shall minimize the movement of radioactive materials and the spread of contamination, and shall provide appropriate decontamination facilities for personnel.</p>
<a name="7.1.3"></a>
<h4 className="reportHeading4"><a name="P517_40097"></a>7.1.3 Monitoring </h4>  <p>Equipment shall be provided to ensure that there is adequate radiation monitoring in normal operation, AOOs, DBAs and, as practicable, BDBAs. </p>  <p>Stationary alarming dose rate meters shall be provided:</p>  <ul>
<li>for monitoring the local radiation dose rate at places routinely occupied by operating personnel </li>
<li>where the changes in radiation levels may be such that access may be limited for periods of time </li>
<li>to indicate the general radiation level at appropriate locations in the event of AOOs, DBAs and, as far as practicable, BDBAs </li>
<li>to give sufficient information in the control room or at the appropriate control position in all operational states, AOOs, DBAs and, as practicable, BDBAs to enable facility personnel to initiate corrective actions when necessary </li>  </ul>  <p>Monitors shall be provided for measuring the activity of radioactive substances in the atmosphere. </p>  <p>Facilities shall be provided for monitoring individual doses and contamination of personnel. </p>  <p>Stationary equipment and laboratory facilities shall be provided to determine the concentration of selected radionuclides in fluid process systems, as appropriate, and in gas and liquid samples taken from the reactor facility or the environment in all operational states, AOOs, DBAs and, as practicable, BDBAs. </p>  <p>Devices for measuring radioactive surface contamination shall be provided.</p>
<a name="7.1.4"></a>
<h4 className="reportHeading4"><a name="P528_41454"></a>7.1.4 Sources </h4>  <p>The design shall provide for:</p>  <ul>
<li>appropriate disposal of radioactive materials, either to on-site storage or through removal from the site </li>
<li>reduction in the quantity and concentration of radioactive materials produced</li>
<li>control of dispersal within the reactor facility </li>
<li>control of releases to the environment </li>
<li>decontamination facilities for equipment and for handling any radioactive waste arising from decontamination activities</li>
<li>minimization of radioactive waste generation</li>  </ul>
<a name="7.2"></a>
<h3 className="reportHeading3"><a name="P536_41955"></a>7.2 Environmental protection and mitigation</h3>
<a name="7.2.1"></a>
<h4 className="reportHeading4"><a name="P537_41998"></a>7.2.1 Design for environmental protection </h4>  <p>The design shall make adequate provision to protect the environment and to mitigate the impact of a reactor facility on the environment. A review of the design shall confirm that this provision has been met. </p>  <p>A systematic approach shall be used to assess the potential biophysical environmental effects of a reactor facility on the environment, and the effects of the environment on the reactor facility.</p>
<a name="7.2.2"></a>
<h4 className="reportHeading4"><a name="P540_42444"></a>7.2.2 Release of nuclear and hazardous substances </h4>  <p>The design shall demonstrate through process, monitoring, control, prevention and mitigation measures that the releases of nuclear and hazardous substances will conform to the ALARA principle. </p>  <p>The life cycle assessment shall identify various sources of nuclear and hazardous substances in design, operation and decommissioning, along with their possible environmental impacts on human and non-human biota. </p>  <p>The factors that are considered shall include:</p>  <ul>
<li>resource requirements for the reactor facility (e.g., fuel, energy, water) </li>
<li>depletion of ground and surface water resources </li>
<li>contamination of air, soil and water resources </li>
<li>nuclear and hazardous substances used </li>
<li>types of waste generated (e.g., gaseous, liquid, solid) </li>
<li>quantities of waste generated </li>
<li>impact of cooling water intake on entrainment and impingement </li>
<li>impact of water output on the thermal regime of the receiving environment</li>  </ul>  <p>Technological options shall be considered in establishing design objectives for controlling and monitoring releases during startup, normal operation, shutdown, and potential abnormal and emergency situations. Appropriate limits shall be included in the reactor facility OLCs. </p>  <p>Technological options for the design of cooling systems shall consider a closed-cycle technology to minimize adverse environmental impact on aquatic biota.</p>
<a name="7.2.3"></a>
<h4 className="reportHeading4"><a name="P554_43838"></a>7.2.3 Monitoring environmental impact </h4>  <p>The design shall provide the means for monitoring nuclear and hazardous substance releases to the environment in the vicinity of the reactor facility.</p>  <p>Stationary equipment shall be provided for monitoring the effluents prior to or during discharge to the environment.</p>
<a name="7.3"></a>
<h3 className="reportHeading3"><a name="P557_44142"></a>7.3 Classification of structures, systems and components</h3>  <p>Structures, systems and components shall be identified, classified and documented in a systematic, consistent and clearly defined classification scheme. The classification scheme shall include a process for assigning importance to safety.</p>  <p>The SSCs shall be designed, constructed and maintained such that their quality and reliability is commensurate with their classification. </p>  <p>The design shall provide appropriately designed interfaces between SSCs of different classifications in order to minimize the risk of a less important SSC from adversely affecting the function or reliability of an SSC of greater importance.</p>
<a name="7.4"></a>
<h3 className="reportHeading3"><a name="P561_44815"></a>7.4 Reactor facility design envelope </h3>  <p>The reactor facility design envelope, which comprises the design basis and complementary design features, shall be established.</p>  <p>The utilization of the reactor facility shall be taken into account establishing the design envelope. </p>  <p>The design basis shall specify the capabilities that are necessary for the reactor facility in normal operation, AOOs and DBAs. </p>  <p>Conservative design measures and sound engineering practices shall be applied in the design basis for normal operation, AOOs and DBAs. </p>  <p>Complementary design features shall address the performance of the reactor facility for BDBAs, including selected severe accidents.</p>
<a name="7.5"></a>
<h3 className="reportHeading3"><a name="P567_45476"></a>7.5 Reactor states </h3>  <p>Reactor states shall be grouped into the following four categories: normal operation, anticipated operational occurrences, design basis accidents and beyond design basis accidents (refer to the defence in depth in sections 3.2.1 and 4.1, and the acceptance criteria in section 4.3).</p>  <p>The utilization of the reactor facility shall be taken into account when establishing the reactor states.</p>
<a name="7.5.1"></a>
<h4 className="reportHeading4"><a name="P570_45883"></a>7.5.1 Normal operation </h4>  <p>The design shall facilitate safe operation of the reactor facility within a defined range of parameters, with an assumed availability of a minimum set of specified support features for safety systems. </p>  <p>The design shall minimize the unavailability of safety systems.</p>  <p>The design shall address the potential for accidents to occur when the availability of safety systems may be reduced, such as during shutdown, startup, low power operation, refuelling and maintenance. </p>  <p>The design shall establish a set of requirements and limitations for safe normal operation including:</p>  <ul>
<li>limits important to safety</li>
<li>constraints on control systems and procedures</li>
<li>reactor facility maintenance, testing and inspection requirements</li>
<li>clearly defined operating configurations such as startup, at-power operation, shutdown, maintenance, testing, surveillance and refueling (these configurations include relevant operational restrictions in the event of safety system and safety support system outages)</li>  </ul>  <p>These requirements and limitations, together with the results of safety analysis, form the basis for establishing the OLCs as described in section 4.5.</p>
<a name="7.5.2"></a>
<h4 className="reportHeading4"><a name="P580_47040"></a>7.5.2 Anticipated operational occurrences </h4>  <p>The response of the reactor to a wide range of AOOs shall allow safe operation or shutdown, if necessary, without the need to invoke provisions beyond defence in depth Level 1 or, at most, Level 2. </p>  <p>The facility layout shall be such that equipment is placed at the most suitable location to ensure its immediate availability when operator intervention is required, allowing for safe and timely access during an AOO. </p>  <p>The design shall provide that, to the extent practicable, SSCs not involved in the initiation of an AOO will remain operable following the AOO.</p>
<a name="7.5.3"></a>
<h4 className="reportHeading4"><a name="P584_47641"></a>7.5.3 Design basis accidents </h4>  <p>To prevent progression to a more severe condition that may threaten the next barrier, the design shall include provision to automatically initiate the necessary safety systems where prompt and reliable action is required in response to a PIE. Where prompt action is not necessary, provision shall be made to support timely detection of and manual response to such conditions.</p>  <p>The design shall take into account operator actions that may be necessary to diagnose the state of the reactor and to put it into a stable long-term shutdown condition in a timely manner. Such operator actions shall be facilitated by the provision of adequate instrumentation to monitor reactor status and controls for manual operation of equipment. </p>  <p>Any equipment necessary for manual response and recovery processes shall be placed at the most suitable location to allow safe and timely worker access when needed.</p>
<a name="7.5.4"></a>
<h4 className="reportHeading4"><a name="P588_48559"></a>7.5.4 Beyond design basis accidents </h4>  <p>Credible BDBAs shall be identified based on operational experience, engineering judgment and the results of analysis and research. </p>  <p>Complementary design features shall be provided with the goal of preventing accident progression and mitigating the consequences of selected severe accidents if they do occur. </p>  <p>Complementary design features shall include design or procedural considerations, or both.</p>  <p>The rules and practices that have been applied to the complementary design features shall be identified. These rules and practices do not necessarily need to incorporate the same degree of conservatism as those applied to the design basis.</p>  <p>The design shall identify a radiological, toxic, combustible or otherwise hazardous gas or accident source term, if present, for use in the specification of the complementary design features for BDBAs.</p>  <p>In the case of multi-unit reactor facilities, the use of available support from other units shall only be relied upon if it can be established that the safe operation of the other units is not compromised.</p>  <p>To the extent practicable, the design shall provide biological shielding of appropriate composition and thickness to protect operational personnel during BDBAs, including severe accidents.</p>
<a name="7.5.5"></a>
<h4 className="reportHeading4"><a name="P596_49824"></a>7.5.5 Severe accidents</h4>  <p>The design shall ensure that no particular design feature or event makes a dominant contribution to the frequency of severe accidents, taking uncertainties into account.</p>  <p>Early in the design process, the various potential barriers to core degradation shall be identified and features that can be incorporated to halt core degradation at those barriers shall be provided.</p>  <p>The design shall identify the equipment to be used in the management of severe accidents. A reasonable level of confidence that this equipment will perform as intended in the case of a severe accident shall be demonstrated by environmental, fire and seismic assessments.</p>  <p>Particular attention shall be placed on the prevention of potential confinement bypass in accidents involving significant core degradation.</p>  <p>Confinement shall maintain its role as a leak-tight barrier for a period that allows sufficient time for the implementation of off-site emergency procedures following the onset of core damage. Confinement shall also prevent uncontrolled releases of radioactivity after this period.</p>  <p>Severe accident management guidelines shall be established, taking into account the reactor facility design features and the understanding of accident progression and associated phenomena.</p>  <p>The design shall prevent, to the extent practicable, recriticality following severe accidents.</p>
<a name="7.6"></a>
<h3 className="reportHeading3"><a name="P604_51186"></a>7.6 Postulated initiating events</h3>  <p>Postulated initiating events that can lead to AOOs or accidents shall be identified, and shall include credible failures or malfunctions of SSCs, operator errors, internal hazards and external hazards.</p>
<a name="7.6.1"></a>
<h4 className="reportHeading4"><a name="P606_51420"></a>7.6.1 Internal hazards </h4>  <p>The reactor facility design shall take into account the potential for internal hazards. Appropriate preventive and mitigation measures shall be provided to ensure that safety is not compromised. The subset of internal events that the reactor facility is designed to withstand shall be selected, and DBAs as well as BDBAs shall be determined from this subset.</p>  <p>Structures, systems and components important to safety shall be designed and located in a manner that minimizes the probability and effects of fires and explosions caused by external or internal events.</p>  <p>The design shall address the possible interaction of external and internal events, such as external events initiating internal fires or floods that may lead to the generation of missiles. </p>  <p>Where two fluid systems operating at different pressures are interconnected, failure of the interconnection shall be addressed.</p>
<a name="7.6.2"></a>
<h4 className="reportHeading4"><a name="P611_52319"></a>7.6.2 External hazards</h4>  <p>The design shall take into account all natural and human-induced external events that are relevant to the design and may be linked to significant radiological risk and other hazards. The subset of external events that the reactor facility is designed to withstand shall be selected, and DBAs as well as BDBAs shall be determined from this subset.</p>  <p>Various interactions between the reactor facility and the environment, such as population in the surrounding area, meteorology, hydrology, geology and seismology, shall be identified during the site evaluation and environmental assessment processes. These interactions shall be taken into account in determining the design basis for the reactor facility.</p>
<a name="7.6.3"></a>
<h4 className="reportHeading4"><a name="P614_53042"></a>7.6.3 Combinations of events </h4>  <p>Combinations of randomly occurring individual events that could credibly lead to AOOs, DBAs or BDBAs shall be considered in the design. Such combinations shall be identified early in the design phase and shall be confirmed using a systematic approach. </p>  <p>Events that may result from other events, such as a flood following an earthquake, shall be considered to be part of the original PIE.</p></a>
<h3 className="reportHeading3"><a name="P617_53457"></a>7.7 Design rules and limits </h3>  <p>The engineering design rules for all SSCs shall be specified. These rules shall comply with appropriate engineering safety and design practices such as Canadian Standards Association (CSA) and American Society of Mechanical Engineers (ASME) codes and standards<i>. </i></p>  <p>SSCs to which design limits are applicable shall be identified. These design limits shall be specified for normal operation, AOOs, DBAs and BDBAs, where practicable.</p>
<a name="7.8"></a>
<h3 className="reportHeading3"><a name="P620_53913"></a>7.8 Design for reliability </h3>  <p>All SSCs important to safety shall be designed with sufficient quality and reliability to meet the design limits. A reliability analysis shall be performed for each of these SSCs. </p>  <p>Where possible, the design shall provide for testing to demonstrate that these reliability requirements will be met during operation. </p>  <p>The safety systems and their support systems shall be designed to ensure that the probability of a safety system failure on demand from all causes is lower than 10<sup>-3</sup>.</p>
<a name="7.8.1"></a>
<h4 className="reportHeading4"><a name="P624_54421"></a>7.8.1 Common-cause failures </h4>  <p>The potential for common-cause failures of SSCs important to safety shall be addressed in determining where to apply the principles of diversity, separation and independence to achieve the necessary reliability. </p>  <p>The design shall provide sufficient physical separation between redundant divisions of safety systems, safety support systems and process systems. </p>  <p>The effectiveness of specified physical separation or protective measures against common-cause events shall be assessed.</p>  <p>Diversity shall be applied to redundant systems or components that perform the same safety function.</p>
<a name="7.8.2"></a>
<h4 className="reportHeading4"><a name="P629_55029"></a>7.8.2 Single failure criterion </h4>  <p>All safety groups shall be designed to function in the presence of a single failure. Each safety group shall perform all safety functions required for a PIE in the presence of any single component failure, as well as: </p>  <ul>
<li>all failures caused by that single failure</li>
<li>all identifiable but non-detectable failures, including those in the non-tested components</li>
<li>all failures and spurious system actions that cause (or are caused by) the PIE </li>  </ul>  <p>Each safety group shall be able to perform the required safety functions under the worst permissible systems configuration, taking into account such considerations as maintenance, testing, inspection and repair, and equipment outage. </p>  <p>Analysis of all possible single failures and associated consequential failures shall be conducted for each element of each safety group until all safety groups have been considered.</p>
<a name="7.8.3"></a>
<h4 className="reportHeading4"><a name="P636_55916"></a>7.8.3 Fail-safe design </h4>  <p>The principle of fail-safe design shall be applied to the design of SSCs important to safety.</p>
<a name="7.8.4"></a>
<h4 className="reportHeading4"><a name="P638_56033"></a>7.8.4 Allowance for equipment outages </h4>  <p>Considering utilization of the reactor facility, the design shall include provisions for adequate redundancy, reliability and effectiveness to allow for online maintenance and online testing of systems important to safety.</p>  <p>The design shall take into account the time allowed for each equipment outage and the respective response actions.</p>
<a name="7.8.5"></a>
<h4 className="reportHeading4"><a name="P641_56408"></a>7.8.5 Shared systems </h4>  <p>The design shall minimize the sharing of SSCs between safety systems, systems important to safety and process systems. If sharing is included in the design, it shall be demonstrated that SSC safety functions are not compromised.</p>
<a name="7.9"></a>
<h3 className="reportHeading3"><a name="P643_56658"></a>7.9 Pressure-retaining structures, systems and components </h3>  <p>All pressure-retaining SSCs shall be protected against overpressure conditions and shall be classified, designed, fabricated, erected, inspected and tested in accordance with established standards. </p>  <p>All pressure-retaining SSCs of the reactor coolant system and auxiliaries shall be designed with an appropriate safety margin in normal operation, AOOs, DBAs and, to the extent practicable, BDBAs. </p>  <p>The design shall minimize the likelihood of flaws in pressure boundaries. This shall include timely detection of flaws in pressure boundaries important to safety.</p>  <p>All pressure-boundary SSCs shall be designed to withstand static and dynamic loads anticipated in normal operation, AOOs and DBAs.</p>  <p>Pressure-retaining components and their layout in the reactor facility shall be designed to permit safe inspection of their pressure boundaries throughout their design life.</p>  <p>The design shall include measures for timely detection of degradation or changes in behaviour in pressure boundaries important to safety and include where practicable protection against postulated pressure boundary failures.</p>  <p>The operation of pressure relief devices shall not lead to uncontrolled releases of radioactive material or hazardous substances from the reactor facility.</p>  <p>Adequate isolation shall be provided at the interfaces between the reactor coolant system (RCS) and connecting systems operating at lower pressures to prevent the overpressure of such systems and possible loss of coolant accidents. </p>  <p>All pressure boundary piping and vessels shall be separated from electrical and control systems to the greatest extent practicable.</p>
<a name="7.10"></a>
<h3 className="reportHeading3"><a name="P653_58318"></a>7.10 Equipment environmental qualification</h3>  <p>The design shall provide for equipment environmental qualification to ensure the safety functions identified in section 4.2 can be carried out during post-accident conditions.</p>  <p>Equipment qualification shall also include consideration of any unusual environmental conditions that can reasonably be anticipated and that could arise during normal operation and AOOs.</p>  <p>Equipment credited to operate during BDBA and severe accident states shall be assessed to confirm its capacity to perform its intended function under the expected environmental conditions.</p>
<a name="7.11"></a>
<h3 className="reportHeading3"><a name="P657_58909"></a>7.11 Instrumentation and control </h3>  <p>All instrumentation and control equipment shall be designed in accordance with applicable modern codes and standards. The design shall consider normal operation, AOOs, DBAs and, to the extent practicable, BDBAs. The design shall consider the effects of aging as described in section 7.20.</p>
<a name="7.11.1"></a>
<h4 className="reportHeading4"><a name="P659_59231"></a>7.11.1 General considerations </h4>  <p>The design shall include provision<s>s</s> for instrumentation to monitor reactor facility variables and systems over the respective ranges for normal operation, AOOs, DBAs and, to the extent practicable, BDBAs, to ensure that adequate information can be obtained on reactor facility status. Particular attention shall be paid to the provision of startup instrumentation.</p>  <p>The design shall be such that the safety systems and any necessary support systems shall be reliably and independently operated. </p>  <p>The design shall include the capability to trend and automatically record measurements of any derived parameters that are important to safety. </p>  <p>Instrumentation shall be capable of measuring reactor facility parameters for emergency response purposes. </p>  <p>The design shall include reliable controls to maintain variables within specified operational ranges. </p>  <p>The design shall minimize the likelihood of operator action defeating the effectiveness of safety and control systems in normal operation and AOOs, without negating correct operator actions following a DBA. </p>  <p>System control interlocks shall be designed to minimize the likelihood of inadvertent manual or automatic override, and shall provide for situations when it is necessary to override interlocks to use equipment in a non-standard way. </p>  <p>Various safety actions shall be automated so that operator action is not necessary within a justified period of time from the onset of AOOs or DBAs. In addition, appropriate information shall be available to the operator to confirm the safety action.</p>
<a name="7.11.2"></a>
<h4 className="reportHeading4"><a name="P668_60796"></a>7.11.2 Use of computer-based systems or equipment </h4>  <p>Appropriate codes and standards for the development, testing and maintenance of computer hardware and software shall be applied to the design of systems or equipment important to safety that are controlled by computer. These codes and standards shall be implemented throughout the life cycle of the system or equipment. In this respect, special attention shall be given to the software development cycle. </p>  <p>A top-down software development process shall be used to facilitate verification and validation activities.</p>  <p>Software provided by a third-party vendor that is used in systems or equipment important to safety shall be developed, inspected and tested in accordance with standards of a category commensurate with the safety function provided by the given system or equipment. </p>  <p>The software development process, including control, testing and commissioning of design changes, as well as the results of independent assessment of that process, shall be reviewable and shall be systematically documented in the design documentation.</p>
<a name="7.11.3"></a>
<h4 className="reportHeading4"><a name="P673_61874"></a>7.11.3 Post-accident instrumentation </h4>  <p>Instrumentation and recording equipment shall be such that essential information is available to support reactor facility procedures during and following accidents.</p>
<a name="7.12"></a>
<h3 className="reportHeading3"><a name="P675_62076"></a>7.12 Safety support systems </h3>  <p>Safety support systems shall ensure that the fundamental safety functions are available during normal operation, AOO, DBA and, to the extent practicable, BDBA states. </p>  <p>Where normal services are provided from external sources, backup safety support systems shall be available on the site. </p>  <p>The design shall incorporate emergency safety support systems to cope with the possibility of loss of normal service and, where applicable, concurrent loss of backup systems. </p>  <p>The systems that provide normal services, backup services and emergency services shall have: </p>  <ul>
<li>sufficient capacity to meet the load requirements of the systems that perform the fundamental safety functions</li>
<li>availability and reliability that is commensurate with the systems to which they supply the service </li>  </ul>  <p>The emergency support systems shall: </p>  <ul>
<li>be independent of normal and backup systems</li>
<li>provide continuity of the service until long term (normal or backup) service is re-established</li>
<li>have a capacity margin that allows for future increases in demand</li>
<li>be testable under design load conditions</li>  </ul>
<a name="7.13"></a>
<h3 className="reportHeading3"><a name="P687_63173"></a>7.13 Guaranteed shutdown state </h3>  <p>The guaranteed shutdown state (GSS) shall provide a shutdown margin such that the core will remain subcritical for any credible changes in the core configuration and reactivity addition. </p>  <p>The design shall provide means to achieve GSS that will support safe production, experimental or maintenance activities of the reactor facility. </p>  <p>The design shall provide two independent means of preventing recriticality from any pathway or mechanism during the GSS.</p>
<a name="7.14"></a>
<h3 className="reportHeading3"><a name="P691_63656"></a>7.14 Provision for extended shutdown</h3>  <p>Provision shall be made in the design to meet the needs arising in long shutdown periods, such as the needs for maintaining the conditions of the nuclear fuel, the coolant or the moderator; for the inspection, periodic testing and maintenance of the relevant SSCs of the facility; and for providing physical protection. Special consideration shall be given to long-lived neutron poisons, which may affect the restarting of the reactor.</p>
<a name="7.15"></a>
<h3 className="reportHeading3"><a name="P693_64127"></a>7.15 Fire safety</h3>  <p>The design of the reactor facility, including external buildings and SSCs integral to reactor facility safe operation, shall adhere to applicable national fire codes and standards. </p>  <p>Fire is considered an internal hazard. The fundamental safety functions shall be available during and after a fire.</p>
<a name="7.15.1"></a>
<h4 className="reportHeading4"><a name="P696_64440"></a>7.15.1 General provisions </h4>  <p>The following fire safety objectives shall be achieved: </p>  <ul>
<li>prevent the initiation of fires</li>
<li>limit the propagation and effects of fires that do occur by:
<ol className="lower-alpha">
<li>quickly detecting and suppressing fires to limit damage</li>
<li>confining the spread of fires and fire by-products that have not been extinguished</li>
</ol>
</li>
<li>prevent loss of redundancy in safety and safety support systems</li>
<li>provide assurance of safe shutdown</li>
<li>ensure that monitoring of critical safety parameters remains available</li>
<li>prevent exposure, uncontrolled release or unacceptable dispersion of hazardous substances, nuclear material or radioactive material due to fires</li>
<li>prevent the detrimental effects of event mitigation efforts, both inside and outside of confinement</li>
<li>ensure structural sufficiency and stability in the event of fire</li>  </ul>  <p>Fire suppression systems shall be designed and located such that rupture or spurious/inadvertent operation will not significantly impair the capability of SSCs important to safety. </p>  <p>The design of buildings or structures shall use non-combustible or fire retardant and heat resistant materials.</p>
<a name="7.15.2"></a>
<h4 className="reportHeading4"><a name="P711_65555"></a>7.15.2 Safety to life </h4>  <p>The design shall provide protection to workers and the public from event sequences involving fire or explosion in accordance with established radiological, toxicological and human factors criteria.</p>
<a name="7.15.3"></a>
<h4 className="reportHeading4"><a name="P713_65775"></a>7.15.3 Environmental protection and nuclear safety </h4>  <p>The design for fire safety shall minimize the release and dispersion of hazardous substances or radioactive material to the environment, and shall minimize the impact of any releases or dispersions.</p>
<a name="7.16"></a>
<h3 className="reportHeading3"><a name="P715_66025"></a>7.16 Seismic qualification </h3>  <p>The seismic qualification of all SSCs shall comply with the requirements of Canadian or equivalent standards. </p>  <p>The design shall include instrumentation for monitoring seismic activity at the site for the life of the reactor facility.</p>
<a name="7.16.1"></a>
<h4 className="reportHeading4"><a name="P718_66285"></a>7.16.1 Seismic design and classification </h4>  <p>Structures, systems and components important to safety that are credited to withstand a design basis earthquake shall be identified and qualified accordingly. </p>  <p>The design of these SSCs shall meet the design basis earthquake criteria to maintain all essential attributes, such as pressure boundary integrity, leak-tightness, operability and proper position, in the event of a design basis earthquake. </p>  <p>The design shall provide that no substantive damage to these SSCs will be caused by the failure of any other SSC under design basis earthquake conditions. </p>  <p>Seismic fragility levels shall be evaluated for SSCs important to safety by analysis or, where possible, by testing.</p>
<a name="7.17"></a>
<h3 className="reportHeading3"><a name="P723_66997"></a>7.17 In-service testing, maintenance, repair, inspection and monitoring </h3>  <p>To maintain the reactor facility within the boundaries of the design, the design shall be such that SSCs important to safety can be calibrated, tested, maintained and repaired (or replaced), inspected and monitored over the lifetime of the reactor facility.</p>
<a name="7.18"></a>
<h3 className="reportHeading3"><a name="P725_67326"></a>7.18 Civil structures</h3>
<a name="7.18.1"></a>
<h4 className="reportHeading4"><a name="P726_67348"></a>7.18.1 Design </h4>  <p>Civil structures important to safety shall be designed for normal operation, AOOs, DBAs and, to the extent practicable, BDBAs. </p>  <p>The required performance for the safety functions of the civil structures under normal operation, AOOs, DBAs, and BDBAs shall be specified.</p>  <p>Civil structures important to safety shall be designed to keep radiation levels and radioactive releases as required by section 4.3.</p>  <p>Civil structures important to safety shall be designed so as to minimize the probabilities and effects of internal and external hazards. </p>  <p>Civil structures shall be designed to meet the serviceability, strength and stability requirements for all possible load combinations under normal operation, AOO, DBA and, to the extent practicable, BDBA conditions, and in the event of external hazards. </p>  <p>The design shall specify and provide for all loads and load combinations, with due consideration given to the concurrence probability and loading time history. Environmental effects shall be considered in the design of civil structures and the selection of construction materials. </p>  <p>The required degree of leak tightness of civil structures containing radioactive material and the requirements for the ventilation system shall be specified in accordance with the safety analysis of the reactor facility and its utilization.</p>
<a name="7.18.2"></a>
<h4 className="reportHeading4"><a name="P734_68672"></a>7.18.2 Surveillance </h4>  <p>The design shall enable implementation of periodic inspection programs for structures related to nuclear safety to verify as-constructed conditions. </p>  <p>The design shall facilitate monitoring in-service for degradations that may compromise the intended design function of the structures. </p>  <p>The design shall permit monitoring of foundation settling.</p>
<a name="7.18.3"></a>
<h4 className="reportHeading4"><a name="P738_69035"></a>7.18.3 Lifting of large loads </h4>  <p>The lifting of large and heavy loads, particularly those containing radioactive material, shall be accounted for in the reactor facility design. This shall include identification of the large loads, lay down areas and situations where they need to be lifted over areas of the reactor facility that are critical to safety.</p>
<a name="7.19"></a>
<h3 className="reportHeading3"><a name="P740_69386"></a>7.19 Commissioning </h3>  <p>The design shall specify commissioning requirements including data to be recorded and retained. In particular, the design shall clearly identify any non-standard or special commissioning requirements, which shall be specified in design documentation. </p>  <p>The design shall include provisions to facilitate the commissioning activities. In particular, the design of the instrumentation and control systems shall make provisions for startup neutron sources and dedicated startup instrumentation for conditions in which they are needed.</p>
<a name="7.20"></a>
<h3 className="reportHeading3"><a name="P743_69933"></a>7.20 Aging and wear </h3>  <p>The design shall provide for the effects of aging and wear on SSCs important to safety.</p>
<a name="7.21"></a>
<h3 className="reportHeading3"><a name="P745_70041"></a>7.21 Control of foreign material </h3>  <p>The design shall provide for the exclusion and removal of all foreign material and corrosion products that may have an impact on safety.</p>
<a name="7.22"></a>
<h3 className="reportHeading3"><a name="P747_70211"></a>7.22 Transport and packaging for fuel and radioactive waste </h3>  <p>The design shall incorporate appropriate features to facilitate transport and handling of new fuel, used fuel and radioactive waste in accordance with the requirements of <i>Packaging and Transport of Nuclear Substances Regulations.</i></p>
<a name="7.23"></a>
<h3 className="reportHeading3"><a name="P749_70500"></a>7.23 Escape routes and means of communication </h3>  <p>The design shall provide a sufficient number of safe escape routes that will be available in all reactor states, including seismic events. </p>  <p>Suitable alarm systems and means of communication shall be available at all times to warn and instruct all persons in the reactor facility and on the site.</p>
<a name="7.24"></a>
<h3 className="reportHeading3"><a name="P752_70841"></a>7.24 Human factors </h3>  <p>The design shall include a Human Factors Engineering Program Plan. </p>  <p>Relevant and proven systematic analysis techniques shall be used to address human factors aspects of the design. </p>  <p>The human factors engineering program shall facilitate the interface between the operating personnel and the reactor facility by promoting attention to reactor facility layout and procedures, maintenance, inspection, training, commissioning, decommissioning and the application of ergonomic principles to the design of working areas and working environments. </p>  <p>Appropriate and clear distinction between the functions assigned to operating personnel and those assigned to automatic systems shall be facilitated by systematic consideration of human factors and the human-machine interface. </p>  <p>The human-machine interfaces in the reactor facility and, in particular, the main control room, the secondary control room and the emergency support centre shall provide operators with necessary and appropriate information in a usable format that is compatible with the necessary decision and action times. </p>  <p>Human factors verification and validation plans shall be established for all appropriate stages of the design process to confirm that the design conforms to modern human factors codes and standards, meets human factors requirements and adequately accommodates all necessary operator actions. </p>  <p>The design shall identify and provide the type of information that facilitates an operator&#8217;s ability to readily: </p>  <ul>
<li>assess the general state of the reactor facility, whether in normal operating, AOO or DBA states</li>
<li>confirm that the designed automatic safety actions are being carried out </li>
<li>determine the appropriate operator-initiated safety actions to be taken </li>
<li>identify the parameters associated with individual plant systems and equipment </li>
<li>confirm that the necessary actions can be initiated safely</li>  </ul>  <p>Design goals shall promote the success of operator action by having due regard for the time available for response, the physical environment to be expected and the associated psychological demands made on the operator. </p>  <p>The need for operator intervention on a short time scale shall be kept to a minimum.</p>
<a name="7.25"></a>
<h3 className="reportHeading3"><a name="P767_73041"></a>7.25 Robustness against malevolent acts</h3>  <p>The physical security protection system shall:</p>  <ul>
<li>use a risk-informed process, such as a threat and risk assessment (TRA), that forms the basis for a design strategy to reduce the likelihood of theft and/or sabotage of nuclear substances that are used, stored, processed or otherwise possessed in accordance with the requirements of the <i>General Nuclear Safety and Control Regulations </i>and <i>Class I Nuclear Facilities Regulations</i></li>
<li>physical security measures shall be designed&nbsp;in accordance with the requirements of the <i>Nuclear Security Regulations,</i> and shall also include any additional mitigation measures required to address the adversarial profile defined in the design basis threats (DBTs)</li>  </ul>
<a name="7.25.1"></a>
<h4 className="reportHeading4"><a name="P771_73773"></a>7.25.1 Design principles </h4>  <p>The design shall be such that the reactor facility and any other on-site facilities with potential to release large amounts of radioactive material are protected against malevolent acts. </p>  <p>Consistent with the defence in depth concept, the design shall provide multiple barriers for protection against malevolent acts, including physical protection systems, engineered safety provisions and measures for post-event management, as appropriate. </p>  <p>The physical protection system shall be designed and evaluated to address DBTs. Beyond design basis threats (BDBTs) shall be assessed in order to establish means of mitigation, to the extent practicable.</p>
<a name="7.25.2"></a>
<h4 className="reportHeading4"><a name="P775_74442"></a>7.25.2 Design methods </h4>  <p>A methodology shall be developed for assessing the challenges imposed by DBTs and evaluating the capabilities for meeting these challenges, including a &#8216;site-specific&#8217; TRA to identify associated threats, risks and vulnerabilities. The methodology shall apply conservative design measures and sound engineering practices. </p>  <p>A methodology for assessing the challenges associated with BDBTs shall be developed to determine the margins available for reactor shutdown, fuel cooling and containment of radioactivity. </p>  <p>The reactor facility design shall consider the role of structures, pathways, equipment and instrumentation in providing detection, delay and response to threats. </p>  <p>Locations of SSCs that need to be protected shall be identified as vital areas and shall be taken into account in the design and verification of robustness. </p>  <p>The design shall provide a means for access control and detection, and for minimizing the number of access and egress points.</p>  <p>The design shall address the need for placement of civil utilities to minimize access requirements for such activities as repair and maintenance in order to reduce threats where nuclear material may be used, processed, stored or otherwise possessed including vital areas.</p>
<a name="7.25.3"></a>
<h4 className="reportHeading4"><a name="P782_75693"></a>7.25.3 Acceptance criteria </h4>  <p>The physical security protection system shall be designed to provide an effective detection, assessment, delay-associated response capability prior to the theft or sabotage of nuclear material. </p>  <p>All fundamental safety functions shall remain effective for DBTs.</p>  <p>For BDBTs, there shall be at least one means of reactor shutdown and core cooling; however, degradation of the confinement barrier may occur. For BDBTs, any release of radioactive material shall be within limits of the safety goals.</p>
<a name="7.25.4"></a>
<h4 className="reportHeading4"><a name="P786_76212"></a>7.25.4 Prescribed information</h4>  <p>Prescribed information to be encompassed by the physical security protection system of the reactor facility shall be identified, complete and in agreement with<i> </i>section 21(1) of the<i> General Nuclear Safety and Control Regulations.</i></p>
<a name="7.26"></a>
<h3 className="reportHeading3"><a name="P788_76470"></a>7.26 Safeguards </h3>  <p>The design shall ensure that the obligations arising from Canada&#8217;s international agreements and requirements pertaining to safeguards and non-proliferation are met.</p>  <p>The design and the design process shall ensure compliance with the obligations arising from the safeguards agreement between Canada and the IAEA. In general, these features shall be associated with the permanent installation of safeguards equipment and the provision of services required for ongoing operation of that equipment.</p>
<a name="7.27"></a>
<h3 className="reportHeading3"><a name="P791_76981"></a>7.27 Provision for utilization and modification</h3>  <p>Special precautions shall be taken in the design in relation to the utilization and modification of the reactor facility to ensure that the configuration of the reactor facility is known at all times, and that the safety case is valid for that configuration.</p>  <p>The safety case shall be made with consideration of utilization of equipment included in the reactor facility as it can:</p>  <ul>
<li>cause hazards directly if it fails</li>
<li>cause hazards indirectly by affecting the safe operation of the reactor</li>
<li>increase the hazard due to an initiating event by its consequent failure and the effects of this on the event sequence</li>  </ul>  <p>Every proposed utilization or modification of equipment (e.g., experimental devices) included in the reactor facility that may have a major significance for safety shall be designed in accordance with the same principles as applied to the reactor facility. In particular, all experimental devices using the reactor shall be designed to standards equivalent to those applied for the reactor itself and shall be fully compatible in terms of the materials used, the structural integrity and the provision for radiation protection. Further requirements for the design of experimental devices are in sections 8.1 and 8.2.</p>  <p>Where experimental devices penetrate the reactor boundaries, they shall be designed to preserve the means of confinement and shielding of the reactor. Safety systems for experimental devices shall be designed to protect both the device and the reactor.</p>  <p>The safety case shall also be made with consideration of utilization or modification of equipment that is not part of the reactor facility (e.g., independent adjacent facilities making use of heat, steam or power produced by the reactor facility).</p>
<a name="7.28"></a>
<h3 className="reportHeading3"><a name="P800_78757"></a>7.28 Reactor facility layout</h3>  <p>The design shall take into account the interfaces between the safety and security provisions of the reactor facility and other aspects of the reactor facility layout.</p>  <p>When there are conflicting design requirements in the determination of reactor facility layout requirements, the design shall provide an assessment of options, demonstrating that an optimized configuration has been sought for the reactor facility layout.</p>
<a name="7.29"></a>
<h3 className="reportHeading3"><a name="P803_79205"></a>7.29 Decommissioning </h3>  <p>During the design, future reactor facility decommissioning and dismantling activities shall be taken into account such that:</p>  <ul>
<li>materials are selected for the construction and fabrication of reactor components and structures with the purpose of minimizing eventual quantities of radioactive waste and assisting decontamination</li>
<li>reactor facility layout is designed to facilitate access for decommissioning or dismantling activities </li>
<li>consideration is given to the future potential requirements for storage of radioactive waste generated as a result of new facilities being built or existing facilities being expanded</li>  </ul>
<a name="8.0"></a>
<h2 className="reportHeading2"><a name="P808_79845"></a>8.0 System-specific Requirements</h2>
<a name="8.1"></a>
<h3 className="reportHeading3"><a name="P809_79878"></a>8.1 Reactor core </h3>  <p>All foreseeable reactor core configurations from the initial core through to the equilibrium core for various appropriate operating schedules shall be considered in the core design.</p>  <p>Appropriate neutronic, thermal-hydraulic, mechanical, material, chemical and irradiation-related considerations associated with the reactor as a whole shall be taken into account in the design of fuel elements and assemblies, reflectors and other core components.</p>  <p>The design shall provide protection against deformations or other changes to reactor structures that have the potential to adversely affect the behaviour of the core or associated systems. </p>  <p>The anticipated upper limit of possible deformation or other changes due to irradiation conditions shall be evaluated. These analyses shall be supported by data from experiments and from experience with irradiation.</p>  <p>The reactor core and associated structures and cooling systems shall:</p>  <ul>
<li>withstand static and dynamic loading, including thermal expansion and contraction</li>
<li>withstand vibration (such as flow-induced and acoustic vibration)</li>
<li>ensure chemical compatibility</li>
<li>meet thermal material limits</li>
<li>meet radiation damage limits to materials</li>  </ul>  <p>The reactor core shall be designed so that the reactor can be shutdown, cooled and held subcritical with an adequate margin for all operational states, AOOs and DBAs. The state of the reactor shall be assessed for selected BDBAs (refer to section 7.5).</p>  <p>The design shall provide the following safety functions under normal operation, transient and accident conditions:</p>  <ul>
<li>prevention of unacceptable transients and instabilities</li>
<li>prevention of progression of AOOs to DBAs</li>
<li>reactor shutdown, as necessary</li>
<li>safe shutdown state of the reactor</li>  </ul>  <p>The shutdown margin for all shutdown states shall be such that the core will remain subcritical for any credible changes in the core configuration and reactivity addition.</p>  <p>If operator intervention is required to keep the reactor in a shutdown state, the feasibility, timeliness and effectiveness of such intervention shall be demonstrated.</p>  <p>The design of the reactor core shall be such that:</p>  <ul>
<li>rapid changes in reactor power can be controlled by a combination of&nbsp;the inherent neutronic characteristics of the core, its thermal-hydraulic characteristics and the capabilities of the control and shutdown systems for all operational states and design basis accident conditions </li>
<li>power oscillations can be reliably and readily detected and controlled</li>
<li>specified design limits are not exceeded during normal operation, AOOs and DBAs</li>
<li>prompt criticality is avoided in any accident</li>
<li>when prompt criticality can be exceeded for testing, it is demonstrated experimentally that the resulting energy deposition does not result in damage to fuel or the reactor coolant boundary</li>  </ul>  <p>The reactor core, including the fuel elements, reactivity control mechanisms, experimental devices, reflectors, fuel channel and structural parts, shall be designed to maintain the relevant parameters within specified limits for normal and accident conditions.</p>  <p>The design of the reactor core shall incorporate safety margins as part of defence in depth to ensure that the permissible design limits, taking into account engineering tolerances and uncertainties associated with reactor behaviour under accident conditions, are not exceeded.</p>  <p>The reactor core design shall include provisions for a guaranteed shutdown state as described in section 7.13.</p>  <p>The core design shall include provisions for monitoring, surveillance, inspections, tests, analyses and commissioning programs, as well as periodic verification and testing programs to assure that the reactor facility performs as designed and meets the acceptance criteria.</p>
<a name="8.1.1"></a>
<h4 className="reportHeading4"><a name="P838_83610"></a>8.1.1 Experimental devices</h4>  <p>This section is applicable when the reactor core employs experimental devices such as loops for fuel and material testing, irradiation sites or beam tubes.</p>  <p>The reactor behaviour under normal operation, transient and accident conditions shall be analyzed, including experimental devices. Any safety impact of any failure of experimental devices on the reactor core or that of any failure of the reactor core on the experimental devices shall be addressed.</p>  <p>A design basis shall be established for each experimental device associated with the reactor facility. The radioactive inventory of the experimental device, as well as the potential for the generation or release of energy, shall be taken into consideration. </p>  <p>If safety devices are interconnected with the safety system, they shall be designed to maintain the quality of the safety system. The possibility of deleterious interactions with the safety system shall be assessed.</p>  <p>Where necessary for the safety of the reactor and the safety of the experiment, the design shall provide appropriate monitoring of the parameters for experiments in the main control room and shall include specific safety features, if necessary, for the reactor systems, experimental devices and any other related facility.</p>  <p>Requirements for the safe utilization of experimental devices shall be included in the OLCs.</p>  <p>The preliminary decommissioning plan for the reactor facility shall include the decommissioning of any experimental device.</p>
<a name="8.1.2"></a>
<h4 className="reportHeading4"><a name="P846_85099"></a>8.1.2 Fuel elements and assemblies</h4>  <p>The fuel shall be qualified for operation, either through experience with the same type of fuel in other reactors or through a program of experimental testing and analysis, to ensure that fuel assembly requirements are met. Fuel design and design limits shall use a verified and auditable knowledge base using data from experiments and from experience with irradiation. </p>  <p>The fuel assembly design shall include components such as the fuel material, matrix material, cladding, spacers, support plates and movable rods inside the assembly. The fuel assembly design shall also identify all interfacing systems.</p>  <p>Fuel assemblies and the associated components shall be designed to withstand the anticipated irradiation and environmental conditions in the reactor core, and all processes of deterioration that can occur in normal operation and AOOs.</p>  <p>The design shall account for all known degradation mechanisms, with allowance being made for uncertainties in data, calculations and fuel fabrication.</p>  <p>Fuel design limits shall include, as a minimum, limits on fuel power or temperature, fuel burn-up and leakage of fission products in the reactor cooling system. </p>  <p>Analyses shall be performed to show that the intended irradiation conditions and limits in the reactor core (such as fission density, total fissions at the end of lifetime and neutron fluence) are acceptable and will not lead to undue deformation or swelling of the fuel elements. The anticipated upper limit of possible deformation or other changes shall be evaluated. These analyses shall be supported by data from experiments and from experience with irradiation. </p>  <p>In DBAs, the fuel, its assembly and its component parts shall remain in position with no distortion that would prevent effective post-accident core cooling or interfere with the actions of reactivity control devices or mechanisms. The design shall establish acceptance criteria for DBAs that are consistent with these expectations.</p>  <p>Reactor and fuel assembly design shall take into account changes in fuel management strategy or in operating conditions over the lifetime of the reactor facility. </p>  <p>Fuel assemblies shall be designed to permit adequate inspection of their structures and component parts prior to and following irradiation.</p>  <p>At the design stage, consideration shall be given to long-term storage of irradiated fuel assemblies after discharge from the reactor (see also section 8.12).</p>  <p>There shall be provisions in the design to monitor the integrity of the fuel.</p>
<a name="8.1.3"></a>
<h4 className="reportHeading4"><a name="P858_87619"></a>8.1.3 Control system </h4>  <p>The design shall provide the means for detecting and controlling reactivity and distributions of neutron flux. Adequate means shall be provided to maintain both bulk and spatial power distributions within a predetermined range. The reactivity control mechanisms limit the positive reactivity insertion rate to a level that prevents prompt criticality (unless the design allows for prompt criticality as in section 8.1), and meets fuel acceptance criteria during transients. </p>  <p>No single failure in the reactivity control system shall prevent the system from fulfilling its safety function when required. </p>  <p>The maximum rate of addition of positive reactivity allowed by the reactivity control system, or by an experiment when employed, shall be specified and shall be limited to values justified.</p>  <p>These requirements shall apply to neutron flux in all regions of the core during normal operation, including initial startup, after shutdown, startup after shutdown, and during and after refuelling states, and during AOOs.</p>  <p>The reactivity control system, combined with the inherent characteristics of the reactor and the selected operating limits and conditions, shall minimize the need for shutdown action. </p>  <p>The reactivity control system and the inherent reactor characteristics shall keep all critical reactor parameters within the specified limits for a wide range of AOOs, and shall reduce the possibility of AOOs from escalating to accident conditions.</p>
<a name="8.2"></a>
<h3 className="reportHeading3"><a name="P865_89084"></a>8.2 Reactor coolant system </h3>  <p>The design shall provide the reactor coolant system and its associated components and auxiliary systems with sufficient margin to ensure that the appropriate design limits of the reactor coolant boundary are not exceeded in normal operation, AOOs or DBAs. </p>  <p>Materials selection shall be such that corrosion and subsequent generation of activated corrosion products (leading to radiation field build-up) is minimized.</p>  <p>The design shall reflect consideration of all conditions of the boundary material in normal operation (including maintenance and testing), AOOs and DBAs, as well as expected end-of-life properties affected by aging mechanisms, the rate of deterioration and the initial state of the components. </p>  <p>The design shall provide a system capable of detecting and monitoring leakage from the reactor coolant system. </p>  <p>There shall be provisions in the&nbsp;design of the reactor coolant system to allow for online&nbsp;monitoring of radionuclide concentrations in the coolant during normal operation.</p>
<a name="8.2.1"></a>
<h4 className="reportHeading4"><a name="P871_90103"></a>8.2.1 In-service coolant boundary inspection </h4>  <p>The components of the reactor coolant boundary shall be designed, manufactured and arranged in a manner that permits adequate inspections and tests of the boundary throughout the lifetime of the reactor facility. </p>  <p>The design shall facilitate surveillance to determine the conditions of materials for which changes in material properties are anticipated.</p>
<a name="8.2.2"></a>
<h4 className="reportHeading4"><a name="P874_90501"></a>8.2.2 Inventory </h4>  <p>Taking volumetric changes and leakage into account, the design shall provide control of coolant inventory and pressure to ensure that specified design limits are not exceeded in normal operation. This requirement extends to the provision of adequate capacity (flow rate and storage volumes) in the systems performing this function.</p>
<a name="8.2.3"></a>
<h4 className="reportHeading4"><a name="P876_90849"></a>8.2.3 Cleanup </h4>  <p>The design shall provide for adequate removal of radioactive substances from the reactor coolant, including activated corrosion products and fission products leaking from the fuel.</p>  <p>Provisions shall be made to monitor and control the properties of all coolant systems, as appropriate.</p>
<a name="8.2.4"></a>
<h4 className="reportHeading4"><a name="P879_91145"></a>8.2.4 Removal of residual heat from reactor core </h4>  <p>The design shall provide a means (i.e., backup) of removing residual heat from the reactor for all conditions of the reactor coolant system (RCS). The backup shall be independent of the configuration in use. </p>  <p>The means of removing residual heat shall meet reliability requirements on the assumptions of a single failure and the loss of off-site power, by incorporating suitable redundancy, diversity and independence. </p>  <p>Heat removal shall be at a rate that prevents the specified design limits of the fuel and the reactor coolant boundary from being exceeded.</p>
<a name="8.3"></a>
<h3 className="reportHeading3"><a name="P883_91751"></a>8.3 Secondary side cooling system</h3>  <p>When a steam supply system is installed, the system design shall meet the applicable requirements in RD-337, <i>Design of New Nuclear Power Plants. </i></p>  <p>When a steam supply system is not installed, the system design shall meet the applicable requirements set out in section 8.2.</p>
<a name="8.4"></a>
<h3 className="reportHeading3"><a name="P886_92054"></a>8.4 Means of shutdown </h3>  <p>The design shall provide means of reactor shutdown capable of reducing reactor power to a low value, and maintaining that power for the required duration, when the reactor power control system and the inherent characteristics are insufficient or incapable of maintaining reactor power within the requirements of the OLCs. </p>  <p>Sufficient negative reactivity shall be available in the reactivity control devices in order that the reactor can be brought to subcritical condition and maintained subcritical in all operational states and in accident conditions, with account taken of the experimental arrangements with the highest positive reactivity contribution. In the design of reactivity control devices, account shall be taken of aging and the effects of irradiation, such as burnup, changes in physical properties and the production of gas.</p>  <p>The design shall include two separate, independent and diverse means of shutting down the reactor.</p>  <p>At least one means of shutdown shall be independently capable of quickly rendering the nuclear reactor subcritical from normal operation, in AOOs and in DBAs by an adequate margin, on the assumption of a single failure.</p>  <p>At least one means of shutdown shall be independently capable of rendering the reactor subcritical from normal operation, in AOOs and in DBAs, and maintaining the reactor subcritical by an adequate margin and with high reliability for even the most reactive conditions of the core. </p>  <p>Redundancy shall be provided in the fast-acting means of shutdown if the credited means of reactivity control fails during any AOO or DBA, and inherent core characteristics are unable to maintain the reactor within specified limits. </p>  <p>While resetting the means of shutdown, the maximum degree of positive reactivity and the maximum rate of increase shall be within the capacity of the reactor control system. </p>  <p>To improve reliability, stored energy shall be used in shutdown actuation. </p>  <p>The effectiveness of the means of shutdown (i.e., speed of action and shutdown margin) shall be within specified limits, and the possibility of recriticality or reactivity excursion following a PIE shall be minimized. </p>  <p>No single failure in the shutdown system shall prevent the system from fulfilling its safety function when required. </p>  <p>One or more manual initiations suitable for emergency shutdown may be necessary; this shall be reflected in the design.</p>  <p>Instrumentation shall be provided and tests shall be specified to be performed to ensure that the means of shutdown are always available in the state stipulated for the given condition of the reactor. For computer-based digital reactivity control systems, verification and validation of the software shall be performed.</p>
<a name="8.4.1"></a>
<h4 className="reportHeading4"><a name="P899_94769"></a>8.4.1 Reactor trip parameters </h4>  <p>Derived acceptance criteria shall be specified for reactor trip parameter effectiveness for all AOOs and DBAs, and a safety analysis shall be performed to demonstrate the effectiveness of the means of shutdown. </p>  <p>Trip parameters shall take into account effects of SSC aging on effectiveness, as well as experimental devices when employed in the reactor. </p>  <p>Limiting conditions for safe operation shall be prepared for experimental devices and incorporated into OLCs. </p>  <p>For each credited means of shutdown, the design shall specify a direct trip parameter to initiate reactor shutdown for all AOOs and DBAs in time to meet the respective derived acceptance criteria. Where a direct trip parameter does not exist for a given credited means, two diverse trip parameters shall be specified for that means. </p>  <p>For all AOOs and DBAs, there shall be at least two diverse trip parameters unless it can be shown that failure to trip will not lead to unacceptable consequences. </p>  <p>There shall be no gap in trip coverage for any operating condition (e.g., power, temperature) within the OLCs. This shall be ensured by providing additional trip parameters if necessary. </p>  <p>The extent of trip coverage provided by all available parameters shall be documented for the entire spectrum of failures for each set of PIEs. </p>  <p>An assessment of the accuracy and the potential failure modes of the trip parameters shall be provided in the design documentation.</p>
<a name="8.4.2"></a>
<h4 className="reportHeading4"><a name="P908_96219"></a>8.4.2 Reliability </h4>  <p>The design shall permit ongoing demonstration that each means of shutdown is being operated and maintained in a manner that ensures continued adherence to reliability and effectiveness requirements. </p>  <p>The design shall specify periodic testing of the systems and their components at a frequency commensurate with applicable requirements.</p>
<a name="8.4.3"></a>
<h4 className="reportHeading4"><a name="P911_96572"></a>8.4.3 Monitoring and operator action </h4>  <p>The design shall ensure that once automatic shutdown is initiated, an operator cannot prevent its actuation. </p>  <p>The need for manual shutdown actuation shall be minimized. </p>  <p>The means for monitoring shutdown status and manual actuation shall be provided in control facilities (refer to section 8.10).</p>
<a name="8.5"></a>
<h3 className="reportHeading3"><a name="P915_96904"></a>8.5 Emergency core cooling system </h3>  <p>Where required, an emergency core cooling system (ECCS) shall be provided to prevent damage to the fuel in the event of a loss of coolant accident. The accidents with which the system must cope shall be identified and analyses shall be performed to show that the system fulfils the requirements.</p>  <p>The design shall demonstrate the effectiveness of ECCS, including the effect on core reactivity of mixing the ECCS coolant with reactor coolant.</p>  <p>The ECCS shall meet the following criteria for all DBAs involving loss of coolant:</p>  <ul>
<li>all fuel in the reactor and all fuel assemblies are kept in a configuration such that continued removal of the residual heat produced by the fuel can be maintained</li>
<li>a continued cooling flow (recovery flow) can prevent further damage to the fuel after adequate cooling of the fuel is re-established by the ECCS</li>  </ul>  <p>Special procedures for cooling the core shall be considered, to the extent practicable, in the case of selected BDBAs.</p>  <p>The ECCS recovery flow path shall be such that impediment by debris or other material to the recovery of coolant following a loss of coolant accident is avoided. </p>  <p>Maintenance and reliability testing that is conducted when ECCS availability is required shall be carried out without a reduction in the effectiveness of the system below the OLCs. </p>  <p>The emergency core cooling system shall be designed to permit the periodic inspection of components and shall be designed for appropriate periodic functional testing for the verification of performance.</p>  <p>In the event of an accident when injection of emergency coolant is required, it shall not be readily possible for an operator to prevent the injection from taking place. </p>  <p>All ECCS components that may contain radioactive material shall be located inside the confinement or in an extension of the confinement. </p>  <p>All ECCS piping in an extension of confinement that could contain radioactivity from the reactor core shall meet the following requirements: </p>  <ul>
<li>the requirements for metal penetrations of confinement</li>
<li>all piping and components of the ECCS recovery flow path that are open to the confinement atmosphere are designed for a pressure greater than the confinement design pressure</li>
<li>all ECCS recovery flow paths are housed in a confinement structure that prevents leakage of radioactivity to the environment and to adjacent structures</li>
<li>this housing includes detection capability for leakage of radioactivity, and the capability to either return the radioactivity to the flow path or to collect the radioactivity and store or process it in a system designed for this purpose</li>  </ul>  <p>Intermediate or secondary cooling piping loops shall have leak detection, whether the ECCS recovery system is inside or outside of confinement. The leak detection shall be such that on detection of radioactivity from the ECCS recovery flow, the loops can be isolated as per the requirements for confinement isolation. </p>  <p>Inadvertent operation of all or part of the ECCS shall have no detrimental effect on reactor safety.</p>
<a name="8.6"></a>
<h3 className="reportHeading3"><a name="P934_99935"></a>8.6 Means of confinement </h3>  <p>Confinement is a fundamental safety function and a means to achieve this safety function shall be provided for any reactor facility.</p>
<a name="8.6.1"></a>
<h4 className="reportHeading4"><a name="P936_100093"></a>8.6.1 Confinement features</h4>  <p>The confinement shall be designed to ensure that a release of radioactive material following an accident involving disruption of the core is within acceptable limits. The confinement shall include physical barriers designed to prevent or mitigate an unplanned release of radioactive material to the environment during normal operation, AOOs, DBAs and, to the extent practicable, BDBAs.</p>  <p>To achieve the fundamental function of confinement, the means of confinement shall require:</p>  <ul>
<li>control of the pressure and temperature</li>
<li>isolation of the confinement envelope</li>
<li>leak-tightness of the confinement envelope</li>
<li>a controlled point of release (which is usually elevated)</li>
<li>control of combustible sources</li>
<li>reduction of the concentration of free radioactive material in the confinement envelope</li>
<li>protection against external events</li>
<li>radiation shielding</li>  </ul>  <p>The means of confinement shall be designed with sufficient reliability to meet two important general requirements. </p>  <p>First, the features for confinement shall be determined from the safety analysis. The accidents which confinement must be able to handle shall be specified. Analyses shall be provided to demonstrate that the requirements for confinement have been fulfilled. Those systems and subsystems that are essential for the proper operation of confinement shall be identified.</p>  <p>Second, the design basis and the various modes of operation of an engineered safety feature shall be defined. The extent to which confinement is automated and the conditions for which its manual overriding is warranted shall be identified. The following features shall be incorporated into the design of confinement:</p>  <ol className="lower-alpha">
<li>component reliability, system independence, redundancy, fail-safe characteristics, diversity and physical separation of redundant systems</li>
<li>the use of material to withstand the postulated DBAs and BDBAs (e.g., in relation to radiation levels or radiolytic decomposition)</li>
<li>provisions for inspection, periodic testing and maintenance (including under simulated DBA conditions, where possible) to verify that the confinement system continues to function or is in a state of readiness to perform its functions and will be reliable and effective upon demand</li>  </ol>  <p>For the proper functioning of the means of confinement, the pressure within a barrier shall be set at such a level as to prevent the uncontrolled release of radioactive material to the environment from the barrier. In setting this pressure, variations in atmospheric conditions (e.g., wind speed, atmospheric pressure) shall be taken into account. </p>  <p>In the design of the means of confinement, the effects of extreme conditions (e.g., explosions within the barrier) and environmental conditions due to accidents, including conditions arising from the external and internal events, shall be taken into account in accordance with the design basis.</p>  <p>The barriers shall be designed with suitable margins for the highest calculated pressure and temperature loads expected in DBA and selected BDBA conditions.</p>  <p>The acceptable release rate under DBA and selected BDBA conditions shall be determined with account taken of the source term and other parameters such as filtration, the point of release, environmental conditions, and the pressure and temperature under DBA and selected BDBA conditions.</p>  <p>Each penetration of the barriers shall be capable of being automatically and reliably sealed in the event of DBA or BDBA conditions arising (including those that may produce increases in pressure) in which the control of leakage from the barrier is essential to prevent the release of radioactive material to the environment in excess of acceptable limits.</p>  <p>Provisions to enable initial and periodic performance tests to check air leakage rates and the operational performance of the ventilation system shall be included in the design.</p>  <p>Where confinement is dependent on the efficiency of filters, provision shall be made as appropriate for <i>in situ</i> periodic testing of the efficiency of the filters.</p>  <p>For structures and components performing the function of confinement, coverings and coatings shall be carefully selected and their methods of application shall be specified to ensure the fulfilment of their safety functions and to minimize interference with other safety functions in the event of their deterioration.</p>
<a name="8.6.2"></a>
<h4 className="reportHeading4"><a name="P961_104421"></a>8.6.2 Containment </h4>  <p>For reactors that have greater potential hazards associated with them, consideration shall be given to the provisions of containment to ensure that any release of radioactive material will be kept within acceptable limits.</p>
<a name="8.7"></a>
<h3 className="reportHeading3"><a name="P963_104661"></a>8.7 Heat transfer to an ultimate heat sink </h3>  <p>The design shall include systems for transferring residual heat from SSCs important to safety to an ultimate heat sink. This function shall be subject to very high levels of reliability during normal operation, AOOs and DBAs. All systems that contribute to the transport of heat by conveying heat, providing power or supplying fluids to the heat transport systems shall be designed in accordance with the importance of their contribution to the function of heat transfer as a whole. </p>  <p>Natural phenomena and human-induced events shall be taken into account in the design of heat transfer systems and in the choice of diversity and redundancy, both in the ultimate heat sinks and in the storage systems from which fluids for heat transfer are supplied. </p>  <p>The design shall extend the capability to transfer residual heat from the core to an ultimate heat sink in the event of a severe accident.</p>
<a name="8.8"></a>
<h3 className="reportHeading3"><a name="P967_105591"></a>8.8 Emergency heat removal system </h3>  <p>The design shall include an emergency heat removal system (EHRS), which provides for removal of residual heat to ensure fuel design limits and reactor coolant boundary condition limits are met. </p>  <p>If the design of the facility is such that the EHRS is required to mitigate the consequences of a DBA, then the EHRS shall be designed as a safety system. </p>  <p>Correct operation of the EHRS equipment following an accident shall not be dependent on power supplies from the electrical grid. </p>  <p>Where water is required for the EHRS, it shall come from a source that is independent of normal supplies.</p>  <p>The design shall support maintenance and reliability testing without a reduction in system effectiveness below that required by the OLCs. </p>  <p>To the extent practicable, inadvertent operation of the EHRS or of part of the EHRS shall not have a detrimental effect on reactor safety. </p>  <p>When firewater supply or other system components are interconnected to the EHRS, operation of one shall not impair operation of the other.</p>
<a name="8.9"></a>
<h3 className="reportHeading3"><a name="P975_106624"></a>8.9 Normal and emergency power supply </h3>  <p>The design basis for normal and emergency power supply (EPS) systems shall be specified. The availability of reliable electrical power supplies for essential functions in normal operation, AOOs, DBAs and BDBAs, to the extent practicable, shall be included.</p>  <p>The need for uninterruptible power supplies shall be assessed.</p>  <p>The EPS system shall have sufficient capacity and reliability, within a specified mission time, to provide the necessary power to maintain the reactor facility in a safe state and ensure nuclear safety in the event of all DBAs. These requirements shall be met following a common-cause loss of off-site power where this may occur as a result of a PIE, and in the presence of a single failure in the EPS. </p>  <p>The EPS system shall have sufficient capacity and capability, within a specified mission time, to support severe accident management actions.</p>  <p>The EPS system shall include appropriate control, monitoring and testing facilities. The design shall ensure that the emergency power supply:</p>  <ul>
<li>meets the specified the maximum period for the interruption of AC and DC electrical power supplies</li>
<li>is initiated either automatically or manually following the DBAs as determined by the safety requirements of the reactor facility</li>
<li>can be tested to be acceptable under load conditions representing full-load demand</li>  </ul>  <p>In the selection and routing of electrical and signal cables, common-cause failure mechanisms such as electrical interference and fire shall be considered and appropriate solutions (e.g., separation, redundancy, use of suitable materials) shall be adopted.</p>
<a name="8.10"></a>
<h3 className="reportHeading3"><a name="P985_108242"></a>8.10 Control facilities </h3>  <p>The design shall provide for control facilities from which the reactor can be safely operated, and from which measures can be taken to maintain the reactor in a safe state or to bring it back into such a state after the onset of AOOs, DBAs and, to the extent practicable, following BDBAs. Control facilities shall consist of a main control room (MCR) and a secondary control room (SCR), if necessary. The need for a secondary control room or an emergency support centre (ESC) is determined by the safety case.</p>
<a name="8.10.1"></a>
<h4 className="reportHeading4"><a name="P987_108777"></a>8.10.1 Main control room </h4>  <p>The design shall identify events both internal and external to the MCR that may pose a direct threat to its continued operation, and shall provide practicable measures to minimize the effects of these events. </p>  <p>The safety functions initiated by automatic control logic in response to an accident shall also be capable of being initiated manually from the main control room and, if installed, from the secondary control rooms.</p>  <p>The layout of the controls and instrumentation, and the mode and format used to present information, shall provide operating personnel with an adequate overall picture of the status and performance of the reactor facility and shall provide the necessary information to support operator actions. </p>  <p>The design of the MCR shall be such that appropriate lighting levels and thermal environment are maintained, and noise levels shall be minimized to applicable standards and codes. </p>  <p>The design of the MCR shall take ergonomic factors into account to provide both physical and visual accessibility to controls and displays without adverse impact on health and comfort. </p>  <p>Cabling for the instrumentation and control equipment in the MCR shall be arranged such that a fire in the secondary control room cannot disable the equipment in the MCR. </p>  <p>The design shall provide visual and, if appropriate, audible indications of reactor states and processes that have deviated from normal operation and that could affect safety. </p>  <p>The design shall also allow for the display of information needed to monitor the effects of the automatic actions of all control, safety and safety support systems. </p>  <p>The MCR shall be designed with secure communication channels to the emergency support centre if installed, and to off-site emergency response organizations if deployed, to allow for extended operating periods.</p>
<a name="8.10.1.1"></a>
<p><em><strong><a name="P997_110607"></a>8.10.1.1 Safety parameter display system </strong></em></p>  <p>The MCR shall contain a safety parameter display system that presents sufficient information on safety-critical parameters for the diagnosis and mitigation of DBAs and BDBAs, including severe accidents. </p>  <p>The safety parameter display system shall be designed and installed such that the same information is made available in a secure manner to the emergency support centre. </p>  <p>The safety parameter display system shall be integrated and harmonized with the overall control room human-system interface design.</p>
<a name="8.10.2"></a>
<h4 className="reportHeading4"><a name="P1001_111152"></a>8.10.2 Secondary control room </h4>  <p>This section applies when an SCR is installed.</p>  <p>The design, when necessary, shall provide an SCR that is physically and electrically separate from the MCR, and from which the facility can be placed and kept in a safe shutdown state when the ability to perform essential safety functions from the MCR is lost. </p>  <p>The design shall identify all events that may pose a direct threat to the continued operation of the MCR and the SCR, if installed. The design of the MCR and the SCR, if installed, shall be such that no event can simultaneously affect both control rooms to the extent that the essential safety functions cannot be performed. </p>  <p>For any PIE, at least one control room shall be habitable and accessible by means of a qualified route. </p>  <p>Instrumentation, control equipment and displays shall be available in the SCR so that the essential safety functions can be performed, essential reactor facility variables can be monitored and operator actions supported. </p>  <p>Safety functions initiated by automatic control logic in response to an accident shall also be capable of being initiated manually from both the MCR and the SCR. </p>  <p>The design of the SCR shall ensure that appropriate lighting levels and thermal environment are maintained, and that noise levels align with applicable standards and codes. </p>  <p>Ergonomic factors shall apply to the design of the SCR to ensure physical and visual accessibility in relation to controls and displays without adverse impact on health and comfort. </p>  <p>Cabling for the instrumentation and control equipment in the SCR shall be such that a fire in the main control room cannot disable the equipment in the SCR. </p>  <p>The SCR shall be equipped with a safety parameter display system similar to that in the MCR. As a minimum, this display system shall provide the information required to facilitate the management of the reactor when the MCR is uninhabitable. </p>  <p>The SCR shall be equipped with secure communication channels to the emergency support centre and to off-site emergency response organizations, if they are deployed. </p>  <p>The SCR shall allow for extended operating periods.</p>
<a name="8.10.3"></a>
<h4 className="reportHeading4"><a name="P1014_113271"></a>8.10.3 Emergency support centre </h4>  <p>This section shall apply when an ESC is installed. </p>  <p>Emergency support centre design shall be separated from the main and secondary control rooms and be used by emergency support staff.</p>  <p>The ESC shall include secure means of communication with the MCR, the SCR and other important points in the facility, and with on-site and off-site emergency response organizations. </p>  <p>The ESC shall include a safety parameter display system similar to that used in the MCR. It shall also include information about the radiological and meteorological conditions in the reactor facility and its immediate surroundings.</p>  <p>The design of the ESC shall be such that appropriate lighting levels and thermal environment are maintained, and noise levels shall be minimized to applicable standards and codes.</p>
<a name="8.10.4"></a>
<h4 className="reportHeading4"><a name="P1020_114079"></a>8.10.4 Equipment requirements for accident conditions </h4>  <p>If operator action is required for actuation of any safety system or safety support system equipment, all of the following requirements shall apply: </p>  <ul>
<li>there shall be clear, well-defined, validated and readily available operating procedures that identify the necessary actions</li>
<li>there shall be instrumentation in the control rooms to provide clear and unambiguous indication of the necessity for operator action</li>
<li>following indication of the necessity for operator action inside the MCR, there shall be least 15 minutes available before the operator action is required</li>
<li>following indication of the necessity for operator action outside the MCR, there shall be a minimum of 30 minutes available before the operator action is required</li>  </ul>  <p>For automatically initiated safety systems and control logic actions, the design shall facilitate backup manual initiation from inside the appropriate control room.</p>
<a name="8.11"></a>
<h3 className="reportHeading3"><a name="P1027_115035"></a>8.11 Waste treatment and control </h3>  <p>The design of the reactor facility shall minimize the generation of radioactive and hazardous waste. Systems shall be provided for the monitoring and handling of radioactive and hazardous waste and for its storage on the site for a reasonable period of time.</p>  <p>To reduce the exposure of personnel and minimize radioactive releases to the environment in a manner consistent with the ALARA principle, the design shall include provisions for:</p>  <ul>
<li>features such as shielding, delay tanks and/or decay systems</li>
<li>liquid and gaseous effluent treatment to keep the quantities and concentrations of discharged contaminants within prescribed limits</li>
<li>safe on-site handling and storage of radioactive and non-radioactive wastes for a period of time consistent with options for off-site management or disposal</li>  </ul>
<a name="8.11.1"></a>
<h4 className="reportHeading4"><a name="P1033_115863"></a>8.11.1 Control of liquid releases to the environment </h4>  <p>To ensure that emissions and concentrations remain within prescribed limits, the design shall include suitable means for controlling liquid releases to the environment in a manner that conforms to the ALARA principle. </p>  <p>The design shall include a liquid waste management system of sufficient capacity to collect, hold, mix, pump, test, treat and sample liquid waste before discharge, taking expected waste and accidental spills or discharges into account.</p>
<a name="8.11.2"></a>
<h4 className="reportHeading4"><a name="P1036_116370"></a>8.11.2 Control of airborne material within the reactor facility </h4>  <p>The design shall include gaseous waste management systems capable of:</p>  <ul>
<li>controlling all gaseous contaminants so as to conform to the ALARA principle and ensure that concentrations remain within prescribed limits</li>
<li>collecting all potentially active gases, vapours and airborne particulates for monitoring</li>
<li>directing all potentially active gases, vapours and airborne particulates through pre-filters, absolute filters, charcoal filters or high-efficiency particulate air filters, where applicable</li>
<li>delaying releases of potential sources of noble gases by way of an off-gas system of sufficient capacity</li>  </ul>  <p>The design shall provide a ventilation system with an appropriate filtration system capable of:</p>  <ul>
<li>preventing unacceptable dispersion of all airborne contaminants within the reactor facility</li>
<li>reducing the concentration of airborne radioactive substances to levels compatible with the need for access to each particular area</li>
<li>keeping the level of airborne radioactive substances in the reactor facility below prescribed limits, applying the ALARA principle in normal operation</li>
<li>ventilating rooms containing inert or noxious gases without impairing the capability to control radioactive releases</li>  </ul>
<a name="8.11.3"></a>
<h4 className="reportHeading4"><a name="P1047_117640"></a>8.11.3 Control of gaseous releases to the environment </h4>  <p>The ventilation system design shall include filtration to:</p>  <ul>
<li>control the release of gaseous contaminants and hazardous substances to the environment</li>
<li>ensure conformation to the ALARA principle</li>
<li>maintain airborne containments without prescribed limits</li>  </ul>  <p>The filtration system shall reliably achieve the necessary retention factors under the expected prevailing conditions, and shall be designed in a manner that facilitates appropriate efficiency testing.</p>
<a name="8.12"></a>
<h3 className="reportHeading3"><a name="P1053_118151"></a>8.12 Fuel handling and storage</h3>
<a name="8.12.1"></a>
<h4 className="reportHeading4"><a name="P1054_118182"></a>8.12.1 Handling and storage of non-irradiated fuel </h4>  <p>The design of the fuel handling and storage systems for non-irradiated fuel shall ensure nuclear criticality safety by:</p>  <ul>
<li>maintaining an approved subcriticality margin by physical means or processes, preferably by the use of geometrically safe configurations, under both normal and credible abnormal conditions</li>
<li>minimizing on-site consequences to personnel of postulated criticality accidents</li>
<li>mitigating off-site consequences of postulated criticality accidents</li>  </ul>  <p>The design shall also:</p>  <ul>
<li>permit appropriate maintenance, periodic inspection and testing of components important to safety</li>
<li>permit inspection of non-irradiated fuel</li>
<li>prevent loss of or damage to the fuel</li>
<li>meet Canada&#8217;s safeguards requirements for recording and reporting accountancy data, and for monitoring flows and inventories related to non-irradiated fuel containing fissile material</li>  </ul>
<a name="8.12.2"></a>
<h4 className="reportHeading4"><a name="P1064_119097"></a>8.12.2 Handling and storage of irradiated fuel </h4>  <p>The design of the handling and storage systems for irradiated fuel shall ensure nuclear criticality safety by:</p>  <ul>
<li>maintaining an approved subcriticality margin by physical means or processes, preferably by the use of geometrically safe configurations, under both normal and credible abnormal conditions </li>
<li>minimizing on-site consequences to personnel of postulated criticality accidents </li>
<li>mitigating off-site consequences of postulated criticality accidents</li>  </ul>  <p>The design shall provide for:</p>  <ul>
<li>adequate heat removal under normal operation, AOOs, DBAs and, where practicable, BDBAs</li>
<li>inspection of irradiated fuel</li>
<li>periodic maintenance, inspection and testing of components</li>
<li>prevention of dropping used fuel in transit</li>
<li>prevention of unacceptable handling stresses on fuel elements or fuel assemblies</li>
<li>prevention of inadvertent dropping of heavy objects and equipment on fuel assemblies</li>
<li>permit inspection and safe storage of suspect or damaged fuel elements or fuel assemblies</li>
<li>proper means for radiation protection</li>
<li>adequately identify individual fuel modules</li>
<li>facilitate maintenance and decommissioning of the fuel storage and handling facilities</li>
<li>facilitate decontamination of fuel handling and storage areas and equipment, when necessary</li>
<li>ensure implementation of adequate operating and accounting procedures to track fuel inventory</li>
<li>include measures to prevent a direct threat or sabotage to irradiated fuel </li>
<li>meet Canada&#8217;s safeguards requirements for recording and reporting accountancy data, and for monitoring flows and inventories related to irradiated fuel containing fissile material</li>  </ul>  <p>A design for a water pool used for irradiated fuel storage shall include provisions for:</p>  <ul>
<li>controlling the chemistry and activity of any water in which irradiated fuel is handled or stored </li>
<li>monitoring and controlling the water level and temperature in the fuel storage pool </li>
<li>detecting leakage </li>
<li>preventing the pool from emptying in the event of a pipe break</li>
<li>sufficient space to accommodate the entire reactor core inventory when necessary</li>  </ul>
<a name="8.12.3"></a>
<h4 className="reportHeading4"><a name="P1090_121214"></a>8.12.3 Detection of failed fuel </h4>  <p>The design shall provide a means for allowing reliable detection of fuel defects in the reactor and subsequent removal of failed fuel if action levels are exceeded.</p>
<a name="8.13"></a>
<h3 className="reportHeading3"><a name="P1092_121411"></a>8.13 Auxiliary systems</h3>  <p>The failure of any auxiliary system, irrespective of its importance to safety, shall not be able to jeopardize the safety of the reactor facility. </p>  <p>Adequate measures shall be taken to prevent the release of radioactive material to the environment in the event of the failure of an auxiliary system containing radioactive material.</p>
<a name="#RDsection[ArrayLen(RDsection)-2]#"></a>
<h2 className="reportHeading2"><a name="P1098_121763"></a>Abbreviations</h2>  <table border="0" summary="Abbreviations">
<caption>
</caption>
<tr>
<td valign="top"><p><strong>ALARA</strong></p></td>
<td valign="top"><p>as low as reasonably achievable</p></td>
</tr>
<tr>
<td valign="top"><p><strong>AOO</strong></p></td>
<td valign="top"><p>anticipated operational occurrence</p></td>
</tr>
<tr>
<td valign="top"><p><strong>BDBA</strong></p></td>
<td valign="top"><p>beyond design basis accident</p></td>
</tr>
<tr>
<td valign="top"><p><strong>BDBT</strong></p></td>
<td valign="top"><p>beyond design basis threat</p></td>
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
<td valign="top"><p><strong>DBE</strong></p></td>
<td valign="top"><p>design basis earthquake</p></td>
</tr>
<tr>
<td valign="top"><p><strong>DBT</strong></p></td>
<td valign="top"><p>design basis threat</p></td>
</tr>
<tr>
<td valign="top"><p><strong>ECCS</strong></p></td>
<td valign="top"><p>emergency core cooling system</p></td>
</tr>
<tr>
<td valign="top"><p><strong>EHRS</strong></p></td>
<td valign="top"><p>emergency heat removal system</p></td>
</tr>
<tr>
<td valign="top"><p><strong>EPS</strong></p></td>
<td valign="top"><p>emergency power supply</p></td>
</tr>
<tr>
<td valign="top"><p><strong>ESC</strong></p></td>
<td valign="top"><p>emergency support centre</p></td>
</tr>
<tr>
<td valign="top"><p><strong>GSS</strong></p></td>
<td valign="top"><p>guaranteed shutdown state</p></td>
</tr>
<tr>
<td valign="top"><p><strong>IAEA</strong></p></td>
<td valign="top"><p>International Atomic Energy Agency</p></td>
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
<td valign="top"><p><i>Nuclear Safety and Control Act</i></p></td>
</tr>
<tr>
<td valign="top"><p><strong>OLC</strong></p></td>
<td valign="top"><p>operational limits and conditions</p></td>
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
<td valign="top"><p><strong>RCS</strong></p></td>
<td valign="top"><p>reactor coolant system</p></td>
</tr>
<tr>
<td valign="top"><p><strong>SCR</strong></p></td>
<td valign="top"><p>secondary control room</p></td>
</tr>
<tr>
<td valign="top"><p><strong>SSCs</strong></p></td>
<td valign="top"><p>structures, systems and components</p></td>
</tr>
<tr>
<td valign="top"><p><strong>TRA</strong></p></td>
<td valign="top"><p>threat and risk assessment</p></td>
</tr>  </table>
<a name="#RDsection[ArrayLen(RDsection)-1]#"></a>
<h2 className="reportHeading2"><a name="P1151_122498"></a>Glossary</h2>  <dl className="margins-removed">
<dt>acceptance criteria</dt>
<dd>Specified bounds on the value of a functional or condition indicator used to assess the ability of a structure, system or component to meet its design and safety requirements.</dd>
<dt>accident </dt>
<dd>Any unintended event (including operating errors, equipment failures or other mishaps) the consequences or potential consequences of which are not negligible from the point of view of protection or safety. </dd>
<dd>For the purposes of this document, accidents include design basis accidents and beyond design basis accidents. Accidents exclude anticipated operational occurrences, which have negligible consequences from the perspective of protection or safety. </dd>
<dt>adverse impact </dt>
<dd>Adverse impact refers to risks that are significantly worse than those documented in the approved licensing basis.</dd>
<dt>aging management</dt>
<dd>Engineering, operations and maintenance actions to control, within acceptable limits, the effects of physical aging and obsolescence of structures, systems and components.</dd>
<dt>anticipated operational occurrence </dt>
<dd>An operational process deviating from normal operation which is expected to occur at least once during the operating lifetime of a reactor facility but which, in view of the appropriate design provisions, does not cause any significant damage to items important to safety or lead to accident conditions. </dd>
<dt>best estimate </dt>
<dd>Unbiased estimate obtained by the use of a mathematical model, calculation method or data to realistically predict behaviour and important parameters. </dd>
<dt>beyond design basis accident</dt>
<dd>Accident conditions less frequent and more severe than a design basis accident. A beyond design basis accident may or may not involve core degradation. </dd>
<dt>beyond design basis threat </dt>
<dd>Threat conditions more severe than a design basis threat that may result in structural degradation and may involve confinement degradation. </dd>
<dt>Class I nuclear facility</dt>
<dd>A Class I nuclear facility refers to a Class IA and a Class IB nuclear facility as described in the <i>Class I Nuclear Facilities Regulations</i>.</dd>
<dt>combustion </dt>
<dd>A chemical process that involves oxidation sufficient to produce heat or light.</dd>
<dt>commissioning </dt>
<dd>A process of activities intended to demonstrate that installed structures, systems and components perform in accordance with their specifications and design intent before they are put into service.</dd>
<dt>common-cause event</dt>
<dd>An event that leads to common-cause failures.</dd>
<dt>common-cause failure </dt>
<dd>A concurrent failure of two or more structures, systems or components due to a single specific event or cause such as natural phenomena (earthquakes, tornadoes, floods, etc.), design deficiency, manufacturing flaws, operation and maintenance errors, human-induced destructive events and others. </dd>
<dt>complementary design feature </dt>
<dd>A design feature from the design basis envelope that can be used to cope with beyond design basis accidents, including severe accidents. </dd>
<dt>confinement</dt>
<dd>A continuous boundary without openings or penetrations that prevents the release of radioactive materials out of the enclosed space. </dd>
<dt>conservatism </dt>
<dd>Use of assumptions, based on experience or indirect information, about a phenomena or behaviour of a system being at or near the limit of expectation, which increases safety margins or makes predictions regarding consequences more severe than if best-estimate assumptions had been made. </dd>
<dt>containment</dt>
<dd>A method or physical structure designed to prevent the release of radioactive substances.</dd>
<dt>core damage </dt>
<dd>Core degradation resulting from event sequences more severe than design basis accidents. </dd>
<dt>core damage frequency </dt>
<dd>An expression of the likelihood that, given the way a reactor is designed and operated, an accident could cause the fuel in the reactor to be damaged. </dd>
<dt>crediting </dt>
<dd>Assuming the correct operation of a structure, system or component or correct operator action, as part of an analysis. </dd>
<dt>critical groups </dt>
<dd>A group of members of the public that is reasonably homogeneous with respect to its exposure for a given radiation source, and is typical of individuals receiving the highest effective dose or equivalent dose (as applicable) from the given source. </dd>
<dt>design basis</dt>
<dd>The range of conditions and events taken into account in the design of structures, systems and components of a nuclear facility, according to established criteria, such that the facility can withstand them without exceeding authorized limits for the planned operation of safety systems. The design basis includes the design description, design manuals, design drawings and the safety analysis report.</dd>
<dt>design basis accident</dt>
<dd>Accident conditions for which a reactor facility is designed according to established design criteria, and for which damage to the fuel and the release of radioactive material are kept within regulated limits.</dd>
<dt>design basis threat </dt>
<dd>The characteristics of a potential adversary in which countermeasures are incorporated into the design and evaluation of the physical protection system. The structural degradation is not expected for design basis threats. </dd>
<dt>design envelope </dt>
<dd>The design envelope comprises the design basis and complementary design features.</dd>
<dt>deterministic safety analysis </dt>
<dd>An analysis of reactor facility responses to an event performed using predetermined rules and assumptions (e.g., those concerning the initial facility operational state, availability and performance of the facility systems and operator actions). Deterministic safety analysis can use either conservative or best estimate methods.</dd>
<dt>diversity </dt>
<dd>The presence of two or more redundant systems or components to perform an identified function, where the different systems or components have different attributes so as to reduce the possibility of common-cause failure. </dd>
<dt>environment </dt>
<dd>The components of the Earth, including: </dd>  </dl>  <ul>
<li>land, water and air, including all layers of the atmosphere</li>
<li>all organic and inorganic matter and living organisms</li>
<li>interacting natural systems that include the components listed above </li>  </ul>  <dl className="margins-removed">
<dt>exclusion zone </dt>
<dd>Pursuant to Section 1 of the <i>Class I Nuclear Facilities Regulations</i>, a parcel of land within or surrounding a nuclear facility on which there is no permanent dwelling and over which a licensee has the legal authority to exercise control.</dd>
<dt>external event </dt>
<dd>Any event that proceeds from the environment external to a reactor facility and can cause failure of structures, systems and components. External events include, but are not limited to, earthquakes, floods and hurricanes. </dd>
<dt>external hazard</dt>
<dd>An event of natural or human-induced origin that originates outside the site and whose effects on the reactor facility should be considered as potentially hazardous. </dd>
<dt>fail-safe design </dt>
<dd>Design whose most probable failure modes do not result in a reduction of safety.</dd>
<dt>fissile material</dt>
<dd>Material that is capable of sustaining a chain reaction of nuclear fission.</dd>
<dt>fissionable material</dt>
<dd>Any materials that can undergo nuclear fission.</dd>
<dt>graded approach</dt>
<dd>A method in which the stringency of the design measures and analyses applied is commensurate with the level of risk posed by the reactor facility.</dd>
<dt>hazards analysis </dt>
<dd>The process of collecting and evaluating information about the reactor facility to identify the associated hazards and determine those that are significant and must be addressed.</dd>
<dt>heat sink </dt>
<dd>A system or component that provides a path for heat-transfer from a source, such as heat generated in the fuel, to a large heat-absorbing medium.</dd>
<dt>human factors </dt>
<dd>Factors that influence human performance as they relate to the safety of the reactor facility, including activities during design, construction, commissioning, operation, maintenance and decommissioning phases.</dd>
<dt>independent systems </dt>
<dd>The ability of a system to perform its required function is unaffected by the operation or failure of another system.</dd>
<dt>internal event </dt>
<dd> An event internal to the reactor facility that results from human error or failure in a structure, system or component.</dd>
<dt>jet impact </dt>
<dd>The potential internal hazard associated with high-pressure fluid released from a pressure-retaining component.</dd>
<dt>leak before break </dt>
<dd>A situation where leakage from a flaw is detected during normal operation, allowing the reactor to be shutdown and depressurized before the flaw grows to the critical size for rupture. </dd>
<dt>malevolent act </dt>
<dd>An illegal action or an action that is committed with the intent of causing wrongful harm.</dd>
<dt>management arrangements </dt>
<dd>The means by which an organization functions to achieve its objectives, including: </dd>  </dl>  <ul>
<li>physical elements such as people, buildings, work areas, equipment, tools, etc.</li>
<li>intangible elements such as roles and responsibilities, knowledge, skills and behaviour of the people, cultural norms, agreements, understandings, decision-making processes, etc.</li>
<li>documentation that is essential to meeting the organization&#8217;s objectives </li>  </ul>  <dl className="margins-removed">
<dt>missile generation </dt>
<dd>The internal hazard associated with the sudden high-speed propulsion of debris.</dd>
<dt>mission time </dt>
<dd>The duration of time within which a system or component is required to operate or be available to operate and fulfill its function following an event.</dd>
<dt>normal operation </dt>
<dd>Operation of a reactor facility within specified operational limits and conditions including startup, power operation, shutdown, maintenance, testing and refuelling.</dd>
<dt>operational limits and conditions</dt>
<dd>A set of rules setting out parameter limits or conditions that ensures the functional capability and the performance levels of equipment and personnel for safe operation of a reactor facility. This set of limits and conditions is monitored by or on behalf of the operator and can be controlled by the operator.</dd>
<dt>physical security protection system</dt>
<dd>A security system is designed such that an adversary(ies) must overcome or circumvent multiple obstacles or barriers, either similar or diverse, which would result in effective mitigation prior to the achieving of their goal.</dd>
<dt>postulated initiating event</dt>
<dd>An event identified in the design as leading to either an anticipated operational occurrence or accident condition. This means that a postulated initiating event is not necessarily an accident itself; rather it is the event that initiates a sequence that may lead to an operational occurrence, a design basis accident or a beyond design basis accident, depending on the additional failures that occur.</dd>
<dt>practicable </dt>
<dd>Technically feasible and justifiable while taking cost-benefit considerations into account.</dd>
<dt>pressure boundary </dt>
<dd>A boundary of any pressure-retaining vessel, system or component of a nuclear or non-nuclear system.</dd>
<dt>probabilistic safety assessment</dt>
<dd>A comprehensive and integrated assessment of the safety of the reactor facility. The safety assessment considers the probability, progression and consequences of equipment failures or transient conditions to derive numerical estimates that provide a consistent measure of the safety of the reactor facility, as follows:</dd>  </dl>  <ul>
<li>a Level 1 PSA identifies and quantifies the sequences of events that may lead to the loss of core structural integrity and massive fuel failures</li>
<li>a Level 2 PSA starts from the Level 1 results and analyses the containment behaviour, evaluates the radionuclides released from the failed fuel and quantifies the releases to the environment</li>
<li>a Level 3 PSA starts from the Level 2 results and analyses the distribution of radionuclides in the environment and evaluates the resulting effect on public health</li>  </ul>  <dl className="margins-removed">
<dt>process </dt>
<dd>Set of interrelated activities that transform inputs into outputs.</dd>
<dt>process system </dt>
<dd>A system whose primary function is to support (or contribute to) the production of steam or electricity. </dd>
<dt>proven design </dt>
<dd>A design of a component(s) can be proven either by showing compliance with accepted engineering standards, by a history of experience, by test, or by some combination of these. New component(s) are &#8216;proven&#8217; by performing a number of acceptance and demonstration tests that show the component(s) meets pre-defined criteria.</dd>
<dt>reactor facility</dt>
<dd>Any fission reactor as described in the <i>Class I Nuclear Facilities Regulations</i>, including structures, systems and components:</dd>  </dl>  <ul>
<li>that are necessary for shutting down the reactor ensuring that it can be kept in a safe shutdown state</li>
<li>that may contain radioactive material and which cannot be reliably isolated from the reactor</li>
<li>whose failure can lead to a limiting accident for the reactor</li>
<li>that are tightly integrated into the operation of the nuclear facility</li>
<li>that are needed to maintain security and safeguards</li>  </ul>  <dl className="margins-removed">
<dt>reactor state </dt>
<dd>A configuration of reactor facility components, including the physical and thermodynamic states of the materials and the process fluids in them.
For the purpose of this document, a reactor state is considered to be normal operation, anticipated operational occurrence, design basis accident or beyond design basis accident (severe accidents are a subset of the beyond design basis state).</dd>
<dt>residual heat </dt>
<dd>The sum of heat originating from radioactive decay, fission in the fuel in the shutdown state and the heat stored in reactor related structures, systems and components.</dd>
<dt>responsible designer</dt>
<dd>An organization to which the design authority has assigned responsibility for the design of specific parts of the reactor. </dd>
<dt>safeguards </dt>
<dd>A system of international inspections and other verification activities undertaken by the International Atomic Energy Agency (IAEA) to evaluate, on an annual basis, Canada&#8217;s compliance with its obligations pursuant to the safeguards agreements between Canada and the IAEA.</dd>
<dt>safety analysis </dt>
<dd>Analysis by means of appropriate analytical tools that establishes and confirms the design basis for the items important to safety, and ensures that the overall reactor facility design is capable of meeting the acceptance criteria for each reactor state.</dd>
<dt>safety assessment</dt>
<dd>A systematic process applied throughout the design phase to ensure that the design meets all relevant requirements that are used for the evaluation of safety. </dd>
<dt>safety case</dt>
<dd>An integrated collection of arguments and evidence to demonstrate the safety of a facility. This will normally include a safety assessment, but could also typically include information (including supporting evidence and reasoning) on the robustness and reliability of the safety assessment and the assumptions made therein.</dd>
<dt>safety culture </dt>
<dd>The characteristics of the work environment, such as values, rules and common understandings, that influence employees&#8217; perceptions and attitudes about the importance that the organization places on safety.</dd>
<dt>safety function</dt>
<dd>A specific purpose that must be accomplished for safety.</dd>
<dt>safety group </dt>
<dd>Assembly of structures, systems and components designated to perform all actions required for a particular postulated initiating event to ensure that the specified limits for anticipated operational occurrences and design basis accidents are not exceeded. It may include certain safety and safety support systems, as well as any interacting process system. </dd>
<dt>safety margin</dt>
<dd>A margin to a value of safety variable for a barrier or a system at which damage or loss would occur. Safety margins are considered for those systems and barriers whose failure could potentially contribute to radiological releases.</dd>
<dt>safety support system </dt>
<dd>A system designed to support the operation of one or more safety systems.</dd>
<dt>safety system </dt>
<dd>A system provided to ensure the safe shutdown of the reactor or the residual heat removal from the core, or to limit the consequences of anticipated operational occurrences and design basis accidents. </dd>
<dt>severe accident</dt>
<dd> A beyond design basis accident that involves significant core degradation.</dd>
<dt>shutdown state </dt>
<dd>A subcritical reactor state with defined margin to prevent a return to criticality without external actions.</dd>
<dt>single failure </dt>
<dd> A failure that results in the loss of capability of a system or component to perform its intended function(s) and any consequential failure(s) that result from it.</dd>
<dt>small reactor</dt>
<dd>A reactor facility with a power level less than approximately 200 megawatts thermal (MWt) that is used for research, isotope production, steam generation, electricity production or other applications. </dd>
<dt>structures, systems and components </dt>
<dd>A general term encompassing all of the elements of a facility or activity that contribute to protection and safety, except human factors.<br /><br />
Structures are the passive elements: buildings, vessels, shielding, etc. A system comprises several components, assembled in such a way as to perform a specific (active) function. A component is a discrete element of a system: wires, transistors, integrated circuits, motors, relays, solenoids, pipes, fittings, pumps, tanks, valves, etc.</dd>
<dt>threat and risk assessment </dt>
<dd>A threat and risk assessment is an evaluation of the adequacy of an existing or a proposed physical protection system designed to safeguard against:</dd>  </dl>  <ul>
<li>intentional acts that could pose a threat to the security of the nuclear facility</li>
<li>the exploitation of weaknesses in the physical protection measures of a nuclear facility </li>  </ul>  <dl className="margins-removed">
<dt>trip parameter </dt>
<dd>A variable whose measure is used to trigger a safety system action when the trip setpoint is reached. </dd>
<dt>ultimate heat sink </dt>
<dd>A medium to which the residual heat can always be transferred, even if all other means of removing the heat have been lost or are insufficient. This medium is normally a body of water or the atmosphere.</dd>
<dt>vital area </dt>
<dd>As defined in the <i>Nuclear Security Regulations</i>, a vital area means an area inside a protected area containing equipment, systems, devices or a nuclear substance, the sabotage of which would or would likely pose an unreasonable risk to the health and safety of persons arising from exposure to radiation.</dd>  </dl>
<a name="#RDsection[ArrayLen(RDSection)]#"></a>
<h2 className="reportHeading2"><a name="P1330_139936"></a>Additional Information</h2>  <dt>The following documents contain additional information that may be of interest to persons involved in the design of small reactors:
</p>
<ul>
<li>Canadian Environmental Assessment Agency, <i>Canadian Environmental Assessment</i> <i>Act</i></li>
<li>Communications Security Establishment, <i>Harmonized Threat and Risk Assessment (TRA) Methodology</i>, TRA-1, 2007</li>
<li>International Atomic Energy Agency,<i> Safety of Nuclear Power Plants: Design Safety Requirements</i>, IAEA Safety Standards Series No. NS-R-1, 2000</li>
<li>International Atomic Energy Agency, <i>Engineering Safety Aspects of the Protection of Nuclear Power Plants Against Sabotage</i>, Nuclear Security Series No. 4, 2007</li>
<li>International Atomic Energy Agency, <i>The Use of a Graded Approach in the Application of the Safety Requirements for Research Reactors</i>, IAEA Draft Safety Standards DS351, 2009</li>
<li>International Atomic Energy Agency, <i>Safety Analysis for Research Reactors</i>, IAEA Safety Reports Series No. 55, 2008</li>
<li>International Atomic Energy Agency, <i>The Physical Protection of Nuclear Material and Nuclear Facilities</i>, INFCIRC/225/Rev.4 (Corrected)</li>
<li>International Atomic Energy Agency, <i>Guidance and Considerations for the Implementation of INFCIRC/225/Rev.4, The Physical Protection of Nuclear Material and Nuclear Facilities</i>, TECDOC-967 (Rev.1), 2002</li>
<li>International Atomic Energy Agency, <i>Handbook on the Physical Protection of Nuclear Material and Facilities</i>, TECDOC-1276</li>
</ul>

                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }