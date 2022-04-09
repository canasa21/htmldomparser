import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "en",
                pageTitle: "Son Nguyen", 
                dateModified: "2022-01-17",
                langToggleUrl: "/fra/about-us/our-experts/son-nguyen"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<div className="row">
<p>Geoscience Division</p>
<div className="pull-right col-md-2"> <img alt="Son Nguyen" src="/images/our-experts/web_experts_sonNguyen_sub.png"/>
<p>Son Nguyen,<br/>
Geoscience Technical Specialist</p>
</div>
<p>Son has worked for the CNSC since 1982. As a Geoscience  Technical Specialist, he uses geoscientific and engineering principles to  assess the safety of nuclear installations.</p>
<p>Son also conducts research in collaboration with Canadian  and international partners to keep up to date with scientific and engineering  developments and to ensure that licensing decisions are based on science.</p>
<h2>Expertise and education</h2>
<p>Son holds a bachelor  of engineering and master of engineering in civil engineering from Universit&eacute;  de Sherbrooke, and a PhD in civil engineering and applied mechanics from McGill  University. He holds his professional engineering designation (P.Eng.)  affiliated with the Ordre des Ing&eacute;nieurs du Qu&eacute;bec. Son is also a 2-time  recipient of the CNSC President&rsquo;s Merit Award and is chair of an International  Atomic Energy Agency project related to demonstrating the safety of geological  disposal of radioactive waste. He&rsquo;s also an adjunct professor at the University  of Ottawa, and is the author of more than 50 papers in peer-reviewed scientific  journals and many more in conference proceedings.</p>
<h2>Current research and projects</h2>
<p><strong>Project:</strong> <a href="/eng/reactors/research-reactors/nuclear-facilities/chalk-river/near-surface-disposal-facility">Canadian  Nuclear Laboratories&rsquo; proposed near surface disposal facility (NSDF)</a>. As  part of the CNSC&rsquo;s review of this proposed facility, Son is reviewing the  safety case through a suite of documents that provide multiple arguments to  demonstrate that the proposed NSDF will be safe for people and the environment  during construction, operation, closure, and post-closure. He reviews and  performs independent assessment of geotechnical, seismic and hydrogeological  aspects that would influence the safety and performance of the proposed NSDF.</p>  </div>
</div>  </div>
                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }