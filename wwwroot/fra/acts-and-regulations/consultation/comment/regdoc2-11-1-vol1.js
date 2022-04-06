import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "fr",
                pageTitle: "REGDOC-2.11.1, Gestion des déchets, tome I : Gestion des déchets radioactifs", 
                dateModified: "2019-03-29",
                langToggleUrl: "/eng/acts-and-regulations/consultation/comment/regdoc2-11-1-vol1"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<h2>Pr&eacute;face</h2>  <p>Ce document d&rsquo;application de la r&eacute;glementation fait partie de la s&eacute;rie de documents d&rsquo;application de la r&eacute;glementation de la CCSN intitul&eacute;e Gestion des d&eacute;chets, qui porte &eacute;galement sur le d&eacute;classement. La liste compl&egrave;te des s&eacute;ries figure &agrave; la fin de ce document et elle peut &ecirc;tre consult&eacute;e &agrave; partir du <a href="/fra/acts-and-regulations/regulatory-documents/index">site Web de la CCSN</a>.</p>  <p>Le document d&rsquo;application de la r&eacute;glementation REGDOC-2.11.1, <em>Gestion des d&eacute;chets, tome I : Gestion des d&eacute;chets radioactifs</em>, &eacute;nonce les exigences et l&rsquo;orientation de la CCSN relatives &agrave; la gestion des d&eacute;chets radioactifs.</p>   <p>Le REGDOC-2.11, <em>Cadre de gestion des d&eacute;chets radioactifs et du d&eacute;classement au Canada</em>, donne un aper&ccedil;u du cadre national canadien pour la gestion des d&eacute;chets radioactifs.</p>  <p>Pour en savoir plus sur la mise en &oelig;uvre des documents d&rsquo;application de la r&eacute;glementation et sur l&rsquo;approche graduelle, consultez le REGDOC-3.5.3, <em>Principes fondamentaux de r&eacute;glementation</em>.</p>
<div className="module ">  <p>Le terme &laquo; doit &raquo; est employ&eacute; pour exprimer une exigence &agrave; laquelle le titulaire ou le demandeur de permis doit se conformer; le terme &laquo; devrait &raquo; d&eacute;note une orientation ou une mesure conseill&eacute;e; le terme &laquo; pourrait &raquo; exprime une option ou une mesure conseill&eacute;e ou acceptable dans les limites de ce document d&rsquo;application de la r&eacute;glementation; et le terme &laquo; peut &raquo; exprime une possibilit&eacute; ou une capacit&eacute;.</p>   <p>Aucune information contenue dans le pr&eacute;sent document ne doit &ecirc;tre interpr&eacute;t&eacute;e comme lib&eacute;rant le titulaire de permis de toute autre exigence pertinente. Le titulaire de permis a la responsabilit&eacute; de prendre connaissance de tous les r&egrave;glements et de toutes les conditions de permis applicables et d&rsquo;y adh&eacute;rer.</p>   </div>  <br />
<div className="module-table-contents">  <h2>Table des mati&egrave;res</h2>
<ul>
<li><a href="#sec1">1. Introduction</a>
<ul>
<li><a href="#sec1-1">1.1 Objet</a></li>
<li><a href="#sec1-2">1.2 Port&eacute;e</a></li>
<li><a href="#sec1-3">1.3 L&eacute;gislation pertinente</a></li>
</ul></li>
<li><a href="#sec2">2. Politique et principes g&eacute;n&eacute;raux de la CCSN pour la gestion des d&eacute;chets radioactifs</a>
<ul>
<li><a href="#sec2-1">2.1 Cadre de gestion des d&eacute;chets de la CCSN</a></li>
</ul></li>
<li><a href="#sec3">3. Contexte</a></li>
<li><a href="#sec4">4. Exigences g&eacute;n&eacute;rales</a></li>
<li><a href="#sec5">5. Programme de gestion des d&eacute;chets</a></li>
<li><a href="#sec6">6. Classification des d&eacute;chets radioactifs, caract&eacute;risation des d&eacute;chets et crit&egrave;res d&rsquo;acceptation des d&eacute;chets</a>
<ul>
<li><a href="#sec6-1">6.1 Classification des d&eacute;chets</a></li>
<li><a href="#sec6-2">6.2 Caract&eacute;risation des d&eacute;chets</a></li>
<li><a href="#sec6-3">6.3 Crit&egrave;res d&rsquo;acceptation des d&eacute;chets</a></li>
</ul></li>
<li><a href="#sec7">7. &Eacute;tapes de la gestion des d&eacute;chets radioactifs</a>
<ul>
<li><a href="#sec7-1">7.1 Production</a></li>
<li><a href="#sec7-2">7.2 Manutention</a></li>
<li><a href="#sec7-3">7.3 Traitement</a></li>
<li><a href="#sec7-4">7.4 Transport</a></li>
<li><a href="#sec7-5">7.5 Stockage</a></li>
<li><a href="#sec7-6">7.6 &Eacute;vacuation</a></li>
</ul></li>
<li><a href="#sec8">8. Colis de d&eacute;chets</a></li>
<li><a href="#sec9">9. Installations de stockage des d&eacute;chets</a>
<ul>
<li><a href="#sec9-1">9.1 Exigences g&eacute;n&eacute;rales applicables aux installations de stockage des d&eacute;chets</a></li>
<li><a href="#sec9-2">9.2 Caract&eacute;risation de l&rsquo;emplacement d&rsquo;une installation de stockage des d&eacute;chets</a></li>
<li><a href="#sec9-3">9.3 Conception d&rsquo;une installation de stockage des d&eacute;chets</a></li>
<li><a href="#sec9-4">9.4	Construction et mise en service d&rsquo;une installation de stockage des d&eacute;chets</a></li>
<li><a href="#sec9-5">9.5 Exploitation d&rsquo;une installation de stockage des d&eacute;chets</a></li>
<li><a href="#sec9-6">9.6 D&eacute;classement d&rsquo;une installation de stockage des d&eacute;chets</a></li>
</ul></li>
<li><a href="#sec10">10. Installations d&rsquo;&eacute;vacuation des d&eacute;chets</a>
<ul>
<li><a href="#sec10-1">10.1 Exigences g&eacute;n&eacute;rales applicables aux installations d&rsquo;&eacute;vacuation des d&eacute;chets</a></li>
<li><a href="#sec10-2">10.2 Caract&eacute;risation de l&rsquo;emplacement pour une installation d&rsquo;&eacute;vacuation des d&eacute;chets</a></li>
<li><a href="#sec10-3">10.3 Conception d&rsquo;une installation d&rsquo;&eacute;vacuation des d&eacute;chets</a></li>
<li><a href="#sec10-4">10.4 Construction et mise en service d&rsquo;une installation d&rsquo;&eacute;vacuation des d&eacute;chets</a></li>
<li><a href="#sec10-5">10.5 Exploitation d&rsquo;une installation d&rsquo;&eacute;vacuation des d&eacute;chets</a></li>
<li><a href="#sec10-6">10.6 D&eacute;classement d&rsquo;une installation d&rsquo;&eacute;vacuation des d&eacute;chets</a></li>
<li><a href="#sec10-7">10.7 Suivi et surveillance d&rsquo;une installation d&rsquo;&eacute;vacuation des d&eacute;chets</a></li>
<li><a href="#sec10-8">10.8 P&eacute;riode suivant la fermeture d&rsquo;une installation d&rsquo;&eacute;vacuation des d&eacute;chets</a></li>
</ul></li>
<li><a href="#glossary">Glossaire</a></li>
<li><a href="#ref">R&eacute;f&eacute;rences</a></li>
<li><a href="#addInfo">Renseignements suppl&eacute;mentaires</a></li>
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
<h3 id="sec1-1">1.1 Objet</h3>  <p>Ce document a pour but de pr&eacute;senter les exigences et l&rsquo;orientation :</p>  <ul>
<li>sur la gestion des d&eacute;chets radioactifs applicables aux diff&eacute;rents types de titulaires de permis de la CCSN</li>
<li>li&eacute;es aux normes du Groupe CSA applicables &agrave; la gestion des d&eacute;chets radioactifs</li>
<li>sur des sujets particuliers dans les normes relatives &agrave; la gestion des d&eacute;chets</li>
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
<div id="1.2"></div>
<h3 id="sec1-2">1.2 Port&eacute;e</h3>  <p>Les exigences et l&rsquo;orientation contenues dans ce document concernent les installations et les activit&eacute;s autoris&eacute;es par la CCSN qui doivent avoir en place un programme de gestion des d&eacute;chets. Tous les titulaires de permis qui ont en place un programme de gestion des d&eacute;chets sont vis&eacute;s par les exigences &eacute;nonc&eacute;es aux sections 4, 5, 6, 7 et 8 du pr&eacute;sent document d&rsquo;application de la r&eacute;glementation.</p>   <p>Outre les exigences ci-dessus, les installations de stockage des d&eacute;chets ainsi que les installations d&rsquo;&eacute;vacuation sont soumises aux exigences des sections 9 et 10, respectivement.</p>   <p>Les titulaires de permis qui ne sont pas soumis aux exigences d&rsquo;un programme de gestion des d&eacute;chets voudront peut-&ecirc;tre consulter ce document &agrave; titre d&rsquo;information.</p>  <p>Ce document donne des pr&eacute;cisions sur les exigences de la norme CSA N292.0, Principes g&eacute;n&eacute;raux pour la gestion des d&eacute;chets radioactifs et du combustible irradi&eacute; [1]. D&rsquo;autres <a href="/fra/acts-and-regulations/regulatory-documents/index">documents d&rsquo;application de la r&eacute;glementation de la CCSN</a> s&rsquo;ajoutent au pr&eacute;sent document, notamment le REGDOC-3.2.1, <em>L&rsquo;information et la divulgation publiques</em> [2], et le REGDOC-3.2.2, <em>Mobilisation des Autochtones</em> [3].</p>
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
<h3 id="sec1-3">1.3 L&eacute;gislation pertinente</h3>  <p>Les dispositions de la <em>Loi sur la s&ucirc;ret&eacute; et la r&eacute;glementation nucl&eacute;aires</em> (LSRN) et des r&egrave;glements pris en vertu de celle-ci qui s&rsquo;appliquent au pr&eacute;sent document sont les suivantes :</p>
<ul>
<li>article 26 de la <a href="https://laws-lois.justice.gc.ca/fra/lois/n-28.3/">LSRN</a></li>
<li>alin&eacute;as 12(1)a) et 17b), paragraphe 3(1) et article 4 du <a href="https://laws-lois.justice.gc.ca/fra/reglements/DORS-2000-202/page-1.html"><em>R&egrave;glement g&eacute;n&eacute;ral sur la s&ucirc;ret&eacute; et la r&eacute;glementation nucl&eacute;aires</em></a></li>
<li>alin&eacute;as 3k), 4e), 5f), 5i), 5j), 5k), 6c), 6d), 6h), 6i), 6j), 6n) et articles 7 et 8 du <a href="https://laws.justice.gc.ca/fra/reglements/DORS-2000-204/page-1.html"><em>R&egrave;glement sur les installations nucl&eacute;aires de cat&eacute;gorie I</em></a></li>
<li>alin&eacute;as 4t), 5i) et 5k) du <a href="https://laws.justice.gc.ca/fra/reglements/DORS-2000-205/page-1.html"><em>R&egrave;glement sur les installations nucl&eacute;aires et l&rsquo;&eacute;quipement r&eacute;glement&eacute; de cat&eacute;gorie II</em></a></li>
<li>alin&eacute;as 3a), 3c), 3d), 8b) et article 7 du <a href="https://laws.justice.gc.ca/fra/reglements/DORS-2000-206/page-1.html"><em>R&egrave;glement sur les mines et les usines de concentration d&rsquo;uranium</em></a></li>
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
<div id="2"></div>
<h2 id="sec2">2. Politique et principes g&eacute;n&eacute;raux de la CCSN pour la gestion des d&eacute;chets radioactifs</h2>  <p>En vertu de la Politique-cadre en mati&egrave;re de d&eacute;chets radioactifs du Canada [4], les propri&eacute;taires de d&eacute;chets sont tenus de g&eacute;rer ces d&eacute;chets de mani&egrave;re s&ucirc;re et s&eacute;curitaire et de prendre des dispositions pour en assurer la gestion &agrave; long terme. Le REGDOC-2.11, <em>Cadre de gestion des d&eacute;chets radioactifs et du d&eacute;classement au Canada</em> [5], d&eacute;crit le cadre national et la philosophie qui sous-tendent les d&eacute;marches de la CCSN pour la r&eacute;glementation de la gestion des d&eacute;chets radioactifs.</p>
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
<h2 id="sec2-1">2.1 Cadre de gestion des d&eacute;chets de la CCSN</h2>  <p>Outre le pr&eacute;sent document d&rsquo;application de la r&eacute;glementation, le cadre de r&eacute;glementation de la CCSN en mati&egrave;re de gestion des d&eacute;chets comprend les documents suivants :</p>
<ul>
<li>REGDOC-2.11, <em>Cadre de gestion des d&eacute;chets radioactifs et du d&eacute;classement au Canada</em></li>
<li>REGDOC-2.11.1, <em>Gestion des d&eacute;chets, tome II : Gestion des st&eacute;riles des mines d&rsquo;uranium et des r&eacute;sidus des usines de concentration d&rsquo;uranium</em></li>
<li>REGDOC-2.11.1, <em>Gestion des d&eacute;chets, tome III : &Eacute;valuation de la s&ucirc;ret&eacute; &agrave; long terme de la gestion des d&eacute;chets radioactifs</em> (en cours de r&eacute;vision) </li>
<li>G-219, <em>Plans de d&eacute;classement des activit&eacute;s autoris&eacute;es</em> (en cours de r&eacute;vision)</li>
</ul>  <p>Les <a href="/fra/acts-and-regulations/regulatory-documents/csa-standards">normes CSA</a> suivantes constituent un compl&eacute;ment au cadre de r&eacute;glementation de la CCSN :</p>
<ul>
<li>N292.0, <em>Principes g&eacute;n&eacute;raux pour la gestion des d&eacute;chets radioactifs et du combustible irradi&eacute;</em></li>
<li>N292.1, <em>Entreposage humide du combustible irradi&eacute; et d&rsquo;autres mati&egrave;res radioactives</em></li>
<li>N292.2, <em>Entreposage &agrave; sec provisoire du combustible irradi&eacute;</em></li>
<li>N292.3, <em>Gestion des d&eacute;chets radioactifs de faible et de moyenne activit&eacute;</em></li>
<li>N292.5, <em>Ligne directrice sur l&rsquo;exemption ou la lib&eacute;ration du contr&ocirc;le r&eacute;glementaire des mati&egrave;res contenant ou susceptibles de contenir des substances nucl&eacute;aires</em></li>
<li>N292.6, <em>Gestion &agrave; long terme des d&eacute;chets radioactifs et du combustible irradi&eacute;</em></li>
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
<h2 id="sec3">3. Contexte</h2>  <p>Au Canada, un d&eacute;chet radioactif est d&eacute;fini comme toute mati&egrave;re (liquide, gazeuse ou solide) qui contient une substance nucl&eacute;aire radioactive, au sens que lui donne l&rsquo;article 2 de la LSRN, et pour laquelle aucune utilisation ult&eacute;rieure n&rsquo;est pr&eacute;vue. En plus de contenir des substances nucl&eacute;aires, les d&eacute;chets radioactifs peuvent aussi contenir des substances dangereuses non radioactives, telles que d&eacute;finies &agrave; l&rsquo;article 1 du <em>R&egrave;glement g&eacute;n&eacute;ral sur la s&ucirc;ret&eacute; et la r&eacute;glementation nucl&eacute;aires</em>.</p>  <p>Comme toutes les substances nucl&eacute;aires associ&eacute;es aux activit&eacute;s autoris&eacute;es deviendront t&ocirc;t ou tard des d&eacute;chets radioactifs, il faut veiller &agrave; leur s&ucirc;ret&eacute; &agrave; toutes les &eacute;tapes de leur gestion. Les &eacute;tapes du processus de gestion des d&eacute;chets radioactifs peuvent comprendre :</p>   <ul>
<li>la production et le contr&ocirc;le</li>
<li>la manutention, pouvant comprendre
<ul>
<li>la collecte</li>
<li>le tri</li>
<li>la s&eacute;paration</li>
<li>l&#39;emballage</li>
<li>le chargement</li>
<li>le transfert</li>
</ul></li>
<li>le traitement, pouvant comprendre
<ul>
<li>le pr&eacute;traitement</li>
<li>le traitement</li>
<li>le conditionnement</li>
</ul></li>
<li>le stockage</li>
<li>le transport</li>
<li>l&#39;&eacute;vacuation</li>  </ul>
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
<h2 id="sec4">4. Exigences g&eacute;n&eacute;rales</h2>  <p>Tous les titulaires de permis qui g&egrave;rent des d&eacute;chets radioactifs doivent :</p>
<ul>
<li>g&eacute;rer ces d&eacute;chets en &eacute;vitant d&rsquo;imposer un fardeau indu aux g&eacute;n&eacute;rations futures, en recherchant des solutions s&eacute;curitaires, r&eacute;alisables et acceptables sur le plan environnemental pour leur gestion &agrave; long terme</li>
<li>assurer la gestion s&eacute;curitaire de ces d&eacute;chets, en tenant compte de la sant&eacute; et de la s&eacute;curit&eacute; des personnes, de l&rsquo;environnement et de la s&eacute;curit&eacute; nationale</li>
<li>produire et tenir &agrave; jour des registres de chacune des &eacute;tapes de gestion des d&eacute;chets radioactifs dont ils sont responsables</li>
<li>prendre en compte l&rsquo;interd&eacute;pendance de toutes les &eacute;tapes de la gestion des d&eacute;chets radioactifs; les diff&eacute;rentes &eacute;tapes de la gestion des d&eacute;chets radioactifs doivent &ecirc;tre &eacute;valu&eacute;es en tant qu&rsquo;&eacute;tapes individuelles du processus et dans le cadre d&rsquo;un processus int&eacute;gr&eacute; de gestion des d&eacute;chets</li>
<li>&eacute;laborer et mettre en &oelig;uvre la documentation (programmes, proc&eacute;dures, directives, etc.) n&eacute;cessaire pour assurer la s&ucirc;ret&eacute; de toutes les activit&eacute;s de gestion des d&eacute;chets dont ils sont responsables; les programmes et proc&eacute;dures n&eacute;cessaires pour assurer la s&ucirc;ret&eacute; doivent &ecirc;tre &eacute;labor&eacute;s en fonction de la taille de l&rsquo;installation ou de l&rsquo;ampleur de l&rsquo;activit&eacute; approuv&eacute;e ainsi que du stock de d&eacute;chets</li>
<li>faire le suivi des stocks de d&eacute;chets sous leur contr&ocirc;le</li>
<li>utiliser l&rsquo;exp&eacute;rience d&rsquo;exploitation et les le&ccedil;ons tir&eacute;es d&rsquo;autres installations ou activit&eacute;s semblables ainsi que les progr&egrave;s r&eacute;alis&eacute;s en science et en technologie afin d&rsquo;am&eacute;liorer constamment la s&ucirc;ret&eacute; de l&rsquo;activit&eacute; ou de l&rsquo;installation de gestion des d&eacute;chets</li>
<li>fournir &agrave; la CCSN des renseignements sur la propri&eacute;t&eacute; des d&eacute;chets radioactifs en leur possession</li>   </ul>
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
<h2 id="sec5">5. Programme de gestion des d&eacute;chets</h2>  <p>Le titulaire de permis doit &eacute;laborer et mettre en &oelig;uvre un programme de gestion des d&eacute;chets afin de contr&ocirc;ler la gestion des d&eacute;chets radioactifs aux endroits o&ugrave; ceux-ci sont produits, manipul&eacute;s, trait&eacute;s, entrepos&eacute;s, transport&eacute;s ou &eacute;limin&eacute;s.</p>  <p>Le programme de gestion des d&eacute;chets doit :</p>  <ul>
<li>r&eacute;pertorier les activit&eacute;s de gestion des d&eacute;chets entreprises</li>
<li>&eacute;noncer clairement les exigences, les crit&egrave;res et les objectifs &agrave; atteindre ainsi que les normes de s&ucirc;ret&eacute; &agrave; utiliser</li>
<li>&eacute;tablir une structure organisationnelle qui pr&eacute;cise les r&ocirc;les et les responsabilit&eacute;s de tous les postes li&eacute;s &agrave; la gestion des d&eacute;chets radioactifs</li>
<li>pr&eacute;senter les aspects du syst&egrave;me de gestion qui assurent l&rsquo;efficacit&eacute; du programme de gestion des d&eacute;chets</li>
<li>tenir compte de tous les flux de d&eacute;chets associ&eacute;s &agrave; des substances nucl&eacute;aires ou susceptibles d&rsquo;&ecirc;tre contamin&eacute;s par celles-ci</li>
<li>s&rsquo;appuyer sur la hi&eacute;rarchie des d&eacute;chets</li>  </ul>  <p>Dans le cadre du programme de gestion des d&eacute;chets, le titulaire de permis doit en outre &eacute;laborer et mettre en &oelig;uvre des programmes et des proc&eacute;dures connexes adapt&eacute;s &agrave; la gestion des d&eacute;chets. Les programmes et proc&eacute;dures connexes devraient correspondre au risque des flux de d&eacute;chets g&eacute;r&eacute;s. D&rsquo;autres renseignements sur la gestion des programmes sont pr&eacute;sent&eacute;s dans le projet de REGDOC-2.1.1, <em>Syst&egrave;me de gestion</em> [6] et la norme CSA N286, <em>Exigences relatives au syst&egrave;me de gestion des installations nucl&eacute;aires</em> [7].</p>
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
<h2 id="sec6">6. Classification des d&eacute;chets radioactifs, caract&eacute;risation des d&eacute;chets et crit&egrave;res d&rsquo;acceptation des d&eacute;chets</h2>
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
<h3 id="sec6-1">6.1 Classification des d&eacute;chets</h3>  <p>Le titulaire de permis doit mettre en &oelig;uvre un syst&egrave;me de classification des d&eacute;chets radioactifs. Ce syst&egrave;me de classification doit &ecirc;tre fond&eacute; sur le dossier de s&ucirc;ret&eacute; et l&rsquo;&eacute;valuation de la s&ucirc;ret&eacute; exig&eacute;s pour l&rsquo;installation ou l&rsquo;activit&eacute; de gestion des d&eacute;chets.</p>   <p>Les d&eacute;chets devraient &ecirc;tre class&eacute;s en fonction du degr&eacute; de confinement et d&rsquo;isolement requis pour assurer leur s&ucirc;ret&eacute;, en tenant compte du risque potentiel des diff&eacute;rents types de d&eacute;chets et de la dur&eacute;e du danger.</p>   <p>Au Canada, on reconna&icirc;t quatre grandes classifications de d&eacute;chets radioactifs :</p>  <ul>
<li><p>Les d&eacute;chets radioactifs de faible activit&eacute; (DFA) contiennent des mati&egrave;res renfermant des radionucl&eacute;ides en quantit&eacute;s sup&eacute;rieures aux niveaux de lib&eacute;ration et aux quantit&eacute;s d&rsquo;exemption (tels que d&eacute;finis dans le <em>R&egrave;glement sur les substances nucl&eacute;aires et les appareils &agrave; rayonnement</em>), mais qui sont g&eacute;n&eacute;ralement caract&eacute;ris&eacute;s par une quantit&eacute; limit&eacute;e de radionucl&eacute;ides &agrave; longue p&eacute;riode. Les DFA requi&egrave;rent l&rsquo;isolement et le confinement pour des p&eacute;riodes pouvant atteindre quelques centaines d&rsquo;ann&eacute;es. Une installation d&rsquo;&eacute;vacuation artificielle pr&egrave;s de la surface convient g&eacute;n&eacute;ralement pour ces d&eacute;chets.</p>
<p>Les DRFA comprennent les sous-cat&eacute;gories suivantes :</p>
<ul>
<li>Les d&eacute;chets de tr&egrave;s faible activit&eacute; pr&eacute;sentent un risque faible, mais d&eacute;passent les seuils de lib&eacute;ration et d&rsquo;exemption. Les installations de gestion &agrave; long terme de ces d&eacute;chets ne requi&egrave;rent en g&eacute;n&eacute;ral pas un confinement ou un isolement pouss&eacute;. Les concentrations de radionucl&eacute;ides &agrave; longue p&eacute;riode radioactive sont g&eacute;n&eacute;ralement tr&egrave;s limit&eacute;es. Un d&eacute;p&ocirc;t pr&egrave;s de la surface est ordinairement suffisant pour l&rsquo;&eacute;vacuation de ces d&eacute;chets.</li>
<li>Les d&eacute;chets radioactifs de faible activit&eacute; &agrave; tr&egrave;s courte dur&eacute;e de vie sont des d&eacute;chets qui peuvent &ecirc;tre entrepos&eacute;s pour d&eacute;sint&eacute;gration pendant une p&eacute;riode ne d&eacute;passant pas quelques ann&eacute;es et dont la lib&eacute;ration est ensuite autoris&eacute;e. Cette classification englobe les d&eacute;chets radioactifs ne contenant que des radionucl&eacute;ides &agrave; p&eacute;riode courte typiquement utilis&eacute;s &agrave; des fins biom&eacute;dicales ou de recherche. Le principal crit&egrave;re pour ces d&eacute;chets est la p&eacute;riode radioactive des nucl&eacute;ides pr&eacute;dominants. En r&egrave;gle g&eacute;n&eacute;rale, le protocole de gestion pour ceux-ci ne devrait s&rsquo;appliquer qu&rsquo;aux radionucl&eacute;ides ayant une p&eacute;riode radioactive de 100 jours ou moins.</li>
</ul></li>
<li>Les d&eacute;chets radioactifs de moyenne activit&eacute; contiennent habituellement des radionucl&eacute;ides &agrave; longue p&eacute;riode radioactive qui doivent &ecirc;tre isol&eacute;s et confin&eacute;s pendant plus de quelques centaines d&rsquo;ann&eacute;es. Ces d&eacute;chets ne n&eacute;cessitent aucune disposition particuli&egrave;re ou alors, des dispositions limit&eacute;es, pour la dissipation de la chaleur pendant leur stockage et leur &eacute;vacuation. En raison de leur contenu en radionucl&eacute;ides &agrave; longue p&eacute;riode, ces d&eacute;chets exigent g&eacute;n&eacute;ralement un degr&eacute; de confinement et d&rsquo;isolement plus important que celui pouvant &ecirc;tre assur&eacute; par les d&eacute;p&ocirc;ts pr&egrave;s de la surface. Les d&eacute;chets de cette cat&eacute;gorie peuvent devoir &ecirc;tre enfouis &agrave; des profondeurs interm&eacute;diaires plus grandes, allant de quelques dizaines &agrave; quelques centaines de m&egrave;tres, voire plus.</li>
<li>Les d&eacute;chets radioactifs de haute activit&eacute; d&eacute;signent le combustible nucl&eacute;aire us&eacute; qui a &eacute;t&eacute; d&eacute;clar&eacute; d&eacute;chet radioactif ou d&eacute;chet produisant beaucoup de chaleur par d&eacute;sint&eacute;gration radioactive. Ils pr&eacute;sentent habituellement des niveaux d&rsquo;activit&eacute; volumique de l&rsquo;ordre de 10<sup>4</sup> &agrave; 10<sup>6</sup> TBq/m<sup>3</sup>. Ils s&rsquo;accompagnent de rayonnements p&eacute;n&eacute;trants n&eacute;cessitant un blindage. Ils contiennent aussi d&rsquo;importantes quantit&eacute;s de radionucl&eacute;ides &agrave; longue p&eacute;riode radioactive, d&rsquo;o&ugrave; la n&eacute;cessit&eacute; d&rsquo;un isolement &agrave; long terme. Le placement dans des formations g&eacute;ologiques profondes et stables &agrave; des profondeurs de plusieurs centaines de m&egrave;tres ou plus sous la surface est recommand&eacute; pour la gestion &agrave; long terme de ces d&eacute;chets.</li>
<li>Les r&eacute;sidus de mines et d&rsquo;usines de concentration d&rsquo;uranium sont un type particulier de d&eacute;chet radioactif g&eacute;n&eacute;r&eacute; par l&rsquo;extraction et le traitement du minerai d&rsquo;uranium et la production de concentr&eacute; d&rsquo;uranium. En plus des r&eacute;sidus, les activit&eacute;s mini&egrave;res g&eacute;n&egrave;rent typiquement de grosses quantit&eacute;s de st&eacute;riles lorsque les galeries sont creus&eacute;es pour permettre l&rsquo;acc&egrave;s au corps min&eacute;ralis&eacute; en vue de l&rsquo;extraction du minerai. Les d&eacute;chets renferment d&rsquo;importantes concentrations d&rsquo;&eacute;l&eacute;ments radioactifs &agrave; longue p&eacute;riode qui ne d&eacute;croissent pas de fa&ccedil;on significative &agrave; long terme. En g&eacute;n&eacute;ral, &eacute;tant donn&eacute; les grandes quantit&eacute;s de d&eacute;chets g&eacute;n&eacute;r&eacute;es, la seule solution pratique de gestion &agrave; long terme est leur stockage pr&egrave;s de la surface dans des installations situ&eacute;es &agrave; proximit&eacute; des mines et usines de concentration d&rsquo;uranium. D&rsquo;autres renseignements sont pr&eacute;sent&eacute;s dans le REGDOC-2.11.1, <em>Gestion des d&eacute;chets, tome II : Gestion des st&eacute;riles des mines d&rsquo;uranium et des r&eacute;sidus des usines de concentration d&rsquo;uranium</em> [8].</li>  </ul>
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
<h3 id="sec6-2">6.2 Caract&eacute;risation des d&eacute;chets</h3>  <p>Le titulaire de permis doit proc&eacute;der &agrave; une caract&eacute;risation des d&eacute;chets aux diverses &eacute;tapes du processus de gestion des d&eacute;chets radioactifs. La caract&eacute;risation des d&eacute;chets doit comprendre une &eacute;valuation des propri&eacute;t&eacute;s physiques, m&eacute;caniques, chimiques, biologiques, thermiques et/ou radiologiques des d&eacute;chets, s&rsquo;il y a lieu. Le titulaire de permis doit justifier aupr&egrave;s de la CCSN les aspects qui ne s&rsquo;appliquent pas. Le titulaire de permis doit tenir des registres d&eacute;taill&eacute;s des caract&eacute;risations effectu&eacute;es.</p>
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
<h3 id="sec6-3">6.3 Crit&egrave;res d&rsquo;acceptation des d&eacute;chets</h3>  <p>Le titulaire de permis doit d&eacute;finir des crit&egrave;res d&rsquo;acceptation des d&eacute;chets qui sont tir&eacute;s du dossier de s&ucirc;ret&eacute; et de l&rsquo;&eacute;valuation de la s&ucirc;ret&eacute; et conformes &agrave; ceux-ci. Les crit&egrave;res d&rsquo;acceptation des d&eacute;chets doivent pr&eacute;ciser les caract&eacute;ristiques chimiques, physiques, radiologiques, m&eacute;caniques, biologiques et autres des d&eacute;chets, des formes de d&eacute;chets, des colis de d&eacute;chets et des d&eacute;chets non emball&eacute;s qui seront accept&eacute;s &agrave; des fins de manutention, de traitement, de stockage, de transport et/ou d&rsquo;&eacute;vacuation &agrave; l&rsquo;installation ou sur les lieux de l&rsquo;activit&eacute;.</p>  <p>En l&rsquo;absence d&rsquo;exigences d&rsquo;acceptation pour l&rsquo;&eacute;vacuation, le titulaire de permis devrait d&eacute;finir des crit&egrave;res d&rsquo;acceptation des d&eacute;chets en se fondant sur des hypoth&egrave;ses raisonnables quant &agrave; l&rsquo;option d&rsquo;&eacute;vacuation anticip&eacute;e.</p>
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
<h2 id="sec7">7. &Eacute;tapes de la gestion des d&eacute;chets radioactifs</h2>
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
<h3 id="sec7-1">7.1 Production</h3>  <p>Le titulaire de permis doit envisager des mesures afin de contr&ocirc;ler tant le volume de d&eacute;chets radioactifs produits que leur teneur radioactive avant le d&eacute;but des activit&eacute;s autoris&eacute;es, depuis la phase de conception et pendant toute la vie utile de l&rsquo;installation.</p>  <p>Le titulaire de permis doit, dans toute la mesure du possible, r&eacute;duire la production de d&eacute;chets radioactifs. Il doit tenir compte de la hi&eacute;rarchie des d&eacute;chets dans la gestion des d&eacute;chets radioactifs, &agrave; savoir, pr&eacute;venir la production, r&eacute;duire le volume et la teneur radioactive, r&eacute;utiliser et recycler les mati&egrave;res et les composants et &eacute;liminer les d&eacute;chets.</p>   <p>La lib&eacute;ration de certaines mati&egrave;res du contr&ocirc;le r&eacute;glementaire apr&egrave;s leur traitement ad&eacute;quat et/ou leur stockage pour une p&eacute;riode suffisamment longue, ainsi que la r&eacute;utilisation et le recyclage des mati&egrave;res peuvent &ecirc;tre efficaces lorsqu&rsquo;il s&rsquo;agit de r&eacute;duire la quantit&eacute; de d&eacute;chets radioactifs devant subir un traitement suppl&eacute;mentaire ou &ecirc;tre stock&eacute;s. Les limites et les crit&egrave;res pour la lib&eacute;ration des mati&egrave;res du contr&ocirc;le r&eacute;glementaire sont pr&eacute;sent&eacute;s dans le <em>R&egrave;glement sur les substances nucl&eacute;aires et les appareils &agrave; rayonnement</em>.</p>
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
<h3 id="sec7-2">7.2 Manutention</h3>  <p>Pour les m&eacute;thodes de manutention des d&eacute;chets retenues, le titulaire de permis doit aussi tenir compte :</p>
<ul>
<li>des caract&eacute;ristiques des d&eacute;chets</li>
<li>des types de syst&egrave;mes de confinement et des colis</li>
<li>de la r&eacute;duction des risques radiologiques, conform&eacute;ment au principe ALARA</li>
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
<div id="7.3"></div>
<h3 id="sec7-3">7.3 Traitement</h3>  <p>Au moment de choisir des m&eacute;thodes de traitement des d&eacute;chets, le titulaire de permis tiendra compte des caract&eacute;ristiques des d&eacute;chets et des demandes impos&eacute;es aux diff&eacute;rentes &eacute;tapes de leur gestion.</p>  <p>Il devrait envisager un traitement rapide des d&eacute;chets afin de les convertir en une forme passivement s&ucirc;re ou de les stabiliser par un autre moyen. Le titulaire de permis devrait r&eacute;duire le risque potentiel des d&eacute;chets dans la mesure du raisonnable &agrave; chaque stade de traitement des d&eacute;chets.</p>  <p>Le titulaire de permis devrait s&eacute;parer les sources scell&eacute;es des autres d&eacute;chets en raison des exigences r&eacute;glementaires diff&eacute;rentes qui s&rsquo;appliquent. Il devrait conserver les sources scell&eacute;es us&eacute;es ou retir&eacute;es du service dans un conteneur blind&eacute; pendant la manutention. Afin de pr&eacute;server l&rsquo;int&eacute;grit&eacute; des sources scell&eacute;es us&eacute;es ou retir&eacute;es du service, le titulaire du permis ne devrait pas soumettre celles-ci &agrave; un processus de compactage, de broyage ou d&rsquo;incin&eacute;ration. Si l&rsquo;int&eacute;grit&eacute; d&rsquo;une source scell&eacute;e a &eacute;t&eacute; compromise, le titulaire de permis ne doit plus la traiter comme une source scell&eacute;e. De plus amples renseignements sur les sources scell&eacute;es sont pr&eacute;sent&eacute;s dans le REGDOC-2.12.3, <em>La s&eacute;curit&eacute; des substances nucl&eacute;aires : sources scell&eacute;es et mati&egrave;res nucl&eacute;aires de cat&eacute;gories I, II et III</em> [9].</p>
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
<h3 id="sec7-4">7.4 Transport</h3>  <p>Le titulaire de permis doit transporter les d&eacute;chets radioactifs conform&eacute;ment au <em>R&egrave;glement sur l&rsquo;emballage et le transport des substances nucl&eacute;aires (2015)</em>.</p>
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
<h3 id="sec7-5">7.5 Stockage</h3>  <p>Le titulaire de permis doit entreposer les d&eacute;chets radioactifs en toute s&eacute;curit&eacute;, d&rsquo;une mani&egrave;re qui assure la protection des personnes et de l&rsquo;environnement et conform&eacute;ment aux exigences r&eacute;glementaires.</p>  <p>Le titulaire de permis doit mener les activit&eacute;s de stockage conform&eacute;ment aux proc&eacute;dures document&eacute;es. Il doit tenir compte de l&rsquo;incidence de toute modification apport&eacute;e &agrave; ces activit&eacute;s sur la s&ucirc;ret&eacute; des d&eacute;chets entrepos&eacute;s.</p>  <p>Le titulaire de permis doit entreposer les d&eacute;chets de mani&egrave;re qu&rsquo;ils puissent &ecirc;tre inspect&eacute;s, surveill&eacute;s, r&eacute;cup&eacute;r&eacute;s et pr&eacute;serv&eacute;s dans un &eacute;tat qui permet leur gestion subs&eacute;quente.</p>  <p>De plus amples renseignements sur le stockage sont fournis &agrave; la section 9, Installations de stockage des d&eacute;chets, qui pr&eacute;sente les crit&egrave;res applicables au stockage de d&eacute;chets radioactifs.</p>  <h4>Stockage pour d&eacute;sint&eacute;gration</h4>  <p>Le titulaire de permis devrait s&eacute;parer les d&eacute;chets radioactifs qui doivent &ecirc;tre entrepos&eacute;s pour d&eacute;sint&eacute;gration des autres d&eacute;chets, depuis le point de production jusqu&rsquo;&agrave; leur &eacute;vacuation d&eacute;finitive.</p>
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
<h3 id="sec7-6">7.6 &Eacute;vacuation</h3>  <p>Le titulaire de permis doit &eacute;liminer les d&eacute;chets radioactifs en toute s&eacute;curit&eacute;, d&rsquo;une mani&egrave;re qui assure la protection des personnes et de l&rsquo;environnement et conform&eacute;ment aux exigences r&eacute;glementaires.</p>  <p>De plus amples renseignements sur l&rsquo;&eacute;vacuation des d&eacute;chets sont fournis &agrave; la section 10, Installation d&rsquo;&eacute;vacuation des d&eacute;chets, qui pr&eacute;sente les crit&egrave;res applicables &agrave; l&rsquo;&eacute;vacuation des d&eacute;chets radioactifs.</p>
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
<h2 id="sec8">8. Colis de d&eacute;chets</h2>  <p>Le titulaire de permis doit organiser les colis de d&eacute;chets de mani&egrave;re &agrave; ce que les d&eacute;chets radioactifs soient confin&eacute;s conform&eacute;ment aux r&egrave;glements applicables, pendant l&rsquo;exploitation normale et dans des conditions d&rsquo;accident lors de la manutention, du traitement, du stockage, de l&rsquo;&eacute;vacuation et, le cas &eacute;ch&eacute;ant, du transport des d&eacute;chets.</p>   <p>Le titulaire de permis doit s&rsquo;assurer que les colis de d&eacute;chets et les d&eacute;chets non emball&eacute;s accept&eacute;s &agrave; des fins de traitement, de stockage et/ou d&rsquo;&eacute;vacuation sont conformes aux crit&egrave;res d&rsquo;acceptation des d&eacute;chets &eacute;tablis pour l&rsquo;installation ou l&rsquo;activit&eacute; autoris&eacute;e.</p>
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
<h2 id="sec9">9. Installations de stockage des d&eacute;chets</h2>
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
<h3 id="sec9-1">9.1 Exigences g&eacute;n&eacute;rales applicables aux installations de stockage des d&eacute;chets</h3>  <p>Le titulaire de permis doit &eacute;laborer, mettre en &oelig;uvre et tenir &agrave; jour un dossier de s&ucirc;ret&eacute; et une &eacute;valuation de la s&ucirc;ret&eacute; connexe pour tout le cycle de vie de l&rsquo;installation de stockage des d&eacute;chets. Le projet de REGDOC-2.4.4, <em>Analyse de la s&ucirc;ret&eacute; pour les installations de cat&eacute;gorie IB</em> [10], contient des exigences et de l&rsquo;orientation sur l&rsquo;analyse de la s&ucirc;ret&eacute; pour les installations de stockage des d&eacute;chets.</p>  <p>En ce qui concerne les installations de stockage &agrave; long terme des d&eacute;chets, le projet de REGDOC-2.11.1 <em>Gestion des d&eacute;chets, tome III : &Eacute;valuation de la s&ucirc;ret&eacute; &agrave; long terme de la gestion des d&eacute;chets radioactifs</em> [11], renferme des exigences et de l&rsquo;orientation &agrave; l&rsquo;intention des demandeurs et des titulaires de permis pour l&rsquo;&eacute;laboration du dossier de s&ucirc;ret&eacute; et de l&rsquo;&eacute;valuation de la s&ucirc;ret&eacute; connexe aux fins de la gestion &agrave; long terme des d&eacute;chets radioactifs.</p>
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
<h3 id="sec9-2">9.2 Caract&eacute;risation de l&rsquo;emplacement d&rsquo;une installation de stockage des d&eacute;chets</h3>  <p>Le titulaire de permis doit caract&eacute;riser l&rsquo;emplacement &agrave; un niveau de d&eacute;tail permettant de comprendre les caract&eacute;ristiques actuelles du site et son &eacute;volution pr&eacute;vue pendant le cycle de vie de l&rsquo;installation.</p>
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
<h3 id="sec9-3">9.3 Conception d&rsquo;une installation de stockage des d&eacute;chets</h3>  <p>Le titulaire de permis doit concevoir l&rsquo;installation de stockage de mani&egrave;re &agrave; respecter les fonctions de s&ucirc;ret&eacute; fondamentales applicables pendant l&rsquo;exploitation normale, en cas d&rsquo;incidents de fonctionnement pr&eacute;vus, d&rsquo;accidents de dimensionnement ainsi que dans des conditions additionnelles de dimensionnement, &agrave; savoir :</p>
<ul>
<li>le contr&ocirc;le de la sous-criticit&eacute;</li>
<li>la dissipation de la chaleur</li>
<li>le blindage contre le rayonnement</li>
<li>le confinement des mati&egrave;res radioactives</li>
<li>les possibilit&eacute;s de r&eacute;cup&eacute;ration</li>  </ul>  <p>Le titulaire de permis doit r&eacute;pertorier et classer les structures, les syst&egrave;mes et les composants (SSC) importants pour la s&ucirc;ret&eacute;. Il devrait envisager l&rsquo;utilisation de SSC passifs avant de recourir aux SSC actifs. Pour les SSC actifs, il faudrait accorder une importance particuli&egrave;re &agrave; la fiabilit&eacute; des SSC, aux besoins de redondance et de diversification et au comportement des SSC en cas d&rsquo;incident ou d&rsquo;accident.</p>  <p>Le titulaire de permis doit concevoir l&rsquo;installation de stockage des d&eacute;chets de mani&egrave;re &agrave; faciliter l&rsquo;inspection, la surveillance, la mise &agrave; l&rsquo;essai et l&rsquo;entretien des SSC et des colis de d&eacute;chets entrepos&eacute;s dans l&rsquo;installation dans la mesure o&ugrave; ceux-ci sont importants pour assurer la s&ucirc;ret&eacute;.</p>  <p>Le titulaire de permis devrait s&rsquo;assurer que les contr&ocirc;les des syst&egrave;mes fonctionnels (p. ex., manutention des d&eacute;chets, &eacute;quipement et syst&egrave;mes de ventilation) sont ind&eacute;pendants des syst&egrave;mes de protection. Si cela n&rsquo;est pas possible, il faudrait justifier l&rsquo;utilisation de syst&egrave;mes partag&eacute;s ou interreli&eacute;s.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="9.4"></div>
<h3 id="sec9-4">9.4	Construction et mise en service d&rsquo;une installation de stockage des d&eacute;chets</h3>  <p>Le titulaire de permis doit construire l&rsquo;installation de stockage des d&eacute;chets conform&eacute;ment aux documents de conception.</p>   <p>Le titulaire de permis doit s&rsquo;assurer que toute modification apport&eacute;e &agrave; la conception pendant la construction est soumise &agrave; une proc&eacute;dure de contr&ocirc;le des modifications.</p>  <p>Le titulaire de permis doit s&rsquo;assurer que l&rsquo;&eacute;quipement ou les SSC remplissent les fonctions pour lesquelles ils ont &eacute;t&eacute; con&ccedil;us. Au terme de la mise en service, il doit produire un rapport final de mise en service. Le rapport doit documenter l&rsquo;&eacute;tat de l&rsquo;installation &agrave; la fin de la construction, les essais r&eacute;alis&eacute;s et la preuve que ces essais ont &eacute;t&eacute; effectu&eacute;s avec succ&egrave;s ainsi que toute modification apport&eacute;e &agrave; l&rsquo;installation ou aux proc&eacute;dures pendant la construction. Le rapport doit fournir l&rsquo;assurance que toutes les conditions d&rsquo;autorisation ont &eacute;t&eacute; respect&eacute;es.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="9.5"></div>
<h3 id="sec9-5">9.5 Exploitation d&rsquo;une installation de stockage des d&eacute;chets</h3>  <p>Le titulaire de permis doit &eacute;tablir et documenter les limites et conditions d&rsquo;exploitation d&eacute;coulant des &eacute;valuations de la s&ucirc;ret&eacute; afin de maintenir l&rsquo;installation dans un &eacute;tat s&ucirc;r.</p>  <p>Le titulaire de permis doit exploiter l&rsquo;installation de stockage des d&eacute;chets conform&eacute;ment aux proc&eacute;dures document&eacute;es. Des proc&eacute;dures devraient &ecirc;tre mises au point pour la gestion et l&rsquo;exploitation d&rsquo;une installation de gestion des d&eacute;chets dans des conditions normales et lors d&rsquo;incidents et d&rsquo;accidents hypoth&eacute;tiques. Le titulaire de permis devrait examiner l&rsquo;incidence de toute modification apport&eacute;e aux activit&eacute;s sur la s&ucirc;ret&eacute; des d&eacute;chets entrepos&eacute;s.</p>  <p>Le titulaire de permis doit surveiller les limites et conditions d&rsquo;exploitation et les revoir au besoin, pour l&rsquo;une ou l&rsquo;autre des raisons suivantes :</p>
<ul>
<li>&agrave; la lumi&egrave;re de l&rsquo;exp&eacute;rience d&rsquo;exploitation</li>
<li>&agrave; la suite de modifications apport&eacute;es &agrave; l&rsquo;installation et/ou au type de d&eacute;chets radioactifs entrepos&eacute;s</li>
<li>dans le cadre du processus d&rsquo;examen p&eacute;riodique du dossier de s&ucirc;ret&eacute; et de l&rsquo;&eacute;valuation de la s&ucirc;ret&eacute; connexe pour l&rsquo;installation</li>
<li>dans le cas o&ugrave; des modifications significatives sont apport&eacute;es aux conditions juridiques ou r&eacute;glementaires</li>
</ul>  <p>Le titulaire de permis devrait entretenir, mettre &agrave; l&rsquo;essai et inspecter l&rsquo;installation &agrave; la fr&eacute;quence n&eacute;cessaire pour veiller &agrave; ce que le degr&eacute; de fiabilit&eacute; de l&rsquo;&eacute;quipement demeure &eacute;lev&eacute; et que l&rsquo;efficacit&eacute; des syst&egrave;mes respecte le but de la conception pour l&rsquo;installation. </p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="9.6"></div>
<h3 id="sec9-6">9.6	D&eacute;classement d&rsquo;une installation de stockage des d&eacute;chets</h3>  <p>Le titulaire de permis doit proc&eacute;der au d&eacute;classement de l&rsquo;installation de stockage des d&eacute;chets conform&eacute;ment au document G-219, <em>Plans de d&eacute;classement des activit&eacute;s autoris&eacute;es</em> [12].</p>
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
<h2 id="sec10">10. Installations d&rsquo;&eacute;vacuation des d&eacute;chets</h2>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="10.1"></div>
<h3 id="sec10-1">10.1 Exigences g&eacute;n&eacute;rales applicables aux installations d&rsquo;&eacute;vacuation des d&eacute;chets</h3>  <p>Le titulaire de permis doit &eacute;laborer, ex&eacute;cuter et tenir &agrave; jour un dossier de s&ucirc;ret&eacute; et une &eacute;valuation de la s&ucirc;ret&eacute; connexe pour tout le cycle de vie de l&rsquo;installation d&rsquo;&eacute;vacuation des d&eacute;chets.</p>  <p>Le titulaire de permis doit s&rsquo;assurer que chacune des &eacute;tapes du cycle de vie de l&rsquo;installation d&rsquo;&eacute;vacuation est soutenue, au besoin, par une &eacute;valuation de l&rsquo;emplacement, des options de conception, de construction, d&rsquo;exploitation et de fermeture et de la performance et de la s&ucirc;ret&eacute; du syst&egrave;me d&rsquo;&eacute;vacuation.</p>  <p>Le titulaire de permis doit s&rsquo;assurer de la s&ucirc;ret&eacute; de l&rsquo;installation en pr&eacute;voyant diverses fonctions de s&ucirc;ret&eacute;, notamment l&rsquo;utilisation de multiples barri&egrave;res et contr&ocirc;les, comme le milieu d&rsquo;accueil, les barri&egrave;res artificielles ainsi que l&rsquo;exploitation et la fermeture s&ucirc;res de l&rsquo;installation.</p>  <p>Le titulaire de permis devrait s&rsquo;assurer que l&rsquo;approche progressive d&rsquo;am&eacute;nagement d&rsquo;une installation d&rsquo;&eacute;vacuation permet un examen technique ind&eacute;pendant, un examen r&eacute;glementaire, la prise de d&eacute;cisions et la participation du public &agrave; toutes les &eacute;tapes.</p>   <p>Le titulaire de permis doit implanter, concevoir, construire, mettre en service, exploiter et fermer l&rsquo;installation d&rsquo;&eacute;vacuation de mani&egrave;re &agrave; assurer la s&ucirc;ret&eacute; par des moyens passifs dans toute la mesure du possible et &agrave; r&eacute;duire au minimum les mesures devant &agrave; &ecirc;tre prises apr&egrave;s la fermeture de l&rsquo;installation. Le titulaire de permis doit r&eacute;pertorier et classer les SSC.</p>  <p>En ce qui concerne les installations de gestion &agrave; long terme et d&rsquo;&eacute;vacuation des d&eacute;chets, le projet de REGDOC-2.11.1, <em>Gestion des d&eacute;chets, tome III : &Eacute;valuation de la s&ucirc;ret&eacute; &agrave; long terme de la gestion des d&eacute;chets radioactifs</em> [11], fournit aux demandeurs et aux titulaires de permis des exigences et de l&rsquo;orientation pour l&rsquo;&eacute;laboration du dossier de s&ucirc;ret&eacute; et de l&rsquo;&eacute;valuation de la s&ucirc;ret&eacute; connexe aux fins de la gestion &agrave; long terme des d&eacute;chets radioactifs.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="10.2"></div>
<h3 id="sec10-2">10.2 Caract&eacute;risation de l&rsquo;emplacement pour une installation d&rsquo;&eacute;vacuation des d&eacute;chets</h3>  <p>Le titulaire de permis doit caract&eacute;riser l&rsquo;emplacement choisi &agrave; un niveau de d&eacute;tail suffisant pour permettre une compr&eacute;hension g&eacute;n&eacute;rale des caract&eacute;ristiques actuelles du site et de son &eacute;volution au fil du temps.</p>  <p>Le projet de REGDOC-1.2.1, <em>Orientation sur la caract&eacute;risation de l&rsquo;emplacement des d&eacute;p&ocirc;ts g&eacute;ologiques en profondeur</em> [12] d&eacute;finit, &agrave; l&rsquo;intention des demandeurs de permis, l&rsquo;orientation de la CCSN relativement aux aspects techniques qui peuvent &ecirc;tre pris en compte &agrave; l&rsquo;&eacute;tape de la caract&eacute;risation de l&rsquo;emplacement du processus de s&eacute;lection du site d&rsquo;un d&eacute;p&ocirc;t g&eacute;ologique en profondeur (DGP) pour les d&eacute;chets radioactifs.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="10.3"></div>
<h3 id="sec10-3">10.3	Conception d&rsquo;une installation d&rsquo;&eacute;vacuation des d&eacute;chets</h3>  <p>Le titulaire de permis doit concevoir l&rsquo;installation d&rsquo;&eacute;vacuation des d&eacute;chets de mani&egrave;re &agrave; en assurer la s&ucirc;ret&eacute; tant pendant la p&eacute;riode d&rsquo;exploitation qu&rsquo;apr&egrave;s la fermeture.</p>   <p>Le titulaire de permis doit concevoir l&rsquo;installation et ses barri&egrave;res artificielles de mani&egrave;re &agrave; assurer la s&ucirc;ret&eacute; pendant la construction et la p&eacute;riode d&rsquo;exploitation. Il doit aussi pr&eacute;supposer l&rsquo;&eacute;ventualit&eacute; d&rsquo;&eacute;v&eacute;nements perturbateurs.</p>  <p>Le titulaire de permis doit fonder la conception de l&rsquo;installation d&rsquo;&eacute;vacuation sur :</p>  <ul>
<li>le rendement pr&eacute;vu de l&rsquo;installation, afin de pr&eacute;server la sant&eacute; et la s&eacute;curit&eacute; des personnes et de prot&eacute;ger l&rsquo;environnement pendant des p&eacute;riodes qui tiennent compte de la dur&eacute;e de l&rsquo;effet maximal ou pendant une p&eacute;riode devant &ecirc;tre justifi&eacute;e par le demandeur</li>
<li>les mati&egrave;res radioactives &agrave; stocker et leurs caract&eacute;ristiques</li>
<li>les caract&eacute;ristiques de l&rsquo;environnement local et r&eacute;gional</li>
<li>l&rsquo;&eacute;laboration de crit&egrave;res d&rsquo;acceptation des d&eacute;chets pour les mati&egrave;res radioactives &agrave; stocker</li>
<li>l&rsquo;&eacute;valuation de la s&ucirc;ret&eacute; mise au point pour l&rsquo;installation et refl&eacute;tant les crit&egrave;res d&rsquo;acceptation des d&eacute;chets retenus</li>  </ul>  <p>Le titulaire de permis doit s&rsquo;assurer que la conception de l&rsquo;installation d&rsquo;&eacute;vacuation :</p>
<ul>
<li>permet le confinement et l&rsquo;isolement des d&eacute;chets radioactifs ou du combustible us&eacute; &agrave; stocker</li>
<li>comporte de multiples barri&egrave;res (d&eacute;fense en profondeur)</li>
<li>utilise des principes et des pratiques d&rsquo;ing&eacute;nierie approuv&eacute;s et des processus de contr&ocirc;le des modifications techniques</li>
<li>permet le stockage s&ucirc;r de mati&egrave;res radioactives dans l&rsquo;installation</li>
<li>permet les inspections visant &agrave; &eacute;valuer l&rsquo;&eacute;tat des SSC importants pour la s&ucirc;ret&eacute; avant la fermeture</li>
<li>tient compte des effluents gazeux produits par les mati&egrave;res radioactives au fil du temps</li>
<li>permet la mesure de l&rsquo;eau dans les SSC importants pour la s&ucirc;ret&eacute; avant la fermeture</li>
<li>permet l&rsquo;entretien des SSC</li>  </ul>  <p>Le titulaire de permis doit r&eacute;pertorier et classer les SSC importants pour la s&ucirc;ret&eacute;.</p>  <p>Le titulaire de permis doit concevoir l&rsquo;installation d&rsquo;&eacute;vacuation et les barri&egrave;res artificielles destin&eacute;es &agrave; confiner les d&eacute;chets et les risques associ&eacute;s de mani&egrave;re &agrave; ce qu&rsquo;elles soient chimiquement et physiquement compatibles avec la formation g&eacute;ologique h&ocirc;te et/ou l&rsquo;environnement de surface et qu&rsquo;elles remplissent, apr&egrave;s la fermeture, des fonctions de s&ucirc;ret&eacute; qui compl&egrave;tent celles qui sont assur&eacute;es par le milieu d&rsquo;accueil.</p>   <p>Le titulaire de permis doit concevoir l&rsquo;installation d&rsquo;&eacute;vacuation de mani&egrave;re &agrave; faciliter l&rsquo;inspection, la surveillance, la mise &agrave; l&rsquo;essai et l&rsquo;entretien de l&rsquo;installation et du milieu d&rsquo;accueil, le cas &eacute;ch&eacute;ant. Le titulaire de permis doit justifier aupr&egrave;s de la CCSN les aspects qui ne s&rsquo;appliquent pas.</p>  <p>Le titulaire de permis doit envisager la fermeture dans la conception initiale de l&rsquo;installation et mettre &agrave; jour les plans de fermeture tout au long du processus de conception.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="10.4"></div>
<h3 id="sec10-4">10.4	Construction et mise en service d&rsquo;une installation d&rsquo;&eacute;vacuation des d&eacute;chets</h3>  <p>Le titulaire de permis doit construire l&rsquo;installation d&rsquo;&eacute;vacuation en fonction de sa conception. Avant d&rsquo;amorcer les activit&eacute;s de construction, il doit poss&eacute;der suffisamment d&rsquo;&eacute;l&eacute;ments de preuve indiquant que la conception apr&egrave;s la fermeture fonctionnera comme pr&eacute;vu.</p>
<p>Le titulaire de permis devrait pr&eacute;venir ou limiter la perturbation du milieu d&rsquo;accueil pendant la construction. Il devrait mener toutes les activit&eacute;s de construction de mani&egrave;re &agrave; pr&eacute;server les caract&eacute;ristiques du milieu d&rsquo;accueil qui assurent le confinement et l&rsquo;isolement. Il doit s&rsquo;assurer que tout changement apport&eacute; &agrave; la conception pendant la construction ou les perturbations du milieu d&rsquo;accueil est soumis &agrave; une proc&eacute;dure de contr&ocirc;le des modifications.</p>  <p>Le titulaire de permis doit s&rsquo;assurer que l&rsquo;&eacute;quipement r&eacute;pond aux exigences de conception et mener des activit&eacute;s de validation afin de d&eacute;montrer que l&rsquo;&eacute;quipement et les SSC fonctionnent comme pr&eacute;vu pour soutenir les activit&eacute;s. Il doit produire un rapport final de mise en service au terme de la mise en service. Le rapport doit documenter l&rsquo;&eacute;tat de l&rsquo;installation &agrave; la fin de la construction, les essais r&eacute;alis&eacute;s et la preuve que ces essais ont &eacute;t&eacute; effectu&eacute;s avec succ&egrave;s ainsi que toute modification apport&eacute;e &agrave; l&rsquo;installation ou aux proc&eacute;dures pendant la construction. Le rapport doit fournir l&rsquo;assurance que toutes les conditions d&rsquo;autorisation ont &eacute;t&eacute; respect&eacute;es.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="10.5"></div>
<h3 id="sec10-5">10.5 Exploitation d&rsquo;une installation d&rsquo;&eacute;vacuation des d&eacute;chets</h3>  <p>Le titulaire de permis doit &eacute;tablir et documenter les limites et conditions d&rsquo;exploitation afin de maintenir l&rsquo;installation dans un &eacute;tat s&ucirc;r.</p>   <p>Le titulaire de permis doit exploiter l&rsquo;installation d&rsquo;&eacute;vacuation des d&eacute;chets radioactifs en se fondant sur les proc&eacute;dures document&eacute;es. Il devrait tenir compte de l&rsquo;incidence de toute modification apport&eacute;e aux activit&eacute;s sur la s&ucirc;ret&eacute; des d&eacute;chets stock&eacute;s.</p>   <p>Le titulaire de permis doit surveiller les limites et conditions d&rsquo;exploitation et r&eacute;viser celles-ci au besoin, pour l&rsquo;une ou l&rsquo;autre des raisons suivantes :</p>  <ul>
<li>&agrave; la lumi&egrave;re de l&rsquo;exp&eacute;rience d&rsquo;exploitation</li>
<li>&agrave; la suite de modifications apport&eacute;es &agrave; l&rsquo;installation et/ou au type de d&eacute;chets radioactifs stock&eacute;s</li>
<li>dans le cadre du processus d&rsquo;examen p&eacute;riodique du dossier de s&ucirc;ret&eacute; et de l&rsquo;&eacute;valuation de la s&ucirc;ret&eacute; connexe pour l&rsquo;installation</li>
<li>&agrave; la suite de modifications significatives apport&eacute;es aux conditions juridiques ou r&eacute;glementaires</li>  </ul>  <p>Le titulaire de permis doit entretenir, mettre &agrave; l&rsquo;essai et inspecter l&rsquo;installation &agrave; la fr&eacute;quence n&eacute;cessaire pour veiller &agrave; ce que le degr&eacute; de fiabilit&eacute; de l&rsquo;&eacute;quipement demeure &eacute;lev&eacute; et que l&rsquo;efficacit&eacute; des syst&egrave;mes est conforme au but de la conception de l&rsquo;installation.</p>  <p>Le titulaire de permis doit &eacute;tablir un plan de gestion du vieillissement afin de d&eacute;celer rapidement et d&rsquo;att&eacute;nuer les effets du vieillissement et de maintenir ainsi l&rsquo;int&eacute;grit&eacute; et l&rsquo;aptitude fonctionnelle des SSC &agrave; toutes les &eacute;tapes du cycle de vie.</p>  <p>De plus amples renseignements sur les aspects op&eacute;rationnels &agrave; prendre en compte au cours de la p&eacute;riode qui pr&eacute;c&egrave;de la fermeture sont pr&eacute;sent&eacute;s dans le projet de REGDOC-2.4.4, <em>Analyse de la s&ucirc;ret&eacute; pour les installations nucl&eacute;aires de cat&eacute;gorie IB</em> [10].</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="10.6"></div>
<h3 id="sec10-6">10.6	D&eacute;classement d&rsquo;une installation d&rsquo;&eacute;vacuation des d&eacute;chets</h3>  <p>Le titulaire de permis doit proc&eacute;der au d&eacute;classement des installations auxiliaires conform&eacute;ment au document G-219, <em>Plans de d&eacute;classement des activit&eacute;s autoris&eacute;es</em> [12].</p>   <p>Le titulaire de permis doit fermer l&rsquo;installation d&rsquo;&eacute;vacuation de mani&egrave;re &agrave; pr&eacute;server l&rsquo;int&eacute;grit&eacute; des fonctions de s&ucirc;ret&eacute; dont l&rsquo;importance apr&egrave;s la fermeture a &eacute;t&eacute; d&eacute;montr&eacute;e. Il doit veiller &agrave; ce que les plans de fermeture, comprenant la p&eacute;riode de transition qui suit la gestion active de l&rsquo;installation, soient bien d&eacute;finis et r&eacute;alisables de mani&egrave;re &agrave; ce que la fermeture puisse &ecirc;tre effectu&eacute;e en toute s&eacute;curit&eacute; le moment venu.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="10.7"></div>
<h3 id="sec10-7">10.7	Suivi et surveillance d&rsquo;une installation d&rsquo;&eacute;vacuation des d&eacute;chets</h3>  <p>Le titulaire de permis doit &eacute;laborer un programme de suivi et de surveillance pour l&rsquo;installation d&rsquo;&eacute;vacuation des d&eacute;chets. Ce programme doit :</p>
<ul>
<li>d&eacute;montrer la conformit&eacute; aux exigences r&eacute;glementaires et aux conditions de permis</li>
<li>confirmer que le syst&egrave;me d&rsquo;&eacute;vacuation fonctionne comme pr&eacute;vu</li>
<li>confirmer que les hypoth&egrave;ses de base et les mod&egrave;les utilis&eacute;s pour &eacute;valuer la s&ucirc;ret&eacute; sont compatibles avec les conditions r&eacute;elles</li>
<li>tenir des registres de l&rsquo;information sur l&rsquo;installation d&rsquo;&eacute;vacuation, le site et ses environs</li>  </ul>  <p>Le titulaire de permis doit exercer une surveillance et assurer la protection et la pr&eacute;servation des dispositifs passifs de s&ucirc;ret&eacute;.</p>   <p>Apr&egrave;s la fermeture et jusqu&rsquo;&agrave; la r&eacute;vocation du permis, le titulaire de permis doit demeurer responsable de la surveillance du syst&egrave;me d&rsquo;&eacute;vacuation et de toute mesure corrective qui pourrait devoir &ecirc;tre prise.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="10.8"></div>
<h3 id="sec10-8">10.8	P&eacute;riode suivant la fermeture d&rsquo;une installation d&rsquo;&eacute;vacuation des d&eacute;chets</h3>  <p>Le titulaire de permis doit dresser des plans en vue de la p&eacute;riode post-fermeture.</p>   <p>La CCSN s&rsquo;attend &agrave; ce que les mesures suivantes soient prises pendant la p&eacute;riode de contr&ocirc;le institutionnel :</p>  <ul>
<li>la mise en &oelig;uvre d&rsquo;un plan d&rsquo;inspection visuelle pr&eacute;voyant un examen p&eacute;riodique du site, afin de d&eacute;celer les signes de d&eacute;t&eacute;rioration de l&rsquo;installation (p. ex., un affaissement du sol) ou d&rsquo;&eacute;rosion de la surface</li>
<li>l&rsquo;exploitation et la maintenance d&rsquo;un syst&egrave;me de surveillance fournissant une alerte pr&eacute;coce en cas d&rsquo;&eacute;mission avant que les radionucl&eacute;ides ne sortent des limites du site</li>
<li>la mise en place de contr&ocirc;les actifs afin de pr&eacute;venir le libre acc&egrave;s au site</li>  </ul>  <p>Il convient de souligner que les contr&ocirc;les actifs comprennent une surveillance et des inspections p&eacute;riodiques, un contr&ocirc;le d&rsquo;acc&egrave;s, un usage restreint et un des travaux d&rsquo;entretien mineurs. Les contr&ocirc;les actifs peuvent &eacute;ventuellement &ecirc;tre suivis de contr&ocirc;les passifs, afin que l&rsquo;information relative au site d&rsquo;&eacute;vacuation soit conserv&eacute;e et que les usages ult&eacute;rieurs du site soient contr&ocirc;l&eacute;s.</p>
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
<h2 id="glossary">Glossaire</h2>  <p>Les d&eacute;finitions des termes utilis&eacute;s dans le pr&eacute;sent document figurent dans le <a href="/pubs_catalogue/uploads_fre/REGDOC-3-6-Glossary-of-CNSC-Terminology-fra.pdf">REGDOC-3.6, <em>Glossaire de la CCSN</em></a>, qui comprend des termes et des d&eacute;finitions tir&eacute;s de la <a href=""><em>Loi sur la s&ucirc;ret&eacute; et la r&eacute;glementation nucl&eacute;aires</em></a>, de ses r&egrave;glements d&rsquo;application ainsi que des documents d&rsquo;application de la r&eacute;glementation et d&rsquo;autres publications de la CCSN. Le REGDOC-3.6 est fourni &agrave; titre de r&eacute;f&eacute;rence et pour information.</p>  <p>La d&eacute;finition du terme suivant est fournie dans cette &eacute;bauche aux fins de consultation publique. &Agrave; la suite des consultations publiques, on demandera &agrave; ce que la version d&eacute;finitive de cette d&eacute;finition et de ce terme soit ajout&eacute;e &agrave; la prochaine version du REGDOC-3.6.</p>  <p><strong>d&eacute;chet radioactif</strong><br />  Toute mati&egrave;re (liquide, gazeuse ou solide) qui contient une substance nucl&eacute;aire radioactive, au sens que lui donne l&rsquo;article 2 de la <em>Loi sur la s&ucirc;ret&eacute; et la r&eacute;glementation nucl&eacute;aires</em>, pour laquelle aucune utilisation ult&eacute;rieure n&rsquo;est pr&eacute;vue. En plus de contenir des substances nucl&eacute;aires, les d&eacute;chets radioactifs peuvent aussi contenir des substances dangereuses non radioactives, telles que d&eacute;finies &agrave; l&rsquo;article 1 du <em>R&egrave;glement g&eacute;n&eacute;ral sur la s&ucirc;ret&eacute; et la r&eacute;glementation nucl&eacute;aires</em>.</p>
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
<h2 id="ref">R&eacute;f&eacute;rences</h2>  <p>La CCSN pourrait inclure des r&eacute;f&eacute;rences &agrave; des documents sur les pratiques exemplaires et les normes, comme celles publi&eacute;es par le Groupe CSA. Avec la permission du Groupe CSA, qui en est l&rsquo;&eacute;diteur, toutes les normes de la CSA associ&eacute;es au nucl&eacute;aire peuvent &ecirc;tre consult&eacute;es gratuitement &agrave; partir de la page Web de la CCSN &laquo; <a href="/fra/acts-and-regulations/regulatory-documents/csa-standards">Comment obtenir un acc&egrave;s gratuit &agrave; l&rsquo;ensemble des normes de la CSA associ&eacute;es au nucl&eacute;aire</a> &raquo;.</p>
<ol>
<li>Groupe CSA. <a href="/fra/acts-and-regulations/regulatory-documents/csa-standards">CSA-N292.0, <em>Principes g&eacute;n&eacute;raux pour la gestion des d&eacute;chets radioactifs et du combustible irradi&eacute;</em></a>, Canada, 2014.</li>
<li>CCSN. <a href="/fra/acts-and-regulations/regulatory-documents/published/html/regdoc3-2-1/index">REGDOC-3.2.1, <em>L&rsquo;information et la divulgation publiques</em></a>, Ottawa, 2018.</li>
<li>CCSN. <a href="/fra/acts-and-regulations/regulatory-documents/published/html/regdoc3-2-2/index">REGDOC-3.2.2, <em>Mobilisation des Autochtones</em></a>, Ottawa, 2016.</li>
<li>Ressources naturelles Canada. <a href="https://www.rncan.gc.ca/energie/uranium-nucleaire/7726">Politique-cadre en mati&egrave;re de d&eacute;chets radioactifs</a>.</li>
<li>CCSN. <a href="/fra/acts-and-regulations/regulatory-documents/published/html/regdoc2-11/index">REGDOC-2.11.1, <em>Cadre de gestion des d&eacute;chets radioactifs et du d&eacute;classement au Canada</em></a>, Ottawa, 2018.</li>
<li>CCSN. <a href="/fra/acts-and-regulations/consultation/comment/regdoc2-1-1">REGDOC-2.1.1, <em>Syst&egrave;me de gestion</em></a>, Ottawa, 2019.</li>
<li>Groupe CSA. <a href="/fra/acts-and-regulations/regulatory-documents/csa-standards">CSA N286, <em>Exigences relatives au syst&egrave;me de gestion des installations nucl&eacute;aires</em></a>, Mississauga, 2012.</li>
<li>CCSN. <a href="/fra/acts-and-regulations/regulatory-documents/published/html/regdoc2-11-1-v2/index">REGDOC-2.11.1, <em>Gestion des d&eacute;chets, tome II : Gestion des st&eacute;riles des mines d&rsquo;uranium et des r&eacute;sidus des usines de concentration d&rsquo;uranium</em></a>, Ottawa, 2018.</li>
<li>CCSN. <a href="/fra/acts-and-regulations/consultation/comment/regdoc2-12-3-ver2">REGDOC-2.12.3, <em>La S&eacute;curit&eacute; des substances nucl&eacute;aires : sources scell&eacute;es et mati&egrave;res nucl&eacute;aires de cat&eacute;gories I, II et III</em>, version 2</a>. Ottawa, 2019.</li>
<li>CCSN. REGDOC-2.4.4, <em>Analyse de la s&ucirc;ret&eacute; pour les installations nucl&eacute;aires de cat&eacute;gorie IB</em>, Ottawa, 2019.</li>
<li>CCSN. <a href="/fra/acts-and-regulations/regulatory-documents/published/html/regdoc2-11-1-v3/index">REGDOC-2.11.1, <em>Gestion des d&eacute;chets, tome III : &Eacute;valuation de la s&ucirc;ret&eacute; &agrave; long terme de la gestion des d&eacute;chets radioactifs</em></a>, Ottawa, 2018.</li>
<li>CCSN. <a href="/pubs_catalogue/uploads_fre/G219_f.pdf">G-219, <em>Plans de d&eacute;classement des activit&eacute;s autoris&eacute;es</em></a>, Ottawa, 2000.</li>
<li>CCSN. REGDOC-1.2.1, <em>Orientation sur la caract&eacute;risation de l&rsquo;emplacement d&rsquo;un d&eacute;p&ocirc;t g&eacute;ologique en profondeur</em>, Ottawa, 2019.</li>  </ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="addInfo"></div>
<h2 id="addInfo">Renseignements suppl&eacute;mentaires</h2>  <p>La CCSN pourrait recommander d&rsquo;autres documents sur les pratiques exemplaires et les normes, comme ceux publi&eacute;s par le Groupe CSA. Avec la permission du Groupe CSA, qui en est l&rsquo;&eacute;diteur, toutes les normes de la CSA associ&eacute;es au nucl&eacute;aire peuvent &ecirc;tre consult&eacute;es gratuitement &agrave; partir de la page Web de la CCSN &laquo; <a href="/fra/acts-and-regulations/regulatory-documents/csa-standards">Comment obtenir un acc&egrave;s gratuit &agrave; l&rsquo;ensemble des normes de la CSA associ&eacute;es au nucl&eacute;aire</a> &raquo;.</p>  <p>Les documents suivants ne sont pas cit&eacute;s dans le pr&eacute;sent document d&rsquo;application de la r&eacute;glementation, mais ils renferment des renseignements qui pourraient &ecirc;tre utiles au lecteur.</p>  <ul>
<li>Groupe CSA. CSA N292.0, <em>Principes g&eacute;n&eacute;raux pour la gestion des d&eacute;chets radioactifs et du combustible irradi&eacute;</em>, Mississauga, 2014.</li>
<li>Groupe CSA. CSA N292.1, <em>Entreposage humide du combustible irradi&eacute; et d&rsquo;autres mati&egrave;res radioactives</em>, Mississauga, 2016.</li>
<li>Groupe CSA. CSA N292.2, <em>Entreposage &agrave; sec provisoire du combustible irradi&eacute;</em>, Mississauga, 2013.</li>
<li>Groupe CSA. CSA N292.3, <em>Gestion des d&eacute;chets radioactifs de faible et de moyenne activit</em>&eacute;, Mississauga, 2008.</li>
<li>Groupe CSA. CSA N292.5, <em>Ligne directrice sur l&rsquo;exemption ou la lib&eacute;ration du contr&ocirc;le r&eacute;glementaire des mati&egrave;res contenant ou susceptibles de contenir des substances nucl&eacute;aires</em>, Mississauga, 2011.</li>
<li>Groupe CSA. CSA N292.6, <em>Gestion &agrave; long terme des d&eacute;chets radioactifs et de combustible irradi&eacute;</em>, Mississauga, 2018.</li>
<li>Agence internationale de l&rsquo;&eacute;nergie atomique (AIEA). Prescriptions g&eacute;n&eacute;rales de s&ucirc;ret&eacute;, n<sup>o</sup> GSR Partie 5, Gestion des d&eacute;chets radioactifs avant stockage d&eacute;finitif</,>
<li>AIEA. Guide g&eacute;n&eacute;ral de s&ucirc;ret&eacute; GSG-1, <span lang="en"><em>Classification of Radioactive Waste</em>, Vienne, 2009.</li>
<li>AIEA. Prescriptions de s&ucirc;ret&eacute; particuli&egrave;res SSR-5, <em>Stockage d&eacute;finitif des d&eacute;chets radioactifs</em>, Vienne, 2011.</li>
<li>AIEA. Guide de s&ucirc;ret&eacute; particulier SSG-40, <span lang="en"><em>Predisposal Management of Radioactive Waste from Nuclear Power Plants and Research Reactors</em></span>, Vienne, 2016.</li>
<li>AIEA. Guide de s&ucirc;ret&eacute; WS-G-6.1, <span lang="en"><em>Storage of Radioactive Waste</em></span>, Vienne, 2006.</li>
<li>AIEA. Guide de s&ucirc;ret&eacute; SSG-14, <span lang="en"><em>Geological Disposal Facilities for Radioactive Waste</em></span>, Vienne, 2011.</li>
<li>AIEA. Guide de s&ucirc;ret&eacute; SSG-23, <span lang="en"><em>The Safety Case and Safety Assessment for the Disposal of Radioactive Waste</em></span>, Vienne, 2012.</li>
<li>AIEA. Guide de s&ucirc;ret&eacute; SSG-29, <span lang="en"><em>Near Surface Disposal Facilities for Radioactive Waste</em></span>, Vienne, 2014.</li>
<li>AIEA. Guide de s&ucirc;ret&eacute; SSG-31, <span lang="en"><em>Monitoring and Surveillance of Radioactive Waste Disposal Facilities</em></span>, Vienne, 2014.</li>  </ul>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<h2>S&eacute;ries de documents d&#39;application de la r&eacute;glementation de la CCSN</h2>
<p>Les installations et activit&eacute;s du secteur nucl&eacute;aire du Canada sont r&eacute;glement&eacute;es par la CCSN. En plus de la Loi sur la s&ucirc;ret&eacute; et la r&eacute;glementation nucl&eacute;aires et de ses r&egrave;glements d&rsquo;application, il pourrait y avoir des exigences en mati&egrave;re de conformit&eacute; &agrave; d&rsquo;autres outils de r&eacute;glementation, comme les documents d&rsquo;application de la r&eacute;glementation ou les normes.</p>
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
<li>3.5 Diffusion de l&#39;information</li>
</ul></li>
</ul>
<p><strong>Remarque&nbsp;:</strong> Les s&eacute;ries de documents d&#39;application de la r&eacute;glementation pourraient &ecirc;tre modifi&eacute;es p&eacute;riodiquement par la CCSN.  Chaque s&eacute;rie susmentionn&eacute;e peut comprendre plusieurs documents d&rsquo;application de la r&eacute;glementation. Pour obtenir la plus r&eacute;cente liste de documents d&rsquo;application de la r&eacute;glementation, veuillez consulter le <a href="/fra/acts-and-regulations/regulatory-documents/index">site Web de la CCSN</a>.</p>
</div>  <div className="clear"></div>

                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }