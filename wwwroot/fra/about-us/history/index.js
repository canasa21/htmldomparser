import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "fr",
                pageTitle: "Histoire de la Commission canadienne de sûreté nucléaire", 
                dateModified: "2022-03-31",
                langToggleUrl: "/eng/about-us/history/"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<div className="row">
<div id="top-banner" className="col-md-12"> <img src="/images/20th-anniversary/web_history_banner.png" alt="" className="img-responsive"/> </div>
<p>Le 12 octobre 1946, la <em>Loi sur le contr&ocirc;le de l&rsquo;&eacute;nergie atomique</em> entre en vigueur. En vertu de la Loi, le gouvernement du Canada &eacute;tablit la Commission de contr&ocirc;le de l&rsquo;&eacute;nergie atomique (CCEA), qui a pour mandat de &laquo;&nbsp;pourvoir au contr&ocirc;le et &agrave; la surveillance de l&rsquo;exploitation et des applications et usages de l&rsquo;&eacute;nergie atomique et de permettre au Canada de participer d&rsquo;une mani&egrave;re efficace aux mesures de contr&ocirc;le international de l&rsquo;&eacute;nergie atomique&nbsp;&raquo;.</p>
<p>Le 31 mai 2000, la <a href="/fra/about-us/">Commission canadienne de s&ucirc;ret&eacute; nucl&eacute;aire</a> (CCSN) est cr&eacute;&eacute;e en vertu de la nouvelle <a href="https://laws-lois.justice.gc.ca/fra/lois/N-28.3/index.html"><em>Loi sur la s&ucirc;ret&eacute; et la r&eacute;glementation nucl&eacute;aires</em></a> (LSRN) et remplace ainsi la CCEA. Cette nouvelle loi &eacute;tablit un fondement l&eacute;gislatif plus solide et moderne permettant &agrave; la CCSN de s&rsquo;acquitter de ses diverses responsabilit&eacute;s. La LSRN &eacute;nonce le mandat, les responsabilit&eacute;s et les pouvoirs de la CCSN et donne &agrave; cette derni&egrave;re le pouvoir de r&eacute;glementer le d&eacute;veloppement, la production et l&rsquo;utilisation de l&rsquo;&eacute;nergie nucl&eacute;aire ainsi que la production, la possession et l&rsquo;utilisation des substances nucl&eacute;aires, de l&rsquo;&eacute;quipement et des renseignements r&eacute;glement&eacute;s au Canada.</p>
<h2>La riche histoire du Canada en mati&egrave;re de r&eacute;glementation nucl&eacute;aire</h2>
<div className="col-md-12">
<div className="col-md-12 ">
<img src="/images/75th-anniversary/updates-landing-milestones.png" alt="" className="img-responsive" />
</div>
<div className="col-md-8 ">
<h3 className="mrgn-tp-0">Fait marquants</h3>
<p>Découvrez lhistoire de la CCSN au fil des décennies. Voyez comment la CCSN est devenue un organisme de réglementation respecté dans le monde entier, qui inspire la confiance et présente une longue tradition de paix et de sûreté.</p>
<p><a className="btn btn-primary" href="/fra/about-us/history/75-anniversary-milestones">Plus d'info</a></p>
<div className="col-md-12">  	<div className="col-md-4 ">
<h3><a href="/fra/about-us/history/75-anniversary-gallery">Galerie de photos</a></h3>
<img src="/images/75th-anniversary/75th_landing_210511_thumbs_Gallery.png" alt="" className="img-responsive"/>
<p>Regardez les photos darchives qui présentent lhistoire dynamique de lorganisation.</p>
</div>
<div className="col-md-4">
<h3><a href="/fra/about-us/history/2021-review">Bilan de l&rsquo;ann&eacute;e</a></h3>
<a href="/fra/about-us/history/2021-review"> <img src="/images/2021-review/web_yir_thumbs_2021_360x203.png" alt="" className="img-responsive"/> </a>
<p>Faits saillants de la CCSN en 2021</p>
</div>
<div className="col-md-4 ">
<h3><a href="/fra/about-us/history/presidents/">Nos pr&eacute;sidents</a></h3>
<a href="/fra/about-us/history/presidents/"> <img src="/images/20th-anniversary/web_history_thumb_presidents.png" alt="" className="img-responsive"/> </a>
<p>Liste des pr&eacute;sidents de 1946 &agrave; ce jour</p>
</div>
                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }