import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "fr",
                pageTitle: "Notre mission", 
                dateModified: "2014-03-26",
                langToggleUrl: "/eng/about-us/our-mission"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<p>La Commission canadienne de sûreté nucléaire réglemente lutilisation de lénergie et des matières nucléaires afin de préserver la santé, la sûreté et la sécurité, de protéger l&#39;environnement, de respecter les engagements internationaux du Canada à l&#39;égard de l&#39;utilisation pacifique de l&#39;énergie nucléaire, et dinformer objectivement le public sur les plans scientifique ou technique ou en ce qui concerne la réglementation du domaine de lénergie nucléaire.</p>  	<p>En vertu de la <em>Loi sur la s&ucirc;ret&eacute; et la r&eacute;glementation nucl&eacute;aires</em>, la mission de la CCSN comprend quatre &eacute;l&eacute;ments principaux :</p>  	<ul>
<li>r&eacute;glementer le d&eacute;veloppement, la production et l&#39;utilisation de l&#39;&eacute;nergie nucl&eacute;aire au Canada pour prot&eacute;ger la sant&eacute;, la s&ucirc;ret&eacute;, la s&eacute;curit&eacute; et l&#39;environnement</li>
<li>r&eacute;glementer la production, la possession, l&#39;utilisation et le transport des substances nucl&eacute;aires, ainsi que la production, la possession et l&#39;utilisation de l&#39;&eacute;quipement et des renseignements r&eacute;glement&eacute;s </li>
<li>mettre en œuvre les mesures de contrôle international du d&eacute;veloppement, de la production, du transport et de l&#39;utilisation de l&#39;&eacute;nergie et des substances nucl&eacute;aires, y compris les mesures de non prolif&eacute;ration des armes et des explosifs nucl&eacute;aires </li>
<li>informer le public, sur les plans scientifique, technique ou r&eacute;glementaire, au sujet des activit&eacute;s de la CCSN et des cons&eacute;quences, pour la sant&eacute; et la s&eacute;curit&eacute; des personnes et de l&#39;environnement, du d&eacute;veloppement, de la production, de la possession, du transport et de l&#39;utilisation des substances nucl&eacute;aires </li>  	</ul>  </div>
</div>  </div>
                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }