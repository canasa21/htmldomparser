import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "en",
                pageTitle: "DIS-16-05, Human Performance", 
                dateModified: "2016-10-19",
                langToggleUrl: "/fra/acts-and-regulations/consultation/comment/d-16-05"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<div className="col-md-6 mrgn-tp-0 mrgn-bttm-0">
<div id="preface"></div>
<h2>Preface</h2>  <p>Discussion papers play an important role in the selection  and development of the regulatory framework and regulatory program of the  Canadian Nuclear Safety Commission (CNSC). They are used to solicit early  public feedback on CNSC policies or approaches. </p>  <p>The use of discussion papers early in the regulatory process  underlines the CNSC&rsquo;s commitment to a transparent consultation process. The  CNSC analyzes and considers preliminary feedback when determining the type and  nature of requirements and guidance to issue. </p>  <p>Discussion papers are made available for public comment for  a specified period of time. At the end of the first comment period, CNSC staff  review all public input, which is then posted for feedback on the CNSC website  for a second round of consultation. </p>  <p>The CNSC considers all feedback received from this  consultation process in determining its regulatory approach.</p>
</div>
<div className="col-md-4  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-2  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="col-md-6 mrgn-tp-0 mrgn-bttm-0">
<div id="toc"></div>
<div className="col-md-6 module-table-contents">
<h2 id="toc">Table of Contents</h2>
<ul>
<li><a href="#summary">Executive Summary</a></li>
<li><a href="#sec1">1. Why Does Human Performance Matter?</a></li>
<li><a href="#sec2">2. Human Performance</a>
<li><a href="#sec3">3. Human Performance and Human Factors</a></li>
<li><a href="#sec4">4. Human Performance Programs</a></li>
<li><a href="#sec5">5. Elements of a Human Performance Program</a></li>
<li><a href="#sec6">6. CNSC Considerations for Regulating Human Performance</a></li>
<li><a href="#sec7">7. Human Performance and Management Systems</a></li>
<li><a href="#sec8">8. Graded Approach</a></li>
<li><a href="#sec9">9. CNSC Expectations of a Human Performance Program</a></li>
<li><a href="#sec10">10. Human Performance Tools</a></li>
<li><a href="#sec11">11. Human Error</a></li>
<li><a href="#sec12">12. Conclusions</a></li>
<li><a href="#sec13">13. How To Participate</a></li>
</ul>  </div>
</div>
<div className="col-md-4  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-2  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="col-md-6 mrgn-tp-0 mrgn-bttm-0">
<div id="exec-sum"></div>
<h2 id="summary">Executive Summary </h2>  <p>The Canadian Nuclear Safety  Commission (CNSC) recognizes that safe nuclear operations rely on effective  human performance, through which people carry out their work safely and  effectively, and that human performance is influenced by a range of factors. To  develop a shared understanding of human performance, the CNSC has issued this  discussion paper to open dialogue with interested stakeholders about how it  considers human performance in its regulatory framework, and to inform  potential future updates. This is part of the CNSC&rsquo;s commitment to continuous  improvement. </p>  <p>As part of its &ldquo;human performance  management&rdquo; safety and control area (SCA), the CNSC currently requires its nuclear  power plant licensees and other specified nuclear facilities to implement and  maintain human performance programs. A human performance program enables the  organization to appropriately support workers to perform routine work, as well  as to respond to potential accident and emergency conditions. Human performance  programs include: continual monitoring of human performance influences and  outcomes; identification of human performance strengths and weaknesses; and implementation  of improvements to reduce the likelihood of safety events with human  performance-related causes. Effective human performance management supports  workers in performing their tasks safely and effectively by systematically  considering the capabilities and limitations of humans.</p>  <p>Nuclear power plant licensees draw  guidance for their human performance programs from organizations such as the  Institute of Nuclear Power Operations, the World Association of Nuclear  Operators and the Electric Power Research Institute. Although the CNSC has some  requirements and guidance on specific human performance-related topics (such as  those outlined in REGDOC-2.2.2, <em>Personnel  Training</em>, and REGDOC-2.2.3, <em>Personnel  Certification Programs</em>), guidance for the overarching human performance  program for some nuclear facilities has been limited to material contained in licence  conditions handbooks. During their regulatory activities, CNSC staff have identified  variations in the emphasis, approach, scope and content of human performance  programs, so further clarification is warranted.</p>  <p>This discussion paper explains why  human performance matters in the context of nuclear safety. The human  factors-related elements that can constitute an effective human performance  program are presented, and the consideration of human performance within the  CNSC&rsquo;s regulatory framework is discussed. The paper also discusses the  relationship between a human performance program and a management system, and  discusses the application of a graded approach to implementing a human  performance program, where licensees may tailor their program to the specific  risks and characteristics of the individual facility or activity. Finally, the  CNSC&rsquo;s expectations for human performance programs are presented. </p>  <p>The CNSC seeks feedback from all  interested stakeholders on the human performance considerations that are presented  in this discussion paper. The CNSC intends to use this feedback to inform its  approach to regulating human performance. Before incorporating expectations for  human performance into its regulatory framework, the CNSC will provide stakeholders  with further opportunities to provide feedback about any specific measures that  may be proposed.</p>
</div>
<div className="col-md-4  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-2  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="col-md-6 mrgn-tp-0 mrgn-bttm-0">
<div id="1"></div>
<h2 id="sec1">1. Why Does Human Performance Matter?</h2>  <p>Various  sources estimate that human performance plays a key role in up to 80 percent of  events <sup id="fnb1-ref"><a href="#fnb1" className="fn-lnk"><span className="wb-inv">Footnote </span>[1]</a></sup> <sup id="fnb2-ref"><a href="#fnb2" className="fn-lnk"><span className="wb-inv">Footnote </span>[2]</a></sup> <sup id="fnb3-ref"><a href="#fnb3" className="fn-lnk"><span className="wb-inv">Footnote </span>[3]</a></sup>. This high percentage suggests that human  performance is an area that deserves consideration by the nuclear industry. Human  performance is also an important aspect of defence in depth for nuclear  facilities.</p>  <p>When  something does not go as planned, it is not unusual to trace the problem to  actions of a front-line worker, to classify the cause as a human error, and to  stop there. However, a problem&rsquo;s root causes often lie elsewhere in the  organization. Further investigation generally reveals that some aspects of the  workplace may be misaligned with what is needed for the desired performance. Examples of these aspects include equipment designs that  unintentionally predispose a worker to carrying out inappropriate actions, or  that interfere with the worker&rsquo;s ability to carry out their tasks to a required  standard; the quality of work procedures; or adverse site conditions. The front-line  workers themselves are only one aspect of ensuring safe and effective work  performance. </p>  <p>This broad  view of human performance considers the range of factors that can both  strengthen and impair human performance across the organization. Human  performance is an important consideration across the whole range of work tasks  and work environments, in both routine activities and potential accident and  emergency conditions.  </p>  <p>During the  Fukushima Daiichi accident in 2011, mitigation and recovery efforts depended largely  on the capabilities and adaptability of people to carry out activities. While  human performance is a crucial part of routine work, it is also important when  people need to carry out infrequent or novel actions, especially under the  challenging and stressful work conditions following the Fukushima Daiichi accident.</p>
</div>
<div className="col-md-4  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-2  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="col-md-6 mrgn-tp-0 mrgn-bttm-0">
<div id="2"></div>
<h2 id="sec2">2. Human Performance</h2>  <p>Human performance deals with people  carrying out their work, and can be considered as &ldquo;the behaviours and the  results of human activities when carrying out work tasks&rdquo;<sup id="fnb2-ref"><a href="#fnb2" className="fn-lnk"><span className="wb-inv">Footnote </span>[2]</a></sup> <sup id="fnb4-ref"><a href="#fnb4" className="fn-lnk"><span className="wb-inv">Footnote </span>[4]</a></sup> <sup id="fnb5-ref"><a href="#fnb5" className="fn-lnk"><span className="wb-inv">Footnote </span>[5]</a></sup>.</p>  <p>How an individual worker carries out  their tasks (the behaviours) and the outputs of the work performed (the  results) are both important. They are both important because desirable results,  which have positive value for the organization, could be produced by  undesirable behaviours; e.g., when taking shortcuts to complete a task quickly.  Therefore, both the behaviours and the results of human performance provide degrees of value to the organization  in terms of how they align with organizational goals, including safety.</p>  <p>Human performance relates to the actual  behaviours and actual results of work tasks within the organization<sup id="fnb6-ref"><a href="#fnb6" className="fn-lnk"><span className="wb-inv">Footnote </span>[6]</a></sup>,  as opposed to an idealized or abstracted view of what workers should do. What  is done in practice, and the real actions or outcomes achieved may not be the  same as those anticipated by supervisors or managers. Actual work practices may  also differ from what was intended by the designers of equipment and authors of  procedures that are used to carry out the work. There are various reasons for  this, including the concept of &ldquo;drift into failure&rdquo;<sup id="fnb7-ref"><a href="#fnb7" className="fn-lnk"><span className="wb-inv">Footnote </span>[7]</a></sup>, where  the cumulative effect of many adaptive decisions can lead to a gradual,  unidentified erosion of safety margins, and where seemingly normal activities  and decisions can produce adverse events. When things go wrong, it is common  for event reports to cite the gap between the expected outcome and what  actually happened<sup id="fnb8-ref"><a href="#fnb8" className="fn-lnk"><span className="wb-inv">Footnote </span>[8]</a></sup>. Human performance is concerned with what actually takes place in the workplace  on a day-to-day basis. By systematically considering the capabilities and  limitations of humans, effective human performance management supports workers in  performing their tasks safely and effectively.</p>  <p>The term &ldquo;behaviours&rdquo; includes expected  human actions (such as those described in task procedures) as well as human  actions that are assumed but not documented, and unexpected human actions that  occur. Many facets of work can shape behaviours, such as the organization&rsquo;s  procedures, work environment, management system, culture, resources, and  technical systems. To ensure the safe  operation of a nuclear facility, continual improvement of provisions that  influence human performance should be considered at all organizational levels.  Such an approach helps to ensure that organizations effectively support  people in carrying out work successfully, including under challenging work  conditions. The aim is for workers to perform tasks to the required accuracy  and reliability, without excessive effort, discomfort or exposure to risk<sup id="fnb9-ref"><a href="#fnb9" className="fn-lnk"><span className="wb-inv">Footnote </span>[9]</a></sup>.</p>  <p>Nuclear structures, systems and  components that are important to safety have low probabilities of failure and  can typically be counted on to perform their intended functions. With advances  in equipment reliability, humans now make up the largest source of known  variability in nuclear systems. For example, in performing identical tasks,  humans will vary the exact actions and activities in minor, but potentially  significant ways. This variability can have negative results, yet may also make  very positive contributions to safety and performance because people are  resourceful and flexible – an essential contributor to helping things to go  right<sup id="fnb10-ref"><a href="#fnb10" className="fn-lnk"><span className="wb-inv">Footnote </span>[10]</a></sup>. Humans can detect and adapt to small changes in their environments and adjust  their actions accordingly to achieve successful outcomes, even under challenging  and uncertain conditions. As such, people are vital components of safe operations,  and human adaptability should not necessarily be constrained.</p>  <p>The CNSC proposes to define human  performance as follows:</p>  <p><em>Human performance is the behaviours and the results of  human activities when carrying out work tasks.</em></p>  <div className="alert alert-info col-md-6">
<h3>Q 1. Do you agree with the definition of human performance as stated above? Are there changes or alternative definitions you would propose?</h3>  </div>
</div>
<div className="col-md-4  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-2  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="col-md-6 mrgn-tp-0 mrgn-bttm-0">
<div id="3"></div>
<h2 id="sec3">3. Human Performance and Human Factors</h2>  <p>The CNSC has established the following  definition<sup id="fnb11-ref"><a href="#fnb11" className="fn-lnk"><span className="wb-inv">Footnote </span>[11]</a></sup> <sup id="fnb12-ref"><a href="#fnb12" className="fn-lnk"><span className="wb-inv">Footnote </span>[12]</a></sup> of  human factors: </p>  <h3>Human factors are those factors that influence human  performance.<strong> </strong><strong> </strong></h3>  <p>Examples of these factors include work  procedures, workers&rsquo; fitness for duty, organizational culture, training, and  the design of equipment for operability and maintainability. The inherent characteristics  of humans in general, and the specific characteristics of individuals or groups  of workers, can also influence work behaviours and results.</p>  <p>Various human factors combine to influence  how workers carry out their tasks and the results that they achieve. For  example, deploying a mobile emergency generator safely and effectively depends  on a range of human factors working together, such as: </p>  <ul>
<li>sufficient number of workers available to carry  out the task</li>
<li>sufficient levels of training, worker competencies,  and amount of practice provided on the task</li>
<li>workers who are fit to carry out the cognitive  and physical work involved, so that they are not unduly fatigued, stressed,  sick or otherwise impaired while doing so</li>
<li>procedures in place that are correct and easy to  follow</li>
<li>sufficient provision and availability of necessary  tools, protective clothing and equipment </li>
<li>the appropriate amount of supervision and  direction</li>
<li>consideration of the physical environment in  which the worker is expected to perform; e.g., in snow, rain, extreme cold,  high winds, darkness or surrounded by debris </li>
<li>an emergency generator and its couplings that have  been designed to be used by people in the environment where the deployment  occurs  </li>  </ul>  <p>Consideration of relevant human  factors enables the organization to appropriately support workers in performing  their tasks safely and effectively. While this support applies to routine work,  it is also important when planning difficult or important tasks, or in  potential emergencies.</p>  <div className="alert alert-info col-md-6">
<h3>Q 2. Do you propose any changes or alternatives to the CNSC&#39;s existing definition of human factors? Please provide rationale for any proposed changes or alternatives.</h3>  </div>
</div>
<div className="col-md-4  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-2  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="col-md-6 mrgn-tp-0 mrgn-bttm-0">
<div id="4"></div>
<h2 id="sec4">4. Human Performance Programs</h2>  <p>A human performance program is a  set of coordinated activities and processes that considers the performance of  workers carrying out their tasks. The high-level objective of the human  performance program is to achieve desirable performance and safety outcomes  across the range of conditions, from routine activities to potential accidents  and emergencies.</p>  <p>The CNSC expects nuclear facility  licensees&rsquo; human performance programs to achieve the following objectives:</p>  <ul>
<li>active support of human performance through managing  human factors, to achieve safe and effective outcomes </li>
<li>integration of good practices for managing human  performance throughout the organization&rsquo;s activities</li>
<li>a human-centred focus that considers and  supports people carrying out their work</li>
<li>a systemic<sup id="fnb13-ref"><a href="#fnb13" className="fn-lnk"><span className="wb-inv">Footnote </span>[13]</a></sup> approach to managing human  performance, which considers the individual, technology and organization</li>
<li>a continuous focus on considering the people in  the organization when managing organizational, operational, and technical  matters</li>  </ul>  <p>The CNSC considers that the  following practices can help to achieve these objectives: </p>  <ul>
<li>consideration of human performance as the work  actually carried out by individual workers (as opposed to an idealized view of  work as anticipated or designed)</li>
<li>provision of appropriate resources to support  human performance</li>
<li>consideration and management of the broad range  of human factors across the organization to achieve continual system  improvement</li>
<li>consideration of the roles of all levels and  departments to achieve the desired human performance outcomes</li>
<li>assurance that human error is considered as a  potential symptom of deeper issues, instead of the sole cause of failure</li>
<li>identification of problems affecting human  performance using a variety of methods<sup id="fnb14-ref"><a href="#fnb14" className="fn-lnk"><span className="wb-inv">Footnote </span>[14]</a></sup>, and correction of the  problems</li>
<li>continual effort to improve the organizational  system that governs, manages and guides human performance</li>  </ul>  <div className="alert alert-info col-md-6">
<h3>Q 3. Do you agree with the objectives and practices of a human performance program listed above? Are there items that you would add to or remove from the lists? Please explain.</h3>  </div>
</div>
<div className="col-md-4  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-2  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="col-md-6 mrgn-tp-0 mrgn-bttm-0">
<div id="5"></div>
<h2 id="sec5">5. Elements of a Human Performance Program</h2>  <p>A human performance program  provides an integrated overview of the coordinated activities and processes  (i.e., elements) that explicitly consider and shape human performance. A broad  range of these human factors-related elements interact dynamically, and <strong>collectively make up a human performance</strong> program. The CNSC already considers many of these process elements (e.g.,  personnel training and certification programs) in its regulatory framework.</p>  <p>Elements considered by a human  performance program may include:</p>  <ul>
<li>management and supervision</li>
<li>organization (structure and processes)</li>
<li>organizational culture</li>
<li>personnel training </li>
<li>personnel certification</li>
<li>work organization and job design</li>
<li>fitness for duty</li>
<li>procedures (development and use)</li>
<li>physical design (human factors in design)</li>
<li>performance assessment, improvement and  management review</li>
<li>operating experience and lessons learned</li>
<li>safety analysis (human actions)</li>
<li>reporting and trending</li>  </ul>  <p>When these elements are considered  individually, they may need to compete for resources and find their own places  in an organization. The human performance program can provide a balanced,  overall consideration of a range of elements that influence human performance,  which are optimized and integrated among themselves. For example, an  organization may have a capable and well-resourced training program, which  regularly provides inputs to solve identified performance problems. However, while  robust and systematically developed training is critical to safety, an emphasis  strictly on training is not sufficient on its own. Other elements, such as  human factors in design or fitness for duty, must also be addressed. Seeing a  human performance program from an overarching, integrated perspective provides  a balanced viewpoint of the various elements that influence human performance.  This viewpoint is used to drive the organization&rsquo;s strategies and priorities. </p>  <p>The elements of a human  performance program remain as separate entities, but their relationship and how  they integrate are considered. Since each individual element considers a  different perspective of human performance, the full picture cannot be seen  from the standpoint of one element alone. A systemic consideration of the  elements in a human performance program is needed because the relationships  between the elements are as important as the elements themselves.</p>  <div className="alert alert-info col-md-6">
<h3>Q 4. Do you agree with the elements of a human performance program listed above? Are there items that you would add to or remove from the list above? Please explain.</h3>  </div>  <div className="alert alert-info col-md-6">
<h3>Q 5. Do you agree with the concept of a human performance program described above? If you would propose other ways of viewing a human performance program and its elements, please describe them.</h3>  </div>
</div>
<div className="col-md-4  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-2  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="col-md-6 mrgn-tp-0 mrgn-bttm-0">
<div id="6"></div>
<h2 id="sec6">6. CNSC Considerations for Regulating Human Performance</h2>  <p>The CNSC has the authority to make  regulations related to human performance under sections 44(1)(h) and (k) of the <em>Nuclear Safety and Control Act</em>. Human  performance-related requirements have been made in regulations, such as in  sections 12 and 17 of the <em>General Nuclear Safety and Control Regulations.</em> Canada is also a member of the International Atomic Energy Agency (IAEA) and a  signatory to the <em>Convention on Nuclear Safety (CNS),</em> which was adopted  in 1994. Canada, through the CNSC, is therefore committed to ensuring &ldquo;… that  the capabilities and limitations of human performance are taken into account  throughout the life of a nuclear installation&rdquo; (CNS Article 12). In addition,  regulation of the Canadian nuclear industry is aligned with IAEA Safety  Fundamentals No. SF-1, <em>Fundamental Safety  Principles</em>, which identifies the need for an integrated approach to human  performance (sections 3.12 and 3.14). </p>  <p>The IAEA promotes approaches to  safety that consider interactions between humans, technology and organizational  factors<sup id="fnb15-ref"><a href="#fnb15" className="fn-lnk"><span className="wb-inv">Footnote </span>[15]</a></sup>, and it is working to  develop strategies and mechanisms for regulatory oversight of human and  organizational factors – to encompass the broad scope of human and  organizational factors across nuclear facilities<sup id="fnb16-ref"><a href="#fnb16" className="fn-lnk"><span className="wb-inv">Footnote </span>[16]</a></sup>. The IAEA Energy Series  Technical Report NG-T-2.7, <em>Managing human  performance to improve nuclear facility operation</em>, published in 2013,  provides a useful summary of good practices for managing human performance.</p>  <p>The CNSC requires that specified  licensees, including nuclear power plants, have management systems that comply  with the CSA Group (CSA) N286, <em>Management  system requirements for nuclear facilities</em>. This standard indicates that &ldquo;… <em>to support safe operation, management is  expected to define and implement practices that contribute to excellence in  worker performance</em>&rdquo;. The most recent version of this standard, CSA N286-12,<sup id="fnb17-ref"><a href="#fnb17" className="fn-lnk"><span className="wb-inv">Footnote </span>[17]</a></sup> requires that management  systems provide &ldquo;…the means by which the business supports workers in carrying  out their tasks safely and successfully, by taking into account the  interactions between individuals, technology and the organization&rdquo;. </p>  <p>The requirement for specified  licensees to implement and maintain human  performance programs is stated in their respective licences. Associated <em>licence  condition handbooks </em>provide guidance statements on the content of effective human performance programs<em>.</em> Current guidance recommends that  initiatives to improve human performance address and integrate the broad range  of human factors, across all organizational functions and activities, to ensure  that workers are fully supported in carrying out their work safely. </p>  <p>The CNSC&rsquo;s existing regulatory  policy on human factors, P-119, published in 2000, was developed to clarify  that the CNSC considers human factors issues in its regulatory activities –  including its licensing and compliance, and support for standards-development  activities. The CNSC recognizes that human factors can affect the performance  of the facilities and activities that it regulates. The policy therefore states  that the Commission will consider the human factors that could impact its  mandate, and will evaluate the measures implemented. </p>
</div>
<div className="col-md-4  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-2  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="col-md-6 mrgn-tp-0 mrgn-bttm-0">
<div id="7"></div>
<h2 id="sec7">7. Human Performance and Management Systems</h2>  <p>A  management system, as described in CSA N286-12, is the  framework of processes, procedures and practices used to ensure that an  organization can achieve the tasks performed to meet the organization&rsquo;s  objectives, including for safe and reliable operation. The management system  applies across the entire organization, and it covers all managed activities and  departments. It covers all aspects of management, and spans an organization&rsquo;s  policies, planning, operational activities, performance assessment, review  activities and improvement activities in a single, coherent system. The  management system applies to all licensed activities, so that safety  requirements are established and applied coherently with other requirements,  including those concerning human performance, safety and security.</p>  <p>A human performance program is a  documented part of the organization&rsquo;s management system. The management system  is employed to achieve, among other things, objectives concerning human  performance in terms of planning, carrying out processes, assessing the  program&rsquo;s effectiveness and making continual improvements. The human performance  program initiates and maintains the focus on human performance, and enables the  overview of human factors considerations to be understood, so that the  organization can use this information to achieve its goals. The workers and the  work that they perform are essential in achieving an organization&rsquo;s objectives  and should be managed coherently using the management system. In this way, the  organization can consider human performance as a fundamental component within  the management system. </p>  <p>A human performance program can be  a formal program within the management system governance, which provides a  formal and comprehensive umbrella-type overview, including the documented  interfaces between the process elements. </p>  <p>Alternatively, a human performance  program may be a documented but less formal &ldquo;road map&rdquo; to demonstrate how the  organization&rsquo;s activities and processes interface to ensure effective human  performance management.</p>
</div>
<div className="col-md-4  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-2  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="col-md-6 mrgn-tp-0 mrgn-bttm-0">
<div id="8"></div>
<h2 id="sec8">8. Graded Approach</h2>  <p>Both the CNSC and its licensees  use a graded approach. This means that the application of requirements and  guidance is commensurate with the risks and particular characteristics of the  facility or activity. </p>  <p>The CNSC seeks to set the right  level of requirements and guidance to enable flexibility without compromising  safety. The graded approach means that the scope, content and application of human performance programs reflect the diversity of nuclear  licensees and regulated activities. A human performance program for a small reactor facility or other  licensee would different than that of a nuclear power plant; each licensee  would tailor its human performance program to reflect the risks and  characteristics of the specific facility or activity. </p>  <p>The requirement to implement a  human performance program is currently a licence condition in the operating  licences of nuclear power plants and other specified nuclear facilities.  However, the CNSC considers that a systemic human performance program, with a  broad, integrated view of human factors, would be of value to safety for all  licensees, whether it is a formal program within the management system or  documented but less formal &ldquo;road map&rdquo;. </p>  <p>A human performance program can be a formal program  within the management system, which considers an overview of human performance,  and the interfaces and influences between the elements to identify and manage  activities to achieve the program&rsquo;s aims. </p>  <p>Alternatively, a human performance program may be a  defined, collectively managed set of interfaced activities and initiatives,  which consider the elements of human performance and the aims of the program,  but without being a formal program within the management system.</p>  <div className="alert alert-info col-md-6">
<h3>Q 6. Do you think that the requirement to have a human performance program should be applied using a graded approach to all CNSC-licensed facilities and activities? If so, what might this graded approach look like?</h3>  </div>  <div className="alert alert-info col-md-6">
<h3>Q 7. Which type of human performance program (a formal program or otherwise) is most appropriate for the types of nuclear facilities most relevant to your comments, and why?</h3>  </div>
</div>
<div className="col-md-4  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-2  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="col-md-6 mrgn-tp-0 mrgn-bttm-0">
<div id="9"></div>
<h2 id="sec9">9. CNSC Expectations of a Human Performance Program</h2>  <p>The CNSC expects licensees that are  required to have a human performance program to have a clearly defined program scope,  including the identification of interfacing policy statements, programs and procedures.  Interfaces between the range of human performance program elements applicable  to the organization&rsquo;s functions and activities are expected to be identified  and implemented (see section 5 of this document for a suggested list of  elements to be considered). </p>  <p>Licensees&rsquo;  human performance programs are expected to address all applicable stages of the  lifecycle, as well as all applicable activities that may impact safety,  including maintenance, testing, monitoring, operation, modification and fuel  management. This is to ensure that workers are fully supported in carrying out  their work safely. </p>  <p>Roles  and responsibilities for staff involved in developing, monitoring and  implementing the human performance program, are expected to be documented, and  to include oversight roles to monitor and manage the human performance at the  site. </p>  <p>The  CNSC expects licensees to demonstrate support for human performance across all  levels of the organization. This includes senior management, who is accountable  for and committed to improving human performance, and line managers who  demonstrate support for improving human performance. The CNSC expects individual  workers at all organizational levels to take responsibility for their  behaviours and to be committed to improving themselves, as well as the task and  work environment.</p>  <p>Where  licensees have implemented a defined set of human performance tools, they are  expected to promote and train workers on their appropriate use, and ensure that  expectations for the use of human performance tools are clearly communicated.</p>  <p>The  CNSC expects licensees to periodically assess and review their human  performance programs to ensure that opportunities for continual improvement are  identified, planned for, and implemented. In addition, licensees are expected to  identify problems that affect human performance using various methods. These could  include structured observations of work being performed, reporting of problems  to management, or external assessments by industry associations or the  regulator. Finally, licensees are to have mechanisms for identifying and  addressing human performance trends, which are used for continual improvement.</p>  <p>The  same objectives and practices (see bulleted lists in section 4) underpinning  the human performance program apply to all licensee organizations, large or small.  How an organization addresses the objectives and practices will depend on the  types of tasks carried out by workers and the types of hazards to be prevented  in the course of the work. The size and complexity of the organization and its  processes will also determine how best to achieve the objectives. </p>  <p>Most  organizations, regardless of size, already consider the elements of a human  performance program (see bulleted list in section 5). For example, management  and supervision, personnel training, and procedures are specific areas that are  managed by the organization. The human performance program will ensure the  explicit consideration of the overview of these elements and how they may  interact to influence human performance.</p>  <p>For  example, a new employee is initially assigned to perform a number of system  tests, according to the relevant procedures, but is not yet familiar with the  facility nor fully trained on the various types of procedures. While an  experienced and fully trained worker could complete the task appropriately on  their own, the new employee does not have sufficient skills, knowledge and  training to do so. Although the procedure indicates that a single worker can  complete the system tests, after considering the range of human factors, the  supervisor decides that the new employee should be accompanied by a more  experienced worker to peer-check the work. </p>  <p>The  management system for a larger organization may ensure that no worker carries  out tasks alone unless certain training has been completed and competency has  been demonstrated. A smaller organization may need to consider the specific  human factors in day-to-day decisions to ensure that the worker and the facility  remain safe.</p>  <p>To  return to the previous example, if the new employee had carried out the system  tests alone and the system had been improperly reinstated afterwards, the  systemic and human-focused approach promoted by the human performance program would  have been brought to bear in analyzing the failure. This approach considers the  various factors that influence human performance as an integrated overview.  Instead of identifying the failure as a &ldquo;human error&rdquo; and stopping there, the  range of human factors would be considered, from the perspective of what made  sense to the new employee when they carried out the work activities. For  example, the elements of management and supervision, personnel training, and  procedures would be considered together to identify what contributed to the  failure, and to determine how the identified weaknesses can be corrected. While  it could seem that the failure was mainly associated with training, the  overview of the elements indicates that changes in organizational processes,  job design, safety culture and procedures may have also provided defence  against inexperienced workers carrying out safety-critical tasks without  supervision.</p>  <div className="alert alert-info col-md-6">
<h3>Q 8. Do you propose any additional or alternative expectations of a human performance program?</h3>  </div>
</div>
<div className="col-md-4  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-2  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="col-md-6 mrgn-tp-0 mrgn-bttm-0">
<div id="10"></div>
<h2 id="sec10">10. Human Performance Tools</h2>  <p>&ldquo;Human performance tools&rdquo; are  specific behaviours and approaches that workers are trained to consciously  select and use, with the intention of reducing human errors when they carry out  work activities. They are also called &ldquo;event-free tools&rdquo; or &ldquo;error-free tools&rdquo;.  Examples include: self-check of task steps or actions; stopping the task when  unsure; and three-way verbal communication, where the key message is repeated  back to ensure that accurate understanding has been achieved.</p>  <p>The CNSC considers human  performance tools to have value when they are viewed as a final defence in  preventing an error, although there is more to a human performance program than  just human performance tools. To draw an analogy, using a human performance  tool to prevent an error is like a goaltender stopping a goal from being  scored. To extend this analogy, the broader consideration of human performance  is analogous to the whole team, which is supported and coached to work as a  strong, coordinated organization with a common purpose. This well-supported  team works to reduce the shots on goal and in doing so, reduces the likelihood  that the team&rsquo;s goaltender has to make a save in the first place. Therefore,  the whole human performance program works with the organization&rsquo;s management  system to identify and strengthen defences against events, with the various  elements of the program working together to contribute to defence in depth.</p>
</div>
<div className="col-md-4  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-2  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="col-md-6 mrgn-tp-0 mrgn-bttm-0">
<div id="11"></div>
<h2 id="sec11">11. Human Error</h2>  <p>Human error is a by-product of  being human; we are all predisposed to see what we expect, to forget complex  information, or to do things automatically out of habit. The outcomes of these  human failings are often trivial, but they can have serious implications in the  context of nuclear systems and equipment. Human errors may only be seen as such  when there are undesirable outcomes, although there may be regular deviations  from a procedure or a preferred action. Sometimes, human performance programs  mistakenly focus solely on human error and undesirable outcomes. </p>  <p>Common perceptions of human error  are strongly associated with notions of blame and individual responsibility for  failure. Undue focus on human error can be counterproductive<sup id="fnb18-ref"><a href="#fnb18" className="fn-lnk"><span className="wb-inv">Footnote </span>[18]</a></sup> and result in a culture where the last person to touch a system generally  receives the blame for an undesirable outcome. The CNSC considers that while an  understanding of human error is important, the main focus of a human  performance program is to support people&rsquo;s work activities <strong>to go right</strong>, and helping to manage the risks related to human  factors. Examples of supporting people to do the right thing include designing easy-to-use  equipment, combined with systematically developed and implemented training, and  providing accessible, usable, accurate procedures. Equipment can also be designed  to be sufficiently robust to perform safely when human errors do occur; for  example, using designs that avoid single-point failures and enable error  recovery.</p>
</div>
<div className="col-md-4  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-2  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="col-md-6 mrgn-tp-0 mrgn-bttm-0">
<div id="12"></div>
<h2 id="sec12">12. Conclusions</h2>  <p>Licensees are responsible for  ensuring that they operate in a manner that protects the health, safety and  security of persons and the environment. The CNSC needs to ensure that  licensees provide workers with the necessary support to carry out their work  safely and effectively. To support human performance in the nuclear industry, the  CNSC is considering providing further clarification of its expectations in this  area.</p>  <p>The CNSC intends to use the  feedback received on this discussion paper to inform its approach to regulating  human performance. Before incorporating any new requirements or guidance on  human performance into its regulatory framework, the CNSC will provide stakeholders  with further opportunities to provide feedback on any specific measures that  might be proposed.</p>  <p>The CNSC encourages all  stakeholders and the public to voice their views on this topic. Furthermore,  the CNSC is committed to meaningful early engagement with stakeholders on this  issue and will consider all feedback received at this preliminary stage of its  review of human performance.</p>
</div>
<div className="col-md-4  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-2  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="col-md-6 mrgn-tp-0 mrgn-bttm-0">
<div id="13"></div>
<h2 id="sec13">13. How To Participate</h2>  <p>The discussion paper seeks early  feedback on the opportunities presented to improve the CNSC&rsquo;s regulatory  framework for human performance. </p>  <p>The CNSC seeks comments from all stakeholders,  and is interested their views on the impacts of the proposals described in this  paper. Questions about potential impacts have been included throughout the  paper, and additional comments are welcome.</p>  <p>If the CNSC proceeds with any  regulatory amendments or changes to regulatory documents, additional  opportunities for consultation on specific proposals will be available to  stakeholders. By consulting early, the CNSC is seeking to validate the need for  improvements in various areas of the framework and to understand stakeholder  views on preliminary proposals.</p>  <p>Please submit your comments or  feedback to:</p>  <p>Canadian Nuclear Safety Commission<br/>
P.O. Box 1046, Station B<br/>
280 Slater Street<br/>
Ottawa, Ontario K1P 5S9<br/>
Email: <a href="mailto:consultation@cnsc-ccsn.gc.ca">consultation@cnsc-ccsn.gc.ca</a></p>
</div>
<div className="col-md-4  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-2  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="col-md-6 mrgn-tp-0 mrgn-bttm-0">
<div id="footnotes"></div>
<style type="text/css">  .wb-fnote {  	font-size: 90%;  }  </style>  <div className="wb-fnote" role="note">
<section>
<h2 id="fnb" className="mrgn-tp-md">Footnotes</h2>
<dl>
<dt>Footnote 1</dt>
<dd id=fnb1>
<p>U.S. Nuclear Regulatory Commission. NUREG/CR-6753, INEEL/EXT-01-01166, <em>Review of Findings for Human Performance Contribution to Risk in Operating Events</em>. Washington: U.S. NRC, 2002.</p>
<p className="fn-rtn"><a href="#fnb1-ref"><span className="wb-inv">Return to footnote </span>[1]<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 2</dt>
<dd id=fnb2>
<p>U.S. Department of Energy, DOE-HDBK-1028-2009, <em>Human Performance Improvement Handbook:  Volume 1: Concepts and Principles.</em> Washington: U.S. Department of Energy,  2009.</p>
<p className="fn-rtn"><a href="#fnb2-ref"><span className="wb-inv">Return to footnote </span>[2]<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 3</dt>
<dd id=fnb3>
<p>Flin, R., O&rsquo;Connor, P., and Crichton, M. <em>Safety at the Sharp End</em>. Ashgate, 2008.</p>
<p className="fn-rtn"><a href="#fnb3-ref"><span className="wb-inv">Return to footnote </span>[3]<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 4</dt>
<dd id=fnb4>
<p>Institute of Nuclear Power Operators. INPO 06-003, <em>Human Performance Reference Manual</em>. 2006.</p>
<p className="fn-rtn"><a href="#fnb4-ref"><span className="wb-inv">Return to footnote </span>[4]<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 5</dt>
<dd id=fnb5>
<p>Gilbert, T.F., <em>Human Competence:  Engineering Worthy Performance</em>. 1978.</p>
<p className="fn-rtn"><a href="#fnb5-ref"><span className="wb-inv">Return to footnote </span>[5]<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 6</dt>
<dd id=fnb6>
<p>Hollnagel, E., Woods, D. and Leveson, N. (eds.) <em>Resilience Engineering: concepts and precepts.</em> Ashgate, 2006.</p>
<p className="fn-rtn"><a href="#fnb6-ref"><span className="wb-inv">Return to footnote </span>[6]<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 7</dt>
<dd id=fnb7>
<p>Dekker, S. <em>Drift into Failure:  From Hunting Broken Components to Understanding Complex Systems</em>. Ashgate,  2011.</p>
<p className="fn-rtn"><a href="#fnb7-ref"><span className="wb-inv">Return to footnote </span>[7]<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 8</dt>
<dd id=fnb8>
<p>McLeod, R.W. <em>Designing for Human  Reliability: Human Factors Engineering in the Oil, Gas and Process Industries</em>.  Ashgate, 2015.</p>
<p className="fn-rtn"><a href="#fnb8-ref"><span className="wb-inv">Return to footnote </span>[8]<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 9</dt>
<dd id=fnb9>
<p>McLeod, R.W. Designing for Human Reliability: Human  Factors Engineering in the Oil, Gas and Process Industries. Ashgate, 2015.</p>
<p className="fn-rtn"><a href="#fnb9-ref"><span className="wb-inv">Return to footnote </span>[9]<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 10</dt>
<dd id=fnb10>
<p>Eurocontrol. &ldquo;From safety-I to safety-II: A white paper&rdquo;. Eurocontrol,  2013.</p>
<p className="fn-rtn"><a href="#fnb10-ref"><span className="wb-inv">Return to footnote </span>[10]<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 11</dt>
<dd id=fnb11>
<p>CNSC regulatory policy P-119, <em>Policy on Human Factors</em>. October 2000.</p>
<p className="fn-rtn"><a href="#fnb11-ref"><span className="wb-inv">Return to footnote </span>[11]<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 12</dt>
<dd id=fnb12>
<p>CNSC regulatory guides G-276, <em>Human Factors Engineering Program Plans</em>, June 2003; and G-278, <em>Human Factors Verification and Validation  Plans</em>, June 2003.</p>
<p className="fn-rtn"><a href="#fnb12-ref"><span className="wb-inv">Return to footnote </span>[12]<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 13</dt>
<dd id=fnb13>
<p>Systemic: system-wide, affecting or relating to a group or system as a  whole (such as a safety system, a plant or an operating organization), instead  of its individual members or parts (not to be confused with &ldquo;systematic, which  means methodical).</p>
<p className="fn-rtn"><a href="#fnb13-ref"><span className="wb-inv">Return to footnote </span>[13]<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 14</dt>
<dd id=fnb14>
<p>For example: review and analysis of tasks by human factors specialists;  structured observations of work being performed; focus groups; performance  metrics; trending; reporting of problems up the line; structured walkdowns of  tasks to identify areas for improvement; pre- and post-job briefings; self-assessments;  and audits and external assessments by industry organizations and the  regulator.</p>
<p className="fn-rtn"><a href="#fnb14-ref"><span className="wb-inv">Return to footnote </span>[14]<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 15</dt>
<dd id=fnb15>
<p>IAEA. IAEA Safety Guide GS-G-3.5, <em>The  Management System for Nuclear Installations</em>. 2009.</p>
<p className="fn-rtn"><a href="#fnb15-ref"><span className="wb-inv">Return to footnote </span>[15]<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 16</dt>
<dd id=fnb16>
<p>IAEA Technical Meeting on Regulatory Oversight of Human and Organizational  Factors, IAEA Headquarters, Vienna, Austria, December 14–18, 2015.</p>
<p className="fn-rtn"><a href="#fnb16-ref"><span className="wb-inv">Return to footnote </span>[16]<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 17</dt>
<dd id=fnb17>
<p>Canadian Standards Association. N286-12, <em>Management  system requirements for nuclear facilities</em>. June 2012.</p>
<p className="fn-rtn"><a href="#fnb17-ref"><span className="wb-inv">Return to footnote </span>[17]<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 18</dt>
<dd id=fnb18>
<p>Dekker, S. <em>The Field Guide to  Understanding Human Error</em>. Ashgate, 2006.</p>
<p className="fn-rtn"><a href="#fnb18-ref"><span className="wb-inv">Return to footnote </span>[18]<span className="wb-inv"> referrer</span></a></p>
</dd>
</dl>
</section>  </div>
</div>
<div className="col-md-4  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-2  text-right mrgn-tp-0 mrgn-bttm-0">
</div>
                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }