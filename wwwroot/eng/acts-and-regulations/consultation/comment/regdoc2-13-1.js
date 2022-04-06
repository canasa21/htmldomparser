import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "en",
                pageTitle: "REGDOC-2.13.1: Safeguards and Nuclear Material Accountancy", 
                dateModified: "2017-02-21",
                langToggleUrl: "/fra/acts-and-regulations/consultation/comment/regdoc2-13-1"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<h2 id="preface">Preface</h2>  <p>This regulatory document is part of the Canadian Nuclear Safety Commission&#39;s (CNSC) safeguards and non-proliferation series of regulatory documents. The full list of regulatory document series is included at the end of this document and can also be found on the <a href="/eng/acts-and-regulations/regulatory-documents/index">CNSC&#39;s website</a>.</p>  <p>Regulatory document REGDOC-2.13.1, <em>Safeguards and Nuclear Material Accountancy</em>, sets out requirements and guidance for safeguards programs for applicants and licensees who possess nuclear material, carry out specified types of nuclear fuel-cycle related research and development work, or carry out specified types of nuclear-related manufacturing activities. The requirements and guidance in this document are essential to Canadian compliance with the safeguards agreements entered into with the International Atomic Energy Agency (IAEA), and are consistent with modern national and international practices.</p>  <p>This document supersedes RD-336, <em>Accounting and Reporting of Nuclear Material</em>, and GD-336, <em>Guidance for Accounting and Reporting of Nuclear Material</em>, which were both published in June, 2010.</p>  <p>REGDOC-2.13.1 is intended to form part of the licensing basis for a regulated facility or activity within the scope of the document. It is intended for inclusion in licences as either part of the conditions and safety and control measures in a licence, or as part of the safety and control measures to be described in a licence application and the documents needed to support that application.</p>  <p>For new applicants: This document will be used to assess new licence applications.</p>  <p>Guidance contained in this document exists to inform the applicant, to elaborate further on requirements or to provide direction to licensees and applicants on how to meet requirements. It also provides more information about how CNSC staff evaluate specific problems or data during their review of licence applications. Licensees are expected to review and consider guidance; should they choose not to follow it, they should explain how their chosen alternate approach meets regulatory requirements.</p>   <p>For existing licensees: The requirements contained in this document do not apply unless they have been included, in whole or in part, in the licence or licensing basis.</p>   <p>A graded approach, commensurate with risk, may be defined and used when applying the requirements and guidance contained in this regulatory document. The use of a graded approach is not a relaxation of requirements. With a graded approach, the application of requirements is commensurate with the risks and particular characteristics of the facility or activity.</p>  <p>An applicant or licensee may put forward a case to demonstrate that the intent of a requirement is addressed by other means and demonstrated with supportable evidence.</p>
<div className="alert alert-info">
<p><strong>Important note:</strong> Where referenced in a licence either directly or indirectly (such as through licensee-referenced documents), this document is part of the licensing basis for a regulated facility or activity.</p>
<p>The licensing basis sets the boundary conditions for acceptable performance at a regulated facility or activity, and establishes the basis for the CNSC&rsquo;s compliance program for that regulated facility or activity.</p>
<p>Where this document is part of the licensing basis, the word &quot;shall&quot; is used to express a requirement to be satisfied by the licensee or licence applicant. &quot;Should&quot; is used to express guidance or that which is advised. &quot;May&quot; is used to express an option or that which is advised or permissible within the limits of this regulatory document. &quot;Can&quot; is used to express possibility or capability.</p>
<p>Nothing contained in this document is to be construed as relieving any licensee from any other pertinent requirements. It is the licensee&rsquo;s responsibility to identify and comply with all applicable regulations and licence conditions.</p>  </div>
<div className="clear"></div>
<div className="col-md-12 module-table-contents">
<h2>Table of Contents</h2>
<ul>
<li><a href="#sec1">1. Introduction</a>
<ul>
<li><a href="#sec1-1">1.1 Purpose</a></li>
<li><a href="#sec1-2">1.2 Scope</a></li>
<li><a href="#sec1-3">1.3 Relevant legislation and obligations</a>
<ul>
<li><a href="#sec1-3-1">1.3.1 Legislation and regulations</a></li>
<li><a href="#sec1-3-2">1.3.2 International Atomic Energy Agency safeguards agreements</a></li>
</ul></li>
</ul></li>
<li><a href="#sec2">2. Nuclear Material Classification</a>
<ul>
<li><a href="#sec2-1">2.1 Group 1 material</a>
<ul>
<li><a href="#sec2-1-1">2.1.1 Group 1A material &ndash; Full-scope safeguards</a></li>
<li><a href="#sec2-1-2">2.1.2 Group 1B material &ndash; Exemption from safeguards</a></li>
</ul></li>
<li><a href="#sec2-2">2.2 Group 2 material &ndash; Ore concentrates</a></li>
</ul></li>
<li><a href="#sec3">3. Categorization of Licensees</a>
<ul>
<li><a href="#sec3-1">3.1 Facilities</a></li>
<li><a href="#sec3-2">3.2 Locations outside facilities</a></li>
<li><a href="#sec3-3">3.3 Other licensees</a></li>
</ul></li>
<li><a href="#sec4">4. Safeguards Program</a></li>
<li><a href="#sec5">5. Safeguards Equipment and Seals</a></li>
<li><a href="#sec6">6. International Atomic Energy Agency Access</a>
<ul>
<li><a href="#sec6-1">6.1 Inspections</a></li>
<li><a href="#sec6-2">6.2 Design information verification</a></li>
<li><a href="#sec6-3">6.3 Complementary access</a></li>
<li><a href="#sec6-4">6.4 Access to IAEA equipment</a></li>
</ul></li>
<li><a href="#sec7">7. Nuclear Material Accountancy</a>
<ul>
<li><a href="#sec7-1">7.1 Measurement of nuclear material</a></li>
<li><a href="#sec7-2">7.2 Inventory tracking</a></li>
<li><a href="#sec7-3">7.3 Physical inventory taking</a></li>
<li><a href="#sec7-4">7.4 Inventory difference</a></li>
<li><a href="#sec7-5">7.5 Foreign obligations</a></li>
</ul></li>
<li><a href="#sec8">8. Provision of Information</a>
<ul>
<li><a href="#sec8-1">8.1 Nuclear material accountancy reports</a>
<ul>
<li><a href="#sec8-1-1">8.1.1 Information security and electronic reporting</a></li>
<li><a href="#sec8-1-2">8.1.2 Inventory change document</a></li>
<li><a href="#sec8-1-3">8.1.3 General ledger</a></li>
<li><a href="#sec8-1-4">8.1.4 List of inventory items</a></li>
<li><a href="#sec8-1-5">8.1.5 Physical-key measurement point inventory summary</a></li>
<li><a href="#sec8-1-6">8.1.6 Reconciliation statement</a></li>
<li><a href="#sec8-1-7">8.1.7 Obligated material inventory summary</a></li>
</ul></li>
<li><a href="#sec8-2">8.2 Design information</a></li>
<li><a href="#sec8-3">8.3 Operational information</a></li>
<li><a href="#sec8-4">8.4 Information required by the Additional Protocol</a></li>
</ul></li>
<li><a href="#sec9">9. Retention of Records</a></li>
<li><a href="#appA">Appendix A: List of Declarable Nuclear-Related Manufacturing Activities</a></li>
<li><a href="#appB">Appendix B: List of Nuclear Fuel Cycle-Related Research and Development Activities</a></li>
<li><a href="#appC">Appendix C: Guidance on Materials Not Subject to Safeguards</a></li>
<li><a href="#appD">Appendix D: Nuclear Material Accountancy Reference Tables</a></li>
<li><a href="#glossary">Glossary</a></li>
<li><a href="#ref">References</a></li>
</ul>  </div>  <div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="1"></div>
<h2 id="sec1">1. Introduction</h2>  <p>The <em>Treaty on the Non-Proliferation of Nuclear Weapons</em> (NPT) [1] is the cornerstone of the global nuclear non-proliferation regime. States that are party to the NPT have commitments and obligations in the areas of non-proliferation, disarmament, and the peaceful use of nuclear material and technology.</p>   <p>To fulfil commitments made under the NPT, Canada has concluded binding safeguards agreements with the International Atomic Energy Agency (IAEA), which provide for the application of IAEA safeguards in Canada. Under the safeguards agreements, Canada has an obligation to report to the IAEA on all nuclear material and on certain types of nuclear research and manufacturing in Canada, and to accept IAEA inspections of those areas.</p>   <p>Under the <a href="http://laws-lois.justice.gc.ca/eng/acts/N-28.3/index.html"><em>Nuclear Safety and Control Act</em></a> (NSCA), the Canadian Nuclear Safety Commission (CNSC) has the mandate to achieve Canadian conformity with these agreements. To do so, the CNSC imposes obligations on its licensees for reporting required by the IAEA and for the access necessary for IAEA verification of this reporting.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="1.1"></div>
<h3 id="sec1-1">1.1. Purpose</h3>  <p>REGDOC-2.13.1, <em>Safeguards and Nuclear Material Accountancy</em>, sets out CNSC requirements and guidance for the establishment and maintenance of a safeguards program.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="1.2"></div>
<h3 id="sec1-2">1.2. Scope</h3>  <p>This document specifies the information, access and support that licensees shall provide to the CNSC and the IAEA to facilitate Canadian compliance with Canada&#39;s safeguards agreements with the IAEA, and with licensee obligations established in the <a href="http://laws.justice.gc.ca/eng/regulations/SOR-2000-202/"><em>General Nuclear Safety and Control Regulations</em></a> (GNSCR).</p>   <p>The term "safeguards" refers to an international system of monitoring and verifying nuclear material, administered in Canada by the CNSC and verified by the IAEA, to deter the diversion of such material from legitimate peaceful activities. The NPT requires that IAEA safeguards apply to nuclear material, in any quantity, wherever it is present in Canada.</p>  <p>REGDOC-2.13.1, <em>Safeguards and Nuclear Material Accountancy</em>, provides safeguards requirements and guidance for licensees who:</p>
<ol className="list-bullet-none">
<li>a) possess nuclear material, which is defined as: plutonium-239, uranium-233, uranium enriched in the isotopes of 235 or 233, uranium containing the mixture of isotopes occurring in nature, uranium depleted in the isotope 235, and thorium, and/or</li>
<li>b) carry out nuclear-related manufacturing activities as specified in <a href="#appA">Appendix A: List of Declarable Nuclear-Related Manufacturing Activities</a>, and/or</li>
<li>c) engage in nuclear fuel cycle-related research and development activities as defined in <a href="#appB">Appendix B: List of Nuclear Fuel Cycle-Related Research and Development Activities</a></li>
</ol>   <p>The following materials are not considered nuclear material, and as such, are not subject to safeguards in Canada:</p>
<ol className="list-bullet-none">
<li>a) uranium or thorium which occurs naturally in rock or soil, including uranium and thorium ore</li>
<li>b) nuclear material in transit through Canada</li>
<li>c) uranium, plutonium-239 and thorium that is in a non-nuclear end use form, from which the uranium, plutonium-239 and thorium is practicably irrecoverable</li>
</ol>  <p>Additional guidance on materials not subject to safeguards is provided in <a href="#appC">Appendix C: Guidance on Materials Not Subject to Safeguards</a>.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="1.3"></div>
<h3 id="sec1-3">1.3. Relevant legislation and obligations</h3>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="1.3.1"></div>
<h4 id="sec1-3-1">1.3.1 Legislation and regulations</h4>  <p>The following provisions of the NSCA and the regulations made under it are relevant to this document:</p>
<ul>
<li>Subparagraph 9(a)(iii) of the NSCA establishes that one of the objects of the Commission is to "achieve conformity with measures of control and international obligations to which Canada has agreed".</li>
<li>Paragraph 24(4)(b) of the NSCA states that "[n]o licence shall be issued, renewed, amended or replaced &ndash; and no authorization to transfer one given &ndash; unless, in the opinion of the Commission, the applicant or, in the case of an application for an authorization to transfer the licence, the transferee…will, in carrying on that activity, make adequate provision for the protection of the environment, the health and safety of persons and the maintenance of national security and measures required to implement international obligations to which Canada has agreed".</li>
<li>Paragraph 27(b) of the NSCA states that "[e]very licensee and every prescribed person shall (b) make the prescribed reports and file them in the prescribed manner".</li>
<li>Paragraph 12(1)(i) of the GNSCR states that "[e]very licensee shall…take all necessary measures to facilitate Canada&#39;s compliance with any applicable safeguards agreement".</li>
<li>Section 30 of the GNSCR identifies situations in which safeguards reports shall be provided by licensees to the Commission. Regulatory document series 3.1, Reporting Requirements, sets out the CNSC&#39;s requirements for event and compliance monitoring reporting by licensees, and can be found on the <a href="http://www.nuclearsafety.gc.ca/">CNSC&#39;s website</a>.</li>
</ul>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="1.3.2"></div>
<h4 id="sec1-3-2">1.3.2 International Atomic Energy Agency safeguards agreements</h4>  <p>The IAEA implements safeguards through legally binding treaty-level agreements with states and regional authorities. The Canada-IAEA Comprehensive Safeguards Agreement (Safeguards Agreement) [2] came into force on February 21, 1972 and the Canada-IAEA Additional Protocol (Additional Protocol) [3] came into force on September 8, 2000.</p>   <p>The Safeguards Agreement lays out the safeguards system that Canada shall adhere to, including what materials are subject to safeguards, and what information shall be reported to the IAEA. As per the Safeguards Agreement, the objective of IAEA safeguards is "the timely detection of diversion of significant quantities of nuclear material from peaceful nuclear activities to the manufacture of nuclear weapons or of other nuclear explosive devices or for purposes unknown, and deterrence of such diversion by the risk of early detection."</p>  <p>The Additional Protocol contains further requirements for the provision of information and access, including the obligation to allow access to some locations on 24 hours&#39; notice, and the obligation to provide information on and access to certain nuclear manufacturers and researchers, neither of which need involve nuclear material.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="2"></div>
<h2 id="sec2">2. Nuclear Material Classification</h2>  <p>The CNSC has defined two groups and two sub-groups of nuclear material for the purpose of the graded application of reporting and access requirements. It is possible for licensees to possess a combination of material groups; however, material from different groups shall be stored separately. For permissible inventory changes for each group, refer to <a href="#appD-D3">Appendix D: Table D3</a>.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="2.1"></div>
<h3 id="sec2-1">2.1 Group 1 material</h3>  <p>Group 1 material is uranium, plutonium-239, and thorium that are sufficiently pure to be used for fuel fabrication or for isotopic enrichment. This includes all materials in the nuclear fuel cycle past the point of ore concentrate, or anything created from such materials. Uranium ore concentrate that meets the purity specifications in table 1 of ASTM-C753 04, <em>Standard Specification for Nuclear-Grade, Sinterable Uranium Dioxide Powder</em> [4] is considered to be Group 1 material. Once a given item or batch of nuclear material is considered to be Group 1 material, it remains so unless terminated from safeguards by agreement with the IAEA.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="2.1.1"></div>
<h4 id="sec2-1-1">2.1.1 Group 1A material &ndash; Full-scope safeguards</h4>  <p>Group 1A material is Group 1 material that is subject to full-scope safeguards &ndash; that is, open to routine verification by the IAEA and detailed nuclear material accountancy is required (see  <a href="#appD">Appendix D: Table D1</a> for reporting frequencies, and section 6 for further information on IAEA access rights applicable to Group 1A material).</p>  <p>Group 1A material may only be stored at sites categorized as "facilities" or "locations outside facilities" for safeguards purposes (see <a href="#sec3">section 3</a> for categorization of licensees).</p>  <p>Licensees can seek the termination of safeguards on Group 1A material by submitting a request to the CNSC using the form available on the <a href="http://www.nuclearsafety.gc.ca/">CNSC website</a>. Termination will only be granted if the material has been consumed, or has been diluted in such a way that it is no longer usable for any nuclear activity, or has become practicably irrecoverable. Material which has been terminated from safeguards ceases to be subject to detailed nuclear material accountancy and IAEA access requirements.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="2.1.2"></div>
<h4 id="sec2-1-2">2.1.2 Group 1B material &ndash; Exemption from safeguards</h4>  <p>Group 1B material is Group 1 material that has been exempted from some reporting and verification obligations, with permission from both the IAEA and the CNSC. Refer to <a href="#appD">Appendix D: Table D1</a> for reporting frequencies, and <a href="#sec6-3">section 6.3</a> for further information for IAEA access rights applicable to Group 1B material.</p>  <p>Under Article 36 of the Safeguards Agreement, [2] nuclear material may be exempted from safeguards under the following conditions:</p>
<ol className="list-bullet-none">
<li>a) the material is used in gram quantities or less as a sensing component in instruments, or</li>
<li>b) the material is used in non-nuclear activities, or</li>
<li>c) the material is plutonium with a plutonium-238 content exceeding 80 percent</li>
</ol>  <p>Under Article 37 of the Safeguards Agreement [2], material not fitting the above criteria may still be exempted from safeguards if the quantity limits specified for Canada in Article 37 are not exceeded. The CNSC tracks the total quantity of material in Canada exempted under Article 37 to ensure that these limits are not exceeded.</p>  <p>Licensees can request that Group 1A material be exempted from safeguards or that Group 1B material be de-exempted from safeguards, by submitting a request to the CNSC using the forms available on the <a href="http://www.nuclearsafety.gc.ca/">CNSC&#39;s website</a>.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="2.2"></div>
<h3 id="sec2-2">2.2 Group 2 material &ndash; Ore concentrates</h3>  <p>Group 2 material is uranium and thorium that has not reached the stage in the nuclear fuel cycle where the composition and purity is suitable for fuel fabrication or isotopic enrichment. Group 2 material typically includes only uranium and thorium ore concentrates that do not meet the purity specifications in ASTM-C753 04, <em>Standard Specification for Nuclear-Grade, Sinterable Uranium Dioxide Powder</em>. [4]</p>  <p>This type of material is not subject to routine verification by the IAEA, but is still subject to some access and nuclear material accountancy requirements (see <a href="#appD">Appendix D: Table D1</a> for reporting frequencies, and <a href="#sec6-3">section 6.3</a> for further information on IAEA access rights applicable to Group 2 material).</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3"></div>
<h2 id="sec3">3. Categorization of Licensees</h2>  <p>For the purposes of safeguards, licensees are categorized as "facilities", "locations outside facilities", or "other licensees" according to the criteria below.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.1"></div>
<h3 id="sec3-1">3.1 Facilities</h3>  <p>Licensees who possess Group 1A material are referred to as facilities for safeguards purposes if they meet one of the following criteria:</p>
<ol className="list-bullet-none">
<li>a) the licence includes a reactor and/or a critical facility, or, a nuclear material conversion, fabrication, reprocessing or isotope separation plant, or, a separate nuclear material storage installation, or</li>
<li>b) the licence includes a location where Group 1A material in amounts greater than 1 effective kilogram is customarily used</li>
</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.2"></div>
<h3 id="sec3-2">3.2 Locations outside facilities</h3>  <p>Licensees who possess Group 1A material but do not meet the above criteria are referred to as locations outside facilities for safeguards purposes.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.3"></div>
<h3 id="sec3-3">3.3 Other licensees</h3>  <p>Licensees who do not possess Group 1A material, and who:</p>
<ol className="list-bullet-none">
<li>a) possess Group 1B or Group 2 material, and/or</li>
<li>b) conduct nuclear fuel cycle-related research and development activities, and/or</li>
<li>c) carry out specified nuclear-related manufacturing activities</li>
</ol>  <p>are referred to as other licensees, and are subject to a reduced set of safeguards requirements.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4"></div>
<h2 id="sec4">4. Safeguards Program</h2>  <p>Every licensee categorized as a facility, location outside facility or other licensee shall have a documented safeguards program that provides for the fulfillment of applicable safeguards requirements:</p>
<ul>
<li>Safeguards Equipment and Seals (<a href="#sec5">section 5</a>)</li>
<li>IAEA Access (<a href="#sec6">section 6</a>)</li>
<li>Nuclear Material Accountancy (<a href="#sec7">section 7</a>)</li>
<li>Provision of Information (<a href="#sec8">section 8</a>)</li>
<li>Retention of Records (<a href="#sec9">section 9</a>)</li>
</ul>   <h3>Guidance</h3>   <p>A licensee&#39;s safeguards program should include the measures the licensee will take to ensure that the safeguards requirements for that licensee are discharged in a consistent, satisfactory manner. Every licensee who possesses nuclear material, or carries out nuclear fuel cycle-related research and development activities, or carries out specified nuclear-related manufacturing activities should designate a person responsible for the maintenance and fulfillment of that licensee&#39;s safeguards program. The identity of this person should be disclosed to the CNSC.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="5"></div>
<h2 id="sec5">5. Safeguards Equipment and Seals</h2>  <p>Every licensee shall, at the CNSC&#39;s request, install safeguards equipment at the licensed site or facilitate the IAEA&#39;s installation of such equipment. Every licensee shall provide the services required for the operation of such equipment, in accordance with the specifications provided.</p>   <p>No licensee shall interfere with or interrupt the operation of safeguards equipment at the facility, or alter, deface or break a safeguards seal, except at the CNSC&#39;s request. Every licensee shall implement measures to prevent damage to, or the theft, loss, tampering with, or sabotage of safeguards equipment, seals, or samples. Licensees shall communicate any such events to their own security staff, where such staff exist.</p>  <p>As per section 30 of the GNSCR, reports shall be provided by licensees to the Commission in the event of interference with or an interruption to the operation of safeguards equipment, or the alteration, defacement or breakage of a safeguards seal, among other events.</p>  <h3>Guidance</h3>  <p>At licensee sites where safeguards seals and equipment are or are likely to be present, part of a licensee&#39;s safeguards program should include familiarizing all relevant persons with the requirements surrounding IAEA seals and equipment.</p>   <p>Licensees should contact the CNSC when it is not clear if there has been interference with or an interruption to the operation of safeguards equipment. For instance, most safeguards equipment can tolerate short-duration outages to power and/or data connectivity, so such instances may not constitute reportable events under section 30 of the GNSCR.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6"></div>
<h2 id="sec6">6. International Atomic Energy Agency Access</h2>  <p>Every licensee shall provide the required access to IAEA inspectors. This access is with the aim of verifying Canada&#39;s declarations to the IAEA as required by the Canada-IAEA safeguards agreements. The IAEA may require access to a given site for a variety of purposes, as described below.</p>  <p>At the CNSC&#39;s request, licensees shall report to the CNSC on the outcomes of any IAEA activities that occur on their sites.</p>  <h3>Guidance</h3>  <p>Licensees can contact the CNSC to verify the identity of IAEA inspectors requesting site access.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.1"></div>
<h3 id="sec6-1">6.1 Inspections</h3>  <p>The IAEA has the right to carry out inspections at licensees categorized as facilities and locations outside facilities. During inspections, the IAEA has the right to verify all Group 1A material on the site and to verify relevant records and reports, including safeguards-relevant documentation which has not been submitted to the CNSC (such as source data).</p>   <p>During an inspection, the licensee shall provide a list of inventory items (LII) covering the material subject to inspection, and then facilitate IAEA verification of that inventory. Further information on the LII is provided in <a href="#sec8-1-4">section 8.1.4</a>.</p>   <p>IAEA inspection activities can include, among other activities:</p>
<ul>
<li>measurement of nuclear material</li>
<li>taking of samples of nuclear material</li>
<li>review of data from IAEA containment and surveillance equipment</li>
<li>application and verification of IAEA seals</li>
<li>examination of safeguards-relevant records and reports</li>
</ul>  <p>For inspections where samples of nuclear material are taken, at the CNSC&#39;s request, the licensee shall provide such reasonable assistance as is required to enable the shipment of those samples.</p>  <h4>Guidance</h4>  <p>Depending on the size and complexity of the inventory to be verified, IAEA inspections can range in duration from hours to weeks. Notification of an IAEA inspection will typically be sent between 24 hours and a week in advance. The IAEA maintains the right to carry out unannounced inspections at licensees categorized as facilities with a content or annual throughput exceeding five effective kilograms of nuclear material. In order to reduce IAEA verification activities, the CNSC may request the acceptance of IAEA unannounced inspections by other licensees categorized as facilities, or by licensees categorized as locations outside facilities. The CNSC will seek to participate in all IAEA inspections in Canada, where possible.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.2"></div>
<h3 id="sec6-2">6.2 Design information verification</h3>  <p>The IAEA has the right to carry out design information verification (DIV) visits at licensees categorized as facilities to verify the design information provided by those licensees (see <a href="#sec8-2">section 8.2</a> for more information on design information requirements). During a DIV, licensees shall provide the IAEA with the latest design information submitted to the CNSC, and then facilitate IAEA verification of that information. The IAEA will provide one week&#39;s notice for DIV visits. The CNSC will seek to participate in all IAEA DIVs in Canada, where possible.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.3"></div>
<h3 id="sec6-3">6.3 Complementary access</h3>  <p>Under the Additional Protocol, [3] the IAEA has the right to request complementary access (CA) to any location in Canada with as little as 24 hours&#39; notice, or 2 hours&#39; notice if the IAEA is already on site at a facility or location outside facility for an inspection or DIV.</p>   <p>Upon receipt of a request for CA, every licensee shall provide the IAEA and CNSC with access to any:</p>
<ul>
<li>location on any site declared as a facility or location outside facility</li>
<li>decommissioned or closed down facility and/or location outside facility</li>
<li>uranium or thorium mine or mill</li>
<li>location possessing, importing or exporting more than 10 metric tonnes of uranium ore concentrate and/or more than 20 metric tonnes of thorium ore concentrate in a given calendar year</li>
<li>location where materials exempted from safeguards under Article 37 of the Safeguards Agreement [2] are stored, or where materials exempted from safeguards under Article 36 of the Safeguards Agreement are stored, if those materials are not yet in their non-nuclear end use form</li>
<li>location involved in the further processing of wastes containing plutonium, high enriched uranium or uranium-233 on which safeguards have been terminated</li>
</ul>  <p>For locations subject to CA requests that are not listed above (for example, locations involved in nuclear fuel cycle-related research and development activities or specified nuclear-related manufacturing), upon receipt of a request for CA, every licensee shall make every reasonable effort to provide the IAEA and CNSC with access.</p>   <p>Access shall be provided within the timeframes specified in the notification of CA.</p>  <h4>Guidance</h4>  <p>A CA will only take place during regular working hours. Activities which the IAEA may perform during a CA include:</p>
<ul>
<li>visual observation</li>
<li>collection of environmental samples</li>
<li>utilization of radiation detection and measurement devices</li>
<li>item counting of nuclear material</li>
<li>application of seals and/or other tamper indicating devices</li>
<li>examination of records relevant to the goals of the CA</li>
</ul>  <p>IAEA access during a CA can be managed in order to prevent the dissemination of proliferation-sensitive information, to meet safety or physical protection requirements, and to protect proprietary or commercially sensitive information. Any such need for managed access should be communicated to the CNSC via the licensee&#39;s annual update under the Additional Protocol [3] (see <a href="#sec8-4">section 8.4</a> for further details). This does not preclude the possibility of a need for managed access arising during the CA. The CNSC will seek to participate in all IAEA CAs in Canada, where possible.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.4"></div>
<h3 id="sec6-4">6.4 Access to IAEA equipment</h3>  <p>The IAEA has the right to access their installed equipment, including for maintenance and servicing. The licensee shall facilitate access to IAEA equipment, including the provision of ladders, scaffolding, lifting equipment, or training, as needed. Note that the granting of access may be required on short notice.</p>   <h4>Guidance</h4>  <p>Licensees should inform the CNSC of training requirements necessary to access IAEA equipment through design information submissions (see <a href="#sec8-2">section 8.2</a>).</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="7"></div>
<h2 id="sec7">7. Nuclear Material Accountancy</h2>  <p>Nuclear material accountancy is the program of nuclear material accounting and reporting implemented by licensees and the CNSC, to satisfy the requirements of the Safeguards Agreement. [2]</p>  <p>Nuclear material accountancy covers licensee activities carried out to establish the quantities of nuclear material present within defined areas, and the changes in those quantities within a defined time period. This includes nuclear material measurement, record keeping, preparation and submission of accounting reports, and verification of accounting information. For licensees possessing Group 1A material, this further includes the establishment of material balance areas (MBAs), where flows and inventory of nuclear material can be determined, and key measurement points (KMPs) within those MBAs, where flows and inventories of nuclear material can be measured.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="7.1"></div>
<h3 id="sec7-1">7.1 Measurement of nuclear material</h3>  <p>All licensee safeguards programs shall include the maintenance and calibration of any instruments used to measure nuclear material for safeguards purposes. The documented results of any calibration activity or measurement of nuclear material are classified as source data and thus shall be available on request, including during IAEA inspections.</p>   <h4>Guidance</h4>  <p>In general, instruments used to measure nuclear material should be calibrated at least once in the period between physical inventory takings (see <a href="#sec7-3">section 7.3</a> below for further detail). The accuracy of licensee measurements should meet or exceed the standards set in the IAEA document STR-368, <em>International Target Values 2010 for Measurement Uncertainties in Safeguarding Nuclear Materials</em>, [5] where applicable.</p>   <p>Rounding errors should be minimized (for example, when a sum of measurements is reported, rounding should only be performed for the final reported number). In addition, the number of significant digits should reflect the uncertainty in the overall measurement. Measurements should be provided with the same number of significant digits in all reports pertaining to the same item or batch.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="7.2"></div>
<h3 id="sec7-2">7.2 Inventory tracking</h3>  <p>All licensees possessing nuclear material shall be capable at all times of providing an up-to-date LII, covering all of the Group 1 material in their possession.</p>   <p>All items in inventory shall be uniquely identified, for instance with a stamped or engraved serial number, a label, or a tag, such that a CNSC or IAEA inspector can easily relate the licensee&#39;s LII to the physical inventory.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="7.3"></div>
<h3 id="sec7-3">7.3 Physical inventory taking</h3>  <p>All licensees categorized as facilities or locations outside facilities shall carry out a physical inventory taking (PIT) each calendar year, and not more than 14 months after their previous PIT. The licensee&#39;s PIT date shall be declared to the CNSC as part of the annual operational program (see <a href="#sec8-3">section 8.3</a>).</p>   <p>A licensee&#39;s PIT shall:</p>
<ul>
<li>confirm the presence of all Group 1 material on the LII</li>
<li>verify that an item&#39;s unique identifier matches the information on the LII</li>
<li>verify that there is no Group 1 material present which is not included on the LII</li>
</ul>   <p>The CNSC and/or the IAEA may choose to verify the results of a licensee&#39;s PIT, including the verification of all Group 1A material on the LII produced as a result of the PIT. Should the IAEA choose to verify the results of a licensee&#39;s PIT, their inspection is termed a physical inventory verification (PIV). Should the CNSC choose to do so, it is termed a physical inventory taking evaluation (PIT-E). The PIV and/or PIT-E may occur shortly after the PIT or coincide with it. A PIV will involve the verification of some or all Group 1A material onsite at the time of the PIT, while a PIT-E will involve the verification of some or all Group 1 material onsite at the time of the PIT. Licensees shall be prepared to support an IAEA PIV and/or a CNSC PIT-E following each PIT.</p>  <h4>Guidance</h4>  <p>For licensees with large and complex inventories, the PIT should be scheduled to take place when nuclear material movements and inventory are at a minimum, and when equipment used to process nuclear material can be emptied and cleaned out to the extent reasonably possible. Nuclear material that is held up in equipment at the time of a PIT should be sampled and analyzed, where possible, to determine characteristics relevant to the determination of nuclear material mass. The nuclear material in items that have not changed in mass since the previous inventory taking, or since their creation or receipt, does not need to be remeasured as part of a PIT.</p>  <p>The CNSC may select a PIT date for the licensee based on availability of CNSC resources.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="7.4"></div>
<h3 id="sec7-4">7.4 Inventory differences</h3>  <p>All licensees who carry out a PIT shall calculate inventory difference (ID) as an outcome of that PIT, and report it to the CNSC. ID is also known as material unaccounted for (MUF). ID is calculated over a material balance period; that is, the interval between two inventory takings.</p>   <p>ID shall be calculated using the material balance equation provided below:</p>   <p className="text-center"><strong>ID = BE – PE</strong></p>  <p className="text-center"><strong>and</strong></p>  <p className="text-center"><strong>BE = PB + X - Y</strong></p>  <p>where:</p>  <p>BE = the book ending inventory; that is, the sum of the physical beginning inventory and all inventory changes over the material balance period</p>  <p>PE = the physical ending inventory, as established by the current inventory taking</p>  <p>PB = the physical beginning inventory, as established by the previous inventory taking</p>  <p>X = the sum of all inventory increases over the material balance period</p>  <p>Y = the sum of all inventory decreases over the material balance period</p>  <p>ID shall be reported to the CNSC on the following reports:</p>
<ul>
<li>an inventory change document (ICD), if ID is non-zero (see <a href="#sec8-1-2">section 8.1.2</a>)</li>
<li>the final general ledger of the material balance period (see <a href="#sec8-1-3">section 8.1.3</a>)</li>
<li>the reconciliation statement (see <a href="#sec8-1-6">section 8.1.6</a>)</li>
</ul>   <p>The CNSC evaluates all instances of ID reported by licensees. On the basis of this evaluation, the CNSC may require follow-up actions for instances of a non-zero ID for nuclear material in bulk form. Licensees shall investigate any instances of a non-zero ID for nuclear material in item form, and  shall communicate the results of the investigation to the CNSC and to their own security staff, where such staff exist. Reports on the results of such investigations shall be submitted within 30 days of the PIT, and shall include the licensees&#39; conclusions as to the source of ID and any correcting measures.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="7.5"></div>
<h3 id="sec7-5">7.5 Foreign obligations</h3>  <p>Canada has negotiated nuclear cooperation agreements (NCAs) with nuclear trading partners worldwide. When nuclear material is imported into Canada pursuant to the terms and conditions of an NCA, it is generally subject to foreign obligations, including a requirement for Canada to track and report back on that nuclear material as long as it is in Canada.</p>   <p>The CNSC will inform the importer at the time an import licence is issued whether a foreign obligation will be attributed to the nuclear material. Where there has been no such notification by the CNSC, the nuclear material in question is considered unobligated while it remains in Canada.</p>   <p>All licensees shall track any foreign obligations associated with their nuclear material inventories and inventory changes. For further information see <a href="#sec8-1-2">sections 8.1.2</a> and <a href="#sec8-1-7">8.1.7</a>.</p>   <p>Once assigned, foreign obligations associated with an item shall be kept associated with that item, unless the integrity of the item is destroyed through processing. Note that nuclear material can be simultaneously obligated to multiple countries.</p>   <p>Foreign obligations on domestic transfers or internal inventory changes shall be assigned by the licensee based on the obligations in their inventory. Foreign obligations on nuclear material to be exported from Canada, if any, shall be declared to the CNSC by the licensee as part of the application process for a CNSC export licence. If unobligated nuclear material is to be exported from Canada for nuclear use, the CNSC will assign a Canadian obligation to that material at the time of export.</p>   <h4>Guidance</h4>  <p>For more information on CNSC&#39;s import and export control program, please see regulatory document <a href="http://www.nuclearsafety.gc.ca/pubs_catalogue/uploads/REGDOC-2-13-2-Import-and-Export-eng.pdf">REGDOC-2.13.2, <em>Import and Export</em></a>.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="8"></div>
<h2 id="sec8">8. Provision of Information</h2>  <p>All information supplied to the CNSC shall be transmitted using appropriate information security measures. The CNSC&#39;s Nuclear Materials Accountancy Reporting (NMAR) e-business system (see <a href="#sec8-1-1">section 8.1.1</a>), and encrypted email via the CNSC safeguards mailbox (<a href="mailto:safeguards-garanties@cnsc-ccsn.gc.ca">safeguards-garanties@cnsc-ccsn.gc.ca</a>) can be used for communications up to and including Protected B according to the security levels published by the Government of Canada under the Industrial Security Program. Licensees shall make alternate arrangements with the CNSC when information to be submitted is Protected C or classified.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="8.1"></div>
<h3 id="sec8-1">8.1 Nuclear material accountancy reports</h3>  <p>All licensees who possess nuclear material shall make reports to the CNSC, according to the reporting frequencies listed in <a href="#appD">Appendix D: Table D1</a>. The CNSC may require some reports to be submitted more frequently, to support IAEA verification activities.</p>  <p>Descriptions of the data to be included in each type of report are provided in <a href="#appD-D2">Appendix D: Table D2</a>. Forms for nuclear material accountancy reports are available from the <a href="http://www.nuclearsafety.gc.ca/">CNSC website</a>.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="8.1.1"></div>
<h4 id="sec8-1-1">8.1.1 Information security and electronic reporting</h4>  <p>Licensees shall have measures in place to prevent the compromise of systems used to generate, store and transmit safeguards-relevant information.</p>  <p>All licensees who are required to submit nuclear material accountancy reports (see <a href="#sec8-1">section 8.1</a>), shall do so using the NMAR e-business system, which can be found on the <a href="http://www.nuclearsafety.gc.ca/">CNSC website</a>.</p>   <h5>Guidance</h5>  <p>Licensees may refer to CSA standard N290.7, <em>Cyber Security for Nuclear Power Plants and Small Reactor Facilities</em> for guidance on cyber security for safeguards systems.</p>  <p>The NMAR e-business system accepts nuclear material accountancy reports in Extensible Mark-up Language format (.xml) and Microsoft Excel 2003 format (.xls), and accepts requests for exemption, de-exemption and termination in Portable Document Format (.pdf). An access code for NMAR can be obtained from the CNSC. Alternate arrangements can be made with the CNSC for files that cannot be submitted via NMAR; for example, because of file size.</p>   <p>Further information relevant to the use of NMAR is available on the <a href="http://www.nuclearsafety.gc.ca/">CNSC website</a>.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="8.1.2"></div>
<h4 id="sec8-1-2">8.1.2 Inventory change document</h4>  <p>An inventory change is any increase or decrease in a licensee&#39;s nuclear material inventory. All inventory changes shall be reported to the CNSC on an inventory change document (ICD), using the inventory change codes defined in <a href="#appD-D3">Appendix D: Table D3</a>. For all shipments of nuclear material, the shipper shall provide a copy of the ICD to the receiver.</p>  <h5>Correcting or deleting an inventory change document</h5>  <p>Corrections to ICDs shall be effected by submitting a correcting ICD with the necessary changes. A correcting ICD shall be dated with the current date, not the date on which the original transaction occurred. The correcting ICD will be identical to the original, save for the date, the fields being corrected, the entry of &#39;C&#39; (for &#39;correction&#39;) in Label 309, and Label 1021 being incremented by 1. A note shall be added to the remarks section of a correcting ICD to explain the reason for the correction.</p>  <p>Deleting ICDs can be used to completely withdraw an ICD. Deleting ICDs shall be effected by submitting an ICD identical to the original except dated with the current date and the entry of &#39;D&#39; for &#39;delete&#39; in Label 309 (Label 1021 remains 0). A note shall be added to the remarks section of deleting ICDs explaining the reason for the deletion.</p>  <p>Some fields on the ICD (Date, Batch Name, MBA, IC Type, Safeguards Status and Element Code, if the change to Element Code impacts the Safeguards Status) cannot be corrected by submitting a correcting ICD. In these cases, the original ICD shall be deleted and a new ICD submitted. Both the deleting ICD and the new ICD shall be dated with the current date.</p>   <p>In specific situations and in consultation with the CNSC, a correcting or deleting ICD can be reported with a date other than the current date, or an ICD can be withdrawn and replaced without modifying Label 309 or Label 1021.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="8.1.3"></div>
<h4 id="sec8-1-3">8.1.3 General ledger</h4>  <p>A general ledger is a monthly listing of all inventory changes occurring during that month and provides the book inventory, that is, a running balance of the material in the MBA.</p>   <p>General ledgers shall be kept by licensees categorized as facilities; the CNSC will maintain general ledgers on behalf of licensees categorized as locations outside facilities. The information for an inventory change recorded on the general ledger shall be consistent with information on the ICD for each inventory change, with the exception of corrections to weights, as described below, under "Recording a correcting or deleting ICD on a general ledger". A separate general ledger shall be submitted for each element/isotope of Group 1A material.</p>  <p>For months in which no transactions occur, licensees are not required to submit general ledgers to the CNSC. For licensees categorized as facilities, such general ledgers are considered to be source data and shall still be created, retained, and provided on request.</p>  <h5>Correcting a general ledger</h5>  <p>Corrections to general ledgers shall be effected by submitting a new report with the revision number incremented by 1 and the date of the revision indicated in the appropriate field.</p>  <h5>Recording a correcting or deleting ICD on a general ledger</h5>  <p>When a correcting or deleting ICD is submitted, the correction or deletion shall be recorded on the general ledger for the month in which the correction or deletion was reported. For a correcting ICD, if the correction is to the weight, then the weight recorded on the general ledger shall be the difference between the last reported weight and the corrected weight. For instance, if a weight were originally reported as 10 kg and then corrected to 11 kg, the general ledger entry corresponding to the correcting ICD would show 1 kg (11kg-10kg), even though the correcting ICD continues to state 11 kg. This is the only instance where the weight reported on a general ledger is not exactly the same as that reported on the corresponding ICD.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="8.1.4"></div>
<h4 id="sec8-1-4">8.1.4 List of inventory items</h4>  <p>The LII consists of listings of all items containing Group 1 material on site at any given time. A separate LII shall be kept for each element/isotope category present on site. Group 1A and Group 1B materials shall be recorded on separate sets of LIIs. An item is generally defined as the smallest individually labelled unit in inventory. Licensees shall be able to generate an accurate LII upon request.</p>  <p>Note: LIIs for spent fuel at CANDU stations are a special case, due to the extremely large number of items present. For LIIs covering spent fuel at CANDU stations, it is acceptable to provide a single line reporting each element present in each KMP, showing the number of bundles and the nuclear material mass. Itemized listings covering subsets of the spent fuel inventory shall be available on request to facilitate verification activities. At licensee request, the CNSC will consider similar arrangements for other large, homogenous inventories.</p>  <h5>Correcting a list of inventory items</h5>  <p>A correction to an LII shall be effected by submitting a new report with the revision number incremented by 1 and the date of the revision indicated in the appropriate field. The date on the corrected LII report shall stay the same, that is, the date for which the submitted LII was current.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="8.1.5"></div>
<h4 id="sec8-1-5">8.1.5 Physical-key measurement point inventory summary</h4>  <p>The physical KMP inventory summary (P-KMPIS) is a summary of Group 1A material by physical-KMP. The P-KMPIS shall summarize the LII by grouping items with the same material description codes into batches. In instances where a licensee possesses small inventories of nuclear material, at the licensee&#39;s request, the CNSC may waive the requirement to create and report a P-KMPIS.</p>  <h5>Correcting or deleting a physical-key measurement point inventory summary</h5>  <p>Corrections to P-KMPIS reports shall be effected by submitting a new report with the entry of &#39;C&#39; for &#39;correction&#39; in Label 309, and Label 1021 being incremented by 1. The date on the P-KMPIS report shall stay the same; that is, the date of the PIT being reported on. When submitting a correcting P-KMPIS, only the batches that are being corrected shall be included. For instance, if an original P-KMPIS had 10 batches and 2 needed correction, the correcting P-KMPIS shows only the 2 batches being corrected.</p>  <p>Deleting a P-KMPIS is done when it is necessary to completely withdraw some or all of the reported batches. The deletion shall be effected by submitting a P-KMPIS with the entry of ‘D&#39; for ‘delete&#39; in Label 309 (Label 1021 remains 0) and listing only the batches that need to be withdrawn exactly as they were reported in the original P-KMPIS. A note shall be added to the remarks section of correcting and deleting P-KMPIS batches explaining the reason for the change.</p>  <p>Some fields on the P-KMPIS (Date, Batch Name, MBA, Safeguards Status and Element Code, if it impacts Safeguards Status) cannot be corrected by submitting a correcting P-KMPIS. In these cases, the affected batches on the P-KMPIS shall be deleted and resubmitted on a new P-KMPIS.</p>  <p>In specific situations and in consultation with the CNSC, a correcting or deleting P-KMPIS can be withdrawn and replaced without modifying Label 309 or Label 1021.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="8.1.6"></div>
<h4 id="sec8-1-6">8.1.6 Reconcilliation statement</h4>  <p>A reconciliation statement is a report that calculates ID (see <a href="#sec7-4">section 7.4</a>); that is, the difference between the book ending inventory, derived from the most recent general ledger, and the physical ending inventory, derived from the P-KMPIS or LII. A reconciliation statement shall be prepared for Group 1A material after each PIT.</p>   <p>When a licensee possesses small inventories of nuclear material, at the licensee&#39;s request, the CNSC may waive the requirement to create and report a reconciliation statement.</p>  <h5>Correcting a reconciliation statement</h5>  <p>A correction to a reconciliation statement shall be effected by submitting a new report with the revision number incremented by 1 and the date of the revision indicated in the appropriate field. The date on the reconciliation statement shall stay the same; that is, the PIT date.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="8.1.7"></div>
<h4 id="sec8-1-7">8.1.7 Obligated material inventory summary</h4>  <p>The obligated material inventory summary (OMIS) is a list of opening and ending balance weights, by country of obligation, for any nuclear material that has foreign obligations at the licensee&#39;s site. Both Group 1 and Group 2 materials can be subject to foreign obligations.</p>  <p>The OMIS report covers a calendar year; the opening balance shall be as of January 1 of the reporting year, and the closing balance shall be as of December 31 of that same year.</p>  <h5>Correcting an obligated material inventory summary</h5>  <p>A correction to an OMIS report is effected by submitting a new report with the revision number incremented by 1 and the date of the revision indicated in the appropriate field. The dates on the OMIS shall stay the same; that is, January 1 and December 31 for the reporting year.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="8.2"></div>
<h3 id="sec8-2">8.2 Design information</h3>  <p>All licensees categorized as facilities or locations outside facilities shall ensure that the CNSC is in possession of up-to-date design information. The structure of MBAs and KMPs at a given facility or location outside facility shall be accurately described in the design information submitted to the CNSC by that licensee. Once the CNSC has reviewed and accepted a licensee&#39;s design information, the CNSC will submit it to the IAEA.</p>  <p>For licensees categorized as facilities, design information shall include all of the following:</p>
<ol>
<li>the identification of the facility, stating its general character, purpose, nominal capacity and geographic location, and the name and address to be used for routine business purposes</li>
<li>a description of the general arrangement of the facility, including site and building maps as needed, with reference to the form, location and flow of nuclear material and to the general layout of important items of equipment which are used to handle, produce or process nuclear material</li>
<li>a description of features of the facility relating to nuclear material accountancy, containment and surveillance</li>
<li>a description of the existing and proposed procedures at the facility for nuclear material accountancy and control, with special reference to MBAs established by the operator, organizational responsibility, measurements of nuclear material, the random and systematic uncertainties of such measurements, and procedures for PIT</li>
<li>health and safety procedures that the IAEA shall observe and with which the inspectors shall comply at the facility</li>
</ol>  <p>For licensees categorized as locations outside facilities, design information shall include all of the following:</p>
<ol>
<li>a general description of the use of the nuclear material, its geographic location, the user&#39;s name and address for routine business purposes, and site and building maps as needed</li>
<li>a general description of the existing and proposed procedures for nuclear material accountancy and control, including organizational responsibility, measurements of nuclear material, the random and systematic uncertainties of such measurements, and procedures for PIT</li>
<li>health and safety procedures that the IAEA shall observe and with which the inspectors shall comply at the facility</li>
</ol>  <p>Design information shall be updated and submitted to the CNSC as soon as the decision is taken to make changes that would render the information previously provided incomplete or inaccurate.</p>  <p>For the construction of new facilities or locations outside facilities, preliminary design information shall be submitted to the CNSC as soon as the decision to construct or to authorize construction has been taken, whichever is earlier. An update to that preliminary design information shall be submitted to the CNSC no later than 270 days before the start of construction. Similarily, final design information shall be submitted to the CNSC no later than 270 days before the first receipt of nuclear material at the facility.</p>  <h4>Guidance</h4>  <p>Licensees should provide design information on the appropriate IAEA design information questionnaire (DIQ) form, available on request from the CNSC. Licensees should annually review their design information to verify that it is up to date. The CNSC may require that updates to design information be provided on a specified timeline, and the CNSC may request design information supplemental to that listed above.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="8.3"></div>
<h3 id="sec8-3">8.3 Operational information</h3>  <p>All licensees categorized as facilities shall submit an annual operational program to the CNSC, covering safeguards-relevant information for the upcoming calendar year. This program shall be submitted to the CNSC by September 30 each year, and shall be updated by the licensee as necessary so that the operational program remains current.</p>   <p>Every facility shall submit an annual operational program that includes all of the following information:</p>
<ol>
<li>the licensee&#39;s preferred PIT date for the upcoming calendar year</li>
<li>any anticipated shutdown periods during the upcoming calendar year</li>
<li>information on expected transfers of nuclear material in the next calendar year</li>
<li>updates on current or upcoming projects of relevance to safeguards, such as the construction or decommissioning of a building, the commencement of projects involving nuclear material, changes to the types of nuclear material being possessed, etc.</li>
</ol>   <h4>Guidance</h4>  <p>In consultation with affected licensees, the CNSC may request updates to operational information on a more frequent basis, e.g. quarterly or weekly, to facilitate IAEA verification activities. Forms for submission of operational data are available on the <a href="http://www.nuclearsafety.gc.ca/">CNSC website</a>.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="8.4"></div>
<h3 id="sec8-4">8.4 Information required by the Additional Protocol</h3>  <p>All licensees shall submit the following information (as applicable) to the CNSC by March 15 each year, so that the CNSC may submit Canada&#39;s annual update under the Additional Protocol [3] to the IAEA:</p>
<ol>
<li>A general description of, and information specifying, the location of nuclear fuel cycle related research and development activities, as defined in <a href="#appB">Appendix B: List of Nuclear Fuel Cycle-Related Research and Development Activities</a>.</li>
<li>For licensees categorized as facilities or locations outside facilities, current drawings of the site, a general description of each building on the site, including its use and, if not apparent from that description, its contents. Note that current site drawings need only be submitted if previously-submitted site drawings are no longer accurate.</li>
<li>A description of the scale of operations for each location engaged in the activities specified in <a href="#appA">Appendix A: List of Declarable Nuclear-Related Manufacturing Activities</a>.</li>
<li>Information specifying the location, operational status, annual production capacity and the current annual production of uranium mines and concentration plants and thorium concentration plants.</li>
<li>Information regarding each location with a stockpile of uranium or thorium ore concentrates greater than 1 metric tonne, including the quantities, the chemical composition and the use or intended use of such material. The provision of this information does not require detailed nuclear material accountancy, and shall not include material considered to be in transit.</li>
<li>Information regarding Group 1B material, as follows:
<ol className="list-lower-alpha">
<li>for materials exempted from safeguards pursuant to Article 37 of the Safeguards Agreement, the quantities, uses and locations of such material</li>
<li>for materials exempted from safeguards pursuant to Article 36 of the Safeguards Agreement, but where the material is not yet in a non-nuclear end-use form, information regarding the quantities and uses at each location</li>
</ol></li>
<li>Information regarding the location or further processing of intermediate or high-level waste containing plutonium, high enriched uranium or uranium-233 on which safeguards have been terminated pursuant to Article 11 of the Safeguards Agreement. For the purpose of this paragraph, “further processing” does not include repackaging of the waste or its further conditioning not involving the separation of elements, for storage or disposal.</li>
<li>General plans for the succeeding 10-year period relevant to the development of the nuclear fuel cycle (including planned nuclear fuel cycle-related research and development activities) when approved by the appropriate authorities in Canada.</li>
</ol>  <p>Information in licensee submissions shall cover the previous calendar year.</p>   <h4>Guidance</h4>  <p>Licensees should use the IAEA&#39;s Protocol Reporter software when submitting such information to the CNSC. Copies of this software are available upon request from the CNSC.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="9"></div>
<h2 id="sec9">9. Retention of Records</h2>  <p>Licensees shall retain copies of any records required under this regulatory document:</p>
<ol>
<li>for the period specified under applicable CNSC regulations, or</li>
<li>as long as nuclear material relevant to the records remains in the licensee&#39;s possession, or</li>
<li>as long as the licensee continues to perform declarable nuclear-related manufacturing activities (as defined in <a href="#appA">Appendix A: List of Declarable Nuclear-Related Manufacturing Activities</a>) relevant to the records, or</li>
<li>as long as the licensee continues to perform nuclear fuel cycle-related research and development activities (as defined in <a href="#appB">Appendix B: List of Nuclear Fuel Cycle-Related Research and Development Activities</a>) relevant to the records, or</li>
<li>for a minimum of five years, whichever is longer</li>
</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appA"></div>
<h2 id="appA">Appendix A: List of Declarable Nuclear-Related Manufacturing Activities</h2>  <p>For the purposes of facilitating Canada&#39;s compliance with its safeguards agreements, certain nuclear-related manufacturing activities shall be reported to the Canadian Nuclear Safety Commission (see <a href="#sec8-4">section 8.4</a>). These activities are defined in annex I to the Additional Protocol [3] and include:</p>
<table className="table table-striped">  <tr>
<td className="">(i)</td>
<td>the manufacture of centrifuge rotor tubes or the assembly of gas centrifuges for use in isotopic separation processes</td>  </tr>  <tr>
<td className="">(ii)</td>
<td>the manufacture of gaseous diffusion barriers for use in isotopic separation processes</td>  </tr>  <tr>
<td className="">(iii)</td>
<td>the manufacture or assembly of laser-based systems for isotopic separation</td>  </tr>  <tr>
<td className="">(iv)</td>
<td>the manufacture or assembly of electromagnetic isotope separators</td>  </tr>  <tr>
<td className="">(v)</td>
<td>the manufacture or assembly of columns or extraction equipment especially designed or prepared for use in isotopic separation systems using chemical exchange or ion exchange</td>  </tr>  <tr>
<td className="">(vi)</td>
<td>the manufacture of aerodynamic separation nozzles or vortex tubes for use in isotopic separation processes</td>  </tr>  <tr>
<td className="">(vii)</td>
<td>the manufacture or assembly of uranium plasma generation systems</td>  </tr>  <tr>
<td className="">(viii)</td>
<td>the manufacture of zirconium tubes</td>  </tr>  <tr>
<td className="">(ix)</td>
<td>the manufacture or upgrading of heavy water or deuterium</td>  </tr>  <tr>
<td className="">(x)</td>
<td>the manufacture of nuclear grade graphite, having a purity level better than 5 parts per million boron equivalent and with a density greater than 1.50 g/cm<sup>3</sup></td>  </tr>  <tr>
<td className="">(xi)</td>
<td>the manufacture of flasks for the transportation and/or storage of irradiated fuel</td>  </tr>  <tr>
<td className="">(xii)</td>
<td>the manufacture of reactor control rods</td>  </tr>  <tr>
<td className="">(xiii)</td>
<td>the manufacture of criticality safe (e.g. small diameter, annular or slab) tanks and vessels.</td>  </tr>  <tr>
<td className="">(xiv)</td>
<td>the manufacture of irradiated fuel element chopping machines</td>  </tr>  <tr>
<td className="">(xv)</td>
<td>the construction of hot cells, meaning a cell or interconnected cells outfitted with equipment for remote operations, totalling at least 6 m<sup>3</sup> in volume, and with shielding equal to or greater than the equivalent of 0.5 m of concrete with a density of 3.2 g/cm<sup>3</sup> or greater</td>  </tr>  </table>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appB"></div>
<h2 id="appB">Appendix B: List of Nuclear Fuel Cycle-Related Research and Development Activities</h2>  <p>For the purposes of facilitiating Canada&#39;s compliance with its safeguards agreements, certain nuclear fuel cycle-related research and development activities shall be reported to the Canadian Nuclear Safety Commission (see <a href="#sec8-4">section 8.4</a>). Nuclear fuel cycle-related research and development activities are defined in Article 18(a) of the Additional Protocol [3] as those activities which are specifically related to any process or system development aspect of any of the following:</p>
<ul>
<li>conversion of nuclear material</li>
<li>enrichment of nuclear material</li>
<li>nuclear fuel fabrication</li>
<li>reactors</li>
<li>critical facilities</li>
<li>reprocessing of nuclear fuel</li>
<li>processing (not including repackaging or conditioning not involving the separation of elements, for storage or disposal) of intermediate or high-level waste containing plutonium, high enriched uranium or uranium-233</li>
</ul>  <p>Note that this does not include activities related to:</p>
<ul>
<li>theoretical or basic scientific research</li>
<li>research and development on industrial radioisotope applications, medical, hydrological and agricultural applications, health and environmental effects, and improved maintenance</li>
</ul>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appC"></div>
<h2 id="appC">Appendix C: Guidance on Materials Not Subject to Safeguards</h2>  <p>The Canadian Nuclear Safety Commission (CNSC) considers that the following substances are material in a non-nuclear end use form from which the uranium, plutonium-239 and thorium is practicably irrecoverable, and as such, are not subject to safeguards. Note that this list is representative and not exhaustive.</p>
<ul>
<li>thorium in lantern mantles, welding rods, light bulbs, lenses or optical components, and electronic components</li>
<li>natural uranium, depleted uranium or thorium as a minor constituent in an alloy which is not being used for its nuclear properties</li>
<li>natural uranium, depleted uranium or thorium used as a colorant, pigment, stain or glaze</li>
<li>nuclear material as contamination at activity concentrations equal to or less than the exemption quantities listed in column 2 of Schedule 1 of the <a href="http://laws.justice.gc.ca/eng/regulations/sor-2000-207/page-1.html"><em>Nuclear Substances and Radiation Devices Regulations</em></a></li>  <p>For material in non-nuclear end use forms not listed above, please contact the CNSC for guidance on safeguards reporting.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appD"></div>
<h2 id="appD">Appendix D: Nuclear Material Accountancy Reference Tables</h2>  <p>This section contains the following reference tables:</p>   <p>D1: Reporting frequency for nuclear material accountancy reports</p>  <p>D2: Labels and data elements used in nuclear material accountancy reports</p>  <p>D3: Inventory change codes</p>  <p>D4: Material description codes</p>  <p>D5: Element and isotope codes</p>  <p>D6: Measurement basis codes</p>
<table className="table table-striped">  <caption className="text-left"><strong>Table D1: Reporting frequency for nuclear material accountancy reports</strong></caption>  <tr>
<th className="text-center text-center" rowspan="2">Report type</th>
<th className="text-center" colSpan="2">Group 1 material</th>
<th className="text-center text-center" rowspan="2">Group 2 material</th>  </tr>  <tr>
<th className="text-center">1A</th>
<th className="text-center">1B</th>  </tr>  <tr>
<td className="text-center">Inventory change document (ICD)</td>
<td colSpan="3">Next business day following the inventory change<sup id="fnb1-ref"><a className="fn-lnk" href="#fnb1"><span className="wb-inv">Footnote </span>1</a></sup></td>  </tr>  <tr>
<td className="text-center">General ledger</td>
<td>For facilities: By the seventh business day after the end of the reporting month, only in months in which an inventory change occurred</td>
<td className="text-center">Not required</td>
<td className="text-center">Not required</td>  </tr>   <tr>
<td className="text-center">Split general ledger (for months in which a physical inventory taking  [PIT] occurs but where the PIT date is not the end of the month)</td>
<td><p>For facilities: First report: by the seventh business day after a PIT is conducted, only if an inventory change occurred in the period between the beginning of the month and the PIT date</p>
<p>For facilities: Second report: by the seventh business day after the end of the reporting month, only if an inventory change occurred in the period between the PIT date and the end of the month</p></td>
<td className="text-center">Not required</td>
<td className="text-center">Not required</td>  </tr>  <tr>
<td className="text-center">List of inventory items</td>
<td>Required to be submitted by the seventh business day after a PIT, or upon the CNSC&#39;s request</td>
<td>Upon request by the Canadian Nuclear Safety Commission (CNSC)</td>
<td className="text-center">Not required</td>  </tr>  <tr>
<td className="text-center">Physical-KMP inventory summary</td>
<td>Required to be submitted by seventh business day after a PIT</td>
<td className="text-center">Not required</td>
<td>Not required</td>  </tr>  <tr>
<td className="text-center">Obligated material inventory summary</td>
<td colSpan="3">Annually on January 31 for any year in which foreign-obligated material was possessed, and upon the CNSC&#39;s request</td>  </tr>  <tr>
<td className="text-center">Reconciliation statement</td>
<td>Required to be submitted by the seventh business day after a PIT</td>
<td className="text-center">Not required</td>
<td>Not required</td>  </tr>  </table>  <br />
<table id="appD-D2" className="width-100">  <caption className="text-left"><strong>Table D2: Labels and data elements used in nuclear material accountancy reports</strong></caption>  <tr>
<th className="text-center text-center">Label</th>
<th className="text-center text-center">Data element</th>
<th className="text-center text-center">Applicable reports</th>
<th className="text-center text-center">Description<sup id="fnb2-ref"><a className="fn-lnk" href="#fnb2"><span className="wb-inv">Footnote </span>2</a></sup></th>   </tr>  <tr>
<td className=" text-center text-center">N/A</td>
<td className="text-center text-center">Report type</td>
<td className="text-center text-center">Inventory change document (ICD)</td>
<td>Enter the report type for the inventory change; there are six options: internal, domestic, import, export, retransfer, and from holding account.</td>  </tr>  <tr>
<td className=" text-center text-center">N/A</td>
<td className="text-center text-center">Licensee reference no.</td>
<td className="text-center text-center">ICD, Physical-key measurement point inventory summary (P-KMPIS)</td>
<td className="text-center">Optionally enter a licensee reference number.</td>  </tr>  <tr>
<td className=" text-center text-center">N/A</td>
<td className="text-center text-center">Location identification  (LOC ID)</td>
<td className="text-center text-center">ICD</td>
<td>If applicable, enter the LOC ID provided by the Canadian Nuclear Safety Commission (CNSC).</td>  </tr>  <tr>
<td className=" text-center text-center">N/A</td>
<td className="text-center text-center">Tracking identifier</td>
<td className="text-center text-center">ICD</td>
<td>Enter tracking identifier provided by the CNSC when reporting exempted/de-exempted material.</td>  </tr>  <tr>
<td className=" text-center text-center">N/A</td>
<td className="text-center text-center">Facility name</td>
<td className="text-center text-center">General ledger (GL), list of inventory items (LII), obligated material inventory summary (OMIS), reconciliation statement (RS)</td>
<td className="text-center">Enter the facility name.</td>  </tr>  <tr>
<td className=" text-center text-center">N/A</td>
<td className="text-center text-center">Revision date</td>
<td className="text-center text-center">GL, LII, OMIS, RS</td>
<td>Enter the date the report is first issued or is revised.</td>  </tr>  <tr>
<td className="text-center text-center">015</td>
<td className="text-center text-center">Reporting period/date</td>
<td className="text-center text-center">GL, LII, P-KMPIS, OMIS, RS</td>
<td><p><strong>GL:</strong><br />
1. FROM: the date of the first day of the ledger, usually the first day of the month<br />
2. TO: the date of the last day of the period, usually the last day of the month</p>
<p>(If a physical inventory taking (PIT) is conducted on any day other than the last of the month, split GLs are required, one covering the period from the 1st of month to the PIT date, and one covering the day after the PIT date to the last of the month.)</p>
<p><strong>LII, P-KMPIS, and RS:</strong><br />
Enter the PIT date.</p>
<p><strong>OMIS:</strong><br />
1. FROM: the first day of the calendar year and<br />
2. TO: the last day of the calendar year</p></td>  </tr>  <tr>
<td className="text-center text-center">207</td>
<td className="text-center text-center">Facility code</td>
<td className="text-center text-center">GL, LII, OMIS, RS</td>
<td>Enter the appropriate code for the reporting facility or location outside facility; codes are available on the <a href="http://www.nuclearsafety.gc.ca/">CNSC website</a>.</td>  </tr>  <tr>
<td className="text-center text-center">307</td>
<td className="text-center text-center">Material balance area (MBA) code</td>
<td className="text-center text-center">GL, LII, P-KMPIS, OMIS, RS</td>
<td>Enter the appropriate code for the reporting facility or location outside facility; codes are available on the <a href="http://www.nuclearsafety.gc.ca/">CNSC website</a>.</td>  </tr>  <tr>
<td className="text-center text-center">309</td>
<td className="text-center text-center">Entry status</td>
<td className="text-center text-center">ICD, P-KMPIS</td>
<td>Use "N" for a new report, "C" to correct a previous report, and "D" to delete a previous report.<br />
<strong>ICD:</strong><br />
Use "U" when reporting the following inventory change codes: L+, L-, R+ and R-.</td>  </tr>  <tr>
<td className="text-center text-center">370</td>
<td className="text-center text-center">MBA/country code/facility code from</td>
<td className="text-center text-center">ICD, GL</td>
<td><p>Enter the code for the shipping MBA for domestic transfers and the country code for imports. For domestic shippers who do not have an MBA code, enter "NA".</p>
<p>Codes are available on the <a href="http://www.nuclearsafety.gc.ca/">CNSC website</a>.</p>
<p><strong>ICD:</strong><br />
The facility code is optional (foreign facility codes are provided by the CNSC).</p></td>  </tr>  <tr>
<td className="text-center text-center">372</td>
<td className="text-center text-center">MBA/country code/facility code to</td>
<td className="text-center text-center">ICD, GL</td>
<td><p>Enter the code for the receiving MBA for domestic transfers and the country code for exports; for an internal inventory change, enter the MBA reporting the change; for domestic receivers who do not have an MBA code, enter "NA".</p>
<p>Codes are available on the <a href="http://www.nuclearsafety.gc.ca/">CNSC website</a>.</p>
<p><strong>ICD:</strong><br />
The facility code is optional (foreign facility codes are provided by the CNSC).</p></td>  </tr>  <tr>
<td className="text-center text-center">407</td>
<td className="text-center text-center">Key measurement point (KMP) code</td>
<td className="text-center text-center">ICD, GL, LII, P-KMPIS</td>
<td><p>For this label there are two fields to complete, one for the shipper and one for the receiver; flow-KMP and physical-KMP codes are specified in the design information for facilities and locations outside facilities. In all other cases, codes are provided by the CNSC.</p>
<p><strong>ICD:</strong><br />
Enter the appropriate code:
<ol>
<li>For transfers between MBAs, the shipper enters their flow-KMP code under the shipper&#39;s name and the receiver enters their flow-KMP code under the receiver&#39;s name. The shipper/receiver also enters the physical-KMP code for transfers involving the Canada location outside facility. Such entities are listed on the <a href="http://www.nuclearsafety.gc.ca/">CNSC website</a>.</li>
<li>For internal inventory changes, enter the flow-KMP in the internal/receiver field, and</li>
<li>For movements of Group 1B or Group 2 material, use "2" for the shipper and "1" for the receiver.</li>
</ol></p>
<p><strong>LII:</strong><br />
Enter the physical-KMP code where the item resides at the date of the PIT.</p>
<p><strong>P-KMPIS:</strong><br />
List each physical-KMP for the reporting MBA.</p></td>  </tr>  <tr>
<td className="text-center text-center">411</td>
<td className="text-center text-center">Inventory change code</td>
<td className="text-center text-center">ICD, GL</td>
<td><p>For shipments/receipts, the shipper and receiver each enter the applicable inventory change code, in the appropriate field.</p>
<p>For internal inventory changes, the initiating MBA enters the applicable code in the receiver&#39;s field.</p>
<p>Inventory change codes are listed in Table D3.</p></td>  </tr>  <tr>
<td className="text-center text-center">412</td>
<td className="text-center text-center">Shipped date and internal/received date</td>
<td className="text-center text-center">ICD, GL</td>
<td><p>Enter the date on which the inventory change occurred or was established.</p>
<p><strong>ICD:</strong><br />
Use the internal/receiver field when reporting internal inventory changes.</p></td>  </tr>  <tr>
<td className="text-center text-center">430</td>
<td className="text-center text-center">Material description code (MDC)</td>
<td className="text-center text-center">ICD, LII, P-KMPIS</td>
<td>This label consists of a four character code indicating the physical and chemical form, type of container, and irradiation status of the material. Enter the code using Table D4; each batch can have only one MDC.</td>  </tr>  <tr>
<td className="text-center text-center">436</td>
<td className="text-center text-center">Chemical and physical description</td>
<td className="text-center text-center">ICD</td>
<td>Enter a textual description of the batch of material (maximum 100 characters).</td>  </tr>  <tr>
<td className="text-center text-center">446</td>
<td className="text-center text-center">Batch name (internal/receiver inventory changes)</td>
<td className="text-center text-center">ICD, GL, P-KMPIS</td>
<td><p>Enter the batch name in alphanumeric format (up to 16 characters).</p>
<p><strong>ICD and GL:</strong><br />
This label is used for reporting batch names related to receipts and internal inventory changes. When reporting a receipt, the batch name can be either one assigned by the receiver or the same one used by the shipper as reported in label 447. If the inventory change code in label 411 is "DI" (shipper/receiver difference), and the batch name is the same as that reported in label 446 for the original ICD receipt.</p>
<p><strong>P-KMPIS:</strong><br />
For each physical-KMP, enter batch names covering all material present at the time of a PIT.</p></td>  </tr>  <tr>
<td className="text-center text-center">447</td>
<td className="text-center text-center">Shipper&#39;s batch name (shipper inventory changes)</td>
<td className="text-center text-center">ICD, GL</td>
<td>The batch name is entered in alphanumeric format, up to a maximum of 16 characters. This label is used for reporting batch names related to shipments. For imports, enter the foreign shipper&#39;s batch name or enter the keyword "unknown".</td>  </tr>  <tr>
<td className="text-center text-center">469</td>
<td className="text-center text-center">Measurement basis code</td>
<td className="text-center text-center">ICD, LII, P-KMPIS</td>
<td>Enter the appropriate measurement basis code to describe where the mass has been determined, and whether or not it has been reported previously. Measurement basis codes are listed in Table D6.</td>  </tr>  <tr>
<td className="text-center text-center">470</td>
<td className="text-center text-center">Number of items</td>
<td className="text-center text-center">ICD, GL, LII, P-KMPIS</td>
<td><p><strong>ICD and GL:</strong><br />
Enter the number of items involved in the inventory change.</p>
<p><strong>LII:</strong><br />
If more than one item is included on the line entry, enter the total number. In the case of bulk material, and generally when a number would not be meaningful, the number "1" should be placed in label 470. The label cannot be left blank.</p>
<p><strong>P-KMPIS:</strong><br />
Enter the total number of items for each batch of items.</p></td>  </tr>  <tr>
<td className="text-center text-center">610</td>
<td className="text-center text-center">Element weight &ndash; natural uranium</td>
<td className="text-center text-center">ICD, GL, LII, P-KMPIS, OMIS, RS</td>
<td><p>Report the element weight of each category of nuclear material in the item or batch, with not less than one decimal place and up to six decimal places.</p>
<p><strong>ICD:</strong><br />
Enter the element weight of the item or batch, subdivided by countries of origin if applicable (see label 2003).</p>
<p><strong>LII:</strong><br />
Enter the element weights of individual items.</p>
<p><strong>P-KMPIS:</strong><br />
Enter the element weight for each batch.</p>
<p><strong>RS:</strong><br />
Enter the element weights for BE, taken from the ending balance of the GL, which ends on the PIT date, and the element weights for the physical ending inventory (PE), taken from the totals of each element as reported on the P-KMPIS or LII.</p>
<p><strong>OMIS:</strong><br />
Enter the opening and ending balances for each element by country of obligation.</p></td>  </tr>  <tr>
<td className="text-center text-center">620</td>
<td className="text-center text-center">Element weight &ndash; depleted uranium</td>
<td className="text-center text-center">ICD, GL, LII, P-KMPIS, OMIS, RS</td>
<td>See description for label 610.</td>  </tr>  <tr>
<td className="text-center text-center">630</td>
<td className="text-center text-center">Element weight &ndash; enriched uranium</td>
<td className="text-center text-center">ICD, GL, LII, P-KMPIS, OMIS, RS</td>
<td>See description for label 610.</td>  </tr>  <tr>
<td className="text-center text-center">640, 660,<br />670</td>
<td className="text-center text-center">Isotope weight &ndash; enriched uranium</td>
<td className="text-center text-center">ICD, GL, LII, P-KMPIS, OMIS, RS</td>
<td><p>Report the isotope weight of each category of nuclear material in the item or batch, with not less than one decimal place and up to six decimal places.</p>
<p><strong>ICD:</strong><br />
Enter the isotope weight of the item or batch, subdivided by countries of origin if applicable (see label 2003).</p>
<p><strong>LII:</strong><br />
Enter the isotope weights of individual items on the LII.</p>
<p><strong>P-KMPIS:</strong><br />
Enter the isotope weight for each batch.</p>
<p><strong>RS:</strong><br />
Enter the element weights for BE, taken from the ending balance of the GL, which ends on the PIT date, and the element weights for PE, taken from the totals of each element as reported on the P-KMPIS or LII.</p>
<p><strong>OMIS:</strong><br />
Enter the opening and ending balances for each element by country of obligation.</p></td>  </tr>  <tr>
<td className="text-center text-center">700</td>
<td className="text-center text-center">Element weight &ndash; plutonium</td>
<td className="text-center text-center">ICD, GL, LII, P-KMPIS, OMIS, RS</td>
<td>See description for label 610.</td>  </tr>  <tr>
<td className="text-center text-center">800</td>
<td className="text-center text-center">Element weight &ndash; thorium</td>
<td className="text-center text-center">ICD, GL, LII, P-KMPIS, OMIS, RS</td>
<td>See description for label 610.</td>  </tr>  <tr>
<td className="text-center text-center">1000</td>
<td className="text-center text-center">Line number</td>
<td className="text-center text-center">GL</td>
<td>Number each line entry consecutively with an integer. The first line number is "0" (zero) and the opening balance is reported on that line. The ending balance for the reporting period is reported on the last line.</td>  </tr>  <tr>
<td className="text-center text-center">1001</td>
<td className="text-center text-center">Item identification (item ID)</td>
<td className="text-center text-center">LII</td>
<td>Enter the item ID for individual items. For example, bundle serial number, drum number, or source serial number.</td>  </tr>  <tr>
<td className="text-center text-center">1002</td>
<td className="text-center text-center">Corrections &ndash; previous date</td>
<td className="text-center text-center">GL</td>
<td>For corrections, enter the date that the ICD being corrected was originally reported or the date of the most recent correction to it.</td>  </tr>  <tr>
<td className="text-center text-center">1003</td>
<td className="text-center text-center">Corrections &ndash; line number</td>
<td className="text-center text-center">GL</td>
<td>In the case of corrections, enter the line number of the general ledger on which the original ICD, or the most recent correction to it, was reported.</td>  </tr>  <tr>
<td className="text-center text-center">1004</td>
<td className="text-center text-center">Comments/remarks</td>
<td className="text-center text-center">ICD, GL, LII, P-KMPIS, OMIS</td>
<td>Enter any additional information to explain or assist in identifying the batch or items reported, as applicable. Use a maximum of 2000 characters.</td>  </tr>  <tr>
<td className="text-center text-center">1006</td>
<td className="text-center text-center">Element code</td>
<td className="text-center text-center">ICD, GL, LII, P-KMPIS</td>
<td>Enter the appropriate element code for the material on the report, from Table D5.</td>  </tr>  <tr>
<td className="text-center text-center">1020</td>
<td className="text-center text-center">Safeguards status</td>
<td className="text-center text-center">ICD, P-KMPIS</td>
<td>Enter the safeguards status of the material. Label 1020 has 4 options: "1A" for Group 1A material, "2" for Group 2 material, "Exempt U" for material exempted from safeguards under Article 36 of the Safeguards Agreement, and "Exempt Q" for material exempted from safeguards under Article 37 of the Safeguards Agreement.</td>  </tr>  <tr>
<td className="text-center text-center">1021</td>
<td className="text-center text-center">Correction/report revision no.</td>
<td className="text-center text-center">ICD, GL, LII, P-KMPIS, OMIS, RS</td>
<td>Enter "0" for original reports and increase the number by 1 for each subsequent report.</td>  </tr>  <tr>
<td className="text-center text-center">1023</td>
<td className="text-center text-center">Units</td>
<td className="text-center text-center">ICD, GL, LII, P-KMPIS</td>
<td>Enter the appropriate weight unit for the element/isotope reported. Units for reporting shall be in grams for enriched uranium (both element and isotope weights) and plutonium, and in kilograms for natural uranium and thorium, and depleted uranium.</td>  </tr>  <tr>
<td className="text-center text-center">1024</td>
<td className="text-center text-center">Isotope code</td>
<td className="text-center text-center">ICD, GL, LII, P-KMPIS</td>
<td>Enter the appropriate isotope code for the material on the report, from Table D5. Isotope codes are only reported for enriched uranium.</td>  </tr>  <tr>
<td className="text-center text-center">1025</td>
<td className="text-center text-center">Unique identifier (optional)</td>
<td className="text-center text-center">ICD, GL, LII</td>
<td>Optionally enter batch or item identification information such as the lot number or storage location. This data is intended to supplement that supplied under labels 446, 447 or 1001. Use a maximum of 20 characters.</td>  </tr>  <tr>
<td className="text-center text-center">1027</td>
<td className="text-center text-center">Shipper company</td>
<td className="text-center text-center">ICD</td>
<td>Enter the company name, contact name and address of the shipper.</td>  </tr>  <tr>
<td className="text-center text-center">1028</td>
<td className="text-center text-center">Internal/receiver company</td>
<td className="text-center text-center">ICD, P-KMPIS</td>
<td><p>Enter the company name and contact name.</p>
<p><strong>ICD:</strong><br />
Additionally enter address of receiver or the initiator of an internal inventory change.</p></td>  </tr>  <tr>
<td className="text-center text-center">1030</td>
<td className="text-center text-center">Element weight balance</td>
<td className="text-center text-center">GL</td>
<td>On line 0, enter the opening balance of the element weight, which is the ending balance of the previous GL period. Beginning on line 1, enter the running element weight balance. This balance may be reported to a maximum of six decimal places. On the last line of the ledger, enter the ending balance of the element weight in the MBA for the reported period.</td>  </tr>  <tr>
<td className="text-center text-center">1031</td>
<td className="text-center text-center">Isotope weight balance</td>
<td className="text-center text-center">GL</td>
<td>On line 0, enter the opening balance of the isotope weight, which is the ending balance of the previous GL period. Beginning on line 1, enter the running isotope weight balance. This balance may be reported to a maximum of six decimal places. On the last line of the ledger, enter the ending balance of the isotope weight in the MBA for the reported period.</td>  </tr>  <tr>
<td className="text-center text-center">1032</td>
<td className="text-center text-center">Element weight &ndash; natural uranium concentrate</td>
<td className="text-center text-center">ICD, OMIS</td>
<td>See description for label 610.</td>  </tr>  <tr>
<td className="text-center text-center">1634</td>
<td className="text-center text-center">Element weight &ndash; thorium concentrate</td>
<td className="text-center text-center">ICD, OMIS</td>
<td>See description for label 610.</td>  </tr>  <tr>
<td className="text-center text-center">2001</td>
<td className="text-center text-center">Export licence number</td>
<td className="text-center text-center">ICD</td>
<td>Enter the full CNSC export licence (e.g., EL-A1-1234.1/2015) under which the export of nuclear material has been authorized, or the CNSC letter of consent number when reporting a transfer of nuclear material from a holding account. In cases involving holding accounts, it is also necessary to enter the abbreviation “HA” (holding account) in label 411, and to enter the code for the holding account from which the transfer was made in label 2005.</td>  </tr>  <tr>
<td className="text-center text-center">2002</td>
<td className="text-center text-center">Import licence number</td>
<td className="text-center text-center">ICD</td>
<td>Enter the full CNSC import licence (e.g., IL-A1-1234.1/2015) under which an import of nuclear material has been authorized.</td>  </tr>  <tr>
<td className="text-center text-center">2003</td>
<td className="text-center text-center">Country of origin code</td>
<td className="text-center text-center">ICD</td>
<td>Enter the country where the nuclear material was mined or created, on the report. For multiple countries of origin, enter only one country of origin on each line of the form. Country codes are available on the <a href="http://www.nuclearsafety.gc.ca/">CNSC website</a>.</td>  </tr>  <tr>
<td className="text-center text-center">2004</td>
<td className="text-center text-center">Obligated material &ndash; country code</td>
<td className="text-center text-center">ICD, OMIS</td>
<td>Enter country codes for countries of obligation for the material being reported, if any. For imports or exports, such codes are provided by the CNSC, while for domestic transfers, such codes are provided by the licensee. If the material has no foreign obligations, this field and the obligated weight fields (labels 2006, 2007) are left blank.</td>  </tr>  <tr>
<td className="text-center text-center">2005</td>
<td className="text-center text-center">Holding account code</td>
<td className="text-center text-center">ICD</td>
<td>Enter the applicable holding account code where nuclear material is exported to or transferred from. Holding account codes are available on the <a href="http://www.nuclearsafety.gc.ca/">CNSC website</a>.</td>  </tr>  <tr>
<td className="text-center text-center">2006</td>
<td className="text-center text-center">Obligated material &ndash; element weight</td>
<td className="text-center text-center">ICD</td>
<td>Enter the element weight for each foreign obligation code entered in label 2004. For unobligated and Canadian material, this field is left blank.</td>  </tr>  <tr>
<td className="text-center text-center">2007</td>
<td className="text-center text-center">Obligated material &ndash; isotope weight</td>
<td className="text-center text-center">ICD</td>
<td>Enter the isotope weight for each foreign obligation code provided in label 2004. For unobligated and Canadian material, this field is left blank.</td>  </tr>  </table>  <br />
<table id="appD-D3" className="width-100">  <caption className="text-left"><strong>Table D3: Inventory Change Codes</strong></caption>  <tr>
<th className="text-center text-center">Keyword</th>
<th className="text-center text-center">Code</th>
<th className="text-center text-center">Explanation</th>
<th>Internal Inventory Change?</th>
<th>Applicable Material Groups</th>  </tr>  <tr>
<td className="text-center text-center">Accidental gain</td>
<td className="text-center text-center">GA</td>
<td>Nuclear material unexpectedly found to be present in the Material Balance Area (MBA). GA cannot be used for material unexpectedly detected in the course of a Physical Inventory Taking (PIT) &ndash; in that case, the found material must be reported as ID.</td>
<td className="text-center text-center">Yes</td>
<td className="text-center text-center">Group 1A</td>  </tr>  <tr>
<td className="text-center text-center">Accidental loss</td>
<td className="text-center text-center">LA</td>
<td>	Irreversible and inadvertent loss of a known quantity of nuclear material. LA cannot be used for material unexpectedly found to be missing in the course of a PIT – in that case, the missing material must be reported as inventory difference (ID).</td>
<td className="text-center text-center">Yes</td>
<td className="text-center text-center">Group 1A</td>  </tr>  <tr>
<td className="text-center text-center">Category change</td>
<td className="text-center text-center">DE<br />
DN<br />
ED<br />
EN<br />
ND<br />
NE</td>
<td>Quantity of uranium that has changed category as a result of blending, enrichment, depletion, or burn-up. The first letter denotes the original category, the second letter the resulting category: (E = enriched, N = natural, D = depleted uranium).</td>
<td className="text-center text-center">Yes</td>
<td className="text-center text-center">Group 1A</td>  </tr>  <tr>
<td className="text-center text-center">De-exemption quantity</td>
<td className="text-center text-center">DQ</td>
<td>Reapplication of safeguards on Group 1B material previously exempted from safeguards under Article 37 of the Safeguards Agreement.</td>
<td className="text-center text-center">Yes</td>
<td className="text-center text-center">Group 1B</td>  </tr>  <tr>
<td className="text-center text-center">De-exemption use</td>
<td className="text-center text-center">DU</td>
<td>Reapplication of safeguards on Group 1B material previously exempted from safeguards under Article 36 of the Safeguards Agreement.</td>
<td className="text-center text-center">Yes</td>
<td className="text-center text-center">Group 1B</td>  </tr>  <tr>
<td className="text-center text-center">Exemption quantity</td>
<td className="text-center text-center">EQ</td>
<td>Exemption of Group 1A material from safeguards under Article 37 of the Safeguards Agreement. This code can only be used with advance permission from the Canadian Nuclear Safety Commission (CNSC) and the International Atomic Energy Agency (IAEA), obtained by submitting the form found on the <a hef="http://www.nuclearsafety.gc.ca/">CNSC website</a>.</td>
<td className="text-center text-center">Yes</td>
<td className="text-center text-center">Group 1A</td>  </tr>  <tr>
<td className="text-center text-center">Exemption use</td>
<td className="text-center text-center">EU</td>
<td>	Exemption of Group 1A material from safeguards under Article 36 of the Safeguards Agreement. This code can only be used with advance permission from the CNSC and IAEA, obtained by submitting the form found on the C<a href="http://www.nuclearsafety.gc.ca/">CNSC website</a>.</td>
<td className="text-center text-center">Yes</td>
<td className="text-center text-center">Group 1A</td>  </tr>  <tr>
<td className="text-center text-center">Measured discard</td>
<td className="text-center text-center">LD</td>
<td>	Loss of a measured or estimated quantity of nuclear material that has been consumed or disposed of in such a way that it is not suitable for further nuclear use.</td>
<td className="text-center text-center">Yes</td>
<td className="text-center text-center">Group 1A</td>  </tr>  <tr>
<td className="text-center text-center">Nuclear loss</td>
<td className="text-center text-center">LN</td>
<td>Consumption of nuclear material due to its transformation into other elements or isotopes as a result of nuclear reactions.</td>
<td className="text-center text-center">Yes</td>
<td className="text-center text-center">Group 1A</td>  </tr>  <tr>
<td className="text-center text-center">Nuclear production</td>
<td className="text-center text-center">NP</td>
<td>Production of plutonium-239 or uranium-233 in a nuclear reactor.</td>
<td className="text-center text-center">Yes</td>
<td className="text-center text-center">Group 1A</td>  </tr>  <tr>
<td className="text-center text-center">Receipt domestic</td>
<td className="text-center text-center">RD</td>
<td>A receipt of nuclear material from a domestic shipper.</td>
<td className="text-center text-center">No</td>
<td className="text-center text-center">Group 1,<br />
Group 2</td>  </tr>  <tr>
<td className="text-center text-center">Receipt foreign</td>
<td className="text-center text-center">RF</td>
<td>A receipt of nuclear material imported into Canada.</td>
<td className="text-center text-center">No</td>
<td className="text-center text-center">Group 1A,<br />
Group 2</td>  </tr>  <tr>
<td className="text-center text-center">Receipt at starting point</td>
<td className="text-center text-center">RS</td>
<td>A receipt of nuclear material at the starting point of detailed nuclear material accountancy.</td>
<td className="text-center text-center">Yes</td>
<td className="text-center text-center">Group 1A</td>  </tr>  <tr>
<td className="text-center text-center">Re-batching &ndash; decrease in batch content</td>
<td className="text-center text-center">RM</td>
<td>Quantity by which the batch mentioned in the entry is diminished due to re-batching.</td>
<td className="text-center text-center">Yes</td>
<td className="text-center text-center">Group 1A</td>  </tr>  <tr>
<td className="text-center text-center">Re-batching &ndash; increase in batch content</td>
<td className="text-center text-center">RP</td>
<td>Quantity of material added to the batch mentioned in the entry from another batch due to re-batching.</td>
<td className="text-center text-center">Yes</td>
<td className="text-center text-center">Group 1A</td>  </tr>  <tr>
<td className="text-center text-center">Retained waste &ndash; transfer to</td>
<td className="text-center text-center">TW</td>
<td><p>The transfer of Group 1A material to retained waste, after receipt of approval from the CNSC and IAEA.</p>
<p>Material to be designated as retained waste must contain nuclear material which is unrecoverable, and it must be stored separately from other nuclear material. Material designated as retained waste remains Group 1A material but is not subject to routine IAEA verification and so must not appear on the list of inventory items (LII) or Physical-key measurement point inventory summary (P-KMPIS) for the storing MBA. A separate LII covering only retained waste must be available on CNSC request. Material designated as retained waste cannot be processed or transferred out of the MBA, without first being transferred back from retained waste.</p></td>
<td className="text-center text-center">Yes</td>
<td className="text-center text-center">Group 1A</td>  </tr>  <tr>
<td className="text-center text-center">Retained waste &ndash; transfer from</td>
<td className="text-center text-center">FW</td>
<td>Transfer of material that had been stored as retained waste back to the main Group 1A material inventory. Such material once again becomes subject to routine IAEA verification and so must be included on the LII and P-KMPIS of the storing MBA.</td>
<td className="text-center text-center">Yes</td>
<td className="text-center text-center">Group 1A</td>  </tr>  <tr>
<td className="text-center text-center">Shipment domestic</td>
<td className="text-center text-center">SD</td>
<td>A shipment of nuclear material to a domestic receiver.</td>
<td className="text-center text-center">No</td>
<td className="text-center text-center">Group 1,<br />
Group 2</td>  </tr>  <tr>
<td className="text-center text-center">Shipment foreign</td>
<td className="text-center text-center">SF</td>
<td>An export of nuclear material out of Canada.</td>
<td className="text-center text-center">No</td>
<td className="text-center text-center">Group 1A,<br />
Group 2</td>  </tr>  <tr>
<td className="text-center text-center">Shipper-Receiver Difference</td>
<td className="text-center text-center">DI</td>
<td>Difference between the quantity reported by the shipper and the quantity measured by the receiver. DI should only be reported in cases where the shipper and receiver cannot agree on revising the weight of the shipment. Only the receiver can report DI. DI = (shipper&#39;s declared weight) &ndash; (receiver&#39;s measured weight)</td>
<td className="text-center text-center">Yes</td>
<td className="text-center text-center">Group 1A</td>  </tr>  <tr>
<td className="text-center text-center">Termination</td>
<td className="text-center text-center">TU</td>
<td>Termination of safeguards on nuclear material which has been consumed or diluted in such a way that it is no longer useable for any nuclear activity, or has become practicably irrecoverable. This code can only be used with advance permission from the CNSC and IAEA.</td>
<td className="text-center text-center">Yes</td>
<td className="text-center text-center">Group 1A</td>  </tr>  <tr>
<td className="text-center text-center">Positive ID</td>
<td className="text-center text-center">L-</td>
<td>To report a positive ID. In label 309, use "U" when using this code.</td>
<td className="text-center text-center">Yes</td>
<td className="text-center text-center">Group 1A</td>  </tr>  <tr>
<td className="text-center text-center">Negative ID</td>
<td className="text-center text-center">L+</td>
<td>To report a negative ID. Use the absolute value of ID, i.e. enter the negative ID as a positive value on the inventory change document (ICD). In label 309, use "U" when using this code.</td>
<td className="text-center text-center">Yes</td>
<td className="text-center text-center">Group 1A</td>  </tr>  <tr>
<td className="text-center text-center">Rounding</td>
<td className="text-center text-center">R+</td>
<td>To report rounding up. In label 309, use "U" when using this code.</td>
<td className="text-center text-center">Yes</td>
<td className="text-center text-center">Group 1A</td>  </tr>  <tr>
<td className="text-center text-center">Rounding</td>
<td className="text-center text-center">R-</td>
<td>To report rounding down. Use the absolute value, i.e. enter the rounding down as a positive value on the ICD. In label 309, use "U" when using this code.</td>
<td className="text-center text-center">Yes</td>
<td className="text-center text-center">Group 1A</td>  </tr>  </table>  <br />
<table className="table table-striped">
<caption className="text-left"><strong>Table D4: Material description codes</strong></caption>   <tr>
<th className="text-center text-center" colSpan="3">First two characters: Physical and chemical forms</th>  </tr>  <tr>
<th className="text-center text-center">First keyword</th>
<th className="text-center text-center">Second keyword</th>
<th className="text-center text-center">First two characters</th>  </tr>  <tr>
<td className="text-center text-center" rowspan="3">Ceramics</td>
<td className="text-center text-center">Pellets</td>
<td className="text-center text-center">CP</td>  </tr>  <tr>
<td className="text-center text-center">Spheres</td>
<td className="text-center text-center">CS</td>  </tr>  <tr>
<td className="text-center text-center">Other</td>
<td className="text-center text-center">CO</td>  </tr>  <tr>
<td className="text-center text-center" rowspan="5">Fuel</td>
<td className="text-center text-center">Rods, pins</td>
<td className="text-center text-center">ER</td>  </tr>  <tr>
<td className="text-center text-center">Plates</td>
<td className="text-center text-center">EP</td>  </tr>  <tr>
<td className="text-center text-center">Bundles</td>
<td className="text-center text-center">EB</td>  </tr>  <tr>
<td className="text-center text-center">Assemblies</td>
<td className="text-center text-center">EA</td>  </tr>  <tr>
<td className="text-center text-center">Other</td>
<td className="text-center text-center">EO</td>  </tr>  <tr>
<td className="text-center text-center" rowspan="3">Liquid waste</td>
<td className="text-center text-center">Low active</td>
<td className="text-center text-center">WL</td>  </tr>  <tr>
<td className="text-center text-center">Medium active</td>
<td className="text-center text-center">WM</td>  </tr>  <tr>
<td className="text-center text-center">High active</td>
<td className="text-center text-center">WH</td>  </tr>  <tr>
<td className="text-center text-center" rowspan="2">Metal</td>
<td className="text-center text-center">Pure</td>
<td className="text-center text-center">MP</td>  </tr>  <tr>
<td className="text-center text-center">Alloys</td>
<td className="text-center text-center">MA</td>  </tr>  <tr>
<td className="text-center text-center" rowspan="2">Powder</td>
<td className="text-center text-center">Homogeneous</td>
<td className="text-center text-center">PH</td>  </tr>  <tr>
<td className="text-center text-center">Heterogeneous</td>
<td className="text-center text-center">PN</td>  </tr>  <tr>
<td className="text-center text-center">Sealed sources</td>
<td className="text-center text-center">&ndash;</td>
<td className="text-center text-center">QS</td>  </tr>  <tr>
<td className="text-center text-center">Small quantities, samples</td>
<td className="text-center text-center">&ndash;</td>
<td className="text-center text-center">SS</td>  </tr>  <tr>
<td className="text-center text-center" rowspan="2">Scrap</td>
<td className="text-center text-center">Homogeneous</td>
<td className="text-center text-center">SH</td>  </tr>  <tr>
<td className="text-center text-center">Heterogeneous<br />
(cleanouts, clinkers, sludge, fines , other)</td>
<td className="text-center text-center">SN</td>  </tr>  <tr>
<td className="text-center text-center" rowspan="4">Solid waste</td>
<td className="text-center text-center">Hulls</td>
<td className="text-center text-center">AH</td>  </tr>  <tr>
<td className="text-center text-center">Mixed<br />
(plastics, gloves, papers, etc.)</td>
<td className="text-center text-center">AM</td>  </tr>  <tr>
<td className="text-center text-center">Contaminated equipment</td>
<td className="text-center text-center">AC</td>  </tr>  <tr>
<td className="text-center text-center">Other</td>
<td className="text-center text-center">AO</td>  </tr>  <tr>
<td className="text-center text-center" rowspan="3">Solution</td>
<td className="text-center text-center">Nitrate</td>
<td className="text-center text-center">LN</td>  </tr>  <tr>
<td className="text-center text-center">Fluorides</td>
<td className="text-center text-center">LF</td>  </tr>  <tr>
<td className="text-center text-center">Other</td>
<td className="text-center text-center">LO</td>  </tr>  </table>  <br />
<table className="table table-striped">  <tr>
<th className="text-center text-center" colSpan="2">Third character: Container types</th>  </tr>  <tr>
<th className="text-center text-center">Third keyword</th>
<th className="text-center text-center">Third character</th>  </tr>  <tr>
<td className="text-center text-center">Cylinder</td>
<td className="text-center text-center">C</td>  </tr>  <tr>
<td className="text-center text-center">Pack</td>
<td className="text-center text-center">P</td>  </tr>  <tr>
<td className="text-center text-center">Drum</td>
<td className="text-center text-center">D</td>  </tr>  <tr>
<td className="text-center text-center">Discrete fuel units (fuel only)</td>
<td className="text-center text-center">S</td>  </tr>  <tr>
<td className="text-center text-center">Bird cage</td>
<td className="text-center text-center">B</td>  </tr>  <tr>
<td className="text-center text-center">Bottle</td>
<td className="text-center text-center">F</td>  </tr>  <tr>
<td className="text-center text-center">Other</td>
<td className="text-center text-center">O</td>  </tr>  </table>  <br />
<table className="table table-striped">  <tr>
<th className="text-center text-center" colSpan="2">Fourth character: Characterization of material</th>  </tr>  <tr>
<th className="text-center text-center">Fourth keyword</th>
<th className="text-center text-center">Fourth character</th>  </tr>  <tr>
<td className="text-center text-center">Unirradiated material</td>
<td className="text-center text-center">F</td>  </tr>  <tr>
<td className="text-center text-center">Irradiated material</td>
<td className="text-center text-center">I</td>  </tr>  <tr>
<td className="text-center text-center">Retained waste</td>
<td className="text-center text-center">W</td>  </tr>  <tr>
<td className="text-center text-center">Irrecoverable material</td>
<td className="text-center text-center">N</td>  </tr>  <tr>
<td className="text-center text-center">Recoverable material</td>
<td className="text-center text-center">R</td>  </tr>  </table>  <br />
<table className="table table-striped">  <tr>
<th className="text-center text-center" colSpan="2">Special cases</th>  </tr>  <tr>
<th className="text-center text-center">Material type</th>
<th className="text-center text-center">Code</th>  </tr>  <tr>
<td className="text-center text-center">Uranium ore concentrate</td>
<td className="text-center text-center">CONC</td>  </tr>  </table>  <br />
<table className="table table-striped">
<caption className="text-left"><strong>Table D5: Element and isotope codes</strong></caption>   <tr>
<th className="text-center text-center">Element code (label 1006)</th>
<th className="text-center text-center">Element</th>
<th className="text-center text-center">Weight units (label 1023)</th>  </tr>  <tr>
<td colsan="3"><em>Group 1 material</em></td>  </tr>  <tr>
<td className="text-center">N</td>
<td className="text-center">Natural uranium</td>
<td className="text-center">kg</td>  </tr>  <tr>
<td className="text-center">D</td>
<td className="text-center">Depleted uranium</td>
<td className="text-center">kg</td>  </tr>  <tr>
<td>E (uranium enriched in either uranium 235, or uranium 233, or both</td>
<td className="text-center">Enriched uranium</td>
<td className="text-center">g</td>  </tr>  <tr>
<td className="text-center">P</td>
<td className="text-center">Plutonium</td>
<td className="text-center">g</td>  </tr>  <tr>
<td className="text-center">T</td>
<td className="text-center">Thorium</td>
<td className="text-center">kg</td>  </tr>  <tr>
<td colSpan="3"><em>Group 2 material</em></td>  </tr>  <tr>
<td className="text-center">C</td>
<td className="text-center">Natural uranium concentrate</td>
<td className="text-center">kg</td>  </tr>  <tr>
<td className="text-center">TC</td>
<td className="text-center">Thorium concentrate</td>
<td className="text-center">kg</td>  </tr>  <tr>
<th className="text-center text-center">Isotope code (label 1024)</th>
<th className="text-center text-center">Element</th>
<th className="text-center text-center">Weight units (label 1023)</th>  </tr>  <tr>
<td className="text-center">K</td>
<td className="text-center">Enriched &ndash; Uranium-233 content</td>
<td className="text-center">g</td>  </tr>  <tr>
<td className="text-center">J</td>
<td className="text-center">Enriched &ndash; Uranium-233 and Uranium-235 content</td>
<td className="text-center">g</td>  </tr>  <tr>
<td className="text-center">G</td>
<td className="text-center">Enriched &ndash; Uranium-235 content</td>
<td className="text-center">g</td>  </tr>  </table>  <br />
<table className="">   <caption className="text-left"><strong>Table D6: Measurement basis codes</strong></caption>   <tr>
<th>&nbsp;</th>
<th>Mass value for batch<br />
not reported previously<br />
by the reporting<br />
material balance area<br />
(MBA)</th>
<th>Mass value for batch<br />
reported previously by<br />
the reporting MBA</th>  </tr>  <tr>
<th>Mass value based on a<br />
measurement made by<br />
the reporting MBA</th>
<td className="text-center text-center">M</td>
<td className="text-center text-center">T</td>  </tr>  <tr>
<th>Mass value based on<br />
measurement carried<br />
out elsewhere (e.g., at<br />
another MBA)</th>
<td className="text-center text-center">N</td>
<td className="text-center text-center">L</td>  </tr>  </table>  <br />
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="glossary"></div>
<h2 id="glossary">Glossary</h2>  <p>For definitions of terms used in this document, see <a href="http://www.nuclearsafety.gc.ca/pubs_catalogue/uploads/REGDOC-3-6-Glossary-of-CNSC-Terminology-eng.pdf">REGDOC 3.6, <em>Glossary of CNSC Terminology</em></a>.</p>  <p>REGDOC 3.6 includes terms and definitions used in the <a href="http://laws-lois.justice.gc.ca/eng/acts/N-28.3/"><em>Nuclear Safety and Control Act</em></a> (NSCA), the regulations made under the NSCA, and CNSC regulatory documents and other publications. REGDOC 3.6 is provided for reference and information.</p>  <p>The following terms will be added to REGDOC 3.6 following public consultation of this draft regulatory document. Please provide any comments or feedback on the terms and definitions as part of your review of this draft regulatory document.</p>
<dl>
<dt><strong>containment</strong> <em>(confinement)</em></dt>
<dd>Structural features of a facility, containers or equipment used to establish the physical integrity of an area or items and to maintain the continuity of knowledge of the area or items by preventing undetected access to, or movement of, nuclear material, or interference with the items.</dd>
<dt><strong>facility</strong> <em>(installation)</em></dt>
<dd>A reactor, critical facility, conversion plant, fabrication plant, reprocessing plant, isotope separation plant, or a separate storage installation; or any location where nuclear material in amounts greater than 1 effective kilogram is customarily used.</dd>
<dt><strong>International Atomic Energy Agency inspector</strong> <em>(inspecteur de l&#39;Agence internationale de l&#39;énergie atomique)</em></dt>
<dd>An International Atomic Energy Agency (IAEA) officer appointed by the IAEA Director-General and approved by the IAEA Board of Governors to perform safeguards inspections, and accredited by the Government of Canada to perform safeguards inspections in Canada.</dd>
<dt><strong>International Atomic Energy Agency inventory verification</strong> <em>(vérification du stock par l&#39;Agence internationale de l&#39;énergie atomique)</em></dt>
<dd>An inspection activity carried out to confirm that the amount of nuclear material actually present at a given time within a material balance area is in agreement with the operator&#39;s recorded book inventory of nuclear material.</dd>
<dt><strong>International Atomic Energy Agency seal</strong> <em>(sceau de l&#39;Agence internationale de l&#39;énergie atomique)</em></dt>
<dd>A tamper indicating device used to join moveable segments of a containment in a manner such that access to its contents without opening the seal or breaking of the containment is difficult.</dd>
<dt><strong>International Atomic Energy Agency surveillance</strong> <em>(surveillance par l&#39;Agence internationale de l&#39;énergie atomique)</em></dt>
<dd>The collection of information through inspector and/or instrumental observation aimed at detecting movements of nuclear material or other items, and any interference with containment or tampering with International Atomic Energy Agency equipment, samples and data.</dd>
<dt><strong>internal inventory change</strong> <em>(variation interne de stock)</em></dt>
<dd>An inventory change that affects only one material balance area, such as an accidental loss.</dd>
<dt><strong>key measurement point (KMP)</strong> <em>(point de mesure principal [PMP])</em></dt>
<dd>A location where nuclear material appears in such a form that it may be measured to determine material flow or inventory. Key measurement points therefore include, but are not limited to, the inputs and outputs (including measured discards) and storages in material balance areas.</dd>
<dt><strong>licensing basis</strong> <em>(fondement d&#39;autorisation)</em></dt>
<dd><p>A set of requirements and documents for a regulated facility or activity comprising:
<ul>
<li>the regulatory requirements set out in the applicable laws and regulations</li>
<li>the conditions and safety and control measures described in the facility&#39;s or activity&#39;s licence and the documents directly referenced in that licence</li>
<li>the safety and control measures described in the licence application and the documents needed to support that licence application</li>
</ul></p></dd>
<dt><strong>material unaccounted for (MUF)</strong> <em>(différence d&#39;inventaire)</em></dt>
<dd>The difference between book inventory and physical inventory. Also referred to as inventory difference.</dd>
<dt><strong>nuclear material</strong> <em>(matières nucléaires)</em></dt>
<dd>Plutonium-239, uranium-233, uranium enriched in the isotopes of 235 or 233, uranium containing the mixture of isotopes occurring in nature, uranium depleted in the isotope 235, and thorium. The term nuclear material shall not be interpreted as applying to uranium or thorium in ore, ore residue or other naturally-occurring materials.</dd>
<dt><strong>site</strong> <em>(site)</em></dt>
<dd>With respect to safeguards, an area delimited by Canada in the relevant design information for a facility, including a closed-down facility, and in the relevant information on a location outside facilities where nuclear material is customarily used, including a closed-down location outside facilities where nuclear material was customarily used (this is limited to locations with hot cells or where activities related to conversion, enrichment, fuel fabrication or reprocessing were carried out). It shall also include all installations, co-located with the facility or location, for the provision or use of essential services, including: hot cells for processing irradiated materials not containing nuclear material; installations for the treatment, storage and disposal of waste; and buildings associated with specified activities identified by Canada under Article 2.a.(iv) of the <em>Protocol Additional to the Agreement Between Canada and the International Atomic Energy Agency for the Application of Safeguards in Connection with the Treaty on the Non-Proliferation of Nuclear Weapons</em>.</dd>
<dt><strong>source data</strong> <em>(données de base)</em></dt>
<dd>Those data, recorded during measurement or calibration or used to derive empirical relationships, which identify nuclear material and provide batch data. Source data may include, for example, weight of compounds, conversion factors to determine weight of element, specific gravity, element concentration, isotopic ratios, relationship between volume and manometer readings, and relationship between plutonium produced and power generated.</dd>  </dl>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="ref"></div>
<h2 id="ref">References</h2>  <ol>
<li><em>Treaty on the Non-Proliferation of Nuclear Weapons</em> (NPT), United Nations, New York.<br />
<a href="https://www.iaea.org/sites/default/files/publications/documents/infcircs/1970/infcirc140.pdf">iaea.org/sites/default/files/publications/documents/infcircs/1970/infcirc140.pdf</a></li>
<li><em>The text of the Agreement Between the Government of Canada and the Agency for the Application of Safeguards in Connection with the Treaty on the Non-Proliferation of Nuclear Weapons</em> (Safeguards Agreement).<br />
<a href="https://www.iaea.org/publications/documents/infcircs/agreement-between-government-canada-and-international-atomic-energy-agency-application-safeguards-connection-treaty-non-proliferation-nuclear-weapons">iaea.org/publications/documents/infcircs/agreement-between-government-canada-and-international-atomic-energy-agency-application-safeguards-connection-treaty-non-proliferation-nuclear-weapons</a></li>
<li><em>Protocol Additional to the Agreement Between Canada and the International Atomic Energy Agency for the Application of Safeguards in Connection with the Treaty on the Non-Proliferation of Nuclear Weapons</em> (Additional Protocol).<br />   <a href="https://www.iaea.org/sites/default/files/publications/documents/infcircs/1972/infcirc164a1.pdf">iaea.org/sites/default/files/publications/documents/infcircs/1972/infcirc164a1.pdf</a></li>
<li>ASTM International. ASTM-C753 04 <em>Standard Specification for Nuclear-Grade, Sinterable Uranium Dioxide Powder</em>. <a href="http://www.astm.org/cgi-bin/resolver.cgi?C753-04">astm.org/cgi-bin/resolver.cgi?C753-04</a></li>
<li>International Atomic Energy Agency. STR-368, <em>International Target Values 2010 for Measurement Uncertainties in Safeguarding Nuclear Materials</em>.</li>  </ol>
<div className="wb-fnote" role="note">
<section>
<h2 id="endnotes" className="mrgn-tp-md">Footnotes</h2>
<dl>
<dt>Footnote 1</dt>
<dd id="fnb1">
<p>Movements of Group 1B material must be reported to the CNSC on an ICD. However, no such reporting is required when material is transferred temporarily and the ownership of the material does not change. Licensees must, however, keep source data that indicates the location of the nuclear material involved in such transfers.</a></p>
<p className="fn-rtn"><a href="#fnb1-ref"><span className="wb-inv">Return to footnote </span>1<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 2</dt>
<dd id="fnb2">
<p>The following symbols shall not be used when reporting information in labels 015 through 800: colon, forward slash, semi-colon, and number sign (#).</p>
<p className="fn-rtn"><a href="#fnb2-ref"><span className="wb-inv">Return to footnote </span>2<span className="wb-inv"> referrer</span></a></p>
</dd>
</dl>
</section>  </div>  <br />
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<h2>CNSC Regulatory Document Series</h2>
<p>Facilities and activities within the nuclear sector in Canada are regulated by the Canadian Nuclear Safety Commission (CNSC). In addition to the <em>Nuclear Safety and Control Act </em>and associated regulations, these facilities and activities may also be requirements to comply with other&nbsp;regulatory instruments such as regulatory documents or standards.</p>
<p>Effective April 2013, the CNSC&#39;s catalogue of existing and planned regulatory documents has been organized under three key categories and twenty-five series, as set out below. Regulatory documents produced by the CNSC fall under one of the following series:</p>
<ul className="list-bullet-none">
<li><strong>1.0 Regulated facilities and activities</strong></li>
<li>Series 1.1 Reactor facilities
<ul className="list-bullet-none">
<li>1.2 Class IB facilities</li>
<li>1.3 Uranium mines and mills</li>
<li>1.4 Class II facilities</li>
<li>1.5 Certification of prescribed equipment</li>
<li>1.6 Nuclear  substances and radiation devices</li>
</ul>
</li>
<li><strong>2.0 Safety and control areas</strong></li>
<li>Series 2.1 Management system
<ul className="list-bullet-none">
<li>2.2 Human performance management</li>
<li>2.3 Operating performance</li>
<li>2.4 Safety analysis</li>
<li>2.5 Physical design</li>
<li>2.6 Fitness for service</li>
<li>2.7 Radiation protection</li>
<li>2.8 Conventional health and safety</li>
<li>2.9 Environmental protection</li>
<li>2.10 Emergency management and fire protection</li>
<li>2.11 Waste management</li>
<li>2.12 Security</li>
<li>2.13 Safeguards and non-proliferation</li>
<li>2.14 Packaging and transport</li>
</ul>
</li>
<li><strong>3.0 Other regulatory areas</strong></li>
<li>Series 3.1 Reporting requirements
<ul className="list-bullet-none">
<li>3.2 Public and Aboriginal engagement</li>
<li>3.3 Financial guarantees</li>
<li>3.4 Commission proceedings</li>
<li>3.5 CNSC processes and practices</li>
<li>3.6 Glossary of CNSC terminology</li>
</ul>
</li>
</ul>
<p><strong>Note:</strong> The regulatory document series may be adjusted periodically by the CNSC. Each regulatory document series listed above may contain multiple regulatory documents. For the latest list of regulatory documents, visit the <a href="http://www.nuclearsafety.gc.ca/eng/acts-and-regulations/regulatory-documents/index">CNSC&#39;s website</a>.</p>
</div>  <div className="clear"></div>

                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }