import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "fr",
                pageTitle: "Visages de la CCSN – Laura Shugart", 
                dateModified: "2021-07-22",
                langToggleUrl: "/eng/about-us/our-experts/laura-shugart"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<div className="grid-12">
<div className="col-md-22">
<div className="col-md-6 ">
<iframe width="380" height="214" src="https://www.youtube.com/embed/SCTulzHESXI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<p>
Laura Shugart <br/>
Agente de projet
</p>
</div>
<div className="col-md-12 ">
<p>En tant quagente de projet à la Division de la coordination de la réglementation des opérations, Laura Shugart aide à administrer le Programme de formation et de qualification des inspecteurs. Le programme permet de sassurer que les inspecteurs acquièrent et maintiennent les connaissances, les compétences et laccréditation nécessaires pour protéger les Canadiens et lenvironnement.</p>
<p>La CCSN, qui a le pouvoir de former et daccréditer des inspecteurs, compte actuellement environ 180 inspecteurs accrédités. Les inspecteurs ont la tâche essentielle de protéger le public et lenvironnement en sassurant que les titulaires de permis respectent la réglementation en vigueur.   </p>
<p>« Si les inspecteurs ne sont pas adéquatement formés dans leur secteur de service, ils nauront pas les compétences nécessaires pour effectuer des inspections efficaces, qui sont indispensables à la protection des Canadiens et de lenvironnement », précise Laura. </p>
<p>Laura travaille à la CCSN depuis 2 ans. Durant cette période, elle a également occupé le poste de coordonnatrice des communications à la Direction des communications stratégiques.</p>
<p><a href="/fra/about-us/history/75-anniversary-faces">Visages de la CCSN</a></p>
</div>
</div>

                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }