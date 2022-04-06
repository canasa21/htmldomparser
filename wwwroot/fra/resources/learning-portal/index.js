import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "fr",
                pageTitle: "Portail d'apprentissage", 
                dateModified: "2022-03-24",
                langToggleUrl: "/eng/resources/learning-portal/index"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<p>Bienvenue au portail d&#39;apprentissage de la CCSN, où vous trouverez des ressources pédagogiques sur le nucléaire, la radioprotection et la science.</p>
<h2>Pour les étudiants </h2>
<div className="col-md-3 "><a href="/fra/resources/learning-portal/gamma-gear-game"><img src="/images/resources/learning-portal/learning-portal-btn-gamma.png" alt="" className="mrgn-bttm-0"/>Jeu vid&eacute;o &Eacute;quipe Gamma</a></div>
<div className="col-md-3"><a href="/fra/contact-us/index#general"><img src="/images/resources/learning-portal/learning-portal-btn-expert.png" alt="" className="mrgn-bttm-0"/>Questionnez un expert en nucl&eacute;aire</a></div>  	<div className="col-md-3 "><a href="/fra/resources/videos/index"><img src="/images/resources/learning-portal/learning-portal-btn-videos.png" alt="" className="mrgn-bttm-0"/>Vid&eacute;os</a></div>  	<div className="clear"></div>  	<div className="col-md-3 "><a href="/fra/resources/canadas-nuclear-history/index"><img src="/images/resources/learning-portal/learning-portal-btn-history.png" alt="" className="mrgn-bttm-0"/>Histoire du nucl&eacute;aire au Canada</a></div>  	<div className="col-md-3 "><a href="/fra/resources/mythbusters/index"><img src="/images/resources/learning-portal/learning-portal-btn-myths.png" alt="" className="mrgn-bttm-0"/>Mythes sur le nucl&eacute;aire</a></div>
<div className="clear"></div>
</div>
<h2>Pour les enseignants</h2>
<div className="col-md-3 "><a href="/fra/resources/infographics/index"><img src="/images/resources/learning-portal/learning-portal-btn-infographs.png" alt="" className="mrgn-bttm-0"/>Infographies</a></div>  	<div className="col-md-3"><a href="/fra/resources/fact-sheets/index"><img src="/images/resources/learning-portal/learning-portal-btn-fact.png" alt="" className="mrgn-bttm-0"/>Fiches d&#39;information</a></div>  	<div className="col-md-3 "><a href="/fra/resources/news-room/feature-articles/index"><img src="/images/resources/learning-portal/learning-portal-btn-feature.png" alt="" className="mrgn-bttm-0"/>Articles en vedette</a></div>
<div className="clear"></div>  	<div className="col-md-3 "><a href="/fra/resources/frequently-asked-questions/index"><img src="/images/resources/learning-portal/learning-portal-btn-faq.png" alt="" className="mrgn-bttm-0"/>Foire aux questions</a></div>  	<div className="col-md-3"><a href="http://parlonssciences.ca"><img src="/images/resources/learning-portal/learning-portal-btn-letstalk.png" alt="" className="mrgn-bttm-0"/>Ressources p&eacute;dagogiques de Parlons sciences</a></div>  	<div className="col-md-3 "><a href="http://science.gc.ca/eic/site/063.nsf/fra/h_BB254133.html"><img src="/images/resources/learning-portal/learning-portal-btn-science.png" alt="" className="mrgn-bttm-0"/>Ressources p&eacute;dagogiques du site science.gc.ca</a></div>
<div className="clear"></div>
</div>
<h2>Par sujets</h2>
<details className="mrgn-bttm-lg">
<summary>Centrales nucléaires</summary>
<p>
<a href="/fra/resources/maps-of-nuclear-facilities/results?category=nuclear-power-plants">Cartes des installations nucléaires</a><br />
<a href="/fra/resources/mythbusters/index#M1">Centrales nucléaires</a> (d&eacute;mythificateur)<br />
<a href="http://www.youtube.com/watch?v=TM4NiVxmfwk">Comprendre les centrales nucléaires : panne d&#39;électricité complète dans une  centrale nucléaire</a> (vid&eacute;o)<br />
<a href="/fra/resources/fact-sheets/decommissioning-of-nuclear-power-plants">Déclassement des centrales nucléaires</a> (fiche de renseignements)<br />
<a href="/fra/resources/maps-of-nuclear-facilities/results?category=isotope-production">Installations réglementées</a><br />
<a href="/fra/resources/fact-sheets/nuclear-power-plants-solar-flares">Les centrales nucléaires et les éruptions solaires</a> (fiche de renseignements)<br />
<a href="/fra/resources/fact-sheets/packaging-and-transport-of-nuclear-substances">Réglementation de l&#39;emballage et du transport des  substances nucléaires au Canada</a> (fiche de renseignements)<br />
<a href="http://www.youtube.com/watch?v=fhCN0Ecdhkk">Systèmes de sûreté des centrales nucléaires</a> (vid&eacute;o)
</p>
</details>
<details className="mrgn-bttm-lg">
<summary>Déchets</summary>
<p><a href="/fra/resources/fact-sheets/regulating-radioactive-waste-from-nuclear-power-plants-in-canada">Réglementer les déchets radioactifs des centrales nucléaires au Canada</a> (fiche de renseignements)</p>
</details>
<details className="mrgn-bttm-lg">
<summary>Exportation et importation</summary>
<p><a href="/fra/nuclear-substances/import-and-export-controls/faqs/index">Contrôles de l&#39;importation et de l&#39;exportation</a> (FAQ)</p>
</details>
<details className="mrgn-bttm-lg">
<summary>Général</summary>
<p>
<a href="/fra/pdfs/Fact_Sheets/Factsheet-EA-at-the-CNSC-fra.pdf">&Eacute;valuations environnementales à la CCSN</a> (fiche d&rsquo;information)<br />
<a href="/fra/resources/health/health-studies/eldorado/index">Analyse actualisée de l&#39;étude sur la cohorte d&#39;Eldorado  des travailleurs des mines d&#39;uranium : Partie I de l&#39;étude de la cohorte des travailleurs des mines d&#39;uranium de la Saskatchewan (PRS 0-0205)</a> <br />
<a href="/fra/resources/news-room/feature-articles/counterfeit-fraudulent-and-suspect-items">Articles contrefaits, frauduleux et suspects</a> (article en vedette)<br />
<a href="/fra/resources/fact-sheets/license-amendment-for-arevas-mcclean-lake-operation">Audience de la CCSN : Modification de permis pour  l&#39;établissement minier de McClean Lake d&#39;AREVA</a> (fiche de renseignements)<br />
<a href="/fra/resources/canadas-nuclear-history/index">Chronologie historique de la CCSN</a> <br />
<a href="/fra/resources/news-room/feature-articles/minke-whales-to-honey-bees">Des petits rorquals aux abeilles</a> (article en vedette)<br />
<a href="/fra/resources/fact-sheets/alarm-response-guidelines">Directives d&#39;intervention en cas d&#39;alarme provenant des  portiques de détection des rayonnements</a> (fiche de renseignements)<br />
<a href="/fra/resources/mythbusters/index#M5">Généralités</a> (démythificateur)<br />
<a href="/fra/resources/fact-sheets/naturally-occurring-radioactive-material">Matière radioactive naturelle</a> (fiche de renseignements)<br />
<a href="/fra/the-commission/participant-funding-program/index">Programme de financement des participants</a> <br />
<a href="/fra/resources/fact-sheets/natural-background-radiation">Rayonnement naturel de fond</a> (fiche de renseignements)<br />
<a href="/fra/resources/fact-sheets/Canadas-contribution-to-nuclear-weapons-development">Rôle historique du Canada dans le développement des  armes nucléaires</a> (fiche de renseignements)<br />
<a href="/fra/resources/fact-sheets/household-smoke-detector">Sûreté et élimination des détecteurs de fumée  domestiques</a> (fiche de renseignements)
</p>
</details>
<details className="mrgn-bttm-lg">
<summary>Les applications médicales</summary>
<p><a href="/fra/resources/mythbusters/index#M4">Les applications industrielles et médicales</a> (d&eacute;mythificateur)</p>
</details>
<details className="mrgn-bttm-lg">
<summary>Mines et usines </summary>
<p>
<a href="/fra/resources/mythbusters/index#M3">Exploitation et transformation de l&#39;uranium</a> (d&eacute;mythificateur)<br />
<a href="/fra/resources/fact-sheets/uranium-mining-milling">L&#39;extraction et la concentration de l&#39;uranium : les faits  sur une industrie bien réglementée</a> (fiche de renseignements)  	</p>
</details>
<details className="mrgn-bttm-lg">
<summary>Rayonnement</summary>
<p>
<a href="/fra/resources/videos/player/index?videoid=radiation">Qu&rsquo;est-ce que le rayonnement?</a> (vid&eacute;o)<br />
<a href="/fra/resources/mythbusters/index">Le rayonnement et la santé</a> (d&eacute;mythificateur)<br />
<a href="/fra/resources/fact-sheets/radioactive_sources">Les sources radioactives sont utilisées de façon sécuritaire  au Canada, et ce, dans l&#39;intérêt de tous les Canadiens</a> (fiche de renseignements)<br />
<a href="/fra/resources/fact-sheets/naturally-occurring-radioactive-material">Matière radioactive naturelle</a> (Fiche de renseignements)  	</p>
</details>
<details className="mrgn-bttm-lg">
<summary>Règlements</summary>
<p>
<a href="/fra/acts-and-regulations/regulatory-framework/regulatory-framework-fact-sheet">Cadre de réglementation de la CCSN</a> <br />
<a href="/fra/resources/fact-sheets/regulating-canadas-geological-repositories-fact-sheet">La réglementation des dépôts dans des formations  géologiques au Canada</a> (fiche de renseignements)<br />
<a href="/fra/resources/fact-sheets/packaging-and-transport-of-nuclear-substances">Réglementation de l&#39;emballage et du transport des  substances nucléaires au Canada<span className="wb-inv">for packaging section</span></a> (fiche de renseignements)  	</p>
</details>
<details className="mrgn-bttm-lg">
<summary>Santé</summary>
<p>
<a href="/fra/resources/radiation/could-your-collectible-item-contain-radium">Vos objets de collection pourraient-ils contenir du radium?</a> <br />
<a href="/fra/resources/health/tritium/tritium_studies">Études sur le tritium</a> <br />
<a href="/fra/resources/news-room/feature-articles/contributing-to-food-safety">La salubrité des aliments et le nucléaire</a> (article en vedette)<br />
<a href="/fra/resources/fact-sheets/radon">Le radon</a> (fiche de renseignements)<br />
<a href="/fra/resources/mythbusters/index">Le rayonnement et la santé</a> (d&eacute;mythificateur)<br />
<a href="/fra/resources/fact-sheets/tritium">Le tritium</a> (fiche de renseignements)<br />
<a href="/fra/resources/fact-sheets/radioactive_sources">Les sources radioactives sont utilisées de façon  sécuritaire au Canada, et ce, dans l&#39;intérêt de tous les Canadiens</a> (fiche de renseignements)<br />
<a href="/fra/resources/fact-sheets/polonium-210">Polonium 210</a> (fiche de renseignements)<br />
<a href="/fra/resources/videos/player/index?videoid=medical">Utilisations médicales des  technologies nucléaires</a> (vidéo)  	</p>
</details>
<details className="mrgn-bttm-lg">
<summary>Sûreté nucléaire</summary>
<p>
<a href="/fra/waste/faq/transport-of-used-nuclear-fuel/index">Transport du combustible nucléaire usé</a> (FAQ)<br />
<a href="http://www.youtube.com/watch?v=caMItMzoiII">Le nucléaire au Canada</a> (vid&eacute;o)<br />
<a href="http://www.youtube.com/watch?v=fhCN0Ecdhkk">Systèmes de sûreté des centrales nucléaires</a> (vid&eacute;o)
</p>
</details>
<details className="mrgn-bttm-lg">
<summary>Transport</summary>  	<p><a href="/fra/waste/faq/transport-of-used-nuclear-fuel/index">Transport du combustible nucléaire usé</a> (FAQ)</p>
</details>
<details className="mrgn-bttm-lg">
<summary>Uranium</summary>
<p>
<a href="/fra/reactors/research-reactors/nuclear-facilities/chalk-river/highly-enriched-uranium-in-canada">L&#39;uranium hautement enrichi au Canada</a> <br />
<a href="/fra/resources/fact-sheets/radon-fact-sheet">Le radon au sein du secteur canadien de l&#39;uranium</a> (fiche de renseignements)<br />
<a href="/fra/resources/fact-sheets/depleted-uranium-perspective">Uranium appauvri : le point de vue de l&#39;organisme de  réglementation canadien</a> (fiche de renseignements)
</p>
</details>  
                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }