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
                    
<div className="row">
<div className="col-md-8">
<p>Faites connaissance avec certains de nos collègues des quatre coins du Canada. Tous les jours, ils sefforcent dassurer la sûreté des Canadiens et de notre environnement. Voyez en quoi consiste leur travail et comment ils laccomplissent. Voici donc quelques-uns des visages de la CCSN.</p>
</div>
<div className="col-md-8 equalize">
<div className="col-md-4 ">
<img alt="" src="/images/our-experts/web-faces-elias-dagher.png"/>
<p><a href="/fra/about-us/our-experts/elias-dagher">Elias Dagher</a></p>
<p>Spécialiste de lévaluation des risques environnementaux</p>  	</div>  	<div className="col-md-4">
<img alt="" src="/images/our-experts/web-faces-richard-dubois.png"/>
<p><a href="/fra/about-us/our-experts/richard-dubois">Richard Dubois</a></p>
<p>Dirigeant principal de la sécurité</p>  	</div>  	<div className="col-md-4 ">
<img alt="" src="/images/our-experts/web-faces-eastern.png"/>
<p><a href="/fra/about-us/our-experts/eastern-regional-office">Bureau régional de lEst</a></p>  	</div>
</div>
<div className="col-md-8 equalize">
<div className="col-md-4 ">
<img alt="" src="/images/our-experts/web-faces-louise-levert.png"/>
<p><a href="/fra/about-us/our-experts/louise-levert">Louise Levert</a></p>
<p>Agente principale du tribunal</p>  	</div>  	<div className="col-md-4">
<img alt="" src="/images/our-experts/web-faces-adam-levine.png"/>
<p><a href="/fra/about-us/our-experts/adam-levine">Adam Levine</a></p>
<p>Chef déquipe, Relations avec les Autochtones et financement des participants</p>  	</div>  	<div className="col-md-4 ">
<img alt="" src="/images/our-experts/web-faces-kavita-murthy.png"/>
<p><a href="/fra/about-us/our-experts/kavita-murthy">Kavita Murthy</a></p>
<p>Directrice générale, Direction de la réglementation du cycle et des installations nucléaires</p>  	</div>
</div>
<div className="col-md-8 equalize">
<div className="col-md-4 ">
<img alt="" src="/images/our-experts/web-faces-son-nguyen.png"/>
<p><a href="/fra/about-us/our-experts/son-nguyen">Son Nguyen</a></p>
<p>Spécialiste technique en géoscience</p>  	</div>  	<div className="col-md-4">
<img alt="" src="/images/our-experts/web-faces-jean-claude-poirier.png"/>
<p><a href="/fra/about-us/our-experts/jean-claude-poirier">Jean-Claude (J.-C.) Poirier</a></p>
<p>Agent principal de projet</p>  	</div>  	<div className="col-md-4 ">
<img alt="" src="/images/our-experts/web-faces-kiza-sauve.png"/>
<p><a href="/fra/about-us/our-experts/faces-kiza-sauve">Kiza Sauvé</a></p>
<p>Directrice, Division des sciences de la santé et de la conformité environnementale</p>  	</div>
</div>
<div className="col-md-8 equalize">
<div className="col-md-4 ">
<img alt="" src="/images/our-experts/web-faces-laura-shugart.png"/>
<p><a href="/fra/about-us/our-experts/laura-shugart">Laura Shugart</a></p>
<p>Agente de projet</p>  	</div>  	<div className="col-md-4">
<img alt="" src="/images/our-experts/web-faces-southern-ontario.png"/>
<p><a href="/fra/about-us/our-experts/southern-ontario-regional-office">Bureau régional du sud de lOntario</a></p>  	</div>  	<div className="col-md-4 ">
<img alt="" src="/images/our-experts/web-faces-western.png"/>
<p><a href="/fra/about-us/our-experts/western-regional-office">Bureau régional de lOuest</a></p>  	</div>
</div>  </div>
</div>  </div>
                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }