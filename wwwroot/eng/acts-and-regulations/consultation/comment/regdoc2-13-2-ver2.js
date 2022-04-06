import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "en",
                pageTitle: "REGDOC-2.13.2, Import and Export, version 2", 
                dateModified: "2017-09-05",
                langToggleUrl: "/fra/acts-and-regulations/consultation/comment/regdoc2-13-2-ver2"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<h2>Preface</h2>  <p>This regulatory document is part of the CNSC&#39;s safeguards and non-proliferation series of regulatory documents, which also covers regulatory controls on import and export of prescribed items. The full list of the CNSC&#39;s series of regulatory document series is included at the end of this document and can also be found on the CNSC&#39;s <a href="/eng/acts-and-regulations/regulatory-documents/index">Regulatory Documents Web page</a>.</p>  <p>Part I of regulatory document REGDOC-2.13.2, <em>Import and Export</em>, sets out the CNSC&#39;s guidance for current and prospective licensees who intend to import or export nuclear and nuclear-related dual-use items, also known as controlled nuclear substances, equipment and information. The latter are identified in Appendix E, which is a copy of the existing schedule of the <a href="http://laws-lois.justice.gc.ca/eng/regulations/SOR-2000-210/index.html"><em>Nuclear Non-proliferation Import and Export Control Regulations</em></a> (NNIECR). The legislation relevant to the import and export of these items is provided, along with an overview of the domestic and international contexts that form the basis of import and export controls for these items. The licensing program is outlined and information is provided on how to apply for a licence and amend an existing licence, and on application processing times.</p>   <p>Part II of regulatory document REGDOC-2.13.2, <em>Import and Export</em>, sets out the CNSC&#39;s guidance for current and prospective licensees who intend to import or export risk-significant radioactive sources (<a href="http://www-pub.iaea.org/MTCD/Publications/PDF/Pub1227_web.pdf">Category 1 and 2 radioactive sources</a>). This guidance supersedes INFO-0791 &ndash; <em>Control of the Export and Import of Risk-Significant Radioactive Sources</em>.</p>  <p>This document examines the type of information the CNSC considers when assessing applications for the import or export of controlled nuclear substances, equipment and information. Further information is also provided for exporters on the end-use control, which allows the CNSC to require exporters to apply for a licence for items that are not otherwise listed in the Appendix E when they may be intended for use in connection with a nuclear weapons program. Finally, the CNSC&#39;s activities to verify and enforce regulatory compliance are considered.</p>  <p>Requirements associated with this document are found in the <a href="http://laws-lois.justice.gc.ca/eng/acts/N-28.3/"><em>Nuclear Safety and Control Act</em></a> (NSCA), the <a href="http://laws-lois.justice.gc.ca/eng/regulations/SOR-2000-202/index.html"><em>General Nuclear Safety and Control Regulations</em></a> (GNSCR) and the Appendix E.</p>
<div className="alert alert-info">
<p><strong>Important note:</strong> Where referenced in a licence either directly or indirectly (such as through licensee-referenced documents), this document is part of the licensing basis for a regulated facility or activity.</p>
<p>The licensing basis sets the boundary conditions for acceptable performance at a regulated facility or activity, and establishes the basis for the CNSC&rsquo;s compliance program for that regulated facility or activity.</p>
<p>Where this document is part of the licensing basis, the word &quot;shall&quot; is used to express a requirement to be satisfied by the licensee or licence applicant. &quot;Should&quot; is used to express guidance or that which is advised. &quot;May&quot; is used to express an option or that which is advised or permissible within the limits of this regulatory document. &quot;Can&quot; is used to express possibility or capability.</p>
<p>Nothing contained in this document is to be construed as relieving any licensee from any other pertinent requirements. It is the licensee&rsquo;s responsibility to identify and comply with all applicable regulations and licence conditions.</p>  </div>
<div className="module-table-contents">  <h2>Table of Contents</h2>
<ul>
<li><a href="#sec1">1. Purpose</a></li>
<li><a href="#sec2">2. Scope</a></li>
<li><a href="#sec3">3. Relevant Legislation</a>
<li><a href="#partI">Part I: Nuclear and Nuclear-Related Dual-Use Items</a></li>
<li><a href="#sec4">4. Program Framework</a>
<ul>
<li><a href="#sec4-1">4.1 Overview</a></li>
<li><a href="#sec4-2">4.2 The domestic context</a></li>
<li><a href="#sec4-3">4.3 The international context</a></li>
</ul></li>
<li><a href="#sec5">5. Licensing Process</a>
<ul>
<li><a href="#sec5-1">5.1 Overview</a></li>
<li><a href="#sec5-2">5.2 How to apply for a CNSC import or export licence</a></li>
<li><a href="#sec5-3">5.3 What import and export licences authorize</a></li>
<li><a href="#sec5-4">5.4 Licence amendments and transfers</a></li>
<li><a href="#sec5-5">5.5 Processing time and service standards</a></li>
<li><a href="#sec5-6">5.6 Non-CNSC export requirements</a></li>
</ul></li>
<li><a href="#sec6">6. Evaluation of Licence Applications</a>
<ul>
<li><a href="#sec6-1">6.1 Receipt of application</a></li>
<li><a href="#sec6-2">6.2 Assessment of application</a></li>
<li><a href="#sec6-3">6.3 Decision of the designated officer</a></li>
</ul></li>
<li><a href="#sec7">7. End-Use Controls for Nuclear-Related Dual-Use Items</a>
<ul>
<li><a href="#sec7-1">7.1 Why end-use controls are necessary</a></li>
<li><a href="#sec7-2">7.2 When end-use controls are applied</a></li>
<li><a href="#sec7-3">7.3 What exporters have to do</a></li>
</ul></li>
<li><a href="#sec8">8. Compliance with CNSC requirements</a>
<ul>
<li><a href="#sec8-1">8.1 How the CNSC verifies compliance</a></li>
<li><a href="#sec8-2">8.2 Disclosure of non-compliance</a></li>
<li><a href="#sec8-3">8.3 Best practices for responsible exporters</a></li>
</ul></li>
<li><a href="#partII">Part II: Risk-Significant Radioactive Sources</a></li>
<li><a href="#sec9">9. Program Framework</a>
<ul>
<li><a href="#sec9-1">9.1 Overview</a></li>
<li><a href="#sec9-2">9.2 The domestic context</a></li>
<li><a href="#sec9-3">9.3 The international context</a></li>
</ul></li>
<li><a href="#sec10">10. Risk-Significant Radioactive Sources</a></li>
<li><a href="#sec11">11. Licensing and Control Process</a>
<ul>
<li><a href="#sec11-1">11.1 Overview</a></li>
<li><a href="#sec11-2">11.2 Export licensing</a></li>
<li><a href="#sec11-3">11.3 Import controls</a></li>
<li><a href="#sec11-4">11.4 How to apply for a CNSC export licence</a></li>
<li><a href="#sec11-5">11.5 Licence amendments and transfers</a></li>
<li><a href="#sec11-6">11.6 Processing time and service standards</a></li>
</ul></li>
<li><a href="#sec12">12. Evaluation and Licence Applications</a>
<ul>
<li><a href="#sec12-1">12.1 Receipt of the application</a></li>
<li><a href="#sec12-2">12.2 Assessment of application</a></li>
<li><a href="#sec12-3">12.3 Decision of the designated officer</a></li>
</ul></li>
<li><a href="#sec13">13. Program Framework</a>
<ul>
<li><a href="#sec13-1">13.1 How the CNSC verifies compliance</a></li>
<li><a href="#sec13-2">13.2 Disclosure of non-compliance</a></li>
</ul></li>
<li><a href="#appA">Appendix A: Examples of Possible Suspicious Inquiries or Orders</a></li>
<li><a href="#appB">Appendix B: Disclosure of Non-Compliance</a></li>
<li><a href="#appC">Appendix C: How to Complete Import and Export Applications for Nuclear and Nuclear-Related Dual-Use Items</a>
<ul>
<li><a href="#appC-1">C.1 Import licence application guidance</a>
<ul>
<li><a href="#appC-1-1">C.1.1 Application form for a licence to import nuclear items</a></li>
</ul></li>
<li><a href="#appC-2">C.2 Export licence appplication guidance</a>
<ul>
<li><a href="#appC-2-1">C.2.1 Application for a licence to export nuclear and nuclear-related dual-use items</a></li>
</ul></li>
</ul></li>
<li><a href="#appD">Appendix D: How to Complete an Export Application for Risk-Significant Radioactive Sources</a>
<ul>
<li><a href="#appD-1">D.1 Export licence appplication guidance</a>
<ul>
<li><a href="#appD-1-1">D.1.1 Application form for a licence to export risk-significant radioactive sources</a></li>
</ul></li>
</ul></li>
<li><a href="#appE">Appendix E: Controlled Nuclear Substances, Equipment and Information</a></li>
<li><a href="#glossary">Glossary</a></li>
<li><a href="#ref">References</a></li>
</ul>  </div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="1"></div>
<h2 id="sec1">1. Purpose</h2>  <p>Part I of REGDOC-2.13.2, <em>Import and Export</em>, sets out the guidance of the Canadian Nuclear Safety Commission (CNSC) for current and prospective licensees who intend to import or export nuclear and nuclear-related dual-use items, also known as controlled nuclear substances, equipment and information.</p>
<p>Part II of REGDOC-2.13.2, <em>Import and Export</em> sets out the guidance of the CNSC for current and prospective licensees who intend to import or export risk-significant radioactive sources (Category 1 and 2 radioactive sources), as set out in International Atomic Energy Agency (IAEA) RS-G-1.9, <em>Categorization of Radioactive Sources</em>.</p>
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
<h2 id="sec2">2. Scope</h2>  <p>This document describes the regulatory and policy basis for the CNSC&rsquo;s import and export control program with respect to nuclear and nuclear-related dual-use items, and to risk-significant radioactive sources (Category 1 and 2 radioactive sources). Information is also provided with respect to:</p>
<ul>
<li>when potential applicants should contact the CNSC</li>
<li>applying for an import or export licence or amending or transferring existing licences</li>
<li>CNSC criteria when evaluating licence applications</li>
<li>the end-use control for nuclear-related dual-use items</li>
<li>how the CNSC verifies compliance with regulatory requirements</li>
<li>controlled nuclear substances, equipment and information</li>
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
<div id="3"></div>
<h2 id="sec3">3. Relevant Legislation</h2>  <p>The provisions of the <a href="http://laws-lois.justice.gc.ca/eng/acts/N-28.3/index.html"><em>Nuclear Safety and Control Act</em></a> (NSCA), the <a href="http://laws-lois.justice.gc.ca/eng/regulations/SOR-2000-202/index.html"><em>General Nuclear Safety and Control Regulations</em></a> (GNSCR) and the <a href="http://laws-lois.justice.gc.ca/eng/regulations/SOR-2000-210/index.html"><em>Nuclear Non-proliferation Import and Export Control Regulations</em></a> (NNIECR) relevant to this document include:</p>
<ol>
<li>paragraph 3(b) of the NSCA, which provides that "The purpose of this Act is to provide for the implementation in Canada of measures to which Canada has agreed respecting international control of the development, production and use of nuclear energy, including the non-proliferation of nuclear weapons and nuclear explosive devices."</li>
<li>subsection 24(5) of the NSCA, which provides that "A licence may contain any term or condition that the Commission considers necessary for the purposes of this Act..."</li>
<li>paragraph 26(a) of the NSCA, which provides that "Subject to the regulations, no person shall, except in accordance with a licence: (a) possess, transfer, import, export, use or abandon a nuclear substance, prescribed equipment or prescribed information."</li>
<li>paragraph 48(c) of the NSCA, which provides that "Every person commits an offence who fails to comply with any condition of a licence."</li>
<li>paragraph 48(d) of the NSCA, which provides that "Every person commits an offence who knowingly makes a false or misleading written or oral statement to the Commission, a designated officer or an inspector."</li>
<li>paragraph 48(k) of the NSCA, which provides that "Every person commits an offence who fails to comply with this Act or any regulation made pursuant to this Act."</li>
<li>section 50 of the NSCA, which provides that "Every person commits an offence who, except as authorized by this Act, possesses a nuclear substance, prescribed equipment or prescribed information that is capable of being used to produce a nuclear weapon or a nuclear explosive device."</li>
<li>subsection 3(2) of the GNSCR, which provides that "Subsection (1) does not apply in respect of an application for a licence to import or export for which the information requirements are prescribed by the Nuclear Non-proliferation Import and Export Control Regulations..."</li>
<li>paragraph 10(b) of the GNSCR, which provides that "Naturally occurring nuclear substances, other than those that have been associated with the development, production or use of nuclear energy, are exempt from the application of all provisions of the Act and the regulations made under the Act except the following... (b) in the case of a nuclear substance listed in the schedule to the <em>Nuclear Non-proliferation Import and Export Control Regulations</em>, the provisions that govern the import and export of nuclear substances."</li>
<li>section 18 of the GNSCR, which provides that "On importing or exporting a nuclear substance, prescribed equipment or prescribed information, the licensee shall present the required import or export licence to a customs officer."</li>
<li>paragraph 20(d) of the GNSCR, which provides that "Each of the following items is prescribed equipment for the purposes of the Act... (d) equipment that is capable of being used in the design, production, operation or maintenance of a nuclear weapon or nuclear explosive device."</li>
<li>paragraph 21(1)(a) of the GNSCR, which provides that "Information that concerns any of the following, including a record of that information, is prescribed information for the purposes of the Act: (a) a nuclear substance that is required for the design, production, use, operation or maintenance of a nuclear explosive device, including the properties of the nuclear substance."</li>
<li>paragraph 21(1)(b) of the GNSCR, which provides that "Information that concerns any of the following, including a record of that information, is prescribed information for the purposes of the Act... (b) the design, production, use, operation or maintenance of a nuclear weapon or nuclear explosive device."</li>
<li>subsection 23(2) of the GNSCR, which provides that "A person who possesses or has knowledge of prescribed information shall take all necessary precautions to prevent any transfer or disclosure of the prescribed information that is not authorized by the Act and the regulations made under the Act."</li>
<li>subsection 1(2) of the NNIECR, which provides that "All controlled nuclear substances are prescribed as nuclear substances for the purpose of paragraph (d) of the definition "nuclear substance" in Section 2 of the Act, with respect to the import and export of those substances."</li>
<li>subsection 1(3) of the NNIECR, which provides that "All controlled nuclear equipment is prescribed equipment for the purposes of the Act, with respect to the import and export of equipment."</li>
<li>subsection 1(4) of the NNIECR, which provides that "All controlled nuclear information is prescribed information for the purposes of the Act, with respect to the import and export of that information, unless it is made public in accordance with the Act, the regulations made under the Act or a licence."</li>
<li>subsection 3(1) of the NNIECR, which provides that "An application for a licence to import or export a controlled nuclear substance, controlled nuclear equipment or controlled nuclear information shall contain the following information:
<ul className="list-bullet-none">
<li>(a) the applicant&rsquo;s name, address and telephone number;</li>
<li>(b) a description of the substance, equipment or information, including its quantity and the number of the paragraph of the schedule in which it is referred to;</li>
<li>(c) the name and address of the supplier;</li>
<li>(d) the country of origin of the substance, equipment or information;</li>
<li>(e) the name, address and, where the application is for a licence to import, telephone number of each consignee;</li>
<li>(f) the intended end-use of the substance, equipment or information by the final consignee and the intended end-use location;</li>
<li>(g) the number of any licence to possess the substance, equipment or information; and</li>
<li>(h) where the application is in respect of a controlled substance that is Category I, II or III nuclear material, as defined in section 1 of the <a href="http://laws-lois.justice.gc.ca/eng/regulations/SOR-2000-209/index.html"><em>Nuclear Security Regulations</em></a>, the measures that will be taken to facilitate Canada&rsquo;s compliance with the <em>Convention on the Physical Protection of Nuclear Material</em>, INFCIRC/274/Rev.1."</li>
</ul></li>
<li>subsection 4(1) of the NNIECR, which provides that "A person may carry on any of the following activities without a licence to carry on that activity:
<ul className="list-bullet-none">
<li>(a) import a controlled nuclear substance referred to in Part B of the schedule that is not a radioactive nuclide;</li>
<li>(b) import controlled nuclear equipment referred to in paragraph A.3 or Part B of the schedule;</li>
<li>(c) import controlled nuclear information that relates to a controlled nuclear substance or controlled nuclear equipment referred to in paragraph A.3 or Part B of the schedule;</li>
<li>(d) import a controlled nuclear substance, controlled nuclear equipment or controlled nuclear information for the purpose of placing it in transit;</li>
<li>(e) export a controlled nuclear substance, controlled nuclear equipment or controlled nuclear information after it has been in transit; or</li>
<li>(f) export the controlled nuclear substance referred to in paragraph A.1.4. of the schedule that is not for use in a nuclear reactor to any Participating Government of the Nuclear Suppliers Group."</li>
</ul></li>
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
<div id="partI"></div>
<h2 id="partI">Part I:  Nuclear and Nuclear-Related Dual-Use Items</h2>
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
<h2 id="sec4">4. Program Framework</h2>
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
<h2 id="sec4-1">4.1 Overview</h2>  <p>This section outlines the basis for import and export controls implemented by the CNSC for controlled nuclear substances, equipment and information.</p>  <p>Canada controls the import and export of a number of goods for various reasons, including regulation of trade in strategic and military goods, prevention of proliferation of weapons of mass destruction, and fulfillment of international obligations. One of the main objectives of controlling the transfer of sensitive nuclear-related items is to prevent illicit transfers to a nuclear weapons program while facilitating legitimate commerce.</p>   <p>Effective import and export controls are based on an interrelated set of domestic and international laws, regulations, agreements and best practices. The domestic context is comprised of national legislation and Canadian nuclear non-proliferation policy, while the international context is influenced by the <a href="http://www.un.org/en/conf/npt/2005/npttreaty.html"><em>Treaty on the Non-Proliferation of Nuclear Weapons</em></a> and multilateral export control regimes.</p>   <p>Sections 4.2 and 4.3 of this document provide further information on the domestic and international aspects of the CNSC&rsquo;s import and export controls.</p>
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
<h3 id="sec4-2">4.2 The domestic context</h3>  <h4>Legislation: the <em>Nuclear Safety and Control Act</em> and the <em>Nuclear Non-proliferation Import and Export Control Regulations</em>.</h4>  <p>The CNSC regulates the use of nuclear energy and materials to protect the health, safety and security of Canadians as well as the environment, and to implement measures to which Canada has agreed respecting international control of the development, production and use of nuclear energy, including the non-proliferation of nuclear weapons and nuclear explosive devices.  Pursuant to the NSCA, the CNSC licenses, regulates and establishes technical requirements for all nuclear-related activities in Canada.</p>
<p>Appendix E lists controlled nuclear substances, equipment and information. Appendix E is comprised of two parts: Part A lists nuclear items and Part B lists nuclear-related dual-use items. For this reason, controlled nuclear substances, equipment and information are also referred to as nuclear and nuclear-related dual-use items.</p>  <p>The items listed in Part A are those especially designed or prepared for nuclear use. Examples include:</p>
<ul>
<li>nuclear material (uranium, plutonium, thorium)</li>
<li>nuclear reactors and equipment</li>
<li>non-nuclear material used in reactors (heavy water, deuterium, graphite)</li>
<li>plants and equipment for conversion, enrichment and reprocessing of nuclear material and for fuel fabrication and heavy water production</li>
<li>technology associated with any of the foregoing items</li>
</ul>  <p>The items listed in Part B are those that have legitimate non-nuclear applications, but that could also make a significant contribution to an unsafeguarded nuclear fuel cycle or nuclear explosive activity. Examples include:</p>
<ul>
<li>nickel powder and lithium</li>
<li>machine tools</li>
<li>implosion systems development equipment</li>
<li>high explosives and related equipment</li>
<li>technology associated with any of the aforementioned items</li>
</ul>
<h4>Canada&rsquo;s nuclear non-proliferation policy</h4>  <p>Canada was the first country with substantial nuclear capability to reject the development and acquisition of nuclear weapons, and has been actively involved in the international promotion of the peaceful uses of nuclear energy. The two objectives of Canada&rsquo;s nuclear non-proliferation policy are to:</p>
<ul>
<li>assure Canadians and the international community that Canada&rsquo;s nuclear exports do not contribute to the development of nuclear weapons or other nuclear explosive devices</li>
<li>promote a more effective and comprehensive international nuclear non-proliferation regime</li>
</ul>  <p>The policy provides that Canadian-supplied nuclear material, equipment, non-nuclear material and technology may only be transferred to countries with which Canada has concluded a bilateral nuclear cooperation agreement (NCA).</p>  <p>The CNSC &ndash; along with its predecessor, the Atomic Energy Control Board &ndash; has contributed to fulfilling Canada&rsquo;s international obligations and commitments on the peaceful uses of nuclear energy since 1946. Accordingly, the CNSC has substantive involvement in implementing key aspects of Canada&rsquo;s nuclear non-proliferation policy. This includes making sure that major nuclear exports are made subject to a NCA. NCAs, which are treaty-level documents negotiated by Global Affairs Canada, establish reciprocal obligations (between Canada and the partner country) that are designed to minimize the risk of proliferation associated with the international transfer of major nuclear items. The CNSC implements the terms and conditions of these agreements through the administrative arrangements (AAs) that it concludes with its counterpart in the partner country.</p>  <p>Key provisions contained in Canada&rsquo;s NCAs include: peaceful, non-explosive end-use assurances; control over retransfer to third parties of Canadian-obligated items; control over reprocessing of Canadian-obligated uranium; control over the high enrichment of Canadian-obligated uranium; provisions for fall-back safeguards; and adequate physical protection of Canadian-obligated items.</p>  <p>Some licensing applications for the import and export of controlled nuclear substances, equipment and information may invoke the implementation of provisions of bilateral NCAs and AAs by the CNSC as part of the licensing assessment and decision process. Section 6.2 of this document provides information on this process.</p>
<h4>Foreign-origin uranium</h4>  <p>Canadian exports of uranium for nuclear use include not only Canadian-origin uranium, but also foreign-origin uranium imported into Canada for commercial processing before delivery to another country. In those instances where foreign-origin uranium imported to Canada for commercial processing does not carry a foreign obligation, this uranium will be made subject to the terms and conditions of an NCA between Canada and the recipient country at the time of export.</p>
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
<h3 id="sec4-3">4.3 The international context</h3>  <h4><em>Treaty on the Non-Proliferation of Nuclear Weapons</em></h4>  <p>The <em>Treaty on the Non-Proliferation of Nuclear Weapons</em> (NPT) is the cornerstone of the international nuclear non-proliferation regime. Signatories to the NPT commit to prevent the spread of nuclear weapons, promote cooperation in the peaceful uses of nuclear energy, and achieve nuclear disarmament.</p>
<p>Through the NSCA and corresponding regulations, the CNSC implements the following commitments that Canada, as a signatory to the NPT, has agreed to:</p>
<ul>
<li>not to receive, manufacture or acquire nuclear weapons or other nuclear explosive devices</li>
<li>to accept IAEA safeguards on all nuclear material in Canada</li>
<li>to ensure that Canadaâ€™s nuclear exports to non-nuclear-weapons states are subject to IAEA safeguards</li>
</ul>
<h4>Multilateral export control groups</h4>  <p>Multilateral export control groups are another important element of the international nuclear non-proliferation regime. Canada is a member of the Zangger Committee and the Nuclear Suppliers Group (NSG), which are export control regimes that help ensure that nuclear and nuclear-related dual-use items are only used for peaceful purposes. States that are members of these regimes agree by consensus on lists of items whose transfer must be controlled. Implementation of these controls is done in accordance with domestic export control laws and practices, including national export licensing requirements.  Appendix E is based on the lists of items agreed by the Zangger Committee and NSG.</p>
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
<h2 id="sec5">5. Licensing Process</h2>
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
<h3 id="sec5-1">5.1 Overview</h3>  <p>The import and export of the controlled items in the NNIECR require a licence from the CNSC, except for activities exempted under subsection 4(1) of the NNIECR.</p>   <p>The CNSC has established a risk-based licensing program for these imports and exports. This program ensures that imports and exports of nuclear and nuclear-related dual-use items conform to domestic regulatory requirements, Canadian nuclear non-proliferation policy and Canada&rsquo;s international obligations.</p>   <p>For Canadian nuclear facilities, the Commission makes most licensing decisions on the basis of the technical support and recommendations of CNSC staff. For import and export licensing, however, the Commission has delegated this authority pursuant to subsection 37(1) of the NSCA to a designated officer. It is the designated officer who makes decisions to issue, amend, replace, renew, authorize the transfer of, suspend or revoke import and export licences.</p>   <p>Revocation, amendment and replacement of an export licence or an import licence by a designated officer will be considered on the basis of an application submitted pursuant to requirements and information specified in section 6 of the GNSCR.</p>
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
<h3 id="sec5-2">5.2 How to apply for a CNSC import or export licence</h3>  <p>The CNSC has developed application forms for import licences (<a href="http://www.nuclearsafety.gc.ca/eng/pdfs/Forms_Applications/Import_Export/Application_for_a_Licence_to_Import_Nuclear_Items_e.pdf">Application for a Licence to Import Nuclear Items</a>) and export licences (<a href="http://www.nuclearsafety.gc.ca/eng/pdfs/Forms_Applications/Import_Export/Application_for_a_Licence_to_Export_Nuclear_and_Nuclear-Related_Dual-Use_Items_e.pdf">Application for a Licence to Export Nuclear and Nuclear-Related Dual-Use Items</a>). <a href="#appC">Appendix C</a> of this document provides detailed information on completing these forms, and also includes copies of them for reference.</p>  <p>The information required in support of a CNSC import or export application can be found in subsection 3(1) of the NNIECR. Completed import and export licence applications should be submitted to the CNSC&rsquo;s Licensing Administrator (Nuclear), via mail, fax or email:</p>  <p>Licensing Administrator (Nuclear)<br />
Non-Proliferation and Export Controls Division<br />
Directorate of Security and Safeguards<br />
Canadian Nuclear Safety Commission, P.O. Box 1046, Station B<br />
280 Slater Street, Ottawa, ON  K1P 5S9</p>  <p>Fax: 613-995-5086<br />
Email: <a href="mailto:export-import@cnsc-ccsn.gc.ca">export-import@cnsc-ccsn.gc.ca</a></p>
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
<h3 id="sec5-3">5.3	What import and export licences authorize</h3>  <p>A CNSC import or export licence authorizes a licensee (the person or organization to whom the licence has been issued) to carry out the import or export activity defined in the licence. A licence is transaction-specific and identifies the item, quantity, end-use, end-user and consignee. It may authorize the transfer of a defined quantity of items in single or multiple shipments, depending upon the commercial arrangement; however, the quantity authorized cannot be exceeded and all shipments must take place within the defined duration of the licence.</p>  <p>A licence may also authorize shipments to single or multiple consignees in a given country. The licence is generally valid for one year, but an applicant may request a longer licence period to accommodate a commercial contract.</p>
<p>Some licences contain compliance conditions that are related to reporting requirements, such as shipment notifications or annual summaries of shipments. <a href="#sec8">Section 8</a> of this document provides information on compliance with licence conditions that may be included in CNSC import and export licences.</p>
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
<h3 id="sec5-4">5.4	Licence amendments and transfers</h3>  <p>A CNSC import or export licence may be amended to:</p>
<ul>
<li>change the expiry date</li>
<li>add or remove consignees</li>
<li>add or remove items authorized for import or export</li>
<li>change the sender or recipient address</li>
<li>change the quantity of items on the existing licence</li>
<li>modify the end-use</li>
</ul>   <p>To request a licence amendment, use the application forms referenced in section 5.2 of this document. Select the "Amendment &ndash; Licence number" box and identify the number of the existing licence in question. When applying for amendment(s), only complete the relevant section(s) of the application form.</p>
<p><strong>Please note:</strong> A licence cannot be amended once the authorized quantity has been imported or exported. Similarly, an amendment cannot be made after a licence has expired. Therefore, applications to amend licences should be received by the CNSC at least 15 business days before the amended licence is required.</p>  <p>The transfer of a CNSC import or export licence from an existing licensee (the transferor) to another entity (the transferee) may be authorized by the CNSC upon consideration of an application submitted by both entities. Licence transfers may be authorized where a change of legal status has occurred and it can be verified that the new licensee (the transferee) is capable of ensuring compliance with the NSCA, relevant regulations and all licence conditions. If significant changes to the terms and conditions are also proposed, a transfer will not be authorized and the applicant for the licence will need to apply for issuance of a new licence. Further information can be obtained by contacting the CNSC&rsquo;s Licensing Administrator (Nuclear).</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="5.5"></div>
<h3 id="sec5-5">5.5	Processing time and service standards</h3>  <p>Applicants can generally expect the CNSC to decide upon the issuance of an import or export licence within 15 business days of receiving a complete application. Incomplete applications cannot be processed, and additional information will be required before the assessment can proceed.</p>  <p>While the CNSC strives to process all applications within 15 business days, delays may be incurred for export licence applications that require international communications and/or consultations. For example, exports of items in Part A of Appendix E of this document may be subject to bilateral NCAs. In such cases, the CNSC must first ensure that appropriate notifications are exchanged with a partner country before an export can be authorized. Depending upon the country, it may take up to 30 business days to ensure the appropriate conditions are in place for the transfer. In such cases, the CNSC will keep the applicant apprised of the expected timeline to complete the assessment. Applicants are always encouraged to apply for an export licence at the earliest opportunity.</p>   <p>The CNSC website provides more information on <a href="/eng/acts-and-regulations/service-standards/import-export-licences/index">service standards for import and export licences</a>.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="5.6"></div>
<h3 id="sec5-6">5.6	Non-CNSC export requirements</h3>  <p>Along with the export authorization required from the CNSC for nuclear and nuclear-related dual-use items, the export of these items may also be controlled by Global Affairs Canada pursuant to the <a href="http://laws-lois.justice.gc.ca/eng/acts/E-19/index.html"><em>Export and Import Permits Act</em></a> and its corresponding Export Control List. Exporters can obtain further information on these licensing requirements by contacting:</p>  <p>Trade Controls Bureau (TIE)<br />
Global Affairs Canada<br />
125 Sussex Drive<br />
Ottawa, ON  K1A 0G2</p>  <p>Telephone: 613-996-2387<br />
Fax: 613-996-9933<br />
Email: <a href="mailto:tie.reception@international.gc.ca">tie.reception@international.gc.ca</a><br />
Internet: <a href="http://www.exportcontrols.gc.ca">exportcontrols.gc.ca</a></p>
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
<h2 id="sec6">6. Evaluation of Licence Applications</h2>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.1"></div>
<h3 id="sec6-1">6.1	Receipt of application</h3>  <p>Upon receipt of an import and export licence application, the CNSC sends an email of acknowledgement to the applicant. This acknowledgement message assigns a reference number to the application, which both the applicant and the CNSC should use in any future correspondence.</p>   <p>The CNSC screens the application to ensure that all information described in section 3 of the NNIECR has been submitted by the applicant. If any information is missing, the CNSC will ask the applicant to submit it. For applications concerning a controlled nuclear substance, the CNSC will also consider if the applicant requires a licence to possess or use the substance.</p>   <p><strong>Note:</strong> This initial screening does not consider the quality of an application or its technical aspects.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.2"></div>
<h3 id="sec6-2">6.2	Assessment of application</h3>  <p>The CNSC assesses the licence application based on a number of risk factors. If the CNSC requires additional information at this point, it will ask for it from the applicant. Additional information requested may be related to quantity, technical specifications of the item(s) or more information about the end-use or end-user. The CNSC will resume processing the application when it receives the requested information from the applicant.</p>  <p>When assessing an application, the CNSC considers a range of information, such as:</p>
<ul>
<li>the non-proliferation credentials of the importing country (whether it is a member of the NPT and/or NSG)</li>
<li>information available with regard to nuclear weapons-related activities in the end-user country or an intermediary country (if any)</li>
<li>the applicability of bilateral NCAs</li>
<li>relevance of the items in question to any known procurement efforts</li>
<li>risk of diversion posed by the transfer</li>
<li>utility of the item(s) to a nuclear weapon or nuclear explosive device</li>
<li>any proliferation concerns regarding any parties to the transaction</li>
<li>whether the end-use and end-user are legitimate</li>
<li>previous denials to a certain end-user</li>
<li>the types of assurances or guarantees provided and/or required</li>
</ul>  <p>The CNSC will assess the overall proliferation risk, taking into account all of the above factors, for each application. Examples of some of the specific areas that are assessed are considered below.</p>
<h4>Whether the item is controlled by the <em>Nuclear Non-proliferation Import and Export Control Regulations</em></h4>  <p>The CNSC will review the description of the item to determine if the item is controlled under the NNIECR. If it is deemed that the item is not controlled, the applicant will be informed in writing (by email or letter) of this decision. If, on the basis of the information already provided in the application, the control status is unclear, the CNSC will request further information from the applicant as per subsection 3(2) of the NNIECR.</p>
<h4>Intangible technology transfers</h4>  <p>Export controls also apply to intangible transfers of controlled nuclear information; for example, in the case of controlled nuclear information (see A.4 and B.3 in Appendix E). Examples of intangible transfers include:</p>
<ul>
<li>emails</li>
<li>face-to-face meetings</li>
<li>telephone conversations</li>
<li>provision of services or training</li>
<li>publishing in international journals or exchanging information in international forums</li>
<li>downloads or other electronic file exchanges</li>
</ul>
<p>Intangible transfers still require export authorization.</p>   <p>This includes the transfer of controlled nuclear information to and from a cloud service provider when those servers are located outside of Canada.</p>
<p>If uncertain as to whether an import or export licence is required, there is no cost associated with submitting an application for assessment.  Alternatively, applicants are encouraged to contact the CNSC at <a href="mailto:export-import@cnsc-ccsn.gc.ca">export-import@cnsc-ccsn.gc.ca</a>.</p>
<h4>Whether the item is subject to a nuclear cooperation agreement</h4>  <p>If the item is controlled and found to be subject to an NCA, the appropriate bilateral notifications must be exchanged with the country that will import the item. Depending upon the partner country, this step usually takes from one to six weeks. In general, items found in Part A of Appendix E are subject to an NCA.</p>
<h4>Country of origin of the item</h4>  <p>Applicants are to identify the origin of the item in the application, so the CNSC can determine what bilateral commitments, if any, are associated with the item.</p>
<h4>End-use and end-user</h4>  <p>With export applications in particular, a large part of the CNSC&rsquo;s assessment focuses on whether the end use and end-user are legitimate, as well as whether the transfer poses a proliferation risk.</p>
<p>If the item is not subject to an NCA, the recipient country is not bound by the same level of obligations that help to minimize the proliferation risk associated with the international transfer of major nuclear items.</p>   <p>In the case of nuclear-related dual-use items (see Part B of Appendix E), it is also necessary to determine if end-use assurances are required.</p>
<p>Open-source information may be used to assess the end-use and end-user, in order to ensure they are consistent with the items being transferred and that the transfer is solely for peaceful uses. In some cases, it may be necessary to obtain further assistance and information from other government departments.</p>
<h4>Other regulatory considerations</h4>  <p>Depending on the item, an application may be forwarded to other divisions within the CNSC for review. This ensures that other CNSC requirements related to safeguards, security (<a href="http://laws-lois.justice.gc.ca/eng/regulations/SOR-2000-209/index.html"><em>Nuclear Security Regulations</em></a>), packaging and transport of nuclear substances (<a href="http://laws-lois.justice.gc.ca/eng/regulations/SOR-2000-208/index.html"><em>Packaging and Transport of Nuclear Substance Regulations</em></a>), waste management, and possession controls are considered before import and export licences are issued.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.3"></div>
<h3 id="sec6-3">6.3	Decision of the designated officer</h3>  <p>CNSC staff review the application and make a recommendation to the designated officer. The decision whether or not to issue the import or export licence is made by the designated officer in consideration of subsection 24(4) of the NSCA.</p>  <p>If the designated officer is considering denying the application, the applicant will be informed of this via a formal letter. Under paragraph 39(1)(a) of the NSCA, the designated officer shall provide a reasonable opportunity to be heard to the applicant before refusing to issue a licence. As such, the letter identifies the opportunity for the applicant to submit any additional information that they believe the designated officer should consider. The letter also provides time limits for filing additional information with the designated officer and instructions for submitting the information. Rule 27 of the <a href="http://laws-lois.justice.gc.ca/eng/regulations/sor-2000-211/page-1.html"><em>Canadian Nuclear Safety Commission Rules of Procedure</em></a> applies with respect to the opportunity to be heard.</p>  <p>Should the designated officer refuse to issue a licence, the applicant can appeal the designated officer&rsquo;s decision to the Commission. Subsection 43(1) of the NSCA and Rules 29 and 30 of the <em>Canadian Nuclear Safety Commission Rules of Procedure</em> apply with respect to a licence appeal.</p>
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
<h2 id="sec7">7. End-Use Controls for Nuclear-Related Dual-Use Items</h2>  <p>End-use controls, also known as "catch-all" controls, allow the CNSC to control items that are not otherwise specifically listed in the Appendix E when there are reasonable grounds to believe that such items may be intended for use in connection with a nuclear weapons program.</p>   <p>These less sensitive items do not meet the technical specifications of the items listed in Part B of Appendix E, but may still be of use in a nuclear weapons program. Examples include items used in the development and infrastructure of a nuclear weapons program, such as research and development programs at universities or unsafeguarded civilian nuclear reactors. As a result, such items may require a licence if there are reasonable grounds to suspect the item is intended for use in a nuclear weapons program. The end-use controls in  Appendix E apply to substances (paragraph B.1.1.20), equipment (paragraph B.2.7.6) and information (paragraph B.3).</p>
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
<h3 id="sec7-1">7.1	Why end-use controls are necessary</h3>  <p>The items listed in the Appendix E are based on lists of nuclear and nuclear-related dual-use items agreed to by the NSG. The lists capture only the most proliferation-sensitive items, since the inclusion of all possible (less-sensitive) items that might support a nuclear weapons program would create an unnecessary burden on legitimate trade. End-use controls help the CNSC ensure that Canadian exporters do not contribute knowingly or unwittingly to a nuclear weapons program, by requiring less sensitive items to be made licensable if they are &ndash; or may be &ndash; for use in a nuclear weapons program.</p>
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
<h3 id="sec7-2">7.2	When end-use controls are applied</h3>  <p>The CNSC determines if the end-use control is applicable upon receipt of an enquiry or application from the exporter, or if it determines that a shipment is being made to an end-user of concern. The latter determination may be accomplished through information received by the CNSC, or if the Canada Border Services Agency (CBSA) detains a shipment and consults with the CNSC as to whether an export licence is required.</p>   <p>When the end-use control is applicable, the exporter will be informed by letter or email that an export licence is required before the item(s) may be exported. Once an export application is submitted, it will be assessed using the approach described in section 6 of this document. If the assessment concludes there is no risk of the item being used in, or diverted to, a nuclear weapons program, a licence will be issued. If CNSC staff recommend refusing the issuance of a licence, the aforementioned process for licence refusal will apply.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="7.3"></div>
<h3 id="sec7-3">7.3	What exporters have to do</h3>  <p>If an export is subject to end-use controls, the exporter should contact the CNSC and apply for a licence. An export is likely to be controlled if it is known or suspected that it will be used in connection with the design, development, production, handling, operation, maintenance or storage of nuclear weapons or other nuclear explosive devices.</p>  <p>Exporters may often be unable to recognize, or may be unsure, if their products are intended for illicit purposes, e.g., in a nuclear weapons program. Appendix A therefore provides guidance to help exporters identify suspicious enquiries or orders that could require greater scrutiny.</p>  <p>If exporters are uncertain whether end-use controls apply to an export, they may:</p>
<ul>
<li>contact the CNSC at <a href="mailto:export-import@cnsc-ccsn.gc.ca">export-import@cnsc-ccsn.gc.ca</a> to request further information</li>
<li>submit an export licence application</li>
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
<div id="8"></div>
<h2 id="sec8">8. Compliance With CNSC Requirements</h2>  <p>With respect to the import and export of controlled nuclear substances, equipment and information, individuals and companies are required to comply with the NSCA, its regulations, licences and their terms and conditions, as well as any orders made under the NSCA.</p>
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
<h3 id="sec8-1">8.1	How the CNSC verifies compliance</h3>  <p>The CNSC conducts activities to verify and promote compliance, with the objective of assuring Canadians and the international community that international transfers of nuclear and nuclear related dual-use items are used only for peaceful, non-explosive purposes. Audits of licence conditions and inspection activities are among the ways that the CNSC verifies compliance with import and export licences.</p>
<h4>Audits of licence conditions</h4>  <p>Subsection 24(5) of the NSCA allows licences to contain any term or condition that the CNSC considers necessary for meeting the purposes of the Act. Like other licences issued by the CNSC, import and export licences contain terms and conditions with which the licensee must comply. The conditions included within a licence depend on the nature of the item(s) being imported or exported and are generally related to:</p>
<ul>
<li>prior or post shipment notifications</li>
<li>monthly or annual reporting</li>
<li>action to be taken with respect to the CBSA in relation to section 18 of the GNSCR</li>
</ul>  <p>The CNSC reviews the information provided by licensees to verify that the authorized quantity of the licence has not been exceeded and that, in the case of export licences, items are only being exported to authorized end-users. The CNSC also reviews the information provided as part of prior or post shipment notifications to verify that exports are being made in accordance with the terms and conditions of licences.</p>
<h4>Inspection activities</h4>  <p>The CNSC uses two general types of inspection activities to verify compliance with import and export licences:</p>
<ul>
<li>The first is an audit of import/export-related documentation at licensees&rsquo; facilities. CNSC inspectors may review information such as shipping-related documentation, CBSA customs declarations and inventory control documents.</li>
<li>The second is an inspection of goods that have been detained at the border by the CBSA, in order to determine if they require a CNSC export licence.</li>
</ul>
<p>The documents required during CNSC audits of electronic transfers of controlled nuclear information will be case-dependent. A licensee is expected to have a clear understanding of when controlled nuclear information is being transferred, regardless of how it is transferred. For example, if the licensee is sending controlled nuclear information by email, that email should be associated with the requisite licence and should be easily identifiable to the licensee. This will allow for a record of the controlled nuclear information that has been transferred.</p>   <p>Depending on the type of information being transferred, controlled nuclear information may or may not be associated with a formal inventory control system. Regardless of the system employed or the way in which controlled nuclear information is transferred, when controlled nuclear information is transferred it should be easily identifiable to the licensee and done in a manner in which records can be provided to the CNSC. The CNSC advises that documents be retained for a six year period.</p>
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
<h3 id="sec8-2">8.2	Disclosure of non-compliance</h3>  <p>The CNSC recognizes that responsible importers and exporters may, on occasion, inadvertently fail to obtain the appropriate import or export authorization from the CNSC, as required under the NSCA. Similarly, they may unintentionally fail to comply with a condition of an import or export licence. Importers and exporters in such a situation are encouraged to disclose any incidence of non-compliance to the CNSC as soon as possible. Appendix B sets out the recommended disclosure procedures to be followed in case of non-compliance.</p>  <p>The CNSC looks favourably upon disclosures if, after considering the information provided (including the nature and seriousness of the disclosed violation or omission), it is satisfied that the importer or exporter has fully cooperated and taken appropriate measures to prevent future re-occurrence of non-compliance. In such instances, no further action is generally warranted.</p>   <p>If no disclosure is made, the CNSC may consider various options to address non compliance, depending on the gravity of the incidence of non-compliance or on the overall circumstances. One such option is to issue an administrative monetary penalty, which is a monetary penalty imposed without court involvement for the violation of a regulatory requirement (see the <a href="http://www.nuclearsafety.gc.ca/">CNSC&rsquo;s website</a> for more information). More serious cases may be referred to the CBSA or the RCMP for further review or investigation.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="8.3"></div>
<h3 id="sec8-3">8.3	Best practices for responsible exporters</h3>  <p>Further information on best practices for responsible exporters can be found in a document published on the NSG website. <a href="http://www.nuclearsuppliersgroup.org/A_test/01-eng/12-pract.php?%20btn=12"><em>Good Practices for Corporate Standards to Support the Efforts of the International Community in the Non-Proliferation of Weapons of Mass Destruction</em></a> offers suggestions that are not legally binding and that aim to boost commercial-sector support for non-proliferation by reducing the risk of inadvertent supply of items to illicit procurement programs.</p>   <p>Another example of best practices, focused on vendors, is the <a href="http://nuclearprinciples.org/the-principles/"><em>Nuclear Power Plant Exporters&rsquo; Principles of Conduct</em></a>.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="partII"></div>
<h2 id="partII">Part II: Risk-Significant Radioactive Sources</h2>
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
<h2 id="sec9">9. Program Framework</h2>
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
<h3 id="sec9-1">9.1	Overview</h3>  <p>This section outlines the basis for import and export controls implemented by the CNSC for risk-significant radioactive sources (Category 1 and 2 radioactive sources).</p>  <p>The CNSC&rsquo;s export and import control program for risk-significant radioactive sources includes consideration of Canada&rsquo;s political commitment to adopt two key International Atomic Energy Agency (IAEA) documents: the <a href="http://www-pub.iaea.org/books/iaeabooks/7227/code-of-conduct-on-the-safety-and-security-of-radioactive-sources-guidance-on-the-import-and-export-of-radioactive-sources"><em>Code of Conduct on the Safety and Security of Radioactive Sources</em></a> (the Code) and the <a href="http://www-pub.iaea.org/books/IAEABooks/8901/Guidance-on-the-Import-and-Export-of-Radioactive-Sources"><em>Guidance on the Import and Export of Radioactive Sources</em></a> (the Guidance). Under the leadership of the IAEA, the Code and the Guidance were developed by the international community to augment the safety and security of radioactive sources. The Government of Canada has committed to implement the provisions contained within the Code, including implementing export and import controls consistent with the Code and Guidance.</p>
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
<h3 id="sec9-2">9.2	The domestic context</h3>  <p>As Canada&rsquo;s nuclear regulatory authority, the CNSC is responsible for controlling the export and import of risk-significant radioactive sources. Through its role in implementing export and import control measures, the CNSC enhances national and international safety and security by ensuring that only authorized persons are recipients of risk-significant radioactive sources. The CNSC&rsquo;s program is consistent with the Code and Guidance, which have the following objectives:</p>
<ul>
<li>achieving a high level of safety and security regarding risk-significant radioactive sources</li>
<li>reducing the likelihood of accidental harmful exposure to risk-significant radioactive sources or the malicious use of such sources to cause harm to individuals, society and the environment</li>
<li>mitigating or minimizing the radiological consequences of any accident or malicious act involving risk-significant radioactive sources</li>
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
<div id="9.3"></div>
<h3 id="sec9-3">9.3	The international context</h3>  <p>Implementation of radioactive source export and import controls consistent with the Code and Guidance requires cooperation and consultation between regulatory authorities in the exporting and importing countries. The CNSC may enter into bilateral administrative arrangements with regulatory authorities in countries with which Canada has trade in risk-significant radioactive sources and with countries that share Canada&rsquo;s commitments to effective international controls on transfers of radioactive sources. The objective of these arrangements is to establish harmonized bilateral procedures and communication channels for the efficient implementation of export and import controls, and thus to reduce the risk of undue delays in regulatory authorizations.</p>
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
<h2 id="sec10">10. Risk-Significant Radioactive Sources</h2>  <p>Risk-significant radioactive sources correspond to Category 1 and 2 radioactive sources of the IAEA&rsquo;s categorization of radioactive sources (IAEA RS-G-1.9 &ndash; <em>Categorization of Radioactive Sources</em>). Table 1 lists the isotopes and threshold activities in Terabecquerels (TBq) for the Category 1 and Category 2 radioactive sources requiring export authorizations. Category 1 and Category 2 radioactive sources are defined as risk-significant radioactive sources for the purpose of the CNSC export and import control program.</p>  <p><strong>Table 1: Threshold Activities for Category 1 and Category 2 Radioactive Sources</strong></p>
<table className="table table-striped">  <tr>
<th className="text-center">Nuclear Substance</th>
<th className="text-center">Category 1 (TBq)</th>
<th className="text-center">Category 2 (TBq)</th>  </tr>  <tr>
<td>Americium-241</td>
<td className="text-center">60</td>
<td className="text-center">0.6</td>  </tr>  <tr>
<td>Americium-241/Beryllium</td>
<td className="text-center">60</td>
<td className="text-center">0.6</td>  </tr>  <tr>
<td>Californium-252</td>
<td className="text-center">20</td>
<td className="text-center">0.2</td>  </tr>  <tr>
<td>Curium-244</td>
<td className="text-center">50</td>
<td className="text-center">0.5</td>  </tr>  <tr>
<td>Cobalt-60</td>
<td className="text-center">30</td>
<td className="text-center">0.3</td>  </tr>  <tr>
<td>Cesium-137</td>
<td className="text-center">100</td>
<td className="text-center">1.0</td>  </tr>  <tr>
<td>Gadolinium-153</td>
<td className="text-center">1,000</td>
<td className="text-center">10.0</td>  </tr>  <tr>
<td>Iridium-192</td>
<td className="text-center">80</td>
<td className="text-center">0.8</td>  </tr>  <tr>
<td>Promethium-147</td>
<td className="text-center">40,000</td>
<td className="text-center">400.0</td>  </tr>  <tr>
<td>Plutonium-238</td>
<td className="text-center">60</td>
<td className="text-center">0.6</td>  </tr>  <tr>
<td>Plutonium-239/Beryllium</td>
<td className="text-center">60</td>
<td className="text-center">0.6</td>  </tr>  <tr>
<td>Radium-226</td>
<td className="text-center">40</td>
<td className="text-center">0.4</td>  </tr>  <tr>
<td>Selenium-75</td>
<td className="text-center">200</td>
<td className="text-center">2.0</td>  </tr>  <tr>
<td>Strontium-90 (Yttrium-90)</td>
<td className="text-center">1,000</td>
<td className="text-center">10.0</td>  </tr>  <tr>
<td>Thulium-170</td>
<td className="text-center">20,000</td>
<td className="text-center">200.0</td>  </tr>  <tr>
<td>Ytterbium-169</td>
<td className="text-center">300</td>
<td className="text-center">3.0</td>  </tr>  </table>
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
<h2 id="sec11">11. Licensing and Control Process</h2>
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
<h3 id="sec11-1">11.1 Overview</h3>  <p>The CNSC export and import control program for risk-significant radioactive sources is designed to meet the provisions of the IAEA Code and the Guidance, in addition to the regulatory requirements under NSCA. Key elements of this regulatory program include:</p>
<ul>
<li>a licensing and compliance process for the export of risk-significant radioactive sources</li>
<li>a control process for the import of risk-significant radioactive sources</li>
<li>implementation of bilateral administrative procedures with foreign regulatory authorities</li>
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
<div id="11.2"></div>
<h3 id="sec11-2">11.2 Export licensing</h3>  <p>A CNSC licensee authorized to use or possess a risk-significant radioactive source must apply for and be issued an export licence before exporting that source. The licensee must ensure the information provided in an application is comprehensive enough to enable the CNSC to evaluate effectively the request for authorization to export. The CNSC assesses the information provided by the applicant to ensure that the proposed export meets national requirements and international obligations. For Category 1 radioactive source exports, the CNSC consults with the Importing State Authority prior to completing the assessment of an application.</p>  <p>Export licences may contain any term or condition considered necessary for the purpose of the <em>Nuclear Safety and Control Act</em>, including requirements for providing prior and post shipment notifications of shipments.</p>
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
<h3 id="sec11-3">11.3 Import controls</h3>  <p>The CNSC typically does not issue specific licences for the import of risk-significant radioactive sources. CNSC licensees that are authorized to possess risk-significant radioactive sources may import such sources consistent with the general import authorization for those sources that exists in their possession licences.</p>  <p>The CNSC implements additional regulatory compliance controls on imports of risk-significant radioactive sources to ensure that bilateral responsibilities required under the Code and Guidance are met. These compliance controls include the review of prior import notifications received from foreign exporters, and decisions on requests received from foreign regulators (Exporting State Authority) for CNSC consent to the import of Category 1 radioactive sources.</p>
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
<h3 id="sec11-4">11.4 How to apply for a CNSC export licence</h3>  <p>Applicants for an export licence must hold a licence issued by the CNSC to possess the risk-significant radioactive sources in question.</p>  <p>The CNSC has developed an application form for export licences (<a href="http://www.nuclearsafety.gc.ca/eng/pdfs/Forms_Applications/Import_Export/Application_for_a_Licence_to_Export_Nuclear_and_Nuclear-Related_Dual-Use_Items_e.pdf">Application for a Licence to Export Risk-Significant Radioactive Sources</a>). Appendix D of this document provides detailed information on completing the application form, and also includes a copy of the form for reference in <a href="#appD-1">Appendix D.1</a>.</p>  <p>Unless otherwise authorized by the CNSC:</p>
<ul>
<li>a separate application is required for each export transaction or specific set of transactions that are anticipated to occur within a specific period of time</li>
<li>each export licence issued will authorize transfers to one or more recipients, but only to a single country</li>
<li>separate export licences will be issued for Category 1 and Category 2 radioactive sources</li>
</ul>  <p>Each transaction may involve multiple shipments carried out over a specified period of time.</p>  <p>Completed export licence applications should be submitted to the CNSC&rsquo;s Licensing Administrator (Radioactive Sources), via mail, fax or email:</p>  <p>Licensing Administrator (Radioactive Sources)<br />
Non-Proliferation and Export Controls Division<br />
Directorate of Security and Safeguards<br />
Canadian Nuclear Safety Commission, P.O. Box 1046, Station B<br />
280 Slater Street, Ottawa, ON  K1P 5S9</p>  <p>Fax: 613-995-5086<br />
Email: <a href="mailto:export-import@cnsc-ccsn.gc.ca">export-import@cnsc-ccsn.gc.ca</a></p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="11.5"></div>
<h3 id="sec11-5">11.5 Licence amendments and transfers</h3>  <p>A CNSC export licence may be amended to:</p>
<ul>
<li>change the expiry date</li>
<li>add or remove consignees</li>
<li>add or remove items authorized for export</li>
<li>change the sender or recipient address</li>
<li>change the quantity of items on the existing licence</li>
<li>modify the end-use</li>
</ul>   <p>To request a licence amendment, use the application forms referenced in Appendix D.1 of this document. Select the "Amendment Export Licence No" box and complete the relevant section(s) of the application form.</p>  <p><strong>Please note:</strong> A licence cannot be amended once the authorized quantity has been exported. Similarly, an amendment cannot be made after a licence has expired. Therefore, applications to amend licences should be received by the CNSC at least 15 business days before the amended licence is required. The transfer of a CNSC export licence from an existing licensee (the transferor) to another entity (the transferee) may be authorized by the CNSC upon consideration of an application submitted by both entities. Licence transfers may be authorized where a change of legal status has occurred and it can be verified that the new licensee (the transferee) is capable of ensuring compliance with the NSCA, relevant regulations and all licence conditions. If significant changes to the terms and conditions are also proposed, a transfer will not be authorized and the applicant for the licence will need to apply for issuance of a new licence. Further information can be obtained by contacting the CNSC&rsquo;s Licensing Administrator (Radioactive Sources).</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="11.6"></div>
<h3 id="sec11-6">11.6 Processing time and service standards</h3>  <p>Applicants can generally expect the CNSC to decide upon the issuance of an export licence within 15 business days of receiving a complete application. Incomplete applications cannot be processed, and additional information will be required before the assessment can proceed.</p>  <p>While the CNSC strives to process all applications within 15 business days, the time required for processing an application for an export licence is affected, in part, by the scope of international communications and consultations that are required. The length of time for completing these will depend on a variety of factors, such as the state of the importing country&rsquo;s regulatory infrastructure for the control of radioactive sources, the availability of information on the end-user, and whether the export item is a Category 1 or Category 2 source. As a result, additional time may be required in some cases to process an export licence application. Applicants are always encouraged to apply for an export licence at the earliest opportunity.</p>   <p>The CNSC website provides more information on <a href="/eng/acts-and-regulations/service-standards/import-export-licences/index">service standards for import and export licences</a>.</p>
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
<h2 id="sec12">12. Evaluation of Licence Applications</h2>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="12.1"></div>
<h3 id="sec12-1">12.1 Receipt of the application</h3>  <p>Upon receipt of an export licence application, the CNSC sends an email of acknowledgement to the applicant. This acknowledgement message assigns a reference number to the application, which both the applicant and the CNSC should use in any future correspondence.</p>   <p>The CNSC screens the application to ensure that all information required in the application has been submitted by the applicant. If any information is missing, the CNSC will ask the applicant to submit it.</p>   <p><strong>Note:</strong> This initial screening does not consider the quality of an application or its technical aspects.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="12.2"></div>
<h3 id="sec12-2">12.2 Assessment of application</h3>  <p>The assessment of the application to export risk-significant radioactive sources involves, but is not limited to:</p>
<ul>
<li>review of risk associated with the end-user and consignees involved in the transfer to provide assurances that the sources will not be diverted for malicious purposes. Open source and classified information may be used in this determination</li>
<li>review of the regulatory capability of the Importing State to provide assurances that the sources will be managed safely and securely</li>
<li>obtaining import consent from the Importing State Authority for all applications to export Category 1 radioactive sources from Canada to further verify the end-users&rsquo; authority to receive and possess the sources</li>
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
<div id="12.3"></div>
<h3 id="sec12-3">12.3 Decision of the designated officer</h3>  <p>CNSC staff review the application and make a recommendation to the designated officer. The decision whether or not to issue the export licence is made by the designated officer pursuant to subsection 24(4) of the NSCA.</p>  <p>If the designated officer is considering denying the application, the applicant will be informed of this via a formal letter. Under paragraph 39(1)(a) of the NSCA, the designated officer shall provide a reasonable opportunity to be heard to the applicant before refusing to issue a licence. As such, the letter identifies the opportunity for the applicant to submit any additional information that they believe the designated officer should consider. The letter also provides time limits for filing additional information with the designated officer and instructions for submitting the information. Rule 27 of the <a href="http://laws-lois.justice.gc.ca/eng/regulations/sor-2000-211/page-1.html"><em>Canadian Nuclear Safety Commission Rules of Procedure</em></a> applies with respect to the opportunity to be heard.</p>  <p>Should the designated officer refuse to issue a licence, the applicant can appeal the decision to the Commission. Subsection 43(1) of the NSCA and Rules 29 and 30 of the <em>Canadian Nuclear Safety Commission Rules of Procedure</em> apply with respect to a licence appeal.</p>
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
<h2 id="sec13">13. Compliance with CNSC Requirements</h2>  <p>With respect to the export of risk-significant radioactive sources, individuals and companies are required to comply with the NSCA, its regulations, licences and their terms and conditions, as well as any orders made under the NSCA.</p>
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
<h3 id="sec13-1">13.1 How the CNSC verifies compliance</h3>  <p>The CNSC conducts activities to verify and promote compliance. Audits of licence conditions and inspection activities are among the ways that the CNSC verifies compliance with export licences.</p>
<h4>Audits of licence conditions</h4>  <p>Subsection 24(5) of the NSCA allows licences to contain any term or condition that the CNSC considers necessary for meeting the purposes of the Act. Like other licences issued by the CNSC, export licences contain conditions with which the licensee must comply. The conditions included within a licence are:</p>
<ul>
<li>prior and post shipment notifications</li>
<li>action to be taken with respect to the CBSA in relation to section 18 of the GNSCR</li>
</ul>  <p>The CNSC reviews the information provided by licensees to verify that the authorized quantity of the licence has not been exceeded. The CNSC also reviews the information provided as part of prior and post shipment notifications to verify that exports are being made in accordance with the terms and conditions of licences.</p>
<h4>Inspection activities</h4>  <p>The CNSC uses two general types of inspection activities to verify compliance with export licences:</p>
<ul>
<li>The first is an audit of export-related documentation at licensees&rsquo; facilities. CNSC inspectors may review information such as shipping-related documentation, CBSA customs declarations and inventory control documents.</li>
<li>The second is an inspection of goods that have been detained at the border by the CBSA, in order to determine if they require a CNSC export licence.</li>
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
<div id="13.2"></div>
<h3 id="sec13-2">13.2 Disclosure of non-compliance</h3>  <p>The CNSC recognizes that responsible exporters may, on occasion, inadvertently fail to obtain the appropriate export authorization from the CNSC, as required under the NSCA. Similarly, they may unintentionally fail to comply with a condition of an export licence. Exporters in such a situation are encouraged to disclose any incidence of non-compliance to the CNSC as soon as possible. Appendix B sets out the recommended disclosure procedures to be followed in case of non-compliance.</p>  <p>The CNSC looks favourably upon disclosures if, after considering the information provided (including the nature and seriousness of the disclosed violation or omission), it is satisfied that the exporter has fully cooperated and taken appropriate measures to prevent future re-occurrence of non-compliance. In such instances, no further action is generally warranted.</p>   <p>If no disclosure is made, the CNSC may consider various options to address non compliance, depending on the gravity of the incidence of non-compliance or on the overall circumstances. One such option is to issue an administrative monetary penalty, which is a monetary penalty imposed without court involvement for the violation of a regulatory requirement (see the <a href="/eng/acts-and-regulations/regulatory-action/index">CNSC&rsquo;s website</a> for more information). More serious cases may be referred to the CBSA or the RCMP for further review or investigation.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appA"></div>
<h2 id="appA">Appendix A: Examples of Possible Suspicious Inquiries or Orders</h2>  <p>The following examples illustrate some situations that could be suspicious. Importers or exporters should consider contacting the CNSC at <a href="mailto:export-import@cnsc-ccsn.gc.ca">export-import@cnsc-ccsn.gc.ca</a> or applying for an export licence if they find themselves in these or similar circumstances:</p>
<ul>
<li>The customer is new and knowledge about them is incomplete or inconsistent.</li>
<li>The customer is reluctant to provide information about the end-use of the item or refuses to provide an end-use statement. If information is provided, it is vague.</li>
<li>The customer is unfamiliar with the item and its capabilities but still wishes to purchase the item.</li>
<li>The item does not fit with the customer&rsquo;s area of business. An unconvincing explanation is given as to why the items are required, given the customer&rsquo;s normal business or the technical sophistication of the items.</li>
<li>The customer is evasive or is reluctant to indicate whether the item is for domestic use, export or for re-export.</li>
<li>The item is incompatible with the technical level of the destination country.</li>
<li>The customer is willing to pay cash for an item that normally requires financing or offers to pay a higher price. Other examples of unusual payment terms are roundabout wire transfers, late changes in deal terms and/or source of payment.</li>
<li>Routine installation, training or maintenance services are declined.</li>
<li>The customer makes requests for excessive spare parts or displays no interest in any spare parts.</li>
<li>The customer requests that the item be transferred to a forwarding address in Canada.</li>
<li>A freight forwarding company is listed as the final destination.</li>
<li>Unusual shipping, packaging or labelling arrangements are requested.</li>
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
<div id="appB"></div>
<h2 id="appB">Appendix B: Disclosure of Non-Compliance</h2>  <p>Any voluntary disclosure of non-compliance should be accompanied by a cover letter, signed by a senior company officer, which clearly states that its purpose is to disclose non-compliance with the <em>Nuclear Safety and Control Act, Nuclear Non-proliferation Import and Export Control Regulations</em>, or import and export licences. The letter should be addressed to:</p>  <p>Director, Non-Proliferation and Export Controls Division<br />
Directorate of Security and Safeguards<br />
Canadian Nuclear Safety Commission<br />
P.O. Box 1046, Station B<br />
280 Slater Street<br />
Ottawa, Ontario<br />
K1P 5S9</p>
<p>The following information should be included in the cover letter or in the accompanying documentation:</p>
<ul>
<li>details of the items concerned (including technical specifications for assessment of export control status)</li>
<li>end-use of the item(s)</li>
<li>dates of all shipments, mode of transport, and port of exit/entry</li>
<li>quantities and values of each shipment for each product concerned (including copies of the customs declaration documents submitted to the CBSA, as well as copies of bills of lading, freight forwarding, shipping or commercial invoices)</li>
<li>contract of sale between the exporter and the final consignee</li>
<li>for each import/export in question, a statement as to whether the shipment took place intentionally</li>
<li>description of the circumstances underlying each import/export</li>
<li>description of the steps taken or processes and procedures put in place to ensure that where required, CNSC import/export licences will be obtained in the future</li>
<li>any other documentation that the importer/exporter believes is relevant to the purpose of the disclosure</li>
</ul>  <p>For more information or to inquire further about how to disclose non-compliance, contact the Canadian Nuclear Safety Commission&rsquo;s Non-Proliferation and Export Controls Division via the point of contact provided in <a href="#sec5-2">section 5.2</a> of this document.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appC"></div>
<h2 id="appC">Appendix C: How to Complete Import and Export Applications for Nuclear and Nuclear-Related Dual-Use Items</h2>  <p>Applicants must complete the <a href="http://www.nuclearsafety.gc.ca/eng/pdfs/Forms_Applications/Import_Export/Application_for_a_Licence_to_Import_Nuclear_Items_e.pdf">Application for a Licence to Import Nuclear Items</a> (see section C.1), the <a href="http://www.nuclearsafety.gc.ca/eng/pdfs/Forms_Applications/Import_Export/Application_for_a_Licence_to_Export_Nuclear_and_Nuclear-Related_Dual-Use_Items_e.pdf">Application for a Licence to Export Nuclear and Nuclear-Related Dual-Use Items</a> (see section C.2), or the  <a href="http://www.nuclearsafety.gc.ca/eng/pdfs/Forms_Applications/Import_Export/Application_for_a_License_to_Export_Risk_Significant_Radioactive_Sources_e.pdf">Application for a Licence to Export Risk-Significant Radioactive Sources</a> (see section C.3), as appropriate. For more information, contact the CNSC&rsquo;s Licensing Administrator (Nuclear) as outlined in <a href="#sec5-2">section 5.2</a> of this document.</p>  <p>Ensure that information provided on the forms and in any supporting documentation is clear, accurate and complete. Attachments must specify to which section of the application they pertain. The beginnings of both forms include a check-box section that requires applicants to identify the type of request. Applicants must mark the relevant box to indicate if the application is for:</p>
<ul>
<li>a new licence</li>
<li>a licence amendment (indicate the licence to be amended)</li>
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
<div id="appC.1"></div>
<h3 id="appC-1">C.1: Import licence application guidance</h3>  <h4>Section 1 &ndash; Licence to Possess</h4>  <p>As appropriate, include the number of any relevant CNSC-issued licences, such as possession, operating or facility licence.</p>
<h4>Section 2 &ndash; Applicant</h4>  <p>Provide the name of the person or organization applying for the licence.</p>
<h4>Section 3 &ndash; Importer</h4>  <p>Refers to the facility/entity in Canada that will be receiving the item(s), if not the same as the applicant. If the importing facility is not the same as the applicant, the importing facility&rsquo;s name and location will appear on the licence as "Recipient Location".</p>
<h4>Section 4 &ndash; Supplier(s)</h4>  <p>State the foreign entity or entities that will be supplying the item(s) to the importer. Additional suppliers may be listed on a separate sheet.</p>
<h4>Section 5 &ndash; Description of Nuclear Item(s)</h4>  <p>Refer to Appendix E to help identify where  (i.e., Part A or Part B) the item(s) is (are) controlled. Provide a brief description of the controlled items(s), including relevant technical specifications, form (liquid/solid/gas) and the exact quantity being imported. List the country or countries of origin of the item(s).</p>
<h4>Section 6 &ndash; Intended End-Use</h4>  <p>Describe the end-use of the item, i.e., for what will it be used?</p>
<h4>Section 7 &ndash; Intended End-Use Location(s)</h4>  <p>Identify the location where the item(s) will be used as per the description in section 6 of the application.</p>
<h4>Section 8 &ndash; Shipment</h4>  <p>Provide the anticipated dates for the initial and final imports. If only one item is being received, these dates will be the same.</p>
<h4>Section 9 &ndash; Security, Packaging and Transport</h4>  <p>This section applies only to nuclear material (plutonium, uranium, thorium).</p>
<p>Refer to the <a href="http://laws.justice.gc.ca/eng/sor-2000-209/page-1.html"><em>Nuclear Security Regulations</em></a> to determine if the nuclear material is Category I, II, or III and, as appropriate, follow the directions provided in these regulations.</p>  <p>Refer to the <a href="http://laws.justice.gc.ca/eng/sor-2000-209/page-1.html"><em>Packaging and Transportation of Nuclear Substances Regulations, 2015</em></a> to determine what type of packaging, if any, the item(s) will require.</p>   <p>Exclusive use is defined by the <a href="http://www-pub.iaea.org/MTCD/publications/PDF/Pub1109_scr.pdf"><em>Advisory Material for the IAEA Regulations for the Safe Transport of Radioactive Material</em></a>, paragraph 221.</p>
<h4>Section 10 &ndash; Additional Information</h4>  <p>Provide any further information, as appropriate, in support of the application.</p>
<h4>Section 11 &ndash; Applicant Authority</h4>  <p>This section is to be completed and signed by the applicant or their authorized representative. The signatory must have the authority to sign the licence application and certify that all statements and representations made in the application are true and correct to the best of the signatoryâ€™s knowledge, and that the applicant is bound to them.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appC.1.1"></div>
<div className="col-md-12 mrgn-lft-0">  <h4 id="appC-1-1">C.1.1 Application for a licence to import nuclear items</h4>
<img src="/images/acts-and-regulations/regdoc2-13-2/appendix-c1-1a-eng.jpg" alt="This image shows an application form for a licence to import nuclear items. The image is provided to give context to the explanatory text set out in the appendix. (Page 1)" />
<img src="/images/acts-and-regulations/regdoc2-13-2/appendix-c1-1b-eng.jpg" alt="This image shows an application form for a licence to import nuclear items. The image is provided to give context to the explanatory text set out in the appendix. (Page 2)" />  </div>  <div className="clear"></div>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appC.2"></div>
<h3 id="appC-2">C.2: Export licence application guidance</h3>  <h4>Section 1 &ndash; Applicant</h4>  <p>Provide the name of the person or organization applying for the licence.</p>
<h4>Section 2 &ndash; Exporter</h4>  <p>The exporter is the entity from whose address the item(s) will be shipped at the time of the export. If the exporter&rsquo;s address differs from the applicant, this must be noted on the application.</p>
<h4>Section 3a &ndash; Final Consignee</h4>  <p>Refers to the final entity/facility that will receive the item(s). Note that this may be different from the final end-use location if the final consignee is receiving the item(s), but is not actually using or altering the item(s) as per the intended end-use. Additional consignees may be listed on a separate sheet.</p>
<h4>Section 3b &ndash; Intermediate Consignee</h4>  <p>Refers to any entity/facility that will receive the item(s) before they are delivered to the final consignee. This can occur when the entity/facility temporarily holds the item(s) prior to transfer to the final consignee/end-user. If the item(s) is directly shipped to the final consignee or end-user, this section does not apply. Additional consignees may be listed on a separate sheet.</p>
<h4>Section 4 &ndash; Description of Nuclear Item(s)</h4>  <p>Refer to the Appendix E to assist you in identifying where the item(s) is controlled. Provide a brief description of the controlled items(s), including relevant technical specifications, form (liquid/solid/gas) and the exact quantity being exported.</p>  <p>List the country or countries of origin of the item(s).</p>
<h4>Section 5 &ndash; Intended End-Use</h4>  <p>Describe the end-use of the item i.e., for what will it be used?</p>
<h4>Section 6 &ndash; Intended End-Use Location(s)</h4>  <p>Identify the location where the item(s) will be used as per the description in Section 5.</p>
<h4>Section 7 &ndash; Shipment</h4>  <p>Provide the anticipated dates for the initial and final exports. If only one item is being shipped, these dates will be the same.</p>
<h4>Section 8 &ndash; Security, Packaging and Transport</h4>  <p>This section applies only to nuclear material.</p>
<p>Refer to the <a href="http://laws.justice.gc.ca/eng/sor-2000-209/page-1.html"><em>Nuclear Security Regulations</em></a> to evaluate whether the nuclear material is Category I, II, or III and, as appropriate, follow the directions provided in these regulations.</p>  <p>Refer to the <a href="http://laws.justice.gc.ca/eng/sor-2000-209/page-1.html"><em>Packaging and Transportation of Nuclear Substances Regulations, 2015</em></a> to determine what type of packaging, if any, the item(s) will require.</p>  <p>Exclusive use (as defined by the <a href="http://www-pub.iaea.org/MTCD/publications/PDF/Pub1109_scr.pdf"><em>Advisory Material for the IAEA Regulations for the Safe Transport of Radioactive Material</em></a>, paragraph 221).</p>
<h4>Section 9 &ndash; Additional Information</h4>  <p>Provide any further information, as appropriate, in support of the application.</p>
<h4>Section 10 &ndash; Applicant Authority</h4>  <p>This section is to be completed and signed by the Applicant or their authorized representative. The signatory must have the authority to sign the licence application and certify that all statements and representations made in the application are true and correct to the best of the signatory&rsquo;s knowledge, and that the applicant is bound to them.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appC.2.1"></div>
<h4 id="appC-2-1">C.2.1	Application form for a licence to export nuclear and nuclear-related dual-use items</h4>
<img src="/images/acts-and-regulations/regdoc2-13-2/appendix-c2-1a-eng.jpg" alt="This image shows an application form for a licence to export nuclear items. The image is provided to give context to the explanatory text set out in the appendix. (Page 1)" />
<img src="/images/acts-and-regulations/regdoc2-13-2/appendix-c2-1b-eng.jpg" alt="This image shows an application form for a licence to import nuclear items. The image is provided to give context to the explanatory text set out in the appendix. (Page 2)" />  </div>  <div className="clear"></div>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appD"></div>
<h2 id="appD">Appendix D: How to Complete an Export Application for Risk-Significant Radioactive Sources</h2>  <h3>Procedure for submitting the application</h3>
<ol>
<li>Complete the application, sign, print and mail or fax it to the CNSC address listed at the bottom of the application form. An advance email copy may be submitted; however, a signed original must be provided.</li>
<li>All mandatory information must be provided. Additional information may be submitted on a separate sheet. Incomplete applications may result in delays. Additional information or documents may be requested.</li>
<li>The period to review an application is typically within 15 business days upon receipt of a completed application.</li>
<li>Upon approval of the application, a licence to export risk-significant radioactive sources will be issued and sent by fax and mailed to the applicant.</li>
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
<div id="appD.1"></div>
<h3 id="appD-1">D.1: Export licence application guidance</h3>  <h4>Part 1A: Type of application</h4>  <p>Indicate if this is an application for a new licence or for an amendment to an existing export licence. If it is an amendment to an existing export licence, provide the licence number.</p>
<h4>Part 1B: Applicant/exporter</h4>  <p>Provide the legal name of the applicant.</p>  <p>Provide a unique identifier, if applicable. Applicants may input their own reference number for their tracking purposes; otherwise, it can be left blank.</p>  <p>Provide the name and contact information of a person that the CNSC can contact about the application.</p>  <p>Provide the number of the applicant&#39;s applicable CNSC possession or facility licence. This information is used by the CNSC in verifying that the applicant is authorized to possess the risk-significant radioactive source for which an export licence is sought.</p>
<h4>Part 2A: Final consignee(s)/importer</h4>  <p>Note: the final consignee is the one who takes possession for usage of the source.</p>  <p>Provide the authorization number and expiry date of the importer&#39;s authorization to receive and possess a risk-significant radioactive source. Include a copy of the authorization documentation.</p>  <p>If an import authorization number is unavailable, provide any additional comments or information on the final consignee or the commercial export/import arrangements that may assist the CNSC in assessing whether the source will be managed in a safe and secure manner by the final recipient of the source.</p>  <p>There may be multiple final consignees. Use a separate sheet and include all the information required in part 2A.</p>
<h4>Part 2B: Intermediate consignee(s) via importer</h4>  <p>Provide the requested information for any foreign intermediate consignee who will be in possession of the source prior to its delivery to the final consignee.</p>
<h4>Part 3: Intended date(s) of export</h4>  <p>Provide the date on which the export is intended to take place. If the export transaction requires multiple shipments, provide the intended date for each shipment. Where specific shipment dates are uncertain, provide anticipated initial and final dates of the shipments.</p>
<h4>Part 4: Description of radioactive source(s)</h4>  <p>Provide the name of the nuclear substance.</p>  <p>Provide the maximum activity per source (TBq), the number of sources to be exported and the total activity (TBq) of the nuclear substance to be exported.</p>  <p>Provide the name of any prescribed equipment that will be used with the radioactive source for the intended end use.</p>  <p>Describe the intended end use for each radioactive source to be exported.</p>
<h4>Part 5: Transport information</h4>  <p>Fill in the appropriate box to indicate what type of package is being used to transport the radioactive source.</p>  <p>Provide the package&rsquo;s design approval certificate number and the date that the package design was approved by the CNSC.</p>  <p>If the prescribed equipment is a Type B(U) package &ndash; such as an industrial radiography camera &ndash; indicate the serial number of the package.</p>  <p>If using a Type A package, no additional information is required.</p>  <p>Fill in the appropriate box to indicate whether the shipment will require transport through countries other than the importing country. If yes, list the transit countries.</p>
<h4>Part 6: Additional information on consignee(s), end use(s) and radioactive source(s)</h4>  <p>Provide any additional information on the export transaction pertinent to supporting the application or any other details that may facilitate interactions between the CNSC and the importing authority or facility in support of completing the assessment of the application. Indicate if it is anticipated that the radioactive sources replaced by the exported sources will be returned to Canada as part of pre-existing commercial arrangements.</p>
<h4>Part 7: Applicant authority</h4>  <p>Provide the signature, title, telephone and fax numbers of an individual who has the authority to sign the application on behalf of the applicant, to certify the authenticity of the information in the application form and appended documents. Include the year, month, and day that the application form was signed.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appD.1.1"></div>
<div className="col-md-12 mrgn-lft-0">  <h4 id="appD-1-1">D.1.1	Application form for a licence to export risk-significant radioactive sources</h4>
<img src="/images/regdoc2-13-2-v2/appendix-d1-1a-eng.jpg" alt="This image shows an application form for a licence to export risk-significant tadioactive sources. The image is provided to give context to the explanatory text set out in the appendix. (Page 1)" />
<img src="/images/regdoc2-13-2-v2/appendix-d1-1b-eng.jpg" alt="This image shows an application form for a licence to export risk-significant tadioactive sources. The image is provided to give context to the explanatory text set out in the appendix. (Page 2)" />  </div>  <div className="clear"></div>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appE"></div>
<h2 id="appE">Appendix E: Controlled Nuclear Substances, Equipment and Information</h2>  <p><strong>This appendix is a copy of the current schedule that is contained in the <a href="http://laws-lois.justice.gc.ca/eng/regulations/SOR-2000-210/index.html"><em>Nuclear Non-proliferation Import and Export Control Regulations</em></a>. For the most recent status, please refer directly to the regulations.</strong></p>  <p>The following lists are reproduced, in rearranged form and with some modifications, from International Atomic Energy Agency Information Circulars INFCIRC/254/Rev. 12/Part.1, INFCIRC/254/Rev.9/Part.2 and INFCIRC/209/Rev.3.</p>
<p className="text-center">PART A<br />
LIST OF NUCLEAR ITEMS</p>
<p className="text-center">A.1. CONTROLLED NUCLEAR SUBSTANCES</p>
<p>A.1.1. Special fissionable material, as follows:<br />
(a) plutonium and all isotopes, alloys and compounds and any material that contains any of these substances; and<br />
(b) uranium 233, uranium enriched in the isotopes 235 or 233 and all alloys and compounds and any material that contains any of these substances.</p>
<p>NOTE<br />
Paragraph A.1.1. does not include<br />
(a) special fissionable material occurring as contaminants in laundry, packaging, shielding, or equipment;<br />
(b) special fissionable material used as a sensing component in instruments in quantities of four effective grams or less; or<br />
(c) plutonium 238 that is contained in heart pacemakers.</p>
<p>A.1.2 <em>Source material</em><br />
The following source materials in any form, including ore, concentrate, compound, metal or alloy, or incorporated in any substance, other than medicinals, and in which the concentration of source material is greater than 0.05 weight %:<br />
(a) uranium that contains the mixture of isotopes that occurs in nature;<br />
(b) uranium that is depleted in the isotope 235; and<br />
(c) thorium.</p>
<p>NOTE<br />
Paragraph A.1.2. does not include<br />
(a) source material occurring as contaminants in laundry, packaging, shielding, or equipment; or<br />
(b)  depleted uranium used as shielding for Class II Prescribed Equipment, within the meaning of section 1 of the Class II Nuclear Facilities and Prescribed Equipment Regulations, for radiation devices or for transport packaging.</p>
<p>A.1.3 <em>Deuterium and heavy water</em><br />
Deuterium, heavy water (deuterium oxide) and any other deuterium compound in which the ratio of deuterium to hydrogen atoms exceeds 1:5,000.</p>
<p>NOTE<br />
Paragraph A.1.3 does not include<br />
(a) deuterium contained in deuterium lamps;<br />
(b) deuterium occurring as a contaminant in laundry or equipment; or<br />
(c) any deuterium compound that is used for labelling purposes.</p>
<p>A.1.4 <em>Nuclear grade graphite</em><br />
Graphite having a purity level better than 5 ppm boron equivalent and with a density greater than 1.50 g/cm<sup>3</sup>.</p>
<p>A.1.5 <em>Tritium</em><br />
Tritium, tritium compounds or mixtures containing tritium in which the ratio of tritium to hydrogen by atoms exceeds 1 part in 1000 and products that contains any of these substances.</p>
<p className="text-center">A.2. CONTROLLED NUCLEAR EQUIPMENT</p>
<p>A.2.1 <em>Nuclear reactors and especially designed or prepared equipment and components therefor, including:</em>
<p>A.2.1.1 <em>Complete nuclear reactors</em><br />
Nuclear reactors capable of operation so as to maintain a controlled self-sustaining fission chain reaction.</p>
<p>A.2.1.2 <em>Nuclear reactor vessels</em><br />
Metal vessels, or major shop-fabricated parts therefor, especially designed or prepared to contain the core of a nuclear reactor as well as reactor internals as defined in paragraph A.2.1.8.</p>
<p>A.2.1.3 <em>Nuclear reactor fuel charging and discharging machines</em><br />
Manipulative equipment especially designed or prepared for inserting or removing fuel in a nuclear reactor.</p>
<p>A.2.1.4 <em>Nuclear reactor control rods and equipment</em><br />
Especially designed or prepared rods, support or suspension structures therefor, rod drive mechanisms or rod guide tubes to control the fission process in a nuclear reactor.</p>
<p>A.2.1.5 <em>Nuclear reactor pressure tubes</em><br />
Tubes which are especially designed or prepared to contain fuel elements and the primary coolant in a nuclear reactor at an operating pressure in excess of 50 atmospheres.</p>
<p>A.2.1.6 <em>Zirconium tubes</em><br />
Zirconium metal and alloys in the form of tubes or assemblies of tubes, especially designed or prepared for use in a nuclear reactor and in which the relation of hafnium to zirconium is less than 1:500 parts by weight.</p>
<p>A.2.1.7 <em>Primary coolant pumps</em><br />
Pumps especially designed or prepared for circulating the primary coolant for nuclear reactors.</p>
<p>A.2.1.8 <em>Nuclear reactor internals</em><br />
Nuclear reactor internals especially designed or prepared for use in a nuclear reactor including support columns for the core, fuel channels, thermal shields, baffles, core grid plates, and diffuser plates.</p>
<p>A.2.1.9 <em>Heat exchangers</em><br />
Heat exchangers (steam generators) especially designed or prepared for use in the primary coolant circuit of a nuclear reactor.</p>
<p>A.2.1.10 <em>Neutron detectors and measuring instruments</em><br />
Especially designed or prepared neutron detection and measuring instruments for determining neutron flux within the core of a nuclear reactor.</p>
<p>A.2.2 <em>Plants for the reprocessing of irradiated fuel elements, and equipment especially designed or prepared therefor, including:</em></p>
<p>A.2.2.1 <em>Irradiated fuel element chopping machines</em><br />
Remotely operated equipment especially designed or prepared for use in a reprocessing plant as identified above and intended to cut, chop or shear irradiated nuclear fuel assemblies, bundles or rods.</p>
<p>A.2.2.2 <em>Dissolvers</em><br />
Critically safe tanks (e.g. small diameter, annular or slab tanks) especially designed or prepared for use in a reprocessing plant as identified above, intended for dissolution of irradiated nuclear fuel and which are capable of withstanding hot, highly corrosive liquid, and which can be remotely loaded and maintained.</p>
<p>A.2.2.3 <em>Solvent extractors and solvent extraction equipment</em><br />
Especially designed or prepared solvent extractors such as packed or pulse columns, mixer settlers or centrifugal contactors for use in a plant for the reprocessing of irradiated fuel. Solvent extractors must be resistant to the corrosive effect of nitric acid. Solvent extractors are normally fabricated to extremely high standards (including special welding and inspection and quality assurance and quality control techniques) out of low carbon stainless steels, titanium, zirconium or other high-quality materials.</p>
<p>A.2.2.4 <em>Chemical holding or storage vessel</em><br />
Especially designed or prepared holding or storage vessels for use in a plant for the reprocessing of irradiated fuel. The holding or storage vessels must be resistant to the corrosive effect of nitric acid. The holding or storage vessels are normally fabricated of materials such as low carbon stainless steels, titanium or zirconium, or other high-quality materials. Holding or storage vessels may be designed for remote operation and maintenance and may have the following features for control of nuclear criticality:<br />
(a) walls or internal structures with a boron equivalent of at least 2%;<br />
(b) a maximum diameter of 175 mm (7 in.) for cylindrical vessels; or<br />
(c) a maximum width of 75 mm (3 in.) for either a slab or annular vessel.</p>
<p>A.2.2.5 and A.2.2.6 [Repealed, SOR/2010-106, s. 10]</p>
<p>A.2.3 <em>Plants for the fabrication of nuclear reactor fuel elements, and equipment especially designed or prepared therefor including equipment which:</em><br />
(a) normally comes in direct contact with, or directly processes, or controls, the production flow of nuclear material;<br />
(b) seals the nuclear material within the cladding;<br />
(c) checks the integrity of the cladding or the seal; or<br />
(d) checks the finish treatment of the sealed fuel.</p>
<p>A.2.4 <em>Plants for the separation of isotopes of natural uranium, depleted uranium, or special fissionable material and equipment, other than analytical instruments, especially designed or prepared for that purpose, including</em></p>
<p>A.2.4.1 <em>Gas centrifuges and assemblies and components especially designed or prepared for use in gas centrifuges, including:</em></p>
<p>A.2.4.1.1 <em>Rotating components</em><br />
(a) complete rotor assemblies:<br />
thin-walled cylinders, or a number of interconnected thin-walled cylinders, manufactured from one or more of the high strength to density ratio materials. If interconnected, the cylinders are joined together by flexible bellows or rings as described in paragraph (c). The rotor is fitted with an internal baffle(s) and end caps, as described in paragraphs (d) and (e), if in final form. However the complete assembly may be delivered only partly assembled;<br />
(b) rotor tubes:<br />
especially designed or prepared thin-walled cylinders with thickness of 12 mm (0.5 in.) or less, a diameter of between 75 mm (3 in.) and 400 mm (16 in.), and manufactured from high strength to density ratio materials;<br />
(c) rings or bellows:<br />
components especially designed or prepared to give localized support to the rotor tube or to join together a number of rotor tubes. The bellows is a short cylinder of wall thickness 3 mm (0.12 in.) or less, a diameter of between 75 mm (3 in.) and 400 mm (16 in.), having a convolute, and manufactured from high strength to density ratio materials;<br />
(d) baffles:<br />
disc-shaped components of between 75 mm (3 in.) and 400 mm (16 in.) diameter especially designed or prepared to be mounted inside the centrifuge rotor tube, in order to isolate the take-off chamber from the main separation chamber and, in some cases, to assist the UF<sub>6</sub> gas circulation within the main separation chamber of the rotor tube, and manufactured from strength to density ratio materials; and<br />
(e) top caps/bottom caps:<br />
disc-shaped components of between 75 mm (3 in.) and 400 mm (16 in.) diameter especially designed or prepared to fit to the ends of the rotor tube, and so contain the UF<sub>6</sub> within the rotor tube, and in some cases to support, retain or contain as an integrated part an element of the upper bearing (top cap) or to carry the rotating elements of the motor and lower bearing (bottom cap), and manufactured from high strength to density ratio materials.</p>
<p>A.2.4.1.2 <em>Static components</em><br />
(a) magnetic suspension bearings:<br />
especially designed or prepared bearing assemblies consisting of an annular magnet suspended within a housing containing a damping medium. The housing will be manufactured from a UF<sub>6</sub>-resistant material. The magnet couples with a pole piece or a second magnet fitted to the top cap described in paragraph A.2.4.1.1.(e). The magnet may be ring-shaped with a relation between outer and inner diameter smaller or equal to 1.6:1. The magnet may be in a form having an initial permeability of 0.15 H/m (120,000 in CGS units) or more, or a remanence of 98.5% or more, or an energy product of greater than 80 kJ/m<sup>3</sup> (107 gauss-oersteds). In addition to the usual material properties, it is a prerequisite that the deviation of the magnetic axes from the geometrical axes is limited to very small tolerances (lower than 0.1 mm or 0.004 in.) or that homogeneity of the material of the magnet is specially called for;<br />
(b) bearings/dampers:<br />
especially designed or prepared bearings comprising a pivot/cup assembly mounted on a damper. The pivot is normally a hardened steel shaft with a hemisphere at one end with a means of attachment to the bottom cap described in paragraph A.2.4.1.1.(e) at the other. The shaft may however have a hydrodynamic bearing attached. The cup is pellet-shaped with a hemispherical indentation in one surface. These components are often supplied separately to the damper;<br />
(c) molecular pumps:<br />
especially designed or prepared cylinders having internally machined or extruded helical grooves and internally machined bores. Typical dimensions are as follows: 75 mm (3 in.) to 400 mm (16 in.) internal diameter, 10 mm (0.4 in.) or more wall thickness, with the length equal to or greater than the diameter. The grooves are typically rectangular in cross-section and 2 mm (0.08 in.) or more in depth;<br />
(d) motor stators:<br />
especially designed or prepared ring-shaped stators for high speed multiphase AC hysteresis (or reluctance) motors for synchronous operation within a vacuum in the frequency range of 600 Hz to 2 000 Hz and a power range of 50 VA to 1 000 VA. The stators consist of multiphase windings on a laminated low loss iron core comprised of thin layers typically 2 mm (0.08 in.) thick or less;<br />
(e) centrifuge housing/recipients:<br />
components especially designed or prepared to contain the rotor tube assembly of a gas centrifuge. The housing consists of a rigid cylinder of wall thickness up to 30 mm (1.2 in.) with precision machined ends to locate the bearings and with one or more flanges for mounting. The machined ends are parallel to each other and perpendicular to the cylinder&rsquo;s longitudinal axis to within 0.05&deg; or less. The housing may also be a honeycomb type structure to accommodate several rotor tubes. The housings are made of or protected by materials resistant to corrosion by UF<sub>6</sub>; and<br />
(f) scoops:<br />
specially designed or prepared tubes of up to 12 mm (0.5 in.) internal diameter for the extraction of UF<sub>6</sub> gas from within the rotor tube by a Pitot tube action (that is, with an aperture facing into the circumferential gas flow within the rotor tube, for example by bending the end of a radially disposed tube) and capable of being fixed to the central gas extraction system. The tubes are made of or protected by materials resistant to corrosion by UF<sub>6</sub>.</p>
<p>A.2.4.2 <em>Especially designed or prepared auxiliary systems, equipment and components for gas centrifuge enrichment plants, including:</em></p>
<p>A.2.4.2.1 <em>Feed systems/product and tails withdrawal systems</em><br />
Especially designed or prepared process systems including:<br />
(a) feed autoclaves (or stations), used for passing UF<sub>6</sub> to the centrifuge cascades at up to 100 kPa (15 psi) and at a rate of 1 kg/h or more;<br />
(b) desublimers (or cold traps) used to remove UF<sub>6</sub> from the cascades at up to 3 kPa (0.5 psi) pressure. The desublimers are capable of being chilled to 203 K (-70&deg;C) and heated to 343 K (70&deg;C); and<br />
(c) product and tails stations used for trapping UF<sub>6</sub> into containers.<br />
This plant, equipment and pipework is wholly made of or lined with UF<sub>6</sub>-resistant materials and is fabricated to very high vacuum and cleanliness standards.</p>
<p>A.2.4.2.2 <em>Machine header piping systems</em><br />
Especially designed or prepared piping systems and header systems for handling UF<sub>6</sub> within the centrifuge cascades. The piping network is normally of the triple header system with each centrifuge connected to each of the headers. There is thus a substantial amount of repetition in its form. It is wholly made of UF<sub>6</sub>-resistant materials and is fabricated to very high vacuum and cleanliness standards.</p>
<p>A.2.4.2.3 <em>Special shut-off and control valves</em><br />
Especially designed or prepared bellows-sealed shut-off and control valves, manual or automated, made of or protected by materials resistant to corrosion by UF<sub>6</sub>, with a diameter of 10 mm to 160 mm (0.4 in. to 6.3 in.), for use in main or auxiliary systems of gas centrifuge enrichment plants.</p>
<p>A.2.4.2.4 <em>UF<sub>6</sub> mass spectrometers/ion sources</em><br />
Especially designed or prepared magnetic or quadrupole mass spectrometers capable of taking on-line samples of feed, product or tails, from UF<sub>6</sub> gas streams and having all of the following characteristics:<br />
(a) unit resolution for atomic mass unit greater than 320;<br />
(b) ion sources constructed of or lined with nichrome or monel or nickel plated;<br />
(c) electron bombardment ionization sources; and<br />
(d) having a collector system suitable for isotopic analysis.</p>
<p>A.2.4.2.5 <em>Frequency changers</em><br />
Frequency changers (also known as converters or invertors) especially designed or prepared to supply motor stators as defined in paragraph A.2.4.1.2.(d), or parts, components and sub-assemblies of such frequency changers having all of the following characteristics:<br />
(a) a multiphase output of 600 Hz to 2 000 Hz;<br />
(b) high stability (with frequency control better than 0.1%);<br />
(c) low harmonic distortion (less than 2%); and<br />
(d) an efficiency of greater than 80%.</p>
<p>A.2.4.3 <em>Especially designed or prepared assemblies and components for use in gaseous diffusion enrichment, including:</em></p>
<p>A.2.4.3.1 <em>Gaseous diffusion barriers</em><br />
(a) especially designed or prepared thin, porous filters, with a pore size of 100 &Aring; to 1 000 &Aring; (angstroms), a thickness of 5 mm (0.2 in.) or less, and for tubular forms, a diameter of 25 mm (1 in.) or less, made of metallic, polymer or ceramic materials resistant to corrosion by UF<sub>6</sub>; and<br />
(b) especially prepared compounds or powders for the manufacture of such filters. Such compounds and powders include nickel or alloys containing 60% or more nickel, aluminium oxide, or UF<sub>6</sub>-resistant fully fluorinated hydrocarbon polymers having a purity of 99.9% or more, a particle size less than 10 microns, and a high degree of particle size uniformity, which are especially prepared for the manufacture of gaseous diffusion barriers.</p>
<p>A.2.4.3.2 <em>Diffuser housings</em><br />
Especially designed or prepared hermetically sealed cylindrical vessels greater than 300 mm (12 in.) in diameter and greater than 900 mm (35 in.) in length, or rectangular vessels of comparable dimensions, which have an inlet connection and two outlet connections all of which are greater than 50 mm (2 in.) in diameter, for containing the gaseous diffusion barrier, made of or lined with UF<sub>6</sub>-resistant materials and designed for horizontal or vertical installation.</p>
<p>A.2.4.3.3 <em>Compressors and gas blowers</em><br />
Especially designed or prepared axial, centrifugal, or positive displacement compressors, or gas blowers with a suction volume capacity of 1 m3/min or more of UF<sub>6</sub>, and with a discharge pressure of up to several hundred kPa (100 psi), designed for long-term operation in the UF<sub>6</sub> environment with or without an electrical motor of appropriate power, as well as separate assemblies of such compressors and gas blowers. These compressors and gas blowers have a pressure ratio between 2:1 and 6:1 and are made of, or lined with, materials resistant to UF<sub>6</sub>.</p>
<p>A.2.4.3.4 <em>Rotary shaft seals</em><br />
Especially designed or prepared vacuum seals, with seal feed and seal exhaust connections, for sealing the shaft connecting the compressor or the gas blower rotor with the driver motor so as to ensure a reliable seal against in-leaking of air into the inner chamber of the compressor or gas blower which is filled with UF<sub>6</sub>. Such seals are normally designed for a buffer gas in-leakage rate of less than 1 000 cm<sup>3</sup>/min (60 in.<sup>3</sup>/min).</p>
<p>A.2.4.3.5 <em>Heat exchangers for cooling UF<sub>6</sub></em><br />
Especially designed or prepared heat exchangers made of or lined with UF<sub>6</sub>-resistant materials (except stainless steel) or with copper or any combination of those metals, and intended for a leakage pressure change rate of less than 10 Pa/h (0.0015 psi/h) under a pressure difference of 100 kPa (15 psi).</p>
<p>A.2.4.4 <em>Especially designed or prepared auxiliary systems, equipment and components for use in gaseous diffusion enrichment, including:</em></p>
<p>A.2.4.4.1 <em>Feed systems/product and tails withdrawal systems</em><br />
Especially designed or prepared process systems, capable of operating at pressures of 300 kPa (45 psi) or less, including:<br />
(a) feed autoclaves (or systems) used for passing UF<sub>6</sub> to the gaseous diffusion cascades;<br />
(b) desublimers (or cold traps) used to remove UF<sub>6</sub> from diffusion cascades;<br />
(c) liquefaction stations where UF<sub>6</sub> gas from the cascade is compressed and cooled to form liquid UF<sub>6</sub>; and<br />
(d) product or tails stations used for transferring UF<sub>6</sub> into containers.</p>
<p>A.2.4.4.2 <em>Header piping systems</em><br />
Especially designed or prepared piping systems and header systems for handling UF<sub>6</sub> within the gaseous diffusion cascades. This piping network is normally of the double header system with each cell connected to each of the headers.</p>
<p>A.2.4.4.3 <em>Vacuum systems</em><br />
(a) especially designed or prepared large vacuum manifolds, vacuum headers and vacuum pumps having a suction capacity of 5 m<sup>3</sup>/min (175 ft.<sup>3</sup>/min) or more; and<br />
(b) vacuum pumps especially designed for service in UF<sub>6</sub>-bearing atmospheres made of, or lined with, aluminium, nickel, or alloys bearing more than 60% nickel. These pumps may be either rotary or positive, may have displacement and fluorocarbon seals, and may have special working fluids present.</p>
<p>A.2.4.4.4 <em>Special shut-off and control valves</em><br />
Especially designed or prepared manual or automated shut-off and control bellows valves made of UF<sub>6</sub>-resistant materials with a diameter of 40 mm to 1 500 mm (1.5 in. to 59 in.) for installation in main and auxiliary systems of gaseous diffusion enrichment plants.</p>
<p>A.2.4.4.5 <em>UF<sub>6</sub> mass spectrometers/ion sources</em><br />
Especially designed or prepared magnetic or quadrupole mass spectrometers capable of taking on-line samples of feed, product or tails, from UF<sub>6</sub> gas streams and having all of the following characteristics:<br />
(a) resolution for atomic mass unit greater than 320;<br />
(b) ion sources constructed of or lined with nichrome or monel or nickel plated;<br />
(c) electron bombardment ionization sources; and<br />
(d) collector system suitable for isotopic analysis.</p>
<p>A.2.4.5 <em>Especially designed or prepared systems, equipment and components for use in aerodynamic enrichment plant , including:</em></p>
<p>A.2.4.5.1 <em>Separation nozzles</em><br />
Especially designed or prepared separation nozzles and assemblies thereof. The separation nozzles consist of slit-shaped, curved channels having a radius of curvature less than 1 mm (typically 0.1 mm to 0.05 mm), resistant to corrosion by UF<sub>6</sub> and having a knife-edge within the nozzle that separates the gas flowing through the nozzle into two fractions.</p>
<p>A.2.4.5.2 <em>Vortex tubes</em><br />
Especially designed or prepared vortex tubes and assemblies thereof. The vortex tubes are cylindrical or tapered, made of or protected by materials resistant to corrosion by UF<sub>6</sub>, having a diameter of between 0.5 cm and 4 cm, a length to diameter ratio of 20:1 or less and with one or more tangential inlets. The tubes may be equipped with nozzle-type appendages at either or both ends.</p>
<p>A.2.4.5.3 <em>Compressors and gas blowers</em><br />
Especially designed or prepared axial, centrifugal or positive displacement compressors or gas blowers made of or protected by materials resistant to corrosion by UF<sub>6</sub> and with a suction volume capacity of 2 m<sup>3</sup>/min or more of UF<sub>6</sub>/carrier gas (hydrogen or helium) mixture.</p>
<p>A.2.4.5.4 <em>Rotary shaft seals</em><br />
Especially designed or prepared rotary shaft seals, with seal feed and seal exhaust connections, for sealing the shaft connecting the compressor rotor or the gas blower rotor with the driver motor so as to ensure a reliable seal against out-leakage of process gas or in-leakage of air or seal gas into the inner chamber of the compressor or gas blower which is filled with a UF<sub>6</sub>/carrier gas mixture.</p>
<p>A.2.4.5.5 <em>Heat exchangers for gas cooling</em><br />
Especially designed or prepared heat exchangers made of or protected by materials resistant to corrosion by UF<sub>6</sub>.</p>
<p>A.2.4.5.6 <em>Separation element housings</em><br />
Especially designed or prepared separation element housings, made of or protected by materials resistant to corrosion by UF<sub>6</sub>, for containing vortex tubes or separation nozzles.</p>
<p>A.2.4.5.7 <em>Feed systems/product and tails withdrawal systems</em><br />
Especially designed or prepared process systems or equipment for enrichment plants made of or protected by materials resistant to corrosion by UF<sub>6</sub>, including:<br />
(a) feed autoclaves, ovens, or systems used for passing UF<sub>6</sub> to the enrichment process;<br />
(b) desublimers (or cold traps) used to remove UF<sub>6</sub> from the enrichment process for subsequent transfer upon heating;<br />
(c) solidification or liquefaction stations used to remove UF<sub>6</sub> from the enrichment process by compressing and converting UF<sub>6</sub> to a liquid or solid form; and<br />
(d) product or tails stations used for transferring UF<sub>6</sub> into containers.</p>
<p>A.2.4.5.8 <em>Header piping systems</em><br />
Especially designed or prepared header piping systems, made of or protected by materials resistant to corrosion by UF<sub>6</sub>, for handling UF<sub>6</sub> within the aerodynamic cascades. This piping network is normally of the double header design with each stage or group of stages connected to each of the headers.</p>
<p>A.2.4.5.9 <em>Vacuum systems and pumps</em><br />
(a) especially designed or prepared vacuum systems having a suction capacity of 5 m<sup>3</sup>/min or more, consisting of vacuum manifolds, vacuum headers and vacuum pumps, and designed for service in UF<sub>6</sub>-bearing atmospheres; and<br />
(b) vacuum pumps especially designed or prepared for service in UF<sub>6</sub>-bearing atmospheres and made of or protected by materials resistant to corrosion by UF<sub>6</sub>. These pumps may use fluorocarbon seals and special working fluids.</p>
<p>A.2.4.5.10 <em>Special shut-off and control valves</em><br />
Especially designed or prepared manual or automated shut-off and control bellows valves made of or protected by materials resistant to corrosion by UF<sub>6</sub> with a diameter of 40 mm to 1 500 mm for installation in main and auxiliary systems of aerodynamic enrichment plants.</p>
<p>A.2.4.5.11 <em>UF<sub>6</sub> mass spectrometers/ion sources</em><br />
Especially designed or prepared magnetic or quadrupole mass spectrometers capable of taking on-line samples of feed, product or tails, from UF<sub>6</sub> gas streams and having all of the following characteristics:<br />
(a) unit resolution for mass greater than 320;<br />
(b) ion sources constructed of or lined with nichrome or monel or nickel plated;<br />
(c) electron bombardment ionization sources; and<br />
(d) collector system suitable for isotopic analysis.</p>
<p>A.2.4.5.12 <em>UF<sub>6</sub>/carrier gas separation systems</em><br />
Especially designed or prepared process systems for separating UF<sub>6</sub> from carrier gas (hydrogen or helium).</p>
<p>A.2.4.6 <em>Especially designed or prepared systems, equipment and components for use in chemical exchange or ion exchange enrichment plant, including:</em></p>
<p>A.2.4.6.1 <em>Liquid-liquid exchange columns (chemical exchange)</em><br />
Countercurrent liquid-liquid exchange columns having mechanical power input (i.e., pulsed columns with sieve plates, reciprocating plate columns, and columns with internal turbine mixers), especially designed or prepared for uranium enrichment using the chemical exchange process. For corrosion resistance to concentrated hydrochloric acid solutions, these columns and their internals are made of or protected by suitable plastic materials (such as fluorocarbon polymers) or glass. The stage residence time of the columns is designed to be short (30 s or less).</p>
<p>A.2.4.6.2 <em>Liquid-liquid centrifugal contactors (chemical exchange)</em><br />
Liquid-liquid centrifugal contactors especially designed or prepared for uranium enrichment using the chemical exchange process. Such contactors use rotation to achieve dispersion of the organic and aqueous streams and then centrifugal force to separate the phases. For corrosion resistance to concentrated hydrochloric acid solutions, the contactors are made of or are lined with suitable plastic materials (such as fluorocarbon polymers) or are lined with glass. The stage residence time of the centrifugal contactors is designed to be short (30 s or less).</p>
<p>A.2.4.6.3 <em>Uranium reduction systems and equipment (chemical exchange)</em><br />
(a) especially designed or prepared electrochemical reduction cells to reduce uranium from one valence state to another for uranium enrichment using the chemical exchange process. The cell materials in contact with process solutions must be corrosion resistant to concentrated hydrochloric acid solutions; and<br />
(b) especially designed or prepared systems at the product end of the cascade for taking the U<sup>+4</sup> out of the organic stream, adjusting the acid concentration and feeding to the electrochemical reduction cells.</p>
<p>A.2.4.6.4 <em>Feed preparation systems (chemical exchange)</em><br />
Especially designed or prepared systems for producing high-purity uranium chloride feed solutions for chemical exchange uranium isotope separation plants.</p>
<p>A.2.4.6.5 <em>Uranium oxidation systems (chemical exchange)</em><br />
Especially designed or prepared systems for oxidation of U<sup>+3</sup> to U<sup>+4</sup> for return to the uranium isotope separation cascade in the chemical exchange enrichment process.</p>
<p>A.2.4.6.6 <em>Fast-reacting ion exchange resins/adsorbents (Ion exchange)</em><br />
Fast-reacting ion-exchange resins or adsorbents especially designed or prepared for uranium enrichment using the ion exchange process, including porous macroreticular resins, and pellicular structures in which the active chemical exchange groups are limited to a coating on the surface of an inactive porous support structure, and other composite structures in any suitable form including particles or fibres. These ion exchange resins/adsorbents have diameters of 0.2 mm or less and must be chemically resistant to concentrated hydrochloric acid solutions as well as physically strong enough so as not to degrade in the exchange columns. The resins/adsorbents are especially designed to achieve very fast uranium isotope exchange kinetics (exchange rate half-time of less than 10 s) and are capable of operating at a temperature in the range of 100&deg;C to 200&deg;C.</p>
<p>A.2.4.6.7 <em>Ion exchange columns (Ion exchange)</em><br />
Cylindrical columns greater than 1 000 mm in diameter for containing and supporting packed beds of ion exchange resin/adsorbent, especially designed or prepared for uranium enrichment using the ion exchange process. These columns are made of or protected by materials (such as titanium or fluorocarbon plastics) resistant to corrosion by concentrated hydrochloric acid solutions and are capable of operating at a temperature in the range of 100&deg;C to 200&deg;C and pressures above 0.7 MPa (10<sup>2</sup> psi).</p>
<p>A.2.4.6.8 <em>Ion exchange reflux systems (Ion exchange)</em><br />
(a) especially designed or prepared chemical or electrochemical reduction systems for regeneration of the chemical reducing agent(s) used in ion exchange uranium enrichment cascades; and<br />
(b) especially designed or prepared chemical or electrochemical oxidation systems for regeneration of the chemical oxidizing agent(s) used in ion exchange uranium enrichment cascades.</p>
<p>A.2.4.7 <em>Especially designed or prepared systems, equipment and components for use in laser-based enrichment plants, including:</em></p>
<p>A.2.4.7.1 <em>Uranium vaporization systems (AVLIS)</em><br />
Especially designed or prepared uranium vaporization systems which contain high-power strip or scanning electron beam guns with a delivered power on the target of more than 2.5 kW/cm.</p>
<p>A.2.4.7.2 <em>Liquid uranium metal handling systems (AVLIS)</em><br />
Especially designed or prepared liquid metal handling systems for molten uranium or uranium alloys, consisting of crucibles and cooling equipment for the crucibles.</p>
<p>A.2.4.7.3 <em>Uranium metal product and tails collector assemblies (AVLIS)</em><br />
Especially designed or prepared product and tails collector assemblies for uranium metal in liquid or solid form.</p>
<p>A.2.4.7.4 <em>Separator module housings (AVLIS)</em><br />
Especially designed or prepared cylindrical or rectangular vessels for containing the uranium metal vapour source, the electron beam gun, and the product and tails collectors.</p>
<p>A.2.4.7.5 <em>Supersonic expansion nozzles (MLIS)</em><br />
Especially designed or prepared supersonic expansion nozzles for cooling mixtures of UF<sub>6</sub> and carrier gas to 150 K or less and which are corrosion resistant to UF<sub>6</sub>.</p>
<p>A.2.4.7.6 <em>Uranium pentafluoride product collectors (MLIS)</em><br />
Especially designed or prepared uranium pentafluoride (UF<sub>5</sub>) solid product collectors consisting of filter, impact, or cyclone-type collectors, or combinations thereof, and which are corrosion resistant to the UF<sub>5</sub>/UF<sub>6</sub> environment.</p>
<p>A.2.4.7.7 <em>UF<sub>6</sub>/carrier gas compressors (MLIS)</em><br />
Especially designed or prepared compressors for UF<sub>6</sub>/carrier gas mixtures, designed for long-term operation in a UF<sub>6</sub> environment. The components of these compressors that come into contact with process gas are made of or protected by materials resistant to corrosion by UF<sub>6</sub>.</p>
<p>A.2.4.7.8 <em>Rotary shaft seals (MLIS)</em><br />
Especially designed or prepared rotary shaft seals, with seal feed and seal exhaust connections, for sealing the shaft connecting the compressor rotor with the driver motor so as to ensure a reliable seal against out-leakage of process gas or in-leakage of air or seal gas into the inner chamber of the compressor which is filled with a UF<sub>6</sub>/carrier gas mixture.</p>
<p>A.2.4.7.9 <em>Fluorination systems (MLIS)</em><br />
Especially designed or prepared systems for fluorinating UF<sub>5</sub> (solid) to UF<sub>6</sub> (gas).</p>
<p>A.2.4.7.10 <em>UF<sub>6</sub> mass spectrometers/ion sources (MLIS)</em><br />
Especially designed or prepared magnetic or quadrupole mass spectrometers capable of taking on-line samples of feed, product or tails, from UF<sub>6</sub> gas streams and having all of the following characteristics:<br />
(a) unit resolution for mass greater than 320;<br />
(b) ion sources constructed of or lined with nichrome or monel or nickel plated;<br />
(c) electron bombardment ionization sources; and<br />
(d) collector system suitable for isotopic analysis.</p>
<p>A.2.4.7.11 <em>Feed systems/product and tails withdrawal systems (MLIS)</em><br />
Especially designed or prepared process systems or equipment for enrichment plants made of or protected by materials resistant to corrosion by UF<sub>6</sub>, including:<br />
(a) feed autoclaves, ovens, or systems used for passing UF<sub>6</sub> to the enrichment process;<br />
(b) desublimers (or cold traps) used to remove UF<sub>6</sub> from the enrichment process for subsequent transfer upon heating;<br />
(c) solidification or liquefaction stations used to remove UF<sub>6</sub> from the enrichment process by compressing and converting UF<sub>6</sub> to a liquid or solid form; and<br />
(d) product or tails stations used for transferring UF<sub>6</sub> into containers.</p>
<p>A.2.4.7.12 <em>UF<sub>6</sub>/carrier gas separation systems (MLIS)</em><br />
Especially designed or prepared process systems for separating UF<sub>6</sub> from carrier gas. The carrier gas may be nitrogen, argon, or other gas.</p>
<p>A.2.4.7.13 <em>Laser systems (AVLIS, MLIS and CRISLA)</em><br />
Lasers or laser systems especially designed or prepared for the separation of uranium isotopes.</p>
<p>A.2.4.8 <em>Especially designed or prepared systems, equipment and components for use in plasma separation enrichment plants, including:</em></p>
<p>A.2.4.8.1 <em>Microwave power sources and antennae</em><br />
Especially designed or prepared microwave power sources and antennae for producing or accelerating ions and having the following characteristics: greater than 30 GHz frequency and greater than 50 kW mean power output for ion production.</p>
<p>A.2.4.8.2 <em>Ion excitation coils</em><br />
Especially designed or prepared radio frequency ion excitation coils for frequencies of more than 100 kHz and capable of handling more than 40 kW mean power.</p>
<p>A.2.4.8.3 <em>Uranium plasma generation systems</em><br />
Especially designed or prepared systems for the generation of uranium plasma, which may contain high-power strip or scanning electron beam guns with a delivered power on the target of more than 2.5 kW/cm.</p>
<p>A.2.4.8.4 <em>Liquid uranium metal handling systems</em><br />
Especially designed or prepared liquid metal handling systems for molten uranium or uranium alloys, consisting of crucibles and cooling equipment for the crucibles.</p>
<p>A.2.4.8.5 <em>Uranium metal product and tails collector assemblies</em><br />
Especially designed or prepared product and tails collector assemblies for uranium metal in solid form. These collector assemblies are made of or protected by materials resistant to the heat and corrosion of uranium metal vapour, such as yttria-coated graphite or tantalum.</p>
<p>A.2.4.8.6 <em>Separator module housings</em><br />
Cylindrical vessels especially designed or prepared for use in plasma separation enrichment plants for containing the uranium plasma source, radio-frequency drive coil and the product and tails collectors.</p>
<p>A.2.4.9 <em>Especially designed or prepared systems, equipment and components for use in electromagnetic enrichment plants, including:</em></p>
<p>A.2.4.9.1 <em>Electromagnetic isotope separators</em><br />
Electromagnetic isotope separators especially designed or prepared for the separation of uranium isotopes, and equipment and components therefor, including:<br />
(a) ion sources:<br />
especially designed or prepared single or multiple uranium ion sources consisting of a vapour source, ionizer, and beam accelerator, constructed of suitable materials such as graphite, stainless steel, or copper, and capable of providing a total ion beam current of 50 mA or greater;<br />
(b) ion collectors:<br />
collector plates consisting of two or more slits and pockets especially designed or prepared for collection of enriched and depleted uranium ion beams and constructed of suitable materials such as graphite or stainless steel;<br />
(c) vacuum housings:<br />
especially designed or prepared vacuum housings for uranium electromagnetic separators, constructed of suitable non-magnetic materials such as stainless steel and designed for operation at pressures of 0.1 Pa or lower; and<br />
(d) magnet pole pieces:<br />
especially designed or prepared magnet pole pieces having a diameter greater than 2 m used to maintain a constant magnetic field within an electromagnetic isotope separator and to transfer the magnetic field between adjoining separators.</p>
<p>A.2.4.9.2 <em>High voltage power supplies</em><br />
Especially designed or prepared high-voltage power supplies for ion sources, having all of the following characteristics: capable of continuous operation, output voltage of 20 000 V or greater, output current of 1 A or greater, and voltage regulation of better than 0.01% over a time period of 8 hours.</p>
<p>A.2.4.9.3 <em>Magnet power supplies</em><br />
Especially designed or prepared high-power, direct current magnet power supplies having all of the following characteristics: capable of continuously producing a current output of 500 A or greater at a voltage of 100 V or greater and with a current or voltage regulation better than 0.01% over a period of 8 hours.</p>
<p>A.2.5 <em>Plants for the production or concentration of heavy water, deuterium and deuterium compounds and equipment especially designed or prepared therefor, including:</em></p>
<p>A.2.5.1 <em>Water-hydrogen sulphide exchange towers</em><br />
Exchange towers fabricated from fine carbon steel (such as ASTM A516) with diameters of 6 m (20 ft.) to 9 m (30 ft.), capable of operating at pressures greater than or equal to 2 MPa (300 psi) and with a corrosion allowance of 6 mm or greater, especially designed or prepared for heavy water production utilizing the water-hydrogen sulphide exchange process.</p>
<p>A.2.5.2 <em>Blowers and compressors</em><br />
Single stage, low head (i.e., 0.2 MPa or 30 psi) centrifugal blowers or compressors for hydrogen-sulphide gas circulation (i.e., gas containing more than 70% H2S) especially designed or prepared for heavy water production utilizing the water-hydrogen sulphide exchange process. These blowers or compressors have a throughput capacity greater than or equal to 56 m<sup>3</sup>/s (120,000 SCFM) while operating at pressures greater than or equal to 1.8 MPa (260 psi) suction and have seals designed for wet H<sub>2</sub>S service.</p>
<p>A.2.5.3 <em>Ammonia-hydrogen exchange towers</em><br />
Ammonia-hydrogen exchange towers greater than or equal to 35 m (114.3 ft.) in height with diameters of 1.5 m (4.9 ft.) to 2.5 m (8.2 ft.) capable of operating at pressures greater than 15 MPa (2,225 psi) especially designed or prepared for heavy water production utilizing the ammonia-hydrogen exchange process. These towers also have at least one flanged, axial opening of the same diameter as the cylindrical part through which the tower internals can be inserted or withdrawn.</p>
<p>A.2.5.4 <em>Tower internals and stage pumps</em><br />
Tower internals and stage pumps especially designed or prepared for towers for heavy water production utilizing the ammonia-hydrogen exchange process. Tower internals include especially designed stage contactors which promote intimate gas/liquid contact. Stage pumps include especially designed submersible pumps for circulation of liquid ammonia within a contacting stage internal to the stage towers.</p>
<p>A.2.5.5 <em>Ammonia crackers</em><br />
Ammonia crackers with operating pressures greater than or equal to 3 MPa (450 psi) especially designed or prepared for heavy water production utilizing the ammonia-hydrogen exchange process.</p>
<p>A.2.5.6 <em>Infrared absorption analyzers</em><br />
Infrared absorption analyzers capable of on-line hydrogen/deuterium ratio analysis where deuterium concentrations are equal to or greater than 90%.</p>
<p>A.2.5.7 <em>Catalytic burners</em><br />
Catalytic burners for the conversion of enriched deuterium gas into heavy water especially designed or prepared for heavy water production utilizing the ammonia-hydrogen exchange process.</p>
<p>A.2.5.8 <em>Complete heavy water upgrade systems or columns therefor</em><br />
Complete heavy water upgrade systems, or columns therefor, especially designed or prepared for the upgrade of heavy water to reactor-grade deuterium concentration.</p>
<p>A.2.6 <em>Plants for the conversion of uranium and plutonium for use in the fabrication of fuel elements and the separation of uranium isotopes, as set out in paragraphs A.2.3. and A.2.4., respectively, and equipment especially designed or prepared for such plants, including</em></p>
<p>A.2.6.1 <em>Plants for the conversion of uranium and equipment especially designed or prepared for that purpose, including</em></p>
<p>A.2.6.1.1 Especially designed or prepared systems for the conversion of uranium ore concentrates to UO<sub>3</sub>.</p>
<p>A.2.6.1.2 Especially designed or prepared systems for the conversion of UO<sub>3</sub> to UF<sub>6</sub>.</p>
<p>A.2.6.1.3 Especially designed or prepared systems for the conversion of UO<sub>3</sub> to UO<sub>2</sub>.</p>
<p>A.2.6.1.4 Especially designed or prepared systems for the conversion of UO<sub>2</sub> to UF<sub>4</sub>.</p>
<p>A.2.6.1.5 Especially designed or prepared systems for the conversion of UF<sub>4</sub> to UF<sub>6</sub>.</p>
<p>A.2.6.1.6 Especially designed or prepared systems for the conversion of UF<sub>4</sub> to U metal.</p>
<p>A.2.6.1.7 Especially designed or prepared systems for the conversion of UF<sub>6</sub> to UO<sub>2</sub>.</p>
<p>A.2.6.1.8 Especially designed or prepared systems for the conversion of UF<sub>6</sub> to UF<sub>4</sub>.</p>
<p>A.2.6.1.9 Especially designed or prepared systems for the conversion of UO<sub>2</sub> to UCl<sub>4</sub>.</p>
<p>A.2.6.2 <em>Plants for the conversion of plutonium and equipment especially designed or prepared for that purpose, including</em></p>
<p>A.2.6.2.1 Especially designed or prepared systems for the conversion of plutonium nitrate to oxide.</p>
<p>A.2.6.2.2 Especially designed or prepared systems for plutonium metal production.</p>
<p>A.3. PARTS FOR CONTROLLED NUCLEAR EQUIPMENT IDENTIFIED IN PARAGRAPHS COMPRISING A.2.</p>
<p>A.4. CONTROLLED NUCLEAR INFORMATION</p>
<p>A.4.1. <em>Technology</em><br />
Technical data, including, but not limited to, technical drawings, models, photographic negatives and prints, recordings, design data and technical and operating manuals, whether in written form or recorded on other media or devices such as disk, tape and read-only memories for the design, production, construction, operation or maintenance of any item in this Part, except data available to the public (e.g. in published books or periodicals, or that which has been made available without restrictions on its further dissemination).</p>
<p className="text-center">PART B</p>  <p className="text-center">List of Nuclear-related Dual-use Items</p>  <p className="text-center">B.1. CONTROLLED NUCLEAR SUBSTANCES</p>
<p>B.1.1 <em>Nuclear-related dual-use substances</em></p>
<p>B.1.1.1 Alpha-emitting radionuclides having an alpha half-life of 10 days or greater but less than 200 years, compounds or mixtures containing any of these radionuclides with a total alpha activity of 1 Ci/kg (37 GBq/kg) or greater, and products or devices containing any of the foregoing, except a product or device containing less than 3.7 GBq (100 mCi) of alpha activity.</p>
<p>B.1.1.2  Aluminium alloys capable of an ultimate tensile strength of 460 MPa (0.46 x 109 N/m<sup>2</sup>) or more at 293 K (20&deg;C), in the form of tubes or cylindrical solid forms (including forgings) with an outside diameter of more than 75 mm (3 in.).<br />
NOTE<br />
The phrase "capable of" encompasses aluminium alloys before or after heat treatment.</p>
<p>B.1.1.3  Beryllium metal, alloys containing more than 50% beryllium by weight, beryllium compounds, and manufactures thereof, except:.<br />
(a) metal windows for X-ray machines, or for bore-hole logging devices;.<br />
(b) oxide shapes in fabricated or semi-fabricated forms specially designed for electronic component parts or as substrates for electronic circuits; and<br />
(c) beryl (silicate of beryllium and aluminium) in the form of emeralds or aquamarines.<br />
NOTE.<br />
This entry includes waste and scrap containing beryllium as defined above.</p>
<p>B.1.1.4  High-purity (99.99% or greater) bismuth with very low silver content (less than 10 ppm).</p>
<p>B.1.1.5 Boron and boron compounds, mixtures, loaded materials, and waste or scrap of any of these substances, in which the boron-10 isotope is more than 20% by weight of the total boron content.</p>
<p>B.1.1.6 Calcium (high purity) containing both less than 1 000 ppm by weight of metallic impurities other than magnesium and less than 10 ppm of boron.</p>
<p>B.1.1.7 Chlorine trifluoride (ClF<sub>3</sub>).</p>
<p>B.1.1.8 <em>Crucibles made of materials resistant to liquid actinide metals, as follows:</em><br />
(a) crucibles with a volume of between 150 ml and 8 L and made of or coated with any of the following materials having a purity of 98% or greater:<br />
(1) calcium fluoride (CaF<sub>2</sub>)<br />
(2) calcium zirconate (metazirconate) (Ca<sub>2</sub>ZrO<sub>3</sub>)<br />
(3) cerium sulfide (Ce<sub>2</sub>S<sub>3</sub>)<br />
(4) erbium oxide (erbia) (Er<sub>2</sub>O<sub>3</sub>)<br />
(5) hafnium oxide (hafnia) (HfO<sub>2</sub>)<br />
(6) magnesium oxide (MgO)<br />
(7) nitrided niobium-titanium-tungsten alloy (approximately 50%Nb, 30%Ti, 20%W)<br />
(8) yttrium oxide (yttria) (Y<sub>2</sub>O<sub>3</sub>)<br />
(9) zirconium oxide (zirconia) (ZrO<sub>2</sub>);
(b) crucibles with a volume of between 50 ml and 2 L and made of or lined with tantalum, having a purity of 99.9% or greater; and<br />
(c) crucibles with a volume of between 50 ml and 2 L and made of or lined with tantalum (having a purity of 98% or greater) coated with tantalum carbide, nitride, or boride (or any combination of these).</p>
<p>B.1.1.9 <em>Fibrous or filamentary materials, prepregs and composite structures, as follows:</em><br />
(a) carbon or aramid fibrous or filamentary materials having a specific modulus of 12.7 x 10<sup>6</sup> m or greater or a specific tensile strength of 23.5 x 10<sup>4</sup> m or greater, except aramid fibrous or filamentary materials having 0.25% or more by weight of an ester based fibre surface modifier;<br />
(b) glass fibrous or filamentary materials having a specific modulus of 3.18 x 10<sup>6</sup> m or greater and a specific tensile strength of 7.62 x 10<sup>4</sup> m or greater; and<br />
(c) thermoset resin impregnated continuous yarns, rovings, tows or tapes with a width no greater than 15 mm (prepregs), made from carbon or glass fibrous or filamentary materials specified in paragraph (a) or (b).<br />
NOTE<br />
The resin forms the matrix of the composite.<br />
(d) composite structures in the form of tubes with an inside diameter of between 75 mm (3 in.) and 400 mm (16 in.) made with any of the fibrous or filamentary materials specified in paragraph (a) or carbon prepreg materials specified in paragraph (c).<br />
NOTE<br />
(a) <em><strong>fibrous or filamentary materials</strong></em> means continuous monofilaments, yarns, rovings, tows or tapes.<br />
(b) <em><strong>specific modulus</strong></em> is the Young&rsquo;s modulus in N/m<sup>2</sup> divided by the specific weight in N/m<sup>3</sup> when measured at a temperature of 23 &plusmn; 2&deg;C and a relative humidity of 50 &plusmn; 5%.<br />
(c) specific tensile strength is the ultimate tensile strength in N/m<sup>2</sup> divided by the specific weight in N/m<sup>3</sup> when measured at a temperature of 23 &plusmn; 2&deg;C and a relative humidity of 50 &plusmn; 5%.</p>
<p>B.1.1.10  Hafnium metal, alloys, compounds of hafnium containing more than 60% hafnium by weight, and their manufactures, and waste or scrap of any of these substances.</p>
<p>B.1.1.11 Helium-3 or helium enriched in the helium-3 isotope; alloys, compounds or mixtures containing helium enriched in the helium-3 isotope; and helium conforming to this description contained in products or devices, except a product or device containing less than 1 g of helium-3.</p>
<p>B.1.1.12 Lithium enriched in the lithium-6 isotope (<sup>6</sup>Li) to greater than 7.5 atom per cent; alloys, compounds, mixtures, and waste or scrap of lithium enriched in the lithium-6 isotope; and lithium conforming to this description contained in products or devices, except thermoluminescent dosimeters.<br />
NOTE<br />
The natural occurrence of the 6 isotope in lithium is 7.5 atom per cent.</p>
<p>B.1.1.13 Magnesium (high purity) containing both less than 200 ppm by weight of metallic impurities other than calcium and less than 10 ppm of boron.</p>
<p>B.1.1.14 Maraging steel capable of an ultimate tensile strength of 2 050 MPa (2.050 x 10<sup>9</sup> N/m2) (300,000 lbs./sq.in.) or more at 293 K (20&deg;C), except forms in which no linear dimension exceeds 75 mm.<br />
NOTE<br />
The phrase "capable of" encompasses maraging steel before or after heat treatment.</p>
<p>B.1.1.15 <em>Nickel powder and porous nickel metal, as follows:</em><br />
(a) powder with a nickel purity content of 99% or greater and a mean particle size of less than 10 &micro;m measured by the ASTM B 330 standard, except filamentary nickel powders; and<br />
NOTE<br />
Nickel powders which are specially prepared for the manufacture of gaseous diffusion barriers are controlled under paragraph A.2.4.3.1.(b).<br />
(b) porous nickel metal produced from materials referred to in paragraph (a), except single porous nickel metal sheets not exceeding 1 000 cm<sup>2</sup> per sheet.<br />
NOTE<br />
This refers to porous metal formed by compacting and sintering the material referred to in paragraph (a) to form a metal material with fine pores interconnected throughout the structure.</p>
<p>B.1.1.16 Radium-226, radium-226 compounds, or mixtures containing radium-226, and products or devices containing any of the foregoing, except medical applicators and a product or device containing not more than 0.37 GBq (10 mCi) of radium-226 in any form.</p>
<p>B.1.1.17 Titanium alloys capable of an ultimate tensile strength of 900 MPa (0.9 x 109 N/m<sup>2</sup>) (130,500 lbs./sq.in.) or more at 293 K (20&deg;C) in the form of tubes or cylindrical solid forms (including forgings) with an outside diameter of more than 75 mm (3 in.).<br />
NOTE<br />
The phrase "capable of" encompasses titanium alloys before or after heat treatment.</p>
<p>B.1.1.18 Tungsten, as follows: parts made of tungsten, tungsten carbide, or tungsten alloys (greater than 90% tungsten) having a mass greater than 20 kg and a hollow cylindrical symmetry (including cylinder segments) with an inside diameter greater than 100 mm (4 in.) but less than 300 mm (12 in.), except parts specifically designed for use as weights or gamma-ray collimators.</p>
<p>B.1.1.19 Zirconium with a hafnium content of less than 1 part hafnium to 500 parts zirconium by weight, in the form of metal, alloys containing more than 50% zirconium by weight, and compounds and manufactures of these things; except zirconium in the form of foil having a thickness not exceeding 0.10 mm (0.004 in.).<br />
NOTE<br />
Paragraph B.1.1.19. applies to waste and scrap containing zirconium as defined above.</p>
<p>B.1.1.20 Any substance not otherwise included in paragraph B.1. if the substance is intended, or there are reasonable grounds to suspect that it is intended, in whole or in part, for use in connection with the design, development, production, handling, operation, maintenance or storage of nuclear weapons or other nuclear explosive devices.</p>
<p>B.2. CONTROLLED NUCLEAR EQUIPMENT</p>
<p>B.2.1 Industrial equipment</p>
<p>B.2.1.1 <em>Flow-forming machines and spin-forming machines capable of flow-forming functions, and mandrels, as follows, and specially designed software therefor:</em><br />
(a) having three or more rollers (active or guiding) and, according to the manufacturer&rsquo;s technical specification, can be equipped with numerical control units or a computer control; and<br />
(b) rotor-forming mandrels designed to form cylindrical rotors of inside diameter between 75 mm (3 in.) and 400 mm (16 in.).<br />
NOTE<br />
This paragraph includes machines which have only a single roller designed to deform metal plus two auxiliary rollers which support the mandrel, but do not participate directly in the deformation process.</p>
<p>B.2.1.2 <em>Machine tools and specially designed software as follows:</em><br />
(a) machine tools, as set out below, and any combination of them, for removing or cutting metals, ceramics or composites, which, according to the manufacturer&rsquo;s technical specifications, can be equipped with electronic devices for simultaneous contouring control in two or more axes:<br />
(1) machine tools for turning, that have positioning accuracies with all compensations available better (less) than 0.006 mm according to ISO 230/2 (1988) along any linear axis (overall positioning) for machines capable of machining diameters greater than 35 mm;<br />
NOTE<br />
Paragraph B.2.1.2.(a)(1) does not include bar machines (Swissturn) limited to machining only bar feed thru, if the maximum bar diameter is equal to or less than 42 mm and there is no capability of mounting chucks. Machines may have drilling and/or milling capabilities for machining parts with diameters less than 42 mm.<br />
(2) machine tools for milling having any of the following characteristics:<br />
(i) positioning accuracies with all compensations available are better (less) than 0.006 mm according to ISO 230/2 (1988) along any linear axis (overall positioning);<br />
(ii) two or more contouring rotary axes; or<br />
(iii) five or more axes that can be coordinated simultaneously for contouring control;<br />
NOTE<br />
Paragraph B.2.1.2.(a)(2) does not include milling machines having the following characteristics:<br />
(a) x-axis travel greater than 2 m; and<br />
(b) overall positioning accuracy on the x-axis worse (more) than 0.030 mm according to ISO 230/2 (1988).<br />
(3) machine tools for grinding having any of the following characteristics:<br />
(i) positioning accuracies with all compensations available are better (less) than 0.004 mm according to ISO 230/2 (1988) along any linear axis (overall positioning);<br />
(ii) two or more contouring rotary axes; or<br />
(iii) five or more axes that can be coordinated simultaneously for contouring control; and<br />
NOTE<br />
Paragraph B.2.1.2.(a)(3) does not include the following grinding machines:<br />
(a) cylindrical external, internal and external-internal grinding machines having all of the following characteristics:<br />
(i) limited to a maximum workpiece capacity of 150 mm outside diameter or length; and<br />
(ii) axes limited to x, z and c; and<br />
(b) jig grinders that do not have a z-axis or a w-axis with an overall positioning accuracy less (better) than 0.004 mm (positioning accuracy is according to ISO 230/2 (1988)).<br />
(4) non-wire type electrical discharge machines that have two or more contouring rotary axes and that can be coordinated simultaneously for contouring control; and<br />
NOTE<br />
Paragraph B.2.1.2.(a) does not include special purpose machine tools limited to the manufacture of any of the following parts:<br />
(a) gears;<br />
(b) crankshafts or camshafts;<br />
(c) tools or cutters; and<br />
(d) extruder worms.<br />
(b) software:<br />
(1) software specially designed or modified for the development, production or use of equipment referred to in paragraph B.2.1.2.(a); and<br />
(2) software for any combination of electronic devices or systems enabling those devices to function as a numerical control unit capable of controlling five or more interpolating axes that can be coordinated simultaneously for contouring control.<br />
NOTE<br />
1 Software is controlled whether exported separately or residing in a numerical control unit or any electronic device or system.<br />
2 Software specially designed or modified by the manufacturers of the control unit or machine tool to operate an uncontrolled machine tool is not controlled.</p>
<p>B.2.1.3 <em>Dimensional inspection machines, instruments or systems, as follows, and software specially designed for them:</em><br />
(a) computer controlled or numerically controlled dimensional inspection machines having both of the following characteristics:<br />
(1) two or more axes; and<br />
(2) a one-dimensional length measurement uncertainty equal to or better (less) than (1.25 + L/1 000) &micro;m tested with a probe of an accuracy of better (less) than 0.2 &micro;m (L is the measured length in millimeters) (Ref. VDI/VDE 2617, parts 1 and 2);<br />
(b) linear displacement measuring instruments, as follows:<br />
(1) non-contact type measuring systems with a resolution equal to or better (less) than 0.2 &micro;m within a measuring range of up to 0.2 mm;<br />
(2) linear variable differential transformer systems having both of the following characteristics:<br />
(i) linearity equal to or better (less) than 0.1% within a measuring range of up to 5 mm; and<br />
(ii) drift equal to or better (less) than 0.1% per day at a standard ambient test room temperature of &plusmn; 1 K; or<br />
(3) measuring systems that have both of the following characteristics:<br />
(i) contain a laser; and<br />
(ii) maintain for at least 12 hours over a temperature range of &plusmn; 1 K around a standard temperature and a standard pressure:<br />
(A) a resolution over their full scale of 0.1 &micro;m or better; and<br />
(B) a measurement uncertainty equal to or better (less) than (0.2 + L/2 000) &micro;m (L is the measured length in millimeters);<br />
NOTE<br />
Paragraph B.2.1.3.(b)(3) does not include measuring interferometer systems, without closed or open loop feedback, containing a laser to measure slide movement errors of machine tools, dimensional inspection machines or similar equipment.<br />
(c) angular measuring instruments having an angular position deviation equal to or better (less) than 0.00025&deg;; and<br />
NOTE<br />
Paragraph B.2.1.3.(c) does not include optical instruments, such as autocollimators, using collimated light (e.g. laser light) to detect angular displacement of a mirror.<br />
(d) systems for simultaneous linear-angular inspection of hemishells, having both of the following characteristics:<br />
(1) measurement uncertainty along any linear axis equal to or better (less) than 3.5 &micro;m per 5 mm; and<br />
(2) angular position deviation equal to or less than 0.02&deg;.<br />
NOTE<br />
Specially designed software for these systems includes software for simultaneous measurements of wall thickness and contour.<br />
NOTE<br />
With respect to paragraph B.2.1.3.:<br />
(a) machine tools that can be used as measuring machines are included if they meet or exceed the criteria specified for the machine tool function or the measuring machine function;<br />
(b) machines are included if they exceed the control threshold anywhere within their operating range;<br />
(c) the probe used in determining the measurement uncertainty of a dimensional inspection system shall be as described in VDI/VDE 2617, parts 2, 3 and 4; and<br />
(d) all parameters of measurement values in paragraph B.2.1.3. represent plus/minus, i.e. not total band.</p>
<p>B.2.1.4 Vacuum or controlled environment (inert gas) induction furnaces capable of operation above 850&deg;C and having induction coils 600 mm (24 in.) or less in diameter, and designed for power inputs of 5 kW or more; and power supplies specially designed therefor with a specified power output of 5 kW or more.<br />
NOTE<br />
This paragraph does not include furnaces designed for the processing of semiconductor wafers.</p>
<p>B.2.1.5 Isostatic presses capable of achieving a maximum working pressure of 69 MPa or greater having a chamber cavity with an inside diameter in excess of 152 mm and specially designed dies, molds, controls or specially designed software therefor.<br />
NOTE<br />
1 The inside chamber dimension is that of the chamber in which both the working temperature and the working pressure are achieved and does not include fixtures. That dimension will be the smaller of either the inside diameter of the pressure chamber or the inside diameter of the insulated furnace chamber, depending on which of the two chambers is located inside the other.<br />
2 The term <strong>isostatic presses</strong> means equipment capable of pressurizing a closed cavity through various media (gas, liquid, solid particles, etc.) to create equal pressure in all directions within the cavity upon a workpiece or material.</p>
<p>B.2.1.6 <em>Robots or end-effectors having either of the following characteristics; and specially designed software or specially designed controllers therefor:</em><br />
(a) specially designed to comply with national safety standards applicable to handling high explosives (for example, meeting electrical code ratings for high explosives); or<br />
(b) specially designed or rated as radiation hardened to withstand greater than 5 x 10<sup>4</sup> Gy (Silicon) [5 x 10<sup>6</sup> rad (Silicon)] without operational degradation.<br />
NOTES<br />
1 <strong>Robot</strong> means a manipulation mechanism, which may be of the continuous path or of the point-to-point variety, may use sensors, and has all of the following characteristics:<br />
(a) is multifunctional;<br />
(b) is capable of positioning or orienting material, parts, tools, or special devices through variable movements in three-dimensional space;<br />
(c) incorporates three or more closed or open loop servo-devices which may include stepping motors; and<br />
(d) has user-accessible programmability by means of teach/playback method or by means of an electronic computer which may be a programmable logic controlled, i.e., without mechanical intervention.<br />
The above definition does not include the following devices:<br />
(a) manipulation mechanisms which are only manually/teleoperator controllable;<br />
(b) fixed sequence manipulation mechanisms which are automated moving devices operating according to mechanically fixed programmed motions. The program is mechanically limited by fixed stops, such as pins or cams. The sequence of motions and the selection of paths or angles are not variable or changeable by mechanical, electronic, or electrical means;<br />
(c) mechanically controlled variable sequence manipulation mechanisms which are automated moving devices operating according to mechanically fixed programmed motions. The program is mechanically limited by fixed, but adjustable, stops such as pins or cams. The sequence of motions and the selection of paths or angles are variable within the fixed program pattern. Variations or modifications of the program pattern (e.g., changes of pins or exchanges of cams) in one or more motion axes are accomplished only through mechanical operations;<br />
(d) non-servo-controlled variable sequence manipulation mechanisms which are automated moving devices, operating according to mechanically fixed programmed motions. The program is variable but the sequence proceeds only by the binary signal from mechanically fixed electrical binary devices or adjustable stops; or<br />
(e) stacker cranes defined as Cartesian coordinate manipulator systems manufactured as an integral part of a vertical array of storage bins and designed to access the contents of those bins for storage or retrieval.<br />
2 End-effectors include grippers, active tooling units, and any other tooling that is attached to the baseplate on the end of a robot manipulator arm.<br />
3 The definition in paragraph 1(a) does not include robots specially designed for non-nuclear industrial applications such as automobile paint-spraying booths.</p>
<p>B.2.1.7 <em>Vibration test systems, equipment, components and software therefor, as follows:</em><br />
(a) electrodynamic vibration test systems, employing feedback or closed loop control techniques and incorporating a digital controller, capable of vibrating at 10 g RMS or more between 20 Hz and 2 000 Hz and imparting forces of 50 kN (11,250 lbs.) measured bare table, or greater;<br />
(b) digital controllers, combined with specially designed software for vibration testing, with a real-time bandwidth greater than 5 kHz and being designed for use with the systems referred to in paragraph (a);<br />
(c) vibration thrusters (shaker units), with or without associated amplifiers, capable of imparting a force of 50 kN (11,250 lbs.), measured bare table, or greater, which are usable for the systems referred to in paragraph (a);<br />
(d) test piece support structures and electronic units designed to combine multiple shaker units into a complete shaker system capable of providing an effective combined force of 50 kN, measured bare table, or greater, which are usable for the systems referred to in paragraph (a); and<br />
(e) specially designed software for use with the systems referred to in paragraph (a) or for the electronic units referred to in paragraph (d).</p>
<p>B.2.1.8 <em>Vacuum and controlled atmosphere metallurgical melting and casting furnaces as follows, and specially configured computer control and monitoring systems and specially designed software therefor:</em><br />
(a) arc remelt and casting furnaces with consumable electrode capacities between 1 000 cm<sup>3</sup> and 20 000 cm<sup>3</sup> and capable of operating with melting temperatures above 1 700&deg;C; and<br />
(b) electron beam melting and plasma atomization and melting furnaces with a power of 50 kW or greater and capable of operating with melting temperatures above 1 200&deg;C.</p>
B.2.2 <em>Uranium isotope separation equipment and components (other than items listed in paragraph A.2.4.)</em></p>
<p>B.2.2.1 <em>Electrolytic cells for fluorine production with a production capacity greater than 250 g of fluorine per hour.</em></p>
<p>B.2.2.2 <em>Rotor fabrication and assembly equipment and bellows-forming mandrels and dies, as follows:</em><br />
(a) rotor assembly equipment for assembly of gas centrifuge rotor tube sections, baffles, and end caps. Such equipment includes precision mandrels, clamps, and shrink fit machines;<br />
(b) rotor straightening equipment for alignment of gas centrifuge rotor tube sections to a common axis; and<br />
(c) bellows-forming mandrels and dies for producing single-convolution bellows (bellows made of high-strength aluminium alloys, maraging steel, or high-strength filamentary materials). The bellows have all of the following dimensions:<br />
(1) 75 mm to 400 mm (3 in. to 16 in.) inside diameter;<br />
(2) 12.7 mm (0.5 in.) or more in length; and<br />
(3) single convolution depth more than 2 mm (0.08 in.).</p>
<p>B.2.2.3 <em>Centrifugal multiplane balancing machines, fixed or portable, horizontal or vertical, as follows:</em><br />
(a) centrifugal balancing machines designed for balancing flexible rotors having a length of 600 mm or more and having all of the following characteristics:<br />
(1) a swing or journal diameter of 75 mm or more;<br />
(2) mass capability of from 0.9 kg to 23 kg (2 lbs. to 50 lbs.); and<br />
(3) capable of balancing speed of revolution of more than 5 000 rpm; and<br />
(b) centrifugal balancing machines designed for balancing hollow cylindrical rotor components and having all of the following characteristics:<br />
(1) a journal diameter of 75 mm or more;<br />
(2) mass capability of from 0.9 kg to 23 kg (2 lbs. to 50 lbs.);<br />
(3) capable of balancing to a residual imbalance of 0.010 kg mm/kg per plane or better; and<br />
(4) belt drive type;<br />  and specially designed software therefor.</p>
<p>B.2.2.4 Filament winding machines in which the motions for positioning, wrapping, and winding fibres are coordinated and programmed in two or more axes, specially designed to fabricate composite structures or laminates from fibrous and filamentary materials and capable of winding cylindrical rotors of diameter between 75 mm (3 in.) and 400 mm (16 in.) and lengths of 600 mm (24 in.) or greater; coordinating and programming controls therefor, precision mandrels; and specially designed software therefor.</p>
<p>B.2.2.5 <em>Frequency changers (also known as converters or inverters) or generators having all of the following characteristics:</em><br />
(a) multiphase output capable of providing a power of 40 W or more;<br />
(b) capable of operating in the frequency range between 600 Hz and 2 000 Hz;<br />
(c) total harmonic distortion better (less) than 10%; and<br />
(d) frequency control better (less) than 0.1%.<br />
NOTE<br />
Frequency changers and generators especially designed or prepared for the gas centrifuge process are controlled under paragraph A.2.4.2.5.</p>
<p>B.2.2.6 <em>Lasers, laser amplifiers, and oscillators as follows:</em><br />
(a) copper vapour lasers with 40 W or greater average output power operating at wavelengths between 500 nm and 600 nm;<br />
(b) argon ion lasers with greater than 40 W average output power operating at wavelengths between 400 nm and 515 nm;<br />
(c) neodymium-doped (other than glass) lasers with an output wavelength of between 1 000 nm and 1 100 nm having either of the following characteristics:<br />
(1) pulse-excited and Q-switched with a pulse duration equal to or greater than 1 ns, and having either of the following characteristics:<br />
(i) single-transverse mode output having an average output power exceeding 40 W; or<br />
(ii) multiple-transverse mode output having an average output power exceeding 50 W; or<br />
(2) frequency doubling incorporated to give an output wavelength of between 500 nm and 550 nm with an average output power at the doubled frequency (new wavelength) of greater than 40 W;<br />
(d) tunable pulsed single-mode dye laser oscillators having all of the following characteristics:<br />
(1) operation at wavelengths of between 300 nm and 800 nm;<br />
(2) average output power greater than 1 W;<br />
(3) repetition rate greater than 1 kHz; and<br />
(4) pulse width less than 100 ns;<br />
(e) tunable pulsed dye laser amplifiers and oscillators, except single mode oscillators, having all of the following characteristics:<br />
(1) operation at wavelengths of between 300 nm and 800 nm;<br />
(2) average output power greater than 30 W;<br />
(3) repetition rate greater than 1 kHz; and<br />
(4) pulse width less than 100 ns;<br />
(f) alexandrite lasers having all of the following characteristics:<br />
(1) operation at wavelengths of between 720 nm and 800 nm;<br />
(2) average output power greater than 30 W;<br />
(3) repetition rate greater than 125 Hz; and<br />
(4) bandwidth of 0.005 nm or less;<br />
(g) pulsed carbon dioxide lasers having all of the following characteristics:<br />
(1) operation at wavelengths of between 9 000 nm and 11 000 nm;<br />
(2) average output power greater than 500 W;<br />
(3) repetition rate greater than 250 Hz; and<br />
(4) pulse width less than 200 ns;<br />
NOTE<br />
Paragraph B.2.2.6.(g) does not include the higher power (typically 1 kW to 5 kW) industrial CO2 lasers used in applications such as cutting and welding, as those lasers are either continuous wave or are pulsed with a pulse width of more than 200 ns.<br />
(h) pulsed excimer lasers (XeF, XeCl, KrF) having all of the following characteristics:<br />
(1) operation at wavelengths of between 240 nm and 360 nm;<br />
(2) average output power greater than 500 W; and<br />
(3) repetition rate greater than 250 Hz; and<br />
(i) para-hydrogen Raman shifters designed to operate at 16 &micro;m output wavelength and at a repetition rate greater than 250 Hz.</p>
<p>B.2.2.7 <em>Mass spectrometers capable of measuring ions of 230 atomic mass units or greater and having a resolution of better than 2 parts in 230, and ion sources therefor as follows:</em><br />
(a) inductively coupled plasma mass spectrometers (ICP/MS);<br />
(b) glow discharge mass spectrometers (GDMS);<br />
(c) thermal ionization mass spectrometers (TIMS);<br />
(d) electron bombardment mass spectrometers which have a source chamber constructed from or lined with or plated with materials resistant to UF<sub>6</sub>;<br />
(e) molecular beam mass spectrometers as follows:<br />
(1) which have a source chamber constructed from or lined with or plated with stainless steel or molybdenum and have a cold trap capable of cooling to 193 K (-80&deg;C) or less; or<br />
(2) which have a source chamber constructed from or lined with or plated with materials resistant to UF<sub>6</sub>; and<br />
(f) mass spectrometers equipped with a microfluorination ion source designed for use with actinides or actinide fluorides; except specially designed or prepared magnetic or quadrupole mass spectrometers capable of taking on-line samples of feed, product or tails from UF<sub>6</sub> gas streams and having all of the following characteristics:<br />
(1) unit resolution for mass greater than 320;<br />
(2) ion sources constructed of or lined with nichrome or monel or nickel-plated;<br />
(3) electron bombardment ionization sources; and<br />
(4) having a collector system suitable for isotopic analysis.</p>
<p>B.2.2.8 <em>Pressure transducers which are capable of measuring absolute pressure at any point in the range 0 kPa to 13 kPa, with pressure sensing elements made of or protected by nickel, nickel alloys with more than 60% nickel by weight, aluminium or aluminium alloys as follows:</em><br />
(a) transducers with a full scale of less than 13 kPa and an accuracy of better than &plusmn; 1% of full scale; and<br />
(b) transducers with a full scale of 13 kPa or greater and an accuracy of better than &plusmn; 130 Pa.<br />
NOTE<br />
1 Pressure transducers are devices that convert pressure measurements into an electrical signal.<br />
2 For the purpose of this paragraph, accuracy includes non-linearity, hysteresis and repeatability at ambient temperature.</p>
<p>B.2.2.9 Valves 5 mm (0.2 in.) or greater in nominal size, with a bellows seal, wholly made of or lined with aluminium, aluminium alloy, nickel, or alloy containing 60% or more nickel, either manually or automatically operated.<br />
NOTE<br />
For valves with different inlet and outlet diameters, the nominal size parameter above refers to the smallest diameter.</p>
<p>B.2.2.10 <em>Superconducting solenoidal electromagnets with all of the following characteristics:</em><br />
(a) capable of creating magnetic fields of more than 2 T (20 kilogauss);<br />
(b) with an L/D (length divided by inner diameter) greater than 2;<br />
(c) with an inner diameter of more than 300 mm; and<br />
(d) with a magnetic field uniform to better than 1% over the central 50% of the inner volume.<br />
NOTE<br />
This paragraph does not cover magnets specially designed for and exported as parts of medical nuclear magnetic resonance (NMR) imaging systems. It is understood that the wording "as part of" does not necessarily mean physical part in the same shipment. Separate shipments from different sources are allowed, provided that the related export documents clearly specify the "part of" relationship.</p>
<p>B.2.2.11 Vacuum pumps with an input throat size of 38 cm (15 in.) or greater with a pumping speed of 15,000 L/s or greater and capable of producing an ultimate vacuum better than 10<sup>4</sup> torrs (1.33 x 10<sup>-4</sup> mbar).<br />
NOTE<br />
1 The ultimate vacuum is determined at the input of the pump with the input of the pump blocked off.<br />
2 The pumping speed is determined at the measurement point with nitrogen gas or air.</p>
<p>B.2.2.12 Direct current high-power supplies capable of continuously producing, over a time period of 8 hours, 100 V or greater with current output of 500 amps or greater and with current or voltage regulation better than 0.1%.</p>
<p>B.2.2.13 High-voltage direct current power supplies capable of continuously producing, over a time period of 8 hours, 20 000 V or greater with current output of 1 amp or greater and with current or voltage regulation better than 0.1%.<br />
<p>B.2.2.14 Electromagnetic isotope separators, designed for or equipped with, single or multiple ion sources capable of providing a total ion beam current of 50 mA or greater.<br />
NOTES<br />
1 This paragraph includes separators capable of enriching stable isotopes as well as those for uranium. A separator capable of separating the isotopes of lead with a one-mass unit difference is inherently capable of enriching the isotope of uranium with three-unit mass difference.<br />
2 This paragraph includes separators with the ion sources and collectors both in the magnetic field and those configurations in which they are external to the field.<br />
3 A single 50 mA ion source will produce less than 3 g of separated HEU per year from natural abundance feed.</p>
<p>B.2.3 <em>Heavy water production plant-related equipment (other than items listed in paragraph A.2.5.).</em></p>
<p>B.2.3.1 Specialized packings for use in separating heavy water from ordinary water and made of phosphor bronze mesh (chemically treated to improve wettability) and designed for use in vacuum distillation towers.</p>
<p>B.2.3.2 Pumps circulating solutions of diluted or concentrated potassium amide catalyst in liquid ammonia (KNH<sub>2</sub>/NH<sub>3</sub>), with all of the following characteristics:<br />
(a) airtight (i.e., hermetically sealed);<br />
(b) for concentrated potassium amide solutions (1% or greater), operating pressure of 1.5 MPa to 60 MPa (15 to 600 atmospheres); for dilute potassium amide solutions (less than 1%), operating pressure of 20 MPa to 60 MPa (200 to 600 atmospheres); and<br />
(c) a capacity greater than 8.5 m<sup>3</sup>/h (5 cu.ft./ min.).</p>
<p>B.2.3.3 Water-hydrogen sulfide exchange tray columns constructed from fine carbon steel with a diameter of 1.8 m or greater, which can operate at nominal pressures of 2 MPa (300 psi) or greater, and internal contactors therefor.<br />
NOTES<br />
1 Internal contactors of the columns are segmented trays which have an effective assembled diameter of 1.8 m or greater, are designed to facilitate countercurrent contacting and are constructed of materials resistant to corrosion by hydrogen sulfide/water mixtures. These may be sieve trays, valve trays, bubble cap trays or turbogrid trays.<br />
2 Fine carbon steel in this paragraph is defined to be steel with the austenitic ASTM (or equivalent standard) grain size number of 5 or greater.<br />
3 Materials resistant to corrosion by hydrogen sulfide/water mixtures in this paragraph are defined to be stainless steels with a carbon content of 0.03% or less.</p>
<p>B.2.3.4 <em>Hydrogen-cryogenic distillation columns having all of the following applications:</em><br />
(a) designed to operate with internal temperatures of -238&deg;C (35 K) or less;<br />
(b) designed to operate at internal pressure of 0.5 MPa to 5 MPa (5 to 50 atmospheres);<br />
(c) constructed of fine-grain stainless steels of the 300 series with low sulphur content or equivalent cryogenic and H<sub>2</sub>-compatible materials; and<br />
(d) with internal diameters of 1 m or greater and effective lengths of 5 m or greater.<br />
NOTE<br />
Fine-grain stainless steels in this paragraph are defined to be fine-grain austenitic stainless steels with an ASTM (or equivalent standard) grain size number of 5 or greater.</p>
<p>B.2.3.5 Ammonia synthesis converters or synthesis units in which the synthesis gas (nitrogen and hydrogen) is withdrawn from an ammonia/hydrogen high-pressure exchange column and the synthesized ammonia is returned to said column.</p>
<p>B.2.3.6 Turboexpanders or turboexpander-compressor sets designed for operation below 35 K and a throughput of hydrogen gas of 1 000 kg/h or greater.</p>
<p>B.2.4 <em>Implosion systems development equipment</em></p>
<p>B.2.4.1 <em>Flash x-ray generators or pulsed electron accelerators with peak energy of 500 keV or greater, as follows, except accelerators that are component parts of devices designed for purposes other than electron beam or x-ray radiation (electron microscopy, for example) and those designed for medical purposes:</em><br />
(a) having an accelerator peak electron energy of 500 keV or greater but less than 25 MeV and with a figure of merit (K) of 0.25 or greater, where K is defined as:</p>
<p className="text-center"><strong>K = 1.7 x 103V2.65Q;</strong></p>
<p>where V is the peak electron energy in million electron volts and Q is the total accelerated charge in coulombs if the accelerator beam pulse duration is less than or equal to 1 &micro;s, if the acceleration beam pulse duration is greater than 1 &micro;s, Q is the maximum accelerated charge in 1 &micro;s [Q equals the integral of i with respect to t, over the lesser of 1 &micro;s or the time duration of the beam pulse (Q =Æ&#39;idt), where i is beam current in amperes and t is the time in seconds]; or<br />
(b) having an accelerator peak electron energy of 25 MeV or greater and a peak power greater than 50 MW. [Peak power = (peak potential in volts) x (peak beam current in amperes).]<br />
NOTES<br />
1 Time duration of the beam pulse means, in machines, based on microwave accelerating cavities, the time duration of the beam pulse is the lesser of 1 &micro;s or the duration of the bunched beam packet resulting from one microwave modulator pulse.<br />
2 Peak beam current means, in machines, based on microwave accelerating cavities, the peak beam current is the average current in the time duration of a bunched beam packet.</p>
<p>B.2.4.2 Multistage light gas guns or other high-velocity gun systems (coil, electromagnetic, electrothermal, or other advanced systems) capable of accelerating projectiles to 2 km/s or greater.</p>
<p>B.2.4.3 Mechanical rotating mirror cameras, as follows; and specially designed components therefor:<br />
(a) framing cameras with recording rates greater than 225 000 frames/s; and<br />
(b) streak cameras with writing speeds greater than 0.5 mm/&micro;s.<br />
NOTE<br />
Components of such cameras include their synchronizing electronics units and rotor assemblies consisting of turbines, mirrors, and bearings.</p>
<p>B.2.4.4 <em>Electronic streak and framing cameras and tubes, as follows:</em><br />
(a) electronic streak cameras capable of 50 ns or less time resolution and streak tubes therefor;<br />
(b) electronic (or electronically shuttered) framing cameras capable of 50 ns or less frame exposure time; and<br />
(c) framing tubes and solid-state imaging devices for use with cameras controlled in paragraph (b) as follows:<br />
(1) proximity focused image intensifier tubes having the photocathode deposited on a transparent conductive coating to decrease photocathode sheet resistance;<br />
(2) gate silicon intensifier target (SIT) vidicon tubes, where a fast system allows gating the photoelectrons from the photocathode before they impinge on the SIT plate;<br />
(3) Kerr or Pockels cell electro-optical shuttering; or<br />
(4) other framing tubes and solid-state imaging devices having a fast image gating time of less than 50 ns specially designed for cameras controlled by paragraph (b).</p>
<p>B.2.4.5 <em>Specialized instrumentation for hydrodynamic experiments, as follows:</em><br />
(a) velocity interferometers for measuring velocities in excess of 1 km/s during time intervals less than 10 &micro;s (VISARs, Doppler laser interferometers, DLIs, etc.);<br />
(b) manganin gauges for pressures greater than 100 kilobars; and<br />
(c) quartz pressure transducers for pressures greater than 100 kilobars.</p>
<p>B.2.5 <em>Explosives and related equipment</em></p>
<p>B.2.5.1 <em>Detonators and multipoint initiation systems (exploding bridge wire, slappers etc.):</em><br />
(a) electrically driven explosive detonators, as follows:<br />
(1) exploding bridge (EB);<br />
(2) exploding bridge wire (EBW);<br />
(3) slapper; and<br />
(4) exploding foil initiators (EFI); and<br />
(b) arrangements using single or multiple detonators designed to nearly simultaneously initiate an explosive surface (over greater than 5 000 mm<sup>2</sup>) from a single firing signal (with an initiation timing spread over the surface of less than 2.5 &micro;s).<br />
NOTE<br />
The detonators of concern all utilize a small electrical conductor (bridge, bridge wire or foil) that explosively vaporizes when a fast, high-current electrical pulse is passed through it. In nonslapper types, the exploding conductor starts a chemical detonation in a contacting high-explosive material such as PETN (pentaerythritoltetranitrate). In slapper detonators, the explosive vaporization of the electrical conductor drives a "flyer" or "slapper" across a chemical detonation. The slapper in some designs is driven by magnetic force. The term "exploding foil" detonator may refer to either an EB or a slapper-type detonator. Also, the word "initiator" is sometimes used in place of the word "detonator".<br />   Detonators using only primary explosives, such as lead azide, are not subject to control.</p>
<p>B.2.5.2 <em>Electronic components for firing sets (switching devices and pulse discharge capacitors):</em><br />
(a) switching devices:<br />
(1) cold-cathode tubes (including gas krytron tubes and vacuum sprytron tubes), whether gas filled or not, operating similarly to a spark gap, containing three or more electrodes, and having all of the following characteristics:<br />
(i) anode peak voltage rating of 2 500 V or more;<br />
(ii) anode peak current rating of 100 A or more; and<br />
(iii) anode delay time of 10 &micro;s or less;<br />
(2) triggered spark-gaps having an anode delay time of 15 &micro;s or less and rated for a peak current of 500 A or more; and<br />
(3) modules or assemblies with a fast switching function having all of the following characteristics:<br />
(i) anode peak voltage rating greater than 2 000 V;<br />
(ii) anode peak current rating of 500 A or more; and<br />
(iii) turn-on time of 1 &micro;s or less; and<br />
(b) capacitors with the following characteristics:<br />
(1) voltage rating greater than 1.4 kV, energy storage greater than 10 J, capacitance greater than 0.5 &micro;F, and series inductance less than 50 nH; or<br />
(2) voltage rating greater than 750 V, capacitance greater than 0.25 &micro;F, and series inductance less than 10 nH.</p>
<p>B.2.5.3 <em>Firing sets and equivalent high-current pulse generators (for controlled detonators), as follows:</em><br />
(a) explosive detonator firing sets designed to drive multiple controlled detonators covered in paragraph B.2.5.1.; and<br />
(b) modular electrical pulse generators (pulsers) designed for portable, mobile, or ruggedized-use (including xenon flash-lamp drivers) having all the following characteristics:<br />
(1) capable of delivering their energy in less than 15 &micro;s;<br />
(2) having an output greater than 100 A;<br />
(3) having a rise time of less than 10 &micro;s into loads of less than 40 &omega;. (Rise time is defined as the time interval from 10% to 90% current amplitude when driving a resistive load);<br />
(4) enclosed in a dust-tight enclosure;<br />
(5) no dimension greater than 25.4 cm (10 in.);<br />
(6) weight less than 25 kg (55 lbs.); and<br />
(7) specified for use over an extended temperature range (-50&deg;C to 100&deg;C) or specified as suitable for aerospace use.</p>
<p>B.2.5.4 <em>High explosives or substances or mixtures containing more than 2% of any of the following:</em><br />
(a) cyclotetramethylenetetranitramine (HMX);<br />
(b) cyclotrimethylenetrinitramine (RDX);<br />
(c) triaminotrinitrobenzene (TATB);<br />
(d) any explosive with a crystal density greater than 1.8 g/cm<sub>3</sub> and having a detonation velocity greater than 8 000 m/s; or<br />
(e) hexanitrostilbene (HNS).</p>
<p>B.2.6 <em>Nuclear testing equipment and components</em></p>
<p>B.2.6.1 Photomultiplier tubes with a photocathode area greater than 20 cm<sup>2</sup> having an anode pulse rise time of less than 1 ns.</p>
<p>B.2.6.2 High-speed pulse generators with output voltages greater than 6 V into a less than 55 &omega; resistive load, and with pulse transition times less than 500 ps (defined as the time interval between 10% and 90% voltage amplitude).</p>
<p>B.2.7  <em>Other equipment</em></p>
<p>B.2.7.1 Neutron generator systems, including tubes, designed for operation without an external vacuum system and utilizing electrostatic acceleration to induce a tritium-deuterium nuclear reaction.</p>
<p>B.2.7.2 <em>Equipment related to nuclear material handling and processing and to nuclear reactors, as follows:</em><br />
(a) remote manipulators that can be used to provide remote actions in radiochemical separation operations and hot cells, as follows:<br />
(1) having a capability of penetrating 0.6 m or more of hot cell wall (through-the-wall operation); or<br />
(2) having a capability of bridging over the top of a hot cell wall with a thickness of 0.6 m or more (over-the-wall operation);<br />
NOTE<br />
Remote manipulators provide translation of human operator actions to a remote operating arm and terminal fixture. They may be of a "master/slave" type or operated by joystick or keypad.<br />
(b) high-density (lead glass or other) radiation shielding windows greater than 0.09 m<sup>2</sup> on cold area and with a density greater than 3 g/cm<sup>3</sup> and a thickness of 100 mm or greater; and specially designed frames therefor; and<br />
(c) radiation-hardened TV cameras, or lenses therefor, specially designed or rated as radiation hardened to withstand greater than 5 x 10<sup>4</sup> Gy (Silicon) (5 x 10<sup>6</sup> rad (Silicon)) without operational degradation.</p>
<p>B.2.7.3 <em>Tritium facilities, plants and equipment, as follows:</em><br />
(a) facilities or plants for the production, recovery, extraction, concentration or handling of tritium, tritium compounds or mixtures containing tritium; and<br />
(b) equipment for those facilities or plants as follows:<br />
(1) hydrogen or helium refrigeration units capable of cooling to 23 K (-250&deg;C) or less, with heat removal capacity greater than 150 W; and<br />
(2) hydrogen isotope storage and purification systems using metal hydrides as the storage or purification medium.</p>
<p>B.2.7.4 Platinized catalysts specially designed or prepared for promoting the hydrogen isotope exchange reaction between hydrogen and water for the recovery of tritium from heavy water or for the production of heavy water.</p>
<p>B.2.7.5 <em>Lithium isotope separation facilities, plants and equipment, as follows:</em><br />
(a) facilities or plants for the separation of lithium isotopes; and<br />
(b) equipment for the separation of lithium isotopes, as follows:<br />
(1) packed liquid-liquid exchange columns specially designed for lithium amalgams;<br />
(2) mercury and lithium amalgam pumps;<br />
(3) lithium amalgam electrolysis cells; and<br />
(4) evaporators for concentrated lithium hydroxide solution.</p>
<p>B.2.7.6 Any equipment not otherwise included in paragraph B.2. if the equipment is intended, or there are reasonable grounds to suspect that it is intended, in whole or in part, for use in connection with the design, development, production, handling, operation, maintenance or storage of nuclear weapons or other nuclear explosive devices.</p>
<p>B.3. CONTROLLED NUCLEAR INFORMATION</p>
<p>B.3.1 <em>Technology</em></p>
<p>Technical data, including, but not limited to, technical drawings, models, photographic negatives and prints, recordings, design data and technical and operating manuals, whether in written form or recorded on other media or devices such as disk, tape and read-only memories for the design, production, construction, operation or maintenance of any item in this Part, except data available to the public (e.g. in published books or periodicals, or that which has been made available without restrictions on its further dissemination).</p>
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
<h2 id="Gloss">Glossary</h2>
<dl>
<dt><strong>controlled nuclear equipment</strong></dt>
<dd>The controlled nuclear equipment and the parts and components for controlled  nuclear equipment referred to in Appendix E of this document.</dd>
<dt><strong>controlled nuclear information</strong></dt>
<dd>The controlled nuclear information referred to in Appendix E of this document.</dd>
<dt><strong>controlled nuclear substances</strong></dt>
<dd>A controlled nuclear substance referred to in Appendix E of this document.</dd>
<dt><strong>end-use controls</strong></dt>
<dd>Also known as &quot;catch-all&quot;, they control items that are not otherwise listed in the NNIECR when such items may be intended for  use in connection with a nuclear weapons program.</dd>
<dt><strong>importer</strong></dt>
<dd>A recipient authorized to receive and possess an exported risk-significant radioactive source.</dd>
<dt><strong>intended end use</strong></dt>
<dd>The ultimate purpose of the imported source as declared to the exporter by the importer (e.g., industrial irradiation, industrial radiography, teletherapy, blood irradiation).</dd>
<dt><strong>intermediate consignee</strong></dt>
<dd>A person who is not the importer, but who handles the radioactive source at some point in its delivery to the importer. An entity associated solely with the transport of the source (e.g., carrier) is not considered an intermediate consignee.</dd>
<dt><strong>licensing basis</strong></dt>
<dd><p>A set of requirements and documents for a regulated facility or activity comprising:
<ul>
<li>the regulatory requirements set out in the applicable laws and regulations</li>
<li>the conditions and safety and control measures described in the facility&#39;s or activity&#39;s licence and the  documents directly referenced in that licence</li>
<li>the safety and control measures described in the licence application and the documents needed to support that  licence application</li>
</ul></p></dd>
<dt><strong>nuclear and nuclear-related dual-use items</strong></dt>
<dd>Also known as controlled nuclear substances, equipment and information, these items are listed in Appendix E of this document. Part A lists nuclear items and Part B lists nuclear-related dual-use items.</dd>
<dt><strong>Nuclear Suppliers Group (NSG)</strong></dt>
<dd>A multilateral export control regime of nuclear supplier countries which seeks to contribute to the non-proliferation of  nuclear weapons through the implementation of Guidelines (INFCIRC/254) for supply of nuclear and nuclear-related dual-use items.</dd>
<dt><strong>obligations</strong></dt>
<dd>Legally binding commitments adhering to nuclear material, non-nuclear material, nuclear equipment and nuclear technology (sometimes  referred to as &quot;flags&quot;). Obligations arise most commonly from the requirements of government-to-government nuclear cooperation agreements, wherein the parties  to the agreements are bound to fulfill those requirements before authorizing the transfer of the obligated items.</dd>
<dt><strong>radioactive source</strong></dt>
<dd>Means radioactive material that is permanently sealed in a capsule or closely bonded, in a solid form and which is not exempt from regulatory control. It also means any radioactive material released if the radioactive source is leaking or broken, but does not mean material encapsulated for disposal, or nuclear material within the nuclear fuel cycles of research and power reactors.</dd>
<dt><strong>risk-significant radioactive sources</strong></dt>
<dd>Any radionuclide identified as a Category 1 or Category 2 radioactive source in Table I of Annex I of the <em>IAEA Code of Conduct on the Safety and Security of Radioactive Sources</em>.</dd>
<dt><strong>TBq</strong></dt>
<dd>Terabecquerels where one TBq = 10<sup>12</sup> becquerels</dd>
<dt><strong>transaction</strong></dt>
<dd>Any action involving an import or an export.</dd>
<dt><strong>Zangger Committee</strong></dt>
<dd>A multilateral export control regime, formed as the NPT&#39;s Exporters Committee, that serves as the &quot;faithful interpreter&quot; of Article III(2) of the NPT in order to inform the interpretation of nuclear export control policies for treaty members. The Zangger Committee maintains a &quot;Trigger List&quot; (INFCIRC/209, triggering safeguards as a condition of supply) of nuclear items to assist NPT parties in identifying equipment and materials subject to export controls.</dd>
</dl>  </div>  <div className="clear"></div>
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
<h2 id="Ref">References</h2>
<ol>
<li><em>Canadian Nuclear Safety Commission Rules of Procedure</em>, SOR/2000-211.</li>
<li><a href="http://www.un.org/en/conf/npt/2005/npttreaty.html"><em>Treaty on the Non-Proliferation of Nuclear Weapons</em></a>.</li>
<li>International Atomic Energy Agency (IAEA), RS-G-1.9, <em>Categorization of Radioactive Sources</em>, 2005.</li>
<li>IAEA, <em>Code of Conduct on the Safety and Security of Radioactive Sources</em>, 2004.</li>
<li>IAEA, <em>Guidance on the Import and Export of Radioactive Sources</em>, 2012.</li>
</ol>  </div>  <div className="clear"></div>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<h2>CNSC Regulatory Document Series</h2>
<p>Facilities and activities within the nuclear sector in Canada are regulated by the Canadian Nuclear Safety Commission (CNSC). In addition to the <em>Nuclear Safety and Control Act </em>and associated regulations, there may also be required to comply with other&nbsp;regulatory instruments such as regulatory documents or standards.</p>
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
</ul>
</li>
</ul>
<p><strong>Note:</strong> The regulatory document series may be adjusted periodically by the CNSC. Each regulatory document series listed above may contain multiple regulatory documents. For the latest list of regulatory documents, visit the CNSC&#39;s <a href="/eng/acts-and-regulations/regulatory-documents/index">Regulatory Documents Web page</a>.</p>  </div>
<div className="clear">
                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }