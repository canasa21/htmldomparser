import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "fr",
                pageTitle: "Visages de la CCSN – Kavita Murthy", 
                dateModified: "2021-07-22",
                langToggleUrl: "/eng/about-us/our-experts/kavita-murthy"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<div className="row">
<div className="col-md-12">
<div className="col-md-4 ">
<iframe width="380" height="214" src="https://www.youtube.com/embed/AVG8VRrC7ho" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
<p>
Kavita Murthy<br/>
Directrice générale, Direction de la réglementation du cycle et des installations nucléaires
</p>
</div>
<div className="col-md-12 ">
<p>Kavita Murthy est directrice générale de la Direction de la réglementation du cycle et des installations nucléaires. Cette direction sassure que la sécurité du public et de lenvironnement nest pas compromise par les activités menées par les installations des secteurs du cycle du combustible nucléaire, des réacteurs de recherche et du traitement des substances nucléaires. Kavita travaille à la CCSN depuis 18 ans.</p>
<p>« Tous nos travaux ont la sécurité des Canadiens comme objectif premier. Il est non seulement important que le public comprenne les risques associés aux activités nucléaires, mais aussi quil connaisse le travail quaccomplit la CCSN pour garantir que les personnes réalisant de telles activités appliquent des mesures de sûreté et de contrôle appropriées », affirme Kavita. </p>
<p>Elle a occupé 3 autres postes de direction, et elle a joué un rôle déterminant dans létablissement des exigences réglementaires relatives à laccréditation des responsables de la radioprotection travaillant à des installations nucléaires de catégorie II. </p>
<p>De nature proactive et stratégique, Kavita a instauré les réunions techniques de division au sujet des inspections. Ces réunions permettent déchanger librement des renseignements et de transmettre des connaissances au sein de la division, ajoutant ainsi à la transparence du travail de la CCSN.</p>
<p><a href="/fra/about-us/history/75-anniversary-faces">Visages de la CCSN</a></p>
</div>
                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }