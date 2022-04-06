import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "en",
                pageTitle: "REGDOC-2.2.3: Personnel Certification: Initial Certification Examinations", 
                dateModified: "2013-09-24",
                langToggleUrl: "/fra/acts-and-regulations/consultation/comment/regdoc2-2-3"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<div className="clear"></div>  <h2>Preface</h2>
<p>This regulatory document is part of the CNSC&#39;s Human  Performance Management series of regulatory documents, which also covers human performance, personnel training and personnel certification. The full list of regulatory document series is included at the end of this document and can be found on the <a href="/eng/acts-and-regulations/regulatory-documents/index">CNSC&#39;s website</a>.</p>
<p>Regulatory document REGDOC-2.2.3, <em>Personnel Certification: </em>Initial Certification Examinations, sets  out requirements and guidance regarding initial certification examinations for  persons requiring certification for a position referred to in the licence of a  nuclear power plant (NPP).</p>
<p>Persons seeking initial certification for these  positions must successfully complete the written (or oral) and simulator-based  certification examinations specified herein. Collectively, the written and oral examinations are also referred to as knowledge-based certification examinations, and the simulator-based examinations are also referred to as performance-based certification examinations.</p>
<p>This document supersedes EG1, <em>Requirements and Guidelines for Written and Oral Certification Examinations for Shift Personnel at NPPs</em> and EG2, <em>Requirements and Guidelines for Simulator-based Certification Examinations for Shift Personnel at NPPs</em>.</p>
<p>Consistent with the CNSC&#39;s regulatory philosophy and with international practice, licensees are first and foremost responsible for the safe operation of their respective NPPs. Consequently, NPP licensees are held entirely responsible for the training and testing of their workers to ensure they are fully qualified to perform the duties of their positions, in accordance with current regulatory requirements.</p>
<p>The CNSC will ensure that each person it certifies is qualified to carry out the duties of the applicable position by means of a regulatory oversight regime of the licensees&#39;certification training  programs and examinations. Regulatory oversight is based on a combination of  appropriate regulatory guidance and compliance activities. </p>
<div className="alert alert-info col-md-12">
<h3><span className="">Important note</span></h3>
<p>Where referenced in a licence either directly or indirectly (such as through licensee-referenced documents), this document is part of the licensing basis for a regulated facility or activity.</p>
<p>The licensing basis sets the boundary conditions for acceptable performance at a regulated facility or activity and establishes the basis for the CNSC&#39;s compliance program for that regulated facility or activity.</p>
<p>Where this document is part of the licensing basis, the word &quot;shall&quot; is used to express a requirement to be satisfied by the licensee or licence applicant. &quot;Should&quot; is used to express  guidance or that which is advised. &quot;May&quot; is used to express an option or that which is advised or permissible within the limits of this regulatory document. &quot;Can&quot; is used to express possibility or capability.</p>
<p>Nothing contained in this document is to be construed as relieving any licensee from any other pertinent requirements. It is the licensee&#39;s responsibility to identify and comply with all applicable regulations and licence conditions.</p>
</div><div className="col-md-12 module-table-contents">
<h2>Table of Contents</h2>
<ul>
<li><a href="#sec1">1. Purpose</a></li>
<li><a href="#sec2">2. Scope</a></li>
<li><a href="#sec3">3. Relevant Legislation</a></li>
<li><a href="#part-i">Part I: General Requirements To Support Initial  Certification Examinations</a></li>
<li><a href="#sec4">4. Policies and Procedures</a></li>
<li><a href="#sec5">5. Responsibilities and Qualifications</a>
<ul>
<li><a href="#sec5-1">5.1 Lead examiner</a>
<ul>
<li><a href="#sec5-1-1">5.1.1 Responsibilities</a></li>
<li><a href="#sec5-1-2">5.1.2 Qualifications</a></li>
</ul>
</li>
<li><a href="#sec5-2">5.2 Examiners</a>
<ul>
<li><a href="#sec5-2-1">5.2.1 Responsibilities</a></li>
<li><a href="#sec5-2-2">5.2.2 Qualification requirements</a></li>
</ul>
</li>
<li><a href="#sec5-3">5.3 Training manager</a>
<ul>
<li><a href="#sec5-3-1">5.3.1 Responsibilities</a></li>
<li><a href="#sec5-3-2">5.3.2 Qualification requirements</a></li>
</ul>
</li>
<li><a href="#sec5-4">5.4 Support team members</a>
<ul>
<li><a href="#sec5-4-1">5.4.1 Responsibilities</a></li>
<li><a href="#sec5-4-2">5.4.2 Qualification requirements</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#sec6">6. Observers</a></li>
<li><a href="#sec7">7. Security Requirements</a>
<ul>
<li><a href="#sec7-1">7.1 Security policy and process</a></li>
<li><a href="#sec7-2">7.2 Security agreements</a></li>
</ul>
</li>
<li><a href="#sec8">8. Retention of Initial Certification Examination Records</a>
<ul>
<li><a href="#sec8-1">8.1 Knowledge-based  certification examination records</a></li>
<li><a href="#sec8-2">8.2 Performance-based  certification examination records</a></li>
</ul>
</li>
<li><a href="#part-ii">Part II:Requirements for Knowledge-Based Certification  Examinations</a></li>
<li><a href="#sec9">9. Written and Oral Certification Examinations</a>
<ul>
<li><a href="#sec9-1">9.1 Total marks and time limits  per certification examination</a></li>
<li><a href="#sec9-2">9.2 Examination bounding envelope</a></li>
<li><a href="#sec9-3">9.3 Examination design</a>
<ul>
<li><a href="#sec9-3-1">9.3.1 General examinations for RO, Unit 0, PSS and CRSS candidates</a></li>
<li><a href="#sec9-3-2">9.3.2 NPP-specific examinations for RO candidates</a></li>
<li><a href="#sec9-3-3">9.3.3 NPP-specific examinations for unit 0 operator  candidates</a></li>
<li><a href="#sec9-3-4">9.3.4 Supplementary NPP-specific examinations for PSS  and CRSS candidates</a></li>
</ul>
</li>
<li><a href="#sec9-4">9.4 Examination and marking guide development</a></li>
<li><a href="#sec9-5">9.5 Final examination and marking guide</a></li>
<li><a href="#sec9-6">9.6 Examination validation</a></li>
</ul>
</li>
<li><a href="#sec10">10. Conduct of Knowledge-Based Certification Examinations</a></li>
<li><a href="#sec11">11. Marking of Examinations</a>
<ul>
<li><a href="#sec11-1">11.1 General requirements for written and oral examinations</a></li>
<li><a href="#sec11-2">11.2 First marking of written and oral examinations</a></li>
<li><a href="#sec11-3">11.3 Second marking of written and oral examinations and reconciliation of results</a></li>
<li><a href="#sec11-4">11.4 Assignment of examination results</a></li>
</ul>
</li>
<li><a href="#sec12">12. Examination Follow-Up</a></li>
<li><a href="#part-iii">Part III: Performance-Based Certification Examination  Requirements</a></li>
<li><a href="#sec13">13. Simulator-Based Certification Examinations</a>
<ul>
<li><a href="#sec13-1">13.1 Test scenario descriptions</a></li>
<li><a href="#sec13-2">13.2 Test scenario and examination  time durations</a></li>
<li><a href="#sec13-3">13.3 Examination bounding envelope</a></li>
<li><a href="#sec13-4">13.4 Primary and secondary  malfunctions</a>
<ul>
<li><a href="#sec13-4-1">13.4.1 Primary malfunctions</a></li>
<li><a href="#sec13-4-2">13.4.2 Secondary malfunctions</a></li>
</ul>
</li>
<li><a href="#sec13-5">13.5 Competency areas and generic  performance expectations</a></li>
</ul>
</li>
<li><a href="#sec14">14. Examination  Design and Development</a>
<ul>
<li><a href="#sec14-1">14.1 Reactor operator examination</a></li>
<li><a href="#sec14-2">14.2 Unit 0 operator examination</a></li>
<li><a href="#sec14-3">14.3 Plant shift supervisor examination</a></li>
<li><a href="#sec14-4">14.4 Control room shift supervisor examination</a></li>
<li><a href="#sec14-5">14.5 Examiner&#39;s guides</a>
<ul>
<li><a href="#sec14-5-1">14.5.1 Examiner&#39;s guide for test scenarios CTS, ATS and DTS</a></li>
<li><a href="#sec14-5-2">14.5.2 Examiner&#39;s guide for test scenario PCTS</a></li>
</ul>
</li>
<li><a href="#sec14-6">14.6 Examination validation</a></li>
<li><a href="#sec14-7">14.7 Final examiner&#39;s guides and examination design</a></li>
</ul>
</li>
<li><a href="#sec15">15. Conduct of Performance-Based Certification Examinations</a>
<ul>
<li><a href="#sec15-1">15.1 Rehearsal of test scenarios prior to conduct</a></li>
<li><a href="#sec15-2">15.2 Conduct of the dynamic portion of a CTS, ATS or DTS</a></li>
<li><a href="#sec15-3">15.3 Conduct of the dynamic portion of a PCTS</a></li>
<li><a href="#sec15-4">15.4 Conduct of the standard questions for PSS and CRSS candidates</a></li>
<li><a href="#sec15-5">15.5 End of examination conduct</a></li>
</ul>
</li>
<li><a href="#sec16">16. Grading of Examinations</a>
<ul>
<li><a href="#sec16-1">16.1 First assessment</a></li>
<li><a href="#sec16-2">16.2 Second assessment</a></li>
<li><a href="#sec16-3">16.3 Assignment of examination  results</a></li>
</ul>
</li>
<li><a href="#sec17">17. Examination  Follow-Up</a></li>
<li><a href="#app-a">Appendix&nbsp;A : Simulator Capabilities for Existing Licensed Nuclear Power Plants</a>
<ul>
<li><a href="#app-a-1">A.1 Minimum acceptable simulation  capabilities</a></li>
<li><a href="#app-a-2">A.2 Data collection devices</a></li>
<li><a href="#app-a-3">A.3 Other devices</a></li>
</ul>
</li>
<li><a href="#app-b">Appendix&nbsp;B : Knowledge-based Certification Examinations - Additional Requirements</a>
<ul>
<li><a href="#app-b-1">B.1 Topic groups for the general examinations for RO, PSS and CRSS candidates</a></li>
<li><a href="#app-b-2">B.2 Topic groups for the general examinations for U0O candidates</a></li>
<li><a href="#app-b-3">B.3 Topic groups for the  NPP-specific examinations for RO candidates</a></li>
<li><a href="#app-b-4">B.4 Knowledge groups for the  NPP-specific examinations for RO candidates</a></li>
<li><a href="#app-b-5">B.5 Topic groups for the  NPP-specific examinations for U0O candidates</a></li>
<li><a href="#app-b-6">B.6 Knowledge groups for the  NPP-specific examinations for U0O candidates</a></li>
<li><a href="#app-b-7">B.7 Topic groups for the  supplementary NPP-specific examinations for PSS and CRSS Candidates</a></li>
<li><a href="#app-b-8">B.8 Sample examination design  matrix</a></li>
<li><a href="#app-b-9">B.9 Knowledge-based examination  cover page</a></li>
<li><a href="#app-b-10">B.10 Sample knowledge-based  examination questions</a></li>
<li><a href="#app-b-11">B.11 Allocation of marks and time  versus number of answer elements</a></li>
<li><a href="#app-b-12">B.12 Knowledge-based marking guide  cover page</a></li>
<li><a href="#app-b-13">B.13 Knowledge-based marking guide  answer</a></li>
<li><a href="#app-b-14">B.14 Knowledge-based examination  checklist</a></li>
<li><a href="#app-b-15">B.15 Knowledge-based examination  result form</a></li>
</ul>
</li>
<li><a href="#app-c">Appendix&nbsp;C : Performance-Based Certification Examinations - Supplemental Requirements</a>
<ul>
<li><a href="#app-c-1">C.1 Competency areas and generic performance expectations for RO and U0O candidates</a></li>
<li><a href="#app-c-2">C.2 Competency areas and generic performance expectations for PSS candidates at single-unit NPPs</a></li>
<li><a href="#app-c-3">C.3 Competency areas and generic performance expectations for CRSS candidates at multi-unit NPPs</a></li>
<li><a href="#app-c-4">C.4 Design of a CTS for the RO examination</a></li>
<li><a href="#app-c-5">C.5 Design of a CTS for the U0O examination</a></li>
<li><a href="#app-c-6">C.6 Design of a CTS for the PSS examination</a></li>
<li><a href="#app-c-7">C.7 Design of an ATS for the PSS examination</a></li>
<li><a href="#app-c-8">C.8 Design of a CTS for the CRSS examination</a></li>
<li><a href="#app-c-9">C.9 Design of a DTS for the CRSS examination</a></li>
<li><a href="#app-c-10">C.10 Design of a PCTS for the CRSS examination</a></li>
<li><a href="#app-c-11">C.11 Cover page for a  performance-based examiner&#39;s guide</a></li>
<li><a href="#app-c-12">C.12 Examiner&#39;s guide section 1 - Test scenario summary</a></li>
<li><a href="#app-c-13">C.13 Examiner&#39;s guide section 3 - Candidate action checklist</a></li>
<li><a href="#app-c-14">C.14 Rules of conduct and instructions for the support team for test scenarios: CTS, ATS, DTS and PCTS</a></li>
<li><a href="#app-c-15">C.15 Standard questions for PSS and  CRSS candidates</a></li>
<li><a href="#app-c-16">C.16 Data collection checklist</a></li>
<li><a href="#app-c-17">C.17 Test scenario validation checklist for test scenarios: CTS, ATS, and DTS</a></li>
<li><a href="#app-c-18">C.18 Rules of conduct and briefing of RO, U0O, PSS and CRSS candidates prior to examination conduct</a></li>
<li><a href="#app-c-19">C.19 Abort conditions and instructions</a></li>
<li><a href="#app-c-20">C.20 Critical and significant error criteria</a></li>
<li><a href="#app-c-21">C.21 Critical or significant error assessment form</a></li>
<li><a href="#app-c-22">C.22 Calculation of  performance-based examination scores</a></li>
<li><a href="#app-c-23">C.23 Performance-based examination results form</a></li>
</ul>
</li>
<li><a href="#app-d">Appendix&nbsp;D : Sample Instructions, Checklists and  Forms</a>
<ul>
<li><a href="#app-d-1">D.1 Security agreements for certification examinations</a></li>
<li><a href="#app-d-2">D.2 Knowledge groups for single-unit-NPP-specific examinations for RO candidates</a></li>
<li><a href="#app-d-3">D.3 Radiation protection knowledge objectives and topics in NPP-specific examinations for RO candidates</a></li>
<li><a href="#app-d-4">D.4 Knowledge groups for multi-unit NPP specific examinations for U0O candidates</a></li>
<li><a href="#app-d-5">D.5 Knowledge objectives to develop topics related to radiological incidents and radiation emergencies in  NPP-specific examinations for U0O candidates</a></li>
<li><a href="#app-d-6">D.6 Sample certification examination invigilation form</a></li>
<li><a href="#app-d-7">D.7 Sample design checklist for a CTS for RO candidates</a></li>
<li><a href="#app-d-8">D.8 Sample design checklist for a simulator-based examination for RO candidates</a></li>
</ul>
</li>
<li><a href="#gloss">Glossary</a></li>
<li><a href="#ref">References</a></li>
</ul>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="1"></div>
<h2 id="sec1" className="mrgn-tp-0">1. Purpose</h2>
<p>This regulatory document provides requirements and guidance  regarding initial certification examinations that persons seeking initial certification  by the Canadian Nuclear Safety Commission (CNSC) must complete, in accordance  with paragraph 9(2)(b) of the <em>Class I Nuclear Facilities Regulations</em>.</p>
<p> REGDOC-2.2.3 specifies the programs and processes  that nuclear power plant (NPP) licensees must implement in the design,  development, conduct, marking and grading of knowledge-based and performance-based  certification examinations. These examinations are aimed at demonstrating that  persons seeking initial certification by the CNSC have acquired the knowledge  and skills required to work competently and safely and in accordance with the regulatory  requirements<em>.</em> In  addition, it ensures that NPP licensees administer the certification examinations  equitably and consistently.</p>
<p> This regulatory document also provides guidance within  appropriate sections to further clarify the regulatory requirements.</p>
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
<h2 id="sec2" className="mrgn-tp-0">2. Scope</h2>
<p>This regulatory document sets out the licensee&#39;s  obligations with respect to the administration of initial certification  examinations for persons seeking initial certification by the CNSC for the  operating positions specified in the power reactor operating licence. The CNSC  generic position titles and the licensee&#39;s equivalent position titles are  listed in table 1. The plant shift supervisor position cited in this regulatory  document refers exclusively to the shift supervisor position at single-unit NPPs. At the time of this document&#39;s printing, additional certification examinations were not required to advance from control room shift supervisor to  shift manager at a multi-unit NPP.</p>
<p>These certification examinations aim to assure the  CNSC that - at the time of initial certification - candidates have  acquired the level of knowledge and skills required to work competently and safely in their assigned positions, and are capable of responding to abnormal operating conditions at the specific NPP for which initial certification is  sought.</p>
<table className="table table-striped">
<caption className="text-left">
<strong>Table 1: Titles of certified positions at existing CNSC-licensed nuclear power plants</strong>
</caption>
<thead>
<tr>
<th>CNSC generic position title </th>
<th colSpan="2">Licensee&#39;s equivalent position title</th>
</tr>
<tr>
<th></th>
<th>Single-unit plant</th>
<th>Multi-unit plant</th>
</tr>
</thead>
<tfoot>
<tr>
<td colSpan="3">*<strong>Note:</strong> The PSS position cited  in this regulatory document refers exclusively to the shift supervisor position  at single-unit NPPs. Initial certification examinations for the SM position at  multi-unit NPPs is currently outside the scope of this document. At the time of this document&#39;s printing, advancement of  CRSS to SM at multi-unit NPPs did not require additional certification  examinations.</td>
</tr>
</tfoot>
<tbody>
<tr>
<td>Plant shift supervisor (PSS)*</td>
<td>Shift supervisor (SS)</td>
<td>Shift manager (SM)</td>
</tr>
<tr>
<td>Control room shift supervisor (CRSS)</td>
<td>Not applicable</td>
<td>Control room shift supervisor (CRSS)</td>
</tr>
<tr>
<td>Reactor operator (RO)</td>
<td>Control room operator (CRO)</td>
<td>Authorized nuclear operator (ANO)</td>
</tr>
<tr>
<td>Unit 0 operator (U0O)</td>
<td>Not applicable</td>
<td>Unit&nbsp;0 control room operator (U0&nbsp;CRO)</td>
</tr>
</tbody>
</table>
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
<h2 id="sec3" className="mrgn-tp-0">3. Relevant Legislation</h2>
<p>The CNSC is the federal agency that regulates the  use of nuclear energy and materials in Canada, in order to prevent unreasonable risk to the health and safety or persons, to the environment and to national security while implementing Canada&#39;s international commitments  on the peaceful use of nuclear energy. The NSCA requires persons or  organizations to be licensed by the CNSC for carrying out the activities  referred to in Section 26 of the NSCA, unless otherwise exempted. The  associated regulations stipulate prerequisites for CNSC licensing and the  obligations of licensees.</p>
<p>The following provisions of the NSCA and the  regulations made under the NSCA are relevant to this document:</p>
<ol>
<li>Paragraph 21(1)(i) of the NSCA empowers the  Commission to &quot;certify and decertify persons referred to in paragraph 44(1)(k) as qualified to carry out their  duties under this Act or the duties of their employment.&quot;</li>
<li>Paragraph 44(1)(k) of the NSCA  empowers the Commission to make regulations &quot;respecting the qualifications for,  and the training and examination of,...nuclear energy workers and other persons  employed in a nuclear facility...&quot;</li>
<li>Paragraph 37(2)(b) of the NSCA states that the  Commission may authorize a Designated Officer to &quot;certify and decertify persons  referred to in paragraph 44(1)(k).&quot;</li>
<li>Subsection 24(5) of the NSCA empowers the Commission to impose any licence condition that the Commission considers necessary for the  purposes of this Act, including conditions respecting qualifications, training and examination of nuclear energy workers.</li>
<li>Subsection 24(4) of the NSCA prohibits the Commission from issuing, renewing, amending or replacing a licence, &quot;unless, in the  opinion of the Commission, the applicant
<ol className="list-lower-alpha">
<li>is qualified to carry on the activity that the licence  will authorize the licensee to carry on</li>
<li>will, in carrying on that activity, make adequate  provision for the protection of the environment, the health and safety of  persons and the maintenance of national security and measures required to  implement international obligations to which Canada has agreed.&quot;</li>
</ol>
</li>
<li>Subsection 12(1)(a) of the General Nuclear Safety and Control  Regulations obliges every licensee to &quot;ensure the presence of a  sufficient number of qualified workers to carry on the licensed activities  safely and in accordance with the Act and the licence.&quot;</li>
<li>Subsection 12(1)(b) of the General Nuclear Safety and Control  Regulations obliges every licensee to &quot;train the workers to carry on the  licensed activity in accordance with the Act, the regulations made under the  Act and the licence.&quot;</li>
<li>Subsection 9(2) of the Class I Nuclear Facilities Regulations  sets out the provisions whereby<br />
&quot;The Commission or a designated officer authorized under paragraph 37(2)(b) of the Act may certify a person  referred to in paragraph 44(1)(k)  of the Act for a position referred to in a licence after receiving from the  licensee an application stating that the person
<ol className="list-lower-alpha">
<li>meets the applicable qualification requirements  referred to in the licence</li>
<li>has successfully completed the applicable training  program and examination referred to in the licence</li>
<li>is capable, in the opinion of the licensee, of  performing the duties of the position.&quot;</li>
</ol>
</li>
<li>Subsection 9(4) of the Class I Nuclear Facilities Regulations  sets out the provisions whereby<br />
&quot;A certification expires five years after the date of its issuance or renewal.&quot;</li>  </ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="Part1"></div>
<h2 id="part-i" className="mrgn-tp-0">Part I: General Requirements To Support Initial Certification Examinations</h2>
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
<h2 id="sec4" className="mrgn-tp-0">4. Policies and Procedures</h2>
<p>The licensee shall have documented policies,  processes and procedures in place to ensure that all the requirements set forth  in this regulatory document are met and implemented.</p>
<p>These policies, processes and procedures shall  include:</p>
<ol>
<li>the assurance that all persons involved in the  administration of initial certification examinations follow the requirements  set out in this regulatory document</li>
<li>the assurance that all persons involved in the administration  of the initial certification examinations are trained, qualified and maintain  their qualifications</li>
<li>the assurance that the key positions involved in the certification  examination process include the:
<ol className="list-lower-alpha">
<li>lead examiner</li>
<li>examiners</li>
<li>training manager</li>
<li>support team members for performance-based examinations</li>
</ol>
</li>
<li>the availability of a sufficient number of qualified  personnel, resources and time to design, develop, conduct, mark and grade all certification  examinations in accordance with this regulatory document</li>
<li>the assurance of independence between training and  examination personnel assigned to each certification examination</li>
</ol>
<div className="module col-md-12">
<p>The  licensee should ensure that an appropriate degree of separation exists between  the persons responsible for the training of candidates seeking certification,  and those persons responsible for administering the certification examinations.  These two groups should act as equal and autonomous bodies. The certification examinations  should be managed independently of the training function. Similarly, the  licensee training programs should not be tailored to meet the certification examinations.</p>
</div>
<ol start="6">
<li>the assurance that any person who has participated in the training of candidates scheduled to take a certification examination does  not participate in the selection of the examination topics and in the  preparation of the examination questions in the areas covered by the training given  by this person</li>
<li>the assurance that once any person has started working on the development of an examination or once a person has any information on  the content of an examination, that the individual no longer trains or gives  training feedback to the candidates scheduled to take that examination until  all of the candidates have completed the examination</li>
<li>the assurance that each examination is validated prior to conduct and the validation process includes the requirement of a person  acting as the candidate, who is currently or previously certified at the NPP for which the test is designed and who has not been involved in any aspect of  the examination design and development, to validate the examination</li>
<li>rules regarding the control of frozen documentation for  all phases of all examinations</li>
<li>the  invigilation requirements for knowledge-based certification examinations and an  invigilation form specifying the examination title, date, time limit, starting  time, a list of candidate names, completion time of the examination, a set of  rules or instructions the invigilators must follow and their declaration that  they have complied with the these set of rules or instructions</li>
<li>a  code of conduct and instructions for briefing the examination team</li>
<li>a  code of conduct and instructions for briefing the candidates</li>
<li>confirmation  that the plant full-scope simulator meets the minimum acceptable capability  requirements for simulator-based examinations specified in appendix A</li>
<li>a  documented program that assures simulator fidelity and effectiveness</li>
</ol>
<div className="module col-md-12"> The licensee processes and  procedures should include a means to collect and take corrective action regarding  relevant simulator fidelity and performance issues identified throughout the  certification training and examination process. This should also include  maintenance modifications or updates performed on the reference unit that are  made to the simulator.</div>
<ol start="15">
<li>the  assurance of a high-quality audiovisual recording system capable of clearly recording  the performance of the candidates during a certification examination, and what  the examiners and support team members are performing and verbalizing including  the asking of questions by the examiners and the answers of the candidates</li>
</ol>
<div className="module col-md-12">
<p> The  audiovisual recordings should be of high quality to clearly distinguish between  what the candidate, the examiners and the role players are saying and doing. It  is essential that the examiners perform an objective grading of a candidate&#39;s  performance subsequent to the conduct of a test. These recordings help confirm whether  the specific actions or checks or answers to examination questions were clear  and correct. In addition, these recordings are used by the CNSC when performing  compliance activities. An examination will not be recognized by the CNSC unless  it has been properly recorded.</p>
</div>
<ol start="16">
<li>documentation  that categorizes the level of risk associated with serious errors for the  critical and significant error determination </li>
<li>the  assurance that any significant knowledge or performance deficiencies revealed  by a candidate or by the examination program are addressed in accordance with  the principles of a systematic approach to training (SAT) </li>
<li>the  assurance that any significant deficiencies in the NPP documentation revealed  during the design, development, conduct, marking or grading of a certification  examination is addressed accordingly</li>
<li>the  assurance that a copy of the authorized examination and the corresponding  authorized marking guide or corresponding authorized examiner&#39;s guide, the  examination checklist, the test scenario checklists and all applicable forms for  each examination are sent to the CNSC and that the CNSC is formally notified of  the results of each candidate</li>
<li>the  handling of appeals by candidates regarding their examination results</li>
<li>the  assurance that the CNSC is informed of the tentative schedule of all certification  examinations in any given calendar year, at least three months before the  beginning of the year, and as soon as changes are made to the schedule</li>
<li>the  assurance that the CNSC is provided with the names of the qualified lead  examiners for each certification examination in any given calendar year, at  least three months before the beginning of the year, and as soon as changes are  made to the list of names. </li>
<li>the  assurance that persons participating in the administration of certification examinations  will not benefit from any performance incentive related to the success or  failure of the candidates taking the certification examinations</li>
</ol>
<div className="module col-md-12">
<p>To preserve the integrity of the  certification examination process, no person directly involved in any aspect of  this examination process should have a vested interest in seeing any candidate pass  any examination. No person should benefit personally or professionally,  financially or otherwise, from the achievements of a candidate or group of  candidates, nor should they be penalized for a candidate&#39;s failure.</p>
</div>
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
<h2 id="sec5" className="mrgn-tp-0">5. Responsibilities and Qualifications</h2>
<p>The titles of the positions used in this regulatory  document are generic. The responsibilities of those positions shall be assigned  by the licensee to persons holding the equivalent positions with the required  qualifications at the specific NPP.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="5.1"></div>
<h3 id="sec5-1" className="mrgn-tp-0">5.1 Lead examiner</h3>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="5.1.1"></div>
<h4 id="sec5-1-1" className="mrgn-tp-0">5.1.1 Responsibilities</h4>
<p>The lead examiner shall be responsible for the  design, development, conduct, marking, grading, recording and reporting of knowledge-based  and performance-based certification examinations.</p>
<p> A lead examiner assigned to a given examination  shall remain as the lead examiner for the entire examination process.</p>
<h5>Knowledge-based  certification examinations</h5>
<p>The lead examiner assigned to a given written or  oral certification examination shall:</p>
<ol>
<li>coordinate the design, the development, the conduct and  the marking of the examination, and ensure that the requirements and criteria  contained in this regulatory document are followed during all stages of the  examination process</li>
<li>inform all persons participating in the design,  development, conduct and marking of an examination of the requirements  regarding examination security and ensure that each person has signed the  applicable security agreement</li>
<li>ensure that the members of the examination team are  fully aware of their roles and responsibilities and the rules they must abide  by</li>
<li>ensure no changes are made to any approved examinations  and approved marking guides without their prior approval</li>
<li>select the candidates who require a second marking of  their examination</li>
<li>document and report the candidate&#39;s final results</li>
<li>ensure that a final marking package is compiled for  each candidate</li>
<li>record and report any significant knowledge  deficiencies revealed by a candidate or by an examination</li>
<li>record and report significant deficiencies in the NPP  documentation found during the design, development, conduct and marking of the  examination</li>
</ol>
<h5>Performance-based  certification examinations</h5>
<p>The lead examiner assigned to a given  simulator-based certification examination shall:</p>
<ol>
<li>coordinate the design, the development, the conduct and  the grading of the examination, and ensure that the requirements and criteria  contained in this regulatory document are followed during all stages of the  examination process</li>
<li>inform all persons participating in the design,  development, conduct and grading of an examination of the requirements  regarding examination security and ensure that each person has signed the  applicable security agreement</li>
<li>ensure that the persons assigned to the support team  have the required knowledge and skills to play their respective roles  effectively</li>
<li>ensure the support team is qualified and is fully  familiar with their respective roles and responsibilities and the relevant  parts of this regulatory document</li>
<li>ensure no changes are made to any approved examinations  and approved examiner&#39;s guides without prior approval</li>
<li>only make minor adjustments to the approved examiner&#39;s  guides, where required, at the time of the examination</li>
<li>ensure compliance with section 6  of this document regarding observers</li>
<li>ensure the simulator and the data collection devices  are set properly for the conduct of the examination</li>
<li>ensure the simulator fidelity response meets the  requirements of the examination</li>
</ol>
<div className="module col-md-12">
<p>The lead examiner should ensure that  during the examination design and development process and during the conduct of  the examination, the full-scope simulator responds to the test malfunctions as  would be expected on the reference unit at the specific NPP.</p>
</div>
<ol start="10">
<li>determine  when to start, abort or end a test scenario during the conduct of an  examination</li>
<li>select  the candidates who require a second grading of their examination</li>
<li>document  and report the candidate&#39;s final results</li>
<li>ensure  that a final assessment package is compiled for each candidate</li>
<li>record  and report any significant performance deficiencies revealed by a candidate or  by an examination</li>
<li>record  and report significant deficiencies in the NPP documentation found during the  design, development, conduct and grading of the examination</li>
</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="5.1.2"></div>
<h4 id="sec5-1-2" className="mrgn-tp-0">5.1.2 Qualifications</h4>
<h5>Knowledge-based  certification examinations</h5>
<p>The lead examiner for a given written or oral certification  examination shall:</p>
<ol>
<li>be fully familiar with the relevant parts of this  regulatory document applicable to the specific NPP</li>
<li>be fully qualified as an examiner</li>
</ol>
<div className="module col-md-12">
<p>The licensee should ensure that all  examiners who take part in the examination process, including the lead  examiner, have all successfully completed a documented training program demonstrating  and confirming that the person is qualified to be an examiner. For further  information, refer to section 5.0 of regulatory document RD-204, <em>Certification of Persons Working at Nuclear  Power Plants</em>.</p>
</div>
<ol start="3">
<li>be fully qualified as the lead examiner for the  examination to which they have been assigned</li>
</ol>
<div className="module col-md-12">
<p>The licensee should ensure that the examiner has successfully completed a documented training program demonstrating  and confirming that the examiner has and maintains the requisite knowledge and skills to be the lead examiner for a given examination.</p>
</div>
<ol start="4">
<li>have previously participated as an examiner in the  entire examination process for at least one written or one oral certification  examination for the position for which the examination is intended at the  specific NPP</li>
<li>have for the general examinations, the knowledge in  science fundamentals and equipment principles required by currently certified  persons working at the specific NPP in the position for which the examination  is intended</li>
<li>have for the given NPP-specific examinations, one of  the qualifications (a) or (b), as follows, that is applicable to the position  for which the examination is intended:
<ol className="list-lower-alpha">
<li>for the reactor operator, control room shift supervisor  or plant shift supervisor position, the lead examiner must be currently or have  been previously certified by the CNSC:
<ol className="list-lower-roman">
<li>in the position for which the examination is intended  at the specific NPP and if previously certified, be fully familiar with the  knowledge requirements of the position</li>
<li>in an operating position other than unit 0 operator at any NPP, with at least one year of  experience in the position for which the examination is intended, and be fully  familiar with the knowledge requirements of this position at the specific NPP</li>
</ol>
</li>
<li>for the unit 0 operator position, the lead examiner  must be currently or have been previously certified by the CNSC:
<ol className="list-lower-roman">
<li>as a unit 0 operator at the specific NPP and if previously  certified, be fully familiar with the knowledge requirements of the position</li>
<li>in an operating position, other than reactor operator,  at any NPP with at least one year of experience in the position and be fully  familiar with the knowledge requirements of this position at the specific NPP</li>
</ol>
</li>
</ol>
</li>
</ol>
<div className="module col-md-12">
<p>The  licensee should have a documented training program demonstrating and confirming  that the lead examiner has and maintains the knowledge that is required of  currently certified persons working at the specific NPP in the position for  which the examination is intended. This training program should also include  the continuing training requirements specific to the position as required in  regulatory document RD-204. </p>
</div>
<h5>Performance-based certification examinations</h5>
<p>The lead examiner for a given simulator-based certification  examination shall:</p>
<ol>
<li>be fully familiar with the relevant parts of this  regulatory document applicable to the specific NPP</li>
<li>be fully qualified as an examiner </li>
</ol>
<div className="module col-md-12">
<p>The licensee should ensure that all  examiners who take part in the examination process, including the lead  examiner, have all successfully completed a documented training program demonstrating  and confirming that the person is qualified to be an examiner. Also refer to  section 5.0 of regulatory document RD-204.</p>
</div>
<ol start="3">
<li>be  fully qualified as the lead examiner for the examination to which they have  been assigned</li>
</ol>
<div className="module col-md-12">
<p>Before an examiner leads an  examination, the licensee should ensure that the examiner has successfully  completed a documented training program demonstrating and confirming that the examiner  has and maintains the requisite knowledge and skills to be the lead examiner  for a given examination.</p>
</div>
<ol start="4">
<li>have previously participated as an examiner in the  entire examination process in at least two simulator-based initial certification  examinations of the same type at the specific NPP for the position for which  the examination is intended or for control room shift supervisor or plant shift  supervisor candidates</li>
<li>be fully familiar with the assessment techniques used  during testing on a full-scope simulator</li>
<li>be fully familiar with the documented performance  expectations for certified shift personnel at that NPP</li>
<li>have one of the qualifications (a) or (b), as follows, that  is applicable to the position for which the examination is intended:
<ol className="list-lower-alpha">
<li>for the reactor operator, control room shift supervisor  or plant shift supervisor position, the lead examiner must:
<ol className="list-lower-roman">
<li>be currently or have been previously certified by the  CNSC in the position for which the examination is intended at the specific NPP  and if previously certified, be fully familiar with the current knowledge and  performance requirements of the position </li>
<li>be currently or have been previously certified by the  CNSC in an operating position other than unit 0 at any NPP with at least one  year of experience in the position for which the examination is intended, and be  fully familiar with all the knowledge and performance requirements of this  position at the specific NPP</li>
</ol>
</li>
<li>for the unit 0 operator position, the lead examiner  must:
<ol className="list-lower-roman">
<li>be currently or have been previously certified by the  CNSC as a unit&nbsp;0 operator at the specific NPP and if previously certified,  be fully familiar with the current knowledge and performance requirements of  the position  </li>
<li>be currently or have been previously certified by the  CNSC in an operating position other than reactor operator at any NPP, with at  least one year of experience in the position, and be fully familiar with all the  knowledge and performance requirements of this position at the specific NPP</li>
</ol>
</li>
</ol>
</li>
</ol>
<div className="module col-md-12">
<p>The  licensee should have a documented training program demonstrating and confirming  that the lead examiner has and maintains the current knowledge and performance  requirements of the certified position at the specific NPP for which the  examination is intended. This training program should include the specific  roles and responsibilities of the position, the operational areas such as the  design and operation of NPP systems, integrated operation of NPP systems, control  room panels, control room and field standard operating practices at the NPP and  performance expectations of NPP management. This training program should also  include the continuing training requirements specific to the position as  required in regulatory document RD-204.</p>
</div>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="5.2"></div>
<h3 id="sec5-2" className="mrgn-tp-0">5.2 Examiners</h3>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="5.2.1"></div>
<h4 id="sec5-2-1" className="mrgn-tp-0">5.2.1 Responsibilities</h4>
<p>The examiners involved in the design, development,  conduct, marking and grading of knowledge-based and performance-based certification  examinations shall be under the direction of the lead examiner.</p>
<h5>Knowledge-based  certification examinations</h5>
<p>The examiners assigned to a given written or oral certification  examination team shall:</p>
<ol>
<li>participate in the design, development and marking of  the examination</li>
<li>participate in the conduct of the examination when the examination  is conducted orally</li>
<li>obtain the data necessary from the NPP full-scope simulator  to develop examination questions and answers</li>
<li>record and report significant deficiencies in the NPP  documentation found during the design and development, conduct and marking of  the examination</li>
<li>record and report significant deficiencies in the NPP  training documentation and training program found during the entire examination  process</li>
</ol>
<h5>Performance-based  certification examinations</h5>
<p>The examiners assigned to a given simulator-based certification  examination team shall:</p>
<ol>
<li>participate in the design, development, conduct and  grading of the examination as directed by the lead examiner</li>
</ol>
<div className="module col-md-12">
<p>An  examiner, including an examiner in training assigned to an examination with a  lead examiner, should remain as the examiner during the entire examination  process.</p>
</div>
<ol start="2">
<li>bring to the attention of the lead examiner any  simulator shortcoming that may affect the simulation of the test scenarios</li>
<li>record the performance of each candidate in the  examiner&#39;s guides during the conduct of an examination</li>
<li>record and report significant deficiencies in the NPP  documentation found during the design,   development, conduct and grading of the examination</li>
<li>record and report significant deficiencies in the NPP  training documentation and training program found during the entire examination  process</li>
<li>recommend to the lead examiner to abort a test  scenario, when warranted</li>
</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="5.2.2"></div>
<h4 id="sec5-2-2" className="mrgn-tp-0">5.2.2 Qualification requirements</h4>
<h5>Knowledge-based  certification examinations</h5>
<p>Each examiner on the examination team for a given  written or oral certification examination shall:</p>
<ol>
<li>be fully familiar with the relevant parts of this  regulatory document applicable to the specific NPP</li>
<li>be fully qualified as an examiner </li>
</ol>
<div className="module col-md-12">
<p>The licensee should ensure the  examiner taking part in the examination process has successfully completed a  documented training program demonstrating and confirming that the person is  qualified to be an examiner. Also refer to section 5.0 of regulatory document  RD-204.</p>
</div>
<ol start="3">
<li>possess the applicable qualifications, knowledge and  skills required to design, develop, conduct and mark the certification examination  to which they have been assigned</li>
<li>have, for the general examinations, the knowledge in  science fundamentals and equipment principles required by currently certified  persons working at the specific NPP in the position for which the examination  is intended</li>
<li>have, for the NPP-specific examinations, one of the  qualifications (a) or (b), as follows, that is applicable to the position for  which the examination is intended:
<ol className="list-lower-alpha">
<li>for the reactor operator, control room shift supervisor  or plant shift supervisor positions, have qualification (i) and, if applicable,  qualification (ii)
<ol className="list-lower-roman">
<li>be currently or have been previously certified by the  CNSC in an operating position other than unit 0 operator at any NPP, with at  least one year of experience in the position</li>
<li>if never certified by the CNSC at the specific NPP in  the position for which the examination is intended, be fully familiar with the  knowledge requirements of this position at that NPP</li>
</ol>
</li>
<li>for the unit 0 operator position, have qualification  (i) and, if applicable, qualification (ii):
<ol className="list-lower-roman">
<li>be currently or have been previously certified by the  CNSC in an operating position other than reactor operator at any NPP, with at  least one year of experience in the position</li>
<li>if never certified by the CNSC at the specific NPP as a  unit 0 operator, be fully familiar with the knowledge requirements of this  position at that NPP</li>
</ol>
</li>
</ol>
</li>
</ol>
<div className="module col-md-12">
<p>The  licensee should have a documented training program demonstrating and confirming  that the examiner has and maintains the knowledge that is required of currently  certified persons working at the specific NPP in the position for which the  examination is intended. This training program should also include the  continuing training requirements specific to the position as required in  regulatory document RD-204.  </p>
<p>Note:  Qualified examiners may be assisted by subject matter experts who do not have  the same applicable qualifications.</p>
</div>
<ol start="6">
<li>in addition to the requirements above, at least one  examiner on an examination team for a given NPP-specific examination shall:
<ol className="list-lower-alpha">
<li>be sufficiently familiar with the operations of CANDU  NPPs to ensure the examination questions and answers are operationally focused </li>
<li>be either:
<ol className="list-lower-roman">
<li>currently certified at the specific NPP, or at a  similar NPP on the same site, in the position for which the examination is intended  or as a control room shift supervisor or a plant shift supervisor, or</li>
<li>previously certified at the specific NPP, or at a  similar NPP on the same site, in the position for which the examination is  intended or as a control room shift supervisor or a plant shift supervisor and  have the knowledge required by currently certified persons working in the  position for which the examination is intended at the specific NPP</li>
</ol>
</li>
</ol>
</li>
</ol>
<div className="module col-md-12">
<p>The licensee should have a documented training program demonstrating and confirming  that the examiner has and maintains the current knowledge requirements of the certified position at the specific NPP for which the examination is intended.  This training program should include the design and operation of NPP systems, integrated operation of NPP systems, control room panels, control room and field standard  operating practices at the NPP and performance expectations of NPP management. This training program should also include the continuing training requirements  specific to the position as required in regulatory document RD-204. </p>
</div>
<h5>Performance-based  certification examinations</h5>
<p>Each examiner on the examination team for a given  simulator-based certification examination shall:</p>
<ol>
<li>be fully familiar with the relevant parts of this  regulatory document applicable to the specific NPP</li>
<li>be fully qualified as an examiner </li>
</ol>
<div className="module col-md-12">
<p>The licensee should ensure that the  examiner taking part in the examination process has successfully completed a  documented training program demonstrating and confirming that the person is  qualified to be an examiner. Also refer to section 5.0 of regulatory document  RD-204.</p>
</div>
<ol start="3">
<li>be fully familiar with the assessment techniques used  during testing on a full-scope simulator</li>
<li>have one of the qualifications (a), (b) or (c) listed  below that is relevant, taking into account the position for which the  examination is intended:
<ol className="list-lower-alpha">
<li>for the reactor operator, control room shift supervisor  and plant shift supervisor positions, have qualification (i) and, if  applicable, qualification (ii):
<ol className="list-lower-roman">
<li>be currently or have been previously certified by the  CNSC in an operating position other than unit 0 operator at any NPP, with at  least one year of experience in the position</li>
<li>if never certified by the CNSC at the specific NPP in  the position for which the examination is intended, be fully familiar with the  knowledge and skill requirements of this position at that NPP</li>
</ol>
</li>
<li>for  the unit 0 operator position, have qualification (i) and, if applicable,  qualification (ii):
<ol className="list-lower-roman">
<li>be currently or have been previously certified by the  CNSC in an operating position other than reactor operator at any NPP, with at  least one year of experience in the position</li>
<li>if never certified by the CNSC at the specific NPP as a  unit 0 operator, be fully familiar with the knowledge and skill requirements of  this position at that NPP</li>
</ol>
</li>
<li>if never certified by the CNSC in a relevant operating  position at any NPP, be fully familiar with the knowledge and skill  requirements of the position for which the examination is intended at the  specific NPP; the licensee shall have a documented process and procedure in  place that ensures the examiners have the knowledge required by currently  certified persons working in that position at that NPP</li>
</ol>
</li>
</ol>
<div className="module col-md-12">
<p>The  licensee should have a documented training program demonstrating and confirming  that the examiner has and maintains the current knowledge and performance  requirements of the certified position at the specific NPP for which the  examination is intended. This training program should include the design and  operation of NPP systems, integrated operation of NPP systems, control room  panels, control room and field standard operating practices at the NPP and  performance expectations of NPP management. This training program should also  include the continuing training requirements specific to the position as required  in regulatory document RD-204. </p>
</div>
<ol start="5">
<li>in addition, at least one examiner on the examination  team for a given simulator-based examination shall:
<ol className="list-lower-alpha">
<li>have up-to-date knowledge of the simulator operational  capabilities, its modelling limitations and the equipment and system malfunctions  that it can simulate</li>
<li>be either:
<ol className="list-lower-roman">
<li>currently certified at the specific NPP, or at a  similar NPP on the same site, in the position for which the examination is  intended, or as a control room shift supervisor or a plant shift supervisor</li>
<li>have been previously certified at the specific NPP, or at a similar NPP on the same site, in the position for which the examination is  intended, or as a control room shift supervisor or a plant shift supervisor and  have the knowledge required by currently certified persons working in the  position for which the examination is intended at the specific NPP</li>
</ol>
</li>
</ol>
</li>
</ol>
<div className="module col-md-12">
<p>The licensee should have a documented training program demonstrating and confirming that the examiner has and  maintains the current knowledge and skill requirements of the certified position at the specific NPP for which the examination is intended. This  training program should include the design and operation of NPP systems, integrated operation of NPP systems, control room panels, control room and field standard  operating practices at the NPP and performance expectations of NPP management. This training program should also include the continuing training requirements  specific to the position as required in regulatory document RD-204.</p>
</div>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="5.3"></div>
<h3 id="sec5-3" className="mrgn-tp-0">5.3 Training manager</h3>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="5.3.1"></div>
<h4 id="sec5-3-1" className="mrgn-tp-0">5.3.1 Responsibilities</h4>
<p>The training manager shall be responsible for the  implementation of the knowledge-based and performance-based certification  examination requirements set forth in this regulatory document.</p>
<h5>Knowledge-based  and performance-based certification examinations</h5>
<p>The training manager shall:</p>
<ol>
<li>ensure that all of the requirements contained in this  regulatory document are complied with during all stages of the certification  examination process</li>
<li>ensure all security requirements are met by all  personnel throughout the certification examination process</li>
<li>for each certification examination, assign at least two  qualified examiners to the examination team and ensure one is qualified to be the  lead examiner</li>
</ol>
<div className="module col-md-12">
<p>The  training manager should ensure that the examiners assigned to a specific  examination remain as the examiners throughout the entire examination process.  This includes the examiner in training.</p>
</div>
<ol start="4">
<li>determine the need to assign subject matter experts to  assist the qualified examiners on the examination team</li>
<li>ensure the rules governing frozen documentation are  followed at all times</li>
<li>determine and approve, in accordance with section 10  the need to conduct a given supplementary NPP-specific examination orally</li>
<li>review and approve the knowledge-based certification  examinations and corresponding marking guides prior to the conduct of the  examinations</li>
<li>review and authorize the marking guide and the  examination results of each candidate for a given knowledge-based examination</li>
<li>review and approve the performance-based certification  examinations and corresponding examiner&#39;s guides prior to the conduct of the  examinations</li>
<li>review and authorize the examiner&#39;s guides prior to grading a given performance-based certification examination</li>
<li>review and authorize the examination results of each candidate for a given performance-based certification examination</li>
<li>ensure simulator fidelity response meets the given examination design requirements</li>
<li>ensure that the NPP full-scope simulator meets the requirements of appendix A.1 regarding  simulation capabilities for simulator-based certification examinations</li>
<li>approve  the presence of observers during the conduct of the performance-based certification  examinations</li>
<li>ensure  that a copy of all authorized examinations and corresponding authorized marking  guides or corresponding authorized examiner&#39;s guides, examination checklists,  test scenario checklists and all applicable forms are made available upon  request to the CNSC following each examination </li>
<li>ensure  that the CNSC is formally notified of the pass and fail results of each  candidate</li>
<li>formally  notify the CNSC of the tentative schedule of all certification examinations in  any given calendar year, at least three months before the beginning of the  year, and as soon as changes are made to the schedule</li>
</ol>
<div className="module col-md-12">
<p>A change  made to the examination schedule requires adequate prior notification to the  CNSC that would reasonably allow the CNSC to prepare for the required compliance  activities of the examination process, or parts thereof as required.</p>
</div>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="5.3.2"></div>
<h4 id="sec5-3-2" className="mrgn-tp-0">5.3.2 Qualification  requirements</h4>
<p>The licensee shall ensure there are documented  processes and procedures in place specifying the qualification requirements,  including the maintaining of qualification requirements, of training managers  at the specific NPP involved in the certification examination process.</p>
<h5>Knowledge-based  and performance-based certification examinations</h5>
<p>The training manager shall:</p>
<ol>
<li>be currently or have been previously certified by the  CNSC in any operating position at any NPP or have the equivalent knowledge and  experience</li>
<li>have expert knowledge of all parts of this regulatory  document related to certification examinations applicable to the specific NPP</li>
</ol>
<div className="module col-md-12">
<p>The  licensee is expected to have documentation demonstrating how the training  manager, who has never been certified by the CNSC but has the equivalent  knowledge and experience of the operating position, has and maintains the  technical capabilities and experience for the knowledge-based and  performance-based certification examinations. </p>
</div>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="5.4"></div>
<h3 id="sec5-4" className="mrgn-tp-0">5.4 Support team members</h3>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="5.4.1"></div>
<h4 id="sec5-4-1" className="mrgn-tp-0">5.4.1 Responsibilities</h4>
<p>The support team members, under the direction of the  lead examiner, shall be responsible for supporting the performance-based certification  examinations during rehearsal and validation of the test scenarios and during  the conduct of a given examination.</p>
<p> The licensee shall ensure that restrictions are  placed on the number of support team members in the control room and on their  individual performance during the conduct of a given examination. These  restrictions will allow the candidates the opportunity to demonstrate their  ability to independently monitor the evolution of plant conditions, recognize  abnormalities and diagnose malfunctions.</p>
<h5>Performance-based  certification examinations</h5>
<p>During the certification examination process, the support team  members shall:</p>
<ol>
<li>perform the role of the NPP control room operating  crew, as prescribed in the examiner&#39;s guides</li>
</ol>
<div className="module col-md-12">
<p>Unless otherwise directed by  the lead examiner the support team members should only:</p>
<ul>
<li>perform the activities specified in the  examiner&#39;s guide</li>
<li>communicate to the candidate the information specified  in the examiner&#39;s guide </li>
<li>perform the specific actions requested by the  candidate </li>
</ul>
<p>Support  team members should act in accordance with the examiner&#39;s guides and the  qualifications for which they are currently certified, regardless of what  requests the candidate makes.</p>
</div>
<ol start="2">
<li>direct the activities or perform the role of the field  operators, as prescribed in the examiner&#39;s guides</li>
</ol>
<div className="module col-md-12">
<p>Any  request for a field activity by the candidates that is not covered in the examiner&#39;s  guide will be addressed as directed by the lead examiner, taking into  consideration the time that it would take for completing the activity in the  NPP.</p>
<p>Support  team members should ask for clarification questions if any request for an  activity by the candidate is not to the level of detail specified in the  examiner&#39;s guide, or is otherwise incomplete or unclear.</p>
</div>
<ol start="3">
<li>act in such a way as not to interfere with or adversely  influence the conduct of the examination or change the intent and scope of the test  scenario</li>
</ol>
<div className="module col-md-12">
<p>The support team members should not give at any time suggestions regarding the  diagnoses of malfunctions, the decisions and the actions that the candidates are expected to make or to perform. The following are considered as not  acceptable:</p>
<ul>
<li>pointing out abnormalities that a candidate is expected to recognize</li>
<li>diagnosing a malfunction that a candidate is expected to diagnose</li>
<li>the members playing the role of other certified individuals during a test scenario recommending a corrective action to a candidate,  or recommending the course of actions required in the event of any occurrence at a unit not specifically addressed by the approved operating procedures</li>
<li>correcting an error made by a candidate</li>
<li>inappropriate body language, tone or verbal expressions</li>
<li>resetting of the alarms or annunciations without being directed to do so by the candidate</li>
</ul>
</div>
<ol start="4">
<li>operate, or have a qualified person operate, the NPP full-scope  simulator as prescribed in the examiner&#39;s guides</li>
</ol>
<div className="module col-md-12">
<p>The  field operator coordinator, the audiovisual recording operator and the  simulator operator should not be the same individual.</p>
</div>
<ol start="5">
<li>bring to the immediate attention of the lead examiner,  during the rehearsals, validation or the conduct of a test scenario any  simulator deficiencies, deficiencies in NPP documentation or other  circumstances that may affect the validity of the test scenarios</li>
</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="5.4.2"></div>
<h4 id="sec5-4-2" className="mrgn-tp-0">5.4.2 Qualification requirements</h4>
<h5>Performance-based certification examinations</h5>
<p>Each support team member shall:</p>
<ol>
<li>be fully familiar with the relevant parts of this regulatory document applicable to the specific NPP</li>
<li>have the required knowledge and skills to perform the assigned roles correctly and effectively, as prescribed in the examiner&#39;s guides</li>
</ol>
<p>At least one support team member, who is assigned to operate the simulator during a certification examination, shall have up-to-date knowledge of the simulator operational capabilities, any known modelling limitations and the equipment and system malfunction capabilities. </p>
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
<h2 id="sec6" className="mrgn-tp-0">6. Observers</h2>
<p>The licensee shall have a documented policy, process and procedures in place regarding the participation of observers who, due to their duties, need to observe the conduct of a simulator-based certification  examination.</p>
<div className="module col-md-12">
<p>CNSC  staff are not defined as observers and are exempt from signing any agreements.</p>
</div>
<p>The licensee&#39;s policy, process and procedures shall  include the requirements for security agreements and code of conduct of  observers, and ensure the following conditions:</p>
<ol>
<li>observers shall in no way participate in the  administration of any part of a certification examination nor interfere with  the conduct of an examination</li>
<li>observers shall not comment under any circumstances on  the performance of a candidate nor participate in the evaluation of the  candidate&#39;s performance</li>
<li>observers shall obtain approval from the training manager  prior to the conduct of a certification examination</li>
<li>observers shall sign a security agreement specified in  section 7  prior to attending the conduct of the certification examination</li>
</ol>
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
<h2 id="sec7" className="mrgn-tp-0">7. Security Requirements</h2>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="7.1"></div>
<h3 id="sec7-1" className="mrgn-tp-0">7.1 Security policy and process</h3>
<p>The licensee shall have documented policies,  processes and procedures in place regarding the security requirements for all  phases of the knowledge-based and performance-based certification examinations and  shall include detailed security agreements.</p>
<div className="module col-md-12">
<p>The security agreements should be similar to those shown in appendix D.1.</p>
</div>
<p>The documented policies, processes and procedures  shall include the requirement to:</p>
<ol>
<li>document the physical, electronic and administrative  measures and requirements , including those specifically designed for the  simulator, which must be in place to minimize the risk of compromising the  security of certification examinations</li>
<li>control all certification examinations and all material  associated with those examinations at all times</li>
<li>ensure no information on the content of a certification  examination is revealed in any way to the candidates scheduled to take the  examination</li>
<li>ensure that any required discussions on a certification  examination take place with specified examination personnel in a secure  location to prevent compromising the security of the examination</li>
<li>limit the access to the certification examinations and  to the associated examination material to persons with a need to know</li>
<li>ensure there is at least one barrier  in place at all times to prevent unauthorized access to examinations and associated  examination material</li>
</ol>
<div className="module col-md-12">
<p>Examples of acceptable barriers include:</p>
<ul>
<li>signed security agreements</li>
<li>a locked room with opaque windows accessible only to persons who have signed the appropriate security agreement</li>
<li>a locked file cabinet, desk or safe accessible only to persons who have signed the appropriate security agreement</li>
<li>password protected electronic files accessible only to persons who have signed the appropriate security agreement</li>
<li>direct control of examination material by a person who has signed the appropriate security agreement</li>
<li>secure printer and photocopier </li>
<li>password protected workstation</li>
</ul>
</div>
<ol start="7">
<li>ensure all draft material, notes and other documents  generated or consulted during any phase of the examination process be handled  in a way that prevents compromising the security of the examinations</li>
<li>ensure all persons participating in any part of the certification  examination process for any certification examination are informed of:
<ol className="list-lower-alpha">
<li>the licensee&#39;s documented physical, electronic and  administrative measures and requirements, applicable to the person&#39;s role in  the examination or part there of, to ensure the security of the certification  examinations</li>
<li>the terms of the licensee&#39;s security agreement process  for certification examinations including the consequences of violating its  terms</li>
<li>the requirement to sign the licensee&#39;s security  agreement</li>
</ol>
</li>
<li>ensure that any person involved in any phase of the  examination process who suspects unauthorized access to information related to  the content of a given certification examination immediately informs the  training manager or the lead examiner who must promptly undertake an  investigation; the examination must not be used as soon as the investigation  shows that its security has been compromised</li>
<li>ensure  all candidates taking a certification examination are informed of the terms of  the licensee&#39;s security agreement for certification examinations including the  consequences of violating its terms and sign the licensee&#39;s specific security  agreement</li>
<li>ensure  that in the event of a security breach, including a violation of the terms of a  signed agreement, a process is in place to determine if the examination is to  be immediately terminated and no longer used</li>
</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="7.2"></div>
<h3 id="sec7-2" className="mrgn-tp-0">7.2 Security agreements</h3>
<p>The security agreements shall stipulate the  requirements outlined in section 7.1 specific to the role of the person who is required to sign the agreement.</p>
<div className="module col-md-12">
<p>The security agreements should be similar to those shown in appendix D.1.</p>
<p>CNSC staff are exempt from signing any confidentiality agreements.</p>
</div>
<p>Prior to participating in any part of the certification examination process for any certification examination, and prior to the conduct  of any certification examination, the following persons shall have signed a security agreement attesting to its terms and conditions:</p>
<ol>
<li>examiners and examination support personnel who are assigned or appointed to work on a regular basis in the design, development and  conduct of a given certification examination</li>
<li>persons, other than those defined in point 1 above, who have approval to participate in the design, development and conduct of a given certification  examination such as subject matter experts and observers</li>
<li>candidates who are scheduled to take a certification examination</li>
</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="8"></div>
<h2 id="sec8" className="mrgn-tp-0">8. Retention of Initial Certification Examination Records</h2>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="8.1"></div>
<h3 id="sec8-1" className="mrgn-tp-0">8.1 Knowledge-based certification examination records</h3>
<ol>
<li>The licensee shall retain, for a minimum of five years  from the date of approval or signature, the following records for each written  or oral examination:
<ol className="list-lower-alpha">
<li>the approved examination:</li>
<li>the authorized marking guide</li>
<li>the examination checklist</li>
<li>the invigilation form</li>
<li>the names of the persons who developed the examination</li>
<li>the name and signature of the person who approved the  examination, with the date of signature</li>
<li>the name and signature of the person who approved and  who authorized the marking guide, with the date of signature</li>
<li>the candidates&#39; answer booklets for a written  examination and if applicable, the recordings of the candidates&#39; oral  examinations</li>
<li>the signed security agreements</li>
<li>any approved report documenting the analysis of the  examination results</li>
</ol>
</li>
<li>the licensee shall retain, for the period prescribed in  paragraph 14(5) of the Class I  Nuclear Facilities Regulations, a record of the written and if applicable,  oral examinations taken by each candidate, containing:
<ol className="list-lower-alpha">
<li>the position sought by the candidate</li>
<li>the title and date of each examination taken</li>
<li>the completed authorized marking guide for each examination  taken by the candidate</li>
<li>all documentation pertaining to the outcome of any  appeal regarding the candidate&#39;s examination results</li>
</ol>
</li>
</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="8.2"></div>
<h3 id="sec8-2" className="mrgn-tp-0">8.2 Performance-based certification examination records</h3>
<ol>
<li>the licensee shall retain, for a minimum of five years  from the end date of conducting the examination, the following records for each  simulator-based examination:
<ol className="list-lower-alpha">
<li>an approved examination package that includes:
<ol className="list-lower-roman">
<li>the approved examiner&#39;s guides</li>
<li>the test scenario checklists and the examination  checklist</li>
<li>the names of the persons who developed the examiner&#39;s  guides</li>
<li>the name and signature of the person who approved the  examiner&#39;s guides and the examination package, with the date of signature</li>
</ol>
</li>
<li>the authorized examiner&#39;s guides with the  name and signature of the person who authorized them, with the date of  signature</li>
<li>the examiner&#39;s guides marked up by the examiners and  all the data collected during the conduct of the examination including the  audiovisual recordings</li>
<li>the signed security agreements</li>
<li>any approved report documenting the analysis of the  examination results</li>
</ol>
</li>
<li>the licensee shall retain, for the period prescribed in  paragraph 14(5) of the Class I  Nuclear Facilities Regulations, a record of the simulator-based  examinations taken by each candidate, containing:
<ol className="list-lower-alpha">
<li>the position sought by the candidate</li>
<li>the type and date of each examination taken</li>
<li>the final assessment package of the candidate for each  examination, consisting of the documents specified in section 18.5 of this  regulatory document</li>
<li>all documentation pertaining to the outcome of any  appeal regarding the candidate&#39;s examination results</li>
</ol>
</li>
</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="PartII"></div>
<h2 id="part-ii" className="mrgn-tp-0">Part II: Requirements for Knowledge-Based Certification Examinations</h2>
<p>This part establishes the required written initial certification examinations, (or oral certification examinations where prior approval  has been given) and the requirements regarding the design, development, conduct and marking of these examinations that must be successfully completed by reactor operator (RO), unit 0 operator (U0O), plant shift supervisor (PSS) and control room shift supervisor (CRSS) candidates.</p>
<p>The knowledge-based examinations must be successfully completed in sequence by each candidate, and pass results must be obtained before the performance-based initial certification examinations are taken.</p>
<div className="module col-md-12">
<p>Refer also to part III of regulatory document RD-204.</p>
</div>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="9"></div>
<h2 id="sec9" className="mrgn-tp-0">9. Written and Oral Certification Examinations</h2>
<p>The required knowledge-based initial certification examinations shall consist of:</p>
<ol>
<li>A general examination: This examination shall examine  the basic knowledge requirements of the position at the NPP where certification  is sought covering the science fundamentals relevant to the operation of that  NPP and the principles of operation of the equipment at that NPP.</li>
<li>An NPP-specific examination: This examination shall  examine the knowledge requirements of the position relevant to the operation of  the NPP where certification is sought covering the principles of nuclear safety  and their application at the NPP, as well as the integrated operation of the  NPP systems including, where applicable, interactions between the systems of a  reactor unit and those of other reactor units and of unit 0, including the relevant  operating documentation.</li>
<li>A supplementary NPP-specific examination: This  examination shall examine specific knowledge requirements of the PSS and of the  CRSS positions that are in addition to those of the RO position and Unit 0 as  applicable. This shall include accident assessment and emergency operations.</li>
</ol>
<p>The design and development of each of the required  examinations specific to each position is described in sections 9.3-10.6.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="9.1"></div>
<h3 id="sec9-1" className="mrgn-tp-0">9.1 Total marks and time limits per certification examination</h3>
<p>In preparation for the design and development of the  examinations (sections 9.3-10.6),  table 2 lists the required certification examinations together with the candidates  to whom the examination applies. Table 2 also provides the required total marks,  the estimated duration each examination must be designed towards and the  maximum allowable time limits for the candidate to complete the examination.</p>
<table className="table table-striped">
<caption className="text-left">
Table 2: Certification examinations with total marks and time limits applicable to existing licensed nuclear power plants
</caption>
<tr>
<th>Certification examination and applicable candidate</th>
<th>Total marks per examination</th>
<th>Estimated examination time limit per design (hours)</th>
<th>Maximum time limit for candidates per examination (hours)</th>
</tr>
<tr>
<td colSpan="4" className="background-accent">General</td>
</tr>
<tr>
<td>for RO, PSS, CRSS candidates</td>
<td>100</td>
<td>3</td>
<td>4</td>
</tr>
<tr>
<td>for U0&nbsp;candidates only</td>
<td>75</td>
<td>2.25</td>
<td>3</td>
</tr>
<tr>
<td colSpan="4" className="background-accent">Station-specific</td>
</tr>
<tr>
<td>for RO, PSS, CRSS candidates</td>
<td>100</td>
<td>4</td>
<td>5</td>
</tr>
<tr>
<td>for U0&nbsp;candidates only </td>
<td>75</td>
<td>3</td>
<td>4</td>
</tr>
<tr>
<td colSpan="4" className="background-accent">Supplementary station specific</td>
</tr>
<tr>
<td>for PSS and CRSS candidates (at NPPs without a unit 0)</td>
<td>60</td>
<td>2</td>
<td>3.5</td>
</tr>
<tr>
<td>for CRSS candidates (at NPPs with a unit 0)</td>
<td>80</td>
<td>2.8</td>
<td>4.5</td>
</tr>
<tr>
<td><p className="mrgn-tp-0">for CRSS candidates (at NPPs with a tritium removal facility)</p>
<div className="module">
<p>Refer to the relevant sections in part III of regulatory document RD-204 pertaining to the tritium removal facility.</p>
</div></td>
<td>90</td>
<td>3.2</td>
<td>5</td>
</tr>
</table>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="9.2"></div>
<h3 id="sec9-2" className="mrgn-tp-0">9.2 Examination bounding envelope</h3>  <p>Written and oral certification examinations shall be  designed to examine the knowledge requirements of a position at the specific  NPP for which initial certification is sought. Each examination shall ensure  that the knowledge objectives for each position, developed in accordance with a  SAT, are adequately tested using the applicable topics within each of the  required topic groups outlined in Appendices B.1-B.11. The design requirements  are specified in section 9.3  under Examination Design and Development.</p>  <p> Licensees shall ensure that:</p>  <ol>
<li>knowledge objectives, specific to their NPP, are being  developed, documented and updated on a regular basis in accordance with a SAT.  The licensees shall inform the CNSC of any major changes to their CNSC approved  knowledge objectives template which may have an impact on the training and  examination envelopes
<div className="module">
<p>The knowledge objectives or learning objectives are specific to each NPP and are developed in accordance with a SAT. The objective template used by multi-unit NPPs was approved by the CNSC in December 2003. Single-unit NPPs use the <em>Generic Station System Knowledge Objectives  for Control Room Operators</em> (GSSKO) document in the development of their NPP-specific learning objectives.<br/>
<br />
The details and the process by which the licensees are to inform the CNSC of any  changes to this template was further confirmed in a letter dated June 14, 2010. These documents are listed in the Reference section.</p>
</div>
</li>
<li>the knowledge objectives selected for a given position meet the following criteria:
<ol className="list-lower-alpha">
<li>each selected objective supports one or more tasks that  are rated as difficult and important in the NPP&#39;s approved, up-to-date  SAT-based job and task analysis for the position
<div className="module">
<p>As part of the job and task analysis phase of SAT for each position, a DIF rating system should be used (D = level of difficulty, I = level of importance, F=frequency of use).</p>
</div>
</li>
<li>the selected objectives cover all the knowledge required for the person to perform safely and competently in the position</li>
<li>the selected objectives are suitable to formulate questions for certification examinations for the position</li>
</ol>
<li>the topic groups adequately cover the different knowledge areas addressed by the knowledge objectives template for each of the positions requiring certification</li>  </ol>  <p>The source of the applicable knowledge objectives that are suitable to formulate questions for an examination for a given position are identified in column two of table 3. Table 3 also identifies the required certification examinations for each position.</p>  <table className="table table-striped">
<caption className="text-left">
Table 3: Positions and nuclear-power-plant-specific knowledge objectives and examinations
</caption>
<tr>
<th>Position</th>
<th>Source of knowledge objectives for the certification examinations</th>
<th>Specific to the nuclear power plant</th>
<th>Required written certification examinations</th>
</tr>
<tr>
<td>RO</td>
<td>RO</td>
<td>At each NPP</td>
<td>RO general plus RO NPP-specific</td>
</tr>
<tr>
<td>U0O</td>
<td>U0O</td>
<td>At each multi-unit NPP with a Unit 0</td>
<td>U0O general plus U0O NPP-specific</td>
</tr>
<tr>
<td>PSS</td>
<td>PSS plus RO</td>
<td>At each single-unit NPP</td>
<td>RO general plus RO NPP-specific plus PSS supplementary NPP-specific</td>
</tr>
<tr>
<td>CRSS </td>
<td>CRSS plus RO</td>
<td>At each multi-unit NPP with no unit 0</td>
<td>RO general plus RO NPP-specific plus CRSS supplementary NPP-specific</td>
</tr>
<tr>
<td>CRSS </td>
<td>CRSS plus U0O plus RO</td>
<td>At each multi-unit NPP with a unit 0</td>
<td>RO general plus RO NPP-specific plus CRSS supplementary NPP-specific with a U0O component</td>
</tr>  </table>  <div className="module">
<p>PSS candidates at multi-unit NPPs go through the CRSS certification training and examination program as a prerequisite to additional requirements for PSS certification. Refer to CNSC regulatory document RD-204, Part III, subpart E. At present, advancement of CRSS to SM at multi-unit NPPs does not require additional certification examinations.</p>  </div>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="9.3"></div>
<h3 id="sec9-3" className="mrgn-tp-0">9.3 Examination design</h3>
<p>The knowledge-based certification examinations shall be designed and developed to be conducted in the form of written examinations. For NPPs where prior concurrence from the CNSC has been sought, the identical  examination may be conducted orally as per section 10.</p>
<p> The examination team, under the direction of the  lead examiner, shall design the examination questions, examination marking  guide, examination checklist and final examination for each position in  accordance with the requirements set out below.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="9.3.1"></div>
<h4 id="sec9-3-1" className="mrgn-tp-0">9.3.1 General examinations for RO, Unit 0, PSS and CRSS candidates</h4>
<p>The examination team shall design the examination  questions as follows:</p>
<ol>
<li>Select one or more specific examination topics for each  of the topic groups listed in either appendix B.1 for RO, PSS and CRSS  candidates or appendix B.2 for Unit 0 candidates.</li>
<li>Prepare, for each specific topic selected, questions  whose answers are worth the number of marks allocated to the topic, according  to the following criteria:
<ol className="list-lower-alpha">
<li>at least 80% of the questions on the certification  examination shall be newly designed and not based upon questions previously used in any examination, test, candidate evaluation or training</li>
<li>no more than 20% of the questions on the certification examination shall be based on previously used questions, and all reused questions must be significantly modified and never before seen by the candidates</li>
<li>to the maximum possible extent, prepare questions that  measure integrated understanding or higher-level knowledge required by ROs or  by U0Os to perform their job competently</li>
<li>select the individual parts of the relevant knowledge  objectives in science fundamentals and equipment principles approved by the  CNSC that will be used to formulate the questions on the corresponding topic, according to the following:
<div className="module">
<p>The knowledge objectives or learning objectives are specific to each NPP and are developed in accordance with a SAT. The objective template used by the multi-unit NPPs was approved by the CNSC in December 2003. Single-unit NPPs should  use the GSSKO document in the development of their NPP-specific learning objectives.</p>
</div>
<ol className="list-lower-roman">
<li>to the maximum possible extent, select objectives that  require integrated understanding or higher-level knowledge
<div className="module">
<p>In order to examine higher-level knowledge, the examination questions should test at the cognitive level of comprehension, application or analysis as defined by Bloom&#39;s taxonomy. For example, questions requiring the candidate to &quot;describe&quot; or to &quot;explain&quot; would be categorized as higher-order learning objectives, while requesting the candidate to &quot;list&quot; or to &quot;state&quot; would be classified as lower-order objectives.</p>
</div>
</li>
<li>objectives shall not be used verbatim to formulate questions
<div className="module">
<p>Ideas for formulating questions can be found in the following documentation:</p>
<ul>
<li>NPP and industry wide significant event reports</li>
<li>operating manuals and operating memos</li>
<li>design manuals and other technical basis documents</li>
<li>NPP safety report</li>
<li>licensee and NPP administrative procedures and associated documentation related to plant operation and maintenance</li>
</ul>
</div>
</li>
</ol>
</li>
</ol>
</li>
<li>verify that each question is operationally focused</li>
<li>develop the examination and corresponding marking guide  as specified in section 9.4</li>
</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="9.3.2"></div>
<h4 id="sec9-3-2" className="mrgn-tp-0">9.3.2 NPP-specific examinations for RO candidates</h4>
<p>The  examination team shall design the examination questions as follows:</p>
<ol>
<li>for each group of topics listed in appendix B.3, select one or  more specific topics for use in the examination</li>
<li>allocate a number of marks to each selected topic such  that the total number of marks for the group is within the range indicated beside  the group in appendix B.3</li>
<li>for each topic selected in 1 above, select from appendix  B.4 one or more knowledge groups to be used for designing the corresponding  examination questions and, using an examination design matrix (EDM) that  outlines the topic groups vertically and the knowledge groups horizontally as  shown in appendix B.8, distribute in the matrix the number of marks for the  topic among the knowledge area(s) selected. Ensure that the total marks  allocated to the various knowledge groups are within the range indicated beside  the group in appendix B.4</li>
<li>for each cell of the EDM where marks are indicated, prepare  questions whose answers are worth the marks indicated in the cell, according to  the following criteria:
<ol>
<li>at least 80% of the questions on the certification  examination shall be newly designed and not based upon questions previously  used in any examination, test, candidate evaluation or training</li>
<li>no more than 20% of the questions on the certification examination  shall be based on previously used questions, and all reused questions must be  significantly modified and never before seen by the candidates</li>
<li>to the maximum possible extent, questions shall measure  integrated understanding or higher-level knowledge required by ROs to perform their job competently
<div className="module">
<p>In order to examine higher-level knowledge, the examination questions should test at the cognitive level of comprehension, application or analysis as defined by the Bloom&#39;s taxonomy.For example,  questions requiring the candidate to &quot;describe&quot; or to &quot;explain&quot; would be categorized as higher-order learning objectives, while requesting the candidate to &quot;list&quot; or to &quot;state&quot; would be classified as the lower-order objectives. Integrated understanding or higher-level knowledge is tested by questions that  require the candidate to state, analyze and describe.</p>
</div>
</li>
<li>when a cell is associated with the generic station system knowledge objectives or with radiation protection knowledge objectives,  select the individual parts of the relevant objectives that will be used to  formulate the questions on the corresponding topic, according to the following:
<ol className="list-lower-roman">
<li>to the maximum possible extent, select GSSKOs according to appendix D.2</li>
<li>avoid repeated use of the same objective in any knowledge  group for different topics</li>
<li>objectives shall not be used verbatim to formulate questions
<div className="module">
<p>Appendix B.4 and appendix D.2 provide the GSSKO requirements. The GSSKO document serves as a reference manual and  accompanying user guide.</p>
<p>These documents define the knowledge of station systems and procedures that ROs of NPPs require to perform their job competently. Altogether, the GSSKOs cover the design of systems, their  instrumentation and control, their operation, overall unit operation and  emergency operation.</p>
<p>The GSSKOs provide NPPs with a template for developing NPP-specific training objectives for RO candidates. The user guide  gives detailed guidance for preparing the NPP-specific system training  objectives and for developing the supporting training material.</p>
</div>
<div className="module">
<p>Ideas for formulating questions can be found in the following  documentation:</p>
<ul>
<li>NPP and industry wide significant event reports</li>
<li>operating manuals and operating memos</li>
<li>design manuals and other technical basis  documents</li>
<li>NPP safety reports</li>
<li>licensee&#39;s and NPP administrative procedures and  associated documentation related to plant operation and maintenance</li>
<li>actual simulator data</li>
</ul>
</div>
</li>
</ol>
</li>
</ol>
</li>
<li>verify that each question on NPP systems and procedures  is within the scope of the applicable GSSKOs, or of the NPP-specific knowledge  objectives derived from them
<div className="module">
<p>For  any question for which specific data from the NPP are needed:</p>
<ul>
<li>obtain the plant or simulation data required to allow completion of the formulation of the question</li>
<li>identify the aspects of the data obtained that may be interesting to explore in the question and complete the formulation of  the question</li>
</ul>
</div>
</li>
<li>develop the examination and corresponding marking guide  as specified in section 9.4</li>
</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="9.3.3"></div>
<h4 id="sec9-3-3" className="mrgn-tp-0">9.3.3 NPP-specific examinations for unit 0 operator candidates</h4>  <p>The examination team shall design the examination questions as follows:</p>  <ol>
<li>select, for each group of topics listed in appendix B.5 one or more specific topics for  use in the examination</li>
<li>allocate a number of marks to each selected topic such  that the total number of marks for the group is within the range indicated beside  the group in appendix B.5</li>
<li>for each topic selected in 1 above, select from appendix  B.6one or more knowledge groups to be used for designing the corresponding  examination questions and, using an examination design matrix (EDM) that  outlines the topic groups vertically and the knowledge groups horizontally  shown in appendix B.8, distribute in the matrix the tentative number of marks  for the topic among the knowledge area(s) selected; ensure that the total marks  allocated to the various knowledge groups are within the range indicated beside  the group in appendix&nbsp;B.6</li>
<li>prepare, for each cell of the EDM where marks are  indicated, questions whose answers are worth the marks indicated in the cell,  according to the following:
<ol className="list-lower-alpha">
<li>at least 80% of the questions on the certification  examination shall be newly designed and not based upon questions previously  used in any examination, test, candidate evaluation or training</li>
<li>no more than 20% of the questions on the certification examination are based on previously used questions, and all reused questions must be significantly modified and never before seen by the candidates</li>
<li>to the maximum possible extent, prepare questions that  measure integrated understanding or higher-level knowledge required by U00s to  perform their job competently
<div className="module">
<p>In order to examine higher-level knowledge, the examination questions should test at the cognitive level of comprehension, application or analysis as defined by Bloom&#39;s taxonomy. For example, questions requiring the candidate to "describe" or to "explain" would be categorized as higher-order learning objectives while requesting the candidate to "list" or to "state" would be classified as the lower-order objectives. Integrated understanding or higher-level knowledge are questions that require the candidate to state, analyze and describe.</p>
</div>
</li>
<li>when a cell is associated with GSSKOs or with radiation  protection knowledge objectives, select the individual parts of the relevant  objectives that will be used to formulate the questions on the corresponding  topic, according to the following:
<ol className="list-lower-roman">
<li>to the maximum possible extent, select GSSKOs according  to appendix D.4</li>
<li>avoid repeated use of the same objective in any knowledge  group for different topics</li>
<li>objectives shall not be used verbatim to formulate  questions</li>
</ol>
</li>
</ol>
</li>
<li>verify that each question on NPP systems and procedures is within the scope of the applicable GSSKOs, or of the NPP-specific knowledge  objectives derived from them
<div className="module">
<p>For  any question for which specific data from the NPP are needed:</p>
<ul>
<li>obtain the plant or simulation data required to allow completion of the formulation of the question</li>
<li>identify the aspects of the data obtained that may be interesting to explore in the question and complete the formulation of  the question</li>
</ul>
</div>
</li>
<li>develop the examination and corresponding marking guide  as specified in section 9.4</li>  </ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="9.3.4"></div>
<h4 id="sec9-3-4" className="mrgn-tp-0">9.3.4 Supplementary  NPP-specific examinations for PSS and CRSS candidates</h4>
<p>The examination team shall design the examination  questions as follows:</p>
<ol>
<li>select, for each of the topic groups listed in appendix  B.7, one or more specific topics for use in the examination</li>
<li>allocate a number of marks to each topic selected such  that the total number of marks for the group is within the range indicated beside  the group in appendix B.7</li>
<li>prepare, for each specific topic selected, questions  whose answers are worth the number of marks allocated to the topic, according  to the following:
<ol className="list-lower-alpha">
<li>at least 80% of the questions on the certification  examination shall be newly designed and not based upon questions previously  used in any examination, test, candidate evaluation or training</li>
<li>no more than 20% of the questions on the certification examination  are based on previously used questions, and all reused questions must be  significantly modified and never before seen by the candidates</li>
<li>to the maximum possible extent, prepare questions that  measure integrated understanding or higher-level knowledge required by PSSs or  by CRSSs to perform their job competently</li>
<li>select the individual parts of the relevant knowledge  objectives for PSS or for CRSS approved by the CNSC that will be used to  formulate the questions on the corresponding topic, according to the following:
<ol className="list-lower-roman">
<li>to the maximum possible extent, select objectives that  require integrated understanding or higher-level knowledge
<div className="module">
<p>In  order to examine higher-level knowledge, the examination questions should test  at the cognitive level of comprehension, application or analysis as defined by Bloom&#39;s  taxonomy.For example, questions  requiring the candidate to &ldquo;describe&rdquo; or to &ldquo;explain&rdquo; would be categorized as  higher-order learning objectives, while requesting the candidate to &ldquo;list&rdquo; or to  &ldquo;state&rdquo; would be classified as the lower-order objectives. Integrated  understanding or higher-level knowledge are questions that require the  candidate to state, analyze and describe.</p>
</div>
</li>
<li>objectives shall not be used verbatim to formulate  questions
<div className="module">
<p>Ideas for formulating questions can be found in the  following documentation:</p>
<ul>
<li>NPP and industry wide significant event reports</li>
<li>operating manuals and operating memos</li>
<li>design manuals and other technical basis  documents</li>
<li>NPP safety reports</li>
<li>licensee&#39;s and NPP administrative procedures and  associated documentation related to plant operation and maintenance</li>
<li>actual simulator data</li>
</ul>
</div>
</li>
</ol>
</li>
</ol>
</li>
<li>check that each question is within the scope of the  knowledge objectives for PSSs or for CRSSs approved by the CNSC
<div className="module">
<p>For  any question for which specific data from the NPP is needed:</p>
<ul>
<li>obtain the plant or simulation data required to  allow completion of the formulation of the question</li>
<li>identify the aspects of the data obtained that  may be interesting to explore in the question and complete the formulation of  the question</li>
</ul>
</div>
</li>
<li>develop the examination and corresponding marking guide  as specified in section 9.4</li>
</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="9.4"></div>
<h3 id="sec9-4" className="mrgn-tp-0">9.4 Examination and marking guide development</h3>
<p>The examination team, under the direction of the  lead examiner, shall develop a given examination and the answers to that  examination in a marking guide in accordance with the following requirements:</p>
<ol>
<li>ensure the cover page of the examination is of similar  format and contains the information shown in appendix&nbsp;B.9</li>
<li>ensure the formatting of the questions is similar to that shown in appendix B.10
<div className="module">
<p>Group together the questions that are logically related, integrating  them into a single multi-part question, according to the following guidelines: </p>
<ul>
<li>the parts and subparts of the question are arranged in a logical order</li>
<li>the answer to a part of the question is not completely dependent on the answer to a previous part</li>
</ul>
</div>
</li>
<li>prepare the answers in a marking  guide for each given examination</li>
<li>ensure that the answers for all questions:
<ol className="list-lower-alpha">
<li>are in line with the intent of the questions</li>
<li>are complete and technically accurate</li>
<li>contain only the information specifically asked by the  question</li>
<li>reflect the level of knowledge that candidates are  expected to have on the topics examined</li>
<li>do not conflict with the information contained in the  frozen documentation</li>
<li>are broken into elements used to determine the number  of marks to be assigned to the question</li>
</ol>
</li>
<li>identify,  for each question, the reference documents required to prepare the answer and  check that the revision number and date of issue of each document correspond to  those of the frozen documentation</li>
<li>ensure  that the level of difficulty of each question is appropriate to discriminate  between those candidates who have sufficient understanding of the subject  covered by the question and those who do not.</li>
<li>determine  the number of marks to be allocated to each question using the relevant table  in appendix&nbsp;B.11
<div className="module">
<p>The total number of marks to be allocated to  each question and the estimated time limits are determined by using the  applicable table of elements in appendix B.11.</p>
</div>
</li>
<li>ensure  the examination has the total number of marks allocated for each question and  has the breakdown of marks with the corresponding number of elements for each  part of the question as shown in appendix B.11
<div className="module">
<p>To assist the candidate, the estimated time  to answer each part of a question can also be shown in addition to the number  of elements and marks which typically appear to the left of the letter  designating the question part.</p>
</div>
</li>
<li>ensure the cover page of the marking  guide is of similar format and contains the information shown in appendix  B.12</li>
<li>ensure  the formatting of the answers in the marking guide is similar to that shown in appendix  B.13</li>
<li>finalize the examination and corresponding  marking guide as specified in section 9.5 </li>
</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="9.5"></div>
<h3 id="sec9-5" className="mrgn-tp-0">9.5 Final examination and marking guide</h3>
<p>The examination team shall finalize a given examination and corresponding marking guidein accordance with the following requirements:</p>
<ol>
<li>ensure each question and its answer is clear and technically accurate
<div className="module">
<p>This  includes the verification that the identification codes of equipment and  documents used in the questions are correct.</p>
</div>
</li>
<li>ensure the examination has been verified that the number of marks is based on the total number of elements in the answer to all parts of the questions
<div className="module">
<p>This  includes the verification that the breakdown of each answer into elements is  appropriate.</p>
</div>
</li>
<li>ensure the questions clearly identify any reference  material given to the candidates and give appropriate instructions for its use</li>
<li>ensure that any instruction or other information in a  question quoted from licensee&#39;s or NPP documentation appears verbatim</li>
<li>ensure for each question, the reference material given  to the candidates is clearly identified</li>
<li>ensure no reference material is given to a candidate when  a question covers an area that candidates have to know from memory</li>
<li>ensure the content of approved procedures and  flowsheets given as reference material is not altered</li>
<li>ensure that whenever an acronym is used in a question,  it is defined the first time it appears in that question.
<div className="module">
<p>In each question, the key words that  indicate the degree of development required in the answer should be typed in bold and underlined to help candidates  to give a complete answer.</p>
<p>The examination should also have  only one question per page and the stems used in a question should be placed  immediately before the parts or subparts of the question to which they apply.</p>
</div>
</li>
<li>compile a package containing the questions with their  answers, a copy of the reference material used to prepare each answer and the  knowledge objectives covered by each question</li>
<li>complete  an examination checklist similar  to that shown in appendix B.14 and confirm that the examination meets the criteria  specified in this checklist</li>
<li>ensure  the final version of the EDM, the examination, its marking guide and the  examination checklist are verified, approved and signed by the lead examiner  and the training manager</li>
<li>ensure no changes are made to an approved  examination and corresponding marking guide without the prior concurrence of  the lead examiner and training manager </li>
</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="9.6"></div>
<h3 id="sec9-6" className="mrgn-tp-0">9.6 Examination validation</h3>
<p>The examination team shall, under the direction of the lead examiner, ensure that each certification examination for a given position is validated and meets or exceeds the requirements set out in this  regulatory document prior to the conduct of the examination.</p>
<div className="module">
<p>A validation  is performed to ensure that a qualified candidate for the position for which  the examination is designed has sufficient time and information to answer the  questions.</p>
</div>
<p>This validation shall be performed prior to  obtaining the required approvals of the marking guide for the conduct of a  given examination.</p>
<p> At a minimum, this examination validation shall be  done: </p>
<ol>
<li>in real time, by a person currently or previously  certified at the NPP for the position for which the examination is designed and  who has not been involved in any aspect of the examination design, acting as  the candidate  </li>
<li>to confirm that the applicable requirements in sections  9.4 and 9.5 are met </li>
</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="10"></div>
<h2 id="sec10" className="mrgn-tp-0">10. Conduct of Knowledge-Based Certification Examinations</h2>
<p>The licensee shall have documented policies,  processes and procedures regarding the conduct of knowledge-based examinations.</p>
<p> The licensee shall ensure:</p>
<ol>
<li>that knowledge-based certification examinations are  conducted in the form of written examinations and invigilated at all times </li>
<li>that under exceptional circumstances, when an identical  written examination may need to be conducted orally with a candidate, prior notification  has been provided to the CNSC; the training manager shall formally notify the CNSC  of the need to conduct a specific certification examination orally; the request  must be submitted to the CNSC with written justification within a reasonable  time before the anticipated scheduling of the examination
<div className="module">
<p>An example of an exceptional circumstance would be if a candidate was  unable to write a given examination as a result of an unanticipated incident  (e.g., physical injury).</p>
</div>
</li>
<li>that candidates who voluntarily withdraw from an  examination or cheat be automatically assigned a fail grade</li>
<li>a secure location for conducting an examination with  restricted access preventing contact between candidates and other personnel </li>
<li>acceptable  seating of candidates for a written examination to allow for sufficient spacing  between them to ensure confidentiality of the examination and prevent cheating</li>
<li>examination confidentiality and security </li>
<li>that all applicable security agreements have been  signed prior to the conduct of an examination </li>
<li>the control of all examination material</li>
<li>the control of any material brought into and out of the  examination room including handheld electronic devices</li>
<li>that  only reference material that is part of the examination package shall be  permitted
<div className="module">
<p>Candidates should not have access to  any reference material other than the material given with the examination. The  candidates should not bring anything in or take anything out of the examination  room. Only the invigilator or lead examiner may provide the candidates with: </p>
<ul>
<li>the  examination questions and applicable reference material attached </li>
<li>booklets  for the candidates to write in their answers </li>
<li>blank  writing paper </li>
<li>articles  such as pens, pencils, highlighters, erasers, ruler, a magnifying glass and a  non-programmable calculator</li>
</ul>
</div>
</li>
<li>documented  invigilation requirements for written examinations including a form with rules  for the invigilator and the requirement for individual attestations </li>
<li>that  for washroom breaks during the conduct of an examination, only one candidate at  a time is permitted to leave the examination room under escorted supervision,  and that communication with any person shall be prohibited and can result in a  fail grade</li>
<li>the  presence of an invigilator in the examination room at all times during a  written examination
<div className="module">
<p>The  invigilation form and the instructions should be similar to that found in appendix&nbsp;D.6.</p>
</div>
</li>
<li>documented  rules of conduct and instructions for the candidate and the signing of a  security agreement </li>
<li>documented  rules of conduct and instructions for the examination team including the  operator of the audiovisual recording system for an oral examination
<div className="module">
<p>The  security agreements and individual instructions should be similar to those found  in appendix&nbsp;D.1.</p>
</div>
</li>
<li>that  the examiners do not provide any additional information or clarification of  questions to the candidates</li>
<li>that  the examinations are conducted in accordance with the applicable maximum time  limits set in table&nbsp;2 of this document, with no time extensions permitted</li>
<li>that oral examinations:
<ol className="list-lower-alpha">
<li>are conducted by the lead examiner and at least one  other examiner who has participated in the examination design and development,  and only the operator of the recording system shall be permitted in the examination  room with the examiners</li>
<li>are recorded; the audiovisual system must be capable of  recording clearly the questions of the examiners and the answers of a candidate  during the examination
<div className="module">
<p>The audiovisual recordings need to be of high quality to clearly distinguish between what is being asked by the examiners from what is being answered by the candidate during an oral examination. An oral examination will not be recognized by the CNSC unless it has been properly recorded. In addition, these recordings are used by the CNSC when performing compliance activities.</p>
</div>
</li>
</ol>
</li>
<li>that during an oral examination:
<ol className="list-lower-alpha">
<li>a copy of the questions are given to the candidate one  at a time and read out by an examiner on the examination team</li>
<li>that all answers given by the candidate are documented by  each examiner on the examination team in their copy of the marking guide </li>
<li>if a candidate appears to have missed or misunderstood  a question, the examination team rephrases the question without giving hints on  the answer</li>
</ol>
</li>
</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="11"></div>
<h2 id="sec11" className="mrgn-tp-0">11. Marking of Examinations</h2>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="11.1"></div>
<h3 id="sec11-1" className="mrgn-tp-0">11.1 General requirements for written and oral examinations</h3>
<p>The licensee shall have documented  policies, processes and procedures in place regarding the marking of  knowledge-based examinations. This shall include:</p>
<ol>
<li>examinations shall be marked as soon as practicable
<div className="module">
<p>The  marking of examinations is an integral part of the administration of the  certification examination process. Marking should be completed immediately  following the conduct of a certification examination. This regulatory document  does not stipulate an absolute deadline for marking examinations to allow  licensees to deal with unforeseen circumstances. However, as part of administering  the certification examinations, licensees should have the necessary resources at  the onset of planning a given examination.</p>
</div>
</li>
<li>the marking of examinations shall only begin when all  candidates have been examined  </li>
<li>only the lead examiner and the examiners involved in  the design of the examination shall perform the first and second marking of the  examinations</li>
<li>the first and second marking of the examinations shall  be done in accordance with sections&nbsp;11.2-11.4</li>
<li>for an oral examination, the first and second marking shall  only be performed by the examiners who conducted the examination</li>
<li>the first marking shall be completed on all candidates  prior to performing the second marking</li>
<li>the second marking shall be performed on selected candidates by an examiner who did not perform the first marking on those candidates</li>
<li>to ensure independence between the first and second marking  of a written examination, the second marker shall not have access to the  results of the first marking until the second marking has been completed</li>
<li>an examination result form that contains the information in format similar to that shown in appendix&nbsp;B.15 shall be completed for each candidate</li>
</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="11.2"></div>
<h3 id="sec11-2" className="mrgn-tp-0">11.2 First marking of written and oral examinations</h3>
<p>The lead examiner shall ensure that the first marking is performed in accordance with the following:</p>
<ol>
<li>use a new copy of the approved marking guide for each  candidate</li>
<li>mark the answer of all candidates to a given question  before proceeding to mark the next question</li>
<li>mark the candidate&#39;s answers against the approved  marking guide by checking-off the answer elements directly in the candidate&#39;s  marking guide</li>
<li>for each question, record in the candidate&#39;s marking  guide:
<ol className="list-lower-alpha">
<li>any misconceptions, errors and deficiencies, and their  significance</li>
<li>any deficiencies in the answer which are not, or not  sufficiently, accounted for by the marking guide</li>
<li>any relevant information in the answer that is not  included in the marking guide</li>
</ol>
</li>
<li>once marking of a question is completed, record in an  examination comments file:
<ol className="list-lower-alpha">
<li>any perceived difficulty encountered by a number of  candidates with the question, as indicated by answers that are consistently  incomplete or different from the answer in the approved marking guide</li>
<li>any recommendation for changes to the answer in the approved  marking guide that the lead examiner considers necessary before the marking  guide is authorized</li>
</ol>
</li>
<li>once the first marking of all candidates is completed:
<ol className="list-lower-alpha">
<li>review the answers of each candidate to determine  whether credit may be given for an answer element not mentioned explicitly in a  candidate&#39;s answer to a question, because it is concluded from an answer to a  related question that the candidate has this knowledge
<div className="module">
<p>When  marking a written examination that was conducted orally, the examiners should  reference the recordings as required to verify the answers made by the  candidate. </p>
</div>
</li>
<li>document the reasons for giving such credits in the  candidate&#39;s marking guide</li>
<li>determine the significance of misconceptions, errors  and deficiencies recorded in each candidate&#39;s marking guide and document any  conclusions in the marking guide</li>
</ol>
</li>
<li>calculate the individual question scores and  examination scores obtained by each candidate</li>
<li>assign a pass or fail result in accordance with section  11.4</li>
<li>on the cover page of each candidate&#39;s marking guide  document the marks obtained by the candidate and the recommended examination  results</li>
<li>complete  an examination result form for each candidate</li>
</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="11.3"></div>
<h3 id="sec11-3" className="mrgn-tp-0">11.3 Second marking of written and oral examinations and reconciliation of results</h3>
<p>Upon completion of the first marking of all candidates in  accordance with sections 11.2 and 11.4, the second marking of candidates shall  be performed in accordance with the following:</p>
<ol>
<li>the training manager shall:
<ol className="list-lower-alpha">
<li>approve the candidates selected by the examiners to  undergo a second marking </li>
<li>select a minimum of one candidate marked by each  examiner who performed the first marking
<div className="module">
<p>The  minimum second marking requirement is to perform a calibration check on the  accuracy of the examiner&#39;s guide and assessment of the marking process.</p>
</div>
</li>
<li>select candidates for whom the first marker recommends  a second marking</li>
<li>ensure the second marking of a candidate is performed  by the member of the examination team who did not perform the first marking</li>
<li>ensure the second marking is performed one candidate at  a time using the authorized marking guide in accordance with the instructions  for the first marking given in paragraphs 1 through 10 in section 11.2</li>
</ol>
</li>
<li>the lead examiner shall select candidates for a second  marking according to the following criteria:
<ol className="list-lower-alpha">
<li>select candidates with an examination score in the  range from 57&nbsp;percent to 63&nbsp;percent</li>
<li>other candidates at the discretion of the training  manager or lead examiner</li>
</ol>
</li>
<li>the examiners shall:
<ol className="list-lower-alpha">
<li>meet to resolve any discrepancies between the two  markings and document how these discrepancies were resolved</li>
<li>review the complete examination of one candidate at  time</li>
<li>document the reconciled examination results and the  justifications in the original knowledge-based examination result form for each candidate.</li>
<li>ensure that any final changes made to  answers in the approved marking guide and the examination result form are reviewed  and authorized by the training manager </li>
</ol>
</li>
</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="11.4"></div>
<h3 id="sec11-4" className="mrgn-tp-0">11.4 Assignment of examination results</h3>
<p>The examination team shall  assign a pass or fail result to a given examination in accordance with the  following criteria:</p>
<ol>
<li>a pass result shall be assigned to an examination if a  candidate has scored 70&nbsp;percent or higher in the examination</li>
<li>a fail result shall be assigned to a given examination if  a candidate has either:
<ol className="list-lower-alpha">
<li>not met the pass criteria above</li>
<li>met the pass criteria above but has shown knowledge  deficiencies the lead examiner considers to be serious</li>
</ol>
</li>
</ol>
<p>The examination team shall</p>
<ol className="list-lower-alpha">
<li>document the final examination results and the  justifications in the original knowledge-based examination result form for each  candidate </li>
<li>ensure the results form is reviewed and signed by the  training manager</li>
</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="12"></div>
<h2 id="sec12" className="mrgn-tp-0">12. Examination Follow-Up</h2>
<ol>
<li>The examination team shall document and report to the  training manager any knowledge deficiencies revealed by a candidate or by an  examination.
<div className="module">
<p>The  deficiencies revealed by an examination should include those found in the  examination design, marking, in NPP procedures or training program.</p>
</div>
</li>
<li>The examiners shall ensure that a final marking package  is compiled for each candidate consisting of:
<ol className="list-lower-alpha">
<li>the completed knowledge-based examination result formsigned by both examiners and authorized  by the training manager</li>
<li>the final scores obtained in the examination</li>
<li>the consolidated marking guide signed by both examiners</li>
</ol>
</li>
<li>The training manager shall:
<ol className="list-lower-alpha">
<li>after authorizing the results of any given knowledge-based  certification examination, ensure that a copy of the approved examination, authorized  marking guides, examination checklists, EDMs and examination result forms are made  available to the CNSC upon request and that the CNSC is formally notified of  the results of each candidate</li>
<li>ensure that each candidate who was assigned a pass result receives and completes remedial training and formal evaluations in every  area identified as deficient by the marking process to confirm and document that the candidate has successfully attained the required level of knowledge required to competently perform in the certified position</li>
<li>ensure that any deficiencies revealed in paragraph 1 above are addressed</li>
</ol>
</li>
</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="PartIII"></div>
<h2 id="part-iii" className="mrgn-tp-0">Part III: Performance-Based Certification Examination Requirements</h2>
<p>This part establishes the required simulator-based initial certification examinations and the requirements regarding the design,  development, conduct and grading of these examinations that must be  successfully completed by reactor operator (RO), unit 0 operator (U0O), plant shift supervisor (PSS) and control room shift supervisor (CRSS) candidates who  have successfully completed all the prerequisite requirements including the required knowledge-based initial certification examinations.</p>
<p>All performance-based examinations shall be conducted in a full-scope simulator.</p>
<div className="module">
<p>Refer to CNSC regulatory document RD-204 for the examination requirements and prerequisites.</p>
</div>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="13"></div>
<h2 id="sec13" className="mrgn-tp-0">13. Simulator-Based Certification Examinations</h2>
<p>The required simulator-based examinations shall consist of a number of test scenarios that examine the performance requirements of each position relevant to the operation of the NPP where initial certification  is sought. The examination specific to the position shall cover a series of NPP  malfunctions that creates abnormal NPP conditions, failures and transients  requiring the candidates to demonstrate their skills in all applicable competency  areas. The required categories of malfunctions are described in subsection 13.4.</p>
<p> The test scenarios shall be designed to measure the  candidate&#39;s level of competency in five generic competency areas at the  specific NPP:</p>
<ol>
<li>monitoring </li>
<li>actions taken without reference to procedures</li>
<li>diagnosis and decision making </li>
<li>procedure compliance </li>
<li>communication and crew interaction skills </li>
</ol>
<p>Over the entire examination, the candidates shall be  tested at least 25 times in each of the competency areas, with the exception of  competency area 2 (actions taken without reference to procedures) where the  candidates shall be tested at least 15 times. The required competency areas are  described in subsection 13.5. </p>
<p> The required performance-based initial certification  examinations shall be as follows:</p>
<ol>
<li>Reactor operator examination:  This examination shall consist of three comprehensive  test scenarios (CTS). These test scenarios examine the performance requirements  of the RO position relevant to the operation of the single-unit or multi-unit  NPP where initial certification is sought</li>
<li>Unit 0 operator examination: This examination shall consist  of two CTSs at NPPs that have a Unit 0. These test scenarios examine the  performance requirements of the U0O position relevant to the operation of the  applicable multi-unit NPP where initial certification is sought</li>
<li>Plant shift supervisor examination:  This examination shall consist of two CTSs  and two abridged test scenarios (ATSs), including a number of specific standard  questions. These test scenarios examine the performance requirements of the PSS  position relevant to the operation of the single-unit NPP where initial certification  is sought specifically covering the necessary skills for when the RO is  temporarily absent from the control room</li>
<li>Control room shift supervisor examination:  This examination shall consist of two CTSs,  three diagnostic test scenarios (DTSs) and one panel check test scenario(PCTSs), including several specific standard  questions. These test scenarios examine the performance requirements of the  CRSS position relevant to the operation of the multi-unit NPP where initial certification  is sought</li>
</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="13.1"></div>
<h3 id="sec13-1" className="mrgn-tp-0">13.1 Test scenario descriptions</h3>
<p>The required test scenarios referred to above that shall  form the examinations relevant to the positions at an NPP are as follows:</p>
<ol>
<li>
<p className="mrgn-tp-0">CTS: This shall be a dynamic test scenario consisting  of an integrated sequence of primary and secondary malfunctions that simulates  a succession of abnormal NPP conditions, failures or transients requiring the  candidates to respond to in accordance with the NPP-documented performance  expectations.</p>
<p>For the PSS and CRSS positions, these tests also include a number of specific standard  questions at the end of the dynamic portion of each test. The questions are  designed to determine the significant concerns the candidates have at the end  of each test scenario including the levels of impairment, to outline the required  course of actions to address these concerns and determine the priority for  these actions.</p>
</li>
<li>
<p className="mrgn-tp-0">ATS:  This shall  be a dynamic test scenario consisting of a number of primary and secondary  malfunctions that simulates a number of abnormal NPP conditions, failures or  transients, requiring PSS candidates to demonstrate their ability to respond to  these abnormal situations when the RO is temporarily absent from the control  room.</p>
<p>For the PSS position, these tests also include several specific standard questions at the end of the dynamic portion of each test. The questions are designed to determine the accuracy of the candidates&#39; diagnosis, any other observed  problems, to determine the significant concerns candidates have at the end of each test scenario and to outline the required course of actions and the priority for these actions.</p>
</li>
<li>
<p className="mrgn-tp-0">DTS: This shall be a dynamic test scenario consisting  of a single primary malfunction and a number of secondary malfunctions  requiring the CRSS candidates to demonstrate their ability to:</p>
<ol>
<li>independently monitor the evolution of multi-unit NPP  conditions</li>
<li>recognize abnormalities </li>
<li>determine the significance</li>
<li>diagnose malfunctions</li>
<li>select the applicable procedures</li>
<li>determine the required course of actions when  procedures do not exist or are deficient</li>
</ol>
<p>For the CRSS position, these tests also include a number of specific standard questions at the end of the dynamic portion of each test. The questions are designed to determine the accuracy of the candidates&#39; diagnosis, any other observed problems, to determine the significant concerns candidates have at the end of each test scenario including the levels of impairment, and to outline the required course of actions and the priority for these actions. </p>
</li>
<li>
<p className="mrgn-tp-0">PCTS: This shall be a non-dynamic test scenario during  which NPP conditions are stable requiring the candidates to demonstrate their  ability to perform a verification task of control room panels relevant to the  CRSS position by recognizing panel anomalies or abnormal conditions and by  determining the significance.</p>
<p>For the CRSS position, this test also includes a number of specific standard  questions at the end of the test scenario. The questions are designed to  demonstrate the candidates&#39; ability to determine the significance of the  anomalies and abnormal conditions and the required course of actions to address  them.</p>
</li>
</ol>
<p>The criteria for the test scenarios and the specific  standard questions are covered in section 14  under &quot;examination design and development&quot;.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="13.2"></div>
<h3 id="sec13-2" className="mrgn-tp-0">13.2 Test scenario and examination time durations</h3>
<p>Table IV summarizes the required number and type of  test scenarios in an examination for each position requiring certification, and  the estimated test scenario dynamic duration for each scenario. The table also  provides examination duration estimates for each test scenario and examination.</p>
<table className="table table-striped">
<caption className="text-left">
Table 4:  Summary of the number and type of test scenarios required in an examination per  position and estimated time durations of test scenarios and examinations
</caption>
<tr>
<th>Position </th>
<th>Number and type of required test scenarios (plus the number of
required standard questions) </th>
<th>Estimated
test scenario dynamic duration and estimated examination duration<br />
(not including the standard questions) </th>
</tr>
<tr>
<td><p>RO </p></td>
<td><p>3
CTS</p></td>
<td><p>50
minutes per CTS </p>
<p>3 hours
for the total RO examination </p></td>
</tr>
<tr>
<td><p>U0O</p></td>
<td><p>2
CTS</p></td>
<td><p>60
minutes per CTS</p>
<p>2.5
hours for the total U0O examination </p></td>
</tr>
<tr>
<td><p>PSS</p></td>
<td><p>2 CTS
(+ 2 standard questions)</p>
<p>plus</p>
<p>2 ATS
(+ 2 standard questions)</p></td>
<td><p>50
minutes per CTS <br />
25
minutes per ATS </p>
<p>3 hours
for the total PSS examination </p></td>
</tr>
<tr>
<td><p>CRSS</p></td>
<td><p>2 CTS
(+ 2 standard questions)</p>
<p>plus</p>
<p>3 DTS
(+ 5 standard questions)</p>
<p>plus</p>
<p>1
PCTS (+ 3 standard questions)</p></td>
<td><p>50
minutes per CTS <br />
15
minutes per DTS <br />
15
minutes for the PCTS</p>
<p>3 hours
for the total CRSS examination </p></td>
</tr>
</table>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="13.3"></div>
<h3 id="sec13-3" className="mrgn-tp-0">13.3 Examination bounding envelope</h3>
<p>Simulator-based certification examinations shall be designed and developed to examine the performance requirements of a position at  the NPP for which initial certification is sought. Each simulator-based certification examination shall consist of a specific number of test scenarios with a defined number and type of NPP malfunctions to test all the applicable competency areas for the position.</p>
<p>No previously conducted test scenario shall be reused in its entirety to design and conduct another test scenario or certification examination.</p>
<div className="module">
<p>Once a test scenario or a certification examination has been conducted, it can not be used again. However, a test scenario may be modified to be used in the design and development of another certification examination.</p>
</div>
<p>The following subsections outline the categories of NPP malfunctions and the competency areas required for the design and development of each certification examination detailed in section 14.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="13.4"></div>
<h3 id="sec13-4" className="mrgn-tp-0">13.4 Primary and secondary malfunctions</h3>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="13.4.1"></div>
<h4 id="sec13-4-1" className="mrgn-tp-0">13.4.1 Primary malfunctions</h4>
<p>A primary malfunction shall consist of a failure of  equipment, of a control device, of a component of a system, or a combination of  such failures, that creates at the time of its occurrence during a  simulator-based test scenario the main abnormal condition, failure or transient that must be addressed by the candidate.</p>
<p>Primary malfunctions shall be divided into the  following four categories:</p>
<h5>Category 1: Malfunctions requiring the execution of a routine operation</h5>
<p>Any deterioration or failure of one or more  components or pieces of equipment affecting a single system that requires the  candidate to perform a routine equipment changeover, within a limited time  frame, to prevent equipment damage or a system transient due to an impending  automatic action to protect the equipment involved. If properly addressed, such a primary malfunction will not cause any significant system or unit transient.</p>
<p>Note: Category 1 primary malfunctions shall not to be used in examinations for PSS or CRSS candidates. </p>
<div className="module">
<p>Examples of Category 1 malfunctions include:</p>
<ul>
<li>deteriorating conditions on an operating pump that requires a changeover to a standby pump before pump damage occurs</li>
<li>a field report of a problem with an operating piece of equipment that requires a reconfiguration of a system</li>
<li>a request from an RO or the electrical grid operator that requires a routine reconfiguration of a system operated by U0Os</li>
</ul>
</div>
<h5>Category  2: Malfunctions requiring the execution of a non-routine operation with no immediate significant reactor unit transient</h5>
<p>Any deterioration or failure of one or more components or pieces of equipment affecting one or more systems that requires the candidates to perform or direct non-routine actions, within a limited time frame, for one of the following reasons:</p>
<ul>
<li>to prevent equipment or system damage while minimizing the deterioration of system, unit or NPP conditions resulting from these  actions</li>
<li>to minimize the deterioration of system, unit or NPP conditions following any automatic action to protect the equipment involved</li>
<li>to prevent or correct an impairment of a safety or safety support system</li>
</ul>
<p>If properly addressed, such a primary malfunction occurring on a reactor unit will not by itself cause a change in reactor power or in turbine-generator load of greater than 10%. However, a change in reactor  power or in turbine-generator load of greater than 10% may subsequently take place due to the required operator actions. </p>
<div className="module">
<p>Examples  of Category 2 malfunctions include:</p>
<ul>
<li>while operating at full power, increasing  temperature of a bearing of a main heat transport pump that requires the pump  to be shut down before damage occurs (Example valid for plants designed with no  standby main heat transport pump)</li>
<li>loss of both heat transport feed pumps</li>
<li>heat transport pressure and inventory control  program instrumentation failures that require a controlled reduction of reactor  power and a transfer of pressure and inventory control to an analogue control  circuit</li>
<li>loss of heat transport system inventory outside  the heat transport system boundary that is within the make-up capability of the  available feed pumps</li>
<li>failure of an electrical distribution panel that  supplies instrumentation and equipment of a single channel of one or more  special safety systems, with no immediate effect on reactor power</li>
<li>a failure in the plant switchyard that requires  a non-routine reconfiguration of the main output system</li>
<li>loss of pressure control in the negative  pressure containment system at multi-unit plants</li>
</ul>
</div>
<h5>Category 3: Malfunctions  causing a significant reactor unit transient</h5>
<p> Any failure of one or more components or pieces of  equipment that causes a change in reactor power or in turbine-generator load of  greater than 10%.</p>
<p> This  category also includes any malfunction other than those causing an emergency  condition, as defined under Category 4 below, that results in any one or any  sequence of the following:</p>
<ol>
<li>reactor  setback</li>
<li>reactor  stepback</li>
<li>reactor trip </li>
<li>turbine  trip, runback or load rejection</li>
</ol>
<div className="module">
<p>Examples  of Category 3 malfunctions include:</p>
<ul>
<li>main heat transport pump trip during full power  operation</li>
<li>main generator load rejection</li>
<li>any malfunction other than those causing an  emergency condition, as defined under Category 4 below, that results in any one  or any sequence of the following:
<ul>
<li>reactor setback</li>
<li>reactor stepback</li>
<li>reactor trip</li>
<li>turbine trip</li>
</ul>
</li>
</ul>
</div>
<h5>Category 4: Malfunctions  causing an emergency condition</h5>
<p> Any failure of one or more components or pieces of  equipment that results in one of the following emergency conditions affecting  one or more reactor units and the application of one or more of the applicable  emergency operating procedures:</p>
<ol>
<li>loss of heat transport system inventory on a reactor  unit: defined as a sustained loss of inventory outside the heat transport  system envelope that is greater than the make-up capability of the available  feed pumps or that requires the manual or automatic initiation of the emergency  core cooling system; primary malfunctions that may cause this emergency  condition include boiler tube failures</li>
<li>loss of steam pressure on a reactor unit: defined as  any sustained loss of steam pressure that causes a shutdown system trip on low  heat transport system pressure or any steam line break that creates a  widespread hazard to NPP personnel and equipment</li>
<li>total loss of Class IV, Class III or Class II  electrical power on one or more units, as appropriate</li>
<li>total loss of Class IV and Class III electrical power  on one or more units, as appropriate</li>
<li>loss of instrument air on a reactor unit: defined as a  non-recoverable loss of instrument air pressure</li>
<li>loss of boiler feedwater on a reactor unit: defined as  a sustained loss of feedwater to the boilers that requires the use of a back-up  heat sink; auxiliary boiler feed pumps or feedwater ties are not considered as  back-up heat sinks in this context</li>
<li>total loss of high- or low-pressure service water on a  reactor unit: includes a loss of powerhouse upper level service water at  Darlington NGS, if the loss is due to a break, and a loss of recirculated  service water system at a 600 MW plant</li>
<li>complete loss of both control computers of a reactor  unit</li>
</ol>
<p>Note: Only those Category 4 primary malfunctions  that require a complex intervention by U0Os shall be credited as a Category 4 primary  malfunction in test scenarios for U0O candidates.</p>
<div className="module">
<p>Due to the differences in  design of the CANDU plants in Canada,  emergency conditions may need to be added to this core list for a given NPP.</p>
<p>Emergency conditions that meet  either of the following criteria can also be added to the list for a given NPP:</p>
<ul>
<li>other accident conditions analyzed in the NPP safety report</li>
<li>any other condition resulting from a major failure that represents a threat to the integrity of the fuel sheath, of the heat transport system or of the containment boundary</li>
</ul>
<p>The licensee should notify the CNSC of any changes to the core list of emergency conditions. </p>
</div>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="13.4.2"></div>
<h4 id="sec13-4-2" className="mrgn-tp-0">13.4.2 Secondary malfunctions</h4>
<p>Secondary malfunctions shall be supplementary malfunctions consisting of either additional malfunctions or monitoring malfunctions as follows:</p>
<ol>
<li>Additional malfunctions consist of a failure of a piece  of equipment, of a control device or of a component of a system to respond  correctly when called upon to act, either automatically or by operator  intervention, or a failure of an operating piece of equipment, subsequent to a primary  malfunction.<br />
Each additional malfunction shall meet all of the following criteria:
<ol className="list-lower-alpha">
<li>it has an observable effect on the indications on the simulator  control room panels or it is reported from the field</li>
<li>it is an equipment or component failure that could  occur during NPP operation, including failure of poised equipment to respond</li>
<li>if not properly addressed by the candidate, it will  cause deviation to an unacceptable value of one or more system parameters, or  it will create another undesirable system condition</li>
<li>it only requires a limited number of corrective actions  from the candidates</li>
</ol>
<p>Additional  malfunctions shall be included in the test scenarios to aid in assessing the  ability of the candidates to monitor changes in system and unit conditions and  to respond to these changes.</p>
</li>
<li>Monitoring malfunctions consist of a failure of any  indicating device on the control room panels.<br />
Each monitoring malfunction shall meet all of the following criteria:
<ol className="list-lower-alpha">
<li>the indicating device should fail as it would during  operation at the NPP</li>
<li>the indicating device is expected to be used by the  candidates during the test scenario</li>
<li>there are at least two other means to obtain or derive  the same information from simulator control room or field indications</li>
<li>the failure of the indicating device does not influence  the applicable system process</li>
</ol>
</li>
</ol>
<p>Monitoring malfunctions shall be included in the  test scenarios to aid in assessing the ability of the candidates to monitor  system and unit conditions.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="13.5"></div>
<h3 id="sec13-5" className="mrgn-tp-0">13.5 Competency areas and generic performance  expectations</h3>
<p>The five competency areas referred to in section 13  each have associated generic performance expectations (GPEs) that shall be used  for assessing the performance of candidates in the position at the NPP where  initial certification is sought. Each associated list of GPEs per competency  area specifically addresses performance requirements for a given position.</p>
<p> The standard of acceptable performance used with  each generic performance expectation is dictated by the NPP&#39;s corresponding  documented performance expectations applicable for each position. The required  competency areas and the corresponding GPEs for each position are specified in  the applicable appendices C.1  to C.3.</p>
<p> The integration of the GPEs is specified in section 14  under the examination design and development requirements.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="14"></div>
<h2 id="sec14" className="mrgn-tp-0">14. Examination Design and Development</h2>
<p>In accordance with the minimum requirements  specified in subsections 14.1 to 14.4 and under the direction of the lead  examiner, the examination team shall, design and develop the required certification  examinations, referred to in section 13,  for each position at the specific NPP where initial certification is sought.</p>
<p>In addition, the examination team shall: </p>
<ol>
<li>develop a design checklist for each test scenario CTS,  ATS, DTS and PCTS by using, at a minimum, all the design requirements specified  in sections 14.1  to 14.4  and Appendices C.4 to C.10; the design checklist must also specify the NPP, the  test scenario title, the position for which the candidates are seeking  certification, the examination date, exactly what criteria and where in section  3 of the examiner&#39;s guides each criteria has been met, and the printed names  and signatures of the lead examiner and training manager
<div className="module">
<p>The  design checklist for each test scenario should be similar to the one shown in appendix&nbsp;D.7.</p>
</div>
</li>
<li>develop an examination design checklist for each  examination using, at a minimum, the design requirements specified in sections 14.1  to 14.4  and include a check to indicate that the examination has not been used for the  conduct of a previous examination; the examination design checklist must also  specify the examination title indicating the position for which the candidates  are seeking certification, the examination date, the test scenario that has met  each of the criteria, and the printed names and signatures of the lead examiner  and training manager
<div className="module">
<p>The  examination design checklist for each examination specific to a position should  be similar to the one shown in appendix D.8.</p>
</div>
</li>
</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="14.1"></div>
<h3 id="sec14-1" className="mrgn-tp-0">14.1 Reactor operator examination</h3>
<p>The simulator-based  examination for RO candidates shall be designed to meet the following criteria:</p>
<ol>
<li>the entire examination shall consist of three CTSs</li>
<li>each CTS shall be designed in accordance with the  criteria in appendix C.4,  and in accordance with section 14.5  for the applicable examiner&#39;s guide</li>
<li>the CTSs shall cover a broad range of system  operations, equipment malfunctions and unit transients</li>
<li>duplication in the required operator actions shall be  minimized among CTSs</li>
<li>initial NPP conditions, including reactor power, shall  be varied among CTSs</li>
<li>at least one CTS shall:
<ol className="list-lower-alpha">
<li>start with initial NPP conditions different from normal  full power conditions that have a significant impact on the actions to be taken  by the candidates</li>
<li>include a category 4 primary malfunction as defined in paragraph  13.4.1</li>
<li>include a failure of a major automatic action during a  transient that must be detected by the candidates and that requires them to take  the appropriate corrective actions</li>
<li>include a situation where a requirement in the operating  policies and principles (OP&amp;Ps) is not met that must be recognized and  addressed by the candidates</li>
<li>include the occurrence of an impairment of a special  safety system or standby safety support system that must be recognized and  addressed by the candidates</li>
<li>at a multi-unit NPP, include conditions on one or more  reactor units, other than the simulated reactor unit, that prevent or  significantly delay the arrival at this reactor unit of one or both assisting  ROs from other units, or that require one or both assisting ROs to subsequently  leave the simulated reactor unit during the CTS</li>
</ol>
</li>
<li>at least two CTSs shall:
<ol className="list-lower-alpha">
<li>include one or more situations that require the candidates to determine or recommend appropriate course of actions because procedures do not exist, do not fully address the situation, give conflicting  directions or are ineffective</li>
<li>include challenging concurrent malfunctions or unit conditions that require the candidates to assign priorities to their actions or to the actions of the support team</li>
</ol>
</li>
<li>over the entire examination, candidates shall be tested in all competency areas listed in appendix C.1 as follows:
<ol className="list-lower-alpha">
<li>at least 25 times in competency areas 1, 3, 4 and 5</li>
<li>at least 15 times in competency area 2</li>
</ol>
</li>
<li>the test scenarios and the entire examination shall be designed to be conducted within the estimated time durations shown in table 4</li>
<li>following the completion of designing a test scenario, a design checklist shall be completed to confirm that the specific test scenario meets the criteria in the checklist</li>
<li>each test scenario design checklist shall be reviewed and approved, with the date, name and signature of the lead examiner and training manager prior to developing the corresponding examiner&#39;s guide</li>
<li>following the completion of designing the three CTSs, an examination design checklist shall be completed to confirm that the examination meets the criteria in the checklist</li>
<li>the examination design checklist shall be reviewed and approved, with the date, name and signature of the lead examiner and training manager prior to developing the corresponding examiner&#39;s guide</li>
</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="14.2"></div>
<h3 id="sec14-2" className="mrgn-tp-0">14.2 Unit 0 operator examination</h3>
<p>The simulator-based examinations for U0O candidates  shall be designed to meet the following criteria:</p>
<ol>
<li>the entire examination shall consist of two CTSs </li>
<li>each CTS shall be designed in accordance with the  criteria in appendix C.5,  and in accordance with section 14.5  for the applicable examiner&#39;s guide</li>
<li>the CTSs shall cover a broad range of system  operations, equipment malfunctions and transients relevant to the U0O position</li>
<li>duplication in the required operator actions shall be  minimized among CTSs</li>
<li>initial NPP conditions, including conditions of the  reactor units, shall be varied among CTSs</li>
<li>at least one CTS shall:
<ol className="list-lower-alpha">
<li>start with initial conditions of systems operated by  U0Os different from normal operating conditions specified in operating  procedures that have a significant impact on the actions to be taken by the  candidates</li>
<li>include a Category 4 primary malfunction, as defined in  paragraph 13.4.1, affecting one or more reactor units that requires a complex intervention by the  candidates</li>
<li>include a failure of a major automatic action during  complex operations of unit 0 systems that must be detected by the candidates  and that requires them to take the appropriate corrective actions</li>
<li>include a situation where a requirement in the OP&amp;Ps is not met, that must be recognized and addressed by the candidates</li>
<li>include the occurrence of an impairment of a special safety system or standby safety support system that must be recognized and addressed by the candidates </li>
</ol>
</li>
<li>one CTS shall test the candidates in the role of the lead U0O and the other shall test the candidates in the role of the assisting U0O</li>
<li>there shall be at least two situations that require the candidates to determine or recommend appropriate course of actions because procedures do not exist, do not fully address the situation, give conflicting directions or are ineffective </li>
<li>there shall be at least two occurrences of challenging concurrent malfunctions or conditions of systems operated by U0Os that require the candidates to assign priorities to their actions or to the actions of the  support team</li>
<li>in  both CTSs, the arrival of the second U0O in the control room shall be delayed  for approximately 15 minutes</li>
<li>over  the entire examination, candidates shall be tested in all competency areas  listed in appendix C.1  as follows:
<ol className="list-lower-alpha">
<li>at least 25 times in competency areas 1, 3, 4 and 5 </li>
<li>at least 15 times in competency area 2 </li>
</ol>
</li>
<li>the  test scenarios and the entire examination shall be designed to be conducted  within the estimated time durations shown in table 4</li>
<li>following  the completion of designing each test scenario, a design checklist shall be  completed to confirm that the specific test scenario meets the criteria in the  checklist </li>
<li>each  test scenario design checklist shall be reviewed and approved, with the date,  name and signature of the lead examiner and training manager, prior to  developing the corresponding examiner&#39;s guide</li>
<li>following  the completion of designing the two CTSs, an examination design checklist shall  be completed to confirm that the examination meets the criteria in the  checklist </li>
<li>the  examination design checklist shall be reviewed and approved, with the date,  name and signature of the lead examiner and training manager, prior to  developing the corresponding examiner&#39;s guide </li>
</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="14.3"></div>
<h3 id="sec14-3" className="mrgn-tp-0">14.3 Plant shift supervisor examination</h3>
<p>The simulator-based examinations for PSS candidates  at single-unit NPPs shall be designed to meet the following criteria:</p>
<ol>
<li>the entire examination shall consist of two CTSs and  two ATSs</li>
<li>each CTS shall be designed in accordance with the  criteria in appendix C.6,  and in accordance with section 14.5  for the applicable examiner&#39;s guide</li>
<li>each ATS shall be designed in accordance with the  criteria in appendix C.7 ,  and in accordance with section 14.5  for the applicable examiner&#39;s guide</li>
<li>the test scenarios shall cover a broad range of system  operations, equipment malfunctions and NPP transients</li>
<li>duplication in the required actions shall be minimized  among test scenarios</li>
<li>initial NPP conditions, including reactor power, shall  be varied among test scenarios</li>
<li>at least one test scenario shall:
<ol className="list-lower-alpha">
<li>start with initial NPP conditions different from normal  full-power conditions that have a significant impact on the response expected  from the candidates</li>
<li>include a category 4 primary malfunction as defined in paragraph  13.4.1 </li>
<li>include a failure of a major automatic action during a transient that must be detected by the candidates and that requires them to take  the appropriate corrective actions</li>
<li>include the occurrence of an impairment of a special safety system or standby safety support system that must be recognized and addressed by the candidates</li>
</ol>
</li>
<li>at least one CTS shall include concurrent malfunctions or NPP conditions that require the candidates to give directions to the support team on the execution  of two complex procedures or courses of actions that need to be implemented  promptly</li>
<li>at least one ATS shall include concurrent malfunctions  or NPP conditions that require the candidates to assign priorities to their  actions or to the actions of the support team</li>
<li>at least two test scenarios shall:
<ol className="list-lower-alpha">
<li> include one or more situations that require the candidates to determine appropriate course of actions because procedures do not exist, do not fully address the situation, give conflicting directions or are ineffective</li>
<li>include a situation where a requirement in the OP&amp;Ps  is not met that must be recognized and addressed by the candidates</li>
</ol>
</li>
<li>over  the entire examination, candidates shall be tested in all competency areas  listed in appendix C.2  as follows:
<ol className="list-lower-alpha">
<li>at least 25 times in competency areas 1, 3, 4 and 5 </li>
<li>at least 15 times in competency area 2</li>
</ol>
</li>
<li>the  test scenarios and the entire examination shall be designed to be conducted  within the estimated time durations shown in table 4</li>
<li>following  the completion of designing each test scenario, a design checklist shall be  completed to confirm that the specific test scenario meets the criteria in the  checklist </li>
<li>each  test scenario design checklist shall be reviewed and approved, with the date,  name and signature of the lead examiner and training manager, prior to  developing the corresponding examiner&#39;s guide</li>
<li>following  the completion of designing the two CTSs and the two ATSs, an examination  design checklist shall be completed to confirm that the examination meets the  criteria in the checklist </li>
<li>the  examination design checklist shall be reviewed and approved, with date, name  and signature of the lead examiner and training manager, prior to developing  the corresponding examiner&#39;s guide </li>
</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="14.4"></div>
<h3 id="sec14-4" className="mrgn-tp-0">14.4 Control room shift supervisor examination</h3>
<p>The simulator-based examinations for CRSS candidates at multi-unit NPPs shall be designed to meet the following criteria:</p>
<ol>
<li>the entire examination shall consist of two CTSs, three  DTSs and the one PCTS</li>
<li>each CTS shall be designed in accordance with the  criteria in appendix C.8   and in accordance with section 14.5  for the applicable examiner&#39;s guide</li>
<li>each DTS shall be designed in accordance with the  criteria in appendix C.9 ,  and in accordance with section 14.5  for the applicable examiner&#39;s guide</li>
<li>the PCTS shall be designed in accordance with the  criteria in appendix C.10 ,  and in accordance with section 14.5  for the applicable examiner&#39;s guide</li>
<li>the test scenarios shall cover a broad range of system  operations, equipment malfunctions and NPP transients</li>
<li>duplication in the required actions shall be minimized  among test scenarios</li>
<li>initial NPP conditions, including reactor power, shall  be varied among test scenarios</li>
<li>at least one CTS shall:
<ol className="list-lower-alpha">
<li>start with initial NPP conditions different from normal  full power conditions that have a significant impact on the response expected  from the candidates</li>
<li>include concurrent malfunctions or plant conditions that require the candidates to give directions to the support team on the execution of two complex procedures or courses of actions that need to be implemented promptly</li>
<li>include challenging concurrent malfunctions on the reactor unit and on unit 0, or on the reactor unit and on simulated systems common to more than one reactor unit, that require the candidates to assign  priorities to their actions or to the actions of the support team</li>
</ol>
</li>
<li>during one CTS, the candidates shall be required to give detailed instructions to the support team on the course of actions to be taken in a situation that necessitates a prompt execution of a complex sequence of operator actions because the RO or the U0O needs assistance from the CRSS</li>
<li>at least one DTS shall include challenging concurrent abnormal NPP conditions that require the candidates to assign priorities to the actions required to address those conditions</li>
<li>at least one CTS or DTS shall:
<ol className="list-lower-alpha">
<li>include a Category 4 primary malfunction as defined in paragraph  13.4.1</li>
<li>include a failure of a major automatic action during a  transient that must be detected by the candidates and that requires them to take  the appropriate corrective actions</li>
</ol>
</li>
<li>at least one test scenario shall include the occurrence of an impairment of a special safety system or standby safety support system that must be recognized  and addressed by the candidates</li>
<li>at least two test scenarios shall:
<ol className="list-lower-alpha">
<li> include one or  more situations that require the candidates to determine an appropriate course  of actions because procedures do not exist, do not fully address the situation,  give conflicting directions or are ineffective</li>
<li>include a situation where a requirement in the  OP&amp;Ps is not met that must be recognized and addressed by the candidates</li>
</ol>
</li>
<li>over  the entire examination, candidates shall be tested in all competency areas  listed in appendix C.3 as follows:
<ol className="list-lower-alpha">
<li>at least 25 times in competency areas 1, 3, 4 and 5</li>
<li>at least 15 times in competency area 2</li>
</ol>
</li>
<li>the test scenarios and the entire examination shall be designed to be conducted within the estimated time durations shown in table 4</li>
<li>following the completion of designing each test scenario, a design checklist shall be completed to confirm that the specific test scenario meets the criteria in the checklist.</li>
<li>each test scenario design checklist shall be reviewed and approved, with the date and signature of the lead examiner and training manager, prior to developing the corresponding examiner&#39;s guide</li>
<li>following the completion of designing the two CTSs, the three DTSs and the PCTS, an examination design checklist shall be completed to confirm that the examination meets the  criteria in the checklist</li>
<li>the examination design checklist shall be reviewed and approved, with date of  signature, by the lead examiner and training manager prior to developing the corresponding examiner&#39;s guide</li>
</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="14.5"></div>
<h3 id="sec14-5" className="mrgn-tp-0">14.5 Examiner&#39;s guides</h3>
<p>The examination team shall, further to the test scenario design criteria specified in appendices&nbsp;C.4 to C.10, develop a  corresponding examiner&#39;s guide for each test scenario in accordance with the following criteria: </p>
<ol>
<li>each examiner&#39;s guide shall have a cover page with the  information shown in appendix C.11</li>
<li>for test scenarios CTS, ATS and DTS, the examiner&#39;s  guide shall contain a number of sections and parts within the applicable  sections with the information specified in 14.5.1</li>
<li>for test scenario PCTS, the examiner&#39;s guide shall  contain a number of sections and parts within the applicable sections with the  information specified in 14.5.2 </li>
</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="14.5.1"></div>
<h4 id="sec14-5-1" className="mrgn-tp-0">14.5.1 Examiner&#39;s guide for test scenarios CTS, ATS and DTS</h4>
<h5>Section 1 -  Test scenario summary</h5>
<p> Section 1 of the examiner&#39;s guide, shown in appendix  C.12, shall consist of at least three parts and shall be completed during the  design of each test scenario and modified to reflect any significant change  made to the scenario during its development.</p>
<p> Part A of this section of the examiner&#39;s guide shall  contain:</p>
<ol className="list-lower-alpha">
<li>a detailed description of the scenario:
<ol className="list-lower-roman">
<li>the initial unit conditions and the initiating  malfunctions that start the test</li>
<li>the evolution of the reactor unit, or unit 0 as  applicable, and key systems in response to the initiating malfunctions and  subsequent malfunctions or candidate actions</li>
<li>a description of the expected candidate&#39;s responses to  the reactor unit, or unit&nbsp;0 as applicable, and key systems conditions or  malfunctions</li>
<li>the key procedures the candidate is expected to access</li>
<li>any expected prioritization of the candidates&#39;  responses</li>
<li>any required notification to be made by the candidates</li>
<li>when each role player is expected to arrive, what their  role is, and when they should leave</li>
<li>any other detail on how the scenario is designed to  unfold when conducted</li>
<li>a clearly defined end point of the test</li>
</ol>
</li>
<li>a  list of all the malfunctions used, the corresponding procedures to be used with  the revision number and impact on the candidate or NPP evolution</li>
<li>a  list of the key alarms and annunciations</li>
<li>a  list of all the equipment that is out of service with the corresponding impact on  the candidate or NPP evolution</li>
</ol>
<p>Part B of this section of the examiner&#39;s guide shall  contain the system parameters to be recorded during the conduct of the  examination.</p>
<p> Part C of this section of the examiner&#39;s guide shall  contain the minor adjustments made during conduct and reasons for the  adjustments.</p>
<h5>Section 2 -  Initial NPP conditions</h5>
<p> This section of the examiner&#39;s guide shall contain  details of the initial NPP conditions defined during the design of the test  scenario:</p>
<ol className="list-lower-alpha">
<li>reactor power of each reactor unit</li>
<li>generator load of each reactor unit</li>
<li>unit control mode of the simulated reactor unit, if  applicable</li>
<li>average liquid zone level of the simulated reactor unit</li>
<li>state of major systems of the various units</li>
<li>equipment out of service</li>
<li>fuelling machine activities in progress</li>
<li>routine tests and maintenance activities in progress</li>
<li>other NPP conditions</li>
</ol>
<p>This section of the examiner&#39;s guide shall also  detail where each member of the control room support team will be at the start  of the test scenario.</p>
<p> This information shall be given to the candidates  during the turnover at the start of the test scenario.</p>
<h5>Section 3 - Candidate action checklist</h5>
<div className="module">
<p>The candidate action  checklist is designed to allow the examiners to accurately record the response  of the candidate during the test, independent of the audiovisual recordings and  of the operator action monitor. It contains all of the necessary test scenario  information arranged in the anticipated sequence of occurrence and reflects as  closely as possible the NPP-documented performance expectations of a typically  qualified incumbent of the position sought by the candidate.</p>
</div>
<p>This section of the examiner&#39;s guide shall:</p>
<ol className="list-lower-alpha">
<li>detail the sequence of actions and checks expected from  the candidates in response to the malfunctions and conditions of the test  scenario in a checklist format similar to that shown in appendix C.13.  Each check in the checklist shall include the corresponding GPE identified from  appendix&nbsp;C.1,  C.2  or C.3,  as applicable to the position</li>
<li>contain detailed instructions for the individual  members of the control room support team and for the person directing the  activities of the field operators or playing their role. These instructions  shall be written according to the criteria in appendix C.14</li>
<li>contain, for PSS and CRSS candidates, the standard  questions to be asked at the end of the test scenario, specified in appendix C.15,  with complete and accurate answers and with the corresponding GPE identified  from appendix C.2  or C.3  as applicable to the position.</li>
</ol>
<p>The candidate action checklist shall be developed to  allow the examiners to record accurately the response of the candidates to the  conditions of the scenario, independent of the audiovisual recordings and of  the operator action monitor. It shall reflect as closely as possible the  performance of a typically qualified incumbent of the position sought by the  candidates and shall contain the following information arranged in the  anticipated sequence of occurrence, with references to the appropriate GPEs for  each step:</p>
<h6>For  CTS and ATS test scenarios:</h6>
<p>The following are candidate action checklist items  that shall be included for a CTS and an ATS:</p>
<ol className="list-lower-alpha">
<li>the primary malfunctions and when each is initiated</li>
<li>the sequence of key alarms and annunciations received  on the control room panels and cathode-ray tubes (CRTs) or computer monitors  after the initiation of each primary malfunction</li>
<li>the secondary malfunctions that follow the occurrence  of a primary malfunction and when each is observable</li>
<li>any key alarm or annunciation on the control room  panels and CRTs (or computer monitors) associated with each secondary  malfunction</li>
<li>when each member of the control room support team  summoned will be instructed to arrive at the relevant unit in the control room</li>
<li>the alarms, annunciations, equipment malfunctions and  any other information that the members of the control room support team must  communicate to the candidates and when they must be communicated</li>
<li>the field conditions and any other information that the  person directing the activities or playing the role of the field operator must  communicate to the candidates and when they must be communicated</li>
<li>the checks of automatic actions that the candidates  must perform, specifying the indicators to be used (see note below). For checks  of automatic actions of complex systems where a number of identical devices are  actuated (e.g., emergency core cooling system), generic statements may be used  (e.g., check D2O isolation valves open)</li>
<li>the checks of system parameters and indicators that the  candidates must perform, including those to determine the nature of a primary  malfunction and to identify the applicable operating procedures, specifying the  indicators to be used </li>
<li>the actions and checks that the candidates must perform  or must instruct the members of the control room support team to perform, based  on diagnosis, prior to accessing the applicable operating procedures,  specifying the controls or devices to be operated and the indicators to be used  to perform the checks </li>
<li>for RO and U0O candidates and for PSS candidates during  an ATS, the actions and checks that the candidates must perform or must  instruct the members of the control room support team to perform to implement  each applicable step of the relevant procedures, specifying the controls or  devices to be operated and the indicators to be used to perform the checks; these  actions and checks include any standard operating practice that is not  mentioned explicitly in a step of the procedure, but is associated with its  execution, based on training and on the expectations of NPP management</li>
<li>for PSS and CRSS candidates during a CTS, the specific  instructions that the candidates must give to the members of the control room  support team to direct them to implement the applicable operating procedures</li>
<li>for PSS and CRSS candidates during a CTS, the actions  and checks that the candidates must instruct the members of the control room  support team to perform whenever they request assistance from the shift manager  while implementing a procedure, specifying the devices to be operated and the  indicators to be used to perform the checks</li>
<li>for PSS and CRSS candidates, the actions and checks  that the candidates must perform to implement any step of an applicable  procedure specifically assigned to the PSS or CRSS</li>
<li>when operating procedures do not specifically address a  malfunction or NPP condition, the actions and checks that the candidates must  perform or must instruct the members of the control room support team to  perform to place the unit, the systems or the equipment in the required state,  specifying the controls or devices to be operated and the indicators to be used  to perform the checks </li>
<li>the checks that the candidates must perform to  determine the nature of any secondary malfunction and to identify the  applicable operating procedure, if any, specifying the indicators to be used </li>
<li>the actions and checks that the candidates must perform  or must instruct the members of the control room support team to perform upon  detection of each secondary malfunction, specifying the controls or devices to  be operated and the indicators to be used to perform the checks </li>
<li>for RO and U0O operator candidates and for PSS  candidates during an ATS, the specific instructions with the appropriate  demonstration, if required, that the candidates should give to the members of  control room support team when delegating an activity and, for each, the  specific information to be reported back once it is completed</li>
<li>all requests for activities in the control equipment  room expected from the candidates and for each activity, the time that would be  required for completing it at the NPP and the information to be reported back  to the candidates by the member of the control room support team involved once  the activity is completed</li>
<li>all requests for field activities expected from the  candidates and for each activity, the number of field operators and the time  that would be required for completing it at the NPP and the information to be  reported back to the candidates once the activity is completed</li>
<li>the specific information that the candidates should  give to the support team members</li>
<li>the notifications and any request for approval that the  candidates must make</li>
<li>for PSS and CRSS candidates, the checks of system, unit  and NPP conditions, constraints and limits that the candidates must perform  before approving request by the support team</li>
<li>at multi-unit NPPs, when any certified person on the  support team will be instructed to leave the simulated reactor unit or unit 0  during the test scenario and, if applicable, when the person will be instructed  to return to the relevant unit</li>
<li>for PSS and CRSS candidates, the standard questions in part  A of appendix C.15,  with complete and accurate answers</li>
</ol>
<p>The checklist shall specify the indicator or the set  of indicators to be used for checking or monitoring a parameter or condition  when it is specified in the relevant operating procedure, or when only one  indicator or set of indicators is reliable under the existing circumstances.</p>
<h6>For  a DTS test scenario:</h6>
<p>The following are candidate action checklist items that  shall be included for a DTS:</p>
<ol className="list-lower-alpha">
<li>the primary malfunction</li>
<li>the sequence of key alarms and annunciations received  on the control room panels and CRTs (or computer monitors) after the initiation  of the primary malfunction</li>
<li>any secondary malfunction that follows the occurrence  of the primary malfunction and when it is observable</li>
<li>any key alarm or annunciation on the control room  panels and CRTs (or computer monitors) associated with a secondary malfunction</li>
<li>the field conditions and any other information that the  person playing the role of the field operators must communicate to the  candidates and when they must be communicated</li>
<li>the checks of major automatic actions and major system  parameters that the candidates must perform, specifying the indicators to be  used (see note above). For checks of automatic actions of complex systems where  a number of identical devices are actuated (e.g., emergency core cooling system),  generic statements may be used (e.g., check D2O isolation valves open)</li>
<li>the checks or combinations of checks of system  parameters and indicators that the candidates must perform to determine  unambiguously the nature of the primary malfunction and to identify the  applicable operating procedures, specifying the indicators to be used (see note  above); when there is more than one approach to reach the correct diagnosis,  each acceptable combination of checks that supports a unique conclusion must be  documented</li>
<li>the checks that the candidates must perform to determine  the nature of any secondary malfunction and to identify the applicable  operating procedures, if any, specifying the indicators to be used (see note  above)</li>
<li>the actions that the candidates must instruct the  members of the control room support team to perform when a major automatic  action fails to occur</li>
<li>all requests for verifications in the control equipment  room expected from the candidates and for each verification, the time that  would be required for completing it at the NPP and the information to be reported  back to the candidates</li>
<li>all requests for verifications in the field expected  from the candidates and, for each verification, the minimum time that would be  required for completing it at the NPP and the information to be reported back  to the candidates; when it is acceptable to report back, before the minimum  time, field information requested that is essential to make the correct  diagnosis, the control room checks that a candidate must have performed before  the field information is reported back</li>
<li>the DTS dynamic duration allowed for making the correct  diagnosis</li>
<li>the standard questions in part B of appendix C.15,  must reflect the actual conditions of the scenario, with complete and accurate  answers</li>
</ol>
<h5>Section  4 - Simulator operator instructions</h5>
<p>This section of the examiner&#39;s guide shall detail  the activities of the simulator operator during the test scenario. It shall  contain the following instructions arranged in the planned sequence of  execution:</p>
<h6>For CTS and  ATS test scenarios:</h6>
<ol className="list-lower-alpha">
<li>instructions to set up the simulator</li>
<li>the checks required before the start of the scenario to  ensure that:
<ol className="list-lower-roman">
<li>the simulator is in the proper configuration to  simulate the initial unit conditions and the equipment out of service at the  beginning of the scenario</li>
<li>all equipment out of service is correctly identified on  the unit panels</li>
<li>the required malfunctions of poised equipment are  programmed</li>
<li>all panel lights are functional and the panel horn is  on</li>
<li>all data collection devices are operational and synchronized</li>
<li>the telephone system, the radiation emergency warning  siren, the fire emergency warning siren and the public address system are  functional</li>
</ol>
</li>
<li>the  sequence of primary and secondary malfunctions to be entered during the test  scenario, with the conditions for their activation; these conditions may be any  of the following:
<ol className="list-lower-roman">
<li>a specific system or unit condition</li>
<li>the completion of a specified step in an operating  procedure</li>
<li>the completion of a specified action in the control  room by a candidate or by a member of the support team</li>
<li>a signal from the lead examiner</li>
<li>a specified time after a given occurrence during the  scenario
<div className="module">
<p>Caution  should be taken by the lead examiner using a specified time as the condition  for activation of a malfunction unless it can be accurately determined based on  an existing condition. </p>
</div>
</li>
</ol>
</li>
<li>the actions required to reproduce in the control room  the outcome of each operation performed in the field or in the control  equipment room and the time after which the outcome will be seen in the control  room, based on the time that would be required for completing the operation at  the NPP</li>
<li>the specific data to be collected after completion of  the test scenario, based on the list in appendix C.16 </li>
</ol>
<h6>For  a DTS test scenario:</h6>
<ol className="list-lower-alpha">
<li>instructions to set up the simulator</li>
<li>the checks required before the start of the scenario to  ensure that:
<ol className="list-lower-roman">
<li>the simulator is in the proper configuration to  simulate the initial unit conditions and the equipment out of service at the  beginning of the scenario</li>
<li>all equipment out of service is correctly identified on  the unit panels</li>
<li>any secondary malfunction associated with poised  equipment is programmed</li>
<li>all panel lights are functional and the panel horn is  on</li>
<li>all data collection devices are operational and  synchronized</li>
<li>the telephone system, the radiation emergency warning  siren, the fire emergency warning siren and the public address system are  functional</li>
</ol>
</li>
<li>the primary malfunction to be entered at the start of  the DTS</li>
<li>any additional malfunction associated with an operating  piece of equipment to be entered during the DTS, with the conditions for its  activation</li>
<li>the specific data to be collected after completion of  the DTS, based on the list in appendix&nbsp;C.16</li>
</ol>
<h5>Section  5 - Instructions for support team staff in the control room</h5>
<p>This section of the examiner&#39;s guide shall contain  separate instructions for each member of the control room support team that  specify the actions they must perform during the test scenario. It is completed  after the rehearsal of the scenario with the support team. The sequence of  instructions for each member is compiled from the candidate action checklist  section of the examiner&#39;s guide. </p>
<h5>Section  6 - Field operator instructions</h5>
<p>This section of the examiner&#39;s guide shall contain  instructions that specify the actions that the person directing the activities  or playing the role of the field operators must perform during the test  scenario. It is completed after the rehearsal of the scenario with the support  team. The sequence of instructions for each field operation expected is  compiled from the candidate action checklist section of the examiner&#39;s guide.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="14.5.2"></div>
<h4 id="sec14-5-2" className="mrgn-tp-0">14.5.2 Examiner&#39;s guide for test scenario PCTS</h4>
<p>The examiner&#39;s guide  for the test scenario PCTS shall contain a number of sections and parts within  the applicable sections similar to that shown in appendix C.12  with the following required information:</p>
<h5>Section  1 - Test scenario summary</h5>
<p> Section 1 of the examiner&#39;s guide, shown  in appendix C.12, shall consist of at least two parts and shall be completed  during the design of the PCTS and modified to reflect any significant change  made to the scenario during its development.</p>
<p>Part A of this section of the  examiner&#39;s guide shall contain:</p>
<ol className="list-lower-alpha">
<li>a detailed description of the verification task to be  performed by the candidates</li>
<li>the list of panel anomalies to be identified and their  impact on the candidate or NPP</li>
</ol>
<p>Part B of this section of the examiner&#39;s guide shall  contain the minor adjustments made during conduct and reasons for the  adjustments.</p>
<h5>Section  2 - Initial NPP conditions</h5>
<p> This section of the examiner&#39;s guide  shall contain the same information specified above under initial NPP conditions  for the CTS, ATS and DTS examiner&#39;s guides.</p>
<h5>Section  3 - Candidate action checklist</h5>
<p> This section of the examiner&#39;s guide  shall detail the answers expected of a typically qualified CRSS to the standard  questions asked at the end of the PCTS.</p>
<p>This candidate action checklist shall  be developed to allow the examiners to accurately record the answers given by  the candidates independently of the audiovisual recordings. It shall contain  the following information: </p>
<ol className="list-lower-alpha">
<li>the control room indications associated with each panel  anomaly</li>
<li>any expected request from the candidates for field information  required to assess the abnormal system condition associated with a panel  anomaly and for each, the specific information that the lead examiner must give  to the candidates</li>
<li>the maximum time allowed for completing the  verification task</li>
<li>the standard questions shown in part C of appendix C.15,  with complete and accurate answers  </li>
</ol>
<h5>Section  4 - Simulator operator instructions</h5>
<p> This section of the examiner&#39;s guide  shall contain details of the activities of the simulator operator before the  start of the PCTS. It shall contain the following instructions:</p>
<ol className="list-lower-alpha">
<li>instructions to set up the simulator</li>
<li>the checks required before the start of the scenario to  ensure that:
<ol className="list-lower-roman">
<li>the simulator is in the proper configuration to  simulate the initial unit conditions and the equipment out of service at the  beginning of the scenario</li>
<li>all equipment out of service is correctly identified on  the unit panels</li>
<li>all panel anomalies are set up properly</li>
<li>all panel lights are functional and the panel horn is  on</li>
<li>the audiovisual system is operational  </li>
</ol>
</li>
</ol>
<h5>Section 5 - Instructions for the candidates</h5>
<p> This section of the examiner&#39;s guide shall contain specific instructions regarding the verification task to be performed by the candidates during the PCTS.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="14.6"></div>
<h3 id="sec14-6" className="mrgn-tp-0">14.6 Examination validation</h3>
<p>The examination team shall, under the direction of  the lead examiner ensure that each CTS, ATS, DTS and PCTS examiner&#39;s guideis validated on the NPP simulator for  which initial certification is sought. </p>
<div className="module">
<p>A validation  is performed to ensure that the test scenario unfolds as planned and that a  typically qualified incumbent of the position for which the test is designed  has sufficient time and information to respond in accordance with the NPP-documented  performance expectations. Where interpretations regarding performance  expectations are warranted, the operations manager should be consulted.</p>
</div>
<p>This validation shall be performed prior to  obtaining the required approvals of the examiner&#39;s guide for the conduct of a  given examination.</p>
<p> At a minimum, this examination validation shall be  done in accordance with the following requirements:</p>
<ol>
<li>ensure a person who is currently or previously  certified at the NPP for which the test is designed, and who has not been  involved in any aspect of the test scenario design, acts as the candidate</li>
<li>perform the validation in real time on the NPP  simulator with the person acting as the candidate to confirm that:
<ol className="list-lower-alpha">
<li>each test scenario unfolds as planned in the  corresponding examiner&#39;s guide
<div className="module">
<p>Closely  verify the fidelity of the simulator response to the malfunctions and other  scenario conditions inserted and to the expected operator actions.</p>
</div>
</li>
<li>the alarms received in the simulator and the parameters  listed in the checklist of appendix C.17  are verified to ensure that:
<ol>
<li>the key alarms are received when expected and in the  correct sequence</li>
<li>the values of each simulated system parameter have  approximately the correct magnitude and their excursions, if any, have  approximately the correct magnitude and duration, based on the applicable laws  of physics and the characteristics of the equipment and systems of the  reference unit</li>
<li>the  relevant system logic control circuits operate correctly</li>
<li>the response of the simulated unit and systems to the  malfunctions and the expected candidate responses are realistic and that there  are no misleading differences between the simulated response and that of the  NPP reference unit</li>
</ol>
</li>
<li>the required candidate actions and checks and the  applicable operating documentation used in response to the sequence of  malfunctions are consistent with the NPP-documented performance expectations</li>
<li>the sequence of the required candidate actions is clear  and unique and that a typically qualified incumbent of the position sought by  the candidate would be expected to respond to each malfunction</li>
<li>for test scenarios that include situations for which  the operating procedures give no specific instructions, that the course of  expected candidate actions is clear and unique and consistent with the NPP-documented  performance expectations</li>
<li>the timing of the malfunctions is such that a typically  qualified incumbent of the position sought by the candidate would have  sufficient time to respond as expected to each malfunction</li>
<li>any secondary malfunction only affects those  indicators, equipment, components or control devices that the candidates are  expected to check or operate during the dynamic duration of the test scenario  and can be clearly detected by the candidate</li>
<li>for the DTS, there is sufficient information and time for  the candidate to respond as expected to the secondary malfunctions and to make  the correct diagnosis, and the unit conditions have not deteriorated to a level  that would prevent, or interfere with, making the required diagnosis</li>
<li>for the PCTS, there is sufficient time for the candidate  to complete the verification task as would a typically qualified CRSS </li>
<li>for the DTS, any appropriate course of actions to  respond to a failure of a major automatic action prior to diagnosing the  primary malfunction is clear and does not have an impact on unit conditions  that would prevent, or interfere with, making the correct diagnosis</li>
<li>the dynamic duration of each test scenario does not  significantly exceed the prescribed time limit in the examiner&#39;s guide and table  4 above</li>
</ol>
</li>
<li>confirm that the list of system parameters to be  recorded during conduct of the test scenarios, which is contained in section 1 (test  scenario summary) of the examiner&#39;s guides, is appropriate and complete</li>
<li>for the CTS and ATS, confirm that the steps in section  3 (candidate action checklist) of the examiner&#39;s guides do not contain  situations where the candidates are most likely to make errors or create  deviations that could force the early termination of the test scenario or  change the planned evolution of the test scenario to where the examiner&#39;s guide  could no longer be used to reliably record the performance of the candidate</li>
<li>confirm that for each CTS and DTS, there is no  duplication in the candidate action checklist (section 3) of the examiner&#39;s  guides between the performance items measured during the dynamic portion of the  test scenario and the answer items for the questions asked at the end of each  scenario</li>
<li>confirm that each item of the candidate action  checklist (section 3) of each examiner&#39;s guide is assigned the appropriate generic  performance expectations from appendix C.1  to C.3,  as applicable</li>
<li>for the PCTS, confirm that the panel anomalies can be clearly  detected from the control room panels by the candidate during the execution of  the verification task </li>
<li>for the PCTS, confirm that the control room indications  associated with each panel anomaly are the same as they would be at the NPP  reference unit under the defined initial unit conditions</li>
<li>confirm, at the completion of the dynamic portion of  each test scenario, that the answers to the standard questions are complete and  technically accurate by asking the person acting as the candidate to respond to  the test standard questions from the applicable part of appendix&nbsp;C.15  which have been included in the examiner&#39;s guide </li>
<li>ensure  the instructions for the support team are compiled in sections 5 (instructions for  support team staff in the control room) and 6 (field operation instructions) of  the examiner&#39;s guides</li>
<li>confirm  that any anticipated requests for information, corrective actions or  notifications from the candidate to support team staff are identified in section  5 (instructions for support team staff in the control room) of the examiner&#39;s  guide</li>
<li>confirm  that any actions and communications performed by support team staff are  technically accurate and consistent with the NPP-documented performance  expectations</li>
<li>confirm  that, over the entire examination, each competency area 1, 3, 4 and 5 is tested  at least 25 times and competency area 2 is tested at least 15 times</li>
<li>finalize  the version of the examiner&#39;s guides in the light of the outcome of the  validation of each test scenario with the support team</li>
<li>modify  the test scenario and corresponding examiner&#39;s guide to reflect the response  expected from a typically qualified incumbent of the position sought by the  candidate if at a minimum:
<ol className="list-lower-alpha">
<li>any of steps 2 through to 12 performed can not be  confirmed or ensured</li>
<li>any malfunction and its consequence cannot be simulated  realistically</li>
<li>conditions exist for which no unique sequence of  actions can be predicted with confidence</li>
<li>to correct any technical error and have it reflect the  response expected from a typically qualified operating team
<div className="module">
<p>If during validation it is  found that a malfunction is not simulated correctly, it is acceptable to  reproduce the desired effect by simulator operator intervention provided this  will not be noticeable to the candidates. Otherwise, another malfunction should  be used. Similarly, if the test scenario as a whole cannot be simulated  correctly, another test scenario should be designed.</p>
</div>
</li>
</ol>
</li>
<li>ensure that any modifications made to the test scenario or corresponding examiner&#39;s guide that:
<ol>
<li>the test design criteria is still met</li>
<li>another validation is performed by repeating steps 2 to  12 above as determined by the lead examiner</li>
</ol>
</li>
<li>complete the applicable test scenario validation checklist with, at a minimum, the information shown in appendix C.17</li>
<li>ensure that the simulator is restored to a normal configuration so as not to reveal the content of the test scenarios developed or to be conducted, before releasing the simulator for other uses</li>
</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="14.7"></div>
<h3 id="sec14-7" className="mrgn-tp-0">14.7 Final examiner&#39;s guides and examination design</h3>
<p>The lead examiner, at the completion of each  required examination specified in sections 14.1  to 14.4  with the corresponding examiner&#39;s guides specified in section 14.5. and after  completing all the validation steps in section 14.6,  shall ensure that the final examiner&#39;s guides, the test scenario design  checklists, the examination design checklists and the test scenario validation  checklists are reviewed and approved, with the date and signatures of the lead  examiner and training manager before the rehearsal of each test scenario. The  rehearsal of each approved test scenario shall be performed immediately prior  to the conduct of the test scenario in accordance with subsection&nbsp;15.1.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="15"></div>
<h2 id="sec15" className="mrgn-tp-0">15. Conduct of Performance-Based Certification  Examinations</h2>
<p>The licensee shall have documented policies,  processes and procedures in place regarding the conduct of performance-based  examinations.</p>
<p>The licensee shall ensure that:</p>
<ol>
<li>the examinations are conducted by the lead examiner and  at least one other examiner who was responsible for the examination design and  development </li>
<li>the lead examiner coordinates all the activities of the  examination team </li>
<li>the examination team members do not prompt the  candidates or offer any suggestion or solution regarding expected diagnoses of  malfunctions, decisions to be made or actions to be performed
<div className="module">
<p>Any  prompting or directing of the candidate towards the correct answer or path can  result in rendering a test scenario and/or a certification examination invalid  for the purposes of certification.</p>
</div>
</li>
<li>the examination team members minimize verbal  communications and the use of body language during the conduct of an  examination </li>
<li>the code of conduct and instructions for briefing the  examination team, the support team and for briefing the candidates have been explained</li>
<li>the standard questions conducted after the dynamic  portion of a test scenario are performed within a reasonable time limit and any  supplementary questions asked by the lead examiner do not lead the candidates  to the correct answer</li>
<li>the certification examinations are conducted in  accordance with the applicable maximum time limits set in table 4 of this  document</li>
<li>observers are briefed in accordance with section 6  of this regulatory document</li>
<li>all the test scenarios are recorded using an  audiovisual system
<div className="module">
<p>A  test scenario will not be recognized by the CNSC unless it has been properly  recorded.</p>
</div>
</li>
<li>the simulator is restored to a normal configuration after any certification examination-related activity to avoid revealing the content of the test scenarios developed or to be conducted, before releasing the simulator for other uses</li>
</ol>
<p>The lead examiner shall schedule the candidates for  a given examination and ensure that:</p>
<ol>
<li>in advance of the scheduled examinations, each candidate  is briefed on the roles and responsibilities of the various persons involved in  the conduct of the examination, on the performance expected from the candidate  during the conduct of the examination including the need to verbalize their  actions for the recordings and on the rules they must abide by; the minimum  requirements for the lead examiner in this briefing are specified in appendix C.18</li>
<li>all candidates are examined, one at a time, on a given  test scenario before conducting the next test scenario</li>
<li>the order in which the candidates are examined must be  varied from one test scenario to another</li>
<li>the total duration of the test scenarios conducted each  day does not place excessive demands on the candidates or on the examination  team
<div className="module">
<p>Each candidate test needs to be delivered in a consistent manner and  can not be adversely affected by the performance of any examination team member  due to fatigue. The lead examiner needs to carefully consider the examination  team workload when determining or modifying the testing schedule. </p>
</div>
</li>
<li>candidates who voluntarily withdraw or cheat at any  time during the conduct of the examination, are automatically assigned a fail  grade for the examination, and this is documented in the candidate&#39;s results  form (see appendix C.23)</li>
<li>prior to the conduct of a test scenario, a rehearsal of  the test scenario is performed in accordance with section 15.1</li>
</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="15.1"></div>
<h3 id="sec15-1" className="mrgn-tp-0">15.1 Rehearsal of test scenarios prior to conduct</h3>
<p>The examination team, under the direction of the  lead examiner, shall perform a rehearsal of each approved test scenario (CTS,  ATS, DTS and PCTS) with the support team on the NPP simulator for which the  approved examination is to be conducted and where initial certification is  sought.</p>
<p> This rehearsal shall be performed: </p>
<ol>
<li>at a reasonable time immediately prior to conducting  each approved test scenario for the first time </li>
<li>to ensure the simulator operator and the members of the  support team are fully familiar with their roles and responsibilities during  the conduct of the test</li>
<li>to ensure that the operator action monitor, the alarm  message printer and the parameter recording devices required by the test  scenario are operational</li>
<li>in real time with a person acting as the candidate who  is qualified in the position sought by the candidate to ensure that:
<ol className="list-lower-alpha">
<li>the approved test scenarios unfold as planed in the approved  examiner&#39;s guides</li>
<li>the simulator response is in accordance with the  approved examiner&#39;s guides</li>
<li>the support team members respond as specified in sections  3 (candidate action checklist) and 4 (simulator operator instructions) of the approved  examiner&#39;s guides</li>
</ol>
</li>
<li>to ensure that copies of all documents and data related to the examination that may compromise its security are controlled. This includes examiner&#39;s guides, alarm printouts, parameter trends, marked up operating procedures, flowsheets, operating and training documentation and personal notes. Ensure no examination material is left unsecured or unattended at any time, including when using copying machines in public areas</li>
<li>to ensure that, at the end of each rehearsal, any required  minor adjustments made by the lead examiner to an approved examiner&#39;s guide are  documented in section 1 (test scenario summary) part C of the guide including  the reason why each adjustment was required
<div className="module">
<p>Examples of a minor adjustment include the alteration of a support team member&#39;s feedback in response to an expected request from the candidate, editorial errors in sections 3 (candidate action checklist) of the examiner&#39;s guide, or an incorrect operating procedure referenced in section 3 of the examiner&#39;s guide that  was not identified during test validation.</p>
</div>
</li>
<li>to ensure that the parameter trends recorded during the  rehearsal are kept for reference
<div className="module">
<p>The  recorded parameter trends may be used as reference during the assessment and  grading of the candidates and may be requested by the CNSC as part of the  inspection criteria.</p>
</div>
</li>
<li>the simulator is placed in a secure configuration to  avoid compromising the security of the examination</li>
</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="15.2"></div>
<h3 id="sec15-2" className="mrgn-tp-0">15.2 Conduct of the dynamic portion of a CTS, ATS or  DTS</h3>
<p>The lead examiner shall coordinate the conduct of  each approved test scenario in accordance with the following requirements and  instructions: </p>
<ol>
<li>prior to permitting a candidate into the simulator control  room for the conduct of a test scenario, ensure that:
<ol className="list-lower-alpha">
<li>the simulator is set in the proper configuration for  the test scenario</li>
<li>the operator action monitor, the alarm message printer,  the parameter recording devices and the audiovisual systems are in service and  synchronized</li>
<li>any equipment out of service is properly identified on  the panels in accordance with section 1, part B of the approved examiner&#39;s  guide</li>
<li>the supporting documentation or information available  to the candidates is limited to that approved for use in the control room at  the NPP</li>
<li>all support team members participating in the  applicable test scenario are present and in their assigned locations</li>
<li>the audiovisual systems for recording communications  between the candidate and the support team members are in service</li>
</ol>
</li>
<li>when the candidate is permitted to enter into the  simulator control room and prior to starting the conduct of the test scenario,  ensure:
<ol className="list-lower-alpha">
<li>the audiovisual system is recording
<li>the candidate is given  written turnover specifying the existing NPP conditions for the test scenario, as detailed in section 2 of the approved examiner&#39;s guide, and these conditions are described to the candidate</li>
<li>the candidate is told that there is no abnormality in the  existing NPP conditions other than those just described</li>
<li>the positions and names of the applicable support team  members are identified to the candidate</li>
<li>the candidate is given a maximum of five minutes to  review the existing conditions prior to commencing the test.</li>
</ol>
</li>
<li>when the five minutes have elapsed, or sooner at the  request of the candidate, notify the candidate that the test scenario is about  to start and start conducting the test by running the scenario </li>
<li>during the conduct of the test:
<ol className="list-lower-alpha">
<li>ensure the test scenario proceeds as determined in the approved  examiner&#39;s guide including, as applicable to the scenario, the sequenced  malfunctions, the receipt of the key alarms, the response of the system  parameters, operation of the logic control circuits and the performance of the  support team </li>
<li>in parallel with the other examiner, record the  performance of the candidate in section 3 of the approved examiner&#39;s guide by  placing a check mark against each check or action, or group of checks or  actions, successfully performed by the candidate; document on the checklist any  change to the planned evolution of the test scenario, any significant deviation  from the checks to be made by the candidate applicable to the scenario and any  unexpected action performed by the candidate or any unexpected request to  support team members made by the candidate </li>
<li>the lead examiner, in consultation with the other  examiner, shall abort a test scenario if, at a minimum, one of the abort  conditions specified in part A of appendix C.19  arises at any time during the conduct of the test scenario. If an abort  condition is met:
<ol className="list-lower-roman">
<li>immediately instruct the simulator operator to freeze  the simulator</li>
<li>follow the abort instructions provided in part B of appendix  C.19</li>
</ol>
</li>
</ol>
</li>
<li>at the defined end point of a CTS or an ATS ensure  that:
<ol className="list-lower-alpha">
<li>the simulator operator freezes the simulator</li>
<li>the actual duration of the test scenario is recorded in  the approved examiner&#39;s guide</li>
<li>the candidate and the support team are informed that  the end point of the test scenario has been reached and that the simulator has  been frozen</li>
<li>the candidate is instructed to remain at the operator  desk and prevented from viewing the panels and alarms while the examination  team reviews the data collected in a secure location to determine whether any  performance clarification questions are required</li>
<li>the support team members are instructed to leave the simulator,  dropping off any documentation or notes with the examiners and to remain on  standby</li>
<li>in a secure location and away from the candidate&#39;s audible range, the examiners shall:
<ol className="list-lower-roman">
<li>compare the information recorded in the candidate action  checklist with that recorded by the other examiner to identify discrepancies in  the information gathered </li>
<li>determine if there is a need to ask the candidate any  supplementary questions to clarify any aspect of the observed performance based  on the discrepancies identified and on the individual recorded examiner notes, which may affect the assessment and grading of the candidate</li>
<li>document all supplementary questions in the lead examiner&#39;s approved examiner&#39;s guide before proceeding to ask the candidate
<div className="module">
<p>The supplementary questions should be strictly related to the observed performance  of the candidate and do not preclude the standard questions that are required  to be asked of the CRSS and PSS candidates immediately following the dynamic  portion of the test scenarios.</p>
</div>
</li>
</ol>
</li>
<li>if there is a need to ask the candidate any supplementary questions, that the audiovisual  system for recording the questions and the answers are in service, and that the  candidate answers are documented in parallel with the other examiner in the approved  examiner&#39;s guides</li>
<li>for the PSS and CRSS candidates, the non-dynamic portion  of the test scenario immediately continues by having the candidate respond to  the standard questions as specified in subsection 15.4
<div className="module">
<p>For the RO and U0O candidates, this represents the end of the test scenario. The audiovisual recordings can be stopped and the candidate can be permitted to leave the simulator.</p>
</div>
</li>
</ol>
</li>
<li>at the defined end point of a DTS ensure that:
<ol className="list-lower-alpha">
<li>the simulator operator freezes the simulator</li>
<li>the actual duration of the test scenario is recorded in  the approved examiner&#39;s guide</li>
<li>inform the candidate and the support team that the end  point of the test scenario has been reached and that the simulator has been  frozen</li>
<li>the candidate is instructed to remain at the operator  desk averted from viewing the panels and alarms</li>
<li>the support team members are instructed to leave the simulator  and to leave any documentation or notes with the examiners </li>
<li>the non-dynamic portion of the test scenario, applicable  to the PSS and CRSS candidates, immediately continues by having the candidate  respond to the standard questions as specified in subsection 15.4</li>
</ol>
</li>
</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="15.3"></div>
<h3 id="sec15-3" className="mrgn-tp-0">15.3 Conduct of the dynamic portion of a PCTS</h3>
<p>The lead examiner shall coordinate the conduct of a PCTS in accordance with the following requirements and instructions:</p>
<ol>
<li>prior to permitting a candidate into the simulator control room for the conduct of a PCTS ensure that:
<ol className="list-lower-alpha">
<li>a suitable test turnover area with a visual barrier is in place to prevent the candidate from seeing the simulator configuration</li>
<li>the simulator is set in the proper configuration for the test scenario</li>
<li>the audiovisual systems are in service and synchronized</li>
<li>any equipment out of service is properly identified on the panels in accordance with section 1, part B of the approved examiner&#39;s guide</li>
<li>the supporting documentation or information available to the candidates is limited to that approved for use in the control room at the NPP</li>
<li>the audiovisual system for recording communications  between the candidate and the support team members are in service</li>
</ol>
</li>
<li>when the candidate is permitted to enter the test turnover area in the simulator control room and prior to starting the conduct of the test scenario ensure:
<ol className="list-lower-alpha">
<li>the audiovisual system is recording </li>
<li>the candidate is given written turnover specifying the existing NPP conditions for the test scenario, as detailed in section 2 of the approved examiner&#39;s guide, and these conditions are described to the candidate</li>
<li>the candidate is given a copy of section 5 of the approved examiner&#39;s guide, and describe the verification task to be performed by the candidate and include any relevant NPP operating documentation that is necessary for the candidate to complete the task </li>
<li>the candidate is informed of the 15 minutes maximum time requirement for completing the verification task</li>
</ol>
</li>
<li>instruct the candidate to start performing the verification task with access to operating documentation </li>
<li>during the verification task:
<ol className="list-lower-alpha">
<li>monitor the panel checks the candidate performs, including those required by any supporting operating documentation, in parallel with the other examiner</li>
<li>respond to the expected requests for field verifications immediately following the candidate&#39;s request</li>
<li>in consultation with the other examiner, respond in a timely manner to any unanticipated requests made by the candidate for field verifications by providing the accurate information for the existing NPP conditions </li>
<li>note in section 3 of the approved examiner&#39;s guide any significant deviations from the required panel checks performed by the candidate and any unexpected requests  made by the candidate for field verifications </li>
</ol>
</li>
<li>at the end point of the PCTS, when the candidate has  completed the verification task or the 15 minute time limit has expired, instruct  the candidate to remain at the operator desk, prevented from viewing the panels and alarms, and immediately proceed to the required standard questions as specified in subsection 15.4 </li>
</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="15.4"></div>
<h3 id="sec15-4" className="mrgn-tp-0">15.4 Conduct of the standard questions for PSS and  CRSS candidates</h3>
<p>The lead examiner, following the dynamic portion of a  CTS, ATS, DTS and PCTS, shall: </p>
<ol>
<li>ensure the audiovisual system for recording the  questions and the answers are in service </li>
<li>for the CTS, ATS and DTS, ask the candidate the  standard questions in Part A or Part B of appendix C.15  applicable to the test scenario, as documented in the approved examiner&#39;s guide  and ensure that:
<ol>
<li>the candidate is reminded that access to operating  documentation is permitted for answering the questions </li>
<li>the questions are conducted one at a time and that the  candidate has finished answering a question before proceeding to the next  question
<div className="module">
<p>Caution  should be taken not to lead the candidate by indicating that the answer is  complete, satisfactory or otherwise.</p>
</div>
</li>
<li>a copy of the question is provided to the candidate and  read out loud</li>
<li>in parallel with the other examiner, document the  candidate&#39;s answers in section 3 of the approved examiner&#39;s guide and note any  significant differences with the expected answer</li>
<li>any operating documentation the candidate references is  recorded in the approved examiner&#39;s guide</li>
<li>after the candidate has answered all the standard  questions:
<ol>
<li>in a secure location and away from the candidate&#39;s  audible range, determine if there is a need to ask the candidate any  supplementary questions </li>
<li>document all supplementary questions in the lead  examiner&#39;s approved examiner&#39;s guide before proceeding to ask the candidate
<div className="module">
<p>Supplementary  questions are to be strictly related to the observed performance of the  candidate or to the answers given by the candidate and can not lead the  candidate to the correct response. The purpose of supplementary questions is to  obtain clarification on the observed performance or the answers given, which  may affect the assessment and grading of the candidate.</p>
</div>
</li>
</ol>
</li>
<li>if there is a need to ask the candidate any  supplementary questions, ensure the audiovisual system is recording the  questions and the answers, and that the candidate answers are documented in  parallel with the other examiner in the approved examiner&#39;s guides</li>
</ol>
</li>
<li>for the PCTS, immediately ask the candidate the first  standard question in part C of appendix&nbsp;C.15,  as documented in the approved examiner&#39;s guide and ensure that:
<ol>
<li>in parallel with the other examiner, the candidate&#39;s  answers are documented in section 3 of the approved examiner&#39;s guide and any  significant differences with the expected answer are noted</li>
<li>when  the candidate has completed answering the first question, the candidate is  given a copy of the remaining questions in part C and is given 10 minutes to prepare  for answering these questions orally, with access to operating documentation</li>
<li>when  the 10 minutes allocated time period has elapsed, the candidate is asked to  answer the remaining questions</li>
<li>after the candidate has answered all the standard  questions:
<ol>
<li>in a secure location and away from the candidate&#39;s  audible range, determine if there is a need to ask the candidate any supplementary  questions to obtain clarification where there is uncertainty on the observed  performance or on the answers given, which may affect the assessment and  grading of the candidate</li>
<li>document all supplementary questions in the lead  examiner&#39;s approved examiner&#39;s guide before proceeding to ask the candidate
<div className="module">
<p>The supplementary questions are to be strictly related to the observed performance of the candidate or to the answers given by the candidate and cannot lead the candidate to the correct answer.</p>
</div>
</li>
</ol>
</li>
<li>if there is a need to ask the candidate any supplementary questions, that the audiovisual system is recording the questions and the answers, and that the candidate&#39;s answers are documented in parallel  with the other examiner in the approved examiner&#39;s guides</li>
</ol></li>
<li>at the end the test scenario, stop the audiovisual recordings, permit the candidate to leave the control room and have the simulator operator collect the data recorded during the test scenario </li>
<li>in parallel with the other examiner, document the areas  of concern and any significant misconceptions demonstrated by the candidate in  the approved examiner&#39;s guide</li>
<li>complete a data collection checklist similar to that shown in appendix C.16  and ensure that it is attached to the data collected </li>
<li>ensure the data collected and the marked-up approved examiner&#39;s guides are securely stored</li>
<li>ensure there are no controlled copies of the approved examiner&#39;s guides or other material around that may compromise the security of the examination</li>
<li>ensure to reset the simulator and the control panel devices in preparation for the next candidate</li>
</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="15.5"></div>
<h3 id="sec15-5" className="mrgn-tp-0">15.5 End of examination conduct</h3>
<p>The lead examiner shall, at the completion of a  given examination when all the required test scenarios have been conducted, ensure  that:</p>
<ol>
<li>any simulator deficiencies or any deficiencies in the  NPP documentation encountered during the conduct of the examination is  documented and addressed accordingly</li>
<li>the necessary modifications to the approved examiner&#39;s  guides are made to account for any minor adjustments made during the conduct of  the examination and ensure the applicable GPEs listed in appendix C.1,  C.2 or C.3,  as appropriate are assigned to the additional actions or checks
<div className="module">
<p>During the conduct of a  simulator-based examination, any changes or adjustments made by the lead  examiner to the approved examiner&#39;s guides should only be of minor impact.  Circumstances may occur during conduct where the candidate performed the  expected action according to operational expectations, which was not adequately  or was inaccurately reflected in the examiner&#39;s guide and  was not identified during test validation or rehearsal. As a result, the lead examiner may need to  adjust the examination and corresponding candidates&#39; examiner&#39;s guides to  reflect such unforeseen circumstances. These adjustments should be formally  documented in the examiner&#39;s guides and used in the crediting and grading of the  individual candidate or of all of the candidates. </p>
<p>An examination that has been  validated by a currently certified incumbent should not cause the candidate to  deviate from the expected course of action in a manner that results in a  significant shift from the approved examiner&#39;s guide. Such candidate deviations  should result in the examination, or part thereof, to be aborted or invalidated  and redesigned. </p>
</div>
</li>
<li>any minor adjustments made as described in 2 above are  documented in section 1, part C of each of the candidate&#39;s examiner&#39;s guide</li>
<li>the approved examiner&#39;s guides are authorized prior to  the assessment of the candidate&#39;s performance and the grading of the  examination</li>
<li>for any candidate for whom a CTS or an ATS was aborted  and not resumed, that:
<ol className="list-lower-alpha">
<li>the part of the examination completed by the candidate  meets the minimum criteria for a CTS or an ATS and meets the minimum criteria for  the examination as specified in section 14,  and:
<ol className="list-lower-roman">
<li>if the part of the examination completed meets those  minimum criteria, proceed with the first assessment of the candidate in  accordance with section 16</li>
<li>if the part of the examination completed does not meet  those minimum criteria and a fail grade was not assigned on the part of the  examination that was completed, one or more additional test scenarios needs to be designed, developed and conducted to complete the examination of the candidate</li>
</ol>
</li>
</ol>
</li>
<li>for any candidate for whom a DTS was aborted and not  resumed, that:
<ol className="list-lower-alpha">
<li>the assessment of the candidate is performed for the  part of the examination that was completed</li>
<li>if the candidate is not assigned a failed grade on the  part of the examination that was completed, one or more additional DTSs need to  be designed, developed and conducted to complete the examination of the  candidate</li>
</ol>
</li>
<li>a file with all the data collected during the conduct  of the examination, as specified in the data collection checklist (appendix  C.16), and the marked up authorized examiner&#39;s guides from both members of the  examination team is prepared for each candidate and used in the assessment and  grading as specified in section 16 </li>
</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="16"></div>
<h2 id="sec16" className="mrgn-tp-0">16. Grading of Examinations</h2>
<p>The licensee shall  have documented policies, processes and procedures in place regarding the  grading of performance-based examinations. This shall include the following:</p>
<ol>
<li>the examinations shall be graded immediately or as soon  as practicable after conduct
<div className="module">
<p>The  grading of examinations is an integral part of the administration of the  certification examination process. Grading should be completed immediately  following the conduct of a certification examination. This regulatory document  does not stipulate an absolute deadline for grading examinations to allow  licensees to deal with unforeseen circumstances. However as part of administering  the certification examinations, licensees should have the necessary resources  from the onset of planning a given examination.</p>
</div>
</li>
<li>the results of each candidate shall be determined using  the data collected during the conduct of the examination</li>
<li>the approved examiner&#39;s guides shall be authorized by  the training manager prior to the assessment of the candidate&#39;s performance and  the grading of the examination</li>
<li>only the examination team involved in the design and  conduct of the examination shall perform the first and second assessment of the  candidates&#39; performance and perform the grading of the complete examination</li>
<li>the examination team shall perform the grading in  accordance with sections 16.1-16.3</li>
<li>the grading of the complete examination shall be  performed on one candidate at a time</li>
<li>the first assessment and grading shall be completed on  all candidates prior to performing the second assessment</li>
<li>the second assessment and grading shall be performed on  selected candidates by an examiner who did not perform the first assessment and  grading on those candidates</li>
<li>a critical or significant error assessment form, which contains  the information shown in appendix C.21, shall be completed for each candidate  if applicable</li>
<li>an  examination result form, which contains the information shown in appendix C.23  shall be completed for each candidate</li>
</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="16.1"></div>
<h3 id="sec16-1" className="mrgn-tp-0">16.1 First assessment</h3>
<p>The lead examiner shall ensure that the candidate  files are divided between the members of the examination team for the first  assessment and that the first assessment of each candidate is performed in  accordance with the following: </p>
<ol>
<li>for each test scenario, prepare a new copy of the  authorized examiner&#39;s guide for each candidate</li>
<li>using the file created for each candidate as described  in section 16.4 paragraph 7, check off in the new candidate action checklist  for each test scenario the items for which both examiners gave credit in their  respective candidate action checklists during the conduct of the examination</li>
<li>in the case when a test was aborted, assess only those  actions and checks that the candidate had an opportunity to perform up to the  point where the abort condition occurred</li>
<li>grade the complete examination of one candidate at a  time</li>
<li>whenever a performance item in the candidate action  checklist has not been credited or has been credited by only one examination  team member or is unclear, refer to the corresponding alarm message printout, the  operator action monitor printout and the audiovisual recording to determine  whether the credit is warranted
<div className="module">
<p>The  parameter trends recorded during the rehearsal of the test scenario performed  during the development of the examination may be used as a reference for this determination.</p>
</div>
</li>
<li>record the result of the determination from paragraph 5  above and the rationale in the candidate action checklist</li>
<li>for a CRSS or PSS candidate, whenever an answer item to  a standard question has not been credited or has been credited by only one  examination team member or is unclear, refer to the corresponding alarm message  printout, the operator action monitor printout and the audiovisual recording to  determine whether the credit is warranted or not</li>
<li>record the result of the determination from paragraph 7  above and the rationale in the candidate action checklist</li>
<li>for a CRSS or PSS candidate, record any unexpected  answers to a standard question given by the candidate at the proper location in  the candidate action checklist </li>
<li>if  a supplementary question was asked, record the question and the candidate&#39;s  response in the candidate action checklist</li>
<li>review  all the data in the consolidated new candidate action checklist and for each:
<ol className="list-lower-alpha">
<li>omitted action or check</li>
<li>unexpected action or check</li>
<li>omitted or unexpected answer to a standard question</li>
</ol>
<p>determine,  considering the answer to any supplementary question, whether it constitutes a  critical or a significant error according to the criteria in appendix C.20</p>
</li>
<li>for  each critical or significant error identified, complete a critical or significant  error assessment form similar to that shown in appendix C.21</li>
<li>compile  and record at the end of the consolidated checklist any areas of concern related  to the candidate&#39;s performance or knowledge found during conduct or the first  assessment of the examination, including the responses to any supplementary questions</li>
<li> refer to the corresponding audiovisual recording to confirm that the areas of concern are accurately described</li>
<li>perform  the first grading in accordance with paragraph 16.1.1</li>
</ol>
<h4>First  grading of the examination</h4>
<p>As part of the first assessment, the examination team shall:</p>
<ol>
<li>calculate, by referring to appendix C.22, the scores obtained by each candidate using all consolidated candidate action checklists and  document the following:
<ol className="list-lower-alpha">
<li>the score obtained for each generic performance  expectation in the entire examination</li>
<li>the score obtained for each competency area in each  test scenario</li>
<li>the score obtained for each competency area in the  entire examination</li>
</ol>
</li>
<li>assign a pass result or a fail result in accordance  with subsection 16.3 </li>
<li>complete an examination result formfor each candidate that contains the information shown in appendix  C.23 </li>
<li>at the completion of the first assessment, sign and  date the cover page of each candidate&#39;s consolidated examiner&#39;s guide</li>
</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="16.2"></div>
<h3 id="sec16-2" className="mrgn-tp-0">16.2 Second assessment</h3>
<p>Upon completion of the first assessment and grading  of all candidates in accordance with subsection 16.1 and paragraph 16.1.1, the second  assessment of each candidate shall be performed in accordance with the  following: </p>
<ol>
<li>the training manager shall:
<ol className="list-lower-alpha">
<li>approve the candidates selected by the examiners to  undergo a second assessment</li>
<li>select a minimum of one candidate graded by each  examiner who performed the first assessment </li>
<li>ensure the second assessment of a candidate is  performed by the member of the examination team who did not perform the first  assessment </li>
<li>ensure the second assessment is performed on one  candidate at a time in accordance with the instructions for the first  assessment given in  section 16.1
<div className="module">
<p>The  minimum second grading requirement is to perform a calibration check on the  accuracy of the examiner&#39;s guide and assessment of the grading process.</p>
</div>
</li>
</ol>
</li>
<li>the lead examiner shall select candidates for a second  assessment according to the following criteria:
<ol className="list-lower-alpha">
<li>candidates who do not meet any of the pass criteria in section  16.3</li>
<li>candidates for whom the examiner who did the first  assessment recommends a second assessment </li>
<li>candidates for whom significant changes to the planned  evolution of a CTS or an ATS occurred</li>
<li>additional candidates at the discretion of the training  manager or lead examiner</li>
</ol>
</li>
<li>the examination team shall:
<ol className="list-lower-alpha">
<li>perform the second assessment using the signed consolidated  examiner&#39;s guides of the candidate, any completed critical or significant error  assessment form, the scores obtained by the candidate in the examination, the  candidate&#39;s comment file and any examination files of the candidate from the  examiner who performed the first assessment</li>
<li>ensure that any changes made to the information  documented and recorded by the first examiner, as a result of this second  assessment, are clearly identified in the consolidated examiner&#39;s guide </li>
<li>make the necessary changes to the simulator-based examination result forms  of the candidates and sign the forms</li>
</ol>
</li>
</ol>
<h4>Second grading of the examination and reconciliation of results</h4>
<p>Upon completion of the second assessment of all the  candidates selected in accordance with section 16.2,  the examiner shall perform the second grading of the examination in accordance  with the procedure for the first grading.</p>
<p>Once the scores obtained by each candidate have been  calculated, the examiners who performed the first and the second assessment  shall: </p>
<ol>
<li>meet to resolve any discrepancies between their two  assessments and document how these discrepancies were resolved
<div className="module">
<p>The  examiners should refer to the audiovisual recordings of the candidate&#39;s  performance to resolve discrepancies of actions taken or not taken by the  candidate during the conduct of a test scenario. </p>
</div>
</li>
<li>review the complete examination of one candidate at a  time</li>
<li>document the reconciled examination results and the  justifications in the original simulator-based examination result form and the critical  or significant error assessment form for each candidate </li>
<li>ensure that any final changes made to consolidated  examiner&#39;s guide for each candidate have the required reviews and approvals</li>
</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="16.3"></div>
<h3 id="sec16-3" className="mrgn-tp-0">16.3 Assignment of examination results</h3>
<p>The examination team shall assign a pass or fail result to a given certification examination in accordance with the following criteria:</p>
<ol>
<li>a pass result shall be assigned to an examination if a candidate has either:
<ol className="list-lower-alpha">
<li>scored 80 percent or higher in each competency area and has not made a critical error or no more than two significant errors with no  more than one significant error in the same competency</li>
<li>has scored 70 percent or higher in no more than one competency area with 80 percent or higher for the average of all competency areas, and has not made acritical error or no more than two significant errors with no more than one significant error in the same competency </li>
</ol>
</li>
<li>a fail result shall be assigned to a given examination  if a candidate has not met the pass criteria above</li>
<li>the examination team shall:
<ol className="list-lower-alpha">
<li>document the final examination results and the justifications in the original simulator-based examination result form for each  candidate</li>
<li>ensure the results form is reviewed and signed by the training manager</li>
</ol>
</li>
</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="17"></div>
<h2 id="sec17" className="mrgn-tp-0">17. Examination Follow-Up</h2>
<p>At the completion of the examination, the following  steps shall be performed:</p>
<ol>
<li>The examination team shall document and report to the  training manager any significant performance deficiencies revealed by a  candidate or by an examination.
<div className="module">
<p>The  deficiencies revealed by an examination should include those found in the  examination design, conduct, grading, simulator fidelity, NPP procedures or  training program.</p>
</div>
</li>
<li>The examiners shall ensure that a final assessment  package is compiled for each candidate consisting of:
<ol className="list-lower-alpha">
<li>the completed simulator-based examination result form signed  by both examiners and authorized by the training manager</li>
<li>the final scores obtained in the examination</li>
<li>the final version of the candidate&#39;s comment file, if  applicable</li>
<li>any completed critical or significant error assessment  formsigned by both examiners</li>
<li>the consolidated examiner&#39;s guide signed by both  examiners</li>
<li>the signed test scenarios and examination checklists</li>
</ol>
</li>
<li>The training manager shall:
<ol className="list-lower-alpha">
<li>after authorizing the results of any given  simulator-based certification examination, ensure that a copy of the assessment  package specified in 17.2 above is made available to the CNSC upon request and that  the CNSC is formally notified of all the results of each candidate</li>
<li>ensure that each candidate who was assigned a pass  result receives and completes remedial training and formal evaluations in all areas  identified as deficient by the grading process to confirm and document that the  candidate has successfully attained the level of knowledge and skills required to  competently perform in the certified position</li>
<li>ensure that any deficiencies revealed in 17.1 above are  addressed</li>
</ol>
</li>
</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="A"></div>
<h2 id="app-a" className="mrgn-tp-0">Appendix A: Simulator Capabilities for Existing Licensed Nuclear  Power Plants </h2>
<p>Simulators  used for certification examinations for RO, U0O, PSS and CRSS candidates must  meet the requirements specified below.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="A.1"></div>
<h3 id="app-a-1" className="mrgn-tp-0">A.1 Minimum acceptable simulation capabilities</h3>
<p>Simulators must be capable of simulating, realistically and in real  time, all significant nuclear power plant (NPP) manoeuvres and transients,  including:</p>
<ul>
<li>normal </li>
<li>NPP anticipated operational occurrences </li>
<li>NPP design-basis accidents</li>
</ul>
<p>For conditions and failures, such as pipe breaks, loss of inventory, loss of flow, loss of pressure and loss of vacuum, for which unit response and operator actions are a function of the degree of  severity of the condition or failure, the simulator must have adjustable rates  for the condition or failure covering its entire possible range.</p>
<p>Specifically, simulators must be capable of  simulating the abnormal, transient and emergency conditions and failures listed  below.</p>
<p><strong>Note</strong> In the list, loss of a system includes, but is not limited to, loss of circulation, loss of cooling and loss of inventory.</p>
<h4 id="app-a-1-1">A1.1 Special safety systems</h4>
<ol>
<li>shutdown  system (SDS) 1 and SDS 2 trips on all parameters (at the applicable NPPs)</li>
<li>reactor protective system (SDSA) and shutdown system enhancement (SDSE) trips on all parameters (at the applicable NPP)</li>
<li>neutron overpower detector response to abnormal flux shapes</li>
<li>spurious initiation of any special safety system, including for the emergency core cooling system spurious loop isolation, where  applicable, and spurious crash cooling </li>
<li>safe and unsafe failures of any channel of any special safety system, including failures of start-up instrumentation</li>
<li>any special safety system impairment documented in plant procedures that is observable from the main control room</li>
</ol>
<h4 id="app-a-1-2">A.1.2 Reactivity effects and reactivity control</h4>
<ol>
<li>any  shutoff or absorber rod falling partially or fully in core</li>
<li>any adjuster or absorber rod driving out of sequence</li>
<li>any shutoff, adjuster or absorber rod stuck out of  core, or partially or fully in core </li>
<li>reactor stepback on all parameters (at the applicable  NPPs)</li>
<li>reactor setback on all parameters</li>
<li>single and dual computer failures</li>
<li>drifts and failures of input and output signals of the  reactor regulation system control program, including drifts and failures of  nuclear instrumentation </li>
<li>single and dual failures of the reactor regulation  system control program, including failures of the stepback program where  applicable</li>
<li>loss of reactor regulation</li>
<li>reactor flux tilts</li>
<li>drifts and failures of input signals of the flux mapping, ZOTPR, FINCH or CTM computer  program, as applicable</li>
<li>single and dual failures of the flux mapping, ZOTPR, FINCH or CTM computer program, as  applicable</li>
<li>liquid zone control system failures, including:
<ol className="list-lower-alpha">
<li>loss of helium inventory</li>
<li>loss of balance header pressure control</li>
<li>loss of bubbler header pressure control</li>
<li>loss of water pressure</li>
<li>loss of water inventory, including leak of a zone  compartment to the moderator</li>
<li>loss of water flow to any zone compartment</li>
</ol>
</li>
</ol>
<h4 id="app-a-1-3">A.1.3 Heat transport system</h4>
<ol>
<li>pressure tube leaks into annulus gas</li>
<li>reactor fuel channel flow blockages</li>
<li>loss-of-coolant accidents (LOCAs) from reactor inlet feeders and headers</li>
<li>LOCAs from reactor outlet feeders and headers</li>
<li>in-core LOCAs caused by the failure of a pressure tube and its calandria tube</li>
<li>boiler tube failures on any boiler</li>
<li>preheater tube failures on any preheater (at the  applicable NPPs)</li>
<li>failure of any seal or combination of seals on any main  heat transport pump</li>
<li>trip of any one or more main heat transport pumps</li>
<li>natural modes of heat transport circulation under abnormal and emergency conditions, including single phase and two phase thermosyphoning</li>
<li>operation with the heat transport system partially drained</li>
<li>failures associated with inter-unit D2O transfers at multi-unit plants</li>
<li>heat transport system pressure and inventory control failures, including:
<ol className="list-lower-alpha">
<li>drifts and failures of input and output signals</li>
<li>single and dual failures of the associated control programs, where applicable</li>
<li>loss of control in normal and in solid mode (at the applicable NPPs)</li>
</ol>
</li>
<li>failure open or closed of one or two feed or bleed valves</li>
<li>single and dual heat transport feed pump trips</li>
<li>failure open of one or more heat transport system liquid relief valves</li>
<li>failure open of one or two pressurizer steam bleed valves or relief valves (Pickering NGS A and B excepted)</li>
<li>pressurizer  steam bleed line failure (at the applicable NPPs)</li>
<li>failure open of one or two bleed condenser relief valves (600-MW plants excepted)</li>
<li>failure open of one or two degasser condenser relief valves at 600-MW plants</li>
<li>bleed condenser tube bundle leaks (600-MW plants excepted)</li>
<li>bleed cooler or degasser condenser cooler tube leaks, as applicable</li>
<li>loss of shutdown or maintenance cooling system, as applicable, including heat exchanger tube failures</li>
<li>high activity in the heat transport system</li>
</ol>
<h4 id="app-a-1-4">A.1.4 Heat sinks</h4>
<ol>
<li>loss of condenser vacuum</li>
<li>loss of condenser cooling water</li>
<li>loss of condensate, including pipe breaks</li>
<li>deaerator level control failures, including:
<ol className="list-lower-alpha">
<li>drifts and failures of input and output signals</li>
<li>single and dual control program failures, where applicable</li>
</ol>
</li>
<li>loss of feedwater to any combination of boilers</li>
<li>failures associated with inter-unit feedwater ties, where applicable</li>
<li>loss of emergency feedwater to the boilers</li>
<li>boiler level control failures, including:
<ol className="list-lower-alpha">
<li>drifts and failures of input and output signals </li>
<li>single and dual failures of the boiler level control program (at the applicable NPPs)</li>
</ol>
</li>
<li>symmetric and asymmetric boiler feed line breaks, inside and outside containment </li>
<li>boiler  pressure control failures, including:
<ol className="list-lower-alpha">
<li>drifts and failures of input and output signals of the boiler  pressure control program</li>
<li>single and dual failures of the boiler pressure control program</li>
</ol>
</li>
<li>failure open or close of one or more ASDVs or CSDVs (at the applicable NPPs)</li>
<li>failure open or close of one or more safety relief valves (SRVs) (at the applicable NPPs)</li>
<li>symmetric and asymmetric main steam line breaks outside containment</li>
<li>steam line breaks inside containment, where applicable</li>
<li>loss of moderator system, including:
<ol className="list-lower-alpha">
<li>pipe breaks inside and outside containment or  confinement</li>
<li>heat exchanger tube leaks</li>
<li>calandria tube leaks into annulus gas</li>
</ol>
</li>
<li>moderator temperature control failures, including:
<ol className="list-lower-alpha">
<li>drifts and failures of input and output signals</li>
<li>single and dual control program failures, where  applicable</li>
<li>spurious crash cooling of the moderator system</li>
</ol>
</li>
<li>loss of end shield cooling system, including pipe breaks</li>
<li>loss of service water systems, such as low pressure service water, high pressure service water, recirculated cooling water and common service water, including pipe breaks</li>
</ol>
<h4 id="app-a-1-5">A.1.5 Electrical systems</h4>
<ol>
<li>failure of one or more transmission lines</li>
<li>partial and complete main generator load rejections</li>
<li>failures of one or more switchyard breakers and buses</li>
<li>large main generator load variations due to system  frequency disturbances </li>
<li>loss of isolated phase bus cooling</li>
<li>loss of Class IV power</li>
<li>loss of Class III power</li>
<li>loss of Class IV and Class III power</li>
<li>failure of any Class IV bus </li>
<li>failure of any Class IV breaker</li>
<li>failure of any Class III bus </li>
<li>failure of any Class III breaker</li>
<li>effects of the loss of any Class II or Class I power supply, bus, panel and fuse</li>
<li>trip  and failure to start of one or more standby generators</li>
<li>electrical  transfer failures</li>
<li>transformer  failures</li>
<li>inverter,  converter and rectifier failures</li>
<li>emergency  power system failures, including trip or failure to start of one or more  emergency power generators</li>
</ol>
<h4 id="app-a-1-6">A.1.6 Process  systems</h4>
<ol>
<li>loss of instrument air and service air</li>
<li>partial loss of instrument air and service air</li>
<li>failures associated with inter-unit instrument air and  service air ties, at multi-unit plants</li>
<li>loss of component cooling, including, but not limited  to, pumps, compressors and heat exchangers</li>
<li>process system instrumentation, alarms and control failures</li>
</ol>
<h4 id="app-a-1-7">A.1.7 Overall unit</h4>
<ol>
<li>turbine trips</li>
<li>main generator or exciter trips</li>
<li>failure of any main steam valve</li>
<li>drifts and failures of input and output signals of the turbine governing system and the turbine tripping system</li>
<li>drifts and failures of input and output signals of the unit power regulator control program and turbine run-up control program</li>
<li>single and dual failures of unit power regulator control program</li>
<li>single and dual failures of turbine run-up control program</li>
<li>manual poison prevent operation and pseudo poison prevent  operation</li>
<li>loss of main steam reheat system</li>
<li>failure of the moisture separator drains system</li>
<li>main generator seal failures </li>
<li>loss of main generator hydrogen cooling, including heat exchanger tube leaks</li>
<li>loss of main generator stator cooling, including pipe breaks</li>
<li>condenser tube leaks</li>
<li>loss of any low pressure or high pressure feedwater heater, or heater bank, including tube breaks</li>
<li>deuterium excursions</li>
</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="A.2"></div>
<h3 id="app-a-2" className="mrgn-tp-0">A.2 Data collection devices</h3>
<p>Simulators must be equipped with data recording devices that meet the  requirements specified in paragraphs 1 to 2.b. These devices must be capable of being synchronized to within two seconds of each other.</p>
<ol>
<li>simulators must be equipped with an operator action monitor capable of printing in chronological order, with their respective time of occurrence, all malfunctions initiated by the simulator operator and all the actions performed on the control panels during a test scenario</li>
<li>simulators must have provisions for either:
<ol className="list-lower-alpha">
<li>tracing, with adequate precision, graphics of any selection of 48 system parameters versus time for up to two hours and for printing those graphics</li>
<li>storing and printing the values versus time of any selection of 48 system parameters sampled at an adequate frequency during a period of up to two hours</li>
</ol>
</li>
<li>the simulator must be equipped with an audiovisual system that:
<ol className="list-lower-alpha">
<li>is capable of recording all actions performed by a candidate in the control room during a test scenario</li>
<li>has sufficient resolution to permit the examiners to identify, with the aid of the corresponding control panel photographs, the controls and instruments used by a candidate</li>
<li>is capable of displaying time on the recordings</li>
<li>is capable of recording clearly all verbal communications and telephone conversations between a candidate and other team members during a test scenario</li>
<li>allows for an easy identification of the voices of the different participants</li>
</ol>
</li>
</ol>
<p>The simulator operating facility must be separated from the control room  so that a candidate cannot become aware of the data recorded or of the inputs  to the simulator being entered by the simulator operator.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="A.3"></div>
<h3 id="app-a-3" className="mrgn-tp-0">A.3 Other devices</h3>
<p>Simulators must be equipped with the following functional devices, which  replicate those of the plant&#39;s main control room:</p>
<ol>
<li>a telephone system</li>
<li>a radiation emergency warning siren</li>
<li>a fire emergency warning siren</li>
<li>a public address system  </li>
</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="B"></div>
<h2 id="app-b" className="mrgn-tp-0">Appendix B: Knowledge-based Certification Examinations - Additional Requirements</h2>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="B.1"></div>
<h3 id="app-b-1" className="mrgn-tp-0">B.1	Topic groups for the general  examinations for RO, PSS and CRSS candidates</h3>
<p>These required topic groups are based on the training program in science  fundamentals and equipment principles for RO candidates that have been  developed in accordance with the principles of a systematic approach to  training (SAT).</p>
<p>
The various topics that should be covered in the general examinations for  RO, PSS and CRSS candidates have been provided for each required group, as  shown below in a guidance box, to assist in their selection so that each  examination contains an appropriate mix of topics to cover the knowledge that  ROs, PSSs and CRSSs are required to have. All topics selected within a topic  group shall be linked to specific learning objectives in accordance with  subsection 9.3 and made available to the CNSC upon request.</p>
<p>
The required topic groups, total marks and marks to be allocated to  questions are identified below in bold and shall be used by the examination  team to design and develop the General certification examinations.</p>
<p><strong>Total marks: 100</strong></p>
<h4>A) Principles of reactor operation and control</h4>
<div className="col-md-12 mrgn-bttm-0">
<div className="col-md-2  mrgn-bttm-md"><strong>Group 1</strong></div>
<div className="span-3 mrgn-bttm-md"><strong>Reactor physics fundamentals</strong></div>
<div className="col-md-3  mrgn-bttm-md"><strong>Marks: 7 &plusmn; 2</strong></div>
</div>
<div className="clear"></div>
<ol className="mrgn-tp-0">
<li>fission chain reaction, including:
<ol className="list-lower-alpha">
<li>prompt and delayed neutrons and associated effects</li>
<li>neutron life cycle and the six factor formula</li>
</ol></li>
<li>moderator properties and moderation process</li>
<li>neutron interactions with reactor core materials</li>
<li>heat production in a reactor</li>
<li>spatial dependence of the neutron flux in a reactor</li>
<li>critical reactor operation, including:
<ol className="list-lower-alpha">
<li>power response to positive and negative reactivity  insertions</li>
<li>reactor period</li>
<li>prompt jump or drop</li>
</ol></li>
<li>subcritical reactor operation, including:
<ol className="list-lower-alpha">
<li>sources of neutrons</li>
<li>power response to positive reactivity insertions</li>
<li>power doubling rule</li>
</ol></li>
<li>prompt  criticality </li>  </ol>  <div className="col-md-12 mrgn-bttm-0">
<div className="col-md-2  mrgn-bttm-md"><strong>Group 2</strong></div>
<div className="span-3 mrgn-bttm-md"><strong>Reactivity effects</strong></div>
<div className="col-md-3  mrgn-bttm-md"><strong>Marks: 14 &plusmn; 2</strong></div>
</div>
<div className="clear"></div>
<ol>
<li>reactivity effects arising from operation at high  power, including:
<ol className="list-lower-alpha">
<li>burn up of U-235</li>
<li>build up of fission products</li>
<li>production and removal of xenon and samarium</li>
<li>xenon and samarium transients</li>
<li>build up and burn up of plutonium isotopes</li>
<li>plutonium transients</li>
<li>reactivity changes due to burn-up</li>
</ol></li>
<li>addition and removal of chemical neutron poisons in the  moderator for reactivity control, including:
<ol className="list-lower-alpha">
<li>poisons used under various operating conditions</li>
<li>limits on poison concentrations</li>
<li>methods of verification and control of poisons</li>
</ol></li>
<li>xenon oscillations and flux tilts, including:
<ol className="list-lower-alpha">
<li>causes of xenon oscillations</li>
<li>means of controlling xenon oscillations</li>
</ol></li>
<li>effects of temperature changes on reactivity,  including:
<ol className="list-lower-alpha">
<li>temperature coefficients of reactivity</li>
<li>power coefficient and its effect on reactor regulation  and protection</li>
<li>moderator temperature limit and consequences of  operating above that limit</li>
</ol></li>
<li>effects of coolant voids on reactivity, including  effect of core voiding on neutron flux detectors during a large LOCA</li>
<li>moderator and heat transport coolant isotopic limits,  including:
<ol className="list-lower-alpha">
<li>reason for these limits</li>
<li>consequences of operating outside the limits</li>
<li>relationship between moderator and heat transport  coolant isotopic limits</li>
</ol></li>
<li>reactivity changes after a reactor shutdown</li>  </ol>  <div className="col-md-12 mrgn-bttm-0">
<div className="col-md-2 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0 "><strong>Group 3</strong></div>
<div className="span-3 mrgn-lft-md mrgn-rght-0 mrgn-bttm-0"><strong>Reactor control and instrumentation</strong></div>
<div className="col-md-3 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0 "><strong>Marks: 14 &plusmn; 2</strong></div>
</div>
<div className="clear"></div>
<ol>
<li>principles of bulk and zone power regulation, including  reactivity mechanisms used and their principles of operation</li>
<li>principles of reactor protection</li>
<li>neutron flux measurements, including types of signals  required for reactor regulation and protection</li>
<li>neutron flux instrumentation, including:
<ol className="list-lower-alpha">
<li>principles of operation of in-core and out-of-core  start-up instrumentation</li>
<li>principles of operation of ion chambers</li>
<li>principles of operation of in-core detectors</li>
<li>factors affecting the accuracy of ion chamber and  in-core detector flux measurements</li>
</ol></li>
<li>thermal power measurements for reactor regulation</li>
<li>principles of operation of thermal power  instrumentation, including factors affecting the accuracy of thermal power  measurements at various power levels</li>
<li>calibration of bulk and zone neutron flux measurements  for reactor regulation and protection</li>
<li>calibration of thermal power measurements for reactor  regulation</li>
<li>flux shapes, including:
<ol className="list-lower-alpha">
<li>analyzed and unanalyzed flux shapes</li>
<li>flux flattening</li>
<li>effects of fuelling on flux shape</li>
<li>effects of configurations of reactivity mechanisms</li>
<li>channel power peaking factor </li>
<li>reactor overpower protection at high power</li>
</ol></li>
<li>preferred  reactor state for refuelling</li>
<li>reactor  power rundown after a trip</li>
<li>approach  to criticality, including:
<ol className="list-lower-alpha">
<li>use of special instrumentation for reactor regulation  and protection</li>
<li>methods of approach to criticality</li>
<li>monitoring during an approach to criticality</li>
<li>confirmation of criticality</li>
<li>precautions to be taken during an approach to  criticality</li>
</ol></li>  </ol>
<h4>B) Principles of heat transfer and thermodynamics</h4>
<div className="col-md-12  mrgn-bttm-0">
<div className="col-md-2 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0 "><strong>Group 4</strong></div>
<div className="span-3 mrgn-lft-md mrgn-rght-0 mrgn-bttm-0"><strong>Reactor and heat transport system</strong></div>
<div className="col-md-3 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0 "><strong>Marks: 14 &plusmn; 2</strong></div>
</div>
<div className="clear"></div>
<ol>
<li>principles of fuel cooling, including:
<ol className="list-lower-alpha">
<li>modes of fuel cooling</li>
<li>heat transfer processes from the fuel to coolant</li>
<li>factors affecting critical heat flux</li>
<li>dryout in a fuel channel</li>
<li>coolant boiling</li>
</ol></li>
<li>fuel cooling by natural circulation, including:
<ol className="list-lower-alpha">
<li>principle of operation of thermosyphoning</li>
<li>single-phase and two-phase thermosyphoning</li>
<li>system parameters monitored during thermosyphoning</li>
<li>system parameters controlled during thermosyphoning and  consequences of inadequate control</li>
<li>cooling by intermittent buoyancy induced flow (IBIF)</li>
</ol></li>
<li>heat removal during small and large LOCAs, including:
<ol className="list-lower-alpha">
<li>need for reactor trip</li>
<li>crash cooling</li>
<li>heat transport system (HTS) blowdown and refill by the  emergency coolant injection system</li>
<li>impact of dousing in containment</li>
</ol></li>
<li>reactor, channel power and fuel bundle operating limits</li>
<li>fuel temperature profiles under various conditions</li>
<li>coolant temperature and heat flux profiles along a fuel  channel</li>
<li>abnormal conditions that can lead to fuel overheating</li>
<li>fuel damage, including:
<ol className="list-lower-alpha">
<li>contributing factors</li>
<li>fuel sheath behaviour with temperature and irradiation</li>
<li>sheath failure mechanisms</li>
<li>methods of detection and location of fuel failures</li>
</ol></li>
<li>HTS pressure control, including:
<ol className="list-lower-alpha">
<li>principles of operation of the pressurizer</li>
<li>consequences of operating outside normal pressurizer  level and temperature ranges</li>
<li>principles of operation of the bleed condenser</li>
<li>non-condensable gas build up in the bleed condenser</li>
</ol></li>  </ol>
<div className="col-md-2 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Group 5</strong></p>
</div>
<div className="span-3 mrgn-lft-md mrgn-rght-0 mrgn-bttm-0">
<p><strong>Secondary systems</strong></p>
</div>
<div className="col-md-3 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Marks: 11 &plusmn; 2</strong></p>
</div>
<div className="clear"></div>
<ol>
<li>principles of operation of the boilers, including:
<ol className="list-lower-alpha">
<li>heat transfer processes from HTS coolant to the boiler  water</li>
<li>relationship between boiler pressure and heat transfer</li>
<li>principles of boiler pressure control</li>
<li>boiler pressure changes during HTS warm-up and  cool-down </li>
<li>steady state and transient swell and shrink of boiler  water</li>
<li>principles of boiler level control at various power  levels</li>
<li>causes, operational concerns and consequences of abnormal  boiler levels</li>
</ol></li>
<li>principles of operation of a multi-stage turbine,  including:
<ol className="list-lower-alpha">
<li>heat to work conversion process in the turbine</li>
<li>factors affecting turbine efficiency and integrity</li>
<li>control of turbine load</li>
<li>moisture separation and steam reheat</li>
<li>turbine exhaust overheating</li>
</ol></li>
<li>principles of operation of the condenser, including:
<ol className="list-lower-alpha">
<li>heat transfer processes in the condenser</li>
<li>factors affecting the pressure in the condenser</li>
<li>undesirable conditions in the condenser</li>
</ol></li>
<li>principles of operation of the feed heaters, including undesirable  conditions in feed heaters</li>
<li>principles of operation of the deaerator, including  causes and consequences of deaerator pressure upsets</li>
<li>factors that impact on secondary cycle efficiency</li>
<li>precautions necessary when filling or draining a heat  exchanger</li>
<li>principles of operation of combustion turbines and  undesirable operating conditions</li>  </ol>
<h4>C) Principles of CANDU plant equipment</h4>
<div className="col-md-2 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Group 6</strong></p>
</div>
<div className="span-3 mrgn-lft-md mrgn-rght-0 mrgn-bttm-0">
<p><strong>Mechanical equipment</strong></p>
</div>
<div className="col-md-3 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Marks: 12 &plusmn; 2</strong></p>
</div>
<div className="clear"></div>
<ol>
<li>vibrations in turbine generators and other rotating  machines, including:
<ol className="list-lower-alpha">
<li>major causes and operating conditions that can affect  them</li>
<li>operating conditions that may affect critical speeds</li>
</ol></li>
<li>equipment damage caused by excessive vibrations</li>
<li>causes and prevention of cavitation in CANDU plants</li>
<li>steam and water hammer in CANDU plants, including:
<ol className="list-lower-alpha">
<li>causes</li>
<li>resulting equipment damage</li>
<li>operating practices to minimize the risk of their  occurrence</li>
</ol></li>
<li>operation of centrifugal pumps, including:
<ol className="list-lower-alpha">
<li>operational changes influencing operation of the pumps</li>
<li>pump cavitation and its consequences</li>
<li>operational changes that may cause pump cavitation</li>
<li>operating conditions that could lead to gas locking and  vapour locking</li>
<li>consequences of gas or vapour locking of a pump</li>
<li>major causes and consequences of pump run out</li>
<li>consequences of reverse rotation</li>
<li>pump problem diagnosis</li>
<li>pump start-up sequence and start-up precautions</li>
<li>precautions during pump shutdown and isolation</li>
</ol></li>
<li>positive displacement pump start-up</li>
<li>principles of operation and operational aspects of  compressors and vacuum pumps</li>
<li>consequences of excessive moisture in compressed air  piping and receivers</li>
<li>consequences and operational concerns associated with inadequate  bearing lubrication, considering the various conditions that may result in  inadequate lubrication</li>
<li>consequences  of abnormal operating conditions in mechanical and labyrinth seals</li>
<li>operational  concerns associated with valves, including consequences of impurities in  hydraulic fluid and moisture in instrument air</li>  </ol>
<div className="col-md-2 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Group 7</strong></p>
</div>
<div className="span-3 mrgn-lft-md mrgn-rght-0 mrgn-bttm-0">
<p><strong>Electrical equipment</strong></p>
</div>
<div className="col-md-3 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Marks: 12 &plusmn; 2</strong></p>
</div>
<div className="clear"></div>
<ol>
<li>principles of generator operation and control,  including:
<ol className="list-lower-alpha">
<li>generator synchronization</li>
<li>control of terminal voltage, frequency and load for various  configurations of generators and loads</li>
<li>changes in generator parameters with changes in turbine  steam flow and excitation current</li>
<li>factors affecting generator stability</li>
<li>generator load rejection</li>
<li>automatic response to grid disturbances</li>
<li>heat production and removal in a generator</li>
<li>adverse generator operating conditions and consequences  of exceeding operating limits</li>
</ol></li>
<li>principles of equipment protection, including:
<ol className="list-lower-alpha">
<li>bus protections</li>
<li>transformer protections</li>
<li>motor protections</li>
<li>generator protections</li>
</ol></li>
<li>operating limitations of transformers, including  consequences of exceeding operating limits</li>
<li>operation of motors, including causes and consequences  of abnormal operating conditions </li>
<li>operation of station batteries, including associated operational  concerns</li>
<li>operation, isolation and de-energization of circuit  breakers</li>
<li>precautions when operating circuit breakers, motor  control centre (MCC) bus breakers and disconnect switches</li>
<li>precautions when isolating voltage and current  transformers</li>
<li>ground faults on DC trip circuits</li>
<li>consequences  of excessive moisture and temperature on electrical equipment insulation</li>
<li>means  to achieve and maintain reliability of electrical power supplies, including:
<ol className="list-lower-alpha">
<li>purpose, availability requirements and safety  implications of different classes of supply</li>
<li>typical loads for each class of supply with the reasons  for their selection</li>
<li>normal and alternate sources of electrical supply</li>
<li>switchyard ring bus</li>
</ol></li>  </ol>
<div className="col-md-2 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Group 8</strong></p>
</div>
<div className="span-3 mrgn-lft-md mrgn-rght-0 mrgn-bttm-0">
<p><strong>Instrumentation and control</strong></p>
</div>
<div className="col-md-3 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Marks: 8 &plusmn; 2</strong></p>
</div>
<div className="clear"></div>
<ol>
<li>basic principles of level, flow, temperature and  pressure control loops, including:
<ol className="list-lower-alpha">
<li>principles of operation of detectors</li>
<li>proportional control</li>
<li>proportional control with integral action</li>
<li>proportional control with derivative action</li>
<li>proportional control with integral and derivative  actions</li>
<li>feedforward control</li>
<li>cascade and multi element controls</li>
<li>valve actuators and positioners</li>
<li>failure modes of control valves</li>
</ol></li>
<li>impact of operating environment and process conditions  on:
<ol className="list-lower-alpha">
<li>pressure measurements</li>
<li>level measurements</li>
<li>flow measurements</li>
</ol></li>
<li>effect of failures and abnormal conditions of  components on:
<ol className="list-lower-alpha">
<li>pressure measurements</li>
<li>level measurements</li>
<li>flow measurements</li>
<li>temperature measurements</li>
</ol></li>
<li>principles of operation and failure modes of the  following detectors and sensors:
<ol className="list-lower-alpha">
<li>position detectors</li>
<li>speed sensors</li>
<li>vibration sensors</li>
<li>smoke and fire detectors</li>
<li>liquid detectors</li>
</ol></li>  </ol>
<div className="col-md-2 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Group 9</strong></p>
</div>
<div className="span-3 mrgn-lft-md mrgn-rght-0 mrgn-bttm-0">
<p><strong>Materials and chemistry</strong></p>
</div>
<div className="col-md-3 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Marks: 8 &plusmn; 2</strong></p>
</div>
<div className="clear"></div>
<ol>
<li>mechanical and thermal stresses in mechanical  equipment, including:
<ol className="list-lower-alpha">
<li>causes and operating practices used to minimize  stresses</li>
<li>consequences of excessive stresses</li>
</ol></li>
<li>effects of radiation on plant materials and components,  including problems caused by radiation damage</li>
<li>problems affecting pressure tubes, including:
<ol className="list-lower-alpha">
<li>factors affecting creep in pressure tubes</li>
<li>factors contributing to hydrogen embrittlement, delayed  hydride cracking and blistering of pressure tubes</li>
<li>operating practices used to minimize delayed hydride cracking  of pressure tubes</li>
</ol></li>
<li>principles of operation of ion exchange (IX) columns,  including:
<ol className="list-lower-alpha">
<li>control of pH and conductivity in plant systems by IX  columns</li>
<li>control of gadolinium and boron in the moderator</li>
<li>detection of spent IX columns</li>
<li>typical causes, symptoms and correction of IX column  problems</li>
</ol></li>
<li>chemical control in plant systems, including:
<ol className="list-lower-alpha">
<li>causes of corrosion of plant components and ways of  minimizing the various corrosion types</li>
<li>effect of pH on corrosion of common plant materials</li>
<li>typical causes of abnormal pH values in plant systems, methods  used for control and consequences of operating outside the normal pH range in a  given system</li>
<li>typical causes of excessive dissolved oxygen in plant  systems, methods used for control and consequences of operating with excessive  dissolved oxygen in a given system</li>
<li>typical causes of abnormal conductivity values in plant  systems, methods used for control and consequences of operating outside the  normal range of conductivity values in a given system</li>
<li>causes of scale and sludge formation in boilers,  methods used to minimize scale and sludge formation and consequences of scale  and sludge formation in boilers</li>
<li>causes of Chalk River unidentified deposit (CRUD)  formation in plant systems, methods used to control CRUD and operational  concerns associated with CRUD in plant systems</li>
</ol></li>
<li>conditions favouring the reaction of zirconium with  steam in a CANDU reactor and related operational consequences</li>
<li>deuterium or hydrogen excursions in the moderator cover  gas, the liquid zone control system and the heat transport system storage tank,  including:
<ol className="list-lower-alpha">
<li>reasons for controlling deuterium or hydrogen gas  production</li>
<li>factors affecting production</li>
<li>related operational concerns</li>
<li>methods for deuterium or hydrogen reduction and control</li>
<li>recombination unit operation</li>
</ol></li>  </ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="B.2"></div>
<h3 id="app-b-2" className="mrgn-tp-0">B.2 Topic groups for the general examinations for U0O candidates</h3>
<p>These required topic groups are based  on the training program in science fundamentals and equipment principles for U0O  candidates that have been developed in accordance with the principles of a SAT.</p>
<p>
The various topics that should be  covered in the general examinations for U0O candidates have been provided for  each required group, as shown below in a guidance box, to assist in their  selection so that each examination contains an appropriate mix of topics to  cover the knowledge that U0Os are required to have. All topics selected within a topic group shall be  linked to specific learning objectives in accordance with subsection 9.3 and  made available to the CNSC upon request.</p>
<p>
The required topic groups, total marks  and marks to be allocated to questions are identified below in bold and shall be used by the examination team  to design and develop the General certification examinations.</p>  <p><strong>Total marks&nbsp;: 75</strong></p>
<h4>A) Nuclear theory and principles of reactor operation</h4>
<div className="col-md-2 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Group 1</strong></p>
</div>
<div className="span-3 mrgn-lft-md mrgn-rght-0 mrgn-bttm-0">
<p><strong>Nuclear theory and reactor fundamentals </strong></p>
</div>
<div className="col-md-3 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Marks: 6 &plusmn; 1</strong></p>
</div>
<div className="clear"></div>
<ol>
<li>radioactive decay processes</li>
<li>induced nuclear reactions, including:
<ol className="list-lower-alpha">
<li>scattering reactions</li>
<li>absorption reactions</li>
<li>photoneutrons</li>
</ol></li>
<li>nuclear processes important for CANDU operation,  including:
<ol className="list-lower-alpha">
<li>neutron thermalization</li>
<li>neutron detection reactions</li>
<li>parasitic absorption and activation</li>
</ol></li>
<li>fission chain reaction, including:
<ol className="list-lower-alpha">
<li>prompt and delayed neutrons and associated effects</li>
<li>neutron lifecycle</li>
</ol></li>
<li>moderator properties and moderation process</li>
<li>neutron interactions with reactor core materials</li>
<li>subcritical, critical and supercritical reactor  operation</li>
<li>build-up of fission products</li>  </ol>
<div className="col-md-2 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Group 2</strong></p>
</div>
<div className="span-3 mrgn-lft-md mrgn-rght-0 mrgn-bttm-0">
<p><strong>Reactor control and major features of CANDU reactors</strong></p>
</div>
<div className="col-md-3 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Marks: 7 &plusmn; 2</strong></p>
</div>
<div className="clear"></div>
<ol>
<li>principles of bulk and zone power regulation, including:
<ol className="list-lower-alpha">
<li>reactivity mechanisms used and their principles of  operation</li>
<li>required neutron and thermal power measurements</li>
</ol></li>
<li>principles of operation of shutdown systems, including:
<ol className="list-lower-alpha">
<li>shutdown mechanisms used</li>
<li>required shutdown system capabilities</li>
<li>requirements for establishing and maintaining a  guaranteed shutdown state</li>
</ol></li>
<li>addition and removal of chemical neutron poisons in the  moderator for reactivity control</li>
<li>major components of CANDU reactors, including:
<ol className="list-lower-alpha">
<li>reactor shielding</li>
<li>main moderator system and its auxiliaries</li>
<li>main HTS and its auxiliaries</li>
</ol></li>
<li>heat production and removal in a CANDU reactor</li>
<li>moderator and heat transport coolant isotopic</li>  </ol>
<h4>B) Principles of heat transfer and thermodynamics</h4>
<div className="col-md-2 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Group 3</strong></p>
</div>
<div className="span-3 mrgn-lft-md mrgn-rght-0 mrgn-bttm-0">
<p><strong>Reactor and heat transfer and thermodynamics</strong></p>
</div>
<div className="col-md-3 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Marks : 10 &plusmn; 2</strong></p>
</div>
<div className="clear"></div>
<ol>
<li>principles of fuel cooling, including:
<ol className="list-lower-alpha">
<li>modes of fuel cooling</li>
<li>heat transfer processes from the fuel to coolant</li>
<li>importance of heat transport system pressure control</li>
<li>dryout in a fuel channel</li>
<li>coolant boiling</li>
</ol></li>
<li>fuel cooling by natural circulation, including:
<ol className="list-lower-alpha">
<li>principle of operation of thermosyphoning</li>
<li>single-phase and two-phase thermosyphoning</li>
<li>cooling by intermittent buoyancy induced flow </li>
</ol></li>
<li>heat removal during small and large LOCAs, including:
<ol className="list-lower-alpha">
<li>need for reactor trip</li>
<li>crash cooling</li>
<li>HTS blowdown and refill by the emergency coolant injection  system</li>
<li>impact of dousing in containment</li>
<li>containment pressure changes during loss of coolant  accidents</li>
</ol></li>
<li>reactor, channel power and fuel bundle operating limits</li>
<li>abnormal conditions that can lead to fuel overheating</li>
<li>fuel damage, including:
<ol className="list-lower-alpha">
<li>contributing factors</li>
<li>fuel sheath behaviour with temperature and irradiation</li>
<li>sheath failure mechanisms</li>
</ol></li>  </ol>
<div className="col-md-2 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Group 4</strong></p>
</div>
<div className="span-3 mrgn-lft-md mrgn-rght-0 mrgn-bttm-0">
<p><strong>Secondary systems</strong></p>
</div>
<div className="col-md-3 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Marks: 8 &plusmn; 2</strong></p>
</div>
<div className="clear"></div>
<ol>
<li>principles of operation of the boilers, including:
<ol className="list-lower-alpha">
<li>heat transfer processes from HTS coolant to the boiler  water</li>
<li>relationship between boiler pressure and heat transfer</li>
<li>principles of boiler pressure control</li>
<li>boiler pressure changes during HTS warm-up and  cool-down </li>
</ol></li>
<li>principles of operation of the condenser, including:
<ol className="list-lower-alpha">
<li>heat transfer processes in the condenser</li>
<li>factors affecting the pressure in the condenser</li>
</ol></li>
<li>precautions necessary when filling or draining a heat  exchanger</li>
<li>factors that affect the efficiency of heat exchangers</li>
<li>principles of operation of combustion turbines,  including:
<ol className="list-lower-alpha">
<li>heat to work conversion process in the turbine</li>
<li>control of turbine load</li>
<li>undesirable operating conditions</li>
</ol></li>  </ol>
<h4>C) Principles of CANDU plant equipment</h4>
<div className="col-md-2 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Group 5</strong></p>
</div>
<div className="span-3 mrgn-lft-md mrgn-rght-0 mrgn-bttm-0">
<p><strong>Mechanical equipment</strong></p>
</div>
<div className="col-md-3 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Marks: 12 &plusmn; 2</strong></p>
</div>
<div className="clear"></div>
<ol>
<li>vibrations in standby generators and other rotating  machines, including:
<ol className="list-lower-alpha">
<li>major causes and operating conditions that can affect  them</li>
<li>operating conditions that may affect critical speeds</li>
</ol></li>
<li>equipment damage caused by excessive vibrations</li>
<li>causes and prevention of cavitation in CANDU plants</li>
<li>steam and water hammer in CANDU plants, including:
<ol className="list-lower-alpha">
<li>causes</li>
<li>resulting equipment damage</li>
<li>operating practices to minimize the risk of their  occurrence</li>
</ol></li>
<li>operation of centrifugal pumps, including:
<ol className="list-lower-alpha">
<li>operational changes influencing operation of the pumps</li>
<li>pump cavitation and its consequences</li>
<li>operational changes that may cause pump cavitation</li>
<li>operating conditions that could lead to gas locking and  vapour locking</li>
<li>consequences of gas or vapour locking of a pump</li>
<li>major causes and consequences of pump run out</li>
<li>consequences of reverse rotation</li>
<li>pump problem diagnosis</li>
<li>pump start-up sequence and start-up precautions</li>
<li>precautions during pump shutdown and isolation</li>
</ol></li>
<li>positive displacement pump start-up</li>
<li>principles of operation and operational aspects of  compressors and vacuum pumps</li>
<li>consequences of excessive moisture in compressed air  piping and receivers</li>
<li>consequences and operational concerns associated with inadequate  bearing lubrication, considering the various conditions that may result in  inadequate lubrication</li>
<li>consequences  of abnormal operating conditions in mechanical and labyrinth seals</li>
<li>operational  concerns associated with valves, including consequences of impurities in  hydraulic fluid and moisture in instrument air</li>  </ol>
<div className="col-md-2 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Group 6</strong></p>
</div>
<div className="span-3 mrgn-lft-md mrgn-rght-0 mrgn-bttm-0">
<p><strong>Electrical equipment</strong></p>
</div>
<div className="col-md-3 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Marks: 16 &plusmn; 3</strong></p>
</div>
<div className="clear"></div>
<ol>
<li>principles of generator operation and control,  including:
<ol className="list-lower-alpha">
<li>generator synchronization</li>
<li>control of terminal voltage, frequency and load for various  configurations of generators and loads</li>
<li>changes in generator parameters with changes in turbine  gas flow and excitation current</li>
<li>factors affecting generator stability</li>
<li>generator load rejection</li>
<li>automatic response to grid disturbances</li>
<li>heat production and removal in a generator</li>
<li>adverse generator operating conditions and consequences  of exceeding operating limits</li>
</ol></li>
<li>principles of equipment protection, including:
<ol className="list-lower-alpha">
<li>bus protections</li>
<li>transformer protections</li>
<li>motor protections</li>
<li>generator protections</li>
</ol></li>
<li>operating limitations of transformers, including  consequences of exceeding operating limits</li>
<li>operation of motors, including causes and consequences  of abnormal operating conditions </li>
<li>operation of station batteries, including associated operational  concerns</li>
<li>operation, isolation and de-energization of circuit  breakers</li>
<li>precautions when operating circuit breakers, MCC bus  breakers and disconnect switches</li>
<li>precautions when isolating voltage and current  transformers</li>
<li>ground faults on DC trip circuits</li>
<li>consequences  of excessive moisture and temperature on electrical equipment insulation</li>
<li>means  to achieve and maintain reliability of electrical power supplies, including:
<ol className="list-lower-alpha">
<li>purpose, availability requirements and safety  implications of different classes of supply</li>
<li>typical loads for each class of supply with the reasons  for their selection</li>
<li>normal and alternate sources of electrical supply</li>
<li>switchyard ring bus</li>
</ol></li>  </ol>
<div className="col-md-2 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Group 7</strong></p>
</div>
<div className="span-3 mrgn-lft-md mrgn-rght-0 mrgn-bttm-0">
<p><strong>Instrumental and control</strong></p>
</div>
<div className="col-md-3 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Marks: 8 &plusmn; 2</strong></p>
</div>
<div className="clear"></div>
<ol>
<li>basic principles of level, flow, temperature and pressure  control loops, including:
<ol className="list-lower-alpha">
<li>principles of operation of detectors</li>
<li>proportional control</li>
<li>proportional control with integral action</li>
<li>proportional control with derivative action</li>
<li>proportional control with integral and derivative  actions</li>
<li>feedforward control</li>
<li>valve actuators and positioners</li>
<li>failure modes of control valves</li>
</ol></li>
<li>impact of operating environment and process conditions  on:
<ol className="list-lower-alpha">
<li>pressure measurements</li>
<li>level measurements</li>
<li>flow measurements</li>
</ol></li>
<li>effect of failures and abnormal conditions of  components on:
<ol className="list-lower-alpha">
<li>pressure measurements</li>
<li>level measurements</li>
<li>flow measurements</li>
<li>temperature measurements</li>
</ol></li>
<li>principles of operation and failure modes of the  following detectors and sensors:
<ol className="list-lower-alpha">
<li>position detectors</li>
<li>speed sensors</li>
<li>vibration sensors</li>
<li>smoke and fire detectors</li>
<li>liquid detectors</li>
</ol></li>  </ol>
<div className="col-md-2 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Group 8</strong></p>
</div>
<div className="span-3 mrgn-lft-md mrgn-rght-0 mrgn-bttm-0">
<p><strong>Materials and chemistry</strong></p>
</div>
<div className="col-md-3 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Marks: 8 &plusmn; 2</strong></p>
</div>
<div className="clear"></div>
<ol>
<li>mechanical and thermal stresses in mechanical  equipment, including:
<ol className="list-lower-alpha">
<li>causes and operating practices used to minimize  stresses</li>
<li>consequences of excessive stresses</li>
</ol></li>
<li>effects of radiation on plant materials and components,  including problems caused by radiation damage</li>
<li>principles of operation of ion exchange (IX) columns,  including:
<ol className="list-lower-alpha">
<li>control of pH and conductivity in plant systems by IX  columns</li>
<li>detection of spent IX columns</li>
<li>typical causes, symptoms and correction of IX column  problems</li>
</ol></li>
<li>chemical control in plant systems, including:
<ol className="list-lower-alpha">
<li>causes of corrosion of plant components and ways of  minimizing the various corrosion types</li>
<li>effect of pH on corrosion of common plant materials</li>
<li>typical causes of abnormal pH values in plant systems, methods  used for control and consequences of operating outside the normal pH range in a  given system</li>
<li>typical causes of excessive dissolved oxygen in plant  systems, methods used for control and consequences of operating with excessive  dissolved oxygen in a given system</li>
<li>typical causes of abnormal conductivity values in plant  systems, methods used for control and consequences of operating outside the  normal range of conductivity values in a given system</li>
<li>causes of scale and sludge formation in boilers,  methods used to minimize scale and sludge formation and consequences of scale  and sludge formation in boilers</li>
<li>causes of crud formation in plant systems and  operational concerns associated with crud</li>
</ol></li>
<li>conditions favouring the reaction of zirconium with  steam in a CANDU reactor and related operational consequences</li>
<li>deuterium or hydrogen excursions in the moderator cover  gas, including:
<ol className="list-lower-alpha">
<li>reasons for controlling deuterium or hydrogen gas  production</li>
<li>factors affecting production</li>
<li>related operational concerns</li>
</ol></li>  </ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="B.3"></div>
<h3 id="app-b-3" className="mrgn-tp-0">B.3 Topic groups for the NPP-specific examinations for RO candidates</h3>
<p>These required topic groups are based on the training program in NPP-specific  integrated systems operations for RO candidates that have been developed in  accordance with the principles of a SAT.</p>
<p>
The various topics that should be covered in the NPP-specific  examinations for RO candidates have been provided for each required topic  group, as shown below in a guidance box, to assist in their selection so that  each examination contains a balanced mix of topics to cover the knowledge that  ROs are required to have. All topics selected within a topic group shall be  linked to specific learning objectives in accordance with subsection 9.3 and  made available to the CNSC upon request.</p>
<p>
The required topic groups, total marks and marks to be allocated to  questions are identified below in bold and shall be used by the examination  team to design and develop the NPP-specific certification examinations.</p>
<p><strong>All groups Marks: 100</strong></p>
<div className="col-md-2 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Group 1</strong></p>
</div>
<div className="span-3 mrgn-lft-md mrgn-rght-0 mrgn-bttm-0">
<p><strong>Special safety systems</strong></p>
</div>
<div className="col-md-3 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Marks: 8 &plusmn; 2</strong></p>
</div>
<div className="clear"></div>
<ol>
<li>Shutdown system (SDS)1 (or SDSA at the applicable NPP),  including:
<ol className="list-lower-alpha">
<li>absolute and conditional trip parameters with the  reason for their existence, the type of events they protect against, primary and  back-up parameters and power dependent trip set points</li>
<li>interlocks between SDS1 and the reactor regulating  system</li>
<li>impairments and their consequences on system effectiveness</li>
<li>standard and non-standard operating procedures</li>
</ol></li>
<li>SDS2 (or SDSE at the applicable NPP), including:
<ol className="list-lower-alpha">
<li>absolute and conditional trip parameters with the  reason for their existence, the type of events they protect against, primary and  back-up parameters and power dependent trip set points</li>
<li>interlocks between SDS2 and the reactor regulating  system</li>
<li>impairments and their consequences on system  effectiveness</li>
<li>standard and non-standard operating procedures</li>
</ol></li>
<li>emergency core cooling system, including:
<ol className="list-lower-alpha">
<li>related systems and subsystems</li>
<li>primary and conditioning initiating parameters, with  the reasons for their existence</li>
<li>impairments and their consequences on system  effectiveness</li>
<li>standard and non-standard operating procedures</li>
</ol></li>
<li>negative pressure and containment system, including:
<ol className="list-lower-alpha">
<li>related subsystems</li>
<li>impairments and their consequences on system  effectiveness</li>
<li>standard and non-standard operating procedures</li>
</ol></li>
<li>power house emergency venting system as applicable</li>  </ol>
<div className="col-md-2 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Group 2</strong></p>
</div>
<div className="span-3 mrgn-lft-md mrgn-rght-0 mrgn-bttm-0">
<p><strong>Nuclear safety</strong></p>
</div>
<div className="col-md-3 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Marks: 7 &plusmn; 2</strong></p>
</div>
<div className="clear"></div>
<ol>
<li>principles of nuclear safety, including:
<ol className="list-lower-alpha">
<li>defence-in-depth considerations</li>
<li>principles of control,  cool and contain under normal and abnormal reactor operating conditions</li>
<li>requirements for establishing and maintaining a  guaranteed shutdown state</li>
<li>roles of special safety systems, standby safety support  systems and safety related process systems</li>
<li>means to achieve and maintain reliability of systems  and equipment</li>
<li>protection against common cause failures</li>
<li>availability requirements and testing of safety related  systems</li>
<li>purpose, availability requirements and safety  implications of different classes of electrical supplies</li>
<li>plant licensing basis, safety analyses and safe operating  envelope</li>
<li>operating licence and Operating Policies and Principles</li>
<li>plant lineup and plant status control</li>
</ol></li>
<li>heat sinks, including response to non-standard  operating conditions during reactor unit outages</li>
<li>critical safety parameters and their support parameters</li>  </ol>
<div className="col-md-2 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Group 3</strong></p>
</div>
<div className="span-3 mrgn-lft-md mrgn-rght-0 mrgn-bttm-0">
<p><strong>Emergency procedures</strong></p>
</div>
<div className="col-md-3 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Marks: 8 &plusmn; 2</strong></p>
</div>
<div className="clear"></div>
<ol>
<li>unit emergency operating procedures including:
<ol className="list-lower-alpha">
<li>the purpose of the procedure</li>
<li>operational consequences of the event</li>
<li>systems responses to the event</li>
<li>any interactions between the reactor unit and unit 0 as  applicable</li>
</ol></li>
<li>secondary control area operation including impairments  and their consequences on system effectiveness </li>  </ol>
<div className="col-md-2 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Group 4</strong></p>
</div>
<div className="span-3 mrgn-lft-md mrgn-rght-0 mrgn-bttm-0">
<p><strong>Reactor core physics, core monitoring  fuelling and fuel handling</strong></p>
</div>
<div className="col-md-3 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Marks : 7 &plusmn; 2</strong></p>
</div>
<div className="clear"></div>
<ol>
<li>normal and abnormal reactivity configurations and flux  shapes</li>
<li>channel power peaking factor </li>
<li>principles of reactor fuelling, fuelling limitations,  fuel handling and storage, and irradiated fuel cooling</li>
<li>channel temperature monitoring</li>
<li>fully instrumented channels</li>
<li>channel power mapping, where applicable</li>
<li>flux mapping and zone thermal power, as applicable</li>
<li>fuelling
<ol className="list-lower-alpha">
<li>the reactor fuelling cycle</li>
<li>fuelling prerequisites and limitations</li>
<li>irradiated fuel cooling</li>
</ol></li>  </ol>
<div className="col-md-2 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Group 5</strong></p>
</div>
<div className="span-3 mrgn-lft-md mrgn-rght-0 mrgn-bttm-0">
<p><strong>Reactor regulating system</strong></p>
</div>
<div className="col-md-3 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Marks: 8 &plusmn; 2</strong></p>
</div>
<div className="clear"></div>
<ol>
<li>reactor regulating system (RRS) program routines</li>
<li>stepback routine (at the applicable NPPs)</li>
<li>adjuster rods</li>
<li>control absorber rods (at the applicable NPPs)</li>
<li>moderator liquid poison systems</li>
<li>liquid zone control system</li>  </ol>
<div className="col-md-2 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Group 6</strong></p>
</div>
<div className="span-3 mrgn-lft-md mrgn-rght-0 mrgn-bttm-0">
<p><strong>Reactor related systems</strong></p>
</div>
<div className="col-md-3 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Marks: 7 &plusmn; 2</strong></p>
</div>
<div className="clear"></div>
<ol>
<li>primary HTS, including:
<ol className="list-lower-alpha">
<li>pressure and inventory control system</li>
<li>heat transport pump gland seal cooling system</li>
<li>heat transport pump trip system</li>
</ol></li>
<li>shutdown cooling system (maintenance cooling system at applicable  NPPs)</li>
<li>main moderator system</li>
<li>moderator level and temperature control systems</li>
<li>end shield cooling system</li>  </ol>
<div className="col-md-2 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Group 7</strong></p>
</div>
<div className="span-3 mrgn-lft-md mrgn-rght-0 mrgn-bttm-0">
<p><strong>Control systems</strong></p>
</div>
<div className="col-md-3 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Marks: 7 &plusmn; 2</strong></p>
</div>
<div className="clear"></div>
<ol>
<li>boiler pressure control</li>
<li>boiler level control</li>
<li>deaerator level control</li>
<li>turbine governor</li>
<li>general purpose control program or heat transport auxiliaries  control program, as applicable</li>  </ol>
<div className="col-md-2 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Group 8</strong></p>
</div>
<div className="span-3 mrgn-lft-md mrgn-rght-0 mrgn-bttm-0">
<p><strong>Turbine, steam, and feedwater systems</strong></p>
</div>
<div className="col-md-3 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Marks: 6 &plusmn; 2</strong></p>
</div>
<div className="clear"></div>
<ol>
<li>condensate systems, including condensate makeup and  reject</li>
<li>boiler feedwater system</li>
<li>emergency boiler makeup systems</li>
<li>shutdown cooling system (at the applicable NPPs)</li>
<li>boiler steam system, including:
<ol className="list-lower-alpha">
<li>boiler safety valves</li>
<li>condenser and atmospheric control valves (at the applicable  NPPs) </li>
</ol></li>
<li>turbine steam system, including:
<ol className="list-lower-alpha">
<li>emergency stop valves, governor valves </li>
<li>intercept and reheat stop valves, where applicable</li>
</ol></li>
<li>turbine tripping system</li>
<li>unit power regulator control program, where applicable</li>
<li>turbine run-up and loading control system</li>
<li>turbine  generator supervisory</li>  </ol>
<div className="col-md-2 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Group 9</strong></p>
</div>
<div className="span-3 mrgn-lft-md mrgn-rght-0 mrgn-bttm-0">
<p><strong>Main generator and power systems</strong></p>
</div>
<div className="col-md-3 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Marks: 6 &plusmn; 2</strong></p>
</div>
<div className="clear"></div>
<ol>
<li>main generator system</li>
<li>generator static excitation</li>
<li>station electrical equipment and distribution,  including:
<ol className="list-lower-alpha">
<li>electrical protection</li>
<li>emergency transfer schemes</li>
<li>emergency power system(s)</li>
</ol></li>
<li>switchyard electrical equipment and distribution system</li>
<li>switchyard compressed air system</li>
<li>instrument air systems</li>  </ol>
<div className="col-md-2 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Group 10</strong></p>
</div>
<div className="span-3 mrgn-lft-md mrgn-rght-0 mrgn-bttm-0">
<p><strong>Reactor auxiliary systems</strong></p>
</div>
<div className="col-md-3 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Marks: 6 &plusmn; 2</strong></p>
</div>
<div className="clear"></div>
<ol>
<li>moderator purification system</li>
<li>moderator cover gas system</li>
<li>heat transfer storage, transfer and recovery systems,</li>
<li>heat transfer purification system</li>
<li>heat transfer hydrogen addition system</li>
<li>annulus gas system</li>
<li>failed fuel detection system, where applicable</li>
<li>failed fuel location system, where applicable</li>
<li>emergency water supply systems (emergency water supply,  boiler makeup water)</li>  </ol>
<div className="col-md-2 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Group 11</strong></p>
</div>
<div className="span-3 mrgn-lft-md mrgn-rght-0 mrgn-bttm-0">
<p><strong>Turbine, generator &amp; boiler auxiliary systems</strong></p>
</div>
<div className="col-md-3 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Marks: 6 &plusmn; 2</strong></p>
</div>
<div className="clear"></div>
<ol>
<li>boiler blowdown</li>
<li>turbine gland steam system</li>
<li>turbine low-pressure exhaust cooling system</li>
<li>condenser air extraction system</li>
<li>condenser circulating water system</li>
<li>generator hydrogen cooling system</li>
<li>generator stator cooling system</li>
<li>generator seal oil system</li>
<li>turbine-generator lubricating oil system</li>
<li>governor fluid supply system</li>
<li>extraction steam system</li>
<li>feedheater and separator drains system</li>
<li>condenser leak detection system</li>  </ol>
<div className="col-md-2 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Group 12</strong></p>
</div>
<div className="span-3 mrgn-lft-md mrgn-rght-0 mrgn-bttm-0">
<p><strong>Reactor unit operation</strong></p>
</div>
<div className="col-md-3 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Marks: 8 &plusmn; 2</strong></p>
</div>
<div className="clear"></div>
<ol>
<li>reactor unit start-up procedures, including:
<ol className="list-lower-alpha">
<li>heat transport system refill </li>
<li>approaches to critical</li>
<li>heat transport system pressurization</li>
<li>unit heatup</li>
<li>turbine-generator and auxiliaries start-up</li>
<li>unit loading</li>
</ol></li>
<li>reactor unit shutdown procedures, including:
<ol className="list-lower-alpha">
<li>unit unloading</li>
<li>unit cooldown</li>
<li>heat transport system depressurization</li>
<li>heat transport system draining (at the applicable NPPs)</li>
<li>turbine-generator and auxiliaries shutdown</li>
<li>establishment of guaranteed shutdown states</li>
<li>four unit shutdown at multi-unit plants</li>
</ol></li>
<li>non-standard operating procedures, including:
<ol className="list-lower-alpha">
<li>response to reactor trip</li>
<li>response to reactor setback</li>
<li>response to reactor stepback (at the applicable NPPs)</li>
<li>recovery from a reactor setback or stepback</li>
<li>heat transport pump trip or manual shutdown</li>
<li>generation rejection and recovery</li>
<li>turbine trip and recovery</li>
<li>response to a main generator hydrogen leak or seal  failure</li>
</ol></li>  </ol>
<div className="col-md-2 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Group 13</strong></p>
</div>
<div className="span-3 mrgn-lft-md mrgn-rght-0 mrgn-bttm-0">
<p><strong>Radiation protection related systems and radiation emergencies</strong></p>
</div>
<div className="col-md-3 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Marks: 10 &plusmn; 2</strong></p>
</div>
<div className="clear"></div>
<ol>
<li>access control system</li>
<li>airlocks</li>
<li>radiation monitoring systems </li>
<li>emergency filtered air discharge system</li>
<li>post accident radiation monitoring system </li>
<li>active liquid waste system</li>
<li>stack monitoring system, including:
<ol className="list-lower-alpha">
<li>sources of airborne emissions </li>
<li>emission pathways for airborne emissions</li>
</ol></li>
<li>basic concepts related to the control of the discharge  of radioactivity to the environment, including:
<ol className="list-lower-alpha">
<li>derived release limits and associated public dose  limits</li>
<li>critical groups </li>
<li>control monitoring </li>
</ol></li>
<li>the potential sources of radiation hazards from systems  operated by the reactor operator </li>
<li>possible  radiation hazards that may exist after a loss of coolant accident with failed  fuel</li>
<li>responsibilities  of the reactor operator to abnormal radiological conditions</li>  </ol>
<p>Refer to appendix  D.3 for related topics and the breakdown of marks in the group.</p>
<div className="col-md-2 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Group 14</strong></p>
</div>
<div className="span-3 mrgn-lft-md mrgn-rght-0 mrgn-bttm-0">
<p><strong>Reactor operator responsibilities</strong></p>
</div>
<div className="col-md-3 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Marks: 6 &plusmn; 1</strong></p>
</div>
<div className="clear"></div>
<ol>
<li>The responsibilities and authorities of a reactor  operator, including:</li>
<li>work protection on reactor unit systems</li>
<li>personnel safety </li>
<li>communications with external groups such as grid  operators</li>
<li>the licensee safety culture</li>  </ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="B.4"></div>
<h3 id="app-b-4" className="mrgn-tp-0">B.4 Knowledge groups for the NPP-specific examinations for RO candidates</h3>
<p>The knowledge groups and marks below shall be used by the examination  team to ensure that the sampling of topic groups in appendix B.3 adequately covers  the knowledge areas addressed by the NPP SAT-based objectives for ROs.</p>
<p>
The knowledge or learning objectives are specific to each NPP and are  developed in accordance with a SAT. Single-unit NPPs use the <em>Generic Station System Knowledge Objectives  for Control Room Operators</em> document in the development of their  NPP-specific learning objectives (refer to appendix D.2 for the corresponding  objectives). Multi-unit NPPs use the objective template approved by the CNSC in  December 2003 (see References).</p>
<table className="table table-striped">
<tr>
<th>Group</th>
<th>Knowledge area </th>
<th>100 marks</th>
</tr>
<tr>
<td>A</td>
<td>System design </td>
<td>9 &plusmn; 2</td>
</tr>
<tr>
<td>B</td>
<td>Instrumentation and control</td>
<td>13 &plusmn; 3</td>
</tr>
<tr>
<td>C</td>
<td>Response of control loops and logic control circuits </td>
<td>14 &plusmn; 3</td>
</tr>
<tr>
<td>D</td>
<td>Monitoring of system parameters, operating procedures
and test procedures, excluding emergency operating procedures </td>
<td>12 &plusmn; 3</td>
</tr>
<tr>
<td>E</td>
<td>Operating policies and principles </td>
<td>8 &plusmn; 2</td>
</tr>
<tr>
<td>F</td>
<td>System impairments and heat sinks </td>
<td>8 &plusmn; 2</td>
</tr>
<tr>
<td>G</td>
<td>Emergency operation </td>
<td>9 &plusmn; 3</td>
</tr>
<tr>
<td>H</td>
<td>Principles of nuclear safety and their application</td>
<td>6 &plusmn; 1</td>
</tr>
<tr>
<td>I</td>
<td>Reactor core physics, core monitoring, fuelling and
fuel handling</td>
<td>7 &plusmn; 2</td>
</tr>
<tr>
<td>J</td>
<td>Administrative aspects, such as administrative
procedures related to plant operation and maintenance, work protection, and
roles and responsibilities of operations personnel</td>
<td>4 &plusmn; 1</td>
</tr>
<tr>
<td>K</td>
<td>NPP radiation protection knowledge objectives approved
by the CNSC (refer to appendix D.3)</td>
<td>10 &plusmn; 2</td>
</tr>
</table>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="B.5"></div>
<h3 id="app-b-5" className="mrgn-tp-0">B.5 Topic groups for the NPP-specific examinations for U0O candidates</h3>
<p>These required topic groups are based on the training program in NPP-specific  integrated systems operations for U0O candidates that have been developed in  accordance with the principles of a SAT.</p>
<p>
The various topics that should be  covered in the NPP-specific examinations for U0O candidates have been provided  for each group, as shown below in a guidance box, to assist in their selection  so that each examination contains a balanced mix of topics to cover the  knowledge that U0Os are required to have on the topics covered is tested. All topics selected within a topic  group shall be linked to specific learning objectives in accordance with  subsection 9.3 and made available to the CNSC upon request.</p>
<p>
The required topic groups, total marks  and marks to be allocated to questions are identified below in bold and shall  be used by examination team to design and develop the NPP-specific  certification examinations. </p>  <p><strong>All groups Marks:75</strong></p>
<div className="col-md-2 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Group 1</strong></p>
</div>
<div className="span-3 mrgn-lft-md mrgn-rght-0 mrgn-bttm-0">
<p><strong>Special safety systems</strong></p>
</div>
<div className="col-md-3 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Marks: 12 &plusmn; 3</strong></p>
</div>
<div className="clear"></div>
<ol>
<li>emergency coolant injection system, including:
<ol className="list-lower-alpha">
<li>related systems</li>
<li>impairments</li>
<li>standard and non-standard operating procedures</li>
</ol></li>
<li>negative pressure containment system, including:
<ol className="list-lower-alpha">
<li>related subsystems</li>
<li>impairments</li>
<li>standard and non-standard operating procedures</li>
</ol></li>
<li>Unit 0 safety system monitoring computer</li>
<li>Power house emergency venting system</li>  </ol>
<div className="col-md-2 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Group 2</strong></p>
</div>
<div className="span-3 mrgn-lft-md mrgn-rght-0 mrgn-bttm-0">
<p><strong>Nuclear safety</strong></p>
</div>
<div className="col-md-3 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Marks: 10 &plusmn; 2</strong></p>
</div>
<div className="clear"></div>
<ol>
<li>principles of nuclear safety, including:
<ol className="list-lower-alpha">
<li>defence-in-depth considerations</li>
<li>principles of control, cool and contain under normal  and abnormal reactor operating conditions</li>
<li>requirements for establishing and maintaining a  guaranteed shutdown state</li>
<li>roles of special safety systems, standby safety support  systems and safety related process systems</li>
<li>means to achieve and maintain reliability of systems  and equipment</li>
<li>protection against common cause failures</li>
<li>availability requirements and testing of safety related  systems</li>
<li>purpose, availability requirements and safety  implications of different classes of electrical supplies</li>
<li>plant licensing basis, safety analyses and safe  operating envelope</li>
<li>plant operating licence and operating policies and  principles</li>
<li>plant line-up and plant status control</li>
</ol></li>
<li>heat sinks, including response to non-standard operating  conditions during reactor unit outages</li>
<li>critical safety parameters and their support parameters</li>  </ol>
<div className="col-md-2 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Group 3</strong></p>
</div>
<div className="span-3 mrgn-lft-md mrgn-rght-0 mrgn-bttm-0">
<p><strong>Integrated plant operation and emergency procedures </strong></p>
</div>
<div className="col-md-3 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Marks: 10 &plusmn; 2</strong></p>
</div>
<div className="clear"></div>
<ol>
<li>abnormal incident manual procedures</li>
<li>interaction between unit 0 systems and those of the  reactor units</li>
<li>integrated plant operating procedures, including:
<ol className="list-lower-alpha">
<li>quiet mode operation</li>
<li>four unit shutdown</li>
</ol></li>
<li>non-standard operating procedures, including:
<ol className="list-lower-alpha">
<li>generation rejection</li>
<li>response to grid frequency disturbances</li>
<li>response to loss of grid</li>
<li>switchyard restoration after generation rejection  (where applicable)</li>
<li>total loss of 250 VDC power in the switchyard (where  applicable)</li>
<li>response to a main generator hydrogen leak or seal  failure</li>
<li>loss of common instrument air</li>
</ol></li>
<li>Unit 0 emergency operating procedures, including:
<ol className="list-lower-alpha">
<li>the purpose of the procedure</li>
<li>operational consequences of the event</li>
<li>any interaction between unit 0 and the reactor unit as  applicable </li>
<li>secondary control area operation including impairments  and their consequences on system effectiveness</li>
<li>emergency irradiated fuel cooling</li>
</ol></li>  </ol>
<div className="col-md-2 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Group 4</strong></p>
</div>
<div className="span-3 mrgn-lft-md mrgn-rght-0 mrgn-bttm-0">
<p><strong>Switchyard and electrical distribution</strong></p>
</div>
<div className="col-md-3 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Marks: 10 &plusmn; 2</strong></p>
</div>
<div className="clear"></div>
<ol>
<li>main power output system, including:
<ol className="list-lower-alpha">
<li>electrical power transformation</li>
<li>switchyard electrical equipment (at applicable NPPs)</li>
<li>switchyard compressed air system (at applicable NPPs)</li>
<li>output system relay protection (at applicable NPPS)</li>
</ol></li>
<li>AC electrical distribution, including:
<ol className="list-lower-alpha">
<li>13.8 kV distribution system</li>
<li>4.16 kV distribution system</li>
<li>600 VAC Class III and Class IV distribution system</li>
<li>600 VAC Class II system</li>
<li>120 VAC Class II system</li>
</ol></li>
<li>DC electrical distribution, including:
<ol className="list-lower-alpha">
<li>250 VDC system</li>
<li>125 VDC system (at applicable NPPs)</li>
<li>48 VDC system</li>
<li>45 VDC instrumentation supplies system</li>
</ol></li>  </ol>
<div className="col-md-2 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Group 5</strong></p>
</div>
<div className="span-3 mrgn-lft-md mrgn-rght-0 mrgn-bttm-0">
<p><strong>Emergency electrical supplies</strong></p>
</div>
<div className="col-md-3 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Marks: 9 &plusmn; 2</strong></p>
</div>
<div className="clear"></div>
<ol>
<li>standby Class III power system, including:
<ol className="list-lower-alpha">
<li>emergency transfer scheme</li>
<li>standby generators</li>
<li>impairments and their consequences on system  effectiveness</li>
</ol></li>
<li>emergency power system, including:
<ol className="list-lower-alpha">
<li>emergency power generators</li>
<li>impairments and their consequences on system  effectiveness</li>
</ol></li>
<li>qualified power supply system (at applicable NPPs)</li>  </ol>
<div className="col-md-2 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Group 6</strong></p>
</div>
<div className="span-3 mrgn-lft-md mrgn-rght-0 mrgn-bttm-0">
<p><strong>Water, air, ventilation and fire protection systems</strong></p>
</div>
<div className="col-md-3 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Marks: 9 &plusmn; 2</strong></p>
</div>
<div className="clear"></div>
<ol>
<li>condensate make-up system (at applicable NPPs)</li>
<li>common service water system (at applicable NPPs)</li>
<li>domestic water system, including site domestic water system(at  applicable NPPs)</li>
<li>emergency water system (at applicable NPPs)</li>
<li>D2O management (at applicable NPPs),  including:
<ol className="list-lower-alpha">
<li>D2O transfer and storage system</li>
<li>heavy water leak detection system</li>
</ol></li>
<li>emergency boiler cooling system (at applicable NPPs)</li>
<li>emergency and auxiliary service water systems (at  applicable NPPs)</li>
<li>frazil ice protection system</li>
<li>circulating water discharge control gate (at applicable  NPPs)</li>
<li>zebra  mussel chlorination system</li>
<li>service  air system</li>
<li>instrument  air system</li>
<li>breathing  air system</li>
<li>heating  and ventilation systems</li>
<li>air  conditioning systems</li>
<li>powerhouse  emergency venting system</li>
<li>vapour  recovery systems</li>
<li>fire  protection water system</li>
<li>site  fire protection water system (at applicable NPPs)</li>
<li>transformer  deluge and sprinkler system (at applicable NPPs)</li>
<li>air  foam fire protection system</li>
<li>smoke  detection system</li>
<li>CO2  fire protection system</li>  </ol>
<div className="col-md-2 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Group 7</strong></p>
</div>
<div className="span-3 mrgn-lft-md mrgn-rght-0 mrgn-bttm-0">
<p><strong>Radiation protection systems and radiation emergencies</strong></p>
</div>
<div className="col-md-3 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Marks: 9 &plusmn; 2</strong></p>
</div>
<div className="clear"></div>
<ol>
<li>access control system</li>
<li>airlocks and fuel transfer chambers</li>
<li>fixed area gamma monitoring system</li>
<li>basic concepts related to the control of the discharge of  radioactivity to the environment, including:
<ol className="list-lower-alpha">
<li>derived emission limits and associated dose limits for  the station</li>
<li>critical group</li>
<li>station emission target</li>
<li>control monitoring</li>
<li>compliance monitoring</li>
</ol></li>
<li>stack monitoring system, including:
<ol className="list-lower-alpha">
<li>sources and categories of airborne emissions</li>
<li>emission pathways for airborne emissions</li>
</ol></li>
<li>active liquid waste system, including:
<ol className="list-lower-alpha">
<li>active liquid waste handling</li>
<li>active liquid waste treatment</li>
<li>liquid effluent monitoring systems</li>
</ol></li>
<li>off gas management system</li>
<li>environmental monitoring program</li>
<li>emergency filtered air discharge system</li>
<li>post  accident radiation monitoring system</li>
<li>potential sources of radiation hazards from systems operated by the Unit 0 operator</li>
<li>possible radiation hazards that may exist after a loss of coolant accident with failed fuel</li>
<li>responsibilities of the Unit 0 operator to abnormal radiological conditions</li>  </ol>
<p>Refer to appendix D.5 for related topics and the breakdown of marks in the group</p>
<div className="col-md-2 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Group 8</strong></p>
</div>
<div className="span-3 mrgn-lft-md mrgn-rght-0 mrgn-bttm-0">
<p><strong>Unit 0 operator responsibilities</strong></p>
</div>
<div className="col-md-3 mrgn-lft-0 mrgn-rght-0 mrgn-bttm-0">
<p><strong>Marks: 6 &plusmn; 1</strong></p>
</div>
<div className="clear"></div>
<ol>
<li>the responsibilities and authorities of the Unit 0 Operator,  including:</li>
<li>work protection on unit 0 systems</li>
<li>personnel safety</li>
<li>communications with external groups such as grid  operators</li>
<li>the licensee safety culture</li>  </ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="B.6"></div>
<h3 id="app-b-6" className="mrgn-tp-0">B.6 Knowledge groups for the NPP-specific examinations for U0O candidates</h3>
<p>The knowledge groups and marks below shall be used by the examination  team to ensure that the sampling of topic groups in appendix B.5 adequately covers the knowledge  areas addressed by the NPP SAT-based objectives for U0Os.</p>
<p>
The knowledge or learning objectives are specific to each NPP and are  developed in accordance with a SAT. Multi-unit NPPs who have U0Os use the document entitled Generic Station System Knowledge  Objectives for Control Room Operators (refer to References) in the development of their NPP-specific learning  objectives (refer to appendix D.4 for the corresponding objectives). NPPs using  a different set of generic system knowledge objectives for U0Os may refer to  the corresponding generic objectives in their set, once the resulting NPP-specific  learning objectives, developed in accordance with a SAT, are approved by the  CNSC.</p>
<table className="width-full">
<tr>
<th>Group</th>
<th>Knowledge area</th>
<th>75 marks</th>
</tr>
<tr>
<td>A</td>
<td>System design </td>
<td>10 &plusmn; 2</td>
</tr>
<tr>
<td>B</td>
<td>Instrumentation and control </td>
<td>7 &plusmn; 2</td>
</tr>
<tr>
<td>C</td>
<td>Response of control loops and logic control circuits </td>
<td>10 &plusmn; 2</td>
</tr>
<tr>
<td>D</td>
<td>Monitoring of system parameters, operating procedures
and test procedures, excluding emergency operating procedures </td>
<td>10 &plusmn; 2</td>
</tr>
<tr>
<td>E</td>
<td>Operating policies and principles and system limits and
constraints </td>
<td>8 &plusmn; 2</td>
</tr>
<tr>
<td>F</td>
<td>System impairments and heat sinks </td>
<td>7 &plusmn; 2</td>
</tr>
<tr>
<td>G</td>
<td>Emergency operation </td>
<td>7 &plusmn; 2</td>
</tr>
<tr>
<td>H</td>
<td>Principles of nuclear safety and their application, emergency
irradiated fuel cooling</td>
<td>6 &plusmn; 1</td>
</tr>
<tr>
<td>I</td>
<td>Administrative aspects, such as administrative procedures
related to plant operation and maintenance, work protection, and roles and
responsibilities of operations personnel</td>
<td>6 &plusmn; 1</td>
</tr>
<tr>
<td>J</td>
<td>Radiation protection topics Knowledge objectives on
radiological incidents and radiation emergencies are specified in appendix D.5</td>
<td>4 &plusmn; 1</td>
</tr>
</table>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="B.7"></div>
<h3 id="app-b-7" className="mrgn-tp-0">B.7 Topic groups for the supplementary NPP-specific examinations for PSS and CRSS Candidates</h3>  <p>These required topic groups for PSS and CRSS candidates are based on the  training program that are supplemental to the RO NPP specific integrated  systems operations that have been developed in accordance with the principles  of a SAT.</p>  <p> The various topics that need to be covered in the supplementary  NPP-specific examinations have been grouped as shown below to assist in their  selection so that each examination contains a balanced mix of topics to cover  the knowledge that PSSs  and CRSSs are required to have in addition to that of an RO. All topics  selected within a topic group shall be linked to specific learning objectives  in accordance with subsection 9.3 and made available to the CNSC upon request.</p>  <p> The marks to be allocated to questions in any topic group are indicated  beside the group.</p>  <table className="table table-striped">
<tr>
<th>Group</th>
<th>Topics applicable to all nuclear power plants</th>
<th>Marks</th>
</tr>
<tr>
<td>1</td>
<td>Accident assessment
<ol>
<li>accident analysis assumptions</li>
<li>plant response under accident conditions</li>
<li>fuel cooling and heat sinks under accident conditions</li>
<li>fuel failures under accident conditions</li>
<li>consequences of impairments of safety related systems
under accident conditions</li>
<li>technical bases for emergency operating procedures
and abnormal incident manual procedures</li>
</ol></td>
<td>10 &plusmn; 3</td>
</tr>
<tr>
<td>2</td>
<td>Emergency operation
<ol className="list-lower-alpha">
<li>radiation emergencies, including:
<ol className="list-lower-roman">
<li>classification of event and categories of emergencies</li>
<li>radiation emergency response procedures</li>
<li>responsibilities of individual persons, teams and
groups</li>
<li>situation assessment</li>
<li>station and off-site protective measures</li>
<li>responsibilities of outside organizations</li>
<li>consolidated nuclear emergency plan</li>
<li>transportation emergencies (at the applicable NPPs)</li>
</ol>
</li>
<li>conventional emergencies, including:
<ol className="list-lower-roman">
<li>conventional emergency response procedures</li>
<li>responsibilities of individual persons, teams and
groups</li>
<li>situation assessment</li>
<li>protective actions</li>
<li>responsibilities of outside organizations</li>
</ol>
</li>
<li>secondary control areas operation, including:
<ol className="list-lower-roman">
<li>primary purpose of the secondary control areas</li>
<li>situations that could require their use</li>
<li>the controls and monitoring capability available in the secondary control areas</li>
</ol>
</li>
</ol></td>
<td>6 &plusmn; 2</td>
</tr>
<tr>
<td>3</td>
<td>Operating licence, acts and regulations
<ol className="list-lower-alpha">
<li>requirements in the station power reactor operating
licence and in the operating policies and principles, their supporting
rationale, the provisions to ensure adherence to them and the potential consequences of operation outside of their stated limitations</li>
<li>situations during station operation and maintenance that may result in the violation of licence conditions</li>
<li>requirements that pertain to station operation and
maintenance in the federal and provincial acts and regulations, and in
associated standards and codes, with their supporting rationale</li>
</ol></td>
<td>7 &plusmn; 3</td>
</tr>
<tr>
<td>4</td>
<td>System technical knowledge
<ol className="list-lower-alpha">
<li>neutron overpower (NOP) protection, including:
<ol className="list-lower-roman">
<li>analyzed reactivity mechanism configurations and flux
shapes</li>
<li>reference, actual and critical channel powers</li>
<li>channel power peaking factor </li>
<li>NOP detector normalization</li>
<li>NOP setpoint reduction for non-standard operating
conditions</li>
</ol>
</li>
<li>reactor regulation
<ol className="list-lower-roman">
<li>normalization of regulating system detectors</li>
<li>normalization of zone thermal powers</li>
</ol>
</li>
<li>reactor start-up after long and short shutdowns</li>
<li>reactor operation with large and low excess
reactivity</li>
<li>unit heat balance calculations</li>
<li>rationale for design requirements of systems</li>
<li>system operating constraints and limits, their
supporting rationale and the provisions to ensure adherence to them</li>
<li>derivation of system operating constraints from plant
safety analyses</li>
<li>chemical control of systems during operation and
maintenance, including:
<ol className="list-lower-roman">
<li>parameters and products controlled</li>
<li>chemicals, methods and equipment used to control them</li>
<li>consequences of their inadequate control</li>
<li>how and why each parameter or product controlled
varies with specified changes in system or unit conditions</li>
<li>specific actions to reduce or control each parameter
or product</li>
</ol>
</li>
<li>classification of system impairments and
corresponding operating strategies; consequences of impairments on the system
and on unit operation</li>
<li>configuration of systems and equipment isolation
required for specified maintenance activities on a system</li>
</ol></td>
<td>8 &plusmn; 2</td>
</tr>
<tr>
<td>5</td>
<td>Fuel handling and storage systems
<ol className="list-lower-alpha">
<li>The responsibilities and authorities of the PSSs or
CRSSs, including:
<ol className="list-lower-roman">
<li>the required unit conditions for authorizing routine
fuelling</li>
<li>authorizing fuelling operations that deviate from
approved procedures </li>
<li>fuel handling emergency procedures</li>
<li>spent fuel bay cooling and purification systems</li>
<li>international safeguards</li>
<li>configuration of equipment and systems, and procedures for other uses of fuelling machines, such as pressure tube surveillance, reactor face maintenance and channel flow checks</li>
</ol>
</li>
</ol></td>
<td>7 &plusmn; 3</td>
</tr>
<tr>
<td>6</td>
<td>Radiological and industrial safety
<ol className="list-lower-alpha">
<li>radiological safety
<ol className="list-lower-roman">
<li>high radiation hazard work</li>
<li>radiation safety of station personnel</li>
<li>abnormal NPP radiological conditions</li>
<li>liquid radiation emissions</li>
<li>radiation protection policies and principles and
radiation protection requirements - nuclear facilities</li>
<li>radiological shipment</li>
<li>responsibilities and authorities of the PSS or CRSS
or of persons reporting to the PSS or CRSS with respect to radiation safety
of station personnel</li>
</ol>
</li>
<li>industrial safety
<ol className="list-lower-roman">
<li>health and safety policy and programs</li>
<li>industrial safety program</li>
<li>work protection procedures</li>
<li>NPP industrial hazards</li>
<li>responsibilities and authorities of the PSS or CRSS
and of persons reporting to the PSS or CRSS with respect to conventional
safety of station personnel</li>
</ol>
</li>
</ol></td>
<td>6 &plusmn; 2</td>
</tr>
<tr>
<td>7</td>
<td>Administration
<ol className="list-lower-alpha">
<li>installation of permanent modifications</li>
<li>installation of temporary modifications</li>
<li>system configuration management</li>
<li>operating procedure changes</li>
<li>setpoint changes</li>
<li>systems testing requirements</li>
<li>reporting requirements</li>
<li>work control procedures</li>
<li>site security and safeguards</li>
<li>environmental monitoring and protection</li>
<li>responsibilities and authority of a PSS or CRSS and
of other plant personnel who report to or interface with the PSS or CRSS</li>
<li>qualification requirements of plant personnel who
report to the PSS or CRSS</li>
</ol></td>
<td>6 &plusmn; 2</td>
</tr>
<tr>
<td>All groups</td>
<td>&nbsp;</td>
<td>50</td>
</tr>
<tr>
<td>Group</td>
<td>Unit 0 systems at applicable nuclear power plants</td>
<td>Marks</td>
</tr>
<tr>
<td>8</td>
<td>Special safety systems, safety support systems and emergency procedures
<ol className="list-lower-alpha">
<li>emergency coolant injection and related subsystems </li>
<li>negative pressure and containment system and related
subsystems</li>
<li>emergency water supply system</li>
<li>emergency power system</li>
<li>powerhouse emergency venting system</li>
<li>safety system monitoring computer</li>
<li>unit 0 abnormal incident manual and emergency operating procedures </li>
</ol></td>
<td>8 &plusmn; 3</td>
</tr>
<tr>
<td>9</td>
<td>Electrical systems
<ol className="list-lower-alpha">
<li>station AC and DC electrical equipment and
distribution, including:
<ol className="list-lower-roman">
<li>electrical protection</li>
<li>emergency transfer schemes</li>
<li>standby generators and auxiliaries</li>
</ol>
</li>
<li>main power output system</li>
<li>switchyard electrical equipment and distribution
system</li>
<li>switchyard compressed air system</li>
</ol></td>
<td>6 &plusmn; 2</td>
</tr>
<tr>
<td>10</td>
<td>Other systems
<ol className="list-lower-alpha">
<li>common service water</li>
<li>environmental monitoring (condenser circulating water)</li>
<li>water treatment plant</li>
<li>condensate makeup</li>
<li>fire protection system</li>
<li>process air systems</li>
<li>ventilation systems</li>
<li>D<sub>2</sub>O management
<ol className="list-lower-roman">
<li>D<sub>2</sub>O upgrades (at applicable NPPs)</li>
<li>ion exchange clean-up (at applicable NPPs)</li>
</ol>
</li>
<li>access control system</li>
<li>off gas management system</li>
<li>active liquid waste systems</li>
<li>radiation monitoring systems</li>
<li>spent fuel bay cooling and purification systems</li>
<li>control computers (Common Unit)</li>
</ol></td>
<td>6 &plusmn; 2</td>
</tr>
<tr>
<td>Unit 0 groups</td>
<td>&nbsp;</td>
<td>20</td>
</tr>
<tr>
<td>Group</td>
<td><strong>Tritium removal
facility at the applicable multi-unit NPP</strong></td>
<td>Marks</td>
</tr>
<tr>
<td>11</td>
<td><ol className="list-lower-alpha">
<li>The responsibilities and authorities of the CRSS or
PSS, including:
<ol className="list-lower-roman">
<li>radiological hazards</li>
<li>conventional hazards including:</li>
<li>hydrogen isotope fire or explosion</li>
<li>thermal hazards</li>
<li>asphyxiant hazards</li>
<li>electrical hazards</li>
</ol>
</li>
<li>requirements for the activation of the emergency
shutdown system</li>
<li>actions on hydrogen or activity releases</li>
<li>refer to tritium removal facility objectives for
CRSSs</li>
</ol></td>
<td>10</td>
</tr>
<tr>
<td>All Groups</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>Group</td>
<td><strong>Severe accidents management
(SAM) and severe accident management guidelines (SAMG) (all stations)</strong></td>
<td>Marks</td>
</tr>
<tr>
<td>12</td>
<td><ol className="list-lower-alpha">
<li>The responsibilities and authorities of the CRSS or PSS, including:
<ol className="list-lower-roman">
<li>characteristics of severe accidents</li>
<li>potential accident progression scenarios to reach SAM
conditions</li>
<li>criteria used to indicate the onset and existence of
severe core damage</li>
<li>NPP SAMG, including:
<ul>
<li>procedural goals</li>
<li>key instrumentation used to evaluate core conditions</li>
<li>innovative use of NPP equipment to mitigate SAM conditions
</ul>
</li>
<li>roles and responsibilities of other certified and shift personnel in SAMG implementation</li>
</ol>
</li>
</ol></td>
<td>10&plusmn; 2</td>
</tr>  </table>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="B.8"></div>
<h3 id="app-b-8" className="mrgn-tp-0">B.8	Sample examination design matrix </h3>
<table className="table table-striped">   <caption className="text-left">NPP-Specific Examination Design Matrix for Unit 0 Control Room Operators</caption>
<tr>
<th colSpan="2" rowspan="4">Topic Groups</th>
<th colSpan="20">Knowledge Areas</th>
<td></td>
<td></td>
</tr>
<tr>
<td colSpan="2">Group A</td>
<td colSpan="2">Group B</td>
<td colSpan="2">Group C</td>
<td colSpan="2">Group D</td>
<td colSpan="2">Group E</td>
<td colSpan="2">Group F</td>
<td colSpan="2">Group G</td>
<td colSpan="2">Group H</td>
<td colSpan="2">Group I</td>
<td colSpan="2">Group J</td>
<td></td>
<td></td>
</tr>
<tr>
<td colSpan="2">System Design</td>
<td colSpan="2">Inst. &amp; Cont.</td>
<td colSpan="2">Response of Control Loops &amp; Logic Control
Circuits</td>
<td colSpan="2">Monitoring of Systems Parameters, Operating and
Test Procedures</td>
<td colSpan="2">OP&amp;P, System Limits and Constraints</td>
<td colSpan="2">System Impairments and Heat Sinks</td>
<td colSpan="2">Emergency Operation</td>
<td colSpan="2">Principles of Nuclear Safety, Emergency
Irradiated Fuel Cooling</td>
<td colSpan="2">Administrative
Aspects</td>
<td colSpan="2">Radiation Protection</td>
<td></td>
<td></td>
</tr>
<tr>
<td>Question&nbsp;#</td>
<td>Mark</td>
<td>Question&nbsp;#</td>
<td>Mark</td>
<td>Question&nbsp;#</td>
<td>Mark</td>
<td>Question&nbsp;#</td>
<td>Mark</td>
<td>Question&nbsp;#</td>
<td>Mark</td>
<td>Question&nbsp;#</td>
<td>Mark</td>
<td>Question&nbsp;#</td>
<td>Mark</td>
<td>Question&nbsp;#</td>
<td>Mark</td>
<td>Question&nbsp;#</td>
<td>Mark</td>
<td>Question&nbsp;#</td>
<td>Mark</td>
<td>Total Marks</td>
<td>Group Mark Range</td>
</tr>
<tr>
<td>1</td>
<td>Special Safety Systems</td>
<td>5.c,d, f</td>
<td>5</td>
<td>5.e</td>
<td>5</td>
<td>5.b</td>
<td>1</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>5.a</td>
<td>1</td>
<td></td>
<td>&nbsp;</td>
<td></td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>12</td>
<td>12 &plusmn; 3</td>
</tr>
<tr>
<td>2</td>
<td>Nuclear Safety</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>2.a</td>
<td>3</td>
<td>2.b</td>
<td>1</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>2.c</td>
<td>2</td>
<td>2.d</td>
<td>5</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>11</td>
<td>10 &plusmn; 2</td>
</tr>
<tr>
<td>3</td>
<td>Integrated Plant Operation &amp; Emergency Proc</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>4.c</td>
<td>2</td>
<td>4.b</td>
<td>4</td>
<td>4.d</td>
<td>2</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>4.a</td>
<td>2</td>
<td>9</td>
<td>10 &plusmn; 2</td>
</tr>
<tr>
<td>4</td>
<td>Switchyard and Electrical Distribution</td>
<td>8. a, b</td>
<td>6</td>
<td>9.c</td>
<td>2</td>
<td>9.b</td>
<td>1</td>
<td>9.a</td>
<td>1</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>10</td>
<td>9 &plusmn; 2</td>
</tr>
<tr>
<td>5</td>
<td>Emergency Electrical Supplies</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>6.a</td>
<td>8</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>6.b</td>
<td>2</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>9</td>
<td>9 &plusmn; 2</td>
</tr>
<tr>
<td>6</td>
<td>Water, Air, Ventilation and Fire Protection Systems</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>7.a</td>
<td>1</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>7.b, c</td>
<td>3</td>
<td>7.e</td>
<td>3</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>7.d</td>
<td>2</td>
<td>8</td>
<td>9 &plusmn; 2</td>
</tr>
<tr>
<td>7</td>
<td>Radiation Protection &amp; Radiation Emergenicies</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>3.b</td>
<td>4</td>
<td>3.a</td>
<td>3</td>
<td>3.c</td>
<td>3</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>10</td>
<td>9 &plusmn; 2</td>
</tr>
<tr>
<td>8</td>
<td>U0 Operator Responsibilities</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>1.a, b</td>
<td>6</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>6</td>
<td>6 &plusmn; 1</td>
</tr>
<tr>
<td colSpan="3">Total Marks</td>
<td>11</td>
<td>&nbsp;</td>
<td>7</td>
<td>&nbsp;</td>
<td>11</td>
<td>&nbsp;</td>
<td>8</td>
<td>&nbsp;</td>
<td>8</td>
<td>&nbsp;</td>
<td>8</td>
<td>&nbsp;</td>
<td>8</td>
<td>&nbsp;</td>
<td>7</td>
<td>&nbsp;</td>
<td>6</td>
<td>&nbsp;</td>
<td>4</td>
<td></td>
<td></td>
</tr>
<tr>
<td colSpan="3">Group Mark Range</td>
<td>10 &plusmn; 2</td>
<td>&nbsp;</td>
<td>7 &plusmn; 2</td>
<td>&nbsp;</td>
<td>10 &plusmn; 2</td>
<td>&nbsp;</td>
<td>10 &plusmn; 2</td>
<td>&nbsp;</td>
<td>8 &plusmn; 2</td>
<td>&nbsp;</td>
<td>7 &plusmn; 2</td>
<td>&nbsp;</td>
<td>7 &plusmn; 2</td>
<td>&nbsp;</td>
<td>6 &plusmn; 1</td>
<td>&nbsp;</td>
<td>6 &plusmn; 1</td>
<td>&nbsp;</td>
<td>4 &plusmn; 1</td>
<td></td>
<td></td>
</tr>  </table>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="B.9"></div>
<h3 id="app-b-9" className="mrgn-tp-0">B.9 Knowledge-based examination cover page</h3>
<h4>Initial Knowledge-Based Certification Examination</h4>
<p>[Examination title]<br />
[NPP]<br />
[Position]<br />
[Examination conduct date]</p>
<p>Total&nbsp;: [number] marks<br />
Time limit: [number] hours<br />
Estimated required time: [number] hours</p>
<p><strong>Developed by:</strong></p>
<p>_____________________________<br />
[Print name and signature]<br />
Lead examiner</p>
<p>________________<br />
Date</p>
<p><strong>Examination team:</strong></p>
<p> ______________________________ ______________________________</p>
<p> ______________________________ ______________________________<br />[Print names]</p>
<p><strong>Approved for conduct by:</strong></p>
<p>_____________________________<br />[Print name and signature]<br />
Lead examiner</p>
<p>________________<br />Date</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="B.10"></div>
<h3 id="app-b-10" className="mrgn-tp-0">B.10 Sample knowledge-based examination questions</h3>
<p>The following are sample examination  questions stating  the required type of  information for each question.</p>
<p>
Note: The total mark allotment for a  question is the sum of the elements. Key instructions for each question are in bold  and underlined.</p>
<table className="table table-striped">
<tr>
<td>[X] marks</td>
<td>1.</td>
<td colSpan="3">Pages 15 to 43 of the following operating
manual procedure are provided for your reference:<br />
O.M. 1-09110-4.1 Moderator pump up and
approach to critical with start-up instrumentation not in service. </td>
</tr>
<tr>
<td><strong>&nbsp;</strong></td>
<td>&nbsp;</td>
<td>a.</td>
<td><em>&nbsp;</em></td>
<td>See box 1.1 of section 4.1.1, page 18. <br />
<strong>Explain</strong> why<strong> </strong>it is necessary to ensure each of the
following prerequisites has been met:</td>
</tr>
<tr>
<td>[X] elements </td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>i)</td>
<td>Ensure moderator purification is valved out; </td>
</tr>
<tr>
<td>[X] elements </td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>ii)</td>
<td>Ensure that heat transport and moderator systems meet the following specifications for isotopic:
<ul>
<li>heat transport D20 isotopic spec is &gt; 97.5% wt% D20,</li>
<li>moderator D20 isotopic spec is &gt;99.8% wt% D20 and,</li>
<li>moderator D20 isotopic is 0.5% above the HT isotopic </li>
</ul></td>
</tr>
<tr>
<td>[X] elements</td>
<td>&nbsp;</td>
<td>b.</td>
<td>i)</td>
<td>See box 2.3.1, step 2 and the adjacent side bar on page 29.<br />
<strong>Explain</strong> why indicated power decreases initially and then subsequently increases as moderator level is raised. </td>
</tr>
<tr>
<td>[X] elements</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>ii)</td>
<td>See the third sidebar beside step 2.4.1 on page 35.<br />
<strong>Explain</strong> why &quot;it is more important that average zone level (AZL) be consistent for each reading than it be 35% exactly.&quot;</td>
</tr>
<tr>
<td>[X] elements </td>
<td>&nbsp;</td>
<td>c.</td>
<td>&nbsp;</td>
<td>The spreadsheet of data collected
during an approach to critical with boron removal is provided for your
reference.<br />
Referring to the &quot;final RX power percent&quot;
column, <strong>state</strong> the power level at which the reactor is considered to be critical. <br />
Also, <strong>explain</strong> why the reactor is considered to be critical at this point.</td>
</tr>  </table>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="B.11"></div>
<h3 id="app-b-11" className="mrgn-tp-0">B.11 Allocation of marks and time versus number of answer elements</h3>
<table className="table table-striped">
<tr>
<th colSpan="3">General examinations</th>
<th>&nbsp;</th>
<th colSpan="3">NPP-specific examinations</th>
</tr>
<tr>
<th>Elements</th>
<th>Marks</th>
<th>Minutes</th>
<th>&nbsp;</th>
<th>Elements</th>
<th>Marks</th>
<th>Minutes</th>
</tr>
<tr>
<td>1</td>
<td>1</td>
<td>1</td>
<td>&nbsp;</td>
<td>1</td>
<td>1</td>
<td>1</td>
</tr>
<tr>
<td>2</td>
<td>1</td>
<td>1</td>
<td>&nbsp;</td>
<td>2</td>
<td>1</td>
<td>2</td>
</tr>
<tr>
<td>3</td>
<td>1</td>
<td>2</td>
<td>&nbsp;</td>
<td>3</td>
<td>1</td>
<td>2</td>
</tr>
<tr>
<td>4</td>
<td>2</td>
<td>3</td>
<td>&nbsp;</td>
<td>4</td>
<td>1</td>
<td>3</td>
</tr>
<tr>
<td>5</td>
<td>2</td>
<td>4</td>
<td>&nbsp;</td>
<td>5</td>
<td>2</td>
<td>4</td>
</tr>
<tr>
<td>6</td>
<td>2</td>
<td>4</td>
<td>&nbsp;</td>
<td>6</td>
<td>2</td>
<td>5</td>
</tr>
<tr>
<td>7</td>
<td>3</td>
<td>5</td>
<td>&nbsp;</td>
<td>7</td>
<td>2</td>
<td>6</td>
</tr>
<tr>
<td>8</td>
<td>3</td>
<td>6</td>
<td>&nbsp;</td>
<td>8</td>
<td>3</td>
<td>6</td>
</tr>
<tr>
<td>9</td>
<td>4</td>
<td>6</td>
<td>&nbsp;</td>
<td>9</td>
<td>3</td>
<td>7</td>
</tr>
<tr>
<td>10</td>
<td>4</td>
<td>7</td>
<td>&nbsp;</td>
<td>10</td>
<td>3</td>
<td>8</td>
</tr>
<tr>
<td>11</td>
<td>4</td>
<td>8</td>
<td>&nbsp;</td>
<td>11</td>
<td>4</td>
<td>9</td>
</tr>
<tr>
<td>12</td>
<td>5</td>
<td>9</td>
<td>&nbsp;</td>
<td>12</td>
<td>4</td>
<td>10</td>
</tr>
<tr>
<td>13</td>
<td>5</td>
<td>9</td>
<td>&nbsp;</td>
<td>13</td>
<td>4</td>
<td>10</td>
</tr>
<tr>
<td>14</td>
<td>6</td>
<td>10</td>
<td>&nbsp;</td>
<td>14</td>
<td>5</td>
<td>11</td>
</tr>
<tr>
<td>15</td>
<td>6</td>
<td>11</td>
<td>&nbsp;</td>
<td>15</td>
<td>5</td>
<td>12</td>
</tr>
<tr>
<td>16</td>
<td>6</td>
<td>12</td>
<td>&nbsp;</td>
<td>16</td>
<td>5</td>
<td>13</td>
</tr>
<tr>
<td>17</td>
<td>7</td>
<td>12</td>
<td>&nbsp;</td>
<td>17</td>
<td>6</td>
<td>14</td>
</tr>
<tr>
<td>18</td>
<td>7</td>
<td>13</td>
<td>&nbsp;</td>
<td>18</td>
<td>6</td>
<td>14</td>
</tr>
<tr>
<td>19</td>
<td>8</td>
<td>14</td>
<td>&nbsp;</td>
<td>19</td>
<td>6</td>
<td>15</td>
</tr>
<tr>
<td>20</td>
<td>8</td>
<td>14</td>
<td>&nbsp;</td>
<td>20</td>
<td>7</td>
<td>16</td>
</tr>
<tr>
<td>21</td>
<td>8</td>
<td>15</td>
<td>&nbsp;</td>
<td>21</td>
<td>7</td>
<td>17</td>
</tr>
<tr>
<td>22</td>
<td>9</td>
<td>16</td>
<td>&nbsp;</td>
<td>22</td>
<td>7</td>
<td>18</td>
</tr>
<tr>
<td>23</td>
<td>9</td>
<td>17</td>
<td>&nbsp;</td>
<td>23</td>
<td>8</td>
<td>18</td>
</tr>
<tr>
<td>24</td>
<td>10</td>
<td>17</td>
<td>&nbsp;</td>
<td>24</td>
<td>8</td>
<td>19</td>
</tr>
<tr>
<td>25</td>
<td>10</td>
<td>18</td>
<td>&nbsp;</td>
<td>25</td>
<td>8</td>
<td>20</td>
</tr>
<tr>
<td>26</td>
<td>10</td>
<td>19</td>
<td>&nbsp;</td>
<td>26</td>
<td>9</td>
<td>21</td>
</tr>
<tr>
<td>27</td>
<td>11</td>
<td>19</td>
<td>&nbsp;</td>
<td>27</td>
<td>9</td>
<td>22</td>
</tr>
<tr>
<td>28</td>
<td>11</td>
<td>20</td>
<td>&nbsp;</td>
<td>28</td>
<td>9</td>
<td>22</td>
</tr>
<tr>
<td>29</td>
<td>12</td>
<td>21</td>
<td>&nbsp;</td>
<td>29</td>
<td>10</td>
<td>23</td>
</tr>
<tr>
<td>30</td>
<td>12</td>
<td>22</td>
<td>&nbsp;</td>
<td>30</td>
<td>10</td>
<td>24</td>
</tr>
<tr>
<td>31</td>
<td>12</td>
<td>22</td>
<td>&nbsp;</td>
<td>31</td>
<td>10</td>
<td>25</td>
</tr>
<tr>
<td>32</td>
<td>13</td>
<td>23</td>
<td>&nbsp;</td>
<td>32</td>
<td>11</td>
<td>26</td>
</tr>
<tr>
<td>33</td>
<td>13</td>
<td>24</td>
<td>&nbsp;</td>
<td>33</td>
<td>11</td>
<td>26</td>
</tr>
<tr>
<td>34</td>
<td>14</td>
<td>24</td>
<td>&nbsp;</td>
<td>34</td>
<td>11</td>
<td>27</td>
</tr>
<tr>
<td>35</td>
<td>14</td>
<td>25</td>
<td>&nbsp;</td>
<td>35</td>
<td>12</td>
<td>28</td>
</tr>
<tr>
<td>36</td>
<td>14</td>
<td>26</td>
<td>&nbsp;</td>
<td>36</td>
<td>12</td>
<td>29</td>
</tr>
<tr>
<td>37</td>
<td>15</td>
<td>27</td>
<td>&nbsp;</td>
<td>37</td>
<td>12</td>
<td>30</td>
</tr>
<tr>
<td>38</td>
<td>15</td>
<td>27</td>
<td>&nbsp;</td>
<td>38</td>
<td>13</td>
<td>30</td>
</tr>
<tr>
<td>39</td>
<td>16</td>
<td>28</td>
<td>&nbsp;</td>
<td>39</td>
<td>13</td>
<td>31</td>
</tr>
<tr>
<td>40</td>
<td>16</td>
<td>29</td>
<td>&nbsp;</td>
<td>40</td>
<td>13</td>
<td>32</td>
</tr>
<tr>
<td><strong>250</strong></td>
<td><strong>100</strong></td>
<td><strong>180</strong></td>
<td><strong>Totals</strong></td>
<td><strong>300</strong></td>
<td><strong>100</strong></td>
<td><strong>240</strong></td>
</tr>  </table>
<p>Derivation of data:<br />
Marks per question = Round (total marks/total elements * actual  elements)<br />
Minutes per question = Round (total minutes/total elements * actual  elements)<br />
Example #1 - General examination: 100/300 x 20 elements in a question =  7 marks for that questions<br />
Example #2 - NPP-specific examination: 100/250 x 20 elements in a  question = 8 marks for that question</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="B.12"></div>
<h3 id="app-b-12" className="mrgn-tp-0">B.12 Knowledge-based marking guide cover page </h3>
<h4>Marking Guide</h4>
<p>Examination title:<br />
NPP:<br />
Candidate&#39;s full name:<br />
Examination score:<br />
Examination date:<br />
Marks:</p>  <h5>Lead examiner: </h5>  <p> ____________________________<br />
[Print  name and signature]
</p>  <p> _________<br />  Date</p>  <h5>Approved by</h5>  <p> ____________________________ <br />
[Print  name and signature]
<br />
Training  manager</p>  <p>_________<br />  Date</p>  <h5>Marked by:</h5>  <p> ____________________________ <br />
[Print  name and signature],
<br />  First  marker
Second  marker</p>  <p>___________________________<br />
[Print name and signature],<br />  Second marker</p>  <h5>Authorized by:</h5>  <p>____________________________ <br />
[Print  name and signature]
<br />  Training  manager</p>  <p>_________<br />
Date</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="B.13"></div>
<h3 id="app-b-13" className="mrgn-tp-0">B.13 Knowledge-based marking guide answer</h3>
<p><strong>Q1 [X] marks</strong><br />
a) [X] elements</p>  <p><strong>i) The  purpose of the unloader is to:</strong></p>  <ul>
<li>Protect a turbine-generator (under  adverse conditions) by limiting its maximum load<br />
</li>  </ul>  <p><strong>This is done:</strong></p>  <ul>
<li>by limiting the governor  valve demand signal</li>
<li>thereby, limiting the steam  flow (limiting turbine load)</li>  </ul>  <p><strong>  Ref.: TM 234-7XXX_XXX  [complete titles, Rev. X , p. 4 Knowledge  objectives =X]</strong></p>  <p><strong>ii) Unloading  in a turbine generating system is initiated by:</strong></p>  <ul>
<li> low condenser vacuum (high  condenser pressure)</li>
<li>low boiler pressure<br />
</li>  </ul>  <p><strong>Ref.: TM 234-7, p. 4</strong></p>  <p>b) [X] elements</p>  <p><strong>Unloading initiates a runback to prevent:</strong></p>  <ul>
<li>turbine load cycling that  could occur as follows:</li>
<li>as a result of the unloading process, the unloading parameter (low condenser vacuum or boiler pressure) could return to an acceptable range</li>
<li>the load restriction imposed by the unloader would be removed</li>
<li>this would allow the limit placed on the valve demand signal to be removed</li>
<li>allowing the valves to return to the unchanged setpoint</li>
<li>the turbine steam flow would increase</li>
<li>causing the unloading  parameter to again reach an unacceptable value</li>
<li>and the beginning of another  unloading and loading cycle</li>  </ul>  <p><strong>Ref.: TM 234-7, p. 4 and 5</strong></p>  <p><em>[NPP-specific:  100/300 x 13 elements = 4 marks for Q1]</em></p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="B.14"></div>
<h3 id="app-b-14" className="mrgn-tp-0">B.14 Knowledge-based examination checklist</h3>  <div className="col-md-12 mrgn-bttm-0 mrgn-tp-0">
<div className="col-md-3 ">NPP: ________________________</div>
<div className="span-3 ">File: ________________________</div>  </div>  <div className="clear"></div>  <p>Examination title: ________________________<br />Examination date: ________________________</p>
<p>This checklist shall be completed at  the end of each examination development.</p>  <ul>
<li>The examination and the questions follow the relevant topics, mark allocation and total marks as shown in the examination summary chart below. </li>
<li>No more than 20 percent of the questions on the certification  examination are based on previously used questions, and all reused questions are significantly modified and have never before seen by the candidates.</li>
<li>At least 80 percent of the questions on the certification  examination are newly designed and not based upon questions previously used in  any examination, test, candidate evaluation or training.</li>
<li>The level of difficulty of each question is appropriate to discriminate  between those candidates who have an understanding of the subject covered by  the question and those candidates who do not.</li>
<li>Each question is clear, technically accurate and contains all  the information necessary to give the required answer.</li>
<li>The parts and subparts of  each question are arranged in a logical order, where applicable.</li>
<li>The answer to a part of a question should not be completely  dependent on the answer to a previous part.</li>
<li>Questions measure integrated understanding or higher-level knowledge  required by persons in the position for which the examination is intended to  perform their job competently.</li>
<li>Questions are operationally focused covering a wide variety  of NPP systems, procedures and topics associated with the integrated operation  of these systems.</li>
<li>No excessive emphasis is  placed on a particular system, procedure, topic or type of objective.</li>
<li>None of the questions contain information that could  potentially provide the candidate with assistance in answering other questions.</li>
<li>The information on the cover page of the examination is similar to that shown in appendix B.9.</li>
<li>The identification codes of equipment and documents used in the questions are correct.</li>
<li>Any acronym used in a question is defined the first time it appears in that question.</li>
<li>The questions clearly identify any reference material given to the candidates and give appropriate instructions for its use.</li>
<li>No reference material is given for a question that covers an area  that the candidates have to know from memory.</li>
<li>Any instruction or other information in a question quoted from the NPP documentation appears verbatim.</li>
<li>The marks are allocated to each question.</li>
<li>The formatting of the questions is similar to that shown in appendix B.10.</li>
<li>The information on the cover page of the marking guide is similar to that shown in appendix&nbsp;B.12.</li>
<li>Each answer contains only  information specifically asked by the question.</li>
<li>Each answer is complete  and technically accurate.</li>
<li>Each answer reflects the level of knowledge that candidates are expected to have on the subject covered by the question.</li>
<li>None of the answers conflict with the information contained in the frozenup-to-date documentation.</li>
<li>The breakdown of each answer into elements is appropriate.</li>
<li>The formatting of the answers in the marking guide is similar  to that shown in appendix B.13.</li>
<li>The examination has been validated and meets the requirements set out in this document.</li>  </ul>  <table className="table table-striped">  <caption className="text-left">Examination summary chart</caption>
<tr>
<th>Question number (incl. sub-parts)</th>
<th>Topic group (incl. appendix #)</th>
<th>Topic(s)</th>
<th>Allowable marks </th>
<th>Actual marks and elements</th>
</tr>
<tr>
<td>1</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>2</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>3 a) i)</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>  </table>  <div className="col-md-12 mrgn-bttm-0 mrgn-tp-0">
<div className="col-md-3 ">Lead examiner:</div>
<div className="col-md-3">________________________<br />[Print name]</div>
<div className="col-md-3 ">________________________<br />Signature</div>  </div>  <div className="clear"></div>  <div className="col-md-12 mrgn-bttm-0 mrgn-tp-0">
<div className="col-md-3 ">Training manager</div>
<div className="col-md-3">________________________<br />[Print name]</div>
<div className="col-md-3 ">________________________<br />Signature</div>  </div>  <div className="clear"></div>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="B.15"></div>
<h3 id="app-b-15" className="mrgn-tp-0">B.15 Knowledge-based examination result form</h3>
<p>Candidate&#39;s full name:<br />
Candidate&#39;s position:<br />
Examination title:<br />
Examination  date:<br />
NPP:</p>  <table className="table table-striped">
<tr>
<td>Q#</td>
<td>1</td>
<td>2</td>
<td>3</td>
<td>4</td>
<td>5</td>
<td>6</td>
<td>7</td>
<td>8</td>
<td>9</td>
<td>10</td>
<td>11</td>
<td>12</td>
<td>13</td>
<td>14</td>
<td>15</td>
<td>16</td>
<td>Total</td>
</tr>
<tr>
<td>Max marks</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>Scored
marks</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>Total score in percent</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>  </table>
<p>Justification of the  result:</p>
<p>Deficiencies revealed  by the candidate:</p>  <div className="col-md-12 mrgn-bttm-0 mrgn-tp-0">
<div className="col-md-3 ">Lead examiner:</div>
<div className="col-md-3">________________________<br />[Print name and Signature]</div>
<div className="col-md-3 ">________________________<br />[Date]</div>  </div>  <div className="clear"></div>  <div className="col-md-12 mrgn-bttm-0 mrgn-tp-0">
<div className="col-md-3 ">Examiners:</div>
<div className="col-md-3">________________________<br />[Print name and Signature]</div>
<div className="col-md-3 ">________________________<br />[Print name and Signature]</div>  </div>  <div className="clear"></div>
<div className="col-md-12 mrgn-bttm-0 mrgn-tp-0">
<div className="col-md-3 ">Authorized by:</div>
<div className="col-md-3">________________________<br />[Print name and Signature]<br />Training manager</div>
<div className="col-md-3 ">________________________<br />[Date]</div>  </div>  <div className="clear"></div>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="C"></div>
<h2 id="app-c" className="mrgn-tp-0">Appendix C: Performance-Based Certification Examinations - Supplemental Requirements</h2>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="C.1"></div>
<h3 id="app-c-1" className="mrgn-tp-0">C.1 Competency areas and generic performance expectations for RO and U0O candidates</h3>  <p>The competency areas and generic performance expectations (GPEs) listed in this appendix shall be used for assessing the performance of RO and U0O candidates.</p>  <p> The standard of acceptable performance to be used with each generic expectation is dictated by the corresponding documented specific performance expectations at the NPP for the RO and U0O positions. The number in brackets associated with each generic performance expectation is a weighting factor to be used for calculating the scores obtained by candidates in a competency area. These weighting factors reflect the relative importance of the generic performance expectations.</p>  <h4>GPE	Competency area</h4>   <h5>1.0	Monitoring</h5>  <p>This competency area addresses the ability to independently maintain an on-going awareness of NPP unit or system conditions, using the appropriate main control room (MCR) devices, control equipment room devices or field reports, either by performing the required checks without reference to operating procedures or by performing the relevant checks not explicitly mentioned in an operating procedure being implemented. </p>
<p> 1.1 (5) monitors critical safety parameters (CSPs) and their support parameters (SPs) when necessary</p>  <p> 1.2 (4) monitors in a timely manner that major system parameters are trending and stabilize as expected </p>  <p> 1.3 (4) monitors annunciations and panel indications, as necessary, to maintain an awareness of changing equipment, system and unit conditions</p>  <p> 1.4 (5) checks in a timely manner that major automatic actions (MAAs) occur and have the desired effect, prior to referring to operating procedures</p>  <p> 1.5 (3) checks in a timely manner that other automatic actions occur and have the desired effect</p>  <p> 1.6 (3) checks in a timely manner that operator actions are having or have had the desired effect </p>  <h5>2.0 Actions taken without reference to procedures</h5>  <p> This competency area addresses the ability to perform the required actions when reference to operating procedures is not expected, when an operating procedure does not exist or prior to accessing the applicable operating procedures following a transient or an abnormal condition.</p>  <p> 2.1 (2) ensures in a timely manner the assembly of the control room response team</p>  <p> 2.2 (5) executes in a timely manner the required corrective actions when an MAA fails to occur</p>  <p> 2.3 (3) executes in a timely manner the required corrective actions when other automatic actions fail to occur</p>  <p> 2.4 (5) executes in a timely manner the required actions, based on diagnosis, prior to accessing the applicable procedures</p>  <p> 2.5 (3) executes other required actions, as appropriate, when reference to operating procedures is not expected</p>  <p> 2.6 (4) executes, correctly, in a timely manner and following PSS or CRSSS approval, the actions required when a transient, an abnormal condition, an <strong>additional malfunction</strong>, equipment unavailability or any other unit condition is not addressed by procedures</p>  <p>2.7 (4) ensures in a timely manner that the appropriate corrective or preventive actions are initiated when unit conditions are such that they could threaten NPP personnel or public safety</p>  <p>2.8 (5) executes in a timely manner corrective actions not specified in operating procedures when CSPs or their SPs are deviating unsafely</p>  <h5>3.0 Diagnosis and decision-making</h5>  <p>This competency area addresses the ability to independently and in a timely manner recognize NPP unit or system abnormalities, to independently diagnose malfunctions, to select the applicable operating procedures and, when no applicable procedures exist, to determine or recommend an appropriate course of actions</p>  <p> 3.1 (5) recognizes when CSPs or SPs are deviating unsafely</p>  <p> 3.2 (4) recognizes when an NPP unit, system configuration or a system parameter deviates from an acceptable value, configuration or state defined in operating procedures</p>  <p> 3.3 (5) recognizes when a requirement specified in the operating policies and principles (OP&amp;Ps) is about to be, or may have been violated</p>  <p> 3.4 (5) identifies without procedure, the alarms and indications that characterize the nature of a malfunction and, when applicable, recognizes the entry conditions to the applicable procedure</p>  <p> 3.5 (3) identifies the applicable procedure(s) or procedure path based on diagnosis</p>  <p> 3.6 (2) with reference to procedures, determines the nature of a malfunction or identifies the specific procedures to be used</p>  <p> 3.7 (2) confirms the diagnosis or confirms that the correct procedure has been selected, using other available information such as NPP documentation or information from the field</p>  <p> 3.8 (5) determines or recommends an appropriate course of action if procedures do not exist, do not fully address the situation, give conflicting directions or are ineffective</p>  <p> 3.9 (4) recognizes in a timely manner when concurrent abnormal NPP conditions need to be addressed and assigns priorities to the actions required to address them, taking into account their relative importance</p>  <p> 3.10 (3) when time permits, determines the specific cause of a malfunction using all the information available</p>  <h5>4.0 Procedural compliance</h5>  <p>This competency area addresses the ability to correctly perform the actions and checks required by any relevant approved procedures.</p>  <p> 4.1 (3) executes each step of the applicable procedure(s) correctly, in the correct sequence and in a timely manner</p>  <p> 4.2 (4) performs the actions considered as standard operating practices necessary for completing a step of a procedure</p>  4.3 (5) executes, in a timely manner, a CSP restoration procedure when required  <h5>5.0 Communications and crew interaction skills</h5>  <p> This competency area addresses the ability to communicate with other MCR response team members or crew members clearly and accurately and to interact with them in an efficient and effective manner.</p>  <p> 5.1 (5) gives instructions in a timely manner to crew members or MCR response team members, as appropriate</p>  <p> 5.2 (3) acknowledges the requests or information received</p>  <p> 5.3 (5) communicates the outcome of a request to its originator</p>  <p> 5.4 (3) keeps MCR response team members or crew members, as appropriate informed of relevant unit conditions or significant developments through briefings as appropriate</p>  <p> 5.5 (2) makes the necessary notifications or requests, as appropriate, in a timely manner</p>  <p> 5.6 (3) obtains in a timely manner the necessary approvals from the PSS or CRSS</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="C.2"></div>
<h3 id="app-c-2" className="mrgn-tp-0">C.2 Competency areas and generic performance expectations for PSS candidates at single-unit NPPs</h3>  <p>The competency areas and GPEs listed in this appendix shall be used for assessing the performance of PSS candidates at single-unit NPPs.</p>  <p> The standard of acceptable performance to be used with each generic expectation is dictated by the corresponding documented specific performance expectations at the NPP for the PSS position. The number in brackets associated with each generic performance expectation is a weighting factor to be used for calculating the scores obtained by candidates in a competency area. These weighting factors reflect the relative importance of the generic performance expectations.</p>  <h4>GPE	Competency area</h4>   <h5>1.0	Monitoring</h5>
<p>This competency area addresses the ability to independently maintain an on going awareness of NPP conditions, using appropriate MCR devices, either by performing the required checks without reference to operating procedures or by performing relevant checks not explicitly mentioned in an operating procedure being implemented.</p>  <p> 1.1 (5) monitors CSPs and their support parameters SPs when necessary</p>  <p> 1.2 (4) monitors in a timely manner that major system parameters are trending and stabilize as expected</p>  <p> 1.3 (4) monitors annunciations and panel indications, as necessary, to maintain an awareness of changing NPP equipment, system and conditions</p>  <p> 1.4 (5) checks in a timely manner that MAAs occur and have the desired effect, prior to referring to operating procedures</p>  <p> 1.5 (3) checks that other automatic actions occur and have the desired effect, as appropriate to the situation</p>  <p> 1.6 (3) checks in a timely manner that an action performed has the desired effect</p>  <p> 1.7 (5) checks relevant system and NPP conditions before approving or initiating an action</p>  <p> 1.8 (1) acknowledges and resets alarms or periodically takes alarm summaries as appropriate, when the RO is temporarily absent from the MCR</p>  <h5>2.0 Actions taken without reference to procedures</h5>  <p> This competency area addresses the ability to direct the execution of the required actions or to perform these actions when reference to operating procedures is not expected, when an operating procedure does not exist or prior to accessing the applicable operating procedures following a transient or an abnormal condition.</p>  <p> 2.1 (2) ensures in a timely manner the assembly and the deployment of the MCR response team</p>  <p> 2.2 (5) executes or directs the execution of the required corrective actions in a timely manner when an MAA fails to occur</p>  <p> 2.3 (3) executes or directs the execution of the required corrective actions in a timely manner when other automatic actions fail to occur</p>  <p> 2.4 (5) executes or directs the execution of the required actions in a timely manner, based on diagnosis, prior to accessing the applicable procedures</p>  <p> 2.5 (3) executes or directs the execution of other required actions, as appropriate, when reference to operating procedures is not expected</p>  <p> 2.6 (4) executes or directs the execution of the actions required in a timely manner when a transient, an abnormal condition, an additional malfunction, equipment unavailability or any other NPP condition is not addressed by procedures</p>  <p> 2.7 (4) ensures in a timely manner that the appropriate corrective or preventive actions are initiated when NPP conditions are such that they could threaten NPP personnel or public safety</p>  <p> 2.8 (5) executes or directs the execution of corrective actions not specified in operating procedures in a timely manner when CSPs or their SPs are deviating unsafely</p>  <p><strong>3.0 Diagnosis and decision-making</strong></p>  <p> This competency area addresses the ability to independently recognize abnormalities, to independently diagnose malfunctions, to select the applicable operating procedures and, when no relevant procedure exists, to determine an appropriate course of action.</p>  <p> 3.1 (5) recognizes in a timely manner when CSPs or their SPs are deviating unsafely</p>  <p> 3.2 (4) recognizes in a timely manner when a system parameter, a system configuration or an NPP state deviates from an acceptable value, configuration or state defined in operating procedures</p>  <p> 3.3 (5) recognizes in a timely manner when a requirement specified in the OP&amp;Ps is about to be, or may have been violated</p>  <p> 3.4 (5) identifies, in a timely manner and without procedure, the alarms and indications that characterize the nature of a malfunction and, when applicable, recognizes the entry conditions to the relevant procedure</p>  <p> 3.5 (3) identifies in a timely manner the applicable procedures, based on diagnosis</p>  <p> 3.6 (2) with reference to procedures, determines in a timely manner the nature of a malfunction or identifies the specific procedures to be used</p>  <p> 3.7 (2) confirms the diagnosis or confirms that the correct procedure has been selected, using other available information such as NPP documentation or information from the field</p>  <p> 3.8 (5) determines in a timely manner an appropriate course of actions when procedures do not exist, do not fully address the situation, give conflicting directions or are ineffective</p>  <p> 3.9 (4) recognizes in a timely manner when concurrent abnormal NPP conditions need to be addressed and assigns priorities to the actions required to address them, taking into account their relative importance</p>  <p> 3.10 (3) when time permits, determines the specific cause of a malfunction using all the information available.</p>  <p> 3.11 (5) determines in a timely manner the corrective actions required when CSP or their SPs are deviating unsafely</p>  <p> 3.12 (4) determines the desired end state of the NPP, together with any significant intermediate NPP state, and the time frame to establish the end state, following a transient or an abnormal condition</p>  <p> 3.13 (5) determines the appropriateness of a request that requires PSS approval, based on a review of the relevant system and NPP conditions, constraints and limits, before approving the action</p>  <h5>4.0 Procedural compliance</h5>  <p> This competency area addresses the ability to direct the execution of the required actions and checks using a relevant approved procedure. It also addresses the ability to correctly perform the actions and checks required by any relevant approved procedure, when the RO is temporarily absent from the MCR, and the ability to carry out the actions and checks specifically assigned to the PSS using a relevant approved procedure.</p>  <p> 4.1 (3) executes or directs the execution of an applicable procedure correctly and in the correct sequence</p>  <p> 4.2 (4) performs the actions considered as standard operating practices necessary for completing a step of a procedure</p>  <p> 4.3 (5) executes or directs the execution of a CSP restoration procedure in a timely manner when required</p>  <h5>5.0 Communications and crew interaction skills</h5>  <p> This competency area addresses the ability to communicate with other MCR response team members or crew members clearly and accurately and to interact with them effectively and efficiently.</p>  <p> 5.1 (5) gives instructions and approvals in a timely manner to MCR response team members or crew members, as appropriate</p>  <p> 5.2 (3) acknowledges the requests and the information received</p>  <p> 5.3 (5) communicates, in a timely manner, the outcome of a request to its originator</p>  <p> 5.4 (3) communicates, in a timely manner, the required information to MCR response team members or crew members, as appropriate</p>  <p> 5.5 (2) makes the necessary notifications in a timely manner</p>  <p> 5.6 (3) obtains the necessary approvals from NPP management in a timely manner</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="C.3"></div>
<h3 id="app-c-3" className="mrgn-tp-0">C.3 Competency areas and generic performance expectations for CRSS candidates at multi-unit NPPs</h3>  <p>The competency areas and GPEs listed in this appendix shall be used for assessing the performance of CRSS candidates at the applicable multi-unit NPPs.</p>  <p> The standard of acceptable performance to be used with each generic expectation is dictated by the corresponding documented specific performance expectations at the NPP for the CRSS position.</p>  <p> Note: The applicability of a GPE in a DTS, a PCTS or both is indicated in brackets.</p>  <h4>GPE Competency area</h4>  <h5>1.0 Monitoring</h5>  <p> This competency area addresses the ability to independently maintain an ongoing awareness of NPP unit or system conditions, using appropriate MCR devices, control equipment room devices or field reports, either by performing the required checks without reference to operating procedures or by performing the relevant checks not explicitly mentioned in an operating procedure being implemented.</p>  <p> 1.1 (5) monitors CSPs and SPs when necessary (DTS)</p>  <p> 1.2 (4) monitors in a timely manner that major system parameters are trending and stabilize as expected (DTS)</p>  <p> 1.3 (4) monitors annunciations and panel indications, as necessary, to maintain an awareness of changing equipment, system and unit conditions (DTS)</p>  <p> 1.4 (5) checks in a timely manner that MAAs occur and have the desired effect, prior to referring to operating procedures (DTS)</p>  <p> 1.5 (3) checks in a timely manner that operator actions are having or have had the desired effect (DTS)</p>  <p> 1.6 (5) checks relevant system, unit and NPP conditions before approving or initiating an action</p>  <h5>2.0 Actions taken without reference to procedures</h5>  <p> This competency area addresses the ability to direct the execution of the required actions when reference to operating procedures is not expected, when an operating procedure does not exist or prior to accessing the relevant operating procedures following a transient or an abnormal condition.</p>  <p> 2.1 (2) ensures, in a timely manner, the assembly and the deployment of the control room response team</p>  <p> 2.2 (5) directs, in a timely manner, the execution of the required corrective actions when an MAA fails to occur (DTS)</p>  <p> 2.3 (5) directs, in a timely manner, the execution of the required actions, based on diagnosis, prior to accessing the applicable procedures</p>  <p> 2.4 (3) directs the execution of other required actions, as appropriate, when reference to operating procedures is not expected</p>  <p> 2.5 (4) executes, in a timely manner, the actions specifically required of the CRSS when reference to operating procedures is not expected</p>  <p> 2.6 (4) directs, in a timely manner, the execution of the actions required when a transient, an abnormal condition, an additional malfunction, equipment unavailability or any other unit condition is not addressed by procedures</p>  <p> 2.7 (4) initiates, in a timely manner, the appropriate corrective or preventive actions when NPP conditions are such that they could threaten NPP personnel or public safety.</p>  <p> 2.8 (5) directs, in a timely manner, the execution of corrective actions not specified in operating procedures when CSPs or their SPs are deviating unsafely</p>  <h5>3.0 Diagnosis and decision-making</h5>  <p> This competency area addresses the ability to independently recognize abnormalities, to independently diagnose malfunctions, to select the relevant operating procedures and, when no relevant procedure exists, to determine an appropriate course of action.</p>  <p> 3.1 (5) recognizes, in a timely manner, when CSPs or their SPs are deviating unsafely (DTS)</p>  <p> 3.2 (4) recognizes, in a timely manner, when a system parameter, a system configuration or a unit state deviates from an acceptable value, configuration or state defined in operating procedures (DTS and PCTS)</p>  <p> 3.3 (5) recognizes, in a timely manner, when a requirement specified in the OP&amp;Ps is about to be, or may have been violated (DTS and PCTS)</p>  <p> 3.4 (5) identifies, in a timely manner and without procedure, the alarms and indications that characterize the nature of the malfunction and, when applicable, recognizes the entry conditions to the relevant procedure (DTS)</p>  <p> 3.5 (3) identifies, in a timely manner, the applicable procedures, based on diagnosis (DTS and PCTS)</p>  <p> 3.6 (2) with reference to procedures, determines, in a timely manner, the nature of the malfunction or identifies the specific procedures to be used (DTS and PCTS)</p>  <p> 3.7 (2) confirms the diagnosis or confirms that the correct procedure has been selected, using other available information such as NPP documentation or information from the field (DTS)</p>  <p> 3.8 (5) determines, in a timely manner, an appropriate course of actions when procedures do not exist, do not fully address the situation, give conflicting directions or are ineffective (DTS and PCTS)</p>  <p> 3.9 (4) recognizes in a timely manner when concurrent abnormal NPP conditions need to be addressed and assigns priorities to the actions required to address them, taking into account their relative importance (DTS and PCTS)</p>  <p> 3.10 (3) determines the specific cause of a malfunction using all the information available (DTS)</p>  <p> 3.11 (5) determines, in a timely manner, the corrective actions required when CSPs or their SPs are deviating unsafely (DTS)</p>  <p> 3.12 (4) determines the desired end state of the NPP, together with any significant intermediate NPP state, and the time frame to establish the end state, following a transient or an abnormal condition (DTS and PCTS)</p>  <p> 3.13 (5) determines the appropriateness of a request that requires SM approval, based on a review of the relevant system, unit and NPP conditions, constraints and limits, before approving the action</p>  <h5>4.0 Procedural compliance</h5>  <p> This competency area addresses the ability to direct the execution of the required actions and checks using a relevant approved procedure. It also addresses the ability to carry out the actions and checks specifically assigned to the CRSS using a relevant approved procedure.</p>  <p> 4.1 (3) directs the execution of an applicable procedure correctly and in the correct sequence</p>  <p> 4.2 (5) directs the execution of a CSP restoration procedure in a timely manner when required</p>  <p> 4.3 (3) executes each step of an approved procedure specifically assigned to the CRSS, correctly and in the correct sequence</p>
<h5>5.0 Communications and crew interaction skills</h5>  <p> This competency area addresses the ability to communicate with other MCR response team members or crew members clearly and accurately and to interact with them in an efficient and effective manner.</p>  <p> 5.1 (5) gives instructions and approvals in a timely manner to MCR response team members or crew members, as appropriate</p>  <p> 5.2 (3) acknowledges the requests and the information received</p>  <p> 5.3 (5) communicates, in a timely manner, the outcome of a request to its originator</p>  <p> 5.4 (3) communicates, in a timely manner, the required information to MCR response team members or crew members, as appropriate</p>  <p> 5.5 (2) makes the necessary notifications in a timely manner</p>  <p> 5.6 (3) obtains the necessary approvals from NPP management in a timely manner</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="C.4"></div>
<h3 id="app-c-4" className="mrgn-tp-0">C.4 Design of a CTS for the RO examination</h3>  <p>The examination team shall design each  CTS for reactor operator candidates in accordance with the following criteria: </p>  <ol>
<li>define the initial NPP conditions in section 2 of the examiner&#39;s  guide according to the following criteria:
<ol className="list-lower-alpha">
<li>specify the reactor power and generator load of each  reactor unit, the state of the major systems of the various units, the  equipment out of service, the status of fuelling activities and any other  applicable NPP condition, such as routine tests and maintenance activities in  progress</li>
<li>some, but not all, of the equipment out of service may  have an impact on the response expected from the candidates</li>
<li>the selected initial NPP conditions do not violate  requirements in the NPP operating documentation</li>
</ol>
</li>
<li>identify a number of primary malfunctions, classify  each of them in one of the categories defined in subsection 13.4.1   and arrange them in a credible sequence. Select the primary malfunctions, with  their time of occurrence, according to the following criteria:
<ol className="list-lower-alpha">
<li>the estimated CTS dynamic duration does not  significantly exceed 50 minutes</li>
<li>there is a category 2 or category 3 primary malfunction  that requires a complex intervention by the candidates, or there is a category  4 primary malfunction</li>
<li>there is no more than one category 4 primary  malfunction</li>
<li>the total number of category 3 and category 4 primary  malfunctions is not greater than three</li>
<li>there are no more than four primary malfunctions</li>
<li>the upper limits specified in paragraphs (c) to (e) may  be exceeded when one of the selected malfunctions would produce conditions  within the NPP that may cause more malfunctions, based on the NPP&#39;s safety  analyses or on an event that occurred in the nuclear industry and that could  credibly occur at the NPP</li>
<li>select a primary malfunction that results in a degraded  reactor unit condition having a significant impact on the actions of the  candidates in response to a subsequent primary malfunction<div className="module">
<p>Preferably,  the primary malfunctions are sequenced so that there is a gradual deterioration  of unit conditions.</p>  </div></li>  <li>the time allocated between successive primary  malfunctions is such that a typically qualified RO and the support team should  be able to respond as expected to any given primary malfunction before the next  one occurs<div className="module">
<p>primary malfunctions can be  derived by referring to the following documentation: </p>
<ul>
<li>NPP and industry wide significant event reports</li>
<li>operating manuals and operating memos</li>
<li>emergency operating procedures and abnormal  incident manuals</li>
<li>design manuals and other technical basis  documents</li>
<li>NPP safety report</li>
<li>training manuals</li>
<li>list of simulator malfunction options and simulator  training scenarios</li>
</ul>  </div></li>
</ol>
</li>
<li>identify a number of secondary malfunctions associated  with the primary malfunctions and their time of occurrence. Select these  malfunctions according to the following criteria:
<ol className="list-lower-alpha">
<li>each secondary malfunction satisfies the criteria in  subsection 16.3.1</li>
<li>the total number of primary and additional malfunctions  is at least 4</li>
<li>the total number of primary and secondary malfunctions  is not greater than 10</li>
<li>there are no more than five additional malfunctions for  a given primary malfunction</li>
<li>there are no more than three monitoring malfunctions</li>
<li>there is no more than one secondary malfunction causing  a Level 1 or a Level 2 impairment of a special safety system</li>
<li>there are no more than three secondary malfunctions  causing an impairment of a special safety system</li>
<li>there are no more than three secondary malfunctions of  poised standby safety support systems</li>
<li>the upper limits specified in paragraphs (c) to (h) may  be exceeded when one of the selected primary malfunctions would produce  conditions within the NPP that may cause more malfunctions, based on the NPP&#39;s  safety analyses or on an event that occurred in the nuclear industry and that  could credibly occur at the NPP</li>
</ol></li>
<li>to satisfy criterion 7.a of subsection 14.1,  select some combinations of malfunctions and unit conditions that create  situations for which the operating procedures give no specific instructions</li>
<li>to satisfy criterion 7.b  of subsection 14.1,  select challenging concurrent malfunctions or unit conditions that require the  candidates to assign priorities</li>
<li>identify any operating documentation that needs to be  used to respond to the primary and secondary malfunctions, using the frozen  documentation</li>
<li>determine the following conditions that apply to the  participation of the members of the control room support team:
<ol className="list-lower-alpha">
<li>the number of members available and their respective  roles</li>
<li>where each member will be at the start of the CTS</li>
<li>when each member summoned will be instructed to arrive  at the simulated reactor unit</li>
<li>at multi-unit NPPs, whether any certified person on the  support team will be instructed to leave the simulated reactor unit during the  CTS and, if so:
<ol className="list-lower-roman">
<li>when the person will be instructed to leave</li>
<li>when the person will be instructed to return to the  reactor unit, if applicable</li>
</ol>
</li>
</ol>
</li>
<li>define the endpoint of the CTS by specifying the unit  conditions to be reached, a step in a procedure to be performed, or a decision  or action expected of the candidates. The endpoint must be clearly recognizable by the examiners</li>
<li>determine the appropriate response to each primary and secondary  malfunction. Ensure that this response is clear and unique </li>
<li>estimate the overall complexity of the CTS, considering the number of primary and secondary malfunctions and their timing, the impact of the initial NPP conditions on the required response, and the restrictions placed on the availability of the members of the control room support team; ensure that a typically qualified RO
would have sufficient time to respond as expected to each malfunction</li>
<li>ensure that the CTS requires the candidates to demonstrate their skills in all competency areas</li>
<li>identify the system parameters whose evolution will be recorded during the conduct of the examination for subsequent use during grading of the examination; the selection of these parameters is to be based on their sensitivity to the selected malfunctions and to the expected response of a candidate (as a minimum, the evolution of the parameters listed in appendix C.17 must be recorded)</li>
<li>complete a CTS design checklist, as specified in section 14,  to confirm the CTS meets the criteria in the checklist</li>
<li>complete the development of the certification examination in accordance with the requirements in subsection 14.1</li>
<li>develop each examiner&#39;s guide in accordance with the requirements in subsection 14.5</li>  </ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="C.5"></div>
<h3 id="app-c-5" className="mrgn-tp-0">C.5 Design of a CTS for the U0O examination</h3>  <p>The examination team shall design each  CTS for unit 0 operator candidates in accordance with the following criteria:</p>  <ol>
<li>define the initial NPP conditions in section 2 of the examiner&#39;s  guide according to the following criteria:
<ol className="list-lower-alpha">
<li>specify the reactor power and generator load of each  reactor unit, the state of the major systems of the reactor units and of unit  0, the equipment out of service, the status of fuelling activities and any  other applicable NPP condition, such as routine tests and maintenance  activities in progress</li>
<li>some, but not all, of the equipment out of service may  have an impact on the response expected from the candidates</li>
<li>the selected initial NPP conditions do not violate  requirements in the NPP operating documentation</li>
</ol>
</li>
<li>identify a number of primary malfunctions, classify  each of them in one of the categories defined in subsection 13.4.1  and arrange them in a credible sequence; select the primary malfunctions, with  their time of occurrence, according to the following criteria:
<ol className="list-lower-alpha">
<li>the estimated CTS dynamic duration does not  significantly exceed 60 minutes</li>
<li>there is a category 2 primary malfunction of systems  operated by the unit 0 operators that has a potential impact on reactor safety  and that requires a complex intervention by the candidates<br />
or there is a  category 2, category 3 or category 4 primary malfunction on the simulated reactor  unit that requires a complex intervention on the systems operated by unit 0  operators</li>
<li>there is no more than one category 4 primary  malfunction</li>
<li>there are no more than three primary malfunctions that  require a complex intervention by the candidates</li>
<li>there are no more than four primary malfunctions</li>
<li>the upper limits specified in paragraphs (c) to (e) may  be exceeded when one of the selected malfunctions would produce conditions  within the NPP that may cause more malfunctions, based on the NPP&#39;s safety  analyses or on an event that occurred in the nuclear industry and that could  credibly occur at the NPP</li>
<li>select a primary malfunction that results in a degraded  unit 0 condition having a significant impact on the actions of the candidates  in response to a subsequent primary malfunction <div className="module">Preferably,  the primary malfunctions are sequenced so there is a gradual deterioration of  unit conditions.</div></li>
<li>the time allocated between successive primary malfunctions  is such that a typically qualified unit 0 operator and the support team should  be able to respond as expected to any given primary malfunction before the next one occurs<div className="module">
<p>Primary malfunctions can  be derived by referring to the following documentation:</p>
<ul>
<li>NPP and industry-wide significant event reports</li>
<li>operating manuals and operating memos</li>
<li>emergency operating procedures and abnormal  incident manuals</li>
<li>design manuals and other technical basis  documents</li>
<li>NPP safety report</li>
<li>training manuals</li>
<li>list of simulator malfunction options and  simulator training scenarios</li>
</ul>
</div>
</li></ol></li>
<li>identify a number of secondary malfunctions associated  with the primary malfunctions and their time of occurrence. Select these  malfunctions according to the following criteria:
<ol className="list-lower-alpha">
<li>each secondary malfunction satisfies the criteria in  subsection 13.4.2</li>
<li>the total number of primary and additional malfunctions  is at least 4</li>
<li>the total number of primary and secondary malfunctions  is not greater than 10</li>
<li>there are no more than 5 additional malfunctions for a  given primary malfunction</li>
<li>there are no more than 3 monitoring malfunctions</li>
<li>there is no more than one secondary malfunction causing  a Level 1 or a Level 2 impairment of a special safety system</li>
<li>there are no more than 3 secondary malfunctions causing  an impairment of a special safety system</li>
<li>there are no more than 3 secondary malfunctions of  poised standby safety support systems</li>
<li>the upper limits specified in paragraphs (c) to (h) may  be exceeded when one of the selected primary malfunctions would produce  conditions within the NPP that may cause more malfunctions, based on the NPP&#39;s  safety analyses or on an event that occurred in the nuclear industry and that  could credibly occur at the NPP</li>
</ol></li>
<li>to satisfy criterion 6.d  of subsection 14.2,  select some combinations of malfunctions and conditions that create situations  for which the operating procedures give no specific instructions</li>
<li>to satisfy criterion 9  of subsection 14.2,  select challenging concurrent malfunctions or conditions that require the  candidates to assign priorities</li>
<li>identify any operating documentation that needs to be  used to respond to the primary and secondary malfunctions, using the frozen  documentation</li>
<li>determine the following conditions that apply to the  participation of the members of the control room support team:
<ol className="list-lower-alpha">
<li>the number of members available and their respective  roles</li>
<li>where each member will be at the start of the CTS</li>
<li>when each member summoned will be instructed to arrive  at unit 0</li>
<li>whether any certified person on the support team will  be instructed to leave unit 0 during the CTS and, if so:
<ol className="list-lower-roman">
<li>when the person will be instructed to leave</li>
<li>when the person will be instructed to return to unit 0,  if applicable</li>
</ol></li>
</ol></li>
<li>define the endpoint of the CTS by specifying the unit 0  or NPP conditions to be reached, a step in a procedure to be performed, or a  decision or action expected of the candidates. The endpoint must be clearly  recognizable by the examiners</li>
<li>determine the appropriate response to each primary and secondary  malfunction. Ensure that this response is clear and unique </li>
<li>estimate  the overall complexity of the CTS, considering the number of primary and secondary  malfunctions and their timing, the impact of the initial NPP conditions on the  required response, and the restrictions placed on the availability of the  members of the control room support team; ensure that a typically qualified  unit 0 operator would have sufficient time to respond as expected to each  malfunction</li>
<li>ensure  that the CTS requires the candidates to demonstrate their skills in all  competency areas</li>
<li>identify  the system parameters whose evolution will be recorded during the conduct of  the examination for subsequent use during grading of the examination; the  selection of these parameters is to be based on their sensitivity to the  selected malfunctions and to the expected response of a candidate</li>
<li>complete  a CTS design checklist, as specified in section 14,  to confirm that the CTS meets the criteria in the checklist</li>
<li>complete  the development of the certification examination in accordance with the  requirements in subsection 14.2</li>
<li>develop  each examiner&#39;s guide in accordance with the requirements in subsection 14.5</li>
</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="C.6"></div>
<h3 id="app-c-6" className="mrgn-tp-0">C.6 Design of a CTS for the PSS examination</h3>  <p>The examination team shall design each  CTS for plant shift supervisor candidates at single-unit NPPs in accordance  with the following criteria:</p>  <ol>
<li>define the initial NPP conditions in section 2 of the examiner&#39;s  guide according to the following criteria:
<ol>
<li>specify the reactor power, the generator load, the  state of major NPP systems, the equipment out of service, the status of  fuelling activities and any other applicable NPP condition, such as routine  tests and maintenance activities in progress</li>
<li>some, but not all, of the equipment out of service may  have an impact on the response expected from the candidates</li>
<li>the selected initial NPP conditions do not violate  requirements in the NPP operating documentation</li>
</ol>
</li>
<li>identify a number of primary malfunctions, other than  category 1 primary malfunctions, classify each of them in one of the categories  defined in subsection 13.4.1  and arrange them in a credible sequence; select the primary malfunctions, with  their time of occurrence, according to the following criteria:
<ol>
<li>the estimated CTS dynamic duration does not  significantly exceed 50 minutes</li>
<li>there is a category 2 or category 3 primary malfunction  that requires a complex intervention by the candidates, or there is a category  4 primary malfunction</li>
<li>there is no more than one category 4 primary  malfunction</li>
<li>the total number of category 3 and category 4 primary  malfunctions is not greater than three</li>
<li>there are no more than four primary malfunctions</li>
<li>the upper limits specified in paragraphs (c) to (e) may  be exceeded when one of the selected malfunctions would produce conditions  within the NPP that may cause more malfunctions, based on the NPP&#39;s safety  analyses or on an event that occurred in the nuclear industry and that could  credibly occur at the NPP</li>
<li>select a primary malfunction that results in a degraded  NPP condition having a significant impact on the actions of the candidates in  response to a subsequent primary malfunction<div className="module">
<p>Preferably,  the primary malfunctions are sequenced so there is a gradual deterioration of  NPP conditions.</p>  </div></li>  <li>the time allocated between successive primary  malfunctions is such that a typically qualified PSS and the support team should  be able to respond as expected to any given primary malfunction before the next  one occurs<div className="module">
<p>Primary malfunctions can be derived by referring to the following documentation:</p>
<ul>
<li>NPP and industry-wide significant event reports</li>
<li>operating manuals and operating memos</li>
<li>emergency operating procedures and abnormal  incident manuals</li>
<li>design manuals and other technical basis documents</li>
<li>NPP safety report</li>
<li>training manuals</li>
<li>list of simulator malfunction options and simulator training scenarios</li>
</ul>  </div></li>
</ol>
</li>
<li>identify a number of secondary malfunctions associated  with the primary malfunctions and their time of occurrence; select these  malfunctions according to the following criteria:
<ol className="list-lower-alpha">
<li>each secondary malfunction satisfies the criteria in  subsection 13.4.2</li>
<li>the total number of primary and additional malfunctions  is at least 4</li>
<li>the total number of primary and secondary malfunctions  is not greater than 10</li>
<li>there are no more than 5 additional malfunctions for a  given primary malfunction</li>
<li>there are no more than 3 monitoring malfunctions</li>
<li>there is no more than one secondary malfunction causing  a Level 1 or a Level 2 impairment of a special safety system</li>
<li>there are no more than 3 secondary malfunctions causing  an impairment of a special safety system</li>
<li>there are no more than 3 secondary malfunctions of  poised standby safety support systems</li>
<li>the upper limits specified in paragraphs (c) to (h) may  be exceeded when one of the selected primary malfunctions would produce  conditions within the NPP that may cause more malfunctions, based on the NPP&#39;s  safety analyses or on an event that occurred in the nuclear industry and that  could credibly occur at the NPP</li>
</ol></li>
<li>select malfunctions that, under the defined initial NPP  conditions, create abnormal situations that would be referred to the PSS for resolution, such as malfunctions that cause impairments of special safety systems or standby safety support systems, a requirement in the OP&amp;Ps that is not met, or problems related to the control of reactor power, cooling of the fuel or containment of radioactivity</li>
<li>select challenging concurrent malfunctions or NPP conditions that require the candidates to assign priorities to the actions required to address them</li>
<li>to satisfy criterion 10 of subsection 14.3, select some combinations of malfunctions and NPP conditions that create situations for which the operating procedures give no specific instructions</li>
<li>identify any operating documentation that needs to be used to respond to the primary and secondary malfunctions, using the frozen  documentation</li>
<li>determine the following conditions that apply to the  participation of the members of the control room support team:
<ul className="list-lower-alpha">
<li>the number of members available and their respective roles</li>
<li>where each member will be at the start of the CTS</li>
<li>when each member summoned will be instructed to arrive in the control room</li>
</ul></li>
<li>define the endpoint of the CTS by specifying the NPP conditions to be reached, a step in a procedure to be performed, or a decision or instruction expected of the candidates; the endpoint must be clearly  recognizable by the examiners</li>
<li>determine the appropriate response to each primary and secondary malfunction; ensure that this response is clear and unique </li>
<li>estimate the overall complexity of the CTS, considering the number of primary and secondary  malfunctions and their timing, the impact of the initial NPP conditions on the  required response, and the restrictions placed on the availability of the  members of the control room support team; ensure that a typically qualified PSS  would have sufficient time to respond as expected to each malfunction</li>
<li>ensure that the CTS requires the candidates to demonstrate their skills in all competency areas</li>
<li>identify the system parameters whose evolution will be recorded during the conduct of the examination for subsequent use during grading of the examination; the selection of these parameters is to be based on their sensitivity to the selected malfunctions and to the expected response of a candidate (as a minimum, the evolution of the parameters listed in appendix&nbsp;C.17 must be recorded)</li>
<li>complete a CTS design checklist, as specified in section 14,  to confirm that the CTS meets the criteria in the checklist</li>
<li>complete the development of the certification examination in accordance with the requirements in subsection 14.3</li>
<li>develop each examiner&#39;s guide in accordance with the requirements in subsection 14.5</li>  </ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="C.7"></div>
<h3 id="app-c-7" className="mrgn-tp-0">C.7 Design of an ATS for the PSS examination</h3>  <p>The examination team shall design each  ATS for plant shift supervisor candidates at single-unit NPPs in accordance  with the following criteria: </p>  <ol>  <li>define the initial NPP conditions in section 2 of the examiner&#39;s  guide according to criteria 1 of appendix&nbsp;C.6</li>  <li>identify a number of primary malfunctions, other than  category 1 primary malfunctions, classify each of them in one of the categories  defined in subsection  13.4.1  and arrange them in a credible sequence; select the primary malfunctions, with  their time of occurrence, according to the following criteria:
<ol className="list-lower-alpha">
<li>the estimated ATS dynamic duration does not  significantly exceed 25 minutes.</li>
<li>there is a category 2 or category 3 primary malfunction  that requires a complex intervention by the candidates, or there is a category  4 primary malfunction</li>
<li>there is no more than one category 4 primary  malfunction</li>
<li>there are no more than two primary malfunctions</li>
<li>the upper limits specified in paragraphs (c) and (d)  may be exceeded when one of the selected malfunctions would produce conditions  within the NPP that may cause more malfunctions, based on the NPP safety  analyses or on an event that occurred in the nuclear industry and that could  credibly occur at the NPP</li>
<li>select a primary malfunction that results in a degraded  NPP condition having a significant impact on the actions of the candidates in  response to a subsequent primary malfunction</li>
<li>there is a category 3 or category 4 primary malfunction  or there are at least 3 secondary malfunctions of which at least two are  additional malfunctions since the ATS does not include a category 3 or a  category 4 primary malfunction</li>
<li>when applicable, the time allocated between successive primary  malfunctions is such that a typically qualified PSS and the support team should  be able to respond as expected to a given primary malfunction before the next  one occurs
<div className="module"> A  primary malfunction can be derived by referring to the following documentation:
<ul>
<li>NPP and industry-wide significant event reports</li>
<li>operating manuals and operating memos</li>
<li>emergency operating procedures and abnormal  incident manuals</li>
<li>design manuals and other technical basis  documents</li>
<li>NPP safety report</li>
<li>training manuals</li>
<li>list of simulator malfunction options and  simulator training scenarios </li>
</ul>
</div>
</li>
</ol>  </li>  <li>identify a number of secondary malfunctions associated  with the primary malfunctions and their time of occurrence; select these  malfunctions according to the following criteria:
<ol className="list-lower-alpha">
<li>each secondary malfunction satisfies the criteria in  subsection 13.4.2</li>
<li>the total number of primary and additional malfunctions  is at least 2</li>
<li>there are at least 3 secondary malfunctions of which at  least two are additional malfunctions, whenever the ATS does not include a  category 3 or a category 4 primary malfunction</li>
<li>the total number of primary and secondary malfunctions  is not greater than five</li>
<li>there are no more than 3 additional malfunctions</li>
<li>there are no more than 2 monitoring malfunctions</li>
<li>there is no more than one secondary malfunction causing  a Level 1 or a Level 2 impairment of a special safety system</li>
<li>there is no more than 3 secondary malfunctions causing  an impairment of a special safety system</li>
<li>there are no more than 2 secondary malfunctions of  poised standby safety support systems</li>
<li>the upper limits specified in paragraphs (d) to (i) may  be exceeded when one of the selected primary malfunctions would produce  conditions within the NPP that may cause more malfunctions, based on the NPP&#39;s  safety analyses or on an event that occurred in the nuclear industry and that  could credibly occur at the NPP</li>
<li>the secondary malfunctions only affect indicators,  equipment, components or control devices that the candidates are expected to  check during the ATS dynamic duration</li>
<li>the number and the nature of the secondary malfunctions  are such that a typically qualified shift manager can respond as expected to  these malfunctions within the ATS dynamic duration</li>
</ol>  </li>  <li>select malfunctions that, under the defined initial NPP  conditions, create abnormal situations that would be referred to the PSS for  resolution, such as malfunctions that cause impairments of special safety  systems or standby safety support systems, a requirement in the OP&amp;Ps that  is not met, or problems related to the control of reactor power, cooling of the  fuel or containment of radioactivity</li>  <li>to satisfy criterion 10.a of subsection 14.3,  select some combinations of malfunctions and NPP conditions that create  situations for which the operating procedures give no specific instructions</li>  <li>to satisfy criterion 9 of subsection 14.3,  select challenging concurrent malfunctions or NPP conditions that require the  candidates to assign priorities</li>  <li>identify any operating documentation that needs to be  used to respond to the primary and secondary malfunctions, using the frozen  documentation</li>  <li>determine the following conditions that apply to the  participation of the members of the control room support team:  <ol className="list-lower-alpha">
<li>the number of members available and their respective  roles</li>
<li>where each member will be at the start of the ATS</li>
<li>when each member summoned will be instructed to arrive  in the control room</li>  </ol></li>  <li>define the endpoint of the ATS by specifying the NPP  conditions to be reached, a step in a procedure to be performed, or a decision  or instruction expected of the candidates; the endpoint must be clearly  recognizable by the examiners</li>  <li>determine  the appropriate response to each primary and secondary malfunction. Ensure that  this response is clear and unique </li>  <li>estimate  the overall complexity of the ATS, considering the number of primary and secondary  malfunctions and their timing as well as the impact of the initial NPP  conditions on the required response; ensure that a typically qualified PSS  would have sufficient time to respond as expected to each malfunction</li>  <li>identify  the system parameters whose evolution will be recorded during the conduct of  the examination for subsequent use during grading of the examination; the selection  of these parameters is to be based on their sensitivity to the selected  malfunctions and to the expected response of a candidate (as a minimum, the  evolution of the parameters listed in appendix C.17  must be recorded)</li>  <li>complete  an ATS design checklist, as specified in section 14,  to confirm that the ATS meets the criteria in the checklist</li>  <li>complete  the development of the certification examination in accordance with the  requirements in subsection 14.3</li>  <li>develop  each examiner&#39;s guide in accordance with the requirements in subsection 14.5</li>  </ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="C.8"></div>
<h3 id="app-c-8" className="mrgn-tp-0">C.8 Design of a CTS for the CRSS examination</h3>  <p>The examination team shall design each  CTS for control room shift supervisor candidates at multi-unit NPPs in  accordance with the following criteria:</p>  <ol>
<li>define the initial NPP conditions in section 2 of the examiner&#39;s  guide according to the following criteria:
<ol className="list-lower-alpha">
<li>specify the reactor power and generator load of each  reactor unit, the state of the major systems of the various units, the  equipment out of service, the status of fuelling activities and any other  applicable NPP condition, such as routine tests and maintenance activities in  progress</li>
<li>some, but not all, of the equipment out of service may  have an impact on the response expected from the candidates</li>
<li>the selected initial NPP conditions do not violate  requirements in the NPP operating documentation</li>
</ol>
</li>
<li>identify a number of primary malfunctions, other than  category 1 primary malfunctions, classify each of them in one of the categories  defined in subsection 13.4.1and  arrange them in a credible sequence; select the primary malfunctions, with  their time of occurrence, according to the following criteria:
<ol className="list-lower-alpha">
<li>the estimated CTS dynamic duration does not  significantly exceed 50 minutes</li>
<li>there is a category 2 or category 3 primary malfunction  that requires a complex intervention by the candidates, or there is a category  4 primary malfunction</li>
<li>there is no more than one category 4 primary  malfunction</li>
<li>the total number of category 3 and category 4 primary  malfunctions is not greater than three</li>
<li>there are no more than four primary malfunctions</li>
<li>the upper limits specified in paragraphs (c) to (e) may  be exceeded when one of the selected malfunctions would produce conditions  within the NPP that may cause more malfunctions, based on the NPP&#39;s safety  analyses or on an event that occurred in the nuclear industry and that could  credibly occur at the NPP</li>
<li>select a primary malfunction that results in a degraded  NPP condition having a significant impact on the actions of the candidates in  response to a subsequent primary malfunction<div className="module">  <p>Preferably,  the primary malfunctions are sequenced so there is a gradual deterioration of  NPP conditions.</p>  </div></li>  <li>the time allocated between successive primary  malfunctions is such that a typically qualified CRSS and the support team  should be able to respond as expected to any given primary malfunction before  the next one occurs<div className="module">
<ul>
<li>Primary malfunctions can be derived by referring to the following  documentation:</li>
<li>NPP  and industry-wide significant event reports</li>
<li>operating  manuals and operating memos</li>
<li>emergency  operating procedures and abnormal incident manuals</li>
<li>design  manuals and other technical basis documents</li>
<li>NPP  safety report</li>
<li>training  manuals</li>
</ul>  </div></li>
</ol>
</li>
<li>identify a number of secondary malfunctions associated  with the primary malfunctions and their time of occurrence; select these  malfunctions according to the following criteria:
<ol className="list-lower-alpha">
<li>each secondary malfunction satisfies the criteria in  subsection 13.4.2</li>
<li>the total number of primary and additional malfunctions  is at least 4</li>
<li>the total number of primary and secondary malfunctions  is not greater than 10</li>
<li>there are no more than 5 additional malfunctions for a  given primary malfunction</li>
<li>there are no more than 3 monitoring malfunctions</li>
<li>there is no more than one secondary malfunction causing  a Level 1 or a Level 2 impairment of a special safety system</li>
<li>there are no more than 3 secondary malfunctions causing  an impairment of a special safety system</li>
<li>there are no more than 3 secondary malfunctions of  poised standby safety support systems</li>
<li>the upper limits specified in paragraphs c to h may be  exceeded when one of the selected primary malfunctions would produce conditions  within the NPP that may cause more malfunctions, based on the NPP&#39;s safety  analyses or on an event that occurred in the nuclear industry and that could  credibly occur at the NPP</li>
</ol>
</li>
<li>select malfunctions that, under the defined  initial NPP conditions, create abnormal situations that would be referred to  the CRSS for resolution, such as malfunctions that cause impairments of special  safety systems or standby safety support systems, a requirement in the  OP&amp;Ps that is not met, or problems related to the control of reactor power,  cooling of the fuel or containment of radioactivity</li>
<li>select challenging concurrent malfunctions  or NPP conditions that require the candidates to assign priorities to the  actions required to address them</li>
<li>to satisfy criterion 12 of subsection 14.4, select some combinations of malfunctions  and NPP conditions that create situations for which the operating procedures  give no specific instructions</li>
<li>identify any operating documentation that  needs to be used to respond to the primary and secondary malfunctions, using  the frozen documentation</li>
<li>determine the following conditions that  apply to the participation of the members of the control room support team:
<ol className="list-lower-alpha">
<li>the number of members available and their  respective roles</li>
<li>where each member will be at the start of the  CTS</li>
<li>when each member summoned will be instructed  to arrive at the simulated reactor unit or at unit 0</li>
<li>whether any certified individual on the support team  will be instructed to leave the simulated reactor unit or unit 0 during the CTS  and, if so:
<ol className="list-lower-roman">
<li>when the individual will be instructed to leave</li>
<li>when the individual will be instructed to return to the  relevant unit, if applicable</li>
</ol>
</li>
</ol>
</li>
<li>for the CTS during which the candidates  have to direct in detail the execution of a complex sequence of operator  actions to satisfy criterion 9 of subsection 14.4, determine the particular sequence of  actions that the candidates have to direct</li>
<li>define the endpoint of the CTS by  specifying the NPP conditions to be reached, a step in a procedure to be  performed, or a decision or instruction expected of the candidates. The  endpoint must be clearly recognizable by the examiners</li>
<li>determine the appropriate response to each primary  and secondary malfunction. Ensure that this response is clear and unique </li>
<li>estimate the overall complexity of the CTS,  considering the number of primary and secondary malfunctions and their timing,  the impact of the initial NPP conditions on the required response, and the  restrictions placed on the availability of the members of the control room  support team; ensure that a typically qualified CRSS would have sufficient time  to respond as expected to each malfunction</li>
<li>ensure that the CTS requires the candidates  to demonstrate their skills in all competency areas</li>
<li>identify the system parameters whose  evolution will be recorded during the conduct of the examination for subsequent  use during grading of the examination; the selection of these parameters is to  be based on their sensitivity to the selected malfunctions and to the expected  response of a candidate (as a minimum, the evolution of the parameters listed  in appendix&nbsp;C.17 must be recorded)</li>
<li>complete a CTS design checklist, as  specified in section 14, to confirm that the CTS meets the  criteria in the checklist</li>
<li>complete the development of the  certification examination in accordance with the requirements in subsection 14.4 </li>
<li>develop each examiner&#39;s guide in accordance  with the requirements in subsection 14.5 </li>  </ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="C.9"></div>
<h3 id="app-c-9" className="mrgn-tp-0">C.9 Design of a DTS for the CRSS examination</h3>  <p>The examination team shall design each  DTS for control room shift supervisor candidates at multi-unit NPPs in  accordance with the following criteria:</p>  <ol>
<li>define the initial NPP conditions in section 2 of the examiner&#39;s  guide according to the following criteria:
<ol className="list-lower-alpha">
<li>specify the reactor power and generator load of each  reactor unit, the state of the major systems of the various units, the  equipment out of service, the status of fuelling activities and any other  applicable NPP condition, such as routine tests and maintenance activities in  progress</li>
<li>some, but not all, of the equipment out of service may  have an impact on the diagnosis expected or on the course of actions to be  taken</li>
<li>the selected initial NPP conditions do not violate  requirements in the NPP operating documentation</li>
</ol>
</li>
<li>select primary and secondary malfunctions that, under  the defined initial NPP conditions, create abnormal NPP conditions for which  there is at least one significant concern regarding one or more of the  following:
<ol className="list-lower-alpha">
<li>control of reactor power</li>
<li>cooling of the fuel</li>
<li>containment of radioactivity</li>
<li>impairment of special safety systems</li>
<li>impairment of standby safety support systems</li>
<li>compliance with OP&amp;Ps</li>
<li>safe operation of NPP systems and equipment</li>
<li>safety of NPP personnel</li>
<li>protection of the environment</li>
</ol>
</li>
<li>select one primary malfunction  according to the following criteria:
<ol className="list-lower-alpha">
<li>the estimated DTS dynamic duration does not  significantly exceed 15 minutes</li>
<li>the primary malfunction is a category 2, category 3 or  category 4 primary malfunction that, under the defined initial NPP conditions,  requires a sufficiently complex analysis of the available information to make  the correct diagnosis and to determine the appropriate course of actions</li>
<li>the primary malfunction does not create abnormal NPP  conditions that would require prompt implementation of more than two complex  procedures or courses of actions</li>
<li>if the primary malfunction were to occur at the NPP,  sufficient information would be available within the DTS dynamic duration to  make the correct diagnosis
<div className="module">
<ul>
<li>Primary malfunctions can be derived by referring to  the following documentation:</li>
<li>NPP  and industry-wide significant event reports</li>
<li>operating  manuals and operating memos</li>
<li>emergency  operating procedures and abnormal incident manuals</li>
<li>design  manuals and other technical basis documents</li>
<li>NPP  safety report</li>
<li>training  manuals</li>
<li>list  of simulator malfunction options and simulator training scenarios</li>
</ul>
</div>
</li>
</ol>
</li>
<li>define the specific diagnosis that the  candidates are expected to make and determine the control room and field  information required to make this diagnosis</li>
<li>identify a number of secondary malfunctions  associated with the primary malfunction and their time of occurrence; select  these malfunctions according to the following criteria:
<ol className="list-lower-alpha">
<li>each secondary malfunction satisfies the  criteria in subsection 13.4.2 </li>
<li>there is at least 1 secondary malfunction</li>
<li>there are no more than 4 secondary  malfunctions</li>
<li>there is no more than one secondary  malfunction causing a Level 1 or a Level 2 impairment of a special safety  system</li>
<li>there are no more than 3 secondary  malfunctions causing an impairment of a special safety system</li>
<li>there are no more than 3 secondary  malfunctions of poised standby safety support systems</li>
<li>the secondary malfunctions only affect  indicators, equipment, components or control devices that the candidates are  expected to check during the DTS dynamic duration</li>
<li>the number and the nature of the secondary  malfunctions are such that a typically qualified CRSS would be able to respond  as expected to these malfunctions and to formulate the correct diagnosis within  the DTS dynamic duration</li>
</ol>
</li>
<li>to satisfy criterion 12 of subsection 14.4, select some combinations of malfunctions  and NPP conditions that create situations for which the operating procedures  give no specific instructions</li>
<li>to satisfy criterion 10 of subsection 14.4, select challenging concurrent abnormal NPP  conditions that require the candidates to assign priorities</li>
<li>identify any operating documentation that  needs to be used to respond to the primary and secondary malfunctions, using  the frozen documentation</li>
<li>estimate the time that will be given to the  candidates to make the correct diagnosis, based on the performance expectations  of the NPP for the CRSS position; this time defines the endpoint of the dynamic  portion of the DTS when the simulator is frozen and questioning of the  candidates begins</li>
<li>determine the appropriate course of actions  to respond to the selected malfunctions
<ol className="list-lower-alpha">
<li>ensure that this course of actions is clear </li>
<li>ensure that any appropriate course of actions  to respond to a failure of a major automatic action prior to diagnosing the primary  malfunction does not have an impact on unit conditions that would prevent, or  excessively interfere with, making the correct diagnosis </li>
</ol>
</li>
<li>identify the significant concerns associated  with the NPP conditions existing at the end of the DTS and arrange them in the  categories listed in paragraph 2 above</li>
<li>estimate  the overall complexity of the DTS, considering the number of malfunctions and  their timing as well as the impact of the initial NPP conditions on the  required response; ensure that a typically qualified CRSS would have sufficient  information and time to respond as expected to the secondary malfunctions and  to make the correct diagnosis within the DTS dynamic duration</li>
<li>identify  the system parameters whose evolution will be recorded during the conduct of  the examination for subsequent use during grading of the examination; the  selection of these parameters must be based on their sensitivity to the  selected malfunctions and to the expected response of a candidate (as a  minimum, the evolution of the parameters listed in appendix&nbsp;C.17  must be recorded)</li>
<li>complete  a DTS design checklist, as specified in section 14,  to confirm that the DTS meets the criteria in the checklist</li>
<li>complete  the development of the certification examination in accordance with the  requirements in subsection 14.4</li>
<li> develop each examiner&#39;s guide in accordance with  the requirements in subsection 14.5 </li>  </ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="C.10"></div>
<h3 id="app-c-10" className="mrgn-tp-0">C.10 Design of a PCTS for the CRSS examination</h3>  <p>The examination team shall design the  PCTS for control room shift supervisor candidates at multi-unit NPPs in  accordance with the following criteria:</p>  <ol>
<li>define the initial NPP conditions in section 2 of the examiner&#39;s  guide according to the following criteria:
<ol className="list-lower-alpha">
<li>initial conditions include reactor power and generator  load of each reactor unit, the state of the major systems of the various units,  the equipment out of service, the status of fuelling activities and any other  applicable NPP condition, such as routine tests and maintenance activities in  progress</li>
<li>some, but not all, of the equipment out of service may  have an impact on the significance of the panel anomalies or on the course of  actions to be taken</li>
<li>the selected equipment out of service does not create  conditions that violate requirements in the NPP operating documentation</li>
</ol>
</li>
<li>identify a verification task to be performed by the  candidates and a number of panel anomalies associated with the task. Select the  task and the panel anomalies according to the following criteria:
<ol className="list-lower-alpha">
<li>the duration of the selected task does not  significantly exceed 15 minutes</li>
<li>the task is related to the responsibilities of the CRSS  such as an independent verification of system operating configurations and unit  state; verification of system, unit and NPP conditions before granting an  approval; verification of available heat sinks</li>
<li>there are at least 3 panel anomalies that indicate  abnormal situations that would be referred to the CRSS for resolution, such as  abnormal system configurations, impairments of special safety systems or of  standby safety support systems, a violation of a requirement in the OP&amp;Ps,  or problems related to the control of reactor power, cooling of the fuel or  containment of radioactivity</li>
<li>there are no more than 10 panel anomalies</li>
<li>the panel anomalies can be detected from the control  room panels during the execution of the verification task</li>
<li>to satisfy criterion 12  of subsection 14.4,  select some panel anomalies that represent situations for which the operating  procedures give no specific instructions</li>
<li>a typically qualified CRSS would be able to complete  the selected task within the time available<div className="module">
<ul>
<li>The  verification task and the panel anomalies can be derived by referring to the  following documentation:</li>
<li>NPP and industry-wide significant event reports</li>
<li>operating manuals and operating memos</li>
<li>emergency operating procedures and abnormal  incident manuals</li>
<li>design manuals and other technical basis  documents</li>
<li>NPP safety report</li>
<li>training manuals</li>
<li>list of simulator malfunction options and  simulator training scenarios</li>
</ul>  </div></li>
</ol>
</li>
<li>identify the control room indications associated with  each panel anomaly and any field information required to assess the  corresponding abnormal condition</li>
<li>identify any operating documentation that needs to be  used to perform the verification task, and to identify the existing panel  anomalies and to address them, using the frozen documentation</li>
<li>determine the appropriate course of actions to address  each panel anomaly; ensure that this course of actions is clear </li>
<li>determine the time that will be given to the candidates  to review and perform the verification task; also determine the time that will  be given to the candidates to assess the significance of the panel anomalies  and to decide on the course of actions to address them, based on the  performance expectations of the NPP for the CRSS position</li>
<li>estimate the overall complexity of the PCTS,  considering the number of panel anomalies as well as the difficulty of  determining their significance and the course of actions to address them; ensure  that a typically qualified CRSS would have sufficient time to complete the  verification task and to decide how to address the panel anomalies as expected</li>
<li>complete a PCTS design checklist, as specified in  section 14,  to confirm that the PCTS meets the criteria in the checklist</li>
<li>complete the development of the certification  examination in accordance with the requirements in subsection 14.4</li>
<li>develop  each examiner&#39;s guide in accordance with the requirements in subsection 14.5</li>  </ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="C.11"></div>
<h3 id="app-c-11" className="mrgn-tp-0">C.11 Cover page for a performance-based examiner&#39;s guide</h3>  <h4>Examiner&#39;s guide</h4>  <p>NPP:<br />
Examination  date:<br />
Test scenario title:<br />
Test scenario type:<br />  Test scenario no.:</p>  <p>Estimated duration:<br />  Actual  duration:</p>  <p>Candidate&#39;s full  name:<br />  Candidate&#39;s position:</p>  <p>Examination team  members: [Print names]</p>
<div className="col-md-3 ">Approved for conduct by:</div>
<div className="col-md-3">________________________<br />[Print name and signature]<br />Training manager</div>
<div className="col-md-3 ">_________<br />Date</div>  </div>  <div className="clear"></div>
<div className="col-md-3 ">Lead examiner:</div>
<div className="col-md-3">________________________<br />[Print name and signature]</div>
<div className="col-md-3 ">_________<br />Date</div>  </div>  <div className="clear"></div>
<div className="col-md-3 ">Examiner(s):</div>
<div className="col-md-3">________________________<br />[Print name and signature]</div>
<div className="col-md-3 ">_________<br />Date</div>  </div>  <div className="clear"></div>
<div className="col-md-3 ">Authorized by:</div>
<div className="col-md-3">________________________<br />[Print name and signature]<br />Training manager</div>
<div className="col-md-3 ">_________<br />Date</div>  </div>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="C.12"></div>
<h3 id="app-c-12" className="mrgn-tp-0">C.12 Examiner&#39;s guide section 1 - Test scenario summary</h3>  <p>A sample format of section 1 of an examiner&#39;s  guide with the type of information required for each test scenario CTS, ATS and  DTS. The sample format of section 1 for test scenario PCTS follows.</p>  <h4>Section 1 - Test scenario summary</h4>  <h5>Part A</h5>  <p>a) Detailed description of the scenario<br />  _______________________________________________________________________<br />  _______________________________________________________________________<br />  _______________________________________________________________________<br />  _______________________________________________________________________</p>  <div className="col-md-12 mrgn-bttm-0 mrgn-tp-0">
<div className="col-md-3 ">b) Primary malfunctions/category<br />___________________________________<br />___________________________________<br />___________________________________<br />___________________________________</div>
<div className="span-3 ">Procedures to be used with revision number<br />___________________________________<br />___________________________________<br />___________________________________<br />___________________________________</div>  </div>
<div className="clear"></div>  <div className="col-md-12 mrgn-bttm-0 mrgn-tp-0">
<div className="col-md-3 ">c) Additional malfunctions<br />___________________________________<br />___________________________________<br />___________________________________<br />___________________________________</div>
<div className="span-3 ">Procedures to be used with revision number<br />___________________________________<br />___________________________________<br />___________________________________<br />___________________________________</div>  </div>
<div className="clear"></div>  <div className="col-md-12 mrgn-bttm-0 mrgn-tp-0">
<div className="col-md-3 ">d) Monitoring malfunctions<br />___________________________________<br />___________________________________<br />___________________________________<br />___________________________________</div>
<div className="span-3 ">Impact on the candidate or NPP evolution<br />___________________________________<br />___________________________________<br />___________________________________<br />___________________________________</div>  </div>
<div className="clear"></div>  <div className="col-md-12 mrgn-bttm-0 mrgn-tp-0">
<div className="col-md-3 ">e) Equipment out of service<br />___________________________________<br />___________________________________<br />___________________________________<br />___________________________________</div>
<div className="span-3 ">Impact on the candidate or NPP evolution<br />___________________________________<br />___________________________________<br />___________________________________<br />___________________________________</div>  </div>  <div className="clear"></div>  <h5 className="mrgn-tp-0">Part B</h5>  <p>System parameters to  be recorded during the conduct of the examination<br />  _______________________________________________________________________<br />  _______________________________________________________________________<br />  _______________________________________________________________________<br />  _______________________________________________________________________</p>
<h5>Part C</h5>
<p>Minor adjustments made  during conduct of the examination and reasons  _______________________________________________________________________<br />  _______________________________________________________________________<br />  _______________________________________________________________________<br />  _______________________________________________________________________</p>  <h4>Section 1 - Test scenario summary for a PCTS</h4>  <p>A sample format of section 1 of an examiner&#39;s  guide with the type of information required for test scenario PCTS.</p>  <h5>Part A</h5>  <p>a) Detailed description of the verification task to be performed<br />  _______________________________________________________________________<br />  _______________________________________________________________________<br />  _______________________________________________________________________<br />  _______________________________________________________________________</p>  <div className="col-md-12 mrgn-bttm-0 mrgn-tp-0">
<div className="col-md-3 ">b) Panel anomalies to be identified<br />___________________________________<br />___________________________________<br />___________________________________<br />___________________________________</div>
<div className="span-3 ">Impact<br />___________________________________<br />___________________________________<br />___________________________________<br />___________________________________</div>  </div>  <div className="clear"></div>  <h5 className="mrgn-tp-0">Part B</h5>  <div className="col-md-12 mrgn-bttm-0 mrgn-tp-0">
<div className="col-md-3 ">Minor adjustments made during conduct<br />___________________________________<br />___________________________________<br />___________________________________<br />___________________________________</div>
<div className="span-3 ">Reasons<br />___________________________________<br />___________________________________<br />___________________________________<br />___________________________________</div>  </div>  <div className="clear"></div>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="C.13"></div>
<h3 id="app-c-13" className="mrgn-tp-0">C.13 Examiner&#39;s guide section 3 - Candidate action checklist</h3>  <p>A sample format of section 3 of an examiner&#39;s  guide for each test scenario CTS, ATS and DTS with the required check boxes and  type of information. During the conduct of the test scenario, the boxes are  only check marked if the candidate performs that activity or expectation.</p>  <h4>Section 3 - Candidate action checklist</h4>  <h5>Part A: Partial checklist before assessment</h5>  <p className="text-right">START  TIME: ____:____</p>  <div className="module">  <p>Lead examiner instructions to the simulator driver.......<br />
Simulator driver initiates lesson plan #, step# .......<br />  Brief description of the first malfunction introduced:......</p>  </div>  <p>Window: Alarm #s Alarm descriptions<br />
Annunciation: AN-#S Annunciation descriptions<br />  </p>  <p>Step GPE Expected candidate actions</p>  <p>Responds to first malfunction:</p>  <ul>
<li>1) (2.9) [ ] Acknowledges and resets the annunciations.</li>
<li>2) (1.3) [  ] Checks...... via display / test CRTs or via ..... SDS1 monitor computer.</li>
<li>3) (3.2) [ ] Recognizes......</li>
<li>6) (3.5) [ ] References  procedure # .....</li>
<li>8) (4.1) [ ] Checks cover sheet for operating memos.</li>
<li>9) (4.1) [ ] Checks.....</li>
<li>10) (5.1) [ ] Requests information from field operations.....</li>  </ul>  <p>Role player instructions, feedback, etc.....</p>  <ul>
<li>11) (5.2) [ ] Acknowledges information from field operations.....</li>
<li>12) (3.2) [ ] Recognizes.....</li>
<li>13) (4.1) [ ] Executes.....</li>  </ul>  <div className="module">  <p>Lead examiner instructions to the simulator driver<br />  Simulator driver initiates step# .....<br />  Brief description of the nth malfunction introduced: .....</p>  </div>  <p>Window: Alarm  #s Alarm descriptions<br />  Annunciation: AN-#s Annunciation descriptions</p>  <p>Responds to nth malfunction</p>  <ul>
<li>26) (#.#) [  ] Candidate action ...</li>
<li>27) (#.#) [  ] Candidate action ...</li>
<li>28) (#.#) [  ] Candidate action ...</li>
<li>X)</li>
<li>X)</li>
<li>X)</li>
<li>n) (#.#) [  ] .....</li>  </ul>  <p className="text-right">Record end time: ____:____</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="C.14"></div>
<h3 id="app-c-14" className="mrgn-tp-0">C.14 Rules of conduct and  instructions for the support team for test scenarios: CTS, ATS, DTS and PCTS</h3>  <p>This appendix contains the minimum  requirements licensees shall use in the preparation of the rules of conduct and  the instructions for the support team members for the rehearsal and the conduct  of the test scenarios.</p>  <h4>Part A: Rules of conduct </h4>  <ol>
<li>the support team members shall play the role of the  control room operating crew or field operators, as prescribed in the examiner&#39;s  guides</li>
<li>support team members shall remain in the control room  during the conduct of any test scenario unless otherwise specified by the lead  examiner or by the instructions of the examiner&#39;s guides</li>
<li>the simulator operator shall operate the simulator, as  prescribed in the examiner&#39;s guides</li>
<li>the simulator operator must not enter any malfunction  or alarm not specified in the examiner&#39;s guides without the prior approval of  the lead examiner</li>
<li>support team members shall not remove any material  related to the examination from the control room at the simulator; All copies  of documents used by the candidates and the data collected during the  examination shall be controlled</li>
<li>support team members shall only perform the activities  and communicate to the candidate the information specified by the instructions  of the examiner&#39;s guides, unless otherwise necessary to respond to additional  specific requests made by the candidate or unless directed by the lead examiner</li>
<li>support team members must ask for clarification if any  request for an activity by the candidate is not to the level of detail  specified in the examiner&#39;s guide, or is otherwise incomplete or unclear</li>
<li>support team members shall not give at any time  suggestions or indications regarding the diagnoses of malfunctions, the  decisions and the actions that the candidates are expected to make or to  perform and as also specified in Part B and Part C</li>  </ol>  <h4>Part B: Requirements applicable to  test scenarios CTS and ATS</h4>  <ol>
<li>Rules for the support team:
<ol className="list-lower-alpha">
<li>candidates shall be tested one at a time with the  support team members playing the role of typical operating crew members at the  NPP</li>
<li>the maximum number of persons in the support team  during a test scenario shall be limited to the number of persons expected to  respond, in the control room and in the field, to a transient on a single unit  when the NPP is manned with the absolute minimum shift complement, as defined  by the staffing document referred to in the NPP&#39;s power reactor operating  licence</li>
<li>at multi-unit NPPs, the number of support team members  available to the candidates in the control room and in the field shall take  into account the existing conditions of the other units specific to the  scenario</li>
<li>the individual members of the control room support team  shall be qualified to perform the tasks that certified persons in the  corresponding positions are performing at the NPP</li>
</ol>
</li>
<li>Instructions for support team members and field  operators:
<p>The  licensee shall place restrictions on the performance of the support team  members and field operators as applicable, during test scenarios, when compared  to the performance of an actual operating crew at the NPP:</p>
<div className="module">
<p>These restrictions are necessary to give the candidates the opportunity to demonstrate that they have acquired specific elements of knowledge and skills. </p>
</div>
<ol className="list-lower-alpha">
<li>the licensee&#39;s instructions for the support team members, and field operators as applicable, shall specify:
<ol className="list-lower-roman">
<li>the number of members available and their respective  roles</li>
<li>where each member will be at the start of the test  scenario and the position each must take when summoned to the control room</li>
<li>when each member summoned will be instructed to arrive  at a unit after a transient</li>
<li>the field conditions and any other information to be  communicated to the candidates by the field operators and when they must be  communicated</li>
<li>all requests for operations or verifications in the  control equipment room or in the field expected from the candidates and for  each activity, a realistic time that would be required for completing it at the  NPP and the information to be reported back to the candidate by the member  involved once the activity is completed</li>
<li>at multi-unit NPPs, when any member playing the role of  a certified individual will be instructed to leave the simulated reactor unit  or unit 0 during the CTS and, if applicable, when the member will be instructed  to return to the relevant unit</li>
<li>all requests for field activities expected from the  candidates and for each activity, the number of field operators and the  realistic time that would be required for completing it at the NPP and the  information to be reported back to the candidates once the activity is  completed</li>
</ol>
</li>
<li>The  licensee, when preparing instructions for the support team members, the  following practices shall be acceptable:
<ol className="list-lower-roman">
<li>a reasonable delay in the arrival of members of the  control room support team</li>
<li>at multi-unit NPPs, postulating conditions on one or  more units, other than the simulated unit affected by the transient, that  prevent or delay the arrival at this unit of one or more certified individuals  who are summoned, or that require one or more of the certified individuals to  subsequently leave that unit during a CTS</li>
<li>a reasonable delay in the completion of control room  activities expected to be requested by the candidates</li>
<li>a reasonable delay in the completion of field  activities expected to be requested by the candidates, such as manual closure  of a large isolating valve</li>
<li>delaying providing information expected to be requested  by the candidates</li>
<li>asking for advice on priorities when told to perform  several tasks by a candidate</li>
<li>requesting assistance from the candidate on the course  of actions to be taken to address a malfunction or abnormal NPP condition </li>
<li>in the event of a situation in the unit not  specifically addressed by the approved examiner&#39;s guide during a CTS for RO or  U0O candidates, the support team member designated to play the role of the PSS  or CRSS shall be expected to give the necessary approval regarding a course of  action required only after receiving from the candidate a recommendation with  justification on the approach to be followed; the PSS or CRSS shall only give the required guidance for situations involving systems or areas of authority for which an RO or a U0O is not accountable as defined in the NPP operating documentation</li>
</ol>
</li>
<li>The licensee, when preparing instructions for the support team members, the  following practices shall not be acceptable:
<ol className="list-lower-roman">
<li>pointing out abnormalities that the candidates are  expected to recognize</li>
<li>diagnosing a malfunction that the candidates are  expected to diagnose</li>
<li>giving suggestions regarding the decisions and the  actions that the candidates are expected to make or to perform</li>
<li>the members playing the role of other certified  individuals recommending a corrective action to the candidates, or recommending  the course of actions required in the event of any occurrence at a unit not  specifically addressed by the approved operating procedures</li>
<li>correcting an error made by a candidate, including the  incorrect selection of controls or input of information in response to a  request for a peer check</li>
<li>instructing support team members to give incorrect  information to the candidates</li>
<li>instructing members of the control room support team to  perform wrong actions when asked to execute tasks by the candidates</li>
<li>entering a malfunction or alarm not specified in the  examiner&#39;s guides without the prior approval of the lead examiner</li>
</ol>
</li>
</ol>  </ol>  <h4>Part C: Requirements applicable to  test scenario DTS</h4>  <ol>
<li>Rules for the support team:
<ol className="list-lower-alpha">
<li>candidates shall be tested one at a time with the  assistance in the control room of one or two support team members playing the  role of the RO and, where applicable, of the U0O; they shall respond to the  candidates when specifically requested to:
<ol className="list-lower-roman">
<li>call up a display, trend, annunciation number or alarm  summary</li>
<li>acknowledge and reset alarms</li>
<li>execute corrective actions when a major automatic  action fails to occur</li>
<li>obtain a particular procedure</li>
<li>obtain information in the control equipment room or  from the field</li>
</ol>
</li>
<li>a support team member shall be available to play the  role of the field operators</li>
</ol>
</li>
<li>Instructions for support team members:
<p>The licensee shall place  restrictions on the number of support team members in the control room and on  their individual performance: </p>
<ol className="list-lower-alpha">
<li>the licensee, when preparing instructions for the  support team members, the following practices shall not be acceptable:</li>
<li>pointing out abnormalities that the candidates are  expected to recognize</li>
<li>diagnosing a malfunction that the candidates are  expected to diagnose</li>
<li>instructing support team members to give incorrect  information to the candidates</li>
<li>instructing members of the control room support team to  perform wrong actions when asked to execute corrective actions by the  candidates</li>
</ol>
</li>
<li>the licensee&#39;s instructions for the support team  members, and field operator role as applicable, shall specify:
<ol className="list-lower-alpha">
<li>the position filled by the control team member when  summoned to the control room </li>
<li>the alarms, annunciations, equipment malfunctions and  any other information to be communicated to the candidates by the role player  and when they must be communicated</li>
<li>all requests for verifications in the control equipment  room expected from the candidates and for each verification, a realistic time  that would be required for completing it at the NPP and the information to be  reported back to the candidate by the member involved</li>
<li>the field conditions and any other information to be  communicated to the candidates by the field operators and when they must be  communicated</li>
<li>all requests for verifications in the field expected  from the candidates and for each verification, the minimum time that would be  required for completing it at the NPP and the information to be reported back  to the candidates; for field information that is essential to make the correct  diagnosis, it is acceptable to report the information back to a candidate  before the minimum time, once the candidate has made all control room checks  relevant to the diagnosis that are expected at that point in time and is  waiting for that field information to complete the diagnosis</li>
</ol>
</li>  </ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="C.15"></div>
<h3 id="app-c-15" className="mrgn-tp-0">C.15 Standard questions for PSS and CRSS candidates</h3>  <h4>Part  A: Standard questions for each CTS and ATS</h4>  <p>  The standard questions in the order  listed below shall be asked by the lead examiner at the end of the dynamic  portion of each CTS and ATS to the PSS and CRSS candidates.</p>  <p>  The required answer elements and the  associated generic performance expectations to each question shall be  documented in the examiner&#39;s guide for each test scenario.</p>  <p>1. a) State the  significant concerns you have as a plant shift supervisor (single-unit NPP) or  control room shift supervisor (multi-unit NPP), considering the NPP conditions  existing at the end of the test scenario.</p>  <p>  Candidates are expected to identify the  applicable significant concerns they should have at this time with respect to the  following: control of reactor power; the state of the current fuel cooling heat  sink(s); the containment of radioactivity; any required change in plant state; impairments  of special safety systems and standby safety support systems and the levels of  impairment; compliance with OP&amp;Ps; safe operation of NPP systems and  equipment; the safety of NPP personnel; and the protection of the environment. </p>  <div className="module"><p>In the  candidate&#39;s response to this question, the significant concerns are expected to  include those that need to be addressed immediately and those that need to be  addressed within the next few hours. The candidate is expected to identify the  specific levels of impairment and specific OP&amp;P concerns as applicable.</p></div>  <p>The generic performance expectations  associated with the answer to this question are: 3.1, 3.2 and 3.3.</p>  <p>  b) In what order should these  concerns be addressed?</p>  <p>  Candidates are expected to assign  priorities to the significant concerns identified in question 1 a) based on their  relative importance.</p>  <div className="module"><p>In the response to this  question, the candidate is expected to clearly identify which of the  significant concerns has the highest priority in the context of what can reasonably  be expected to be addressed within the next few hours.</p></div>  <p>The generic performance expectation  associated with the answer to this question is: 3.9.</p>  <p>  2. Outline  the course of actions that should be taken to address these concerns.</p>  <p>  Candidates are expected to outline the  course of actions that need to be taken and identify the applicable procedures  that would need to be implemented to address the concerns identified in  question 1 a).</p>  <p>  Whenever more than one procedure is to  be implemented, candidates shall be expected to outline in the appropriate  sequence the course of actions to be taken.</p>  <p>  Whenever approved procedures do not  exist, do not fully address the actual situation or give conflicting  instructions, candidates shall be expected to describe the actions and checks  they would ask control room personnel to perform.</p>  <p>The generic performance expectations  associated with the answer to this question are: 3.5, 3.6, 3.8, 3.9, 3.11 and 3.12.</p>  <h4>Part B: Standard questions for each DTS</h4>  <p>  The standard questions in the order  listed below shall be asked by the lead examiner at the end of the dynamic  portion of each DTS to the CRSS candidates.</p>  <p>  The required answer elements and the  associated generic performance expectations to each question shall be  documented in the examiner&#39;s guide for each test scenario.</p>  <p>  1. a) What main abnormal NPP condition did  you diagnose and<br />  b) What failure, or combination of  failures, caused this condition? </p>  <p>Candidates are expected to diagnose as  specifically as possible the failure, or combination of failures, that caused  the main abnormal NPP condition that must be addressed, taking into account the  severity of the deterioration of NPP conditions and the urgency to take an  appropriate course of actions.</p>  <p>  The generic performance expectation  associated with the answer to the first part of this question regarding the  main abnormal condition is: 3.4 or 3.6, and the generic performance expectation  associated with the answer to the second part of the question regarding the  failures is: 3.10.</p>  <p>  2. Explain how you came to  this conclusion?</p>  <p>  Candidates are expected to demonstrate  that their diagnosis was sound and based on existing control room and field  information that supports a unique conclusion.</p>  <p>  When there is more than one approach to  reach the correct diagnosis, each acceptable combination of checks that  supports a unique conclusion shall be documented in the examiner&#39;s guide.</p>  <p>  The generic performance expectations  associated with the answer to this question are: 3.4, 3.6, 3.7 and 3.10.</p>  <p>  3. What other significant problems  did you observe while performing your diagnosis?</p>  <p>  Candidates are expected to identify any  other malfunction of indications, equipment, components or control devices that  occurred while performing their diagnosis, including failure of any major  automatic action.<br />  The generic performance expectation  associated with the answer to this question is: 3.2.</p>  <p>  4. Outline the required course  of actions that should be taken, based on your diagnosis.</p>  <p>  Candidates are expected to outline the  course of actions that should be taken to address the main abnormal NPP  condition diagnosed plus the significant problems observed and identify the  applicable procedures that should be implemented.</p>  <p>  Whenever more than one procedure is to  be implemented, candidates shall be expected to outline in the appropriate  sequence the course of actions to be taken.</p>  <p>  Whenever approved procedures do not  exist, do not fully address the actual situation or give conflicting  instructions, candidates shall be expected to describe the actions and checks  they would ask control room personnel to perform.</p>  <p>  The generic performance expectations  associated with the answer to this question are: 3.5, 3.6, 3.8, 3.9, 3.11 and  3.12.</p>  <p>  5. a) State the significant concerns you have as a CRSS  considering the NPP conditions existing at the end of the DTS.</p>  <p>  Candidates are expected to identify the  applicable significant concerns they should have at this time with respect to the  control of reactor power, the state of the current heat sink(s), cooling of the  fuel, the containment of radioactivity, any required change in plant state, impairments  of special safety systems and standby safety support systems and the levels of  impairment, compliance with OP&amp;Ps, safe operation of NPP systems and  equipment, the safety of NPP personnel, the public and the protection of the  environment.</p>  <div className="module"> <p>In the candidate&#39;s response  to this question, the significant concerns are expected to include those that  need to be addressed immediately and those that need to be addressed within the  next few hours. The candidate is expected to identify the specific levels of  impairment or specific OP&amp;P concerns.</p> </div>  <p>The generic performance expectations  associated with the answer to this question are: 3.1, 3.2 and 3.3.</p>  <p>  b) Which of those significant concerns do you  consider the most important? </p>  <div className="module">  <p>In the response to this  question, the candidate is expected to clearly identify which of the  significant concerns has the highest priority.</p> </div>  <p>The generic performance expectation  associated with the answer to this question is: 3.9.</p>  <h4>Part C: Standard questions for a PCTS</h4>  <p>  The standard questions in the order  listed below shall be asked by the lead examiner at the end of the verification  portion of a PCTS to the CRSS candidates.</p>  <p>  The required answer elements and the  associated generic performance expectations to each question shall be  documented in the examiner&#39;s guide for the test scenario.</p>  <p>  1. What panel anomalies or abnormal conditions  did you identify?</p>  <p>  ONLY after candidates have answered this question  shall they be given access to operating documentation to answer the next two  questions.</p>  <p>  Candidates are expected to identify the required  failed indicating devices, annunciations or indications of an equipment or  system condition that is abnormal under the existing NPP conditions, or a  system configuration that is incorrect under the existing NPP conditions.</p>  <p>  The generic performance expectation associated with  the answer to this question is: 3.2.</p>  <p>  After the candidates have answered this first  question, they shall be given 10 minutes with access to approved NPP operating  documentation to prepare for answering the next two questions.</p>  <p>  2. Explain the significance of each anomaly or  abnormal condition.</p>  <p>  Candidates are expected to explain the significance  of each of the identified anomalies or abnormal conditions in terms of OP&amp;P  violations, system impairments and abnormal system configurations for the  existing NPP conditions, using approved NPP operational documentation.</p>  <p>  The generic performance expectations associated with  the answer to this question are: 3.2 and 3.3.</p>  <p>  3. Outline the required course  of actions to address each anomaly or abnormal condition.</p>  <p>  Candidates are expected to identify the required  course of actions to be taken in order to address each anomaly or abnormal  condition and identify the applicable procedures that should be implemented.</p>  <p>  The generic performance expectations associated with  the answer to this question are: 3.5, 3.6, 3.8, 3.9 and 3.12.</p>  <div className="module"> <p>At  the discretion of the lead examiner, questions 2 and 3 may be combined such  that the significance of each anomaly can be immediately followed with its  required course of action.</p> </div>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="C.16"></div>
<h3 id="app-c-16" className="mrgn-tp-0">C.16 Data collection checklist</h3>  <div className="col-md-12 mrgn-bttm-0 mrgn-tp-0">
<div className="col-md-3 ">NPP:</div>
<div className="span-3 ">__________________________________________</div>  </div>  <div className="clear"></div>  <div className="col-md-12 mrgn-bttm-0 mrgn-tp-0">
<div className="col-md-3 ">Candidate&#39;s full name:</div>
<div className="span-3 ">__________________________________________</div>  </div>  <div className="clear"></div>  <div className="col-md-12 mrgn-bttm-0 mrgn-tp-0">
<div className="col-md-3 ">Test scenario title:</div>
<div className="span-3 ">__________________________________________</div>  </div>  <div className="clear"></div>  <div className="col-md-12 mrgn-bttm-0 mrgn-tp-0">
<div className="col-md-3 ">Test scenario no.:</div>
<div className="span-3 ">__________________________________________</div>  </div>  <div className="clear"></div>  <div className="col-md-12 mrgn-bttm-0 mrgn-tp-0">
<div className="col-md-3 ">Examination date:</div>
<div className="span-3 ">__________________________________________</div>  </div>  <div className="clear"></div>  <div className="col-md-12 mrgn-bttm-0 mrgn-tp-0">
<div className="col-md-3 ">Operator action monitor printouts</div>
<div className="span-3 ">[  ]</div>  </div>  <div className="clear"></div>  <div className="col-md-12 mrgn-bttm-0 mrgn-tp-0">
<div className="col-md-3 ">Video tape or disc</div>
<div className="span-3 ">[  ]</div>  </div>  <div className="clear"></div>  <div className="col-md-12 mrgn-bttm-0 mrgn-tp-0">
<div className="col-md-3 ">Parameter trends</div>
<div className="span-3 ">[  ]</div>  </div>  <div className="clear"></div>  <div className="col-md-12 mrgn-bttm-0 mrgn-tp-0">
<div className="col-md-3 ">Alarm printouts</div>
<div className="span-3 ">[  ]</div>  </div>  <div className="clear"></div>  <div className="col-md-12 mrgn-bttm-0 mrgn-tp-0">
<div className="col-md-3 ">All logs</div>
<div className="span-3 ">[  ]</div>  </div>  <div className="clear"></div>  <div className="col-md-12 mrgn-bttm-0 mrgn-tp-0">
<div className="col-md-3 ">Flowsheets</div>
<div className="span-3 ">[  ]</div>  </div>  <div className="clear"></div>  <div className="col-md-12 mrgn-bttm-0 mrgn-tp-0">
<div className="col-md-3 ">Others:<br />________________<br />________________<br />________________<br />________________</div>
<div className="span-3 ">[  ]</div>  </div>  <div className="clear"></div>  <p>Comments<br />  _______________________________________________________________________<br />  _______________________________________________________________________<br />  _______________________________________________________________________<br />  _______________________________________________________________________</p>  <div className="col-md-12 mrgn-bttm-0 mrgn-tp-0">
<div className="col-md-3 ">Data collector&#39;s name:</div>
<div className="col-md-3">________________________<br />[Print name]</div>
<div className="col-md-3 ">________________________<br />Signature</div>  </div>  <div className="clear"></div>  <div className="col-md-12 mrgn-bttm-0 mrgn-tp-0">
<div className="col-md-3 ">Lead examiner&#39;s name:</div>
<div className="col-md-3">________________________<br />[Print name]</div>
<div className="col-md-3 ">________________________<br />Signature</div>  </div>  <div className="clear"></div>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="C.17"></div>
<h3 id="app-c-17" className="mrgn-tp-0">C.17 Test scenario validation checklist for test scenarios: CTS, ATS, and DTS</h3>  <div className="col-md-12 mrgn-bttm-0">
<div className="span-3 ">NPP: ________________________</div>
<div className="span-3 "></div>  </div>  <div className="clear"></div>  <div className="col-md-12 mrgn-bttm-0 mrgn-tp-0">
<div className="span-3 ">Examination date: ________________________</div>
<div className="span-3 ">Test scenario type: ________________________</div>  </div>  <div className="clear"></div>  <div className="col-md-12 mrgn-bttm-0 mrgn-tp-0">
<div className="span-3 ">Test scenario title: ________________________</div>
<div className="span-3 ">Test scenario no.: ________________________</div>  </div>  <div className="clear"></div>  <p>The simulation of the test scenario meets the following criteria:</p>  <div className="col-md-12 mrgn-bttm-0 mrgn-tp-0">
<div className="col-md-2 ">[ ]</div>
<div className="span-5 ">The key alarms are  received when expected and in the correct sequence.</div>  </div>  <div className="clear"></div>  <div className="col-md-12 mrgn-bttm-0 mrgn-tp-0">
<div className="col-md-2 ">[ ]</div>
<div className="span-5 "><p className="mrgn-tp-0">The response of the following parameters have approximately the correct magnitude and their excursions, if any, have approximately the correct magnitude and duration, based on the applicable laws of physics and the characteristics of the equipment and systems of the reference unit.</p>  <ul>
<li>reactor power</li>
<li>heat transport system reactor outlet header pressure (each header)</li>
<li>heat transport system reactor outlet header temperature (each header)</li>
<li>heat transport system storage tank level</li>
<li>heat transport system pressurizer level (at applicable NPPs)</li>
<li>heat transport system feed and bleed flows (all measured flows)</li>
<li>boiler level (each boiler)</li>
<li>boiler feed line pressure</li>
<li>boiler feed flows (all measured flows)</li>
<li>deaerator level</li>
<li>condenser level</li>
<li>main steam boiler pressure</li>
<li>main steam boiler pressure error</li>
<li>turbine generator load (MWe)</li>
<li>moderator level (at the applicable  NPP)</li>
<li>any other system parameter to be recorded during the conduct of the test scenario, as specified in the examiner&#39;s guide. (appendix C.12, part B) </li>  </ul></div>  </div>  <div className="clear"></div>  <div className="col-md-12 mrgn-bttm-0 mrgn-tp-0">
<div className="col-md-2 ">[ ]</div>
<div className="span-5 ">The relevant system logic control circuits operate correctly.</div>  </div>  <div className="clear"></div>  <div className="col-md-12 mrgn-bttm-0 mrgn-tp-0">
<div className="col-md-2 ">[ ]</div>
<div className="span-5 ">The simulator response to the malfunctions and other conditions of the test scenario and to the expected operator actions is realistic.</div>  </div>  <div className="clear"></div>  <div className="col-md-12 mrgn-bttm-0 mrgn-tp-0">
<div className="col-md-2 ">[ ]</div>
<div className="span-5 ">No misleading difference between the unit response as seen  from the control room at the simulator and the response of the reference unit  was observed during the validation of the test scenario.</div>  </div>  <div className="clear"></div>  <div className="col-md-12 mrgn-bttm-0 mrgn-tp-0">
<div className="col-md-3 ">Lead examiner&#39;s name:</div>
<div className="col-md-3">________________________<br />[Print name]</div>
<div className="col-md-3 ">________________________<br />Signature</div>  </div>  <div className="clear"></div>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="C.18"></div>
<h3 id="app-c-18" className="mrgn-tp-0">C.18 Rules of conduct and briefing of RO, U0O, PSS and CRSS candidates prior to examination conduct</h3>  <p>This appendix contains the minimum  requirements regarding the conduct of certification examinations the lead  examiner shall use to brief the candidates prior to commencing an examination  and test scenarios.</p>  <p>  The briefing of each candidate shall  consist of the applicable requirements set out in this regulatory document and  shall include the following:</p>  <h4>  A) Rules  of conduct for candidates</h4>
<ol className="list-lower-alpha">
<li>candidates shall remain in the control room at the  simulator during the conduct of any test scenario until given permission to  leave by the lead examiner</li>
<li>candidates shall hand over to the lead examiner all  material related to the examination before leaving the control room</li>
<li>candidates may voluntarily withdraw at any time during  the conduct of the examination and that such an action shall automatically  result in a fail result</li>  </ol>  <h4>B) Briefing  points for candidates</h4>
<ol className="list-lower-alpha">
<li>the introduction of the examination team members with a  general description of their behaviour during the examination</li>
<li>the introduction of the support team members with an  explanation of their roles during the examination</li>
<li>the overall duration and general characteristics of the  examination </li>
<li>a description of the main characteristics of the test  scenarios, and shall also include:
<ol className="list-lower-roman">
<li>a written turnover describing the initial NPP  conditions for the test scenario;it shall specify the initial conditions of the  simulated units, including the equipment out of service and other applicable  NPP conditions.; it will also specify where each member of the control room  support team will be at the start of the test scenario, and the lead examiner  will also describe these conditions to the candidates</li>
<li>all equipment that is out of service shall be  identified on the control room panels according to approved NPP procedures; ensure  there are no abnormal conditions other than those mentioned in the form until  the simulation of the test scenario begins</li>
<li>the time limit to review the control panels and alarm  summaries or perform the verification task as applicable to the test scenario</li>
</ol></li>
<li>during CTSs and ATSs, the candidate shall make attempts  to clearly indicate, either by pointing at the appropriate panel indicators,  CRT or VDT displays or alarm windows, or by stating out loud, the checks of  indications and system parameters performed on the control room panels to  diagnose malfunctions and to select operating procedures; similarly, candidates  shall also attempt to clearly indicate the checks that are being made in  accordance with NPP expectations during the implementation of operating procedures  and when taking any corrective action</li>
<li>the procedure and intent of the question period  following the dynamic portion or the applicable verification portion of the  test scenarios</li>  </ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="C.19"></div>
<h3 id="app-c-19" className="mrgn-tp-0">C.19 Abort conditions and instructions</h3>  <h4>Part A: Abort Conditions</h4>  <p>The lead examiner shall abort a CTS, an ATS or a DTS  if, at a minimum, any of the following abort conditions is met any time during  the conduct of a test scenario: </p>  <ol>
<li>an unanticipated occurrence, such as a fire, NPP  emergency, operations or simulator support system disturbances, that results in  an interruption in the conduct of the test scenario </li>
<li>a situation occurs resulting in a suspected or known  breach of security</li>
<li>a simulator fault occurs that causes a significant  unexplainable deviation between the response of the simulated unit and that  which would occur at the NPP reference unit</li>
<li>any occurrence that changes the planned evolution of  the test scenario to such an extent that the candidate action checklist in the approved  examiner&#39;s guide can no longer be used to reliably record the performance of  the candidate </li>
<li>the candidate or the lead examiner must leave the simulator due to unforeseen circumstances</li>
<li>a member of the support team, the simulator operator or the second examiner has to leave the simulator during the test scenario and the  absence of the person jeopardizes the reliable assessment of the performance of  the candidate</li>
<li>a failure of the audiovisual system that jeopardizes a reliable and auditable assessment of the performance of the candidate
<li>a support team member performs any of the following actions:
<ol className="list-lower-alpha">
<li>points out information or abnormalities that the candidates are expected to recognize</li>
<li>diagnoses a malfunction that the candidates are expected to diagnose</li>
<li>recommends a corrective action or course of action to the candidates</li>
<li>corrects an error made by a candidate, including the incorrect selection of controls or input of information in response to a request for a peer check</li>
<li>enters a malfunction not specified in the examiner&#39;s guides without prior approval of the lead examiner</li>
</ol></li>  </ol>  <h4>Part B: Abort instructions</h4>  <p>The lead examiner shall, if any of the abort conditions in Part A is met:</p>  <ol>
<li>instruct the simulator operator to freeze the simulator </li>
<li>inform the candidate that the test scenario has ended </li>
<li>instruct the candidate to remain in the control room averted  from viewing the panels and alarms while the examination team reviews the data  collected </li>
<li>instruct the support team members to leave the control  room and to remain on standby</li>
<li>record the point at which the simulator was frozen and  the reason for aborting the test scenario in the examiner&#39;s guide</li>
<li>recommend resuming the conduct of the test scenario  only if all the following conditions are met:
<ol className="list-lower-alpha">
<li>this is a single abort situation</li>
<li>the candidate is not likely to be able to predict the rest  of the test scenario</li>
<li>the simulator deficiency is not likely to reoccur</li>
</ol></li>
<li>follow the instructions in Part C if the decision is to  resume the conduct of the test scenario, or Part D if the decision is NOT to  resume the conduct of the test scenario </li>
<li>immediately suspend the conduct of the examination if  this is the second test scenario abort to occur during the conduct of the  examination; follow paragraphs 1 to 5 of the abort instructions above; with the  approval of the training manager, the examination can continue following a  thorough investigation and rectification of the cause of the abort conditions (the  cause of the aborts and the corrective actions taken shall be formally  documented as part of examination follow-up)</li>  </ol>  <h4>Part C: Resuming the test scenario following an abort</h4>  <p>The lead examiner shall, if step 6 in Part B above is met and the decision is to resume the test scenario:</p>  <ol>
<li>instruct the candidate to leave the simulator control  room by escorting the candidate into a sterile room and to remain on standby</li>
<li>instruct the audiovisual operator to stop recording</li>
<li>determine the NPP conditions that will exist at the  time of the resumption of the test scenario and ensure they are recorded in the  examiner&#39;s guide</li>
<li>instruct the simulator operator to reset the simulator  and the control panel devices in preparation for the resumption of the test  scenario</li>
<li>prior to resuming the conduct of the test scenario,  review with the support team the NPP conditions that will exist at the time of  its resumption and the response expected from each team member during the  remaining part of the scenario</li>
<li>ensure that the audiovisual systems for recording  communications are in service</li>
<li>instruct the audiovisual operator to resume recording  the examination</li>
<li>escort the candidate into the simulator control room</li>
<li>prior to resuming the test scenario, describe to the  candidate the existing NPP conditions</li>
<li>instruct  the simulator operator to resume the test scenario at the applicable step in  the candidate action checklist
</li>  </ol>  <h4>Part D: Not resuming the test scenario following an abort</h4>  <p>  The lead examiner shall, if the decision is NOT to  resume the test scenario:</p>  <ol>
<li>compare the information recorded in the examiner&#39;s  guides with that recorded by the other examiner and identify any discrepancies</li>
<li>in consultation with the other examiner, determine  whether or not there is a need to question the candidate to clarify any aspect  of observed performance up to the point of the abort condition that may affect  the assessment of the individual </li>
<li>ensure that, if there is a need to question the  candidate:
<ol className="list-lower-alpha">
<li>the questions are documented in the examiner&#39;s guide</li>
<li>the audiovisual system for recording the questions and  the answers are in service</li>
<li>the candidate is only asked the documented questions</li>
<li>in parallel with the other examiner, the candidate&#39;s  answers are recorded in the examiner&#39;s guide</li>
<li>in consultation with the other examiner, that no  further clarification is required</li>
</ol></li>
<li>advise the candidate the test has been terminated and instruct  the candidate to leave the simulator control room </li>
<li>inform the training manager immediately</li>  </ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="C.20"></div>
<h3 id="app-c-20" className="mrgn-tp-0">C.20 Critical and significant error criteria</h3>  <p>The critical and significant errors described below shall be used by the examination team for assessing the seriousness of omissions of, or deviations from, expected actions and checks by RO, U0O, PSS and CRSS candidates.</p>  <p>Prior to assigning an error to a candidate from the descriptions below, the following criteria must be met:</p>  <ol>
<li>the performance of the candidate is described unambiguously by the applicable critical or significant error</li>
<li>there is no doubt that the candidate made the error</li>
<li>for those errors associated with a failure to properly  respond to a condition, the candidate had sufficient time and information to  detect the condition and to respond as expected to that condition, considering other existing NPP conditions and the documented performance expectations of the NPP for the certified position sought by the candidate</li>  </ol>  <p>Note: The type of test scenario for which each error is applicable is indicated in brackets at the end of each  error statement.</p>  <h4>  A) Critical error</h4>  <p>  A critical error is made when the candidate:</p>  <ul>
<li>  C.1 caused a Level 1 or Level 2 impairmentof a special safety system, unless directed to do so by a relevant  operating procedure that took priority under the prevailing conditions.(CTS and  ATS)</li>
<li>
C.2 failed to take or initiate, in a timely  manner, all required actions following a Level 1 or Level 2 impairment of a special  safety system, taking into consideration competing priorities. (CTS and ATS)</li>
<li>
C.2a failed to determine, in a timely manner,  all required actions following a Level 1 or Level 2 impairment of an NPP special  safety system (DTS and PCTS)</li>
<li>
C.3 caused an NPP standby safety support  system to become unavailable or totally ineffective, unless the prevailing  conditions justified taking such an action (CTS and ATS)</li>
<li>
C.4 failed to take or initiate, in a timely  manner, all required actions when an NPP standby safety support system became  unavailable or totally ineffective, taking into consideration competing  priorities (CTS and ATS)</li>
<li>
C.4a failed to determine, in a timely manner,  all required actions when an NPP standby safety support system was unavailable  or totally ineffective (DTS and PCTS)</li>
<li>
C.5 caused a process system transient that  led to the actuation of an NPP special safety system, unless the prevailing  conditions justified taking such an action or the process system in question,  due to a design limitation or deficiency, is overly sensitive to transients  under the prevailing conditions. (CTS and ATS)</li>
<li>
C.6 did not take any corrective action in  response to an NPP process system transient, when the appropriate course of  actions was clear and ample time was available to take those actions, and this  led to the actuation of an NPP special safety system (CTS and ATS)</li>
<li>
C.7 caused an NPP process system transient or  a condition that resulted in the violation of one or more NPP OP&amp;P  requirements related to the control of reactor power, the cooling of the fuel  or the containment of radioactivity, unless the prevailing conditions justified  taking such an action or the process system in question, due to a design  limitation or deficiency, is overly sensitive to transients under the  prevailing conditions (CTS and ATS)</li>
<li>
C.8 failed to take or initiate, in a timely  manner, all required actions when one or more NPP OP&amp;P requirements related  to the control of reactor power, the cooling of the fuel or the containment of  radioactivity were not met (CTS and ATS)</li>
<li>
C.8a failed to determine, in a timely manner,  all required actions when one or more NPP OP&amp;P requirements related to the  control of reactor power, the cooling of the fuel or the containment of  radioactivity were not met (DTS and PCTS)</li>
<li>
C.9 failed to perform, in a timely manner,  all required checks to determine if an NPP special safety system was operating  or had operated effectively after it had been actuated (CTS, ATS and DTS)</li>
<li>
C.10 failed to perform, in a timely manner, all  required checks to determine that reactor power was being adequately controlled  following a reactor setback or stepback, or following an occurrence that had  caused a significant change in reactor power, unless a reactor trip had  occurred (CTS, ATS and DTS)</li>
<li>
C.11 failed to correctly implement, in a timely  manner, the correct emergency procedure(s) or abnormal operating manual(s)  under emergency conditions at the NPP (CTS, ATS and DTS)</li>
<li>
C.12 negligently exposed NPP personnel to  hazards that could seriously endanger their health. (CTS and ATS)</li>
<li>
C.13 committed another serious error  demonstrating a significant deficiency in the knowledge or skills considered  fundamental to the certified position, based on the NPP-documented performance  requirements of the position and/or on the risk to public safety, worker  safety, the environment or NPP equipment (CTS, ATS, DTS, PCTS)</li>  </ul>  <h4>B) Significant error</h4>  <p>  A significant error is made when the  candidate:</p>  <ul>
<li>  S.1 caused a level 3 impairment of an NPP special  safety system, unless directed to do so by a relevant operating procedure that  took priority under the prevailing conditions (CTS and ATS)</li>
<li>
S.2 failed to take or initiate, in a timely  manner, all required actions following a level 3 impairment of an NPP special  safety system, taking into consideration competing priorities (CTS and ATS)</li>
<li>
S.2a failed to determine, in a timely manner,  all required actions following a level 3 impairment of an NPP Special Safety  System (DTS and PCTS)</li>
<li>
S.3 caused an NPP process system transient  that led to the initiation of a reactor setback, a reactor stepback, a  turbine-generator trip or a main generator load rejection, or to the actuation  of an NPP standby safety support system, unless the prevailing conditions  justified taking such an action or the process system in question, because of a  design limitation or deficiency, is overly sensitive to transients under the  prevailing conditions (CTS and ATS)</li>
<li>
S.4 did not take any corrective action in  response to an NPP process system transient, when the appropriate course of  actions was clear and ample time was available to take those actions, and this  led to the initiation of a reactor setback, a reactor stepback, a  turbine-generator trip or a main generator load rejection, or to the actuation  of a standby safety support system (CTS and ATS)</li>
<li>
S.5 did not take all corrective actions in  response to an NPP process system transient, when the course of actions to be  taken was clear and ample time was available to take those actions, and this  led to the actuation of an NPP special safety system (CTS and ATS)</li>
<li>
S.6 caused an unwarranted actuation of an NPP  special safety system (CTS and ATS)</li>
<li>
S.7 caused an unwarranted initiation or  actuation of a reactor setback or stepback, of a turbine-generator trip or of a  main generator load rejection (CTS and ATS)</li>
<li>
S.8 failed to take or initiate, in a timely  manner, all required actions when one or more NPP OP&amp;P requirements, other  than those related to the control of reactor power, the cooling of the fuel or  the containment of radioactivity, were not met (CTS and ATS)</li>
<li>S.8a failed to determine, in a timely manner,  all required actions when one or more NPP OP&amp;P requirements, other than  those related to the control of reactor power, the cooling of the fuel or the  containment of radioactivity, were not met (DTS and PCTS)</li>
<li>S.9 caused an NPP process system transient or  a condition that resulted in the violation of one or more NPP OP&amp;P  requirements, other than those related to the control of reactor power, the  cooling of the fuel or the containment of radioactivity, unless the prevailing  conditions justified taking such an action or the process system in question, due  to a design limitation or deficiency, is overly sensitive to transients under  the prevailing conditions (CTS and ATS)</li>
<li>
S.10 failed to perform, in a timely manner, all  required checks to determine whether or not a reactor setback, a reactor  stepback, a turbine-generator trip, a main generator load rejection, or an  actuation of an NPP standby safety support system was occurring or had occurred  effectively as required, taking into consideration competing priorities (CTS,  ATS and DTS)</li>
<li>
S.11 caused an NPP emergency condition as  defined under category 4 primary malfunctions in subsection 16.4, unless the  prevailing conditions justified taking such an action or the process system in  question, due to an NPP design limitation or deficiency, is overly sensitive to  transients under the prevailing conditions (CTS and ATS)</li>
<li>
S.12 failed to take or initiate, in a timely  manner, the appropriate corrective or preventive actions when NPP conditions  are such that they threaten NPP personnel safety or public safety (CTS and ATS)</li>
<li>
S.13 committed another serious error  demonstrating a significant deficiency in the knowledge or skills considered  fundamental to the certified position, based on the NPP-documented performance  requirements of the position and/or on the risk to public safety, worker  safety, the environment or NPP equipment (CTS, ATS, DTS, PCTS) </li>  </ul>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="C.21"></div>
<h3 id="app-c-21" className="mrgn-tp-0">C.21 Critical or significant error  assessment form</h3>  <p>NPP:</p>  <div className="col-md-12 mrgn-bttm-0 mrgn-tp-0">
<div className="col-md-3 ">Candidate&#39;s full name:</div>
<div className="span-3 ">Examination date:</div>  </div>  <div className="clear"></div>  <p>Test scenario title:<br />  Test scenario type:<br />  Test scenario no.:</p>  <p>Competency area(s):</p>  <p>Error description:</p>  <div className="module"><p>To satisfy the requirement of appendix C.20 paragraph 2, the details here should include a brief description of the error, the applicable steps in the test candidate action checklist and include any relevant information from the operations monitor, the parameter recordings and the audiovisual recordings as applicable.</p></div>  <p>Error Categorization</p>   <p>The error described above is considered to be Critical Error number:</p>
<p>Or</p>  <p>The error described above is considered to be Significant Error number:</p>
<p>Justification:</p>  <div className="module"><p>To satisfy the requirements of appendix C.20 paragraphs 1 and 3, the details of this justification should clearly describe how the omitted steps or unanticipated action taken by the candidate satisfy the applicable Critical or Significant Error.</p></div>
<div className="col-md-12 mrgn-bttm-0 mrgn-tp-0">
<div className="col-md-3 ">Lead examiner&#39;s name:</div>
<div className="col-md-3">________________________<br />[Print name and Signature]</div>
<div className="col-md-3 ">____________<br />Date</div>  </div>  <div className="clear"></div>  <div className="col-md-12 mrgn-bttm-0 mrgn-tp-0">
<div className="col-md-3 ">Examiner(s):</div>
<div className="col-md-3">________________________<br />[Print name and signature]</div>
<div className="col-md-3 ">____________<br />Date</div>  </div>  <div className="clear"></div>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="C.22"></div>
<h3 id="app-c-22" className="mrgn-tp-0">C.22 Calculation  of performance-based examination scores</h3>  <p>This appendix describes how to calculate the various scores used to assess a candidate&#39;s performance in an examination, from the consolidated candidate action checklists of the candidate.</p>  <h4>A) Score for a generic performance expectation for the entire examination</h4>  <p>This score is  obtained by dividing the total number of items associated with a given generic  performance expectation that have been credited to a candidate in all  consolidated candidate action checklists by the total number of such items in  those checklists.</p>  <h4>B) Score for a competency area in a test  scenario</h4>  <p>This score is  obtained by dividing the weighted sum of all items associated with the generic  performance expectations in a given competency area that have been credited to  a candidate in the consolidated candidate action checklist for a given test  scenario by the weighted sum of all such items in that checklist.<br />
The weighted sum  is obtained by summing all relevant items, each multiplied by the weighting  factor for the associated generic performance expectation.</p>
<h4>C) Score for a competency area in an entire  examination</h4>
<p>This score is obtained by dividing the weighted sum of  all items associated with the generic performance expectations in a given  competency area that have been credited to a candidate in all consolidated candidate  action checklists by the weighted sum of all such items in those checklists. </p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="C.23"></div>
<h3 id="app-c-23" className="mrgn-tp-0">C.23 Performance-based examination results form</h3>  <p>Candidate&#39;s full name:</p>  <div className="col-md-12 mrgn-bttm-0 mrgn-tp-0">
<div className="col-md-3 ">Candidate&#39;s position:</div>
<div className="span-3 ">Examination date:</div>  </div>  <div className="clear"></div>  <p>NPP:</p>  <div className="col-md-12 mrgn-bttm-0 mrgn-tp-0">
<div className="col-md-3 ">Examination result:</div>
<div className="col-md-3">[ ] Pass</div>
<div className="col-md-3 ">[ ] Fail</div>  </div>  <div className="clear"></div>  <table className="table table-striped">
<tr>
<th rowspan="2">Test<br />
scenario</th>
<th colSpan="2">Competency area 1</th>
<th colSpan="2">Competency area 2</th>
<th colSpan="2">Competency area 3</th>
<th colSpan="2">Competency area 4</th>
<th colSpan="2">Competency area 5</th>
</tr>
<tr>
<th>Actual score</th>
<th>Total # available</th>
<th>Actual score</th>
<th>Total # available</th>
<th>Actual score</th>
<th>Total # available</th>
<th>Actual score</th>
<th>Total # available</th>
<th>Actual score</th>
<th>Total # available</th>
</tr>
<tr>
<td>CTS1</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>CTS2</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>CTS3</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>ATS1</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>ATS2</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>DTS1</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>DTS2</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>DTS3</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>PCTS</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>Exam totals</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>Percent score for each competency area</td>
<td colSpan="2">%</td>
<td colSpan="2">%</td>
<td colSpan="2">%</td>
<td colSpan="2">%</td>
<td colSpan="2">%</td>
</tr>
<tr>
<td>Percent overall score</td>
<td colSpan="10">%</td>
</tr>  </table>  <p>Justification of result:</p>  <p>  Candidate deficiencies: (For a hold result) include the information  specified in section 17.3.</p>  <div className="col-md-12 mrgn-bttm-0 mrgn-tp-0">
<div className="col-md-3 ">Lead examiner:</div>
<div className="col-md-3">________________________<br />[Print name and signature]</div>
<div className="col-md-3 ">________________________<br />[Date]</div>  </div>  <div className="clear"></div>  <div className="col-md-12 mrgn-bttm-0 mrgn-tp-0">
<div className="col-md-3 ">Examiner(s):</div>
<div className="col-md-3">________________________<br />[Print name and signature]</div>
<div className="col-md-3 ">________________________<br />[Date]</div>  </div>  <div className="clear"></div>  <div className="col-md-12 mrgn-bttm-0 mrgn-tp-0">
<div className="col-md-3 ">Authorized by:</div>
<div className="col-md-3">________________________<br />[Print name and signature]<br />Training  manager</div>
<div className="col-md-3 ">________________________<br />[Date]</div>  </div>  <div className="clear"></div>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="D"></div>
<h2 id="app-d" className="mrgn-tp-0">Appendix D:Sample Instructions, Checklists and Forms</h2>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="D.1"></div>
<h3 id="app-d-1" className="mrgn-tp-0">D.1 Security agreements for certification examinations</h3>  <h4>Part A: Examiners and examination support staff</h4>  <p><em>Any  person involved in the development and conduct of certification examinations,  either as an examiner or as examination support staff, must sign this agreement  only once, when first being given those responsibilities.<strong></strong></em></p>  <p>  Until I have been notified that the  security of a certification examination is no longer an issue, I will not  knowingly reveal any information related in any way to the content of the  examination to any person other than: </p>  <ul>
<li>the examiners participating in the  development and conduct of the examination</li>
<li>with any other person who has  signed this security agreement or a security agreement for that examination</li>  </ul>  <p>Discussions about a certification  examination with any of these persons must take place in a secure environment  to prevent compromising the security of the examination.</p>  <p>  Once I have started working on the  development of an examination or once I have any information on the content of  the examination, I will no longer participate in the instruction of, or give  training feedback to, the candidates scheduled to take that examination until  all of them have completed the examination.</p>  <p>  I am aware of the physical, electronic  and administrative measures and requirements that are in place to prevent  compromising the security of certification examinations.</p>  <p>  I will immediately report to the lead  examiner or to training manager any indication or suspicion that the security  of an examination may have been compromised.</p>  <p>  I understand that violation of the  terms of this agreement may result in an examination being cancelled.</p>  <div className="col-md-12 mrgn-bttm-0 mrgn-tp-0">
<div className="col-md-3 ">________________________<br />Name</div>
<div className="col-md-3">________________________<br />Signature</div>
<div className="col-md-3 ">________________________<br />Date</div>  </div>  <div className="clear"></div>  <div className="col-md-12 mrgn-bttm-0 mrgn-tp-0">
<div className="col-md-3 ">________________________<br />Name</div>
<div className="col-md-3">________________________<br />Signature</div>
<div className="col-md-3 ">________________________<br />Date</div>  </div>  <div className="clear"></div>  <div className="col-md-12 mrgn-bttm-0 mrgn-tp-0">
<div className="col-md-3 ">________________________<br />Name</div>
<div className="col-md-3">________________________<br />Signature</div>
<div className="col-md-3 ">________________________<br />Date</div>  </div>  <div className="clear"></div>  <div className="col-md-12 mrgn-bttm-0 mrgn-tp-0">
<div className="col-md-3 ">________________________<br />Name</div>
<div className="col-md-3">________________________<br />Signature</div>
<div className="col-md-3 ">________________________<br />Date</div>  </div>  <div className="clear"></div>
<h4>Part B: Candidates taking a certification examination</h4>  <p>(This agreement must be signed by a candidate who is scheduled to take  a given written, oral (if approved) or simulator-based examination.)</p>  <p>  To the best of  my knowledge, I have not received any information related in any way to the  content of: <br />
<em>&lt;Insert  certification examination identifier&gt;</em><br />
that I am  about to take.</p>  <p>  Until I have  been notified that this agreement has been rescinded, I will not knowingly  reveal any information related in any way to the content of this certification  examination to any person other than the examiners participating in the conduct  of the examination. I understand that discussions on this examination with  examiners must take place in a secure environment to prevent compromising the  security of the examination.</p>  <p>  I will  immediately report to the lead examiner or to the training manager any  indication or suspicion that the security of the examination may have been  compromised.</p>  <p>  I understand  that violation of the terms of this agreement may result in the examination  being cancelled.</p>  <div className="col-md-12 mrgn-bttm-0 mrgn-tp-0">
<div className="col-md-3 ">________________________<br />Name</div>
<div className="col-md-3">________________________<br />Signature</div>
<div className="col-md-3 ">________________________<br />Date</div>  </div>  <div className="clear"></div>  <div className="col-md-12 mrgn-bttm-0 mrgn-tp-0">
<div className="col-md-3 ">________________________<br />Name</div>
<div className="col-md-3">________________________<br />Signature</div>
<div className="col-md-3 ">________________________<br />Date</div>  </div>  <div className="clear"></div>  <div className="col-md-12 mrgn-bttm-0 mrgn-tp-0">
<div className="col-md-3 ">________________________<br />Name</div>
<div className="col-md-3">________________________<br />Signature</div>
<div className="col-md-3 ">________________________<br />Date</div>  </div>  <div className="clear"></div>  <div className="col-md-12 mrgn-bttm-0 mrgn-tp-0">
<div className="col-md-3 ">________________________<br />Name</div>
<div className="col-md-3">________________________<br />Signature</div>
<div className="col-md-3 ">________________________<br />Date</div>  </div>  <div className="clear"></div>  <div className="col-md-12 mrgn-bttm-0 mrgn-tp-0">
<div className="col-md-3 ">________________________<br />Name</div>
<div className="col-md-3">________________________<br />Signature</div>
<div className="col-md-3 ">________________________<br />Date</div>  </div>  <div className="clear"></div>  <div className="col-md-12 mrgn-bttm-0 mrgn-tp-0">
<div className="col-md-3 ">________________________<br />Name</div>
<div className="col-md-3">________________________<br />Signature</div>
<div className="col-md-3 ">________________________<br />Date</div>  </div>  <div className="clear"></div>
<h5>Rules and instructions  for an oral certification examination</h5>  <p>Prior  to commencing an oral examination, the lead examiner should communicate to the  candidates and, if applicable, to the operator of the recording system some  general information regarding the examination and the rules they must abide by.</p>  <h6>D) Introduction</h6>
<p>The lead examiner should cover the following points of general interest:</p>  <ol className="list-lower-alpha">
<li>introduction of the examination team members with a general description of their behaviour during the examination</li>
<li>overall duration and general characteristics of the examination</li>
<li>general characteristics of the examination process, including the requirement to record the questions of the examiners and the answers of a candidate during the entire  examination</li>  </ol>  <h6>E) Rules of conduct</h6>  <ol className="list-lower-alpha">
<li>The  only persons allowed in the examination room during the examination are the  candidate, the examiners, the training manager and, if applicable, the operator  of the recording system.</li>
<li>Candidates  and the operator of the recording system must remain in the examination room  until given permission to leave by the lead examiner.</li>
<li>Candidates  may voluntarily withdraw at any time during the conduct of the examination.  Such an action automatically results in a fail result.</li>
<li>Candidates  must not have access to any reference material other than the material given  with the examination.</li>
<li>Candidates  can only have in their possession what is provided by the examiner, such as the  examination questions with their attached reference material, blank paper for  the candidates&rsquo; use and pens, pencils, highlighters, erasers, a ruler, a  magnifying glass and a non-programmable calculator.</li>  </ol>
<p>(Before leaving the  examination room, candidates and the operator of the recording system must hand  over all examination-related material to the lead examiner.)</p>  <h5>Rules and instructions  for candidates writing certification examinations</h5>  <ol>
<li>Cheating  during the examination will result in an automatic fail result and shall be  assigned to all persons involved.</li>
<li>Candidates  may voluntarily withdraw at any time during the examination. Such an action  automatically will result in a fail result.</li>
<li>Candidates  can only have in their possession the examination paper with its attached  reference material, the answer booklets and other articles such as pens,  pencils, highlighters, erasers, a ruler, a magnifying glass and a  non-programmable calculator as approved by the lead examiner or invigilator.</li>
<li>Restroom  trips are allowed, but only one candidate at a time may leave the examination  and must be escorted. Communication with any person outside the examination  room is prohibited and may result in a fail grade.</li>
<li>Ensure  that your full name, name of the plant, examination title and date of  examination appear on the cover page of each of your answer booklets.</li>
<li>Read  each question in its entirety before beginning to answer it. If any question is  not clear to you, you may ask only the invigilators for clarification.</li>
<li>In  each question, the key words that indicate the degree of development required  in the answer are typed in bold and underlined to help you to give a complete  answer.</li>
<li>The  marks allocated to each question appear at the left of the question number.</li>
<li>The  estimated time to answer each part of a question and the number of elements in  the answer appear to the left of the letter designating the question part.</li>
<li>When flowsheets, diagrams or procedures are  provided for reference, the specific devices that are included in the answer  must be identified by their complete identification code or by an equivalent  written description.</li>
<li>Leave sufficient space between answers or  use separate booklets for different questions.</li>
<li>Use the left hand side of the booklets for  rough calculations or drafting answers.</li>
<li>Use abbreviations and acronyms only if they  are commonly used at the plant or after defining them.</li>
<li>When you have completed your examination:
<ol>
<li>Hand in your answer booklets and all  required additional material such as marked-up flowsheets, diagrams and  procedures. No material will be accepted after you have left the examination  room.</li>
<li>Record the time when you return your answer  booklets and initial the certification  examination invigilation form beside your name.</li>
<li>Leave the examination room and do not  remain in its vicinity.</li>
</ol>
</li>
<li>If you have questions on these rules and  instructions, ask them before the examination begins. </li>  </ol>  <h4>Part C: Others</h4>  <p>This agreement  must be signed by any person who participates in the development and conduct of  a given certification examination, other than persons employed on a regular  basis as examiners and examination support staff, and other than the candidates  scheduled to take the examination.</p>  <p>  Until I have  been notified that this agreement has been rescinded, I will not knowingly  reveal any information related in any way to the content of: <br />
<em>&lt;Insert  certification examination identifier&gt;</em><br />
to any  person other than:</p>  <ul>
<li>the  examiners participating in the development and conduct of the examination</li>
<li>any  other person whose name and signature appear below</li>  </ul>  <p>Discussions on  this certification examination with any of these persons must take place in a  secure environment to prevent compromising the security of the examination.</p>  <p>  Once I have  started working on the development of the examination or once I have any  information on its content, I will no longer participate in the instruction of,  or give training feedback to, the candidates scheduled to take that examination  until all of them have completed the examination.</p>  <p>  I am aware of  the physical, electronic and administrative measures and requirements,  applicable to my role in the examination, that are in place to prevent  compromising the security of certification examinations.</p>  <p>  I will  immediately report to the lead examiner or to the training manager any  indication or suspicion that the security of the examination may have been  compromised.</p>  <p>  I understand  that violation of the terms of this agreement may result in the examination  being cancelled.</p>  <div className="col-md-12 mrgn-bttm-0 mrgn-tp-0">
<div className="col-md-3 ">________________________<br />Name</div>
<div className="col-md-3">________________________<br />Signature</div>
<div className="col-md-3 ">________________________<br />Date</div>  </div>  <div className="clear"></div>  <div className="col-md-12 mrgn-bttm-0 mrgn-tp-0">
<div className="col-md-3 ">________________________<br />Name</div>
<div className="col-md-3">________________________<br />Signature</div>
<div className="col-md-3 ">________________________<br />Date</div>  </div>  <div className="clear"></div>  <div className="col-md-12 mrgn-bttm-0 mrgn-tp-0">
<div className="col-md-3 ">________________________<br />Name</div>
<div className="col-md-3">________________________<br />Signature</div>
<div className="col-md-3 ">________________________<br />Date</div>  </div>  <div className="clear"></div>  <div className="col-md-12 mrgn-bttm-0 mrgn-tp-0">
<div className="col-md-3 ">________________________<br />Name</div>
<div className="col-md-3">________________________<br />Signature</div>
<div className="col-md-3 ">________________________<br />Date</div>  </div>  <div className="clear"></div>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="D.2"></div>
<h3 id="app-d-2" className="mrgn-tp-0">D.2 Knowledge groups for single-unit-NPP-specific  examinations for RO candidates</h3>  <h4>Part A: Knowledge  groups - Generic station system knowledge objectives for  control room operators (GSSKOs) and areas not addressed by GSSKOs</h4>  <p>  The knowledge or learning objectives are specific to each NPP and are  developed in accordance with a systematic approach to training (SAT). Single-unit  NPPs use the generic station system knowledge objectives for control room  operators (GSSKOs) in the development of their NPP-specific learning  objectives. The knowledge groups and marks below shall be used by the  examination team to ensure that the sampling of topic groups in appendix B.3  adequately covers the knowledge areas addressed by the NPP SAT-based objectives  for ROs.</p>  <p>  The grouping below contains information related to the different  knowledge areas addressed by GSSKOs while also allowing sampling of the  knowledge areas not explicitly covered by those GSSKOs. The&nbsp;information adjacent  to each knowledge area, groups A to G, refers to the document entitled Generic Station System Knowledge  Objectives for Control Room Operators (refer to  References)<em>.</em> NPPs using a different set of generic system  knowledge objectives for ROs may refer to the corresponding generic objectives  in their set, once the resulting NPP-specific learning objectives, developed in  accordance with a SAT, are approved by the CNSC.</p>  <table className="table table-striped">
<tr>
<th>Group</th>
<th>Knowledge area </th>
<th>73&nbsp;marks</th>
</tr>
<tr>
<td>A</td>
<td>System design: GSSKOs - Part 1</td>
<td>9 &plusmn; 2</td>
</tr>
<tr>
<td>B</td>
<td>Instrumentation and control: GSSKOs - Part 2, excluding
those covered in Group C below</td>
<td>13 &plusmn; 3</td>
</tr>
<tr>
<td>C</td>
<td>Response of control loops and logic control circuits:
GSSKOs 2.2.3, 2.2.4, 2.2.5, and 2.3.7</td>
<td>14 &plusmn; 3</td>
</tr>
<tr>
<td>D</td>
<td>Monitoring of system parameters, operating procedures and
test procedures, excluding emergency operating procedures: GSSKOs 3.1, 3.3,
3.4, and 4.1</td>
<td>12 &plusmn; 3</td>
</tr>
<tr>
<td>E</td>
<td>Operating policies and principles: GSSKOs 3.2.1 and
4.2, and <br />
                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }