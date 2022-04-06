import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "fr",
                pageTitle: "REGDOC-2.12.3 version 2, La sécurité des substances nucléaires : sources scellées et matières nucléaires de catégories I, II et III", 
                dateModified: "2020-06-29",
                langToggleUrl: "/eng/acts-and-regulations/consultation/comment/regdoc2-12-3-ver2"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<h2>Préface</h2>  <p>Ce document dapplication de la réglementation fait partie de la série de documents dapplication de la réglementation de la Commission canadienne de sûreté nucléaire (CCSN) intitulée Sécurité, qui porte également sur les installations à haute sécurité et la sécurité des sites. La liste complète des séries figure à la fin de ce document et elle peut être consultée sur le site Web de la CCSN, à la page <a href="/fra/acts-and-regulations/regulatory-documents/index">Documents dapplication de la réglementation</a>.</p>  <p>La partie A du document dapplication de la réglementation REGDOC-2.12.3 version 2, <em>La sécurité des substances nucléaires : sources scellées et matières nucléaires de catégories I, II et III</em>, définit les mesures minimales de sécurité que les titulaires de permis doivent mettre en œuvre pour prévenir la perte, le sabotage, lutilisation illégale, la possession illégale ou lenlèvement illégal des sources scellées tout au long de leur cycle de vie, y compris pendant leur stockage, leur transport ou leur stockage en transit.</p>  <p>La partie B du document fournit également des informations et de lorientation sur la façon de respecter les mesures minimales de sécurité, y compris celles relatives aux véhicules de transport, aux conteneurs et aux plans de sécurité. Il sapplique au transport routier des sources scellées au Canada seulement (dautres instruments et instructions techniques régissent la sécurité du transport des marchandises dangereuses par voie maritime, aérienne et ferroviaire).</p>  <p>Ce document fournit de lorientation visant à aider les demandeurs dun permis de la CCSN pour des matières nucléaires de catégorie I ou II &ndash; autres quun permis de transport &ndash; ou pour une installation nucléaire comprenant un réacteur nucléaire pouvant produire plus de 10 MW dénergie thermique en exploitation normale, à préparer et à soumettre des renseignements sur la sécurité qui doivent être joints à la demande, conformément à la <a href="http://laws-lois.justice.gc.ca/fra/lois/N-28.3/"><em>Loi sur la sûreté et la réglementation nucléaires</em></a>. Ce document fournit également de lorientation visant à aider les demandeurs dun permis de la CCSN pour le transport de matières nucléaires de catégories I, II ou III à préparer et à présenter un « plan écrit de sécurité du transport » qui satisfait aux exigences de larticle 5 du <a href="http://laws.justice.gc.ca/fra/reglements/DORS-2000-209/page-1.html"><em>Règlement sur la sûreté nucléaire</em></a>. Les matières nucléaires des catégories I, II et III sont définies à lannexe E de ce guide.</p>  <p>Le REGDOC-2.12.3 remplace les documents dorientation de la CCSN G-208, <em>Les plans de sécurité pour le transport des matières nucléaires de catégorie I, II ou III</em>, et G-274, <em>Les programmes de sécurité pour les matières nucléaires de catégorie I ou II ou pour certaines installations nucléaires</em>, et le REGDOC-2.12.3, <em>La sécurité des substances nucléaires : sources scellées</em>.</p>  <p>La partie A sapplique aux sources radioactives scellées (encapsulées ou solides), mais ne sapplique pas aux substances radioactives non scellées. La partie A de ce document sapplique aux sources de catégories 1, 2 et 3 et fournit des « pratiques de gestion prudente » pour les sources de catégories 4 et 5. Dans ce document, les termes « sources de catégorie 1 » à « sources de catégorie 5 » sont utilisés selon leur définition dans les documents <a href="http://www-pub.iaea.org/MTCD/Publications/PDF/Code-2004_web.pdf"><em>Code de conduite sur la sûreté et la sécurité des sources radioactives</em></a> (AIEA) [1], <a href="http://www-pub.iaea.org/MTCD/publications/PDF/Pub1227f_Web.pdf"><em>Catégorisation des sources radioactives</em></a> (Guide de sûreté n<sup>o</sup> RS-G-1.9 de lAIEA) [2] ou  <span lang="en"><a href="http://www-pub.iaea.org/MTCD/Publications/PDF/te_1344_web.pdf"><em>Categorization of Radioactive Sources</em></a></span> (AIEA/TECDOC-1344) [3].</p>  <p>Ce document se veut un élément du fondement dautorisation dune installation ou dune activité réglementée. Il sera intégré soit aux conditions et aux mesures de sûreté et de réglementation dun permis, soit aux mesures de sûreté et de réglementation décrites dans la demande de permis et les documents soumis à lappui de cette demande.</p>  <p>Lorientation contenue dans ce document vise à informer le demandeur, à expliquer plus en détail des exigences et à fournir de lorientation aux demandeurs et aux titulaires de permis sur la façon de répondre aux exigences. On y précise aussi comment le personnel de la CCSN évalue des problèmes particuliers ou des données pendant lexamen des demandes de permis. La CCSN sattend à ce que les titulaires de permis suivent les orientations contenues dans ce document. Dans le cas où dautres approches sont adoptées, les titulaires de permis doivent démontrer que celles-ci répondent aux exigences réglementaires.</p>  <p>Pour les installations existantes, les exigences contenues dans ce document ne sappliquent que si elles ont été incluses, en totalité ou en partie, dans le permis ou le fondement dautorisation.</p>  <p>Une approche graduelle et proportionnelle aux risques peut être définie et utilisée dans lapplication des exigences et des orientations énoncées dans ce document dapplication de la réglementation. Lutilisation dune approche graduelle ne constitue pas un assouplissement des exigences. Avec lapproche graduelle, lapplication des exigences est proportionnelle aux risques et aux caractéristiques particulières de linstallation ou de lactivité.</p>  <p>Le demandeur ou le titulaire de permis peut soumettre un dossier démontrant que lintention dune exigence est prise en compte par dautres moyens et démontrée à laide de preuves justificatives.</p>  <p>Les exigences et lorientation contenues dans ce document sont conformes aux pratiques nationales et internationales modernes utilisées pour traiter les questions et les facteurs qui contribuent à assurer la sûreté nucléaire et à laméliorer. Plus particulièrement, elles établissent une approche méthodique et moderne du classement des accidents qui est axée sur les risques et tient compte dun éventail daccidents possibles, notamment ceux dont les conséquences sont les plus graves pour la population.</p>
<div className="alert alert-info">
<p><strong>Remarque importante :</strong> Ce document fait partie du fondement dautorisation dune installation ou dune activité réglementée si on sy réfère directement ou indirectement dans le permis (notamment dans des documents cités en référence du titulaire de permis).</p>  <p>Le fondement dautorisation établit les conditions limites du rendement acceptable pour une installation ou une activité réglementée et établit les bases du programme de conformité de la CCSN à légard de cette installation ou activité réglementée.</p>  <p>Dans le cas où le document est un élément du fondement dautorisation, le terme « doit » est employé pour exprimer une exigence à laquelle le titulaire ou le demandeur de permis doit se conformer; le terme « devrait » dénote une orientation ou une mesure conseillée; le terme « pourrait » exprime une option ou une mesure conseillée ou acceptable dans les limites de ce document dapplication de la réglementation; et le terme « peut » exprime une possibilité ou une capacité.</p>   <p>Aucune information contenue dans le présent document ne doit être interprétée comme libérant le titulaire de permis de toute autre exigence pertinente. Le titulaire de permis a la responsabilité de prendre connaissance de tous les règlements et de toutes les conditions de permis applicables et dy adhérer.</p>
</div>
<div className="module-table-contents">  <h2>Table des mati&egrave;res</h2>
<ul>
<li><a href="#sec1">1. Introduction</a>
<ul>
<li><a href="#sec1-1">1.1 Objet</a></li>
<li><a href="#sec1-2">1.2 Port&eacute;e</a></li>
<li><a href="#sec1-3">1.3 Dispositions l&eacute;gislatives et r&eacute;glementaires applicables</a></li>
<li><a href="#sec1-4">1.4 Normes nationales et internationales</a></li>
</ul></li>
<li><a href="#partA">Partie A &ndash; Sources scell&eacute;es</a></li>
<li><a href="#sec2">2. Contexte</a>
<ul>
<li><a href="#sec2-1">2.1 Champ d&#39;application</a></li>
<li><a href="#sec2-2">2.2 Cat&eacute;gorisation des sources</a></li>
</ul></li>
<li><a href="#sec3">3. Mesures de s&eacute;curit&eacute;</a>
<ul>
<li><a href="#sec3-1">3.1 Mesures de s&eacute;curit&eacute; g&eacute;n&eacute;rale</a></li>
<li><a href="#sec3-2">3.2 Mesures de s&eacute;curit&eacute; techniques</a></li>
<li><a href="#sec3-3">3.3 Mesures de s&eacute;curit&eacute; administratives</a></li>
</ul></li>
<li><a href="#sec4">4. Mesures de s&eacute;curit&eacute; pendant le transport des sources scell&eacute;es</a>
<ul>
<li><a href="#sec4-1">4.1 S&eacute;curit&eacute; des v&eacute;hicules</a></li>
<li><a href="#sec4-2">4.2 Mesures de s&eacute;curit&eacute; pour les sources scell&eacute;es pendant leur transport</a></li>
<li><a href="#sec4-3">4.3 Plan de s&eacute;curit&eacute; du transport</a></li>
</ul></li>
<li><a href="#partB">Partie B &ndash; Mati&egrave;res nucl&eacute;aires</a></li>
<li><a href="#sec5">5. Contexte</a>
<ul>
<li><a href="#sec5-1">5.1 Champ d&#39;application</a></li>
</ul></li>
<li><a href="#sec6">6. Mesures de s&eacute;curit&eacute;</a>
<ul>
<li><a href="#sec6-1">6.1 Renseignements g&eacute;n&eacute;raux sur la description du programme de s&eacute;curit&eacute;</a></li>
<li><a href="#sec6-2">6.2 Mesures de s&eacute;curit&eacute; techniques</a></li>
<li><a href="#sec6-3">6.3 Mesures de s&eacute;curit&eacute; administratives</a></li>
</ul></li>
<li><a href="#sec7">7. Mesures de s&eacute;curit&eacute; du transport</a>
<ul>
<li><a href="#sec7-1">7.1 Mesures visant toutes les cat&eacute;gories de mati&egrave;res nucl&eacute;aires</a></li>
<li><a href="#sec7-2">7.2 Mesures propres aux diff&eacute;rentes cat&eacute;gories</a></li>
</ul></li>
<li><a href="#sec8">8. Plan de s&eacute;curit&eacute; du transport</a>
<ul>
<li><a href="#sec8-1">8.1 Contenu</a></li>
<li><a href="#sec8-2">8.2 Confidentialit&eacute;</a></li>
<li><a href="#sec8-3">8.3 Examen r&eacute;glementaire et d&eacute;livrance du permis</a></li>
</ul></li>
<li><a href="#appA">Annexe A : Exemple de plan de s&eacute;curit&eacute; du site  pour les sources scell&eacute;es de cat&eacute;gories 1, 2 et 3</a></li>
<li><a href="#appB">Annexe B : Exemple de v&eacute;rification nominale du casier judiciaire</a></li>
<li><a href="#appC">Annexe C : Utilisations typiques des sources scell&eacute;es</a></li>
<li><a href="#appD">Annexe D : Pr&eacute;paration, pr&eacute;sentation et r&eacute;vision de la  description du programme de s&eacute;curit&eacute; ou du plan de s&eacute;curit&eacute; du transport</a></li>
<li><a href="#appE">Annexe E : Mati&egrave;res nucl&eacute;aires de cat&eacute;gories I, II et III</a></li>
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
<h3 id="sec1-1">1.1 Objet</h3>  <p>La partie A du document d&rsquo;application de la r&eacute;glementation REGDOC-2.12.3, version 2, <em>La s&eacute;curit&eacute; des substances nucl&eacute;aires : sources scell&eacute;es et mati&egrave;res nucl&eacute;aires de cat&eacute;gories I, II et III</em>, d&eacute;finit les mesures minimales de s&eacute;curit&eacute; que les titulaires de permis doivent mettre en &oelig;uvre pour pr&eacute;venir la perte, le sabotage, l&rsquo;utilisation ill&eacute;gale, la possession ill&eacute;gale ou l&rsquo;enl&egrave;vement ill&eacute;gal des sources scell&eacute;es tout au long de leur cycle de vie, y compris pendant leur stockage, leur transport ou leur stockage en transit.</p>  <p>La partie B du document fournit de l&rsquo;orientation pour aider les demandeurs &agrave; pr&eacute;parer et &agrave; soumettre les renseignements sur la s&eacute;curit&eacute; qui doivent accompagner une demande de permis visant les mati&egrave;res nucl&eacute;aires de cat&eacute;gorie I ou II ou une installation nucl&eacute;aire. Il fournit &eacute;galement de l&rsquo;orientation aux demandeurs pour l&rsquo;&eacute;laboration d&rsquo;un &laquo; plan &eacute;crit de s&eacute;curit&eacute; du transport &raquo; &agrave; l&rsquo;&eacute;gard d&rsquo;un permis de transport de mati&egrave;res nucl&eacute;aires de cat&eacute;gorie I, II ou III.</p>
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
<h3 id="sec1-2">1.2 Port&eacute;e</h3>  <p>La partie A d&eacute;crit les mesures de s&eacute;curit&eacute; minimales requises pour l&rsquo;utilisation, le stockage et le transport des sources scell&eacute;es, et comprend des mesures de s&eacute;curit&eacute; physique &agrave; la fois techniques et administratives. Il traite des v&eacute;hicules de transport, des conteneurs et des plans de s&eacute;curit&eacute;. Il contient aussi des informations et de l&rsquo;orientation sur la fa&ccedil;on de r&eacute;pondre aux exigences de s&eacute;curit&eacute;.</p>  <p>La partie A s&rsquo;applique aux sources radioactives scell&eacute;es (encapsul&eacute;es ou solides), mais ne s&rsquo;applique pas aux substances radioactives non scell&eacute;es. Ce document s&rsquo;applique aux sources de cat&eacute;gories 1, 2 et 3 et fournit des &laquo; pratiques de gestion prudente &raquo; pour les sources de cat&eacute;gories IV et V. Dans ce document, les termes &laquo; sources de cat&eacute;gorie 1 &raquo; &agrave; &laquo; sources de cat&eacute;gorie 5 &raquo; sont utilis&eacute;s selon leur d&eacute;finition dans les documents <a href="http://www-pub.iaea.org/MTCD/Publications/PDF/code-2004_web.pdf"><em>Code de conduite sur la s&ucirc;ret&eacute; et la s&eacute;curit&eacute; des sources radioactives</em></a> (AIEA) [1],  <a href="http://www-pub.iaea.org/MTCD/publications/PDF/Pub1227f_Web.pdf"><em>Cat&eacute;gorisation des sources radioactives</em></a> (Guide de s&ucirc;ret&eacute; n<sup>o</sup> RS-G-1.9 de l&rsquo;AIEA) [2] ou <span lang="en"><a href="http://www-pub.iaea.org/MTCD/Publications/PDF/te_1344_web.pdf"><em>Categorization of Radioactive Sources (AIEA/TECDOC-1344)</em></a> [3] (voir &eacute;galement le glossaire).</p>  <p>La partie B d&eacute;crit les mesures de s&eacute;curit&eacute; pour le stockage ou le transport des mati&egrave;res nucl&eacute;aires. Elle d&eacute;crit l&rsquo;information qui devrait figurer dans la description du programme de s&eacute;curit&eacute; du titulaire de permis ou dans son plan de s&eacute;curit&eacute; pour le transport. Le document fournit &eacute;galement des d&eacute;tails sur la fa&ccedil;on dont ces plans devraient &ecirc;tre trait&eacute;s afin de respecter les exigences en mati&egrave;re de confidentialit&eacute; et de s&eacute;curit&eacute; nationale.</p>  <p>La partie B s&rsquo;applique aux demandeurs d&rsquo;un permis pour les mati&egrave;res nucl&eacute;aires de cat&eacute;gorie I, II ou III, ainsi que pour les installations nucl&eacute;aires comportant un r&eacute;acteur nucl&eacute;aire. Dans ce document, les termes &laquo; mati&egrave;res nucl&eacute;aires de cat&eacute;gories I, II et III &raquo; sont utilis&eacute;s au sens du <a href="http://laws.justice.gc.ca/fra/reglements/DORS-2000-209/page-1.html"><em>R&egrave;glement sur la s&ucirc;ret&eacute; nucl&eacute;aire</em></a> (RSN) (voir &eacute;galement l&rsquo;annexe E).</p>  <p>D&rsquo;autres exigences f&eacute;d&eacute;rales relatives au transport des mati&egrave;res nucl&eacute;aires de cat&eacute;gorie I, II ou III, comme les exigences concernant l&rsquo;emballage, la documentation et le marquage de s&eacute;curit&eacute;, figurent dans le <a href="http://laws-lois.justice.gc.ca/fra/reglements/DORS-2015-145/index.html"><em>R&egrave;glement sur l&rsquo;emballage et le transport des substances nucl&eacute;aires (2015)</em></a> et dans le <a href="http://laws-lois.justice.gc.ca/fra/reglements/DORS-2001-286/page-1.html"><em>R&egrave;glement sur le transport des marchandises dangereuses</em></a>.</p>  <p>Le <a href="http://laws-lois.justice.gc.ca/fra/reglements/DORS-2015-145/index.html"><em>R&egrave;glement sur l&rsquo;emballage et le transport des substances nucl&eacute;aires (2015)</em></a> (RETSN 2015) s&rsquo;applique aux exp&eacute;diteurs, aux destinataires et aux transporteurs (titulaires et non-titulaires de permis). Le REGDOC-2.12.3, <em>La s&eacute;curit&eacute; des substances nucl&eacute;aires : sources scell&eacute;es et mati&egrave;res nucl&eacute;aires de cat&eacute;gories I, II et III</em>, pr&eacute;sente de l&rsquo;orientation &agrave; l&rsquo;intention des titulaires de permis afin de garantir que des mesures de s&eacute;curit&eacute; sont en place pour prot&eacute;ger les mati&egrave;res radioactives pendant le transport. Si on a recours &agrave; des transporteurs tiers pour transporter des mati&egrave;res radioactives, alors ce document &eacute;nonce &eacute;galement les mesures de s&eacute;curit&eacute; minimales qui doivent &ecirc;tre prises, sous la supervision du titulaire de permis, par le transporteur de sources scell&eacute;es pendant le transport ou le stockage en transit des sources scell&eacute;es.</p>  <p>Dans le cas des sources scell&eacute;es, ce document s&rsquo;applique au transport routier au Canada seulement (d&rsquo;autres instruments et instructions techniques r&eacute;gissent la s&eacute;curit&eacute; du transport des marchandises dangereuses par voie maritime, a&eacute;rienne et ferroviaire).</p>
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
<h3 id="sec1-3">1.3	Dispositions l&eacute;gislatives et r&eacute;glementaires applicables</h3>  <p>Les dispositions de la <a href="http://laws-lois.justice.gc.ca/fra/lois/N-28.3/"><em>Loi sur la s&ucirc;ret&eacute; et la r&eacute;glementation nucl&eacute;aires</em></a> (LSRN) et des r&egrave;glements d&rsquo;application pris en vertu de la LSRN qui s&rsquo;appliquent &agrave; ce document sont les suivantes :</p>
<ul>
<li>les alin&eacute;as 3(1)e), g) et h) du <a href="http://laws-lois.justice.gc.ca/fra/reglements/DORS-2000-202/"><em>R&egrave;glement g&eacute;n&eacute;ral sur la s&ucirc;ret&eacute; et la r&eacute;glementation nucl&eacute;aires</em></a> (RGSRN), qui stipulent que &laquo; la demande de permis comprend les renseignements suivants :
<ul className="list-bullet-none">
<li>e) les mesures propos&eacute;es pour assurer la conformit&eacute; au <em>R&egrave;glement sur la radioprotection</em>, au <em>R&egrave;glement sur la s&eacute;curit&eacute; nucl&eacute;aire</em> et au <em>R&egrave;glement sur l&rsquo;emballage et le transport des substances nucl&eacute;aires (2015)</em>;</li>
<li>g) les mesures propos&eacute;es pour contr&ocirc;ler l&rsquo;acc&egrave;s aux lieux o&ugrave; se d&eacute;roulera l&rsquo;activit&eacute; vis&eacute;e par la demande et se trouvent les substances nucl&eacute;aires, l&rsquo;&eacute;quipement r&eacute;glement&eacute; ou les renseignements r&eacute;glement&eacute;s;</li>
<li>h) les mesures propos&eacute;es pour &eacute;viter l&rsquo;utilisation, la possession ou l&rsquo;enl&egrave;vement ill&eacute;gaux ou la perte des substances nucl&eacute;aires, de l&rsquo;&eacute;quipement r&eacute;glement&eacute; ou des renseignements r&eacute;glement&eacute;s &raquo;</li>
</ul></li>
<li>l&rsquo;alin&eacute;a 3(1.1)b) du RGSRN, qui stipule que &laquo; la Commission ou un fonctionnaire d&eacute;sign&eacute; autoris&eacute; en vertu de l&rsquo;alin&eacute;a 37(2)c) de la Loi peut demander tout autre renseignement n&eacute;cessaire pour lui permettre d&rsquo;&eacute;tablir si le demandeur : ... prendra, dans le cadre de l&rsquo;activit&eacute;, les mesures voulues pour pr&eacute;server la sant&eacute; et la s&eacute;curit&eacute; des personnes, prot&eacute;ger l&rsquo;environnement, maintenir la s&eacute;curit&eacute; nationale et respecter les obligations internationales que le Canada a assum&eacute;es. &raquo;</li>
<li>les alin&eacute;as 12(1)c), g), h) et j) du RGSRN, qui stipulent que &laquo; le titulaire de permis...
<ul className="list-bullet-none">
<li>c) prend toutes les pr&eacute;cautions raisonnables pour prot&eacute;ger l&rsquo;environnement, pr&eacute;server la sant&eacute; et la s&eacute;curit&eacute; des personnes et maintenir la s&eacute;curit&eacute; des installations nucl&eacute;aires et des substances nucl&eacute;aires;</li>
<li>g) met en &oelig;uvre des mesures pour &ecirc;tre alert&eacute; en cas d&rsquo;utilisation ou d&rsquo;enl&egrave;vement ill&eacute;gal d&rsquo;une substance nucl&eacute;aire, d&rsquo;&eacute;quipement r&eacute;glement&eacute; ou de renseignements r&eacute;glement&eacute;s, ou d&rsquo;utilisation ill&eacute;gale d&rsquo;une installation nucl&eacute;aire;</li>
<li>h) met en &oelig;uvre des mesures pour &ecirc;tre alert&eacute; en cas d&rsquo;acte ou de tentative de sabotage sur les lieux de l&rsquo;activit&eacute; autoris&eacute;e;</li>
<li>j) donne aux travailleurs de la formation sur le programme de s&eacute;curit&eacute; physique sur les lieux de l&rsquo;activit&eacute; autoris&eacute;e et sur leurs obligations aux termes du programme &raquo;</li>
</ul></li>
<li>les articles 21, 22 et 23 du RGSRN, qui d&eacute;finissent les renseignements r&eacute;glement&eacute;s et fournissent des d&eacute;tails sur les personnes qui peuvent poss&eacute;der, transf&eacute;rer, importer, exporter, utiliser ou divulguer des renseignements r&eacute;glement&eacute;s</li>
<li>le paragraphe 28(1) du RGSRN stipule ce qui suit : &laquo; la personne qui est tenue de conserver un document aux termes de [la LSRN], de ses r&egrave;glements ou d&rsquo;un permis, le fait pour la p&eacute;riode indiqu&eacute;e dans le r&egrave;glement applicable ou, &agrave; d&eacute;faut, pendant une ann&eacute;e suivant l&rsquo;expiration du permis qui autorise l&rsquo;activit&eacute; pour laquelle les documents sont conserv&eacute;s &raquo; </li>
<li>les alin&eacute;as 36(1)a) et d) et le paragraphe 36(2) du <a href="http://laws-lois.justice.gc.ca/fra/reglements/DORS-2000-207/"><em>R&egrave;glement sur les substances nucl&eacute;aires et les appareils &agrave; rayonnement</em></a>, qui stipulent que :
<ul className="list-bullet-none">
<li>&laquo; (1) Le titulaire de permis tient les documents suivants :<br />
a) un document o&ugrave; il consigne, &agrave; l&rsquo;&eacute;gard de toute substance nucl&eacute;aire qu&rsquo;il a en sa possession et qui est vis&eacute;e par le permis, les renseignements suivants :
<ul className="list-bullet-none">
<li>
(i) le nom, la quantit&eacute;, la forme et l&rsquo;emplacement de la substance nucl&eacute;aire;<br />
(ii) s&rsquo;il s&rsquo;agit d&rsquo;une source scell&eacute;e, le mod&egrave;le et le num&eacute;ro de s&eacute;rie de celle-ci,<br />
(iii) si elle est contenue dans un appareil &agrave; rayonnement, le mod&egrave;le et le num&eacute;ro de s&eacute;rie de celui-ci,<br />
(iv) la quantit&eacute; utilis&eacute;e,<br />
(v) la fa&ccedil;on dont elle a &eacute;t&eacute; utilis&eacute;e; ... </li>
<li>un document sur la formation re&ccedil;ue par chaque travailleur; ...</li>
</ul></li>
<li>(2) Le titulaire de permis conserve le document pr&eacute;vu &agrave; l&rsquo;alin&eacute;a (1)d) pendant les trois ans suivant la date de fin d&rsquo;emploi du travailleur. &raquo;</li>
</ul></li>
<li>l&rsquo;article 3 du RSN, qui stipule que la demande de permis visant une mati&egrave;re nucl&eacute;aire de cat&eacute;gorie I ou II ou une centrale nucl&eacute;aire doit comprendre les renseignements suivants sur la s&eacute;curit&eacute; :
<ul className="list-bullet-none">
<li>&laquo; a) une copie des arrangements vis&eacute;s &agrave; l&rsquo;article 35;</li>
<li>b) le plan des lieux vis&eacute; &agrave; l&rsquo;article 16;</li>
<li>c) une description de l&rsquo;&eacute;quipement, des syst&egrave;mes et des proc&eacute;dures de s&eacute;curit&eacute; propos&eacute;s;</li>
<li>d) une description de l&rsquo;&eacute;quipement, des syst&egrave;mes et des proc&eacute;dures de communication propos&eacute;s pour l&rsquo;int&eacute;rieur et l&rsquo;ext&eacute;rieur des lieux;</li>
<li>e) une description de la structure et de l&rsquo;organisation propos&eacute;es pour le service de s&eacute;curit&eacute; nucl&eacute;aire, y compris l&rsquo;expos&eacute; des fonctions, des responsabilit&eacute;s et de la formation des agents de s&eacute;curit&eacute; nucl&eacute;aire;</li>
<li>f) le plan et les proc&eacute;dures propos&eacute;s pour &eacute;valuer les manquements &agrave; la s&eacute;curit&eacute; et y donner suite;</li>
<li>g) l&rsquo;&eacute;valuation de la menace et du risque &agrave; jour &raquo;</li>
</ul></li>
<li>l&rsquo;article 4 du RSN, qui stipule que la demande de permis visant une mati&egrave;re nucl&eacute;aire de cat&eacute;gorie III, autre qu&rsquo;un permis de transport, comprend, outre les renseignements exig&eacute;s &agrave; l&rsquo;article 3 du <a href="http://laws-lois.justice.gc.ca/fra/reglements/DORS-2000-207/"><em>R&egrave;glement sur les substances nucl&eacute;aires et les appareils &agrave; rayonnement</em></a>, une description des mesures qui seront prises pour assurer le respect du paragraphe 7(3) et des articles 7.1 et 7.2</li>
<li>l&rsquo;article 5 du RSN, qui stipule que la demande de licence ou de permis pour transporter une mati&egrave;re nucl&eacute;aire de cat&eacute;gorie I, II ou III comprend, outre les renseignements exig&eacute;s &agrave; l&rsquo;article 7 du RETSN, &laquo; un plan de s&eacute;curit&eacute; &eacute;crit comportant ce qui suit :
<ul className="list-bullet-none">
<li>a) le nom, la quantit&eacute;, l&rsquo;intensit&eacute; de rayonnement en Gy/h, les propri&eacute;t&eacute;s chimiques et physiques ainsi que la composition isotopique de la mati&egrave;re nucl&eacute;aire;</li>
<li>b) une &eacute;valuation de la menace, &agrave; savoir la nature, la possibilit&eacute; et les cons&eacute;quences des actes ou des &eacute;v&eacute;nements qui peuvent compromettre la s&eacute;curit&eacute; des renseignements r&eacute;glement&eacute;s ou des mati&egrave;res nucl&eacute;aires;</li>
<li>c) une description du moyen de transport;</li>
<li>d) les mesures de s&eacute;curit&eacute; propos&eacute;es;</li>
<li>e) les arrangements que le titulaire de permis, le conducteur du v&eacute;hicule terrestre transportant la mati&egrave;re nucl&eacute;aire, le destinataire de la mati&egrave;re et toute force d&rsquo;intervention externe prendront pour communiquer le long de l&rsquo;itin&eacute;raire;</li>
<li>f) les arrangements pris entre le titulaire de permis et toute force d&rsquo;intervention externe le long de l&rsquo;itin&eacute;raire;</li>
<li>g) l&rsquo;itin&eacute;raire pr&eacute;vu;</li>
<li>h) l&rsquo;itin&eacute;raire de rechange &agrave; utiliser en cas d&rsquo;urgence &raquo;</li>
</ul></li>
<li>l&rsquo;alin&eacute;a 3i) du <a href="http://laws.justice.gc.ca/fra/reglements/DORS-2000-204/index.html"><em>R&egrave;glement sur les installations nucl&eacute;aires de cat&eacute;gorie I</em></a>, qui stipule que la demande de permis concernant une installation nucl&eacute;aire compos&eacute;e d&rsquo;une centrale nucl&eacute;aire doit comprendre les renseignements exig&eacute;s &agrave; l&rsquo;article 3 du RSN</li>
<li>le paragraphe 6(l) du R&egrave;glement sur les installations nucl&eacute;aires de cat&eacute;gorie I, qui stipule que la demande de permis pour exploiter une installation nucl&eacute;aire de cat&eacute;gorie I comprend, outre les renseignements exig&eacute;s &agrave; l&rsquo;article 3 du m&ecirc;me R&egrave;glement, les mesures propos&eacute;es pour emp&ecirc;cher tout acte ou tentative de sabotage &agrave; l&rsquo;installation nucl&eacute;aire, de m&ecirc;me que les mesures pour alerter le titulaire de permis</li>
<li>l&rsquo;article 7 du RETSN 2015, qui indique les renseignements que doit comporter une demande de permis pour le transport d&rsquo;une substance nucl&eacute;aire</li>
<li>le paragraphe 29(1) du RETSN 2015, qui stipule que &laquo; Tout exp&eacute;diteur d&rsquo;une mati&egrave;re radioactive inclut dans les documents de transport les renseignements exig&eacute;s par le R&egrave;glement de l&rsquo;AIEA [4] pour les besoins de l&rsquo;exp&eacute;dition, imprim&eacute;s de fa&ccedil;on claire et ind&eacute;l&eacute;bile &raquo;</li>
</ul>  <p>Le <a href="http://laws-lois.justice.gc.ca/fra/reglements/DORS-2001-286/page-1.html"><em>R&egrave;glement sur le transport des marchandises dangereuses</em></a> (Transports Canada) peut aussi s&rsquo;appliquer aux sources scell&eacute;es.</p>  <p>En plus des articles susmentionn&eacute;s des r&egrave;glements qui traitent directement des renseignements relatifs &agrave; la s&eacute;curit&eacute; devant figurer dans certaines demandes de permis, les m&ecirc;mes r&egrave;glements contiennent diverses exigences relatives &agrave; la s&eacute;curit&eacute; nucl&eacute;aire apr&egrave;s l&rsquo;obtention du permis. Afin de fournir, &agrave; l&rsquo;&eacute;tape de la demande de permis, une assurance ad&eacute;quate que les exigences fix&eacute;es apr&egrave;s l&rsquo;obtention du permis seront respect&eacute;es si l&rsquo;installation ou l&rsquo;activit&eacute; propos&eacute;e est autoris&eacute;e par la CCSN, cette derni&egrave;re peut exiger du demandeur qu&rsquo;il fournisse des renseignements sur la fa&ccedil;on dont les exigences fix&eacute;es apr&egrave;s l&rsquo;obtention du permis seront respect&eacute;es. Certaines des recommandations formul&eacute;es &agrave; la section 6 de ce document portent sur de telles situations.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="1.4"></div>
<h2 id="sec1-4">1.4 Normes nationales et internationales</h2>  <p>Ce document d&rsquo;application de la r&eacute;glementation est conforme aux normes et guides nationaux et internationaux concernant les mesures de s&eacute;curit&eacute; physique des sources scell&eacute;es. Les publications pertinentes pour la s&eacute;curit&eacute; physique comprennent :</p>
<ul>
<li>AIEA, <a href="http://www-pub.iaea.org/MTCD/Publications/PDF/Code-2004_web.pdf"><em>Code de conduite sur la s&ucirc;ret&eacute; et la s&eacute;curit&eacute; des sources radioactives</em></a>, 2004 [1]</li>
<li>AIEA, Guide de s&ucirc;ret&eacute; RS-G-1.9, <a href="http://www-pub.iaea.org/MTCD/Publications/PDF/Pub1227f_web.pdf"><em>Cat&eacute;gorisation des sources radioactives</em> [2]</li>
<li>AIEA, TECDOC-1344, <span lang="en"><a href="http://www-pub.iaea.org/MTCD/Publications/PDF/te_1344_web.pdf"><em>Categorization of radiation sources</em></a></span>, 2003 [3] (r&eacute;vision du document TECDOC-1191, <span lang="en"><em>Categorization of radiation sources</em></span> de l&rsquo;AIEA, 2000)</li>
<li>AIEA, Prescriptions de sÃ»ret&eacute; particuli&egrave;res no SSR-6, <cite><a href="https://www-pub.iaea.org/MTCD/Publications/PDF/P1798F_web.pdf">R&egrave;glement de transport des mati&egrave;res radioactives</a></cite>, &eacute;dition de 2018 (PDF, 200 pages, 1.7 Mo) (r&eacute;vis&eacute;e) [4]</li>
<li>AIEA, TECDOC-1355, <span lang="en"><a href="http://www-pub.iaea.org/MTCD/Publications/PDF/te_1355_web.pdf"><em>Security of radioactive sources &ndash; Interim guidance for comment</em></a></span>, 2003 (en anglais seulement) [5]</li>
<li>AIEA, TECDOC-1276, <span lang="en"><em>Handbook on the physical protection of nuclear materials and facilities</em></span>, 2002</li>
<li>AIEA, Collection S&eacute;curit&eacute; nucl&eacute;aire de l&rsquo;AIEA n<sup>o</sup> 14, <a href="http://www-pub.iaea.org/MTCD/Publications/PDF/Pub1487f_web.pdf"><em>Recommandations de s&eacute;curit&eacute; nucl&eacute;aire relatives aux mati&egrave;res radioactives et aux installations associ&eacute;es</em></a>, 2011 [10]</li>
<li>AIEA, Collection S&eacute;curit&eacute; nucl&eacute;aire de l&rsquo;AIEA n<sup>o</sup> 9, <a href="http://www-pub.iaea.org/MTCD/Publications/PDF/Pub1348f_web.pdf"><em>Guide d&rsquo;application, S&eacute;curit&eacute; du transport des mati&egrave;res radioactives</em></a>, 2008</li>
<li>AIEA, Collection S&eacute;curit&eacute; nucl&eacute;aire de l&rsquo;AIEA n<sup>o</sup> 11, <a href="http://www-pub.iaea.org/MTCD/Publications/PDF/Pub1387f_web.pdf"><em>Guide d&rsquo;application, S&eacute;curit&eacute; des sources radioactives</em></a></li>
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
<div id="partA"></div>
<h2 id="partA">Partie A &ndash; Sources scell&eacute;es</h2>
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
<h2 id="sec2">2. Contexte</h2>  <p>Les sources scell&eacute;es et l&rsquo;&eacute;quipement r&eacute;glement&eacute; contenant des substances nucl&eacute;aires sont r&eacute;glement&eacute;s en vertu de la <a href="http://laws-lois.justice.gc.ca/fra/lois/N-28.3/"><em>Loi sur la s&ucirc;ret&eacute; et la r&eacute;glementation nucl&eacute;aires</em></a> (LSRN) et de ses r&egrave;glements d&rsquo;application, notamment le <a href="http://laws-lois.justice.gc.ca/fra/reglements/DORS-2000-202/"><em>R&egrave;glement g&eacute;n&eacute;ral sur la s&ucirc;ret&eacute; et la r&eacute;glementation nucl&eacute;aires</em></a>, le <a href="http://laws-lois.justice.gc.ca/fra/reglements/DORS-2000-205/"><em>R&egrave;glement sur les installations nucl&eacute;aires et l&rsquo;&eacute;quipement r&eacute;glement&eacute; de cat&eacute;gorie II</em></a>, le <a href="http://laws.justice.gc.ca/fra/reglements/DORS-2000-207/page-1.html"><em>R&egrave;glement sur les substances nucl&eacute;aires et les appareils &agrave; rayonnement</em></a> et le <a href="http://laws-lois.justice.gc.ca/fra/reglements/DORS-2000-203/"><em>R&egrave;glement sur la radioprotection</em></a>.</p>  <p>D&rsquo;autres r&egrave;glements traitent du transport des sources (p. ex., l&rsquo;emballage, la documentation et le marquage de s&eacute;curit&eacute;), notamment :</p>
<ul>
<li>Commission canadienne de s&ucirc;ret&eacute; nucl&eacute;aire (CCSN), <a href="http://laws-lois.justice.gc.ca/fra/reglements/DORS-2015-145/index.html"><em>R&egrave;glement sur l&rsquo;emballage et le transport des substances nucl&eacute;aires (2015)</em></a> (RETSN 2015)</li>
<li>Transports Canada, <a href="http://laws-lois.justice.gc.ca/fra/reglements/DORS-2001-286/page-1.html"><em>R&egrave;glement sur le transport des marchandises dangereuses</em></a> (RETSN 2015)</li>
</ul>  <p>Ce document utilise une approche graduelle pour assurer la s&eacute;curit&eacute; des sources scell&eacute;es. Il existe cinq niveaux de sources scell&eacute;es (cat&eacute;gories 1 &agrave; 5). Ce document pr&eacute;cise les exigences qui s&rsquo;appliquent aux sources radioactives scell&eacute;es qui pourraient poser un risque important pour l&rsquo;environnement ainsi que pour la sant&eacute; et la s&eacute;curit&eacute; des personnes (c.-&agrave;-d., les sources de cat&eacute;gories 1, 2 et 3). Comme les sources scell&eacute;es de cat&eacute;gories 4 et 5 sont les moins dangereuses, ce document fournit des pratiques de gestion prudente pour ces sources.</p>  <p>En septembre 2003, l&rsquo;Agence internationale de l&rsquo;&eacute;nergie atomique (AIEA) a approuv&eacute; le <a href="http://www-pub.iaea.org/MTCD/Publications/PDF/Code-2004_web.pdf"><em>Code de conduite sur la s&ucirc;ret&eacute; et la s&eacute;curit&eacute; des sources radioactives</em></a> [1]. Le Canada et de nombreux autres pays se sont engag&eacute;s &agrave; respecter ce code et &agrave; travailler &agrave; sa pleine application. Le document REGDOC-2.12.3, <em>La s&eacute;curit&eacute; des substances nucl&eacute;aires : sources scell&eacute;es et mati&egrave;res nucl&eacute;aires de cat&eacute;gories I, II et III</em>, soutient le cadre de r&eacute;glementation visant &agrave; appliquer les lignes de conduite internationales &eacute;tablies par l&rsquo;AIEA et &agrave; assurer l&rsquo;uniformit&eacute; dans l&rsquo;application des mesures de s&eacute;curit&eacute;.</p>  <p>Le <a href="http://laws-lois.justice.gc.ca/fra/reglements/DORS-2015-145/index.html"><em>R&egrave;glement sur l&rsquo;emballage et le transport des substances nucl&eacute;aires (2015)</em></a> s&rsquo;applique aux exp&eacute;diteurs, aux destinataires et aux transporteurs. Cependant, les activit&eacute;s des sous-traitants ne sont pas r&eacute;gies par la CCSN et donc ceux-ci ne sont pas vis&eacute;s par les exigences de s&eacute;curit&eacute; applicables aux titulaires de permis de la CCSN. Ce REGDOC s&rsquo;adresse aux titulaires de permis lorsqu&rsquo;ils font appel aux services de transporteurs afin de s&rsquo;assurer que des mesures de s&eacute;curit&eacute; particuli&egrave;res sont pr&eacute;vues pour le transport des sources scell&eacute;es, leur stockage, ainsi que leur stockage en transit.</p>  <p>Le REGDOC-2.12.3, <em>La s&eacute;curit&eacute; des substances nucl&eacute;aires : sources scell&eacute;es et mati&egrave;res nucl&eacute;aires de cat&eacute;gories I, II et III</em>, refl&egrave;te les objectifs de s&eacute;curit&eacute; des organismes sp&eacute;cialis&eacute;s et des programmes des Nations Unies, dont l&rsquo;Organisation maritime internationale, l&rsquo;Organisation de l&rsquo;aviation civile internationale et d&rsquo;autres organisations intergouvernementales telles que l&rsquo;Organisation intergouvernementale pour les Transports internationaux ferroviaires, qui ont pris des mesures similaires pour accro&icirc;tre la s&eacute;curit&eacute; du transport des marchandises dangereuses par voie maritime, a&eacute;rienne et ferroviaire. Ces organisations ont &eacute;labor&eacute; divers instruments, dont le <em>Code maritime international des marchandises dangereuses</em>, et des instructions techniques pour la s&eacute;curit&eacute; du transport des marchandises dangereuses par air.</p>
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
<h3 id="sec2-1">2.1	Champ d&rsquo;application</h3>  <p>La partie A s&rsquo;applique aux sources scell&eacute;es et aux radionucl&eacute;ides figurant dans le tableau 1. Ces substances et leurs valeurs seuils sont bas&eacute;es sur le <a href="http://www-pub.iaea.org/MTCD/Publications/PDF/Code-2004_web.pdf"><em>Code de conduite sur la s&ucirc;ret&eacute; et la s&eacute;curit&eacute; des sources radioactives</em></a> de l&rsquo;AIEA [1]). Ce REGDOC traite express&eacute;ment des sources radioactives qui pourraient &ecirc;tre dangereuses pour la sant&eacute; et la s&eacute;curit&eacute; des personnes et l&rsquo;environnement si elles ne sont pas prot&eacute;g&eacute;es.</p>  <p>Comme l&rsquo;indique le document <a href="http://www-pub.iaea.org/MTCD/Publications/PDF/te_1344_web.pdf">TECDOC-1344</a> de l&rsquo;AIEA [3], si une pratique comporte l&rsquo;accumulation de plusieurs sources en une m&ecirc;me zone de stockage ou d&rsquo;utilisation, et que ces sources sont proches les unes des autres ou situ&eacute;es au m&ecirc;me endroit (p. ex., dans les installations de stockage, les proc&eacute;d&eacute;s de fabrication ou les moyens de transport), on traite l&rsquo;activit&eacute; totale comme une source unique afin de lui attribuer une cat&eacute;gorie. Si les sources sont stock&eacute;es ou utilis&eacute;es dans des lieux contr&ocirc;l&eacute;s et s&eacute;par&eacute;s, on pourrait appliquer dans ces lieux des mesures de s&eacute;curit&eacute; ind&eacute;pendantes tenant compte du niveau d&rsquo;activit&eacute; de la source. Dans ce cas, les consid&eacute;rations relatives &agrave; l&rsquo;accumulation ne s&rsquo;appliquent pas. Dans certaines circonstances, un site entier n&rsquo;est pas consid&eacute;r&eacute; comme une seule zone de stockage ou d&rsquo;utilisation.</p>  <p>Les exigences de s&eacute;curit&eacute; doivent &ecirc;tre proportionnelles &agrave; la classification, au niveau de menace ou au niveau de risque &eacute;tabli par le titulaire de permis ou le gouvernement du Canada. Les sources radioactives mobiles et portatives peuvent requ&eacute;rir un traitement diff&eacute;rent afin d&rsquo;assurer le respect de toutes les exigences de s&eacute;curit&eacute; sp&eacute;cifiques, et permettre ainsi l&rsquo;utilisation de la source aux fins pr&eacute;vues.</p>
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
<h3 id="sec2-2">2.2	Cat&eacute;gorisation des sources</h3>  <p>La CCSN s&rsquo;appuie sur la cat&eacute;gorisation des sources de l&rsquo;AIEA, d&eacute;finie dans le document <a href="http://www-pub.iaea.org/MTCD/Publications/PDF/te_1344_web.pdf">TECDOC-1344</a> [3] de l&rsquo;AIEA. Ce document reconna&icirc;t que toutes les sources radioactives ne peuvent (ni ne devraient) &ecirc;tre trait&eacute;es de la m&ecirc;me mani&egrave;re et donc, les sources sont class&eacute;es en cinq cat&eacute;gories allant de la cat&eacute;gorie 1 (extr&ecirc;mement dangereuses) &agrave; la cat&eacute;gorie 5 (dangerosit&eacute; peu probable). La m&eacute;thode de cat&eacute;gorisation de l&rsquo;AIEA a &eacute;t&eacute; accept&eacute;e dans le monde entier, et elle constitue un moyen uniforme de classer le risque associ&eacute; aux sources radioactives scell&eacute;es et aux appareils &agrave; rayonnement les plus couramment utilis&eacute;s.</p>  <p>Les sources scell&eacute;es et les appareils &agrave; rayonnement peuvent &ecirc;tre utilis&eacute;s en un lieu donn&eacute; (p. ex., des jauges fixes utilis&eacute;es pour l&rsquo;&eacute;quipement de proc&eacute;d&eacute;) ou &ecirc;tre mobiles et utilis&eacute;s sur les chantiers (p. ex., les appareils d&rsquo;exposition de gammagraphie et les jauges portatives de mesures d&rsquo;humidit&eacute; et de densit&eacute; du sol).</p>  <p>Les sources de cat&eacute;gorie 1 sont les sources scell&eacute;es les plus dangereuses autoris&eacute;es par la CCSN. Parce qu&rsquo;elles repr&eacute;sentent le plus grand risque pour la sant&eacute; et la s&eacute;curit&eacute; des personnes et pour l&rsquo;environnement, les sources de cat&eacute;gorie 1 sont toujours utilis&eacute;es dans des endroits ad&eacute;quatement blind&eacute;s et contr&ocirc;l&eacute;s. Parmi les exemples, on retrouve les sources de t&eacute;l&eacute;th&eacute;rapie au cobalt 60 pour le traitement du cancer et les sources de cobalt 60 utilis&eacute;es dans les irradiateurs de type piscine pour st&eacute;riliser les produits m&eacute;dicaux. Ces sources doivent &ecirc;tre prot&eacute;g&eacute;es et s&eacute;curis&eacute;es.</p>  <p>L&rsquo;exemple le plus courant d&rsquo;une source de cat&eacute;gorie 2 est un appareil d&rsquo;exposition de gammagraphie industrielle. Ces appareils portatifs sont largement utilis&eacute;s dans les travaux de canalisations et dans les ateliers de fabrication de r&eacute;servoirs sous pression (en particulier dans l&rsquo;industrie p&eacute;troli&egrave;re et gazi&egrave;re).</p>  <p>Les sources de cat&eacute;gorie 3 sont souvent des jauges fixes qui sont boulonn&eacute;es aux canalisations, aux r&eacute;servoirs et aux lignes d&rsquo;assemblage o&ugrave; elles fonctionnent de mani&egrave;re fiable dans des environnements industriels rudes, souvent pendant des d&eacute;cennies.</p>  <p>Les sources de cat&eacute;gorie 4 sont moins dangereuses que les sources de cat&eacute;gorie III et repr&eacute;sentent un faible risque pour les personnes, la s&eacute;curit&eacute; et l&rsquo;environnement. Les jauges portatives de densit&eacute; et d&rsquo;humidit&eacute; du sol utilis&eacute;es dans la construction routi&egrave;re sont un exemple de source de cat&eacute;gorie 4.</p>  <p>Les sources de cat&eacute;gorie 5 sont consid&eacute;r&eacute;es comme &eacute;tant les moins dangereuses. Elles comprennent, entre autres, les d&eacute;tecteurs &agrave; capture d&rsquo;&eacute;lectrons utilis&eacute;s pour mesurer les r&eacute;sidus de pesticides dans les aliments, les analyseurs &agrave; fluorescence X et les sources pour les implants de curieth&eacute;rapie &agrave; faible dose. Certaines sources de cat&eacute;gorie 5 peuvent &ecirc;tre utilis&eacute;es sans n&eacute;cessiter de permis de la CCSN.</p>  <p>Le tableau 1 pr&eacute;sente les activit&eacute;s seuils pour les sources de cat&eacute;gories 1, 2 et 3, avec leur niveau d&rsquo;activit&eacute;. L&rsquo;annexe C fournit des exemples de sources de cat&eacute;gories 1, 2 et 3 par &laquo; type d&rsquo;utilisation &raquo;.</p>
<table className="width-100">  <caption className="text-left">Tableau 1 : Activit&eacute;s seuils pour les sources de cat&eacute;gories 1, 2 et 3</caption>  <tr>
<th className="text-center text-center" rowspan="2">Radionucl&eacute;ide</th>
<th className="text-center" colSpan="2">Source de cat&eacute;gorie 1</th>
<th className="text-center" colSpan="2">Source de cat&eacute;gorie 2</th>
<th className="text-center" colSpan="2">Source de cat&eacute;gorie 3</th>  </tr>  <tr>
<th className="text-center">T&eacute;rabecquerrels (TBq)</th>
<th className="text-center">Curies (Ci)</th>
<th className="text-center">T&eacute;rabecquerrels (TBq)</th>
<th className="text-center">Curies (Ci)</th>
<th className="text-center">T&eacute;rabecquerrels (TBq)</th>
<th className="text-center">Curies (Ci)</th>  </tr>  <tr>
<td>Am&eacute;ricium-241 (<sup>241</sup>Am)</td>
<td className="text-center">60</td>
<td className="text-center">1 620</td>
<td className="text-center">0,6</td>
<td className="text-center">16</td>
<td className="text-center">0,06</td>
<td className="text-center">1,6</td>  </tr>  <tr>
<td>Am&eacute;ricium-241 / B&eacute;ryllium (<sup>241</sup>Am/Be)</td>
<td className="text-center">60</td>
<td className="text-center">1 620</td>
<td className="text-center">0,6</td>
<td className="text-center">16</td>
<td className="text-center">0,06</td>
<td className="text-center">1,6</td>  </tr>  <tr>
<td>Californium-252 (<sup>252</sup>Cf)</td>
<td className="text-center">20</td>
<td className="text-center">540</td>
<td className="text-center">0,2</td>
<td className="text-center">5,4</td>
<td className="text-center">0,02</td>
<td className="text-center">0,5</td>  </tr>  <tr>
<td>C&eacute;sium-137 (<sup>137</sup>Cs)</td>
<td className="text-center">100</td>
<td className="text-center">2 700</td>
<td className="text-center">&nbsp;</td>
<td className="text-center">27</td>
<td className="text-center">0,1</td>
<td className="text-center">2,7</td>  </tr>  <tr>
<td>Cobalt-60 (<sup>60</sup>Co)</td>
<td className="text-center">30</td>
<td className="text-center">810</td>
<td className="text-center">0,3</td>
<td className="text-center">8,1</td>
<td className="text-center">0,03</td>
<td className="text-center">0,8</td>  </tr>  <tr>
<td>Curium-244 (<sup>244</sup>Cm)</td>
<td className="text-center">50</td>
<td className="text-center">1 350</td>
<td className="text-center">0,5</td>
<td className="text-center">13</td>
<td className="text-center">0,05</td>
<td className="text-center">1,3</td>  </tr>  <tr>
<td>Gadolinium-153 (<sup>153</sup>Gd)</td>
<td className="text-center">1 000</td>
<td className="text-center">27 000</td>
<td className="text-center">&nbsp;</td>
<td className="text-center">&nbsp;</td>
<td className="text-center">&nbsp;</td>
<td className="text-center">&nbsp;</td>  </tr>  <tr>
<td>Iridium-192 (<sup>192</sup>Ir)</td>
<td className="text-center">80</td>
<td className="text-center">2 160</td>
<td className="text-center">0,8</td>
<td className="text-center">22</td>
<td className="text-center">0,08</td>
<td className="text-center">2,1</td>  </tr>  <tr>
<td>Plutonium-238 (<sup>238</sup>Pu)</td>
<td className="text-center">60</td>
<td className="text-center">1 620</td>
<td className="text-center">0,6</td>
<td className="text-center">16</td>
<td className="text-center">0,06</td>
<td className="text-center">1,6</td>  </tr>  <tr>
<td>Plutonium-239 / B&eacute;ryllium (<sup>239</sup>Pu/Be)</td>
<td className="text-center">60</td>
<td className="text-center">1 620</td>
<td className="text-center">0,6</td>
<td className="text-center">16</td>
<td className="text-center">0,06</td>
<td className="text-center">1,6</td>  </tr>  <tr>
<td>Prom&eacute;thium-147 (<sup>147</sup>Pm)</td>
<td className="text-center text-center">40 000</td>
<td className="text-center text-center">1 081 000</td>
<td className="text-center text-center">400</td>
<td className="text-center text-center">11 000</td>
<td className="text-center">&nbsp;</td>
<td className="text-center text-center">1 100</td>  </tr>  <tr>
<td>Radium-226 (<sup>226</sup>Ra)</td>
<td className="text-center">40</td>
<td className="text-center">1 080</td>
<td className="text-center">0,4</td>
<td className="text-center">11</td>
<td className="text-center">0,04</td>
<td className="text-center">1,1</td>  </tr>  <tr>
<td>S&eacute;l&eacute;nium-75 (<sup>75</sup>Se)</td>
<td className="text-center">200</td>
<td className="text-center">5 400</td>
<td className="text-center">&nbsp;</td>
<td className="text-center">54</td>
<td className="text-center">0,2</td>
<td className="text-center">5,4</td>  </tr>  <tr>
<td>Strontium-90 (<sup>90</sup>Sr) / Yttrium-90 (<sup>90</sup>Y)</td>
<td className="text-center text-center">1 000</td>
<td className="text-center text-center">27 000</td>
<td className="text-center">&nbsp;</td>
<td className="text-center">&nbsp;</td>
<td className="text-center">&nbsp;</td>
<td className="text-center">&nbsp;</td>  </tr>  <tr>
<td>Thulium-170 (<sup>170</sup>Tm)</td>
<td className="text-center">20 000</td>
<td className="text-center">540 540</td>
<td className="text-center">200</td>
<td className="text-center">5 400</td>
<td className="text-center">&nbsp;</td>
<td className="text-center">540</td>  </tr>  <tr>
<td>Ytterbium-169 (<sup>169</sup>Yb)</td>
<td className="text-center">300</td>
<td className="text-center">8 100</td>
<td className="text-center">&nbsp;</td>
<td className="text-center">81</td>
<td className="text-center">0,3</td>
<td className="text-center">8,1</td>  </tr>  </table>
<h4>2.2.1 Seuils des niveaux d&rsquo;activit&eacute;</h4>  <p>Les mati&egrave;res et les activit&eacute;s indiqu&eacute;es dans le tableau 1 sont bas&eacute;es sur le <a href="http://www-pub.iaea.org/MTCD/Publications/PDF/Code-2004_web.pdf"><em>Code de conduite sur la s&ucirc;ret&eacute; et la s&eacute;curit&eacute; des sources radioactives</em></a> de l&rsquo;AIEA [1]. Ces seuils visent &agrave; assurer l&rsquo;uniformit&eacute; des exigences nationales et internationales pour la protection des mati&egrave;res radioactives.</p>  <p>Le <a href="http://www-pub.iaea.org/MTCD/Publications/PDF/Code-2004_web.pdf"><em>Code de conduite sur la s&ucirc;ret&eacute; et la s&eacute;curit&eacute; des sources radioactives de l&rsquo;AIEA</em></a> [1] &eacute;num&egrave;re 16 radionucl&eacute;ides pouvant constituer une menace s&eacute;rieuse pour la sant&eacute; et la s&eacute;curit&eacute; des gens et de l&rsquo;environnement. Le combustible nucl&eacute;aire irradi&eacute; et le combustible fait d&rsquo;oxydes mixtes (MOX) ne sont pas inclus dans la liste, m&ecirc;me s&rsquo;ils contiennent des quantit&eacute;s de mati&egrave;res radioactives. Ces mati&egrave;res sont couvertes par le <a href="http://laws.justice.gc.ca/eng/regulations/sor-2000-209/index.html"><em>R&egrave;glement sur la s&eacute;curit&eacute; nucl&eacute;aire</em></a>.</p>  <p>Le t&eacute;rabecquerel (TBq) est l&rsquo;unit&eacute; de mesure officielle utilis&eacute;e pour d&eacute;terminer si une mati&egrave;re radioactive est une source de cat&eacute;gorie 1, 2 ou 3. Comme de nombreux titulaires de permis emploient le curie (Ci) au lieu du becquerel dans leurs activit&eacute;s, le tableau fournit aussi les valeurs &eacute;quivalentes en curies.</p>  <p>Le document <a href="http://www-pub.iaea.org/MTCD/publications/PDF/Pub1227f_Web.pdf"><em>Cat&eacute;gorisation des sources radioactives</em></a> (RS-G-1.9) de l&rsquo;AIEA [2] d&eacute;crit la m&eacute;thode de calcul des seuils selon le <em>Code de conduite</em>.</p>  <p>Les exigences r&eacute;glementaires de l&rsquo;AIEA s&rsquo;appliquent uniquement aux sources scell&eacute;es. Toutefois, il est recommand&eacute; de tenir compte des exigences de s&eacute;curit&eacute; comparables pour les sources ouvertes ou non scell&eacute;es pour d&eacute;terminer si les arrangements pour le stockage sont appropri&eacute;s et ad&eacute;quats.</p>
<h4>2.2.2 M&eacute;thode d&rsquo;attribution des cat&eacute;gories</h4>  <p>Pour d&eacute;terminer &agrave; quelle cat&eacute;gorie appartiennent une ou plusieurs sources, on calcule l&rsquo;activit&eacute; totale de toutes les sources proches les unes des autres dans une installation (stockage ou utilisation), et on compare cette activit&eacute; aux valeurs qui d&eacute;finissent les diff&eacute;rentes cat&eacute;gories. Par exemple :</p>
<ul>
<li>un appareil m&eacute;dical de t&eacute;l&eacute;th&eacute;rapie avec une source scell&eacute;e de cobalt 60 produisant jusqu&rsquo;&agrave; 555 TBq est une source de cat&eacute;gorie I (555 &gt; 30)</li>
<li>un appareil de gammagraphie industrielle homologu&eacute; avec une source scell&eacute;e d&rsquo;iridium 192 produisant 2,5 TBq est une source scell&eacute;e de cat&eacute;gorie II (80 &gt; 2,5 &gt; 0,8)</li>
<li>un appareil m&eacute;dical de curieth&eacute;rapie &agrave; haut d&eacute;bit de dose avec une source scell&eacute;e d&rsquo;iridium 192 atteignant 0,44 TBq est une source de cat&eacute;gorie III (0,8 &gt; 0,44 &gt; 0,08)</li>
</ul>  <p>Aux fins du contr&ocirc;le de s&eacute;curit&eacute;, on peut cumuler des sources dans une m&ecirc;me zone de stockage (ou d&rsquo;utilisation) pour d&eacute;terminer une cat&eacute;gorie de s&eacute;curit&eacute;. &Agrave; cette fin, on additionne les activit&eacute;s des diverses sources scell&eacute;es et on d&eacute;termine la cat&eacute;gorie selon le tableau 1. Par exemple, une jauge de niveau industrielle contenant une source scell&eacute;e de c&eacute;sium 137 de 0,19 TBq est une source de cat&eacute;gorie 3 (1,0 &gt; 0,19 &gt; 0,1). Cependant, s&rsquo;il y a six de ces sources scell&eacute;es en un m&ecirc;me endroit autoris&eacute;, elles doivent &ecirc;tre consid&eacute;r&eacute;es comme une seule source de cat&eacute;gorie 2 pour des raisons de s&eacute;curit&eacute; (6 &times; 0,19 = 1,1 &gt; 1,0).</p>  <p>Le ratio A/D pour un seul radionucl&eacute;ide d&eacute;signe l&rsquo;activit&eacute; (A) de la source compar&eacute;e &agrave; l&rsquo;activit&eacute; d&eacute;termin&eacute;e pour d&eacute;finir un seuil de danger (D). Dans le cas du cumul de divers radionucl&eacute;ides, la somme des ratios A/D est utilis&eacute;e pour d&eacute;terminer la cat&eacute;gorie finale de la source, comme il est d&eacute;crit dans les documents RS-G-1.9, <a href="http://www-pub.iaea.org/MTCD/publications/PDF/Pub1227f_Web.pdf"><em>Cat&eacute;gorisation des sources radioactives</em></a> [2], et TECDOC-1344, <span lang="en"><a href="http://www-pub.iaea.org/MTCD/Publications/PDF/te_1344_web.pdf"><em>Categorization of Radioactive Sources</em></a></span> [3]. Si plusieurs sources de diff&eacute;rentes cat&eacute;gories sont stock&eacute;es, la cat&eacute;gorie la plus &eacute;lev&eacute;e devrait suffire (p. ex., le stockage de sources de cat&eacute;gorie 2, 3 ou 4 respecteraient les exigences de s&eacute;curit&eacute; applicables aux sources de cat&eacute;gorie 2).</p>
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
<h2 id="sec3">3. Mesures de s&eacute;curit&eacute;</h2>
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
<h3 id="sec3-1">3.1	Mesures de s&eacute;curit&eacute; g&eacute;n&eacute;rale</h3>  <p>Pendant le stockage ou l&rsquo;utilisation, les titulaires de permis doivent &eacute;laborer et appliquer des mesures de s&eacute;curit&eacute; techniques et administratives visant &agrave; prot&eacute;ger la source radioactive contre l&rsquo;enl&egrave;vement non autoris&eacute; (p. ex., le vol ou la perte) ou le sabotage.</p>  <p>Comme l&rsquo;indique le document <a href="http://www-pub.iaea.org/MTCD/Publications/PDF/te_1355_web.pdf">TECDOC-1355</a> de l&rsquo;AIEA [5], ces mesures doivent int&eacute;grer les concepts de s&eacute;curit&eacute; comportant des ententes de s&eacute;curit&eacute; industrielle, des mesures de radioprotection et une conception appropri&eacute;e pour &eacute;tablir le niveau n&eacute;cessaire de protection contre l&rsquo;enl&egrave;vement non autoris&eacute; des sources radioactives.</p>  <h4>Orientation</h4>  <p>Le programme de s&eacute;curit&eacute; devrait comporter des mesures visant &agrave; d&eacute;tecter et &agrave; retarder les violations de la s&eacute;curit&eacute; et &agrave; intervenir le cas &eacute;ch&eacute;ant (p. ex., dispositifs de d&eacute;tection d&rsquo;alarme, cl&ocirc;tures, conteneurs de stockage s&eacute;curis&eacute;s, immobilisation des v&eacute;hicules et des remorques, agents de s&eacute;curit&eacute;).</p>  <p>Le titulaire de permis devrait r&eacute;aliser et tenir &agrave; jour une &eacute;valuation des menaces et des risques afin de d&eacute;terminer les vuln&eacute;rabilit&eacute;s des syst&egrave;mes de protection physique existants con&ccedil;us pour pr&eacute;venir la perte, le sabotage, l&rsquo;utilisation ill&eacute;gale, la possession ill&eacute;gale ou l&rsquo;enl&egrave;vement ill&eacute;gal des sources scell&eacute;es pendant leur stockage ou leur transport. Par exemple :</p>
<ul>
<li>l&rsquo;identification des biens n&eacute;cessitant une protection</li>
<li>les menaces plausibles</li>
<li>les mesures d&rsquo;att&eacute;nuation visant &agrave; r&eacute;duire au minimum les menaces, les risques et les vuln&eacute;rabilit&eacute;s r&eacute;pertori&eacute;s</li>
</ul>  <p>L&rsquo;&eacute;valuation des menaces et des risques devrait &ecirc;tre examin&eacute;e annuellement et mise &agrave; jour au besoin, en fonction des changements qui ont une incidence sur le niveau de menace.</p>  <p>Pour &eacute;tablir le degr&eacute; de rigueur de l&rsquo;&eacute;valuation des menaces et des risques, on devrait recourir &agrave; une approche graduelle et tenir compte de la cat&eacute;gorie et des risques associ&eacute;s aux sources scell&eacute;es. Cette &eacute;valuation des menaces et des risques peut &ecirc;tre incluse dans les &eacute;valuations existantes.</p>  <p>Le tableau 2 contient de l&rsquo;information sur la fa&ccedil;on dont les sous-sections du programme de s&eacute;curit&eacute; doivent s&rsquo;appliquer aux diverses cat&eacute;gories : 1 (risque &eacute;lev&eacute;), 2 (risque &eacute;lev&eacute;), 3 (risque moyen), et 4 et 5 (risque faible).</p>
<table className="width-100">  <caption className="text-left">Tableau 2 : Niveaux et objectifs de s&eacute;curit&eacute;</caption>  <tr>
<td className="text-center"><strong>Sous-sections du programme de s&eacute;curit&eacute;</strong></td>
<td className="text-center text-center" style="background-color: #cc0000;"><strong>Cat&eacute;gorie 1 &ndash; Risque &eacute;lev&eacute;</strong></td>
<td className="text-center text-center"style="background-color: #cc8800;"><strong>Cat&eacute;gorie 2 &ndash; Risque &eacute;lev&eacute;</strong></td>
<td className="text-center text-center" style="background-color: #ffff66;"><strong>Cat&eacute;gorie 3 &ndash; Risque moyen</strong></td>
<td className="text-center text-center"><strong>Cat&eacute;gories 4 et 5 &ndash; Risque faible</strong></td>  </tr>  <tr>
<td><strong>Contr&ocirc;les de l&rsquo;acc&egrave;s</strong></td>
<td><ul>
<li>Restreindre l&rsquo;acc&egrave;s aux utilisateurs autoris&eacute;s seulement</li>
<li>R&egrave;gle des deux personnes (mesure optimale)</li>
<li>Les visiteurs, les &eacute;tudiants et les entrepreneurs doivent &ecirc;tre escort&eacute;s en tout temps par un utilisateur autoris&eacute;.</li>
</ul></td>
<td><ul>
<li>Restreindre l&rsquo;acc&egrave;s aux utilisateurs autoris&eacute;s seulement</li>
<li>Les visiteurs, les &eacute;tudiants et les entrepreneurs doivent &ecirc;tre escort&eacute;s en tout temps par un utilisateur autoris&eacute;.</li>
</ul></td>
<td><ul>
<li>Restreindre l&rsquo;acc&egrave;s aux utilisateurs autoris&eacute;s seulement</li>
<li>Les visiteurs, les &eacute;tudiants et les entrepreneurs doivent &ecirc;tre escort&eacute;s en tout temps par un utilisateur autoris&eacute;.</li>
</ul></td>
<td rowspan="3"><ul>
<li>La source devrait &ecirc;tre prot&eacute;g&eacute;e contre tout acc&egrave;s et enl&egrave;vement non autoris&eacute;.</li>
</ul></td>  </tr>  <tr>
<td><strong>Syst&egrave;me de d&eacute;tection d&rsquo;intrusion</strong></td>
<td colSpan="3"><ul>
<li>Doit fournir une d&eacute;tection imm&eacute;diate et &ecirc;tre reli&eacute; &agrave; une salle de commande homologu&eacute;e ULC et surveill&eacute;e par un op&eacute;rateur en tout temps, ou un m&eacute;canisme &eacute;quivalent (c.-&agrave;-d. une surveillance continue par l&rsquo;op&eacute;rateur) pour la d&eacute;tection, l&rsquo;&eacute;valuation et la communication avec le personnel d&rsquo;intervention en cas d&rsquo;incident touchant la s&eacute;curit&eacute;</li>
</ul></td>  </tr>  <tr>
<td><strong>P&eacute;rim&egrave;tre ou barri&egrave;re physique</strong></td>
<td colSpan="3"><ul>
<li>Doivent &ecirc;tre prot&eacute;g&eacute;s par au moins deux barri&egrave;res physiques (c.-&agrave;-d. des murs, des cages, des conteneurs s&ucirc;rs) pour s&eacute;parer la source et le personnel non autoris&eacute;, et ralentir suffisamment les intrus pour permettre une d&eacute;tection imm&eacute;diate et l&rsquo;arriv&eacute;e du personnel d&rsquo;intervention avant que l&rsquo;adversaire ne puisse enlever la </li>
</ul></td>  </tr>  <tr>
<td><strong>S&eacute;curit&eacute; de la zone de stockage</strong></td>
<td colSpan="2"><ul>
<li>Enceinte ferm&eacute;e par un cadenas de qualit&eacute; &eacute;lev&eacute;e, un syst&egrave;me de verrouillage de haute s&eacute;curit&eacute; ou un syst&egrave;me de s&eacute;curit&eacute; &eacute;quivalent</li>
<li>Enceinte munie d&rsquo;au moins un syst&egrave;me de d&eacute;tection d&rsquo;intrusion ou d&rsquo;un syst&egrave;me &eacute;quivalent</li>
<li>Les conteneurs s&ucirc;rs doivent pouvoir r&eacute;sister &agrave; une attaque perp&eacute;tr&eacute;e &agrave; l&rsquo;aide d&rsquo;outils portatifs.</li>
</ul></td>
<td><ul>
<li>Enceinte ferm&eacute;e par un cadenas de qualit&eacute; &eacute;lev&eacute;e, un syst&egrave;me de verrouillage de haute s&eacute;curit&eacute; ou un syst&egrave;me de s&eacute;curit&eacute; &eacute;quivalent</li>
<li>Enceinte munie d&rsquo;au moins un syst&egrave;me de d&eacute;tection d&rsquo;intrusion ou d&rsquo;un syst&egrave;me &eacute;quivalent</li>
</ul></td>
<td><ul>
<li>La source devrait &ecirc;tre conserv&eacute;e dans un conteneur ou un emplacement s&ucirc;r.</li>
</ul></td>  </tr>  <tr>
<td><strong>Protocole d&rsquo;intervention</strong></td>
<td colSpan="2"><ul>
<li>Protocole d&rsquo;intervention sp&eacute;cifique et plan d&rsquo;urgence</li>
<li>Contacter le corps policier local</li>
<li>Temps d&rsquo;intervention ad&eacute;quat</li>
<li>Doit comporter une proc&eacute;dure en cas de perte, de vol ou d&rsquo;acte malveillant visant des sources scell&eacute;es radioactives</li>
</ul></td>
<td><ul>
<li>Protocole d&rsquo;intervention g&eacute;n&eacute;rique et plan d&rsquo;urgence</li>
<li>Doit comporter une proc&eacute;dure en cas de perte, de vol ou d&rsquo;acte malveillant visant des sources scell&eacute;es radioactives</li>
</ul></td>
<td><ul>
<li>La source devrait &ecirc;tre prot&eacute;g&eacute;e contre tout acc&egrave;s et enl&egrave;vement non autoris&eacute;.</li>
</ul></td>  </tr>  <tr>
<td><strong>Entretien et essais</strong></td>
<td  colSpan="4"><ul>
<li>L&rsquo;entretien et les essais doivent &ecirc;tre r&eacute;alis&eacute;s au moins tous les six mois et des documents &eacute;crits doivent &ecirc;tre conserv&eacute;s.</li>
</ul></td>  </tr>  <tr>
<td><strong>Plan de s&eacute;curit&eacute; de l&rsquo;installation</strong></td>
<td colSpan="2"><ul>
<li>Examen annuel ou lorsque des changements importants sont apport&eacute;s &agrave; l&rsquo;installation</li>
<li>Classifi&eacute; comme renseignement r&eacute;glement&eacute; ou sensible et conserv&eacute; de fa&ccedil;on appropri&eacute;e</li>
<li>Communiqu&eacute; sur la base du besoin de savoir</li>
<li>Indique les mesures &agrave; prendre en cas de menace accrue</li>
</ul></td>
<td><ul>
<li>Examen r&eacute;gulier ou lorsque des changements importants sont apport&eacute;s &agrave; l&rsquo;installation</li>
<li>Classifi&eacute; comme renseignements r&eacute;glement&eacute;s ou sensibles et conserv&eacute; de fa&ccedil;on appropri&eacute;e</li>
<li>Communiqu&eacute; sur la base du besoin de savoir</li>
</ul></td>
<td><ul>
<li>Pratique de gestion prudente</li>
</ul></td>  </tr>  <tr>
<td><strong>V&eacute;rification de la fiabilit&eacute;</strong></td>
<td colSpan="2"><ul>
<li>V&eacute;rification nominale du casier judiciaire</li>
<li>V&eacute;rification des r&eacute;f&eacute;rences et des emplois pr&eacute;c&eacute;dents et confirmation de la scolarit&eacute;</li>
<li>Les conducteurs et les entrepreneurs (c.-&agrave;-d. les transporteurs) avec un acc&egrave;s sans escorte aux sources radioactives doivent faire l&rsquo;objet d&rsquo;une telle v&eacute;rification</li>
</ul></td>
<td><ul>
<li>V&eacute;rification des r&eacute;f&eacute;rences et des emplois pr&eacute;c&eacute;dents et confirmation de la scolarit&eacute;</li>
<li>V&eacute;rification nominale du casier judiciaire</li>
</ul></td>
<td><ul>
<li>V&eacute;rification des r&eacute;f&eacute;rences et des emplois pr&eacute;c&eacute;dents et confirmation de la scolarit&eacute;</li>
<li>V&eacute;rification nominale du casier judiciaire (pratique de gestion prudente)</li>
</ul></td>  </tr>  <tr>
<td><strong>S&eacute;curit&eacute; de l&rsquo;information</strong></td>
<td colSpan="4"><ul>
<li>Tous les renseignements r&eacute;glement&eacute;s doivent &ecirc;tre prot&eacute;g&eacute;s et partag&eacute;s sur la base du besoin de savoir.</li>
</ul></td>  </tr>  <tr>
<td><strong>Programme de sensibilisation &agrave; la s&eacute;curit&eacute;</strong></td>
<td colSpan="4"><ul>
<li>Tous les utilisateurs autoris&eacute;s, y compris les employ&eacute;s qui transportent des sources radioactives, doivent suivre une formation de sensibilisation &agrave; la s&eacute;curit&eacute; sur une base r&eacute;guli&egrave;re.</li>
</ul></td>  </tr>  <tr>
<td><strong>S&eacute;curit&eacute; des v&eacute;hicules</strong></td>
<td colSpan="2"><ul>
<li>Le v&eacute;hicule doit &ecirc;tre muni d&rsquo;un syst&egrave;me antivol ou d&rsquo;un syst&egrave;me coupe-moteur et d&rsquo;un syst&egrave;me de d&eacute;tection d&rsquo;intrusion ou de syst&egrave;mes &eacute;quivalents.</li>
<li>Le v&eacute;hicule doit &ecirc;tre muni d&rsquo;au moins deux barri&egrave;res techniques pour emp&ecirc;cher l&rsquo;enl&egrave;vement non autoris&eacute; de la source ou de l&rsquo;appareil radioactif.</li>
<li>L&rsquo;acc&egrave;s doit &ecirc;tre limit&eacute; aux utilisateurs autoris&eacute;s seulement.</li>
<li>Le v&eacute;hicule doit &ecirc;tre pourvu d&rsquo;un GPS ou d&rsquo;un syst&egrave;me de rep&eacute;rage.</li>
<li>Les conducteurs doivent &ecirc;tre munis d&rsquo;un moyen de communication</li>
</ul></td>
<td><ul>
<li>Le v&eacute;hicule doit &ecirc;tre muni d&rsquo;un syst&egrave;me antivol et d&rsquo;un syst&egrave;me de d&eacute;tection d&rsquo;intrusion ou de syst&egrave;mes &eacute;quivalents.</li>
<li>Le v&eacute;hicule doit &ecirc;tre muni d&rsquo;au moins deux barri&egrave;res techniques pour emp&ecirc;cher l&rsquo;enl&egrave;vement non autoris&eacute;</li>
</ul></td>
<td><ul>
<li>La source devrait &ecirc;tre prot&eacute;g&eacute;e contre tout acc&egrave;s et enl&egrave;vement non autoris&eacute;</li>
</ul></td>  </tr>  <tr>
<td><strong>Plan de s&eacute;curit&eacute; pour le transport</strong></td>
<td><ul>
<li>On doit &eacute;laborer un plan sp&eacute;cifique de s&eacute;curit&eacute; du transport et le soumettre &agrave; la CCSN pour examen et approbation</li>
</ul></td>
<td><ul>
<li>On doit &eacute;laborer un plan g&eacute;n&eacute;rique de s&eacute;curit&eacute; du transport</li>
</ul></td>
<td><ul>
<li>Pratiques de gestion prudente</li>
</ul></td>
<td><ul>
<li>La source devrait &ecirc;tre prot&eacute;g&eacute;e contre tout acc&egrave;s et enl&egrave;vement non autoris&eacute;</li>
</ul></td>  </tr>  </table>
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
<h3 id="sec3-2">3.2. Mesures de s&eacute;curit&eacute; techniques</h3>  <p>Les mesures de s&eacute;curit&eacute; techniques pour les sources, les installations ou les appareils radioactifs doivent comprendre des mesures physiques visant &agrave; :</p>
<ul>
<li>emp&ecirc;cher le personnel non autoris&eacute; d&rsquo;acc&eacute;der &agrave; ces sources</li>
<li>assurer la protection contre un acte ou une tentative d&rsquo;enl&egrave;vement non autoris&eacute;</li>
<li>assurer la protection contre un acte ou une tentative de sabotage</li>
</ul>  <p>Les mesures de s&eacute;curit&eacute; techniques doivent &eacute;galement inclure du mat&eacute;riel ou des syst&egrave;mes de s&eacute;curit&eacute; con&ccedil;us selon le principe de la d&eacute;fense en profondeur et les fonctions &laquo; d&eacute;tection, ralentissement et intervention &raquo; d&rsquo;un syst&egrave;me de protection physique.</p>  <p>Cette section d&eacute;crit les exigences de s&eacute;curit&eacute; pour les mesures suivantes :</p>
<ul>
<li>contr&ocirc;le de l&rsquo;acc&egrave;s</li>
<li>d&eacute;tection des acc&egrave;s non autoris&eacute;s</li>
<li>mat&eacute;riel de verrouillage et contr&ocirc;le des cl&eacute;s</li>
<li>barri&egrave;res physiques (conteneurs s&ucirc;rs, enceintes s&ucirc;res)</li>
<li>protocoles d&rsquo;intervention en cas d&rsquo;alarme</li>
<li>inspection, entretien et essai de l&rsquo;&eacute;quipement de s&eacute;curit&eacute; physique</li>
<li>agents de s&eacute;curit&eacute;</li>
</ul>  <p>Pour chacun des domaines indiqu&eacute;s ci-dessus, le titulaire de permis doit d&eacute;finir les mesures de s&eacute;curit&eacute; convenant au niveau de risque pr&eacute;sent&eacute; par les sources scell&eacute;es. De plus amples d&eacute;tails figurent aux sections 3.2.1 &agrave; 3.2.7.</p>  <p>Conform&eacute;ment aux alin&eacute;as 3(1)g) et h) du <a href="http://laws-lois.justice.gc.ca/fra/reglements/DORS-2000-202/"><em>R&egrave;glement g&eacute;n&eacute;ral sur la s&ucirc;ret&eacute; et la r&eacute;glementation nucl&eacute;aires</em></a>, le titulaire de permis doit inclure dans sa demande les mesures propos&eacute;es pour contr&ocirc;ler l&rsquo;acc&egrave;s aux lieux o&ugrave; se d&eacute;roulera l&rsquo;activit&eacute; autoris&eacute;e et les mesures propos&eacute;es pour pr&eacute;venir l&rsquo;utilisation, la possession ou l&rsquo;enl&egrave;vement ill&eacute;gaux ou la perte des substances nucl&eacute;aires autoris&eacute;es.</p>
<h4>3.2.1 Contr&ocirc;les de l&rsquo;acc&egrave;s</h4>  <p>Le titulaire de permis doit mettre en &oelig;uvre des mesures de contr&ocirc;le de l&rsquo;acc&egrave;s (p. ex., lecteurs de cartes d&rsquo;acc&egrave;s, syst&egrave;mes d&rsquo;identification du personnel, serrures manuelles ou &eacute;lectroniques) ou engager des agents de s&eacute;curit&eacute; pour s&rsquo;assurer en tout temps que seules les personnes autoris&eacute;es ont acc&egrave;s aux zones de stockage contenant des sources scell&eacute;es.</p>  <p>Les visiteurs, le personnel d&rsquo;entretien des b&acirc;timents, les &eacute;tudiants, les entrepreneurs et les compagnies d&rsquo;entretien qui ont besoin d&rsquo;acc&eacute;der &agrave; la zone de stockage des sources scell&eacute;es doivent &ecirc;tre accompagn&eacute;s en tout temps s&rsquo;ils ne disposent pas d&rsquo;une v&eacute;rification de la fiabilit&eacute; approuv&eacute;e par le titulaire de permis.</p>  <h5>Orientation</h5>  <p>Pour contr&ocirc;ler l&rsquo;acc&egrave;s aux sources scell&eacute;es, le titulaire de permis devrait envisager les mesures suivantes selon une approche graduelle :</p>
<ul>
<li>v&eacute;rifier et tenir &agrave; jour les dossiers de tous les employ&eacute;s ayant acc&egrave;s aux zones de stockage s&ucirc;r, au moyen d&rsquo;un registre ou d&rsquo;un syst&egrave;me de contr&ocirc;le des acc&egrave;s ayant des capacit&eacute;s de suivi</li>
<li>mettre en &oelig;uvre des mesures efficaces de contr&ocirc;le de l&rsquo;acc&egrave;s comme des dispositifs de verrouillage manuels, des cadenas, des lecteurs de carte d&rsquo;acc&egrave;s, des appareils et syst&egrave;mes biom&eacute;triques ou des points d&rsquo;entr&eacute;e &laquo; contr&ocirc;l&eacute;s &raquo;</li>
<li>s&rsquo;assurer que le syst&egrave;me de contr&ocirc;le de l&rsquo;acc&egrave;s comprend des mesures afin de pr&eacute;venir les pratiques inacceptables, p. ex., pour &eacute;viter qu&rsquo;une personne ne passe sa carte d&rsquo;acc&egrave;s &agrave; une autre personne, ou encore qu&rsquo;une personne en talonne une autre pour ne pas &ecirc;tre contr&ocirc;l&eacute;e</li>
<li>attribuer des num&eacute;ros d&rsquo;identification personnelle (NIP) qui seront utilis&eacute;s, le cas &eacute;ch&eacute;ant, avec un syst&egrave;me de contr&ocirc;le des acc&egrave;s</li>
<li>supprimer les droits d&rsquo;acc&egrave;s des personnes d&egrave;s qu&rsquo;elles n&rsquo;en ont plus besoin</li>
<li>restreindre les droits d&rsquo;acc&egrave;s aux syst&egrave;mes et logiciels de gestion et de contr&ocirc;le de l&rsquo;acc&egrave;s, pour &eacute;viter les interf&eacute;rences non autoris&eacute;es avec la base de donn&eacute;es du syst&egrave;me (piratage ou sabotage des logiciels)</li>
<li>installer un avertisseur d&rsquo;urgence pr&egrave;s de la zone de stockage des sources, afin d&rsquo;aviser l&rsquo;entreprise de surveillance des alarmes ou le personnel d&rsquo;intervention</li>
<li>installer un syst&egrave;me d&rsquo;alarme locale qui se d&eacute;clenche &agrave; proximit&eacute; de la zone de stockage pour alerter le personnel &agrave; proximit&eacute; en cas d&rsquo;intrusion ou de probl&egrave;me dans la zone de stockage</li>
</ul>  <p>Escorter une personne en tout temps signifie qu&rsquo;il faut maintenir un contact visuel constant avec cette personne.</p>
<h4>3.2.2 D&eacute;tection des acc&egrave;s non autoris&eacute;s</h4>  <p>Le titulaire de permis doit mettre en &oelig;uvre des mesures de d&eacute;tection rapide des actes et des tentatives d&rsquo;acc&egrave;s non autoris&eacute;, notamment :</p>
<ul>
<li>l&rsquo;observation visuelle</li>
<li>l&rsquo;&eacute;valuation des alarmes vid&eacute;o</li>
<li>des dispositifs de d&eacute;tection</li>
<li>des registres comptables, des sceaux ou d&rsquo;autres dispositifs de d&eacute;tection d&rsquo;alt&eacute;ration, y compris des syst&egrave;mes de surveillance des processus</li>
</ul>  <p>Veuillez noter que dans le cas des sources mobiles en utilisation, la surveillance visuelle continue par le personnel de l&rsquo;exploitant, muni de lignes de communication appropri&eacute;es, peut remplacer l&rsquo;utilisation d&rsquo;une ou deux barri&egrave;res.</p>  <p>Si un syst&egrave;me de d&eacute;tection d&rsquo;intrusion est utilis&eacute;, celui-ci doit :</p>
<ul>
<li>d&eacute;tecter imm&eacute;diatement toute intrusion non autoris&eacute;e dans la zone de stockage des sources scell&eacute;es</li>
<li>d&eacute;tecter imm&eacute;diatement toute alt&eacute;ration pouvant provoquer la d&eacute;faillance ou l&rsquo;arr&ecirc;t du syst&egrave;me d&rsquo;alarme</li>
<li>d&egrave;s qu&rsquo;une intrusion est d&eacute;tect&eacute;e, d&eacute;clencher un signal d&rsquo;alarme continu qui est &agrave; la fois sonore et visible dans les locaux du titulaire de permis ou &agrave; une station de surveillance approuv&eacute;e, au moyen d&rsquo;une liaison de communication supervis&eacute;e</li>
<li>comporter une alimentation sans coupure, v&eacute;rifi&eacute;e r&eacute;guli&egrave;rement, pour assurer l&rsquo;exploitabilit&eacute; continue du syst&egrave;me de d&eacute;tection de s&eacute;curit&eacute;</li>
</ul>  <h5>Orientation</h5>  <p>Pour d&eacute;tecter les acc&egrave;s non autoris&eacute;s, les d&eacute;faillances ou les alt&eacute;rations, le syst&egrave;me d&rsquo;alarme devrait :</p>
<ul>
<li>s&rsquo;activer d&egrave;s la d&eacute;tection d&rsquo;un acte d&rsquo;intrusion ou d&rsquo;alt&eacute;ration</li>
<li>continuer &agrave; produire une alarme jusqu&rsquo;&agrave; ce qu&rsquo;une personne autoris&eacute;e intervienne</li>
<li>utiliser plusieurs capteurs ou types de capteur pour assurer une redondance des syst&egrave;mes</li>
<li>&eacute;tablir des zones de d&eacute;tection qui se chevauchent</li>
<li>utiliser des lignes de communication supervis&eacute;es exclusives qui sont continuellement surveill&eacute;es</li>
<li>&eacute;tablir des zones d&rsquo;alarme exclusives pour chaque zone de stockage</li>
<li>avoir un taux faible de d&eacute;clenchement intempestif ou de fausses alarmes avec une probabilit&eacute; &eacute;lev&eacute;e de d&eacute;tection</li>
</ul>  <p>Si le titulaire de permis confie la surveillance des alarmes &agrave; une entreprise tierce, il devrait s&rsquo;assurer que l&rsquo;entreprise de surveillance est homologu&eacute;e par les Underwriters Laboratories (UL), les Laboratoires des assureurs du Canada (ULC) ou un autre organisme d&rsquo;homologation jug&eacute; acceptable par le personnel de la CCSN.</p>  <p>De plus, le titulaire de permis devrait :</p>
<ul>
<li>s&rsquo;assurer que les dispositifs de surveillance d&rsquo;alarme et les batteries de secours (p. ex., le panneau &eacute;lectronique ou la bo&icirc;te de jonction) sont prot&eacute;g&eacute;s contre toute alt&eacute;ration par des personnes non autoris&eacute;es</li>
<li>s&rsquo;assurer que le clavier est install&eacute; dans un endroit s&ucirc;r pour emp&ecirc;cher toute alt&eacute;ration</li>
<li>utiliser des zones d&rsquo;alarme sp&eacute;cialis&eacute;es dans la zone de stockage (distinctes de toutes les autres zones d&rsquo;alarme) et limiter l&rsquo;acc&egrave;s aux utilisateurs autoris&eacute;s seulement</li>
<li>maintenir une piste de v&eacute;rification pour enregistrer la cause de toutes les alarmes</li>
<li>s&rsquo;assurer qu&rsquo;un effectif suffisant est pr&eacute;sent en tout temps au poste de surveillance des alarmes</li>
</ul>  <p>Prenons l&rsquo;exemple d&rsquo;une entreprise de gammagraphie qui poss&egrave;de un entrep&ocirc;t muni d&rsquo;un syst&egrave;me d&rsquo;alarme. Deux zones sont pr&eacute;vues : une zone pour l&rsquo;entrep&ocirc;t et une deuxi&egrave;me zone int&eacute;rieure pour le stockage des mati&egrave;res nucl&eacute;aires. Pendant la journ&eacute;e, le syst&egrave;me d&rsquo;alarme principal de l&rsquo;entrep&ocirc;t est d&eacute;sactiv&eacute;, mais le syst&egrave;me de s&eacute;curit&eacute; de la zone de stockage reste activ&eacute; et fonctionne ind&eacute;pendamment du syst&egrave;me principal.</p>
<h4>3.2.3 Mat&eacute;riel de verrouillage et contr&ocirc;le des cl&eacute;s</h4>  <p>L&rsquo;utilisation des cartes d&rsquo;acc&egrave;s, des cl&eacute;s de porte ou des serrures qui contr&ocirc;lent l&rsquo;acc&egrave;s aux zones de stockage doit &ecirc;tre restreinte au personnel autoris&eacute; par le titulaire de permis.</p>  <p>Ce dernier doit conserver dans ses dossiers toutes les autorisations de contr&ocirc;le d&rsquo;acc&egrave;s, y compris pour les dispositifs de verrouillage (&eacute;lectroniques ou manuels). Dans ces dossiers doivent figurer les noms des personnes &agrave; qui les dispositifs de verrouillage ou les combinaisons ont &eacute;t&eacute; remis, ainsi que la date de d&eacute;livrance.</p>  <p>Le titulaire de permis doit &eacute;laborer et tenir &agrave; jour des proc&eacute;dures &eacute;crites comprenant des mesures pour d&eacute;livrer, r&eacute;parer ou remplacer toute cl&eacute;, carte d&rsquo;acc&egrave;s, combinaison ou tout dispositif de verrouillage qui est d&eacute;fectueux, perdu, vol&eacute;, ill&eacute;galement transf&eacute;r&eacute; ou compromis d&rsquo;une mani&egrave;re ou d&rsquo;une autre.</p>  <h5>Orientation</h5>  <p>Le titulaire de permis devrait mettre en &oelig;uvre une politique de contr&ocirc;le des cl&eacute;s pour :</p>
<ul>
<li>limiter le nombre de personnes ayant des cl&eacute;s</li>
<li>limiter le nombre de passe-partout</li>
<li>interdire aux employ&eacute;s de copier les cl&eacute;s</li>
<li>utiliser une cl&eacute; brevet&eacute;e ou une entr&eacute;e de cl&eacute; sp&eacute;ciale pour emp&ecirc;cher la copie non autoris&eacute;e des cl&eacute;s</li>
<li>inclure une disposition obligeant les employ&eacute;s &agrave; rapporter les cl&eacute;s lorsque l&rsquo;acc&egrave;s n&rsquo;est plus n&eacute;cessaire</li>
<li>s&rsquo;assurer que les cl&eacute;s brutes sont plac&eacute;es en lieu s&ucirc;r</li>
</ul>  <p>Aux fins de gestion des cl&eacute;s, le titulaire de permis devrait :</p>
<ul>
<li>v&eacute;rifier r&eacute;guli&egrave;rement l&rsquo;inventaire des cl&eacute;s et des d&eacute;tenteurs de cl&eacute;s</li>
<li>noter les modifications et les ajouts &agrave; l&rsquo;inventaire des cl&eacute;s et des d&eacute;tenteurs de cl&eacute;s dans les dossiers appropri&eacute;s</li>
<li>maintenir la responsabilit&eacute; pour toutes les cl&eacute;s qui ont &eacute;t&eacute; remises ainsi que pour les cl&eacute;s perdues ou vol&eacute;es</li>
</ul>  <p>L&rsquo;emploi de serrures &agrave; combinaisons ou de serrures sans cl&eacute; avec code chiffr&eacute; n&rsquo;est pas recommand&eacute;.</p>  <p>Si l&rsquo;on utilise des cl&eacute;s et des serrures standards, elles devraient &ecirc;tre de qualit&eacute; &eacute;lev&eacute;e ou &agrave; haute s&eacute;curit&eacute;. On devrait instaurer des proc&eacute;dures de gestion des cl&eacute;s pour emp&ecirc;cher tout acc&egrave;s non autoris&eacute; ou toute compromission. Les serrures devraient &ecirc;tre de type &agrave; arceau escamot&eacute; pour emp&ecirc;cher que la serrure soit coup&eacute;e.</p>
<h4>3.2.4 Barri&egrave;res physiques</h4>  <p>Pour les sources scell&eacute;es dont l&rsquo;activit&eacute; est inf&eacute;rieure aux seuils mentionn&eacute;s pour la cat&eacute;gorie III dans le tableau 1, le titulaire de permis doit stocker les sources dans des conteneurs s&ucirc;rs, comme il est d&eacute;crit &agrave; la section 3.2.5.1.1.</p>  <p>Pour les sources scell&eacute;es dont l&rsquo;activit&eacute; est &eacute;gale ou sup&eacute;rieure aux seuils indiqu&eacute;s pour les cat&eacute;gories 1, 2 ou 3 dans le tableau 1, le titulaire de permis doit mettre en &oelig;uvre au moins deux barri&egrave;res physiques diff&eacute;rentes qui emp&ecirc;chent tout acc&egrave;s non autoris&eacute; aux sources scell&eacute;es stock&eacute;es et qui ralentissent suffisamment les intrus pour permettre au personnel d&rsquo;intervention d&rsquo;agir.</p>  <p>Les barri&egrave;res physiques peuvent consister en n&rsquo;importe quelle combinaison de conteneurs s&ucirc;rs ou d&rsquo;enceintes s&ucirc;res. Par exemple :</p>
<ul>
<li>un titulaire de permis qui stocke une source scell&eacute;e dans un coffre verrouill&eacute; peut placer celui-ci dans une pi&egrave;ce ferm&eacute;e et verrouillable, et il doit fixer le conteneur (au sol, au mur ou sur un v&eacute;hicule)</li>
<li>sinon, il peut placer le coffre dans une cage m&eacute;tallique verrouill&eacute;e ou une autre enceinte appropri&eacute;e</li>
<li>le p&eacute;rim&egrave;tre &agrave; acc&egrave;s contr&ocirc;l&eacute; &eacute;tabli par le titulaire de permis peut constituer la premi&egrave;re enceinte s&ucirc;re et renfermer une seconde enceinte ou un conteneur s&ucirc;r &agrave; l&rsquo;int&eacute;rieur, les deux &eacute;tant pourvus d&rsquo;un contr&ocirc;le de l&rsquo;acc&egrave;s</li>
</ul>  <p>Veuillez noter que pour une source mobile en utilisation, il n&rsquo;est pas toujours possible d&rsquo;appliquer les mesures de s&eacute;curit&eacute; prescrites ci-dessus. Des mesures compensatoires doivent donc &ecirc;tre prises pour assurer d&rsquo;autres formes de protection (p. ex., une supervision &eacute;troite combin&eacute;e avec une liaison de communication appropri&eacute;e).</p>  <p>Les sources scell&eacute;es stock&eacute;es dans des piscines peuvent avoir des caract&eacute;ristiques de s&ucirc;ret&eacute; inh&eacute;rentes &agrave; leur conception qui permettraient de remplacer un niveau de barri&egrave;re physique, voire deux.</p>  <h5>Conteneurs s&ucirc;rs</h5>  <p>Les conteneurs s&ucirc;rs comprennent les classeurs s&eacute;curis&eacute;s, les bo&icirc;tes m&eacute;talliques, les coffres forts, les chambres fortes et les cages grillag&eacute;es. Pour qu&rsquo;un conteneur soit jug&eacute; s&ucirc;r, il doit &ecirc;tre :</p>
<ul>
<li>fix&eacute; solidement en place</li>
<li>r&eacute;sistant aux attaques physiques perp&eacute;tr&eacute;es &agrave; l&rsquo;aide d&rsquo;outils portatifs</li>
<li>muni d&rsquo;une cl&eacute; ou d&rsquo;un cadenas &agrave; combinaison ou d&rsquo;une serrure similaire pouvant r&eacute;sister &agrave; une attaque subreptice ou forc&eacute;e &agrave; l&rsquo;aide d&rsquo;outils portatifs</li>
<li>pour une cage grillag&eacute;e, celle-ci doit &ecirc;tre faite d&rsquo;un treillis d&eacute;ploy&eacute; d&rsquo;un calibre d&rsquo;au moins 10 [6]</li>
</ul>  <p>Veuillez noter que les sources scell&eacute;es stock&eacute;es dans des conteneurs pesant plus de 500 kg peuvent &ecirc;tre consid&eacute;r&eacute;s comme &eacute;tant s&ucirc;res en raison de leur poids et de leur robustesse. Des structures ou conteneurs &eacute;quivalents ayant un niveau de s&eacute;curit&eacute; comparable peuvent &ecirc;tre acceptables.</p>  <h5>Enceintes s&ucirc;res</h5>  <p>Ces enceintes comprennent les pi&egrave;ces, les b&acirc;timents ou les cages qui peuvent &ecirc;tre s&eacute;curis&eacute;s. Une enceinte est jug&eacute;e s&ucirc;re si tous les composants ext&eacute;rieurs (p. ex., les murs, les portes et les fen&ecirc;tres) sont r&eacute;sistants aux attaques physiques perp&eacute;tr&eacute;es &agrave; l&rsquo;aide d&rsquo;outils portatifs et si les points d&rsquo;acc&egrave;s et de sortie sont munis de dispositifs de contr&ocirc;le de l&rsquo;acc&egrave;s, ou bien si l&rsquo;acc&egrave;s est contr&ocirc;l&eacute; par des agents de s&eacute;curit&eacute;.</p>  <p>Les fen&ecirc;tres qui permettent d&rsquo;acc&eacute;der aux zones int&eacute;rieures &agrave; proximit&eacute; des sources doivent &ecirc;tre munies de barreaux (l&rsquo;&eacute;cart entre ceux-ci doit &ecirc;tre inf&eacute;rieur &agrave; 15 cm), de grillage m&eacute;tallique, de treillis en m&eacute;tal d&eacute;ploy&eacute; ou &ecirc;tre pourvues d&rsquo;un film ou d&rsquo;un vitrage de s&eacute;curit&eacute; homologu&eacute; UL ou ULC. Le mat&eacute;riel de s&eacute;curit&eacute; fix&eacute; aux fen&ecirc;tres doit &ecirc;tre appos&eacute; &agrave; l&rsquo;int&eacute;rieur pour &eacute;viter toute alt&eacute;ration, ou &ecirc;tre fix&eacute; &agrave; l&rsquo;aide de fixations ind&eacute;montables s&rsquo;il est install&eacute; &agrave; l&rsquo;ext&eacute;rieur.</p>  <p>Les portes qui donnent acc&egrave;s aux zones o&ugrave; les sources radioactives sont utilis&eacute;es, trait&eacute;es ou stock&eacute;es doivent &ecirc;tre s&eacute;curis&eacute;es lorsqu&rsquo;elles sont laiss&eacute;es sans surveillance. Les portes doivent &ecirc;tre &agrave; &acirc;me solide rev&ecirc;tue de bois ou de m&eacute;tal et install&eacute;es dans un cadre renforc&eacute; fait d&rsquo;un mat&eacute;riau &eacute;quivalent. Les portes doivent &ecirc;tre maintenues en bon &eacute;tat et &ecirc;tre pourvues de charni&egrave;res &agrave; gonds ind&eacute;montables si les charni&egrave;res sont mont&eacute;es &agrave; l&rsquo;ext&eacute;rieur. Toutes les portes ou les passages de grande taille doivent &ecirc;tre pourvus de vitrage ou de barreaux de s&eacute;curit&eacute;, de grillages m&eacute;talliques ou l&rsquo;&eacute;quivalent. Les grillages doivent &ecirc;tre fix&eacute;s en place &agrave; l&rsquo;aide de fixations ind&eacute;montables.</p>  <p>Si des sources radioactives sont utilis&eacute;es ou stock&eacute;es pr&egrave;s d&rsquo;explosifs, une s&eacute;paration minimale de 3 m&egrave;tres doit &ecirc;tre gard&eacute;e entre les sources radioactives et toutes les mati&egrave;res explosives, conform&eacute;ment aux exigences de la section 13 des <em>Lignes directrices pour les installations d&rsquo;assemblage des perforateurs &agrave; charge creuse</em> [7].</p>  <h5>Orientation</h5>  <p>Les barri&egrave;res classiques comme les cl&ocirc;tures &agrave; mailles losang&eacute;es, les portes verrouill&eacute;es, les fen&ecirc;tres grillag&eacute;es, les murs de ma&ccedil;onnerie et les vo&ucirc;tes sont couramment utilis&eacute;es pour le stockage des sources radioactives scell&eacute;es. On devrait concevoir les barri&egrave;res en tenant compte des vis&eacute;es de l&rsquo;adversaire.</p>  <p>Le titulaire de permis devrait installer plusieurs barri&egrave;res physiques pour prot&eacute;ger les sources radioactives. La pr&eacute;sence de plusieurs barri&egrave;res peut obliger un adversaire &agrave; apporter divers outils pour vaincre chaque barri&egrave;re, ce qui le ralentira dans sa tentative et donnera au personnel d&rsquo;intervention le temps d&rsquo;intervenir. Une fa&ccedil;on d&rsquo;appliquer la &laquo; d&eacute;fense en profondeur &raquo; est d&rsquo;avoir plusieurs &laquo; couches &raquo; de barri&egrave;res diff&eacute;rentes afin d&rsquo;entraver l&rsquo;avanc&eacute;e de l&rsquo;adversaire, car il devra employer divers outils et techniques (voir la figure 1).</p>
<p><strong>Figure 1: Voie suivie par un adversaire vers une zone de stockage</strong></p>
<div className="col-md-2"></div>  <div className="module-poster span-3">
<img src="/images/regulatory-documents/regdoc-2-12-3-ver2/figure-1-fra.jpg" alt="" />  </div>  <div className="clear"></div>
<p>Voici quelques exemples de barri&egrave;res multiples :</p>
<ul>
<li>un appareil portatif (p. ex., une jauge portative, un appareil d&rsquo;exposition) entrepos&eacute; dans une vo&ucirc;te ou un coffre-fort qui est boulonn&eacute; au plancher et capable de r&eacute;sister aux attaques &agrave; l&rsquo;aide d&rsquo;outils communs</li>
<li>un appareil mobile (p. ex., une unit&eacute; de curieth&eacute;rapie) qui peut &ecirc;tre encha&icirc;n&eacute; au sol dans la zone de stockage. La cha&icirc;ne est faite d&rsquo;un mat&eacute;riau pouvant r&eacute;sister aux attaques &agrave; l&rsquo;aide d&rsquo;outils communs et est s&eacute;curis&eacute;e par un cadenas de qualit&eacute; &eacute;lev&eacute;e UL 437 ayant le m&ecirc;me niveau de robustesse (p. ex., avec arceau escamot&eacute;)</li>
<li>une porte &agrave; &acirc;me pleine en bois ou en m&eacute;tal, install&eacute;e sur des vis ind&eacute;montables, des charni&egrave;res &agrave; gonds, un protecteur de loquet et un ferme-porte automatique</li>
<li>une fen&ecirc;tre pourvue d&rsquo;un film stratifi&eacute; r&eacute;sistant aux tentatives de vol, d&rsquo;un grillage m&eacute;tallique ou de barreaux m&eacute;talliques install&eacute;s avec un &eacute;cart de 15 centim&egrave;tres ou moins entre les barreaux et avec des vis ind&eacute;montables</li>
</ul>  <h5>Orientation concernant les conteneurs s&ucirc;rs</h5>  <p>Le lieu de stockage ou le conteneur devrait :</p>
<ul>
<li>&ecirc;tre s&eacute;curis&eacute; par un m&eacute;canisme de verrouillage ou d&rsquo;autres mesures pour emp&ecirc;cher l&rsquo;enl&egrave;vement non autoris&eacute;</li>
<li>&ecirc;tre s&eacute;curis&eacute; lorsqu&rsquo;il est laiss&eacute; sans surveillance</li>
<li>&ecirc;tre muni d&rsquo;un syst&egrave;me d&rsquo;alarme pour d&eacute;tecter toute entr&eacute;e ou tout acc&egrave;s non autoris&eacute;</li>
<li>&ecirc;tre suffisamment robuste pour r&eacute;sister aux outils communs pouvant servir aux attaques (p. ex., barre &agrave; clous, perceuse, chalumeau)</li>
</ul>  <h5>Orientation concernant les enceintes s&ucirc;res</h5>  <p>Les ouvertures, comme les fen&ecirc;tres ou les conduits d&rsquo;a&eacute;ration, qui pourraient fournir un acc&egrave;s aux enceintes s&ucirc;res devraient &ecirc;tre pourvues de barreaux, de grillage m&eacute;tallique, de treillis en m&eacute;tal d&eacute;ploy&eacute; ou de film ou de vitrage de s&eacute;curit&eacute; homologu&eacute; UL/ULC. Le mat&eacute;riel de s&eacute;curit&eacute; fix&eacute; aux fen&ecirc;tres devrait &ecirc;tre appos&eacute; &agrave; l&rsquo;int&eacute;rieur pour &eacute;viter toute alt&eacute;ration; s&rsquo;il est fix&eacute; &agrave; l&rsquo;ext&eacute;rieur, il doit &ecirc;tre install&eacute; &agrave; l&rsquo;aide d&rsquo;ancrages ind&eacute;montables.</p>  <p>Les portes qui donnent acc&egrave;s aux zones o&ugrave; les sources scell&eacute;es et les appareils &agrave; rayonnement sont utilis&eacute;s, trait&eacute;s ou stock&eacute;s devraient &ecirc;tre s&eacute;curis&eacute;es lorsqu&rsquo;elles sont laiss&eacute;es sans surveillance. Les portes devraient &ecirc;tre &agrave; &acirc;me solide rev&ecirc;tue de bois ou de m&eacute;tal et install&eacute;es dans un cadre renforc&eacute; fait d&rsquo;un mat&eacute;riau &eacute;quivalent. Les portes devraient &ecirc;tre en bon &eacute;tat. Si la porte est pourvue de charni&egrave;res mont&eacute;es du c&ocirc;t&eacute; non s&ucirc;r, les charni&egrave;res devraient &ecirc;tre &agrave; gonds ind&eacute;montables. Tous les vitrages de porte ou les passages de grande taille (grillages) devraient &ecirc;tre pourvus de vitrage ou de barreaux de s&eacute;curit&eacute;, de grillages m&eacute;talliques ou l&rsquo;&eacute;quivalent. Les grillages devraient &ecirc;tre fix&eacute;s en place &agrave; l&rsquo;aide d&rsquo;ancres ind&eacute;montables.</p>  <p>Si une surveillance visuelle continue est assur&eacute;e par un op&eacute;rateur, celui-ci devrait &ecirc;tre muni d&rsquo;un moyen de communication (p. ex., t&eacute;l&eacute;phone cellulaire ou radio) et conna&icirc;tre les protocoles d&rsquo;intervention pour communiquer rapidement avec le personnel d&rsquo;intervention en cas d&rsquo;acc&egrave;s ou d&rsquo;enl&egrave;vement non autoris&eacute;.</p>  <p>Si on utilise des claviers pour armer et d&eacute;sarmer un syst&egrave;me de d&eacute;tection d&rsquo;intrusion, l&rsquo;appareil et sa bo&icirc;te de jonction &eacute;lectrique devraient &ecirc;tre install&eacute;s dans une zone s&ucirc;re afin de r&eacute;duire les risques d&rsquo;alt&eacute;ration.</p>  <p>Pour assurer l&rsquo;alimentation continue du syst&egrave;me de d&eacute;tection et de surveillance des alarmes en cas de perte de l&rsquo;alimentation &eacute;lectrique primaire, le titulaire de permis devrait envisager d&rsquo;installer une source d&rsquo;alimentation auxiliaire de secours ou l&rsquo;&eacute;quivalent pour maintenir une capacit&eacute; de d&eacute;tection.</p>
<h4>3.2.5 Protocole d&rsquo;intervention en cas d&rsquo;alarme</h4>  <p>Le titulaire de permis doit r&eacute;pondre imm&eacute;diatement &agrave; tout acte ou tentative de vol, d&eacute;tournement ou sabotage de mati&egrave;res ou d&rsquo;appareils radioactifs.</p>  <p>Le titulaire de permis doit &eacute;laborer et maintenir un protocole document&eacute; d&rsquo;intervention en cas d&rsquo;alarme afin de consigner la cause et le traitement des alarmes. Le protocole doit comprendre le r&ocirc;le et les responsabilit&eacute;s du personnel d&rsquo;intervention d&rsquo;urgence du titulaire de permis et de la force d&rsquo;intervention hors site, et celui-ci doit &ecirc;tre document&eacute; dans un plan d&rsquo;urgence ou un document &eacute;quivalent.</p>  <p>Le titulaire de permis doit signaler aux corps policiers comp&eacute;tents la pr&eacute;sence de sources scell&eacute;es, et proposer une visite de familiarisation du site. Il doit aussi r&eacute;diger et conserver des ententes &eacute;crites avec les intervenants d&rsquo;urgence hors site, et les mettre &agrave; jour annuellement ou lorsque des modifications &agrave; la conception ou &agrave; l&rsquo;exploitation des installations affectent la vuln&eacute;rabilit&eacute; potentielle des sources. Des ententes &eacute;crites ne sont pas requises pour les chantiers temporaires.</p>  <h5>Orientation</h5>  <p>Le titulaire de permis devrait &eacute;laborer et tenir &agrave; jour un protocole d&rsquo;intervention document&eacute; en cas d&rsquo;alarme qui comprend :</p>
<ul>
<li>les proc&eacute;dures d&rsquo;intervention en cas de vol, de perte ou de sabotage d&rsquo;une source radioactive scell&eacute;e</li>
<li>le r&ocirc;le et les responsabilit&eacute;s du personnel du titulaire de permis</li>
<li>les moyens de communication avec la police et les autorit&eacute;s locales responsables</li>
<li>les rapports d&rsquo;incidents et les notifications</li>
<li>le signalement imm&eacute;diat de toute source r&eacute;cup&eacute;r&eacute;e</li>
</ul>  <p>Afin de faciliter les arrangements avec les autorit&eacute;s polici&egrave;res locales ou provinciales ou les accords d&rsquo;aide mutuelle avec d&rsquo;autres sites, le titulaire de permis devrait envisager la possibilit&eacute; de mettre par &eacute;crit ces arrangements, p. ex., sous forme de protocoles d&rsquo;entente. Ces arrangements &eacute;crits devraient indiquer en d&eacute;tail les interactions entre les gardiens du site ou le personnel sur place et les agences.</p>
<h4>3.2.6 Inspection, entretien et essai de l&rsquo;&eacute;quipement de s&eacute;curit&eacute;</h4>  <p>Le titulaire de permis doit &eacute;laborer et appliquer des proc&eacute;dures &eacute;crites pour l&rsquo;essai de l&rsquo;&eacute;quipement de s&eacute;curit&eacute; physique ainsi qu&rsquo;un calendrier d&rsquo;entretien et d&rsquo;essais p&eacute;riodiques conform&eacute;ment aux sp&eacute;cifications du fabricant. Les essais de l&rsquo;&eacute;quipement de s&eacute;curit&eacute;, y compris les dispositifs de d&eacute;tection d&rsquo;intrusion, doivent &ecirc;tre effectu&eacute;s au moins tous les six mois. Le titulaire de permis doit d&eacute;montrer que les essais des syst&egrave;mes d&rsquo;alarme ont &eacute;t&eacute; r&eacute;alis&eacute;s. Les proc&eacute;dures d&rsquo;entretien pr&eacute;ventif doivent inclure des mesures pour remplacer les &eacute;quipements et appareils d&eacute;fectueux dans les meilleurs d&eacute;lais.</p>  <h5>Orientation</h5>  <p>Tous les dispositifs de d&eacute;tection devraient &ecirc;tre install&eacute;s, exploit&eacute;s et entretenus conform&eacute;ment aux sp&eacute;cifications des fabricants et aux proc&eacute;dures du titulaire du permis. Celui-ci devrait r&eacute;guli&egrave;rement faire l&rsquo;essai des dispositifs de d&eacute;tection afin de s&rsquo;assurer qu&rsquo;ils fonctionnent bien et tenir &agrave; jour les registres.</p>  <p>Le titulaire de permis devrait assurer la fiabilit&eacute; gr&acirc;ce &agrave; un programme d&rsquo;entretien pr&eacute;ventif qui permet de d&eacute;pister les d&eacute;faillances des dispositifs de d&eacute;tection. Lorsque l&rsquo;appareil est hors service pour r&eacute;paration ou remplacement, il faut pr&eacute;voir des mesures compensatoires.</p>
<h4>3.2.7 Agents de s&eacute;curit&eacute;</h4>  <p>Si le titulaire de permis utilise un service de s&eacute;curit&eacute;, il doit &eacute;laborer et tenir &agrave; jour des proc&eacute;dures et des instructions &eacute;crites sp&eacute;cifiques pour les points suivants :</p>
<ul>
<li>les mesures pour contr&ocirc;ler l&rsquo;acc&egrave;s &agrave; la zone autoris&eacute;e</li>
<li>des patrouilles de surveillance &agrave; pied et en v&eacute;hicule</li>
<li>l&rsquo;&eacute;valuation des alarmes et les mesures d&rsquo;intervention</li>
<li>l&rsquo;arrestation et la d&eacute;tention des intrus non arm&eacute;s</li>
<li>la d&eacute;nonciation des activit&eacute;s suspectes, y compris les intrus arm&eacute;s, aux corps policiers comp&eacute;tents</li>
<li>le fonctionnement de l&rsquo;&eacute;quipement de s&eacute;curit&eacute;</li>
<li>la formation de s&eacute;curit&eacute; relative aux t&acirc;ches assign&eacute;es</li>
</ul>  <h5>Orientation</h5>  <p>Les agents de s&eacute;curit&eacute; devraient &ecirc;tre correctement &eacute;quip&eacute;s et form&eacute;s. Un programme de formation formel express&eacute;ment pour les agents de s&eacute;curit&eacute; devrait aussi &ecirc;tre &eacute;labor&eacute;. Le programme de formation devrait comprendre les &eacute;l&eacute;ments suivants :</p>
<ul>
<li>les exigences des r&egrave;glements provinciaux ou territoriaux, le cas &eacute;ch&eacute;ant</li>
<li>la l&eacute;gislation et les autorit&eacute;s pertinentes</li>
<li>la connaissance du site</li>
<li>les r&ocirc;les, les responsabilit&eacute;s et les fonctions</li>
<li>les proc&eacute;dures d&rsquo;urgence en radioprotection et les protocoles d&rsquo;intervention</li>
<li>les techniques de premiers soins</li>
</ul>  <p>Les agents de s&eacute;curit&eacute; devraient faire l&rsquo;objet d&rsquo;une v&eacute;rification dans le cadre du programme de fiabilit&eacute; (voir la section 3.3.3) et d&eacute;tenir un permis ou un certificat valide reconnu par la province ou le territoire.</p>  <p>Le titulaire de permis devrait envisager de r&eacute;aliser des exercices et des man&oelig;uvres sur une base r&eacute;guli&egrave;re afin de valider l&rsquo;&eacute;tat de pr&eacute;paration de la force d&rsquo;intervention sur le site.</p>  <p>En ce qui concerne les agents de s&eacute;curit&eacute;, le titulaire de permis devrait &eacute;laborer et tenir &agrave; jour une politique globale de formation et des programmes de formation initiale et continue en fonction des qualifications et des comp&eacute;tences &agrave; long terme requises pour effectuer le travail, ainsi que des objectifs de formation qui reconnaissent le r&ocirc;le crucial de la s&ucirc;ret&eacute; et de la s&eacute;curit&eacute;.</p>
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
<h3 id="sec3-3">3.3. Mesures de s&eacute;curit&eacute; administratives</h3>  <p>Les mesures de s&eacute;curit&eacute; administratives soutiennent les mesures techniques et elles doivent comprendre les programmes, les plans, les politiques, les proc&eacute;dures, les instructions et les pratiques que le titulaire de permis met en &oelig;uvre pour s&eacute;curiser les mati&egrave;res radioactives autoris&eacute;es contre leur enl&egrave;vement non autoris&eacute; ou leur sabotage.</p>  <p>Ces mesures portent entre autres sur les &eacute;l&eacute;ments suivants :</p>
<ul>
<li>le plan de s&eacute;curit&eacute; du site</li>
<li>le programme de sensibilisation &agrave; la s&eacute;curit&eacute;</li>
<li>la fiabilit&eacute; du personnel</li>
<li>la protection des renseignements r&eacute;glement&eacute;s et sensibles</li>
<li>le contr&ocirc;le de l&rsquo;inventaire</li>
<li>les proc&eacute;dures de contr&ocirc;le de l&rsquo;acc&egrave;s</li>
</ul>
<h4>3.3.1 Plan de s&eacute;curit&eacute; du site</h4>  <p>Pour les sources de cat&eacute;gories 1, 2 et 3, les mesures techniques et administratives doivent &ecirc;tre document&eacute;es par le titulaire de permis dans un plan de s&eacute;curit&eacute; du site et &ecirc;tre d&ucirc;ment d&eacute;sign&eacute;s comme des renseignements r&eacute;glement&eacute;s conform&eacute;ment aux articles 21 &agrave; 23 du <a href="http://laws-lois.justice.gc.ca/fra/reglements/DORS-2000-202/"><em>R&egrave;glement g&eacute;n&eacute;ral sur la s&ucirc;ret&eacute; et la r&eacute;glementation nucl&eacute;aires</em></a>. Le titulaire de permis doit examiner le plan de s&eacute;curit&eacute; du site au moins une fois par an et le mettre &agrave; jour en fonction des modifications apport&eacute;es aux mesures de s&eacute;curit&eacute; physiques ou op&eacute;rationnelles ou encore y ajouter toute modification apport&eacute;e &agrave; l&rsquo;installation autoris&eacute;e.</p>  <h5>Orientation</h5>  <p>Pour plus d&rsquo;information sur le plan de s&eacute;curit&eacute; du site et pour obtenir un mod&egrave;le de plan de s&eacute;curit&eacute;, veuillez consulter l&rsquo;annexe A &laquo; Exemple de plan de s&eacute;curit&eacute; du site &raquo;.</p>
<h4>3.3.2	Programme de sensibilisation &agrave; la s&eacute;curit&eacute;</h4>  <p>Toutes les personnes ayant un acc&egrave;s autoris&eacute; aux sources scell&eacute;es ou aux renseignements r&eacute;glement&eacute;s dans les locaux du titulaire de permis (y compris les compagnies d&rsquo;entretien, les entrepreneurs et le personnel d&rsquo;entretien des b&acirc;timents) doivent &ecirc;tre mises au courant des politiques, des protocoles et des pratiques de s&eacute;curit&eacute; de l&rsquo;installation. Le titulaire de permis doit conserver les dossiers sur la formation de s&eacute;curit&eacute; et la sensibilisation &agrave; la s&eacute;curit&eacute; re&ccedil;ue par chaque travailleur, conform&eacute;ment &agrave; l&rsquo;alin&eacute;a 36(1)d) et au paragraphe 36(2) du <a href="http://laws-lois.justice.gc.ca/fra/reglements/DORS-2000-207/"><em>R&egrave;glement sur les substances nucl&eacute;aires et les appareils &agrave; rayonnement</em></a>. Le titulaire de permis doit documenter et examiner le programme de sensibilisation &agrave; la s&eacute;curit&eacute; au moins une fois par an. Il doit mettre en &oelig;uvre un processus visant &agrave; s&rsquo;assurer que les nouveaux employ&eacute;s re&ccedil;oivent une formation de sensibilisation &agrave; la s&eacute;curit&eacute;, et une formation de recyclage doit &ecirc;tre offerte sur une base r&eacute;guli&egrave;re aux employ&eacute;s en poste.</p>  <h5>Orientation</h5>  <p>La sensibilisation &agrave; la s&eacute;curit&eacute; devrait comprendre des instructions sur les pratiques et les proc&eacute;dures de s&eacute;curit&eacute; visant &agrave; prot&eacute;ger les sources scell&eacute;es et les renseignements r&eacute;glement&eacute;s, et sur la fa&ccedil;on de rapporter les &eacute;v&eacute;nements suspects ou les incidents de s&eacute;curit&eacute; (y compris pendant le transport).</p>  <p>Au minimum, le programme de sensibilisation devrait :</p>
<ul>
<li>faire en sorte que les employ&eacute;s comprennent leurs r&ocirc;les et responsabilit&eacute;s en mati&egrave;re de s&eacute;curit&eacute;</li>
<li>faire en sorte que le personnel soit form&eacute; pour reconna&icirc;tre et signaler toute activit&eacute; suspecte, par exemple :
<ul>
<li>l&rsquo;utilisation d&rsquo;une fausse identit&eacute;</li>
<li>les personnes pr&eacute;sentant un comportement suspect</li>
<li>les personnes qui d&eacute;clenchent une alarme sans autorisation</li>
<li>les uniformes ou le mat&eacute;riel perdus ou vol&eacute;s dans l&rsquo;organisation</li>
<li>les comportements dangereux au travail</li>
<li>assurer la protection des renseignements r&eacute;glement&eacute;s et sensibles</li>
<li>comporter une formation sur les mesures permettant de d&eacute;celer les activit&eacute;s suspectes ou des changements dans le comportement du personnel ou des entrepreneurs</li>
</ul></li>
</ul>  <p>Pour le programme de sensibilisation &agrave; la s&eacute;curit&eacute;, le titulaire de permis devrait &eacute;tablir et maintenir une politique globale de formation et des programmes de formation initiale et continue afin d&rsquo;assurer les qualifications et les comp&eacute;tences &agrave; long terme requises pour effectuer le travail, ainsi que des objectifs de formation qui reconnaissent le r&ocirc;le crucial de la s&ucirc;ret&eacute; et de la s&eacute;curit&eacute;.</p>  <p>Pour plus d&rsquo;information sur l&rsquo;&eacute;tablissement d&rsquo;une culture de s&eacute;curit&eacute; au sein de l&rsquo;organisation, veuillez consulter la section 3.3 du document <span lang="en"><em><a href="http://www-pub.iaea.org/MTCD/Publications/PDF/Pub1347_web.pdf">Nuclear Security Culture</a></em></span> de l&rsquo;AIEA [8].</p>
<h4>3.3.3 Fiabilit&eacute; des personnes</h4>  <p>Le titulaire de permis doit v&eacute;rifier la fiabilit&eacute; de toutes les personnes qui ont besoin d&rsquo;acc&eacute;der aux sources scell&eacute;es dans les locaux du titulaire de permis ou aux renseignements r&eacute;glement&eacute;s ou sensibles [9], y compris le personnel des compagnies d&rsquo;entretien, des entrepreneurs et des services d&rsquo;entretien des b&acirc;timents qui n&eacute;cessite un acc&egrave;s sans escorte. Les membres du personnel qui doivent acc&eacute;der aux mati&egrave;res radioactives ou aux renseignements r&eacute;glement&eacute;s ou sensibles pour effectuer leur travail, mais qui ne sont pas approuv&eacute;s par le titulaire de permis, doivent &ecirc;tre escort&eacute;s par une personne approuv&eacute;e. La nature et l&rsquo;exhaustivit&eacute; des enqu&ecirc;tes de s&eacute;curit&eacute; sur le personnel [9] doivent &ecirc;tre fond&eacute;es sur la cat&eacute;gorie de la mati&egrave;re radioactive.</p>  <p>Pour les sources de cat&eacute;gories 1, 2 et 3, le titulaire de permis doit, au minimum, v&eacute;rifier les renseignements suivants :</p>
<ol>
<li>confirmer l&rsquo;identit&eacute; de la personne d&rsquo;apr&egrave;s des documents originaux fiables tels que le passeport ou une combinaison d&rsquo;autres documents originaux avec photo d&rsquo;identit&eacute; (p. ex., permis de conduire, carte-sant&eacute; ou acte de naissance)</li>
<li>un document &eacute;manant du Centre d&rsquo;information de la police canadienne ou des services policiers, indiquant le r&eacute;sultat d&rsquo;une v&eacute;rification nominale du casier judiciaire (VNCJ) de la personne</li>
<li>les ant&eacute;c&eacute;dents d&rsquo;emploi de la personne, y compris une confirmation de sa scolarit&eacute; et de ses qualifications professionnelles, &agrave; moins que la personne ne soit employ&eacute;e depuis plus de cinq ans &agrave; l&rsquo;installation</li>
<li>si les ant&eacute;c&eacute;dents d&rsquo;une personne ne peuvent &ecirc;tre &eacute;tablis pour au moins les cinq derni&egrave;res ann&eacute;es, des informations relatives &agrave; sa fiabilit&eacute;, y compris, le cas &eacute;ch&eacute;ant, une VNCJ dans chaque pays o&ugrave; la personne a r&eacute;sid&eacute; pendant une ou plusieurs ann&eacute;es au cours des cinq derni&egrave;res ann&eacute;es</li>
</ol>  <p>La v&eacute;rification de la fiabilit&eacute; doit &ecirc;tre mise &agrave; jour r&eacute;guli&egrave;rement, soit au moins tous les cinq ans.</p>  <p>Le titulaire de permis doit conserver la documentation sur la fiabilit&eacute; d&rsquo;une personne pendant un an apr&egrave;s l&rsquo;expiration du permis, conform&eacute;ment au paragraphe 28(1) du <a href="http://laws-lois.justice.gc.ca/fra/reglements/DORS-2000-202/page-1.html"><em>R&egrave;glement g&eacute;n&eacute;ral sur la s&ucirc;ret&eacute; et la r&eacute;glementation nucl&eacute;aires</em></a>. Le titulaire de permis doit autoriser la CCSN &agrave; acc&eacute;der aux documents sur la fiabilit&eacute;, aux fins d&rsquo;examen, d&rsquo;inspection ou de v&eacute;rification.</p>  <h5>Solution de rechange &agrave; la v&eacute;rification nominale du casier judiciaire</h5>  <p>Si un individu d&eacute;tient l&rsquo;un des documents ou permis suivants, il peut &ecirc;tre exempt&eacute; de la VNCJ, car ces documents sont consid&eacute;r&eacute;s comme des &eacute;quivalents :</p>
<ul>
<li>une lettre d&rsquo;enqu&ecirc;te de s&eacute;curit&eacute; d&eacute;livr&eacute;e par la Division de la r&eacute;glementation des explosifs de Ressources naturelles Canada (NRCan)</li>
<li>une carte Exp&eacute;ditions rapides et s&eacute;curitaires (EXPRES) d&eacute;livr&eacute;e par l&rsquo;Agence des services frontaliers du Canada (ASFC)</li>
<li>une carte NEXUS d&eacute;livr&eacute;e par l&rsquo;ASFC</li>
<li>un permis de possession et d&rsquo;acquisition d&rsquo;armes &agrave; feu d&eacute;livr&eacute; en vertu de la <a href="http://laws-lois.justice.gc.ca/fra/lois/F-11.6/"><em>Loi sur les armes &agrave; feu</em></a>, L.C. 1995, ch. 39</li>
<li>un permis g&eacute;n&eacute;ral d&eacute;livr&eacute; en vertu de la <em>Loi sur les explosifs du Qu&eacute;bec</em>, L.R.Q. ch. E-22</li>
<li>une &eacute;valuation de la s&eacute;curit&eacute; r&eacute;alis&eacute;e par le Programme des marchandises contr&ocirc;l&eacute;es administr&eacute; par la Direction des marchandises contr&ocirc;l&eacute;es de Travaux publics et Services gouvernementaux Canada</li>
</ul>  <p>Lorsqu&rsquo;une personne fournit la preuve valide de l&rsquo;un de ces documents ou permis, le titulaire de permis ou l&rsquo;employeur peut accorder un acc&egrave;s sans escorte aux sources scell&eacute;es &agrave; risque &eacute;lev&eacute; sans devoir proc&eacute;der &agrave; une VNCJ.</p>  <h5>Orientation</h5>  <p>Le programme de v&eacute;rification de la fiabilit&eacute; devrait s&rsquo;assurer que les personnes qui ont acc&egrave;s sans escorte aux sources scell&eacute;es radioactives &agrave; haut risque sont fiables et dignes de confiance et ne pr&eacute;sentent pas un risque d&eacute;raisonnable pour la sant&eacute; et la s&eacute;curit&eacute; des personnes ni pour la s&eacute;curit&eacute; de l&rsquo;installation. Le titulaire de permis devrait conserver des copies de tous les documents fournis par les candidats et s&rsquo;assurer qu&rsquo;il s&rsquo;agit bien d&rsquo;originaux. Le programme de v&eacute;rification de la fiabilit&eacute; devrait &ecirc;tre revu sur une base r&eacute;guli&egrave;re.</p>  <p>Le programme de v&eacute;rification de la fiabilit&eacute; devrait s&rsquo;appliquer aux personnes suivantes :</p>
<ul>
<li>les personnes ayant un acc&egrave;s sans escorte aux sources de cat&eacute;gories 1, 2 et 3</li>
<li>les conducteurs de v&eacute;hicules et les personnes qui les accompagnent lors du transport des sources de cat&eacute;gorie 1</li>
<li>toute personne dont les t&acirc;ches assign&eacute;es comprennent l&rsquo;acc&egrave;s aux renseignements r&eacute;glement&eacute;s ou sensibles ou la manipulation des sources de cat&eacute;gorie 1 (y compris les agents de s&eacute;curit&eacute; sur le site)</li>
</ul>  <p>Le programme de v&eacute;rification de la fiabilit&eacute; permet de retracer les ant&eacute;c&eacute;dents d&rsquo;un individu afin d&rsquo;examiner sa r&eacute;putation pass&eacute;e et actuelle, ce qui permet d&rsquo;obtenir une assurance raisonnable quant &agrave; sa fiabilit&eacute; future. Certains indicateurs que le titulaire de permis pourrait prendre en consid&eacute;ration lors de la v&eacute;rification de la fiabilit&eacute; incluent ce qui suit :</p>
<ul>
<li>une condamnation pour crime grave au cours des cinq derni&egrave;res ann&eacute;es (meurtre, tentative de meurtre ou acte criminel, y compris la violence)</li>
<li>un comportement perturb&eacute; ou dangereux en raison de d&eacute;sordres psychologiques ou autres</li>
<li>une inconduite qui justifie une enqu&ecirc;te criminelle ou qui se traduit par une arrestation ou une condamnation</li>
<li>une indication de comportement trompeur ou d&eacute;linquant</li>
<li>une tentative ou une menace de destruction de la vie ou de la propri&eacute;t&eacute;</li>
<li>une utilisation, un abus ou une distribution ill&eacute;gale de drogues</li>
<li>des probl&egrave;mes de consommation d&rsquo;alcool</li>
<li>une incapacit&eacute; &agrave; suivre des directives de travail</li>
<li>une hostilit&eacute; ou agressivit&eacute; envers ses coll&egrave;gues ou l&rsquo;autorit&eacute;</li>
<li>une col&egrave;re non contr&ocirc;l&eacute;e</li>
<li>une violation des proc&eacute;dures de s&ucirc;ret&eacute; ou de s&eacute;curit&eacute;</li>
</ul>  <p>Veuillez prendre note que ces indicateurs ne sont pas exhaustifs et n&rsquo;ont pas pour but de constituer des facteurs de disqualification. Le titulaire de permis devrait prendre en compte les circonstances att&eacute;nuantes. Pour de plus amples renseignements, veuillez consulter l&rsquo;annexe B o&ugrave; l&rsquo;on retrouve un diagramme des &eacute;tapes &agrave; suivre pour &eacute;valuer le casier juridique d&rsquo;une personne.</p>  <p>Dans les cas o&ugrave; :</p>
<ul>
<li>il existe des lacunes dans la documentation ou si les r&eacute;sultats de la VNCJ affichent &laquo; dossier trouv&eacute; &raquo; ou &laquo; incomplet &raquo;, le titulaire de permis devrait en informer le demandeur et s&rsquo;assurer que l&rsquo;information est compl&egrave;te et exacte</li>
<li>il existe des lacunes dans l&rsquo;historique de l&rsquo;individu (r&eacute;sidence ou emploi), le titulaire de permis devrait communiquer avec le demandeur pour obtenir toute l&rsquo;information n&eacute;cessaire et le rencontrer pour clarifier toute pr&eacute;occupation</li>
<li>il n&rsquo;est pas possible d&rsquo;obtenir des renseignements sur les ant&eacute;c&eacute;dents qui couvrent les cinq derni&egrave;res ann&eacute;es ou si des renseignements hautement d&eacute;favorables sont mis &agrave; jour pendant le processus de v&eacute;rification de la fiabilit&eacute;, le titulaire de permis devrait aviser l&rsquo;individu en personne et lui donner l&rsquo;occasion de fournir des pr&eacute;cisions ou des explications</li>
<li>il existe des condamnations susceptibles de poursuite en justice, le titulaire de permis devrait r&eacute;aliser une entrevue de s&eacute;curit&eacute; :
<ul>
<li>les crit&egrave;res utilis&eacute;s pour d&eacute;cider si une entrevue de s&eacute;curit&eacute; est n&eacute;cessaire devraient inclure l&rsquo;&eacute;valuation du risque pour la s&eacute;curit&eacute; du site ou des sources radioactives &agrave; risque &eacute;lev&eacute;</li>
<li>la d&eacute;cision d&rsquo;accorder, de refuser ou de r&eacute;voquer un acc&egrave;s sans escorte aux mati&egrave;res nucl&eacute;aires revient au titulaire de permis; cette d&eacute;cision devrait s&rsquo;appuyer sur une politique de gestion qui comprend un processus d&eacute;cisionnel tenant compte du risque</li>
</ul></li>
<li>des renseignements de la VNCJ sont non disponibles ou incomplets ou s&rsquo;il existe une condamnation susceptible de poursuite en justice, les empreintes digitales devraient &ecirc;tre v&eacute;rifi&eacute;es par un corps policier comp&eacute;tent (qui a comp&eacute;tence l&agrave; o&ugrave; r&eacute;side la personne) ou par une tierce partie de confiance</li>
</ul>  <p>Des renseignements suppl&eacute;mentaires sur les pratiques de v&eacute;rification du personnel figurent dans la <a href="https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=16578"><em>Politique sur la s&eacute;curit&eacute; du gouvernement</em></a> du Secr&eacute;tariat du Conseil du Tr&eacute;sor du Canada [9].</p>
<h4>3.3.4 Protection des renseignements r&eacute;glement&eacute;s ou sensibles</h4>  <p>Le titulaire de permis doit fournir des mesures de protection pour contr&ocirc;ler l&rsquo;acc&egrave;s aux renseignements r&eacute;glement&eacute;s, conform&eacute;ment aux articles 21 &agrave; 23 du <a href="http://laws-lois.justice.gc.ca/fra/reglements/DORS-2000-202/page-1.html"><em>R&egrave;glement g&eacute;n&eacute;ral sur la s&ucirc;ret&eacute; et la r&eacute;glementation nucl&eacute;aires</em></a>, et pour pr&eacute;venir la perte, l&rsquo;utilisation ill&eacute;gale, la possession ill&eacute;gale ou l&rsquo;enl&egrave;vement ill&eacute;gal de ces renseignements r&eacute;glement&eacute;s. Cette information doit &ecirc;tre g&eacute;r&eacute;e sur la base du &laquo; besoin de savoir &raquo;.</p>  <h5>Orientation</h5>  <p>Les &laquo; renseignements r&eacute;glement&eacute;s &raquo; sont d&eacute;finis &agrave; l&rsquo;article 21 du <a href="http://laws-lois.justice.gc.ca/fra/reglements/DORS-2000-202/page-1.html"><em>R&egrave;glement g&eacute;n&eacute;ral sur la s&ucirc;ret&eacute; et la r&eacute;glementation nucl&eacute;aires</em></a> (voir le glossaire).</p>  <p>Les renseignements suivants sont consid&eacute;r&eacute;s comme des exemples de renseignements r&eacute;glement&eacute;s :</p>
<ul>
<li>le plan de la s&eacute;curit&eacute; de l&rsquo;installation, la correspondance relative &agrave; la s&eacute;curit&eacute;, les mesures d&rsquo;intervention, les plans d&rsquo;urgence et le plan de s&eacute;curit&eacute; du transport, le cas &eacute;ch&eacute;ant</li>
<li>l&rsquo;emplacement pr&eacute;cis et l&rsquo;inventaire des sources, les sch&eacute;mas de l&rsquo;installation et les syst&egrave;mes de s&eacute;curit&eacute;, y compris les essais de performance</li>
<li>l&rsquo;&eacute;valuation des menaces et des risques et l&rsquo;&eacute;valuation de la vuln&eacute;rabilit&eacute;</li>
</ul>  <p>Les renseignements r&eacute;glement&eacute;s et sensibles devraient &ecirc;tre :</p>
<ul>
<li>prot&eacute;g&eacute;s contre la divulgation non autoris&eacute;e et &ecirc;tre s&eacute;curis&eacute;s lorsqu&rsquo;ils sont laiss&eacute;s sans surveillance</li>
<li>divulgu&eacute;s seulement &agrave; des personnes qui ont un &laquo; besoin de savoir &raquo; pour r&eacute;aliser les t&acirc;ches qui leur sont assign&eacute;es</li>
<li>conserv&eacute;s de mani&egrave;re &agrave; pr&eacute;venir leur enl&egrave;vement ou leur vol</li>
</ul>  <p>Les documents de nature tr&egrave;s d&eacute;licate devraient &ecirc;tre conserv&eacute;s sur un support &eacute;lectronique (disquette, CD-ROM ou cl&eacute; USB) ou sur format papier, dans un lieu s&ucirc;r accessible seulement aux personnes ayant un &laquo; besoin de savoir &raquo;. Ces renseignements ne devraient pas &ecirc;tre conserv&eacute;s sur un r&eacute;seau ouvert ou partag&eacute; sans protection ad&eacute;quate.</p>  <p>Le titulaire de permis devrait proc&eacute;der comme suit &agrave; l&rsquo;&eacute;gard des renseignements r&eacute;glement&eacute;s ou sensibles :</p>
<ul>
<li>utiliser des p&eacute;riph&eacute;riques de stockage &laquo; portatifs &raquo; (p. ex., ordinateur, disque dur externe, cl&eacute; USB) qui sont amovibles et s&eacute;curisables</li>
<li>utiliser des p&eacute;riph&eacute;riques de stockage &laquo; prot&eacute;g&eacute;s &raquo; par des mots de passe ou le cryptage et qui sont uniquement accessibles aux utilisateurs autoris&eacute;s &agrave; l&rsquo;aide de protocoles de cybers&eacute;curit&eacute; approuv&eacute;s</li>
<li>prot&eacute;ger la confidentialit&eacute;, la disponibilit&eacute; et l&rsquo;int&eacute;grit&eacute; des renseignements ou des documents contenant des renseignements r&eacute;glement&eacute;s</li>
</ul>  <p>Pour le transport et la transmission des renseignements r&eacute;glement&eacute;s ou sensibles :</p>
<ul>
<li>chaque page du document devrait porter dans le coin sup&eacute;rieur droit la mention de s&eacute;curit&eacute; en gras et en lettres majuscules (c.-&agrave;-d. <strong>RENSEIGNEMENTS R&Eacute;GLEMENT&Eacute;S</strong>)</li>
<li>le document et la correspondance connexe peuvent &ecirc;tre transmis &agrave; la CCSN par courrier, messagerie ou &laquo; t&eacute;l&eacute;copie s&eacute;curis&eacute;e &raquo;</li>
<li>la transmission &eacute;lectronique (p. ex., courriel) de ces renseignements est acceptable uniquement s&rsquo;ils sont crypt&eacute;s &agrave; l&rsquo;aide de technologies appropri&eacute;es</li>
</ul>  <p>Les renseignements r&eacute;glement&eacute;s et les documents contenant des informations sensibles qui sont obsol&egrave;tes ou ne sont plus pertinents devraient &ecirc;tre d&eacute;chiquet&eacute;s ou d&eacute;truits conform&eacute;ment &agrave; leur cote de s&eacute;curit&eacute;.</p>
<h4>3.3.5 Contr&ocirc;le de l&rsquo;inventaire</h4>  <p>Le titulaire de permis doit effectuer un contr&ocirc;le r&eacute;gulier de l&rsquo;inventaire pour v&eacute;rifier que les sources sont en s&eacute;curit&eacute; et n&rsquo;ont pas &eacute;t&eacute; alt&eacute;r&eacute;es, enlev&eacute;es sans autorisation, ni fait l&rsquo;objet d&rsquo;un acc&egrave;s ill&eacute;gal. Ces contr&ocirc;les d&rsquo;inventaire doivent &ecirc;tre conformes &agrave; l&rsquo;alin&eacute;a 36(1)a) du <a href="http://laws-lois.justice.gc.ca/fra/reglements/DORS-2000-207/"><em>R&egrave;glement sur les substances nucl&eacute;aires et les appareils &agrave; rayonnement</em></a>.</p>  <h5>Orientation</h5>  <p>Le titulaire de permis devrait &eacute;tablir et tenir &agrave; jour une liste des sources scell&eacute;es sous sa responsabilit&eacute;. La v&eacute;rification de l&rsquo;inventaire peut &ecirc;tre int&eacute;gr&eacute;e aux mesures de d&eacute;tection. Le contr&ocirc;le r&eacute;gulier de l&rsquo;inventaire devrait comprendre des mesures visant &agrave; s&rsquo;assurer que les sources sont pr&eacute;sentes et n&rsquo;ont pas &eacute;t&eacute; alt&eacute;r&eacute;es. Ces mesures pourraient inclure des contr&ocirc;les physiques permettant de s&rsquo;assurer que la source est en place, une v&eacute;rification pendant le d&eacute;placement sur le site ou le transfert, l&rsquo;observation &agrave; distance par t&eacute;l&eacute;vision en circuit ferm&eacute;, ou encore la v&eacute;rification des sceaux ou autres dispositifs d&rsquo;inviolabilit&eacute; appos&eacute;s sur les conteneurs et installations de stockage. Il serait bon d&rsquo;instaurer un processus afin d&rsquo;assurer une v&eacute;rification rigoureuse de l&rsquo;inventaire.</p>
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
<h2 id="sec4">4. Mesures de s&eacute;curit&eacute; pendant le transport des sources scell&eacute;es</h2>
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
<h3 id="sec4-1">4.1	S&eacute;curit&eacute; des v&eacute;hicules</h3>  <p>Les v&eacute;hicules transportant des sources de cat&eacute;gorie 1 doivent &ecirc;tre &eacute;quip&eacute;s :</p>
<ul>
<li>d&rsquo;un dispositif de suivi du v&eacute;hicule qui en permet la r&eacute;cup&eacute;ration en cas de vol</li>
<li>d&rsquo;un avertisseur d&rsquo;urgence ou d&rsquo;un appareil &eacute;quivalent qui est surveill&eacute; en continu; le titulaire de permis doit donner des instructions &agrave; la station de surveillance des alarmes pour qu&rsquo;elle alerte la force d&rsquo;intervention appropri&eacute;e (p. ex., un corps policier local)</li>
</ul>  <p>Les v&eacute;hicules d&rsquo;un titulaire de permis transportant des sources de cat&eacute;gories 1, 2 et 3 doivent &ecirc;tre pourvus de dispositifs antivol, lesquels doivent consister en ce qui suit :</p>
<ul>
<li>un dispositif permettant de d&eacute;sactiver le v&eacute;hicule (p. ex., d&eacute;sactiver le d&eacute;marreur pour emp&ecirc;cher le d&eacute;marrage du v&eacute;hicule sans la cl&eacute; ad&eacute;quate ou un dispositif de d&eacute;marrage similaire)</li>
<li>si le v&eacute;hicule est laiss&eacute; sans surveillance, un dispositif qui d&eacute;tecte imm&eacute;diatement une entr&eacute;e non autoris&eacute;e ou une attaque contre le v&eacute;hicule et qui d&eacute;clenche une alarme sonore ou visuelle. Si le conducteur du v&eacute;hicule n&rsquo;est pas &agrave; port&eacute;e auditive ou visuelle de l&rsquo;alarme, il doit pouvoir surveiller le dispositif d&rsquo;alarme &agrave; distance.</li>
</ul>  <p>Le conducteur doit pouvoir activer ces dispositifs antivol automatiquement ou manuellement en tout temps lorsque le v&eacute;hicule contenant le colis est laiss&eacute; sans surveillance.</p>  <p>Pendant le transport, le colis doit se trouver dans un conteneur s&ucirc;r dans le v&eacute;hicule, ou dans un endroit qui est prot&eacute;g&eacute; par des mesures de s&eacute;curit&eacute; physique et qui est surveill&eacute; en continu quand le colis est laiss&eacute; sans surveillance.</p>  <p>Pour les sources de cat&eacute;gories 4 et 5, le titulaire de permis doit mettre en &oelig;uvre des pratiques de gestion prudente en utilisant un contr&ocirc;le de l&rsquo;acc&egrave;s efficace et assurer en tout temps la s&eacute;curit&eacute; des mati&egrave;res et des appareils radioactifs.</p>  <h5>Orientation</h5>  <p>Si le v&eacute;hicule d&rsquo;un titulaire de permis est laiss&eacute; sans surveillance pendant le transport des sources de cat&eacute;gories 1, 2 et 3, celui-ci devrait disposer d&rsquo;un moyen pour d&eacute;tecter imm&eacute;diatement et &eacute;valuer un acte ou une tentative de vol ou de d&eacute;tournement de sources scell&eacute;es, et intervenir. Un syst&egrave;me d&rsquo;alarme est un moyen acceptable. Parmi les dispositifs acceptables de d&eacute;sactivation de v&eacute;hicule qui fournissent un retardement efficace, mentionnons les serrures d&rsquo;attelage de remorque, les serrures de roues (&laquo; sabots &raquo;) ou une m&eacute;thode pour d&eacute;sactiver le moteur.</p>  <p>Le titulaire de permis devrait pr&eacute;voir un moyen secondaire pour prot&eacute;ger le v&eacute;hicule, y compris un m&eacute;canisme de s&eacute;curisation offrant une r&eacute;sistance comparable aux attaques (p. ex., cha&icirc;nes, serrures, sceaux).</p>
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
<h3 id="sec4-2">4.2	Mesures de s&eacute;curit&eacute; pour les sources scell&eacute;es pendant leur transport</h3>  <p>Comme le titulaire de permis (l&rsquo;exp&eacute;diteur) est responsable de la s&eacute;curit&eacute; des sources scell&eacute;es pendant leur transport, il doit s&rsquo;assurer que le transporteur autoris&eacute; est capable d&rsquo;en assurer la protection par des mesures de s&eacute;curit&eacute; physique pendant leur transport ou leur stockage en transit.</p>  <p>Comme le stipule le <a href="http://laws-lois.justice.gc.ca/fra/reglements/DORS-2015-145/index.html"><em>R&egrave;glement sur l&rsquo;emballage et le transport des substances nucl&eacute;aires (2015)</em></a>, le titulaire de permis doit fournir au transporteur les documents d&rsquo;exp&eacute;dition appropri&eacute;s au sujet de la source scell&eacute;e. Les documents d&rsquo;exp&eacute;dition doivent comporter une d&eacute;claration des mesures &agrave; prendre, s&rsquo;il y a lieu, par le transporteur ainsi qu&rsquo;une description des mesures de s&eacute;curit&eacute; pour les sources scell&eacute;es. Lorsque l&rsquo;exp&eacute;dition comporte plus d&rsquo;une cat&eacute;gorie de sources, on doit appliquer les mesures pour la cat&eacute;gorie la plus restrictive.</p>  <p>Tous les colis contenant des sources scell&eacute;es de cat&eacute;gories 1, 2 ou 3 doivent &ecirc;tre prot&eacute;g&eacute;s contre l&rsquo;acc&egrave;s, le vol ou l&rsquo;enl&egrave;vement non autoris&eacute; pendant leur transport et leur stockage temporaire en transit. Il faut indiquer au destinataire quand, o&ugrave; et par qui ces colis seront d&eacute;plac&eacute;s, y compris les num&eacute;ros de suivi et les heures et dates d&rsquo;arriv&eacute;e pr&eacute;vues. Le titulaire de permis doit, &agrave; titre d&rsquo;exp&eacute;diteur, traiter avec un transporteur r&eacute;put&eacute; capable d&rsquo;assurer le transport s&ucirc;r des marchandises dangereuses, et il doit prendre les pr&eacute;cautions suivantes :</p>
<ul className="list-bullet-none">
<li>1) Le colis contenant la source scell&eacute;e doit &ecirc;tre entrepos&eacute; dans un conteneur s&ucirc;r. Les colis de plus de 500 kg sont jug&eacute;s s&ucirc;rs, car leur poids les rend difficiles &agrave; manipuler. Le conteneur s&ucirc;r ne remplace aucun autre emballage ou &eacute;tiquetage requis par les r&egrave;glements existants. Un conteneur s&ucirc;r doit r&eacute;pondre aux crit&egrave;res suivants :
<ul className="list-bullet-none">
<li>a) il doit &ecirc;tre fait d&rsquo;acier ou de tout autre mat&eacute;riau qui est r&eacute;sistant &agrave; une attaque physique perp&eacute;tr&eacute;e &agrave; l&rsquo;aide d&rsquo;outils portatifs</li>
<li>b) il doit &ecirc;tre pourvu d&rsquo;une cl&eacute;, d&rsquo;un cadenas &agrave; combinaison ou d&rsquo;un dispositif de verrouillage similaire qui est r&eacute;sistant &agrave; une attaque perp&eacute;tr&eacute;e &agrave; l&rsquo;aide d&rsquo;outils portatifs</li>
<li>c) s&rsquo;il est transport&eacute; par un moyen de transport ouvert (p. ex., arri&egrave;re ouvert d&rsquo;une camionnette d&rsquo;une demi-tonne, camion &agrave; plate-forme), il doit &ecirc;tre solidement fix&eacute; au v&eacute;hicule pour emp&ecirc;cher son enl&egrave;vement non autoris&eacute;</li>
<li>d) s&rsquo;il contient une source scell&eacute;e avec un niveau d&rsquo;activit&eacute; inf&eacute;rieur &agrave; celui d&rsquo;une source de cat&eacute;gorie III (voir le tableau 1), il peut &ecirc;tre entrepos&eacute; dans le coffre verrouill&eacute; ou une autre zone de cargaison du v&eacute;hicule pendant le stockage et le transport</li>
</ul></li>
<li>2) Si le conducteur arr&ecirc;te en cours de route, le colis doit &ecirc;tre entrepos&eacute; dans un conteneur s&ucirc;r dans le v&eacute;hicule (comme il est d&eacute;crit au point 1 ci-dessus), ou dans un endroit prot&eacute;g&eacute; par des mesures de s&eacute;curit&eacute; physique (comme il est d&eacute;crit &agrave; la section 3).</li>
<li>3) Le conducteur du v&eacute;hicule doit avoir en tout temps sur sa personne un moyen de communication mobile fiable (p. ex., un t&eacute;l&eacute;phone cellulaire) et une liste des personnes &agrave; contacter, avec leurs num&eacute;ros de t&eacute;l&eacute;phone, en cas d&rsquo;urgence.</li>
</ul>  <p>D&rsquo;autres m&eacute;thodes qui offrent un niveau comparable de s&eacute;curit&eacute; physique &agrave; celles qui sont d&eacute;crites ci-dessus peuvent &ecirc;tre soumises &agrave; la CCSN pour examen, ou indiqu&eacute;es dans une demande de permis ou de modification de permis.</p>  <p>Pour le transport des sources et des dispositifs de cat&eacute;gorie 1 ou 2, le titulaire de permis doit s&rsquo;assurer que le transporteur :</p>
<ul>
<li>utilise un syst&egrave;me de suivi des colis</li>
<li>applique des m&eacute;thodes pour v&eacute;rifier la fiabilit&eacute; des conducteurs</li>
<li>&eacute;tablit une surveillance ou un contr&ocirc;le constant pendant le transport</li>
<li>a la capacit&eacute; de communiquer imm&eacute;diatement pour demander une intervention ou de l&rsquo;aide</li>
</ul>  <p>Pour le transport des sources de cat&eacute;gorie 3, le titulaire de permis doit s&rsquo;assurer que le transporteur :</p>
<ul>
<li>applique des m&eacute;thodes pour v&eacute;rifier la fiabilit&eacute; des conducteurs</li>
<li>maintient une surveillance ou un contr&ocirc;le constant pendant le transport</li>
<li>a la capacit&eacute; de communiquer imm&eacute;diatement pour demander une intervention ou de l&rsquo;aide</li>
</ul>  <p>Pour le transport des sources de cat&eacute;gorie 4 et 5, le titulaire de permis doit mettre en &oelig;uvre des pratiques de gestion prudente, notamment un contr&ocirc;le de l&rsquo;acc&egrave;s efficace, et veiller &agrave; la s&eacute;curit&eacute; des mati&egrave;res et des appareils radioactifs en tout temps.</p>  <h4>Orientation</h4>  <p>Une formation de sensibilisation &agrave; la s&eacute;curit&eacute; devrait &ecirc;tre offerte &agrave; toutes les personnes qui participent &agrave; la manutention ou au transport des sources scell&eacute;es, y compris des formations de recyclage, au besoin.</p>  <p>Avant de transporter des sources de cat&eacute;gories 1 et 2, tous les employ&eacute;s du transporteur qui sont charg&eacute;s de transporter les sources scell&eacute;es devraient avoir fait l&rsquo;objet d&rsquo;une enqu&ecirc;te de s&eacute;curit&eacute; et de fiabilit&eacute;.</p>  <p>La sensibilisation &agrave; la s&eacute;curit&eacute; devrait inclure les &eacute;l&eacute;ments &eacute;num&eacute;r&eacute;s pour le plan de s&eacute;curit&eacute; du transport (voir la section 4.3) et des renseignements pr&eacute;cis sur les points suivants :</p>
<ul>
<li>les menaces connues pour le moyen de transport</li>
<li>les pr&eacute;occupations de s&eacute;curit&eacute; et les mesures &agrave; prendre en cas d&rsquo;incident de s&eacute;curit&eacute; pendant le transport</li>
</ul>  <p>Les dispositifs de s&eacute;curit&eacute; des v&eacute;hicules de transport devraient :</p>
<ul>
<li>&ecirc;tre inspect&eacute;s r&eacute;guli&egrave;rement pour d&eacute;celer tout signe d&rsquo;alt&eacute;ration ou de d&eacute;t&eacute;rioration qui peut nuire &agrave; leur fonction d&eacute;sign&eacute;e</li>
<li>&ecirc;tre test&eacute;s au moins tous les six mois</li>
<li>&ecirc;tre inspect&eacute;s par une personne autoris&eacute;e pour assurer l&rsquo;int&eacute;grit&eacute; des m&eacute;canismes de s&eacute;curit&eacute; sur les v&eacute;hicules utilis&eacute;s pour le transport des sources de cat&eacute;gorie 1 ou 2</li>
</ul>  <p>Pour les sources en utilisation ou en transit, ces mesures peuvent consister &agrave; utiliser un conteneur s&ucirc;r ou &agrave; placer le conteneur dans une zone de stockage s&eacute;curis&eacute;e (p. ex., un conteneur encha&icirc;n&eacute; ou boulonn&eacute; au v&eacute;hicule). Pour les sources mobiles en utilisation, la surveillance visuelle continuelle peut remplacer une ou deux barri&egrave;res physiques. Si une source scell&eacute;e est stock&eacute;e temporairement en transit (p. ex., dans un entrep&ocirc;t), des mesures de s&eacute;curit&eacute; &eacute;quivalentes devraient &ecirc;tre prises et &ecirc;tre compatibles avec les mesures de s&eacute;curit&eacute; indiqu&eacute;es ci-dessus pour le stockage des sources de cat&eacute;gories 1 et 2.</p>  <p>Si les colis sont transport&eacute;s sur un moyen de transport ouvert, ils devraient &ecirc;tre fix&eacute;s solidement au v&eacute;hicule pour en assurer la s&eacute;curit&eacute;.</p>
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
<h3 id="sec4-3">4.3	Plan de s&eacute;curit&eacute; du transport</h3>  <p>Outre les exigences de la section 4.2.1, les exigences suivantes s&rsquo;appliquent aux sources de cat&eacute;gories 1 et 2 :</p>
<ul>
<li>Pour le transport des sources de cat&eacute;gorie 1 :
<ul>
<li>le titulaire de permis doit mettre en &oelig;uvre des mesures de s&eacute;curit&eacute; renforc&eacute;es et soumettre un plan pr&eacute;liminaire de s&eacute;curit&eacute; du transport &agrave; la CCSN au moins 60 jours avant la date pr&eacute;vue de l&rsquo;exp&eacute;dition, dans lequel seront fournis tous les renseignements disponibles, pour approbation par la Commission ou un fonctionnaire d&eacute;sign&eacute; autoris&eacute; par la Commission</li>
<li>le plan pr&eacute;liminaire de s&eacute;curit&eacute; du transport doit &ecirc;tre examin&eacute; annuellement et mis &agrave; jour au besoin</li>
<li>un plan final de s&eacute;curit&eacute; du transport, comprenant les renseignements suppl&eacute;mentaires propres &agrave; chaque exp&eacute;dition, doit &ecirc;tre soumis &agrave; la CCSN au moins 48 heures avant l&rsquo;exp&eacute;dition</li>
</ul></li>
<li>Pour le transport des sources de cat&eacute;gorie 2, le titulaire de permis doit mettre en &oelig;uvre des mesures de s&eacute;curit&eacute; renforc&eacute;es et &eacute;laborer un plan g&eacute;n&eacute;rique de s&eacute;curit&eacute; du transport qui doit &ecirc;tre appliqu&eacute; et examin&eacute; sur une base r&eacute;guli&egrave;re. Le plan de s&eacute;curit&eacute; du transport devrait &ecirc;tre souple pour r&eacute;pondre &agrave; l&rsquo;&eacute;volution des niveaux de menace, des protocoles d&rsquo;intervention et de la protection des informations sensibles.</li>
</ul>  <p>Pour les sources de cat&eacute;gorie 1, le plan de s&eacute;curit&eacute; du transport doit inclure les renseignements suivants :</p>
<ol>
<li>le nom, la quantit&eacute; et les caract&eacute;ristiques chimiques et physiques de la mati&egrave;re radioactive</li>
<li>le r&ocirc;le et les responsabilit&eacute;s du personnel du titulaire de permis, des exp&eacute;diteurs et des transporteurs</li>
<li>les modes de transport</li>
<li>les mesures de s&eacute;curit&eacute; propos&eacute;es</li>
<li>les mesures pour surveiller l&rsquo;emplacement de l&rsquo;exp&eacute;dition</li>
<li>les dispositions prises pour assurer la s&eacute;curit&eacute; des renseignements</li>
<li>les arrangements pris pour assurer les communications entre le titulaire de permis, le transporteur et le destinataire</li>
<li>les arrangements pris pour assurer les communications avec les corps policiers comp&eacute;tents le long de l&rsquo;itin&eacute;raire</li>
<li>l&rsquo;itin&eacute;raire pr&eacute;vu</li>
<li>les itin&eacute;raires de rechange en cas d&rsquo;urgence</li>
</ol>  <h4>Orientation</h4>  <p>Pour les sources de cat&eacute;gorie 1, le plan de s&eacute;curit&eacute; du transport devrait inclure les informations g&eacute;n&eacute;rales suivantes :</p>
<ol className="list-lower-alpha">
<li>les coordonn&eacute;es du titulaire de permis ou du demandeur :
<ul>
<li>inclure le nom l&eacute;gal complet et l&rsquo;adresse d&rsquo;affaires du titulaire de permis ou du demandeur qui soumet le plan; et</li>
<li>inclure toutes les coordonn&eacute;es pertinentes comme le num&eacute;ro de t&eacute;l&eacute;phone, le num&eacute;ro de t&eacute;l&eacute;phone cellulaire et l&rsquo;adresse de courriel.</li>
</ul></li>
<li>le nom, la quantit&eacute; et les caract&eacute;ristiques chimiques et physiques de chaque source scell&eacute;e :
<ul>
<li>inclure une description de la source radioactive scell&eacute;e et de l&rsquo;appareil</li>
<li>inclure la cat&eacute;gorie et la quantit&eacute; des sources radioactives scell&eacute;es transport&eacute;es</li>
</ul></li>
<li>le r&ocirc;le et les responsabilit&eacute;s du personnel du titulaire de permis, des exp&eacute;diteurs et des transporteurs :
<ul>
<li>indiquer qui est responsable de la s&eacute;curit&eacute; et du plan de s&eacute;curit&eacute; du transport (nom et titre)</li>
<li>s&rsquo;assurer que l&rsquo;information relative &agrave; la s&eacute;curit&eacute; est communiqu&eacute;e aux exp&eacute;diteurs et aux transporteurs des sources scell&eacute;es. Si le transport est confi&eacute; &agrave; un sous-traitant, le titulaire de permis devrait s&rsquo;assurer que les ententes contractuelles pr&eacute;voient l&rsquo;&eacute;laboration du plan de s&eacute;curit&eacute;</li>
</ul></li>
<li>les modes de transport :
<ul>
<li>d&eacute;crire tous les modes de transport utilis&eacute;s pour transporter les sources scell&eacute;es entre leur collecte au lieu d&rsquo;origine et leur livraison &agrave; la destination pr&eacute;vue</li>
<li>inclure la date, l&rsquo;heure et le lieu de tous les transferts pr&eacute;vus, ainsi que les coordonn&eacute;es (nom, titre du poste et num&eacute;ro de t&eacute;l&eacute;phone) de toute personne charg&eacute;e d&rsquo;assurer l&rsquo;arriv&eacute;e &agrave; bon port des sources scell&eacute;es et de v&eacute;rifier l&rsquo;int&eacute;grit&eacute; des exp&eacute;ditions</li>
</ul></li>
<li>les mesures de s&eacute;curit&eacute; propos&eacute;es :
<ul>
<li>d&eacute;crire les mesures utilis&eacute;es pour surveiller le mouvement des colis ou les moyens de transport contenant des sources radioactives scell&eacute;es (p. ex., syst&egrave;me GPS, syst&egrave;me de suivi et de surveillance des v&eacute;hicules)</li>
<li>d&eacute;crire les mesures pr&eacute;vues pour l&rsquo;escorte, les fouilles de s&eacute;curit&eacute; et les proc&eacute;dures d&rsquo;intervention des autorit&eacute;s responsables en cas de panne ou de d&eacute;faillance qui retarderait ou emp&ecirc;cherait l&rsquo;arriv&eacute;e de l&rsquo;exp&eacute;dition &agrave; destination &agrave; l&rsquo;heure et &agrave; la date pr&eacute;vues</li>
<li>d&eacute;crire les proc&eacute;dures &agrave; suivre en cas d&rsquo;arr&ecirc;t pr&eacute;vu ou de retard impr&eacute;vu durant le transport</li>
</ul></li>
<li>les mesures pour surveiller l&rsquo;emplacement de l&rsquo;exp&eacute;dition</li>
<li>les dispositions prises pour assurer la s&eacute;curit&eacute; des renseignements
<ul>
<li>d&eacute;crire comment les renseignements seront prot&eacute;g&eacute;s</li>
<li>d&eacute;crire comment ces renseignements seront communiqu&eacute;s aux personnes qui en ont besoin pour faire leur travail</li>
</ul></li>
<li>les arrangements de communications entre le titulaire de permis, le transporteur et le destinataire :
<ul>
<li>d&eacute;crire les arrangements de communication entre le titulaire de permis, l&rsquo;exp&eacute;diteur, le conducteur du v&eacute;hicule transportant la source radioactive scell&eacute;e et la force d&rsquo;intervention le long de l&rsquo;itin&eacute;raire</li>
<li>d&eacute;crire comment le titulaire de permis pr&eacute;voit s&rsquo;assurer que la couverture des communications est ad&eacute;quate sur tout le parcours</li>
<li>indiquer les mesures &agrave; prendre en cas de perte des communications avec un v&eacute;hicule transportant une source scell&eacute;e radioactive</li>
</ul></li>
<li>les arrangements de communication convenus avec les services de police le long de l&rsquo;itin&eacute;raire de transport :
<ul>
<li>le titulaire de permis devrait s&rsquo;assurer que tous les services de police responsables le long du parcours de transport sont avis&eacute;s avant l&rsquo;exp&eacute;dition</li>
<li>l&rsquo;exp&eacute;diteur devrait indiquer &agrave; l&rsquo;avance au destinataire l&rsquo;heure de d&eacute;part de l&rsquo;exp&eacute;dition, le mode de transport, l&rsquo;heure et la date pr&eacute;vues de livraison et le retard acceptable</li>
<li>le destinataire devrait aviser l&rsquo;exp&eacute;diteur de la r&eacute;ception ou la non-r&eacute;ception de l&rsquo;exp&eacute;dition dans les d&eacute;lais de livraison pr&eacute;vus</li>
</ul></li>
<li>l&rsquo;itin&eacute;raire pr&eacute;vu
<ul>
<li>si l&rsquo;itin&eacute;raire propos&eacute; traverse une zone urbaine, le titulaire de permis ou le demandeur devrait d&eacute;crire l&rsquo;itin&eacute;raire pr&eacute;cis qui sera suivi et la fa&ccedil;on dont le transport sera planifi&eacute; pour &eacute;viter les heures de pointe</li>
<li>inclure des itin&eacute;raires de rechange en cas d&rsquo;urgence</li>
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
<div id="partB"></div>
<h2 id="partB">Partie B &ndash; Mati&egrave;res nucl&eacute;aires</h2>
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
<h2 id="sec5">5. Contexte</h2>  <p>Les mati&egrave;res nucl&eacute;aires sont r&eacute;glement&eacute;es en vertu de la la <a href="http://laws-lois.justice.gc.ca/fra/lois/N-28.3/"><em>Loi sur la s&ucirc;ret&eacute; et la r&eacute;glementation nucl&eacute;aires</em></a> (LSRN) et de ses r&egrave;glements d&rsquo;application, notamment le <a href="http://laws-lois.justice.gc.ca/fra/reglements/DORS-2000-202/"><em>R&egrave;glement g&eacute;n&eacute;ral sur la s&ucirc;ret&eacute; et la r&eacute;glementation nucl&eacute;aires</em></a>, le <a href="http://laws-lois.justice.gc.ca/fra/reglements/DORS-2000-205/"><em>R&egrave;glement sur les installations nucl&eacute;aires et l&rsquo;&eacute;quipement r&eacute;glement&eacute; de cat&eacute;gorie II</em></a>, le <a href="http://laws.justice.gc.ca/fra/reglements/DORS-2000-207/page-1.html"><em>R&egrave;glement sur les substances nucl&eacute;aires et les appareils &agrave; rayonnement</em></a> et le <a href="http://laws-lois.justice.gc.ca/fra/reglements/DORS-2000-203/"><em>R&egrave;glement sur la radioprotection</em></a>.</p>  <p>D&rsquo;autres r&egrave;glements traitent du transport des mati&egrave;res nucl&eacute;aires (p. ex., l&rsquo;emballage, la documentation et les marquages de s&eacute;curit&eacute;), notamment :</p>
<ul>
<li>Commission canadienne de s&ucirc;ret&eacute; nucl&eacute;aire (CCSN), <a href="http://laws-lois.justice.gc.ca/fra/reglements/DORS-2015-145/index.html"><em>R&egrave;glement sur l&rsquo;emballage et le transport des substances nucl&eacute;aires (2015)</em></a></li>
<li>Transports Canada, <a href="http://laws-lois.justice.gc.ca/fra/reglements/DORS-2001-286/page-1.html"><em>R&egrave;glement sur le transport des marchandises dangereuses</em></a></li>
</ul>  <p>Ce document utilise une approche graduelle concernant la s&eacute;curit&eacute; des mati&egrave;res nucl&eacute;aires. Il y a trois cat&eacute;gories de mati&egrave;res nucl&eacute;aires : les cat&eacute;gories I, II et III. L&rsquo;orientation pr&eacute;sent&eacute;e dans cette partie du document correspond au degr&eacute; de risque que repr&eacute;sentent les diff&eacute;rentes cat&eacute;gories de mati&egrave;res nucl&eacute;aires.</p>
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
<h3 id="sec5-1">5.1	Champ d&rsquo;application</h3>  <p>La partie B s&rsquo;applique aux mati&egrave;res nucl&eacute;aires de cat&eacute;gories I, II et III d&eacute;finies &agrave; l&rsquo;annexe E (qui est tir&eacute;e du <a href="http://laws.justice.gc.ca/eng/regulations/sor-2000-209/index.html"><em>R&egrave;glement sur la s&eacute;curit&eacute; nucl&eacute;aire</em></a> et ses annexes).</p>
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
<h2 id="sec6">6. Mesures de s&eacute;curit&eacute;</h2>  <p>Cette section fournit de l&rsquo;orientation sur les renseignements relatifs &agrave; la s&eacute;curit&eacute; qui devraient habituellement figurer dans une demande de permis concernant des mati&egrave;res nucl&eacute;aires de cat&eacute;gorie I ou II &ndash; autres qu&rsquo;un permis de transport &ndash; ou dans une installation nucl&eacute;aire comportant un r&eacute;acteur nucl&eacute;aire pouvant produire plus de 10 MW d&rsquo;&eacute;nergie thermique en exploitation normale.</p>  <p>Les demandeurs peuvent consolider ces renseignements de s&eacute;curit&eacute; dans la description du programme de s&eacute;curit&eacute;. La pr&eacute;sence d&rsquo;un tel document dans la demande de permis, qui est conforme aux recommandations de l&rsquo;annexe D et qui utilise les rubriques des sections suivantes, aidera la CCSN &agrave; examiner et &agrave; traiter la demande.</p>  <p>Dans la description du programme de s&eacute;curit&eacute;, les demandeurs devraient, autant que possible, identifier les principales personnes concern&eacute;es, y compris leur poste, et d&eacute;crire leurs r&ocirc;les, responsabilit&eacute;s, pouvoirs et obligations de rendre compte.</p>  <p>Les sections 6.1 &agrave; 6.3 pr&eacute;sentent en d&eacute;tail les renseignements qui devraient figurer dans la description du programme de s&eacute;curit&eacute;.</p>
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
<h3 id="sec6-1">6.1	Renseignements g&eacute;n&eacute;raux sur la description du programme de s&eacute;curit&eacute;</h3>  <h4>6.1.1 Renseignements administratifs</h4>  <p>La description du programme de s&eacute;curit&eacute; devrait contenir ce qui suit :</p>
<ul>
<li>le nom officiel et l&rsquo;adresse d&rsquo;affaires, au complet, du demandeur</li>
<li>les noms et pr&eacute;noms officiels et l&rsquo;adresse, au complet, de trois personnes habilit&eacute;es &agrave; agir au nom du titulaire de permis en cas d&rsquo;urgence</li>
<li>les num&eacute;ros de t&eacute;l&eacute;phone et de t&eacute;l&eacute;copieur, ou le courriel, permettant de communiquer avec le demandeur du permis ou avec les personnes habilit&eacute;es &agrave; agir en son nom en cas d&rsquo;urgence</li>
<li>une description de la demande de permis vis&eacute;e par les renseignements de s&eacute;curit&eacute;</li>
</ul>  <h4>6.1.2 Emplacement du site ou de l&rsquo;installation et caract&eacute;ristiques pertinentes</h4>  <p>Conform&eacute;ment &agrave; l&rsquo;article 16 du <a href="http://laws.justice.gc.ca/eng/regulations/sor-2000-209/index.html"><em>R&egrave;glement sur la s&eacute;curit&eacute; nucl&eacute;aire</em></a> (RSN), le plan des lieux, mentionn&eacute; &agrave; l&rsquo;alin&eacute;a 3b) du RSN, doit indiquer l&rsquo;emplacement des &eacute;l&eacute;ments suivants :</p>
<ul>
<li>le p&eacute;rim&egrave;tre de l&rsquo;installation nucl&eacute;aire propos&eacute;e conform&eacute;ment &agrave; l&rsquo;alin&eacute;a 2b) du RSN</li>
<li>la barri&egrave;re propos&eacute;e entourant chaque zone prot&eacute;g&eacute;e propos&eacute;e</li>
<li>les zones prot&eacute;g&eacute;es propos&eacute;es</li>
<li>les zones libres propos&eacute;es, conformes aux exigences de l&rsquo;article 10 du RSN</li>
<li>la structure ou la barri&egrave;re propos&eacute;e entourant chaque zone int&eacute;rieure</li>
<li>les zones int&eacute;rieures propos&eacute;es</li>
<li>les zones vitales propos&eacute;es</li>
</ul>  <h5>Orientation</h5>  <p>La description du programme de s&eacute;curit&eacute; devrait comprendre l&rsquo;emplacement exact du site en termes de coordonn&eacute;es (longitude et latitude) et un plan &agrave; l&rsquo;&eacute;chelle indiquant ses caract&eacute;ristiques et la topographie environnante. Les d&eacute;tails topographiques, y compris toutes les voies d&rsquo;acc&egrave;s par route, rail, eau et air, l&rsquo;emplacement des collectivit&eacute;s les plus proches et les caract&eacute;ristiques naturelles de la zone devraient &ecirc;tre inclus. Fournir au besoin des descriptions &eacute;crites afin d&rsquo;expliquer les illustrations.</p>  <p>La description du programme de s&eacute;curit&eacute; devrait &eacute;galement indiquer, le cas &eacute;ch&eacute;ant, les renseignements suppl&eacute;mentaires suivants :</p>
<ul>
<li>l&rsquo;emplacement de tout poste de s&eacute;curit&eacute; propos&eacute;, le cas &eacute;ch&eacute;ant</li>
<li>toute route propos&eacute;e qui ferait l&rsquo;objet de patrouilles par les services de s&eacute;curit&eacute; mobiles</li>
<li>l&rsquo;emplacement du local de surveillance</li>
<li>l&rsquo;emplacement de tout local de surveillance secondaire situ&eacute; &agrave; l&rsquo;ext&eacute;rieur de la zone int&eacute;rieure</li>
<li>toute autre caract&eacute;ristique pertinente pour le maintien de la s&eacute;curit&eacute; nucl&eacute;aire</li>
</ul>  <h4>6.1.3 Politique de s&eacute;curit&eacute; interne du demandeur</h4>  <p>La description du programme de s&eacute;curit&eacute; devrait inclure une description de la politique de s&eacute;curit&eacute; interne du demandeur en vigueur ou propos&eacute;e.</p>
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
<h3 id="sec6-2">6.2	Mesures de s&eacute;curit&eacute; techniques</h3>  <p>Les mesures de s&eacute;curit&eacute; techniques pour les mati&egrave;res ou les installations nucl&eacute;aires devraient comprendre des mesures visant &agrave; :</p>
<ul>
<li>emp&ecirc;cher le personnel non autoris&eacute; d&rsquo;acc&eacute;der aux mati&egrave;res nucl&eacute;aires</li>
<li>assurer la protection contre un acte ou une tentative d&rsquo;enl&egrave;vement non autoris&eacute;</li>
<li>assurer la protection contre un acte ou une tentative de sabotage</li>
</ul>  <p>Les mesures de s&eacute;curit&eacute; techniques doivent &eacute;galement inclure du mat&eacute;riel ou des syst&egrave;mes de s&eacute;curit&eacute; con&ccedil;us selon le principe de d&eacute;fense en profondeur, ainsi que les fonctions &laquo; d&eacute;tection, ralentissement et intervention &raquo; d&rsquo;un syst&egrave;me de protection physique.</p>  <p>Cette section d&eacute;crit en d&eacute;tail les mesures suivantes :</p>
<ul>
<li>syst&egrave;mes d&rsquo;acc&egrave;s et d&rsquo;identification</li>
<li>contr&ocirc;les de l&rsquo;acc&egrave;s</li>
<li>zones prot&eacute;g&eacute;es et zones int&eacute;rieures</li>
<li>locaux de surveillance</li>
<li>&eacute;quipement de communication</li>
<li>syst&egrave;mes, dispositifs techniques et &eacute;quipements de s&eacute;curit&eacute;</li>
</ul>  <p>En ce qui concerne la cybers&eacute;curit&eacute; des centrales nucl&eacute;aires et des installations dot&eacute;es de petits r&eacute;acteurs, le programme de cybers&eacute;curit&eacute; du titulaire de permis devrait &ecirc;tre conforme &agrave; la norme N290.7-14 de la CSA.</p>
<h4>6.2.1 Syst&egrave;mes d&rsquo;acc&egrave;s et d&rsquo;identification</h4>  <p>Le syst&egrave;me propos&eacute; de carte d&rsquo;acc&egrave;s ou de badge d&rsquo;identification permettant d&rsquo;identifier les employ&eacute;s, les entrepreneurs et les visiteurs et de contr&ocirc;ler leur acc&egrave;s aux zones prot&eacute;g&eacute;es ou int&eacute;rieures devrait &ecirc;tre d&eacute;crit. Cette description devrait comprendre les renseignements qui figureront sur chaque type de carte d&rsquo;acc&egrave;s ou de badge d&rsquo;identification propos&eacute;, par exemple le code couleur, la photographie, la cote de s&eacute;curit&eacute;, le nom, la description de la personne, la date d&rsquo;expiration et les zones o&ugrave; la personne est autoris&eacute;e &agrave; p&eacute;n&eacute;trer.</p>  <p>La description du programme de s&eacute;curit&eacute; devrait comporter &eacute;galement la description du syst&egrave;me propos&eacute; pour la d&eacute;livrance, la comptabilisation et le stockage des badges d&rsquo;identification ou des cartes d&rsquo;acc&egrave;s, et pour la tenue des dossiers pertinents.</p>  <p>Le demandeur devrait indiquer les mesures propos&eacute;es concernant le port et l&rsquo;affichage des badges d&rsquo;identification ou des cartes d&rsquo;acc&egrave;s sur le site de l&rsquo;activit&eacute; vis&eacute;e par la demande. La description du programme de s&eacute;curit&eacute; devrait &eacute;galement indiquer les proc&eacute;dures qui seront suivies pour remettre un badge d&rsquo;identification ou une carte d&rsquo;acc&egrave;s &agrave; la fin de l&rsquo;emploi ou &agrave; la sortie du site.</p>
<h4>6.2.2 Contr&ocirc;les de l&rsquo;acc&egrave;s</h4>  <p>Conform&eacute;ment &agrave; l&rsquo;alin&eacute;a 3(1)g) du <a href="http://laws-lois.justice.gc.ca/fra/reglements/DORS-2000-202/TexteComplet.html"><em>R&egrave;glement g&eacute;n&eacute;ral sur la s&ucirc;ret&eacute; et la r&eacute;glementation nucl&eacute;aires</em></a> (RGSRN), la demande doit comprendre les mesures propos&eacute;es pour contr&ocirc;ler l&rsquo;acc&egrave;s aux lieux o&ugrave; se d&eacute;roulera l&rsquo;activit&eacute; vis&eacute;e par la demande et o&ugrave; se trouvent les mati&egrave;res nucl&eacute;aires de cat&eacute;gorie I ou II.</p>  <h5>Dispositifs d&rsquo;acc&egrave;s et renseignements d&rsquo;acc&egrave;s</h5>  <p>Les dispositifs d&rsquo;acc&egrave;s et les renseignements d&rsquo;acc&egrave;s qui pourraient &ecirc;tre utilis&eacute;s pour entrer dans les zones prot&eacute;g&eacute;es ou int&eacute;rieures ou en sortir devraient &ecirc;tre d&eacute;crits. Ces renseignements pourraient comprendre la marque, le type, la conception et les caract&eacute;ristiques de manipulation et de r&eacute;sistance au crochetage de chaque type de dispositif. Les dispositifs d&rsquo;acc&egrave;s et les renseignements d&rsquo;acc&egrave;s pourraient comprendre :</p>
<ul>
<li>les cl&eacute;s</li>
<li>les serrures</li>
<li>les combinaisons de cadenas</li>
<li>les cartes-cl&eacute;s</li>
<li>les mots de passe</li>
<li>les syst&egrave;mes d&rsquo;identification biom&eacute;trique</li>
</ul>  <p>Les m&eacute;thodes ou les proc&eacute;dures pour contr&ocirc;ler les dispositifs d&rsquo;acc&egrave;s ou les renseignements d&rsquo;acc&egrave;s devraient &ecirc;tre propos&eacute;es, y compris les proc&eacute;dures pour contr&ocirc;ler la garde et l&rsquo;utilisation des cl&eacute;s servant &agrave; p&eacute;n&eacute;trer dans les zones prot&eacute;g&eacute;es ou int&eacute;rieures. Ces proc&eacute;dures devraient indiquer les mesures d&rsquo;intervention en cas de perte ou de vol de ces cl&eacute;s ou autres dispositifs d&rsquo;acc&egrave;s, et les pr&eacute;cautions &agrave; prendre lorsqu&rsquo;un employ&eacute; qui poss&egrave;de des dispositifs ou des renseignements d&rsquo;acc&egrave;s cesse de travailler pour le titulaire de permis.</p>  <h5>V&eacute;hicules</h5>  <p>Les m&eacute;thodes ou les proc&eacute;dures propos&eacute;es pour contr&ocirc;ler tous les points de d&eacute;placement des v&eacute;hicules en direction et en provenance des zones prot&eacute;g&eacute;es ou int&eacute;rieures devraient &ecirc;tre d&eacute;crites. La description devrait comprendre :</p>   <ul>
<li>les proc&eacute;dures &eacute;crites pour aider les agents de s&eacute;curit&eacute; nucl&eacute;aire &agrave; identifier les v&eacute;hicules autoris&eacute;s &agrave; p&eacute;n&eacute;trer dans les zones prot&eacute;g&eacute;es ou int&eacute;rieures</li>
<li>les proc&eacute;dures propos&eacute;es pour escorter les v&eacute;hicules ou effectuer des fouilles de v&eacute;hicule aux points d&rsquo;entr&eacute;e ou de sortie</li>   </ul>  <p>On devrait fournir les proc&eacute;dures pour les conditions normales et d&rsquo;urgence.</p>  <h5>Colis et &eacute;quipement</h5>  <p>Les m&eacute;thodes ou proc&eacute;dures propos&eacute;es pour contr&ocirc;ler tous les points d&rsquo;acc&egrave;s par lesquels des colis et de l&rsquo;&eacute;quipement pourraient p&eacute;n&eacute;trer dans une zone prot&eacute;g&eacute;e ou int&eacute;rieure dans des circonstances normales ou dans des conditions d&rsquo;urgence devraient &ecirc;tre fournies. La description devrait comprendre :</p>
<ul>
<li>les proc&eacute;dures &eacute;crites pour aider les agents de s&eacute;curit&eacute; nucl&eacute;aire &agrave; d&eacute;terminer les colis et l&rsquo;&eacute;quipement qui peuvent &ecirc;tre autoris&eacute;s dans les zones prot&eacute;g&eacute;es ou int&eacute;rieures</li>
<li>les proc&eacute;dures propos&eacute;es pour le marquage ou l&rsquo;autorisation des colis et de l&rsquo;&eacute;quipement, ou pour proc&eacute;der &agrave; des fouilles aux points d&rsquo;entr&eacute;e et de sortie</li>
</ul>
<h4>6.2.3 Zones prot&eacute;g&eacute;es et zones int&eacute;rieures</h4>  <h5>Zones prot&eacute;g&eacute;es</h5>  <p>La description du programme de s&eacute;curit&eacute; devrait indiquer les mesures propos&eacute;es pour r&eacute;pondre aux exigences relatives aux zones prot&eacute;g&eacute;es qui sont &eacute;nonc&eacute;es aux articles 9, 10 et 11 du RSN, notamment :</h5>
<ul>
<li>des barri&egrave;res physiques, y compris des portails d&rsquo;entr&eacute;e, des portails de sortie et des postes de s&eacute;curit&eacute;, et tous les dispositifs d&rsquo;intrusion et de d&eacute;tection propos&eacute;s qui doivent &ecirc;tre plac&eacute;s aux limites de toute zone prot&eacute;g&eacute;e propos&eacute;e ou &agrave; l&rsquo;int&eacute;rieur de celle-ci</li>
<li>les &eacute;quipements, y compris les dispositifs d&rsquo;&eacute;clairage et d&rsquo;&eacute;valuation, permettant de d&eacute;tecter et d&rsquo;&eacute;valuer la cause d&rsquo;une alarme dans toute zone prot&eacute;g&eacute;e</li>
<li>la zone libre qui doit entourer toute zone prot&eacute;g&eacute;e propos&eacute;e</li>
</ul>  <p>Les proc&eacute;dures de contr&ocirc;le d&rsquo;entr&eacute;e et de sortie propos&eacute;es pour les personnes autoris&eacute;es, conform&eacute;ment au paragraphe 17(3) du RSN, afin d&rsquo;acc&eacute;der &agrave; une zone prot&eacute;g&eacute;e lorsqu&rsquo;elles sont accompagn&eacute;es d&rsquo;une escorte autoris&eacute;e, devraient &ecirc;tre d&eacute;crites, y compris :</p>
<ul>
<li>les proc&eacute;dures relatives aux autorisations et aux exigences d&rsquo;identification, aux badges et aux dossiers</li>
<li>les proc&eacute;dures &agrave; suivre par les escortes</li>
<li>les proc&eacute;dures visant &agrave; d&eacute;terminer qui peut &ecirc;tre autoris&eacute; &agrave; servir d&rsquo;escorte</li>
<li>les proc&eacute;dures visant &agrave; &eacute;tablir la formation et les qualifications requises des escortes</li>
<li>le ratio visiteurs-escorte admissible pendant l&rsquo;activit&eacute; vis&eacute;e par la demande</li>
</ul>  <p>Les proc&eacute;dures de contr&ocirc;le des entr&eacute;es et des sorties des personnes qui sont autoris&eacute;es, conform&eacute;ment au paragraphe 17(2) du RSN, &agrave; acc&eacute;der &agrave; une zone prot&eacute;g&eacute;e sans escorte, y compris les proc&eacute;dures relatives aux exigences d&rsquo;identification, aux badges et aux dossiers, devraient &ecirc;tre d&eacute;crites. Le demandeur devrait &eacute;galement indiquer les mesures propos&eacute;es pour r&eacute;pondre aux exigences concernant les zones prot&eacute;g&eacute;es qui sont d&eacute;crites aux articles 25, 26 et 27 du RSN, y compris toute disposition connexe visant &agrave; fouiller les personnes &agrave; la recherche d&rsquo;armes &agrave; feu, d&rsquo;explosifs ou de toute autre arme dissimul&eacute;s pouvant servir &agrave; commettre un crime.</p>  <p>L&rsquo;emplacement de toutes les sorties de secours pour toute zone prot&eacute;g&eacute;e propos&eacute;e devrait &ecirc;tre indiqu&eacute;, ainsi que les mesures de s&eacute;curit&eacute; &agrave; ces sorties de secours, dans des circonstances normales et en cas d&rsquo;urgence.</p>  <h5>Zones vitales</h5>  <p>Les mesures propos&eacute;es pour r&eacute;pondre aux exigences concernant les zones vitales mentionn&eacute;es &agrave; l&rsquo;article 14.1 du RSN devraient &ecirc;tre fournies.</p>  <h5>Zones int&eacute;rieures</h5>  <p>Le demandeur devrait d&eacute;crire l&rsquo;emplacement propos&eacute; et la fonction de toute zone int&eacute;rieure qui, conform&eacute;ment &agrave; l&rsquo;article 12 du RSN, doit se trouver &agrave; l&rsquo;int&eacute;rieur d&rsquo;une zone prot&eacute;g&eacute;e. De plus, le demandeur devrait d&eacute;crire les mesures qui seront prises afin de r&eacute;pondre aux exigences concernant les zones int&eacute;rieures vis&eacute;es aux articles 13 et 14 du RSN, y compris :</p>
<ul>
<li>les barri&egrave;res physiques et tous les dispositifs d&rsquo;intrusion et de d&eacute;tection qui seront situ&eacute;s aux limites de toute zone int&eacute;rieure propos&eacute;e ou &agrave; l&rsquo;int&eacute;rieur de celles-ci</li>
<li>les &eacute;quipements, y compris les dispositifs d&rsquo;&eacute;clairage et d&rsquo;&eacute;valuation, permettant de d&eacute;tecter et d&rsquo;&eacute;valuer la cause d&rsquo;une alarme dans toute zone int&eacute;rieure</li>
</ul>  <p>Le demandeur devrait indiquer les proc&eacute;dures de contr&ocirc;le des entr&eacute;es et des sorties des personnes autoris&eacute;es, en vertu de l&rsquo;article 20 du RSN, &agrave; p&eacute;n&eacute;trer dans une zone int&eacute;rieure sans escorte. La description devrait comprendre les proc&eacute;dures relatives aux autorisations et aux exigences d&rsquo;identification, aux badges et aux dossiers.</p>  <p>La description du programme de s&eacute;curit&eacute; devrait indiquer en d&eacute;tail comment les exigences relatives aux zones int&eacute;rieures, &eacute;nonc&eacute;es aux articles 25, 26 et 27 du RSN, seront respect&eacute;es. Le demandeur devrait &eacute;galement inclure les dispositions concernant la fouille des personnes pour y trouver des armes &agrave; feu, des explosifs ou toute autre arme dissimul&eacute;s pouvant servir &agrave; commettre un crime.</p>  <p>L&rsquo;emplacement de toutes les sorties de secours pour toute zone int&eacute;rieure propos&eacute;e devrait &ecirc;tre indiqu&eacute;, ainsi que les mesures de s&eacute;curit&eacute; &agrave; ces sorties de secours, dans des circonstances normales et en cas d&rsquo;urgence.</p>
<h4>6.2.4 Locaux de surveillance et &eacute;quipement, syst&egrave;mes et proc&eacute;dures de communication sur le site et hors site</h4>  <h5>Locaux de surveillance</h5>  <p>La description du programme de s&eacute;curit&eacute; devrait indiquer comment les locaux de surveillance propos&eacute;s r&eacute;pondront aux exigences de l&rsquo;article 15 du RSN, gr&acirc;ce aux caract&eacute;ristiques propos&eacute;es suivantes :</p>
<ul>
<li>emplacement et fonction</li>
<li>conception et construction</li>
<li>mesures de contr&ocirc;le de l&rsquo;acc&egrave;s</li>
<li>&eacute;quipement de s&eacute;curit&eacute;</li>
<li>effectif</li>
</ul>  <h5>&Eacute;quipement, syst&egrave;mes et proc&eacute;dures de communication sur le site</h5>  <p>Le demandeur devrait indiquer le type et les sp&eacute;cifications de l&rsquo;&eacute;quipement et des syst&egrave;mes de communication sur le site propos&eacute;s que les agents de s&eacute;curit&eacute; nucl&eacute;aire utiliseront pour communiquer entre eux et avec le local de surveillance pendant l&rsquo;activit&eacute; vis&eacute;e par la demande. De plus, il devrait inclure les dispositions prises pour assurer le fonctionnement de l&rsquo;&eacute;quipement de communication non portatif en cas de panne de courant.</p>  <p>Le demandeur devrait d&eacute;crire les proc&eacute;dures que les agents de s&eacute;curit&eacute; nucl&eacute;aire suivront pour communiquer entre eux et avec le local de surveillance pendant l&rsquo;activit&eacute; vis&eacute;e par la demande. Il faudrait &eacute;galement indiquer les moyens de communication s&eacute;curis&eacute;s qui seront utilis&eacute;s par la force d&rsquo;intervention nucl&eacute;aire, y compris les communications radio s&eacute;curis&eacute;es et les communications de secours s&eacute;curis&eacute;es.</p>  <h5>&Eacute;quipement, syst&egrave;mes et proc&eacute;dures de communication hors site</h5>  <p>Le demandeur devrait d&eacute;crire le type et les sp&eacute;cifications de l&rsquo;&eacute;quipement et des syst&egrave;mes de communication hors site propos&eacute;s que les agents de s&eacute;curit&eacute; nucl&eacute;aire utiliseront pour communiquer avec les organismes externes, y compris ceux qui se trouvent dans le local de surveillance. Cette description devrait inclure les dispositions propos&eacute;es pour assurer le fonctionnement de l&rsquo;&eacute;quipement de communication non portatif pendant une panne de courant.</p>  <p>Le demandeur devrait &eacute;galement indiquer les proc&eacute;dures et dispositions que les agents de s&eacute;curit&eacute; nucl&eacute;aire, y compris ceux qui se trouvent dans le local de surveillance, suivront pour communiquer avec les organismes ext&eacute;rieurs.</p>  <p>Pendant l&rsquo;activit&eacute; vis&eacute;e par la demande, il serait n&eacute;cessaire d&rsquo;accorder une attention particuli&egrave;re aux communications avec les services d&rsquo;urgence comme les forces d&rsquo;intervention arm&eacute;es hors site.</p>
<h4>6.2.5 Syst&egrave;mes, dispositifs techniques et &eacute;quipements de s&eacute;curit&eacute;</h4>  <h5>Conception et caract&eacute;ristiques de rendement</h5>  <p>Conform&eacute;ment &agrave; l&rsquo;alin&eacute;a 3c) du RSN, les &eacute;quipements, syst&egrave;mes et proc&eacute;dures de s&eacute;curit&eacute; propos&eacute;s devraient &ecirc;tre d&eacute;crits, y compris :</p>
<ul>
<li>l&rsquo;objet, la fonction, la conception et le rendement de tous les dispositifs techniques de s&eacute;curit&eacute; et leurs syst&egrave;mes connexes</li>
<li>les caract&eacute;ristiques d&eacute;taill&eacute;es de tous les dispositifs techniques de s&eacute;curit&eacute; (p. ex., les donn&eacute;es fournies par les fabricants des dispositifs)</li>
<li>un sch&eacute;ma fonctionnel illustrant l&rsquo;int&eacute;gration des syst&egrave;mes de s&eacute;curit&eacute;</li>
<li>les proc&eacute;dures de fonctionnement de tous les dispositifs techniques de s&eacute;curit&eacute;</li>
<li>les proc&eacute;dures de fonctionnement de chaque syst&egrave;me de s&eacute;curit&eacute;</li>
</ul>  <h5>Programmes d&rsquo;entretien, d&rsquo;essai et d&rsquo;inspection</h5>  <p>La description du programme de s&eacute;curit&eacute; devrait comporter une description des programmes propos&eacute;s d&rsquo;entretien, d&rsquo;essai et d&rsquo;inspection des syst&egrave;mes, dispositifs techniques et &eacute;quipements de s&eacute;curit&eacute; qui seront fournis, conform&eacute;ment aux exigences de l&rsquo;alin&eacute;a 12(1)d) du RGSRN, y compris pour les syst&egrave;mes propos&eacute;s suivants :</p>
<ul>
<li>alarmes anti-intrusion</li>
<li>dispositifs de d&eacute;tection</li>
<li>alarmes des sorties de secours</li>
<li>appareils d&rsquo;&eacute;clairage</li>
<li>&eacute;quipement de communications</li>
</ul>  <p>Le demandeur devrait d&eacute;crire les proc&eacute;dures propos&eacute;es, y compris les calendriers de r&eacute;paration et d&rsquo;entretien des syst&egrave;mes, des dispositifs techniques et des &eacute;quipements de s&eacute;curit&eacute; pendant l&rsquo;activit&eacute; vis&eacute;e par la demande. Pour ce qui est des activit&eacute;s d&rsquo;entretien p&eacute;riodique, la description du programme de s&eacute;curit&eacute; devrait comprendre :</p>
<ul>
<li>une liste des syst&egrave;mes, dispositifs techniques et &eacute;quipements de s&eacute;curit&eacute; &agrave; entretenir</li>
<li>une courte description des travaux &agrave; effectuer</li>
<li>une liste des fournisseurs de service propos&eacute;s</li>
<li>une description des calendriers d&rsquo;entretien propos&eacute;s</li>
</ul>  <p>Le programme propos&eacute; d&rsquo;entretien pr&eacute;ventif des syst&egrave;mes, sous-syst&egrave;mes et composants de s&eacute;curit&eacute; devrait &ecirc;tre d&eacute;crit, y compris les mesures correctrices ou compensatoires qui seront mises en &oelig;uvre en cas de d&eacute;faillance d&rsquo;un composant essentiel du syst&egrave;me de s&eacute;curit&eacute;. Le demandeur devrait d&eacute;crire le programme propos&eacute; d&rsquo;essai et d&rsquo;inspection des syst&egrave;mes, dispositifs techniques et &eacute;quipements de s&eacute;curit&eacute; pendant l&rsquo;exploitation normale, y compris l&rsquo;objet, la fr&eacute;quence et la rigueur requise du programme.</p>  <p>Les manuels d&rsquo;entretien de l&rsquo;&eacute;quipement ne devraient pas &ecirc;tre inclus dans la description du programme de s&eacute;curit&eacute;.</p>
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
<h3 id="sec6-3">6.3	Mesures de s&eacute;curit&eacute; administratives</h3>  <p>Les mesures de s&eacute;curit&eacute; administratives soutiennent les mesures techniques et elles comprennent les programmes, les plans, les politiques, les proc&eacute;dures, les instructions et les pratiques que le titulaire de permis met en &oelig;uvre pour s&eacute;curiser les mati&egrave;res radioactives autoris&eacute;es contre leur enl&egrave;vement non autoris&eacute; ou leur sabotage.</p>  <p>Ces mesures comprennent, entre autres, les suivantes :</p>
<ul>
<li>l&rsquo;organisation de la s&eacute;curit&eacute;</li>
<li>les plans et les proc&eacute;dures de secours</li>
<li>les t&acirc;ches des agents de s&eacute;curit&eacute; nucl&eacute;aire</li>
<li>les mesures d&rsquo;intervention en cas de sabotage</li>
<li>les arrangements de protection</li>
<li>la sensibilisation &agrave; la s&eacute;curit&eacute;</li>
<li>le programme de sensibilisation des surveillants</li>
<li>le programme d&rsquo;aptitude au travail</li>
</ul>
<h4>6.3.1 Organisation de la s&eacute;curit&eacute;</h4>  <h5>R&ocirc;les de la s&eacute;curit&eacute; au sein de l&rsquo;organisation de l&rsquo;installation</h5>  <p>Le demandeur devrait d&eacute;crire les fonctions et responsabilit&eacute;s propos&eacute;es des personnes qui sont directement responsables de la gestion du programme de s&eacute;curit&eacute; propos&eacute; et des d&eacute;cisions pendant l&rsquo;activit&eacute; vis&eacute;e par la demande. Le demandeur devrait indiquer un point de contact unique propos&eacute; pour les communications avec la CCSN concernant les questions de s&eacute;curit&eacute; physique.</p>  <h5>Structure et organisation du service des agents de s&eacute;curit&eacute; nucl&eacute;aire</h5>  <p>La description du programme de s&eacute;curit&eacute; devrait indiquer, conform&eacute;ment &agrave; l&rsquo;alin&eacute;a 3e) du RSN, la structure et l&rsquo;organisation propos&eacute;es pour le service de s&eacute;curit&eacute; nucl&eacute;aire, y compris :</p>
<ul>
<li>les fonctions et les responsabilit&eacute;s des agents de s&eacute;curit&eacute; nucl&eacute;aire</li>
<li>les niveaux d&rsquo;autorit&eacute; et de responsabilit&eacute; des agents de s&eacute;curit&eacute; et des membres de la force d&rsquo;intervention nucl&eacute;aire</li>
<li>un organigramme de l&rsquo;installation propos&eacute;e ou existante qui montre les rapports hi&eacute;rarchiques entre la direction et les agents de s&eacute;curit&eacute; nucl&eacute;aire</li>
<li>la taille de la force de s&eacute;curit&eacute;, le nombre et le calendrier des quarts de s&eacute;curit&eacute;, les effectifs minimaux d&rsquo;agents de s&eacute;curit&eacute; pour chaque quart, et le nombre et l&rsquo;emplacement des postes de s&eacute;curit&eacute; pour tous les quarts</li>
</ul>  <h5>Crit&egrave;res de s&eacute;lection des agents de s&eacute;curit&eacute; nucl&eacute;aire</h5>  <p>Les crit&egrave;res et les proc&eacute;dures de recrutement, de s&eacute;lection et de nomination des nouveaux agents de s&eacute;curit&eacute; nucl&eacute;aire devraient &ecirc;tre d&eacute;crits.</p>  <h5>Formation des agents de s&eacute;curit&eacute; nucl&eacute;aire et des membres de la force d&rsquo;intervention nucl&eacute;aire</h5>  <p>Le plan propos&eacute; pour la formation des agents de s&eacute;curit&eacute; nucl&eacute;aire devrait &ecirc;tre fourni conform&eacute;ment &agrave; l&rsquo;article 34 du RSN, y compris le contenu des cours, les heures de formation par mati&egrave;re, les m&eacute;thodes d&rsquo;essai pour la formation d&rsquo;orientation et la formation de recyclage, respectivement.</p>  <h5>Aptitude des agents de s&eacute;curit&eacute; nucl&eacute;aire</h5>  <p>La description du programme de s&eacute;curit&eacute; devrait comprendre une description du plan propos&eacute; pour le contr&ocirc;le des aptitudes des agents de s&eacute;curit&eacute; nucl&eacute;aire, conform&eacute;ment au document RD-363, <em>Aptitudes psychologiques, m&eacute;dicales et physiques des agents de s&eacute;curit&eacute; nucl&eacute;aire</em>, y compris la fr&eacute;quence des tests, le processus d&rsquo;accr&eacute;ditation et la conservation des dossiers, ainsi qu&rsquo;une description de ce qui est consid&eacute;r&eacute; comme une &laquo; circonstance sp&eacute;ciale &raquo;.</p>  <h5>Exercices de s&eacute;curit&eacute;</h5>  <p>En vertu du paragraphe 36(4) du RSN, le titulaire de permis doit tenir un exercice de s&eacute;curit&eacute; dans l&rsquo;installation au moins une fois par mois afin de v&eacute;rifier le fonctionnement des &eacute;quipements, syst&egrave;mes et proc&eacute;dures de s&eacute;curit&eacute; dans une installation nucl&eacute;aire compos&eacute;e d&rsquo;un r&eacute;acteur nucl&eacute;aire pouvant produire plus de 10 MW d&rsquo;&eacute;nergie thermique en exploitation normale. La description du programme de s&eacute;curit&eacute; devrait fournir des d&eacute;tails sur les aspects suivants :</p>
<ul>
<li>comment et quand ces exercices seront effectu&eacute;s</li>
<li>comment l&rsquo;efficacit&eacute; des exercices sera &eacute;valu&eacute;e</li>
<li>comment les r&eacute;sultats d&rsquo;un exercice seront pris en compte lors des exercices suivants</li>
</ul>  <h5>&Eacute;quipement et v&eacute;hicules utilis&eacute;s par les agents de s&eacute;curit&eacute; nucl&eacute;aire et les membres de la force d&rsquo;intervention nucl&eacute;aire</h5>  <p>Le demandeur devrait fournir une description du nombre propos&eacute;, des caract&eacute;ristiques et des conditions d&rsquo;utilisation de l&rsquo;&eacute;quipement et des v&eacute;hicules qui seront fournis aux agents de s&eacute;curit&eacute; nucl&eacute;aire, y compris tout &eacute;quipement associ&eacute; &agrave; un v&eacute;hicule, les dispositifs portatifs de communication, les dispositifs de vision nocturne, les &eacute;quipements de protection physique et de radioprotection, les armes et les dispositifs de fouille.</p>  <h5>Dossiers</h5>  <p>La description du programme de s&eacute;curit&eacute; devrait indiquer les proc&eacute;dures et syst&egrave;mes propos&eacute;s pour la tenue et la conservation des dossiers et l&rsquo;acc&egrave;s &agrave; ceux-ci conform&eacute;ment &agrave; l&rsquo;article 37 du RSN, y compris les dossiers qui contiennent les renseignements suivants :</p>
<ul>
<li>le nom de chaque personne &agrave; qui une autorisation de p&eacute;n&eacute;trer dans une zone prot&eacute;g&eacute;e ou int&eacute;rieure a &eacute;t&eacute; d&eacute;livr&eacute;e</li>
<li>les fonctions et les responsabilit&eacute;s des agents de s&eacute;curit&eacute; nucl&eacute;aire</li>
<li>la formation re&ccedil;ue par chaque agent de s&eacute;curit&eacute; nucl&eacute;aire</li>
<li>les proc&eacute;dures de s&eacute;curit&eacute;</li>
<li>la notification des &eacute;v&eacute;nements de s&eacute;curit&eacute;</li>
<li>le suivi de la performance des agents de s&eacute;curit&eacute; nucl&eacute;aire</li>
</ul>  <h5>Renseignements r&eacute;glement&eacute;s</h5>  <p>La description du programme de s&eacute;curit&eacute; devrait proposer des mesures visant &agrave; contr&ocirc;ler l&rsquo;acc&egrave;s aux renseignements r&eacute;glement&eacute;s, selon la d&eacute;finition donn&eacute;e &agrave; l&rsquo;article 21 du RGSRN, et &agrave; pr&eacute;venir la perte ou l&rsquo;utilisation, la possession ou le retrait ill&eacute;gaux de ces renseignements.</p>
<h4>6.3.2 Plans et proc&eacute;dures d&rsquo;urgence</h4>  <p>Les plans et proc&eacute;dures propos&eacute;s pour &eacute;valuer les atteintes &agrave; la s&eacute;curit&eacute; et y r&eacute;agir, conform&eacute;ment &agrave; l&rsquo;alin&eacute;a 3f) du RSN, devraient &ecirc;tre fournis, y compris les renseignements sur les mesures propos&eacute;es :</p>
<ul>
<li>les m&eacute;thodes &agrave; utiliser pour &eacute;valuer une atteinte &agrave; la s&eacute;curit&eacute; pendant l&rsquo;activit&eacute; vis&eacute;e par la demande</li>
<li>les interventions en cas d&rsquo;incidents de s&eacute;curit&eacute;, comme les intrusions, les menaces, les vols de mati&egrave;res nucl&eacute;aires, les sabotages ou les troubles civils pendant l&rsquo;activit&eacute; vis&eacute;e par la demande</li>
<li>les proc&eacute;dures &agrave; suivre en cas d&rsquo;atteinte potentielle ou r&eacute;elle &agrave; la s&eacute;curit&eacute; pendant l&rsquo;activit&eacute; vis&eacute;e par la demande</li>
<li>la structure de commandement de la force de s&eacute;curit&eacute; qui interviendra en cas d&rsquo;atteinte &agrave; la s&eacute;curit&eacute; pendant l&rsquo;activit&eacute; vis&eacute;e par la demande</li>
<li>les proc&eacute;dures de transfert de la responsabilit&eacute; ou du commandement &agrave; une force ext&eacute;rieure qui doit intervenir en cas d&rsquo;atteinte &agrave; la s&eacute;curit&eacute; pendant l&rsquo;activit&eacute; vis&eacute;e par la demande</li>
</ul>  <p>Tout autre plan d&rsquo;urgence qui peut n&eacute;cessiter l&rsquo;intervention de la force de s&eacute;curit&eacute; propos&eacute;e devrait &ecirc;tre fourni.</p>
<h4>6.3.3 Disponibilit&eacute; et fonctions des agents de s&eacute;curit&eacute; nucl&eacute;aire et des membres de la force d&rsquo;intervention nucl&eacute;aire</h4>  <p>La description de la s&eacute;curit&eacute; nucl&eacute;aire devrait comprendre les renseignements suivants :</p>
<ul>
<li>le moment et les circonstances dans lesquels les agents de s&eacute;curit&eacute; nucl&eacute;aire doivent &ecirc;tre en disponibilit&eacute; ou en service</li>
<li>la m&eacute;thode propos&eacute;e pour faire appel &agrave; des agents de s&eacute;curit&eacute; nucl&eacute;aire suppl&eacute;mentaires</li>
<li>les fonctions propos&eacute;es des agents de s&eacute;curit&eacute; nucl&eacute;aire dans les conditions normales et dans les cas d&rsquo;urgence</li>
</ul>
<h4>6.3.4 Sabotages ou tentatives de sabotage</h4>  <h5>Site de l&rsquo;activit&eacute; autoris&eacute;e</h5>  <p>Conform&eacute;ment &agrave; l&rsquo;alin&eacute;a 12(1)h) du RGSRN, le titulaire de permis devrait mettre en &oelig;uvre des mesures pour &ecirc;tre alert&eacute; en cas d&rsquo;actes ou de tentatives de sabotage sur les lieux de l&rsquo;activit&eacute; autoris&eacute;e.</p>  <h5>Installation nucl&eacute;aire</h5>  <p>Pour qu&rsquo;un titulaire de permis puisse exploiter une installation nucl&eacute;aire de cat&eacute;gorie I compos&eacute;e d&rsquo;un r&eacute;acteur nucl&eacute;aire pouvant produire plus de 10 MW d&rsquo;&eacute;nergie thermique en exploitation normale, le titulaire de permis doit, conform&eacute;ment &agrave; l&rsquo;alin&eacute;a 6(l) du <a href="http://laws.justice.gc.ca/fra/reglements/DORS-2000-204/index.html"><em>R&egrave;glement sur les installations nucl&eacute;aires de cat&eacute;gorie I</em></a>, d&eacute;crire les mesures propos&eacute;es pour emp&ecirc;cher tout acte ou tentative de sabotage &agrave; l&rsquo;installation nucl&eacute;aire, de m&ecirc;me que les mesures pour alerter le titulaire de permis.</p>
<h4>6.3.5 Arrangements de protection pris avec les forces d&rsquo;intervention hors site</h4>  <p>La description du programme de s&eacute;curit&eacute; nucl&eacute;aire devrait, conform&eacute;ment &agrave; l&rsquo;alin&eacute;a 3a) du RSN, comprendre une copie des arrangements de protection propos&eacute;s &ndash; p. ex., selon un protocole d&rsquo;entente ou autre document d&rsquo;engagement &ndash; pris avec une force d&rsquo;intervention externe conform&eacute;ment &agrave; l&rsquo;article 35 du RSN. Les arrangements doivent &ecirc;tre sign&eacute;s et dat&eacute;s, en pr&eacute;sence d&rsquo;un t&eacute;moin instrumentaire, par le demandeur ou le repr&eacute;sentant d&eacute;l&eacute;gu&eacute; du demandeur, ainsi que par un repr&eacute;sentant d&eacute;l&eacute;gu&eacute; de la force d&rsquo;intervention externe.</p>  <p>Le demandeur devrait fournir une description de la fa&ccedil;on dont les mesures de protection propos&eacute;es r&eacute;pondront aux exigences de l&rsquo;article 35 du RSN, notamment :</p>
<ul>
<li>une estimation des effectifs de la force d&rsquo;intervention externe propos&eacute;e qui seraient utilis&eacute;s pour les situations allant d&rsquo;une intervention initiale &agrave; l&rsquo;activation compl&egrave;te de l&rsquo;&eacute;quipe d&rsquo;intervention</li>
<li>une estimation du temps n&eacute;cessaire pour fournir les divers niveaux d&rsquo;intervention pr&eacute;vus (de l&rsquo;intervention &laquo; initiale &raquo; &agrave; l&rsquo;intervention &laquo; compl&egrave;te &raquo;)</li>
<li>l&rsquo;&eacute;valuation, en consultation avec la force d&rsquo;intervention externe propos&eacute;e, des types de menaces &agrave; la s&eacute;curit&eacute; que la force d&rsquo;intervention sera en mesure de traiter, compte tenu de l&rsquo;activit&eacute; ou de l&rsquo;installation vis&eacute;e par la demande</li>
<li>une description des arrangements pris par la force d&rsquo;intervention externe propos&eacute;e pour demander et recevoir le soutien d&rsquo;une autre force d&rsquo;intervention, par exemple un corps policier</li>
</ul>
<h4>6.3.6 Sensibilisation &agrave; la s&eacute;curit&eacute;</h4>  <p>Le demandeur devrait indiquer les mesures propos&eacute;es pour donner aux travailleurs une formation sur le programme de s&eacute;curit&eacute; physique sur les lieux de l&rsquo;activit&eacute; autoris&eacute;e et sur leurs obligations aux termes du programme, conform&eacute;ment &agrave; l&rsquo;alin&eacute;a 12(1)j) du RGSRN. Les travailleurs devraient &ecirc;tre mis au courant de ce qui suit :</p>
<ul>
<li>l&rsquo;exigence l&eacute;gale pour une personne de signaler imm&eacute;diatement &agrave; l&rsquo;agent de s&eacute;curit&eacute; nucl&eacute;aire le plus proche la pr&eacute;sence de toute personne qui n&rsquo;est pas autoris&eacute;e &agrave; &ecirc;tre dans une zone, conform&eacute;ment au paragraphe 24(2) du RSN</li>
<li>les obligations l&eacute;gales des travailleurs conform&eacute;ment &agrave; l&rsquo;article 17 du RGSRN</li>
</ul>
<h4>6.3.7 Programme de sensibilisation des superviseurs</h4>  <p>Le demandeur devrait d&eacute;crire les mesures propos&eacute;es pour &eacute;laborer et mettre en &oelig;uvre en permanence et tenir &agrave; jour un programme efficace de sensibilisation des superviseurs du titulaire de permis, afin qu&rsquo;ils puissent reconna&icirc;tre les changements de comportement chez tout le personnel, y compris les entrepreneurs, qui pourraient poser un risque pour la s&eacute;curit&eacute; d&rsquo;une installation ou d&rsquo;une activit&eacute; autoris&eacute;e. Cette description devrait comprendre les crit&egrave;res utilis&eacute;s pour d&eacute;montrer l&rsquo;efficacit&eacute; du programme de sensibilisation des superviseurs.</p>
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
<h2 id="sec7">7. Mesures de s&eacute;curit&eacute; du transport</h2>  <p>Cette section fournit des indications qui pourraient s&rsquo;av&eacute;rer utiles pour le demandeur d&rsquo;un permis de transport de mati&egrave;res nucl&eacute;aires de cat&eacute;gorie I, II ou III au moment de l&rsquo;&eacute;laboration d&rsquo;un plan de s&eacute;curit&eacute; du transport conform&eacute;ment &agrave; l&rsquo;article 5 du <a href="http://laws.justice.gc.ca/fra/reglements/DORS-2000-209/page-1.html"><em>R&egrave;glement sur la s&eacute;curit&eacute; nucl&eacute;aire</em></a> (RSN). Les mesures &eacute;num&eacute;r&eacute;es ci-dessous s&rsquo;inspirent des exigences r&eacute;glementaires, des pratiques en usage au Canada et des accords conclus &agrave; cet &eacute;gard &agrave; l&rsquo;&eacute;chelle internationale, et s&rsquo;appliquent &agrave; toutes les cat&eacute;gories ou &agrave; des cat&eacute;gories pr&eacute;cises de mati&egrave;res nucl&eacute;aires, comme il est indiqu&eacute; ci-dessous.</p>
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
<h3 id="sec7-1">7.1	Mesures visant toutes les cat&eacute;gories de mati&egrave;res nucl&eacute;aires</h3>  <h4>7.1.1 Protocoles internationaux</h4>  <p>Le Canada est partie &agrave; la <a href="http://www.un.org/fr/events/againstnucleartestsday/pdf/Amendement2005.pdf"><em>Convention sur la protection physique des mati&egrave;res nucl&eacute;aires</em> (Amendement de 2005)</a>, &eacute;labor&eacute;e sous les auspices de l&rsquo;Agence internationale de l&rsquo;&eacute;nergie atomique (AIEA). La Convention invite les parties &agrave; coop&eacute;rer pour assurer la protection des mati&egrave;res nucl&eacute;aires lors de leur transport transfrontalier. Les parties doivent appliquer le protocole en accord avec le document no 13 de la Collection S&eacute;curit&eacute; nucl&eacute;aire de l&rsquo;AIEA &ndash; <a href="http://www-pub.iaea.org/MTCD/Publications/PDF/Pub1481f_Web.pdf"><em>Recommandations de s&eacute;curit&eacute; nucl&eacute;aire sur la protection physique des mati&egrave;res nucl&eacute;aires et des installations nucl&eacute;aires</em></a> (INFCIRC/225/r&eacute;vision 5).</p>  <p>Avant de proc&eacute;der au transport international de mati&egrave;res nucl&eacute;aires, l&rsquo;exp&eacute;diteur devrait s&rsquo;assurer que les arrangements conclus relativement au transport sont conformes &agrave; la r&eacute;glementation sur la protection physique ayant cours dans le pays destinataire, et le cas &eacute;ch&eacute;ant, dans les pays de transit par lesquels passera l&rsquo;exp&eacute;dition. Les organismes de r&eacute;glementation des pays vis&eacute;s devraient &ecirc;tre au fait du transport pr&eacute;vu de mati&egrave;res nucl&eacute;aires qui traverseront une fronti&egrave;re nationale et avoir d&eacute;termin&eacute; de concert quelles personnes ou quels organismes seront responsables de l&rsquo;exp&eacute;dition aux diverses &eacute;tapes de l&rsquo;itin&eacute;raire. L&rsquo;exp&eacute;diteur et le destinataire de mati&egrave;res nucl&eacute;aires qui doivent franchir une fronti&egrave;re nationale devraient avoir conclu un accord pr&eacute;cisant clairement le point auquel la responsabilit&eacute; de la protection physique de l&rsquo;exp&eacute;dition est transf&eacute;r&eacute;e de l&rsquo;exp&eacute;diteur au destinataire.</p>  <p>Tant qu&rsquo;elles demeurent &agrave; l&rsquo;int&eacute;rieur des fronti&egrave;res d&rsquo;un pays, les mati&egrave;res nucl&eacute;aires sont assujetties au r&eacute;gime de r&eacute;glementation de ce pays. Par exemple, dans le cas d&rsquo;exp&eacute;ditions entre le Canada et les &Eacute;tats-Unis, le transfert de la responsabilit&eacute; d&rsquo;assurer la protection physique des mati&egrave;res nucl&eacute;aires transport&eacute;es s&rsquo;effectuera &agrave; la fronti&egrave;re entre ces deux pays. Ce qui veut dire que les mati&egrave;res nucl&eacute;aires en provenance des &Eacute;tats-Unis passeront, d&egrave;s leur entr&eacute;e au Canada, sous la responsabilit&eacute; du titulaire de permis de la CCSN. Aussi, selon que les mati&egrave;res nucl&eacute;aires seront destin&eacute;es &agrave; &ecirc;tre import&eacute;es au Canada ou export&eacute;es du Canada, le destinataire ou l&rsquo;exp&eacute;diteur devra obtenir de la CCSN, avant le transport, le permis de transport pertinent et, selon le cas, un permis d&rsquo;importation ou d&rsquo;exportation.</p>  <p>Si une exp&eacute;dition de mati&egrave;res nucl&eacute;aires est appel&eacute;e &agrave; transiter sur le territoire (eaux territoriales et espaces a&eacute;riens compris) de plus de deux pays, les pays tant exp&eacute;diteur que destinataire devraient tenir compte, dans leurs arrangements, de ces pays de transit, pour s&rsquo;assurer de leur collaboration et pour veiller ainsi &agrave; ce qu&rsquo;ils procurent une protection physique appropri&eacute;e de l&rsquo;exp&eacute;dition.</p>
<h4>7.1.2 Autres principes</h4>  <p>Comme les mati&egrave;res nucl&eacute;aires peuvent &ecirc;tre particuli&egrave;rement vuln&eacute;rables au vol ou aux actes de sabotage lorsqu&rsquo;elles sont transport&eacute;es, les titulaires de permis devraient assurer, pour ces mati&egrave;res, un niveau de protection physique comparable &agrave; celui qu&rsquo;ils procurent pour les mati&egrave;res semblables pendant leur utilisation ou leur stockage.</p>  <p>On devrait r&eacute;duire au minimum le temps total de transport des mati&egrave;res nucl&eacute;aires. Le nombre et la dur&eacute;e de tout transfert de mati&egrave;res nucl&eacute;aires d&rsquo;un v&eacute;hicule de transport &agrave; un autre, et de l&rsquo;entreposage temporaire au stockage &agrave; long terme, devraient &eacute;galement &ecirc;tre r&eacute;duits au minimum.</p>  <p>On devrait &eacute;viter d&rsquo;&eacute;tablir des horaires fixes pour le transport des mati&egrave;res nucl&eacute;aires. En effet, il convient de varier les itin&eacute;raires utilis&eacute;s pour le transport des mati&egrave;res, en tenant compte des r&egrave;glements et des ordonnances applicables concernant les itin&eacute;raires de transport des mati&egrave;res radioactives et dangereuses. Seules les personnes autoris&eacute;es devraient avoir acc&egrave;s aux donn&eacute;es relatives au transport des mati&egrave;res nucl&eacute;aires.</p>  <p>Des arrangements pr&eacute;liminaires pour l&rsquo;exp&eacute;dition des mati&egrave;res nucl&eacute;aires devraient &ecirc;tre pris avec le destinataire avant l&rsquo;exp&eacute;dition des mati&egrave;res, et les d&eacute;tails, notamment le mode de transport, le point de remise et l&rsquo;heure d&rsquo;arriv&eacute;e, devraient &ecirc;tre confirm&eacute;s par la suite.</p>  <p>La fiabilit&eacute; de toute personne qui doit participer au transport de mati&egrave;res nucl&eacute;aires devrait &ecirc;tre v&eacute;rifi&eacute;e avant l&rsquo;exp&eacute;dition, conform&eacute;ment aux proc&eacute;dures &eacute;tablies par le titulaire de permis.</p>  <p>Le cas &eacute;ch&eacute;ant, un centre de contr&ocirc;le de la s&eacute;curit&eacute; (ou local de surveillance, s&rsquo;il y a lieu) devrait &ecirc;tre mis en place pour coordonner le transport des mati&egrave;res nucl&eacute;aires et faire en sorte que des communications s&ucirc;res et fiables soient en place en tout temps pendant leur transport.</p>
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
<h3 id="sec7-2">7.2	Mesures propres aux diff&eacute;rentes cat&eacute;gories</h3>  <h4>7.2.1 Mesures pour le transport des mati&egrave;res nucl&eacute;aires de cat&eacute;gorie I</h4>  <h5>Escortes</h5>  <p>Les exp&eacute;ditions de mati&egrave;res nucl&eacute;aires de cat&eacute;gorie I devraient &ecirc;tre accompagn&eacute;es de gardes arm&eacute;s, ou &ecirc;tre escort&eacute;es en permanence par un v&eacute;hicule dans lequel se trouvent des gardes arm&eacute;s. Les gardes devraient maintenir des communications r&eacute;guli&egrave;res avec l&rsquo;exp&eacute;diteur, le destinataire, les autorit&eacute;s locales et la force d&rsquo;intervention le long de l&rsquo;itin&eacute;raire de transport, jusqu&rsquo;&agrave; ce que les responsabilit&eacute;s concernant l&rsquo;exp&eacute;dition soient transf&eacute;r&eacute;es au destinataire.</p>  <h5>Communications</h5>  <p>L&rsquo;exp&eacute;diteur de mati&egrave;res nucl&eacute;aires de cat&eacute;gorie I devrait, avant l&rsquo;exp&eacute;dition pr&eacute;vue, fournir au destinataire les renseignements suivants : les caract&eacute;ristiques des mati&egrave;res nucl&eacute;aires, les modes de transport pr&eacute;vus, ainsi que la date, l&rsquo;heure et le lieu d&rsquo;arriv&eacute;e pr&eacute;vus.</p>  <p>Avant le d&eacute;but du transport, l&rsquo;exp&eacute;diteur devrait confirmer que le destinataire est dispos&eacute; &agrave; recevoir l&rsquo;exp&eacute;dition et pr&ecirc;t pour celle-ci. &Agrave; l&rsquo;arriv&eacute;e de l&rsquo;exp&eacute;dition, le destinataire devrait en informer imm&eacute;diatement l&rsquo;exp&eacute;diteur. Si l&rsquo;exp&eacute;dition n&rsquo;arrive pas &agrave; destination dans un d&eacute;lai convenu &agrave; l&rsquo;avance par l&rsquo;exp&eacute;diteur et le destinataire, le destinataire devrait informer imm&eacute;diatement l&rsquo;exp&eacute;diteur de l&rsquo;incident.</p>  <p>Des communications fiables et s&eacute;curis&eacute;es sont essentielles lors du transport des mati&egrave;res nucl&eacute;aires de cat&eacute;gorie I. Les communications radio bidirectionnelles concernant le transport des mati&egrave;res nucl&eacute;aires devraient consister uniquement en messages chiffr&eacute;s. Pendant le transport, l&rsquo;escorte devrait rester en contact fr&eacute;quent avec l&rsquo;exp&eacute;diteur, le destinataire, les autorit&eacute;s locales et la force d&rsquo;intervention le long de l&rsquo;itin&eacute;raire de transport. Lors de la planification de l&rsquo;exp&eacute;dition, l&rsquo;exp&eacute;diteur devrait &eacute;tablir un plan d&rsquo;action en cas de perte de communication pendant le transport. La mise en place d&rsquo;un centre de contr&ocirc;le de s&eacute;curit&eacute; du transport (ou local de surveillance, le cas &eacute;ch&eacute;ant) devrait &ecirc;tre envisag&eacute;e.</p>  <p>En cas de perte ou de vol d&rsquo;une exp&eacute;dition de mati&egrave;res nucl&eacute;aires, le titulaire de permis doit, conform&eacute;ment &agrave; l&rsquo;alin&eacute;a 27b) de la LSRN et &agrave; l&rsquo;alin&eacute;a 29(1)a) du <a href="http://laws-lois.justice.gc.ca/fra/reglements/DORS-2000-202/page-1.html"><em>R&egrave;glement g&eacute;n&eacute;ral sur la s&ucirc;ret&eacute; et la r&eacute;glementation nucl&eacute;aires</em></a> (RGSRN), pr&eacute;senter imm&eacute;diatement un rapport pr&eacute;liminaire &agrave; la CCSN sur l&rsquo;emplacement et les circonstances de la situation qui d&eacute;crit toute mesure prise par le titulaire de permis ou qu&rsquo;il se propose de prendre &agrave; ce sujet.</p>  <h5>Serrures et sceaux</h5>  <p>Les colis qui contiennent des mati&egrave;res nucl&eacute;aires de cat&eacute;gorie I devraient &ecirc;tre transport&eacute;s dans des v&eacute;hicules ou conteneurs ferm&eacute;s, verrouill&eacute;s et scell&eacute;s. Au besoin, les colis qui contiennent des mati&egrave;res nucl&eacute;aires de cat&eacute;gorie I et p&egrave;sent plus de 2 000 kg peuvent, s&rsquo;ils sont verrouill&eacute;s, scell&eacute;s et arrim&eacute;s au v&eacute;hicule ou conteneur, &ecirc;tre transport&eacute;s sur un v&eacute;hicule ouvert. L&rsquo;int&eacute;grit&eacute; des serrures et des sceaux du colis devrait &ecirc;tre v&eacute;rifi&eacute;e avant le d&eacute;part, pendant le transport et &agrave; l&rsquo;arriv&eacute;e &agrave; destination, afin de d&eacute;tecter, en temps utile, toute alt&eacute;ration.</p>  <h5>Mesures de s&eacute;curit&eacute;</h5>  <p>Toutes les exp&eacute;ditions de mati&egrave;res nucl&eacute;aires de cat&eacute;gorie I devraient &ecirc;tre effectu&eacute;es, peu importe le mode de transport, dans des v&eacute;hicules affect&eacute;s exclusivement au transport de ces mati&egrave;res.</p>  <p>Avant d&rsquo;exp&eacute;dier des mati&egrave;res nucl&eacute;aires, l&rsquo;exp&eacute;diteur devrait s&rsquo;assurer que le transporteur choisi est au courant des mesures de s&eacute;curit&eacute; physique, et qu&rsquo;il peut s&rsquo;y conformer. Lorsqu&rsquo;il traite avec des transporteurs tiers, l&rsquo;exp&eacute;diteur devrait leur souligner les exigences de confidentialit&eacute; concernant les questions relatives aux exp&eacute;ditions de mati&egrave;res nucl&eacute;aires de cat&eacute;gorie I, et sur la n&eacute;cessit&eacute; pour le transporteur de s&rsquo;assurer que toutes les personnes plac&eacute;es sous son contr&ocirc;le qui participeront au transport pr&eacute;vu de mati&egrave;res nucl&eacute;aires sont dignes de confiance.</p>  <p>Avant qu&rsquo;un v&eacute;hicule ne soit charg&eacute; de mati&egrave;res nucl&eacute;aires de cat&eacute;gorie I, le personnel qualifi&eacute; devrait proc&eacute;der &agrave; une fouille rigoureuse du v&eacute;hicule afin de s&rsquo;assurer qu&rsquo;il n&rsquo;y a eu aucune tentative de sabotage. Imm&eacute;diatement apr&egrave;s la fouille, le v&eacute;hicule devrait &ecirc;tre ferm&eacute;, verrouill&eacute;, scell&eacute; et plac&eacute; dans une zone s&eacute;curis&eacute;e en attendant son chargement en vue du transport.</p>  <h5>Transport par route</h5>  <p>Tout v&eacute;hicule utilis&eacute; pour le transport routier des mati&egrave;res nucl&eacute;aires de cat&eacute;gorie I devrait &ecirc;tre &eacute;quip&eacute; et charg&eacute; de mani&egrave;re &agrave; pr&eacute;venir le sabotage ou le vol de la cargaison pendant le transport. Le conducteur du v&eacute;hicule devrait &ecirc;tre accompagn&eacute; d&rsquo;un garde arm&eacute;, et le v&eacute;hicule de transport lui-m&ecirc;me devrait &ecirc;tre escort&eacute; par un v&eacute;hicule s&eacute;par&eacute; dans lequel se trouvent un conducteur et un ou plusieurs gardes arm&eacute;s. Le v&eacute;hicule d&rsquo;escorte devrait assurer une surveillance constante de l&rsquo;exp&eacute;dition. La cargaison devrait &ecirc;tre arrim&eacute;e solidement au v&eacute;hicule de transport.</p>  <h5>Transport par chemin de fer</h5>  <p>Pendant leur transport par chemin de fer, les mati&egrave;res nucl&eacute;aires de cat&eacute;gorie I devraient &ecirc;tre transport&eacute;es dans un wagon affect&eacute; express&eacute;ment au transport des marchandises. Le wagon devrait &ecirc;tre verrouill&eacute; et scell&eacute;. Deux ou plusieurs gardes devraient maintenir une surveillance constante du wagon contenant les mati&egrave;res nucl&eacute;aires en voyageant dans un wagon adjacent. &Agrave; intervalles r&eacute;guliers, les gardes devraient v&eacute;rifier l&rsquo;int&eacute;grit&eacute; des serrures et des sceaux du wagon.</p>  <h5>Transport par navire</h5>  <p>Pendant leur transport par navire, les mati&egrave;res nucl&eacute;aires de cat&eacute;gorie I devraient se trouver dans un conteneur verrouill&eacute; et scell&eacute; qui est solidement arrim&eacute; &agrave; un navire affect&eacute; au transport de marchandises. Deux ou plusieurs gardes devraient accompagner l&rsquo;exp&eacute;dition et en assurer une surveillance constante. &Agrave; intervalles r&eacute;guliers, les gardes devraient v&eacute;rifier l&rsquo;int&eacute;grit&eacute; des serrures et des sceaux du conteneur.</p>  <h5>Transport par air</h5>  <p>Pendant leur transport par air, les mati&egrave;res nucl&eacute;aires de cat&eacute;gorie I devraient se trouver dans un conteneur verrouill&eacute; et scell&eacute; dans un avion nolis&eacute; affect&eacute; express&eacute;ment au transport de marchandises. Deux ou plusieurs gardes devraient accompagner l&rsquo;exp&eacute;dition et en assurer une surveillance constante. &Agrave; intervalles r&eacute;guliers, les gardes devraient v&eacute;rifier l&rsquo;int&eacute;grit&eacute; des serrures et des sceaux du conteneur.</p>
<h4>7.2.2 Mesures pour le transport des mati&egrave;res nucl&eacute;aires de cat&eacute;gorie II</h4>  <h5>Escortes</h5>  <p>Les exp&eacute;ditions de mati&egrave;res nucl&eacute;aires de cat&eacute;gorie II devraient &ecirc;tre accompagn&eacute;es d&rsquo;une ou plusieurs escortes, par exemple des gardes de s&eacute;curit&eacute; nucl&eacute;aire autoris&eacute;s conform&eacute;ment au paragraphe 18(2) du RSN. Ces escortes devraient assurer la surveillance constante de l&rsquo;exp&eacute;dition en voyageant dans le v&eacute;hicule de transport des marchandises ou dans un v&eacute;hicule d&rsquo;accompagnement.</p>  <h5>Communications</h5>  <p>L&rsquo;exp&eacute;diteur de mati&egrave;res nucl&eacute;aires de cat&eacute;gorie II devrait, avant l&rsquo;exp&eacute;dition pr&eacute;vue, fournir au destinataire les renseignements suivants : les caract&eacute;ristiques des mati&egrave;res nucl&eacute;aires, les modes de transport pr&eacute;vus, ainsi que la date, l&rsquo;heure et le lieu d&rsquo;arriv&eacute;e pr&eacute;vus.</p>  <p>Avant le d&eacute;but du transport, l&rsquo;exp&eacute;diteur devrait confirmer que le destinataire est dispos&eacute; &agrave; recevoir l&rsquo;exp&eacute;dition et pr&ecirc;t pour celle-ci. &Agrave; l&rsquo;arriv&eacute;e de l&rsquo;exp&eacute;dition, le destinataire devrait en informer imm&eacute;diatement l&rsquo;exp&eacute;diteur. Si l&rsquo;exp&eacute;dition n&rsquo;arrive pas &agrave; destination dans un d&eacute;lai convenu &agrave; l&rsquo;avance par l&rsquo;exp&eacute;diteur et le destinataire, le destinataire devrait informer imm&eacute;diatement l&rsquo;exp&eacute;diteur de l&rsquo;incident.</p>  <p>Pendant le transport de mati&egrave;res nucl&eacute;aires de cat&eacute;gorie II, l&rsquo;escorte devrait demeurer en contact fr&eacute;quent avec l&rsquo;exp&eacute;diteur, le destinataire, les autorit&eacute;s locales et la force d&rsquo;intervention le long de l&rsquo;itin&eacute;raire de transport. Lors de la planification de l&rsquo;exp&eacute;dition, l&rsquo;exp&eacute;diteur devrait &eacute;tablir un plan d&rsquo;action en cas de perte de communication pendant l&rsquo;exp&eacute;dition. La mise en place d&rsquo;un centre de contr&ocirc;le de s&eacute;curit&eacute; du transport (ou local de surveillance, le cas &eacute;ch&eacute;ant) devrait &ecirc;tre envisag&eacute;e.</p>  <p>En cas de perte ou de vol d&rsquo;une exp&eacute;dition de mati&egrave;res nucl&eacute;aires, le titulaire de permis doit, conform&eacute;ment &agrave; l&rsquo;alin&eacute;a 27b) de la <em>Loi sur la s&ucirc;ret&eacute; et la r&eacute;glementation nucl&eacute;aires</em> et &agrave; l&rsquo;alin&eacute;a 29(1)a) du RGSRN, pr&eacute;senter imm&eacute;diatement un rapport pr&eacute;liminaire &agrave; la CCSN sur l&rsquo;emplacement et les circonstances de la situation qui d&eacute;crit toute mesure prise par le titulaire de permis ou qu&rsquo;il se propose de prendre &agrave; ce sujet.</p>  <h5>Serrures et sceaux</h5>  <p>Les colis qui contiennent des mati&egrave;res nucl&eacute;aires de cat&eacute;gorie II devraient &ecirc;tre transport&eacute;s dans des v&eacute;hicules ou conteneurs ferm&eacute;s, verrouill&eacute;s et scell&eacute;s. Au besoin, les colis qui contiennent des mati&egrave;res nucl&eacute;aires de cat&eacute;gorie II et qui p&egrave;sent plus de 2 000 kg peuvent, s&rsquo;ils sont verrouill&eacute;s, scell&eacute;s et arrim&eacute;s au v&eacute;hicule ou conteneur, &ecirc;tre transport&eacute;s sur un v&eacute;hicule ouvert. L&rsquo;int&eacute;grit&eacute; des serrures et des sceaux du colis devrait &ecirc;tre v&eacute;rifi&eacute;e avant le d&eacute;part, pendant le transport et &agrave; l&rsquo;arriv&eacute;e &agrave; destination, afin de d&eacute;tecter, en temps utile, toute alt&eacute;ration.</p>  <h5>Mesures de s&eacute;curit&eacute;</h5>  <p>Avant d&rsquo;exp&eacute;dier des mati&egrave;res nucl&eacute;aires de cat&eacute;gorie II, l&rsquo;exp&eacute;diteur devrait s&rsquo;assurer que le transporteur choisi est au courant des mesures de s&eacute;curit&eacute; physique requises, et qu&rsquo;il peut s&rsquo;y conformer. Lorsqu&rsquo;il traite avec des transporteurs tiers, l&rsquo;exp&eacute;diteur devrait leur souligner les exigences de confidentialit&eacute; concernant les questions relatives aux exp&eacute;ditions de mati&egrave;res nucl&eacute;aires de cat&eacute;gorie II, et sur la n&eacute;cessit&eacute; pour le transporteur de s&rsquo;assurer que toutes les personnes plac&eacute;es sous son contr&ocirc;le et qui participeront au transport pr&eacute;vu de mati&egrave;res nucl&eacute;aires sont dignes de confiance.</p>  <p>On devrait r&eacute;duire au minimum le nombre de transferts de marchandises pendant l&rsquo;exp&eacute;dition de mati&egrave;res nucl&eacute;aires de cat&eacute;gorie II, ainsi que la dur&eacute;e de leur transport.</p>  <h5>Transport par route</h5>  <p>Avant qu&rsquo;un v&eacute;hicule ne soit charg&eacute; de mati&egrave;res nucl&eacute;aires de cat&eacute;gorie II, le personnel qualifi&eacute; devrait proc&eacute;der &agrave; une fouille de s&eacute;curit&eacute; rigoureuse du v&eacute;hicule pour s&rsquo;assurer qu&rsquo;il n&rsquo;y a pas eu de tentative de sabotage de celui-ci. Imm&eacute;diatement apr&egrave;s la fouille, le v&eacute;hicule devrait &ecirc;tre plac&eacute; dans une zone s&eacute;curis&eacute;e en attendant son chargement pour le transport. Lorsque le v&eacute;hicule de transport est charg&eacute; de mati&egrave;res nucl&eacute;aires de cat&eacute;gorie II et qu&rsquo;il est en transit, il devrait &ecirc;tre verrouill&eacute; et scell&eacute; lorsqu&rsquo;il n&rsquo;est pas en mouvement et il ne devrait jamais &ecirc;tre laiss&eacute; sans surveillance.</p>  <h5>Transport par chemin de fer</h5>  <p>Pendant leur transport par chemin de fer, les mati&egrave;res nucl&eacute;aires de cat&eacute;gorie II devraient &ecirc;tre transport&eacute;es dans un wagon affect&eacute; express&eacute;ment au transport des marchandises, ou dans un wagon de marchandises rattach&eacute; &agrave; un train de voyageurs. Le wagon devrait &ecirc;tre verrouill&eacute; et scell&eacute;.</p>  <h5>Transport par navire</h5>  <p>Pendant leur transport par navire, les mati&egrave;res nucl&eacute;aires de cat&eacute;gorie II devraient se trouver dans un conteneur verrouill&eacute; et scell&eacute;.</p>  <h5>Transport par air</h5>  <p>Pendant leur transport par air, les mati&egrave;res nucl&eacute;aires de cat&eacute;gorie II devraient se trouver dans un conteneur verrouill&eacute; et scell&eacute; dans un avion nolis&eacute; affect&eacute; express&eacute;ment au transport de marchandises.</p>
<h4>7.2.3 Mesures pour le transport des mati&egrave;res nucl&eacute;aires de cat&eacute;gorie III</h4>  <h5>Communications</h5>  <p>L&rsquo;exp&eacute;diteur de mati&egrave;res nucl&eacute;aires de cat&eacute;gorie III devrait, avant l&rsquo;exp&eacute;dition pr&eacute;vue, fournir au destinataire les renseignements suivants : les caract&eacute;ristiques des mati&egrave;res nucl&eacute;aires, les modes de transport pr&eacute;vus, ainsi que la date, l&rsquo;heure et le lieu d&rsquo;arriv&eacute;e pr&eacute;vus.</p>  <p>Avant le d&eacute;but du transport, l&rsquo;exp&eacute;diteur devrait confirmer que le destinataire est dispos&eacute; &agrave; recevoir l&rsquo;exp&eacute;dition et pr&ecirc;t pour celle-ci. &Agrave; l&rsquo;arriv&eacute;e de l&rsquo;exp&eacute;dition, le destinataire devrait en informer imm&eacute;diatement l&rsquo;exp&eacute;diteur. Si l&rsquo;exp&eacute;dition n&rsquo;arrive pas &agrave; destination dans un d&eacute;lai convenu &agrave; l&rsquo;avance par l&rsquo;exp&eacute;diteur et le destinataire, le destinataire devrait informer imm&eacute;diatement l&rsquo;exp&eacute;diteur de l&rsquo;incident.</p>  <p>En cas de perte ou de vol d&rsquo;une exp&eacute;dition de mati&egrave;res nucl&eacute;aires, le titulaire de permis doit, conform&eacute;ment &agrave; l&rsquo;alin&eacute;a 27b) de la LSRN et &agrave; l&rsquo;alin&eacute;a 29(1)a) du RGSRN, pr&eacute;senter imm&eacute;diatement un rapport pr&eacute;liminaire &agrave; la CCSN sur l&rsquo;emplacement et les circonstances de la situation qui d&eacute;crit toute mesure prise par le titulaire de permis ou qu&rsquo;il se propose de prendre &agrave; ce sujet.</p>  <h5>Serrures et sceaux</h5>  <p>Les colis qui contiennent des mati&egrave;res nucl&eacute;aires de cat&eacute;gorie III devraient &ecirc;tre transport&eacute;s dans des v&eacute;hicules ferm&eacute;s, verrouill&eacute;s et scell&eacute;s, ou dans des conteneurs verrouill&eacute;s et scell&eacute;s, lorsque cela est possible.</p>  <h5>Mesures de s&eacute;curit&eacute;</h5>  <p>Avant d&rsquo;exp&eacute;dier des mati&egrave;res nucl&eacute;aires de cat&eacute;gorie III, l&rsquo;exp&eacute;diteur devrait s&rsquo;assurer que le transporteur choisi est au courant des mesures de s&eacute;curit&eacute; physique, et qu&rsquo;il peut s&rsquo;y conformer. Lorsqu&rsquo;il traite avec des transporteurs tiers, l&rsquo;exp&eacute;diteur devrait leur souligner les exigences de confidentialit&eacute; concernant les questions relatives aux exp&eacute;ditions de mati&egrave;res nucl&eacute;aires de cat&eacute;gorie III, et sur la n&eacute;cessit&eacute; pour le transporteur de s&rsquo;assurer que toutes les personnes plac&eacute;es sous son contr&ocirc;le et qui participeront au transport pr&eacute;vu de mati&egrave;res nucl&eacute;aires sont dignes de confiance.</p>  <p>On devrait r&eacute;duire au minimum le nombre de transferts de marchandises pendant l&rsquo;exp&eacute;dition de mati&egrave;res nucl&eacute;aires de cat&eacute;gorie III, ainsi que la dur&eacute;e de leur transport actif.</p>  <h5>Transport par route</h5>  <p>Avant qu&rsquo;un v&eacute;hicule ne soit charg&eacute; de mati&egrave;res nucl&eacute;aires de cat&eacute;gorie III, le personnel qualifi&eacute; devrait proc&eacute;der &agrave; une fouille de s&eacute;curit&eacute; rigoureuse du v&eacute;hicule pour s&rsquo;assurer qu&rsquo;il n&rsquo;y a pas eu de tentative de sabotage de celui-ci. Imm&eacute;diatement apr&egrave;s la fouille de s&eacute;curit&eacute; du v&eacute;hicule, celui ci devrait &ecirc;tre plac&eacute; dans une zone s&eacute;curis&eacute;e en attendant son chargement pour le transport. Lorsque le v&eacute;hicule de transport est charg&eacute; de mati&egrave;res nucl&eacute;aires de cat&eacute;gorie III et qu&rsquo;il est en transit, il devrait &ecirc;tre verrouill&eacute; et scell&eacute; lorsqu&rsquo;il n&rsquo;est pas en mouvement et il ne devrait jamais &ecirc;tre laiss&eacute; sans surveillance.</p>  <h5>Transport par chemin de fer</h5>  <p>Pendant leur transport par chemin de fer, les mati&egrave;res nucl&eacute;aires de cat&eacute;gorie III devraient &ecirc;tre transport&eacute;es dans un wagon affect&eacute; express&eacute;ment au transport des marchandises, ou dans un wagon de marchandises rattach&eacute; &agrave; un train de voyageurs. Le wagon devrait &ecirc;tre verrouill&eacute; et scell&eacute;.</p>  <h5>Transport par navire</h5>  <p>Pendant leur transport par navire, les mati&egrave;res nucl&eacute;aires de cat&eacute;gorie III devraient se trouver dans un conteneur verrouill&eacute; et scell&eacute;.</p>  <h5>Transport par air</h5>  <p>Pendant leur transport par air, les mati&egrave;res nucl&eacute;aires de cat&eacute;gorie III devraient se trouver dans un conteneur verrouill&eacute; et scell&eacute; dans un avion nolis&eacute; affect&eacute; express&eacute;ment au transport de marchandises.</p>
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
<h2 id="sec8">8. Plan de s&eacute;curit&eacute; du transport</h2>
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
<h3 id="sec8-1">8.1 Contenu</h3>  <p>Afin de se conformer &agrave; l&rsquo;article 5 du <a href="http://laws.justice.gc.ca/fra/reglements/DORS-2000-209/index.html">RSN</a>, une demande de permis de transport de mati&egrave;res nucl&eacute;aires de cat&eacute;gorie I, II ou III doit comprendre un plan &eacute;crit de s&eacute;curit&eacute; du transport, et contenir les renseignements requis par les alin&eacute;as 5a) &agrave; h) dudit r&egrave;glement. L&rsquo;orientation concernant les renseignements qui doivent &ecirc;tre inclus dans le plan, pour r&eacute;pondre &agrave; ces exigences, est pr&eacute;sent&eacute;e ci-dessous. De plus, la section 7 de ce document recommande des mesures qui permettent d&rsquo;assurer la protection des mati&egrave;res nucl&eacute;aires pendant le transport et que le demandeur pourrait trouver utiles lors de l&rsquo;&eacute;laboration d&rsquo;un plan de s&eacute;curit&eacute; du transport.</p>  <h5>Orientation</h5>  <p>L&rsquo;objectif premier d&rsquo;un plan de s&eacute;curit&eacute; du transport est de s&rsquo;assurer que les mati&egrave;res nucl&eacute;aires &agrave; transporter b&eacute;n&eacute;ficieront d&rsquo;une protection physique ad&eacute;quate contre toutes menaces pouvant survenir au cours du transport. Par cons&eacute;quent, les mesures de s&eacute;curit&eacute; pr&eacute;vues dans le plan propos&eacute; devraient &ecirc;tre &eacute;tablies en fonction de la cat&eacute;gorie de mati&egrave;res nucl&eacute;aires &agrave; transporter et des menaces qui y sont associ&eacute;es. En d&rsquo;autres termes, les mesures de s&eacute;curit&eacute; pour le transport des mati&egrave;res nucl&eacute;aires de cat&eacute;gorie I devraient g&eacute;n&eacute;ralement &ecirc;tre plus strictes que pour le transport des mati&egrave;res nucl&eacute;aires de cat&eacute;gorie II, et celles pour le transport des mati&egrave;res nucl&eacute;aires de cat&eacute;gorie II devraient &ecirc;tre plus strictes que les mesures pour le transport des mati&egrave;res nucl&eacute;aires de cat&eacute;gorie III.</p>  <p>Lorsqu&rsquo;il pr&eacute;sente une demande de permis de transport de mati&egrave;res nucl&eacute;aires de cat&eacute;gorie I, II ou III, le demandeur peut acc&eacute;l&eacute;rer l&rsquo;examen et le traitement de sa demande par la CCSN en pr&eacute;sentant un plan de s&eacute;curit&eacute; du transport qui suit l&rsquo;annexe D de ce document et utilise les m&ecirc;mes rubriques que les sections 8.1.1 &agrave; 8.1.8 ci-dessous.</p>  <p>Dans tout le plan, le demandeur devrait, dans la mesure du possible, nommer les personnes cl&eacute;s en cause, fournir leur poste et d&eacute;crire leurs r&ocirc;les, responsabilit&eacute;s, pouvoirs et obligations de rendre compte.</p>
<h4>8.1.1 Renseignements administratifs</h4>  <p>Les renseignements administratifs devraient comprendre :</p>
<ul>
<li>le nom l&eacute;gal complet et l&rsquo;adresse d&rsquo;affaires du demandeur qui pr&eacute;sente le plan &agrave; l&rsquo;appui d&rsquo;une demande de permis conform&eacute;ment &agrave; l&rsquo;article 5 du RSN</li>
<li>le nom l&eacute;gal complet et l&rsquo;adresse d&rsquo;affaires de toute personne qui est autoris&eacute;e &agrave; agir comme repr&eacute;sentant du demandeur dans les discussions avec la CCSN concernant les questions relatives au plan</li>
<li>les num&eacute;ros de t&eacute;l&eacute;phone et de t&eacute;l&eacute;copieur, ou le courriel, permettant de communiquer avec le demandeur de permis ou avec les personnes habilit&eacute;es &agrave; agir en son nom concernant les questions relatives au plan pendant les heures normales de travail</li>
<li>une description de la demande de permis vis&eacute;e par le plan</li>
</ul>
<h4>8.1.2 Description des mati&egrave;res nucl&eacute;aires</h4>  <p>Conform&eacute;ment &agrave; l&rsquo;alin&eacute;a 5a) du RSN, la description des mati&egrave;res nucl&eacute;aires &agrave; transporter devrait comprendre les renseignements suivants :</p>
<ul>
<li>le nom de la mati&egrave;re nucl&eacute;aire</li>
<li>la cat&eacute;gorie et la quantit&eacute; de la mati&egrave;re nucl&eacute;aire (masse brute, masse nette et masse de mati&egrave;re nucl&eacute;aire)</li>
<li>les propri&eacute;t&eacute;s chimiques et physiques de la mati&egrave;re nucl&eacute;aire</li>
<li>la composition isotopique de la mati&egrave;re nucl&eacute;aire</li>
<li>le degr&eacute; d&rsquo;enrichissement ou de dilution de l&rsquo;uranium 235, de l&rsquo;uranium 233 ou du plutonium</li>
<li>le niveau de rayonnement, en Gy/h, de l&rsquo;ensemble de l&rsquo;exp&eacute;dition ainsi que de ses diff&eacute;rentes parties</li>
</ul>
<h4>8.1.3 &Eacute;valuation des menaces</h4>  <p>En vertu de l&rsquo;alin&eacute;a 5b) du RSN, un plan de s&eacute;curit&eacute; du transport doit comprendre &laquo; une &eacute;valuation de la menace, &agrave; savoir la nature, la possibilit&eacute; et les cons&eacute;quences des actes ou des &eacute;v&eacute;nements qui peuvent compromettre la s&eacute;curit&eacute; des renseignements r&eacute;glement&eacute;s ou des mati&egrave;res nucl&eacute;aires &raquo;.</p>  <h5>Orientation</h5>  <p>Toutes les menaces cr&eacute;dibles &agrave; la s&eacute;curit&eacute; de l&rsquo;exp&eacute;dition devraient &ecirc;tre d&eacute;termin&eacute;es. L&rsquo;&eacute;valuation des menaces pour les exp&eacute;ditions de mati&egrave;res de cat&eacute;gories I et II devrait &ecirc;tre plus approfondie que pour les exp&eacute;ditions de mati&egrave;res de cat&eacute;gorie III.</p>  <p>La CCSN s&rsquo;attend &agrave; ce que les demandeurs, lorsqu&rsquo;ils &eacute;valuent les menaces pour le transport propos&eacute; de mati&egrave;res nucl&eacute;aires de cat&eacute;gorie I, II ou III, communiquent avec les corps policiers comp&eacute;tents pour d&eacute;terminer si ces organismes estiment que les menaces sont &eacute;lev&eacute;es, moyennes ou faibles, et que les demandeurs tiennent compte de la r&eacute;ponse re&ccedil;ue dans l&rsquo;&eacute;valuation globale.</p>  <p>La CCSN re&ccedil;oit des organismes f&eacute;d&eacute;raux responsables de la s&eacute;curit&eacute; des &eacute;valuations qui indiquent les menaces criminelles, extr&eacute;mistes ou terroristes connues touchant le transport de mati&egrave;res nucl&eacute;aires. Par cons&eacute;quent, le demandeur, lorsqu&rsquo;il pr&eacute;pare une demande de permis pour le transport de mati&egrave;res nucl&eacute;aires de cat&eacute;gorie I, II ou III, devrait communiquer avec la CCSN pour d&eacute;terminer si celle-ci a des renseignements particuliers qui devraient &ecirc;tre pris en compte dans l&rsquo;&eacute;valuation des menaces par le demandeur.</p>
<h4>8.1.4 Description du moyen de transport</h4>  <p>L&rsquo;alin&eacute;a 5c) du RSN exige que le plan de s&eacute;curit&eacute; du transport comporte &laquo; une description du moyen de transport &raquo; pour le transport envisag&eacute;. Cette description devrait couvrir le transport de l&rsquo;exp&eacute;dition depuis le moment o&ugrave; il quitte son lieu d&rsquo;origine jusqu&rsquo;&agrave; ce qu&rsquo;il atteigne sa destination pr&eacute;vue. Elle devrait indiquer comment les mati&egrave;res nucl&eacute;aires seront confin&eacute;es ou s&eacute;curis&eacute;es pendant le transport, y compris le type, la conception, la taille et le poids de tout conteneur qui sera utilis&eacute;, ainsi que les mesures prises pour arrimer le conteneur au v&eacute;hicule de transport.</p>  <p>Si le moyen de transport propos&eacute; n&eacute;cessite plus d&rsquo;un mode de transport et plusieurs transferts des mati&egrave;res nucl&eacute;aires &ndash; par exemple, par route vers un terminal ferroviaire, suivi du transport ferroviaire pour l&rsquo;&eacute;tape ult&eacute;rieure du voyage, et enfin par route jusqu&rsquo;au lieu de destination pr&eacute;vu &ndash; les d&eacute;tails de l&rsquo;itin&eacute;raire devraient &ecirc;tre fournis pour chaque segment du trajet. Ces d&eacute;tails devraient comprendre la date, l&rsquo;heure et le lieu des transferts pr&eacute;vus, ainsi que le nom des personnes qui seront charg&eacute;es d&rsquo;assurer la bonne ex&eacute;cution des transferts, et de v&eacute;rifier l&rsquo;int&eacute;grit&eacute; des exp&eacute;ditions.</p>  <p>Lorsque l&rsquo;entreposage provisoire des mati&egrave;res nucl&eacute;aires peut &ecirc;tre n&eacute;cessaire pendant le transport, les mesures de s&eacute;curit&eacute; propos&eacute;es pour le transport devraient pr&eacute;voir l&rsquo;entreposage provisoire et s&eacute;curitaire des mati&egrave;res, comme il est indiqu&eacute; &agrave; la section 8.1.5.</p>  <p>Lorsque l&rsquo;entreposage provisoire des mati&egrave;res nucl&eacute;aires peut &ecirc;tre n&eacute;cessaire pendant le transport, les mesures de s&eacute;curit&eacute; propos&eacute;es pour le transport devraient pr&eacute;voir l&rsquo;entreposage provisoire et s&eacute;curitaire du v&eacute;hicule et des mati&egrave;res transport&eacute;es, comme il est indiqu&eacute; &agrave; la section 8.1.5.</p>
<h4>8.1.5 Mesures de s&eacute;curit&eacute; propos&eacute;es</h4>  <p>Conform&eacute;ment &agrave; l&rsquo;alin&eacute;a 5d) du RSN, la description des mesures de s&eacute;curit&eacute; propos&eacute;es doit &ecirc;tre incluse dans le plan de s&eacute;curit&eacute; du transport.</p>  <h5>Orientation</h5>  <p>Pour assurer une protection ad&eacute;quate pendant le transport, les mesures de s&eacute;curit&eacute; propos&eacute;es devraient &ecirc;tre adapt&eacute;es aux circonstances particuli&egrave;res. Ces mesures devraient tenir compte de la cat&eacute;gorie des mati&egrave;res nucl&eacute;aires &agrave; transporter, de la taille et du type d&rsquo;exp&eacute;dition, de la distance et du type de terrain &agrave; parcourir, du mode de transport, des r&eacute;sultats de l&rsquo;&eacute;valuation des menaces et des pr&eacute;occupations du public. Par cons&eacute;quent, les mesures de s&eacute;curit&eacute; propos&eacute;es suivantes devraient normalement d&eacute;crire :</p>
<ul>
<li>la cat&eacute;gorie des mati&egrave;res nucl&eacute;aires (I, II ou III) et la n&eacute;cessit&eacute; de les sceller ou non</li>
<li>la pr&eacute;sence requise, ou non, de gardes arm&eacute;s ou non arm&eacute;s et de personnel ou de v&eacute;hicules d&rsquo;escorte</li>
<li>le nombre de gardes arm&eacute;s ou non arm&eacute;s et de personnel ou de v&eacute;hicules d&rsquo;escorte qui seront utilis&eacute;s</li>
<li>les dispositions concernant le soutien possible d&rsquo;une force d&rsquo;intervention le long de l&rsquo;itin&eacute;raire de transport</li>
<li>toute proc&eacute;dure permettant, pendant le transport, &agrave; toute autorit&eacute; ou tout organisme de communiquer avec la force d&rsquo;intervention</li>
<li>les mesures concernant les fouilles de s&eacute;curit&eacute; rigoureuses du v&eacute;hicule de transport propos&eacute; avant le transport des mati&egrave;res nucl&eacute;aires, afin de d&eacute;tecter toute tentative de sabotage ou autre menace</li>
<li>les mesures d&rsquo;urgence en cas d&rsquo;&eacute;v&eacute;nements comme une panne m&eacute;canique d&rsquo;un v&eacute;hicule de transport ou d&rsquo;escorte, ou si l&rsquo;exp&eacute;dition n&rsquo;arrive pas &agrave; destination &agrave; l&rsquo;heure pr&eacute;vue</li>
<li>la proc&eacute;dure &agrave; suivre pendant tout arr&ecirc;t pr&eacute;vu, ou retard impr&eacute;vu, pendant le transport</li>
<li>les mesures &agrave; mettre en place dans les ports, les terminaux de fret a&eacute;rien ou d&rsquo;autres endroits au Canada o&ugrave; les mati&egrave;res nucl&eacute;aires doivent &ecirc;tre entrepos&eacute;es et s&eacute;curis&eacute;es pendant le transport</li>
</ul>  <p>Les mesures de s&eacute;curit&eacute; envisag&eacute;es pour l&rsquo;entreposage provisoire des mati&egrave;res nucl&eacute;aires durant le transport, y compris celles visant les arr&ecirc;ts pour la nuit, devraient g&eacute;n&eacute;ralement &ecirc;tre comparables &agrave; celles qui entourent l&rsquo;entreposage de mati&egrave;res nucl&eacute;aires de m&ecirc;me cat&eacute;gorie &agrave; une installation nucl&eacute;aire autoris&eacute;e. Les arrangements connexes devraient en outre prendre en compte les particularit&eacute;s du lieu d&rsquo;entreposage provisoire et l&rsquo;attrait que peut pr&eacute;senter cette mati&egrave;re nucl&eacute;aire pour les voleurs ou les terroristes.</p>  <p>Si le transport de la mati&egrave;re nucl&eacute;aire s&rsquo;&eacute;chelonne sur plus d&rsquo;une journ&eacute;e, le demandeur devrait notamment pr&eacute;voir que les arr&ecirc;ts pour la nuit s&rsquo;effectueront dans des lieux d&eacute;termin&eacute;s, o&ugrave; le v&eacute;hicule de transport pourra &ecirc;tre immobilis&eacute; et gar&eacute; &agrave; l&rsquo;int&eacute;rieur d&rsquo;une zone bien prot&eacute;g&eacute;e et surveill&eacute;e de fa&ccedil;on appropri&eacute;e. Les dispositions visant &agrave; pr&eacute;venir le vol des mati&egrave;res nucl&eacute;aires devraient entre autres faire &eacute;tat des m&eacute;thodes qui seront utilis&eacute;es pour arrimer le chargement au v&eacute;hicule de transport.  <p>Au-del&agrave; des dispositions portant sur les arr&ecirc;ts pr&eacute;vus dans des lieux d&eacute;termin&eacute;s, le plan devrait d&eacute;crire les mesures de s&eacute;curit&eacute; qui seront mises en &oelig;uvre dans l&rsquo;&eacute;ventualit&eacute; o&ugrave; des retards attribuables &agrave; des risques d&rsquo;origine naturelle ou autre surviendraient pendant le transport.</p>  <p>Dans ses pr&eacute;paratifs, le demandeur devrait envisager la possibilit&eacute; de pr&eacute;occupations publiques pendant le transport propos&eacute; qui pourraient entra&icirc;ner une couverture m&eacute;diatique n&eacute;gative ou des protestations publiques et des manifestations. Il devrait aussi prendre les mesures qui s&rsquo;imposent pour y faire face. Il devrait donc pr&eacute;voir des mesures qui lui permettront de maintenir des communications efficaces avec les forces d&rsquo;intervention locales et provinciales, afin d&rsquo;&ecirc;tre avis&eacute; tr&egrave;s t&ocirc;t des fermetures de routes et d&eacute;tours qu&rsquo;elles auront &eacute;tablies pour faire face &agrave; de tels &eacute;v&eacute;nements.</p>
<h4>8.1.6 Arrangements en mati&egrave;re de communication</h4>  <p>Selon l&rsquo;alin&eacute;a 5e) du RSN, le plan de s&eacute;curit&eacute; du transport contiendra les arrangements pris pour assurer les communications le long de l&rsquo;itin&eacute;raire. Ces arrangements pourront notamment porter sur les communications avec :</p>
<ul>
<li>le titulaire de permis</li>
<li>le conducteur du v&eacute;hicule transportant la mati&egrave;re nucl&eacute;aire</li>
<li>le destinataire de la mati&egrave;re nucl&eacute;aire</li>
<li>toute force d&rsquo;intervention le long de l&rsquo;itin&eacute;raire de transport</li>
<li>tout centre de contr&ocirc;le de la s&eacute;curit&eacute; pour le transport (ou local de surveillance, le cas &eacute;ch&eacute;ant) &eacute;tabli aux fins de l&rsquo;op&eacute;ration</li>
</ul>  <p>Si, durant le transport de mati&egrave;res nucl&eacute;aires de cat&eacute;gorie II ou III, le demandeur de permis envisage d&rsquo;utiliser le t&eacute;l&eacute;phone cellulaire pour ses communications, il veillera &agrave; limiter et chiffrer, dans la mesure du possible, ce type de communication. Quiconque prend part au transport ou &agrave; la s&eacute;curit&eacute; des mati&egrave;res nucl&eacute;aires doit bien savoir que les liaisons non chiffr&eacute;es par cellulaire ne sont pas prot&eacute;g&eacute;es. Par cons&eacute;quent, il est d&eacute;conseill&eacute; d&rsquo;avoir recours &agrave; des liaisons par cellulaire non chiffr&eacute;es pour communiquer des renseignements concernant le transport de mati&egrave;res nucl&eacute;aires de cat&eacute;gorie I. Dans de tels cas, l&rsquo;utilisation d&rsquo;un poste &eacute;metteur-r&eacute;cepteur permettant de transmettre des messages chiffr&eacute;s offre une meilleure protection.</p>  <p>N&eacute;anmoins, peu importe que l&rsquo;on utilise un cellulaire ou un poste &eacute;metteur-r&eacute;cepteur, il est important de veiller &agrave; ce que la couverture des communications couvre tous les points le long de l&rsquo;itin&eacute;raire. Dans les r&eacute;gions &eacute;loign&eacute;es, il peut y avoir des interruptions de communication. S&rsquo;il est impossible d&rsquo;&eacute;viter de telles interruptions le long de l&rsquo;itin&eacute;raire, il conviendra de proposer d&rsquo;autres arrangements en mati&egrave;re de communications. Les syst&egrave;mes GPS et de positionnement par satellite assurent un suivi et une surveillance continus dans les zones o&ugrave; la couverture cellulaire est limit&eacute;e ou inexistante.</p>  <p>Pour chacun des principaux moyens de communication envisag&eacute;s, le plan de s&eacute;curit&eacute; du transport devrait d&eacute;crire les mesures appropri&eacute;es qui pourraient &ecirc;tre mises en &oelig;uvre en cas d&rsquo;urgence. Par exemple, s&rsquo;il envisage d&rsquo;utiliser le t&eacute;l&eacute;phone cellulaire, le demandeur devrait fournir plusieurs appareils et des sources d&rsquo;alimentation &eacute;lectrique suppl&eacute;mentaires.</p>  <p>Le demandeur qui pr&eacute;voit exp&eacute;dier r&eacute;guli&egrave;rement des mati&egrave;res nucl&eacute;aires pourrait envisager de mettre sur pied un centre de contr&ocirc;le de la s&eacute;curit&eacute; pour le transport, lequel ne serait g&eacute;n&eacute;ralement op&eacute;rationnel que pendant de telles op&eacute;rations. S&rsquo;il opte pour cette solution, il devrait toutefois pr&eacute;voir que le personnel affect&eacute; &agrave; ce centre devra &ecirc;tre form&eacute; aux techniques de surveillance appropri&eacute;es et bien conna&icirc;tre les arrangements pris en mati&egrave;re de communications avec les intervenants concern&eacute;s.</p>  <p>Le plan de s&eacute;curit&eacute; du transport devrait en outre indiquer les mesures qui seront prises en cas d&rsquo;interruption des communications avec le v&eacute;hicule transportant la mati&egrave;re nucl&eacute;aire. Le demandeur peut ainsi envisager l&rsquo;utilisation de divers dispositifs de suivi &eacute;lectronique, voire satellitaire &ndash; p. ex., transpondeurs dissimul&eacute;s dans le v&eacute;hicule ou dans l&rsquo;exp&eacute;dition m&ecirc;me &ndash; qui permettront de rep&eacute;rer le v&eacute;hicule en cas d&rsquo;interruption des communications.</p>  <p>Les arrangements en mati&egrave;re de communications pris avec les forces d&rsquo;intervention le long de l&rsquo;itin&eacute;raire devraient notamment pr&eacute;ciser que les forces d&rsquo;intervention comp&eacute;tentes seront avis&eacute;es de tout arr&ecirc;t pour la nuit pr&eacute;vu ou impr&eacute;vu, et qu&rsquo;elles seront inform&eacute;es du lieu exact de l&rsquo;arr&ecirc;t.</p>
<h4>8.1.7 Arrangements avec les forces d&rsquo;intervention</h4>  <p>Selon l&rsquo;alin&eacute;a 5f) du RSN, le plan de s&eacute;curit&eacute; du transport d&eacute;crira les arrangements qui seront pris entre le titulaire de permis et toute force d&rsquo;intervention le long de l&rsquo;itin&eacute;raire.</p>  <h5>Orientation</h5>  <p>Les arrangements propos&eacute;s par le demandeur de permis devraient pr&eacute;ciser les mesures qui seront prises pour &eacute;tablir, conform&eacute;ment &agrave; la section 8.1.6 ci-dessus, des communications efficaces avec les forces d&rsquo;intervention ou agences comp&eacute;tentes, et qui lui permettront notamment de les aviser au pr&eacute;alable de l&rsquo;op&eacute;ration de transport.</p>  <p>Dans le cadre de tels arrangements, le demandeur pourrait ainsi envisager de faire appel &agrave; une force d&rsquo;intervention pr&eacute;cise &ndash; p. ex., les corps policiers locaux ou une agence de s&eacute;curit&eacute; priv&eacute;e &ndash; pour fournir une escorte arm&eacute;e pendant le transport. Si plus d&rsquo;une force d&rsquo;intervention sont appel&eacute;es &agrave; participer, le plan devrait d&eacute;crire en d&eacute;tail les accords de collaboration conclus en vue d&rsquo;assurer le transfert de responsabilit&eacute;s d&rsquo;une force &agrave; l&rsquo;autre. Par exemple, si l&rsquo;exp&eacute;dition passe du Qu&eacute;bec &agrave; l&rsquo;Ontario, le transfert de comp&eacute;tence &ndash; de la S&ucirc;ret&eacute; du Qu&eacute;bec &agrave;, selon le cas, la Gendarmerie royale du Canada ou la Police provinciale de l&rsquo;Ontario &ndash; se produira &agrave; la fronti&egrave;re, et il en ira de m&ecirc;me, le cas &eacute;ch&eacute;ant, pour la responsabilit&eacute; d&rsquo;escorter l&rsquo;exp&eacute;dition, qui sera alors transf&eacute;r&eacute;e &agrave; la force d&rsquo;intervention comp&eacute;tente. Aussi tout changement dans les m&eacute;thodes et protocoles de communication &ndash; p. ex., fr&eacute;quences radio ou modes de cryptage des messages transmis par cellulaire ou par poste &eacute;metteur-r&eacute;cepteur &ndash; devrait &ecirc;tre clairement d&eacute;crit dans le plan.</p>
<h4>8.1.8 Itin&eacute;raire pr&eacute;vu et itin&eacute;raire de rechange</h4>  <p>Selon les alin&eacute;as 5g) et h) du RSN, le plan de s&eacute;curit&eacute; du transport indiquera &laquo; l&rsquo;itin&eacute;raire pr&eacute;vu &raquo;, ainsi que &laquo; l&rsquo;itin&eacute;raire de rechange &agrave; utiliser en cas d&rsquo;urgence &raquo;.</p>  <h5>Orientation</h5>  <p>Au moment de d&eacute;terminer l&rsquo;itin&eacute;raire pr&eacute;vu pour transporter la mati&egrave;re nucl&eacute;aire, de m&ecirc;me que l&rsquo;itin&eacute;raire de rechange, le demandeur de permis devrait prendre en compte les ordonnances et r&egrave;glements pertinents visant les itin&eacute;raires utilis&eacute;s pour le transport des mati&egrave;res dangereuses et &eacute;viter les zones urbaines, l&agrave; o&ugrave; cela s&rsquo;av&egrave;re r&eacute;alisable. N&eacute;anmoins, si l&rsquo;exp&eacute;dition doit traverser une zone urbaine, il devrait indiquer de fa&ccedil;on pr&eacute;cise l&rsquo;itin&eacute;raire qui sera suivi dans une telle zone et les moyens qui seront pris pour &eacute;tablir un horaire permettant d&rsquo;&eacute;viter que l&rsquo;exp&eacute;dition n&rsquo;ait &agrave; traverser cette m&ecirc;me zone durant les heures de pointe.</p>  <p>Par ailleurs, lors de l&rsquo;&eacute;laboration de l&rsquo;itin&eacute;raire de rechange, le demandeur de permis devrait tenir compte de la faisabilit&eacute; de passer, pendant le transport, de l&rsquo;itin&eacute;raire pr&eacute;vu &agrave; ce nouvel itin&eacute;raire, et vice versa, en indiquant les &eacute;l&eacute;ments de logistique qui seront alors mis en &oelig;uvre. Il veillera ainsi, par exemple, &agrave; ce que des points de jonction appropri&eacute;s, facilitant de tels passages, existent entre ces itin&eacute;raires, et il fournira une description pr&eacute;cise des parcours propos&eacute;s pour passer de l&rsquo;un &agrave; l&rsquo;autre.</p>  <p>Le plan devrait enfin prendre en compte tout danger &ndash; &eacute;boulis, inondation ou incendie de for&ecirc;t, par exemple &ndash; auquel le parcours pourrait &ecirc;tre temporairement expos&eacute; et qui risquerait de nuire au transport.</p>
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
<h3 id="sec8-2">8.2	Confidentialit&eacute;</h3>  <p>Comme il comporte des &laquo; renseignements r&eacute;glement&eacute;s &raquo; aux fins de l&rsquo;application de la <a href="http://laws-lois.justice.gc.ca/fra/lois/N-28.3/">LSRN</a>, le plan de s&eacute;curit&eacute; du transport soumis &agrave; l&rsquo;appui de la demande de permis de transport de mati&egrave;res nucl&eacute;aires de cat&eacute;gorie I, II ou III doit &ecirc;tre trait&eacute; de mani&egrave;re &agrave; assurer la protection de tels renseignements conform&eacute;ment aux dispositions applicables du <a href="http://laws-lois.justice.gc.ca/fra/reglements/DORS-2000-202/TexteComplet.html">RGSRN</a>. Les demandeurs et les titulaires de permis sont tenus de prendre toutes les pr&eacute;cautions n&eacute;cessaires pour pr&eacute;venir la divulgation non autoris&eacute;e des renseignements r&eacute;glement&eacute;s figurant dans un tel plan. Aussi, la CCSN les invite-t-elle &agrave; suivre, au moment de pr&eacute;parer, de soumettre ou de r&eacute;viser leur plan, les recommandations &eacute;nonc&eacute;es &agrave; l&rsquo;annexe D de ce document.</p>
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
<h3 id="sec8-3">8.3	Examen r&eacute;glementaire et d&eacute;livrance du permis</h3>  <p>Lorsqu&rsquo;elle aura re&ccedil;u la demande de permis visant le transport de mati&egrave;res nucl&eacute;aires de cat&eacute;gorie I, II ou III accompagn&eacute;e du plan de s&eacute;curit&eacute; du transport, la CCSN examinera les renseignements fournis et, selon le cas :</p>
<ul>
<li>si la demande est conforme aux exigences r&eacute;glementaires, elle d&eacute;livrera le permis d&egrave;s qu&rsquo;il lui sera possible de le faire, ou au moment pr&eacute;cis&eacute; par le demandeur</li>
<li>si la demande est incompl&egrave;te ou semble inappropri&eacute;e &agrave; d&rsquo;autres &eacute;gards, elle en avisera le demandeur</li>
</ul>  <p>L&agrave; o&ugrave; les circonstances le justifient, le demandeur de permis peut d&eacute;lib&eacute;r&eacute;ment choisir de soumettre &agrave; la CCSN, aux fins d&rsquo;examen, une demande incompl&egrave;te. Il devra toutefois, dans un tel cas, justifier sa d&eacute;marche et faire part du calendrier qu&rsquo;il envisage pour parachever la demande.</p>  <p>Afin que le processus d&rsquo;examen r&eacute;glementaire et de traitement d&rsquo;une telle demande de permis b&eacute;n&eacute;ficie de tout le temps n&eacute;cessaire, la CNSC incite les demandeurs &agrave; soumettre au plus t&ocirc;t leur plan de s&eacute;curit&eacute; du transport, voire avant m&ecirc;me de pr&eacute;senter les autres &eacute;l&eacute;ments de la demande de permis, s&rsquo;ils jugent qu&rsquo;une telle d&eacute;marche contribuera au respect des d&eacute;lais.</p>  <p>Comme le plan de s&eacute;curit&eacute; du transport constitue un &eacute;l&eacute;ment essentiel pour assurer le transport s&ucirc;r et s&eacute;curitaire de mati&egrave;res nucl&eacute;aires, il fera l&rsquo;objet d&rsquo;un examen r&eacute;glementaire rigoureux. Toute lacune d&eacute;cel&eacute;e dans le cours de cet examen devra &ecirc;tre corrig&eacute;e pour que le permis visant le transport des mati&egrave;res nucl&eacute;aires de cat&eacute;gorie I, II ou III puisse &ecirc;tre d&eacute;livr&eacute;.</p>  <p>L&rsquo;annexe D de ce document contient des recommandations qui aideront les demandeurs de permis &agrave; pr&eacute;parer, soumettre ou r&eacute;viser leur plan de s&eacute;curit&eacute; du transport.</p>
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
<h2 id="appA">Annexe A : Exemple de plan de s&eacute;curit&eacute; du site pour les sources scell&eacute;es de cat&eacute;gories 1, 2 et 3</h2>  <p>Cette annexe contient une liste des points &agrave; prendre en compte lors de l&rsquo;&eacute;laboration d&rsquo;un plan de s&eacute;curit&eacute; du site.</p>  <p>Une &eacute;valuation des menaces et des risques indique toutes les menaces et tous les risques potentiels, et r&eacute;v&egrave;le les vuln&eacute;rabilit&eacute;s possibles sur un site. Le plan de s&eacute;curit&eacute; du site est &eacute;labor&eacute; dans le but d&rsquo;att&eacute;nuer ces menaces et de r&eacute;duire ou &eacute;liminer les risques et les vuln&eacute;rabilit&eacute;s. Le plan de s&eacute;curit&eacute; du site comprend des mesures de protection physique pour prot&eacute;ger les sources radioactives qui sont stock&eacute;es, trait&eacute;es, utilis&eacute;es ou transport&eacute;es &agrave; l&rsquo;installation autoris&eacute;e.</p>  <h3>A.1	Introduction</h3>
<ul>
<li>Indiquer et d&eacute;crire bri&egrave;vement les activit&eacute;s, les locaux, le nombre d&rsquo;employ&eacute;s et l&rsquo;emplacement</li>
<li>Inclure une description du milieu, du b&acirc;timent ou de l&rsquo;installation o&ugrave; une source radioactive est utilis&eacute;e ou stock&eacute;e</li>
</ul>
<h3>A.2	Organisation de la s&eacute;curit&eacute;</h3>
<ul>
<li>Inclure une description des sources scell&eacute;es et de leur utilisation</li>
<li>Indiquer les zones de s&eacute;curit&eacute; (zone &agrave; acc&egrave;s restreint) et les zones accessibles au public dans la description du b&acirc;timent</li>
<li>D&eacute;crire les protocoles de s&eacute;curit&eacute; pour les activit&eacute;s courantes et irr&eacute;guli&egrave;res</li>
<li>Identifier les cadres sup&eacute;rieurs et indiquer les r&ocirc;les et responsabilit&eacute;s du personnel et des responsables de la s&eacute;curit&eacute; (y compris le responsable d&eacute;sign&eacute; pour tenir &agrave; jour le plan de s&eacute;curit&eacute; du site)</li>
<li>Fournir des d&eacute;tails sur les ententes de s&eacute;curit&eacute; avec les entrepreneurs ou le personnel employ&eacute;</li>
<li>Fournir des d&eacute;tails sur les modalit&eacute;s de gestion de l&rsquo;installation, notamment en ce qui touche la responsabilit&eacute; de la s&eacute;curit&eacute; des locaux</li>
</ul>
<h3>A.3	Politique de s&eacute;curit&eacute;</h3>
<ul>
<li>D&eacute;crire la politique de s&eacute;curit&eacute; de l&rsquo;entreprise (le cas &eacute;ch&eacute;ant)</li>
<li>Inclure une copie du protocole d&rsquo;entente avec le corps policier comp&eacute;tent</li>
</ul>
<h3>A.4	Plan du site</h3>
<ul>
<li>Fournir un dessin, une photo ou une illustration pr&eacute;cise du site</li>
<li>Inclure toutes les lignes des cl&ocirc;tures, limites et installations pertinentes</li>
<li>Indiquer l&rsquo;emplacement de tous les syst&egrave;mes de s&eacute;curit&eacute;</li>
<li>Indiquer l&rsquo;emplacement de tous les points d&rsquo;acc&egrave;s et de sortie</li>
</ul>
<h3>A.5	P&eacute;rim&egrave;tre</h3>
<ul>
<li>D&eacute;crire le p&eacute;rim&egrave;tre, notamment les d&eacute;tails des cl&ocirc;tures, des barri&egrave;res, des fen&ecirc;tres, des &eacute;clairages de s&eacute;curit&eacute;, des syst&egrave;mes p&eacute;rim&eacute;triques de d&eacute;tection des intrusions (SPDI), des syst&egrave;mes de t&eacute;l&eacute;vision en circuit ferm&eacute; ou de toute autre installation (p. ex., une r&eacute;ception ou une gu&eacute;rite)</li>
<li>D&eacute;crire les points d&rsquo;acc&egrave;s et de sortie du site &agrave; la fois pour les pi&eacute;tons et les v&eacute;hicules, y compris les mesures de contr&ocirc;le de l&rsquo;acc&egrave;s</li>
</ul>
<h3>A.6	Contr&ocirc;le de l&rsquo;acc&egrave;s</h3>
<ul>
<li>Indiquer le nombre d&rsquo;employ&eacute;s sur le site qui sont autoris&eacute;s &agrave; acc&eacute;der aux sources ou aux mati&egrave;res radioactives (c.-&agrave;-d. une liste des utilisateurs autoris&eacute;s et des personnes ayant un acc&egrave;s non surveill&eacute; aux mati&egrave;res ou substances radioactives)</li>
<li>Inclure des d&eacute;tails sur les syst&egrave;mes de contr&ocirc;le d&rsquo;acc&egrave;s (p. ex., les lecteurs de cartes ou les cadenas &agrave; boutons), la gestion des cl&eacute;s ou des codes, et les autres proc&eacute;dures g&eacute;n&eacute;rales de contr&ocirc;le de l&rsquo;acc&egrave;s</li>
<li>D&eacute;crire le processus d&rsquo;acc&egrave;s &agrave; l&rsquo;installation pour les visiteurs et les entrepreneurs (p. ex., la politique sur les escortes)</li>
<li>D&eacute;crire les d&eacute;tails et les processus de v&eacute;rification des v&eacute;hicules et de recherche d&rsquo;armes et de substances explosives</li>
</ul>
<h3>A.7	S&eacute;curit&eacute; int&eacute;rieure</h3>
<ul>
<li>Fournir des informations pour tester les dispositifs d&rsquo;&eacute;valuation (p. ex., des cam&eacute;ras), le contr&ocirc;le de l&rsquo;acc&egrave;s, les dispositifs de d&eacute;tection, les mesures visant &agrave; ralentir les intrus, les syst&egrave;mes d&rsquo;intervention et de communication propres aux zones de sources radioactives</li>
</ul>
<h3>A.8	Stockage</h3>
<ul>
<li>Fournir une liste de b&acirc;timents, salles ou lieux (nom, num&eacute;ro ou autre identifiant) o&ugrave; les sources radioactives sont utilis&eacute;es, stock&eacute;es ou transport&eacute;es</li>
<li>Pour chaque b&acirc;timent, salle ou lieu, donner des d&eacute;tails sur :
<ul>
<li>les ententes de s&eacute;curit&eacute; pour le stockage de l&rsquo;&eacute;quipement contenant des sources</li>
<li>les moyens de d&eacute;tection des acc&egrave;s non autoris&eacute;s &agrave; l&rsquo;&eacute;quipement ou aux zones de stockage</li>
<li>les processus ou proc&eacute;dures d&rsquo;acc&egrave;s &agrave; l&rsquo;installation autoris&eacute;e</li>
<li>le type et la classification des mati&egrave;res radioactives</li>
</ul></li>
</ul>
<h3>A.9	Transport</h3>
<ul>
<li>Inclure la liste des v&eacute;hicules utilis&eacute;s pour le transport des sources radioactives scell&eacute;es</li>
<li>D&eacute;crire les mesures de s&eacute;curit&eacute; en place pour le transport des sources scell&eacute;es, y compris :
<ul>
<li>les ententes de s&eacute;curit&eacute; pendant le transport des sources</li>
<li>les moyens de d&eacute;tecter l&rsquo;enl&egrave;vement non autoris&eacute; de l&rsquo;&eacute;quipement</li>
<li>les processus ou les proc&eacute;dures de s&eacute;curit&eacute; pendant le transport des sources</li>
</ul></li>
</ul>
<h3>A.10 S&eacute;curit&eacute; de l&rsquo;information</h3>
<ul>
<li>D&eacute;crire les ententes de protection des renseignements sensibles concernant l&rsquo;emplacement, la nature, le stockage et le mouvement des sources radioactives</li>
<li>Toute la correspondance relative &agrave; la s&eacute;curit&eacute; (y compris le plan de s&eacute;curit&eacute; du site) constitue des &laquo; <strong>RENSEIGNEMENTS R&Eacute;GLEMENT&Eacute;S</strong> &raquo; et, &agrave; ce titre, elle doit &ecirc;tre conserv&eacute;e et marqu&eacute;e conform&eacute;ment aux articles 21 &agrave; 23 du <a href="http://laws-lois.justice.gc.ca/fra/reglements/DORS-2000-202/TexteComplet.html"><em>R&egrave;glement g&eacute;n&eacute;ral sur la s&ucirc;ret&eacute; et la r&eacute;glementation nucl&eacute;aires</em></a></li>
<li>Si les renseignements r&eacute;glement&eacute;s sont enregistr&eacute;s sur un serveur d&rsquo;entreprise connect&eacute; &agrave; Internet, il faut tenir compte des menaces et des vuln&eacute;rabilit&eacute;s potentielles des syst&egrave;mes informatiques</li>
</ul>
<h3>A.11 Contr&ocirc;les des ant&eacute;c&eacute;dents pour d&eacute;terminer la fiabilit&eacute;</h3>
<ul>
<li>D&eacute;crire les ententes de v&eacute;rification de l&rsquo;identit&eacute; et de la fiabilit&eacute; du personnel ayant acc&egrave;s aux sources radioactives &agrave; risque &eacute;lev&eacute;</li>
<li>D&eacute;crire les ententes de v&eacute;rification de l&rsquo;identit&eacute; et de la fiabilit&eacute; des personnes assurant la protection et la s&eacute;curit&eacute; de l&rsquo;installation, y compris les entrepreneurs ou le personnel d&rsquo;entretien du b&acirc;timent</li>
</ul>
<h3>A.12 Entretien, r&eacute;paration et essais des syst&egrave;mes de s&eacute;curit&eacute;</h3>
<ul>
<li>D&eacute;crire les ententes d&rsquo;entretien et d&rsquo;essai de tous les syst&egrave;mes de s&eacute;curit&eacute;</li>
<li>Inclure des informations sur les mesures compensatoires, les essais de performance et la v&eacute;rification de la fiabilit&eacute; des syst&egrave;mes de s&eacute;curit&eacute;</li>
<li>D&eacute;crire le processus pour &eacute;valuer l&rsquo;efficacit&eacute; du plan d&rsquo;entretien des syst&egrave;mes de s&eacute;curit&eacute;, y compris la fr&eacute;quence de mise &agrave; jour du plan conform&eacute;ment aux attentes de la CCSN (p. ex., essais semestriels)</li>
</ul>
<h3>A.13 Plans d&rsquo;intervention en cas d&rsquo;urgence et d&rsquo;incidents de s&eacute;curit&eacute;</h3>
<ul>
<li>Fournir des d&eacute;tails sur les proc&eacute;dures de s&eacute;curit&eacute; et les instructions visant les mesures de s&eacute;curit&eacute; en cas de perte, vol, destruction, actes malveillants ou tout autre incident de s&eacute;curit&eacute; touchant des substances ou des mati&egrave;res radioactives</li>
<li>Inclure des informations sur les plans d&rsquo;urgence et les rapports d&rsquo;&eacute;v&eacute;nements</li>
<li>D&eacute;crire les arrangements avec les intervenants hors site (p. ex., un corps policier) au sujet du protocole d&rsquo;intervention en cas d&rsquo;alarme ou autres incidents de s&eacute;curit&eacute;</li>
<li>Inclure les proc&eacute;dures pr&eacute;vues en cas d&rsquo;accroissement du niveau de risque, et les mesures compensatoires qui pourraient &ecirc;tre requises</li>
</ul>
<h3>A.14 Programme de sensibilisation &agrave; la s&eacute;curit&eacute;</h3>
<ul>
<li>D&eacute;crire le programme de sensibilisation &agrave; la s&eacute;curit&eacute;</li>
<li>Inclure toutes les instructions donn&eacute;es aux employ&eacute;s sur les mesures de s&eacute;curit&eacute;</li>
<li>Inclure toutes les restrictions concernant l&rsquo;acc&egrave;s, l&rsquo;utilisation, le stockage ou le transport de substances ou de mati&egrave;res radioactives (y compris les restrictions visant les entrepreneurs, le personnel d&rsquo;entretien du b&acirc;timent et les employ&eacute;s temporaires)</li>
</ul>
<h3>A.15 R&eacute;f&eacute;rences, proc&eacute;dures et instructions de s&eacute;curit&eacute;</h3>
<ul>
<li>Inclure les r&eacute;f&eacute;rences aux normes ou r&egrave;glements, ou aux proc&eacute;dures en mati&egrave;re de s&eacute;curit&eacute;</li>
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
<h2 id="appB">Annexe B : Exemple de v&eacute;rification nominale du casier judiciaire</h2>
<div className="module-poster col-md-6">
<img src="/images/regulatory-documents/regdoc-2-12-3-ver2/figure-2-fra.png" alt="" />  </div>  <br />
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
<h2 id="appC">Annexe C : Utilisations typiques des sources scell&eacute;es</h2>  <p>Cette annexe fournit de l&rsquo;information sur les utilisations habituelles des sources scell&eacute;es et leur niveau de s&eacute;curit&eacute; respectif. Le tableau est pr&eacute;sent&eacute; &agrave; titre indicatif seulement. L&rsquo;application du niveau de s&eacute;curit&eacute; peut d&eacute;pendre de la source, des quantit&eacute;s cumul&eacute;es, du niveau de menace et des risques associ&eacute;s &agrave; la fa&ccedil;on dont est utilis&eacute;e la source scell&eacute;e et &agrave; l&rsquo;endroit o&ugrave; elle est utilis&eacute;e.</p>
<p><strong>L&eacute;gende :</strong>  <p>O&nbsp;&nbsp;Oui</p>  <p>P&nbsp;&nbsp;Pratique de gestion prudente</p>
<table className="width-100">  <caption className="text-left">Tableau 3 : Application du REGDOC-2.12.3, partie A, <em>La s&eacute;curit&eacute; des sources scell&eacute;es</em>, pour les utilisations typiques des sources scell&eacute;es</caption>  <tr>
<th className="text-center text-center" rowspan="3">Pratique</th>
<th className="text-center text-center" rowspan="3">Niveau de s&eacute;curit&eacute;</th>
<th className="text-center" colSpan="16">Paragraphe du REGDOC <em>La s&eacute;curit&eacute; des substances nucl&eacute;aires : sources scell&eacute;es</em> (exigences)</th>  </tr>  <tr>
<th className="text-center text-center" colSpan="7">Mesures de s&eacute;curit&eacute; techniques</th>
<th className="text-center text-center" colSpan="6">Mesures de s&eacute;curit&eacute; administratives</th>
<th className="text-center" colSpan="3">Mesures pendant le transport</th>  </tr>  <tr>
<th>3.1</th>
<th>3.2.1</th>
<th>3.2.2</th>
<th>3.2.3</th>
<th>3.2.4</th>
<th>3.2.5</th>
<th>3.2.6</th>
<th>3.2.7</th>
<th>3.3.2</th>
<th>3.3.3</th>
<th>3.3.4</th>
<th>3.3.5</th>
<th>3.3.6</th>
<th>4.1</th>
<th>4.2</th>
<th>4.3</th>  </tr>  <tr>
<td>Irradiateurs : type piscine, st&eacute;rilisation et pr&eacute;servation des aliments</td>
<td className="text-center">1</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>  </tr>  <tr>
<td>Traitement/fabricant</td>
<td className="text-center">1</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>  </tr>  <tr>
<td>Irradiateurs : autoblind&eacute;s</td>
<td className="text-center">1</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>  </tr>  <tr>
<td>Irradiateurs : sang/tissu</td>
<td className="text-center">1</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>  </tr>  <tr>
<td>T&eacute;l&eacute;th&eacute;rapie &agrave; faisceaux multiples (scalpel gamma)</td>
<td className="text-center">1</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>  </tr>  <tr>
<td>T&eacute;l&eacute;th&eacute;rapie</td>
<td className="text-center">1</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>  </tr>  <tr>
<td>Gammagraphie industrielle</td>
<td className="text-center">2</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>  </tr>  <tr>
<td>Diagraphie de puits</td>
<td className="text-center">2</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>  </tr>  <tr>
<td>Curieth&eacute;rapie &ndash; d&eacute;bit de dose &eacute;lev&eacute; ou d&eacute;bit de dose puls&eacute;</td>
<td className="text-center">2</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">P</td>  </tr>  <tr>
<td>Jauges de convoyeur</td>
<td className="text-center">3</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">P</td>  </tr>  <tr>
<td>Jauges de hauts fourneaux</td>
<td className="text-center">3</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">P</td>  </tr>  <tr>
<td>Jauges de drague</td>
<td className="text-center">3</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">P</td>  </tr>  <tr>
<td>Jauges de tuyaux de filage</td>
<td className="text-center">3</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">P</td>  </tr>  <tr>
<td>Curieth&eacute;rapie &ndash; faible d&eacute;bit de dose</td>
<td className="text-center">4</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">P</td>  </tr>  <tr>
<td>Jauges d&rsquo;&eacute;paisseur</td>
<td className="text-center">4</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">P</td>  </tr>  <tr>
<td>Jauges de niveau, d&rsquo;&eacute;paisseur</td>
<td className="text-center">4</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">P</td>  </tr>  <tr>
<td>D&eacute;tecteurs d&rsquo;humidit&eacute;</td>
<td className="text-center">4</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">P</td>  </tr>  <tr>
<td>Jauges de densit&eacute;</td>
<td className="text-center">4</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">P</td>  </tr>  <tr>
<td>Jauges d&rsquo;humidit&eacute;/de densit&eacute;</td>
<td className="text-center">4</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">P</td>  </tr>  <tr>
<td>&Eacute;liminateurs d&rsquo;&eacute;lectricit&eacute; statique</td>
<td className="text-center">4</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">P</td>  </tr>  <tr>
<td>Analyseurs &agrave; fluorescence X</td>
<td className="text-center">5</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">P</td>  </tr>  <tr>
<td>D&eacute;tecteurs &agrave; capture d&rsquo;&eacute;lectrons</td>
<td className="text-center">5</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">P</td>  </tr>  <tr>
<td>Curieth&eacute;rapie : Implants permanents et plaques oculaires &agrave; faible d&eacute;bit de dose</td>
<td className="text-center">5</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">P</td>  </tr>  <tr>
<td>T&eacute;moins pour la tomographie par &eacute;mission de positrons</td>
<td className="text-center">5</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">O</td>
<td className="text-center">O</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">P</td>
<td className="text-center">P</td>  </tr>  </table>
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
<h2 id="appD">Annexe D : Pr&eacute;paration, pr&eacute;sentation et r&eacute;vision de la description du programme de s&eacute;curit&eacute; ou du plan de s&eacute;curit&eacute; du transport</h2>  <p>Cette annexe pr&eacute;sente des recommandations visant &agrave; aider les demandeurs et titulaires de permis &agrave; pr&eacute;parer, soumettre et r&eacute;viser la description du programme de s&eacute;curit&eacute; qui consolide les renseignements sur la s&eacute;curit&eacute; qui doivent &ecirc;tre inclus dans une demande de permis &ndash; autre qu&rsquo;un permis de transport &ndash; concernant :</p>
<ul>
<li>les mati&egrave;res nucl&eacute;aires de cat&eacute;gorie I ou II</li>
<li>une installation nucl&eacute;aire compos&eacute;e d&rsquo;un r&eacute;acteur nucl&eacute;aire pouvant produire plus de 10 MW d&rsquo;&eacute;nergie thermique en exploitation normale</li>
</ul>  <p>Cette annexe contient &eacute;galement des recommandations pour aider les demandeurs et titulaires de permis &agrave; pr&eacute;parer, soumettre ou r&eacute;viser un plan de s&eacute;curit&eacute; du transport pour le transport des mati&egrave;res nucl&eacute;aires de cat&eacute;gories I, II et III.</p>  <p>Aux fins de cette annexe, le terme &laquo; document &raquo; d&eacute;signe la description du programme de s&eacute;curit&eacute; ou un plan de s&eacute;curit&eacute; du transport.</p>
<h3>D.1	G&eacute;n&eacute;ralit&eacute;s</h3>  <p>Les renseignements figurant dans la description du programme de s&eacute;curit&eacute; ou le plan de s&eacute;curit&eacute; du transport devraient &ecirc;tre clairs et concis. Les d&eacute;finitions et abr&eacute;viations utilis&eacute;es devraient &ecirc;tre cit&eacute;es de fa&ccedil;on uniforme dans l&rsquo;ensemble du document. Les termes sp&eacute;cialis&eacute;s utilis&eacute;s dans le document devraient correspondre &agrave; ceux qui sont d&eacute;finis ou employ&eacute;s &agrave; des fins semblables dans les r&egrave;glements pertinents. Tout dessin ou croquis accompagnant le document devrait &ecirc;tre suffisamment grand pour &ecirc;tre clair et lisible.</p>  <p>Les d&eacute;doublements de renseignements pourront &ecirc;tre r&eacute;duits au minimum en effectuant des renvois aux sections pertinentes du document.</p>
<h3>D.2	Confidentialit&eacute; et s&eacute;curit&eacute;</h3>  <p>Aux termes des articles 21 et 23 du <a href="http://laws-lois.justice.gc.ca/fra/reglements/DORS-2000-202/TexteComplet.html"><em>R&egrave;glement g&eacute;n&eacute;ral sur la s&ucirc;ret&eacute; et la r&eacute;glementation nucl&eacute;aires</em></a> (RGSRN), la description du programme de s&eacute;curit&eacute; ou le plan de s&eacute;curit&eacute; du transport fait partie des &laquo; renseignements r&eacute;glement&eacute;s &raquo; et doit donc &ecirc;tre prot&eacute;g&eacute; contre tout acc&egrave;s non autoris&eacute;. C&rsquo;est donc dire que le document lui-m&ecirc;me et toute correspondance &agrave; son sujet entre la Commission canadienne de s&ucirc;ret&eacute; nucl&eacute;aire (CCSN) et le demandeur ou le titulaire de permis doivent &ecirc;tre trait&eacute;s &agrave; titre de renseignements confidentiels ou prot&eacute;g&eacute;s, et soumis aux mesures &eacute;num&eacute;r&eacute;es ci-dessous :</p>
<ul>
<li>La classification de s&eacute;curit&eacute; du document, &agrave; savoir &laquo; <strong>CONFIDENTIEL &ndash; RENSEIGNEMENTS R&Eacute;GLEMENT&Eacute;S</strong> &raquo;, devrait figurer dans le coin sup&eacute;rieur droit de chaque page du document, en caract&egrave;res gras et en majuscules.</li>
<li>Le document lui-m&ecirc;me et toute correspondance &agrave; son sujet peuvent &ecirc;tre achemin&eacute;s &agrave; la CCSN par la poste ou par service de messagerie.</li>
</ul>  <p>Le document et la correspondance &agrave; son sujet devant &ecirc;tre achemin&eacute;s &agrave; la CCSN devraient &ecirc;tre plac&eacute;s dans deux enveloppes (ou d&rsquo;autres genres d&rsquo;emballage), le document et la correspondance &eacute;tant plac&eacute;s dans l&rsquo;enveloppe int&eacute;rieure (ou l&rsquo;emballage int&eacute;rieur). L&rsquo;enveloppe int&eacute;rieure (ou l&rsquo;emballage int&eacute;rieur) devrait &ecirc;tre cachet&eacute;e et adress&eacute;e au &laquo; Directeur, Division de la s&eacute;curit&eacute; nucl&eacute;aire, CCSN &raquo; et porter clairement la classification de s&eacute;curit&eacute; &laquo; CONFIDENTIEL &ndash; RENSEIGNEMENTS R&Eacute;GLEMENT&Eacute;S &raquo;, avec la mention &laquo; &Agrave; &Ecirc;TRE OUVERT PAR LE DESTINATAIRE SEULEMENT &raquo;, pour &ecirc;tre ensuite plac&eacute;e dans l&rsquo;autre enveloppe (ou l&rsquo;autre emballage). L&rsquo;enveloppe ext&eacute;rieure, cachet&eacute;e elle aussi, sera pour sa part adress&eacute;e &agrave; la :</p>  <p>Commission canadienne de s&ucirc;ret&eacute; nucl&eacute;aire<br />
280, rue Slater<br />
C.P. 1046, succursale B<br />
Ottawa (Ontario)  K1P 5S9</p>  <p>Le plan de s&eacute;curit&eacute; du transport et la correspondance &agrave; son sujet devant &ecirc;tre achemin&eacute;s &agrave; la CCSN par &laquo; t&eacute;l&eacute;copieur prot&eacute;g&eacute; &raquo; devraient &ecirc;tre transmis conform&eacute;ment aux exigences de niveau I (&laquo; Confidentiel &raquo;) du Centre de la s&eacute;curit&eacute; des t&eacute;l&eacute;communications.</p>  <p>&Agrave; la r&eacute;ception du document ou de la correspondance &agrave; son sujet, la CCSN veillera &agrave; pr&eacute;venir la divulgation non autoris&eacute;e des renseignements qui lui sont ainsi transmis, conform&eacute;ment aux dispositions du RGSRN et de la <a href="http://laws-lois.justice.gc.ca/fra/lois/a-1/"><em>Loi sur l&rsquo;acc&egrave;s &agrave; l&rsquo;information</em></a>.</p>
<h3>D.3	Style, structure et mise en page</h3>  <p>Le document devrait comporter une page titre, une table des mati&egrave;res et un glossaire des termes sp&eacute;cialis&eacute;s qui y sont utilis&eacute;s. Il devrait comporter un identifiant unique. Les pages devraient &ecirc;tre bien num&eacute;rot&eacute;es.</p>  <p>Les &eacute;l&eacute;ments d&rsquo;information devraient &ecirc;tre num&eacute;rot&eacute;s et pr&eacute;sent&eacute;s, le cas &eacute;ch&eacute;ant, selon la s&eacute;quence et les titres de rubrique de la section 6 du pr&eacute;sent REGDOC pour ce qui est de la description du programme de s&eacute;curit&eacute;, ou selon la s&eacute;quence et les titres de rubrique de la sous-section 8.1 de ce REGDOC pour ce qui est du plan de s&eacute;curit&eacute; du transport.</p>
<h3>D.4	R&eacute;vision du programme ou du plan</h3>  <p>Le titulaire de permis de la CCSN doit se conformer aux r&egrave;glements pertinents et aux conditions rattach&eacute;es au permis, y compris toute condition qui lui impose d&rsquo;adh&eacute;rer &agrave; un programme de s&eacute;curit&eacute; ou un plan de s&eacute;curit&eacute; du transport mentionn&eacute; par renvoi. Le document ainsi mentionn&eacute; par renvoi ne pourra toutefois &ecirc;tre modifi&eacute; par le titulaire de permis que lorsque la CCSN aura approuv&eacute; les changements qu&rsquo;il se propose d&rsquo;apporter.</p>  <p>Au moment de soumettre &agrave; la CCSN, pour approbation, sa demande de r&eacute;vision d&rsquo;un programme de s&eacute;curit&eacute; ou d&rsquo;un plan de s&eacute;curit&eacute; du transport, le titulaire de permis devrait donc d&eacute;crire les changements envisag&eacute;s, en expliquant les motifs qui le poussent &agrave; les proposer. Il devrait alors ne soumettre qu&rsquo;un seul exemplaire, complet, de la nouvelle version du document, dans laquelle il aura pris soin, pour faciliter le travail d&rsquo;examen de la CCSN, de surligner ou de souligner les passages ou sections qu&rsquo;il se propose de modifier. Cette nouvelle version du document devrait respecter les recommandations de cette annexe, et &ecirc;tre clairement d&eacute;finie &agrave; l&rsquo;aide de l&rsquo;identifiant d&eacute;crit &agrave; la section D.3.</p>
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
<h2 id="appE">Annexe E : Mati&egrave;res nucl&eacute;aires de cat&eacute;gories I, II et III</h2>  <p>Les mati&egrave;res nucl&eacute;aires de cat&eacute;gories I, II et III sont d&eacute;finies de la fa&ccedil;on suivante &agrave; l&rsquo;article 1 et &agrave; l&rsquo;annexe 1 du <a href="http://laws.justice.gc.ca/fra/reglements/DORS-2000-209/page-1.html"><em>R&egrave;glement sur la s&eacute;curit&eacute; nucl&eacute;aire</em></a> (RSN).</p>
<ul>
<li><strong>Mati&egrave;re nucl&eacute;aire de cat&eacute;gorie I :</strong> &laquo; Substance nucl&eacute;aire vis&eacute;e &agrave; la colonne 1 de l&rsquo;annexe [voir ci-dessous] dont la forme et la quantit&eacute; correspondent &agrave; celles pr&eacute;vues respectivement aux colonnes 2 et 3 de l&rsquo;annexe. &raquo;</li>
<li><strong>Mati&egrave;re nucl&eacute;aire de cat&eacute;gorie II :</strong> &laquo; Substance nucl&eacute;aire vis&eacute;e &agrave; la colonne 1 de l&rsquo;annexe  [voir ci-dessous] dont la forme et la quantit&eacute; correspondent &agrave; celles pr&eacute;vues respectivement aux colonnes 2 et 4 de l&rsquo;annexe. &raquo;</li>
<li><strong>Mati&egrave;re nucl&eacute;aire de cat&eacute;gorie III :</strong> &laquo; Substance nucl&eacute;aire vis&eacute;e &agrave; la colonne 1 de l&rsquo;annexe [voir ci-dessous] dont la forme et la quantit&eacute; correspondent &agrave; celles pr&eacute;vues respectivement aux colonnes 2 et 5 de l&rsquo;annexe. &raquo;</li>
</ul>
<table className="width-100">  <tr>
<th className="text-center text-center">Substance nucl&eacute;aire</th>
<th className="text-center text-center">Formulaire</th>
<th className="text-center">Quantit&eacute;<br /> (cat&eacute;gorie I)<sup>1</sup></th>
<th className="text-center">Quantit&eacute;<br /> (cat&eacute;gorie II)<sup>1</sup></th>
<th className="text-center">Quantit&eacute;<br /> (cat&eacute;gorie III)<sup>1,2</sup></th>  </tr>  <tr>
<th className="text-center text-center">Plutonium<sup>3</sup></th>
<td className="text-center text-center">Non irradi&eacute;<sup>4</sup></td>
<td className="text-center text-center">2 kg ou plus</td>
<td className="text-center text-center">Plus de 500 g et moins de 2 kg</td>
<td className="text-center text-center">Plus de 15 g et au plus 500 g</td>  </tr>  <tr>
<th className="text-center text-center">Uranium 235</th>
<td className="text-center">Non irradi&eacute;<sup>4</sup> &ndash; uranium enrichi &agrave; 20% ou plus en <sup>235</sup>U</td>
<td className="text-center text-center">5 kg ou plus</td>
<td className="text-center text-center">Plus de 1 kg et moins de 5 kg</td>
<td className="text-center text-center">Plus de 15 g et au plus 1 kg</td>  </tr>  <tr>
<th className="text-center text-center">Uranium 235</th>
<td className="text-center">Non irradi&eacute;<sup>4</sup> &ndash; uranium enrichi &agrave; 10% ou plus en <sup>235</sup>U, mais &agrave; moins de 20% en <sup>235</sup>U</td>
<td className="text-center text-center">S.O</td>
<td className="text-center text-center">10 kg ou plus</td>
<td className="text-center text-center">Plus de 1 kg et moins de 10 kg</td>  </tr>  <tr>
<th className="text-center text-center">Uranium 235</th>
<td className="text-center">Non irradi&eacute;<sup>4</sup> &ndash; uranium enrich plus que l&#39;uranium naturel, mais moins de 10%  en <sup>235</sup>U</td>
<td className="text-center text-center">S.O</td>
<td className="text-center text-center">S.O</td>
<td className="text-center text-center">10 kg ou plus</td>  </tr>  <tr>
<th className="text-center text-center">Uranium 233</th>
<td className="text-center text-center">Non irradi&eacute;</td>
<td className="text-center text-center">2 kg ou plus</td>
<td className="text-center text-center">Plus de 500 g et moins de 2 kg</td>
<td className="text-center text-center">Plus de 15 g et au plus 500 g</td>  </tr>  <tr>
<th className="text-center">Combustible compos&eacute; d&rsquo;uranium appauvri ou naturel, thorium ou combustible faiblement enrichi (moins de 10 % de teneur en mati&egrave;res fissiles<sup>5</sup></td>
<td className="text-center text-center">Irradi&eacute;</th>
<td className="text-center text-center">S.O.</td>
<td className="text-center text-center">Plus de 500 g de plutonium</td>
<td className="text-center text-center">Plus de 15 g et au plus 500 g de plutonium</td>  </tr>  </table>  <p><strong>Source :</strong> Annexe 1 du RSN</p>  <p>Remarques :</p>
<ol>
<li>Les quantit&eacute;s &eacute;num&eacute;r&eacute;es se rapportent &agrave; l&rsquo;ensemble de chaque type de substance nucl&eacute;aire se trouvant dans l&rsquo;installation, &agrave; l&rsquo;exclusion des quantit&eacute;s suivantes (consid&eacute;r&eacute;es comme distinctes) :
<ul className="list-bullet-none">
<li>a) toute quantit&eacute; de la substance nucl&eacute;aire se trouvant &agrave; plus de 1 000 m de toute autre quantit&eacute; de cette substance</li>
<li>b) toute quantit&eacute; de la substance nucl&eacute;aire se trouvant dans un b&acirc;timent verrouill&eacute; ou une structure prot&eacute;g&eacute;e d&rsquo;une fa&ccedil;on analogue contre toute entr&eacute;e non autoris&eacute;e</li>
</ul></li>
<li>Les quantit&eacute;s inf&eacute;rieures &agrave; celles pr&eacute;vues &agrave; la colonne 5 pour les mati&egrave;res nucl&eacute;aires de cat&eacute;gorie III et les quantit&eacute;s d&rsquo;uranium naturel, d&rsquo;uranium appauvri et de thorium devraient &ecirc;tre prot&eacute;g&eacute;es, &agrave; tout le moins conform&eacute;ment &agrave; des pratiques de s&eacute;curit&eacute; prudente.</li>
<li>Tout le plutonium sauf s&rsquo;il a une concentration isotopique d&eacute;passant 80 % en plutonium 238.</li>
<li>Mati&egrave;re non irradi&eacute;e dans un r&eacute;acteur ou mati&egrave;re irradi&eacute;e dans un r&eacute;acteur, mais ayant une intensit&eacute; de rayonnement &eacute;gale ou inf&eacute;rieure &agrave; 1 Gy/h &agrave; 1 m&egrave;tre de distance sans blindage.</li>
<li>Les autres combustibles qui, en raison de leur teneur originale en mati&egrave;res fissiles, sont class&eacute;s dans la cat&eacute;gorie I ou II avant irradiation peuvent &ecirc;tre class&eacute;s dans la cat&eacute;gorie directement inf&eacute;rieure si l&rsquo;intensit&eacute; de rayonnement du combustible d&eacute;passe 1 Gy/h &agrave; 1 m&egrave;tre de distance sans blindage.</li>
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
<div id="glossary"></div>
<h2 id="glossary">Glossaire</h2>  <p>La d&eacute;finition des termes utilis&eacute;s dans ce document figure dans le document <a href="http://www.nuclearsafety.gc.ca/pubs_catalogue/uploads_fre/REGDOC-3-6-Glossary-of-CNSC-Terminology-fra.pdf">REGDOC-3.6, <em>Glossaire de la CCSN</em></a>.</p>  <p>Le REGDOC-3.6 contient les termes et d&eacute;finitions utilis&eacute;s dans la <a href="http://laws-lois.justice.gc.ca/fra/lois/N-28.3/"><em>Loi sur la s&ucirc;ret&eacute; et la r&eacute;glementation nucl&eacute;aires</em></a> (LSRN), les r&egrave;glements pris en vertu de la LSRN et les documents d&rsquo;application de la r&eacute;glementation et autres publications de la CCSN. Le REGDOC-3.6 est fourni &agrave; titre d&rsquo;information et de r&eacute;f&eacute;rence.</p>
<p><strong>acc&egrave;s autoris&eacute;</strong><br />
Acc&egrave;s accord&eacute; par &eacute;crit par le titulaire de permis.</p>  <p><strong>adversaire</strong><br />
Personne accomplissant des actes malveillants dans la poursuite d&rsquo;int&eacute;r&ecirc;ts nuisibles &agrave; l&rsquo;installation; un adversaire peut &ecirc;tre une personne de l&rsquo;int&eacute;rieur ou de l&rsquo;ext&eacute;rieur.</p>  <p><strong>contr&ocirc;le de l&rsquo;acc&egrave;s</strong><br />
Syst&egrave;me permettant uniquement aux personnes habilit&eacute;es &agrave; avoir acc&egrave;s sans escorte &agrave; la zone de s&eacute;curit&eacute; et permettant &eacute;galement de s&rsquo;assurer que toutes les autres personnes soient escort&eacute;es pour y avoir acc&egrave;s.</p>  <p><strong>plan d&rsquo;urgence</strong><br />
Ensembles pr&eacute;d&eacute;finis d&rsquo;actions visant &agrave; r&eacute;pondre &agrave; des actes non autoris&eacute;s indiquant une tentative de retrait ou de sabotage non autoris&eacute;e, y compris des menaces en ce sens.</p>  <p><strong>pratiques de gestion prudente</strong><br />
Pratiques consistant &agrave; s&rsquo;assurer que les sources scell&eacute;es sont s&eacute;curis&eacute;es pour pr&eacute;venir l&rsquo;utilisation, le vol ou le sabotage ill&eacute;gaux, et garantir qu&rsquo;un inventaire p&eacute;riodique est effectu&eacute; pour s&rsquo;assurer que les sources scell&eacute;es se trouvent &agrave; l&rsquo;endroit d&eacute;sign&eacute; et sont s&eacute;curis&eacute;es.</p>  <p><strong>source encapsul&eacute;e</strong><br />
D&eacute;signe une mati&egrave;re radioactive qui est scell&eacute;e de fa&ccedil;on permanente dans une capsule ou qui est maintenue sous une forme compacte et solide.</p>  <p><strong>UL</strong><br />
Les <em>Underwriter Laboratories</em> (UL) constituent une entreprise mondiale ind&eacute;pendante sp&eacute;cialis&eacute;e dans la science de la s&eacute;curit&eacute; et offrant de l&rsquo;expertise dans cinq domaines d&rsquo;activit&eacute; strat&eacute;giques : s&eacute;curit&eacute; des produits, environnement, vie et sant&eacute;, universit&eacute; et services de v&eacute;rification.</p>  <p><strong>ULC</strong><br />
Les Laboratoires des assureurs du Canada (ULC) constituent un organisme de certification et d&rsquo;inspection ind&eacute;pendant qui proc&egrave;de &agrave; l&rsquo;essai des produits afin d&rsquo;assurer leur s&eacute;curit&eacute;.</p>
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
<li>Agence internationale de l&rsquo;&eacute;nergie atomique (AIEA), <a href="http://www-pub.iaea.org/MTCD/Publications/PDF/Code-2004_web.pdf"><em>Code de conduite sur la s&ucirc;ret&eacute; et la s&eacute;curit&eacute; des sources radioactives</em></a>, Vienne, 2004</li>
<li>AIEA, Guide de s&ucirc;ret&eacute; n<sup>o</sup> RS-G-1.9, <a href="http://www-pub.iaea.org/MTCD/Publications/PDF/Pub1227f_web.pdf"><em>Categorisation des sources radioactives</em></a>, Vienne, 2011</li>
<li>AIEA, TECDOC-1344, <span lang="en"><a href="http://www-pub.iaea.org/MTCD/Publications/PDF/te_1344_web.pdf"><em>Categorization of Radioactive Sources</em></a></span>, R&eacute;vision du TECDOC-1191, <span lang="en">Categorization of Radiation Sources</span>, Vienne, 2003</li>
<li>AIEA, SSR-6, <cite><a href="https://www-pub.iaea.org/MTCD/Publications/PDF/P1798F_web.pdf">R&egrave;glement de transport des mati&egrave;res radioactives,</a></cite> &eacute;dition de 2018 (PDF, 200 pages, 1.7 Mo)</li>
<li>AIEA, TECDOC-1355, <span lang="en"><a href="http://www-pub.iaea.org/MTCD/Publications/PDF/te_1355_web.pdf"><em>Security of radioactive sources &ndash; Interim guidance for comment</em></a></span>, Vienne,2003</li>
<li>ASTM F2548-06, <span lang="en"><a href="http://www.astm.org/DATABASE.CART/HISTORICAL/F2548-06.htm"><em>Standard Specification for Expanded Metal Fence Systems for Security Purposes</em></a></span>, ASTM International, West Conshohocken, PA, 2006</li>
<li>Ressources naturelles Canada, <em>Lignes directrices pour les installations d&rsquo;assemblage des perforateurs &agrave; charge creuse</em>, 2008</li>
<li>AIEA, Collection S&eacute;curit&eacute; nucl&eacute;aire n<sup>o</sup> 7, Guide d&rsquo;application, <a href="http://www-pub.iaea.org/MTCD/Publications/PDF/Pub1347f_web.pdf"><em>Culture de s&eacute;curit&eacute; nucl&eacute;aire</em></a>, Vienne, 2008</li>
<li>Secr&eacute;tariat du Conseil du Tr&eacute;sor du Canada, gouvernement du Canada, <a href="http://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=16578"><em>Politique sur la s&eacute;curit&eacute; du gouvernement,</em></a>, 2009</li>
<li>AIEA, Collection S&eacute;curit&eacute; nucl&eacute;aire de l&rsquo;AIEA n<sup>o</sup> 14, Recommandations, <a href="https://www-pub.iaea.org/MTCD/Publications/PDF/Pub1487f_web.pdf"><em>Recommandations de s&eacute;curit&eacute; nucl&eacute;aire relatives aux mati&egrave;res radioactives et aux installations associ&eacute;es</em></a>, Vienne, 2011</li>  </ol>
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
<h2 id="addInfo">Renseignement suppl&eacute;menatires</h2>  <p>Les documents suivants contiennent de l&rsquo;information suppl&eacute;mentaire qui pourrait int&eacute;resser les personnes participant aux mesures de s&eacute;curit&eacute; pour les sources scell&eacute;es.</p>
<ol>
<li>Australian Radiation Protection and Nuclear Safety Agency (ARPANSA), <span lang="en"><a href="https://www.arpansa.gov.au/sites/g/files/net3086/f/legacy/pubs/rps/rps11.pdf"><em>Code of Practice &ndash; Security of Radioactive Sources</em></a></span>, Radiation Protection Series Publication No. 11, 2007</li>
<li>C: Environmental Security, <span lang="en"><em>International Approaches to Securing Radioactive Sources Against Terrorism</em></span>, r&eacute;vis&eacute; par W. Duncan Wood et Derek M. Robinson, Springer Science + Business Media, 2009</li>
<li>Commission canadienne de s&ucirc;ret&eacute; nucl&eacute;aire (CCSN), INFO-9999-4 (F) r&eacute;vision 2, <a href="http://www.nuclearsafety.gc.ca/pubs_catalogue/uploads_fre/CC172-6_f.pdf"><em>Jauges nucl&eacute;aires et s&eacute;curit&eacute; au travail</em></a>, Ottawa, 2007</li>
<li>CCSN, REGDOC 2.12.1, <em>Sites &agrave; s&eacute;curit&eacute; &eacute;lev&eacute;e : Force d&rsquo;intervention pour la s&eacute;curit&eacute; nucl&eacute;aire</em>, Ottawa, Canada, 2013.</li>
<li>CCSN, REGDOC-2.12.2, <a href="/fra/acts-and-regulations/regulatory-documents/published/html/regdoc2-12-2/index"><em>Cote de s&eacute;curit&eacute; donnant acc&egrave;s aux sites</em></a>, Ottawa, 2013.</li>
<li>CCSN, RD-321, <em>Crit&egrave;res portant sur les syst&egrave;mes et les dispositifs de protection physique sur les sites &agrave; s&eacute;curit&eacute; &eacute;lev&eacute;e</em>, Ottawa, 2010.</li>
<li>CCSN, RD-361, <em>Crit&egrave;res portant sur les dispositifs de d&eacute;tection de substances explosives, d&rsquo;imagerie par rayons X et de d&eacute;tection de m&eacute;tal sur les sites &agrave; s&eacute;curit&eacute; &eacute;lev&eacute;e</em>, Ottawa, 2010.</li>
<li>CCSN, RD-363, <a href="http://nuclearsafety.gc.ca/fra/acts-and-regulations/regulatory-documents/published/html/rd363/index"><em>Aptitudes psychologiques, m&eacute;dicales et physiques des agents de s&eacute;curit&eacute; nucl&eacute;aire</em></a>, Ottawa, 2008.</li>
<li>Groupe CSA, CSA N290.7-F14, <a href="http://shop.csa.ca/fr/canada/nuclear/n2907-14/invt/27037522014"><em>Cybers&eacute;curit&eacute; pour les centrales nucl&eacute;aires et les installations dot&eacute;es de petits r&eacute;acteurs</em></a>, Toronto, 2014</li>
<li>Agence internationale de l&rsquo;&eacute;nergie atomique (AIEA), INFCIRC 274, r&eacute;v.1, <a href="https://www.iaea.org/sites/default/files/infcirc274r1_fr.pdf"><em>Convention sur la protection physique des mati&egrave;res nucl&eacute;aires</em></a>, Vienne, 1980. Remarque : La Convention a &eacute;t&eacute; modifi&eacute;e en 2005 pour inclure les mati&egrave;res nucl&eacute;aires domestiques utilis&eacute;es, transform&eacute;es ou stock&eacute;es. Le Canada a accept&eacute; cet amendement, mais il attend la ratification officielle par l&rsquo;AIEA de cet amendement.</li>
<li>AIEA, INFCIRC/663, <a href="https://www.iaea.org/sites/default/files/publications/documents/infcircs/infcirc663_fr.pdf"><em>Code de conduite sur la s&ucirc;ret&eacute; et la s&eacute;curit&eacute; des sources radioactives &ndash; Compl&eacute;ment d&rsquo;orientations pour l&rsquo;importation et l&rsquo;exportation de sources radioactives</em></a>, 2005</li>  	<li>AIEA, Collection S&eacute;curit&eacute; nucl&eacute;aire n<sup>o</sup> 8, Guide d&rsquo;application, <a href="http://www-pub.iaea.org/MTCD/Publications/PDF/Pub1359f_web.pdf"><em>Mesures de pr&eacute;vention et de protection contre les menaces internes</em></a>, Vienne, 2008</li>
<li>AIEA, Collection S&eacute;curit&eacute; nucl&eacute;aire n<sup>o</sup> 9, Guide d&rsquo;application, <a href="http://www-pub.iaea.org/MTCD/Publications/PDF/Pub1348f_web.pdf"><em>S&eacute;curit&eacute; du transport des mati&egrave;res radioactives</em></a>, Vienne, 2008</li>
<li>AIEA, Collection S&eacute;curit&eacute; nucl&eacute;aire n<sup>o</sup> 10, Guide d&rsquo;application, <a href="http://www-pub.iaea.org/MTCD/Publications/PDF/Pub1386f_web.pdf"><em>&Eacute;laboration, utilisation et actualisation de la menace de r&eacute;f&eacute;rence</em></a>, Vienne, 2012</li>
<li>AIEA, Collection S&eacute;curit&eacute; nucl&eacute;aire n<sup>o</sup> 11, <a href="http://www-pub.iaea.org/MTCD/publications/PDF/Pub1387f_web.pdf"><em>S&eacute;curit&eacute; des sources radioactives</em></a>, Vienne, 2009</li>
<li>AIEA, Collection S&eacute;curit&eacute; nucl&eacute;aire n<sup>o</sup> 13, Recommandations, <a href="http://www-pub.iaea.org/MTCD/Publications/PDF/Pub1481f_web.pdf"><em>Recommandations de s&eacute;curit&eacute; nucl&eacute;aire sur la protection physique des mati&egrave;res nucl&eacute;aires et des installations nucl&eacute;aires</em></a> (INFCIRC/225/R&eacute;vision 5), Vienne, 2011.</li>
<li>AIEA, Collection S&eacute;curit&eacute; nucl&eacute;aire n<sup>o</sup> 14, Recommandations, <a href="http://www-pub.iaea.org/MTCD/Publications/PDF/Pub1487f_web.pdf"><em>Recommandations de s&eacute;curit&eacute; nucl&eacute;aire relatives aux mati&egrave;res radioactives et aux installations associ&eacute;es</em></a>, Vienne, 2011.</li>
<li>AIEA, Collection S&eacute;curit&eacute; nucl&eacute;aire n<sup>o</sup> 15, Recommandations, <a href="http://www-pub.iaea.org/MTCD/Publications/PDF/Pub1488f_web.pdf"><em>Recommandations de s&eacute;curit&eacute; nucl&eacute;aire sur les mati&egrave;res nucl&eacute;aires et autres mati&egrave;res radioactives non soumises &agrave; un contr&ocirc;le r&eacute;glementaire</em></a>, Vienne, 2011</li>
<li>AIEA, Collection S&eacute;curit&eacute; nucl&eacute;aire n<sup>o</sup> 16, Orientations techniques, Manuel de r&eacute;f&eacute;rence, <a href="http://www-pub.iaea.org/MTCD/Publications/PDF/Pub1505f_web.pdf"><em>Identification des zones vitales des installations nucl&eacute;aires</em></a>, Vienne, 2012</li>
<li>AIEA, Collection S&eacute;curit&eacute; nucl&eacute;aire de l&rsquo;AIEA n<sup>o</sup> 17, Orientations techniques Manuel de r&eacute;f&eacute;rence, <a href="http://www-pub.iaea.org/MTCD/Publications/PDF/Pub1527f_web.pdf"><em>La s&eacute;curit&eacute; informatique dans les installations nucl&eacute;aire</em></a>, Vienne, 2011</li>
<li>AIEA, Collection S&eacute;curit&eacute; nucl&eacute;aire n<sup>o</sup> 23-G, Guide d&rsquo;application, <a href="http://www-pub.iaea.org/MTCD/Publications/PDF/Pub1677_f_web.pdf"><em>S&eacute;curit&eacute; de l&rsquo;information nucl&eacute;aire</em></a>, Vienne, 2015</li>
<li>AIEA, TECDOC-953, <a href="http://www-pub.iaea.org/MTCD/publications/PDF/method2003_f_web.pdf"><em>M&eacute;thode d&rsquo;&eacute;laboration de mesures d&rsquo;intervention en cas de situation d&rsquo;urgence nucl&eacute;aire ou radiologique</em></a>, Vienne, 2009</li>
<li>AIEA, TECDOC-1276, <span lang="en"><em>Handbook on the physical protection of nuclear materials and facilities</em></span>, Vienne, 2002</li>
<li>National Counter Terrorism Security Office (UK), <span lang="en"><em>Security requirements for radioactive sources</em></span> (document restreint), 2011</li>
<li>Organisation du trait&eacute; de l&rsquo;Atlantique Nord (OTAN), Programme pour la science au service de la paix et de la s&eacute;curit&eacute;</li>
<li>Office of Radiological Security, Global Material Security (U.S.), <span lang="en"><em>Security Best Practices for Users of Radioactive Sources</em></span>, 2016.</li>
<li>Centre de la s&eacute;curit&eacute; des t&eacute;l&eacute;communications et Gendarmerie royale du Canada, <a href="https://www.cse-cst.gc.ca/fr/system/files/pdf_documents/tra-emr-1-f.pdf"><em>M&eacute;thodologie harmonis&eacute;e d&rsquo;&eacute;valuation des menaces et des risques (EMR)</em></a>, 2007</li>
<li>United States Nuclear Regulatory Commission (USNRC), <span lang="en"><a href="http://www.nrc.gov/reading-rm/doc-collections/enforcement/security/2005/ml053130364.pdf"><em>Increased Controls for Licensees that Possess Sources Containing Radioactive Material Quantities of Concern</em></a></span>, 2009</li>
<li>Nations Unies, <a href="https://www.unece.org/fr/trans/danger/publi/unrec/rev18/18files_f.html"><em>Recommandations relatives au transport des marchandises dangereuses &ndash; R&egrave;glement type</em></a> (18<sup>e</sup> &eacute;dition r&eacute;vis&eacute;e), New York et Gen&egrave;ve, 2013.</li>
</ol>
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
<li>2.2 Gestion du rendement humaine</li>
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