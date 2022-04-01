import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "fr",
                pageTitle: "Visages de la CCSN", 
                dateModified: "2021-07-19",
                langToggleUrl: "/eng/about-us/history/75-anniversary-faces"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<p>Faites connaissance avec certains de nos collègues des quatre coins du Canada. Tous les jours, ils sefforcent dassurer la sûreté des Canadiens et de notre environnement. Voyez en quoi consiste leur travail et comment ils laccomplissent. Voici donc quelques-uns des visages de la CCSN.</p>
<img src="/images/web-faces-elias-dagher.png"/>
<p><a href="/fra/about-us/our-experts/elias-dagher">Elias Dagher</a></p>
<p>Spécialiste de lévaluation des risques environnementaux</p>
<img src="/images/web-faces-richard-dubois.png"/>
<p><a href="/fra/about-us/our-experts/richard-dubois">Richard Dubois</a></p>
<p>Dirigeant principal de la sécurité</p>
<img src="/images/web-faces-eastern.png"/>
<p><a href="/fra/about-us/our-experts/eastern-regional-office">Bureau régional de lEst</a></p>
<img src="/images/web-faces-louise-levert.png"/>
<p><a href="/fra/about-us/our-experts/louise-levert">Louise Levert</a></p>
<p>Agente principale du tribunal</p>
<img src="/images/web-faces-adam-levine.png"/>
<p><a href="/fra/about-us/our-experts/adam-levine">Adam Levine</a></p>
<p>Chef déquipe, Relations avec les Autochtones et financement des participants</p>
<img src="/images/web-faces-kavita-murthy.png"/>
<p><a href="/fra/about-us/our-experts/kavita-murthy">Kavita Murthy</a></p>
<p>Directrice générale, Direction de la réglementation du cycle et des installations nucléaires</p>
<img src="/images/web-faces-son-nguyen.png"/>
<p><a href="/fra/about-us/our-experts/son-nguyen">Son Nguyen</a></p>
<p>Spécialiste technique en géoscience</p>
<img src="/images/web-faces-jean-claude-poirier.png"/>
<p><a href="/fra/about-us/our-experts/jean-claude-poirier">Jean-Claude (J.-C.) Poirier</a></p>
<p>Agent principal de projet</p>
<img src="/images/web-faces-kiza-sauve.png"/>
<p><a href="/fra/about-us/our-experts/faces-kiza-sauve">Kiza Sauvé</a></p>
<p>Directrice, Division des sciences de la santé et de la conformité environnementale</p>
<img src="/images/web-faces-laura-shugart.png"/>
<p><a href="/fra/about-us/our-experts/laura-shugart">Laura Shugart</a></p>
<p>Agente de projet</p>
<img src="/images/web-faces-southern-ontario.png"/>
<p><a href="/fra/about-us/our-experts/southern-ontario-regional-office">Bureau régional du sud de lOntario</a></p>
<img src="/images/web-faces-western.png"/>
<p><a href="/fra/about-us/our-experts/western-regional-office">Bureau régional de lOuest</a></p>

                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }