import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "fr",
                pageTitle: "REGDOC-2.11.2, Déclassement", 
                dateModified: "2019-07-16",
                langToggleUrl: "/eng/acts-and-regulations/consultation/comment/regdoc2-11-2"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<h2>Pr&eacute;face</h2>  <p>Ce document d&rsquo;application de la r&eacute;glementation fait partie de la s&eacute;rie de documents d&rsquo;application de la r&eacute;glementation de la CCSN intitul&eacute;e Gestion des d&eacute;chets, qui porte &eacute;galement sur le d&eacute;classement. La liste compl&egrave;te des s&eacute;ries figure &agrave; la fin de ce document et elle peut &ecirc;tre consult&eacute;e &agrave; partir du <a href="http://www.nuclearsafety.gc.ca/fra/acts-and-regulations/regulatory-documents/index">site Web de la CCSN</a>. </p>  <p> Le document d&rsquo;application de la r&eacute;glementation REGDOC-2.11.2, <em>D&eacute;classement</em> &eacute;nonce les exigences et l&rsquo;orientation relatives &agrave; la planification, &agrave; la pr&eacute;paration, &agrave; l&rsquo;ex&eacute;cution et &agrave; l&rsquo;ach&egrave;vement du d&eacute;classement des installations nucl&eacute;aires de cat&eacute;gorie I, des mines et usines de concentration d&rsquo;uranium et des activit&eacute;s autoris&eacute;es par la CCSN au Canada relatives aux substances nucl&eacute;aires et aux appareils &agrave; rayonnement (titulaires de permis de d&eacute;chets nucl&eacute;aires seulement).</p>  <p> Ce document remplace le guide d&rsquo;application de la r&eacute;glementation G-219, <em>Les plans de d&eacute;classement des activit&eacute;s autoris&eacute;es.</em></p>  <p> Pour en savoir plus sur la mise en &oelig;uvre des documents d&rsquo;application de la r&eacute;glementation et sur l&rsquo;approche graduelle, consultez le REGDOC-3.5.3, <em>Principes fondamentaux de r&eacute;glementation.</em></p>  <div className="alert alert-info module-simplify ">
<p>Le terme &laquo;&nbsp;doit&nbsp;&raquo; est employ&eacute; pour exprimer une exigence &agrave; laquelle le demandeur ou le titulaire de permis doit se conformer; le terme &laquo;&nbsp;devrait&nbsp;&raquo; d&eacute;note une orientation ou une mesure conseill&eacute;e; le terme &laquo;&nbsp;pourrait&nbsp;&raquo; exprime une option ou une mesure conseill&eacute;e ou acceptable dans les limites de ce document d&rsquo;application de la r&eacute;glementation; et le terme &laquo;&nbsp;peut&nbsp;&raquo; exprime une possibilit&eacute; ou une capacit&eacute;.</p>
<p> Aucune information contenue dans le pr&eacute;sent document ne doit &ecirc;tre interpr&eacute;t&eacute;e comme lib&eacute;rant le titulaire de permis de toute autre exigence pertinente. Le titulaire de permis a la responsabilit&eacute; de prendre connaissance de tous les r&egrave;glements et de toutes les conditions de permis applicables et d&rsquo;y adh&eacute;rer.</p>  </div>  <div className="col-md-12 module-table-contents">
<h2>Table des mati&egrave;res</h2>
<ul>
<li><a href="#sec1">1. Introduction</a>
<ul>
<li><a href="#sec1-1">1.1 Objet</a></li>
<li><a href="#sec1-2">1.2 Port&eacute;e</a></li>
<li><a href="#sec1-3">1.3 L&eacute;gislation pertinente</a></li>
</ul>
</li>
<li><a href="#sec2">2. Renseignements g&eacute;n&eacute;raux : Approche fond&eacute;e sur le cycle de vie</a></li>
<li><a href="#sec3">3. Optimisation et approche graduelle</a></li>
<li><a href="#sec4">4. Strat&eacute;gie de d&eacute;classement</a></li>
<li><a href="#sec5">5. Planification du d&eacute;classement</a>
<ul>
<li><a href="#sec5-1">5.1 Avant-projet de d&eacute;classement</a>
<ul>
<li><a href="#sec5-1-1">5.1.1	Contenu de l&rsquo;avant-projet de d&eacute;classement</a></li>
<li><a href="#sec5-1-2">5.1.2	Incertitude</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#sec6">6.	Pr&eacute;paration en vue du d&eacute;classement</a>
<ul>
<li><a href="#sec6-1">6.1	Plan de stockage sous surveillance</a></li>
<li><a href="#sec6-2">6.2	Plan de d&eacute;classement d&eacute;taill&eacute;</a>
<ul>
<li><a href="#sec6-2-1">6.2.1	Contenu du plan de d&eacute;classement d&eacute;taill&eacute;</a></li>
</ul>
</li>
<li><a href="#sec6-3">6.3 &Eacute;valuation de la s&ucirc;ret&eacute; pour le d&eacute;classement</a></li>
<li><a href="#sec6-4">6.4 Plan de gestion des d&eacute;chets</a></li>
</ul>
</li>
<li><a href="#sec7">7. Ex&eacute;cution du d&eacute;classement</a>
<ul>
<li><a href="#sec7-1">7.1 Stockage sous surveillance</a></li>
</ul>
</li>
<li><a href="#sec8">8. Ach&egrave;vement du d&eacute;classement</a></li>
<li><a href="#sec9">9. Post-d&eacute;classement</a></li>
<li><a href="#sec10">10. Contr&ocirc;les de substances radiologiques et dangereuses</a>
<ul>
<li><a href="#sec10-1">10.1	Contr&ocirc;les pr&eacute;alables &agrave; l&rsquo;exploitation</a></li>
<li><a href="#sec10-2">10.2	Contr&ocirc;les pendant l&rsquo;exploitation</a>
<ul>
<li><a href="#sec10-2-1">10.2.1 Contr&ocirc;les pendant la transition de l&rsquo;exploitation au d&eacute;classement</a></li>
</ul>
</li>
<li><a href="#sec10-3">10.3	Contr&ocirc;les pendant le d&eacute;classement</a></li>
<li><a href="#sec10-4">10.4	Contr&ocirc;le pour confirmer l&rsquo;&eacute;tat final du d&eacute;classement</a></li>
</ul>
</li>
<li><a href="#glossary">Glossaire</a></li>
<li><a href="#addInfo">Renseignements suppl&eacute;mentaires</a></li>
</ul>  </div>  <h2>D&eacute;classement</h2>  <div className="alert alert-info module-simplify ">
<p>Le projet de document d&rsquo;application de la  r&eacute;glementation REGDOC-2.11.2, <em>D&eacute;classement</em> renvoie aux projets de documents d&rsquo;application de la r&eacute;glementation et &agrave; la  norme CSA ci&#8209;dessous. Les commentaires recueillis au sujet de ces documents,  ainsi que ceux re&ccedil;us dans le cadre de la pr&eacute;sente consultation publique,  seront pris en compte dans la r&eacute;vision du REGDOC&#8209;2.11.2.</p>
<ul>
<li>REGDOC-2.11.1, <em>Gestion des d&eacute;chets, tome&nbsp;I&nbsp;:  Gestion des d&eacute;chets radioactifs</em> (consultation publique en cours)</li>
<li>REGDOC-2.11.1, <em>Gestion des d&eacute;chets, tome&nbsp;III&nbsp;:  Dossier de s&ucirc;ret&eacute; pour la gestion &agrave; long terme des d&eacute;chets radioactifs,</em> version&nbsp;2  (consultation publique en cours)</li>
<li>REGDOC-3.3.1, <em>Garanties financi&egrave;res</em></li>
<li>CSA N294-19, <em>D&eacute;classement des installations contenant des substances nucl&eacute;aires</em> (consultation publique en cours)</li>
</ul>  </div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="1"></div>
<h2 id="sec1">Introduction</h2>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="1.1"></div>
<h3 id="sec1-1">1.1 Objet</h3>  <p>Le pr&eacute;sent document d&rsquo;application de la r&eacute;glementation &eacute;nonce les exigences et l&rsquo;orientation relatives &agrave; la planification, &agrave; la pr&eacute;paration &agrave; l&rsquo;ex&eacute;cution et &agrave; l&rsquo;ach&egrave;vement du d&eacute;classement.</p>  <p> Par d&eacute;classement, la CCSN entend les mesures administratives et techniques prises pour mettre une installation hors service ou suspendre les activit&eacute;s qui y sont autoris&eacute;es, et qui permettent de lever en tout ou en partie les contr&ocirc;les r&eacute;glementaires visant une installation ou un site o&ugrave; l&rsquo;on g&egrave;re, poss&egrave;de ou stocke des substances nucl&eacute;aires. Ces mesures englobent les proc&eacute;dures, les processus et les activit&eacute;s conduisant &agrave; la lev&eacute;e des contr&ocirc;les r&eacute;glementaires sur une installation ou un site, avec ou sans restrictions quant &agrave; son utilisation future (p. ex., d&eacute;contamination et/ou d&eacute;mant&egrave;lement des structures, des syst&egrave;mes et des composantes). La p&eacute;riode de temps consacr&eacute;e &agrave; l&rsquo;ex&eacute;cution des mesures de d&eacute;classement varie de quelques semaines pour des installations peu complexes ou de petite taille &agrave; quelques ann&eacute;es ou d&eacute;cennies pour des installations plus complexes ou de grande taille, surtout lorsqu&rsquo;il est question de d&eacute;classement diff&eacute;r&eacute;.</p>  <p> Pour certaines installations peu complexes ou de petite taille qui pr&eacute;sentent un tr&egrave;s faible niveau de risque, le simple retrait des sources de rayonnement et leur renvoi au fournisseur peuvent suffire comme mesures de d&eacute;classement, suivies de la r&eacute;alisation d&rsquo;un contr&ocirc;le pour s&rsquo;assurer que le niveau de contamination r&eacute;siduelle ne d&eacute;passe pas les crit&egrave;res d&eacute;finis pour l&rsquo;&eacute;tat final.</p>  <p> La CCSN examine chaque demande de permis en vue de s&rsquo;assurer que les titulaires de permis ont pris les dispositions appropri&eacute;es pour le d&eacute;classement, afin que les travailleurs, le public et l&rsquo;environnement soient prot&eacute;g&eacute;s. Tous les titulaires de permis visant des activit&eacute;s ou des installations r&eacute;glement&eacute;es doivent s&rsquo;assurer de bien d&eacute;classer tous les sites autoris&eacute;s de mani&egrave;re appropri&eacute;e. Les plans et strat&eacute;gies pr&eacute;cis en mati&egrave;re de d&eacute;classement sont &eacute;valu&eacute;s au moyen du processus d&rsquo;autorisation et font partie des &eacute;l&eacute;ments de base pour l&rsquo;autorisation.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="1.2"></div>
<h3 id="sec1-2">1.2 Port&eacute;e</h3>  <p>Le pr&eacute;sent document d&rsquo;application de la r&eacute;glementation &eacute;nonce les exigences et l&rsquo;orientation relatives aux activit&eacute;s de d&eacute;classement, allant de la planification &agrave; l&rsquo;ach&egrave;vement, et ce, sous une supervision et une surveillance r&eacute;glementaires continues de la part de la direction.</p>  <p> Il vise les titulaires de permis d&rsquo;installations nucl&eacute;aires de cat&eacute;gorie&nbsp;I, de mines et usines de concentration d&rsquo;uranium, et d&rsquo;activit&eacute;s autoris&eacute;es par la CCSN relatives aux substances nucl&eacute;aires et aux appareils &agrave; rayonnement (titulaires de permis de d&eacute;chets de substances nucl&eacute;aires seulement) qui sont tenus d&rsquo;avoir des plans ou des strat&eacute;gies de d&eacute;classement pour se conformer aux exigences r&eacute;glementaires ou pour respecter une condition de leur permis. Pour les autres titulaires de permis, les renseignements que contient le pr&eacute;sent document d&rsquo;application de la r&eacute;glementation peuvent servir d&rsquo;orientation.</p>  <p> Ce document d&rsquo;application de la r&eacute;glementation n&rsquo;est pas destin&eacute; &agrave; la planification du d&eacute;classement d&rsquo;une installation &agrave; la suite d&rsquo;un accident, mais peut servir d&rsquo;orientation. De m&ecirc;me, il n&rsquo;est pas destin&eacute; &agrave; la planification de l&rsquo;assainissement des sites historiques pour lesquels le d&eacute;classement n&rsquo;&eacute;tait pas pr&eacute;vu, mais peut servir d&rsquo;orientation en vue d&rsquo;&eacute;tablir la port&eacute;e de la surveillance r&eacute;glementaire des activit&eacute;s d&rsquo;assainissement.</p>  D&rsquo;autres <a href="http://www.suretenucleaire.gc.ca/frs/acts-and-regulations/regulatory-documents/index">documents d&rsquo;application de la r&eacute;glementation de la CCSN</a> et normes du Groupe CSA s&rsquo;ajoutent au pr&eacute;sent document, notamment la norme CSA N294, <em>D&eacute;classement des installations contenant des substances nucl&eacute;aires </em><sup id="fnb1-ref"><a className="fn-lnk" href="#fnb1"><span className="wb-inv">Footnote </span>1</a></sup>.
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="1.3"></div>
<h3 id="sec1-3">1.3 L&eacute;gislation pertinente</h3>  <p>Les dispositions de la <a href="https://laws-lois.justice.gc.ca/fra/lois/N-28.3/"><em>Loi sur la s&ucirc;ret&eacute; et la r&eacute;glementation nucl&eacute;aires</em></a> (LSRN) et des r&egrave;glements connexes qui s&rsquo;appliquent au pr&eacute;sent document sont les suivantes&nbsp;:</p>  <ul>
<li>paragraphe 24(5) et alin&eacute;as 26e) et 26f) de la LSRN</li>
<li>alin&eacute;a 3(1)l) du <a href="https://laws.justice.gc.ca/fra/reglements/DORS-2000-202/page-1.html"><em>R&egrave;glement g&eacute;n&eacute;ral sur la s&ucirc;ret&eacute; et la r&eacute;glementation nucl&eacute;aires</em></a></li>
<li>articles&nbsp;7 et 8, paragraphes&nbsp;14(3) et 14(4) et alin&eacute;as&nbsp;3k), 5i) et 6h) du <a href="https://laws.justice.gc.ca/fra/reglements/DORS-2000-204/page-2.html#h-645706"><em>R&egrave;glement sur les installations nucl&eacute;aires de cat&eacute;gorie&nbsp;I</em></a></li>
<li>article&nbsp;7, alin&eacute;as&nbsp;8b), 8.3(2)c), 8.3(2)d) et sous-alin&eacute;a&nbsp;3(a)viii) du <a href="https://laws.justice.gc.ca/fra/reglements/DORS-2000-206/page-2.html#h-646299"><em>R&egrave;glement sur les mines et les usines de concentration d&rsquo;uranium</em></a></li>  </ul>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="2"></div>
<h2 id="sec2">2. Renseignements g&eacute;n&eacute;raux&nbsp;: Approche fond&eacute;e sur le cycle de vie</h2>  <p>La CCSN exige que le d&eacute;classement soit planifi&eacute; tout au long du cycle de vie de l&rsquo;installation nucl&eacute;aire ou de l&rsquo;activit&eacute; autoris&eacute;e.</p>  <p> La planification du d&eacute;classement durant le cycle de vie contribue &agrave; garantir que&nbsp;:</p>  <ul>
<li>l&rsquo;installation nucl&eacute;aire est con&ccedil;ue d&rsquo;une mani&egrave;re qui facilitera le d&eacute;classement</li>
<li>l&rsquo;installation nucl&eacute;aire est exploit&eacute;e ou l&rsquo;activit&eacute; autoris&eacute;e est r&eacute;alis&eacute;e d&rsquo;une mani&egrave;re qui facilitera le d&eacute;classement</li>
<li>la strat&eacute;gie de d&eacute;classement privil&eacute;gi&eacute;e est techniquement faisable et assure la sant&eacute;, la s&ucirc;ret&eacute; et la s&eacute;curit&eacute; du public et prot&egrave;ge l&rsquo;environnement</li>
<li>le titulaire de permis est capable de faire face aux co&ucirc;ts du d&eacute;classement</li>
<li>les probl&egrave;mes techniques potentiellement complexes ou difficiles sont d&eacute;cel&eacute;s suffisamment t&ocirc;t pour qu&rsquo;il soit possible de rechercher activement des solutions</li>
<li>le titulaire de permis peut continuer &agrave; exploiter des portions de l&rsquo;installation ou &agrave; r&eacute;aliser des portions de l&rsquo;activit&eacute; pendant l&rsquo;&eacute;valuation du d&eacute;classement</li>
<li>les quantit&eacute;s, les types et les cat&eacute;gories de d&eacute;chets qui seront g&eacute;n&eacute;r&eacute;s durant le d&eacute;classement sont estim&eacute;s</li>
<li>les dossiers sont tenus &agrave; jour</li>  </ul>  <p>La figure&nbsp;1 illustre les phases du d&eacute;classement et la chronologie approximative des principales t&acirc;ches. Les phases du d&eacute;classement sont les suivantes&nbsp;:</p>  <ul>
<li>planification du d&eacute;classement</li>
<li>pr&eacute;paration du d&eacute;classement</li>
<li>ex&eacute;cution du d&eacute;classement</li>
<li>ach&egrave;vement du d&eacute;classement</li>  </ul>  <p>Ces phases sont d&eacute;crites dans les sections 5 &agrave; 8 du pr&eacute;sent document d&rsquo;application de la r&eacute;glementation.</p>  <p><strong>Figure 1 : Phases du d&eacute;classement</strong></p>
<div className="module-poster">
<p><img src="/images/regdoc2-11-2/regdoc2-11-2-figure-1-fra.png" alt="Phases du d&eacute;classement" /></p>
</div>  </div>  <details>
<summary className="background-accent"><strong>Description de la figure 1</strong></summary>
<p>La figure&nbsp;1  illustre les phases du d&eacute;classement et la chronologie approximative des  principales t&acirc;ches. </p>
<p> La figure est un  rectangle horizontal s&eacute;par&eacute; en cinq colonnes. Chaque colonne repr&eacute;sente une des  phases du d&eacute;classement, qui sont&nbsp;:</p>
<ul>
<li>la planification  du d&eacute;classement</li>
<li>la  pr&eacute;paration du d&eacute;classement</li>
<li>l&rsquo;ex&eacute;cution  du d&eacute;classement</li>
<li>l&rsquo;ach&egrave;vement  du d&eacute;classement</li>
<li>le post-d&eacute;classement (s&rsquo;il y a lieu)</li>
</ul>
<p>Une barre temporelle horizontale para&icirc;t sous les noms des phases et  illustre les cycles de vie de l&rsquo;installation nucl&eacute;aire ou de l&rsquo;activit&eacute;  autoris&eacute;e.</p>
<p> Les deux premiers cycles sont &laquo;&nbsp;choix de l&rsquo;emplacement&nbsp;&raquo; et &laquo;  conception, construction et mise en service&nbsp;&raquo;. Ces cycles de vie se  d&eacute;roulent durant la phase de planification du d&eacute;classement. Le second cycle est  applicable uniquement aux installations de cat&eacute;gorie I.</p>
<p> Le troisi&egrave;me cycle, nomm&eacute; &ldquo;Exploitation&rdquo;, d&eacute;bute durant la phase de  planification du d&eacute;classement et se termine &agrave; la fin de la phase de pr&eacute;paration  du d&eacute;classement. </p>
<p> Le titulaire de permis informe la CCSN avant d&rsquo;arr&ecirc;ter l&rsquo;exploitation  d&rsquo;une installation de fa&ccedil;on permanente ou de cesser de g&eacute;rer, d&rsquo;avoir en sa  possession ou de stocker des substances nucl&eacute;aires. Lorsque l&rsquo;arr&ecirc;t d&eacute;finitif  survient, le d&eacute;tenteur de permis entame une transition entre le cycle d&rsquo;exploitation  et le cycle de d&eacute;classement.</p>
<p>Le dernier cycle, nomm&eacute; &laquo;&nbsp;d&eacute;classement&nbsp;&raquo; se d&eacute;roule durant la  phase l&rsquo;ex&eacute;cution du d&eacute;classement. Si le d&eacute;tenteur de permis a choisi le d&eacute;classement  diff&eacute;r&eacute; comme strat&eacute;gie de d&eacute;classement, la p&eacute;riode de stockage sous  surveillance aura lieu durant ce cycle.</p>
<p>Une seconde barre temporelle horizontale para&icirc;t au centre de la figure et  s&rsquo;intitule &laquo;&nbsp;Plans de d&eacute;classement&nbsp;&raquo;. Le premier plan, &laquo;&nbsp;l&rsquo;avant-projet  de d&eacute;classement &raquo;&nbsp;est pr&eacute;par&eacute; et soumis durant les phases de planification  et de pr&eacute;paration du d&eacute;classement. Le d&eacute;tenteur de permis pr&eacute;pare et soumet les  plans pour l&rsquo;arr&ecirc;t d&eacute;finitif, les activit&eacute;s de stabilisation, le d&eacute;classement  d&eacute;taill&eacute; et le stockage sous surveillance durant la phase de pr&eacute;paration du  d&eacute;classement.</p>
<p> Le second plan, le &laquo;&nbsp;plan de d&eacute;classement d&eacute;taill&eacute;&nbsp;&raquo;, est  pr&eacute;par&eacute; et soumis durant les phases d&rsquo;ex&eacute;cution et d&rsquo;ach&egrave;vement du  d&eacute;classement. Le d&eacute;tenteur de permis pr&eacute;pare et soumet le rapport d&rsquo;&eacute;tat final  durant la phase d&rsquo;ach&egrave;vement du d&eacute;classement.</p>
<p> Une troisi&egrave;me barre temporelle horizontale illustre les p&eacute;riodes o&ugrave; l&rsquo;installation  nucl&eacute;aire ou l&rsquo;activit&eacute; autoris&eacute;e est sous le contr&ocirc;le r&eacute;glementaire de la CCSN  et le moment de la lev&eacute;e de ce contr&ocirc;le r&eacute;glementaire. L&rsquo;installation nucl&eacute;aire  ou l&rsquo;activit&eacute; autoris&eacute;e maintien un permis de la CCSN durant les quatre  premi&egrave;res phases du d&eacute;classement. S&rsquo;il y a lieu, elle sera ensuite plac&eacute;e sous  un autre contr&ocirc;le r&eacute;glementaire pour la phase de post-d&eacute;classement.</p>  </details>  <p>Les &eacute;valuations des conditions radiologiques et non radiologiques avant et pendant le d&eacute;classement font partie int&eacute;grante des &eacute;tapes de planification et d&rsquo;ex&eacute;cution du d&eacute;classement. Dans la section 10, on d&eacute;crit la caract&eacute;risation du d&eacute;classement et les sondages effectu&eacute;s tout au long de ses &eacute;tapes vari&eacute;es.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3"></div>
<h2 id="sec3">3. Optimisation et approche graduelle</h2>  <p>Le titulaire de permis doit planifier et optimiser la protection et la s&ucirc;ret&eacute; des travailleurs, du public et de l&rsquo;environnement en pr&eacute;vision du d&eacute;classement.</p>  <p> Le titulaire de permis doit appliquer une approche graduelle &agrave; tous les aspects du d&eacute;classement, en tenant compte du type, de l&rsquo;&eacute;chelle, de la complexit&eacute;, de la maturit&eacute;, de l&rsquo;&eacute;tat physique, de l&rsquo;inventaire, de l&rsquo;incertitude et de la fiabilit&eacute; de l&rsquo;information, ainsi que du risque associ&eacute; au d&eacute;classement de l&rsquo;installation ou de l&rsquo;activit&eacute;.</p>  <p> L&rsquo;approche graduelle doit &ecirc;tre utilis&eacute;e de mani&egrave;re &agrave; ne pas compromettre la protection et la s&eacute;curit&eacute; des travailleurs, du public et de l&rsquo;environnement. Pour en savoir plus sur l&rsquo;approche graduelle, consultez le REGDOC-3.5.3, <em>Principes fondamentaux de r&eacute;glementation</em> <sup id="fnb2-ref"><a className="fn-lnk" href="#fnb2"><span className="wb-inv">Footnote </span>2</a></sup>.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4"></div>
<h2 id="sec4">4. Strat&eacute;gie de d&eacute;classement</h2>  <p>Le titulaire de permis doit choisir une strat&eacute;gie de d&eacute;classement qui servira de fondement &agrave; la planification du d&eacute;classement et permettra au projet d&rsquo;atteindre l&rsquo;&eacute;tat final d&eacute;sir&eacute;. Dans le cas des installations ainsi que des mines et usines de concentration d&rsquo;uranium, la strat&eacute;gie de d&eacute;classement doit &ecirc;tre choisie au d&eacute;but du cycle de vie de l&rsquo;installation.</p>  <p>Les strat&eacute;gies de d&eacute;classement suivantes devraient &ecirc;tre utilis&eacute;es seules ou combin&eacute;es&nbsp;:</p>  <ul className="list-lower-alpha">
<li>d&eacute;classement imm&eacute;diat (rapide)&nbsp;: d&eacute;contamination et d&eacute;mant&egrave;lement sans d&eacute;lais pr&eacute;vus dans l&rsquo;ex&eacute;cution</li>
<li>d&eacute;classement diff&eacute;r&eacute;&nbsp;: p&eacute;riode de stockage sous surveillance, suivie d&rsquo;une d&eacute;contamination et d&rsquo;un d&eacute;mant&egrave;lement, ou activit&eacute;s visant &agrave; placer certains b&acirc;timents ou certaines installations dans un &eacute;tat final int&eacute;rimaire s&ucirc;r et s&eacute;curitaire, suivies d&rsquo;une p&eacute;riode de stockage sous surveillance, et ultimement d&rsquo;une d&eacute;contamination et d&rsquo;un d&eacute;mant&egrave;lement</li>
<li>d&eacute;classement in situ&nbsp;: activit&eacute;s visant &agrave; placer l&rsquo;installation, en tout ou en partie, dans un &eacute;tat s&ucirc;r et s&eacute;curitaire, pour lequel certains ou l&rsquo;ensemble des contaminants radioactifs sont &eacute;vacu&eacute;s sur place, ce qui peut conduire &agrave; la cr&eacute;ation d&rsquo;une aire d&rsquo;&eacute;vacuation des d&eacute;chets</li>  </ul>  <p>Lorsque le d&eacute;classement in situ entra&icirc;ne la cr&eacute;ation d&rsquo;une aire d&rsquo;&eacute;vacuation des d&eacute;chets, le titulaire de permis doit satisfaire &agrave; toutes les exigences r&eacute;glementaires relatives aux installations d&rsquo;&eacute;vacuation des d&eacute;chets radioactifs et produire un dossier de s&ucirc;ret&eacute; et une &eacute;valuation de la s&ucirc;ret&eacute; post-fermeture pour d&eacute;montrer la s&ucirc;ret&eacute; de l&rsquo;installation. Pour en savoir plus sur le dossier de s&ucirc;ret&eacute; et l&rsquo;&eacute;valuation de la s&ucirc;ret&eacute;, consultez le projet de document d&rsquo;application de la r&eacute;glementation REGDOC-2.11.1, <em>Gestion des d&eacute;chets, tome&nbsp;III&nbsp;: Dossier de s&ucirc;ret&eacute; pour la gestion &agrave; long terme des d&eacute;chets radioactifs, </em>Version 2 <sup id="fnb3-ref"><a className="fn-lnk" href="#fnb3"><span className="wb-inv">Footnote </span>3</a></sup>. Si les d&eacute;chets poss&egrave;dent d&rsquo;autres propri&eacute;t&eacute;s dangereuses, le titulaire de permis doit s&rsquo;assurer que le dossier de s&ucirc;ret&eacute; et l&rsquo;&eacute;valuation de la s&ucirc;ret&eacute; connexe en tiennent compte et que le tout est conforme aux exigences r&eacute;glementaires applicables.</p>  <p>Le d&eacute;classement in situ est une strat&eacute;gie accept&eacute;e et  acceptable pour les mines et les usines de concentration d&rsquo;uranium. Le  <a href="http://www.nuclearsafety.gc.ca/fra/acts-and-regulations/regulatory-documents/published/html/regdoc2-11-1-v2/index">REGDOC-2.11.1, <em>Gestion des d&eacute;chets, tome II : Gestion des st&eacute;riles des mines d&rsquo;uranium et des r&eacute;sidus des usines de concentration  d&rsquo;uranium</em></a> <sup id="fnb4y-ref"><a className="fn-lnk" href="#fnb4"><span className="wb-inv">Footnote </span>4</a></sup> contient des exigences et des recommandations suppl&eacute;mentaires  relatives &agrave; la gestion des d&eacute;chets dans les mines et usines de concentration d&rsquo;uranium. Il peut &eacute;galement &ecirc;tre consid&eacute;r&eacute;  comme une solution viable dans des circonstances exceptionnelles (p. ex., apr&egrave;s  un accident grave) ou pour les sites h&eacute;rit&eacute;s dont le d&eacute;classement n&rsquo;a pas &eacute;t&eacute;  pr&eacute;vu durant la conception (p. ex., dans les situations o&ugrave; le combustible a &eacute;t&eacute;  retir&eacute; et o&ugrave; l&rsquo;utilisation in situ prot&eacute;gera les travailleurs, le public et  l&rsquo;environnement), et qui demeureront sous contr&ocirc;le institutionnel jusqu&rsquo;&agrave;  nouvel ordre. Conform&eacute;ment aux pratiques exemplaires internationales, le  d&eacute;classement in situ ne devrait pas &ecirc;tre consid&eacute;r&eacute; comme une option raisonnable  lorsqu&rsquo;il est faisable de proc&eacute;der &agrave; l&rsquo;enl&egrave;vement.</p>  <p> Remarque&nbsp;: Au Canada, le terme &laquo;&nbsp;site h&eacute;rit&eacute;&nbsp;&raquo; d&eacute;signe sp&eacute;cifiquement les installations de recherche et de d&eacute;monstration ou les installations construites lorsque les technologies nucl&eacute;aires ont &eacute;merg&eacute; au pays et dont le d&eacute;classement n&rsquo;a pas &eacute;t&eacute; pr&eacute;vu durant la conception.</p>  <p>Le titulaire de permis doit justifier la strat&eacute;gie choisie et devrait fournir une comparaison avec d&rsquo;autres strat&eacute;gies de d&eacute;classement. La m&eacute;thode d&rsquo;&eacute;valuation utilis&eacute;e pour choisir la strat&eacute;gie de d&eacute;classement devrait favoriser la comparaison objective, syst&eacute;matique et tra&ccedil;able des avantages et inconv&eacute;nients relatifs des autres strat&eacute;gies.  </p>  <p>Pour choisir la bonne strat&eacute;gie de d&eacute;classement, le titulaire de permis devrait prendre en consid&eacute;ration les facteurs suivants, s&rsquo;il y a lieu&nbsp;:</p>  <ul>
<li>mobilisation du public et des Autochtones</li>
<li>incidence potentielle sur les droits ancestraux ou issus de trait&eacute;s des peuples autochtones</li>
<li>recours &agrave; l&rsquo;exp&eacute;rience en exploitation et aux le&ccedil;ons apprises</li>
<li>formes et caract&eacute;ristiques des contaminants radioactifs et dangereux</li>
<li>int&eacute;grit&eacute; des barri&egrave;res de confinement et des autres structures, syst&egrave;mes et composants au fil du temps</li>
<li>accessibilit&eacute; des technologies de d&eacute;contamination et de d&eacute;montage</li>
<li>potentiel de recyclage ou de r&eacute;utilisation de l&rsquo;&eacute;quipement et des mat&eacute;riaux</li>
<li>acc&egrave;s &agrave; du personnel qualifi&eacute;</li>
<li>impacts environnementaux potentiels</li>
<li>doses radiologiques potentiellement transmises aux travailleurs et au public</li>
<li>&eacute;tat final vis&eacute; et plans de r&eacute;am&eacute;nagement du site</li>
<li>revenus potentiels, co&ucirc;ts et financement disponible</li>
<li>acc&egrave;s &agrave; des installations de gestion des d&eacute;chets et disponibilit&eacute; d&rsquo;une capacit&eacute; d&rsquo;&eacute;vacuation</li>
<li>acc&egrave;s &agrave; une installation d&rsquo;&eacute;vacuation du combustible, si n&eacute;cessaire</li>
<li>tout autre facteur politique, social ou &eacute;conomique</li>
<li>interd&eacute;pendances avec d&rsquo;autres installations ou infrastructures sur le m&ecirc;me site</li>
<li>assurance du maintien d&rsquo;une configuration s&ucirc;re en tout temps</li>
<li>principes de radioprotection, de justification, d&rsquo;optimisation et d&rsquo;application des limites de dose</li>  </ul>  <p>La strat&eacute;gie de d&eacute;classement devrait &ecirc;tre r&eacute;vis&eacute;e et mise &agrave; jour dans les circonstances suivantes&nbsp;: </p>  <ul>
<li>changement d&rsquo;&eacute;tat du site, incident ou &eacute;v&eacute;nement ayant des cons&eacute;quences r&eacute;elles sur le d&eacute;classement</li>
<li>modification des objectifs de d&eacute;classement propos&eacute;s</li>
<li>modification de la structure de propri&eacute;t&eacute; ou de gestion</li>
<li>avanc&eacute;e des technologies de d&eacute;classement</li>
<li>modifications consid&eacute;rables apport&eacute;es &agrave; l&rsquo;installation</li>
<li>mise &agrave; jour des renseignements sur l&rsquo;&eacute;ch&eacute;ancier, les co&ucirc;ts et le financement</li>
<li>exp&eacute;rience en exploitation et le&ccedil;ons apprises</li>
<li>r&eacute;vision des exigences r&eacute;glementaires</li>
<li>acc&egrave;s &agrave; une installation de gestion du combustible us&eacute; et des d&eacute;chets radioactifs</li>  </ul>  <p>Si l&rsquo;installation est mise &agrave; l&rsquo;arr&ecirc;t de mani&egrave;re soudaine, il faut examiner la strat&eacute;gie de d&eacute;classement en fonction de la situation &agrave; l&rsquo;origine de cet arr&ecirc;t soudain pour d&eacute;terminer si elle doit &ecirc;tre modifi&eacute;e.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="5"></div>
<h2 id="sec5">5.	Planification du d&eacute;classement</h2>  <p>Lorsqu&rsquo;une condition de permis l&rsquo;exige, le titulaire de permis doit maintenir une garantie financi&egrave;re acceptable aux yeux de la CCSN pour le d&eacute;classement. Des renseignements sur les garanties financi&egrave;res se trouvent dans le REGDOC-3.3.1, <em>Garanties financi&egrave;res</em>&nbsp;<sup id="fnb5n-ref"><a className="fn-lnk" href="#fnb5"><span className="wb-inv">Footnote </span>5</a></sup>. </p><p>  Le titulaire de permis doit &eacute;laborer une strat&eacute;gie de gestion des d&eacute;chets qui fait mention des cat&eacute;gories et des quantit&eacute;s estimatives de tous les flux de d&eacute;chets qui seront produits au cours du d&eacute;classement, et qui d&eacute;finit la voie d&rsquo;&eacute;limination pr&eacute;vue conform&eacute;ment aux dispositions du REGDOC-2.11.1, <em>Gestion des d&eacute;chets, tome I&nbsp;: Gestion des d&eacute;chets radioactifs </em> <sup id="fnb6n-ref"><a className="fn-lnk" href="#fnb6"><span className="wb-inv">Footnote </span>6</a></sup>. La strat&eacute;gie de gestion des d&eacute;chets peut &ecirc;tre pr&eacute;sent&eacute;e comme un document autonome ou faire partie de l&rsquo;avant-projet de d&eacute;classement.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="5.1"></div>
<h3 id="sec5-1">5.1	Avant-projet de d&eacute;classement</h3>  <p>Le titulaire de permis doit pr&eacute;parer un avant-projet de d&eacute;classement et le soumettre &agrave; l&rsquo;approbation de la CCSN le plus t&ocirc;t possible au cours du cycle de vie de l&rsquo;installation ou pendant la r&eacute;alisation de l&rsquo;activit&eacute; autoris&eacute;e. L&rsquo;avant-projet de d&eacute;classement doit documenter les conditions post&eacute;rieures &agrave; l&rsquo;exploitation, la strat&eacute;gie de d&eacute;classement retenue, les engagements en mati&egrave;re de surveillance et de contr&ocirc;les radiologiques, la strat&eacute;gie de gestion des d&eacute;chets, l&rsquo;estimation des co&ucirc;ts et les dispositions relatives aux garanties financi&egrave;res. </p>  <p> Le titulaire de permis doit mettre &agrave; jour l&rsquo;avant-projet de d&eacute;classement et le soumettre &agrave; la CCSN tous les cinq ans ou &agrave; la demande de la CCSN. L&rsquo;avant-projet de d&eacute;classement devrait &ecirc;tre mis &agrave; jour &agrave; la lumi&egrave;re des consid&eacute;rations &eacute;nonc&eacute;es &agrave; la fin de la section 4. </p>  <p> Le titulaire de permis peut envisager de subdiviser un site ou une installation complexe en un certain nombre de projets de d&eacute;classement relativement ind&eacute;pendants. Par exemple, une grande installation peut &ecirc;tre partag&eacute;e en zones (c.-&agrave;-d. en enveloppes de planification) d&rsquo;une ind&eacute;pendance physique relative les unes par rapport aux autres sur le plan du d&eacute;classement. </p>  <p> Pour les sites comptant plus d&rsquo;une installation, le titulaire du permis doit soumettre &agrave; l&rsquo;approbation de la CCSN un avant-projet de d&eacute;classement pour l&rsquo;ensemble du site. En pareil cas, l&rsquo;avant-projet de d&eacute;classement soumis doit tenir compte de toutes les enveloppes de planification. L&rsquo;avant-projet de d&eacute;classement du site et les avant-projets de d&eacute;classement propres aux installations tiendraient &eacute;galement compte de la s&eacute;quence d&rsquo;ex&eacute;cution des enveloppes de planification et de toute interd&eacute;pendance. </p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="5.1.1"></div>
<h4 id="sec5-1-1">5.1.1	Contenu de l&rsquo;avant-projet de d&eacute;classement</h4>  <p>Un avant-projet de d&eacute;classement pour une installation nucl&eacute;aire poss&eacute;dant un permis de cat&eacute;gorie&nbsp;I ou de mine et d&rsquo;usine de concentration d&rsquo;uranium doit comprendre&nbsp;:</p>  <ul>
<li>la description de l&rsquo;emplacement de l&rsquo;installation, y compris&nbsp;:
<ul>
<li>une carte de l&rsquo;installation et de ses caract&eacute;ristiques</li>
<li>l&rsquo;information g&eacute;ographique</li>
<li>les d&eacute;tails au sujet du milieu environnant</li>
<li>l&rsquo;utilisation des terres</li>
<li>des illustrations et des cartes de l&rsquo;installation par rapport &agrave; la municipalit&eacute;</li>
</ul>
</li>
<li>le but et la description de l&rsquo;installation, y compris&nbsp;:
<ul>
<li>les principaux composants et syst&egrave;mes</li>
<li>le type et la construction des b&acirc;timents, y compris l&rsquo;emplacement des mat&eacute;riaux de construction dangereux (p. ex., l&rsquo;amiante, les biph&eacute;nyles polychlor&eacute;s)</li>
<li>les services fonctionnels (p. ex., l&rsquo;alimentation &eacute;lectrique, le chauffage, la ventilation, les &eacute;gouts, l&rsquo;eau et la protection-incendie)</li>
<li>les laboratoires et les autres zones de manutention dangereuses</li>
<li>le type, la quantit&eacute; et la forme des mati&egrave;res radioactives ou dangereuses stock&eacute;es, produites ou utilis&eacute;es durant l&rsquo;exploitation</li>
<li>les caract&eacute;ristiques nominales utilis&eacute;es pour r&eacute;duire la propagation de la contamination et faciliter la d&eacute;contamination et le d&eacute;mant&egrave;lement</li>
</ul>
</li>
<li>les conditions post&eacute;rieures &agrave; l&rsquo;exploitation, y compris&nbsp;:
<ul>
<li>le r&eacute;sum&eacute; du processus d&rsquo;arr&ecirc;t, y compris l&rsquo;enl&egrave;vement planifi&eacute; des mati&egrave;res dangereuses en inventaire</li>
<li>la nature et l&rsquo;&eacute;tendue pr&eacute;vues de la contamination restante dans les syst&egrave;mes et les composants primaires (sous forme de liste ou de tableau avec renvoi aux illustrations pertinentes)</li>
<li>la nature et l&rsquo;&eacute;tendue pr&eacute;vues de la contamination sur les planchers, les murs, les surfaces de travail, les syst&egrave;mes de ventilation, etc.</li>
<li>un aper&ccedil;u des principales conditions chimiques pr&eacute;vues</li>
<li>la mention des enveloppes de planification distinctes</li>
</ul>
</li>
<li>la strat&eacute;gie de d&eacute;classement, y compris&nbsp;:
<ul>
<li>l&rsquo;objectif en mati&egrave;re d&rsquo;&eacute;tat final</li>
<li>la justification&nbsp;:
<ul>
<li>de la strat&eacute;gie de d&eacute;classement retenue</li>
<li>des &eacute;tats finaux provisoires</li>
<li>des p&eacute;riodes de stockage avec surveillance</li>
</ul>
</li>
<li>les contr&ocirc;les institutionnels</li>
<li>l&rsquo;&eacute;valuation des strat&eacute;gies de rechange (ou la justification de la raison pour laquelle il n&rsquo;existe pas de solution de rechange ou qu&rsquo;aucune solution de rechange ne peut &ecirc;tre envisag&eacute;e)</li>
</ul>
</li>
<li>la structure de r&eacute;partition du travail, y compris&nbsp;:
<ul>
<li>le r&eacute;sum&eacute; des principales &eacute;tapes de la d&eacute;contamination, du d&eacute;mant&egrave;lement et de l&rsquo;enl&egrave;vement de chacun des syst&egrave;mes, pr&eacute;f&eacute;rablement regroup&eacute;s en ensembles de t&acirc;ches (Remarque&nbsp;: le nombre et l&rsquo;envergure des ensembles de t&acirc;ches varient en fonction de l&rsquo;emplacement des principaux risques pr&eacute;vus au cours du processus de d&eacute;classement; les zones &agrave; risque plus &eacute;lev&eacute; devraient &ecirc;tre repr&eacute;sent&eacute;es par une r&eacute;partition plus d&eacute;taill&eacute;e des ensembles de t&acirc;ches)</li>
<li>pour chaque ensemble de t&acirc;ches, la mention des types d&rsquo;activit&eacute;s qui pourraient pr&eacute;senter un danger important pour les travailleurs, le public ou l&rsquo;environnement</li>
<li>les proc&eacute;dures d&rsquo;exploitation normalis&eacute;es utilis&eacute;es pour la radioprotection, la manutention des mati&egrave;res dangereuses, la s&eacute;curit&eacute; industrielle et la protection de l&rsquo;environnement dans la gestion des dangers</li>
<li>les activit&eacute;s pr&eacute;cises pour lesquelles des mesures suppl&eacute;mentaires de protection ou d&rsquo;att&eacute;nuation seront requises au stade de la planification d&eacute;taill&eacute;e</li>
<li>le r&eacute;sum&eacute; du d&eacute;mant&egrave;lement final des structures</li>
<li>un calendrier conceptuel montrant l&rsquo;ann&eacute;e approximative de la mise &agrave; l&rsquo;arr&ecirc;t de l&rsquo;installation ainsi que l&rsquo;ordonnancement et la dur&eacute;e approximative des ensembles de travaux de d&eacute;classement et, le cas &eacute;ch&eacute;ant, des p&eacute;riodes de stockage</li>
</ul>
</li>
<li>les engagements en mati&egrave;re de surveillance et de contr&ocirc;les radiologiques, y compris :
<ul>
<li>un programme de contr&ocirc;les p&eacute;riodiques de la contamination et la consignation des &eacute;v&eacute;nements de contamination durant l&rsquo;exploitation de l&rsquo;installation</li>
<li>l&rsquo;engagement &agrave; &eacute;laborer des plans et des protocoles acceptables pour la CCSN au stade de planification d&eacute;taill&eacute;e, relativement &agrave; la surveillance&nbsp;:
<ul>
<li>des risques durant le d&eacute;classement</li>
<li>de la dosim&eacute;trie du personnel</li>
<li>des &eacute;missions dans l&rsquo;environnement et des effluents</li>
<li>des mat&eacute;riaux, des sites et des structures &agrave; lib&eacute;rer du contr&ocirc;le r&eacute;glementaire</li>
</ul>
</li>
<li>une strat&eacute;gie de gestion des d&eacute;chets pr&eacute;cisant&nbsp;:
<ul>
<li>les quantit&eacute;s approximatives et les caract&eacute;ristiques des d&eacute;chets radioactifs ou chimiquement dangereux qui pourraient d&eacute;couler du d&eacute;classement (li&eacute;es &agrave; des ensembles de t&acirc;ches d&eacute;termin&eacute;s, si possible)</li>
<li>l&rsquo;&eacute;limination finale pr&eacute;vue des mati&egrave;res radioactives ou chimiquement dangereuses</li>
<li>l&rsquo;engagement &agrave; s&eacute;parer le plus de mat&eacute;riaux possibles pour r&eacute;utilisation ou recyclage</li>
</ul>
</li>
<li>l&rsquo;engagement &agrave; pr&eacute;parer un plan de d&eacute;classement d&eacute;taill&eacute; (PDD) aux fins d&rsquo;approbation par la CCSN avant le d&eacute;mant&egrave;lement et la d&eacute;molition</li>
<li>l&rsquo;engagement de r&eacute;viser et &agrave; mettre &agrave; jour p&eacute;riodiquement l&rsquo;avant-projet de d&eacute;classement, conform&eacute;ment &agrave; la section&nbsp;5.1</li>
<li>l&rsquo;&eacute;tat physique de l&rsquo;installation&nbsp;:
<ul>
<li>&agrave; la fin de l&rsquo;exploitation</li>
<li>au d&eacute;but du d&eacute;classement</li>
</ul>
</li>
<li>les dossiers requis pour le d&eacute;classement, y compris la description des dossiers d&rsquo;exploitation de l&rsquo;installation qui seront conserv&eacute;s pour permettre la mise &agrave; jour p&eacute;riodique de l&rsquo;avant-projet de d&eacute;classement et la pr&eacute;paration du ou des PDD</li>
<li>un plan de consultation publique, y compris un programme d&rsquo;information publique et des avenues pour la participation du public, conforme aux exigences et &agrave; l&rsquo;orientation du REGDOC-3.2.1, <em>L&rsquo;information et la divulgation publiques</em> <sup id="fnb7m-ref"><a className="fn-lnk" href="#fnb7"><span className="wb-inv">Footnote </span>7</a></sup></li>
<li>un plan de mobilisation des Autochtones conforme aux exigences et &agrave; l&rsquo;orientation du REGDOC-3.2.2, <em>Mobilisation des Autochtones</em> <sup id="fnb8-ref"><a className="fn-lnk" href="#fnb8"><span className="wb-inv">Footnote </span>8</a></sup></li>
<li>le co&ucirc;t et une garantie financi&egrave;re, pr&eacute;cisant&nbsp;:
<ul>
<li>l&rsquo;estimation du co&ucirc;t en valeur actuelle du d&eacute;classement</li>
<li>un fondement raisonnable pour la fa&ccedil;on dont les co&ucirc;ts estimatifs ont &eacute;t&eacute; &eacute;tablis <br/>
Remarque&nbsp;: le co&ucirc;t et la garantie financi&egrave;re pourraient faire partie int&eacute;grant de l&rsquo;avant-projet de d&eacute;classement ou &ecirc;tre conserv&eacute;s comme un document autonome</li>
<li>les caract&eacute;ristiques du milieu naturel et social environnant qui pourrait &ecirc;tre gravement touch&eacute; par le processus de d&eacute;classement</li>
</ul>
</li>
</ul>
</li>  </ul>  <p>Les titulaires de permis de d&eacute;chets de substances nucl&eacute;aires peuvent consulter la liste ci&#8209;dessus &agrave; titre indicatif, selon une approche graduelle.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="5.1.2"></div>
<h4 id="sec5-1-2">5.1.2	Incertitude</h4>  <p>Le titulaire de permis devrait d&eacute;crire toutes les incertitudes li&eacute;es &agrave; l&rsquo;avant-projet de d&eacute;classement. Il peut y avoir des incertitudes importantes &agrave; l&rsquo;&eacute;tape de la planification pr&eacute;liminaire du d&eacute;classement, en particulier lorsque le d&eacute;classement n&rsquo;est pas pr&eacute;vu avant plusieurs d&eacute;cennies, l&rsquo;installation comporte des activit&eacute;s tr&egrave;s complexes et l&rsquo;&eacute;volution des exigences r&eacute;glementaires, des technologies et des services de gestion des d&eacute;chets est inconnue.</p>  <p> L&rsquo;avant-projet de d&eacute;classement devrait &ecirc;tre fond&eacute; sur les meilleures donn&eacute;es et pr&eacute;visions prudentes disponibles et tenir compte de tout probl&egrave;me particulier advenant la fermeture pr&eacute;matur&eacute;e d&rsquo;une installation. L&rsquo;avant-projet de d&eacute;classement peut subir des am&eacute;liorations au fil du temps, &agrave; mesure que l&rsquo;&eacute;tape de d&eacute;classement approche et que les incertitudes diminuent. </p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6"></div>
<h2 id="sec6">6.	Pr&eacute;paration en vue du d&eacute;classement </h2>  <p>Pendant la phase de pr&eacute;paration en vue du d&eacute;classement, le titulaire de permis doit examiner et r&eacute;viser, le cas &eacute;ch&eacute;ant, tous les documents du programme pour s&rsquo;assurer qu&rsquo;ils correspondent aux activit&eacute;s de d&eacute;classement.</p><p>  Le titulaire de permis doit informer la CCSN par &eacute;crit avant d&rsquo;arr&ecirc;ter l&rsquo;exploitation d&rsquo;une installation de fa&ccedil;on permanente ou de cesser de g&eacute;rer, d&rsquo;avoir en sa possession ou de stocker des substances nucl&eacute;aires. </p><p>  Avant l&rsquo;arr&ecirc;t permanent d&rsquo;une installation ou avant de cesser de g&eacute;rer, d&rsquo;avoir en sa possession ou de stocker des substances nucl&eacute;aires, le titulaire de permis devrait discuter, avec la CCSN, du moment o&ugrave; doit avoir lieu le d&eacute;classement, des activit&eacute;s de d&eacute;classement propos&eacute;es, des r&egrave;glements et des orientations applicables, ainsi que des demandes pertinentes de la CCSN. </p><p>  Pour les installations nucl&eacute;aires ayant un permis de cat&eacute;gorie I ou de mine et usine de concentration d&rsquo;uranium, le titulaire de permis doit pr&eacute;parer les documents suivants et les soumettre &agrave; l&rsquo;approbation du personnel de la CCSN&nbsp;: </p>  <ul>   <li>un plan d&rsquo;arr&ecirc;t permanent, qui comprend les &eacute;tapes &agrave; suivre pour faire passer l&rsquo;installation de l&rsquo;exploitation &agrave; l&rsquo;&eacute;tat d&rsquo;arr&ecirc;t permanent</li>   <li>un plan d&rsquo;activit&eacute;s de stabilisation, qui comprend les &eacute;tapes &agrave; suivre pour faire passer l&rsquo;installation de l&rsquo;&eacute;tat d&rsquo;arr&ecirc;t permanent &agrave; l&rsquo;&eacute;tat stable</li>   <li>un PDD &ndash; voir la section 6.2</li>  </ul>  <p>Plus pr&eacute;cis&eacute;ment, la stabilisation d&rsquo;installations dot&eacute;es de r&eacute;acteurs comprend les principales activit&eacute;s suivantes&nbsp;: le d&eacute;chargement du combustible du r&eacute;acteur, le drainage et le stockage de l&rsquo;eau de refroidissement des principaux syst&egrave;mes du r&eacute;acteur, le drainage de l&rsquo;eau des syst&egrave;mes de refroidissement secondaires et auxiliaires, le nettoyage et la d&eacute;contamination, le maintien du refroidissement des piscines de stockage du combustible us&eacute;, le transfert du combustible us&eacute; vers l&rsquo;aire de stockage &agrave; sec, la modification des programmes et des conditions d&rsquo;exploitation afin qu&rsquo;ils correspondent &agrave; l&rsquo;&eacute;tat de l&rsquo;installation, la r&eacute;alisation de contr&ocirc;les radiologiques rigoureux et le maintien de la surveillance r&eacute;guli&egrave;re de l&rsquo;installation. </p><p>   Selon le permis propre au site et en consultation avec la CCSN, les activit&eacute;s de stabilisation peuvent &ecirc;tre r&eacute;alis&eacute;es en vertu d&rsquo;un permis d&rsquo;exploitation ou de d&eacute;classement d&eacute;livr&eacute; par la CCSN, selon la fa&ccedil;on dont le titulaire de permis effectue la transition de l&rsquo;exploitation au d&eacute;classement de l&rsquo;installation.</p><p>   L&rsquo;avis d&rsquo;arr&ecirc;t permanent d&rsquo;une installation devrait &ecirc;tre pr&eacute;sent&eacute;&nbsp;:</p>  <ul>   <li>au moins deux ans avant l&rsquo;arr&ecirc;t pr&eacute;vu d&rsquo;une installation de cat&eacute;gorie I et d&rsquo;une mine et usine de concentration d&rsquo;uranium</li>   <li>d&egrave;s que possible pour l&rsquo;arr&ecirc;t impr&eacute;vu d&rsquo;une installation de cat&eacute;gorie I et d&rsquo;une mine et usine de concentration d&rsquo;uranium</li>  </ul>  <p>Pour les titulaires de permis de d&eacute;chets de substances nucl&eacute;aires, l&rsquo;avis de cessation de gestion, de possession ou de stockage de substances nucl&eacute;aires devrait &ecirc;tre pr&eacute;sent&eacute; le plus t&ocirc;t possible.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.1"></div>
<h3 id="sec6-1">6.1	Plan de stockage sous surveillance</h3>  <p>Pour ce qui est du d&eacute;classement diff&eacute;r&eacute;, tel qu&rsquo;il est d&eacute;crit &agrave; la section 4, les titulaires de permis d&rsquo;installations de cat&eacute;gorie I et de mines et usines de concentration d&rsquo;uranium doivent pr&eacute;parer et soumettre &agrave; l&rsquo;approbation de la CCSN, en plus du PDD, un plan de stockage sous surveillance. Ce plan peut &ecirc;tre pr&eacute;sent&eacute; comme document autonome ou faire partie du PDD, et il devrait &ecirc;tre mis &agrave; jour au besoin et pr&eacute;sent&eacute; &agrave; la CCSN tous les cinq ans pendant toute la dur&eacute;e de la phase de stockage sous surveillance ou selon les besoins de la CCSN. Le plan de stockage sous surveillance devrait d&eacute;crire :</p>  <ul>
<li>les responsabilit&eacute;s</li>
<li>les services et syst&egrave;mes fonctionnels</li>
<li>l&rsquo;entretien, l&rsquo;inspection et la surveillance</li>
<li>l&rsquo;identification des dangers dans les b&acirc;timents</li>
<li>les mesures de contr&ocirc;le des dangers</li>
<li>les activit&eacute;s envisag&eacute;es ou pr&eacute;vues pour r&eacute;duire les risques</li>
<li>le contr&ocirc;le d&rsquo;acc&egrave;s et le zonage</li>
<li>les mesures de contr&ocirc;le et de protection de l&rsquo;environnement</li>
<li>le plan et les proc&eacute;dures d&rsquo;urgence</li>
<li>les limites d&rsquo;utilisation durant le stockage sous surveillance</li>
<li>le processus de changement ou de modification de l&rsquo;installation</li>
<li>la gestion des d&eacute;chets</li>
<li>l&rsquo;assurance de la qualit&eacute;</li>
<li>le programme de qualification et de formation</li>
<li>les dossiers</li>  </ul>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.2"></div>
<h3 id="sec6-2">6.2	Plan de d&eacute;classement d&eacute;taill&eacute;</h3>  <p>Avant la r&eacute;alisation des activit&eacute;s de d&eacute;classement, le titulaire de permis doit pr&eacute;parer un PDD et le soumettre &agrave; l&rsquo;approbation de la CCSN. Le PDD ajoute et pr&eacute;cise les d&eacute;tails de l&rsquo;avant-projet de d&eacute;classement. Le PDD devrait pr&eacute;senter les objectifs relatifs &agrave; l&rsquo;&eacute;tat final; la description des contr&ocirc;les institutionnels n&eacute;cessaires; la strat&eacute;gie de d&eacute;classement; le plan de gestion des d&eacute;chets, les effets environnementaux potentiels, l&rsquo;estimation des co&ucirc;ts et les dispositions relatives aux garanties financi&egrave;res. Une fois approuv&eacute; par la CCSN, le PDD sera int&eacute;gr&eacute; &agrave; un permis autorisant le d&eacute;classement. </p>  <p> Si l&rsquo;arr&ecirc;t permanent de l&rsquo;installation n&rsquo;est pas pr&eacute;vu, l&rsquo;installation doit &ecirc;tre mise en &eacute;tat d&rsquo;arr&ecirc;t s&ucirc;r par le titulaire de permis, aux termes d&rsquo;un permis appropri&eacute;. Si l&rsquo;arr&ecirc;t permanent a lieu avant qu&rsquo;un PDD ait &eacute;t&eacute; pr&eacute;par&eacute; et approuv&eacute;, le titulaire de permis doit en pr&eacute;parer un le plus t&ocirc;t possible. </p>  <p> En ce qui concerne le d&eacute;classement diff&eacute;r&eacute;, le PDD doit &ecirc;tre r&eacute;vis&eacute; et soumis &agrave; l&rsquo;approbation de la CCSN avant l&rsquo;ex&eacute;cution du d&eacute;classement et doit d&eacute;crire en d&eacute;tail les travaux de d&eacute;mant&egrave;lement &agrave; effectuer. Lorsque les activit&eacute;s de d&eacute;classement prennent plus de cinq ans, le PDD devrait &ecirc;tre mis &agrave; jour tous les cinq ans.</p>  <p> Le PDD devrait &ecirc;tre r&eacute;vis&eacute; et mis &agrave; jour &agrave; la lumi&egrave;re des incidents ou des &eacute;v&eacute;nements ayant des cons&eacute;quences pour le d&eacute;classement, des exigences r&eacute;glementaires r&eacute;vis&eacute;es, de l&rsquo;exp&eacute;rience en exploitation et des le&ccedil;ons apprises, ainsi que des avanc&eacute;es technologiques concernant le d&eacute;classement.</p>  Pour ce qui est des sites qui se pr&eacute;parent au d&eacute;classement de plus d&rsquo;une installation, les titulaires du permis doivent soumettre &agrave; l&rsquo;approbation de la CCSN un PDD de l&rsquo;ensemble du site. En pareil cas, le PDD soumis devrait tenir compte de toutes les enveloppes de planification. Le PDD du site et les PDD propres aux installations tiendraient &eacute;galement compte de la s&eacute;quence d&rsquo;ex&eacute;cution des enveloppes de planification et de toute interd&eacute;pendance.
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.2.1"></div>
<h4 id="sec6-2-1">6.2.1	Contenu du plan de d&eacute;classement d&eacute;taill&eacute;</h4>  <p>Un plan de d&eacute;classement d&eacute;taill&eacute; pour une installation nucl&eacute;aire poss&eacute;dant un permis de cat&eacute;gorie&nbsp;I ou de mine et d&rsquo;usine de concentration d&rsquo;uranium doit comprendre&nbsp;:</p>  <ul>
<li>une description accompagn&eacute;e d&rsquo;un sch&eacute;ma montrant les zones, composants et structures qui feront partie du d&eacute;classement, ceux-ci &eacute;tant group&eacute;s, s&rsquo;il y a lieu, en enveloppes de planification logiques</li>
<li>un historique de l&rsquo;exploitation ainsi que les incidents ou accidents pouvant nuire au d&eacute;classement</li>
<li>le plan de stockage sous surveillance devrait d&eacute;crire :
<ul>
<li>les services fonctionnels des b&acirc;timents</li>
<li>les activit&eacute;s de contr&ocirc;le et de surveillance</li>
<li>les activit&eacute;s d&rsquo;inspection</li>
<li>les limites d&rsquo;utilisation durant le stockage sous surveillance</li>
</ul>
</li>
<li>les objectifs relatifs &agrave; l&rsquo;&eacute;tat final d&eacute;finitif sur le plan radiologique, physique et chimique. Lorsque plus d&rsquo;un PDD est requis dans un programme par &eacute;tape, des objectifs d&rsquo;&eacute;tats finaux int&eacute;rimaires et des programmes de surveillance pour les p&eacute;riodes de report doivent &ecirc;tre fournis pour chaque plan d&eacute;taill&eacute;, p. ex., des programmes de gestion du vieillissement, de protection contre le rayonnement et de protection de l&rsquo;environnement</li>
<li>la description des besoins relatifs aux contr&ocirc;les institutionnels</li>
<li>les r&eacute;sultats de contr&ocirc;les complets et syst&eacute;matiques concernant les conditions radiologiques et les autres conditions de dangers &eacute;ventuels sur les lieux de l&rsquo;installation, y compris l&rsquo;identification et la description de toutes les lacunes ou incertitudes qui pourraient rester dans la mesure ou la pr&eacute;vision de ces conditions</li>
<li>la strat&eacute;gie de d&eacute;classement de chaque enveloppe de planification, soulignant tout changement important par rapport &agrave; la strat&eacute;gie retenue dans l&rsquo;avant-projet de d&eacute;classement</li>
<li>la description de chaque ensemble de travaux de d&eacute;classement, y compris :
<ul>
<li>l&rsquo;approche technique &eacute;tape par &eacute;tape</li>
<li>la nature et la source de tout risque important pour les travailleurs, le public et l&rsquo;environnement (y compris une estimation des doses de rayonnement), ainsi que les esp&egrave;ces &agrave; risque</li>
<li>la fa&ccedil;on dont la protection et la s&ucirc;ret&eacute; lors du d&eacute;classement seront optimis&eacute;es</li>
<li>les m&eacute;thodes ou les technologies propos&eacute;es pour att&eacute;nuer les risques</li>
<li>les quantit&eacute;s, les caract&eacute;ristiques et le mode d&rsquo;&eacute;vacuation des d&eacute;chets</li>
</ul>
</li>
<li>un calendrier indiquant&nbsp;:
<ul>
<li>la date de commencement pr&eacute;vue</li>
<li>la dur&eacute;e approximative et la s&eacute;quence des ensembles de travaux (et des p&eacute;riodes de stockage sous surveillance, s&rsquo;il y a lieu)</li>
<li>la date d&rsquo;ach&egrave;vement pr&eacute;vue</li>  </ul>  </li>  <li>un plan de gestion des d&eacute;chets (voir la section 6.4)</li>  <li>la caract&eacute;risation des effets que pourra avoir sur l&rsquo;environnement le programme de d&eacute;classement propos&eacute;, ainsi que les mesures que l&rsquo;on prendra pour les att&eacute;nuer et les contr&ocirc;ler</li>  <li>des estimations de co&ucirc;ts prudentes (bas&eacute;es sur les ensembles de travaux) en ce qui concerne la main-d&rsquo;&oelig;uvre, les mat&eacute;riaux, l&rsquo;&eacute;quipement, la gestion des d&eacute;chets, l&rsquo;&eacute;valuation environnementale, la surveillance et l&rsquo;administration (p.&nbsp;ex., formation, s&eacute;curit&eacute;, d&eacute;livrance de permis, gestion du projet et relations avec le public et les gouvernements)</li>  <li>les dispositions relatives aux garanties financi&egrave;res</li>  <li>un rapport sommaire de toute mobilisation du public et des Autochtones entreprise dans la pr&eacute;paration du plan, y compris les pr&eacute;occupations soulev&eacute;es, la fa&ccedil;on dont elles ont &eacute;t&eacute; prises en compte et comment on y a donn&eacute; suite</li>  <li>la structure de gestion du projet</li>  <li>les programmes applicables (p. ex., syst&egrave;me de gestion, intervention d&rsquo;urgence, s&eacute;curit&eacute; du site, radioprotection, protection de l&rsquo;environnement, incendie et formation du personnel) (Remarque&nbsp;: ceci inclut l&rsquo;application des programmes durant le stockage sous surveillance et le d&eacute;classement)</li>  <li>un programme d&rsquo;&eacute;tude des facteurs humains qui inclut :
<ul>
<li>l&rsquo;analyse des facteurs humains</li>
<li>les dispositions relatives &agrave; la formation</li>
<li>le recours &agrave; des entrepreneurs</li>
<li>l&rsquo;&eacute;laboration de proc&eacute;dures</li>
<li>les questions d&rsquo;ergonomie </li>
</ul>  </li>  <li>les questions li&eacute;es &agrave; la sant&eacute; et &agrave; la s&eacute;curit&eacute; classiques au travail, et les programmes de formation et de protection connexes</li>  <li>une liste des organismes de r&eacute;glementation f&eacute;d&eacute;raux et provinciaux qui participent au projet</li>  <li>le programme final de contr&ocirc;le radiologique comportant des crit&egrave;res d&rsquo;interpr&eacute;tation</li>  <li>les registres d&rsquo;exploitation et de d&eacute;classement requis aux fins de r&eacute;tention et la m&eacute;thode de r&eacute;tention</li>  <li>une table des mati&egrave;res pour le rapport final, qui d&eacute;crit les sujets &agrave; traiter</li>  <li>l&rsquo;exp&eacute;rience en exploitation et les le&ccedil;ons apprises du d&eacute;classement d&rsquo;installations nucl&eacute;aires semblables</li>  <li>une &eacute;valuation de la s&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire et les mesures pr&eacute;vues concernant les mati&egrave;res fissiles</li>  </ul>  <p>Les titulaires de permis de d&eacute;chets de substances nucl&eacute;aires peuvent consulter la liste ci&#8209;dessus &agrave; titre indicatif, selon une approche graduelle.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.3"></div>
<h3 id="sec6-3">6.3	&Eacute;valuation de la s&ucirc;ret&eacute; pour le d&eacute;classement</h3>  <p>Le titulaire de permis doit effectuer une &eacute;valuation de la s&ucirc;ret&eacute; afin de rep&eacute;rer les dangers pour les travailleurs et le public d&eacute;coulant &agrave; la fois des activit&eacute;s de d&eacute;classement courantes et des accidents cr&eacute;dibles pendant le d&eacute;classement. L&rsquo;&eacute;valuation de la s&ucirc;ret&eacute; devrait &ecirc;tre effectu&eacute;e conform&eacute;ment &agrave; une approche graduelle.</p>  <p> Les r&eacute;sultats de l&rsquo;&eacute;valuation de la s&ucirc;ret&eacute; devraient &ecirc;tre utilis&eacute;s pour : </p>  <ul>
<li>appuyer l&rsquo;&eacute;laboration du plan de d&eacute;classement</li>
<li>pr&eacute;ciser le programme d&rsquo;entretien, de surveillance et d&rsquo;inspection</li>
<li>pr&eacute;ciser les proc&eacute;dures &agrave; mettre en place pour toutes les activit&eacute;s d&rsquo;exploitation importantes pour la s&ucirc;ret&eacute; dans le contexte d&rsquo;une intervention en cas d&rsquo;accident</li>
<li>pr&eacute;ciser les comp&eacute;tences n&eacute;cessaires du personnel participant &agrave; l&rsquo;installation ou &agrave; l&rsquo;activit&eacute;</li>
<li>prendre des d&eacute;cisions selon une approche int&eacute;gr&eacute;e tenant compte du risque</li>  </ul>  <p>L&rsquo;&eacute;valuation de la s&ucirc;ret&eacute; devrait &ecirc;tre mise &agrave; jour au besoin &agrave; la lumi&egrave;re des exigences r&eacute;glementaires r&eacute;vis&eacute;es, des progr&egrave;s de la technologie de d&eacute;classement, des changements dans les caract&eacute;ristiques du site, des modifications apport&eacute;es &agrave; la conception ou &agrave; l&rsquo;exploitation, des effets du vieillissement, de l&rsquo;exp&eacute;rience en exploitation et des le&ccedil;ons apprises.</p>  <p> L&rsquo;&eacute;valuation de la s&ucirc;ret&eacute; peut &ecirc;tre un document autonome ou peut &ecirc;tre incluse dans le PDD.</p>  <p> Le titulaire de permis d&rsquo;une installation nucl&eacute;aire de cat&eacute;gorie I ou d&rsquo;une mine et usine de concentration d&rsquo;uranium doit s&rsquo;assurer que l&rsquo;&eacute;valuation de la s&ucirc;ret&eacute;&nbsp;: </p>  <ul>
<li>d&eacute;termine les dangers possibles pour les travailleurs, le public et l&rsquo;environnement que repr&eacute;sentent tant les activit&eacute;s planifi&eacute;es de d&eacute;classement que les accidents et les &eacute;v&eacute;nements naturels pouvant survenir pendant le d&eacute;classement</li>
<li>d&eacute;crit l&rsquo;importance relative des dangers possibles et d&eacute;termine les m&eacute;thodes d&rsquo;att&eacute;nuation des risques associ&eacute;s &agrave; ces dangers</li>
<li>d&eacute;termine les fonctions de s&ucirc;ret&eacute; n&eacute;cessaires au d&eacute;classement et les structures, syst&egrave;mes et composants (SSC) connexes qui assureront ces fonctions de s&ucirc;ret&eacute;</li>
<li>d&eacute;montre si une d&eacute;fense en profondeur ad&eacute;quate a &eacute;t&eacute; fournie</li>
<li>d&eacute;montre si des mesures ad&eacute;quates ont &eacute;t&eacute; prises pour pr&eacute;venir les conditions d&rsquo;accident et si des cons&eacute;quences peuvent &ecirc;tre att&eacute;nu&eacute;es en cas d&rsquo;accident</li>
<li>d&eacute;termine les caract&eacute;ristiques de l&rsquo;emplacement relatives &agrave; la s&ucirc;ret&eacute; de l&rsquo;installation ou de l&rsquo;activit&eacute; </li>
<li>d&eacute;montre que des mesures ad&eacute;quates ont &eacute;t&eacute; prises pour contr&ocirc;ler les dangers, &agrave; l&rsquo;heure actuelle et &agrave; long terme, &agrave; un niveau acceptable et pour optimiser la protection et la s&ucirc;ret&eacute; lors du d&eacute;classement<strong></strong></li>
<li>d&eacute;montre que les interd&eacute;pendances entre les mesures de d&eacute;classement planifi&eacute;es sont prises en compte et que les effets n&eacute;gatifs d&rsquo;une mesure sur une autre, ainsi que la g&eacute;n&eacute;ration possible de dangers suppl&eacute;mentaires, sont pris en compte de fa&ccedil;on appropri&eacute;e <strong></strong></li>  </ul>  <p>Des renseignements sur l&rsquo;analyse de la s&ucirc;ret&eacute; se trouvent dans le REGDOC-2.4.1, <em>Analyse d&eacute;terministe de la s&ucirc;ret&eacute;</em> <sup id="fnb9-ref"><a className="fn-lnk" href="#fnb9"><span className="wb-inv">Footnote </span>9</a></sup>.</p>  <p> Les titulaires de permis de d&eacute;chets de substances nucl&eacute;aires peuvent consulter la liste ci&#8209;dessus &agrave; titre indicatif, selon une approche graduelle. </p>  <p>Pour le d&eacute;classement in situ,  un dossier de s&ucirc;ret&eacute; (voir section 4) doit &ecirc;tre soumis en plus de l&rsquo;&eacute;valuation  de la s&ucirc;ret&eacute;. </p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.4"></div>
<h3 id="sec6-4">6.4	Plan de gestion des d&eacute;chets </h3>  <p>Avant le d&eacute;classement, le titulaire de permis doit pr&eacute;parer un plan de gestion des d&eacute;chets qui tient compte de la hi&eacute;rarchie des d&eacute;chets et d&eacute;termine les flux de d&eacute;chets ainsi que leurs quantit&eacute;s et les caract&eacute;ristiques estim&eacute;es. </p>  <p> Le titulaire de permis doit pr&eacute;parer un plan de gestion des d&eacute;chets qui d&eacute;crit le processus syst&eacute;matique de d&eacute;placement des mati&egrave;res des zones de d&eacute;montage aux zones pour les &eacute;tapes subs&eacute;quentes de la gestion des d&eacute;chets. Les zones de surveillance et de traitement devraient &ecirc;tre con&ccedil;ues et exploit&eacute;es de mani&egrave;re &agrave; ce que les mati&egrave;res recyclables et r&eacute;utilisables soient s&eacute;par&eacute;es des d&eacute;chets. </p>  <p> Le titulaire de permis doit s&rsquo;assurer de la disponibilit&eacute; de colis de transport pour les d&eacute;chets radioactifs, de la voie d&rsquo;&eacute;vacuation des d&eacute;chets radioactifs d&eacute;coulant des activit&eacute;s de d&eacute;classement et de la capacit&eacute; de ces voies d&rsquo;&eacute;vacuation de tenir compte des types et des volumes de mati&egrave;res.</p>  <p> Le titulaire de permis doit &eacute;valuer la possibilit&eacute; de g&eacute;n&eacute;rer des substances dangereuses non radiologiques et int&eacute;grer les pr&eacute;cautions n&eacute;cessaires et la production de rapports dans ses programmes et proc&eacute;dures. </p>  <p> Le titulaire de permis doit tenir &agrave; jour les documents sur les d&eacute;chets produits, stock&eacute;s dans l&rsquo;installation ou transf&eacute;r&eacute;s &agrave; une autre installation ou organisation de gestion des d&eacute;chets, en pr&eacute;cisant leurs quantit&eacute;s, leurs caract&eacute;ristiques et leur destination.</p>  <p> Le titulaire de permis devrait optimiser la lib&eacute;ration des mat&eacute;riaux et des sites de tout contr&ocirc;le r&eacute;glementaire par la CCSN. Les quantit&eacute;s d&rsquo;exemption, les niveaux de lib&eacute;ration conditionnelle et les niveaux de lib&eacute;ration inconditionnelle sont pr&eacute;cis&eacute;s dans le <em>R&egrave;glement sur les substances nucl&eacute;aires et les appareils &agrave; rayonnement</em><em>.</em></p>  <p> De plus amples renseignements sur les plans de gestion des d&eacute;chets et des d&eacute;chets radioactifs se trouvent dans le REGDOC-2.11.1, <em>Gestion des d&eacute;chets, tome I&nbsp;: </em><em>Gestion des d&eacute;chets radioactifs</em> <sup id="fnb6p-ref"><a className="fn-lnk" href="#fnb6"><span className="wb-inv">Footnote </span>6</a></sup>.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="7"></div>
<h2 id="sec7">7.	Ex&eacute;cution du d&eacute;classement</h2>  <p>Le titulaire de permis doit&nbsp;:</p>  <ul>   <li>ex&eacute;cuter le d&eacute;classement conform&eacute;ment aux proc&eacute;dures &eacute;crites et au PDD accept&eacute;s</li>   <li>mettre en &oelig;uvre et tenir &agrave; jour un programme de d&eacute;classement et des programmes de soutien, le cas &eacute;ch&eacute;ant, pour assurer la s&ucirc;ret&eacute;</li>   <li>veiller &agrave; ce qu&rsquo;une m&eacute;thodologie d&rsquo;&eacute;mission, de modification et de cessation des proc&eacute;dures de travail soit &eacute;tablie</li>   <li>tenir une liste &agrave; jour des SSC importants pour la s&ucirc;ret&eacute;, ainsi que des plans de surveillance et d&rsquo;entretien des SSC </li>   <li>tenir compte de la hi&eacute;rarchie des d&eacute;chets, y compris la pr&eacute;vention de la production, la r&eacute;duction du volume et de la teneur en radioactivit&eacute;, la r&eacute;utilisation et le recyclage des mat&eacute;riaux et des composants, et l&rsquo;&eacute;vacuation des d&eacute;chets</li>   <li>caract&eacute;riser et g&eacute;rer tous les d&eacute;chets op&eacute;rationnels restants de l&rsquo;installation et tous les d&eacute;chets provenant du d&eacute;classement</li>   <li>assurer la tra&ccedil;abilit&eacute; de tous les d&eacute;chets produits </li>  </ul>  <p>&Agrave; mesure que les activit&eacute;s de d&eacute;classement progressent, de nouveaux dangers pourraient appara&icirc;tre. Les nouveaux dangers devraient &ecirc;tre &eacute;valu&eacute;s et trait&eacute;s de mani&egrave;re &agrave; maintenir la s&ucirc;ret&eacute; g&eacute;n&eacute;rale des activit&eacute;s de d&eacute;classement entreprises.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="7.1"></div>
<h3 id="sec7-1">7.1	Stockage sous surveillance</h3>  <p>En cas de d&eacute;classement  diff&eacute;r&eacute;, le titulaire de permis doit veiller &agrave; ce que l&rsquo;installation soit  maintenue dans un &eacute;tat d&rsquo;arr&ecirc;t s&ucirc;r de sorte que la d&eacute;contamination et/ou le  d&eacute;mant&egrave;lement ult&eacute;rieurs puissent &ecirc;tre effectu&eacute;s. Le titulaire de permis doit  mettre en &oelig;uvre et tenir &agrave; jour des programmes appropri&eacute;s de stockage sous  surveillance pour confirmer que les SSC n&eacute;cessaires au maintien d&rsquo;un stockage  s&ucirc;r fonctionnent comme il se doit. Ces programmes devraient pr&eacute;voir la  surveillance, l&rsquo;inspection et l&rsquo;entretien.</p>  <p> Si le stockage sous surveillance est entrepris,  le titulaire de permis peut ex&eacute;cuter des activit&eacute;s visant &agrave; r&eacute;duire les risques  &agrave; l&rsquo;installation pendant une p&eacute;riode de stockage sous surveillance,  conform&eacute;ment au permis et aux communications avec la CCSN. Ces activit&eacute;s  peuvent comprendre les suivantes&nbsp;: </p>  <ul>
<li>r&eacute;duction ou  &eacute;limination des mati&egrave;res combustibles </li>
<li>enl&egrave;vement  et recyclage de l&rsquo;&eacute;quipement non contamin&eacute; ou l&eacute;g&egrave;rement contamin&eacute; (p.&nbsp;ex.,  turbines, pompes, &eacute;changeurs de chaleur) </li>
<li>r&eacute;duction  ou isolation de l&rsquo;amiante</li>
<li>d&eacute;molition  d&rsquo;installations non nucl&eacute;aires</li>
<li>enl&egrave;vement  des d&eacute;chets radioactifs vers une installation de stockage autoris&eacute;e hors site </li>
<li>r&eacute;duction  ou &eacute;limination des d&eacute;chets dangereux </li>  </ul>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="8"></div>
<h2 id="sec8">8.	Ach&egrave;vement du d&eacute;classement </h2>  <p>Une fois les activit&eacute;s de d&eacute;classement termin&eacute;es, le titulaire de permis doit d&eacute;montrer que les crit&egrave;res de l&rsquo;&eacute;tat final, pr&eacute;cis&eacute;s dans le PDD, ont &eacute;t&eacute; respect&eacute;s. </p>  <p> Le titulaire de permis doit pr&eacute;parer et soumettre un rapport d&rsquo;&eacute;tat final au personnel de la CCSN aux fins d&rsquo;acceptation. </p>  <p> Le rapport d&rsquo;&eacute;tat final d&rsquo;une installation nucl&eacute;aire de cat&eacute;gorie I ou d&rsquo;une mine et usine de concentration d&rsquo;uranium doit&nbsp;: </p>  <ul>   <li>documenter (p.&nbsp;ex., en citant les r&eacute;sultats r&eacute;els des contr&ocirc;les) que les conditions pr&eacute;vues &agrave; l&rsquo;&eacute;tat final ont &eacute;t&eacute; respect&eacute;es et, dans la n&eacute;gative, expliquer pourquoi elles n&rsquo;ont pas &eacute;t&eacute; respect&eacute;es</li>   <li>d&eacute;crire les autres exigences de permis propos&eacute;es ou les contr&ocirc;les institutionnels pour le site</li>   <li>d&eacute;crire les crit&egrave;res de rejet</li>   <li>d&eacute;crire les travaux de d&eacute;classement entrepris, en notant tout &eacute;cart important par rapport au PDD</li>   <li>d&eacute;crire les entit&eacute;s restantes</li>   <li>d&eacute;crire l&rsquo;&eacute;tat physique et radiologique final, y compris les dangers restants</li>   <li>inclure une liste des structures, des zones et de l&rsquo;&eacute;quipement destin&eacute;s &agrave; une utilisation restreinte</li>   <li>d&eacute;crire les quantit&eacute;s de d&eacute;chets et leur &eacute;vacuation</li>   <li>inclure un sommaire des doses radiologiques re&ccedil;ues par les travailleurs au cours des activit&eacute;s de d&eacute;classement</li>   <li>inclure un r&eacute;sum&eacute; de tout &eacute;v&eacute;nement ou incident anormal survenu pendant les activit&eacute;s de d&eacute;classement</li>   <li>d&eacute;crire les le&ccedil;ons apprises</li>   <li>fournir des r&eacute;f&eacute;rences aux dossiers de d&eacute;classement</li>   <li>d&eacute;crire l&rsquo;utilisation future des terres et des structures restantes, ou toute restriction quant &agrave; leur utilisation future</li>  </ul>  <p>Lorsque le d&eacute;classement de l&rsquo;installation ou de l&rsquo;emplacement doit avoir lieu selon des &eacute;tapes distinctes, un rapport d&rsquo;&eacute;tat final int&eacute;rimaire doit &ecirc;tre pr&eacute;par&eacute; lorsque chaque &eacute;tat final int&eacute;rimaire pr&eacute;vu est atteint. Ce rapport devrait d&eacute;crire les travaux de d&eacute;classement entrepris, la condition physique de l&rsquo;installation ou de l&rsquo;emplacement, les dangers restants, l&rsquo;&eacute;tat final int&eacute;rimaire atteint, les r&eacute;sultats des contr&ocirc;les, les dangers et la condition physique de l&rsquo;installation ou de l&rsquo;emplacement, ainsi que les t&acirc;ches de d&eacute;classement restantes ou les ensembles de travaux &agrave; r&eacute;aliser.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="9"></div>
<h2 id="sec9">9. Post-d&eacute;classement</h2>  <p>Si des contr&ocirc;les institutionnels doivent &ecirc;tre mis en place, le titulaire de permis doit pr&eacute;parer des plans pour la phase de post-d&eacute;classement. Les plans post-d&eacute;classement comprennent des programmes appropri&eacute;s de suivi et de surveillance qui seront &eacute;tablis et g&eacute;r&eacute;s en vue d&rsquo;optimiser la protection et la s&eacute;curit&eacute; ainsi que la protection de l&rsquo;environnement. Le titulaire de permis doit clairement attribuer la responsabilit&eacute; de la mise en &oelig;uvre et de la tenue &agrave; jour des plans post&#8209;d&eacute;classement et des contr&ocirc;les institutionnels.</p>  <p> Lorsque des contr&ocirc;les institutionnels sont requis, la CCSN s&rsquo;attend &agrave; ce que les mesures suivantes soient prises&nbsp;:</p>  <ul>
<li>mise en &oelig;uvre d&rsquo;un plan d&rsquo;inspection visuelle pour l&rsquo;examen p&eacute;riodique du site afin de d&eacute;celer les signes de d&eacute;t&eacute;rioration de l&rsquo;installation ou de l&rsquo;emplacement (p.&nbsp;ex., affaissement du sol) ou d&rsquo;&eacute;rosion de la surface</li>
<li>exploitation et entretien d&rsquo;un syst&egrave;me de surveillance afin d&rsquo;&ecirc;tre averti t&ocirc;t d&rsquo;un rejet de radionucl&eacute;ides, avant qu&rsquo;ils ne quittent les limites du site</li>
<li>mise en &oelig;uvre de contr&ocirc;les actifs pour emp&ecirc;cher un acc&egrave;s non restreint au site</li>  </ul>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="10"></div>
<h2 id="sec10">10.	Contr&ocirc;les de substances radiologiques et dangereuses</h2>  <p>Le titulaire de permis doit effectuer des contr&ocirc;les radiologiques et non radiologiques pendant les diverses &eacute;tapes du cycle de vie &agrave; l&rsquo;appui du d&eacute;classement. </p>  <p> Le titulaire de permis devrait &eacute;tablir les objectifs des contr&ocirc;les qui doivent &ecirc;tre atteints par les m&eacute;thodes de caract&eacute;risation &agrave; toutes les &eacute;tapes du d&eacute;classement. Ces objectifs peuvent inclure ce qui suit&nbsp;:</p>  <ul>   <li>d&eacute;terminer les risques potentiels de rayonnement pour les travailleurs, le public et l&rsquo;environnement associ&eacute;s &agrave; des activit&eacute;s de d&eacute;classement sp&eacute;cifiques</li>   <li>tenir compte des incertitudes relatives &agrave; l&rsquo;information sur les emplacements, les concentrations et les types de contaminants qui peuvent &ecirc;tre pr&eacute;sents</li>   <li>obtenir des renseignements sur les dangers pour appuyer le choix d&rsquo;une strat&eacute;gie de d&eacute;classement, la s&eacute;quence des activit&eacute;s de d&eacute;classement, les options de d&eacute;contamination, le choix des m&eacute;thodes de d&eacute;mant&egrave;lement, etc.</li>   <li>r&eacute;duire progressivement et syst&eacute;matiquement les risques radiologiques </li>   <li>d&eacute;montrer que les crit&egrave;res relatifs &agrave; l&rsquo;&eacute;tat final du d&eacute;classement ont &eacute;t&eacute; respect&eacute;s </li>  </ul>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="10.1"></div>
<h3 id="sec10-1">10.1	Contr&ocirc;les pr&eacute;alables &agrave; l&rsquo;exploitation</h3>  <p>Avant la construction d&rsquo;une installation nucl&eacute;aire, des contr&ocirc;les radiologiques de r&eacute;f&eacute;rence devraient &ecirc;tre effectu&eacute;s sur le site propos&eacute; de l&rsquo;installation et dans les environs afin d&rsquo;&eacute;tablir les concentrations de fond des radionucl&eacute;ides. Avant l&rsquo;ex&eacute;cution de ces contr&ocirc;les, le promoteur devrait identifier les milieux &agrave; &eacute;chantillonner (p. ex., sol, s&eacute;diments, eaux de surface) et les param&egrave;tres &agrave; mesurer (p.&nbsp;ex., radionucl&eacute;ides, produits chimiques dangereux). Ces informations seront utiles pour : </p>  <ul>   <li>l&rsquo;&eacute;valuation future de l&rsquo;impact de l&rsquo;exploitation de l&rsquo;installation sur le site et la zone environnante</li>   <li>l&rsquo;&eacute;tablissement de crit&egrave;res relatifs &agrave; l&rsquo;&eacute;tat final du d&eacute;classement</li>  </ul>  <p>Les donn&eacute;es sur le rayonnement de fond devraient &eacute;galement &ecirc;tre &eacute;valu&eacute;es et mises &agrave; jour avant la mise en service d&rsquo;une installation nucl&eacute;aire, en particulier pour les zones qui ne devraient pas &ecirc;tre touch&eacute;es (p.&nbsp;ex., activ&eacute;es ou contamin&eacute;es) par les activit&eacute;s futures.&nbsp; </p>  <p> Avant le d&eacute;but des activit&eacute;s d&rsquo;exploitation d&rsquo;un titulaire de permis, des &eacute;chantillons de mati&egrave;res non activ&eacute;es et non contamin&eacute;es devraient &ecirc;tre conserv&eacute;s et &eacute;valu&eacute;s afin de d&eacute;terminer les concentrations de radionucl&eacute;ides naturels.&nbsp; </p>  <p> Si aucun contr&ocirc;le pr&eacute;alable &agrave; la construction n&rsquo;a &eacute;t&eacute; effectu&eacute; sur le site, les donn&eacute;es d&rsquo;une zone non perturb&eacute;e pr&eacute;sentant des caract&eacute;ristiques similaires ou les r&eacute;sultats d&rsquo;un contr&ocirc;le portant sur des mat&eacute;riaux de construction similaires devraient &ecirc;tre utilis&eacute;s.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="10.2"></div>
<h3 id="sec10-2">10.2	Contr&ocirc;les pendant l&rsquo;exploitation</h3>  <p>Pendant les p&eacute;riodes d&rsquo;exploitation, le titulaire de permis doit cr&eacute;er et conserver des dossiers sur les dangers associ&eacute;s aux installations et aux activit&eacute;s, surtout ceux qui peuvent survenir lors du d&eacute;classement. Il peut notamment &ecirc;tre question de dangers chimiques, biologiques et industriels, ainsi que de dangers radiologiques. </p>  <p> Des contr&ocirc;les de caract&eacute;risation d&eacute;taill&eacute;s devraient &ecirc;tre effectu&eacute;s par le titulaire de permis pendant les p&eacute;riodes d&rsquo;exploitation pour appuyer l&rsquo;&eacute;laboration du PDD final. Les donn&eacute;es de la caract&eacute;risation radiologique devraient comprendre une description de la zone (p.&nbsp;ex., les lieux de l&rsquo;installation, le milieu environnant, les eaux souterraines et de surface, le sol et les s&eacute;diments, le cas &eacute;ch&eacute;ant), les niveaux de contamination, les niveaux de d&eacute;bit de dose et les formes chimiques et physiques des mati&egrave;res.</p>  <p> Au besoin, des contr&ocirc;les de caract&eacute;risation devraient &ecirc;tre effectu&eacute;s pour &eacute;tablir la profondeur de p&eacute;n&eacute;tration de la contamination ou de l&rsquo;activation dans les structures, le sol et les s&eacute;diments, et l&rsquo;&eacute;tendue de la radioactivit&eacute;. Les contaminants radioactifs dans les composants blind&eacute;s ou autoblind&eacute;s, comme &agrave; l&rsquo;int&eacute;rieur des tuyaux et d&rsquo;autres &eacute;quipements, devraient &ecirc;tre d&eacute;termin&eacute;s dans la mesure du possible.</p>  <p> Les contr&ocirc;les de caract&eacute;risation devraient &eacute;galement identifier les zones non contamin&eacute;es adjacentes. Lors de la planification des activit&eacute;s de d&eacute;classement, une attention particuli&egrave;re devrait &ecirc;tre accord&eacute;e &agrave; la pr&eacute;vention de la contamination crois&eacute;e de ces zones.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="10.2.1"></div>
<h4 id="sec10-2-1">10.2.1	Contr&ocirc;les pendant la transition de l&rsquo;exploitation au d&eacute;classement</h4>  <p>Durant les pr&eacute;paratifs en vue du d&eacute;classement, les contr&ocirc;les devraient &ecirc;tre effectu&eacute;s dans la mesure n&eacute;cessaire pour confirmer l&rsquo;efficacit&eacute; de ces activit&eacute;s transitoires et fournir des renseignements afin de valider ou de r&eacute;viser, au besoin, la strat&eacute;gie de d&eacute;classement. </p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="10.3"></div>
<h3 id="sec10-3">10.3	Contr&ocirc;les pendant le d&eacute;classement</h3>  <p>Les conditions radiologiques doivent &ecirc;tre surveill&eacute;es tout au long des activit&eacute;s de d&eacute;classement afin de confirmer que les risques radiologiques pour les travailleurs, le public et l&rsquo;environnement sont ad&eacute;quatement contr&ocirc;l&eacute;s.</p>  <p> Des contr&ocirc;les doivent &ecirc;tre effectu&eacute;s tout au long du d&eacute;classement pour confirmer l&rsquo;efficacit&eacute; des activit&eacute;s de d&eacute;classement r&eacute;alis&eacute;es en vue de r&eacute;duire les risques radiologiques (p.&nbsp;ex., enl&egrave;vement des mati&egrave;res radioactives exc&eacute;dentaires, d&eacute;contamination de l&rsquo;&eacute;quipement de proc&eacute;d&eacute; et immobilisation de la contamination restante).</p>  <p> Des contr&ocirc;les des dangers radiologiques doivent &eacute;galement &ecirc;tre effectu&eacute;s pour appuyer l&rsquo;ex&eacute;cution s&ucirc;re des activit&eacute;s de surveillance et d&rsquo;entretien pendant les p&eacute;riodes o&ugrave; le d&eacute;classement est diff&eacute;r&eacute;.</p>  <p> Des contr&ocirc;les doivent &ecirc;tre effectu&eacute;s pour d&eacute;montrer que les zones non contamin&eacute;es adjacentes ne sont pas touch&eacute;es par les activit&eacute;s de d&eacute;classement.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="10.4"></div>
<h3 id="sec10-4">10.4	Contr&ocirc;le pour confirmer l&rsquo;&eacute;tat final du d&eacute;classement</h3>  <p>Le titulaire de permis doit effectuer un contr&ocirc;le de l&rsquo;&eacute;tat final conform&eacute;ment &agrave; un plan de contr&ocirc;le. Le plan de contr&ocirc;le devrait d&eacute;finir :</p>  <ul>   <li>les objectifs du contr&ocirc;le radiologique final</li>   <li>la m&eacute;thodologie utilis&eacute;e pour le contr&ocirc;le </li>   <li>les param&egrave;tres d&rsquo;&eacute;chantillonnage et les niveaux de rayonnement naturel </li>   <li>l&rsquo;&eacute;quipement, les instruments, les techniques et les proc&eacute;dures </li>  <li>la m&eacute;thodologie d&rsquo;&eacute;valuation des r&eacute;sultats du contr&ocirc;le final</li>  </ul>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="glossary"></div>
<h2>Glossaire</h2>  <p>Les d&eacute;finitions des termes utilis&eacute;s dans le pr&eacute;sent document figurent dans le <a href="http://www.nuclearsafety.gc.ca/pubs_catalogue/uploads_fre/REGDOC-3-6-Glossary-of-CNSC-Terminology-fra.pdf">REGDOC&#8209;3.6, <em>Glossaire de la CCSN</em></a><em>,</em> qui comprend des termes et des d&eacute;finitions tir&eacute;s de la <a href="http://laws-lois.justice.gc.ca/fra/lois/N-28.3/"><em>Loi sur la s&ucirc;ret&eacute; et la r&eacute;glementation nucl&eacute;aires</em></a><em>,</em> de ses r&egrave;glements d&rsquo;application ainsi que des documents d&rsquo;application de la r&eacute;glementation et d&rsquo;autres publications de la CCSN. Le REGDOC&#8209;3.6 est fourni &agrave; titre de r&eacute;f&eacute;rence et pour information.</p>  <p> Les d&eacute;finitions terminologiques ci-dessous sont soit nouvelles, soit r&eacute;vis&eacute;es. Apr&egrave;s la consultation publique, la version d&eacute;finitive sera soumise aux fins d&rsquo;int&eacute;gration dans la prochaine &eacute;dition du REGDOC&#8209;3.6, <em>Glossaire de la CCSN.</em></p>  <p><strong>D&eacute;classement</strong></p>  <p>Mesures administratives et techniques prises pour mettre une installation hors service ou pour mettre fin aux activit&eacute;s qui y sont autoris&eacute;es, et qui permettent de lever en tout ou en partie les contr&ocirc;les r&eacute;glementaires visant une installation ou un site o&ugrave; l&rsquo;on g&egrave;re, poss&egrave;de ou stocke des substances nucl&eacute;aires. Ces mesures englobent les proc&eacute;dures, les processus et les activit&eacute;s conduisant &agrave; la lev&eacute;e du contr&ocirc;le r&eacute;glementaire sur une installation ou un site, avec ou sans restrictions quant &agrave; son utilisation future (p. ex., d&eacute;contamination et/ou d&eacute;mant&egrave;lement en tout ou en partie des structures, syst&egrave;mes et composants).</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="ref"></div>
<div className="wb-fnote" role="note">
<section>
<h2 id="fnb">R&eacute;f&eacute;rences</h2>
<p>The CNSC may include references to information on best practices and standards such as those published by CSA Group. With permission of the publisher, CSA Group, all nuclear-related CSA standards may be viewed at no cost through the CNSC Web page &ldquo;<a href="http://www.nuclearsafety.gc.ca/eng/acts-and-regulations/regulatory-documents/csa-standards">How to gain free access to all nuclear-related CSA standards</a>&rdquo;. </p>
<dl>
<dt>Footnote 1</dt>
<dd id="fnb1">
<p>Groupe CSA. <a href="http://www.nuclearsafety.gc.ca/fra/acts-and-regulations/regulatory-documents/csa-standards">CSA N294, <em>D&eacute;classement des installations  contenant des substances nucl&eacute;aires</em></a><em>,</em> Mississauga, 2009. </p>
<p className="fn-rtn"><a href="#fnb1-ref"><span className="wb-inv">Return to footnote </span>1<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 2</dt>
<dd id="fnb2">
<p>CCSN. <a href="http://www.nuclearsafety.gc.ca/fra/acts-and-regulations/regulatory-documents/published/html/regdoc3-5-3/index">REGDOC-3.5.3, <em>Principes fondamentaux de r&eacute;glementation</em></a><em>,</em> Ottawa, 2018.&nbsp; </p>
<p className="fn-rtn"><a href="#fnb2-ref"><span className="wb-inv">Return to footnote </span>2<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 3</dt>
<dd id="fnb3">
<p>CCSN. Projet de <a href="http://www.nuclearsafety.gc.ca/fra/acts-and-regulations/consultation/comment/regdoc2-11-1-vol3-ver2">REGDOC-2.11.1, <em>Gestion des d&eacute;chets, tome&nbsp;III&nbsp;: Dossier de s&ucirc;ret&eacute; pour la gestion  &agrave; long terme des d&eacute;chets radioactifs</em></a> (version&nbsp;2 en cours d&rsquo;&eacute;laboration). </p>
<p className="fn-rtn"><a href="#fnb3-ref"><span className="wb-inv">Return to footnote </span>3<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 4</dt>
<dd id="fnb4">
<p>CCSN. <a href="http://www.nuclearsafety.gc.ca/fra/acts-and-regulations/regulatory-documents/published/html/regdoc2-11-1-v2/index">REGDOC-2.11.1, <em>Gestion des d&eacute;chets, tome II : Gestion des st&eacute;riles des mines d&rsquo;uranium et  des r&eacute;sidus des usines de concentration d&rsquo;uranium</em></a>. Ottawa, 2018.</p>
<p className="fn-rtn"><a href="#fnb4-ref"><span className="wb-inv">Return to footnote </span>4<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 5</dt>
<dd id="fnb5">
<p>CCSN. Projet de REGDOC-3.3.1, Garanties financi&egrave;res (en cours d&rsquo;&eacute;laboration).</p>
<p className="fn-rtn"><a href="#fnb5-ref"><span className="wb-inv">Return to footnote </span>5<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 6</dt>
<dd id="fnb6">
<p>CCSN. Projet de <a href="http://www.nuclearsafety.gc.ca/fra/acts-and-regulations/consultation/comment/regdoc2-11-1-vol1">REGDOC-2.11.1, <em>Gestion des d&eacute;chets, tome&nbsp;I&nbsp;: Gestion  des d&eacute;chets radioactifs</em></a> (en cours d&rsquo;&eacute;laboration).</p>  <p className="fn-rtn"><a href="#fnb6-ref"><span className="wb-inv">Return to footnote </span>6<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 7</dt>
<dd id="fnb7">
<p>CCSN, <a href="http://www.nuclearsafety.gc.ca/fra/acts-and-regulations/regulatory-documents/published/html/regdoc3-2-1/index">REGDOC-3.2.1, <em>L&rsquo;information et la divulgation publiques</em></a><em>,</em> Ottawa, 2018.</p>
<p className="fn-rtn"><a href="#fnb7-ref"><span className="wb-inv">Return to footnote </span>7<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 8</dt>
<dd id="fnb8">
<p>CCSN. <a href="http://www.nuclearsafety.gc.ca/fra/acts-and-regulations/regulatory-documents/published/html/regdoc3-2-2/index">REGDOC-3.2.2, <em>Mobilisation des Autochtones</em></a><em>,</em> Ottawa, 2016.</p>
<p className="fn-rtn"><a href="#fnb8-ref"><span className="wb-inv">Return to footnote </span>8<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Footnote 9</dt>
<dd id="fnb9">
<p>CCSN. <a href="http://www.nuclearsafety.gc.ca/fra/acts-and-regulations/regulatory-documents/published/html/regdoc2-4-1/indexc2-4-1/index">REGDOC-2.4.1, <em>Analyse d&eacute;terministe de la s&ucirc;ret&eacute;</em></a><em>,</em> Ottawa, 2014.</p>  <p className="fn-rtn"><a href="#fnb9-ref"><span className="wb-inv">Return to footnote </span>9<span className="wb-inv"> referrer</span></a></p>
</dd>
</dl>
</section>  </div>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="addInfo"></div>
<h2>Renseignements suppl&eacute;mentaires</h2>  <p>Les documents suivants fournissent des renseignements suppl&eacute;mentaires qui pourraient &ecirc;tre pertinents et faciliter la compr&eacute;hension des exigences et de l&rsquo;orientation fournis dans le pr&eacute;sent document d&rsquo;application de la r&eacute;glementation&nbsp;:</p>  <ul>
<li>Agence internationale de l&rsquo;&eacute;nergie atomique (AIEA). Normes de s&ucirc;ret&eacute; de l&rsquo;AIEA, Prescriptions g&eacute;n&eacute;rales de s&ucirc;ret&eacute; Partie&nbsp;6, <a href="https://www-pub.iaea.org/MTCD/Publications/PDF/P1652_F_web.pdf"><em>D&eacute;classement des installations</em></a><em>,</em> Vienne, 2014. </li>
<li>AIEA. Normes de s&ucirc;ret&eacute; de l&rsquo;AIEA, Prescriptions g&eacute;n&eacute;rales de s&ucirc;ret&eacute; Partie&nbsp;4, <a href="https://www-pub.iaea.org/MTCD/Publications/PDF/P1714_F_web.pdf"><em>&Eacute;valuation de la s&ucirc;ret&eacute; des installations et activit&eacute;s</em></a><em>,</em> Vienne, 2016. </li>
<li>AIEA. Normes de s&ucirc;ret&eacute; de l&rsquo;AIEA, Guide de s&ucirc;ret&eacute; particulier&nbsp;SSG-47, <a href="https://www.iaea.org/publications/12210/decommissioning-of-nuclear-power-plants-research-reactors-and-other-nuclear-fuel-cycle-facilities"><em>Decommissioning of Nuclear Power Plants, Research Reactors and Other Nuclear Fuel Cycle Facilities</em></a><em>,</em> Vienne, 2018.</li>
<li>AIEA. Normes de s&ucirc;ret&eacute; de l&rsquo;AIEA, Guide de s&ucirc;ret&eacute;&nbsp;WS-G-5.2, <a href="https://www-pub.iaea.org/MTCD/Publications/PDF/Pub1372_web.pdf"><em>Safety Assessment for the Decommissioning of Facilities Using Radioactive Material</em></a>, Vienne, 2008. </li>
<li>Agence pour l&rsquo;&eacute;nergie nucl&eacute;aire (AEN). <a href="https://www.oecd-nea.org/rwm/docs/2013/rwm-wpdd2013-2.pdf"><em>Radiological Characterisation for Decommissioning of Nuclear Installations</em></a><em>,</em> Paris, 2013. </li>
<li>AEN. <a href="http://www.oecd-nea.org/rwm/pubs/2018/7374-decom-prep.pdf"><em>Preparing for Decommissioning During Operation and After Final Shutdown</em></a><em>,</em> Paris, 2018.</li>  </ul>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<h2>S&eacute;ries de documents d&#39;application de la r&eacute;glementation de la CCSN</h2>
<p>Les installations et activit&eacute;s du secteur nucl&eacute;aire du Canada sont r&eacute;glement&eacute;es par la Commission canadienne de s&ucirc;ret&eacute; nucl&eacute;aire (CCSN). En plus de la <em>Loi sur la s&ucirc;ret&eacute; et la r&eacute;glementation nucl&eacute;aires </em>et de ses r&egrave;glements d&#39;application, il pourrait y avoir des exigences en mati&egrave;re de conformit&eacute; &agrave; d&#39;autres outils de r&eacute;glementation, comme les documents d&#39;application de la r&eacute;glementation ou les normes.</p>
<p>Les documents d&rsquo;application de la r&eacute;glementation pr&eacute;par&eacute;s par la CCSN sont class&eacute;s en fonction des cat&eacute;gories et des s&eacute;ries suivantes :</p>
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
<li>2.2 Gestion de la performance humaine</li>
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
<li>3.4 S&eacute;ances de la Commission</li>
<li>3.5 Processus et pratiques de la CCSN</li>  	<li>3.6 Glossaire de termes de la CCSN</li>
</ul></li>
</ul>
<p><strong>Remarque&nbsp;:</strong> Les s&eacute;ries de documents d&rsquo;application de la r&eacute;glementation pourraient &ecirc;tre modifi&eacute;es p&eacute;riodiquement par la CCSN. Chaque s&eacute;rie susmentionn&eacute;e peut comprendre plusieurs documents d&rsquo;application de la r&eacute;glementation. Pour obtenir la plus r&eacute;cente <a href="/fra/acts-and-regulations/regulatory-documents/index">liste des documents d&rsquo;application de la r&eacute;glementation</a>, veuillez consulter le site Web de la CCSN.</p>

                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }