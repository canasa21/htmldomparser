import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "fr",
                pageTitle: "Mohamed Cherif Gacem", 
                dateModified: "2021-11-01",
                langToggleUrl: "/eng/about-us/our-experts/mohamed-gacem"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<p>Division du programme de r&eacute;glementation des Laboratoires Nucl&eacute;aires Canadiens</p>
<div className="pull-right col-md-2">
<figure><img src="/images/our-experts/web_experts_MGacem-sq.png" alt="" />
<figcaption>Mohamed Cherif Gacem,<br/>
Agent principal de projet</figcaption>
</figure>
</div>
<p>Mohamed travaille &agrave; la Commission canadienne de s&ucirc;ret&eacute; nucl&eacute;aire (CCSN) depuis 2008. Il est responsable de la d&eacute;livrance des permis relatifs aux activit&eacute;s de gestion des d&eacute;chets et de d&eacute;classement aux Laboratoires de Chalk River (LCR) des Laboratoires Nucl&eacute;aires Canadiens (LNC). Il g&egrave;re l&rsquo;&eacute;quipe de l&rsquo;&eacute;valuation et de la conformit&eacute; des installations, r&eacute;alise des examens et des &eacute;valuations techniques, contribue aux activit&eacute;s de relations externes et participe &agrave; des ateliers internationaux et des r&eacute;unions techniques au sujet de la gestion des d&eacute;chets et du d&eacute;classement ainsi que de la s&ucirc;ret&eacute; des installations de gestion des d&eacute;chets pr&egrave;s de la surface.</p>
<p>Son travail est essentiel, car il permet de v&eacute;rifier que les demandes de permis et la documentation connexe sont &eacute;valu&eacute;es de pr&egrave;s afin de d&eacute;montrer la s&ucirc;ret&eacute; des installations aujourd&rsquo;hui et dans l&rsquo;avenir. Mohamed s&rsquo;assure aussi que les demandes et la documentation sont conformes aux exigences r&eacute;glementaires canadiennes ainsi qu&rsquo;&agrave; l&rsquo;orientation et aux pratiques exemplaires. La s&eacute;curit&eacute; du public et de l&rsquo;environnement sont ses principales priorit&eacute;s.</p>
<h2>Expertise et &eacute;ducation</h2>
<p>Mohamed est ing&eacute;nieur m&eacute;canique professionnel et poss&egrave;de un titre de comp&eacute;tences en s&ucirc;ret&eacute; nucl&eacute;aire. Il a accumul&eacute; plus de 20 ans d&rsquo;expertise en g&eacute;nie nucl&eacute;aire, plus particuli&egrave;rement en conception, construction, mise en service, exploitation, d&eacute;classement et surveillance r&eacute;glementaire des installations et activit&eacute;s de gestion des d&eacute;chets nucl&eacute;aires.</p>
<h2>Recherches et projets actuels</h2>
<p><strong>Projet</strong> : <a href="/fra/reactors/research-reactors/nuclear-facilities/chalk-river/near-surface-disposal-facility">installation de gestion des d&eacute;chets pr&egrave;s de la surface (IGDPS) des Laboratoires Nucl&eacute;aires Canadiens</a>. En ce qui concerne l&rsquo;examen effectu&eacute; par la CCSN de cette installation propos&eacute;e par les LNC, le r&ocirc;le de Mohamed est celui d&rsquo;agent de projet responsable de la d&eacute;livrance de permis. Il est l&rsquo;unique point de contact pour le titulaire de permis, en plus de s&rsquo;occuper des examens et &eacute;valuations techniques de tous les aspects de la gestion des d&eacute;chets et du d&eacute;classement, de la conception de l&rsquo;installation, de l&rsquo;analyse de la s&ucirc;ret&eacute; et des &eacute;valuations de la s&ucirc;ret&eacute;, de la conduite de l&rsquo;exploitation, de la sant&eacute; et s&eacute;curit&eacute; classiques et de la protection de l&rsquo;environnement.</p>  </div>
</div>  </div>
                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }