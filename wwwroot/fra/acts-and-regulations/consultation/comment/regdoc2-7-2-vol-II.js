import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "fr",
                pageTitle: "REGDOC-2.7.2, Dosimétrie, tome II : Exigences techniques et relatives aux systèmes de gestion pour les services de dosimétrie", 
                dateModified: "2018-02-13",
                langToggleUrl: "/eng/acts-and-regulations/consultation/comment/regdoc2-7-2-vol-II"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<h2>Préface</h2>  <p>Ce document dapplication de la réglementation fait partie de la série de documents dapplication de la réglementation de la CCSN sur la radioprotection. La liste complète des séries figure à la fin de ce document et elle peut être consultée à partir du <a href="/fra/acts-and-regulations/regulatory-documents/index">site Web de la CCSN</a>.</p>  <p>Le document dapplication de la réglementation REGDOC-2.7.2, <em>Dosimétrie, tome II : Exigences techniques et relatives aux systèmes de gestion pour les services de dosimétrie</em>, énonce les exigences et lorientation servant à sassurer que les services de dosimétrie autorisés satisfont aux exigences techniques et que des mesures du système de gestion sont prises conformément à lintention de la Loi sur la sûreté et la réglementation nucléaires et du <em>Règlement sur la radioprotection</em>.</p>   <p>Ce document remplace la norme dapplication de la réglementation S-106, rév. 1, <em>Exigences techniques et dassurance de la qualité pour les services de dosimétrie</em>, publiée en mai 2006.</p>  <p>Le présent document se veut un élément du fondement dautorisation dune installation ou dune activité réglementée, conformément à la portée énoncée du document. Il sera intégré soit aux conditions et aux mesures de sûreté et de réglementation dun permis, soit aux mesures de sûreté et de réglementation décrites dans la demande de permis et les documents soumis à lappui de cette demande.</p>   <p>Lorientation contenue dans ce document vise à informer le demandeur, à expliquer plus en détail des exigences ou à fournir de lorientation aux demandeurs et aux titulaires de permis sur la façon de répondre aux exigences. Il précise aussi comment le personnel de la CCSN évalue des problèmes particuliers ou des données particulières pendant lexamen des demandes de permis. Il est attendu que les titulaires de permis suivent les orientations contenues dans ce document. Dans le cas où dautres approches sont adoptées, les titulaires de permis doivent démontrer que celles-ci répondent aux exigences réglementaires.</p>
<div className="alert alert-info">
<p><strong>Remarque importante :</strong> Ce document fait partie du fondement dautorisation dune installation ou dune activité réglementée si on sy réfère directement ou indirectement dans le permis (notamment dans des documents cités en référence du titulaire de permis).</p>  <p>Le fondement dautorisation établit les conditions limites du rendement acceptable pour une installation ou une activité réglementée et établit les bases du programme de conformité de la CCSN à légard de cette installation ou activité réglementée.</p>  <p>Dans le cas où le document est un élément du fondement dautorisation, le terme « doit » est employé pour exprimer une exigence à laquelle le titulaire ou le demandeur de permis doit se conformer; le terme « devrait » dénote une orientation ou une mesure conseillée; le terme « pourrait » exprime une option ou une mesure conseillée ou acceptable dans les limites de ce document dapplication de la réglementation; et le terme « peut » exprime une possibilité ou une capacité.</p>   <p>Aucune information contenue dans le présent document ne doit être interprétée comme libérant le titulaire de permis de toute autre exigence pertinente. Le titulaire de permis a la responsabilité de prendre connaissance de tous les règlements et de toutes les conditions de permis applicables et dy adhérer.</p>
</div>
<div className="module-table-contents">  <h2>Table des mati&egrave;res</h2>
<ul>
<li><a href="#sec1">1. Introduction</a>
<ul>
<li><a href="#sec1-1">1.1 Objet</a></li>
<li><a href="#sec1-2">1.2 Port&eacute;e</a></li>
<li><a href="#sec1-3">1.3 L&eacute;gislation pertinente</a></li>
</ul></li>
<li><a href="#sec2">2. Exigences techniques &ndash; Services de dosim&eacute;trie des rayonnements externes</a>
<ul>
<li><a href="#sec2-1">2.1 Grandeurs &agrave; mesurer</a></li>
<li><a href="#sec2-2">2.2 &Eacute;quivalent de dose minimal mesurable</a></li>
<li><a href="#sec2-3">2.3 Normes d&rsquo;exactitude et limites d&rsquo;incertitude</a></li>
<li><a href="#sec2-4">2.4 Essais de type</a></li>
<li><a href="#sec2-5">2.5 Essais de fonctionnement</a></li>
<li><a href="#sec2-6">2.6 Essais ind&eacute;pendants</a></li>
</ul></li>
<li><a href="#sec3">3. Exigences techniques &ndash; Services de dosim&eacute;trie neutronique de routine</a>
<ul>
<li><a href="#sec3-1">3.1 Donn&eacute;es et rapports</a></li>
<li><a href="#sec3-2">3.2 Essai ind&eacute;pendants</a></li>
<li><a href="#sec3-3">3.3 Essais de fonctionnement</a></li>
<li><a href="#sec3-4">3.4 Documentation</a></li>
</ul></li>
<li><a href="#sec4">4. Exigences techniques &ndash; Services de dosim&eacute;trie des rayonnements internes</a>
<ul>
<li><a href="#sec4-1">4.1 Grandeurs &agrave; mesurer</a></li>
<li><a href="#sec4-2">4.2 Normes d&rsquo;exactitude et de pr&eacute;cision <em>in vitro</em></a></li>
<li><a href="#sec4-3">4.3 Essais de fonctionnement pour les mesures <em>in vitro</em></a></li>
<li><a href="#sec4-4">4.4 Essais de les pour les mesures <em>in vitro</em></a></li>
<li><a href="#sec4-5">4.5 Normes d&rsquo;exactitude et de pr&eacute;cision <em>in vivo</em></a></li>
<li><a href="#sec4-6">4.6 Essais ind&eacute;pendants pour les mesures <em>in vivo</em></a></li>
<li><a href="#sec4-7">4.7 Interpr&eacute;tation des donn&eacute;es du biodosage</a></li>
</ul></li>
<li><a href="#sec5">5. Exigences techniques &ndash; Services de dosim&eacute;trie du radon et des produits de filiation du radon</a>
<ul>
<li><a href="#sec5-1">5.1 Grandeurs &agrave; mesurer</a></li>
<li><a href="#sec5-2">5.2 Exposition ou concentration minimale mesurable</a></li>
<li><a href="#sec5-3">5.3 Normes d&rsquo;exactitude pour les mesures de l&rsquo;exposition aux produits de filiation du radon</a></li>
<li><a href="#sec5-4">5.4 Essai de type pour les instruments de mesure des produits de filiation du radon</a></li>
<li><a href="#sec5-5">5.5 Essais ind&eacute;pendants pour la surveillance des produits de filiation du radon</a></li>
<li><a href="#sec5-6">5.6 Normes d&rsquo;exactitude pour les mesures de l&rsquo;exposition au radon</a></li>
<li><a href="#sec5-7">5.7 Essais de type pour les mesures de l&rsquo;exposition au radon</a></li>
<li><a href="#sec5-8">5.8 Essais ind&eacute;pendants pour les mesures de l&rsquo;exposition au radon</a></li>
</ul></li>
<li><a href="#sec6">6. Exigences techniques &ndash; Services de dosim&eacute;trie pour les incorporations de mati&egrave;res radioactives en suspension dans l&rsquo;air</a>
<ul>
<li><a href="#sec6-1">6.1 Grandeurs &agrave; mesurer</a></li>
<li><a href="#sec6-2">6.2 Exposition ou concentration minimale mesurable</a></li>
<li><a href="#sec6-3">6.3 Normes d&rsquo;exactitude pour les mesures des mati&egrave;res radioactives en suspension dans l&rsquo;air</a></li>
<li><a href="#sec6-4">6.4 Documentation</a></li>
</ul></li>
<li><a href="#sec7">7. Exigences en mati&egrave;re de syst&egrave;me de gestion</a>
<ul>
<li><a href="#sec7-1">7.1 G&eacute;n&eacute;ralit&eacute;s</a></li>
<li><a href="#sec7-2">7.2 Politique de la direction</a></li>
<li><a href="#sec7-3">7.3 Description du syst&egrave;me de gestion</a></li>
<li><a href="#sec7-4">7.4 Revue par la direction</a></li>
<li><a href="#sec7-5">7.5 Organisation et autorit&eacute;</a></li>
<li><a href="#sec7-6">7.6 Comp&eacute;tences du personnel</a></li>
<li><a href="#sec7-7">7.7 Approvisionnement</a></li>
<li><a href="#sec7-8">7.8 Contr&ocirc;le du travail</a></li>
<li><a href="#sec7-9">7.9 Contr&ocirc;le des modifications</a></li>
<li><a href="#sec7-10">7.10 Contr&ocirc;le des documents</a></li>
<li><a href="#sec7-11">7.11 &Eacute;talonnage et entretien</a></li>
<li><a href="#sec7-12">7.12 V&eacute;rification</a></li>
<li><a href="#sec7-13">7.13 Non-conformit&eacute;</a></li>
<li><a href="#sec7-14">7.14 Mesures correctives</a></li>
<li><a href="#sec7-15">7.15 Enregistrements</a></li>
<li><a href="#sec7-16">7.16 V&eacute;rifications</a></li>
</ul></li>
<li><a href="#appA">Annexe A : Exactitude et incertitude en dosim&eacute;trie externe</a>
<ul>
<li><a href="#appA-1">A.1 Introduction</a></li>
<li><a href="#appA-2">A.2 Valeur conventionnellement vraie</a></li>
<li><a href="#appA-3">A.3 Exactitude et precision</a></li>
<li><a href="#appA-4">A.4 Exemples de calculs</a></li>
</ul></li>
<li><a href="#appB">Annexe B : Normes relatives aux essais de type en dosim&eacute;trie externe</a>
<ul>
<li><a href="#appB-1">B.1 Introduction</a></li>
<li><a href="#appB-2">B.2 Grandeurs d&rsquo;influence et caract&eacute;ristiques du syst&egrave;me</a></li>
<li><a href="#appB-3">B.3 Fant&ocirc;mes</a></li>
<li><a href="#appB-4">B.4 Angle d&rsquo;incidence du rayonnement</a></li>
<li><a href="#appB-5">B.5 &Eacute;nergies photoniques</a></li>
<li><a href="#appB-6">B.6 &Eacute;nergie b&ecirc;ta</a></li>
</ul></li>
<li><a href="#appC">Annexe C : Normes relatives aux essais ind&eacute;pendants en dosim&eacute;trie photonique externe</a>
<ul>
<li><a href="#appC-1">C.1 Introduction</a></li>
<li><a href="#appC-2">C.2 Protocole relatif aux dosim&egrave;tres devant faire l&rsquo;objet d&rsquo;un traitement</a></li>
<li><a href="#appC-3">C.3 Protocole relatif aux dosim&egrave;tres n&rsquo;exigeant pas de traitement</a></li>
<li><a href="#appC-4">C.4 Rapport</a></li>
</ul></li>
<li><a href="#appD">Annexe D : Normes relatives aux essais ind&eacute;pendants en dosim&eacute;trie des extr&eacute;mit&eacute;s</a>
<ul>
<li><a href="#appD-1">D.1 Introduction</a></li>
<li><a href="#appD-2">D.2 Protocole relatif aux dosim&egrave;tres devant faire l&rsquo;objet d&rsquo;un traitement</a></li>
<li><a href="#appD-3">D.3 Protocole relatif aux dosim&egrave;tres n&rsquo;exigeant pas de traitement</a></li>
<li><a href="#appD-4">D.4 Rapport</a></li>
</ul></li>
<li><a href="#appE">Annexe E : Normes relatives aux essais ind&eacute;pendants en dosim&eacute;trie neutronique</a>
<ul>
<li><a href="#appE-1">E.1 Introduction</a></li>
<li><a href="#appE-2">E.2 Protocole relatif aux dosim&egrave;tres individuels devant faire l&rsquo;objet d&rsquo;un traitement</a></li>
<li><a href="#appE-3">E.3 Protocole relatif aux dosim&egrave;tres individuels n&rsquo;exigeant pas de traitement</a></li>
<li><a href="#appE-4">E.4 Rapport</a></li>
</ul></li>
<li><a href="#appF">Annexe F : Normes relatives aux essais ind&eacute;pendants en dosim&eacute;trie interne</a>
<ul>
<li><a href="#appF-1">F.1 Introduction</a></li>
<li><a href="#appF-2">F.2 Essais ind&eacute;pendants relatifs aux relev&eacute;s <em>in vitro</em></a></li>
<li><a href="#appF-3">F.3 Essais ind&eacute;pendants relatifs aux relev&eacute;s <em>in vivo</em></a></li>
<li><a href="#appF-4">F.4 Rapport</a></li>
</ul></li>
<li><a href="#appG">Annexe G : Normes relatives aux essais ind&eacute;pendants pour la mesure de l&rsquo;exposition au radon et aux produits de filiation du radon</a>
<ul>
<li><a href="#appG-1">G.1 Introduction</a></li>
<li><a href="#appG-2">G.2 Protocole relatif aux moniteurs individuels</a></li>
<li><a href="#appG-3">G.3 &Eacute;chantillonnage instantan&eacute;</a></li>
<li><a href="#appG-4">G.4 Rapport</a></li>
</ul></li>
<li><a href="#appH">Annexe H : Exemples de calculs pour les mesures de la concentration minimale et incertitudes li&eacute;es au comptage</a>
<ul>
<li><a href="#appH-1">H.1 Exemple de calcul pour la d&eacute;termination de la concentration minimale mesurable</a></li>
<li><a href="#appH-2">H.2 Exemple de calcul de l&rsquo;incertitude</a></li>
</ul></li>
<li><a href="#appI">Annexe I : Normes relatives aux dossiers de doses</a>
<ul>
<li><a href="#appI-1">I.1 Introduction</a></li>
<li><a href="#appI-2">I.2 Identification individuelle</a></li>
<li><a href="#appI-3">I.3 Donn&eacute;es sur les doses</a></li>
<li><a href="#appI-4">I.4 Renseignements &agrave; l&rsquo;appui</a></li>
</ul></li>
<li><a href="#appJ">Annexe J : Centres de r&eacute;f&eacute;rence en &eacute;talonnage</a>
<ul>
<li><a href="#appJ-1">J.1 Essais ind&eacute;pendants en dosim&eacute;trie externe : dosim&eacute;trie photonique, dosim&eacute;trie des extr&eacute;mit&eacute;s et dosim&eacute;trie neutronique</a></li>
<li><a href="#appJ-2">J.2 Essais ind&eacute;pendants pour les mesures in vitro, les mesures in vivo et l&rsquo;interpr&eacute;tation des biodosage</a></li>
<li><a href="#appJ-3">J.3 Essais ind&eacute;pendants en dosim&eacute;trie du radon et des produits de filiation du radon</a></li>
</ul></li>
<li><a href="#glossary">Glossaire</a></li>
<li><a href="#ref">R&eacute;f&eacute;rences</a></li>
</ul>  </div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="1"></div>
<h2 id="sec1">1. Introduction</h2>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="1.1"></div>
<h3 id="sec1-1">1.1 Objet</h3>  <p>Le document d&rsquo;application de la r&eacute;glementation REGDOC-2.7.2, <em>Dosim&eacute;trie, tome II : Exigences techniques et relatives aux syst&egrave;mes de gestion pour les services de dosim&eacute;trie</em>, &eacute;nonce les exigences et l&rsquo;orientation servant &agrave; s&rsquo;assurer que les services de dosim&eacute;trie autoris&eacute;s satisfont aux exigences techniques et que des mesures d&rsquo;assurance de la qualit&eacute; sont prises conform&eacute;ment &agrave; l&rsquo;intention de la <a href="http://laws-lois.justice.gc.ca/fra/lois/N-28.3/index.html"><em>Loi sur la s&ucirc;ret&eacute; et la r&eacute;glementation nucl&eacute;aires</em></a> et du <a href="http://laws.justice.gc.ca/fra/reglements/DORS-2000-203/page-1.html"><em>R&egrave;glement sur la radioprotection</em></a>.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="1.2"></div>
<h3 id="sec1-2">1.2 Port&eacute;e</h3>  <p>Ce document &eacute;tablit les exigences techniques ainsi que les exigences en mati&egrave;re du syst&egrave;me de gestion auxquelles tout service de dosim&eacute;trie agr&eacute;&eacute; doit satisfaire lorsqu&rsquo;une condition au permis d&eacute;livr&eacute; au service de dosim&eacute;trie l&rsquo;exige.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="1.3"></div>
<h3 id="sec1-3">1.3	L&eacute;gislation pertinente</h3>  <p>Les dispositions suivantes de la LSRN et de ses r&egrave;glements s&rsquo;appliquent &agrave; la pr&eacute;sente norme :</p>
<ol>
<li>Paragraphe 24(4) de la LSRN, en vertu duquel &laquo; la Commission ne d&eacute;livre, ne renouvelle, ne modifie ou ne remplace une licence ou un permis que si elle est d&rsquo;avis que l&rsquo;auteur de la demande, &agrave; la fois :
<ul className="list-bullet-none">
<li>(a) est comp&eacute;tent pour exercer les activit&eacute;s vis&eacute;es par la licence ou le permis;</li>
<li>(b) prendra, dans le cadre de ces activit&eacute;s, les mesures voulues pour pr&eacute;server la sant&eacute; et la s&eacute;curit&eacute; des personnes, pour prot&eacute;ger l&rsquo;environnement, pour maintenir la s&eacute;curit&eacute; nationale et pour respecter les obligations internationales que le Canada a assum&eacute;es &raquo;.</li>
</ul></li>
<li>Paragraphe 24(5) de la LSRN, en vertu duquel &laquo; les licences et les permis peuvent &ecirc;tre assortis des conditions que la Commission estime n&eacute;cessaires &agrave; l&rsquo;application de la <em>Loi</em> &raquo;. </li>
<li>L&rsquo;article 18 du <em>R&egrave;glement sur la radioprotection</em> &eacute;nonce les renseignements &agrave; fournir dans une demande de permis pour exploiter un service de dosim&eacute;trie.</li>
<li>L&rsquo;article 19 du <em>R&egrave;glement sur la radioprotection</em> &eacute;nonce les renseignements que le titulaire de permis qui exploite un service de dosim&eacute;trie doit d&eacute;poser au Fichier dosim&eacute;trique national pour chaque travailleur du secteur nucl&eacute;aire.</li>
<li>Paragraphe 28(1) du <em>R&egrave;glement g&eacute;n&eacute;ral sur la s&ucirc;ret&eacute; et la r&eacute;glementation nucl&eacute;aires</em>, qui stipule que &laquo; la personne qui est tenue de conserver un document aux termes de la Loi, de ses r&egrave;glements ou d&rsquo;un permis, le fait pour la p&eacute;riode indiqu&eacute;e dans le r&egrave;glement applicable ou, &agrave; d&eacute;faut, pendant une ann&eacute;e suivant l&rsquo;expiration du permis qui autorise l&rsquo;activit&eacute; pour laquelle les documents sont conserv&eacute;s &raquo;.</li>
<li>Paragraphe 28(2) du <em>R&egrave;glement g&eacute;n&eacute;ral sur la s&ucirc;ret&eacute; et la r&eacute;glementation nucl&eacute;aires</em>, qui stipule qu&rsquo;il &laquo; est interdit &agrave; quiconque d&rsquo;ali&eacute;ner un document mentionn&eacute; dans la Loi, ses r&egrave;glements ou un permis &agrave; moins :
<ul className="list-bullet-none">
<li>a) de ne plus &ecirc;tre tenu de le conserver aux termes de la Loi, de ses r&egrave;glements ou du permis;</li>
<li>b) de donner &agrave; la Commission un pr&eacute;avis d&rsquo;au moins 90 jours indiquant la date d&rsquo;ali&eacute;nation et la nature du document. &raquo;</li>
</ul></li>
</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="2"></div>
<h2 id="sec2">2. Exigences techniques &ndash; Services de dosim&eacute;trie des rayonnements externes</h2>  <div className="module" style="background-color: #ffffb3;">  <p><strong>Les exigences pour les services de dosim&eacute;trie neutronique sont d&eacute;crites &agrave; la section 3.</strong></p>  </div>
<p>Tout service de dosim&eacute;trie externe doit respecter les exigences suivantes :</p>
<ol>
<li>identifier, &agrave; l&rsquo;&eacute;tape de la demande de permis, les types de rayonnement et les gammes d&rsquo;&eacute;nergie respectives pr&eacute;vues auxquels les dosim&egrave;tres seront expos&eacute;s lors de leur utilisation;</li>
<li>mesurer la grandeur d&rsquo;int&eacute;r&ecirc;t en respectant les normes d&rsquo;exactitude et les limites d&rsquo;incertitude qui s&rsquo;appliquent &agrave; cette grandeur, tel qu&rsquo;indiqu&eacute; &agrave; la section 2.3, &laquo; Normes d&rsquo;exactitude et limites d&rsquo;incertitude &raquo;;</li>
<li>prouver qu&rsquo;il est capable de satisfaire aux normes globales en effectuant des essais de type &agrave; l&rsquo;&eacute;tape de la demande de permis et lorsque des changements sont apport&eacute;s, tel qu&rsquo;indiqu&eacute; &agrave; la section 2.4, &laquo; Essais de type &raquo;;</li>
<li>prouver qu&rsquo;il fonctionne de mani&egrave;re pr&eacute;visible et coh&eacute;rente en effectuant des essais de fonctionnement routines et ponctuels, tel qu&rsquo;indiqu&eacute; &agrave; la section 2.5, &laquo; Essais de fonctionnement &raquo;;</li>
<li>prouver soumettre son fonctionnement et l&rsquo;&eacute;talonnage de son syst&egrave;me &agrave; des essais ind&eacute;pendants, tel qu&rsquo;indiqu&eacute; &agrave; la section 2.6, &laquo; Essais ind&eacute;pendants &raquo;.</li>
<li>aviser imm&eacute;diatement la CCSN par &eacute;crit (format &eacute;lectronique acceptable) en cas d&rsquo;&eacute;chec &agrave; un de ses essais p&eacute;riodiques (essai de fonctionnement ou essai ind&eacute;pendant);</li>
<li>soumettre &agrave; la CCSN, dans les trente (30) jours, un rapport &eacute;crit d&eacute;taill&eacute;, dans lequel seront pr&eacute;cis&eacute;s la cause et les cons&eacute;quences de l&rsquo;&eacute;chec &agrave; un essai p&eacute;riodique, ainsi qu&rsquo;une description des mesures correctrices qui ont &eacute;t&eacute; prises;</li>
<li>r&eacute;p&eacute;ter l&rsquo;essai manqu&eacute; le plus t&ocirc;t possible en consultation avec la CCSN, et pr&eacute;senter les r&eacute;sultats &agrave; la CCSN.</li>
</ol>   <p>Si le service de dosim&eacute;trie externe &eacute;choue de nouveau, lors d&rsquo;un deuxi&egrave;me essai cons&eacute;cutif, la CCSN peut entreprendre d&rsquo;autres mesures dans le cadre du r&eacute;gime de permis.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="2.1"></div>
<h3 id="sec2-1">2.1 Grandeurs &agrave; mesurer</h3>  <h4>2.1.1 Torse</h4>  <p>La grandeur &agrave; mesurer est l&rsquo;&laquo; &eacute;quivalent de dose individuel &raquo; H<sub>p</sub>(d) tel que d&eacute;fini dans le rapport 47 [1] de la Commission internationale des unit&eacute;s et des mesures radiologiques (CIUMR). Les valeurs de &laquo; d &raquo; diff&egrave;rent selon la profondeur des tissus, comme suit :</p>
<ol>
<li>la valeur est de 0,07 mm pour la dose superficielle (ou &laquo; &agrave; la peau &raquo;) ; et</li>
<li>la valeur est de 10 mm pour la dose profonde (ou &laquo; au corps entier &raquo;).</li>
</ol>  <p>La valeur conventionnellement vraie de &laquo; d &raquo; est utilis&eacute;e comme valeur de r&eacute;f&eacute;rence pour &eacute;valuer les erreurs de mesure. Dans les sections qui suivent, H<sub>p,c</sub>(d) d&eacute;signe la valeur conventionnellement vraie de la quantit&eacute; H<sub>p</sub>(d). Pour de plus amples renseignements, voir la section A.2 de l&rsquo;annexe A, &laquo; Exactitude et incertitude en dosim&eacute;trie externe &raquo;.</p>
<h4>2.1.2 Extr&eacute;mit&eacute;s</h4>  <p>La quantit&eacute; &agrave; mesurer pour une extr&eacute;mit&eacute; particuli&egrave;re est l&rsquo;&eacute;quivalent de dose &agrave; une profondeur de 0,07 mm. Dans le pr&eacute;sent document, cette quantit&eacute; est repr&eacute;sent&eacute;e par H<sub>e</sub>; il s&rsquo;agit de la profondeur recommand&eacute;e dans la publication 60 [2], de la Commission Internationale de Protection Radiologique (CIPR). Dans les sections qui suivent, H<sub>e,c</sub> d&eacute;signe la valeur conventionnellement vraie de la grandeur H<sub>e</sub>. Pour de plus amples renseignements sur les valeurs conventionnellement vraies, voir la section A.2 de l&rsquo;annexe A, &laquo; Exactitude et incertitude en dosim&eacute;trie externe &raquo;.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="2.2"></div>
<h3 id="sec2-2">2.2	&Eacute;quivalent de dose minimal mesurable</h3>  <p>Le service de dosim&eacute;trie doit d&eacute;terminer les valeurs les plus basses de H<sub>p,c</sub>(d) et H<sub>e,c</sub> qu&rsquo;il peut mesurer avec un niveau de confiance de 95 %. Ces valeurs devront &ecirc;tre d&eacute;termin&eacute;es dans de bonnes conditions de laboratoire, alors que le rayonnement habituel de r&eacute;f&eacute;rence (&eacute;talonnage) est en incidence normale sur le dosim&egrave;tre.</p>  <p>La m&eacute;thode utilis&eacute;e pour d&eacute;terminer ces valeurs est laiss&eacute;e &agrave; la discr&eacute;tion du service de dosim&eacute;trie. Cependant, la r&eacute;f&eacute;rence utilis&eacute;e devra &ecirc;tre indiqu&eacute;e dans la demande de permis.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="2.3"></div>
<h3 id="sec2-3">2.3	Normes d&rsquo;exactitude et limites d&rsquo;incertitude</h3>  <p>Le tableau 1 r&eacute;sume les normes g&eacute;n&eacute;rales d&rsquo;exactitude et de pr&eacute;cision. Les essais de type, d&eacute;crits dans la section 2.4, &laquo; Essais de type &raquo; et dans l&rsquo;annexe B &laquo; Normes relatives aux essais de type en dosim&eacute;trie externe &raquo;, d&eacute;terminent la capacit&eacute; d&rsquo;un syst&egrave;me de dosim&eacute;trie de satisfaire &agrave; ces normes. Les m&eacute;thodes de calcul utilis&eacute;es pour analyser les r&eacute;sultats des essais de type sont d&eacute;crites dans la section A.3 de l&rsquo;annexe A, &laquo; Exactitude et incertitude en dosim&eacute;trie externe &raquo;. La section A.4 de l&rsquo;annexe A fournit des exemples de calcul.</p>
<table className="">  <caption className="text-left">Tableau 1 : Normes d&rsquo;exactitude et de pr&eacute;cision</caption>  <tr>
<th className="text-center">Grandeur</th>
<th className="text-center">Dose (mSv)</th>
<th className="text-center">Normes</th>  </tr>  <tr>
<td className="text-center" rowspan="2">H<sub>p,c</sub>(10)</td>
<td className="text-center">4 &agrave; 10 000</td>
<td className="text-center">-33% / +50%</td>  </tr>  <tr>
<td className="text-center">0,4</td>
<td className="text-center">-50% / +100%</td>  </tr>  <tr>
<td className="text-center" rowspan="2">H<sub>p,c</sub>(0,07)</td>
<td className="text-center">100 &agrave; 10 000</td>
<td className="text-center">-33% / +50%</td>  </tr>  <tr>
<td className="text-center">10</td>
<td className="text-center">-50% / +100%</td>  </tr>  <tr>
<td className="text-center" rowspan="2">H<sub>e,c</sub></td>
<td className="text-center">100 &agrave; 10 000</td>
<td className="text-center">-67% / +200%</td>  </tr>  <tr>
<td className="text-center">10</td>
<td className="text-center">-67% / +200%</td>  </tr>  </table>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="2.4"></div>
<h3 id="sec2-4">2.4	Essais de type</h3>  <p>Le service de dosim&eacute;trie doit respecter les exigences suivantes :</p>
<ol>
<li>d&eacute;montrer la capacit&eacute; de son syst&egrave;me de dosim&eacute;trie de satisfaire aux normes g&eacute;n&eacute;rales en proc&eacute;dant &agrave; des essais de type &agrave; l&rsquo;&eacute;tape de la demande de permis;</li>
<li>reprendre les essais de type, lorsque le service de dosim&eacute;trie fait des changements susceptibles d&rsquo;affecter le r&eacute;sultat d&rsquo;une mesure de dose, de fa&ccedil;on &agrave; d&eacute;montrer qu&rsquo;il continue de satisfaire aux exigences indiqu&eacute;es dans le tableau 1 de la section 2.3, &laquo; Normes d&rsquo;exactitude et limites d&rsquo;incertitude &raquo;; ces changements peuvent &ecirc;tre par exemple une modification de la conception du dosim&egrave;tre, des filtres de l&rsquo;&eacute;tui, de l&rsquo;algorithme de dose ou des cycles de temp&eacute;rature (pour les dosim&egrave;tres thermoluminescents);</li>
<li>pr&eacute;senter &agrave; la CCSN les r&eacute;sultats des essais de type qui ont &eacute;t&eacute; repris &agrave; la suite de changements apport&eacute;s au syst&egrave;me, avec la documentation indiqu&eacute;e dans la section 2.4.1, &laquo; Documentation &raquo;, et obtenir l&rsquo;autorisation de la CCSN avant d&rsquo;utiliser le syst&egrave;me ainsi modifi&eacute;; et</li>
<li>respecter les normes &eacute;nonc&eacute;es dans l&rsquo;annexe B, &laquo; Normes relatives aux essais de type en dosim&eacute;trie externe &raquo;.</li>
</ol>  <h4>2.4.1 Documentation</h4>  <p>Le service de dosim&eacute;trie doit conserver dans ses dossiers :</p>
<ol>
<li>les r&eacute;sultats des essais de type sous une forme qui indique clairement toutes les grandeurs d&rsquo;influence et les caract&eacute;ristiques du syst&egrave;me qui ont &eacute;t&eacute; examin&eacute;s ainsi que la gamme de leurs valeurs possibles, selon l&rsquo;utilisation pr&eacute;vue du syst&egrave;me de dosim&eacute;trie concern&eacute;;</li>
<li>les exemples de calcul de la r&eacute;ponse moyenne et de l&rsquo;incertitude type globale; et</li>
<li>la justification des hypoth&egrave;ses formul&eacute;es et des techniques utilis&eacute;es.</li>
</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="2.5"></div>
<h3 id="sec2-5">2.5	Essais de fonctionnement</h3>  <h4>2.5.1 Essais de fonctionnement de routine</h4>  <p>Le service de dosim&eacute;trie doit effectuer des essais de fonctionnement de routine.</p>  <p>Le service de dosim&eacute;trie doit pr&eacute;voir des essais de fonctionnement de routine pendant chaque p&eacute;riode d&rsquo;utilisation de routine des dosim&egrave;tres. Lorsque ces p&eacute;riodes d&rsquo;utilisation sont bimensuelles, les essais devraient &ecirc;tre effectu&eacute;s au moins une fois par mois. Pour les services commerciaux de dosim&eacute;trie, des essais de fonctionnement mensuels sont acceptables. Pour les dosim&egrave;tres d&rsquo;extr&eacute;mit&eacute;, on doit effectuer des essais de fonctionnement au moins une fois par trimestre. La fr&eacute;quence et la nature des essais de fonctionnement sp&eacute;ciaux doivent &ecirc;tre pr&eacute;cis&eacute;es dans la demande de permis.</p>  <p>Pour les essais de fonctionnement de routine, le service de dosim&eacute;trie doit se conformer aux exigences suivantes :</p>
<ol>
<li>irradier les dosim&egrave;tres d&rsquo;essai &agrave; des doses connues, g&eacute;n&eacute;ralement dans des conditions types d&rsquo;exposition (&agrave; incidence normale avec le rayonnement d&rsquo;&eacute;talonnage, par exemple);</li>
<li>traiter les dosim&egrave;tres d&rsquo;essai de la m&ecirc;me mani&egrave;re que les dosim&egrave;tres ordinaires; s&rsquo;ils doivent faire l&rsquo;objet d&rsquo;un traitement, on n&rsquo;indiquera pas au laboratoire charg&eacute; de ce traitement qu&rsquo;il s&rsquo;agit de dosim&egrave;tres d&rsquo;essai;</li>
<li>inclure dans les essais d&rsquo;irradiations, des doses comparables ou inf&eacute;rieures aux valeurs minimales indiqu&eacute;es dans le tableau 1 (section 2.3, &laquo; Normes d&rsquo;exactitude et de pr&eacute;cision &raquo;);</li>
<li>fixer, en consultation avec le personnel de la CCSN, des limites de contr&ocirc;le pour les r&eacute;sultats des essais.</li>
</ol>  <p>Le service de dosim&eacute;trie peut tenir constantes les conditions et les doses d&rsquo;irradiation pour permettre une meilleure analyse des tendances.</p>
<h4>2.5.2 Essais de fonctionnement sp&eacute;ciaux</h4>  <p>Outre les essais de fonctionnement de routine, le service de dosim&eacute;trie doit effectuer &agrave; l&rsquo;occasion, des essais de fonctionnement sp&eacute;ciaux pour v&eacute;rifier si le fonctionnement du syst&egrave;me dosim&eacute;trique correspond toujours aux r&eacute;sultats obtenus lors des essais de type originaux.</p>   <p>Lors des essais de fonctionnement sp&eacute;ciaux, le service de dosim&eacute;trie devrait soumettre les dosim&egrave;tres &agrave; un sous-ensemble des grandeurs d&rsquo;influence jug&eacute;es significatives &agrave; la suite des essais de type, et auxquels la r&eacute;ponse du syst&egrave;me aurait pu changer par suite du vieillissement ou du remplacement d&rsquo;&eacute;l&eacute;ments.</p>  <p>Les r&eacute;sultats devraient &ecirc;tre pr&eacute;sent&eacute;s comme les r&eacute;sultats des essais de type orignaux et indiquer que les normes d&rsquo;exactitude et les limites d&rsquo;incertitude du tableau 1 (section 2.3) sont respect&eacute;es.</p>
<h4>2.5.3 Documentation</h4>  <p>Le service de dosim&eacute;trie doit conserver dans ses dossiers :</p>
<ol>
<li>les proc&eacute;dures des essais de fonctionnement de routine; et</li>
<li>les r&eacute;sultats des essais de fonctionnement de routine et sp&eacute;ciaux.</li>
</ol>  <p>Le service de dosim&eacute;trie doit soumettre les proc&eacute;dures des essais de fonctionnement de routine &agrave; la CCSN, afin d&rsquo;obtenir son approbation, &agrave; l&rsquo;&eacute;tape de la demande de permis.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="2.6"></div>
<h3 id="sec2-6">2.6	Essais ind&eacute;pendants</h3>  <p>Les exigences relatives aux essais ind&eacute;pendants sont les suivantes :</p>
<ol>
<li>avant d&rsquo;obtenir leurs permis, les services de dosim&eacute;trie externe sont tenus de r&eacute;ussir les essais ind&eacute;pendants, pour chacun de leurs types de dosim&egrave;tre ;</li>
<li>une fois agr&eacute;&eacute;, le service de dosim&eacute;trie doit se soumettre &agrave; des essais ind&eacute;pendants &agrave; intervalles r&eacute;guliers, au moins une fois tous les 12 mois ;</li>
<li>les essais ind&eacute;pendants doivent &ecirc;tre effectu&eacute;s par le centre de r&eacute;f&eacute;rence en &eacute;talonnage d&eacute;sign&eacute; pour la dosim&eacute;trie externe au Canada (voir l&rsquo;annexe J) ;</li>
<li>le service de dosim&eacute;trie doit respecter les normes &eacute;nonc&eacute;es dans l&rsquo;annexe C, &laquo; Normes relatives aux essais ind&eacute;pendants en dosim&eacute;trie photonique externe &rsquo;, ou l&rsquo;annexe D, &laquo; Normes relatives aux essais ind&eacute;pendants en dosim&eacute;trie des extr&eacute;mit&eacute;s &rsquo;, selon le cas ; et</li>
<li>si le service de dosim&eacute;trie dispose de dosim&egrave;tres devant faire l&rsquo;objet d&rsquo;un traitement (des dosim&egrave;tres thermoluminescents [DTL], par exemple) et qu&rsquo;il emploie plus d&rsquo;une unit&eacute; de traitement (des lecteurs DTL, par exemple), on doit v&eacute;rifier chacune de ces unit&eacute;s tous les ans en s&rsquo;en servant pour traiter au moins un jeu de dosim&egrave;tres d&rsquo;essai irradi&eacute;s par le centre de r&eacute;f&eacute;rence en &eacute;talonnage.</li>
</ol>   <p>Remarque : N&eacute;anmoins, si le service de dosim&eacute;trie peut apporter une preuve &eacute;crite que toutes ses unit&eacute;s de traitement ont une r&eacute;ponse uniforme, il lui suffira de soumettre annuellement l&rsquo;une d&rsquo;entre elles &agrave; l&rsquo;essai effectu&eacute; par le centre de r&eacute;f&eacute;rence en &eacute;talonnage. Pour &eacute;tablir, dans ce dernier cas, la coh&eacute;rence de r&eacute;ponse des unit&eacute;s de traitement, le service de dosim&eacute;trie doit d&eacute;montrer que la r&eacute;ponse moyenne (c&rsquo;est-&agrave;-dire, la dose calcul&eacute;e en moyenne) d&rsquo;un jeu de dosim&egrave;tres trait&eacute;s par une unit&eacute; quelconque se situe &agrave; &plusmn;5 % (au niveau de confiance de 95 %) de la moyenne des r&eacute;ponses obtenues avec toutes les unit&eacute;s de traitement. De plus, le coefficient de variation des dosim&egrave;tres trait&eacute;s par chaque unit&eacute; ne doit pas d&eacute;passer 0,075 dans le cas des dosim&egrave;tres de corps entier et 0,2 dans le cas des dosim&egrave;tres d&rsquo;&rsquo;extr&eacute;mit&eacute;s.</p>
<h4>2.6.1 Normes d&rsquo;exactitude</h4>  <p>Les normes d&rsquo;exactitude auxquelles le service de dosim&eacute;trie doit satisfaire dans chacun des essais ind&eacute;pendants en dosim&eacute;trie photonique et b&ecirc;ta sont repr&eacute;sent&eacute;es dans le tableau 2 par la r&eacute;ponse moyenne, <span style="text-decoration: overline;">R</span>, et le coefficient de variation des r&eacute;ponses pour l&rsquo;ensemble des relev&eacute;s. Lorsque les dosim&egrave;tres sont port&eacute;s sur le torse, la r&eacute;ponse moyenne correspond &agrave; l&rsquo;ensemble des relev&eacute;s des kermas de l&rsquo;air (ou expositions) re&ccedil;us. Lorsque les dosim&egrave;tres sont port&eacute;s aux extr&eacute;mit&eacute;s, la r&eacute;ponse moyenne correspond &agrave; l&rsquo;ensemble des relev&eacute;s des doses tissulaires d&eacute;livr&eacute;es.</p>
<table className="">  <caption className="text-left">Tableau 2 : Normes d&rsquo;exactitude pour les dosim&egrave;tres</caption>  <tr>
<th className="text-center">Dosim&eacute;trie</th>
<th className="text-center">R&eacute;ponse moyenne, <span style="text-decoration: overline;"><em>R</em></span></th>
<th className="text-center">Coefficient de variation</th>  </tr>  <tr>
<td className="text-center">Port&eacute; sur le torse</td>
<td className="text-center">0,9 &le; <span style="text-decoration: overline;">R</span> &le; 1,1</td>
<td className="text-center">&le; 0,075</td>  </tr>  <tr>
<td className="text-center">Port&eacute; aux extr&eacute;mit&eacute;s</td>
<td className="text-center">0,80 &le; <span style="text-decoration: overline;">R</span> &le; 1,25</td>
<td className="text-center">&le; 0,2</td>  </tr>  </table>  <p>Remarque : Pour ces essais, la r&eacute;ponse indiqu&eacute;e dans le tableau 2 est d&eacute;finie par rapport &agrave; la valeur conventionnellement vraie de la grandeur appropri&eacute;e.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3"></div>
<h2 id="sec3">3. Exigences techniques &ndash; Services de dosim&eacute;trie neutronique de routine</h2>  <p>Le service de dosim&eacute;trie neutronique doit se conformer aux exigences suivantes :</p>
<ol>
<li>veiller &agrave; la compatibilit&eacute; entre ses dosim&egrave;tres neutroniques et les champs de rayonnement neutronique dans lesquels ils seront utilis&eacute;s, et, s&rsquo;il y a lieu, fournir une description des sources de neutrons et des spectres pr&eacute;vus des rayonnements neutroniques auxquels les travailleurs seront expos&eacute;s;</li>
<li>fournir des descriptions techniques d&eacute;taill&eacute;es des dosim&egrave;tres et du mat&eacute;riel connexe;</li>
<li>consigner les donn&eacute;es et pr&eacute;parer des rapports contenant des renseignements quantitatifs sur le fonctionnement des dosim&egrave;tres et du service (il n&rsquo;est pas tenu d&rsquo;effectuer des essais de type, sauf pour v&eacute;rifier que le spectre du rayonnement neutronique est compatible avec les champs auxquels les travailleurs risquent d&rsquo;&ecirc;tre expos&eacute;s); et</li>
<li>assurer la tra&ccedil;abilit&eacute; de l&rsquo;&eacute;talonnage de son syst&egrave;me, directement au centre de r&eacute;f&eacute;rence en &eacute;talonnage (voir l&rsquo;annexe J) ou &agrave; un autre laboratoire national ou international agr&eacute;&eacute;, en consultation avec la CCSN.</li>
</ol>  <p>Les exigences susmentionn&eacute;es s&rsquo;appliquent &eacute;galement aux radiam&egrave;tres &agrave; neutrons que le service de dosim&eacute;trie pourrait utiliser &agrave; la place des dosim&egrave;tres neutroniques individuels. Dans ce cas, le service de dosim&eacute;trie doit &eacute;galement mettre en place un programme d&rsquo;&eacute;talonnage p&eacute;riodique avec le centre de r&eacute;f&eacute;rence en &eacute;talonnage appropri&eacute; (voir l&rsquo;annexe J) ou tout autre laboratoire national ou international agr&eacute;&eacute;, en consultation avec la CCSN.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.1"></div>
<h3 id="sec3-1">3.1 Donn&eacute;es et rapports</h3>  <p>En plus du contenu du point 3 de la section 3, les renseignements suivants doivent &ecirc;tre consign&eacute;s en tant que donn&eacute;es et fournies dans des rapports :</p>
<ol>
<li>une description de la source d&rsquo;&eacute;talonnage, du champ d&rsquo;&eacute;talonnage, et une indication du protocole d&rsquo;&eacute;talonnage utilis&eacute;;</li>
<li>la r&eacute;ponse en &eacute;nergie des dosim&egrave;tres en termes d&rsquo;&eacute;quivalent de dose;</li>
<li>une indication des limitations du syst&egrave;me de dosim&eacute;trie et une estimation qualitative de son exactitude et de sa pr&eacute;cision dans la mesure de H<sub>p,c</sub>(10), dans les conditions dans lesquelles les dosim&egrave;tres seront utilis&eacute;s, y compris une indication de la variabilit&eacute; associ&eacute;e au traitement;</li>
<li>une estimation de la valeur de H<sub>p,c</sub>(10) la plus faible que le syst&egrave;me de dosim&eacute;trie est capable de mesurer avec un niveau de confiance de 95 %; et</li>
<li>la dose minimale &agrave; d&eacute;clarer.</li>
</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.2"></div>
<h3 id="sec3-2">3.2	Essai ind&eacute;pendants</h3>  <p>Le service de dosim&eacute;trie doit se soumettre &agrave; des essais ind&eacute;pendants, effectu&eacute;es par le centre de r&eacute;f&eacute;rence en &eacute;talonnage (voir l&rsquo;annexe J), avant d&rsquo;obtenir son permis puis &agrave; intervalles r&eacute;guliers, au moins une fois tous les 12 mois, apr&egrave;s obtention du permis.</p>
<p>Ces essais permettent au service de dosim&eacute;trie de faire la preuve, &agrave; intervalles r&eacute;guliers, qu&rsquo;il fonctionne de fa&ccedil;on uniforme. Les crit&egrave;res d&rsquo;uniformit&eacute; sont &eacute;tablis durant l&rsquo;&eacute;tape de la demande de permis. Le tableau 3 indique les normes &agrave; respecter pour l&rsquo;ensemble des relev&eacute;s.</p>
<table className="">  <caption className="text-left">Tableau 3 : Normes d&rsquo;exactitude pour les dosim&egrave;tres</caption>  <tr>
<th className="align=center">Dosim&eacute;trie</th>
<th className="text-center">R&eacute;ponse moyenne <span style="text-decoration: overline;">R</span></th>
<th className="text-center">Coefficient de variation</th>  </tr>  <tr>
<td>Tous types</td>
<td className="text-center">0,7 &le; <span style="text-decoration: overline;">R</span>  &le; 1,5</td>
<td className="text-center">&le; 0,25</td>  </tr>  </table>
<p>Lorsque des radiam&egrave;tres &agrave; neutrons sont utilis&eacute;s en dosim&eacute;trie, les exigences relatives &agrave; un essai annuel ind&eacute;pendant peuvent s&rsquo;ajouter aux exigences mentionn&eacute;es &agrave; la section 2.7, &laquo; Exigences pour les services de dosim&eacute;trie neutronique de routine &raquo;, pour l&rsquo;&eacute;talonnage p&eacute;riodique. Il suffit d&rsquo;envoyer un seul radiam&egrave;tre &agrave; neutrons pour le soumettre &agrave; un de ces essais, pour autant que tout autre radiam&egrave;tre &agrave; neutrons utilis&eacute; par le service de dosim&eacute;trie soit &eacute;talonn&eacute; en fonction du radiam&egrave;tre &agrave; neutrons qui a &eacute;t&eacute; envoy&eacute; au centre de r&eacute;f&eacute;rence en &eacute;talonnage.</p>
<p>Le service de dosim&eacute;trie doit satisfaire aux normes &eacute;nonc&eacute;es dans l&rsquo;annexe E, &laquo; Normes relatives aux essais ind&eacute;pendants en dosim&eacute;trie neutronique &raquo;.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.3"></div>
<h3 id="sec3-3">3.3	Essais de fonctionnement</h3>  <p>Le service de dosim&eacute;trie doit satisfaire aux exigences suivantes :</p>
<ol>
<li>mettre en place un programme d&rsquo;essais de fonctionnement p&eacute;riodiques pour les syst&egrave;mes de dosim&eacute;trie;</li>
<li>pr&eacute;voir des essais de fonctionnement de routine pendant chaque p&eacute;riode d&rsquo;utilisation de routine des dosim&egrave;tres; si les p&eacute;riodes d&rsquo;utilisation sont bimensuelles ou si des instruments de mesure sont utilis&eacute;s pour &eacute;valuer les doses, l&rsquo;essai doit &ecirc;tre effectu&eacute; au moins une fois par mois;</li>
<li>pr&eacute;senter &agrave; la CCSN la documentation pertinente, y compris la fr&eacute;quence des essais, &agrave; l&rsquo;&eacute;tape de la demande de permis.</li>
</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.4"></div>
<h3 id="sec3-4">3.4 Documentation</h3>  <p>Les doses neutroniques doivent &ecirc;tre consign&eacute;es et d&eacute;clar&eacute;es s&eacute;par&eacute;ment des autres types de dose.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4"></div>
<h2 id="sec4">4. Exigences techniques &ndash; Services de dosim&eacute;trie des rayonnements internes</h2>  <p>Tout service de dosim&eacute;trie des rayonnements internes doit satisfaire aux exigences suivantes :</p>
<ol>
<li>mesurer les activit&eacute;s et les activit&eacute;s volumiques de certains radionucl&eacute;ides, tel qu&rsquo;indiqu&eacute; &agrave; la section 4.1, &laquo; Grandeurs &agrave; mesurer &raquo;;</li>
<li>mesurer la grandeur d&rsquo;int&eacute;r&ecirc;t, avec l&rsquo;exactitude et la pr&eacute;cision prescrites, tel qu&rsquo;indiqu&eacute; aux sections 4.2, &laquo; Normes d&rsquo;exactitude et de pr&eacute;cision <em>in vitro</em> &raquo; et 4.5, &laquo; Normes d&rsquo;exactitude et de pr&eacute;cision <em>in vivo</em> &raquo;;</li>
<li>prouver que le service de dosim&eacute;trie interne fonctionne de mani&egrave;re pr&eacute;visible et coh&eacute;rente, en r&eacute;alisant des essais de fonctionnement, tel qu&rsquo;indiqu&eacute; &agrave; la  section 4.3, &laquo; Essais de fonctionnement pour les mesures <em>in vitro</em> &raquo;;</li>
<li>prouver que le service de dosim&eacute;trie interne fonctionne de mani&egrave;re fiable en se soumettant &agrave; des essais ind&eacute;pendants, tel qu&rsquo;indiqu&eacute; aux sections 4.4, &laquo; Essais ind&eacute;pendants pour les mesures <em>in vitro</em> &raquo; et 4.6, &laquo; Essais ind&eacute;pendants pour les mesures <em>in vivo</em> &raquo;;</li>
<li>contr&ocirc;ler les doses, tel qu&rsquo;indiqu&eacute; &agrave; la section 4.7, &laquo; Interpr&eacute;tation des donn&eacute;es du biodosage &raquo;;</li>
<li>aviser imm&eacute;diatement la CCSN, par &eacute;crit (format &eacute;lectronique acceptable), lorsqu&rsquo;il &eacute;choue &agrave; un des ses essais p&eacute;riodiques (essai de fonctionnement ou essai ind&eacute;pendant) ;</li>
<li>soumettre &agrave; la CCSN, dans les trente (30) jours, un rapport &eacute;crit d&eacute;taill&eacute; dans lequel seront pr&eacute;cis&eacute;es la cause et les cons&eacute;quences de l&rsquo;&eacute;chec &agrave; un essai p&eacute;riodique ainsi qu&rsquo;une description des mesures correctives qui ont &eacute;t&eacute; prises; et</li>
<li>r&eacute;p&eacute;ter l&rsquo;essai manqu&eacute; le plus t&ocirc;t possible en consultation avec la CCSN et pr&eacute;senter les r&eacute;sultats &agrave; la CCSN.</li>
</ol>   <p>Si le service de dosim&eacute;trie interne &eacute;choue de nouveau, lors d&rsquo;un deuxi&egrave;me essai cons&eacute;cutif, la CCSN peut entreprendre d&rsquo;autres mesures dans le cadre du r&eacute;gime de permis.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.1"></div>
<h3 id="sec4-1">4.1	Grandeurs &agrave; mesurer</h3>  <p>Les services de dosim&eacute;trie internes autoris&eacute;s visent &agrave; soutenir les programmes de radioprotection. Par cons&eacute;quent, le pr&eacute;sent document ne traite pas des exigences visant les capacit&eacute;s de d&eacute;tection des services de dosim&eacute;trie (p. ex., activit&eacute; minimale d&eacute;tectable).</p>   <p>Les services de dosim&eacute;trie internes doivent participer &agrave; des essais ind&eacute;pendants avec des quantit&eacute;s, des activit&eacute;s ou des concentrations d&rsquo;activit&eacute; &eacute;gales ou sup&eacute;rieures aux niveaux minimaux d&rsquo;essai (NME) indiqu&eacute;s dans le tableau 4, jusqu&rsquo;&agrave; un maximum de 20 fois le NME pertinent, pour les radionucl&eacute;ides vis&eacute;s par leurs permis. Cela n&rsquo;emp&ecirc;che pas les services de dosim&eacute;trie de r&eacute;aliser leurs essais de fonctionnement &agrave; des niveaux inf&eacute;rieurs aux NME. Les activit&eacute;s des radionucl&eacute;ides et les concentrations d&rsquo;activit&eacute; sont mesur&eacute;es en becquerels (Bq) et en becquerels par litre (Bq/L). La liste des radionucl&eacute;ides figurant au tableau 4 n&rsquo;est pas exhaustive pour ce qui est des produits de fission et des produits d&rsquo;activation, mais elle est repr&eacute;sentative de l&rsquo;efficacit&eacute; des techniques de mesure.</p>  <p>Pour simuler les conditions de travail, on pourra introduire des radionucl&eacute;ides autres que ceux indiqu&eacute;s dans le tableau 4 durant les essais ind&eacute;pendants requis, qui sont d&eacute;crits dans les sections 4.4, &laquo; Essais ind&eacute;pendants pour les mesures <em>in vitro</em> &raquo; et 4.6, &laquo; Essais ind&eacute;pendants pour les mesures <em>in vivo</em> &raquo;. Ces radionucl&eacute;ides ne sont pas consid&eacute;r&eacute;s comme faisant partie de l&rsquo;essai; ils sont seulement ajout&eacute;s pour provoquer des interf&eacute;rences et mettre ainsi au d&eacute;fi le syst&egrave;me d&rsquo;analyse du service de dosim&eacute;trie. Par cons&eacute;quent, le service de dosim&eacute;trie peut tr&egrave;s bien r&eacute;ussir l&rsquo;essai sans identifier ces radionucl&eacute;ides ou mesurer leur activit&eacute;. Toutefois, le service de dosim&eacute;trie peut &eacute;chouer &agrave; l&rsquo;essai s&rsquo;il n&rsquo;apporte pas les corrections n&eacute;cessaires pour tenir compte de ces interf&eacute;rences. </p>
<table className="">  <caption className="text-left">Tableau 4 : Niveaux minimaux d&rsquo;essai (NME)</caption>  <tr>
<th className="text-center text-center">Radionucl&eacute;ide</th>
<th className="text-center">Biodosage <em>in vitro</em><br />
(par litre ou par &eacute;chantillon)</th>
<th className="text-center text-center">Biodosage <em>in vivo</em> (Bq)</th>  </tr>  <tr>
<td>Hydrog&egrave;ne 3 (HTO)</td>
<td className="text-center">2 000 Bq</td>
<td className="text-center">Test non disponible</td>  </tr>  <tr>
<td>Carbone 14</td>
<td className="text-center">2 000 Bq</td>
<td className="text-center">3 &times; 10<sup>5</sup> (poumon)</td>  </tr>  <tr>
<td>Fer 59</td>
<td className="text-center">Test non disponible</td>
<td className="text-center">2 500</td>  </tr>  <tr>
<td>Cobalt 57<sup>a</sup></td>
<td className="text-center">25 Bq</td>
<td className="text-center">2 500</td>  </tr>  <tr>
<td>Cobalt 60</td>
<td className="text-center">25 Bq</td>
<td className="text-center">2,500</td>  </tr>  <tr>
<td>Strontium 90</td>
<td className="text-center">2 Bq</td>
<td className="text-center">Test non disponible</td>  </tr>  <tr>
<td>Zirconium 5 +<br />
Niobium 95</td>
<td className="text-center text-center">Test non disponible</td>
<td className="text-center text-center">2 000</td>  </tr>  <tr>
<td>Antimoine 124</td>
<td className="text-center">Test non disponible</td>
<td className="text-center">2 000</td>  </tr>  <tr>
<td>Iode 125<sup>b</sup></td>
<td className="text-center">20 Bq</td>
<td className="text-center">1 000</td>  </tr>  <tr>
<td>Iode 131<sup>c</sup></td>
<td className="text-center">20 Bq</td>
<td className="text-center">1 000</td>  </tr>  <tr>
<td>C&eacute;sium 137</td>
<td className="text-center">20 Bq</td>
<td className="text-center">2 000</td>  </tr>  <tr>
<td>C&eacute;rium 144</td>
<td className="text-center">250 Bq</td>
<td className="text-center">25 000</td>  </tr>  <tr>
<td>Radium 226</td>
<td className="text-center">0,05 Bq</td>
<td className="text-center">5 000</td>  </tr>  <tr>
<td>Thorium 230</td>
<td className="text-center">0,02 Bq</td>
<td className="text-center">Test non disponible</td>  </tr>  <tr>
<td>Thorium naturel<sup>d</sup></td>
<td className="text-center">0,02 Bq</td>
<td className="text-center">150 (poumon)</td>  </tr>  <tr>
<td>Uranium naturel<sup>e</sup></td>
<td className="text-center">5 &micro;g</td>
<td className="text-center">10 mg (poumon)</td>  </tr>  <tr>
<td>Uranium 235</td>
<td className="text-center">0,02 Bq</td>
<td className="text-center">30 (poumon)</td>  </tr>  <tr>
<td>Plutonium-238/239/240</td>
<td className="text-center">0,01 Bq</td>
<td className="text-center">9 000 (poumon)</td>  </tr>  <tr>
<td>Plutonium (SMIT<sup>f</sup>)</td>
<td className="text-center">0,02 pg/L</td>
<td className="text-center">Test non disponible</td>  </tr>  <tr>
<td >Americium 41</td>
<td className="text-center">0,05 Bq</td>
<td className="text-center">100 (poumon)</td>  </tr>  </table>
<p>Remarque :</p>
<ul className="list-bullet-none">
<li>a) Le <sup>57</sup>Co est utilis&eacute; pour remplacer le <sup>144</sup>Ce.</li>
<li>b  Si l&rsquo;on utilise du <sup>129</sup>I pour remplacer le <sup>125</sup>I, les m&ecirc;mes NME que ceux du <sup>125</sup>I s&rsquo;appliquent.</li>
<li>c) Si l&rsquo;on utilise du <sup>133</sup>Ba pour remplacer le <sup>131</sup>I, les m&ecirc;mes NME que ceux du <sup>131</sup>I s&rsquo;appliquent.</li>
<li>d) Un gramme de thorium naturel contient des quantit&eacute;s &eacute;gales de <sup>232</sup>Th et de <sup>228</sup>Th, soit 4,06 &times; 10<sup>3</sup> Bq. Leur pourcentage massique est respectivement de 99,9999 % pour le <sup>232</sup>Th et de 1,3 &times; 10<sup>-8</sup> % pour le <sup>228</sup>Th, alors que l&rsquo;activit&eacute; sp&eacute;cifique est de 8,12 &times; 10<sup>3</sup> Bq/gramme (g).</li>
<li>e) Un gramme d&rsquo;uranium naturel contient des quantit&eacute;s &eacute;gales de <sup>234</sup>U et de <sup>23</sup>8U, soit 1,26 &times; 10<sup>4</sup> Bq, ainsi que 569 Bq de <sup>235</sup>U. Leur pourcentage massique est respectivement de 99,2837 % pour le <sup>238</sup>U, de 0,7110 % pour le <sup>235</sup>U et de 0,0053 % pour le <sup>234</sup>U, alors que  l&rsquo;activit&eacute; sp&eacute;cifique est de 2,52 &times; 10<sup>4</sup> Bq/g</li>
<li>f) SMIT : spectrom&eacute;trie de masse &agrave; ionisation thermique</li>
</ul>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.2"></div>
<h3 id="sec4-2">4.2	Normes d&rsquo;exactitude et de pr&eacute;cision <em>in vitro</em></h3>  <p>Les normes d&rsquo;exactitude et de pr&eacute;cision <em>in vitro</em> pour les essais ind&eacute;pendants et les essais de fonctionnement sont indiqu&eacute;es dans le tableau 5. Pour &eacute;valuer le respect des normes d&rsquo;exactitude, on doit consid&eacute;rer s&eacute;par&eacute;ment le biais et la pr&eacute;cision. Le biais relatif moyen B doit &ecirc;tre calcul&eacute; &agrave; partir de relev&eacute;s r&eacute;p&eacute;t&eacute;s, A<sub>i</sub>, de chaque activit&eacute; volumique ou niveau d&rsquo;activit&eacute; A. Comme le biais est souvent plus grand &agrave; des activit&eacute;s volumiques moindres, proches des seuils de d&eacute;tection, qu&rsquo;&agrave; des activit&eacute;s volumiques &eacute;lev&eacute;es, les essais des laboratoires du service de dosim&eacute;trie doivent &ecirc;tre effectu&eacute;s en prenant en compte plusieurs activit&eacute;s volumiques &eacute;gales ou sup&eacute;rieures au NME. Selon les normes d&rsquo;exactitude et de pr&eacute;cision <em>in vitro</em> pour les essais ind&eacute;pendants et les essais de fonctionnement, la racine de l&rsquo;erreur quadratique moyenne (REQM) de B et SB doit &ecirc;tre inf&eacute;rieure ou &eacute;gale &agrave; 0,25, comme suit :</p>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<mtext>REQM&#x00A0;=&#x00A0;</mtext><msqrt>
<mrow>
<msup>
<mi>B</mi>
<mn>2</mn>
</msup>
<mo>+</mo><msub>
<mi>S</mi>
<mi>B</mi>
</msub>
<msup>
<mrow></mrow>
<mn>2</mn>
</msup>
</mrow>
</msqrt>
<mo>&#x2264;</mo><mtext>0</mtext><mtext>,25</mtext></mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaaeOuaiaab2
eacaqGtbGaaeyraiaabccacaqG9aGaaeiiamaakaaabaGaamOqamaa
CaaaleqabaGaaGOmaaaakiabgUcaRiaadofadaWgaaWcbaGaamOqaa
qabaGcdaahaaWcbeqaaiaaikdaaaaabeaakiabgsMiJkaabcdacaqG
UaGaaeOmaiaabwdaaaa@4539@
</annotation>   </semantics>  </math>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.3"></div>
<h3 id="sec4-3">4.3	Essais de fonctionnement pour les mesures <em>in vitro</em></h3>  <p>Le service de dosim&eacute;trie doit effectuer des essais de fonctionnement p&eacute;riodiques. Il doit pr&eacute;voir des dispositions relatives &agrave; de tels essais pour les biodosages <em>in vitro</em>, qui doivent &ecirc;tre effectu&eacute;s au moins une fois par trimestre, ou pour les mesures <em>in vitro</em> moins fr&eacute;quentes, &agrave; une fr&eacute;quence d&eacute;termin&eacute;e en consultation avec la CCSN.</p>  <p>Pour effectuer les essais de fonctionnement p&eacute;riodiques, le service de dosim&eacute;trie doit respecter les exigences suivantes :</p>
<ol>
<li>pr&eacute;parer les &eacute;chantillons d&rsquo;essai de mani&egrave;re &agrave; obtenir des activit&eacute;s volumiques qui ne sont pas connues de la personne qui analyse l&rsquo;&eacute;chantillon;</li>
<li>determiner l&rsquo;activit&eacute; volumique des &eacute;chantillons d&rsquo;essai;</li>
<li>traiter les &eacute;chantillons d&rsquo;essai de la m&ecirc;me fa&ccedil;on, et de telle sorte que l&rsquo;on ne puisse les distinguer des &eacute;chantillons de biodosage in vitro ordinaires; et</li>
<li>inclure dans les essais de fonctionnement les m&ecirc;mes cat&eacute;gories de radionucl&eacute;ides que celles qui sont incluses dans les essais ind&eacute;pendants auxquels le service de dosim&eacute;trie participe.</li>
</ol>  <h4>4.3.1 Documentation</h4>  <p>Le service de dosim&eacute;trie doit conserver dans ses dossiers les proc&eacute;dures des essais de fonctionnement, et les r&eacute;sultats des essais de fonctionnement.</p>  <p>Le service de dosim&eacute;trie doit soumettre les proc&eacute;dures des essais de fonctionnement &agrave; la CCSN, afin d&rsquo;obtenir son approbation, &agrave; l&rsquo;&eacute;tape de la demande de permis.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.4"></div>
<h3 id="sec4-4">4.4	Essais de les pour les mesures <em>in vitro</em></h3>  <p>Avant d&rsquo;obtenir leurs permis, les services de dosim&eacute;trie interne sont tenus de se soumettre &agrave; des essais ind&eacute;pendants. Une fois agr&eacute;&eacute;, le service de dosim&eacute;trie doit se soumettre &agrave; des essais ind&eacute;pendants &agrave; intervalles r&eacute;guliers, au moins une fois tous les 12 mois ou &agrave; toute autre fr&eacute;quence &eacute;tablie en consultation avec la CCSN.</p>
<p>Si le service de dosim&eacute;trie utilise plus d&rsquo;un instrument de mesure (plusieurs compteurs &agrave; scintillation liquide pour l&rsquo;analyse du tritium, par exemple), les instruments qui n&rsquo;ont pas &eacute;t&eacute; utilis&eacute;s pour l&rsquo;essai ind&eacute;pendant devront &ecirc;tre v&eacute;rifi&eacute;s &agrave; intervalles r&eacute;guliers, au moins une fois tous les 12 mois, en le comparant &agrave; l&rsquo;instrument de mesure soumis &agrave; l&rsquo;essai ind&eacute;pendant. Le laboratoire est tenu de faire la preuve que tous les autres instruments de mesure satisfont &eacute;galement aux normes d&rsquo;exactitude et de pr&eacute;cision. Les facteurs tels que la r&eacute;cup&eacute;ration chimique, l&rsquo;extinction, la gamme des activit&eacute;s volumiques et les m&eacute;thodes de pr&eacute;paration des &eacute;chantillons devront, le cas &eacute;ch&eacute;ant, &ecirc;tre pris en compte.</p>   <p>Le service de dosim&eacute;trie doit faire effectuer les essais ind&eacute;pendants par le centre de r&eacute;f&eacute;rence en &eacute;talonnage appropri&eacute; (voir l&rsquo;annexe J), &agrave; moins d&rsquo;indication contraire dans le permis du service de dosim&eacute;trie. Si le centre de r&eacute;f&eacute;rence en &eacute;talonnage appropri&eacute; n&rsquo;offre pas l&rsquo;essai, le service de dosim&eacute;trie doit demander &agrave; la CCSN l&rsquo;autorisation de faire appel &agrave; un autre organisme.</p>
<p>La capacit&eacute; d&rsquo;analyse des services de dosim&eacute;trie doit &eacute;galement &ecirc;tre v&eacute;rifi&eacute; aux niveaux d&rsquo;activit&eacute; rencontr&eacute;s lors du contr&ocirc;le p&eacute;riodique du personnel, ainsi qu&rsquo;aux niveaux pr&eacute;vus &agrave; la suite d&rsquo;expositions accidentelles. Les &eacute;chantillons d&rsquo;essai seront &laquo; ensemenc&eacute;s &raquo; d&rsquo;une quantit&eacute; connue d&rsquo;activit&eacute; tra&ccedil;able qui sera &eacute;gale ou sup&eacute;rieure au NME. On v&eacute;rifiera la reproductibilit&eacute; des mesures en fournissant plusieurs &eacute;chantillons identiques pour chaque niveau d&rsquo;activit&eacute;.</p>   <p>Le service de dosim&eacute;trie doit respecter les normes &eacute;nonc&eacute;es dans l&rsquo;annexe F, &laquo; Normes relatives aux essais ind&eacute;pendants en dosim&eacute;trie interne &raquo;.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.5"></div>
<h3 id="sec4-5">4.5	Normes d&rsquo;exactitude et de pr&eacute;cision <em>in vivo</em></h3>  <p>Le tableau 6 indique les normes d&rsquo;exactitude et de pr&eacute;cision <em>in vivo</em> pour les essais ind&eacute;pendants. Pour &eacute;valuer le respect des normes d&rsquo;exactitude, on doit consid&eacute;rer s&eacute;par&eacute;ment le biais et la pr&eacute;cision. Le biais relatif moyen B doit &ecirc;tre calcul&eacute; &agrave; partir des relev&eacute;s, A<sub>i</sub>, de chaque activit&eacute; volumique ou niveau d&rsquo;activit&eacute; A inclus dans l&rsquo;essai. Comme le biais est souvent plus grand &agrave; des activit&eacute;s volumiques moindres, proches des seuils de d&eacute;tection, qu&rsquo;&agrave; des activit&eacute;s volumiques &eacute;lev&eacute;es, les essais des laboratoires du service de dosim&eacute;trie seront effectu&eacute;s en prenant en compte plusieurs activit&eacute;s volumiques &eacute;gales ou sup&eacute;rieures au NME. Selon les normes d&rsquo;exactitude et de pr&eacute;cision <em>in vitro</em> pour les essais ind&eacute;pendants et les essais de fonctionnement, la racine de l&rsquo;erreur quadratique moyenne (REQM) de B et SB doit &ecirc;tre inf&eacute;rieure ou &eacute;gale &agrave; 0,25, comme suit :</p>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<mtext>REQM&#x00A0;=&#x00A0;</mtext><msqrt>
<mrow>
<msup>
<mi>B</mi>
<mn>2</mn>
</msup>
<mo>+</mo><msub>
<mi>S</mi>
<mi>B</mi>
</msub>
<msup>
<mrow></mrow>
<mn>2</mn>
</msup>
</mrow>
</msqrt>
<mo>&#x2264;</mo><mtext>0</mtext><mtext>,25</mtext></mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaaeOuaiaab2
eacaqGtbGaaeyraiaabccacaqG9aGaaeiiamaakaaabaGaamOqamaa
CaaaleqabaGaaGOmaaaakiabgUcaRiaadofadaWgaaWcbaGaamOqaa
qabaGcdaahaaWcbeqaaiaaikdaaaaabeaakiabgsMiJkaabcdacaqG
UaGaaeOmaiaabwdaaaa@4539@
</annotation>   </semantics>  </math>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.6"></div>
<h3 id="sec4-7">4.6	Essais ind&eacute;pendants pour les mesures <em>in vivo</em></h3>  <p>Le service de dosim&eacute;trie interne doit effectuer et r&eacute;ussir des essais ind&eacute;pendants avant de se voir octroyer un permis. Une fois agr&eacute;&eacute;, le service de dosim&eacute;trie doit se soumettre &agrave; des essais ind&eacute;pendants &agrave; intervalles r&eacute;guliers, au moins une fois tous les 12 mois ou &agrave; toute autre fr&eacute;quence &eacute;tablie en consultation avec la CCSN.</p>  <p>Le service de dosim&eacute;trie doit se soumettre aux essais ind&eacute;pendants au moins une fois tous les 12 mois, m&ecirc;me si aucun changement n&rsquo;est apport&eacute; au syst&egrave;me de mesure, afin de pouvoir d&eacute;montrer qu&rsquo;il demeure comp&eacute;tent. Il faut alors tenir compte, le cas &eacute;ch&eacute;ant, de facteurs comme les variations de la r&eacute;partition de la source dans le fant&ocirc;me, les changements dans le rayonnement de fond ambiant  et les erreurs de positionnement.</p>   <p>Le service de dosim&eacute;trie doit faire effectuer les essais ind&eacute;pendants par le centre de r&eacute;f&eacute;rence en &eacute;talonnage appropri&eacute; (voir l&rsquo;annexe J), &agrave; moins d&rsquo;indication contraire dans le permis du service de dosim&eacute;trie. Si le centre de r&eacute;f&eacute;rence en &eacute;talonnage appropri&eacute; n&rsquo;offre pas l&rsquo;essai, le service de dosim&eacute;trie doit demander &agrave; la CCSN l&rsquo;autorisation de faire appel &agrave; un autre organisme.</p>  <p>Si le service de dosim&eacute;trie apporte des modifications aux d&eacute;tecteurs, &agrave; la g&eacute;om&eacute;trie de comptage ou &agrave; l&rsquo;&eacute;lectronique du syst&egrave;me de mesure, susceptibles  d&rsquo;affecter l&rsquo;&eacute;talonnage, de nouveaux essais ind&eacute;pendants devront &ecirc;tre effectu&eacute;s. Les fant&ocirc;mes utilis&eacute;s pour l&rsquo;&eacute;talonnage &agrave; des &eacute;nergies gamma de moins de 100 keV doivent &ecirc;tre compos&eacute;s de mat&eacute;riaux &eacute;quivalents aux tissus organiques et doivent &ecirc;tre anthropomorphiques. Dans le cas des &eacute;nergies gamma sup&eacute;rieures &agrave; 100 keV, les fant&ocirc;mes faits d&rsquo;autres mat&eacute;riaux sont acceptables.</p>   <p>Le service de dosim&eacute;trie doit respecter les normes d&eacute;finies dans l&rsquo;annexe F, &laquo; Normes relatives aux essais ind&eacute;pendants en dosim&eacute;trie interne &raquo;.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.7"></div>
<h3 id="sec4-7">4.7	Interpr&eacute;tation des donn&eacute;es du biodosage</h3>  <h4>4.7.1 Contr&ocirc;le de la dose efficace engag&eacute;e</h4>  <p>Les services de dosim&eacute;trie interne doivent contr&ocirc;ler et enregistrer la dose efficace engag&eacute;e re&ccedil;ue par les travailleurs en fonction des types de mesures mentionn&eacute;es dans le permis, en tenant compte des param&egrave;tres humains physiologiques appropri&eacute;s et d&rsquo;autres renseignements pertinents sur les conditions d&rsquo;exposition. La m&eacute;thode employ&eacute;e pour contr&ocirc;ler la dose doit &ecirc;tre pr&eacute;sent&eacute;e &agrave; la CCSN en vue d&rsquo;une approbation.</p>  <p>Au moment de contr&ocirc;ler la dose efficace engag&eacute;e re&ccedil;ue par un travailleur, les services de dosim&eacute;trie doivent tenir compte des param&egrave;tres propres au site, &agrave; moins que d&rsquo;autres valeurs (par exemple les valeurs par d&eacute;faut) ont &eacute;t&eacute; ant&eacute;rieurement approuv&eacute;es par la CCSN. Tous les param&egrave;tres cl&eacute;s doivent &ecirc;tre document&eacute;s.</p>  <h4>4.7.2 Documentation</h4>  <p>Le service de dosim&eacute;trie interne doit pr&eacute;senter les proc&eacute;dures de contr&ocirc;le  de la dose efficace engag&eacute;e re&ccedil;ue par les travailleurs &agrave; la CCSN en vue d&rsquo;une approbation, &agrave; l&rsquo;&eacute;tape de la demande de permis.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="5"></div>
<h2 id="sec5">5. Exigences techniques &ndash; Services de dosim&eacute;trie du radon et des produits de filiation du radon</h2>  <p>Les expositions individuelles au radon et aux ses produits de filiation du radon sont estim&eacute;es &agrave; l&rsquo;aide d&rsquo;instruments d&rsquo;&eacute;chantillonnage instantan&eacute;, qui sont joints &agrave; des relev&eacute;s de dur&eacute;e de s&eacute;jour ou &agrave; partir de moniteur individuel.</p>  <p>Le service de dosim&eacute;trie du radon et des produits de filiation du radon doit satisfaire aux exigences suivantes :</p>
<ol>
<li>d&eacute;terminer la concentration dans l&rsquo;air ou l&rsquo;exposition la plus faible que le service de dosim&eacute;trie peut mesurer &agrave; un niveau de confiance de 95 %, avec l&rsquo;exactitude globale prescrite, tel qu&rsquo;indiqu&eacute; &agrave; la section 5.2, &laquo; Exposition ou concentration minimale mesurable &raquo;;</li>
<li>mesurer la grandeur concern&eacute;e en respectant les normes d&rsquo;exactitude et les limites d&rsquo;incertitude qui s&rsquo;appliquent &agrave; cette grandeur, tel qu&rsquo;indiqu&eacute; aux sections 5.3, &laquo; Normes d&rsquo;exactitude pour les mesures de l&rsquo;exposition aux produits de filiation du radon &raquo;, et 5.6, &laquo; Normes d&rsquo;exactitude pour les mesures de l&rsquo;exposition au radon &raquo;;</li>
<li>faire la preuve qu&rsquo;il est en mesure de satisfaire aux normes globales en effectuant des essais de type, tel qu&rsquo;indiqu&eacute; aux sections 5.4, &laquo; Essais de type pour les instruments de mesure des produits de filiation du radon &raquo;, et 5.7, &laquo; Essais de type pour les mesures de l&rsquo;exposition au radon &raquo;; et</li>
<li>faire la preuve qu&rsquo;il fonctionne de mani&egrave;re fiable en se soumettant &agrave; des essais ind&eacute;pendants, tel qu&rsquo;indiqu&eacute; aux sections 5.5,<br /> &laquo; Essais ind&eacute;pendants pour la surveillance des produits de filiation du radon &raquo;, et 5.8, &laquo; Essais ind&eacute;pendants pour les mesures de l&rsquo;exposition au radon &raquo;.</li>
</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="5.1"></div>
<h3 id="sec5-1">5.1	Grandeurs &agrave; mesurer</h3>  <p>Les grandeurs &agrave; mesurer comportent les caract&eacute;ristiques suivantes :</p>
<ol>
<li>la concentration dans l&rsquo;air d&rsquo;&eacute;nergie potentielle alpha venant de produits de filiation du radon &agrave; courte p&eacute;riode ;</li>
<li>l&rsquo;exposition &agrave; ces m&ecirc;mes produits en suspension dans l&rsquo;air ; et</li>
<li>la concentration de radon dans l&rsquo;air.</li>
</ol>  <p>Il existe des unit&eacute;s historiques et des unit&eacute;s SI (Syst&egrave;me international d&rsquo;unit&eacute;s) ou compatibles SI de mesure de la concentration dans l&rsquo;air de produits de filiation du radon &agrave; courte p&eacute;riode et de l&rsquo;exposition &agrave; ces produits. Dans la pr&eacute;sente section, les unit&eacute;s historiques sont indiqu&eacute;es en premier lieu, avec, entre parenth&egrave;ses, les unit&eacute;s SI ou compatibles SI.</p>  <p>L&rsquo;unit&eacute; alpha (WL) est l&rsquo;unit&eacute; historique de mesure de la concentration de produits de filiation du radon dans l&rsquo;air. L&rsquo;unit&eacute; SI correspondante est le joule par m&egrave;tre cube (J m<sup>-3</sup>), o&ugrave; :</p>  <p className="text-center">1 WL = 20,8 &micro;J m<sup>-3</sup>	&nbsp;et&nbsp;	1 &micro;J m<sup>-3</sup> = 4,8 x 10<sup>-2</sup> WL</p>  <p>L&rsquo;unit&eacute; alpha-mois (WLM) est l&rsquo;unit&eacute; historique servant &agrave; exprimer l&rsquo;exposition &agrave; ces m&ecirc;mes produits de filiation. L&rsquo;unit&eacute; compatible SI est le joule-heure par m&egrave;tre cube (J h m<sup>-3</sup>), o&ugrave; : </p>  <p className="text-center">1 WLM = 3,54 mJ h m<sup>-3</sup>&nbsp; et &nbsp;	1 mJ h m<sup>-3</sup> = 0,283 WLM</p>  <p>Les concentrations de radon dans l&rsquo;air se mesurent en activit&eacute; par unit&eacute; de volume de cette atmosph&egrave;re (Bq m<sup>-</sup>3). Pour calculer l&rsquo;incorporation (Bq) associ&eacute;e &agrave; cette concentration, on multiplie la concentration par un rythme respiratoire d&eacute;fini (1,2 m<sup>3</sup> h<sup>-1</sup>) et la dur&eacute;e de s&eacute;jour (h). On peut &eacute;galement d&eacute;terminer l&rsquo;exposition en Bq h m<sup>-3</sup> ; l&rsquo;incorporation est alors &eacute;gale &agrave; cette valeur multipli&eacute;e par le rythme respiratoire.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="5.2"></div>
<h3 id="sec5-2">5.2	Exposition ou concentration minimale mesurable</h3>  <p>Le service de dosim&eacute;trie doit effectuer les t&acirc;ches suivantes :</p>
<ol>
<li>d&eacute;terminer et consigner l&rsquo;exposition ou la concentration dans l&rsquo;air les plus basses qu&rsquo;il peut mesurer au niveau de confiance de 95 %, avec des exactitudes globales de +50 %/-33 % ; et</li>
<li>l&rsquo;exposition minimale mesurable est exprim&eacute;e dans la m&ecirc;me unit&eacute; que la quantit&eacute; mesur&eacute;e.</li>
</ol>  <p>La section H.1 de l&rsquo;annexe H, &laquo; Exemples de calculs pour les mesures de la concentration minimale et incertitudes li&eacute;es au comptage &raquo; fournit des exemples de m&eacute;thodes statistiques utilis&eacute;es pour d&eacute;terminer la concentration volumique minimale mesurable.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="5.3"></div>
<h3 id="sec5-3">5.3	Normes d&rsquo;exactitude pour les mesures de l&rsquo;exposition aux produits de filiation du radon</h3>  <p>Il existe deux cat&eacute;gories d&rsquo;instruments pour surveiller les expositions individuelles aux produits de filiation du radon :</p>
<ol>
<li>les moniteurs individuels, qui donnent une estimation directe de l&rsquo;exposition individuelle; et</li>
<li>les instruments, d&rsquo;&eacute;chantillonnage instantan&eacute; qui mesurent la concentration de ces produits en un lieu et &agrave; un moment donn&eacute; et dont les relev&eacute;s sont utilis&eacute;s, en combinaison avec les relev&eacute;s de dur&eacute;e de s&eacute;jour, pour calculer les expositions individuelles.</li>
</ol>  <p>Les deux cat&eacute;gories d&rsquo;instruments doivent satisfaire aux exigences respectives &eacute;nonc&eacute;es dans la pr&eacute;sente section.</p>   <h4>5.3.1 Moniteurs individuels</h4>  <p>Les relev&eacute;s effectu&eacute;s avec les moniteurs individuels doivent &ecirc;tre r&eacute;alis&eacute;s dans un milieu o&ugrave; la concentration est stable et fixe. En fait, 95 % des valeurs obtenues dans ces relev&eacute;s doivent se situer &agrave; l&rsquo;int&eacute;rieur des limites de l&rsquo;intervalle de confiance indiqu&eacute;es au tableau 7. Les unit&eacute;s historiques sont indiqu&eacute;es en premier lieu, avec, entre parenth&egrave;ses, les unit&eacute;s SI ou compatibles SI.</p>
<table className="">  <caption className="text-left">Tableau 5 : Normes d&rsquo;exactitude pour la mesure de l&rsquo;exposition aux produits de filiation du radon pendant une p&eacute;riode de dosim&eacute;trie</caption>  <tr>
<th className="text-center text-center">Intervalles de mesures</th>
<th className="text-center">Exactitude globale (niveau de confiance de 95%)</th>  </tr>  <tr>
<td className="text-center">&ge; 0,05 WLM (177 &micro;J h m<sup>-3</sup>) to < 0.10 WLM (354 &micro;J h m<sup>-3</sup>)</td>
<td className="text-center">+100% / -50%</td>  </tr>  <tr>
<td className="text-center">&ge; 0,10 WLM (354 &micro;J h m<sup>-3</sup>)</td>
<td className="text-center">+50% / -33%</td>  </tr>  </table>
<h4>5.3.2 &Eacute;chantillonnage instantan&eacute;</h4>  <p>Dans le cas des essais r&eacute;alis&eacute;s par &eacute;chantillonnage instantan&eacute;, 95 % des valeurs obtenues lors de ces essais doivent se situer &agrave; l&rsquo;int&eacute;rieur des limites de l&rsquo;intervalle de confiance indiqu&eacute;es au tableau 8. Les unit&eacute;s historiques sont indiqu&eacute;es en premier lieu, avec, entre parenth&egrave;ses, les unit&eacute;s SI ou compatibles SI.</p>
<table className="">  <caption className="text-left">Tableau 6 : Normes d&rsquo;exactitude pour la mesure de l&rsquo;exposition aux produits de filiation du radon pendant une p&eacute;riode de dosim&eacute;trie</caption>  <tr>
<th className="text-center text-center">Intervalles de mesures</th>
<th className="text-center">Exactitude globale (niveau de confiance de 95%)</th>  </tr>  <tr>
<td className="text-center">&ge; 0,05 WLM (1.03 &micro;J h m<sup>-3</sup>) to < 0,10 WLM (2.08 &micro;J h m<sup>-3</sup>)</td>
<td className="text-center">+100% / -50%</td>  </tr>  <tr>
<td className="text-center">&ge; 0,10 WLM (2.08 &micro;J h m<sup>-3</sup>)</td>
<td className="text-center">+50% / -33%</td>  </tr>  </table>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="5.4"></div>
<h3 id="sec5-4">5.4	Essai de type pour les instruments de mesure des produits de filiation du radon</h3>  <p>Le service de dosim&eacute;trie doit d&eacute;montrer sa capacit&eacute; &agrave; satisfaire aux normes globales en effectuant des essais de type &agrave; l&rsquo;&eacute;tape de la demande de permis. Les exigences relatives aux essais de type pour les instruments de mesure des produits de filiation du radon sont les suivantes :</p>
<ol>
<li>les essais de type visant les moniteurs individuels doivent permettre de d&eacute;terminer toutes les sources possibles d&rsquo;erreurs et de chiffrer leur importance relative dans l&rsquo;erreur et l&rsquo;incertitude globales de la mesure de l&rsquo;exposition individuelle;</li>
<li>en plus de permettre d&rsquo;&eacute;tablir l&rsquo;exactitude globale d&rsquo;un moniteur individuel, les essais de type doivent &eacute;galement permettre de connaÃ®tre les limites de l&rsquo;instrument, telles que les conditions susceptibles de causer des probl&egrave;mes de saturation du filtre ou le temps durant lequel l&rsquo;instrument peut &ecirc;tre utilis&eacute; de fa&ccedil;on fiable sans qu&rsquo;il soit n&eacute;cessaire de recharger ses piles ;</li>
<li>les essais de type visant les instruments de mesure par &eacute;chantillonnage instantan&eacute; doivent permettre de d&eacute;terminer et de chiffrer toutes les sources  possibles qui contribuent &agrave; l&rsquo;erreur et &agrave; l&rsquo;incertitude globales de la mesure des concentrations instantan&eacute;es de produits de filiation du radon. Les erreurs et incertitudes dans les valeurs de l&rsquo;exposition individuelle r&eacute;elle, &eacute;tablies &agrave; partir des mesures d&rsquo;&eacute;chantillonnage instantan&eacute;, ne sont pas prises en compte ;</li>
<li>lorsque le service de dosim&eacute;trie effectue des changements (aux instruments ou aux m&eacute;thodes utilis&eacute;s, par exemple) et que ces changements sont susceptibles d&rsquo;influer sur le fonctionnement des moniteurs individuels et des instruments d&rsquo;&eacute;chantillonnage instantan&eacute;, le service de dosim&eacute;trie doit reprendre les essais de type servant &agrave; v&eacute;rifier l&rsquo;exactitude et la pr&eacute;cision des mesures, autant de fois qu&rsquo;il est n&eacute;cessaire pour prouver que les instruments continuent de satisfaire aux normes indiqu&eacute;es dans les tableaux 5 et 6 ; et</li>
<li>le service de dosim&eacute;trie doit pr&eacute;senter &agrave; la CCSN les r&eacute;sultats des essais de type qui ont &eacute;t&eacute; repris &agrave; la suite de changements apport&eacute;s au syst&egrave;me, avec la documentation indiqu&eacute;e dans la section 5.4.2, &laquo; Documentation &raquo; et devra obtenir l&rsquo;autorisation de la CCSN avant d&rsquo;utiliser le syst&egrave;me ainsi modifi&eacute;.</li>
</ol>
<h4>5.4.1 Grandeurs d&rsquo;influence pouvant affecter l&rsquo;exactitude et la pr&eacute;cision</h4>  <p>Le service de dosim&eacute;trie doit tenir compte des grandeurs d&rsquo;influence &eacute;num&eacute;r&eacute;es dans les paragraphes suivants, et &eacute;valuer celles qui risquent d&rsquo;avoir un effet marqu&eacute; sur l&rsquo;exactitude ou l&rsquo;incertitude. On devra &eacute;galement prendre en consid&eacute;ration d&rsquo;autres grandeurs d&rsquo;influence qui sont susceptibles de contribuer &agrave; l&rsquo;incertitude globale (en d&rsquo;autres termes, on tiendra compte de toutes les grandeurs d&rsquo;influence qui contribuent &agrave; l&rsquo;incertitude de la mesure).</p>  <p>Dans le cas des param&egrave;tres d&rsquo;&eacute;chantillonnage des moniteurs individuels, on prend en compte les grandeurs suivantes :</p>
<ol>
<li>la dur&eacute;e de fonctionnement aux valeurs nominales et &agrave; pleine charge de pile;</li>
<li>le d&eacute;bit d&rsquo;&eacute;chantillonnage;</li>
<li>la variabilit&eacute; du d&eacute;bit; et</li>
<li>l&rsquo;influence de la r&eacute;partition granulom&eacute;trique, et plus particuli&egrave;rement de la fraction libre de produits de filiation du radon, sur le rendement de l&rsquo;&eacute;chantillonnage.</li>
</ol>  <p>Dans le cas des param&egrave;tres de d&eacute;tection et de comptage des moniteurs individuels, on pred en compte les grandeurs suivantes :</p>
<ol>
<li>la g&eacute;om&eacute;trie filtre-d&eacute;tecteur;</li>
<li>le rendement de d&eacute;tection en fonction de l&rsquo;&eacute;nergie;</li>
<li>la sensibilit&eacute; au rayonnement provenant de sources autres que les produits de filiation du radon;</li>
<li>la sensibilit&eacute; aux &eacute;carts enregistr&eacute;s par rapport aux normes de traitement des d&eacute;tecteurs; et</li>
<li>la sensibilit&eacute; &agrave; la variabilit&eacute; dans le temps des concentrations de produits de filiation du radon</li>
</ol>  <p>Dans le cas des instruments d&rsquo;&eacute;chantillonnage instantan&eacute;, on prend en compte les grandeurs suivantes :</p>
<ol>
<li>le d&eacute;bit d&rsquo;&eacute;chantillonnage;</li>
<li>la variabilit&eacute; du d&eacute;bit;</li>
<li>la sensibilit&eacute; &agrave; la r&eacute;partition granulom&eacute;trique, et plus particuli&egrave;rement &agrave; la fraction libre de produits de filiation du radon, dans l&rsquo;atmosph&egrave;re contr&ocirc;l&eacute;e;</li>
<li>l&rsquo;&eacute;talonnage et la stabilit&eacute; des compteurs de particules alpha; et</li>
<li>la m&eacute;thode de calcul de la concentration de produits de filiation du radon.</li>
</ol>
<h4>5.4.2 Documentation</h4>  <p>Le service de dosim&eacute;trie doit conserver dans ses dossiers : </p>
<ol>
<li>les r&eacute;sultats des essais de type sous une forme qui indique clairement toutes les grandeurs d&rsquo;influence et les caract&eacute;ristiques du syst&egrave;me soumis &agrave; l&rsquo;examen, avec l&rsquo;intervalle de leurs valeurs possibles, selon l&rsquo;&eacute;valuation du service de dosim&eacute;trie en fonction de l&rsquo;utilisation pr&eacute;vue du syst&egrave;me de dosim&eacute;trie concern&eacute;;</li>
<li>les exemples de calcul qui montrent comment on a obtenu la r&eacute;ponse moyenne et l&rsquo;incertitude type globale; et</li>
<li>les documents justifiant les hypoth&egrave;ses pos&eacute;es et les techniques utilis&eacute;es.</li>
</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="5.5"></div>
<h3 id="sec5-5">5.5	Essais ind&eacute;pendants pour la surveillance des produits de filiation du radon</h3>  <p>Le service de dosim&eacute;trie doit se conformer aux exigences suivantes : </p>
<ol>
<li>se soumettre &agrave; des essais ind&eacute;pendants pour faire la preuve qu&rsquo;il respecte les normes d&rsquo;exactitude indiqu&eacute;es &agrave; la section 5.3, &laquo; Normes d&rsquo;exactitude pour les mesures de l&rsquo;exposition aux produits de filiation du radon &raquo; ;</li>
<li>faire effectuer les essais ind&eacute;pendants par le centre de r&eacute;f&eacute;rence en &eacute;talonnage appropri&eacute; pour le contr&ocirc;le des produits de filiation du radon au Canada (voir l&rsquo;annexe J) ;</li>
<li>envoyer un &eacute;chantillon repr&eacute;sentatif de ses moniteurs individuels au centre de r&eacute;f&eacute;rence en &eacute;talonnage &agrave; intervalles r&eacute;guliers, au moins une fois tous les 12 mois, ou &agrave; une autre fr&eacute;quence approuv&eacute;e par la CCSN, ainsi qu&rsquo;apr&egrave;s tout changement de conception susceptible d&rsquo;influer sur le fonctionnement des moniteurs ;</li>
<li>se conformer aux normes sur l&rsquo;&eacute;chantillonnage instantan&eacute;  &eacute;nonc&eacute;es dans l&rsquo;annexe G, &laquo; Normes relatives aux essais ind&eacute;pendants pour la mesure de l&rsquo;exposition au radon et aux produits de filiation du radon &raquo; ;</li>
<li>aviser imm&eacute;diatement la CCSN par &eacute;crit (format &eacute;lectronique acceptable) en cas d&rsquo;&eacute;chec &agrave; un essai ind&eacute;pendant ;</li>
<li>soumettre &agrave; la CCSN, dans les trente (30) jours, un rapport &eacute;crit d&eacute;taill&eacute; dans lequel seront pr&eacute;cis&eacute;s la cause et les cons&eacute;quences de l&rsquo;&eacute;chec, ainsi qu&rsquo;une description des mesures correctrices qui ont &eacute;t&eacute; prises ; et</li>
<li>r&eacute;p&eacute;ter imm&eacute;diatement l&rsquo;essai manqu&eacute;, et pr&eacute;senter les r&eacute;sultats &agrave; la CCSN.</li>
</ol>  <p>Si le service de dosim&eacute;trie externe &eacute;choue de nouveau, lors d&rsquo;un deuxi&egrave;me essai cons&eacute;cutif, la CCSN peut entreprendre d&rsquo;autres mesures dans le cadre du r&eacute;gime de permis.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="5.6"></div>
<h3 id="sec5-6">5.6 Normes d&rsquo;exactitude pour les mesures de l&rsquo;exposition au radon</h3>  <h4>5.6.1 Moniteurs individuels</h4>  <p>Dans le cas des moniteurs individuels, les essais doivent &ecirc;tre r&eacute;alis&eacute;s dans un milieu o&ugrave; la concentration est stable et fixe. Quatre-vingt-quinze (95) pour cent des valeurs obtenues doivent se situer &agrave; l&rsquo;int&eacute;rieur des limites des intervalles de confiance indiqu&eacute;s dans le tableau 7.</p>
<table className="">  <caption className="text-left">Tableau 7 : Normes d&rsquo;exactitude pour la mesure de l&rsquo;exposition individuelle au radon pendant une p&eacute;riode de dosim&eacute;trie</caption>  <tr>
<th className="text-center text-center">Intervalles de mesures</th>
<th className="text-center">Exactitude globale (niveau de confiance de 95%)</th>  </tr>  <tr>
<td className="text-center">&ge; 2,0 MBq h m<sup>-3</sup> &agrave; < 4,0 MBq h m<sup>-3</sup></td>
<td className="text-center">+100% / -50%</td>  </tr>  <tr>
<td className="text-center">&ge; 4,0 MBq h m<sup>-3</sup></td>
<td className="text-center">+50% / -33%</td>  </tr>  </table>
<h4>5.6.2 &Eacute;chantillonnage instantan&eacute;</h4>  <p>Le tableau 8 illustre les normes d&rsquo;exactitude auxquelles les syst&egrave;mes de surveillance doivent se conformer dans des conditions d&rsquo;utilisation pr&eacute;vues.</p>
<table className="">  <caption className="text-left">Tableau 8 : Normes d&rsquo;exactitude pour la mesure de l&rsquo;exposition individuelle au radon pendant une p&eacute;riode de dosim&eacute;trie</caption>  <tr>
<th className="text-center text-center">Intervalles de mesures</th>
<th className="text-center">Exactitude globale (niveau de confiance de 95%)</th>  </tr>  <tr>
<td className="text-center">&ge; 10 kBq m<sup>-3</sup> &agrave; < 20 kBq m<sup>-3</sup></td>
<td className="text-center">+100% / -50%</td>  </tr>  <tr>
<td className="text-center">&ge; 20 kBq m<sup>-3</sup>)</td>
<td className="text-center">+50% / -33%</td>  </tr>  </table>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="5.7"></div>
<h3 id="sec5-7">5.7	Essais de type pour les mesures de l&rsquo;exposition au radon</h3>  <p>Le service de dosim&eacute;trie doit d&eacute;montrer, &agrave; travers des essais de type &agrave; l&rsquo;&eacute;tape de la demande de permis, sa capacit&eacute; de satisfaire aux normes globales suivantes :</p>
<ol>
<li>les essais de type visant les instruments de mesure de l&rsquo;exposition au radon doivent permettre de d&eacute;terminer toutes les sources possibles d&rsquo;erreurs et de chiffrer leur importance relative dans l&rsquo;erreur et l&rsquo;incertitude globales de la mesure de l&rsquo;exposition individuelle ; et</li>
<li>lorsque des changements sont apport&eacute;s (d&eacute;tecteur ou filtres diff&eacute;rents, &eacute;tui diff&eacute;rent, diff&eacute;rents protocoles de mesure, etc.), le service de dosim&eacute;trie doit reprendre les essais de type autant de fois qu&rsquo;il est n&eacute;cessaire pour &eacute;tablir l&rsquo;incidence des changements sur l&rsquo;exactitude et l&rsquo;incertitude globales.</li>
</ol>
<h4>5.7.1 Grandeurs d&rsquo;influence risquant d&rsquo;avoir un effet marqu&eacute; sur l&rsquo;exactitude ou l&rsquo;incertitude</h4>  <p>Le service de dosim&eacute;trie doit tenir compte des grandeurs d&rsquo;influence &eacute;num&eacute;r&eacute;es dans les paragraphes suivants, et &eacute;valuer celles qui risquent d&rsquo;affecter de faÃ§on significative l&rsquo;exactitude ou l&rsquo;incertitude. On devra &eacute;galement prendre en consid&eacute;ration d&rsquo;autres grandeurs d&rsquo;influence qui sont susceptibles d&rsquo;intervenir dans l&rsquo;incertitude globale.</p>
<p>Dans le cas des moniteurs individuels utilis&eacute;s pour le radon, les grandeurs d&rsquo;influence suivantes doivent &ecirc;tre prises en compte :</p>
<ol>
<li>l&rsquo;efficacit&eacute; du d&eacute;tecteur;</li>
<li>la sensibilit&eacute; au rayonnement provenant de sources autres que les produits de filiation du radon;</li>
<li>la sensibilit&eacute; aux &eacute;carts enregistr&eacute;s par rapport aux normes de traitement des d&eacute;tecteurs; et</li>
<li>la durabilit&eacute; en regard du milieu de travail.</li>
</ol>  <p>Dans le cas des instruments utilis&eacute;s pour l&rsquo;&eacute;chantillonnage instantan&eacute;, les grandeurs d&rsquo;influence suivantes doivent &ecirc;tre prises en compte :</p>
<ol>
<li>le d&eacute;bit d&rsquo;&eacute;chantillonnage;</li>
<li>la variabilit&eacute; du d&eacute;bit;</li>
<li>l&rsquo;efficacit&eacute; du d&eacute;tecteur;</li>
<li>la sensibilit&eacute; au rayonnement provenant de sources autres que le radon;</li>
<li>la sensibilit&eacute; &agrave; d&rsquo;autres agents physiques et chimiques pr&eacute;sents dans l&rsquo;environnement;</li>
<li>la saturation; et</li>
<li>la durabilit&eacute; en regard du milieu de travail.</li>
</ol>
<h4>5.7.2 Documentation</h4>  <p>Le service de dosim&eacute;trie doit conserver dans ses dossiers :</p>
<ol>
<li>les r&eacute;sultats des essais de type sous une forme qui indique clairement toutes les grandeurs d&rsquo;influence et les caract&eacute;ristiques du syst&egrave;me soumis &agrave; l&rsquo;examen, avec l&rsquo;intervalle de leurs valeurs possibles, selon l&rsquo;&eacute;valuation du service de dosim&eacute;trie en fonction de l&rsquo;utilisation pr&eacute;vue du syst&egrave;me de dosim&eacute;trie concern&eacute;;</li>
<li>les exemples de calcul qui montrent comment on a obtenu la r&eacute;ponse moyenne et l&rsquo;incertitude type globale; et</li>
<li>les documents justifiant les hypoth&egrave;ses pos&eacute;es et les techniques utilis&eacute;es.</li>
</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="5.8"></div>
<h3 id="sec5-8">5.8	Essais ind&eacute;pendants pour les mesures de l&rsquo;exposition au radon</h3>  <p>Le service de dosim&eacute;trie doit se conformer aux exigences suivantes :</p>
<ol>
<li>se soumettre &agrave; des essais ind&eacute;pendants pour faire la preuve qu&rsquo;il respecte les normes d&rsquo;exactitude indiqu&eacute;es &agrave; la section 5.6, &laquo; Normes d&rsquo;exactitude pour les mesures de l&rsquo;exposition au radon &raquo; ;</li>
<li>faire effectuer les essais ind&eacute;pendants par le centre de r&eacute;f&eacute;rence en &eacute;talonnage appropri&eacute; pour le contr&ocirc;le du radon au Canada (voir l&rsquo;annexe J) ;</li>
<li>envoyer un &eacute;chantillon repr&eacute;sentatif de ses moniteurs individuels au centre de r&eacute;f&eacute;rence en &eacute;talonnage &agrave; intervalles r&eacute;guliers, au moins une fois tous les 12 mois, ou &agrave; une autre fr&eacute;quence approuv&eacute;e par la CCSN, ainsi qu&rsquo;apr&egrave;s tout changement de conception susceptible d&rsquo;influer sur le fonctionnement des moniteurs ;</li>
<li>se conformer aux normes relatives sur l&rsquo;&eacute;chantillonnage instantan&eacute; &eacute;nonc&eacute;es dans l&rsquo;annexe G, &laquo; Normes relatives aux essais ind&eacute;pendants pour la mesure de l&rsquo;exposition au radon et aux produits de filiation du radon &raquo; ;</li>
<li>aviser imm&eacute;diatement la CCSN par &eacute;crit (format &eacute;lectronique acceptable) en cas d&rsquo;&eacute;chec &agrave; un essai ind&eacute;pendant ;</li>
<li>soumettre &agrave; la CCSN, dans les trente (30) jours, un rapport &eacute;crit d&eacute;taill&eacute;  dans lequel seront pr&eacute;cis&eacute;s la cause et les cons&eacute;quences de l&rsquo;&eacute;chec, ainsi qu&rsquo;une description des mesures correctives qui ont &eacute;t&eacute; prises ; et</li>
<li>r&eacute;p&eacute;ter imm&eacute;diatement l&rsquo;essai manqu&eacute; et pr&eacute;senter les r&eacute;sultats &agrave; la CCSN.</li>
</ol>  <p>S&rsquo;il &eacute;choue de nouveau, lors d&rsquo;un deuxi&egrave;me essai cons&eacute;cutif, la CCSN peut entreprendre d&rsquo;autres mesures dans le cadre du r&eacute;gime de permis.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6"></div>
<h2 id="sec6">6. Exigences techniques &ndash; Services de dosim&eacute;trie pour les incorporations de mati&egrave;res radioactives en suspension dans l&rsquo;air</h2>  <p>Les mati&egrave;res radioactives en suspension dans l&rsquo;air sont les mati&egrave;res radioactives dont les caract&eacute;ristiques ou les concentrations sont telles qu&rsquo;il n&rsquo;existe aucun moyen pratique de contr&ocirc;ler la dose par biodosage. Ces mati&egrave;res comprennent, sans toutefois s&rsquo;y limiter, l&rsquo;uranium 238 et ses produits de d&eacute;sint&eacute;gration (autres que le radon et les produits de filiation du radon), le thorium 232, de mÃªme que certains isotopes du plutonium. Les mati&egrave;res radioactives en suspension dans l&rsquo;air existent sous diverses formes physiques et chimiques, incluant des poussi&egrave;res, des gaz, des &eacute;manations ou des vapeurs. La pr&eacute;sente section s&rsquo;applique aux mesures des mati&egrave;res radioactives dans l&rsquo;air utilis&eacute;es &agrave; des fins de dosim&eacute;trie.</p>   <p>La surveillance des mati&egrave;res radioactives en suspension dans l&rsquo;air facilite l&rsquo;estimation des doses individuelles ou de l&rsquo;exposition &agrave; ces dangers radiologiques chez les travailleurs des installations de traitement de l&rsquo;uranium, des installations de recherche, et d&rsquo;autres installations o&ograve; l&rsquo;on trouve des atmosph&egrave;res charg&eacute;es de mati&egrave;res radioactives. Ces estimations s&rsquo;effectuent gr&acirc;ce &agrave; des &eacute;chantillonnages instantan&eacute;s conjugu&eacute;s &agrave; des relev&eacute;s de dur&eacute;e de s&eacute;jour.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.1"></div>
<h3 id="sec6-1">6.1 Grandeurs &agrave; mesurer</h3>  <p>Les concentrations de mati&egrave;res radioactives en suspension dans l&rsquo;air se mesurent en activit&eacute; ou masse  par unit&eacute; de volume de cette atmosph&egrave;re (e.g. Bq m<sup>-3</sup>). Pour calculer l&rsquo;incorporation (e.g. Bq) associ&eacute;e &agrave; cette concentration, on multiplie la concentration par un rythme respiratoire d&eacute;fini (e.g. 1,2 m<sup>3</sup> h<sup>-1</sup>) et la dur&eacute;e de s&eacute;jour (h). On peut &eacute;galement d&eacute;terminer l&rsquo;exposition en Bq h m<sup>-3</sup> ; l&rsquo;incorporation est alors &eacute;gale &agrave; cette valeur multipli&eacute;e par le rythme respiratoire.</p>  <p>La concentration de mati&egrave;res radioactives en suspension dans l&rsquo;air peut &eacute;galement &ecirc;tre exprim&eacute;e en unit&eacute;s LDCA (limite d&eacute;riv&eacute;e de concentration dans l&rsquo;air). La LDCA est la concentration de mati&egrave;res radioactives dans l&rsquo;air qui est respir&eacute;e par un travailleur durant 2 000 h  et qui donne lieu &agrave; une dose efficace engag&eacute;e de 20 mSv. On suppose que le travailleur a un rythme respiratoire de 1,2 m<sup>3</sup>/h. De m&ecirc;me, l&rsquo;exposition peut &ecirc;tre exprim&eacute;e en LDCA-heures.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.2"></div>
<h3 id="sec6-2">6.2	Exposition ou concentration minimale mesurable</h3>  <p>Les m&eacute;thodes, les crit&egrave;res et les installations d&rsquo;essais de type standardis&eacute;s, ainsi que les installations d&rsquo;essais ind&eacute;pendants, ne sont pas disponibles actuellement pour les mesures des mati&egrave;res radioactives en suspension dans l&rsquo;air. Par cons&eacute;quent, la pr&eacute;sente norme ne pr&eacute;cise aucune exigence particuli&egrave;re pour les essais de type, ni pour les essais ind&eacute;pendants concernant les mesures des mati&egrave;res radioactives en suspension dans l&rsquo;air. Cependant, un service de dosim&eacute;trie pour les mesures des mati&egrave;res radioactives en suspension dans l&rsquo;air doit effectuer les t&acirc;ches suivantes :</p>
<ol>
<li>mesurer la grandeur d&rsquo;int&eacute;r&ecirc;t en respectant les normes d&rsquo;exactitude qui s&rsquo;appliquent &agrave; cette grandeur, tel qu&rsquo;indiqu&eacute; &agrave; la section 6.3, &laquo; Normes d&rsquo;exactitude pour les mesures des mati&egrave;res radioactives en suspension dans l&rsquo;air &raquo;; et</li>
<li>d&eacute;terminer et consigner l&rsquo;exposition ou la concentration dans l&rsquo;air les plus basses qu&rsquo;il peut mesurer au niveau de confiance de 95 %, avec des exactitudes globales de +50 %/-33 %.</li>
</ol>  <p>La section H.1 de l&rsquo;annexe H, &laquo; Exemples de calculs pour les mesures de la concentration minimale et incertitudes li&eacute;es au comptage &raquo; fournit des exemples de la m&eacute;thode statistique employ&eacute;e pour d&eacute;terminer l&rsquo;activit&eacute; volumique minimale mesurable. L&rsquo;exposition minimale mesurable doit &ecirc;tre exprim&eacute;e dans les m&ecirc;mes unit&eacute;s que la quantit&eacute; mesur&eacute;e.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.3"></div>
<h3 id="sec6-3">6.3	Normes d&rsquo;exactitude pour les mesures des mati&egrave;res radioactives en suspension dans l&rsquo;air</h3>  <p>Le service de dosim&eacute;trie doit faire la preuve qu&rsquo;il suit les normes de bonnes pratiques pr&eacute;vues pour la surveillance courante de l&rsquo;hygi&egrave;ne du travail, lors des mesures de la concentration des mati&egrave;res radioactives en suspension dans l&rsquo;air. Plus particuli&egrave;rement, lorsque des pompes de pr&eacute;l&egrave;vement d&rsquo;&eacute;chantillons sont utilis&eacute;es, le d&eacute;bit de pr&eacute;l&egrave;vement ne doit pas s&rsquo;&eacute;loigner de plus de 5 % de la valeur utilis&eacute;e pour calculer la concentration. Le d&eacute;bit d&rsquo;air devrait &ecirc;tre v&eacute;rifi&eacute; chaque jour o&ugrave; l&rsquo;&eacute;chantillonneur d&rsquo;air est utilis&eacute;. Si le d&eacute;bit d&rsquo;air varie de plus de 5 % en plus ou en moins pendant la collecte d&rsquo;un &eacute;chantillon, le d&eacute;bit de pr&eacute;l&egrave;vement utilis&eacute; aux fins de dosim&eacute;trie devrait correspondre &agrave; la moyenne des d&eacute;bits d&rsquo;air initial et final.</p>  <p>Les &eacute;chantillonneurs d&rsquo;air doivent &ecirc;tre munis d&rsquo;un dispositif pour d&eacute;terminer le volume d&rsquo;air &eacute;chantillonn&eacute;. Les d&eacute;bitm&egrave;tres d&rsquo;air doivent &ecirc;tre &eacute;talonn&eacute;s au moins une fois par ann&eacute;e, ainsi qu&rsquo;apr&egrave;s leur r&eacute;paration ou leur modification, ou s&rsquo;il est possible qu&rsquo;ils aient &eacute;t&eacute; endommag&eacute;s.. Les m&eacute;thodes d&rsquo;&eacute;talonnage doivent &ecirc;tre fond&eacute;es sur une m&eacute;thode actuelle de l&rsquo;American Conference of Governmental Industrial Hygienists (ACGIH) ou de la Occupational Safety and Health Administration (OSHA). La m&eacute;thode, le code d&rsquo;identification unique de l&rsquo;instrument et la date de l&rsquo;&eacute;talonnage doivent &ecirc;tre consign&eacute;s.</p>  <p>Si l&rsquo;&eacute;chantillonneur d&rsquo;air personnel n&rsquo;est pas port&eacute; &agrave; moins de 30 cm de la t&ecirc;te du travailleur, le titulaire de permis devrait d&eacute;montrer que l&rsquo;&eacute;chantillon est repr&eacute;sentatif de l&rsquo;air de la zone respiratoire.</p>  <p>L&rsquo;efficacit&eacute; de captage de particules des &eacute;chantillonneurs d&rsquo;air doit &ecirc;tre, autant que possible, insensibles aux valeurs granulom&eacute;triques. Ceci exclut donc l&rsquo;utilisation de cyclones pour le captage et la mesure des mati&egrave;res radioactives en suspension dans l&rsquo;air.</p>  <p>Le service de dosim&eacute;trie doit d&eacute;terminer l&rsquo;incertitude globale des mesures des mati&egrave;res radioactives en suspension dans l&rsquo;air &agrave; partir de la combinaison de toutes les incertitudes li&eacute;es &agrave; tous les param&egrave;tres utilis&eacute;s pour calculer la concentration des mati&egrave;res radioactives en suspension dans l&rsquo;air en fonction de l&rsquo;activit&eacute; mesur&eacute;e sur le filtre du moniteur.</p>  <p>La section H.2 de l&rsquo;annexe H, Exemples de calculs pour les mesures de la concentration minimale et incertitudes li&eacute;es au comptage, fournit des exemples de m&eacute;thode statistique utilis&eacute;e pour estimer les incertitudes dans le comptage.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.4"></div>
<h3 id="sec6-4">6.4	Documentation</h3>  <p>Le service de dosim&eacute;trie doit tenir les registres suivants :</p>
<ol>
<li>les r&eacute;sultats des essais dans un format o&ugrave; sont clairement indiqu&eacute;s tous les exemples de calcul des grandeurs d&rsquo;influence, illustrant comment on a calcul&eacute; la r&eacute;ponse moyenne et l&rsquo;incertitude type global; et</li>
<li>la justification des hypoth&egrave;ses formul&eacute;es et des techniques utilis&eacute;es.</li>
</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="7"></div>
<h2 id="sec7">7. Exigences en mati&egrave;re de syst&egrave;me de gestion</h2>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="7.1"></div>
<h3 id="sec7-1">7.1 G&eacute;n&eacute;ralit&eacute;s</h3>  <p>L&rsquo;exactitude et la reproductibilit&eacute; des mesures de dose d&eacute;terminent la qualit&eacute; d&rsquo;un service de dosim&eacute;trie. Un syst&egrave;me de gestion bien d&eacute;fini et mis en &oelig;uvre fournit une assurance de la qualit&eacute; efficace d&rsquo;un service de dosim&eacute;trie et aide &agrave; garantir que les r&eacute;sultats sont exacts, reproductibles, v&eacute;rifiables et correctement enregistr&eacute;s. Les sections 7.2 &agrave; 7.16 pr&eacute;sentent les exigences minimales que le titulaire de permis doit respecter pour se doter d&rsquo;un programme d&rsquo;assurance de la qualit&eacute; efficace pour son service de dosim&eacute;trie.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="7.2"></div>
<h3 id="sec7-2">7.2 Politique de la direction</h3>
<ol>
<li>La haute direction doit documenter sa politique en mati&egrave;re de qualit&eacute;. Cette politique doit convenir &agrave; un service de dosim&eacute;trie [voir la section 5.1] et doit contenir une d&eacute;claration de principe qui engage le service &agrave; fonctionner selon son programme de syst&egrave;me de gestion, &agrave; examiner p&eacute;riodiquement si ce programme est toujours ad&eacute;quat et &agrave; l&rsquo;am&eacute;liorer continuellement.</li>
<li>La politique et les objectifs en mati&egrave;re de qualit&eacute; doivent &ecirc;tre communiqu&eacute;s au personnel.</li>
</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="7.3"></div>
<h3 id="sec7-3">7.3	Description du syst&egrave;me de gestion</h3>  <p>Le programme de syst&egrave;me de gestion est &eacute;tabli dans une s&eacute;rie de documents interd&eacute;pendants qui, ensemble, fournissent des descriptions claires, exhaustives et pr&eacute;cises des &eacute;l&eacute;ments d&rsquo;information suivants :</p>
<ol>
<li>&eacute;nonc&eacute;s de la politique et des objectifs en mati&egrave;re de qualit&eacute; ;</li>
<li>modalit&eacute;s, proc&eacute;dures et instructions document&eacute;es ;</li>
<li>documents dont le service de dosim&eacute;trie a besoin pour planifier, exercer et contr&ocirc;ler ses processus de fa&ccedil;on efficace ; et</li>
<li>documents requis pour faire la preuve que le service de dosim&eacute;trie se conforme &agrave; son programme de syst&egrave;me de gestion.</li>
</ol>  <p>Remarque : la documentation peut se pr&eacute;senter sous n&rsquo;importe quelle forme ou support.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="7.4"></div>
<h3 id="sec7-4">7.4	Revue par la direction</h3>  <ol>
<li>Les gestionnaires doivent effectuer des auto&eacute;valuations de leurs responsabilit&eacute;s respectives au moins une fois par ann&eacute;e, afin de d&eacute;terminer si le service de dosim&eacute;trie satisfait aux normes et aux objectifs de qualit&eacute;, et d&rsquo;&eacute;valuer l&rsquo;efficacit&eacute; des m&eacute;thodes et processus utilis&eacute;s. Des mesures de rendement devront &ecirc;tre d&eacute;velopp&eacute;es et utilis&eacute;es dans ces auto&eacute;valuations.</li>
<li>Au moins une fois par an, la haute direction doit proc&eacute;der &agrave; une &eacute;valuation formelle afin de v&eacute;rifier que les processus sont optimis&eacute;s et ma&icirc;tris&eacute;s et qu&rsquo;ils donnent des r&eacute;sultats pr&eacute;cis conformes aux exigences. Dans le cadre de cette revue, on &eacute;valuera les possibilit&eacute;s d&rsquo;am&eacute;liorer les processus et la n&eacute;cessit&eacute; d&rsquo;apporter des changements au programme de syst&egrave;me de gestion, notamment &agrave; la politique en mati&egrave;re de qualit&eacute; et aux objectifs. La revue annuelle doit couvrir, au minimum, les sources d&rsquo;information suivantes :<br />   a.	comparaison des normes et des objectifs de qualit&eacute; par rapport aux r&eacute;sultats obtenus;<br />   b.	analyses des r&eacute;sultats des inspections et des essais;<br />
c.	analyses des cas de non-conformit&eacute; (fr&eacute;quence, importance, cons&eacute;quences, causes et responsabilit&eacute;s), des mesures correctives et pr&eacute;ventives correspondantes et des tendances relatives aux d&eacute;faillances;<br />
d.	analyses des r&eacute;sultats obtenus lors des audits internes;<br />
e.	plaintes et probl&egrave;mes ou erreurs d&rsquo;ex&eacute;cution;<br />
f.	r&eacute;sultats des auto&eacute;valuations effectu&eacute;es par les gestionnaires; et<br />   g.	analyses de l&rsquo;efficacit&eacute; des mesures correctives.</li>
<li>Les enregistrements des r&eacute;visions annuelles devront &ecirc;tre conserv&eacute;s.</li>  </ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="7.5"></div>
<h3 id="sec7-5">7.5	Organisation et autorit&eacute;</h3>  <ol>
<li>La direction doit d&eacute;finir les responsabilit&eacute;s et les pouvoirs des gestionnaires et du personnel. Les axes de communication interne et externe devront &ecirc;tre d&eacute;finis.</li>
<li>La direction d&eacute;signera un responsable des &eacute;valuations ind&eacute;pendantes de l&rsquo;efficacit&eacute; du programme de syst&egrave;me de gestion, qui rel&egrave;vera d&rsquo;un &eacute;chelon de direction tel qu&rsquo;il sera suffisamment affranchi des pressions de co&ucirc;t et d&rsquo;&eacute;ch&eacute;ancier.</li>  </ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="7.6"></div>
<h3 id="sec7-6">7.6	Comp&eacute;tences du personnel</h3>  <ol>
<li>Tout le personnel exer&ccedil;ant des activit&eacute;s li&eacute;es au service de dosim&eacute;trie, y compris celles qui sont d&eacute;crites dans la section 7.2, &laquo; Exigences du programme de syst&egrave;me de gestion &raquo;, doit avoir la formation, les qualit&eacute;s et les comp&eacute;tences n&eacute;cessaires pour s&rsquo;acquitter efficacement des t&acirc;ches qui lui sont confi&eacute;es.</li>
<li>Les normes de formation, de qualification et de comp&eacute;tence doivent &ecirc;tre &eacute;tablies par le service de dosim&eacute;trie</li>.
</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="7.7"></div>
<h3 id="sec7-7">7.7	Approvisionnement</h3>  <ol>
<li>Le service de dosim&eacute;trie doit &eacute;tablir les proc&eacute;dures r&eacute;gissant l&rsquo;achat de l&rsquo;&eacute;quipement, du mat&eacute;riel et des services n&eacute;cessaires pour effectuer une mesure pr&eacute;cise des doses ou des expositions.</li>
<li>Les proc&eacute;dures d&rsquo;achat doivent garantir que l&rsquo;&eacute;quipement, le mat&eacute;riel et les services sont achet&eacute;s conform&eacute;ment &agrave; certaines exigences. Ces exigences comprennent une description claire de l&rsquo;article, &agrave; l&rsquo;aide d&rsquo;une norme ou d&rsquo;une fiche technique qui fait &eacute;tat, entre autres, de l&rsquo;exactitude de la mesure et de sa reproductibilit&eacute;, de la tra&ccedil;abilit&eacute; de l&rsquo;&eacute;talonnage prouvant qu&rsquo;il a &eacute;t&eacute; effectu&eacute; conform&eacute;ment aux normes nationales, des exigences relatives aux inspections et aux essais, des crit&egrave;res d&rsquo;acceptation, des exigences du programme de syst&egrave;me de gestion auxquelles le fournisseur doit satisfaire et des exigences en mati&egrave;re d&rsquo;enregistrement.</li>
<li>Les fournisseurs doivent &ecirc;tre &eacute;valu&eacute;s et choisis en fonction de leur capacit&eacute; de respecter les exigences. Une liste de vendeurs ou de fournisseurs doit &ecirc;tre tenue &agrave; jour.</li>
<li>Le mat&eacute;riel et l&rsquo;&eacute;quipement achet&eacute;s doivent &ecirc;tre inspect&eacute;s pour s&rsquo;assurer qu&rsquo;ils sont conformes aux exigences.</li>  </ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="7.8"></div>
<h3 id="sec7-8">7.8	Contr&ocirc;le du travail</h3>  <ol>
<li>Tout travail ou activit&eacute; qui peut influer sur l&rsquo;attribution de la bonne dose &agrave; la bonne personne et sur le maintien d&rsquo;un syst&egrave;me efficace d&rsquo;enregistrement des doses doit &ecirc;tre r&eacute;gi par des proc&eacute;dures &eacute;tablies qui offrent notamment des renseignements d&eacute;taill&eacute;s sur les aspects suivants :
<ul className="list-bullet-none">
<li>a) les m&eacute;thodes de travail et l&rsquo;encha&icirc;nement des t&acirc;ches;</li>
<li>b) le mat&eacute;riel &agrave; utiliser et les milieux de travail sp&eacute;ciaux;</li>
<li>c) les crit&egrave;res d&rsquo;acceptabilit&eacute;;</li>
<li>d) les points d&rsquo;inspection; et</li>
<li>e) les exigences d&rsquo;enregistrement.</li>
</ul></li>
<li>Les proc&eacute;dures de contr&ocirc;le du travail doivent permettre d&rsquo;assurer la conservation des donn&eacute;es d&rsquo;identification (marques et num&eacute;ros de contr&ocirc;le) des dosim&egrave;tres, des &eacute;chantillons, des &eacute;talons, des mesures et des registres de doses, ainsi que d&rsquo;autres donn&eacute;es sur lesquelles sont fond&eacute;es les doses, et de maintenir le lien entre ces donn&eacute;es et les personnes contr&ocirc;l&eacute;es.</li>
<li>Les proc&eacute;dures de contr&ocirc;le du travail doivent fixer des exigences et des pr&eacute;cautions particuli&egrave;res concernant la manipulation, l&rsquo;entreposage et l&rsquo;exp&eacute;dition des dosim&egrave;tres et des &eacute;chantillons en vue de pr&eacute;venir toute perte de sensibilit&eacute;, d&rsquo;information ou de pr&eacute;cision, ainsi que tout dommage ou perte totale. Elles devront en outre faire &eacute;tat de r&egrave;gles r&eacute;gissant la r&eacute;partition, l&rsquo;utilisation et la manipulation des dosim&egrave;tres de contr&ocirc;le et des &eacute;chantillons.</li>
<li>Les conclusions relatives aux doses attribu&eacute;es doivent &ecirc;tre suffisamment document&eacute;es pour que l&rsquo;on puisse se reporter aux donn&eacute;es initiales (donn&eacute;es d&rsquo;identification, mesures et mod&egrave;les utilis&eacute;s, par exemple) et d&eacute;montrer que les normes ont &eacute;t&eacute; respect&eacute;es.</li>
<li>La m&eacute;thode utilis&eacute;e pour transf&eacute;rer les donn&eacute;es sur les doses doit r&eacute;pondre aux exigences &eacute;nonc&eacute;es &agrave; l&rsquo;annexe I, &laquo; Normes relatives aux registres de doses &raquo;.</li>  </ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="7.9"></div>
<h3 id="sec7-9">7.9 Contr&ocirc;le des modifications</h3>  <ol>
<li>Les modifications apport&eacute;es aux processus, aux logiciels et &agrave; l&rsquo;&eacute;quipement de dosim&eacute;trie pour assurer des relev&eacute;s de doses ou d&rsquo;exposition exacts ainsi que celles apport&eacute;es aux dossiers de doses doivent faire l&rsquo;objet d&rsquo;un contr&ocirc;le par le service de dosim&eacute;trie.</li>
<li>Les modifications doivent &ecirc;tre assujetties aux m&ecirc;mes revues et approbations que les m&eacute;thodes de dosim&eacute;trie, les logiciels, l&rsquo;&eacute;quipement et les dossiers de doses originaux.</li>
<li>Les modifications propos&eacute;es doivent &ecirc;tre examin&eacute;es et approuv&eacute;es par des personnes qualifi&eacute;es avant d&rsquo;&ecirc;tre mises en &oelig;uvre.</li>
<li>Le service de dosim&eacute;trie doit conserver dans ses dossiers tous les documents relatifs aux modifications propos&eacute;es et mises en &oelig;uvre.</li>
<li>Les proc&eacute;dures doivent prescrire des normes afin de s&rsquo;assurer que les modifications apport&eacute;es aux registres de doses sont ad&eacute;quatement document&eacute;es.</li>
<li>Toute modification qui entra&icirc;ne une r&eacute;vision des proc&eacute;dures et directives approuv&eacute;es doit &ecirc;tre conforme aux dispositions de la section 7.11, &laquo; Contr&ocirc;le des documents &raquo;.</li>   </ol>  <p>Pour de plus amples renseignements sur la fa&ccedil;on de demander &agrave; la CCSN de modifier les dossiers de doses, REGDOC-2.7.2, tome I, <span lang="en"><em>Ascertaining Occupational Exposure</em></span>.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="7.10"></div>
<h3 id="sec7-10">7.10 Contr&ocirc;le des documents</h3>  <ol>
<li>Des proc&eacute;dures doivent &ecirc;tre &eacute;tablies pour r&eacute;gir l&rsquo;&eacute;laboration, l&rsquo;examen, l&rsquo;approbation, la diffusion, la distribution et la r&eacute;vision des documents et proc&eacute;dures. Ce principe vaudra tout particuli&egrave;rement dans le cas des documents et proc&eacute;dures qui contiennent des normes techniques ou qui font &eacute;tat d&rsquo;activit&eacute;s qui permettront d&rsquo;atteindre ou de v&eacute;rifier de telles normes. Au nombre des documents ou proc&eacute;dures de ce genre figurent tout aussi bien les sp&eacute;cifications techniques, les manuels de dosim&eacute;trie, les normes et proc&eacute;dures relatives aux dossiers de doses, les proc&eacute;dures d&rsquo;exploitation, les logiciels, les techniques d&rsquo;&eacute;talonnage et les m&eacute;thodes d&rsquo;analyse ainsi que les proc&eacute;dures du programme de syst&egrave;me de gestion.</li>
<li>Les documents doivent &ecirc;tre lisibles, accessibles et facilement rep&eacute;rables.</li>
<li>Tout document p&eacute;rim&eacute; doit &ecirc;tre retir&eacute; et, s&rsquo;il est conserv&eacute; aux fins de r&eacute;f&eacute;rence, il doit porter la mention &laquo; p&eacute;rim&eacute; &raquo;, bien en &eacute;vidence.</li>  </ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="7.11"></div>
<h3 id="sec7-11">7.11 &Eacute;talonnage et entretien</h3>  <ol>
<li>Les appareils, instruments ou &eacute;talons d&rsquo;enregistrement, de mesure, d&rsquo;essai, d&rsquo;analyse ou de comptage dont le bon fonctionnement est essentiel &agrave; l&rsquo;exactitude des mesures de dose doivent &ecirc;tre identifi&eacute;s, contr&ocirc;l&eacute;s et tenus en bon &eacute;tat.</li>
<li>Le type, la sensibilit&eacute; et l&rsquo;exactitude de ces appareils, instruments ou &eacute;talons doivent satisfaire aux normes minimales appropri&eacute;es &eacute;nonc&eacute;es dans les sections 2 &agrave; 6.</li>
<li>Les exigences en mati&egrave;re d&rsquo;&eacute;talonnage et d&rsquo;entretien p&eacute;riodiques doivent &ecirc;tre &eacute;tablies et document&eacute;es en fonction de l&rsquo;exactitude requise, du but, du degr&eacute; d&rsquo;utilisation, des caract&eacute;ristiques de stabilit&eacute; et des autres facteurs influant sur la mesure.</li>
<li>Les m&eacute;thodes d&rsquo;entretien et d&rsquo;&eacute;talonnage doivent &ecirc;tre document&eacute;es.</li>
<li>L&rsquo;&eacute;tat de l&rsquo;&eacute;talonnage doit &ecirc;tre enregistr&eacute; et mis &agrave; jour et le mat&eacute;riel &eacute;talonn&eacute; doit &ecirc;tre marqu&eacute; de fa&ccedil;on claire et ind&eacute;l&eacute;bile (avec des &eacute;tiquettes, par exemple). Si le mat&eacute;riel est &eacute;talonn&eacute; avant toute utilisation ou tr&egrave;s fr&eacute;quemment (tous les jours, par exemple), l&rsquo;enregistrement des &eacute;talonnages peut &ecirc;tre suffisant.</li>
<li>Les appareils non &eacute;talonn&eacute;s, impr&eacute;cis ou d&eacute;fectueux doivent &ecirc;tre identifi&eacute;s et retir&eacute;s.</li>
<li>L&rsquo;&eacute;quipement servant aux mesures qui a &eacute;t&eacute; r&eacute;par&eacute; ou modifi&eacute; doit &ecirc;tre &eacute;talonn&eacute; et l&rsquo;on doit v&eacute;rifier sa performance avant de le remettre en service.</li>
<li>Des m&eacute;canismes doivent &ecirc;tre mis en place pour assurer la tra&ccedil;abilit&eacute; des &eacute;talonnages aux &eacute;talons de r&eacute;f&eacute;rence nationaux (Conseil national de recherches du Canada (CNRC), National Institute of Standards and Technology (NIST), etc.). La tra&ccedil;abilit&eacute; de l&rsquo;&eacute;talonnage du mat&eacute;riel utilis&eacute; comme &eacute;talon de transfert, jusqu&rsquo;aux &eacute;talons nationaux, doit &eacute;galement &ecirc;tre assur&eacute;e. Lorsque des &eacute;talons de r&eacute;f&eacute;rence sont utilis&eacute;s comme &eacute;talons de transfert pour &eacute;tablir le niveau de r&eacute;f&eacute;rence en fonction duquel les donn&eacute;es sont mesur&eacute;es directement, des m&eacute;thodes devront &ecirc;tre &eacute;tablies pour pr&eacute;server l&rsquo;int&eacute;grit&eacute; du processus et des r&eacute;sultats.</li>
<li>Si l&rsquo;on constate que le mat&eacute;riel fournit des mesures inexactes (voir la section 7.14, &laquo; Non-conformit&eacute; &raquo;), la validit&eacute; des donn&eacute;es ou des r&eacute;sultats ant&eacute;rieurs doit &ecirc;tre v&eacute;rifi&eacute;e et des mesures correctives doivent &ecirc;tre prises (voir la section 7.15, &laquo; Mesures correctives &raquo;).</li>   </ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="7.12"></div>
<h3 id="sec7-12">7.12 V&eacute;rification</h3>  <ol>
<li>Les v&eacute;rifications des &eacute;tapes interm&eacute;diaire et finale du travail doivent &ecirc;tre d&eacute;finies, planifi&eacute;es, contr&ocirc;l&eacute;es, document&eacute;es et effectu&eacute;es conform&eacute;ment aux crit&egrave;res d&rsquo;acceptation et de performance &eacute;tablis; les ressources appropri&eacute;es doivent &ecirc;tre affect&eacute;es &agrave; ces v&eacute;rifications.</li>
<li>La v&eacute;rification doit &ecirc;tre effectu&eacute;e par des personnes comp&eacute;tentes autres que celles qui ont particip&eacute; au travail faisant l&rsquo;objet de la v&eacute;rification.</li>
<li>La m&eacute;thode, le moment et les r&eacute;sultats de la v&eacute;rification doivent &ecirc;tre enregistr&eacute;s, de m&ecirc;me que l&rsquo;identit&eacute; de la personne qui effectue la v&eacute;rification.</li>
<li>Des inspections, des contr&ocirc;les et des r&eacute;visions doivent &ecirc;tre d&eacute;finis et planifi&eacute;s pour s&rsquo;assurer que le travail est ex&eacute;cut&eacute; convenablement (voir section 7.9, points 1 &agrave; 4).</li>
<li>L&rsquo;exploitant du service de dosim&eacute;trie doit participer aux essais ind&eacute;pendants d&eacute;crits aux sections 2 &agrave; 6; les &eacute;carts seront trait&eacute;s selon les exigences &eacute;nonc&eacute;es aux sections 7.14, Non-conformit&eacute;, et 7.15, Mesures correctives.</li>  </ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="7.13"></div>
<h3 id="sec7-13">7.13 Non-conformit&eacute;</h3>  <ol>
<li>Les cas de non-conformit&eacute; touchant le mat&eacute;riel, les services et les activit&eacute;s doivent &ecirc;tre identifi&eacute;s, signal&eacute;s et document&eacute;s.</li>
<li>Les non-conformit&eacute;s doivent &ecirc;tre examin&eacute;es et des mesures correctives doivent &ecirc;tre identifi&eacute;es, ex&eacute;cut&eacute;es, v&eacute;rifi&eacute;es et consign&eacute;es. Les r&eacute;percussions de la non-conformit&eacute; sur le travail d&eacute;j&agrave; effectu&eacute; et les effets potentiels sur les doses attribu&eacute;es doivent &ecirc;tre &eacute;valu&eacute;s.</li>
<li>Le mat&eacute;riel ou les services non conformes doivent faire l&rsquo;objet d&rsquo;un suivi afin d&rsquo;emp&ecirc;cher toute utilisation non autoris&eacute;e.</li>
<li>Le service de dosim&eacute;trie doit &eacute;tablir les solutions de rechange qui seront mises en &oelig;uvre en cas de d&eacute;faillances ou d&rsquo;erreurs attribuables au mat&eacute;riel (ou &agrave; d&rsquo;autres &eacute;l&eacute;ments).</li>  </ol>  <p>Remarque : Les cas de non-conformit&eacute; peuvent &ecirc;tre attribuables, notamment, &agrave; des proc&eacute;dures inappropri&eacute;es, &agrave; des d&eacute;faillances ou &agrave; des impr&eacute;cisions du mat&eacute;riel, &agrave; des erreurs de calcul, &agrave; de fausses d&eacute;signations, &agrave; des donn&eacute;es initiales erron&eacute;es, &agrave; l&rsquo;utilisation de dosim&egrave;tres ou d&rsquo;&eacute;chantillons inappropri&eacute;s ou &agrave; une manipulation ou un traitement de l&rsquo;information qui laissent &agrave; d&eacute;sirer.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="7.14"></div>
<h3 id="sec7-14">7.14 Mesures correctives</h3>  <ol>
<li>On doit examiner les cas importants ou r&eacute;p&eacute;titifs de non-conformit&eacute; afin d&rsquo;en &eacute;tablir la cause sous-jacente et de d&eacute;finir les mesures correctives &agrave; prendre pour &eacute;viter que la situation ne se reproduise.</li>
<li>On doit signaler la cause et les mesures correctives prises &agrave; l&rsquo;&eacute;chelon de la direction appropri&eacute;, et effectuer un suivi pour v&eacute;rifier l&rsquo;efficacit&eacute; des mesures correctives.</li>  </ol>  <p>Remarque : Le cas de non-conformit&eacute; est important lorsqu&rsquo;il conduit, ou peut conduire, &agrave; une situation dans laquelle une surexposition n&rsquo;est pas d&eacute;cel&eacute;e, une personne se voit attribuer la mauvaise dose ou une dose est attribu&eacute;e &agrave; la mauvaise personne.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="7.15"></div>
<h3 id="sec7-15">7.15 Enregistrements</h3>  <ol>
<li>L&rsquo;&eacute;tiquetage, l&rsquo;entreposage, la protection, l&rsquo;extraction et l&rsquo;&eacute;limination des dossiers doivent &ecirc;tre contr&ocirc;l&eacute;s. Le mode de pr&eacute;sentation des enregistrements sera d&eacute;fini par le titulaire du permis.</li>
<li>Les dossiers doivent &ecirc;tre &eacute;tablis et conserv&eacute;s comme preuves que les activit&eacute;s pr&eacute;vues se sont convenablement d&eacute;roul&eacute;es, et que leurs r&eacute;sultats sont acceptables.</li>
<li>Des dossiers suffisants doivent &ecirc;tre conserv&eacute;s pour que l&rsquo;on soit en mesure d&rsquo;&eacute;tayer les conclusions finales et de d&eacute;montrer la tra&ccedil;abilit&eacute;.</li>
<li>Il faut &eacute;tablir une documentation et des enregistrements suffisants pendant le travail pour que l&rsquo;on puisse raisonnablement reproduire et v&eacute;rifier les r&eacute;sultats &agrave; partir des donn&eacute;es initiales mises en r&eacute;f&eacute;rence.</li>
<li>Une liste des dossiers portant sur les activit&eacute;s autoris&eacute;es doit &ecirc;tre conserv&eacute;e. La conservation et l&rsquo;ali&eacute;nation des dossiers doivent &ecirc;tre conformes aux exigences formul&eacute;es &agrave; l&rsquo;article 28 du <em>R&egrave;glement g&eacute;n&eacute;ral sur la s&ucirc;ret&eacute; et la r&eacute;glementation nucl&eacute;aires</em>.</li>
<li>Les dossiers doivent rester lisibles, ais&eacute;ment rep&eacute;rables et consultables sur demande.</li>
<li>Les dossiers doivent &ecirc;tre g&eacute;r&eacute;s de fa&ccedil;on s&ucirc;res afin d&rsquo;emp&ecirc;cher la divulgation de renseignements personnels, conform&eacute;ment &agrave; la l&eacute;gislation pertinente en vigueur.</li>  </ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="7.16"></div>
<h3 id="sec7-16">7.16 V&eacute;rifications</h3>  <ol>
<li>La direction doit se doter d&rsquo;un programme d&rsquo;audit interne. Le programme d&rsquo;audit interne a pour objet de permettre &agrave; la direction de d&eacute;terminer si le programme de syst&egrave;me de gestion est mis en &oelig;uvre de fa&ccedil;on efficace et si, gr&acirc;ce &agrave; ce programme, le service de dosim&eacute;trie fonctionne de fa&ccedil;on satisfaisante.</li>
<li>Le programme de syst&egrave;me de gestion dans son ensemble doit &ecirc;tre v&eacute;rifi&eacute; chaque ann&eacute;e.</li>
<li>Les audits internes doivent &ecirc;tre planifi&eacute;es et effectu&eacute;es par un personnel qualifi&eacute; n&rsquo;ayant aucune responsabilit&eacute; directe &agrave; l&rsquo;&eacute;gard de l&rsquo;activit&eacute; audit&eacute;e.</li>
<li>On doit documenter les r&eacute;sultats des audits et les faire examiner par le gestionnaire responsable de l&rsquo;activit&eacute; &eacute;valu&eacute;e. Cette personne doit prendre les mesures qui s&rsquo;imposent pour corriger les lacunes observ&eacute;es et leurs causes. Les mesures de suivi doivent &eacute;galement faire l&rsquo;objet d&rsquo;une &eacute;valuation (voir la section 6.15, &laquo; Mesures correctives &raquo;).</li>  </ol>  <p>Remarque : Pour de plus amples informations, voir la norme CAN/CSA-ISO 19011:03[5].</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appA"></div>
<h2 id="appA">Annexe A : Exactitude et incertitude en dosim&eacute;trie externe</h2>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appA-1"></div>
<h3 id="appA-1">A.1 Introduction</h3>  <p>La pr&eacute;sente annexe fournit des informations et des directives sur la fa&ccedil;on de d&eacute;montrer que les exigences en mati&egrave;re d&rsquo;exactitude et de pr&eacute;cision &eacute;nonc&eacute;es dans le pr&eacute;sent document d&rsquo;application de la r&eacute;glementation peuvent &ecirc;tre respect&eacute;es. Des exemples de calcul illustrent les m&eacute;thodes employ&eacute;es pour &eacute;valuer les diverses grandeurs, &agrave; la section A.4, &laquo; Exemples de calculs &raquo;.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appA-2"></div>
<h3 id="appA-2">A.2	Valeur conventionnellement vraie</h3>  <p>En principe, la dosim&eacute;trie individuelle vise &agrave; mesurer l&rsquo;&laquo; &eacute;quivalent de dose individuel &raquo; H<sub>p</sub>(d) tel que d&eacute;fini dans le rapport 47 [1] de la Commission internationale des unit&eacute;s et des mesures radiologiques (CIUMR). Les valeurs de &laquo; d &raquo; sont de 0,07 mm pour la dose superficielle (ou &laquo; &agrave; la peau &raquo;) et de 10 mm pour la dose profonde (ou &laquo; au corps entier &raquo;). Dans la pratique, on ne peut d&eacute;terminer la valeur &laquo; vraie &raquo; d&rsquo;une grandeur, comme il est expliqu&eacute; dans la publication de l&rsquo;Organisation internationale de normalisation (ISO) intitul&eacute;e <em>Guide pour l&rsquo;expression de l&rsquo;incertitude de mesure</em> [6]. On compare plut&ocirc;t le r&eacute;sultat d&rsquo;une mesure &agrave; la &laquo; valeur conventionnellement vraie &raquo; de la grandeur mesur&eacute;e afin d&rsquo;&eacute;valuer les erreurs de mesure.</p>   <p>M&ecirc;me s&rsquo;il &eacute;tait possible d&rsquo;effectuer une mesure de H<sub>p</sub>(d) parfaite, sa d&eacute;finition &eacute;tablirait des valeurs &laquo; vraies &raquo; attendues diff&eacute;rentes pour les personnes de taille et de morphologie diff&eacute;rentes qui sont expos&eacute;es &agrave; un m&ecirc;me champ de rayonnement photonique. Il ne s&rsquo;agit donc pas d&rsquo;une grandeur qui puisse &ecirc;tre utilis&eacute;e pour d&eacute;finir le fonctionnement et les propri&eacute;t&eacute;s d&rsquo;un dosim&egrave;tre. La mesure parfaite de H<sub>p</sub>(d) est donc remplac&eacute;e par une valeur conventionnellement vraie. Ainsi, dans le cas d&rsquo;un rayonnement photonique, pour &eacute;tablir la valeur conventionnellement vraie, on mesure le kerma de l&rsquo;air libre-dans-l&rsquo;air (ou l&rsquo;exposition) dans un champ bien d&eacute;fini &agrave; l&rsquo;aide d&rsquo;un instrument &eacute;talonn&eacute;, puis on applique un coefficient de conversion au r&eacute;sultat. Un mod&egrave;le informatique calcule le coefficient de conversion pour simuler l&rsquo;irradiation d&rsquo;un fant&ocirc;me type qui correspond, en gros, au torse humain. On suppose que la valeur conventionnellement vraie ainsi obtenue offre une incertitude n&eacute;gligeable par rapport &agrave; celle des relev&eacute;s dosim&eacute;triques habituels, et elle sert donc de valeur de r&eacute;f&eacute;rence pour l&rsquo;estimation des erreurs de mesure dans ces relev&eacute;s.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appA-3"></div>
<h3 id="appA-3">A.3	Exactitude et precision</h3>  <p>L&rsquo;information offerte dans la pr&eacute;sente section s&rsquo;appuie sur la m&eacute;thode &eacute;labor&eacute;e par C. R. Hirning et P. S. Yuen[7]. Les normes &eacute;nonc&eacute;es &agrave; la fin de cette section sont bas&eacute;es sur les recommandations &eacute;nonc&eacute;es dans les publications 60 [2] et 75 [8] de la Commission internationale de protection radiologique (CIPR) ainsi que sur l&rsquo;exigence de la CCSN en vertu de laquelle les services de dosim&eacute;trie externe doivent atteindre un rendement qui corresponde &agrave; celui que l&rsquo;on obtient en ayant recours au mat&eacute;riel et aux m&eacute;thodes d&rsquo;exploitation les plus r&eacute;cents.</p>  <p>Lorsqu&rsquo;on analyse l&rsquo;incertitude de la r&eacute;ponse d&rsquo;un dosim&egrave;tre, on doit commencer par d&eacute;cider du nombre N de grandeurs d&rsquo;influence dont il convient de tenir compte. Ces grandeurs d&rsquo;influence seront celles qui influent de mani&egrave;re importante sur la r&eacute;ponse du dosim&egrave;tre, telles que l&rsquo;&eacute;nergie, l&rsquo;angle d&rsquo;incidence, la temp&eacute;rature et l&rsquo;humidit&eacute;, entre autres. Chaque grandeur d&rsquo;influence devrait &ecirc;tre trait&eacute;e comme une variable statistique, repr&eacute;sent&eacute;e par :</p>
<p>&nbsp;&nbsp;<strong>X</strong><sub>i</sub>  <p>o&ugrave;</p>  <p><em>i</em> = 1, 2,...,N</p>  <p>Par exemple, x<sub>2</sub> repr&eacute;sente toutes les valeurs comprises entre une limite inf&eacute;rieure et une limite sup&eacute;rieure que la grandeur d&rsquo;influence num&eacute;ro 2 peut prendre.</p>
Ensuite, on doit regrouper les N grandeurs d&rsquo;influence en grandeurs d&rsquo;influence ind&eacute;pendantes individuelles, compos&eacute;es du premier type, compos&eacute;es du deuxi&egrave;me type ou compos&eacute;es du troisi&egrave;me type, afin que la r&eacute;ponse du dosim&egrave;tre devienne une fonction s&eacute;parable de ces grandeurs d&rsquo;influence ind&eacute;pendantes, que l&rsquo;on pourra exprimer sous la forme d&rsquo;un produit de r&eacute;ponses relatives. La fonction est s&eacute;parable si, pour chaque grandeur d&rsquo;influence ind&eacute;pendante regroup&eacute;e, la variation fractionnaire de la r&eacute;ponse relative globale dans des conditions autres que les conditions de r&eacute;f&eacute;rence (voir le glossaire) imputable &agrave; une variation de la grandeur d&rsquo;influence en question est ind&eacute;pendante des autres grandeurs d&rsquo;influence regroup&eacute;es [7].</p>
<h4>A.3.1 Types de grandeurs d&rsquo;influence</h4>  <p>Une <em>grandeur d&rsquo;influence ind&eacute;pendante individuelle</em>, <em>x<sub>q</sub></em> consiste en une seule grandeur d&rsquo;influence, de telle sorte que la r&eacute;ponse relative globale puisse effectivement &ecirc;tre repr&eacute;sent&eacute;e par une fonction s&eacute;parable. La lin&eacute;arit&eacute; de la dose d&rsquo;un dosim&egrave;tre thermoluminiscent (DTL) est un exemple de grandeur d&rsquo;influence ind&eacute;pendante individuelle. Dans cet exemple, la r&eacute;ponse du DTL tend &agrave; augmenter lorsque la dose absorb&eacute;e dans le dosim&egrave;tre augmente pour atteindre une valeur &eacute;lev&eacute;e de plusieurs grays. L&rsquo;accroissement de la r&eacute;ponse du dosim&egrave;tre ne d&eacute;pend pas de la source de photons (&eacute;nergie photonique) &agrave; l&rsquo;origine de la dose absorb&eacute;e ni de quelque autre grandeur d&rsquo;influence.</p>   <p>Une <em>grandeur d&rsquo;influence compos&eacute;e</em> est constitu&eacute;e d&rsquo;un sous-ensemble des N grandeurs d&rsquo;influence. Comme dans le cas d&rsquo;une grandeur d&rsquo;influence ind&eacute;pendante individuelle, la variation fractionnaire dans la r&eacute;ponse relative globale d&eacute;pend seulement de cette grandeur d&rsquo;influence ind&eacute;pendante compos&eacute;e.</p>
<p>Sous la forme d&rsquo;une fonction de <em>x<sub>i</sub></em> et <em>x<sub>j</sub></em> est non s&eacute;parable et donc, sous forme discr&egrave;te, cette r&eacute;ponse consiste en une matrice dont les &eacute;l&eacute;ments sont lin&eacute;airement ind&eacute;pendants les uns des autres. Cependant, la probabilit&eacute; d&rsquo;occurrence <em>p<sub>ij</sub></em> peut &ecirc;tre s&eacute;parable en fonctions de probabilit&eacute; ind&eacute;pendantes <em>p<sub>i</sub></em> et <em>p<sub>j</sub></em>. La combinaison de l&rsquo;&eacute;nergie photonique et de l&rsquo;angle d&rsquo;incidence (&laquo; &eacute;nergie-angle &raquo; ou &laquo; <em>E-&theta;</em> &raquo;) constitue un exemple de grandeur d&rsquo;influence compos&eacute;e du premier type. L&rsquo;&eacute;nergie-angle est une grandeur d&rsquo;influence compos&eacute;e du premier type parce que la r&eacute;ponse relative du dosim&egrave;tre d&eacute;pend &agrave; la fois de l&rsquo;&eacute;nergie et de l&rsquo;angle et parce qu&rsquo;elle n&rsquo;est pas s&eacute;parable. D&egrave;s lors, la r&eacute;ponse relative, sous forme discr&egrave;te, doit &ecirc;tre exprim&eacute;e sous la forme d&rsquo;une matrice bidimensionnelle <em>r<sub>E&theta;</sub></em>  dont les &eacute;l&eacute;ments sont lin&eacute;airement ind&eacute;pendants les uns des autres. Par contre, la fonction de probabilit&eacute; d&rsquo;occurrence est s&eacute;parable en deux fonctions de probabilit&eacute; ind&eacute;pendantes <em>p<sub>E</sub></em> et <em>p<sub>&theta;</sub></em> puisqu&rsquo;il n&rsquo;y a pas de corr&eacute;lation entre l&rsquo;&eacute;nergie et l&rsquo;angle.</p>   <p>Une <em>grandeur d&rsquo;influence compos&eacute;e du deuxi&egrave;me type</em> est constitu&eacute;e des grandeurs d&rsquo;influence <em>x<sub>k</sub></em> et <em>x<sub>l</sub></em>. La r&eacute;ponse relative du dosim&egrave;tre est repr&eacute;sent&eacute;e par une fonction s&eacute;parable et, donc, sous forme discr&egrave;te, elle consiste en deux vecteurs ind&eacute;pendants (par opposition &agrave; une matrice), chaque vecteur d&eacute;pendant de seulement une grandeur d&rsquo;influence, <em>x<sub>k</sub></em> ou <em>x<sub>l</sub></em>. Cependant, la fonction de probabilit&eacute; d&rsquo;occurrence <em>p<sub>kl</sub></em> n&rsquo;est pas s&eacute;parable. La combinaison de l&rsquo;humidit&eacute; et de la temp&eacute;rature (<em>H-T</em>) constitue un exemple de grandeur d&rsquo;influence compos&eacute;e de deuxi&egrave;me type. La r&eacute;ponse relative du dosim&egrave;tre est s&eacute;parable en deux fonctions de r&eacute;ponse relative ind&eacute;pendantes <em>r<sub>H</sub></em> et <em>r<sub>T</sub></em> parce que la variation fractionnaire de la r&eacute;ponse relative imputable &agrave; une variation de l&rsquo;une quelconque des grandeurs d&rsquo;influence est ind&eacute;pendante de l&rsquo;autre grandeur. Par contre, la fonction de probabilit&eacute; d&rsquo;occurrence n&rsquo;est pas s&eacute;parable parce que l&rsquo;humidit&eacute; relative d&eacute;pend de la temp&eacute;rature. Sous forme discr&egrave;te, cette fonction est repr&eacute;sent&eacute;e par une matrice <em>p<sub>HT</sub></em>.</p>   <p>Une <em>grandeur d&rsquo;influence compos&eacute;e du troisi&egrave;me type</em> est constitu&eacute;e des grandeurs d&rsquo;influence <em>x<sub>u</sub></em> et <em>x<sub>v</sub></em> de telle sorte que ni la r&eacute;ponse relative <em>r<sub>uv</sub></em> ni la fonction de probabilit&eacute; d&rsquo;occurrence puv ne sont s&eacute;parables. D&egrave;s lors, sous forme discr&egrave;te, aussi bien la r&eacute;ponse relative <em>r<sub>uv</sub></em> que la probabilit&eacute; d&rsquo;occurrence <em>p<sub>uv</sub></em> consistent en une matrice bidimensionnelle dont les &eacute;l&eacute;ments sont lin&eacute;airement ind&eacute;pendants les uns des autres. Aucun exemple n&rsquo;est pr&eacute;sent&eacute; ici, car il est tr&egrave;s rare de rencontrer une telle grandeur d&rsquo;influence compos&eacute;e en dosim&eacute;trie externe.</p>
<h4>A.3.2 R&eacute;ponse du dosim&egrave;tre</h4>  <p>On d&eacute;finit la r&eacute;ponse d&rsquo;un dosim&egrave;tre, <em>R</em>, comme le r&eacute;sultat d&rsquo;une mesure effectu&eacute;e dans des conditions d&eacute;finies, <em>H<sub>m</sub></em>, divis&eacute; par la valeur conventionnellement vraie de la dose qui serait re&ccedil;ue dans les m&ecirc;mes conditions, <em>H<sub>c</sub></em> : </p>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<mi>R</mi><mo>=</mo><mfrac>
<mrow>
<msub>
<mi>H</mi>
<mi>m</mi>
</msub>
</mrow>
<mrow>
<msub>
<mi>H</mi>
<mi>c</mi>
</msub>
</mrow>
</mfrac>
</mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaamOuaiabg2
da9maalaaabaGaamisamaaBaaaleaacaWGTbaabeaaaOqaaiaadIea
daWgaaWcbaGaam4yaaqabaaaaaaa@3BB9@
</annotation>   </semantics>  </math>
<p>La r&eacute;ponse moyenne, <span style="text-decoration: overline;"><em>R</em></span>, d&rsquo;un dosim&egrave;tre dans les conditions voulues d&rsquo;utilisation peut &ecirc;tre exprim&eacute;e sous la forme d&rsquo;une fonction s&eacute;parable, repr&eacute;sent&eacute;e par le produit suivant [7] : </p>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<mover accent=&#39;true&#39;>
<mi>R</mi>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mo>=</mo><msubsup>
<mi>R</mi>
<mn>0</mn>
<mrow></mrow>
</msubsup>
<mover accent=&#39;true&#39;>
<mrow>
<msubsup>
<mi>r</mi>
<mn>1</mn>
<mrow></mrow>
</msubsup>
</mrow>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mover accent=&#39;true&#39;>
<mrow>
<msubsup>
<mi>r</mi>
<mn>2</mn>
<mrow></mrow>
</msubsup>
</mrow>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mn>...</mn><mover accent=&#39;true&#39;>
<mrow>
<msubsup>
<mi>r</mi>
<mi>q</mi>
<mrow></mrow>
</msubsup>
</mrow>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mn>...</mn><mover accent=&#39;true&#39;>
<mrow>
<msubsup>
<mi>r</mi>
<mrow>
<mi>i</mi><mi>j</mi></mrow>
<mrow></mrow>
</msubsup>
</mrow>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mn>...</mn><mover accent=&#39;true&#39;>
<mrow>
<msubsup>
<mi>r</mi>
<mi>k</mi>
<mrow></mrow>
</msubsup>
<msubsup>
<mi>r</mi>
<mi>l</mi>
<mrow></mrow>
</msubsup>
</mrow>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mn>...</mn><mover accent=&#39;true&#39;>
<mover accent=&#39;true&#39;>
<mrow>
<msubsup>
<mi>r</mi>
<mrow>
<mi>u</mi><mi>v</mi></mrow>
<mrow></mrow>
</msubsup>
</mrow>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mn>...</mn><mover accent=&#39;true&#39;>
<mrow>
<msubsup>
<mi>r</mi>
<mi>N</mi>
<mrow></mrow>
</msubsup>
</mrow>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
</mrow>   <annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=   feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn   hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr   4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9   vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x   fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaWaa0aaaeaaca   WGsbaaaiabg2da9iaadkfadaqhaaWcbaGaaGimaaqaaaaakmaanaaa   baGaamOCamaaDaaaleaacaaIXaaabaaaaaaakmaanaaabaGaamOCam   aaDaaaleaacaaIYaaabaaaaaaakiaac6cacaGGUaGaaiOlamaanaaa   baGaamOCamaaDaaaleaacaWGXbaabaaaaaaakiaac6cacaGGUaGaai   OlamaanaaabaGaamOCamaaDaaaleaacaWGPbGaamOAaaqaaaaaaaGc   caGGUaGaaiOlaiaac6cadaqdaaqaaiaadkhadaqhaaWcbaGaam4Aaa   qaaaaakiaadkhadaqhaaWcbaGaamiBaaqaaaaaaaGccaGGUaGaaiOl   aiaac6cadaqdbaqaaiaadkhadaqhaaWcbaGaamyDaiaadAhaaeaaaa   aaaOGaaiOlaiaac6cacaGGUaWaa0aaaeaacaWGYbWaa0baaSqaaiaa   d6eaaeaaaaaaaaaa@56EB@   </annotation>  </semantics>  </math>
<p>o&ugrave;</p>
<table className="">  <tr>
<td><span style="font-size: medium;"><em>R<sub>0</sub></em></span></td>
<td>=</td>
<td>r&eacute;ponse de r&eacute;f&eacute;rence du dosim&egrave;tre, obtenue lorsque les grandeurs d&rsquo;influence sont maintenues aux valeurs correspondant aux conditions de r&eacute;f&eacute;rence (normalement, les conditions dans lesquelles le dosim&egrave;tre est &eacute;talonn&eacute;). La r&eacute;ponse relative globale est d&eacute;finie comme &eacute;tant &eacute;gale au rapport <em>R/R<sub>0</sub></em>. On d&eacute;finit la r&eacute;ponse relative <em>r<sub>q</sub></em> applicable &agrave; une grandeur d&rsquo;influence ind&eacute;pendante <em>q</em>, sont maintenues aux valeurs correspondant aux conditions de r&eacute;f&eacute;rence;</td>  </tr>  <tr>
<td><span style="font-size: medium;"><em>N</em></span></td>
<td>=</td>
<td>nombre de grandeurs d&rsquo;influence qui peuvent influer sur la r&eacute;ponse (si deux grandeurs d&rsquo;influence ou plus ne sont pas ind&eacute;pendantes, on peut les combiner en une grandeur d&rsquo;influence compos&eacute;e ind&eacute;pendante des autres grandeurs d&rsquo;influence)</td>  </tr>  <tr>
<td><span style="font-size: medium;"><span style="text-decoration: overline;"><em>r<sub>q</sub></em></span></span></td>
<td>=</td>
<td>r&eacute;ponse relative moyenne d&eacute;coulant de variations dans les valeurs <em>x<sub>q</sub></em> que peut atteindre la q grandeur d&rsquo;influence ind&eacute;pendante;</td>  </tr>  <tr>
<td><span style="font-size: medium;"><span style="text-decoration: overline;"><em>r<sub>ij</sub></em></span></span></td>
<td>=</td>
<td>r&eacute;ponse relative moyenne d&eacute;coulant de variations dans les valeurs <em>x<sub>i</sub></em> et <em>x<sub>j</sub></em> que peuvent atteindre les i<sup>i&egrave;me</sup> et j<sup>i&egrave;me</sup> grandeurs d&rsquo;influence constituant une grandeur d&rsquo;influence compos&eacute;e ind&eacute;pendante du premier type introduite lorsque la r&eacute;ponse relative correspondant &agrave; cette grandeur d&rsquo;influence compos&eacute;e ind&eacute;pendante <em>r<sub>ij</sub></em> ne peut pas &ecirc;tre s&eacute;par&eacute;e en r&eacute;ponses relatives ind&eacute;pendantes <em>r<sub>i</sub></em> et <em>r<sub>j</sub></em>, alors que la fonction de probabilit&eacute; d&rsquo;occurrence <em>p<sub>ij</sub></em> est s&eacute;parable et exprim&eacute;e par <em>p<sub>i</sub></em> et <em>p<sub>j</sub></em>, qui sont ind&eacute;pendantes l&rsquo;une de l&rsquo;autre;</td>  </tr>  <tr>
<td><span style="font-size: medium;"><span style="text-decoration: overline;"><em>r<sub>k</sub>r<sub>l</sub></em></span></span></td>
<td>=</td>
<td>r&eacute;ponse relative moyenne d&eacute;coulant de variations dans les valeurs <em>x<sub>k</sub></em> et <em>x<sub>l</sub></em> que peuvent atteindre les k<sup>i&egrave;me</sup> et l<sup>i&egrave;me</sup> grandeurs d&rsquo;influence constituant une grandeur d&rsquo;influence compos&eacute;e ind&eacute;pendante du deuxi&egrave;me type introduite lorsque la r&eacute;ponse relative correspondant &agrave; cette grandeur d&rsquo;influence ind&eacute;pendante compos&eacute;e <em>r<sub>kl</sub></em> peut &ecirc;tre s&eacute;par&eacute;e en r&eacute;ponses relatives ind&eacute;pendantes <em>r<sub>k</sub></em> et <em>r<sub>l</sub></em>, alors que la fonction de probabilit&eacute; d&rsquo;occurrence <em>p<sub>ij</sub></em>  n&rsquo;est pas s&eacute;parable en fonctions de probabilit&eacute; ind&eacute;pendantes <em>p<sub>i</sub></em> et <em>p<sub>j</sub></em>; et</td>  </tr>  <tr>
<td><span style="font-size: medium;"><math display=&#39;block&#39;>   <semantics>
<mrow>
<mover accent=&#39;true&#39;>
<mover accent=&#39;true&#39;>
<mrow>
<msubsup>
<mi>r</mi>
<mrow>
<mi>u</mi><mi>v</mi></mrow>
<mrow></mrow>
</msubsup>
</mrow>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
</mrow>   <annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=   feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn   hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr   4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9   vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x   fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaWaa0qaaeaaca   WGYbWaa0baaSqaaiaadwhacaWG2baabaaaaaaaaaa@3921@   </annotation>  </semantics>  </math>  </td>
<td>=</td>
<td>r&eacute;ponse relative moyenne d&eacute;coulant de variations dans les valeurs xu et xv que peuvent atteindre les u<sup>i&egrave;me</sup> et v<sup>i&egrave;me</sup> grandeurs d&rsquo;influence constituant une grandeur d&rsquo;influence compos&eacute;e ind&eacute;pendante du troisi&egrave;me type introduite lorsque ni la r&eacute;ponse relative ni la probabilit&eacute; d&rsquo;occurrence correspondant &agrave; <em>r<sub>uv</sub></em> <em>p<sub>uv</sub></em> cette grandeur d&rsquo;influence compos&eacute;e ind&eacute;pendante ne peuvent &ecirc;tre s&eacute;par&eacute;es en r&eacute;ponses relative individuelles <em>r<sub>u</sub></em> et ou en <em>r<sub>v</sub></em> probabilit&eacute;s d&rsquo;occurrence ind&eacute;pendantes pu et <em>p<sub>v</sub></em>.</td>
</tr>  </table>
<p>Si l&rsquo;on conna&icirc;t l&rsquo;effet des variations d&rsquo;une grandeur d&rsquo;influence sur la r&eacute;ponse relative du dosim&egrave;tre et que l&rsquo;on peut mesurer ou estimer la distribution de probabilit&eacute; de cette grandeur, la r&eacute;ponse relative moyenne attribuable &agrave; cette grandeur d&rsquo;influence peut se calculer &agrave; l&rsquo;aide des techniques statistiques usuelles, comme il est indiqu&eacute; ci-dessous.</p>   <p>Dans le cas d&rsquo;une grandeur d&rsquo;influence ind&eacute;pendante <em>q</em>, la r&eacute;ponse relative moyenne dans l&rsquo;&eacute;quation (2) est &eacute;gale &agrave; :</p>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<mover accent=&#39;true&#39;>
<mrow>
<msub>
<mi>r</mi>
<mi>q</mi>
</msub>
</mrow>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mo>=</mo><mstyle displaystyle=&#39;true&#39;>
<munderover>
<mo>&#x2211;</mo>
<mrow>
<mi>s</mi><mo>=</mo><mn>1</mn></mrow>
<mrow>
<msub>
<mi>M</mi>
<mi>q</mi>
</msub>
</mrow>
</munderover>
<mrow>
<msub>
<mi>r</mi>
<mrow>
<mi>q</mi><mo>,</mo><mi>s</mi></mrow>
</msub>
<msub>
<mi>p</mi>
<mrow>
<mi>q</mi><mo>,</mo><mi>s</mi></mrow>
</msub>
</mrow>
</mstyle></mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbiqaaqXbdaqdaa
qaaiaadkhadaWgaaWcbaGaamyCaaqabaaaaOGaeyypa0ZaaabCaeaa
caWGYbWaaSbaaSqaaiaadghacaGGSaGaam4CaaqabaGccaWGWbWaaS
baaSqaaiaadghacaGGSaGaam4CaaqabaaabaGaam4Caiabg2da9iaa
igdaaeaacaWGnbWaaSbaaWqaaiaadghaaeqaaaqdcqGHris5aaaa@47BD@
</annotation>   </semantics>  </math>
<p>o&ugrave;</p>
<ul className="list-bullet-none">
<li><em>M<sub>q</sub></em> = nombre de r&eacute;ponses relatives mesur&eacute;es pour la <em>q<sup>i&egrave;me</sup></em> grandeur d&rsquo;influence;</li>
<li><em>r<sub>q,s</sub></em> = <em>s<sup>i&egrave;me</sup></em> de <em>M<sub>q</sub></em> r&eacute;ponses relatives mesur&eacute;es correspondant au <em>s<sup>i&egrave;me</sup></em> intervalle dans <em>x<sub>q</sub></em>;</li>
<li><em>p<sub>q,s</sub></em> = probabilit&eacute; que <em>x<sub>q</sub></em> prenne une valeur comprise dans le <em>s<sup>i&egrave;me</sup></em> intervalle.</li>
</ul>
<p>Dans le cas d&rsquo;une grandeur d&rsquo;influence compos&eacute;e du premier type, la r&eacute;ponse relative moyenne est &eacute;gale &agrave; :</p>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<mover accent=&#39;true&#39;>
<mrow>
<msub>
<mi>r</mi>
<mrow>
<mi>i</mi><mi>j</mi></mrow>
</msub>
</mrow>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mo>=</mo><mstyle displaystyle=&#39;true&#39;>
<munderover>
<mo>&#x2211;</mo>
<mrow>
<mi>s</mi><mo>=</mo><mn>1</mn></mrow>
<mrow>
<msub>
<mi>M</mi>
<mi>i</mi>
</msub>
</mrow>
</munderover>
<mrow></mrow>
</mstyle><mstyle displaystyle=&#39;true&#39;>
<munderover>
<mo>&#x2211;</mo>
<mrow>
<mi>t</mi><mo>=</mo><mn>1</mn></mrow>
<mrow>
<mi>M</mi><mi>j</mi></mrow>
</munderover>
<mrow>
<msub>
<mi>r</mi>
<mrow>
<mi>i</mi><mi>j</mi><mo>,</mo><mi>s</mi><mo>,</mo><mi>t</mi></mrow>
</msub>
<msub>
<mi>p</mi>
<mrow>
<mi>i</mi><mo>,</mo><mi>s</mi></mrow>
</msub>
</mrow>
</mstyle><msub>
<mi>p</mi>
<mrow>
<mi>j</mi><mo>,</mo><mi>t</mi></mrow>
</msub>
</mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbiqaaqXbdaqdaa
qaaiaadkhadaWgaaWcbaGaamyAaiaadQgaaeqaaaaakiabg2da9maa
qahabaaaleaacaWGZbGaeyypa0JaaGymaaqaaiaad2eadaWgaaadba
GaamyAaaqabaaaniabggHiLdGcdaaeWbqaaiaadkhadaWgaaWcbaGa
amyAaiaadQgacaGGSaGaam4CaiaacYcacaWG0baabeaakiaadchada
WgaaWcbaGaamyAaiaacYcacaWGZbaabeaaaeaacaWG0bGaeyypa0Ja
aGymaaqaaiaad2eacaWGQbaaniabggHiLdGccaWGWbWaaSbaaSqaai
aadQgacaGGSaGaamiDaaqabaaaaa@55AE@
</annotation>   </semantics>  </math>
<p>o&ugrave;</p>
<ul className="list-bullet-none">
<li><em>r<sub>ij,s,t</sub></em> = matrice r&eacute;ponse qui d&eacute;pend des <em>i<sup>i&egrave;me</sup></em> et <em>j<sup>i&egrave;me</sup></em> grandeurs d&rsquo;influence, et <em>p<sub>i,s</sub></em> et <em>p<sub>j,t</sub></em> sont des vecteurs probabilit&eacute; d&rsquo;occurrence qui sont ind&eacute;pendants l&rsquo;un de l&rsquo;autre. </li>
</ul>
<p>Dans le cas d&rsquo;une grandeur d&rsquo;influence compos&eacute;e du deuxi&egrave;me type, la r&eacute;ponse relative moyenne est &eacute;gale &agrave; :</p>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<msub>
<mrow>
<mover accent=&#39;true&#39;>
<mrow>
<msub>
<mi>r</mi>
<mi>k</mi>
</msub>
<mi>r</mi></mrow>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
</mrow>
<mi>l</mi>
</msub>
<mo>=</mo><mstyle displaystyle=&#39;true&#39;>
<munderover>
<mo>&#x2211;</mo>
<mrow>
<mi>s</mi><mo>=</mo><mn>1</mn></mrow>
<mrow>
<msub>
<mi>M</mi>
<mi>k</mi>
</msub>
</mrow>
</munderover>
<mrow></mrow>
</mstyle><mstyle displaystyle=&#39;true&#39;>
<munderover>
<mo>&#x2211;</mo>
<mrow>
<mi>t</mi><mo>=</mo><mn>1</mn></mrow>
<mrow>
<mi>M</mi><mi>l</mi></mrow>
</munderover>
<mrow>
<msub>
<mi>r</mi>
<mrow>
<mi>k</mi><mo>,</mo><mi>s</mi></mrow>
</msub>
<msub>
<mi>r</mi>
<mrow>
<mi>l</mi><mo>,</mo><mi>t</mi></mrow>
</msub>
</mrow>
</mstyle><msub>
<mi>p</mi>
<mrow>
<mi>k</mi><mi>l</mi><mo>,</mo><mi>s</mi><mo>,</mo><mi>t</mi></mrow>
</msub>
</mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbiqaaqXbdaqdaa
qaaiaadkhadaWgaaWcbaGaam4AaaqabaGccaWGYbaaamaaBaaaleaa
caWGSbaabeaakiabg2da9maaqahabaaaleaacaWGZbGaeyypa0JaaG
ymaaqaaiaad2eadaWgaaadbaGaamyAaaqabaaaniabggHiLdGcdaae
WbqaaiaadkhadaWgaaWcbaGaam4AaiaacYcacaWGZbaabeaakiaadk
hadaWgaaWcbaGaamyAaiaacYcacaWG0baabeaaaeaacaWG0bGaeyyp
a0JaaGymaaqaaiaad2eacaWGQbaaniabggHiLdGccaWGWbWaaSbaaS
qaaiaadUgacaWGSbGaaiilaiaadohacaGGSaGaamiDaaqabaaaaa@56E6@
</annotation>   </semantics>  </math>
<p>o&ugrave;</p>
<ul className="list-bullet-none">
<li><em>p<sub>kl,s,t</sub></em> = matrice probabilit&eacute; d&rsquo;occurrence qui d&eacute;pend des <em>k<sup>i&egrave;me</sup></em> et <em>l<sup>i&egrave;me</sup></em> grandeurs d&rsquo;influence, et <em>r<sub>k,s</sub></em> et <em>r<sub>l,t</sub></em> sont des vecteurs r&eacute;ponse relative qui sont ind&eacute;pendants l&rsquo;un de l&rsquo;autre. </li>
</ul>  <p>Dans le cas d&rsquo;une grandeur d&rsquo;influence compos&eacute;e du troisi&egrave;me type, la r&eacute;ponse relative moyenne est &eacute;gale &agrave; : </p>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<mover accent=&#39;true&#39;>
<mover accent=&#39;true&#39;>
<mrow>
<msub>
<mi>r</mi>
<mrow>
<mi>u</mi><mi>v</mi></mrow>
</msub>
</mrow>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mo>=</mo><mstyle displaystyle=&#39;true&#39;>
<munderover>
<mo>&#x2211;</mo>
<mrow>
<mi>s</mi><mo>=</mo><mn>1</mn></mrow>
<mrow>
<mi>M</mi><mi>u</mi></mrow>
</munderover>
<mrow></mrow>
</mstyle><mstyle displaystyle=&#39;true&#39;>
<munderover>
<mo>&#x2211;</mo>
<mrow>
<mi>t</mi><mo>=</mo><mn>1</mn></mrow>
<mrow>
<mi>M</mi><mi>v</mi></mrow>
</munderover>
<mrow>
<msub>
<mi>r</mi>
<mrow>
<mi>u</mi><mi>v</mi><mo>,</mo><mi>s</mi><mo>,</mo><mi>t</mi></mrow>
</msub>
</mrow>
</mstyle><msub>
<mi>p</mi>
<mrow>
<mi>u</mi><mi>v</mi><mo>,</mo><mi>s</mi><mo>,</mo><mi>t</mi></mrow>
</msub>
</mrow>   <annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=   feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn   hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr   4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9   vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x   fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbiqaaqXbdaqdba   qaaiaadkhadaWgaaWcbaGaamyDaiaadAhaaeqaaaaakiabg2da9maa   qahabaaaleaacaWGZbGaeyypa0JaaGymaaqaaiaad2eacaWG1baani   abggHiLdGcdaaeWbqaaiaadkhadaWgaaWcbaGaamyDaiaadAhacaGG   SaGaam4CaiaacYcacaWG0baabeaaaeaacaWG0bGaeyypa0JaaGymaa   qaaiaad2eacaWG2baaniabggHiLdGccaWGWbWaaSbaaSqaaiaadwha   caWG2bGaaiilaiaadohacaGGSaGaamiDaaqabaaaaa@54B7@   </annotation>  </semantics>  </math>
<p>o&ugrave;</p>
<ul className="list-bullet-none">
<li><em>r<sub>uv,s,t</sub></em> and <em>p<sub>uv,s,t</sub></em> = matrices r&eacute;ponse relative et probabilit&eacute; d&rsquo;occurrence, respectivement, qui d&eacute;pendent toutes les deux des grandeurs d&rsquo;influence <em>u</em> et <em>v</em>. </li>
</ul>  <p>Les probabilit&eacute;s sont normalis&eacute;es de telle sorte que : </p>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<mstyle displaystyle=&#39;true&#39;>
<munderover>
<mo>&#x2211;</mo>
<mrow>
<mi>s</mi><mo>=</mo><mn>1</mn></mrow>
<mrow>
<msub>
<mi>M</mi>
<mi>i</mi>
</msub>
</mrow>
</munderover>
<mrow>
<msub>
<mi>p</mi>
<mrow>
<mi>i</mi><mo>,</mo><mi>s</mi></mrow>
</msub>
<mo>=</mo><mn>1</mn></mrow>
</mstyle><mi>&#x0020;</mi><mi>&#x0020;</mi><mi>&#x0020;</mi><mspace width="50px" /><mtext>et</mtext><mspace width="50px" /><mi>&#x0020;</mi><mi>&#x0020;</mi><mi>&#x0020;</mi><mstyle displaystyle=&#39;true&#39;>
<munderover>
<mo>&#x2211;</mo>
<mrow>
<mi>t</mi><mo>=</mo><mn>1</mn></mrow>
<mrow>
<mi>M</mi><mi>j</mi></mrow>
</munderover>
<mrow>
<msub>
<mi>p</mi>
<mrow>
<mi>j</mi><mo>,</mo><mi>t</mi></mrow>
</msub>
<mo>=</mo><mn>1</mn></mrow>
</mstyle></mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaWaaabCaeaaca
WGWbWaaSbaaSqaaiaadMgacaGGSaGaam4CaaqabaGccqGH9aqpcaaI
XaaaleaacaWGZbGaeyypa0JaaGymaaqaaiaad2eadaWgaaadbaGaam
yAaaqabaaaniabggHiLdqefqvyO9wBHbacfiGccaWFGaGaa8hiaiaa
=bcacaqGHbGaaeOBaiaabsgacaWFGaGaa8hiaiaa=bcadaaeWbqaai
aadchadaWgaaWcbaGaamOAaiaacYcacaWG0baabeaakiabg2da9iaa
igdaaSqaaiaadshacqGH9aqpcaaIXaaabaGaamytaiaadQgaa0Gaey
yeIuoaaaa@57AC@
</annotation>   </semantics>  </math>
<p>et</p>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<mstyle displaystyle=&#39;true&#39;>
<munderover>
<mo>&#x2211;</mo>
<mrow>
<mi>s</mi><mo>=</mo><mn>1</mn></mrow>
<mrow>
<msub>
<mi>M</mi>
<mi>k</mi>
</msub>
</mrow>
</munderover>
<mrow></mrow>
</mstyle><mstyle displaystyle=&#39;true&#39;>
<munderover>
<mo>&#x2211;</mo>
<mrow>
<mi>t</mi><mo>=</mo><mn>1</mn></mrow>
<mrow>
<msub>
<mi>M</mi>
<mi>l</mi>
</msub>
</mrow>
</munderover>
<mrow>
<msub>
<mi>p</mi>
<mrow>
<mi>k</mi><mi>l</mi><mo>,</mo><mi>s</mi><mo>,</mo><mi>t</mi></mrow>
</msub>
</mrow>
</mstyle><mo>=</mo><mn>1</mn><mspace width="50px" /><mi>&#x0020;</mi><mi>&#x0020;</mi><mi>&#x0020;</mi><mi>&#x0020;</mi><mi>&#x0020;</mi><mi>&#x0020;</mi><mtext>et</mtext><mspace width="50px" /><mi>&#x0020;</mi><mi>&#x0020;</mi><mi>&#x0020;</mi><mi>&#x0020;</mi><mi>&#x0020;</mi><mi>&#x0020;</mi><mstyle displaystyle=&#39;true&#39;>
<munderover>
<mo>&#x2211;</mo>
<mrow>
<mi>s</mi><mo>=</mo><mn>1</mn></mrow>
<mrow>
<msub>
<mi>M</mi>
<mi>u</mi>
</msub>
</mrow>
</munderover>
<mrow></mrow>
</mstyle><mstyle displaystyle=&#39;true&#39;>
<munderover>
<mo>&#x2211;</mo>
<mrow>
<mi>t</mi><mo>=</mo><mn>1</mn></mrow>
<mrow>
<msub>
<mi>M</mi>
<mi>v</mi>
</msub>
</mrow>
</munderover>
<mrow>
<msub>
<mi>p</mi>
<mrow>
<mi>u</mi><mi>v</mi><mo>,</mo><mi>s</mi><mo>,</mo><mi>t</mi></mrow>
</msub>
</mrow>
</mstyle><mo>=</mo><mn>1</mn></mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaWaaabCaeaaaS
qaaiaadohacqGH9aqpcaaIXaaabaGaamytamaaBaaameaacaWGRbaa
beaaa0GaeyyeIuoakmaaqahabaGaamiCamaaBaaaleaacaWGRbGaam
iBaiaacYcacaWGZbGaaiilaiaadshaaeqaaaqaaiaadshacqGH9aqp
caaIXaaabaGaamytamaaBaaameaacaWGSbaabeaaa0GaeyyeIuoaki
abg2da9iaaigdaiiGacqWFGaaicqWFGaaicqWFGaaicqWFGaaicqWF
GaaicqWFGaaicaqGHbGaaeOBaiaabsgaruavHH2BTfgaiuGacaGFGa
Gaa4hiaiaa+bcacaGFGaGaa4hiaiaa+bcadaaeWbqaaaWcbaGaam4C
aiabg2da9iaaigdaaeaacaWGnbWaaSbaaWqaaiaadwhaaeqaaaqdcq
GHris5aOWaaabCaeaacaWGWbWaaSbaaSqaaiaadwhacaWG2bGaaiil
aiaadohacaGGSaGaamiDaaqabaaabaGaamiDaiabg2da9iaaigdaae
aacaWGnbWaaSbaaWqaaiaadAhaaeqaaaqdcqGHris5aOGaeyypa0Ja
aGymaaaa@6FA9@
</annotation>   </semantics>  </math>
<p>Dans le cas particulier o&ugrave; toutes les valeurs de <em>x<sub>i</sub></em> comprises dans l&rsquo;intervalle des valeurs possibles [<em>x<sub>i</sub><sup>min</sup></em>, <em>x<sub>i</sub><sup>max</sup></em>] sont &eacute;galement probables, la probabilit&eacute; est exactement &eacute;gale &agrave; la largeur de l&rsquo;intervalle  <em>&Delta;x<sub>i,s</sub></em> divis&eacute;e par la largeur de l&rsquo;intervalle :</p>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<msub>
<mi>p</mi>
<mrow>
<mi>i</mi><mo>,</mo><mi>s</mi></mrow>
</msub>
<mo>=</mo><mfrac>
<mrow>
<mi>&#x0394;</mi><msub>
<mi>x</mi>
<mrow>
<mi>i</mi><mo>,</mo><mi>s</mi></mrow>
</msub>
</mrow>
<mrow>
<msubsup>
<mi>x</mi>
<mi>i</mi>
<mrow>
<mi>max</mi></mrow>
</msubsup>
<mo>&#x2212;</mo><msubsup>
<mi>x</mi>
<mi>i</mi>
<mrow>
<mi>min</mi></mrow>
</msubsup>
</mrow>
</mfrac>
</mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaamiCamaaBa
aaleaacaWGPbGaaiilaiaadohaaeqaaOGaeyypa0ZaaSaaaeaacqqH
uoarcaWG4bWaaSbaaSqaaiaadMgacaGGSaGaam4Caaqabaaakeaaca
WG4bWaa0baaSqaaiaadMgaaeaaciGGTbGaaiyyaiaacIhaaaGccqGH
sislcaWG4bWaa0baaSqaaiaadMgaaeaaciGGTbGaaiyAaiaac6gaaa
aaaaaa@4AC9@
</annotation>   </semantics>  </math>
<p>On peut &eacute;galement estimer les probabilit&eacute;s de cette fa&ccedil;on lorsqu&rsquo;on ne dispose pas de donn&eacute;es sur les probabilit&eacute;s r&eacute;elles.</p>   <p>La variance u<sup>2</sup> des r&eacute;ponses mesur&eacute;es par rapport &agrave; la r&eacute;ponse moyenne peut aussi &ecirc;tre calcul&eacute;e &agrave; l&rsquo;aide des techniques statistiques usuelles; sa racine carr&eacute;e positive donne l&rsquo;incertitude type de la r&eacute;ponse du dosim&egrave;tre, <em>u</em>. L&rsquo;expression g&eacute;n&eacute;rale de la variance de la r&eacute;ponse est alors la suivante :</p>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<msup>
<mi>u</mi>
<mn>2</mn>
</msup>
<mo>=</mo><msubsup>
<mi>R</mi>
<mn>0</mn>
<mn>2</mn>
</msubsup>
<mover accent=&#39;true&#39;>
<mrow>
<msubsup>
<mi>r</mi>
<mn>1</mn>
<mn>2</mn>
</msubsup>
</mrow>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mover accent=&#39;true&#39;>
<mrow>
<msubsup>
<mi>r</mi>
<mn>2</mn>
<mn>2</mn>
</msubsup>
</mrow>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mn>...</mn><mover accent=&#39;true&#39;>
<mrow>
<msubsup>
<mi>r</mi>
<mi>q</mi>
<mn>2</mn>
</msubsup>
</mrow>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mn>...</mn><mover accent=&#39;true&#39;>
<mrow>
<msubsup>
<mi>r</mi>
<mrow>
<mi>i</mi><mi>j</mi></mrow>
<mn>2</mn>
</msubsup>
</mrow>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mn>...</mn><mover accent=&#39;true&#39;>
<mrow>
<msubsup>
<mi>r</mi>
<mi>k</mi>
<mn>2</mn>
</msubsup>
<msubsup>
<mi>r</mi>
<mi>l</mi>
<mn>2</mn>
</msubsup>
</mrow>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mn>...</mn><mover accent=&#39;true&#39;>
<mover accent=&#39;true&#39;>
<mrow>
<msubsup>
<mi>r</mi>
<mrow>
<mi>u</mi><mi>v</mi></mrow>
<mn>2</mn>
</msubsup>
</mrow>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mn>...</mn><mover accent=&#39;true&#39;>
<mrow>
<msubsup>
<mi>r</mi>
<mi>N</mi>
<mn>2</mn>
</msubsup>
</mrow>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mo>&#x2212;</mo><msup>
<mrow>
<mo stretchy=&#39;false&#39;>(</mo><mover accent=&#39;true&#39;>
<mi>R</mi>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mo stretchy=&#39;false&#39;>)</mo></mrow>
<mn>2</mn>
</msup>
</mrow>   <annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=   feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn   hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr   4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9   vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x   fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaamyDamaaCa   aaleqabaGaaGOmaaaakiabg2da9iaadkfadaqhaaWcbaGaaGimaaqa   aiaaikdaaaGcdaqdaaqaaiaadkhadaqhaaWcbaGaaGymaaqaaiaaik   daaaaaaOWaa0aaaeaacaWGYbWaa0baaSqaaiaaikdaaeaacaaIYaaa   aaaakiaac6cacaGGUaGaaiOlamaanaaabaGaamOCamaaDaaaleaaca   WGXbaabaGaaGOmaaaaaaGccaGGUaGaaiOlaiaac6cadaqdaaqaaiaa   dkhadaqhaaWcbaGaamyAaiaadQgaaeaacaaIYaaaaaaakiaac6caca   GGUaGaaiOlamaanaaabaGaamOCamaaDaaaleaacaWGRbaabaGaaGOm   aaaakiaadkhadaqhaaWcbaGaamiBaaqaaiaaikdaaaaaaOGaaiOlai   aac6cacaGGUaWaa0qaaeaacaWGYbWaa0baaSqaaiaadwhacaWG2baa   baGaaGOmaaaaaaGccaGGUaGaaiOlaiaac6cadaqdaaqaaiaadkhada   qhaaWcbaGaamOtaaqaaiaaikdaaaaaaOGaeyOeI0Iaaiikamaanaaa   baGaamOuaaaacaGGPaWaaWbaaSqabeaacaaIYaaaaaaa@62AD@   </annotation>  </semantics>  </math>
<p>Dans cette &eacute;quation, les facteurs li&eacute;s aux r&eacute;ponses relatives qui d&eacute;pendent des grandeurs d&rsquo;influence individuelles sont donn&eacute;s par l&rsquo;&eacute;quation suivante :</p>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<mover accent=&#39;true&#39;>
<mrow>
<msubsup>
<mi>r</mi>
<mi>q</mi>
<mn>2</mn>
</msubsup>
</mrow>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mo>=</mo><mi>&#x0020;</mi><mstyle displaystyle=&#39;true&#39;>
<munderover>
<mo>&#x2211;</mo>
<mrow>
<mi>s</mi><mo>=</mo><mn>1</mn></mrow>
<mrow>
<mi>M</mi><mi>q</mi></mrow>
</munderover>
<mrow>
<msubsup>
<mi>r</mi>
<mrow>
<mi>q</mi><mo>,</mo><mi>s</mi></mrow>
<mn>2</mn>
</msubsup>
<msub>
<mi>p</mi>
<mrow>
<mi>q</mi><mo>,</mo><mi>s</mi></mrow>
</msub>
</mrow>
</mstyle></mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaWaa0aaaeaaca
WGYbWaa0baaSqaaiaadghaaeaacaaIYaaaaaaakiabg2da9erbufgA
V1wyaGqbciaa=bcadaaeWbqaaiaadkhadaqhaaWcbaGaamyCaiaacY
cacaWGZbaabaGaaGOmaaaakiaadchadaWgaaWcbaGaamyCaiaacYca
caWGZbaabeaakiabg2da9iaaigdaaSqaaiaadohacqGH9aqpcaaIXa
aabaGaamytaiaadghaa0GaeyyeIuoaaaa@4DE2@
</annotation>   </semantics>  </math>
<p>Les termes de l&rsquo;&eacute;quation (8) qui font intervenir des grandeurs d&rsquo;influence compos&eacute;es du premier type deviennent alors :</p>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<mover accent=&#39;true&#39;>
<mrow>
<msubsup>
<mi>r</mi>
<mrow>
<mi>i</mi><mi>j</mi></mrow>
<mn>2</mn>
</msubsup>
</mrow>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mo>=</mo><mstyle displaystyle=&#39;true&#39;>
<munderover>
<mo>&#x2211;</mo>
<mrow>
<mi>s</mi><mo>=</mo><mn>1</mn></mrow>
<mrow>
<msub>
<mi>M</mi>
<mi>i</mi>
</msub>
</mrow>
</munderover>
<mrow></mrow>
</mstyle><mstyle displaystyle=&#39;true&#39;>
<munderover>
<mo>&#x2211;</mo>
<mrow>
<mi>t</mi><mo>=</mo><mn>1</mn></mrow>
<mrow>
<mi>M</mi><mi>j</mi></mrow>
</munderover>
<mrow>
<msubsup>
<mi>r</mi>
<mrow>
<mi>i</mi><mi>j</mi><mo>,</mo><mi>s</mi><mo>,</mo><mi>t</mi></mrow>
<mn>2</mn>
</msubsup>
<msub>
<mi>p</mi>
<mrow>
<mi>i</mi><mo>,</mo><mi>s</mi></mrow>
</msub>
</mrow>
</mstyle><msub>
<mi>p</mi>
<mrow>
<mi>j</mi><mo>,</mo><mi>t</mi></mrow>
</msub>
</mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbiqaaqXbdaqdaa
qaaiaadkhadaqhaaWcbaGaamyAaiaadQgaaeaacaaIYaaaaaaakiab
g2da9maaqahabaaaleaacaWGZbGaeyypa0JaaGymaaqaaiaad2eada
WgaaadbaGaamyAaaqabaaaniabggHiLdGcdaaeWbqaaiaadkhadaqh
aaWcbaGaamyAaiaadQgacaGGSaGaam4CaiaacYcacaWG0baabaGaaG
OmaaaakiaadchadaWgaaWcbaGaamyAaiaacYcacaWGZbaabeaaaeaa
caWG0bGaeyypa0JaaGymaaqaaiaad2eacaWGQbaaniabggHiLdGcca
WGWbWaaSbaaSqaaiaadQgacaGGSaGaamiDaaqabaaaaa@5728@
</annotation>   </semantics>  </math>
<p>De m&ecirc;me, le terme de l&rsquo;&eacute;quation (8) correspondant &agrave; la grandeur d&rsquo;influence compos&eacute;e du deuxi&egrave;me type est &eacute;gal &agrave; :</p>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<mover accent=&#39;true&#39;>
<mrow>
<msubsup>
<mi>r</mi>
<mi>k</mi>
<mn>2</mn>
</msubsup>
</mrow>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mover accent=&#39;true&#39;>
<mrow>
<msubsup>
<mi>r</mi>
<mi>l</mi>
<mn>2</mn>
</msubsup>
</mrow>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mo>=</mo><mstyle displaystyle=&#39;true&#39;>
<munderover>
<mo>&#x2211;</mo>
<mrow>
<mi>s</mi><mo>=</mo><mn>1</mn></mrow>
<mrow>
<msub>
<mi>M</mi>
<mi>k</mi>
</msub>
</mrow>
</munderover>
<mrow></mrow>
</mstyle><mstyle displaystyle=&#39;true&#39;>
<munderover>
<mo>&#x2211;</mo>
<mrow>
<mi>t</mi><mo>=</mo><mn>1</mn></mrow>
<mrow>
<mi>M</mi><mi>l</mi></mrow>
</munderover>
<mrow>
<msubsup>
<mi>r</mi>
<mrow>
<mi>k</mi><mo>,</mo><mi>s</mi></mrow>
<mn>2</mn>
</msubsup>
<msubsup>
<mi>r</mi>
<mrow>
<mi>l</mi><mo>,</mo><mi>t</mi></mrow>
<mn>2</mn>
</msubsup>
</mrow>
</mstyle><msub>
<mi>p</mi>
<mrow>
<mi>k</mi><mi>l</mi><mo>,</mo><mi>s</mi><mo>,</mo><mi>t</mi></mrow>
</msub>
</mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbiqaaqXbdaqdaa
qaaiaadkhadaqhaaWcbaGaam4AaaqaaiaaikdaaaaaaOWaa0aaaeaa
caWGYbWaa0baaSqaaiaadUgaaeaacaaIYaaaaaaakiabg2da9maaqa
habaaaleaacaWGZbGaeyypa0JaaGymaaqaaiaad2eadaWgaaadbaGa
amyAaaqabaaaniabggHiLdGcdaaeWbqaaiaadkhadaqhaaWcbaGaam
4AaiaacYcacaWGZbaabaGaaGOmaaaakiaadkhadaqhaaWcbaGaamiB
aiaacYcacaWG0baabaGaaGOmaaaaaeaacaWG0bGaeyypa0JaaGymaa
qaaiaad2eacaWGQbaaniabggHiLdGccaWGWbWaaSbaaSqaaiaadUga
caWGSbGaaiilaiaadohacaGGSaGaamiDaaqabaaaaa@59ED@
</annotation>   </semantics>  </math>
<p>et le terme de l&rsquo;&eacute;quation (8) correspondant &agrave; la grandeur d&rsquo;influence compos&eacute;e du troisi&egrave;me type est &eacute;gal &agrave;:</p>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<mover accent=&#39;true&#39;>
<mover accent=&#39;true&#39;>
<mrow>
<msubsup>
<mi>r</mi>
<mrow>
<mi>u</mi><mi>v</mi></mrow>
<mn>2</mn>
</msubsup>
</mrow>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mo>=</mo><mstyle displaystyle=&#39;true&#39;>
<munderover>
<mo>&#x2211;</mo>
<mrow>
<mi>s</mi><mo>=</mo><mn>1</mn></mrow>
<mrow>
<mi>M</mi><mi>u</mi></mrow>
</munderover>
<mrow></mrow>
</mstyle><mstyle displaystyle=&#39;true&#39;>
<munderover>
<mo>&#x2211;</mo>
<mrow>
<mi>t</mi><mo>=</mo><mn>1</mn></mrow>
<mrow>
<mi>M</mi><mi>v</mi></mrow>
</munderover>
<mrow>
<msubsup>
<mi>r</mi>
<mrow>
<mi>u</mi><mi>v</mi><mo>,</mo><mi>s</mi><mo>,</mo><mi>t</mi></mrow>
<mn>2</mn>
</msubsup>
</mrow>
</mstyle><msub>
<mi>p</mi>
<mrow>
<mi>u</mi><mi>v</mi><mo>,</mo><mi>s</mi><mo>,</mo><mi>t</mi></mrow>
</msub>
</mrow>   <annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=   feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn   hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr   4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9   vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x   fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbiqaaqXbdaqdba   qaaiaadkhadaqhaaWcbaGaamyDaiaadAhaaeaacaaIYaaaaaaakiab   g2da9maaqahabaaaleaacaWGZbGaeyypa0JaaGymaaqaaiaad2eaca   WG1baaniabggHiLdGcdaaeWbqaaiaadkhadaqhaaWcbaGaamyDaiaa   dAhacaGGSaGaam4CaiaacYcacaWG0baabaGaaGOmaaaaaeaacaWG0b   Gaeyypa0JaaGymaaqaaiaad2eacaWG2baaniabggHiLdGccaWGWbWa   aSbaaSqaaiaadwhacaWG2bGaaiilaiaadohacaGGSaGaamiDaaqaba   aaaa@5631@   </annotation>  </semantics>  </math>
<p>Outre l&rsquo;incertitude type de la r&eacute;ponse, il existe une incertitude relative statistique, <em>u<sub>s</sub></em>, imputable aux erreurs al&eacute;atoires du proc&eacute;d&eacute; de mesure. On d&eacute;termine la grandeur de cette incertitude par une &eacute;valuation du type A [6]. L&rsquo;incertitude type globale d&rsquo;un m&ecirc;me relev&eacute; dosim&eacute;trique est alors la suivante :</p>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<msub>
<mi>u</mi>
<mi>c</mi>
</msub>
<mo>=</mo><mover accent=&#39;true&#39;>
<mi>R</mi>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<msqrt>
<mrow>
<msup>
<mrow>
<mrow><mo>(</mo>
<mrow>
<mfrac>
<mi>u</mi>
<mrow>
<mover accent=&#39;true&#39;>
<mi>R</mi>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
</mrow>
</mfrac>
</mrow>
<mo>)</mo></mrow></mrow>
<mn>3</mn>
</msup>
<mo>+</mo><msubsup>
<mi>u</mi>
<mi>s</mi>
<mn>2</mn>
</msubsup>
</mrow>
</msqrt>
</mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaamyDamaaBa
aaleaacaWGJbaabeaakiabg2da9maanaaabaGaamOuaaaadaGcaaqa
amaabmaabaWaaSaaaeaacaWG1baabaWaa0aaaeaacaWGsbaaaaaaai
aawIcacaGLPaaadaahaaWcbeqaaiaaiodaaaGccqGHRaWkcaWG1bWa
a0baaSqaaiaadohaaeaacaaIYaaaaaqabaaaaa@4238@
</annotation>   </semantics>  </math>
<p>Selon ces</p>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<mfrac>
<mn>1</mn>
<mi>&#x03C1;</mi>
</mfrac>
<mo>&#x2264;</mo><mover accent=&#39;true&#39;>
<mi>R</mi>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mo>&#x00B1;</mo><mn>2</mn><msub>
<mi>u</mi>
<mi>c</mi>
</msub>
<mo>&#x2264;</mo><mi>&#x03C1;</mi></mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaWaaSaaaeaaca
aIXaaabaGaeqyWdihaaiabgsMiJoaanaaabaGaamOuaaaacqGHXcqS
caaIYaGaamyDamaaBaaaleaacaWGJbaabeaakiabgsMiJkabeg8aYb
aa@4355@
</annotation>   </semantics>  </math>
<p>O&ugrave;</p>  <p>   <ul className="list-bullet-none">
<li>&rho; = 1,5 pour d = 10 mm aet 4 mSv &lt; H<sub>p,c</sub>(10) &lt; 10 Sv;</li>
<li>&nbsp;&nbsp;&nbsp;= 2 pour d = 10 mm et H<sub>p,c</sub>(10) = 0,4 mSv;</li>
<li>&nbsp;&nbsp;&nbsp;= 1.5 pour d = 0,07 mm et 100 mSv &lt; H<sub>p,c</sub>(0.07) &lt; 10 Sv;</li>
<li>&nbsp;&nbsp;&nbsp;= 2 pour d = 0,07 mm et H<sub>p,c</sub>(0,07) = 10 mSv;</li>
<li>&nbsp;&nbsp;&nbsp;= 3 pour 100 mSv &lt; H<sub>e,c</sub> &lt; 10 Sv; et</li>
<li>&nbsp;&nbsp;&nbsp;= 3 pour H<sub>e,c</sub> = 10 mSv.</li>   </ul>
<p>L&rsquo;incertitude type globale uc est multipli&eacute;e par un facteur de couverture de 2 pour d&eacute;gager un intervalle d&rsquo;incertitude des mesures individuelles de <em>R</em> correspondant &agrave; un niveau de confiance d&rsquo;environ 95 %. La section A.4, &laquo; Exemples de calculs &raquo; offre un exemple pratique du calcul d&eacute;crit ci-dessus. </p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appA-4"></div>
<h3 id="appA-4">A.4 Exemples de calculs</h3>  <p> La pr&eacute;sente section donne des exemples de calcul de la r&eacute;ponse moyenne et de l&rsquo;incertitude type globale &agrave; partir de donn&eacute;es hypoth&eacute;tiques. Pour simplifier, on suppose que seulement cinq grandeurs d&rsquo;influence ont un effet important sur la r&eacute;ponse du dosim&egrave;tre et seuls les champs photoniques sont examin&eacute;s. Les cinq grandeurs d&rsquo;influence sont les suivantes : &eacute;nergie photonique, angle d&rsquo;incidence des photons, humidit&eacute; relative, temp&eacute;rature et dose (lin&eacute;arit&eacute; de la dose dans le dosim&egrave;tre). Les cinq grandeurs d&rsquo;influence sont regroup&eacute;es comme suit : une grandeur d&rsquo;influence individuelle (dose); une grandeur d&rsquo;influence compos&eacute;e du premier type (&eacute;nergie-angle) et une grandeur d&rsquo;influence compos&eacute;e du deuxi&egrave;me type (humidit&eacute;-temp&eacute;rature). On suppose que le dosim&egrave;tre sera utilis&eacute; dans une centrale nucl&eacute;aire.</p>
<h4>A.4.1 &Eacute;nergie photonique et angle d&rsquo;incidence</h4>  <p>La premi&egrave;re &eacute;tape consiste &agrave; mesurer la r&eacute;ponse relative pour des gammes d&rsquo;&eacute;nergies et d&rsquo;angles repr&eacute;sentatives des gammes auxquelles on peut s&rsquo;attendre dans la centrale. Les autres grandeurs d&rsquo;influence demeurent constantes et &eacute;gales aux valeurs de r&eacute;f&eacute;rence. Les r&eacute;sultats sont pr&eacute;sent&eacute;s sous la forme d&rsquo;une matrice <em>r<sub>ij</sub></em> ou <em>r<sub>E&theta;</sub></em> , comme le montre le tableau A.1.</p>
<table className="">  <caption className="text-left">Tableau A.1 : R&eacute;ponse relative mesur&eacute;e (hypoth&eacute;tique) <em>r<sub>E&theta;,s,t</sub></em> en fonction de l&rsquo;&eacute;nergie photonique et de l&rsquo;angle d&rsquo;incidence &ndash; Conditions de r&eacute;f&eacute;rence : rayonnement gamma &eacute;mis par le <sup>137</sup>Cs &agrave; z&eacute;ro degr&eacute;</caption>  <tr>
<th className="text-center text-center" rowspan="4" colSpan="2">&Eacute;nergie (<em>E</em>)</th>
<th className="text-center" colSpan="5">Angle (&theta;)</th>  </tr>  <tr>
<th className="text-center" colSpan="5">Indice, <em>t</em></th>  </tr>  <tr>
<th className="text-center">1</th>
<th className="text-center">2</th>
<th className="text-center">3</th>
<th className="text-center">4</th>
<th className="text-center">5</th>  </tr>  <tr>
<th className="text-center" colSpan="5">Valeur (degr&eacute;s)</th>  </tr>  <tr>
<th className="text-center">Indice, s</th>
<th className="text-center">Valeur (keV)</th>
<th className="text-center">0</th>
<th className="text-center">20</th>
<th className="text-center">40</th>
<th className="text-center">60</th>
<th className="text-center">80</th>  </tr>  <tr>
<td className="text-center">1</td>
<td className="text-center">33</td>
<td className="text-center">0,85</td>
<td className="text-center">0,84</td>
<td className="text-center">0,82</td>
<td className="text-center">0,80</td>
<td className="text-center">0,75</td>  </tr>  <tr>
<td className="text-center">2</td>
<td className="text-center">48</td>
<td className="text-center">0,97</td>
<td className="text-center">0,97</td>
<td className="text-center">0,96</td>
<td className="text-center">0,94</td>
<td className="text-center">0,89</td>  </tr>  <tr>
<td className="text-center">3</td>
<td className="text-center">65</td>
<td className="text-center">1,08</td>
<td className="text-center">1,08</td>
<td className="text-center">1,07</td>
<td className="text-center">1,05</td>
<td className="text-center">1,00</td>  </tr>  <tr>
<td className="text-center">4</td>
<td className="text-center">83</td>
<td className="text-center">1,16</td>
<td className="text-center">1,16</td>
<td className="text-center">1,15</td>
<td className="text-center">1,13</td>
<td className="text-center">1,09</td>  </tr>  <tr>
<td className="text-center">5</td>
<td className="text-center">100</td>
<td className="text-center">1,14</td>
<td className="text-center">1,14</td>
<td className="text-center">1,13</td>
<td className="text-center">1,12</td>
<td className="text-center">1,08</td>  </tr>  <tr>
<td className="text-center">6</td>
<td className="text-center">118</td>
<td className="text-center">1,10</td>
<td className="text-center">1,10</td>
<td className="text-center">1,10</td>
<td className="text-center">1,09</td>
<td className="text-center">1,05</td>  </tr>  <tr>
<td className="text-center">7</td>
<td className="text-center">164</td>
<td className="text-center">1,08</td>
<td className="text-center">1,08</td>
<td className="text-center">1,08</td>
<td className="text-center">1,07</td>
<td className="text-center">1,03</td>  </tr>  <tr>
<td className="text-center">8</td>
<td className="text-center">208</td>
<td className="text-center">1,05</td>
<td className="text-center">1,05</td>
<td className="text-center">1,05</td>
<td className="text-center">1,04</td>
<td className="text-center">1,00</td>  </tr>  <tr>
<td className="text-center">9</td>
<td className="text-center">250</td>
<td className="text-center">102</td>
<td className="text-center">1,02</td>
<td className="text-center">1,02</td>
<td className="text-center">1,01</td>
<td className="text-center">0,98</td>  </tr>  <tr>
<td className="text-center">10</td>
<td className="text-center">662</td>
<td className="text-center">1,00</td>
<td className="text-center">1,00</td>
<td className="text-center">1,00</td>
<td className="text-center">0,99</td>
<td className="text-center">0,96</td>  </tr>  <tr>
<td className="text-center">11</td>
<td className="text-center">1 250</td>
<td className="text-center">0,95</td>
<td className="text-center">0,95</td>
<td className="text-center">0,95</td>
<td className="text-center">0,94</td>
<td className="text-center">0,92</td>  </tr>  </table>
<p>Ensuite, on d&eacute;finit les intervalles d&rsquo;&eacute;nergie et d&rsquo;angle correspondant &agrave; chaque point de mesure et on &eacute;value la probabilit&eacute; d&rsquo;exposition dans chaque intervalle. Les r&eacute;sultats sont pr&eacute;sent&eacute;s dans les tableaux A.2 et A.3. Il est possible que l&rsquo;&eacute;nergie et l&rsquo;angle d&rsquo;incidence soient en corr&eacute;lation en un point particulier.</p>
<table className="">  <caption className="text-left">Tableau A.2 : Intervalles d&rsquo;&eacute;nergie et probabilit&eacute; estim&eacute;e <em>p<sub>E,s</sub></em> de recevoir une dose dans chaque intervalle </caption>  <tr>
<th className="text-center">Indice, s</th>
<th className="text-center">E (keV)</th>
<th className="text-center">Intervalle (keV)</th>
<th className="text-center">Probabilit&eacute;, <em>p<sub>E,s</sub></em></th>  </tr>  <tr>
<td className="text-center">1</td>
<td className="text-center">33</td>
<td className="text-center">0-40</td>
<td className="text-center">0,01</td>  </tr>  <tr>
<td className="text-center">2</td>
<td className="text-center">48</td>
<td className="text-center">41-55</td>
<td className="text-center">0,01</td>  </tr>  <tr>
<td className="text-center">3</td>
<td className="text-center">65</td>
<td className="text-center">56-74</td>
<td className="text-center">0,03</td>  </tr>  <tr>
<td className="text-center">4</td>
<td className="text-center">83</td>
<td className="text-center">75-91</td>
<td className="text-center">0,05</td>  </tr>  <tr>
<td className="text-center">5</td>
<td className="text-center">100</td>
<td className="text-center">92-109</td>
<td className="text-center">0,05</td>  </tr>  <tr>
<td className="text-center">6</td>
<td className="text-center">118</td>
<td className="text-center">110-141</td>
<td className="text-center">0,05</td>  </tr>  <tr>
<td className="text-center">7</td>
<td className="text-center">164</td>
<td className="text-center">142-186</td>
<td className="text-center">0,05</td>  </tr>  <tr>
<td className="text-center">8</td>
<td className="text-center">208</td>
<td className="text-center">187-229</td>
<td className="text-center">0,05</td>  </tr>  <tr>
<td className="text-center">9</td>
<td className="text-center">250</td>
<td className="text-center">230-450</td>
<td className="text-center">0,25</td>  </tr>  <tr>
<td className="text-center">10</td>
<td className="text-center">662</td>
<td className="text-center">451-950</td>
<td className="text-center">0,30</td>  </tr>  <tr>
<td className="text-center">11</td>
<td className="text-center">1 250</td>
<td className="text-center">951-1500</td>
<td className="text-center">0,15</td>  </tr>  <tr>
<td className="text-right" colSpan="3">Somme&nbsp;&nbsp;</td>
<td className="text-center">1,00</td>  </tr>  </table>  <br />
<table className="">  <caption className="text-left">Tableau A.3 : Intervalles d&rsquo;angle d&rsquo;incidence et probabilit&eacute; estim&eacute;e <em>p<sub>&theta;,t</sub></em> de recevoir une dose dans chaque intervalle</caption>  <tr>
<th className="text-center">Indice, s</th>
<th className="text-center">&theta; (degr&eacute;s)</th>
<th className="text-center">Intervalle (degr&eacute;s)</th>
<th className="text-center">Probabilit&eacute;, <em>p<sub>&theta;,s</sub></em></th>  </tr>  <tr>
<td className="text-center">1</td>
<td className="text-center">0</td>
<td className="text-center">0-10</td>
<td className="text-center">0,20</td>  </tr>  <tr>
<td className="text-center">2</td>
<td className="text-center">20</td>
<td className="text-center">11-30</td>
<td className="text-center">0,30</td>  </tr>  <tr>
<td className="text-center">3</td>
<td className="text-center">40</td>
<td className="text-center">31-50</td>
<td className="text-center">0,30</td>  </tr>  <tr>
<td className="text-center">4</td>
<td className="text-center">60</td>
<td className="text-center">51-70</td>
<td className="text-center">0,10</td>  </tr>  <tr>
<td className="text-center">5</td>
<td className="text-center">80</td>
<td className="text-center">71-90</td>
<td className="text-center">0,10</td>  </tr>  <tr>
<td className="mrgn-bttm-xl text-right" colSpan="3">Somme&nbsp;&nbsp;</td>
<td className="text-center">1,00</td>  </tr>  </table>
<p>La r&eacute;ponse relative moyenne pour la gamme des &eacute;nergies-angles consid&eacute;r&eacute;e est donn&eacute;e par l&rsquo;&eacute;quation (4); elle peut &ecirc;tre calcul&eacute;e &agrave; partir des r&eacute;ponses relatives indiqu&eacute;es dans le tableau A.1 et des distributions de probabilit&eacute; donn&eacute;es dans les tableaux A.2 et A.3, en utilisant la multiplication matrice. Les &eacute;quations mentionn&eacute;es dans la pr&eacute;sente section sont explicit&eacute;es dans la section A.3 de la pr&eacute;sente annexe. Si l&rsquo;on remplace <em>i</em> par <em>E</em>, <em>j</em> par <em>&theta;</em>, <em>M<sub>i</sub></em> par 11 et <em>M<sub>j</sub></em> par 5, l&rsquo;&eacute;quation (4) devient : </p>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<mover accent=&#39;true&#39;>
<mrow>
<msubsup>
<mi>r</mi>
<mrow>
<mi>E</mi><mi>&#x03B8;</mi></mrow>
<mrow></mrow>
</msubsup>
</mrow>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mo>=</mo><mstyle displaystyle=&#39;true&#39;>
<munderover>
<mo>&#x2211;</mo>
<mrow>
<mi>s</mi><mo>=</mo><mn>1</mn></mrow>
<mrow>
<mi>s</mi><mo>=</mo><mn>11</mn></mrow>
</munderover>
<mrow></mrow>
</mstyle><mstyle displaystyle=&#39;true&#39;>
<munderover>
<mo>&#x2211;</mo>
<mrow>
<mi>t</mi><mo>=</mo><mn>1</mn></mrow>
<mrow>
<mi>t</mi><mo>=</mo><mn>5</mn></mrow>
</munderover>
<mrow>
<msubsup>
<mi>r</mi>
<mrow>
<mi>E</mi><mi>&#x03B8;</mi><mo>,</mo><mi>s</mi><mo>,</mo><mi>t</mi></mrow>
<mrow></mrow>
</msubsup>
<msub>
<mi>p</mi>
<mrow>
<mi>E</mi><mo>,</mo><mi>s</mi></mrow>
</msub>
</mrow>
</mstyle><msub>
<mi>p</mi>
<mrow>
<mi>&#x03B8;</mi><mo>,</mo><mi>t</mi></mrow>
</msub>
</mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbiqaaqXbdaqdaa
qaaiaadkhadaqhaaWcbaGaamyraiabeI7aXbqaaaaaaaGccqGH9aqp
daaeWbqaaaWcbaGaam4Caiabg2da9iaaigdaaeaacaWGZbGaeyypa0
JaaGymaiaaigdaa0GaeyyeIuoakmaaqahabaGaamOCamaaDaaaleaa
caWGfbGaeqiUdeNaaiilaiaadohacaGGSaGaamiDaaqaaaaakiaadc
hadaWgaaWcbaGaamyraiaacYcacaWGZbaabeaaaeaacaWG0bGaeyyp
a0JaaGymaaqaaiaadshacqGH9aqpcaaI1aaaniabggHiLdGccaWGWb
WaaSbaaSqaaiabeI7aXjaacYcacaWG0baabeaaaaa@5A1D@
</annotation>   </semantics>  </math>
<p>ce qui donne :</p>  <math display=&#39;block&#39;>   <semantics>
<mrow>
<mover accent=&#39;true&#39;>
<mrow>
<msub>
<mi>r</mi>
<mrow>
<mi>E</mi><mi>&#x03B8;</mi></mrow>
</msub>
</mrow>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mo>=</mo><mn>1,018</mn></mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaWaa0aaaeaaca
WGYbWaaSbaaSqaaiaadweacqaH4oqCaeqaaaaakiabg2da9iaaigda
caGGUaGaaGimaiaaigdacaaI4aaaaa@3E5E@
</annotation>   </semantics>  </math>
<p>De m&ecirc;me, lorsqu&rsquo;on &eacute;l&egrave;ve au carr&eacute; les &eacute;l&eacute;ments de la matrice r&eacute;ponse, l&rsquo;&eacute;quation (10) devient :</p>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<mover accent=&#39;true&#39;>
<mrow>
<msubsup>
<mi>r</mi>
<mrow>
<mi>E</mi><mi>&#x03B8;</mi></mrow>
<mn>2</mn>
</msubsup>
</mrow>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mo>=</mo><mstyle displaystyle=&#39;true&#39;>
<munderover>
<mo>&#x2211;</mo>
<mrow>
<mi>s</mi><mo>=</mo><mn>1</mn></mrow>
<mrow>
<mi>s</mi><mo>=</mo><mn>11</mn></mrow>
</munderover>
<mrow></mrow>
</mstyle><mstyle displaystyle=&#39;true&#39;>
<munderover>
<mo>&#x2211;</mo>
<mrow>
<mi>t</mi><mo>=</mo><mn>1</mn></mrow>
<mrow>
<mi>t</mi><mo>=</mo><mn>5</mn></mrow>
</munderover>
<mrow>
<msubsup>
<mi>r</mi>
<mrow>
<mi>E</mi><mi>&#x03B8;</mi><mo>,</mo><mi>s</mi><mo>,</mo><mi>t</mi></mrow>
<mn>2</mn>
</msubsup>
<msub>
<mi>p</mi>
<mrow>
<mi>E</mi><mo>,</mo><mi>s</mi></mrow>
</msub>
</mrow>
</mstyle><msub>
<mi>p</mi>
<mrow>
<mi>&#x03B8;</mi><mo>,</mo><mi>t</mi></mrow>
</msub>
</mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbiqaaqXbdaqdaa
qaaiaadkhadaqhaaWcbaGaamyraiabeI7aXbqaaiaaikdaaaaaaOGa
eyypa0ZaaabCaeaaaSqaaiaadohacqGH9aqpcaaIXaaabaGaam4Cai
abg2da9iaaigdacaaIXaaaniabggHiLdGcdaaeWbqaaiaadkhadaqh
aaWcbaGaamyraiabeI7aXjaacYcacaWGZbGaaiilaiaadshaaeaaca
aIYaaaaOGaamiCamaaBaaaleaacaWGfbGaaiilaiaadohaaeqaaaqa
aiaadshacqGH9aqpcaaIXaaabaGaamiDaiabg2da9iaaiwdaa0Gaey
yeIuoakiaadchadaWgaaWcbaGaeqiUdeNaaiilaiaadshaaeqaaaaa
@5B95@
</annotation>   </semantics>  </math>
<p>ce qui donne :</p>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<mover accent=&#39;true&#39;>
<mrow>
<msubsup>
<mi>r</mi>
<mrow>
<mi>E</mi><mi>&#x03B8;</mi></mrow>
<mn>2</mn>
</msubsup>
</mrow>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mo>=</mo><mn>1,041</mn></mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaWaa0aaaeaaca
WGYbWaa0baaSqaaiaadweacqaH4oqCaeaacaaIYaaaaaaakiabg2da
9iaaigdacaGGUaGaaGimaiaaisdacaaIXaaaaa@3F17@
</annotation>   </semantics>  </math>
<h4>A.4.2 Humidit&eacute; relative et temp&eacute;rature</h4>  <p>On suppose que ces deux grandeurs d&rsquo;influence influent sur la r&eacute;ponse du dosim&egrave;tre de mani&egrave;re ind&eacute;pendante. On peut donc mesurer les r&eacute;ponses relatives pour une s&eacute;rie de valeurs de chaque grandeur, tout en maintenant l&rsquo;autre grandeur constante et &eacute;gale &agrave; sa valeur de r&eacute;f&eacute;rence. L&agrave; encore, on d&eacute;finit des intervalles pour chacune des valeurs mesur&eacute;es, afin de couvrir toute la gamme des valeurs de la grandeur auxquelles le dosim&egrave;tre peut &ecirc;tre expos&eacute;. Les points de mesure, les intervalles correspondants et les r&eacute;ponses relatives sont pr&eacute;sent&eacute;s dans les tableaux A.4 et A.5.</p>
<table className="">  <caption className="text-left">Tableau A.4 : R&eacute;ponse relative mesur&eacute;e <em>r<sub>H,s</sub></em> en fonction de l&rsquo;humidit&eacute; relative <em>H</em>, avec une valeur de r&eacute;f&eacute;rence de 50%</caption>  <tr>
<th className="text-center">Indice, s</th>
<th className="text-center">H (%)</th>
<th className="text-center">Intervalle (%)</th>
<th className="text-center">R&eacute;ponse relative <em>r<sub>H,s</sub></em></th>  </tr>  <tr>
<td className="text-center">1</td>
<td className="text-center">40</td>
<td className="text-center">0-50</td>
<td className="text-center">1,00</td>  </tr>  <tr>
<td className="text-center">2</td>
<td className="text-center">60</td>
<td className="text-center">51-70</td>
<td className="text-center">0,99</td>  </tr>  <tr>
<td className="text-center">3</td>
<td className="text-center">80</td>
<td className="text-center">71-90</td>
<td className="text-center">0,98</td>  </tr>  <tr>
<td className="text-center">4</td>
<td className="text-center">95</td>
<td className="text-center">91-100</td>
<td className="text-center">0,95</td>  </tr>  </table>  <br />
<table className="">  <caption className="text-left">Tableau A.5 : R&eacute;ponse relative mesur&eacute;e <em>r<sub>T,t</sub></em> en fonction de la temp&eacute;rature T, avec une valeur de r&eacute;f&eacute;rence de 20&deg;C</caption>  <tr>
<th className="text-center">Indice, t</th>
<th className="text-center">T (degr&eacute;s)</th>
<th className="text-center">Intervalle (degr&eacute;)</th>
<th className="text-center">R&eacute;ponse relative <em>r<sub>T,s</sub></em></th>  </tr>  <tr>
<td className="text-center">1</td>
<td className="text-center">-10</td>
<td className="text-center">(-15)&ndash;(-5)</td>
<td className="text-center">1,05</td>  </tr>  <tr>
<td className="text-center">2</td>
<td className="text-center">0</td>
<td className="text-center">(-6)&ndash;(5)</td>
<td className="text-center">1,03</td>  </tr>  <tr>
<td className="text-center">3</td>
<td className="text-center">10</td>
<td className="text-center">6-15</td>
<td className="text-center">1,01</td>  </tr>  <tr>
<td className="text-center">4</td>
<td className="text-center">20</td>
<td className="text-center">16-25</td>
<td className="text-center">1,00</td>  </tr>  <tr>
<td className="text-center">5</td>
<td className="text-center">30</td>
<td className="text-center">26-35</td>
<td className="text-center">0,99</td>  </tr>  <tr>
<td className="text-center">6</td>
<td className="text-center">40</td>
<td className="text-center">36-45</td>
<td className="text-center">0,95</td>  </tr>  <tr>
<td className="text-center">7</td>
<td className="text-center">50</td>
<td className="text-center">46-55</td>
<td className="text-center">0,90</td>  </tr>  </table>
<p>&Eacute;tant donn&eacute; que la temp&eacute;rature et l&rsquo;humidit&eacute; relative sont en corr&eacute;lation dans le milieu de travail, on doit estimer une matrice probabilit&eacute; <em>p<sub>HT</sub></em>, comme il est indiqu&eacute; dans le tableau A.6.</p>
<table className="width-100">  <caption className="text-left">Tableau A.6 : Probabilit&eacute; d&rsquo;occurrence relative estim&eacute;e <em>p<sub>HT,s,t</sub></em> dans le milieu de travail pour chaque combinaison d&rsquo;intervalles de temp&eacute;rature et d&rsquo;humidit&eacute; relative</caption>  <tr>
<th className="text-center text-center" rowspan="3" colSpan="2">&nbsp;</em></th>
<th className="text-center" colSpan="8">Temp&eacute;rature</th>  </tr>  <tr>
<th className="text-center" colSpan="8">Indice, <em>t</em></th>  </tr>  <tr>
<th className="text-center">1</th>
<th className="text-center">2</th>
<th className="text-center">3</th>
<th className="text-center">4</th>
<th className="text-center">5</th>
<th className="text-center">6</th>
<th className="text-center">7</th>
<th className="text-center">&nbsp;</th>  </tr>  <tr>
<th className="text-center" colSpan="2">Humidit&eacute;</th>
<th className="text-center" colSpan="8">Intervallle (&deg;C)</th>  </tr>  <tr>
<th className="text-center">Indice, s</th>
<th className="text-center">Intervallle (%)</th>
<th className="text-center">(-15)&ndash;(-5)</th>
<th className="text-center">(-6)&ndash;(5)</th>
<th className="text-center">6-15</th>
<th className="text-center">16-25</th>
<th className="text-center">26-35</th>
<th className="text-center">36-45</th>
<th className="text-center">46-55</th>
<th className="text-center">Somme</th>  </tr>  <tr>
<td className="text-center">1</td>
<td className="text-center">0-50</td>
<td className="text-center">0,01</td>
<td className="text-center">0,01</td>
<td className="text-center">0,02</td>
<td className="text-center">0,00</td>
<td className="text-center">0,00</td>
<td className="text-center">0,00</td>
<td className="text-center">0,00</td>
<td className="text-center">0,04</td>  </tr>  <tr>
<td className="text-center">2</td>
<td className="text-center">51-70</td>
<td className="text-center">0,00</td>
<td className="text-center">0,00</td>
<td className="text-center">0,11</td>
<td className="text-center">0,30</td>
<td className="text-center">0,05</td>
<td className="text-center">0,00</td>
<td className="text-center">0,00</td>
<td className="text-center">0,46</td>  </tr>  <tr>
<td className="text-center">3</td>
<td className="text-center">71-90</td>
<td className="text-center">000</td>
<td className="text-center">0,00</td>
<td className="text-center">0,00</td>
<td className="text-center">0,25</td>
<td className="text-center">0,15</td>
<td className="text-center">0,03</td>
<td className="text-center">0,00</td>
<td className="text-center">0,43</td>  </tr>  <tr>
<td className="text-center">4</td>
<td className="text-center">91-100</td>
<td className="text-center">0,00</td>
<td className="text-center">0,00</td>
<td className="text-center">0,00</td>
<td className="text-center">0,00</td>
<td className="text-center">0,05</td>
<td className="text-center">0,01</td>
<td className="text-center">0,01</td>
<td className="text-center">0,07</td>  </tr>  <tr>
<td className="text-right" colSpan="9">Sum&nbsp;&nbsp;</td>
<td className="text-center">1,00</td>  </tr>  </table>
<p>Lorsqu&rsquo;on remplace <em>k</em> par <em>H</em>, <em>l</em> par <em>T</em>, <em>M<sub>k</sub></em> par 4 et <em>M<sub>l</sub></em> par 7, l&rsquo;&eacute;quation (5) devient : </p>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<msub>
<mrow>
<mover accent=&#39;true&#39;>
<mrow>
<msub>
<mi>r</mi>
<mi>H</mi>
</msub>
<mi>r</mi></mrow>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
</mrow>
<mi>T</mi>
</msub>
<mo>=</mo><mstyle displaystyle=&#39;true&#39;>
<munderover>
<mo>&#x2211;</mo>
<mrow>
<mi>s</mi><mo>=</mo><mn>1</mn></mrow>
<mrow>
<mi>s</mi><mo>=</mo><mn>4</mn></mrow>
</munderover>
<mrow></mrow>
</mstyle><mstyle displaystyle=&#39;true&#39;>
<munderover>
<mo>&#x2211;</mo>
<mrow>
<mi>t</mi><mo>=</mo><mn>1</mn></mrow>
<mrow>
<mi>t</mi><mo>=</mo><mn>7</mn></mrow>
</munderover>
<mrow>
<msubsup>
<mi>r</mi>
<mrow>
<mi>H</mi><mo>,</mo><mi>s</mi></mrow>
<mrow></mrow>
</msubsup>
<msub>
<mi>r</mi>
<mrow>
<mi>T</mi><mo>,</mo><mi>t</mi></mrow>
</msub>
</mrow>
</mstyle><msub>
<mi>p</mi>
<mrow>
<mi>H</mi><mi>T</mi><mo>,</mo><mi>s</mi><mo>,</mo><mi>t</mi></mrow>
</msub>
</mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbiqaaqXbdaqdaa
qaaiaadkhadaWgaaWcbaGaamisaaqabaGccaWGYbaaamaaBaaaleaa
caWGubaabeaakiabg2da9maaqahabaaaleaacaWGZbGaeyypa0JaaG
ymaaqaaiaadohacqGH9aqpcaaI0aaaniabggHiLdGcdaaeWbqaaiaa
dkhadaqhaaWcbaGaamisaiaacYcacaWGZbaabaaaaOGaamOCamaaBa
aaleaacaWGubGaaiilaiaadshaaeqaaaqaaiaadshacqGH9aqpcaaI
XaaabaGaamiDaiabg2da9iaaiEdaa0GaeyyeIuoakiaadchadaWgaa
WcbaGaamisaiaadsfacaGGSaGaam4CaiaacYcacaWG0baabeaaaaa@5807@
</annotation>   </semantics>  </math>
<p>ce qui donne :</p>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<mover accent=&#39;true&#39;>
<mrow>
<msub>
<mi>r</mi>
<mi>H</mi>
</msub>
<msub>
<mi>r</mi>
<mi>T</mi>
</msub>
</mrow>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mo>=</mo><mn>0,980</mn></mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaWaa0aaaeaaca
WGYbWaaSbaaSqaaiaadIeaaeqaaOGaamOCamaaBaaaleaacaWGubaa
beaaaaGccqGH9aqpcaaIWaGaaiOlaiaaiMdacaaI4aGaaGimaaaa@3EB8@
</annotation>   </semantics>  </math>
<p>De m&ecirc;me, l&rsquo;&eacute;quation (11) devient :</p>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<mover accent=&#39;true&#39;>
<mrow>
<msubsup>
<mi>r</mi>
<mi>H</mi>
<mn>2</mn>
</msubsup>
<msubsup>
<mi>r</mi>
<mi>T</mi>
<mn>2</mn>
</msubsup>
</mrow>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mo>=</mo><mstyle displaystyle=&#39;true&#39;>
<munderover>
<mo>&#x2211;</mo>
<mrow>
<mi>s</mi><mo>=</mo><mn>1</mn></mrow>
<mrow>
<mi>s</mi><mo>=</mo><mn>4</mn></mrow>
</munderover>
<mrow></mrow>
</mstyle><mstyle displaystyle=&#39;true&#39;>
<munderover>
<mo>&#x2211;</mo>
<mrow>
<mi>t</mi><mo>=</mo><mn>1</mn></mrow>
<mrow>
<mi>t</mi><mo>=</mo><mn>7</mn></mrow>
</munderover>
<mrow>
<msubsup>
<mi>r</mi>
<mrow>
<mi>H</mi><mo>,</mo><mi>s</mi></mrow>
<mn>2</mn>
</msubsup>
<msubsup>
<mi>r</mi>
<mrow>
<mi>T</mi><mo>,</mo><mi>t</mi></mrow>
<mn>2</mn>
</msubsup>
</mrow>
</mstyle><msub>
<mi>p</mi>
<mrow>
<mi>H</mi><mi>T</mi><mo>,</mo><mi>s</mi><mo>,</mo><mi>t</mi></mrow>
</msub>
</mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbiqaaqXbdaqdaa
qaaiaadkhadaqhaaWcbaGaamisaaqaaiaaikdaaaGccaWGYbWaa0ba
aSqaaiaadsfaaeaacaaIYaaaaaaakiabg2da9maaqahabaaaleaaca
WGZbGaeyypa0JaaGymaaqaaiaadohacqGH9aqpcaaI0aaaniabggHi
LdGcdaaeWbqaaiaadkhadaqhaaWcbaGaamisaiaacYcacaWGZbaaba
GaaGOmaaaakiaadkhadaqhaaWcbaGaamivaiaacYcacaWG0baabaGa
aGOmaaaaaeaacaWG0bGaeyypa0JaaGymaaqaaiaadshacqGH9aqpca
aI3aaaniabggHiLdGccaWGWbWaaSbaaSqaaiaadIeacaWGubGaaiil
aiaadohacaGGSaGaamiDaaqabaaaaa@5AFA@
</annotation>   </semantics>  </math>
<p>ce qui donne :</p>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<mover accent=&#39;true&#39;>
<mrow>
<msubsup>
<mi>r</mi>
<mi>H</mi>
<mn>2</mn>
</msubsup>
<msubsup>
<mi>r</mi>
<mi>T</mi>
<mn>2</mn>
</msubsup>
</mrow>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mo>=</mo><mn>0,961</mn></mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaWaa0aaaeaaca
WGYbWaa0baaSqaaiaadIeaaeaacaaIYaaaaOGaamOCamaaDaaaleaa
caWGubaabaGaaGOmaaaaaaGccqGH9aqpcaaIWaGaaiOlaiaaiMdaca
aI2aGaaGymaaaa@4031@
</annotation>   </semantics>  </math>
<h4>A.4.3 Lin&eacute;arit&eacute; de la dose</h4>  <p>Dans le cas plus simple d&rsquo;une grandeur d&rsquo;influence ind&eacute;pendante individuelle, les r&eacute;ponses relatives <em>r<sub>q</sub></em> et les probabilit&eacute;s d&rsquo;occurrence correspondantes <em>p<sub>q</sub></em> peuvent &ecirc;tre repr&eacute;sent&eacute;es par des vecteurs ind&eacute;pendants, comme il est indiqu&eacute; dans le tableau A.7.</p>
<table className="">  <caption className="text-left">Tableau A.7 : R&eacute;ponse relative mesur&eacute;e <em>r<sub>D,s</sub></em> &agrave; un accroissement de la dose (lin&eacute;arit&eacute;) et probabilit&eacute; estim&eacute;e <em>p<sub>D,s</sub></em> de recevoir une dose dans chaque intervalle</caption>  <tr>
<th className="text-center">Indice, s</th>
<th className="text-center">Dose, D (mSv)</th>
<th className="text-center">Intervalle, q (mSv)</th>
<th className="text-center">R&eacute;ponse relative <em>r<sub>D,s</sub></em></th>
<th className="text-center">Probabilit&eacute;, <em>p<sub>D,s</sub></em></th>  </tr>  <tr>
<td className="text-center">1</td>
<td className="text-center">0.1</td>
<td className="text-center">0-0.2</td>
<td className="text-center">1,05</td>
<td className="text-center">0,900</td>  </tr>  <tr>
<td className="text-center">2</td>
<td className="text-center">0,5</td>
<td className="text-center">0.2-0.7</td>
<td className="text-center">1,02</td>
<td className="text-center">0,050</td>  </tr>  <tr>
<td className="text-center">3</td>
<td className="text-center">1.0</td>
<td className="text-center">0.7-2.0</td>
<td className="text-center">1,00</td>
<td className="text-center">0,030</td>  </tr>  <tr>
<td className="text-center">4</td>
<td className="text-center">5.0</td>
<td className="text-center">2.0-7.0</td>
<td className="text-center">1,00</td>
<td className="text-center">0,010</td>  </tr>  <tr>
<td className="text-center">5</td>
<td className="text-center">10</td>
<td className="text-center">7-20</td>
<td className="text-center">1,00</td>
<td className="text-center">0,009</td>  </tr>  <tr>
<td className="text-center">6</td>
<td className="text-center">50</td>
<td className="text-center">20-70</td>
<td className="text-center">1,00</td>
<td className="text-center">0,001</td>  </tr>  <tr>
<td className="text-center">7</td>
<td className="text-center">100</td>
<td className="text-center">70-200</td>
<td className="text-center">1,00</td>
<td className="text-center">0,000</td>  </tr>  <tr>
<td className="text-center">8</td>
<td className="text-center">500</td>
<td className="text-center">200-700</td>
<td className="text-center">1,00</td>
<td className="text-center">0,000</td>  </tr>  <tr>
<td className="text-center">9</td>
<td className="text-center">1 000</td>
<td className="text-center">700-1 500</td>
<td className="text-center">1,02</td>
<td className="text-center">0,000</td>  </tr>  <tr>
<td className="text-center">10</td>
<td className="text-center">2 000</td>
<td className="text-center">1 500-3 000</td>
<td className="text-center">1,05</td>
<td className="text-center">0,000</td>  </tr>  <tr>
<td className="text-center">11</td>
<td className="text-center">4 000</td>
<td className="text-center">3 000-5 000</td>
<td className="text-center">1,08</td>
<td className="text-center">0,000</td>  </tr>  <tr>
<td className="text-center">12</td>
<td className="text-center">6 000</td>
<td className="text-center">5 000-7 000</td>
<td className="text-center">1,11</td>
<td className="text-center">0,000</td>  </tr>  <tr>
<td className="text-center">13</td>
<td className="text-center">8 000</td>
<td className="text-center">7 000-9 000</td>
<td className="text-center">1,15</td>
<td className="text-center">0,000</td>  </tr>  <tr>
<td className="text-center">14</td>
<td className="text-center">10 000</td>
<td className="text-center">9 000-11 000</td>
<td className="text-center">1,20</td>
<td className="text-center">0,000</td>  </tr>  <tr>
<td className="text-right" colSpan="4">Somme&nbsp;&nbsp;</td>
<td className="text-center">1,000</td>  </tr>  <tr>
<td colSpan="5">Remarque : La valeur de r&eacute;f&eacute;rence est de 10 mSv.</td>  </tr>  </table>
<p>Dans ce cas, lorsqu&rsquo;on remplace <em>q</em> par <em>D</em> et <em>M<sub>q</sub></em> par 14, l&rsquo;&eacute;quation (3) devient :</p>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<mover accent=&#39;true&#39;>
<mrow>
<msub>
<mi>r</mi>
<mi>D</mi>
</msub>
</mrow>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mo>=</mo><mstyle displaystyle=&#39;true&#39;>
<munderover>
<mo>&#x2211;</mo>
<mrow>
<mi>s</mi><mo>=</mo><mn>1</mn></mrow>
<mrow>
<mi>s</mi><mo>=</mo><mn>14</mn></mrow>
</munderover>
<mrow>
<msub>
<mi>r</mi>
<mrow>
<mi>D</mi><mo>,</mo><mi>s</mi></mrow>
</msub>
<msub>
<mi>p</mi>
<mrow>
<mi>D</mi><mo>,</mo><mi>s</mi></mrow>
</msub>
</mrow>
</mstyle></mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbiqaaqXbdaqdaa
qaaiaadkhadaWgaaWcbaGaamiraaqabaaaaOGaeyypa0ZaaabCaeaa
caWGYbWaaSbaaSqaaiaadseacaGGSaGaam4CaaqabaGccaWGWbWaaS
baaSqaaiaadseacaGGSaGaam4CaaqabaaabaGaam4Caiabg2da9iaa
igdaaeaacaWGZbGaeyypa0JaaGymaiaaisdaa0GaeyyeIuoaaaa@48B8@
</annotation>   </semantics>  </math>
<p>ce qui donne :</p>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<mover accent=&#39;true&#39;>
<mrow>
<msub>
<mi>r</mi>
<mi>D</mi>
</msub>
</mrow>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mo>=</mo><mn>1,046</mn></mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaWaa0aaaeaaca
WGYbWaaSbaaSqaaiaadseaaeqaaaaakiabg2da9iaaigdacaGGUaGa
aGimaiaaisdacaaI2aaaaa@3CA8@
</annotation>   </semantics>  </math>
<p>De m&ecirc;me, l&rsquo;&eacute;quation (9) devient :</p>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<mover accent=&#39;true&#39;>
<mrow>
<msubsup>
<mi>r</mi>
<mi>D</mi>
<mn>2</mn>
</msubsup>
</mrow>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mo>=</mo><mstyle displaystyle=&#39;true&#39;>
<munderover>
<mo>&#x2211;</mo>
<mrow>
<mi>s</mi><mo>=</mo><mn>1</mn></mrow>
<mrow>
<mi>s</mi><mo>=</mo><mn>14</mn></mrow>
</munderover>
<mrow>
<msubsup>
<mi>r</mi>
<mrow>
<mi>D</mi><mo>,</mo><mi>s</mi></mrow>
<mn>2</mn>
</msubsup>
<msub>
<mi>p</mi>
<mrow>
<mi>D</mi><mo>,</mo><mi>s</mi></mrow>
</msub>
</mrow>
</mstyle></mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbiqaaqXbdaqdaa
qaaiaadkhadaqhaaWcbaGaamiraaqaaiaaikdaaaaaaOGaeyypa0Za
aabCaeaacaWGYbWaa0baaSqaaiaadseacaGGSaGaam4Caaqaaiaaik
daaaGccaWGWbWaaSbaaSqaaiaadseacaGGSaGaam4CaaqabaaabaGa
am4Caiabg2da9iaaigdaaeaacaWGZbGaeyypa0JaaGymaiaaisdaa0
GaeyyeIuoaaaa@4A32@
</annotation>   </semantics>  </math>
<p>ce qui donne :</p>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<mover accent=&#39;true&#39;>
<mrow>
<msubsup>
<mi>r</mi>
<mi>D</mi>
<mn>2</mn>
</msubsup>
</mrow>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mo>=</mo><mn>1,094</mn></mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaWaa0aaaeaaca
WGYbWaa0baaSqaaiaadseaaeaacaaIYaaaaaaakiabg2da9iaaigda
caGGUaGaaGimaiaaiMdacaaI0aaaaa@3D68@
</annotation>   </semantics>  </math>
<h4>A.4.4 R&eacute;ponse moyenne et incertitude globale</h4>  <p>Si le dosim&egrave;tre a &eacute;t&eacute; &eacute;talonn&eacute; de mani&egrave;re &agrave; ce qu&rsquo;il indique la valeur conventionnellement vraie de la dose dans les conditions de r&eacute;f&eacute;rence, alors R<sub>0</sub> = 1. On peut maintenant exprimer l&rsquo;&eacute;quation (2) sous la forme suivante :</p>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<mover accent=&#39;true&#39;>
<mi>R</mi>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mo>=</mo><mn>l</mn><mo>&#x2217;</mo><mover accent=&#39;true&#39;>
<mrow>
<msub>
<mi>r</mi>
<mi>D</mi>
</msub>
</mrow>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mo>&#x2217;</mo><mover accent=&#39;true&#39;>
<mrow>
<msub>
<mi>r</mi>
<mrow>
<mi>E</mi><mi>&#x03B8;</mi></mrow>
</msub>
</mrow>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mo>&#x2217;</mo><mover accent=&#39;true&#39;>
<mrow>
<msub>
<mi>r</mi>
<mi>H</mi>
</msub>
<msub>
<mi>r</mi>
<mi>T</mi>
</msub>
</mrow>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
</mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaWaa0aaaeaaca
WGsbaaaiabg2da9iaaigdacqGHxiIkdaqdaaqaaiaadkhadaWgaaWc
baGaamiraaqabaaaaOGaey4fIOYaa0aaaeaacaWGYbWaaSbaaSqaai
aadweacqaH4oqCaeqaaaaakiabgEHiQmaanaaabaGaamOCamaaBaaa
leaacaWGibaabeaakiaadkhadaWgaaWcbaGaamivaaqabaaaaaaa@4538@
</annotation>   </semantics>  </math>
<p>En utilisant cette valeur et les r&eacute;sultats des sections pr&eacute;c&eacute;dentes dans l&rsquo;&eacute;quation (2A), on obtient une r&eacute;ponse moyenne &eacute;gale &agrave; :</p>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<mover accent=&#39;true&#39;>
<mi>R</mi>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mo>=</mo><mn>1,044</mn></mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaWaa0aaaeaaca
WGsbaaaiabg2da9iaaigdacaGGUaGaaGimaiaaisdacaaI0aaaaa@3B87@
</annotation>   </semantics>  </math>
<p>La variance de la r&eacute;ponse est donn&eacute;e par l&rsquo;&eacute;quation (8) qui peut &ecirc;tre r&eacute;&eacute;crite sous la forme suivante :</p>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<msup>
<mi>u</mi>
<mn>2</mn>
</msup>
<mo>=</mo><msup>
<mi>l</mi>
<mn>2</mn>
</msup>
<mo>&#x2217;</mo><mover accent=&#39;true&#39;>
<mrow>
<msubsup>
<mi>r</mi>
<mi>D</mi>
<mn>2</mn>
</msubsup>
</mrow>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mo>&#x2217;</mo><mover accent=&#39;true&#39;>
<mrow>
<msubsup>
<mi>r</mi>
<mrow>
<mi>E</mi><mi>&#x03B8;</mi></mrow>
<mn>2</mn>
</msubsup>
</mrow>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mo>&#x2217;</mo><mover accent=&#39;true&#39;>
<mrow>
<msubsup>
<mi>r</mi>
<mi>H</mi>
<mn>2</mn>
</msubsup>
<msubsup>
<mi>r</mi>
<mi>T</mi>
<mn>2</mn>
</msubsup>
</mrow>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
<mo>&#x2212;</mo><msup>
<mrow>
<mrow><mo>(</mo>
<mrow>
<mover accent=&#39;true&#39;>
<mi>R</mi>
<mo stretchy=&#39;true&#39;>&#x00AF;</mo>
</mover>
</mrow>
<mo>)</mo></mrow></mrow>
<mn>2</mn>
</msup>
</mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaamyDamaaCa
aaleqabaGaaGOmaaaakiabg2da9iaadYgadaahaaWcbeqaaiaaikda
aaGccqGHxiIkdaqdaaqaaiaadkhadaqhaaWcbaGaamiraaqaaiaaik
daaaaaaOGaey4fIOYaa0aaaeaacaWGYbWaa0baaSqaaiaadweacqaH
4oqCaeaacaaIYaaaaaaakiabgEHiQmaanaaabaGaamOCamaaDaaale
aacaWGibaabaGaaGOmaaaakiaadkhadaqhaaWcbaGaamivaaqaaiaa
ikdaaaaaaOGaeyOeI0YaaeWaaeaadaqdaaqaaiaadkfaaaaacaGLOa
GaayzkaaWaaWbaaSqabeaacaaIYaaaaaaa@4EAB@
</annotation>   </semantics>  </math>
<p>ce qui donne :</p>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<msup>
<mi>u</mi>
<mn>2</mn>
</msup>
<mo>=</mo><mn>0,0045</mn></mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaamyDamaaCa
aaleqabaGaaGOmaaaakiabg2da9iaaicdacaGGUaGaaGimaiaaicda
caaI0aGaaGynaaaa@3D46@
</annotation>   </semantics>  </math>
<p>Une s&eacute;rie de mesures r&eacute;p&eacute;t&eacute;es &agrave; des doses sup&eacute;rieures &agrave; 4 millisieverts (mSv), avec les cinq grandeurs d&rsquo;influence maintenues constantes et &eacute;gales aux conditions de r&eacute;f&eacute;rence, pr&eacute;sente une incertitude relative statistique <em>u<sub>s</sub></em> de 10 %. Cette incertitude peut &ecirc;tre consid&eacute;r&eacute;e comme une incertitude de type A due aux erreurs al&eacute;atoires.</p>  <p>En combinant l&rsquo;incertitude type de la r&eacute;ponse et l&rsquo;incertitude relative statistique donn&eacute;e par l&rsquo;&eacute;quation (13), on obtient l&rsquo;incertitude type globale d&rsquo;une mesure individuelle suivante :</p>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<msub>
<mi>u</mi>
<mi>c</mi>
</msub>
<mo>=</mo><mn>1,044</mn><msqrt>
<mrow>
<mfrac>
<mrow>
<mn>0,0045</mn></mrow>
<mrow>
<msup>
<mrow>
<mo stretchy=&#39;false&#39;>(</mo><mn>1,044</mn><mo stretchy=&#39;false&#39;>)</mo></mrow>
<mn>2</mn>
</msup>
</mrow>
</mfrac>
<mo>+</mo><msup>
<mrow>
<mo stretchy=&#39;false&#39;>(</mo><mn>0,1</mn><mo stretchy=&#39;false&#39;>)</mo></mrow>
<mn>2</mn>
</msup>
</mrow>
</msqrt>
</mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaamyDamaaBa
aaleaacaWGJbaabeaakiabg2da9iaaigdacaGGUaGaaGimaiaaisda
caaI0aWaaOaaaeaadaWcaaqaaiaaicdacaGGUaGaaGimaiaaicdaca
aI0aGaaGynaaqaaiaacIcacaaIXaGaaiOlaiaaicdacaaI0aGaaGin
aiaacMcadaahaaWcbeqaaiaaikdaaaaaaOGaey4kaSIaaiikaiaaic
dacaGGUaGaaGymaiaacMcadaahaaWcbeqaaiaaikdaaaaabeaaaaa@4C6E@
</annotation>   </semantics>  </math>
<p><math display=&#39;block&#39;>   <semantics>
<mrow>
<msub>
<mi>u</mi>
<mi>c</mi>
</msub>
<mo>=</mo><mn>0,1240</mn></mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaamyDamaaBa
aaleaacaWGJbaabeaakiabg2da9iaaicdacaGGUaGaaGymaiaaikda
caaI0aGaaGimaaaa@3D6F@
</annotation>   </semantics>  </math>
<p>Les limites sup&eacute;rieure et inf&eacute;rieure d&eacute;finies par l&rsquo;&eacute;quation (14) sont alors de 0,80 et de 1,29; elles se situent bien &agrave; l&rsquo;int&eacute;rieur des limites exig&eacute;es de 0,67 et de 1,5, correspondant &agrave; &rho; = 1,5.</p>  <p>Pour une dose de 0,4 mSv, on doit avoir &rho; = 2. Dans ces conditions, la r&eacute;ponse relative moyenne et l&rsquo;incertitude de la r&eacute;ponse seront probablement les m&ecirc;mes que pour des doses plus &eacute;lev&eacute;es. L&rsquo;incertitude imputable aux erreurs al&eacute;atoires repr&eacute;sente la composante de l&rsquo;incertitude globale qui risque d&rsquo;augmenter et elle doit donc &ecirc;tre d&eacute;termin&eacute;e s&eacute;par&eacute;ment &agrave; cette dose plus faible.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appB"></div>
<h2 id="appB">Annexe B : Normes relatives aux essais de type en dosim&eacute;trie externe</h2>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appB-1"></div>
<h3 id="appB-1">B.1 Introduction</h3>  <p>Outre le programme interne de syst&egrave;me de gestion d&eacute;crit dans la section 5.0, &laquo; Exigences en mati&egrave;re de syst&egrave;me de gestion &raquo;, le service de dosim&eacute;trie doit proc&eacute;der &agrave; des essais de type, suivant la description qui en est donn&eacute;e dans la section 4.1.4, &laquo; Essais de type &raquo;. Si les dosim&egrave;tres couramment utilis&eacute;s risquent d&rsquo;&ecirc;tre expos&eacute;s &agrave; des conditions autres que celles mentionn&eacute;es ici, mais qui peuvent influer sur le r&eacute;sultat d&rsquo;un relev&eacute; de dose, ces conditions doivent &ecirc;tre d&eacute;finies et incluses dans les essais de type, en plus de celles qui sont &eacute;nonc&eacute;es ci-dessous.</p>  <p>Dans toute la mesure du possible, on doit corriger toute erreur introduite par une grandeur d&rsquo;influence en appliquant un facteur de correction au calcul de <em>H<sub>m</sub></em> (le r&eacute;sultat d&rsquo;une mesure dans des conditions d&eacute;finies) de mani&egrave;re &agrave; ce que la r&eacute;ponse relative moyenne pour cette grandeur d&rsquo;influence prenne une valeur qui soit le plus pr&egrave;s possible de l&rsquo;unit&eacute;. N&eacute;anmoins, il peut arriver qu&rsquo;il soit impossible ou non souhaitable d&rsquo;appliquer un facteur de correction pour une grandeur d&rsquo;influence particuli&egrave;re. Dans ce cas, il faudra inclure l&rsquo;erreur introduite par la grandeur d&rsquo;influence dans la d&eacute;termination de la r&eacute;ponse moyenne.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appB-2"></div>
<h3 id="appB-2">B.2	Grandeurs d&rsquo;influence et caract&eacute;ristiques du syst&egrave;me</h3>  <p>Le service de dosim&eacute;trie doit &eacute;valuer, parmi les grandeurs d&rsquo;influence, celles qui peuvent avoir un effet marqu&eacute; sur l&rsquo;exactitude ou l&rsquo;incertitude. Lorsqu&rsquo;on &eacute;value l&rsquo;importance &eacute;ventuelle des grandeurs d&rsquo;influence, on doit tenir compte tant de la conception du syst&egrave;me dosim&eacute;trique que des conditions pr&eacute;vues d&rsquo;utilisation.</p>   <p>Les grandeurs d&rsquo;influence &agrave; consid&eacute;rer sont les suivantes :</p>
<ol>
<li>l&rsquo;angle d&rsquo;incidence du rayonnement;</li>
<li>la distance entre le dosim&egrave;tre et le fant&ocirc;me;</li>
<li>la dose (c&rsquo;est-&agrave;-dire, la lin&eacute;arit&eacute; de la r&eacute;ponse de dose);</li>
<li>le d&eacute;bit de dose, y compris dans des champs de rayonnement puls&eacute;s;</li>
<li>les champs &eacute;lectromagn&eacute;tiques tant statiques qu&rsquo;alternatifs;</li>
<li>l&rsquo;&eacute;nergie des photons et des rayons b&ecirc;ta;</li>
<li>l&rsquo;humidit&eacute; et les &eacute;claboussements;</li>
<li>les rayonnements ionisants autres que ceux que l&rsquo;on entend mesurer;</li>
<li>les chocs m&eacute;caniques (chutes et vibrations du dosim&egrave;tre);</li>
<li>les champs de rayonnement mixtes;</li>
<li>les variations de temp&eacute;rature tant progressives qu&rsquo;abruptes;</li>
<li>le temps &eacute;coul&eacute; entre le pointage &agrave; z&eacute;ro et l&rsquo;irradiation, ainsi qu&rsquo;entre l&rsquo;irradiation et la lecture;</li>
<li>le flux de lumi&egrave;re visible et de rayons ultraviolets (effet tant sur le dosim&egrave;tre que sur le lecteur);</li>
<li>la tension d&rsquo;alimentation au lecteur (surtensions et variations progressives).</li>
</ol>  <p>Le service de dosim&eacute;trie doit &eacute;galement estimer, le cas &eacute;ch&eacute;ant, les effets des caract&eacute;ristiques suivantes du syst&egrave;me :</p>
<ol>
<li>l&rsquo;homog&eacute;n&eacute;it&eacute; des lots;</li>
<li>l&rsquo;incertitude d&rsquo;&eacute;talonnage;</li>
<li>la reproductibilit&eacute; (mesure de la stabilit&eacute; de la r&eacute;ponse tant du dosim&egrave;tre que du lecteur);</li>
<li>le signal r&eacute;siduel;</li>
<li>l&rsquo;auto-irradiation;</li>
<li>les variations dose-z&eacute;ro.</li>
</ol>  <p>S&rsquo;il est &eacute;tabli qu&rsquo;une grandeur d&rsquo;influence ou une caract&eacute;ristique du syst&egrave;me risque de causer une variation importante et soudaine de la dose mesur&eacute;e, mais avec une faible  probabilit&eacute;, il conviendra de ne pas inclure cette variation dans l&rsquo;incertitude type globale. On devra plut&ocirc;t r&eacute;duire au minimum les probabilit&eacute;s que cette grandeur cause l&rsquo;effet consid&eacute;r&eacute;, soit en modifiant la conception du dosim&egrave;tre, soit en instaurant des contr&ocirc;les de proc&eacute;dure. On estimera ensuite les probabilit&eacute;s r&eacute;duites d&rsquo;apparition d&rsquo;un tel effet.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appB-3"></div>
<h3 id="appB-3">B.3	Fant&ocirc;mes</h3>  <p>Pendant l&rsquo;irradiation, on doit monter les dosim&egrave;tres sur un fant&ocirc;me appropri&eacute; pour effectuer des essais de type des grandeurs d&rsquo;influence suivantes : l&rsquo;angle d&rsquo;incidence du rayonnement, la distance entre le dosim&egrave;tre et le fant&ocirc;me et l&rsquo;&eacute;nergie des photons et des rayons b&ecirc;ta. Pour les essais d&rsquo;autres grandeurs d&rsquo;influence exigeant une irradiation, on peut avoir recours &agrave; toute g&eacute;om&eacute;trie radiative jug&eacute;e commode pourvu que l&rsquo;on connaisse les doses relatives aux dosim&egrave;tres avec un degr&eacute; de pr&eacute;cision appropri&eacute; aux essais consid&eacute;r&eacute;s. Le signal produit par les dosim&egrave;tres dans ces essais peut &ecirc;tre reli&eacute; &agrave; la dose correspondante conventionnellement vraie en utilisant les r&eacute;sultats des irradiations sur fant&ocirc;me.</p>  <p>Pour les dosim&egrave;tres qui doivent &ecirc;tre port&eacute;s pendant des irradiations du torse (corps entier), le fant&ocirc;me des irradiations photoniques est un parall&eacute;l&eacute;pip&egrave;de (&laquo; plaque &raquo;) &agrave; parois de PMMA, c.-&agrave;-d. poly(m&eacute;thacrylate de m&eacute;thyle), et remplit d&rsquo;eau [9]). Les dimensions ext&eacute;rieures sont de 30 cm x 30 cm x 15 cm et l&rsquo;&eacute;paisseur des parois est de 2,5 mm pour la face ant&eacute;rieure (une des parois de 30 cm x 30 cm) et de 10 mm pour les cinq autres parois. On doit construire le fant&ocirc;me de mani&egrave;re &agrave; ce que la face ant&eacute;rieure demeure plate quand on le remplit d&rsquo;eau. Pour les irradiations b&ecirc;ta, on peut utiliser le m&ecirc;me type de fant&ocirc;me-plaque  remplit d&rsquo;eau qui vient d&rsquo;&ecirc;tre d&eacute;crit. On peut &eacute;galement utiliser une plaque pleine en PMMA offrant les m&ecirc;mes dimensions de parois et une &eacute;paisseur sup&eacute;rieure &agrave; la moiti&eacute; du parcours des particules b&ecirc;ta les plus &eacute;nergiques.</p>   <p>Pour les dosim&egrave;tres d&rsquo;extr&eacute;mit&eacute;s, les fant&ocirc;mes doivent &ecirc;tre des repr&eacute;sentations appropri&eacute;es du point de vue radiologique des parties des extr&eacute;mit&eacute;s o&ugrave; les dosim&egrave;tres seront port&eacute;s. Il s&rsquo;agit habituellement des doigts, des poignets et des chevilles. Les fant&ocirc;mes doivent convenir &agrave; la fois &agrave; la conception du dosim&egrave;tre et &agrave; l&rsquo;environnement radiologique dans lequel ils seront utilis&eacute;s. Deux fant&ocirc;mes possibles sont d&eacute;crits ci-dessous. Seul le fant&ocirc;me consid&eacute;r&eacute; comme &eacute;tant le plus repr&eacute;sentatif de la partie du corps sur laquelle le dosim&egrave;tre sera plac&eacute; le plus fr&eacute;quemment doit &ecirc;tre utilis&eacute; dans les essais de type. Le service de dosim&eacute;trie doit consulter la CCSN avant d&rsquo;utiliser d&rsquo;autres fant&ocirc;mes.</p>
<ol>
<li><em>Doigt</em> : cylindre plein en PMMA de 19 mm de diam&egrave;tre et 300 mm de longueur [10], [11], [12], [13], [14]</li>
<li><em>Poignet/cheville</em> : cylindre en PMMA &agrave; charge d&rsquo;eau pr&eacute;sentant un diam&egrave;tre ext&eacute;rieur de 73 mm, une &eacute;paisseur de paroi de 2,5 mm et une longueur de 300 mm [14]  Les ouvrages de r&eacute;f&eacute;rence mentionn&eacute;s fournissent les coefficients de conversion entre le kerma de l&rsquo;air et la dose correspondants. On peut &eacute;galement consulter des ouvrages plus r&eacute;cents offrant une information &agrave; jour, &agrave; mesure qu&rsquo;ils deviennent disponibles. Toutefois, le service de dosim&eacute;trie doit consulter la CCSN avant d&rsquo;utiliser d&rsquo;autres ouvrages de r&eacute;f&eacute;rence.</li>
</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appB-4"></div>
<h3 id="appB-4">B.4 Angle d&rsquo;incidence du rayonnement</h3>  <p>Pour les dosim&egrave;tres qui sont irradi&eacute;s sur le fant&ocirc;me-plaque d&eacute;crit ci-dessus, les rayonnements d&rsquo;essai doivent avoir, sur la face du dosim&egrave;tre, un angle d&rsquo;incidence de 0&deg;, 20&deg;, 40&deg; et 60&deg; par rapport &agrave; l&rsquo;incidence normale. Si la conception du dosim&egrave;tre donne une r&eacute;ponse angulaire &agrave; sym&eacute;trie cylindrique autour de l&rsquo;axe perpendiculaire &agrave; la face ant&eacute;rieure, il suffira d&rsquo;effectuer les mesures, en un seul sens, dans un m&ecirc;me plan (il faudra donc quatre (4) mesures). &Agrave; d&eacute;faut de sym&eacute;trie cylindrique, il sera peut-&ecirc;tre n&eacute;cessaire d&rsquo;effectuer les mesures, dans les deux sens, dans deux plans perpendiculaires (ce qui pourrait repr&eacute;senter jusqu&rsquo;&agrave; 13 mesures) pour pouvoir caract&eacute;riser convenablement la r&eacute;ponse angulaire du dosim&egrave;tre. Dans ce dernier cas, on calculera la r&eacute;ponse moyenne pour chaque angle et cette valeur deviendra la r&eacute;ponse propre &agrave; cet angle.</p>  <p>Pour les dosim&egrave;tres d&rsquo;extr&eacute;mit&eacute;s, les rayonnements d&rsquo;essai doivent avoir, sur la face ant&eacute;rieure du dosim&egrave;tre, un angle d&rsquo;incidence de 0&deg;, 30&deg; et 60&deg; par rapport &agrave; l&rsquo;incidence normale dans deux plans perpendiculaires (il faudra donc au moins cinq mesures). Si le dosim&egrave;tre ne pr&eacute;sente pas de sym&eacute;trie cylindrique, le nombre de mesures peut s&rsquo;&eacute;lever &agrave; neuf. On calcule la r&eacute;ponse moyenne pour chaque angle et cette valeur devient la r&eacute;ponse propre &agrave; cet angle.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appB-5"></div>
<h3 id="appB-5">B.5 &Eacute;nergies photoniques</h3>  <p>Pour tous les types de dosim&egrave;tres, les &eacute;nergies photoniques utilis&eacute;es pour les irradiations d&rsquo;essai doivent &ecirc;tre conformes &agrave; la norme internationale ISO 4037-1 [15]. On a calcul&eacute; et publi&eacute; des coefficients de conversion du kerma de l&rsquo;air (ou de l&rsquo;exposition) en <em>H<sub>p,c</sub></em>(d) pour ces spectres d&rsquo;&eacute;nergie (voir la norme ISO 4037-3 [9]). Les calculs sont bas&eacute;s sur un fant&ocirc;me type de la Commission internationale des unit&eacute;s et des mesures radiologiques (CIUMR), consistant en une plaque en tissu dont les dimensions correspondent &agrave; celles du fant&ocirc;me &agrave; charge d&rsquo;eau qui a &eacute;t&eacute; d&eacute;crit ci-dessus. La diff&eacute;rence de r&eacute;trodiffusion entre les fant&ocirc;mes en tissu de la CIUMR et les fant&ocirc;mes &agrave; charge d&rsquo;eau est assez faible pour &ecirc;tre consid&eacute;r&eacute;e comme n&eacute;gligeable. On a calcul&eacute; et publi&eacute; des coefficients de conversion du kerma de l&rsquo;air en <em>H<sub>e,c</sub></em> sur des fant&ocirc;mes cylindriques [14]. Dans le cas o&ugrave; l&rsquo;&eacute;nergie photonique est &eacute;lev&eacute;e, il se peut qu&rsquo;il soit n&eacute;cessaire d&rsquo;ajouter une &eacute;paisseur de mat&eacute;riau devant le dosim&egrave;tre pour mesurer <em>H<sub>p,c</sub></em>(0,07) et <em>H<sub>e,c</sub></em>, afin de maintenir l&rsquo;&eacute;quilibre des particules charg&eacute;es.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appB-6"></div>
<h3 id="appB-6">B.6 &Eacute;nergie b&ecirc;ta</h3>  <p>On doit utiliser les sources b&ecirc;ta standard indiqu&eacute;es dans le tableau B.1 pour les essais de type des dosim&egrave;tres servant &agrave; mesurer <em>H<sub>p</sub></em>(0,07) et <em>H<sub>e</sub></em> : </p>
<table className="">  <caption className="text-left">Tableau B.1 : Sources b&ecirc;ta standard</caption>  <tr>
<th className="text-center">Isotope</th>
<th className="text-center">Energie b&ecirc;ta maximale (keV)</th>  </tr>  <tr>
<td className="text-center"><sup>90</sup>Sr/<sup>90</sup>Y</td>
<td className="text-center">2 274</td>  </tr>  <tr>
<td className="text-center"><sup>85</sup>Kr ou <sup>204</sup>Tl</td>
<td className="text-center">763 ou 687</td>  </tr>  <tr>
<td className="text-center"><sup>147</sup>Pm</td>
<td className="text-center">225</td>  </tr>  </table>
<p>Il est &agrave; noter que pour les &eacute;nergies b&ecirc;ta interm&eacute;diaires, on utilisera soit du <sup>85</sup>Kr ou du <sup>204</sup>Tl. La norme ISO 6980[16] (ou la version la plus r&eacute;cente de cette r&eacute;f&eacute;rence) offre de plus amples renseignements au sujet de ces sources, &agrave; l&rsquo;exception du <sup>85</sup>Kr. Le fabricant de la source fournira les renseignements n&eacute;cessaires au sujet du <sup>85</sup>Kr. Ces sources sont disponibles sur le march&eacute; avec des &eacute;talonnages tra&ccedil;ables pour une irradiation &agrave; incidence normale. Dans le cas des dosim&egrave;tres d&rsquo;extr&eacute;mit&eacute;s irradi&eacute;s &agrave; des angles d&rsquo;incidence autres que l&rsquo;incidence normale, on peut utiliser les facteurs de d&eacute;pendance angulaire pour un fant&ocirc;me-plaque &eacute;quivalent en tissu. Les coefficients de conversion normalis&eacute;s &agrave; 0&deg; pour <em>H<sub>p</sub></em>(0,07) ont &eacute;t&eacute; publi&eacute;s pour d&rsquo;autres angles d&rsquo;incidence (voir, par exemple, le rapport de la Communaut&eacute; europ&eacute;enne intitul&eacute; <span lang="en"><em>Technical Recommendations for Monitoring Individuals Occupationally Exposed to External Radiation</em></span> [17]).</p>   <p>La mesure pr&eacute;cise de <em>H<sub>p</sub></em>(0,07) et <em>H<sub>e</sub></em> pour le rayonnement b&ecirc;ta devient de plus en plus difficile &agrave; obtenir au fur et &agrave; mesure que diminue l&rsquo;&eacute;nergie b&ecirc;ta et qu&rsquo;augmente l&rsquo;angle d&rsquo;incidence. La norme g&eacute;n&eacute;rale indiqu&eacute;e dans la section 4.1.2, &laquo; &Eacute;quivalent de dose minimal mesurable &raquo; et dans le tableau 1 de la, section 4.1.3, &laquo; Normes d&rsquo;exactitudes et limites d&rsquo;incertitude &raquo; s&rsquo;appliquera donc ainsi :</p>   <p><strong>Pour le rayonnement b&ecirc;ta du <sup>90</sup>Sr/<sup>90</sup>Y:</strong> Les r&eacute;ponses &agrave; tous les angles d&rsquo;incidence indiqu&eacute;s dans la section B.4, &laquo; Angle d&rsquo;incidence du rayonnement &raquo; doivent &ecirc;tre utilis&eacute;e dans  le calcul de la r&eacute;ponse moyenne.</p>   <p><strong>Pour le rayonnement b&ecirc;ta du <sup>85</sup>Kr ou <sup>204</sup>Tl:</strong> La r&eacute;ponse &agrave; 0&deg; doit &ecirc;tre utilis&eacute;e dans le calcul de la r&eacute;ponse moyenne. Cependant,  la r&eacute;ponse doit &ecirc;tre mesur&eacute;e aux autres angles indiqu&eacute;s dans la section B.4, &laquo; Angle d&rsquo;incidence du rayonnement &raquo;.</p>   <p><strong>Pour le rayonnement b&ecirc;ta <sup>147</sup>Pm:</strong> La r&eacute;ponse doit &ecirc;tre mesur&eacute;e aux angles indiqu&eacute;s dans la section B.4, &laquo; Angle d&rsquo;incidence du rayonnement &raquo;. Cependant, les donn&eacute;es n&rsquo;ont pas besoin d&rsquo;&ecirc;tre utilis&eacute;es dans le calcul de la r&eacute;ponse moyenne.</p>   <p>On &eacute;tablit s&eacute;par&eacute;ment les r&eacute;ponses relatives moyennes et les incertitudes types pour les photons et les rayons b&ecirc;ta aux fins de comparaison avec les exigences d&eacute;finies par l&rsquo;&eacute;quation (14) de la section A.3, &laquo; Exactitude et pr&eacute;cision &raquo; de l&rsquo;annexe A, &laquo; Exactitude et incertitude en dosim&eacute;trie externe &raquo;.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appC"></div>
<h2 id="appC">Annexe C : Normes relatives aux essais ind&eacute;pendants en dosim&eacute;trie photonique externe</h2>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appC-1"></div>
<h3 id="appC-1">C.1 Introduction</h3>  <p>Outre le programme interne de syst&egrave;me de gestion d&eacute;crit dans la section 5.0, &laquo; Exigences en mati&egrave;re de syst&egrave;me de gestion&raquo;, des essais ind&eacute;pendants doivent &ecirc;tre effectu&eacute;s, suivant la description qui en est donn&eacute;e dans la section 4.1.6, &laquo; Essais ind&eacute;pendants &raquo;.</p>   <p>Les services de dosim&eacute;trie qui sont pr&ecirc;ts &agrave; se soumettre &agrave; des essais ind&eacute;pendants doivent prendre des arrangements directement avec le personnel du centre de r&eacute;f&eacute;rence en &eacute;talonnage appropri&eacute; (voir l&rsquo;annexe J). Les services qui utilisent des dosim&egrave;tres devant faire l&rsquo;objet d&rsquo;un traitement (des dosim&egrave;tres thermoluminescents [DTL], par exemple) doivent suivre le protocole d&eacute;crit dans la section C.2, &laquo; Protocole relatif aux dosim&egrave;tres devant faire l&rsquo;objet d&rsquo;un traitement &raquo;. Les services de dosim&eacute;trie qui utilisent des dosim&egrave;tres n&rsquo;exigeant pas de traitement (des dosim&egrave;tres &eacute;lectroniques, par exemple) doivent plut&ocirc;t suivre le protocole d&eacute;crit dans la section C.3, &laquo; Protocole relatif aux dosim&egrave;tres n&rsquo;exigeant pas de traitement &raquo;. Bien que, dans la section C.3, d&eacute;crit sp&eacute;cifiquement l&rsquo;utilisation des unit&eacute;s de kerma de l&rsquo;air, les services de dosim&eacute;trie peuvent choisir des unit&eacute;s correspondantes d&rsquo;exposition, s&rsquo;ils le pr&eacute;f&egrave;rent, apr&egrave;s avoir consult&eacute; le personnel du centre de r&eacute;f&eacute;rence en &eacute;talonnage.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appC-2"></div>
<h3 id="appC-2">C.2	Protocole relatif aux dosim&egrave;tres devant faire l&rsquo;objet d&rsquo;un traitement</h3>
<ol>
<li>S&rsquo;il y a lieu, le service de dosim&eacute;trie doit &eacute;tablir un facteur de conversion de <em>H<sub>p</sub></em>(10) (selon les mesures de dosim&egrave;tres sur fant&ocirc;me) au kerma de l&rsquo;air libre-dans-l&rsquo;air (ou &agrave; l&rsquo;exposition libre-dans-l&rsquo;air) produit par un rayonnement gamma au <sup>60</sup>Co. Cette op&eacute;ration est n&eacute;cessaire, puisque le centre de r&eacute;f&eacute;rence en &eacute;talonnage fait des irradiations libres-dans-l&rsquo;air.</li>
<li>Avant la d&eacute;livrance du permis puis &agrave; intervalles r&eacute;guliers, au moins une fois tous les 12 mois, chaque service de dosim&eacute;trie doit faire parvenir au centre de r&eacute;f&eacute;rence en &eacute;talonnage au moins 50 dosim&egrave;tres d&eacute;sign&eacute;s par unit&eacute; de traitement examin&eacute;e, plus un nombre suffisant de dosim&egrave;tres de contr&ocirc;le pour la proc&eacute;dure de relev&eacute;. Pour chaque unit&eacute; soumise &agrave; des essais, le personnel du centre d&rsquo;&eacute;talonnage r&eacute;partira les dosim&egrave;tres remis en au moins 10 groupes d&rsquo;au moins 5 dosim&egrave;tres chacun et il soumettra chacun de ces groupes de dosim&egrave;tres &agrave; une irradiation libre-dans-l&rsquo;air, avec un faisceau photonique au <sup>60</sup>Co selon des valeurs diff&eacute;rentes, mais connues, de kerma de l&rsquo;air situ&eacute;es entre 1,0 milligray (mGy) et 50 mGy. Le kerma re&ccedil;u par les dosim&egrave;tres ne sera pas r&eacute;v&eacute;l&eacute; &agrave; ce moment-l&agrave; au service de dosim&eacute;trie.</li>
<li>On renverra les dosim&egrave;tres de contr&ocirc;le et les dosim&egrave;tres irradi&eacute;s au service de dosim&eacute;trie pour qu&rsquo;ils soient trait&eacute;s suivant la proc&eacute;dure de routine qui y est appliqu&eacute;e. Le service de dosim&eacute;trie communiquera alors les r&eacute;sultats en unit&eacute;s de kerma de l&rsquo;air au centre de r&eacute;f&eacute;rence en &eacute;talonnage, apr&egrave;s les avoir corrig&eacute;s, s&rsquo;il y a lieu, &agrave; l&rsquo;aide du facteur indiqu&eacute; dans le paragraphe (1).</li>
<li>Le centre de r&eacute;f&eacute;rence en &eacute;talonnage comparera les r&eacute;sultats d&eacute;clar&eacute;s &agrave; ses propres valeurs du kerma de l&rsquo;air. Les  r&eacute;sultats (incluant les valeurs du service de dosim&eacute;trie et celles du centre de r&eacute;f&eacute;rence en &eacute;talonnage) seront communiqu&eacute;s &agrave; la CCSN, &agrave; l&rsquo;adresse indiqu&eacute;e ci-dessous, par le centre de r&eacute;f&eacute;rence en &eacute;talonnage, avec copie au service de dosim&eacute;trie. Cet essai aura &eacute;t&eacute; r&eacute;ussi dans la mesure oÃ¹ les r&eacute;sultats d&eacute;clar&eacute;s seront conformes aux crit&egrave;res &eacute;nonc&eacute;s dans la section 4.1.6, &laquo; Essais ind&eacute;pendants &raquo;.</li>
</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appC-3"></div>
<h3 id="appC-3">C.3	Protocole relatif aux dosim&egrave;tres n&rsquo;exigeant pas de traitement</h3>  <p>S&rsquo;il y a lieu, le service de dosim&eacute;trie qui utilise des dosim&egrave;tres n&rsquo;exigeant pas de traitement doit &eacute;tablir un facteur de conversion de <em>H<sub>p</sub></em>(10) (selon les mesures de dosim&egrave;tres sur fant&ocirc;me) au kerma de l&rsquo;air libre-dans-l&rsquo;air (ou l&rsquo;exposition libre-dans-l&rsquo;air) produit par un rayonnement gamma au <sup>60</sup>Co. Cette op&eacute;ration est n&eacute;cessaire, puisque le centre de r&eacute;f&eacute;rence en &eacute;talonnage fait des irradiations libres-dans-l&rsquo;air.</p>  <p>Avant la d&eacute;livrance du permis puis &agrave; intervalles r&eacute;guliers, au moins une fois tous les 12 mois, chaque service de dosim&eacute;trie doit envoyer au moins 10 dosim&egrave;tres d&eacute;sign&eacute;s au centre de r&eacute;f&eacute;rence en &eacute;talonnage. Le centre de r&eacute;f&eacute;rence en &eacute;talonnage soumettra au moins 10 groupes d&rsquo;au moins 5 dosim&egrave;tres chacun &agrave; une irradiation libre-dans-l&rsquo;air, avec un faisceau photonique au <sup>60</sup>Co selon des valeurs diff&eacute;rentes, mais connues, de kerma de l&rsquo;air situ&eacute;es entre 1,0 mGy et 50 mGy. Les dosim&egrave;tres de chaque groupe de 5 seront expos&eacute;s soit au m&ecirc;me kerma de l&rsquo;air soit &agrave; des kermas de l&rsquo;air diff&eacute;rents, mais dans un m&ecirc;me intervalle de valeurs. Au total, il y aura au moins 50 relev&eacute;s consign&eacute;s par le personnel du centre de r&eacute;f&eacute;rence en &eacute;talonnage. Du fait du nombre de dosim&egrave;tres soumis &agrave; l&rsquo;essai, un dosim&egrave;tre pourra &ecirc;tre irradi&eacute; plusieurs fois.</p>  <p>Le personnel du centre de r&eacute;f&eacute;rence en &eacute;talonnage corrigera les relev&eacute;s dosim&eacute;triques &agrave; l&rsquo;aide des facteurs de conversion &eacute;tablis en 1) ci-dessus et comparera les r&eacute;sultats aux valeurs de kerma de l&rsquo;air du centre d&rsquo;&eacute;talonnage. Les r&eacute;sultats (incluant les valeurs du service de dosim&eacute;trie et celles du centre d&rsquo;&eacute;talonnage) seront communiqu&eacute;s &agrave; la CCSN, &agrave; l&rsquo;adresse indiqu&eacute;e ci-dessous, par le centre de r&eacute;f&eacute;rence en &eacute;talonnage, avec copie au service de dosim&eacute;trie. Les dosim&egrave;tres seront renvoy&eacute;s au service de dosim&eacute;trie lorsque toutes les irradiations auront &eacute;t&eacute; effectu&eacute;es. Cet essai aura &eacute;t&eacute; r&eacute;ussi dans la mesure o&ugrave; les r&eacute;sultats d&eacute;clar&eacute;s seront conformes aux crit&egrave;res &eacute;nonc&eacute;s dans la section 4.1.6, &laquo; Essais ind&eacute;pendants &raquo;.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appC-4"></div>
<h3 id="appC-4">C.4	Rapport</h3>  <p>Le personnel du centre de r&eacute;f&eacute;rence en &eacute;talonnage communique les r&eacute;sultats des essais &agrave; la CCSN &agrave; l&rsquo;adresse suivante :</p>   <p>Sp&eacute;cialiste des permis pour les services de dosim&eacute;trie<br />
Commission canadienne de s&ucirc;ret&eacute; nucl&eacute;aire<br />
C.P. 1046, succursale B<br />
Ottawa (Ontario) K1P 5S9<br />
Canada</p>  <p>On pourra obtenir de plus amples renseignements sur ces essais en communiquant avec le centre de r&eacute;f&eacute;rence en &eacute;talonnage.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appD"></div>
<h2 id="appD">Annexe D : Normes relatives aux essais ind&eacute;pendants en dosim&eacute;trie des extr&eacute;mit&eacute;s</h2>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appD-1"></div>
<h3 id="appD-1">D.1 Introduction</h3>  <p>Outre le programme interne de syst&egrave;me de gestion d&eacute;crit dans la section 5.0, &laquo; Exigences en mati&egrave;re de syst&egrave;me de gestion&raquo;, des essais ind&eacute;pendants doivent &ecirc;tre effectu&eacute;s, suivant la description qui en est donn&eacute;e dans la section 4.1.6, &laquo; Essais ind&eacute;pendants &raquo;.</p>  <p>Les services de dosim&eacute;trie qui sont pr&ecirc;ts &agrave; se soumettre &agrave; des essais ind&eacute;pendants doivent prendre des arrangements directement avec le personnel du centre de r&eacute;f&eacute;rence en &eacute;talonnage appropri&eacute; (voir l&rsquo;annexe J).  Les services qui utilisent des dosim&egrave;tres devant faire l&rsquo;objet d&rsquo;un traitement (des dosim&egrave;tres thermoluminescents [DTL], par exemple) doivent suivre le protocole d&eacute;crit dans la section D.2., &laquo; Protocole relatif aux dosim&egrave;tres devant faire l&rsquo;objet d&rsquo;un traitement &raquo;. Les services de dosim&eacute;trie qui utilisent des dosim&egrave;tres n&rsquo;exigeant pas de traitement (des dosim&egrave;tres &eacute;lectroniques, par exemple) doivent plut&ocirc;t suive le protocole d&eacute;crit dans la section D.3, &laquo; Protocole relatif aux dosim&egrave;tres n&rsquo;exigeant pas de traitement &raquo;. </p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appD-2"></div>
<h3 id="appD-2">D.2	Protocole relatif aux dosim&egrave;tres devant faire l&rsquo;objet d&rsquo;un traitement</h3>  <p>Avant la d&eacute;livrance du permis puis &agrave; intervalles r&eacute;guliers, au moins une fois tous les 12 mois, chaque service de dosim&eacute;trie doit faire parvenir au centre de r&eacute;f&eacute;rence en &eacute;talonnage au moins 25 dosim&egrave;tres d&rsquo;extr&eacute;mit&eacute;s d&eacute;sign&eacute;s par unit&eacute; de traitement examin&eacute;e, plus un nombre suffisant de dosim&egrave;tres de contr&ocirc;le pour la proc&eacute;dure de relev&eacute;. Pour chaque unit&eacute; soumise &agrave; des essais, le personnel du centre d&rsquo;&eacute;talonnage r&eacute;partira les dosim&egrave;tres remis en au moins 5 groupes d&rsquo;au moins 5 dosim&egrave;tres chacun et il soumettra chacun de ces groupes de dosim&egrave;tres &agrave; une irradiation correspondant &agrave; une dose absorb&eacute;e par un tissu mou situ&eacute;e entre 10 mGy et 90 mGy, &agrave; une profondeur de 7 mg/cm<sup>2</sup> , &agrave; l&rsquo;aide de sa source <sup>90</sup>Sr&ndash;<sup>90</sup>Y. Les doses appliqu&eacute;es aux dosim&egrave;tres ne seront pas r&eacute;v&eacute;l&eacute;es &agrave; ce moment-l&agrave; au service de dosim&eacute;trie.</p>   <p>On renverra les dosim&egrave;tres de contr&ocirc;le et les dosim&egrave;tres irradi&eacute;s au service de dosim&eacute;trie pour qu&rsquo;ils soient trait&eacute;s suivant la proc&eacute;dure de routine qui y est appliqu&eacute;e. Le service de dosim&eacute;trie communiquera alors les r&eacute;sultats en unit&eacute;s de dose absorb&eacute;e au centre de r&eacute;f&eacute;rence en &eacute;talonnage.</p>
<p>Le centre de r&eacute;f&eacute;rence en &eacute;talonnage comparera les doses d&eacute;clar&eacute;es aux doses qui ont &eacute;t&eacute; appliqu&eacute;es aux dosim&egrave;tres. Les r&eacute;sultats (incluant les valeurs du service de dosim&eacute;trie et celles du centre de r&eacute;f&eacute;rence en &eacute;talonnage) seront communiqu&eacute;s &agrave; la CCSN (voir l&rsquo;adresse &agrave; la section D4, &laquo; Rapport &raquo; ci-dessous) par le centre de r&eacute;f&eacute;rence, avec copie au service de dosim&eacute;trie. Cet essai aura &eacute;t&eacute; r&eacute;ussi dans la mesure o&ugrave; les r&eacute;sultats d&eacute;clar&eacute;s seront conformes aux crit&egrave;res &eacute;nonc&eacute;s dans la section 4.1.6, &laquo; Essais ind&eacute;pendants &raquo;.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appD-3"></div>
<h3 id="appD-3">D.3	Protocole relatif aux dosim&egrave;tres n&rsquo;exigeant pas de traitement</h3>  <p>Avant d&eacute;livrance du permis puis &agrave; intervalles r&eacute;guliers, au moins une fois tous les 12 mois, chaque service de dosim&eacute;trie doit faire parvenir au moins 10 dosim&egrave;tres au centre de r&eacute;f&eacute;rence en &eacute;talonnage. Le centre de r&eacute;f&eacute;rence en &eacute;talonnage soumettra les dosim&egrave;tres &agrave; des irradiations correspondant &agrave; des doses absorb&eacute;es par un tissu mou diff&eacute;rentes mais connues, situ&eacute;es entre 10 mGy et 90,0 mGy, &agrave; une profondeur de 7 mg/cm<sup>2</sup>, &agrave; l&rsquo;aide de sa source <sup>90</sup>Sr&ndash;<sup>90</sup>Y.</p>  <p>Le centre de r&eacute;f&eacute;rence en &eacute;talonnage comparera les r&eacute;sultats aux doses qui ont &eacute;t&eacute; appliqu&eacute;es aux dosim&egrave;tres. Les r&eacute;sultats (incluant les valeurs du service de dosim&eacute;trie et celles du centre de r&eacute;f&eacute;rence en &eacute;talonnage) seront communiqu&eacute;s &agrave; la CCSN (voir l&rsquo;adresse ci-dessous) par le centre de r&eacute;f&eacute;rence, avec copie au service de dosim&eacute;trie. Les dosim&egrave;tres seront renvoy&eacute;s au service de dosim&eacute;trie lorsque toutes les irradiations auront &eacute;t&eacute; effectu&eacute;es. Cet essai aura &eacute;t&eacute; r&eacute;ussi dans la mesure o&ugrave; les r&eacute;sultats d&eacute;clar&eacute;s seront conformes aux crit&egrave;res &eacute;nonc&eacute;s dans la section 4.1.6, &laquo; Essais ind&eacute;pendants &raquo;.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appD-4"></div>
<h3 id="appD-4">D.4	Rapport</h3>  <p>Le personnel du centre de r&eacute;f&eacute;rence en &eacute;talonnage communique les r&eacute;sultats des essais &agrave; la CCSN &agrave; l&rsquo;adresse suivante :</p>   <p>Sp&eacute;cialiste des permis pour les services de dosim&eacute;trie<br />
Commission canadienne de s&ucirc;ret&eacute; nucl&eacute;aire<br />
C.P. 1046, succursale B<br />
Ottawa (Ontario) K1P 5S9<br />
Canada</p>  <p>On pourra obtenir de plus amples renseignements sur ces essais en communiquant avec le centre de r&eacute;f&eacute;rence en &eacute;talonnage.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appE"></div>
<h2 id="appE">Annexe E : Normes relatives aux essais ind&eacute;pendants en dosim&eacute;trie neutronique</h2>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appE-1"></div>
<h3 id="appE-1">E.1 Introduction</h3>  <p>Outre le programme interne de syst&egrave;me de gestion d&eacute;crit dans la section 5.0, &laquo; Exigences en mati&egrave;re de syst&egrave;me de gestion&raquo; des essais ind&eacute;pendants doivent &ecirc;tre effectu&eacute;s, suivant la description qui en est donn&eacute;e dans la section 4.1.7.2, &laquo; Essais ind&eacute;pendants &raquo;.</p>   <p>Les services de dosim&eacute;trie qui sont pr&ecirc;ts &agrave; se soumettre &agrave; des essais ind&eacute;pendants doivent prendre des arrangements directement avec le personnel du centre de r&eacute;f&eacute;rence en &eacute;talonnage appropri&eacute;. Les services qui utilisent des dosim&egrave;tres devant faire l&rsquo;objet d&rsquo;un traitement (des d&eacute;tecteurs de traces nucl&eacute;aires, par exemple) devront suivre le protocole d&eacute;crit dans la section E.2, &laquo; Protocole relatif aux dosim&egrave;tres individuels devant faire l&rsquo;objet d&rsquo;un traitement &raquo;. Ceux qui emploient des dosim&egrave;tres n&rsquo;exigeant pas de traitement (des dosim&egrave;tres &eacute;lectroniques, par exemple) appliqueront plut&ocirc;t le protocole figurant dans la section E.3, &laquo; Protocole relatif aux dosim&egrave;tres individuels n&rsquo;exigeant pas de traitement &raquo;.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appE-2"></div>
<h3 id="appE-2">E.2 Protocole relatif aux dosim&egrave;tres individuels devant faire l&rsquo;objet d&rsquo;un traitement</h3>  <p>Avant la d&eacute;livrance du permis puis &agrave; intervalles r&eacute;guliers, au moins une fois  tous les 12 mois, chaque service de dosim&eacute;trie doit faire parvenir au centre de r&eacute;f&eacute;rence en &eacute;talonnage au moins 10 dosim&egrave;tres d&eacute;sign&eacute;s, plus un nombre suffisant de dosim&egrave;tres de contr&ocirc;le pour la proc&eacute;dure de relev&eacute;. Le personnel du centre d&rsquo;&eacute;talonnage r&eacute;partira les dosim&egrave;tres remis en 2 groupes d&rsquo;au moins 5 dosim&egrave;tres chacun et il soumettra chacun de ces groupes de dosim&egrave;tres plac&eacute;s dans un champ neutronique <sup>241</sup>Am&ndash;Be &agrave; des valeurs diff&eacute;rentes mais connues de <em>H<sub>p</sub></em>(10) dues aux neutrons situ&eacute;es entre 1 mSv et 10 mSv. Les valeurs des doses appliqu&eacute;es ne seront pas r&eacute;v&eacute;l&eacute;es &agrave; ce moment-l&agrave; au service de dosim&eacute;trie.</p>   <p>On renverra les dosim&egrave;tres de contr&ocirc;le et les dosim&egrave;tres irradi&eacute;s au service de dosim&eacute;trie pour qu&rsquo;ils soient trait&eacute;s suivant la proc&eacute;dure de routine qui y est appliqu&eacute;e. Le service communiquera alors les r&eacute;sultats au centre de r&eacute;f&eacute;rence en &eacute;talonnage.</p>
<p>Le centre de r&eacute;f&eacute;rence en &eacute;talonnage comparera les doses d&eacute;clar&eacute;es aux doses qui ont &eacute;t&eacute; appliqu&eacute;es aux dosim&egrave;tres. Les r&eacute;sultats (incluant les valeurs du service de dosim&eacute;trie et celles du centre de r&eacute;f&eacute;rence en &eacute;talonnage) seront communiqu&eacute;s &agrave; la CCSN (voir l&rsquo;adresse ci-dessous) par le centre d&rsquo;&eacute;talonnage, avec copie au service de dosim&eacute;trie. Cet essai aura &eacute;t&eacute; r&eacute;ussi dans la mesure o&ugrave; les r&eacute;sultats d&eacute;clar&eacute;s seront conformes aux crit&egrave;res &eacute;nonc&eacute;s dans la section 4.1.7, &laquo; Exigences pour les services de dosim&eacute;trie neutronique de routine &raquo;.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appE-3"></div>
<h3 id="appE-3">E.3 Protocole relatif aux dosim&egrave;tres individuels n&rsquo;exigeant pas de traitement</h3>  <p>Avant la d&eacute;livrance du permis puis &agrave; intervalles r&eacute;guliers d&rsquo;au moins une fois tous les 12 mois, chaque service de dosim&eacute;trie doit faire parvenir au centre de r&eacute;f&eacute;rence en &eacute;talonnage un &eacute;chantillon repr&eacute;sentatif des dosim&egrave;tres d&eacute;sign&eacute;s. Le personnel du centre d&rsquo;&eacute;talonnage soumettra chacun de ces dosim&egrave;tres plac&eacute;s dans un champ neutronique Am-Be &agrave; deux valeurs diff&eacute;rentes mais connues de <em>H<sub>p</sub></em>(10) dues aux neutrons situ&eacute;es entre 1 mSv et 10 mSv.</p>   <p>Le centre de r&eacute;f&eacute;rence en &eacute;talonnage comparera les doses d&eacute;clar&eacute;es aux doses qui ont &eacute;t&eacute; appliqu&eacute;es aux dosim&egrave;tres. Les r&eacute;sultats (incluant les valeurs du service de dosim&eacute;trie et celles du centre de r&eacute;f&eacute;rence en &eacute;talonnage) seront communiqu&eacute;s &agrave; la CCSN (voir l&rsquo;adresse ci-dessous) par le centre d&rsquo;&eacute;talonnage, avec copie au service de dosim&eacute;trie. Les dosim&egrave;tres seront retourn&eacute;s au service de dosim&eacute;trie lorsque toutes les irradiations auront &eacute;t&eacute; effectu&eacute;es. Cet essai aura &eacute;t&eacute; r&eacute;ussi dans la mesure o&ugrave; les r&eacute;sultats d&eacute;clar&eacute;s seront conformes aux crit&egrave;res &eacute;nonc&eacute;s dans la section 4.1.7, &laquo; Exigences pour les services de dosim&eacute;trie neutronique de routine &raquo;.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appE-4"></div>
<h3 id="appE-4">E.4	Rapport</h3>  <p>Le personnel du centre de r&eacute;f&eacute;rence en &eacute;talonnage communique les r&eacute;sultats des essais &agrave; la CCSN &agrave; l&rsquo;adresse suivante :</p>   <p>Sp&eacute;cialiste des permis pour les services de dosim&eacute;trie<br />
Commission canadienne de s&ucirc;ret&eacute; nucl&eacute;aire<br />
C.P. 1046, succursale B<br />
Ottawa (Ontario) K1P 5S9<br />
Canada</p>  <p>On pourra obtenir de plus amples renseignements sur ces essais en communiquant avec le centre de r&eacute;f&eacute;rence en &eacute;talonnage.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appF"></div>
<h2 id="appF">Annexe F : Normes relatives aux essais ind&eacute;pendants en dosim&eacute;trie interne</h2>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appF-1"></div>
<h3 id="appF-1">F.1 Introduction</h3>  <p>Outre le programme interne de syst&egrave;me de gestion d&eacute;crit dans la section 5.0, &laquo; Exigences en mati&egrave;re de syst&egrave;me de gestion&raquo;, des essais ind&eacute;pendants doivent &ecirc;tre effectu&eacute;s, suivant la description qui en est donn&eacute;e dans les sections 4.2.4, &laquo; Essais ind&eacute;pendants pour les mesures <em>in vitro</em> &raquo; et 4.2.6, &laquo; Essais ind&eacute;pendants pour les mesures <em>in vivo</em> &raquo;.</p>   <p>Les services de dosim&eacute;trie doivent prendre des arrangements directement avec le centre de r&eacute;f&eacute;rence en &eacute;talonnage comp&eacute;tent pour participer &agrave; ces essais ind&eacute;pendants.</p>   <p>Lorsque les essais sont termin&eacute;s et que leurs r&eacute;sultats ont &eacute;t&eacute; analys&eacute;s, le personnel du centre de r&eacute;f&eacute;rence en &eacute;talonnage fait parvenir &agrave; la CCSN un rapport contenant  l&rsquo;identit&eacute; de chacun des services de dosim&eacute;trie participants et les r&eacute;sultats obtenus par chacun de ces services correspondants. Lorsque le centre de r&eacute;f&eacute;rence en &eacute;talonnage constate qu&rsquo;un service de dosim&eacute;trie interne agr&eacute;&eacute; a &eacute;chou&eacute; &agrave; un essai ind&eacute;pendant, il en avise la CCSN et le service de dosim&eacute;trie impliqu&eacute;. Le centre de r&eacute;f&eacute;rence en &eacute;talonnage remet &eacute;galement &agrave; chaque laboratoire participant un rapport sur les r&eacute;sultats des essais, dans lequel les laboratoires participants sont d&eacute;sign&eacute;s par un code.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appF-2"></div>
<h3 id="appF-2">F.2	Essais ind&eacute;pendants relatifs aux relev&eacute;s <em>in vitro</em></h3>  <p>Outre la d&eacute;livrance du permis puis &agrave; intervalles r&eacute;guliers d&rsquo;au moins une fois  &agrave; tous les 12 mois, ou &agrave; toute autre fr&eacute;quence d&eacute;termin&eacute;e en consultation avec la CCSN, le centre de r&eacute;f&eacute;rence en &eacute;talonnage remet &agrave; chaque laboratoire participant des &eacute;chantillons r&eacute;els et &agrave; blanc appropri&eacute;s. (Les services de dosim&eacute;trie sont mis &agrave; contribution pour chacun des radionucl&eacute;ides d&rsquo;int&eacute;r&ecirc;t.) Le service de dosim&eacute;trie analyse les &eacute;chantillons selon un calendrier fourni par le centre de r&eacute;f&eacute;rence en &eacute;talonnage. Les r&eacute;sultats sont consign&eacute;s sur un formulaire de d&eacute;claration type et renvoy&eacute;s au centre de r&eacute;f&eacute;rence en &eacute;talonnage. Lorsque les r&eacute;ponses de tous les laboratoires ont &eacute;t&eacute; re&ccedil;ues, le centre de r&eacute;f&eacute;rence en &eacute;talonnage analyse les r&eacute;sultats et produit un rapport dans lequel chaque laboratoire est d&eacute;sign&eacute; par un code. Le centre de r&eacute;f&eacute;rence en &eacute;talonnage informe chaque laboratoire de son propre code et transmet &agrave; la CCSN une liste des codes de tous les services de dosim&eacute;trie (titulaires et demandeurs de permis).</p>   <p>On peut obtenir d&rsquo;autres d&eacute;tails sur les essais ind&eacute;pendants et la m&eacute;thode d&rsquo;analyse en s&rsquo;adressant au centre de r&eacute;f&eacute;rence en &eacute;talonnage. Les services de dosim&eacute;trie doivent se soumettre &agrave; ces essais ind&eacute;pendants et obtenir la note de passage avant de recevoir un permis de la CCSN. Par la suite, ils s&rsquo;acquitteront de cette obligation au moins une fois par an, ou &agrave; toute autre fr&eacute;quence d&eacute;termin&eacute;e en consultation avec la CCSN, pour d&eacute;montrer qu&rsquo;ils sont toujours capables de produire des r&eacute;sultats satisfaisants. La proc&eacute;dure devra &ecirc;tre reprise si des modifications sont apport&eacute;es au mat&eacute;riel ou &agrave; la m&eacute;thode de mesure, lorsque ces modifications sont susceptibles d&rsquo;avoir une incidence n&eacute;gative sur la pr&eacute;cision, l&rsquo;exactitude et la fiabilit&eacute; des mesures.</p>   <p>Les essais ind&eacute;pendants relatifs au biodosage <em>in vitro</em> devront respecter les exigences suivantes :</p>
<ol>
<li>Chaque laboratoire re&ccedil;oit jusqu&rsquo;&agrave; cinq aliquotes de chaque &eacute;chantillon trait&eacute; (ensemenc&eacute; d&rsquo;une quantit&eacute; connue d&rsquo;activit&eacute;)  aussi bien qu&rsquo;un &eacute;chantillon &agrave; blanc d&rsquo;urine &agrave; partir duquel les &eacute;chantillons  ont &eacute;t&eacute; pr&eacute;par&eacute;s;</li>
<li>L&rsquo;extinction de couleur peut &ecirc;tre renforc&eacute;e pour certains &eacute;chantillons;</li>
<li>les essais ind&eacute;pendants pour les mesures <em>in vitro</em> des produits de fission/d&rsquo;activation, peuvent inclure jusqu&rsquo;&agrave; trois radionucl&eacute;ides, qui peuvent varier d&rsquo;une ann&eacute;e &agrave; l&rsquo;autre;</li>
<li>Pour un essai donn&eacute;, les aliquotes des m&ecirc;mes &eacute;chantillons sont envoy&eacute;es  &agrave; tous les laboratoires participants; et</li>
<li>Les instructions pour les analyses d&rsquo;&eacute;chantillons ainsi que la date de l&rsquo;ensemencement sont fournies avec les &eacute;chantillons.</li>
</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appF-3"></div>
<h3 id="appF-3">F.3	Essais ind&eacute;pendants relatifs aux relev&eacute;s <em>in vivo</em></h3>  <p>Le centre de r&eacute;f&eacute;rence en &eacute;talonnage dispose de fant&ocirc;mes fabriqu&eacute;s dans un mat&eacute;riau &eacute;quivalent au tissu organique pour une diversit&eacute; de radionucl&eacute;ides dans les poumons, de fant&ocirc;mes cervicaux pour le <sup>125</sup>I et le <sup>131</sup>I dans la thyro&iuml;de et de fant&ocirc;mes BOMAB (BOttle MAnikin ABsorption) remplis d&rsquo;eau et de taille variable pour les &eacute;nergies photoniques sup&eacute;rieures.</p>  <p>Avant la d&eacute;livrance du permis puis &agrave; intervalles r&eacute;guliers, au moins une fois tous les 12 mois, ou &agrave; toute autre fr&eacute;quence autoris&eacute;e par la CCSN, le service de dosim&eacute;trie doit se soumettre &agrave; des essais ind&eacute;pendants afin de d&eacute;montrer qu&rsquo;il est toujours capable de produire des r&eacute;sultats satisfaisants. Si, des modifications importantes sont apport&eacute;es au mat&eacute;riel ou &agrave; la m&eacute;thode de mesure, pouvant avoir une incidence n&eacute;gative sur la pr&eacute;cision, l&rsquo;exactitude et la fiabilit&eacute; des mesures,  apr&egrave;s que le service de dosim&eacute;trie a re&ccedil;u son permis, la m&eacute;thode ou le mat&eacute;riel de biodosage concern&eacute;s doivent &ecirc;tre soumis &agrave; un essai ind&eacute;pendant et le rapport doit avoir &eacute;t&eacute; approuv&eacute; par la CCSN avant que le titulaire du permis puisse mettre en &oelig;uvre ces modifications importantes.</p>   <p>Les essais ind&eacute;pendants relatifs au biodosage <em>in vivo</em> devront respecter les exigences suivantes :</p>
<ol>
<li>Les m&eacute;langes de radionucl&eacute;ides utilis&eacute;s pour les mesures sur les fant&ocirc;mes sont limit&eacute;s &agrave; trois radionucl&eacute;ides choisis parmi ceux donn&eacute;s dans le Tableau 4 de la section 4.2, &laquo; Services de dosim&eacute;trie des rayonnements internes &raquo;, <sup>40</sup>K &eacute;tant exclu.</li>
<li>L&rsquo;emplacement de l&rsquo;activit&eacute; dans les fant&ocirc;mes est r&eacute;aliste (dans les poumons ou la r&eacute;gion gastrointestinale, par exemple).</li>
<li>Les radionucl&eacute;ides utilis&eacute;s dans les essais <em>in vivo</em> peuvent varier d&rsquo;un essai &agrave; un autre.</li>
<li>Les fant&ocirc;mes BOMAB remplis d&rsquo;eau qui sont utilis&eacute;s dans les essais in vivo contiennent tous du <sup>40</sup>K et couvrent l&rsquo;&eacute;ventail suivant :
<ol className="list-lower-alpha">
<li>fant&ocirc;me f&eacute;minin de r&eacute;f&eacute;rence</li>
<li>fant&ocirc;me masculin, 5<sup>e</sup> percentile</li>
<li>fant&ocirc;me masculin de r&eacute;f&eacute;rence</li>
<li>fant&ocirc;me masculin, 95<sup>e</sup> percentile.</li>
</ol></li>
</ol>  <p>Par ailleurs, afin que les essais soient repr&eacute;sentatifs de l&rsquo;&eacute;paisseur de la paroi de la cage  thoracique des individus en milieu de travail, il convient d&rsquo;utiliser des plaques de recouvrement dans les essais <em>in vivo</em>.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appF-4"></div>
<h3 id="appF-4">F.4	Rapport</h3>  <p>Le personnel du centre de r&eacute;f&eacute;rence en &eacute;talonnage communique les r&eacute;sultats des essais &agrave; la CCSN &agrave; l&rsquo;adresse suivante :</p>   <p>Sp&eacute;cialiste des permis pour les services de dosim&eacute;trie<br />
Commission canadienne de s&ucirc;ret&eacute; nucl&eacute;aire<br />
C.P. 1046, succursale B<br />
Ottawa (Ontario) K1P 5S9<br />
Canada</p>  <p>On pourra obtenir de plus amples renseignements sur ces essais en communiquant avec le centre de r&eacute;f&eacute;rence en &eacute;talonnage.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appG"></div>
<h2 id="appG">Annexe G : Normes relatives aux essais ind&eacute;pendants pour la mesure de l&rsquo;exposition au radon et aux produits de filiation du radon</h2>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appG-1"></div>
<h3 id="appG-1">G.1 Introduction</h3>  <p>Outre le programme interne de syst&egrave;me de gestion d&eacute;crit dans la section 5.0, &laquo; Exigences en mati&egrave;re de syst&egrave;me de gestion&raquo;, des essais ind&eacute;pendants doivent &ecirc;tre effectu&eacute;s, suivant la description qui en est donn&eacute;e dans les sections 4.3.5, &laquo; Essais ind&eacute;pendants pour la surveillance des produits de filiation du radon &raquo; et 4.3.8, &laquo; Essais ind&eacute;pendants pour les mesures de l&rsquo;exposition au radon &raquo;.</p>   <p>Les services de dosim&eacute;trie qui sont pr&ecirc;ts &agrave; se soumettre &agrave; des essais ind&eacute;pendants doivent prendre des arrangements directement avec le personnel du centre de r&eacute;f&eacute;rence en &eacute;talonnage appropri&eacute; (voir l&rsquo;annexe J).</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appG-2"></div>
<h3 id="appG-2">G.2	Protocole relatif aux moniteurs individuels</h3>  <p>Les appareils envoy&eacute;s doivent Ãªtre propres, exempts de contamination et en bon &eacute;tat de marche. Le fonctionnement g&eacute;n&eacute;ral d&rsquo;un syst&egrave;me doit &ecirc;tre conforme, sur le plan de l&rsquo;exactitude, aux normes indiqu&eacute;es dans le tableau 7 de la section 4.3.3, &laquo; Normes d&rsquo;exactitude pour les mesures de l&rsquo;exposition aux produits de filiation du radon &raquo;, pour les produits de filiation du radon, et dans le tableau 9 de la section 4.3.6, &laquo; Normes d&rsquo;exactitude pour les mesures de l&rsquo;exposition au radon &raquo;, pour le radon. Le service de dosim&eacute;trie doit effectuer les arrangements n&eacute;cessaires avec le centre de r&eacute;f&eacute;rence en &eacute;talonnage avant d&rsquo;y envoyer ses appareils.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appG-3"></div>
<h3 id="appG-3">G.3	&Eacute;chantillonnage instantan&eacute;</h3>  <p>Des essais ind&eacute;pendants sont &eacute;galement exig&eacute;s pour les services de dosim&eacute;trie qui ont recours &agrave; l&rsquo;&eacute;chantillonnage instantan&eacute; pour d&eacute;terminer l&rsquo;exposition des travailleurs aux produits de filiation du radon et au radon. L&rsquo;&eacute;chantillonnage instantan&eacute; visant &agrave; d&eacute;terminer l&rsquo;exposition au radon est r&eacute;alis&eacute; dans les cas o&ugrave; les concentrations de radon dans l&rsquo;air sont &eacute;lev&eacute;es, mais o&ugrave; il n&rsquo;y a pas de pr&eacute;sence simultan&eacute;e de produits de filiation du radon (c&rsquo;est-&agrave;-dire que le gaz n&rsquo;a pas le temps de se d&eacute;sint&eacute;grer de mani&egrave;re significative). Dans les cas o&ugrave; le radon a le temps de se d&eacute;sint&eacute;grer, on suppose que l&rsquo;air sera &eacute;chantillonn&eacute; en vue de d&eacute;terminer les produits de filiation du radon.</p>
<p>La d&eacute;termination de l&rsquo;exposition aux produits de filiation du radon par &eacute;chantillonnage instantan&eacute; comporte plusieurs &eacute;tapes. Il faut tout d&rsquo;abord recueillir les a&eacute;rosols sur un filtre, pendant une courte p&eacute;riode de temps, puis mesurer la radioactivit&eacute; des a&eacute;rosols, et enfin calculer le rayonnement alpha potentiel [unit&eacute; alpha (WL), ou &micro;J/m<sup>3</sup>] d&ucirc; aux produits de filiation du radon &agrave; courte p&eacute;riode. Il faut &eacute;galement proc&eacute;der &agrave; l&rsquo;&eacute;talonnage de la ligne de pr&eacute;l&egrave;vement des &eacute;chantillons d&rsquo;air et du syst&egrave;me de comptage. La d&eacute;termination est une op&eacute;ration complexe et sujette &agrave; des erreurs associ&eacute;es aux appareils et &agrave; des variations dans la mise en &oelig;uvre de la m&eacute;thode de collecte par les techniciens qui effectuent la d&eacute;termination.</p>   <p>Il se peut qu&rsquo;il ne soit pas possible de mettre en &oelig;uvre un programme d&rsquo;essais ind&eacute;pendants classique pour v&eacute;rifier le rendement des syst&egrave;mes de mesure parce qu&rsquo;un tel programme exigerait que les syst&egrave;mes de mesure et toutes les m&eacute;thodes employ&eacute;es par les diff&eacute;rents techniciens soient v&eacute;rifi&eacute;s p&eacute;riodiquement au centre de r&eacute;f&eacute;rence en &eacute;talonnage de la CCSN. &Agrave; titre de mesure de remplacement, la CCSN d&eacute;signera un inspecteur dont les comp&eacute;tences en mati&egrave;re de mesure de l&rsquo;exposition aux produits de filiation du radon seront v&eacute;rifi&eacute;es une fois par an par le centre de r&eacute;f&eacute;rence en &eacute;talonnage. Les services de dosim&eacute;trie pourront faire v&eacute;rifier le rendement de leurs techniciens, une fois par an, selon l&rsquo;une ou l&rsquo;autre des deux m&eacute;thodes suivantes :</p>
<ol>
<li>L&rsquo;inspecteur de la CCSN d&eacute;sign&eacute; &eacute;value tous les techniciens de chaque service de dosim&eacute;trie; ou</li>
<li>La CCSN &eacute;value un technicien d&eacute;sign&eacute; repr&eacute;sentant le service de dosim&eacute;trie, dans la m&eacute;thode d&eacute;crite ci-dessus, et autorise ce technicien &agrave; &eacute;valuer &agrave; son tour tous les autres techniciens de ce service qui effectuent des &eacute;chantillonnages instantan&eacute;s &agrave; des fins de dosim&eacute;trie des produits de filiation du radon. Les r&eacute;sultats des &eacute;valuations doivent &ecirc;tre consign&eacute;s et conserv&eacute;s par le service de dosim&eacute;trie.</li>
</ol>  <p>Les &eacute;valuations d&eacute;crites ci-dessus exigent un minimum de 10 &eacute;chantillons. Les &eacute;carts entre les r&eacute;sultats du rendement global des appareils et des techniciens charg&eacute;s de l&rsquo;&eacute;chantillonnage doivent permettre au service de dosim&eacute;trie d&rsquo;&ecirc;tre conforme aux normes d&rsquo;exactitude indiqu&eacute;es dans le tableau 8 de la section 4.3.3, &laquo; Normes d&rsquo;exactitude pour les mesures de l&rsquo;exposition aux produits de filiation du radon &raquo; et dans le tableau 10 de la section 4.3.6, &laquo; Normes d&rsquo;exactitude pour les mesures de l&rsquo;exposition au radon &raquo;.</p>  <p>Les questions relatives &agrave; l&rsquo;&eacute;valuation directe des techniciens au sein du centre de r&eacute;f&eacute;rence en &eacute;talonnage doivent &ecirc;tre adress&eacute;es au centre de r&eacute;f&eacute;rence en &eacute;talonnage.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appG-4"></div>
<h3 id="appG-4">G.4	Rapport</h3>  <p>Dans le cas de moniteurs individuels, le personnel du centre de r&eacute;f&eacute;rence en &eacute;talonnage communique les r&eacute;sultats des essais &agrave; la CCSN &agrave; l&rsquo;adresse suivante :</p>   <p>Sp&eacute;cialiste des permis pour les services de dosim&eacute;trie<br />
Commission canadienne de s&ucirc;ret&eacute; nucl&eacute;aire<br />
C.P. 1046, succursale B<br />
Ottawa (Ontario) K1P 5S9<br />
Canada</p>  <p>Si la deuxi&egrave;me m&eacute;thode est utilis&eacute;e pour l&rsquo;&eacute;chantillonnage instantan&eacute;, le technicien d&eacute;sign&eacute; par le titulaire de permis doit signaler les r&eacute;sultats &agrave; la CCSN &agrave; l&rsquo;adresse indiqu&eacute;e pr&eacute;c&eacute;demment.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appH"></div>
<h2 id="appH">Annexe H : Exemples de calculs pour les mesures de la concentration minimale et incertitudes li&eacute;es au comptage</h2>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appH-1"></div>
<h3 id="appH-1">H.1 Exemple de calcul pour la d&eacute;termination de la concentration minimale mesurable</h3>  <p>L&rsquo;activit&eacute; volumique minimale mesurable, ou concentration minimale mesurable (MMC, de l&rsquo;anglais <em>Minimum Measurable Concentration</em>) dans l&rsquo;air varie selon les param&egrave;tres du syst&egrave;me de comptage et le volume de l&rsquo;&eacute;chantillon. L&rsquo;&eacute;quation suivante, &eacute;tablie par Strom et Stansbury[18], fait en sorte que la probabilit&eacute; de ne pas d&eacute;celer l&rsquo;activit&eacute; volumique est inf&eacute;rieure &agrave; 5 %. D&rsquo;autres &eacute;quations peuvent &ecirc;tre acceptables, selon la situation.</p>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<mi>M</mi><mi>M</mi><mi>C</mi><mo>=</mo><mfrac>
<mrow>
<mn>2,71</mn><mo>+</mo><mn>4,65</mn><msqrt>
<mrow>
<msub>
<mi>C</mi>
<mi>b</mi>
</msub>
</mrow>
</msqrt>
</mrow>
<mrow>
<msub>
<mi>T</mi>
<mi>c</mi>
</msub>
</mrow>
</mfrac>
<mo>&#x2217;</mo><mfrac>
<mn>1</mn>
<mrow>
<mi>E</mi><mo>&#x2217;</mo><mi>V</mi></mrow>
</mfrac>
</mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaamytaiaad2
eacaWGdbGaeyypa0ZaaSaaaeaacaaIYaGaaiOlaiaaiEdacaaIXaGa
ey4kaSIaaGinaiaac6cacaaI2aGaaGynamaakaaabaGaam4qamaaBa
aaleaacaWGIbaabeaaaeqaaaGcbaGaamivamaaBaaaleaacaWGJbaa
beaaaaGccqGHxiIkdaWcaaqaaiaaigdaaeaacaWGfbGaey4fIOIaam
Ovaaaaaaa@486D@
</annotation>   </semantics>  </math>
<p>o&ugrave;</p>  <p><em>C<sub>b</sub></em> = compte du fond naturel de rayonnement fourni par le d&eacute;tecteur<br />
<em>T<sub>c</sub></em> = temps de comptage en secondes<br />
<em>E</em> = efficacit&eacute; du d&eacute;tecteur en &laquo; coups &raquo; par seconde par Bq<br />
<em>V</em> = volume de l&rsquo;&eacute;chantillon en m<sup>3</sup></p>  <p>On peut obtenir une MMC de 0,05 Bq/m<sup>3</sup> en faisant varier les param&egrave;tres de l&rsquo;&eacute;quation. Par exemple, si le comptage du fond de rayonnement est de 250, le temps de comptage, de 3 600 secondes, l&rsquo;efficacit&eacute; du d&eacute;tecteur, de 0,35, et le volume de l&rsquo;&eacute;chantillon, de 1,2 m<sup>3</sup>, la valeur de MMC est alors :</p>  <p>MMC = 0,05 Bq/m<sup>3</sup></p>  <p>ce qui est une valeur acceptable.</p>  <p>Remarque : le volume de l&rsquo;&eacute;chantillon d&eacute;pend &agrave; la fois du d&eacute;bit de la pompe &agrave; pr&eacute;l&egrave;vement d&rsquo;&eacute;chantillons d&rsquo;air et de la dur&eacute;e de l&rsquo;&eacute;chantillonnage.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appH-2"></div>
<h3 id="appH-2">H.2 Exemple de calcul de l&rsquo;incertitude</h3>  <p>Si la diff&eacute;rence de taux de comptage, exprim&eacute;e en &laquo; coups &raquo; par minute (cpm), est de 2 ou plus, et que le nombre total de &laquo; coups &raquo; (&eacute;chantillon, plus fond naturel de rayonnement) est sup&eacute;rieur &agrave; 40, les &eacute;quations suivantes peuvent &ecirc;tre utilis&eacute;es pour calculer les limites o&ugrave; se situe le compte r&eacute;el (inconnu) 95 fois sur 100. [19], [20] </p>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<mi>L</mi><mi>i</mi><mi>m</mi><mi>i</mi><mi>t</mi><mi>e</mi><mi>&#x0020;</mi><mspace width="5px" /><mi>i</mi><mi>n</mi><mi>f</mi><mi>&eacute;</mi><mi>r</mi><mi>i</mi><mi>e</mi><mi>u</mi><mi>r</mi><mi>e</mi><mo>=</mo><mo stretchy=&#39;false&#39;>(</mo><msub>
<mi>C</mi>
<mi>t</mi>
</msub>
<mo>&#x2212;</mo><msub>
<mi>C</mi>
<mi>b</mi>
</msub>
<mo stretchy=&#39;false&#39;>)</mo><mo>-</mo><mn>1,96</mn><msqrt>
<mrow>
<msub>
<mi>C</mi>
<mi>t</mi>
</msub>
<mo>+</mo><msub>
<mi>C</mi>
<mi>b</mi>
</msub>
</mrow>
</msqrt>
</mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaamyvaiaadc
hacaWGWbGaamyzaiaadkhaiiGacqWFGaaicaWGSbGaamyAaiaad2ga
caWGPbGaamiDaiabg2da9iaacIcacaWGdbWaaSbaaSqaaiaadshaae
qaaOGaeyOeI0Iaam4qamaaBaaaleaacaWGIbaabeaakiaacMcacqGH
RaWkcaaIXaGaaiOlaiaaiMdacaaI2aWaaOaaaeaacaWGdbWaaSbaaS
qaaiaadshaaeqaaOGaey4kaSIaam4qamaaBaaaleaacaWGIbaabeaa
aeqaaaaa@4FE2@
</annotation>   </semantics>  </math>
<math display=&#39;block&#39;>   <semantics>
<mrow>
<mi>L</mi><mi>i</mi><mi>m</mi><mi>i</mi><mi>t</mi><mi>e</mi><mi>&#x0020;</mi><mspace width="5px" /><mi>s</mi><mi>u</mi><mi>p</mi><mi>&eacute;</mi><mi>r</mi><mi>i</mi><mi>e</mi><mi>u</mi><mi>r</mi><mi>e</mi><mo>=</mo><mo stretchy=&#39;false&#39;>(</mo><msub>
<mi>C</mi>
<mi>t</mi>
</msub>
<mo>&#x2212;</mo><msub>
<mi>C</mi>
<mi>b</mi>
</msub>
<mo stretchy=&#39;false&#39;>)</mo><mo>+</mo><mn>1,96</mn><msqrt>
<mrow>
<msub>
<mi>C</mi>
<mi>t</mi>
</msub>
<mo>+</mo><msub>
<mi>C</mi>
<mi>b</mi>
</msub>
</mrow>
</msqrt>
</mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaamyvaiaadc
hacaWGWbGaamyzaiaadkhaiiGacqWFGaaicaWGSbGaamyAaiaad2ga
caWGPbGaamiDaiabg2da9iaacIcacaWGdbWaaSbaaSqaaiaadshaae
qaaOGaeyOeI0Iaam4qamaaBaaaleaacaWGIbaabeaakiaacMcacqGH
RaWkcaaIXaGaaiOlaiaaiMdacaaI2aWaaOaaaeaacaWGdbWaaSbaaS
qaaiaadshaaeqaaOGaey4kaSIaam4qamaaBaaaleaacaWGIbaabeaa
aeqaaaaa@4FE2@
</annotation>   </semantics>  </math>
<p>o&ugrave;</p>  <p><em>C<sub>b</sub></em> = compte du fond naturel de rayonnement pour le temps de comptage de l&rsquo;&eacute;chantillon<br />
<em>C<sub>t</sub></em> = compte total<br />
<em>C<sub>t</sub>&ndash;C<sub>b</sub></em> = compte net</p>  <p>Par exemple, avec</p>
<ol>
<li>une valeur implicite de LAI de 3 190 Bq pour les poussi&egrave;res uranif&egrave;res et, par cons&eacute;quent, une valeur implicite de LDCA de 1,33 Bq m<sup>-3</sup>,</li>
<li>2000 h de travail par an et un rythme respiratoire de 1,2 m<sup>3</sup>/h;</li>
<li>un taux d&rsquo;&eacute;chantillonnage de 2,5 L min<sup>-1</sup> (2,5 x 10<sup>-3</sup> m<sup>3</sup> min<sup>-1</sup>);</li>
<li>une dur&eacute;e d&rsquo;&eacute;chantillonnage de 6 heures;</li>
<li>un rendement de comptage de 0,4;</li>
<li>un taux de comptage du fond naturel de rayonnement de 1 cpm; et</li>
<li>la concentration de mati&egrave;res radioactives en suspension est de 1/10 de la valeur implicite de la LDCA (0,133 Bq m<sup>-3</sup>),</li>
</ol>  <p>l&rsquo;activit&eacute; capt&eacute;e sur le filtre est</p>  <p>0,133 Bq m<sup>-3</sup> x 2.5 x 10<sup>-3</sup> m<sup>3</sup> min<sup>-1</sup> x 60 min h<sup>-1</sup> x 6 h = 0,120 Bq</p>  <p>et le taux de comptage total (&eacute;chantillon, plus fond naturel de rayonnement) est</p>  <p>1 cpm + (60 s min<sup>-1</sup> x 0,120 Bq x 0,4) = 3,87 cpm.</p>  <p>Si le comptage du fond naturel de rayonnement et de l&rsquo;&eacute;chantillon dure 20 minutes, le compte du fond naturel de rayonnement est alors de 20 et le compte d&rsquo;&eacute;chantillon (compte total) est</p>  <p>20 x 3,87 = 77 (valeur arrondie au nombre entier le plus proche)</p>  <p>Si on r&eacute;sout les &eacute;quations pr&eacute;c&eacute;dentes avec les valeurs pr&eacute;cit&eacute;es (C<sub>b</sub> = 20 et C<sub>t</sub> = 77), on obtient :</p>  <p>38 &agrave; la limite inf&eacute;rieure de l&rsquo;intervalle de confiance de 95%</p>  <p>76 &agrave; la limite sup&eacute;rieure de l&rsquo;intervalle de confiance de 95%</p>  <p>Ainsi, les probabilit&eacute;s sont de 95% que le comptage r&eacute;el soit sup&eacute;rieur &agrave; 38 et inf&eacute;rieur &agrave; 76.</p>  <p>&Eacute;tant donn&eacute; que 57 est la meilleure valeur estimative du comptage  r&eacute;el, les probabilit&eacute;s sont de 95 % que la mesure de la concentration de mati&egrave;res radioactives en suspension dans l&rsquo;air se situe entre - (57 - 38)/57 et + (76 - 57)/57, soit entre &plusmn; 33 %.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appI"></div>
<h2 id="appI">Annexe I : Normes relatives aux dossiers de doses</h2>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appI-1"></div>
<h3 id="appI-1">I.1 Introduction</h3>  <p>Tous les services de dosim&eacute;trie doivent soumettre leurs donn&eacute;es sur les doses au Fichier dosim&eacute;trique national (FDN), &agrave; intervalles r&eacute;guliers pr&eacute;cis&eacute;s dans le permis. Les exploitants de ces services doivent veiller &agrave; ce que les donn&eacute;es &agrave; transmettre au FDN soient sous une forme compatible avec le FDN.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appI-2"></div>
<h3 id="appI-2">I.2	Identification individuelle</h3>  <p>L&rsquo;identification individuelle doit &ecirc;tre sans ambigu&iuml;t&eacute;, ce qui m&egrave;ne n&eacute;cessairement &agrave; une certaine redondance. L&rsquo;information doit, au minimum, comporter les &eacute;l&eacute;ments suivants :</p>
<ol>
<li>le num&eacute;ro d&rsquo;assurance sociale (N.A.S.);</li>
<li>les noms de famille actuels et ant&eacute;rieurs;</li>
<li>le premier pr&eacute;nom (officiel, pas un surnom);</li>
<li>le deuxi&egrave;me pr&eacute;nom (officiel, pas un surnom);</li>
<li>le sexe;</li>
<li>la date de naissance (ann&eacute;e, mois, jour)</li>
<li>le lieu de naissance (province si l&rsquo;int&eacute;ress&eacute; est n&eacute; au Canada ou pays s&rsquo;il est n&eacute; &agrave; l&rsquo;&eacute;tranger); et</li>
<li>le code de profession ou la cat&eacute;gorie professionnelle.</li>
</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appI-3"></div>
<h3 id="appI-3">I.3	Donn&eacute;es sur les doses</h3>  <h4>I.3.1 Doses de sources externes</h4>  <p>Les relev&eacute;s de <em>H<sub>p</sub></em>(10) correspondent &agrave; la dose effective. Les relev&eacute;s de <em>H<sub>p</sub></em>(0,07) correspondent &agrave; la dose &eacute;quivalente &agrave; la peau.  Les relev&eacute;s des doses aux extr&eacute;mit&eacute;s ou au cristallin correspondent aux &eacute;quivalents de dose &agrave; ces tissus.</p>  <h4>I.3.2 Doses de sources internes</h4>  <p>On doit communiquer au Fichier dosim&eacute;trique national les estimations de doses de sources internes autres que celles qui sont mentionn&eacute;es dans la section 4.2, &laquo; Services de dosim&eacute;trie des rayonnements internes &raquo;, sans omettre d&rsquo;indiquer le radionucl&eacute;ide en cause et la dose efficace engag&eacute;e associ&eacute;e.</p>  <h4>I.3.3 Exposition au radon et aux produits de filiation du radon et incorporation de mati&egrave;res radioactives en suspension dans l&rsquo;air</h4>  <p>On doit indiquer les expositions aux produits de filiation du radon en unit&eacute;s alpha-mois (WLM) et les incorporations de radon et de mati&egrave;res radioactives en suspension dans l&rsquo;air en millisieverts (mSv)</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appI-4"></div>
<h3 id="appI-4">I.4	Renseignements &agrave; l&rsquo;appui</h3>  <p>Outre les donn&eacute;es sur les doses, les services de dosim&eacute;trie doivent conserver toutes les donn&eacute;es pertinentes utilis&eacute;es pour obtenir la valeur totale, selon le cas, de la dose, de l&rsquo;exposition ou de la concentration, telles que :</p>
<ol>
<li>les relev&eacute;s de dosim&egrave;tres individuels et les autres donn&eacute;es de mesure des rayonnements de source externe;</li>
<li>les mesures de l&rsquo;activit&eacute; d&rsquo;organes;</li>
<li>les estimations des incorporations de substances r&eacute;glement&eacute;es</li>
<li>la m&eacute;thode de mesure des concentrations dans les &eacute;chantillons de biodosage;</li>
<li>les formes chimiques;</li>
<li>les mod&egrave;les dosim&eacute;triques utilis&eacute;s;</li>
<li>les mesures de l&rsquo;exposition au radon et aux produits de filiation du radon;</li>
<li>les mesures de la concentration du radon et des produits de filiation du radon dans l&rsquo;air; et</li>
<li>la dur&eacute;e du s&eacute;jour des gens dans les lieux pr&eacute;cis d&rsquo;une mine</li>
</ol>  <p>On doit &eacute;galement conserver tout rapport d&rsquo;enqu&ecirc;te sur une surexposition ou sur toute autre dose inhabituelle.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appJ"></div>
<h2 id="appJ">Annexe J : Centres de r&eacute;f&eacute;rence en &eacute;talonnage</h2>  <p>Les organismes suivants sont agr&eacute;&eacute;s par la CCSN comme centres de r&eacute;f&eacute;rence en &eacute;talonnage pour les types de dosim&eacute;trie indiqu&eacute;s.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appJ-1"></div>
<h3 id="appJ-1">J.1	Essais ind&eacute;pendants en dosim&eacute;trie externe : dosim&eacute;trie photonique, dosim&eacute;trie des extr&eacute;mit&eacute;s et dosim&eacute;trie neutronique</h3>  <p>Conseil national de recherches du Canada</p>  <p>Personne-ressource :</p>  <p>Chef, Section des &eacute;talons de rayonnements ionisants<br />
Institut des &eacute;talons nationaux de mesure<br />
Conseil national de recherches du Canada<br />
Ottawa (Ontario) K1A 0R6<br />
Canada<br />
T&eacute;l&eacute;phone : (613) 993-2715<br />
<a href="http://www.nrc-cnrc.gc.ca/">www.nrc-cnrc.gc.ca</a></p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appJ-2"></div>
<h3 id="appJ-2">J.2	Essais ind&eacute;pendants pour les mesures <em>in vitro</em>, les mesures <em>in vivo</em> et l&rsquo;interpr&eacute;tation des biodosage</h3>  <p>Centre national de r&eacute;f&eacute;rence pour les essais biologiques et la surveillance in vivo, Sant&eacute; Canada</p>  <p>Personne-ressource :</p>  <p>Chef, Division des dangers des rayonnements du milieu<br />
Sant&eacute; Canada <br />
775, chemin Brookfield<br />
Ottawa (Ontario) K1A 1C1<br />
Canada<br />
T&eacute;l&eacute;phone : (613) 954-6672</p>
<p><a href="https://www.canada.ca/fr/sante-canada/services/sante-environnement-milieu-travail/sante-securite-travail/radiation-travail.html">https://www.canada.ca/fr/sante-canada/services/sante-environnement-milieu-travail/sante-securite-travail/radiation-travail.html</a></p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appJ-3"></div>
<h3 id="appJ-3">J.3	Essais ind&eacute;pendants en dosim&eacute;trie du radon et des produits de filiation du radon</h3>  <p>Bowser-Morner, Inc.</p>  <p>Personne-ressource :</p>  <p>Chef, Radon Reference Laboratory<br />
Bowser-Morner, Inc.<br />
4514 Taylorsville Road<br />
Dayton, OH 45424<br />
U.S.A.<br />
Telephone: 937-236-8805 ext. 259</p>  <p><a href="http://www.bowser-morner.com/radon-reference-lab">http://www.bowser-morner.com/radon-reference-lab</a></p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="glossary"></div>
<h2 id="glossary">Glossaire</h2>  <p>Les d&eacute;finitions des termes utilis&eacute;s dans le pr&eacute;sent document figurent dans le <a href="http://www.nuclearsafety.gc.ca/pubs_catalogue/uploads_fre/REGDOC-3-6-Glossary-of-CNSC-Terminology-fra.pdf">REGDOC-3.6, <em>Glossaire de la CCSN</em></a>, qui comprend des termes et des d&eacute;finitions tir&eacute;s dans la <a href="http://laws-lois.justice.gc.ca/fra/lois/N-28.3/"><em>Loi sur la s&ucirc;ret&eacute; et la r&eacute;glementation nucl&eacute;aires</em></a> (LSRN), de ses r&egrave;glements d&rsquo;application ainsi que des documents d&rsquo;application de la r&eacute;glementation et d&rsquo;autres publications de la CCSN. Le REGDOC-3.6 est fourni &agrave; titre de r&eacute;f&eacute;rence et pour information.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="ref"></div>
<h2 id="ref">R&eacute;f&eacute;rences</h2>  <ol>
<li>Commission internationale des unit&eacute;s et des mesures radiologiques (CIUMR), Rapport 47,  <span lang="en"><em>Measurement of Dose Equivalents from External Photon and Electron Radiations</em></span>, Bethesda, Maryland. 1992.</li>
<li>Commission internationale de protection radiologique (CIPR), Publication 103, (Annals of the ICRP Vol. 37/2-4), <em>2007 Recommandations 1990 de la Commission internationale de protection radiologique</em>. Oxford: Pergamon Press, 1991 (Annales de la CIPR, vol. 21/1-3).</li>
<li><em>Lignes directrices pour l&rsquo;audit des syst&egrave;mes de management de la qualit&eacute; et/ou de management environnemental</em>, CAN/CSA-ISO 19011-F03 (ISO 19011:2002). Association canadienne de normalisation, 2002.</li>
<li>Organisation internationale de normalisation (ISO). <em>Guide pour l&rsquo;expression de l&rsquo;incertitude de mesure</em>, 1995.</li>
<li>Hirning, C.R. et Yuen, P.S. &laquo; Accuracy in External Dosimetry of Ionizing Radiation &raquo;, Health Phys. 75(2):136-146; 1998.</li>
<li>CIPR. Publication 75, <span lang="en"><em>General Principles for the Radiation Protection of Workers</em></span>. Oxford, Pergamon Press, 1997 (Annales de la CIPR, vol. 27/1).</li>
<li>ISO 4037-3:1999 &ndash; <em>Rayonnements X et gamma de r&eacute;f&eacute;rence pour l&rsquo;&eacute;talonnage des dosim&egrave;tres et des d&eacute;bitm&egrave;tres, et pour la d&eacute;termination de leur r&eacute;ponse en fonction de l&rsquo;&eacute;nergie des photons &ndash; Partie 3 : &Eacute;talonnage des dosim&egrave;tres de zone (ou d&rsquo;ambiance) et individuels et d&eacute;termination de leur r&eacute;ponse en fonction de l&rsquo;&eacute;nergie et de l&rsquo;angle d&rsquo;incidence</em>.</li>
<li>Roberson, P.L., Eichner, F.N. et Reece, W.D. &laquo; <span lang="en">Determination of Photon Conversion Factors Relating Exposure and Dose for Several Extremity Phantom Designs</span> &raquo;, Health Phys. 57: 733-741; 1989.</li>
<li>Oxford Academic, Radiation Protection Dosimetry, Issue 3, Grosswendt, B. &laquo; <span lang="en">Angular Dependence Factors and Air Kerma to Dose Equivalent Conversion Coefficients for Cylindrical Phantoms Irradiated by Plane-Parallel Extended Monoenergetic Photon Beams</span> &raquo;, Radiat. Prot. Dosim. 59: 165-179; 1995.</li>
<li>Oxford Academic, Radiation Protection Dosimetry, Issue 3, Grosswendt, B. &laquo; Angular Dependence Factors and Air Kerma to Dose Equivalent Conversion Coefficients for 1.9 cm Rod and 7.3 cm Pillar Phantoms Irradiated by Extended Monodirectional X Ray Beams &raquo;, Radiat. Prot. Dosim. 59: 181-193; 1995.</li>
<li>Oxford Academic, Radiation Protection Dosimetry, Issue 59, Grosswendt, B. &laquo; <span lang="en">Air Kerma to Dose Equivalent Conversion Coefficients for Cylindrical Phantoms Irradiated by Extended Plane-Parallel Photon Beams of Oblique Incidence Relative to the Cylinder Main Axis</span> &raquo;, Radiat. Prot. Dosim. 59: 195-203; 1995.</li>
<li>ISO 12794:2000. ISO, 1999, <em>&Eacute;nergie nucl&eacute;aire &ndash; Radioprotection &ndash; Dosim&egrave;tres individuels thermoluminiscents pour yeux et extr&eacute;mit&eacute;s</em>.</li>
<li>ISO 4037-1:1996, <em>Rayonnements X et gamma de r&eacute;f&eacute;rence pour l&rsquo;&eacute;talonnage des dosim&egrave;tres et des d&eacute;bitm&egrave;tres, et pour la d&eacute;termination de leur r&eacute;ponse en fonction de l&rsquo;&eacute;nergie des photons &ndash; Partie 1 : Caract&eacute;ristiques des rayonnements et m&eacute;thodes de production</em>.</li>
<li>ISO 6980:1996 <em>Rayonnements b&ecirc;ta de r&eacute;f&eacute;rence pour l&rsquo;&eacute;talonnage des dosim&egrave;tres et d&eacute;bitm&egrave;tres et pour la d&eacute;termination de leur r&eacute;ponse en fonction de l&rsquo;&eacute;nergie b&ecirc;ta</em> (disponible en anglais seulement).</li>
<li>Communaut&eacute; europ&eacute;enne. Rapport EUR 14852 EN, <span lang="en"><em>Technical Recommendations for Monitoring Individuals Occupationally Exposed to External Radiation</em></span>, Christensen, P., Julius, H.W. et Marshall, T.O., Luxembourg, Commission europ&eacute;enne, 1994.</li>
<li>Strom, D. J. et Stansbury, P. S. &laquo; <span lang="en">Minimum Detectable Activity When Background Is Counted Longer than the Sample</span> &raquo;, Health Phys. 63(3): 360-361; 1992.</li>
<li>Ballot, G. <em>Application des m&eacute;thodes statistiques aux probl&egrave;mes de la mesure de la radioactivit&eacute; d&rsquo;un corps</em>, dans Pannetier R. et Duhamel F. Vade-mecum du technicien nucl&eacute;aire, 2<sup>e</sup> &eacute;d., Massy, S.C.F. du Bastet, 1982, p. D70-D76.</li>
<li>Sumerling, T. J. et Darby, S. C. <span lang="en"><em>Statistical Aspects of the Interpretation of Counting Experiments Designed to Detect Low Levels of Radioactivity</em></span>, NRPB-R113. National Radiological Protection Board, 1981.</li>  </ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<h2 id="series">S&eacute;ries de documents d&#39;application de la r&eacute;glementation de la CCSN</h2>
<p>Les installations et activit&eacute;s du secteur nucl&eacute;aire du Canada sont r&eacute;glement&eacute;es par la Commission canadienne de s&ucirc;ret&eacute; nucl&eacute;aire (CCSN). En plus de la <em>Loi sur la s&ucirc;ret&eacute; et la r&eacute;glementation nucl&eacute;aires </em>et de ses r&egrave;glements d&#39;application, il pourrait y avoir des exigences en mati&egrave;re de conformit&eacute; &agrave; d&#39;autres outils de r&eacute;glementation, comme les documents d&#39;application de la r&eacute;glementation ou les normes.</p>
<p>Depuis avril 2013, la collection des documents d&rsquo;application de la r&eacute;glementation actuels et pr&eacute;vus comporte trois grandes cat&eacute;gories et vingt-cinq s&eacute;ries, selon la structure ci-dessous. Les documents d&rsquo;application de la r&eacute;glementation pr&eacute;par&eacute;s par la CCSN font partie de l&rsquo;une des s&eacute;ries suivantes :</p>
<ul className="list-bullet-none">
<li><strong>1.0 Installations et activit&eacute;s r&eacute;glement&eacute;es</strong></li>
<li>S&eacute;ries 1.1 Installations dot&eacute;es de r&eacute;acteurs
<ul className="list-bullet-none">
<li>1.2 Installations de cat&eacute;gorie IB</li>
<li>1.3 Mines et usines de concentration d&#39;uranium</li>
<li>1.4 Installations de cat&eacute;gorie II</li>
<li>1.5 Homologation d&#39;&eacute;quipement r&eacute;glement&eacute;</li>
<li>1.6 Substances nucl&eacute;aires et appareils &agrave; rayonnement</li>
</ul></li>
<li><strong>2.0 Domaines de s&ucirc;ret&eacute; et de r&eacute;glementation</strong></li>
<li>S&eacute;ries 2.1 Syst&egrave;me de gestion
<ul className="list-bullet-none">
<li>2.2 Gestion du rendement humain</li>
<li>2.3 Conduite de l&#39;exploitation</li>
<li>2.4 Analyse de la s&ucirc;ret&eacute;</li>
<li>2.5 Conception mat&eacute;rielle</li>
<li>2.6 Aptitude fonctionnelle</li>
<li>2.7 Radioprotection</li>
<li>2.8 Sant&eacute; et s&eacute;curit&eacute; classiques</li>
<li>2.9 Protection de l&#39;environnement</li>
<li>2.10 Gestion des urgences et protection-incendie</li>
<li>2.11 Gestion des d&eacute;chets</li>
<li>2.12 S&eacute;curit&eacute;</li>
<li>2.13 Garanties et non-prolif&eacute;ration</li>
<li>2.14 Emballage et transport</li>
</ul></li>
<li><strong>3.0 Autres domaines de r&eacute;glementation</strong></li>
<li>S&eacute;ries 3.1 Exigences relatives &agrave; la production de rapports
<ul className="list-bullet-none">
<li>3.2 Mobilisation du public et des Autochtones</li>
<li>3.3 Garanties financi&egrave;res</li>
<li>3.4 D&eacute;lib&eacute;rations de la Commission</li>
<li>3.5 Processus et pratiques de la CCSN</li>
<li>3.6 Glossaire de termes de la CCSN</li>
</ul></li>
</ul>
<p><strong>Remarque&nbsp;:</strong> Les s&eacute;ries de documents d&#39;application de la r&eacute;glementation pourraient &ecirc;tre modifi&eacute;es p&eacute;riodiquement par la CCSN. Chaque s&eacute;rie susmentionn&eacute;e peut comprendre de plusieurs documents d&#39;application de la r&eacute;glementation. Pour obtenir la plus r&eacute;cente liste de documents d&#39;application de la r&eacute;glementation, veuillez consulter le <a href="/fra/acts-and-regulations/regulatory-documents/index">site Web de la CCSN</a>.</p>
</div>  <div className="clear"></div>

                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }