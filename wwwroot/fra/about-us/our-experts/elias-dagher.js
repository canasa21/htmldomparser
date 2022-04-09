import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "fr",
                pageTitle: "Visages de la CCSN – Elias Dagher", 
                dateModified: "2021-07-22",
                langToggleUrl: "/eng/about-us/our-experts/elias-dagher"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<div className="row">
<div className="col-md-8">
<div className="col-md-4 ">
<iframe width="380" height="214" src="https://www.youtube.com/embed/eopy3jyzh0A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<p>
Elias Dagher<br/>
Spécialiste de lévaluation des risques environnementaux
</p>
</div>
<div className="col-md-8 ">
<p>Elias Dagher travaille à la CCSN en protection de lenvironnement et gestion des déchets radioactifs depuis 12 ans, et a tout récemment accepté le rôle de spécialiste de lévaluation des risques environnementaux. Il effectue les évaluations techniques de documents présentés par des titulaires de permis. Ces documents comprennent les évaluations des risques environnementaux ainsi que les évaluations de la sûreté post-fermeture et les dossiers de sûreté liés aux projets de stockage définitif des déchets radioactifs. Il participe aussi à lélaboration de documents dapplication de la réglementation relatifs à la protection de lenvironnement et à la gestion des déchets radioactifs.</p>
<p>« Notre travail consiste à nous assurer que les activités nucléaires réglementées au Canada sont sécuritaires pour les Canadiens, aujourdhui comme à lavenir. Les Canadiens devraient savoir que notre travail est fait de manière à protéger les personnes et lenvironnement autour des installations nucléaires, quil sagisse dévaluations techniques, dactivités de conformité, de recherches liées à la protection de lenvironnement, ou encore de stockage définitif des déchets radioactifs », précise Elias.</p>
<p>Dans lexercice de ses fonctions, Elias a contribué de manière considérable à lélaboration et à la mise en œuvre du cadre de réglementation de la CCSN visant la protection de lenvironnement, en particulier le cadre pour le contrôle des rejets dans lenvironnement. Ce cadre important favorise la transparence et porte sur la prévention de la pollution, les limites de rejets autorisées et les exigences liées à la gestion adaptative.</p>
<p><a href="/fra/about-us/history/75-anniversary-faces">Visages de la CCSN</a></p>
</div>
</div>
</div>
</div>  </div>
                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }