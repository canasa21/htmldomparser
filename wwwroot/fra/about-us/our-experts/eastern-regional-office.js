import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "fr",
                pageTitle: "Visages de la CCSN – Bureau régional de l'Est", 
                dateModified: "2021-07-22",
                langToggleUrl: "/eng/about-us/our-experts/eastern-regional-office"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<div className="grid-12">
<div className="col-md-22">
<div className="col-md-6 ">
<img alt="" src="/images/our-experts/web-faces-eastern.png"/>
<p>
Bureau régional de lEst
</p>
</div>
<div className="col-md-12 ">
<p>Le bureau régional de lEst (BRE) de la CCSN est situé à Laval (Québec). Établi en 1980, il sagit du premier bureau régional de la CCSN, et il fournit des services bilingues depuis ses débuts. Létablissement de ce bureau au Québec visait avant tout à faire en sorte que les titulaires de permis et le public francophones puissent être servis dans la langue officielle de leur choix. La région englobe le territoire à lest dOttawa, la province de Québec, les Maritimes, Terre Neuve et Labrador, et le Nunavut.</p>
<p>Les membres de léquipe du BRE effectuent la surveillance des titulaires de permis qui manipulent et possèdent des substances nucléaires, lesquelles peuvent servir à un large éventail dutilisations : commerciales, industrielles, médicales et aux fins de recherche. Léquipe veille aussi à la conformité réglementaire de toutes les activités autorisées qui sont liées à des substances nucléaires, à des appareils à rayonnement et au transport.</p>
<p>Les bureaux régionaux contribuent grandement à la capacité de la CCSN à réglementer les substances nucléaires. Pour les titulaires de permis de lEst du Canada, le fait de pouvoir communiquer directement avec les inspecteurs régionaux est essentiel à létablissement dune relation de confiance. La disponibilité et la proximité de notre bureau donnent lassurance que la CCSN est déterminée à protéger lenvironnement et tous les Canadiens.</p>
<p><a href="/fra/about-us/history/75-anniversary-faces">Visages de la CCSN</a></p>
</div>
</div>

                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }