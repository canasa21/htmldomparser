import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "fr",
                pageTitle: "Visages de la CCSN – Kiza Sauvé", 
                dateModified: "2021-07-22",
                langToggleUrl: "/eng/about-us/our-experts/faces-kiza-sauve"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<div className="row">
<div className="col-md-8">
<div className="col-md-4 ">
<iframe width="380" height="214" src="https://www.youtube.com/embed/Lbwtn44Tvko" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<p>
Kiza Sauvé<br/>
Directrice, Division des sciences de la santé et de la conformité environnementale
</p>
</div>
<div className="col-md-8 ">
<p>Depuis plus de 20 ans, Kiza contribue grandement à la CCSN, dabord comme stagiaire puis comme directrice de la Division des sciences de la santé et de la conformité environnementale. Elle dirige une équipe technique multidisciplinaire qui sassure que les installations nucléaires autorisées par la CCSN respectent les programmes de protection de lenvironnement. Léquipe effectue également des échantillonnages indépendants de lenvironnement autour de ces installations nucléaires, participe à des recherches en science de la santé et sensibilise les travailleurs et le public aux effets des risques radiologiques sur la santé. </p>
<p>« Nous contribuons directement au mandat de lorganisation au chapitre de la recherche en santé ainsi que de la conformité et de la surveillance environnementales pour assurer la protection de lenvironnement et des personnes. Nous contribuons aussi largement à la diffusion de données scientifiques et techniques dans un langage clair et adapté au public », ajoute Kiza. </p>
<p>Une partie du travail de Kiza et de son équipe sinscrit dans le cadre du Programme indépendant de surveillance environnementale (PISE). Le PISE est un programme direct et tangible qui permet aux Canadiens de consulter les résultats de léchantillonnage environnemental effectué dans leur communauté. Le programme permet aussi à léquipe de se rendre dans les communautés pour discuter de tout ce qui se rapporte à la CCSN.</p>
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