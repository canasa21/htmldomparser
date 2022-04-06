import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "fr",
                pageTitle: "Visages de la CCSN – Richard Dubois", 
                dateModified: "2021-07-22",
                langToggleUrl: "/eng/about-us/our-experts/richard-dubois"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<div className="grid-12">
<div className="col-md-22">
<div className="col-md-6 ">
<img alt="" src="/images/our-experts/web-faces-richard-dubois.png"/>
<p>
Richard Dubois<br/>
Dirigeant principal de la sécurité
</p>
</div>
<div className="col-md-12 ">
<p>Richard Dubois joue un rôle essentiel dans la création dun environnement de travail sûr et sécuritaire pour tous les employés de la CCSN. En tant que conseiller principal de la sécurité, il fournit des conseils stratégiques, en plus de gérer et de diriger les programmes de sécurité interne. En cas durgence non nucléaire, Richard et son équipe sont chargés de gérer efficacement le plan de continuité des activités de la CCSN et de fournir aux directions de lorientation pour assurer le maintien des services essentiels.</p>
<p>Dans le cadre de ses fonctions, Richard détermine les risques relatifs à la sécurité organisationnelle pour protéger nos employés et nos biens de menaces, comme les malfaiteurs ou les cybercriminels. Il collabore avec les principaux organismes fédéraux responsables de la sécurité pour mieux comprendre les menaces nouvelles et émergentes liées au portefeuille de lénergie du gouvernement du Canada.</p>
<p>« Ce dont je suis le plus fier, cest la collaboration et le travail déquipe qui ont permis dactualiser et de mettre en œuvre rapidement notre plan de continuité des activités au début de la pandémie pour éviter que les services opérationnels essentiels ne soient touchés. Je crois que nous avons fait toute une différence », affirme Richard.</p>
<p><a href="/fra/about-us/history/75-anniversary-faces">Visages de la CCSN</a></p>
</div>
</div>

                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }