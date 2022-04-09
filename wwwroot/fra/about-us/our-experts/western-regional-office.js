import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "fr",
                pageTitle: "Visages de la CCSN – Bureau régional de l'Ouest", 
                dateModified: "2021-07-22",
                langToggleUrl: "/eng/about-us/our-experts/western-regional-office"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<div className="row">
<div className="col-md-8">
<div className="col-md-4 ">
<img alt="" src="/images/our-experts/web-faces-western.png"/>
<p>
Bureau régional de lOuest
</p>
</div>
<div className="col-md-8 ">
<p>Le Bureau régional de lOuest, situé à Calgary, célèbre ses 40 ans de service en tant que principal centre des opérations pour les inspections effectuées dans lOuest canadien. Six des 9 membres du personnel qui y travaillent sont des inspecteurs. Plusieurs entreprises de cette région utilisent des matières radioactives à des fins industrielles, et les inspecteurs sont amenés à inspecter et à réglementer un groupe de titulaires de permis très diversifié.</p>
<p>Vous êtes-vous déjà demandé comment les canettes de boisson gazeuse ou de bière sont toujours remplies au même niveau dans une chaîne de production, ou comment les constructeurs de routes déterminent la densité de lasphalte nécessaire? Ou encore, quen est-il de la façon dont lintégrité dun gazoduc est évaluée durant la construction, ou de la manière dont les hôpitaux et les cliniques utilisent des matières nucléaires pour limagerie médicale? Il ne sagit là que de quelques-unes des nombreuses applications des substances nucléaires et de certains bons exemples de la façon dont limportant travail des inspecteurs de la CCSN touche la vie quotidienne des Canadiens. </p>
<p>Ce bureau est responsable de lévaluation des programmes de radioprotection des titulaires de permis et des inspections visant à vérifier la conformité aux règlements sur la santé, la sûreté, la sécurité et lenvironnement. Le travail effectué par son personnel fournit au public lassurance que les entreprises utilisant des substances nucléaires le font dune façon qui protège lenvironnement, les travailleurs et le public. </p>
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