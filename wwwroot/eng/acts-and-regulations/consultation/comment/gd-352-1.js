import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "en",
                pageTitle: "Archived Web Page - RD/GD-352: Design, Testing and Performance of Exposure Devices", 
                dateModified: "2011-02-26",
                langToggleUrl: "/fra/acts-and-regulations/consultation/comment/gd-352-1"
        
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
<h2 className="reportHeading2">Preface</h2>  <p>Industrial radiography is an activity that is regulated mainly by the <em>Nuclear Substances and Radiation Devices Regulations</em> (NSRD Regulations). Industrial radiography is a non-destructive testing method that uses high activity sealed radioactive sources to examine the structure of welds, castings and building components, in order to identify flaws and errors, or to ensure that work in an area will not impact hidden existing systems such as pipes and electrical wires. The advantages of using an exposure device for non-destructive testing are that it is highly portable, requires no external power sources, and can be used in a variety of field settings.</p>  <p>The widespread use of sealed radioactive sources, along with their potential to immediately deliver high doses of radiation, means that industrial radiography is recognized by the Canadian Nuclear Safety Commission and the international community as a high risk activity. </p>  <p>The NSRD Regulations require that exposure devices, which include related accessories and any other radiation device, be certified by the CNSC before they can be used in Canada. This certification is not to be construed as a licence for use or servicing. The equipment used for industrial radiography must be certified by the CNSC before it can be licensed by the CNSC for use in Canada.</p>  <p>This document provides guidance in the design, testing and performance of exposure devices, in order to apply for the certification of the radiation device under section 12 of the NSRD Regulations. Persons applying for certification of such devices must thoroughly demonstrate that the exposure device and related accessories are designed to operate in a safe manner. </p>  <p>This document does not deal with the labelling or transport of the exposure devices, or the certification of exposure device operators and their obligations when using exposure devices. Labelling and signage requirements for exposure devices and source holders are set out in the <em>Radiation Protection Regulations</em> and the NSRD Regulations. Transport requirements are set out in the <em>Packaging and Transport of Nuclear Substances Regulations</em>. These regulations require that some exposure devices also be certified as Type B(U) transport packages. Certification of exposure device operators and their obligations when operating the device are set out in the NSRD Regulations.</p>  <p>RD/GD-352 largely refers to the established International Organization for Standardization (ISO) standard, <em>Radiation protection &#8211; Apparatus for industrial gamma radiography &#8211; Specifications for performance, design and tests</em>, ISO 3999:2004 (E) [<a href="#R1">1</a>].</p>  <p>Nothing contained in this document is to be construed as relieving any applicant from the requirements of any pertinent regulations. It is the applicant&#8217;s responsibility to identify and comply with all applicable legislation and standards.</p>
<a name="#RDsection[2]#"></a>
<div className="IndentLeft10">
<h2 className="reportHeading2">Table of Contents</h2>
<p><a href="#P75_5057"><strong>1.0 Introduction</strong></a></p>  </div>  <div className="IndentLeft20">
<p><a href="#P76_5073">1.1 Purpose</a></p>
<p><a href="#P78_5256">1.2 Scope</a></p>
<p><a href="#P81_6259">1.3 Relevant regulations</a></p>
<p><a href="#P94_7278">1.4 National and international standards</a></p>  </div>  <div className="IndentLeft10">
<p><a href="#P97_7927"><strong>2.0 Application Review Criteria</strong></a></p>  </div>  <div className="IndentLeft20">
<p><a href="#P99_8183">2.1 Explanation of terms</a></p>
<p><a href="#P113_9369">2.2 Baseline specifications in the ISO standard</a></p>
<p><a href="#P115_9905">2.3 Changes to ISO standard requirements</a></p>  </div>  <div className="IndentLeft30">
<p><a href="#P117_10051">2.3.1 General design</a></p>
<p><a href="#P119_10344">2.3.2 Sealed sources</a></p>
<p><a href="#P121_10566">2.3.3 Safety devices: Operation of the automatic securing mechanism</a></p>
<p><a href="#P124_11249">2.3.4 Remote control security</a></p>
<p><a href="#P127_11643">2.3.5 Resistance to normal conditions of service</a></p>
<p><a href="#P133_12613">2.3.6 Vibration-resistance test</a></p>
<p><a href="#P135_12800">2.3.7 Labelling</a></p>
<p><a href="#P137_13245">2.3.8 Accompanying documents: Instructions for use</a></p>  </div>  <div className="IndentLeft20">
<p><a href="#P139_13571">2.4 Specifications not addressed in the ISO standard</a></p>  </div>  <div className="IndentLeft30">
<p><a href="#P141_13689">2.4.1 Source changer</a></p>
<p><a href="#P143_14016">2.4.2 Projection sheath</a></p>  </div>  <div className="IndentLeft20">
<p><a href="#P145_14330">2.5 Use of non-original accessory equipment</a></p>  </div>  <div className="IndentLeft10">
<p><a href="#P151_15169"><strong>3.0 Certification of an Exposure Device Design</strong></a></p>
<p><a href="#P156_15501"><strong>Glossary</strong></a></p>
<p><a href="#P210_19975"><strong>References</strong></a></p>
<p><a href="#P220_21045"><strong>Relevant Publications</strong></a></p>  </div>
<a name="1.0"></a>
<h2 className="reportHeading2"><a name="P75_5057" id="P75_5057"></a>1.0 Introduction</h2>
<a name="1.1"></a>
<h3 className="reportHeading3"><a name="P76_5073" id="P76_5073"></a>1.1 Purpose</h3>  <p>This document provides guidance for the design, testing and performance of exposure devices containing radioactive sealed sources,<em> </em>and related accessories to those devices.</p>
<a name="1.2"></a>
<h3 className="reportHeading3"><a name="P78_5256" id="P78_5256"></a>1.2 Scope</h3>  <p>This document covers design, testing and performance specifications for the complete exposure device system, including the remote-control system, the exposure device, the projection sheath and the source changer. The use of non-original manufacturer accessories is also addressed.</p>  <p>This document does not deal with the labelling or transport of the exposure devices, or the certification of exposure device operators and their obligations when using exposure devices. Labelling requirements for exposure devices and source holders are set out in the <em>Radiation Protection Regulations</em> and the <em>Nuclear Substances and Radiation Devices Regulations</em> (NSRD Regulations). Transport requirements are set out in the <em>Packaging and Transport of Nuclear Substances Regulations</em>. These regulations require that some exposure devices also be certified as Type B(U) transport packages<em>. </em>Certification of exposure device operators and their obligations when operating the device are set out in the NSRD Regulations.</p>
<a name="1.3"></a>
<h3 className="reportHeading3"><a name="P81_6259" id="P81_6259"></a>1.3 Relevant regulations </h3>  <p>The NSRD Regulations relevant to this document include:</p>  <p>1. Section 1, which defines the terms exposure device, radiation device, sealed source, and sealed source assembly; </p>  <p>2. Subsections 11(1) and 11(2), which state:</p>  <blockquote>
<p>&#8220;(1) No person shall use a radiation device unless</p>
<blockquote>
<p>(<em>a</em>) it is a certified model; or</p>
<p>(<em>b</em>) it is used in accordance with a licence that authorizes its use for development purposes.</p>
</blockquote>
<p>(2) No person shall transfer a radiation device for use within Canada unless it is a certified model.&#8221;</p>  </blockquote>  <p>3. Subsection 12(1), which lists the information required in an application before certification of an exposure device may be granted; </p>  <p>4. Subsection 12(2), which states &#8220;The Commission or the designated officer may request any other information that is necessary...;&#8221; and</p>  <p>5. Section 18, which outlines leak test requirements.</p>  <p>The <em>Radiation Protection Regulations</em> relevant to this document include:</p>  <p>1. Subsection 20(1), which outlines the labelling requirements of the exposure container and device.</p>
<a name="1.4"></a>
<h3 className="reportHeading3"><a name="P94_7278" id="P94_7278"></a>1.4 National and international standards</h3>  <p>The review of an application for certification of an exposure device is based on the International Organization for Standardization (ISO) standard ISO 3999:2004, <em>Radiation protection &#8211; Apparatus for industrial gamma radiography &#8211; Specifications for performance, design and tests</em> [<a href="#R1">1</a>]. Throughout this document, all references to the ISO standard mean ISO 3999:2004.</p>  <p>Nothing contained in this document is to be construed as relieving any applicant from the requirements of any pertinent regulations. It is the applicant&#8217;s responsibility to identify and comply with all applicable legislation and standards.</p>
<a name="2.0"></a>
<h2 className="reportHeading2"><a name="P97_7927" id="P97_7927"></a>2.0 Application Review Criteria</h2>  <p>In order to assess an application for the certification of an exposure device design, this section describes the type of information that the CNSC requires, which is different from the requirements outlined in ISO 3999:2004. </p>
<a name="2.1"></a>
<h3 className="reportHeading3"><a name="P99_8183" id="P99_8183"></a>2.1 Explanation of terms</h3>  <p>The following terms apply throughout this document:</p>  <ol>
<li> ISO standard means the International Standard ISO 3999:2004;</li>
<li> Where applicable, the common industry term is given (in brackets);</li>
<li> The term &#8220;apparatus for industrial gamma radiography&#8221; is described in the above ISO standard. However, in this document it is replaced by the term &#8220;exposure device,&#8221; as defined in the NSRD Regulations;</li>
<li> An accessory to an exposure device is considered to be any equipment used in conjunction with an exposure container and that drives, guides, or comes into contact with the sealed source assembly. </li>  </ol>  <blockquote>
<p>Accessories to the device include: </p>  </blockquote>  <ol>
<ol className="lower-alpha">
<li>Sealed source assembly;</li>
<li>Remote control &#8211; which includes the control cable sheath, control cable connector, control adaptor and the control mechanism;</li>
<li> Projection sheath (guide tube);</li>
<li> Exposure head (source stop);</li>
<li>Beam limiter (collimator) - when designed as an integral part of an exposure head;<em><br />
Note:</em> Beam limiters designed to be secured over the exposure head are not considered an accessory to the device and therefore do not require certification.</li>
<li> Motor assembly for power-operated exposure devices; </li>
<li> Source changer.</li>
</ol>
</ol>
<a name="2.2"></a>
<h3 className="reportHeading3"><a name="P113_9369" id="P113_9369"></a>2.2 Baseline specifications in the ISO standard</h3>  <p>The design of the exposure device should be in accordance with the As Low As Reasonably Achievable (ALARA) principle. The application should describe the design options for the exposure device, as well as the results of the ALARA evaluation of these design options, leading to the selection of the design submitted for certification. The application should include an evaluation of the estimated radiation doses associated with the final design, and the key factors determining its choice.</p>
<a name="2.3"></a>
<h3 className="reportHeading3"><a name="P115_9905" id="P115_9905"></a>2.3 Changes to ISO standard requirements</h3>  <p>The following recommendations supplement sub-clauses in ISO 3999:2004, in order to meet CNSC requirements.</p>
<a name="2.3.1"></a>
<h4 className="reportHeading4"><em><a name="P117_10051" id="P117_10051"></a></em>2.3.1 General design</h4>  <p>ISO 3999:2004 requires the design of the exposure device to operate over the temperature range of -10<sup>o</sup>C to 45<sup>o</sup>C. However, in order to meet the demands of the Canadian climate, the device should operate satisfactorily over the broader temperature range of&nbsp;-40&ordm;C to 45&ordm;C.</p>
<a name="2.3.2"></a>
<h4 className="reportHeading4"><em><a name="P119_10344" id="P119_10344"></a></em>2.3.2 Sealed sources</h4>  <p>ISO 3999:2004 requires that the radioactive sealed source be in compliance with ISO&nbsp;2919:1999 [<a href="#R2">2</a>]. Compliance with ANSI N43.6-1997 [<a href="#R3">3</a>] is also acceptable for radiation device certification by the CNSC.</p>
<a name="2.3.3"></a>
<h4 className="reportHeading4"><em><a name="P121_10566" id="P121_10566"></a></em>2.3.3 Safety devices: Operation of the automatic securing mechanism </h4>  <p>The ISO standard does not address exposure devices that employ a shutter for shielding the sealed source assembly in the secured position. In such cases, the shutter should have a securing mechanism that automatically secures it in the shielded position each time the sealed source assembly is returned from the exposing position to the fully shielded position. It should be possible to release the shutter only by means of an intentional operation on the exposure device or the remote control.</p>  <p>The securing mechanism should not operate in a manner that prevents the source from returning to the shielded position. </p>
<a name="2.3.4"></a>
<h4 className="reportHeading4"><em><a name="P124_11249" id="P124_11249"></a></em>2.3.4 Remote control security </h4>  <p>If the control mechanism incorporates a device to indicate the travel distance of the control cable, there should be a means for adjusting the &#8220;zero&#8221; position.</p>  <p>ISO 3999:2004 does not address remote controls that operate using hydraulic, pneumatic, or vacuum systems. In these cases, there should be a means of determining any leaks in the remote control system.</p>
<a name="2.3.5"></a>
<h4 className="reportHeading4"><em><a name="P127_11643" id="P127_11643"></a></em>2.3.5 Resistance to normal conditions of service</h4>  <p><em><strong>2.3.5.1 General</strong></em></p>  <p>Unless the exposure device and its accessories have already passed identical tests or more stringent tests under other standards, they should be subjected to the tests described in ISO 3999:2004. Production exposure devices should be equivalent to the tested unit.</p>  <p>The reference to IAEA-STI-PUB 998 should be replaced with the IAEA regulations TS-R-1, <em>Regulations for the Safe Transport of Radioactive Material</em>, 1996 Edition (Revised) [<a href="#R4">4</a>], and IAEA Safety Standard Series No. ST-2, <em>Advisory Material for the IAEA Regulations for the Safe Transport of Radioactive Material Safety Guide </em>[<a href="#R5">5</a>]. </p>  <p><strong><em>2.3.5.2 Endurance test</em></strong></p>  <p>The exposure device should operate normally and the integrity of the cladding or encasement of the shielding should not be breached due to wear at the conclusion of the endurance test. The use of a borescope, or an equivalent test, should be performed to check any fatigue or wear of the S-tube.</p>
<a name="2.3.6"></a>
<h4 className="reportHeading4"><em><a name="P133_12613" id="P133_12613"></a></em>2.3.6 Vibration-resistance test</h4>  <p>Either the vibration test described in sub-clause 6.4.5 of ISO 3999:2004 or that described in section 6.2.2 of the ANSI N43.9-1991 standard [<a href="#R6">6</a>] may be used.</p>
<a name="2.3.7"></a>
<h4 className="reportHeading4"><em><a name="P135_12800" id="P135_12800"></a></em>2.3.7 Labelling</h4>  <p>Subsection 20(1) of the <em>Radiation Protection Regulations</em> must be followed regarding the labelling of exposure containers and devices. They must be labelled with the basic ionizing radiation symbol (see schedule 3 of the regulations) and the words &#8220;RAYONNEMENT &#8211; DANGER &#8211; RADIATION&#8221;. The critical components of associated equipment, except the control cable, must be durably and legibly marked to identify the manufacturer.</p>
<a name="2.3.8"></a>
<h4 className="reportHeading4"><em><a name="P137_13245" id="P137_13245"></a></em>2.3.8 Accompanying documents: Instructions for use</h4>  <p>In addition to the list in sub-clause 9.3 of the ISO standard, instructions on the conditions and limitation of use should also be provided, including environmental conditions (such as temperature, pressure, and humidity), chemical environment, and underwater restrictions.</p>
<a name="2.4"></a>
<h3 className="reportHeading3"><a name="P139_13571" id="P139_13571"></a>2.4 Specifications not addressed in the ISO standard</h3>  <p>The following recommendations are in addition to the ISO standard.</p>
<a name="2.4.1"></a>
<h4 className="reportHeading4"><em><a name="P141_13689" id="P141_13689"></a></em>2.4.1 Source changer</h4>  <p>Source changers should be equipped with a locking mechanism designed to prevent the inadvertent release of the source while transferring source assemblies to and from the exposure container. The lock should also prevent any unauthorised or accidental removal of the sealed source from its shielded position.</p>
<a name="2.4.2"></a>
<h4 className="reportHeading4"><em><a name="P143_14016" id="P143_14016"></a></em>2.4.2 Projection sheath</h4>  <p>The projection sheath (guide tube) should be equipped with an exposure head, or be designed for an exposure head to be attached. This should prevent the sealed source assembly from passing out the end of the projection sheath. <em><br />
Note</em>: A beam limiter (collimator) may serve as an exposure head.</p>
<a name="2.5"></a>
<h3 className="reportHeading3"><a name="P145_14330" id="P145_14330"></a>2.5 Use of non-original accessory equipment</h3>  <p>Accessory equipment or components from a non-original equipment manufacturer may be used, provided that the accessory equipment or components meet the following criteria and have been certified by the CNSC:</p>  <ol>
<li>They are identical in size, material specifications, and dimensions as the prototype that has been tested according to ISO 3999:2004; and</li>
<li> They are constructed to the quality assurance requirements as specified in ISO&nbsp;3999:2004; or </li>
<li> It is demonstrated through documented prototype testing or analytical means that the non-original accessories or components meet the design, testing, and performance specifications of ISO 3999:2004.</li>  </ol>  <p>Instead of certifying individual components, the CNSC would only certify the complete accessory equipment as one unit for a specific exposure container.</p>
<a name="3.0"></a>
<h2 className="reportHeading2"><a name="P151_15169" id="P151_15169"></a>3.0 Certification of an Exposure Device Design </h2>  <p>Once a certificate for an exposure device design has been issued, it only applies to a specific exposure container model design as well as to specific operating conditions and accessories. Any future changes to the design or use may require a new certification of the radiation device.</p>
<a name="#RDsection[ArrayLen(RDsection)-2]#"></a>
<h2 className="reportHeading2"><a name="P156_15501" id="P156_15501"></a>Glossary</h2>  <p>For the purpose of this guidance document, the following terms and definitions apply. Definitions reproduced from the ISO 3999:2004 standard are marked with an asterisk (*), and any commonly-used industry terms are in brackets.</p>  <dl className="margins-removed">
<dt>Borescope</dt>
<dd>An inspection device with a rigid or flexible optical tube designed for insertion into bores and cavities for inspection purposes. It consists of a lens positioned in front of a long tube containing image and illumination relays.</dd>
<dt>Beam limiter* (collimator)</dt>
<dd>A shielding device located at the working position, designed to reduce the radiation dose rate in directions other than the direction intended for use.<br />
<br />
<em>Note</em>: The beam limiter may be designed to be used in conjunction with an exposure head, or may incorporate an exposure head as an integral part of the device. </dd>
<dt>Control adaptor </dt>
<dd>A component of the control assembly that attaches the control assembly to the exposure container.</dd>
<dt>Control assembly, control mechanism</dt>
<dd>See Remote control.</dd>
<dt>Control cable* (drive cable)</dt>
<dd>A cable or other mechanical means used to project and retract the sealed source assembly out from and into the exposure container by remote control.</dd>
<dt>Control cable connector</dt>
<dd>A component used to attach the drive cable to the source assembly.</dd>
<dt>Control cable sheath*</dt>
<dd>A rigid or flexible tube for guiding the control cable by remote control to the exposure container, and for providing physical protection to the control cable.</dd>
<dt>Critical components of the accessories to the exposure device</dt>
<dd>Those components that are essential to the safe operation of the exposure device, to prevent a misconnect or disconnect. These include the projection sheath connector, control adaptor, control cable, control cable connector and source assembly.</dd>
<dt>Disconnect</dt>
<dd>A condition in which the sealed source assembly is inadvertently released from the control cable.</dd>
<dt>Drive mechanism (control mechanism)</dt>
<dd>See remote control.</dd>
<dt>Exposure container* (radiography camera)</dt>
<dd>A shield, in the form of a container, designed to allow the controlled use of gamma radiation and employing a sealed source assembly.</dd>
<dt>Exposure device source path* (S-tube)</dt>
<dd>A hollow tunnel inside the exposure container where the sealed source resides when not in use.</dd>
<dt>Exposure head* (source stop)</dt>
<dd>A device that locates the sealed source included in the sealed source assembly, in the selected working position, and prevents the sealed source assembly from projecting out of the projection sheath.<br />
<br />
<em>Note</em>: A beam limiter may also serve as an exposure head.</dd>
<dt>Locked position*</dt>
<dd>The condition of a sealed source assembly, with either an exposure container or source changer, in the secured and locked position.</dd>
<dt>Misconnect</dt>
<dd>A condition in which the remote control can be attached to the exposure container without attaching the control cable to the sealed source assembly.</dd>
<dt>Projection sheath* (guide tube)</dt>
<dd>A flexible or rigid tube for guiding the sealed source assembly from the exposure container to the working position and having the necessary connections for attachment to the exposure container and to the exposure head, or including the exposure head itself. </dd>
<dt>Projection sheath connector (guide tube connector)</dt>
<dd>A component used to attach the source guide tube to the exposure device.</dd>
<dt>Remote control* (remote control system, cranking mechanism, control assembly, drive mechanism)</dt>
<dd>A device that enables the sealed source assembly to be moved to and from a working position by the operator while at a safe distance from the exposure container.<br />
<br />
<em>Note</em>: The remote control includes the control mechanism and also, where applicable, the control cable, control cable sheath and necessary connections and attachments.</dd>
<dt>Secured position*</dt>
<dd>The condition of the exposure container and sealed source assembly, when the sealed source is fully shielded and its movement is restricted within the exposure container.<br />
<br />
<em>Note</em>: In the secured position the device need not be locked.</dd>
<dt>Source changer</dt>
<dd>A device used to store, transport and exchange source assemblies for use in exposure devices.</dd>
<dt>Source holder*</dt>
<dd>A holder, or attachment device, by means of which a sealed source or simulated source can be directly included in the exposure container, or fitted at the end of the control cable.<br />
<br />
<em>Note</em>: Source holders may be an integral part of the sealed source assembly or may be able to be dismantled for replacement of the sealed source.</dd>
<dt>Type B(U) transport package</dt>
<dd>A package designed and tested in accordance with IAEA Safety Standard No. TS-R-1, <em>Regulations for the Safe Transport of Radioactive Material</em>.</dd>  </dl>
<a name="#RDsection[ArrayLen(RDsection)-1]#"></a>
<h2 className="reportHeading2"><a name="P210_19975" id="P210_19975"></a>References</h2>  <ol>
<li><a name="R1"></a> International Organization for Standardization (ISO), ISO 3999:2004, <em>Radiation protection  - Apparatus for industrial gamma radiography  - Specifications for performance, design and tests</em>, Second edition, Geneva, 2004.</li>
<li><a name="R2"></a> International Organization for Standardization (ISO), ISO 2919:1999, <em>Radiation protection  - Sealed radioactive sources  - General requirements and classification,</em> Geneva, 1999.</li>
<li> <a name="R3"></a>American National Standards Institute, ANSI/HPS N43.6-1997, <em>Sealed Radioactive Sources - Classification</em>, New York, 1997.</li>
<li><a name="R4"></a> International Atomic Energy Agency, IAEA Safety Standard No. TS-R-1, <em>Regulations for the Safe Transport of Radioactive Material</em>, 1996 Edition (Revised), Vienna, 1996.</li>
<li> <a name="R5"></a>International Atomic Energy Agency Safety Standard Series, <em>Advisory Material for the IAEA Regulations for the Safe Transport of Radioactive Material, Safety Guide, </em>TS-G-1.1, Vienna, 2002.</li>
<li><a name="R6"></a> American National Standards Institute, ANSI N43.9-1991, <em>American National Standard for Gamma Radiography - Specifications for Design and Testing of Apparatus</em>, New York, 1991.</li>  </ol>
<a name="#RDsection[ArrayLen(RDsection)]#"></a>
<h2 className="reportHeading2"><a name="P220_21045" id="P220_21045"></a>Relevant Publications</h2>  <ol>
<li> International Organization for Standardization, ISO.9001:2000, <em>Quality management systems &#8211; requirements</em>, Third Edition, Geneva, 2000.</li>
<li> American National Standards Institute, ANSI N43.2-1980, <em>Radiological Safety for the Design and Construction of Apparatus for Gamma Radiography</em>, New York, 1997.</li>  </ol>

                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }