import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "en",
                pageTitle: "DIS-17-01, Framework for Recovery in the Event of a Nuclear or Radiological Emergency", 
                dateModified: "2017-08-15",
                langToggleUrl: "/fra/acts-and-regulations/consultation/comment/d-17-01"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<h2>Preface</h2>  <p>Discussion papers play an important role in the selection and development of the regulatory framework and regulatory program of the Canadian Nuclear Safety Commission (CNSC). They are used to solicit early public feedback on CNSC policies or approaches.</p>   <p>The use of discussion papers early in the regulatory process underlines the CNSC&#39;s commitment to a transparent consultation process. The CNSC analyzes and considers preliminary feedback when determining the type and nature of requirements and guidance to issue.</p>   <p>Since recovery in the event of a nuclear or radiological emergency is a broad and complex matter, it will impact many levels of government and numerous emergency response organizations. To begin addressing these complexities and collect early feedback, a draft version of this discussion paper was shared with targeted stakeholders. In addition, a partnership was established between two such organizations: the CNSC and Health Canada. This discussion paper is a product of this ongoing collaboration.</p>   <p>Discussion papers are made available for public comment for a specified period of time. At the end of the public comment period, CNSC staff review all public input, which is then posted for feedback on the CNSC website for a second round of consultation.</p>  <p>The CNSC considers all feedback received from this consultation process in determining its regulatory approach.</p>
<div className="col-md-12 module-table-contents">
<h2>Table of Contents</h2>
<ul>
<li><a href="#summary">Executive summary</a></li>
<li><a href="#sec1">1.0 Introduction</a>
<ul>
<li><a href="#sec1-1">1.1 What is recovery</a></li>
</ul></li>
<li><a href="#sec2">2.0 Introduction to emergency management</a>
<ul>
<li><a href="#sec2-1">2.1 Nuclear enmergency response in Canadaa</a></li>
</ul></li>
<li><a href="#sec3">3.0 Plans for recovery in Canada</a>
<ul>
<li><a href="#sec3-1">3.1 Federal plans for recovery</a>
<ul>
<li><a href="#sec3-1-1">3.1.1 Specific recovery activities described in FERP</a></li>
<li><a href="#sec3-1-2">3.1.2 Specific recovery activities described in FNEP</a></li>
</ul></li>
<li><a href="#sec3-2">3.2 Provincial plans for recovery</a>
<ul>
<li><a href="#sec3-2-1">3.2.1 Existing plans example: Ontario</a></li>
<li><a href="#sec3-2-2">3.2.2 Existing plans example: British Columbia</a></li>
</ul></li>
<li><a href="#sec3-3">3.3 Municipal roles and responsibilities</a></li>
</ul></li>
<li><a href="#sec4">4.0 Proposed framework for recovery</a>
<ul>
<li><a href="#sec4-1">4.1 Key recovery elements</a>
<ul>
<li><a href="#sec4-1-1">4.1.1 Stability of the situation</a></li>
<li><a href="#sec4-1-2">4.1.2 Transition</a></li>
<li>Optimization principle</li>
<li><a href="#sec4-1-3">4.1.3 Protecting the public</a></li>
<li><a href="#sec4-1-4">4.1.4 Return to a new normal</a></li>
</ul></li>
<li><a href="#sec4-2">4.2 Protecting the public during recovery</a>
<ul>
<li><a href="#sec4-2-1">4.2.1 Implementing recovery strategies</a>
<ul>
<li>4.2.1.1 Protective actions implemented by the recovery management organization</li>
<li>4.2.1.2 Recommendations for self-help actions</li>
</ul></li>
<li><a href="#sec4-2-2">4.2.2 Environmental and food chain monitoring</a></li>
<li><a href="#sec4-2-3">4.2.3 Exposure pathways and dose assessments</a></li>
<li><a href="#sec4-2-4">4.2.4 Health monitoring</a></li>
<li><a href="#sec4-2-5">4.2.5 Managing contamination</a>
<ul>
<li>4.2.5.1 Decontamination</li>
<li>4.2.5.2 Waste management</li>
</ul></li>
<li><a href="#sec4-3">4.3 Protecting recovery workers</a></li>
</ul></li>
<li><a href="#sec5">5.0 Public communication considerations during recovery</a></li>
<li><a href="#sec6">6.0 Stakeholder feedback on the proposed regulatory approach</a></li>
<li><a href="#sec7">7.0 How to participate</a></li>
<li><a href="#acro">Acronyms</a></li>
<li><a href="#glossary">Glossary</a></li>
<li><a href="#ref">References</a></li>
<li><a href="#biblio">Bibliography</a></li>   </ul>
</div>  <div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="summary"></div>
<h2>Executive summary</h2>  <p>Emergency preparedness typically focuses on the response phases of a nuclear or radiological emergency where advanced planning is required to mitigate the consequences of the emergency and to adequately protect the population from potentially harmful effects of radiation. The decision-making process in the post-emergency recovery phase is also highly complex.  There is therefore a need to develop a robust framework for recovery in the event of a nuclear or radiological emergency.</p>  <p>In this discussion paper, the Canadian Nuclear Safety Commission (CNSC) describes the measures that decision makers may need to consider prior to, or following, the response to an emergency. Such measures are created to protect the public from potential health effects related to long-term exposure to radiation. They also take into account the economic, political, environmental, cultural, ethical, psychological and social consequences of the decisions taken to mitigate any potential radiological health consequences.</p>  <p>The purpose of this discussion paper is to propose regulatory considerations and guidance, and collect early feedback on the proposed Canadian framework for recovery following an emergency. The CNSC intends to use this feedback to finalize its discussion paper for a public consultation period and to inform its regulatory approach.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="1"></div>
<h2 id="sec1">1.0 Introduction</h2>  <p>The Canadian Nuclear Safety Commission regulates the use of nuclear energy and materials to protect health, safety, security and the environment; to implement Canada&#39;s international commitments on the peaceful use of nuclear energy; and to disseminate objective scientific, technical and regulatory information to the public.</p>  <p>Under the <a href="http://laws-lois.justice.gc.ca/eng/acts/N-28.3/FullText.html"><em>Nuclear Safety and Control Act</em> (NSCA)</a> [1], CNSC&#39;s mandate involves four major areas:</p>
<ul>
<li>regulation of the development, production and use of nuclear energy in Canada to protect health, safety and the environment</li>
<li>regulation of the production, possession, use and transport of nuclear substances, and the production, possession and use of prescribed equipment and prescribed information</li>
<li>implementation of measures respecting international control of the development, production, transport and use of nuclear energy and substances, including measures respecting the non-proliferation of nuclear weapons and nuclear explosive devices</li>
<li>dissemination of scientific, technical and regulatory information concerning the activities of CNSC, and the effects on the environment, on the health and safety of persons, of the development, production, possession, transport and use of nuclear substances.</li>
</ul>  <p>The CNSC also administers, implements and maintains the Nuclear Emergency Management (NEM) Program, through which Canada&#39;s response to domestic nuclear and radiological incidents is coordinated. The NEM is established in accordance with the <a href="http://laws-lois.justice.gc.ca/eng/acts/E-4.56/"><em>Emergency Management Act</em> (EMA)</a> [2], the <a href="http://laws-lois.justice.gc.ca/eng/acts/N-28.3/FullText.html">NSCA</a> [1], as well as regulatory documents and nuclear emergency response plans. The NEM relies on close cooperation and planning with other federal departments and agencies, as well as provincial and international organizations.</p>  <p>Figure 1 presents the framework for a nuclear or radiological emergency as well as some examples of key actions undertaken during emergency preparedness, emergency response and recovery. In Canada, there are well established and documented expectations for emergency preparedness and response. The recovery aspect requires further development.</p>  <p><strong>Figure 1: Nuclear or radiological emergency framework and examples of associated key actions to undertake during emergency preparedness, emergency response and recovery</strong></p>  <img src="/images/d-17-01/figure-1.jpg" alt="" />  <p>The realities of past emergencies (such as those at Chernobyl, Fukushima and Goiania) highlight the need to bring further attention to the recovery phase for nuclear or radiological emergencies of all magnitudes. Recognizing that this is an area of increasing international focus, further consideration must be given to developing practical guidance for decision makers and stakeholders in regard to emergencies during which:</p>
<ul>
<li>contamination is widespread and life was significantly disrupted for a long period of time</li>
<li>the radiological, psychological and social impacts are limited in space and time</li>
</ul>
<div className="span-3 mrgn-rght-0 margin-botton-none">  <p>The feedback on the proposed framework will be used to inform the CNSC&#39;s approach. The selected vehicle will provide guidance on the considerations that should be taken into account during recovery and the transition to recovery in the event of an incident or emergency. It will also complement any existing regulatory documents that pertain to emergency preparedness, response requirements and guidance related to the development of emergency measures for Class I nuclear facilities and uranium mines and mills.</p>  </div>
<div className="col-md-3 module  pull-right mrgn-lft-0 mrgn-bttm-0 mrgn-bttm-xl" style="border:3px solid #006400;" >  <h3 className="text-center">Additional sources of information</h3>
<ul>
<li>For information on onsite recovery, consult <a href="/eng/acts-and-regulations/regulatory-documents/published/html/regdoc2-10-1/index">REGDOC-2.10.1, <em>Nuclear Emergency Preparedness and Response</em></a> [3]</li>
<li>For information on the protection of workers during an emergency, consult the <a href="http://gazette.gc.ca/rp-pr/p1/2016/2016-10-08/html/reg1-eng.php#reg"><em>Radiation Protection Regulations</em></a> (RPR)[4]</li>
</ul>  </div>  <div className="clear"></div>
<h3>Scope</h3>  <p>This document details measures that should be considered for the protection of the health and safety of the public and the environmental consequences to the public following an emergency. Although beyond the scope of this document, social and economic consequences must also be considered during recovery efforts.</p>  <p>This framework assumes that a radioactive release has occurred and has resulted in levels of radioactive contamination above prescribed limits in the public domain (i.e., in an area accessible to the public which is not under the direct control of the licensee). In some emergency situations, it is possible that actions may be taken as a precaution (such as an evacuation) prior to a predicted release. In general, if such a release does not occur and conditions stabilize, there are mechanisms in place to terminate or lift protective actions for a timely resumption of normal life. These situations are not the focus of this discussion paper. However, public concern and political interest may warrant some action. Some elements of the recovery framework may therefore be invoked, for example communication and engagement with the public.</p>  <p>Some critical activities and infrastructure (such as hospitals) will require that recovery actions from the nuclear emergency begin very quickly after the emergency, despite the fact that many authorities may still be in emergency-response mode. These early recovery actions should be implemented through the emergency management organization, but may be guided by the concepts in this document.</p>
<div className="col-md-12 module ">  <p>For this section on "Scope", the CNSC would like to hear comments on the following questions:</p>  <p>Q1.	Do you consider the scope appropriate in the context of establishing a recovery framework? If not, how should the scope be modified or improved?</p>  <p>Q2. Could we define our assumptions more clearly? If so, how?</p>  </div>
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
<h3 id="sec1-1">1.1 What is recovery</h3>  <p>Recovery can be defined as the short-, medium- and long-term actions taken following an emergency to restore quality of life, social systems, economies, community infrastructure and the environment. The extent of the measures taken during recovery would typically be determined by the authorized jurisdiction, in consultation with the stakeholders affected by the emergency and its aftermath. The scope of recovery efforts should be commensurate with the impact of the emergency on the surrounding population and environment.</p>   <p>In order for members of the public to resume daily life, recovery efforts will be situation specific and may include:</p>
<ul>
<li>environmental monitoring and remediation</li>
<li>decontamination and waste management</li>
<li>psychological and social support, including reassurance monitoring</li>
<li>rebuilding of impacted infrastructure</li>
<li>economic recovery and provisions for financial assistance</li>
<li>long-term medical follow up</li>
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
<h2 id="sec2">2.0 Introduction to emergency management</h2>  <p>Emergency management is composed of four pillars: prevention and mitigation, preparedness, response and recovery [5]. Preventing nuclear emergencies from occurring in Canada is primarily the responsibility of the licensee. The CNSC, under the authority of the NSCA, regulates the Canadian nuclear industry to limit the risks to the environment and the health and safety of the public. Prevention is defined as actions taken to ensure that a nuclear emergency does not occur, or to reduce its likelihood of occurring.</p>  <p>The aim of emergency preparedness is to ensure that an adequate capability to respond to an emergency is in place at the operating organization (e.g., the licensee) and at local, regional and national levels and, where appropriate, the international level [6]. This capability relates to an integrated set of infrastructure elements that include, but are not limited to: the authorities and responsibilities of the decision makers, organizational staffing, plans and procedures, training drills and exercises, and the organizational management system.</p>  <p>In event of an emergency, the goals of the emergency response are to [6]:</p>
<ul>
<li>regain control of the situation and mitigate consequences</li>
<li>save lives</li>
<li>avoid or minimize severe immediate health effects</li>
<li>render first aid, provide critical medical treatment and manage the treatment of radiation injuries</li>
<li>reduce the risk of long-term health effects such as radiation-induced cancer</li>
<li>keep the public informed and maintain public trust</li>
<li>mitigate, to the extent practicable, non-radiological consequences</li>
<li>protect, to the extent practicable, property and the environment</li>
<li>prepare, to the extent practicable, for the resumption of normal social and economic activity</li>
</ul>  <p>In Canada, the framework for emergency preparedness and response is well established and documented in applicable legislation, information and guidance documents. One of the emergency response goals indicates the need to prepare for recovery activities during the response of the emergency. This is required to ensure a prompt and effective resumption of social and economic activity after the termination of an emergency.</p>   <p>This discussion paper describes key elements that should be considered for recovery to take place. It also describes related roles and responsibilities. Where possible, these elements should be considered at the emergency preparedness stage.</p>
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
<h2 id="sec2-1">2.1 Nuclear emergency response in Canada</h2>  <p>Emergency response in Canada is a shared responsibility among all levels of government, private-sector entities, non-governmental organizations and individuals. However, Canada&#39;s provincial and territorial governments have the primary responsibility for protecting public health and safety, property and the environment within their borders. </p>  <p>The International Atomic Energy Agency (IAEA) has established requirements for an adequate level of preparedness and response that are intended to mitigate the consequences of an emergency. The fulfillment of these requirements will contribute to worldwide harmonization of arrangements for preparedness for, and responses to, an emergency [6]. As an IAEA member state, Canada strives to align with these requirements.</p>  <p>Canada&#39;s <a href="http://www.publicsafety.gc.ca/cnt/rsrcs/pblctns/mrgnc-rspns-pln/index-eng.aspx">Federal Emergency Response Plan</a> (FERP) outlines the processes and mechanisms to facilitate an integrated Government of Canada response to any type of emergency, including a nuclear emergency [7]. Within the structure of the FERP, the <a href="https://www.canada.ca/en/health-canada/services/health-concerns/reports-publications/emergencies-disasters/federal-nuclear-emergency-plan-part-1-master-plan.html">Federal Nuclear Emergency Plan</a> (FNEP) and its annexes describe Canada&#39;s national framework for planning for and responding to a nuclear emergency that impacts Canadians [8]. The FNEP also includes an annex outlining the responsibilities of the various federal departments as well as province-specific annexes that describe the required activities to support each province in its response to a nuclear emergency [8]. Health Canada is responsible for managing the FNEP.</p>   <p>Although provincial governments have the primary responsibility for making decisions on protective actions, Health Canada (HC) also provides guidance on protective actions in the <a href="https://www.canada.ca/en/health-canada/services/environmental-workplace-health/reports-publications/radiation/canadian-guidelines-intervention-nuclear-emergency-november-2003.html"><em>Canadian Guidelines for Intervention During a Nuclear Emergency</em></a> and the <a href="https://www.canada.ca/en/health-canada/services/environmental-workplace-health/reports-publications/environmental-contaminants/canadian-guidelines-restriction-radioactively-contaminated-food-water-following-nuclear-emergency-guidelines-rationale.html"><em>Canadian Guidelines for the Restriction of Radioactively Contaminated Food and Water Following a Nuclear Emergency</em></a>. [9,10] The guidance provided by HC may be adopted in full or in part into the detailed nuclear emergency plans of the individual provinces and territories.</p>
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
<h2 id="sec3">3.0 Plans for recovery in Canada</h2>  <p>During recovery, the degree of involvement of the various levels of governmental decision makers will depend on the significance of the consequences of the emergency and the details of the recovery process itself. However, as with emergency preparedness and response, recovery is primarily the responsibility of the affected province or territory. Due to the extensive involvement of the affected individuals and communities in the recovery process, the affected municipalities will also have significant roles to play in the decision-making process. The existing recovery plans of all levels of government are summarized in this section. The sequence in which these entities are listed is not meant to reflect ordering of authority nor involvement.</p>
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
<h3 id="sec3-1">3.1 Federal plans for recovery</h3>  <p>The details of the management and coordination of the recovery phase of a nuclear emergency fall outside the scope of the FERP and FNEP. Although these plans indicate that the responsibility for recovery is largely within provincial or territorial jurisdiction, both provide some insight into the expected structure of the federal component of recovery operations.</p>   <p>All of the information contained within the FERP and the FNEP describe the need for a federal management structure for the recovery phase that parallels that of the emergency phase. However, unlike the emergency phase, the specifics of who will be implicated and what functions are expected require further consideration and documentation.</p>
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
<h4 id="sec3-1-1">3.1.1 Specific recovery activities described in FERP</h4>  <p>Under the FERP, the Federal Coordination Centre is defined as the regional representation of the federal government that acts as the focal point of federal and federal-provincial/territorial coordination during a response. The purpose of the Federal Coordination Centre is to plan the overall strategy of the response and recovery [5].</p>  <p>The emergency support functions (ESFs), which represent specific areas of federal assistance during an emergency, are outlined in Annex A of the FERP. The ESFs are designated as either &#39;primary&#39; or &#39;secondary&#39; departments, depending on the mandate of each federal institution in relation to the ESF. Among other responsibilities detailed within each ESF, the primary department is responsible for planning for short and long-term emergency response and recovery operations.</p>   <p>When requested by the designated primary department, supporting departments are responsible for executing their discrete responsibilities, such as: participating in planning for short and long-term emergency response and recovery operations, and developing supporting operational plans, standard operating procedures, checklists or other job aids in concert with existing first-responder standards [5].</p>
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
<h4 id="sec3-1-2">3.1.2 Specific recovery activities described in FNEP</h4>  <p>The FNEP provides a few more operational details regarding the transition to recovery and the FNEP de-escalation process. It states that the Deputy Minister or Assistant Deputy Minister-Committee, in consultation with the Privy Council Office, will approve the transition to recovery and termination of the emergency and will designate a Primary Federal Minister for Recovery and a National Recovery Coordinator [8].</p>  <p>Although the Minister of Public Safety is the responsible minister during the emergency phase, as indicated in the <a href="http://laws-lois.justice.gc.ca/eng/acts/E-4.56/">EMA</a>, the role of primary federal minister for recovery could be assigned to any Minister of the Crown who would then be responsible for coordinating federal recovery operations [2].</p>  <p>The National Recovery Coordinator (the coordinator) would replace the Federal Coordinating Officer and the FNEP senior officials from the emergency situation. The coordinator would be responsible for assembling, coordinating and identifying federal recovery priorities in a national recovery support organization and to implement the federal recovery activities [8]. This organization would also be involved with the provincially established recovery management organization, the role of which is further described in section 3.2. Further, departments and agencies that have nuclear emergency functions that may also be relevant to recovery could be called on by primary departments to support recovery.</p>
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
<h3 id="sec3-2">3.2 Provincial plans for recovery</h3>  <p>Although all provinces and territories have roles and responsibilities regarding emergencies, most provinces that do not have nuclear power reactors or host foreign nuclear powered or nuclear capable vessels generally do not have nuclear or radiological emergency plans in place. Since Ontario, Quebec and New Brunswick have nuclear power plants, these provinces have plans aimed at protecting the public in the event of an emergency. Similarly, several ports in British Columbia and Nova Scotia are capable of hosting foreign nuclear-powered or nuclear-capable vessels. For this reason, British Columbia and Nova Scotia also have nuclear emergency response plans in place.</p>  <p>Some of the existing provincial emergency response plans include guidance on recovery actions, particularly with regard to triggering and ensuring the transition from emergency response to recovery. Examples of these plans that are available for reference online and that include descriptions of the mechanisms and responsibilities for the transition to recovery are those of the Ontario Ministry of Community Safety and Correctional Services [11] and the British Columbia Ministry of Health [12].</p>
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
<h4 id="sec3-2-1">3.2.1 Existing plan example: Ontario</h4>  <p>Ontario&#39;s Provincial Nuclear Emergency Response Plan (PNERP) states that when appropriate, the Provincial Emergency Operations Centre (PEOC) will declare the end of the response phase, and ensure a smooth transition to the recovery phase [11]. At a suitable stage, the PEOC will consult with the major organizations involved in the emergency response regarding their transition to the recovery phase, and what lead time they would need to make a smooth transition. Based on these consultations, the PEOC will set a time for ending the response phase and inform all stakeholders involved in advance.</p>  <p>In Ontario, responsibilities are articulated in the PNERP by the Office of the Fire Marshal and Emergency Management. Specific details about the roles of Order in Council ministries are articulated in the PNERP Annex I. Upon transition to recovery, the Ministry of Health and Long-Term Care will plan and lead the recovery of the health sector as specified in section 5.13 of the <a href="http://www.health.gov.on.ca/en/pro/programs/emb/rhrp/">Radiation Health Response Plan</a> [13].</p>
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
<h4 id="sec3-2-2">3.2.2 Existing plan example: British Columbia</h4>  <p>The British Columbia Nuclear Emergency Plan states that the de-escalation and transition to recovery will be coordinated by the Ministry of Health and will include: establishing a recovery management plan with reference levels on residual doses from long-term contamination and strategies for restoration of normal socio-economic activities; monitoring contaminated areas and assessing potential doses to public and workers; assessing medium and long-term health hazards; environmental decontamination and radioactive waste disposal operations; and maintaining dose registries for emergency workers [12]. The decision regarding the transfer of responsibilities from emergency response to recovery operations would be made by provincial ministers and the members of the Deputy Ministers Council.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.3"></div>
<h3 id="sec3-3">3.3 Municipal roles and responsibilites for recovery</h3>  <p>Municipalities have a significant role to play in the decision-making process due to their direct involvement with affected individuals and communities. Municipal emergency-management plans should incorporate planning for recovery. Several municipal plans address aspects of recovery.</p>  <p>Municipalities and provincial authorities should attempt to integrate their respective plans to ensure that all aspects of recovery have been addressed.</p>
<div className="col-md-12 module ">  <p>For this section on “Plans for recovery in Canada”, the CNSC would like to hear comments on the following questions:</p>  <p>Q3.	Did we correctly capture the existing framework for recovery from a federal, provincial and municipal point of view? If not, please provide information as you see it, accompanied by the source of information that supports your proposal.</p>  <p>Q4.	Are there existing documents or sources of information that provide more clarity?</p>  </div><div className="clear"></div>
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
<h2 id="sec4">4.0 Proposed framework for recovery</h2>  <p>The IAEA has established <a href="http://www-pub.iaea.org/MTCD/publications/PDF/Pub1578_web-57265295.pdf">General Safety Requirements: Radiation Protection and Safety of Radiation Sources: International Basic Safety Standards</a> that pertain to the protection of the public from exposure to "contamination of areas by residual radioactive material arising from an emergency, after an emergency exposure situation has been declared ended." [14]</p>  <p>A number of other international documents describe key elements of the recovery phase that should be considered. Further, a number of countries have developed their own national guidance on this topic. Lessons learned have shaped international and national recommendations. The CNSC has benchmarked the progress in this area and has relied on it, where possible, to develop this discussion paper.</p>   <p>The remainder of this discussion paper will focus on providing information and guidance on the proposed recovery framework. It should be noted, however, that many elements may be considered and initiated by decision makers in the preparedness and response phases of the emergency.</p>  <p>It is important to recognize that there will be a period of time to allow for the transition from emergency response to recovery. This period will allow for actions to be effectively implemented to ensure timely resumption of social and economic activity.</p>
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
<h3 id="sec4-1">4.1 Key recovery elements</h3>  <p>The planned strategy for the recovery phase should include several considerations.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.1.1"></div>
<h4 id="sec4-1-1">4.1.1 Stability of the situation</h4>  <p>The situation should be examined to determine whether future progression of the emergency and any future releases are well understood and controlled. Recovery cannot take place until, at a minimum, the situation at the source has stabilized and there is no longer a need for precautionary or urgent protective actions.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.1.2"></div>
<h4 id="sec4-1-2">4.1.2 Transition</h4>  <p>Since an emergency evolves from response to recovery, the decision-making process may become more complex. It will require shifting roles and responsibilities and will likely require the involvement of additional organizations. As such, the following should be accomplished at the preparedness stage:</p>
<ul>
<li>roles and responsibilities for the recovery phase should be identified, to the extent practical</li>
<li>a mechanism should be established for a formal transfer of responsibilities that will take place during the transition between the emergency phase and the recovery phase</li>
</ul>  <p>The transition from the emergency phase (i.e., an emergency exposure situation) to the recovery phase (i.e., an existing exposure situation) is characterised by a change in management and a change in strategy. During the emergency phase, both are mainly driven by urgency, with potentially high levels of exposure and predominantly central decisions. During the recovery phase, strategies are more decentralized, involve less urgency, and focus on improving living conditions and reducing exposures. In the case of severe accidents affecting large geographical areas, the transition from the emergency phase to the recovery phase may occur at different times within the contaminated areas [14].</p>   <p>As an emergency evolves from response to recovery, the parts of the emergency-response organization that were active during the emergency should be gradually or partially relieved of their duties so that the organizations involved can return to a state of readiness for any future emergencies. This approach will allow other organizations to take over activities to facilitate recovery. As such, at the preparedness stage, arrangements should be made among the relevant response organizations for this transfer of responsibilities.</p>
<div className="col-md-12 module ">  <p>For this subsection on "Transition", the CNSC would like to hear comments on the following questions:</p>  <p>Q5. At the preparedness stage, do you consider that it is possible to establish a) responsibility and accountability during recovery and b) a mechanism for the transfer of responsibilities that will take place during the transition between the emergency and the recovery phases? If so, how? If not, why?</p>  </div>  <div className="clear"></div>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.1.3"></div>
<h4 id="sec4-1-3">4.1.3 Protecting the public</h4>  <div className="span-3 mrgn-bttm-0 mrgn-lft-0">  <p>The following is a summary of key tasks that support the recovery strategy. The responsibilities for these tasks and mechanisms for execution should be established or considered at the preparedness stage. Such decisions should involve relevant response organizations as well as potentially impacted individuals and communities. The detailed plans will need to be based on the specific conditions of the nuclear emergency and therefore should be established only in the event that a nuclear emergency occurs, either prior to or during recovery.</p>
</div>  <div className="col-md-3 module pull-right  mrgn-bttm-0 mrgn-lft-0 mrgn-bttm-xl" style="border:3px solid #006400;">  <h4 className="text-center">Optimization principle</h4>  <p>Optimization in recovery is a forward-looking, iterative process aimed at reducing future exposures. It takes into account technical and socio-economic factors. Optimization is a frame of mind, in which people must always question whether the best has been done in prevailing circumstances [15]. The recovery process is focused on the community. Every key decision must therefore be centred on stakeholder involvement.</p>  </div>  <div className="clear"></div>
<ul>
<li>The protective actions that have been put in place during the emergency response must be reviewed to determine if adjustment or termination of these protective actions is required.</li>
<li>The doses that were received by members of the public during the emergency response must be reviewed and any follow-up actions identified.</li>
<li>The current exposure situation must be assessed through environmental monitoring and exposure pathways modelling (where appropriate), and prognosis of the future development of the exposure situation. Reassessment of the exposure situation should occur continuously throughout the recovery phase.</li>
<li>Appropriate protective actions must be identified and implemented based on the results of the assessment of the exposure situation and comparison to the selected reference level.</li>
<li>A reassessment of the appropriateness and effectiveness of the protective actions should be completed alongside the reassessments of the exposure assessment. Activities aimed at physically reducing radioactivity in the environment (e.g., decontamination, characterization and quantification of radioactive waste, and waste management) should be implemented.</li>
<li>Doses received by recovery workers involved in implementing the protective actions and clean-up activities should be managed.</li>  </ul>  <br />
<div className="col-md-12 module  mrgn-bttm-lg" style="border:3px solid #006400;">  <h4 className="text-center">International Commission on Radiological Protection (ICRP) reference levels</h4>  <p>ICRP has defined the term “reference level” [16] as “the level of residual dose or risk above which it is generally judged to be inappropriate to allow exposures to occur” and below which protective actions should be planned and optimized.  Reference levels are presented as bands to provide flexibility for decision makers. Reference levels are expressed in millisieverts (mSv) and represent doses received after the implementation of protective actions throughout recovery.</p>  <table className="mrgn-bttm-0">
<tr>
<th className="text-center">Band (acute or per year</th>
<th className="text-center text-center">Type of situation</th>
</tr>
<tr>
<td><strong>20&ndash;100 mSv</strong></td>
<td>Emergency exposure situations in which events with uncertain consequences require urgent protective actions such as sheltering and evacuation to minimize the impacts of possible radiation exposures.</td>
</tr>
<tr>
<td><strong>1&ndash;20 mSv</strong></td>
<td>Existing exposure situations in which radioactivity is already present in the environment at the time actions are taken to reduce radiation exposures. If doses are optimized below this reference level, it is safe to live in the contaminated area.</td>
</tr>  </table>  </div>
<p>Sections 4.2 and 4.3 of this discussion paper address key elements of the recovery framework that focus on the protection of the public. Section 4.4 details protection measures for recovery workers. Section 5 details communication and engagement with the public.</p>
<div className="col-md-12 module ">  <p>For this section on "Protecting the public", the CNSC would like to hear comments on the following questions:</p>  <p>Q6.	Do you agree that the responsible recovery management organization should have the authority to select the appropriate reference level value(s) within the band of 1–20 mSv?</p>   <p>Q7.	Do you agree that the value should be set at the end of the emergency situation and should be periodically re-evaluated throughout the recovery?  If you do not agree, please indicate why, as well as who should select the values and when that decision should be taken.</p>  </div>  <div className="clear"></div>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.1.4"></div>
<h4 id="sec4-1-4">4.1.4 Return to the new normal</h4>  <div className="span-3 mrgn-lft-0">  <p>For the purposes of this document, there is an assumption that the population is exposed to contaminated land and elevated levels of radiological exposure resulting from an emergency during recovery. This situation meets the ICRP&#39;s definition of an existing exposure situation. Given these criteria, one of the most difficult decisions for decision makers to take following an emergency is whether or not individuals should be allowed to live in contaminated areas. As long as the level of radiological risk is acceptable, it is preferable to implement the necessary protective actions to allow individuals to continue to live in their homes and communities and achieve a new normal existence.</p>  <p>If this is the case, the reference level should be within the ICRP&#39;s band of 1–20 mSv for an existing exposure situation. The choice of a value within the band will depend on the prevailing circumstances. Ultimately, this decision lies with the responsible recovery management organizations. The reference level should be set at the end of the emergency exposure situation and should be re-evaluated periodically throughout recovery. The decision to allow individuals to live in the contaminated area will depend, in part, on whether the desired reference level can be achieved and on the ability to implement a protection strategy that will further optimize the situation so that the margin of good over harm is maximized.</p>  </div>
<div className="col-md-3 module  pull-right mrgn-lft-0 mrgn-bttm-xl" style="border:3px solid #006400;">  <h4 className="text-center">The new normal</h4>
<ul>
<li>Establishing new routines that allow for day-to-day life to resume such that impacts are minimized. Such routines may include self-help actions.</li>
<li>Living with some level of exposure that is higher than pre-emergency conditions but is still protective of human health.</li>
<li>Establishing communication and engagement with individuals and communities.</li>
</ul>  </div>  <div className="clear"></div>
<p>There may be situations in which the decision is made to abandon contaminated areas altogether and resettle impacted individuals and communities to areas that were not affected by the emergency in a direct radiological sense. In this case, most of the activities described in the remainder of section 4 are not applicable. Notwithstanding, there is recognition that despite an absence of any radiological impacts, there are very likely to be psychological and social impacts associated with the re-settlement and the emergency itself that must be addressed. These decisions should be made involving extensive consultation with stakeholders.</p>
<div className="col-md-12 module ">  <p>For this section on "Return to a new normal", the CNSC would like to hear comments on the following questions:</p>  <p>Q8.	Was the concept of the new normal well explained? What additional information should be provided to clarify the concept?</p>  </div>  <div className="clear"></div>
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
<h3 id="sec4-2">4.2 Protecting the public during recovery</h3>  <p>This section will describe the key actions and strategies for protecting the public during recovery in the event of an emergency.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.2.1"></div>
<h4 id="sec4-2-1">4.2.1 Implementing recovery strategies</h4>  <p>During the emergency, a number of protective actions may have been implemented with the goal of reducing potentially harmful exposures to radiation. Such actions could include ingestion of potassium iodide (KI), sheltering, evacuation and possibly relocation. As time progresses, any actions taken during the emergency should be examined to decide whether changes are warranted. This is likely to occur during the response phase, but also requires consideration during the recovery phase, depending on the timeframes involved. In some cases, actions such as evacuations will likely need to be terminated during the recovery period. Other actions, such as restrictions on locally sourced food, milk and drinking water, may be modified or adjusted. The extent of these adjustments will depend on the actions themselves (for example, evacuation and temporary housing measures are not sustainable in the long term), on the doses received to date, and the actions projected for continuing, terminating or altering the action. Various government nuclear emergency response plans provide guidance on lifting the protective actions implemented during the emergency phase [9,11,17].</p>   <p>During the recovery phase, new protective actions may need to be taken to maintain doses below the desired reference level. Even if doses are below the reference level, protective actions should not be discontinued if doses can be further lowered [18]. Many factors can impact the protection strategy, including: timing, resources, waste management options, as well as social and ethical aspects. The complexity of the situation may warrant the use of decision-making tools to aid in the development of the strategy.</p>   <p>In general, there are two types of protective actions that could be implemented during the recovery phase: those implemented or overseen by recovery management organizations, and self-help actions implemented by individuals. Those implemented by the recovery management organizations are generally those that cannot be implemented by individuals or those that are taken by the population as a whole to reduce exposures. Self-help actions implemented by individuals are those that are within the control of individuals to reduce their own personal exposures. These two types of protective actions are described in more detail in subsections 4.2.1.1 and 4.2.1.2.</p>
<h5>4.2.1.1 Protective actions implemented by the recovery management organizations</h5>  <p>The recovery management organizations are primarily responsible for characterizing the exposures of the affected population, including identifying the main exposure pathways, estimating doses, and identifying protective actions that could be applied to the affected population to optimize doses.</p>   <p>Typical protective actions that could be implemented by recovery management organizations include [18]:</p>
<ul>
<li>deciding whether people can live in contaminated areas</li>
<li>cleaning up buildings</li>
<li>remediating soil and vegetation</li>
<li>issuing food controls and providing clean foodstuffs</li>
</ul>  <p>Protective actions implemented by recovery management organizations may be institutional or engineered in nature. An example of an institutional action would be placing restrictions on ingestion of locally produced foodstuffs to avoid ingestion of radionuclides. An example of an engineered action would be adding a layer of pavement or cement over gamma-emitting radionuclides that are not removable from streets or sidewalks [19].</p>  <p>Recovery management organizations should identify and possibly delineate the borders of the contaminated area early on, and then reassess and adjust these borders throughout the recovery phase. This delineation will help enable the implementation of protective actions such as restrictions on foodstuffs and will assist with communicating with the local population [20]. The delineation of the contaminated area will need to strike a careful balance between placing too many constraints on the area, potentially resulting in unnecessary remediation and inappropriate labelling of the area as unsafe and not providing enough protection or not addressing the concerns of stakeholders [21].</p>
<h5>4.2.1.2 Recommendations for self-help actions</h5>   <p>Past experience has shown that direct involvement of individuals, communities and local professionals in the management of an emergency situation improves the recovery process by empowering those impacted. When recovery management organizations facilitate the processes by which inhabitants define and apply their own protection strategies, not only are exposures reduced but overall wellbeing also increases [18,20].</p>   <p>In general, examples of self-help protective actions that can be applied to understand and control the radiological situation include [18]:</p>
<ul>
<li>establishing local mapping and identifying areas of higher dose rates</li>
<li>measuring the presence of contamination in foodstuffs that may be consumed and modifying dietary habits</li>
<li>managing radioactive waste</li>
</ul>
<div className="span-3 mrgn-lft-0 mrgn-rght-0">  <p>To successfully implement self-help protective actions, authorities should regularly provide clear information on the broader radiological situation and on successes and difficulties with protective actions. They must also facilitate the means for affected individuals to share lessons learned among themselves [18]. Individuals may need to be trained on how to implement the self-help protective actions and the necessary infrastructure to assist them may need to be put in place. The population should be given appropriate information to allow them to make informed decisions. One of the challenges of self-help protective actions is balancing the burden placed on the individuals (i.e., constant monitoring of the food they eat and the places they go) against the benefits of empowering them to improve their own exposure situation [18].</p>  <p>Note that subsections 4.3.2 to 4.3.5 explain supporting information, methods and processes that serve to inform decisions that will need to be made to protect the public and the return to a new normal.</p>  </div>  <div className="span-3 module pull-right  mrgn-lft-0 mrgn-rght-0" style="border:3px solid #006400;">  <h5>Community empowerment: ICRP dialogues initiative</h5>  <p>An important lesson learned from the recovery efforts in Belarus following Chernobyl was implemented in the recovery efforts following Fukushima. The ICRP recognized the need to empower communities and individuals to make their own decisions on the application of radiation protection and monitoring during recovery. The ICRP initiative put this into practice through a series of dialogues with the citizens of the affected areas, the local governments and international experts that allowed for all parties to share their perspectives. The structure of these meetings, the topics discussed and the outcomes were documented by the ICRP and provide a model for encouraging community empowerment for any future recovery efforts. [22]</p>  </div>  <div className="clear"></div>
<div className="col-md-12 module ">  <p>For this subsection on "Implementing Recovery Strategies", the CNSC would like to hear comments on the following questions:</p>  <p>Q9.	Did we capture the protective actions accurately? If not, what modifications or additions do you propose?</p>  <p>Q10. Do you agree with the delineation of the two types of protective actions? Are there other types of protective actions that have not been considered? If so, what are they?</p>  </div>  <div className="clear"></div>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.2.2"></div>
<h4 id="sec4-2-2">4.2.2	Environmental and food chain monitoring</h4>  <div className="span-3 mrgn-lft-0 mrgn-rght-0">  <p>The radiological situation will evolve during recovery due to processes such as radiological decay, physical and chemical processes affecting the distribution of radionuclides in the environment, human activities that concentrate or dilute contamination in the environment, and changes to protective actions [18]. For these reasons, an environmental monitoring program that is adequate for the prevailing circumstances and is flexible enough to accommodate changes to conditions should be established. Although environmental monitoring systems established for the emergency response phase are likely to be relied upon for the recovery phase as well, there may be a need to enhance or modify current monitoring requirements to, for example, include monitoring of public infrastructure such as schools.</p>   <p>An environmental monitoring program in this context refers to the measurements of external dose rates in the environment and radionuclide activity concentrations in different media (e.g., air, water, soil, vegetation and foodstuffs) [23]. Any data produced as a result of this monitoring should be made available with enough explanatory context to be easily understood by the general public [20].</p>  <p>The specific objectives of monitoring sites contaminated with long lived radionuclides are to:</p>
<ul>
<li>identify areas in which detailed radiation monitoring is needed</li>
<li>identify areas in which remedial actions are justified in radiological terms</li>
<li>provide information for estimating actual or prospective doses to members of the public</li>
<li>detect changes and evaluate long-term trends in environmental radiation levels as a result of the emergency, including remedial actions</li>
<li>disseminate information to the public</li>
</ul>  </div>
<div className="span-3 module pull-right  mrgn-lft-0 mrgn-rght-0" style="border:3px solid #006400;">  <h4>Canadian environmental monitoring programs</h4>  <p>Various environmental monitoring programs are already in place across Canada and around nuclear facilities. For example:</p>
<ul>
<li>Canada has had a national environmental radioactivity monitoring program since 1959. It currently operates three distinct radiological networks composed of more than 100 detection and monitoring stations across Canada. These are located in the vicinity of nuclear power plants, in all major population centres, and in the vicinity of ports visited by foreign nuclear-powered vessels.</li>
<li>The CNSC&#39;s <a href="/eng/resources/maps-of-nuclear-facilities/iemp/index-iemp">Independent Environmental Monitoring Program</a> complements existing and ongoing compliance activities to verify that public health and the environment around nuclear facilities are safe through independent sampling and analysis.</li>
<li>Other monitoring systems include the Department of National Defense system for monitoring around ports visited by foreign nuclear-powered vessels and the Ontario Reactor Surveillance Program and Province-wide Monitoring Program.</li>
<li>All nuclear power plants have monitoring programs in compliance with their operating license conditions.</li>
</ul>  </div>  <div className="clear"></div>
<p>The environmental monitoring program should be informed by the radionuclides involved, the physical and chemical composition of the radioactive contamination, the medium containing the radionuclides, and practices relating to land and water use. The locations for measurement and sampling should be selected on a site-specific basis in such a way that the highest radiation doses can be assessed [23].</p>   <p>In the case of emergencies impacting the food supply, including foodstuffs in the monitoring program is particularly important. The monitoring program should be robust enough to ensure compliance with any restrictions put in place, including the existing criteria for restricting contaminated food in the immediate aftermath of a nuclear or radiological emergency. (For reference, see the intervention levels established in the Canadian guidelines for the restriction of radioactively contaminated food and water following a nuclear emergency [10] and in the emergency response plans for New Brunswick and Ontario.) Additional criteria should be established to manage long-term contamination of the food supply from long-lived radionuclides [21]. The criteria established by the Codex Alimentarius Commission may also need to be considered when monitoring food and food products for suitability for international trade [24].</p>
<div className="col-md-12 module ">  <p>For this subsection on "Environmental and food chain monitoring", the CNSC would like to hear comments on the following questions:</p>  <p>Q11. Did we make the correct assumptions regarding environmental and food chain monitoring? If not, what are we missing?</p>  <p>Q12. Did we adequately describe the need for environmental and food chain monitoring in the recovery phase? Is there information about the need for environmental and food chain monitoring that should be added? If so, what information?</p>  </div>  <div className="clear"></div>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.2.3"></div>
<h4 id="sec4-2-3">4.2.3	Exposure pathways and dose assessments</h4>  <p>Exposure pathways must be considered to conduct dose assessments that will influence the recovery process. The recovery phase of an emergency will likely entail different considerations than the response phase. For example, significant releases to the air from a nuclear power plant should no longer occur in the recovery phase, therefore exposure to radioactivity in a plume released to the atmosphere (i.e., cloudshine) is no longer a dominate exposure pathway. The remaining exposure pathways that may need to be considered in the recovery phase include, but are not limited to:</p>
<ul>
<li>external exposure from radioactivity deposited on the ground (i.e., groundshine)</li>
<li>internal exposure from inhalation of re-suspended radionuclides</li>
<li>internal exposure from ingestion of contaminated foodstuffs</li>
<li>internal exposure from ingestion of contaminated drinking water</li>
</ul>  <p>When considering exposure pathways, the pattern of deposition of radioactivity is likely to be complex and the resulting exposure to individuals could vary greatly. Exposure pathways will depend on circumstances such as the types of land use and the habits of the directly affected people and communities. As such, additional pathways will need to be considered where appropriate. For example, ingestion of soil by children might need to be considered with regard to land use restrictions for parkland.</p>
<div className="col-md-12 module ">  <p>For this subsection on "Exposure pathways and dose assessments", the CNSC would like to hear comments on the following questions:</p>  <p>Q13. Did we make the correct assumptions regarding exposure pathways and dose assessments? If not, what are we missing?</p>  </div>  <div className="clear"></div>
<p>When moving towards recovery, preliminary dose assessments should be performed focusing on the doses that could be received in the future (i.e., in the existing exposure situation). It is likely there will be a broad range of exposures. Therefore, as information becomes available, the dose assessment should become more specific regarding individual doses.</p>   <p>Due to the variability in exposures between individuals in the recovery phase, doses should be determined on an individual basis or by considering defined portions of the population. For long-lived radionuclides with slight dependence of the dose coefficients on age (e.g. tritium and caesium), adults consuming local foodstuffs will usually be the most exposed population group.</p>   <p>For radionuclides in which dose coefficients depend strongly on age because of their specific metabolic properties (e.g. strontium, radium and polonium), infants or children usually form the most exposed population group [23]. The dose assessment should take into account realistic habits, the known pattern and extent of deposition of radionuclides in the environment, and the foodstuffs consumed by the affected population. For instance, the population could be divided into groups based on geographic location or lifestyle habits to assist in tailoring the dose assessments. In some cases, direct individual dosimetry may be warranted or desired, and can be used for the dose assessment.</p>   <p>The following guidance for internal and external dose assessments should be considered.</p>  <p>The <strong>external</strong> dose to the population during the recovery phase may be determined on the basis of environmental monitoring data. Persons working mainly outdoors and those living in one-storey houses constructed of light materials such as wood may receive the highest external exposure. Personal interviews may be used to determine estimations of typical occupancy times for living, working and rest areas [23]. Dose-rate measurement at various occupied locations, both outdoors and indoors, can be used to assess the existing external doses. Alternatively, the levels of soil deposition of particular radionuclides in the area assessed can be used for estimation of the external doses due to radionuclides.</p>   <p>The environmental monitoring program data on radionuclide concentrations in environmental samples, drinking water and food products should be used for the assessment of the <strong>internal</strong> doses due to the inhalation or ingestion of radionuclides [23]. The internal doses during the recovery phase due to the ingestion of contaminated food and drinking water should be determined on the basis of environmental monitoring data and consumption rates. In regions where the inhabitants normally consume substantial amounts of natural food products (e.g., game, freshwater fish, forest mushrooms and berries), it is important to consider increased consumption rates. If environmental monitoring program data for food are unavailable or insufficient, the concentrations of radionuclides in foodstuffs can be roughly estimated from data on soil deposition or water concentrations by using known coefficients of radionuclide transfer from soil or water to plants and animals [23]. In areas that are significantly contaminated with radionuclides, or in areas with elevated rates of transfer of radionuclides from soil to biota, individual whole-body monitoring may be used to determine the human body burden and to assess doses due to the internal exposure. The results of individual measurements should be used mainly for validation of the models applied for the purposes of internal dose assessment [23].</p>   <p>To determine annual doses, all the components of the external and internal exposure caused by the environmental radiation, including natural background radiation, should be accounted for. During the recovery stage, there is usually no danger of tissue reactions among the population, and therefore methods of dose assessment based on best parameter estimates should be employed, rather than conservative models as used in emergencies. The doses should therefore be estimated on the basis of realistic, dosimetric models.</p>   <p>Special programs of monitoring may be undertaken for the validation of models and the provision of information for public reassurance [23]. The most reliable method of validation of an ingestion model is by comparing its predictions with internal dose assessments made on the basis of data from individual measurements of radionuclide contents in the human body performed by whole-body counting or by analyzing the concentrations of radionuclides in excreta [23].</p>   <p>Results from the dose assessments should be used as a factor to inform, initially, on the choice of the value within the 1–20 mSv reference level. Further, it should be used as a factor in evaluating the different options for implementing the recovery strategies that were discussed previously and on evaluating the success of the strategies. The process of dose assessment and recovery strategy evaluation should be iterative.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.2.4"></div>
<h4 id="sec4-2-4">4.2.4	Health monitoring</h4>  <p>Following an emergency, the exposed population should have received some information regarding their levels of exposure (associated with the emergency exposure situation) and the potential associated health risks. However, during or prior to recovery, a health monitoring program should be established along with the logistic, scientific and administrative resources needed for implementation [20].</p>   <p>This health monitoring program should focus on:</p>
<ul>
<li>following up with individuals who may have received doses that resulted in, or could result in, significant deterministic effects (e.g., skin burns, cataracts) to provide appropriate medical attention </li>
<li>screening the affected populations that might be at an increased risk of developing cancer so as to provide for early detection and diagnosis</li>
<li>developing a registry of those individuals identified as requiring longer-term health monitoring (this should be established prior to, or early in the recovery process)</li>
<li>offering psychological and psychosocial support for the affected individuals and populations</li>
</ul>  <p>It is expected that doses received during recovery (i.e., the existing exposure situation) are expected to be low enough that medical follow up would not be warranted. The doses referred to above are those that were incurred mainly from the emergency exposure situation.</p>
<div className="col-md-12 module ">   <p>For this subsection on "Health monitoring", the CNSC would like to hear comments on the following questions:</p>  <p>Q14. Did we identify all the necessary components regarding the health monitoring program? If not, what are we missing?</p>  </div>  <div className="clear"></div>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.2.5"></div>
<h4 id="sec4-2-5">4.2.5	Managing contamination</h4>  <p>Managing the contaminated environment can be carried out in many ways and will depend on the prevailing conditions after the emergency. In general, effective management of the contamination will be considered clean-up after the emergency, or specifically decontamination to either reduce or remove the potentially hazardous materials or substances. However, it must also be recognized that decontamination is only part of the overall contamination management strategy. This strategy could also include other types of activities, such as imposing different land or commodity uses, and restricting their use and export to other areas.</p>   <p>The management of contaminated areas, including decontamination and the management of waste, should begin as early as possible in the recovery phase (or the time leading up to recovery) and should be used to delineate the contaminated areas. The objectives of these activities are to allow any evacuated or relocated populations to return to their homes as soon as possible, to allow anyone living in the area to resume living as normally as possible [19], and to allow for resumption of economic and social activities.</p>
<div className="col-md-12 module ">  <p>For this subsection on "Managing contamination", the CNSC would like to hear comments on the following questions:</p>  <p>Q15. Did we make the correct assumptions regarding decontamination? If not, what are we missing?</p>  <p>Q16. Did we capture the decontamination elements accurately? If not, what modifications or additions are you proposing?</p>  <p>Q17. Are there other types of clean-up activities besides decontamination that need to be discussed in more detail? If so, what activities and what information is required?</p>  </div>  <div className="clear"></div>
<h5>4.2.5.1 Decontamination</h5>  <p>Decontamination is the physical removal of contamination in the environment. Once the radiological situation is well understood, the areas to be decontaminated should be prioritized according to those that will be most effective in reducing individual exposures. This is done by considering potential exposure pathways, current or future land-use and dietary habits [19,20].</p>  <p>Decontamination goals and criteria should be identified and set in terms of measurable quantities and will need to be established based on an understanding of the:</p>
<ul>
<li>reference level chosen</li>
<li>predicted effectiveness of potential decontamination actions</li>
<li>area impacted (i.e., size, characteristics, location relative to the population)</li>
<li>predicted utilization for the area</li>
<li>site-specific background levels of radioactivity (if known)</li>
<li>impacts of the contamination and potential decontamination actions on human health and the environment [19, 25]</li>
</ul>  <p>The method employed to decontaminate the environment will need to be selected in consideration of many of the same factors, including the:</p>
<ul>
<li>effectiveness of the action to protect human health and the environment over time</li>
<li>performance and costs of different technologies</li>
<li>effectiveness of the decontamination action as the cleanup progresses</li>
<li>time it takes to carry out</li>
<li>impacts on the local and regional economy</li>
<li>weather conditions and time of year</li>
<li>types of surfaces to be cleaned [19, 25]</li>
</ul>  <p>Setting decontamination goals and undertaking decontamination strategies should be an iterative process. Decontamination goals should be adjusted as experience is gained [19]. If, for example, radioactive material cannot be physically removed from the environment, it may be appropriate to choose alternate options such as fixing it in place or covering it. This will, at a minimum, prevent re-suspension, remove the potential for inhalation exposures, and may help limit external exposures [25].</p>
<h5>4.2.5.2 Waste management</h5>   <p>Activities carried out in the recovery phase, particularly decontamination of the environment, may result in a large amount of waste from varying sources and of different types. Some of the waste may contain high levels of radioactivity, especially if produced close to the emergency&#39;s origin. Most of the waste is expected to be only slightly contaminated, although potentially in large quantities [19].</p>   <p>Early in the recovery phase, if appropriate, waste management may simply consist of storing waste away from the contaminated area. Criteria will need to be established such that, once the resources become available, the waste can be sorted by the amount of radioactive material and the types of waste (e.g., solid, liquid or organic) based on an appropriate hazard assessment [20, 25].</p>   <p>It may be possible to process the waste to reduce its quantity or convert it into a more suitable form for disposal. Some processes that could be considered for waste reduction include: incinerating, filtering, distilling or solidifying liquids, and chemically treating liquids [26].</p>   <p>As part of the waste-management efforts, a variety of disposal options may need to be considered. In general, methods for waste disposal are based on the principles of isolation and containment [27]. Isolation is placing the waste in a location remote from where individuals and communities live and is typically appropriate for waste contaminated with long-lived radionuclides that cannot be removed. Containment includes those activities or structures that are designed to prevent the release of radioactive waste to the environment. It also protects the physical environment from the waste. Dilution is generally not considered acceptable since it increases the volume of radioactive waste without reducing the inventory.</p>  <p>If the waste volumes are relatively small, existing radioactive waste-management facilities may have sufficient capacity to manage the waste. However, if a large amount of material is involved (which is likely the case in a situation involving a more significant release), the capacity at these facilities may be exceeded. In this case, other hazardous waste or conventional landfill facilities may need to be considered. New facilities could be constructed at the site where the radionuclide release originated, elsewhere within the contaminated area, or away from the affected area altogether [19]. If the waste is to be relocated elsewhere, transportation of radioactive material should be considered. All waste sites must have appropriate controls to protect public health and the environment from any level of radioactive contamination. Highly radioactive materials will need more robust controls than slightly contaminated materials [19]. If waste contains fissile materials, the potential for criticality would have to be managed.</p>
<div className="col-md-12 module ">  <p>For this subsection on "Waste management", the CNSC would like to hear comments on the following questions:</p>  <p>Q18. Did we make the correct assumptions regarding waste management? If not, what are we missing?</p>  <p>Q19. Did we capture the waste management elements accurately? If not, what modifications or additions do you propose?</p>  </div>
<div className="col-md-12 module ">  <p>For the section on "Protecting the public during recovery", the CNSC would like to hear comments on the following questions:</p>  <p>Q20. Did we make the correct assumptions regarding the key recovery elements? If not, what are we missing?</p>  <p>Q21. Did we capture the key recovery elements accurately? If not, what modifications or additions do you propose?</p>  <p>Q22. Is the level of information provided is adequate? If not, what subject needs to be described in more detail? Or what are the elements that we did not describe (if any)?</p>  </div>  <div className="clear"></div>
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
<h3 id="sec4-3">4.3 Protecting recovery workers</h3>  <p>Doses received by persons involved in the control of an emergency are treated separately from those received from planned occupational exposures, which include recovery efforts. Similarly, a distinction should be made with respect to radiation exposures received by workers during recovery efforts as a consequence of their occupation and those received as a result of exposures due to environmental conditions resulting from the emergency.</p>   <p>During the recovery phase, activities should be carefully planned, and exposures to workers controlled according to applicable dose limits for non-emergency situations. The dose limits prescribed in sections 13 and 14 of the <a href="http://laws-lois.justice.gc.ca/eng/regulations/sor-2000-203/page-1.html">RPR</a> [4] would apply during recovery and the application of the &#39;as low as reasonably achievable&#39; (ALARA) principle would be expected. Doses received by workers due to their residency, work location and consumption of foodstuffs within an affected area, post-emergency would not be considered in the context of the occupational dose limits prescribed by the regulations.</p>   <p>It is important to note that, post-emergency, there will be potentially two sets of occupationally exposed workers: people who work at a licensed facility in the affected area during the recovery phase and workers who are specifically tasked to conduct recovery actions under the direction of the recovery management organization. The protection of workers at the licensed facility would be governed by the licensee&#39;s protection programs including both conventional and radiological safety.</p>   <p>The protection of workers involved in implementing recovery strategies under the direction of the recovery management organization would be managed through the implementation of similar protection programs with an all-hazards approach that is commensurate with the risks. It is expected that occupational exposures to radiation for this group of workers will be planned, monitored and optimized in a manner that will ensure that radiation exposures remain below limits and ALARA. As part of the safety programs, the recovery management organization would provide information, training, protective equipment and dosimetry to workers.</p>
<div className="col-md-12 module ">  <p>For this section on "Protecting recovery workers", the CNSC would like to hear comments on the following question:</p>  <p>Q23. What additional details would be valuable on this topic in the framework?</p>  </div>  <div className="clear"></div>
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
<h2 id="sec5">5.0 Public communication considerations during recovery</h2>  <p>Throughout the recovery phase, increased levels of communication must be maintained to address the uncertainties and new normal. A central communications strategy should be developed and followed by all stakeholders to ensure clear direction and consistent messaging. It is important that there be no contradiction or confusion among members of the public.</p>   <p>The public and other stakeholders need to be informed on a regular basis. They will need to understand which agency or group of agencies are in charge so they know which instructions to follow. Most individuals will be concerned about the potential health consequences and the effects of the emergency on the environment.</p>   <p>As with all risk communications, it is important to communicate with the public using terminology that is universally understood. Consistent and coordinated messages need to come from credible sources, be clear and simple, supported with facts, and given with the appropriate context to explain the information more clearly to the recipient audience.</p>
<div className="span-3 mrgn-lft-0 mrgn-bttm-0">   <p>A variety of tools and media should be used to communicate frequently with the public and other stakeholders. Traditional methods of communication, such as television, print and radio, should be supplemented with other methods such as social media, websites, forums and instructional videos. When communicating about the situation, it is important to be aware of, and address, misinformation and rumours.</p>  </div>
<div className="span-3 module pull-right mrgn-rght-0 mrgn-lft-0 mrgn-bttm-0 backgound-white" style="border:3px solid #006400;">  <h3 className="text-center">Disseminating information</h3>  <p>Did you know that disseminating objective scientific, technical and regulatory information to the public is a crucial part of the CNSC&#39;s <a href="/eng/the-commission/index#R1">mandate</a>?</p>  </div>  <div className="clear"></div>
<p>For affected populations, one effective method of communication is to set up public reception and information centres to collect data and provide support and information. These types of centres provide the public the opportunity to share their personal experiences and receive direct responses to their questions [20]. It is also important to use regular communication to raise awareness about radiation protection measures within the community through the involvement of credible leaders such as teachers, scientific professionals, association members, and healthcare professionals [20].</p>
<div className="col-md-12 module ">  <p>For this section on "Public communication considerations during recovery", the CNSC would like to hear comments on the following questions:</p>  <p>Q24. Did we capture the communication considerations during recovery accurately? If not, what modifications or additions do you propose?</p>  <p>Q25. Is the level of information provided adequate? If not, what subject needs to be described in more details? Or what are the elements that we did not describe (if any)?</p>  </div>  <div className="clear"></div>
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
<h2 id="sec6">6.0 Stakeholder feedback on the proposed regulatory approach</h2>  <p>The CNSC actively encourages the nuclear industry, federal, provincial and municipal governments, other stakeholders and the public to provide their views on the proposed regulatory approach with regard to the Framework for Recovery in the Event of a Nuclear or Radiological Emergency.</p>  <p>Specifically, the CNSC is seeking feedback on the appropriateness of the assumptions made regarding recovery, and the appropriateness of the assumptions made regarding roles and responsibilities during recovery in the text as well as in appendix A.</p>
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
<h2 id="sec7">7.0 How to participate</h2>  <p>Please submit your comments or feedback to:</p>  <p>Canadian Nuclear Safety Commission<br />
P.O. Box 1046, Station B<br />
280 Slater Street<br />
Ottawa, Ontario K1P 5S9<br />
Fax: 613-995-5086<br />
Email: <a href="mailto:consultation@cnsc-ccsn.gc.ca">consultation@cnsc-ccsn.gc.ca</a></p>  <p><strong>Please indicate clearly which discussion paper you are commenting on.  If you are responding to a specific question within the discussion paper, please also make reference to the question number.</strong></p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="acro"></div>
<h2 id="acro">Acronyms</h2>  <style type="text/css">  dl.cnsc-dl dt  {  margin: 0 5px 4px 0;  float: left;  clear: left;  font-weight: bold;}  dl.cnsc-dl dd {  margin: 0 0 4px 90px;}  dl.cnsc-dl dd:after {  content: &#39;&#39;;  display: block;  clear: both;}  </style>
<dl className="cnsc-dl">
<dt>ALARA</dt>
<dd>as low as reasonably achievable</dd>
<dt>CNSC</dt>
<dd>Canadian Nuclear Safety Commission</dd>
<dt>ESF</dt>
<dd>emergency support functions</dd>
<dt>FERP</dt>
<dd>Federal Emergency Response Plan</dd>
<dt>FNEP</dt>
<dd>Federal Nuclear Emergency Plan</dd>
<dt>HC</dt>
<dd>Health Canada</dd>
<dt>KI</dt>
<dd>potassium iodide</dd>
<dt>IAEA</dt>
<dd>International Atomic Energy Agency</dd>
<dt>ICRP</dt>
<dd>International Commission on Radiological Protection</dd>
<dt>IEMP</dt>
<dd>Independent Environmental Monitoring Program</dd>
<dt>mSv</dt>
<dd>millisievert</dd>
<dt>NEM</dt>
<dd>nuclear emergency management</dd>
<dt>PEOC</dt>
<dd>Provincial Emergency Operations Centre</dd>  </dl>
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
<dt><strong>absorbed dose</strong></dt>
<dd>The quotient, in gray, obtained by dividing the energy absorbed through exposure to radiation by the mass of the body or part of the body that absorbs the radiation</dd>
<dt><strong>countermeasure</strong></dt>
<dd>An intervention or protective action taken to counter a danger or threat. Examples include evacuation and sheltering.</dd>
<dt><strong>dose</strong></dt>
<dd>A general term used to refer to the amount of energy absorbed by tissue from ionizing radiation. See also absorbed dose, equivalent dose and effective dose.</dd>
<dt><strong>dose limit</strong></dt>
<dd>A maximum allowable radiation dose (effective dose or equivalent dose), as specified in the Radiation Protection Regulations, which is in place to minimize the risk of adverse health effects due to radiation exposure.</dd>
<dt><strong>effective dose</strong></dt>
<dd>The sum of the products, in sievert, obtained by multiplying the equivalent dose of radiation received by and committed to each organ or tissue set out in column 1 of an item of Schedule 1 by the weighting factor set out in column 2 of that item.</dd>
<dt><strong>equivalent dose</strong></dt>
<dd>The product, in sievert, obtained by multiplying the absorbed dose of radiation of the type set out in column 1 of an item of Schedule 2 by the weighting factor set out in column 2 of that item.</dd>
<dt><strong>emergency exposure situation</strong></dt>
<dd>Situations that may occur during the operation of a planned situation, from a malicious act or from any other unexpected situation and which require urgent action to avoid or reduce undesirable consequences.</dd>
<dt><strong>existing exposure situation</strong></dt>
<dd>Situations that already exist when a decision on control has to be taken, including prolonged exposure situations after emergencies.</dd>
<dt><strong>intervention</strong></dt>
<dd>Any action of provision beyond normal procedures undertaken to manage the emergency and mitigate its impacts, including all emergency organization structures, response actions, communications, and public information and directives.</dd>
<dt><strong>nuclear emergency</strong></dt>
<dd>An event that has led, or could lead, to the release of radioactive material, or exposures to uncontrolled sources of radiation, which pose or could pose a threat to public health and safety, property or the environment.</dd>
<dt><strong>optimization</strong></dt>
<dd>The process of determining a level of protection and safety that makes exposures and the probability and magnitude of potential exposures as low as reasonably achievable, with economic and social factors being taken into account.</dd>
<dt><strong>projected dose</strong></dt>
<dd>The prediction of a dose that a population or individual could receive.</dd>
<dt><strong>protective action</strong></dt>
<dd>An action, countermeasure or intervention which reduces the radiation exposure of workers or members of the public.</dd>
<dt><strong>radiological emergency</strong></dt>
<dd>An emergency in which there is, or is perceived to be, a hazard due to radiation exposure or the energy resulting from a nuclear chain reaction or from the decay of the products of a chain reaction.</dd>
<dt><strong>recovery</strong></dt>
<dd>The period during which activities focus on restoration of quality of life, social systems, economies, community infrastructures, and the environment. Recovery may begin during the response phase and continue for up to several years after the emergency.</dd>
<dt><strong>reference levels</strong></dt>
<dd>The level of dose or risk above which it is judged to be inappropriate to plan to allow exposures to occur and below which optimization of protection should be implemented.</dd>
<dt><strong>remediation</strong></dt>
<dd>Any measures that may be carried out to reduce the radiation exposure due to existing contamination of land areas through actions applied to the contamination itself (i.e., the source) or to the exposure pathways to humans. Complete removal of contamination is not implied.</dd>
<dt><strong>sievert</strong></dt>
<dd>The International System of Units (SI) unit of equivalent dose and effective dose, equal to 1 joule/kilogram.</dd>  </dl>
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
<h2 id="ref">References</h2>  <ol>
<li>Canadian Nuclear Safety Commission, <a href="http://laws-lois.justice.gc.ca/eng/acts/N-28.3/FullText.html"><em>Nuclear Safety and Control Act</em></a> (S.C. 1997, c. 9), January 2017</li>
<li>Public Safety Canada, <a href="http://laws-lois.justice.gc.ca/eng/acts/E-4.56/"><em>Emergency Management Act</em></a> (S.C. 2007, c. 15)</li>
<li>Canadian Nuclear Safety Commission, <a href="/eng/acts-and-regulations/regulatory-documents/published/html/regdoc2-10-1/index">REGDOC-2.10.1, <em>Nuclear Emergency Preparedness and Response</em></a>, Version 2, February 2016</li>
<li>Canadian Nuclear Safety Commission, <a href="http://laws.justice.gc.ca/eng/regulations/sor-2000-203/page-1.html"><em>Radiation Protection Regulations</em></a> (SOR/2000-203), June 2016</li>
<li>Public Safety, <a href="https://www.publicsafety.gc.ca/cnt/rsrcs/pblctns/mrgnc-mngmnt-frmwrk/index-eng.aspx"><em>An Emergency Management Framework for Canada</em></a>, Public Safety, January 2011.</li>
<li>International Atomic Energy Agency, IAEA Safety Standards Series No. General Safety Requirements Part 7: <a href="http://www-pub.iaea.org/MTCD/Publications/PDF/P_1708_web.pdf"><em>Preparedness and Response for a Nuclear of Radiological Emergency</em></a>, 2015</li>
<li>Public Safety Canada, <a href="http://www.publicsafety.gc.ca/cnt/rsrcs/pblctns/mrgnc-rspns-pln/index-eng.aspx"><em>Federal Emergency Response Plan</em></a>, January 2011</li>
<li>Health Canada, <a href="https://www.canada.ca/en/health-canada/services/health-concerns/reports-publications/emergencies-disasters/federal-nuclear-emergency-plan-part-1-master-plan.html"><em>Federal Nuclear Emergency Plan</em></a> (Fifth Edition), January 2014</li>
<li>Health Canada, <a href="https://www.canada.ca/en/health-canada/services/environmental-workplace-health/reports-publications/radiation/canadian-guidelines-intervention-nuclear-emergency-november-2003.html"><em>Canadian Guidelines for Intervention during a Nuclear Emergency</em></a>, November 2003.</li>
<li>Health Canada, <a href="https://www.canada.ca/en/health-canada/services/environmental-workplace-health/reports-publications/environmental-contaminants/canadian-guidelines-restriction-radioactively-contaminated-food-water-following-nuclear-emergency-guidelines-rationale.html"><em>Canadian Guidelines for the Restriction of Radioactively Contaminated Food and Water Following a Nuclear Emergency</em></a>, 2000</li>
<li>Ministry of Community Safety and Correctional Services of Ontario, <a href="https://www.emergencymanagementontario.ca/english/emcommunity/response_resources/plans/provincial_nuclear_emergency_response_plan.html"><em>Provincial Nuclear Emergency Response Plan &ndash; Master Plan</em></a>, 2009.</li>
<li>British Columbia Ministry of Health, <em>British Columbia Nuclear Emergency Plan</em>, 2015</li>
<li>Ontario Ministry of Health and Long-term Care, <a href="http://www.health.gov.on.ca/en/pro/programs/emb/rhrp/"><em>Radiation Health Response Plan</em></a>, 2014</li>
<li>International Atomic Energy Agency, IAEA Safety Standards Series No. General Safety Requirements Part 3 (Interim): <a href="http://www-pub.iaea.org/MTCD/publications/PDF/Pub1578_web-57265295.pdf"><em>Radiation Protection and Safety of Radiation Sources: International Basic Safety Standards</em></a>, 2014</li>
<li>International Commission on Radiological Protection, Annals of the ICRP, ICRP Publication 101b, <a href="http://www.icrp.org/publication.asp?id=ICRP%20Publication%20101b"><em>The Optimisation of Radiological Protection &ndash; Broadening the Process</em></a>, Volume 36 (3), 2006.</li>
<li>International Commission on Radiological Protection, Annals of the ICRP, ICRP Publication 103, <a href="http://www.icrp.org/publication.asp?id=ICRP%20Publication%20103"><em>The 2007 Recommendations of the International Commission on Radiological Protection</em></a>, Volume 37(2-4), 2007</li>
<li>New Brunswick Department of Public Safety, Point Lepreau Nuclear Off-Site Emergency Plan Volume 1 (Policy) and Volume 2 (Procedures), 2013.</li>
<li>International Commission on Radiological Protection, Annals of the ICRP, ICRP Publication 111, <a href="http://www.icrp.org/publication.asp?id=ICRP%20Publication%20111"><em>Application of the Commission&#39;s Recommendations for the Protective of People Living in Long-term Contaminated Areas after a Nuclear Accident or Radiation Emergency</em></a>, Volume 39(3), 2009.</li>
<li>United States Environmental Protection Agency, <a href="https://www.epa.gov/sites/production/files/2015-06/documents/pag-manual-interim-public-comment-4-2-2013.pdf"><em>PAG Manual &ndash; Protective Action Guides and Planning Guidance for Radiological Incidents, Draft for Interim Use and Public Comment</em></a>, March 2013</li>
<li>ASN, 2012 Autorité de sûreté nucléaire (ASN), <a href="https://post-accidentel.asn.fr/content/download/53111/365550/version/1/file/GT3_021207_b.pdf"><em>Comité directeur pour la gestion de la phase post-accidentelle d&#39;un accident nucléaire ou d&#39;une situation d&#39;urgence radiologiques </em></a> (CODIRPA), October 2012</li>
<li>National Council on Radiation Protection and Measurements, NCRP Report No. 175, <em>Decision making for late-phase recovery from major nuclear or radiological incident</em>, December 2014</li>
<li>International Commission on Radiological Protection, <a href="http://www.icrp.org/page.asp?id=189"><em>ICRP Dialogue Initiative (2011-2015)</em></a>.</li>
<li>International Atomic Energy Agency, <em>Environmental and Source Monitoring for Purposes of Radiation Protection</em>, 2005</li>
<li>Codex Alimentarius Commission, <em>Codex General Standard for Contaminants and Toxins in Foods</em>, Schedule 1 &ndash; Radionuclides, 2010</li>
<li>Nordic Guidelines and Recommendations, Protective Measures in the Early and Intermediate Phases of a Nuclear or Radiological Emergency, 2014.</li>
<li>Canadian Standards Association Group, CSA N292.3-14, <em>Management of low- and intermediate level radioactive waste</em>, 2014.</li>
<li>International Atomic Energy Agency, Specific Safety Requirements SSR-5, Disposal of Radioactive Waste, 2011</li>  </ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="biblio"></div>
<h2 id="biblio">Bibliography</h2>  <ol>
<li>Australian Radiation Protection and Nuclear Safety Agency, <a href="https://www.arpansa.gov.au/regulation-and-licensing/regulatory-publications/radiation-protection-series/guides-and-recommendations/rps7"><em>Recommendations: Intervention in Emergency Situations Involving Radiation Exposure</em></a>, Radiation Protection Series No. 7, November 2004.</li>
<li>Canadian Standards Association, CSA N1600, <em>General requirements for nuclear emergency management programs</em>, Toronto, 2014.</li>
<li>Health Canada, <em>Draft Canadian Guidelines for Protective Actions during a Nuclear Emergency</em>, 2016.</li>
<li>Canadian Nuclear Safety Commission, <a href="\eng\resources\fact-sheets\reference-levels"><em>Reference levels for nuclear emergency response and post-accident recovery</em></a>, October 2015.</li>
<li>Durham Region Risk Specific Plan, Durham Nuclear Emergency Response Plan, May 2016.</li>
<li>Government of Canada, <a href="http://www.publicsafety.gc.ca/cnt/rsrcs/pblctns/mrgnc-rspns-pln/index-eng.aspx"><em>Federal Emergency Response Plan</em></a>, January 2011.</li>
<li>Government of Canada, <a href="http://laws-lois.justice.gc.ca/eng/acts/E-4.56"><em>Emergency Management Act</em></a>, 2007.</li>
<li>Health Canada, <a href="http://www.hc-sc.gc.ca/hc-ps/ed-ud/event-incident/radiolog/info/glossary-glossaire-eng.php#o"><em>Radiological & Nuclear: Background Information Archive Glossary</em></a>, 2013.</li>
<li>International Commission on Radiological Protection, Annals of the ICRP, ICRP Publication 109, <a href="http://www.icrp.org/publication.asp?id=ICRP%20Publication%20109"><em>Application of the Commission&#39;s Recommendations for the Protection of People in Emergency Exposure Situations</em></a>, Volume 39(1), 2009a.</li>
<li>International Atomic Energy Agency, IAEA General Safety Guide No. GSG-x <a href="http://regelwerk.grs.de/sites/default/files/cc/dokumente/ds474_ms_0.pdf">Draft DS474: Arrangements for the Termination of a Nuclear or Radiological Emergency</a>, Version 3, 2016.</li>
<li><a href="http://www.kincardine.net/public_docs/documents/MOK Emergency Response Plan revised 2016 jan 262.pdf">Kincardine Emergency Response Plan, Schedule A to BY_LAW No. 2006-009</a>, January 27, 2016.</li>
<li>Raskob, W., Gering, F., Lochard, J., Nisbet, A., Starostova, V., Tomic, B. EURANOS (<a href="http://cordis.europa.eu/pub/fp6-euratom/docs/euranos-publishable-summary-final_en.pdf">European Approach to Nuclear and Radiological Emergency Management and Rehabilitation Strategies</a>).</li>
<li>United States Environmental Protection Agency (USEPA), <a href="https://www.epa.gov/radiation/protective-action-guides-pags"><em>Manual of Protective Action Guides and Protective Actions for Nuclear Incidents</em></a>, May 1992.</li>
<li>United Stated Nuclear Regulatory Commission, <a href="http://www.nrc.gov/reading-rm/basic-ref/glossary.html"><em>Basic References: Glossary</em></a>, 2016.</li>   </ol>
<div className="col-md-12 module ">  <p>For the reference and bibliography sections, the CNSC would like to hear comments on the following questions:</p>  <p>Q26. Have we missed a significant source of information? If yes, please provide the full bibliographical information.</p>  <p>Q27. Have we used or considered the appropriate documents and material? If not, please provide the relevant source of information to be considered.</p>  </div>  <div className="clear"></div>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>

                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }