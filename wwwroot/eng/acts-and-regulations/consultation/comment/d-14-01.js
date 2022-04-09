import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "en",
                pageTitle: "DIS-14-01: Design Extension Conditions for Nuclear Power Plants", 
                dateModified: "2013-08-29",
                langToggleUrl: "/fra/acts-and-regulations/consultation/comment/d-14-01"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<div className="col-md-6  mrgn-bttm-0">
<style>  body {  	counter-reset: h2counter;  }  h1 {  	counter-reset: h2counter;  }  .countheads ~ h2:before {  	content: counter(h2counter) ". ";  	counter-increment: h2counter;  }  h2.nocount:before {  	content: none;  	counter-increment: none;  }  h2 {  	counter-reset: h3counter;  }  .countheads ~ h3:before {  	content: counter(h2counter) "." counter(h3counter) "\0000a0\0000a0";  	counter-increment: h3counter;  }  h3.nocount:before {  	content: none;  	counter-increment: none;  }  h3 {  	counter-reset: h4counter;  }  .countheads ~ h4:before {  	content: counter(h2counter) "." counter(h3counter) "." counter(h4counter) "\0000a0\0000a0";  	counter-increment: h4counter;  }  h4.nocount:before {  	content: none;  	counter-increment: none;  }  h4 {  	counter-reset: h5counter;  }  .countheads ~ h5:before {  	content: counter(h2counter) "." counter(h3counter) "." counter(h4counter) "." counter(h5counter) "\0000a0\0000a0";  	counter-increment: h5counter;  }  h5.nocount:before {  	content: none;  	counter-increment: none;  }  h5 {  	counter-reset: h6counter;  }  ol.toc {  	counter-reset: item;  }  ol.toc li {  	display: block;  	position: relative;  }  ol.toc, ol.toc li, ol.toc li li, ol.toc li li li {  	font-size: 14px;  }  ol.toc li:before {  	content: counters(item, ".")". ";  	counter-increment: item;  	position: absolute;  	margin-right: 100%;  	right: 8px; {/* space between number and text */}  	margin-left: 2px !important;  	font-weight: bold !important;  }  ol.toc li li:before {  	content: counters(item, ".");  	counter-increment: item;  	font-weight: bold !important;  }  ol.toc li li li:before {  	content: counters(item, ".");  	counter-increment: item;  	font-weight: bold !important;  }  ol.toc li.toc-none:before {  	list-style: none;  	list-style-type: none;  	content: none;  	counter-increment: none;  }  ol li.toc-none, ol[class*="column-"] li.toc-none {  	margin-left: 0px !important;  	padding-left: 0px !important;  }  dl.cnsc-glossary dt {  	margin: 0 5px 4px 0;  	float: left;  	font-weight: bold;  }  dl.cnsc-glossary dd {  	margin: 0 0 4px 90px;  }  dl.cnsc-glossary dd:after {  	content: &#39;&#39;;  	display: block;  	clear: both;  }  dl.cnsc-glossary-style-2 dd {  	margin: 0 0 4px 250px;  }
.border-none {  	border: 0px solid #fff !important;  }
</style>
<h2 className="countheads nocount">Preface</h2>  <p> Discussion papers play an important role in the selection and development of the regulatory framework and regulatory program of the Canadian Nuclear Safety Commission (CNSC). They are used to solicit early public feedback on CNSC policies or approaches. <br/>
The use of discussion papers early in the regulatory process underlines the CNSC&#39;s commitment to a transparent consultation process. The CNSC analyzes and considers preliminary feedback when determining the type and nature of requirements and guidance to issue. <br/>
Discussion papers are made available for public comment for a specified period of time. At the end of the first comment period, CNSC staff review all public input, which is then posted for feedback on the CNSC website for a second round of consultation. <br/>
The CNSC considers all feedback received from this consultation process in determining its regulatory approach.<strong> </strong></p>
</div>
<div className="col-md-6  mrgn-bttm-0">
<div className="module-table-contents mrgn-lft-md">
<h2 className=" nocount">Table of Contents</h2>
<ol className="toc">
<li className="toc-none"><a href="#exec-sum"><strong>Executive Summary</strong></a></li>
<li><a href="#sec-1"><strong>Introduction</strong></a>
<ol className="toc">
<li><a href="#sec-1-1">Design Basis</a></li>
<li><a href="#sec-1-2">Considering Accidents beyond the Design Basis</a></li>
</ol>
</li>
<li><a href="#sec-2"><strong>Proposed Definitions and Key Concepts</strong></a>
<ol className="toc">
<li><a href="#sec-2-1">Plant design envelope</a></li>
<li><a href="#sec-2-2">Design extension conditions</a></li>
<li><a href="#sec-2-3">Confidence</a></li>
<li><a href="#sec-2-4">Significant radioactive release</a></li>
<li><a href="#sec-2-5">Practically eliminated</a></li>
<li><a href="#sec-2-6">Identification of DECs</a></li>
</ol>
</li>
<li><a href="#sec-3"><strong>Objectives and Requirements for DECs</strong></a>
<ol className="toc">
<li><a href="#sec-3-1">Design objectives and requirements</a></li>
<li><a href="#sec-3-2">Analysis requirements</a></li>
<li><a href="#sec-3-3">Operational requirements</a></li>
<li><a href="#sec-3-4">Procedures</a></li>
<li><a href="#sec-3-5">Radiation protection requirements</a></li>
</ol>
</li>
<li><a href="#sec-4"><strong>Applicability to NPPs in Canada</strong></a>
<ol className="toc">
<li><a href="#sec-4-1">New NPPs</a></li>
<li><a href="#sec-4-2">Existing NPPs</a></li>
</ol>
</li>
<li><a href="#sec-5"><strong>Research and Development in Support of DECs</strong></a></li>
<li><a href="#sec-6"><strong>Conclusion</strong></a></li>
<li className="toc-none"><a href="#sec-how-to"><strong>How to Participate</strong></a></li>
<li className="toc-none"><a href="#sec-app-a"><strong>Appendix A: Plant States Diagram</strong></a></li>
<li className="toc-none"><a href="#sec-app-b"><strong>Appendix B: How DECs are Defined Outside Canada</strong></a></li>
<ol className="toc">
<li className="toc-none"><a href="#sec-app-b-1">International Atomic Energy Agency</a></li>
<li className="toc-none"><a href="#sec-app-b-2">Finland</a></li>
<li className="toc-none"><a href="#sec-app-b-3">United States of America</a></li>
<li className="toc-none"><a href="#sec-app-b-4">France and Germany</a></li>
<li className="toc-none"><a href="#sec-app-b-5">Japan</a></li>
<li className="toc-none"><a href="#sec-app-b-6">References to Appendix B</a></li>
</ol>
<li className="toc-none"><a href="#sec-app-c"><strong>Appendix C: Identification of DECs</strong></a></li>
<li className="toc-none"><a href="#sec-abbr"><strong>Abbreviations</strong></a></li>
<li className="toc-none"><a href="#sec-ref"><strong>References</strong></a></li>
</ol>  </div>
</div>
<div className="col-md-6  mrgn-bttm-0">
<h2 className="nocount" id="exec-sum">Executive Summary</h2>  <p> The Canadian Nuclear Safety Commission (CNSC) is mandated under the <em>Nuclear Safety and Control Act</em> to regulate the use of nuclear energy and materials to protect health, safety, security and the environment, and to implement Canada&#39;s international commitments on the peaceful use of nuclear energy; and to disseminate objective scientific, technical and regulatory information to the public. </p>  <p> Following the 2011 disaster in Fukushima, Japan, nuclear regulators around the world launched a comprehensive review of their major nuclear facilities. For its part, the CNSC established the <a href="http://www.nuclearsafety.gc.ca/eng/resources/news-room/news-releases/index?news_release_id=385">CNSC Fukushima Task Force</a> to review the capability of nuclear power plants (NPPs) and other nuclear facilities across the country to withstand conditions comparable to those that triggered the Fukushima accident. The task force concluded that Canadian nuclear power plants are safe and the risk posed to the health and safety of Canadians or to the environment is small.</p>  <p> The task force also reviewed the CNSC&#39;s regulatory framework and processes. It confirmed that the Canadian regulatory framework is strong and comprehensive. Nevertheless, it identified and outlined a series of recommendations aimed at further enhancing the safety of nuclear facilities in Canada. These recommendations are detailed in actions A.9.1 to A.9.3 of the <em>CNSC Integrated Action Plan on the Lessons Learned from the Fukushima Daiichi Nuclear Accident</em> [1]. </p>  <p> Part of the ongoing international examination of the Fukushima accident has resulted in increased effort in developing prevention and mitigation strategies for accident situations and scenarios beyond those considered during the initial design of nuclear facilities. These accident scenarios are termed design extension conditions (DECs) and their consideration is becoming increasingly prevalent within the international nuclear community. DECs, or similar concepts, are being examined and adopted by nuclear regulators in a number of countries. Appendix B provides further details in this regard. The CNSC is working closely with the international nuclear community to identify and adopt best practices as considerations regarding DECs evolve. At the same time, the CNSC is committed to engaging in a meaningful domestic dialogue with all interested stakeholders regarding DECs.  </p>  <p> The CNSC first publicly used the term DECs in draft regulatory document RD-337, version 2, <em>Design of New Nuclear Power Plants</em>, [2] issued for public consultation in July 2012. This document has now been finalized as REGDOC-2.5.2, <em>Design of Reactor Facilities: Nuclear Power Plants</em>, [3] and supersedes RD-337. This document establishes design requirements and expectations for new NPPs. It also includes high-level requirements and expectations related to DECs. As described in REGDOC-2.5.2, the safety objectives in DECs are to prevent core damage, mitigate accident consequences and protect containment integrity. Within Canada and around the world, opinions differ as to how DECs should be defined, characterized and selected. Additionally, there is no consensus on what prevention and mitigation plans should be created to address them. </p>  <p> Throughout this paper, DECs are described in relation to other plant states. It is important to emphasize that DECs are considered a subset of beyond-design-basis accident (BDBA) conditions. The rationale for this is that BDBA conditions extend to include accidents that, due to their extremely low probability of occurrence, are considered to be "practically eliminated". It is important to note that DECs would not include conditions that are considered to be "practically eliminated". </p>  <p> Another important premise of this paper is that DECs do not represent an extension of the conservative design basis or "high confidence" associated with other plant states. Instead, the principle of "reasonably high confidence" in the success of activities associated with DECs is introduced in this paper. It follows, therefore, that this principle should be applied uniformly in DECs across various aspects of design, analysis and operation.  </p>  <p> While the CNSC does not think a dedicated REGDOC on DECs is needed, the concept may be addressed in a number of draft and existing REGDOCs and Canadian standards. These documents potentially cover a range of subject areas, including design, analysis, construction, operation, procedures and radiation protection. The CNSC recognizes that requirements and guidance that would apply to equipment, analysis and procedures for DECs have not yet been fully developed. </p>  <p> This paper summarizes the CNSC&#39;s current understanding of DECs. Its intent is not to provide a CNSC position but to stimulate discussion on the subject of DECs. </p>  <p> Finally, it should be noted that several factors contribute to improving protection for the Canadian public against unlikely accidents at an NPP. Post-Fukushima upgrades to Canadian NPPs have extended the capabilities of plants to withstand very improbable events. The NPP&#39;s safety assessments have confirmed that increased safety is achieved. The CNSC Regulatory Framework has been updated to include appropriate requirements and guidance related to design, analysis and operation of NPPs. Several of these activities are still ongoing.</p>  <p> This document describes a consistent approach to establishing requirements and guidance related to DECs and although the paper presents a series of questions for the reader&#39;s consideration, comments and feedback should not be limited to these. Comments on any issue pertinent to the topic of DECs are encouraged.</p>  <div className="col-md-6  text-right mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
</div>
<div className="col-md-6  mrgn-bttm-0">
<h2 id="sec-1">1. Introduction</h2>  <p> Following the 2011 disaster in Fukushima, Japan, nuclear regulators around the world launched a comprehensive review of their major nuclear facilities. For its part, the CNSC established the <a href="http://www.nuclearsafety.gc.ca/eng/resources/news-room/news-releases/index?news_release_id=385">CNSC Fukushima Task Force</a> to review the capability of nuclear power plants (NPPs) and other nuclear facilities across the country to withstand conditions comparable to those that triggered the Fukushima accident. The task force concluded that Canadian nuclear power plants are safe and the risk posed to the health and safety of Canadians or to the environment is small.</p>  <p> The CNSC Fukushima Task Force also reviewed the CNSC&#39;s regulatory framework and processes. It confirmed that the Canadian regulatory framework is strong and comprehensive. Nevertheless, it outlined a series of recommendations aimed at further enhancing the safety of nuclear facilities in Canada. These recommendations are detailed in actions A.9.1 to A.9.3 of the <em>CNSC Integrated Action Plan on the Lessons Learned from the Fukushima Daiichi Nuclear Accident</em>.</p>  <p> Several factors contribute to improving protection for the Canadian public against unlikely accidents (DECs) at a NPP. Post-Fukushima upgrades to Canadian NPPs have extended the capabilities of plants to withstand very improbable events. The NPP&#39;s safety assessments have confirmed that increased safety is achieved. The CNSC Regulatory Framework has been updated to include appropriate requirements and guidance related to design, analysis and operation of NPPs. Several of these activities are still ongoing. This document describes a consistent approach to establishing requirements and guidance related to DECs.</p>  <p> Part of the ongoing international examination of the Fukushima accident has resulted in increased effort in developing prevention and mitigation strategies for accident situations and scenarios beyond those considered during the initial design of nuclear facilities. </p>  <h3 id="sec-1-1">1.1 Design Basis</h3>  <p>The term "design basis" is defined in REGDOC-2.5.2 <em>Design of Reactor Facilities: Nuclear Power Plants</em>, [3] as:</p>  <ul className="list-bullet-none">
<li>[t]he range of conditions and events taken explicitly into account in the design of the facility, according to established criteria, such that the facility can withstand them without exceeding authorized limits by the planned operation of safety systems. </li>  </ul>  <p> The design basis is applied through regulatory requirements and applicable national and international codes and standards. Requirements for the design basis are typically very conservative and rigorous. They provide a very high level of confidence that an NPP can meet safety requirements following any accident scenarios that were considered at the time of plant design and for which prevention and mitigation provisions were put in place. Design-basis accidents (DBAs) are accident conditions for which a reactor facility is designed, according to established design criteria (the design basis), and for which damage to the fuel and the release of radioactive material are kept to a minimum. </p>  <h3 id="sec-1-2">1.2 Considering Accidents beyond the Design Basis</h3>  <p>The CNSC REGDOC-2.5.2 sets forth proposed requirements for structures, systems and components (SSCs) that have a role in the management of accidents beyond those considered in the design basis, particularly for severe accidents (SA). SAs are defined in REGDOC-2.3.2 <em>Operating Performance: Accident Management: Severe Accident Management Programs for Nuclear Reactors</em> [4]as:</p>  <ul className="list-bullet-none">
<li> [a]n accident more severe than a design-basis accident, and involving significant core degradation or significant fuel degradation in the spent fuel pool (also called the irradiated fuel pool).</li>  </ul>  <p> The term "design extension conditions" is used to describe those accidents, beyond the design basis, for which additional prevention and mitigation provisions are required. </p>  <p> According to REGDOC-2.5.2, the reactor design is expected to provide the means to:</p>  <ul>
<li>address plant-specific severe accident challenges</li>
<li>provide design features that help ensure safety goals are met and accident management objectives and strategies are achieved</li>
<li>prevent significant releases of radioactive materials into the environment</li>  </ul>  <p>REGDOC-2.5.2 establishes the "plant design envelope" which comprises normal operation (NO), anticipated operational occurrences (AOO), DBAs and DECs. Figure 1 is taken from REGDOC-2.5.2. It shows the relationship of DECs to the other plant states.</p>  <p> In RD-337 version 1, DECs were referred to as "credible beyond-design-basis accidents (BDBAs)". Conditions and events that are practically eliminated are those with such a low probability of occurring that they are not considered to be DECs.  </p>  <p> DECs may take into account accidents involving the reactor core, spent fuel pools and, where appropriate, multiple units at a site. Such accidents could be triggered by multiple failures of equipment, operator errors, internal or external events and, most probably, by a combination of events and failures. When major accidents occur they are complex with many contributing factors. The CNSC does not intend to define a lower frequency boundary for DECs, because of large uncertainties in obtaining credible frequencies for exceedingly rare events. The approach for identifying a set of BDBAs to be treated as DECs inevitably involves a measure of judgment. </p>  <p> It is important to note that DECs, as illustrated, are a selected subset of BDBAs conditions and not an extension of the design basis.</p>  <figure className="col-md-6">  <figcaption><strong>Figure 1:</strong> Plant states</figcaption>  <img src="/images/d-14-01/dis1401-fig1.png"/>  </figure>
<p>Appendix A offers a more complete description of the plant states diagram and shows the relationship between plant states and other aspects of NPP design, analysis and operation.</p>  <div className="col-md-6 well ">
<p><strong>Question 1: </strong>Have DECs been characterized in a manner that is clear and logical?</p>  </div>  <div className="col-md-6  text-right mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
</div>
<div className="col-md-6  mrgn-bttm-0">
<h2 id="sec-2">2. Proposed Definitions and Key Concepts</h2>  <h3 id="sec-2-1">2.1 Plant design envelope</h3>  <p>REGDOC-2.5.2, <em>Design of Reactor Facilities: Nuclear Power Plants,</em> requires the plant design authority<sup id="fnb1-ref"><a className="fn-lnk" href="#fnb1"><span className="wb-inv">Footnote </span>1</a></sup> to consider prevention and mitigation of a broad range of accidents at the design stage and to meet dose acceptance criteria and probabilistic safety goals. There should be reasonably high confidence that prevention and mitigation features should operate as expected in the unlikely event of a severe accident. The design authority should also exhibit an understanding of accident progression and associated phenomena, and is required to establish, at the design stage, initial severe accident management guidelines (SAMGs) that are based on an understanding of accident progression and that take plant design into account.</p>  <p>For this reason the plant design envelope is defined in REGDOC-2.5.2 as:</p>  <ul className="list-bullet-none">
<li> [t]he range of conditions and events (including DEC) that are explicitly taken into account in the design of the nuclear power plant such that significant radioactive releases would be practically eliminated by the planned operation of process and control systems, safety systems, safety support systems and complementary design features.</li>  </ul>  <h3 id="sec-2-2">2.2 Design extension conditions</h3>  <p>REGDOC-2.5.2 defines DECs as follows:</p>  <ul className="list-bullet-none">
<li> [a] subset of beyond-design-basis accidents that are considered in the design process of the facility in accordance with best-estimate methodology to keep releases of radioactive material within acceptable limits. Design extension conditions could include severe accident conditions.</li>  </ul>  <p> The concept of DECs is complex. It encompasses plant states, conditions and events, including external events, as well as those involving the reactor, or the handling and storage of the irradiated fuel. </p>  <h3 id="sec-2-3">2.3 Confidence </h3>  <p>For DBAs, there is "high confidence" in the ability of the structures, systems and components (SSCs) to perform as designed. However, in DECs there should be "reasonably high confidence" that the SSCs will perform as designed. A certain degree of conservatism is still expected for addressing challenges where the available knowledge is not sufficient to characterize the best-estimate conditions. </p>  <p> Reasonably high confidence may be achieved through the adequate selection of the conditions considered in the design and of the rules governing such matters as design, testing, periodic inspection and maintenance of the SSCs intended to be used for the management of SAs.</p>  <h3 id="sec-2-4">2.4 Significant radioactive release</h3>  <p>REGDOC-2.5.2 section 7.3.4 requires that: </p>  <ul className="list-bullet-none">
<li> [t]he design shall be such that plant states that could lead to significant radioactive releases are practically eliminated. For plant states that are not practically eliminated, only protective measures that are of limited scope in terms of area and time shall be necessary for protection of the public, and sufficient time shall be made available to implement these measures.</li>  </ul>  <p> For DECs, protective measures must be limited in area and time. For example, a significant radioactive release could not be considered limited in location or time. Such a hypothetical release, if it were to lead to a long-term relocation of population would be classified as a "significant release". A radioactive release that requires only sheltering is unlikely to be considered "significant". However, a release that leads to short-term evacuation would be considered significant if the area to be evacuated were large or the duration long. Distinguishing requires a level of judgement. </p>  <h3 id="sec-2-5">2.5 Practically eliminated</h3>  <p>The key design objective for NPPs is that significant releases are practically eliminated. This objective recognizes that the possibility of certain conditions or accidents is either physically impossible or judged with a high level of confidence to be extremely unlikely. Demonstration of practical elimination of an accident sequence may involve deterministic and probabilistic considerations. It should also take into account uncertainties associated with a limited knowledge of some of the important and applicable physical phenomena. REGDOC-2.5.2, section 7.3.4 provides guidance on demonstrating that accident sequences have been practically eliminated.</p>  <p> There are uncertainties in quantifying failure probabilities for SA scenarios. One is the failure rate for components that operate beyond their levels of qualification. Some tools that may help to achieve the appropriate level of confidence that severe releases have been practically eliminated include: defence in depth, the use of passive safety features, the use of multiple independent controls, and the application of the safety principles of independence, diversity and separation. </p>  <h3 id="sec-2-6">2.6 Identification of DECs</h3>  <p>The design authority is responsible for identifying, selecting and classifying the events or conditions that comprise DECs. Currently, there is no formally agreed upon and recognized means for identifying DECs. An understanding of accident progression, processes and accident phenomena is relevant and examination of the following is suggested:</p>  <ul>
<li>identification and selection of representative events and accident sequences for determining actual design conditions</li>
<li>identification of major design options and specific plant-design features for the mitigation of SAs and their roles in achieving severe accident management (SAM) goals</li>
<li>identification of the conditions needed for the design of plant features to be used in preventing and mitigating consequences of SAs</li>
<li>SAM strategies for mitigating challenges posed by SAs while at the same time ensuring reliable operation of safety functions and returning the plant to a stable controlled state</li>
<li>deterministic accident analyses for design support</li>  </ul>  <p>Considerations to identify and select DECs may include: </p>  <ul>
<li>accident scenarios that include combinations of initiating events, human error and SSC success/failure </li>
<li>design features considered in the prevention or mitigation of a BDBA or an SA and defining their intended roles </li>
<li>parameters for design features considered for use in preventing or mitigating a BDBA or an SA </li>
<li>factors of the accident progression relevant for determining limiting values and ranges for the timing and amplitude of the parameters needed for design </li>
<li>initiating events, human error and SSC operability (success, failure) , which are relevant for determining the limiting values and ranges of the parameters needed for design </li>
<li>an optimal set of accident scenarios to reduce it to a manageable number of sequences </li>  </ul>  <p>Underpinning identification and selection of DECs is the expectation that, in the DEC plant state, the practical elimination of significant releases is achieved. For a more in-depth discussion on the identification of DECs, please see Appendix C. </p>  <div className="col-md-6 well ">
<p> <strong>Question 2: </strong>Are the items included for the purposes of identifying DECs clear, logical, sufficient and/or required?</p>  </div>  <div className="col-md-6  text-right mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
</div>
<div className="col-md-6  mrgn-bttm-0">
<h2 id="sec-3">3. Objectives and Requirements for DECs</h2>  <p> The safety objectives for DECs are to prevent severe core damage, mitigate accident consequences and protect containment integrity as long as possible. To meet these objectives, the CNSC believes that the following are key:</p>  <ul>
<li>inclusion of plant design features to be used for accident management</li>
<li>specification of requirements for containment performance during DECs (such as maintaining the leak-tight barrier for a certain duration with no uncontrolled release thereafter)</li>
<li>consideration of accident management needs and requirements</li>  </ul>  <p>The underlying principle is to provide "reasonably high confidence" that SSCs will operate as intended during a DEC.</p>  <h3 id="sec-3-1">3.1 Design objectives and requirements</h3>  <p>REGDOC-2.5.2 sets overall safety objectives for NPPs through dose acceptance criteria and safety goals. It sets specific design requirements for conditions and events within the plant design envelope. It does not set design requirements for BDBAs that are considered to be "practically eliminated". </p>  <h4 id="sec-3-1-1">3.1.1 Scope</h4>  <p>Design objectives should be established for equipment that may be used in DECs. This equipment may include, but is not limited to:</p>  <ul>
<li>complementary design features<sup id="fnb2-ref"><a className="fn-lnk" href="#fnb2"><span className="wb-inv">Footnote </span>2</a></sup>, such as core catchers and containment-filtered venting systems that are dedicated to limiting or mitigating the effects of severe accidents</li>
<li>fixed or portable equipment located onsite or offsite, such as mobile pumps or electric power generators</li>
<li>safety or process SSCs that may be planned to be used beyond their design bases</li>  </ul>  <p>The design requirements for safety systems should be very conservative for DBAs in order to provide very high confidence. Reasonably high confidence would be expected in the unlikely event of DECs.</p>  <h4 id="sec-3-1-2">3.1.2 Safety classification</h4>  <p>Safety classification considers:</p>  <ul>
<li>the safety function(s) to be performed</li>
<li>consequence(s) of failure</li>
<li>the probability that the SSC will be called upon to perform the safety function</li>
<li>the time following a postulated initiating event at which the SSC will be called upon to operate and the expected duration of that operation</li>  </ul>  <p>These considerations allow the design authority to account for factors such as redundancy of equipment and the possibility of implementing alternative strategies. Although the probability of SSCs being called upon during DECs is very low, the failure of safety functions for the mitigation of DECs may lead to high-severity consequences. These safety functions should be assigned a safety category commensurate with their safety significance. Testing and maintenance requirements for equipment to be used in DECs would be established in accordance with their safety classification.</p>  <h4 id="sec-3-1-3">3.1.3 Survivability of equipment</h4>  <p>REGDOC-2.5.2 requires that:<br/>
[e]quipment and instrumentation credited to operate during DECs shall be demonstrated, with reasonable confidence, to be capable of performing their intended safety function(s) under the expected environmental conditions. A justifiable extrapolation of equipment and instrumentation behaviour may be used to provide assurance of operability, and is typically based on design specifications, environmental qualification testing and/or other considerations.<br/>
Survivability of equipment and instrumentation in DECs should consider the following:</p>  <ul>
<li>functions that need to be performed in the accident timeframe to achieve a safe shutdown state for DECs</li>
<li>the accident timeframe for each required function</li>
<li>the location and type of equipment used to perform necessary functions in each timeframe</li>
<li>the harsh environmental conditions of DECs within each timeframe </li>
<li>assurance that the equipment will survive to perform its function in the accident timeframes established in the DECs plant state</li>  </ul>  <h3 id="sec-3-2">3.2 Analysis requirements</h3>  <p>REGDOC-2.4.1, <em>Deterministic Safety Analysis</em><em>, </em><em>[5]</em> specifies requirements for deterministic safety analysis for AOOs, DBAs and BDBAs. Although the document refers to BDBAs, it does not specify requirements for DECs. This is because the analysis discussed in REGDOC-2.4.1, unlike the design process, might consider events of lower frequency than DECs. Section 4.3.3 of REGDOC-2.4.1, <em>Deterministic Safety Analysis,</em> states:</p>  <p> A safety assessment for BDBAs shall be performed to demonstrate that:</p>  <ol>
<li>The NPP as designed can meet the requirements for release limits established as the safety goals. A deterministic safety analysis provides consequence data for accident sequences to use in the PSA [probabilistic safety assessment].</li>
<li>The procedures and equipment put in place to handle the accident management needs are effective, taking into account the availability of cooling water, material and power supplies; consideration can be given to the plant&#39;s full design capabilities, including the possible use of safety, non-safety, and temporary systems beyond their originally intended function.</li>  </ol>  <p>Deterministic BDBA analysis supports the evaluation of safety goals in conjunction with PSAs. It also demonstrates the adequacy of the design provisions and accident management programs. Therefore, deterministic safety analysis is also performed to demonstrate that the complementary design features will function as designed in DECs.</p>  <p> Deterministic analysis should be performed for an event leading to the highest challenge to maintaining the containment function. <br/>
The generally accepted principal for analysis of BDBAs is the best-estimate approach. This is consistent with International Atomic Energy Agency (IAEA) documents such as SSG-2, <em>Deterministic Safety Analysis for Nuclear Power Plants</em> [6] and SRS No. 56, <em>Approaches and Tools for Severe Accident Analysis for Nuclear Power Plants</em>&nbsp;[7]. Section 4.4.4 of REGDOC-2.4.1 states:</p>  <ul className="list-bullet-none">
<li> [f]or the analysis of BDBA, it is acceptable to use a more realistic analysis methodology consisting of assumptions that reflect the likely plant configuration, and the expected response of plant systems and operators in the analyzed accident.</li>  </ul>  <p> One of the reasons for using best-estimate methods and computer codes in BDBA analysis is related to accident management. Should an accident progress to the conditions beyond the design basis, accident management actions become an important part of defence-in-depth. The consequences of BDBAs are estimated so that the analysis reflects a realistic plant response and provides best-estimate information for accident management.</p>  <p> Analysis of BDBAs may use applicable<sup id="fnb3-ref"><a className="fn-lnk" href="#fnb3"><span className="wb-inv">Footnote </span>3</a></sup> input from PSAs and may credit all the available SSCs, as long as it has been demonstrated with reasonably high confidence that they are able to perform their intended function. It is worth noting that the single-failure criterion, which applies to all safety groups credited in the DBA analysis, is not normally applied in the BDBA analysis. </p>  <h3 id="sec-3-3">3.3 Operational requirements</h3>  <p>RD/GD-210, <em>Maintenance Programs for Nuclear Power Plants</em>, [8] covers maintenance, testing and inspection requirements. RD/GD-98, <em>Reliability Programs for Nuclear Power Plants</em>, [9] sets out the requirements for and provides guidance on reliability programs. Applicability of these regulatory requirements to DECs features should be based on their safety classifications. </p>  <h3 id="sec-3-4">3.4 Procedures</h3>  <p>While design provisions are necessary to maintain and strengthen the existing multiple physical barriers to fission product release, it is also important that adequate procedures be in place to manage and mitigate DECs. </p>  <p> Procedural barriers relevant to DECs include those pertinent to accident management and emergency response. The accident management guidelines are symptom-oriented and do not depend directly on any predefined events. Operating manuals, emergency operating procedures (EOPs) and SAMGs provide a continuity of coverage between normal plant operation and severe accident conditions. Transitions between the types of procedures depend on measured conditions of the plant, not on an abstract definition of plant state. </p>  <p> Additional training requirements and plans may be contained in EOPs and SAMGs. The procedures and guidelines relevant to DECs should follow the principle of "reasonably high confidence" in their design, verification, validation and implementation. These procedures and guidelines should consider human factors and organizational performance to ensure that accident management actions are executed correctly and in a timely manner.</p>  <p> SAMGs should provide guidelines for use of the complementary design features, including mobile onsite and offsite equipment and instrumentation to be used in DECs. </p>  <p> Draft REGDOC-2.3.2, <em>Accident Management</em>, [10] will respond to the CNSC Fukushima Task Force recommendation that the CNSC publish a dedicated regulatory document on accident management. According to draft REGDOC-2.3.2, an accident management program consists of an integrated set of plans, procedures, guidelines and arrangements to be used for accident management. They should address key issues such as identifying the challenges to plant and public safety, providing appropriate equipment and instrumentation, implementing guidance for personnel involved in accident management, and assuring adequate human and organizational performance.</p>  <p> Applicable regulatory documents for offsite emergency response include G-225, <em>Emergency Planning at Class I Nuclear Facilities and Uranium Mines and Mills</em><em>, </em>[11] and RD-353, <em>Testing the Implementation of Emergency Measures</em> [12]. While an emergency does not correlate with any particular plant state, by definition DECs would also be subject to the regulatory requirements for emergencies.</p>  <p> Draft REGDOC-2.10.1, <em>Nuclear Emergency Preparedness and Response</em>, [13] is currently under development. When published and incorporated into licensing, it will supersede G-225, <em>Emergency Planning at Class I Nuclear Facilities and Uranium Mines and Mills</em>, and RD-353, <em>Testing the Implementation of Emergency Measures</em>. It will fulfill the recommendations of the CNSC Fukushima Task Force – and the External Advisory Committee – to strengthen regulatory requirements for licensees&#39; emergency preparedness programs. Draft REGDOC-2.10.1 lists and discusses the requirements of an emergency-preparedness program and offers guidance for building such a program. </p>  <p> Guidance for human factors is provided in G-276, <em>Human Factors Engineering Program Plans</em>, [14], and G-278, <em>Human Factors Verification and Validation Plans</em> [15]. </p>  <p> The CNSC will be reviewing the above documents to ensure that the principle of "reasonably high confidence" is applied consistently for events beyond the design basis.</p>  <h3 id="sec-3-5">3.5 Radiation protection requirements</h3>  <p>All plant states, including DECs, are subject to the CNSC&#39;s framework for radiation protection and the "as low as reasonably achievable" (ALARA) principle is applied in the control of radiological hazards and radiation exposures. </p>  <p> The CNSC has issued a discussion paper, DIS-13-01, <em>Proposals to Amend the Radiation Protection Regulations</em><em>, </em>[16] detailing proposed amendments to address recommendation 8 of INFO-0824, <em>CNSC Fukushima Task Force Report </em><em>[17]. </em>It advised that the <em>Radiation Protection Regulations </em><em>(RPR) [18] may </em>be amended to be more consistent with current international guidance. To accomplish this, the RPR would be amended to set out in greater detail the regulatory requirements needed to address radiological hazards during the various phases of an emergency. These proposed regulatory amendments, should they receive approval from the Governor in Council, may impact the identification, design and analysis requirements of DECs. </p>  <div className="col-md-6 well ">
<p> <strong>Question 3: </strong>Does the above accurately define and cover the elements that should be included in the design objectives and requirements for DECs?</p>  </div>  <div className="col-md-6  text-right mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
</div>
<div className="col-md-6  mrgn-bttm-0">
<h2 id="sec-4">4. Applicability to NPPs in Canada</h2>  <h3 id="sec-4-1">4.1 New NPPs</h3>  <p>REGDOC-2.5.2, <em>Design of Reactor Facilities: Nuclear Power Plants</em> applies to the design of all new NPPs. As such, in considering DECs, the design authority for new NPPs must use a systematic approach to:</p>  <ul>
<li>address all known accident challenges within DECs</li>
<li>have a balanced design between severe accident prevention and mitigation of accidents, with particular emphasis on prevention of containment failure</li>
<li>integrate with the needs of the plant-specific accident management program to ensure the design provisions are available for management of accidents</li>  </ul>  <h3 id="sec-4-2">4.2 Existing NPPs</h3>  <p>Existing NPPs are outside of the scope of REGDOC-2.5.2. However, REGDOC-2.5.2 may be referenced in a review against modern standards prior to refurbishment or extended operation (e.g., via application of RD-360, <em>Life Extension for Nuclear Power Plants</em> [19]). For existing NPPs, the focus should be on:</p>  <ul>
<li>identifying and evaluating the existing design features that can be used to respond to challenges posed by DECs</li>
<li>ensuring no vulnerability of the containment system, in conjunction with the accident management program</li>
<li>implementing design upgrades where necessary to meet safety goals or accident management needs, or to counter specific challenges</li>  </ul>  <p>It is noted that many upgrades have been made, planned, or are under consideration, at existing NPPs. These upgrades are a result of safety reviews performed at the time of refurbishment or following the Fukushima accident. Many of these upgrades address the ability to manage and mitigate DECs. Design requirements for these upgrades have been selected by licensees using best engineering judgment and reviewed by the regulator in a risk-informed manner. As part of implementing these upgrades, specific issues requiring regulatory guidance are being identified and addressed.</p>  <p> Further updates to the CNSC regulatory framework, identified in Section 3 and related CSA Group<sup id="fnb4-ref"><a className="fn-lnk" href="#fnb4"><span className="wb-inv">Footnote </span>4</a></sup> standards, will take a number of years to develop. In the interim, it is suggested that industry stakeholders work closely with the CNSC to develop internal processes and to ensure greater clarity of the principles and concepts described in this discussion paper. Similarly, the CNSC, CSA Group and industry should work together to ensure that revised requirements and guidance documents follow the clarified principles and concepts. Extensive collaboration should enable industry practices and regulatory requirements to converge. Doing so will facilitate licensing and compliance verification once new requirements and guidance documents are issued.</p>  <div className="col-md-6 well ">
<p><strong>Question 4: </strong>Are there other Canadian nuclear facilities, besides NPPs, that could potentially benefit from the application of DECs?</p>  </div>  <div className="col-md-6  text-right mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
</div>
<div className="col-md-6  mrgn-bttm-0">
<h2 id="sec-5">5. Research and Development in Support of DECs</h2>  <p> Many physical phenomena associated with SAs are extremely complex. For some SAs, the current level of knowledge and modelling capabilities is limited. Quite frequently, the experimental studies required to augment such understandings cannot be conducted in fully representative conditions. This fact complicates the task of developing and validating models. </p>  <p> The high cost of experiments and the limited number of suitable facilities to perform studies of relevant phenomena necessitates wide international cooperation. While driven by considerations of efficiency, this approach is facilitated by the fact that many SA phenomena are common or similar in various reactor types. Domestic and international research activities in this area aim to reduce the uncertainties in available knowledge and allow more accurate modelling of accident progression and consequences.</p>  <p> Research should address the needs of the currently operating reactors as well as future reactors. Modifications of operating reactors are often limited and research in this area is primarily aimed at minimizing the potential impact of SAs. One of the key aspects to be addressed through research and development is the study of cliff-edge effects that may lead to non-linear and unexpected responses from existing plant SSCs. Cliff-edge effects may be described as a large increase in the severity of an event caused by a small change in conditions. They can be caused by changes in the magnitude of the event or changes in the plant or operator response.</p>  <div className="col-md-6  text-right mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
</div>
<div className="col-md-6  mrgn-bttm-0">
<h2 id="sec-6">6. Conclusion</h2>  <p> The CNSC has published high-level requirements and guidance for design and analysis in REGDOC-2.5.2, <em>Design of Reactor Facilities: Nuclear Power Plants</em> and REGDOC-2.4.1, <em>Deterministic Safety Analysis</em>. However, detailed requirements and guidelines that apply to equipment, analysis and procedures for DECs are not fully developed. Nonetheless, the CNSC is of the opinion that the principle of "reasonably high confidence" should be applied to all activities associated with DECs. An ongoing dialogue between regulators, designers, operators, standards organizations and other interested stakeholders is necessary to define how "reasonably high confidence" can be achieved.</p>  <p> Although already stated, it is worth repeating that the CNSC does not think a dedicated regulatory document on DECs is necessary. The concept may be addressed in a number of draft and existing regulatory documents and Canadian standards. These documents potentially cover a range of subject areas, including design, analysis, construction, operation, procedures and radiation protection. They could be applicable to existing and future NPPs as well as to small reactor facilities.</p>  <p> The CNSC is committed to working with all interested stakeholders in developing prevention and mitigation strategies for accident situations and scenarios beyond those considered during the initial design of a nuclear facility. This paper has set out the CNSC&#39;s views regarding DECs in relation to other plant states in the hope of encouraging substantive stakeholder dialogue. Its intent is not to offer a definitive CNSC position, but to stimulate discussion on the subject of DECs.</p>  <div className="col-md-6 well ">
<p><strong>Question 5: </strong>Should the CNSC consider revising its regulatory documents to account for DECs? If yes, should they be expanded to explicitly cover equipment and procedures that may be used in DECs?</p>  </div>  <div className="col-md-6  text-right mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
</div>
<div className="col-md-6  mrgn-bttm-0">
<h2 className="nocount" id="sec-how-to">How to Participate</h2>  <p> Please submit your comments or feedback in one of the following ways: </p>  <ul>
<li><strong> In writing:</strong><br/>
Canadian Nuclear Safety Commission<br/>
P.O. Box 1046, Station B<br/>
280 Slater Street<br/>
Ottawa, Ontario, K1P 5S9</li>
<li><strong> Online:</strong> using the electronic comment form</li>
<li><strong> By email: </strong><a href="mailto:consultation@cnsc-ccsn.gc.ca">consultation@cnsc-ccsn.gc.ca</a></li>
<li><strong>By fax:</strong> 613-995-5086</li>  </ul>  <div className="col-md-6  text-right mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
</div>
<div className="col-md-6  mrgn-bttm-0">
<h2 className="nocount" id="sec-app-a">Appendix A: Plant States Diagram</h2>  <p> Plant states impact several aspects of NPP design, analysis and operation. Figure&nbsp;2 (see the following page) shows an approximate mapping between plant states and related topics. </p>  <p> Following the plant states diagram, explanatory notes are provided to elaborate on the content of the figure.</p>  <p> Note that the diagram represents a number of complex concepts. The relationships described are not always as precise as the representation implies. The textual definitions of these concepts from the appropriate source documents should always be preferred.</p>  <p> Many of the transitions between states are actually broad boundaries. Often, overlaps exist between states or sharp boundaries do not apply. Even when numerical criteria are provided, the assessment of the design performance against the criteria may be subject to significant uncertainty.</p>  <table className="table table-striped">
<caption className="text-left">
<strong>Figure 2: </strong>Impact of plant design envelope and plant states
</caption>
<tr className="text-center">
<td style="border-top: 0px !important; border-left: 0px !important;">&nbsp;</td>
<td colSpan="10"><strong>Plant design envelope</strong></td>
<td style="border-top: 0px !important; border-right: 0px !important;">&nbsp;</td>
<td style="border-top: 0px !important; border-right: 0px !important; border-left: 0px !important;">&nbsp;</td>
</tr>
<tr className="text-center">
<td>&nbsp;</td>
<td colSpan="4"><strong>Operational states</strong></td>
<td colSpan="8"><strong>Accident conditions</strong></td>
</tr>
<tr className="text-center">
<td rowSpan="2"><strong>Plant states</strong></td>
<td rowSpan="2">Normal operation</td>
<td colSpan="3" rowSpan="2">Anticipated operational occurrence</td>
<td rowSpan="2">Design-basis accident</td>
<td colSpan="7">Beyond-design-basis accidents</td>
</tr>
<tr className="text-center">
<td colSpan="4">Design extension conditions</td>
<td colSpan="3">Practically eliminated conditions</td>
</tr>
<tr className="text-center">
<td><strong>Design rules</strong></td>
<td colSpan="5">Design basis</td>
<td colSpan="4">Design extension</td>
<td colSpan="3">Not considered as design extension</td>
</tr>
<tr className="text-center">
<td><strong>Core condition</strong></td>
<td colSpan="5">No core damage</td>
<td colSpan="3">No severe fuel degradation </td>
<td colSpan="4">Severe accidents </td>
</tr>
<tr className="text-center">
<td><strong>Classification frequency, 1/y</strong></td>
<td>~1</td>
<td colSpan="3">&gt; 10-2</td>
<td>10-2 to 10-5</td>
<td colSpan="7">&lt;10-5 </td>
</tr>
<tr>
<td rowSpan="2"><strong>Radiological acceptance criteria</strong></td>
<td colSpan="12"><em>Radiation protection regulations</em></td>
</tr>
<tr className="text-center">
<td>ALARA</td>
<td colSpan="3">0.5 mSv</td>
<td>20 mSv</td>
<td colSpan="7"><em>No criteria</em></td>
</tr>
<tr className="text-center">
<td><strong>Deterministic acceptance criteria</strong></td>
<td>Normal conditions of operation</td>
<td colSpan="3">Fitness for service</td>
<td>Integrity of physical barriers</td>
<td colSpan="4">Containment performance limits</td>
<td colSpan="3"><em>No criteria</em></td>
</tr>
<tr className="text-center">
<td><strong>Probabilistic acceptance criteria</strong></td>
<td colSpan="4"><em>No criteria</em></td>
<td>Reliability requirements for safety systems</td>
<td colSpan="7"><p>Safety Goals:</p>
<ul>
<li>core damage frequency</li>
<li>large-release frequency</li>
<li>small-release frequency</li>
</ul></td>
</tr>
<tr className="text-center">
<td rowSpan="4"><strong>Systems, structures and components that play a role</strong></td>
<td colSpan="12">Process systems (defence in depth (DiD) level 1)</td>
</tr>
<tr className="text-center">
<td colSpan="12">Control systems (DiD level 2)</td>
</tr>
<tr className="text-center">
<td colSpan="3">&nbsp;</td>
<td colSpan="9">Safety systems (DiD level 3)</td>
</tr>
<tr className="text-center">
<td colSpan="5">&nbsp;</td>
<td colSpan="7">Complementary design features<br/>
(DiD levels 4 and 5)</td>
</tr>
<tr className="text-center">
<td rowSpan="3"><strong>Operator procedures</strong></td>
<td colSpan="12">Operating manuals</td>
</tr>
<tr className="text-center">
<td colSpan="2">&nbsp;</td>
<td colSpan="5">Accident management</td>
<td colSpan="5">&nbsp;</td>
</tr>
<tr className="text-center">
<td colSpan="6">&nbsp;</td>
<td colSpan="6">Severe accident management</td>
</tr>
<tr className="text-center">
<td><strong>Confidence in preventing significant releases</strong></td>
<td colSpan="5">Design basis rules - high confidence</td>
<td colSpan="4">Reasonable confidence</td>
<td colSpan="3">Significant releases may occur</td>
</tr>
<tr className="text-center">
<td><strong>Offsite response</strong></td>
<td colSpan="5">Not required            </td>
<td colSpan="7">Graded response</td>
</tr>  </table>  <ul>
<li><strong>Design rules:</strong> This describes the type of rules applied during the design process. Inside the design basis, well established codes and standards have been used for many years. This remains unchanged. For the design extension, less conservative rules are applied. Established codes and standards do not typically address this domain. Outside the plant design envelope, no specific design rules are required by REGDOC-2.5.2, <em>Design of Reactor Facilities: Nuclear Power Plants</em>. This does not mean that equipment will not function, but there may be a lower confidence inits functionality.</li>
<li><strong>Core condition:</strong> The design should ensure that no core damage occurs in normal operation and AOOs. For DBAs, limited core damage (such as limited sheath failures or extensive fuel damage in a single channel) may occur. Severe core damage may occur in some DECs. Note that fuel in the spent fuel pools is not shown in Figure 2.</li>
<li><strong>Classification frequency:</strong> REGDOC-2.4.1, <em>Deterministic Safety Analysis</em>, defines the expected frequency range for AOOs and DBAs, although frequency is not the only consideration in the classification of events. The CNSC does not set a lower frequency limit for DECs, as explained in Section 1.2 of the main text.</li>
<li><strong>Radiological acceptance criteria:</strong> The <em>Radiation Protection Regulations</em> [17] establish the ALARA principle and set the dose limits for the public, and occupational and emergency dose limits for workers. Emergencies do not map uniquely to the plant states and are not described here. REGDOC-2.5.2 sets radiological dose acceptance criteria for AOOs and DBAs. More specifically, the dose acceptance criteria are design criteria. They apply only to committed whole-body doses that may be received by average members of the critical groups who are most at risk during the 30 days following an accident, as calculated in deterministic safety analyses.</li>
<li><strong>Deterministic acceptance criteria:</strong> These criteria describe the role of the physical barriers to fission-product release. For normal operation, all barriers are expected to remain intact. For AOOs, all barriers (except those failed as the initiating event; e.g., a pipe leak) should remain intact and fit for return to normal operation. For DBAs, the barriers should remain intact to the extent practicable. For DECs, it is accepted that a severe core damage accident may occur. However, there will be reasonably high confidence that the equipment used for management of DECs will operate as intended and that containment integrity will be maintained to prevent significant radioactive releases.</li>
<li><strong>Probabilistic acceptance criteria:</strong> REGDOC-2.5.2 defines the safety goals that apply to the overall design, in particular to events beyond the design basis. The three criteria used in the establishment of safety goals are: core damage frequency (CDF), small-release frequency (SRF) and large-release frequency (LRF).</li>
<li><strong>Systems, structures and components that play a role:</strong> Process and control systems are designed primarily for levels 1 and 2 defence in depth and are not relied upon for DBAs. However, if functional, these systems may have a role in DECs and severe accidents. Safety systems are primarily designed to give very high confidence that DBAs do not lead to exceeding dose acceptance criteria. They may also have a role in DECs. Complementary design features are specific to DECs.</li>
<li><strong>Operator procedures:</strong> Operator procedures do not map uniquely to plant states. Operating manuals, emergency operating procedures and SAMGs provide a continuity of coverage between normal operation and severe accident conditions. Switching between the types of procedures depends on measured conditions of the plant, not on an abstract definition of plant state. Note that operating manuals may be needed even when the governing procedures are EOPs or SAMGs, since they provide directions for system operation.</li>
<li><strong>Level of confidence in preventing significant releases:</strong> As described in detail in the main text, a high level of confidence is required in meeting requirements within the design basis. For DECs, reasonably high confidence is expected. For very unlikely conditions and events, it is acknowledged that significant releases may occur.</li>
<li><strong>Offsite response:</strong> Offsite response should not be needed for any event within the design basis, although it is acknowledged that precautionary measures may be taken if a release is considered possible should further failures occur. For increasing severity of events, emergency measures such as sheltering, administration of potassium iodine, short-term relocation or long-term evacuation may be implemented. </li>  </ul>  <div className="col-md-6  text-right mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
</div>
<div className="col-md-6  mrgn-bttm-0">
<h2 className="nocount" id="sec-app-b">Appendix B: How DECs are Defined Outside Canada</h2>  <h3 className="nocount" id="sec-app-b-1">International Atomic Energy Agency</h3>  <p>The International Atomic Energy Agency (IAEA) approach is found in IAEA&nbsp;SSR–2/1&nbsp;[1]. It contains the following definition of DECs<sup id="fnb5-ref"><a className="fn-lnk" href="#fnb5"><span className="wb-inv">Footnote </span>5</a></sup>:</p>  <ul className="list-bullet-none">
<li> Accident conditions that are not considered for design basis accidents, but that are considered in the design process of the facility in accordance with best estimate methodology, and for which releases of radioactive material are kept within acceptable limits. Design extension conditions could include severe accident conditions.</li>  </ul>  <h3 className="nocount" id="sec-app-b-2">Finland</h3>  <p>The Finnish Centre for Radiation and Nuclear Safety (STUK) has issued Draft YVL B.1 <em>Safety Design of a Nuclear Power Plant</em> [2] containing the following definition: </p>  <ul className="list-bullet-none">
<li> Design extension condition shall refer to a situation caused by a rare external event, or a situation where the initiating event of an anticipated operational occurrence or Class 1 postulated accident involves a common-cause failure in the safety systems, or a combination of failures, and which the facility is required to withstand without sustaining severe fuel damage.</li>  </ul>  <p> STUK&#39;s definition appears to overlap that for a postulated accident which states that a:</p>  <ul className="list-bullet-none">
<li> [p]ostulated accident shall refer to such a deviation from normal operation that can be assumed to occur less frequently than once over a span of one hundred operating years; and which the nuclear power plant is required to withstand without sustaining severe fuel damage, even if individual components of systems important to safety are rendered out of operation due to servicing or faults.</li>  </ul>  <h3 className="nocount" id="sec-app-b-3">United States of America</h3>  <p>The following proposal was made by the United States Nuclear Regulatory Commission Risk Management Task Force [3] to deal with design-enhancement categories for BDBAs:</p>  <ul className="list-bullet-none">
<li> The NRC should establish through rulemaking a design-enhancement category of regulatory treatment for beyond-design-basis accidents. This category should use risk as a safety measure, be performance-based (including the provision for periodic updates), include consideration of costs, and be implemented on a site-specific basis.</li>  </ul>  <p> This proposal was recently rejected by the Nuclear Regulatory Commission [4], though it may be subsumed into the U.S. NRC&#39;s Risk Management Regulatory Framework.</p>  <h3 className="nocount" id="sec-app-b-4">France and Germany</h3>  <p>The French and German regulators do not use the term DEC. Instead, they use a similar concept: risk reduction categories (RRCs). The French and German regulators jointly prepared <em>Technical Guidelines for the Design and Construction of the Next Generation of Nuclear Power Plants with Pressurized Water Reactors</em>&nbsp;[5]. These guidelines are based on common work of the French Institut de Protection et de Sûreté Nucléaire<sup id="fnb6-ref"><a className="fn-lnk" href="#fnb6"><span className="wb-inv">Footnote </span>6</a></sup> (IPSN) and of the German Gesellschaft für Anlagen- und Reaktorsicherheit (GRS). The guidelines define RRCs, the applicable analysis rules and associated acceptance criteria.</p>  <p> The RRCs are divided into two classes:</p>  <ul>
<li>RRC-A – multiple failures that must be analyzed using deterministic methods in order to design additional measures to prevent core melt</li>
<li>severe accidents – sometimes referred to as RRC-B </li>  </ul>  <p>RRC accidents are analyzed with less conservative assumptions than those applied to DBAs. For example, all systems (except those implicated in the failure) can be assumed operational, the single-failure criterion does not have to be met and equipment is not assumed to be unavailable due to maintenance.</p>  <h3 className="nocount" id="sec-app-b-5">Japan</h3>  <p>The Japanese Nuclear Regulation Authority is currently developing new safety standards that incorporate the lessons learned from the Fukushima Daiichi accident. Its new safety standards do not use the term DEC. Instead, in setting design requirements, the term "postulated BDBAs" is frequently used, indicating that a subset of BDBAs is considered in design. In the requirements for analysis and for severe accident management, the qualifier "postulated" is not normally used, indicating that all BDBAs are to be considered. </p>  <h3 className="nocount" id="sec-app-b-6">References to Appendix B</h3>  <ol>
<li>IAEA Safety Report Series SSR-2/1, <a href="http://www-pub.iaea.org/MTCD/publications/PDF/Pub1534_web.pdf"><em>Safety of Nuclear Power Plants: Design</em></a>, 2012</li>
<li>STUK draft YVL B.1, <a href="https://ohjeisto.stuk.fi/YVL/B.1-L2.pdf"><em>Safety Design of a Nuclear Power Plant</em></a>, 2011</li>
<li>U.S. NRC Risk Management Task Force, <a href="http://pbadupws.nrc.gov/docs/ML1210/ML12109A277.pdf"><em>A Proposed Risk Management Regulatory Framework</em></a>, 2012</li>
<li>U. S. NRC SECY-13-0132, <a href="http://adamswebsearch2.nrc.gov/webSearch2/main.jsp?AccessionNumber=ML14139A273"><em>U.S. Nuclear Regulatory Commission Staff Recommendation for the Disposition of Recommendation 1 of the Near-Term Task Force Report</em></a>, ML14139A273, 2014-05-19</li>
<li>ASN, <a href="http://www.french-nuclear-safety.fr/content/download/85429/594504/version/1/file/technical_guidelines_design_construction.pdf"><em>Technical Guidelines for the Design and Construction of the Next Generation of Nuclear Power Plants with Pressurized Water Reactors</em></a>, adopted during the GPR/German experts plenary meetings held on October 19th and 26th, 2000 (please note that this webpage downloads automatically) </li>  </ol>  <div className="col-md-6  text-right mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
</div>
<div className="col-md-6  mrgn-bttm-0">
<h2 className="nocount" id="sec-app-c">Appendix C: Identification of DECs</h2>  <p> The design authority is responsible for identifying, selecting and classifying events or conditions that comprise DECs. Currently, there is no recognized means for identifying DECs. An understanding of accident progression, processes and accident phenomena is relevant and examination of the following is suggested:</p>  <ul>
<li>major design options and specific plant design features for mitigation of SAs and their roles in achieving severe accident management (SAM) goals</li>
<li>conditions needed for the design of plant features to be used in preventing and mitigating consequences of SAs</li>
<li>SAM strategies for mitigating challenges posed by SAs while at the same time ensuring reliable operation of safety functions and returning the plant to a stable controlled state</li>
<li>selection of representative events and accident sequences for determining actual design conditions</li>
<li>appropriate deterministic accident analyses for design support</li>  </ul>  <p>Selection of DECs may also be aided by:</p>  <ul>
<li>the elements found in the CNSC regulatory framework (such as REGDOC-2.5.2, <em>Design of Reactor Facilities: Nuclear Power Plants</em> and REGDOC-2.4.1, <em>Deterministic Safety Analysis</em>)</li>
<li>an understanding of accident progression, processes and phenomena</li>
<li>the expectation that the end goal is to practically eliminate significant releases</li>  </ul>  <p>A proposed process for identification and selection of DECs is described in the following six steps. Note that the identification of DECs is likely to be an iterative process; the starting point is not particularly important.</p>  <ol>
<li>
<p><strong>Identify the design features considered in prevention or mitigation of a BDBA or an SA and defining their intended roles.</strong>
<p></strong>These features may include: </p>
<ol>
<li>barriers to delay or arrest the progression of the accident and migration of the corium<sup id="fnb7-ref"><a className="fn-lnk" href="#fnb7"><span className="wb-inv">Footnote </span>7</a></sup></li>
<li>containment and containment systems </li>
<li>shielding provisions </li>
<li>other equipment or instrumentation used in SAM </li>
</ol>
<p>As part of the overall strategy for addressing challenges and plant conditions and for restoring and maintaining safety functions, the roles of each design feature should be clearly defined. The objective is to illustrate that the planned operation of these systems can be reasonably expected to practically eliminate significant radioactive releases. This objective is essential for determining the conditions for these features which must be designed and the rationales for selecting these conditions.</p>
</li>
<li>
<p><strong>Identifying the parameters of the design for design features considered for use in preventing or mitigating a BDBA/SA defined above. </strong></p>
<p></strong>Typical design parameters may include: </p>
<ul>
<li> environmental conditions, such as:
<ul>
<li>process parameters and local conditions – pressure, temperature, humidity, chemical conditions and radiation conditions </li>
<li>local environmental conditions that could be caused by a fire, flood or earthquake</li>
<li>other environmental conditions induced by external events </li>
</ul>
</li>
<li>functional expectations to meet the needs of performing their intended roles during an accident; for example, for the design of passive autocatalytic recombiners (PARs) (i.e., determining the number and location of PARs units), information would be needed on hydrogen source term, rate and location of release, and distribution patterns </li>
<li>access, actuation, timing, as applicable </li>
<li>support resources (such as power or water) as applicable, such as:
<ul>
<li>makeup of water, including inventory and injection point</li>
<li>power, including loads and duration of availability</li>
</ul>
</li>
</ul>
<p>These design parameters are derived with best-estimate methodology from analysis of the representative set of accidents to be considered in plant design. This is discussed further in step 6, below. </p>
</li>
<li>
<p><strong>Identifying factors of the accident progression (i.e., mechanistic conditions in the plant, processes and phenomena which must be addressed by the SAM program) relevant for determining limiting values and range for the timing and amplitude of the parameters needed for design. </strong></p>
<p>For example, determining the number and the location of PARs requires data on hydrogen source term as well as the rate and location of the hydrogen release. These parameters are influenced by the specific accident progression pattern. The rate of hydrogen generation is primarily affected by the following conditions: </p>
<ul>
<li>surface area of contact between steam and metal, which depends on fuel temperature and on the timing of core collapse </li>
<li>temperature of metal in contact with steam, which depends on fuel temperature and on the timing and rate of water injection </li>
<li>extent, duration and location of corium-concrete interaction, which depends on movement of corium, and on corium cooling before and after initiation of corium-concrete interaction </li>
</ul>
<p>These are some of the conditions that are not considered in the design basis, but that would apply in the design process of the plant for DECs.</p>
</li>
<li>
<p><strong>Identifying initiating events (IE), human error (HE), and SSC operability (success, failure) which are relevant for determining limiting values/ranges of the parameters needed for design.  </strong></p>
<p>It is necessary to identify the combinations of individual events (IE including external events; HE and SSC successes or failures) whose occurrence during an accident will generate the limiting conditions to be used in the design process of the plant. </p>
<p>The combinations of events listed above should be identified based on an understanding of the influence of the combination of various individual events on the progression of accidents. Other conditions that may be relevant, such as initial plant conditions, should also be identified here. Major uncertainties in the progression of an accident should be considered, including: </p>
<ul>
<li>timing of failures and timing of recovery of SSCs </li>
<li>timing of operator actions </li>
<li>partial successes, partial failures and partial recoveries of SSCs</li>
</ul>
</li>
<li>
<p><strong>Identify individual accident scenarios that include combinations of identified IE, HE and SSC success/failure. </strong></p>
<p>These accident scenarios contain conditions (step 3) and events (step 4) needed for the design. Identification of individual accident sequences may use PSA results of event-tree analyses, if applicable. It must be recognized that PSA methodology has inherent limitations, such as lack of a time scale for human errors, failures and recoveries; lack of capability to consider partial success or partial failures; or lack of adequate human reliability models for SAM-specific decision-making processes. Care must be taken to ensure that these limitations are considered and compensated by supplementary rationales, means and sensitivity cases. </p>
</li>
<li>
<p><strong>Optimize the set of accident scenarios to reduce it to a manageable number of sequences. </strong></p>
<p>The optimized set of accident scenarios is the set that should be considered in design. The accident scenarios in this set contain conditions and events needed for the design of mitigation strategies. Deterministic analyses of these sequences will provide the numerical values for the set of the design parameters identified. These analyses will follow the requirements and guidance in REGDOC-2.4.1, <em>Deterministic Safety Analysis. </em></p>
</li>  </ol>  <div className="col-md-6  text-right mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
</div>
<div className="col-md-6  mrgn-bttm-0">
<h2 className="nocount" id="sec-abbr">Abbreviations</h2>  <dl className="cnsc-glossary">
<dt>ALARA</dt>
<dd>as low as reasonably achievable</dd>
<dt>AOO</dt>
<dd>anticipated operational occurrence</dd>
<dt>BDBA</dt>
<dd>beyond-design-basis accident</dd>
<dt>CNSC</dt>
<dd>Canadian Nuclear Safety Commission</dd>
<dt>CSA</dt>
<dd>Canadian Standards Association</dd>
<dt>DBA</dt>
<dd>design-basis accident</dd>
<dt>DECs</dt>
<dd>design extension conditions</dd>
<dt>GRS</dt>
<dd>Gesellschaft für Anlagen- und Reaktorsicherheit </dd>
<dt>HE</dt>
<dd>human error</dd>
<dt>IAEA</dt>
<dd>International Atomic Energy Agency</dd>
<dt>IE</dt>
<dd>initiating event</dd>
<dt>IPSN</dt>
<dd>Institut de Protection et de Sûreté Nucléaire</dd>
<dt>IRSN</dt>
<dd>Institut de Radioprotection et de Sûreté Nucléaire</dd>
<dt>NPP</dt>
<dd>nuclear power plant</dd>
<dt>NRA</dt>
<dd>Japanese Nuclear Regulation Authority</dd>
<dt>PARs</dt>
<dd>passive autocatalytic recombiners</dd>
<dt>PSA</dt>
<dd>probabilistic safety assessment</dd>
<dt>R&amp;D</dt>
<dd>research and development</dd>
<dt>RRC</dt>
<dd>risk reduction categories</dd>
<dt>SA</dt>
<dd>severe accident </dd>
<dt>SAM</dt>
<dd>severe accident management</dd>
<dt>SAMGs</dt>
<dd>severe accident management guidelines</dd>
<dt>SSCs</dt>
<dd>structures, systems and components</dd>
<dt>STUK</dt>
<dd>Finnish Centre for Radiation and Nuclear Safety </dd>
<dt>USNRC</dt>
<dd>United States Nuclear Regulatory Commission</dd>  </dl>  <div className="col-md-6  text-right mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
</div>
<div className="col-md-6  mrgn-bttm-0">
<h2 className="nocount" id="sec-ref">References</h2>  <ol>
<li><a href="http://www.nuclearsafety.gc.ca/eng/pdfs/reports/FTFR-CNSC-Integrated-Action-Plan.pdf"><em>Canadian Nuclear Safety Commission (CNSC), Integrated Action Plan on the Lessons Learned from the Fukushima Daiichi Nuclear Accident</em></a>, 2013</li>
<li>CNSC draft RD-337 version 2, <em>Design of New Nuclear Power Plants</em>, 2012</li>
<li>CNSC REGDOC-2.5.2<em>, </em><a href="http://www.nuclearsafety.gc.ca/pubs_catalogue/uploads/REGDOC-2-5-2-Design-of-Reactor-Facilities-Nuclear-Power-Plants-eng.pdf"><em>Design of Reactor Facilities: Nuclear Power Plants</em></a>, 2014</li>
<li>CNSC REGDOC-2.3.2 <a href="http://www.nuclearsafety.gc.ca/pubs_catalogue/uploads/REGDOC-2-3-2-Severe-Accident-management-programs-for-nuclear-reactors.pdf"><em>Operating Performance: Accident Management: Severe Accident Management Programs for Nuclear Reactors</em></a><em>, </em>2013</li>
<li>CNSC REGDOC-2.4.1, <a href="http://www.nuclearsafety.gc.ca/pubs_catalogue/uploads/REGDOC-2-4-1-Deterministic-Safety-Analysis-eng.pdf"><em>Deterministic Safety Analysis</em></a>, 2014</li>
<li>International Atomic Energy Agency (IAEA) Safety Specific Guide SSG - 2, <em>Deterministic Safety Analysis for Nuclear Power Plants</em>, 2009</li>
<li>IAEA Safety Report Series <a href="http://www-pub.iaea.org/MTCD/publications/PDF/Pub1327_web.pdf">SRS No. 56, <em>Approaches and Tools for Severe Accident Analysis for Nuclear Power Plants</em></a>, 2008</li>
<li>CNSC <a href="http://www.nuclearsafety.gc.ca/pubs_catalogue/uploads/20121212-RDGD-210-maintenance-programs-nuclear-power-plants-eng.pdf">RD/GD-210, <em>Maintenance Programs for Nuclear Power Plants</em></a>, 2012</li>
<li>CNSC <a href="http://www.nuclearsafety.gc.ca/pubs_catalogue/uploads/June-2012-RDGD-98-Reliability-Programs-for-Nuclear-Power-Plants_e.pdf">RD/GD-98,<em> Reliability Programs for Nuclear Power Plants</em></a>, 2012</li>
<li>CNSC draft REGDOC-2.3.2, <a href="http://www.nuclearsafety.gc.ca/pubs_catalogue/uploads/REGDOC-2-3-2-Integrated-Accident-Management-Programs-for-Nuclear-Reactors.pdf"><em>Accident Management</em></a>, 2014</li>
<li>CNSC <a href="http://www.nuclearsafety.gc.ca/pubs_catalogue/uploads/G225_e.pdf">G-225, <em>Emergency Planning at Class I Nuclear Facilities and Uranium Mines and Mills</em></a>, 2001</li>
<li>CNSC <a href="http://www.nuclearsafety.gc.ca/pubs_catalogue/uploads/rd-353-e.pdf">RD-353, <em>Testing the Implementation of Emergency Measures</em></a>, 2008</li>
<li>CNSC draft REGDOC-2.10.1, <a href="http://www.nuclearsafety.gc.ca/pubs_catalogue/uploads/REGDOC-2-10-1-Emergency-Preparedness-Programs.pdf"><em>Nuclear Emergency Preparedness and Response</em></a>, to be issued Fall 2015</li>
<li>CNSC <a href="http://www.nuclearsafety.gc.ca/pubs_catalogue/uploads/44019-G276E.pdf">G-276, <em>Human Factors Engineering Program Plans</em></a>, 2003</li>
<li>CNSC <a href="http://www.nuclearsafety.gc.ca/pubs_catalogue/uploads/G278_e.pdf">G-278,<em> Human Factors Verification and Validation Plans</em></a>, 2003</li>
<li>CNSC <a href="http://www.nuclearsafety.gc.ca/pubs_catalogue/uploads/DIS-13-01-Proposals-to-Amend-the-Radiation-Protection-Regulations.pdf">DIS-13-01, <em>Proposals to Amend the Radiation Protection Regulations</em></a>, 2013</li>
<li>CNSC INFO-0824, <a href="http://www.nuclearsafety.gc.ca/pubs_catalogue/uploads/October-2011-CNSC-Fukushima-Task-Force-Report_e.pdf"><em>CNSC Fukushima Task Force Report</em></a>, 2011</li>
<li>Government of Canada, <a href="http://laws-lois.justice.gc.ca/PDF/SOR-2000-203.pdf">SOR/2000-203, <em>Radiation Protection Regulations</em></a>, 2000</li>
<li>CNSC <a href="http://www.nuclearsafety.gc.ca/pubs_catalogue/uploads/RD-360_e_PDF.pdf">RD-360,<em> Life Extension for Nuclear Power Plants</em></a>, 2008</li>  </ol>  <div className="col-md-6  text-right mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="wb-fnote" role="note">
<section>
<h2 id="fnb" className="wb-inv">Footnotes</h2>
<dl>
<dt>Footnote 1</dt>
<dd id="fnb1">
<p><strong>Plant design authority</strong> typically rests with the organization that has overall responsibility for the design. Prior to plant start-up, this authority must be transferred to the operating organization. The design authority may assign responsibility for the design of specific parts of the plant to other organizations, known as responsible designers. The tasks and functions of the design authority and any responsible designer need to be established in formal documentation; however, the overall responsibility remains with the design authority.</p>
<p className="fn-rtn"><a href="#fnb1-ref"><span className="wb-inv">Return to footnote </span>1<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 2</dt>
<dd id="fnb2">
<p><strong>Complementary design feature</strong>: An element added to the design as a stand-alone SSC or as an added capability to an existing SSC to cope with DECs.</p>
<p className="fn-rtn"><a href="#fnb2-ref"><span className="wb-inv">Return to footnote </span>2<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 3</dt>
<dd id="fnb3">
<p><strong>Applicability</strong> is shown by demonstrating that the assumptions, models, rules, etc. used for generation of the information in the PSA are compatible with the use of that data.</p>
<p className="fn-rtn"><a href="#fnb3-ref"><span className="wb-inv">Return to footnote </span>3<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 4</dt>
<dd id="fnb4">
<p><strong>CSA Group: </strong>Name by which the Canadian Standards Association is now known.</p>
<p className="fn-rtn"><a href="#fnb4-ref"><span className="wb-inv">Return to footnote </span>4<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 5</dt>
<dd id="fnb5">
<p>SSR-2/1 has been under review since the Fukushima accident. Changes are anticipated in requirements for DECs, spent fuel pools, multiple units and provisions for external events. </p>
<p className="fn-rtn"><a href="#fnb5-ref"><span className="wb-inv">Return to footnote </span>5<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 6</dt>
<dd id="fnb6">
<p>IPSN is now part of the Institut de Radioprotection et de Sûreté Nucléaire (IRSN)</p>
<p className="fn-rtn"><a href="#fnb6-ref"><span className="wb-inv">Return to footnote </span>6<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 7</dt>
<dd id="fnb7">
<p><strong>Corium</strong>: A lava-like molten mixture consisting of portions of the nuclear reactor core.</p>
<p className="fn-rtn"><a href="#fnb7-ref"><span className="wb-inv">Return to footnote </span>7<span className="wb-inv"> referrer</span></a></p>
</dd>
</dl>
</section>  </div>  </div>
                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }