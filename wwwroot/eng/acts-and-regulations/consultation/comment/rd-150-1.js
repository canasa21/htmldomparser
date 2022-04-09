import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "en",
                pageTitle: "Archived Web Page - Draft Regulatory Document RD-150Designing and Implementing a Radiobioassay Program", 
                dateModified: "2012-09-19",
                langToggleUrl: "/fra/acts-and-regulations/consultation/comment/rd-150-1"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<p><strong>Scroll down and the "archived" notice will fade in (at the top of your window)</strong></p>
<p><img src="/dist/js/images/archived/warning.gif" alt="Warning" title="Warning" className="image-actual mrgn-bttm-0" />This Web page has been archived on the Web.</p>
<div id="archived" className="wet-boew-archived col-md-6">
<h2>Archived Content</h2>
<p>Information identified as archived on the Web is for reference, research or recordkeeping purposes. It has not been altered or updated after the date of archiving. Web pages that are archived on the Web are not subject to the Government of Canada Web Standards. As per the <a href="http://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=12316&amp;section=text">Communications Policy of the Government of Canada</a>, you can request alternate formats on the <a href="/eng/contact-us/">Contact Us</a> page.</p>
</div>
<a name="#RDsection[1]#"></a>
<h2>PREFACE</h2>  <p>This regulatory document provides guidance for designing and implementing a radiobioassay monitoring program in accordance with the <i>Nuclear Safety and Control Act</i> (NSCA) and the regulations made under the NSCA.</p>  <p>This document offers fundamental concepts in determining the need for a radiobioassay program, selecting participants for the program, and determining the optimal sampling frequency. This document also suggests methods of interpreting results.</p>  <p>Key principles and elements used in developing this guide are consistent with national and international standards, for example: 83-EHD-87, <i>Bioassay Guideline&nbsp;2&mdash;Guidelines for Tritium Bioassay, Report of the Working Group on Bioassay and in vivo Monitoring Criteria</i>, from Health and Welfare Canada; <i>Human Respiratory Tract Model for Radiological Protection</i> from the International Commission on Radiological Protection (ICRP); and Safety Guide RS-G-1.2, <i>Assessment of Occupational Exposures Due to Intakes of Radionuclides</i>, from the International Atomic Energy Agency (IAEA).</p>  <p>Nothing contained in this document is to be construed as relieving any licensee from pertinent requirements. It is the licensee&rsquo;s responsibility to identify and comply with all applicable regulations and licence conditions.</p>
<a name="#RDsection[2]#"></a>
<p><strong>TABLE OF CONTENTS</strong></p>  <ul>
<li><a href="#1.0">1.0 Purpose</a></li>
<li><a href="#2.0">2.0 Scope</a></li>
<li><a href="#3.0">3.0 Relevant Requirements</a></li>
<li><a href="#4.0">4.0 Selecting Participants</a>
<ul>
<li><a href="#4.1">4.1 Baseline Radiobioassay Monitoring</a></li>
<li><a href="#4.2">4.2 Routine Radiobioassay Monitoring</a></li>
<li><a href="#4.3">4.3 Special Radiobioassay Monitoring</a></li>
<li><a href="#4.4">4.4 Screening</a></li>
</ul>
</li>
<li><a href="#5.0">5.0 Method and Frequency of Radiobioassay</a>
<ul>
<li><a href="#5.1">5.1 Methods of Radiobioassay</a></li>
<li><a href="#5.2">5.2 Determining Frequency</a></li>
<li><a href="#5.3">5.3 Other Dosimetric Considerations</a></li>
</ul>
</li>
<li><a href="#6.0">6.0 Interpretation of Results</a>
<ul>
<li><a href="#6.1">6.1 Reference Levels</a></li>
<li><a href="#6.2">6.2 Putting Radiobioassay Results in Perspective</a></li>
<li><a href="#6.3">6.3 Accuracy of Radiobioassay Results</a></li>
</ul>
</li>
<li><a href="#7.0">7.0 Recording Radiobioassay Results</a></li>
<li><a href="#glossary">Glossary</a></li>
<li><a href="#references">References</a></li>
<li><a href="#additional">Additional Information</a></li>
<li><a href="#A">Appendix A Selecting Participants in a Routine Program Based on Activity Handled</a>
<ul>
<li><a href="#A.1">A.1 Potential Intake Fraction (PIF)</a></li>
<li><a href="#A.2">A.2 Release Factor (R)</a></li>
<li><a href="#A.3">A.3 Confinement Factor (C)</a></li>
<li><a href="#A.4">A.4 Dispersibility Factor (D)</a></li>
<li><a href="#A.5">A.5 Occupancy Factor (O)</a></li>
<li><a href="#A.6">A.6 Special Form Factor (S)</a></li>
<li><a href="#A.7">A.7 Values in Table&nbsp;1</a></li>
</ul>
</li>
<li><a href="#B">Appendix B Examples</a>
<ul>
<li><a href="#B.1">B.1 Example&nbsp;1: Determining Participation in a Radiobioassay Program</a></li>
<li><a href="#B.2">B.2 Example&nbsp;2: Determining the Counting Error (Uncertainty)</a></li>
<li><a href="#B.3">B.3 Example&nbsp;3: Determining the Monitoring Frequency for Intakes of <sup>137</sup>Cs</a></li>
<li><a href="#B.4">B.4 Example&nbsp;4: Determining the Monitoring Frequency for Intakes of <sup>131</sup>I</a></li>
<li><a href="#B.5">B.5 Example&nbsp;5: Derived Investigation Levels for <sup>137</sup>Cs Inhalation</a></li>
</ul>
</li>  </ul>   <a name="1.0"></a>
<h2>1.0 PURPOSE</h2>  <p>This regulatory document provides guidance for designing and implementing a radiobioassay monitoring program in accordance with the <em>Nuclear Safety and Control Act</em> (NSCA, the Act) and the regulations made under the NSCA.</p>   <a name="2.0"></a>
<h2>2.0 SCOPE</h2>
<p>This regulatory document offers fundamental concepts in determining the need for a radiobioassay program, selecting participants for the program, and determining the optimal sampling frequency. This document also suggests methods of interpreting and recording results.</p>   <a name="3.0"></a>
<h2>3.0 RELEVANT REQUIREMENTS</h2>
<p>The provisions of the NSCA and the regulations made under the NSCA relevant to this guide are as follows:</p>
<ol>
<li> Section&nbsp;27 of the NSCA states, in part, that &ldquo;Every licensee and every prescribed person shall (<em>a</em>)&nbsp;keep the prescribed records, including a record of the dose of radiation received by or committed to each person who performs duties in connection with any activity that is authorized by this Act or who is present at a place where that activity is carried on, retain those records for the prescribed time&hellip;&rdquo;;</li>
<li> Paragraph&nbsp;3(1)(<em>e</em>) of the <em>General Nuclear Safety and Control Regulations</em> states that &ldquo;An application for a licence shall contain the following information:&nbsp;&hellip;&nbsp;(<em>e</em>)&nbsp;the proposed measures to ensure compliance with the <em>Radiation Protection Regulations</em>&hellip;&rdquo;;</li>
<li> Section&nbsp;28 of the <em>General Nuclear Safety and Control Regulations</em> states that:<br />
&ldquo;(1)&nbsp;Every person who is required to keep a record by the Act, the regulations made under the Act or a licence shall retain the record for the period specified in the applicable regulations made under the Act or, if no period is specified in the regulations, for the period ending one year after the expiry of the licence that authorizes the activity in respect of which the records are kept.<br />
&ldquo;(2)&nbsp;No person shall dispose of a record referred to in the Act, the regulations made under the Act or a licence unless the person (<em>a</em>)&nbsp;is no longer required to keep the record by the Act, the regulations made under the Act or the licence; and (<em>b</em>)&nbsp;has notified the Commission of the date of disposal and of the nature of the record at least 90&nbsp;days before the date of disposal.<br />
&ldquo;(3)&nbsp;A person who notifies the Commission in accordance with subsection&nbsp;(2) shall file the record, or a copy of the record, with the Commission at its request&rdquo;;</li>
<li> Paragraph&nbsp;4(<em>a</em>) of the <em>Radiation Protection Regulations</em> states, in part, that &ldquo;Every licensee shall implement a radiation protection program and shall, as part of that program, (<em>a</em>)&nbsp;keep the amount of exposure to radon progeny and the effective dose and equivalent dose received by and committed to persons as low as is reasonably achievable, social and economic factors being taken into account, through the implementation of&nbsp;&hellip;&nbsp;(iii)&nbsp;control of occupational and public exposure to radiation&rdquo;;</li>
<li> Subsection&nbsp;5(1) of the <em>Radiation Protection Regulations</em> states that &ldquo;For the purpose of keeping a record of doses of radiation in accordance with section&nbsp;27 of the Act, every licensee shall ascertain and record the magnitude of exposure to radon progeny of each person referred to in that section, as well as the effective dose and equivalent dose received by and committed to that person&rdquo;; </li>
<li> Subsection&nbsp;5(2) of the <em>Radiation Protection Regulations</em> states that &ldquo;A licensee shall ascertain the magnitude of exposure to radon progeny and the effective dose and equivalent dose (<em>a</em>)&nbsp;by direct measurement as a result of monitoring; or (<em>b</em>)&nbsp;if the time and resources required for direct measurement as a result of monitoring outweigh the usefulness of ascertaining the amount of exposure and doses using that method, by estimating them&rdquo;; and</li>
<li> Section&nbsp;24 of the <em>Radiation Protection Regulations</em> states that &ldquo;Every licensee shall keep a record of the name and job category of each nuclear energy worker.&rdquo;</li>  </ol>   <a name="4.0"></a>
<h2>4.0 SELECTING PARTICIPANTS</h2>
<p>The objective of a monitoring program is to determine the criteria for participation in the program, the frequency of monitoring, and the actions taken on the basis of measurement results. </p>
<p>Four types of monitoring programs are described in this section: baseline radiobioassay monitoring, routine radiobioassay monitoring, special radiobioassay monitoring, and screening. Sections&nbsp;5.0 and 6.0 describe the frequency of monitoring and interpreting results.</p>   <a name="4.1"></a>
<h3>4.1 Baseline Radiobioassay Monitoring</h3>
<p>Baseline monitoring consists of assessing, at the start of employment or a new job where radiobioassay monitoring will be involved, a worker&rsquo;s body burden of radionuclides of interest. This assessment determines a background for the new employee.</p>
<p>A baseline radiobioassay should be performed on all workers who participate in a routine radiobioassay monitoring program. The type of baseline measurement should be relevant to the radionuclides for which the worker will be routinely monitored. Baseline monitoring is not required for air monitoring&nbsp;[1,&nbsp;2].</p>   <a name="4.2"></a>
<h3>4.2 Routine Radiobioassay Monitoring</h3>
<p>Doses resulting from intakes of radionuclides should be assessed for all workers who are likely to receive a committed effective dose (CED) exceeding 1&nbsp;mSv per year. When workers are not likely to receive annual doses exceeding 1&nbsp;mSv, the cost of performing routine radiobioassay may not always be justified for the doses involved; therefore, other means of assessing exposure, such as screening, should be considered.</p>
<p>The likelihood of exceeding 1&nbsp;mSv per year may be assessed on the basis of the activity handled by the worker, the type of radionuclides involved, the physical and chemical form of the radionuclides, the type of containment used, and the nature of the operations performed. When one type of radionuclide is handled essentially daily (i.e., approximately 250&nbsp;days per year), workers handling the activities in Table&nbsp;1 should participate in a radiobioassay program. Note that, to decide on participation, monitoring data (if available) should supersede the data in Table&nbsp;1.</p>
<p>The basis for the values in Table&nbsp;1 is presented in Appendix&nbsp;A, <em>Selecting Participants in a Routine Program Based on Activity Handled</em>, and can be used to derive site-specific values. Appendix&nbsp;A defines parameters needed to define the Potential Intake Fraction (PIF). Given a particular scenario of intake, the value ALI&nbsp;/&nbsp;PIF represents the activity handled per day of operation that could result in an annual intake equal to the Annual Limit on Intake (ALI), consequently resulting in a committed effective dose of 20&nbsp;mSv per year. The criterion set for the radiobioassay participation is 1&nbsp;mSv. Therefore, the data shown in Table&nbsp;1 represent the quantity ALI&nbsp;/&nbsp;(20&nbsp;*&nbsp;PIF).</p>
<p><strong><em>Table 1: Activity Handled in Daily Operation Within One Year,<br />
Above Which Radiobioassay is Recommended</em></strong></p>  <table border="1">
<tr>
<td valign="top">&#160; </td>
<td colSpan="2" valign="top"><p><strong>Volatility</strong></p></td>
</tr>
<tr>
<td valign="top"><p><strong>Confinement</strong></p></td>
<td valign="top"><p><strong>Gases, volatile liquids, and powders</strong></p></td>
<td valign="top"><p><strong>Non-volatile liquids and solids</strong></p></td>
</tr>
<tr>
<td valign="top"><p>None</p></td>
<td valign="top"><p>&ge; 2 * ALI</p></td>
<td valign="top"><p>&ge; 200 * ALI</p></td>
</tr>
<tr>
<td valign="top"><p>Fumehood</p></td>
<td valign="top"><p>&ge; 200 * ALI</p></td>
<td valign="top"><p>&ge; 20,000 * ALI</p></td>
</tr>
<tr>
<td valign="top"><p>Glovebox</p></td>
<td valign="top"><p>&ge; 20,000 * ALI</p></td>
<td valign="top"><p>&ge; 2,000,000 * ALI</p></td>
</tr>
<tr>
<td valign="top"><p>Pseudo-sealed</p></td>
<td valign="top"><p>&ge; 50 * ALI</p></td>
<td valign="top"><p>&ge; 10,000 * ALI</p></td>
</tr>  </table>  <p>Radiobioassay is recommended if the worker is required to wear respiratory protection equipment specifically to limit the intake of radionuclides.</p>
<p>Pseudo-sealed sources&nbsp;[3] apply to short half-life radionuclides (less than 7&nbsp;days) that are handled exclusively in sealed vials and syringes and that meet the following conditions:</p>
<ol>
<li> The radiological half-life is less than 7 days,</li>
<li> The handling of radioactivity is more or less uniform throughout the year,</li>
<li> The radioactive material is not aerosolized, or boiled in an open or vented container,</li>
<li> The radioactive material is in the form of a dilute liquid solution, and</li>
<li> The radioactive material is contained in a multi-dose vial that is never opened and amounts are withdrawn only into hypodermic syringes for immediate injection into another multi-dose vial, or another form of closed containment, or into patients.</li>  </ol>
<p>The data in Table&nbsp;1 are provided as generalizations and may not cover all scenarios. It is also assumed that where there are mechanical or other physical barriers in place to protect the worker (such as gloveboxes and fumehoods), the barriers are appropriate for the radioisotope being handled and that they are used as intended and maintained in a proper manner.</p>
<p>When more than one type of radionuclide<strong> </strong>is handled, the following steps should be followed to determine if a worker should participate in a radiobioassay program:</p>
<ol>
<li> Calculate the ratio, r<em><sub>j</sub></em>, of the quantity of one radionuclide, j, handled in daily operation to the maximum quantity of that radionuclide that can be handled in daily operation above which radiobioassay is recommended, from Table&nbsp;1.</li>
<li> Calculate this ratio for all other radionuclides handled.</li>
<li> Add all of the ratios calculated in steps&nbsp;1 and 2 above: <br />
R = &Sigma; r<em><sub>j</sub></em></li>  </ol>
<p>Radiobioassay should be performed for any radionuclides for which r<em><sub>j</sub></em>&nbsp;&ge;&nbsp;1. If R&nbsp;&ge;&nbsp;1, radiobioassay should be performed for any radionuclides for which r<em><sub>j</sub></em>&nbsp;&ge;&nbsp;0.3 [4]. A worked example is provided in Appendix&nbsp;B, <em>Examples</em>, Example&nbsp;1.</p>   <a name="4.3"></a>
<h3>4.3 Special Radiobioassay Monitoring</h3>
<p>Special radiobioassay monitoring is performed to verify an indication of a significant unplanned intake or to assess a worker&rsquo;s dose as a result of a significant unplanned intake. Special radiobioassay monitoring may be triggered by either a routine monitoring result or an abnormal incident suggesting that an action level (as defined in the <em>Radiation Protection Regulations</em>) or the dose limit may have been exceeded. Guidance on special radiobioassay monitoring can be found in regulatory document G-147, <em>Radiobioassay Protocols for Responding to Abnormal Intakes of Radionuclides</em>&nbsp;[5].</p>   <a name="4.4"></a>
<h3>4.4 Screening</h3>
<p>When workers handle unsealed radionuclides but do not meet the criteria for participation in a routine radiobioassay program, it is recommended that intake monitoring be performed in the form of a screening program. The screening frequency may be the same as for routine monitoring or may be different if handling the unsealed radionuclides infrequently (e.g., within a few days after handling), taking into account the biological half-life of the radionuclides.</p>
<p>In a screening program, workers either submit to an in vivo count or submit an in vitro radiobioassay sample (see section&nbsp;5.1). Results are compared to a trigger level, such as the Derived Activity (DA; described in section&nbsp;6.2), without the need for dose assessment or intake estimation. Exceeding the predetermined trigger level should require a confirmation of intake and an investigation.</p>
<p>When a worker frequently exceeds the trigger level, the worker&rsquo;s need to participate in a routine radiobioassay program should be re-evaluated. All screening results should be recorded.</p>   <a name="5.0"></a>
<h2>5.0 METHOD AND FREQUENCY OF RADIOBIOASSAY</h2>
<p>A range of radiobioassay sampling methods can be used (e.g., urine analysis, whole body counting, thyroid counting), according to the type of radioactive material handled and frequency at which workers are monitored.</p>   <a name="5.1"></a>
<h3>5.1 Methods of Radiobioassay</h3>
<p>Methods of radiobioassay measurement are classified in two categories:</p>
<ol>
<li> In vivo radiobioassay refers to direct measurement of the amount of radioactive material deposited in organs, tissues, or the whole body. Common methods are thyroid counting, lung counting, and whole body counting.</li>
<li> In vitro radiobioassay refers to measuring the amount of radioactive material in a sample taken from the body. The most common method is urine analysis. Other methods are fecal, breath, and blood analysis.</li>  </ol>
<p>Several factors should be considered when selecting the method of radiobioassay monitoring. The first factor is the objective of monitoring&mdash;there should be a balance between the needs for intake monitoring and dose assessment [2]. The intake monitoring requires timely information about the occurrence of intakes and should be based on the following indicators of intake, in order of preference:</p>
<ol>
<li> Personal air sampler (PAS), where air sampling is performed in the worker&rsquo;s breathing zone;</li>
<li> In vitro radiobioassay;</li>
<li> In vivo radiobioassay.</li>  </ol>
<p>The radiobioassay methods that should be used for dose assessment purposes are, in order of preference:</p>
<ol>
<li> In vivo radiobioassay;</li>
<li> In vitro radiobioassay;</li>
<li> Personal air sampling.</li>  </ol>
<p>In addition to these factors, the physical characteristics of the radionuclides of interest should be taken into account. Some radionuclides emit radiation that cannot be detected from outside the body. In this case, a decay product may be measured, such as <sup>234</sup>Th when assessing the <sup>238</sup>U lung burden. Alternately, in vitro radiobioassay may be performed. The preferred method of in vitro measurement also depends on the retention and excretion of the radionuclide of interest, including the predominant route of excretion, e.g., urinary, fecal, breath.</p>
<p>Table 2 illustrates selected methods of radiobioassay measurement that may be performed for various radionuclides, taking into account their physical and metabolic characteristics.</p>
<p>Note: In cases where radiobioassay is inadequate for the determination of doses, air monitoring data may be used for dose estimation. See Section 5.2.</p>
<p><strong><em>Table 2: Radiobioassay Methods for Various Radionuclides</em></strong></p>  <table border="1">
<tr>
<td colSpan="2" valign="top"><p><strong>Radiobioassay Method</strong></p></td>
<td colSpan="3" valign="top"><p><strong>Radionuclide</strong></p></td>
</tr>
<tr>
<td colSpan="5" valign="top"><p>1) In vivo</p></td>
</tr>
<tr>
<td valign="top">&#160; </td>
<td valign="top"><p>Whole body counting</p></td>
<td valign="top"><p><sup>11</sup>C<sup><br />
51</sup>Cr<sup><br />
54</sup>Mn<sup><br />
59</sup>Fe<sup><br />
57</sup>Co, <sup>58</sup>Co, <sup>60</sup>Co<sup><br />
85</sup>Sr</p></td>
<td valign="top"><p><sup>95</sup>Zr/<sup>95</sup>Nb<sup><br />
106</sup>Ru<sup><br />
110m</sup>Ag<sup><br />
124</sup>Sb, <sup>125</sup>Sb<sup><br />
134</sup>Cs, <sup>137</sup>Cs</p></td>
<td valign="top"><p><sup>144</sup>Ce<sup><br />
203</sup>Hg<sup><br />
226</sup>Ra, <sup>228</sup>Ra<sup><br />
235</sup>U, <sup>238</sup>U<sup><br />
252</sup>Cf</p></td>
</tr>
<tr>
<td valign="top">&#160; </td>
<td valign="top"><p>Lung counting</p></td>
<td valign="top"><p><sup>14</sup>C*<sup><br />
60</sup>Co<sup><br />
235</sup>U, <sup>238</sup>U</p></td>
<td valign="top"><p><sup>239</sup>Pu, <sup>240</sup>Pu<sup><br />
241</sup>Am</p></td>
<td valign="top"><p><sup>242</sup>Cm, <sup>244</sup>Cm<sup><br />
252</sup>Cf</p></td>
</tr>
<tr>
<td valign="top">&#160; </td>
<td valign="top"><p>Thyroid counting</p></td>
<td valign="top"><p><sup>125</sup>I, <sup>131</sup>I</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td colSpan="5" valign="top"><p>2) In vitro</p></td>
</tr>
<tr>
<td valign="top">&#160; </td>
<td valign="top"><p>Liquid scintillation counting (&beta;-counting) of urine samples</p></td>
<td valign="top"><p><sup>3</sup>H<sup><br />
14</sup>C<sup><br />
32</sup>P, <sup>33</sup>P</p></td>
<td valign="top"><p><sup>35</sup>S <sup><br />
36</sup>Cl</p></td>
<td valign="top"><p><sup>45</sup>Ca<sup><br />
129</sup>I</p></td>
</tr>
<tr>
<td valign="top">&#160; </td>
<td valign="top"><p>Liquid scintillation counting of urine after chemical separation</p></td>
<td valign="top"><p><sup>14</sup>C</p></td>
<td valign="top"><p><sup>89</sup>Sr ,<sup>90</sup>Sr</p></td>
<td valign="top"><p><sup>228</sup>Ra</p></td>
</tr>
<tr>
<td valign="top">&#160; </td>
<td valign="top"><p>&beta;-counting of CO<sub>2</sub> from breath</p></td>
<td valign="top"><p><sup>14</sup>C</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top">&#160; </td>
<td valign="top"><p>&beta;-counting of fecal sample after chemical separation</p></td>
<td valign="top"><p><sup>14</sup>C</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top">&#160; </td>
<td valign="top"><p>&beta;-counting of tritiated water in breath</p></td>
<td valign="top"><p><sup>3</sup>H</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top">&#160; </td>
<td valign="top"><p>Gamma spectroscopy of urine samples</p></td>
<td valign="top"><p><sup>57</sup>Co, <sup>58</sup>Co, <sup>60</sup>Co</p></td>
<td valign="top"><p><sup>85</sup>Sr<sup><br />
106</sup>Ru</p></td>
<td valign="top"><p><sup>125</sup>I,<sup> 131</sup>I<sup><br />
134</sup>Cs, <sup>137</sup>Cs</p></td>
</tr>
<tr>
<td valign="top">&#160; </td>
<td valign="top"><p>Gamma spectroscopy of fecal samples after chemical separation</p></td>
<td valign="top"><p><sup>60</sup>Co</p></td>
<td valign="top"><p><sup>144</sup>Ce</p></td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top">&#160; </td>
<td valign="top"><p>Alpha spectroscopy of urine/fecal sample after radiochemical separation</p></td>
<td valign="top"><p><sup>226</sup>Ra<sup><br />
228</sup>Th, <sup>232</sup>Th<sup><br />
234</sup>U, <sup>235</sup>U, <sup>238</sup>U</p></td>
<td valign="top"><p><sup>238</sup>Pu, <sup>239</sup>Pu, <br />
<sup>240</sup>Pu</p></td>
<td valign="top"><p><sup>241</sup>Am<sup><br />
242</sup>Cm, <sup>244</sup>Cm</p></td>
</tr>
<tr>
<td valign="top">&#160; </td>
<td valign="top"><p>Fluorimetry, Phosphorimetry</p></td>
<td valign="top"><p>Uranium</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>
<tr>
<td valign="top">&#160; </td>
<td valign="top"><p>ICP-MS</p></td>
<td colSpan="2" valign="top"><p><sup>234</sup>U, <sup>235</sup>U, <sup>238</sup>U</p></td>
<td valign="top"><p><sup>238</sup>Pu, <sup>239</sup>Pu</p></td>
</tr>
<tr>
<td valign="top">&#160; </td>
<td valign="top"><p>TIMS</p></td>
<td valign="top"><p><sup>238</sup>Pu, <sup>239</sup>Pu</p></td>
<td valign="top">&#160; </td>
<td valign="top">&#160; </td>
</tr>  </table>
<p><a name="P286_18200" id="P286_18200"></a>* Using a phoswich detector system.</p>   <a name="5.2"></a>
<h3>5.2 Determining Frequency</h3>
<p>When selecting a routine monitoring frequency, the main factors to be taken into account are:</p>
<ol>
<li> The workplace characteristics;</li>
<li> The uncertainty in the time of intake;</li>
<li> Instrument sensitivity;</li>
<li> The need for timely information concerning the occurrence of intakes; and</li>
<li> The cost of implementing the monitoring program.</li>  </ol>
<p>For each radionuclide in the workplace, the physical and chemical form should be known for both routine and accident conditions. These forms determine the biokinetic behaviour of each radionuclide, and therefore their excretion routes and rates. In turn, this behaviour helps to determine the radiobioassay method.</p>
<p>The retention and excretion depends mainly on the chemical form of the radionuclide. Inhaled compounds are classified into three types, based on their rate of absorption from the lung to blood: F (Fast), M (Moderate), and S (Slow). For example, a type F compound such as UF<sub>6</sub> is absorbed into blood relatively quickly from the lungs. Type S compounds, such as UO<sub>2</sub>, remain in the lungs for a longer period of time. Default lung absorption rates are available in <em>Human Respiratory Tract Model for Radiological Protection</em>, International Commission on Radiological Protection, Publication 66, Vol. 24, No. 1-3 [6] for the three lung clearance types and criteria for absorption type classification when site specific data are used to characterize workplace air.</p>
<p>Another factor in selecting a routine monitoring frequency is the uncertainty in the intake estimate, due to the unknown time of intake (see Appendix B, <em>Examples</em>, Figures B3 and B4). For weekly monitoring, there is greater uncertainty in the time of intake in the case of urinary excretion (see Appendix B, Figure B4) due to the larger variation in excretion rate in the first days post-intake. Routine measurement results should be assessed in such a way that the intake is assumed to have taken place at the mid-point in the monitoring period.</p>
<p>Instrument sensitivity has a significant impact on the monitoring frequency. The latter should be selected so as to ensure that significant doses are not missed. A dose could be missed if following an intake, the body content rendered by excretion rate was reduced to a level less than the instrument&rsquo;s Minimum Detectable Amount (MDA) during the time between intake and measurement. When practicable, the monitoring period should be such that annual intakes corresponding to a total committed dose of 1 mSv do not go undetected. If this cannot be achieved, workplace monitoring and personal air sampling should be used to supplement intake monitoring. By applying the appropriate metabolic model and assuming a pattern of intake, a suitable monitoring period can be determined.</p>
<p>The Derived Activity (DA) may be defined as follows:</p>
<p><img src="/eng/acts-and-regulations/consultation/comment/rd-150/images/RD-150_draft2_e-2.gif" alt="RD-150_Draft" width="169" height="41" /></p>
<p>where:</p>
<table className="table table-striped">
<tr>
<td valign="top"><p>T</p></td>
<td valign="top"><p>=</p></td>
<td valign="top"><p>the monitoring period</p></td>
</tr>
<tr>
<td valign="top"><p><em>m</em>(<img src="/eng/acts-and-regulations/consultation/comment/rd-150/images/RD-150_draft2_e-3.gif" alt="RD-150_Draft" width="25" height="32" />)</p></td>
<td valign="top"><p>=</p></td>
<td valign="top"><p>the fraction of the intake that is retained in a tissue, organ or the whole body, or excreted from the body, at the mid-point in the monitoring period (see Appendix B, <em>Examples</em>, Figures B1 to B4)</p></td>
</tr>  </table>
<p>Values of <em>m</em>(<img src="/eng/acts-and-regulations/consultation/comment/rd-150/images/RD-150_draft2_e-3.gif" alt="RD-150_Draft"  width="25" height="32" />) can be obtained from <em>Individual Monitoring for Internal Exposure of Workers, Replacement of ICRP Publication 54</em>, International Commission on Radiological Protection, Publication 78 [7], addressing monitoring for intakes of radionuclides.</p>
<p>The recommended maximum monitoring period is taken as the time at which the DA is equal to the MDA. The detection limit (i.e<em>.</em>, the MDA) [8] can be defined as follows:</p>
<p>MDA = (<img src="/eng/acts-and-regulations/consultation/comment/rd-150/images/RD-150_draft2_e-4.gif" alt="RD-150_Draft" width="23" height="41" />)(2.71 + 4.65&sigma;<sub>b</sub>)</p>
<p>where:</p>
<table className="table table-striped">
<tr>
<td valign="top"><p>K</p></td>
<td valign="top"><p>=</p></td>
<td valign="top"><p>a calibration factor (K depends on the radionuclide and detection efficiency)</p></td>
</tr>
<tr>
<td valign="top"><p>t</p></td>
<td valign="top"><p>=</p></td>
<td valign="top"><p>the count time for the procedure</p></td>
</tr>
<tr>
<td valign="top"><p>&sigma;<sub>b</sub></p></td>
<td valign="top"><p>=</p></td>
<td valign="top"><p>the standard deviation of the count obtained from uncontaminated personnel</p></td>
</tr>  </table>  <p>For in vitro radiobioassay:</p>
<p>K = E V Y e<sup>-&lambda;&Delta;t</sup></p>
<p>where:</p>  <table className="table table-striped">
<tr>
<td valign="top"><p>E</p></td>
<td valign="top"><p>=</p></td>
<td valign="top"><p>the counting efficiency</p></td>
</tr>
<tr>
<td valign="top"><p>V</p></td>
<td valign="top"><p>=</p></td>
<td valign="top"><p>the sample size in units of mass or volume</p></td>
</tr>
<tr>
<td valign="top"><p>Y</p></td>
<td valign="top"><p>=</p></td>
<td valign="top"><p>the fractional chemical yield, when applicable<br />
(note: if not applicable, Y=1)</p></td>
</tr>
<tr>
<td valign="top"><p>&lambda;</p></td>
<td valign="top"><p>=</p></td>
<td valign="top"><p>the radioactive decay constant of the radionuclide</p></td>
</tr>
<tr>
<td valign="top"><p>&Delta;t</p></td>
<td valign="top"><p>=</p></td>
<td valign="top"><p>the time between sample collection and counting</p></td>
</tr>  </table>  <p>For in vivo radiobioassay, K is the counting efficiency, including a correction for self-absorption when appropriate.</p>
<p>Generally, K must be determined by personnel performing radiobioassay measurements. More information on MDAs for radiobioassay can be found in <em>American National Standard&ndash;Performance Criteria for Radiobioassay</em>, Health Physics Society [8].</p>
<p>Using this method for monitoring period determination, a recommended monitoring period of one year could be possible for some radionuclides. However, most individuals&rsquo; retention and excretion rates tend to vary from the model on which the DA values are based. Also, timely information about the occurrence of intakes is needed. There should be a balance between using radiobioassay as an intake indicator and for dose assessment purposes. To account for this, a monitoring period shorter than one year may be selected depending on other types of monitoring in place (such as workplace air monitoring), and the practicability of carrying out the radiobioassay measurements. Monitoring periods have been recommended in radionuclide-specific reports (such as for uranium dose assessment [9]).</p>   <a name="5.3"></a>
<h2>5.3 Other Dosimetric Considerations</h2>
<p>In addition to the recommendation that <sup>1</sup>/<sub>20</sub>&nbsp;ALI intakes be detectable throughout the monitoring period, other dosimetric considerations can be used to help in determining radiobioassay frequency.</p>
<p>ICRP has recommended that the accuracy should be better than a factor of 2&nbsp;[7] at the 95% confidence level for doses received from external sources of exposure, but that for internal exposures this level of accuracy may not always be possible. Uncertainty due to the unknown time of intake is only one component of the overall uncertainty in the dose calculation. The monitoring periods recommended in <em>Individual Monitoring for Internal Exposure of Workers, Replacement of ICRP Publication&nbsp;54</em>, International Commission on Radiological Protection, Publication&nbsp;78&nbsp;[7], accept a factor of 3 uncertainty in intake due to this unknown time of exposure during the monitoring period. If there are several monitoring periods in the year, the overall uncertainty in the annual intake, and committed dose, would likely be less than this factor of 3&nbsp;[10]. Exposure to some internal sources, such as low levels of tritiated water in some CANDU reactor environments, may occur continually throughout the monitoring period.</p>
<p>In some cases, the best available monitoring methods may still be unable to detect reliably activities corresponding to the <sup>1</sup>/<sub>20</sub>&nbsp;ALI (1&nbsp;mSv per year). In these circumstances it is useful to determine the maximum dose that could be missed were an intake to occur at the start of each monitoring period. Such an approach provides a useful perspective for some difficult internal hazards&nbsp;[11] but can become overly conservative, particularly when there are several monitoring periods per year.</p>   <a name="6.0"></a>
<h2>6.0 INTERPRETATION OF RESULTS</h2>   <a name="6.1"></a>
<h3>6.1 Reference Levels</h3>
<p>A reference level is the value of measured quantities above which some specified action or decision should be taken.</p>
<p>Reference levels may be used for interpreting workplace or radiobioassay monitoring data and to signal potential intakes. Applicable to routine and special radiobioassay monitoring programs, these levels allow a graded response to potential intakes and therefore are not intended to be a regulatory limit per se. Reference levels are typically expressed as fractions of the ALI. The sum of ratios (intake over ALI) should be used when more than one radionuclide is involved.</p>
<p>Because radiobioassay monitoring programs rarely measure intake, derived reference levels&ndash;expressed in terms of the quantity that is measured&ndash;are generally a more useful quantity. A derived reference level is the bioassay-determined activity due to occupational sources. The derived reference level for a particular radiobioassay measurement is expressed in the same units as the radiobioassay measurement results. For routine radiobioassay programs, reference levels should be based on an assumption of intake at the mid-point in the monitoring period.</p>
<p>For some radionuclides and types of radiobioassay, non-occupational sources (such as uranium and cesium) may cause typical results to exceed the analytical decision level and a derived reference level. If radiobioassay results normally or often exceed a derived reference level due to non-occupational sources, the derived reference level may be increased if expected radiobioassay results due to non-occupational sources are known (a study using a control group with similar non-occupational exposure but no potential for occupational exposure may be used for this purpose). The adjusted derived reference level is set no higher than the 99 percentile of the control group [2]. If non-occupational levels exceed the Derived Investigation Level (DIL), then alternate methods of intake monitoring should be used if possible.</p>
<p>The reference levels used in this report are the DA, the Investigation Level (IL), and the DIL. The DA is defined in Section 5.2. The IL and DIL are defined below.</p>
<p>IL = (0.3 ALI) (<img src="/eng/acts-and-regulations/consultation/comment/rd-150/images/RD-150_draft2_e-5.gif" alt="RD-150_draft" width="31" height="41" />)</p>
<p><img src="/eng/acts-and-regulations/consultation/comment/rd-150/images/RD-150_draft2_e-6.gif" alt="RD-150_draft" width="225" height="41" /></p>
<p>where:</p>
<table className="table table-striped">
<tr>
<td valign="top"><p>T</p></td>
<td valign="top"><p>=</p></td>
<td valign="top"><p>the monitoring period in days</p></td>
</tr>
<tr>
<td valign="top"><p><em>m</em>(<img src="/eng/acts-and-regulations/consultation/comment/rd-150/images/RD-150_draft2_e-3.gif" alt="RD-150_draft" width="25" height="32" />)</p></td>
<td valign="top"><p>=</p></td>
<td valign="top"><p>the fraction of the intake that is retained in a tissue, organ or the whole body, or excreted from the body, at the mid-point in the monitoring period</p></td>
</tr>  </table>
<p>An example of a DIL table for <sup>137</sup>Cs inhalation of type F compounds is given in Appendix B, <em>Examples</em>, Table B2.</p>
<p>To account for the reduced dose limit for pregnant workers, a DIL for pregnant workers should be established. Given that the pregnant worker dose limit is 4 mSv for the remainder of pregnancy, ensuring that the pregnant worker&rsquo;s dose is &lt; 0.5 mSv per month helps to ensure the 4 mSv limit is not exceeded. Consequently, a DIL for pregnant workers, DIL<sub>PW</sub>, may be set as:</p>
<p><img src="/eng/acts-and-regulations/consultation/comment/rd-150/images/RD-150_draft2_e-7.gif"  alt="RD-150_draft" width="197" height="41" /></p>   <a name="6.2"></a>
<h3>6.2 Putting Radiobioassay Results in Perspective</h3>
<p>Radiobioassay results may be interpreted by comparison with derived reference levels. Table&nbsp;3 provides suggested reference levels that may form the basis for interpreting radiobioassay results and for taking appropriate actions.</p>
<p><strong><em>Table 3: Derived Reference Levels and Recommended Corresponding Actions</em></strong></p>
<p><strong>Radiobioassay Result</strong></p>  <p><strong>Recommended Action</strong></p>
<p>&lt;&nbsp;DA</p>  <p>Record the radiobioassay measurement result.</p>
<p>DA&nbsp;&le; result &lt;&nbsp;DIL</p>  <p>Confirm and record the radiobioassay measurement result.</p>
<p>If the result is confirmed, assess the CED.</p>  <p>&ge;&nbsp;DIL</p>
<p>Confirm and record the radiobioassay measurement result.</p>
<p>If the result is confirmed, assess the CED.</p>  <p>Investigate to find and correct the cause of the intake.</p>
<p>To assess the CED, the radiobioassay results should first be combined with <em>m</em>(T/2) to estimate the intake:</p>
<p><img src="/eng/acts-and-regulations/consultation/comment/rd-150/images/RD-150_draft2_e-8.gif"  alt="RD-150-Draft" width="160" height="53" /></p>
<p>The CED can then be estimated by setting:</p>
<p>CED&nbsp;=&nbsp;Intake&nbsp;&times;&nbsp;e(50)</p>
<p>where e(50) is the dose per unit intake for the radionuclide, particle size and chemical form of interest&nbsp;[12].</p>   <a name="6.3"></a>
<h3>6.3 Accuracy of Radiobioassay Results</h3>
<p>Many components contribute to the overall accuracy of a dose estimate. These include the accuracy of:</p>
<ol>
<li> The detector system,</li>
<li> The measurement methodology,</li>
<li> The biological model used to relate the observable internal radioactivity to the radiation dose received, and</li>
<li> The uncertainty of the actual time of internalization of the radioactivity relative to the time of the radiobioassay measurement.</li>  </ol>
<p>This section deals only with the accuracy of components&nbsp;1 and&nbsp;2. All aspects of the biological model uncertainty, which sometimes may be the predominant source of inaccuracy and uncertainty in the final dose estimation, are detailed in <em>Reliability of the ICRP&rsquo;s Systemic Biokinetic Models</em>, Radiation Protection Dosimetry, Vol.&nbsp;79, R.W.&nbsp;Leggett&nbsp;[13]. Uncertainties related to the time of intake with respect to the time at which the monitoring is performed are discussed briefly in section&nbsp;5.2.</p>
<p>In designing and setting up any radiobioassay monitoring program, it is important to consider the accuracy of the instrumentation relative to the measurement that has to be made. The complete measurement system should be such that any error in the final measurement would have a minor influence on the overall accuracy of the estimated radiation dose received by the worker. As some of the other uncertainties (i.e., items&nbsp;3 and 4, above) are significant, it is considered adequate that the detection instrument component of the uncertainty lies within the range -25% to +50%&nbsp;[14].</p>
<p>The following considerations should be included in the evaluation of detection instrument accuracy and measurement methodology:</p>
<ol>
<li> The net statistical counting error.<br />
<br />
This includes the statistical error in the radiobioassay count and the statistical error in the measurement of the background count rate. The background count rate measured should be appropriate for the standard, sample or subject.<br />
<br />
</li>
<li> The error caused by variations in counting geometry.<br />
<br />
This should include allowances for physical variations in the subjects or samples being counted, particularly as related to the specific counting equipment being used.<br />
<br />
</li>
<li>The error introduced by the attenuation of the emitted radiation by overlying tissue during in vivo counting.<br />
<br />
The effect of overlying tissue should be considered where the gamma emission of a nuclide in question is less than 200&nbsp;keV&nbsp;[15], or where <em>Bremsstrahlung</em> from beta emissions are being counted. This requires the estimation of the average depth and density of the overlying tissue, which may vary significantly from one individual to another.<br />
<br />
</li>
<li> The instrument calibration with respect to the isotope being measured in a geometry that is relevant to the actual measurement.<br />
<br />
The response of the radiobioassay instrument should be calibrated with respect to the isotope of interest and a regular quality control program should be in place to ensure that this calibration is constantly maintained. Frequent internal checks using a long-lived radioactive source should be performed on a regular basis to confirm that the detector response is constant over time and that the instrument is functioning properly.</li>  </ol>
<p>Appendix&nbsp;B, <em>Examples</em>, Example&nbsp;2 provides a sample calculation of counting error on a radiobioassay result.</p>   <a name="7.0"></a>
<h2>7.0 RECORDING RADIOBIOASSAY RESULTS</h2>
<p>A record of radiobioassay results enables dose data to be traced for future dose reconstructions.</p>
<p>To comply with Section&nbsp;27 of the NSCA, Section&nbsp;28 of the <em>General Nuclear Safety and Control Regulations</em>, and Subsection&nbsp;5(1) and Section&nbsp;24 of the <em>Radiation Protection Regulations</em>, a radiobioassay record shall be kept for each individual participating in the radiobioassay program, and this record shall clearly identify the employee by name and job category. Additional information may be required to comply with licence conditions. For each dosimetry period, the radiobioassay data should be kept, as well as the date the measurement was taken. Records should also include instrument quality control, calibration results, and records of traceability to primary or secondary laboratories.</p>
<p>Requirements for record-keeping are specified in the licence or are found in Section&nbsp;28 of the <em>General Nuclear Safety and Control Regulations</em>.&nbsp;</p>
<a name="#RDsection[20]#"></a>
<h2>GLOSSARY</h2>  <p><strong>Absorbed dose (D)</strong></p>  <p>The energy absorbed through exposure to radiation per unit mass. The SI unit for D is gray&nbsp;(Gy).</p>  <p><strong>Analytical decision level</strong></p>  <p>The amount of a count or final instrument measurement of a quantity of analyte at or above which a decision is made that a positive quantity of the analyte is present.</p>  <p><strong>Annual limit on intake (ALI)</strong></p>  <p>The activity of a radionuclide that, when taken into the body, results in a CED of 20&nbsp;mSv.</p>  <p><strong>Biological half-life </strong></p>  <p>The time required for a biological system, such as a person, to eliminate by natural processes (other than radioactive decay) one-half of the amount of a substance, such as a radionuclide, that has entered it.</p>  <p><strong>Biokinetic model</strong></p>  <p>A mathematical description of the behaviour of radionuclides in the metabolic processes of cells, tissues, organs and organisms. It is most frequently used to describe distribution of radionuclides among tissues and excretion.</p>  <p><strong>Bremsstrahlung</strong></p>  <p>Electromagnetic radiation produced by the deceleration of a charged particle, such as an electron, when deflected (change of momentum) by another charged particle, such as an atomic nucleus.</p>  <p><strong>Committed effective dose (CED) (E(50))</strong></p>  <p>The effective dose resulting from intake of a radioactive substance. The dose is accumulated over a period of 50&nbsp;years after initial intake. The SI unit for CED is the sievert&nbsp;(Sv).</p>  <p><strong>Derived activity (DA)</strong></p>  <p>The expected retention or excretion rate, either expressed as Bq or Bq/d, from a single measurement of a radionuclide made at the end of a monitoring period, such that the corresponding extrapolated annual committed effective dose is equal to 1&nbsp;mSv. The DA is calculated assuming the intake occurs at the mid-point in the monitoring period.</p>  <p><strong>Derived air concentration (DAC)</strong></p>  <p>The concentration of a radionuclide in air that, when inhaled at a breathing rate of 1.2&nbsp;m<sup>3</sup> per hour for 2,000&nbsp;hours per year, results in the intake of 1&nbsp;ALI.</p>  <p><strong>Derived investigational level (DIL)</strong></p>  <p>When a program of monitoring for internal contamination is in place, it is usual to determine, ahead of time, levels of contamination above which certain actions are initiated. The derived investigational level (DIL) is the level that triggers an investigation and dose assessment.</p>  <p><strong>Derived reference level</strong></p>  <p>Bioassay-determined activity due to occupational sources.</p>  <p><strong>Effective dose (E)</strong></p>  <p>The sum of the products, in sievert, obtained by multiplying the equivalent dose of radiation received by and committed to each organ or tissue set out in column&nbsp;1 of an item of Schedule&nbsp;1 (<em>Radiation Protection Regulations</em>) by the tissue weighting factor set out in column&nbsp;2 (<em>Radiation Protection Regulations</em>) of that item.</p>  <p><strong>Equivalent dose (H<sub>T</sub>) </strong></p>  <p>The product, in sievert, obtained by multiplying the absorbed dose of radiation of the type set out in column&nbsp;1 of an item of Schedule&nbsp;2 (<em>Radiation Protection Regulations</em>) by the radiation weighting factor set out in column&nbsp;2 (<em>Radiation Protection Regulations</em>) of that item.</p>  <p><strong>Excretion function (m)</strong></p>  <p>A mathematical expression for the fractional excretion of a radionuclide from the body at any time following intake, generally expressed as becquerels excreted per day, per becquerel taken in.</p>  <p><strong>Intake </strong></p>  <p>The amount of a radionuclide taken into the body by inhalation, absorption through the skin, injection, ingestion, or through wounds.</p>  <p><strong>Investigational level (IL)</strong></p>  <p>An indicator of intake (in Bq) of radioactive substance that requires special monitoring of the worker; typically expressed as a fraction of ALI.</p>  <p><strong>In vitro radiobioassay</strong></p>  <p>Measurements to determine the presence of, or to estimate the amount of, radioactive material in excreta or other biological materials excreted or removed from the body.</p>  <p><strong>In vivo radiobioassay</strong></p>  <p>Measurements of radioactive material in the body using instruments that detect radiation emitted from the radioactive material in the body.</p>  <p><strong>Minimum detectable amount (MDA)</strong></p>  <p>The smallest amount (activity or mass) of a radionuclide (or analyte) in a sample that will be detected with a probability &beta; of non-detection (Type&nbsp;II error) while accepting a probability &alpha; of erroneously deciding that a positive (non-zero) quantity of analyte is present in an appropriate blank (Type&nbsp;I error).</p>  <p><strong>Personal air sampler (PAS)</strong></p>  <p>An air sampler, consisting of a filter holder and battery-powered vacuum pump, worn by a worker to estimate breathing zone concentrations of radionuclides. Personal air samplers are also called lapel samplers.</p>  <p><strong>Potential intake fraction (PIF)</strong></p>  <p>A dimensionless quantity that defines intake as a fraction of exposure to contamination. A function of several factors: release, confinement, dispersability, occupancy. For example, PIF=0 for encapsulated material, as no radioactive particles can penetrate into a worker&rsquo;s body.</p>  <p><strong>Radiation weighting factor</strong></p>  <p>The factor by which the absorbed dose is weighted for the purpose of determining the equivalent dose. The radiation weighting factor for a specified type and energy of radiation has been selected to be representative of values of the relative biological effectiveness (RBE) of that radiation in inducing stochastic effects at low doses. The RBE of one radiation compared with another is the inverse ratio of the absorbed doses producing the same degree of a defined biological end point&nbsp;[16].</p>  <p><strong>Radiobioassay</strong></p>  <p>Measurement of the amount or concentration of a radionuclide in the body or in biological material excreted or removed from the body and analyzed for purposes of estimating the quantity of radionuclide in the body.</p>  <p><strong>Sievert (Sv)</strong></p>  <p>Unit of equivalent dose, effective dose, and CED. One sievert is defined as one joule of energy absorbed per kilogram of tissue multiplied by an appropriate, dimensionless, weighting factor. See also &ldquo;equivalent dose&rdquo; and &ldquo;effective dose&rdquo;.</p>  <p><strong>Tissue weighting factor</strong></p>  <p>The factor by which the equivalent dose is weighted for the purpose of determining the effective dose. The tissue weighting factor for an organ or tissue represents the relative contribution of that organ or tissue to the total detriment due to effects resulting from uniform irradiation of the whole body&nbsp;[16].</p>
<a name="#RDsection[21]#"></a>
<h2>REFERENCES</h2>  <ol>
<li> U.S. Department of Energy, <em>DOE Standard Internal Dosimetry</em>, DOE-STD-1121-98, 1999.</li>
<li> Health Physics Society, <em>American National Standard-Design of Internal Dosimetry Programs</em>, ANSI/HPS&nbsp;N13.39-2001.</li>
<li> Canadian Nuclear Safety Commission, <em>Designing and Implementing a Radiobioassay Program</em>, Report of the CNSC Working Group on Internal Dosimetry, RSP-0182A.</li>
<li> International Atomic Energy Agency, <em>Assessment of Occupational Exposures Due to Intakes of Radionuclides</em>, Safety Guide RS-G-1.2, 1999.</li>
<li> Canadian Nuclear Safety Commission, <em>Radiobioassay Protocols for Responding to Abnormal Intakes of Radionuclides</em>, Regulatory Guide G-147, 2003(b).</li>
<li> International Commission on Radiological Protection, <em>Human Respiratory Tract Model for Radiological Protection</em>, Publication&nbsp;66, Vol.&nbsp;24, No.&nbsp;1-3, Pergamon Press, 1994.</li>
<li> International Commission on Radiological Protection, <em>Individual Monitoring for Internal Exposure of Workers, Replacement of ICRP Publication&nbsp;54, </em>Publication&nbsp;78, Pergamon Press, 1997.</li>
<li> Health Physics Society, <em>American National Standard&ndash;Performance Criteria for Radiobioassay</em>, HPS&nbsp;N13.30-1996.</li>
<li> Canadian Nuclear Safety Commission, <em>Uranium Intake&ndash;Dose Estimation Methods</em>, Report of the CNSC Working Group on Internal Dosimetry, RPS-0165, 2003(c).</li>
<li> Health and Welfare Canada, <em>Bioassay Guideline&nbsp;2&mdash;Guidelines for Tritium Bioassay, Report of the Working Group on Bioassay and in vivo Monitoring Criteria</em>, Environmental Health Directorate, 83-EHD-87, 1983.</li>
<li> Health and Welfare Canada, <em>Bioassay Guideline&nbsp;4&mdash;Guidelines for Uranium Bioassay</em>, 88-EHD-139, 1987.</li>
<li> International Commission on Radiological Protection, <em>Dose Coefficients for Intakes of Radionuclides by Workers</em>, Publication&nbsp;68, Vol.&nbsp;24, No.&nbsp;4, Pergamon Press, 1995.</li>
<li> Leggett, R.W., <em>Reliability of the ICRP&rsquo;s Systemic Biokinetic Models</em>, Radiation Protection Dosimetry, Vol.&nbsp;79, 1998.</li>
<li> Canadian Nuclear Safety Commission, <em>Technical and Quality Assurance Requirements for Dosimetry Services</em>, S-106 rev&nbsp;1, 2006.</li>
<li> International Commission on Radiological Protection, <em>Basic Anatomical and Physiological Data for Use in Radiological Protection: Reference Values</em>, Publication&nbsp;89, 2002.</li>
<li> International Commission on Radiological Protection, <em>1990 Recommendations of the International Commission on Radiological Protection</em>, Vol.&nbsp;21, No.&nbsp;1-3, Publication&nbsp;60, 1991.</li>
<li> Hickey, E.E., Stoetzel, G.A., McGuire, S.A., Strom, D.J., Cicotte, G.R., Wiblin, C.M., <em>Air Sampling in the Workplace</em>, NUREG-1400, 1993.</li>
<li> Brodsky, A., <em>Resuspension Factors and Probabilities of Intake of Material in Process (or is 10<sup>-6</sup> a magic number in health physics?)</em>, Health Physics, Vol.&nbsp;39, No.&nbsp;6, pp.&nbsp;992-1000, 1980.</li>
<li> Knoll, G.F., <em>Radiation Detection and Measurement</em>, John Wiley &amp; Sons, 2000.</li>  </ol>
<a name="#RDsection[22]#"></a>
<h3><strong>ADDITIONAL INFORMATION</strong></h3>  <p>The following documents contain additional information that may be of interest to persons involved in designing and implementing a radiobioassay program:</p>  <ol>
<li> Canadian Nuclear Safety Commission,<em> Ascertaining and Recording Radiation Doses to Individuals,</em> Regulatory Guide G-91, 2003(a).</li>
<li> Health and Welfare Canada, <em>Bioassay Guideline&nbsp;1&ndash;General Guidelines for Bioassay Programs</em>, 81-EHD-56, 1980.</li>
<li> Leggett, R.W., <em>Predicting the Retention of Cs in Individuals</em>, Health Physics, Vol.&nbsp;50, pp.&nbsp;747-759, 1986.</li>
<li> Strom, D.J., <em>Programmes for Assessment of Dose from Intakes of Radioactive Materials</em>, Internal Radiation Dosimetry, Health Physics 1994 Summer School, pp.&nbsp;543-570, 1994.</li>
<li> International Commission on Radiological Protection, <em>Report of the Task Group on Reference Man</em>, Publication&nbsp;23, 1975.</li>  </ol>   <a name="A"></a>
<h2>APPENDIX A <br />
SELECTING PARTICIPANTS IN A ROUTINE PROGRAM BASED ON ACTIVITY HANDLED</h2>  <p>Guidance on<strong> </strong>selecting participants in a routine radiobioassay program on the basis of the activity handled or the activity in process can be found in various references [2], [4], [17]. The values in Table&nbsp;1 have been mainly based on the approach in <em>American National Standard&ndash;Design of Internal Dosimetry Programs,</em> Health Physics Society; however, similar values may be obtained using other references.</p>   <a name="A.1"></a>
<h3>A.1 Potential Intake Fraction (PIF)</h3>
<p>The potential intake fraction (PIF) is defined as:</p>
<p>PIF = 10<sup>-6</sup> &times; R &times; C &times; D &times; O &times; S</p>
<p>where:</p>
<table className="table table-striped">
<tr>
<td valign="top"><p>10<sup>-6</sup></p></td>
<td valign="top"><p>=</p></td>
<td valign="top"><p>Brodsky&rsquo;s factor [18]</p></td>
</tr>
<tr>
<td valign="top"><p>R</p></td>
<td valign="top"><p>=</p></td>
<td valign="top"><p>release factor</p></td>
</tr>
<tr>
<td valign="top"><p>C</p></td>
<td valign="top"><p>=</p></td>
<td valign="top"><p>confinement factor</p></td>
</tr>
<tr>
<td valign="top"><p>D</p></td>
<td valign="top"><p>=</p></td>
<td valign="top"><p>dispersibility factor</p></td>
</tr>
<tr>
<td valign="top"><p>O</p></td>
<td valign="top"><p>=</p></td>
<td valign="top"><p>occupancy factor</p></td>
</tr>
<tr>
<td valign="top"><p>S</p></td>
<td valign="top"><p>=</p></td>
<td valign="top"><p>special form factor</p></td>
</tr>  </table>   <a name="A.2"></a>
<h3>A.2 Release Factor (R)</h3>
<p>The recommended values for the release factor (R) are:</p>
<table width="100%" border="1">
<tr>
<td valign="top"><p>Gases, strongly volatile liquids</p></td>
<td valign="top"><p>1.0</p></td>
</tr>
<tr>
<td valign="top"><p>Non-volatile powders, somewhat volatile liquids</p></td>
<td valign="top"><p>0.1</p></td>
</tr>
<tr>
<td valign="top"><p>Liquids, general, large area contamination</p></td>
<td valign="top"><p>0.01</p></td>
</tr>
<tr>
<td valign="top"><p>Solids, spotty contamination, material trapped on large particles; e.g., resins</p></td>
<td valign="top"><p>0.001</p></td>
</tr>
<tr>
<td valign="top"><p>Encapsulated material</p></td>
<td valign="top"><p>0</p></td>
</tr>  </table>   <a name="A.3"></a>
<h3>A.3 Confinement Factor (C)</h3>
<p>The recommended values for the confinement factor (C) are:</p>
<table border="1">
<tr>
<td valign="top"><p>Glove box or hot cell</p></td>
<td valign="top"><p>&nbsp;&nbsp;&nbsp;0.01</p></td>
</tr>
<tr>
<td valign="top"><p>Enhanced fume hood (enclosed with open ports for arms)</p></td>
<td valign="top"><p>&nbsp;&nbsp;&nbsp;0.1</p></td>
</tr>
<tr>
<td valign="top"><p>Fume hood</p></td>
<td valign="top"><p>&nbsp;&nbsp;&nbsp;1.0</p></td>
</tr>
<tr>
<td valign="top"><p>Bagged or wrapped contaminated material, bagged material in wooden/ cardboard boxes, greenhouses</p></td>
<td valign="top"><p>&nbsp;10</p></td>
</tr>
<tr>
<td valign="top"><p>Open bench-top, surface contamination in a room with normal ventilation</p></td>
<td valign="top"><p>100</p></td>
</tr>  </table>   <a name="A.4"></a>
<h3>A.4 Dispersibility Factor (D)</h3>  <p>The recommended values for the dispersibility factor (D) are:</p>  <table border="1">
<tr>
<td valign="top"><p>Actions that add energy to the material (heating, cutting, grinding, milling, welding, pressurizing, exothermic reactions)</p></td>
<td valign="top"><p>10</p></td>
</tr>
<tr>
<td valign="top"><p>Other actions (that do not enhance dispersibility)</p></td>
<td valign="top"><p>&nbsp;&nbsp;1</p></td>
</tr>  </table>   <a name="A.5"></a>
<h3>A.5 Occupancy Factor (O)</h3>  <p>The recommended values for the occupancy factor (O) are:</p>  <table border="1">
<tr>
<td valign="top"><p>Annual or one-time use</p></td>
<td valign="top"><p>&nbsp;&nbsp;&nbsp;1</p></td>
</tr>
<tr>
<td valign="top"><p>Monthly use or few times per year</p></td>
<td valign="top"><p>&nbsp;10</p></td>
</tr>
<tr>
<td valign="top"><p>Weekly, tens of times per year or tens of days for a one-time project</p></td>
<td valign="top"><p>&nbsp;50</p></td>
</tr>
<tr>
<td valign="top"><p>Essentially daily use</p></td>
<td valign="top"><p>250</p></td>
</tr>  </table>   <a name="A.6"></a>
<h3>A.6 Special Form Factor (S)</h3>  <p>The recommended values for the special form factor (S) are:</p>  <table width="100%" border="1">
<tr>
<td valign="top"><p>DNA precursors<br />
(except <sup>32</sup>P, <sup>35</sup>S, or <sup>131</sup>I)</p></td>
<td valign="top"><p>10</p></td>
</tr>
<tr>
<td valign="top"><p>Other material</p></td>
<td valign="top"><p>&nbsp;&nbsp;1</p></td>
</tr>  </table>   <a name="A.7"></a>
<h3>A.7 Values in Table&nbsp;1</h3>  <p>The values in Table&nbsp;1 were derived from the following parameter values:</p>  <table width="100%" border="1">
<tr>
<td valign="top"><p>Gases, volatile liquids and powders</p></td>
<td valign="top"><p>R = 1 (Gases, strongly volatile liquids)<br />
D = 1 (No energy added to system)<br />
O = 250 (Essentially daily use)<br />
S = 1</p></td>
</tr>
<tr>
<td valign="top"><p>Non-volatile liquids and solids</p></td>
<td valign="top"><p>R = 0.01 (liquids, large area contamination)<br />
D = 1 (No energy added to system)<br />
O = 250 (Essentially daily use)<br />
S = 1</p></td>
</tr>  </table>   <a name="B"></a>
<h2>APPENDIX B <br />
EXAMPLES</h2>   <a name="B.1"></a>
<h3>B.1 Example 1: Determining Participation in a Radiobioassay Program</h3>  <p>A worker handles on average:</p>  <p>A) 1 &times; 10<sup>6</sup> Bq of <sup>125</sup>I, three times per week, under a fume hood (assuming that ingestion is the most-likely route of intake),</p>  <p>B) 1 &times; 10<sup>7</sup> Bq of <sup>3</sup>H (as tritiated water), almost daily under a fume hood (assuming ingestion), and</p>  <p>C) 0.6 &times; 10<sup>6</sup> Bq of <sup>131</sup>I, four times per year on a bench top (assuming inhalation).</p>  <p>All of the radioactive materials are in a relatively volatile form.</p>  <p>The following information should be determined:</p>  <ol>
<li> Total intake per year,</li>
<li> Dose conversion coefficient (this example uses a dose conversion coefficient of e(50), from ICRP Publication 68 [12]),</li>
<li> Annual Limit on Intake (ALI),</li>
<li> Potential Intake Fraction (PIF); see Appendix A,</li>
<li> Coefficients r<em><sub>j</sub></em>, where <em>j</em> = A, B, and C (corresponding to the three radionuclide intakes defined above), and</li>
<li> Sum coefficient R<em><sub>j</sub></em>, where R<em><sub>j</sub></em> =r<em><sub>A</sub></em> + r<em><sub>B</sub></em> + r<em><sub>C</sub></em>. </li>  </ol>  <p>Table B1 provides step-by-step sample calculations to determine the values of r<em><sub>j</sub></em> and R<em><sub>j</sub></em>.</p>  <p>In this example, the results of the calculations in Table B1 are:</p>  <ol>
<li> R<em><sub>j</sub></em> &lt; 1, therefore (according to Section 4.2), the worker need not be subject to radiobioassay monitoring.</li>
<li> However, r<em><sub>A</sub></em> = 0.38 &gt; 0.3, indicating that it would be prudent to monitor the worker for <sup>125</sup>I.</li>  </ol>  <p><em><strong>Table B1: Evaluation of coefficients r<sub>j</sub> and sum coefficient R</strong><sub>j</sub><strong>.</strong></em></p>  <table className="table table-striped">
<tr>
<td valign="top">&#160; </td>
<td valign="top"><p><strong><sup>125</sup>I (ingestion)</strong></p></td>
<td valign="top"><p><strong><sup>3</sup>H (ingestion)</strong></p></td>
<td valign="top"><p><strong><sup>131</sup>I (inhalation)</strong></p></td>
</tr>
<tr>
<td valign="top"><p><strong>Intake</strong></p></td>
<td valign="top"><p>1 MBq per session</p></td>
<td valign="top"><p>10 MBq per session</p></td>
<td valign="top"><p>0.6 MBq per session</p></td>
</tr>
<tr>
<td valign="top"><p><strong>Total intake per year</strong></p></td>
<td valign="top"><p>10<sup>6</sup> &times; (3 &times; 52)<br />
= 0.16 GBq/year</p></td>
<td valign="top"><p>10<sup>7</sup> &times; (5 &times; 52)<br />
= 2.6 GBq/year</p></td>
<td valign="top"><p>0.6 &times; 10<sup>6</sup> &times; 4<br />
= 2.4 MBq/year</p></td>
</tr>
<tr>
<td valign="top"><p><strong>Dose Conversion Coefficient<br />
e(50)<br />
(refer to ICRP-68)</strong></p></td>
<td valign="top"><p>1.5 &times; 10<sup>-8</sup> Sv/Bq</p></td>
<td valign="top"><p>1.8 &times; 10<sup>-11</sup> Sv/Bq</p></td>
<td valign="top"><p>2.0 &times; 10<sup>-8</sup> Sv/Bq</p></td>
</tr>
<tr>
<td valign="top"><p><strong>Annual Limit on Intake (ALI), where:</strong></p>
</td>
<td valign="top"><p>1.3 MBq/year</p></td>
<td valign="top"><p>1.1 GBq/year</p></td>
<td valign="top"><p>1.0 MBq/year</p></td>
</tr>
<tr>
<td valign="top"><p><strong>Potential Intake Fraction<br />
(PIF)<br />
(see Appendix A)</strong></p></td>
<td valign="top"><p>Occupancy factor = 3 &times; 52<br />
= 156</p>
<p>Confinement factor = 1</p>
<p>PIF = 1.56 &times; 10<sup>-4</sup></p></td>
<td valign="top"><p>Occupancy factor = 250</p>
<p>Confinement factor = 1</p>
<p>PIF = 2.5 &times; 10<sup>-4</sup></p></td>
<td valign="top"><p>Occupancy factor = 4</p>
<p>Confinement factor = 100</p>
<p>PIF = 4 &times; 10<sup>-4</sup></p></td>
</tr>
<tr>
<td valign="top"><p><strong>Ratios r<em><sub>j</sub></em>, where:</strong></p>
<p><img src="/eng/acts-and-regulations/consultation/comment/rd-150/images/t_b1_c1.png" alt="RD-150" width="156" height="41" /></p></td>
<td valign="top"><p><img src="/eng/acts-and-regulations/consultation/comment/rd-150/images/t_b1_c2.png" alt="RD-150" width="114" height="25" /></p>
<p>
= <strong>0.38</strong></p></td>
<td valign="top"><p><img src="/eng/acts-and-regulations/consultation/comment/rd-150/images/t_b1_c3.png" alt="RD-150" width="110" height="24" /></p>
<p>
= <strong>0.01</strong></p></td>
<td valign="top"><p><img src="/eng/acts-and-regulations/consultation/comment/rd-150/images/t_b1_c4.png" alt="RD-150" width="113" height="25" /></p>
<p>
= <strong>0.02</strong></p></td>
</tr>
<tr>
<td valign="top"><p><strong>Sum of ratios, r<em><sub>j</sub></em></strong></p></td>
<td colSpan="3" valign="top"><p><img src="/eng/acts-and-regulations/consultation/comment/rd-150/images/RD-150_draft2_e-14.gif" alt="RD-150" width="92" height="25" />=  (0.38 + 0.01 + 0.02)  =  <strong>0.41</strong></p></td>
</tr>  </table>   <a name="B.2"></a>
<h3>B.2 Example&nbsp;2: Determining the Counting Error (Uncertainty)</h3>  <p>The steps to calculate the error resulting from the detector system (counting statistics), and a demonstration of how the counting error is calculated from a single radiobioassay result, are shown below:</p>  <p>(a)&nbsp;&nbsp;Direct measurement results:</p>  <table className="table table-striped">
<tr>
<td valign="top"><p>Sample count:</p></td>
<td valign="top"><p>25,077 (per litre of urine)</p></td>
</tr>
<tr>
<td valign="top"><p>Sample count time:</p></td>
<td valign="top"><p>10 minutes</p></td>
</tr>
<tr>
<td valign="top"><p>Background count:</p></td>
<td valign="top"><p>4,300 (per litre of urine)</p></td>
</tr>
<tr>
<td valign="top"><p>Background count time:</p></td>
<td valign="top"><p>20 minutes</p></td>
</tr>  </table>  <p>From these data, the count rates are calculated as follows:</p>  <p>Sample count rate = (Sample count) / (Sample count time)<br />
= 25,077/10 min.<br />
= 2,508 counts per minute (cpm)</p>  <p>Similarly, the background count rate is calculated as follows:</p>  <p>Background count rate = (Background count) / (Background count time)<br />
= 4,300/20 min.<br />
= 215 cpm</p>  <p>(b)&nbsp;&nbsp;Net count rate:</p>  <p>The background count rate is subtracted from the sample count rate to obtain the net count rate:</p>  <p>2,508 &ndash; 215 = 2,293 cpm.</p>  <p>(c)&nbsp;&nbsp;Counting error estimation:&nbsp;[19]</p>  <p>The counting error (at the 95% confidence interval based only on counting statistics) is then:</p>  <p><img src="/eng/acts-and-regulations/consultation/comment/rd-150/images/RD-150_draft2_e-15.gif" alt="rd-150" width="456" height="49" /></p>  <p><img src="/eng/acts-and-regulations/consultation/comment/rd-150/images/RD-150_draft2_e-16.gif" alt="rd-150" width="212" height="49" /></p>  <p><img src="/eng/acts-and-regulations/consultation/comment/rd-150/images/RD-150_draft2_e-17.gif" alt="rd-150" width="141" height="47" /></p>  <p>= 32 cpm</p>  <p>Therefore the sample count rate is 2,293&nbsp;&plusmn;&nbsp;32&nbsp;cpm. The statistical error of 32&nbsp;cpm represents a relative error of (32&nbsp;cpm)&nbsp;/&nbsp;(2,293&nbsp;cpm)&nbsp;=&nbsp;1.4 %.</p>  <p>(d)&nbsp;&nbsp;Result of measurements and analysis:</p>  <p>If the detector efficiency for <sup>137</sup>Cs is 10%, the number of disintegrations per minute (dpm) is:</p>  <p>(net count rate)&nbsp;/&nbsp;(efficiency)&nbsp;=&nbsp;2,293/0.10&nbsp;=&nbsp;22,930&nbsp;dpm.</p>  <p>To express this result as disintegrations per second, or becquerels (Bq), divide by 60 to obtain 382&nbsp;Bq. The relative error of 1.4% is carried over to the activity:</p>  <p>382&nbsp;Bq&nbsp;&times;&nbsp;1.4%&nbsp;=&nbsp;5&nbsp;Bq.</p>  <p>The radiobioassay sample result, including the statistical error only, therefore is:</p>  <p>382&nbsp;&plusmn;&nbsp;5&nbsp;Bq/L, or (382&nbsp;&plusmn;&nbsp;1.5&nbsp;Bq/L&nbsp;&times;&nbsp;1.4 L/day) = 535&nbsp;&plusmn;&nbsp;7&nbsp;Bq/day</p>  <p>(e)&nbsp;&nbsp;Conclusion</p>  <p>This example represents accounting for only one uncertainly; i.e., counting statistics. Other factors such as counting geometry may increase the uncertainty. Counting geometry depends to a great extent on the radionuclides being considered.</p>   <a name="B.3"></a>
<h3>B.3 Example&nbsp;3: Determining the Monitoring Frequency for Intakes of <sup>137</sup>Cs</h3>
<p>Table&nbsp;2 in Section&nbsp;5.1 illustrates that both whole body counting and urine analysis (gamma counting) are appropriate for detecting <sup>137</sup>Cs. The monitoring period for whole body counting is considered first.</p>
<p>Derived Activities (DA) for <sup>137</sup>Cs in vivo radiobioassay following an inhalation intake have been plotted against various monitoring periods to obtain the graph in Figure&nbsp;B1. The detection limit has been superimposed onto the plot. This figure illustrates that 1&nbsp;DA may be detected over a wide range of monitoring periods. Any period up to one year could therefore be a reasonable interval between monitoring employees. Other considerations described in Section&nbsp;5.2 may likely influence the final choice of the monitoring period.</p>
<p><strong><em>Figure&nbsp;B1: Acute Inhalation of Type&nbsp;F <sup>137</sup>Cs&ndash;Activity Associated with<br />
1&nbsp;mSv as a Function of Time</em></strong></p>
<p><img src="/eng/acts-and-regulations/consultation/comment/rd-150/images/b1.png" alt="rd-150" width="550" height="338" /></p>
<p>The alternative to whole body counting of <sup>137</sup>Cs is in vitro analysis. Again, the DA is compared to the Minimum Detectable Amount (MDA) for several monitoring frequencies. Figure&nbsp;B2 illustrates that the detection limit of 1&nbsp;Bq/L&nbsp;[7] does not exceed the DA from 7 to 365&nbsp;days. Therefore, other factors, described in Section&nbsp;5.2, are useful in selecting an appropriate monitoring frequency.</p>
<p><strong><em>Figure&nbsp;B2: Derived Activity for Urinary Excretion for Acute<br />
Inhalation of Type&nbsp;F <sup>137</sup>Cs</em></strong></p>
<p><img src="/eng/acts-and-regulations/consultation/comment/rd-150/images/b2.png" alt="rd-150" width="550" height="334" /></p>   <a name="B.4"></a>
<h3>B.4 Example&nbsp;4: Determining the Monitoring Frequency for Intakes of <sup>131</sup>I</h3>
<p>An achievable MDA of 100&nbsp;Bq for thyroid monitoring for <sup>131</sup>I has been suggested&nbsp;[7]. As in the previous example, DA is plotted against various monitoring periods from 2 to 180&nbsp;days. The result is illustrated in Figure&nbsp;B3.</p>
<p>From the graph it is clear that if the monitoring period is less than 4&nbsp;days or greater than 65&nbsp;days, the <sup>131</sup>I activity in the thyroid is inferior to the MDA and thus is not detected. In this case, a period of 14 to 30&nbsp;days would be a reasonable time frame for monitoring.</p>
<p><strong><em>Figure&nbsp;B3: <sup>131</sup>I in the Thyroid (Acute Vapour Inhalation) Derived Activity<br />
as Function of Time</em></strong></p>
<p><img src="/eng/acts-and-regulations/consultation/comment/rd-150/images/b3.png"  alt="rd-150" width="550" height="333" /></p>
<p>Although <sup>131</sup>I can be detected by in vitro measurements, Figure&nbsp;B4 suggests that after 5&nbsp;days the quantity of <sup>131</sup>I being excreted is inferior to the MDA of 1&nbsp;Bq/L&nbsp;[7]. In addition, an individual&#39;s rate of radioiodine excretion depends on many factors including diet, age and the use of medications. The individual variation in excretion rate is likely great and therefore a 5&nbsp;day monitoring period may not always allow the detection of 1&nbsp;DA. In this case, urinalysis is not a recommended routine monitoring method for assessing intakes of <sup>131</sup>I.</p>
<p><strong><em>Figure&nbsp;B4: Derived Activity for Urinary Excretion of <sup>131</sup>I<br />
Following Acute Vapour Inhalation</em></strong></p>
<p><img src="/eng/acts-and-regulations/consultation/comment/rd-150/images/b4.png" alt="rd-150" width="550" height="334" /></p>   <a name="B.5"></a>
<h3>B.5 Example&nbsp;5: Derived Investigation Levels for <sup>137</sup>Cs Inhalation</h3>  <p>The Derived Investigation Levels (DILs) for inhalation of Type&nbsp;F <sup>137</sup>Cs whole-body activity and urinary excretion are calculated using values of <em>m</em>(T/2) taken from <em>Individual Monitoring for Internal Exposure of Workers, Replacement of ICRP Publication&nbsp;54</em>, International Commission on Radiological Protection, Publication&nbsp;78&nbsp;[7]. For whole body retention, 14-day routine monitoring period, the parameters are:</p>  <table className="table table-striped">
<tr>
<td valign="top"><p>Monitoring period:</p></td>
<td valign="top"><p>T = 14 days</p></td>
</tr>
<tr>
<td valign="top"><p>Whole body retention at T/2:</p></td>
<td valign="top"><p>m(7&nbsp;days) = 0.42</p></td>
</tr>
<tr>
<td valign="top"><p>ALI</p></td>
<td valign="top"><p>= 3E+06&nbsp;Bq&nbsp;[12]</p></td>
</tr>  </table>  <p>DIL<sub>WB</sub> (T=14 days) = (0.3 ALI)(<em><img src="/eng/acts-and-regulations/consultation/comment/rd-150/images/RD-150_draft2_e-5.gif" alt="rd-150" width="31" height="41" />)(m</em>(T/2))<br />
= 0.3 (3E+06 Bq)(<img src="/eng/acts-and-regulations/consultation/comment/rd-150/images/RD-150_draft2_e-22.gif" alt="rd-150" width="31" height="41" />)0.42<br />  = 1.4 E+04 Bq</p>  <p>Whole-body and urinary excretion DIL values for routine monitoring periods varying from 14 to 180&nbsp;days are shown in Table&nbsp;B2. The values apply to inhalation of Type&nbsp;F <sup>137</sup>Cs.</p>  <p><strong><em>Table&nbsp;B2: Derived Investigation Levels for Routine Monitoring of <sup>137</sup>Cs</em></strong></p>  <table border="1">
<tr>
<td valign="top"><p><strong>Monitoring Interval<br />
(days)</strong></p></td>
<td valign="top"><p><strong>DIL: Whole Body<br />
Activity<br />
(Bq)</strong></p></td>
<td valign="top"><p><strong>DIL: Daily Urinary Excretion<br />
(Bq/day)</strong></p></td>
<td valign="top"><p><strong>DIL: Urinary Excretion<br />
(Bq/L)</strong></p></td>
</tr>
<tr>
<td valign="top"><p>14</p></td>
<td valign="top"><p>1.4 &times; 10<sup>4</sup></p></td>
<td valign="top"><p>1.3 &times; 10<sup>2</sup></p></td>
<td valign="top"><p>9.1 &times; 10<sup>1</sup></p></td>
</tr>
<tr>
<td valign="top"><p>30</p></td>
<td valign="top"><p>2.9 &times; 10<sup>4</sup></p></td>
<td valign="top"><p>1.6 &times; 10<sup>2</sup></p></td>
<td valign="top"><p>1.1 &times; 10<sup>2</sup></p></td>
</tr>
<tr>
<td valign="top"><p>60</p></td>
<td valign="top"><p>5.4 &times; 10<sup>4</sup></p></td>
<td valign="top"><p>2.7 &times; 10<sup>2</sup></p></td>
<td valign="top"><p>1.9 &times; 10<sup>2</sup></p></td>
</tr>
<tr>
<td valign="top"><p>90</p></td>
<td valign="top"><p>7.3 &times; 10<sup>4</sup></p></td>
<td valign="top"><p>3.7 &times; 10<sup>2</sup></p></td>
<td valign="top"><p>2.6 &times; 10<sup>2</sup></p></td>
</tr>
<tr>
<td valign="top"><p>180</p></td>
<td valign="top"><p>1.1 &times; 10<sup>5</sup></p></td>
<td valign="top"><p>5.5 &times; 10<sup>2</sup></p></td>
<td valign="top"><p>3.9 &times; 10<sup>2</sup></p></td>
</tr>  </table>
</div>
</div>  </div>
                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }