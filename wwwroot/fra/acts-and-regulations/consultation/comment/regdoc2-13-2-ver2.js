import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "fr",
                pageTitle: "REGDOC-2.13.2, Importation et exportation, version 2", 
                dateModified: "2017-09-05",
                langToggleUrl: "/eng/acts-and-regulations/consultation/comment/regdoc2-13-2-ver2"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<h2>Préface</h2>  <p>Ce document fait partie de la série de documents dapplication de la réglementation de la CCSN intitulée <em>Garanties et non-prolifération nucléaire</em> qui porte également sur les contrôles réglementaires de limportation et de lexportation de matériel réglementé. La liste complète des séries figure à la fin du présent document et peut être consultée à partir de <a href="/fra/acts-and-regulations/regulatory-documents/index">la page Documents dapplication de la réglementation</a> de la CCSN.</p>  <p>Le document dapplication de la réglementation REGDOC-2.13.2, <em>Importation et exportation</em>, établit les orientations de la CCSN à lintention des titulaires de permis actuels et éventuels qui souhaitent importer ou exporter des articles à caractère nucléaire ou des articles à double usage dans le secteur nucléaire, aussi appelés substances nucléaires, équipement et renseignements réglementés. Ces éléments figurent à lannexe E, qui est identique à lannexe du <em>Règlement sur le contrôle de limportation et de lexportation aux fins de la non-prolifération nucléaire</em> (RCIENN). Ce document présente la réglementation qui sapplique à limportation et à lexportation de ces articles et donne un aperçu du contexte national et du contexte international sur lesquels sappuient les contrôles visant limportation et lexportation desdits articles. Il décrit également le programme dautorisation et fournit des renseignements sur la procédure à suivre pour demander un permis ou une modification dun permis existant, de même que le délai de traitement des demandes.</p>   <p>La partie II du document dapplication de la réglementation REGDOC-2.13.2, <em>Importation et exportation</em>, établit les orientations de la CCSN à lintention des titulaires de permis actuels et éventuels qui souhaitent importer ou exporter des sources radioactives à risque élevé (<a href="http://www-pub.iaea.org/MTCD/Publications/PDF/Pub1227_web.pdf">sources radioactives de catégorie 1 et 2</a>). Ce document dorientation remplace le document INFO-0791 &ndash; <em>Contrôle de lexportation et de limportation des sources radioactives à risque élevé</em>.</p>  <p>Le présent document examine le type dinformation que la CCSN prend en compte lors de lévaluation des demandes liées à limportation et à lexportation de substances nucléaires, déquipement et de renseignements réglementés. Il offre également des renseignements supplémentaires aux exportateurs visant le contrôle de lutilisation ultime, lequel permet à la CCSN dexiger un permis pour les articles ne figurant pas à lannexe E, bien que leur utilisation prévue puisse être liée à un programme darmement nucléaire. Enfin, il présente les activités de la CCSN en matière de vérification de la conformité réglementaire et dapplication de la loi.</p>  <p>Les exigences associées au présent document sont décrites dans la <a href="http://laws-lois.justice.gc.ca/fra/lois/N-28.3/"><em>Loi sur la sûreté et la réglementation nucléaires</em></a> et à lannexe E.</p>
<div className="alert alert-info">
<p><strong>Remarque importante :</strong> Ce document fait partie du fondement dautorisation dune installation ou dune activité réglementée si on sy réfère directement ou indirectement dans le permis (notamment dans des documents cités en référence du titulaire de permis).</p>  <p>Le fondement dautorisation établit les conditions limites du rendement acceptable pour une installation ou une activité réglementée et établit les bases du programme de conformité de la CCSN à légard de cette installation ou activité réglementée.</p>  <p>Si le document est un élément du fondement dautorisation, le terme « doit » est employé pour exprimer une exigence à laquelle le titulaire ou le demandeur de permis doit se conformer; le terme « devrait » dénote une orientation ou une mesure conseillée; le terme « pourrait » exprime une option ou un élément conseillé ou acceptable dans les limites de ce document dapplication de la réglementation; et le terme « peut » exprime une possibilité ou une capacité.</p>   <p>Aucune information contenue dans le présent document ne doit être interprétée comme libérant le titulaire de permis de toute autre exigence pertinente. Le titulaire de permis a la responsabilité de prendre connaissance de tous les règlements et de toutes les conditions de permis applicables et dy adhérer.</p>  </div>
<div className="module-table-contents">  <h2>Table des mati&egrave;res</h2>
<ul>
<li><a href="#sec1">1. Objet</a></li>
<li><a href="#sec2">2. Port&eacute;e</a></li>
<li><a href="#sec3">3. R&eacute;glementation pertinente</a>
<li><a href="#partI">Partie I :  Des articles &agrave; caract&egrave;re nucl&eacute;aire ou des articles &agrave; double usage dans le secteur nucl&eacute;aire</a></li>
<li><a href="#sec4">4. Cadre du programme</a>
<ul>
<li><a href="#sec4-1">4.1 Aper&ccedil;u</a></li>
<li><a href="#sec4-2">4.2 Contexte national</a></li>
<li><a href="#sec4-3">4.3 Contexte international</a></li>
</ul></li>
<li><a href="#sec5">5. Programme d&rsquo;autorisation des importations et des exportations de la CCSN</a>
<ul>
<li><a href="#sec5-1">5.1 Aper&ccedil;u</a></li>
<li><a href="#sec5-2">5.2 Comment pr&eacute;senter une demande de permis d&rsquo;importation ou d&rsquo;exportation</a></li>
<li><a href="#sec5-3">5.3 Ce que les permis d&rsquo;importation et d&rsquo;exportation autorisent</a></li>
<li><a href="#sec5-4">5.4 Modifications et transferts de permis</a></li>
<li><a href="#sec5-5">5.5 Dur&eacute;e de traitement et normes de service</a></li>
<li><a href="#sec5-6">5.6 Exigences relatives aux exportations ne relevant pas de la CCSN</a></li>
</ul></li>
<li><a href="#sec6">6. Modalit&eacute;s d&rsquo;&eacute;valuation des demandes de permis d&rsquo;importation et d&rsquo;exportation</a>
<ul>
<li><a href="#sec6-1">6.1 R&eacute;ception de la demande</a></li>
<li><a href="#sec6-2">6.2 &Eacute;valuation de la demande</a></li>
<li><a href="#sec6-3">6.3 D&eacute;cision du fonctionnaire d&eacute;sign&eacute;</a></li>
</ul></li>
<li><a href="#sec7">7. Contr&ocirc;les de l&rsquo;utilisation ultime pour les articles &agrave; double usage dans le secteur nucl&eacute;aire</a>
<ul>
<li><a href="#sec7-1">7.1 Pourquoi les contr&ocirc;les de l&rsquo;utilisation ultime sont-ils n&eacute;cessaires?</a></li>
<li><a href="#sec7-2">7.2 Quand les contr&ocirc;les de l&rsquo;utilisation ultime s&rsquo;appliquent-ils?</a></li>
<li><a href="#sec7-3">7.3 Que doivent faire les exportateurs?</a></li>
</ul></li>
<li><a href="#sec8">8. Conformit&eacute; aux exigences de la CCSN</a>
<ul>
<li><a href="#sec8-1">8.1 Comment la CCSN v&eacute;rifie-t-elle la conformit&eacute;?</a></li>
<li><a href="#sec8-2">8.2 Divulgation de non-conformit&eacute;</a></li>
<li><a href="#sec8-3">8.3 Pratiques exemplaires pour des exportateurs responsables</a></li>
</ul></li>
<li><a href="#partII">Partie II : Sources radioactives &agrave; risque &eacute;lev&eacute;</a></li>
<li><a href="#sec9">9. Cadre du programme</a>
<ul>
<li><a href="#sec9-1">9.1 Vue d&rsquo;ensemble</a></li>
<li><a href="#sec9-2">9.2 Contexte national</a></li>
<li><a href="#sec9-3">9.3 Contexte international</a></li>
</ul></li>
<li><a href="#sec10">10. Sources radioactives &agrave; risque &eacute;lev&eacute;</a></li>
<li><a href="#sec11">11. Programme de contr&ocirc;les et de d&eacute;livrance de permis</a>
<ul>
<li><a href="#sec11-1">11.1 Aper&ccedil;u</a></li>
<li><a href="#sec11-2">11.2 D&eacute;livrance des permis d&rsquo;exportation</a></li>
<li><a href="#sec11-3">11.3 Contr&ocirc;les &agrave; l&rsquo;importation</a></li>
<li><a href="#sec11-4">11.4 Comment pr&eacute;senter une demande de permis d&rsquo;exportation de la CCSN</a></li>
<li><a href="#sec11-5">11.5 Modification et transfert de permis</a></li>
<li><a href="#sec11-6">11.6 Dur&eacute;e de traitement et normes de service</a></li>
</ul></li>
<li><a href="#sec12">12. &Eacute;valuation de la demande de permis</a>
<ul>
<li><a href="#sec12-1">12.1 R&eacute;ception de la demande</a></li>
<li><a href="#sec12-2">12.2 &Eacute;valuation de la demande</a></li>
<li><a href="#sec12-3">12.3 D&eacute;cision du fonctionnaire d&eacute;sign&eacute;</a></li>
</ul></li>
<li><a href="#sec13">13. Conformit&eacute; aux exigences de la CCSN</a>
<ul>
<li><a href="#sec13-1">13.1 Comment la CCSN v&eacute;rifie-t-elle la conformit&eacute;</a></li>
<li><a href="#sec13-2">13.2 Divulgation de non-conformit&eacute;</a></li>
</ul></li>
<li><a href="#appA">Annexe A : Exemples de demandes de renseignements ou de commandes suspectes possibles</a></li>
<li><a href="#appB">Annexe B : Divulgation de non-conformit&eacute;</a></li>
<li><a href="#appC">Annexe C : Comment remplir une demande d&rsquo;importation ou d&rsquo;exportation d&rsquo;articles &agrave; caract&egrave;re nucl&eacute;aire et d&rsquo;articles &agrave; double usage dans le secteur nucl&eacute;aire</a>
<ul>
<li><a href="#appC-1">C.1 Orientation en vue de remplir une demande de permis d&rsquo;importation</a>
<ul>
<li><a href="#appC-1-1">C.1.1 Demande de permis pour importer des articles &agrave; caract&egrave;re nucl&eacute;aire</a></li>
</ul></li>
<li><a href="#appC-2">C.2 Orientation en vue de remplir une demande de permis d&rsquo;exportation</a>
<ul>
<li><a href="#appC-2-1">C.2.1 Demande de permis visant l&rsquo;exportation d&rsquo;articles &agrave; caract&egrave;re nucl&eacute;aire et d&rsquo;articles &agrave; double usage dans le secteur nucl&eacute;aire</a></li>
</ul></li>
</ul></li>
<li><a href="#appD">Annexe D : Comment remplir une demande d&rsquo;exportation de sources radioactives &agrave; risque &eacute;lev&eacute;</a>
<ul>
<li><a href="#appD-1">D.1 Orientation en vue de remplir la demande de permis d&rsquo;exportation</a>
<ul>
<li><a href="#appD-1-1">D.1.1 Demande de permis visant l&rsquo;exportation de sources radioactives &agrave; risque &eacute;lev&eacute;</a></li>
</ul></li>
</ul></li>
<li><a href="#appE">Annexe E : Substances, &eacute;quipement et renseignements nucl&eacute;aires contr&ocirc;l&eacute;s</a></li>
<li><a href="#glossary">Glossaire</a></li>
<li><a href="#ref">R&eacute;f&eacute;rences</a></li>
</ul>  </div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="1"></div>
<h2 id="sec1">1. Objet</h2>  <p>La partie I du document d&rsquo;application de la r&eacute;glementation REGDOC-2.13.2, <em>Importation et exportation</em>, &eacute;tablit les orientations de la CCSN &agrave; l&rsquo;intention des titulaires de permis actuels et &eacute;ventuels qui souhaitent importer ou exporter des articles &agrave; caract&egrave;re nucl&eacute;aire ou des articles &agrave; double usage dans le secteur nucl&eacute;aire, aussi appel&eacute;s substances nucl&eacute;aires, &eacute;quipement et renseignements r&eacute;glement&eacute;s ou contr&ocirc;l&eacute;s.</p>  <p>La partie II du REGDOC-2.13.2, <em>Importation et exportation</em>, &eacute;tablit les orientations de la CCSN &agrave; l&rsquo;intention des titulaires de permis actuels et &eacute;ventuels qui souhaitent importer ou exporter des sources radioactives &agrave; risque &eacute;lev&eacute; (sources radioactives de cat&eacute;gorie 1 et 2), tel qu&rsquo;il est &eacute;nonc&eacute; dans le Guide de s&ucirc;ret&eacute; RS-G-1.9 de l&rsquo;Agence internationale de l&rsquo;&eacute;nergie atomique (AIEA), Cat&eacute;gorisation de sources radioactives.</p>
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
<h2 id="sec2">2. Port&eacute;e</h2>  <p>Le pr&eacute;sent document d&eacute;crit les fondements de la r&eacute;glementation et des politiques en mati&egrave;re de programmes de contr&ocirc;le de l&rsquo;importation et de l&rsquo;exportation visant les articles &agrave; caract&egrave;re nucl&eacute;aire et les articles &agrave; double usage dans le secteur nucl&eacute;aire. On y trouve notamment de l&rsquo;information sur :</p>
<ul>
<li>le moment o&ugrave; les demandeurs potentiels devraient contacter la CCSN</li>
<li>la pr&eacute;sentation d&rsquo;une demande de permis d&rsquo;importation ou d&rsquo;exportation ou de modification ou de transfert d&rsquo;un permis existant</li>
<li>les crit&egrave;res utilis&eacute;s par la CCSN pour &eacute;valuer les demandes de permis</li>
<li>l&rsquo;utilisation ultime des articles &agrave; double usage dans le secteur nucl&eacute;aire</li>
<li>les moyens qu&rsquo;utilise la CCSN pour v&eacute;rifier la conformit&eacute; aux r&egrave;glements</li>
<li>les substances nucl&eacute;aires contr&ocirc;l&eacute;es, l&rsquo;&eacute;quipement et les renseignements r&eacute;glement&eacute;s</li>
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
<div id="3"></div>
<h2 id="sec3">3. R&eacute;glementation pertinente</h2>  <p>Les dispositions de la <a href="http://laws-lois.justice.gc.ca/fra/lois/N-28.3/index.html"><em>Loi sur la s&ucirc;ret&eacute; et la r&eacute;glementation nucl&eacute;aires</em></a> (LSRN), du <a href="http://laws-lois.justice.gc.ca/fra/reglements/DORS-2000-202/index.html"><em>R&egrave;glement g&eacute;n&eacute;ral sur la s&ucirc;ret&eacute; et la r&eacute;glementation nucl&eacute;aires</em></a> (RGSRN) et du <a href="http://laws-lois.justice.gc.ca/fra/reglements/DORS-2000-210/index.html"><em>R&egrave;glement sur le contr&ocirc;le de l&rsquo;importation et de l&rsquo;exportation aux fins de la non-prolif&eacute;ration nucl&eacute;aire</em></a> (RCIENN) qui s&rsquo;appliquent dans le contexte du pr&eacute;sent document sont :</p>
<ol>
<li>l&rsquo;alin&eacute;a 3<em>b</em>) de la LSRN, &eacute;tablissant que : &laquo; La pr&eacute;sente loi a pour objet la mise en &oelig;uvre au Canada des mesures de contr&ocirc;le international du d&eacute;veloppement, de la production et de l&rsquo;utilisation de l&rsquo;&eacute;nergie nucl&eacute;aire que le Canada s&rsquo;est engag&eacute; &agrave; respecter, notamment celles qui portent sur la non-prolif&eacute;ration des armes nucl&eacute;aires et engins explosifs nucl&eacute;aires. &raquo;</li>
<li>le paragraphe 24(5) de la LSRN, &eacute;tablissant que : &laquo; Les licences et les permis peuvent &ecirc;tre assortis des conditions que la Commission estime n&eacute;cessaires &agrave; l&rsquo;application de la pr&eacute;sente loi... &raquo;</li>
<li>l&rsquo;alin&eacute;a 26<em>a</em>) de la LSRN, &eacute;tablissant que : &laquo; Sous r&eacute;serve des r&egrave;glements, il est interdit, sauf en conformit&eacute; avec une licence ou un permis : <em>a)</em> d&rsquo;avoir en sa possession, de transf&eacute;rer, d&rsquo;importer, d&rsquo;exporter, d&rsquo;utiliser ou d&rsquo;abandonner des substances nucl&eacute;aires, de l&rsquo;&eacute;quipement r&eacute;glement&eacute; ou des renseignements r&eacute;glement&eacute;s. &raquo;</li>
<li>l&rsquo;alin&eacute;a 48<em>c</em>) de la LSRN, &eacute;tablissant que : &laquo; Commet une infraction quiconque contrevient aux conditions d&rsquo;une licence ou d&rsquo;un permis. &raquo;</li>
<li>l&rsquo;alin&eacute;a 48<em>d</em>) de la LSRN, &eacute;tablissant que : &laquo; Commet une infraction quiconque fait sciemment une d&eacute;claration fausse ou trompeuse, verbalement ou par &eacute;crit, &agrave; la Commission, &agrave; un fonctionnaire d&eacute;sign&eacute; ou &agrave; un inspecteur. &raquo;</li>
<li>l&rsquo;alin&eacute;a 48<em>k</em>) de la LSRN, &eacute;tablissant que : &laquo; Commet une infraction quiconque contrevient &agrave; la pr&eacute;sente loi ou &agrave; ses r&egrave;glements. &raquo;</li>
<li>l&rsquo;article 50 de la LSRN, &eacute;tablissant que : &laquo; Commet une infraction quiconque, sans y &ecirc;tre autoris&eacute; au titre de la pr&eacute;sente loi, a en sa possession une substance nucl&eacute;aire, une pi&egrave;ce d&rsquo;&eacute;quipement r&eacute;glement&eacute; ou des renseignements r&eacute;glement&eacute;s qui peuvent servir &agrave; fabriquer une arme nucl&eacute;aire ou un engin explosif nucl&eacute;aire. &raquo;</li>
<li>le paragraphe 3(2) du RGSRN, &eacute;tablissant que : &laquo; Le paragraphe (1) ne s&rsquo;applique pas &agrave; la demande de permis d&rsquo;importation ou d&rsquo;exportation pour laquelle les renseignements exig&eacute;s sont pr&eacute;vus par le <em>R&egrave;glement sur le contr&ocirc;le de l&rsquo;importation et de l&rsquo;exportation aux fins de la non-prolif&eacute;ration nucl&eacute;aire</em>... &raquo;</li>
<li>l&rsquo;alin&eacute;a 10<em>b</em>) du RGSRN, &eacute;tablissant que : &laquo; Les substances nucl&eacute;aires naturelles, autres que celles qui sont associ&eacute;es au d&eacute;veloppement, &agrave; la production ou &agrave; l&rsquo;utilisation de l&rsquo;&eacute;nergie nucl&eacute;aire, sont exempt&eacute;es de l&rsquo;application de la Loi et de ses r&egrave;glements &agrave; l&rsquo;exception [...] b) des dispositions r&eacute;gissant l&rsquo;importation et l&rsquo;exportation des substances nucl&eacute;aires, dans le cas des substances nucl&eacute;aires qui figurent &agrave; l&rsquo;annexe du <em>R&egrave;glement sur le contr&ocirc;le de l&rsquo;importation et de l&rsquo;exportation aux fins de la non-prolif&eacute;ration nucl&eacute;aire</em>. &raquo;</li>
<li>l&rsquo;article 18 du RGSRN &eacute;tablissant que &laquo; Le titulaire de permis pr&eacute;sente &agrave; un agent des douanes le permis requis pour importer ou exporter une substance nucl&eacute;aire, de l&rsquo;&eacute;quipement r&eacute;glement&eacute; ou des renseignements r&eacute;glement&eacute;s avant de les importer ou de les exporter. &raquo;</li>
<li>l&rsquo;alin&eacute;a 20<em>d</em>) du RGSRN &eacute;tablissant que : &laquo; Sont d&eacute;sign&eacute;s comme de l&rsquo;&eacute;quipement r&eacute;glement&eacute; pour l&rsquo;application de la Loi [...] <em>d)</em> l&rsquo;&eacute;quipement qui peut servir &agrave; concevoir, produire, utiliser, faire fonctionner ou entretenir des armes nucl&eacute;aires ou des engins explosifs nucl&eacute;aires. &raquo;</li>
<li>l&rsquo;alin&eacute;a 21(1)<em>a)</em> du RGSRN, &eacute;tablissant que : &laquo; Pour l&rsquo;application de la Loi, sont d&eacute;sign&eacute;s comme renseignements r&eacute;glement&eacute;s les renseignements qui portent sur ce qui suit, y compris les documents sur ces renseignements : <em>a)</em> les substances nucl&eacute;aires, y compris leurs propri&eacute;t&eacute;s, qui sont n&eacute;cessaires &agrave; la conception, la production, l&rsquo;utilisation, le fonctionnement ou l&rsquo;entretien des armes nucl&eacute;aires ou des engins explosifs nucl&eacute;aires. &raquo;</li>
<li>l&rsquo;alin&eacute;a 21(1)b) du RGSRN, &eacute;tablissant que : &laquo; Pour l&rsquo;application de la Loi, sont d&eacute;sign&eacute;s comme renseignements r&eacute;glement&eacute;s les renseignements qui portent sur ce qui suit, y compris les documents sur ces renseignements [...] <em>b)</em> la conception, la production, l&rsquo;utilisation, le fonctionnement ou l&rsquo;entretien des armes nucl&eacute;aires ou des engins explosifs nucl&eacute;aires. &raquo;</li>
<li>le paragraphe 23(2) du RGSRN, &eacute;tablissant que : &laquo; Quiconque a en sa possession des renseignements r&eacute;glement&eacute;s ou en a connaissance prend toutes les pr&eacute;cautions n&eacute;cessaires pour en pr&eacute;venir le transfert ou la communication non autoris&eacute; par la Loi et ses r&egrave;glements. &raquo;</li>
<li>le paragraphe 1(2) du RCIENN, &eacute;tablissant que : &laquo; Les substances nucl&eacute;aires contr&ocirc;l&eacute;es sont d&eacute;sign&eacute;es substances nucl&eacute;aires pour l&rsquo;application de l&rsquo;alin&eacute;a <em>d)</em> de la d&eacute;finition de &laquo; substance nucl&eacute;aire &raquo; &agrave; l&rsquo;article 2 de la Loi, en ce qui concerne leur importation et leur exportation. &raquo;</li>
<li>le paragraphe 1(3) du RCIENN, &eacute;tablissant que : &laquo; L&rsquo;&eacute;quipement nucl&eacute;aire contr&ocirc;l&eacute; est d&eacute;sign&eacute; &eacute;quipement r&eacute;glement&eacute; pour l&rsquo;application de la Loi, en ce qui concerne son importation et son exportation. &raquo;</li>
<li>le paragraphe 1(4) du RCIENN, &eacute;tablissant que : &laquo; Les renseignements nucl&eacute;aires contr&ocirc;l&eacute;s sont d&eacute;sign&eacute;s renseignements r&eacute;glement&eacute;s pour l&rsquo;application de la Loi, en ce qui concerne leur importation et leur exportation, &agrave; moins qu&rsquo;ils soient rendus publics conform&eacute;ment &agrave; la Loi, &agrave; ses r&egrave;glements ou &agrave; un permis. &raquo;</li>
<li><p>le paragraphe 3(1) du RCIENN, &eacute;tablissant que : &laquo; La demande de permis pour importer ou exporter une substance nucl&eacute;aire contr&ocirc;l&eacute;e, un &eacute;quipement nucl&eacute;aire contr&ocirc;l&eacute; ou des renseignements nucl&eacute;aires contr&ocirc;l&eacute;s comprend les renseignements suivants :</p>
a) les nom, adresse et num&eacute;ro de t&eacute;l&eacute;phone du demandeur;<br />
b) une description de la substance, de l&rsquo;&eacute;quipement ou des renseignements, pr&eacute;cisant notamment la quantit&eacute; ainsi que le num&eacute;ro du paragraphe de l&rsquo;annexe qui y fait r&eacute;f&eacute;rence;<br />
c) les nom et adresse du fournisseur;<br />
d) le nom du pays d&rsquo;origine de la substance, de l&rsquo;&eacute;quipement ou des renseignements;<br />
e) les nom, adresse et, dans le cas d&rsquo;une demande de permis d&rsquo;importation, le num&eacute;ro de t&eacute;l&eacute;phone de chaque destinataire;<br />
f) l&rsquo;utilisation ultime de la substance, de l&rsquo;&eacute;quipement ou des renseignements que projette de faire le dernier destinataire, ainsi que le lieu de cette utilisation;<br />
g) le num&eacute;ro de tout permis permettant d&rsquo;avoir en sa possession la substance, l&rsquo;&eacute;quipement ou les renseignements;<br />
h) lorsque la demande vise une substance nucl&eacute;aire contr&ocirc;l&eacute;e qui est une mati&egrave;re nucl&eacute;aire de cat&eacute;gorie I, II ou III au sens de l&rsquo;article 1 du <a href="http://laws-lois.justice.gc.ca/fra/reglements/DORS-2000-209"><em>R&egrave;glement sur la s&eacute;curit&eacute;</em></a> nucl&eacute;aire, les mesures qui seront prises pour faciliter le respect, par le Canada, de la Convention relative &agrave; la protection mat&eacute;rielle des mati&egrave;res nucl&eacute;aires, INFCIRC/274/R&eacute;v. 1 &raquo;.</li>
<li><p>le paragraphe 4(1) du RCIENN, &eacute;tablissant que : &laquo; Toute personne peut exercer les activit&eacute;s suivantes sans y &ecirc;tre autoris&eacute;e par permis :</p>
a) importer des substances nucl&eacute;aires contr&ocirc;l&eacute;es mentionn&eacute;es &agrave; la partie B de l&rsquo;annexe, qui ne sont pas des radionucl&eacute;ides;<br />
b) importer de l&rsquo;&eacute;quipement nucl&eacute;aire contr&ocirc;l&eacute; mentionn&eacute; au paragraphe A.3 ou &agrave; la partie B de l&rsquo;annexe;<br />
c) importer des renseignements nucl&eacute;aires contr&ocirc;l&eacute;s qui traitent des substances nucl&eacute;aires contr&ocirc;l&eacute;es et de l&rsquo;&eacute;quipement nucl&eacute;aire contr&ocirc;l&eacute; mentionn&eacute;s au paragraphe A.3 ou &agrave; la partie B de l&rsquo;annexe;<br />
d) importer des substances nucl&eacute;aires contr&ocirc;l&eacute;es, de l&rsquo;&eacute;quipement nucl&eacute;aire contr&ocirc;l&eacute; ou des renseignements nucl&eacute;aires contr&ocirc;l&eacute;s en vue d&rsquo;un transit;<br />
e) exporter des substances nucl&eacute;aires contr&ocirc;l&eacute;es, de l&rsquo;&eacute;quipement nucl&eacute;aire contr&ocirc;l&eacute; ou des renseignements nucl&eacute;aires contr&ocirc;l&eacute;s lorsque cette exportation suit un transit; <br />
f) exporter dans un &Eacute;tat membre du Groupe des fournisseurs nucl&eacute;aire la substance nucl&eacute;aire contr&ocirc;l&eacute;e vis&eacute;e au paragraphe A.1.4. de l&rsquo;annexe qui n&rsquo;est pas destin&eacute;e &agrave; &ecirc;tre utilis&eacute;e dans un r&eacute;acteur nucl&eacute;aire. &raquo;</li>
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
<div id="partI"></div>
<h2 id="partI">Partie I : Des articles &agrave; caract&egrave;re nucl&eacute;aire ou des articles &agrave; double usage dans le secteur nucl&eacute;aire</h2>
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
<h2 id="sec4">4. Cadre du programme</h2>
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
<h3 id="sec4-1">4.1 Aper&ccedil;u</h3>  <p>La pr&eacute;sente section d&eacute;crit le fondement des contr&ocirc;les li&eacute;s &agrave; l&rsquo;importation et &agrave; l&rsquo;exportation et mis en &oelig;uvre par la CCSN visant les substances nucl&eacute;aires, l&rsquo;&eacute;quipement et les renseignements r&eacute;glement&eacute;s.</p>  <p>Le Canada contr&ocirc;le l&rsquo;importation et l&rsquo;exportation d&rsquo;un certain nombre de marchandises pour diverses raisons, y compris la r&eacute;glementation du commerce de marchandises strat&eacute;giques et militaires, la pr&eacute;vention de la prolif&eacute;ration d&rsquo;armes de destruction massive et le respect d&rsquo;obligations internationales. L&rsquo;un des principaux objectifs du contr&ocirc;le du transfert d&rsquo;articles &agrave; caract&egrave;re nucl&eacute;aire sensible est de pr&eacute;venir les transferts illicites &agrave; des programmes d&rsquo;armement nucl&eacute;aire tout en facilitant le commerce l&eacute;gitime.</p>  <p>Des contr&ocirc;les d&rsquo;importation et d&rsquo;exportation efficaces se fondent sur un ensemble de lois, de r&egrave;glements, d&rsquo;accords et de pratiques exemplaires du Canada et d&rsquo;ailleurs. Le contexte national comprend la r&eacute;glementation nationale et la politique canadienne de non-prolif&eacute;ration nucl&eacute;aire, tandis que le contexte international est r&eacute;gi par le <a href="http://www.un.org/french/events/npt2005/npttreaty.html"><em>Trait&eacute; sur la non-prolif&eacute;ration des armes nucl&eacute;aires</em></a> et les r&eacute;gimes multilat&eacute;raux de contr&ocirc;le de l&rsquo;exportation.</p>  <p>Les sections 4.2 et 4.3 du pr&eacute;sent document offrent de l&rsquo;information suppl&eacute;mentaire sur les aspects nationaux et internationaux des contr&ocirc;les de la CCSN de l&rsquo;importation et de l&rsquo;exportation.</p>
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
<h3 id="sec4-2">4.2	Contexte national</h3>  <h4>R&eacute;gelementation : la <em>Loi sur la s&ucirc;ret&eacute; et la r&eacute;glementation nucl&eacute;aires et le R&egrave;glement sur le contr&ocirc;le de l&rsquo;importation et de l&rsquo;exportation aux fins de la non-prolif&eacute;ration nucl&eacute;aire</em></h4>  <p>La CCSN r&eacute;glemente l&rsquo;utilisation de l&rsquo;&eacute;nergie et des mati&egrave;res nucl&eacute;aires afin de pr&eacute;server la sant&eacute;, la s&ucirc;ret&eacute; et la s&eacute;curit&eacute; des Canadiens, de prot&eacute;ger l&rsquo;environnement et de mettre en &oelig;uvre les mesures de contr&ocirc;le international du d&eacute;veloppement, de la production et de l&rsquo;utilisation de l&rsquo;&eacute;nergie nucl&eacute;aire que le Canada s&rsquo;est engag&eacute; &agrave; respecter, notamment celles qui portent sur la non-prolif&eacute;ration des armes nucl&eacute;aires et engins explosifs nucl&eacute;aires. En vertu de la LSRN, la CCSN d&eacute;livre des permis, assume la r&eacute;glementation et &eacute;tablit des exigences techniques &agrave; l&rsquo;&eacute;gard de toutes les activit&eacute;s li&eacute;es au secteur nucl&eacute;aire au Canada.</p>  <p>L&rsquo;annexe E &eacute;num&egrave;re les substances nucl&eacute;aires, l&rsquo;&eacute;quipement et les renseignements r&eacute;glement&eacute;s. L&rsquo;annexe comporte deux parties : la partie A &eacute;num&egrave;re les articles &agrave; caract&egrave;re nucl&eacute;aire et la partie B &eacute;num&egrave;re les articles &agrave; double usage dans le secteur nucl&eacute;aire. C&rsquo;est pourquoi les substances nucl&eacute;aires, l&rsquo;&eacute;quipement et les renseignements r&eacute;glement&eacute;s sont aussi appel&eacute;s articles &agrave; caract&egrave;re nucl&eacute;aire et articles &agrave; double usage dans le secteur nucl&eacute;aire.</p>  <p>Les articles figurant dans la partie A sont ceux qui sont particuli&egrave;rement con&ccedil;us ou pr&eacute;par&eacute;s aux fins d&rsquo;utilisation nucl&eacute;aire. Parmi les exemples, notons les suivants :</p>
<ul>
<li>les substances nucl&eacute;aires (uranium, plutonium, thorium)</li>
<li>les r&eacute;acteurs et l&rsquo;&eacute;quipement nucl&eacute;aires</li>
<li>les substances non nucl&eacute;aires utilis&eacute;es dans les r&eacute;acteurs (eau lourde, deut&eacute;rium, graphite)</li>
<li>les installations et l&rsquo;&eacute;quipement servant &agrave; la conversion, &agrave; l&rsquo;enrichissement et au retraitement de substances nucl&eacute;aires ainsi qu&rsquo;&agrave; la fabrication de combustible et &agrave; la production d&rsquo;eau lourde</li>
<li>la technologie associ&eacute;e &agrave; l&rsquo;un des &eacute;l&eacute;ments pr&eacute;c&eacute;dents</li>
</ul>  <p>Les articles figurant dans la partie B sont ceux qui ont des applications non nucl&eacute;aires l&eacute;gitimes, mais qui pourraient contribuer de mani&egrave;re importante &agrave; des activit&eacute;s du cycle de combustible nucl&eacute;aire non vis&eacute;es par des garanties ou &agrave; des activit&eacute;s li&eacute;es &agrave; des engins explosifs nucl&eacute;aires, par exemple :</p>
<ul>
<li>la poudre de nickel et le lithium</li>
<li>les machines-outils</li>
<li>les &eacute;quipements de d&eacute;veloppement de syst&egrave;mes d&rsquo;implosion</li>
<li>les explosifs et les &eacute;quipements associ&eacute;s</li>
<li>la technologie associ&eacute;e aux articles mentionn&eacute;s</li>
</ul>
<h4>La politique canadienne de non-prolif&eacute;ration nucl&eacute;aire</h4>  <p>Le Canada est le premier pays disposant d&rsquo;une capacit&eacute; nucl&eacute;aire importante &agrave; rejeter le d&eacute;veloppement et l&rsquo;acquisition d&rsquo;armement nucl&eacute;aire et il a particip&eacute; activement &agrave; la promotion internationale de l&rsquo;utilisation pacifique de l&rsquo;&eacute;nergie nucl&eacute;aire. Les deux objectifs de la politique de non-prolif&eacute;ration nucl&eacute;aire du Canada sont les suivants :</p>
<ul>
<li>garantir aux Canadiens et &agrave; la communaut&eacute; internationale que les exportations nucl&eacute;aires du Canada ne contribuent pas &agrave; la fabrication d&rsquo;armes nucl&eacute;aire ou d&rsquo;autres engins nucl&eacute;aires explosifs</li>
<li>promouvoir un r&eacute;gime international de non-prolif&eacute;ration plus efficace et plus complet</li>
</ul>  <p>La politique &eacute;tablit que les substances nucl&eacute;aires, l&rsquo;&eacute;quipement, les substances non nucl&eacute;aires et la technologie fournis par le Canada ne peuvent &ecirc;tre transf&eacute;r&eacute;s qu&rsquo;&agrave; des pays avec lesquels le Canada a conclu des accords de coop&eacute;ration nucl&eacute;aire (ACN) bilat&eacute;raux.</p>  <p>La CCSN et son pr&eacute;d&eacute;cesseur, la Commission de contr&ocirc;le de l&rsquo;&eacute;nergie atomique, ont favoris&eacute; le respect des obligations et des engagements internationaux du Canada &agrave; l&rsquo;&eacute;gard de l&rsquo;utilisation pacifique de l&rsquo;&eacute;nergie nucl&eacute;aire depuis 1946. Par cons&eacute;quent, la CCSN a &agrave; c&oelig;ur la mise en &oelig;uvre des principaux aspects de la politique de non prolif&eacute;ration nucl&eacute;aire du Canada. C&rsquo;est pourquoi elle s&rsquo;assure que les exportations &agrave; caract&egrave;re nucl&eacute;aire important soient assujetties &agrave; des ACN. Ces derniers, qui sont des trait&eacute;s n&eacute;goci&eacute;s par Affaires mondiales Canada, &eacute;tablissent les obligations r&eacute;ciproques (du Canada et des pays partenaires) con&ccedil;ues pour minimiser le risque de prolif&eacute;ration associ&eacute; au transfert international d&rsquo;articles &agrave; caract&egrave;re nucl&eacute;aire important. La CCSN met en application les conditions de ces accords par l&rsquo;interm&eacute;diaire d&rsquo;arrangements administratifs (AA) qu&rsquo;elle conclut avec ses homologues des pays partenaires.</p>  <p>Les principales dispositions des ACN conclus par le Canada comprennent ce qui suit : une assurance d&rsquo;utilisation ultime pacifique et non explosive; le contr&ocirc;le d&rsquo;un nouveau transfert &agrave; des tiers d&rsquo;articles vis&eacute;s par des obligations au Canada; le contr&ocirc;le du retraitement d&rsquo;uranium vis&eacute; par des obligations au Canada; le contr&ocirc;le de l&rsquo;enrichissement de l&rsquo;uranium vis&eacute; par des obligations au Canada; des dispositions relatives aux garanties de rechange; et une protection mat&eacute;rielle ad&eacute;quate des articles vis&eacute;s par des obligations au Canada.</p>  <p>Certaines demandes de permis visant l&rsquo;importation et l&rsquo;exportation de substances nucl&eacute;aires, d&rsquo;&eacute;quipement et de renseignements r&eacute;glement&eacute;s peuvent faire intervenir la mise en &oelig;uvre de dispositions d&rsquo;ACN bilat&eacute;raux et d&rsquo;AA mises en place par la CCSN dans l&rsquo;&eacute;valuation de l&rsquo;autorisation et le processus de d&eacute;cision. La section 6.2 du pr&eacute;sent document fournit de l&rsquo;information sur ce processus.</p>
<h4>Uranium d&rsquo;origine &eacute;trang&egrave;re</h4>  <p>Les exportations canadiennes d&rsquo;uranium pour utilisation nucl&eacute;aire ne visent pas que l&rsquo;uranium d&rsquo;origine canadienne, mais aussi l&rsquo;uranium d&rsquo;origine &eacute;trang&egrave;re import&eacute; au Canada pour &ecirc;tre trait&eacute; commercialement avant d&rsquo;&ecirc;tre livr&eacute; &agrave; un autre pays. Dans les cas o&ugrave; l&rsquo;uranium d&rsquo;origine &eacute;trang&egrave;re import&eacute; au Canada pour &ecirc;tre trait&eacute; commercialement n&rsquo;est pas vis&eacute; par une obligation &agrave; l&rsquo;&eacute;tranger, celui-ci sera assujetti aux conditions d&rsquo;un ACN conclu entre le Canada et le pays destinataire au moment de l&rsquo;exportation.</p>
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
<h3 id="sec4-3">4.3	Contexte international</h3>  <h4><em>Trait&eacute; sur la non-prolif&eacute;ration des armes nucl&eacute;aires</em></h4>  <p>Le <em>Trait&eacute; sur la non-prolif&eacute;ration des armes nucl&eacute;aires</em> (TNP) est la pierre angulaire du r&eacute;gime international de non-prolif&eacute;ration nucl&eacute;aire. Les signataires du TNP se sont engag&eacute;s &agrave; pr&eacute;venir la prolif&eacute;ration des armes nucl&eacute;aires, &agrave; promouvoir la coop&eacute;ration &agrave; l&rsquo;&eacute;gard de l&rsquo;utilisation pacifique de l&rsquo;&eacute;nergie nucl&eacute;aire et &agrave; atteindre l&rsquo;objectif de d&eacute;sarmement nucl&eacute;aire.</p>  <p>Gr&acirc;ce &agrave; la LSRN et ses r&egrave;glements associ&eacute;s, la CCSN met en &oelig;uvre les engagements suivants qu&rsquo;a pris le Canada &agrave; titre de signataire du TNP :</p>
<ul>
<li>ne pas recevoir, fabriquer ou acqu&eacute;rir d&rsquo;armes nucl&eacute;aires ou de dispositifs nucl&eacute;aires explosifs</li>
<li>accepter les garanties de l&rsquo;AIEA pour toutes les mati&egrave;res nucl&eacute;aires au Canada</li>
<li>s&rsquo;assurer que les exportations &agrave; caract&egrave;re nucl&eacute;aires du Canada &agrave; des &Eacute;tats ne disposant pas d&rsquo;armes nucl&eacute;aires sont assujetties aux garanties de l&rsquo;AIEA</li>
</ul>
<h4>Groupes multilat&eacute;raux de contr&ocirc;le de l&rsquo;exportation</h4>  <p>Les groupes multilat&eacute;raux de contr&ocirc;le de l&rsquo;exportation constituent un autre &eacute;l&eacute;ment important du r&eacute;gime de non-prolif&eacute;ration nucl&eacute;aire international. Le Canada est membre du Comit&eacute; Zangger et du Groupe des fournisseurs nucl&eacute;aire (GFN) qui constituent des r&eacute;gimes de contr&ocirc;le de l&rsquo;exportation assurant que les articles &agrave; caract&egrave;re nucl&eacute;aire et les articles &agrave; double usage dans le secteur nucl&eacute;aire servent uniquement &agrave; des fins pacifiques. Les &Eacute;tats qui sont membres de ces r&eacute;gimes conviennent, par consensus, des listes d&rsquo;articles dont le transfert doit &ecirc;tre contr&ocirc;l&eacute;. La mise en &oelig;uvre des contr&ocirc;les s&rsquo;effectue conform&eacute;ment aux lois et pratiques nationales li&eacute;es aux contr&ocirc;les de l&rsquo;exportation, y compris les exigences relatives aux permis d&rsquo;exportation nationaux. L&rsquo;annexe E se fonde sur les listes d&rsquo;articles convenues par le Comit&eacute; Zangger et le GFN.</p>
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
<h2 id="sec5">5. Programme d&rsquo;autorisation des importations et des exportations de la CCSN</h2>
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
<h3 id="sec5-1">5.1 Aper&ccedil;u</h3>  <p>L&rsquo;importation et l&rsquo;exportation des articles contr&ocirc;l&eacute;s figurant dans le RCIENN exigent un permis de la CCSN, sauf pour les activit&eacute;s exempt&eacute;es en vertu du paragraphe 4(1) du RCIENN.</p>  <p>La CCSN a mis en place un programme d&rsquo;autorisation ax&eacute; sur le risque pour ces importations et exportations. Ce programme permet d&rsquo;assurer que les importations et les exportations d&rsquo;articles &agrave; caract&egrave;re nucl&eacute;aire et d&rsquo;articles &agrave; double usage dans le secteur nucl&eacute;aire s&rsquo;effectuent conform&eacute;ment aux exigences r&eacute;glementaires nationales, &agrave; la politique canadienne de non prolif&eacute;ration nucl&eacute;aire et aux obligations internationales du Canada.</p>  <p>En ce qui a trait aux installations nucl&eacute;aires canadiennes, la Commission fonde la plupart des d&eacute;cisions d&rsquo;autorisation sur le soutien technique et les recommandations du personnel de la CCSN. Pour ce qui est des autorisations touchant l&rsquo;importation et l&rsquo;exportation toutefois, la Commission a d&eacute;l&eacute;gu&eacute; ses pouvoirs &agrave; un fonctionnaire d&eacute;sign&eacute;, conform&eacute;ment au paragraphe 37(1) de la LSRN. C&rsquo;est ce dernier qui prend la d&eacute;cision de d&eacute;livrer, de modifier, de remplacer, de renouveler, de transf&eacute;rer, de suspendre ou d&rsquo;annuler les permis d&rsquo;importation et d&rsquo;exportation.</p>  <p>La r&eacute;vocation, la modification et le remplacement d&rsquo;un permis d&rsquo;exportation ou d&rsquo;importation par un fonctionnaire d&eacute;sign&eacute; seront pris en consid&eacute;ration en fonction d&rsquo;une demande soumise conform&eacute;ment aux exigences et aux renseignements pr&eacute;cis&eacute;s dans l&rsquo;article 6 du RGSRN.</p>
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
<h3 id="sec5-2">5.2	Comment pr&eacute;senter une demande de permis d&rsquo;importation ou d&rsquo;exportation</h3>  <p>La CCSN a cr&eacute;&eacute; des formulaires de demande de permis d&rsquo;importation (<a href="http://www.nuclearsafety.gc.ca/fra/pdfs/Import_F.pdf">Demande de permis pour importer des articles &agrave; caract&egrave;re nucl&eacute;aire</a>) et de permis d&rsquo;exportation (<a href="http://www.nuclearsafety.gc.ca/fra/pdfs/Forms_Applications/Import_Export/Application_for_a_Licence_to_Export_Nuclear_and_Nuclear-Related_Dual-Use_Items_f.pdf">Demande de permis pour exporter des articles &agrave; caract&egrave;re nucl&eacute;aire et &agrave; double usage dans le secteur nucl&eacute;aire</a>). L&rsquo;<a href="#appC">annexe C</a> du pr&eacute;sent document fournit des d&eacute;tails sur la mani&egrave;re de remplir ces questionnaires et comprend &eacute;galement des exemplaires de ces formulaires, &agrave; titre de r&eacute;f&eacute;rence.</p>  <p>Les renseignements exig&eacute;s &agrave; l&rsquo;appui d&rsquo;une demande de permis d&rsquo;importation ou d&rsquo;exportation de la CCSN sont &eacute;num&eacute;r&eacute;s au paragraphe 3(1) du RCIENN. Les formulaires de demande de permis d&rsquo;importation ou d&rsquo;exportation devraient &ecirc;tre transmis &agrave; l&rsquo;administrateur des permis (secteur nucl&eacute;aire) de la CCSN, par courrier, t&eacute;l&eacute;copieur ou courriel :</p>  <p>Administrateur des permis (secteur nucl&eacute;aire)<br />
Division de la non-prolif&eacute;ration et des contr&ocirc;les &agrave; l&rsquo;exportation<br />
Direction de la s&eacute;curit&eacute; et des garanties<br />
Commission canadienne de s&ucirc;ret&eacute; nucl&eacute;aire<br />
C.P. 1046, succursale B<br />
280, rue Slater,<br />
Ottawa (Ontario) K1P 5S9</p>  <p>T&eacute;l&eacute;copieur : 613-995-5086<br />
Courriel : <a href="mailto:export-import@cnsc-ccsn.gc.ca">export-import@cnsc-ccsn.gc.ca</a></p>
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
<h3 id="sec5-3">5.3	Ce que les permis d&rsquo;importation et d&rsquo;exportation autorisent</h3>  <p>Un permis d&rsquo;importation ou d&rsquo;exportation de la CCSN autorise un titulaire de permis (la personne ou l&rsquo;organisation &agrave; qui le permis a &eacute;t&eacute; d&eacute;livr&eacute;) &agrave; mener les activit&eacute;s d&rsquo;importation ou d&rsquo;exportation d&eacute;crites dans le permis. Un permis est d&eacute;livr&eacute; pour une transaction particuli&egrave;re et d&eacute;termine l&rsquo;article, la quantit&eacute;, l&rsquo;utilisation ultime, l&rsquo;utilisateur final et le destinataire. Il peut autoriser le transfert d&rsquo;une quantit&eacute; d&eacute;termin&eacute;e d&rsquo;un article par envoi unique ou envois multiples, selon l&rsquo;arrangement commercial; toutefois, les quantit&eacute;s exp&eacute;di&eacute;es ne doivent pas d&eacute;passer la quantit&eacute; autoris&eacute;e et les exp&eacute;ditions doivent avoir lieu au cours de la p&eacute;riode de validit&eacute; &eacute;tablie du permis.</p>  <p>Un permis peut aussi autoriser des exp&eacute;ditions &agrave; un ou plusieurs destinataires d&rsquo;un pays donn&eacute;. Il est g&eacute;n&eacute;ralement valide pendant un an, mais il peut &ecirc;tre prolong&eacute; sur demande selon les besoins d&rsquo;un contrat commercial.</p>  <p>Certains permis peuvent comporter des conditions de conformit&eacute; visant des exigences de production de rapports, comme des avis d&rsquo;exp&eacute;dition ou des rapports annuels. La <a href="#sec8">section 8</a> du pr&eacute;sent document offre de l&rsquo;information sur les exigences de conformit&eacute; aux conditions pouvant faire partie des permis d&rsquo;importation et d&rsquo;exportation d&eacute;livr&eacute;s par la CCSN.</p>
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
<h3 id="sec5-4">5.4	Modifications et transferts de permis</h3>  <p>Un permis d&rsquo;importation ou d&rsquo;exportation de la CCSN peut &ecirc;tre modifi&eacute; en vue :</p>
<ul>
<li>de changer sa date d&rsquo;expiration</li>
<li>d&rsquo;ajouter ou de supprimer des destinataires</li>
<li>d&rsquo;ajouter ou de supprimer des articles autoris&eacute;s pour l&rsquo;importation ou l&rsquo;exportation</li>
<li>de modifier l&rsquo;adresse de l&rsquo;exp&eacute;diteur ou du destinataire</li>
<li>de modifier la quantit&eacute; d&rsquo;articles autoris&eacute;e par le permis existant</li>
<li>de modifier l&rsquo;utilisation ultime</li>
</ul>   <p><strong>Remarque :</strong> Un permis ne peut pas &ecirc;tre modifi&eacute; apr&egrave;s l&rsquo;importation ou l&rsquo;exportation de la quantit&eacute; autoris&eacute;e d&rsquo;articles. De m&ecirc;me, une modification ne peut pas &ecirc;tre effectu&eacute;e apr&egrave;s l&rsquo;expiration du permis. Par cons&eacute;quent, les demandes de modification de permis devraient &ecirc;tre re&ccedil;ues par la CCSN au moins 15 jours ouvrables avant que le permis modifi&eacute; soit requis.</p>  <p>Le transfert d&rsquo;un permis d&rsquo;importation ou d&rsquo;exportation d&eacute;livr&eacute; par la CCSN d&rsquo;un titulaire de permis (l&rsquo;auteur du transfert) &agrave; une autre entit&eacute; (le destinataire du transfert) doit &ecirc;tre autoris&eacute; par la CCSN &agrave; la suite de l&rsquo;examen de la demande soumise par les deux entit&eacute;s. Un transfert de permis peut &ecirc;tre autoris&eacute; &agrave; la suite d&rsquo;un changement de statut juridique s&rsquo;il est possible de v&eacute;rifier que le nouveau titulaire de permis (le destinataire du transfert) est en mesure d&rsquo;assurer la conformit&eacute; &agrave; la LSRN, aux r&egrave;glements pertinents et &agrave; toutes les conditions de permis. Si des changements importants aux conditions sont aussi propos&eacute;s, le transfert ne sera pas autoris&eacute; et le demandeur de permis devra soumettre une nouvelle demande de permis. Pour en savoir plus, veuillez communiquer avec l&rsquo;administrateur des permis de la CCSN.</p>
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
<h3 id="sec5-5">5.5	Dur&eacute;e de traitement et normes de service</h3>  <p>La CCSN devrait g&eacute;n&eacute;ralement prendre une d&eacute;cision visant la d&eacute;livrance d&rsquo;un permis d&rsquo;importation ou d&rsquo;exportation dans les 15 jours ouvrables suivant la r&eacute;ception d&rsquo;une demande d&ucirc;ment remplie. Les demandes incompl&egrave;tes ne peuvent &ecirc;tre trait&eacute;es, et des renseignements suppl&eacute;mentaires seront exig&eacute;s avant de poursuivre l&rsquo;&eacute;valuation.</p>  <p>Bien que la CCSN s&rsquo;efforce de traiter toutes les demandes en moins de 15 jours ouvrables, des retards peuvent avoir lieu dans le cas de demandes de permis d&rsquo;exportation exigeant des communications ou des consultations internationales. Ainsi, une exportation d&rsquo;articles figurant &agrave; la partie A de l&rsquo;annexe E du pr&eacute;sent document peut &ecirc;tre assujettie &agrave; des ACN. Dans un tel cas, la CCSN doit d&rsquo;abord s&rsquo;assurer que les notifications appropri&eacute;es ont &eacute;t&eacute; &eacute;chang&eacute;es avec le pays partenaire avant d&rsquo;autoriser l&rsquo;exportation. Selon le pays, l&rsquo;assurance que les conditions appropri&eacute;es sont en place pour le transfert peut prendre jusqu&rsquo;&agrave; 30 jours ouvrables. Le cas &eacute;ch&eacute;ant, la CCSN tiendra le demandeur au courant du d&eacute;lai n&eacute;cessaire pour terminer l&rsquo;&eacute;valuation. Les demandeurs sont toujours incit&eacute;s &agrave; faire la demande d&rsquo;un permis d&rsquo;exportation le plus t&ocirc;t possible.</p>  <p>Pour en savoir plus, veuillez consulter la page <a href="/acts-and-regulations/service-standards/import-export-licences/index">Normes de service pour les permis d&rsquo;importation et d&rsquo;exportation</a> du site Web de la CCSN.</p>
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
<h3 id="sec5-6">5.6	Exigences relatives aux exportations ne relevant pas de la CCSN</h3>  <p>En plus d&rsquo;une autorisation d&rsquo;exportation exig&eacute;e par la CCSN pour les articles &agrave; caract&egrave;re nucl&eacute;aire et les articles &agrave; double usage dans le secteur nucl&eacute;aire, ce type d&rsquo;exportation peut aussi faire l&rsquo;objet d&rsquo;un contr&ocirc;le par Affaires mondiales Canada en vertu de la <a href="http://laws-lois.justice.gc.ca/fra/lois/E-19/"><em>Loi sur les licences d&rsquo;exportation et d&rsquo;importation</em></a> et de sa <em>Liste des marchandises et technologies d&rsquo;exportation contr&ocirc;l&eacute;e</em>. Les exportateurs peuvent obtenir de plus amples renseignements sur ces exigences de permis en communiquant avec la :</p>  <p>Direction g&eacute;n&eacute;rale de la r&eacute;glementation commerciale<br />
Affaires mondiales Canada<br />
125, promenade Sussex<br />
Ottawa (Ontario) K1A 0G2</p>  <p>T&eacute;l&eacute;phone: 613-996-2387<br />
T&eacute;l&eacute;copieur : 613-996-9933<br />
Courriel : <a href="mailto:tie.reception@international.gc.ca">tie.reception@international.gc.ca</a><br />
Site Web : <a href="http://www.controlesalexportation.gc.ca/">controlesalexportation.gc.ca</a></p>
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
<h2 id="sec6">6. Modalit&eacute;s d&rsquo;&eacute;valuation des demandes de permis d&rsquo;importation et d&rsquo;exportation</h2>
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
<h3 id="sec6-1">6.1	R&eacute;ception de la demande</h3>  <p>&Agrave; la r&eacute;ception d&rsquo;une demande de permis d&rsquo;importation et d&rsquo;exportation, la CCSN envoie au demandeur un accus&eacute; r&eacute;ception qui comporte un num&eacute;ro de r&eacute;f&eacute;rence que le demandeur et la CCSN devraient utiliser dans toute correspondance future visant la demande.</p>  <p>La CCSN examine la demande pour s&rsquo;assurer que tous les renseignements &eacute;num&eacute;r&eacute;s &agrave; l&rsquo;article 3 du RCIENN ont &eacute;t&eacute; fournis. S&rsquo;il manque un quelconque renseignement, la CCSN demandera au demandeur de le soumettre. Pour ce qui est des demandes visant une substance nucl&eacute;aire contr&ocirc;l&eacute;e, la CCSN v&eacute;rifiera aussi si le demandeur a besoin d&rsquo;un permis pour poss&eacute;der ou utiliser la substance.</p>  <p><strong>Remarque :</strong> Cet examen initial ne tient pas compte de la qualit&eacute; de la demande ni de ses aspects techniques.</p>
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
<h3 id="sec6-2">6.2	&Eacute;valuation de la demande</h3>  <p>La CCSN &eacute;value la demande de permis &agrave; partir d&rsquo;un certain nombre de facteurs de risque. Si elle a besoin de renseignements suppl&eacute;mentaires &agrave; cette &eacute;tape, elle les r&eacute;clamera au demandeur. Les renseignements suppl&eacute;mentaires demand&eacute;s peuvent toucher la quantit&eacute;, les caract&eacute;ristiques techniques de l&rsquo;article ou des articles ou des d&eacute;tails suppl&eacute;mentaires visant l&rsquo;utilisation ultime ou l&rsquo;utilisateur final. La CCSN poursuivra le traitement de la demande apr&egrave;s r&eacute;ception des renseignements demand&eacute;s.</p>  <p>Les renseignements pris en consid&eacute;ration par la CCSN lors de l&rsquo;&eacute;valuation d&rsquo;une demande de permis sont notamment les suivants :</p>
<ul>
<li>les ant&eacute;c&eacute;dents en mati&egrave;re de non-prolif&eacute;ration du pays importateur (s&rsquo;il est signataire ou non du TNP ou membre ou pas du GFN)</li>
<li>l&rsquo;information disponible relatives aux activit&eacute;s li&eacute;es aux armes nucl&eacute;aires dans le pays de l&rsquo;utilisateur final ou dans le pays interm&eacute;diaire (s&rsquo;il y a lieu)</li>
<li>l&rsquo;applicabilit&eacute; des ACN bilat&eacute;raux</li>
<li>le lien des articles en question avec une quelconque tentative connue d&rsquo;acquisition</li>
<li>le risque de d&eacute;tournement entra&icirc;n&eacute; par le transfert</li>
<li>l&rsquo;utilisation possible de l&rsquo;article ou des articles dans le cadre d&rsquo;un programme d&rsquo;arme nucl&eacute;aire ou d&rsquo;un engin explosif nucl&eacute;aire</li>
<li>toute pr&eacute;occupation li&eacute;e &agrave; la prolif&eacute;ration visant une partie quelconque de la transaction</li>
<li>la l&eacute;gitimit&eacute; ou non-l&eacute;gitimit&eacute; de l&rsquo;utilisation ultime ou de l&rsquo;utilisateur final</li>
<li>des refus ant&eacute;rieurs signifi&eacute;s &agrave; un certain utilisateur final</li>
<li>les types d&rsquo;assurances ou de garanties fournies ou demand&eacute;es</li>
</ul>  <p>La CCSN &eacute;valuera le risque global de prolif&eacute;ration, en consid&eacute;rant tous les facteurs mentionn&eacute;s pr&eacute;c&eacute;demment pour chaque demande. Des exemples de quelques domaines particuliers &eacute;valu&eacute;s sont pr&eacute;sent&eacute;s plus loin.</p>
<h4>L&rsquo;article fait-il l&rsquo;objet d&rsquo;un contr&ocirc;le en vertu du <em>R&egrave;glement sur le contr&ocirc;le de l&rsquo;importation et de l&rsquo;exportation aux fins de la non-prolif&eacute;ration nucl&eacute;aire</em>?</h4>  <p>La CCSN examinera la description de l&rsquo;article en vue de d&eacute;terminer s&rsquo;il fait l&rsquo;objet d&rsquo;un contr&ocirc;le en vertu du RCIENN. S&rsquo;il est &eacute;tabli que l&rsquo;article n&rsquo;est pas contr&ocirc;l&eacute;, le demandeur sera inform&eacute; par &eacute;crit (courriel ou lettre) de cette d&eacute;cision. Si, &agrave; partir des renseignements d&eacute;j&agrave; fournis dans la demande, la situation relative au contr&ocirc;le n&rsquo;est pas claire, la CCSN demandera des renseignements suppl&eacute;mentaires au demandeur de permis conform&eacute;ment au paragraphe 3(2) du RCIENN.</p>
<h4>Transferts intangibles de technologie</h4>  <p>Les contr&ocirc;les de l&rsquo;exportation s&rsquo;appliquent aussi aux transferts intangibles de renseignements nucl&eacute;aires contr&ocirc;l&eacute;s (voir les paragraphes A.4 et B.3 de l&rsquo;annexe E), par exemple :</p>
<ul>
<li>les courriels</li>
<li>les r&eacute;unions en personne</li>
<li>les conversations t&eacute;l&eacute;phoniques</li>
<li>la prestation de services ou de formation</li>
<li>la publication d&rsquo;articles dans des revues internationales ou l&rsquo;&eacute;change d&rsquo;information dans le cadre de forums internationaux</li>
<li>les t&eacute;l&eacute;chargements ou autres &eacute;changes de fichiers &eacute;lectroniques</li>
</ul>
<p>Les transferts intangibles n&eacute;cessitent aussi une autorisation d&rsquo;exportation. Ils comprennent le transfert de renseignements nucl&eacute;aires contr&ocirc;l&eacute;s &agrave; un fournisseur de services d&rsquo;infonuagiques et de la part celui-ci lorsque ces serveurs se trouvent en dehors du Canada.</p>  <p>En cas d&rsquo;incertitude quant &agrave; l&rsquo;obligation de d&eacute;tenir un permis d&rsquo;importation ou d&rsquo;exportation, les demandeurs peuvent pr&eacute;senter une demande d&rsquo;&eacute;valuation sans frais. Ils sont aussi invit&eacute;s &agrave; communiquer avec la CCSN &agrave; l&rsquo;adresse suivante :<br /> <a href="mailto:export-import@cnsc-ccsn.gc.ca">export-import@cnsc-ccsn.gc.ca</a>.</p>
<h4>L&rsquo;article est-il vis&eacute; par un accord de coop&eacute;ration nucl&eacute;aire?</h4>  <p>Si l&rsquo;article est contr&ocirc;l&eacute; et reconnu comme assujetti &agrave; un ACN, les notifications bilat&eacute;rales appropri&eacute;es doivent &ecirc;tre &eacute;chang&eacute;es avec le pays qui importe l&rsquo;article. Selon le pays partenaire, cette &eacute;tape prend habituellement entre une et six semaines. G&eacute;n&eacute;ralement, les articles figurant &agrave; la partie A de l&rsquo;annexe E sont vis&eacute;s par un ACN.</p>
<h4>Pays d&rsquo;origine de l&rsquo;article</h4>  <p>Les demandeurs doivent mentionner l&rsquo;origine de l&rsquo;article dans la demande afin que la CCSN puisse d&eacute;terminer quels sont les engagements bilat&eacute;raux associ&eacute;s, s&rsquo;il y a lieu.</p>
<h4>Utilisation ultime et utilisateur final</h4>  <p>En ce qui a trait aux demandes de permis d&rsquo;exportation en particulier, une bonne partie de l&rsquo;&eacute;valuation de la CCSN porte sur la d&eacute;termination de la l&eacute;gitimit&eacute; de l&rsquo;utilisation ultime ou de l&rsquo;utilisateur final, de m&ecirc;me que sur le risque de prolif&eacute;ration que peut poser le transfert.</p>  <p>Si l&rsquo;article n&rsquo;est pas vis&eacute; par un ACN, le pays destinataire n&rsquo;est pas vis&eacute; par le m&ecirc;me niveau d&rsquo;obligations permettant de minimiser le risque de prolif&eacute;ration associ&eacute; au transfert international d&rsquo;articles nucl&eacute;aires importants.</p>  <p>Dans le cas d&rsquo;articles &agrave; double usage dans le secteur nucl&eacute;aire (voir la partie B de l&rsquo;annexe E), il est aussi n&eacute;cessaire de d&eacute;terminer si des garanties visant l&rsquo;utilisation ultime sont requises.</p>  <p>De l&rsquo;information de sources ouvertes peut &ecirc;tre utilis&eacute;e pour &eacute;valuer l&rsquo;utilisation ultime et l&rsquo;utilisateur final, afin d&rsquo;assurer la coh&eacute;rence sur le plan des articles transf&eacute;r&eacute;s et de confirmer que le transfert n&rsquo;a d&rsquo;autre but que l&rsquo;utilisation pacifique. Dans certains cas, il peut s&rsquo;av&eacute;rer n&eacute;cessaire d&rsquo;obtenir l&rsquo;aide et des renseignements d&rsquo;autres minist&egrave;res.</p>
<h4>Autres consid&eacute;rations r&eacute;glementaires</h4>  <p>Selon l&rsquo;article en cause, une demande peut &ecirc;tre transmise &agrave; d&rsquo;autres divisions de la CCSN pour qu&rsquo;elles l&rsquo;examinent. Cette proc&eacute;dure permet de veiller &agrave; ce que les autres exigences de la CCSN en mati&egrave;re de garanties, de s&eacute;curit&eacute; (R&egrave;glement sur la s&eacute;curit&eacute; nucl&eacute;aire), d&rsquo;emballage et de transport de substances nucl&eacute;aires (<a href="http://laws-lois.justice.gc.ca/fra/reglements/DORS-2000-208/index.html"><em>R&egrave;glement sur l&rsquo;emballage et le transport des substances nucl&eacute;aires</em></a>), de gestion des d&eacute;chets et de contr&ocirc;les de possession soient prises en compte avant la d&eacute;livrance du permis d&rsquo;importation ou d&rsquo;exportation.</p>
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
<h3 id="sec6-3">6.3	D&eacute;cision du fonctionnaire d&eacute;sign&eacute;</h3>  <p>Le personnel de la CCSN examine la demande et formule une recommandation au fonctionnaire d&eacute;sign&eacute;. La d&eacute;cision d&rsquo;accorder ou non le permis d&rsquo;importation ou d&rsquo;exportation est prise par le fonctionnaire d&eacute;sign&eacute;.</p>  <p>Si le fonctionnaire d&eacute;sign&eacute; envisage de refuser la demande, il en informera le demandeur par l&rsquo;interm&eacute;diaire d&rsquo;une lettre officielle. Conform&eacute;ment &agrave; l&rsquo;alin&eacute;a 39(1)a) de la LSRN, le fonctionnaire d&eacute;sign&eacute; donne la possibilit&eacute; d&rsquo;&ecirc;tre entendu &agrave; l&rsquo;auteur de la demande, avant de refuser la d&eacute;livrance d&rsquo;une licence ou d&rsquo;un permis. Ainsi, la lettre envoy&eacute;e indique au demandeur qu&rsquo;il peut soumettre tout renseignement suppl&eacute;mentaire qu&rsquo;il croit devoir &ecirc;tre pris en compte par le fonctionnaire d&eacute;sign&eacute;. De plus, la lettre informe le demandeur des d&eacute;lais &agrave; respecter pour d&eacute;poser des renseignements suppl&eacute;mentaires &agrave; l&rsquo;intention du fonctionnaire d&eacute;sign&eacute; ainsi que les directives pour soumettre ces renseignements. L&rsquo;article 27 des <a href="http://laws-lois.justice.gc.ca/fra/reglements/DORS-2000-211/page-1.html"><em>R&egrave;gles de proc&eacute;dure de la Commission canadienne de sÃ»ret&eacute; nucl&eacute;aire</em></a> s&rsquo;applique en ce qui a trait &agrave; la possibilit&eacute; d&rsquo;&ecirc;tre entendu.</p>  <p>Si le fonctionnaire d&eacute;sign&eacute; devait refuser d&rsquo;accorder le permis, le demandeur peut en appeler de cette d&eacute;cision devant la Commission. Le paragraphe 43(1) de la LSRN et les articles 29 et 30 des <em>R&egrave;gles de proc&eacute;dure de la Commission canadienne de s&ucirc;ret&eacute; nucl&eacute;aire</em> s&rsquo;appliquent aux demandes faisant l&rsquo;objet d&rsquo;un appel.</p>
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
<h2 id="sec7">7. Contr&ocirc;les de l&rsquo;utilisation ultime pour les articles &agrave; double usage dans le secteur nucl&eacute;aire</h2>  <p>Gr&acirc;ce aux contr&ocirc;les de l&rsquo;utilisation ultime, aussi appel&eacute;s contr&ocirc;les Â« fourre-tout Â», la CCSN contr&ocirc;le les articles ne figurant pas n&eacute;cessairement dans les listes de l&rsquo;annexe E, mais pour lesquels il est raisonnable de croire que l&rsquo;utilisation pr&eacute;vue peut &ecirc;tre li&eacute;e &agrave; un programme d&rsquo;armement nucl&eacute;aire.</p>  <p>Ces articles moins sensibles, qui ne satisfont pas aux caract&eacute;ristiques techniques des articles figurant &agrave; la partie B de l&rsquo;annexe E, peuvent n&eacute;anmoins &ecirc;tre utilis&eacute;s dans un programme d&rsquo;armement nucl&eacute;aire. Notons par exemple les articles utilis&eacute;s dans l&rsquo;&eacute;laboration et l&rsquo;infrastructure d&rsquo;un programme d&rsquo;armement nucl&eacute;aire, comme des programmes universitaires de recherche et de d&eacute;veloppement ou de r&eacute;acteurs nucl&eacute;aires non vis&eacute;s par des garanties. Par cons&eacute;quent, de tels articles peuvent n&eacute;cessiter un permis s&rsquo;il est raisonnable de soup&ccedil;onner que leur utilisation pr&eacute;vue est li&eacute;e &agrave; un programme d&rsquo;armement nucl&eacute;aire. Les contr&ocirc;les de l&rsquo;utilisation ultime pr&eacute;vus &agrave; l&rsquo;annexe E s&rsquo;appliquent aux substances (paragraphe B.1.1.20), &agrave; l&rsquo;&eacute;quipement (paragraphe B.2.7.6) et aux renseignements (paragraphe B.3).</p>
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
<h3 id="sec7-1">7.1	Pourquoi les contr&ocirc;les de l&rsquo;utilisation ultime sont-ils n&eacute;cessaires?</h3>  <p>Les articles figurant dans l&rsquo;annexe E sont d&eacute;termin&eacute;s &agrave; partir des listes d&rsquo;articles &agrave; caract&egrave;re nucl&eacute;aire et &agrave; double usage dans le secteur nucl&eacute;aire convenues par le GFN. Les listes comportent uniquement les articles les plus sensibles sur le plan de la prolif&eacute;ration, puisque l&rsquo;inclusion de tous les articles possibles (de caract&egrave;re nucl&eacute;aire moins sensible) pouvant &eacute;ventuellement soutenir un programme d&rsquo;armement nucl&eacute;aire entra&icirc;nerait un fardeau inutile pour le commerce l&eacute;gitime. Par cons&eacute;quent, les contr&ocirc;les de l&rsquo;utilisation ultime permettent &agrave; la CCSN de s&rsquo;assurer que les exportateurs canadiens ne contribuent pas sciemment ou inconsciemment &agrave; un programme d&rsquo;armement nucl&eacute;aire en exigeant que des articles moins sensibles fassent l&rsquo;objet d&rsquo;une demande de permis s&rsquo;ils sont ou pourraient &ecirc;tre utilis&eacute;s dans un programme d&rsquo;armement nucl&eacute;aire.</p>
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
<h3 id="sec7-2">7.2	Quand les contr&ocirc;les de l&rsquo;utilisation ultime s&rsquo;appliquent-ils?</h3>  <p>La CCSN d&eacute;cide s&rsquo;il convient ou non d&rsquo;appliquer un contr&ocirc;le de l&rsquo;utilisation ultime &agrave; la r&eacute;ception d&rsquo;une demande de renseignements ou d&rsquo;un formulaire de demande de la part de l&rsquo;exportateur, ou si elle d&eacute;termine que l&rsquo;exp&eacute;dition est destin&eacute;e &agrave; un utilisateur final qui suscite des inqui&eacute;tudes. Cette derni&egrave;re d&eacute;termination peut d&eacute;couler de renseignements re&ccedil;us par la CCSN, ou du fait que l&rsquo;Agence des services frontaliers du Canada (ASFC) a intercept&eacute; une exp&eacute;dition et consulte la CCSN pour savoir si cette exp&eacute;dition requiert un permis d&rsquo;exportation.</p>  <p>Lorsque le contr&ocirc;le de l&rsquo;utilisation ultime est applicable, l&rsquo;exportateur sera inform&eacute; par lettre ou par courriel qu&rsquo;un permis d&rsquo;exportation est requis avant que l&rsquo;article ou les articles puissent Ãªtre export&eacute;s. Une fois la demande d&rsquo;exportation soumise, celle-ci sera &eacute;valu&eacute;e selon l&rsquo;approche d&eacute;crite dans la section 6 du pr&eacute;sent document. Si, dans le cadre de l&rsquo;&eacute;valuation, le personnel de la CCSN conclut qu&rsquo;il n&rsquo;y a pas de risque &agrave; ce que l&rsquo;article soit utilis&eacute; dans un programme d&rsquo;armement nucl&eacute;aire, ou d&eacute;tourn&eacute; &agrave; une telle fin, un permis sera d&eacute;livr&eacute;. Si le personnel de la CCSN recommande de refuser qu&rsquo;un permis soit d&eacute;livr&eacute;, le processus pr&eacute;c&eacute;demment mentionn&eacute; de refus d&rsquo;un permis s&rsquo;appliquera.</p>
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
<h3 id="sec7-3">7.3	Que doivent faire les exportateurs?</h3>  <p>Si une exportation doit faire l&rsquo;objet d&rsquo;un contr&ocirc;le d&rsquo;utilisation ultime, l&rsquo;exportateur doit communiquer avec la CCSN et demander un permis. Une exportation sera probablement contr&ocirc;l&eacute;e si l&rsquo;on sait ou soup&ccedil;onne que son utilisation est li&eacute;e &agrave; la conception, &agrave; l&rsquo;&eacute;laboration, &agrave; la production, &agrave; la manutention, &agrave; l&rsquo;utilisation, &agrave; l&rsquo;entretien ou &agrave; l&rsquo;entreposage d&rsquo;armes nucl&eacute;aires ou d&rsquo;autres engins explosifs nucl&eacute;aires.</p>  <p>Les exportateurs sont souvent incapables de d&eacute;terminer avec certitude si leurs produits sont destin&eacute;s &agrave; des fins illicites, par exemple, un programme d&rsquo;armement nucl&eacute;aire. C&rsquo;est pourquoi l&rsquo;annexe A offre de l&rsquo;orientation aux exportateurs pour cerner les demandes de renseignements ou les commandes suspectes devant &ecirc;tre examin&eacute;es de plus pr&egrave;s.</p>  <p>Lorsqu&rsquo;un exportateur n&rsquo;est pas certain si des contr&ocirc;les d&rsquo;utilisation ultime s&rsquo;appliquent, il peut :</p>
<ul>
<li>communiquer avec la CCSN, &agrave; <a href="mailto:export-import@cnsc-ccsn.gc.ca">export-import@cnsc-ccsn.gc.ca</a> pour demander des renseignements compl&eacute;mentaires</li>
<li>pr&eacute;senter une demande de permis d&rsquo;exportation</li>
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
<div id="8"></div>
<h2 id="sec8">8. Conformit&eacute; aux exigences de la CCSN</h2>  <p>En ce qui a trait &agrave; l&rsquo;importation et &agrave; l&rsquo;exportation de substances nucl&eacute;aires, d&rsquo;&eacute;quipement et de renseignements r&eacute;glement&eacute;s, les personnes et les entreprises sont tenues de se conformer &agrave; la LSRN, &agrave; ses r&egrave;glements, aux permis et &agrave; leurs conditions, ainsi qu&rsquo;&agrave; toute ordonnance d&eacute;coulant de l&rsquo;application de la LSRN.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="8.1"></div>
<h3 id="sec8-1">8.1	Comment la CCSN v&eacute;rifie-t-elle la conformit&eacute;?</h3>  <p>La CCSN r&eacute;alise des activit&eacute;s pour v&eacute;rifier et promouvoir la conformit&eacute; en poursuivant l&rsquo;objectif d&rsquo;assurer aux Canadiens et &agrave; la communaut&eacute; internationale que les transferts internationaux d&rsquo;articles &agrave; caract&egrave;re nucl&eacute;aire et d&rsquo;articles &agrave; double usage dans le secteur nucl&eacute;aire ne servent qu&rsquo;&agrave; des fins pacifiques et non &agrave; des programmes d&rsquo;engins explosifs. La v&eacute;rification de la conformit&eacute; aux conditions de permis et les activit&eacute;s d&rsquo;inspection sont des moyens qu&rsquo;utilise la CCSN pour s&rsquo;assurer de la conformit&eacute; aux permis d&rsquo;importation et d&rsquo;exportation.</p>
<h4>V&eacute;rification de la conformit&eacute; aux conditions de permis</h4>  <p>En vertu du paragraphe 24(5) de la LSRN, les permis peuvent &ecirc;tre assortis des conditions que la CCSN estime n&eacute;cessaires &agrave; l&rsquo;application de la Loi. Tout comme les autres permis d&eacute;livr&eacute;s par la CCSN, les permis d&rsquo;importation et d&rsquo;exportation sont assortis de conditions que le titulaire de permis doit respecter. Les conditions comprises dans un permis varient selon la nature de l&rsquo;article ou des articles import&eacute;s ou export&eacute;s et portent g&eacute;n&eacute;ralement sur les points suivants :</p>
<ul>
<li>notifications pr&eacute;alables &agrave; l&rsquo;exp&eacute;dition ou &agrave; la suite de celle-ci</li>
<li>production de rapports mensuels ou annuels</li>
<li>mesures &agrave; prendre en regard de l&rsquo;ASFC en vertu de l&rsquo;article 18 du RGSRN</li>
</ul>  <p>La CCSN examine les renseignements fournis par les titulaires de permis afin de v&eacute;rifier que la quantit&eacute; d&rsquo;articles autoris&eacute;e par le permis n&rsquo;est pas d&eacute;pass&eacute;e et que, dans le cas de permis d&rsquo;exportation, les articles sont export&eacute;s vers des utilisateurs finaux autoris&eacute;s. La CCSN examine &eacute;galement les renseignements fournis dans le cadre des notifications pr&eacute;alables &agrave; l&rsquo;exp&eacute;dition ou &agrave; la suite de celle-ci afin de v&eacute;rifier que les exportations s&rsquo;effectuent conform&eacute;ment aux conditions de permis.</p>
<h4>Activit&eacute;s d&rsquo;inspection</h4>  <p>La CCSN a recours &agrave; deux types g&eacute;n&eacute;raux d&rsquo;activit&eacute;s d&rsquo;inspection afin de v&eacute;rifier la conformit&eacute; aux permis d&rsquo;importation et d&rsquo;exportation :</p>
<ul>
<li>Le premier se rapporte &agrave; des v&eacute;rifications de la documentation relative &agrave; l&rsquo;importation ou &agrave; l&rsquo;exportation r&eacute;alis&eacute;es &agrave; l&rsquo;installation du titulaire de permis. Les inspecteurs de la CCSN peuvent examiner des renseignements comme la documentation li&eacute;e &agrave; l&rsquo;exp&eacute;dition, les d&eacute;clarations de douanes de l&rsquo;ASFC et les documents de contr&ocirc;le des stocks.</li>
<li>Le second vise des inspections de marchandises intercept&eacute;es &agrave; la fronti&egrave;re par l&rsquo;ASFC afin de d&eacute;terminer si celles-ci n&eacute;cessitent un permis d&rsquo;exportation.</li>
</ul>
<p>Les documents requis pour la v&eacute;rification par la CCSN des transferts &eacute;lectroniques de renseignements nucl&eacute;aires contr&ocirc;l&eacute;s varient selon le cas. Le titulaire de permis doit &ecirc;tre clairement conscient du transfert de renseignements nucl&eacute;aires contr&ocirc;l&eacute;s, peu importe la m&eacute;thode du transfert. Par exemple, s&rsquo;il envoie de tels renseignements par courriel, le ou les courriels doivent &ecirc;tre li&eacute;s au permis en cause et doivent &ecirc;tre facilement reconnaissables. De cette mani&egrave;re, un dossier du transfert de renseignements nucl&eacute;aires contr&ocirc;l&eacute;s pourra &ecirc;tre conserv&eacute;.</p>  <p>Certains types de renseignements nucl&eacute;aires contr&ocirc;l&eacute;s pourraient &ecirc;tre associ&eacute;s &agrave; un syst&egrave;me officiel de contr&ocirc;le des stocks. Peu importe le syst&egrave;me qui est utilis&eacute; ou la mani&egrave;re dont ces renseignements sont transf&eacute;r&eacute;s, le titulaire de permis devrait pouvoir reconna&icirc;tre facilement les transferts et ceux-ci devraient &ecirc;tre consign&eacute;s dans des dossiers qui seront fournis &agrave; la CCSN, qui recommande de conserver les documents pendant six ans.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="8.2"></div>
<h3 id="sec8-2">8.2	Divulgation de non-conformit&eacute;</h3>  <p>La CCSN reconna&icirc;t que des importateurs et des exportateurs responsables peuvent, &agrave; l&rsquo;occasion, et par inadvertance, n&eacute;gliger d&rsquo;obtenir l&rsquo;autorisation appropri&eacute;e d&rsquo;importation ou d&rsquo;exportation de la CCSN qu&rsquo;exige la LSRN. De m&ecirc;me, il peut arriver qu&rsquo;ils n&eacute;gligent non intentionnellement de se conformer &agrave; une condition d&rsquo;un permis d&rsquo;importation ou d&rsquo;exportation. Le cas &eacute;ch&eacute;ant, les importateurs ou les exportateurs sont incit&eacute;s &agrave; divulguer tout incident de non-conformit&eacute; &agrave; la CCSN aussit&ocirc;t que possible. On trouvera &agrave; l&rsquo;annexe B les proc&eacute;dures recommand&eacute;es de divulgation &agrave; suivre en cas de non-conformit&eacute;.</p>  <p>La CCSN accueille favorablement la divulgation si, apr&egrave;s examen des renseignements fournis (y compris de la nature et de la gravit&eacute; de la violation ou de l&rsquo;omission divulgu&eacute;e), elle estime que l&rsquo;importateur ou l&rsquo;exportateur a fait preuve de pleine coop&eacute;ration et a pris les mesures appropri&eacute;es pour pr&eacute;venir la r&eacute;currence de non-conformit&eacute; &agrave; l&rsquo;avenir. Dans de tels cas, aucune autre mesure n&rsquo;est g&eacute;n&eacute;ralement exig&eacute;e.</p>  <p>Si aucune divulgation n&rsquo;a lieu, la CCSN peut envisager diverses options pour donner suite &agrave; la situation de non-conformit&eacute;, selon la gravit&eacute; de l&rsquo;incident ou les circonstances globales. L&rsquo;une de ces options est d&rsquo;imposer une sanction administrative p&eacute;cuniaire consistant en une p&eacute;nalit&eacute; p&eacute;cuniaire impos&eacute;e sans intervention de tribunaux pour un manquement &agrave; une exigence r&eacute;glementaire (pour de plus amples d&eacute;tails, voir le <a href="http://www.nuclearsafety.gc.ca/">site Web de la CCSN</a>). Les cas plus graves peuvent &ecirc;tre transf&eacute;r&eacute;s &agrave; l&rsquo;ASFC ou &agrave; la Gendarmerie royale du Canada (GRC) aux fins d&rsquo;examen approfondi.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="8.3"></div>
<h3 id="sec8-3">8.3 Pratiques exemplaires pour des exportateurs responsables</h3>  <p>On peut trouver des renseignements suppl&eacute;mentaires sur les pratiques exemplaires pour les exportateurs responsables dans un document publi&eacute; sur le site Web du GFN. Le document intitul&eacute; <a href="http://www.nuclearsuppliersgroup.org/A_test/01-eng/12-pract.php?%20btn=12"><em>Good Practices for Corporate Standards to Support the Efforts of the International Community in the Non-Proliferation of Weapons of Mass Destruction</em></a> (Pratiques exemplaires en mati&egrave;re de normes d&rsquo;entreprises visant &agrave; soutenir l&rsquo;effort de la communaut&eacute; internationale en ce qui a trait &agrave; la non-prolif&eacute;ration des armes de destruction massive [traduction], en anglais seulement) offre des suggestions qui sont non contraignantes sur le plan juridique et qui visent &agrave; relancer le soutien du secteur non commercial &agrave; la non-prolif&eacute;ration en r&eacute;duisant le risque de fournir par inadvertance des articles &agrave; des programmes d&rsquo;acquisitions illicites.</p>  <p>Les <a href="http://nuclearprinciples.org/wp-content/uploads/2011/09/FRN_Principles_of_Conduct.pdf"><em>Principes de conduite des exportateurs de centrales &eacute;lectronucl&eacute;aires</em></a> constituent un autre exemple de document sur les pratiques exemplaires, mettant l&rsquo;accent sur les fournisseurs.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="partII"></div>
<h2 id="partII">Partie II : Sources radioactives &agrave; risque &eacute;lev&eacute;</h2>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="9"></div>
<h2 id="sec9">9. Cadre du programme</h2>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="9.1"></div>
<h3 id="sec9-1">9.1	Vue d&#39;ensemble</h3>  <p>La pr&eacute;sente section &eacute;tablit le fondement des contr&ocirc;les &agrave; l&rsquo;importation et &agrave; l&rsquo;exportation mis en &oelig;uvre par la CCSN en ce qui a trait aux sources radioactives &agrave; risque &eacute;lev&eacute; (sources radioactives de cat&eacute;gorie 1 et 2).</p>  <p>Le programme de contr&ocirc;le de l&rsquo;exportation et de l&rsquo;importation de sources radioactives &agrave; risque &eacute;lev&eacute; de la CCSN comprend l&rsquo;examen de l&rsquo;engagement du Canada par rapport &agrave; deux documents cl&eacute;s de l&rsquo;Agence internationale de l&rsquo;&eacute;nergie atomique (AIEA) : le <a href="http://www-pub.iaea.org/books/iaeabooks/7227/code-of-conduct-on-the-safety-and-security-of-radioactive-sources-guidance-on-the-import-and-export-of-radioactive-sources"><em>Code de conduite sur la s&ucirc;ret&eacute; et la s&eacute;curit&eacute; des sources radioactives</em></a> (le Code) et le document <a href="http://www-pub.iaea.org/books/IAEABooks/8901/Guidance-on-the-Import-and-Export-of-Radioactive-Sources"><em>Orientations pour l&rsquo;importation et l&rsquo;exportation de sources radioactives</em></a> (le document d&rsquo;Orientations). Sous le leadership de l&rsquo;AIEA, le Code et le document d&rsquo;Orientations ont &eacute;t&eacute; &eacute;labor&eacute;s par la communaut&eacute; internationale afin d&rsquo;accro&icirc;tre la s&ucirc;ret&eacute; et la s&eacute;curit&eacute; des sources radioactives dans le monde. Le gouvernement du Canada est d&eacute;termin&eacute; &agrave; satisfaire aux dispositions contenues dans le Code, y compris sur le plan de la mise en &oelig;uvre de contr&ocirc;les &agrave; l&rsquo;exportation et &agrave; l&rsquo;importation conformes aux dispositions du Code et du document d&rsquo;Orientations.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="9.2"></div>
<h3 id="sec9-2">9.2	Contexte national</h3>  <p>En tant qu&rsquo;organisme de r&eacute;glementation nucl&eacute;aire du Canada, la CCSN est charg&eacute;e de contr&ocirc;ler l&rsquo;exportation et l&rsquo;importation des sources radioactives &agrave; risque &eacute;lev&eacute;. Gr&acirc;ce &agrave; l&rsquo;application de ces mesures de contr&ocirc;le de l&rsquo;exportation et de l&rsquo;importation, la CCSN renforce la s&ucirc;ret&eacute; et la s&eacute;curit&eacute; nationales et internationales en s&rsquo;assurant que seules des personnes autoris&eacute;es puissent b&eacute;n&eacute;ficier de sources radioactives &agrave; risque &eacute;lev&eacute;. Le programme de la CCSN est conforme au Code et au document d&rsquo;Orientations, qui ont les objectifs suivants : </p>
<ul>
<li>atteindre un niveau &eacute;lev&eacute; de s&ucirc;ret&eacute; et de s&eacute;curit&eacute; relativement aux sources radioactives &agrave; risque &eacute;lev&eacute;</li>
<li>r&eacute;duire la possibilit&eacute; d&rsquo;une exposition dangereuse et accidentelle &agrave; une source radioactive &agrave; risque &eacute;lev&eacute; ou de l&rsquo;utilisation malveillante de telles sources en vue de causer du tort aux personnes, &agrave; la soci&eacute;t&eacute; et &agrave; l&rsquo;environnement</li>
<li>att&eacute;nuer ou r&eacute;duire au maximum les cons&eacute;quences radiologiques de tout accident ou acte malveillant impliquant une source radioactive &agrave; risque &eacute;lev&eacute;</li>
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
<div id="9.3"></div>
<h3 id="sec9-3">9.3	Contexte international</h3>  <p>La mise en &oelig;uvre de contr&ocirc;les &agrave; l&rsquo;importation et &agrave; l&rsquo;exportation relatifs aux sources radioactives conformes au Code et au document d&rsquo;Orientations n&eacute;cessite une coop&eacute;ration et des consultations entre les organismes de r&eacute;glementation des pays exportateurs et importateurs. La CCSN peut conclure des arrangements administratifs bilat&eacute;raux avec les organismes de r&eacute;glementation de pays avec lesquels le Canada fait le commerce de sources radioactives &agrave; risque &eacute;lev&eacute; et de pays assujettis au m&ecirc;me engagement que le Canada &agrave; l&rsquo;&eacute;gard de contr&ocirc;les internationaux efficaces pour les transferts de sources radioactives. Ces arrangements visent &agrave; &eacute;tablir des proc&eacute;dures bilat&eacute;rales et des voies de communication harmonis&eacute;es en vue de la mise en &oelig;uvre efficiente des contr&ocirc;les &agrave; l&rsquo;importation et &agrave; l&rsquo;exportation et ainsi de r&eacute;duire le risque de retards excessifs sur le plan des autorisations r&eacute;glementaires.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="10"></div>
<h2 id="sec10">10. Sources radioactives &agrave; risque &eacute;lev&eacute;</h2>  <p>Les sources radioactives &agrave; risque &eacute;lev&eacute; correspondent aux sources de cat&eacute;gorie 1 et 2 conform&eacute;ment &agrave; la cat&eacute;gorisation de l&rsquo;AIEA des sources radioactives (RS-G-1.9 de l&rsquo;AIEA, Cat&eacute;gorisation des sources radioactives). Le tableau I &eacute;tablit la liste des isotopes et des seuils d&rsquo;activit&eacute; en t&eacute;rabecquerels (TBq) pour les sources de cat&eacute;gorie 1 et 2 n&eacute;cessitant des autorisations d&rsquo;exportation. Les sources de cat&eacute;gorie 1 et 2 sont d&eacute;finies comme des sources radioactives &agrave; risque &eacute;lev&eacute; aux fins du programme de contr&ocirc;le de l&rsquo;exportation et de l&rsquo;importation de la CCSN.</p>  <p><strong>Tableau I : Activit&eacute;s correspondant aux seuils des sources radioactives de cat&eacute;gorie 1 et 2</strong></p>
<table className="width-100">  <tr>
<th className="text-center">Substance nucl&eacute;aire</th>
<th className="text-center">Cat&eacute;gorie 1 (TBq)</th>
<th className="text-center">Cat&eacute;gorie 2 (TBq)</th>  </tr>  <tr>
<td>Am&eacute;ricium 241</td>
<td className="text-center">60</td>
<td className="text-center">0,6</td>  </tr>  <tr>
<td>Am&eacute;ricium 41/B&eacute;ryllium</td>
<td className="text-center">60</td>
<td className="text-center">0,6</td>  </tr>  <tr>
<td>Californium 252</td>
<td className="text-center">20</td>
<td className="text-center">0,2</td>  </tr>  <tr>
<td>Curium 244</td>
<td className="text-center">50</td>
<td className="text-center">0,5</td>  </tr>  <tr>
<td>Cobalt 60</td>
<td className="text-center">30</td>
<td className="text-center">0,3</td>  </tr>  <tr>
<td>C&eacute;sium 137</td>
<td className="text-center">100</td>
<td className="text-center">1,0</td>  </tr>  <tr>
<td>Gadolinium 153</td>
<td className="text-center">1 000</td>
<td className="text-center">10,0</td>  </tr>  <tr>
<td>Iridium 192</td>
<td className="text-center">80</td>
<td className="text-center">0,8</td>  </tr>  <tr>
<td>Prom&eacute;thium 147</td>
<td className="text-center">40 000</td>
<td className="text-center">400,0</td>  </tr>  <tr>
<td>Plutonium 238</td>
<td className="text-center">60</td>
<td className="text-center">0,6</td>  </tr>  <tr>
<td>Plutonium 239/B&eacute;ryllium</td>
<td className="text-center">60</td>
<td className="text-center">0,6</td>  </tr>  <tr>
<td>Radium 226</td>
<td className="text-center">40</td>
<td className="text-center">0,4</td>  </tr>  <tr>
<td>S&eacute;l&eacute;nium 75</td>
<td className="text-center">200</td>
<td className="text-center">2,0</td>  </tr>  <tr>
<td>Strontium 90 (Yttrium 90)</td>
<td className="text-center">1 000</td>
<td className="text-center">10,0</td>  </tr>  <tr>
<td>Thulium 170</td>
<td className="text-center">20 000</td>
<td className="text-center">200,0</td>  </tr>  <tr>
<td>Ytterbium 169</td>
<td className="text-center">300</td>
<td className="text-center">3,0</td>  </tr>  </table>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="11"></div>
<h2 id="sec11">11. Programme de contr&ocirc;les et de d&eacute;livrance de permis</h2>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="11.1"></div>
<h3 id="sec11-1">11.1 Aper&ccedil;u</h3>  <p>Le programme de contr&ocirc;le de l&rsquo;exportation et de l&rsquo;importation de la CCSN pour les sources radioactives &agrave; risque &eacute;lev&eacute; vise &agrave; satisfaire aux dispositions du Code et du document d&rsquo;Orientations de l&rsquo;AIEA en plus des exigences r&eacute;glementaires aux termes de la LSRN. Voici les &eacute;l&eacute;ments cl&eacute;s de ce programme de r&eacute;glementation : </p>
<ul>
<li>un processus de d&eacute;livrance des permis et d&rsquo;assurance de la conformit&eacute; pour l&rsquo;exportation des sources radioactives &agrave; risque &eacute;lev&eacute;</li>
<li>un processus de contr&ocirc;le pour l&rsquo;importation des sources radioactives &agrave; risque &eacute;lev&eacute;</li>
<li>la mise en &oelig;uvre de proc&eacute;dures administratives bilat&eacute;rales avec des organismes de r&eacute;glementation &eacute;trangers</li>
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
<div id="11.2"></div>
<h3 id="sec11-2">11.2 D&eacute;livrance des permis d&rsquo;exportation</h3>  <p>Le titulaire de permis de la CCSN autoris&eacute; &agrave; exploiter ou poss&eacute;der une source radioactive &agrave; risque &eacute;lev&eacute; doit demander et recevoir un permis d&rsquo;exportation avant d&rsquo;exporter cette source. Il doit s&rsquo;assurer que l&rsquo;information pr&eacute;sent&eacute;e dans sa demande est suffisamment compl&egrave;te pour permettre &agrave; la CCSN d&rsquo;&eacute;valuer efficacement la demande d&rsquo;autorisation d&rsquo;exportation. La CCSN &eacute;value l&rsquo;information soumise par le demandeur afin de v&eacute;rifier que l&rsquo;exportation propos&eacute;e satisfait aux exigences nationales et aux obligations internationales. Pour les exportations de sources radioactives de cat&eacute;gorie 1, la CCSN consulte l&rsquo;organisme de r&eacute;glementation du gouvernement importateur avant de r&eacute;aliser l&rsquo;&eacute;valuation d&rsquo;une demande.</p>  <p>Les permis d&rsquo;exportation peuvent contenir toute disposition ou condition jug&eacute;e n&eacute;cessaire pour l&rsquo;application de la LSRN, y compris des exigences visant la d&eacute;livrance de notifications pr&eacute;alables aux transferts.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="11.3"></div>
<h3 id="sec11-3">11.3 Contr&ocirc;les &agrave; l&rsquo;importation</h3>  <p>La CCSN ne d&eacute;livre pas de permis sp&eacute;cifiques pour l&rsquo;importation de sources radioactives &agrave; risque &eacute;lev&eacute;. Le titulaire de permis de la CCSN autoris&eacute; &agrave; poss&eacute;der de telles sources peut les importer conform&eacute;ment &agrave; l&rsquo;autorisation g&eacute;n&eacute;rale d&rsquo;importation de ces sources figurant &agrave; son permis de possession.</p>  <p>La CCSN soumet les importations de sources radioactives &agrave; risque &eacute;lev&eacute; &agrave; des contr&ocirc;les de conformit&eacute; r&eacute;glementaires additionnels pour s&rsquo;assurer que les responsabilit&eacute;s bilat&eacute;rales exig&eacute;es en vertu du Code et du document d&rsquo;Orientations sont honor&eacute;es. Ces contr&ocirc;les de conformit&eacute; comprennent la v&eacute;rification des notifications pr&eacute;alables &agrave; l&rsquo;importation re&ccedil;ues des exportateurs &eacute;trangers et les d&eacute;cisions relatives aux demandes re&ccedil;ues d&rsquo;organismes de r&eacute;glementation &eacute;trangers visant le consentement de la CCSN pour l&rsquo;importation de sources radioactives de cat&eacute;gorie 1.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="11.4"></div>
<h3 id="sec11-4">11.4 Comment pr&eacute;senter une demande de permis d&rsquo;exportation de la CCSN</h3>  <p>Le demandeur de permis d&rsquo;exportation doit &ecirc;tre titulaire d&rsquo;un permis d&eacute;livr&eacute; par la CCSN l&rsquo;autorisant &agrave; poss&eacute;der les sources radioactives &agrave; risque &eacute;lev&eacute; en question.</p>  <p>La CCSN a &eacute;labor&eacute; un formulaire de demande de permis d&rsquo;exportation (<a href="http://www.nuclearsafety.gc.ca/fra/pdfs/Forms_Applications/Import_Export/Application_for_a_Licence_to_Export_Nuclear_and_Nuclear-Related_Dual-Use_Items_f.pdf">Demande de permis visant l&rsquo;exportation de sources radioactives &agrave; risque &eacute;lev&eacute;</a>). L&rsquo;<a href="#appD">annexe D</a> du pr&eacute;sent document fournit des renseignements d&eacute;taill&eacute;s sur la mani&egrave;re de remplir le formulaire et comprend un exemplaire du formulaire aux fins de r&eacute;f&eacute;rence (annexe D.1).</p>  <p>Sauf autorisation contraire de la CCSN :</p>
<ul>
<li>chaque transaction d&rsquo;exportation ou ensemble de transactions sp&eacute;cifiques anticip&eacute; dans un d&eacute;lai pr&eacute;cis doit faire l&rsquo;objet d&rsquo;une demande distincte</li>
<li>chaque permis d&rsquo;exportation d&eacute;livr&eacute; peut comprendre un ou plusieurs importateurs, mais dans un seul pays</li>
<li>un permis d&rsquo;exportation distinct sera d&eacute;livr&eacute; pour les sources radioactives de cat&eacute;gorie 1 et celles de cat&eacute;gorie 2</li>
</ul>  <p>Chaque transaction peut comprendre de multiples exp&eacute;ditions ex&eacute;cut&eacute;es sur une p&eacute;riode pr&eacute;cis&eacute;e.</p>  <p>Les demandes de permis d&rsquo;exportation remplies doivent &ecirc;tre pr&eacute;sent&eacute;es &agrave; l&rsquo;administrateur des permis (Sources radioactives) de la CCSN par courrier, par t&eacute;l&eacute;copieur ou par courriel aux coordonn&eacute;es suivantes :</p>  <p>Administrateur des permis (Sources radioactives)<br />
Division de la non-prolif&eacute;ration et des contr&ocirc;les &agrave; l&rsquo;exportation<br />
Direction de la s&eacute;curit&eacute; et des garanties<br />
Commission canadienne de s&ucirc;ret&eacute; nucl&eacute;aire<br />
C.P. 1046, Succursale B<br />
280, rue Slater<br />
Ottawa (Ontario)  K1P 5S9</p>  <p>T&eacute;l&eacute;copieur : 613-995-5086<br />
Courriel : <a href="mailto:export-import@cnsc-ccsn.gc.ca">export-import@cnsc-ccsn.gc.ca</a></p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="11.5"></div>
<h3 id="sec11-5">11.5 Modification et transfert de permis</h3>  <p>Un permis d&rsquo;importation ou d&rsquo;exportation de la CCSN peut &ecirc;tre modifi&eacute; en vue : </p>
<ul>
<li>de changer sa date d&rsquo;expiration</li>
<li>d&rsquo;ajouter ou de supprimer des destinataires</li>
<li>d&rsquo;ajouter ou de supprimer des articles autoris&eacute;s pour l&rsquo;exportation</li>
<li>de modifier l&rsquo;adresse de l&rsquo;exp&eacute;diteur ou du destinataire</li>
<li>de modifier la quantit&eacute; d&rsquo;articles autoris&eacute;e par le permis existant</li>
<li>de modifier l&rsquo;utilisation ultime</li>
</ul>   <p>Pour faire modifier un permis, utilisez les formulaires de demande mentionn&eacute;s &agrave; l&rsquo;annexe D.1 du pr&eacute;sent document. S&eacute;lectionnez la case &laquo; Modification &ndash; num&eacute;ro de permis &raquo; et remplissez la ou les sections pertinentes du formulaire.</p>  <p><strong>Remarque :</strong> Un permis ne peut pas &ecirc;tre modifi&eacute; une fois que l&rsquo;exportation de la quantit&eacute; autoris&eacute;e d&rsquo;articles a eu lieu. De m&ecirc;me, une modification ne peut pas &ecirc;tre effectu&eacute;e apr&egrave;s l&rsquo;expiration du permis. Par cons&eacute;quent, les demandes de modification de permis devraient &ecirc;tre re&ccedil;ues par la CCSN au moins 15 jours ouvrables avant que le permis modifi&eacute; soit requis. Le transfert d&rsquo;un permis d&rsquo;exportation d&eacute;livr&eacute; par la CCSN d&rsquo;un titulaire de permis (l&rsquo;auteur du transfert) &agrave; une autre entit&eacute; (le destinataire du transfert) doit &ecirc;tre autoris&eacute; par la CCSN &agrave; la suite de l&rsquo;examen de la demande soumise par les deux entit&eacute;s. Un transfert de permis peut &ecirc;tre autoris&eacute; &agrave; la suite d&rsquo;un changement de statut juridique s&rsquo;il est possible de v&eacute;rifier que le nouveau titulaire de permis (le destinataire du transfert) est en mesure d&rsquo;assurer la conformit&eacute; &agrave; la LSRN, aux r&egrave;glements pertinents et &agrave; toutes les conditions de permis. Si des changements importants aux conditions sont aussi propos&eacute;s, le transfert ne sera pas autoris&eacute; et le demandeur de permis devra soumettre une nouvelle demande de permis. Pour en savoir plus, veuillez communiquer avec l&rsquo;administrateur des permis (Sources radioactives) de la CCSN.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="11.6"></div>
<h3 id="sec11-6">11.6 Dur&eacute;e de traitement et normes de service</h3>  <p>De fa&ccedil;on g&eacute;n&eacute;rale, les demandeurs devraient s&rsquo;attendre &agrave; ce que la CCSN prenne une d&eacute;cision visant la d&eacute;livrance d&rsquo;un permis d&rsquo;exportation dans les 15 jours ouvrables suivant la r&eacute;ception d&rsquo;une demande d&ucirc;ment remplie. Les demandes incomplÃ¨tes ne peuvent &ecirc;tre trait&eacute;es, et des renseignements suppl&eacute;mentaires seront exig&eacute;s avant de poursuivre l&rsquo;&eacute;valuation.</p>  <p>Bien que la CCSN s&rsquo;efforce de traiter toutes les demandes en moins de 15 jours ouvrables, le temps de traitement requis pour une demande de permis d&rsquo;exportation d&eacute;pend, en partie, de l&rsquo;&eacute;tendue des communications et consultations internationales requises. La p&eacute;riode n&eacute;cessaire pour effectuer celles-ci d&eacute;pend de divers facteurs, notamment les suivants : l&rsquo;&eacute;tat de l&rsquo;infrastructure r&eacute;glementaire du pays importateur pour le contr&ocirc;le des sources radioactives, la disponibilit&eacute; des renseignements &agrave; l&rsquo;&eacute;gard de l&rsquo;utilisateur ultime et la question de savoir s&rsquo;il s&rsquo;agit d&rsquo;une source de cat&eacute;gorie 1 ou 2. Par cons&eacute;quent, dans certains cas, un d&eacute;lai suppl&eacute;mentaire peut &ecirc;tre n&eacute;cessaire pour traiter la demande de permis d&rsquo;exportation. On encourage les demandeurs &agrave; faire la demande d&rsquo;un permis d&rsquo;exportation le plus t&ocirc;t possible.</p>   <p>Le site Web de la CCSN offre davantage de renseignements sur les <a href="/fra/acts-and-regulations/service-standards/import-export-licences/index">normes de service relatives aux permis d&rsquo;importation et d&rsquo;exportation</a>.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="12"></div>
<h2 id="sec12">12. &Eacute;valuation de la demande de permis</h2>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="12.1"></div>
<h3 id="sec12-1">12.1 R&eacute;ception de la demande</h3>  <p>&Agrave; la r&eacute;ception d&rsquo;une demande de permis d&rsquo;exportation, la CCSN envoie au demandeur un accus&eacute; r&eacute;ception qui comporte un num&eacute;ro de r&eacute;f&eacute;rence que le demandeur et la CCSN devraient utiliser dans toute correspondance future visant la demande.</p>   <p>La CCSN examine la demande pour s&rsquo;assurer que tous les renseignements requis sont pr&eacute;sent&eacute;s. S&rsquo;il manque un quelconque renseignement, la CCSN demandera au demandeur de le soumettre.</p>  <p><strong>Remarque :</strong> L&rsquo;examen initial ne tient pas compte de la qualit&eacute; de la demande ni de ses aspects techniques.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="12.2"></div>
<h3 id="sec12-2">12.2 &Eacute;valuation de la demande</h3>  <p>L&rsquo;&eacute;valuation de la demande d&rsquo;exportation de sources radioactives &agrave; risque &eacute;lev&eacute; comprend les &eacute;l&eacute;ments suivants, sans toutefois s&rsquo;y limiter :</p>
<ul>
<li>la v&eacute;rification des risques associ&eacute;s aux destinataires et utilisateurs finaux vis&eacute;s par le transfert afin de garantir que les sources ne sont pas d&eacute;tourn&eacute;es &agrave; des fins malveillantes; cette d&eacute;termination peut faire appel &agrave; des informations provenant de sources ouvertes ou classifi&eacute;es</li>
<li>la v&eacute;rification de la capacit&eacute; r&eacute;glementaire de l&rsquo;&Eacute;tat importateur pour garantir que les sources seront g&eacute;r&eacute;es de mani&egrave;re s&ucirc;re et s&eacute;curitaire</li>
<li>l&rsquo;obtention d&rsquo;un consentement d&rsquo;importation de l&rsquo;organisme de r&eacute;glementation de l&rsquo;&Eacute;tat importateur pour toutes les demandes d&rsquo;exportation de sources radioactives de cat&eacute;gorie 1 provenant du Canada afin de v&eacute;rifier si les utilisateurs finaux sont autoris&eacute;s &agrave; recevoir et poss&eacute;der les sources</li>
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
<div id="12.3"></div>
<h3 id="sec12-3">12.3 D&eacute;cision du fonctionnaire d&eacute;sign&eacute;</h3>  <p>Le personnel de la CCSN examine la demande et formule une recommandation au fonctionnaire d&eacute;sign&eacute;. La d&eacute;cision d&rsquo;accorder ou non le permis d&rsquo;exportation est prise par le fonctionnaire d&eacute;sign&eacute;, conform&eacute;ment au paragraphe 24(4) de la LSRN.</p>  <p>Si le fonctionnaire d&eacute;sign&eacute; envisage de refuser la demande, il en informera le demandeur par l&rsquo;interm&eacute;diaire d&rsquo;une lettre officielle. Conform&eacute;ment &agrave; l&rsquo;alin&eacute;a 39(1)a) de la LSRN, le fonctionnaire d&eacute;sign&eacute; donne la possibilit&eacute; d&rsquo;&ecirc;tre entendu &agrave; l&rsquo;auteur de la demande, avant de refuser la d&eacute;livrance d&rsquo;une licence ou d&rsquo;un permis. Ainsi, la lettre envoy&eacute;e indique au demandeur qu&rsquo;il peut soumettre tout renseignement suppl&eacute;mentaire qu&rsquo;il croit devoir &ecirc;tre pris en compte par le fonctionnaire d&eacute;sign&eacute;. De plus, la lettre informe le demandeur des d&eacute;lais &agrave; respecter pour d&eacute;poser des renseignements suppl&eacute;mentaires &agrave; l&rsquo;intention du fonctionnaire d&eacute;sign&eacute; ainsi que les directives pour soumettre ces renseignements. L&rsquo;article 27 des <a href="http://laws-lois.justice.gc.ca/fra/reglements/DORS-2000-211/page-1.html"><em>R&egrave;gles de proc&eacute;dure de la Commission canadienne de s&ucirc;ret&eacute; nucl&eacute;aire</em></a> s&rsquo;applique en ce qui a trait la possibilit&eacute; d&rsquo;&ecirc;tre entendu.</p>  <p>Si le fonctionnaire d&eacute;sign&eacute; devait refuser d&rsquo;accorder le permis, le demandeur peut en appeler de cette d&eacute;cision devant la Commission. Le paragraphe 43(1) de la LSRN et les articles 29 et 30 des <em>R&egrave;gles de proc&eacute;dure de la Commission canadienne de s&ucirc;ret&eacute; nucl&eacute;aire</em> s&rsquo;appliquent aux demandes faisant l&rsquo;objet d&rsquo;un appel.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="13"></div>
<h2 id="sec13">13. Conformit&eacute; aux exigences de la CCSN</h2>  <p>En ce qui a trait &agrave; l&rsquo;exportation de sources radioactives &agrave; risque &eacute;lev&eacute;, les personnes et les entreprises sont tenues de se conformer &agrave; la LSRN, &agrave; ses r&egrave;glements, aux permis et &agrave; leurs conditions, ainsi qu&rsquo;&agrave; toute ordonnance d&eacute;coulant de l&rsquo;application de la LSRN.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="13.1"></div>
<h3 id="sec13-1">13.1 Comment la CCSN v&eacute;rifie-t-elle la conformit&eacute;</h3>  <p>La CCSN r&eacute;alise des activit&eacute;s pour v&eacute;rifier et promouvoir la conformit&eacute;. La v&eacute;rification de la conformit&eacute; aux conditions de permis et les activit&eacute;s d&rsquo;inspection sont des moyens qu&rsquo;utilise la CCSN pour s&rsquo;assurer de la conformit&eacute; aux permis d&rsquo;exportation.</p>
<h4>V&eacute;rification de la conformit&eacute; aux conditions de permis</h4>  <p>En vertu du paragraphe 24(5) de la LSRN, les permis peuvent &ecirc;tre assortis des conditions que la CCSN estime n&eacute;cessaires &agrave; l&rsquo;application de la Loi. Tout comme les autres permis d&eacute;livr&eacute;s par la CCSN, les permis d&rsquo;exportation sont assortis de conditions que le titulaire de permis doit respecter. Les conditions comprises dans un permis portent sur les points suivants :</p>
<ul>
<li>notifications pr&eacute;alables &agrave; l&rsquo;exp&eacute;dition ou &agrave; la suite de celle-ci</li>
<li>mesures &agrave; prendre en regard de l&rsquo;ASFC en vertu de l&rsquo;article 18 du RGSRN</li>
</ul>  <p>La CCSN examine les renseignements fournis par les titulaires de permis afin de v&eacute;rifier que la quantit&eacute; d&rsquo;articles autoris&eacute;e par le permis n&rsquo;est pas d&eacute;pass&eacute;e. La CCSN examine &eacute;galement les renseignements fournis dans le cadre des notifications pr&eacute;alables &agrave; l&rsquo;exp&eacute;dition ou &agrave; la suite de celle-ci afin de v&eacute;rifier que les exportations s&rsquo;effectuent conform&eacute;ment aux conditions de permis.</p>
<h4>Activit&eacute;s d&rsquo;inspection</h4>  <p>La CCSN a recours &agrave; deux types g&eacute;n&eacute;raux d&rsquo;activit&eacute;s d&rsquo;inspection afin de v&eacute;rifier la conformit&eacute; aux permis d&rsquo;exportation :</p>
<ul>
<li>le premier se rapporte &agrave; des v&eacute;rifications de la documentation relative &agrave; l&rsquo;exportation r&eacute;alis&eacute;es &agrave; l&rsquo;installation du titulaire de permis. Les inspecteurs de la CCSN peuvent examiner des renseignements comme la documentation li&eacute;e &agrave; l&rsquo;exp&eacute;dition, les d&eacute;clarations de douanes de l&rsquo;ASFC et les documents de contr&ocirc;le des stocks.</li>
<li>le second vise des inspections de marchandises intercept&eacute;es &agrave; la fronti&egrave;re par l&rsquo;ASFC afin de d&eacute;terminer si celles-ci n&eacute;cessitent un permis d&rsquo;exportation de la CCSN.</li>
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
<div id="13.2"></div>
<h3 id="sec13-2">13.2 Divulgation de non-conformit&eacute;</h3>  <p>La CCSN reconna&icirc;t que des exportateurs responsables peuvent, &agrave; l&rsquo;occasion, et par inadvertance, n&eacute;gliger d&rsquo;obtenir l&rsquo;autorisation appropri&eacute;e d&rsquo;exportation de la CCSN qu&rsquo;exige la LSRN. De m&ecirc;me, il peut arriver qu&rsquo;ils n&eacute;gligent non intentionnellement de se conformer &agrave; une condition d&rsquo;un permis d&rsquo;exportation. Le cas &eacute;ch&eacute;ant, les exportateurs sont incit&eacute;s &agrave; divulguer tout incident de non-conformit&eacute; &agrave; la CCSN aussit&ocirc;t que possible. On trouvera &agrave; l&rsquo;annexe B les proc&eacute;dures de divulgation recommand&eacute;es &agrave; suivre en cas de non-conformit&eacute;.</p>  <p>La CCSN accueille favorablement la divulgation si, apr&egrave;s examen des renseignements fournis (y compris de la nature et de la gravit&eacute; de la violation ou de l&rsquo;omission divulgu&eacute;e), elle estime que l&rsquo;exportateur a fait preuve de pleine coop&eacute;ration et a pris les mesures appropri&eacute;es pour pr&eacute;venir la r&eacute;currence de non-conformit&eacute; &agrave; l&rsquo;avenir. Dans de tels cas, aucune autre mesure n&rsquo;est g&eacute;n&eacute;ralement exig&eacute;e.</p>  <p>Si aucune divulgation n&rsquo;a lieu, la CCSN peut envisager diverses options pour donner suite &agrave; la situation de non-conformit&eacute;, selon la gravit&eacute; de l&rsquo;incident ou les circonstances globales. L&rsquo;une de ces options est d&rsquo;imposer une sanction administrative p&eacute;cuniaire consistant en une p&eacute;nalit&eacute; p&eacute;cuniaire impos&eacute;e sans l&rsquo;intervention des tribunaux pour un manquement &agrave; une exigence r&eacute;glementaire (pour plus de d&eacute;tails, consulter le <a href="http://www.nuclearsafety.gc.ca/">site Web de la CCSN</a>). Les cas plus graves peuvent &ecirc;tre transf&eacute;r&eacute;s &agrave; l&rsquo;ASFC ou &agrave; la GRC aux fins d&rsquo;examen approfondi.</p>
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
<h2 id="appA">Annexe A : Exemples de demandes de renseignements ou de commandes suspectes possibles</h2>  <p>Les exemples suivants illustrent quelques situations pouvant s&rsquo;av&eacute;rer suspectes. Les importateurs et les exportateurs doivent envisager de communiquer avec la CCSN &agrave; l&rsquo;adresse <a href="mailto:export-import@cnsc-ccsn.gc.ca">export-import@cnsc-ccsn.gc.ca</a> ou soumettre une demande de permis dans l&rsquo;&eacute;ventualit&eacute; des circonstances suivantes ou de situations semblables :</p>
<ul>
<li>Le client est nouveau et les renseignements &agrave; son &eacute;gard sont incomplets ou incoh&eacute;rents.</li>
<li>Le client se montre r&eacute;ticent &agrave; fournir de l&rsquo;information visant l&rsquo;utilisation ultime de l&rsquo;article ou refuse de fournir une d&eacute;claration d&rsquo;utilisation ultime. Lorsque l&rsquo;information est communiqu&eacute;e, elle est vague.</li>
<li>Le client ne conna&icirc;t pas bien l&rsquo;article et ses caract&eacute;ristiques, mais souhaite n&eacute;anmoins l&rsquo;acheter.</li>
<li>L&rsquo;article ne correspond pas au domaine d&rsquo;activit&eacute; du client. Les explications fournies pour justifier l&rsquo;exportation des articles sont peu convaincantes compte tenu des activit&eacute;s habituelles du client ou de la haute technicit&eacute; des articles.</li>
<li>Le client est &eacute;vasif ou se montre r&eacute;ticent &agrave; indiquer si l&rsquo;article est destin&eacute; &agrave; une utilisation int&eacute;rieure, &agrave; l&rsquo;exportation ou &agrave; la r&eacute;exportation.</li>
<li>L&rsquo;article est incompatible avec le niveau technique du pays destinataire.</li>
<li>Le client est pr&ecirc;t &agrave; payer comptant pour un article qui n&eacute;cessite habituellement un financement, ou est dispos&eacute; &agrave; payer un prix plus &eacute;lev&eacute;. Les autres exemples de paiement inhabituel comprennent les virements bancaires d&eacute;tourn&eacute;s et la modification tardive des conditions du contrat de vente ou de la source de paiement.</li>
<li>Les services courants en mati&egrave;re d&rsquo;installation, de formation ou d&rsquo;entretien sont d&eacute;clin&eacute;s.</li>
<li>Le client demande des quantit&eacute;s excessives de pi&egrave;ces de rechange ou n&rsquo;accorde aucun int&eacute;r&ecirc;t aux pi&egrave;ces de rechange.</li>
<li>Le client demande que l&rsquo;article soit transf&eacute;r&eacute; &agrave; une adresse de r&eacute;exp&eacute;dition au Canada.</li>
<li>Une soci&eacute;t&eacute; de transport de fret est indiqu&eacute;e comme destination finale.</li>
<li>Des dispositions inhabituelles sont demand&eacute;es en mati&egrave;re d&rsquo;exp&eacute;dition, d&rsquo;emballage ou d&rsquo;&eacute;tiquetage.</li>
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
<div id="appB"></div>
<h2 id="appB">Annexe B : Divulgation de non-conformit&eacute;</h2>  <p>Toute divulgation volontaire de non-conformit&eacute; devrait &ecirc;tre accompagn&eacute;e d&rsquo;une lettre, sign&eacute;e par un agent principal de l&rsquo;entreprise, &eacute;tablissant clairement le but, soit de divulguer une situation de non conformit&eacute; &agrave; la <em>Loi sur la s&ucirc;ret&eacute; et la r&eacute;glementation nucl&eacute;aires</em> (LSRN), au <em>R&egrave;glement sur le contr&ocirc;le de l&rsquo;importation et de l&rsquo;exportation aux fins de la non-prolif&eacute;ration nucl&eacute;aire</em> (RCIENN) ou &agrave; un permis d&rsquo;importation ou d&rsquo;exportation. Cette lettre devrait &ecirc;tre adress&eacute;e au :</p>  <p>Directeur, Division de la non-prolif&eacute;ration et des contr&ocirc;les &agrave; l&rsquo;exportation<br />
Direction de la s&eacute;curit&eacute; et des garanties<br />
Commission canadienne de s&ucirc;ret&eacute; nucl&eacute;aire<br />
C.P. 1046, succursale B<br />
280, rue Slater<br />
Ottawa (Ontario)  K1P 5S9</p>
<p>La lettre d&rsquo;accompagnement ou la documentation &agrave; l&rsquo;appui devrait comporter les renseignements suivants :</p>
<ul>
<li>les d&eacute;tails des articles vis&eacute;s (y compris les caract&eacute;ristiques techniques pour l&rsquo;&eacute;valuation du statut de contr&ocirc;le de l&rsquo;exp&eacute;dition)</li>
<li>l&rsquo;utilisation ultime de l&rsquo;article ou des articles</li>
<li>la date de toutes les exp&eacute;ditions, le mode de transport et le point de sortie ou d&rsquo;entr&eacute;e</li>
<li>la quantit&eacute; et la valeur de chaque exp&eacute;dition pour tous les produits vis&eacute;s (y compris des copies des d&eacute;clarations de douanes soumises &agrave; l&rsquo;ASFC, ainsi que des copies des lettres de transport, d&rsquo;exp&eacute;ditions de fret, d&rsquo;exp&eacute;ditions ou des factures commerciales)</li>
<li>le contrat de vente conclu entre l&rsquo;exportateur et le destinataire final</li>
<li>pour chacune des exp&eacute;ditions vis&eacute;es, une d&eacute;claration expliquant si l&rsquo;exportation a &eacute;t&eacute; r&eacute;alis&eacute;e intentionnellement</li>
<li>une description des circonstances sous-jacentes &agrave; chaque importation ou exportation</li>
<li>une description des mesures prises ou des processus et proc&eacute;dures mis en place pour faire en sorte qu&rsquo;&agrave; l&rsquo;avenir, s&rsquo;il y a lieu, l&rsquo;exportateur ou l&rsquo;importateur disposera des permis d&rsquo;importation ou d&rsquo;exportation de la CCSN qui sont requis</li>
<li>tous les autres documents qui, selon l&rsquo;importateur ou l&rsquo;exportateur, visent l&rsquo;objet de la divulgation</li>
</ul>  <p>Pour en savoir plus ou pour demander des renseignements sur la mani&egrave;re de divulguer une situation de non conformit&eacute;, veuillez communiquer avec la personne-ressource de la Division de la non-prolif&eacute;ration et des contr&ocirc;les &agrave; l&rsquo;exportation de la CCSN dont les coordonn&eacute;es sont indiqu&eacute;es &agrave; la <a href="#sec5-2">section 5.2</a> du pr&eacute;sent document.</p>
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
<h2 id="appC">Annexe C : Comment remplir une demande d&rsquo;importation ou d&rsquo;exportation d&rsquo;articles &agrave; caract&egrave;re nucl&eacute;aire et d&rsquo;articles &agrave; double usage dans le secteur nucl&eacute;aire</h2>  <p>Les demandeurs doivent dÃ»ment remplir les formulaires <a href=http://www.nuclearsafety.gc.ca/fra/pdfs/Import_F.pdf">"Demande de permis pour importer des articles &agrave; caract&egrave;re nucl&eacute;aire</a> (voir la section C.1) ou <a href="http://www.nuclearsafety.gc.ca/fra/pdfs/Forms_Applications/Import_Export/Application_for_a_Licence_to_Export_Nuclear_and_Nuclear-Related_Dual-Use_Items_f.pdf">Demande de permis pour exporter des articles &agrave; caract&egrave;re nucl&eacute;aire</a> et &agrave; double usage dans le secteur nucl&eacute;aire et &agrave; double usage dans le secteur nucl&eacute;aire (voir la section C.2). Pour en savoir plus, veuillez communiquer avec l&rsquo;administrateur des permis de la CCSN comme l&rsquo;indique la <a href="#sec5-2">section 5.2</a> du pr&eacute;sent document.</p>  <p>Veillez &agrave; ce que les renseignements fournis dans les formulaires et dans tout document &agrave; l&rsquo;appui de la demande soient clairs, pr&eacute;cis et complets. Les pi&egrave;ces jointes doivent indiquer &agrave; quelle section du formulaire elles se rapportent. Dans le haut de chaque formulaire, vous devez cocher la case appropri&eacute;e pour d&eacute;terminer le type de permis demand&eacute;. Faites de m&ecirc;me pour indiquer s&rsquo;il s&rsquo;agit :</p>
<ul>
<li>d&rsquo;un nouveau permis</li>
<li>d&rsquo;une modification de permis (pr&eacute;cisez le num&eacute;ro du permis devant &ecirc;tre modifi&eacute;)</li>
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
<div id="appC.1"></div>
<h3 id="appC-1">C.1 : Orientation en vue de remplir une demande de permis d&rsquo;importation</h3>  <h4>Section 1 &ndash; Permis de possession</h4>  <p>Le cas &eacute;ch&eacute;ant, indiquez le num&eacute;ro de tout permis pertinent d&eacute;livr&eacute; par la CCSN, comme un permis de possession, d&rsquo;exploitation ou d&rsquo;installation</p>
<h4>Section 2 &ndash; Demandeur</h4>  <p>Indiquez le nom de la personne ou de l&rsquo;organisation qui pr&eacute;sente la demande de permis.</p>
<h4>Section 3 &ndash; Importateur</h4>  <p>Renvoie &agrave; l&rsquo;installation ou &agrave; l&rsquo;entit&eacute; au Canada qui recevra l&rsquo;article ou les articles, si ce n&rsquo;est pas le demandeur. Si l&rsquo;importateur n&rsquo;est pas le demandeur, le nom et l&rsquo;adresse de l&rsquo;installation importatrice appara&icirc;tront sur le permis comme &laquo; Adresse du destinataire &raquo;.</p>
<h4>Section 4 &ndash; Fournisseur(s)</h4>  <p>&Eacute;tablit l&rsquo;entit&eacute; ou les entit&eacute;s &eacute;trang&egrave;res qui fourniront l&rsquo;article ou les articles &agrave; l&rsquo;importateur. Les fournisseurs suppl&eacute;mentaires peuvent &ecirc;tre &eacute;num&eacute;r&eacute;s sur une feuille distincte.</p>
<h4>Section 5 &ndash; Description des articles &agrave; caract&egrave;re nucl&eacute;aire</h4>  <p>Consultez l&rsquo;annexe E pour d&eacute;terminer dans quelle partie de l&rsquo;annexe (c&rsquo;est-&agrave;-dire, la partie A ou la partie B) l&rsquo;article ou les articles sont contr&ocirc;l&eacute;s. Fournissez une courte description de l&rsquo;article ou des articles contr&ocirc;l&eacute;s, y compris les caract&eacute;ristiques techniques pertinentes, le mode (liquide, solide ou gazeux) et la quantit&eacute; exacte import&eacute;e. &Eacute;num&eacute;rez le ou les pays d&rsquo;origine de l&rsquo;article ou des articles.</p>
<h4>Section 6 &ndash; Utilisation ultime pr&eacute;vue</h4>  <p>D&eacute;crivez l&rsquo;utilisation ultime de l&rsquo;article, c&rsquo;est-&agrave;-dire, &agrave; quoi servira-t-il?</p>
<h4>Section 7 &ndash; Lieux d&rsquo;utilisation ultime pr&eacute;vus</h4>  <p>Indiquez les lieux o&ugrave; l&rsquo;article ou les articles seront utilis&eacute;s selon la description fournie &agrave; la section 6 de la demande.</p>
<h4>Section 8 &ndash; Exp&eacute;dition</h4>  <p>Indiquez les dates pr&eacute;vues pour les importations initiales et finales. Si la r&eacute;ception ne vise qu&rsquo;un article, ces dates seront identiques.</p>
<h4>Section 9 &ndash; S&eacute;curit&eacute;, emballage et transport</h4>  <p>Cette section s&rsquo;applique uniquement aux substances nucl&eacute;aires (plutonium, uranium, thorium).</p>  <p>Consultez le <a href="http://laws-lois.justice.gc.ca/fra/reglements/DORS-2000-209/"><em>R&egrave;glement sur la s&ucirc;ret&eacute; nucl&eacute;aire</em></a> afin d&rsquo;&eacute;tablir si la substance nucl&eacute;aire est de cat&eacute;gorie 1, 2 ou 3 et, le cas &eacute;ch&eacute;ant, suivez les directives fournies dans le R&egrave;glement.</p>  <p>Consultez le <a href="http://laws-lois.justice.gc.ca/fra/reglements/DORS-2015-145/index.html"><em>R&egrave;glement sur l&rsquo;emballage et le transport des substances nucl&eacute;aires, 2015</em></a> afin de d&eacute;terminer le type d&rsquo;emballage requis pour l&rsquo;article ou les articles, s&rsquo;il y a lieu.</p>  <p>L&rsquo;usage exclusif est d&eacute;fini dans le document <a href="http://www-pub.iaea.org/MTCD/publications/PDF/Pub1109_scr.pdf"><em>Advisory Material for the IAEA Regulations for the Safe Transport of Radioactive Material</em></a> (en anglais seulement), article 221.</p>
<h4>Section 10 &ndash; Renseignements suppl&eacute;mentaires</h4>  <p>Fournissez tout autre renseignement &agrave; l&rsquo;appui de la demande, s&rsquo;il y a lieu.</p>
<h4>Section 11 &ndash; Signataire autoris&eacute;</h4>  <p>Cette section doit &ecirc;tre remplie et sign&eacute;e par le demandeur ou son repr&eacute;sentant autoris&eacute;. Le signataire doit disposer du pouvoir de signer la demande de permis et de confirmer que tous les renseignements et les assertions fournis dans la demande sont v&eacute;ridiques et exacts autant qu&rsquo;il sache, et qu&rsquo;ils sont contraignants pour le demandeur.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appC.1.1"></div>
<div className="col-md-12 mrgn-lft-0">  <h4 id="appC-1-1">C.1.1 Demande de permis pour importer des articles &agrave; caract&egrave;re nucl&eacute;aire</h4>
<img src="/images/acts-and-regulations/regdoc2-13-2/appendix-c1-1a-fra.jpg" alt="Cette image montre un formulaire de demande de permis pour importer des articles à caractère nucléaire. Elle accompagne le texte explicatif en annexe. (page 1)" />
<img src="/images/acts-and-regulations/regdoc2-13-2/appendix-c1-1b-fra.jpg" alt="Cette image montre un formulaire de demande de permis pour importer des articles à caractère nucléaire. Elle accompagne le texte explicatif en annexe. (page 2)" />  </div>  <div className="clear"></div>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appC.2"></div>
<h3 id="appC-2">C.2 : Orientation en vue de remplir une demande de permis d&rsquo;exportation</h3>  <h4>Section 1 &ndash; Demandeur</h4>  <p>Indiquez le nom de la personne ou de l&rsquo;organisation qui pr&eacute;sente la demande de permis.</p>
<h4>Section 2 &ndash; Exportateur</h4>  <p>L&rsquo;exportateur est l&rsquo;entit&eacute; dont l&rsquo;adresse est le lieu d&rsquo;o&ugrave; l&rsquo;article ou les articles seront exp&eacute;di&eacute;s au moment de l&rsquo;exportation. Si l&rsquo;adresse de l&rsquo;exportateur diff&egrave;re de celle du demandeur, celle-ci doit &ecirc;tre mentionn&eacute;e dans la demande.</p>
<h4>Section 3a &ndash; Destinataires &agrave; la destination finale</h4>  <p>Renvoie &agrave; l&rsquo;entit&eacute; ou &agrave; l&rsquo;installation qui recevra l&rsquo;article ou les articles. Veuillez noter que celle-ci peut &ecirc;tre diff&eacute;rente du lieu d&rsquo;utilisation ultime si le destinataire &agrave; la destination finale re&ccedil;oit l&rsquo;article ou les articles, mais ne les utilise ni ne les modifie en fonction de l&rsquo;utilisation ultime pr&eacute;vue. Les autres destinataires doivent &ecirc;tre consign&eacute;s sur une feuille distincte.</p>
<h4>Section 3b &ndash; Destinataire interm&eacute;diaire</h4>  <p>Renvoie &agrave; toute entit&eacute; ou installation qui recevra l&rsquo;article ou les articles avant leur livraison au destinataire final. Cette situation peut se produire lorsque l&rsquo;entit&eacute; ou l&rsquo;installation d&eacute;tient l&rsquo;article ou les articles avant leur livraison au destinataire ou &agrave; l&rsquo;utilisateur final. Si l&rsquo;article ou les articles sont directement exp&eacute;di&eacute;s au destinataire ou &agrave; l&rsquo;utilisateur final, la pr&eacute;sente section ne s&rsquo;applique pas. Les destinataires suppl&eacute;mentaires doivent &ecirc;tre consign&eacute;s sur une feuille distincte.</p>
<h4>Section 4 &ndash; Description des articles &agrave; caract&egrave;re nucl&eacute;aire</h4>  <p>Consultez l&rsquo;annexe E afin de d&eacute;terminer le paragraphe dans lequel l&rsquo;article ou les articles sont contr&ocirc;l&eacute;s. Fournissez une courte description de l&rsquo;article ou des articles contr&ocirc;l&eacute;s, y compris les caract&eacute;ristiques techniques pertinentes, la forme (liquide, solide ou gazeux) et la quantit&eacute; exacte export&eacute;e. &Eacute;num&eacute;rez le ou les pays d&rsquo;origine de l&rsquo;article ou des articles.</p>
<h4>Section 5 &ndash; Utilisation ultime pr&eacute;vue</h4>  <p>D&eacute;crivez l&rsquo;utilisation ultime de l&rsquo;article, c&rsquo;est-&agrave;-dire, &agrave; quoi servira-t-il?</p>
<h4>Section 6 &ndash; Lieux d&rsquo;utilisation ultime pr&eacute;vue</h4>  <p>Indiquez les lieux o&ugrave; l&rsquo;article ou les articles seront utilis&eacute;s selon la description fournie &agrave; la section 5</p>
<h4>Section 7 &ndash; Exp&eacute;dition</h4>  <p>Donnez les dates pr&eacute;vues pour les exportations initiales et finales. Si un seul article est exp&eacute;di&eacute;, ces dates co&iuml;ncideront.</p>
<h4>Section 8 &ndash; S&eacute;curit&eacute;, emballage et transport</h4>  <p>Cette section ne vise que les substances nucl&eacute;aires</p>
<p>Consultez le <a href="http://laws-lois.justice.gc.ca/fra/reglements/DORS-2000-209/"><em>R&egrave;glement sur la s&eacute;curit&eacute; nucl&eacute;aire</em></a> afin d&rsquo;&eacute;tablir si la substance nucl&eacute;aire est de cat&eacute;gorie 1, 2 ou 3, et le cas &eacute;ch&eacute;ant, suivez les directives fournies dans le R&egrave;glement.</p>  <p>Consulter le <a href="http://laws-lois.justice.gc.ca/fra/reglements/DORS-2015-145/index.html"><em>R&egrave;glement sur l&rsquo;emballage et le transport des substances nucl&eacute;aires, 2015</em></a> afin de d&eacute;terminer, s&rsquo;il y a lieu, le type d&rsquo;emballage requis pour l&rsquo;article ou les articles.</p>  <p>L&rsquo;usage exclusif est d&eacute;fini dans le document <a href="http://www-pub.iaea.org/MTCD/publications/PDF/Pub1109_scr.pdf"><em>Advisory Material for the IAEA Regulations for the Safe Transport of Radioactive Material</em></a> (en anglais seulement), article 221.</p>
<h4>Section 9 &ndash; Renseignements suppl&eacute;mentaires</h4>  <p>Fournissez tout autre renseignement &agrave; l&rsquo;appui de la demande, s&rsquo;il y a lieu.</p>
<h4>Section 10 &ndash; Signataire autoris&eacute;</h4>  <p>Cette section doit &ecirc;tre remplie et sign&eacute;e par le demandeur ou son repr&eacute;sentant autoris&eacute;. Le signataire doit disposer du pouvoir de signer la demande de permis et de confirmer que tous les renseignements et les assertions fournis dans la demande sont v&eacute;ridiques et exacts autant qu&rsquo;il sache, et qu&rsquo;ils sont contraignants pour le demandeur.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appC.2.1"></div>
<h4 id="appC-2-1">C.2.1 Demande de permis visant l&rsquo;exportation d&rsquo;articles &agrave; caract&egrave;re nucl&eacute;aire et d&rsquo;articles &agrave; double usage dans le secteur nucl&eacute;aire</h4>
<img src="/images/acts-and-regulations/regdoc2-13-2/appendix-c2-1a-fra.jpg" alt="Cette image montre un formulaire de demande de permis pour exporter des articles à caractère nucléaire et à double usage dans le secteur nucléaire. Elle accompagne le texte explicatif en annexe. (page 1)" />
<img src="/images/acts-and-regulations/regdoc2-13-2/appendix-c2-1b-fra.jpg" alt="Cette image montre un formulaire de demande de permis pour exporter des articles à caractère nucléaire et à double usage dans le secteur nucléaire. Elle accompagne le texte explicatif en annexe. (page 2)")" />  </div>  <div className="clear"></div>
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
<h2 id="appD">Annexe D : Comment remplir une demande d&rsquo;exportation de sources radioactives &agrave; risque &eacute;lev&eacute;</h2>  <h3>Proc&eacute;dure de pr&eacute;sentation de la demande</h3>
<ol>
<li>Remplissez le formulaire, signez-le, imprimez-le et envoyez-le par courrier ou par t&eacute;l&eacute;copieur aux coordonn&eacute;es de la CCSN inscrites au bas du formulaire. Vous pouvez pr&eacute;senter votre demande par courriel imm&eacute;diatement, mais l&rsquo;exemplaire original sign&eacute; doit &ecirc;tre fourni.</li>
<li>Tous les renseignements obligatoires doivent &ecirc;tre fournis. Des renseignements compl&eacute;mentaires peuvent &ecirc;tre soumis dans un document distinct. Les demandes incompl&egrave;tes peuvent entra&icirc;ner des retards. Des renseignements ou des documents additionnels peuvent &ecirc;tre demand&eacute;s.</li>
<li>L&rsquo;examen d&rsquo;une demande d&ucirc;ment remplie est g&eacute;n&eacute;ralement r&eacute;alis&eacute; dans les 15 jours ouvrables suivant sa r&eacute;ception.</li>
<li>Une fois la demande approuv&eacute;e, un permis d&rsquo;exportation de sources radioactives &agrave; risque &eacute;lev&eacute; sera d&eacute;livr&eacute; et envoy&eacute; par t&eacute;l&eacute;copieur et par courrier au demandeur.</li>
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
<div id="appD.1"></div>
<h3 id="appD-1">D.1 : Orientation en vue de remplir la demande de permis d&rsquo;exportation</h3>  <h4>Partie 1A : Type de demande</h4>  <p>Indiquer s&rsquo;il s&rsquo;agit d&rsquo;une demande visant un nouveau permis ou une modification apport&eacute;e &agrave; un permis d&rsquo;exportation. S&rsquo;il s&rsquo;agit d&rsquo;une modification &agrave; un permis, indiquer le num&eacute;ro de permis.</p>
<h4>Partie 1B : Demandeur/exportateur</h4>  <p>Inscrire le nom officiel du demandeur.</p>  <p>Fournir un identificateur unique, s&rsquo;il y a lieu. Les demandeurs peuvent donner leur propre num&eacute;ro de r&eacute;f&eacute;rence aux fins de suivi; sinon, la case peut rester vide.</p>  <p>Inscrire le nom et les coordonn&eacute;es de la personne que la CCSN peut contacter au sujet de la demande.</p>  <p>Fournir le num&eacute;ro du permis de possession ou d&rsquo;exploitation de la CCSN pertinent du demandeur. Ces renseignements sont utilis&eacute;s par la CCSN pour v&eacute;rifier si le demandeur est autoris&eacute; &agrave; poss&eacute;der la source radioactive &agrave; risque &eacute;lev&eacute; qu&rsquo;il d&eacute;sire exporter.</p>
<h4>Partie 2A : Dernier(s) destinataire(s)/importateur</h4>  <p>Remarque : le dernier destinataire est celui qui prend possession de la source en vue de son utilisation.</p>  <p>Inscrire le num&eacute;ro d&rsquo;autorisation de l&rsquo;importateur et la date d&rsquo;expiration de l&rsquo;autorisation de recevoir et de poss&eacute;der une source radioactive &agrave; risque &eacute;lev&eacute;. Inclure une copie de l&rsquo;autorisation.</p>  <p>Si un num&eacute;ro d&rsquo;importation n&rsquo;est pas disponible, veuillez fournir tous commentaires ou d&eacute;tails compl&eacute;mentaires relatifs au dernier destinataire ou aux accords d&rsquo;exportation ou d&rsquo;importation susceptibles d&rsquo;aider la CCSN &agrave; &eacute;valuer si la source sera g&eacute;r&eacute;e de mani&egrave;re s&ucirc;re et s&eacute;curitaire par le dernier destinataire de la source.</p>  <p>Il peut y avoir plusieurs derniers destinataires. Veuillez utiliser une feuille s&eacute;par&eacute;e et fournir tous les renseignements demand&eacute;s &agrave; la partie 2A.</p>
<h4>Partie 2B : Destinataire(s) interm&eacute;diaire(s) par le biais d&rsquo;un importateur</h4>  <p>Fournir l&rsquo;information demand&eacute;e pour tout destinataire interm&eacute;diaire &eacute;tranger qui sera en possession de la source avant sa livraison au dernier destinataire.</p>
<h4>Partie 3 : Date(s) pr&eacute;vue(s) d&rsquo;exportation</h4>  <p>Inscrire la ou les dates auxquelles l&rsquo;exportation aura lieu. Si la transaction d&rsquo;exportation exige plusieurs exp&eacute;ditions, veuillez fournir la date pr&eacute;vue de chaque exp&eacute;dition. Si les dates d&rsquo;exp&eacute;dition sont incertaines, veuillez fournir les dates initiale et finale pr&eacute;vues pour les exp&eacute;ditions.</p>
<h4>Partie 4 : Description de la ou des sources radioactives</h4>  <p>Inscrire le nom de la substance nucl&eacute;aire.</p>  <p>Indiquer l&rsquo;activit&eacute; maximale par source (TBq), le nombre de sources &agrave; exporter et l&rsquo;activit&eacute; totale (TBq) des substances nucl&eacute;aires &agrave; exporter.</p>  <p>Indiquer le nom de tout &eacute;quipement r&eacute;glement&eacute; qui sera utilis&eacute; avec la source radioactive pour l&rsquo;utilisation ultime pr&eacute;vue.</p>  <p>D&eacute;crire l&rsquo;utilisation ultime pr&eacute;vue pour chaque source radioactive qui doit &ecirc;tre export&eacute;e.</p>
<h4>Partie 5 : Transport information</h4>  <p>Mettre un crochet dans la case appropri&eacute;e afin d&rsquo;indiquer le type de colis utilis&eacute; pour transporter la source radioactive.</p>  <p>Inscrire le num&eacute;ro du certificat d&rsquo;approbation du mod&egrave;le et la date &agrave; laquelle le mod&egrave;le du colis a &eacute;t&eacute; approuv&eacute; par la CCSN.</p>  <p>Si l&rsquo;&eacute;quipement r&eacute;glement&eacute; est un colis de type B(U), telle une cam&eacute;ra de gammagraphie industrielle, veuillez indiquer le num&eacute;ro de s&eacute;rie du colis.</p>  <p>En cas d&rsquo;utilisation d&rsquo;un colis de type A, aucune information compl&eacute;mentaire n&rsquo;est n&eacute;cessaire.</p>  <p>Mettre un crochet dans la case appropri&eacute;e pour indiquer si l&rsquo;exp&eacute;dition n&eacute;cessitera un transit par d&rsquo;autres pays que le pays importateur. Si c&rsquo;est le cas, veuillez indiquer ces pays de transit.</p>
<h4>Partie 6 : Renseignements suppl&eacute;mentaires visant le ou les destinataires, l&rsquo;utilisation ou les utilisations finales ainsi que la ou les sources radioactives</h4>  <p>Veuillez fournir les renseignements compl&eacute;mentaires sur la transaction d&rsquo;exportation susceptibles d&rsquo;appuyer la demande, ou tout autre d&eacute;tail pouvant faciliter les interactions entre la CCSN et l&rsquo;organisme de r&eacute;glementation ou le service public du pays importateur pour aider &agrave; l&rsquo;&eacute;valuation de la demande. Veuillez indiquer si le retour au Canada des sources radioactives remplac&eacute;es par les sources export&eacute;es fait partie des accords commerciaux conclus.</p>
<h4>Partie 7 : Autorit&eacute; du demandeur</h4>  <p>Veuillez fournir la signature, le titre, le num&eacute;ro de t&eacute;l&eacute;phone et le num&eacute;ro de t&eacute;l&eacute;copieur d&rsquo;une personne qui a le pouvoir de signer la demande au nom du demandeur afin de confirmer l&rsquo;authenticit&eacute; de l&rsquo;information contenue dans le formulaire et les documents connexes. Inclure l&rsquo;ann&eacute;e, le mois et la journ&eacute;e o&ugrave; le formulaire a &eacute;t&eacute; sign&eacute;.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appD.1.1"></div>
<div className="col-md-12 mrgn-lft-0">  <h4 id="appD-1-1">D.1.1	Demande de permis visant l&rsquo;exportation de sources radioactives &agrave; risque &eacute;lev&eacute;</h4>  <br />
<img src="/images/regdoc2-13-2-v2/demande-1.jpg" alt="Cette image montre un formulaire de demande de permis visant lexportation de sources radioactives à risque élevé. Elle accompagne le texte explicatif en annexe. (page 1)" />
<img src="/images/regdoc2-13-2-v2/demande-2.jpg" alt="Cette image montre un formulaire de demande de permis visant lexportation de sources radioactives à risque élevé. Elle accompagne le texte explicatif en annexe. (page 1)" />  </div>  <div className="clear"></div>
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
<h2 id="appE">Annexe E : Substances, &eacute;quipement et renseignements nucl&eacute;aires contr&ocirc;l&eacute;s</h2>
<p><strong>Cette annexe reprend int&eacute;gralement l&rsquo;annexe du <a href="http://laws-lois.justice.gc.ca/fra/reglements/DORS-2000-210/page-1.html"><em>R&egrave;glement sur le contr&ocirc;le de l&rsquo;importation et de l&rsquo;exportation aux fins de la non-prolif&eacute;ration nucl&eacute;aire</em></a> dans sa forme actuelle. Pour rester au fait de la version la plus r&eacute;cente de l&rsquo;annexe, veuillez consulter le R&egrave;glement directement.</strong></p>  <p>Les listes ci-apr&egrave;s sont une reproduction, sous une pr&eacute;sentation nouvelle et avec quelques modifications, des Circulaires d&rsquo;information de l&rsquo;Agence internationale de l&rsquo;&eacute;nergie atomique, portant les num&eacute;ros INFCIRC/254/R&eacute;v.9/Partie 1, INFCIRC/254/R&eacute;v.7/Partie 2 et INFCIRC/209/R&eacute;v.2.</p>
<p className="text-center">PARTIE A<br />
LISTE DES ARTICLES &Agrave; CARACT&Egrave;RE NUCL&Eacute;AIRE</p>
<p className="text-center">A.1. SUBSTANCES NUCL&Eacute;AIRES CONTR&Ocirc;L&Eacute;ES</p>
<p>A.1.1 Produits fissiles sp&eacute;ciaux, comme suit :<br />
a) plutonium et tout isotope, alliage et compos&eacute; et toute mati&egrave;re contenant l&rsquo;une ou l&rsquo;autre des mati&egrave;res susmentionn&eacute;es;<br />
b) uranium 233, uranium enrichi en uranium 235 ou 233 et tout alliage et compos&eacute; et toute autre mati&egrave;re contenant l&rsquo;une ou l&rsquo;autre des mati&egrave;res susmentionn&eacute;es.</p>
<p>NOTA :<br />
Le paragraphe A.1.1. ne vise pas :<br />
a) les produits fissiles sp&eacute;ciaux se pr&eacute;sentant sous la forme de contaminants dans la lessive, les emballages, le blindage ou l&rsquo;&eacute;quipement;<br />
b) les produits fissiles sp&eacute;ciaux servant de composant de d&eacute;tection dans les instruments en une quantit&eacute; d&rsquo;au plus quatre grammes effectifs;<br />
c) le plutonium 238 contenu dans les stimulateurs cardiaques.</p>
<p>A.1.2 <em>Mati&egrave;re brute</em><br />
Mati&egrave;res brutes suivantes sous toute forme, notamment de minerai, de concentr&eacute;s, de compos&eacute;s, de m&eacute;tal ou d&rsquo;alliage, ou qui sont contenues dans toute substance, autre que des substances m&eacute;dicinales, dans laquelle la concentration de mati&egrave;re brute est sup&eacute;rieure &agrave; 0,05 % en poids :<br />
a) uranium qui contient le m&eacute;lange d&rsquo;isotopes pr&eacute;sents dans la nature;<br />
b) uranium appauvri en uranium 235;<br />
c) thorium</p>
<p>NOTA :<br />
Le paragraphe A.1.2. ne vise pas :<br />
a) les mati&egrave;res brutes se pr&eacute;sentant sous la forme de contaminants dans la lessive, les emballages, le blindage ou l&rsquo;&eacute;quipement;<br />
b) l&rsquo;uranium appauvri utilis&eacute; comme blindage pour tout &eacute;quipement r&eacute;glement&eacute; de cat&eacute;gorie II au sens du R&egrave;glement sur les installations nucl&eacute;aires et l&rsquo;&eacute;quipement r&eacute;glement&eacute; de cat&eacute;gorie II, pour les appareils de rayonnement ou pour les emballages utilis&eacute;s dans le transport.</p>
<p>A.1.3 <em>Deuterium et eau lourde</em><br />
Deut&eacute;rium, eau lourde (oxyde de deut&eacute;rium) et tout autre compos&eacute; de deut&eacute;rium dans lequel le rapport atomique deut&eacute;rium/hydrog&egrave;ne d&eacute;passe 1:5 000.</p>
<p>NOTA :<br />
Le paragraphe A.1.3. ne vise pas :<br />
a) le deut&eacute;rium contenu dans les lampes au deut&eacute;rium;<br />
b) le deut&eacute;rium se pr&eacute;sentant sous forme de contaminant dans la lessive ou l&rsquo;&eacute;quipement;<br />
c) tout compos&eacute; de deut&eacute;rium utilis&eacute; comme marqueur.</p>
<p>A.1.4 <em>Graphite de puret&eacute; nucl&eacute;aire</em><br />
Graphite d&rsquo;une puret&eacute; sup&eacute;rieure &agrave; 5 ppm d&rsquo;&eacute;quivalent en bore et d&rsquo;une densit&eacute; de plus de 1,50 g/cm<sup>3</sup>.</p>
<p>A.1.5 <em>Tritium</em><br />
Tritium, compos&eacute;s de tritium ou m&eacute;langes contenant du tritium dans lesquels le rapport du tritium &agrave; l&rsquo;hydrog&egrave;ne en atomes est sup&eacute;rieur &agrave; une partie par millier, et produits qui contiennent l&rsquo;une de ces substances.</p>
<p className="text-center">A.2. &Eacute;QUIPEMENT NUCL&Eacute;AIRE CONTR&Ocirc;L&Eacute;</p>
<p>A.2.1 <em>R&eacute;acteurs nucl&eacute;aires et &eacute;quipements et composants sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s pour ces r&eacute;acteurs, notamment :</em>
<p>A.2.1.1 <em>R&eacute;acteurs nucl&eacute;aires complets</em><br />
R&eacute;acteurs nucl&eacute;aires pouvant fonctionner de mani&egrave;re &agrave; maintenir une r&eacute;action de fission en chaÃ®ne auto-entretenue contr&ocirc;l&eacute;e.</p>
<p>A.2.1.2 <em>Cuves pour r&eacute;acteurs nucl&eacute;aires</em><br />
Cuves m&eacute;talliques, ou &eacute;l&eacute;ments pr&eacute;fabriqu&eacute;s importants de telles cuves, qui sont sp&eacute;cialement con&ccedil;ues ou pr&eacute;par&eacute;es pour contenir le c&oelig;ur d&rsquo;un r&eacute;acteur nucl&eacute;aire ainsi que les internes de r&eacute;acteur au sens donn&eacute; &agrave; cette expression au paragraphe A.2.1.8.</p>
<p>A.2.1.3 <em>Machines pour le chargement et le d&eacute;chargement du combustible nucl&eacute;aire</em><br />
&Eacute;quipements de manutention sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s pour introduire ou extraire le combustible d&rsquo;un r&eacute;acteur nucl&eacute;aire.</p>
<p>A.2.1.4 <em>Barres de commande pour r&eacute;acteurs et &eacute;quipements connexes</em><br />
Barres sp&eacute;cialement con&ccedil;ues ou pr&eacute;par&eacute;es pour maÃ®triser le processus de fission dans un r&eacute;acteur nucl&eacute;aire, et structures de support ou de suspension, m&eacute;canismes d&rsquo;entraÃ®nement ou tubes de guidage des barres de commande.</p>
<p>A.2.1.5 <em>Tubes de force pour r&eacute;acteurs</em><br />
Tubes sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s pour contenir les &eacute;l&eacute;ments combustibles et le fluide de refroidissement primaire d&rsquo;un r&eacute;acteur nucl&eacute;aire, &agrave; des pressions de travail sup&eacute;rieures &agrave; 50 atmosph&egrave;res.</p>
<p>A.2.1.6 <em>Tubes de zirconium</em><br />
Zirconium m&eacute;tallique et alliages &agrave; base de zirconium, sous forme de tubes ou d&rsquo;assemblages de tubes, sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s pour &ecirc;tre utilis&eacute;s dans un r&eacute;acteur nucl&eacute;aire, et dans lesquels le rapport hafnium/zirconium est inf&eacute;rieur &agrave; 1:500 parties en poids.</p>
<p>A.2.1.7 <em>Pompes du circuit primaire de refroidissement</em><br />
Pompes sp&eacute;cialement con&ccedil;ues ou pr&eacute;par&eacute;es pour faire circuler le fluide de refroidissement primaire pour r&eacute;acteurs nucl&eacute;aires.</p>
<p>A.2.1.8 <em>Internes de r&eacute;acteur nucl&eacute;aire</em><br />
Internes de r&eacute;acteur nucl&eacute;aire sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s pour utilisation dans un r&eacute;acteur nucl&eacute;aire, y compris les colonnes de support du c&oelig;ur, les canaux de combustible, les &eacute;crans thermiques, les d&eacute;flecteurs, les plaques &agrave; grille du c&oelig;ur et les plaques de r&eacute;partition.</p>
<p>A.2.1.9 <em>&Eacute;changeurs de chaleur</em><br />
&Eacute;changeurs de chaleur (g&eacute;n&eacute;rateurs de vapeur) sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s pour utilisation dans le circuit de refroidissement primaire d&rsquo;un r&eacute;acteur nucl&eacute;aire.</p>
<p>A.2.1.10 <em>Instruments de d&eacute;tection et de mesure des neutrons</em><br />
Instruments de d&eacute;tection et de mesure des neutrons sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s pour &eacute;valuer les flux de neutrons dans le c&oelig;ur d&rsquo;un r&eacute;acteur nucl&eacute;aire.</p>
<p>A.2.2 <em>Usines de retraitement d&rsquo;&eacute;l&eacute;ments combustibles irradi&eacute;s et &eacute;quipements sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s &agrave; cette fin, notamment :</em></p>
<p>A.2.2.1 <em>Machines &agrave; d&eacute;gainer les &eacute;l&eacute;ments combustibles irradi&eacute;s</em><br />
Machines t&eacute;l&eacute;command&eacute;es sp&eacute;cialement con&ccedil;ues ou pr&eacute;par&eacute;es pour &ecirc;tre utilis&eacute;es dans une usine de retraitement susmentionn&eacute;e, et destin&eacute;es &agrave; d&eacute;sassembler, d&eacute;couper ou cisailler des assemblages, faisceaux ou barres de combustible nucl&eacute;aire irradi&eacute;s.</p>
<p>A.2.2.2 <em>Dissolveurs</em><br />
R&eacute;cipients prot&eacute;g&eacute;s contre le risque de criticit&eacute; (de petit diam&egrave;tre, annulaires ou plats) sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s en vue d&rsquo;&ecirc;tre utilis&eacute;s dans une usine de retraitement susmentionn&eacute;e, pour dissoudre du combustible nucl&eacute;aire irradi&eacute;, capables de r&eacute;sister &agrave; des liquides fortement corrosifs chauds et dont le chargement et l&rsquo;entretien peuvent &ecirc;tre t&eacute;l&eacute;command&eacute;s.</p>
<p>A.2.2.3 <em>Extracteurs et &eacute;quipements d&rsquo;extraction par solvant</em><br />
Extracteurs, tels que colonnes puls&eacute;es ou garnies, m&eacute;langeurs-d&eacute;canteurs et extracteurs centrifuges, sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s pour &ecirc;tre utilis&eacute;s dans une usine de retraitement de combustible irradi&eacute;. Les extracteurs doivent pouvoir r&eacute;sister &agrave; l&rsquo;action corrosive de l&rsquo;acide nitrique. Les extracteurs sont normalement fabriqu&eacute;s, selon des exigences tr&egrave;s strictes (notamment techniques sp&eacute;ciales de soudage, d&rsquo;inspection, et d&rsquo;assurance et contr&ocirc;le de la qualit&eacute;), en acier inoxydable &agrave; bas carbone, titane, zirconium ou autres mat&eacute;riaux &agrave; haute r&eacute;sistance.</p>
<p>A.2.2.4 <em>R&eacute;cipients de collecte ou de stockage des solutions</em><br />
R&eacute;cipients de collecte ou de stockage sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s pour &ecirc;tre utilis&eacute;s dans une usine de retraitement de combustible irradi&eacute;. Les r&eacute;cipients de collecte ou de stockage doivent pouvoir r&eacute;sister &agrave; l&rsquo;action corrosive de l&rsquo;acide nitrique. Les r&eacute;cipients de collecte ou de stockage sont normalement fabriqu&eacute;s &agrave; l&rsquo;aide de mat&eacute;riaux tels qu&rsquo;acier inoxydable &agrave; bas carbone, titane ou zirconium ou autres mat&eacute;riaux &agrave; haute r&eacute;sistance. Les r&eacute;cipients de collecte ou de stockage peuvent &ecirc;tre con&ccedil;us pour la conduite et l&rsquo;entretien t&eacute;l&eacute;command&eacute;s et peuvent avoir, pour pr&eacute;venir le risque de criticit&eacute;, l&rsquo;une ou l&rsquo;autre des caract&eacute;ristiques suivantes :<br />
a) parois ou structures internes avec un &eacute;quivalent en bore d&rsquo;au moins 2 %;<br />
b) un diam&egrave;tre maximum de 175 mm (7 po) pour les r&eacute;cipients cylindriques;<br />
c) une largeur maximum de 75 mm (3 po) pour les r&eacute;cipients plats ou annulaires.</p>
<p>A.2.2.5 et A.2.2.6  [[Abrog&eacute;s, DORS/2010-106, art. 10</p>
<p>A.2.3 <em>Usines de fabrication d&rsquo;&eacute;l&eacute;ments combustibles pour r&eacute;acteurs nucl&eacute;aires, et &eacute;quipements sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s &agrave; cette fin, y compris ceux qui :</em><br />
a) normalement se trouvent en contact direct avec le flux des mati&egrave;res nucl&eacute;aires produites, ou bien traitent ou contr&ocirc;lent directement ce flux;<br />
b) scellent les mati&egrave;res nucl&eacute;aires &agrave; l&rsquo;int&eacute;rieur du gainage;<br />
c) v&eacute;rifient l&rsquo;int&eacute;grit&eacute; du gainage ou l&rsquo;&eacute;tanch&eacute;it&eacute;; ou<br />
d) v&eacute;rifient le traitement de finition du combustible scell&eacute;.<br /></p>
<p>A.2.4 <em>Usines de s&eacute;paration des isotopes de l&rsquo;uranium naturel, de l&rsquo;uranium appauvri ou des produits fissiles sp&eacute;ciaux et &eacute;quipements, autres que les appareils d&rsquo;analyse, sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s &agrave; cette fin, notamment :</em></p>
<p>A.2.4.1 <em>Centrifugeuses et assemblages et composants sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s pour utilisation dans les centrifugeuses, notamment :</em></p>
<p>A.2.4.1.1 <em>Composants tournants</em><br />
a) assemblages rotors complets :<br />
cylindres &agrave; paroi mince, ou ensembles de cylindres &agrave; paroi mince r&eacute;unis, fabriqu&eacute;s dans un ou plusieurs des mat&eacute;riaux &agrave; rapport r&eacute;sistance-densit&eacute; &eacute;lev&eacute;; lorsqu&rsquo;ils sont r&eacute;unis, les cylindres sont joints les uns aux autres par les soufflets ou anneaux flexibles d&eacute;crits au paragraphe c). Le bol est &eacute;quip&eacute; d&rsquo;une ou de plusieurs chicanes internes et de bouchons d&rsquo;extr&eacute;mit&eacute;, comme indiqu&eacute; aux paragraphes d) et e), s&rsquo;il est pr&ecirc;t &agrave; l&rsquo;emploi. Toutefois, l&rsquo;assemblage complet peut &ecirc;tre livr&eacute; partiellement mont&eacute; seulement;<br />
b) bols :<br />
cylindres &agrave; paroi mince d&rsquo;une &eacute;paisseur de 12 mm (0,5 po) ou moins, sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s, ayant un diam&egrave;tre compris entre 75 mm (3 po) et 400 mm (16 po) et fabriqu&eacute;s dans des mat&eacute;riaux &agrave; rapport r&eacute;sistance-densit&eacute; &eacute;lev&eacute;;<br />
c) anneaux ou soufflets :<br />
composants sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s pour fournir un support local au bol ou pour joindre ensemble plusieurs cylindres constituant le bol. Le soufflet est un cylindre court ayant une paroi de 3 mm (0,12 po) ou moins d&rsquo;&eacute;paisseur, un diam&egrave;tre compris entre 75 mm (3 po) et 400 mm (16 po) et une spire, et fabriqu&eacute; dans des mat&eacute;riaux ayant un rapport r&eacute;sistance-densit&eacute; &eacute;lev&eacute;;<br />
d) chicanes :<br />
composants en forme de disque d&rsquo;un diam&egrave;tre compris entre 75 mm (3 po) et 400 mm (16 po) sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s pour &ecirc;tre mont&eacute;s &agrave; l&rsquo;int&eacute;rieur du bol de la centrifugeuse afin d&rsquo;isoler la chambre de pr&eacute;l&egrave;vement de la chambre de s&eacute;paration principale et, dans certains cas, de faciliter la circulation de l&rsquo;UF<sub>6</sub> gazeux &agrave; l&rsquo;int&eacute;rieur de la chambre de s&eacute;paration principale du bol, et fabriqu&eacute;s dans des mat&eacute;riaux ayant un rapport r&eacute;sistance-densit&eacute; &eacute;lev&eacute;;<br />
e) bouchons d&rsquo;extr&eacute;mit&eacute; sup&eacute;rieurs et inf&eacute;rieurs :<br />
composants en forme de disque d&rsquo;un diam&egrave;tre compris entre 75 mm (3 po) et 400 mm (16 po) sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s pour s&rsquo;adapter aux extr&eacute;mit&eacute;s du bol et maintenir ainsi l&rsquo;UF<sub>6</sub> &agrave; l&rsquo;int&eacute;rieur de celui-ci et, dans certains cas, pour porter, retenir ou contenir en tant que partie int&eacute;grante un &eacute;l&eacute;ment du palier sup&eacute;rieur (bouchon sup&eacute;rieur) ou pour porter les &eacute;l&eacute;ments tournants du moteur et du palier inf&eacute;rieur (bouchon inf&eacute;rieur), et fabriqu&eacute;s dans des mat&eacute;riaux ayant un rapport r&eacute;sistance-densit&eacute; &eacute;lev&eacute;.</p>
<p>A.2.4.1.2 <em>Composants fixes</em><br />
a) paliers de suspension magn&eacute;tique :<br />
assemblages de support sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s comprenant un aimant annulaire suspendu dans un carter contenant un milieu amortisseur. Le carter est fabriqu&eacute; dans un mat&eacute;riau r&eacute;sistant &agrave; l&rsquo;UF<sub>6</sub>. L&rsquo;aimant est coupl&eacute; &agrave; une pi&egrave;ce polaire ou &agrave; un deuxi&egrave;me aimant fix&eacute; sur le bouchon d&rsquo;extr&eacute;mit&eacute; sup&eacute;rieur d&eacute;crit au paragraphe A.2.4.1.1.e). L&rsquo;aimant annulaire peut avoir un rapport entre le diam&egrave;tre ext&eacute;rieur et le diam&egrave;tre int&eacute;rieur inf&eacute;rieur ou &eacute;gal &agrave; 1,6 : 1. L&rsquo;aimant peut avoir une perm&eacute;abilit&eacute; initiale &eacute;gale ou sup&eacute;rieure &agrave; 0,15 H/m (120 000 en unit&eacute;s CGS), ou une r&eacute;manence &eacute;gale ou sup&eacute;rieure &agrave; 98,5 % ou une densit&eacute; d&rsquo;&eacute;nergie &eacute;lectromagn&eacute;tique sup&eacute;rieure &agrave; 80 kJ/m<sup>3</sup> (107 gauss-oersteds). Outre les propri&eacute;t&eacute;s habituelles du mat&eacute;riau, une condition essentielle est que la d&eacute;viation des axes magn&eacute;tiques par rapport aux axes g&eacute;om&eacute;triques soit limit&eacute;e par des tol&eacute;rances tr&egrave;s serr&eacute;es (inf&eacute;rieures &agrave; 0,1 mm ou 0,004 po) ou que l&rsquo;homog&eacute;n&eacute;it&eacute; du mat&eacute;riau de l&rsquo;aimant soit sp&eacute;cialement impos&eacute;e;<br />
b) paliers de but&eacute;e/amortisseurs :<br />
paliers sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s comprenant un assemblage pivot-coupelle mont&eacute; sur un amortisseur. Le pivot se compose habituellement d&rsquo;un arbre en acier tremp&eacute; comportant un h&eacute;misph&egrave;re &agrave; une extr&eacute;mit&eacute; et un dispositif de fixation au bouchon inf&eacute;rieur d&eacute;crit au paragraphe A.2.4.1.1.e) &agrave; l&rsquo;autre extr&eacute;mit&eacute;. Toutefois, l&rsquo;arbre peut &ecirc;tre &eacute;quip&eacute; d&rsquo;un palier hydrodynamique. La coupelle a la forme d&rsquo;une pastille avec indentation h&eacute;misph&eacute;rique sur une surface. Ces composants sont souvent fournis ind&eacute;pendamment de l&rsquo;amortisseur;<br />
c) pompes mol&eacute;culaires :<br />
cylindres sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s qui comportent sur leur face interne des rayures h&eacute;lico&iuml;dales obtenues par usinage ou extrusion et dont les orifices sont al&eacute;s&eacute;s. Leurs dimensions habituelles sont les suivantes : diam&egrave;tre interne compris entre 75 mm (3 po) et 400 mm (16 po), &eacute;paisseur de paroi &eacute;gale ou sup&eacute;rieure &agrave; 10 mm (0,4 po) et longueur &eacute;gale ou sup&eacute;rieure au diam&egrave;tre. Habituellement, les rayures ont une section rectangulaire et une profondeur &eacute;gale ou sup&eacute;rieure &agrave; 2 mm (0,08 po);<br />
d) stators de moteur :<br />
stators annulaires sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s pour des moteurs grande vitesse &agrave; hyst&eacute;r&eacute;sis (ou &agrave; r&eacute;luctance) aliment&eacute;s en courant alternatif multiphas&eacute; pour fonctionnement synchrone dans le vide avec une gamme de fr&eacute;quence de 600 Hz &agrave; 2 000 Hz, et une gamme de puissance de 50 VA &agrave; 1 000 VA. Les stators sont constitu&eacute;s par des enroulements multiphas&eacute;s sur des noyaux de fer doux feuillet&eacute;s constitu&eacute;s de couches minces dont l&rsquo;&eacute;paisseur est habituellement inf&eacute;rieure ou &eacute;gale &agrave; 2 mm (0,08 po);<br />
e) enceintes de centrifugeuse :<br />
composants sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s pour contenir l&rsquo;assemblage rotor d&rsquo;une centrifugeuse. L&rsquo;enceinte est constitu&eacute;e d&rsquo;un cylindre rigide poss&eacute;dant une paroi d&rsquo;au plus 30 mm (1,2 po) d&rsquo;&eacute;paisseur, ayant subi un usinage de pr&eacute;cision aux extr&eacute;mit&eacute;s en vue de recevoir les paliers et qui est muni d&rsquo;une ou de plusieurs brides pour le montage. Les extr&eacute;mit&eacute;s usin&eacute;es sont parall&egrave;les entre elles et perpendiculaires &agrave; l&rsquo;axe longitudinal du cylindre avec une d&eacute;viation au plus &eacute;gale &agrave; 0,05&deg;. L&rsquo;enceinte peut &eacute;galement &ecirc;tre form&eacute;e d&rsquo;une structure de type alv&eacute;olaire permettant de loger plusieurs bols. Les enceintes sont constitu&eacute;es ou rev&ecirc;tues de mat&eacute;riaux r&eacute;sistant &agrave; la corrosion par l&rsquo;UF<sub>6</sub>;<br />
f) &eacute;copes :<br />
tubes ayant un diam&egrave;tre interne d&rsquo;au plus 12 mm (0,5 po), sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s pour extraire l&rsquo;UF<sub>6</sub> gazeux contenu dans le bol selon le principe du tube de Pitot (c&rsquo;est-&agrave;-dire que leur ouverture d&eacute;bouche dans le flux gazeux p&eacute;riph&eacute;rique &agrave; l&rsquo;int&eacute;rieur du bol, configuration obtenue par exemple en courbant l&rsquo;extr&eacute;mit&eacute; d&rsquo;un tube dispos&eacute; selon le rayon) et pouvant &ecirc;tre raccord&eacute;s au syst&egrave;me central de pr&eacute;l&egrave;vement du gaz. Les tubes sont constitu&eacute;s ou rev&ecirc;tus de mat&eacute;riaux r&eacute;sistant &agrave; la corrosion par l&rsquo;UF<sub>6</sub>.</p>
<p>A.2.4.2 <em>Syst&egrave;mes, &eacute;quipements et composants auxiliaires sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s pour utilisation dans les usines d&rsquo;enrichissement par ultracentrifugation, notamment :</em></p>
<p>A.2.4.2.1 <em>Syst&egrave;mes d&rsquo;alimentation/syst&egrave;mes de pr&eacute;l&egrave;vement du produit et des r&eacute;sidus</em><br />
Syst&egrave;mes sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s, comprenant :<br />
a) des autoclaves (ou stations) d&rsquo;alimentation, utilis&eacute;s pour introduire l&rsquo;UF6 dans les cascades de centrifugeuses &agrave; une pression allant jusqu&rsquo;&agrave; 100 kPa (15 lb/po<sup>2</sup>) et &agrave; un d&eacute;bit &eacute;gal ou sup&eacute;rieur &agrave; 1 kg/h;<br />
b) des pi&egrave;ges &agrave; froid utilis&eacute;s pour pr&eacute;lever l&rsquo;UF<sub>6</sub> des cascades &agrave; une pression allant jusqu&rsquo;&agrave; 3 kPa (0,5 lb/po<sup>2</sup>). Les pi&egrave;ges &agrave; froid peuvent &ecirc;tre refroidis jusqu&rsquo;&agrave; 203 K (-70 &deg;C) et chauff&eacute;s jusqu&rsquo;&agrave; 343 K (70 &deg;C);<br />
c) des stations produits et r&eacute;sidus pour le transfert de l&rsquo;UF<sub>6</sub> dans des conteneurs.<br />
L&rsquo;installation, les &eacute;quipements et les tuyauteries sont constitu&eacute;s enti&egrave;rement ou rev&ecirc;tus int&eacute;rieurement de mat&eacute;riaux r&eacute;sistant &agrave; l&rsquo;UF6 et sont fabriqu&eacute;s suivant des normes tr&egrave;s rigoureuses de vide et de propret&eacute;.</p>
<p>A.2.4.2.2 <em>Collecteurs/tuyauteries</em><br />
Tuyauteries et collecteurs sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s pour la manipulation de l&rsquo;UF<sub>6</sub> &agrave; l&rsquo;int&eacute;rieur des cascades de centrifugeuses. La tuyauterie est habituellement du type collecteur triple, chaque centrifugeuse &eacute;tant raccord&eacute;e &agrave; chacun des collecteurs. La r&eacute;p&eacute;titivit&eacute; du montage du syst&egrave;me est donc grande. Le syst&egrave;me est constitu&eacute; enti&egrave;rement de mat&eacute;riaux r&eacute;sistant &agrave; l&rsquo;UF<sub>6</sub> et est fabriqu&eacute; suivant des normes tr&egrave;s rigoureuses de vide et de propret&eacute;.</p>
<p>A.2.4.2.3 <em>Vannes sp&eacute;ciales d&rsquo;arr&ecirc;t et de r&eacute;glage</em><br />
Vannes d&rsquo;arr&ecirc;t et de r&eacute;glage &agrave; soufflet, manuelles ou automatiques, sp&eacute;cialement con&ccedil;ues ou pr&eacute;par&eacute;es pour &ecirc;tre utilis&eacute;es dans des syst&egrave;mes principaux et auxiliaires des usines d&rsquo;enrichissement par ultracentrifugation gazeuse et constitu&eacute;es de mat&eacute;riaux r&eacute;sistant &agrave; la corrosion par l&rsquo;UF<sub>6</sub> ou prot&eacute;g&eacute;es par de tels mat&eacute;riaux, ces vannes ayant un diam&egrave;tre de 10 mm &agrave; 160 mm (0,4 po &agrave; 6,3 po).</p>
<p>A.2.4.2.4 <em>Spectrom&egrave;tres de masse pour UF<sub>6</sub>/sources d&rsquo;ions</em><br />
Spectrom&egrave;tres de masse magn&eacute;tiques ou quadripolaires sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s, capables de pr&eacute;lever en direct sur les flux d&rsquo;UF<sub>6</sub> gazeux des &eacute;chantillons du gaz d&rsquo;entr&eacute;e, du produit ou des r&eacute;sidus, et ayant toutes les caract&eacute;ristiques suivantes :<br />
a) pouvoir de r&eacute;solution unitaire pour l&rsquo;unit&eacute; de masse atomique sup&eacute;rieur &agrave; 320;<br />
b) sources d&rsquo;ions constitu&eacute;es ou rev&ecirc;tues de nichrome ou de monel ou nickel&eacute;es;<br />
c) sources d&rsquo;ionisation par bombardement &eacute;lectronique;<br />
d) pr&eacute;sence d&rsquo;un collecteur adapt&eacute; &agrave; l&rsquo;analyse isotopique.</p>
<p>A.2.4.2.5 <em>Changeurs de fr&eacute;quence</em><br />
Changeurs de fr&eacute;quence (&eacute;galement connus sous le nom de convertisseurs ou d&rsquo;inverseurs) sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s pour l&rsquo;alimentation des stators de moteurs d&eacute;crits au paragraphe A.2.4.1.2.d) ou parties, composants et sous-assemblages de changeurs de fr&eacute;quence ayant toutes les caract&eacute;ristiques suivantes :<br />
a) sortie multiphase de 600 Hz &agrave; 2 000 Hz;<br />
b) stabilit&eacute; &eacute;lev&eacute;e (avec un contr&ocirc;le de la fr&eacute;quence sup&eacute;rieur &agrave; 0,1 %);<br />
c) faible distorsion harmonique (inf&eacute;rieure &agrave; 2 %);<br />
d) rendement sup&eacute;rieur &agrave; 80 %.</p>
<p>A.2.4.3 <em>Assemblages et composants sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s pour utilisation dans l&rsquo;enrichissement par diffusion gazeuse, notamment :</em></p>
<p>A.2.4.3.1 <em>Barri&egrave;res de diffusion gazeuse</em><br />
a) filtres minces et poreux sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s, qui ont des pores d&rsquo;un diam&egrave;tre de 100 &Aring; &agrave; 1 000 &Aring; (angstrÃ¶ms), une &eacute;paisseur &eacute;gale ou inf&eacute;rieure &agrave; 5 mm (0,2 po) et, dans le cas des formes tubulaires, un diam&egrave;tre &eacute;gal ou inf&eacute;rieur &agrave; 25 mm (1 po) et sont constitu&eacute;s de mat&eacute;riaux m&eacute;talliques, polym&egrave;res ou c&eacute;ramiques r&eacute;sistant &agrave; la corrosion par l&rsquo;UF<sub>6</sub>;<br />
b) compos&eacute;s ou poudres pr&eacute;par&eacute;s sp&eacute;cialement pour la fabrication de ces filtres. Ces compos&eacute;s et poudres comprennent le nickel et des alliages contenant 60 % ou plus de nickel, l&rsquo;oxyde d&rsquo;aluminium et les polym&egrave;res d&rsquo;hydrocarbures totalement fluor&eacute;s r&eacute;sistants &agrave; l&rsquo;UF<sub>6</sub> ayant une puret&eacute; &eacute;gale ou sup&eacute;rieure &agrave; 99,9 %, une taille des grains inf&eacute;rieure &agrave; 10 microns et une grande uniformit&eacute; de cette taille, qui sont sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s pour la fabrication de barri&egrave;res de diffusion gazeuse.</p>
<p>A.2.4.3.2 <em>Enceintes de diffuseurs</em><br />
Enceintes sp&eacute;cialement con&ccedil;ues ou pr&eacute;par&eacute;es, herm&eacute;tiquement scell&eacute;es, de forme cylindrique et ayant plus de 300 mm (12 po) de diam&egrave;tre et plus de 900 mm (35 po) de long, ou de forme rectangulaire avec des dimensions comparables, qui sont dot&eacute;es d&rsquo;un raccord d&rsquo;entr&eacute;e et de deux raccords de sortie ayant tous plus de 50 mm (2 po) de diam&egrave;tre, pr&eacute;vues pour contenir la barri&egrave;re de diffusion gazeuse, constitu&eacute;es ou rev&ecirc;tues int&eacute;rieurement de mat&eacute;riaux r&eacute;sistant &agrave; l&rsquo;UF<sub>6</sub> et con&ccedil;ues pour &ecirc;tre install&eacute;es horizontalement ou verticalement.</p>
<p>A.2.4.3.3 <em>Compresseurs et soufflantes &agrave; gaz</em><br />
Compresseurs axiaux, centrifuges ou volum&eacute;triques et soufflantes &agrave; gaz sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s, ayant une capacit&eacute; d&rsquo;aspiration de 1 m<sup>3</sup>/min ou plus d&rsquo;UF<sub>6</sub> et une pression de sortie pouvant aller jusqu&rsquo;&agrave; plusieurs centaines de kPa (100 lb/po<sup>2</sup>), con&ccedil;us pour fonctionner longtemps en atmosph&egrave;re d&rsquo;UF<sub>6</sub>, avec ou sans moteur &eacute;lectrique de puissance appropri&eacute;e, et assemblages s&eacute;par&eacute;s de compresseurs et soufflantes &agrave; gaz de ce type. Ces compresseurs et soufflantes &agrave; gaz ont un rapport de compression compris entre 2:1 et 6:1 et sont constitu&eacute;s ou rev&ecirc;tus int&eacute;rieurement de mat&eacute;riaux r&eacute;sistant &agrave; l&rsquo;UF<sub>6</sub>.</p>
<p>A.2.4.3.4 <em>Garnitures d&rsquo;&eacute;tanch&eacute;it&eacute; d&rsquo;arbres</em><br />
Garnitures &agrave; vide sp&eacute;cialement con&ccedil;ues ou pr&eacute;par&eacute;es, avec connexions d&rsquo;alimentation et d&rsquo;&eacute;chappement, pour assurer de mani&egrave;re fiable l&rsquo;&eacute;tanch&eacute;it&eacute; de l&rsquo;arbre reliant le rotor du compresseur ou de la soufflante &agrave; gaz au moteur d&rsquo;entraÃ®nement en emp&ecirc;chant l&rsquo;air de p&eacute;n&eacute;trer dans la chambre int&eacute;rieure du compresseur ou de la soufflante &agrave; gaz qui est remplie d&rsquo;UF<sub>6</sub>. Ces garnitures sont habituellement con&ccedil;ues pour un taux de p&eacute;n&eacute;tration de gaz tampon inf&eacute;rieur &agrave; 1 000 cm<sup>3</sup>/min (60 po<sup>3</sup>/min).</p>
<p>A.2.4.3.5 <em>&Eacute;changeurs de chaleur pour le refroidissement de l&rsquo;UF<sub>6</sub></em><br />
&Eacute;changeurs de chaleur sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s, constitu&eacute;s ou rev&ecirc;tus int&eacute;rieurement de mat&eacute;riaux r&eacute;sistant &agrave; l&rsquo;UF<sub>6</sub> (&agrave; l&rsquo;exception de l&rsquo;acier inoxydable) ou de cuivre ou d&rsquo;une combinaison de ces m&eacute;taux et pr&eacute;vus pour un taux de variation de la pression due &agrave; une fuite qui est inf&eacute;rieur &agrave; 10 Pa/h (0,0015 lb/po<sup>2</sup>/h) pour une diff&eacute;rence de pression de 100 kPa (15 lb/po<sup>2</sup>).</p>
<p>A.2.4.4 <em>Syst&egrave;mes, &eacute;quipements et composants auxiliaires sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s pour utilisation dans l&rsquo;enrichissement par diffusion gazeuse, notamment :</em></p>
<p>A.2.4.4.1 <em>Syst&egrave;mes d&rsquo;alimentation/syst&egrave;mes de pr&eacute;l&egrave;vement du produit et des r&eacute;sidus</em><br />
Syst&egrave;mes sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s, capables de fonctionner &agrave; des pressions &eacute;gales ou inf&eacute;rieures &agrave; 300 kPa (45 lb/po<sup>2</sup>), et comprenant :<br />
a) des autoclaves (ou syst&egrave;mes) d&rsquo;alimentation, utilis&eacute;s pour introduire l&rsquo;UF<sub>6</sub> dans les cascades de diffusion gazeuse;<br />
b) des pi&egrave;ges &agrave; froid utilis&eacute;s pour pr&eacute;lever l&rsquo;UF<sub>6</sub> des cascades de diffusion;<br />
c) des stations de liqu&eacute;faction o&ugrave; l&rsquo;UF<sub>6</sub> gazeux provenant de la cascade est comprim&eacute; et refroidi pour obtenir de l&rsquo;UF<sub>6</sub> liquide;<br />
d) des stations produits ou r&eacute;sidus pour le transfert de l&rsquo;UF<sub>6</sub> dans des conteneurs</p>
<p>A.2.4.4.2 <em>Collecteurs/tuyauteries</em><br />
Tuyauteries et collecteurs sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s pour la manipulation de l&rsquo;UF<sub>6</sub> &agrave; l&rsquo;int&eacute;rieur des cascades de diffusion gazeuse. La tuyauterie est normalement du type collecteur double, chaque cellule &eacute;tant raccord&eacute;e &agrave; chacun des collecteurs.</p>
<p>A.2.4.4.3 <em>Syst&egrave;mes &agrave; vide</em><br />
a) grands distributeurs &agrave; vide, collecteurs &agrave; vide et pompes &agrave; vide ayant une capacit&eacute; d&rsquo;aspiration &eacute;gale ou sup&eacute;rieure &agrave; 5 m<sup>3</sup>/min (175 pi<sup>3</sup>/min), sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s;<br />
b) pompes &agrave; vide sp&eacute;cialement con&ccedil;ues pour fonctionner en atmosph&egrave;re d&rsquo;UF<sub>6</sub>, constitu&eacute;es ou rev&ecirc;tues int&eacute;rieurement d&rsquo;aluminium, de nickel ou d&rsquo;alliages comportant plus de 60 % de nickel. Ces pompes peuvent &ecirc;tre rotatives ou volum&eacute;triques, &ecirc;tre &agrave; d&eacute;placement et dot&eacute;es de joints en fluorocarbures et &ecirc;tre pourvues de fluides de service sp&eacute;ciaux.</p>
<p>A.2.4.4.4 <em>Vannes sp&eacute;ciales d&rsquo;arr&ecirc;t et de r&eacute;glage</em><br />
Soufflets d&rsquo;arr&ecirc;t et de r&eacute;glage, manuels ou automatiques, sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s, constitu&eacute;s de mat&eacute;riaux r&eacute;sistant &agrave; l&rsquo;UF<sub>6</sub> et ayant un diam&egrave;tre compris entre 40 mm et 1 500 mm (1,5 po &agrave; 59 po) pour installation dans des syst&egrave;mes principaux et auxiliaires des usines d&rsquo;enrichissement par diffusion gazeuse.</p>
<p>A.2.4.4.5 <em>Spectrom&egrave;tres de masse pour UF<sub>6</sub>/sources d&rsquo;ions</em><br />
Spectrom&egrave;tres de masse magn&eacute;tiques ou quadripolaires sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s, capables de pr&eacute;lever en direct sur les flux d&rsquo;UF<sub>6</sub> gazeux des &eacute;chantillons du gaz d&rsquo;entr&eacute;e, du produit ou des r&eacute;sidus, et ayant toutes les caract&eacute;ristiques suivantes :<br />
a) pouvoir de r&eacute;solution unitaire pour l&rsquo;unit&eacute; de masse atomique sup&eacute;rieur &agrave; 320;<br />
b) sources d&rsquo;ions constitu&eacute;es ou rev&ecirc;tues de nichrome ou de monel ou nickel&eacute;es;<br />
c) sources d&rsquo;ionisation par bombardement &eacute;lectronique;<br />
d) collecteur adapt&eacute; &agrave; l&rsquo;analyse isotopique.</p>
<p>A.2.4.5 <em>Syst&egrave;mes, &eacute;quipements et composants sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s pour utilisation dans les usines d&rsquo;enrichissement par proc&eacute;d&eacute; a&eacute;rodynamique, notamment :</em></p>
<p>A.2.4.5.1 <em>Tuy&egrave;res de s&eacute;paration</em><br />
Tuy&egrave;res de s&eacute;paration et assemblages de tuy&egrave;res de s&eacute;paration sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s. Les tuy&egrave;res de s&eacute;paration sont constitu&eacute;es de canaux incurv&eacute;s &agrave; section &agrave; fente, de rayon de courbure inf&eacute;rieur &agrave; 1 mm (habituellement compris entre 0,1 mm et 0,05 mm), r&eacute;sistant &agrave; la corrosion par l&rsquo;UF<sub>6</sub>, &agrave; l&rsquo;int&eacute;rieur desquels un &eacute;corceur s&eacute;pare en deux fractions le gaz circulant dans la tuy&egrave;re.</p>
<p>A.2.4.5.2 <em>Tubes vortex</em><br />
Tubes vortex et assemblages de tubes vortex, sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s. Les tubes vortex, de forme cylindrique ou conique, sont constitu&eacute;s ou rev&ecirc;tus de mat&eacute;riaux r&eacute;sistant &agrave; la corrosion par l&rsquo;UF<sub>6</sub>, ont un diam&egrave;tre compris entre 0,5 cm et 4 cm et un rapport longueur/diam&egrave;tre inf&eacute;rieur ou &eacute;gal &agrave; 20:1, et sont munis d&rsquo;un ou de plusieurs canaux d&rsquo;admission tangentiels. Les tubes peuvent &ecirc;tre &eacute;quip&eacute;s de dispositifs de type tuy&egrave;re &agrave; l&rsquo;une de leurs extr&eacute;mit&eacute;s ou &agrave; leurs deux extr&eacute;mit&eacute;s.</p>
<p>A.2.4.5.3 <em>Compresseurs et soufflantes &agrave; gaz</em><br />
Compresseurs axiaux, centrifuges ou volum&eacute;triques ou soufflantes &agrave; gaz sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s, constitu&eacute;s ou rev&ecirc;tus de mat&eacute;riaux r&eacute;sistant &agrave; la corrosion par l&rsquo;UF<sub>6</sub> et ayant une capacit&eacute; d&rsquo;aspiration du m&eacute;lange d&rsquo;UF<sub>6</sub> et de gaz porteur (hydrog&egrave;ne ou h&eacute;lium) de 2 m<sup>3</sup>/min ou plus.</p>
<p>A.2.4.5.4 <em>Garnitures d&rsquo;&eacute;tanch&eacute;it&eacute; d&rsquo;arbres</em><br />
Garnitures d&rsquo;&eacute;tanch&eacute;it&eacute; d&rsquo;arbres sp&eacute;cialement con&ccedil;ues ou pr&eacute;par&eacute;es, avec connexions d&rsquo;alimentation et d&rsquo;&eacute;chappement, pour assurer de mani&egrave;re fiable l&rsquo;&eacute;tanch&eacute;it&eacute; de l&rsquo;arbre reliant le rotor du compresseur ou de la soufflante &agrave; gaz au moteur d&rsquo;entraÃ®nement en emp&ecirc;chant le gaz de proc&eacute;d&eacute; de s&rsquo;&eacute;chapper, ou l&rsquo;air ou le gaz d&rsquo;&eacute;tanch&eacute;it&eacute; de p&eacute;n&eacute;trer dans la chambre int&eacute;rieure du compresseur ou de la soufflante &agrave; gaz qui est remplie du m&eacute;lange d&rsquo;UF<sub>6</sub> et de gaz porteur.</p>
<p>A.2.4.5.5 <em>&Eacute;changeurs de chaleur pour le refroidissement du m&eacute;lange de gaz</em><br />
&Eacute;changeurs de chaleur sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s, constitu&eacute;s ou rev&ecirc;tus de mat&eacute;riaux r&eacute;sistant &agrave; la corrosion par l&rsquo;UF<sub>6</sub>.</p>
<p>A.2.4.5.6 <em>Enceintes renfermant les &eacute;l&eacute;ments de s&eacute;paration</em><br />
Enceintes sp&eacute;cialement con&ccedil;ues ou pr&eacute;par&eacute;es, constitu&eacute;es ou rev&ecirc;tues de mat&eacute;riaux r&eacute;sistant &agrave; la corrosion par l&rsquo;UF<sub>6</sub>, destin&eacute;es &agrave; recevoir les tubes vortex ou les tuy&egrave;res de s&eacute;paration.</p>
<p>A.2.4.5.7 <em>Syst&egrave;mes d&rsquo;alimentation/syst&egrave;mes de pr&eacute;l&egrave;vement du produit et des r&eacute;sidus</em><br />
Syst&egrave;mes ou &eacute;quipements sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s pour les usines d&rsquo;enrichissement, constitu&eacute;s ou rev&ecirc;tus de mat&eacute;riaux r&eacute;sistant &agrave; la corrosion par l&rsquo;UF<sub>6</sub> et comprenant :<br />
a) des autoclaves, fours et syst&egrave;mes d&rsquo;alimentation utilis&eacute;s pour introduire l&rsquo;UF<sub>6</sub> dans le processus d&rsquo;enrichissement;<br />
b) des pi&egrave;ges &agrave; froid utilis&eacute;s pour pr&eacute;lever l&rsquo;UF<sub>6</sub> du processus d&rsquo;enrichissement en vue de son transfert ult&eacute;rieur apr&egrave;s r&eacute;chauffement;<br />
c) des stations de solidification ou de liqu&eacute;faction utilis&eacute;es pour pr&eacute;lever l&rsquo;UF<sub>6</sub> du processus d&rsquo;enrichissement, par compression et passage &agrave; l&rsquo;&eacute;tat liquide ou solide;<br />
d) des stations produits ou r&eacute;sidus pour le transfert de l&rsquo;UF<sub>6</sub> dans des conteneurs.</p>
<p>A.2.4.5.8 <em>Collecteurs/tuyauterie</em><br />
Tuyauteries et collecteurs constitu&eacute;s ou rev&ecirc;tus de mat&eacute;riaux r&eacute;sistant &agrave; la corrosion par l&rsquo;UF<sub>6</sub>, sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s pour la manipulation de l&rsquo;UF<sub>6</sub> &agrave; l&rsquo;int&eacute;rieur des cascades a&eacute;rodynamiques. La tuyauterie est normalement du type collecteur double, chaque &eacute;tage ou groupe d&rsquo;&eacute;tages &eacute;tant connect&eacute; &agrave; chacun des collecteurs.</p>
<p>A.2.4.5.9 <em>Syst&egrave;mes et pompes &agrave; vide</em><br />
a) syst&egrave;mes &agrave; vide sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s, ayant une capacit&eacute; d&rsquo;aspiration sup&eacute;rieure ou &eacute;gale &agrave; 5 m<sup>3</sup>/min, comprenant des distributeurs &agrave; vide, des collecteurs &agrave; vide et des pompes &agrave; vide et con&ccedil;us pour fonctionner en atmosph&egrave;re d&rsquo;UF<sub>6</sub>;<br />
b) pompes &agrave; vide sp&eacute;cialement con&ccedil;ues ou pr&eacute;par&eacute;es pour fonctionner en atmosph&egrave;re d&rsquo;UF<sub>6</sub>, et constitu&eacute;es ou rev&ecirc;tues de mat&eacute;riaux r&eacute;sistant &agrave; la corrosion par l&rsquo;UF<sub>6</sub>. Ces pompes peuvent &ecirc;tre dot&eacute;es de joints en fluorocarbures et pourvues de fluides de service sp&eacute;ciaux.</p>
<p>A.2.4.5.10 <em>Vannes sp&eacute;ciales d&rsquo;arr&ecirc;t et de r&eacute;glage</em><br />
Soufflets d&rsquo;arr&ecirc;t et de r&eacute;glage, manuels ou automatiques, constitu&eacute;s ou rev&ecirc;tus de mat&eacute;riaux r&eacute;sistant &agrave; la corrosion par l&rsquo;UF<sub>6</sub> et ayant un diam&egrave;tre compris entre 40 mm et 1 500 mm, sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s pour installation dans des syst&egrave;mes principaux et auxiliaires d&rsquo;usines d&rsquo;enrichissement par proc&eacute;d&eacute; a&eacute;rodynamique.</p>
<p>A.2.4.5.11 <em>Spectrom&egrave;tres de masse pour UF<sub>6</sub>/sources d&rsquo;ions</em><br />
Spectrom&egrave;tres de masse magn&eacute;tiques ou quadripolaires sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s, capables de pr&eacute;lever en direct sur les flux d&rsquo;UF<sub>6</sub> gazeux des &eacute;chantillons du gaz d&rsquo;entr&eacute;e, du produit ou des r&eacute;sidus, et ayant toutes les caract&eacute;ristiques suivantes :<br />
a) pouvoir de r&eacute;solution unitaire pour l&rsquo;unit&eacute; de masse atomique sup&eacute;rieur &agrave; 320;<br />
b) sources d&rsquo;ions constitu&eacute;es ou rev&ecirc;tues de nichrome ou de monel ou nickel&eacute;es;<br />
c) sources d&rsquo;ionisation par bombardement &eacute;lectronique;<br />
d) collecteur adapt&eacute; &agrave; l&rsquo;analyse isotopique.</p>
<p>A.2.4.5.12 <em>Syst&egrave;mes de s&eacute;paration de l&rsquo;UF<sub>6</sub> et du gaz porteur</em><br />
Syst&egrave;mes sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s pour s&eacute;parer l&rsquo;UF<sub>6</sub> du gaz porteur (hydrog&egrave;ne ou h&eacute;lium).</p>
<p>A.2.4.6 <em>Syst&egrave;mes, &eacute;quipements et composants sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s pour utilisation dans les usines d&rsquo;enrichissement par &eacute;change chimique ou par &eacute;change d&rsquo;ions, notamment :</em></p>
<p>A.2.4.6.1 <em>Colonnes d&rsquo;&eacute;change liquide-liquide (&eacute;change chimique)</em><br />
Colonnes d&rsquo;&eacute;change liquide-liquide &agrave; contre-courant avec apport d&rsquo;&eacute;nergie m&eacute;canique (&agrave; savoir colonnes puls&eacute;es &agrave; plateaux perfor&eacute;s, colonnes &agrave; plateaux anim&eacute;s d&rsquo;un mouvement alternatif et colonnes munies de turbo-agitateurs internes), sp&eacute;cialement con&ccedil;ues ou pr&eacute;par&eacute;es pour l&rsquo;enrichissement de l&rsquo;uranium par le proc&eacute;d&eacute; d&rsquo;&eacute;change chimique. Afin de les rendre r&eacute;sistantes &agrave; la corrosion par les solutions dans de l&rsquo;acide chlorhydrique concentr&eacute;, les colonnes et leurs internes sont constitu&eacute;s ou rev&ecirc;tus de mat&eacute;riaux plastiques appropri&eacute;s (fluorocarbures polym&egrave;res, par exemple) ou de verre. Les colonnes sont con&ccedil;ues de telle mani&egrave;re que le temps de s&eacute;jour correspondant &agrave; un &eacute;tage soit court (30 s au plus).</p>
<p>A.2.4.6.2 <em>Contacteurs centrifuges liquide-liquide (&eacute;change chimique)</em><br />
Contacteurs centrifuges liquide-liquide sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s pour l&rsquo;enrichissement de l&rsquo;uranium par le proc&eacute;d&eacute; d&rsquo;&eacute;change chimique. Dans ces contacteurs, la dispersion des flux organique et aqueux est obtenue par rotation, puis la s&eacute;paration des phases par application d&rsquo;une force centrifuge. Afin de les rendre r&eacute;sistants &agrave; la corrosion par les solutions dans de l&rsquo;acide chlorhydrique concentr&eacute;, les contacteurs sont constitu&eacute;s ou rev&ecirc;tus de mat&eacute;riaux plastiques appropri&eacute;s (fluorocarbures polym&egrave;res, par exemple) ou rev&ecirc;tus de verre. Les contacteurs centrifuges sont con&ccedil;us de telle mani&egrave;re que le temps de s&eacute;jour correspondant &agrave; un &eacute;tage soit court (30 s au plus).</p>
<p>A.2.4.6.3 <em>Syst&egrave;mes et &eacute;quipements de r&eacute;duction de l&rsquo;uranium (&eacute;change chimique)</em><br />
a) cellules de r&eacute;duction &eacute;lectrochimique sp&eacute;cialement con&ccedil;ues ou pr&eacute;par&eacute;es pour ramener l&rsquo;uranium d&rsquo;un &eacute;tat de valence &agrave; un &eacute;tat inf&eacute;rieur en vue de son enrichissement par le proc&eacute;d&eacute; d&rsquo;&eacute;change chimique. Les mat&eacute;riaux de la cellule en contact avec les solutions du proc&eacute;d&eacute; doivent &ecirc;tre r&eacute;sistants &agrave; la corrosion par les solutions dans de l&rsquo;acide chlorhydrique concentr&eacute;;<br />
b) syst&egrave;mes situ&eacute;s &agrave; l&rsquo;extr&eacute;mit&eacute; de la cascade o&ugrave; est r&eacute;cup&eacute;r&eacute; le produit, sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s pour pr&eacute;lever U<sup>4+</sup> sur le flux organique, ajuster la concentration en acide et alimenter les cellules de r&eacute;duction &eacute;lectrochimique.</p>
<p>A.2.4.6.4 <em>Syst&egrave;mes de pr&eacute;paration de l&rsquo;alimentation (&eacute;change chimique)</em><br />
Syst&egrave;mes sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s pour produire des solutions de chlorure d&rsquo;uranium de grande puret&eacute; destin&eacute;es &agrave; alimenter les usines de s&eacute;paration des isotopes de l&rsquo;uranium par &eacute;change chimique.</p>
<p>A.2.4.6.5 <em>Syst&egrave;mes d&rsquo;oxydation de l&rsquo;uranium (&eacute;change d&rsquo;ions)</em><br />
Syst&egrave;mes sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s pour oxyder U<sup>3+</sup> en U<sup>4+</sup> en vue du reflux vers la cascade de s&eacute;paration des isotopes dans le proc&eacute;d&eacute; d&rsquo;enrichissement par &eacute;change chimique.</p>
<p>A.2.4.6.6 <em>R&eacute;sines &eacute;changeuses d&rsquo;ions/adsorbants &agrave; r&eacute;action rapide (&eacute;change d&rsquo;ions)</em><br />
R&eacute;sines &eacute;changeuses d&rsquo;ions ou adsorbants &agrave; r&eacute;action rapide sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s pour l&rsquo;enrichissement de l&rsquo;uranium par le proc&eacute;d&eacute; d&rsquo;&eacute;change d&rsquo;ions, en particulier r&eacute;sines poreuses macror&eacute;ticul&eacute;es et structures pelliculaires dans lesquelles les groupes actifs d&rsquo;&eacute;change chimique sont limit&eacute;s &agrave; un rev&ecirc;tement superficiel sur un support poreux inactif, et autres structures composites sous une forme appropri&eacute;e, et notamment sous forme de particules ou de fibres. Ces articles ont un diam&egrave;tre inf&eacute;rieur ou &eacute;gal &agrave; 0,2 mm; du point de vue chimique, ils doivent &ecirc;tre r&eacute;sistants aux solutions dans de l&rsquo;acide chlorhydrique concentr&eacute; et, du point de vue physique, &ecirc;tre suffisamment solides pour ne pas se d&eacute;grader dans les colonnes d&rsquo;&eacute;change. Ils sont sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s pour obtenir de tr&egrave;s grandes vitesses d&rsquo;&eacute;change des isotopes de l&rsquo;uranium (temps de demi-r&eacute;action inf&eacute;rieur &agrave; 10 s) et sont efficaces &agrave; des temp&eacute;ratures comprises entre 100 &deg;C et 200 &deg;C.</p>
<p>A.2.4.6.7 <em>Colonnes d&rsquo;&eacute;change d&rsquo;ions (&eacute;change d&rsquo;ions)</em><br />
Colonnes cylindriques de plus de 1 000 mm de diam&egrave;tre contenant un garnissage de r&eacute;sine &eacute;changeuse d&rsquo;ions/adsorbants, sp&eacute;cialement con&ccedil;ues ou pr&eacute;par&eacute;es pour l&rsquo;enrichissement de l&rsquo;uranium par le proc&eacute;d&eacute; d&rsquo;&eacute;change d&rsquo;ions. Ces colonnes sont constitu&eacute;es ou rev&ecirc;tues de mat&eacute;riaux (tels que le titane ou les plastiques &agrave; base de fluorocarbures) r&eacute;sistant &agrave; la corrosion par des solutions dans de l&rsquo;acide chlorhydrique concentr&eacute;, et peuvent fonctionner &agrave; des temp&eacute;ratures comprises entre 100 &deg;C et 200 &deg;C et &agrave; des pressions sup&eacute;rieures &agrave; 0,7 MPa (10<sup>2</sup> lb/po<sup>2</sup>).</p>
<p>A.2.4.6.8 <em>Syst&egrave;mes de reflux (&eacute;change d&rsquo;ions)</em><br />
a) syst&egrave;mes de r&eacute;duction chimique ou &eacute;lectrochimique sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s pour r&eacute;g&eacute;n&eacute;rer l&rsquo;agent (les agents) de r&eacute;duction chimique utilis&eacute;(s) dans les cascades d&rsquo;enrichissement de l&rsquo;uranium par le proc&eacute;d&eacute; d&rsquo;&eacute;change d&rsquo;ions;<br />
b) syst&egrave;mes d&rsquo;oxydation chimique ou &eacute;lectrochimique sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s pour r&eacute;g&eacute;n&eacute;rer l&rsquo;agent (les agents) d&rsquo;oxydation chimique utilis&eacute;(s) dans les cascades d&rsquo;enrichissement de l&rsquo;uranium par le proc&eacute;d&eacute; d&rsquo;&eacute;change d&rsquo;ions.</p>
<p>A.2.4.7 <em>Syst&egrave;mes, &eacute;quipements et composants sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s pour utilisation dans les usines d&rsquo;enrichissement par laser, notamment :</em></p>
<p>A.2.4.7.1 <em>Syst&egrave;mes de vaporisation de l&rsquo;uranium (SILVA)</em><br />
Syst&egrave;mes de vaporisation de l&rsquo;uranium sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s, renfermant des canons &agrave; &eacute;lectrons de grande puissance &agrave; faisceau en nappe ou &agrave; balayage, fournissant une puissance au niveau de la cible sup&eacute;rieure &agrave; 2,5 kW/cm.</p>
<p>A.2.4.7.2 <em>Syst&egrave;mes de manipulation de l&rsquo;uranium m&eacute;tal liquide (SILVA)</em><br />
Syst&egrave;mes de manipulation de m&eacute;taux liquides sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s pour l&rsquo;uranium ou les alliages d&rsquo;uranium fondus, comprenant des creusets et des &eacute;quipements de refroidissement pour les creusets.</p>
<p>A.2.4.7.3 <em>Assemblages collecteurs du produit et des r&eacute;sidus d&rsquo;uranium m&eacute;tal (SILVA)</em><br />
Assemblages collecteurs du produit et des r&eacute;sidus sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s pour l&rsquo;uranium m&eacute;tal &agrave; l&rsquo;&eacute;tat liquide ou solide.</p>
<p>A.2.4.7.4 <em>Enceintes de module s&eacute;parateur (SILVA)</em><br />
Conteneurs de forme cylindrique ou rectangulaire sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s pour loger la source de vapeur d&rsquo;uranium m&eacute;tal, le canon &agrave; &eacute;lectrons et les collecteurs du produit et des r&eacute;sidus.</p>
<p>A.2.4.7.5 <em>Tuy&egrave;res de d&eacute;tente supersonique (SILMO)</em><br />
Tuy&egrave;res de d&eacute;tente supersonique, r&eacute;sistant &agrave; la corrosion par l&rsquo;UF<sub>6</sub>, sp&eacute;cialement con&ccedil;ues ou pr&eacute;par&eacute;es pour refroidir les m&eacute;langes d&rsquo;UF<sub>6</sub> et de gaz porteur jusqu&rsquo;&agrave; 150 K ou moins.</p>
<p>A.2.4.7.6 <em>Collecteurs du produit (pentafluorure d&rsquo;uranium) (SILMO)</em><br />
Collecteurs de pentafluorure d&rsquo;uranium (UF5) solide sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s, constitu&eacute;s de collecteurs ou de combinaisons de collecteurs &agrave; filtre, &agrave; impact ou &agrave; cyclone et r&eacute;sistant &agrave; la corrosion en milieu UF<sub>5</sub>/UF<sub>6</sub>.</p>
<p>A.2.4.7.7 <em>Compresseurs d&rsquo;UF<sub>6</sub> /gaz porteur (SILMO)</em><br />
Compresseurs sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s pour les m&eacute;langes d&rsquo;UF<sub>6</sub> et de gaz porteur, pr&eacute;vus pour un fonctionnement de longue dur&eacute;e en atmosph&egrave;re d&rsquo;UF6. Les composants de ces compresseurs qui sont en contact avec le gaz de proc&eacute;d&eacute; sont constitu&eacute;s ou rev&ecirc;tus de mat&eacute;riaux r&eacute;sistant &agrave; la corrosion par l&rsquo;UF<sub>6</sub>.</p>
<p>A.2.4.7.8 <em>Garnitures d&rsquo;&eacute;tanch&eacute;it&eacute; d&rsquo;arbres (SILMO)</em><br />
Garnitures sp&eacute;cialement con&ccedil;ues ou pr&eacute;par&eacute;es, avec connexions d&rsquo;alimentation et d&rsquo;&eacute;chappement, pour assurer de mani&egrave;re fiable l&rsquo;&eacute;tanch&eacute;it&eacute; de l&rsquo;arbre reliant le rotor du compresseur au moteur d&rsquo;entraÃ®nement en emp&ecirc;chant le gaz de proc&eacute;d&eacute; de s&rsquo;&eacute;chapper, ou l&rsquo;air ou le gaz d&rsquo;&eacute;tanch&eacute;it&eacute; de p&eacute;n&eacute;trer dans la chambre int&eacute;rieure du compresseur qui est remplie du m&eacute;lange UF<sub>6</sub>/gaz porteur.</p>
<p>A.2.4.7.9 <em>Syst&egrave;mes de fluoration (SILMO)</em><br />
Syst&egrave;mes sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s pour fluorer l&rsquo;UF<sub>5</sub> (solide) en UF<sub>6</sub> (gazeux).</p>
<p>A.2.4.7.10 <em>Spectrom&egrave;tres de masse pour UF<sub>6</sub>/source d&rsquo;ions (SILMO)</em><br />
Spectrom&egrave;tres de masse magn&eacute;tiques ou quadripolaires sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s, capables de pr&eacute;lever en direct sur les flux d&rsquo;UF<sub>6</sub> gazeux des &eacute;chantillons du gaz d&rsquo;entr&eacute;e, du produit ou des r&eacute;sidus, et ayant toutes les caract&eacute;ristiques suivantes :<br />
a) pouvoir de r&eacute;solution unitaire pour l&rsquo;unit&eacute; de masse atomique sup&eacute;rieur &agrave; 320;<br />
b) sources d&rsquo;ions constitu&eacute;es ou rev&ecirc;tues de nichrome ou de monel ou nickel&eacute;es;<br />
c) sources d&rsquo;ionisation par bombardement &eacute;lectronique;<br />
d) pr&eacute;sence d&rsquo;un collecteur adapt&eacute; &agrave; l&rsquo;analyse isotopique.</p>
<p>A.2.4.7.11 <em>Syst&egrave;mes d&rsquo;alimentation/syst&egrave;mes de pr&eacute;l&egrave;vement du produit et des r&eacute;sidus (SILMO)</em><br />
Syst&egrave;mes ou &eacute;quipements sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s pour les usines d&rsquo;enrichissement, constitu&eacute;s ou rev&ecirc;tus de mat&eacute;riaux r&eacute;sistant &agrave; la corrosion par l&rsquo;UF6 et comprenant :<br />
a) des autoclaves, fours ou syst&egrave;mes d&rsquo;alimentation utilis&eacute;s pour introduire l&rsquo;UF<sub>6</sub> dans le processus d&rsquo;enrichissement;<br />
b) des pi&egrave;ges &agrave; froid utilis&eacute;s pour pr&eacute;lever l&rsquo;UF<sub>6</sub> du processus d&rsquo;enrichissement en vue de son transfert ult&eacute;rieur apr&egrave;s r&eacute;chauffement;<br />
c) des stations de solidification ou de liqu&eacute;faction utilis&eacute;es pour pr&eacute;lever l&rsquo;UF<sub>6</sub> du processus d&rsquo;enrichissement, par compression et passage &agrave; l&rsquo;&eacute;tat liquide ou solide;<br />
d) des stations produits ou r&eacute;sidus pour le transfert de l&rsquo;UF<sub>6</sub> dans des conteneurs.</p>
<p>A.2.4.7.12 <em>Syst&egrave;mes de s&eacute;paration de l&rsquo;UF<sub>6</sub> et du gaz porteur (SILMO)</em><br />
Syst&egrave;mes sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s pour s&eacute;parer l&rsquo;UF<sub>6</sub> du gaz porteur. Ce dernier peut &ecirc;tre l&rsquo;azote, l&rsquo;argon ou un autre gaz.</p>
<p>A.2.4.7.13 <em>Syst&egrave;mes laser (SILVA, SILMO et CRISLA)</em><br />
Lasers ou syst&egrave;mes laser sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s pour la s&eacute;paration des isotopes de l&rsquo;uranium.</p>
<p>A.2.4.8 <em>Syst&egrave;mes, &eacute;quipements et composants sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s pour utilisation dans les usines d&rsquo;enrichissement par s&eacute;paration des isotopes dans un plasma, notamment :</em></p>
<p>A.2.4.8.1 <em>Sources d&rsquo;&eacute;nergie hyperfr&eacute;quence et antennes</em><br />
Sources d&rsquo;&eacute;nergie hyperfr&eacute;quence et antennes sp&eacute;cialement con&ccedil;ues ou pr&eacute;par&eacute;es pour produire ou acc&eacute;l&eacute;rer des ions et ayant les caract&eacute;ristiques suivantes : fr&eacute;quence sup&eacute;rieure &agrave; 30 GHz et puissance de sortie moyenne sup&eacute;rieure &agrave; 50 kW pour la production d&rsquo;ions.</p>
<p>A.2.4.8.2 <em>Bobines excitatrices d&rsquo;ions</em><br />
Bobines excitatrices d&rsquo;ions &agrave; haute fr&eacute;quence sp&eacute;cialement con&ccedil;ues ou pr&eacute;par&eacute;es pour des fr&eacute;quences sup&eacute;rieures &agrave; 100 kHz et capables de supporter une puissance moyenne sup&eacute;rieure &agrave; 40 kW.</p>
<p>A.2.4.8.3 <em>Syst&egrave;mes g&eacute;n&eacute;rateurs de plasma d&rsquo;uranium</em><br />
Syst&egrave;mes de production de plasma d&rsquo;uranium sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s, pouvant renfermer des canons &agrave; &eacute;lectrons de grande puissance &agrave; faisceau en nappe ou &agrave; balayage, fournissant une puissance au niveau de la cible sup&eacute;rieure &agrave; 2,5 kW/cm.</p>
<p>A.2.4.8.4 <em>Syst&egrave;mes de manipulation de l&rsquo;uranium m&eacute;tal liquide</em><br />
Syst&egrave;mes de manipulation de m&eacute;taux liquides sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s pour l&rsquo;uranium ou les alliages d&rsquo;uranium fondus, comprenant des creusets et des &eacute;quipements de refroidissement pour les creusets.</p>
<p>A.2.4.8.5 <em>Assemblages collecteurs du produit et des r&eacute;sidus d&rsquo;uranium m&eacute;tal</em><br />
Assemblages collecteurs du produit et des r&eacute;sidus sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s pour l&rsquo;uranium m&eacute;tal &agrave; l&rsquo;&eacute;tat solide. Ces assemblages collecteurs sont constitu&eacute;s ou rev&ecirc;tus de mat&eacute;riaux r&eacute;sistant &agrave; la chaleur et &agrave; la corrosion par la vapeur d&rsquo;uranium m&eacute;tal, tels que le graphite rev&ecirc;tu d&rsquo;oxyde d&rsquo;yttrium ou le tantale.</p>
<p>A.2.4.8.6 <em>Enceintes de module s&eacute;parateur</em><br />
Conteneurs cylindriques sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s pour les usines d&rsquo;enrichissement par s&eacute;paration des isotopes dans un plasma et destin&eacute;s &agrave; loger la source de plasma d&rsquo;uranium, la bobine excitatrice &agrave; haute fr&eacute;quence et les collecteurs du produit et des r&eacute;sidus.</p>
<p>A.2.4.9 <em>Syst&egrave;mes, &eacute;quipement et composants sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s pour utilisation dans les usines d&rsquo;enrichissement par le proc&eacute;d&eacute; &eacute;lectromagn&eacute;tique, notamment :</em></p>
<p>A.2.4.9.1 <em>S&eacute;parateurs isotopiques &eacute;lectromagn&eacute;tiques</em><br />
S&eacute;parateurs isotopiques &eacute;lectromagn&eacute;tiques sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s pour la s&eacute;paration des isotopes de l&rsquo;uranium, et &eacute;quipements et composants pour cette s&eacute;paration, notamment les :<br />
a) sources d&rsquo;ions :<br />
sources d&rsquo;ions uranium uniques ou multiples, sp&eacute;cialement con&ccedil;ues ou pr&eacute;par&eacute;es, comprenant la source de vapeur, l&rsquo;ionisateur et l&rsquo;acc&eacute;l&eacute;rateur de faisceau, constitu&eacute;es de mat&eacute;riaux appropri&eacute;s comme le graphite, l&rsquo;acier inoxydable ou le cuivre, et capables de fournir un courant d&rsquo;ionisation total &eacute;gal ou sup&eacute;rieur &agrave; 50 mA;<br />
b) collecteurs d&rsquo;ions :<br />
plaques collectrices comportant des fentes et des poches (deux ou plus), sp&eacute;cialement con&ccedil;ues ou pr&eacute;par&eacute;es pour collecter les faisceaux d&rsquo;ions uranium enrichis et appauvris, et constitu&eacute;es de mat&eacute;riaux appropri&eacute;s comme le graphite ou l&rsquo;acier inoxydable;<br />
c) enceintes &agrave; vide :<br />
enceintes &agrave; vide sp&eacute;cialement con&ccedil;ues ou pr&eacute;par&eacute;es pour les s&eacute;parateurs &eacute;lectromagn&eacute;tiques d&rsquo;uranium, constitu&eacute;es de mat&eacute;riaux non magn&eacute;tiques appropri&eacute;s comme l&rsquo;acier inoxydable et con&ccedil;ues pour fonctionner &agrave; des pressions inf&eacute;rieures ou &eacute;gales &agrave; 0,1 Pa;<br />
d) pi&egrave;ces polaires :<br />
pi&egrave;ces polaires sp&eacute;cialement con&ccedil;ues ou pr&eacute;par&eacute;es, de diam&egrave;tre sup&eacute;rieur &agrave; 2 m, utilis&eacute;es pour maintenir un champ magn&eacute;tique constant dans un s&eacute;parateur isotopique &eacute;lectromagn&eacute;tique et pour transf&eacute;rer le champ magn&eacute;tique entre s&eacute;parateurs contigus.</p>
<p>A.2.4.9.2 <em>Alimentations haute tension</em><br />
Alimentations haute tension sp&eacute;cialement con&ccedil;ues ou pr&eacute;par&eacute;es pour les sources d&rsquo;ions et ayant toutes les caract&eacute;ristiques suivantes : capables de fournir en permanence, pendant une p&eacute;riode de 8 heures, une tension de sortie &eacute;gale ou sup&eacute;rieure &agrave; 20 000 V avec une intensit&eacute; de sortie &eacute;gale ou sup&eacute;rieure &agrave; 1 A et une variation de tension inf&eacute;rieure &agrave; 0,01 %.</p>
<p>A.2.4.9.3 <em>Alimentations des aimants</em><br />
Alimentations des aimants en courant continu de haute intensit&eacute; sp&eacute;cialement con&ccedil;ues ou pr&eacute;par&eacute;es et ayant toutes les caract&eacute;ristiques suivantes : capables de produire en permanence, pendant une p&eacute;riode de 8 heures, un courant d&rsquo;intensit&eacute; sup&eacute;rieure ou &eacute;gale &agrave; 500 A &agrave; une tension sup&eacute;rieure ou &eacute;gale &agrave; 100 V, avec des variations d&rsquo;intensit&eacute; et de tension inf&eacute;rieures &agrave; 0,01 %.</p>
<p>A.2.5 <em>Usines de production ou de concentration d&rsquo;eau lourde, de deut&eacute;rium et de compos&eacute;s de deut&eacute;rium, et &eacute;quipements sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s &agrave; cette fin, notamment :</em></p>
<p>A.2.5.1 <em>Tours d&rsquo;&eacute;change eau-sulfure d&rsquo;hydrog&egrave;ne</em><br />
Tours d&rsquo;&eacute;change fabriqu&eacute;es en acier au carbone fin (par exemple ASTM A516), ayant un diam&egrave;tre compris entre 6 m (20 pi) et 9 m (30 pi), capables de fonctionner &agrave; des pressions sup&eacute;rieures ou &eacute;gales &agrave; 2 MPa (300 lb/po<sup>2</sup>) et ayant une sur&eacute;paisseur de corrosion de 6 mm ou plus, sp&eacute;cialement con&ccedil;ues ou pr&eacute;par&eacute;es pour la production d&rsquo;eau lourde par le proc&eacute;d&eacute; d&rsquo;&eacute;change eau-sulfure d&rsquo;hydrog&egrave;ne.</p>
<p>A.2.5.2 <em>Soufflantes et compresseurs</em><br />
Soufflantes ou compresseurs centrifuges &agrave; &eacute;tage unique sous basse pression (c&rsquo;est-&agrave;-dire 0,2 MPa ou 30 lb/po<sup>2</sup>) pour la circulation de sulfure d&rsquo;hydrog&egrave;ne (c&rsquo;est-&agrave;-dire un gaz contenant plus de 70 % de H2S) sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s pour la production d&rsquo;eau lourde par le proc&eacute;d&eacute; d&rsquo;&eacute;change eau-sulfure d&rsquo;hydrog&egrave;ne. Ces soufflantes ou compresseurs ont une capacit&eacute; de d&eacute;bit sup&eacute;rieure ou &eacute;gale &agrave; 56 m3/s (120 000 SCFM) lorsqu&rsquo;ils fonctionnent &agrave; des pressions d&rsquo;aspiration sup&eacute;rieures ou &eacute;gales &agrave; 1,8 MPa (260 lb/po<sup>2</sup>), et sont &eacute;quip&eacute;s de joints con&ccedil;us pour &ecirc;tre utilis&eacute;s en milieu humide en pr&eacute;sence de H<sub>2</sub>S.</p>
<p>A.2.5.3 <em>Tours d&rsquo;&eacute;change ammoniac-hydrog&egrave;ne</em><br />
Tours d&rsquo;&eacute;change ammoniac-hydrog&egrave;ne d&rsquo;une hauteur sup&eacute;rieure ou &eacute;gale &agrave; 35 m (114,3 pi) ayant un diam&egrave;tre compris entre 1,5 m (4,9 pi) et 2,5 m (8,2 pi) et pouvant fonctionner &agrave; des pressions sup&eacute;rieures &agrave; 15 MPa (2 225 lb/po<sup>2</sup>), sp&eacute;cialement con&ccedil;ues ou pr&eacute;par&eacute;es pour la production d&rsquo;eau lourde par le proc&eacute;d&eacute; d&rsquo;&eacute;change ammoniac-hydrog&egrave;ne. Ces tours ont aussi au moins une ouverture axiale &agrave; rebord du m&ecirc;me diam&egrave;tre que la partie cylindrique, par laquelle les internes de la tour peuvent &ecirc;tre ins&eacute;r&eacute;s ou retir&eacute;s.</p>
<p>A.2.5.4 <em>Internes de tour et pompes d&rsquo;&eacute;tage</em><br />
Internes de tour et pompes d&rsquo;&eacute;tage sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s pour des tours servant &agrave; la production d&rsquo;eau lourde par le proc&eacute;d&eacute; d&rsquo;&eacute;change ammoniac-hydrog&egrave;ne. Les internes de tour comprennent des contacteurs d&rsquo;&eacute;tage sp&eacute;cialement con&ccedil;us qui favorisent un contact intime entre le gaz et le liquide. Les pompes d&rsquo;&eacute;tage comprennent des pompes submersibles sp&eacute;cialement con&ccedil;ues pour la circulation d&rsquo;ammoniac liquide dans un &eacute;tage de contact &agrave; l&rsquo;int&eacute;rieur des tours.</p>
<p>A.2.5.5 <em>Craqueurs d&rsquo;ammoniac</em><br />
Craqueurs d&rsquo;ammoniac ayant une pression de fonctionnement sup&eacute;rieure ou &eacute;gale &agrave; 3 MPa (450 lb/po<sup>2</sup>) sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s pour la production d&rsquo;eau lourde par le proc&eacute;d&eacute; d&rsquo;&eacute;change ammoniac-hydrog&egrave;ne.</p>
<p>A.2.5.6 <em>Analyseurs d&rsquo;absorption infrarouge</em><br />
Analyseurs d&rsquo;absorption infrarouge permettant une analyse en ligne du rapport hydrog&egrave;ne/deut&eacute;rium lorsque les concentrations en deut&eacute;rium sont &eacute;gales ou sup&eacute;rieures &agrave; 90 %.</p>
<p>A.2.5.7 <em>Br&ucirc;leurs catalytiques</em><br />
Br&ucirc;leurs catalytiques pour la conversion en eau lourde du deut&eacute;rium enrichi sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s pour la production d&rsquo;eau lourde par le proc&eacute;d&eacute; d&rsquo;&eacute;change ammoniac-hydrog&egrave;ne.</p>
<p>A.2.5.8 <em>Syst&egrave;mes complets de concentration d&rsquo;eau lourde ou colonnes pour de tels syst&egrave;mes</em><br />
Syst&egrave;mes complets de concentration d&rsquo;eau lourde ou colonnes pour de tels syst&egrave;mes, sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s pour obtenir de l&rsquo;eau lourde de qualit&eacute; r&eacute;acteur par la teneur en deut&eacute;rium.</p>
<p>A.2.6 <em>Usines de conversion de l&rsquo;uranium et du plutonium aux fins de fabrication d&rsquo;&eacute;l&eacute;ments combustibles et de s&eacute;paration des isotopes de l&rsquo;uranium, au sens des paragraphes A.2.3. et A.2.4., et &eacute;quipements sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s &agrave; cette fin, notamment :</em></p>
<p>A.2.6.1 <em>Usines de conversion de l&rsquo;uranium et &eacute;quipements sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s &agrave; cette fin, notamment :</em></p>
<p>A.2.6.1.1 Syst&egrave;mes sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s pour la conversion des concentr&eacute;s de minerai d&rsquo;uranium en UO<sub>3</sub>.</p>
<p>A.2.6.1.2 Syst&egrave;mes sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s pour la conversion d&rsquo;UO<sub>3</sub> en UF<sub>6</sub>.</p>
<p>A.2.6.1.3 Syst&egrave;mes sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s pour la conversion d&rsquo;UO<sub>3</sub> en UO<sub>2</sub>.</p>
<p>A.2.6.1.4 Syst&egrave;mes sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s pour la conversion d&rsquo;UO<sub>2</sub> en UF<sub>4</sub>.</p>
<p>A.2.6.1.5 Syst&egrave;mes sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s pour la conversion d&rsquo;UF<sub>4</sub> en UF<sub>6</sub>.</p>
<p>A.2.6.1.6 Syst&egrave;mes sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s pour la conversion d&rsquo;UF<sub>4</sub> en U m&eacute;tal.</p>
<p>A.2.6.1.7 Syst&egrave;mes sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s pour la conversion d&rsquo;UF<sub>6</sub> en UO<sub>2</sub>.</p>
<p>A.2.6.1.8 Syst&egrave;mes sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s pour la conversion d&rsquo;UF<sub>6</sub> en UF<sub>4</sub>.</p>
<p>A.2.6.1.9 Syst&egrave;mes sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s pour la conversion d&rsquo;UO<sub>2</sub> en UCl<sub>4</sub>.</p>
<p>A.2.6.2 <em>Usines de conversion du plutonium et &eacute;quipements sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s &agrave; cette fin, notamment :</em></p>
<p>A.2.6.2.1 Syst&egrave;mes sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s pour la conversion du nitrate de plutonium en oxyde.</p>
<p>A.2.6.2.2 Syst&egrave;mes sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s pour la production de plutonium m&eacute;tal.</p>
<p>A.3. COMPOSANTS DE L&rsquo;&Eacute;QUIPEMENT NUCL&Eacute;AIRE CONTR&Ocirc;L&Eacute; MENTIONN&Eacute; AU PARAGRAPHE A.2.</p>
<p>A.4. RENSEIGNEMENTS NUCL&Eacute;AIRES CONTR&Ocirc;L&Eacute;S</p>
<p>A.4.1. <em>Technologie</em><br />
Les donn&eacute;es techniques se pr&eacute;sentent sous forme notamment de dessins techniques, mod&egrave;les, n&eacute;gatifs et &eacute;preuves photographiques, enregistrements, donn&eacute;es de conception, manuels techniques et manuels d&rsquo;exploitation sous une forme &eacute;crite ou enregistr&eacute;e sur d&rsquo;autres supports ou dispositifs tels que des disques, des bandes magn&eacute;tiques et des m&eacute;moires mortes pour la conception, la production, la construction, l&rsquo;exploitation ou l&rsquo;entretien de tout article mentionn&eacute; &agrave; la pr&eacute;sente partie, &agrave; l&rsquo;exception des donn&eacute;es mises &agrave; la disposition du public (par exemple, donn&eacute;es figurant dans des livres ou p&eacute;riodiques publi&eacute;s ou donn&eacute;es mises &agrave; la disposition des int&eacute;ress&eacute;s sans restriction lors d&rsquo;une diffusion ult&eacute;rieure).</p>
<p className="text-center">PARTIE B</p>  <p className="text-center">LISTE DES ARTICLES &Agrave; DOUBLE USAGE DANS LE SECTEUR NUCL&Eacute;AIRE</p>  <p className="text-center">B.1. SUBSTANCES NUCL&Eacute;AIRES CONTR&Ocirc;L&Eacute;ES</p>
<p>B.1.1 <em>Mati&egrave;res &agrave; double usage dans le secteur nucl&eacute;aire</em></p>
<p>B.1.1.1 Radionucl&eacute;ides &eacute;metteurs alpha ayant une p&eacute;riode alpha de dix jours ou plus mais de moins de 200 ans, compos&eacute;s et m&eacute;langes contenant l&rsquo;un ou plusieurs de ces radionucl&eacute;ides avec une activit&eacute; alpha totale de 1 Ci/kg (37 GBq/kg) ou plus, et produits ou dispositifs contenant l&rsquo;une de ces substances, &agrave; l&rsquo;exception d&rsquo;un produit ou d&rsquo;un dispositif contenant moins de 3,7 GBq (100 mCi) d&rsquo;activit&eacute; alpha.</p>
<p>B.1.1.2  Alliages d&rsquo;aluminium capables d&rsquo;une r&eacute;sistance maximale &agrave; la traction de 460 MPa (0,46 &Cross; 109 N/m2) ou plus &agrave; des temp&eacute;ratures de 293 K (20 &deg;C) sous la forme de tubes ou de pi&egrave;ces cylindriques pleines (y compris les pi&egrave;ces forg&eacute;es) ayant un diam&egrave;tre ext&eacute;rieur sup&eacute;rieur &agrave; 75 mm (3 po).</p>
<p>NOTA :<br />
L&rsquo;expression &laquo; capables &raquo; couvre les alliages d&rsquo;aluminium avant ou apr&egrave;s le traitement thermique.</p>
<p>B.1.1.3  B&eacute;ryllium m&eacute;tal, alliages comprenant plus de 50 % de b&eacute;ryllium en poids, compos&eacute;s du b&eacute;ryllium et produits manufactur&eacute;s dans ces mati&egrave;res, sauf :<br />
a) les fen&ecirc;tres de m&eacute;tal pour les machines &agrave; rayons X, ou les dispositifs de diagraphie des trous de forage;<br />
b) des pi&egrave;ces en oxyde fabriqu&eacute;es ou semi-fabriqu&eacute;es sp&eacute;cialement con&ccedil;ues pour des &eacute;l&eacute;ments de composants &eacute;lectroniques ou comme substrat pour des circuits &eacute;lectroniques;<br />
c) le b&eacute;ryl (silicate de b&eacute;ryllium et d&rsquo;aluminium) sous forme d&rsquo;&eacute;meraudes ou d&rsquo;aigues-marines.</p>
<p>NOTA :<br />
Cette rubrique englobe les d&eacute;chets et les chutes contenant du b&eacute;ryllium tel que d&eacute;fini ci-dessus.</p>
<p>B.1.1.4 Bismuth de grande puret&eacute; (99,99 % ou plus) avec une teneur en argent tr&egrave;s faible (moins de 10 ppm).</p>
<p>B.1.1.5 Bore et compos&eacute;s, m&eacute;langes, mati&egrave;res charg&eacute;es au bore et r&eacute;sidus ou d&eacute;chets de ces substances, dans lesquels le bore 10 entre pour plus de 20 % en poids dans la teneur totale en bore.</p>
<p>B.1.1.6 Calcium (de grande puret&eacute;) contenant &agrave; la fois moins de 1 000 ppm en poids d&rsquo;impuret&eacute;s m&eacute;talliques autres que le magn&eacute;sium et moins de 10 ppm de bore.</p>
<p>B.1.1.7 Trifluorure de chlore (ClF<sub>3</sub>).</p>
<p>B.1.1.8 <em>Creusets fabriqu&eacute;s en mati&egrave;res r&eacute;sistant aux m&eacute;taux actinides liquides, comme suit :</em><br />
a) creusets dont le volume est compris entre 150 mL et 8 L, constitu&eacute;s ou rev&ecirc;tus de l&rsquo;une des mati&egrave;res suivantes ayant un degr&eacute; de puret&eacute; &eacute;gal ou sup&eacute;rieur &agrave; 98 % :<br />
(1) fluorure de calcium (CaF<sub>2</sub>);<br />
(2) zirconate (m&eacute;tazirconate) de calcium (Ca<sub>2</sub>ZrO<sub>3</sub>);<br />
(3) sulfure de c&eacute;rium (Ce<sub>2</sub>S<sub>3</sub>);<br />
(4) oxyde d&rsquo;erbium (erbine) (Er<sub>2</sub>O<sub>3</sub>);<br />
(5) oxyde de hafnium (HfO<sub>2</sub>);<br />
(6) oxyde de magn&eacute;sium (MgO);<br />
(7) alliage nitrur&eacute; niobium-titane-tungst&egrave;ne (approximativement 50 % de Nb, 30 % de Ti et 20 % de W);<br />
(8) oxyde d&rsquo;yttrium (yttria) (Y<sub>2</sub>O<sub>3</sub>);<br />
(9) oxyde de zirconium (zircone) (ZrO<sub>2</sub>);<br />
b) creusets dont le volume est compris entre 50 mL et 2 L, constitu&eacute;s ou rev&ecirc;tus de tantale ayant un degr&eacute; de puret&eacute; &eacute;gal ou sup&eacute;rieur &agrave; 99,9 %;<br />
c) creusets dont le volume est compris entre 50 mL et 2 L, constitu&eacute;s ou rev&ecirc;tus de tantale (ayant un degr&eacute; de puret&eacute; &eacute;gal ou sup&eacute;rieur &agrave; 98 %) recouverts de carbure, de nitrure ou de borure de tantale (ou toute combinaison de ces substances).</p>
<p>B.1.1.9 <em>Mati&egrave;res fibreuses ou filamenteuses, pr&eacute;impr&eacute;gn&eacute;es et structures composites, comme suit :</em><br />
a) mati&egrave;res fibreuses ou filamenteuses carbon&eacute;es ou aramides ayant un module sp&eacute;cifique &eacute;gal ou sup&eacute;rieur &agrave; 12,7 &Cross; 10<sup>6</sup> m ou une r&eacute;sistance sp&eacute;cifique &agrave; la traction &eacute;gale ou sup&eacute;rieure &agrave; 23,5 &Cross; 10<sup>4</sup> m, &agrave; l&rsquo;exception des mati&egrave;res fibreuses ou filamenteuses aramides contenant 0,25 % ou plus en poids d&rsquo;un modificateur de surface des fibres &agrave; base d&rsquo;ester;<br />
b) mati&egrave;res fibreuses ou filamenteuses en verre ayant un module sp&eacute;cifique &eacute;gal ou sup&eacute;rieur &agrave; 3,18 &Cross; 10<sup>6</sup> m et une r&eacute;sistance sp&eacute;cifique &agrave; la traction &eacute;gale ou sup&eacute;rieure &agrave; 7,62 &Cross; 10<sup>4</sup> m;<br />
c) fils continus, m&egrave;ches, filasses ou rubans impr&eacute;gn&eacute;s de r&eacute;sine thermodurcie d&rsquo;une largeur &eacute;gale ou inf&eacute;rieure &agrave; 15 mm (pr&eacute;impr&eacute;gn&eacute;s), faits de mati&egrave;res fibreuses ou filamenteuses carbon&eacute;es ou en verre mentionn&eacute;es aux paragraphes a) ou b);</p>
<p>NOTA :<br />
La r&eacute;sine forme la matrice du composite.<br />
d) structures composites sous la forme de tubes ayant un diam&egrave;tre int&eacute;rieur inscrit de 75 mm (3 po) &agrave; 400 mm (16 po) fabriqu&eacute;es dans l&rsquo;une des mati&egrave;res fibreuses ou filamenteuses sp&eacute;cifi&eacute;es au paragraphe a) ou dans des mati&egrave;res pr&eacute;impr&eacute;gn&eacute;es au carbone sp&eacute;cifi&eacute;es au paragraphe c).</p>
<p>NOTA :<br />
a) L&rsquo;expression <strong>mati&egrave;res fibreuses ou filamenteuses</strong> couvre les monofilaments continus, les fils continus, les m&egrave;ches, les filasses et les rubans.<br />
b) Le <strong>module sp&eacute;cifique</strong> est le module de Young exprim&eacute; en N/m2 divis&eacute; par le poids sp&eacute;cifique exprim&eacute; en N/m3, mesur&eacute; &agrave; une temp&eacute;rature de 23 Â± 2 &deg;C et &agrave; une humidit&eacute; relative de 50 &plusmn; 5 %.<br />
c) La <strong>r&eacute;sistance sp&eacute;cifique &agrave; la traction</strong> est la r&eacute;sistance maximale &agrave; la traction exprim&eacute;e en N/m<sup>2</sup>, divis&eacute;e par le poids sp&eacute;cifique exprim&eacute; en N/m<sup>3</sup>, mesur&eacute;e &agrave; une temp&eacute;rature de 23 &plusmn; 2 &deg;C et &agrave; une humidit&eacute; relative de 50 &plusmn; 5 %.</p>
<p>B.1.1.10 Hafnium m&eacute;tal, alliages, compos&eacute;s de hafnium contenant plus de 60 % de hafnium en poids, produits fabriqu&eacute;s dans ces mati&egrave;res et d&eacute;chets ou r&eacute;sidus de l&rsquo;une ou l&rsquo;autre de ces mati&egrave;res.</p>
<p>B.1.1.11 H&eacute;lium 3 ou h&eacute;lium enrichi en isotope 3; alliages, compos&eacute;s ou m&eacute;langes contenant de l&rsquo;h&eacute;lium enrichi en h&eacute;lium 3; h&eacute;lium r&eacute;pondant &agrave; cette description et contenu dans des produits ou dispositifs, &agrave; l&rsquo;exception d&rsquo;un produit ou d&rsquo;un dispositif qui contient moins de 1 g d&rsquo;h&eacute;lium 3.</p>
<p>B.1.1.12 Lithium enrichi en isotope 6 (<sup>6</sup>Li) &agrave; une concentration atomique sup&eacute;rieure &agrave; 7,5 %; alliages, compos&eacute;s ou m&eacute;langes, d&eacute;chets ou r&eacute;sidus contenant du lithium enrichi en isotope 6; lithium r&eacute;pondant &agrave; cette description et contenu dans des produits ou dispositifs, &agrave; l&rsquo;exception des dosim&egrave;tres thermoluminescents.</p>
<p>NOTA :<br />
La teneur naturelle du lithium en isotope 6 est de 7,5 % d&rsquo;atomes.</p>
<p>B.1.1.13 Magn&eacute;sium (de grande puret&eacute;) contenant en poids moins de 200 ppm d&rsquo;impuret&eacute;s m&eacute;talliques autres que le calcium et moins de 10 ppm de bore.</p>
<p>B.1.1.14 Acier maraging capable d&rsquo;une r&eacute;sistance maximale &agrave; la traction &eacute;gale ou sup&eacute;rieure &agrave; 2 050 MPa (2,050 &Cross; 109 N/m<sup>2</sup>) (300 000 lb/po<sup>2</sup>) &agrave; 293 K (20 &deg;C), &agrave; l&rsquo;exception des formes dans lesquelles aucune dimension lin&eacute;aire n&rsquo;exc&egrave;de 75 mm.<br />
NOTA :<br />
L&rsquo;expression &laquo; capable &raquo; d&rsquo;une couvre l&rsquo;acier maraging avant ou apr&egrave;s le traitement thermique.</p>
<p>B.1.1.15 <em>Poudre de nickel et nickel m&eacute;tal poreux, comme suit :</em><br />
a) poudre ayant un titre en nickel &eacute;gal ou sup&eacute;rieur &agrave; 99 % et une granulom&eacute;trie moyenne inf&eacute;rieure &agrave; 10 &micro;m mesur&eacute;e conform&eacute;ment &agrave; la norme ASTM B 330; &agrave; l&rsquo;exception des poudres de nickel filamenteux;</p>
<p>NOTA :<br />
Les poudres de nickel sp&eacute;cialement pr&eacute;par&eacute;es pour la fabrication de barri&egrave;res de diffusion gazeuse sont contr&ocirc;l&eacute;es en vertu du paragraphe A.2.4.3.1.b).</p>
<p>b) nickel m&eacute;tal poreux obtenu &agrave; partir des mati&egrave;res vis&eacute;es au paragraphe a), &agrave; l&rsquo;exception des feuilles simples de nickel m&eacute;tal poreux dont la surface n&rsquo;exc&egrave;de pas 1 000 cm<sup>2</sup>.</p>
<p>NOTA :<br />
Ceci vise le m&eacute;tal poreux obtenu par compactage et frittage des mati&egrave;res vis&eacute;es au paragraphe a), qui donnent une mati&egrave;re m&eacute;tallique contenant des pores fins reli&eacute;s entre eux dans toute la structure.</p>
<p>B.1.1.16 Radium 226, compos&eacute;s du radium 226 ou m&eacute;langes, et produits ou dispositifs contenant l&rsquo;une de ces mati&egrave;res, &agrave; l&rsquo;exception des applicateurs m&eacute;dicaux et d&rsquo;un produit ou dispositif ne contenant pas plus de 0,37 GBq (10 mCi) de radium 226, sous quelque forme que ce soit.</p>
<p>B.1.1.17 Alliages de titane capables d&rsquo;une r&eacute;sistance maximale &agrave; la traction &eacute;gale ou sup&eacute;rieure &agrave; 900 MPa (0,9 &Cross; 10<sup>9</sup> N/m<sup>2</sup>) (130 500 lb/po<sup>2</sup>) &agrave; une temp&eacute;rature de 293 K (20 &deg;C) sous la forme de tubes ou de pi&egrave;ces cylindriques pleines (y compris les pi&egrave;ces forg&eacute;es) ayant un diam&egrave;tre ext&eacute;rieur sup&eacute;rieur &agrave; 75 mm (3 po).</p>
<p>NOTA :<br />
L&rsquo;expression &laquo; capables d&rsquo;une &raquo; couvre les alliages de titane avant ou apr&egrave;s traitement thermique.</p>
<p>B.1.1.18 Tungst&egrave;ne comme suit : pi&egrave;ces fabriqu&eacute;es en tungst&egrave;ne, en carbure de tungst&egrave;ne ou en alliages de tungst&egrave;ne (plus de 90 % de tungst&egrave;ne) ayant une masse sup&eacute;rieure &agrave; 20 kg et une sym&eacute;trie cylindrique creuse (y compris les segments cylindriques) d&rsquo;un diam&egrave;tre int&eacute;rieur sup&eacute;rieur &agrave; 100 mm (4 po) mais inf&eacute;rieur &agrave; 300 mm (12 po), &agrave; l&rsquo;exception des pi&egrave;ces sp&eacute;cialement con&ccedil;ues pour servir de poids ou de collimateurs &agrave; rayons gamma.</p>
<p>B.1.1.19 Zirconium ayant une teneur en hafnium inf&eacute;rieure &agrave; une partie de hafnium pour 500 parties de zirconium en poids, sous la forme de m&eacute;tal, d&rsquo;alliages contenant plus de 50 % de zirconium en poids, et de compos&eacute;s et produits fabriqu&eacute;s dans ces mati&egrave;res, &agrave; l&rsquo;exception du zirconium sous la forme de feuilles dont l&rsquo;&eacute;paisseur ne d&eacute;passe pas 0,10 mm (0,004 po).</p>
<p>NOTA :<br />
Le paragraphe B.1.1.19. s&rsquo;applique aux d&eacute;chets et aux r&eacute;sidus contenant du zirconium tel qu&rsquo;il est d&eacute;fini ci-dessus.</p>
<p>B.1.1.20 Toute substance non vis&eacute;e par le paragraphe B.1. qui est destin&eacute;e, ou pour laquelle il existe des motifs raisonnables de croire qu&rsquo;elle est destin&eacute;e, en tout ou en partie, &agrave; une utilisation li&eacute;e &agrave; la conception, &agrave; la mise au point, &agrave; la production, &agrave; la manutention, &agrave; l&rsquo;exploitation, &agrave; l&rsquo;entretien ou au stockage d&rsquo;armes nucl&eacute;aires ou d&rsquo;autres dispositifs nucl&eacute;aires explosifs.</p>
<p>B.2. &Eacute;QUIPEMENT NUCL&Eacute;AIRE CONTR&Ocirc;L&Eacute;</p>
<p>B.2.1 <em>&Eacute;quipement industriel</em></p>
<p>B.2.1.1 <em>Machines &agrave; fluorotourner et machines &agrave; repousser capables d&rsquo;effectuer des op&eacute;rations de fluorotournage, ainsi que mandrins, comme suit, et logiciel sp&eacute;cialement con&ccedil;u pour ces machines :</em><br />
a) qui poss&egrave;dent trois galets ou plus (actifs ou de guidage) et qui, conform&eacute;ment aux sp&eacute;cifications techniques du fabricant, peuvent &ecirc;tre &eacute;quip&eacute;es d&rsquo;unit&eacute;s de commande num&eacute;rique ou d&rsquo;une unit&eacute; de commande par ordinateur;<br />
b) mandrins pour former des rotors cylindriques d&rsquo;un diam&egrave;tre int&eacute;rieur compris entre 75 mm (3 po) et 400 mm (16 po).</p>
<p>NOTA :<br />
Ce paragraphe comprend les machines n&rsquo;ayant qu&rsquo;un seul galet con&ccedil;u pour d&eacute;former le m&eacute;tal plus deux galets auxiliaires qui servent de support mais qui ne participent pas directement &agrave; l&rsquo;op&eacute;ration de d&eacute;formation.</p>
<p>B.2.1.2 <em>Machines-outils et logiciel sp&eacute;cialement con&ccedil;u, comme suit :</em><br />
a) machines-outils, comme suit, et toute combinaison de celles servant &agrave; enlever ou couper des m&eacute;taux, des c&eacute;ramiques ou des mati&egrave;res composites et pouvant, conform&eacute;ment aux sp&eacute;cifications techniques du fabricant, &ecirc;tre &eacute;quip&eacute;es de dispositifs &eacute;lectroniques pour une commande de contournage simultan&eacute;e selon deux axes ou plus :<br />
(1) tours dont la pr&eacute;cision de positionnement, lorsque toutes les fonctions de compensation sont offertes, est meilleure que (inf&eacute;rieure &agrave;) 0,006 mm, conform&eacute;ment &agrave; la norme ISO 230/2 (1988), le long de tout axe lin&eacute;aire (positionnement global) pour les machines capables d&rsquo;usiner des diam&egrave;tres sup&eacute;rieurs &agrave; 35 mm;</p>
<p>NOTA :<br />
Le paragraphe B.2.1.2.a)(1) ne vise pas les tours &agrave; barre (Swissturn) qui n&rsquo;usinent les barres qu&rsquo;en enfilade si le diam&egrave;tre maximum des barres est &eacute;gal ou inf&eacute;rieur &agrave; 42 mm et s&rsquo;il n&rsquo;est pas possible de monter des mandrins. Les machines peuvent &ecirc;tre capables de percer et de fraiser des pi&egrave;ces d&rsquo;un diam&egrave;tre inf&eacute;rieur &agrave; 42 mm.<br />
(2) machines-outils &agrave; fraiser poss&eacute;dant l&rsquo;une des caract&eacute;ristiques suivantes :<br />
(i) pr&eacute;cision de positionnement, lorsque toutes les fonctions de compensation sont offertes, meilleure que (inf&eacute;rieure &agrave;) 0,006 mm, conform&eacute;ment &agrave; la norme ISO 230/2 (1988), le long de tout axe lin&eacute;aire (positionnement global);<br />
(ii) deux axes rotatifs de contournage ou plus;<br />
(iii) cinq axes ou plus pouvant &ecirc;tre coordonn&eacute;s simultan&eacute;ment pour une commande de contournage;</p>
<p>NOTA :<br />
Le paragraphe B.2.1.2.a)(2) ne vise pas les machines &agrave; fraiser ayant les caract&eacute;ristiques suivantes :<br />
a) d&eacute;placement sur l&rsquo;axe x sup&eacute;rieur &agrave; 2 m;<br />
b) pr&eacute;cision de positionnement global sur l&rsquo;axe x moins bonne que (sup&eacute;rieure &agrave;) 0,030 mm, conform&eacute;ment &agrave; la norme ISO 230/2 (1988).<br />
(3) machines-outils &agrave; rectifier poss&eacute;dant l&rsquo;une des caract&eacute;ristiques suivantes :<br />
(i) pr&eacute;cision de positionnement, lorsque toutes les fonctions de compensation sont offertes, meilleure que (inf&eacute;rieure &agrave;) 0,004 mm, conform&eacute;ment &agrave; la norme ISO 230/2 (1988), le long de tout axe lin&eacute;aire (positionnement global);<br />
(ii) deux axes rotatifs de contournage ou plus;<br />
(iii) cinq axes ou plus pouvant &ecirc;tre coordonn&eacute;s simultan&eacute;ment pour une commande de contournage;</p>
<p>NOTA :<br />
Le paragraphe B.2.1.2.a)(3) ne vise pas les machines &agrave; rectifier suivantes :<br />
a) machines &agrave; rectifier les surfaces de r&eacute;volution ext&eacute;rieures, int&eacute;rieures et ext&eacute;rieures-int&eacute;rieures, poss&eacute;dant toutes les caract&eacute;ristiques suivantes :<br />
(i) une capacit&eacute; limit&eacute;e &agrave; l&rsquo;usinage de pi&egrave;ces dont le diam&egrave;tre ext&eacute;rieur ou la longueur ne d&eacute;passe pas 150 mm;<br />
(ii) des axes limit&eacute;s &agrave; x, z et c;<br />
b) machines &agrave; rectifier en coordonn&eacute;es n&rsquo;ayant pas d&rsquo;axe z ni d&rsquo;axe w ayant une pr&eacute;cision de positionnement global meilleure que (inf&eacute;rieure &agrave;) 0,004 mm. La pr&eacute;cision du positionnement est conforme &agrave; la norme ISO 230/2 (1988).<br />
(4) machines d&rsquo;usinage par &eacute;tincelage du type sans fil ayant deux axes rotatifs de contournage ou plus pouvant &ecirc;tre coordonn&eacute;s simultan&eacute;ment pour une commande de contournage;</p>
<p>NOTA :<br />
Le paragraphe B.2.1.2.a) ne vise pas les machines-outils &agrave; usage d&eacute;termin&eacute; se limitant &agrave; la fabrication des pi&egrave;ces suivantes :<br />
a) engrenages;<br />
b) vilebrequins ou arbres &agrave; came;<br />
c) outils ou outils de coupe;<br />
d) vers d&rsquo;extrudeuse.</p>
<p>b) logiciel :<br />
(1) logiciel sp&eacute;cialement con&ccedil;u ou modifi&eacute; pour la mise au point, la production ou l&rsquo;utilisation d&rsquo;&eacute;quipements mentionn&eacute;s au paragraphe B.2.1.2.a);<br />
(2) logiciel utilis&eacute; pour toute combinaison de dispositifs &eacute;lectroniques ou pour tout syst&egrave;me permettant &agrave; ces dispositifs de fonctionner comme une unit&eacute; de commande num&eacute;rique capable de commander cinq axes &agrave; interpolation ou plus qui peuvent &ecirc;tre coordonn&eacute;s simultan&eacute;ment pour une commande de contournage.</p>
<p>NOTA : <br />
1 Le logiciel est contr&ocirc;l&eacute;, qu&rsquo;il soit export&eacute; s&eacute;par&eacute;ment ou qu&rsquo;il r&eacute;side dans une unit&eacute; de commande num&eacute;rique ou tout dispositif ou syst&egrave;me &eacute;lectronique.<br />
2 Le logiciel sp&eacute;cialement con&ccedil;u ou modifi&eacute; par les fabricants de l&rsquo;unit&eacute; de commande ou de la machine-outil pour faire fonctionner une machine-outil non soumise &agrave; un contr&ocirc;le n&rsquo;est pas contr&ocirc;l&eacute;.</p>
<p>B.2.1.3 <em>Machines, instruments ou syst&egrave;mes de contr&ocirc;le des dimensions, comme suit, et logiciel sp&eacute;cialement con&ccedil;u &agrave; cette fin :</em><br />
a) machines de contr&ocirc;le des dimensions command&eacute;es par ordinateur ou &agrave; commande num&eacute;rique et poss&eacute;dant les deux caract&eacute;ristiques suivantes :<br />
(1) deux axes ou plus;<br />
(2) incertitude de mesure unidimensionnelle de la longueur &eacute;gale &agrave; ou meilleure que (inf&eacute;rieure &agrave;) (1,25 + L/1 000) &micro;m contr&ocirc;l&eacute;e &agrave; l&rsquo;aide d&rsquo;une sonde d&rsquo;une pr&eacute;cision meilleure que (inf&eacute;rieure &agrave;) 0,2 &micro;m (L &eacute;tant la longueur mesur&eacute;e en millim&egrave;tres) (R&eacute;f. : VDI/VDE 2617, parties 1 et 2);<br />
b) instruments de mesure du d&eacute;placement lin&eacute;aire, comme suit :<br />
(1) syst&egrave;mes de mesure de type sans contact ayant une r&eacute;solution &eacute;gale &agrave; ou meilleure que (inf&eacute;rieure &agrave;) 0,2 &micro;m dans une gamme de mesures pouvant atteindre 0,2 mm;<br />
(2) syst&egrave;mes &agrave; transformateur diff&eacute;rentiel &agrave; variable lin&eacute;aire poss&eacute;dant les deux caract&eacute;ristiques suivantes :<br />
(i) lin&eacute;arit&eacute; &eacute;gale &agrave; ou meilleure que (inf&eacute;rieure &agrave;) 0,1 % dans une gamme de mesures pouvant atteindre 5 mm;<br />
(ii) d&eacute;rive &eacute;gale &agrave; ou meilleure que (inf&eacute;rieure &agrave;) 0,1 % par jour &agrave; une temp&eacute;rature de r&eacute;f&eacute;rence de la chambre d&rsquo;essai &eacute;gale &agrave; &plusmn; 1 K;<br />
(3) syst&egrave;mes de mesure poss&eacute;dant les deux caract&eacute;ristiques suivantes :<br />
(i) comporte un laser;<br />
(ii) maintient pendant au moins 12 heures avec une gamme de temp&eacute;rature variant de &plusmn; 1 K pr&egrave;s d&rsquo;une temp&eacute;rature de r&eacute;f&eacute;rence et d&rsquo;une pression de r&eacute;f&eacute;rence :<br />
(A) une r&eacute;solution sur leur d&eacute;viation totale &eacute;gale &agrave; 0,1 &micro;m ou mieux;<br />
(B) une incertitude de mesure &eacute;gale &agrave; ou meilleure que (inf&eacute;rieure &agrave;) (0,2 + L/2 000) &micro;m (L &eacute;tant la longueur mesur&eacute;e en millim&egrave;tres);</p>
<p>NOTA :<br />
Le paragraphe B.2.1.3.b)(3) ne vise pas les syst&egrave;mes de mesure &agrave; interf&eacute;rom&egrave;tre, sans r&eacute;troaction &agrave; boucle ouverte ou ferm&eacute;e, comprenant un laser pour mesurer les erreurs de mouvement des chariots des machines-outils, des machines de contr&ocirc;le des dimensions ou des &eacute;quipements similaires.<br />
c) instruments de mesure angulaire ayant une d&eacute;viation de position angulaire &eacute;gale &agrave; ou meilleure que (inf&eacute;rieure &agrave;) 0,00025&deg;</p>
<p>NOTA :<br />
Le paragraphe B.2.1.3.c) ne vise pas les instruments optiques, tels que les autocollimateurs, utilisant la collimation de la lumi&egrave;re (par exemple la lumi&egrave;re laser) pour d&eacute;tecter le d&eacute;placement angulaire d&rsquo;un miroir.<br />
d) syst&egrave;mes permettant un contr&ocirc;le simultan&eacute; lin&eacute;aire angulaire de semi-coques et poss&eacute;dant les deux caract&eacute;ristiques suivantes :<br />
(1) incertitude de mesure sur tout axe lin&eacute;aire &eacute;gale &agrave; ou meilleure que (inf&eacute;rieure &agrave;) 3,5 &micro;m/5 mm;<br />
(2) d&eacute;viation de position angulaire &eacute;gale ou inf&eacute;rieure &agrave; 0,02&deg;.</p>
<p>NOTA :<br />
Le logiciel sp&eacute;cialement con&ccedil;u pour ces syst&egrave;mes comprend le logiciel permettant une mesure simultan&eacute;e de l&rsquo;&eacute;paisseur et du contour des parois.</p>
<p>NOTA :<br />
Concernant le paragraphe B.2.1.3. :<br />
a) les machines-outils qui peuvent servir de machines de mesure sont vis&eacute;es si elles r&eacute;pondent aux crit&egrave;res d&eacute;finis pour la fonction de la machine-outil ou la fonction de la machine de mesure ou si elles les surpassent;<br />
b) les machines sont vis&eacute;es si elles d&eacute;passent le seuil de contr&ocirc;le en n&rsquo;importe quel point de leur plage de fonctionnement;<br />
c) la sonde utilis&eacute;e pour d&eacute;terminer l&rsquo;incertitude de mesure d&rsquo;un syst&egrave;me de contr&ocirc;le dimensionnel est celle d&eacute;crite dans VDI/VDE 2617, parties 2, 3 et 4;<br />
d) tous les param&egrave;tres des valeurs de mesure mentionn&eacute;s au paragraphe B.2.1.3. correspondent &agrave; la valeur &laquo; plus ou moins &raquo; non &agrave; la totalit&eacute; de la bande.</p>
<p>B.2.1.4 Fours &agrave; induction &agrave; vide ou &agrave; atmosph&egrave;re contr&ocirc;l&eacute;e (gaz inerte) capables de fonctionner &agrave; des temp&eacute;ratures sup&eacute;rieures &agrave; 850 &deg;C, poss&eacute;dant des bobines d&rsquo;induction de 600 mm (24 po) de diam&egrave;tre, ou moins, et con&ccedil;us pour des puissances absorb&eacute;es &eacute;gales ou sup&eacute;rieures &agrave; 5 kW; et alimentations &eacute;lectriques sp&eacute;cialement con&ccedil;ues pour ces fours qui ont une puissance aux bornes sp&eacute;cifi&eacute;e de 5 kW ou plus.</p>
<p>NOTA :<br />
Ce paragraphe ne comprend pas les fours con&ccedil;us pour traiter les semi-conducteurs &eacute;tag&eacute;s.</p>
<p>B.2.1.5 Presses isostatiques capables d&rsquo;atteindre une pression de r&eacute;gime maximale &eacute;gale ou sup&eacute;rieure &agrave; 69 MPa et poss&eacute;dant une chambre dont le diam&egrave;tre int&eacute;rieur de la cavit&eacute; est sup&eacute;rieur &agrave; 152 mm, et matrices, moules et commandes sp&eacute;cialement con&ccedil;us pour ces presses, ainsi que le logiciel sp&eacute;cialement con&ccedil;u pour elles.</p>
<p>NOTA :<br />
1 La dimension int&eacute;rieure de la chambre est celle de la chambre dans laquelle tant la temp&eacute;rature de r&eacute;gime que la pression de r&eacute;gime ont &eacute;t&eacute; atteintes et ne comprend pas l&rsquo;appareillage. Cette dimension sera la plus petite des dimensions soit du diam&egrave;tre int&eacute;rieur de la chambre de compression, soit du diam&egrave;tre int&eacute;rieur de la chambre isol&eacute;e du four selon celle des deux chambres qui se trouve &agrave; l&rsquo;int&eacute;rieur de l&rsquo;autre.<br />
2 <strong>Presses isostatiques</strong> &Eacute;quipements capables de pressuriser une cavit&eacute; ferm&eacute;e en recourant &agrave; divers moyens (gaz, liquide, particules solides, etc.) afin de cr&eacute;er une pression homog&egrave;ne dans toutes les directions &agrave; l&rsquo;int&eacute;rieur de la cavit&eacute; sur une pi&egrave;ce ou un mat&eacute;riau.</p>
<p>B.2.1.6 <em>Robots et effecteurs terminaux ayant l&rsquo;une des deux caract&eacute;ristiques suivantes, et logiciel sp&eacute;cialement con&ccedil;u ou organes de commande sp&eacute;cialement con&ccedil;us pour ces dispositifs :</em><br />
a) sp&eacute;cialement con&ccedil;us pour r&eacute;pondre aux normes nationales de s&eacute;curit&eacute; applicables &agrave; la manipulation d&rsquo;explosifs (par exemple r&eacute;pondant aux sp&eacute;cifications de la codification relative &agrave; l&rsquo;&eacute;lectricit&eacute; pour les explosifs);<br />
b) sp&eacute;cialement con&ccedil;us ou r&eacute;gl&eacute;s pour r&eacute;sister aux rayonnements de mani&egrave;re &agrave; supporter plus de 5 &Cross; 10<sup>4</sup> Gy (silicium) [5 &Cross; 10<sup>6</sup> rads (silicium)] sans d&eacute;gradation fonctionnelle.</p>
<p>NOTA :<br />
1 <strong>Robot</strong> M&eacute;canisme de manipulation, qui peut &ecirc;tre du type &agrave; trajectoire continue ou du type point &agrave; point, qui peut utiliser des capteurs et poss&egrave;de toutes les caract&eacute;ristiques suivantes :<br />
a) est multifonctionnel;<br />
b) est capable de positionner ou d&rsquo;orienter des mati&egrave;res, des pi&egrave;ces, des outils ou des dispositifs sp&eacute;ciaux grÃ¢ce &agrave; des mouvements variables en trois dimensions;<br />
c) comprend trois servom&eacute;canismes ou plus &agrave; boucle ouverte ou ferm&eacute;e, qui peuvent comprendre des moteurs pas &agrave; pas;<br />
d) poss&egrave;de une programmabilit&eacute; accessible &agrave; l&rsquo;usager au moyen d&rsquo;une m&eacute;thode instruction/reproduction, ou au moyen d&rsquo;un ordinateur qui peut &ecirc;tre contr&ocirc;l&eacute; par logique programmable, c&rsquo;est-&agrave;-dire sans intervention m&eacute;canique.</p>
<p>La d&eacute;finition ci-dessus ne comprend pas les dispositifs suivants :<br />
a) les m&eacute;canismes de manipulation qui ne peuvent &ecirc;tre command&eacute;s qu&rsquo;&agrave; la main ou par dispositif de commande &agrave; distance;<br />
b) les m&eacute;canismes de manipulation &agrave; s&eacute;quence fixe qui sont des dispositifs &agrave; d&eacute;placement automatique fonctionnant selon des mouvements programm&eacute;s fixes m&eacute;caniquement. Le programme est limit&eacute; m&eacute;caniquement par des arr&ecirc;ts fixes, tels que boulons d&rsquo;arr&ecirc;t ou cames de but&eacute;es. La s&eacute;quence des mouvements et la s&eacute;lection des trajectoires ou des angles ne sont pas variables ou modifiables au moyen de dispositifs m&eacute;caniques, &eacute;lectroniques ou &eacute;lectriques;<br />
c) les m&eacute;canismes de manipulation &agrave; s&eacute;quence variable programm&eacute;e m&eacute;caniquement qui sont des dispositifs &agrave; mouvements automatiques fonctionnant selon des mouvements programm&eacute;s fix&eacute;s m&eacute;caniquement. Le programme est limit&eacute; m&eacute;caniquement par des arr&ecirc;ts fixes mais r&eacute;glables, tels que boulons d&rsquo;arr&ecirc;t ou cames de but&eacute;es. La s&eacute;quence des mouvements et la s&eacute;lection des trajectoires ou des angles sont des variables du sch&eacute;ma du programme fixe. Les variations ou les modifications du sch&eacute;ma du programme (p. ex. les changements de but&eacute;es ou les &eacute;changes de cames) dans un ou plusieurs axes de d&eacute;placement sont accomplis uniquement au moyen d&rsquo;op&eacute;rations m&eacute;caniques;<br />
d) les m&eacute;canismes de manipulation &agrave; s&eacute;quence variable sans servocommandes, qui sont des dispositifs &agrave; mouvements automatiques, fonctionnant selon des mouvements programm&eacute;s fix&eacute;s m&eacute;caniquement. Le programme est variable mais la s&eacute;quence se d&eacute;roule uniquement &agrave; partir d&rsquo;un signal binaire &eacute;mis par des dispositifs binaires &eacute;lectriques fix&eacute;s m&eacute;caniquement ou des arr&ecirc;ts r&eacute;glables;<br />
e) les grues d&rsquo;empilage d&eacute;finies comme &eacute;tant des syst&egrave;mes de manutention &agrave; coordonn&eacute;es cart&eacute;siennes, fabriqu&eacute;es comme partie int&eacute;grante d&rsquo;un syst&egrave;me vertical de r&eacute;cipients d&rsquo;entreposage et con&ccedil;ues pour permettre l&rsquo;acc&egrave;s au contenu de ces r&eacute;cipients &agrave; des fins de stockage ou de r&eacute;cup&eacute;ration.</p>
<p>2 <strong>Effecteurs terminaux</strong> Les effecteurs terminaux comprennent les pr&eacute;henseurs, les unit&eacute;s d&rsquo;outillage actives, et tout autre outillage raccord&eacute; &agrave; la plaque situ&eacute;e &agrave; l&rsquo;extr&eacute;mit&eacute; du bras de manipulation d&rsquo;un robot.<br />
3 La d&eacute;finition au paragraphe 1a) ne vise pas les robots sp&eacute;cialement con&ccedil;us pour des applications industrielles non nucl&eacute;aires, telles que les cabines de pulv&eacute;risation de peinture dans l&rsquo;industrie automobile</p>
<p>B.2.1.7 <em>Syst&egrave;mes d&rsquo;essai aux vibrations et &eacute;quipements, composants et logiciels pour ces syst&egrave;mes, comme suit :</em><br />
a) syst&egrave;mes d&rsquo;essai aux vibrations &eacute;lectrodynamiques, faisant appel &agrave; des techniques de r&eacute;troaction ou de servocommande &agrave; boucle ferm&eacute;e et comprenant un organe de commande num&eacute;rique, capables de faire vibrer &agrave; 10 g de valeur efficace (moyenne quadratique) ou plus entre 20 Hz et 2 000 Hz et transmettant des forces &eacute;gales ou sup&eacute;rieures &agrave; 50 kN (11 250 lb) mesur&eacute;es table nue;<br />
b) organes de commande num&eacute;riques, associ&eacute;s au logiciel sp&eacute;cialement con&ccedil;u pour les essais aux vibrations, avec une bande passante en temps r&eacute;el sup&eacute;rieure &agrave; 5 kHz et con&ccedil;us pour &ecirc;tre utilis&eacute;s avec les syst&egrave;mes mentionn&eacute;s au paragraphe a);<br />
c) g&eacute;n&eacute;rateurs de vibrations (secoueurs), avec ou sans amplificateurs associ&eacute;s, capables de transmettre une force &eacute;gale ou sup&eacute;rieure &agrave; 50 kN (11 250 lb), mesur&eacute;e table nue, qui peuvent &ecirc;tre utilis&eacute;s pour les syst&egrave;mes mentionn&eacute;s au paragraphe a);<br />
d) structures de support des pi&egrave;ces d&rsquo;essai et dispositifs &eacute;lectroniques con&ccedil;us pour associer des secoueurs multiples afin de constituer un syst&egrave;me de secouage complet capable d&rsquo;impartir une force combin&eacute;e efficace &eacute;gale ou sup&eacute;rieure &agrave; 50 kN, mesur&eacute;e table nue, qui peuvent &ecirc;tre utilis&eacute;s pour les syst&egrave;mes mentionn&eacute;s au paragraphe a);<br />
e) logiciel sp&eacute;cialement con&ccedil;u pour &ecirc;tre utilis&eacute; avec les syst&egrave;mes mentionn&eacute;s au paragraphe a) ou pour les dispositifs &eacute;lectroniques mentionn&eacute;s au paragraphe d).</p>
<p>B.2.1.8 <em>Fours de fusion et de coul&eacute;e &agrave; vide et &agrave; atmosph&egrave;re contr&ocirc;l&eacute;e pour m&eacute;tallurgie comme suit, ainsi que les syst&egrave;mes de commande et de contr&ocirc;le par ordinateur sp&eacute;cialement mis au point et le logiciel sp&eacute;cialement con&ccedil;u &agrave; cette fin :</em><br />
a) fours de coul&eacute;e et de refusion &agrave; arc dont la capacit&eacute; des &eacute;lectrodes consommables est comprise entre 1 000 cm<sup>3</sup> et 20 000 cm<sup>3</sup>, et capables de fonctionner &agrave; des temp&eacute;ratures de fusion sup&eacute;rieures &agrave; 1 700 &deg;C;<br />
b) fours de fusion &agrave; faisceaux d&rsquo;&eacute;lectrons et fours &agrave; atomisation et &agrave; fusion &agrave; plasma ayant une puissance &eacute;gale ou sup&eacute;rieure &agrave; 50 kW et capables de fonctionner &agrave; des temp&eacute;ratures de fusion sup&eacute;rieures &agrave; 1 200 &deg;C.</p>
B.2.2 <em>&Eacute;quipements de s&eacute;paration isotopique pour l&rsquo;uranium et composants (autres que les articles &eacute;num&eacute;r&eacute;s au paragraphe A.2.4.)</em></p>
<p>B.2.2.1 <em>Cellules &eacute;lectrolytiques pour la production de fluor ayant une capacit&eacute; de production sup&eacute;rieure &agrave; 250 g de fluor par heure.</em></p>
<p>B.2.2.2 <em>&Eacute;quipements de fabrication et d&rsquo;assemblage de rotors et mandrins et matrices pour la formation de soufflets, comme suit :</em><br />
a) &eacute;quipement d&rsquo;assemblage de rotors pour l&rsquo;assemblage de sections, chicanes et bouchons de tubes de rotors de centrifugeuses &agrave; gaz. Ledit &eacute;quipement comprend les mandrins de pr&eacute;cision, les dispositifs de fixation et les machines d&rsquo;ajustement frett&eacute;;<br />
b) &eacute;quipement &agrave; dresser pour rotors en vue de l&rsquo;alignement des sections de tubes de rotors de centrifugeuses &agrave; gaz par rapport &agrave; un axe commun;<br />
c) mandrins et matrices pour la production de soufflets &agrave; circonvolution unique (soufflets fabriqu&eacute;s en alliages d&rsquo;aluminium &agrave; r&eacute;sistance &eacute;lev&eacute;e, en acier maraging ou en mati&egrave;res filamenteuses ayant une r&eacute;sistance &eacute;lev&eacute;e). Les soufflets ont l&rsquo;ensemble des dimensions suivantes :<br />
(1) diam&egrave;tre int&eacute;rieur de 75 mm &agrave; 400 mm (3 po &agrave; 16 po);<br />
(2) longueur &eacute;gale ou sup&eacute;rieure &agrave; 12,7 mm (0,5 po);<br />
(3) circonvolution unique ayant une profondeur sup&eacute;rieure &agrave; 2 mm (0,08 po).</p>
<p>B.2.2.3 <em>Machines centrifuges &agrave; v&eacute;rifier l&rsquo;&eacute;quilibrage multiplans, fixes ou d&eacute;pla&ccedil;ables, horizontales ou verticales, comme suit :</em><br />
a) machines centrifuges &agrave; v&eacute;rifier l&rsquo;&eacute;quilibrage, con&ccedil;ues pour &eacute;quilibrer des rotors flexibles d&rsquo;une longueur &eacute;gale ou sup&eacute;rieure &agrave; 600 mm et poss&eacute;dant toutes les caract&eacute;ristiques suivantes :<br />
(1) diam&egrave;tre utile ou diam&egrave;tre de tourillon &eacute;gal ou sup&eacute;rieur &agrave; 75 mm;<br />
(2) masse capable de varier entre 0,9 kg et 23 kg (2 lb et 50 lb);<br />
(3) vitesse de r&eacute;volution d&rsquo;&eacute;quilibrage pouvant atteindre plus de 5 000 tr/min;<br />
b) machines centrifuges &agrave; v&eacute;rifier l&rsquo;&eacute;quilibrage con&ccedil;ues pour &eacute;quilibrer les composants cylindriques creux de rotors et pr&eacute;sentant toutes les caract&eacute;ristiques suivantes :<br />
(1) diam&egrave;tre de tourillon &eacute;gal ou sup&eacute;rieur &agrave; 75 mm;<br />
(2) masse capable de varier entre 0,9 kg et 23 kg (2 lb et 50 lb);<br />
(3) capacit&eacute; d&rsquo;&eacute;quilibrer jusqu&rsquo;&agrave; un d&eacute;s&eacute;quilibre r&eacute;siduel de 0,010 kg mm/kg par plan, ou mieux;<br />
(4) &ecirc;tre du type actionn&eacute; par courroie;<br />  et le logiciel sp&eacute;cialement con&ccedil;u &agrave; cette fin.</p>
<p>B.2.2.4 Machines &agrave; enrouler les filaments dans lesquelles les mouvements de positionnement, d&rsquo;enveloppement et d&rsquo;enroulement des fibres sont coordonn&eacute;s et programm&eacute;s en deux axes ou plus, sp&eacute;cialement con&ccedil;ues pour fabriquer des structures ou des feuilles composites avec des mati&egrave;res fibreuses et filamenteuses, et capables d&rsquo;enrouler des rotors cylindriques d&rsquo;un diam&egrave;tre de 75 mm (3 po) &agrave; 400 mm (16 po) et d&rsquo;une longueur &eacute;gale ou sup&eacute;rieure &agrave; 600 mm (24 po); commandes de coordination et de programmation &agrave; cette fin; mandrins de pr&eacute;cision et logiciel sp&eacute;cialement con&ccedil;u &agrave; cette fin.</p>
<p>B.2.2.5 <em>Changeurs de fr&eacute;quence (&eacute;galement connus sous le nom de convertisseurs ou d&rsquo;inverseurs de fr&eacute;quence) ou g&eacute;n&eacute;rateurs pr&eacute;sentant toutes les caract&eacute;ristiques suivantes :</em><br />
a) sortie multiphase capable de fournir une puissance &eacute;gale ou sup&eacute;rieure &agrave; 40 W;<br />
b) capacit&eacute; de fonctionner dans le r&eacute;gime des fr&eacute;quences compris entre 600 Hz et 2 000 Hz;<br />
c) distorsion harmonique totale meilleure que (inf&eacute;rieure &agrave;) 10 %;<br />
d) contr&ocirc;le des fr&eacute;quences meilleur que (inf&eacute;rieur &agrave;) 0,1 %.</p>
<p>NOTA :<br />
Les changeurs de fr&eacute;quence et g&eacute;n&eacute;rateurs sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s pour le proc&eacute;d&eacute; utilisant des centrifugeuses &agrave; gaz sont vis&eacute;s par le paragraphe A.2.4.2.5.</p>
<p>B.2.2.6 <em>Lasers, amplificateurs lasers et oscillateurs comme suit :</em><br />
a) lasers &agrave; vapeur de cuivre poss&eacute;dant une puissance de sortie moyenne &eacute;gale ou sup&eacute;rieure &agrave; 40 W, fonctionnant sur des longueurs d&rsquo;onde comprises entre 500 nm et 600 nm;<br />
b) lasers &agrave; argon ionis&eacute; poss&eacute;dant une puissance de sortie moyenne sup&eacute;rieure &agrave; 40 W, fonctionnant sur des longueurs d&rsquo;onde comprises entre 400 nm et 515 nm;<br />
c) lasers dop&eacute;s au n&eacute;odyme (autres que les lasers &agrave; verre dop&eacute;) ayant une longueur d&rsquo;onde de sortie comprise entre 1 000 nm et 1 100 nm et poss&eacute;dant l&rsquo;une des deux caract&eacute;ristiques suivantes :<br />
(1) excitation par impulsions et &agrave; modulation du facteur Q, avec une dur&eacute;e d&rsquo;impulsion &eacute;gale ou sup&eacute;rieure &agrave; 1 ns, poss&eacute;dant l&rsquo;une des deux caract&eacute;ristiques suivantes :<br />
(i) fonctionnement monomode transverse avec une puissance moyenne de sortie sup&eacute;rieure &agrave; 40 W;<br />
(ii) fonctionnement multimode transverse avec une puissance moyenne de sortie sup&eacute;rieure &agrave; 50 W;<br />
(2) doubleur de fr&eacute;quence permettant de produire une longueur d&rsquo;onde de sortie comprise entre 500 nm et 550 nm avec une puissance moyenne &agrave; la fr&eacute;quence double (nouvelle longueur d&rsquo;onde) sup&eacute;rieure &agrave; 40 W;<br />
d) oscillateurs lasers &agrave; colorants accordables fonctionnant en mode puls&eacute; unique poss&eacute;dant toutes les caract&eacute;ristiques suivantes :<br />
(1) fonctionnement sur des longueurs d&rsquo;onde comprises entre 300 nm et 800 nm;<br />
(2) puissance moyenne de sortie sup&eacute;rieure &agrave; 1 W;<br />
(3) fr&eacute;quence de r&eacute;currence sup&eacute;rieure &agrave; 1 kHz;<br />
(4) dur&eacute;e d&rsquo;impulsion inf&eacute;rieure &agrave; 100 ns;<br />
e) amplificateurs lasers et oscillateurs &agrave; colorants accordables fonctionnant en mode puls&eacute;, &agrave; l&rsquo;exception des oscillateurs fonctionnant en mode unique, et poss&eacute;dant toutes les caract&eacute;ristiques suivantes :<br />
(1) fonctionnement sur des longueurs d&rsquo;onde comprises entre 300 nm et 800 nm;<br />
(2) puissance moyenne de sortie sup&eacute;rieure &agrave; 30 W;<br />
(3) fr&eacute;quence de r&eacute;currence sup&eacute;rieure &agrave; 1 kHz;<br />
(4) dur&eacute;e d&rsquo;impulsion inf&eacute;rieure &agrave; 100 ns;<br />
f) lasers &agrave; alexandrite poss&eacute;dant toutes les caract&eacute;ristiques suivantes :<br />
(1) fonctionnement sur des longueurs d&rsquo;onde comprises entre 720 nm et 800 nm;<br />
(2) puissance moyenne de sortie sup&eacute;rieure &agrave; 30 W;<br />
(3) fr&eacute;quence de r&eacute;currence sup&eacute;rieure &agrave; 125 Hz;<br />
(4) largeur de bande &eacute;gale ou inf&eacute;rieure &agrave; 0,005 nm;<br />
g) lasers &agrave; dioxyde de carbone en mode puls&eacute; poss&eacute;dant toutes les caract&eacute;ristiques suivantes :<br />
(1) fonctionnement sur des longueurs d&rsquo;onde comprises entre 9 000 nm et 11 000 nm;<br />
(2) puissance moyenne de sortie sup&eacute;rieure &agrave; 500 W;<br />
(3) fr&eacute;quence de r&eacute;currence sup&eacute;rieure &agrave; 250 Hz;<br />
(4) dur&eacute;e d&rsquo;impulsion inf&eacute;rieure &agrave; 200 ns;</p>
<p>NOTA :<br />
Le paragraphe B.2.2.6.g) ne vise pas les lasers industriels &agrave; dioxyde de carbone de puissance plus &eacute;lev&eacute;e (typiquement de 1 &agrave; 5 kW) utilis&eacute;s dans les applications telles que la d&eacute;coupe et le soudage puisque ces lasers fonctionnent soit en mode continu soit en mode puls&eacute; avec une dur&eacute;e d&rsquo;impulsion sup&eacute;rieure &agrave; 200 ns.<br />
h) lasers excim&egrave;res en mode puls&eacute; (XeF, XeCI, KrF) poss&eacute;dant toutes les caract&eacute;ristiques suivantes :<br />   (1) fonctionnement sur des longueurs d&rsquo;onde comprises entre 240 nm et 360 nm;<br />   (2) puissance moyenne de sortie sup&eacute;rieure &agrave; 500 W;<br />   (3) fr&eacute;quence de r&eacute;currence sup&eacute;rieure &agrave; 250 Hz;<br />
i) appareils de d&eacute;placement Raman &agrave; parahydrog&egrave;ne con&ccedil;us pour fonctionner sur une longueur d&rsquo;onde de sortie de 16 &micro;m avec une fr&eacute;quence de r&eacute;currence sup&eacute;rieure &agrave; 250 Hz.</p>
<p>B.2.2.7 <em>Spectrom&egrave;tres de masse capables de mesurer des ions d&rsquo;unit&eacute;s de masse atomique &eacute;gales ou sup&eacute;rieures &agrave; 230 uma avec une r&eacute;solution meilleure que 2 parties par 230, ainsi que des sources d&rsquo;ions &agrave; cette fin, comme suit :</em><br />
a) spectrom&egrave;tres de masse &agrave; plasma &agrave; couplage inductif (SM/PCI);<br />
b) spectrom&egrave;tres de masse &agrave; d&eacute;charge luminescente (SMDL);<br />
c) spectrom&egrave;tres de masse &agrave; ionisation thermique (SMIT);<br />
d) spectrom&egrave;tres de masse &agrave; bombardement d&rsquo;&eacute;lectrons ayant une chambre de source constitu&eacute;e, rev&ecirc;tue ou recouverte de plaques de mat&eacute;riaux r&eacute;sistant &agrave; l&rsquo;UF<sub>6</sub>;<br />
e) spectrom&egrave;tres de masse &agrave; faisceau mol&eacute;culaire comme suit :<br />
(1) ayant une chambre de source constitu&eacute;e, rev&ecirc;tue ou recouverte de plaques en acier inoxydable ou en molybd&egrave;ne et ayant un pi&egrave;ge &agrave; froid capable de refroidir jusqu&rsquo;&agrave; 193 K (-80 &deg;C) ou moins;<br />
(2) ayant une chambre de source constitu&eacute;e, rev&ecirc;tue ou recouverte de plaques en mat&eacute;riaux r&eacute;sistant &agrave; l&rsquo;UF<sub>6</sub>;<br />
f) spectrom&egrave;tres de masse &eacute;quip&eacute;s d&rsquo;une source ionique &agrave; microfluoration con&ccedil;us pour &ecirc;tre utilis&eacute;s avec des actinides ou des fluorures actinides; sauf les spectrom&egrave;tres de masse magn&eacute;tiques ou quadripolaires sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s capables de pr&eacute;lever en direct sur les flux d&rsquo;UF<sub>6</sub> gazeux des &eacute;chantillons de gaz d&rsquo;entr&eacute;e, de produit ou de r&eacute;sidus, et poss&eacute;dant toutes les caract&eacute;ristiques suivantes :<br />
(1) pouvoir de r&eacute;solution unitaire pour l&rsquo;unit&eacute; de masse sup&eacute;rieur &agrave; 320;<br />
(2) sources d&rsquo;ions constitu&eacute;es ou rev&ecirc;tues de nichrome ou de monel ou nickel&eacute;es;<br />
(3) sources d&rsquo;ionisation par bombardement d&rsquo;&eacute;lectrons;<br />
(4) pr&eacute;sence d&rsquo;un collecteur adapt&eacute; &agrave; l&rsquo;analyse isotopique.</p>
<p>B.2.2.8 <em>Transducteurs de pression capables de mesurer la pression absolue en tout point de l&rsquo;intervalle 0-13 kPa, &eacute;quip&eacute;s de capteurs de pression constitu&eacute;s ou prot&eacute;g&eacute;s par du nickel, des alliages de nickel contenant plus de 60 % de nickel en poids, d&rsquo;aluminium ou d&rsquo;alliages d&rsquo;aluminium, comme suit :</em><br />
a) transducteurs ayant une d&eacute;viation totale inf&eacute;rieure &agrave; 13 kPa et une pr&eacute;cision sup&eacute;rieure &agrave; &plusmn; 1 % de la d&eacute;viation totale;<br />
b) transducteurs ayant une d&eacute;viation totale &eacute;gale ou sup&eacute;rieure &agrave; 13 kPa et une pr&eacute;cision sup&eacute;rieure &agrave; &plusmn; 130 Pa.</p>
<p>NOTA :<br />
1 Les transducteurs de pression sont des dispositifs qui convertissent les mesures de pression en un signal &eacute;lectrique.<br />
2 Aux fins du pr&eacute;sent paragraphe, la pr&eacute;cision englobe la non-lin&eacute;arit&eacute;, l&rsquo;hyst&eacute;r&eacute;sis et la r&eacute;p&eacute;tabilit&eacute; &agrave; la temp&eacute;rature ambiante.</p>
<p>B.2.2.9 Vannes &agrave; soufflet d&rsquo;une dimension nominale &eacute;gale ou sup&eacute;rieure &agrave; 5 mm (0,2 po), enti&egrave;rement constitu&eacute;es ou rev&ecirc;tues d&rsquo;aluminium, d&rsquo;alliages d&rsquo;aluminium, de nickel ou d&rsquo;un alliage contenant 60 % ou plus de nickel, &agrave; fonctionnement manuel ou automatique.</p>
<p>NOTA :<br />
Dans le cas des vannes ayant des diam&egrave;tres d&rsquo;entr&eacute;e et de sortie diff&eacute;rents, le param&egrave;tre &laquo; dimension nominale &raquo; ci-dessus renvoie au diam&egrave;tre le plus petit.</p>
<p>B.2.2.10 <em>&Eacute;lectro-aimants sol&eacute;no&iuml;daux supraconducteurs poss&eacute;dant toutes les caract&eacute;ristiques suivantes :</em><br />
a) capables de cr&eacute;er des champs magn&eacute;tiques de plus de 2 T (20 kilogauss);<br />
b) avec un rapport L/D (longueur divis&eacute;e par le diam&egrave;tre int&eacute;rieur) sup&eacute;rieur &agrave; 2;<br />
c) avec un diam&egrave;tre int&eacute;rieur sup&eacute;rieur &agrave; 300 mm;<br />
d) avec un champ magn&eacute;tique uniforme (mieux que 1 %) sur les 50 % centraux du volume int&eacute;rieur.</p>
<p>NOTA :<br />
Le paragraphe B.2.2.10. ne comprend pas les aimants sp&eacute;cialement con&ccedil;us et export&eacute;s comme parties de syst&egrave;mes m&eacute;dicaux d&rsquo;imagerie &agrave; r&eacute;sonance magn&eacute;tique nucl&eacute;aire (RMN). Il est entendu que les termes &laquo; comme parties de &raquo; ne signifient pas n&eacute;cessairement faisant mat&eacute;riellement partie du m&ecirc;me envoi. Des envois s&eacute;par&eacute;s provenant de sources diff&eacute;rentes sont autoris&eacute;s &agrave; condition que les documents d&rsquo;exportation s&rsquo;y rapportant pr&eacute;cisent clairement le rapport &laquo; partie de &raquo;.</p>
<p>B.2.2.11 Pompes &agrave; vide avec un col d&rsquo;entr&eacute;e de 38 cm (15 po) ou plus, une capacit&eacute; de pompage &eacute;gale ou sup&eacute;rieure &agrave; 15 000 L/s et capables de produire un vide final meilleur que 104 torrs (1,33 &Cross; 10<sup>-4</sup> mbars).</p>
<p>NOTA :<br />
1 Le vide final est d&eacute;termin&eacute; &agrave; l&rsquo;entr&eacute;e de la pompe, l&rsquo;entr&eacute;e de la pompe &eacute;tant ferm&eacute;e.<br />
2 La capacit&eacute; de pompage est d&eacute;termin&eacute;e au point de mesure avec de l&rsquo;azote ou de l&rsquo;air.</p>
<p>B.2.2.12 Alimentations en courant fort continu capables de produire en permanence, pendant une p&eacute;riode de 8 heures, 100 V ou plus, avec une intensit&eacute; de courant &eacute;gale ou sup&eacute;rieure &agrave; 500 amp&egrave;res et une r&eacute;gulation du courant ou de la tension meilleure que 0,1 %.</p>
<p>B.2.2.13 Alimentations en courant continu haute tension capables de produire en permanence, pendant une p&eacute;riode de 8 heures, 20 000 V ou plus, avec une intensit&eacute; de courant &eacute;gale ou sup&eacute;rieure &agrave; 1 amp&egrave;re et une r&eacute;gulation du courant ou de la tension meilleure que 0,1 %.<br />
<p>B.2.2.14 S&eacute;parateurs isotopiques &eacute;lectromagn&eacute;tiques con&ccedil;us pour ou munis de sources d&rsquo;ions uniques ou multiples capables de fournir un flux ionique total &eacute;gal ou sup&eacute;rieur &agrave; 50 mA.</p>
<p>NOTA :<br />
1 Le pr&eacute;sent paragraphe comprend les s&eacute;parateurs capables d&rsquo;enrichir les isotopes stables ainsi que ceux utilis&eacute;s pour l&rsquo;uranium. Un s&eacute;parateur capable de s&eacute;parer les isotopes de plomb avec une diff&eacute;rence d&rsquo;une unit&eacute; de masse est intrins&egrave;quement capable d&rsquo;enrichir les isotopes d&rsquo;uranium avec une diff&eacute;rence de masse de trois unit&eacute;s.<br />
2 Le pr&eacute;sent paragraphe comprend les s&eacute;parateurs dont les sources et collecteurs d&rsquo;ions se trouvent tous deux dans le champ magn&eacute;tique, ainsi que les configurations dans lesquelles ils sont hors du champ.<br />
3 Une source unique d&rsquo;ions de 50 mA produira moins de 3 g d&rsquo;uranium hautement enrichi s&eacute;par&eacute; par an &agrave; partir d&rsquo;uranium naturel.</p>
<p>B.2.3 <em>&Eacute;quipements li&eacute;s aux installations de production d&rsquo;eau lourde (autres que les articles &eacute;num&eacute;r&eacute;s au paragraphe A.2.5.).</em></p>
<p>B.2.3.1 Charges sp&eacute;ciales &agrave; utiliser lors de la s&eacute;paration de l&rsquo;eau lourde de l&rsquo;eau ordinaire et constitu&eacute;es d&rsquo;un tamis en bronze phosphoreux (trait&eacute; chimiquement de mani&egrave;re &agrave; am&eacute;liorer sa mouillabilit&eacute;) et con&ccedil;ues pour &ecirc;tre utilis&eacute;es dans des colonnes de distillation &agrave; vide.</p>
<p>B.2.3.2 <em>Pompes faisant circuler des solutions d&rsquo;un catalyseur amide de potassium dilu&eacute; ou concentr&eacute; dans de l&rsquo;ammoniac liquide (KNH<sub>2</sub>/NH<sub>3</sub>) et poss&eacute;dant l&rsquo;ensemble des caract&eacute;ristiques suivantes :</em><br />
a) &eacute;tanch&eacute;it&eacute; totale &agrave; l&rsquo;air (c&rsquo;est-&agrave;-dire herm&eacute;tiquement scell&eacute;es);<br />
b) pour les solutions amides de potassium concentr&eacute;es (1 % ou plus), pression de r&eacute;gime de 1,5 MPa &agrave; 60 MPa [15 &agrave; 600 atmosph&egrave;res]; pour les solutions amides de potassium dilu&eacute;es (moins de 1 %), pression de r&eacute;gime de 20 MPa &agrave; 60 MPa (200 &agrave; 600 atmosph&egrave;res);<br />
c) capacit&eacute; sup&eacute;rieure &agrave; 8,5 m3/h (5 pi<sup>3</sup>/min).</p>
<p>B.2.3.3 Colonnes d&rsquo;&eacute;change &agrave; plateaux eau-acide sulfhydrique fabriqu&eacute;es en acier fin au carbone d&rsquo;un diam&egrave;tre &eacute;gal ou sup&eacute;rieur &agrave; 1,8 m, pouvant fonctionner &agrave; une pression nominale &eacute;gale ou sup&eacute;rieure &agrave; 2 MPa (300 lb/po<sup>2</sup>), et contacteurs internes pour ces colonnes.</p>
<p>NOTA :<br />
1 Les contacteurs internes des colonnes sont des plateaux segment&eacute;s ayant un diam&egrave;tre assembl&eacute; effectif &eacute;gal ou sup&eacute;rieur &agrave; 1,8 m, sont con&ccedil;us pour faciliter le contact &agrave; contre-courant et sont fabriqu&eacute;s en mat&eacute;riaux r&eacute;sistant &agrave; l&rsquo;action corrosive de m&eacute;langes eau/acide sulfhydrique. Il peut s&rsquo;agir de plateaux perfor&eacute;s, de plateaux &agrave; soupapes, de plateaux &agrave; cloches ou de plateaux &agrave; grille.<br />
2 Dans ce paragraphe, on entend par <strong>acier fin au carbone</strong> un acier dont l&rsquo;aust&eacute;nite a un num&eacute;ro granulom&eacute;trique ASTM (ou norme &eacute;quivalente) &eacute;gal ou sup&eacute;rieur &agrave; 5.<br />
3 Dans ce paragraphe, on entend par <strong>mat&eacute;riaux r&eacute;sistant &agrave; l&rsquo;action corrosive de m&eacute;langes eau/acide sulfhydrique</strong> un acier inoxydable dont la teneur en carbone est &eacute;gale ou inf&eacute;rieure &agrave; 0,03 %.</p>
<p>B.2.3.4 <em>Colonnes de distillation cryog&eacute;nique &agrave; hydrog&egrave;ne poss&eacute;dant toutes les propri&eacute;t&eacute;s suivantes :</em><br />
a) con&ccedil;ues pour fonctionner &agrave; des temp&eacute;ratures int&eacute;rieures de -238 &deg;C (35 K) ou moins;<br />
b) con&ccedil;ues pour fonctionner &agrave; une pression int&eacute;rieure de 0,5 MPa &agrave; 5 MPa (5 &agrave; 50 atmosph&egrave;res);<br />
c) fabriqu&eacute;es en aciers inoxydables &agrave; grain fin appartenant &agrave; la s&eacute;rie 300 avec une faible teneur en soufre, ou des mat&eacute;riaux &eacute;quivalents cryog&eacute;niques et compatibles avec H<sub>2</sub>;<br />
d) avec un diam&egrave;tre int&eacute;rieur &eacute;gal ou sup&eacute;rieur &agrave; 1 m et une longueur effective &eacute;gale ou sup&eacute;rieure &agrave; 5 m.</p>
<p>NOTA :<br />
Dans le pr&eacute;sent paragraphe, on entend par <strong>aciers inoxydables &agrave; grain fin</strong> des aciers aust&eacute;nitiques inoxydables ayant un num&eacute;ro granulom&eacute;trique ASTM (ou norme &eacute;quivalente) &eacute;gal ou sup&eacute;rieur &agrave; 5.</p>
<p>B.2.3.5 Convertisseurs ou unit&eacute;s &agrave; synth&eacute;tiser l&rsquo;ammoniac dans lesquels le gaz de synth&egrave;se (azote et hydrog&egrave;ne) est enlev&eacute; d&rsquo;une colonne d&rsquo;&eacute;change ammoniac/hydrog&egrave;ne &agrave; haute pression et l&rsquo;ammoniac synth&eacute;tique est renvoy&eacute; &agrave; la colonne en question.</p>
<p>B.2.3.6 Turbod&eacute;tendeurs ou ensembles turbod&eacute;tendeur-compresseur con&ccedil;us pour fonctionner au-dessous de 35 K et pour un d&eacute;bit d&rsquo;hydrog&egrave;ne &eacute;gal ou sup&eacute;rieur &agrave; 1 000 kg/h.</p>
<p>B.2.4 <em>&Eacute;quipements de d&eacute;veloppement de syst&egrave;mes d&rsquo;implosion</em></p>
<p>B.2.4.1 <em>G&eacute;n&eacute;rateurs de radiographie &eacute;clair ou acc&eacute;l&eacute;rateurs puls&eacute;s d&rsquo;&eacute;lectrons ayant une &eacute;nergie maximale &eacute;gale ou sup&eacute;rieure &agrave; 500 keV comme suit, &agrave; l&rsquo;exception des acc&eacute;l&eacute;rateurs qui sont des composants de dispositifs destin&eacute;s &agrave; d&rsquo;autres fins que le rayonnement de faisceaux d&rsquo;&eacute;lectrons ou de rayons X (pour la microscopie &eacute;lectronique par exemple) et ceux con&ccedil;us &agrave; des fins m&eacute;dicales :</em><br />
a) ayant une &eacute;nergie &eacute;lectronique de pointe de l&rsquo;acc&eacute;l&eacute;rateur &eacute;gale ou sup&eacute;rieure &agrave; 500 keV mais inf&eacute;rieure &agrave; 25 MeV et un facteur de m&eacute;rite (K) &eacute;gal ou sup&eacute;rieur &agrave; 0,25, K &eacute;tant d&eacute;fini comme suit :</p>
<p className="text-center"><strong>K = 1.7 x 103V2,65Q;</strong></p>
<p>o&ugrave; V est l&rsquo;&eacute;nergie &eacute;lectronique de pointe en millions d&rsquo;&eacute;lectronvolts et Q est la charge totale acc&eacute;l&eacute;r&eacute;e en coulombs lorsque la dur&eacute;e d&rsquo;impulsion du faisceau d&rsquo;acc&eacute;l&eacute;ration est inf&eacute;rieure ou &eacute;gale &agrave; 1 &micro;s; lorsque la dur&eacute;e d&rsquo;impulsion du faisceau d&rsquo;acc&eacute;l&eacute;ration est sup&eacute;rieure &agrave; 1 &micro;s, Q est la charge maximale acc&eacute;l&eacute;r&eacute;e en 1 &micro;s, [Q est &eacute;gale &agrave; l&rsquo;int&eacute;grale de i par rapport &agrave; t, divis&eacute;e par 1 &micro;s ou la dur&eacute;e de l&rsquo;impulsion du faisceau, selon la valeur la moins &eacute;lev&eacute;e (Q =Æidt), i &eacute;tant le courant du faisceau en amp&egrave;res et t le temps en secondes];<br />
b) ayant une &eacute;nergie &eacute;lectronique de pointe de l&rsquo;acc&eacute;l&eacute;rateur &eacute;gale ou sup&eacute;rieure &agrave; 25 MeV et une puissance de pointe sup&eacute;rieure &agrave; 50 MW. [Puissance de pointe = (potentiel de pointe en volts) &Cross; (courant de pointe du faisceau en amp&egrave;res).]</p>
<p>NOTA :<br />
1 <strong>Dur&eacute;e de l&rsquo;impulsion du faisceau</strong> Dans les machines bas&eacute;es sur des cavit&eacute;s d&rsquo;acc&eacute;l&eacute;ration &agrave; micro-ondes, la dur&eacute;e de l&rsquo;impulsion du faisceau est &eacute;gale soit &agrave; 1 &micro;s soit &agrave; la dur&eacute;e du groupe de faisceaux r&eacute;sultant d&rsquo;une impulsion de modulation des micro-ondes, selon la valeur la plus petite.<br />
2 <strong>Courant de pointe des faisceaux</strong> Dans les machines bas&eacute;es sur des cavit&eacute;s d&rsquo;acc&eacute;l&eacute;ration &agrave; micro-ondes, le courant de pointe des faisceaux est le courant moyen pendant la dur&eacute;e du groupe de faisceaux.</p>
<p>B.2.4.2 Canons &agrave; &eacute;tages multiples &agrave; gaz l&eacute;ger ou autres syst&egrave;mes &agrave; canons &agrave; grande vitesse (syst&egrave;mes &agrave; bobine, syst&egrave;mes &eacute;lectromagn&eacute;tiques ou &eacute;lectrothermiques, ou autres syst&egrave;mes avanc&eacute;s) capables d&rsquo;acc&eacute;l&eacute;rer des projectiles jusqu&rsquo;&agrave; 2 km/s ou plus.</p>
<p>B.2.4.3 <em>Cam&eacute;ras &agrave; miroir &agrave; rotation m&eacute;canique, comme suit, et composants sp&eacute;cialement con&ccedil;us pour ces cam&eacute;ras :</em><br />
a) cam&eacute;ras &agrave; images ayant une cadence d&rsquo;enregistrement sup&eacute;rieure &agrave; 225 000 images/s;<br />
b) cam&eacute;ras &agrave; fente ayant une vitesse d&rsquo;inscription sup&eacute;rieure &agrave; 0,5 mm/&micro;s.</p>
<p>NOTA :<br />
Les composants de ces cam&eacute;ras comprennent leurs dispositifs &eacute;lectroniques de synchronisation et leurs assemblages de rotor constitu&eacute;s par les turbines, les miroirs et les supports.</p>
<p>B.2.4.4 <em>Cam&eacute;ras et tubes &eacute;lectroniques &agrave; fente et &agrave; images, comme suit :</em><br />
a) cam&eacute;ras &eacute;lectroniques &agrave; fentes capables d&rsquo;un pouvoir de r&eacute;solution temporelle &eacute;gal ou inf&eacute;rieur &agrave; 50 ns et tubes &agrave; fente s&rsquo;y rapportant;<br />
b) cam&eacute;ras &agrave; images &eacute;lectroniques (ou &agrave; obturateur &eacute;lectronique) capables d&rsquo;une dur&eacute;e d&rsquo;exposition &eacute;gale ou inf&eacute;rieure &agrave; 50 ns;<br />
c) tubes &agrave; images et imageurs &agrave; semi-conducteurs destin&eacute;s &agrave; &ecirc;tre utilis&eacute;s avec les cam&eacute;ras mentionn&eacute;es au paragraphe b), comme suit :<br />
(1) tubes intensificateurs d&rsquo;images avec mise au point sur proximit&eacute;, dont la cathode photovolta&iuml;que est d&eacute;pos&eacute;e sur une couche conductrice transparente afin de diminuer la r&eacute;sistance de couche de la cathode photovolta&iuml;que;<br />
(2) tubes intensificateurs vidicons au silicium et &agrave; grilles o&ugrave; un syst&egrave;me rapide permet de s&eacute;parer les photo&eacute;lectrons de la cathode photovolta&iuml;que avant qu&rsquo;ils ne soient projet&eacute;s contre la plaque de l&rsquo;intensificateur vidicon au silicium;<br />
(3) obturateur &eacute;lectro-optique &agrave; cellule Kerr ou &agrave; cellule de Pockels;<br />
(4) autres tubes &agrave; images et imageurs &agrave; semi-conducteurs ayant un temps de d&eacute;clenchement pour images rapides inf&eacute;rieur &agrave; 50 ns sp&eacute;cialement con&ccedil;us pour les cam&eacute;ras mentionn&eacute;es au paragraphe b).</p>
<p>B.2.4.5 <em>5 Instruments sp&eacute;cialis&eacute;s pour exp&eacute;riences hydrodynamiques comme suit :</em><br />
a) interf&eacute;rom&egrave;tres de vitesse pour mesurer les vitesses sup&eacute;rieures &agrave; 1 km/s pendant des intervalles inf&eacute;rieurs &agrave; 10 &micro;s (VISAR, interf&eacute;rom&egrave;tres Doppler-laser, DLI, etc.);<br />
b) jauges au manganin pour des pressions sup&eacute;rieures &agrave; 100 kilobars;<br />
c) transducteurs de pression &agrave; quartz pour des pressions sup&eacute;rieures &agrave; 100 kilobars.</p>
<p>B.2.5 <em>Explosifs et &eacute;quipements connexes</em></p>
<p>B.2.5.1 <em>D&eacute;tonateurs et syst&egrave;mes d&rsquo;amor&ccedil;age &agrave; points multiples (fil &agrave; exploser, percuteur, etc.) :</em><br />
a) d&eacute;tonateurs d&rsquo;explosifs &agrave; commande &eacute;lectrique comme suit :<br />
(1) amorce &agrave; pont (AP);<br />
(2) fil &agrave; exploser (FE);<br />
(3) percuteur;<br />
(4) initiateurs &agrave; feuille explosive (IFE);<br />
b) syst&egrave;mes utilisant un d&eacute;tonateur unique ou plusieurs d&eacute;tonateurs con&ccedil;us pour amorcer pratiquement simultan&eacute;ment une surface explosive (de plus de 5 000 mm<sup>2</sup>) &agrave; partir d&rsquo;un signal unique de mise &agrave; feu (avec un temps de propagation de l&rsquo;amor&ccedil;age sur la surface en question inf&eacute;rieur &agrave; 2,5 &micro;s).</p>
<p>NOTA :<br />
Les d&eacute;tonateurs en question utilisent tous un petit conducteur &eacute;lectrique (amorce &agrave; pont, fil &agrave; exploser ou feuille) qui se vaporise avec un effet explosif lorsqu&rsquo;une impulsion &eacute;lectrique rapide &agrave; haute intensit&eacute; passe par ledit conducteur. Dans les d&eacute;tonateurs de type &laquo; non percuteur &raquo;, le conducteur &agrave; explosion amorce une d&eacute;tonation chimique dans un mat&eacute;riau de contact fortement explosif comme le PETN (t&eacute;tranitrate de penta&eacute;rythritol). Dans les d&eacute;tonateurs &agrave; percuteur, la vaporisation &agrave; action explosive du conducteur &eacute;lectrique am&egrave;ne un &laquo; percuteur &raquo; &agrave; passer au-dessus d&rsquo;un &eacute;cartement et l&rsquo;impact du percuteur sur un explosif amorce une d&eacute;tonation chimique. Dans certains cas, le percuteur est actionn&eacute; par une force magn&eacute;tique. L&rsquo;expression &laquo; &agrave; feuille explosive &raquo; peut se r&eacute;f&eacute;rer &agrave; un d&eacute;tonateur AP ou &agrave; un d&eacute;tonateur &agrave; percuteur. De m&ecirc;me, &laquo; initiateur &raquo; est parfois employ&eacute; au lieu de &laquo; d&eacute;tonateur &raquo;.<br />
Les d&eacute;tonateurs qui n&rsquo;utilisent que des explosifs primaires, comme l&rsquo;azoture de plomb, ne doivent pas &ecirc;tre soumis &agrave; un contr&ocirc;le.</p>
<p>B.2.5.2 <em>Composants &eacute;lectroniques pour les appareils de mise &agrave; feu (dispositifs de commutation et condensateurs &agrave; d&eacute;charge d&rsquo;impulsions) :</em><br />
a) dispositifs de commutation :<br />
(1) tubes &agrave; cathode froide (y compris les tubes au krypton &agrave; gaz et les tubes au sprytron &agrave; vide), qu&rsquo;ils soient ou non remplis de gaz, fonctionnant de mani&egrave;re similaire &agrave; un &eacute;clateur &agrave; &eacute;tincelle, comprenant trois &eacute;lectrodes ou plus et poss&eacute;dant toutes les caract&eacute;ristiques suivantes :<br />
(i) tension anodique nominale de pointe &eacute;gale ou sup&eacute;rieure &agrave; 2 500 V;<br />
(ii) courant de plaque nominal de pointe &eacute;gal ou sup&eacute;rieur &agrave; 100 A;<br />
(iii) temporisation de l&rsquo;anode &eacute;gale ou inf&eacute;rieure &agrave; 10 &micro;s;<br />
(2) &eacute;clateurs &agrave; &eacute;tincelle d&eacute;clench&eacute;s avec une temporisation de l&rsquo;anode &eacute;gale ou inf&eacute;rieure &agrave; 15 &micro;s et pr&eacute;vus pour un courant de pointe &eacute;gal ou sup&eacute;rieur &agrave; 500 A;<br />
(3) modules ou assemblages &agrave; commutation rapide poss&eacute;dant toutes les caract&eacute;ristiques suivantes :<br />
(i) tension anodique nominale de pointe sup&eacute;rieure &agrave; 2 000 V;<br />
(ii) courant de plaque nominal de pointe &eacute;gal ou sup&eacute;rieur &agrave; 500 A;<br />
(iii) temps de commutation &eacute;gal ou inf&eacute;rieur &agrave; 1 &micro;s;<br />
b) condensateurs poss&eacute;dant l&rsquo;une des caract&eacute;ristiques suivantes :<br />
(1) tension nominale sup&eacute;rieure &agrave; 1,4 kV, accumulation d&rsquo;&eacute;nergie sup&eacute;rieure &agrave; 10 J, capacit&eacute; sup&eacute;rieure &agrave; 0,5 &micro;F, et inductance s&eacute;rie inf&eacute;rieure &agrave; 50 nH;<br />
(2) tension nominale sup&eacute;rieure &agrave; 750 V, capacit&eacute; sup&eacute;rieure &agrave; 0,25 &micro;F et inductance s&eacute;rie inf&eacute;rieure &agrave; 10 nH</p>
<p>B.2.5.3 <em>Dispositifs de mise &agrave; feu et g&eacute;n&eacute;rateurs d&rsquo;impulsions &eacute;quivalents &agrave; haute intensit&eacute; (pour d&eacute;tonateurs command&eacute;s), comme suit :</em><br />
a) dispositifs de mise &agrave; feu de d&eacute;tonateurs d&rsquo;explosions con&ccedil;us pour actionner les d&eacute;tonateurs &agrave; commande multiple vis&eacute;s au paragraphe B.2.5.1.;<br />
b) g&eacute;n&eacute;rateurs d&rsquo;impulsions &eacute;lectriques modulaires (contracteurs &agrave; impulsions) con&ccedil;us pour une utilisation portative, mobile, ou exigeant une robustesse &eacute;lev&eacute;e (y compris les dispositifs de commande &agrave; lampe &agrave; x&eacute;non), poss&eacute;dant l&rsquo;ensemble des caract&eacute;ristiques suivantes :<br />
(1) capables de fournir leur &eacute;nergie en moins de 15 &micro;s;<br />
(2) ayant une intensit&eacute; sup&eacute;rieure &agrave; 100 A;<br />
(3) ayant un temps de mont&eacute;e inf&eacute;rieur &agrave; 10 &micro;s dans des charges inf&eacute;rieures &agrave; 40 &omega;. (Le temps de mont&eacute;e est d&eacute;fini comme &eacute;tant l&rsquo;intervalle entre des amplitudes de courant de 10 % &agrave; 90 % lors de l&rsquo;actionnement d&rsquo;une charge ohmique.);<br />
(4) enferm&eacute;s dans un boÃ®tier &eacute;tanche aux poussi&egrave;res;<br />
(5) n&rsquo;ayant aucune dimension sup&eacute;rieure &agrave; 25,4 cm (10 po);<br />
(6) pesant moins de 25 kg (55 lb);<br />
(7) con&ccedil;us pour &ecirc;tre utilis&eacute;s &agrave; l&rsquo;int&eacute;rieur d&rsquo;une vaste gamme de temp&eacute;ratures (-50 &deg;C &agrave; 100 &deg;C) ou con&ccedil;us pour une utilisation a&eacute;rospatiale.</p>
<p>B.2.5.4 <em>Explosifs ou substances ou m&eacute;langes contenant plus de 2 % des produits suivants :</em><br />
a) cyclot&eacute;tram&eacute;thyl&egrave;net&eacute;tranitramine (HMX);<br />
b) cyclotrim&eacute;thyl&egrave;netrinitramine (RDX);<br />
c) triaminotrinitrobenz&egrave;ne (TATB);<br />
d) tout explosif ayant une densit&eacute; cristalline sup&eacute;rieure &agrave; 1,8 g/cm<sup>3</sup> et une vitesse de d&eacute;tonation sup&eacute;rieure &agrave; 8 000 m/s;<br />
e) hexanitrostilb&egrave;ne (HNS).</p>
<p>B.2.6 <em>2.6 &Eacute;quipements et composants pour essais nucl&eacute;aires</em></p>
<p>B.2.6.1 2.6.1 Tubes photomultiplicateurs ayant une surface photocathodique sup&eacute;rieure &agrave; 20 cm<sup>2</sup> et poss&eacute;dant un temps de mont&eacute;e de l&rsquo;impulsion inf&eacute;rieur &agrave; 1 ns.</p>
<p>B.2.6.2 2.6.2 G&eacute;n&eacute;rateurs d&rsquo;impulsions rapides avec une tension de sortie sup&eacute;rieure &agrave; 6 V dans une charge ohmique de moins de 55 &omega; et un temps de transition des impulsions inf&eacute;rieur &agrave; 500 ps (d&eacute;fini comme &eacute;tant l&rsquo;intervalle entre une amplitude de tension de 10 % et de 90 %).</p>
<p>B.2.7 <em>Divers</em></p>
<p>B.2.7.1 Syst&egrave;mes g&eacute;n&eacute;rateurs de neutrons, y compris les tubes, con&ccedil;us pour fonctionner sans installation de vide ext&eacute;rieure et utilisant l&rsquo;acc&eacute;l&eacute;ration &eacute;lectrostatique pour d&eacute;clencher une r&eacute;action nucl&eacute;aire tritium-deut&eacute;rium.</p>
<p>B.2.7.2 <em>&Eacute;quipement se rapportant &agrave; la manipulation et au traitement de mati&egrave;res nucl&eacute;aires ainsi qu&rsquo;aux r&eacute;acteurs nucl&eacute;aires comme suit :</em><br />
a)t&eacute;l&eacute;manipulateurs utilisables pour accomplir des actions lors d&rsquo;op&eacute;rations de s&eacute;paration radiochimiques et dans des cellules de haute activit&eacute; comme suit :<br />
(1) capables de traverser une paroi de cellule de 0,6 m ou plus (passage par le mur);<br />
(2) capables de passer par-dessus le sommet d&rsquo;une paroi de cellule ayant une &eacute;paisseur &eacute;gale ou sup&eacute;rieure &agrave; 0,6 m (passage par-dessus le mur);</p>
<p>NOTA :<br />
Les t&eacute;l&eacute;manipulateurs transmettent les actions des op&eacute;rateurs humains &agrave; un bras manipulateur et &agrave; un dispositif terminal &agrave; distance. Ils peuvent &ecirc;tre du type &laquo; maÃ®tre/esclave &raquo; ou &ecirc;tre command&eacute;s par un manche &agrave; balai ou par un clavier.<br />
b) fen&ecirc;tres de protection contre les rayonnements &agrave; haute densit&eacute; (verre au plomb ou autre mati&egrave;re), ayant plus de 0,09 m<sup>2</sup> du c&ocirc;t&eacute; froid, une densit&eacute; sup&eacute;rieure &agrave; 3 g/cm<sup>3</sup> et une &eacute;paisseur &eacute;gale ou sup&eacute;rieure &agrave; 100 mm ainsi que les cadres sp&eacute;cialement con&ccedil;us &agrave; cet effet;<br />
c) cam&eacute;ras TV r&eacute;sistant aux effets des rayonnements ou objectifs pour ces cam&eacute;ras sp&eacute;cialement con&ccedil;ues ou r&eacute;gl&eacute;es pour r&eacute;sister aux effets des rayonnements, capables de supporter plus de 5 &Cross; 10<sup>4</sup> Gy (silicium) [5 &Cross; 10<sup>6</sup> rads (silicium)] sans d&eacute;gradation fonctionnelle.</p>
<p>B.2.7.3 <em>Installations, usines et &eacute;quipements de tritium, comme suit :</em><br />
a) installations ou usines de production, de r&eacute;g&eacute;n&eacute;ration, d&rsquo;extraction, de concentration ou de manipulation de tritium, de compos&eacute;s de tritium ou de m&eacute;langes contenant du tritium;</p>
<p>b) &eacute;quipements pour ces installations ou ces usines, comme suit :<br />
(1) unit&eacute;s de r&eacute;frig&eacute;ration de l&rsquo;hydrog&egrave;ne ou de l&rsquo;h&eacute;lium capables de refroidir jusqu&rsquo;&agrave; 23 K (-250 &deg;C) ou moins, avec une capacit&eacute; d&rsquo;enl&egrave;vement de la chaleur sup&eacute;rieure &agrave; 150 W;<br />
(2) syst&egrave;mes de purification et de stockage des isotopes d&rsquo;hydrog&egrave;ne, utilisant des hydrures m&eacute;talliques comme support de purification ou de stockage.</p>
<p>B.2.7.4 Catalyseurs au platine sp&eacute;cialement con&ccedil;us ou pr&eacute;par&eacute;s pour favoriser la r&eacute;action d&rsquo;&eacute;change d&rsquo;isotopes d&rsquo;hydrog&egrave;ne entre l&rsquo;hydrog&egrave;ne et l&rsquo;eau en vue de la r&eacute;g&eacute;n&eacute;ration du tritium de l&rsquo;eau lourde ou pour la production d&rsquo;eau lourde.</p>
<p>B.2.7.5 <em>Installations, usines et &eacute;quipements pour la s&eacute;paration des isotopes du lithium, comme suit :</em><br />
a) installations ou usines de s&eacute;paration des isotopes du lithium;<br />
b) &eacute;quipements pour la s&eacute;paration des isotopes du lithium, comme suit :<br />
(1) colonnes garnies pour les &eacute;changes liquide-liquide, sp&eacute;cialement con&ccedil;ues pour les amalgames de lithium;<br />
(2) pompes pour les amalgames de mercure et de lithium;<br />
(3) cellules &eacute;lectrolytiques pour les amalgames de lithium;<br />
(4) &eacute;vaporateurs pour solution concentr&eacute;e de lithine.</p>
<p>B.2.7.6 Tout &eacute;quipement non vis&eacute; par le paragraphe B.2. qui est destin&eacute;, ou pour lequel il existe des motifs raisonnables de croire qu&rsquo;il est destin&eacute;, en tout ou en partie, &agrave; une utilisation li&eacute;e &agrave; la conception, &agrave; la mise au point, &agrave; la production, &agrave; la manutention, &agrave; l&rsquo;exploitation, &agrave; l&rsquo;entretien ou au stockage d&rsquo;armes nucl&eacute;aires ou d&rsquo;autres dispositifs nucl&eacute;aires explosifs.</p>
<p>B.3. RENSEIGNEMENTS NUCL&Eacute;AIRES CONTR&Ocirc;L&Eacute;S</p>
<p>B.3.1 <em>Technologie</em></p>
<p>Les donn&eacute;es techniques se pr&eacute;sentent sous forme notamment de dessins techniques, mod&egrave;les, n&eacute;gatifs et &eacute;preuves photographiques, enregistrements, donn&eacute;es de conception, manuels techniques et manuels d&rsquo;exploitation sous une forme &eacute;crite ou enregistr&eacute;e sur d&rsquo;autres supports ou dispositifs tels que des disques, des bandes magn&eacute;tiques et des m&eacute;moires mortes pour la conception, la production, la construction, l&rsquo;exploitation ou l&rsquo;entretien de tout article mentionn&eacute; &agrave; la pr&eacute;sente partie, &agrave; l&rsquo;exception des donn&eacute;es mises &agrave; la disposition du public (p. ex. donn&eacute;es figurant dans des livres ou p&eacute;riodiques publi&eacute;s, ou donn&eacute;es mises &agrave; la disposition des int&eacute;ress&eacute;s sans restriction lors d&rsquo;une diffusion ult&eacute;rieure).</p>
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
<h2 id="Gloss">Glossaire</h2>  <dl>
<dt><strong>articles &agrave;  caract&egrave;re nucl&eacute;aire et articles &agrave; double usage dans le secteur nucl&eacute;aire</strong></dt>
<dd>Aussi appel&eacute;s substances nucl&eacute;aires, &eacute;quipement et renseignements contr&ocirc;l&eacute;s,  ces articles figurent dans le RCIENN. La partie&nbsp;A &eacute;num&egrave;re les articles &agrave;  caract&egrave;re nucl&eacute;aire et la partie&nbsp;B les articles &agrave; double usage dans le  secteur nucl&eacute;aire.<br />
<em>(<span lang="en">nuclear and  nuclear-related dual-use items</span>)</em></dd>
<dt><strong>Comit&eacute; Zangger</strong></dt>
<dd>Un r&eacute;gime multilat&eacute;ral  de contr&ocirc;le des exportations form&eacute; du Comit&eacute; des exportateurs signataires du  TNP qui joue le r&ocirc;le de &laquo;&nbsp;fid&egrave;le interpr&egrave;te&nbsp;&raquo; du paragraphe&nbsp;III  (2) du TNP en vue d&#39;&eacute;clairer l&#39;interpr&eacute;tation des politiques de contr&ocirc;le de  l&#39;exportation nucl&eacute;aire pour les membres signataires du Trait&eacute;. Le Comit&eacute;  Zangger conserve une &laquo;&nbsp;liste de d&eacute;clencheurs&nbsp;&raquo; (INFCIRC/209, d&eacute;clenchant  les garanties comme condition de fourniture) associ&eacute;e aux articles &agrave; caract&egrave;re  nucl&eacute;aire afin d&#39;aider les membres signataires du TNP &agrave; d&eacute;terminer l&#39;&eacute;quipement  et les substances vis&eacute;s par les contr&ocirc;les d&#39;exportation.<br />
<em>(Zangger&nbsp;Committee)</em></dd>
<dt><strong>contr&ocirc;les de l&rsquo;utilisation ultime</strong></dt>
<dd>Aussi appel&eacute;s contr&ocirc;les &laquo;&nbsp;fourre-tout&nbsp;&raquo;, ils portent sur les articles ne figurant pas dans le RCEINN, mais dont l&#39;utilisation pr&eacute;vue peut &ecirc;tre li&eacute;e &agrave; un  programme d&#39;armement nucl&eacute;aire.<br />
<em>(<span lang="en">end-use controls</span>)</em></dd>
<dt><strong>destinataire interm&eacute;diaire</strong></dt>
<dd>Personne qui n&rsquo;est pas un importateur, mais qui manipule la source radioactive &agrave; un certain moment de sa livraison &agrave; l&rsquo;importateur. Une entit&eacute; associ&eacute;e uniquement au transport de la source (par exemple, un transporteur) n&rsquo;est pas consid&eacute;r&eacute;e comme un destinataire interm&eacute;diaire.<br />
<span lang="en"><em>(intermediate consignee)</em></span></dd>
<dt><strong>&eacute;quipement nucl&eacute;aire contr&ocirc;l&eacute;</strong></dt>
<dd>L&rsquo;&eacute;quipement nucl&eacute;aire contr&ocirc;l&eacute; et les pi&egrave;ces et composantes d&rsquo;&eacute;quipement nucl&eacute;aire contr&ocirc;l&eacute;es figurant &agrave; l&rsquo;annexe E du pr&eacute;sent document.<br />
<em>(<span lang="en">controlled nuclear equipement</span>)</em></dd>
<dt><strong>fondement d&#39;autorisation</strong></dt>
<dd><p>Un ensemble d&#39;exigences et de documents visant une installation ou une activit&eacute;  r&eacute;glement&eacute;e, y compris&nbsp;:
<ul>
<li>les exigences r&eacute;glementaires &eacute;tablies dans les lois et  les r&egrave;glements applicables</li>
<li>les conditions et les mesures de s&ucirc;ret&eacute; et de  r&eacute;glementation d&eacute;crites dans le permis pour l&#39;installation ou l&#39;activit&eacute; et les  documents cit&eacute;s en r&eacute;f&eacute;rence directement dans ce permis</li>
<li>les  mesures de s&ucirc;ret&eacute; et de r&eacute;glementation d&eacute;crites dans la demande de permis et  les documents soumis &agrave; l&#39;appui de cette demande</li>
</ul></p>
<span lang="en"><em>(licensing basis)</em></span></dd>
<dt><strong>Groupe des fournisseurs nucl&eacute;aire (GFN)</strong></dt>
<dd>Un r&eacute;gime multilat&eacute;ral de contr&ocirc;le de l&#39;exportation des pays fournisseurs d&#39;articles nucl&eacute;aires apportant leur contribution &agrave; la non-prolif&eacute;ration des armes nucl&eacute;aires par la mise en application des lignes directrices (INFCIRC/254) visant la fourniture d&#39;articles &agrave; caract&egrave;re nucl&eacute;aire et d&#39;articles &agrave; double usage dans le secteur  nucl&eacute;aire.<br />
<em>(<span lang="en">Nuclear Suppliers Group</span>)</em></dd>
<dt><strong>importateur</strong></dt>
<dd>Personne autoris&eacute;e &agrave; recevoir et &agrave; poss&eacute;der une source radioactive &agrave; risque &eacute;lev&eacute; qui a &eacute;t&eacute; export&eacute;e.<br />
<span lang="en"><em>(importer)</em></span></dd>
<dt><strong>obligations</strong></dt>
<dd>Engagements juridiquement contraignants en mati&egrave;re de substances nucl&eacute;aires, de substances non nucl&eacute;aires, d&#39;&eacute;quipement nucl&eacute;aire et de technologie nucl&eacute;aire (souvent appel&eacute;s &laquo;&nbsp;indicateurs&nbsp;&raquo;). Les obligations d&eacute;coulent g&eacute;n&eacute;ralement des exigences li&eacute;es aux accords de coop&eacute;ration conclus de gouvernement &agrave; gouvernement, et dans le cadre desquels les parties concern&eacute;es sont tenues de respecter lesdites exigences avant d&#39;autoriser le transfert d&#39;articles vis&eacute;s par un accord.<br />
<em>(obligations)</em></dd>
<dt><strong>renseignements nucl&eacute;aires contr&ocirc;l&eacute;s</strong></dt>
<dd>Les renseignements nucl&eacute;aires contr&ocirc;l&eacute;s figurant &agrave; l&rsquo;annexe E du pr&eacute;sent document.<br />
<em>(<span lang="en">controlled nuclear information</span>)</em></dd>
<dt><strong>source radioactive</strong></dt>
<dd>Mati&egrave;res radioactives qui sont enferm&eacute;es d&rsquo;une mani&egrave;re permanente dans une capsule ou fix&eacute;es sous forme solide et qui ne sont pas exempt&eacute;es du contr&ocirc;le r&eacute;glementaire. Ce terme d&eacute;signe &eacute;galement toute mati&egrave;re radioactive qui est lib&eacute;r&eacute;e en cas de fuite ou de bris de la source radioactive, mais ne d&eacute;signe pas les mati&egrave;res encapsul&eacute;es aux fins d&rsquo;&eacute;limination ou les mati&egrave;res nucl&eacute;aires qui font partie des cycles de combustible nucl&eacute;aire des r&eacute;acteurs de puissance et des r&eacute;acteurs de recherche.<br />
<em>(radioactive source)</em></dd>
<dt><strong>sources radioactives &agrave; risque &eacute;lev&eacute;</strong></dt>
<dd>Tout radionucl&eacute;ide identifi&eacute; comme source radioactive de cat&eacute;gorie&nbsp;1 ou de cat&eacute;gorie&nbsp;2 dans le tableau I de l&#39;annexe I du <em>Code de conduite sur la s&ucirc;ret&eacute; et la s&eacute;curit&eacute; des sources radioactives de l&#39;AIEA.</em><br />
<span lang="en"><em>(risk-significant radioactive sources)</em></span></dd>
<dt><strong>substances nucl&eacute;aires contr&ocirc;l&eacute;es</strong></dt>
<dd>Une substance nucl&eacute;aire contr&ocirc;l&eacute;e figurant &agrave; l&rsquo;annexe E du pr&eacute;sent document.<br />
<em><span lang="en">(controlled nuclear substances)</span></em></dd>
<dt><strong>TBq</strong></dt>
<dd>T&eacute;rabecquerels; 1 TBq = 1012 becquerels<br />
<em>(TBq)</em></dd>
<dt><strong>transaction</strong></dt>
<dd>Toute action impliquant une importation ou une exportation.<br />
<em>(transaction)</em></dd>
<dt><strong>utilisation ultime pr&eacute;vue</strong></dt>
<dd>Le but ultime de la source import&eacute;e, tel qu&rsquo;il est d&eacute;clar&eacute; &agrave; l&rsquo;exportateur par l&rsquo;importateur (par exemple, irradiation industrielle, radiographie industrielle, t&eacute;l&eacute;th&eacute;rapie, irradiation sanguine).<br />
<span lang="en"><em>(intended end use)</em></span></dd>  </dl>  </div>  <div className="clear"></div>
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
<h2 id="Ref">R&eacute;f&eacute;rences</h2>
<ol>
<li><em>R&egrave;gles de proc&eacute;dure de la Commission canadienne de s&ucirc;ret&eacute; nucl&eacute;aire</em>, DORS/2000-211.</li>
<li><a href="http://www.un.org/en/conf/npt/2005/npttreaty.html"><em>Trait&eacute; sur la non-prolif&eacute;ration des armes nucl&eacute;aires</em></a>.</li>
<li>Agence internationale de l&rsquo;&eacute;nergie atomique (AIEA), RS-G-1.9, <em>Cat&eacute;gorisation de sources radioactives</em>, 2005.</li>
<li>AIEA, <em>Code de conduite sur la s&ucirc;ret&eacute; et la s&eacute;curit&eacute; des sources radioactives</em>, 2004.</li>
<li>AIEA, <em>Orientations pour l&rsquo;importation et l&rsquo;exportation de sources radioactives</em>, 2012.</li>
</ol>  </div>  <div className="clear"></div>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<h2>S&eacute;ries de documents d&#39;application de la r&eacute;glementation de la CCSN</h2>
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
<p><strong>Remarque&nbsp;:</strong> Les s&eacute;ries de documents d&rsquo;application de la r&eacute;glementation pourraient &ecirc;tre modifi&eacute;es p&eacute;riodiquement par la CCSN. Chaque s&eacute;rie susmentionn&eacute;e peut comprendre plusieurs documents d&rsquo;application de la r&eacute;glementation. Pour obtenir la plus r&eacute;cente liste de documents d&rsquo;application de la r&eacute;glementation, veuillez consulter la page Web de la <a href="/fra/acts-and-regulations/regulatory-documents/index">CCSN Documents d&rsquo;application de la r&eacute;glementation</a>.</p>  </div>
<div className="clear">
                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }