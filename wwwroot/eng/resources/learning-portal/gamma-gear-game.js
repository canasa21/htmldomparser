import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "en",
                pageTitle: "Gamma Gear Video Game", 
                dateModified: "2018-10-31",
                langToggleUrl: "/fra/resources/learning-portal/gamma-gear-game"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<p>The Gamma Gear video game was designed to teach players how  radiation is emitted from radioactive decay, and how to detect radioactive sources and protect themselves from radiation. To learn the basics of radiation, follow the links below or <a href="http://gammagear.net" onclick="ga(&#39;send&#39;,&#39;event&#39;,&#39;learning-portal&#39;,&#39;click&#39;,&#39;Gamma Gear&#39;, 1);">play the Gamma Gear video game (153 <abbr title="megabyte,">MB</abbr>)</a> (open with any Web browser other than Internet Explorer; e.g., Safari, Chrome, Firefox, Edge, etc.).</p>
<iframe width="560" height="315" src="https://www.youtube.com/embed/6nNEctmlVpE"  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  <h2>Introduction to Radiation</h2>  <ul>
<li><a href="/eng/resources/radiation/introduction-to-radiation/what-is-radiation">What is radiation?</a></li>
<li><a href="/eng/resources/videos/player/index?videoid=radiation">What is radiation? - video</a></li>
<li><a href="/eng/resources/radiation/introduction-to-radiation/atoms-where-all-matter-begins">Atoms - Where all matter begins</a></li>
<li><a href="/eng/resources/radiation/introduction-to-radiation/radioisotopes">Radioisotopes</a></li>
<li><a href="/eng/resources/radiation/introduction-to-radiation/types-and-sources-of-radiation">Types and sources of radiation</a></li>
<li><a href="/eng/resources/radiation/introduction-to-radiation/radiation-doses">Radiation  doses</a></li>
<li><a href="/eng/resources/radiation/introduction-to-radiation/radiation-health-effects">Radiation Health Effects</a></li>  </ul>  	
                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }