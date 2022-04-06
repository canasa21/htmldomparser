import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "en",
                pageTitle: "Stakeholder Workshop Report: Process for Establishing Release Limits and Action Levels at Nuclear Facilities", 
                dateModified: "2013-12-03",
                langToggleUrl: "/fra/acts-and-regulations/consultation/comment/swr-d-12-02"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<a id="toc"></a>
<h2>Table of Contents</h2>
<div className="IndentLeft10">
<p className="mrgn-bttm-md mrgn-tp-sm"><a href="#how-to">How to Comment</a></p>
<p className="mrgn-bttm-md mrgn-tp-sm"><a href="#intro">Introduction</a></p>
<p className="mrgn-bttm-md mrgn-tp-sm"><a href="#topic-area">Topic Areas and Discussion Summaries</a></p>
<p className="mrgn-bttm-md mrgn-tp-sm"><a href="#sec1">1. Technology-based Release Limits&nbsp;- BATEA&nbsp;- Pollution Prevention</a></p>
</div>
<div className="IndentLeft20">
<p className="mrgn-bttm-md mrgn-tp-sm"><a href="#sec1-1">1.1 Background Information</a></p>
<p className="mrgn-bttm-md mrgn-tp-sm"><a href="#sec1-2">1.2 Issue</a></p>
<p className="mrgn-bttm-md mrgn-tp-sm"><a href="#sec1-3">1.3 Questions for Discussion</a></p>
<p className="mrgn-bttm-md mrgn-tp-sm"><a href="#sec1-4">1.4 Summary of Discussion</a></p>
</div>
<div className="IndentLeft10">
<p className="mrgn-bttm-md mrgn-tp-sm"><a href="#sec2">2. Exposure-based Release Limits and Mixing Zones</a></p>
</div>
<div className="IndentLeft20">
<p className="mrgn-bttm-md mrgn-tp-sm"><a href="#sec2-1">2.1 Background Information</a></p>
<p className="mrgn-bttm-md mrgn-tp-sm"><a href="#sec2-2">2.2 Issue</a></p>
<p className="mrgn-bttm-md mrgn-tp-sm"><a href="#sec2-3">2.3 Questions for Discussion</a></p>
<p className="mrgn-bttm-md mrgn-tp-sm"><a href="#sec2-4">2.4 Summary of Discussion</a></p>
</div>
<div className="IndentLeft10">
<p className="mrgn-bttm-md mrgn-tp-sm"><a href="#sec3">3. Release Limits and Dose to Public</a></p>
</div>
<div className="IndentLeft20">
<p className="mrgn-bttm-md mrgn-tp-sm"><a href="#sec3-1">3.1 Background Information</a></p>
<p className="mrgn-bttm-md mrgn-tp-sm"><a href="#sec3-2">3.2 Issue</a></p>
</div>
<div className="IndentLeft30">
<p className="mrgn-bttm-md mrgn-tp-sm"><a href="#sec3-2-1">3.2.1 International Best Practice</a></p>
<p className="mrgn-bttm-md mrgn-tp-sm"><a href="#sec3-2-2">3.2.2 IAEA Safety Standards Series&nbsp;- Safety Guide No. WS-G-2.3: Regulatory Control of Radioactive Discharges to the Environment</a></p>
</div>
<div className="IndentLeft20">
<p className="mrgn-bttm-md mrgn-tp-sm"><a href="#sec3-3">3.3 Questions for Discussion</a></p>
<p className="mrgn-bttm-md mrgn-tp-sm"><a href="#sec3-4">3.4 Summary of Discussion</a></p>
</div>
<div className="IndentLeft10">
<p className="mrgn-bttm-md mrgn-tp-sm"><a href="#sec4">4. Action Levels for Environmental Protection</a></p>
</div>
<div className="IndentLeft20">
<p className="mrgn-bttm-md mrgn-tp-sm"><a href="#sec4-1">4.1 Background Information</a></p>
<p className="mrgn-bttm-md mrgn-tp-sm"><a href="#sec4-2">4.2 Issue</a></p>
</div>
<div className="IndentLeft30">
<p className="mrgn-bttm-md mrgn-tp-sm"><a href="#sec4-2-1">4.2.1 Action Level Example</a></p>
</div>
<div className="IndentLeft20">
<p className="mrgn-bttm-md mrgn-tp-sm"><a href="#sec4-3">4.3 Questions for Discussion</a></p>
<p className="mrgn-bttm-md mrgn-tp-sm"><a href="#sec4-4">4.4 Summary of Discussion</a></p>
</div>
<div className="IndentLeft10">
<p className="mrgn-bttm-md mrgn-tp-sm"><a href="#appA">Appendix&nbsp;A: List of Acronyms</a></p>
<p className="mrgn-bttm-md mrgn-tp-sm"><a href="#appB">Appendix&nbsp;B: Workshop Participants</a></p>
<p className="mrgn-bttm-md mrgn-tp-sm"><a href="#appC">Appendix&nbsp;C: General mixing Zone Limits in Quebec, Saskatchewan and Alberta</a></p>
<p className="mrgn-bttm-md mrgn-tp-sm"><a href="#appD">Appendix&nbsp;D: Flip Chart Notes</a></p>
</div>
<div className="IndentLeft20">
<p className="mrgn-bttm-md mrgn-tp-sm"><a href="#appD-1">D.1 Technology-based Release Limits&nbsp;- BATEA&nbsp;- Pollution Prevention</a></p>
<p className="mrgn-bttm-md mrgn-tp-sm"><a href="#appD-2">D.2 Exposure-based Release Limits and Mixing Zones</a></p>
<p className="mrgn-bttm-md mrgn-tp-sm"><a href="#appD-3">D.3 Release Limits and Dose to Public</a></p>
<p className="mrgn-bttm-md mrgn-tp-sm"><a href="#appD-4">D.4 Action Levels for Environmental Protection</a></p>
</div>  <a id="topic"></a>
<h3 id="how-to">How to Comment</h3>
<p><strong>You may provide your  comments: </strong></p>  <ul>
<li>email: <a href="mailto:consultation@cnsc-ccsn.gc.ca">consultation@cnsc-ccsn.gc.ca</a></li>
<li>mail:<br />
Canadian Nuclear Safety Commission<br />
P.O. Box 1046,  Station B<br />
280 Slater Street<br />
Ottawa, Ontario,   Canada K1P 5S9 </li>
<li>Fax:  613-995-5086</li>  </ul>  <p><strong>Comments submitted, including names and affiliations are intended to be made public. You will not receive a formal reply to your comments.</strong></p>
<h3 id="intro">Introduction</h3>
<p>The Commission has charged staff of the Canadian Nuclear Safety Commission (CNSC) to review the existing framework for regulating release limits of nuclear substances as well as to develop and document a formal framework for establishing regulatory release limits for  hazardous substances at CNSC-licensed facilities.</p>
<p>In response, the CNSC released Discussion Paper DIS-12-02, entitled <em>Process for Establishing Release Limits and Action Levels at Nuclear Facilities</em>, in February 2012 for public comment. Due to the interest in the discussion paper, the standard 60-day review period was extended for an additional 60 days to June 30, 2012. Comments received were posted on the CNSC Web site for a standard 30-day  comment period. Once again, upon request, this secondary comment period was  extended for an additional 30 days to September 30, 2012.</p>
<p>This public review process generated  extensive comments from industry, federal and provincial regulatory agencies,  and non-governmental organizations. A summary <em>What We Heard Report</em> was posted on the CNSC Web site<a className="fn-lnk" href="#fnb1" id="fnb1-ref"><span className="cn-invisible">Footnote </span>1</a>.</p>
<p>Given the diversity of the comments received, CNSC staff recognized that additional consultation and discussion would be required prior to determining a path forward. Additional consultation was intended to provide stakeholders with an opportunity to clarify their comments on specific aspects of the CNSC&#39;s proposed approach for establishing release limits and action levels (ALs) at nuclear facilities.</p>
<p>To this end, CNSC staff organized a one-day workshop with the stakeholders who had provided comments on the discussion paper. Invitations to participate in the workshop were sent separately to 30 responding organizations and individuals. This workshop took  place in June 2013. A total of 28 people participated, the majority representing  industry sectors including mining and milling, fuel fabrication, nuclear power  plants, research and development, and waste management. Other participants were  private consultants and representatives of a non-governmental organization (CSA Group) and a federal regulator (Environment Canada).</p>
<p>The workshop was structured around  four topic areas designed to cover those areas of the discussion paper that  sparked the most discussion. These topic areas were:</p>
<ol>
<li>Technology-based Release Limits, BATEA and Pollution  Prevention</li>
<li>Exposure-based Release Limits and Mixing Zones</li>
<li>Release Limits Based on Radiation Dose to the Public</li>
<li>Action Levels for Environmental Protection</li>
</ol>
<p>Prior to the meeting, information packages outlining each of the topic areas were provided to registered participants. This information is contained in the report below, as the lead-in to each discussion summary. The workshop opened with a brief presentation by CNSC staff reflecting the <em>What We Heard Report</em>, which had been posted  to the Web site, and an explanation of the workshop procedures for the  day.</p>
<p>Participants were pre-assigned to  groups to ensure diversity of interest and expertise for each discussion  session. Each group remained intact and rotated as a team through each of the  four topic areas during the day. Each topic table was facilitated by a CNSC  staff member who encouraged discussion and documented participant comments.</p>
<p>At the end of the day, the four facilitators presented a summary to all workshop participants for validation and to obtain any final feedback. These summaries and the original notes from the flip charts are provided in the following pages. It should be noted that  the summaries and notes represent the positions or opinions of the workshop  participants and not those of the CNSC. CNSC staff have not yet finalized their  assessments of the comments received to date on the proposed process to  establish release limits and ALs.</p>
<p>CNSC staff are now making this  workshop report available to all stakeholders for another opportunity to  comment on the proposed approach to regulating releases of effluents to the  environment. A list of acronyms used in this document is found in Appendix A,  and a list of participating organizations is found in Appendix B.</p>
<p>CNSC staff will  carefully consider all comments received from stakeholders to develop the CNSC  regulatory approach for establishing release limits and action levels at  nuclear facilities. Stakeholders and the public will have an opportunity to  comment on the resulting approach.</p>
<h3 id="topic-area">Topic Areas and Discussion Summaries</h3>  <a id="1"></a>
<h3 id="sec1">1. Technology-based Release Limits&nbsp;- BATEA&nbsp;- Pollution Prevention</h3>  <a id="1.1"></a>
<h4 id="sec1-1">1.1 Background Information</h4>
<p>Environmental Legislation in Canada, including that of the NSCA, operates beneath the overall umbrella legislation of the <em>Canadian Environmental Protection Act</em> (CEPA).</p>
<p>Short Title: <em>&quot;An Act respecting pollution  prevention and the protection of the environment and human health in order to  contribute to sustainable development&quot;</em></p>
<p>Preamble: <em>Whereas the Government of Canada is  committed to implementing pollution prevention as a national goal and as the  priority approach to environmental protection;</em></p>
<p><strong>CNSC Regulatory Policy Protection of the Environment (P-223):</strong><br />
<em>&quot;This regulatory policy describes the principles and factors that guide the Canadian Nuclear Safety Commission (CNSC) &hellip;. in order to prevent unreasonable risk to the environment in a manner that is consistent with Canadian environmental policies, acts and  regulations and with Canada&#39;s international obligations.&quot;</em></p>
<p>In this context it is proposed that release limits be  established based on <strong>effective and demonstrated pollution  prevention/control technologies/techniques</strong> or the limits required to meet risk-based and scientifically defensible ambient environmental quality guidelines, whichever are more stringent.</p>
<p>The use of pollution prevention performance standards, such  as that of Best Available Technology Economically Achievable (BATEA), is a common regulatory expectation both internationally (e.g., European Union BAT documents, the Organisation for Economic Co-operation and Development (OECD) Nuclear Energy Agency (NEA) Expert Group on BAT, US EPA etc), nationally (e.g., <em>Metal Mining Effluent Regulations</em> (MMERs)), and provincially (Alberta, Ontario, Quebec). BATEA-based limits  generally consist of reviewing the achieved effluent performance of facilities using BATEA (not necessarily the same technology or techniques) and determining a concentration (or activity level) which can be achieved. Hence, BATEA-based effluent limits do not determine the specific technology/technique but rather specify the minimum expected performance. The operator may then determine the technology/technique they wish to apply.</p>
<p>The Commission has charged staff with establishing wherever  feasible a minimum common standard of effluent quality applicable to CNSC regulated facilities (all or sector based).</p>  <a id="1.2"></a>
<h4 id="sec1-2">1.2 Issue</h4>
<p>How should the concepts of BATEA and pollution prevention be  incorporated into an effluent quality decision framework. </p>
<p><strong>Proposal: Use  BATEA-based technology-based release limits (TBRLs) where site-specific factors  indicate no need for further improved effluent quality.</strong><br />
Many of the release limits found in Canadian Federal and  Provincial legislation are BATEA-based. The CNSC proposes to use limits that presently exist in federal and/or  provincial legislation. These limits do  not account for site-specific sensitivities nor the assimilative capacity of  the receiving environment. As such they  are considered minimum effluent performance requirements representing a commitment  to pollution prevention, the priority approach to environmental protection. For  example, a facility releasing effluent to a waterbody with the assimilative  potential of one of the Great Lakes is  unlikely to have a risk based effluent concentration as immediate dilution  potential is so high (especially with diffusers). In such scenarios existing BATEA-based  effluent limits would establish the minimum quality of the effluent.</p>
<p>The discussion document also proposed that all new facilities incorporate BATEA during the design phase.</p>  <a id="1.3"></a>
<h4 id="sec1-3">1.3 Questions for Discussion</h4>
<ul>
<li>What would be the impediments to the use of BATEA-based limits in legislation with the expectation that facilities incorporate BATEA into their facility designs (independent of risk)? If so what are potential alternatives?</li>
<li>What would be the impediments to the use of available (i.e., existing federal and/or provincial legislation) sector specific technology-based release limits (i.e., minimum performance standards)  unless site-specific factors indicate the need for stricter exposure-based  limits?</li>
<li>What would be the impediments to the use of case  specific technology-based release limits as described in the discussion  document?</li>
<li>How should BATEA be determined and at what frequency should it be reviewed? </li>
</ul>  <a id="1.4"></a>
<h4 id="sec1-4">1.4 Summary of Discussion</h4>
<ol>
<li>Participants agreed in principle on the link between  &quot;pollution prevention&quot;&nbsp;- ALARA (as low as reasonably achievable)- and a &quot;technology-based solution&quot;.
<ol className="lower-alpha">
<li>They do not want the technology-based &quot;solution&quot; to be  a limit.</li>
<li>Could the exposure-based release limit (EBRL) be  considered as the limit, but technology-based release limit (TBRL) as the  &quot;objective?&quot; This &quot;objective&quot; could be introduced as a separate process that  could be inspected, reviewed and enforced to ensure pollution prevention. The  purpose would be to &quot;control performance&quot;. The EBRL would be used to control safety. </li>
<li>A parallel would be radiation protection that relies on  limits, but uses ALARA to continually optimize processes to reduce exposures&nbsp;-  it is recommended to use EBRL for a limit and a program based on TBRL as the  &quot;ALARA&quot; program. </li>
</ol>
</li>
<li>There is concern over what triggers would require a  retrofit when a new technology comes along&nbsp;- in the absence of risk.</li>
<li>TBRLs  may require treatment when there is no risk to avoid or minimize. This may  result in increased energy consumption, use of additional process chemicals and  cost. This could cause an increased environmental footprint.
<ol className="lower-alpha">
<li>The framework must incorporate a holistic approach to  establishing limits and avoiding a larger footprint.</li>
<li>Unnecessary treatment may result in a large quantity of  sludge that must be managed post-operation.</li>
<li>Treatment may require the use of Fe-addition, and Fe  may be in the MMERs in the future.</li>
<li>TBRL may introduce costs with no benefit.</li>
<li>The best available technology economically achievable  (BATEA) for element A may increase the concentration of element B.</li>
</ol>
</li>
<li>A  very simple framework is needed for discerning between &quot;risk&quot; and &quot;performance  improvement&quot; and how the two relate to limits. </li>
<li>Participants  commented on impediments to the use of existing limits.
<ol className="lower-alpha">
<li>Limits could be outdated.</li>
<li>The public may not understand/know the science behind  limits (and whether or not the limits are protective).</li>
</ol>
</li>
</ol>
<p>Additional participant comments  (flip chart notes) are available in Appendix D.</p>  <a id="2"></a>
<h3 id="sec2">2. Exposure-based Release Limits and Mixing Zones</h3>  <a id="2.1"></a>
<h4 id="sec2-1">2.1 Background Information</h4>
<p>The CNSC has had to require treatment for hazardous  substances that have either:</p>
<ul>
<li>been determined to be CEPA toxic, or</li>
<li>identified as posing an &quot;unreasonable risk&quot;  based on site-specific risk assessments.</li>
</ul>
<p>Without a well established regulatory approach for the  development of licence limits the CNSC has used Action Levels (ALs) as  &quot;informal&quot; licence limits. This is an inappropriate use of ALs and does not represent clear regulatory requirements.</p>
<p>The Commission has determined that this is no longer  acceptable and charged staff to identify and adopt a protocol for developing CNSC licence limits for such substances.</p>  <a id="2.2"></a>
<h4 id="sec2-2">2.2 Issue</h4>
<p>How should limits be established for substances for which  there are no regulatory limits in existing federal or provincial legislation or  CNSC licences<a className="fn-lnk" href="#fnb2" id="fnb2-ref"><span className="cn-invisible">Footnote </span>2</a>.</p>
<p><strong>Proposal: Use exposure-based release limits and  mixing zones</strong></p>
<p>The basic principle for an exposure-based approach is to determine the criteria to be attained at a specific distance from the point of release and to back-calculate the concentration that would need to be achieved in the effluent to ensure the desired concentration at the specified point in the receiving environment is not exceeded. A liquid effluent example taken from the discussion document is provided.</p>
<p>For atmospheric releases of hazardous substances the release limit is often based on determining the point at which ambient air quality criteria or point-of-impingement criteria are to be achieved with this determining the &quot;mixing zone&quot;. This atmospheric mixing  zone represents an area within which criteria (almost always chronic) may be  exceeded, however, this is generally acceptable as the mixing zone by its  nature is in the air and does not contain resident human or non-human biota.</p>
<p id="fig1" className="mrgn-bttm-0">Figure 1: Representation of a back-calculation performed when determining EBRLs</p>
<p className="mrgn-tp-0"><img src="/eng/acts-and-regulations/consultation/comment/swr-dis-12-02/images/eng-1-s.png" alt="" width="595" height="398"/><br />
<a href="/eng/acts-and-regulations/consultation/comment/swr-dis-12-02/longdesc/longdesc#fig1">Figure 1 Text alternative</a> | <a href="/eng/acts-and-regulations/consultation/comment/swr-dis-12-02/longdesc/fig1-img">Larger image for Figure 1</a></p>
<p>Exposure-based release limits incorporating mixing zones for liquid releases to the aquatic environment is also a common practice used internationally and by provincial and territorial regulatory  authorities in Canada. The CNSC proposed methodology is based on  documentation provided by the US EPA to state water regulatory <span className="nowrap">authorities<a className="fn-lnk" href="#fnb3" id="fnb3-ref"><span className="cn-invisible">Footnote </span>3</a></span> and Canadian provincial environmental regulatory documentation such as that of Alberta, Ontario and Quebec which themselves are based on the US approach.</p>
<p>Unlike the atmospheric releases, aquatic mixing zones must address two issues:</p>
<ol>
<li>there is a higher likelihood of having aquatic life resident within the mixing zone, thus the acceptable spatial extent of the mixing zone needs to be defined, and</li>
<li>there is the potential for conflict with the <em>Fisheries Act</em> (s.36) which prohibits the discharge of deleterious substances and does not recognize &quot;mixing zones&quot;.</li>
</ol>  <a id="2.3"></a>
<h4 id="sec2-3">2.3 Questions for Discussion:</h4>
<p>The main issues to be discussed with respect to mixing zones  are:</p>
<ul>
<li>What approaches should the CNSC consider when EBRLs need to be established for hazardous substances released to the atmosphere?</li>
<li>What approaches should the CNSC consider when EBRLs need to be established for hazardous substances released to the surface  water?</li>
<li>In the context of EBRLs for discharges in headwaters of watersheds, how can provincial or federal guidance on mixing zones be used?</li>
<li>For EBRLs, exposure-based criteria need to be  identified. What would be the appropriate criteria for human health (non-carcinogens and carcinogens)? What would be the appropriate criteria for biota (aquatic organisms and wildlife)?</li>
</ul>
<p>A table of general mixing zone limits in Quebec, Saskatchewan and Alberta is provided in Appendix C.</p>  <a id="2.4"></a>
<h4 id="sec2-4">2.4 Summary of Discussion</h4>
<ol>
<li>Participants commented on duplication of oversight by multiple regulators.
<ol className="lower-alpha">
<li>The document [discussion paper] needs to be clear  regarding harmonization and how it would be achieved.</li>
<li>All regulators need to reach agreement on the location  of the &quot;point of release&quot;.</li>
<li>Definitions of cancer risk for EBRL need to be  harmonized with those of Health Canada.</li>
</ol>
</li>
<li>There is potential conflict with subsection 36(3) of  the <em>Fisheries Act</em>, which does not recognize mixing zones.
<ol className="lower-alpha">
<li>New tools are being considered that may allow the  recognition of limits established by other governmental agencies (provincial or  federal) if it can be demonstrated that the risks are low and have been fully assessed, and that regulatory instruments are in place to enforce them.</li>
<li>Is there a role for chronic, sub-lethal toxicity tests  in regulating release limits?</li>
</ol>
</li>
<li>The definition of &quot;mixing zones&quot; must consider  seasonality, low flow under climate change, site-specific factors, etc.</li>
<li>How is uncertainty (at all levels) addressed in EBRLs?</li>
<li>The discussion paper was not clear that EBRLs would  apply only to hazardous substances; the paper needs to be clear that dose  modelling/predictions to non-human biota may not be advanced enough  (scientifically) to develop EBRLs. </li>
<li>&quot;Accepted&quot; impacts in an approved environmental assessment/environmental risk assessment (EA/ERA) must be used to define the extent of an acceptable mixing zone and point of compliance for a mixing zone.</li>
<li>Who will do the &quot;work&quot; and expend the resources to develop EBRLs? The licensee? CNSC? What about the public perception if the licensee develops their own EBRL?</li>
<li>EBRLs should be used to define what is &quot;safe&quot; based on the EA/ERA. Then, in most cases, below that should be a TBRL or &quot;objective&quot; for treatment in the spirit of pollution prevention and ALARA.</li>
</ol>
<p>Additional participant comments  (flip chart notes) are available in Appendix D.</p>  <a id="3"></a>
<h3 id="sec3">3. Release Limits and Dose to Public</h3>  <a id="3.1"></a>
<h4 id="sec3-1">3.1 Background Information</h4>
<p>In the past it was common for the CNSC to base authorized  radiological release limits on the public dose limit of 1 mSv/yr. In some instances this resulted in:</p>
<ol>
<li>release limits that could only be exceeded under major  accident scenarios;</li>
<li>the difference between the authorized release and the actual release differed by orders of magnitude;</li>
<li>the release limit exceeded the facilities entire inventory of the radionuclide.</li>
</ol>
<p>In such cases the release limits:</p>
<ul>
<li>fail to serve the intended control objective; and</li>
<li>leave the perception that regulatory  authorization has been provided for the operator to discharge substantially  greater quantities of radioactivity than the facility has been designed to  release.</li>
</ul>
<p>It is recognized that too low a  difference between actual and authorized releases may result in operators  breaching an authorized discharge rate when carrying out reasonable and  necessary activities which, while having negligible radiological impacts, could  raise substantial concern within the public and lead to the perception of poor  regulatory performance.</p>
<p>In response to public and  Commission concerns with respect to these large discrepancies between  authorized releases and actual releases, licence release limits for some  facilities have been based on values other than 1 mSv/yr.</p>
<p>Thus, presently the CNSC is using  a non-uniform approach for the determination of release limits with respect to  the dose to public.</p>
<ul>
<li>Nuclear power plants based on 1 mSv/yr</li>
<li>Fuel Fabrication Facilities based on 0.05 mSv/yr</li>
<li>Tritium Processing Facilities based on 0.05  mSv/yr</li>
<li>Uranium mines and mills release limits are TBRLs  in federal or provincial regulations (Saskatchewan&#39;s <em>Mineral Industry Environmental Protection Regulations</em> and the federal  MMERs). Compliance with the 1 mSv/yr regulatory limit is demonstrated in  Environmental Assessments and periodic Status of the Environment Reports.</li>
</ul>  <a id="3.2"></a>
<h4 id="sec3-2">3.2 Issue</h4>
<p>How should derived release limit (DRL) -based release limits (<em>CSA N288.1 Guidelines for calculating derived release limits for radioactive material in airborne and liquid effluents for normal operation of nuclear facilities</em>) be calculated to serve as facility control values, while still providing adequate margin to allow for operation flexibility and response to non-routine plant conditions?</p>
<p><strong>Proposal: Calculation of DRLs using a dose value/criteria other than the public dose limit in the NSCA</strong></p>
<h5 id="sec3-2-1">3.2.1 International Best Practice</h5>
<p>Internationally, practices vary, though a number of countries use the DRL approach with the  modelling based on a value other than the 1 mSv/yr public dose value/criteria in regulation. The specific values vary from 0.3 mSv/yr to 0.1 mSv/yr. Others base licence limits on actual releases, tightening limits as performance improves.</p>
<p>The OECD NEA Expert Group on BAT has recently (2012)  released a report entitled: &quot;Good Practice in Effluent Management for Nuclear  Power Plant New Build.&quot;</p>
<p>This document, in the paragraph provided below, concisely  summarizes the challenge being faced.</p>
<p className="indent1">&quot;The challenge is to devise a  transparent and consistent approach to setting authorised discharge rates at  levels that are stringent enough to guarantee a high level of performance in  relation to discharges, while giving operators the flexibility they need to  conduct normal, acceptable operations and/or to respond to non-routine plant conditions without infringing their discharge authorisations.&quot;</p>
<p>NEA provides the following  guidance:</p>
<p><strong>Principles for use in those countries where the  regulatory authority establishes (or approves the operator&#39;s application for)  authorised discharge limits at levels below those required by consideration of  annual dose limits. <em>Authorized limits  should</em>:</strong></p>
<ul>
<li>&hellip; be based on the levels of discharge &hellip;  determined to be optimised for plant operation, considering the discharge  abatement techniques available to the operator. &hellip;</li>
<li>&hellip; provide for necessary operator  flexibility based on fluctuations or trends in the levels of discharge over  time, that the operator has substantiated will occur in routine operation and  anticipated operational occurrences (e.g., start-ups, leaks and malfunctions  expected to occur during the operating lifetime of the plant), even though BAT  have been applied.</li>
<li>The difference allowed between actual  discharges and prospectively authorised discharge rates should be kept near the  minimum necessary for the normal operation of the plant (routine operations and  anticipated operational occurrences).</li>
<li>The authorised discharge rates are not  set at levels corresponding to the boundary between acceptable and unacceptable  radiological impact or to a calculated value of dose to members of the public  equal to the annual dose established in traditionally set generic discharge  limits. In particular, they do not correspond to the dose limits contained in  national or international legislation. The application of BAT should in all  likelihood have eliminated any proposals which would give rise to calculated  doses approaching or exceeding such limits before the stage is reached when  authorised discharge rates are established.</li>
</ul>
<h5 id="sec3-2-2">3.2.2 IAEA Safety Standards Series&nbsp;- Safety Guide No.  WS-G-2.3: Regulatory Control of Radioactive Discharges to the Environment</h5>
<p>The IAEA Safety Guide was published in 2000 and provides substantial guidance on setting release limits that have been summarized by the statements below:</p>
<ol>
<li>&quot;Authorized discharge limits are set by the regulatory  body.&quot;</li>
<li>&quot;The <strong><em>limits shall satisfy the  requirements for the optimization of protection</em></strong> and the condition  that doses to the critical group shall not exceed the appropriate dose  constraints.&quot;</li>
<li>&quot;They  should also reflect the requirement of a well-designed and well managed  practice and should provide a margin for <strong><em>operational flexibility and variability</em></strong>.&quot;</li>
<li>&quot;In  order to satisfy these requirements, <strong><em>the numerical values of the authorized discharge limits should</em></strong> be close to, but generally higher than, the discharge rates and quantities  resulting from the calculations for optimization of protection to allow margin  for operational flexibility, although they should <strong><em>never exceed the discharge level corresponding to the dose constraint</em></strong>.&quot;</li>
<li>&quot;Discharge  limits will be written and attached or incorporated into the authorization and  will become the legal limits with which the operator or licensee should comply.&quot;</li>
<li>&quot;The discharge limits can refer to the complete spectrum of radionuclides to be discharged, or nuclides can be combined in appropriate groups such as, for example, noble gases or halogens. Limits for specific nuclides might be adopted if the radionuclides are radiologically significant, if they are major contributors to the discharges or if they serve as indicators of plant performance.&quot;</li>
<li>&quot;the values selected should not exceed those corresponding to the dose constraints; i.e. they should satisfy the following condition:</li>
</ol>
<p><img src="/eng/acts-and-regulations/consultation/comment/swr-dis-12-02/images/eq-1.jpg" className="image-actual" alt="A mathematical equation representing the condition that the sum of the maximum future annual doses to the critical group from each radionuclide or radionuclide group released by each environmental pathway will be less than the dose constraint, and taking into account a safety factor to provide sufficient confidence that the dose constraint will not be exceeded." width="257" height="64"/></p>
<p>where</p>
<div>
<p className="pull-left  mrgn-tp-0"><img width="85" height="30" src="/eng/acts-and-regulations/consultation/comment/swr-dis-12-02/images/eq-2.jpg" alt="A mathematical symbol for the maximum future annual dose."/></p>
<p>is the maximum future annual dose to the critical group, calculated with a particular model and for the discharge of radionuclide or radionuclide group i by discharge route k per Becquerel</p>
</div>
<div className="clear-both"></div>
<div>
<p className="pull-left  mrgn-tp-0"><img width="36" height="27" src="/eng/acts-and-regulations/consultation/comment/swr-dis-12-02/images/eq-3.jpg" alt="A mathematical symbol for the discharge limit."/></p>
<p>is the discharge limit, in Becquerels, on the annual release of radionuclide or radionuclide group i by discharge route k</p>
</div>
<div className="clear-both"></div>
<div>
<p className="pull-left  mrgn-tp-0"><img width="84" height="25" src="/eng/acts-and-regulations/consultation/comment/swr-dis-12-02/images/eq-4.jpg" alt="A mathematical symbol for the dose constraint for the source under control."/></p>
<p>is the dose constraint for the source under control.</p>
</div>
<div className="clear-both"></div>
<div>
<p className="pull-left  mrgn-tp-0"><img width="27" height="28" src="/eng/acts-and-regulations/consultation/comment/swr-dis-12-02/images/eq-5.jpg" alt="A mathematical symbol for the safety factor."/></p>
<p className="mrgn-tp-0">is a safety factor to take account of the uncertainty in the model used to calculate doses so as to provide sufficient confidence that the source related dose constraint will not be exceeded&quot;</p>
</div>  <a id="3.3"></a>
<h4 id="sec3-3">3.3 Questions for Discussion</h4>
<ul>
<li>Are there any impediments to establishing  authorized DRLs using international best practices (NEA, IAEA)? If so, what are  potential solutions?</li>
<li> What approaches can be used to take into account  operational flexibility, including non-routine plant conditions?</li>
<li> Taking into consideration the different sectors  that the CNSC regulates, how should the dose criteria be defined?</li>
<li> Does optimization have a role to play in  identifying the dose criteria? If so, is guidance on optimization needed?</li>
<li> Are there impediments to calculating DRLs for  uranium mines and mills? If so what are potential solutions? </li>
</ul>  <a id="3.4"></a>
<h4 id="sec3-4">3.4 Summary of Discussion</h4>
<ol>
<li>The importance of keeping the 1 mSv/yr derived release  limit (DRL) was emphasized by a number of groups. A number of workshop  participants expressed concern that the public would erroneously interpret the  use of a lower dose for calculating release limits as an indication that the  public dose limit of 1 mSv/yr was not adequately protective.</li>
<li>A suggested alternative was to keep the 1 mSv/yr DRL,  but establish another value between the DRL and AL that represents an  unacceptable loss of control related to the proper operation of the facility.  Within this framework it is important to:
<ol className="lower-alpha">
<li>carefully choose the terms (DRL vs. limit vs. value vs.  level) and associated definitions</li>
<li>be flexible/universal, consistent with international  best practices, take a defence-in-depth approach, and avoid redundancy with ALs</li>
<li>consider applicability to new vs. existing facilities  and how cumulative dose would be dealt with</li>
<li>consider the approach to implementation and compliance  (e.g., the possibility of administrative monetary penalties and/or increased  monitoring and reporting expectations)</li>
<li>consider means of application to facilities that  already have dose constraints in licences&nbsp;- whether this conceptual framework  should be advanced (e.g., much higher or lower relative to values in licences)</li>
</ol>
</li>
<li>Application to mining is unclear.
<ol className="lower-alpha">
<li>From a mining perspective, too low a dose value that  represents loss of control could result in an increased footprint and increased  energy costs, making projects uneconomical.</li>
<li>With respect to the present situation for Northern Saskatchewan mining, it is difficult to define  &quot;public&quot; due to remoteness of facilities. It was suggested to use very  conservative assumptions for defining a representative member of the public and  to continue to calculate dose in mining environmental assessments.</li>
</ol>
</li>
</ol>
<p>Additional participant comments (flip chart notes) are  available in Appendix D.</p>  <a id="4"></a>
<h3 id="sec4">4. Action Levels for Environmental Protection</h3>  <a id="4.1"></a>
<h4 id="sec4-1">4.1 Background Information</h4>
<p>In the context of environmental protection, the purpose of  action levels (ALs) is to ensure, in addition to maintaining releases below  licence limits, that the licensee demonstrates &quot;adequate control&quot; of its facility and internal processes by maintaining releases within the &quot;normal operating range&quot;. This would be defined by its accepted facility design and engineering and administrative controls. The AL should identify when a &quot;potential loss of control&quot; may be occurring such that specific action may be taken to prevent a loss of control.</p>
<p>To define the &quot;normal operating range&quot; and to identify if the operation is outside of it, ALs can be derived using statistical methods that consider the variability of the contaminant  levels in the releases, and that represent performance at the upper end of the facility&#39;s normal operating range for which an exceedance could indicate potential loss of control.</p>
<p>ALs serve to: </p>
<ul>
<li>identify when the quality of releases may be  deviating from the normal operating range and thereby indicate a potential loss  of control (before an actual loss of control occurs)</li>
<li> identify fluctuations in concentrations of  contaminants that may be deviating from their normal operating range (e.g., a  change in waste stream characteristics)</li>
<li> provide for process control feedback such that  timely actions may be taken to return the process to normal operating range</li>
</ul>
<p>The CNSC proposes that ALs be established for all Class I facilities, uranium mines and mills and waste management facilities which have controlled points of release.</p>
<p>The only current guidance related to developing and implementing ALs is provided in CNSC regulatory guide G-228, <em>Developing and Using Action Levels</em> (2001). This guide focuses on the use of ALs within the radiation protection program (predominantly for workers) rather than  environmental protection in general. It does not provide specific guidance for numerically deriving ALs. This has led to inconsistencies between the derivation and application of ALs on releases among and within the various types of facilities licensed by the CNSC. Some licensees have calculated their ALs using statistical procedures applied to actual operating performance data and others have simply selected values below the licence limits with no specific relationship to actual operating performance (e.g., percentage of the licence limit). In the latter situation ALs for some facilities represent levels that would only be exceeded if a severe loss of control had occurred. This defeats the purpose of an AL which is to take action should there be indication of a &quot;potential&quot; loss of control to ensure on-going control of releases within the normal facility performance.</p>  <a id="4.2"></a>
<h4 id="sec4-2">4.2 Issue</h4>
<p>Identify a standardized approach for developing Action  Levels</p>
<p><strong>Proposal: Action levels  for environmental protection will be statistically derived (scientifically  justifiable)</strong></p>
<p>The CNSC proposes that the  protocol for establishing ALs for operational control involve statistical  process charting, which would indicate when effluent quality may be deviating from that expected under normal operating conditions. Since these levels would be statistically determined from predicted or actual operating data, they may need to be fine-tuned over the licensing period as performance of the facility  improves with increased operating experience or varies with minor process  changes. Hence, unlike licence release limits (which should remain relatively fixed), properly determined ALs may vary over time.</p>
<p>The CNSC position is that Action Level derivation shall be standardized and shall be statistically based. However, CNSC staff are aware that there are  an number of issues that must be addressed to ensure that the statistical  approach is flexible enough to meet the needs of the broad industry sector  regulated by the CNSC.</p>
<p>Within the Discussion Paper an example of a possible statistical approach was provided along with a number of issues that CNSC staff were seeking input on.</p>
<p>The proposed methodology is scientifically defensible,  transparent, and would be an effective tool for predicting a potential &quot;loss of control&quot; of a licensee&#39;s environmental protection programs. An example of the methodology for developing  an action level as well as its triggering is presented below: </p>
<h5 id="sec4-2-1">4.2.1 Action Level Example</h5>
<p>Three graphs are presented in Figures 2-4, outlining the  graphical outputs of the proposed methodology used to develop environmental  action levels.</p>
<p>Figure 2 depicts a scatter plot  time series, which is the output of the first step of the proposed methodology. The plotted dataset represents two years of weekly sampling data, or approximately 104 scatter points. The concentration or quantity of a Contaminant X that is released to the environment is presented on the y-axis, with time on the x-axis.</p>
<p>A broken line showing the concentration of the 95th percentile of the dataset is also presented on the graph. The text &quot;Action Level based on 95th percentile calculated from two years of historical operating data&quot; is provided directly above the line. There are five scatter points with values above the 95th percentile at various periods of time, which is what would be expected with 100 samples of data (i.e., 5 out of every 100 samples would be expected to be above the 95th  percentile). The upper right corner of the graph outlines the details of Step 1:</p>
<p>Step 1:</p>
<ol>
<li>Plot the quantity or concentration of the contaminant,  based on at least two years of historical operating data to construct a time  series.</li>
<li>Identify periods of known upset to exclude from the data set.</li>
</ol>
<p>Figure 3 depicts a Frequency Distribution Plot of Contaminant X, in the form of a vertical bar graph for the same two-year dataset shown in Figure 2, and is the output of the second step of the proposed methodology.</p>
<p>A frequency distribution plot is used to depict the number of samples or values having a specific concentration or quantity or range of concentration or quantity. The frequency is plotted on  the y-axis and the concentration or quantity of Contaminant X is plotted on the y-axis. A frequency distribution plot can help visually determine the type of distribution and any outliers. For environmental release data, the distribution will typically follow a normal or positively skewed log-normal distribution. The frequency distribution plot can also help identify if there are multiple data populations within the dataset.</p>
<p>The graph depicts a positively skewed logarithmic distribution, where the peak and approximately 95 percent of  the concentration or quantity of Contaminant X are located towards the left  side of the graph, and fewer samples (having higher concentrations or  quantities) are scattered towards the right of the graph. A vertical bar line representing the concentration at the 95th percentile of the data is also presented on the graph, with the text &quot;Action Level based on 95th percentile, Frequency to Exceed = 3 times per year (weekly sampling),&quot; provided directly above the line. There are five bars with concentrations above this line. The upper right corner of the graph outlines the details of Step 2:</p>
<p>Step 2:</p>
<ol>
<li>Construct a Frequency Distribution Plot of the Data.</li>
<li>Identify the type of statistical distribution (normal or lognormal).</li>
<li>Calculate statistical parameters (i.e., arithmetic mean, arithmetic standard deviation, coefficient of variation).</li>
<li>Calculate Action Level based on some percentile of the statistical distribution using appropriate equations.</li>
<li>Determine the statistically predicted &quot;Frequency to Exceed&quot; the action level (i.e., if 50 samples are taken in a year, then the frequency to exceed an Action Level based  on the 95th percentile is 2.5 times or approximately 3 times a year.</li>
</ol>
<p>Figure 4 shows weekly operational  data presented on a scatter plot time series for 46 weeks of operation within a  year. The graph is used to demonstrate when the action level would be  triggered, and hence reporting to the CNSC. As in the first graph, the  concentration or quantity of Contaminant X that is released to the environment  is presented on the y-axis, with time on the x-axis.</p>
<p>A solid line depicting the action  level based on the 95th percentile is plotted. Text above the line reads  &quot;Action Level based on 95th percentile; Frequency to Exceed = 3 exceedances&quot;,  implying that three exceedances would be expected, and that the action level  does not trigger until a fourth exceedance occurs.</p>
<p>With each scatter point representing one week, the first exceedance does not occur until the 15th week. The second exceedance occurs during the 40th week and the third exceedance occurs during the 44th week. As three exceedances are expected in a year for weekly sampling, the action level is not triggered. On week 46, a fourth  exceedance occurs and triggers the action level, along with the requirement to notify the CNSC and conduct an investigation. This requires taking any corrective and/or preventative measures needed to restore the effectiveness of the environmental protection program and bring the system back to normal operation, based on its approved facility design.</p>
<p>Also to note, the first exceedance is much higher than the other three, being slightly above the 99.9th percentile. Text above the first exceedance states &quot;1st exceedance &gt; 99.9th percentile = Action Level is automatically triggered. We want to know why your  release was so high.&quot; This reflects the use of the 99.9th percentile to immediately capture any statistically significant deviations from normal operation.</p>
<p>Step 3:</p>
<ul>
<li>Monitor the levels of release and identify when an  exceedance occurs.</li>
<li>If an individual exceedance occurs, an internal investigation is recommended.</li>
<li>If an exceedance occurs more times than the predicted &quot;Frequency to Exceed&quot;, or is above the 99.9th percentile, then the action level is triggered and the licensee must conduct a formal investigation and report to the CNSC.</li>
</ul>
<p id="fig2" className="mrgn-bttm-0">Figure 2: Example a Time Series plot of historical release data for the calculation of an action level, based on the 95th percentile of the operating performance of a specified facility</p>
<p className="mrgn-tp-0"><img src="/eng/acts-and-regulations/consultation/comment/swr-dis-12-02/images/eng-2-s.png" alt="" width="595" height="356"/><br />
<a href="/eng/acts-and-regulations/consultation/comment/swr-dis-12-02/longdesc/longdesc#fig2">Figure 2 Text alternative</a> | <a href="/eng/acts-and-regulations/consultation/comment/swr-dis-12-02/longdesc/fig2-img">Larger image for Figure 2</a></p>
<p id="fig3" className="mrgn-bttm-0">Figure 3: Example of a Frequency Distribution Plot</p>
<p className="mrgn-tp-0"><img src="/eng/acts-and-regulations/consultation/comment/swr-dis-12-02/images/eng-3-s.png" alt="" width="595" height="326"/><br />
<a href="/eng/acts-and-regulations/consultation/comment/swr-dis-12-02/longdesc/longdesc#fig3">Figure 3 Text alternative</a> | <a href="/eng/acts-and-regulations/consultation/comment/swr-dis-12-02/longdesc/fig3-img">Larger image for Figure 3</a></p>
<p id="fig4" className="mrgn-bttm-0">Figure 4: Example of the implementation of an action level, and under what conditions it would be triggered (i.e., a single exceedance of the 99.9th percentile or an exceedance greater then the frequency to exceed the 95th percentile)</p>
<p className="mrgn-tp-0"><img src="/eng/acts-and-regulations/consultation/comment/swr-dis-12-02/images/eng-4-s.png" alt="" width="595" height="347"/><br />
<a href="/eng/acts-and-regulations/consultation/comment/swr-dis-12-02/longdesc/longdesc#fig4">Figure 4 Text alternative</a> | <a href="/eng/acts-and-regulations/consultation/comment/swr-dis-12-02/longdesc/fig4-img">Larger image for Figure 4</a></p>  <a id="4.3"></a>
<h4 id="sec4-3">4.3 Questions for Discussion</h4>
<p>The core proposal is that the methodology for deriving  Action Levels is to be standardized and based on a statistically defensible methodology.</p>
<p>It is however, recognized that there are a number of technical issues that must be addressed to define the most appropriate statistical approach. The CNSC agrees with industry recommendations that a CSA Standard development process be undertaken to address these issues.</p>
<p>Issues that will need to be addressed and are proposed  for further discussion in this workshop include:</p>
<ul>
<li>Are there any impediments to using the proposed  approach? If so what are potential solutions?</li>
<li>What operational characteristics should be taken into account when choosing the percentile to be used for developing the AL?</li>
<li>Periodic exceedances can be expected for statistically derived ALs. For this approach what should constitute an exceedance of an AL?</li>
<li>Is the &quot;frequency to exceed approach&quot; considered a feasible methodology to setting ALs?</li>
<li>If so does there also need to be an upper bound value incorporated into the frequency to exceed approach?</li>
<li>How should characteristics associated with batch and continuous releases be accounted for in the methodology?</li>
</ul>  <a id="4.4"></a>
<h4 id="sec4-4">4.4 Summary of Discussion</h4>
<ol>
<li>The CNSC needs to provide clarity on the  role/definition of action levels.</li>
<li>The CNSC&#39;s position on consequences of exceeding ALs  needs to be clarified, e.g., reporting to a licensing officer, reporting to the  Commission, Web site notification.</li>
<li>Language used&nbsp;- risk language vs. control language.  There were different positions among participants:
<ol className="lower-alpha">
<li>Implication of ALs used to inform risk: exceedance  represents a concern with respect to health and safety.</li>
<li>Implication of ALs used to inform or demonstrate good operational control: exceedance represents no health and safety concern. </li>
</ol>
</li>
<li>There should be a consistent methodology that is  representative of the role/definition as determined by the CNSC, free from  unnecessary complexity and easy to communicate to the public. The CNSC should clarify that values are site-specific based on approved facility design and operation.</li>
<li>A single standard approach may not be applicable to the  wide range of facility types in the nuclear fuel cycle.</li>
<li>Let ALs be a process to drive down releases. Serve as  site-specific operational practices of pollution prevention.</li>
</ol>
<p>Additional participant comments (flip chart notes) are available in Appendix D.</p>  <a id="a"></a>
<h2 id="appA">Appendix A: List of Acronyms</h2>
<dl className="instructions">
<dt><strong>AL</strong></dt>
<dd>action level</dd>
<dt><strong>ALARA</strong></dt>
<dd>as low as reasonably achievable</dd>
<dt><strong>AMP</strong></dt>
<dd>administrative monetary penalty (<em>Nuclear Safety and Control Act</em>)</dd>
<dt><strong>BAT</strong></dt>
<dd>best available technology</dd>
<dt><strong>BATEA</strong></dt>
<dd>best available technology economically achievable</dd>
<dt><strong>CNSC</strong></dt>
<dd>Canadian Nuclear Safety Commission</dd>
<dt><strong>COPC</strong></dt>
<dd>contaminant(s) of potential concern</dd>
<dt><strong>CSA</strong></dt>
<dd>CSA Group</dd>
<dt><strong>DRL</strong></dt>
<dd>derived release limit</dd>
<dt><strong>EBRL</strong></dt>
<dd>exposure-based release limit</dd>
<dt><strong>EC</strong></dt>
<dd>Environment Canada</dd>
<dt><strong>EPA</strong></dt>
<dd>Environmental Protection Agency (United States in this context)</dd>
<dt><strong>EA</strong></dt>
<dd>environmental assessment</dd>
<dt><strong>ERA</strong></dt>
<dd>environmental risk assessment</dd>
<dt><strong>IAEA</strong></dt>
<dd>International  Atomic Energy Association</dd>
<dt><strong>ICRP</strong></dt>
<dd>International Commission on  Radiological Protection</dd>
<dt><strong>IIL</strong></dt>
<dd>internal investigation level</dd>
<dt><strong>MISA</strong></dt>
<dd>Municipal-Industrial Strategy for Abatement (Ontario)</dd>
<dt><strong>MIEP</strong></dt>
<dd><em>Mineral Industrial Environmental Protection Regulation</em> (Saskatchewan)</dd>
<dt><strong>MMER</strong></dt>
<dd><em>Metal Mining Effluent Regulations</em> (Canada:  federal)</dd>
<dt><strong>NEA</strong></dt>
<dd>Nuclear Energy Agency (of the OECD)</dd>
<dt><strong>NPP</strong></dt>
<dd>nuclear power plant</dd>
<dt><strong>OECD</strong></dt>
<dd>Organisation for Economic Co-operation and Development</dd>
<dt><strong>TBRL</strong></dt>
<dd>technology-based release limit</dd>
</dl>  <a id="b"></a>
<h2 id="appB">Appendix B: Workshop Participants</h2>
<table border="1" className="widthfull mrgn-bttm-md">
<caption className="text-left">
Table presenting the organizations represented by the workshop participants
</caption>
<thead>
<tr>
<th scope="col">Organization</th>
<th scope="col">Number</th>
<th scope="col">Role</th>
</tr>
</thead>
<tfoot>
<tr>
<td colSpan="3">1: Director General of DERPA<br />
2: Directorate of Environmental and Radiation Protection and Assessment<br />
3: Regulatory Policy Analysis Division</td>
</tr>
</tfoot>
<tbody>
<tr>
<td className="left">AREVA Resources</td>
<td className="left">3</td>
<td className="left">Participant</td>
</tr>
<tr>
<td className="left">Atomic Energy of Canada Ltd.</td>
<td className="left">2</td>
<td className="left">Participant</td>
</tr>
<tr>
<td className="left">BHP Billington</td>
<td className="left">1</td>
<td className="left">Participant</td>
</tr>
<tr>
<td className="left">Bruce Power</td>
<td className="left">2</td>
<td className="left">Participant</td>
</tr>
<tr>
<td className="left">Cameco Corp.</td>
<td className="left">4</td>
<td className="left">Participant</td>
</tr>
<tr>
<td className="left">Canadian Nuclear Association</td>
<td className="left">1</td>
<td className="left">Participant</td>
</tr>
<tr>
<td className="left">Canadian Standards Assoc.</td>
<td className="left">1</td>
<td className="left">Participant</td>
</tr>
<tr>
<td className="left">Denison Environmental</td>
<td className="left">2</td>
<td className="left">Participant</td>
</tr>
<tr>
<td className="left">ECOMETRIX</td>
<td className="left">1</td>
<td className="left">Participant</td>
</tr>
<tr>
<td className="left">Environment Canada</td>
<td className="left">1</td>
<td className="left">Participant</td>
</tr>
<tr>
<td className="left">NB Power</td>
<td className="left">1</td>
<td className="left">Participant</td>
</tr>
<tr>
<td className="left">Ontario Power Generation</td>
<td className="left">3</td>
<td className="left">Participant</td>
</tr>
<tr>
<td className="left">Rio Tinto</td>
<td className="left">4</td>
<td className="left">Participant</td>
</tr>
<tr>
<td className="left">SENESConsulting</td>
<td className="left">1</td>
<td className="left">Participant</td>
</tr>
<tr>
<td className="left">TRIUMPH</td>
<td className="left">1</td>
<td className="left">Participant</td>
</tr>
<tr>
<td className="left">CNSC:DG1 and Lead Technical Advisor</td>
<td className="left">2</td>
<td className="left">Specialist Support</td>
</tr>
<tr>
<td className="left">CNSC:DERPA2 Specialists</td>
<td className="left">4</td>
<td className="left">Table Facilitator</td>
</tr>
<tr>
<td className="left">CNSC:DERPA Administrative Assistant</td>
<td className="left">1</td>
<td className="left">Logistical Support</td>
</tr>
<tr>
<td className="left">CNSC:RPAD3</td>
<td className="left">1</td>
<td className="left">Logistical Support</td>
</tr>
</tbody>
</table>  <a id="c"></a>
<h2 id="appC">Appendix C: General mixing Zone Limits in Quebec, Saskatchewan and Alberta</h2>
<table border="1" className="widthfull fontSize85 report">
<caption className="text-left">
Quebec
</caption>
<tbody>
<tr>
<th id="br1" className="left"> Designated Use </th>
<th id="bc1" className="left"> Parameter </th>
<th id="bc2" className="left"> Fast-mixing rivers </th>
<th id="bc3" className="left"> Slow-mixing rivers </th>
<th id="bc4" className="left"> Lakes </th>
<th id="bc5" className="left"> Estuaries and CoastalWaters </th>
</tr>
<tr>
<th rowspan="5" id="br2" headers="br1" className="nobold left"> For uses to be designatedeverywhere (i.e., protection of aquatic life) </th>
<td headers="br1 br2 bc1"> Dilution Determination </td>
<td headers="br1 br2 bc2"> Critical Low Flow </td>
<td headers="br1 br2 bc3"> Modeling </td>
<td headers="br1 br2 bc4"> Modeling </td>
<td headers="br1 br2 bc5"> Modeling </td>
</tr>
<tr>
<td headers="br1 br2 bc1"> Maximum Dilution Factor </td>
<td headers="br1 br2 bc2"> 1 in 100 </td>
<td headers="br1 br2 bc3"> 1 in 100 </td>
<td headers="br1 br2 bc4"> 1 in 10 <br />
A dilution estimated <br />
by modeling not exceedingthat which would be allotted to the outlet of the lake <br />
during the critical lowflow period; if it exceeds this, the dilution at the outlet of the <br />
lake is then retained tocalculate the EDOs. </td>
<td headers="br1 br2 bc5"> 1 in 100 </td>
</tr>
<tr>
<td headers="br1 br2 bc1"> Maximum Proportion ofFlow (without diffuser) </td>
<td headers="br1 br2 bc2"> 50% of critical low flow </td>
<td headers="br1 br2 bc3"> 50% of critical low flow </td>
<td headers="br1 br2 bc4"> N/A </td>
<td headers="br1 br2 bc5"> N/A </td>
</tr>
<tr>
<td headers="br1 br2 bc1"> Maximum Proportion offlow (with diffuser) </td>
<td headers="br1 br2 bc2"> 100% critical low flow </td>
<td headers="br1 br2 bc3"> 100% critical low flow </td>
<td headers="br1 br2 bc4"> N/A </td>
<td headers="br1 br2 bc5"> N/A </td>
</tr>
<tr>
<td headers="br1 br2 bc1"> Maximum Mixing ZoneLength </td>
<td headers="br1 br2 bc2"> N/A (rapid mixing) </td>
<td headers="br1 br2 bc3"> Half the width of theriver and maximum 300 m length </td>
<td headers="br1 br2 bc4"> Distance between thepoint of discharge and the surfacing point of the plume. <br />
If the plume does notsurface, the length of the mixing zone is limited <br />
to the initial dilutionzone (which corresponds to the limit of the <em>near-field region</em> <br />
in a model). </td>
<td headers="br1 br2 bc5"> Radius of 300 m </td>
</tr>
<tr>
<th id="br3" headers="br1" className="nobold left"> Drinking water sources <br />
Recreational watersources </th>
<td headers="br1 br3 bc1">&nbsp;</td>
<td headers="br1 br3 bc2"> 100% of critical low flow <br />
Distance to use </td>
<td headers="br1 br3 bc3"> 100% of critical low flow <br />
Distance to use </td>
<td headers="br1 br3 bc4"> Distance to use </td>
<td headers="br1 br3 bc5"> Distance to use </td>
</tr>
</tbody>
</table>
<table border="1" className="widthFull report">
<caption className="text-left">
Saskatchewan
</caption>
<tr>
<th className="left" scope="col">Designated Use</th>
<th className="left" scope="col">Parameter</th>
<th className="left" scope="col">Streams and Rivers</th>
<th className="left" scope="col">Lakes and Other Surface Impoundments</th>
</tr>
<tr>
<td>For uses to be designatedeverywhere (i.e., protection of aquatic life)</td>
<td>Limited Use Zone</td>
<td>No more than 25 percentof the cross-sectional area or volume of flow nor more than one-third of theriver width at any transect in the receiving water during all flow regimeswhich equal or exceed the 7Q10 flow for the area. Surface water quality objectives applicableto the area must be achieved at all points along the transect at a distancedownstream of the effluent outfall to be determined on a case-by-case basis.</td>
<td>Surface water quality objectives applicable to thatwaterbody must be achieved at all points beyond a radius of 100 meters fromthe effluent outfall. The volume oflimited use zones in lakes should not exceed 10 percent of that part of thereceiving waters available for mixing.</td>
</tr>
</table>
<table border="1" className="widthFull report">
<caption className="text-left">
Alberta
</caption>
<tbody>
<tr>
<th className="left" id="dr1"> Designated Uses </th>
<th className="left" id="dc1"> Parameter </th>
<th className="left" id="dc2"> Acute (Short-term)Criteria </th>
<th className="left" id="dc3"> Chronic (Long-term) Criteria </th>
</tr>
<tr>
<th className="nobold left" rowspan="2" id="dr2" headers="dr1"> For uses to be designatedeverywhere (i.e., protection of aquatic life) </th>
<td headers="dr1 dr2 dc1">Fraction of Flow</td>
<td headers="dr1 dr2 dc2">5%</td>
<td headers="dr1 dr2 dc3">10%</td>
</tr>
<tr>
<td headers="dr1 dr2 dc1">Spatial Restriction</td>
<td headers="dr1 dr2 dc2">End-of-Pipe or withadequate justification, 30 meters surrounding outfall.</td>
<td headers="dr1 dr2 dc3">The more stringent of 10 times stream width forlength or &frac12; stream width.</td>
</tr>
<tr>
<th className="nobold left" id="dr5" headers="dr1"> Drinking water sources <br />
Recreational watersources </th>
<td headers="dr1 dr5 dc1">Spatial Restriction</td>
<td headers="dr1 dr5 dc2">Distance to use</td>
<td headers="dr1 dr5 dc3">Distance to use</td>
</tr>
</tbody>
</table>  <a id="d"></a>
<h2 id="appD">Appendix D: Flip Chart Notes</h2>
<p>The following bullet points were collected on flip charts  during the workshop.</p>  <a id="d.1"></a>
<h3 id="appD-1" className="mrgn-tp-md">D.1 Technology-based Release Limits &nbsp;- BATEA&nbsp;- Pollution Prevention</h3>
<ul>
<li>Effluent limits would likely need to be updated;  however, it is unclear at what frequency.
<ul>
<li>Use frequency of other jurisdictions when  incorporating their effluent limits</li>
<li>Use 10-year Periodic Safety Review </li>
<li>Less concerned about the frequency of review and  more concerned about the criteria that would be used to change them</li>
<li>Changes should be done &#39;collaboratively&#39;</li>
</ul>
</li>
<li>Mixed messages throughout the document so that  the perception of what the CNSC was doing was very different relative to what  was said at the workshop</li>
<li> When TBRL is less than EBRL, there is no  benefit, only cost</li>
<li> Going below EBRL should be voluntary, not  enforced</li>
<li> How is &#39;economically achievable, defined?</li>
<li> The question was raised regarding &#39;what  parameters&#39; would need a limit? Statement was made that, if unmitigated, a  constituent does still meet surface water quality objectives, then a limit is  not necessary</li>
<li> Are we expecting a retrofit of existing plants with no unreasonable risk or acceptable risk? What is the driver?</li>
<li> TBRLs should only be used as a limit if EBRL cannot be achieved and it is justified to do so based on an ERA</li>
<li> Case specific TBRLs may cause a problem with public perception or highlight problems with a regulatory approach</li>
<li> Concern about the consequences of a part of industry moving to newer technology&nbsp;- would the remainder need to move to that  technology even in the absence of risk?<br />
</li>
</ul>  <a id="d.2"></a>
<h3 id="appD-2" className="mrgn-tp-md">D.2 Exposure-based Release Limits and Mixing Zones</h3>
<ul>
<li>Make it clear in the Discussion Document, that  if a limit exists in legislation, it would be used as a CNSC limit</li>
<li>During times of CNSC disagreement with provincial regulator or Environment Canada&nbsp;- could we have two different licence limits for one substance?</li>
<li>Is there really the need for another regulator to address hazardous substances?</li>
<li>Would prefer to have one regulator per substance rather than duplication</li>
<li>What if CNSC is not happy with the Provincial limit&nbsp;- would CNSC work with the Province to achieve harmonization?</li>
<li>Site specific factors are important in defining the mixing zone</li>
<li>Consider seasonal effects and how they would be  addressed in the definition of a mixing zone and compliance point</li>
<li>Using a mixing zone concept in the establishment of EBRL&#39;s is in contradiction with section 36(3) of the Fisheries Act&nbsp;- no  mixing zones</li>
<li>In Ontario&nbsp;- MISA&nbsp;- Electricity Sector limits are based on acute and chronic toxicity as well as technology based limits</li>
<li>It is important to acknowledge what was accepted at the EA stage in establishing a limit</li>
<li>What will the CNSC do if the application of the  framework comes up with a higher number than what we are currently regulated to? Would they move the limit up?</li>
<li>How will the waste sector (i.e. Elliot Lake) be dealt with? They have limits and monitoring requirements in their licence but were developed in a very complex manner&nbsp;- also they discharge effluent into already impacted surface water</li>
<li>How will AECL, as a federal entity, be dealt with when there is no &quot;Provincial Regulator&quot; to achieve harmonization with?</li>
<li>In Saskatchewan, compliance with air quality criteria at point of impingement is not back-calculated or tied to a corresponding stack limit</li>
<li>If air quality is already being regulated by the  Provinces, why is the CNSC also going to do it?</li>
<li>If there is a health or ecologically-based limit that is considered &#39;safe&#39;, this should be the EBRL</li>
<li>Then the TBRL and ALARA should be used to prevent pollution&nbsp;- could be a second limit? Or an objective?</li>
<li>Communication to the public of the basis for the  release limit is key</li>
<li>Background data must be considered in establishing a compliance metric<br />
&#39;accepted impact&#39; in the EA needs to be included in the consideration of the acceptable extent of the mixing zone</li>
<li>Who will do the work to come up with an EBRL&nbsp;-  licensee? CNSC?</li>
<li>What about the issue of public perception of the  licensee coming up with the EBRL? What about the additional resources needed from the licensee to develop EBRL?</li>
<li>Discussion document was not clear that harmonization with other regulators is fundamental to the approach</li>
<li>The document needs to emphasize and be clear  regarding how harmonization would be implemented for each facility type</li>
<li>If the CNSC cannot convince fellow municipal,  provincial and/or federal regulators of the need to either add a new  contaminant limit or modify an existing one, then a limit should not be imposed  or changed from what it is currently (i.e. lowered)</li>
<li>Mining sector does not want to be treated  differently in terms of limits compared with other base metal mines</li>
<li>Would there be EBRL&#39;s for facilities that  discharge to a municipal sewer?</li>
<li>Tritium EBRL&nbsp;- complex to try and attribute  tritium levels in groundwater/soil/surface water to a stack limit&nbsp;- variety of  sources (Chalk River)</li>
<li>Cancer risks (&quot;acceptable&quot;) used to develop  EBRL&#39;s should be harmonized with Health Canada and any other regulators  setting health based limits for hazardous</li>
<li>How do we deal with public perception for newer  facilities located adjacent to existing facilities- if the newer facility has a  smaller approved mixing zone will that send a message to the public that it is  not as &#39;clean&#39; as another (older) facility?</li>
<li>Document was not clear that EBRL&#39;s would apply  to hazardous only and that radiological would not be back calculated to an end  of pipe limit due to scientific uncertainties at this time regarding dose  effects on non-human biota</li>
<li>It appears that the radiological &#39;release limits&#39; are related to &#39;loss of control&#39; whereas the hazardous release limits based on an exposure level that would be &#39;safe&#39;? This seems contradictory</li>
<li>At power plants there are facilities that operate intermittently or during emergency situations that release contaminants &nbsp;- would they have EBRL&#39;s&nbsp;- currently they are generally screened out based on  NPRI&nbsp;- basis (another table suggested that the ERA should deal with this?)</li>
<li>Multiple regulators for one contaminant&nbsp;- at  Point Lepreau&nbsp;- they may end up with two different limits for hydrazine&nbsp;- one  that recognizes a mixing zone (province) and one that doesn&#39;t (Environment  Canada)&nbsp;- really want harmonization and for regulators to agree.</li>
<li>Location of &quot;end of pipe&quot; can change for each  regulator&nbsp;- i.e. Point Lepreau has a km long &#39;discharge channel&#39; that is not  recognized by EC</li>
<li>How does uncertainty get addressed in EBRL? Uncertainty exists at all layers of an exposure-based calculation, how will these be addressed in the final &#39;limit&quot;?</li>
<li>Mixing zone definition needs to consider extreme  seasonality and climate change</li>
<li>Currently, the Fisheries Act does not allow an  effluent to cause acute lethality and currently does not allow mixing zones</li>
<li>With the changes to the Fisheries Act, new tools  or &quot;enabling packages&quot; may be defined to provide flexibility with Section 36(3); for example, it will be possible for EC to authorize deposits of deleterious substances that are already well controlled at the federal or provincial level, that have been fully assessed and managed through other processes, or that are low risk.</li>
<li>No equivalency agreements or enabling packages under the Fisheries Act exist at this time but are under development</li>
<li>Would the CNSC consider chronic or sub-lethal toxicity testing be considered in the establishment and acceptance of an EBRL?</li>
<li>Would the mixing zone qualify as a &quot;treatment  technology&quot;?</li>
</ul>  <a id="d.3"></a>
<h3 id="appD-3" className="mrgn-tp-md">D.3 Release Limits and Dose to Public</h3>
<h4>Group 1</h4>
<ul>
<li>EBRL scheme using dose instead of concentration? &nbsp;- no, it&#39;s related to loss of control</li>
<li>Relationship between ALs and this new limit</li>
<li>May need to redefine terms, especially ALs</li>
<li>Language used in IAEA/OECD publications may help &nbsp;- authorized level versus operational level versus investigative level</li>
<li>A new limit is problematic for mining&nbsp;- very  conservative assumptions used in calculating dose to the public in mining EAs</li>
<li>Maintain DRL based on 1 mSv/y</li>
<li>Need clarity between ALs and other limits</li>
<li>The relationship of AMPs to this new limit and  optimization</li>
</ul>
<h4>Group 2</h4>
<ul>
<li>Redundancy/conflict with statistically-based ALs  if too low</li>
<li>Release limit should based on 1 mSv/yr public  dose limit (i.e., acceptable risk)</li>
<li>Natural radiation versus releases&nbsp;- differentiation?</li>
<li>Could affect the economic viability of uranium mining</li>
<li>Optimization / ALARA should be kept separate from dose criteria</li>
<li>For the ICRP purpose of a dose constraint, there is no rationale for going below 1 mSv/yr in Canada</li>
<li>Would there be additional requirements (e.g., monitoring, frequency, equipment needed) with a new limit?</li>
<li>Limit should be consistent with international best practices, including flexibility</li>
<li>With respect to Canadian regulated facilities  that currently have dose constraints in licences, how will this be considered  should different limits come out of the proposed framework?</li>
<li>Control licensees at a level but it isn&#39;t considered a limit with formalized oversight, compliance, etc. (NPP perspective)</li>
<li>Structure the release framework in an analogous way to the Defence in Depth concept</li>
<li>Framework can be consistent and transparent, yet  accommodate sector specifics in the details</li>
<li>How would a licensee demonstrate compliance?</li>
<li>Continuous monitoring?</li>
<li>What would constitute an exceedance?</li>
</ul>
<h4>Group 3</h4>
<ul>
<li>Communication issue</li>
<li>Perception</li>
<li>Regulatory link to Derived Release Limit (DRL)</li>
<li>Control?</li>
<li>Safety?</li>
<li>Release limits should be risk-based and not based on arbitrary dose constraints</li>
<li>Dose constraints should be linked to control; not to DRLs</li>
<li>Chalk River and Port Hope are examples of sites with multiple sectors</li>
<li>IAEA has Action Level (AL) guidance</li>
<li>Address public perception; not DRLs</li>
<li>ALs are working well for control</li>
<li>Consistency in establishing ALs will improve the public perception</li>
<li>Unacceptable risk versus unacceptable loss of control</li>
<li>Proposed conceptual framework</li>
<li>DRL (based on 1 mSv/y)</li>
<li>Unacceptable loss of control point</li>
<li>AL</li>
<li>DRL for argon not clear in Chalk River licence</li>
</ul>
<h4>Group 4</h4>
<ul>
<li>Redundancy between a new DRL and ALs with respect to unacceptable loss of control</li>
<li>Communication perspective</li>
<li>For nuclear power plants (NPPs) an AL &quot;loss of control&quot; is not Fukushima</li>
<li>Conflict between dose and loss of control in terms of establishing a new DRL</li>
<li>For decommissioning projects, there is a public  perception issue on releases under control and those that aren&#39;t (e.g.  historical)</li>
<li>For some decommissioning project, there&#39;s often no control over what is contributing to the dose</li>
<li>How would it apply to a new versus existing  facility; it could be a design basis for a new facility and perhaps not apply to existing facilities</li>
<li>How would cumulative dose be dealt with?</li>
<li>Could have increases due to multiple facilities</li>
<li>Would retrofits of existing facilities be needed if a new facility was added?</li>
<li>For a new DRL, there would be economic concerns with respect to reclaimed land for future development and risk perception</li>
<li>Difficult to define &quot;unacceptable&quot; loss of  control</li>
<li>For mining, a new DRL could result in an increase in the project footprint and energy costs versus the ability to meet the new limit and the associated benefits</li>
<li>Uranium mines cannot meet a 0.05 mSv/y limit</li>
<li>What would be the differences in information coming out the exceedance of an AL versus a DRL</li>
<li>Potential challenges in communications if there  are sector and/or site-specific values</li>
<li>How is the &quot;adequate protection&quot; term under an AL related to the new DRL?</li>
<li>Need clarity in definitions around limits and levels</li>
<li>Need alternative wording to &quot;loss of control&quot;  due to public perception</li>
<li>There is a public perception issue around limits and releases of a single unit station versus a multi-unit station as this fact  is often not grasped by the public</li>
<li>What resources will be needed to meet this requirement (i.e., reporting)?</li>
<li>The limit should be optimized based on risk; not  different for each release point in a watershed</li>
<li>A dose constraint is not a limit or loss of control</li>
<li>A new limit could impact the cost-benefits of uranium mining in Canada</li>
</ul>  <a id="footnotes"></a>
<div className="footnote-container">
<h2 id="fnb" className="cn-invisible">Footnotes</h2>
<ul>
<li>http://www.nuclearsafety.gc.ca/eng/acts-and-regulations/consultation/completed/dis-12-02</li>
<li>Also required when an existing limit in legislation or  licences is inadequately protection (e.g. Saskatchewan U and Se limits). </li>
<li>EPA National Pollutant Discharge Elimination System (NPDES)</li>
</ul>  </div>

                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }