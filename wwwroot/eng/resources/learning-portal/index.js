import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "en",
                pageTitle: "Learning Portal", 
                dateModified: "2022-03-24",
                langToggleUrl: "/fra/resources/learning-portal/index"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<p>Welcome to the CNSC&#39;s learning portal for educational resources on nuclear and radiation safety and science.</p>
<h2>For students</h2>
<div className="col-md-3 "><a href="/eng/resources/learning-portal/gamma-gear-game"><img src="/images/resources/learning-portal/learning-portal-btn-gamma.png" alt="" className="mrgn-bttm-0"/>Play the Gamma Gear video game</a></div>
<div className="col-md-3"><a href="/eng/contact-us/index#general"><img src="/images/resources/learning-portal/learning-portal-btn-expert.png" alt="" className="mrgn-bttm-0"/>Ask a nuclear safety expert</a></div>
<div className="col-md-3 "><a href="/eng/resources/videos/index"><img src="/images/resources/learning-portal/learning-portal-btn-videos.png" alt="" className="mrgn-bttm-0"/>Watch our videos</a></div>  	<div className="clear"></div>  	<div className="col-md-3 "><a href="/eng/resources/canadas-nuclear-history/index"><img src="/images/resources/learning-portal/learning-portal-btn-history.png" alt="" className="mrgn-bttm-0"/>Learn Canada&#39;s nuclear history</a></div>  	<div className="col-md-3 "><a href="/eng/resources/mythbusters/index"><img src="/images/resources/learning-portal/learning-portal-btn-myths.png" alt="" className="mrgn-bttm-0"/>Bust myths about nuclear science</a></div>
<div className="clear"></div>
</div>
<h2>For educators</h2>
<div className="col-md-3 "><a href="/eng/resources/infographics/index"><img src="/images/resources/learning-portal/learning-portal-btn-infographs.png" alt="" className="mrgn-bttm-0"/>Infographics</a></div>  	<div className="col-md-3"><a href="/eng/resources/fact-sheets/index"><img src="/images/resources/learning-portal/learning-portal-btn-fact.png" alt="" className="mrgn-bttm-0"/>Fact sheets</a></div>  	<div className="col-md-3 "><a href="/eng/resources/news-room/feature-articles/index"><img src="/images/resources/learning-portal/learning-portal-btn-feature.png" alt="" className="mrgn-bttm-0"/>Feature articles</a></div>
<div className="clear"></div>  	<div className="col-md-3 "><a href="/eng/resources/frequently-asked-questions/index"><img src="/images/resources/learning-portal/learning-portal-btn-faq.png" alt="" className="mrgn-bttm-0"/>Frequently Asked Questions</a></div>  	<div className="col-md-3"><a href="http://letstalkscience.ca/"><img src="/images/resources/learning-portal/learning-portal-btn-letstalk.png" alt="" className="mrgn-bttm-0"/>Let&#39;s Talk Science educational resources</a></div>  	<div className="col-md-3 "><a href="http://science.gc.ca/eic/site/063.nsf/eng/h_BB254133.html"><img src="/images/resources/learning-portal/learning-portal-btn-science.png" alt="" className="mrgn-bttm-0"/>Science.gc.ca educational resources</a></div>
<div className="clear"></div>
</div>
<h2>By topics</h2>
<details className="mrgn-bttm-lg">
<summary>Export and Import</summary>  	<p><a href="/eng/nuclear-substances/import-and-export-controls/faqs/index">Import and export controls </a>(FAQ)</p>
</details>
<details className="mrgn-bttm-lg">
<summary>Health</summary>
<p>
<a href="/eng/resources/news-room/feature-articles/contributing-to-food-safety">Contributing to food safety</a> (Feature article) <br />
<a href="/eng/resources/radiation/could-your-collectible-item-contain-radium">Could your collectible item contain radium?</a> <br />
<a href="/eng/resources/maps-of-nuclear-facilities/results?category=medical-facilities">Map of nuclear facilities</a> <br />
<a href="/eng/resources/videos/player/index?videoid=medical">Medical uses of nuclear technologies</a> (Video) <br />
<a href="/eng/resources/fact-sheets/polonium-210">Polonium-210</a> (FAQ) <br />
<a href="/eng/resources/mythbusters/index#radiation_and_health">Radiation and health</a> (Mythbuster)<br />
<a href="/eng/resources/fact-sheets/radioactive_sources">Radioactive sources safely used in Canada for the benefit of all Canadians</a> (Fact sheet) <br />
<a href="/eng/resources/fact-sheets/radon">Radon</a> (FAQ) <br />
<a href="/eng/resources/fact-sheets/tritium">Tritium</a> (FAQ) <br />
<a href="/eng/resources/health/tritium/tritium_studies">Tritium studies</a> (Fact sheet)  	</p>
</details>
<details className="mrgn-bttm-lg">
<summary>General</summary>
<p>
<a href="/eng/pdfs/Fact_Sheets/Factsheet-EA-at-the-CNSC-eng.pdf">Environmental assessments at the CNSC </a> (Fact sheet)<br/>
<a href="/eng/resources/fact-sheets/alarm-response-guidelines">Alarm response guidelines for radiation portal monitoring systems</a> (Fact sheet) <br />
<a href="/eng/resources/fact-sheets/Canadas-contribution-to-nuclear-weapons-development">Canada&rsquo;s historical role in developing nuclear weapons</a> (Fact sheet)<br />
<a href="/eng/resources/fact-sheets/license-amendment-for-arevas-mcclean-lake-operation">CNSC Hearing: Licence amendment for AREVA&rsquo;s McClean  Lake Operation</a> (Fact sheet) <br />
<a href="/eng/resources/canadas-nuclear-history/index">CNSC historical timeline<span className="wb-inv">for General section</span></a> (CNSC Online module) <br />
<a href="/eng/resources/news-room/feature-articles/counterfeit-fraudulent-and-suspect-items">Counterfeit, fraudulent and suspect items</a> (Feature article) <br />
<a href="/eng/resources/health/health-studies/eldorado/index#faq">Eldorado studies</a> <br />
<a href="/eng/resources/mythbusters/index"><span className="wb-inv">Mythbusters</span>General<span className="wb-inv">Industrial and Medical Applications</span></a> (Mythbusters) <br />
<a href="/eng/resources/fact-sheets/household-smoke-detector">Household smoke detector safety and disposal</a> (Fact sheet) <br />
<a href="/eng/resources/news-room/feature-articles/minke-whales-to-honey-bees">Minkes whales to honey bees</a> (Feature article) <br />
<a href="/eng/resources/fact-sheets/naturally-occurring-radioactive-material">Naturally occurring radioactive material</a> (Fact sheet) <br />
<a href="/eng/resources/fact-sheets/natural-background-radiation">Natural background radiation</a> (Fact sheet) <br />
<a href="/eng/the-commission/participant-funding-program/index">Participant funding program</a>
</p>
</details>
<details className="mrgn-bttm-lg">
<summary>Radiation</summary>
<p>
<a href="/eng/resources/fact-sheets/naturally-occurring-radioactive-material">Naturally occurring radioactive material</a> (Fact sheet) <br />
<a href="/eng/resources/mythbusters/index#radiation_and_health">Radiation and health</a> (Mythbusters) <br />
<a href="/eng/resources/fact-sheets/radioactive_sources">Radioactive sources safely used in Canada for the benefit of all Canadians</a> (Fact sheet) <br />
<a href="/eng/resources/videos/player/index?videoid=radiation">What is radiation?</a> (Video)  	</p>
</details>
<details className="mrgn-bttm-lg">
<summary>Medical applications</summary>
<p><a href="/eng/resources/mythbusters/index"><span className="wb-inv">Mythbusters</span><span className="wb-inv">General</span>Industrial and medical applications</a> (Mythbuster)</p>
</details>
<details className="mrgn-bttm-lg">
<summary>Mines and mills</summary>  	<p>
<a href="/eng/resources/fact-sheets/uranium-mining-milling">Uranium mining and milling: The facts on a  well-regulated industry</a> (Fact sheet) <br />
<a href="/eng/resources/mythbusters/index#M3">Uranium mining and processing</a> (Mythbuster)
</p>
</details>
<details className="mrgn-bttm-lg">
<summary>Nuclear power plants</summary>
<p>
<a href="/eng/resources/maps-of-nuclear-facilities/results?category=isotope-production">CNSC regulated facilities</a><br />
<a href="/eng/resources/fact-sheets/decommissioning-of-nuclear-power-plants">Decommissioning of nuclear power plants</a> (Fact sheet) <br />
<a href="/eng/resources/maps-of-nuclear-facilities/results?category=nuclear-power-plants">Map of nuclear power plants</a> <br />
<a href="/eng/resources/mythbusters/index#M1">Nuclear power plants</a> (Mythbuster)<br />
<a href="http://www.youtube.com/watch?v=yx_XoqXNtRM">Nuclear power plants safety systems</a> (Video) <br />
<a href="/eng/resources/fact-sheets/nuclear-power-plants-solar-flares">Nuclear power plants and solar flares</a> (Fact sheet) <br />
<a href="/eng/resources/fact-sheets/regulating-radioactive-waste-from-nuclear-power-plants-in-canada">Regulating radioactive waste from nuclear power plants in  Canada</a> (Fact sheet) <br />
<a href="http://www.youtube.com/watch?v=vggzl9OngaM">Understanding nuclear power plants: Total station blackout</a> (Video)  	</p>
</details>
<details className="mrgn-bttm-lg">
<summary>Nuclear Safety</summary>
<p>
<a href="http://www.youtube.com/watch?v=RBjia8NytPI">Nuclear in Canada</a> (Video) <br />
<a href="http://www.youtube.com/watch?v=yx_XoqXNtRM">Nuclear power plants safety systems</a> (Video) <br />
<a href="/eng/waste/faq/transport-of-used-nuclear-fuel/index">Transporting nuclear substances</a> (FAQ)  	</p>
</details>
<details className="mrgn-bttm-lg">
<summary>Regulations</summary>
<p>
<a href="/eng/acts-and-regulations/regulatory-framework/regulatory-framework-fact-sheet">CNSC Regulatory Framework</a> (Fact sheet) <br />
<a href="/eng/resources/fact-sheets/regulating-canadas-geological-repositories-fact-sheet">Regulating Canada&rsquo;s geological repositories</a> (Fact sheet) <br />
<a href="/eng/resources/fact-sheets/packaging-and-transport-of-nuclear-substances">Regulating the packaging and transport of nuclear substances in Canada</a> (Fact sheet) <br />
<a href="/eng/resources/fact-sheets/regulating-radioactive-waste-from-nuclear-power-plants-in-canada">Regulating radioactive waste from nuclear power plants in Canada</a> (Fact sheet)  	</p>
</details>
<details className="mrgn-bttm-lg">
<summary>Transport</summary>
<p>
<a href="/eng/waste/faq/transport-of-used-nuclear-fuel/index">Transporting nuclear substances</a> (FAQ)
</p>
</details>
<details className="mrgn-bttm-lg">
<summary>Uranium</summary>
<p>
<a href="/eng/resources/fact-sheets/depleted-uranium-perspective">Depleted uranium: The Canadian regulator&rsquo;s perspective</a> (Fact sheet) <br />
<a href="/eng/reactors/research-reactors/nuclear-facilities/chalk-river/highly-enriched-uranium-in-canada">Highly enriched uranium in Canada</a> (Fact sheet) <br />
<a href="/eng/resources/fact-sheets/radon-fact-sheet">Radon in Canada&rsquo;s uranium industry</a> (Fact sheet)
</p>
</details>
<details>
<summary>Waste</summary>
<p><a href="/eng/resources/fact-sheets/regulating-radioactive-waste-from-nuclear-power-plants-in-canada">Regulating radioactive waste from nuclear power plants in Canada</a> (Fact sheet)</p>
</details>

                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }