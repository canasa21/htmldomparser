import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "fr",
                pageTitle: "REGDOC-2.10.2 : Protection-incendie", 
                dateModified: "2019-11-08",
                langToggleUrl: "/eng/acts-and-regulations/consultation/comment/regdoc2-10-2"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<h2>Préface</h2>
<p>Le présent document dapplication de la réglementation fait partie de la série de documents dapplication de la réglementation de la CCSN sur la gestion des urgences et la protection-incendie,
qui couvre également la préparation aux urgences nucléaires et le cadre de rétablissement. La liste complète des séries figure à la fin de ce document et elle peut être
consultée sur le <a href="/fra/acts-and-regulations/regulatory-documents/index">site Web de la CCSN</a>.</p>
<p>Le REGDOC-2.10.2, <i>Protection-incendie</i>, énonce lorientation de la CCSN relativement à la protection-incendie dans les installations
nucléaires et les mines et usines de concentration duranium. Il fournit
également de lorientation sur létablissement dun programme de
protection-incendie (PPI).</p>
<p>Le PPI fait en sorte que les exigences de la <i>Loi sur la sûreté et la réglementation nucléaires</i> ainsi que les codes et normes de protection-incendie
inclus dans le permis ou le manuel des conditions de permis de linstallation sont
intégrés à la conception et à lexploitation dune manière contrôlée,
coordonnée et efficace à tous les états de fonctionnement de linstallation.</p>
<p>Conformément à la méthode graduelle, le niveau de
détail requis pour un PPI acceptable découle de la complexité de linstallation
et du risque potentiel pour les personnes et lenvironnement. Pour en savoir plus sur la mise en œuvre des documents dapplication
de la réglementation et sur la méthode graduelle, veuillez consulter le
REGDOC-3.5.3, <i>Principes fondamentaux de réglementation</i>.</p>
<div className="alert alert-info module-simplify mrgn-bttm-lg mrgn-tp-md">
<p>Le terme « doit
» est employé pour exprimer une exigence à laquelle le titulaire ou le demandeur de permis doit se conformer; le terme « devrait » dénote une
orientation ou une mesure conseillée; le terme « pourrait » exprime une option
ou une mesure conseillée ou acceptable dans les limites de ce document
dapplication de la réglementation; et le terme « peut » exprime une
possibilité ou une capacité.</p>
<p>Aucune information contenue dans le
présent document ne doit être interprétée comme libérant le titulaire de permis de toute autre exigence pertinente. Le titulaire de permis a la responsabilité
de prendre connaissance de tous les règlements et de toutes les conditions de
permis applicables et dy adhérer.</p>  	</div><div className="col-md-12 module-table-contents">  	<h2>Table des mati&egrave;res</h2>
<ul>
<li><a href="#sec1">1. Introduction</a>
<ul>
<li><a href="#sec1-1">1.1 Objet</a></li>
<li><a href="#sec1-2">1.2 Port&eacute;e</a></li>
<li><a href="#sec1-3">1.3 L&eacute;gislation pertinente</a></li>
<li><a href="#sec1-4">1.4 Normes nationales et internationales</a></li>
</ul>
</li>
<li><a href="#sec2">2. Champ d&rsquo;application</a></li>
<li><a href="#sec3">3. Exigences</a></li>
<li><a href="#sec4">4. Objectifs de protection-incendie</a></li>
<li><a href="#sec5">5. D&eacute;fense en profondeur &ndash; Perspective de la protection-incendie</a></li>
<li><a href="#sec6">6. Programme de protection-incendie</a>
<ul>
<li><a href="#sec6-1">6.1 R&ocirc;les, responsabilit&eacute;s et obligations redditionnelles</a></li>
<li><a href="#sec6-2">6.2 &Eacute;valuation de la protection-incendie</a>
<ul>
<li><a href="#sec6-2-1">6.2.1 Examen de la conformit&eacute; aux codes</a></li>
<li><a href="#sec6-2-2">6.2.2 &Eacute;valuation des risques d&rsquo;incendie</a></li>
</ul>
</li>
<li><a href="#sec6-3">6.3 Renseignements suppl&eacute;mentaires</a>
<ul>
<li><a href="#sec6-3-1">6.3.1 Analyse des arr&ecirc;ts s&ucirc;rs en cas d&rsquo;incendie</a></li>
<li><a href="#sec6-3-2">6.3.2 &Eacute;tudes probabilistes de s&ucirc;ret&eacute; sur l&rsquo;incendie</a></li>
</ul>
</li>
<li><a href="#sec6-4">6.4 Renseignements suppl&eacute;mentaires</a></li>
<li><a href="#sec6-5">6.5 &Eacute;valuation de la protection-incendie</a></li>
<li><a href="#sec6-6">6.6 Conception et modification</a>
<ul>
<li><a href="#sec6-6-1">6.6.1 Contr&ocirc;le des modifications techniques</a></li>
<li><a href="#sec6-6-2">6.6.2 Examen par un tiers de la conception et des modifications susceptibles d&rsquo;avoir une incidence sur la protection-incendie</a></li>
</ul>
</li>
<li><a href="#sec6-7">6.7 Inspection, essais et entretien</a></li>
<li><a href="#sec6-8">6.8 D&eacute;ficiences des structures, syst&egrave;mes et composants de protection-incendie</a>
<ul>
<li><a href="#sec6-8-1">6.8.1 Mesures compensatoires</a></li>
</ul>
</li>
<li><a href="#sec6-9">6.9 Formation</a></li>
<li><a href="#sec6-10">6.10 Renseignements suppl&eacute;mentaires</a>
<ul>
<li><a href="#sec6-10-1">6.10.1 Formation en s&eacute;curit&eacute;-incendie</a></li>
<li><a href="#sec6-10-2">6.10.2 Surveillance des risques d&rsquo;incendie</a></li>
</ul>
</li>
<li><a href="#sec6-11">6.11 Syst&egrave;me de gestion de la qualit&eacute;</a></li>
<li><a href="#sec6-12">6.12 Renseignements suppl&eacute;mentaires</a></li>
<li><a href="#sec6-13">6.13 Mesure, &eacute;valuation et am&eacute;lioration du PPI</a>
<ul>
<li><a href="#sec6-13-1">6.13.1 V&eacute;rification du programme de protection-incendie</a></li>
<li><a href="#sec6-13-2">6.13.2 Inspection de conformit&eacute; de la centrale ou de l&rsquo;installation</a></li>
<li><a href="#sec6-13-3">6.13.3 Syst&egrave;me de suivi des non-conformit&eacute;s</a></li>
</ul>
</li>
<li><a href="#sec6-14">6.14 Enqu&ecirc;te sur les incendies et signalement des incendies</a></li>
<li><a href="#sec6-15">6.15 Renseignements suppl&eacute;mentaires</a></li>
<li><a href="#sec6-16">6.16 Capacit&eacute; d&rsquo;intervention en cas d&rsquo;incendie</a></li>
<li><a href="#sec6-17">6.17 Renseignements suppl&eacute;mentaires</a></li>
</ul>
</li>
<li><a href="#ann-a">Annexe A : Crit&egrave;res de rendement associ&eacute;s aux objectifs de protection-incendie</a>
<ul>
<li><a href="#secA-1">A.1 Sant&eacute; et s&eacute;curit&eacute; des personnes</a></li>
<li><a href="#secA-2">A.2 Protection de l&rsquo;environnement</a></li>
<li><a href="#secA-3">A.3 Radioprotection</a></li>
<li><a href="#secA-4">A.4 S&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire</a></li>
<li><a href="#secA-5">A.5 S&ucirc;ret&eacute; des r&eacute;acteurs</a></li>
<li><a href="#secA-6">A.6 Renseignements suppl&eacute;mentaires</a></li>
</ul>
</li>
<li><a href="#ann-b">Annexe B : Niveaux de d&eacute;fense en profondeur</a></li>
<li><a href="#ann-c">Annexe C : Mod&eacute;lisation des incendies</a>
<ul>
<li><a href="#secC-1">C.1 Identification du rapport</a></li>
<li><a href="#secC-2">C.2 D&eacute;lai du projet</a></li>
<li><a href="#secC-3">C.3 Description du b&acirc;timent</a></li>
<li><a href="#secC-4">C.4 Qualifications de l&rsquo;analyste</a></li>
<li><a href="#secC-5">C.5 Objectif</a></li>
<li><a href="#secC-6">C.6 Donn&eacute;es d&rsquo;entr&eacute;e du mod&egrave;le</a></li>
<li><a href="#secC-7">C.7 Crit&egrave;res d&rsquo;acceptation ou de rendement</a></li>
<li><a href="#secC-8">C.8 Limites</a></li>
<li><a href="#secC-9">C.9 Sc&eacute;narios d&rsquo;incendie</a></li>
<li><a href="#secC-10">C.10 Mod&egrave;les d&rsquo;incendie utilis&eacute;s</a></li>
<li><a href="#secC-11">C.11 Hypoth&egrave;ses pour la mod&eacute;lisation des incendies</a></li>
<li><a href="#secC-12">C.12 Incertitude</a></li>
<li><a href="#secC-13">C.13 Sensibilit&eacute;</a></li>
<li><a href="#secC-14">C.14 R&eacute;sum&eacute; des r&eacute;sultats</a></li>
<li><a href="#secC-15">C.15 Conclusion</a></li>
<li><a href="#secC-16">C.16 R&eacute;f&eacute;rences</a></li>
<li><a href="#secC-17">C.17 Annexes</a></li>
<li><a href="#secC-18">C.18 Renseignements suppl&eacute;mentaires</a></li>
</ul>
</li>
<li><a href="#ann-d">Annexe D : &Eacute;carts par rapport aux codes et normes de protection-incendie</a>
<ul>
<li><a href="#secD-1">D.1 Approche fond&eacute;e sur le rendement</a></li>
<li><a href="#secD-2">D.2 &Eacute;quivalences</a></li>
<li><a href="#secD-3">D.3 Exceptions</a></li>
<li><a href="#secD-4">D.4 Approbation par l&rsquo;autorit&eacute; comp&eacute;tente</a></li>
</ul>
</li>
<li><a href="#ann-e">Annexe E : Pratiques op&eacute;rationnelles</a>
<ul>
<li><a href="#secE-1">E.1 Contr&ocirc;le des mati&egrave;res radioactives et des substances nucl&eacute;aires</a></li>
<li><a href="#secE-2">E.2 Contr&ocirc;le des substances dangereuses</a></li>
<li><a href="#secE-3">E.3 Contr&ocirc;le des gaz comprim&eacute;s, des liquides inflammables et des liquides combustibles</a></li>
<li><a href="#secE-4">E.4 Contr&ocirc;le des combustibles</a></li>
<li><a href="#secE-5">E.5 Gestion des mati&egrave;res en transit et tenue des locaux</a></li>
<li><a href="#secE-6">E.6 Contr&ocirc;le des sources d&rsquo;inflammation</a></li>
<li><a href="#secE-7">E.7 Renseignements suppl&eacute;mentaires</a></li>
<li><a href="#secE-8">E.8 Surveillance des risques d&rsquo;incendie</a></li>
<li><a href="#secE-9">E.9 Zones &agrave; acc&egrave;s restreint</a></li>
<li><a href="#secE-10">E.10 Utilisation de l&rsquo;&eacute;quipement de protection-incendie</a></li>
<li><a href="#secE-11">E.11 Surveillance et contr&ocirc;le de la pr&eacute;vention des incendies</a></li>
</ul>
</li>
<li><a href="#ann-f">Annexe F : Conception et construction des installations</a>
<ul>
<li><a href="#secF-1">F.1 Consid&eacute;rations propres aux installations nucl&eacute;aires</a></li>
<li><a href="#secF-2">F.2 Dimensionnement</a></li>
<li><a href="#secF-3">F.3 Conception et disposition du b&acirc;timent</a></li>
<li><a href="#secF-4">F.4 S&eacute;parations et barri&egrave;res coupe-feu</a></li>
<li><a href="#secF-5">F.5 Boucliers thermiques</a></li>
<li><a href="#secF-6">F.6 Contr&ocirc;le des mati&egrave;res combustibles (solides, liquides et gaz)</a></li>
<li><a href="#secF-7">F.7 Contr&ocirc;le des d&eacute;versements</a></li>
<li><a href="#secF-8">F.8 Protection des SSC et des substances dangereuses contre les risques d&rsquo;incendie</a></li>
<li><a href="#secF-9">F.9 Qualification sismique</a></li>
<li><a href="#secF-10">F.10 Syst&egrave;mes de communication vocale</a></li>
<li><a href="#secF-11">F.11 &Eacute;clairage de secours</a></li>
<li><a href="#secF-12">F.12 Voies d&rsquo;&eacute;vacuation et de sortie</a></li>
<li><a href="#secF-13">F.13 Zones de refuge</a></li>
</ul>
</li>
<li><a href="#ann-g">Annexe G : Rapport d&rsquo;examen par un tiers</a>
<ul>
<li><a href="#secG-1">G.1 Attentes &agrave; l&rsquo;&eacute;gard du rapport d&rsquo;examen par un tiers</a></li>
<li><a href="#secG-2">G.2 Attentes concernant l&rsquo;&eacute;valuation de l&rsquo;&eacute;tat de l&rsquo;installation ou de la centrale</a></li>
<li><a href="#secG-3">G.3 Qualifications de l&rsquo;examinateur tiers ind&eacute;pendant</a></li>
</ul>
</li>
<li><a href="#ann-h">Annexe H : D&eacute;ficiences</a>
<ul>
<li><a href="#secH-1">H.1 D&eacute;ficiences planifi&eacute;es</a></li>
<li><a href="#secH-2">H.2 Avis</a></li>
<li><a href="#secH-3">H.3 D&eacute;ficiences non planifi&eacute;es</a></li>
<li><a href="#secH-4">H.4 Remise en service des syst&egrave;mes</a></li>
<li><a href="#secH-5">H.5 Documentation</a></li>
</ul>
</li>
<li><a href="#ann-i">Annexe I : Intervention en cas d&rsquo;incendie</a>
<ul>
<li><a href="#secI-1">I.1 Planification de la lutte contre l&rsquo;incendie dans les installations nucl&eacute;aires</a></li>
<li><a href="#secI-2">I.2 D&eacute;termination des risques</a></li>
<li><a href="#secI-3">I.3 Planification pr&eacute;-incendie</a></li>
<li><a href="#secI-4">I.4 Capacit&eacute; d&rsquo;intervention</a></li>
<li><a href="#secI-5">I.5 Gestion des incidents</a></li>
<li><a href="#secI-6">I.6 Commandant des interventions</a></li>
<li><a href="#secI-7">I.7 Poste de commandement</a></li>
<li><a href="#secI-8">I.8 Gestion des risques</a></li>
<li><a href="#secI-9">I.9 &Eacute;quipement de lutte contre l&rsquo;incendie</a></li>
<li><a href="#secI-10">I.10 Corps de pompiers industriel</a></li>
<li><a href="#secI-10-1">I.10.1 Qualifications</a></li>
<li><a href="#secI-11">I.11 Acc&egrave;s pour la lutte contre l&rsquo;incendie</a></li>
<li><a href="#secI-12">I.12 &Eacute;vacuation de la fum&eacute;e et de la chaleur</a></li>
<li><a href="#secI-13">I.13 Formation</a></li>
<li><a href="#secI-14">I.14 Service d&rsquo;incendie hors site</a></li>
<li><a href="#secI-15">I.15 Ententes et communications</a></li>
<li><a href="#secI-16">I.16 D&eacute;termination des ressources requises pour la lutte contre l&rsquo;incendie</a></li>
<li><a href="#secI-17">I.17 Mieux-&ecirc;tre des pompiers</a></li>
<li><a href="#secI-18">I.18 Exercices</a></li>
<li><a href="#secI-19">I.19 Gestion de l&rsquo;air</a></li>
</ul>
</li>
<li><a href="#ann-j">Annexe J : Rapport d&rsquo;incendie</a></li>
<li><a href="#ann-k">Annexe K : Acronymes</a></li>
<li><a href="#glossary">Glossaire</a></li>
<li><a href="#ref">R&eacute;f&eacute;rences</a></li>
<li><a href="#sup">Renseignements suppl&eacute;mentaires</a></li>
</ul>
</div>
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
<h3 id="sec1-1">1.1 Objet </h3>
<p>Le REGDOC-2.10.2, <i>Protection-incendie</i>, fournit de lorientation
concernant lélaboration et la mise en œuvre dun programme de
protection-incendie (PPI) pour les installations nucléaires au Canada. Un PPI permet
de veiller à ce que les mesures de protection-incendie soient mises en œuvre de
manière contrôlée, coordonnée et efficace afin datteindre les objectifs de
protection-incendie.</p>
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
<h3 id="sec1-2">1.2 Portée </h3>
<p>Le présent document décrit en détail les exigences du PPI contenues
dans les normes CSA N293, <i>Protection contre lincendie dans les centrales
nucléaires</i> et CSA N393, <i>Protection contre lincendie dans les
installations qui traitent, manipulent ou stockent des substances nucléaires. </i>Lautorité
compétente (AC) en ce qui concerne les normes N293 et N393 est la CCSN.</p>
<p>Les titulaires de permis dont le fondement dautorisation
ninclut pas les normes susmentionnées sont encouragés à utiliser le présent
document à titre dinformation sur la mise en place de PPI dans une installation
nucléaire.</p>
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
<h3 id="sec1-3">1.3 Législation pertinente </h3>
<p>Les dispositions de la <i><a href="https://laws-lois.justice.gc.ca/fra/lois/n-28.3/">Loi sur la sûreté et la
réglementation nucléaires</a></i> (LSRN) et de ses règlements qui sappliquent le
plus au présent document sont les suivantes&nbsp;:</p>
<ul>
<li>LSRN, alinéa&nbsp;3a), sous-alinéa&nbsp;9a)(i) et alinéa&nbsp;24(4)b)</li>
<li><i><a href="https://laws-lois.justice.gc.ca/fra/reglements/DORS-2000-202/">Règlement
général sur la sûreté et la réglementation nucléaires</a></i> (RGSRN), alinéas&nbsp;12(1)c),
d) et f), et alinéa&nbsp;17e)</li>
<li><i><a href="https://laws.justice.gc.ca/fra/reglements/DORS-2000-204/page-1.html">Règlement
sur les installations nucléaires de catégorie I</a></i>, alinéa&nbsp;5e)
et alinéa&nbsp;6b)</li>
<li><i><a href="https://laws-lois.justice.gc.ca/fra/reglements/DORS-2000-205/">Règlement
sur les installations nucléaires et léquipement réglementé de catégorie II</a></i>,
alinéas&nbsp;3d), e) et f)</li>
<li><i><a href="https://laws-lois.justice.gc.ca/fra/reglements/DORS-2000-206/">Règlement
sur les mines et les usines de concentration duranium</a></i>, alinéa&nbsp;5(1)c),
alinéa&nbsp;5(2)c), alinéa&nbsp;6(1)b) et alinéa&nbsp;6(2)b)</li>
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
<div id="1.4"></div>
<h3 id="sec1-4">1.4 Normes nationales et internationales </h3>
<p>Les principes et éléments clés utilisés dans lélaboration
du présent document sont conformes aux normes nationales et internationales.</p>
<p>Les normes suivantes sappliquent au présent document dapplication
de la réglementation&nbsp;:</p>
<ul>
<li>CSA N293, <i>Protection contre lincendie dans les centrales
nucléaires </i><sup id="fnb1-ref"><a className="fn-lnk" href="#fnb1"><span className="wb-inv">Notes de bas de page </span>1</a></sup> </li>
<li>CSA N393, <i>Protection contre lincendie dans les installations
qui traitent, manipulent ou entreposent des substances nucléaires</i> <sup id="fnb2-ref"><a className="fn-lnk" href="#fnb2"><span className="wb-inv">Notes de bas de page </span>2</a></sup> </li>
<li>Agence internationale de lénergie atomique.
Collection normes de sûreté de lAIEA, Guide de sûreté NS-G-2.1, <i><a href="http://www-pub.iaea.org/MTCD/Publications/PDF/Pub1091f_web.pdf">Protection
contre lincendie des centrales nucléaires en exploitation</a>,</i> Vienne,
2000. <sup id="fnb3-ref"><a className="fn-lnk" href="#fnb3"><span className="wb-inv">Notes de bas de page </span>3</a></sup> </li>
<li><i>Code national du bâtiment du Canada, 2015</i> <sup id="fnb4-ref"><a className="fn-lnk" href="#fnb4"><span className="wb-inv">Notes de bas de page </span>4</a></sup> </li>
<li><i>Code national de prévention des incendies du Canada, 2015 </i>(CNPIC) <sup id="fnb5-ref"><a className="fn-lnk" href="#fnb5"><span className="wb-inv">Notes de bas de page </span>5</a></sup> </li>
<li>National Fire Protection Association, NFPA
600, Standard on Industrial Fire
Brigades, Quincy, Massachusetts, 2005. <sup id="fnb6-ref"><a className="fn-lnk" href="#fnb6"><span className="wb-inv">Notes de bas de page </span>6</a></sup> </li>
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
<h2 id="sec2"> 2. Champ dapplication</h2>
<p>Les programmes de protection-incendie (PPI) sont propres
au site. Les PPI tiennent compte du type particulier dinstallation nucléaire et
des risques pour les personnes et lenvironnement associés aux caractéristiques
particulières de linstallation et de ses activités.</p>
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
<h2 id="sec3">3. Exigences</h2>
<p>Les normes CSA N293 et CSA N393 sont habituellement des
éléments obligatoires du fondement dautorisation dune installation nucléaire.
Les titulaires de permis de telles installations doivent respecter les
exigences de ces normes. </p>
<p>De plus, tous les bâtiments sous réglementation fédérale
sont tenus dappliquer le <i>Code national du bâtiment du Canada </i>(CNBC) et
le <i>Code national de prévention des incendies du Canada </i>(CNPIC). Ces codes
sont complémentaires et destinés à être appliqués ensemble, et ils prescrivent
les exigences minimales de protection-incendie et de sécurité des personnes
dans les bâtiments de construction classique.</p>
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
<h2 id="sec4">4. Objectifs de protection-incendie</h2>
<p>En vertu de la LSRN, la CCSN a comme mandat de prévenir
les risques déraisonnables pour lenvironnement et la santé et la sécurité des
personnes. Conformément à ce mandat, les objectifs réglementaires de protection-incendie
(le cas échéant) visent à assurer&nbsp;:</p>
<ul>
<li>la santé et la sécurité des personnes</li>
<li>la protection de lenvironnement</li>
<li>la sûreté des substances nucléaires</li>
<li>la sûreté-criticité nucléaire</li>
<li>la sûreté des réacteurs</li>
</ul>
<p>Ces objectifs sont atteints lorsque les critères de
rendement correspondants sont remplis. De lorientation sur les critères de
rendement est présentée à lannexe&nbsp;A, Critères de rendement associés aux objectifs
de protection-incendie. Les dispositions qui satisfont aux critères de
rendement de lannexe&nbsp;A devraient être disponibles en tout temps (c.&#8209;à&#8209;d.
avant, pendant et après un incendie).</p>
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
<h2 id="sec5">5. Défense en profondeur&nbsp;– Perspective de la protection-incendie</h2>
<p>La défense en profondeur établit le cadre de sûreté de
base dune installation nucléaire, qui compense les défaillances humaines et
mécaniques potentielles. Elle impose plusieurs couches de protection et des
barrières successives pour prévenir le rejet de substances dangereuses, de substances
nucléaires et de matières radioactives dans lenvironnement. Ce cadre inclut la
protection des barrières en évitant dendommager à la fois linstallation et
les barrières elles&#8209;mêmes. Elle comprend également dautres mesures
visant à protéger le public et lenvironnement contre les dommages au cas où
les barrières ne seraient pas pleinement efficaces.</p>
<p>Le concept de la défense en profondeur contribue à
soutenir les objectifs généraux de sûreté de linstallation nucléaire. Il sapplique
à toutes les activités de sûreté liées à lorganisation, au comportement, à lexploitation
et à la conception afin de favoriser le chevauchement entre les barrières et
les couches de protection. Lobjectif est de réduire au minimum le risque de défaillance,
dappuyer la détection hâtive et le contrôle rapide des défaillances, le cas
échéant, et de limiter ou datténuer les résultats dune défaillance.</p>
<p>Pour de plus amples renseignements sur les attentes de la
CCSN concernant la défense en profondeur, veuillez consulter le REGDOC-3.5.3, <i>Principes
fondamentaux de réglementation.</i></p>
<p>Du point de vue de la protection-incendie, la défense en
profondeur sappuie sur plusieurs aspects combinés&nbsp;: la conception (p.&nbsp;ex.,
barrières physiques, séparation spatiale, systèmes de détection et dextinction
des incendies), la gestion de la protection-incendie (p.&nbsp;ex., procédures
opérationnelles), lassurance de la qualité et les arrangements en cas durgence.
La défense en profondeur sapplique à la protection&#8209;incendie à tous les
niveaux de linstallation et de ses activités connexes, depuis létablissement
dobjectifs de haut niveau pour linstallation jusquà la définition des
procédures détaillées et de léquipement requis pour atteindre ces objectifs.</p>
<p>Les PPI maintiennent un niveau approprié de défense en
profondeur pendant toute la durée de vie dune installation, en réalisant les
cinq niveaux de défense en profondeur décrits à la figure&nbsp;1.</p>
<p><b>Figure&nbsp;1&nbsp;: Les cinq niveaux de défense en profondeur
en matière de protection-incendie</b></p>
<p><img src="/images/regdoc-2-10-2/figure-1-fra.png" alt="Les cinq niveaux de défense en profondeur
en matière de protection-incendie"/></p>
<p>Lannexe&nbsp;B, Niveaux de défense en profondeur, décrit
les moyens par lesquels ces niveaux sont habituellement atteints pour assurer la
protection-incendie dans les installations nucléaires. Les barrières et les niveaux
de protection sont élaborés en fonction de linstallation concernée.</p>
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
<h2 id="sec6">6. Programme de protection-incendie</h2>
<p>Les programmes de protection-incendie (PPI) visent à réduire
au minimum à la fois la probabilité doccurrence et les conséquences dun
incendie. Les PPI dont se dotent les installations nucléaires fournissent lassurance
raisonnable que, grâce à la défense en profondeur, un incendie nempêchera pas
lexécution des fonctions nécessaires pour un arrêt sûr. De plus, les PPI permettent
de minimiser les rejets radioactifs dans lenvironnement et limpact sur la
santé et la sécurité des personnes liés à un incendie.</p>
<p>Lobjectif dun PPI est dassurer et daméliorer la
sécurité-incendie par les mesures suivantes&nbsp;:</p>
<ul>
<li>déterminer et indiquer les procédures et processus permettant de gérer les activités de protection-incendie de façon cohérente et de prévenir
les risques déraisonnables pour la sûreté nucléaire, lenvironnement et la
santé et sécurité des personnes liés à un incendie</li>
<li>décrire lapproche planifiée et systématique nécessaire pour
fournir une assurance raisonnable que toutes les exigences de protection-incendie
sont satisfaites</li>
<li>démontrer la conformité aux exigences réglementaires de protection-incendie</li>
</ul>
<p>Les PPI sont mis en œuvre de façon planifiée, coordonnée
et contrôlée à chaque étape du cycle de vie dune installation.</p>
<p>Les PPI devraient comporter des renseignements détaillés
sur les éléments suivants&nbsp;:</p>
<ul>
<li>les rôles, responsabilités et obligations redditionnelles</li>
<li>lévaluation de la sécurité-incendie (p.&nbsp;ex., conformité aux
codes, évaluations des risques dincendie, analyse des arrêts sûrs en cas dincendie
et étude probabiliste de sûreté sur la lutte contre lincendie)</li>
<li>les contrôles des opérations de prévention des incendies</li>
<li>la conception (p.&nbsp;ex., la détection et la notification des
incendies, lextinction des incendies, lindice de résistance au feu des structures
du bâtiment, les matériaux de construction, lévacuation et lapprovisionnement
en eau)</li>
<li>la prévention (p.&nbsp;ex., le contrôle des sources dinflammation;
linspection, les essais et lentretien [IEE] des dispositifs de protection-incendie;
et le contrôle des matières inflammables et combustibles)</li>
<li>linspection, lessai et lentretien</li>
<li>les déficiences des structures, systèmes et composants (SSC) de protection-incendie</li>
<li>la formation</li>
<li>le système de gestion de la qualité</li>
<li>la mesure, lévaluation et lamélioration du PPI</li>
<li>les enquêtes sur les incendies et le signalement des incendies</li>
<li>la capacité dintervention en cas dincendie</li>
</ul>
<p>Chaque élément du programme requiert des ressources
suffisantes et régies par les politiques, procédures et processus approuvés du
titulaire de permis. Ces éléments, une fois intégrés, formeront un PPI complet.
Comme il est décrit aux sections&nbsp;6.1 à 6.11, chaque élément du PPI comporte
un certain nombre de critères.</p>
<p>Les installations qui
manipulent, utilisent, traitent ou stockent des substances nucléaires peuvent
faire partie dorganisations plus grandes disposant déjà dun PPI. Par exemple,
une université peut avoir des installations de recherche nucléaire sur son campus.
Dans de tels cas, le programme de linstallation principale peut être acceptable
tel quel, ou élargi pour démontrer que les objectifs de protection-incendie sont
atteints. Lorsque cest le cas, linstallation principale autorisée documente habituellement
dans son PPI comment toutes les exigences du PPI pour les installations
secondaires sont prises en compte.</p>
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
<h3 id="sec6-1">6.1 Rôles, responsabilités et obligations redditionnelles </h3>
<p>Les exigences concernant la définition des rôles, des responsabilités
et des obligations redditionnelles du personnel associé aux activités de
protection-incendie sont décrites dans les normes CSA N293 et N393.</p>
<p>Le PPI devrait&nbsp;:</p>
<ul>
<li>indiquer le poste de la haute direction qui a lautorité et la responsabilité
immédiates à légard du PPI</li>
<li>décrire les interfaces de protection-incendie avec dautres organisations
et déterminer les responsabilités concernant la coordination des activités</li>
<li>indiquer le responsable de ladministration et de la coordination
quotidiennes du PPI et de sa mise en œuvre</li>
<li>indiquer les autorités responsables de la mise en œuvre des
différents aspects du PPI</li>
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
<div id="6.2"></div>
<h3 id="sec6-2">6.2 Évaluation de la protection-incendie </h3>
<p>Une évaluation de la protection-incendie (EPI) est un
ensemble danalyses ou dévaluations qui démontre que les objectifs de sûreté
nucléaire, de prévention des rejets radioactifs, de sécurité des personnes et
de prévention des pertes économiques sont atteints. LEPI comprend un examen de
la conformité aux codes (ECC), une évaluation des risques dincendie (ERI) et,
dans le cas des réacteurs (y compris les réacteurs de puissance, les réacteurs non
producteurs de puissance et les réacteurs servant à la production disotopes
médicaux), une analyse des arrêts sûrs en cas dincendie (AASI). Les exigences relatives
à lEPI se trouvent dans les normes CSA N293 et N393. Pour de plus amples
renseignements sur la modélisation des incendies, voir lannexe&nbsp;B.</p>
<p>LEPI permet de démontrer avec suffisamment de confiance que
les normes applicables sont respectées, notamment les normes CSA N293 et N393, en
établissant ce qui suit&nbsp;:</p>
<ul>
<li>un processus dassurance de la qualité approuvé, effectué par des
analystes qualifiés</li>
<li>une méthode danalyse systématique</li>
<li>des données vérifiées</li>
<li>des hypothèses justifiées</li>
<li>des modèles dincendie vérifiés et validés</li>
<li>un certain degré de prudence</li>
<li>un processus dexamen</li>
</ul>
<p>Les résultats de lEPI sont utilisés pour&nbsp;:</p>
<ul>
<li>la conception des installations</li>
<li>la conception et les exigences fonctionnelles des SSC</li>
<li>les programmes de mise en service</li>
<li>les manuels de conception et dexploitation</li>
<li>les procédures dexploitation</li>
<li>les procédures dinspection et dessais périodiques</li>
<li>les activités dentretien</li>
<li>les procédures dexploitation en cas durgence</li>
<li>les plans de gestion des urgences</li>
<li>les plans de déclassement de linstallation</li>
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
<div id="6.2.1"></div>
<h4 id="sec6-2-1">6.2.1 Examen de la conformité aux codes</h4>
<p>Lexamen de la conformité aux codes (ECC) vise à évaluer
la conception et lexploitation de linstallation selon les codes de
construction applicables (p.&nbsp;ex., le <i>Code national du bâtiment du
Canada</i>), la version en vigueur du code de prévention des incendies et les normes
nucléaires applicables (p.&nbsp;ex., CSA N293, CSA N393). Cet examen devrait aussi
viser les structures, les systèmes et les composants de protection-incendie,
notamment&nbsp;:</p>
<ul>
<li>les systèmes dextinction (p.&nbsp;ex., pompes et conduits dalimentation
en eau)</li>
<li>les systèmes de détection des incendies</li>
<li>léquipement de lutte manuelle contre les incendies (p.&nbsp;ex.,
extincteurs portatifs, robinets dincendie armés et bornes dincendie)</li>
<li>le stockage, lapprovisionnement et lutilisation des gaz et des liquides
inflammables</li>
<li>les éléments de protection-incendie (p.&nbsp;ex., les cloisons
coupe-feu, les portes coupe-feu et les joints des points de pénétration)</li>
</ul>
<p>Lorsque la conception des éléments de protection-incendie a
fait lobjet dun rapport dexamen par un tiers (RET), lECC devrait y faire
référence.</p>
<p>Si on fait appel à des solutions de rechange, lECC doit
indiquer comment lintention des exigences est respectée. Pour de plus amples
renseignements sur les écarts par rapport aux codes et normes applicables et les
exceptions approuvées par lautorité compétente, veuillez consulter lannexe&nbsp;D,
Écarts par rapport aux codes et normes de protection-incendie.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.2.2"></div>
<h4 id="sec6-2-2">6.2.2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Évaluation des risques dincendie</h4>
<p>Une évaluation des risques dincendie (ERI) vise à
démontrer que les objectifs de sécurité&#8209;incendie sont atteints grâce à lintégration
de systèmes et de caractéristiques de protection&#8209;incendie appropriés dans
la conception, la construction et lexploitation de linstallation. Cette
analyse fait partie intégrante dun PPI efficace, car elle offre une évaluation
complète des événements initiateurs, des conséquences et des mesures de sûreté requises
pour linstallation. Les exigences concernant lERI se trouvent dans les normes
CSA N293 et N393.</p>
<p>Une ERI évalue les risques dincendie potentiels, ainsi
que les systèmes de protection-incendie et ses caractéristiques (y compris les
attributs physiques et les éléments du programme) utilisés pour atténuer les
effets des incendies. LERI confirme que linstallation visée (y compris les
dispositions relatives à la conception, à lexploitation et à lentretien) répondra
aux objectifs de protection-incendie figurant dans le PPI. Les normes CSA N293
et N393 fournissent de lorientation supplémentaire sur la préparation dune ERI.</p>
<p>Conformément à la méthode graduelle, le niveau de détail nécessaire
pour réaliser une ERI acceptable dépend de la complexité de linstallation et
du risque potentiel pour les personnes et lenvironnement.</p>
<p>LERI peut servir dintrant pour
les études probabilistes de sûreté (EPS).</p>
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
<h3 id="sec6-3">6.3 Renseignements supplémentaires </h3>
<p>Des renseignements supplémentaires concernant lanalyse
déterministe de la sûreté figurent dans le REGDOC-2.4.1, <i>Analyse
déterministe de la sûreté</i> <sup id="fnb7-ref"><a className="fn-lnk" href="#fnb7"><span className="wb-inv">Notes de bas de page </span>7</a></sup> .</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.3.1"></div>
<h4 id="sec6-3-1">6.3.1 Analyse des arrêts sûrs en cas dincendie</h4>
<p>Lanalyse des arrêts sûrs en cas dincendie (AASI) démontre
quil existe des moyens établis pour atteindre les objectifs et les critères de
rendement en matière de sûreté nucléaire en cas dincendie. Les exigences relatives
à lAASI se trouvent dans les normes CSA N293 et N393.</p>
<p>LAASI peut servir dintrant pour les EPS.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.3.2"></div>
<h4 id="sec6-3-2">6.3.2 Études probabilistes de sûreté&nbsp;sur lincendie</h4>
<p>Les EPS sont préparées pour les installations dotées dun
réacteur. Les objectifs dune EPS sur lincendie sont les suivants&nbsp;:</p>
<ul>
<li>déterminer les scénarios dévénements susceptibles dentraîner
une dégradation importante du cœur du réacteur</li>
<li>fournir une analyse systématique afin de donner lassurance que
la conception et lexploitation de la centrale présentent un niveau de risque acceptable
pour le public</li>
<li>fournir des évaluations probabilistes concernant loccurrence de
dommages graves et de rejets hors site importants</li>
<li>déterminer les vulnérabilités de la centrale et les systèmes pour
lesquels lamélioration de la conception ou la modification des procédures dexploitation
pourraient réduire la probabilité daccidents graves ou atténuer leurs conséquences</li>
<li>évaluer la pertinence des procédures de gestion des accidents et
des procédures durgence de la centrale</li>
</ul>
<p>Les normes CSA N293 ou N393 nexigent pas dEPS sur lincendie.
Cependant, les titulaires de permis sont tenus de se
conformer au REGDOC-2.4.2, <i>Études probabilistes de sûreté (EPS) pour les
centrales nucléaires </i><sup id="fnb8-ref"><a className="fn-lnk" href="#fnb8"><span className="wb-inv">Notes de bas de page </span>8</a></sup> <i>.</i></p>
<p>Le REGDOC-2.4.2 exige que les titulaires de permis fassent
autoriser par la CCSN la méthode et les codes informatiques qui seront utilisés
pour leur EPS, avant de pouvoir les utiliser. De plus, afin dexaminer la
qualité des EPS sur lincendie, le personnel de la CCSN sappuie sur plusieurs
normes&nbsp;: ASME/ANS&nbsp;– <i>Probabilistic Risk Assessment Standard;</i> CSA
N290.17.F17, <i>Études probabilistes de sûreté pour les centrales nucléaires</i> <sup id="fnb9-ref"><a className="fn-lnk" href="#fnb9"><span className="wb-inv">Notes de bas de page </span>9</a></sup> ; NUREG (p.&nbsp;ex., NUREG/CR-6850 pour lincendie) <sup id="fnb10-ref"><a className="fn-lnk" href="#fnb10"><span className="wb-inv">Notes de bas de page </span>10</a></sup> ; et documents de lAIEA
(notamment les documents IAEA-TECDOC-1135, <i>Regulatory review of
probabilistic safety assessment (PSA)</i> <i>Level 1 </i><sup id="fnb11-ref"><a className="fn-lnk" href="#fnb11"><span className="wb-inv">Notes de bas de page </span>11</a></sup> <i>,</i> et
IAEA-TECDOC-1229,<i> Regulatory review of probabilistic safety assessment (PSA)
Level 2</i>) <sup id="fnb12-ref"><a className="fn-lnk" href="#fnb12"><span className="wb-inv">Notes de bas de page </span>12</a></sup> <i>.</i></p>
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
<h3 id="sec6-4">6.4 Renseignements supplémentaires </h3>
<p>Des renseignements supplémentaires sur la réalisation des EPS
figurent dans les documents suivants&nbsp;: REGDOC-2.4.2, <i>Études probabilistes
de sûreté (EPS) pour les centrales nucléaires</i>, CSA&nbsp;N290.17-17, <i>Études
probabilistes de sûreté pour les centrales nucléaires</i> et <i>Fire PRA
Methodology for Nuclear Power Facilities, Volume&nbsp;2: Detailed Methodology</i> de la Nuclear Regulatory Commission des États-Unis.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.5"></div>
<h3 id="sec6-5">6.5 Évaluation de la protection-incendie </h3>
<p>Les exigences relatives au contrôle opérationnel en
matière de prévention des incendies figurent dans les normes CSA N293 et N393. Les
PPI comprennent des procédures opérationnelles appropriées décrivant en détail
les processus et les contrôles en place pour sassurer que les objectifs de
sécurité-incendie continuent dêtre atteints pendant tous les états de
fonctionnement.</p>
<p>Les procédures de prévention des incendies pourraient
comprendre&nbsp;:</p>
<ul>
<li>le contrôle des matières radioactives et des substances
nucléaires</li>
<li>le contrôle des substances dangereuses</li>
<li>le contrôle des gaz comprimés, des liquides inflammables et des liquides
combustibles</li>
<li>le contrôle des matières combustibles</li>
<li>la gestion des matières en transit</li>
<li>le contrôle des sources dinflammation et du travail à chaud</li>
<li>la surveillance des incendies</li>
<li>lentretien des locaux</li>
<li>laccès aux zones restreintes</li>
<li>lutilisation de léquipement de protection-incendie</li>
<li>la supervision et la surveillance de la prévention des incendies</li>
</ul>
<p>Les procédures varieront selon le type dinstallation et
le risque correspondant. Pour de plus amples renseignements sur les contrôles
opérationnels, veuillez consulter lannexe&nbsp;E.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.6"></div>
<h3 id="sec6-6">6.6 Conception et modification </h3>
<p>Un processus dexamen permet de sassurer que linstallation
et les activités connexes continuent de respecter les objectifs de
protection-incendie ainsi que les codes et normes applicables du bâtiment et de
prévention des incendies, pour les activités suivantes&nbsp;:</p>
<ul>
<li>les nouvelles conceptions</li>
<li>les modifications et altérations aux installations existantes</li>
<li>le changement dutilisation</li>
<li>les modifications réglementaires aux exigences opérationnelles (p.&nbsp;ex.,
les activités dIEE requises pour les systèmes de protection-incendie, conformément
au CNPIC)</li>
</ul>
<p>Des procédures sont établies pour assurer un examen
approprié des changements apportés à la conception, à lexploitation, aux procédures,
à loccupation, au travail sur le terrain ou aux risques dincendie afin de
confirmer le respect continu des objectifs de sûreté du PPI.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.6.1"></div>
<h4 id="sec6-6-1">6.6.1 Contrôle des modifications techniques</h4>
<p>Les processus de contrôle des modifications techniques
permettent de sassurer que les modifications, les changements dutilisation ou
les altérations à linstallation ou aux processus sont conformes aux codes et aux
normes applicables et naugmentent pas le risque dincendie pour les personnes ou
lenvironnement. Les processus de contrôle des modifications devraient tenir
compte des variables suivantes&nbsp;:</p>
<ul>
<li>les codes et normes de protection-incendie en vigueur</li>
<li>les versions en vigueur des codes et des normes lorsque des mises
à niveau ou des modifications sont apportées</li>
<li>un examen par rapport à lERI et, sil y a lieu, lAASI</li>
<li>les mises à jour des divers examens et études (ECC, ERI et AASI) à
la suite dun changement dutilisation ou dune modification</li>
<li>lexamen des achats déquipement de protection-incendie par des personnes
qui connaissent bien les exigences de protection-incendie</li>
<li>les exigences concernant les activités dIEE, associées à la
conception</li>
<li>des inspections de vérification et des essais de mise en service
pour sassurer que les SSC nouveaux ou modifiés fonctionnent comme prévu</li>
<li>les dessins, les dossiers et les spécifications mis à jour de
manière à bien refléter la conception</li>
<li>le besoin éventuel dun examen approprié de la conception par les
pairs</li>
<li>le besoin éventuel dobtenir un RET indépendant sur la conception </li>
</ul>
<p>Pour de plus amples renseignements et de lorientation
concernant les exigences de conception particulières ou uniques, veuillez
consulter lannexe&nbsp;F, Conception et construction des installations.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.6.2"></div>
<h4 id="sec6-6-2">6.6.2 Examen par un tiers de la conception et des modifications susceptibles davoir une incidence sur la protection-incendie</h4>
<p>Les examens par des tiers visent à évaluer le respect des codes
et des normes figurant dans le fondement dautorisation dune installation
nucléaire. Les examens naccordent pas de dérogations ou déquivalences. Ils
consistent plutôt à donner un avis professionnel sur la méthode et le caractère
adéquat dune solution de rechange ou dune équivalence, mais il revient à la
CCSN de les accepter.</p>
<p>Les modifications comprennent les changements temporaires
ou permanents qui peuvent avoir une incidence sur la protection-incendie et ne
se limitent pas aux systèmes actifs de protection-incendie (p.&nbsp;ex., voie
de sortie, changement dutilisation, stockage).</p>
<p>Lexamen devrait évaluer les aspects suivants de la
documentation de la conception&nbsp;:</p>
<ul>
<li>les altérations, les modifications ou les changements dutilisation
afin de déterminer si les codes, les normes et les bonnes pratiques dingénierie
appropriés sont respectés</li>
<li>lintention de la conception, pour déterminer si elle sera
atteinte</li>
<li>lincidence sur lanalyse de la sûreté de linstallation ou lERI,
ou vérification que limpact de lERI a été pris en compte</li>
<li>les exigences découlant de laltération, de la modification ou du
changement dutilisation (p.&nbsp;ex., le <i>Code national du bâtiment du
Canada</i> pourrait exiger que linstallation dun système de gicleurs dincendie
soit accompagné de linstallation dun système dalarme incendie et de digues
pour contenir le ruissellement de leau des gicleurs)</li>
</ul>
<p>Dans certains cas, à la discrétion de lexaminateur, on
procédera à des inspections sur le terrain ou encore, la Commission observera
les essais. Le besoin de recourir à des activités dexamen supplémentaires, en
plus de lexamen documentaire, dépend de la complexité et de la portée de la modification,
et également des dangers potentiels qui peuvent exister.</p>
<p>Pour de plus amples
renseignements sur les attentes à légard du RET, veuillez consulter lannexe&nbsp;H,
Déficiences.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.7"></div>
<h3 id="sec6-7">6.7 Inspection, essais et entretien </h3>
<p>Les activités dinspection, dessais et dentretien (IEE) réduisent
au minimum le risque de rendement inadéquat dû à un entretien insuffisant ou
absent.</p>
<p>Les exigences concernant les activités dIEE figurent dans
les normes CSA N293 et N393.</p>
<p>Pour sassurer que les activités dIEE sont exécutées de
façon uniforme et à la bonne fréquence, elles doivent être saisies dans un
système de contrôle ou de suivi du travail. Cette procédure devrait indiquer&nbsp;:</p>
<ul>
<li>le responsable de lexécution des travaux dIEE</li>
<li>la fréquence des tâches</li>
<li>le renvoi entre les tâches requises et le code applicable ou lexigence
standard</li>
<li>les outils particuliers nécessaires à laccomplissement de la
tâche</li>
<li>les permis de travail et le verrouillage des systèmes</li>
<li>les moyens de signaler les lacunes et den assurer le suivi</li>
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
<div id="6.8"></div>
<h3 id="sec6-8">6.8 Déficiences des structures, systèmes et composants de
protection-incendie </h3>
<p>Le PPI indique les procédures à suivre pour les déficiences
planifiées et non planifiées des structures, systèmes et composants (SSC) de
protection-incendie. Cela permet de sassurer que les objectifs de
protection-incendie de linstallation sont atteints et que les risques associés
à la condition anormale due aux déficiences sont correctement gérés. Les procédures
à suivre en cas de déficience sont les suivantes&nbsp;:</p>
<ul>
<li>réduire au minimum la durée de la déficience (planifiée et non
planifiée)</li>
<li>prévenir la déficience ou la dégradation simultanée des systèmes redondants
ou des processus de protection.</li>
<li>contrôler les déficiences dans le cadre dun système géré (p.&nbsp;ex.,
un permis)</li>
<li>sassurer que toutes les pièces et tous les composants requis
sont disponibles avant les déficiences planifiées</li>
<li>sassurer que des mesures sont en place pour atténuer les risques
dus aux déficiences non planifiées (p.&nbsp;ex., tenir en stock des pièces de
rechange et disposer de systèmes de sauvegarde redondants)</li>
<li>mettre en place des mesures compensatoires pour maintenir un
niveau de sûreté équivalent à celui que procurait le système déficient</li>
</ul>
<p>Pour de plus amples renseignements concernant les déficiences
planifiées et non planifiées, veuillez consulter lannexe&nbsp;G.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.8.1"></div>
<h4 id="sec6-8-1">6.8.1 Mesures compensatoires</h4>
<p>Les exigences relatives aux mesures compensatoires
figurent dans les normes CSA N293 et N393.</p>
<p>Les mesures compensatoires désignent les mesures et les actions prises si la déficience dun
SSC de protection-incendie empêche le système ou lélément en question de
remplir sa fonction prévue. Les mesures compensatoires sont des moyens
temporaires visant à fournir une assurance raisonnable que
la fonction nécessaire sera compensée pendant la déficience ou que des mesures
seront prises pour réduire la probabilité dun incendie ou en atténuer les
conséquences. Les mesures compensatoires devraient être clairement liées à létat dégradé ou au SSC de protection&#8209;incendie déficient.</p>
<p>Les procédures relatives aux déficiences devraient
comprendre de lorientation concernant les mesures compensatoires appropriées,
entre autres&nbsp;:</p>
<ul>
<li>la surveillance des incendies ou les méthodes de détection
temporaires visant à compenser la déficience des systèmes de détection
automatiques et fixes</li>
<li>dautres moyens daviser les occupants, y compris des moyens dalerter
les occupants en cas de déficience dun système dalerte-incendie</li>
<li>des systèmes dextinction ou des appareils déployés au préalable
pour compenser les systèmes dextinction déficients</li>
<li>des branchements temporaires deau aux systèmes et équipements dextinction
des incendies afin de compenser les déficiences dans lapprovisionnement en eau</li>
<li>des moyens dindiquer aux intervenants durgence la nature et limpact
de la déficience, et tout besoin en appareils et ressources supplémentaires</li>
<li>la réduction au minimum des risques dincendie en imposant des
limites temporaires aux charges combustibles ou aux combustibles exposés</li>
<li>limposition de limites temporaires sur les sources dinflammation</li>
<li>la restriction des activités opérationnelles</li>
<li>la restriction de laccès des occupants aux zones touchées de linstallation</li>
<li>laugmentation
du nombre de pompiers industriels à linstallation pendant la déficience</li>
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
<div id="6.9"></div>
<h3 id="sec6-9">6.9 Formation </h3>
<p>Les exigences relatives à la formation figurent dans
les normes CSA N293 et N393. La formation devrait aussi être offerte aux
travailleurs qui ne sont pas des employés à temps plein de linstallation. Une approche
systématique à la formation fournit aux titulaires de permis des directives
pour déterminer les besoins en formation, ainsi que de lorientation pour
élaborer et présenter un programme de formation.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.10"></div>
<h3 id="sec6-10">6.10 Renseignements supplémentaires </h3>
<p>Des renseignements supplémentaires sur lapproche
systématique à la formation et la tenue des dossiers figurent dans le REGDOC-2.2.2, <i>La formation du personnel,</i> version&nbsp;2 <sup id="fnb13-ref"><a className="fn-lnk" href="#fnb13"><span className="wb-inv">Notes de bas de page </span>13</a></sup> .</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.10.1"></div>
<h4 id="sec6-10-1">6.10.1 Formation en sécurité-incendie</h4>
<p>Les exigences concernant la
formation en sécurité des installations figurent dans les normes CSA N293 et
N393. Tous les occupants de linstallation devraient recevoir une formation de
base en sécurité-incendie et en prévention des incendies, et se familiariser avec
les procédures de prévention des incendies, le signalement des incendies et les
alarmes durgence de linstallation. En outre, tous les occupants devraient
connaître la structure générale de la protection-incendie de linstallation et
leurs responsabilités dans le cadre du PPI.</p>
<p>Une formation adéquate en prévention
des incendies offerte à tout le personnel de linstallation comprend des instructions
concernant les domaines qui sappliquent aux fonctions de chacun dans linstallation.
La formation peut comprendre ce qui suit&nbsp;:</p>
<ul>
<li>la prévention des incendies</li>
<li>les rudiments de la science des incendies</li>
<li>lidentification et linterprétation des différents signes et
avertissements</li>
<li>lidentification des alarmes et les mesures à prendre</li>
<li>les procédures de notification et les renseignements connexes, notamment
les numéros de téléphone durgence et les procédures pour déclencher les
alarmes</li>
<li>les restrictions et les emplacements autorisés pour le rangement
temporaire de matériaux combustibles et non combustibles en transit</li>
<li>les restrictions concernant lutilisation et lentreposage de substances
dangereuses</li>
<li>les mesures appropriées à prendre lorsquun incendie est
découvert (p.&nbsp;ex., aviser la salle de commande, les responsables de la
sécurité ou dautres intervenants durgence, tenter déteindre lincendie, actionner
les systèmes locaux dextinction des incendies)</li>
<li>la réponse appropriée lorsquun incendie est signalé</li>
<li>les contrôles administratifs concernant lutilisation de combustibles
et de sources dinflammation</li>
<li>lintervention en cas de déversements de liquides inflammables ou
combustibles, de rejets de gaz ou de fuites</li>
<li>des exercices réels à laide déquipement dextinction dincendie</li>
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
<div id="6.10.2"></div>
<h4 id="sec6-10-2">6.10.2 Surveillance des risques dincendie</h4>
<p>Les exigences concernant la surveillance des risques dincendie
figurent dans les normes CSA N293 et N393. La surveillance des risques dincendie
permet dobserver et de contrôler les risques dincendie associés au travail à
chaud, et elle peut servir de mesure compensatoire pour les dispositifs et systèmes
de protection-incendie déficients. Selon la complexité de linstallation, la nature
du danger et les risques connexes, les PPI peuvent comprendre une formation sur
la surveillance continue et la surveillance mobile des risques dincendie.</p>
<p>La surveillance continue des incendies comporte des activités
de veille constante pendant une période prédéterminée dans une zone où la
surveillance continue est possible. La surveillance mobile des risques dincendie
désigne la surveillance régulière et récurrente dans des secteurs précis, selon
un itinéraire de patrouille prédéterminé. </p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.11"></div>
<h3 id="sec6-11">6.11 Système de gestion de la qualité </h3>
<p>Les exigences relatives au système de gestion de la
qualité (SGQ) figurent dans les normes CSA N293 et N393.</p>
<p>Les dispositions du SGQ associées au PPI comprennent les processus
visant à sassurer que les systèmes de protection-incendie sont conçus, fabriqués,
mis en œuvre, testés, entretenus et utilisés de manière à ce quils
fonctionnent comme prévu. En particulier, les dispositions du SGQ en place visent
à faciliter le contrôle des aspects suivants&nbsp;:</p>
<ul>
<li>les documents de conception et dachat</li>
<li>les instructions, procédures et dessins</li>
<li>le matériel, léquipement et les services achetés</li>
<li>les activités dinspection</li>
<li>les activités dIEE et létat de fonctionnement</li>
<li>les éléments non conformes et les mesures correctives</li>
<li>les dossiers et les vérifications</li>
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
<div id="6.12"></div>
<h3 id="sec6-12">6.12 Renseignements supplémentaires </h3>
<p>Des renseignements supplémentaires se trouvent dans la
norme CSA N286, <i>Exigences relatives aux systèmes de gestion des centrales
nucléaires </i><sup id="fnb14-ref"><a className="fn-lnk" href="#fnb14"><span className="wb-inv">Notes de bas de page </span>14</a></sup> .</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.13"></div>
<h3 id="sec6-13">6.13 Mesure, évaluation et amélioration du PPI </h3>
<p>Les exigences concernant la mesure, lévaluation et lamélioration
du PPI figurent dans les normes CSA N293 et N393.</p>
<p>Les besoins damélioration sont déterminés en vérifiant
régulièrement la mise en œuvre adéquate du PPI, ce qui consiste à&nbsp;:</p>
<ul>
<li>surveiller et mesurer les processus organisationnels qui
soutiennent le programme</li>
<li>effectuer des auto-évaluations et des évaluations indépendantes, et
analyser les résultats des évaluations</li>
<li>déterminer les non-conformités et élaborer des mesures correctives
et préventives</li>
<li>examiner régulièrement les résultats des évaluations et les
mesures prises</li>
</ul>
<p>Le cycle damélioration continue commence par une
surveillance régulière du rendement et se poursuit par des examens dévaluation
prévus pour déceler toute non-conformité et sassurer que les mesures
préventives ou correctives appropriées sont prises.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.13.1"></div>
<h4 id="sec6-13-1">6.13.1 Vérification
du programme de protection-incendie</h4>
<p>Une vérification du PPI consiste en une évaluation, par un
tiers, de la mise en œuvre et de lefficacité de chaque élément du programme. Les
exigences concernant la vérification du PPI figurent dans les normes CSA N293
et N393. Les constatations découlant de la vérification par un tiers devraient
être mises à la disposition de la CCSN. La
vérification devrait confirmer que&nbsp;:</p>
<ul>
<li>les rôles et les responsabilités sont documentés et compris par
le personnel de la protection&#8209;incendie</li>
<li>les activités dIEE
des systèmes de protection-incendie sont planifiées et réalisées selon le
calendrier</li>
<li>des inspections visant la prévention des incendies sont réalisées</li>
<li>le risque dincendie dans chaque secteur na pas augmenté au-delà
de ce quindiquent les rapports danalyse des risques dincendie et darrêt sûr</li>
<li>le personnel de la centrale reçoit une formation appropriée en prévention
des incendies et en lutte contre lincendie, et le programme de formation est
conforme aux normes approuvées</li>
<li>des contrôles administratifs limitent les combustibles en transit
dans les zones importantes pour la sûreté, et les aires de stockage sont
analysées par un personnel compétent</li>
<li>les contrôles visant la manutention et le stockage des bouteilles
de gaz comprimé sont mis en œuvre</li>
<li>les contrôles visant lélimination, la réduction et le contrôle des
sources dinflammation sont mis en œuvre</li>
<li>les procédures énoncées dans les permis (travail à chaud et stockage
des matières en transit) sont suivies</li>
<li>la déficience des systèmes de protection-incendie est gérée et
corrigée de façon adéquate dès quil est raisonnablement possible de réduire au
minimum la durée de la déficience (les formulaires concernant les déficiences sont
remplis correctement et les mesures compensatoires sont mises en œuvre et
offrent un niveau de sûreté comparable)</li>
<li>les conditions générales de linstallation sont adéquates et sont
vérifiées par des inspections sur le terrain afin dassurer le respect des procédures
du PPI</li>
<li>les lacunes relevées ont été corrigées rapidement et adéquatement</li>
<li>les dossiers de protection-incendie sont documentés et tenus à
jour</li>
<li>les incendies font lobjet dune enquête pour déterminer les
causes, les effets et les mesures à prendre et pour éviter quils ne se
reproduisent</li>
<li>les problèmes
relevés lors des vérifications antérieures ont été corrigés</li>
</ul>
<p>La vérification doit analyser tous les domaines posant
problème et recommander des mesures de protection-incendie
appropriées afin dassurer un niveau de sécurité-incendie permettant datteindre
les objectifs de protection-incendie.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.13.2"></div>
<h4 id="sec6-13-2">6.13.2 Inspection de conformité de la centrale ou de linstallation</h4>
<p>Une inspection
de la condition de la centrale ou de linstallation est effectuée et documentée
afin dévaluer la conformité aux exigences du <i>Code national de prévention
des incendies du Canada</i>, aux normes CSA N293 ou N393, et aux normes applicables indiquées par
des inspections visuelles.</p>
<p>Linspection
doit être suffisamment approfondie pour assurer que la centrale ou linstallation
atteint ses objectifs de protection-incendie. Voir lannexe&nbsp;G pour de plus
amples renseignements.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.13.3"></div>
<h4 id="sec6-13-3">6.13.3 Système de suivi des non-conformités</h4>
<p>Les exigences relatives aux systèmes de suivi des
non-conformités figurent dans les normes CSA N293 et N393. </p>
<p>Un système de suivi devrait être mis en œuvre afin de
documenter et de surveiller les tendances relatives à la protection-incendie et
aux non-conformités au PPI. Il faudrait y inclure le lieu et le moment où la
non-conformité a été relevée, le nom du responsable du règlement de la non-conformité
et la date ciblée pour atteindre la conformité aux exigences. Le système de
suivi devrait être établi et mis à jour afin de pouvoir établir les tendances
des non-conformités mineures, qui pourraient être des signes précurseurs dune
non-conformité ou dun événement plus graves.  </p>
<p>Le plan de mesures correctives devrait indiquer ce qui suit&nbsp;:</p>
<ul>
<li>les mesures correctives visant à régler les non-conformités</li>
<li>les mesures correctives visant à prévenir la récurrence des non-conformités,
le cas échéant</li>
<li>lengagement à respecter une date dachèvement</li>
<li>le responsable de la mise en œuvre des mesures correctives</li>
<li>les mesures compensatoires provisoires qui assureront un niveau
de sûreté équivalent à celui de la non-conformité relevée et qui seront mises
en œuvre jusquà ce que la ou les mesures correctives soient entièrement mises
en œuvre</li>
</ul>
<p>Les dates dachèvement devraient être fixées selon limpact
que les déficiences pourraient avoir sur la sécurité des personnes et lenvironnement.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.14"></div>
<h3 id="sec6-14">6.14 Enquête sur les incendies et signalement des incendies </h3>
<p>Le PPI devrait indiquer les procédures à suivre pour
signaler les incendies à la direction de linstallation et à la CCSN. Il
faudrait notamment indiquer la cause de lincendie et décrire lenquête menée
en cas de toute blessure ou de tout dommage aux SSC ou à léquipement. Le
rapport dincendie devrait indiquer la ou les causes probables et les conclusions
tirées de lenquête après la situation ou lévénement. Lannexe&nbsp;J présente
un modèle pour consigner les renseignements requis afin de signaler un incendie.
Les résultats de lenquête ou les progrès réalisés au fil dune enquête
devraient être communiqués à la CCSN.</p>
<p>Des mesures devraient être mises en place pour assurer le
suivi des incendies dans une installation et pour tirer profit de lexpérience dexploitation
dinstallations comparables afin de déterminer les possibles risques et
améliorations.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.15"></div>
<h3 id="sec6-15">6.15 Renseignements supplémentaires </h3>
<p>Les exigences et lorientation de la CCSN en matière de
production de rapports figurent dans le REGDOC-3.1.1, <i>Rapports à soumettre
par les exploitants de centrales nucléaires, </i>version&nbsp;2 <sup id="fnb15-ref"><a className="fn-lnk" href="#fnb15"><span className="wb-inv">Notes de bas de page </span>15</a></sup> et le REGDOC&#8209;3.1.2, <i>Exigences relatives à la production de rapports, Volume I&nbsp;:
Installations nucléaires de catégorie&nbsp;I non productrices de puissance et
mines et usines de concentration duranium</i> <sup id="fnb16-ref"><a className="fn-lnk" href="#fnb16"><span className="wb-inv">Notes de bas de page </span>16</a></sup> .</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.16"></div>
<h3 id="sec6-16">6.16 Capacité dintervention en cas dincendie </h3>
<p>Lintervention en cas dincendie est un élément clé de la protection-incendie
et fait partie intégrante des exigences des codes du bâtiment et de prévention
des incendies. Lintervention adéquate en cas dincendie repose sur plusieurs éléments
dont on sassurera de lefficacité&nbsp;: planification, financement, formation,
exercices et communication.</p>
<p>En cas dincendie, lorganisation déclenche son processus
dintervention qui fait appel à des intervenants durgence sur le site (communément
appelés corps de pompiers industriel), des fournisseurs de services externes
(comme les services dincendie municipaux) ou dune combinaison des deux. En
vertu de la LSRN, il incombe au titulaire de permis de prendre les mesures
nécessaires pour intervenir en cas de dangers et de risques à son installation.
Cette responsabilité consiste notamment à déterminer le nombre total et
approprié dintervenants et à quantifier les ressources appropriées. Les
exigences concernant la capacité dintervention en cas dincendie figurent dans
les normes CSA N293 et N393.</p>
<p>Dans le cas des installations où les risques sont plus
élevés, on devrait procéder à une analyse documentée des besoins dintervention
en cas dincendie afin de déterminer les scénarios dincendie crédibles et les ressources
nécessaires pour éteindre un incendie et atténuer tout effet négatif associé
aux activités dextinction de lincendie. Lanalyse des besoins dintervention
en cas dincendie devrait tenir compte des sujets décrits à lannexe&nbsp;I.</p>
<p>Les titulaires de permis devraient fournir une orientation
adéquate au service dincendie susceptible dintervenir afin de sassurer quil
connaît bien le fonctionnement de linstallation et les dangers potentiels. Ces
services dincendie devraient recevoir une formation et il faudrait leur offrir
une visite de familiarisation des lieux afin que les intervenants soient bien
informés et équipés pour intervenir en cas de scénario dincendie crédible à linstallation.</p>
<p>Lannexe&nbsp;I présente de plus amples renseignements sur
lintervention en cas dincendie.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.17"></div>
<h3 id="sec6-17">6.17 Renseignements supplémentaires </h3>
<p>Des
renseignements supplémentaires sont présentés dans le REGDOC-2.10.1, <i>Préparation et intervention relatives aux urgences nucléaires, </i>version&nbsp;2 <sup id="fnb17-ref"><a className="fn-lnk" href="#fnb17"><span className="wb-inv">Notes de bas de page </span>17</a></sup> .</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="AppA"></div>
<h2 id="ann-a">Annexe A : Critères de rendement associés aux objectifs de protection-incendie</h2>
<p>Pour atteindre les objectifs de protection-incendie décrits
à la section&nbsp;4, il faut respecter les critères de rendement correspondants
qui suivent. Ces critères de rendement ne sexcluent pas mutuellement et
appuient généralement des objectifs multiples. Les mesures qui permettent de
satisfaire à ces critères devraient pouvoir être prises en tout temps (c.&#8209;à&#8209;d.
avant, pendant et après un incendie).</p>
<h3 id="secA-1">A.1 Santé et sécurité des personnes </h3>
<p>La santé et la sécurité des personnes sont assurées
lorsque les critères de rendement suivants sont respectés&nbsp;:</p>
<ol>
<li>Les personnes qui ne sont pas proches de lévénement initial (y compris le
public, les occupants de linstallation et les intervenants durgence) sont
protégées contre les blessures ou les pertes de vie.</li>
<li>Le risque de blessure ou de décès pour les personnes proches de lévénement
initial est réduit au minimum.</li>
<li> Des procédures efficaces sont établies pour intervenir en cas dincendie.</li>
<li> Le recours à des actions manuelles sur place est réduit au minimum.</li>
<li> Le recours aux plans post-incendie pour réparer ou remplacer les SSC
critiques pour la sûreté nucléaire est réduit au minimum (p.&nbsp;ex., arrêt de
lévacuation de la chaleur pour les réacteurs, ventilation et filtrage de lair
contaminé).</li>
<li> Le déclenchement des incendies est empêché.</li>
<li> Les événements initiateurs peuvent être détectés et supprimés en temps opportun
pour limiter les dommages.</li>
<li> La propagation et les effets des incendies sont limités.</li>
<li> Les incendies sont confinés.</li>
<li>Les sous-produits de combustion sont gérés efficacement.</li>
<li>Les substances dangereuses sont protégées.</li>
<li>Des signaux dalarme sont transmis à toutes les zones de linstallation.</li>
<li>Il existe des moyens efficaces et fiables pour aviser les occupants en cas durgence et
leur indiquer les mesures de protection à prendre.</li>
<li>Il existe de multiples voies dévacuation indépendantes, sûres et facilement accessibles à
partir de chaque zone.</li>
<li>Les voies dévacuation et les sorties de secours sont identifiées de manière efficace et
fiable, sont dégagées et sont éclairées.</li>
<li>Les voies daccès et dévacuation ont une résistance structurale adéquate pour assurer
leur stabilité pendant et après un événement.</li>
<li>La capacité de sortie est suffisante pour permettre le déplacement durgence des
foules.</li>
<li>Des critères établis de maintien de conditions soutenables et de facteurs humains
sont utilisés pour&nbsp;:
<ol>
<li>protéger les personnes contre lincendie et ses sous-produits (p.&nbsp;ex., produits de combustion, fumée et chaleur) pendant lévacuation</li>
<li>protéger les personnes à lintérieur des aires de refuge pendant le déroulement de lévénement</li>
<li>protéger les personnes qui exécutent les fonctions de contrôle de linstallation et datténuation, pendant ou après lévénement initiateur</li>
</ol>
</li>
<li>Linfrastructure de soutien (p.&nbsp;ex., eau, éclairage et accès) est adéquate pour permettre lexécution
des diverses mesures – intervention durgence, contrôle de linstallation, atténuation
et rétablissement – pendant et après lévénement initiateur.</li>
<li>Lintégrité structurale est suffisante pour assurer la sécurité des occupants et des
intervenants durgence pendant et après lévénement initiateur.</li>
<li>Des mesures appropriées sont prévues pour le drainage et le confinement des liquides inflammables
et combustibles, des poussières combustibles, des substances dangereuses, des substances
nucléaires et des matières radioactives.</li>
<li>Les inondations dues aux activités dextinction de lincendie sont évitées dans les
zones qui contiennent des substances dangereuses, des substances nucléaires ou
des matières radioactives.</li>
<li>Les rejets de substances dangereuses, de substances nucléaires et de matières radioactives
par les SSC sous pression sont empêchés, y compris le rejet par les dispositifs
de protection contre les surpressions et les interfaces des systèmes à haute et
basse pression.</li>
<li>Les personnes sont protégées contre le rejet ou la dispersion de substances
dangereuses, de substances nucléaires ou de matières radioactives grâce à des
critères établis concernant la protection radiologique, la protection
toxicologique et les facteurs humains.</li>
<li>Les
mesures de protection-incendie sont équilibrées en ce qui concerne la prévention,
la détection et l&#39;extinction rapides et le confinement, sans quelles ne
dépendent outre mesure dun seul aspect de la protection-incendie.</li>
</ol>
<h3 id="secA-2">A.2 Protection de lenvironnement </h3>
<p>La protection de lenvironnement est assurée lorsque le rejet, la
dispersion et limpact des substances dangereuses, des substances nucléaires et
des matières radioactives sur lenvironnement sont réduits au niveau le plus
bas quil soit raisonnablement possible datteindre (principe ALARA) et aux limites
imposées par les exigences légales.</p>
<p>Lobjectif de protection de lenvironnement, dans le cadre des mesures de protection-incendie, est
atteint lorsque les critères de rendement suivants sont
respectés&nbsp;:</p>
<ul>
<li>Les rejets de substances dangereuses, de substances nucléaires et
de matières radioactives sont évités à la source.</li>
<li>Des moyens fiables de détection des rejets sont fournis.</li>
<li>Les rejets sont contrôlés et leurs effets sont atténués.</li>
<li>Un rétablissement efficace, après les effets des rejets, est assuré.</li>
<li>Leau destinée à la lutte contre lincendie est gérée de façon
appropriée.</li>
</ul>
<h3 id="secA-3">A.3 Radioprotection </h3>
<p>La
sûreté des substances nucléaires ou des matières radioactives est
assurée lorsque les
critères de rendement suivants sont respectés&nbsp;:</p>
<ul>
<li>Lexposition et la dose sont réduites au minimum.</li>
<li>Le rejet incontrôlé et la dispersion inacceptable des substances
nucléaires et des matières radioactives sont évités.</li>
<li>Les effets néfastes dus à lincendie ou aux activités de lutte
contre lincendie sont atténués.</li>
<li>Les matières radioactives sont protégées contre&nbsp;:
<ul>
<li>les effets de lincendie</li>
<li>la dispersion ou le rejet incontrôlé dû à lincendie et aux activités
de lutte contre lincendie</li>
<li>la dispersion des matières provenant des conteneurs de stockage ou
des limites du système</li>
</ul>
</li>
<li>Les substances nucléaires peuvent être localisées rapidement et
récupérées de manière sûre.</li>
</ul>
<h3 id="secA-4">A.4 Sûreté-criticité nucléaire </h3>
<p>Dans
une installation nucléaire où un événement de criticité accidentel est
possible, la sûreté-criticité nucléaire est atteinte lorsque les
critères de rendement suivants sont respectés&nbsp;:</p>
<ul>
<li>Le processus ou linstallation nucléaire peut être maintenu dans
un état sûr, stable et contrôlé.</li>
<li>Les processus et les paramètres désignés, comme les contrôles de sûreté-criticité,
peuvent être surveillés et sont facilement accessibles aux exploitants.</li>
<li>Une substance nucléaire peut être maintenue dans un état sous-critique.</li>
</ul>
<p>Remarque&nbsp;:
La prévention dune criticité accidentelle est importante non
seulement dans les réacteurs nucléaires, mais également dans toute installation
nucléaire où un événement de criticité accidentelle est possible.</p>
<h3 id="secA-5">A.5 Sûreté des réacteurs </h3>
<p>La sûreté du réacteur est atteinte lorsque les
critères de rendement suivants sont respectés&nbsp;:</p>
<ul>
<li>Le combustible nucléaire est maintenu dans un état sûr et stable.</li>
<li>Des niveaux de caloporteur suffisants et continus et une
évacuation de la chaleur de désintégration suffisante sont assurés pour le combustible
nucléaire (dans le cœur ou après irradiation), afin que les limites de
conception du combustible ne soient pas dépassées.</li>
<li>La réactivité négative est facilement disponible pour être
rapidement insérée dans le cœur du réacteur afin datteindre et de maintenir
des conditions sous-critiques.</li>
<li>Les SSC nécessaires (p.&nbsp;ex., air comprimé, alimentation de
secours) sont prévus pour veiller à ce que les fonctions de sûreté fondamentales
sont disponibles à tout moment dans tous les états de fonctionnement.</li>
<li>La rupture ou le fonctionnement intempestif ou involontaire des systèmes
dextinction des incendies ne compromettra pas de façon importante la capacité
des SSC importants pour la sûreté ni ninvalidera lhypothèse du critère de défaillance
unique dans lanalyse de sûreté.</li>
</ul>
<h3 id="secA-6">A.6 Renseignements supplémentaires </h3>
<p>Des
renseignements supplémentaires concernant les critères de
rendement susmentionnés sont fournis dans le REGDOC-2.5.2, <i>Conception dinstallations
dotées de réacteurs&nbsp;: Centrales nucléaires</i> <sup id="fnb18-ref"><a className="fn-lnk" href="#fnb18"><span className="wb-inv">Notes de bas de page </span>18</a></sup> et le REGDOC&#8209;2.4.3, <i>Sûreté-criticité nucléaire</i> <sup id="fnb19-ref"><a className="fn-lnk" href="#fnb19"><span className="wb-inv">Notes de bas de page </span>19</a></sup> .</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="AppB"></div>
<h2 id="ann-b">Annexe B : Niveaux de défense en profondeur</h2>
<p>Le
tableau&nbsp;2 présente des renseignements complémentaires à ceux
que lon trouve dans les normes CSA N293 et N393.</p>
<p>Lorientation fournie résume les niveaux généraux de défense
en profondeur et indique les moyens par lesquels ces niveaux sont généralement
atteints en ce qui concerne la protection-incendie dans les installations
nucléaires. Les barrières et les niveaux de protection sont établis en fonction
des particularités de linstallation donnée.</p>
<p><b>Tableau&nbsp;2&nbsp;: </b><b>Niveaux de défense en profondeur</b></p>
<table className="width-100">
<thead>
<tr>
<th>Niveau</th>
<th>Objectif</th>
<th>Moyens essentiels</th>
</tr>
</thead>
<tr>
<td>1</td>
<td>Prévenir les incendies</td>
<td><ul>
<li>Contrôler et surveiller les sources possibles dincendie</li>
<li>Contrôler et surveiller la charge dincendie (combustibles,
substances inflammables, gaz comprimé)</li>
<li>Établir un programme de protection-incendie</li>
<li>Réduire au minimum les défaillances dans les SSC de
protection-incendie (gestion et surveillance des déficiences des systèmes de
protection-incendie)</li>
<li>Contrôler les activités de protection-incendie (par des
modifications techniques, des permis de travail, des analyses, etc.)</li>
</ul></td>
</tr>
<tr>
<td>2</td>
<td>Détecter et gérer les écarts par rapport au fonctionnement
normal afin de prévenir la progression des défaillances</td>
<td><ul>
<li>Mettre en place un système adéquat de détection des
incendies et dextinction automatique</li>
<li>Avoir des programmes appropriés dinspection, dessais
et dentretien</li>
<li>Avoir des fonctions de surveillance</li>
<li>Établir des procédures en cas dincidents opérationnels
et anormaux</li>
<li>Établir des procédures adéquates de gestion des déficiences</li>
</ul></td>
</tr>
<tr>
<td>3</td>
<td>Réduire au minimum les conséquences des incendies</td>
<td><ul>
<li>Établir des barrières coupe-feu et des séparations coupe-feu
adéquates pour limiter la propagation de lincendie et ses effets</li>
<li>Assurer, dès la conception, la séparation physique des
systèmes de sûreté et de leurs composants associés afin de corriger ou de prévenir
des situations anormales</li>
<li>Avoir une conception robuste (les SSC de
protection-incendie sont conçus et installés conformément aux codes et normes
applicables)</li>
<li>Mettre en œuvre des recommandations de lERI et de lAASI
pour réduire au minimum les conséquences des incendies</li>
</ul></td>
</tr>
<tr>
<td>4</td>
<td>Contrôler les conditions graves de la centrale et atténuer
les conséquences des accidents graves</td>
<td><ul>
<li>Se doter de mesures de gestion des accidents graves</li>
<li>Établir un plan pré-incident et un plan daction durgence</li>
<li>Se doter de procédures durgence et dune capacité dintervention
durgence</li>
<li>Élaborer des plans et procédures visant à maîtriser la progression
dun incendie et à atténuer les conséquences des scénarios dincendie hypothétiques
et des modes de défaillance</li>
</ul></td>
</tr>
<tr>
<td>5</td>
<td>Atténuer les conséquences radiologiques des rejets
importants de matières radioactives</td>
<td><ul>
<li>Disposer dun centre de contrôle des urgences adéquat</li>
<li>Effectuer une intervention durgence coordonnée hors site</li>
<li>Avoir des plans dintervention durgence sur le site et
hors site afin datténuer les conséquences radiologiques dun incendie</li>
</ul></td>
</tr>
</table>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="AppC"></div>
<h2 id="ann-c">Annexe C : Modélisation des incendies</h2>
<p>La
modélisation des incendies devrait être documentée adéquatement
dans un rapport de modélisation des incendies. Lobjectif de ce rapport est de
sassurer quil existe une documentation adéquate permettant aux pairs, aux
tiers et à lorganisme de réglementation dexaminer lélaboration dun modèle dincendie
et ses résultats, et ce rapport constitue également une base écrite pour toute
utilisation ultérieure de la modélisation des incendies. Le processus de documentation
comprend la rédaction dun rapport exhaustif sur la modélisation des incendies.
Cela comprend les plans, les dessins et les schémas de la centrale, ainsi quune
description des scénarios dincendie et les tableaux dintrants pertinents
utilisés dans lanalyse de la modélisation des incendies. Cette modélisation sadresse
uniquement aux personnes compétentes dans les domaines de la protection-incendie
et de la modélisation des incendies, et sert uniquement à compléter le jugement
éclairé dun utilisateur qualifié. </p>
<p>Voici la
structure recommandée pour documenter la modélisation des incendies et ses
résultats.</p>
<h3 id="secC-1">C.1 Identification du rapport </h3>
<p>Le
rapport de modélisation
des incendies doit être clairement identifié à laide des renseignements
suivants&nbsp;:</p>
<ul>
<li>titre
ou nom du projet</li>
<li>numéro
de version de loutil de modélisation des incendies</li>
<li>date</li>
<li>auteur</li>
<li>pair
examinateur </li>
<li>responsable
chargé daccepter le rapport</li>
<li>signatures
et sceaux</li>
</ul>
<h3 id="secC-2">C.2 Délai du projet </h3>
<p>La description du projet devrait indiquer clairement le projet, sa
portée et ses limitations. Le pair examinateur et lexaminateur rattaché à
lorganisme de réglementation pourront ainsi bien comprendre la modélisation du
projet, ce qui permettra de lutiliser ou de le modifier ultérieurement.</p>
<h3 id="secC-3">C.3 Description du bâtiment </h3>
<p>Il
faudrait fournir une description du bâtiment pour démontrer clairement comment
la modélisation des incendies sintègre dans lensemble du bâtiment
et sassurer que cette modélisation est faite selon une approche holistique.
Cette description pourrait comprendre&nbsp;:</p>
<ul>
<li>loccupation
et lutilisation du bâtiment</li>
<li>la
proximité dautres bâtiments et dangers</li>
<li>la
proximité des services dincendie et laccès aux services dincendie</li>
<li>le
nombre détages et leur superficie</li>
<li>le
type de construction</li>
<li>les
ouvertures dans les planchers</li>
</ul>
<h3 id="secC-4">C.4 Qualifications de lanalyste </h3>
<p>Les qualifications de lanalyste devraient
démontrer que sa formation, son éducation et son expérience sont appropriées et
proportionnelles à la complexité de lanalyse. Pour des projets complexes, comme
la modélisation des incendies dans le cadre dune analyse des arrêts sûrs en
cas dincendie, on peut devoir faire appel à une équipe diversifiée. Dans ce cas,
les qualifications du chef déquipe et des membres de léquipe devraient être
indiquées.</p>
<h3 id="secC-5">C.5 Objectif </h3>
<p>La
première étape de lanalyse consiste à établir et à énoncer les objectifs de la
modélisation. Il est essentiel de définir clairement les objectifs
lors du choix des scénarios dincendie, de la description des scénarios et du
choix des modèles appropriés. Il est important également détablir des objectifs
précis lorsque lon décrit le résultat final dune analyse de modélisation des
incendies en termes techniques.</p>
<p>Les objectifs de la modélisation des incendies devraient répondre aux
questions fondamentales suivantes&nbsp;:</p>
<ul>
<li>Pourquoi
fait-on cela?</li>
<li>Que
calcule-t-on?</li>
</ul>
<p>Les objectifs de la modélisation des incendies devraient être énoncés
de manière à ce que les résultats de lanalyse puissent être comparés efficacement
aux critères dacceptation (voir la sous-section ci&#8209;dessous), afin que
des décisions puissent être prises.</p>
<h3 id="secC-6">C.6 Données dentrée du modèle </h3>
<p>Les données dentrée utilisées dans les calculs et
les simulations devraient être clairement documentées. Par exemple, il faudrait
indiquer ce qui suit&nbsp;:</p>
<ul>
<li>les dimensions des compartiments (p.&nbsp;ex., largeur,
profondeur et hauteur)</li>
<li>lépaisseur des parois</li>
<li>les matériaux de construction</li>
<li>les dimensions et positions des ouvertures horizontales et
verticales (p.&nbsp;ex., portes, fenêtres, ouvertures entre les étages)</li>
<li>lemplacement des câbles darrêt sûr en cas dincendie et des
autres cibles (p.&nbsp;ex., matières radioactives stockées, boîtes à gants et
processus)</li>
<li>les systèmes de protection-incendie</li>
<li>la ventilation (p.&nbsp;ex., ventilation naturelle, ventilation
mécanique)</li>
<li>lemplacement des grands objets fixes</li>
<li>la proximité dautres dangers</li>
<li>les caractéristiques ou processus inhabituels</li>
</ul>
<h3 id="secC-7">C.7 Critères dacceptation ou de rendement </h3>
<p>Bien que les critères
dacceptation dépendent de lobjectif de la modélisation des incendies, ils
doivent être clairement énoncés afin que les décisions appropriées puissent
être prises et les conclusions pertinentes tirées. Par exemple&nbsp;:</p>
<ul>
<li>si lobjectif est de déterminer si un câble serait endommagé en
raison dun incendie dune certaine taille, on indiquerait les critères de
détérioration ou de défaillance du câble (habituellement en termes de seuils de
température ou de flux thermique incident)</li>
<li>si une pièce devait maintenir des conditions soutenables pendant
un certain temps (p.&nbsp;ex., pour permettre une évacuation sûre ou des actions
manuelles), le critère dacceptation serait la hauteur de la couche de gaz
chaud au-dessus dun certain niveau et à une température inférieure à une certaine
valeur</li>
</ul>
<h3 id="secC-8">C.8 Limites </h3>
<p>Toutes
les limites telles que les inconnues et les contraintes établies
dans la portée de lexamen devraient être clairement documentées et, le cas
échéant, il faudrait indiquer comment ces limites ont été surmontées ou si
elles nont pas dincidence sur les conclusions finales.</p>
<h3 id="secC-9">C.9 Scénarios dincendie </h3>
<p>Les scénarios dincendie doivent être clairement indiqués et définis.</p>
<p>Il faudrait élaborer le scénario dincendie en tenant
compte de lobjectif de la modélisation des incendies. Par exemple, le scénario
peut être utilisé pour tester une conception proposée (p.&nbsp;ex., lindice de
résistance au feu dun élément de structure) ou pour confirmer lacceptabilité
dun emplacement de stockage (p.&nbsp;ex., lemplacement dune aire de stockage
temporaire adjacente à une aire darrêt sûr en cas dincendie). De multiples scénarios
dincendie sont généralement envisagés pour saisir les variations de dangers et
établir les dispositions appropriées concernant la conception et lexploitation.</p>
<p>Le
scénario dincendie devrait présenter le pire scénario crédible et dautres scénarios
qui pourraient avoir un impact négatif sur les objectifs de protection-incendie.
Par exemple, si le critère dacceptation est le maintien de conditions
soutenables dans un espace pour y effectuer des actions manuelles créditées, un
feu à combustion lente dégageant une chaleur insuffisante pour activer une tête
de gicleur peut ne pas répondre aux critères de rendement, alors que ceux&#8209;ci
peuvent être respectés dans le cas dun feu chaud et intense avec alarme hâtive
et confinement de lincendie.</p>
<p>Une
analyse des scénarios de charge dincendie et de propagation dincendie doit
être effectuée pour chaque mode de fonctionnement de linstallation. Par
exemple, dans les scénarios dentretien ou darrêt dune installation nucléaire,
des changements pourraient survenir dans la charge de combustible ou les
mécanismes dinflammation, ce qui mènerait à des scénarios dincendie différents
des incendies qui se produiraient pendant lexploitation normale, avec des conséquences
potentiellement différentes.</p>
<h3 id="secC-10">C.10 Modèles dincendie utilisés </h3>
<p>Le
type de modèle à utiliser (p.&nbsp;ex., modèle empirique, modèle de zone, modèle
de champ) devrait être indiqué, y compris une justification de lapplication du
modèle choisi. Cette justification devrait comporter des études de validation et
de vérification applicables.</p>
<h3 id="secC-11">C.11 Hypothèses pour la modélisation des incendies </h3>
<p>Il
faudrait indiquer les hypothèses sous-jacentes à la modélisation des incendies.
Ces hypothèses pourraient comprendre&nbsp;:</p>
<ul>
<li>la géométrie</li>
<li>la taille
de lincendie (débit thermique constant ou courbe du débit
thermique)</li>
<li>les matériaux des murs, des plafonds et des planchers, y compris leurs
dimensions et leurs propriétés matérielles</li>
<li>les critères de défaillance cibles (p.&nbsp;ex., propriétés
thermiques, géométrie)</li>
<li>la ventilation (p.&nbsp;ex., emplacement, dimension, matériau, débit,
fissures, nombre dévents)</li>
<li>les dispositifs de détection</li>
<li>les systèmes dextinction</li>
<li>les mouvements et lintervention du personnel</li>
<li>louverture des portes</li>
<li>la durée ou la température à laquelle les fenêtres se
brisent</li>
<li>linterprétation ou lextrapolation des données</li>
</ul>
<h3 id="secC-12">C.12 Incertitude </h3>
<p>Lincertitude
est inévitable dans la modélisation des incendies, car les modèles dincendie sont
des simplifications ou des idéalisations de phénomènes physiques. Lincertitude
est due à deux sources principales&nbsp;:</p>
<ul>
<li>lincertitude du modèle, qui résulte de la tentative de modéliser des phénomènes physiques au
moyen de formules numériques fondées sur des hypothèses simplificatrices</li>
<li>lincertitude des données dentrée, qui résulte des hypothèses formulées lors du choix des
paramètres dentrée; les paramètres dentrée sont généralement basés sur des
données génériques disponibles ou sur un jugement technique concernant la
protection-incendie</li>
</ul>
<p>On devrait indiquer comment sont prises en compte les
incertitudes dans le modèle et dans les données dentrée et de sortie. Cette
description des incertitudes devrait tenir compte de la complexité du scénario
modélisé, et également des dangers potentiels ou des conséquences négatives
liés au scénario.</p>
<h3 id="secC-13">C.13 Sensibilité </h3>
<p>Une
analyse de la sensibilité tente de déterminer dans quelle mesure les résultats
du modèle changent en fonction de modifications modestes apportées aux valeurs
dentrée. Un modèle peut être insensible à une variable incertaine. À linverse,
une variable à laquelle un modèle est très sensible peut ne pas être incertaine.
Il est donc important de bien comprendre la sensibilité des variables afin de
maintenir une redondance et une défense en profondeur adéquates sans trop sappuyer
sur une variable qui pourrait avoir une incidence négative sur le résultat du
modèle avec de faibles variations du rendement.</p>
<h3 id="secC-14">C.14 Résumé des résultats </h3>
<p>Un
résumé des résultats de lanalyse doit être fourni sous forme de tableaux, de graphiques,
de dessins et dinstantanés de lexécution du modèle. Ces renseignements
devraient être fournis dans un format qui permettra aux examinateurs (pair et
examinateur rattaché à lorganisme de réglementation) de confirmer facilement lacceptabilité
des résultats et des conclusions.</p>
<h3 id="secC-15">C.15 Conclusion </h3>
<p>Les
conclusions tirées de lanalyse des calculs ou de la modélisation par rapport
aux critères dacceptation devraient être indiquées. On devrait également
indiquer toute procédure supplémentaire, toute modification des processus et
tout SSC de protection-incendie actif ou passif devant être installé pour
satisfaire aux critères dacceptation. Dautres modélisations peuvent savérer
nécessaires pour démontrer que les critères dacceptation sont respectés. Toute
exigence dentretien précise, en particulier lorsque des systèmes non standards
sont utilisés, devrait être indiquée.</p>
<h3 id="secC-16">C.16 Références </h3>
<p>Les
références qui constituent des sources de données dentrée pour tous les calculs
et les simulations devraient être indiquées. On devrait donc également faire référence
aux fiches techniques des fournisseurs indiquant les propriétés
des matériaux. Les références
devraient provenir de textes reconnus ou darticles parus dans des revues ou
des actes de conférence avec comité de lecture. Les documents non publiés, les
rapports internes ou les collections de données ne devraient pas être inclus
comme références.</p>
<h3 id="secC-17">C.17 Annexes </h3>
<p>Tout
matériel justificatif devrait être inclus en référence. Cela peut
comprendre&nbsp;:</p>
<ul>
<li>les données dentrée détaillées du modèle et les calculs à la
main</li>
<li>les dessins</li>
<li>les graphiques</li>
<li>les fiches techniques des fournisseurs indiquant les propriétés
des matériaux utilisés dans les calculs</li>
<li>les fiches de données de sécurité</li>
<li>les
documents appropriés des Laboratoires des assureurs du Canada (ULC) ou dautres
documents dorganismes dessai approuvés</li>
</ul>
<h3 id="secC-18">C.18 Renseignements
supplémentaires </h3>
<p>On trouvera des renseignements supplémentaires dans
la norme NUREG-1934, <i>Nuclear Power Plant Fire Modeling Application Guide</i>&nbsp;<sup id="fnb20-ref"><a className="fn-lnk" href="#fnb20"><span className="wb-inv">Notes de bas de page </span>20</a></sup> de la Nuclear Regulatory Commission des États&#8209;Unis.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="AppD"></div>
<h2 id="ann-d">Annexe D Écarts par rapport aux codes et normes de protection-incendie</h2>
<p>Lorsquil
y a codes et normes à respecter (p.&nbsp;ex., la Partie&nbsp;II du <i>Code
canadien du travail,</i> les lois nationales ou provinciales ou les conditions
de permis prescrites par la CCSN), ils devraient être intégrés à la conception
et à lexploitation de linstallation. Toutefois, il est entendu que des écarts
par rapport aux exigences normatives des codes et des normes sont parfois inévitables.</p>
<p>Voici
quelques exemples de problèmes qui peuvent entraîner des écarts par rapport aux
codes et aux normes&nbsp;:</p>
<ul>
<li>Les exigences ne sappliquent pas à loccupation ou à lapplication
en cause.</li>
<li>Lapplication des codes ou normes nest pas possible en raison de
la conception ou des caractéristiques uniques de linstallation, de la structure
ou de son exploitation.</li>
<li>Le respect des codes ou des normes nest pas possible en
raison de préoccupations fondamentales liées aux exigences particulières de sûreté
de linstallation.</li>
<li>Lapplication
cumulative des règlements, codes et normes impose des exigences contradictoires.</li>
</ul>
<p>Outre
les problèmes susmentionnés, les éditions subséquentes dune norme ou dun code
contiennent souvent des améliorations qui tiennent compte des nouvelles technologies,
de lexpérience dexploitation de lindustrie ou dapproches plus explicites fondées
sur le rendement.</p>
<p>Les
écarts par rapport aux exigences des codes ou des normes sont traités selon des
approches fondées sur le rendement, des équivalences ou des exceptions. En cas
décart, la méthode de remplacement proposée devrait démontrer un niveau de
sûreté et de sécurité au moins équivalent à celui qui est fourni par le code ou
la norme en question. Il sagit notamment de démontrer ce qui suit&nbsp;:</p>
<ul>
<li>lintention de lexigence prescrite est respectée</li>
<li>les attributs fonctionnels et les objectifs des SSC sont
conservés</li>
<li>la fiabilité du système reste la même ou est meilleure</li>
<li>la
robustesse des SSC, y compris la protection
contre les défaillances dues à des effets de cause commune, demeure la même ou
est meilleure</li>
</ul>
<p>Les
conceptions, équivalences et écarts fondés sur le rendement devraient être documentés
et acceptés par lautorité compétente (AC).</p>
<h3 id="secD-1">D.1 Approche fondée sur le rendement </h3>
<p>Lapproche
fondée sur le rendement vise à atteindre les objectifs établis des exigences normatives,
par lapplication dun jugement technique qualitatif. Cette approche sappuie
sur des méthodes quantitatives utilisant des techniques numériques acceptables,
des modèles probabilistes ou des modèles dincendie, et des calculs visant à déterminer
comment des critères de rendement propres à linstallation peuvent être
atteints. Toute solution de rechange devrait offrir au moins le niveau minimal
de rendement exigé par une solution acceptable, telle quelle est définie par
les objectifs et les énoncés fonctionnels connexes.</p>
<p>Il
peut savérer impossible de comparer directement les attributs fonctionnels, la
fiabilité ou la robustesse. Toutefois, le titulaire de permis devrait être en mesure
de documenter les objectifs de rendement, de démontrer quils sont atteints
grâce à la conception et dindiquer les activités dinspection, dessais et dentretien
qui seront nécessaires pour sassurer que les objectifs de rendement seront
maintenus pendant la durée de vie de linstallation.</p>
<h3 id="secD-2">D.2 Équivalences </h3>
<p>Les
codes et normes concernant la protection-incendie et la protection des
personnes permettent lutilisation déquivalences pour satisfaire à lintention
des exigences. On devrait utiliser des équivalences dans les cas suivants&nbsp;:</p>
<ul>
<li>lutilisation de systèmes, méthodes ou dispositifs équivalents
ou supérieurs en termes de qualité, de robustesse, de résistance au feu, defficacité,
de durabilité et de sécurité est justifiée</li>
<li>de nouvelles technologies ou dautres dispositions
permettront dassurer le niveau de sécurité prévu par le code ou la norme en
question, et ce, sans compromis</li>
</ul>
<p>La
documentation technique qui démontre léquivalence est soumise à lAC pour évaluation.
Dans de nombreux cas, cette équivalence sera démontrée par la modélisation des
incendies ou par des essais de résistance au feu.</p>
<h3 id="secD-3">D.3 Exceptions </h3>
<p>Dans
de rares cas, lAC accordera des exceptions aux exigences normatives de
protection-incendie. Par exemple, il sagit généralement de situations qui surviennent
lors de lapplication de codes ou de normes où la sûreté ou la sécurité peut
être compromise, ou encore lorsque leur application nest pas adaptée à une
disposition ou une occupation donnée. Les exceptions sont évaluées au cas par
cas et nécessitent une justification documentée.</p>
<h3 id="secD-4">D.4 Approbation par lautorité compétente </h3>
<p>Les
conceptions, équivalences et exceptions fondées sur le rendement doivent être
documentées de façon exhaustive afin de démontrer comment lintention des exigences
des codes est respectée. Pour sassurer que cet écart par rapport aux exigences
des codes continue dêtre justifié et que la conception continuera de répondre
aux exigences fonctionnelles prévues pour la durée de vie de linstallation (y
compris après de futures rénovations), la documentation devrait être conservée
et prise en compte dans le cadre de lexamen de la conformité aux codes.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="AppE"></div>
<h2 id="ann-e">Annexe E : Pratiques opérationnelles</h2>
<p>Le
programme de protection-incendie (PPI) devrait inclure les procédures et processus
permettant de superviser les activités de travail et de répondre aux dégradations
dans le niveau de protection-incendie ou de prévention des incendies.</p>
<p>Le
personnel approprié de linstallation devrait examiner régulièrement les procédures
et processus afin dévaluer les mesures de protection-incendie et de prévention
des incendies et den assurer le respect.</p>
<h3 id="secE-1">E.1 Contrôle des matières radioactives et des substances nucléaires </h3>
<p>Dans
certaines conditions, un incendie peut mener à une situation dans laquelle il
est difficile dempêcher le rejet ou la dispersion de petites quantités de matières
radioactives ou de substances nucléaires. On sattend à ce que le PPI comprenne
des directives et des dispositions supplémentaires pour faire en sorte que ces
matières soient adéquatement protégées et séparées des matières combustibles.</p>
<h3 id="secE-2">E.2 Contrôle des substances dangereuses </h3>
<p>Le PPI devrait indiquer les besoins de conception, de contrôle et dadministration
concernant le stockage, la manipulation et lutilisation des substances
dangereuses dune manière qui permette de réduire au minimum les risques dincendie.
Cela devrait inclure des dispositions visant à réduire au minimum la quantité
de substance, à protéger les substances contre lincendie et à éviter toute réaction
due à lincompatibilité des substances.</p>
<h3 id="secE-3">E.3 Contrôle
des gaz comprimés, des liquides inflammables et des liquides combustibles </h3>
<p>Le
PPI devrait définir les paramètres associés au contrôle des gaz comprimés, des liquides
inflammables et des liquides combustibles, y compris&nbsp;:</p>
<ul>
<li>la manipulation, lutilisation et le stockage dans le respect des
codes et normes applicables</li>
<li>des aires de stockage et de stockage temporaire offrant une capacité
et des caractéristiques adéquates et un emplacement approprié pour la protection-incendie </li>
<li>les limites des quantités placées à lextérieur des locaux
de stockage adéquatement conçus et des quantités requises pour utilisation
immédiate</li>
<li>lévaluation du potentiel de dispersion ou de migration des
substances et des conséquences connexes</li>
</ul>
<h3 id="secE-4">E.4 Contrôle des combustibles </h3>
<p>Le
PPI devrait définir les dispositions concernant la gestion et la minimisation
des matières combustibles. Les procédures de contrôle des matières combustibles
devraient comprendre des mesures visant à&nbsp;:</p>
<ul>
<li>interdire ou réduire au minimum lutilisation de matériaux de construction
ou déquipement combustibles au moyen de pratiques de contrôle des
modifications techniques, afin de sassurer que les matières non combustibles, les
matières partiellement combustibles ou les matériaux de remplacement ignifuges
sont utilisées pour modifier léquipement ou les bâtiments</li>
<li>contrôler la livraison, le stockage, la manipulation, le transport
et lutilisation des solides, liquides et gaz inflammables et combustibles</li>
<li>établir une procédure pour limiter les matériaux demballage
inutiles, grâce à des accords dachat ou de mesures de contrôle des livraisons
sur le site, et réduire au minimum la quantité de matériaux demballage combustibles
entrant dans les zones opérationnelles de linstallation</li>
<li>contrôler les risques dincendie qui peuvent avoir une incidence
sur les SSC liés à la sûreté, sur les obstacles aux voies daccès et de sortie
et sur les activités de sécurité</li>
<li>limiter la quantité de solides, liquides ou gaz inflammables ou
combustibles aux quantités nécessaires au fonctionnement normal de la centrale
et pendant les activités dentretien ou de modification, et placer tous les
stocks de combustibles dans des aires de stockage désignées ou protégées en
fonction de leurs dangers</li>
<li>contrôler les substances combustibles en transit afin quelles ne
posent pas de danger au&#8209;delà des capacités des mesures de protection-incendie
existantes</li>
<li>utiliser des systèmes de protection-incendie passifs ou actifs
supplémentaires qui ont une capacité nominale adéquate et qui sont situés de
façon appropriée dans des zones où les risques sont importants et où les matières
combustibles ne peuvent être réduites au minimum</li>
<li>sassurer que les bouteilles de gaz inflammable sont entreposées
dans un endroit réservé à cette fin à lextérieur du bâtiment de stockage principal,
de sorte quun incendie touchant laire de stockage principale ne compromette
pas la sûreté</li>
<li>maintenir des armoires de stockage de liquides inflammables lorsquil
est nécessaire dentreposer de petites quantités de liquides inflammables ou combustibles,
et apposer des étiquettes claires et bien visibles indiquant le contenu de tous
les contenants de liquides inflammables ou combustibles</li>
<li>concevoir, exploiter et entretenir les systèmes qui contiennent
des matières combustibles de manière à réduire au minimum les fuites ou les
rejets de leur contenu dans les conditions dexploitation normale, dincident
de fonctionnement prévu et daccident de dimensionnement</li>
<li>contenir les rejets par des dispositifs de diversion ou de
retenue dans une enceinte de confinement secondaire</li>
</ul>
<h3 id="secE-5">E.5 Gestion des matières en transit et tenue des locaux </h3>
<p>Le
PPI devrait comprendre des procédures pour le contrôle des matières en transit.
Lemplacement inadéquat des matières et de léquipement combustibles constitue une
question de sûreté nucléaire. Les matières en transit peuvent comprendre les matières
combustibles (p.&nbsp;ex., le bois, le plastique, le caoutchouc, les matières
fibreuses, les liquides combustibles ou inflammables, les matières radioactives
combustibles et les matières combustibles contaminées), ainsi que les matières non
combustibles (p.&nbsp;ex.,&nbsp;équipement et fournitures, structures
temporaires). Comme les matières combustibles en transit ne font pas partie de
la conception permanente de linstallation, les dispositions de protection-incendie
et les systèmes de sûreté connexes nont pas été conçus pour atténuer limpact des
incendies impliquant ces matières ou structures. Par conséquent, des exigences administratives
devraient être formulées pour sassurer que leur emplacement est correctement
évalué, analysé et autorisé avant leur utilisation sur place.</p>
<p>Le
contrôle des matières en transit devrait se faire par lintermédiaire dun permis
ou dun autre document qui accompagne les matières jusquà ce quelles soient
retirées de linstallation. Les permis devraient inclure&nbsp;:</p>
<ul>
<li>une description des matières</li>
<li>la date dentrée en vigueur et dexpiration permis</li>
<li>lemplacement précis prévu des matières</li>
<li>la personne responsable</li>
<li>toute exigence compensatoire particulière</li>
</ul>
<p>Les
procédures devraient indiquer comment les aires de stockage temporaires sont
évaluées et inclure toute mesure compensatoire exigée. Les emplacements
approuvés pour les matières en transit devraient être basés sur une évaluation de
lERI, lanalyse des arrêts sûrs en cas dincendie ou lexamen de linstallation,
lemplacement de léquipement proche de la centrale et les SSC liés à la sûreté,
ainsi que la présence et la proximité de léquipement fixe de
protection-incendie.</p>
<p>Les
matières combustibles en transit constituent une charge combustible évidente et
un risque dincendie potentiel. Toutefois, il faudrait réduire au minimum les
matières combustibles et non combustibles en transit, car elles présentent des
obstacles potentiels aux opérations daccès durgence, à lévacuation et à la lutte
contre lincendie.</p>
<p>La
section du PPI portant sur la prévention des incendies devrait inclure une
description des pratiques générales dentretien des locaux associées à la mise
en œuvre du programme. Ces pratiques devraient comprendre des inspections périodiques
de lentretien des lieux afin dassurer le respect continu des contrôles administratifs.</p>
<h3 id="secE-6">E.6 Contrôle des sources dinflammation </h3>
<p>Le
PPI devrait comprendre des mesures appropriées pour contrôler toutes les sources
dinflammation. Les sources dinflammation potentielles sont nombreuses&nbsp;:
léquipement électrique (permanents et temporaires), le travail à chaud (p.&nbsp;ex.,
flamme nue, soudage, coupage, meulage), les équipements et surfaces à haute
température, les équipements de chauffage (installations permanentes et
temporaires), les substances chimiques réactives, lélectricité statique et lusage
du tabac.</p>
<p>Lefficacité
des mesures de contrôle des sources dinflammation dépend de nombreux facteurs,
notamment les pratiques de conception technique, afin dassurer ce qui
suit&nbsp;:</p>
<ul>
<li>léquipement
électrique est correctement conçu et installé conformément aux normes de lindustrie</li>
<li>léquipement
générateur de chaleur ou léquipement à surfaces chaudes est correctement
refroidi ou séparé des matières combustibles</li>
<li>les
systèmes contenant des gaz ou liquides combustibles et inflammables sont conçus
et placés de manière à réduire au minimum lexposition de ces matières aux sources
dinflammation</li>
</ul>
<p>Les
travaux comportant des sources dinflammation telles que le soudage ou le coupage
oxygaz devraient être effectués dans des conditions étroitement contrôlées. Les
personnes qui effectuent ces travaux devraient être formées et équipées pour
prévenir et combattre les incendies. De plus, une personne qualifiée pour le
travail à chaud devrait superviser directement ces travaux et assurer la surveillance
des risques dincendie.</p>
<p>Lutilisation
des sources dinflammation devrait être régie par un système de permis de
travail à chaud afin de contrôler les flammes nues, le soudage, le coupage et dautres
formes de travail à chaud. Un permis distinct devrait être délivré pour chaque
secteur où des travaux doivent être effectués.</p>
<p>Les
contrôles administratifs de linstallation devraient prévoir un examen
technique des installations électriques temporaires et des dispositifs de
chauffage temporaires. Ces examens devraient permettre de sassurer que des précautions,
des limites et des pratiques dentretien appropriées sont établies pour la
durée de vie de ces installations, et devraient assurer que les dispositifs de
chauffage temporaires sont installés correctement, conformément aux
spécifications, y compris les séparations requises avec les matières
combustibles et les surfaces.</p>
<h3 id="secE-7">E.7 Renseignements supplémentaires </h3>
<p>On
trouvera des renseignements supplémentaires dans la norme CSA W117.2, <i>Règles
de sécurité en soudage, coupage et procédés connexes</i> <sup id="fnb21-ref"><a className="fn-lnk" href="#fnb21"><span className="wb-inv">Notes de bas de page </span>21</a></sup> .</p>
<h3 id="secE-8">E.8 Surveillance des risques dincendie </h3>
<p>Le
PPI devrait comprendre des procédures et une formation pour la surveillance des
risques dincendie, laquelle devrait être effectuée à titre de mesure compensatoire
lorsque le niveau de risque dincendie dans une installation est accru en
raison de conditions ne répondant pas aux normes. Une surveillance des risques
dincendie peut être requise lorsque les SSC de protection-incendie sont
déficients (c.&#8209;à&#8209;d. hors service) ou que les risques dincendie sont
accrus (p.&nbsp;ex., pendant le soudage).</p>
<p>Une
formation précise en surveillance des risques dincendie devrait couvrir
plusieurs sujets&nbsp;: les tâches du préposé à la surveillance, les responsabilités
et les mesures requises pour les différents types de surveillance, dont la surveillance
continue pour le travail à chaud et les quarts de surveillance horaire. Les qualifications
pour les responsables de la surveillance des risques dincendie devraient
comprendre une formation pratique sous forme dexercice dincendie avec léquipement
dextinction qui sera utilisé en cas dincendie, le cas échéant.</p>
<p>Un
système de registre ou de documentation est utilisé afin de consigner les
mesures prises pour respecter les exigences de surveillance des risques dincendie.</p>
<p>La
surveillance des risques dincendie pour les travaux de soudage, de coupage, de
meulage ou avec flamme nue doit être réalisée conformément aux procédures de
travail à chaud.</p>
<h3 id="secE-9">E.9 Zones à accès restreint </h3>
<p>Le
PPI devrait indiquer les procédures daccès aux zones à accès restreint, notamment
les espaces confinés, les zones de sécurité protégées et les aires à champ de
rayonnement élevé pendant les interventions durgence. Le plan devrait être coordonné
avec les plans pré-incendie de linstallation.</p>
<h3 id="secE-10">E.10 Utilisation de léquipement de protection-incendie </h3>
<p>Des
procédures concernant lutilisation de léquipement de protection-incendie
devraient être établies pour toutes les activités nécessitant lintervention du
personnel pour lexécution de certaines tâches, notamment&nbsp;:</p>
<ul>
<li>lactivation manuelle dun système fixe dextinction des
incendies</li>
<li>toute autre tâche nécessitant lutilisation manuelle de léquipement
associé à la fermeture des vannes et robinets sur la tuyauterie qui transporte
des liquides ou des gaz inflammables, selon le PPI</li>
<li>lactivation des systèmes de ventilation</li>
<li>larrêt de léquipement qui peut nuire aux activités dintervention
durgence ou accroître les risques dincendie</li>
<li>toute autre tâche qui nécessite lutilisation manuelle de
léquipement associé au PPI</li>
</ul>
<p>Les
procédures dutilisation de léquipement de protection-incendie devraient
comprendre des renseignements sur la formation requise et les exigences
concernant les exercices.</p>
<h3 id="secE-11">E.11 Surveillance et contrôle de la prévention des incendies </h3>
<p>Des
procédures de surveillance et de contrôle des exigences opérationnelles associées
au PPI devraient être établies afin de faciliter lapplication du programme. Les
activités de surveillance devraient comprendre des visites périodiques de linstallation
par des personnes désignées, afin de vérifier divers aspects du PPI, y compris&nbsp;:</p>
<ul>
<li>lintégrité et le contrôle des séparations coupe-feu</li>
<li>le contrôle des matières en transit</li>
<li>lentretien général des locaux</li>
<li>laccès à léquipement de lutte contre lincendie</li>
<li>les voies dévacuation et de sortie</li>
<li>le contrôle des sources dinflammation</li>
<li>tous autres aspects applicables de lexploitation de linstallation</li>
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
<div id="AppF"></div>
<h2 id="ann-f">Annexe F : Conception et construction des installations</h2>
<p>La
conception et la construction des installations nucléaires sont assujetties aux
codes et normes de sécurité-incendie et de protection des personnes, mentionnés
dans le fondement dautorisation de linstallation. Les codes de
sécurité-incendie et de protection des personnes présentent le niveau acceptable
minimal de sécurité-incendie. En raison des exigences de construction
particulières de certaines zones des installations nucléaires, il nest pas
toujours possible de se conformer entièrement aux exigences des normes. Par
conséquent, des approches fondées sur le rendement, des mesures de rechange ou
des mesures équivalentes pourraient devoir être envisagées afin datteindre les
objectifs de sûreté en matière de protection-incendie. Pour de plus amples
renseignements sur lapproche réglementaire de la CCSN, consulter le
REGDOC-3.5.3, <i>Principes fondamentaux de réglementation. </i></p>
<h3 id="secF-1">F.1 Considérations propres aux installations nucléaires </h3>
<p>Les
considérations de conception et de construction propres aux installations
nucléaires comprennent notamment&nbsp;:</p>
<ul>
<li>les dispositions visant à soutenir le respect des exigences de
radioprotection</li>
<li>la protection des matières dangereuses, des substances nucléaires
et des matières radioactives contre les effets du feu</li>
<li>la prévention de la dispersion des matières radioactives par le
feu ou les activités de lutte contre lincendie</li>
<li>la protection des personnes et des SSC contre les effets et les
sous-produits de la combustion</li>
<li>la résistance aux mécanismes de dégradation par
vieillissement et aux conditions ambiantes dexploitation particulièrement
difficiles</li>
</ul>
<p>Dans
les cas où les dispositions des codes et des normes sur la sécurité-incendie et
la sécurité des personnes ne suffisent pas pour tenir compte des particularités
de linstallation en matière de sécurité, il faudra peut-être établir des critères
pour déterminer le maintien de conditions soutenables dans lenvironnement local
et lacceptabilité des conséquences.</p>
<p>Des
critères de maintien de conditions soutenables peuvent servir à évaluer la
pertinence des mesures de conception et à déterminer les caractéristiques de
conception qui permettraient datténuer les risques et améliorer la sécurité
des personnes qui demeurent sur place. Par exemple, les critères de maintien de
conditions soutenables pour une installation peuvent indiquer que le personnel essentiel
devra demeurer sur place pour exécuter ses tâches pendant un incendie, ce qui
pourrait mener à la mise en place de dispositifs comme des systèmes de détection
hâtive, dextraction de la fumée ou dextinction des incendies. Les critères de
maintien de conditions soutenables et les analyses connexes doivent contenir
suffisamment de facteurs de prudence et de sécurité pour tenir compte de lincertitude
et des erreurs dans les connaissances et les outils danalyse.</p>
<p>Dans
certains cas, la conception, le choix des matériaux, la construction et lentretien
des SSC liés à la protection-incendie requièrent un examen plus poussé allant au-delà
des exigences minimales prescrites par les normes de protection-incendie, afin
de sassurer quils sont fiables et suffisamment robustes pour répondre aux
besoins associés à leur utilisation prévue, aux conditions dexploitation et à
la durée de fonctionnement prévue.</p>
<p>Les
SSC de protection-incendie peuvent devoir fonctionner dans des environnements difficiles
(p.&nbsp;ex., vibrations, températures extrêmes, champs de rayonnement, humidité).
De plus, comme la mise en place des systèmes de protection-incendie est une
condition préalable à loccupation ou à lexploitation de linstallation, ils
sont normalement lun des premiers systèmes en service installés et lun des
derniers à être enlevés avant la démolition de linstallation. La conception
tient donc compte du cycle de vie de ces SSC, y compris les exigences dentretien
et les dispositions de remplacement ou de remise à neuf.</p>
<h3 id="secF-2">F.2 Dimensionnement </h3>
<p>Les
dispositions de protection-incendie établies dans le PPI devraient être intégrées
au dimensionnement de linstallation nucléaire. Le dimensionnement devrait tenir
compte des événements, caractéristiques, dangers et risques, tant internes quexternes.</p>
<h3 id="secF-3">F.3 Conception et disposition du bâtiment </h3>
<p>Linstallation
nucléaire et les SSC qui font partie intégrante de son exploitation devraient
être conçus, situés et construits de manière à sadapter à tous les états de
fonctionnement et à toutes les configurations et expositions dune manière qui
respecte tous les objectifs de sûreté.</p>
<p>Certaines
considérations de conception répondent aux besoins de protection-incendie propres
aux installations nucléaires, notamment&nbsp;:</p>
<ul>
<li>la construction incombustible de tous les bâtiments et structures</li>
<li>lutilisation de matériaux incombustibles ou ignifuges et
résistants à la chaleur</li>
<li>les composants sous pression des systèmes dextinction, qui sont
conçus conformément au fondement dautorisation de léquipement sous pression</li>
<li>la protection contre la foudre, conformément aux normes en
vigueur</li>
</ul>
<p>La
conception et la construction des installations nucléaires devraient également
porter un soin particulier aux aspects suivants&nbsp;:</p>
<ul>
<li>les séparations et barrières coupe-feu</li>
<li>les boucliers thermiques</li>
<li>le contrôle des matières combustibles</li>
<li>le contrôle des déversements</li>
<li>la protection des SSC et des substances dangereuses contre les risques
dincendie</li>
<li>le stockage en vrac des marchandises dangereuses</li>
<li>la qualification sismique</li>
<li>les systèmes de communication vocale</li>
<li>léclairage de secours</li>
<li>les évacuations et les sorties</li>
<li>les zones de refuge</li>
</ul>
<h3 id="secF-4">F.4 Séparations et barrières coupe-feu </h3>
<p>On
devrait utiliser des séparations coupe-feu pour sassurer que&nbsp;:</p>
<ul>
<li>les éléments du bâtiment maintiennent leur stabilité structurale et
leur force portante</li>
<li>la propagation du feu est empêchée</li>
<li>des voies dévacuation et de sauvetage sûres sont maintenues</li>
<li>des barrières sont en place pour assurer la protection des personnes
et de lenvironnement</li>
<li>les systèmes liés à la sûreté ne sont pas situés à proximité dun
risque dincendie sans la présence dune barrière coupe-feu ou dune séparation
spatiale adéquate</li>
<li>les SSC importants pour la sûreté sont séparés par des barrières ayant
un indice de résistance au feu adéquat selon les dangers dincendie, dexplosion
et de projectiles</li>
<li>les séparations coupe-feu utilisées pour protéger le
personnel essentiel, les composants assurant la sûreté nucléaire, les substances
dangereuses, les substances nucléaires ou les matières radioactives, les dispositifs
de fermeture, les joints des points de pénétration et les coupe-feu ont un
indice de résistance au feu au moins égal à lindice de résistance au feu des
séparations coupe-feu</li>
</ul>
<p>Les trois stratégies de séparation suivantes devraient
être employées pour la protection-incendie&nbsp;:</p>
<ul>
<li>des barrières physiques conçues pour contrer les expositions au
feu et les explosions</li>
<li>la séparation spatiale</li>
<li>une combinaison des deux stratégies ci&#8209;dessus</li>
</ul>
<h3 id="secF-5">F.5 Boucliers thermiques </h3>
<p>Dans
certaines situations, la séparation par un coupe-feu continu est soit peu
pratique, soit impossible en raison de lemplacement et de lespacement relatif
des cibles et des risques dincendie. Dans de tels cas, un bouclier thermique devrait
être utilisé pour prévenir lexposition dune cible précise. La conception de
chaque bouclier thermique dépend du danger en question et nécessite donc une
solution technique basée sur les critères de rendement énoncés à la section&nbsp;4.</p>
<p>Des
boucliers thermiques devraient être installés pour atténuer lexposition à un
flux de chaleur rayonnante. Sil y a lieu, il faudrait considérer la formation
de couches de gaz chaud en hauteur à la fois comme un radiateur et comme une immersion
dans un panache dincendie, un jet de plafond ou une couche de gaz chaud.</p>
<p>Si
la cible est suspendue à des supports au plafond ou en hauteur, on doit évaluer
ces supports pour sassurer quils ne deviendront pas défaillants en raison dun
flux thermique critique ou dune température critique.</p>
<p>Les
flux convectifs et de rayonnement, y compris la contribution de la couche
supérieure de gaz chaud, devraient être pris en considération. </p>
<h3 id="secF-6">F.6 Contrôle des matières combustibles (solides, liquides et gaz) </h3>
<p>Le
cas échéant, il faudrait réduire au minimum les matières solides combustibles et
les protéger contre linflammation. Il faudrait évaluer les conséquences potentielles
des incendies mettant en cause les matières combustibles.</p>
<p>Les
SSC qui dégagent ou pourraient dégager des gaz ou des liquides combustibles&nbsp;&#8210;
que ce soit pendant lexploitation normale ou dans dautres conditions telles
que des incidents de fonctionnement prévus (IFP) ou des accidents de
dimensionnement&nbsp;&#8210; devraient être conçus et exploités de manière à
prévenir les incendies. Cet objectif peut être atteint par diverses
méthodes&nbsp;:</p>
<ul>
<li>la ventilation</li>
<li>la dilution</li>
<li>lisolement</li>
<li>la combustion contrôlée</li>
<li>la recombinaison</li>
</ul>
<p>Les
systèmes contenant des gaz ou des liquides combustibles tiennent généralement
compte des aspects suivants&nbsp;:</p>
<ul>
<li>Les bouteilles de gaz comprimé sont placées à lécart des SSC
liés à la sûreté afin de prévenir les dommages causés par les incendies, les explosions
ou les projectiles.</li>
<li>Lorsque la tuyauterie et les canalisations traversent des
compartiments coupe-feu contenant des systèmes darrêt sûr en cas dincendie, la
tuyauterie et les canalisations doivent résister aux séismes.</li>
<li>Les systèmes contenant des huiles hydrauliques et des huiles
lubrifiantes combustibles sont conçus pour réduire au minimum les fuites.</li>
<li>Dans les endroits où les fuites pourraient mettre en péril les
SSC liés à la sûreté, la conception prévoit des dispositifs pour recueillir,
détourner et confiner en toute sécurité les fuites provenant des SSC
pressurisés et non pressurisés afin de prévenir linflammation des substances ou
de limiter la taille et les conséquences dun incendie.</li>
<li>Les systèmes qui produisent de lhydrogène ou du deutérium gazeux
pendant lexploitation normale ou un IFP sont conçus pour empêcher la création dun
mélange inflammable, et à cette fin on peut recourir à diverses méthodes&nbsp;:
la ventilation, la dilution, la combustion contrôlée ou la recombinaison.</li>
<li>Les défaillances du système de contrôle de lhydrogène
déclenchent une alarme dans la salle de commande principale, ce qui amène lexploitant
à intervenir.</li>
</ul>
<h3 id="secF-7">F.7 Contrôle des déversements </h3>
<p>La
conception comprend des mesures de contrôle et de confinement des liquides rejetés
par un déversement, par un incendie ou à la suite des activités de lutte contre
lincendie. Ces mesures de contrôle sappliquent aux liquides inflammables et combustibles,
ainsi quaux zones qui peuvent contenir des substances dangereuses, des substances
nucléaires ou des matières radioactives.</p>
<p>Le
contrôle et le confinement des liquides comprennent le drainage direct vers des
zones sûres et, le cas échéant, le confinement pour prévenir linondation de léquipement
et éviter que les zones environnantes soient mises en danger.</p>
<p>La
lutte contre les déversements est généralement assurée par une combinaison de plusieurs
éléments intégrés dans la conception, notamment&nbsp;:</p>
<ul>
<li>des drains de plancher</li>
<li>des tranchées de plancher</li>
<li>des baies de communication ouvertes et dautres ouvertures
murales</li>
<li>des bordures pouvant contenir ou diriger les liquides drainés</li>
<li>les équipements sur socle</li>
<li>les
fosses, les puisards et les pompes de puisard</li>
</ul>
<p>Les
dimensions du système et des installations de drainage et des dispositifs de
confinement dans une zone donnée doivent correspondre au volume potentiel de
liquide produit dans cette zone, déterminé par une ERI propre à cette zone (voir
la sous-section&nbsp;6.5.2).</p>
<p>Le
drainage du plancher dans des zones contenant des liquides inflammables ou combustibles
devrait être muni dun dispositif de retenue afin dempêcher la propagation des
liquides enflammés au-delà du secteur de feu.</p>
<p>Lorsque
des systèmes dextinction des incendies à gaz sont installés, les drains de
plancher devraient être munis de joints adéquats, ou encore le système dextinction
devrait être dimensionné pour compenser la perte de lagent dextinction par
les drains.</p>
<p>Dans
le cas des systèmes hors site qui contiennent des gaz liquéfiés, des liquides
inflammables ou combustibles comme des transformateurs isolés à lhuile, le sol
devrait être incliné de façon à ce que les déversements de liquide séloignent
des SSC adjacents. Des zones avec bordures ou des fosses devraient être aménagées
autour des systèmes extérieurs qui contiennent des liquides inflammables ou
combustibles et des agents dextinction.</p>
<h3 id="secF-8">F.8 Protection des SSC et des substances dangereuses contre les risques dincendie </h3>
<p>Il
faudrait évaluer les installations externes, telles que les installations de
stockage de gaz ou de liquides inflammables, et prendre des mesures appropriées
pour protéger les structures contenant des matières radioactives ou les SSC qui
sont importants pour la sûreté et qui risquent dêtre exposés au feu. Les zones
où se trouvent les ateliers, les entrepôts, les chaufferies auxiliaires, les
réservoirs de mazout et les réservoirs de stockage de liquides inflammables et
combustibles devraient être situées et protégées de façon à ce quun feu ou les
effets dun feu, y compris la fumée, naient pas deffet négatif sur les systèmes
ou les équipements importants pour la sûreté.</p>
<p>Dans
les régions où il existe un potentiel de dommages causés par les feux de forêt,
il faudrait évaluer le risque que représentent ces feux pour les structures qui
contiennent des matières radioactives ou pour les SSC importants pour la sûreté.
Des mesures appropriées devraient alors être prises.</p>
<p>Il faudrait tenir compte des aspects suivants dans la
conception du stockage en vrac des marchandises dangereuses&nbsp;:</p>
<ul>
<li>les placer dans des locaux isolés ou à lextérieur dans des
bâtiments de stockage isolés</li>
<li>les placer de façon à limiter les expositions qui pourraient
influer sur la sûreté nucléaire</li>
<li>les séparer des autres bâtiments conformément aux codes et normes
applicables</li>
<li>assurer leur protection en utilisant des séparations coupe-feu ou
une séparation spatiale pour les éloigner des éléments suivants&nbsp;:
<ul>
<li>les
transformateurs extérieurs</li>
<li>les
voies dévacuation des bâtiments</li>
<li>les
voies daccès des véhicules du service dincendie</li>
<li>les
ouvertures de prise dair de ventilation</li>
<li>les
entrepôts et aires de stockage</li>
<li>les
bâtiments construits avec des matériaux combustibles</li>
<li>lapprovisionnement
en eau du système de protection-incendie</li>
<li>les
vannes et robinets disolement qui contrôlent des processus ou des systèmes de
protection&#8209;incendie</li>
<li>les
drains dégouts</li>
</ul>
</li>
</ul>
<h3 id="secF-9">F.9 Qualification sismique </h3>
<p>La
conception de linstallation nucléaire devrait inclure des dispositions de prévention,
dextinction ou de confinement, de sorte que les SSC demeurent disponibles pour
répondre aux objectifs de protection&#8209;incendie, selon la section&nbsp;4. Ces
dispositions devraient tenir compte de la défaillance potentielle des SSC qui
ne sont pas qualifiés pour résister aux séismes.</p>
<p>Lorsque
la défaillance directe ou indirecte des systèmes de protection-incendie ou des
séparations coupe-feu peut entraîner la défaillance des SSC qui doivent
fonctionner après un séisme, ces systèmes et séparations devraient être construits
selon des conceptions parasismiques qualifiées.</p>
<p>Pour
les systèmes de protection-incendie qui doivent fonctionner après un séisme, la
conception et laménagement des SSC devraient faire en sorte que les services nécessaires
pour soutenir ces systèmes (p.&nbsp;ex., électricité, eau et air comprimé) sont
qualifiés pour demeurer fonctionnels après le séisme.</p>
<h3 id="secF-10">F.10 Systèmes de communication vocale </h3>
<p>Pour
avertir les occupants et les intervenants durgence à lintérieur de linstallation,
il faudrait utiliser un système dalarme incendie ou autre système de
téléavertissement. Les systèmes de communication vocale devraient être
conformes à la norme CAN/ULC S-524, <i>Installation des réseaux avertisseurs dincendie</i>,
des Laboratoires des assureurs du Canada <sup id="fnb22-ref"><a className="fn-lnk" href="#fnb22"><span className="wb-inv">Notes de bas de page </span>22</a></sup> <i>.</i></p>
<h3 id="secF-11">F.11 Éclairage de secours </h3>
<p>Léclairage
de secours est utilisé dans les situations, y compris les événements dus à un
incendie, qui causent la perte totale ou partielle des systèmes déclairage
électrique. Pour limiter les défaillances les plus courantes du système déclairage,
on a recours à un système distribué. La conception du système déclairage devrait
tenir compte de la durée prévue des événements et des délais dintervention. Les
interventions manuelles sur le terrain peuvent nécessiter des durées déclairage
supérieures à ce qui est prescrit dans les codes du bâtiment et de prévention
des incendies.</p>
<p>Léclairage
durgence devrait être conçu et entretenu de manière à être disponible sur demande
pour aider les intervenants durgence et les occupants, et ce, pour la durée
prévue de lévénement.</p>
<p>La
conception de léclairage de secours devrait tenir compte des aspects
suivants&nbsp;:</p>
<ul>
<li>léclairage de secours doit soutenir les mesures dextinction, les
opérations darrêt durgence et lévacuation durgence en cas dincendie</li>
<li>léclairage de secours doit fonctionner automatiquement en cas de
coupure dalimentation des circuits déclairage</li>
<li>les unités déclairage de secours doivent avoir une taille
permettant déclairer les voies dévacuation et daccès aux zones contenant des
dispositifs darrêt sûr jusquà ce que toutes les interventions de lopérateur soient
terminées ou jusquà ce que léclairage normal de linstallation soit rétabli</li>
<li>léclairage des planchers des voies dévacuation, des sorties et
des zones où des interventions manuelles sur le terrain sont effectuées doit
avoir une valeur dau moins 10&nbsp;lux, mesuré au plancher</li>
<li>la disposition des appareils déclairage doit faire en sorte quen
cas de défaillance dun appareil déclairage, par exemple une ampoule brûlée,
aucune zone ne sera laissée dans lobscurité</li>
<li>léclairage de secours doit être alimenté en électricité
par une ou plusieurs batteries centrales pourvues de dispositifs de protection,
de sorte quun incendie dans une zone ne provoquera pas la perte de léclairage
de secours dans une zone non touchée</li>
</ul>
<h3 id="secF-12">F.12 Voies dévacuation et de sortie </h3>
<p>Les
codes et normes de protection-incendie et de sécurité des personnes mentionnés
dans le fondement dautorisation de linstallation nucléaire établissent les
exigences de base pour ce qui est des voies dévacuation et de sortie, et sont applicables
à toutes les installations.</p>
<p>Les
dispositions dévacuation et de sortie de linstallation devraient être conçues
et maintenues de manière à faciliter&nbsp;:</p>
<ul>
<li>lintervention durgence</li>
<li>la sécurité</li>
<li>la radioprotection</li>
<li>le contrôle des rejets dangereux</li>
<li>la qualification environnementale</li>
</ul>
<h3 id="secF-13">F.13 Zones de refuge </h3>
<p>En
raison de la nature des dangers associés à une installation nucléaire, lévacuation
de tous ses occupants peut ne pas être souhaitable. La mise à labri, sur place
ou dans des zones de refuge désignées, est une stratégie possible pour
atteindre les objectifs de la section&nbsp;4 pendant un événement.</p>
<p>La
conception de linstallation devrait prévoir des zones de refuge qui assurent
des environnements soutenables où les occupants de linstallation peuvent
rester en toute sécurité, à labri des conditions ambiantes pendant et après un
événement.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="AppG"></div>
<h2 id="ann-g">Annexe G : Rapport dexamen par un tiers</h2>
<p>En général, le rapport dexamen par un tiers (RET) indépendant sert
à évaluer divers aspects des éléments du PPI, notamment la nouvelle conception,
les modifications susceptibles davoir une incidence sur la protection-incendie,
les forages, les activités dIEE, lexamen des conditions générales de linstallation
ou la vérification de la protection-incendie. Lexigence détablir des RET
indépendants vise à fournir un autre niveau de vérification indépendante pour sassurer
que les exigences des codes et des normes applicables sont respectées. Les
résultats du RET devraient être fournis à la CCSN pour examen, qui sassurera
que les exigences de la LSRN et de ses règlements connexes, ainsi que les
attentes du personnel de la CCSN, sont respectées.</p>
<h3 id="secG-1">G.1 Attentes à légard du rapport dexamen par un tiers </h3>
<p>Le
RET consiste habituellement en une comparaison de la situation avec les exigences
des codes et normes applicables.</p>
<p>Le
rapport devrait relever toute non-conformité et formuler des conclusions indiquant
si les modifications, la mise en œuvre du PPI ou les exercices proposés par le
titulaire de permis répondent aux exigences des codes et normes cités dans le manuel
des conditions de permis de linstallation. Le format de présentation du
rapport nest pas précisé et peut être adapté à linstallation. Toutefois, à
titre indicatif, voici quelques suggestions concernant le contenu et la
présentation de ce rapport écrit&nbsp;:</p>
<ul>
<li>le nom, ladresse et le numéro de téléphone de lagence ou de lorganisation
chargée de la préparation du rapport</li>
<li>les noms des membres de léquipe dexamen, y compris une brève description
de leur expérience et de leur formation</li>
<li>le nom, ladresse et le numéro de téléphone du titulaire de
permis</li>
<li>le titre du rapport, le titre du projet, le ou les numéros du
projet, la date et le numéro du document</li>
<li>une introduction décrivant brièvement le domaine dintérêt
vérifié</li>
<li>lénoncé de la portée de lexamen énumérant expressément toutes
les exclusions</li>
<li>les objectifs de lexamen</li>
<li>une liste des codes et normes applicables</li>
<li>un résumé de la méthode dexamen, y compris les domaines et les documents
examinés</li>
<li>les observations concernant les exigences des codes ou des normes
applicables (nouvelle conception, modifications, exercices ou mise en œuvre du
PPI)</li>
<li>des conclusions, y compris un énoncé qui indique si le titulaire de
permis respecte les exigences des codes et normes applicables, les bonnes
pratiques dingénierie, et sil atteint les objectifs de protection-incendie</li>
<li>un résumé des non-conformités</li>
<li>des recommandations (le cas échéant)</li>
<li>un tableau de suivi des enjeux</li>
</ul>
<h3 id="secG-2">G.2 Attentes concernant lévaluation de létat de linstallation ou de la centrale </h3>
<p>Un
examen suffisant de la défense en profondeur, décrite à la section&nbsp;6.9.2,
désigne linspection et la documentation de létat de la centrale ou de linstallation,
couvrant entre autres les éléments suivants&nbsp;:</p>
<ul>
<li>la sécurité des bâtiments
et des occupants&nbsp;: les séparations coupe-feu, les risques dincendie, les exigences
de lutte contre lincendie, les moyens dévacuation, les plans durgence</li>
<li>le stockage intérieur et extérieur</li>
<li>les liquides inflammables et combustibles</li>
<li>les opérations et
processus dangereux, y compris le travail à chaud</li>
<li>léquipement
de protection-incendie&nbsp;: extincteurs portatifs, système de détection des
incendies, système dalarme et de communication vocale, systèmes de
protection-incendie à base deau, systèmes spéciaux de protection-incendie, systèmes
dalimentation de secours, éclairage de secours et panneaux et signaux de
sortie</li>
</ul>
<p>Veuillez
consulter les normes CSA N293 ou N393 et le manuel des conditions de permis applicable
pour connaître les exigences relatives à la fréquence de ces inspections.</p>
<h3 id="secG-3">G.3 Qualifications de lexaminateur tiers indépendant </h3>
<p>Un
examinateur tiers indépendant devrait être un expert dans sa discipline et être
qualifié grâce à une formation appropriée et à une expérience directe dans le
secteur, comme il est décrit dans le <i>Code national du bâtiment du Canada</i> et le <i>Code national de prévention des incendies du Canada</i>. Les qualifications
précises requises dun examinateur tiers indépendant dépendent grandement de la
nature et de la complexité des modifications, des systèmes de sécurité-incendie,
des vérifications et de linstallation. Pour certains RET, il faudrait recourir
à une approche multidisciplinaire pour tenir compte du degré de spécialisation
requis dans un certain nombre de domaines (p.&nbsp;ex., connaissance des normes
et des codes imposés par les conditions du permis, systèmes automatiques de
protection-incendie, lutte manuelle contre les incendies, stockage et
utilisation des matières dangereuses, et analyse des processus). Lexaminateur
tiers devrait être indépendant de la direction de linstallation et de lautorité
responsable de la conception, afin dassurer une impartialité totale.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="AppH"></div>
<h2 id="ann-h">Annexe H : Déficiences</h2>
<p>Les SSC de protection-incendie assurent le maintien
de la santé et de la sécurité des personnes et de lenvironnement pendant les incendies.
Lors de la planification des déficiences en vue des essais, il est impératif de
tenir compte des facteurs suivants&nbsp;:</p>
<ul>
<li>les voies dévacuation et daccès durgence</li>
<li>les systèmes de détection dincendie et dalarme</li>
<li>les systèmes dextinction automatiques ou manuels des incendies (p.&nbsp;ex.,
systèmes dextinction des incendies à eau, à gaz et à mousse, et leurs
mécanismes de rejet des effluents, les vannes et robinets, lalimentation
électrique et les dispositifs dalarme connexes)</li>
<li>les systèmes dalimentation en eau du réseau de protection-incendie
(p.&nbsp;ex., systèmes de distribution, vannes et robinets des systèmes, pompes
dincendie, toute lalimentation et tout le carburant requis, et les alarmes)</li>
<li>léclairage de secours visant à assurer la sécurité des occupants
et à appuyer les actions manuelles de lexploitant afin darrêter de façon sûre
les processus</li>
<li>le système dinterphone et les dispositifs connexes</li>
<li>les systèmes de barrières coupe-feu (p.&nbsp;ex., portes
coupe-feu, clapets coupe-feu, ensembles coupe-feu, revêtements ignifuges, joints
des points de pénétration des barrières)</li>
<li>les SSC ou dispositifs visant à atténuer les dangers,
p.&nbsp;ex., des digues pour le contrôle ou le confinement des déversements</li>
<li>les SSC dintervention durgence (c.&#8209;à&#8209;d. équipement de
lutte contre lincendie) et les dispositions connexes</li>
<li>un tableau de suivi des enjeux </li>
</ul>
<h3 id="secH-1">H.1 Déficiences planifiées </h3>
<p>Avant
la mise en déficience dun SSC de protection-incendie, les étapes suivantes devraient
être suivies&nbsp;:</p>
<ul>
<li>La ou les personnes responsables de la surveillance et de la coordination
de la déficience et de la remise en état subséquente du système ou de lélément
sont désignées.</li>
<li>Létendue et la durée prévue de la déficience sont déterminées.</li>
<li>Les zones ou bâtiments concernés sont inspectés et laugmentation
des risques est déterminée.</li>
<li>Des mesures compensatoires sont établies et mises en œuvre.</li>
<li>Les moyens de réduire létendue et la durée de la déficience sont
pris en compte.</li>
<li>Le service dincendie, la brigade de pompiers industrielle et les
autres intervenants durgence sont avisés.</li>
<li>Lentreprise chargée de la surveillance des alarmes, le
propriétaire ou son représentant désigné et les autres autorités compétentes
sont avisés.</li>
<li>Les superviseurs des zones concernées sont avisés.</li>
<li>Les SSC mis en déficience sont identifiés sur le terrain (p.&nbsp;ex.,
par des étiquettes).</li>
<li>Tous les outils et matériaux nécessaires sont assemblés sur le
site qui sera mis en déficience avant le début des travaux.</li>
</ul>
<h3 id="secH-2">H.2 Avis </h3>
<p>Les parties touchées par la
mise en déficience dun SSC de protection-incendie devraient être avisées de la
déficience, des mesures compensatoires et de toute modification apportée à leur
intervention durgence. Les parties concernées ou intéressées peuvent
comprendre&nbsp;:</p>
<ul>
<li>les occupants du bâtiment, y compris les travailleurs dans le bâtiment
et toutes les personnes en visite ou travaillant temporairement dans le bâtiment</li>
<li>les gestionnaires du bâtiment ou leurs représentants désignés</li>
<li>les entreprises chargées de la surveillance des alarmes</li>
<li>les intervenants durgence, y compris le corps de pompiers
industriel (le cas échéant) et les services dincendie</li>
<li>toute autre autorité compétente</li>
</ul>
<p>Lorsquun
avis de déficience planifiée est fourni, il devrait être donné en temps
opportun pour permettre une rétroaction ou la mise en œuvre de mesures
additionnelles.</p>
<p>Lexigence
daviser la CCSN des déficiences est décrite dans les normes nucléaires CSA
N293 ou N393 et est normalement
limitée aux situations dans lesquelles un SSC crédité est incapable datteindre
ses objectifs de conception en raison dune déficience non planifiée.</p>
<h3 id="secH-3">H.3 Déficiences non planifiées </h3>
<p>Il
faudrait procéder à une planification préliminaire des déficiences et des autres
mesures compensatoires potentielles pour les principaux SSC de
protection-incendie lorsque le risque posé par un SSC de protection-incendie déficient
peut être inacceptable pour les personnes et lenvironnement. Cette
planification préliminaire devrait tenir compte des scénarios plausibles de déficiences.</p>
<p>Dans
la mesure du possible, les mesures compensatoires pour les déficiences non
planifiées devraient être comparables aux mesures prévues pour une déficience
planifiée.</p>
<h3 id="secH-4">H.4 Remise en service des systèmes </h3>
<p>À la fin de la déficience, il faudrait suivre les étapes suivantes pour sassurer
que tout léquipement mis en déficience est remis en état de fonctionnement normal&nbsp;:</p>
<ul>
<li>Toutes les inspections et tous les essais nécessaires ont été
effectués pour vérifier que les systèmes touchés sont opérationnels.</li>
<li>Les superviseurs ont été informés que la protection a été
rétablie.</li>
<li>Le service dincendie a été informé que la protection a été
rétablie.</li>
<li>Le propriétaire ou son représentant désigné et les autres
autorités compétentes ont été informés que la protection a été rétablie.</li>
<li>Létiquette signalant la déficience a été retirée.</li>
</ul>
<h3 id="secH-5">H.5 Documentation </h3>
<p>Le
PPI de linstallation devrait inclure des procédures concernant les déficiences
planifiées et non planifiées des SSC de protection-incendie. Ces procédures devraient
être suffisamment détaillées pour sassurer et démontrer que les attentes ont
été satisfaites.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="AppI"></div>
<h2 id="ann-i">Annexe I : Intervention en cas dincendie</h2>
<p>Lefficacité
de lorganisation dintervention en cas dincendie de linstallation est directement
liée à la pertinence des moyens de lutte contre lincendie et des programmes de
formation respectifs, combinée à une compréhension globale des dangers, tels
que définis dans lévaluation des risques dincendie (ERI) et les analyses de
sûreté, les procédures normales dexploitation, le plan pré&#8209;incident et
le plan daction durgence.</p>
<p>Un
certain nombre de facteurs peuvent avoir un impact sur les activités dextinction
des incendies. Bien que ces facteurs puissent contribuer différemment à lefficacité
de lintervention, ils sont tous interreliés et comprennent&nbsp;:</p>
<ul>
<li>la qualité des ressources de lutte contre lincendie (p.&nbsp;ex.,
ressources humaines, équipement et appareils de lutte contre lincendie)</li>
<li>les connaissances, le niveau de compétence et le rendement des
intervenants</li>
<li>la compréhension, par les intervenants, de lampleur du risque dincendie</li>
<li>la capacité à respecter les délais dintervention, y compris la détection
et le signalement de lincendie, le traitement et la répartition des alarmes, le
temps de réponse et la mise en place, selon lénoncé organisationnel du corps de
pompiers, et les codes, normes et directives opérationnels applicables ou crédités
dans lanalyse justificative</li>
<li>lefficacité du commandement et du contrôle des opérations</li>
<li>lexhaustivité des procédures normales dexploitation, y compris le
plan pré-incident et le plan daction durgence</li>
<li>la sécurité des intervenants</li>
<li>lapprovisionnement en eau</li>
</ul>
<h3 id="secI-1">I.1 Planification de la lutte contre lincendie dans les installations nucléaires </h3>
<p>La
planification est une étape critique dans la gestion de la protection-incendie et
fait partie du processus de gestion des risques. Une planification efficace et
une compréhension claire des risques sont essentielles à lélaboration et à la structuration
de mesures efficaces dintervention durgence.</p>
<p>Les
mesures que doivent prendre les intervenants durgence ou les exploitants dune
installation pour intervenir en cas durgence, atténuer les risques, y mettre
fin et assurer la reprise des opérations devraient être adéquatement
documentées et coordonnées avec les plans pré-incendie de linstallation et les
plans daction en cas dincident.</p>
<h3 id="secI-2">I.2 Détermination des risques </h3>
<p>La
planification efficace de lintervention durgence repose sur la détermination
des risques dincendie et sur la compréhension de la nature et de lampleur du risque
par rapport à la charge combustible, au débit thermique et aux conséquences de
la défaillance des SSC.</p>
<p>Dans
la plupart des cas, les mesures dintervention durgence requises sont
directement liées aux risques pour une installation donnée.</p>
<h3 id="secI-3">I.3 Planification pré-incendie </h3>
<p>Le
PPI devrait établir les paramètres de planification et indiquer les postes au
sein de lorganisation qui sont responsables du maintien du PPI.</p>
<p>Lorganisation
dintervention en cas dincendie à linstallation devrait évaluer les
caractéristiques de construction et de fonctionnement de linstallation en ce
qui concerne la protection-incendie. Avec laide du personnel opérationnel et
de gestion, les intervenants durgence devraient élaborer des plans pré&#8209;incident.</p>
<p>Lobjectif
principal de la planification pré-incident est de favoriser une intervention
efficace en cas dincendie à linstallation, y compris la cessation de lincendie
et la reprise subséquente des activités.</p>
<p>La
planification pré-incident devrait évaluer les facteurs suivants associés aux conditions
durgence&nbsp;:</p>
<ul>
<li>les événements relevés dans lanalyse de la sécurité-incendie</li>
<li>lemplacement</li>
<li>la construction</li>
<li>la taille et la complexité des structures</li>
<li>les systèmes de protection</li>
<li>les facteurs dexposition</li>
<li>les renseignements sur lapprovisionnement en eau</li>
<li>les caractéristiques des occupants</li>
<li>les capacités des intervenants publics ou industriels</li>
<li>la disponibilité des intervenants durgence</li>
<li>les risques potentiels pour la sécurité des personnes</li>
<li>le type et lemplacement des substances dangereuses</li>
<li>les processus ou équipements dangereux</li>
<li>la vulnérabilité aux catastrophes naturelles</li>
<li>les priorités pour lextinction manuelle des incendies</li>
<li>les exigences concernant les systèmes de secours, y compris les
voies daccès aux systèmes liés à la sécurité, décrits dans lévaluation des
risques dincendie et lanalyse des arrêts sûrs en cas dincendie</li>
</ul>
<p>Des
plans pré&#8209;incendie sont élaborés pour couvrir toutes les zones de linstallation
et les zones adjacentes susceptibles dêtre exposées (p.&nbsp;ex., les
bâtiments voisins, les terrains non aménagés et les corridors de transport). Cette
information devrait être documentée de façon concise et inclure tout équipement,
procédure ou tactique spécialisés nécessaires à lexécution du plan.</p>
<p>Lexamen
et la révision du plan pré&#8209;incendie devraient être intégrés au processus
de planification des nouvelles constructions et inclure des éléments comme lapprovisionnement
en eau, la disponibilité des bornes dincendie et les voies dintervention. Au
minimum, les plans pré&#8209;incendie devraient être revus et révisés chaque
année pour tenir compte des éléments préoccupants relevés lors des exercices,
essais ou incidents.</p>
<p>Le
plan pré&#8209;incendie devrait être mis à la disposition de lorganisation dintervention
en cas dincendie, aux fins de mise à jour, de formation et de familiarisation.</p>
<p>On
trouvera de plus amples renseignements sur les plans pré&#8209;incendie dans la
norme NFPA-1620 de la National Fire Protection Association, <i>Recommended
Practice for Pre-Incident Planning </i><sup id="fnb23-ref"><a className="fn-lnk" href="#fnb23"><span className="wb-inv">Notes de bas de page </span>23</a></sup> <i>.</i></p>
<h3 id="secI-4">I.4 Capacité dintervention </h3>
<p>Dans
le cas de bâtiments ou des espaces intérieurs accessibles, y compris les
espaces souterrains, les moyens de lutte contre lincendie devraient comporter
une capacité de lutte contre lincendie dans les structures intérieures, selon
la norme NFPA-600.</p>
<p>Lorganisation
dintervention en cas dincendie devrait&nbsp;:</p>
<ul>
<li>fonctionner dans le cadre dun système de gestion des incidents (SGI)
reconnu qui respecte lesprit de la norme NFPA-1561, <i>Standard on Emergency
Services Incident Management System and Command Safety</i> <sup id="fnb24-ref"><a className="fn-lnk" href="#fnb24"><span className="wb-inv">Notes de bas de page </span>24</a></sup> , ou léquivalent,
et qui est en mesure de mettre en œuvre une approche de commandement unifiée</li>
<li>établir et documenter les ententes dintervention durgence avec
les fournisseurs de service hors site, y compris les rôles et responsabilités, les
attentes et les niveaux de service clairement énoncés</li>
<li>élaborer et tenir à jour des plans pré-incident</li>
<li>permettre davoir les ressources adéquates en tout temps, y
compris le nombre dintervenants, léquipement et les dispositifs, afin dassurer
une intervention efficace et soutenue en cas dincendie</li>
<li>sassurer que les groupes de soutien (p.&nbsp;ex., les
intervenants hors site, les forces de sécurité sur place, le personnel de
radioprotection, le personnel dentretien et le personnel dexploitation) sont
prêts à intervenir et quils connaissent les dangers potentiels, le
fonctionnement et laménagement de linstallation</li>
<li>intervenir en temps opportun avec des ressources suffisantes pour
lutter contre lincendie, y mettre fin et assurer la reprise des opérations</li>
<li>comprendre les effets des mesures dintervention sur les
matériaux et les processus de linstallation, ainsi que les répercussions de
ces effets sur la sécurité</li>
<li>inclure dans les moyens de lutte une capacité dintervention
contre les incendies de structures intérieures, selon la norme NFPA-600</li>
</ul>
<h3 id="secI-5">I.5 Gestion des incidents </h3>
<p>Le
système de gestion des incidents (SGI) devrait respecter lorientation de la
norme NFPA-1561. Si des éléments ne sont pas mis en œuvre ou si dautres
méthodes sont utilisées, il faut les expliquer et les justifier.</p>
<p>La
formation et les qualifications du personnel du SGI devraient respecter lorientation
de la norme NFPA-1026, <i>Standard for Incident Management Personnel
Professional Qualifications</i>.</p>
<p>Le
SGI devrait être modulaire afin de permettre lapplication des seuls éléments nécessaires
lors dun incident particulier, et permettre aux éléments dêtre activés ou
désactivés selon lévolution des besoins associés à lincident.</p>
<p>Le
SGI devrait prévoir une procédure de progression lorsque des ressources supplémentaires
sont requises. Le commandant des interventions (CI) devrait déterminer quels
niveaux et éléments du SGI doivent être mis en œuvre dans chaque cas, et
élaborer la structure de commandement pour chaque incident en attribuant les responsabilités
de supervision conformément aux procédures normales dexploitation (PNE).</p>
<p>Il
faudrait envisager une délégation efficace des responsabilités en évaluant la
capacité de chaque poste de supervision de surveiller les activités des
subordonnés affectés aux différentes tâches et de communiquer efficacement
entre eux.</p>
<p>Létendue
des pouvoirs délégués à chaque niveau de supervision devrait être décrite dans
les PNE. Lorsque lincident est sous le commandement dune seule organisation des
services durgence (OSU), le CI devrait assurer la liaison et la coordination avec
toutes les agences dassistance et de coopération.</p>
<p>Si
lincident relève de la compétence générale dune autre agence qui na pas mis
en œuvre de SGI, lOSU devrait utiliser le SGI pour gérer ses propres opérations
et coordonner ses activités avec lautorité compétente.</p>
<p>Le
CI devrait établir un commandement unifié lors dun incident nécessitant la
participation de plusieurs agences ou autorités ayant chacune ses propres responsabilités,
géographique ou fonctionnelle, à légard de lincident.</p>
<h3 id="secI-6">I.6 Commandant des interventions </h3>
<p>Le
commandant des interventions (CI) devrait avoir lautorité générale pour gérer
lincident.</p>
<p>Le
CI devrait assumer les responsabilités et les fonctions de tous les postes non
assignés du commandement des interventions.</p>
<p>Le
CI devrait sassurer que des mesures de sécurité adéquates sont en place.</p>
<p>Le
SGI devrait identifier les personnes qui assurent le commandement général sur
les lieux pendant toute la durée de lincident.</p>
<p>Les
PNE devraient prévoir une personne qui assume le rôle de CI dès le début des opérations,
sur les lieux de chaque incident.</p>
<p>Le
SGI devrait prévoir le transfert de laffectation du CI une ou plusieurs fois
au cours dun incident.</p>
<p>Les
PNE devraient définir les circonstances et les procédures de transfert du commandement
à un autre poste et préciser à quel poste le commandement devrait être transféré.</p>
<p>Le
personnel de supervision, à tous les niveaux du SGI, devrait recourir régulièrement
aux principes de gestion des risques afin de définir les limites des postes et les
fonctions acceptables et inacceptables pour tous les intervenants sur les lieux
de lincident.</p>
<p>Le
personnel de supervision devrait assumer la responsabilité des activités qui
relèvent de sa compétence, y compris la responsabilité concernant la sécurité
et la santé des intervenants et des autres personnes autorisées dans les zones
désignées.</p>
<h3 id="secI-7">I.7 Poste de commandement </h3>
<p>Le poste de commandement (PC) devrait être situé dans un endroit sûr, fixe et
protégé, ou attaché à un véhicule. Le PC devrait être accessible et clairement visible.</p>
<p>Le
poste de commandement devrait disposer dune liaison radio pour surveiller et pour
communiquer avec les canaux tactiques, de commandement et de trafic durgence
désignés en cas dincendie. Le CI devrait assumer la responsabilité globale des
intervenants lors dun incident. Le CI devrait également assumer la responsabilité
du contrôle des communications sur les canaux tactiques, de commandement et radio
désignés pour un incident.</p>
<p>Le
CI devrait être au courant de lemplacement et de la fonction de toutes les compagnies
ou unités sur les lieux de lincident.</p>
<h3 id="secI-8">I.8 Gestion des risques </h3>
<p>Le
CI devrait appliquer les principes de gestion des risques suivants&nbsp;:</p>
<ul>
<li>Les activités qui présentent un risque important pour la sécurité
des intervenants devraient être limitées aux situations susceptibles de sauver
des vies.</li>
<li>Les activités qui sont couramment utilisées pour atteindre les
objectifs du PPI devraient être reconnues comme présentant des risques inhérents
pour la sécurité des intervenants, et on devrait prendre des mesures afin de
réduire ou déviter ces risques.</li>
<li>Aucun risque pour la sécurité des intervenants ne devrait être acceptable
lorsquil ny a aucune possibilité de sauver des vies ou des biens.</li>
</ul>
<h3 id="secI-9">I.9 Équipement de lutte contre lincendie </h3>
<p>Un
équipement approprié de lutte contre lincendie devrait être fourni conformément
aux normes et à lorientation applicables. Les besoins en équipement (p.&nbsp;ex.,
tuyaux, buses, appareils respiratoires, cylindres pour appareil respiratoire
autonome, outils auxiliaires de lutte contre lincendie) devraient être basés
sur les exigences de contrôle et dextinction des incendies à linstallation
concernée. Le corps de pompiers devrait disposer de léquipement nécessaire
pour aider à acheminer leau vers les zones touchées.</p>
<p>Léquipement
de lutte contre lincendie devrait être testé et entretenu conformément aux recommandations
du fabricant et aux normes de la National Fire Protection Association (NFPA). </p>
<h3 id="secI-10">I.10 Corps de pompiers industriel </h3>
<p>Les
pompiers industriels devraient être en mesure de mener des opérations offensives
et défensives dextinction des incendies et de transporter léquipement requis
sur les lieux dun incendie en temps opportun. Diverses normes portant sur les interventions
en cas dincendie contiennent des directives quant aux délais dintervention.</p>
<p>La
norme NFPA-1081, <i>Standard for Facility Fire Brigade Member Professional
Qualifications</i>, énonce les exigences relatives au rendement professionnel
minimal pour chaque tâche propre au site que les membres de la brigade de
pompiers sont censées réaliser avant de participer aux opérations dintervention
durgence.</p>
<h3 id="secI-10-1">I.10.1 Qualifications </h3>
<p>Les
pompiers industriels devraient être physiquement qualifiés et testés pour
exécuter les tâches qui leur sont assignées. Chaque membre du corps de pompiers
devrait passer un examen physique annuel pour confirmer sa capacité deffectuer
des activités ardues et dutiliser un équipement de protection respiratoire. De
lorientation additionnelle figure dans la norme NFPA-1081.</p>
<h3 id="secI-11">I.11 Accès pour la lutte contre lincendie </h3>
<p>Toutes
les zones de linstallation devraient être accessibles afin de lutter contre
les incendies, les voies daccès étant indiquées dans le plan pré&#8209;incident.</p>
<p>Il
faudrait prendre des mesures pour permettre laccès aux zones verrouillées. Il
faut notamment permettre au personnel de sécurité et de radioprotection dintervenir
dans le secteur de feu en même temps que les pompiers, le cas échéant.</p>
<p>Le
personnel de radioprotection devrait sentretenir avec le chef des pompiers industriels
pour déterminer la méthode daccès la plus sécuritaire dans toute zone où des matières
radioactives sont présentes.</p>
<h3 id="secI-12">I.12 Évacuation de la fumée et de la chaleur </h3>
<p>Le
corps de pompiers devrait avoir léquipement de ventilation portable requis
pour évacuer la chaleur et la fumée, et être en mesure de le faire. Les zones
qui ne devraient pas être ventilées, en raison de problèmes possibles de contamination,
devraient être clairement indiquées dans le plan pré-incident de linstallation.</p>
<h3 id="secI-13">I.13 Formation </h3>
<p>Tous
les membres du corps de pompiers industriel devraient être qualifiés pour
exercer leurs fonctions respectives, selon les objectifs du PPI de linstallation.</p>
<p>La
formation en intervention durgence est basée sur des procédures normales dexploitation.
Ces procédures sont mises à jour par écrit (conjointement à lERI et à lAASI) et
portent sur les urgences prévues.</p>
<p>Le
corps de pompiers industriel est composé dun personnel formé conformément aux exigences
des normes modernes applicables, telles celles de la NFPA. Cette formation
comprend des mises à jour régulières sur les pratiques de lutte contre lincendie,
ainsi que des cours de recyclage.</p>
<p>Un
dossier devrait être tenu pour chaque membre du corps de pompiers, et contenir
les renseignements suivants&nbsp;:</p>
<ul>
<li>la formation initiale théorique et la formation pratique</li>
<li>le programme de recyclage suivi</li>
<li>les écoles de formation spécialisées fréquentées</li>
<li>un registre des présences aux exercices</li>
<li>une formation en leadership pour le corps de pompiers</li>
</ul>
<p>Les
fournisseurs de service hors site qui sont censés intervenir en cas dincendie
à linstallation devraient en connaître laménagement. Une séance de familiarisation
devrait être tenue au moins une fois par année.</p>
<p>Les
intervenants hors site devraient également recevoir une formation sur les matières
radioactives, les substances dangereuses et le rayonnement qui pourraient être présents.
La formation, les moyens et léquipement utilisés par les fournisseurs de
service durgence hors site devraient être proportionnels à leurs fonctions et rôles
respectifs pour lesquels ils sont agréés.</p>
<h3 id="secI-14">I.14 Service dincendie hors site </h3>
<p>Le
titulaire de permis devrait conclure une entente daide mutuelle avec le
service dincendie municipal ou tout autre fournisseur de service approprié.</p>
<p>Cette
entente devrait comprendre un plan indiquant comment les pompiers industriels
et les fournisseurs de service hors site collaboreront.</p>
<p>Le
corps de pompiers industriel devrait consulter les fournisseurs de service hors
site pour établir des plans de lutte contre lincendie et de sauvetage, y
compris des procédures pour obtenir laide dautres organisations.</p>
<p>Les
intervenants hors site devraient être invités à participer régulièrement à des
exercices dévacuation et de lutte contre lincendie.</p>
<h3 id="secI-15">I.15 Ententes et communications </h3>
<p>Des
ententes documentées officielles et des protocoles de communication sont
établis entre lorganisation dintervention durgence de linstallation et
toutes les autres parties concernées, notamment les forces de sécurité, le
personnel de radioprotection, dentretien et dexploitation, le personnel désigné
et les organismes dintervention durgence hors site.</p>
<p>La
direction de linstallation désigne un poste de liaison avec les intervenants durgence
hors site et devrait sassurer que ces derniers soient escortés en tout temps.</p>
<h3 id="secI-16">I.16 Détermination des ressources requises pour la lutte contre lincendie </h3>
<p>Les
ressources minimales requises pour la lutte contre lincendie sont directement
liées aux priorités opérationnelles de lutte contre lincendie et aux objectifs
détaillés dans le plan pré-incident et le plan daction durgence pour linstallation.</p>
<p>Il
faudrait réaliser des analyses appropriées des besoins afin de déterminer le
nombre minimal de personnes requises pour lintervention en cas dincendie,
ainsi que léquipement qui sera nécessaire pour appuyer leur rôle. Ces analyses
devraient prendre en compte létat physique de linstallation dans ses
différents modes dexploitation et tous les scénarios dincendie postulés. </p>
<p>Les
points suivants devraient être examinés lors de la détermination des ressources
minimales requises pour la lutte contre lincendie&nbsp;:</p>
<ul>
<li>les activités prévues de lutte contre lincendie</li>
<li>les activités nécessaires à lexécution du plan pré-incident et
du plan daction durgence</li>
<li>les activités créditées dans lAASI</li>
<li>les difficultés daccès à des zones précises de linstallation</li>
<li>leffectif minimal en personnel et en équipement requis pour
lutter en toute sécurité contre les incendies qui ont ou qui pourraient avoir
une incidence sur les systèmes liés à la sûreté</li>
</ul>
<p>Avant lanalyse des tâches, il faudrait recueillir et
analyser les données critiques afin de&nbsp;:</p>
<ul>
<li>définir lincendie de dimensionnement en fonction de lévolution du
débit thermique au fil du temps (développement de lincendie) par rapport aux
expositions critiques aux systèmes de sûreté dans chaque zone dincendie</li>
<li>comprendre lensemble des substances combustibles et leur configuration
en ce qui concerne leur impact sur la propagation et le développement de lincendie,
ainsi que les exigences respectives pour lextinction des incendies</li>
</ul>
<p>Ces
deux facteurs devraient dicter la quantité et le type dagents extincteurs ainsi
que le nombre et le type de tuyaux qui seront nécessaires pour maîtriser et
éteindre lincendie avec succès. Ces facteurs devraient également dicter les
ressources de lutte contre lincendie requises pour combattre avec succès un
incendie de dimensionnement donné et pour protéger les systèmes
liés à la sûreté.</p>
<h3 id="secI-17">I.17 Mieux-être des pompiers </h3>
<p>Un
programme de mieux-être des pompiers devrait être mis en œuvre qui établit les
facteurs de risque pour leur santé physique et mentale et prévoit de léducation
et des consultations dans le but de prévenir les problèmes de santé et dassurer
le mieux-être général. Un tel programme devrait offrir un entraînement physique,
dendurance et de force. La surveillance continue de laptitude au travail des intervenants
durgence devrait être proportionnelle aux rôles et responsabilités de chacun
et tenir compte des tâches physiques et mentales connexes.</p>
<p>Pour
ceux qui assument des rôles physiquement exigeants (p.&nbsp;ex., lextinction
des incendies), un volet de ce programme viserait à établir les exigences minimales
concernant la forme physique et lexamen médical périodique, ainsi que des
cibles de rendement et des évaluations, au moins sur une base annuelle. Les exigences
concernant la forme physique, le bilan médical et le rendement devraient être
définies et documentées pour chaque rôle.</p>
<h3 id="secI-18">I.18 Exercices </h3>
<p>Des
exercices de lutte contre lincendie qui simulent les événements initiateurs
et les scénarios établis
pour linstallation devraient être tenus régulièrement. Les scénarios simulés devraient
inclure des complications réelles, par exemple des victimes.</p>
<p>Les
exercices périodiques devraient permettre dévaluer lefficacité de&nbsp;:</p>
<ul>
<li>lintervention des occupants en cas durgence</li>
<li>la capacité dintervention intégrée, y compris le rendement et la
coordination de lorganisation dintervention durgence</li>
<li>lutilisation du plan pré-incident et du plan daction durgence</li>
<li>lutilisation de léquipement durgence</li>
</ul>
<p>Les
exercices devraient être évalués et les résultats de cette évaluation devraient
servir à améliorer lintervention de linstallation en cas durgence, ainsi que
la planification des mesures durgence.</p>
<p>Les
dossiers sur les exercices devraient fournir des renseignements détaillés sur
les scénarios utilisés dans les exercices, et aussi sur les participants, les observations
et les mesures correctives.</p>
<h3 id="secI-19">I.19 Gestion de lair </h3>
<p>La
norme NFPA-1404, <i>Standard for Fire Service Respiratory Protection Training</i>,décrit les exigences des programmes de gestion de lair pour les corps de
pompiers industriels.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="AppJ"></div>
<h2 id="ann-j">Annexe J&nbsp;: Rapport dincendie</h2>  <p>L&rsquo;annexe&nbsp;J pr&eacute;sente un <a href="/fra/pdfs/REGDOC-2-10-2-Appendix-J-fra.pdf">mod&egrave;le</a> pour consigner les  renseignements requis afin de signaler un incendie.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="AppK"></div>
<h2 id="ann-k">Annexe K Acronymes</h2>
<dl className="cnsc-glossary">
<dt>AC</dt>
<dd>autorité compétente</dd>
<dt>IFP</dt>
<dd>incident de fonctionnement prévu</dd>
<dt>ECC</dt>
<dd>examen de conformité aux codes</dd>
<dt>CSA</dt>
<dd>Groupe CSA (anciennement Association canadienne de normalisation)</dd>
<dt>OSU</dt>
<dd>organisation des services durgence</dd>
<dt>ERI </dt>
<dd>évaluation des risques dincendie</dd>
<dt>PPI</dt>
<dd>programme de protection-incendie</dd>
<dt>AASI</dt>
<dd>analyse des arrêts sûrs en cas dincendie</dd>
<dt>CI</dt>
<dd>commandant des interventions</dd>
<dt>SGI</dt>
<dd>système de gestion des incidents</dd>
<dt>IEE</dt>
<dd>inspection, essais et entretien</dd>
<dt>CNBC</dt>
<dd><i>Code national du bâtiment du Canada</i></dd>
<dt>CNPIC</dt>
<dd><i>Code national de prévention des incendies du Canada</i></dd>
<dt>NFPA</dt>
<dd>National Fire Protection Association</dd>
<dt>LSRN</dt>
<dd><i>Loi sur la sûreté et la réglementation nucléaires</i></dd>
<dt>EPS</dt>
<dd>étude probabiliste de sûreté</dd>
<dt>SGQ</dt>
<dd>système de gestion de la qualité</dd>
<dt>SSC</dt>
<dd>structures, systèmes et composants</dd>
<dt>RET</dt>
<dd>rapport dexamen par un tiers</dd>  </dl>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="Glossary"></div>
<h2 id="glossary">Glossaire</h2>
<p>Les d&eacute;finitions des termes utilis&eacute;s dans le pr&eacute;sent document figurent  dans le <a href="/fra/acts-and-regulations/regulatory-documents/published/html/regdoc3-6/">REGDOC-3.6, <em>Glossaire de la CCSN</em></a>, qui  comprend des termes et des d&eacute;finitions tir&eacute;s de la <a href="https://laws-lois.justice.gc.ca/fra/lois/n-28.3/"><em>Loi sur la s&ucirc;ret&eacute; et la  r&eacute;glementation nucl&eacute;aires</em></a>, de ses  r&egrave;glements d&rsquo;application ainsi que des documents d&rsquo;application de la  r&eacute;glementation et d&rsquo;autres publications de la CCSN. Le REGDOC-3.6 est fourni  &agrave; titre de r&eacute;f&eacute;rence et pour information.</p>
<p>
Les termes  suivants sont soit des nouveaux termes en cours de d&eacute;finition, soit des  r&eacute;visions de la d&eacute;finition actuelle de ces termes. &Agrave; la suite de la  consultation publique, la version d&eacute;finitive des termes et des d&eacute;finitions sera  ajout&eacute;e &agrave; la prochaine version du REGDOC-3.6, <em>Glossaire de la CCSN</em>.</p>  <dl>
<dt><strong>aire de stockage </strong></dt>
<dd> Emplacement à lintérieur dun compartiment coupe-feu dans lequel se trouve du matériel qui nest pas en cours dexamen, dentretien, de démontage, de montage, de chargement, de remplissage, de rechargement, dutilisation, de transfert ou de déchargement.
</dd>
<dt><strong>aire de stockage temporaire</strong></dt>
<dd>Zone servant au stockage temporaire du matériel et de léquipement.</dd>
<dt><strong>analyse des arrêts sûrs en cas dincendie </strong></dt>
<dd> Analyse permettant de démontrer quil existe au moins un moyen datteindre les objectifs et critères de rendement en matière de sûreté nucléaire en cas dincendie. </dd>
<dt><strong>attribut fonctionnel </strong></dt>
<dd>Dans un système de protection-incendie, un attribut fonctionnel désigne les fonctions utiles et prévues qui composent les capacités des structures, systèmes et composants de protection-incendie. Ces attributs comprennent le démarrage automatique des pompes dincendie, la capacité combinée de démarrage automatique et manuelle des pompes dincendie, et les temps de disponibilité minimale des systèmes dalarme incendie lorsquils sont alimentés par une batterie interne. </dd>
<dt><strong>autorité compétente </strong></dt>
<dd>Organisation, bureau, agence ou personne responsable dapprouver ou daccepter léquipement, les matériaux, les installations ou les procédures selon les codes et normes applicables. </dd>
<dt><strong>barrière coupe-feu </strong></dt>
<dd> Construction verticale ou horizontale, conçue et construite pour limiter la propagation de la chaleur et du feu.
<p><strong>Remarque&nbsp;: </strong>Les barrières coupe-feu comprennent les séparations coupe-feu, les enveloppes de câble et les enveloppes coupe-feu, mais ne comprennent pas les boucliers thermiques rayonnants.</p>
</dd>
<dt><strong>blessure </strong></dt>
<dd>Blessure corporelle, y compris la perte de vie humaine. </dd>
<dt><strong>bouclier thermique rayonnant </strong></dt>
<dd>Barrière qui protège léquipement et le câblage de lénergie thermique rayonnante résultant dun incendie. Un bouclier thermique rayonnant peut être une séparation coupe-feu avec ou sans indice de résistance au feu. </dd>
<dt><strong>combustion </strong></dt>
<dd>Processus chimique dans lequel une oxydation est suffisante pour produire de la chaleur ou de la lumière. </dd>
<dt><strong>compartiment coupe-feu </strong></dt>
<dd>Espace clos dans un bâtiment qui est séparé de toutes les autres parties du bâtiment au moyen dune séparation coupe-feu, et qui comprend un indice de résistance au feu requis. </dd>
<dt><strong>corps de pompiers industriel </strong></dt>
<dd> Groupe organisé demployés dans un cadre industriel qui possèdent les connaissances, la formation et les compétences nécessaires pour mener des opérations de base de lutte contre lincendie.
<p><strong>Remarque&nbsp;: </strong>Les membres dun corps de pompiers industriel peuvent être employés à temps plein ou à temps partiel pour lextinction des incendies et les activités connexes.</p>
</dd>
<dt><strong>coupe-feu </strong></dt>
<dd> Construction constituée dun dispositif ou dun ou plusieurs matériaux qui scellent une ouverture dans une séparation coupe-feu afin dempêcher le passage de la flamme et de la fumée lorsquils sont soumis à un essai au feu standard.
<p><strong>Remarque&nbsp;:</strong>Les ouvertures comprennent les joints détanchéité et les joints de dilatation, les ouvertures vides et les ouvertures dans les dispositifs de terminaison tels que les boîtiers de prise électrique, et par lesquels peuvent passer des câbles, des chemins de câble, des conduits, des canalisations et des tuyaux.
</dd>
<dt><strong>déficience </strong></dt>
<dd> Incapacité ou non-disponibilité dun système, dune structure ou dun composant, qui ne peut alors fonctionner comme prévu.
<p><strong>Remarque&nbsp;:</strong> Une déficience peut être le résultat dun entretien planifié, dun événement imprévu ou dune défaillance.</p>
</dd>
<dt><strong>dispositif de fermeture</strong></dt>
<dd>Dispositif ou assemblage destiné à fermer une ouverture à travers un coupe-feu de séparation ou un mur extérieur. Les dispositifs de fermeture comprennent les portes, les volets, le verre armé et les briques de verre, ainsi que les composants tels que la quincaillerie, les cadres et les ancrages. </dd>
<dt><strong>énoncé organisationnel</strong></dt>
<dd> Énoncé ou déclaration qui contient tous les renseignements pertinents pour les corps de pompiers industriels et qui est destiné à leur donner une image claire de la manière dont le corps de pompiers est organisé et des tâches dintervention que chaque membre doit accomplir dans le cadre de ses fonctions. Lénoncé organisationnel du corps de pompiers industriel vise à démontrer lengagement de la direction en faveur de létablissement dun corps de pompiers industriel.
<p>Tout ce que fait le corps de pompiers doit être conforme aux renseignements contenus dans cet énoncé organisationnel. Cest pourquoi il convient de réviser périodiquement cet énoncé lorsque la mission, lorganisation ou les tâches dintervention de la brigade changent.
</dd>
<dt><strong>incendie de dimensionnement </strong></dt>
<dd>Incendie hypothétique utilisé à des fins de conception ou danalyse des mesures de protection-incendie. Lincendie de dimensionnement est un incendie qui aurait les conséquences les plus graves dans la zone considérée, sil ne pouvait pas être éteint par des systèmes automatiques ou manuels. </dd>
<dt><strong>indice de résistance au feu</strong></dt>
<dd>Temps, en minutes ou en heures, pendant lequel un dispositif de fermeture est censé résister au passage de la flamme et à la transmission de la chaleur lorsquil est exposé au feu. </dd>
<dt><strong>liquide combustible </strong></dt>
<dd>Liquide ayant un point déclair supérieur ou égal à 37,8 °C (100 °F) et inférieur à 93,3 °C (200 °F). </dd>
<dt><strong>liquide inflammable</strong></dt>
<dd>Liquide dont le point déclair est inférieur à 37,8 °C (100 °F) et la pression de vapeur ne dépasse pas 275,8&nbsp;kPa (absolu) (40&nbsp;lb/po<sup>2</sup> abs.) à 37,8 °C (100 °F), selon la norme ASTM D 323. </dd>
<dt><strong>marchandise dangereuse</strong></dt>
<dd> Produit ou substance réglementée par la <i>Loi sur le transport des marchandises dangereuses</i> et ses règlements. </dd>
<dt><strong>matière combustible</strong></dt>
<dd>Matière qui, sous sa forme et dans les conditions dans lesquelles elle est susceptible dêtre utilisée, senflammera, favorisera la combustion, brûlera ou dégagera des vapeurs inflammables sous leffet du feu ou de la chaleur.
<p><strong>Remarque&nbsp;: </strong>Les matières sont jugées combustibles si elles échouent lessai décrit dans la norme CAN/ULC-S114, 2005.</p>
</dd>
<dt><strong>matière en transit </strong></dt>
<dd>Matériel qui nest pas en stockage. </dd>
<dt><strong>matière non combustible</strong></dt>
<dd>Matière qui, sous la forme et dans les conditions dans laquelle elle est susceptible dêtre utilisée, ne senflammera pas, ne brûlera pas, ne favorisera pas la combustion et ne dégagera pas de vapeurs inflammables lorsquelle est soumise au feu ou à la chaleur.</dd>
<dt><strong>mesure compensatoire</strong></dt>
<dd> Mesure prise lorsquune déficience dans les caractéristiques de conception de la centrale ou létat de préparation opérationnelle réduit le niveau de protection-incendie sous les niveaux prévus.
<p><strong>Remarque&nbsp;:</strong> Les mesures compensatoires sont des moyens temporaires visant à fournir une assurance raisonnable que la fonction de protection-incendie touchée sera compensée pendant une déficience. Il sagit notamment de la surveillance des risques dincendie, de contrôles administratifs et de systèmes de protection-incendie ou de dispositifs temporaires.</p>
</dd>
<dt><strong>occupation</strong></dt>
<dd>But pour lequel un bâtiment ou une partie dun bâtiment est utilisé ou est destiné à être utilisé.</dd>
<dt><strong>personne qualifiée</strong></dt>
<dd>Personne qui possède le niveau dexpertise et dexpérience requis pour exécuter une tâche qui lui est assignée.</dd>
<dt><strong>point déclair</strong></dt>
<dd>Température minimale à laquelle un liquide dans un contenant dégage de la vapeur en concentration suffisante pour former un mélange inflammable avec lair près de la surface du liquide. </dd>
<dt><strong>poussière combustible</strong></dt>
<dd>Poussière et particules inflammables et susceptibles de produire une explosion. </dd>
<dt><strong>prévention des incendies</strong></dt>
<dd>Mesure visant à éviter lapparition dun incendie.</dd>
<dt><strong>programme de protection-incendie</strong></dt>
<dd>Ensemble dactivités planifiées et coordonnées par les diverses disciplines et organisations participantes qui visent à assurer une protection adéquate contre lincendie.</dd>
<dt><strong>protection-incendie</strong></dt>
<dd> Méthode permettant de maîtriser ou déteindre un incendie. </dd>
<dt><strong>risque dincendie</strong></dt>
<dd>Condition qui peut causer un incendie.</dd>
<dt><strong>scénario dincendie</strong></dt>
<dd>Description dun incendie hypothétique, y compris les facteurs qui linfluent et les facteurs sur lesquels il influe, de linflammation à lextinction. Le scénario dincendie fournit des renseignements sur les sources dinflammation, la nature et la configuration du combustible, les caractéristiques de ventilation, létat des structures de soutien, la condition et létat de léquipement dexploitation, et lemplacement des occupants.</dd>
<dt><strong>secteur de feu</strong></dt>
<dd>Zone physiquement séparée des autres zones par lespace, des barrières, des murs ou dautres moyens afin de contenir lincendie à lintérieur de cette zone. </dd>
<dt><strong>séparation coupe-feu</strong></dt>
<dd>Ensemble de construction qui agit comme une barrière contre la propagation de lincendie. </dd>
<dt><strong>séparation spatiale</strong></dt>
<dd>Séparation par une distance physique suffisante pour éviter les dommages causés par le feu. </dd>
<dt><strong>stockage temporaire </strong></dt>
<dd> Stockage temporaire des matériaux en vue de travaux ultérieurs.
<p><strong>Remarque&nbsp;:</strong>Les pièces de rechange et les matériaux dentretien sont normalement stockés dans laire de stockage temporaire à côté de léquipement sur le point dêtre entretenu.</p>
</dd>
<dt><strong>système darrêt sûr en cas dincendie</strong></dt>
<dd>Système, sous-système, composant et câble qui satisfait aux critères de sûreté nucléaire. Les systèmes darrêt sûr en cas dincendie peuvent comprendre des systèmes de sûreté, des systèmes liés à la sûreté et des systèmes non liés à la sûreté.</dd>
<dt><strong>tiers qualifié </strong></dt>
<dd> Une ou plusieurs personnes qualifiées qui nont pas participé ou contribué directement au travail à létude. </dd>
<dt><strong>travail à chaud</strong></dt>
<dd>Activité qui comporte des flammes nues ou qui produit de la chaleur ou des étincelles. Le travail à chaud comprend le découpage, le soudage, le brasage, le meulage, la fixation par collage, la métallisation au pistolet et le dégel des tuyaux.</dd>
<dt><strong>zone dincendie</strong></dt>
<dd>Espace désigné aux fins de lévaluation des risques dincendie comme étant touché par lincendie de dimensionnement. Chaque zone dincendie peut être séparée des autres zones dincendie par une séparation coupe-feu ayant ou nayant pas dindice de résistance au feu, ou par une séparation spatiale.</dd>
<dt><strong>zone de refuge</strong></dt>
<dd>Zone qui fournit des environnements dont les conditions sont soutenables et où les occupants de linstallation peuvent demeurer en toute sécurité, à labri dun environnement potentiellement hostile pendant et après un incendie.</dd>
</dl>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="Ref"></div>
<h2 id="ref">Références</h2>
<p>La CCSN pourrait  inclure des r&eacute;f&eacute;rences &agrave; des documents sur les pratiques exemplaires et les  normes, comme celles publi&eacute;es par le Groupe CSA. Avec la  permission du Groupe CSA, qui en est l&rsquo;&eacute;diteur, toutes les normes de la CSA  associ&eacute;es au secteur nucl&eacute;aire peuvent &ecirc;tre consult&eacute;es gratuitement &agrave; partir de  la page Web de la CCSN &laquo;&nbsp;<a href="http://nuclearsafety.gc.ca/fra/acts-and-regulations/regulatory-documents/csa-standards?pedisable=true">Comment obtenir un acc&egrave;s gratuit &agrave; l&rsquo;ensemble  des normes de la CSA associ&eacute;es au secteur nucl&eacute;aire</a>&nbsp;&raquo;.</p>  <div className="wb-fnote" role="note">
<section>
<h2 id="fnb" className="wb-inv">Notes de bas de page</h2>
<dl>
<dt>Note de bas de page 1</dt>
<dd id="fnb1">
<p>Groupe CSA. CSA N293-F07, <em><a href="http://www.nuclearsafety.gc.ca/fra/acts-and-regulations/regulatory-documents/csa-standards">Protection contre l&rsquo;incendie dans les centrales nucl&eacute;aires CANDU</a></em>, Toronto, 2007.</p>
<p className="fn-rtn"><a href="#fnb1-ref"><span className="wb-inv">Retour &agrave; la r&eacute;f&eacute;rence de la note de bas de page </span>1<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Note de bas de page 2</dt>
<dd id="fnb2">
<p>Groupe CSA. CSA N393, <em><a href="http://www.nuclearsafety.gc.ca/fra/acts-and-regulations/regulatory-documents/csa-standards">Protection contre l&rsquo;incendie dans les installations qui traitent, manipulent ou entreposent des substances nucl&eacute;aires</a></em>, Toronto, 2013.</p>
<p className="fn-rtn"><a href="#fnb2-ref"><span className="wb-inv">Retour &agrave; la r&eacute;f&eacute;rence de la note de bas de page </span>2<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Note de bas de page 3</dt>
<dd id="fnb3">
<p>Agence internationale de l&rsquo;&eacute;nergie atomique. Collection normes de s&ucirc;ret&eacute; de l&rsquo;AIEA, Guide de s&ucirc;ret&eacute; NS-G-2.1, <em><a href="http://www-pub.iaea.org/MTCD/Publications/PDF/Pub1091f_web.pdf">Protection contre l&rsquo;incendie des centrales nucl&eacute;aires en exploitation</a></em>, Vienne, 2000.</p>
<p className="fn-rtn"><a href="#fnb3-ref"><span className="wb-inv">Retour &agrave; la r&eacute;f&eacute;rence de la note de bas de page </span>3<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Note de bas de page 4</dt>
<dd id="fnb4">
<p>Conseil national de recherches Canada (CNRC). <a href="https://nrc.canada.ca/fr/certifications-evaluations-normes/codes-canada/publications-codes-canada/code-national-batiment-canada-2015">Code national du b&acirc;timent du Canada</a>, 2015.</p>
<p className="fn-rtn"><a href="#fnb4-ref"><span className="wb-inv">Retour &agrave; la r&eacute;f&eacute;rence de la note de bas de page </span>4<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Note de bas de page 5</dt>
<dd id="fnb5">
<p>CNRC. <em><a href="https://nrc.canada.ca/fr/certifications-evaluations-normes/codes-canada/publications-codes-canada/code-national-prevention-incendies-canada-2015">Code national de pr&eacute;vention des incendies du Canada</a></em>, 2015.</p>
<p className="fn-rtn"><a href="#fnb5-ref"><span className="wb-inv">Retour &agrave; la r&eacute;f&eacute;rence de la note de bas de page </span>5<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Note de bas de page 6</dt>
<dd id="fnb6">
<p>National Fire Protection Association, NFPA 600, <em>Standard on Industrial Fire Brigades</em>, Quincy, Massachusetts, 2005</p>
<p className="fn-rtn"><a href="#fnb6-ref"><span className="wb-inv">Retour &agrave; la r&eacute;f&eacute;rence de la note de bas de page </span>6<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Note de bas de page 7</dt>
<dd id="fnb7">
<p>CCSN. REGDOC-2.4.1, <em><a href="https://www.cnsc-ccsn.gc.ca/fra/acts-and-regulations/regulatory-documents/published/html/regdoc2-4-1/index">Analyse d&eacute;terministe de la s&ucirc;ret&eacute;</a></em><a href="https://www.cnsc-ccsn.gc.ca/fra/acts-and-regulations/regulatory-documents/published/html/regdoc2-4-1/index"></a>, Ottawa, 2014.</p>
<p className="fn-rtn"><a href="#fnb7-ref"><span className="wb-inv">Retour &agrave; la r&eacute;f&eacute;rence de la note de bas de page </span>7<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Note de bas de page 8</dt>
<dd id="fnb8">
<p>CCSN. REGDOC-2.4.2, <em><a href="https://www.cnsc-ccsn.gc.ca/fra/acts-and-regulations/regulatory-documents/published/html/regdoc2-4-2/index">&Eacute;tudes probabilistes de s&ucirc;ret&eacute; (EPS) pour les centrales nucl&eacute;aires</a></em>, Ottawa, 2014.</p>
<p className="fn-rtn"><a href="#fnb8-ref"><span className="wb-inv">Retour &agrave; la r&eacute;f&eacute;rence de la note de bas de page </span>8<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Note de bas de page 9</dt>
<dd id="fnb9">
<p>Groupe  CSA. CSA N290.17-F17, <a href="http://www.nuclearsafety.gc.ca/fra/acts-and-regulations/regulatory-documents/csa-standards"><em>&Eacute;tudes probabilistes de s&ucirc;ret&eacute; pour  les centrales nucl&eacute;aires</em></a>, Toronto, 2017.</p>
<p className="fn-rtn"><a href="#fnb9-ref"><span className="wb-inv">Retour &agrave; la r&eacute;f&eacute;rence de la note de bas de page </span>9<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Note de bas de page 10</dt>
<dd id="fnb10">
<p>U.S. Nuclear Regulatory Commission (U.S. NRC) and Electric Power Research Institute. NUREG/CR-6850, <em><a href="https://www.nrc.gov/docs/ML1516/ML15167A411.pdf">Fire PRA Methodology for Nuclear Power Facilities, Volume 2: Detailed Methodology</a></em>, Palo Alto (Californie) et Washington (D.C.), 2005.</p>
<p className="fn-rtn"><a href="#fnb10-ref"><span className="wb-inv">Retour &agrave; la r&eacute;f&eacute;rence de la note de bas de page </span>10<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Note de bas de page 11</dt>
<dd id="fnb11">
<p>Agence internationale de l&rsquo;&eacute;nergie atomique (AIEA). IAEA-TECDOC-1135,<em><a href="https://www-pub.iaea.org/MTCD/Publications/PDF/te_1135_prn.pdf"> Regulatory review of probabilistic safety assessment (PSA) Level 1</a></em>, Vienne, 2000.</p>
<p className="fn-rtn"><a href="#fnb11-ref"><span className="wb-inv">Retour &agrave; la r&eacute;f&eacute;rence de la note de bas de page </span>11<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Note de bas de page 12</dt>
<dd id="fnb12">
<p>AIEA. IAEA-TECDOC-1229,<a href="https://www-pub.iaea.org/MTCD/publications/PDF/te_1229_prn.pdf"><em> Regulatory review of probabilistic safety assessment (PSA) Level 2</em></a>, Vienne, 2001.</p>
<p className="fn-rtn"><a href="#fnb12-ref"><span className="wb-inv">Retour &agrave; la r&eacute;f&eacute;rence de la note de bas de page </span>12<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Note de bas de page 13</dt>
<dd id="fnb13">
<p>13.	CCSN. REGDOC-2.2.2, <em><a href="https://www.cnsc-ccsn.gc.ca/fra/acts-and-regulations/regulatory-documents/published/html/regdoc2-2-2-v2/index">La formation du personnel, version 2</a></em>, Ottawa, 2014.</p>
<p className="fn-rtn"><a href="#fnb13-ref"><span className="wb-inv">Retour &agrave; la r&eacute;f&eacute;rence de la note de bas de page </span>13<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Note de bas de page 14</dt>
<dd id="fnb14">
<p>Groupe CSA. CSA N286, <a href="http://www.nuclearsafety.gc.ca/fra/acts-and-regulations/regulatory-documents/csa-standards"><em>Exigences relatives au syst&egrave;me de gestion des installations nucl&eacute;aires</em></a>, Toronto 2012.</p>
<p className="fn-rtn"><a href="#fnb14-ref"><span className="wb-inv">Retour &agrave; la r&eacute;f&eacute;rence de la note de bas de page </span>14<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Note de bas de page 15</dt>
<dd id="fnb15">
<p>CCSN. REGDOC-3.1.1, <a href="https://www.cnsc-ccsn.gc.ca/fra/acts-and-regulations/regulatory-documents/published/html/regdoc3-1-1-v2/index"><em>Rapports &agrave; soumettre par les exploitants de centrales nucl&eacute;aires, version 2</em></a>, Ottawa, 2016.</p>
<p className="fn-rtn"><a href="#fnb15-ref"><span className="wb-inv">Retour &agrave; la r&eacute;f&eacute;rence de la note de bas de page </span>15<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Note de bas de page 16</dt>
<dd id="fnb16">
<p>CCSN. REGDOC-3.1.2, <a href="https://www.cnsc-ccsn.gc.ca/fra/acts-and-regulations/regulatory-documents/published/html/regdoc3-1-2-v1/index"><em>Exigences relatives &agrave; la production de rapports, tome 1 : Installations nucl&eacute;aires de cat&eacute;gorie I non productrices de puissance et mines et usines de concentration d&rsquo;uranium</em></a>, Ottawa, 2018.</p>
<p className="fn-rtn"><a href="#fnb16-ref"><span className="wb-inv">Retour &agrave; la r&eacute;f&eacute;rence de la note de bas de page </span>16<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Note de bas de page 17</dt>
<dd id="fnb17">
<p>CCSN, REGDOC-2.10.1, <a href="https://www.cnsc-ccsn.gc.ca/fra/acts-and-regulations/regulatory-documents/published/html/regdoc2-10-1v2/index"><em>Pr&eacute;paration et intervention relatives aux urgences nucl&eacute;aires, version 2</em></a>, Ottawa, 2014.</p>
<p className="fn-rtn"><a href="#fnb17-ref"><span className="wb-inv">Retour &agrave; la r&eacute;f&eacute;rence de la note de bas de page </span>17<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Note de bas de page 18</dt>
<dd id="fnb18">
<p>CCSN. REGDOC-2.5.2, <a href="https://www.cnsc-ccsn.gc.ca/fra/acts-and-regulations/regulatory-documents/published/html/regdoc2-5-2/index"><em>Conception d&rsquo;installations dot&eacute;es de r&eacute;acteurs : Centrales nucl&eacute;aires</em></a>, Ottawa, 2014.</p>
<p className="fn-rtn"><a href="#fnb18-ref"><span className="wb-inv">Retour &agrave; la r&eacute;f&eacute;rence de la note de bas de page </span>18<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Note de bas de page 19</dt>
<dd id="fnb19">
<p>19.	CCSN. REGDOC-2.4.3, <a href="https://www.cnsc-ccsn.gc.ca/fra/acts-and-regulations/regulatory-documents/published/html/regdoc2-4-3/index"><em>S&ucirc;ret&eacute;-criticit&eacute; nucl&eacute;aire</em></a>, Ottawa, 2019.</p>
<p className="fn-rtn"><a href="#fnb19-ref"><span className="wb-inv">Retour &agrave; la r&eacute;f&eacute;rence de la note de bas de page </span>19<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Note de bas de page 20</dt>
<dd id="fnb20">
<p>U.S. NRC and Electric Power Research Institute. NUREG-1934, <em>Nuclear Power Plant Fire Modeling Application Guide, Washington</em> (D.C.), 2012.</p>
<p className="fn-rtn"><a href="#fnb20-ref"><span className="wb-inv">Retour &agrave; la r&eacute;f&eacute;rence de la note de bas de page </span>20<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Note de bas de page 21</dt>
<dd id="fnb21">
<p>Groupe CSA. CSA W117.2, <em><a href="http://www.nuclearsafety.gc.ca/fra/acts-and-regulations/regulatory-documents/csa-standards">R&egrave;gles de s&eacute;curit&eacute; en soudage, coupage et proc&eacute;d&eacute;s connexes</a></em>, Toronto, 2012.</p>
<p className="fn-rtn"><a href="#fnb21-ref"><span className="wb-inv">Retour &agrave; la r&eacute;f&eacute;rence de la note de bas de page </span>21<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Note de bas de page 22</dt>
<dd id="fnb22">
<p>Laboratoires des assureurs du Canada. CAN/ULC S-524,<em> Norme sur l&rsquo;installation des r&eacute;seaux avertisseurs d&rsquo;incendie</em>, Toronto, 2006.</p>
<p className="fn-rtn"><a href="#fnb22-ref"><span className="wb-inv">Retour &agrave; la r&eacute;f&eacute;rence de la note de bas de page </span>22<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Note de bas de page 23</dt>
<dd id="fnb23">
<p>23.	National Fire Protection Association (NFPA). NFPA-1620, <em>Recommended Practice for Pre&shy;Incident Planning</em>, Quincy (Massachusetts), 2003. </p>
<p className="fn-rtn"><a href="#fnb23-ref"><span className="wb-inv">Retour &agrave; la r&eacute;f&eacute;rence de la note de bas de page </span>23<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Note de bas de page 24</dt>
<dd id="fnb24">
<p>24.	NFPA. NFPA-1561, <em>Standard on Emergency Services Incident Management System and Command Safety</em>, Quincy (Massachusetts).</p>
<p className="fn-rtn"><a href="#fnb24-ref"><span className="wb-inv">Retour &agrave; la r&eacute;f&eacute;rence de la note de bas de page </span>24<span className="wb-inv"> referrer</span></a></p>
</dd>
</dl>
</section>
</div>
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
<h2 id="sup">Renseignements supplémentaires</h2>
<p>La CCSN pourrait recommander d&rsquo;autres documents sur les pratiques  exemplaires et les normes, comme ceux publi&eacute;s par le Groupe CSA. Avec la permission du Groupe CSA, qui en est l&rsquo;&eacute;diteur,  toutes les normes de la CSA associ&eacute;es au secteur nucl&eacute;aire peuvent &ecirc;tre  consult&eacute;es gratuitement &agrave; partir de la page Web de la CCSN &laquo;&nbsp;<a href="http://nuclearsafety.gc.ca/fra/acts-and-regulations/regulatory-documents/csa-standards?pedisable=true">Comment  obtenir un acc&egrave;s gratuit &agrave; l&rsquo;ensemble des normes de la CSA associ&eacute;es au secteur  nucl&eacute;aire</a>&nbsp;&raquo;.<br/>  Les documents  suivants fournissent des renseignements suppl&eacute;mentaires qui pourraient &ecirc;tre  pertinents et faciliter la compr&eacute;hension des exigences et de l&rsquo;orientation  fournies dans le pr&eacute;sent document d&rsquo;application de la r&eacute;glementation&nbsp;:</p>
<ul>
<li>American Institute of  Aeronautics and Astronautics, AIAA G-095A - Guide to Safety of Hydrogen and  Hydrogen Systems, 2017 </li>
<li>Andersson, P., Evaluation and Mitigation of Industrial Fire Hazards, Report LUTVDG/TVBB-1015, Universit&eacute;  de Lund, Lund, Su&egrave;de, 2000.</li>
<li>Australian Building Codes Board, Conseil national de recherches du Canada et. coll., <em><a href="https://www.abcb.gov.au/Resources/Publications/Education-Training/International-Fire-Engineering-Guidelines">International  Fire Engineering Guidelines</a></em><em>,</em> Canberra, 2005.</li>
<li>CCSN.  G-276, Plan de programme d&rsquo;ing&eacute;nierie des facteurs humains,  Ottawa, 2003.</li>
<li>CCSN.  G-278, Plan de v&eacute;rification et de validation des facteurs humains,  Ottawa, 2003.</li>
<li>CCSN. S-210, Programmes  d&rsquo;entretien des centrales nucl&eacute;aires, Ottawa, 2007.</li>
<li>CCSN.  P-119, Politique sur les facteurs humains, Ottawa, 2000.</li>
<li>CCSN. REGDOC-2.2.5, Effectif  minimal, Ottawa, 2019.</li>
<li>Groupe CSA. CAN/CSA-Q850-F97, Gestion  du risque : Lignes directrices &agrave; l&rsquo;intention des d&eacute;cideurs,  Toronto, 1997.</li>
<li>S&eacute;curit&eacute;  publique Canada. &laquo;&nbsp;Lesson 6 Radiological  Material, Course Notes, First Responder Training Program Intermediate Level&raquo;, <em>Chemical, Biological, Radiological and  Nuclear Strategy</em>, Ottawa, 2005. Electric Power  Research Institute. NP-6434, <em>Interim  Guidelines for Protecting Fire-Fighting Personnel From Multiple Hazards at  Nuclear Plant Sites</em>, Palo Alto, Californie, 1989. </li>
<li>Keski-Rakhonen, O. <em>Demand for Extinguishing Media in Manual  Fire Fighting</em>, Lund, Su&egrave;de, 2000.</li>
<li>National  Fire Protection Association (NFPA). NFPA 80A, <em>Recommended Practice for Protection of Buildings from Exterior Fire  Exposures</em>, Quincy (Massachusetts), 2007. </li>
<li>NFPA. NFPA 20, Norme  pour l&rsquo;installation de pompes fixes contre l&rsquo;incendie,  Saint-Marcel (France), 2019.</li>
<li>NFPA.  NFPA 55, Standard for the Storage, Use, and Handling of Compressed Gases and  Cryogenic Fluids in Portable and Stationary Containers, Cylinders, and Tanks,  Quincy (Massachusetts), 2005. </li>
<li>NFPA. NFPA 1143, Standard  for Wildland Fire Management, Quincy (Massachusetts), 2018. </li>
<li>NFPA. NFPA 1500, Standard  on Fire Department Occupational Safety and Health Program, Quincy  (Massachusetts), 2018. </li>
<li>&nbsp;</li>
<li>Bureau du commissaire des  incendies de l&rsquo;Ontario. &laquo;&nbsp;<a href="http://www.mcscs.jus.gov.on.ca/english/FireMarshal/FireServiceResources/ComprehensiveFireSafetyEffectivenessModel/FireGroundEffectivenessSub-Model/fireground_submodel.html">Fire Ground Effectiveness Sub-Model</a>&nbsp;&raquo; (page Web), Toronto. </li>
<li>Office  of Radiation Programs. United States Environmental  Protection Agency, Manual of Protective Action Guides and  Protective Actions for Nuclear Incidents, Washington (D.C.),  1992. </li>
<li>Office  of Radiation Programs. United States Environmental  Protection Agency, Manual of Protective Action Guides and  Protective Actions for Nuclear Incidents, Washington (D.C.),  1992. </li>
<li>Research  Institute for Science and Technology. Universit&eacute; des sciences de Tokyo, &laquo;&nbsp;Fire Tests in a Large Hall, Using Manually Applied High- and  Low-Pressure Water Sprays&nbsp;&raquo;<em>,</em> <em>Fire Science and  Technology,</em> Vol. 21, No&nbsp;1, p. 1&#8210;17, Toyko, 2001. </li>
<li>Society  of Fire Protection Engineers and National Fire Protection Association. SFPE-00,  Guide  to Performance-Based Fire Protection, Analysis and Design of Buildings,  Quincy (Massachusetts), 2000. </li>
<li>Svensson, S. Universit&eacute; de Lund,  rapport 1025, <em><a href="http://www.cfbt-be.com/images/teksten/collegas/Operational-Problem-of-Fire-Control.pdf">The  Operational Problem of Fire Control</a></em>, Lund, Su&egrave;de,  2002.</li>
<li>United States  Nuclear Regulatory Commission (U.S. NRC). NRC Generic Letter 1978&#8209;023, <a href="https://www.nrc.gov/docs/ML1129/ML112990531.pdf"><em>Manpower Requirements for Operating Reactors</em></a><em>,</em> Washington (D.C.), 1978. </li>
<li>Williams, J., et H.  Stambaugh. United States Fire Administration,  USFA-TR-123, <em><a href="https://www.usfa.fema.gov/downloads/pdf/publications/tr-123.pdf">Rapid  Intervention Teams and How to Avoid Needing Them</a>,</em> Washington (D.C.), 2003.</li>
</ul>
<p><strong>Approches en s&eacute;curit&eacute;-incendie fond&eacute;es sur le  rendement&nbsp;:</strong></p>
<ul>
<li>Barry, T. <em><a href="http://www.fireriskforum.com/">Risk-Informed,  Performance-Based Industrial Fire Protection: An Alternative to Prescriptive  Codes</a></em>, 2002. </li>
<li>Organisation internationale de normalisation. ISO/TR 13387, <em>Ing&eacute;nierie de la s&eacute;curit&eacute; contre l&rsquo;incendie &ndash; Partie 1 : Application  des concepts de performance aux objectifs de conception</em>, Gen&egrave;ve, 1999.</li>
<li>National Fire Protection Association. NFPA 551, <em>Guide for the  Evaluation of Fire Risk Assessments</em>, Quincy (Massachusetts), 2019. </li>
<li>NFPA.  NFPA 101, <em>Life Safety Code</em><em>,</em> Quincy (Massachusetts), 2019. </li>
<li>NFPA. NFPA 101A, <em>Guide on Alternative Approaches to Life Safety</em>, Quincy  (Massachusetts), 2019. </li>
<li>NFPA. NFPA 101B, <em>Code for Means of Egress for  Buildings and Structures</em>, Quincy (Massachusetts), 2002. </li>
<li>NFPA. NFPA 550, <em>Guide to the Fire Safety Concepts Tree</em>, Quincy  (Massachusetts), 2017. </li>
<li>NFPA. NFPA 921, <em>Guide  pour les investigations incendie et explosion</em>, Saint-Marcel (France), 2017.</li>
<li>NFPA.  FPH 1903, <em>Fire Protection Handbook</em>, 19th ed., Quincy (Massachusetts),  2003. </li>
<li>NFPA et Society of Fire Protection Engineers (SFPE). <em>Introduction to Performance-Based Fire Safety</em>, Quincy (Massachusetts), 1997. </li>
<li>Rasbash,  D., et coll. <em>Evaluation of Fire Safety</em><em>,</em> Chichester, England, 2004. </li>
<li>SFPE. <em>Guidelines for Peer Review in the Fire  Protection Design Process</em>, Bethesda, Maryland, 2002. </li>
<li>SFPE et NFPA. NFPA no HFPE-01, <em><a href="http://ogneborec.su/files/uploads/files/0460561_8A68C_sfpe_handbook_of_fire_protection_engineering.pdf">SFPE Handbook of Fire  Protection Engineering</a></em>, 3e &eacute;d., Quincy (Massachusetts),  2002. </li>
<li>SFPE. <em>Reference Manual for the P.E. Exam in Fire  Protection Engineering</em>, 2e &eacute;d., Quincy (Massachusetts), 2001. </li>
<li>SFPE  et NFPA. <em>Enforcer&rsquo;s Guide to Performance-Based Design Review</em>, Quincy  (Massachusetts), 2003. </li>
<li>SFPE  et NFPA. <em>SFPE</em> <em>Engineering Guide to  Performance-based Fire Protection</em>, 2e &eacute;d., Quincy (Massachusetts),  2007. </li>
</ul>  	<p><strong>Agence internationale de l&rsquo;&eacute;nergie atomique</strong></p>  	<ul>
<li>Agence internationale de l&rsquo;&eacute;nergie atomique (AIEA). Fire Protection and Fire Fighting in Nuclear Installations: Proceedings  of a Symposium,  Vienne, 1989. </li>
<li>AIEA. Collection Normes de s&ucirc;ret&eacute; de l&rsquo;AIEA no  50-SG-D2 (R&eacute;v. 1), Protection contre l&rsquo;incendie dans les centrales  nucl&eacute;aires, Vienne, 1992.</li>
<li>AIEA. Collection Normes de s&ucirc;ret&eacute; de  l&rsquo;AIEA no 50-P-6, Inspection of Fire Protection Measures and Fire  Fighting Capability at Nuclear Power Plants, Vienne, 1994. </li>
<li>AIEA. Collection Normes de s&ucirc;ret&eacute; de  l&rsquo;AIEA no NS-G-1.7, <a href="https://www-pub.iaea.org/MTCD/Publications/PDF/Pub1186_web.pdf">Protection  Against Internal Fires and Explosions in the Design of Nuclear Power Plants</a><em>,</em> Vienne, 2004.</li>
<li>AIEA. Collection Normes de s&ucirc;ret&eacute; de l&rsquo;AIEA, Guide de s&ucirc;ret&eacute; no NS-G-2.10, <em><a href="https://www-pub.iaea.org/MTCD/Publications/PDF/p1157_web.pdf">Periodic  Safety Review of Nuclear Power Plants</a>,</em> Vienne, 2003.</li>
<li>AIEA. AIEA-TECDOC-1112, ISSN 1011-4289, <a href="https://www-pub.iaea.org/MTCD/Publications/PDF/te_1112_prn.pdf">Root  Cause Analysis for Fire Events at Nuclear Power Plants</a>, Vienne, 1999.</li>
<li>AIEA. Collection Normes de s&ucirc;ret&eacute; de l&rsquo;AIEA,  Prescriptions no NS-R-1, <a href="https://www-pub.iaea.org/MTCD/Publications/PDF/Pub1099f_web.pdf">S&ucirc;ret&eacute; des centrales nucl&eacute;aires :  conception</a><em>,</em> Vienne, 2000.</li>
<li>AIEA. Collection Normes de s&ucirc;ret&eacute; de l&rsquo;AIEA,  Prescriptions no NS-R-2, <a href="https://www-pub.iaea.org/MTCD/Publications/PDF/Pub1096f_web.pdf"><em>S&ucirc;ret&eacute; des centrales nucl&eacute;aires :  exploitation</em></a>, Vienne, 2000.</li>
<li>AIEA. Collection Normes de s&ucirc;ret&eacute; de l&rsquo;AIEA,  Prescriptions no NS-R-3, <a href="https://www-pub.iaea.org/MTCD/Publications/PDF/Pub1177f_web.pdf">&Eacute;valuation des sites d&rsquo;installations nucl&eacute;aires</a><em>,</em> Vienne, 2003.</li>
<li>AIEA. Collection Normes de s&ucirc;ret&eacute; de l&rsquo;AIEA no  SF-1, Principes de s&ucirc;ret&eacute; de l&rsquo;AIEA, Vienne, 2007.</li>
<li>AIEA. Collection  Rapports de s&ucirc;ret&eacute; de l&rsquo;AIEA no 10, <a href="https://www-pub.iaea.org/MTCD/Publications/PDF/P062_scr.pdf"><em>Treatment  of Internal Fires in Probabilistic Safety Assessment for Nuclear Power Plants</em></a>, Vienne, 1998.</li>
<li> AIEA.  TECDOC-1134, <a href="https://www-pub.iaea.org/MTCD/Publications/PDF/te_1134_prn.pdf">Use of Operational Experience in  Fire Safety Assessment of Nuclear Power Plants</a><em>, </em>Vienne, 2000.</li>  	</ul>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<h2>S&eacute;ries de documents d&#39;application de la r&eacute;glementation de la CCSN</h2>  <p>Les installations et activit&eacute;s du secteur nucl&eacute;aire du Canada sont r&eacute;glement&eacute;es par la Commission canadienne de s&ucirc;ret&eacute; nucl&eacute;aire (CCSN). En plus de la <em>Loi sur la s&ucirc;ret&eacute; et la r&eacute;glementation nucl&eacute;aires </em>et de ses r&egrave;glements d&#39;application, il pourrait y avoir des exigences en mati&egrave;re de conformit&eacute; &agrave; d&#39;autres outils de r&eacute;glementation, comme les documents d&#39;application de la r&eacute;glementation ou les normes.</p>  <p>Les changements apport&eacute;s au catalogue des documents d&#39;application de la r&eacute;glementation sont entr&eacute;s en vigueur en avril 2013. Les documents actuels et pr&eacute;vus ont &eacute;t&eacute; class&eacute;s en trois grandes cat&eacute;gories et vingt&shy;cinq s&eacute;ries, selon la structure ci-dessous. Les documents d&#39;application de la r&eacute;glementation pr&eacute;par&eacute;s par la CCSN font partie de l&#39;une des s&eacute;ries suivantes&nbsp;:</p>  <ul>
<li><strong>1.0 Installations et activit&eacute;s r&eacute;glement&eacute;es<br />
</strong>S&eacute;ries</li>
<li>1.1 Installations dot&eacute;es de r&eacute;acteurs</li>
<li>1.2 Installations  de cat&eacute;gorie IB</li>
<li>1.3 Mines  et usines de concentration d&rsquo;uranium</li>
<li>1.4 Installations  de cat&eacute;gorie II</li>
<li>1.5 Homologation  d&rsquo;&eacute;quipement r&eacute;glement&eacute;</li>
<li>1.6 Substances nucl&eacute;aires et appareils &agrave;  rayonnement</li>
<li><strong>2.0 Domaines de s&ucirc;ret&eacute; et de r&eacute;glementation</strong></li>
<li>S&eacute;ries</li>
<li>2.1 Syst&egrave;me de gestion</li>
<li>2.2 Gestion  du rendement humain</li>
<li>2.3 Conduite  de l&rsquo;exploitation</li>
<li>2.4 Analyse  de la s&ucirc;ret&eacute;</li>
<li>2.5 Conception  mat&eacute;rielle</li>
<li>2.6 Aptitude  fonctionnelle</li>
<li>2.7 Radioprotection</li>
<li>2.8 Sant&eacute;  et s&eacute;curit&eacute; classiques</li>
<li>2.9 Protection  de l&rsquo;environnement</li>
<li>2.10 Gestion  des urgences et protection-incendie</li>
<li>2.11 Gestion  des d&eacute;chets</li>
<li>2.12 S&eacute;curit&eacute;</li>
<li>2.13 Garanties  et non-prolif&eacute;ration</li>
<li>2.14 Emballage et transport</li>
<li><strong>3.0 Autres domaines de r&eacute;glementation</strong></li>
<li>S&eacute;ries</li>
<li>3.1 Exigences relatives &agrave; la production de  rapports</li>
<li>3.2 Mobilisation  du public et des Autochtones</li>
<li>3.3 Garanties  financi&egrave;res</li>
<li>3.4 S&eacute;ances de la Commission</li>
<li>3.5 Diffusion de l&rsquo;information</li>  </ul>  <p><strong>Remarque&nbsp;:</strong> Les s&eacute;ries de documents d&#39;application de la r&eacute;glementation pourraient &ecirc;tre modifi&eacute;es p&eacute;riodiquement par la CCSN. Chaque s&eacute;rie susmentionn&eacute;e pourrait comprendre de nombreux documents d&#39;application de la r&eacute;glementation. Pour obtenir la plus r&eacute;cente liste de documents d&#39;application de la r&eacute;glementation, veuillez consulter le site Web de la CCSN &agrave; <a href="/fra/acts-and-regulations/regulatory-documents/index">suretenucleaire.gc.ca/documents-de-reglementation</a>.</p>

                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }