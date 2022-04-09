import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "fr",
                pageTitle: "Visages de la CCSN – Louise Levert", 
                dateModified: "2021-07-22",
                langToggleUrl: "/eng/about-us/our-experts/louise-levert"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<div className="row">
<div className="col-md-8">
<div className="col-md-4 ">
<img alt="" src="/images/our-experts/web-faces-louise-levert.png"/>
<p>
Louise Levert<br/>
Agente principale du tribunal
</p>
</div>
<div className="col-md-8 ">
<p>Louise Levert travaille à la CCSN depuis plus de 20 ans. Dans son rôle actuel dagente principale du tribunal, elle planifie et coordonne les audiences et les réunions publiques de la Commission. Elle agit comme point de contact entre les commissaires, le personnel de la CCSN, les titulaires de permis et les intervenants lors des séances publiques. Comme elle lexplique : « Les audiences et les réunions publiques de la Commission offrent une excellente occasion aux Canadiens de sinformer sur la façon dont la CCSN réglemente le secteur nucléaire et délivre des permis. Mon travail consiste à aider les personnes intéressées à participer au processus et à exprimer leur opinion. »</p>
<p>À titre de greffière pour tous les dossiers de la Commission, elle veille à ce que les personnes intéressées aient facilement accès aux documents liés aux séances.
<p>En tant quambassadrice de la CCSN, elle sassure que tous ceux qui souhaitent participer aux séances de la Commission ont les renseignements, les outils et lorientation dont ils ont besoin pour exprimer leurs points de vue.</p>
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