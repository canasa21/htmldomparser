import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "fr",
                pageTitle: "À propos de la Commission canadienne de sûreté nucléaire ", 
                dateModified: "2022-01-21",
                langToggleUrl: "/eng/about-us/"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<div className="row">
<div className="col-md-12">
<p>Apprenez-en plus sur le mandat et l&rsquo;histoire de la Commission canadienne de s&ucirc;ret&eacute; nucl&eacute;aire, consultez les possibilit&eacute;s de carri&egrave;re actuelles et obtenez l&rsquo;information n&eacute;cessaire pour nous contacter. </p>
</div>
<div className="col-md-8"> <img src="/images/20th-anniversary/web_CNSCGeneral_520.png" alt="" className="img-responsive"/>   </div>
<div className="col-md-12">
<div className="col-md-4 ">
<p className="lead"><a href="/fra/about-us/our-mission">Mandat</a></p>
<p>Au sujet de la CCSN, son mandat, ses valeurs, sa vision et sa mission</p>
</div>
<div className="col-md-4">
<p className="lead"><a href="/fra/about-us/careers-at-cnsc/">Carri&egrave;res</a></p>
<p>Possibilit&eacute;s d&rsquo;emploi, outils et ressources de carri&egrave;res, programmes</p>
</div>
<div className="col-md-4 ">
<p className="lead"><a href="/fra/about-us/organization/">Survol de l&rsquo;organisation</a></p>
<p>Survol de la CCSN, membres de la Commission, organigrammes, biographies des membres de la haute direction </p>
</div>
<div className="col-md-4 ">
<p className="lead"><a href="/fra/resources/publications/reports/">Planification et rapports</a></p>
<p>Rapports annuels, rapports financiers et de rendement, rapports sur l&rsquo;acc&egrave;s &agrave; l&rsquo;information, audits internes, &eacute;valuations</p>
</div>
<div className="col-md-4">
<p className="lead"><a href="/fra/transparency/">Transparence</a></p>
<p>Contrats, frais de voyage et d&rsquo;accueil, subventions et contributions sup&eacute;rieures &agrave; 25&nbsp;000&nbsp;$, demandes d&rsquo;acc&egrave;s &agrave; l&rsquo;information</p>
</div>
<div className="col-md-4 ">
<p className="lead"><a href="/fra/about-us/history/">Histoire de la CNSC</a></p>
<p>D&eacute;couvrez la riche histoire du Canada en mati&egrave;re de r&eacute;glementation nucl&eacute;aire</p>
</div>
<div className="col-md-4  mrgn-bttm-0">
<p className="lead"><a href="/fra/about-us/values-and-ethics/">Valeurs et &eacute;thique</a></p>
<p>Politiques et proc&eacute;dures, code de conduite, conflits d&rsquo;int&eacute;r&ecirc;ts</p>
</div>
<div className="col-md-4 mrgn-bttm-0">
<p className="lead"><a href="/fra/contact-us/">Contactez-nous</a></p>
<p>Information g&eacute;n&eacute;rale, relations avec les m&eacute;dias, rapports d&rsquo;incidents, plaintes externes, r&eacute;troaction</p>
</div>
<div className="col-md-4  mrgn-bttm-0">
<p className="lead"><a href="/fra/resources/publications/reports/corporate-reports">Planification et reddition de compte</a></p>
<p>Nos r&eacute;alisations, notre rendement, nos plans et nos priorit&eacute;s</p>
<div className="col-md-12">
<h2 className="mrgn-bttm-md">En vedette</h2>
<div className="col-md-4 ">
<p className="lead"><a href="/fra/about-us/history/2021-review">Bilan de l&rsquo;ann&eacute;e  <img src="/images/2021-review/web_yir_thumbs_2021_360x203.png" alt="2021" className="mrgn-tp-md"/></a></p>
<p>Faits saillants de la CCSN en 2021</p>
</div>
<div className="col-md-4">
<p className="lead"><a href="/fra/about-us/our-experts/">Sp&eacute;cialistes de la CCSN<img src="/images/our-experts/web_experts_feature.png" alt="" className="mrgn-tp-md"/></a></p>
<p>Rencontrez les sp&eacute;cialistes de la CCSN</p>
</div>
<div className="col-md-4 ">
</div>
                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }