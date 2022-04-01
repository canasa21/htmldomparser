import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "fr",
                pageTitle: "Commission canadienne de sûreté nucléaire &ndash; 75 ans de sûreté nucléaire au Canada", 
                dateModified: "2022-01-04",
                langToggleUrl: "/eng/about-us/history/75-anniversary"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<img src="/images/75_landing_ban.png" alt="" />
<p>Dans les  ann&eacute;es 1940, l&rsquo;arriv&eacute;e de la technologie nucl&eacute;aire fait na&icirc;tre l&rsquo;engouement  pour l&rsquo;&eacute;nergie illimit&eacute;e, mais suscite aussi l&rsquo;incertitude, la curiosit&eacute; et une  certaine crainte, surtout dans le contexte du d&eacute;veloppement des armes  nucl&eacute;aires. Le besoin d&rsquo;un contr&ocirc;le technologique, de connaissances et de  surveillance est &eacute;vident. C&rsquo;est le d&eacute;but d&rsquo;une qu&ecirc;te en vue de bien r&eacute;glementer  cette innovation technologique partout dans le monde, y compris au Canada.</p>
<p className="mrgn-bttm-lg">Le 12  octobre 2021 marque le 75e anniversaire de la proclamation de la Loi sur le  contr&ocirc;le de l&rsquo;&eacute;nergie atomique par le gouvernement du Canada. Depuis lors, le  Canada a b&acirc;ti une riche histoire de r&eacute;glementation nucl&eacute;aire et est devenu l&rsquo;un  des chefs de file mondiaux les plus respect&eacute;s dans le domaine.</p>
<img src="/images/75_landing_milestones.png" alt="" />
<h2 className="mrgn-tp-0">Fait marquants</h2>
<p>D&eacute;couvrez l&rsquo;histoire de la CCSN au fil des d&eacute;cennies. Voyez comment la CCSN est devenue un  organisme de r&eacute;glementation respect&eacute; dans le monde entier, qui inspire la  confiance et pr&eacute;sente une longue tradition de paix et de s&ucirc;ret&eacute;. </p>
<p><a className="btn btn-primary" href="/fra/about-us/history/75-anniversary-milestones">Plus d&rsquo;info</a></p>
<img src="/images/75th-landing-faces-02.png" alt="" />
<h2 className="mrgn-tp-0">Visages de la CCSN</h2>
<p>Nos vaillants et dévoués collègues de diverses origines contribuent tous les jours à la sûreté et à la protection des Canadiens et de lenvironnement. Découvrez certains des visages de la CCSN.</p>
<p><a className="btn btn-primary" href="/fra/about-us/history/75-anniversary-faces">Plus dinfos</a></p>
<h2>En vedette</h2>
<h3><a href="/fra/about-us/our-experts/index">CCSN sp&eacute;cialistes</a></h3>
<img src="/images/web_experts_feature.png" alt="" />
<p>Rencontrez les sp&eacute;cialistes de la CCSN.</p>
<h3><a href="/fra/about-us/history/presidents/index">Pr&eacute;sidents de la CCSN</a></h3>
<img src="/images/web_history_thumb_presidents.png" alt="" />
<p>Rencontrez tous les pr&eacute;sidents de la CCSN.</p>
<h3><a href="/fra/about-us/history/75-anniversary-gallery">Galerie de photos</a></h3>
<img src="/images/75th_landing_210511_thumbs_Gallery.png" alt="" />
<p>Regardez les photos darchives qui présentent lhistoire dynamique de lorganisation.</p>

                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }