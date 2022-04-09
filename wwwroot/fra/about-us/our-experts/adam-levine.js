import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "fr",
                pageTitle: "Visages de la CCSN – Adam Levine", 
                dateModified: "2021-07-22",
                langToggleUrl: "/eng/about-us/our-experts/adam-levine"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<div className="row">
<div className="col-md-8">
<div className="col-md-4 ">
<img alt="" src="/images/our-experts/web-faces-adam-levine.png"/>
<p>
Adam Levine<br/>
Chef déquipe, Relations avec les Autochtones et financement des participants
</p>
</div>
<div className="col-md-8 ">
<p>Adam Levine travaille à la CCSN depuis 2012. En tant que chef déquipe des relations avec les Autochtones et du financement des participants, Adam est chargé de diriger une équipe dynamique qui travaille avec les communautés autochtones et les membres du public partout au Canada. Son équipe formule des conseils et aide les membres du personnel et de la direction à sassurer que la CCSN sacquitte pleinement de son obligation de consulter les groupes autochtones susceptibles dêtre touchés par les décisions de la Commission et les processus réglementaires de la CCSN. Adam et son équipe travaillent avec plus de 98 communautés autochtones. Il est aussi responsable de la gestion et de ladministration du Programme de financement des participants, qui favorise la participation des groupes autochtones, des ONG, des organisations de la société civile et des membres du public aux processus réglementaires.</p>
<p>Adam indique que « nous mobilisons activement les communautés autochtones concernées tout au long du cycle de vie des installations nucléaires et travaillons à établir des liens de collaboration et de confiance ».</p>
<p>Son équipe veille à ce que les communautés locales, les groupes autochtones et les principales parties intéressées aient la possibilité de donner leurs opinions lors des séances de la Commission. Léquipe joue un rôle crucial en sassurant que la CCSN dispose dun processus de réglementation transparent et accessible qui inspire la confiance à légard de ses décisions et de sa surveillance réglementaire continue des installations nucléaires au Canada.</p>
<p>« La possibilité dinteragir avec des gens et des communautés de différentes régions du pays est laspect de mon travail que jaime le plus », précise Adam.</p>
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