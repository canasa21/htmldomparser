import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "fr",
                pageTitle: "Page Web archivée - Guide d'approbation des colis de transport du type B(U) et des colis transportant des matières fissiles  Canada - États-Unis", 
                dateModified: "2013-06-02",
                langToggleUrl: "/eng/acts-and-regulations/consultation/comment/rd-364-invitation"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<p><strong>Faites d&eacute;filer la page et l&rsquo;avis &ldquo;archiv&eacute;&rdquo; appara&icirc;t au haut de la fen&ecirc;tre.</strong></p>
<p><img src="/dist/js/images/archived/warning.gif" alt="Avertissement" title="Avertissement" className="image-actual mrgn-bttm-0" /> Cette page Web a &eacute;t&eacute; archiv&eacute;e dans le Web.</p>
<div id="archived" className="wet-boew-archived col-md-12">
<h2>Contenu archiv&eacute;</h2>
<p>Information archiv&eacute;e dans le Web &agrave; des fins de consultation, de recherche ou de tenue de documents. Cette derni&egrave;re n&rsquo;a aucunement &eacute;t&eacute; modifi&eacute;e ni mise &agrave; jour depuis sa date de mise en archive. Les pages archiv&eacute;es dans le Web ne sont pas assujetties aux normes qui s&rsquo;appliquent aux sites Web du gouvernement du Canada. Conform&eacute;ment &agrave; la <a href="http://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=12316">Politique de communication du gouvernement du Canada</a>, vous pouvez obtenir cette information dans un autre format en <a href="/fra/contact-us/index">communiquant avec nous</a>.</p>
</div>
<a name="invitation"></a>
<h2>Projet de document d&#8217;application de la r&eacute;glementation RD&#8211;364<br />  Invitation de commenter</h2>
<h3><strong>GUIDE D&#8217;APPROBATION DES COLIS DE TRANSPORT DU TYPE B (U) ET DES COLIS TRANSPORTANT DES MATI&Egrave;RES FISSILES CANADA &#8211; &Eacute;TATS UNIS</strong></h3>
<h4>Publi&eacute; consultation externe avec les parties int&eacute;ress&eacute;es <br />
**Mois/Ann&eacute;e de publication**</h4>  <p>La CCSN invite les personnes int&eacute;ress&eacute;es &agrave; participer au projet de document en pr&eacute;sentant par &eacute;crit leurs commentaires au sujet du contenu du document. Cette version provisoire est affich&eacute;e pour une p&eacute;riode de consultation publique de 75 jours depuis le xx&nbsp;mai&nbsp;2008. Veuillez faire parvenir vos questions et vos commentaires, d&#8217;ici le xx&nbsp;juillet&nbsp;2008. Vous pouvez &eacute;galement pr&eacute;senter vos commentaires en ligne, ou &agrave; l&#8217;adresse postale ou &agrave; l&#8217;adresse &eacute;lectronique fournies ci-dessous. </p>  <div style="padding-top:5px;padding-bottom:5px;padding-left:10px;padding-right:10px; border:1px solid #000000; background-color:#ffff99;">
<p>Veuillez noter que la totalit&eacute; des commentaires et des demandes re&ccedil;us seront affich&eacute;s sur le site Web public de la CCSN. Vous ne recevrez pas de r&eacute;ponse officielle, mais vos commentaires seront pris en compte dans le rapport sur la consultation des parties int&eacute;ress&eacute;es externes.</p>  </div>

                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }