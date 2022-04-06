import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "fr",
                pageTitle: "Visages de la CCSN – Bureau régional du sud de l'Ontario", 
                dateModified: "2021-07-22",
                langToggleUrl: "/eng/about-us/our-experts/southern-ontario-regional-office"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<div className="grid-12">
<div className="col-md-22">
<div className="col-md-6 ">
<img alt="" src="/images/our-experts/web-faces-southern-ontario.png"/>
<p>
Bureau régional du sud de lOntario
</p>
</div>
<div className="col-md-12 ">
<p>La CCSN assure une présence dans le sud de lOntario depuis 43 ans. Le bureau régional du sud de lOntario (BRSO), qui est le point dattache de la Division de linspection des activités autorisées de la région du Grand Toronto, mène des activités réglementaires au Manitoba, en Saskatchewan et dans la majeure partie de lOntario. Cette vaste région représente environ la moitié de la population du Canada et comprend une importante concentration de permis de tous types pour des applications médicales, industrielles et de recherche. </p>
<p>Le personnel du BRSO effectue la surveillance des activités de vérification de la conformité de plusieurs centaines de titulaires de permis de ce territoire. Ce bureau régional est différent des autres, car il assure la surveillance dune plus grande proportion demplacements et dactivités autorisés à risque moyen, notamment les jauges nucléaires et la médecine nucléaire. Il surveille aussi les activités spécialisées de recherche et de production disotopes de lindustrie nucléaire, comme celles menées par lUniversité McMaster, Isologic et le Saskatchewan Research Council. Ce bureau compte 9 membres du personnel qui réalisent des inspections dans les hôpitaux et les pharmacies fournissant des produits radiopharmaceutiques à des milliers de Canadiens tous les jours. </p>
<p>Les membres du personnel du BRSO, qui agissent comme les yeux et les oreilles de la CCSN sur le terrain, sont principalement des employés de première ligne qui traitent avec le public. La proximité aux titulaires de permis permet à léquipe de réagir rapidement et de promouvoir de façon plus proactive notre mandat. </p>
<p>Le public et lenvironnement sont protégés grâce aux experts du BRSO qui réglementent une vaste région et tiennent les titulaires de permis responsables de lutilisation sécuritaire des matières nucléaires.</p>
<p><a href="/fra/about-us/history/75-anniversary-faces">Visages de la CCSN</a></p>
</div>
</div>

                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }