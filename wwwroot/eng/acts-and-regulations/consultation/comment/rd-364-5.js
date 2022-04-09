import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "en",
                pageTitle: "Archived Web Page: Draft Regulatory Document RD-364Joint Canada - United States Guide for Approval of Type B(U) and Fissile Material Transportation Packages", 
                dateModified: "2013-06-02",
                langToggleUrl: "/fra/acts-and-regulations/consultation/comment/rd-364-5"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<p><strong>Scroll down and the "archived" notice will fade in (at the top of your window)</strong></p>
<p><img src="/dist/js/images/archived/warning.gif" alt="Warning" title="Warning" className="image-actual mrgn-bttm-0" /> This Web page has been archived on the Web.</p>
<div id="archived" className="wet-boew-archived col-md-6">
<h2>Archived Content</h2>
<p>Information identified as archived on the Web is for reference, research or recordkeeping purposes. It has not been altered or updated after the date of archiving. Web pages that are archived on the Web are not subject to the Government of Canada Web Standards. As per the <a href="http://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=12316&amp;section=text">Communications Policy of the Government of Canada</a>, you can request alternate formats on the <a href="/eng/contact-us/">Contact Us</a> page.</p>
</div>
<a name="5.0"></a>  	<h2><strong>5.0 SHIELDING EVALUATION</strong></h2>  <p>This section of the application should identify, describe, discuss, and analyze the principal radiation shielding design of the packaging, components, and systems that are important to safety. This section should address the regulatory requirements of 10&nbsp;CFR&nbsp;71.47, <em>External Radiation Standards for All Packages</em>, and 10&nbsp;CFR&nbsp;71.51(a)(1) and (2), or Paragraphs&nbsp;526, 530, 531 and 532 of TS-R-1 as referenced in Subsection 16(4) of the PTNS Regulations, Paragraph&nbsp;572&nbsp;of TS-R-1 as referenced in Subsection 15(5) of the PTNS Regulations, and Paragraphs&nbsp;645, 646(b), and 656(b)(ii)(i) of TS-R-1 which are incorporated in Subsection 1(1) of the PTNS Regulations by reference to Paragraph&nbsp;650 of TS-R-1.</p>
<a name="5.1"></a>  	<h3><strong>5.1 Description of Shielding Design</strong></h3>
<a name="5.1.1"></a>  	<h4><strong>5.1.1 Design Features</strong></h4>  <p>This section should describe the radiation shielding design features of the package. Design features important to shielding include the following:</p>  <ol>
<li> Dimensions, tolerances, and densities of material for neutron or gamma shielding, including those packaging components considered in the shielding evaluation;</li>
<li> Mass density, atomic density, or area density of materials used as neutron absorbers;</li>
<li> Methods used to determine the uniformity of the absorbers along with support references to the data;</li>
<li> Structural components that maintain the contents in a fixed position within the package; and</li>
<li> Dimensions of the transport vehicle that are considered in the shielding evaluation.</li>  </ol>  <p>The text, tables, and figures describing the shielding design features should be consistent with the engineering drawings and the models used in the shielding evaluation.</p>
<a name="5.1.2"></a>  	<h4><strong>5.1.2 Summary Table of Maximum Radiation Levels</strong></h4>  <p>This section should present the maximum dose rates for both normal conditions of transport and hypothetical accident conditions at the appropriate locations for non-exclusive and exclusive use shipments as applicable. Tables 5-1 and 5-2 present an appropriate format for providing the external radiation information specific to the packaging with its contents for shipments in non-exclusive use vehicles, and in exclusive use vehicles, respectively.</p>  <p>For SNF packages, the spent fuel specification (e.g., burnup, enrichment, and cooling time) at which the individual radiation levels apply should be provided in the following tables since the gamma or neutron contributions could be greatest at different fuel specifications.</p>  <p><strong><em>Table 5-1: Summary Table of External Radiation Levels (Non-Exclusive Use)</em></strong> </p>  <table border="1">
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>&nbsp;</td>
<td colSpan="3"><p className=""><strong>Package Surface</strong></p>
<p className=""><strong>mSv/h (mrem/h)</strong></p></td>
<td colSpan="3"><p className=""><strong>1 Meter from Package Surface mSv/h (mrem/h)</strong></p></td>
</tr>
<tr>
<td><p><strong>Normal Conditions of Transport</strong></p></td>
<td><p>Top</p></td>
<td><p>Side</p></td>
<td><p>Bottom</p></td>
<td><p>Top</p></td>
<td><p>Side</p></td>
<td><p>Bottom</p></td>
</tr>
<tr>
<td><p>Gamma</p></td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td><p>Neutron</p></td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td><p>Total</p></td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td><p>10&nbsp;CFR&nbsp;71.47(a) or Paragraphs&nbsp;530 and 531 of TS-R-1 Limit</p></td>
<td><p>2 (200)</p></td>
<td><p>2 (200)</p></td>
<td><p>2 (200)</p></td>
<td><p>0.1 (10)*</p></td>
<td><p>0.1 (10)*</p></td>
<td><p>0.1 (10)*</p></td>
</tr>
<tr>
<td colSpan="4"><p><strong>Hypothetical Accident Conditions</strong></p></td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td colSpan="4"><p>Gamma</p></td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td colSpan="4"><p>Neutron</p></td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td colSpan="4"><p>Total</p></td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td colSpan="4"><p>10&nbsp;CFR&nbsp;71.51(a)(2) or 656(b)(ii)(i) of TS-R-1 Limit</p></td>
<td><p>10 (1000)</p></td>
<td><p>10 (1000)</p></td>
<td><p>10 (1000)</p></td>
</tr>  </table>
<p>*Transport index may not exceed 10</p>
<p><strong><em>Table 5-2 Summary Table of External Radiation Levels (Exclusive Use)*</em></strong> </p>
<table border="1">
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>&nbsp;</td>
<td colSpan="3"><p className=""><strong>Package (or Freight Container) Surface mSv/h (mrem/h)</strong></p></td>
<td colSpan="4"><p className=""><strong>2 Meters from Outer Vehicle Surface<br />
mSv/h (mrem/h)</strong></p></td>
</tr>
<tr>
<td><p><strong>Normal Conditions of Transport</strong></p></td>
<td><p>Top</p></td>
<td><p>Side</p></td>
<td><p>Bottom</p></td>
<td colSpan="2"><p>Top</p></td>
<td><p>Side</p></td>
<td><p>Bottom</p></td>
</tr>
<tr>
<td><p>Gamma</p></td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td colSpan="2">&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td><p>Neutron</p></td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td colSpan="2">&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td><p>Total</p></td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td colSpan="2">&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td><p>10&nbsp;CFR&nbsp;71.47(b) or Paragraph&nbsp;572 of TS-R-1 Limit</p></td>
<td><p>10 (1000)**</p></td>
<td><p>10 (1000)**</p></td>
<td><p>10 (1000)**</p></td>
<td colSpan="2"><p>0.1 (10)</p></td>
<td><p>0.1 (10)</p></td>
<td><p>0.1 (10)</p></td>
</tr>
<tr>
<td>&nbsp;</td>
<td colSpan="3"><p><strong>Vehicle Surface mSv/h (mrem/h)</strong></p></td>
<td colSpan="4"><p><strong>Occupied Position mSv/h (mrem/h)</strong></p></td>
</tr>
<tr>
<td><p><strong>Normal Conditions of Transport</strong></p></td>
<td><p>Top</p></td>
<td><p>Side</p></td>
<td><p>Underside</p></td>
<td colSpan="4">&nbsp;</td>
</tr>
<tr>
<td><p> Gamma</p></td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td colSpan="4">&nbsp;</td>
</tr>
<tr>
<td><p> Neutron</p></td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td colSpan="4">&nbsp;</td>
</tr>
<tr>
<td><p>Total</p></td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td colSpan="4">&nbsp;</td>
</tr>
<tr>
<td><p>10&nbsp;CFR&nbsp;71.47(b) or Paragraph&nbsp;572 of TS-R-1 Limit</p></td>
<td><p>2 (200)</p></td>
<td><p>2 (200)</p></td>
<td><p>2 (200)</p></td>
<td colSpan="4"><p>0.02 (2)</p></td>
</tr>
<tr>
<td colSpan="4"><p className=""><strong>Hypothetical Accident Conditions</strong></p></td>
<td colSpan="4"><p className=""><strong>1 Meter from Package Surface<br />
mSv/h (mrem/h)</strong></p></td>
</tr>
<tr>
<td colSpan="4"><p> Gamma</p></td>
<td>&nbsp;</td>
<td colSpan="2">&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td colSpan="4"><p> Neutron</p></td>
<td>&nbsp;</td>
<td colSpan="2">&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td colSpan="4"><p>Total</p></td>
<td>&nbsp;</td>
<td colSpan="2">&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td colSpan="4"><p>10&nbsp;CFR&nbsp;71.51(a)(2) or 656(b)(ii)(i) of TS-R-1 Limit</p></td>
<td><p>10(1000)</p></td>
<td colSpan="2"><p>10 (1000)</p></td>
<td><p>10 (1000)</p></td>
</tr>  </table>  <p> *For packages transported by roadway, railway, and sea</p>  <p>**For packages in closed vehicles otherwise, 2 (200)</p>
<a name="5.2"></a>  	<h3><strong>5.2 Source Specification</strong></h3>  <p>This section should describe the contents as well as the gamma and neutron source terms used in the shielding analysis. Any increase in source terms over time should be considered. For those packages designed for multiple types of contents, the contents producing the highest external dose rate at each location should be clearly identified and evaluated. For packages designed for spent fuel transport, this section should also state the fuel type, fuel burnup, cooling time, and initial enrichment. For spent fuel package shielding evaluations, the neutron source term increases considerably with decreasing initial enrichment and constant burnup. Consequently, in identifying the bounding source term, the minimum initial enrichment should be specified. Note that the appropriate cross section for the corresponding spent fuel burnup should be used. </p>
<a name="5.2.1"></a>  	<h4><strong>5.2.1 Gamma Source</strong></h4>  <p>This section should specify the quantity of radioactive material included as contents and tabulate the gamma decay source strength (megaelectronvolts per second (MeV/s) and photons/s) as a function of photon energy. A detailed description of the method used to determine the gamma source strength and distribution should be provided.</p>  <p>For non-SNF contents, the maximum gamma source strength and spectra should be calculated by an appropriate method (e.g., standard computer codes or hand calculations). The source contribution from radioactive daughter products should be included if it produces higher dose rates than the contents without decay. If the radioactive nuclides and gamma spectra are calculated with a computer code, the key parameters should be described in the application or listed in the input file. The production of secondary gammas (e.g., from (n,&#947;) reactions in shielding material) should be either calculated as part of the shielding evaluation (see Section&nbsp;5.4) or otherwise appropriately included in the source term.</p>  <p>The results of the source term determination should be presented as a listing of gammas per second, or MeV/s, as a function of energy. The activity (or mass) of each nuclide that contributes significantly to the source term should also be provided as supporting information.</p>  <p>For SNF contents, the gamma source terms should be specified as a function of energy for both the SNF and activated hardware. If the energy group structure of the source term calculation differs from that of the cross-section set of the shielding calculation, the applicant may need to regroup the photons. In general, only gammas from approximately 0.8 to 2.5 MeV will contribute significantly to the external radiation levels, so regrouping outside of this range is of little consequence. A consistent source term unit (e.g., per assembly, per total number of assemblies, or per metric ton) should be used in the shielding calculation.</p>  <p>Determining the source terms for fuel assembly hardware is generally not as straightforward as that for SNF. The activation of the hardware depends on the impurities (e.g., Cobalt-59) initially present and on the spatial and energy variation of the neutron flux during burnup. If the package is intended to transport other hardware, such as control assemblies or shrouds, the source terms from these components should be included. </p>  <p>Depending on the packaging design, neutron interactions could result in the production of energetic gammas near the packaging surface. If this source is not treated by the shielding analysis code, other appropriate means should be used for its determination. </p>
<a name="5.2.2"></a>  	<h4><strong>5.2.2 Neutron Source</strong></h4>  <p>This section should specify the quantity of radioactive material included as contents and tabulate the neutron source strength (neutron/s) as a function of energy. A detailed description of the method used to determine the neutron source strength and distribution should be provided.</p>  <p>The method should consider, as appropriate, neutrons from both spontaneous fission and from (&#945;,n) reactions. Depending on the methods used to calculate these source terms, the applicant might determine the energy group structure independently. This is often accomplished by selecting the nuclide with the predominant contribution to spontaneous fission (e.g., curium-244) and using that spectrum for all neutrons since the contribution from (&#945;,n) reaction is generally small. If either of these source contributions is assumed to be negligible, an appropriate justification should be provided.</p>  <p>The production of neutrons from subcritical multiplication should be either calculated as part of the shielding evaluation (see Section 5.4) or otherwise conservatively included and justified in the source term.</p>  <p>The results of the source term calculation, if applicable, should be presented as a listing of neutrons per second as a function of energy. The contribution from spontaneous fission and (&#945;,n) should be separately identified along with the actinides or light nuclei significant for these processes. For the spontaneous fission contribution, a listing of the significant nuclides should also be presented.</p>
<a name="5.3"></a>  	<h3><strong>5.3 Shielding Model</strong></h3>
<a name="5.3.1"></a>  	<h4><strong>5.3.1 Configuration of Source and Shielding</strong></h4>
<p>This section should provide a detailed description of the model used in the shielding evaluation. The effects of the tests on the packaging and its contents under normal conditions of transport and hypothetical accident conditions should be evaluated. The models used in the shielding calculation should be consistent with these effects.</p>
<p>This section should include sketches (to scale) and dimensions of the radial and axial shielding materials. The dimensions of the transport vehicle and the package location for exclusive-use shipments should be included for the purpose of determining the radiation level at 2 m from the vehicle and the normally driver-occupied locations. The analysis is based on the radiation limits in 10&nbsp;CFR&nbsp;71.47(b) or Paragraph&nbsp;572 of TS-R-1 as referenced in Subsection 15(5) of the PTNS Regulations.</p>
<p>The dose point locations in the shielding model, including all locations prescribed in 10&nbsp;CFR&nbsp;71.47(a) or 10&nbsp;CFR&nbsp;71.47(b) plus 10&nbsp;CFR&nbsp;71.51(a)(2), or Paragraphs&nbsp;530 and 531 of TS-R-1 as referenced in Subsection 16(4) of the PTNS Regulations, or Paragraph&nbsp;572 of TS-R-1 as referenced in Subsection 15(5) of the PTNS Regulations, and Paragraph&nbsp;656(b)(ii)(i) of TS-R-1 which is incorporated in Subsection 1(1) of the PTNS Regulations by reference to Paragraph&nbsp;650 of TS-R-1, should be identified. These points should be chosen to identify the locations of the maximum radiation levels. Radiation peaking often occurs near the edges of external neutron shield and impact limiters for SNF packages. Voids, streaming paths, and irregular geometries in the model should be included or otherwise treated in a conservative manner.</p>
<p>If contents can be positioned at varying locations or with varying densities, the location and physical properties of the contents used in the evaluation should be those resulting in the maximum external radiation levels. For example, the source configuration that maximizes radiation level on the side of the package might not be the same source configuration that maximizes the radiation level on the top or bottom. Any changes in configuration (e.g.,&nbsp;displacement of source or shielding, reduction in shielding) resulting under normal conditions of transport or hypothetical accident conditions should be included as appropriate.</p>
<p>For SNF packages, the source term locations for both SNF and the structural support regions of the fuel assemblies should be modeled properly. Generally, at least three source regions (fuel and top/bottom assembly hardware) are necessary. Within the SNF region, the fuel materials may generally be homogenized to facilitate shielding calculations. In some cases, the basket material may be homogenized also. However, homogenization may not be appropriate in some cases when it distorts the neutron multiplication rate or when radiation streaming can occur between the basket components. In addition, the assumed source configuration should bound damaged conditions of the spent fuel assemblies if damaged fuels are to be loaded in the packaging.</p>
<p>Because of the burnup profile for SNF, a uniform source distribution is generally conservative for the top and bottom dose points but not for the axial center unless the source strength is appropriately adjusted. If peaking appears to be significant, it should be treated appropriately. The assembly structural support regions (e.g., top/bottom end pieces and plenum) should be correctly positioned relative to the SNF. These support regions may be individually homogenized.</p>
<a name="5.3.2"></a>  	<h4><strong>5.3.2 Material Properties</strong></h4>
<p>This section should describe the material properties (e.g., mass densities and atom densities) in the shielding models of the packaging and contents. Changes resulting under normal conditions of transport or hypothetical accident conditions should be included as appropriate. The sources of data for uncommon materials should be cited. The uncommon materials should be properly controlled to achieve their design densities. Specific information on control measures should be included in Section 8, <em>Acceptance Tests and Maintenance Program,</em> of the application.</p>
<p>Shielding properties of the materials should not degrade during the service life of the packaging (e.g., degradation of foam or dehydration of hydrogenous materials). Controls should be in place to ensure the long-term effectiveness of the shielding as appropriate. Temperature-sensitive shielding materials should not be subject to temperatures at or above their design limitations during either normal or accident conditions. The applicant should properly examine the potential for shielding materials that may experience changes in material densities at temperature extremes. For example, elevated temperatures may reduce hydrogen content through loss of bound or free water in hydrogenous shielding materials. In addition, temperatures that may result in changing the form of shielding materials, such as melting of lead shielding, is not acceptable. </p>
<p>If the shielding model considers a homogenous source region (rather than a detailed heterogeneous model of the contents), such an approach should be justified, and it should be demonstrated that the homogenized mass densities are correct for normal conditions of transport and hypothetical accident conditions. Atom densities should also be confirmed if used as input to shielding calculations.</p>
<a name="5.4"></a>  	<h3><strong>5.4 Shielding Evaluation</strong></h3>
<a name="5.4.1"></a>  	<h4><strong>5.4.1 Methods</strong></h4>  <p>This section should provide a general description of the basic method used to determine the gamma and neutron dose rates at the selected points outside the package for both normal and accident conditions of transport. This should include a description of the spatial source distribution and any computer program used, with its referenced documentation. This section should also include a detailed description of the basic input parameters as well as the basis for selecting the program, attenuation and removal cross-sections, and build up factors.</p>  <p>The computer codes may use Monte Carlo transport, deterministic transport, or point-kernel techniques. The latter is generally appropriate only for gammas. For computer codes not well established in the public domain, the application should describe the solution method, benchmark results, validation procedure, and quality assurance practices. </p>  <p>The dimensions of the modeling/code (1d, 2d, or 3d) should be commensurate with the complexity of the package and the content. Generally for a SNF package, a two-dimensional or three-dimensional calculation is necessary. One-dimensional codes provide little information about off-axis locations and streaming paths. Even for radiation levels at the end of the package, one-dimensional codes require a buckling correction that must be justified; merely using the packaging cavity diameter may underestimate the radiation level (overestimate the radial leakage).</p>  <p>The cross-section library used by the code should be applicable for shielding calculations. The code should account for subcritical multiplication and secondary gamma production unless these conditions have been otherwise appropriately considered (e.g., in the source-term specification).</p>
<a name="5.4.2"></a>  	<h4><strong>5.4.2 Input and Output Data</strong></h4>  <p>This section should identify the key input data for the shielding calculations and show that information from the shielding models is properly input into the code. Depending on the type of computer code (e.g., point kernel, deterministic, Monte Carlo), key input data should include source terms, materials, package dimensions, convergence criteria, mesh size, neutrons per generation, and number of generations. At least one representative input file and output file, or key sections of those files, should be included. This section should show that the code achieved proper convergence.</p>
<a name="5.4.3"></a>  	<h4><strong>5.4.3 Flux-to-Dose-Rate Conversion</strong></h4>  <p>This section should include a tabulation of the flux-to-dose-rate conversion factors as a function of energy and should cite appropriate references to support the data. The flux-to-dose-conversion factors in ANSI/American Nuclear Society (ANS) 6.1.1-1977, <em>American&nbsp;National Standard for Neutron and Gamma-Ray Flux to Dose Factors</em> [5], should be used for calculating the dose rates. </p>
<a name="5.4.4"></a>  	<h4><strong>5.4.4 External Radiation Levels</strong></h4>  <p>This section should describe the results of the radiation analysis in detail. These results should agree with the summary tables in Section 5.1.2 and meet the limits in 10&nbsp;CFR&nbsp;71.47(a) or 10&nbsp;CFR&nbsp;71.47(b), as appropriate, and 10&nbsp;CFR&nbsp;71.51(a)(2) or Paragraphs&nbsp;526, 530, 531 and 532 of TS-R-1 as referenced in Subsection 16(4) of the PTNS Regulations, Paragraph&nbsp;572&nbsp;of TS-R-1 as referenced in Subsection 15(5) of the PTNS Regulations, and Paragraphs&nbsp;645, 646(b) and 656(b)(ii)(i) of TS-R-1 which are incorporated in Subsection 1(1) of the PTNS Regulations by reference to Paragraph&nbsp;650 of TS-R-1. The locations of maximum dose rates for the analysis should be identified and sufficient data provided to show that the radiation levels are reasonable and their variations with location are consistent with the geometry and shielding characteristics of the package. The results should address normal and accident conditions.</p>  <p>The analysis should show that the locations selected are those of maximum dose rates. To determine maximum dose rates, radiation levels may be averaged over the cross-sectional area of a probe of reasonable size (NUREG/CR-5569, <em>Averaging of Radiation Levels Over the Detector Probe Area</em>, Revision&nbsp;1, 1992 [15]). For packages with streaming paths or voids, averaging should not be used to reduce the radiation levels resulting from such features.</p>  <p>The external radiation levels should be reasonable and their variations with location should be consistent with the geometry and shielding characteristics of the package. For the purpose of 10&nbsp;CFR&nbsp;71.47(b) or Paragraph&nbsp;572 of TS-R-1, the external surface is considered to be that part of the package that is shown in the drawings and has been demonstrated to remain in place under the normal conditions of transport. Personnel barriers and similar devices that are attached to the conveyance rather than the package may, however, qualify the vehicle as a closed vehicle.</p>  <p>The evaluation should address damage to the shielding under normal conditions of transport and hypothetical accident conditions. Applicants should verify that any damage under normal conditions of transport does not result in a significant increase in the external dose rates, as required by 10&nbsp;CFR&nbsp;71.43(f) and 10&nbsp;CFR&nbsp;71.51(a)(1) or Paragraph&nbsp;646(b) of TS-R-1. Any increase should be explained and justified as not significant.</p>
<a name="5.5"></a>  	<h3><strong>5.5 Appendix</strong></h3>  <p>The appendix should include a list of references, applicable pages from referenced documents, supporting information and analysis, and other appropriate supplemental information.</p>
</div>
</div>  </div>
                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }