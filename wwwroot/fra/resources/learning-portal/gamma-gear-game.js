import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "fr",
                pageTitle: "Jeu vidéo Équipe Gamma", 
                dateModified: "2018-10-31",
                langToggleUrl: "/eng/resources/learning-portal/gamma-gear-game"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<p>Le jeu vid&eacute;o &Eacute;quipe Gamma a &eacute;t&eacute; con&ccedil;u pour montrer aux joueurs comment le rayonnement est &eacute;mis par la d&eacute;sint&eacute;gration radioactive, et comment d&eacute;tecter les sources radioactives et se prot&eacute;ger contre le rayonnement. Pour apprendre les notions de base du rayonnement, cliquez sur les liens ci-dessous ou <a href="http://gammagear.net" onclick="ga(&#39;send&#39;,&#39;event&#39;,&#39;learning-portal&#39;,&#39;click&#39;,&#39;Gamma Gear&#39;, 1);">jouez au jeu vid&eacute;o &Eacute;quipe Gamma (153 <abbr title="mégaoctet,">Mo</abbr>)</a> (ouvrez-le &agrave; partir de n&#39;importe quel navigateur Web sauf Internet Explorer, p. ex. Safari, Chrome, Firefox ou Edge).</p>  	<iframe width="560" height="315" src="https://www.youtube.com/embed/h3vAC5kw1tM"  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<h2>Introduction au rayonnement</h2>
<ul>
<li><a href="/fra/resources/radiation/introduction-to-radiation/what-is-radiation">Qu&#39;est-ce que le rayonnement?</a></li>
<li><a href="/fra/resources/videos/player/index?videoid=radiation">Qu&#39;est-ce que le rayonnement - vid&eacute;o</a></li>
<li><a href="/fra/resources/radiation/introduction-to-radiation/atoms-where-all-matter-begins">L&#39;atome - Au coeur de la mati&egrave;re</a></li>
<li><a href="/fra/resources/radiation/introduction-to-radiation/radioisotopes">Les radio-isotopes</a></li>
<li><a href="/fra/resources/radiation/introduction-to-radiation/types-and-sources-of-radiation">Cat&eacute;gories et sources de rayonnement</a></li>
<li><a href="/fra/resources/radiation/introduction-to-radiation/radiation-doses">Doses de rayonnement</a></li>
<li><a href="/fra/resources/radiation/introduction-to-radiation/radiation-health-effects">Effets biologiques du rayonnement</a></li>
</ul>  
                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }