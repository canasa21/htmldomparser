import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "en",
                pageTitle: "Archived Web Page: Draft for Public Consultation: RD/GD-338: Security Measures for Sealed Sources", 
                dateModified: "2012-06-08",
                langToggleUrl: "/fra/acts-and-regulations/consultation/comment/rd-gd-338-1"
        
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
<h2>Preface</h2>  <p>Regulatory document RD/GD-338, <em>Security Measures for Sealed Sources</em> sets out the minimum physical security measures that licensees must implement to prevent the loss, sabotage, illegal use, illegal possession, or illegal removal of sealed sources in storage at the site of a licensed activity. This includes measures to prevent the loss, sabotage, illegal use, illegal possession, or illegal removal of sealed sources while they are in transport or being stored during transportation.</p>  <p>This document also provides information and guidance on how to meet the minimum physical security measures, including measures related to transport vehicles, containers and security plans. This document applies to transport by road within Canada only (there are other instruments and technical instructions that regulate the safe transport of dangerous goods by sea, air and rail).</p>  <p>In September 2003, the International Atomic Energy Agency (IAEA) approved the <em>Code of Conduct on the Safety and Security of Radioactive Sources</em>. Canada, along with many other countries, has undertaken to abide by this Code and work toward its full implementation. RD/GD-338, <em>Security Measures for Sealed Sources</em> supports the regulatory framework to enforce international guidelines set by the IAEA, and provides consistency in the application of security measures.</p>  <p>Most carriers are not licensed by the Canadian Nuclear Safety Commission (CNSC) and are not subject to the security requirements applicable to CNSC licensees when transporting or storing sealed sources while in transit. This document is intended to assist licensees with contracting carriers, so as to ensure that specific physical security measures are taken into consideration when transporting sealed sources, during storage or while in transit.</p>  <p>RD/GD-338, <em>Security Measures for Sealed Sources</em> reflects the security goals of United Nations specialized agencies and programs&nbsp;&#8211; including the International Maritime Organization (IMO), the International Civil Aviation Organization (ICAO) and other intergovernmental organizations such as the International Carriage by Rail&nbsp;&#8211; as they have taken similar steps to provide improved security in the transport of dangerous goods carried by sea, air and rail. These organizations have developed various instruments, such as the <em>International Maritime Dangerous Goods Code,</em> and technical instructions for the safe transport of dangerous goods by air.</p>  <p>This document applies to sealed radioactive sources (encapsulated or solid) and does not apply to unsealed radioactive substances. This document applies to Category&nbsp;1, 2, and 3 sources and provides &#8220;best practices&#8221; for Category&nbsp;4 and 5 sources. In this document, the terms Category&nbsp;1 to&nbsp;5 sources are used as defined in the IAEA&#8217;s <em>Code of Conduct on the Safety and Security of Radioactive Sources</em> or IAEA/TECDOC-1344, <em>Categorization of Radioactive Sources</em>.</p>  <p>Nothing contained in this document is to be construed as relieving any licensee from pertinent requirements. It is the licensee&#8217;s responsibility to identify and comply with all applicable regulations and licence conditions.</p>
<a name="#RDsection[2]#"></a>
<h2>Table of Contents</h2>  <div className="IndentLeft10">  <p><a href="#P126_5929">1.0 Introduction</a></p>  </div>  <div className="IndentLeft20">  <p><a href="#P127_5944">1.1 Purpose</a></p>  <p><a href="#P129_6392">1.2 Scope</a></p>  <p><a href="#P134_7668">1.3 Relevant regulations</a></p>  <p><a href="#P142_10542">1.4 National and international standards</a></p>  </div>  <div className="IndentLeft10">  <p><a href="#P151_11499">2.0 Background</a></p>  </div>  <div className="IndentLeft20">  <p><a href="#P157_12651">2.1 Application</a></p>  <p><a href="#P161_13836">2.2 Categorization of sources</a></p>  </div>  <div className="IndentLeft30">  <p><a href="#P169_16114">2.2.1 Nuclear substances and thresholds for the activity levels</a></p>  <p><a href="#P310_18355">2.2.2 Methodology for assigning a category</a></p>  </div>  <div className="IndentLeft10">  <p><a href="#P316_19607">3.0 Security Measures</a></p>  </div>  <div className="IndentLeft20">  <p><a href="#P317_19627">3.1 General security measures</a></p>  </div>  <div className="IndentLeft30">  <p><a href="#P318_19656">3.1.1 Requirements for general security measures</a></p>  <p><a href="#P321_20196">3.1.2 Guidance for general security measures</a></p>  </div>  <div className="IndentLeft20">  <p><a href="#P440_25431">3.2 Technical security measures</a></p>  </div>  <div className="IndentLeft30">  <p><a href="#P441_25462">3.2.1 Requirements for technical security measures</a></p>  <p><a href="#P457_26961">3.2.2 Access control</a></p>  <p><a href="#P473_29100">3.2.3 Detection of unauthorized access</a></p>  <p><a href="#P499_31822">3.2.4 Locking hardware and key control</a></p>  <p><a href="#P519_33871">3.2.5 Physical barriers</a></p>  <p><a href="#P560_41052">3.2.6 Alarm response protocol</a></p>  <p><a href="#P573_42849">3.2.7 Inspection, maintenance and testing of security-related equipment</a></p>  <p><a href="#P579_44122">3.2.8 Security officers</a></p>  </div>  <div className="IndentLeft20">  <p><a href="#P600_45783">3.3 Administrative security measures</a></p>  </div>  <div className="IndentLeft30">  <p><a href="#P601_45819">3.3.1 General requirements for administrative security measures</a></p>  <p><a href="#P610_46418">3.3.2 Site security plan</a></p>  <p><a href="#P615_47063">3.3.3 Security awareness program</a></p>  <p><a href="#P632_49264">3.3.4 Personal trustworthiness and reliability</a></p>  <p><a href="#P648_52231">3.3.5 Protection of prescribed and/or sensitive information</a></p>  <p><a href="#P671_55130">3.3.6 Inventory control</a></p>  </div>  <div className="IndentLeft10">  <p><a href="#P676_56115">4.0 Security Measures for Sealed Sources during Transport</a></p>  </div>  <div className="IndentLeft20">  <p><a href="#P677_56171">4.1 Vehicle security</a></p>  </div>  <div className="IndentLeft30">  <p><a href="#P678_56191">4.1.1 Requirements for vehicle security</a></p>  <p><a href="#P688_57792">4.1.2 Guidance for vehicle security</a></p>  </div>  <div className="IndentLeft20">  <p><a href="#P691_58447">4.2 Security measures for sealed sources during transport</a></p>  </div>  <div className="IndentLeft30">  <p><a href="#P692_58504">4.2.1 Requirements for security measures for sealed sources during transport</a></p>  <p><a href="#P714_62402">4.2.2 Guidance for security measures for sealed sources during transport</a></p>  </div>  <div className="IndentLeft20">  <p><a href="#P727_64257">4.3 Transport security plan</a></p>  </div>  <div className="IndentLeft30">  <p><a href="#P728_64284">4.3.1 Requirements for the transport security plan</a></p>  <p><a href="#P743_65782">4.3.2 Guidance for the transport security plan</a></p>  </div>  <div className="IndentLeft10">  <p><a href="#P780_69565">Appendix&nbsp;A: Sample Site Security Plan</a></p>  <p><a href="#P850_76111">Glossary</a></p>  <p><a href="#P896_81154">References</a></p>  <p><a href="#P909_82126">Additional Information</a></p>  </div>
<a name="1.0"></a>
<h2><a name="P126_5929" id="P126_5929"></a>1.0 Introduction</h2>  <h3><a name="P127_5944" id="P127_5944"></a>1.1 Purpose</h3>  <p>This regulatory document sets out the minimum security measures that licensees must implement to prevent the loss, sabotage, illegal use, illegal possession, or illegal removal of sealed sources in storage at the site of a licensed activity. This also includes measures to prevent the loss, sabotage, illegal use, illegal possession, or illegal removal of sealed sources while they are in transport or being stored during transportation.</p>  <h3><a name="P129_6392" id="P129_6392"></a>1.2 Scope</h3>  <p>This document describes the minimum security measures required for the storage of sealed sources, and includes measures for both technical and administrative physical security. It also sets out the minimum security measures that a licensee must ensure a carrier of sealed sources meets while the sealed sources are in transport or being stored during transportation. It includes measures related to transport vehicles, containers and security plans.</p>  <p>This document also provides information and guidance on how to meet the security requirements.</p>  <p>This document applies to transport by road within Canada only (there are many instruments and technical instructions that regulate the safe transport of dangerous goods by sea, air and rail).</p>  <p>This document applies to sealed radioactive sources (encapsulated or solid) and does not apply to unsealed radioactive substances. This document applies to Category&nbsp;1, 2, and 3 sources and provides &#8220;best practices&#8221; for Category&nbsp;4 and 5 sources. In this document, the terms Category&nbsp;1 to&nbsp;5 sources are used as defined in the International Atomic Energy Agency&#8217;s (IAEA) <em>Code of Conduct on the Safety and Security of Radioactive Sources</em>&nbsp;[<a href="#R1">1</a>] or IAEA/TECDOC-1344, <em>Categorization of Radioactive Sources</em>&nbsp;[<a href="#R2">2</a>] (see also glossary).</p>  <h3><a name="P134_7668" id="P134_7668"></a>1.3 Relevant regulations</h3>  <p>The following provisions of the <em>Nuclear Safety and Control Act</em> (NSCA) and regulations made under the NSCA are relevant to this regulatory document:</p>  <ul>
<li>paragraphs&nbsp;3(1)(<em>g</em>) and (<em>h</em>) of the <em>General Nuclear Safety and Control Regulations</em> state that &#8220;an application for a licence shall contain the following information: [&#8230;]<br />
(<em>g</em>)&nbsp;the proposed measures to control access to the site of the activity to be licensed and the nuclear substance, prescribed equipment or prescribed information;<br />
(<em>h</em>)&nbsp;the proposed measures to prevent loss or illegal use, possession or removal of the nuclear substance, prescribed equipment or prescribed information&#8221;</li>
<li>paragraphs&nbsp;12(1)(<em>c</em>), (<em>g</em>), (<em>h</em>) and (<em>j</em>) of the <em>General Nuclear Safety and Control Regulations</em> state that &#8220;every licensee shall [&#8230;]<br />
(<em>c</em>)&nbsp;take all reasonable precautions to protect the environment and the health and safety of persons and to maintain the security of nuclear facilities and of nuclear substances; [&#8230;]<br />
(<em>g</em>)&nbsp;implement measures for alerting the licensee to the illegal use or removal of a nuclear substance, prescribed equipment or prescribed information, or the illegal use of a nuclear facility;<br />
(<em>h</em>)&nbsp;implement measures for alerting the licensee to acts of sabotage or attempted sabotage anywhere at the site of the licensed activity; [&#8230;]<br />
(<em>j</em>)&nbsp;instruct the works on the physical security program at the site of the licensed activity and on their obligations under that program&#8221;</li>
<li>sections&nbsp;21, 22, and 23 of the <em>General Nuclear Safety and Control Regulations</em> define prescribed information and provide details on which persons may possess, transfer, import, export, use, or disclose prescribed information</li>
<li>paragraphs&nbsp;36(1)(a) and&nbsp;(<em>d</em>) of the <em>Nuclear Substances and Radiation Devices Regulations</em> state that &#8220;every licensee shall keep the following records:<br />
(<em>a</em>)&nbsp;a record of the following information in respect of any nuclear substance in the licensee&#8217;s possession that is referred to in the licence:<br />
(i)&nbsp;the name, quantity, form and location of the nuclear substance,<br />
(ii)&nbsp;where the nuclear substance is a sealed source, the model and serial number of the source,<br />
(iii)&nbsp;where the nuclear substance is contained in a radiation device, the model and serial number of the device,<br />
(iv)&nbsp;the quantity of the nuclear substance used, and<br />
(v)&nbsp;the manner in which the nuclear substance was used;<br />
&#8230;<br />
(<em>d</em>)&nbsp;a record of the training received by each worker&#8221;</li>
<li>section&nbsp;17 of the <em>Packaging and Transport of Nuclear Substances Regulations</em> states that &#8220;every consignor of radioactive material shall include in the transport documents for the consignment the information referred to in paragraph&nbsp;549 of the <em>IAEA Regulations</em>&nbsp;[<a href="#R3">3</a>] which shall be clearly and indelibly printed in the documents&#8221;</li>  </ul>  <p>The <em>Transportation of Dangerous Goods Regulations</em> (Transport Canada) may also apply to sealed sources.</p>  <h3><a name="P142_10542" id="P142_10542"></a>1.4 National and international standards</h3>  <p>This regulatory document is consistent with modern national and international guides and standards for physical security measures for sealed sources. Publications relevant to physical security of sealed sources include:</p>  <ul>
<li>IAEA, <em>Code of Conduct on the Safety and Security of Radioactive Sources</em>, 2004&nbsp;[<a href="#R1">1</a>]</li>
<li>IAEA, TECDOC-1344, <em>Categorization of Radioactive Sources</em>, 2003 (Revision of IAEA-TECDOC-1191, <em>Categorization of Radiation Sources</em>, 2000)&nbsp;[<a href="#R2">2</a>]</li>
<li>IAEA, TS-R-1, <em>Regulations for the Safe Transport of Radioactive Material</em>, 1996 edition (revised)&nbsp;[<a href="#R3">3</a>]</li>
<li>IAEA, TECDOC-1355, <em>Security of Radioactive Sources</em>&nbsp;&#8211; <em>Interim Guidance for Comment</em>, 2003&nbsp;[<a href="#R4">4</a>]</li>
<li>IAEA, TECDOC-1276, <em>Handbook on the physical protection of nuclear materials and facilities</em>, 2002</li>
<li>IAEA, <em>Security in the Transport of Radioactive Material</em>, 2008</li>
<li>IAEA, <em>Nuclear Security Recommendations on Radioactive Material and Associated Facilities</em>, 2011</li>  </ul>
<a name="2.0"></a>
<h2><a name="P151_11499" id="P151_11499"></a>2.0 Background</h2>  <p>Radioactive sealed sources and prescribed equipment containing nuclear substances are regulated under the <em>Nuclear Safety and Control Act</em> (NSCA) and the regulations made under the NSCA, such as the <em>General Nuclear Safety and Control Regulations, Class&nbsp;II Nuclear Facilities and Prescribed Equipment Regulation, Nuclear Substances and Radiation Devices Regulations</em> and the <em>Radiation Protection Regulations</em>.</p>  <p>Additional regulations related to the transport of sources (such as packaging, documentation and safety markings) include:</p>  <ul>
<li>Canadian Nuclear Safety Commission (CNSC), <em>Packaging and Transport of Nuclear Substances Regulations</em></li>
<li>Transport Canada, <em>Transportation of Dangerous Goods Regulations</em></li>  </ul>  <p>This document uses a graded approach for the security of sealed sources. There are five levels of sealed sources (Categories&nbsp;1 through 5). This document applies to radioactive sealed sources that may pose a significant risk to the environment and the health and safety of persons (i.e., Category&nbsp;1, 2 and 3 sources). Because Categories&nbsp;4 and 5 are least dangerous, this document provides prudent management practices for those categories.</p>  <h3><a name="P157_12651" id="P157_12651"></a>2.1 Application</h3>  <p>This regulatory document applies to sealed sources of nuclear substances identified in Table&nbsp;A. These substances and threshold values are based on the IAEA <em>Code of Conduct on the Safety and Security of Radioactive Sources</em>&nbsp;[<a href="#R1">1</a>]. The main objective of this regulatory document is specific to radioactive sources that could be dangerous to the health and safety of persons and to the environment if they are not protected (that is, Category&nbsp;1, 2 and&nbsp;3 sources). </p>  <p>As outlined in IAEA TECDOC-1344&nbsp;[<a href="#R2">2</a>], if a practice involves the accumulation of several sources into a single storage or use location, where these sources are in close proximity (such as in storage facilities, manufacturing processes, or transport conveyance), the total activity is treated as a single source for the purpose of assigning a category.</p>  <p>The security requirements must be commensurate with the categorization, threat level and/or level of risk set by the licensee or the Government of CanadNote that mobile and portable radioactive sources may need to be treated differently, to ensure that any specific security requirements are fulfilled, thereby allowing the source to be used as intended.</p>  <h3><a name="P161_13836" id="P161_13836"></a>2.2 Categorization of sources</h3>  <p>The CNSC bases its categorization of sources on the IAEA source categorization as defined in IAEA/TECDOC-1344&nbsp;[<a href="#R2">2</a>]. This document recognizes that not all radioactive sources could (or should) be treated alike, and has established five source categories, ranging from Category&nbsp;1 (extremely dangerous) to Category&nbsp;5 (unlikely to be dangerous). The IAEA categorization methodology has found worldwide acceptance, and provides a uniform means of classifying the risk associated with the most commonly used radioactive sealed sources and radiation devices.</p>  <p>Sealed sources and radiation devices may be used in one location (for example, fixed gauges used on process equipment) or they may be mobile and used on different job sites (for example, radiography exposure devices and portable soil moisture density gauges).</p>  <p>Category&nbsp;1 sources are the most dangerous sealed sources licensed by the CNSC. Because they pose the greatest risk to the health and safety of persons and to the environment, Category&nbsp;1 sources are always used in a well-shielded and well-controlled location. Examples include cobalt-60 teletherapy sources used for cancer treatment and cobalt-60 sources used in pool-type irradiators to sterilize medical products. Such sources should be shielded and secured safely.</p>  <p>The most common example of a Category&nbsp;2 source is an industrial radiography exposure devicThese devices are portable, and are widely used in pipeline work and in pressure vessel fabrication shops (particularly in the oil and gas industry).</p>  <p>More numerous are the fixed and portable radioactive gauges in Category&nbsp;3 and Category&nbsp;Category&nbsp;3 sources are often fixed gauges that are bolted to pipes, vessels and assembly lines where they operate reliably in harsh industrial environments, often for decades. Category&nbsp;4 sources include the portable soil-moisture density gauges that are used in road construction.</p>  <p>Category&nbsp;5 sources are low-risk. Examples include electron capture detectors used to measure pesticide residues in food, x-ray fluorescence analyzers, and low-dose brachytherapy implant sources. Some Category&nbsp;5 sources may be used without a CNSC-issued licence.</p>  <p>Table&nbsp;A provides thresholds of Category&nbsp;1, 2 and 3 sources, measured in activity level.</p>  <table border="1" summary="Activities corresponding to thresholds">
<caption>
Table&nbsp;A: Activities corresponding to thresholds of Category&nbsp;1, 2 and&nbsp;3 sources
</caption>
<col width="64" span="7" />
<tr>
<th rowspan="2">Nuclear
substance</th>
<th colSpan="2">Category&nbsp;1 source</th>
<th colSpan="2">Category&nbsp;2 source</th>
<th colSpan="2">Category&nbsp;3 source</th>
</tr>
<tr>
<th>Terabecquerels<br />
(TBq)</th>
<th>Curies<br />
(Ci)</th>
<th>Terabecquerels<br />
(TBq)</th>
<th>Curies<br />
(Ci)</th>
<th>Terabecquerels<br />
(TBq)</th>
<th>Curies<br />
(Ci)</th>
</tr>
<tr>
<td>Americium-241
(<sup>241</sup>Am)</td>
<td>60</td>
<td>1,600</td>
<td>0.6</td>
<td>16</td>
<td>0.06</td>
<td>1.6</td>
</tr>
<tr>
<td>Americium-241)&nbsp;/
Beryllium (<sup>241</sup>Am/Be)</td>
<td>60</td>
<td>1,600</td>
<td>0.6</td>
<td>16</td>
<td>0.06</td>
<td>1.6</td>
</tr>
<tr>
<td>Californium-252
(<sup>252</sup>Cf)</td>
<td>20</td>
<td>500</td>
<td>0.2</td>
<td>5</td>
<td>0.02</td>
<td>0.5</td>
</tr>
<tr>
<td>Cesium-137
(<sup>137</sup>Cs)</td>
<td>100</td>
<td>2,700</td>
<td>1</td>
<td>27</td>
<td>0.1</td>
<td>2.7</td>
</tr>
<tr>
<td>Cobalt-60
(<sup>60</sup>Co)</td>
<td>30</td>
<td>800</td>
<td>0.3</td>
<td>8</td>
<td>0.03</td>
<td>0.8</td>
</tr>
<tr>
<td>Curium-244
(<sup>244</sup>Cm)</td>
<td>50</td>
<td>1,300</td>
<td>0.5</td>
<td>13</td>
<td>0.05</td>
<td>1.3</td>
</tr>
<tr>
<td>Gadolinium-153
(<sup>153</sup>Gd)</td>
<td>1,000</td>
<td>27,000</td>
<td>10</td>
<td>270</td>
<td>1</td>
<td>27</td>
</tr>
<tr>
<td>Iridium-192
(<sup>192</sup>Ir)</td>
<td>80</td>
<td>2,100</td>
<td>0.8</td>
<td>21</td>
<td>0.08</td>
<td>2.1</td>
</tr>
<tr>
<td>Plutonium-238
(<sup>238</sup>Pu)</td>
<td>60</td>
<td>1,600</td>
<td>0.6</td>
<td>16</td>
<td>0.06</td>
<td>1.6</td>
</tr>
<tr>
<td>Plutonium-239&nbsp;/
Beryllium (<sup>239</sup>Pu/Be)</td>
<td>60</td>
<td>1,600</td>
<td>0.6</td>
<td>16</td>
<td>0.06</td>
<td>1.6</td>
</tr>
<tr>
<td>Promethium-147
(<sup>147</sup>Pm)</td>
<td>40,000</td>
<td>108,000</td>
<td>400</td>
<td>1,080</td>
<td>40</td>
<td>108</td>
</tr>
<tr>
<td>Radium-226
(<sup>226</sup>Ra)</td>
<td>40</td>
<td>1,100</td>
<td>0.4</td>
<td>11</td>
<td>0.04</td>
<td>1.1</td>
</tr>
<tr>
<td>Selenium-75
(<sup>75</sup>Se)</td>
<td>200</td>
<td>5,400</td>
<td>2</td>
<td>54</td>
<td>0.2</td>
<td>5.4</td>
</tr>
<tr>
<td>Strontium-90
(<sup>90</sup>Sr) (Yttrium-90
(<sup>90</sup>Y))</td>
<td>1,000</td>
<td>27,000</td>
<td>10</td>
<td>270</td>
<td>1</td>
<td>27</td>
</tr>
<tr>
<td>Thulium-170</td>
<td>20,000</td>
<td>540,000</td>
<td>200</td>
<td>5,400</td>
<td>20</td>
<td>540</td>
</tr>
<tr>
<td>Ytterbium-169</td>
<td>300</td>
<td>8,100</td>
<td>3</td>
<td>81</td>
<td>0.3</td>
<td>8.1</td>
</tr>  </table>  <h4><a name="P169_16114" id="P169_16114"></a>2.2.1 Nuclear substances and thresholds for the activity levels</h4>  <p>The materials and thresholds in Table&nbsp;A are based on the IAEA <em>Code of Conduct on the Safety and Security of Radioactive Sources</em>&nbsp;[<a href="#R1">1</a>]. These thresholds aim to provide consistency between domestic and international requirements for the protection of radioactive material.</p>  <p>There are 16&nbsp;nuclear substances that could pose a serious threat to the health and safety of people and to the environment. Irradiated fuel and mixed oxide fuel are not included in the list even though they contain quantities of radioactive material; these materials are covered by the <em>Nuclear Security Regulations</em>.</p>  <p>Terabecquerel (TBq) is the official measurement unit used for determining whether a radioactive material is a Category&nbsp;1,&nbsp;2, or&nbsp;3 sourcBecause many licensees use Curies in their activities instead of Becquerels, the table also provides the equivalent Curie&nbsp;(Ci) measurement for practical usefulness.</p>  <p>IAEA RS-G-1.9, <em>Categorization of Radioactive Sources</em>&nbsp;[<a href="#R5">5</a>] provides the methodology for the development of the <em>Code of Conduct</em> thresholds.</p>  <p>These regulatory requirements apply only to sealed sources. However, it is recommended that comparable security requirements be taken into account for open or unsealed sources when considering the suitability and adequacy of the storage arrangements.</p>  <h4><a name="P310_18355" id="P310_18355"></a>2.2.2 Methodology for assigning a category</h4>  <p>To assign a category, the total activity of all sources in one facility (storage or use) where sources are in close proximity must be equal to, or greater than, the number identified in the category. For example:</p>  <ul>
<li>a teletherapy medical device with a sealed source up to 555&nbsp;TBq of cobalt-60 is a Category&nbsp;1 source (555&nbsp;&gt;&nbsp;30)</li>
<li>a certified radiography exposure device with a sealed source of 2.5&nbsp;TBq of iridium-192 is a Category&nbsp;2 sealed source (80&nbsp;&gt;&nbsp;2.5&nbsp;&gt;&nbsp;0.8)</li>
<li>a high dose rate (HDR) brachytherapy medical device with a sealed source up to 0.44&nbsp;TBq of iridium-192 is a Category&nbsp;3 source (0.8&nbsp;&gt;&nbsp;0.44&nbsp;&gt;&nbsp;0.08)</li>  </ul>  <p>For security control purposes, the aggregation of sources in a single storage (or use) facility can be used to determine a situation-specific sealed source category. This is done by adding the actual sealed source activities of the sources and determining the category from Table&nbsp;A. For example, one industrial level gauge containing a sealed source with 0.19&nbsp;TBq of cesium-137 is a Category&nbsp;3 source (1.0&nbsp;&gt; 0.19&nbsp;&gt; 0.1). However, when there are six of these sealed sources at a single licensed location, they can be treated as a Category&nbsp;2 source (6&nbsp;x&nbsp;0.19&nbsp;=&nbsp;1.1&nbsp;&gt;&nbsp;1.0).</p>
<a name="3.0"></a>
<h2><a name="P316_19607" id="P316_19607"></a>3.0 Security Measures</h2>
<a name="3.1"></a>
<h3><a name="P317_19627" id="P317_19627"></a>3.1 General security measures</h3>  <h4><a name="P318_19656" id="P318_19656"></a>3.1.1 Requirements for general security measures</h4>  <p>While in storage, licensees shall develop and implement technical and administrative security measures to protect the radioactive source against unauthorized removal (such as theft or loss) or sabotage.</p>  <p>As outlined in IAEA TECDOC-1355&nbsp;[<a href="#R4">4</a>], these measures shall integrate safety and security concepts involving industrial safety arrangements, radiation protection measures and appropriate design to achieve the necessary level of protection against unauthorized removal of radioactive sources.</p>  <h4><a name="P321_20196" id="P321_20196"></a>3.1.2 Guidance for general security measures</h4>  <p>The licensee should develop and maintain a threat and risk assessment to determine vulnerabilities in the existing physical protection systems designed to protect against the loss, sabotage, illegal use, illegal possession, or illegal removal during the storage or transportation of the sealed sourcThe threat and risk assessment, updated annually, is also used to determine mitigating security measures to address identified threats, manage risks or reduce/eliminate vulnerabilities.</p>  <p>Table&nbsp;B provides information on how security program subsections should be applied to Category&nbsp;1 (high risk), Category&nbsp;2 (high risk), Category&nbsp;3 (medium risk), and Categories&nbsp;4 and&nbsp;5 (low risk).</p>  <table border="1" summary="Security levels and security objectives">
<caption>
Table&nbsp;B: Security levels and security objectives
</caption>
<col width="64" span="5" />
<tr>
<th className="smallFont">Security program sub sections</th>
<th className="smallFont">Category 1- high risk</th>
<th className="smallFont">Category 2- high risk</th>
<th className="smallFont">Category 3- medium risk</th>
<th className="smallFont">Category 4 and 5- low risk</th>
</tr>
<tr>
<th className="smallFont">Facility security plan</th>
<td className="smallFont" colSpan="2"><ul>
<li>updated annually or
when important changes are done at the facility</li>
<li>classified prescribed and/or sensitive and stored appropriately</li>
<li>communicated on a need to know basis</li>
<li>indicate
measures in case of increased threat</li>
</ul></td>
<td className="smallFont"><ul>
<li>updated on a regular basis or when
important changes are done at the facility</li>
<li>must be classified prescribed
and/or sensitive and stored appropriately</li>
<li>communicated on a need to know
basis</li>
</ul></td>
<td className="smallFont"><ul>
<li>best practice</li>
</ul></td>
</tr>
<tr>
<th className="smallFont">Perimeter
and physical barrier (1st line of defense)</th>
<td className="smallFont" colSpan="3"><ul>
<li>must be protected with
at least two physical barriers (i.e., walls, cages, secure containers) to
separate the source from unauthorized personnel and provide sufficient delay
to allow for immediate detection, and for response personnel to intervene
before the adversary can remove the source</li>
</ul></td>
<td className="smallFont"><ul>
<li>source must be protected against
unauthorized access and removal</li>
</ul></td>
</tr>
<tr>
<th className="smallFont">Security of storage (2nd line of defense)</th>
<td className="smallFont" colSpan="2"><ul>
<li>secured with good
quality padlock or equivalent security system</li>
<li>equipped with a minimum of two intrusion detection systems</li>
<li>secure
containers must be able to resist an attack by handheld tools</li>
</ul>
</td>
<td className="smallFont"><ul>
<li>secured with good quality padlock
or equivalent security system</li>
<li>equipped with a minimum of one
intrusion detection system</li>
</ul>
</td>
<td className="smallFont"><ul>
<li>must be stored in a
secure container or location</li>
</ul></td>
</tr>
<tr>
<th className="smallFont">Intrusion
detection system</th>
<td className="smallFont" colSpan="3"><ul>
<li>must be linked to a
ULC-certified control room monitored by an operator 24/7 or an equivalent
mechanism (i.e., continuous surveillance by operator) for detection,
assessment, and communication with response personnel in case of security
event</li>
</ul></td>
<td className="smallFont" rowspan="2"><ul>
<li>source must be protected
against unauthorized access and removal</li>
</ul></td>
</tr>
<tr>
<th className="smallFont">Access control</th>
<td className="smallFont"><ul>
<li>restrict access to authorized user
only</li>
<li>two-person
rule (optimal)</li>
<li>visitors,
students, contractors must be escorted at all times</li>
</ul>
</td>
<td className="smallFont"><ul>
<li>restrict access to authorized user
only</li>
<li>visitors, students, contractors
must be escorted at all times</li>
</ul>
</td>
<td className="smallFont"><ul>
<li>restrict access to authorized user
only</li>
<li>visitors, students, contractors
must be escorted by authorized user</li>
</ul>
</td>
</tr>
<tr>
<th className="smallFont">Transportation
security plan</th>
<td className="smallFont"><ul>
<li>must develop and submit a specific
Transport Security Plan to CNSC for review and approval</li>
</ul></td>
<td className="smallFont"><ul>
<li>must develop and maintain a
generic Transport Security Plan</li>
</ul></td>
<td className="smallFont"><ul>
<li>best practice</li>
</ul></td>
<td className="smallFont" rowspan="3"><ul>
<li>source must be
protected against unauthorized access and removal</li>
</ul></td>
</tr>
<tr>
<th className="smallFont">Response protocol</th>
<td className="smallFont" colSpan="2"><ul>
<li>specific response
protocol and contingency plan</li>
<li>contact local law enforcement</li>
<li>effective
response time</li>
<li>must develop a procedure in case of lost, stolen or malicious act
involving radioactive sealed source</li>
</ul></td>
<td className="smallFont"><ul>
<li>generic response protocol and
contingency plan</li>
<li>must develop a procedure in case
of lost, stolen or malicious act involving radioactive sealed source</li>
</ul></td>
</tr>
<tr>
<th className="smallFont">Vehicle security</th>
<td className="smallFont" colSpan="2"><ul>
<li>vehicle must be
equipped with anti-theft or vehicle disabler and intrusion detection system,
or equivalent measures</li>
<li>vehicle must be equipped with a minimum of two technical barriers
to prevent unauthorized removal of the radioactive source/device</li>
<li>access
must be restricted to authorized users only</li>
<li>GPS
or tracking system (optimal)</li>
<li>drivers must be equipped with a means of communication in case of
emergency</li>
<li>two-person
rule (optimal)</li>
<li>drivers
and operators must undergo a trustworthiness verification</li>
</ul></td>
<td className="smallFont"><ul>
<li>vehicle must be equipped with
anti-theft and intrusion detection system or equivalent measures</li>
<li>vehicle must be equipped with a
minimum of two technical barriers to prevent unauthorized removal</li>
</ul></td>
</tr>
<tr>
<th className="smallFont">Personal trustworthiness or background checks</th>
<td className="smallFont" colSpan="2"><ul>
<li>criminal records name
check</li>
<li>reference, education and employment verification</li>
<li>drivers and contractors (i.e., carriers) with unescorted access
to radioactive sources must undergo this verification</li>
</ul></td>
<td className="smallFont"><ul>
<li>reference, education and
employment verification</li>
<li>criminal records name check</li>
</ul></td>
<td className="smallFont"><ul>
<li>reference, education and
employment verification</li>
<li>criminal records name check (best
practice)</li>
</ul></td>
</tr>
<tr>
<th className="smallFont">Information
security</th>
<td className="smallFont" colSpan="4"><ul>
<li>all prescribed
information must be protected and be shared on a need to know basis</li>
</ul></td>
</tr>
<tr>
<th className="smallFont">Maintenance
and testing</th>
<td className="smallFont" colSpan="4"><ul>
<li>maintenance and
testing must be conducted at least every six months, and written records
should be maintained</li>
</ul></td>
</tr>
<tr>
<th className="smallFont">Security
awareness program</th>
<td className="smallFont" colSpan="4"><ul>
<li>all workers must
receive security awareness training on a regular basis</li>
</ul></td>
</tr>  </table>
<a name="3.2"></a>
<h3><a name="P440_25431" id="P440_25431"></a>3.2 Technical security measures</h3>  <h4><a name="P441_25462" id="P441_25462"></a>3.2.1 Requirements for technical security measures</h4>  <p>Technical security measures for radioactive sources, devices or facilities shall include physical measures to:</p>  <ul>
<li>prevent unauthorized personnel from gaining access to such sources</li>
<li>protect against an act or attempted act of unauthorized removal</li>
<li>protect against an act or attempted act of sabotage</li>  </ul>  <p>Technical security measures shall also include hardware and/or security systems designed according to the principle of defence in depth and the physical protection system functions of &#8220;detection, delay and response&#8221;.</p>  <p>This section includes security requirements for the following measures:</p>  <ul>
<li>access control</li>
<li>detection of unauthorized access</li>
<li>locking hardware and key control</li>
<li>physical barriers (secure containers, secure enclosures)</li>
<li>alarm response protocols</li>
<li>inspection, maintenance and testing of physical security-related equipment</li>
<li>security officers</li>  </ul>  <p>Within each of the areas identified above, the licensee shall define appropriate security measures that are commensurate with the level of risk presented by the sealed source(s). Further details are provided in sections&nbsp;3.2.2 to&nbsp;3.2.8.</p>  <p>In support of paragraphs&nbsp;3(1)(<em>g</em>) and 3(1)(<em>h</em>) of the <em>General Nuclear Safety and Control Regulations</em>, the licensee shall include in their licence application details pertaining to physical security measures for access control, physical barriers, detection of unauthorized access, maintenance and testing of physical security-related equipment.</p>  <h4><a name="P457_26961" id="P457_26961"></a>3.2.2 Access control</h4>  <h4>3.2.2.1 Requirements for access control</h4>  <p>The licensee shall implement access control measures (e.g., access card readers, personnel identification systems, manual or electronic locks) or use security officers to ensure that only authorized persons have access to storage areas containing sealed sources at all times.</p>  <p>Visitors, building maintenance staff, servicing companies and contractors who require access to the sealed source storage shall be escorted at all times if they do not possess a trustworthiness verification approved by the licensee.</p>  <h4>3.2.2.2 Guidance for access control</h4>  <p>To control access to the sealed sources, the licensee should:</p>  <ul>
<li>prevent unauthorized access to the sources</li>
<li>monitor and maintain records of all personnel with access to secure storage areas, through the use of a log book or an access control system with tracking capabilities</li>
<li>implement effective access control measures, such as manually activated locking devices, padlocks, card reader access and biometric devices/systems, and through the use of &#8220;controlled&#8221; entry points</li>
<li>ensure the access control system incorporates measures to prevent unacceptable practices such as &#8220;pass back&#8221; or &#8220;tailgating&#8221;</li>
<li>assign individual personal identification number (PIN) codes if used in conjunction with an access control system</li>
<li>remove access rights for individuals as soon as access is no longer required</li>
<li>restrict access rights to the access control management system and software, to prevent unauthorized interference with the system database (hacking, software sabotage)</li>
<li>implement a means of duress signalling near the source storage, to provide notice to the alarm monitoring company or response personnel</li>
<li>implement a local alarm that triggers in the vicinity of the storage area, to alert nearby personnel of an intrusion or other problem in the source storage area </li>  </ul>  <p>The security program should include security measures relating to detection, delay and response to security events (e.g., alarm detection devices, fencing, secured storage containers, immobilization of vehicles and/or trailers, security officers).</p>  <h4><a name="P473_29100" id="P473_29100"></a>3.2.3 Detection of unauthorized access</h4>  <h4>3.2.3.1 Requirements for detection of unauthorized access</h4>  <p>The licensee shall implement measures for the detection of attempted or actual unauthorized access in a timely manner, such as:</p>  <ul>
<li>visual observation</li>
<li>video alarm assessment</li>
<li>detection devices</li>
<li>accountancy records, seals, or other tamper-indicating devices including process monitoring systems (for example, daily or twice-weekly audits, to ensure that the sources are present)</li>  </ul>  <p>Note that, for mobile sources in use, continuous visual surveillance by operator personnel equipped with an appropriate communication link may substitute for one or both layers of barriers.</p>  <p>If an intrusion detection system is used, it must:</p>  <ul>
<li>immediately detect any unauthorized intrusion into the sealed source storage area</li>
<li>immediately detect any tampering that may cause any of the alarm system devices to malfunction or cease to function</li>
<li>when an intrusion is detected, set off a continuous alarm signal that is both audible and visible at the licensee&#8217;s location and/or at an approved monitoring station, using a supervised communications link; the monitoring station shall be certified by a body accredited by the Standards Council of Canada, or other certification body deemed acceptable by the CNSC staff</li>
<li>include an uninterruptible power supply subject to routine testing, to ensure continuous operability of the security detection system</li>  </ul>  <h4>3.2.3.2 Guidance for detection of unauthorized access</h4>  <p>To detect unauthorized access, the alarm system should:</p>  <ul>
<li>activate immediately upon detecting an intrusion or tamper event</li>
<li>stay in an alarmed state until acknowledged by an authorized person</li>
<li>have two or more zones for each area of storage</li>
<li>have an acceptably low nuisance and/or false alarm rate</li>
<li>be certified by the Underwriters Laboratories (UL) or Underwriters Laboratories of Canada (ULC)</li>  </ul>  <p>The licensee should:</p>  <ul>
<li>ensure that alarm monitoring devices and back-up battery power are protected against tampering by unauthorized personnel (e.g., electronic panel or junction box)</li>
<li>ensure the keypad is installed within a secure environment, to prevent tampering</li>
<li>use dedicated alarm zones in the storage area (separate from any other alarm zones) and limit access to authorized users only</li>
<li>maintain an audit trail to record the cause of any alarms</li>  </ul>  <p>For example, consider a radiography company that has a warehouse equipped with an alarm system. Two zones are set up: one zone for the warehouse and a second interior zone for the storage areDuring the day, the main alarm system for the warehouse is deactivated but the security system for the storage area remains activated and operates independently of the main system.</p>  <h4><a name="P499_31822" id="P499_31822"></a>3.2.4 Locking hardware and key control</h4>  <h4>3.2.4.1 Requirements for locking hardware and key control</h4>  <p>Access cards, door keys, or locks that control access to storage areas shall be restricted to personnel authorized by the licensee.</p>  <p>The licensee shall maintain records of all access control authorizations, including locking devices (either electronic or manual). Such records shall include the names of the individuals to whom the locking devices or combinations have been issued, and the date of issuance.</p>  <p>The licensee shall develop and maintain written procedures that include measures for repairing or replacing a locking device, key, access card or combination that is defective, lost, stolen, or unlawfully transferred, or has otherwise become compromised.</p>  <h4>3.2.4.2 Guidance for locking hardware and key control</h4>  <p>The licensee should develop, maintain and adhere to written procedures for issuing, repairing or replacing a securing device, key, access card or combination that is defective, lost, stolen or otherwise compromised.</p>  <p>If keys are used, the licensee should implement a key control policy to:</p>  <ul>
<li>restrict the number of individuals with keys</li>
<li>restrict the number of master keys</li>
<li>prohibit employees from duplicating keys</li>
<li>use a patented key or dedicated keyway to prevent unauthorized duplication of keys</li>
<li>include a provision for employees to return keys when access is no longer required</li>
<li>ensure that key blanks are stored securely</li>  </ul>  <p>For key control, the licensee should:</p>  <ul>
<li>conduct a review of the key inventory and keyholders on a regular basis</li>
<li>note changes and additions to the key inventory and keyholders in their records</li>
<li>maintain accountability for all keys that have been issued and keys reported lost or stolen</li>  </ul>  <p>Locks with combination codes or cipher-based keyless locks are not recommended.</p>  <p>When conventional locks and keys are used, they should be of good quality. Key management procedures should be designed to prevent unauthorized access or compromisThe locks should have shielded shackles, to prevent cutting of the lock.</p>  <h4><a name="P519_33871" id="P519_33871"></a>3.2.5 Physical barriers</h4>  <h4>3.2.5.1 Requirements for physical barriers</h4>  <p>For sealed sources whose activity is less than the threshold levels listed for Category&nbsp;3 in Table&nbsp;A, the licensee shall store the sources in secure containers, as described in section&nbsp;3.2.5.1.1.</p>  <p>For sealed sources whose activity is equal to or above the threshold levels listed for Categories&nbsp;1, 2, or&nbsp;3 in Table&nbsp;A, the licensee shall implement a minimum of two different physical barriers, to prevent unauthorized access to sealed sources in storage or provide delay sufficient to enable response personnel to intervene as required.</p>  <p>The physical barriers shall be any combination of secure containers or other secure enclosures. For example:</p>  <ul>
<li>a licensee who stores a sealed source in a locked safe may locate the safe in an enclosed room that can be locked, and must secure the container in place (floor, wall or vehicle)</li>
<li>alternatively, the safe may be located within a locked metal cage or other suitable enclosure</li>
<li>the access-controlled perimeter of the licensee&#8217;s location may serve as the first secure enclosure, with a secondary secure enclosure or secure container inside, both with access control</li>  </ul>  <p>Note that for a mobile source in use, it may not always be possible to achieve the security measures specified abovIn such cases, compensatory measures shall be implemented to provide other forms of protection (e.g., close supervision combined with an appropriate communication link). </p>  <h4>3.2.5.1.1 Requirements for secure containers</h4>  <p>Secure containers include items such as filing cabinets, metal boxes, safes, and wire mesh cages. For a container to be considered secure, it must be:</p>  <ul>
<li>securely affixed in place</li>
<li>resistant to physical attack using handheld tools</li>
<li>fitted with a key or combination padlock, or similar lock, that can resist surreptitious or forced attack using handheld tools</li>
<li>when a wire mesh cage is used, the cage fabric must be expandable metal mesh no smaller than number&nbsp;10 gauge&nbsp;[<a href="#R6">6</a>]</li>  </ul>  <h4>3.2.5.1.2 Requirements for secure enclosures</h4>  <p>Enclosures include rooms, buildings or cages that can be secureFor an enclosure to be considered secure, all exterior components (e.g., walls, doors and windows) are resistant to physical attack using handheld tools and access/egress points are equipped with access control devices, or access is controlled by security officers.</p>  <p>Windows that provide access to interior areas in proximity to sources must be equipped with bars (where the gap between the bars must be less than 15&nbsp;cm), metal grill, expanded metal mesh, and/or retrofitted with a UL/ULC certified security film or glazinSecurity hardware attached to windows must be affixed from the inside to prevent tampering, or fitted with tamper-resistant devices if fitted from the outside.</p>  <p>Doors that provide access to areas where nuclear substances and radiation devices are used, processed or stored must be secured when left unattendeDoors must be solid-core wood or metal clad and installed in a reinforced frame of equivalent material. Doors must be maintained in good state of repair and fitted with non-removable pinned hinges, if the hinges are mounted on the outsidAny door glazing or large vents (grills) must be fitted with security glazing or bars, metal grills, or equivalent. Grills must be secured in place with tamper-resistant devices.</p>  <h4>3.2.5.2 Guidance for physical barriers</h4>  <p>Traditional barriers such as chain-link fences, locked doors, grilled windows, masonry walls and vaults are commonly used for storage of radioactive sealed sources. Barriers should be considered in relation to an adversary&#8217;s objectives. </p>  <p>The licensee should implement multiple physical barriers to protect the radioactive sources. Multiple barriers potentially force an adversary to bring a variety of tools to defeat each individual barrier, thereby delaying the adversary and providing the response personnel with time to intervenOne implementation of the concept of defence in depth is to have multiple layers of different barrier types along the path to complicate an adversary&#8217;s progress by requiring a variety of tools and skills (see Figure&nbsp;1). </p>  <p><img src="/eng/acts-and-regulations/consultation/comment/rd-gd-338/images/rd-gd-338-1e.png" alt="Adversary path to a storage area" width="530" height="308" /></p>  <p>Figure&nbsp;1: Adversary path to a storage area</p>  <p>For example, multiple barriers may include:</p>  <ul>
<li>a portable device (e.g., portable gauge, exposure device) stored inside a vault or safe that is bolted to the floor and capable of resisting common attack tools</li>
<li>a mobile device (e.g., a brachytherapy unit) may be chained to the floor within the storage areThe chain is made of material resistant to common attack tools and is secured with a good quality padlock that has the same level of robustness (e.g., shielded shackles)</li>
<li>a solid-core door made of wood or metal, installed with non-removable screws, pinned door hinges, a latch protector and an automatic door closer</li>
<li>a window equipped with laminated window-film resistant to burglar attacks, metal mesh or metal bars spaced at 15&nbsp;centimetres or less, and installed with non-removable screws</li>  </ul>  <h4>3.2.5.2.1 Guidance for secure containers</h4>  <p>The storage location and/or container should:</p>  <ul>
<li>be secured with a locking mechanism or have other measures to prevent unauthorized removal</li>
<li>be secured when left unattended</li>
<li>be equipped with an alarm system to detect unauthorized entry or access</li>
<li>be sufficiently robust to resist common attack tools (e.g., sledgehammer, crowbar, drill, blowtorch)</li>  </ul>  <h4>3.2.5.2.2 Guidance for secure enclosures</h4>  <p>Openings, such as windows or vent ducts, that could provide access to secure enclosures should be fitted with bars, a metal grill, expanded metal mesh, and/or retrofitted with a UL/ULC certified security film or glazinSecurity hardware attached to windows should be affixed from the inside, to prevent tampering, or be fitted with tamper-resistant anchors if affixed from the outside.</p>  <p>Doors that provide access to areas where radioactive sealed sources and/or radiation devices are used, processed or stored should be secured when unattendeThe material used for the door should be solid-core wood or metal-clad, and the door should be installed in a reinforced frame of equivalent material. Doors should be in a good state of repair. If the hinges are mounted on the non-secure side, the door should be fitted with non-removable pinned hinges. Any door glazing or large vents (grills) should be fitted with security glazing or bars, a metal grill, or equivalent. Grills should be secured in place with tamper-resistant anchors.</p>  <p>If continuous visual surveillance is done by an operator, the operator should be equipped with a means of communication (e.g., cell phone or radio) and should be aware of the response protocols to communicate rapidly to response personnel in the event of unauthorized access or removal.</p>  <p>If key pads are used to arm and disarm an intrusion detection system, the device and its electric junction box should be installed in a secure area, to reduce the risk of tampering.</p>  <p>To maintain continuous power to the alarm monitoring detection system in the event of a loss of primary power, the licensee should consider implementing an alternate or auxiliary power back-up source, or equivalent, to maintain detection capability.</p>  <h4><a name="P560_41052" id="P560_41052"></a>3.2.6 Alarm response protocol</h4>  <h4>3.2.6.1 Requirements for alarm response protocol</h4>  <p>The licensee shall respond immediately to any actual or attempted theft, diversion or sabotage to radioactive material or devices.</p>  <p>The licensee shall develop and maintain a documented alarm response protocol to record the cause and dispensation of alarms. The protocol shall include the role and responsibilities of the licensee&#8217;s emergency response staff and offsite response force, and shall be documented in a contingency plan or an equivalent document.</p>  <p>The licensee must notify the local police force of jurisdiction, informing them that sealed sources are onsite, and include an opportunity for onsite familiarization tours. The licensee shall develop and maintain written arrangements with offsite emergency responders, and update those arrangements annually or when changes to the facility design or operations affect the potential vulnerability of the sourcWritten arrangements are not required for temporary job sites.</p>  <h4>3.2.6.2 Guidance for alarm response protocol</h4>  <p>The licensee should develop and maintain a documented alarm response protocol that includes:</p>  <ul>
<li>response procedures in case of theft, loss or sabotage of a radioactive sealed source</li>
<li>the role and responsibilities of the licensee&#8217;s staff</li>
<li>communication arrangements with local law enforcement and applicable authorities</li>
<li>incident reporting/notification</li>
<li>immediate reporting of any recovered source(s)</li>  </ul>  <p>To facilitate arrangements with local or provincial law enforcement agencies, or mutual aid agreements with other sites, the licensee should consider written support arrangements such as a memorandum of understanding (MOU). This written arrangement should detail the interaction between site guards or onsite personnel with the agencies.</p>  <h4><a name="P573_42849" id="P573_42849"></a>3.2.7 Inspection, maintenance and testing of security-related equipment</h4>  <h4>3.2.7.1 Requirements for inspection, maintenance and testing of security-related equipment</h4>  <p>The licensee shall develop and implement written procedures for the testing of physical security equipment and a schedule for routine testing and maintenance in accordance with the manufacturer&#8217;s specifications. At a minimum, testing of security equipment including intrusion detection devices shall be conducted every six months.<em> </em>The licensee shall demonstrate that alarm testing was conductePreventive maintenance procedures shall include measures to replace defective equipment and devices in a timely manner.</p>  <h4>3.2.7.2 Guidance for inspection, maintenance and testing of security-related equipment</h4>  <p>All detection devices should be installed, operated and maintained in accordance with the manufacturers&#8217; specifications and licensee processes. The licensee should test the performance of the detection devices on a regular basis, to ensure reliability and maintain documented records.</p>  <p>Licensees should ensure reliability through a preventive maintenance program that tracks detection device deficiencies. When the device is out of service for repair or replacement, compensatory measures must be implemented.</p>  <h4><a name="P579_44122" id="P579_44122"></a>3.2.8 Security officers</h4>  <h4>3.2.8.1 Requirements for security officers</h4>  <p>If the licensee uses a security guard service, the licensee shall develop and maintain written procedures and instructions specific to:</p>  <ul>
<li>measures for controlling access to the licensed area</li>
<li>surveillance foot and vehicle patrols</li>
<li>assessment and response to alarms</li>
<li>apprehension and detainment of unarmed intruders</li>
<li>report suspicious activities, including armed intruders, to the police force of jurisdiction</li>
<li>security equipment operation</li>
<li>security training relating to assigned duties</li>  </ul>  <h4>3.2.8.2 Guidance for security officers</h4>  <p>Security officers should be properly equipped and traineA formal training program should be established that is specific to the security officers. The training program should include:</p>  <ul>
<li>requirements of provincial/territorial regulations (if applicable)</li>
<li>legislation and authorities</li>
<li>knowledge of the site</li>
<li>roles, responsibilities and functions</li>
<li>radiation protection emergency procedures and response protocols</li>
<li>first-aid training techniques</li>  </ul>  <p>Security officers should be screened in accordance with the trustworthiness program and should possess a valid licence or certification recognized by the province or territory.</p>  <p>The licensee should consider performing exercises and drills on a regular basis, to validate onsite response force readiness.</p>  <p>For security officers, the licensee should establish and maintain an overall training policy and initial and continuing training programs, based on the long-term qualifications and competencies required for performing the job, and training goals that acknowledge the critical roles of safety and security.</p>
<a name="3.3"></a>
<h3><a name="P600_45783" id="P600_45783"></a>3.3 Administrative security measures</h3>  <h4><a name="P601_45819" id="P601_45819"></a>3.3.1 General requirements for administrative security measures</h4>  <p>Administrative security measures support technical measures, and shall include the programs, plans, policies, procedures, instructions and practices that the licensee implements to assist in securing licensed radioactive material from unauthorized removal or sabotage.</p>  <p>These measures shall include, but are not limited to, the following:</p>  <ul>
<li>site security plan</li>
<li>security awareness program</li>
<li>personnel trustworthiness and reliability</li>
<li>protection of prescribed or sensitive information</li>
<li>inventory control</li>
<li>access control procedures</li>  </ul>  <h4><a name="P610_46418" id="P610_46418"></a>3.3.2 Site security plan</h4>  <h4>3.3.2.1 Requirements for a site security plan</h4>  <p>For Category&nbsp;1, 2 and&nbsp;3 sources, technical and administrative measures shall be documented by the licensee in a site security plan, appropriately designated in accordance with section&nbsp;12(1)(<em>j</em>) and 21 to 23 of the <em>General Nuclear Safety and Control Regulations</em>. The site security plan shall be updated and verified by the licensee at least once a year, to address any changes within the licensed facility.</p>  <h4>3.3.2.2 Guidance for a site security plan</h4>  <p>For information on a site security plan, and for a site security plan template, refer to Appendix&nbsp;A, <em>Sample Site Security Plan</em>.</p>  <h4><a name="P615_47063" id="P615_47063"></a>3.3.3 Security awareness program</h4>  <h4>3.3.3.1 Requirements for a security awareness program</h4>  <p>All persons with authorized access to sealed sources or prescribed information at the licensee&#8217;s location (including servicing companies, contractors and building maintenance staff) shall be made aware of the security policies, protocols and practices of the facility. Records of training and awareness sessions must be maintained for all workers (as required by section&nbsp;36(1)(<em>d</em>) of the <em>Nuclear Substances and Radiation Devices Regulations</em>). The security awareness program shall be documented and updated by the licensee annually. The licensee shall implement an assured process for ensuring new employees participating in security awareness training, and refresher training shall be conducted on a regular basis for existing employees.</p>  <h4>3.3.3.2 Guidance for a security awareness program</h4>  <p>The security awareness training should include instructions on security practices/procedures to protect sealed sources and prescribed information, and on reporting suspicious events or security incidents (including during transport).</p>  <p>At a minimum, the security awareness program should:</p>  <ul>
<li>ensure that staff understand their roles and responsibilities for security</li>
<li>ensure staff are trained to recognize and report suspicious activity, for example:
<ul>
<li>using false identification</li>
<li>individual exhibiting suspicious behavior</li>
<li>individual causing an alarm without authorization</li>
<li>lost or stolen uniforms or material within the organization</li>
<li>unsafe behavior at the workplace</li>
</ul>
</li>
<li>ensure protection of prescribed and/or sensitive information</li>
<li>include training on measures for identifying suspicious activity and/or behavioral changes in personnel or contractors</li>  </ul>  <p>For the security awareness program, the licensee should establish and maintain an overall training policy and initial and continuing training programs, based on the long-term qualifications and competencies required for performing the job, and training goals that acknowledge the critical role of safety and security.</p>  <p>For additional information on establishing a security culture in the organization, refer to the IAEA&#8217;s <em>Nuclear Security Culture</em>, section&nbsp;3.3&nbsp;[<a href="#R7">7</a>].</p>  <h4><a name="P632_49264" id="P632_49264"></a>3.3.4 Personal trustworthiness and reliability</h4>  <h4>3.3.4.1 Requirements for personal trustworthiness and reliability</h4>  <p>The licensee shall verify the trustworthiness and reliability of all persons who require access to sealed sources at the licensee&#8217;s location or to prescribed/sensitive information&nbsp;[<a href="#R8">8</a>] including servicing companies, contractors and building maintenance staff who require access without escort. Personnel who require access to such radioactive material or prescribed/sensitive information to perform job duties, but who are not approved by the licensee, must be escorted by an approved individual. The nature and depth of personnel screening practices&nbsp;[<a href="#R8">8</a>] shall be based on the category of the radioactive material.</p>  <p>For Category&nbsp;1, 2 and&nbsp;3 sources, the licensee shall, at a minimum, verify the following information:</p>  <ol className="lower-alpha">
<li>confirm the identity of personnel from reliable original documentation such as passport or combination of other original documents (e.g., valid drivers license, health card or birth certificate)</li>
<li>a record emanating from the Canadian Police Information Center, or from a police service servicing the area where the facility is located, showing the result of a criminal records name check (CRNC) on the person</li>
<li>the person&#8217;s employment history, including their educational achievement, and professional qualifications, unless the person has been employed for more than 10&nbsp;years at the facility</li>
<li>if a person&#8217;s history cannot be established for at least the last five years, information relating to the trustworthiness of the person including, where available, a CRNC from each country in which the person has resided for one or more years in the last five years</li>  </ol>  <p>The licensee shall retain documentation regarding trustworthiness and reliability for a minimum of two years for current employees and shall protect the information in accordance with section&nbsp;3.3.5.</p>  <h4>3.3.4.2 Guidance for personal trustworthiness and reliability</h4>  <p>These personnel screening practices are based on the personnel security standard in the <em>Policy on Government Security</em>, Treasury Board of Canada Secretariat&nbsp;[<a href="#R8">8</a>].</p>  <p>The licensee&#8217;s trustworthiness verification program should ensure individuals who have unescorted access to high-risk radioactive sealed sources are trustworthy and reliable, and do not pose an unreasonable risk to the health and safety of persons and security. The licensee should maintain copies of all documents provided by applicants and ensure they have been verified as original. The trustworthiness verification program should be reviewed on a regular basis.</p>  <p>The trustworthiness verification program should apply to:</p>  <ul>
<li>individuals with unescorted access to Category&nbsp;1, 2 and&nbsp;3 sources</li>
<li>vehicle drivers and those accompanying the transport of Category&nbsp;1 sources</li>
<li>any individual whose assigned duties provide access to prescribed and/or sensitive information or the handling of Category&nbsp;1 sources (including onsite security officers)</li>  </ul>  <h4><a name="P648_52231" id="P648_52231"></a>3.3.5 Protection of prescribed and/or sensitive information</h4>  <h4>3.3.5.1 Requirements for protection of prescribed and/or sensitive information</h4>  <p>The licensee shall provide protection measures to control access to prescribed information, pursuant to sections&nbsp;21 to 23 of the <em>General Nuclear Safety and Control Regulations</em>, and to prevent loss, illegal use, illegal possession or illegal removal of such prescribed information. This information shall be managed on a &#8220;need to know&#8221; basis. </p>  <h4>3.3.5.2 Guidance for protection of prescribed and/or sensitive information</h4>  <p>&#8220;Prescribed information&#8221; is defined in the <em>General Nuclear Safety and Control Regulations</em>, section&nbsp;21 (see glossary).</p>  <p>The following information is considered to be prescribed and should be protected:</p>  <ul>
<li>the facility security plan, correspondence related to security, security response measures, contingency plans and transport security plan, if applicable</li>
<li>the specific location and inventory of sources, installation schematics and security systems including performance testing</li>
<li>threat and risk assessment and/or vulnerability assessment</li>  </ul>  <p>Prescribed and/or sensitive information should be:</p>  <ul>
<li>protected from unauthorized disclosure and secure when left unattended</li>
<li>disclosed only to individuals with a &#8220;need to know&#8221; basis to perform their assigned duties</li>
<li>stored in a manner that prevents removal or theft</li>  </ul>  <p>Highly sensitive documents should be stored on a hard medium (diskette, CD-ROM or USB key) or in paper format only, and kept in a secure location that is accessible only to individuals with a &#8220;need to know&#8221;. This information should not be stored on an open or shared network without proper protection.</p>  <p>For prescribed and/or sensitive information, the licensee should:</p>  <ul>
<li>use &#8220;portable&#8221; storage devices (i.e., computer, external hard drive, USB keys) that can be removed and secured</li>
<li>use storage devices that are &#8220;protected&#8221; via passwords or encryption, and are only accessible to authorized users via approved cyber security protocols</li>
<li>protect the confidentiality, availability and integrity of information or documents containing prescribed information</li>  </ul>  <p>For transportation and transmission of prescribed and/or sensitive information:</p>  <ul>
<li>the top right-hand corner of each page of the document should include the security classification level (i.e., &#8220;PRESCRIBED INFORMATION&#8221; or &#8220;SECURITY PROTECTED&#8221;) in bold, upper-case letters</li>
<li>the document and the related correspondence may be forwarded to the CNSC by mail, courier, or &#8220;secure facsimile&#8221;</li>
<li>electronic transmission (e.g., email) of this information is not acceptable, unless it is encrypted using proper technologies</li>  </ul>  <p>Prescribed information and documents containing sensitive information that is obsolete or no longer relevant should be shredded or destroyed in accordance with the security rating of the material designated for destruction.</p>  <h4><a name="P671_55130" id="P671_55130"></a>3.3.6 Inventory control</h4>  <h4>3.3.6.1 Requirements for inventory control</h4>  <p>The licensee shall conduct regular inventory checks for detection purposes, to verify that the source(s) are secure and have not been altered or subject to illegal access or unauthorized removal. These inventory checks shall comply with section&nbsp;36(1)(a) of the <em>Nuclear Substances and Radiation Devices Regulations</em>.</p>  <h4>3.3.6.2 Guidance for inventory control</h4>  <p>The operator should establish and maintain a list of sealed sources under their responsibility. Inventory verification can be used as part of detection measures. Regular inventory checking should consist of measures to ensure that the sources are present and have not been tampered witSuch measures could include physical checks that the source is in place, or remote observation through closed circuit television (CCTV), or verification of seals or other tamper devices. A process for inventory control should be in place, to ensure a robust verification process.</p>
<a name="4.0"></a>
<h2><a name="P676_56115" id="P676_56115"></a>4.0 Security Measures for Sealed Sources during Transport</h2>
<a name="4.1"></a>
<h3><a name="P677_56171" id="P677_56171"></a>4.1 Vehicle security</h3>  <h4><a name="P678_56191" id="P678_56191"></a>4.1.1 Requirements for vehicle security</h4>  <p>For the transport of a Category&nbsp;1 source, the vehicle shall be equipped with:</p>  <ul>
<li>a vehicle tracking device that enables the vehicle to be recovered if stolen</li>
<li>a duress alarm or an equivalent device that is continuously monitored; the licensee shall instruct the alarm monitoring station to alert the appropriate response force (e.g., police agency of jurisdiction)</li>  </ul>  <p>For Category&nbsp;1, 2 and 3 sources, the licensee&#8217;s vehicles shall be equipped with anti-theft devices. The anti-theft devices shall consist of:</p>  <ul>
<li>a vehicle disabling device (e.g., starter disabler that prevents the start of the vehicle without a proper key or a similar start device)</li>
<li>if the vehicle is left unattended, a device that immediately detects unauthorized entry or attack to the vehicle and triggers an audible or visible alarm. If the vehicle operator is not within hearing or visual range of the alarm, the operator shall have the ability to monitor the alarm devices remotely</li>  </ul>  <p>These anti-theft devices shall be activated automatically or manually by the operator at any time when the vehicle containing the package is left unattended.</p>  <p>While being stored during transportation, the package shall either be stored in a secure container in the vehicle, or in a location that is protected by physical security measures and is continuously monitored when the package is left unattended.</p>  <p>For Category&nbsp;4 and&nbsp;5 sources, the licensee shall implement prudent management practices by using effective access control and ensuring the security of radioactive material and devices at all times. </p>  <h4><a name="P688_57792" id="P688_57792"></a>4.1.2 Guidance for vehicle security</h4>  <p>If a licensee&#8217;s transport vehicle is left unattended while transporting Category&nbsp;1, 2 and 3 sources, the licensee should have a means to immediately detect, assess and respond to actual or attempted theft or diversion of the sealed sources. An alarm system is an acceptable methoExamples of acceptable vehicle disabling devices that provide effective delay include trailer hitch locks, wheel locks (&#8220;boots&#8221;), or a method to disable the engine.</p>  <p>The licensee should ensure a secondary means to protect the vehicle, including a securing mechanism having a similar attack resistance (e.g., chain, locks, and seals).</p>
<a name="4.2"></a>
<h3><a name="P691_58447" id="P691_58447"></a>4.2 Security measures for sealed sources during transport</h3>  <h4><a name="P692_58504" id="P692_58504"></a>4.2.1 Requirements for security measures for sealed sources during transport</h4>  <p>As the licensee (the consignor) is responsible for the safety and security of sealed sources during transport, the licensee shall ensure the authorized carrier is capable of providing physical security measures for sealed sources while they are in transport or being stored during transportation.</p>  <p>As required by the <em>Packaging and Transport of Nuclear Substances Regulations</em>, the licensee shall provide the carrier with the appropriate shipping documents relating to the sealed sourcThe shipping documents shall include the corresponding description of security measures for sealed sources. Where more than one category of radionuclide applies (e.g., for shipments of multiple radionuclides) the applicable measures shall be based on the more restrictive category.</p>  <p>All packages containing sealed sources of Category&nbsp;1, 2 or&nbsp;3 shall be protected from unauthorized access, theft or unauthorized removal during transport and temporary storage during transport. The consignee should be notified when, where and by whom such packages are being moved, including tracking numbers and expected arrival times. The licensee, being the consignor, shall contract a carrier with a proven record for the safety and security of dangerous goods while in transport, and shall take the following precautions:</p>  <ol>
<li>The package containing the sealed source shall be stored in a secure container. Packages over 500&nbsp;kg are considered secure due to the handling difficulties caused by their weight. The secure container does not replace any other packaging or labelling required by any existing regulations. A secure container:
<ol className="lower-alpha">
<li>shall be made of steel or any other material that is resistant to a physical attack by handheld tools</li>
<li>shall be equipped with a key, combination padlock or similar locking device that is resistant to an attack using handheld tools</li>
<li>if transported in an open conveyance (e.g., open back of a half-ton truck, flatbed truck), it shall be securely affixed to the vehicle to prevent unauthorized removal of the container</li>
<li>if containing a sealed source with an activity level less than Category&nbsp;3 (see Table&nbsp;A), may be stored in the securely locked trunk or other cargo area of a vehicle while in storage and during transportation</li>
</ol>
</li>
<li>During a stopover while being transported, the package shall either be stored in a secure container in the vehicle (as described in list item&nbsp;1, above), or in a location that is protected by physical security measures (as described in section&nbsp;3).</li>
<li>The vehicle operator shall have on his or her person, at all times, a reliable mobile communication capability (e.g., cell phone) and a list of contact persons and their contact numbers in the event of an emergency situation.</li>  </ol>  <p>Alternate methodologies that provide a level of physical security equivalent to that described above may be submitted to the CNSC for review, or identified in a licence application or a request to amend a licence.</p>  <p>For transport of Category&nbsp;1 or 2 sources and devices, the licensee shall verify that the carrier:</p>  <ul>
<li>uses a package tracking system</li>
<li>implements methods to ensure trustworthiness and reliability of drivers</li>
<li>maintains constant control and/or surveillance during transit</li>
<li>has the capability for immediate communication to summon appropriate response or assistance</li>  </ul>  <p>For transport of Category&nbsp;3 sources, the licensee shall verify that the carrier:</p>  <ul>
<li>implements methods to ensure trustworthiness and reliability of drivers</li>
<li>maintains constant control and/or surveillance during transit</li>
<li>has the capability for immediate communication to summon appropriate response or assistance</li>  </ul>  <p>For transport of Category&nbsp;4 and 5 sources, the licensee shall implement prudent management practices by using effective access control and ensuring the security of radioactive material and devices at all times.</p>  <h4><a name="P714_62402" id="P714_62402"></a>4.2.2 Guidance for security measures for sealed sources during transport</h4>  <p>The licensee should:</p>  <ul>
<li>provide security awareness training to all individuals engaged in the handling or transport of sealed sources, including refresher training when required</li>
<li>verify that, before transporting Category&nbsp;1 and&nbsp;2 sources, all persons employed by the carrier transporting the sealed sources have successfully completed security screening for trustworthiness and reliability</li>  </ul>  <p>The security awareness training should include the items listed for the transport security plan (see section&nbsp;4.3) and specific information on:</p>  <ul>
<li>the identified threats for the conveyance</li>
<li>security concerns and actions to be undertaken in the event of a security incident during transport</li>  </ul>  <p>Security devices on the licensee&#8217;s transport vehicles should:</p>  <ul>
<li>be inspected by the licensee regularly for any signs of tampering or deterioration that may adversely affect their designated function</li>
<li>be tested by the licensee at least every six months</li>
<li>be inspected by a qualified operator to ensure integrity of the security mechanism on the vehicle used to transport Category&nbsp;1 or&nbsp;2 sources</li>  </ul>  <p>For sources in use or in transit, such measures may include a secured or fixed container, or placement of the source container inside a secured storage area (e.g., container chained or bolted to the vehicle). For mobile sources in use, continuous visual surveillance may be a substitute for one or two physical barriers. If a sealed source is temporarily stored while in transit (for example, in a warehouse), equivalent security measures should be applied that are consistent with those security measures discussed above for storage of Category&nbsp;1 and&nbsp;2 sources. </p>  <p>If packages are transported on an open conveyance, the packages should be shielded and secured to the vehicle for safety and security.</p>
<a name="4.3"></a>
<h3><a name="P727_64257" id="P727_64257"></a>4.3 Transport security plan</h3>  <h4><a name="P728_64284" id="P728_64284"></a>4.3.1 Requirements for the transport security plan</h4>  <p>In addition to the requirements in section&nbsp;4.2.1, the following requirements apply to Category&nbsp;1 and&nbsp;2 sources:</p>  <ul>
<li>For transport of Category&nbsp;1 sources, the licensee shall implement enhanced security measures and submit a specific Transport Security Plan to the CNSC at least 60&nbsp;days before the anticipated date of shipment, for approval by the Commission Tribunal or a designated officer authorized by the Commission Tribunal</li>
<li>For transport of Category&nbsp;2 sources, the licensee shall implement enhanced security measures and develop a generic Transport Security Plan that shall be implemented and reviewed on a regular basis. The Transport Security Plan should be flexible to address changing threat levels, response protocols to a security event and the protection of sensitive information</li>  </ul>  <p>For Category&nbsp;1 sources, the Transport Security Plan shall include the following information:</p>  <ol>
<li>the name, quantity, chemical/physical characteristics of the radioactive material</li>
<li>role and responsibilities of the licensee&#8217;s personnel, consignors, carriers</li>
<li>mode(s) of transport</li>
<li>the proposed security measures</li>
<li>measures to monitor the location of the shipment</li>
<li>provisions for information security</li>
<li>communications arrangements made among the licensee, the carrier and the consignee</li>
<li>communications arrangements made with any police agency along the transportation route</li>
<li>the planned route</li>
<li>alternate routes to be used in case of an emergency</li>  </ol>  <h4><a name="P743_65782" id="P743_65782"></a>4.3.2 Guidance for the transport security plan</h4>  <p>For Category&nbsp;1 sources, the transport security plan should include the following general information:</p>  <ol className="lower-alpha">
<li>contact information for the licensee or applicant
<ul>
<li>include the complete legal name and business address of the licensee or applicant who is submitting the plan</li>
<li>include all relevant contact information, such as telephone number, mobile phone number, and email address</li>
</ul>
</li>
<li>the name, quantity, chemical and physical characteristics of each of the sealed sources being transported
<ul>
<li>include a description of the radioactive sealed source and device</li>
<li>include the category and quantity of the radioactive sealed source being transported</li>
</ul>
</li>
<li>role and responsibilities of the licensee&#8217;s personnel, consignors, and carriers
<ul>
<li>describe who is responsible for security and the transport security plan (name and title)</li>
<li>ensure that security-related information is communicated to the consignors and carriers engaged in the transport of the sealed source(s). If transport is subcontracted, the licensee should ensure contractual arrangements exist for developing the security plan.</li>
</ul>
</li>
<li>mode(s) of transport
<ul>
<li>describe all types of transport used to convey the sealed source(s) from the time the shipment leaves its originating location until it is delivered at its planned destination</li>
<li>include the date, time and location of any planned transfers and the contact information (name, job title, and telephone number) for all persons responsible for ensuring the successful transfer of the sealed sources and for verifying the integrity of the associated shipments</li>
</ul>
</li>
<li>proposed security measures
<ul>
<li>describe the measures used to monitor the movement of packages and/or conveyances containing radioactive sealed sources (e.g., global positioning system, vehicle tracking and monitoring system)</li>
<li>describe the measures used for escort, security searches, and procedures with response force in case of breakdown or a failure of the shipment to arrive at its destination at the expected time</li>
<li>describe the procedures to be followed during any schedule stop, or unscheduled delay during transport</li>
</ul>
</li>
<li>measures to monitor the location of the shipment</li>
<li>provisions for information security
<ul>
<li>describe how the information will be protected</li>
<li>describe how this information will be communicated to individuals who need to know this information to perform their duties</li>
</ul>
</li>
<li>the communications arrangements made between the licensee, the carrier, and the consignee
<ul>
<li>describe the communication arrangements between the licensee, the consignor, the operator of the vehicle transporting the radioactive sealed source, and the response force along the transport route</li>
<li>describe how the licensee plans to ensure that communication coverage is adequate along the entire route</li>
<li>indicate the action to be taken if communication contact with a vehicle carrying a radioactive sealed source is lost</li>
</ul>
</li>
<li>communication arrangements made with any police agency along the transportation route
<ul>
<li>the licensee should ensure that all responsible police agencies along the transportation route are notified prior to transporting the shipment</li>
<li>the consignor should notify the consignee, in advance, of the shipment&#8217;s departure time, the mode of transport, the expected delivery time and the allowable delivery period around that delivery time</li>
<li>the consignee should notify the consignor of receipt or non-receipt of the shipment within the expected delivery period</li>
</ul>
</li>
<li>the planned route
<ul>
<li>if the proposed route is to pass through an urban area, the licensee or applicant should describe the precise route to be taken through the area and how the shipment is to be schedule to avoid peak traffic times</li>
<li>include alternate routes to be used in case of an emergency</li>
</ul>
</li>  </ol>
<a name="#RDsection[13]#"></a>
<h2><a name="P780_69565" id="P780_69565"></a>Appendix&nbsp;A: Sample Site Security Plan</h2>  <p>This appendix provides a list of topics to be considered when developing a site security plan&nbsp;[<a href="#R4">4</a>]. </p>  <p>A threat and risk assessment identifies any potential threats and risks, and reveals possible vulnerabilities at a sitThe site security plan is developed to mitigate those threats, and to reduce/eliminate the risks and vulnerabilities. The site security plan includes physical protection measures to protect nuclear substances that are stored, processed, used or transported at the licensed facility.</p>  <p><em>Introduction</em></p>  <ul>
<li>identify and briefly describe the business, the premises, the number of employees and the location</li>
<li>include a description of the environment, building and/or facility where the nuclear substance or radiation device is used or stored</li>  </ul>  <p><em>Security organization</em></p>  <ul>
<li>include a description of the radioactive sealed source and its use</li>
<li>identify the security zones (restricted area) and areas accessible by the public in the description of the building</li>
<li>describe the security protocols during routine and non-routine operations</li>
<li>identify the senior management personnel and the roles and responsibilities of staff and those responsible for security (including designating a person responsible for maintaining the site security plan)</li>
<li>provide the details of security arrangements for contractors or employed staff</li>
<li>provide the details of the management arrangements for the facility, especially where these relate to or involve a responsibility for security of the premises</li>  </ul>  <p><em>Security policy</em></p>  <ul>
<li>describe the corporate security policy (if applicable)</li>
<li>include a copy of the memorandum of understanding (MOU) with the jurisdictional police force</li>  </ul>  <p><em>Site plan</em></p>  <ul>
<li>provide a drawing, photograph or other accurate illustration of the site</li>
<li>include all relevant fence lines, boundaries and facilities</li>
<li>show the location of all security systems</li>
<li>show the location of all access and egress points</li>  </ul>  <p><em>Perimeter</em></p>  <ul>
<li>describe the perimeter, including, as appropriate, details of fences, gates/barriers, windows, security lighting, perimeter intrusion detection system (PIDS), closed circuit television camera (CCTV) or any other arrangements (such as reception or a gatehouse)</li>
<li>describe the access and egress points to the site for both pedestrians and vehicles, including access control measures</li>  </ul>  <p><em>Access control</em></p>  <ul>
<li>provide the number of employees on site who are authorized to access the radioactive sources or material (i.e., a list of authorized users and persons with unsupervised access to radioactive substances or material)</li>
<li>include details on access control systems (e.g., card readers or push-btn locks), key or code management, and other general access control procedures</li>
<li>describe the process for visitors and contractors accessing the facility (e.g., escort policy)</li>
<li>include details and processes for screening vehicles and searches for weapons and explosive substances</li>  </ul>  <p><em>Interior security</em></p>  <ul>
<li>provide information for testing assessment devices (e.g., cameras), access control, detection devices, delay measures, response and communication specific to areas where radioactive sources are located</li>  </ul>  <p><em>Storage </em></p>  <ul>
<li>provide a list of buildings, rooms or locations (by name and number or other identifier) where nuclear substances are used, stored or transported</li>
<li>for each building, room or location, include details on:
<ul>
<li>security arrangements for storage of equipment containing sources</li>
<li>means of detecting unauthorized intrusion, either to the equipment or to the storage location</li>
<li>processes or procedures for accessing the licensed facility</li>
<li>type and categorization of nuclear material</li>
</ul>
</li>  </ul>  <p><em>Transportation </em></p>  <ul>
<li>provide a list of vehicles used for the transportation of radioactive sealed sources</li>
<li>describe the security measures in place for transporting sealed sources, including:
<ul>
<li>security arrangements while sources are being transported</li>
<li>means of detecting unauthorized removal of equipment</li>
<li>security processes or procedures to be applied while sources are being transported</li>
</ul>
</li>  </ul>  <p><em>Security of information</em></p>  <ul>
<li>describe the arrangements for the protection of sensitive information regarding the location, nature, storage and movement of radioactive sources</li>
<li>all correspondence related to security (including the site security plan) is marked &#8220;PRESCRIBED INFORMATION&#8221; or &#8220;SECURITY PROTECTED&#8221; and as such, it must be safeguarded and labelled pursuant to sections&nbsp;21 to&nbsp;23 of the <em>General Nuclear Safety and Control Regulations</em></li>
<li>if prescribed information is stored on a company server connected to the Internet, ensure that consideration is given to potential threat and vulnerabilities from IT systems</li>  </ul>  <p><em>Background checks to determine trustworthiness and reliability</em></p>  <ul>
<li>describe the arrangements for verifying the identity and reliability of staff having access to nuclear substances</li>
<li>describe the arrangements for verifying the identity and reliability of persons providing security protection for the facility, including contractors or building maintenance staff</li>  </ul>  <p><em>Maintenance, repair and testing of security systems</em></p>  <ul>
<li>describe the arrangements for the maintenance and testing of all security systems</li>
<li>include information on compensatory measures, performance testing and reliability verification of security systems</li>
<li>describe the process for evaluating the effectiveness of the security maintenance plan, including the frequency for updating the plan in accordance with CNSC expectations (e.g., semi-annual testing)</li>  </ul>  <p><em>Contingency and security response plans</em></p>  <ul>
<li>provide details on the security procedures and instructions to address security measures to respond to loss, theft, destruction, malevolent acts or any other security incident involving radioactive substances or material</li>
<li>include information on emergency plans and event reporting</li>
<li>describe agreements with offsite responders (e.g., police) for alarm response protocol or other security incidents</li>
<li>include procedures that address an increased threat level with details on any compensatory measures that may be required</li>  </ul>  <p><em>Security awareness program</em></p>  <ul>
<li>describe the security awareness program</li>
<li>include any instructions given to employees on security measures</li>
<li>include any restrictions concerning access, use, storage or transportation of radioactive substances or material (including restrictions on contractors, building maintenance staff, and temporary employees)</li>  </ul>  <p><em>References, procedures and security instructions</em></p>  <ul>
<li>include references to existing regulations or standards and/or any procedures related to security</li>  </ul>
<a name="#RDsection[14]#"></a>
<h2><a name="P850_76111" id="P850_76111"></a>Glossary</h2>  <dl className="margins-removed">
<dt>authorized access</dt>
<dd>Access that is granted in writing by the licensee.</dd>
<dt>Category&nbsp;1 source</dt>
<dd>Sources that, if not safely managed or securely protected, would be likely to cause permanent injury to a person who handled them, or were otherwise in contact with them for more that a few minutes. It would probably be fatal to be close to this amount of unshielded material for a period of a few minutes to an hour. These sources are typically used in practices such as radiothermal generators, irradiators and radiation teletherapy.</dd>
<dt>Category&nbsp;2 source</dt>
<dd>Sources that, if not safely managed or securely protected, could cause permanent injury to a person who handled them, or were otherwise in contact with them, for a short time (minutes to hours). It could possibly be fatal to be close to this amount of unshielded radioactive material for a period of hours to days. These sources are typically used in practices such as industrial gamma radiography, high dose rate brachytherapy and medium dose rate brachytherapy.</dd>
<dt>Category&nbsp;3 source</dt>
<dd>Sources that, if not safely managed or securely protected, could cause permanent injury to a person who handled them, or were otherwise in contact with them, for some hours. It could possibly&nbsp;&#8211; although it is unlikely&nbsp;&#8211; be fatal to be close to this amount of unshielded radioactive material for a period of days to weeks. These sources are typically used in practices such as fixed industrial gauges involving high activity sources (for example, level gauges, dredger gauges, conveyor gauges and spinning pipe gauges) and well logging.</dd>
<dt>Category&nbsp;4 source</dt>
<dd>Sources that are very unlikely to permanently injure anyonHowever, this amount of unshielded radioactive material, if not safely managed or securely protected, could possibly&nbsp;&#8211; although it is unlikely&nbsp;&#8211; temporarily injure someone who handled it or was otherwise in contact with it, or who was close to it for a period of many weeks.</dd>
<dt>Category&nbsp;5 source</dt>
<dd>Sources that could not permanently injure someone.</dd>
<dt>criminal records name check (CRNC)</dt>
<dd>A search used to determine if a person has a criminal recorThe search can be based on name and date of birth or&nbsp;&#8211; for much greater assurance&nbsp;&#8211; on fingerprints, for positive identification.</dd>
<dt>designated officer</dt>
<dd>A person designated as a designated officer under section&nbsp;37 of the NSCA.</dd>
<dt>encapsulated source</dt>
<dd>The radioactive material is permanently sealed in a capsule or closely bounded in a solid form.</dd>
<dt>handheld tools</dt>
<dd>Tools and equipment that may be used by an adversary to penetrate a security system or barrier. These tools may include hand tools such as bolt-cutters, pliers or hacksaw blades, power tools, burn bars or cutting torches, as well as any tool or equipment located at the facility. </dd>
<dt>prescribed information</dt>
<dd>Information that concerns any of the following, including a record of that information, is prescribed information for the purposes of the NSCA:</dd>  </dl>  <ul>
<li>a nuclear substance that is required for the design, production, use, operation or maintenance of a nuclear weapon or nuclear explosive device, including the properties of the nuclear substance</li>
<li>the design, production, use, operation or maintenance of a nuclear weapon or nuclear explosive device</li>
<li>the security arrangements, security equipment, security systems and security procedures established by a licensee in accordance with the NSCA, the regulations made under the NSCA or the licence, and any incident relating to security</li>
<li>the route or schedule for the transport of Category&nbsp;I, II or III nuclear material, as defined in section&nbsp;1 of the <em>Nuclear Security Regulations</em></li>  </ul>  <p>Information that is made public in accordance with the NSCA, the regulations made under the NSCA or a licence is not prescribed information for the purposes of the NSCA.</p>  <dl className="margins-removed">
<dt>sabotage</dt>
<dd>Any deliberate act or omission, directed against a nuclear facility or nuclear substances, that:</dd>  </dl>  <ul>
<li>endangers or is likely to endanger the health and safety of any person, or</li>
<li>results or is likely to result in contamination of the environment</li>  </ul>  <dl className="margins-removed">
<dt>sealed source</dt>
<dd>A radioactive nuclear substance in a sealed capsule or in a cover to which the substance is bonded, where the capsule or cover is strong enough to prevent contact with or the dispersion of the substance under the conditions for which the capsule or cover is designed.</dd>
<dt>storage</dt>
<dd>The holding of radioactive sources in an area that provides for their containment with the intention of retrieval.</dd>
<dt>temporary storage</dt>
<dd>Storage during the transportation cycle when a sealed source is unattended.</dd>
<dt>UL</dt>
<dd>Underwriters Laboratories (UL) is a global independent safety science company offering expertise across five key strategic businesses: product safety, environment, life and health, university and verification services.</dd>
<dt>ULC</dt>
<dd>Underwriters Laboratories of Canada (ULC) is an independent product safety testing, certification and inspection organization.</dd>
<dt>unsealed source </dt>
<dd>A source other than a sealed sourcCan be in liquid or solid form, and is commonly used in medical diagnostic and therapeutic treatments, as well as in laboratory research applications.</dd>  </dl>
<a name="#RDsection[15]#"></a>
<h2><a name="P896_81154" id="P896_81154"></a>References</h2>  <ol>
<li><a name="R1" id="R1"></a>International Atomic Energy Agency (IAEA), <em>Code of Conduct on the Safety and Security of Radioactive Sources, </em>Vienna, 2004.</li>
<li><a name="R2" id="R2"></a>IAEA, TECDOC-1344, <em>Categorization of Radioactive Sources</em>, Revision of TECDOC-1191, <em>Categorization of Radiation Sources</em>, 2003.</li>
<li><a name="R3" id="R3"></a>IAEA, TS-R-1, <em>Regulations for the Safe Transport of Radioactive Material</em>, 1996 edition (revised).</li>
<li><a name="R4" id="R4"></a>IAEA, TECDOC-1355, <em>Security of Radioactive Sources&nbsp;&#8211; Interim Guidance for Comment</em>, 2003.</li>
<li><a name="R5" id="R5"></a>IAEA, Safety Guide RS-G-1.9, <em>Categorization of Radioactive Sources</em>, 2005.</li>
<li><a name="R6" id="R6"></a>ASTM F2548-06, <em>Standard Specification for Expanded Metal Fence Systems for Security Purposes</em>, ASTM International, West Conshohocken, PA, 2006, DOI: 10.1520/F2548-06.</li>
<li><a name="R7" id="R7"></a>IAEA, Nuclear Security Series No.&nbsp;7, implementing guide, <em>Nuclear Security Culture</em>, Vienna, 2008.</li>
<li><a name="R8" id="R8"></a>Treasury Board of Canada Secretariat, Government of Canada, <em><a href="http://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=16578&amp;section=text">Policy on Government Security</a></em>, July&nbsp;2009.</li>  </ol>
<a name="#RDsection[16]#"></a>
<h2><a name="P909_82126" id="P909_82126"></a>Additional Information</h2>  <p>The following documents contain additional information that may be of interest to persons involved in security measures for sealed sources.</p>  <ul>
<li>Australian Radiation Protection and Nuclear Safety Agency (ARPANSA), <em>Code of Practice for the Security of Radioactive Sources</em>, Radiation Protection Series Publication No.&nbsp;11, January 2007.</li>
<li>Canadian Nuclear Safety Commission, INFO-9999-4&nbsp;(E) Revision&nbsp;2, <em>Working Safely with Nuclear Gauges</em>, Ottawa, 2007.</li>
<li>IAEA, TECDOC-1276, <em>Handbook on the physical protection of nuclear materials and facilities</em>, 2002.</li>
<li>IAEA, INFCIRC/225/Rev&nbsp;5, <em>Nuclear Security Recommendations on Physical Protection of Nuclear Material and Nuclear Facilities</em>, Nuclear Security Series No.&nbsp;13, 2011 (draft).</li>
<li>IAEA, INFCIRC/663, <em>Code of Conduct on the Safety and Security of Radioactive Sources and the Supplementary Guidance on the Import and Export of Radioactive Sources</em>, 2005.</li>
<li>IAEA, TECDOC-953, <em>Method for the Development of Emergency Response Preparedness for Nuclear or Radiological Accidents</em>, 1997.</li>
<li>IAEA, Nuclear Security Series No.&nbsp;14, <em>Nuclear Security Recommendations on Radioactive Material and Associated Facilities</em>, 2011.</li>
<li>IAEA, Nuclear Security Series No.&nbsp;9, implementing guide, <em>Security in the Transport of Radioactive Material</em>, 2008.</li>
<li>National Counter Terrorism Security Office (UK), <em>Security requirements for radioactive sources</em>, restricted document, April 201</li>
<li>North Atlantic Treaty Organisation (NATO) Science for Peace and Security Series&nbsp;-C:&nbsp;Environmental Security, <em>International Approaches to Securing Radioactive Sources Against Terrorism</em>, edited by W. Duncan Wood and Derek M. Robinson, Springer Science+Business Media, 2009.</li>
<li>United States Nuclear Regulatory Commission (USNRC), <em>Increased controls for licensees that possess sources containing radioactive material quantities of concerns</em>, 2009.</li>  </ul>

                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }