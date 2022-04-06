import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "fr",
                pageTitle: "Shinzhong Lei", 
                dateModified: "2022-01-17",
                langToggleUrl: "/eng/about-us/our-experts/shizhong-lei"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<div className="grid-12">
<p>Division des g&eacute;osciences</p>
<div className="pull-right col-md-3"> <img alt="Shizhong Lei" src="/images/our-experts/web_experts_shizhongLei_sub.png"/>
<p>Shizhong Lei,<br/>
Sp&eacute;cialiste technique en g&eacute;oscience </p>
</div>
<p>Shizhong travaille &agrave; la CCSN depuis 1991. En tant que sp&eacute;cialiste technique en g&eacute;oscience, il r&eacute;alise des examens techniques de documents pr&eacute;sent&eacute;s par des titulaires de permis ou des promoteurs qui sont sp&eacute;cifiquement li&eacute;s &agrave; l&rsquo;&eacute;coulement des eaux souterraines et au transport de contaminants, aux inondations externes, aux changements climatiques et &agrave; leurs effets.</p>
<p>Il veille &agrave; fournir &agrave; la Commission d&rsquo;importantes recommandations r&eacute;glementaires fond&eacute;es sur la science et les faits afin de lui permettre de s&rsquo;acquitter de son mandat.</p>
<h2>Expertise et &eacute;ducation</h2>
<p>Shizhong est titulaire d&rsquo;un baccalaur&eacute;at &egrave;s sciences, d&rsquo;une ma&icirc;trise en hydrologie et d&rsquo;un doctorat en g&eacute;nie civil avec sp&eacute;cialisation en hydrologie et en ing&eacute;nierie des cours d&rsquo;eau.</p>
<h2>Recherches et projets actuels</h2>
<p><strong>Projet&nbsp;: </strong><a href="/fra/reactors/research-reactors/nuclear-facilities/chalk-river/near-surface-disposal-facility">Installation de gestion des d&eacute;chets pr&egrave;s de la surface (IGDPS) des Laboratoires Nucl&eacute;aires Canadiens</a>. Dans le cadre de l&rsquo;examen de cette installation propos&eacute;e que r&eacute;alise la CCSN, Shizhong passe en revue les rapports techniques du promoteur sur les pr&eacute;cipitations, les temp&ecirc;tes extr&ecirc;mes, la stabilit&eacute; &agrave; long terme des installations en surface sous l&rsquo;effet de pr&eacute;cipitations extr&ecirc;mes et des changements climatiques ainsi que l&rsquo;&eacute;valuation de la s&ucirc;ret&eacute; et des risques.</p>  
                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }