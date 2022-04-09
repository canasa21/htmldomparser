import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "fr",
                pageTitle: "Visages de la CCSN – Jean-Claude (J.-C.) Poirier", 
                dateModified: "2021-07-22",
                langToggleUrl: "/eng/about-us/our-experts/jean-claude-poirier"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<div className="row">
<div className="col-md-8">
<div className="col-md-4 ">
<img alt="" src="/images/our-experts/web-faces-jean-claude-poirier.png"/>
<p>
Jean-Claude (JC) Poirier<br/>
Agent principal de projet
</p>
</div>
<div className="col-md-8 ">
<p>Jean-Claude (J.-C.) Poirier, un agent principal de projet qui fait partie de la CCSN depuis 26 ans, travaille à des initiatives damélioration organisationnelle à la Division de la gestion interne de la qualité. </p>
<p>J.-C. a dirigé le développement du Programme des sanctions administratives pécuniaires (SAP) de la CCSN dont il assure maintenant la gestion. Il a aussi joué un rôle clé dans lélaboration du processus interne Réaliser une inspection et de la stratégie dapplication de la loi. À lheure actuelle, il dirige lélaboration de la position de la CCSN concernant les enquêtes. Pour ce faire, il collabore avec des experts en formation pour préparer et donner des cours liés au Programme de formation et de qualification des inspecteurs.</p>
<p>« Tout au long de ma carrière, je me suis efforcé daccroître la qualité de notre régime de conformité et dapplication de la loi afin de servir et de protéger plus efficacement les Canadiens », déclare J.-C. </p>
<p>Grâce à sa vaste expertise, il est devenu un spécialiste dans son domaine. Il participe aussi activement au groupe de travail sur les SAP de la communauté des régulateurs fédéraux, et il en est le président depuis 9 ans.</p>
<p>Plus récemment, J.-C. a été invité à aider lAgence de la santé publique du Canada à mettre au point et à améliorer son programme de conformité et dapplication de la loi en vertu de la Loi sur la mise en quarantaine pour faire respecter les exigences relatives à la COVID 19 sappliquant aux voyageurs de retour au pays qui se présentent aux postes frontaliers canadiens.</p>
<p>En juin 2021, J.-C. a reçu un prix dexcellence en reconnaissance de sa contribution exceptionnelle <a href="/fra/resources/emergency-management-and-safety/pandemic-preparedness">aux efforts du Canada pendant la pandémie de COVID-19.</a></p>
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