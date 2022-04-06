import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "en",
                pageTitle: "REGDOC-2.5.5: Design of Industrial Radiography Installations", 
                dateModified: "2017-01-30",
                langToggleUrl: "/fra/acts-and-regulations/consultation/comment/regdoc2-5-5"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<h2 id="preface">Preface</h2>
<p>This regulatory document is part of the CNSC&#39;s Physical Design series of regulatory documents, which also covers: design of uranium mines and mills, reactor facilities, nuclear substance laboratories, and nuclear medicine rooms. The full list of regulatory document series is included at the end of this document and can also be found on the <a href="http://www.nuclearsafety.gc.ca/eng/acts-and-regulations/regulatory-documents/index#R13">CNSC&#39;s website</a>.</p>
<p>Industrial radiography involves the use of risk-significant sealed sources of nuclear substances, most commonly cobalt-60, iridium-192 and selenium-75, to evaluate the internal structure and integrity of metals and other materials in pipelines, welds, castings and building structures.</p>
<p>A radiography installation is any shielded enclosure, cell or vault where radiography is performed. These shielded enclosures can be very effective in preventing or minimizing doses to both operators and persons within the vicinity. Radiography installations can also provide an additional level of safety by preventing unauthorized access during operations.</p>
<p>REGDOC-2.5.5, <em>Design of Industrial Radiography Installations</em>, provides guidance for the design of radiography installations. This information will assist individuals in the design and construction of installations that are safe to use, and that ensure that doses to certified exposure device operators, workers and all persons in the vicinity of the work being performed are within regulatory limits and are kept as low as reasonably achievable.</p>
</div>  <div className="clear"></div>
<div className="col-md-12 module-table-contents">
<h2>Table of Contents</h2>
<ul>
<li><a href="#sec1">1. Introduction</a>
<ul>
<li><a href="#sec1-1">1.1 Purpose</a></li>
<li><a href="#sec1-2">1.2 Scope</a></li>
<li><a href="#sec1-3">1.3 Relevant  legislation</a></li>
</ul></li>
<li><a href="#sec2">2. General Design Principles</a></li>
<li><a href="#sec3">3. Engineered Controls</a>
<ul>
<li><a href="#sec3-1">3.1 Radiation exposure controls</a></li>
<li><a href="#sec3-2">3.2 Structural considerations</a></li>
<li><a href="#sec3-3">3.3 Accessibility</a></li>
<li><a href="#sec3-4">3.4 Security measures</a></li>
</ul></li>
<li><a href="#sec4">4. Administrative Controls</a>
<ul>
<li><a href="#sec4-1">4.1 Placing limits on nuclear substance type and maximum activity</a></li>
<li><a href="#sec4-2">4.2 Restricting use of areas adjacent to the radioagraphy installation</a></li>
<li><a href="#sec4-3">4.3 Monitoring for human presence prior to exposures</a></li>
</ul></li>
<li><a href="#sec5">5. Construction</a></li>
<li><a href="#sec6">6. Commissioning</a></li>
<li><a href="#sec7">7. Operation</a>
<ul>
<li><a href="#sec7-1">7.1 Routine reviews and maintenance</a></li>
<li><a href="#sec7-2">7.2 Ongoing evaluation of the design</a></li>
</ul></li>
<li><a href="#appA">Appendix&nbsp;A: Dose Calculations</a>
<ul>
<li><a href="#appA1">A.1 Five-step method</a></li>
<li><a href="#appA2">A.2 Example of a dose calculation</a></li>
</ul></li>
<li><a href="#gloss">Glossary</a></li>
<li><a href="#ref">References</a></li>
<li><a href="#addInfo">Additional Information</a></li>
</ul>  </div>  <div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="1"></div>
<h2 id="sec1">1. Introduction</h2>  <p>Industrial radiography is a non-destructive method of looking for defects in materials by examining the structures of welds, castings, and building components. Certified personnel use high-activity sealed nuclear substances in certified exposure devices.</p>  <p>Industrial radiography operations take place in a variety of locations and under different environmental conditions. Work is done inside buildings under controlled conditions and is also carried out in the field in adverse weather. Licensees must ensure that effective measures are in place to limit the radiation exposure to any person as a result of radiography operations wherever they are conducted.</p>  <p>Whenever possible, industrial radiography equipment should be used inside an industrial radiography installation, to protect workers and minimize radiation exposure to any other person.</p>  <p>Whether a radiography installation is temporarily or permanently installed, all of the design principles described in the following sections apply. This is to ensure that the radiography installation performs as expected and provides the necessary level of safety to control radiation exposures. All CNSC regulatory requirements, including those specific to radiography, apply to all uses of nuclear substances and radiation devices within a radiography installation.</p>  <p>Radiography installations must comply with all applicable national, provincial/territorial and municipal safety codes, including those for building and fire protection. The guidance provided in this regulatory document does not supersede the requirements of any permitting authority.</p>
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
<h3 id="sec1-1">1.1 Purpose</h3>  <p>This regulatory document provides guidance for the design of an industrial radiography installation.</p>
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
<h3 id="sec1-2">1.2 Scope</h3>  <p>The guidance provided applies to the design of industrial radiography installations for the use of sealed nuclear substances, including fixed (permanent) and temporary structures, and installations not under the direct control of the certified person(s) conducting the radiography operations.</p>   <p>This document does not apply to the design of installations for:</p>
<ul>
<li>the use of sealed nuclear substances regulated under the <a href="http://laws.justice.gc.ca/eng/regulations/sor-2000-205/page-1.html"><em>Class II Nuclear Facilities and Prescribed Equipment Regulations</em></a></li>
<li>neutron radiography</li>
</ul>  <p>The provinces and territories regulate the use of x-ray generators for industrial radiography. The design of installations for their use is outside the scope of this document.</p>   <p>REGDOC-2.5.5 addresses design features that enhance nuclear safety and security. Other health, safety, and environmental considerations may dictate adherence to additional guiding principles.</p>
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
<h3 id="sec1-3">1.3 Relevant legislation</h3>  <p>The following regulations made under the Nuclear Safety and Control Act are relevant to this document:</p>
<ol>
<li>Paragraph 12(1)(c) of the <em>General Nuclear Safety and Control Regulations</em>: "Every licensee shall ...
<ul className="list-bullet-none">
<li>(c) take all reasonable precautions to protect the environment and safety of persons and to maintain the security of nuclear facilities and of nuclear substances; ...”
</li>
</ul></li>
<li>Paragraph 3(1)(d) of the <em>Nuclear Substances and Radiation Devices Regulations</em> (NSRD Regulations) states: "An application for a licence in respect of a nuclear substance or a radiation device, other than a licence to service a radiation device, shall contain ... (d) the proposed location of the activity to be licensed, including a description of the site."</li>
<li>Section 24 of the NSRD Regulations states "No person other than a certified exposure device operator, or a trainee who is acting under the direct supervision and continuous observation of a certified exposure device operator, shall operate an exposure device.</li>
<li>Subsection 30(6) of the NSRD Regulations states: "Every licensee shall limit the dose of radiation received by a person, other than a nuclear energy worker, as a result of the possession or use of an exposure device to 0.1 mSv per week and 0.5 mSv per year."</li>
<li>Paragraphs 31(1)(i),(j) and (k) of the NSRD Regulations states: "Every person who operates an exposure device shall ...
<ul className="list-bullet-none">
<li>(i) limit the dose of radiation received by any person, other than a nuclear energy worker, as a result of the possession or use of the exposure device to 0.1 mSv per week and 0.5 mSv per year;</li>
<li>(j) place persons or erect barriers to prevent entry into any area within which the radiation dose rate is greater than 0.1 mSv per hour as a result of the possession or use of the exposure device;</li>
<li>(k) post a sufficient number of durable and legible signs that bear the radiation warning symbol set out in Schedule 3 to the <em>Radiation Protection Regulations</em> and the words "RAYONNEMENT &ndash; DANGER &ndash; RADIATION", to prevent entry into any area within which the radiation dose rate is greater than 0.1 mSv per hour as a result of the possession or use of the exposure device."</li>
</ul></li>
<li>Section 4 of the <em>Radiation Protection Regulations</em> states: "Every licensee shall implement a radiation protection program and shall, as part of that program,
<ul className="list-bullet-none">
<li>(a) keep the amount of exposure to radon progeny and the effective dose and equivalent dose received by and committed to persons as low as is reasonably achievable, social and economic factors being taken into account, through the implementation of
<ul className="list-lower-roman">
<li>management control over work practices,</li>
<li>personnel qualification and training,</li>
<li>control of occupational and public exposure to radiation, and</li>
<li>planning for unusual situations; and</li>
</ul></li>
<li>(b) ascertain the quantity and concentration of any nuclear substance released as a result of the licensed activity
<ul className="list-lower-roman">
<li>by direct measurement as a result of monitoring, or</li>
<li>if the time and resources required for direct measurement as a result of monitoring outweigh the usefulness of ascertaining the quantity and concentration using that method, by estimating them.</li>
</ul></li>
</ul></li>
<li>Section 21 of the <em>Radiation Protection Regulations</em> states: Every licensee shall post and keep posted, at the boundary of and at every point of access to an area, room or enclosure, a durable and legible sign that bears the radiation warning symbol set out in Schedule 3 and the words "RAYONNEMENT &ndash; DANGER &ndash; RADIATION", if
<ul className="list-bullet-none">
<li>(a)	there is a radioactive nuclear substance in a quantity greater than 100 times its exemption quantity in the area, room or enclosure; or</li>
<li>(b)	there is a reasonable probability that a person in the area, room or enclosure will be exposed to an effective dose rate greater than 25 &micro;Sv/h.</li>
</ul></li>
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
<div id="2"></div>
<h2 id="sec2">2. General Design Principles</h2>  <p>Design principles for industrial radiography installations are based on the requirement that all exposure device operators and licensees must ensure that any radiation exposures as a result of radiography operations remain within the limits set out in the regulations under the <em>Nuclear Safety and Control Act</em>. In addition, every effort must be made to further reduce exposures and doses to as low as reasonably achievable (ALARA), as required by subsection 4(a) of the <em>Radiation Protection Regulations</em>. For more information on ALARA, see CNSC regulatory document G-129 rev. 1, <em>Keeping Radiation Exposure and Doses "As Low as Reasonably Achievable (ALARA)"</em> [1]. Both licensees and certified exposure device operators (CEDOs) are required to limit the exposure of any person, other than a nuclear energy worker (NEW), to 0.1 mSv per week and 0.5 mSv per year.</p>  <p>The design of a radiography installation includes the consideration of factors besides those obviously associated with minimizing radiation exposure. All relevant factors, including workload, structural, accessibility and economic should be considered at the design phase of the radiography installation. Evaluation of these factors will contribute to ensuring that the final product is effective and can be readily and safely used by CEDOs, while also providing the necessary protection for any other person in the vicinity of radiography operations. These factors should be evaluated for the immediate and the foreseeable future needs of the persons using the installation.</p>  <p>There are two methods to minimize radiation exposure: the application of engineered controls (e.g., shielding material, location) and the application of administrative controls (e.g., limiting nuclear substance sealed source activity, restricting access and time in proximity to the installation). The design of a radiography installation should give preference to the use of engineered controls where ever possible, which are always functional. Administrative controls, which have to be constantly applied, can be used as supplemental controls when engineered controls are not sufficient or applicable. For example, establishing a permanent exclusion zone by design is preferred to establishing a barrier system that has to be monitored by one or more persons.</p>  <p>Engineered controls include:</p>
<ul>
<li>radiation exposure controls
<ul>
<li>distance</li>
<li>shielding</li>
<li>skyshine</li>
</ul></li>
<li>structural considerations
<ul>
<li>walls, roof, doors/access</li>
<li>floor</li>
<li>services (electrical, water, sewer, pneumatic, hydraulic, etc.)</li>
<li>openings and penetrations</li>
</ul></li>
<li>accessibility
<ul>
<li>size and weight of exposure devices</li>
<li>size and shape of materials for examination</li>
</ul></li>
<li>security measures</li>
</ul>  <p>Administrative controls include:</p>
<ul>
<li>placing limits on nuclear substance type and activity</li>
<li>restricting use of areas adjacent to the radiography installation</li>
<li>adjusting workload (including time of day considerations)</li>
<li>controlling occupancy of surrounding areas</li>
<li>limiting the position and direction of the source within the installation</li>
<li>monitoring for human presence prior to exposures</li>
</ul>   <p>The radiography installation owner should ensure that appropriate safety signs, notices, barriers and associated documentation regarding any administrative controls are available to all persons who will need to know the specific safety limits imposed, including operators using the installation and any other person who may enter the area.</p>
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
<h2 id="sec3">3. Engineered Controls</h2>  <p>The design of the radiography installation should incorporate the following engineered controls to ensure that the prescribed exposure limits will be respected and that all exposures are kept consistent with the ALARA principle.</p>
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
<h3 id="sec3-1">3.1 Radiation exposure controls</h3>  <h4>3.1.1 Distance</h4>  <p>Changing the distance between the radiation source and the position of the radiation detector will result in large changes to the radiation exposure as it is inversely proportional to the square of the distance from the source. For example, with other variables constant, doubling the distance from the source of radiation will result in a reduction of radiation dose by a factor of four. When considering design and placement, industrial radiography installations should be located as far as possible from workspaces and places that could reasonably be expected to be occupied when radiography would take place.</p>   <p>The design of the installation should also facilitate the ability to use the full length of the control cable for each exposure device being used and should not compromise or restrict the use of long-handled tools that may be needed to respond to emergencies, such as source recovery operations.</p>  <h4>3.1.2 Shielding</h4>  <p>The use of shielding around the radiation source will reduce radiation exposures and consequently any resulting radiation doses. Generally, for any given material, the thicker the shielding placed between the person and the source, the lower the exposure to radiation for that person. The choice of shielding depends on the quantity and energy of the radiation to be shielded and generally involves structural and economic considerations. The nuclear substances used for industrial radiography emit high-energy gamma radiation, so these nuclear substances require significant thicknesses of lead and/or concrete to reduce the radiation levels to acceptable levels.</p>  <p>The shielding for a radiography installation should be designed based on the anticipated maximum activity of each nuclear substance that is to be used in the installation.</p>   <p>For any given nuclear substance, the relationship between radiation dose and the activity of the source is directly proportional and this is represented by the value known as the gamma ray constant.</p>  <p>Table 1 provides gamma ray constant values in microsieverts per hour (&micro;Sv/h)at 1 metre per gigabecquerel (GBq) of activity of an isotope. These values are derived from <em>Conversion Coefficients for Radiological Protection Quantities for External Radiation Exposures</em> [2] published by the International Commission on Radiological Protection and the <em>Joint Evaluated Fission and Fusion File</em> (JEFF) 3.1 published by Nucleonica GmbH [3].</p>
<table className="">  <caption className="text-left"><strong>Table 1: Gamma ray constant values for nuclear substances commonly used in industrial radiography</strong></caption>  <tr>
<th>Nuclear substance</th>
<th>Gamma ray constant value<br />
(&micro;Sv/h per GBq at 1 m)</th>  </tr>  <tr>
<td>Cobalt-60</td>
<td className="text-center">305</td>  </tr>  <tr>
<td>Iridium-192</td>
<td className="text-center">117</td>  </tr>  <tr>
<td>Cesium-137</td>
<td className="text-center">78</td>  </tr>  <tr>
<td>Selenium-75</td>
<td className="text-center">56</td>  </tr>  <tr>
<td>Ytterbium-169</td>
<td className="text-center">52</td>  </tr>  </table>
<p>The gamma ray constant and the known activity of the nuclear substance can be used to calculate the potential radiation exposure to persons in the vicinity of the nuclear substance. For example, it is possible to determine that a 10 GBq sealed source of Ir-192 will result in an effective dose rate of 1170 &micro;Sv/h (or 1.17 mSv/h) at 1 metre from the sealed source. Corrections must be applied for changes to distance and the introduction of any shielding between the source and the location of measurement. Exposures at other distances from the sealed source can be calculated by use of the inverse-square law equation<sup id="fnb1-ref"><a className="fn-lnk" href="#fnb1"><span className="wb-inv">Footnote </span>1</a></sup>.</p>  <p>Higher-energy gamma sources (such as cobalt-60) will require more shielding than lower-energy gamma sources (such as selenium-75). Similarly, higher quantities of a particular nuclear substance will require larger amounts of shielding to reduce the dose rate to the same level as a smaller quantity of that same nuclear substance.</p>  <p>Lead and concrete are effective shielding for reducing dose rates associated with the gamma radiation emitted by sealed sources used in industrial radiography. Whichever type of shielding is used, it should be made of solid material with no cracks, holes or voids.</p>   <p>If blocks of shielding are used, they should be arranged to avoid spaces or voids between the blocks. Any gaps, voids or spaces between shielding blocks should be filled with a sufficient quantity of similar or better shielding to ensure that the shielding is effective. If two or more walls of lead or concrete shielding blocks are used, the joints should be offset to minimize a direct path for the radiation through the joints in the walls. When sheets of lead shielding are used in walls, the lead sheet should be properly supported, to ensure that it does not displace or move from the original installation, since lead will tend to sag or creep over time.</p>  <p>Since radiation travels in all directions, shielding should be considered for all adjacent areas, including above and below the radiography installation, as applicable.</p>  <p>If the design does not or cannot provide enough shielding to meet the dose rate limit of 0.1 mSv/week or 0.5 mSv/year, as well as demonstrate adherence to the ALARA principle, additional administrative controls, such as a larger exclusion zone, will have to be established and enforced during radiography operations. See G-129 rev 1, <em>Keeping Radiation Doses "As Low as Reasonably Achievable (ALARA)"</em> [1] for guidance on the ALARA principle.</p>  <p>Appendix A provides a method for calculating radiation exposures based on the design of the installation.</p>
<h4>3.1.3 Skyshine</h4>  <p>Skyshine can be a significant source for radiation exposure when large sealed sources are used without overhead shielding. Skyshine is radiation that is emitted upwards from inside of an installation and then reflected back down by air (see figure 1). In general, radiography installations should be designed with a shielded roof to minimize skyshine and reduce occupational exposure to workers and other persons.</p>
<p><strong>Figure 1: Radiation emitted as skyshine</strong></p>
<div className="col-md-6 module-poster">  <img src="/images/regulatory-documents/regdoc-2-5-5/fig1-skyshine-radiation.png" alt="Radiation emitted as skyshine" />  </div>  <div className="clear"></div>
<p>Maximum dose rates from skyshine may not occur immediately adjacent to the shielded wall, but may reach a distance from that wall and could also reach any elevated workstations that surround the installation.</p>  <p>When an installation has minimal (for example, to protect against the weather) or no roof shielding, the design should take into account the potential for radiation exposure due to skyshine.</p>  <p>When skyshine is a significant source of radiation exposure, the design of the roof will have to include a sufficient amount of effective shielding. In such cases, the design of the installation will have to incorporate an appropriate supporting structure for the additional weight of the shielding on the roof.</p>   <p>If exposure to skyshine is significant, but it is impractical to install or shield a roof, access to adjacent areas should be limited or prevented through the use of engineered controls (e.g., radiation warning monitors), administrative controls (e.g., limited access to the area) or a combination of both.</p>  <p>Evaluation of the potential for skyshine from a radiography installation is a complex calculation and the owner is encouraged to seek professional assistance from a person who has the necessary experience and knowledge to competently carry out this work.</p>
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
<h3 id="sec3-2">3.2 Structural considerations</h3>  <h4>3.2.1 Walls, floors, roof, and doors</h4>  <p>As with any construction, structural considerations should be taken into account at the time of design, and reassessed regularly during construction and operation of the installation. Since radiography installations typically involve the use of substantial quantities of heavy materials such as shielding, the radiography installation should be designed and operated with structural considerations in mind. This includes, but is not limited to:</p>
<ul>
<li>walls that are self-supporting, contiguous and will not topple</li>
<li>walls and supports with a sufficient base to ensure that there is no sag, slump or other deterioration caused by settling of the ground</li>
<li>supports or foundations that are properly protected against the effects of frost heave or freezing of the ground</li>
<li>floors with sufficient capacity to manage the static and dynamic loads that will be imposed by the weight of the required shielding for walls and supporting requirements for the roof</li>
<li>doors that contain shielding are easily and safely moved by one person from either side</li>
<li>entrances of sufficient width and height to accommodate persons and equipment</li>
<li>a roof with adequate support for the required shielding and other loads</li>
<li>sufficient setback from property and building lines to ensure access for servicing adjacent areas</li>
</ul>  <p>Personnel access and equipment doorways in the shielding of the radiography installation should not compromise the shielding provided by the walls. This may require the use of a sufficiently shielded door. However, if radiation from the exposure device is in a direct line to the door, the necessary shielding for the door may make it too heavy or unwieldy to operate safely. Whenever possible, the entry to a radiography installation should be designed with an indirect pathway to the area where radiography will be conducted, also known as a "maze entrance" (see figure 2). The use of a maze entrance minimizes any radiation leaks through the entrance to the radiography installation, and also may reduce the need for the use of heavy, thick concrete or lead in the door to the radiography installation. Furthermore, the use of a maze entrance reduces the amount of radiation that may escape the radiography installation when the exposure device operator needs to access the radiography device.</p>  <p>The potential for scatter radiation at a maze entrance should be evaluated to determine if additional protection, such as a shielded door, is required.</p>
<p><strong>Figure 2: Radiography installation design with a maze entrance</strong></p>  <div className="col-md-3 module-poster">  <img src="/images/regulatory-documents/regdoc-2-5-5/fig2-maze-entrance.png" alt="Radiography installation design with a maze entrance" />  </div>  <div className="clear"></div>
<p>The radiography installation must be designed, constructed and operated in accordance with all federal, provincial/territorial or municipal requirements for such structures. In particular, all applicable building and fire code requirements must be met.</p>
<h4>3.2.2 Services</h4>  <p>The design of the radiography installation should take into account current and future provision of services that may be required. These include:</p>
<ul>
<li>electrical wiring for:
<ul>
<li>general and task lighting</li>
<li>operation of exposure devices</li>
<li>operation of other equipment</li>
<li>data</li>
<li>control systems</li>
<li>alarm systems</li>
<li>monitoring systems</li>
</ul></li>
<li>water:
<ul>
<li>cold</li>
<li>hot</li>
<li>distilled or deionized</li>
<li>sewage or waste</li>
</ul></li>
<li>air:
<ul>
<li>HVAC</li>
<li>compressed</li>
</ul></li>
<li>fuel:
<ul>
<li>heaters</li>
<li>operation of other equipment</li>
</ul></li>
</ul>
<h4>3.2.3 Openings, penetrations and excavations</h4>  <p>Where any service or other opening is required to provide access to the interior of the radiography installation, the design of the installation should ensure that the penetration through the shielding does not compromise the intended level of protection afforded by the shielding design. Any penetration through shielding should not be in a straight line directly through the shielding but should traverse the shielding in the form of either an arc or at an angle. Any penetration that must traverse the shielding in a straight line (such as HVAC ducting) should be located high on the shielding wall or otherwise located to prevent a potential for exposure to any person outside of the installation. Gaps around pipes or conduits should be filled with lead or concrete to minimize the diameter of penetrations where possible.</p>  <p>Where excavation is required to install a service line, the floor should be restored such that the repaired area will not compromise the structural integrity of the installation. Any excavations below the level of the floor should be refilled with material in sufficient quantity and density to provide the same or better structural support as the undisturbed floor.</p>  <p>In general, controls for the operation of industrial radiography equipment should be located on the exterior of the radiography installation. Such an arrangement will necessitate a penetration into the installation.</p>
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
<h3 id="sec3-3">3.3 Accessibility</h3>  <h4>3.3.1 Size and weight of exposure devices</h4>  <p>The design of the installation should account for the physical characteristics of the exposure device expected to be used. Because of their smaller size, devices that use iridium-192 and selenium-75 are less likely to require special design considerations than larger and heavier cobalt-60 exposure devices. If an exposure device is difficult to manipulate or move, the design of the installation should include measures such as wider corridors to allow for movement and turning of the device.</p>  <p>The installation design should also allow for radiation source changes, including the additional containers or other packages that may be required to undertake the source change. If it is not feasible or possible to remove the exposure device to change the sealed source, then the design of the installation should allow for a new source in a shielded container or other package to be brought into the installation, safely opened, and exchanged with the old source while minimizing potential exposures to any nearby person.</p>  <p>If it is not possible to design the installation to accommodate a variety of exposure devices that may be used, it may be necessary for the radiography installation owner to limit the nuclear substances used, the quantity of a specific isotope, or the size of the exposure device.</p>
<h4>3.3.2 Size and shape of material for examination</h4>  <p>Since the intent of radiography evaluations is to examine the structural integrity or arrangement of another item, the radiography installation should be designed for the entry and exit of the anticipated items for evaluation. This may include:</p>
<ul>
<li>designing an entrance which will allow for easy access by carts, forklifts or other conveyances</li>
<li>providing overhead access capability to lift objects in and out of the radiography installation, including the provision of a suitable lift crane or hoist</li>
<li>providing a special removable section of the wall or roof to allow for the infrequent entry and exit of such items while not compromising the intended shielding of the installation</li>
<li>incorporating sufficient support for cranes or hoists required for moving large or heavy items for examination</li>
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
<div id="3.4"></div>
<h3 id="sec3-4">3.4 Security measures</h3>  <p>The exposure devices used inside radiography installations often contain high-risk Category 1 or 2 radioactive sealed sources. Although the radiography installation itself is not subject to requirements of REGDOC-2.12.3, <em>Security of Nuclear Substances: Sealed Sources</em> [4], it is recommended that the installation supplement security measures already integrated in the exposure device, by incorporating security-by-design concepts. In certain cases where a licensee uses an exposure device exclusively in a radiography installation, features of the installation may be used to achieve and demonstrate compliance with the requirements of REGDOC-2.12.3 (such as providing alarm systems or secure storage).</p>  <p>REGDOC-2.12.3 describes security-related regulatory requirements for the licensee&#39;s security program for sealed nuclear substances, and provides general guidance to assist licensees on meeting these requirements.</p>   <p>Table 2 identifies best practices for achieving compliance by incorporating security-related features of the installation. These best practices assume that the radiography installation is not used for storage of exposure devices. If exposure devices are stored within the installation, additional requirements of REGDOC-2.12.3 apply. It is recognized that other design measures, already mentioned elsewhere in this document, are similar to those proposed in table 2.</p>
<table className="table table-striped">  <caption className="text-left"><strong>Table 2: Best practice in security by design for radiography installations</strong></caption>  <tr>
<th className="text-center text-center">Security program subsection</th>
<th className="text-center text-center">Best practice in security by design</th>  </tr>  <tr>
<td>Access control</td>
<td><ul>
<li>Access to exposure devices, while in the radiography installation, must be restricted to authorized personnel only.</li>
<li>Radiography installation could incorporate access control measures such as keyed or electronic access doors or access points, or enable constant visual monitoring of access points while exposure devices are used within the installation.</li>
</ul></td>  </tr>  <tr>
<td>Intrusion detection system</td>
<td><ul>
<li>Radiography installation could incorporate a detection system that immediately informs an operator of unauthorized access to the installation. Equivalent design measures, such as enabling continuous visual monitoring, can also be used.</li>
</ul></td>  </tr>  <tr>
<td>Perimeter and/or physical barrier</td>
<td><ul>
<li>Radiography installation could incorporate security measures which, when being used with an exposure device, prevent the unauthorized removal of the device from the bunker such as storage cages, or tie downs for chains that are attached to the exposure device.</li>
</ul></td>  </tr>  <tr>
<td>Security of storage</td>
<td><ul>
<li>Not applicable for installations that are not being used to store exposure devices.</li>
<li>if an exposure device is generally only used and stored in the radiography installation (i.e., Co-60 exposure devices), then the radiography installation should include the necessary security measures in accordance with CNSC REGDOC-2.12.3, <em>Security of Nuclear Substances: Sealed Sources</em> [4].</li>
</ul></td>  </tr>  <tr>
<td>Maintenance and testing</td>
<td><ul>
<li>Any components incorporated in the radiography installation for security-related purposes should be maintained within manufacturer&#39;s specifications and tested at least every six months.</li>
</ul></td>  </tr>  <tr>
<td>Installation security plan</td>
<td><ul>
<li>If any features of the radiography installation are used to achieve and demonstrate compliance by the licensee with REGDOC-2.12.3, they should be described in the licensee&#39;s security plan.</li>
</ul></td>  </tr>  <tr>
<td>Information security</td>
<td><ul>
<li>Any information concerning security-related features of the radiography installation should be controlled and stored in an appropriate manner, such as filing cabinets with controlled access or encrypted computer storage devices.</li>
</ul></td>  </tr>  <tr>
<td>Security awareness training</td>
<td><ul>
<li>All workers or licensees that perform work in a radiography installation with security-related features should be trained in the proper use of these features.</li>
</ul></td>  </tr>  </table>
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
<h2 id="sec4">4. Administrative Controls</h2>  <p>Because administrative controls depend on persons to respect and adhere to them, they should supplement but not replace engineered controls.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.1"></div>
<h3 id="sec4-1">4.1 Placing limits on nuclear substance type and maximum activity</h3>  <p>Once the radiography installation has been designed for specific combinations of nuclear substances and maximum activity, the installation owner should restrict the use of nuclear substances there, so that limits are respected. Restrictions on the nuclear substances and/or the maximum activity of each nuclear substance to be used should be clearly posted on the exterior of the radiography installation.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.2"></div>
<h3 id="sec4-2">4.2 Restricting use of areas adjacent to the radiography installation</h3>  <p>Any room, area or enclosure adjacent to the radiography installation represents a potential location where unexpected radiation fields may exist with the potential for radiation exposure to other persons. The design of the radiography installation should consider all adjacent areas to ensure that any radiation exposures are within the prescribed limits and are kept consistent with the ALARA principle.</p>  <p>Areas adjacent to the radiography installation that should be considered include:</p>
<ol>
<li>below the installation (e.g., the basement)</li>
<li>elevated around the installation (e.g., raised offices)</li>
<li>above the installation (e.g., the roof, work areas on upper floors)</li>
<li>on all sides of the installation on the same level</li>
<li>neighbouring properties</li>
</ol>  <p>The installation should be situated inside well-defined property boundaries at a sufficient distance from adjacent properties to allow for access to all parts of the installation and maintenance of the structure and shielding, as may be necessary.</p>  <p>All locations adjacent to the radiography installation should be clearly identified and marked on a plan of the installation to ensure that adequate consideration is given to reducing radiation exposures in these areas. These locations should include areas, rooms or enclosures used for storage or that are otherwise not normally occupied at the time of assessment. Since the usage and therefore the occupancy of such locations may change, the assessment should consider radiation exposure.</p>  <p>Based on the exposure potential for areas adjacent to the radiography installation, the CEDO should monitor exposures in these areas to ensure that radiation doses are not exceeded. Where the dose-rate in any area adjacent to the radiography installation exceeds the prescribed limit, posting of warning signs will also be required.</p>
<h4>4.2.1	Adjusting workload</h4>  <p>Workload should be determined using the most conservative assumptions at all times for all potential radiography work. The maximum workload needs to be determined on a weekly and annual basis.</p>   <p>Typically, the workload is expressed in the number of radiography exposures conducted on a weekly and annual basis and the anticipated maximum time for each exposure. Basing the workload on the anticipated maximum exposure time per exposure is an appropriate conservative assumption. Such information can be useful in the planning stages as well to ensure that the location has sufficient capacity to conduct all radiography operations safely.</p>
<p>Workload planning, for the purposes of ensuring sufficient capacity in a radiography installation, should also take into account the time required for exposure set up and tear down to ensure that there is sufficient time and capacity to conduct the required work.</p>   <p>If more than one radiography licensee uses a radiography installation, the design should take in to account the cumulative operations by all licensees.</p>  <p>The workload of a radiography installation may need to be restricted or otherwise limited to comply with the applicable radiation exposure limits.</p>
<h4>4.2.2	Controlling occupancy of surrounding areas</h4>  <p>The design should take into account the occupancy of surrounding areas by persons on both a full-time or temporary basis. Occupancy of areas in proximity to the radiography installation may change depending on the day or time of day. Furthermore, occupancy of surrounding areas may change on a seasonal basis where some adjacent locations are only used during certain months of the year.</p>  <p>The occupancy factor (T) for each location is the fraction of total time during which a radiation field is present at a particular location, for which any one individual would reasonably be expected to be present there. This factor (&le;1) is multiplied by the total radiation dose at that location, to derive the maximum personal dose any single person would be expected to receive. Examples of occupancy factors are provided in table 3, which may be used as a guide in the absence of adequate occupancy data. The information provided is adapted from ANSI N43.3 2008, <em>Installations Using Non-Medical X-Ray and Sealed Gamma Ray Sources, Energies Up To 10 MeV</em> [5].</p>
<table className="table table-striped">  <caption className="text-left"><strong>Table 3: Examples of occupancy factors</strong></caption>  <tr>
<th>Occupancy type</th>
<th className="text-center">Examples</th>
<th>Occupancy factor (T)</th>  </tr>  <tr>
<td>Full occupancy</td>
<td>Control rooms, darkrooms, workrooms, shops, offices, and corridors large enough to be used as working areas, routinely used rest areas and lounges, living quarters, children&#39;s play areas, occupied space in adjoining buildings</td>
<td className="text-center">1</td>  </tr>  <tr>
<td>Partial occupancy</td>
<td>Frequently used corridors too narrow for desks, utility rooms, rest areas and lounge rooms not used routinely, elevators using operators, uncontrolled parking lots</td>
<td className="text-center">1/2 to 1/5</td>  </tr>  <tr>
<td>Occasional occupancy</td>
<td>Infrequently used corridors, closets too small for future occupancy, toilets, stairways, automatic elevators, outside areas used only by pedestrians or vehicular traffic</td>
<td className="text-center">1/8 to 1/40</td>  </tr>  </table>
<p>It is important to know typical work patterns for both radiographers in the installation and persons working in the vicinity. An ideal situation would be zero occupancy for areas around an installation when radiography is taking place. An example of this is scheduling radiography operations outside of normal working hours. While zero occupancy is ideal, it is rarely achievable. The person operating the exposure device should verify the occupancy of all adjacent areas before each exposure, and re-confirm that no persons have entered areas where the potential for a radiation exposure exists.</p>  <p>When designing the wall shielding, an occupancy factor of 1 should be assumed for any adjacent properties. Where the assessment has identified that locations adjacent to the radiography installation may be occupied, the design of the radiography installation should ensure that doses respect regulatory requirements through the use of additional shielding and other administrative or engineered control methods.</p>   <p>Where a radiography installation is located where the licensee or radiography installation owner has no control over occupancy of adjacent locations by any other person, design decisions should assume continuous occupancy of these locations to ensure that potential doses to such locations are within the prescribed regulatory limits and maintained ALARA.</p>   <p>As noted earlier, if shielding or other controls are not sufficient to reduce potential exposures below the prescribed limits, then restrictions should be placed on occupancy of areas adjacent to the radiography installation to ensure that no person exceeds the applicable exposure limits.</p>  <p>Appendix A provides a method for calculating radiation exposures based on the design of an installation. The example provided is for illustrative purposes only and demonstrates the type of information that may be required for this assessment.</p>
<h4>4.2.3	Limiting the position and direction of the radiation source within the radiography installation</h4>  <p>Generally there are no controls where radiography exposures can take place within a radiography installation. Therefore, radiation exposures outside of a radiography installation may increase or decrease depending on the distance between the sealed source and the shielding wall(s). Furthermore, changes in the direction of the radiation beam can also have a significant impact on the potential radiation exposures outside of a radiography installation.</p>  <p>When there is variability in position or direction of the beam, the design of the radiography installation should take these into account, and should be constructed for the configuration representing the highest potential exposure to any person outside of the installation. If it is not possible to reduce the radiation exposure outside of a radiography installation due to the variations, additional controls should be put in place to provide equivalent protection. These controls could include limiting the locations within the installation where radiography operations may be carried out.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.3"></div>
<h3 id="sec4-3">4.3 Monitoring for human presence prior to exposures</h3>  <p>In general practice, the CEDO conducting the radiography examination will be the last person to exit the radiography installation before exposing the nuclear substance. This is normally sufficient to ensure that the radiography installation is unoccupied. However, the CEDO should be positioned to ensure that no person can enter the radiography installation when the nuclear substance is in the unshielded position.</p>   <p>In accordance with the regulatory requirements, the CEDO must erect barriers or place persons to prevent anyone from entering the installation when a radiography exposure is being conducted. Therefore, the CEDO will need to evaluate the risks associated with any exposure and ensure that there are sufficient measures in place to prevent access to the installation during the exposure.</p>  <p>Remote monitoring of the interior of the radiography installation should be considered to ensure that no person is inside when the exposure operator is preparing to move the sealed source from the shielded position. Consideration should also be given to providing alarm or stop btns on the interior of the radiography installation to allow a person inside to signal other persons or cancel the planned exposure.</p>  <p>In all cases, the design of the radiography installation should include the provision of fire alarm or other emergency pull stations to summon aid or alert other persons of a potential fire or other emergency situation. Consultation with the applicable fire code provisions will establish the necessity for including any necessary alarm systems.</p>
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
<h2 id="sec5">5. Construction</h2>  <p>Any changes introduced during the construction due to unforeseen issues should be documented and included in the "as-built" drawings. All changes should be evaluated to ensure that they do not compromise the level of radiation protection and safety for which the radiography installation was designed.</p>  <p>If the radiography installation is going to be constructed inside an existing building or structure, the building or structure should have the structural capacity to allow safe construction and the eventual structural load of the radiography installation. In addition, the structural capacity must be sufficient for any dynamic or other loads introduced as a consequence of operating the radiography installation (for example, cranes, lifting machinery).</p>  <p>The construction of the radiography installation must not introduce deficiencies in the designed level of radiation protection. In particular, the shielding supplied must be of the composition, quality and quantity originally specified or better.</p>  <p>The following are examples of deficiencies that could be introduced:</p>
<ul>
<li>aggressive or rapid construction methods which compromise the shielding capability of the installation by the introduction of excessive voids in poured concrete</li>
<li>hollow block walls not completely filled with mortar</li>
<li>joints in shielding are not properly filled or finished</li>
<li>lead shielding does not extend as specified in the plans</li>
<li>unsupported lead sheeting</li>
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
<div id="6"></div>
<h2 id="sec6">6. Commissioning</h2>  <p>To determine if the installation meets design specifications, commissioning tests and radiation dose rate measurements should be performed prior to its use. If the testing shows that the installation does not adequately limit dose, additional shielding, safety, and security measures should be used.</p>  <p>Measurements should be taken to verify that there are no cracks, holes or voids in the walls, floors or ceiling which can result in localized areas of higher dose rates. Measurements should also be taken to confirm that the installed shielding is adequate and installed as originally designed and that any doses from skyshine are below dose limits and ALARA.</p>  <p>All radiation testing should be carried out with nuclear substances that are of the same type and quantity which are expected to be routinely used in the installation. Values of radiation doses for locations around the radiography installation should be calculated based on the nuclear substance and the activity used for the commissioning test. A method for calculating radiation doses based on the design of the installation may be found in appendix A. These expected values should be compared to actual observed radiation dose values to determine if there are any deficiencies in the design or construction of the shielding of the installation. Particular attention should be directed to confirming that the expected values of skyshine are within the expected range and do not exceed prescribed levels. General radiation surveys should be carried out in all areas adjacent to the radiography installation to confirm that there are no unexpected radiation fields that were not anticipated during the design stage. A record of all readings should be retained.</p>  <p>Licensees are required to ensure that all radiation measurements are conducted using a gamma radiation survey meter that has been calibrated within the past 12 months. The operation of the survey meter, including a battery check, should be documented before performing any radiation surveys.</p>  <p>Notices or warning signs, containing all required information, must be posted in all areas where such signage is required in accordance with the Radiation Protection Regulations. Contact information should be reviewed on a regular basis to ensure that it is up to date and legible.</p>   <p>A comprehensive evaluation of the radiography installation should also be conducted to ensure that it has been constructed in accordance with the accepted design and operates as expected.</p>  <p>Commissioning should include testing of all mechanical, electrical and safety-related systems (such as shut-down controls, alarms and occupancy monitors) to verify that they operate as intended.</p>
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
<h2 id="sec7">7. Operation</h2>
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
<h3 id="sec7-1">7.1 Routine reviews and maintenance</h3>  <p>Once the radiography installation is operational, periodic reviews should be undertaken to ensure:</p>
<ul>
<li>building structures and shielding components have not shifted</li>
<li>separations, voids or other deficiencies have not been introduced into the shielding</li>
<li>the shielding has not been compromised or altered so as to reduce its effectiveness</li>
<li>the safety systems continue to function as designed and expected</li>
</ul>  <p>These reviews should be carried out with a frequency that is sufficient to detect any changes that could reduce the effectiveness of the radiography installation but should not be less than once per calendar year.</p>  <p>Any deficiencies noted as a result of these reviews should be documented and followed-up to make repairs or replace materials, as necessary. Records of all inspections, evaluations and the measures taken to address identified deficiencies should be retained for follow-up inspection and review.</p>  <p>The presence and legibility of any required warning or notice signs should also be routinely inspected to ensure that the information provided remains current and available to any person needing to see it. Particular attention should be applied to ensuring the readability and current status of the required contact information.</p>
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
<h3 id="sec7-2">7.2 Ongoing evaluation of the design</h3>  <p>The radiography installation should also be evaluated on an ongoing basis to determine if any of the considerations that were used in its design has changed. A review of the adequacy of the design and radiation protection measures should be conducted if there are changes to the following:</p>
<ul>
<li>nuclear substance or maximum activity of the nuclear substance to be used</li>
<li>exposure devices to be used</li>
<li>where the radiography operations are conducted within the installation</li>
<li>the occupancy levels of adjacent areas</li>
<li>workload and frequency of use</li>
<li>services, penetrations or access points (installation or removal)</li>
<li>structural components (including deterioration or degradation)</li>
<li>regulatory requirements for industrial radiography</li>
</ul>   <p>Remedial measures may be necessary, such as reducing the amount of activity of the nuclear substance being used, using an alternative nuclear substance with lower gamma energies, or scheduling more radiography operations at times when workers are not present near the installation. Relocating occupied areas at a greater distance from the installation should also be considered.</p>  <p>All corrective actions taken should be documented and the records of any changes retained for further review and inspection.</p>
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
<h2 id="appA">Appendix A: Dose Calculations</h2>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appA1"></div>
<h3 id="appA1">A.1 Five-step method</h3>  <p>The following five-step method is a possible approach for estimating doses to persons as a result of operations at a radiography installation. While licensees may choose to use another method, it demonstrates the type of information required to estimate doses to individuals occupying areas around a radiography installation.</p>
<h4>1.	Obtain architectural drawings or make an accurate, scaled and dimensioned drawing of the installation and the facility in which it&#39;s located.</h4>  <p>The drawings need to show the locations where nuclear substances will be present, and the occupied locations where persons might be expected to be exposed to radiation as a result of radiography exposures. Surrounding areas should also be considered.</p>
<h4>2.	Obtain the following information about the operation of the radiography installation:</h4>
<ul>
<li>the location(s) where radiography will be carried out</li>
<li>the number of exposures to be carried out per year, and the average time per exposure</li>
<li>the nuclear substance to be used</li>
<li>the maximum activity to be used for each exposure</li>
</ul>
<h4>3.	Identify the areas occupied and the appropriate occupancy factors for areas surrounding the radiography installation(s).</h4>  <p>Occupied areas in the immediate vicinity of the radiography installation as well as areas outside of the facility (e.g., neighbouring buildings) need to be considered. The occupancy factor (T) for each occupied location is the fraction of time an individual occupies a location while there is a radiation field present.</p>   <p>A collimator is a shielding tool that partially covers radiation source and is a useful tool that may be used to prevent or reduce dose rates at some occupied locations.</p>
<h4>4.	Estimate the radiation dose rates produced in each potentially occupied area</h4>  <p>Two basic methods are used to estimate the radiation dose rates to which a person will be exposed as a result of radiography exposures.</p>  <p>The first method is to take direct measurements of the dose rates in surrounding areas, using a sufficiently sensitive, properly calibrated radiation survey meter. This method is generally useful when evaluating an existing installation, or when making a comparative analysis for designing a new installation that is very similar in layout and design to an existing site.</p>   <p>The second method is a mathematical approach that relies on the known physical properties of the nuclear substances being used, the distances to each occupied area and the shielding properties and thickness of the building materials. This method may be useful when designing a radiography installation.</p>   <p>Commercial software is available for modeling dose rates for both primary and scatter radiation (including skyshine). Guidance on how to calculate dose rates from primary and scatter radiation is provided in the National Council on Radiation Protection and Measurements&#39; Report No. 151, <em>Structural Shielding Design and Evaluation for Megavoltage X- and Gamma-Ray Radiotherapy Facilities</em> [6].</p>   <p>The appropriate gamma ray constant combined with the appropriate half-value layer (HVL) or tenth-value layer (TVL) should be used to estimate dose rates. HVL1 is the thickness of shielding required to reduce the dose rate by one half and TVL1 is the thickness of shielding required to reduce the dose rate by one tenth.</p>   <p>If the proposed shielding thickness is greater than HVL1 (or TVL1) in table A1, then HVL2 (or TVL2) should be used for the calculation of all subsequent thicknesses of shielding required, beyond the initial values. This is due to the non-linearity of absorption of gamma radiation in the materials presented.</p>  <p>Table A1 provides the gamma ray constants for commonly used nuclear substances and the corresponding HVLs and TVLs for concrete and lead shielding.</p>
<table className="table table-striped">  <caption><strong>Table A1: Gamma ray constants (&Gamma;) and half-value layers (HVL) for concrete and lead shielding for commonly used nuclear substances</strong></caption>  <tr>
<th className="text-center" rowspan="3">Nuclear substance</th>
<th className="text-center" rowspan="3">Gamma ray constant</th>
<th colSpan="4">Half-value layer (mm)</th>
<th colSpan="4">Tenth-value layer (mm)</th>  </tr>  <tr>
<th colSpan="2">Concrete</th>
<th colSpan="2">Lead</th>
<th colSpan="2">Concrete</th>
<th colSpan="2">Lead</th>  </tr>  <tr>
<th>HVL1</th>
<th>HVL2</th>
<th>HVL1</th>
<th>HVL2</th>
<th>TVL1</th>
<th>TVL2</th>
<th>TVL1</th>
<th>TVL2</th>  </tr>  <tr>
<td className="text-center">Ir-192</td>
<td className="text-center">117</td>
<td className="text-center">119</td>
<td className="text-center">49</td>
<td className="text-center">3.8</td>
<td className="text-center">3.3</td>
<td className="text-center">225</td>
<td className="text-center">133</td>
<td className="text-center">12</td>
<td className="text-center">15</td>  </tr>  <tr>
<td className="text-center">Cs-137</td>
<td className="text-center">78</td>
<td className="text-center">121</td>
<td className="text-center">62</td>
<td className="text-center">9.4</td>
<td className="text-center">6.7</td>
<td className="text-center">255</td>
<td className="text-center">160</td>
<td className="text-center">24</td>
<td className="text-center">20</td>  </tr>  <tr>
<td className="text-center">Co-60</td>
<td className="text-center">305</td>
<td className="text-center">131</td>
<td className="text-center">81</td>
<td className="text-center">20</td>
<td className="text-center">14</td>
<td className="text-center">305</td>
<td className="text-center">211</td>
<td className="text-center">50</td>
<td className="text-center">40</td>  </tr>  <tr>
<td className="text-center">Se-75</td>
<td className="text-center">56</td>
<td className="text-center">110</td>
<td className="text-center">40</td>
<td className="text-center">1.6</td>
<td className="text-center">1.5</td>
<td className="text-center">199</td>
<td className="text-center">115</td>
<td className="text-center">5.4</td>
<td className="text-center">7.2</td>  </tr>  <tr>
<td className="text-center">Yb-169</td>
<td className="text-center">52</td>
<td className="text-center">69</td>
<td className="text-center">40</td>
<td className="text-center">0.3</td>
<td className="text-center">0.7</td>
<td className="text-center">155.3</td>
<td className="text-center">105.7</td>
<td className="text-center">2.1</td>
<td className="text-center">4.5</td>  </tr>  </table>
<p>The method used to calculate dose rates in occupied areas outside of a radiography installation depends on the thickness of shielding that is considered. Three scenarios are described below in which different equations should be used to calculate dose rate.</p>  <p><strong>Scenario 1:</strong> If the thickness of shielding is less than HVL1, the dose rate can be estimated using equation 1 for the location of interest.</p>  <p>Equation 1: R = (&Gamma; x A x 2<sup>-t/HLV1</sup>) / d<sup>2</sup></p>
<table className="table">  <tr>
<th>Where:</th>
<th>&nbsp;</th>
<th>&nbsp;</th>  </tr>  <tr>
<td>R</td>
<td>is the dose rate</td>
<td>(&micro;Sv/h)</td>  </tr>  <tr>
<td>&Gamma;</td>
<td>is the gamma ray constant for the source at 1 m</td>
<td>(&micro;Sv/h per GBq)</td>  </tr>  <tr>
<td>A</td>
<td>is the activity of nuclear substance</td>
<td>(GBq)</td>  </tr>  <tr>
<td>d</td>
<td>is the distance between the nuclear substance and the location</td>
<td>(m)</td>  </tr>  <tr>
<td>t</td>
<td>is the thickness of shielding, in the direction of travel*, in any shielding wall between the nuclear substance and the location</td>
<td>(mm)</td>  </tr>  <tr>
<td>HLV1</td>
<td>is the thickness of shielding to reduce the unshielded dose rate to one half of the original</td>
<td>(mm)</td>  </tr>  </table>
<p>*&nbsp;Note that if the radiation is penetrating a shielding wall at an oblique angle, the actual thickness of the shielding will be greater than the thickness of the wall.</p>  <br />  <p><strong>Scenario 2:</strong> If the thickness of shielding is more than HVL1 but less than TVL1, the dose rate can be estimated using equation 2.</p>  <p>Equation 2: R = (&Gamma; x A x 0.5 x 2<sup>-(t-HLV1)/HLV2</sup>) / d<sup>2</sup></p>
<table className="table">  <tr>
<th>Where:</th>
<th>&nbsp;</th>
<th>&nbsp;</th>  </tr>  <tr>
<td>R</td>
<td>is the dose rate</td>
<td>(&micro;Sv/h)</td>  </tr>  <tr>
<td>&Gamma;</td>
<td>is the gamma ray constant for the source at 1 m</td>
<td>(&micro;Sv/h per GBq)</td>  </tr>  <tr>
<td>A</td>
<td>is the activity of nuclear substance</td>
<td>(GBq)</td>  </tr>  <tr>
<td>d</td>
<td>is the distance between the nuclear substance and the location</td>
<td>(m)</td>  </tr>  <tr>
<td>t</td>
<td>is the thickness of shielding, in the direction of travel*, in any shielding wall between the nuclear substance and the location</td>
<td>(mm)</td>  </tr>  <tr>
<td>HLV1</td>
<td>is the thickness of shielding to reduce the unshielded dose rate to one half of the original</td>
<td>(mm)</td>  </tr>  <tr>
<td>HLV2</td>
<td>is the thickness of shielding, in addition to the first HVL, to reduce the dose rate by another one half</td>
<td>(mm)</td>  </tr>  </table>
<br />
<p><strong>Scenario 3:</strong> If the thickness of shielding is greater than TVL1, the dose rate can be estimated using equation 3.</p>  <p>Equation 3: R = (&Gamma; x A x 0.1 x 10<sup>-(t-HLV1)/HLV2</sup>) / d<sup>2</sup></p>
<table className="table">  <tr>
<th>Where:</th>
<th>&nbsp;</th>
<th>&nbsp;</th>  </tr>  <tr>
<td>R</td>
<td>is the dose rate</td>
<td>(&micro;Sv/h)</td>  </tr>  <tr>
<td>&Gamma;</td>
<td>is the gamma ray constant for the source at 1 m</td>
<td>(&micro;Sv/h per GBq)</td>  </tr>  <tr>
<td>A</td>
<td>is the activity of nuclear substance</td>
<td>(GBq)</td>  </tr>  <tr>
<td>d</td>
<td>is the distance between the nuclear substance and the location</td>
<td>(m)</td>  </tr>  <tr>
<td>t</td>
<td>is the thickness of shielding, in the direction of travel*, in any shielding wall between the nuclear substance and the location</td>
<td>(mm)</td>  </tr>  <tr>
<td>HLV1</td>
<td>is the thickness of shielding to reduce the unshielded dose rate to one tenth of the original</td>
<td>(mm)</td>  </tr>  <tr>
<td>HLV2</td>
<td>is the thickness of shielding, in addition to the first HVL, to reduce the dose rate by another one tenth</td>
<td>(mm)</td>  </tr>  </table>
<h4>5. Extrapolate the calculated dose rates at each location to annual doses for the persons who may occupy each area.</h4>   <p>Calculated annual dose estimates should be based on the projected installation workload (immediate and future potential) and occupancy factors for occupied areas surrounding the radiography installation. The annual dose to an exposed person can be calculated using equation 4.</p>  <p>Equation 4: D = N x T x R x S</p>
<table className="table">  <tr>
<th>Where:</th>
<th>&nbsp;</th>
<th>&nbsp;</th>  </tr>  <tr>
<td>D</td>
<td>is the dose</td>
<td>(&micro;Sv)</td>  </tr>  <tr>
<td>N</td>
<td>is the maximum number of radiography exposure carried out per year</td>
<td>&nbsp;</td>  </tr>  <tr>
<td>T</td>
<td>is the occupancy factor for the exposed person and occupied location</td>
<td>0&nbsp;&le;&nbsp;T&nbsp;&le;&nbsp;1</td>  </tr>  <tr>
<td>R</td>
<td>is the dose rate at the specific location</td>
<td>(&micro;Sv/h)</td>  </tr>  <tr>
<td>S</td>
<td>is a conservative estimate for the average duration of radiography exposures</td>
<td>(h)</td>  </tr>  </table>
<p>Skyshine dose estimates should be made by calculation or direct measurement before routine radiography exposures are carried out. If it can be demonstrated that annual doses to workers and members of the public (including skyshine) are below dose limits and ALARA, it can be concluded that the design is adequate for protecting persons occupying areas surrounding the radiography installation.</p>  <p>The CNSC may consider that an ALARA assessment is not required when individual occupational doses for nuclear energy workers (NEWs) are unlikely to exceed 1 mSv per year, when the dose to individual members of the public is unlikely to exceed 50 &micro;Sv per year, and when annual collective dose (both occupational and public) is unlikely to exceed 1 person-Sv (as recommended in CNSC document G-129 rev 1, <em>Keeping Radiation Doses "As Low as Reasonably Achievable (ALARA)"</em> [1]).</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appA2"></div>
<h3 id="appA2">A2. Example of a dose calculation</h3>  <p>The following example demonstrates the use of the five-step method for estimating radiation doses to person for a facility with one radiography installation. This example considers primary radiation only and does not include skyshine.</p>  <h4>1.	Drawing of the installation, the facility in which it&#39;s located, and surrounding areas</h4>
<p><strong>Figure A1: The layout of the building showing the planned location of the radiography installation</strong></p>  <div className="col-md-6 module-poster">  <img src="/images/regulatory-documents/regdoc-2-5-5/figA1-layout.png" alt="The layout of the building showing the planned location of the radiography installation" />  </div>  <div className="clear"></div>
<h4>2. Radiography installation information</h4>  <p>The following information applies to this radiography installation:</p>
<ul>
<li>locations where the nuclear substances may be present is identified in Figure A1</li>
<li>at this installation, a maximum of 20 radiography exposures per week are planned and operations will only take place during normal business hours (i.e., a maximum of 1040 exposures per year)</li>
<li>the nuclear substance used for radiography at this installation is cobalt-60</li>
<li>activity of the source is 4.07 TBq (110 Ci)</li>
</ul>
<h4>3. Identify the occupancy and the appropriate occupancy factor</h4>  <p>Occupied locations were identified and occupancy factors were conservatively chosen. Information is summarized in Table A2.</p>
<table className="table table-striped">  <caption className="text-left"><strong>Table A2: Occupied locations and occupancy factors</strong></caption>  <tr>
<th className="text-center">Location</th>
<th className="text-center">T</th>
<th className="text-center">Notes</th>  </tr>  <tr>
<td>CEDO&#39;s position</td>
<td>1</td>
<td>There will be two full time workers that can perform radiography at this installation. The exact fraction of radiography exposures carried out by each exposure device operator is uncertain; as such, it is conservatively assumed that all of the exposures are carried out by one CEDO.</td>  </tr>  <tr>
<td>Receptionist desk</td>
<td>1</td>
<td>It is conservatively assumed that the receptionist will be occupying the receptionist desk for all radiography exposures. The receptionist is not a NEW.</td>  </tr>  <tr>
<td>Break room</td>
<td>1/4</td>
<td>&nbsp;</td>  </tr>  <tr>
<td>Washroom</td>
<td>1/16</td>
<td>&nbsp;</td>  </tr>  <tr>
<td>Office space</td>
<td>1</td>
<td>The location in the office space closest to the source is assumed to be occupied by worker that is not a NEW.</td>  </tr>  <tr>
<td>Parking lot</td>
<td>1/8</td>
<td>&nbsp;</td>  </tr>  <tr>
<td>North fence</td>
<td>1</td>
<td>Assume worst case occupancy to be conservative.</td>  </tr>  <tr>
<td>Loading area</td>
<td>1/8</td>
<td>Assume workers at the adjacent business will be parking their cars and smoking in the parking lot.</td>  </tr>  <tr>
<td>Roof</td>
<td>N/A</td>
<td>Access is restricted during radiography exposures.</td>  </tr>  <tr>
<td>Basement</td>
<td>N/A</td>
<td>There is no basement in the building.</td>  </tr>  </table>
<h4>4. Estimate the radiation dose rates produced in each potentially occupied area</h4>  <p>Assuming a concrete wall thickness of 1 m for all walls of the radiography installation, the shielding thickness is greater than the TVL1 of 305 mm. Therefore, equation 3 should be used to calculate the dose rate at each location (not including skyshine). The calculated dose rates using this method are provided in Table A3. Since it is possible for radiography to be carried out with the source in different spots within the radiography installation, the most conservative cases were assumed when determining the distance between the source and location. For example, for the distance between the source and the office space, it was assumed that radiography exposures would take place with the source position in the location of the radiography installation closest to the office space.</p>
<p><strong>Table A3: Calculated dose rates for the most occupied locations around the radiography installation (not including skyshine)</strong></p>  <p>Gamma ray dose constant at 1 m (&Gamma;) = 305 &micro;Sv/h per GBq</p>  <p>Dose rate (R) = (&Gamma; x A x 0.1 x 10<sup>-(t-TVL1)/TVL2)</sup> / d<sup>2</sup></p>
<table className="table table-striped">  <tr>
<th className="text-center">Location</th>
<th className="text-center">&Gamma;<br />
(&micro;Sv/h per GBq)</th>
<th className="text-center">A<br />
(GBq)</th>
<th className="text-center">t<br />
(mm)</th>
<th className="text-center">TVL1<br />
(mm)</th>
<th className="text-center">TVL2<br />
(mm)</th>
<th className="text-center">d<br />
(m<sup>2</sup>)</th>
<th>&nbsp;</th>
<th className="text-center">R<br />
(&micro;Sv/h)</th>  </tr>  <tr>
<td>CEDO&#39;s position</td>
<td className="text-center">305</td>
<td className="text-center">4070</td>
<td className="text-center">1000</td>
<td className="text-center">305</td>
<td className="text-center">211</td>
<td className="text-center">2.2</td>
<td className="text-center">=</td>
<td className="text-center">13</td>  </tr>  <tr>
<td>Receptionist desk</td>
<td className="text-center">305</td>
<td className="text-center">4070</td>
<td className="text-center">1000</td>
<td className="text-center">305</td>
<td className="text-center">211</td>
<td className="text-center">11.5</td>
<td className="text-center">=</td>
<td className="text-center">0.48</td>  </tr>  <tr>
<td>Break room</td>
<td className="text-center">305</td>
<td className="text-center">4070</td>
<td className="text-center">1000</td>
<td className="text-center">305</td>
<td className="text-center">211</td>
<td className="text-center">5.7</td>
<td className="text-center">=</td>
<td className="text-center">1.9</td>  </tr>  <tr>
<td>Washroom</td>
<td className="text-center">305</td>
<td className="text-center">4070</td>
<td className="text-center">1000</td>
<td className="text-center">305</td>
<td className="text-center">211</td>
<td className="text-center">4.5</td>
<td className="text-center">=</td>
<td className="text-center">3.1</td>  </tr>  <tr>
<td>Office space</td>
<td className="text-center">305</td>
<td className="text-center">4070</td>
<td className="text-center">1000</td>
<td className="text-center">305</td>
<td className="text-center">211</td>
<td className="text-center">5.5</td>
<td className="text-center">=</td>
<td className="text-center">2.1</td>  </tr>  <tr>
<td>Parking lot</td>
<td className="text-center">305</td>
<td className="text-center">4070</td>
<td className="text-center">1000</td>
<td className="text-center">305</td>
<td className="text-center">211</td>
<td className="text-center">12.5</td>
<td className="text-center">=</td>
<td className="text-center">0.40</td>  </tr>  <tr>
<td>North fence</td>
<td className="text-center">305</td>
<td className="text-center">4070</td>
<td className="text-center">1000</td>
<td className="text-center">305</td>
<td className="text-center">211</td>
<td className="text-center">11</td>
<td className="text-center">=</td>
<td className="text-center">0.52</td>  </tr>  <tr>
<td>Loading area</td>
<td className="text-center">305</td>
<td className="text-center">4070</td>
<td className="text-center">1000</td>
<td className="text-center">305</td>
<td className="text-center">211</td>
<td className="text-center">12.5</td>
<td className="text-center">=</td>
<td className="text-center">0.40</td>  </tr>  </table>
<h4>5. Extrapolate dose rates to annual doses for the persons who may occupy each area</h4>  <p>The projected workload at this radiography installation is a maximum of 1040 exposures per year (i.e., 20 exposures per week). It is assumed that exposures are not collimated and will take three minutes each (i.e., 0.05 h). Using equation 2 the estimated annual doses to individuals occupying each location of interest are provided in Table A.4.</p>
<table className="table table-striped">  <caption className="text-left"><strong>Table A4: Calculated annual dose at occupied locations around the radiography installation (not including skyshine), where dose (D) = N x T x R x S</strong></caption>  <tr>
<th className="text-center">Location</th>
<th className="text-center">N</th>
<th className="text-center">T</th>
<th className="text-center">R (&micro;Sv/h)</th>
<th className="text-center">S (h)</th>
<th>&nbsp;</th>
<th className="text-center">D (&micro;Sv)</th>  </tr>  <tr>
<td>CEDO&#39;s position</td>
<td className="text-center">1040</td>
<td className="text-center">1</td>
<td className="text-center">13.0</td>
<td className="text-center">0.05</td>
<td className="text-center">=</td>
<td className="text-center">680</td>  </tr>  <tr>
<td>Receptionist desk</td>
<td className="text-center">1040</td>
<td className="text-center">1</td>
<td className="text-center">0.5</td>
<td className="text-center">0.05</td>
<td className="text-center">=</td>
<td className="text-center">25</td>  </tr>  <tr>
<td>Break room</td>
<td className="text-center">1040</td>
<td className="text-center">1/4</td>
<td className="text-center">1.9</td>
<td className="text-center">0.05</td>
<td className="text-center">=</td>
<td className="text-center">25</td>  </tr>  <tr>
<td>Washroom</td>
<td className="text-center">1040</td>
<td className="text-center">1/16</td>
<td className="text-center">3.1</td>
<td className="text-center">0.05</td>
<td className="text-center">=</td>
<td className="text-center">10</td>  </tr>  <tr>
<td>Office space</td>
<td className="text-center">1040</td>
<td className="text-center">1</td>
<td className="text-center">2.1</td>
<td className="text-center">0.05</td>
<td className="text-center">=</td>
<td className="text-center">110</td>  </tr>  <tr>
<td>Parking lot</td>
<td className="text-center">1040</td>
<td className="text-center">1/8</td>
<td className="text-center">0.4</td>
<td className="text-center">0.05</td>
<td className="text-center">=</td>
<td className="text-center">2.6</td>  </tr>  <tr>
<td>North fence</td>
<td className="text-center">1040</td>
<td className="text-center">1</td>
<td className="text-center">0.5</td>
<td className="text-center">0.05</td>
<td className="text-center">=</td>
<td className="text-center">27</td>  </tr>  <tr>
<td>Loading area</td>
<td className="text-center">1040</td>
<td className="text-center">1/8</td>
<td className="text-center">0.8</td>
<td className="text-center">0.05</td>
<td className="text-center">=</td>
<td className="text-center">2.6</td>  </tr>  </table>
<p>The annual dose estimate for the NEW (i.e., the CEDO) is well below the annual dose limit. The annual dose estimates to persons who are not NEWs, occupying the receptionist desk, office space and north fence, are also below the dose limit of 1 mSv/year prescribed in subsection 13(1) of the <em>Radiation Protection Regulations</em> and the dose limit 0.5 mSv/year prescribed in the subsection 30(6) of the <em>Nuclear Substances and Radiation Devices Regulations</em>. Therefore, no additional shielding is required to keep doses below dose limits.</p>  <p>In addition, the break room, washroom, parking lot, north fence, and loading area may be occupied by both NEWs and non-NEWs and annual dose estimates at these locations should be added to the doses calculated for NEWs and non-NEWs. The estimated annual dose to the NEW, including the annual dose from occupying the break room, washroom, parking lot, north fence, and loading area, is still well below dose limits. The estimated annual dose to the most exposed non-NEW (i.e., the office space worker), including the annual dose from occupying the break room, washroom, parking lot, north fence, and loading area, is also below the dose limits. Therefore, concrete shielding of 1 m is adequate to keep the estimated dose to the office worker below the dose limits. In addition to keeping doses below the dose limits, doses shall also be ALARA. Skyshine dose estimates should be made by calculation or direct measurement before radiography exposures are carried out. If it can be demonstrated that annual doses to workers and members of the public (including skyshine) are below dose limits and ALARA, it can be concluded that the design is adequate for protecting persons occupying areas surrounding the radiography installation.</p>
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
<h2 id="gloss">Glossary</h2>  <dl>
<dt><strong>as low as reasonably achievable (ALARA)</strong> <em>(niveau le plus bas qu&#39;il soit raisonnablement possible d&#39;atteindre [ALARA])</em></dt>
<dd>A principle of radiation protection that holds that exposures to radiation are kept as low as reasonably achievable, social and economic factors taken into account. Section 4 of the <em>Radiation Protection Regulations</em> stipulates licensee requirements with respect to ALARA.</dd>
<dt><strong>beam limiter</strong> <em>(obturateur de faisceau)</em></dt>
<dd>A radiation-shielding device, located at the working position of an exposure device, which is designed to reduce the radiation dose rate in directions other than the direction intended for use. The beam limiter may be designed to be used in conjunction with an exposure head or may incorporate an exposure head as an integral part of the device. Also called collimator.</dd>
<dt><strong>becquerel (Bq</strong>) <em>(becquerel [Bq])</em></dt>
<dd>The International System of Units (SI) unit of radioactivity. One becquerel (Bq) is the activity of a quantity of radioactive material in which one nucleus decays per second. In Canada, the Bq is used instead of the non-SI unit curie (Ci). 1 Bq = 27 &micro;Ci (2.7 x 10<sup>11</sup> Ci) and 1 Ci = 3.7 x 10<sup>10</sup> Bq.</dd>
<dt><strong>certified exposure device operator (CEDO)</strong> <em>(opérateur d&#39;appareil d&#39;exposition accrédité)</em></dt>
<dd>A person who has the qualifications to safely operate industrial gamma radiography exposure devices anywhere in Canada and who is certified as such by the CNSC.</dd>
<dt><strong>collimator</strong> <em>(collimateur)</em></dt>
<dd>See beam limiter.</dd>
<dt><strong>exposure</strong> <em>(exposition)</em></dt>
<dd>See irradiation.</dd>
<dt><strong>exposure device</strong> <em>(appareil d&#39;exposition)</em></dt>
<dd>A radiation device that is designed for carrying out gamma radiography, and includes any accessory to the device such as a sealed source assembly, a drive mechanism, a sealed source assembly guide tube and an exposure head. (Sources: <a href="http://laws-lois.justice.gc.ca/eng/regulations/SOR-2000-207/"><em>Nuclear Substances and Radiation Devices Regulations</em></a>; <a href="http://laws-lois.justice.gc.ca/eng/regulations/SOR-2015-145/"><em>Packaging and Transport of Nuclear Substances Regulations, 2015</em></a>)</dd>
<dt><strong>gamma radiation</strong> <em>(rayonnement gamma)</em></dt>
<dd>Penetrating electromagnetic radiation emitted from an atom&#39;s nucleus. Also called gamma rays.</dd>
<dt><strong>gamma ray constant</strong></dt>
<dd>The dose rate at a specific distance from a given amount of a photon-emitting radionuclide. It is used to predict radiation exposure in terms of equivalent dose per unit of activity per unit distance.</dd>
<dt><strong>gigabecquerel (GBq)</strong></dt>
<dd>One billion (10<sup>9</sup>) becquerels.</dd>
<dt><strong>half-value layer (HVL)</strong> <em>(couche de demi-atténuation [CDA])</em></dt>
<dd>The thickness of a shield or absorber (such as tungsten or lead) that reduces the amount of radiation to one half of its initial intensity. Also called half-value thickness.</dd>
<dt><strong>industrial radiography</strong> <em>(gammagraphie industrielle)</em></dt>
<dd>The use of certified exposure devices to conduct the non-destructive examination of the structure of welds, castings and building components. Also called gamma radiography.</dd>
<dt><strong>irradiation</strong> <em>(irradiation)</em></dt>
<dd>Exposure to radiation. Note: "exposure" is commonly used to describe radiation doses to people while "irradiation" is more often used for radiation doses to food or industrial objects.</dd>
<dt><strong>maze entrance</strong></dt>
<dd>An indirect path from the entrance of a radiography installation to the exposure area. Using a maze entrance ensures that there is at least one shielded wall between the exposure operator and the exposure area.</dd>
<dt><strong>microsievert (&micro;Sv)</strong> <em>(microsievert [&micro;Sv])</em></dt>
<dd>One one-millionth of a sievert.</dd>
<dt><strong>nuclear energy worker (NEW)</strong> <em>(travailleur du secteur nucléaire [TSN])</em></dt>
<dd>A person who is required, in the course of the person&#39;s business or occupation in connection with a nuclear substance or nuclear facility, to perform duties in such circumstances that there is a reasonable probability that the person may receive a dose of radiation that is greater than the prescribed limit for the general public. (Source: <em>Nuclear Safety and Control Act</em>)</dd>
<dt><strong>occupancy factor</strong> <em>(facteur d&#39;occupation)</em></dt>
<dd>The fraction of total time during which a radiation field is present at a particular location, for which any one individual would reasonably be expected to be present at that location. This factor (&le;1) is multiplied by the total radiation dose at that location, to derive the maximum personal dose any single person would be expected to receive.</dd>
<dt><strong>operate</strong> <em>(faire fonctionner)</em></dt>
<dd>Includes, in respect of an exposure device, coupling the drive mechanism to the exposure device, uncoupling the drive mechanism from the exposure device, locking or unlocking the exposure device, and all activities involving the device that take place while the sealed source assembly is not locked inside the device in the fully shielded position. (Source: <a href="http://laws-lois.justice.gc.ca/eng/regulations/SOR-2000-207/"><em>Nuclear Substances and Radiation Devices Regulations</em></a>)</dd>
<dt><strong>sievert (Sv)</strong> <em>(sievert [Sv])</em></dt>
<dd>The International System of Units (SI) unit of equivalent dose and effective dose, equal to 1 joule/kilogram.</dd>
<dt><strong>radiography installation</strong></dt>
<dd>A shielded enclosure, cell or vault where radiography is performed.</dd>
<dt><strong>scatter radiation</strong> <em>(rayonnement diffusé)</em></dt>
<dd>Radiation that, during passage through a substance, has been changed in direction. It may also have been modified by a decrease in energy. Also called scattered radiation.</dd>
<dt><strong>skyshine</strong></dt>
<dd>Scattered radiation generated by radiation reflecting off air particles; it commonly occurs above a radiography installation with inadequate or no roof shielding.</dd>
<dt><strong>tenth-value layer (TVL)</strong> <em>(couche d&#39;atténuation au dixième [CAD])</em></dt>
<dd>The thickness of a shield or an absorber that reduces the radiation level to 10 percent of its initial level.</dd>  </dl>
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
<li>Canadian Nuclear Safety Commission (CNSC), G-129 rev.1, <em>Keeping Radiation Exposures and Doses "As Low as Reasonably Achievable (ALARA)"</em>, Ottawa, 2004.</li>
<li>International Commission on Radiological Protection, ICRP Publication 116, Ann. ICRP 40(2-5), <em>Conversion Coefficients for Radiological Protection Quantities for External Radiation Exposures</em>, Thousand Oaks, California, 2010.</li>
<li>Nucleonica GmbH, <em>Joint Evaluated Fission and Fusion File</em> (JEFF) 3.1, Nucleonica Nuclear Science Portal (<a href="http://www.nucleonica.com/">nucleonica.com</a>), Version 3.0.49, Karlsruhe, Germany, 2014</li>
<li>CNSC, REGDOC-2.12.3, <em>Security of Nuclear Substances: Sealed Sources</em>, Ottawa, 2013.</li>
<li>American National Standards Institute, ANSI N43.3-2008, <em>Installations Using Non-Medical X-Ray and Sealed Gamma Ray Sources, Energies Up To 10 MeV</em>, Washington, D.C., 2008.</li>
<li>National Council on Radiation Protection and Measurements, Report No. 151, <em>Structural Shielding Design and Evaluation for Megavoltage X- and Gamma-Ray Radiotherapy Facilities</em>, Bethesda, Maryland, 2005.</li>  </ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of Page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="addInfo"></div>
<h2 id="addInfo">Additional Information</h2>  <p>The following documents contain additional information that may be of interest to persons involved in the design of industrial radiography installations in Canada.</p>  <ol>
<li>Canadian Nuclear Safety Commission, <em>Working Safely with Industrial Radiography</em>, Ottawa, 2014.</li>
<li>International Atomic Energy Agency, IAEA Safety Standards, Specific Safety Guide No. SSG-11, <em>Radiation Safety in Industrial Radiography</em>, Vienna, 2011.</li>
<li>United States Nuclear Regulatory Commission, NUREG 1556, <em>Consolidated Guidance about Materials Licensees &ndash; Volume 2, Program Specific Guidance about Industrial Radiography Licenses</em>, Washington, 1998.</li>
<li>ANSI, N43.10-2001, <em>Safe Design and Use of Panoramic, Wet Source Storage Gamma Irradiators (Category IV) and Dry Source Storage Gamma Irradiators (Category II)</em>, 2001.</li>
<li>National Council on Radiation Protection and Measurements (NCRP), Report No. 49, <em>Structural Shielding Design and Evaluation for Medical Use of X Rays and Gamma Rays of Energies Up To 10 MeV</em>, Bethesda, Maryland, 1976.</li>
<li>NCRP, Report No. 147, <em>Structural Shielding Design for Medical X-Ray Facilities</em>, Bethesda, Maryland, 2004.</li>
<li>Johnson, Thomas E. and Brian K. Birky, <em>Health Physics and Radiological Health</em>, 4th edition, Baltimore, Maryland, 2012.</li>
<li>Oak Ridge National Laboratory, ORNL/RSIC-45, <em>Specific Gamma-Ray Dose Constants for Nuclides Important to Dosimetry and Radiological Assessment</em>, Oak Ridge National Laboratory, Oak Ridge, Tennessee, 1982.</li>
<li>American Nuclear Society, <em>Radiation Shielding</em>, Richard E. Faw, J. Shultis, La Grange Park, Illinois, 2000.</li>  </ol>
<div className="wb-fnote" role="note">
<section>
<h2 id="endnotes" className="mrgn-tp-md">Footnotes</h2>
<dl>
<dt>Footnote 1</dt>
<dd id="fnb1">
<p>For an example of an inverse square law calculator, see <a href="http://www.radprocalculator.com/InverseSquare.aspx">radprocalculator.com/InverseSquare.aspx</a></p>
<p className="fn-rtn"><a href="#fnb1-ref"><span className="wb-inv">Return to footnote </span>1<span className="wb-inv"> referrer</span></a></p>
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