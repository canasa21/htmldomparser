import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "fr",
                pageTitle: "À propos de la Commission canadienne de sûreté nucléaire ", 
                dateModified: "2022-01-21",
                langToggleUrl: "/eng/about-us/index"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<p>Apprenez-en plus sur le mandat et l&rsquo;histoire de la Commission canadienne de s&ucirc;ret&eacute; nucl&eacute;aire, consultez les possibilit&eacute;s de carri&egrave;re actuelles et obtenez l&rsquo;information n&eacute;cessaire pour nous contacter. </p>
<img src="/images/web_CNSCGeneral_520.png" alt=""/>
<p className="lead"><a href="/fra/about-us/our-mission">Mandat</a></p>
<p>Au sujet de la CCSN, son mandat, ses valeurs, sa vision et sa mission</p>
<p className="lead"><a href="/fra/about-us/careers-at-cnsc/index">Carri&egrave;res</a></p>
<p>Possibilit&eacute;s d&rsquo;emploi, outils et ressources de carri&egrave;res, programmes</p>
<p className="lead"><a href="/fra/about-us/organization/index">Survol de l&rsquo;organisation</a></p>
<p>Survol de la CCSN, membres de la Commission, organigrammes, biographies des membres de la haute direction </p>
<p className="lead"><a href="/fra/resources/publications/reports/index">Planification et rapports</a></p>
<p>Rapports annuels, rapports financiers et de rendement, rapports sur l&rsquo;acc&egrave;s &agrave; l&rsquo;information, audits internes, &eacute;valuations</p>
<p className="lead"><a href="/fra/transparency/index">Transparence</a></p>
<p>Contrats, frais de voyage et d&rsquo;accueil, subventions et contributions sup&eacute;rieures &agrave; 25&nbsp;000&nbsp;$, demandes d&rsquo;acc&egrave;s &agrave; l&rsquo;information</p>
<p className="lead"><a href="/fra/about-us/history/index">Histoire de la CNSC</a></p>
<p>D&eacute;couvrez la riche histoire du Canada en mati&egrave;re de r&eacute;glementation nucl&eacute;aire</p>
<p className="lead"><a href="/fra/about-us/values-and-ethics/index">Valeurs et &eacute;thique</a></p>
<p>Politiques et proc&eacute;dures, code de conduite, conflits d&rsquo;int&eacute;r&ecirc;ts</p>
<p className="lead"><a href="/fra/contact-us/index">Contactez-nous</a></p>
<p>Information g&eacute;n&eacute;rale, relations avec les m&eacute;dias, rapports d&rsquo;incidents, plaintes externes, r&eacute;troaction</p>
<p className="lead"><a href="/fra/resources/publications/reports/corporate-reports">Planification et reddition de compte</a></p>
<p>Nos r&eacute;alisations, notre rendement, nos plans et nos priorit&eacute;s</p>
<h2 className="mrgn-bttm-md">En vedette</h2>
<p className="lead"><a href="/fra/about-us/history/2021-review">Bilan de l&rsquo;ann&eacute;e  <img src="/images/web_yir_thumbs_2021_360x203.png" alt="2021" className="mrgn-tp-md"/></a></p>
<p>Faits saillants de la CCSN en 2021</p>
<p className="lead"><a href="/fra/about-us/our-experts/index">CCSN sp&eacute;cialistes <img src="/images/web_experts_feature.png" alt="" className="mrgn-tp-md"/></a></p>
<p>Rencontrez les sp&eacute;cialistes de la CCSN</p>

                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }