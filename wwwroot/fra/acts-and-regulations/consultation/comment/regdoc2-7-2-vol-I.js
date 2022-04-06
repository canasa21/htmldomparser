import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "fr",
                pageTitle: "REGDOC-2.7.2, Dosimétrie, tome I : Détermination de la dose professionnelle", 
                dateModified: "2019-03-21",
                langToggleUrl: "/eng/acts-and-regulations/consultation/comment/regdoc2-7-2-vol-I"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<h2>Pr&eacute;face</h2>  <p>Le pr&eacute;sent document d&rsquo;application de la r&eacute;glementation fait partie de la s&eacute;rie de documents de la CCSN traitant de la radioprotection. La liste compl&egrave;te des s&eacute;ries figure &agrave; la fin de ce document et elle peut &ecirc;tre consult&eacute;e sur le <a href="/fra/acts-and-regulations/regulatory-documents/index">site Web de la CCSN</a>.</p>  <p>Le document d&rsquo;application de la r&eacute;glementation REGDOC-2.7.2, tome I, &eacute;nonce les exigences et l&rsquo;orientation pour d&eacute;terminer la dose professionnelle. Il fournit &eacute;galement des exigences et de l&rsquo;orientation relativement &agrave; la modification des renseignements sur les doses d&eacute;pos&eacute;s dans le FDN.</p>  <p>Pour de plus amples renseignements sur la mise en &oelig;uvre des documents d&rsquo;application de la r&eacute;glementation qui font partie dans le fondement d&rsquo;autorisation et sur l&rsquo;approche graduelle, voir le REGDOC-3.5.3, <em>Principes fondamentaux de r&eacute;glementation</em>.</p>
<div className="alert alert-info module-simplify ">
<p>Le terme &laquo; doit &raquo; est employ&eacute; pour exprimer une exigence &agrave; laquelle le titulaire ou le demandeur de permis doit se conformer; le terme &laquo; devrait &raquo; d&eacute;note une orientation ou une mesure conseill&eacute;e; le terme &laquo; pourrait &raquo; exprime une option ou une mesure conseill&eacute;e ou acceptable dans les limites de ce document d&rsquo;application de la r&eacute;glementation; et le terme &laquo; peut &raquo; exprime une possibilit&eacute; ou une capacit&eacute;.</p>
<p>Aucune information contenue dans le pr&eacute;sent document ne doit &ecirc;tre interpr&eacute;t&eacute; comme lib&eacute;rant le titulaire de permis de toute autre exigence pertinente. Le titulaire de permis a la responsabilit&eacute; de prendre connaissance de tous les r&egrave;glements et de toutes les conditions de permis applicables et d&rsquo;y adh&eacute;rer.</p>  </div>  <br />
<div className="module-table-contents">  <h2>Table des mati&egrave;res</h2>
<ul>
<li><a href="#sec1">1. Introduction</a>
<ul>
<li><a href="#sec1-1">1.1 Objet</a></li>
<li><a href="#sec1-2">1.2 Port&eacute;e</a></li>
<li><a href="#sec1-3">1.3 L&eacute;gislation pertinente</a></li>
</ul></li>
<li><a href="#sec2">2. Renseignements g&eacute;n&eacute;raux</a>
<ul>
<li><a href="#sec2-1">2.1 Limites de dose efficace</a></li>
<li><a href="#sec2-2">2.2 M&eacute;thodes de dosim&eacute;trie</a></li>
<li><a href="#sec2-3">2.3 Services de dosim&eacute;trie</a></li>
<li><a href="#sec2-4">2.4 Dossiers des doses</a></li>
</ul></li>
<li><a href="#partA">Partie A : Exposition externe</a></li>
<li><a href="#sec3">3. Grandeurs op&eacute;rationnelles</a>
<ul>
<li><a href="#sec3-1">3.1 &Eacute;quivalent de dose ambiant, H*(d)</a></li>
<li><a href="#sec3-2">3.2 &Eacute;quivalent de dose directionnel, H&rsquo;(d, &Omega;)</a></li>
<li><a href="#sec3-3">3.3 &Eacute;quivalent de dose individuel, H<sub>p</sub>(d)</a></li>
</ul></li>
<li><a href="#sec4">4. Caract&eacute;risation des conditions de rayonnement</a>
<ul>
<li><a href="#sec4-1">4.1 Rayonnement photonique, b&ecirc;ta et &eacute;lectronique</a></li>
<li><a href="#sec4-2">4.2 Rayonnement neutronique</a></li>
</ul></li>
<li><a href="#sec5">5. Contr&ocirc;le direct</a>
<ul>
<li><a href="#sec5-1">5.1 Technologies des dosim&egrave;tres</a></li>
<li><a href="#sec5-2">5.2 Dosim&eacute;trie du corps entier</a></li>
<li><a href="#sec5-3">5.3 Dosim&eacute;trie multiple du corps entier</a></li>
<li><a href="#sec5-4">5.4 Dosim&eacute;trie des extr&eacute;mit&eacute;s</a></li>
<li><a href="#sec5-5">5.5 Dosim&eacute;trie du cristallin</a></li>
<li><a href="#sec5-6">5.6 Dosim&eacute;trie neutronique</a></li>
</ul></li>
<li><a href="#sec6">6. D&eacute;termination de la dose externe par estimation</a>
<ul>
<li><a href="#sec6-1">6.1 Contr&ocirc;le indirect</a></li>
<li><a href="#sec6-2">6.2 Mod&eacute;lisation des doses</a></li>
<li><a href="#sec6-3">6.3 Contamination de la peau</a></li>
</ul></li>
<li><a href="#partB">Partie B : Exposition interne</a></li>
<li><a href="#sec7">7. Grandeurs</a></li>
<li><a href="#sec8">8. Caract&eacute;risation des sources potentielles d&rsquo;incorporation au travail</a></li>
<li><a href="#sec9">9. M&eacute;thodes de contr&ocirc;le de l&rsquo;incorporation</a>
<ul>
<li><a href="#sec9-1">9.1 Contr&ocirc;le individuel</a></li>
<li><a href="#sec9-2">9.2 Contr&ocirc;le de l&rsquo;air pour d&eacute;terminer la dose aux travailleurs</a></li>
</ul></li>
<li><a href="#sec10">10. Interpr&eacute;tation des r&eacute;sultats du contr&ocirc;le</a>
<ul>
<li><a href="#sec10-1">10.1 Seuils administratifs</a></li>
<li><a href="#sec10-2">10.2 Exactitude des r&eacute;sultats des essais biologiques</a></li>
</ul></li>
<li><a href="#sec11">11. D&eacute;termination de la dose efficace engag&eacute;e</a></li>
<li><a href="#sec12">12. &Eacute;talonnage</a></li>
<li><a href="#sec13">13. Limiter l&rsquo;incorporation de substances nucl&eacute;aires par les travailleuses qui allaitent</a></li>
<li><a href="#sec14">14. D&eacute;termination de la dose r&eacute;sultant de l&rsquo;incorporation de substances nucl&eacute;aires par une plaie</a></li>
<li><a href="#partC">Partie C : Modifications des renseignements sur les doses d&eacute;pos&eacute;s dans le Fichier dosim&eacute;trique national</a></li>
<li><a href="#sec15">15. Proc&eacute;dure g&eacute;n&eacute;rale</a></li>
<li><a href="#sec16">16. Proc&eacute;dure de demande de modification de renseignements sur les doses individuelles</a></li>
<li><a href="#sec17">17. Proc&eacute;dure de demande de modification des renseignements sur les doses d&rsquo;un groupe</a></li>
<li><a href="#sec18">18. Coordonn&eacute;es de la personne-ressource</a></li>
<li><a href="#appA">Annexe A : Orientation concernant le choix de la dosim&eacute;trie pour le cristallin</a></li>
<li><a href="#appB">Annexe B : &Eacute;valuation de l&rsquo;activit&eacute; manipul&eacute;e pour le choix des participants &agrave; un programme de contr&ocirc;le r&eacute;gulier de l&rsquo;incorporation</a>
<ul>
<li><a href="#appB-1">B.1 Fondement technique</a></li>
<li><a href="#appB-2">B.2 Exemple : D&eacute;termination de la participation &agrave; un programme d&rsquo;essais biologiques</a></li>
</ul></li>
<li><a href="#appC">Annexe C : Protocoles d&rsquo;intervention pour les essais biologiques en cas d&rsquo;incorporation anormale de radionucl&eacute;ides</a>
<ul>
<li><a href="#appC-1">C.1 Introduction</a></li>
<li><a href="#appC-2">C.2 M&eacute;thodes d&rsquo;essais biologiques</a></li>
<li><a href="#appC-3">C.3 Essais biologiques &laquo; courants &raquo; et &laquo; sp&eacute;ciaux &raquo;</a></li>
<li><a href="#appC-4">C.4 Choix et utilisation des m&eacute;thodes d&rsquo;essais biologiques</a></li>
<li><a href="#appC-5">C.5 Protocoles d&rsquo;intervention</a></li>
<li><a href="#appC-6">C.6 Protocole d&rsquo;intervention d&eacute;clench&eacute; par des essais biologiques r&eacute;guliers</a></li>
<li><a href="#appC-7">C.7 Protocole d&rsquo;intervention d&eacute;clench&eacute; par un incident anormal</a></li>
<li><a href="#appC-8">C.8 Pr&eacute;l&egrave;vement et manipulation d&rsquo;&eacute;chantillons d&rsquo;essais biologiques</a></li>
</ul></li>
<li><a href="#appD">Annexe D : Recommandations propres aux radionucl&eacute;ides concernant les essais biologiques et la dosim&eacute;trie interne &ndash; Tritium</a>
<ul>
<li><a href="#appD-1">D.1 M&eacute;thodes d&rsquo;analyse du tritium dans l&rsquo;urine</a></li>
<li><a href="#appD-2">D.2 Fr&eacute;quence de contr&ocirc;le</a></li>
<li><a href="#appD-3">D.3 D&eacute;termination de la dose</a></li>
<li><a href="#appD-4">D.4 Contr&ocirc;le de la qualit&eacute; du comptage par scintillation liquide</a></li>
</ul></li>
<li><a href="#appE">Annexe E : Recommandations propres aux radionucl&eacute;ides concernant les essais biologiques et la dosim&eacute;trie interne &ndash; Iode radioactif</a>
<ul>
<li><a href="#appE-1">E.1 Contexte</a></li>
<li><a href="#appE-2">E.2 Participation au programme de d&eacute;pistage</a></li>
<li><a href="#appE-3">E.3 Choix des instruments</a></li>
<li><a href="#appE-4">E.4 M&eacute;thode de d&eacute;pistage</a></li>
<li><a href="#appE-5">E.5 P&eacute;riode de contr&ocirc;le</a></li>
<li><a href="#appE-6">E.6 Validation des r&eacute;sultats du d&eacute;pistage</a></li>
<li><a href="#appE-7">E.7 Compos&eacute;s d&rsquo;iode radioactif</a></li>
<li><a href="#appE-8">E.8 &Eacute;talonnage des instruments</a></li>
<li><a href="#appE-9">E.9 Exemple de registre de d&eacute;pistage thyro&iuml;dien pour le <sup>131</sup>I</a></li>
<li><a href="#appE-10">E.10 Graphiques de contr&ocirc;le de la qualit&eacute;</a></li>
</ul></li>
<li><a href="#appF">Annexe F : Recommandations propres aux radionucl&eacute;ides concernant les mesures par essais biologiques et la dosim&eacute;trie interne &ndash; Uranium</a>
<ul>
<li><a href="#appF-1">F.1 Limites annuelles d&rsquo;incorporation des compos&eacute;s d&rsquo;uranium</a></li>
<li><a href="#appF-2">F.2 Toxicit&eacute; chimique des compos&eacute;s de l&rsquo;uranium</a></li>
<li><a href="#appF-3">F.3 D&eacute;termination de la dose due &agrave; l&rsquo;incorporation de compos&eacute;s d&rsquo;uranium</a></li>
</ul></li>
<li><a href="#glossary">Glossaire</a></li>
<li><a href="#ref">R&eacute;f&eacute;rences</a></li>
<li><a href="#addInfo">Renseignements suppl&eacute;mentaires</a></li>
</ul>  </div>  <div className="clear"></div>  <br />
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="1"></div>
<div className="alert alert-info module-simplify ">  <p>Le REGDOC-2.7.2, tome I s&rsquo;aligne sur les modifications propos&eacute;es au <a href="http://laws.justice.gc.ca/fra/reglements/DORS-2000-203/page-1.html"><em>R&egrave;glement sur la radioprotection</em> (le R&egrave;glement)</a>, qui sont d&eacute;crites dans le <a href="">Rapport sur ce que nous avons entendu qui traite du document de travail DIS-13-01 : <em>Modifications propos&eacute;es au R&egrave;glement sur la radioprotection</em></a>.</p>  <p>La consultation publique sur les modifications propos&eacute;es sera annonc&eacute;e dans la Partie I de la Gazette du Canada. La CCSN informera les parties int&eacute;ress&eacute;es de l&rsquo;occasion de formuler des commentaires &agrave; l&rsquo;aide de son site Web et par courriel. Ce document d&rsquo;application de la r&eacute;glementation pourrait &ecirc;tre r&eacute;vis&eacute; en fonction des modifications propos&eacute;es au R&egrave;glement sur la radioprotection et des commentaires d&eacute;coulant de la consultation sur le pr&eacute;sent document.</p>  </div>
<h2 id="sec1">1. Introduction</h2>  <p>Le projet de document d&rsquo;application de la r&eacute;glementation, REGDOC-2.7.2, <em>Dosim&eacute;trie, tome I : D&eacute;termination de la dose professionnelle</em>, met &agrave; jour et remplace les documents d&rsquo;application de la r&eacute;glementation suivants, publi&eacute;s ant&eacute;rieurement, sur des sujets li&eacute;s &agrave; la dosim&eacute;trie :</p>
<ul>
<li>G-91, <em>Contr&ocirc;le et enregistrement des doses de rayonnement aux personnes</em> (2003)</li>
<li>G-147, <em>Protocoles d&rsquo;intervention pour les essais biologiques en cas d&rsquo;incorporation anormale de radionucl&eacute;ides</em> (2003)</li>
<li>RD-58, <em>D&eacute;pistage de l&rsquo;iode radioactif d&eacute;pos&eacute; dans la thyro&iuml;de</em> (2008)</li>
<li>GD-150, <em>Conception et mise en &oelig;uvre d&rsquo;un programme d&rsquo;essais biologiques</em> (2010)</li>
<li>S-260, <em>Modification des renseignements sur les doses d&eacute;pos&eacute;s dans le Fichier dosim&eacute;trique national</em> (2004)</li>
</ul>  <p>Le REGDOC-2.7.2, tome I, fournit de nouvelles orientations sur les sujets suivants :</p>
<ul>
<li>la d&eacute;termination et l&rsquo;enregistrement de la dose &eacute;quivalente au cristallin</li>
<li>l&rsquo;utilisation de services de dosim&eacute;trie autoris&eacute;s pour les doses annuelles aux extr&eacute;mit&eacute;s sup&eacute;rieures &agrave; 50 mSv</li>
</ul>  <p>Le REGDOC-2.7.2, tome I, est divis&eacute; en trois parties :</p>
<ul>
<li>La partie A pr&eacute;sente des renseignements sur la d&eacute;termination de la dose professionnelle due &agrave; des sources externes de rayonnement.</li>
<li>La partie B pr&eacute;sente des renseignements sur la d&eacute;termination de la dose professionnelle due &agrave; des sources internes de rayonnement.</li>
<li>La partie C d&eacute;crit le processus de modification des renseignements sur les doses d&eacute;pos&eacute;s dans le Fichier dosim&eacute;trique national (FDN).</li>  </ul>
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
<h3 id="sec1-1">1.1 Objet</h3>  <p>Le REGDOC-2.7.2, tome I, &eacute;nonce les exigences et l&rsquo;orientation concernant la d&eacute;termination de la dose professionnelle. Il fournit &eacute;galement des exigences et de l&rsquo;orientation relativement &agrave; la modification des renseignements sur les doses d&eacute;pos&eacute;s dans le FDN.</p>
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
<h3 id="sec1-2">1.2 Port&eacute;e</h3>  <p>Le pr&eacute;sent document &eacute;nonce les exigences et l&rsquo;orientation relatives aux attentes de la Commission canadienne de s&ucirc;ret&eacute; nucl&eacute;aire (CCSN) en mati&egrave;re de dosim&eacute;trie afin d&rsquo;assurer la protection des travailleurs. Le pr&eacute;sent document ne porte pas sur les points suivants :</p>
<ul>
<li>les exigences et l&rsquo;orientation en mati&egrave;re de radioprotection qui figurent dans la version provisoire du REGDOC 2.7.1 : <em>Radioprotection</em> [1]<sup id="fnb1-ref"><a className="fn-lnk" href="#fnb1"><span className="wb-inv">Footnote </span>1</a></sup></li>
<li>les exigences et l&rsquo;orientation en mati&egrave;re de services de dosim&eacute;trie qui figurent dans la version provisoire du REGDOC-2.7.2, <em>Dosim&eacute;trie, tome II : Exigences techniques et relatives aux syst&egrave;mes de gestion de la qualit&eacute; pour les services de<br /> dosim&eacute;trie</em> [2]<sup id="fnb2-ref"><a className="fn-lnk" href="#fnb2"><span className="wb-inv">Footnote </span>2</a></sup></li>
<li>les exigences et l&rsquo;orientation en mati&egrave;re de protection de l&rsquo;environnement qui figurent dans le REGDOC-2.9.1 : <em>Protection de l&rsquo;environnement : Principes, &eacute;valuations environnementales et mesures de protection de l&rsquo;environnement</em>, version 1.1 [3]</li>  </ul>
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
<h3 id="sec1-3">1.3	L&eacute;gislation pertinente</h3>  <p>Les dispositions suivantes de la <a href="https://laws-lois.justice.gc.ca/fra/lois/n-28.3/"><em>Loi sur la s&ucirc;ret&eacute; et la r&eacute;glementation nucl&eacute;aires</em></a> (LSRN) et de ses r&egrave;glements d&rsquo;application s&rsquo;appliquent au pr&eacute;sent document :</p>
<ul>
<li>L&rsquo;article 2 de la LSRN d&eacute;finit comme suit un travailleur du secteur nucl&eacute;aire (TSN) : &laquo; Personne qui, du fait de sa profession ou de son occupation et des conditions dans lesquelles elle exerce ses activit&eacute;s, si celles-ci sont li&eacute;es &agrave; une substance ou une installation nucl&eacute;aire, risque vraisemblablement de recevoir une dose de rayonnement sup&eacute;rieure &agrave; la limite r&eacute;glementaire fix&eacute;e pour la population en g&eacute;n&eacute;ral &raquo;; ces limites r&eacute;glementaires de dose sont d&eacute;finies aux articles 13, 14 et 15 du RRP.</li>
<li>L&rsquo;article 27 de la LSRN stipule ce qui suit : &laquo; Les titulaires de licence ou de permis et les personnes vis&eacute;es par r&egrave;glement : a) tiennent les documents r&eacute;glementaires, notamment un document sur la quantit&eacute; de rayonnement re&ccedil;ue par chaque personne &ndash; ou la dose engag&eacute;e &agrave; l&rsquo;&eacute;gard de chaque personne &ndash; dont les fonctions professionnelles sont li&eacute;es aux activit&eacute;s autoris&eacute;es par la pr&eacute;sente loi ou qui se trouve dans un lieu o&ugrave; celles-ci sont exerc&eacute;es, les conserve durant la p&eacute;riode r&eacute;glementaire et les communique en conformit&eacute; avec les r&egrave;glements... &raquo;.</li>
<li>Le paragraphe 5(1) du RRP stipule ce qui suit : &laquo; Pour tenir le document sur les doses de rayonnement pr&eacute;vu &agrave; l&rsquo;article 27 de la Loi, le titulaire de permis contr&ocirc;le et enregistre l&rsquo;ampleur de l&rsquo;exposition aux produits de filiation du radon de chaque personne mentionn&eacute;e &agrave; cet article, ainsi que la dose efficace et la dose &eacute;quivalente qui sont re&ccedil;ues par la personne et engag&eacute;es &agrave; son &eacute;gard. &raquo;</li>  </ul>
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
<h2 id="sec2">2. Renseignements g&eacute;n&eacute;raux</h2>
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
<h3 id="sec2-1">2.1	Limites de dose efficace</h3>  <p>Les limites de dose efficace s&rsquo;appliquent &agrave; toutes les sources de radioexposition combin&eacute;es, &agrave; savoir les sources externes au corps et les sources internes au corps.</p>  <p>L&rsquo;article 13 du <a href="https://laws-lois.justice.gc.ca/fra/reglements/DORS-2000-203/page-1.html"><em>R&egrave;glement sur la radioprotection</em></a> (RRP) &eacute;tablit les limites de dose efficace pour diverses personnes. Ces personnes sont : 1) les travailleurs du secteur nucl&eacute;aire (TSN), 2) les travailleuses enceintes du secteur nucl&eacute;aire, et 3) les personnes autres que des travailleurs du secteur nucl&eacute;aire. L&rsquo;article 15 du RRP &eacute;tablit des limites de dose efficace pour des cas particuliers, notamment les situations d&rsquo;urgence. Pour chacune de ces personnes ou chacun de ces cas, les limites de dose efficace s&rsquo;appliquent &agrave; la somme de :</p>  <ul>
<li>la dose efficace due &agrave; des sources de rayonnement ionisant &agrave; l&rsquo;ext&eacute;rieur du corps</li>
<li>la dose efficace engag&eacute;e (DEE) due au radon et &agrave; ses produits de filiation, lorsqu&rsquo;ils sont ing&eacute;r&eacute;s par l&rsquo;organisme, &agrave; l&rsquo;exclusion des TSN enceintes</li>
<li>la DEE provenant des radionucl&eacute;ides (autres que le radon 222 et ses produits de filiation) absorb&eacute;s dans l&rsquo;organisme</li>  </ul>  <p>La dose efficace totale, d&eacute;termin&eacute;e selon la m&eacute;thode de la somme ci-dessus, est compar&eacute;e aux limites de dose efficace applicables, stipul&eacute;es aux articles 13 et 15 du RRP, pour d&eacute;terminer la conformit&eacute; &agrave; ces limites.</p>
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
<h3 id="sec2-2">2.2	M&eacute;thodes de dosim&eacute;trie</h3>  <p>Les m&eacute;thodes de dosim&eacute;trie servant &agrave; d&eacute;terminer la dose professionnelle peuvent &ecirc;tre class&eacute;es en trois grandes cat&eacute;gories : contr&ocirc;le direct, contr&ocirc;le indirect et mod&eacute;lisation des doses.</p>   <h4>2.2.1	Contr&ocirc;le direct</h4>  <p>Aussi appel&eacute; dosim&eacute;trie individuelle, le contr&ocirc;le direct sert principalement &agrave; d&eacute;terminer les doses re&ccedil;ues par les personnes qui sont expos&eacute;es &agrave; des rayonnements dans le cadre de leurs activit&eacute;s professionnelles. Les techniques de dosim&eacute;trie individuelle varient, en partie en raison du type d&rsquo;exposition : exposition externe si la ou les sources de rayonnement sont &agrave; l&rsquo;ext&eacute;rieur du corps, ou exposition interne si elles se trouvent dans le corps. Dans le cas de l&rsquo;exposition externe, une personne porte un appareil de contr&ocirc;le individuel, aussi appel&eacute; dosim&egrave;tre individuel, pour mesurer son exposition aux rayonnements externes. Dans le cas de l&rsquo;exposition interne, les dispositifs de contr&ocirc;le individuel consistent en une pompe &agrave; air et un filtre pour estimer la radioactivit&eacute; en suspension dans l&rsquo;air inhal&eacute; par les travailleurs. Ces dispositifs comprennent des &eacute;chantillonneurs d&rsquo;air individuels (pour mesurer les particules en suspension dans l&rsquo;air en g&eacute;n&eacute;ral) et des dosim&egrave;tres alpha individuels (pour mesurer les produits de filiation du radon et la poussi&egrave;re de minerai d&rsquo;uranium dans l&rsquo;air). En outre, il existe deux techniques de contr&ocirc;le individuel pour d&eacute;terminer les doses internes sans recourir &agrave; l&rsquo;utilisation d&rsquo;appareils de contr&ocirc;le individuel, &agrave; savoir les essais biologiques <em>in vivo</em> et <em>in vitro</em>. L&rsquo;essai biologique <em>in vivo</em> consiste &agrave; mesurer les substances nucl&eacute;aires dans l&rsquo;organisme, tandis que l&rsquo;essai biologique <em>in vitro</em> consiste &agrave; mesurer les substances nucl&eacute;aires excr&eacute;t&eacute;es par l&rsquo;organisme. Le contr&ocirc;le direct, aussi appel&eacute; contr&ocirc;le individuel, est la m&eacute;thode la plus pr&eacute;cise et privil&eacute;gi&eacute;e pour d&eacute;terminer les doses aux travailleurs.</p>  <h4>2.2.2	Contr&ocirc;le indirect</h4>  <p>Ce contr&ocirc;le, aussi appel&eacute; contr&ocirc;le en milieu de travail, pourrait &ecirc;tre utilis&eacute; dans certaines situations o&ugrave; une personne travaille dans une zone o&ugrave; il y a une concentration connue de radioactivit&eacute; en suspension dans l&rsquo;air ou un champ de rayonnement connu, pendant une p&eacute;riode connue. On peut utiliser ces renseignements conjointement avec d&rsquo;autres donn&eacute;es pour estimer la dose re&ccedil;ue par la personne pendant un temps d&rsquo;occupation donn&eacute;. On utilise souvent cette approche lorsqu&rsquo;une substance radioactive en suspension dans l&rsquo;air est la source d&rsquo;exposition et que le co&ucirc;t du contr&ocirc;le individuel n&rsquo;est pas justifi&eacute; compte tenu des niveaux d&rsquo;exposition pr&eacute;vus (p. ex., les produits de filiation du radon), ou encore lorsque le contr&ocirc;le n&rsquo;est pas r&eacute;alisable. Dans de tels cas, la concentration dans l&rsquo;air des produits de filiation du radon dans une zone pr&eacute;cise ou &agrave; proximit&eacute; imm&eacute;diate de chaque travailleur est mesur&eacute;e par &eacute;chantillonnage de l&rsquo;air ou par une autre m&eacute;thode, et le temps pass&eacute; dans ces zones par une ou plusieurs personnes est consign&eacute;. On utilise ensuite diverses mesures, notamment la concentration de la radioactivit&eacute; en suspension dans l&rsquo;air, le temps d&rsquo;occupation enregistr&eacute; et le taux d&rsquo;inhalation de l&rsquo;air pour estimer la dose re&ccedil;ue par une personne.</p>   <h4>2.2.3	Mod&eacute;lisation des doses</h4>  <p>On pourrait mod&eacute;liser les doses dans certaines situations o&ugrave; la source de rayonnement est bien comprise. Les renseignements sur les sources de rayonnement permettent de calculer les doses d&rsquo;apr&egrave;s les coefficients de dose publi&eacute;s et les donn&eacute;es sur le blindage, &agrave; l&rsquo;aide d&rsquo;un logiciel de mod&eacute;lisation des doses (p. ex., simulations de Monte-Carlo).</p>
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
<h3 id="sec2-3">2.3	Services de dosim&eacute;trie</h3>  <p>L&rsquo;article 8 du RRP stipule ce qui suit : &laquo; Le titulaire de permis utilise un service de dosim&eacute;trie autoris&eacute; pour mesurer et contr&ocirc;ler les doses de rayonnement re&ccedil;ues par le TSN, et engag&eacute;es &agrave; son &eacute;gard, lorsque le travailleur risque vraisemblablement de recevoir une dose efficace sup&eacute;rieure &agrave; 5 mSv au cours d&rsquo;une p&eacute;riode de dosim&eacute;trie d&rsquo;un an. &raquo;. Cette exigence garantit que les doses sont contr&ocirc;l&eacute;es avec suffisamment d&rsquo;exactitude et de pr&eacute;cision. Les exigences relatives aux services de dosim&eacute;trie autoris&eacute;s figurent dans le REGDOC-2.7.2, tome II.</p>  <p>Dans certains cas, les travailleurs pourraient &ecirc;tre expos&eacute;s &agrave; plusieurs sources de rayonnement. Par cons&eacute;quent, ils pourraient faire l&rsquo;objet d&rsquo;un suivi par diff&eacute;rentes m&eacute;thodes. Chaque source pourrait fournir une dose inf&eacute;rieure &agrave; 5 mSv/an, mais lorsqu&rsquo;elles sont combin&eacute;es, elles pourraient d&eacute;passer cette valeur. La dose efficace de 5 mSv requise pour l&rsquo;utilisation d&rsquo;un service de dosim&eacute;trie s&rsquo;applique &agrave; la somme des composantes individuelles. Dans ces cas, la composante de dose qui contribuera le plus &agrave; l&rsquo;exposition des travailleurs doit &ecirc;tre d&eacute;termin&eacute;e par un service de dosim&eacute;trie autoris&eacute;. On devrait &eacute;galement recourir &agrave; un service de dosim&eacute;trie autoris&eacute; pour toutes les composantes qui contribuent de fa&ccedil;on importante aux doses efficaces re&ccedil;ues par les travailleurs (p. ex., &ge; 1 mSv/an). Lorsqu&rsquo;un appareil de dosim&eacute;trie mesure plus d&rsquo;une source de rayonnement (p. ex., un dosim&egrave;tre alpha individuel pour les produits de filiation du radon et la poussi&egrave;re radioactive &agrave; p&eacute;riode longue), ces sources devraient &ecirc;tre trait&eacute;es comme une seule composante aux fins de la d&eacute;termination de la dose.</p>  <p>Si l&rsquo;on s&rsquo;attend &agrave; ce que les doses efficaces ne d&eacute;passent pas 5 mSv par p&eacute;riode de dosim&eacute;trie d&rsquo;un an, les titulaires de permis pourraient choisir de recourir &agrave; un service de dosim&eacute;trie autoris&eacute; ou de d&eacute;terminer les doses en utilisant d&rsquo;autres m&eacute;thodes de dosim&eacute;trie d&eacute;crites &agrave; la section 2.2. Lorsque la CCSN &eacute;value la m&eacute;thode de dosim&eacute;trie propos&eacute;e par le demandeur, elle tient compte du risque potentiel relatif pour les travailleurs.</p>
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
<h3 id="sec2-4">2.4	Dossiers des doses</h3>  <p>Toutes les donn&eacute;es utilis&eacute;es pour d&eacute;terminer les doses, tous les rapports produits dans le cadre d&rsquo;enqu&ecirc;tes et tous les documents associ&eacute;s aux demandes de modification des renseignements sur les doses (DMRD), y compris le rapport d&rsquo;enqu&ecirc;te, le formulaire DMRD et la lettre d&rsquo;approbation de la CCSN, doivent &ecirc;tre conserv&eacute;s pendant la p&eacute;riode prescrite dans le RRP. Ces donn&eacute;es devraient permettre de recr&eacute;er et de v&eacute;rifier de mani&egrave;re raisonnable les r&eacute;sultats &agrave; partir des donn&eacute;es initiales mises en r&eacute;f&eacute;rence. Une m&eacute;thode claire d&rsquo;identification des travailleurs et de tenue des dossiers de doses devrait &ecirc;tre &eacute;tablie. L&rsquo;identification, l&rsquo;entreposage, la protection, la r&eacute;cup&eacute;ration et l&rsquo;&eacute;limination des documents devraient &ecirc;tre contr&ocirc;l&eacute;s.</p>  <h4>2.4.1	Fichier dosim&eacute;trique national</h4>  <p>Selon le RRP, si les mesures de dose sont enregistr&eacute;es par un service de dosim&eacute;trie autoris&eacute;, les dossiers de doses des TSN devraient &ecirc;tre soumis au FDN avec les renseignements personnels pr&eacute;cis stipul&eacute;s dans le RRP.</p>   <p>Le FDN est une base de donn&eacute;es, d&eacute;tenue et exploit&eacute;e par Sant&eacute; Canada, qui permet de suivre l&rsquo;historique des doses re&ccedil;ues au cours de la vie par les personnes enregistr&eacute;es. La CCSN a conclu un protocole d&rsquo;entente avec Sant&eacute; Canada qui &eacute;nonce les responsabilit&eacute;s de Sant&eacute; Canada &agrave; l&rsquo;&eacute;gard de l&rsquo;exploitation du registre, de la tenue &agrave; jour des renseignements exig&eacute;s en vertu du RRP et de la mise &agrave; la disposition de ces renseignements &agrave; la CCSN.<sup id="fnb3-ref"><a className="fn-lnk" href="#fnb3"><span className="wb-inv">Footnote </span>3</a></sup></p>
<p>Le FDN permet &agrave; la CCSN d&rsquo;obtenir des renseignements sur les tendances dans les donn&eacute;es concernant les doses pour les installations ou les groupes d&rsquo;installations, des renseignements d&eacute;taill&eacute;s sur les doses pour les particuliers et les titulaires de permis, et les renseignements n&eacute;cessaires aux &eacute;tudes sur la sant&eacute;, notamment les &eacute;tudes &eacute;pid&eacute;miologiques. Sant&eacute; Canada informe la CCSN de tout dossier indiquant qu&rsquo;une limite de dose pour un TSN a &eacute;t&eacute; d&eacute;pass&eacute;e. L&rsquo;obtention rapide de ces documents permet &agrave; la CCSN d&rsquo;agir imm&eacute;diatement pour s&rsquo;assurer que les titulaires de permis ont pris les mesures appropri&eacute;es.</p>  <p>Un titulaire de permis pourrait demander la modification d&rsquo;un dossier de dose ou d&rsquo;un groupe de dossiers de doses dans le FDN. La partie C d&eacute;crit le processus &agrave; suivre pour apporter des modifications aux renseignements sur les doses d&eacute;pos&eacute;s dans le FDN.</p>
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
<h2 id="partA">Partie A : Exposition externe</h2>  <p>La dosim&eacute;trie externe est la mesure de la dose lorsque les sources de rayonnement sont &agrave; l&rsquo;ext&eacute;rieur du corps. La dosim&eacute;trie externe concerne les rayonnements qui peuvent p&eacute;n&eacute;trer la couche morte de la peau : les photons, le rayonnement b&ecirc;ta, les &eacute;lectrons<sup id="fnb4-ref"><a className="fn-lnk" href="#fnb4"><span className="wb-inv">Footnote </span>4</a></sup>  et les neutrons. Puisque les photons, le rayonnement b&ecirc;ta et les &eacute;lectrons interagissent avec les particules charg&eacute;es et que les neutrons interagissent par l&rsquo;interm&eacute;diaire de la force nucl&eacute;aire, les techniques de dosim&eacute;trie et les m&eacute;thodes de d&eacute;tection sont tr&egrave;s diff&eacute;rentes dans ces deux cas.</p>  <p>L&rsquo;exposition externe au rayonnement peut &ecirc;tre mesur&eacute;e par un contr&ocirc;le direct. Toutefois, si le temps et les ressources n&eacute;cessaires &agrave; la mesure directe l&rsquo;emportent sur l&rsquo;utilit&eacute; de cette m&eacute;thode, l&rsquo;exposition peut &ecirc;tre estim&eacute;e.</p>
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
<h2 id="sec3">3. Grandeurs op&eacute;rationnelles</h2>  <p>Les grandeurs op&eacute;rationnelles sont d&eacute;finies dans le Rapport 51 de la Commission internationale sur les unit&eacute;s et les mesures de radioprotection (ICRU), <span lang="en"><em>Quantities and Units in Radiation Protection Dosimetry</em></span> [4], qui forment un ensemble de quantit&eacute;s mesurables d&rsquo;exposition externe que l&rsquo;on peut utiliser pour d&eacute;montrer le respect des limites de dose r&eacute;glementaires. Les renseignements qui suivent sont bas&eacute;s sur ce rapport.</p>
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
<h3 id="sec3-1">3.1	&Eacute;quivalent de dose ambiant, H*(d)</h3>  <p>L&rsquo;&eacute;quivalent de dose ambiant est utilis&eacute; lorsque l&rsquo;on emploie le contr&ocirc;le de la zone pour d&eacute;terminer la dose externe. Dans le cas d&rsquo;un rayonnement fortement p&eacute;n&eacute;trant, une profondeur de 10 mm est utilis&eacute;e. Pour les rayonnements faiblement p&eacute;n&eacute;trants, on utilise des profondeurs de 0,07 mm pour la peau et de 3 mm pour le cristallin. La grandeur H*(d) repr&eacute;sente l&rsquo;&eacute;quivalent de dose ambiant, o&ugrave; (d) est la profondeur mesur&eacute;e en millim&egrave;tres.</p>
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
<h3 id="sec3-2">3.2	&Eacute;quivalent de dose directionnel, H&rsquo;(d, &Omega;)</h3>  <p>L&rsquo;&eacute;quivalent de dose directionnel est utilis&eacute; lorsque l&rsquo;on emploie le contr&ocirc;le de la zone pour d&eacute;terminer la dose externe. Cette grandeur op&eacute;rationnelle tient compte de la direction sp&eacute;cifi&eacute;e du champ de rayonnement, &Omega;. Pour un rayonnement fortement p&eacute;n&eacute;trant, on emploie une profondeur de 10 mm. Pour les rayonnements faiblement p&eacute;n&eacute;trants, on emploie des profondeurs de 0,07 mm pour la peau et de 3 mm pour le cristallin. La valeur H&rsquo;(d, &Omega;) repr&eacute;sente l&rsquo;&eacute;quivalent de dose directionnel, o&ugrave; d est la profondeur mesur&eacute;e en millim&egrave;tres.</p>
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
<h3 id="sec3-3">3.3	&Eacute;quivalent de dose individuel, H<sub>p</sub>(d)</h3>  <p>L&rsquo;&eacute;quivalent de dose individuel est la grandeur op&eacute;rationnelle employ&eacute;e lorsqu&rsquo;on utilise le contr&ocirc;le direct (ou individuel) pour d&eacute;terminer la dose externe. Pour un rayonnement fortement p&eacute;n&eacute;trant, on emploie une profondeur de 10 mm. Pour les rayonnements faiblement p&eacute;n&eacute;trants, on emploie des profondeurs de 0,07 mm pour la peau et de 3 mm pour le cristallin. La valeur H<sub>p</sub>(d) repr&eacute;sente l&rsquo;&eacute;quivalent de dose individuel, o&ugrave; (d) est la profondeur mesur&eacute;e en millim&egrave;tres.</p>
<p className="text-left"><strong>Tableau 1 : R&eacute;sum&eacute; des grandeurs op&eacute;rationnelles</strong></p>  <table className="">
<tr>
<th>Grandeur op&eacute;rationnelle</th>
<th>Description</th>
</tr>
<tr>
<td>H*(10)</td>
<td>&Eacute;quivalent de dose ambiant &agrave; une profondeur de 10 mm</td>
</tr>
<tr>
<td>H*(0.07)</td>
<td>&Eacute;quivalent de dose ambiant &agrave; une profondeur de 0,07 mm</td>
</tr>
<tr>
<td>H*(3)</td>
<td>&Eacute;quivalent de dose ambiant &agrave; une profondeur de 3 mm</td>
</tr>
<tr>
<td>H&rsquo;(10, &Omega;)</td>
<td>&Eacute;quivalent de dose directionnel &agrave; une profondeur de 10 mm</td>
</tr>
<tr>
<td>H&rsquo;(0.07, &Omega;)</td>
<td>&Eacute;quivalent de dose directionnel &agrave; une profondeur de 0,07 mm</td>
</tr>
<tr>
<td>H&rsquo;(3, &Omega;)</td>
<td>&Eacute;quivalent de dose directionnel &agrave; une profondeur de 3 mm</td>
</tr>
<tr>
<td>H<sub>p</sub>(10)</td>
<td>&Eacute;quivalent de dose individuel &agrave; une profondeur de 10 mm</tr>
</tr>
<tr>
<td>H<sub>p</sub>(0.07)</td>
<td>&Eacute;quivalent de dose individuel &agrave; une profondeur de 0,07 mm</td>
</tr>
<tr>
<td>H<sub>p</sub>(3)</td>
<td>&Eacute;quivalent de dose individuel &agrave; une profondeur de 3 mm</td>
</tr>  </table>
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
<h2 id="sec4">4. Caract&eacute;risation des conditions de rayonnement</h2>  <p>Les conditions radiologiques d&rsquo;une installation autoris&eacute;e ou d&rsquo;un endroit o&ugrave; une activit&eacute; autoris&eacute;e est exerc&eacute;e devraient &ecirc;tre caract&eacute;ris&eacute;es, document&eacute;es, contr&ocirc;l&eacute;es et mises &agrave; jour en cas de changements pouvant avoir une incidence sur les doses aux travailleurs (p. ex., l&rsquo;am&eacute;nagement de l&rsquo;installation, les types de radionucl&eacute;ides et les activit&eacute;s exerc&eacute;es). La caract&eacute;risation des conditions radiologiques devrait fournir une description compl&egrave;te des sources de rayonnement et de la nature du rayonnement pr&eacute;sent dans tous les lieux de travail qui pourraient entra&icirc;ner une exposition externe. La caract&eacute;risation radiologique devrait inclure ce qui suit, pour tous les emplacements d&rsquo;une installation :</p>
<ul>
<li>les radionucl&eacute;ides qui seront pr&eacute;sents sur le lieu de travail, leur p&eacute;riode radioactive, leurs produits de filiation et leurs abondances relatives</li>
<li>les types de rayonnement &eacute;mis par ces radionucl&eacute;ides et leurs &eacute;nergies</li>
<li>une description des sources de rayonnement (p. ex., forme physique, g&eacute;om&eacute;trie et renseignements applicables sur le blindage).</li>
</ul>  <p>La caract&eacute;risation des conditions de rayonnement dans un lieu de travail fournit les renseignements n&eacute;cessaires pour d&eacute;terminer le type de dosim&eacute;trie qui devrait &ecirc;tre utilis&eacute;.</p>
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
<h3 id="sec4-1">4.1	Rayonnement photonique, b&ecirc;ta et &eacute;lectronique</h3>  <p>Aux &eacute;nergies types d&rsquo;un milieu de travail, les rayonnements alpha, b&ecirc;ta, &eacute;lectronique et photonique ont une port&eacute;e (c&rsquo;est &agrave; dire la distance parcourue) tr&egrave;s variable dans l&rsquo;air et les tissus humains. Les tissus qui courent le plus grand risque d&rsquo;exposition varient selon la port&eacute;e du rayonnement.</p>  <p>Le rayonnement alpha parcourt habituellement de 2,6 &agrave; 6 cm dans l&rsquo;air et de 30 &agrave; 60 &micro;m dans les tissus.<sup id="fnb5-ref"><a className="fn-lnk" href="#fnb5"><span className="wb-inv">Footnote </span>5</a></sup>  Le rayonnement alpha &eacute;mis par les radionucl&eacute;ides qui se trouvent &agrave; l&rsquo;ext&eacute;rieur du corps ne peut g&eacute;n&eacute;ralement pas atteindre les cellules sensibles de la peau et, par cons&eacute;quent, il ne pr&eacute;sente pas de probl&egrave;me radiologique &agrave; moins que ces radionucl&eacute;ides ne soient absorb&eacute;s par le corps. On trouvera &agrave; la partie B du pr&eacute;sent document de l&rsquo;orientation  pour ce dernier cas.</p>  <p>Le rayonnement b&ecirc;ta et les &eacute;lectrons ont g&eacute;n&eacute;ralement une port&eacute;e plus grande que le rayonnement alpha. Dans l&rsquo;air, le rayonnement b&ecirc;ta et les &eacute;lectrons pourraient parcourir des distances allant de moins de 1 cm jusqu&rsquo;&agrave; environ 10 m. Dans les tissus, cependant, leur port&eacute;e varie g&eacute;n&eacute;ralement de quelques microm&egrave;tres &agrave; environ 1 cm, selon leur &eacute;nergie.<sup id="fnb6-ref"><a className="fn-lnk" href="#fnb6"><span className="wb-inv">Footnote </span>6</a></sup>  Ils pr&eacute;sentent un risque potentiel pour la peau et le cristallin. &Agrave; moins qu&rsquo;ils ne soient absorb&eacute;s par le corps, les radionucl&eacute;ides &eacute;mettant un rayonnement b&ecirc;ta ou &eacute;lectronique ne posent pas de risque pour les organes situ&eacute;s sous la peau, compte tenu de leur port&eacute;e.</p>  <p>Les photons, aussi appel&eacute;s rayons gamma ou rayons X, couvrent des distances beaucoup plus grandes en raison de leur m&eacute;canisme d&rsquo;interaction avec la mati&egrave;re. Ils pr&eacute;sentent un risque potentiel non seulement pour la peau et le cristallin, mais aussi pour les tissus et les organes &agrave; l&rsquo;int&eacute;rieur du corps.</p>  <p>Par cons&eacute;quent, bien que les rayonnements photonique, b&ecirc;ta et &eacute;lectronique puissent contribuer &agrave; une dose &eacute;quivalente &agrave; la peau et au cristallin, les photons sont les principaux responsables de la dose efficace externe.</p>  <p>La capacit&eacute; de p&eacute;n&eacute;tration ou la probabilit&eacute; d&rsquo;interaction du rayonnement est li&eacute;e &agrave; l&rsquo;&eacute;nergie du rayonnement. Chaque substance nucl&eacute;aire &eacute;met un rayonnement d&rsquo;une &eacute;nergie ou d&rsquo;une gamme d&rsquo;&eacute;nergies pr&eacute;cise lorsqu&rsquo;elle subit une d&eacute;sint&eacute;gration radioactive. Par cons&eacute;quent, seuls certains photons, particules b&ecirc;ta et &eacute;lectrons pr&eacute;sentent un risque externe pour le corps humain. Par exemple, le tritium (<sup>3</sup>H) est une substance nucl&eacute;aire qui &eacute;met seulement un rayonnement b&ecirc;ta d&rsquo;une &eacute;nergie moyenne de 5,7 kilo&eacute;lectronvolts (keV) et d&rsquo;une &eacute;nergie maximale de 18,6 keV. &Agrave; ces &eacute;nergies, le rayonnement est trop faible pour p&eacute;n&eacute;trer plus profond&eacute;ment que la couche morte de la peau. Par cons&eacute;quent, le rayonnement b&ecirc;ta d&ucirc; au tritium ne constitue pas un risque de dose externe. Le tritium pr&eacute;sente uniquement un risque de dose interne par ingestion, inhalation et absorption par la peau.</p>  <p>L&rsquo;&eacute;nergie de rayonnement la plus faible qui peut &ecirc;tre mesur&eacute;e d&eacute;pend du dosim&egrave;tre. Les types de dosim&egrave;tres d&eacute;crits dans le pr&eacute;sent document ne r&eacute;pondent que tr&egrave;s peu ou pas du tout &agrave; de nombreuses sources de rayonnement b&ecirc;ta de faible &eacute;nergie. Dans le cadre du programme de radioprotection, on s&rsquo;attend &agrave; ce que les titulaires de permis connaissent les champs de rayonnement auxquels les travailleurs seront expos&eacute;s et choisissent la m&eacute;thode appropri&eacute;e pour d&eacute;terminer la dose professionnelle.</p>
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
<h3 id="sec4-2">4.2	Rayonnement neutronique</h3>  <p>Lorsque des neutrons sont produits, ils ont g&eacute;n&eacute;ralement une large distribution d&rsquo;&eacute;nergie appel&eacute;e spectre d&rsquo;&eacute;nergie, qui varie selon la nature de la source. Le type de r&eacute;action qu&rsquo;un neutron subit d&eacute;pend tr&egrave;s fortement de son &eacute;nergie. De nombreux facteurs, y compris la nature de la source, l&rsquo;&eacute;paisseur, la forme et la composition du mat&eacute;riau de blindage, ou encore la g&eacute;om&eacute;trie de l&rsquo;environnement de travail, peuvent modifier le spectre d&rsquo;&eacute;nergie qui entre en contact avec le corps du travailleur. Dans le cadre du programme de radioprotection, le titulaire de permis doit conna&icirc;tre le spectre d&rsquo;&eacute;nergie neutronique et choisir une m&eacute;thode appropri&eacute;e pour d&eacute;terminer la dose professionnelle.</p>
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
<h2 id="sec5">5. Contr&ocirc;le direct</h2>  <p>Afin de d&eacute;terminer les doses externes re&ccedil;ues par les travailleurs, on effectue un contr&ocirc;le direct &agrave; l&rsquo;aide d&rsquo;un dosim&egrave;tre. Un dosim&egrave;tre est un appareil de d&eacute;tection du rayonnement port&eacute; par une personne pour mesurer la dose de rayonnement. On peut recourir &agrave; un service de dosim&eacute;trie autoris&eacute; ou un service non autoris&eacute; pour d&eacute;terminer la dose par contr&ocirc;le direct.</p>  <p>Les dosim&egrave;tres sont divis&eacute;s en deux grandes cat&eacute;gories :</p>  <ul>
<li>les dosim&egrave;tres passifs, qui produisent un signal induit par le rayonnement, signal qui est enregistr&eacute; dans l&rsquo;appareil. Le dosim&egrave;tre est ensuite trait&eacute; et ses r&eacute;sultats sont analys&eacute;s</li>
<li>les dosim&egrave;tres actifs, qui produisent un signal induit par le rayonnement, signal dont la lecture directe indique la dose ou le d&eacute;bit de dose d&eacute;tect&eacute;</li>  </ul>  <p>Un dosim&egrave;tre passif typique utilis&eacute; pour mesurer le rayonnement photonique, b&ecirc;ta et &eacute;lectronique consiste en un d&eacute;tecteur ins&eacute;r&eacute; dans un support. Les divers dosim&egrave;tres sont configur&eacute;s diff&eacute;remment. Cependant, le d&eacute;tecteur contient un ou plusieurs &eacute;l&eacute;ments sensibles, et le support contient un ou plusieurs filtres. Dans un dosim&egrave;tre qui mesure le rayonnement photonique, b&ecirc;ta et &eacute;lectronique, c&rsquo;est principalement le filtre/support qui permet &agrave; l&rsquo;instrument de diff&eacute;rencier l&rsquo;&eacute;quivalent de dose individuel &agrave; la peau ou &agrave; l&rsquo;&oelig;il (grandeurs H<sub>p</sub>(0,07) et H<sub>p</sub>(3), respectivement), et l&rsquo;&eacute;quivalent de dose individuel au corps entier (grandeur H<sub>p</sub>(10)). Une partie du support pourrait comporter une fen&ecirc;tre ouverte (aucun filtre ou un filtre tr&egrave;s fin) pour mesurer la grandeur H<sub>p</sub>(0,07), et l&rsquo;autre partie du d&eacute;tecteur pourrait comporter un filtre plus &eacute;pais qui permet de mesurer la grandeur H<sub>p</sub>(10). Les filtres plus &eacute;pais bloquent le rayonnement photonique et b&ecirc;ta de faible &eacute;nergie, et permettent seulement au rayonnement le plus p&eacute;n&eacute;trant de d&eacute;poser de l&rsquo;&eacute;nergie. Certains dosim&egrave;tres sont pourvus de plusieurs filtres d&rsquo;&eacute;paisseurs et de compositions diff&eacute;rentes qui leur permettent de diff&eacute;rencier divers niveaux d&rsquo;&eacute;nergie.</p>  <p>Les dosim&egrave;tres actifs les plus couramment utilis&eacute;s pour mesurer le rayonnement photonique, b&ecirc;ta et &eacute;lectronique affichent les doses &eacute;lectroniquement sur un &eacute;cran. Les dosim&egrave;tres stylos (aussi appel&eacute;s dosim&egrave;tres de poche) sont &eacute;galement des dosim&egrave;tres actifs. Dans un dosim&egrave;tre stylo, les doses sont indiqu&eacute;es par la position d&rsquo;une ligne mince sur une &eacute;chelle indiquant l&rsquo;exposition au rayonnement.</p>  <p>Il existe plusieurs technologies diff&eacute;rentes de dosim&egrave;tres permettant de mesurer le rayonnement photonique, b&ecirc;ta et &eacute;lectronique. Les dosim&egrave;tres passifs pour le corps entier comprennent les dosim&egrave;tres thermoluminescents (DTL) et les dosim&egrave;tres &agrave; luminescence stimul&eacute;e optiquement (DLSO). Les dosim&egrave;tres actifs pour le corps entier comprennent les dosim&egrave;tres &agrave; lecture directe (DLD), aussi appel&eacute;s dosim&egrave;tres &eacute;lectroniques personnels (DEP) ou dosim&egrave;tres sonores individuels (DSI).</p>  <p>Les techniques de mesure pour d&eacute;terminer les doses dues au rayonnement photonique, b&ecirc;ta et &eacute;lectronique sont g&eacute;n&eacute;ralement inappropri&eacute;es pour mesurer le rayonnement neutronique, car les neutrons interagissent diff&eacute;remment avec la mati&egrave;re.</p>  Il existe divers types de dosim&egrave;tres &agrave; neutrons. Les dosim&egrave;tres &agrave; neutrons individuels (dont le plus populaire est le d&eacute;tecteur solide de traces nucl&eacute;aires) et les radiam&egrave;tres &agrave; neutrons transportables en sont des exemples. Ces technologies de dosim&egrave;tre sont d&eacute;crites plus en d&eacute;tail &agrave; la section 5.1.  <p>La qualit&eacute; des r&eacute;sultats d&rsquo;un dosim&egrave;tre d&eacute;pend de nombreux facteurs :</p>  <ul>
<li>La r&eacute;ponse d&rsquo;un dosim&egrave;tre varie en fonction de l&rsquo;&eacute;nergie du rayonnement et de l&rsquo;angle d&rsquo;incidence du rayonnement par rapport au d&eacute;tecteur du dosim&egrave;tre.</li>
<li>Les dosim&egrave;tres varient dans leur capacit&eacute; &agrave; d&eacute;tecter diff&eacute;rents types de rayonnement (photonique, b&ecirc;ta, &eacute;lectronique ou neutronique).</li>
<li>Le signal d&rsquo;un dosim&egrave;tre peut s&rsquo;estomper avec le temps. Cela peut &ecirc;tre caus&eacute; par des facteurs environnementaux tels que la temp&eacute;rature, la lumi&egrave;re et l&rsquo;humidit&eacute;.</li>
<li>Certains dosim&egrave;tres sont limit&eacute;s &eacute;galement dans leur capacit&eacute; &agrave; fonctionner dans des champs de rayonnement puls&eacute;.<sup id="fnb7-ref"><a className="fn-lnk" href="#fnb7"><span className="wb-inv">Footnote </span>7</a></sup></li>
<li>Certains dosim&egrave;tres sont plus sensibles et peuvent d&eacute;tecter une quantit&eacute; de rayonnement plus faible que d&rsquo;autres.</li>
<li>Les dosim&egrave;tres diff&egrave;rent dans leur capacit&eacute; &agrave; r&eacute;sister &agrave; des conditions environnementales rigoureuses.</li>  </ul>  <p>On devrait discuter avec le fournisseur de services de dosim&eacute;trie ou le fabricant du dosim&egrave;tre des limitations concernant les facteurs ci-dessus, afin de bien les comprendre. Ces limitations devraient &ecirc;tre document&eacute;es et les travailleurs devraient recevoir une formation afin que des mesures appropri&eacute;es de protection puissent &ecirc;tre prises pour pr&eacute;venir tout impact sur les r&eacute;sultats de la dosim&eacute;trie. Par exemple, on sait que de nombreux dosim&egrave;tres actifs ont une efficacit&eacute; m&eacute;diocre dans les champs de rayonnement puls&eacute;. Par cons&eacute;quent, si les champs de rayonnement puls&eacute; contribuent de fa&ccedil;on appr&eacute;ciable &agrave; la dose, on devrait en tenir compte au moment de choisir le dosim&egrave;tre le plus appropri&eacute; pour d&eacute;terminer la dose aux travailleurs.</p>  <p>La r&eacute;ponse d&rsquo;un dosim&egrave;tre est la valeur mesur&eacute;e ou &eacute;valu&eacute;e, divis&eacute;e par la valeur conventionnellement vraie. La valeur conventionnellement vraie, &eacute;galement appel&eacute;e &laquo; meilleure estimation &raquo;, est la valeur attribu&eacute;e &agrave; une grandeur et est reconnue comme ayant une incertitude appropri&eacute;e pour une fin donn&eacute;e. La r&eacute;ponse variera selon le type et l&rsquo;&eacute;nergie du rayonnement auquel le dosim&egrave;tre est expos&eacute;. Les fournisseurs de service de dosim&eacute;trie pourraient offrir la possibilit&eacute; d&rsquo;appliquer des facteurs de correction standards applicables &agrave; des radionucl&eacute;ides ou des &eacute;nergies sp&eacute;cifiques, pour obtenir des r&eacute;sultats plus pr&eacute;cis. On devrait examiner soigneusement ces options en consultation avec le fournisseur de services de dosim&eacute;trie. Si des facteurs de correction sont appliqu&eacute;s, ils devraient &ecirc;tre document&eacute;s et r&eacute;vis&eacute;s si des changements surviennent dans le lieu de travail ou dans les activit&eacute;s professionnelles, changements qui pourraient en affecter la validit&eacute;.</p>  <p>Les dosim&egrave;tres devraient &ecirc;tre fix&eacute;s au corps pour &eacute;viter qu&rsquo;ils ne tombent pendant le travail, et ils devraient &ecirc;tre orient&eacute;s vers l&rsquo;ext&eacute;rieur et non couverts par d&rsquo;autres articles ou dispositifs. Ils devraient &ecirc;tre port&eacute;s sur le tronc du corps, entre la taille et les &eacute;paules, &agrave; l&rsquo;endroit o&ugrave; l&rsquo;exposition pr&eacute;vue est la plus &eacute;lev&eacute;e (ou plac&eacute;s conform&eacute;ment aux instructions du fabricant).</p>  <p>Lorsque les dosim&egrave;tres ne sont pas port&eacute;s, ils devraient &ecirc;tre entrepos&eacute;s dans un endroit o&ugrave; les d&eacute;bits de dose sont aussi proches que possible du rayonnement de fond et o&ugrave; les conditions d&rsquo;entreposage sont favorables (endroits o&ugrave; les dosim&egrave;tres sont prot&eacute;g&eacute;s des rayons directs du soleil, des temp&eacute;ratures extr&ecirc;mes, de la poussi&egrave;re, etc.). Les dosim&egrave;tres ne devraient jamais &ecirc;tre entrepos&eacute;s pr&egrave;s des mati&egrave;res radioactives ou des appareils d&rsquo;exposition. Au moins un dosim&egrave;tre de contr&ocirc;le devrait &ecirc;tre conserv&eacute; dans chaque zone de stockage des dosim&egrave;tres pendant la p&eacute;riode de port. Le dosim&egrave;tre de contr&ocirc;le permet de contr&ocirc;ler la dose non li&eacute;e au travail, c&rsquo;est-&agrave;-dire la dose &agrave; laquelle les dosim&egrave;tres individuels sont &eacute;galement expos&eacute;s lorsqu&rsquo;ils ne sont pas port&eacute;s (c.-&agrave; d. pendant leur stockage et leur transport). Cela comprend la dose provenant du rayonnement de fond et d&rsquo;autres sources qui ne sont pas li&eacute;es aux activit&eacute;s autoris&eacute;es. Une fois trait&eacute;es, les doses indiqu&eacute;es par le dosim&egrave;tre de contr&ocirc;le pourraient &ecirc;tre soustraites des doses indiqu&eacute;es par les dosim&egrave;tres des travailleurs, afin que la dose professionnelle nette puisse &ecirc;tre d&eacute;termin&eacute;e avec pr&eacute;cision. Les dosim&egrave;tres de contr&ocirc;le devraient &ecirc;tre exp&eacute;di&eacute;s avec les dosim&egrave;tres pendant le transport afin d&rsquo;indiquer l&rsquo;exposition potentielle au rayonnement pendant le transport. Pour l&rsquo;exp&eacute;dition des dosim&egrave;tres, on devrait utiliser des services de transport qui n&rsquo;entra&icirc;neront pas d&rsquo;exposition accidentelle &agrave; un rayonnement sup&eacute;rieur aux niveaux ambiants pendant le transport des dosim&egrave;tres. Par exemple, on ne devrait pas faire appel aux services de transport qui exp&eacute;dient des mati&egrave;res radioactives.</p>  <p>Lorsqu&rsquo;une personne voyage par avion avec un dosim&egrave;tre, le dosim&egrave;tre ne devrait pas &ecirc;tre rang&eacute; dans les bagages enregistr&eacute;s. De la sorte, le dosim&egrave;tre n&rsquo;enregistrera pas les doses non personnelles apr&egrave;s avoir &eacute;t&eacute; expos&eacute; aux appareils de radiographies ou aux scanners qui sont utilis&eacute;s dans la plupart des a&eacute;roports dans le cadre des protocoles de contr&ocirc;le de s&eacute;curit&eacute; des bagages. La meilleure pratique consiste &agrave; traverser ces points de contr&ocirc;le en ayant le dosim&egrave;tre avec soi ou en le portant. Au besoin, on peut placer le dosim&egrave;tre dans le bagage de cabine. Les doses dues aux scanners de bagages de cabine ne sont pas aussi importantes.</p>  <p>On devrait prendre des pr&eacute;cautions pour prot&eacute;ger les dosim&egrave;tres contre la contamination par des mati&egrave;res radioactives. Toutefois, cela devrait toujours se faire en consultation avec le fabricant ou le fournisseur de services de dosim&eacute;trie pour s&rsquo;assurer que les mesures prises n&rsquo;ont pas d&rsquo;incidence sur les r&eacute;sultats du dosim&egrave;tre.</p>  <p>Des proc&eacute;dures devraient &ecirc;tre mises en place pour traiter les dosim&egrave;tres qui ont &eacute;t&eacute; compromis (p. ex., les dosim&egrave;tres perdus, endommag&eacute;s ou soumis &agrave; une exposition non personnelle). Ces situations devraient faire l&rsquo;objet d&rsquo;une enqu&ecirc;te et des mesures appropri&eacute;es devraient &ecirc;tre prises d&egrave;s que possible. L&rsquo;enqu&ecirc;te devrait comporter des discussions avec le travailleur dont le dosim&egrave;tre a &eacute;t&eacute; compromis et le fournisseur de services de dosim&eacute;trie. Un dosim&egrave;tre de remplacement devrait &ecirc;tre fourni et, le cas &eacute;ch&eacute;ant, une demande de modification des renseignements sur les doses devrait &ecirc;tre pr&eacute;sent&eacute;e &agrave; la CCSN, conform&eacute;ment &agrave; l&rsquo;orientation fournie &agrave; la partie C du pr&eacute;sent document.</p>
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
<h3 id="sec5-1">5.1	Technologies des dosim&egrave;tres</h3>  <p>Les technologies des dosim&egrave;tres d&eacute;crites dans cette section sont couramment utilis&eacute;es et pr&eacute;sent&eacute;es &agrave; titre d&rsquo;exemples. D&rsquo;autres technologies sont &eacute;galement disponibles.</p>  <p>Si un dosim&egrave;tre fournit un r&eacute;sultat inattendu ou d&eacute;passe un seuil d&rsquo;intervention, une enqu&ecirc;te devrait &ecirc;tre men&eacute;e conform&eacute;ment au REGDOC-2.7.1. Cela devrait comprendre l&rsquo;inspection du dosim&egrave;tre pour d&eacute;celer toute contamination, le cas &eacute;ch&eacute;ant. Le fournisseur de services de dosim&eacute;trie devrait &ecirc;tre consult&eacute; pour qu&rsquo;il &eacute;tudie l&rsquo;analyse du dosim&egrave;tre en question.</p>
<h4>5.1.1	Dosim&egrave;tres thermoluminescents</h4>   <p>Les dosim&egrave;tres thermoluminescents (DTL) sont couramment utilis&eacute;s au Canada et ailleurs dans le monde. Voici le principe de fonctionnement d&rsquo;un DTL :</p>
<ol>
<li>Lorsque le rayonnement ionisant traverse le d&eacute;tecteur, les atomes du d&eacute;tecteur lib&egrave;rent certains de leurs &eacute;lectrons.</li>
<li>Les &eacute;lectrons sont pi&eacute;g&eacute;s dans des impuret&eacute;s (&eacute;galement appel&eacute;s centres de dopage) &agrave; l&rsquo;int&eacute;rieur du dosim&egrave;tre, o&ugrave; ils restent dans leur &eacute;tat excit&eacute; (leur &eacute;nergie est &eacute;lev&eacute;e par rapport &agrave; leur &eacute;tat fondamental).</li>
<li>La puce est ensuite chauff&eacute;e dans un lecteur de DTL, qui se compose principalement d&rsquo;un dispositif de chauffage, d&rsquo;un tube photomultiplicateur (qui amplifie les faibles impulsions lumineuses en un signal &eacute;lectrique plus important) et d&rsquo;un enregistreur.</li>
<li>Les &eacute;lectrons pi&eacute;g&eacute;s retournent &agrave; leur &eacute;tat fondamental en &eacute;mettant des photons de lumi&egrave;re visible. La quantit&eacute; de lumi&egrave;re &eacute;mise par rapport &agrave; la temp&eacute;rature s&rsquo;appelle la courbe de luminosit&eacute;.</li>
<li>L&rsquo;analyse de cette courbe permet de d&eacute;terminer la dose.</li>
<li>Une fois qu&rsquo;un DTL a &eacute;t&eacute; lu, il ne peut plus &ecirc;tre relu pour v&eacute;rifier le r&eacute;sultat.</li>  </ol>  <p>Il existe de nombreux types de DTL, y compris les dosim&egrave;tres au fluorure de lithium, au sulfate de calcium et au borate de lithium.</p>
<h4>5.1.2	Dosim&egrave;tres &agrave; luminescence stimul&eacute;e optiquement</h4>  <p>Un dosim&egrave;tre &agrave; luminescence stimul&eacute;e optiquement (DLSO) offre divers avantages, dont la possibilit&eacute; de relecture et la d&eacute;tection d&rsquo;une faible dose mesurable. Les DLSO fonctionnent un peu comme les DTL, la principale diff&eacute;rence &eacute;tant que la luminescence est produite par un faisceau lumineux plut&ocirc;t que par la chaleur.</p>
<h4>5.1.3	Dosim&egrave;tres &agrave; lecture directe</h4>  <p>Les dosim&egrave;tres &agrave; lecture directe (DLD) sont des dosim&egrave;tres actifs, car ils affichent les doses et les d&eacute;bits de dose pendant leur utilisation. De nombreux dosim&egrave;tres &agrave; lecture directe sont pourvus d&rsquo;une alarme qui se fait entendre lorsque des doses et des d&eacute;bits de dose pr&eacute;&eacute;tablis sont atteints. Les DLD les plus couramment utilis&eacute;s affichent &eacute;lectroniquement les lectures de dose et sont compos&eacute;s soit d&rsquo;une diode, soit d&rsquo;un compteur Geiger-M&uuml;ller (GM). Cependant, les dosim&egrave;tres stylos &agrave; chambre d&rsquo;ionisation sont encore utilis&eacute;s.</p>  <p>Les DLD sont utilis&eacute;s pour contr&ocirc;ler la dose et sont souvent port&eacute;s en plus d&rsquo;un dosim&egrave;tre passif. Lorsqu&rsquo;il est possible que les champs de rayonnement augmentent de fa&ccedil;on inattendue d&rsquo;un facteur de 10 ou plus, on devrait utiliser un DLD. Depuis de nombreuses ann&eacute;es, les DLD sont utilis&eacute;s comme dispositifs de contr&ocirc;le des doses, en particulier dans le secteur de l&rsquo;&eacute;lectronucl&eacute;aire.</p>  <p>Les DLD ne sont g&eacute;n&eacute;ralement pas utilis&eacute;s pour mesurer les doses enregistr&eacute;es, mais ils pourraient &ecirc;tre utilis&eacute;s &agrave; cette fin lorsque le recours &agrave; un service de dosim&eacute;trie autoris&eacute; n&rsquo;est pas requis ou dans le cas d&rsquo;un dosim&egrave;tre passif perdu ou endommag&eacute;. Lorsque des dosim&egrave;tres actifs sont utilis&eacute;s, la plage d&rsquo;&eacute;nergie, la sensibilit&eacute;, la lin&eacute;arit&eacute; et la pr&eacute;cision devraient &ecirc;tre appropri&eacute;es, compte tenu des situations d&rsquo;exposition dans lesquelles ils seront utilis&eacute;s. De plus, des mesures de contr&ocirc;le de la qualit&eacute; et des proc&eacute;dures d&rsquo;&eacute;talonnage devraient &ecirc;tre en place pour s&rsquo;assurer que les dosim&egrave;tres fonctionnent correctement. En particulier, si l&rsquo;on utilise des dosim&egrave;tres actifs comportant des tubes GM comme d&eacute;tecteurs, il faut tenir compte de leur sous r&eacute;ponse potentiellement importante aux champs de d&eacute;bits de dose &eacute;lev&eacute;s (&gt; 100 mSv/h).</p>
<h4>5.1.4	D&eacute;tecteur solide de traces nucl&eacute;aires</h4>  <p>Un d&eacute;tecteur solide de traces nucl&eacute;aires comporte une mati&egrave;re plastique appel&eacute;e CR&ndash;39 (compos&eacute;e de carbonate d&rsquo;allylglycol). La technologie CR&ndash;39 est bas&eacute;e sur la r&eacute;action des neutrons avec le mat&eacute;riau dans le d&eacute;tecteur. La r&eacute;action produit des particules charg&eacute;es, comme des protons, au site d&rsquo;interaction. Les protons produisent des traces dans le dosim&egrave;tre, qui sont rendues visibles par une proc&eacute;dure de gravure chimique. Apr&egrave;s la gravure, on compte les traces pour d&eacute;terminer la dose.</p>
<h4>5.1.5	Radiam&egrave;tres &agrave; neutrons transportables</h4>  <p>Les radiam&egrave;tres &agrave; neutrons transportables sont con&ccedil;us de mani&egrave;re &agrave; r&eacute;agir &agrave; des neutrons ayant une large gamme d&rsquo;&eacute;nergies. Ces radiam&egrave;tres sont habituellement plac&eacute;s dans un endroit sur le lieu de travail o&ugrave; les lectures de rayonnement sont les plus &eacute;lev&eacute;es. En int&eacute;grant le d&eacute;bit de dose sur la p&eacute;riode de temps que les travailleurs passent &agrave; cet endroit, on peut estimer les doses et les attribuer &agrave; chaque travailleur. Avec cette m&eacute;thode de mesure, on utilise le d&eacute;bit de dose le plus &eacute;lev&eacute; mesur&eacute; par le radiam&egrave;tre &agrave; neutrons. Cela permet de s&rsquo;assurer que les doses attribu&eacute;es qui en r&eacute;sultent demeurent prudentes.</p>
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
<h3 id="sec5-2">5.2	Dosim&eacute;trie du corps entier</h3>  <p>Les dosim&egrave;tres les plus couramment utilis&eacute;s sont ceux qui servent &agrave; d&eacute;terminer la dose efficace externe re&ccedil;ue par le corps entier et/ou la dose &eacute;quivalente re&ccedil;ue par la peau du corps entier &agrave; la suite d&rsquo;une exposition externe aux photons, au rayonnement b&ecirc;ta et aux &eacute;lectrons. Ces dosim&egrave;tres sont commun&eacute;ment appel&eacute;s &laquo; dosim&egrave;tres de corps entier &raquo; ou &laquo; badges de corps entier &raquo;, et sont g&eacute;n&eacute;ralement port&eacute;s sur le devant du torse entre la taille et le cou. Les dosim&egrave;tres de corps entier mesurent les grandeurs H<sub>p</sub>(10) et/ou H<sub>p</sub>(0,07). Les technologies de dosim&egrave;tre les plus couramment utilis&eacute;es pour le corps entier comprennent les DTL, les DLSO et les DLD.</p>  <p>Dans certaines situations, l&rsquo;utilisation de plusieurs dosim&egrave;tres pour le corps entier (commun&eacute;ment appel&eacute;s &laquo; badges multiples &raquo;) est plus appropri&eacute;e pour d&eacute;terminer la dose efficace externe que l&rsquo;utilisation d&rsquo;un dosim&egrave;tre de corps entier port&eacute; sur le tronc. Ces situations se produisent lorsque l&rsquo;exposition des travailleurs au rayonnement n&rsquo;est pas uniforme.</p>
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
<h3 id="sec5-3">5.3	Dosim&eacute;trie multiple du corps entier</h3>  <p>L&rsquo;orientation fournie dans cette section sur l&rsquo;utilisation de dosim&egrave;tres multiples du corps entier est bas&eacute;e sur le document de l&rsquo;American National Standards Institute, ANSI/HPS N.13.41-2011, <span lang="en"><em>Criteria for Performing Multiple Dosimetry</em></span> [6].</p>  <p>Dans les situations suivantes, l&rsquo;exposition radiologique n&rsquo;est pas uniforme, ce qui pourrait n&eacute;cessiter l&rsquo;utilisation de dosim&egrave;tres multiples du corps entier.</p>
<ol>
<li>Les travailleurs portent des v&ecirc;tements de protection ou des blindages corporels partiels, comme dans les exemples suivants :
<ol className="list-lower-alpha">
<li>tabliers de plomb port&eacute;s pour prot&eacute;ger les travailleurs qui devraient se trouver dans une salle d&rsquo;imagerie diagnostique au moment d&rsquo;une exposition;</li>
<li>blindages corporels partiels utilis&eacute;s dans les laboratoires de radio-isotopes, o&ugrave; la table de travail comporte un blindage pour prot&eacute;ger les travailleurs qui pr&eacute;parent des produits radiopharmaceutiques.</li>
</ol></li>
<li>Les travailleurs sont tenus de maintenir une position relativement constante par rapport &agrave; un champ localis&eacute;, comme dans les exemples suivants :
<ol className="list-lower-alpha">
<li>les travaux d&rsquo;entretien d&rsquo;une chaudi&egrave;re dans une centrale nucl&eacute;aire, o&ugrave; la partie sup&eacute;rieure du corps pourrait &ecirc;tre expos&eacute;e &agrave; des niveaux de rayonnement plus &eacute;lev&eacute;s que la partie inf&eacute;rieure;</li>
<li>le travail effectu&eacute; &agrave; proximit&eacute; imm&eacute;diate d&rsquo;une source de rayonnement localis&eacute;e, de sorte que les parties du corps les plus proches de la source se trouvent dans un champ plus intense que le reste de l&rsquo;organisme.</li>
</ol></li>
<li>Les t&acirc;ches qui sont effectu&eacute;es &agrave; proximit&eacute; de fuites de rayonnement, telles que des fissures ou des petits trous dans les mat&eacute;riaux de blindage.</li>
<li>Les travailleurs sont expos&eacute;s sur les c&ocirc;t&eacute;s du corps oppos&eacute;s &agrave; l&rsquo;endroit o&ugrave; le dosim&egrave;tre est habituellement port&eacute;, par exemple dans le cas de travaux d&rsquo;entretien qui exigent de plonger dans les piscines de stockage du combustible nucl&eacute;aire us&eacute;, et o&ugrave; il existe un risque d&rsquo;exposition &agrave; des d&eacute;bits de dose &eacute;lev&eacute;s sous plusieurs angles diff&eacute;rents.</li>
</ol>  <p>La section 5.3.1 fournit de l&rsquo;orientation pour les situations 1 &agrave; 3 ci-dessus.</p>  <p>Pour la situation 4, le nombre de dosim&egrave;tres requis doit &ecirc;tre d&eacute;termin&eacute; au cas par cas : un dosim&egrave;tre devrait &ecirc;tre port&eacute; &agrave; l&rsquo;endroit habituel et des dosim&egrave;tres suppl&eacute;mentaires aux autres endroits expos&eacute;s du corps. La dose efficace externe sera alors calcul&eacute;e &agrave; l&rsquo;aide d&rsquo;un algorithme appropri&eacute; tenant compte de la situation d&rsquo;exposition. Une &eacute;valuation devrait &ecirc;tre effectu&eacute;e au cas par cas pour d&eacute;terminer quel algorithme convient.</p>  <p>Bien que l&rsquo;on puisse utiliser en tout temps plusieurs dosim&egrave;tres de corps entier pour obtenir des estimations de dose plus pr&eacute;cises, l&rsquo;utilisation de plusieurs dosim&egrave;tres est fortement recommand&eacute;e lorsque les deux conditions suivantes sont r&eacute;unies.</p>  <p>L&rsquo;&eacute;quivalent de dose individuel pour toute partie du corps (comme la t&ecirc;te) peut varier de 50 % par rapport &agrave; l&rsquo;&eacute;quivalent de dose individuel qui serait mesur&eacute; par le dosim&egrave;tre s&rsquo;il &eacute;tait port&eacute; &agrave; son emplacement habituel (sur le tronc).</p>  <p>L&rsquo;&eacute;quivalent de dose individuel r&eacute;sultant pourrait d&eacute;passer de 10 % une limite de dose lorsqu&rsquo;une composante importante de la dose efficace due &agrave; des sources externes provient d&rsquo;un champ de rayonnement non uniforme.</p>  <p>Lorsqu&rsquo;il a &eacute;t&eacute; d&eacute;termin&eacute; qu&rsquo;un travailleur ex&eacute;cutera des t&acirc;ches pr&eacute;cises en portant plusieurs dosim&egrave;tres de corps entier, en plus de son travail r&eacute;gulier dans un champ uniforme o&ugrave; un contr&ocirc;le r&eacute;gulier est utilis&eacute;, on devrait alors remettre au travailleur un ensemble sp&eacute;cial de dosim&egrave;tres qu&rsquo;il portera pendant le travail sp&eacute;cifique, au lieu du dosim&egrave;tre de contr&ocirc;le r&eacute;gulier. La dose totale au travailleur est la somme de la dose associ&eacute;e au travail dans le champ de rayonnement uniforme o&ugrave; un contr&ocirc;le r&eacute;gulier est effectu&eacute; et des doses re&ccedil;ues pendant une ou plusieurs p&eacute;riodes de travail dans un champ non uniforme o&ugrave; plusieurs dosim&egrave;tres sont utilis&eacute;s.</p>  <p>L&rsquo;emplacement des dosim&egrave;tres multiples devrait &ecirc;tre clairement document&eacute;. Un dosim&egrave;tre port&eacute; sur une partie du corps recouverte d&rsquo;un tablier de plomb devrait &ecirc;tre port&eacute; entre le tablier de plomb et le corps.</p>  <p>Le nombre de dosim&egrave;tres n&eacute;cessaires, pour la dosim&eacute;trie avec plusieurs dosim&egrave;tres, d&eacute;pend du champ de rayonnement, du travail &agrave; effectuer, de l&rsquo;emplacement du travailleur par rapport aux sources de rayonnement et du niveau d&rsquo;information que l&rsquo;on d&eacute;sire obtenir avec la dosim&eacute;trie multiple.</p>
<h4>5.3.1	Calcul de la dose efficace externe au corps entier &agrave; l&rsquo;aide de plusieurs dosim&egrave;tres</h4>  <p>Pour estimer la dose efficace externe, E, on calcule la somme pond&eacute;r&eacute;e des doses lues par plusieurs dosim&egrave;tres. &Agrave; cette fin, on consid&egrave;re que le corps est compos&eacute; de plusieurs &laquo; compartiments &raquo;, chaque compartiment &eacute;tant contr&ocirc;l&eacute; par un dosim&egrave;tre assign&eacute;.</p>  <p>Des facteurs de pond&eacute;ration (WC) ont &eacute;t&eacute; &eacute;labor&eacute;s pour les divers compartiments ou parties du corps. Ces facteurs de pond&eacute;ration sont bas&eacute;s sur la publication 103 de la CIPR, <em>Recommandations 2007 de la Commission internationale de protection radiologique</em> [7], les facteurs de pond&eacute;ration pour les tissus tenant compte de la radiosensibilit&eacute; des diff&eacute;rents tissus et organes qui composent les divers compartiments. Les compartiments et leurs facteurs associ&eacute;s sont pr&eacute;sent&eacute;s dans le tableau 2.</p>
<p className="text-left"><strong>Tableau 2 : Compartiments et facteurs associ&eacute;s</strong></p>  <table className="">
<tr>
<th>Compartiment</th>
<th>Facteur <em>W<sub>C</sub></em></th>
</tr>
<tr>
<td>T&ecirc;te et cou</td>
<td className="text-center">0,12</td>
</tr>
<tr>
<td>Thorax, au-dessus du diaphragme</td>
<td className="text-center">0,40</td>
</tr>
<tr>
<td>Abdomen, y compris le bassin</td>
<td className="text-center">0,46</td>
</tr>
<tr>
<td>Bras droit sup&eacute;rieur, y compris le coude</td>
<td className="text-center">0,005</td>
</tr>
<tr>
<td>Bras gauche sup&eacute;rieur, y compris le coude</td>
<td className="text-center">0,005</td>
</tr>
<tr>
<td>Cuisse droite, y compris le genou</td>
<td className="text-center">0,005</td>
</tr>
<tr>
<td>Cuisse gauche, y compris le genou</td>
<td className="text-center">0,005</td>
</tr>  </table>
<p>L&rsquo;&eacute;quivalent de dose, H<sub>p</sub>(10), pour chaque compartiment pourrait &ecirc;tre d&eacute;termin&eacute; &agrave; l&rsquo;aide des r&eacute;sultats fournis par le dosim&egrave;tre port&eacute; &agrave; cet endroit du corps. S&rsquo;il n&rsquo;y a pas de dosim&egrave;tre plac&eacute; sur un compartiment donn&eacute;, on pourrait alors, si c&rsquo;est appropri&eacute;, utiliser l&rsquo;&eacute;quivalent de dose d&eacute;termin&eacute; par un dosim&egrave;tre plac&eacute; &agrave; un endroit proche du corps et qui est prot&eacute;g&eacute; de la m&ecirc;me mani&egrave;re.</p>  <p>La composante externe de la dose efficace au corps entier, E, est calcul&eacute;e &agrave; l&rsquo;aide de l&rsquo;&eacute;quation suivante :</p>
<table className=" table-border-none">
<tr>  	<td className="text-center text-center" width="20">(1)</td>  	<td width="70" className="text-center">  <math display=&#39;block&#39;>   <semantics>
<mrow>
<mi>E</mi><mo>=</mo><mstyle displaystyle=&#39;true&#39;>
<mo>&#x2211;</mo> <mrow>
<msub>
<mi>W</mi>
<mi>C</mi>
</msub>
<msub>
<mi>H</mi>
<mrow>
<mi>p</mi><mo>,</mo><mi>C</mi></mrow>
</msub>
<mo stretchy=&#39;false&#39;>(</mo><mn>10</mn><mo stretchy=&#39;false&#39;>)</mo></mrow>
</mstyle></mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaamyraiabg2
da9maaqaeabaGaam4vamaaBaaaleaacaWGdbaabeaakiaadIeadaWg
aaWcbaGaamiCaiaacYcacaWGdbaabeaakiaacIcacaaIXaGaaGimai
aacMcaaSqabeqaniabggHiLdaaaa@41F2@
</annotation>   </semantics>  </math>
</td>  	</tr>  </table>
<p>o&ugrave; :</p>  <p>W<sub>C</sub>&nbsp;&nbsp;est le facteur du compartiment   (sans unit&eacute;)</p>  <p>H<sub>p,C</sub>&nbsp;&nbsp;est l&rsquo;&eacute;quivalent de dose assign&eacute; au compartiment <em>C</em> 	mSv</p>  <p>Si on a besoin d&rsquo;une m&eacute;thode plus complexe pour combiner les r&eacute;sultats des dosim&egrave;tres, on trouvera plus d&rsquo;orientation dans le document de l&rsquo;American National Standards Institute, ANSI/HPS N.13.41-2011, <span lang="en"><em>Criteria for Performing Multiple Dosimetry</em></span>. Par exemple, dans certaines situations, on peut envisager le port d&rsquo;un collier au cou (aussi appel&eacute; collier thyro&iuml;dien) en plus du tablier de plomb. Dans ce cas, on pourrait ajuster le mod&egrave;le, car le cou est prot&eacute;g&eacute; par le collier.</p>  <h5>Exemple de calcul</h5>  <p>Lorsqu&rsquo;un travailleur porte un tablier de plomb, il devrait &eacute;galement porter deux dosim&egrave;tres (un sur le thorax et un sur la t&ecirc;te ou le cou). Un exemple de calcul est fourni ci dessous, pour la situation courante dans laquelle le travailleur porte un tablier de plomb couvrant le thorax, l&rsquo;abdomen et les cuisses. Dans cet exemple, le travailleur porte un dosim&egrave;tre sur la t&ecirc;te ou le cou faisant face &agrave; la source de rayonnement et un dosim&egrave;tre sur le tronc sous le tablier, face &agrave; la source de rayonnement. Le dosim&egrave;tre de t&ecirc;te/cou mesure l&rsquo;&eacute;quivalent de dose individuel &agrave; la t&ecirc;te et au cou et aux bras non prot&eacute;g&eacute;s. Le dosim&egrave;tre du tronc port&eacute; sous le tablier mesure l&rsquo;&eacute;quivalent de dose individuel au thorax, &agrave; l&rsquo;abdomen et aux cuisses. Le tableau 3 pr&eacute;sente un exemple de calcul de la composante externe de la dose efficace pour chaque compartiment.</p>
<p className="text-left"><strong>Tableau 3 : Exemple de calcul de la composante externe de la dose efficace pour chaque compartiment</strong></p>  <table className="">
<tr>
<th className="text-center">Compartiment</th>
<th className="text-center">Facteur <em>W<sub>C</sub></em></th>
<th className="text-center">Dosim&egrave;tre assign&eacute;</th>
<th>&Eacute;quivalent de dose individuel, <em>H<sub>p,C</sub></em> (mSv)</th>
<th className="text-center">Dose efficace pour le compartiment, <em>E<sub>C</sub></em> (mSv)</th>
</tr>
<tr>
<td>T&ecirc;te et cou</td>
<td className="text-center text-center">0,12</td>
<td className="text-center text-center">T&ecirc;te/cou</td>
<td className="text-center text-center">5,0</td>
<td className="text-center text-center">0,6</td>
</tr>
<tr>
<td>Thorax, au-dessus du diaphragme</td>
<td className="text-center text-center">0,40</td>
<td className="text-center text-center">Tronc</td>
<td className="text-center text-center">0,2</td>
<td className="text-center text-center">0,08</td>
</tr>
<tr>
<td>Abdomen, y compris le bassin</td>
<td className="text-center text-center">0,46</td>
<td className="text-center text-center">Tronc</td>
<td className="text-center text-center">0,2</td>
<td className="text-center text-center">0,092</td>
</tr>
<tr>
<td>Bras droit sup&eacute;rieur, y compris le coude</td>
<td className="text-center text-center">0,005</td>
<td className="text-center text-center">T&ecirc;te/cou</td>
<td className="text-center text-center">5.0</td>
<td className="text-center text-center">0.025</td>
</tr>
<tr>
<td>Bras gauche sup&eacute;rieur, y compris le coude</td>
<td className="text-center text-center">0,005</td>
<td className="text-center text-center">T&ecirc;te/cou</td>
<td className="text-center text-center">5,0</td>
<td className="text-center text-center">0,025</td>
</tr>
<tr>
<td>Cuisse droite, y compris le genou</td>
<td className="text-center text-center">0,005</td>
<td className="text-center text-center">Tronc</td>
<td className="text-center text-center">0,2</td>
<td className="text-center text-center">0,001</td>
</tr>
<tr>
<td>Cuisse gauche, y compris le genou</td>
<td className="text-center text-center">0,005</td>
<td className="text-center text-center">Tronc</td>
<td className="text-center text-center">0,2</td>
<td className="text-center text-center">0,001</td>
</tr>  </table>  <p>Par cons&eacute;quent, en additionnant la dose efficace pour chaque compartiment, la dose efficace externe au corps entier est de 0,82 mSv.</p>
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
<h3 id="sec5-4">5.4	Dosim&eacute;trie des extr&eacute;mit&eacute;s</h3>  <p>L&rsquo;exposition non uniforme de la peau des extr&eacute;mit&eacute;s (mains et pieds) est un cas particulier, comme en t&eacute;moigne une limite de dose distincte utilis&eacute;e pour l&rsquo;&eacute;quivalent de dose pour les mains et les pieds. La norme ANSI/HPS N13.41-2011 de l&rsquo;American National Standards Institute d&eacute;finit la main comme &eacute;tant le bras sous le coude et le pied comme &eacute;tant la jambe sous le genou [6].</p>  <p>Une personne qui manipule des sources radioactives avec la main pourrait devoir porter des dosim&egrave;tres d&rsquo;extr&eacute;mit&eacute; afin de mesurer ad&eacute;quatement la dose &eacute;quivalente &agrave; la peau de la main. La m&eacute;decine nucl&eacute;aire et le traitement du combustible nucl&eacute;aire sont deux exemples de secteurs industriels o&ugrave; les travailleurs portent parfois des dosim&egrave;tres d&rsquo;extr&eacute;mit&eacute;. Dans ces situations, l&rsquo;administration de substances nucl&eacute;aires ou le traitement du combustible nucl&eacute;aire pourrait exposer la peau des mains d&rsquo;un travailleur &agrave; des niveaux de rayonnement plus &eacute;lev&eacute;s que la peau du reste du corps. Les travailleurs des centrales nucl&eacute;aires portent &eacute;galement des dosim&egrave;tres d&rsquo;extr&eacute;mit&eacute; lorsque leurs fonctions les am&egrave;nent &agrave; entrer en contact proche avec des mati&egrave;res radioactives.</p>  <p>Le RRP exige que l&rsquo;on ait recours &agrave; un service de dosim&eacute;trie autoris&eacute; pour contr&ocirc;ler les doses de rayonnement re&ccedil;ues par les TSN qui pr&eacute;sentent une probabilit&eacute; raisonnable de recevoir sur la peau une dose &eacute;quivalente sup&eacute;rieure &agrave; 50 mSv au cours d&rsquo;une p&eacute;riode de dosim&eacute;trie d&rsquo;un an. Afin de d&eacute;terminer si les dosim&egrave;tres d&rsquo;extr&eacute;mit&eacute; sont n&eacute;cessaires (c.-&agrave;-d., s&rsquo;il existe une probabilit&eacute; raisonnable de recevoir une dose &eacute;quivalente sup&eacute;rieure &agrave; 50 mSv), on peut utiliser un instrument de contr&ocirc;le du rayonnement pour estimer les doses aux mains ou aux pieds r&eacute;sultant des activit&eacute;s professionnelles &agrave; effectuer. Une autre option serait d&rsquo;utiliser le contr&ocirc;le direct pour les mains et/ou les pieds et d&rsquo;&eacute;valuer s&rsquo;il est n&eacute;cessaire d&rsquo;utiliser un service de dosim&eacute;trie autoris&eacute;, en fonction des r&eacute;sultats. Les extr&eacute;mit&eacute;s devraient &ecirc;tre contr&ocirc;l&eacute;es chaque fois qu&rsquo;il y a une incertitude quant &agrave; l&rsquo;application du crit&egrave;re relatif aux dosim&egrave;tres d&rsquo;extr&eacute;mit&eacute;.</p>  <p>On emploie les dosim&egrave;tres d&rsquo;extr&eacute;mit&eacute; pour mesurer la grandeur H<sub>p</sub>(0,07) et ces dosim&egrave;tres devraient &ecirc;tre port&eacute;s sur ou aussi pr&egrave;s que possible de la zone de 1 cm<sup>2</sup> de l&rsquo;extr&eacute;mit&eacute; qui re&ccedil;oit la dose maximale. La pratique courante consiste &eacute;galement &agrave; porter des dosim&egrave;tres d&rsquo;extr&eacute;mit&eacute; sur les deux mains. Le contr&ocirc;le se fait plus souvent &agrave; l&rsquo;aide de DTL sous forme de bagues pour les doigts, ou de DTL sous forme de puces qui sont fix&eacute;es par ruban adh&eacute;sif ou attach&eacute;s aux extr&eacute;mit&eacute;s. Dans certains cas, un dosim&egrave;tre de corps entier est port&eacute; au poignet ou &agrave; la cheville &agrave; l&rsquo;aide d&rsquo;un bracelet.</p>  <p>Les instructions sur le port du dosim&egrave;tre, fournies par le fournisseur de services de dosim&eacute;trie, devraient &ecirc;tre respect&eacute;es. Cependant, en g&eacute;n&eacute;ral, le dosim&egrave;tre d&rsquo;extr&eacute;mit&eacute; devrait &ecirc;tre port&eacute; pr&egrave;s de la peau, &agrave; l&rsquo;int&eacute;rieur de tout v&ecirc;tement qui prot&egrave;ge la peau de l&rsquo;exposition aux photons de faible &eacute;nergie et aux particules b&ecirc;ta et aux &eacute;lectrons. En pla&ccedil;ant le dosim&egrave;tre sous le v&ecirc;tement, on le prot&egrave;ge &eacute;galement d&rsquo;une contamination potentielle.</p>  <p>&Eacute;tant donn&eacute; que les limites de dose &eacute;quivalentes s&rsquo;appliquent &agrave; chaque extr&eacute;mit&eacute; s&eacute;par&eacute;ment, les doses aux diff&eacute;rentes extr&eacute;mit&eacute;s devraient &ecirc;tre enregistr&eacute;es s&eacute;par&eacute;ment.</p>
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
<h3 id="sec5-5">5.5	Dosim&eacute;trie du cristallin</h3>  <p>On devrait &eacute;valuer et documenter les risques en milieu de travail afin de d&eacute;terminer si les travailleurs courent un risque plus &eacute;lev&eacute; de recevoir une exposition &eacute;lev&eacute;e au cristallin. S&rsquo;il est d&eacute;termin&eacute; que les travailleurs encourent un risque plus &eacute;lev&eacute;, on devrait &eacute;valuer les doses au cristallin. Ces situations comprennent :</p>
<ul>
<li>les travailleurs soumis &agrave; une exposition non uniforme de l&rsquo;&oelig;il</li>
<li>les travailleurs expos&eacute;s &agrave; des rayonnements faiblement p&eacute;n&eacute;trants qui contribuent &agrave; la dose au cristallin, mais moins, voire pas du tout, &agrave; la dose efficace (c.-&agrave;-d. la dose au corps entier)</li>
</ul>  <p>Il faudrait examiner et &eacute;valuer les risques en milieu de travail afin de d&eacute;terminer si des mesures suppl&eacute;mentaires s&rsquo;imposent pour mieux prot&eacute;ger les travailleurs contre la radioexposition du cristallin. Dans certains cas, on pourrait r&eacute;duire efficacement les doses au cristallin, notamment par les mesures suivantes :</p>
<ul>
<li>le recours &agrave; des contr&ocirc;les techniques qui, id&eacute;alement, devraient &ecirc;tre envisag&eacute;s d&egrave;s le stade de conception des installations et de l&rsquo;&eacute;quipement</li>
<li>l&rsquo;utilisation d&rsquo;un &eacute;quipement de protection individuelle, notamment des lunettes de protection</li>
<li>l&rsquo;utilisation de contr&ocirc;les administratifs, notamment les exigences et les restrictions concernant les proc&eacute;dures</li>
</ul>  <p>Si les doses au cristallin ont une probabilit&eacute; raisonnable de d&eacute;passer 15 mSv/an, on devrait proc&eacute;der &agrave; un contr&ocirc;le direct avec un dosim&egrave;tre passif. La grandeur op&eacute;rationnelle mesur&eacute;e (H<sub>p</sub>(3), H<sub>p</sub>(10) ou H<sub>p</sub>(0,07)) d&eacute;pendra de la situation d&rsquo;exposition, qui devrait &ecirc;tre &eacute;valu&eacute;e dans le cadre de l&rsquo;&eacute;valuation des risques en milieu de travail.</p>  <p>Lorsqu&rsquo;on &eacute;value les risques en milieu de travail, il faudrait d&eacute;terminer si certains travailleurs appartiennent &agrave; l&rsquo;une des deux cat&eacute;gories suivantes :</p>
<ul>
<li>les travailleurs expos&eacute;s &agrave; des rayonnements faiblement p&eacute;n&eacute;trants, tels que les particules b&ecirc;ta ou les photons de faibles &eacute;nergies (c.-&agrave;-d. &eacute;nergies inf&eacute;rieures &agrave; environ 40 keV) &ndash; il est &agrave; noter que le rayonnement b&ecirc;ta n&eacute;cessite une &eacute;nergie maximale sup&eacute;rieure &agrave; 700 keV pour p&eacute;n&eacute;trer jusqu&rsquo;&agrave; la profondeur sensible du cristallin. Par cons&eacute;quent, les &eacute;nergies b&ecirc;ta inf&eacute;rieures &agrave; 700 keV n&rsquo;ont pas &agrave; &ecirc;tre prises en compte</li>
<li>les travailleurs expos&eacute;s &agrave; des champs de rayonnement non uniformes, notamment dans les situations suivantes :
<ul>
<li>la t&ecirc;te est plus pr&egrave;s de la source de rayonnement que le reste du corps (p. ex., lors de l&rsquo;observation ou de la manipulation d&rsquo;une source radioactive, notamment lorsqu&rsquo;on regarde de pr&egrave;s une seringue contenant des isotopes m&eacute;dicaux ou qu&rsquo;on inspecte des pastilles de combustible fabriqu&eacute;es)</li>
<li>le tronc du corps est prot&eacute;g&eacute; (p. ex., par un &eacute;quipement ou un dispositif de protection), mais que les yeux ne le sont pas</li>
</ul></li>
</ul>  <p>Si les travailleurs appartiennent &agrave; l&rsquo;une des deux cat&eacute;gories ci-dessus, ou aux deux, la nature de l&rsquo;exposition devrait &ecirc;tre document&eacute;e et les m&eacute;thodes d&rsquo;&eacute;valuation des doses au cristallin devraient &ecirc;tre d&eacute;termin&eacute;es. Le contr&ocirc;le individuel du cristallin comprend ce qui suit :</p>
<ul>
<li>le port de dosim&egrave;tres pr&egrave;s du cristallin qui mesurent la grandeur H<sub>p</sub>(3)</li>
<li>le port de dosim&egrave;tres pr&egrave;s des yeux ou sur d&rsquo;autres parties du corps qui mesurent les grandeurs H<sub>p</sub>(10) ou H<sub>p</sub>(0,07)</li>
</ul>  <p>Si les travailleurs ne sont pas vis&eacute;s par l&rsquo;une ou l&rsquo;autre de ces deux situations, on peut supposer que les doses au cristallin sont &eacute;quivalentes &agrave; H<sub>p</sub>(10) ou &agrave; H<sub>p</sub>(0,07), et que les doses pourraient &ecirc;tre mesur&eacute;es par des dosim&egrave;tres du corps entier port&eacute;s sur le tronc. Ainsi, le respect des limites de la dose efficace assurera &eacute;galement le respect des limites de dose &eacute;quivalente pour le cristallin.</p>  <p>Les tableaux A.1 et A.2 de l&rsquo;annexe A donnent de l&rsquo;orientation pr&eacute;cise sur la fa&ccedil;on de choisir le dosim&egrave;tre appropri&eacute; pour diverses situations. Cette orientation est fond&eacute;e sur l&rsquo;information tir&eacute;e du document de l&rsquo;AIEA TECDOC 1731, <span lang="en"><em>Implications for Occupational Radiation Protection of the New Dose Limit for the Lens of the Eye</em></span> [8]. Veuillez consulter ce document pour de plus amples renseignements.</p>  <p>Le dosim&egrave;tre choisi pour mesurer la grandeur H<sub>p</sub>(3) devrait avoir le filtre appropri&eacute; pour mesurer l&rsquo;&eacute;quivalent de dose &agrave; une profondeur de 3 mm. Les dosim&egrave;tres devraient &eacute;galement &ecirc;tre capables de mesurer une gamme de doses appropri&eacute;es pour les doses potentielles aux travailleurs et convenir aux champs de rayonnement que l&rsquo;on trouve sur le lieu de travail. On devrait consulter les fournisseurs de services de dosim&eacute;trie pour s&rsquo;assurer que les dosim&egrave;tres conviennent &agrave; l&rsquo;environnement de travail o&ugrave; ils pourraient &ecirc;tre utilis&eacute;s. Il faudrait donc choisir un fournisseur de services de dosim&eacute;trie disposant d&rsquo;une proc&eacute;dure d&rsquo;&eacute;talonnage et d&rsquo;un syst&egrave;me de gestion ad&eacute;quats.</p>  <p>Pour ce qui est du contr&ocirc;le du rayonnement neutronique pouvant affecter le cristallin, voir la section 5.6.</p>  <p>Lorsque l&rsquo;on porte un dosim&egrave;tre pr&egrave;s des yeux pour contr&ocirc;ler la dose au cristallin, on devrait &eacute;valuer l&rsquo;endroit o&ugrave; il devra &ecirc;tre port&eacute; (p. ex., c&ocirc;t&eacute; gauche de l&rsquo;&oelig;il gauche, c&ocirc;t&eacute; droit de l&rsquo;&oelig;il droit, centre du front, etc.). L&rsquo;emplacement du dosim&egrave;tre devrait correspondre &agrave; l&rsquo;endroit o&ugrave; la dose maximale sera re&ccedil;ue.</p>  <p>Il est possible de recourir &agrave; un blindage au plomb pour prot&eacute;ger les yeux contre les doses dues au rayonnement photonique. Un dispositif de blindage en plastique ne prot&egrave;ge pas les yeux contre le rayonnement photonique, mais il peut r&eacute;duire les d&eacute;bits de dose dus au rayonnement b&ecirc;ta. Si l&rsquo;on utilise une protection oculaire, le dosim&egrave;tre devrait &ecirc;tre plac&eacute; de mani&egrave;re &agrave; ce qu&rsquo;il en tienne compte. Si cela n&rsquo;est pas r&eacute;alisable, on peut utiliser un filtre qui reproduit le niveau de blindage, ou encore appliquer des facteurs de correction. Tout facteur de correction utilis&eacute; devrait &ecirc;tre justifi&eacute; et document&eacute;.</p>
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
<h3 id="sec5-6">5.6	Dosim&eacute;trie neutronique</h3>  <p>Les instruments les plus populaires utilis&eacute;s pour contr&ocirc;ler les doses professionnelles aux travailleurs pouvant &ecirc;tre expos&eacute;s aux neutrons sont les d&eacute;tecteurs solides de traces nucl&eacute;aires et les radiam&egrave;tres &agrave; neutrons transportables.</p>  <p>Les dosim&egrave;tres &agrave; neutrons individuels sont g&eacute;n&eacute;ralement port&eacute;s sur le devant du torse, entre la taille et le cou, et sont souvent attach&eacute;s au dosim&egrave;tre de corps entier utilis&eacute; pour mesurer la dose externe due au rayonnement photonique, b&ecirc;ta et &eacute;lectronique. Les dosim&egrave;tres &agrave; neutrons individuels sont g&eacute;n&eacute;ralement l&rsquo;option pr&eacute;f&eacute;r&eacute;e pour la dosim&eacute;trie des neutrons, et on devrait envisager leur utilisation lorsque la dosim&eacute;trie neutronique est requise. Les dosim&egrave;tres choisis devraient couvrir le spectre d&rsquo;&eacute;nergie des neutrons dans le milieu de travail. Dans les cas o&ugrave; le spectre d&rsquo;&eacute;nergie de neutrons &agrave; un endroit donn&eacute; est tr&egrave;s large, on pourrait devoir utiliser plusieurs types de dosim&egrave;tres.</p>  <p>Le radiam&egrave;tre &agrave; neutrons transportable n&rsquo;est pas port&eacute; sur une personne, mais il est plut&ocirc;t plac&eacute; &agrave; l&rsquo;endroit o&ugrave; les lectures de rayonnement sont les plus &eacute;lev&eacute;es, et ces donn&eacute;es sont utilis&eacute;es pour estimer la dose re&ccedil;ue par une personne. Lors de la mesure des doses professionnelles dues aux neutrons, il est important de conna&icirc;tre le spectre d&rsquo;&eacute;nergie des neutrons dans le milieu de travail afin de choisir un appareil de mesure appropri&eacute;. Dans les cas o&ugrave; le spectre d&rsquo;&eacute;nergie des neutrons &agrave; un endroit donn&eacute; est tr&egrave;s large, on pourrait devoir utiliser plusieurs types de dosim&egrave;tres.</p>  <p>Il convient d&rsquo;utiliser les radiam&egrave;tres &agrave; neutrons transportables aux fins de dosim&eacute;trie seulement lorsqu&rsquo;ils constituent la meilleure option pour d&eacute;terminer les doses aux travailleurs dues au rayonnement neutronique. Les radiam&egrave;tres &agrave; neutrons transportables ne devraient pas &ecirc;tre utilis&eacute;s dans les zones de travail o&ugrave; les d&eacute;bits de dose neutronique varient dans l&rsquo;espace, car l&rsquo;instrument pourrait ne pas refl&eacute;ter les doses re&ccedil;ues par les travailleurs. Si l&rsquo;on utilise des radiam&egrave;tres &agrave; neutrons transportables aux fins de dosim&eacute;trie, les donn&eacute;es et les rapports devraient d&eacute;montrer qu&rsquo;il n&rsquo;y a pas de variation spatiale appr&eacute;ciable des d&eacute;bits de dose et que les radiam&egrave;tres &agrave; neutrons transportables sont la meilleure option pour la dosim&eacute;trie, compte tenu du milieu de travail et du spectre d&rsquo;&eacute;nergie des neutrons.</p>  <p>Les dosim&egrave;tres &agrave; neutrons sont utilis&eacute;s pour mesurer la grandeur H<sub>p</sub>(10) et devraient &ecirc;tre port&eacute;s sur le tronc du corps, entre la taille et le cou, &agrave; l&rsquo;endroit o&ugrave; l&rsquo;exposition pr&eacute;vue est maximale.</p>  <p>Si les champs de rayonnement neutronique ne sont pas uniformes, des dosim&egrave;tres individuels mesurant la grandeur H<sub>p</sub>(10) due au rayonnement neutronique pourraient &ecirc;tre port&eacute;s pr&egrave;s des yeux pour fournir une estimation prudente de la dose re&ccedil;ue par le cristallin. Il est &agrave; noter que cette estimation s&rsquo;ajoute &agrave; la dosim&eacute;trie neutronique utilis&eacute;e pour contr&ocirc;ler la dose au corps entier.</p>
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
<h2 id="sec6">6. D&eacute;termination de la dose externe par estimation</h2>  <p>Bien que le contr&ocirc;le direct soit la m&eacute;thode privil&eacute;gi&eacute;e pour d&eacute;terminer les doses externes aux travailleurs, le RRP stipule que l&rsquo;on peut d&eacute;terminer ces doses &laquo; par &eacute;valuation, lorsque le temps et les ressources exig&eacute;s pour une mesure directe sont trop importants par rapport &agrave; son utilit&eacute; &raquo;. Aux fins du pr&eacute;sent document, l&rsquo;estimation fait r&eacute;f&eacute;rence &agrave; deux types de m&eacute;thodes d&rsquo;estimation des doses : le contr&ocirc;le indirect (c.-&agrave;-d. sur le lieu de travail) et la mod&eacute;lisation des doses (c.-&agrave;-d. le calcul des doses en fonction des caract&eacute;ristiques de la source, de la g&eacute;om&eacute;trie de l&rsquo;exposition et d&rsquo;autres param&egrave;tres pertinents). La pr&eacute;sente section contient de l&rsquo;orientation sur le contr&ocirc;le en milieu de travail et la mod&eacute;lisation des doses ainsi que de l&rsquo;orientation sur la fa&ccedil;on d&rsquo;&eacute;valuer la dose &eacute;quivalente &agrave; la peau &agrave; la suite d&rsquo;un incident de contamination cutan&eacute;e. Enfin, on y pr&eacute;sente les mesures d&rsquo;assurance de la qualit&eacute; qui devraient &ecirc;tre prises en compte lors de la d&eacute;termination des doses par estimation.</p>
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
<h3 id="sec6-1">6.1	Contr&ocirc;le indirect</h3>  <p>Le contr&ocirc;le indirect, aussi appel&eacute; contr&ocirc;le en milieu de travail, consiste &agrave; mesurer le d&eacute;bit de dose dans un champ de rayonnement et &agrave; multiplier ce d&eacute;bit de dose par le temps d&rsquo;occupation de chaque travailleur dans ce champ. Le contr&ocirc;le en milieu de travail fournit des renseignements sur les d&eacute;bits de dose dans un lieu de travail donn&eacute; et permet de planifier le travail et le contr&ocirc;le de l&rsquo;exposition. On peut utiliser ce type de contr&ocirc;le pour r&eacute;aliser des &eacute;valuations prospectives des doses en tant qu&rsquo;outil de planification. On peut &eacute;galement l&rsquo;employer pour faire des &eacute;valuations r&eacute;trospectives des doses, par exemple dans les situations o&ugrave; les doses sont faibles et constantes dans le temps.</p>  <p>Aux fins de l&rsquo;estimation des doses individuelles, les mesures sur le lieu de travail ne devraient &ecirc;tre utilis&eacute;es que pour les champs de rayonnement qui sont uniformes et constants dans le temps. Les endroits de contr&ocirc;le en milieu de travail devraient &ecirc;tre repr&eacute;sentatifs du temps d&rsquo;occupation des travailleurs dans ce champ. Si le champ de rayonnement est uniforme dans l&rsquo;espace et dans le temps, seuls quelques points de contr&ocirc;le pourraient s&rsquo;av&eacute;rer n&eacute;cessaires. On devrait &eacute;valuer les lieux o&ugrave; le contr&ocirc;le indirect est effectu&eacute; pour d&eacute;terminer les endroits o&ugrave; il convient de placer les instruments, et le nombre requis d&rsquo;instruments. Le nombre d&rsquo;endroits de mesure dans le lieu de travail devrait &ecirc;tre augment&eacute; lorsque les champs de rayonnement ne sont pas uniformes dans l&rsquo;espace. Il faudrait prendre les mesures imm&eacute;diatement apr&egrave;s des changements ambiants susceptibles d&rsquo;avoir une incidence sur les r&eacute;sultats du contr&ocirc;le. Si les changements sont fr&eacute;quents ou soudains, le contr&ocirc;le devrait &ecirc;tre continu. Lors de la d&eacute;termination des doses sur la base du contr&ocirc;le en milieu de travail, les r&eacute;sultats du contr&ocirc;le devraient &ecirc;tre repr&eacute;sentatifs de toutes les zones de travail o&ugrave; les doses sont d&eacute;termin&eacute;es de cette mani&egrave;re. Les donn&eacute;es du contr&ocirc;le en milieu de travail, y compris le moment et l&rsquo;endroit associ&eacute;s &agrave; chaque mesure et le r&eacute;sultat connexe, devraient &ecirc;tre document&eacute;es.</p>  <p>Pour le contr&ocirc;le en milieu de travail visant &agrave; estimer les doses individuelles, il faudrait utiliser des instruments appropri&eacute;s. Pour les champs de rayonnement mixtes, il pourrait &ecirc;tre n&eacute;cessaire d&rsquo;utiliser plus d&rsquo;un type d&rsquo;instrument. Afin de s&rsquo;assurer que le contr&ocirc;le en milieu de travail est appropri&eacute;, les instruments utilis&eacute;s devraient &ecirc;tre :</p>
<ul>
<li>s&eacute;lectionn&eacute;s pour mesurer les types et les &eacute;nergies des rayonnements pr&eacute;sents</li>
<li>s&eacute;lectionn&eacute;s pour couvrir la gamme des d&eacute;bits de dose pr&eacute;sents</li>
<li>choisis pour fonctionner dans des conditions ambiantes ou des influences ext&eacute;rieures pr&eacute;sentes</li>
<li>&eacute;talonn&eacute;s en fonction des types et des &eacute;nergies des rayonnements pr&eacute;sents</li>
<li>plac&eacute;s dans une direction et &agrave; un endroit appropri&eacute;s de mani&egrave;re &agrave; ce que les mesures refl&egrave;tent de fa&ccedil;on prudente les doses re&ccedil;ues par les travailleurs</li>
</ul>
<p>Les instruments devraient &eacute;galement &ecirc;tre choisis de mani&egrave;re &agrave; ce que la personne qui prend les mesures puisse bien voir lorsque l&rsquo;instrument est hors de sa port&eacute;e.</p>  <p>Les instruments utilis&eacute;s pour estimer les doses individuelles mesurent g&eacute;n&eacute;ralement des grandeurs op&eacute;rationnelles, soit H*(10) et/ou H&rsquo;(0,07, &Omega;). L&rsquo;explication des grandeurs op&eacute;rationnelles figure au chapitre 3. Il est important de d&eacute;terminer la grandeur op&eacute;rationnelle qu&rsquo;il convient d&rsquo;utiliser comme substitut de la grandeur assurant la protection voulue. Pour de plus amples renseignements, veuillez consulter le rapport 51 de l&rsquo;ICRU, <span lang="en"><em>Quantities and Units in Radiation Protection Dosimetry</em></span> [4]. Par exemple, on pourrait utiliser comme substitut de dose efficace l&rsquo;&eacute;quivalent de dose ambiant, H*(10). Dans le cas d&rsquo;une exposition &agrave; un rayonnement faiblement p&eacute;n&eacute;trant, l&rsquo;&eacute;quivalent de dose ambiant H*(0,07) ou l&rsquo;&eacute;quivalent de dose directionnel H&rsquo;(0,07, 0<sup>o</sup>) pourrait &ecirc;tre utilis&eacute; comme substitut de la dose &eacute;quivalente &agrave; la peau.</p>  <p>Les m&eacute;thodes utilis&eacute;es pour d&eacute;terminer les doses aux travailleurs par un contr&ocirc;le en milieu de travail devraient &ecirc;tre conformes &agrave; ce qui suit :</p>
<ol>
<li>Le contr&ocirc;le en milieu de travail et la d&eacute;termination des doses ne devraient &ecirc;tre effectu&eacute;s que par des travailleurs form&eacute;s et qualifi&eacute;s, qui ont une bonne compr&eacute;hension des instruments choisis pour cette utilisation et qui en connaissent le fonctionnement et les limites.</li>
<li>L&rsquo;&eacute;quipement utilis&eacute; pour mesurer avec pr&eacute;cision la dose ou l&rsquo;exposition devrait &ecirc;tre contr&ocirc;l&eacute; par des proc&eacute;dures qui garantissent que cet &eacute;quipement est conforme aux exigences sp&eacute;cifi&eacute;es, afin que le r&eacute;sultat mesur&eacute; r&eacute;ponde aux besoins de dosim&eacute;trie. Plusieurs facteurs peuvent influer sur l&rsquo;exactitude et la fiabilit&eacute; des mesures, notamment :</li>
<ol className="list-lower-alpha">
<li>r&eacute;ponse d&rsquo;&eacute;nergie</li>
<li>incidence de l&rsquo;angle de rayonnement par rapport au d&eacute;tecteur</li>
<li>chocs et vibrations</li>
<li>pression atmosph&eacute;rique</li>
<li>poussi&egrave;re</li>
<li>eau</li>
<li>d&eacute;bit de dose, y compris dans les champs de rayonnement puls&eacute;</li>
<li>champs &eacute;lectriques et magn&eacute;tiques</li>
<li>temp&eacute;rature et humidit&eacute;</li>
<li>rayonnement non destin&eacute; &agrave; &ecirc;tre mesur&eacute;</li>
<li>temps de r&eacute;action</li>
<li>stabilit&eacute; de la r&eacute;ponse</li>
<li>sensibilit&eacute;</li>
<li>r&eacute;p&eacute;tabilit&eacute; des mesures</li>
</ol></li>
<li>On devrait instaurer des proc&eacute;dures d&rsquo;estimation des doses par le contr&ocirc;le en milieu de travail qui :
<ol className="list-lower-alpha">
<li>documentent toutes les activit&eacute;s professionnelles pouvant influer sur l&rsquo;attribution de la bonne dose &agrave; la bonne personne et le maintien d&rsquo;un syst&egrave;me de dossiers des doses</li>
<li>d&eacute;crivent en d&eacute;tail les m&eacute;thodes de travail et l&rsquo;&eacute;quipement &agrave; utiliser</li>
<li>sont examin&eacute;es et r&eacute;vis&eacute;es au besoin lorsque des changements dans le milieu de travail pourraient avoir une incidence sur la pr&eacute;cision, l&rsquo;exactitude et la fiabilit&eacute; des estimations de dose</li>
</ol></li>
<li>	Les pratiques suivantes devraient &ecirc;tre respect&eacute;es pour ce qui est de l&rsquo;entretien et de l&rsquo;&eacute;talonnage de l&rsquo;&eacute;quipement de contr&ocirc;le en milieu de travail :
<ol className="list-lower-alpha">
<li>L&rsquo;&eacute;quipement de contr&ocirc;le en milieu de travail devrait &ecirc;tre identifi&eacute;, contr&ocirc;l&eacute; et entretenu.</li>
<li>Les exigences d&rsquo;&eacute;talonnage et d&rsquo;entretien p&eacute;riodiques devraient &ecirc;tre d&eacute;termin&eacute;es en fonction de la pr&eacute;cision, du but, du degr&eacute; d&rsquo;utilisation, des caract&eacute;ristiques de stabilit&eacute; et d&rsquo;autres facteurs influant sur le contr&ocirc;le des mesures.</li>
<li>Les proc&eacute;dures d&rsquo;entretien et d&rsquo;&eacute;talonnage devraient &ecirc;tre document&eacute;es.</li>
<li>L&rsquo;&eacute;tat de l&rsquo;&eacute;talonnage devrait &ecirc;tre consign&eacute; et conserv&eacute;, et l&rsquo;&eacute;quipement &eacute;talonn&eacute; devrait &ecirc;tre identifi&eacute; clairement et de mani&egrave;re ind&eacute;l&eacute;bile (p. ex., par l&rsquo;utilisation d&rsquo;&eacute;tiquettes).</li>
</ol></li>
<li>Les inspections, les v&eacute;rifications et les examens devraient &ecirc;tre d&eacute;termin&eacute;s et planifi&eacute;s de mani&egrave;re &agrave; v&eacute;rifier que la m&eacute;thode de d&eacute;termination des doses aux travailleurs par le contr&ocirc;le en milieu de travail est effectu&eacute;e d&rsquo;une mani&egrave;re acceptable.</li>
</ol>
<h4>6.1.1	Facteur de consid&eacute;ration particulier pour le cristallin</h4>  <p>Le contr&ocirc;le direct est la m&eacute;thode privil&eacute;gi&eacute;e pour &eacute;valuer la dose au cristallin. Cependant, lorsque les champs de rayonnement sont pr&eacute;visibles sur de longues p&eacute;riodes, il est possible d&rsquo;estimer les doses par contr&ocirc;le indirect &agrave; des endroits pertinents. Ces emplacements devraient &ecirc;tre repr&eacute;sentatifs des conditions dans lesquelles les personnes seront expos&eacute;es. Si le contr&ocirc;le de l&rsquo;air ambiant est envisag&eacute;, on pourrait utiliser des instruments qui mesurent l&rsquo;&eacute;quivalent de dose ambiant ou l&rsquo;&eacute;quivalent de dose directionnel. Si l&rsquo;on envisage de contr&ocirc;ler l&rsquo;air ambiant, les grandeurs H<sub>p</sub>(10) et H<sub>p</sub>(0,07) pourraient &ecirc;tre remplac&eacute;es par les grandeurs H*(10) et H&rsquo;(0,07), respectivement, dans le tableau A.1 de l&rsquo;annexe A, qui donne de l&rsquo;orientation sur le contr&ocirc;le direct.</p>
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
<h3 id="sec6-2">6.2	Mod&eacute;lisation des doses</h3>  <p>La mod&eacute;lisation des doses pour d&eacute;terminer les doses externes aux travailleurs consiste &agrave; calculer les doses en fonction de la connaissance de la source et &agrave; appliquer les donn&eacute;es publi&eacute;es sur les coefficients de doses et le blindage, ou encore &agrave; utiliser des logiciels con&ccedil;us &agrave; cette fin. Divers logiciels sont offerts en ligne ou &agrave; l&rsquo;achat et permettent &agrave; l&rsquo;utilisateur de calculer les doses et les d&eacute;bits de dose pour diff&eacute;rents types de sources et de g&eacute;om&eacute;tries.</p>  <p>La mod&eacute;lisation des doses aux travailleurs ne peut &ecirc;tre utilis&eacute;e que si l&rsquo;on comprend bien les sources de rayonnement pr&eacute;sentes, les milieux de travail et les g&eacute;om&eacute;tries d&rsquo;exposition des travailleurs. Lorsqu&rsquo;on utilise des m&eacute;thodes de calcul des doses, on devrait utiliser les coefficients de dose les plus r&eacute;cents publi&eacute;s par la Commission internationale de protection radiologique, le cas &eacute;ch&eacute;ant.</p>  <p>Les m&eacute;thodes de mod&eacute;lisation des doses pour d&eacute;terminer les doses aux travailleurs devraient &ecirc;tre conformes aux pratiques de qualit&eacute; suivantes :</p>  <ul>
<li>la mod&eacute;lisation des doses ne devrait &ecirc;tre effectu&eacute;e que par des travailleurs form&eacute;s et qualifi&eacute;s</li>
<li>les proc&eacute;dures d&rsquo;estimation des doses :
<ul>
<li>devraient &ecirc;tre en place pour documenter toutes les activit&eacute;s professionnelles pouvant influer sur l&rsquo;attribution de la bonne dose &agrave; la bonne personne et le maintien d&rsquo;un syst&egrave;me de dossiers des doses</li>
<li>devraient d&eacute;crire en d&eacute;tail les m&eacute;thodes de mod&eacute;lisation de la dose</li>
<li>devraient &ecirc;tre examin&eacute;es et r&eacute;vis&eacute;es au besoin lorsque des changements dans le milieu de travail pourraient avoir une incidence sur la pr&eacute;cision, l&rsquo;exactitude et la fiabilit&eacute; des estimations de dose</li>
</ul></li>
<li>la v&eacute;rification des m&eacute;thodes et des r&eacute;sultats de la mod&eacute;lisation des doses devrait &ecirc;tre effectu&eacute;e par des personnes form&eacute;es et qualifi&eacute;es autres que celles qui ont particip&eacute; au travail v&eacute;rifi&eacute;</li>
</ul>  <p>Pour en savoir plus sur la fa&ccedil;on d&rsquo;effectuer des calculs simples de dose ou de d&eacute;bit de dose, veuillez consulter le <a href="/fra/resources/radiation/radionuclide-information"><em>Livret d&rsquo;information sur les radionucl&eacute;ides</em></a> de la CCSN.</p>
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
<h3 id="sec6-3">6.3	Contamination de la peau</h3>  <p>Cette section fournit de l&rsquo;orientation aux titulaires de permis sur l&rsquo;&eacute;valuation de la dose cutan&eacute;e &agrave; la suite d&rsquo;un incident de contamination cutan&eacute;e.</p>  <p>L&rsquo;exp&eacute;rience acquise a montr&eacute; que la plupart des cas de contamination cutan&eacute;e, s&rsquo;ils sont d&eacute;tect&eacute;s rapidement, entra&icirc;nent en fait des doses &eacute;quivalentes relativement faibles. Les principes g&eacute;n&eacute;raux d&rsquo;intervention en cas de contamination sont les suivants :</p>
<ul>
<li>les circonstances de l&rsquo;&eacute;v&eacute;nement devraient &ecirc;tre document&eacute;es, enregistr&eacute;es et faire l&rsquo;objet d&rsquo;une enqu&ecirc;te afin de s&rsquo;assurer que les pratiques de travail sont optimis&eacute;es et de r&eacute;duire au minimum la probabilit&eacute; de r&eacute;cidives</li>
<li>la dose &agrave; la peau devrait &ecirc;tre calcul&eacute;e et enregistr&eacute;e par le titulaire de permis</li>
<li>le titulaire de permis devrait signaler l&rsquo;incident conform&eacute;ment aux exigences de son permis</li>
<li>le titulaire de permis devrait pr&eacute;senter une demande de modification de dose &agrave; la CCSN pour les doses &eacute;quivalentes r&eacute;sultant d&rsquo;une contamination cutan&eacute;e sup&eacute;rieure &agrave; 50 mSv, afin de s&rsquo;assurer que la dose cutan&eacute;e est ajout&eacute;e &agrave; la dose enregistr&eacute;e du travailleur dans le FDN</li>
</ul>
<h4>6.3.1	Efficacit&eacute; des contaminam&egrave;tres</h4>  <p>L&rsquo;annexe C du REGDOC 2.7.1 pr&eacute;sente de l&rsquo;orientation concernant le contr&ocirc;le de la contamination radioactive. Cette orientation permet d&rsquo;&eacute;tablir l&rsquo;efficacit&eacute; des d&eacute;tecteurs de radionucl&eacute;ides utilis&eacute;s avant que les sources non scell&eacute;es ne soient manipul&eacute;es, m&ecirc;me si une contamination cutan&eacute;e est peu probable.</p>
<h4>6.3.2	Mesures du rayonnement de fond</h4>  <p>On devrait mesurer le taux de comptage du rayonnement de fond &agrave; l&rsquo;aide du contaminam&egrave;tre choisi, et enregistrer les r&eacute;sultats qui seront utiles ult&eacute;rieurement en cas d&rsquo;incident de contamination de la peau. Ces mesures devraient &ecirc;tre prises dans une zone &agrave; faible d&eacute;bit de dose o&ugrave; il n&rsquo;y a pas de substances nucl&eacute;aires.</p>
<h4>6.3.3	Mesure de la contamination cutan&eacute;e</h4>  <p>Des instructions &eacute;tape par &eacute;tape sont pr&eacute;sent&eacute;es ci dessous concernant la mesure et l&rsquo;enregistrement du taux de comptage net.</p>  <p>Estimer la superficie de la peau contamin&eacute;e &agrave; l&rsquo;aide du contaminam&egrave;tre.</p>  <p>Mesurer et enregistrer le taux de comptage directement au-dessus de la partie de la peau touch&eacute;e pr&eacute;sentant le taux de comptage maximal, et enregistrer l&rsquo;heure de la mesure et l&rsquo;heure de l&rsquo;&eacute;v&eacute;nement de contamination.</p>  <p>Si possible, et si un d&eacute;tecteur de rayonnement se trouve &agrave; proximit&eacute; imm&eacute;diate, la premi&egrave;re mesure devrait &ecirc;tre prise avant les t&acirc;ches de d&eacute;contamination.</p>  <p>La mesure devrait &ecirc;tre prise avec le d&eacute;tecteur plac&eacute; le plus pr&egrave;s possible de la peau, sans contact direct avec celle-ci.</p>  <p>D&eacute;terminer le taux de comptage net en coups par seconde en soustrayant le taux de comptage de fond du taux de comptage mesur&eacute; sur la peau. Si le taux de comptage net est en coups par minute, on le divise par 60 pour le convertir en coups par seconde.</p>  <p>Si le taux de comptage net est sup&eacute;rieur &agrave; z&eacute;ro, d&eacute;contaminer la peau en la lavant imm&eacute;diatement. Cependant, il ne faut pas trop laver la peau pour ne pas l&rsquo;endommager ni causer une absorption par la peau.</p>  <p>R&eacute;p&eacute;ter les &eacute;tapes 1 &agrave; 3 jusqu&rsquo;&agrave; ce que le taux de comptage net soit nul ou que les mesures subs&eacute;quentes ne diminuent plus.</p>  <p>Dans certains cas, il convient d&rsquo;extraire le plus rapidement une contamination cutan&eacute;e fixe, comme faire porter &agrave; la victime un gant imperm&eacute;able par-dessus la peau affect&eacute;e pour encourager la transpiration. On devrait consulter le responsable de la radioprotection pour obtenir des consignes sp&eacute;cifiques.</p>
<h4>6.3.4	Calcul de la dose cutan&eacute;e d&rsquo;apr&egrave;s les donn&eacute;es de contamination</h4>  <p>Si le moment de l&rsquo;&eacute;v&eacute;nement de contamination cutan&eacute;e n&rsquo;est pas connu ou si un laps de temps important (plus de 30 minutes) s&rsquo;est &eacute;coul&eacute; entre l&rsquo;&eacute;v&eacute;nement de contamination et la premi&egrave;re mesure, on devrait formuler une hypoth&egrave;se prudente concernant le moment de l&rsquo;&eacute;v&eacute;nement. Par exemple, on pourrait supposer que la contamination est survenue lorsque la mati&egrave;re radioactive a &eacute;t&eacute; manipul&eacute;e pour la premi&egrave;re fois.</p>  <p>On pourrait d&eacute;terminer alors la concentration moyenne de surface (Bq/cm2) pour chaque mesure &agrave; l&rsquo;aide de la formule suivante :</p>
<table className=" table-border-none">
<tr>  	<td className="text-center text-center" width="20">(2)</td>  	<td width="70" className="text-center">  <math display=&#39;block&#39;>   <semantics>
<mrow>
<mover accent=&#39;true&#39;>
<mi>C</mi>
<mo>&#x00AF;</mo>
</mover>
<mo>=</mo><mfrac>
<mrow>
<mtext>Taux&#x00A0;de&#x00A0;comptage&#x00A0;net</mtext></mrow>
<mrow>
<mtext>Superficie</mtext><mo>&#x00D7;</mo><mi>&#x03B5;</mi></mrow>
</mfrac>
</mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGabm4qayaara
Gaeyypa0ZaaSaaaeaacaqGobGaaeyzaiaabshacaqGGaGaae4yaiaa
b+gacaqG1bGaaeOBaiaabshacaqGGaGaaeOCaiaabggacaqG0bGaae
yzaaqaaiaabgeacaqGYbGaaeyzaiaabggacqGHxdaTcqaH1oqzaaaa
aa@4B95@
</annotation>   </semantics>  </math>
</td>  	</tr>  </table>
<table className="table-border-none">  <tr>
<td>&nbsp;</td>
<td><span style="text-decoration: overline;">C</span></td>
<td>=</td>
<td>concentration moyenne de surface en Bq/cm<sup>2</sup>. Si l&rsquo;instrument donne des r&eacute;sultats en Bq/cm<sup>2</sup>, il est important de bien savoir quelle superficie on emploie pour la conversion, car un facteur de correction pourrait &ecirc;tre n&eacute;cessaire. Par exemple, si un instrument donne un r&eacute;sultat en Bq/cm<sup>2</sup> bas&eacute; sur une source d&rsquo;&eacute;talonnage de 100 cm<sup>2</sup> et que la superficie de la peau contamin&eacute;e est de 1 cm<sup>2</sup>, le r&eacute;sultat fourni par l&rsquo;instrument devrait &ecirc;tre multipli&eacute; par un facteur de 100.</td>  </tr>  <tr>
<td>&nbsp;</td>
<td>Taux de comptage net</td>
<td>=</td>
<td>taux de comptage moyen mesur&eacute; moins le taux de comptage du rayonnement de fond, en coups par seconde (si le taux de comptage net est donn&eacute; en coups par minute, il faut diviser la mesure par 60 pour obtenir la valeur en coups par seconde).</td>  </tr>  <tr>
<td>&nbsp;</td>
<td>Supercicie</td>
<td>=</td>
<td><p className="mrgn-tp-0">superficie de la peau contamin&eacute;e en cm2 si la superficie contamin&eacute;e est inf&eacute;rieure &agrave; la superficie de la sonde et que la mesure a &eacute;t&eacute; prise de telle sorte que la superficie de la peau contamin&eacute;e se trouve directement sous la sonde (si la superficie est inconnue ou si la peau est contamin&eacute;e de fa&ccedil;on in&eacute;gale, on pourrait utiliser une valeur prudente de 1 cm<sup>2</sup>), ou</p>
<p>la superficie active de la sonde en cm<sup>2</sup> si la peau est contamin&eacute;e de fa&ccedil;on uniforme sur une superficie plus grande que celle de la sonde.</p></td>  </tr>  <tr>
<td>&nbsp;</td>
<td>&epsilon;</td>
<td>=</td>
<td>efficacit&eacute; du contaminam&egrave;tre en cps/Bq</td>  </tr>  </table>  <br />
<p>La formule suivante pourrait &ecirc;tre utilis&eacute;e pour calculer la dose &agrave; la peau en &micro;Sv, pour chaque intervalle de mesure :</p>
<table className=" table-border-none">
<tr>  	<td className="text-center text-center" width="20">(3)</td>  	<td width="70" className="text-center">  <math display=&#39;block&#39;>   <semantics>
<mrow>
<mi>D</mi><mo>=</mo><mover accent=&#39;true&#39;>
<mi>C</mi>
<mo>&#x00AF;</mo>
</mover>
<mo>&#x00D7;</mo><mi>F</mi><mi>C</mi><mi>D</mi><mo>&#x00D7;</mo><mn>1,443</mn><mo>&#x00D7;</mo><msub>
<mi>T</mi>
<mrow>
<mn>1</mn><mo>/</mo><mn>2</mn></mrow>
</msub>
<mrow><mo>(</mo>
<mrow>
<mn>1</mn><mo>&#x2212;</mo><msup>
<mi>e</mi>
<mrow>
<mfrac>
<mrow>
<mn>0,693</mn><mo>&#x00D7;</mo><mi>T</mi></mrow>
<mrow>
<msub>
<mi>T</mi>
<mrow>
<mn>1</mn><mo>/</mo><mn>2</mn></mrow>
</msub>
</mrow>
</mfrac>
</mrow>
</msup>
</mrow>
<mo>)</mo></mrow></mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaamiraiabg2
da9iqadoeagaqeaiabgEna0kaadseacaWGdbGaamOraiabgEna0kaa
igdacaGGUaGaaGinaiaaisdacaaIZaGaey41aqRaamivamaaBaaale
aacaaIXaGaai4laiaaikdaaeqaaOWaaeWaaeaacaaIXaGaeyOeI0Ia
amyzamaaCaaaleqabaWaaSaaaeaacaaIWaGaaiOlaiaaiAdacaaI5a
GaaG4maiabgEna0kaadsfaaeaacaWGubWaaSbaaWqaaiaaigdacaGG
VaGaaGOmaaqabaaaaaaaaOGaayjkaiaawMcaaaaa@5653@
</annotation>   </semantics>  </math>  	</td>  	</tr>  </table>
<table className="table-border-none">  <tr>
<td>o&ugrave; :</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>  </tr>  <tr>
<td>&nbsp;</td>
<td>FCD</td>
<td>=</td>
<td>facteurs de conversion du d&eacute;bit de dose cutan&eacute;e en &mucro;Sv/h par Bq/cm<sup>2</sup> (voir le tableau 4 ci-dessous)</td>  </tr>  <tr>
<td>&nbsp;</td>
<td>T<sub>1/2</sub></td>
<td>=</td>
<td>p&eacute;riode radioactive en heures</td>  </tr>  <tr>
<td>&nbsp;</td>
<td>T</td>
<td>=</td>
<td><p className="mrgn-tp-0">temps &eacute;coul&eacute;, en heures</p>
<p>Pour la premi&egrave;re mesure, T est le temps &eacute;coul&eacute; entre la premi&egrave;re et la deuxi&egrave;me mesure plus le temps &eacute;coul&eacute; estim&eacute; entre la contamination et la premi&egrave;re mesure.</p>
<p>Pour les mesures suivantes, T est le temps &eacute;coul&eacute; entre la mesure courante et la mesure subs&eacute;quente.</p></td>  </tr>  </table>  <br />
<p className="text-left"><strong>Tableau 4 : Facteurs de conversion des d&eacute;bits de dose pour les isotopes d&rsquo;utilisation courante</strong></p>  <p>Ce tableau est adapt&eacute; du document de l&rsquo;AIEA, TECDOC-1162, <span lang="en"><em>Generic procedures for assessment and response during a radiological emergency</em></span> [9]</p>  <table className="">
<tr>
<th className="text-center">Radionucl&eacute;ide</th>
<th>P&eacute;riode radioactive (heures)</th>
<th>Facteurs de conversion &micro;Sv/h par Bq/cm<sup>2</sup>)</th>
</tr>
<tr>
<td><sup>14</sup>C</td>
<td className="text-center">5,02 x 10<sup>7</sup></td>
<td className="text-center">0,32</td>
</tr>
<tr>
<td><sup>18</sup>F</td>
<td className="text-center">1,83</td>
<td className="text-center">1,9</td>
</tr>
<tr>
<td><sup>32</sup>P</td>
<td className="text-center">343</td>
<td className="text-center">1.9</td>
</tr>
<tr>
<td><sup>67</sup>Ga</td>
<td className="text-center">78,2</td>
<td className="text-center">0,35</td>
</tr>
<tr>
<td><sup>90</sup>Sr/<sup>90</sup>Y</td>
<td className="text-center">2,55 x 10<sup>5</sup></td>
<td className="text-center">3,5</td>
</tr>
<tr>
<td><sup>90</sup>Y</td>
<td className="text-center">64,1</td>
<td className="text-center">2,0</td>
</tr>
<tr>
<td><sup>99</sup>Mo/<sup>99m</sup>Tc</td>
<td className="text-center">65,94</td>
<td className="text-center">1,9</td>
</tr>
<tr>
<td><sup>99m</sup>Tc</td>
<td className="text-center">6,0</td>
<td className="text-center">0,25</td>
</tr>
<tr>
<td><sup>111</sup>In</td>
<td className="text-center">67.2</td>
<td className="text-center">0.38</td>
</tr>
<tr>
<td><sup>123</sup>I</td>
<td className="text-center">13,2</td>
<td className="text-center">0,38</td>
</tr>
<tr>
<td><sup>125</sup>I</td>
<td className="text-center">1,442</td>
<td className="text-center">0,021</td>
</tr>
<tr>
<td><sup>131</sup>I</td>
<td className="text-center">192</td>
<td className="text-center">1,6</td>
</tr>
<tr>
<td><sup>201</sup>Tl</td>
<td className="text-center">73.0</td>
<td className="text-center">0,27</td>
</tr>  </table>
<p>Une liste des facteurs de conversion pour d&rsquo;autres radionucl&eacute;ides figure dans le document de l&rsquo;AIEA TECDOC-1162 [9] et dans l&rsquo;article de <em>Health Physics</em> intitul&eacute; &laquo; <span lang="en"><em>Electron dose-rate conversion factors for external exposure of the skin from uniformly deposited activity on the body surface</em></span> &raquo; [10].</p>  <p>Si le taux de comptage net final est nul, additionnez les doses calcul&eacute;es pour obtenir la dose totale &agrave; la peau. Toutefois, si le taux de comptage net n&rsquo;est pas nul, on d&eacute;terminera la dose pour la p&eacute;riode suivant la derni&egrave;re mesure &agrave; l&rsquo;aide de la formule ci-dessous, puis on additionnera les doses pour obtenir la dose totale &agrave; la peau :</p>
<table className=" table-border-none">
<tr>  	<td className="text-center text-center" width="20">(4)</td>  	<td width="70" className="text-center">
<em>D</em> = <em><span style="text-decoration: overline;">C</span></em> &times; <em>FCD</em> &times; 1,443 &times; <em>T<sub>1/2</sub></em>  	</td>  	</tr>  </table>
<p>Si le titulaire de permis pr&eacute;sente une demande pour ajouter cette dose au dossier dosim&eacute;trique du travailleur dans le FDN, il faudrait alors consulter la partie C.</p>
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
<h2 id="partB">Partie B : Exposition interne</h2>
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
<h2 id="sec7">7. Grandeurs</h2>  <p>Par exposition interne, on entend l&rsquo;exposition au rayonnement ionisant qui r&eacute;sulte de l&rsquo;ingestion de radionucl&eacute;ides dans le corps. Cette section d&eacute;crit les grandeurs &agrave; utiliser pour d&eacute;terminer les doses dues &agrave; l&rsquo;exposition interne.</p>  <p>La dose &eacute;quivalente engag&eacute;e, H<sub>T</sub>(50), est la dose &eacute;quivalente re&ccedil;ue par un organe ou un tissu due &agrave; un radionucl&eacute;ide pendant les 50 ann&eacute;es suivant l&rsquo;incorporation du radionucl&eacute;ide dans le corps d&rsquo;une personne de 18 ans ou plus.</p>  <p>La dose efficace engag&eacute;e (DEE), appel&eacute;e E(50), est la dose efficace d&rsquo;un radionucl&eacute;ide pendant les 50 ann&eacute;es suivant son incorporation dans le corps d&rsquo;une personne de 18 ans ou plus.</p>  <p>La limite annuelle d&rsquo;incorporation (LAI) est l&rsquo;activit&eacute; d&rsquo;un radionucl&eacute;ide qui, lorsqu&rsquo;il est incorpor&eacute; dans le corps, produit une DEE de 20 mSv. Des valeurs LAI peuvent &ecirc;tre calcul&eacute;es pour l&rsquo;inhalation ou l&rsquo;ingestion. La LAI pour l&rsquo;inhalation (LAI<sub>inh</sub>) est donn&eacute;e par la formule suivante :</p>
<table className=" table-border-none">  <tr>  	<td className="text-center text-center" width="20">(5)</td>  	<td width="70" className="text-center">  <math display=&#39;block&#39;>   <semantics>
<mrow>
<mi>L</mi><mi>A</mi><msub>
<mi>I</mi>
<mrow>
<mi>i</mi><mi>n</mi><mi>h</mi></mrow>
</msub>
<mo stretchy=&#39;false&#39;>[</mo><mi>B</mi><mi>q</mi><mo stretchy=&#39;false&#39;>]</mo><mo>=</mo><mfrac>
<mrow>
<mn>0,02</mn><mo stretchy=&#39;false&#39;>[</mo><mi>S</mi><mi>v</mi><mo stretchy=&#39;false&#39;>]</mo></mrow>
<mrow>
<msub>
<mi>e</mi>
<mrow>
<mi>i</mi><mi>n</mi><mi>h</mi></mrow>
</msub>
<mo stretchy=&#39;false&#39;>(</mo><mn>50</mn><mo stretchy=&#39;false&#39;>)</mo><mrow><mo>[</mo> <mrow>
<mfrac>
<mrow>
<mi>S</mi><mi>v</mi></mrow>
<mrow>
<mi>B</mi><mi>q</mi></mrow>
</mfrac>
</mrow> <mo>]</mo></mrow></mrow>
</mfrac>
</mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbiqaaqXbcaWGbb
GaamitaiaadMeadaWgaaWcbaGaamyAaiaad6gacaWGObaabeaakiaa
cUfacaWGcbGaamyCaiaac2facqGH9aqpdaWcaaqaaiaaicdacaGGUa
GaaGimaiaaikdacaGGBbGaam4uaiaadAhacaGGDbaabaGaamyzamaa
BaaaleaacaWGPbGaamOBaiaadIgaaeqaaOGaaiikaiaaiwdacaaIWa
GaaiykamaadmaabaWaaSaaaeaacaWGtbGaamODaaqaaiaadkeacaWG
XbaaaaGaay5waiaaw2faaaaaaaa@52D7@
</annotation>   </semantics>  </math>  	</td>  	</tr>  </table>
<p>La LAI pour l&rsquo;ingestion (LAI<sub>ing</sub>) est donn&eacute;e par la formule suivante :</p>
<table className=" table-border-none">  <tr>  	<td className="text-center text-center" width="20">(6)</td>  	<td width="70" className="text-center">  <math display=&#39;block&#39;>   <semantics>
<mrow>
<mi>L</mi><mi>A</mi><msub>
<mi>I</mi>
<mrow>
<mi>i</mi><mi>n</mi><mi>g</mi></mrow>
</msub>
<mo stretchy=&#39;false&#39;>[</mo><mi>B</mi><mi>q</mi><mo stretchy=&#39;false&#39;>]</mo><mo>=</mo><mfrac>
<mrow>
<mn>0,02</mn><mo stretchy=&#39;false&#39;>[</mo><mi>S</mi><mi>v</mi><mo stretchy=&#39;false&#39;>]</mo></mrow>
<mrow>
<msub>
<mi>e</mi>
<mrow>
<mi>i</mi><mi>n</mi><mi>h</mi></mrow>
</msub>
<mo stretchy=&#39;false&#39;>(</mo><mn>50</mn><mo stretchy=&#39;false&#39;>)</mo><mrow><mo>[</mo> <mrow>
<mfrac>
<mrow>
<mi>S</mi><mi>v</mi></mrow>
<mrow>
<mi>B</mi><mi>q</mi></mrow>
</mfrac>
</mrow> <mo>]</mo></mrow></mrow>
</mfrac>
</mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbiqaaqXbcaWGbb
GaamitaiaadMeadaWgaaWcbaGaamyAaiaad6gacaWGObaabeaakiaa
cUfacaWGcbGaamyCaiaac2facqGH9aqpdaWcaaqaaiaaicdacaGGUa
GaaGimaiaaikdacaGGBbGaam4uaiaadAhacaGGDbaabaGaamyzamaa
BaaaleaacaWGPbGaamOBaiaadIgaaeqaaOGaaiikaiaaiwdacaaIWa
GaaiykamaadmaabaWaaSaaaeaacaWGtbGaamODaaqaaiaadkeacaWG
XbaaaaGaay5waiaaw2faaaaaaaa@52D7@
</annotation>   </semantics>  </math>  	</td>  	</tr>  </table>
<p>Dans les &eacute;quations ci dessus, e<em><sub>inh</sub></em>(50) et e<sub>ing</sub>(50) sont la DEE par unit&eacute; d&rsquo;incorporation par inhalation et par ingestion, respectivement. Ces valeurs devraient tenir compte des donn&eacute;es de solubilit&eacute; propres au site pour les substances nucl&eacute;aires d&rsquo;int&eacute;r&ecirc;t. Lorsque de telles donn&eacute;es ne sont pas disponibles, les valeurs figurent dans les publications courantes de la CIPR<sup id="fnb8-ref"><a className="fn-lnk" href="#fnb8"><span className="wb-inv">Footnote </span>8</a></sup>  et devraient &ecirc;tre fond&eacute;es sur des hypoth&egrave;ses prudentes pour la solubilit&eacute;. Pour ce qui est de l&rsquo;incorporation de particules par inhalation, et &agrave; moins que l&rsquo;on ne dispose d&rsquo;information propre au site, on supposera que la taille des particules (diam&egrave;tre a&eacute;rodynamique m&eacute;dian en activit&eacute;, AMAD) est de 5 &micro;m. Pour l&rsquo;incorporation de gaz et de vapeurs par inhalation, et &agrave; moins que l&rsquo;on ne dispose de renseignements propres au site, il faudrait choisir la DEE appropri&eacute;e par unit&eacute; d&rsquo;incorporation conform&eacute;ment aux recommandations de la CIPR.</p>  <p>La limite d&eacute;riv&eacute;e de concentration dans l&rsquo;air (LDCA) est la concentration d&rsquo;un radionucl&eacute;ide dans l&rsquo;air qui, lorsqu&rsquo;il est inhal&eacute; &agrave; un rythme respiratoire de 1,2 m<sup>3</sup> par heure pendant 2 000 heures de travail par ann&eacute;e, entra&icirc;ne l&rsquo;absorption de 1 LAI de ce radionucl&eacute;ide.</p>  <p>La LDCA pour un radionucl&eacute;ide est donn&eacute;e par :</p>
<table className=" table-border-none">  <tr>  	<td className="text-center text-center" width="20">(7)</td>  	<td width="70" className="text-center">	  <math display=&#39;block&#39;>   <semantics>
<mrow>
<mi>L</mi><mi>D</mi><mi>C</mi><mi>A</mi><mrow><mo>[</mo> <mrow>
<mfrac>
<mrow>
<mi>B</mi><mi>q</mi></mrow>
<mrow>
<msup>
<mi>m</mi>
<mn>3</mn>
</msup>
</mrow>
</mfrac>
</mrow> <mo>]</mo></mrow><mo>=</mo><mfrac>
<mrow>
<mi>L</mi><mi>A</mi><msub>
<mi>I</mi>
<mrow>
<mi>i</mi><mi>n</mi><mi>h</mi></mrow>
</msub>
<mo stretchy=&#39;false&#39;>[</mo><mi>B</mi><mi>q</mi><mo stretchy=&#39;false&#39;>]</mo></mrow>
<mrow>
<mn>2</mn><mo>&#x00A0;</mo><mn>400</mn><mo stretchy=&#39;false&#39;>[</mo><msup>
<mi>m</mi>
<mn>3</mn>
</msup>
<mo stretchy=&#39;false&#39;>]</mo></mrow>
</mfrac>
</mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaamiraiaadg
eacaWGdbWaamWaaeaadaWcaaqaaiaadkeacaWGXbaabaGaamyBamaa
CaaaleqabaGaaG4maaaaaaaakiaawUfacaGLDbaacqGH9aqpdaWcaa
qaaiaadgeacaWGmbGaamysamaaBaaaleaacaWGPbGaamOBaiaadIga
aeqaaOGaai4waiaadkeacaWGXbGaaiyxaaqaaiaaikdacaGGSaGaaG
inaiaaicdacaaIWaGaai4waiaad2gadaahaaWcbeqaaiaaiodaaaGc
caGGDbaaaaaa@4F32@
</annotation>   </semantics>  </math>  	</td>  	</tr>  </table>
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
<h2 id="sec8">8. Caract&eacute;risation des sources potentielles d&rsquo;incorporation au travail</h2>  <p>Les conditions radiologiques pendant l&rsquo;exploitation normale d&rsquo;une installation ou dans un endroit o&ugrave; une activit&eacute; autoris&eacute;e est r&eacute;alis&eacute;e devraient &ecirc;tre caract&eacute;ris&eacute;es et document&eacute;es. Il faudrait v&eacute;rifier p&eacute;riodiquement les conditions radiologiques et tenir &agrave; jour la documentation. La caract&eacute;risation radiologique relative &agrave; la dosim&eacute;trie interne et aux essais biologiques devrait fournir une description compl&egrave;te de la nature, de l&rsquo;&eacute;tendue et de la variabilit&eacute; de la contamination de surface, de la radioactivit&eacute; en suspension dans l&rsquo;air et des autres sources potentielles d&rsquo;incorporation, le cas &eacute;ch&eacute;ant, dans tous les lieux de travail. La caract&eacute;risation radiologique devrait &eacute;galement inclure, pour tous les emplacements d&rsquo;une installation :</p>  <ul>
<li>les radionucl&eacute;ides qui seront pr&eacute;sents sur le lieu de travail, leur p&eacute;riode, les produits de filiation et leur abondance relative</li>
<li>les types et les &eacute;nergies des rayonnements &eacute;mis par ces radionucl&eacute;ides</li>
<li>leurs formes chimiques et les types connexes de d&eacute;gagement des voies respiratoires</li>
<li>la taille des particules (p. ex., exprim&eacute;es en diam&egrave;tre AMAD), le cas &eacute;ch&eacute;ant</li>
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
<div id="9"></div>
<h2 id="sec9">9. M&eacute;thodes de contr&ocirc;le de l&rsquo;incorporation</h2>  <p>Le contr&ocirc;le de l&rsquo;incorporation potentielle de radionucl&eacute;ides par les travailleurs peut &ecirc;tre effectu&eacute; par des mesures individuelles ou par des mesures en milieu de travail.</p>
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
<h3 id="sec9-1">9.1	Contr&ocirc;le individuel</h3>  <p>Le but du contr&ocirc;le individuel de l&rsquo;incorporation est de v&eacute;rifier et de documenter que les travailleurs sont ad&eacute;quatement prot&eacute;g&eacute;s contre les risques radiologiques internes et de d&eacute;montrer le respect du RRP. De mani&egrave;re plus pr&eacute;cise, le contr&ocirc;le individuel de l&rsquo;incorporation vise plusieurs objectifs : d&eacute;terminer les doses aux travailleurs, servir d&rsquo;indicateur d&rsquo;incorporation potentielle, v&eacute;rifier que les travailleurs sont ad&eacute;quatement prot&eacute;g&eacute;s contre la toxicit&eacute; chimique associ&eacute;e aux substances nucl&eacute;aires et, dans l&rsquo;ensemble, appuyer le programme de radioprotection du titulaire de permis. Dans les situations d&rsquo;urgence, le contr&ocirc;le individuel de l&rsquo;incorporation vise &agrave; d&eacute;terminer et &agrave; documenter les doses re&ccedil;ues par les travailleurs, y compris la dose absorb&eacute;e par les organes ou les tissus, et &agrave; d&eacute;clencher, le cas &eacute;ch&eacute;ant, des mesures de surveillance de la sant&eacute; et un traitement.</p>  <p>Le contr&ocirc;le de l&rsquo;incorporation de radionucl&eacute;ides pourrait recourir &agrave; la fois au contr&ocirc;le en milieu de travail et au contr&ocirc;le individuel. Les types de m&eacute;thodes de contr&ocirc;le, individuel ou en milieu de travail, dans une installation (ou &agrave; un endroit o&ugrave; une activit&eacute; autoris&eacute;e est r&eacute;alis&eacute;e) devraient permettre de d&eacute;tecter les radionucl&eacute;ides identifi&eacute;s lors de la caract&eacute;risation radiologique de l&rsquo;installation ou de l&rsquo;activit&eacute; autoris&eacute;e, et qui pr&eacute;sentent le risque d&rsquo;&ecirc;tre incorpor&eacute;s par le corps dans des conditions d&rsquo;exploitation normale et anormale (impr&eacute;vue) (p. ex., &agrave; la suite de la remise en suspension dans l&rsquo;air d&rsquo;une contamination de surface non fix&eacute;e ou de l&rsquo;inhalation de la radioactivit&eacute; en suspension dans l&rsquo;air). Le programme de contr&ocirc;le de l&rsquo;incorporation est consid&eacute;r&eacute; comme faisant partie int&eacute;grante du programme de radioprotection et devrait fournir les donn&eacute;es n&eacute;cessaires pour d&eacute;terminer la dose aux travailleurs due &agrave; l&rsquo;incorporation de radionucl&eacute;ides ou pour d&eacute;clencher la d&eacute;termination des doses aux travailleurs en temps opportun.</p>  <p>Le contr&ocirc;le individuel pourrait consister &agrave; mesurer l&rsquo;activit&eacute; des radionucl&eacute;ides dans l&rsquo;organisme (contr&ocirc;le <em>in vivo</em> ou essais biologiques <em>in vivo</em>; les deux termes sont &eacute;quivalents), &agrave; contr&ocirc;ler les mati&egrave;res f&eacute;cales (contr&ocirc;le <em>in vitro</em> ou essais biologiques <em>in vitro</em>), &agrave; pr&eacute;lever des &eacute;chantillons d&rsquo;air avec des &eacute;chantillonneurs d&rsquo;air individuels, ou encore en une combinaison de ces m&eacute;thodes. La m&eacute;thode de contr&ocirc;le choisie d&eacute;pendra d&rsquo;un certain nombre de facteurs, qui sont abord&eacute;s dans la pr&eacute;sente section.</p>  <p>Pour le contr&ocirc;le <em>in vivo</em>, on emploie des d&eacute;tecteurs de photons (p. ex., des d&eacute;tecteurs de rayonnement gamma) plac&eacute;s &agrave; des endroits pr&eacute;cis par rapport &agrave; la personne contr&ocirc;l&eacute;e, pour d&eacute;tecter les photons &eacute;mis par les radionucl&eacute;ides qui ont &eacute;t&eacute; incorpor&eacute;s dans son corps. Cette m&eacute;thode n&rsquo;est utilisable que pour les radionucl&eacute;ides &eacute;mettant des rayons X ou un rayonnement gamma, les radionucl&eacute;ides &eacute;mettant des positrons (par d&eacute;tection des rayons gamma d&rsquo;annihilation) ou les radionucl&eacute;ides &eacute;mettant des particules b&ecirc;ta &eacute;nergiques. Dans ce dernier cas, on d&eacute;tecte le rayonnement de freinage (<em>bremsstrahlung</em>). Le contr&ocirc;le in vivo n&rsquo;est pas la m&eacute;thode de choix lorsque les radionucl&eacute;ides que l&rsquo;on d&eacute;sire d&eacute;tecter &eacute;mettent un rayonnement gamma ou X de faible port&eacute;e, lorsqu&rsquo;ils n&rsquo;&eacute;mettent pas un rayonnement facilement d&eacute;tectable &agrave; l&rsquo;ext&eacute;rieur du corps (p. ex., des photons d&rsquo;&eacute;nergie inf&eacute;rieure &agrave; 25 keV) ou lorsque leur p&eacute;riode radioactive biologique ou physique est courte (p. ex., inf&eacute;rieure &agrave; 1 jour). Pour de plus amples renseignements, veuillez consulter le rapport 69 de l&rsquo;ICRU, <span lang="en"><em>Direct Determination of the Body Content of Radionuclides</em></span> [11].</p>  <p>Les m&eacute;thodes de contr&ocirc;le in vivo comprennent le contr&ocirc;le du corps entier et le contr&ocirc;le du corps partiel. On devrait utiliser le contr&ocirc;le du corps entier pour contr&ocirc;ler l&rsquo;incorporation de radionucl&eacute;ides qui sont rapidement absorb&eacute;s par les voies respiratoires dans la circulation g&eacute;n&eacute;rale, et qui se r&eacute;partissent uniform&eacute;ment dans le corps, comme c&rsquo;est le cas avec le <sup>134</sup>Cs, ou qui se r&eacute;partissent dans plusieurs organes, comme le <sup>59</sup>Fe. On devrait recourir au contr&ocirc;le du corps partiel, pour l&rsquo;organe concern&eacute;, lorsque des radionucl&eacute;ides se d&eacute;posent de fa&ccedil;on pr&eacute;f&eacute;rentielle dans un seul organe. Par exemple, dans le cas du <sup>131</sup>I, un contr&ocirc;le de la thyro&iuml;de est appropri&eacute;. En outre, le contr&ocirc;le des poumons est recommand&eacute; pour les radionucl&eacute;ides qui sont absorb&eacute;s lentement par les voies respiratoires (c.-&agrave;-d. les mati&egrave;res avec absorption de type M ou S<sup id="fnb9-ref"><a className="fn-lnk" href="#fnb9"><span className="wb-inv">Footnote </span>9</a></sup> ). Selon la publication 119 de la CIPR, <span lang="en"><em>Compendium of Dose Coefficients based on ICRP Publication 60</em></span>, de tels radionucl&eacute;ides comprennent l&rsquo;uranium 235 et l&rsquo;am&eacute;ricium 241 [12].</p>  <p>Les mesures <em>in vivo</em> sont acceptables pour d&eacute;tecter les radionucl&eacute;ides &eacute;metteurs de photons incorpor&eacute;s dans une plaie. La section 14 pr&eacute;sente de l&rsquo;orientation suppl&eacute;mentaire concernant l&rsquo;incorporation par les plaies.</p>  <p>De l&rsquo;orientation d&eacute;taill&eacute;e sur l&rsquo;&eacute;tablissement d&rsquo;une installation de mesure in vivo, y compris sa construction, sa mise en service et son exploitation, n&rsquo;entrent pas dans le cadre du pr&eacute;sent document. On trouvera toutefois de telles directives dans le document no 114 de la collection S&eacute;curit&eacute; de l&rsquo;AIEA, <span lang="en"><em>Direct Methods for Measuring Radionuclides in the Human Body</em></span> [13], et le rapport 69 de l&rsquo;ICRU, <span lang="en"><em>Direct Determination of the Body Content of Radionuclides</em></span> [14].</p>  <p>Le contr&ocirc;le <em>in vitro</em> comprend g&eacute;n&eacute;ralement une analyse de l&rsquo;urine et pourrait aussi comprendre un essai biologique des mati&egrave;res f&eacute;cales dans le cas des compos&eacute;s insolubles inhal&eacute;s, ainsi que d&rsquo;autres mesures d&rsquo;enqu&ecirc;te comme un frottis nasal. Les programmes d&rsquo;essais biologiques de l&rsquo;urine, aux fins de dosim&eacute;trie, devraient &ecirc;tre con&ccedil;us &ndash; sauf dans le cas de l&rsquo;essai biologique du tritium &ndash; pour recueillir et analyser des &eacute;chantillons pr&eacute;lev&eacute;s sur une p&eacute;riode de 24 heures cons&eacute;cutives. Dans le cas o&ugrave; cela n&rsquo;est pas possible, on envisagera d&rsquo;autres options, notamment :</p>
<ul>
<li>la collecte et l&rsquo;analyse de l&rsquo;urine lors de la premi&egrave;re miction du matin</li>
<li>la mesure de la concentration de cr&eacute;atinine dans l&rsquo;urine pour estimer la normalisation de l&rsquo;excr&eacute;tion sur 24 heures (d&rsquo;apr&egrave;s un &eacute;chantillon d&rsquo;urine pr&eacute;lev&eacute; pendant une partie de la journ&eacute;e) par :
<ul>
<li>volume, avec ou sans correction tenant compte de la densit&eacute;</li>
<li>la dur&eacute;e de l&rsquo;intervalle d&rsquo;&eacute;chantillonnage</li>
</ul></li>
</ul>  <p>La quantit&eacute; minimale d&rsquo;urine requise pour l&rsquo;analyse d&rsquo;un &eacute;chantillon d&eacute;pend de la m&eacute;thode d&rsquo;analyse. Les titulaires de permis devraient documenter et mettre en &oelig;uvre un m&eacute;canisme pour i) s&rsquo;assurer qu&rsquo;une quantit&eacute; suffisante est soumise dans chaque &eacute;chantillon <em>in vitro</em> destin&eacute; &agrave; l&rsquo;analyse, et ii) faire un suivi aupr&egrave;s des personnes qui soumettent des &eacute;chantillons pour demander un deuxi&egrave;me &eacute;chantillon lorsque la quantit&eacute; &eacute;chantillonn&eacute;e est insuffisante.</p>  <p>Les analyses <em>in vitro</em> n&eacute;cessitant la s&eacute;paration radiochimique des radionucl&eacute;ides devraient comporter des mesures permettant de contr&ocirc;ler le processus de mesure, par l&rsquo;utilisation de traceurs de rendement chimique. Ces traceurs pourraient &ecirc;tre ajout&eacute;s aux &eacute;chantillons &agrave; analyser, ou encore &ecirc;tre ajout&eacute;s &agrave; des &eacute;chantillons similaires, tels que des &eacute;chantillons artificiels ou des &eacute;chantillons provenant d&rsquo;un sujet non contamin&eacute;. Les titulaires de permis devraient &eacute;tablir des crit&egrave;res d&rsquo;acceptabilit&eacute; des r&eacute;sultats de laboratoire pour les &eacute;chantillons <em>in vitro</em>. Ces crit&egrave;res devraient inclure un rendement chimique minimal. Les &eacute;chantillons dont le rendement chimique est inf&eacute;rieur &agrave; ce seuil ne devraient pas &ecirc;tre utilis&eacute;s pour la dosim&eacute;trie, et il faudrait alors proc&eacute;der &agrave; une nouvelle analyse des &eacute;chantillons.</p>  <p>Dans le cas d&rsquo;un essai biologique visant &agrave; mesurer l&rsquo;excr&eacute;tion du tritium sous forme d&rsquo;eau triti&eacute;e, on pourrait analyser des &eacute;chantillons ponctuels d&rsquo;urine de quelques millilitres (pour le contr&ocirc;le r&eacute;gulier) afin de d&eacute;terminer l&rsquo;activit&eacute; du tritium. L&rsquo;annexe D d&eacute;crit comment convertir la concentration d&rsquo;eau triti&eacute;e dans l&rsquo;urine en dose efficace correspondante.</p>  <p>Les programmes d&rsquo;essais biologiques pour l&rsquo;urine pourraient s&rsquo;av&eacute;rer utiles &eacute;galement &agrave; des fins autres que la dosim&eacute;trie, en particulier comme outil de d&eacute;pistage pour d&eacute;terminer l&rsquo;incorporation potentielle de radionucl&eacute;ides. Dans de tels cas, des &eacute;chantillons ponctuels peuvent &ecirc;tre suffisants pour permettre la d&eacute;tection de l&rsquo;incorporation. Cependant, la fr&eacute;quence de soumission des &eacute;chantillons et la sensibilit&eacute; de la m&eacute;thode analytique devraient &ecirc;tre d&eacute;montr&eacute;es pour s&rsquo;assurer que l&rsquo;incorporation pouvant mener &agrave; une DEE annuelle de 1 mSv ne passe pas inaper&ccedil;ue. Les programmes d&rsquo;essais biologiques devraient inclure des mesures visant &agrave; &eacute;viter la contamination des &eacute;chantillons. De tels programmes devraient &eacute;galement s&rsquo;assurer que le volume d&rsquo;&eacute;chantillons requis pour l&rsquo;analyse est suffisant pour atteindre une sensibilit&eacute; ad&eacute;quate afin de r&eacute;pondre aux besoins du programme de radioprotection qu&rsquo;il soutient.</p>  <p>L&rsquo;analyse des &eacute;chantillons de mati&egrave;res f&eacute;cales est g&eacute;n&eacute;ralement effectu&eacute;e &agrave; la suite d&rsquo;une r&eacute;action &agrave; une incorporation anormale connue ou pr&eacute;sum&eacute;e de substances de type M ou S par inhalation. Si possible, la collecte sur une p&eacute;riode de deux &agrave; trois jours devrait avoir lieu dans la premi&egrave;re semaine suivant l&rsquo;incorporation anormale. Les taux d&rsquo;excr&eacute;tion des radionucl&eacute;ides par les mati&egrave;res f&eacute;cales dans les premiers jours suivant une inhalation aigu&euml; varient consid&eacute;rablement. De plus, des r&eacute;sultats pr&eacute;coces obtenus sur des &eacute;chantillons de mati&egrave;res f&eacute;cales pourraient permettre d&rsquo;identifier les personnes expos&eacute;es.</p>  <p>On pourrait utiliser le frottis nasal comme outil de d&eacute;pistage pour identifier une incorporation potentielle. Les r&eacute;sultats positifs d&rsquo;un frottis nasal devraient &ecirc;tre suivis de mesures <em>in vitro</em> et/ou <em>in vivo</em>, selon le cas, pour le ou les radionucl&eacute;ides identifi&eacute;s et leur solubilit&eacute; associ&eacute;e, afin de confirmer s&rsquo;il y a bel et bien eu incorporation et pour la quantifier.</p>  <p>Il faut tenir compte de plusieurs facteurs lors du choix de la m&eacute;thode de contr&ocirc;le par essais biologiques. Le premier facteur est l&rsquo;objectif du contr&ocirc;le : on devrait trouver un &eacute;quilibre entre les besoins en mati&egrave;re de contr&ocirc;le de l&rsquo;incorporation et l&rsquo;&eacute;valuation des doses. Le contr&ocirc;le de l&rsquo;incorporation exige que l&rsquo;on dispose en temps opportun des renseignements sur l&rsquo;incorporation et ils devraient &ecirc;tre bas&eacute;s sur les indicateurs suivants d&rsquo;incorporation, par ordre de pr&eacute;f&eacute;rence :</p>
<ol>
<li>utilisation d&rsquo;un &eacute;chantillonneur d&rsquo;air personnel (EAP) au lieu d&rsquo;un &eacute;chantillonneur d&rsquo;air statique (EAS) sur le lieu de travail</li>
<li>tampons pour frottis nasal</li>
<li>s&rsquo;il y a lieu, pour les radionucl&eacute;ides pr&eacute;occupants :
<ol className="list-lower-alpha">
<li>essai biologique <em>in vivo</em></li>
<li>essai biologique <em>in vitro</em></li>
</ol></li>
</ol>  <p>Lorsque l&rsquo;objectif du contr&ocirc;le est de d&eacute;terminer la dose, l&rsquo;ordre de pr&eacute;f&eacute;rence est diff&eacute;rent de l&rsquo;ordre ci-dessus :</p>
<ol>
<li>le cas &eacute;ch&eacute;ant, pour les radionucl&eacute;ides pr&eacute;occupants :
<ol className="list-lower-alpha">
<li>essai biologique <em>in vivo</em></li>
<li>essai biologique <em>in vitro</em></li>
</ol></li>
<li>utilisation d&rsquo;un &eacute;chantillonneur d&rsquo;air personnel</li>
</ol>  <p>La section 9.2 contient des renseignements sur l&rsquo;&eacute;chantillonnage de l&rsquo;air. Le tableau 5 indique les m&eacute;thodes d&rsquo;essais biologiques sugg&eacute;r&eacute;es pour divers radionucl&eacute;ides, compte tenu de leurs caract&eacute;ristiques physiques et m&eacute;taboliques. Il est &agrave; noter que le tableau 5 n&rsquo;est pas exhaustif et que le choix d&rsquo;une m&eacute;thode appropri&eacute;e d&eacute;pend de la forme physique et chimique du radionucl&eacute;ide, ainsi que de la voie d&rsquo;excr&eacute;tion.</p>
<p><strong>Tableau 5 : Exemples de m&eacute;thodes d&rsquo;essai biologique pour certains radionucl&eacute;ides</strong></p>  <table className="">
<tr>
<th>M&eacute;thode d&rsquo;essai biologique</th>
<th colSpan="3">Radionucl&eacute;ide</th>
</tr>
<tr>
<th className="text-left" colSpan="4">Essai biologique <em>in vivo</em></th>
</tr>
<tr>
<td rowspan="5">Comptage du corps entier</td>
<td><sup>51</sup>Cr</td>
<td><sup>95</sup>Zr/<sup>95</sup>Nb</td>
<td><sup>144</sup>Ce</td>
</tr>
<tr>
<td height="26"><sup>54</sup>Mn</td>
<td><sup>106</sup>Ru</td>
<td><sup>203</sup>Hg</td>
</tr>
<tr>
<td><sup>59</sup>Fe</td>
<td><sup>110m</sup>Ag</td>
<td><sup>226</sup>Ra, <sup>228</sup>Ra</td>
</tr>
<tr>
<td><sup>57</sup>Co, <sup>58</sup>Co, <sup>60</sup>Co</td>
<td><sup>124</sup>Sb, <sup>125</sup>Sb</td>
<td><sup>134</sup>Cs, <sup>137</sup>Cs</td>
</tr>
<tr>
<td><sup>85</sup>Sr</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td rowspan="3">Comptage pulmonaire</td>
<td><sup>14</sup>C(particulaire)*</td>
<td><sup>239</sup>Pu, <sup>240</sup>Pu</td>
<td><sup>244</sup>Cm</td>
</tr>
<tr>
<td><sup>60</sup>Co</td>
<td><sup>90</sup>Sr*</td>
<td><sup>241</sup>Am</td>
</tr>
<tr>
<td><sup>235</sup>U</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>Comptage thyro&iuml;dien</td>
<td><sup>123</sup>I, <sup>124</sup>I, <sup>125</sup>I, <sup>131</sup>I</td>
</tr>
<th className="text-left" colSpan="4">Essai biologique <em>in vitro</em></th>
<tr>
<td rowspan="3">Comptage par scintillation liquide (comptage &beta;) des &eacute;chantillons d&rsquo;urine</td>
<td><sup>3</sup>H</td>
<td><sup>35</sup>S</td>
<td><sup>45</sup>Ca</td>
</tr>
<tr>
<td><sup>14</sup>C</td>
<td><sup>36</sup>Cl</td>
<td><sup>129</sup>I, <sup>131</sup>I</td>
</tr>
<tr>
<td><sup>32</sup>P, <sup>33</sup>P</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>Comptage par scintillation liquide des &eacute;chantillons d&rsquo;urine apr&egrave;s s&eacute;paration chimique</td>
<td><sup>14</sup>C</td>
<td><sup>89</sup>Sr, <sup>90</sup>Sr</td>
<td><sup>228</sup>Ra</td>
</tr>
<tr>
<td>Comptage &beta; de l&rsquo;&eacute;chantillon de mati&egrave;res f&eacute;cales apr&egrave;s la s&eacute;paration chimique</td>
<td><sup>14</sup>C (particules)</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td rowspan="2">Spectroscopie gamma des &eacute;chantillons d&rsquo;urine</td>
<td><sup>57</sup>Co, <sup>58</sup>Co, <sup>60</sup>Co</td>
<td><sup>85</sup>Sr</td>
<td><sup>124</sup>I, <sup>125</sup>I, <sup>131</sup>I</td>
</tr>
<tr>
<td><sup>106</sup>Ru</td>
<td><sup>134</sup>Cs, <sup>137</sup>Cs</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>Spectroscopie gamma des &eacute;chantillons de mati&egrave;res f&eacute;cales (possiblement apr&egrave;s s&eacute;paration chimique)</td>
<td><sup>60</sup>Co</td>
<td><sup>144</sup>Ce</td>
<td>&nbsp;</td>
</tr>
<tr>
<td rowspan="3">Spectroscopie alpha des &eacute;chantillons d&rsquo;urine/mati&egrave;res f&eacute;cales apr&egrave;s s&eacute;paration radiochimique</td>
<td><sup>223</sup>Ra, <sup>226</sup>Ra</td>
<td><sup>238</sup>Pu</td>
<td><sup>241</sup>Am</td>
</tr>
<tr>
<td><sup>228</sup>Th, <sup>232</sup>Th</td>
<td><sup>239</sup>Pu/<sup>240</sup>Pu**</td>
<td><sup>242</sup>Cm, <sup>244</sup>Cm</td>
</tr>
<tr>
<td><sup>233</sup>U, <sup>234</sup>U, <sup>235</sup>U, <sup>238</sup>U</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>ICP-MS (spectrom&eacute;trie de masse avec plasma &agrave; couplage inductif)</td>
<td><sup>239</sup>Pu, <sup>240</sup>Pu</td>
<td><sup>234</sup>U, <sup>235</sup>U, <sup>236</sup>U, <sup>238</sup>U</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>TIMS (spectrom&eacute;trie de masse &agrave; thermo-ionisation)</td>
<td><sup>239</sup>Pu, <sup>240</sup>Pu</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>  </table>  <p>*&nbsp;Mesure du rayonnement de freinage (<em>bremsstrahlung</em>).<br />  **&nbsp;La spectroscopie alpha ne permet pas normalement de diff&eacute;rencier le <sup>239</sup>Pu et le <sup>240</sup>Pu.</p>
<h4>Cat&eacute;gories de programmes de contr&ocirc;le de l&rsquo;incorporation chez les personnes et choix des participants</h4>  <p>En vertu de l&rsquo;alin&eacute;a 27a) de la LSRN, chaque titulaire de permis doit conserver les documents prescrits par la r&eacute;glementation prise en vertu de la LSRN, ainsi qu&rsquo;un document sur la quantit&eacute; de rayonnement re&ccedil;ue par chaque personne &ndash; ou la dose engag&eacute;e &agrave; l&rsquo;&eacute;gard de chaque personne &ndash; dont les fonctions professionnelles sont li&eacute;es aux activit&eacute;s autoris&eacute;es par la LSRN ou qui se trouve dans un lieu o&ugrave; celles ci sont exerc&eacute;es. Cette disposition s&rsquo;applique &agrave; toutes les personnes qui pourraient se trouver dans les locaux du titulaire de permis et &ecirc;tre expos&eacute;es &agrave; des rayonnements, et qui sont donc sous la responsabilit&eacute; de ce dernier pour ce qui est de la d&eacute;termination et du contr&ocirc;le des doses. Cette exigence est &eacute;galement &eacute;nonc&eacute;e au paragraphe 5(1) du RRP. Une radioexposition ou une dose peut &ecirc;tre d&eacute;termin&eacute;e par mesure directe &agrave; la suite d&rsquo;un contr&ocirc;le, comme l&rsquo;exige l&rsquo;alin&eacute;a 5(2)a) du RRP. La pr&eacute;sente section s&rsquo;int&eacute;resse &agrave; la<br /> &laquo; mesure directe r&eacute;sultant du contr&ocirc;le &raquo;. L&rsquo;alin&eacute;a 5(2)b) du RRP stipule que la dose peut &ecirc;tre estim&eacute;e &laquo; par &eacute;valuation, lorsque le temps et les ressources exig&eacute;s pour une mesure directe sont trop importants par rapport &agrave; son utilit&eacute; &raquo;.</p>  <p>La participation &agrave; un programme de contr&ocirc;le individuel devrait &ecirc;tre fond&eacute;e sur la probabilit&eacute; d&rsquo;incorporation de radionucl&eacute;ides par les travailleurs au cours de leurs activit&eacute;s courantes ou lors d&rsquo;accidents. Le programme de contr&ocirc;le devrait &ecirc;tre con&ccedil;u de mani&egrave;re &agrave; fournir suffisamment de donn&eacute;es d&rsquo;un niveau de qualit&eacute; n&eacute;cessaire pour atteindre l&rsquo;objectif du programme, par exemple pour d&eacute;terminer la DEE des travailleurs, pour &eacute;valuer la probabilit&eacute; d&rsquo;une incorporation et pour d&eacute;terminer le potentiel de n&eacute;phrotoxicit&eacute; d&eacute;coulant de l&rsquo;incorporation d&rsquo;uranium, le cas &eacute;ch&eacute;ant.</p>  <p>Les sections 9.1.1 &agrave; 9.1.4 d&eacute;crivent quatre types de programmes de contr&ocirc;le individuel :</p>
<ul>
<li>essai biologique r&eacute;gulier</li>
<li>essai biologique sp&eacute;cial</li>
<li>contr&ocirc;le de confirmation</li>
<li>contr&ocirc;le propre aux t&acirc;ches effectu&eacute;es</li>
</ul>  <p>Les &eacute;valuations des essais biologiques de base sont &eacute;galement d&eacute;crites.</p>
<h4>9.1.1	Essai biologique r&eacute;gulier</h4>  <p>On proc&egrave;de &agrave; un contr&ocirc;le r&eacute;gulier dans les situations o&ugrave; l&rsquo;incorporation de radionucl&eacute;ides par les travailleurs est probable pendant le d&eacute;roulement normal de l&rsquo;activit&eacute; autoris&eacute;e. On utilise aussi ce type de contr&ocirc;le pour d&eacute;tecter l&rsquo;incorporation non pr&eacute;vue, et on le r&eacute;alise g&eacute;n&eacute;ralement lorsque le potentiel d&rsquo;incorporation est essentiellement continu dans le cadre des op&eacute;rations normales, c&rsquo;est-&agrave;-dire que l&rsquo;incorporation peut se produire en tout temps pendant les activit&eacute;s normales. Comme les mesures r&eacute;guli&egrave;res sont effectu&eacute;es &agrave; des moments pr&eacute;d&eacute;termin&eacute;s, on formule certaines hypoth&egrave;ses au sujet du moment et du profil de l&rsquo;incorporation (p. ex., incorporation aigu&euml; ou chronique, incorporation aigu&euml; au milieu de l&rsquo;intervalle de contr&ocirc;le).</p>  <p>Les programmes de contr&ocirc;le r&eacute;gulier devraient faire en sorte que la DEE annuelle aux travailleurs de 1 mSv ou plus est bel et bien d&eacute;tect&eacute;e. Le titulaire de permis devrait donc identifier les travailleurs qui sont susceptibles, de mani&egrave;re probable, de recevoir :</p>
<ul>
<li>une DEE annuelle (c.-&agrave;-d. une DEE r&eacute;sultant de toutes les incorporations professionnelles de radionucl&eacute;ides au cours d&rsquo;une ann&eacute;e) jusqu&rsquo;&agrave; 1 mSv (non-TSN)</li>
<li>une DEE annuelle sup&eacute;rieure &agrave; 1 mSv et une dose efficace annuelle totale (c.-&agrave;-d. la somme de la dose efficace annuelle due &agrave; des sources externes et de la DEE annuelle) jusqu&rsquo;&agrave; 5 mSv (pour les TSN qui participent &agrave; un programme d&rsquo;essais biologiques r&eacute;guliers, mais la d&eacute;termination de la dose n&rsquo;est pas n&eacute;cessairement assur&eacute;e par un service de dosim&eacute;trie autoris&eacute;)</li>
<li>une DEE annuelle sup&eacute;rieure &agrave; 1 mSv et une dose efficace annuelle totale sup&eacute;rieure &agrave; 5 mSv (pour les TSN participant &agrave; un programme d&rsquo;essais biologiques r&eacute;guliers et pour lesquels les mesures sont fournies par un service de dosim&eacute;trie autoris&eacute;) (RRP, article 8)</li>
</ul>  <p>Dans certains cas, la probabilit&eacute; que la limite de 1 mSv/an soit d&eacute;pass&eacute;e pourrait &ecirc;tre &eacute;valu&eacute;e en fonction de l&rsquo;activit&eacute; manipul&eacute;e par le travailleur, du type de radionucl&eacute;ides en cause, de la forme physique et chimique des radionucl&eacute;ides, du type de confinement utilis&eacute; et de la nature des activit&eacute;s r&eacute;alis&eacute;es. Lorsqu&rsquo;un type de radionucl&eacute;ide est manipul&eacute; quotidiennement (c.-&agrave;-d. environ 250 jours par ann&eacute;e), les travailleurs qui manipulent l&rsquo;activit&eacute; indiqu&eacute;e dans le tableau 6 devraient participer &agrave; un programme d&rsquo;essais biologiques. Il est &agrave; noter que pour d&eacute;cider si une personne devrait prendre part &agrave; un tel programme, les r&eacute;sultats des contr&ocirc;les par essai biologique d&rsquo;une p&eacute;riode d&rsquo;au moins deux ans pourraient remplacer les donn&eacute;es du tableau 6.</p>  <p>On devrait &eacute;galement envisager un contr&ocirc;le r&eacute;gulier des travailleurs qui ne pr&eacute;sentent pas une probabilit&eacute; raisonnable de d&eacute;passer une DEE de 1 mSv/an. Cependant, le titulaire de permis pourrait, en vertu de l&rsquo;alin&eacute;a 5(2)b) du RRP, d&eacute;terminer les doses pour ces travailleurs &laquo; par &eacute;valuation, lorsque le temps et les ressources exig&eacute;s pour une mesure directe sont trop importants par rapport &agrave; son utilit&eacute; &raquo;.</p>  <p>L&rsquo;origine des valeurs du tableau 6 est pr&eacute;sent&eacute;e &agrave; l&rsquo;annexe B, &laquo; D&eacute;termination de l&rsquo;activit&eacute; manipul&eacute;e pour le choix des participants &agrave; un programme de contr&ocirc;le r&eacute;gulier de l&rsquo;incorporation &raquo;, et on pourrait utiliser ces donn&eacute;es pour calculer des valeurs propres au site. L&rsquo;annexe B d&eacute;finit les param&egrave;tres requis pour d&eacute;finir la fraction d&rsquo;incorporation potentielle (FIP). Pour un sc&eacute;nario donn&eacute; d&rsquo;incorporation, la valeur LAI/FIP repr&eacute;sente l&rsquo;activit&eacute; manipul&eacute;e par jour d&rsquo;exploitation qui pourrait r&eacute;sulter en une incorporation annuelle &eacute;gale &agrave; la LAI, et donc r&eacute;sulter en une DEE de 20 mSv/an. Le crit&egrave;re fix&eacute; pour la participation au programme d&rsquo;essais biologiques est de 1 mSv. Par cons&eacute;quent, les donn&eacute;es du tableau 6 repr&eacute;sentent la quantit&eacute; LAI / (20 &times; FIP).</p>
<p><strong>Tableau 6 : Activit&eacute; manipul&eacute;e quotidiennement sur une p&eacute;riode d&rsquo;un an, au-del&agrave; de laquelle l&rsquo;essai biologique r&eacute;gulier est recommand&eacute;</strong></p>  <table className="">
<tr>
<th className="text-center" rowspan="2">Confinement</th>
<th colSpan="3">Volatilit&eacute;</th>
</tr>
<tr>
<th>Gaz et liquides volatils</th>
<th className="text-center">Poudres</th>
<th>Liquides non volatils et solides</th>
</tr>
<tr>
<td>Aucun</td>
<td className="text-center">&ge; 2 &times; LAI</td>
<td className="text-center">&ge; 20 &times; LAI</td>
<td className="text-center">&ge; 200 &times; LAI</td>
</tr>
<tr>
<td>Hotte</td>
<td className="text-center">&ge; 200 &times; LAI</td>
<td className="text-center">&ge; 2,000 &times; LAI</td>
<td className="text-center">&ge; 20,000 &times; LAI</td>
</tr>
<tr>
<td>Bo&icirc;te &agrave; gants</td>
<td className="text-center">&ge; 20,000 &times; LAI</td>
<td className="text-center">&ge; 200,000 &times; LAI</td>
<td className="text-center">&ge; 2,000,000 &times; LAI</td>
</tr>
<tr>
<td>Flacons scell&eacute;s et seringues</td>
<td className="text-center">&ge; 50 &times; LAI</td>
<td className="text-center">Non applicable</td>
<td className="text-center">&ge; 10,000 &times; LAI</td>
</tr>  </table>
<p>Lorsque les radionucl&eacute;ides sont manipul&eacute;s moins fr&eacute;quemment que sur une base quotidienne, les valeurs du tableau 6 peuvent &ecirc;tre modifi&eacute;es selon la m&eacute;thode de l&rsquo;annexe B.</p>  <p>Il est recommand&eacute; de proc&eacute;der &agrave; des essais biologiques pour les travailleurs qui sont tenus de porter un &eacute;quipement de protection respiratoire afin de limiter express&eacute;ment l&rsquo;incorporation des radionucl&eacute;ides.</p>  <p>La cat&eacute;gorie &laquo; Flacons scell&eacute;s et seringues &raquo; du tableau 6 s&rsquo;applique aux sources qui r&eacute;pondent aux conditions suivantes :</p>
<ul>
<li>elles sont manipul&eacute;es exclusivement dans des flacons scell&eacute;s et des seringues</li>
<li>elles ont une p&eacute;riode radiologique inf&eacute;rieure &agrave; sept jours</li>
<li>la manipulation de la radioactivit&eacute; est plus ou moins uniforme au cours de l&rsquo;ann&eacute;e</li>
<li>les mati&egrave;res radioactives ne sont pas &agrave; l&rsquo;&eacute;tat d&rsquo;a&eacute;rosol ni port&eacute;es &agrave; &eacute;bullition dans un contenant ouvert ou comportant des ouvertures</li>
<li>les mati&egrave;res radioactives se pr&eacute;sentent sous forme d&rsquo;une solution dilu&eacute;e</li>
<li>les mati&egrave;res radioactives sont contenues dans un flacon multidose qui n&rsquo;est jamais ouvert, et dont les quantit&eacute;s ne sont pr&eacute;lev&eacute;es que dans des seringues hypodermiques pour injection imm&eacute;diate dans un autre flacon multidose ou une autre forme de confinement ferm&eacute;, ou administration aux patients</li>
<li>les mesures de contr&ocirc;le de la contamination sont efficaces, et un contr&ocirc;le de surface r&eacute;gulier est effectu&eacute; lorsque les flacons scell&eacute;s et les seringues sont manipul&eacute;s</li>
</ul>  <p>La cat&eacute;gorie &laquo; Flacons scell&eacute;s et seringues &raquo; vise &agrave; englober les compos&eacute;s pour lesquels les p&eacute;riodes d&rsquo;essais biologiques r&eacute;guliers pourraient s&rsquo;av&eacute;rer impraticables en raison de leur courte p&eacute;riode radioactive, compte tenu du confinement suppl&eacute;mentaire que procure le flacon, comme il est d&eacute;crit au point 6 ci-dessus. Les compos&eacute;s pourraient &ecirc;tre class&eacute;s dans la cat&eacute;gorie &laquo; Flacons scell&eacute;s et seringues &raquo;, &agrave; la condition que le potentiel d&rsquo;incorporation soit contr&ocirc;l&eacute; par des mesures efficaces de contr&ocirc;le de la contamination et que les mesures de radioprotection soient efficaces.</p>  <p>Les donn&eacute;es du tableau 6 sont g&eacute;n&eacute;rales et n&rsquo;englobent pas tous les sc&eacute;narios. De plus, lorsqu&rsquo;il y a des barri&egrave;res m&eacute;caniques ou d&rsquo;autres barri&egrave;res physiques en place pour prot&eacute;ger le travailleur (comme des bo&icirc;tes &agrave; gants et des hottes), les barri&egrave;res devraient convenir au radio-isotope manipul&eacute; et &ecirc;tre utilis&eacute;es comme pr&eacute;vu et entretenues de mani&egrave;re ad&eacute;quate.</p>  <p>Lorsque plus d&rsquo;un type de radionucl&eacute;ide est manipul&eacute; sous une ou plusieurs formes chimiques, ou lorsque plus d&rsquo;un proc&eacute;d&eacute; peut mener &agrave; l&rsquo;incorporation (p. ex., si on utilise divers types de confinement ou facteurs d&rsquo;occupation), on devrait suivre les &eacute;tapes suivantes pour d&eacute;terminer si un travailleur devait participer &agrave; un programme d&rsquo;essais biologiques :</p>
<ol>
<li>calculer le ratio r<em><sub>j</sub></em>, de la quantit&eacute; d&rsquo;un radionucl&eacute;ide, j, manipul&eacute;e quotidiennement, &agrave; la quantit&eacute; maximale de ce radionucl&eacute;ide pouvant &ecirc;tre manipul&eacute;e dans le cadre des activit&eacute;s quotidiennes mais qui est au-del&agrave; de laquelle un essai biologique est recommand&eacute;, selon le tableau 6</li>
<li>calculer ce ratio pour tous les autres <em>N</em> radionucl&eacute;ides manipul&eacute;s</li>
<li>additionner tous les ratios calcul&eacute;s aux &eacute;tapes 1 et 2 ci-dessus :</li>
</ol>
<table className=" table-border-none">  <tr>  	<td className="text-center text-center" width="20">(8)</td>  	<td width="70" className="text-center">  <math display=&#39;block&#39;>   <semantics>
<mrow>
<mtext>Seuil&#x00A0;d&#39;essai&#x00A0;</mtext><mtext>biologique</mtext><mo stretchy=&#39;false&#39;>(</mo><msub>
<mi>B</mi>
<mi>T</mi>
</msub>
<mo stretchy=&#39;false&#39;>)</mo><mo>=</mo><mstyle displaystyle=&#39;true&#39;>
<munderover>
<mo>&#x2211;</mo>
<mi>j</mi>
<mi>N</mi>
</munderover>
<mrow>
<msub>
<mi>r</mi>
<mi>j</mi>
</msub>
</mrow>
</mstyle></mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaaeOqaiaabM
gacaqGVbGaaeyyaiaabohacaqGZbGaaeyyaiaabMhacaqGGaGaaeiv
aiaabIgacaqGYbGaaeyzaiaabohacaqGObGaae4BaiaabYgacaqGKb
GaaiikaiaadkeadaWgaaWcbaGaamivaaqabaGccaGGPaGaeyypa0Za
aabCaeaacaWGYbWaaSbaaSqaaiaadQgaaeqaaaqaaiaadQgaaeaaca
WGobaaniabggHiLdaaaa@5074@
</annotation>   </semantics>  </math>  	</td>  	</tr>  </table>
<p>Un essai biologique devrait &ecirc;tre effectu&eacute; pour tout radionucl&eacute;ide pour lequel r<em><sub>j</sub></em> &ge; 1. Si B<sub>T</sub> &ge; 1, et un essai biologique devrait &ecirc;tre effectu&eacute; pour tout radionucl&eacute;ide, toute forme chimique ou tout proc&eacute;d&eacute; pour lequel r<em><sub>j</sub></em> &ge; 0,3. Dans les situations o&ugrave; B<sub>T</sub> &lt; 1 mais o&ugrave; l&rsquo;une des valeurs r<em><sub>j</sub></em> est sup&eacute;rieure &agrave; 0,3, le titulaire de permis pourrait choisir de contr&ocirc;ler le travailleur pour ces radionucl&eacute;ides. Lorsque l&rsquo;on d&eacute;termine s&rsquo;il y a lieu d&rsquo;effectuer un contr&ocirc;le r&eacute;gulier de l&rsquo;incorporation, les impuret&eacute;s radioactives qui pourraient &ecirc;tre pr&eacute;sentes dans un produit, comme un produit radiopharmaceutique, devraient &ecirc;tre incluses dans l&rsquo;&eacute;valuation.</p>  <p>On devrait proc&eacute;der &agrave; des &eacute;valuations de base avant d&rsquo;effectuer des travaux n&eacute;cessitant un essai biologique r&eacute;gulier. Cette &eacute;valuation d&eacute;termine l&rsquo;exposition du travailleur aux radionucl&eacute;ides en raison d&rsquo;une exp&eacute;rience professionnelle ant&eacute;rieure, de proc&eacute;dures m&eacute;dicales ou de la pr&eacute;sence d&rsquo;une radioactivit&eacute; naturelle dans le corps.</p>  <p>Le but d&rsquo;une &eacute;valuation de base par essai biologique est d&rsquo;&eacute;valuer la quantit&eacute; de radionucl&eacute;ides dans le corps d&rsquo;un travailleur &agrave; la suite de l&rsquo;incorporation avant un travail n&eacute;cessitant un essai biologique r&eacute;gulier.</p>  <p>L&rsquo;&eacute;valuation de base par essai biologique est appropri&eacute;e dans l&rsquo;une ou l&rsquo;autre des circonstances suivantes :</p>
<ol>
<li>Le travailleur a d&eacute;j&agrave; &eacute;t&eacute; expos&eacute; aux radionucl&eacute;ides en cause et la r&eacute;tention effective dans l&rsquo;organisme peut d&eacute;passer l&rsquo;activit&eacute; d&eacute;riv&eacute;e (AD) (voir la section 9.1.6).</li>
<li>Les renseignements sur l&rsquo;exposition ant&eacute;rieure ne sont pas disponibles ou ne sont pas concluants.</li>
<li>Le travailleur travaillera avec des radionucl&eacute;ides qui pourraient &ecirc;tre d&eacute;celables par essai biologique, ces radionucl&eacute;ides &eacute;tant attribuables &agrave; des sources non professionnelles (p. ex., des radionucl&eacute;ides administr&eacute;s &agrave; des fins m&eacute;dicales).</li>
</ol>
<h4>9.1.2	Essai biologique sp&eacute;cial</h4>  <p>Un essai biologique sp&eacute;cial est effectu&eacute; en r&eacute;ponse &agrave; une circonstance particuli&egrave;re, telle qu&rsquo;une incorporation connue ou pr&eacute;sum&eacute;e de radionucl&eacute;ides survenant dans des circonstances anormales sur le lieu de travail. Les essais biologiques sp&eacute;ciaux sont &eacute;galement appel&eacute;s &laquo; essais biologiques ponctuels &raquo;. Un essai biologique sp&eacute;cial pourrait &ecirc;tre rendu n&eacute;cessaire soit par le r&eacute;sultat d&rsquo;un contr&ocirc;le r&eacute;gulier, soit par un incident anormal sugg&eacute;rant qu&rsquo;un seuil d&rsquo;intervention (tel que d&eacute;fini dans le RRP) ou la limite de dose pourrait avoir &eacute;t&eacute; d&eacute;pass&eacute;. Des essais biologiques sp&eacute;ciaux pourraient &eacute;galement &ecirc;tre requis en raison d&rsquo;un crit&egrave;re d&eacute;fini par le titulaire de permis, par exemple si la DEE d&rsquo;un travailleur d&eacute;passe 1 mSv. Dans de tels cas, la dose devrait &ecirc;tre d&eacute;termin&eacute;e sur la base de donn&eacute;es propres &agrave; la situation. L&rsquo;annexe C pr&eacute;sente de l&rsquo;orientation sur les essais biologiques sp&eacute;ciaux.</p>
<h4>9.1.3	Contr&ocirc;le de confirmation</h4>  <p>Un programme d&rsquo;essais biologiques de confirmation est destin&eacute; &agrave; v&eacute;rifier si :</p>
<ul>
<li>les hypoth&egrave;ses sur les conditions d&rsquo;exposition radiologique au travail sont exactes</li>
<li>les mesures de protection sont efficaces</li>
<li>un essai biologique r&eacute;gulier est requis</li>
</ul>  <p>Cela pourrait comprendre le contr&ocirc;le en milieu de travail ou un contr&ocirc;le individuel limit&eacute; des travailleurs qui ne r&eacute;pondent pas aux crit&egrave;res de participation &agrave; un programme d&rsquo;essais biologiques r&eacute;guliers. Lorsque des travailleurs manipulent des radionucl&eacute;ides non scell&eacute;s ou qu&rsquo;ils pourraient y &ecirc;tre expos&eacute;s, mais qu&rsquo;ils ne satisfont pas aux crit&egrave;res de participation &agrave; un programme d&rsquo;essais biologiques r&eacute;guliers, le contr&ocirc;le de l&rsquo;incorporation pourrait &ecirc;tre effectu&eacute; dans le cadre d&rsquo;un programme de contr&ocirc;le de confirmation. La fr&eacute;quence des essais pourrait &ecirc;tre la m&ecirc;me que la fr&eacute;quence des essais r&eacute;guliers ou pourrait varier si l&rsquo;exposition potentielle &agrave; des radionucl&eacute;ides non scell&eacute;s est peu fr&eacute;quente (en tenant compte de la p&eacute;riode radioactive biologique des radionucl&eacute;ides).</p>  <p>Dans le cadre d&rsquo;un programme de contr&ocirc;le de confirmation, les travailleurs sont soumis &agrave; des essais biologiques <em>in vivo</em> ou <em>in vitro</em> et le programme pourrait comporter l&rsquo;&eacute;chantillonnage d&rsquo;une fraction d&rsquo;un groupe de travailleurs. Lorsque les r&eacute;sultats du contr&ocirc;le de confirmation montrent qu&rsquo;une DEE annuelle de 1 mSv pourrait passer inaper&ccedil;ue sans contr&ocirc;le r&eacute;gulier, d&rsquo;autres mesures devraient &ecirc;tre prises pour confirmer l&rsquo;incorporation, et on devrait effectuer une enqu&ecirc;te pour d&eacute;terminer la cause du r&eacute;sultat inattendu. Si l&rsquo;incorporation est confirm&eacute;e, les hypoth&egrave;ses concernant les conditions d&rsquo;exposition radiologique au travail et l&rsquo;efficacit&eacute; des mesures de protection en place devraient &ecirc;tre revues, et on devrait &eacute;galement r&eacute;&eacute;valuer s&rsquo;il y a lieu que les travailleurs concern&eacute;s participent &agrave; un programme d&rsquo;essais biologiques r&eacute;guliers. Tous les r&eacute;sultats des contr&ocirc;les de confirmation devraient &ecirc;tre enregistr&eacute;s.</p>  <p>Les contr&ocirc;les de confirmation devraient &ecirc;tre utilis&eacute;s pour v&eacute;rifier les fondements d&rsquo;un programme de contr&ocirc;les r&eacute;guliers si des changements importants ont &eacute;t&eacute; apport&eacute;s &agrave; l&rsquo;installation ou aux activit&eacute;s de l&rsquo;installation. En outre, des contr&ocirc;les de confirmation, &agrave; l&rsquo;aide d&rsquo;&eacute;chantillonneurs d&rsquo;air individuels ou d&rsquo;essais biologiques individuels, devraient &ecirc;tre effectu&eacute;s pour s&rsquo;assurer que les r&eacute;sultats du contr&ocirc;le de l&rsquo;air en milieu de travail peuvent &ecirc;tre consid&eacute;r&eacute;s comme &eacute;tant repr&eacute;sentatifs.</p>
<h4>9.1.4	Contr&ocirc;le li&eacute; aux t&acirc;ches</h4>  <p>Le contr&ocirc;le li&eacute; aux t&acirc;ches permet d&rsquo;obtenir des renseignements sur une activit&eacute; ou une t&acirc;che particuli&egrave;re et pourrait servir de base &agrave; des d&eacute;cisions concernant la conduite des activit&eacute;s ou de la t&acirc;che. Ce type de contr&ocirc;le est g&eacute;n&eacute;ralement utilis&eacute; pour des t&acirc;ches &agrave; court terme. Un contr&ocirc;le li&eacute; aux t&acirc;ches devrait &ecirc;tre effectu&eacute; sous forme de contr&ocirc;le r&eacute;gulier, &agrave; moins que les circonstances de l&rsquo;activit&eacute; ne l&rsquo;exigent autrement, par exemple, si les radionucl&eacute;ides en cause pourraient &ecirc;tre diff&eacute;rents ou si la probabilit&eacute; ou l&rsquo;ampleur potentielle de l&rsquo;exposition interne pourrait &ecirc;tre beaucoup plus grande.</p>
<h4>9.1.5	Intervalle de contr&ocirc;le</h4>  <p>Au moment de choisir la fr&eacute;quence d&rsquo;un contr&ocirc;le r&eacute;gulier, les principaux facteurs &agrave; prendre en compte sont les suivants :</p>
<ol>
<li>les caract&eacute;ristiques du lieu de travail</li>
<li>l&rsquo;incertitude quant au moment de l&rsquo;incorporation</li>
<li>la sensibilit&eacute; des instruments</li>
<li>la n&eacute;cessit&eacute; d&rsquo;obtenir en temps opportun des renseignements sur l&rsquo;&eacute;v&eacute;nement d&rsquo;incorporation</li>
<li>la p&eacute;riode radioactive efficace du radionucl&eacute;ide pour lequel le contr&ocirc;le est effectu&eacute;</li>
</ol>  <p>La fr&eacute;quence des contr&ocirc;les r&eacute;guliers devrait &ecirc;tre d&eacute;termin&eacute;e a priori et tenir compte de l&rsquo;exposition probable des travailleurs. Pour chaque radionucl&eacute;ide pr&eacute;sent au travail, sa forme physique et chimique devrait &ecirc;tre connue pour les contr&ocirc;les r&eacute;guliers et autres. Ces formes physique et chimique d&eacute;terminent la r&eacute;tention et la clairance des voies respiratoires apr&egrave;s l&rsquo;inhalation, pour chaque radionucl&eacute;ide, ainsi que leurs voies et taux d&rsquo;excr&eacute;tion respectifs. Ces donn&eacute;es permettront &eacute;galement de choisir des m&eacute;thodes d&rsquo;essai biologique appropri&eacute;es.</p>  <p>La publication 119 de la CIPR, <span lang="en"><em>Compendium of Dose Coefficients based on ICRP Publication 60</em></span> [12] fournit de l&rsquo;orientation sur le choix des types d&rsquo;absorption pulmonaire pour divers compos&eacute;s. Le  mod&egrave;le des voies respiratoires humaines de la CIPR est d&eacute;crit en d&eacute;tail dans sa publication 66, <span lang="en"><em>Human Respiratory Tract Model for Radiological Protection</em></span> [15] et sa mise &agrave; jour [11].</p>  <p>Un autre facteur dont il faut tenir compte dans le choix de la fr&eacute;quence des contr&ocirc;les r&eacute;guliers est l&rsquo;incertitude quant au moment de l&rsquo;incorporation. &Agrave; moins que l&rsquo;on ait des donn&eacute;es d&eacute;montrant un profil d&rsquo;incorporation chronique, les r&eacute;sultats des mesures courantes devraient &ecirc;tre &eacute;valu&eacute;s de fa&ccedil;on que l&rsquo;on puisse pr&eacute;sumer que l&rsquo;incorporation s&rsquo;est produite au milieu de la p&eacute;riode de contr&ocirc;le.</p>  <p>La sensibilit&eacute; des instruments joue un r&ocirc;le important dans le choix de la fr&eacute;quence des contr&ocirc;les. En effet, on devrait choisir cette fr&eacute;quence de mani&egrave;re &agrave; ce que les doses importantes ne passent pas inaper&ccedil;ues. Une dose pourrait &ecirc;tre omise si, &agrave; la suite d&rsquo;une incorporation, le contenu corporel ou le taux d&rsquo;excr&eacute;tion des radionucl&eacute;ides dans le corps &eacute;tait r&eacute;duit &agrave; un niveau inf&eacute;rieur &agrave; l&rsquo;activit&eacute; minimale d&eacute;tectable (AMD) de l&rsquo;instrument pendant la p&eacute;riode entre l&rsquo;incorporation et la mesure. La p&eacute;riode radioactive efficace est une mesure du taux auquel le contenu corporel et le taux d&rsquo;excr&eacute;tion des radionucl&eacute;ides diminuent avec le temps, apr&egrave;s leur incorporation. Dans la mesure du possible, la p&eacute;riode de contr&ocirc;le devrait &ecirc;tre telle que l&rsquo;incorporation annuelle correspondant &agrave; une DEE de 1 mSv ne passe pas inaper&ccedil;ue. Si cela n&rsquo;est pas r&eacute;alisable, il faudrait avoir recours &agrave; un contr&ocirc;le en milieu de travail et &agrave; l&rsquo;&eacute;chantillonnage de l&rsquo;air personnel pour accro&icirc;tre le contr&ocirc;le de l&rsquo;incorporation. En appliquant le mod&egrave;le m&eacute;tabolique appropri&eacute; et en supposant un mod&egrave;le d&rsquo;incorporation, la p&eacute;riode ad&eacute;quate de contr&ocirc;le peut &ecirc;tre d&eacute;termin&eacute;e.</p>  <p>Afin de relier les r&eacute;sultats des essais biologiques &agrave; la dose annuelle extrapol&eacute;e, l&rsquo;AD a &eacute;t&eacute; d&eacute;finie comme suit :</p>
<table className=" table-border-none">  <tr>  	<td className="text-center text-center" width="20">(9)</td>  	<td width="70" className="text-center">  <math display=&#39;block&#39;>   <semantics>
<mrow>
<mtext>AD&#x00A0;=&#x00A0;</mtext><mfrac>
<mn>1</mn>
<mrow>
<mn>20</mn></mrow>
</mfrac>
<mtext>LIA</mtext><mfrac>
<mtext>T</mtext>
<mrow>
<mn>365</mn></mrow>
</mfrac>
<mi>m</mi><mrow><mo>(</mo>
<mrow>
<mfrac>
<mtext>T</mtext>
<mn>2</mn>
</mfrac>
</mrow>
<mo>)</mo></mrow></mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaaeiraiaabg
eacaqGGaGaaeypaiaabccadaWcaaqaaiaaigdaaeaacaaIYaGaaGim
aaaacaqGbbGaaeitaiaabMeadaWcaaqaaiaabsfaaeaacaaIZaGaaG
OnaiaaiwdaaaGaamyBamaabmaabaWaaSaaaeaacaqGubaabaGaaGOm
aaaaaiaawIcacaGLPaaaaaa@4568@
</annotation>   </semantics>  </math>  	</td>  	</tr>  </table>
<table className="table-border-none">  <tr>
<td>o&ugrave; :</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>  </tr>  <tr>
<td className="text-center">T</td>
<td>=</td>
<td>p&eacute;riode de contr&ocirc;le, en jours</td>  </tr>  <tr>
<td className="text-center" nowrap><em>m</em>(T/2)</td>
<td>=</td>
<td>fraction de l&rsquo;incorporation qui est retenue dans un tissu, un organe ou le corps entier, ou excr&eacute;t&eacute;e du corps &agrave; mi-chemin de la p&eacute;riode de contr&ocirc;le</td>  </tr>  <tr>
<td className="text-center">LIA</td>
<td>=</td>
<td>limite annuelle d&rsquo;incorporation</td>  </tr>  </table>
<p>Les valeurs de <em>m</em>(T/2) devraient &ecirc;tre obtenues d&rsquo;apr&egrave;s les mod&egrave;les courants de biocin&eacute;tique de la CIPR<sup id="fnb10-ref"><a className="fn-lnk" href="#fnb10"><span className="wb-inv">Footnote </span>10</a></sup> .</p>   <p>Comme l&rsquo;incertitude concernant le moment inconnu d&rsquo;incorporation par rapport au moment du contr&ocirc;le devrait &ecirc;tre inf&eacute;rieure &agrave; un facteur de 3, l&rsquo;intervalle de contr&ocirc;le devrait &eacute;galement satisfaire &agrave; la condition suivante :</p>
<table className=" table-border-none">  <tr>  	<td className="text-center text-center" width="20">(10)</td>  	<td width="60" className="text-center">  <math display=&#39;block&#39;>   <semantics>
<mrow>
<mfrac>
<mrow>
<mi>m</mi><mrow><mo>(</mo>
<mrow>
<mi>T</mi><mo>/</mo><mn>2</mn></mrow>
<mo>)</mo></mrow></mrow>
<mrow>
<mi>m</mi><mo stretchy=&#39;false&#39;>(</mo><mi>T</mi><mo stretchy=&#39;false&#39;>)</mo></mrow>
</mfrac>
<mo>&#x2264;</mo><mn>3</mn></mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaWaaSaaaeaaca
WGTbWaaeWaaeaacaWGubGaai4laiaaikdaaiaawIcacaGLPaaaaeaa
caWGTbGaaiikaiaadsfacaGGPaaaaiabgsMiJkaaiodaaaa@405F@
</annotation>   </semantics>  </math>  	</td>  	</tr>  </table>
<p>Lorsque la condition ci dessus est remplie, la p&eacute;riode maximale de contr&ocirc;le recommand&eacute;e est consid&eacute;r&eacute;e comme &eacute;tant le moment o&ugrave; l&rsquo;AD est &eacute;gale &agrave; l&rsquo;AMD. En cas d&rsquo;exposition probable &agrave; plus d&rsquo;un radionucl&eacute;ide, la p&eacute;riode de contr&ocirc;le devrait &ecirc;tre d&eacute;termin&eacute;e de fa&ccedil;on &agrave; ce qu&rsquo;une DEE annuelle de 1 mSv pour tous les radionucl&eacute;ides puisse &ecirc;tre d&eacute;tect&eacute;e et &eacute;valu&eacute;e avec fiabilit&eacute;. L&rsquo;AMD est d&eacute;finie comme suit (lorsque le temps de comptage de l&rsquo;&eacute;chantillon ou du sujet est diff&eacute;rent du temps de comptage du rayonnement de fond). Pour de plus amples renseignements, veuillez consulter l&rsquo;article dans <em>Health Physics</em> intitul&eacute; &laquo; <span lang="en">Minimum detectable Activity When Background is Counted Longer than Sample</span> &raquo; [18] :</p>
<table className=" table-border-none">  <tr>  	<td className="text-center text-center" width="20">(11)</td>  	<td width="60" className="text-center">  <math display=&#39;block&#39;>   <semantics>
<mrow>
<mi>A</mi><mi>M</mi><mi>D</mi><mo>=</mo><mfrac>
<mrow>
<mroot>
<mrow>
<msub>
<mi>R</mi>
<mi>b</mi>
</msub>
<msub>
<mi>t</mi>
<mi>g</mi>
</msub>
<mo stretchy=&#39;false&#39;>(</mo><mn>1</mn><mo>+</mo><mfrac>
<mrow>
<msub>
<mi>t</mi>
<mi>g</mi>
</msub>
</mrow>
<mrow>
<msub>
<mi>t</mi>
<mi>b</mi>
</msub>
</mrow>
</mfrac>
<mo stretchy=&#39;false&#39;>)</mo></mrow>
<mrow>
<mn>3</mn><mo>+</mo><mn>3,29</mn></mrow>
</mroot>
</mrow>
<mrow>
<mi>&#x03B5;</mi><mi>K</mi><msub>
<mi>t</mi>
<mi>g</mi>
</msub>
</mrow>
</mfrac>
</mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaamytaiaads
eacaWGbbGaeyypa0ZaaSaaaeaadaGcbaqaaiaadkfadaWgaaWcbaGa
amOyaaqabaGccaWG0bWaaSbaaSqaaiaadEgaaeqaaOGaaiikaiaaig
dacqGHRaWkdaWcaaqaaiaadshadaWgaaWcbaGaam4zaaqabaaakeaa
caWG0bWaaSbaaSqaaiaadkgaaeqaaaaakiaacMcaaSqaaiaaiodacq
GHRaWkcaaIZaGaaiOlaiaaikdacaaI5aaaaaGcbaGaeqyTduMaam4s
aiaadshadaWgaaWcbaGaam4zaaqabaaaaaaa@4DED@
</annotation>   </semantics>  </math>  	</td>  	</tr>  </table>
<table className="table-border-none">  <tr>
<td>Dans cette &eacute;quation :</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>  </tr>  <tr>
<td className="text-center">K</td>
<td>=</td>
<td>facteur de correction</td>  </tr>  <tr>
<td className="text-center">R<sub>b</sub></td>
<td>=</td>
<td>taux de comptage du rayonnement de fond</td>  </tr>  <tr>
<td className="text-center">t<sub>g</sub></td>
<td>=</td>
<td>temps de comptage brut (temps de comptage de l&rsquo;&eacute;chantillon ou de la personne)</td>  </tr>  <tr>
<td className="text-center">t<sub>b</sub></td>
<td>=</td>
<td>temps de comptage du rayonnement de fond</td>  </tr>  <tr>
<td className="text-center">&epsilon;</td>
<td>=</td>
<td>efficacit&eacute; du comptage</td>  </tr>  </table>
<p>Dans le cas des essais biologiques <em>in vitro</em> :</p>
<table className=" table-border-none">  <tr>  	<td className="text-center text-center" width="20">(12)</td>  	<td width="60" className="text-center">  <math display=&#39;block&#39;>   <semantics>
<mrow>
<msup>
<mrow>
<mtext>K=VYe</mtext></mrow>
<mrow>
<mo>&#x2212;</mo><mi>&#x03BB;</mi><mi>&#x0394;</mi><mi>t</mi></mrow>
</msup>
</mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaae4saiaab2
dacaqGwbGaaeywaiaabwgadaahaaWcbeqaaiabgkHiTiabeU7aSjab
fs5aejaadshaaaaaaa@3F4E@
</annotation>   </semantics>  </math>  	</td>  	</tr>  </table>
<table className="table-border-none">  <tr>
<td>o&ugrave; :</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>  </tr>  <tr>
<td className="text-center">V</td>
<td>=</td>
<td>taille de l&rsquo;&eacute;chantillon en unit&eacute;s de masse ou de volume, selon le type d&rsquo;&eacute;chantillon</td>  </tr>  <tr>
<td className="text-center">Y</td>
<td>=</td>
<td><p className="mrgn-tp-0">rendement chimique fractionnaire, le cas &eacute;ch&eacute;ant (sans unit&eacute;)<br />
(Remarque : si cette valeur n&rsquo;est pas applicable, Y = 1)</p></td>  </tr>  <tr>
<td className="text-center">&lambda;</td>
<td>=</td>
<td>constante de d&eacute;sint&eacute;gration radioactive du radionucl&eacute;ide (1/seconde)</td>  </tr>  <tr>
<td className="text-center">&Delta;t</td>
<td>=</td>
<td>temps &eacute;coul&eacute; entre le pr&eacute;l&egrave;vement de l&rsquo;&eacute;chantillon et le comptage, en secondes</td>  </tr>  </table>
<p>Pour les essais biologiques <em>in vivo</em>, K est le facteur de correction de l&rsquo;auto-absorption, le cas &eacute;ch&eacute;ant.</p>  <p>Dans certains cas, les meilleures m&eacute;thodes de contr&ocirc;le pourraient n&eacute;anmoins &ecirc;tre incapables de d&eacute;tecter de fa&ccedil;on fiable l&rsquo;incorporation correspondant &agrave; 1 mSv/an. Dans ces circonstances, il est utile de d&eacute;terminer la dose maximale qui pourrait &ecirc;tre omise si une incorporation avait lieu au d&eacute;but de chaque p&eacute;riode de contr&ocirc;le. Une telle m&eacute;thode offre une perspective utile pour certains dangers internes qui sont difficiles &agrave; d&eacute;tecter, mais elle peut s&rsquo;av&eacute;rer trop prudente, particuli&egrave;rement lorsqu&rsquo;il y a plusieurs p&eacute;riodes de contr&ocirc;le par ann&eacute;e.</p>  <p>&Agrave; l&rsquo;aide de cette m&eacute;thode servant &agrave; d&eacute;terminer la p&eacute;riode de contr&ocirc;le, une p&eacute;riode de contr&ocirc;le recommand&eacute;e d&rsquo;un an serait peut-&ecirc;tre possible pour certains radionucl&eacute;ides. Cependant, les taux de r&eacute;tention et d&rsquo;excr&eacute;tion chez la plupart des personnes varient par rapport au mod&egrave;le sur lequel les AD sont bas&eacute;es. En outre, de l&rsquo;information opportune concernant les &eacute;v&eacute;nements d&rsquo;incorporation est requise. Il devrait y avoir un &eacute;quilibre entre l&rsquo;utilisation des essais biologiques comme indicateur d&rsquo;incorporation et l&rsquo;utilisation des essais biologiques pour l&rsquo;&eacute;valuation des doses. &Agrave; cette fin, une p&eacute;riode de contr&ocirc;le inf&eacute;rieure &agrave; un an pourrait &ecirc;tre choisie en fonction d&rsquo;autres types de contr&ocirc;le en place (p. ex., le contr&ocirc;le de l&rsquo;air sur le lieu de travail), et on devrait tenir compte de la faisabilit&eacute; de r&eacute;aliser des essais biologiques. La norme ISO 20553:2006, <em>Surveillance professionnelle des travailleurs expos&eacute;s &agrave; un risque de contamination interne par des mat&eacute;riaux radioactifs</em> [19], fournit des suggestions concernant la fr&eacute;quence des contr&ocirc;les pour divers radionucl&eacute;ides et leurs formes chimiques types.</p>
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
<h3 id="sec9-2">9.2	Contr&ocirc;le de l&rsquo;air pour d&eacute;terminer la dose aux travailleurs</h3>  <p>Par mati&egrave;res radioactives dans l&rsquo;air, on d&eacute;signe toutes mati&egrave;res radioactives en suspension dans l&rsquo;air. Leurs caract&eacute;ristiques ou leurs concentrations pourraient &ecirc;tre telles qu&rsquo;il n&rsquo;existe aucun moyen pratique de d&eacute;terminer la dose au moyen d&rsquo;essais biologiques. Les mati&egrave;res radioactives en suspension dans l&rsquo;air existent sous diverses formes physiques et chimiques, notamment la poussi&egrave;re, les gaz, les fum&eacute;es et les vapeurs. La pr&eacute;sente section s&rsquo;applique aux mesures des mati&egrave;res radioactives dans l&rsquo;air qui sont utilis&eacute;es &agrave; des fins de dosim&eacute;trie.</p>  <p>Les m&eacute;thodes de contr&ocirc;le en milieu de travail pouvant &ecirc;tre utilis&eacute;es pour contr&ocirc;ler l&rsquo;incorporation individuelle des radionucl&eacute;ides comprennent l&rsquo;&eacute;chantillonnage de l&rsquo;air personnel et l&rsquo;&eacute;chantillonnage statique de l&rsquo;air. Un &eacute;chantillonneur d&rsquo;air personnel (EAP) est un appareil portatif port&eacute; par une personne. Il comprend une t&ecirc;te d&rsquo;&eacute;chantillonnage contenant un milieu de collecte appropri&eacute; (p. ex., un filtre), une pompe &agrave; air &eacute;talonn&eacute;e, un r&eacute;gulateur de d&eacute;bit d&rsquo;air et une batterie. La t&ecirc;te d&rsquo;&eacute;chantillonnage devrait &ecirc;tre port&eacute;e sur la partie sup&eacute;rieure du tronc et dans la zone de respiration de la personne, qui est d&eacute;finie comme &eacute;tant &agrave; moins de 30 cm de la t&ecirc;te de la personne selon la publication NUREG-1400, <span lang="en"><em>Air Sampling in the Workplace</em></span> [20]. L&rsquo;air est aspir&eacute; &agrave; travers le filtre par une pompe &eacute;talonn&eacute;e, &eacute;galement port&eacute;e par le travailleur. L&rsquo;activit&eacute; sur le filtre devrait &ecirc;tre mesur&eacute;e &agrave; la fin de la p&eacute;riode de port. Les &eacute;chantillonneurs d&rsquo;air statiques (ou fixes) sont utilis&eacute;s pour contr&ocirc;ler la concentration de radionucl&eacute;ides dans l&rsquo;air du lieu de travail. Un &eacute;chantillonneur d&rsquo;air statique (EAS) peut consister en un dispositif d&rsquo;&eacute;chantillonnage ponctuel ou d&rsquo;un contr&ocirc;leur en continu. Un EAS se compose d&rsquo;un milieu de collecte appropri&eacute;, d&rsquo;une pompe &agrave; air et d&rsquo;un dispositif de r&eacute;glage du d&eacute;bit d&rsquo;air. Le milieu de pr&eacute;l&egrave;vement peut  &ecirc;tre analys&eacute; en laboratoire. Cependant, certains &eacute;chantillonneurs EAS permettent un contr&ocirc;le en temps r&eacute;el et peuvent &ecirc;tre pourvus d&rsquo;une alarme r&eacute;gl&eacute;e pour se d&eacute;clencher &agrave; un taux d&rsquo;activit&eacute; ou de collecte pr&eacute;d&eacute;termin&eacute;.</p>  <p>On devrait utiliser avec prudence les r&eacute;sultats obtenus avec les EAS et les EAP, car des &eacute;tudes ont montr&eacute; qu&rsquo;il existe une faible corr&eacute;lation entre les r&eacute;sultats des EAP et des EAS, les r&eacute;sultats obtenus avec les EAS &eacute;tant g&eacute;n&eacute;ralement d&rsquo;un ordre de grandeur inf&eacute;rieur aux r&eacute;sultats des EAP. Des &eacute;tudes ont &eacute;galement montr&eacute; une faible corr&eacute;lation entre les r&eacute;sultats obtenus avec les EAS et les essais biologiques [11]. Pour de plus amples renseignements, veuillez consulter la publication 130 de la CIPR, <span lang="en"><em>Occupational Intakes of Radionuclides: Part I</em></span>. Les mesures avec les EAP et les EAS pourraient &ecirc;tre utilis&eacute;es dans le cadre d&rsquo;un programme global de contr&ocirc;le au travail, car elles peuvent permettre une identification pr&eacute;coce d&rsquo;une &eacute;ventuelle incorporation. Par cons&eacute;quent, un programme d&rsquo;&eacute;chantillonnage de l&rsquo;air personnel devrait &ecirc;tre con&ccedil;u pour d&eacute;tecter l&rsquo;incorporation anormale potentielle et d&eacute;clencher s&rsquo;il y a lieu un contr&ocirc;le par essais biologiques sp&eacute;ciaux, le cas &eacute;ch&eacute;ant. On pourrait &eacute;galement y recourir pour d&eacute;terminer les zones pr&eacute;sentant d&rsquo;&eacute;ventuels probl&egrave;mes en raison d&rsquo;une radioactivit&eacute; accrue en suspension dans l&rsquo;air, d&rsquo;apr&egrave;s l&rsquo;examen et les tendances des donn&eacute;es applicables d&rsquo;&eacute;chantillonnage statique de l&rsquo;air.</p>  <p>Les concentrations de mati&egrave;res radioactives en suspension dans l&rsquo;air sont mesur&eacute;es en termes d&rsquo;activit&eacute; ou de masse par unit&eacute; de volume de cette atmosph&egrave;re (p. ex., Bq/m<sup>3</sup>). On calcule l&rsquo;incorporation (p. ex., en Bq) provenant de cette concentration en multipliant la concentration par un d&eacute;bit respiratoire d&eacute;fini (p. ex., 1,2 m<sup>3</sup>/h) et le temps d&rsquo;occupation (h). On peut aussi d&eacute;terminer l&rsquo;exposition en termes de Bq h/m<sup>3</sup> et l&rsquo;incorporation sera alors cette valeur multipli&eacute;e par le rythme respiratoire. La concentration des mati&egrave;res radioactives en suspension dans l&rsquo;air peut &eacute;galement s&rsquo;exprimer en termes de limite d&eacute;riv&eacute;e de concentration dans l&rsquo;air (LDCA). De m&ecirc;me, l&rsquo;exposition pourrait &ecirc;tre exprim&eacute;e en termes de LDCA-heures.</p>  <p>Le d&eacute;bit des pompes des &eacute;chantillonneurs personnels et statiques d&rsquo;air, lorsqu&rsquo;elles sont utilis&eacute;es, ne devrait pas s&rsquo;&eacute;carter de plus de 5 % de la valeur estim&eacute;e utilis&eacute;e pour calculer la concentration. Le d&eacute;bit d&rsquo;air devrait &ecirc;tre v&eacute;rifi&eacute; chaque jour d&rsquo;utilisation de l&rsquo;&eacute;chantillonneur d&rsquo;air. Si le d&eacute;bit d&rsquo;air varie de &plusmn; 10 % pendant le pr&eacute;l&egrave;vement d&rsquo;un &eacute;chantillon, le d&eacute;bit utilis&eacute; pour la dosim&eacute;trie devrait &ecirc;tre la moyenne des d&eacute;bits d&rsquo;air initial et final.</p>  <p>Les &eacute;chantillonneurs d&rsquo;air devraient &ecirc;tre pourvus d&rsquo;un moyen de d&eacute;terminer le volume d&rsquo;air &eacute;chantillonn&eacute;. Les d&eacute;bitm&egrave;tres d&rsquo;air devraient &ecirc;tre &eacute;talonn&eacute;s au moins une fois par an, chaque fois que des r&eacute;parations ou des modifications sont apport&eacute;es &agrave; l&rsquo;appareil ou s&rsquo;il a &eacute;t&eacute; endommag&eacute;. De plus, au moment de l&rsquo;&eacute;talonnage du d&eacute;bit d&rsquo;air, on devrait v&eacute;rifier les &eacute;chantillonneurs d&rsquo;air et les conduites d&rsquo;&eacute;chantillonnage pour s&rsquo;assurer qu&rsquo;il n&rsquo;y a pas de fuite en amont du point de mesure. Les m&eacute;thodes d&rsquo;&eacute;talonnage devraient &ecirc;tre bas&eacute;es sur la m&eacute;thode courante recommand&eacute;e par l&rsquo;American Conference of Governmental Industrial Hygienists ou l&rsquo;Occupational Health and Safety Administration des &Eacute;tats-Unis. La m&eacute;thode, l&rsquo;identificateur unique de l&rsquo;appareil et la date d&rsquo;&eacute;talonnage devraient &ecirc;tre document&eacute;s.</p>  <p>Le titulaire de permis devrait d&eacute;montrer que l&rsquo;air &eacute;chantillonn&eacute; est repr&eacute;sentatif de l&rsquo;air dans la zone de respiration lorsqu&rsquo;une ou plusieurs des conditions suivantes sont r&eacute;unies : i) les &eacute;chantillonneurs d&rsquo;air personnels ne sont pas port&eacute;s &agrave; moins de 30 cm de la t&ecirc;te du travailleur, ii) les doses aux travailleurs seront d&eacute;termin&eacute;es sur la base du contr&ocirc;le de la radioactivit&eacute; dans l&rsquo;air, et/ou iii) l&rsquo;exposition annuelle est susceptible de d&eacute;passer 100 LDCA-heures (ou s&rsquo;il est probable que la DEE annuelle r&eacute;sultante pour les radionucl&eacute;ides inhal&eacute;s d&eacute;passe 1 mSv).</p>  <p>Ceci pourrait &ecirc;tre accompli par un contr&ocirc;le de confirmation &agrave; l&rsquo;aide d&rsquo;un essai biologique. Pour que l&rsquo;&eacute;chantillonnage de l&rsquo;air soit jug&eacute; repr&eacute;sentatif de l&rsquo;air dans la zone de respiration, le ratio de l&rsquo;incorporation calcul&eacute; d&rsquo;apr&egrave;s le contr&ocirc;le de la radioactivit&eacute; dans l&rsquo;air sur l&rsquo;incorporation calcul&eacute;e d&rsquo;apr&egrave;s les essais biologiques de confirmation, avec une moyenne prise pour tous les travailleurs participant au contr&ocirc;le de confirmation, devrait &ecirc;tre sup&eacute;rieur &agrave; 0,7. Le m&ecirc;me ratio pour chaque travailleur devrait &ecirc;tre sup&eacute;rieur &agrave; 0,5. Pour de plus amples renseignements &agrave; ce sujet, veuillez consulter le document NUREG-1400, <span lang="en"><em>Air Sampling in the Workplace</em></span> [20].</p>  <p>L&rsquo;efficacit&eacute; de la collecte des particules par l&rsquo;&eacute;chantillonneur d&rsquo;air devrait &ecirc;tre insensible &agrave; la taille des particules, autant que possible. Ceci exclut donc l&rsquo;utilisation de cyclones pour la collecte et la mesure des mati&egrave;res radioactives en suspension dans l&rsquo;air.</p>
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
<h2 id="sec10">10.	Interpr&eacute;tation des r&eacute;sultats du contr&ocirc;le</h2>
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
<h3 id="sec10-1">10.1	Seuils administratifs</h3>  <p>Les seuils administratifs, aussi appel&eacute;s seuils d&rsquo;enqu&ecirc;te, sont les valeurs auxquelles sont compar&eacute;es les quantit&eacute;s mesur&eacute;es dans le cadre d&rsquo;un programme de contr&ocirc;le individuel ou en milieu de travail. Lorsque ces quantit&eacute;s mesur&eacute;es d&eacute;passent un seuil administratif, des mesures pr&eacute;cises devraient &ecirc;tre prises.</p>  <p>Les seuils administratifs signalent une incorporation potentielle par les travailleurs et permettent une r&eacute;ponse graduelle &agrave; cette incorporation. Ils ne sont pas destin&eacute;s &agrave; constituer une limite r&eacute;glementaire en soi et pourraient &ecirc;tre exprim&eacute;s sous forme de fractions de la LAI appropri&eacute;e ou de la DEE. Lors de l&rsquo;&eacute;tablissement des seuils administratifs, la contribution d&rsquo;autres radionucl&eacute;ides ainsi que l&rsquo;exposition externe devraient &ecirc;tre pris en compte.</p>  <p>Comme le programme d&rsquo;essais biologiques ne mesure pas directement l&rsquo;incorporation ni la DEE, les seuils administratifs exprim&eacute;s en termes de quantit&eacute; sont g&eacute;n&eacute;ralement plus utiles. Le r&eacute;sultat d&rsquo;un essai biologique d&eacute;passant un seuil administratif indique un &eacute;cart par rapport aux conditions normales et la n&eacute;cessit&eacute; de prendre des mesures suppl&eacute;mentaires. Pour un programme d&rsquo;essais biologiques r&eacute;guliers, les seuils administratifs pourraient &ecirc;tre bas&eacute;s sur l&rsquo;incorporation pr&eacute;sum&eacute;e au milieu de la p&eacute;riode de contr&ocirc;le.</p>  <p>Pour certains radionucl&eacute;ides et types d&rsquo;essais biologiques, les sources non professionnelles pourraient faire en sorte que les r&eacute;sultats typiques d&eacute;passent le seuil de d&eacute;cision analytique et le seuil administratif. Si les r&eacute;sultats des essais biologiques d&eacute;passent normalement ou souvent un seuil administratif en raison de la pr&eacute;sence de sources non professionnelles, comme les radionucl&eacute;ides pr&eacute;sents &agrave; l&rsquo;&eacute;tat naturel, le seuil administratif pourrait &ecirc;tre augment&eacute; si on conna&icirc;t les r&eacute;sultats attendus des essais biologiques en raison de ces sources non professionnelles (p. ex., on pourrait recourir &agrave; une &eacute;tude utilisant un groupe t&eacute;moin subissant une exposition non professionnelle semblable, mais sans potentiel d&rsquo;exposition professionnelle). Si les niveaux non professionnels d&eacute;passent le seuil administratif, d&rsquo;autres m&eacute;thodes de contr&ocirc;le de l&rsquo;incorporation devraient &ecirc;tre utilis&eacute;es si possible.</p>  <p>Les titulaires de permis pourraient choisir d&rsquo;adopter des seuils administratifs en fonction des particularit&eacute;s de leurs programmes. De plus, un seuil administratif devrait &ecirc;tre &eacute;tabli pour s&rsquo;assurer que l&rsquo;incorporation de compos&eacute;s d&rsquo;uranium solubles approchant le seuil de toxicit&eacute; chimique soit &eacute;tudi&eacute;e.</p>  <p>Un seuil administratif pourrait &ecirc;tre &eacute;tabli pour que l&rsquo;incorporation qui conduit &agrave; une DEE sup&eacute;rieure &agrave; 1 mSv (ou sup&eacute;rieure &agrave; la limite de d&eacute;tection si cette derni&egrave;re se traduit par une DEE &gt; 1 mSv) soit &eacute;tudi&eacute;e. Ceci est appropri&eacute; dans les cas o&ugrave; la probabilit&eacute; qu&rsquo;il y ait plus d&rsquo;une telle incorporation au cours d&rsquo;une ann&eacute;e est faible. Lorsque la probabilit&eacute; est plus &eacute;lev&eacute;e, le seuil administratif devrait &ecirc;tre bas&eacute; sur une dose annuelle extrapol&eacute;e. Un exemple d&rsquo;un tel seuil administratif est le niveau d&rsquo;enqu&ecirc;te d&eacute;riv&eacute; (NED), qui pourrait &ecirc;tre d&eacute;fini comme suit :</p>
<table className=" table-border-none">  <tr>  	<td className="text-center text-center" width="20">(13)</td>  	<td width="70" className="text-center">  <math display=&#39;block&#39;>   <semantics>
<mrow>
<mi>N</mi><mi>E</mi><mi>D</mi><mtext>&#x00A0;=&#x00A0;</mtext><mi>N</mi><mi>E</mi><mrow><mo>(</mo>
<mrow>
<mfrac>
<mi>T</mi>
<mrow>
<mn>365</mn></mrow>
</mfrac>
</mrow>
<mo>)</mo></mrow><mi>m</mi><mrow><mo>(</mo>
<mrow>
<mfrac>
<mi>T</mi>
<mn>2</mn>
</mfrac>
</mrow>
<mo>)</mo></mrow></mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaamiraiaadM
eacaWGmbGaaeiiaiaab2dacaqGGaGaamysaiaadYeadaqadaqaamaa
laaabaGaamivaaqaaiaaiodacaaI2aGaaGynaaaaaiaawIcacaGLPa
aacaWGTbWaaeWaaeaadaWcaaqaaiaadsfaaeaacaaIYaaaaaGaayjk
aiaawMcaaaaa@44D1@
</annotation>   </semantics>  </math>  	</td>  	</tr>  </table>
<table className="table-border-none">  <tr>
<td>o&ugrave; :</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>  </tr>  <tr>
<td className="text-center">NE</td>
<td>=</td>
<td>incorporation menant &agrave; la DEE annuelle au-dessus de laquelle une enqu&ecirc;te devrait &ecirc;tre effectu&eacute;e, c&rsquo;est-&agrave;-dire un niveau d&rsquo;enqu&ecirc;te (NE)</td>  </tr>  <tr>
<td className="text-center">T</td>
<td>=</td>
<td>p&eacute;riode de contr&ocirc;le, en jours</td>  </tr>  <tr>
<td className="text-center" nowrap><em>m</em>(T/2)</td>
<td>=</td>
<td>fraction de l&rsquo;incorporation qui est retenue dans un tissu, un organe ou le corps entier, ou excr&eacute;t&eacute;e du corps &agrave; la fin de la p&eacute;riode de contr&ocirc;le, lorsqu&rsquo;une incorporation aigu&euml; est survenue au milieu de la p&eacute;riode de contr&ocirc;le</td>  </tr>  </table>
<p>Le NE devrait pas d&eacute;passer &frac14; &times; LAI (c.-&agrave;-d. une DEE de 5 mSv), et l&rsquo;exp&eacute;rience d&rsquo;exploitation devrait &ecirc;tre prise en compte dans le choix du NE afin qu&rsquo;il soit inf&eacute;rieur &agrave; 5 mSv. Cependant, si le NED est inf&eacute;rieur &agrave; la limite de d&eacute;tection, une enqu&ecirc;te devrait &ecirc;tre effectu&eacute;e chaque fois que la limite de d&eacute;tection est d&eacute;pass&eacute;e.</p>  <p>Pour tenir compte de la limite de dose r&eacute;duite pour les travailleuses enceintes, un NED devrait &ecirc;tre &eacute;tabli pour celles-ci, comme il est d&eacute;crit ci-dessus, sur la base d&rsquo;une fraction de la limite de dose de 4 mSv pour les TSN. La limite de dose pour les travailleuses enceintes est de 4 mSv pour le reste de la grossesse (c&rsquo;est-&agrave;-dire &agrave; partir du moment o&ugrave; la travailleuse informe le titulaire de permis). En formulant des hypoth&egrave;ses prudentes (par exemple, la grossesse est d&eacute;clar&eacute;e imm&eacute;diatement), et en s&rsquo;assurant que la dose &agrave; la travailleuse enceinte est &lt; 0,4 mSv par mois, on fait en sorte que la limite de 4 mSv ne soit pas d&eacute;pass&eacute;e. Par cons&eacute;quent, un NED pour les travailleuses enceintes, NEDTE, pourrait &ecirc;tre d&eacute;fini comme suit :</p>
<table className=" table-border-none">  <tr>  	<td className="text-center text-center" width="20">(14)</td>  	<td width="70" className="text-center">  <math display=&#39;block&#39;>   <semantics>
<mrow>
<mi>N</mi><mi>E</mi><msub>
<mi>D</mi>
<mrow>
<mi>T</mi><mi>E</mi></mrow>
</msub>
<mtext>&#x00A0;=&#x00A0;0</mtext><mtext>,02</mtext><mi>L</mi><mi>I</mi><mi>A</mi><mrow><mo>(</mo>
<mrow>
<mfrac>
<mi>T</mi>
<mrow>
<mn>30</mn></mrow>
</mfrac>
</mrow>
<mo>)</mo></mrow><mi>m</mi><mrow><mo>(</mo>
<mrow>
<mfrac>
<mi>T</mi>
<mn>2</mn>
</mfrac>
</mrow>
<mo>)</mo></mrow></mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaamiraiaadM
eacaWGmbWaaSbaaSqaaiaadcfacaWGxbaabeaakiaabccacaqG9aGa
aeiiaiaabcdacaqGUaGaaeimaiaabkdacaWGbbGaamitaiaadMeada
qadaqaamaalaaabaGaamivaaqaaiaaiodacaaIWaaaaaGaayjkaiaa
wMcaaiaad2gadaqadaqaamaalaaabaGaamivaaqaaiaaikdaaaaaca
GLOaGaayzkaaaaaa@4985@
</annotation>   </semantics>  </math>  	</td>  	</tr>  </table>
<p>Lorsque le contr&ocirc;le de l&rsquo;incorporation ne d&eacute;tecte qu&rsquo;un seul radionucl&eacute;ide, les r&eacute;sultats des essais biologiques qui d&eacute;passent l&rsquo;AD ou l&rsquo;AMD, selon la plus &eacute;lev&eacute;e des deux, devraient &ecirc;tre v&eacute;rifi&eacute;s par recomptage de l&rsquo;&eacute;chantillon ou du sujet avant de d&eacute;terminer et d&rsquo;enregistrer la DEE. De plus, si le r&eacute;sultat de l&rsquo;essai biologique est &eacute;gal ou sup&eacute;rieur au NED ou au NED<sub>TE</sub>, on devrait proc&eacute;der &agrave; une enqu&ecirc;te pour d&eacute;terminer et corriger la cause de l&rsquo;incorporation et &eacute;viter qu&rsquo;elle ne se reproduise.</p>  <p>Dans le cas de l&rsquo;incorporation de plus d&rsquo;un radionucl&eacute;ide, on devrait calculer une AD pour le m&eacute;lange de radionucl&eacute;ides. Par ailleurs, on devrait calculer une AD qui repr&eacute;sente la dose annuelle extrapol&eacute;e pour tous les radionucl&eacute;ides combin&eacute;s. On pourrait utiliser cette approche lorsque le contr&ocirc;le est effectu&eacute; en utilisant un radionucl&eacute;ide comme indicateur pour un m&eacute;lange de radionucl&eacute;ides.</p>
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
<h3 id="sec10-2">10.2	Exactitude des r&eacute;sultats des essais biologiques</h3>  <p>Les incertitudes de mesure d&eacute;coulent des statistiques de comptage et d&rsquo;autres sources qui d&eacute;pendent de la m&eacute;thode de contr&ocirc;le. Dans le cas des mesures <em>in vivo</em>, les incertitudes de mesure pourraient provenir de sources telles que les variations du positionnement du d&eacute;tecteur, du taux de comptage du rayonnement de fond, de la taille du sujet et de la distribution de l&rsquo;activit&eacute; dans l&rsquo;organisme. Dans le cas des mesures <em>in vitro</em>, ces incertitudes peuvent d&eacute;couler de la mesure du volume ou de la masse de l&rsquo;&eacute;chantillon, d&rsquo;erreurs de pipetage, de l&rsquo;utilisation de traceurs pour d&eacute;terminer le rendement chimique ou d&rsquo;autres causes.</p>  <p>Les incertitudes de mesure r&eacute;sultant des statistiques de comptage, qui peuvent &ecirc;tre d&eacute;crites par la distribution de Poisson, sont appel&eacute;es incertitudes de type A. Toutes les autres incertitudes sont appel&eacute;es incertitudes de type B. L&rsquo;incertitude globale &agrave; l&rsquo;&eacute;gard du r&eacute;sultat d&rsquo;un contr&ocirc;le individuel peut &ecirc;tre d&eacute;crite en termes de distribution log-normale. L&rsquo;&eacute;cart-type g&eacute;om&eacute;trique de cette distribution est appel&eacute; facteur de diffusion (FD). Pour de plus amples renseignements, veuillez consulter le rapport EURADOS 2013-01, <span lang="en"><em>IDEAS Guidelines (Version 2) for the Estimation of Committed Doses from Incorporation Monitoring Data</em></span> [21].</p>  <p>Pour les incertitudes de type A, on pourrait calculer la valeur FD comme suit :</p>
<table className=" table-border-none">  <tr>  	<td className="text-center text-center" width="20">(15)</td>  	<td width="70" className="text-center">  <math display=&#39;block&#39;>   <semantics>
<mrow>
<mi>F</mi><msub>
<mi>D</mi>
<mi>A</mi>
</msub>
<mo>=</mo><msup>
<mi>e</mi>
<mrow>
<mrow><mo>[</mo> <mrow>
<mfrac>
<mrow>
<msub>
<mi>&#x03C3;</mi>
<mi>A</mi>
</msub>
</mrow>
<mi>M</mi>
</mfrac>
</mrow> <mo>]</mo></mrow></mrow>
</msup>
</mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaam4uaiaadA
eadaWgaaWcbaGaamyqaaqabaGccqGH9aqpcaWGLbWaaWbaaSqabeaa
daWadaqaamaalaaabaGaeq4Wdm3aaSbaaWqaaiaadgeaaeqaaaWcba
GaamytaaaaaiaawUfacaGLDbaaaaaaaa@4047@
</annotation>   </semantics>  </math>  	</td>  	</tr>  </table>
<p>Dans l&rsquo;&eacute;quation ci-dessus, &sigma;<sub>A</sub> est l&rsquo;incertitude de type A associ&eacute;e au r&eacute;sultat de mesure M.</p>  <p>Le facteur FD pour les incertitudes de type B pourrait se calculer comme suit :</p>
<table className=" table-border-none">  <tr>  	<td className="text-center text-center" width="20">(16)</td>  	<td width="70" className="text-center">  <math display=&#39;block&#39;>   <semantics>
<mrow>
<mi>F</mi><msub>
<mi>D</mi>
<mi>B</mi>
</msub>
<mo>=</mo><msup>
<mi>e</mi>
<mrow>
<mrow><mo>[</mo> <mrow>
<mfrac>
<mrow>
<msub>
<mi>&#x03C3;</mi>
<mrow>
<msub>
<mi>C</mi>
<mrow>
<mi>r</mi><mi>n</mi></mrow>
</msub>
</mrow>
</msub>
</mrow>
<mrow>
<msub>
<mi>C</mi>
<mrow>
<mi>r</mi><mi>n</mi></mrow>
</msub>
</mrow>
</mfrac>
</mrow> <mo>]</mo></mrow></mrow>
</msup>
</mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaam4uaiaadA
eadaWgaaWcbaGaamOqaaqabaGccqGH9aqpcaWGLbWaaWbaaSqabeaa
daWadaqaamaalaaabaGaeq4Wdm3aaSbaaWqaaiaadoeadaWgaaqaai
aadkhacaWGUbaabeaaaeqaaaWcbaGaam4qamaaBaaameaacaWGYbGa
amOBaaqabaaaaaWccaGLBbGaayzxaaaaaaaa@446D@
</annotation>   </semantics>  </math>  	</td>  	</tr>  </table>
<p>Dans l&rsquo;&eacute;quation ci-dessus, Crn est le facteur de normalisation, qui est la r&eacute;ciproque de l&rsquo;efficacit&eacute;, et &sigma;<sub>C<sub>rn</sub></sub> est le facteur d&rsquo;incertitude pour C<sub>rn</sub>. Les valeurs types du facteur FD pour les incertitudes A et B sont pr&eacute;sent&eacute;es dans les tableaux 7 et 8 du rapport EURADOS 2013-01, <span lang="en"><em>IDEAS Guidelines (Version 2) for the Estimation of Committed Doses from Incorporation Monitoring Data</em></span> [21]. On pourrait calculer l&rsquo;incertitude totale &agrave; l&rsquo;aide de l&rsquo;&eacute;quation suivante :</p>
<table className=" table-border-none">  <tr>  	<td className="text-center text-center" width="20">(17)</td>  	<td width="70" className="text-center">  <math display=&#39;block&#39;>   <semantics>
<mrow>
<mi>F</mi><mi>D</mi><mo>=</mo><msup>
<mi>e</mi>
<mrow>
<mrow><mo>[</mo> <mrow>
<msqrt>
<mrow>
<mstyle displaystyle=&#39;true&#39;>
<munder>
<mo>&#x2211;</mo>
<mi>i</mi>
</munder>
<mrow></mrow>
</mstyle><msup>
<mrow>
<mi>ln</mi></mrow>
<mn>2</mn>
</msup>
<mo stretchy=&#39;false&#39;>(</mo><mi>F</mi><msub>
<mi>D</mi>
<mi>i</mi>
</msub>
<mo stretchy=&#39;false&#39;>)</mo></mrow>
</msqrt>
</mrow> <mo>]</mo></mrow></mrow>
</msup>
</mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaam4uaiaadA
eacqGH9aqpcaWGLbWaaWbaaSqabeaadaWadaqaamaakaaabaWaaabu
aeaaaWqaaiaadMgaaeqaoiabggHiLdWcciGGSbGaaiOBamaaCaaame
qabaGaaGOmaaaaliaacIcacaWGtbGaamOramaaBaaameaacaWGPbaa
beaaliaacMcaaWqabaaaliaawUfacaGLDbaaaaaaaa@45E8@
</annotation>   </semantics>  </math>  	</td>  	</tr>  </table>  <br />
<p><strong>Tableau 7 : Valeurs types des incertitudes de type A et de type B pour les mesures <em>in vivo</em></strong></p>  <table className="">
<tr>
<th rowspan="2">&nbsp;</th>
<th colSpan="3">Facteur de diffusion (FD)</th>
</tr>
<tr>
<th>&Eacute;nergies des photons<br /> &lt; 20 keV</th>
<th>&Eacute;nergies des photons de 20 keV &agrave; 100 keV</th>
<th>&Eacute;nergies des photons<br /> &gt; 100 keV</th>
</tr>
<tr>
<td>Incertitudes de type A</td>
<td className="text-center">1,5</td>
<td className="text-center">1,3</td>
<td className="text-center">1,07</td>
</tr>
<tr>
<td>Incertitudes de type B</td>
<td className="text-center">2,06</td>
<td className="text-center">1,25</td>
<td className="text-center">1,15</td>
</tr>
<tr>
<td>FD total</td>
<td className="text-center">2,3</td>
<td className="text-center">1,4</td>
<td className="text-center">1,2</td>
</tr>  </table>  <br />
<p><strong>Tableau 8 : Valeurs types des incertitudes de type B pour les mesures <em>in vitro</em></strong></p>  <table className="">
<tr>
<th className="text-center">Quantit&eacute;</th>
<th>Facteur de diffusion (SF<sub>B</sub>)</th>
</tr>
<tr>
<td>&Eacute;chantillon r&eacute;el d&rsquo;urine sur 24 heures</td>
<td className="text-center">1,1</td>
</tr>
<tr>
<td>Concentration de l&rsquo;activit&eacute; de l&rsquo;eau triti&eacute;e dans l&rsquo;urine</td>
<td className="text-center">1,1</td>
</tr>
<tr>
<td>&Eacute;chantillon simul&eacute; d&rsquo;urine sur 24 heures, cr&eacute;atinine, volume ou densit&eacute; normalis&eacute;</td>
<td className="text-center">1,6</td>
</tr>
<tr>
<td>&Eacute;chantillon ponctuel d&rsquo;urine (une seule miction utilis&eacute;e pour estimer le taux d&rsquo;excr&eacute;tion sur 24 heures)</td>
<td className="text-center text-center">2</td>
</tr>
<tr>
<td>&Eacute;chantillon de mati&egrave;res f&eacute;cales sur 24 heures</td>
<td className="text-center">3</td>
</tr>
<tr>
<td>&Eacute;chantillon de mati&egrave;res f&eacute;cales sur 72 heures</td>
<td className="text-center">2</td>
</tr>  </table>
<p>Lors de la conception et de l&rsquo;&eacute;tablissement d&rsquo;un programme d&rsquo;essais biologiques, il est important de tenir compte de la pr&eacute;cision des instruments en rapport avec la mesure &agrave; prendre. Le syst&egrave;me complet de mesure devrait &ecirc;tre tel que toute erreur dans la mesure finale n&rsquo;aurait qu&rsquo;une incidence mineure sur l&rsquo;exactitude globale de la dose de rayonnement estim&eacute;e re&ccedil;ue par le travailleur. Les points suivants devraient &ecirc;tre inclus dans l&rsquo;&eacute;valuation de la pr&eacute;cision des instruments de d&eacute;tection et de la m&eacute;thode de mesure :</p>
<ol>
<li>erreur nette de comptage statistique :<br />
Cela comprend l&rsquo;erreur statistique dans le comptage de l&rsquo;essai biologique et l&rsquo;erreur statistique dans la mesure du comptage du rayonnement de fond; la dur&eacute;e de comptage du rayonnement de fond devrait &ecirc;tre appropri&eacute;e compte tenu de la norme, de l&rsquo;&eacute;chantillon ou du sujet.</li>
<li>erreur caus&eacute;e par des variations dans la g&eacute;om&eacute;trie de comptage :<br />
Cela devrait comprendre les tol&eacute;rances relatives aux &eacute;carts physiques chez les sujets ou dans les &eacute;chantillons ayant fait l&rsquo;objet d&rsquo;un comptage, particuli&egrave;rement en ce qui a trait &agrave; l&rsquo;&eacute;quipement de comptage sp&eacute;cifique utilis&eacute;.</li>
<li>erreur introduite par l&rsquo;att&eacute;nuation du rayonnement &eacute;mis par les tissus sus jacents lors du comptage <em>in vivo</em> :<br />
L&rsquo;effet des tissus sus jacents devrait &ecirc;tre pris en compte lorsque l&rsquo;&eacute;mission gamma d&rsquo;un nucl&eacute;ide est inf&eacute;rieure &agrave; 200 keV, ou lorsque l&rsquo;on compte le rayonnement par freinage bremsstrahlung dus &agrave; des &eacute;missions b&ecirc;ta. Cela n&eacute;cessite l&rsquo;estimation de la profondeur moyenne et de la masse volumique des tissus sus-jacents (p. ex., l&rsquo;&eacute;paisseur de la paroi thoracique), qui pourraient varier de fa&ccedil;on importante d&rsquo;une personne &agrave; une autre.
<li>&eacute;talonnage de l&rsquo;instrument par rapport &agrave; l&rsquo;isotope mesur&eacute; dans une g&eacute;om&eacute;trie pertinente pour la mesure en cause :<br />
La r&eacute;ponse de l&rsquo;instrument d&rsquo;essai biologique devrait &ecirc;tre &eacute;talonn&eacute;e par rapport &agrave; l&rsquo;isotope d&rsquo;int&eacute;r&ecirc;t, et un programme r&eacute;gulier de contr&ocirc;le de la qualit&eacute; devrait &ecirc;tre mis en place pour s&rsquo;assurer que cet &eacute;talonnage est constamment maintenu. Des contr&ocirc;les internes fr&eacute;quents utilisant une source radioactive de longue dur&eacute;e devraient &ecirc;tre effectu&eacute;s r&eacute;guli&egrave;rement pour confirmer que la r&eacute;ponse du d&eacute;tecteur est constante dans le temps et que l&rsquo;instrument fonctionne correctement.</li>
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
<div id="11"></div>
<h2 id="sec11">11. D&eacute;termination de la dose efficace engag&eacute;e</h2>  <p>Lorsque le temps entre l&rsquo;incorporation et un seul essai biologique est connu, l&rsquo;incorporation devrait &ecirc;tre calcul&eacute;e comme suit :</p>
<table className=" table-border-none">  <tr>  	<td className="text-center text-center" width="20">(18)</td>  	<td width="70" className="text-center">  <math display=&#39;block&#39;>   <semantics>
<mrow>
<mi>I</mi><mo>=</mo><mfrac>
<mi>M</mi>
<mrow>
<mi>m</mi><mo stretchy=&#39;false&#39;>(</mo><mi>t</mi><mo stretchy=&#39;false&#39;>)</mo></mrow>
</mfrac>
</mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaamysaiabg2
da9maalaaabaGaamytaaqaaiaad2gacaGGOaGaamiDaiaacMcaaaaa
aa@3BF0@
</annotation>   </semantics>  </math>  	</td>  	</tr>  </table>
<p>Dans ce cas, I repr&eacute;sente l&rsquo;incorporation, par exemple en Bq ou mg; M est la quantit&eacute; mesur&eacute;e et m(t) est la valeur pr&eacute;vue des fonctions de r&eacute;tention ou d&rsquo;excr&eacute;tion au moment t apr&egrave;s l&rsquo;incorporation. La valeur de m(t) est bas&eacute;e sur des mod&egrave;les de biocin&eacute;tique appropri&eacute;s et est disponible, dans les publications de la CIPR, pour les caract&eacute;ristiques de solubilit&eacute; par d&eacute;faut des mati&egrave;res. On pourrait &eacute;galement calculer les valeurs de m(t) pour la solubilit&eacute; ou la taille des particules sp&eacute;cifiques de la mati&egrave;re en cause. La quantit&eacute; mesur&eacute;e et m(t) devraient &ecirc;tre exprim&eacute;es dans des unit&eacute;s coh&eacute;rentes. Par exemple, pour l&rsquo;analyse de l&rsquo;urine, la valeur M devrait &ecirc;tre l&rsquo;activit&eacute; du radionucl&eacute;ide d&rsquo;int&eacute;r&ecirc;t excr&eacute;t&eacute; par jour &agrave; la fin de la p&eacute;riode de pr&eacute;l&egrave;vement de l&rsquo;&eacute;chantillon, alors que m(t) est le taux d&rsquo;excr&eacute;tion urinaire du m&ecirc;me radionucl&eacute;ide &agrave; la fin de cette p&eacute;riode. Ce dernier sc&eacute;nario s&rsquo;applique g&eacute;n&eacute;ralement dans le cadre d&rsquo;un contr&ocirc;le sp&eacute;cial ou propre aux t&acirc;ches effectu&eacute;es.</p>  <p>Pour les contr&ocirc;les r&eacute;guliers, le temps entre l&rsquo;incorporation et les essais biologiques pourrait ne pas &ecirc;tre connu. Dans de tels cas, on pourrait d&eacute;terminer la DEE en supposant que l&rsquo;incorporation a eu lieu au milieu de la p&eacute;riode de contr&ocirc;le de T jours. On devrait calculer l&rsquo;incorporation comme suit, en fonction de la quantit&eacute; mesur&eacute;e &agrave; la fin de la p&eacute;riode de contr&ocirc;le :</p>
<table className=" table-border-none">  <tr>  	<td className="text-center text-center" width="20">(19)</td>  	<td width="70" className="text-center">  <math display=&#39;block&#39;>   <semantics>
<mrow>
<mi>I</mi><mo>=</mo><mfrac>
<mi>M</mi>
<mrow>
<mi>m</mi><mrow><mo>(</mo>
<mrow>
<mfrac>
<mi>T</mi>
<mn>2</mn>
</mfrac>
</mrow>
<mo>)</mo></mrow></mrow>
</mfrac>
</mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaamysaiabg2
da9maalaaabaGaamytaaqaaiaad2gadaqadaqaamaalaaabaGaamiv
aaqaaiaaikdaaaaacaGLOaGaayzkaaaaaaaa@3CCC@
</annotation>   </semantics>  </math>  	</td>  	</tr>  </table>
<p>Dans les deux cas, on pourrait d&eacute;terminer la DEE en multipliant l&rsquo;incorporation par la DEE appropri&eacute;e par unit&eacute; d&rsquo;incorporation. Dans certains cas, comme pour l&rsquo;eau triti&eacute;e, on pourrait utiliser des mesures de l&rsquo;activit&eacute; pour d&eacute;terminer la dose efficace directement. Dans ces cas, la m&eacute;thode ci-dessus pourrait &ecirc;tre remplac&eacute;e par une m&eacute;thode pr&eacute;sent&eacute;e dans les annexes pour des radionucl&eacute;ides sp&eacute;cifiques, ou approuv&eacute;e par la CCSN.</p>  <p>Si plus de 10 % environ de la quantit&eacute; mesur&eacute;e r&eacute;elle peut &ecirc;tre attribu&eacute;e &agrave; l&rsquo;incorporation dans un intervalle de contr&ocirc;le ant&eacute;rieur, une correction pourrait &ecirc;tre appropri&eacute;e. La quantit&eacute; mesur&eacute;e dans l&rsquo;intervalle de contr&ocirc;le r&eacute;gulier pourrait &ecirc;tre corrig&eacute;e comme suit :</p>  <ul>
<li>d&eacute;terminer l&rsquo;incorporation dans l&rsquo;intervalle de contr&ocirc;le pr&eacute;c&eacute;dent</li>
<li>utiliser la valeur m(t) appropri&eacute;e pour pr&eacute;voir la contribution de l&rsquo;incorporation pr&eacute;c&eacute;dente &agrave; la quantit&eacute; mesur&eacute;e courante</li>
<li>soustraire la contribution calcul&eacute;e ci-dessus de la quantit&eacute; mesur&eacute;e courante</li>  </ul>  <p>Dans certaines circonstances, y compris les essais biologiques sp&eacute;ciaux, on pourrait avoir les r&eacute;sultats du contr&ocirc;le individuel obtenus &agrave; divers moments et selon plusieurs m&eacute;thodes de contr&ocirc;le (p. ex., essais biologiques <em>in vitro</em> et <em>in vivo</em>). Dans de tels cas, la meilleure estimation de l&rsquo;incorporation devrait &ecirc;tre calcul&eacute;e en d&eacute;terminant :</p>
<ul>
<li>la valeur de m<sub>j</sub>(t<sub>i</sub>) pour chaque r&eacute;sultat de contr&ocirc;le et pour chaque m&eacute;thode de contr&ocirc;le</li>
<li>la meilleure estimation de l&rsquo;incorporation, de telle sorte que I &times; m<sub>j</sub>(t<sub>i</sub>) correspond le mieux aux r&eacute;sultats de la mesure M<sub>i, j</sub></li>  </ul>  <p>Lorsque plusieurs m&eacute;thodes de contr&ocirc;le sont utilis&eacute;es, on devrait v&eacute;rifier l&rsquo;incorporation en ajustant simultan&eacute;ment les valeurs pr&eacute;vues (I &times; m<sub>j</sub>(t<sub>i</sub>)) selon les r&eacute;sultats de toutes les m&eacute;thodes de contr&ocirc;le. Par exemple, on pourrait obtenir des ensembles de donn&eacute;es pour l&rsquo;urine et les mati&egrave;res f&eacute;cales dans le cadre d&rsquo;une campagne d&rsquo;essais biologiques sp&eacute;ciaux. Dans ce cas, on devrait v&eacute;rifier l&rsquo;incorporation en ajustant les valeurs pr&eacute;vues (I &times; m<sub>j</sub>(t<sub>i</sub>)) aux deux ensembles de donn&eacute;es simultan&eacute;ment. Il existe des m&eacute;thodes statistiques d&rsquo;ajustement des donn&eacute;es, et les deux plus couramment utilis&eacute;es pour les essais biologiques sont la m&eacute;thode du maximum de vraisemblance et l&rsquo;approche bay&eacute;sienne. Ces m&eacute;thodes, et d&rsquo;autres, sont d&eacute;crites dans le rapport n<sup>o</sup> 37 de la collection Rapports de s&ucirc;ret&eacute; de l&rsquo;AIEA, <span lang="en"><em>Methods for Assessing Occupational Radiation Doses Due to Intakes of Radionuclides</em></span> [22] et le rapport EURADOS 2013-01 : <span lang="en"><em>IDEAS Guidelines (Version 2) for the Estimation of Committed Doses from Incorporation Monitoring Data</em></span> [21].</p>  <p>Lorsqu&rsquo;on d&eacute;termine une incorporation &agrave; partir de l&rsquo;ajustement des donn&eacute;es, l&rsquo;hypoth&egrave;se de d&eacute;part est que les donn&eacute;es sont coh&eacute;rentes avec le mod&egrave;le biocin&eacute;tique, c&rsquo;est-&agrave;-dire que les r&eacute;sultats de mesure M<sub>i, j</sub> sont conformes aux pr&eacute;visions I &times; m<sub>j</sub>(t<sub>i</sub>). Les crit&egrave;res de rejet de l&rsquo;ajustement pourraient &ecirc;tre bas&eacute;s sur la statistique du test du chi carr&eacute; (&chi;<sup>2</sup>), et on pourrait supposer que chaque mesure Mi, j provient d&rsquo;une loi log-normale. On devrait juger que l&rsquo;ajustement aux donn&eacute;es est inad&eacute;quat si la valeur p est inf&eacute;rieure &agrave; 0,05. La valeur p est la fraction de la distribution &chi;<sup>2</sup> attendue (distribution th&eacute;orique) qui est sup&eacute;rieure &agrave; la valeur &chi;<sub>o</sub><sup>2</sup> calcul&eacute;e. On trouvera de plus amples renseignements sur les crit&egrave;res de rejet d&rsquo;un ajustement de donn&eacute;es dans le contexte des essais biologiques dans Castellani et coll. [21].</p>  <p>Lorsque l&rsquo;ajustement est rejet&eacute; et que l&rsquo;incorporation estim&eacute;e m&egrave;ne &agrave; une DEE &gt; 1 mSv, les param&egrave;tres d&rsquo;absorption propres &agrave; la mati&egrave;re, d&rsquo;apr&egrave;s le mod&egrave;le des voies respiratoires humaines de la CIPR, pourraient &ecirc;tre ajust&eacute;s. Pour de plus amples renseignements, veuillez consulter la publication 66 de la CIPR, <span lang="en"><em>Human Respiratory Tract Model for Radiological Protection</em></span> [15]. En particulier, les valeurs de f<em><sub>r</sub></em> et s<em><sub>s</sub></em> peuvent varier, mais non la valeur de s<em><sub>r</sub></em><sup id="fnb11-ref"><a className="fn-lnk" href="#fnb11"><span className="wb-inv">Footnote </span>11</a></sup>  (qui devrait &ecirc;tre maintenue &agrave; la valeur recommand&eacute;e par la CIPR) jusqu&rsquo;&agrave; ce que l&rsquo;ajustement ne soit pas rejet&eacute;.</p>  <p>La m&eacute;thode pour d&eacute;terminer la DEE peut diff&eacute;rer ou inclure des consid&eacute;rations suppl&eacute;mentaires lors de l&rsquo;examen de radionucl&eacute;ides sp&eacute;cifiques. Les recommandations sp&eacute;cifiques pour le tritium, l&rsquo;iode radioactif et l&rsquo;uranium sont trait&eacute;es dans les annexes D &agrave; F, respectivement.</p>
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
<h2 id="sec12">12. &Eacute;talonnage</h2>  <p>Les instruments utilis&eacute;s pour les essais biologiques <em>in vivo</em> ou <em>in vitro</em> devraient &ecirc;tre identifi&eacute;s, contr&ocirc;l&eacute;s, entretenus et &eacute;talonn&eacute;s p&eacute;riodiquement. L&rsquo;&eacute;talonnage devrait &ecirc;tre effectu&eacute; pour le radio-isotope mesur&eacute; dans le programme d&rsquo;essais biologiques. Les exigences relatives &agrave; l&rsquo;entretien et &agrave; l&rsquo;&eacute;talonnage p&eacute;riodiques devraient &ecirc;tre d&eacute;termin&eacute;es et document&eacute;es en fonction de l&rsquo;exactitude, de l&rsquo;objectif, du degr&eacute; d&rsquo;utilisation, des caract&eacute;ristiques de stabilit&eacute; et de tout autre facteur influant sur le contr&ocirc;le des mesures. Les proc&eacute;dures d&rsquo;entretien et d&rsquo;&eacute;talonnage devraient &ecirc;tre document&eacute;es.</p>  <p>L&rsquo;&eacute;tat de l&rsquo;&eacute;talonnage devrait &ecirc;tre enregistr&eacute; et maintenu, et l&rsquo;&eacute;quipement &eacute;talonn&eacute; devrait &ecirc;tre identifi&eacute; de mani&egrave;re claire et ind&eacute;l&eacute;bile (p. ex., au moyen d&rsquo;&eacute;tiquettes). Lorsque l&rsquo;&eacute;talonnage est effectu&eacute; avant l&rsquo;utilisation ou s&rsquo;il est utilis&eacute; fr&eacute;quemment (p. ex., quotidiennement), l&rsquo;enregistrement des &eacute;talonnages pourrait &ecirc;tre suffisant.</p>  <p>Les appareils non &eacute;talonn&eacute;s, impr&eacute;cis ou d&eacute;fectueux devraient &ecirc;tre identifi&eacute;s et retir&eacute;s. L&rsquo;&eacute;quipement servant aux mesures qui a &eacute;t&eacute; r&eacute;par&eacute; ou modifi&eacute; devrait &ecirc;tre &eacute;talonn&eacute; et l&rsquo;on devrait v&eacute;rifier sa performance avant de le remettre en service.</p>  <p>Les &eacute;talonnages devraient &ecirc;tre tra&ccedil;ables par rapport aux &eacute;talons de r&eacute;f&eacute;rence nationaux. La tra&ccedil;abilit&eacute; de l&rsquo;&eacute;talonnage du mat&eacute;riel utilis&eacute; comme &eacute;talon de transfert, jusqu&rsquo;aux &eacute;talons nationaux tra&ccedil;ables, doit &eacute;galement &ecirc;tre assur&eacute;e. Lorsque des &eacute;talons de r&eacute;f&eacute;rence sont utilis&eacute;s comme &eacute;talons de transfert pour &eacute;tablir le niveau de r&eacute;f&eacute;rence en fonction duquel les donn&eacute;es sont mesur&eacute;es directement, des m&eacute;thodes devront &ecirc;tre &eacute;tablies pour pr&eacute;server l&rsquo;int&eacute;grit&eacute; du processus et des r&eacute;sultats.</p>  <p>Si l&rsquo;on constate que le mat&eacute;riel fournit des mesures inexactes, la validit&eacute; des donn&eacute;es ou des r&eacute;sultats ant&eacute;rieurs devrait &ecirc;tre v&eacute;rifi&eacute;e et des mesures correctives devraient &ecirc;tre prises.</p>
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
<h2 id="sec13">13. Limiter l&rsquo;incorporation de substances nucl&eacute;aires par les travailleuses qui allaitent</h2>  <p>Le RRP exige que les titulaires de permis prennent des mesures d&rsquo;adaptation afin de limiter l&rsquo;incorporation de substances nucl&eacute;aires par une TSN qui allaite. La section 11 du REGDOC 2.7.1, <em>Radioprotection</em>, fournit de l&rsquo;orientation concernant les TSN qui allaitent. En particulier, lorsqu&rsquo;un titulaire de permis est inform&eacute; par &eacute;crit qu&rsquo;une TSN allaite, il doit prendre toute mesure d&rsquo;adaptation qui ne causera pas de difficult&eacute;s financi&egrave;res ni d&rsquo;inconv&eacute;nients commerciaux excessifs. Le titulaire de permis pourrait devoir mettre en place des contr&ocirc;les administratifs pour une TSN qui allaite afin de s&rsquo;assurer de minimiser l&rsquo;incorporation de substances nucl&eacute;aires par cette personne, substances qui peuvent ensuite &ecirc;tre transf&eacute;r&eacute;es &agrave; l&rsquo;enfant allait&eacute;. Les contr&ocirc;les administratifs pourraient consister &agrave; s&rsquo;assurer que les conditions de travail sont telles qu&rsquo;il n&rsquo;y a pas de risque important d&rsquo;incorporation de substances nucl&eacute;aires. Par cons&eacute;quent, les TSN qui allaitent et qui ne participent pas au programme d&rsquo;essais biologiques r&eacute;guliers en raison du faible risque que l&rsquo;incorporation devraient faire l&rsquo;objet d&rsquo;un contr&ocirc;le de confirmation &agrave; l&rsquo;effet qu&rsquo;il n&rsquo;y a pas eu d&rsquo;incorporation.</p>  <p>Dans l&rsquo;&eacute;ventualit&eacute; d&rsquo;une incorporation, on devrait estimer son importance pour s&rsquo;assurer que la dose (c.-&agrave;-d. la DEE) pour le nourrisson allait&eacute; ne d&eacute;passe pas 1 mSv. En r&egrave;gle g&eacute;n&eacute;rale, pour la plupart des substances nucl&eacute;aires, si l&rsquo;incorporation de substances nucl&eacute;aires par les TSN qui allaitent est contr&ocirc;l&eacute;e de mani&egrave;re &agrave; maintenir la DEE annuelle sous 1 mSv pour la TSN, alors le nourrisson allait&eacute; ne recevra pas une DEE sup&eacute;rieure &agrave; 1 mSv par ann&eacute;e civile qui serait attribuable &agrave; cette incorporation. Il existe des exceptions o&ugrave; l&rsquo;incorporation de certaines substances nucl&eacute;aires (p. ex., <sup>35</sup>S, <sup>125</sup>I, <sup>131</sup>I et eau triti&eacute;e) par les TSN pourrait entra&icirc;ner une DEE sup&eacute;rieure &agrave; 1 mSv pour le nourrisson allait&eacute;, par rapport &agrave; la dose re&ccedil;ue par la TSN.</p>  <p>Les titulaires de permis devraient comparer les coefficients de dose pour les TSN aux coefficients pour les nourrissons allait&eacute;s (publication 95 de la CIPR : <span lang="en"><em>Doses to Infants from Ingestion of Radionuclides in Mothers&rsquo; Milk</em></span> [23]) pour les substances nucl&eacute;aires pertinentes dans leurs installations afin de v&eacute;rifier que les doses aux nourrissons allait&eacute;s ne pr&eacute;sentent aucun risque pour ceux-ci et sont maintenues sous les limites de dose. Les ratios de la DEE re&ccedil;ue par un nourrisson allait&eacute; sur la DEE correspondante re&ccedil;ue par la TSN qui allaite, apr&egrave;s une incorporation aigu&euml; par inhalation, sont pr&eacute;sent&eacute;s dans le tableau 9 pour certaines substances nucl&eacute;aires. Afin d&rsquo;estimer la dose &agrave; un nourrisson allait&eacute; dans les circonstances o&ugrave; la travailleuse continue d&rsquo;allaiter apr&egrave;s une incorporation, on pourrait multiplier la DEE re&ccedil;ue par la TSN qui allaite par le ratio appropri&eacute; du tableau 9 pour obtenir la DEE pour le nourrisson allait&eacute;. On pourrait utiliser cette m&eacute;thode pour v&eacute;rifier que la dose re&ccedil;ue par le nourrisson allait&eacute;, provenant de toutes les substances nucl&eacute;aires absorb&eacute;es par la TSN qui allaite, est maintenue &agrave; une valeur inf&eacute;rieure &agrave; 1 mSv par ann&eacute;e civile. Pour les facteurs indiqu&eacute;s au tableau 9, on suppose que l&rsquo;allaitement se poursuit pendant 6 mois. S&rsquo;il y a eu incorporation et que l&rsquo;allaitement se poursuit pendant plus de 6 mois, le titulaire de permis devrait consulter la CCSN pour d&eacute;terminer les coefficients de dose appropri&eacute;s.</p>
<p><strong>Tableau 9 : Ratio de la DEE re&ccedil;ue par un nourrisson allait&eacute; sur la DEE re&ccedil;ue par une TSN qui allaite</strong></p>  <table className="">
<tr>
<th>Substance nucl&eacute;aire</th>
<th>Ratio: DEE<sub>nourisson</sub> / DEE<sub>m&egrave;re</sub></th>
</tr>
<tr>
<td className="text-center"><sup>3</sup>H (eau)</td>
<td className="text-center">1,1</td>
</tr>
<tr>
<td className="text-center"><sup>14</sup>C</td>
<td className="text-center">0,6</td>
</tr>
<tr>
<td className="text-center"><sup>35</sup>S</td>
<td className="text-center">2,6</td>
</tr>
<tr>
<td className="text-center"><sup>45</sup>Ca</td>
<td className="text-center">0,8</td>
</tr>
<tr>
<td className="text-center"><sup>47</sup>Ca</td>
<td className="text-center">0,7</td>
</tr>
<tr>
<td className="text-center"><sup>55</sup>Fe</td>
<td className="text-center">0,02</td>
</tr>
<tr>
<td className="text-center"><sup>59</sup>Fe</td>
<td className="text-center">0,03</td>
</tr>
<tr>
<td className="text-center"><sup>60</sup>Co</td>
<td className="text-center">0,3</td>
</tr>
<tr>
<td className="text-center"><sup>95</sup>Zr</td>
<td className="text-center">0,004</td>
</tr>
<tr>
<td className="text-center"><sup>95</sup>Nb</td>
<td className="text-center">9,2&times;10<sup>-5</sup></td>
</tr>
<tr>
<td className="text-center"><sup>125</sup>I</td>
<td className="text-center">1,1</td>
</tr>
<tr>
<td className="text-center"><sup>131</sup>I</td>
<td className="text-center">2,6</td>
</tr>
<tr>
<td className="text-center"><sup>134</sup>Cs</td>
<td className="text-center">0,2</td>
</tr>
<tr>
<td className="text-center"><sup>137</sup>Cs</td>
<td className="text-center">0,2</td>
</tr>
<tr>
<td className="text-center"><sup>210</sup>Pb</td>
<td className="text-center">0,2</td>
</tr>
<tr>
<td className="text-center"><sup>210</sup>Po</td>
<td className="text-center">0,043</td>
</tr>
<tr>
<td className="text-center"><sup>226</sup>Ra</td>
<td className="text-center">4,0&times;10<sup>-3</sup></td>
</tr>
<tr>
<td className="text-center"><sup>238</sup>U</td>
<td className="text-center">5,5&times;10<sup>-4</sup></td>
</tr>
<tr>
<td className="text-center"><sup>241</sup>Am</td>
<td className="text-center">2,6&times;10<sup>-4</sup></td>
</tr>
<tr>
<td className="text-center"><sup>238</sup>Pu</td>
<td className="text-center">1,1&times;10<sup>-3</sup></td>
</tr>
<tr>
<td className="text-center"><sup>239</sup>Pu</td>
<td className="text-center">1,1&times;10<sup>-3</sup></td>
</tr>
<tr>
<td className="text-center"><sup>244</sup>Cm</td>
<td className="text-center">3,2&times;10<sup>-4</sup></td>
</tr>  </table>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="14"></div>
<h2 id="sec14">14. D&eacute;termination de la dose r&eacute;sultant de l&rsquo;incorporation de substances nucl&eacute;aires par une plaie</h2>  <p>L&rsquo;incorporation de radionucl&eacute;ides par une plaie est &eacute;valu&eacute;e dans le cadre d&rsquo;un contr&ocirc;le par essais biologiques sp&eacute;ciaux. L&rsquo;objectif de ces essais biologiques est d&rsquo;assurer le respect des limites de dose et d&rsquo;&eacute;clairer les d&eacute;cisions concernant le traitement du patient (p. ex., excision de la plaie, d&eacute;corporation). Outre les essais biologiques, un contr&ocirc;le sp&eacute;cial devrait inclure la mesure de l&rsquo;activit&eacute; locale sur le site de la plaie.</p>  <p>Le choix de la m&eacute;thode de contr&ocirc;le d&eacute;pend du type de plaie (p. ex., perforation, lac&eacute;ration, br&ucirc;lure thermique), de la cat&eacute;gorie du contaminant de la plaie (p. ex., radionucl&eacute;ides en solution, particules, fragments) et de la biocin&eacute;tique du radionucl&eacute;ide. Bien que les compos&eacute;s solubles soient rapidement transf&eacute;r&eacute;s dans le sang, les compos&eacute;s insolubles peuvent &ecirc;tre retenus au site de la plaie, et une fraction peut &ecirc;tre transf&eacute;r&eacute;e dans les ganglions lymphatiques r&eacute;gionaux et demeurer &agrave; ces deux endroits pendant une longue p&eacute;riode.</p>  <p>La biocin&eacute;tique des compos&eacute;s sp&eacute;cifiques absorb&eacute;s &agrave; travers une plaie d&eacute;pend du type de plaie et de son &eacute;volution physiologique (p. ex., cicatrisation). En g&eacute;n&eacute;ral, la proportion d&rsquo;un compos&eacute; soluble absorb&eacute; par le sang &agrave; partir du site d&rsquo;une plaie diminue dans l&rsquo;ordre suivant :</p>
<ol>
<li>injection intraveineuse (plus grande proportion du compos&eacute; absorb&eacute; par le sang)</li>
<li>plaies par perforation</li>
<li>lac&eacute;rations et abrasions</li>
<li>peau br&ucirc;l&eacute;e (br&ucirc;lure thermique ou chimique)</li>
<li>peau intacte (plus petite proportion du compos&eacute; absorb&eacute; par le sang)</li>
</ol>  <p>Les cat&eacute;gories de contaminants des plaies sont d&eacute;finies dans le rapport n<sup>o</sup> 156 du NCRP, <span lang="en"><em>Development of a Biokinetic Model for Radionuclide-Contaminated Wounds and Procedures for their Assessment, Dosimetry and Treatment</em></span> [24]. Ces cat&eacute;gories sont les suivantes :</p>
<ol>
<li>radionucl&eacute;ides initialement en solution
<ol className="list-lower-alpha">
<li>faible r&eacute;tention au site de la plaie (jusqu&rsquo;&agrave; 10 % de l&rsquo;activit&eacute; initiale demeurant au site de la plaie 24 heures apr&egrave;s l&rsquo;incorporation)</li>
<li>r&eacute;tention mod&eacute;r&eacute;e au site de la plaie (10 % &agrave; 30 % de l&rsquo;activit&eacute; initiale demeurant au site de la plaie 24 heures apr&egrave;s l&rsquo;incorporation)</li>
<li>forte r&eacute;tention au site de la plaie (30 % &agrave; 80 % de l&rsquo;activit&eacute; initiale demeurant au site de la plaie 24 heures apr&egrave;s l&rsquo;incorporation)</li>
<li>r&eacute;tention avide au site de la plaie (plus de 80 % de l&rsquo;activit&eacute; initiale demeurant au site de la plaie 24 heures apr&egrave;s l&rsquo;incorporation)</li>
</ol></li>
<li>radionucl&eacute;ides initialement insolubles dans l&rsquo;eau
<ol className="list-lower-alpha">
<li>collo&iuml;des</li>
<li>particules</li>
<li>fragments</li>
</ol></li>
</ol>  <p>Les particules et les fragments sont des solides. Tout comme les collo&iuml;des, ils peuvent &ecirc;tre d&eacute;pos&eacute;s dans les ganglions lymphatiques apr&egrave;s avoir &eacute;t&eacute; d&eacute;gag&eacute;s du site de la plaie.</p>  <p>Les &eacute;tapes suivantes devraient &ecirc;tre suivies lors du contr&ocirc;le d&rsquo;une plaie contamin&eacute;e :</p>
<ol>
<li>On devrait caract&eacute;riser la contamination de la plaie en documentant ce qui suit :
<ol className="list-lower-alpha">
<li>la date, l&rsquo;heure, la m&eacute;thode et les circonstances de l&rsquo;incident de contamination de la plaie;</li>
<li>le type, les caract&eacute;ristiques et l&rsquo;emplacement de la plaie;</li>
<li>les caract&eacute;ristiques du contaminant radiologique au site de la plaie, y compris les radionucl&eacute;ides, leur forme chimique et leur activit&eacute; ou concentration totale.</li>
</ol></li>
<li>L&rsquo;activit&eacute; d&eacute;pos&eacute;e au site de la plaie devrait &ecirc;tre mesur&eacute;e d&egrave;s que possible apr&egrave;s la blessure et p&eacute;riodiquement par la suite, car cela permettra d&rsquo;assurer une prise en charge m&eacute;dicale ad&eacute;quate du patient :
<ol className="list-lower-alpha">
<li>des mesures de suivi sont recommand&eacute;es afin de mesurer l&rsquo;efficacit&eacute; de la d&eacute;contamination et des interventions m&eacute;dicales;</li>
<li>de l&rsquo;orientation sur le choix des instruments de contr&ocirc;le des plaies figure dans le rapport n<sup>o</sup> 156 du NCRP [24].</li>
</ol></li>
<li>Un essai biologique <em>in vitro</em> ou <em>in vivo</em> devrait &ecirc;tre effectu&eacute;, le cas &eacute;ch&eacute;ant, pour les radionucl&eacute;ides et leurs formes chimiques associ&eacute;es, comme il a &eacute;t&eacute; d&eacute;termin&eacute; &agrave; l&rsquo;&eacute;tape 1, d&egrave;s que possible apr&egrave;s l&rsquo;occurrence de la plaie et p&eacute;riodiquement par la suite selon la fr&eacute;quence indiqu&eacute;e &agrave; l&rsquo;annexe C.</li>
<li>La dose &eacute;quivalente &agrave; la peau au site de la plaie devrait &ecirc;tre d&eacute;termin&eacute;e en fonction de l&rsquo;activit&eacute; au site de la plaie mesur&eacute;e &agrave; l&rsquo;&eacute;tape 2.</li>
<li>La DEE due &agrave; l&rsquo;incorporation des radionucl&eacute;ides par la plaie devrait &ecirc;tre d&eacute;termin&eacute;e.</li>
</ol>  <p>La dose &eacute;quivalente aux tissus au site de la plaie devrait &ecirc;tre d&eacute;termin&eacute;e pour &eacute;tablir si des r&eacute;actions tissulaires sont probables et pour v&eacute;rifier le respect de la limite de dose &eacute;quivalente pour la peau. Une fois d&eacute;termin&eacute;e l&rsquo;activit&eacute; d&eacute;pos&eacute;e au site de la plaie, on peut effectuer une premi&egrave;re estimation prudente. Pour ce faire, on peut multiplier la concentration de l&rsquo;activit&eacute; au site de la plaie par le facteur appropri&eacute; de conversion de la dose &agrave; la peau, comme il est indiqu&eacute; au tableau 10.</p>
<p><strong>Tableau 10 : Coefficients de dose &eacute;quivalente pour les radionucl&eacute;ides au site de la plaie [24]</strong></p>  <table className="">
<tr>
<th className="text-center" rowspan="2">Radionucl&eacute;ide</th>
<th colSpan="2">D&eacute;bit de dose &eacute;quivalente re&ccedil;ue par la peau (mSv.h<sup>-1</sup>.kBq<sup>-1</sup>.cm<sup>2</sup>)</th>
</tr>
<tr>
<th>Contamination de surface</th>
<th>Contamination en profondeur</th>
</tr>
<tr>
<td><sup>3</sup>H</td>
<td className="text-center">0</td>
<td className="text-center">1,3&times;10<sup>-3</sup></td>
</tr>
<tr>
<td><sup>14</sup>C</td>
<td className="text-center">3,2&times;10<sup>-1</sup></td>
<td className="text-center">1,8</td>
</tr>
<tr>
<td><sup>22</sup>Na</td>
<td className="text-center">1,7</td>
<td className="text-center">3,2</td>
</tr>
<tr>
<td><sup>32</sup>P</td>
<td className="text-center">1,9</td>
<td className="text-center">4,2</td>
</tr>
<tr>
<td><sup>35</sup>S</td>
<td className="text-center">3,5&times;10<sup>-1</sup></td>
<td className="text-center">1,7</td>
</tr>
<tr>
<td><sup>36</sup>Cl</td>
<td className="text-center">1,8</td>
<td className="text-center">3,2</td>
</tr>
<tr>
<td><sup>45</sup>Ca</td>
<td className="text-center">8,5&times;10<sup>-1</sup></td>
<td className="text-center">2,2</td>
</tr>
<tr>
<td><sup>51</sup>Cr</td>
<td className="text-center">1,5&times;10<sup>-2</sup></td>
<td className="text-center">2,7&times;10<sup>-2</sup></td>
</tr>
<tr>
<td><sup>54</sup>Mn</td>
<td className="text-center">6,2&times;10<sup>-2</sup></td>
<td className="text-center">8,1&times;10<sup>-2</sup></td>
</tr>
<tr>
<td><sup>57</sup>Co</td>
<td className="text-center">1,2&times;10<sup>-1</sup></td>
<td className="text-center">1,9&times;10<sup>-1</sup></td>
</tr>
<tr>
<td><sup>58</sup>Co</td>
<td className="text-center">3,1&times;10<sup>-1</sup></td>
<td className="text-center">5,6&times;10<sup>-1</sup></td>
</tr>
<tr>
<td><sup>60</sup>Co</td>
<td className="text-center">7,8&times;10<sup>-1</sup></td>
<td className="text-center">3,2</td>
</tr>
<tr>
<td><sup>59</sup>Fe</td>
<td className="text-center">9,6&times;10<sup>-1</sup></td>
<td className="text-center">3,3</td>
</tr>
<tr>
<td><sup>63</sup>Ni</td>
<td className="text-center">6,5&times;10<sup>-7</sup></td>
<td className="text-center">4,5&times;10<sup>-1</sup></td>
</tr>
<tr>
<td><sup>67</sup>Ga</td>
<td className="text-center">3,4&times;10<sup>-1</sup></td>
<td className="text-center">1,1</td>
</tr>
<tr>
<td><sup>90</sup>Sr, <sup>90</sup>Y</td>
<td className="text-center">3.6</td>
<td className="text-center">7.9</td>
</tr>
<tr>
<td><sup>95</sup>Zr, <sup>95</sup>Nb</td>
<td className="text-center">1,6</td>
<td className="text-center">4,3</td>
</tr>
<tr>
<td><sup>99m</sup>Tc</td>
<td className="text-center">2,5&times;10<sup>-1</sup></td>
<td className="text-center">4,0&times;10<sup>-1</sup></td>
</tr>
<tr>
<td><sup>106</sup>Ru, <sup>106</sup>Nb</td>
<td className="text-center">2,2</td>
<td className="text-center">6,5</td>
</tr>
<tr>
<td><sup>110m</sup>Ag</td>
<td className="text-center">6,7&times;10<sup>-1</sup></td>
<td className="text-center">1,9</td>
</tr>
<tr>
<td><sup>111</sup>In</td>
<td className="text-center">3,8&times;10<sup>-1</sup></td>
<td className="text-center">6,7&times;10<sup>-1</sup></td>
</tr>
<tr>
<td><sup>123</sup>I</td>
<td className="text-center">3,7&times;10<sup>-1</sup></td>
<td className="text-center">6,8&times;10<sup>-1</sup></td>
</tr>
<tr>
<td><sup>125</sup>I</td>
<td className="text-center">2,1&times;10<sup>-2</sup></td>
<td className="text-center">3,5&times;10<sup>-1</sup></td>
</tr>
<tr>
<td><sup>131</sup>I</td>
<td className="text-center">1,6</td>
<td className="text-center">3,1</td>
</tr>
<tr>
<td><sup>137</sup>Cs, <sup>137m</sup>Ba</td>
<td className="text-center">1,6</td>
<td className="text-center">3,4</td>
</tr>
<tr>
<td><sup>144</sup>Ce, <sup>144m</sup>Pr, <sup>144</sup>Pr</td>
<td className="text-center">3,1</td>
<td className="text-center">8,2</td>
</tr>
<tr>
<td><sup>147</sup>Pm</td>
<td className="text-center">6,0&times;10<sup>-1</sup></td>
<td className="text-center">2,0</td>
</tr>
<tr>
<td><sup>192</sup>Ir</td>
<td className="text-center">1,9</td>
<td className="text-center">3,4</td>
</tr>
<tr>
<td><sup>201</sup>Tl</td>
<td className="text-center">2,8&times;10<sup>-1</sup></td>
<td className="text-center">1,0</td>
</tr>
<tr>
<td><sup>204</sup>Tl</td>
<td className="text-center">1,6</td>
<td className="text-center">3,0</td>
</tr>
<tr>
<td><sup>235</sup>U</td>
<td className="text-center">1,8&times;10<sup>-1</sup></td>
<td className="text-center">3,0&times;10<sup>3</sup></td>
</tr>
<tr>
<td><sup>238</sup>U</td>
<td className="text-center">2,3&times;10<sup>-3</sup></td>
<td className="text-center">2,9&times;10<sup>3</sup></td>
</tr>
<tr>
<td><sup>238</sup>Pu</td>
<td className="text-center">3,7&times;10<sup>-3</sup></td>
<td className="text-center">3,4&times;10<sup>3</sup></td>
</tr>
<tr>
<td><sup>239</sup>Pu</td>
<td className="text-center">1,4&times;10<sup>-3</sup></td>
<td className="text-center">3,2&times;10<sup>3</sup></td>
</tr>
<tr>
<td><sup>241</sup>Pu</td>
<td className="text-center">1,3&times;10<sup>-5</sup></td>
<td className="text-center">8,0&times;10<sup>-2</sup></td>
</tr>
<tr>
<td><sup>241</sup>Am</td>
<td className="text-center">2,0&times;10<sup>-2</sup></td>
<td className="text-center">3,4&times;10<sup>3</sup></td>
</tr>  </table>
<p>On pourrait pr&eacute;sumer que les radionucl&eacute;ides constituent une contamination de surface dans le cas des abrasions ou des br&ucirc;lures chimiques. Dans d&rsquo;autres cas, &agrave; moins qu&rsquo;il n&rsquo;existe des preuves de contamination de surface, on devrait pr&eacute;sumer que les radionucl&eacute;ides constituent une contamination en profondeur. Pour &eacute;valuer plus exactement la dose, on devrait utiliser un logiciel de dosim&eacute;trie cutan&eacute;e.</p>  <p>Il est possible de calculer une limite sup&eacute;rieure de la DEE en supposant que toute l&rsquo;activit&eacute; au site de la plaie sera absorb&eacute;e dans le sang. Les coefficients de dose pour les radionucl&eacute;ides s&eacute;lectionn&eacute;s &agrave; cette fin sont indiqu&eacute;s dans le tableau 11, dans la colonne<br /> &laquo; Faible &raquo;. Une fois les r&eacute;sultats des essais biologiques disponibles, il faudrait les utiliser pour d&eacute;terminer la DEE. Les r&eacute;sultats des essais biologiques peuvent &ecirc;tre corrig&eacute;s pour tenir compte des incorporations ant&eacute;rieures de radionucl&eacute;ides.</p>  <p>Dans les cas o&ugrave; l&rsquo;activit&eacute; est rapidement &eacute;vacu&eacute;e du site de la plaie (p. ex., moins de 10 % de l&rsquo;activit&eacute; mesur&eacute;e &agrave; l&rsquo;&eacute;tape 2 imm&eacute;diatement apr&egrave;s l&rsquo;incident ayant caus&eacute; la contamination de la plaie demeure au site de la plaie 24 heures plus tard), il est possible de traiter l&rsquo;incorporation comme une incorporation par injection. L&rsquo;incorporation peut &ecirc;tre d&eacute;termin&eacute;e &agrave; l&rsquo;aide de l&rsquo;&eacute;quation de la section 11 :</p>
<table className=" table-border-none">  <tr>  	<td className="text-center text-center" width="20">(20)</td>  	<td width="70" className="text-center">  <math display=&#39;block&#39;>   <semantics>
<mrow>
<mi>I</mi><mo>=</mo><mfrac>
<mi>M</mi>
<mrow>
<mi>m</mi><mo stretchy=&#39;false&#39;>(</mo><mi>t</mi><mo stretchy=&#39;false&#39;>)</mo></mrow>
</mfrac>
</mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaamysaiabg2
da9maalaaabaGaamytaaqaaiaad2gacaGGOaGaamiDaiaacMcaaaaa
aa@3BF0@
</annotation>   </semantics>  </math>  	</td>  	</tr>  </table>
<p>Le param&egrave;tre m(t) est l&rsquo;activit&eacute; pr&eacute;vue dans l&rsquo;essai biologique par unit&eacute; d&rsquo;incorporation. Ces param&egrave;tres figurent dans la publication 78 de la CIPR : <span lang="en"><em>Individual monitoring for internal exposure of workers: Replacement of ICRP Publication 54</em></span> [25] ou dans la norme 27048:2011 de l&rsquo;ISO : <em>Radioprotection &dash; Estimation de la dose interne dans le cadre de la surveillance des travailleurs en cas d&rsquo;exposition aux rayonnements</em> [26]. Il est alors possible de d&eacute;terminer la DEE en calculant I &times; e<sub>inj</sub>(50). On peut obtenir ce dernier param&egrave;tre, qui est le coefficient de dose pour une incorporation par injection, dans la colonne &laquo; Faible &raquo; du tableau 11 ou la calculer en utilisant un logiciel de dosim&eacute;trie interne incorporant les mod&egrave;les biocin&eacute;tiques de la CIPR. Enfin, il est possible d&rsquo;utiliser les crit&egrave;res d&eacute;finissant les cat&eacute;gories de contaminants d&rsquo;une plaie, d&eacute;crits ci-dessus, pour d&eacute;terminer quelle colonne du tableau 11 il faut utiliser. Pour de plus amples renseignements, voir le rapport n<sup>o</sup> 156 du NCRP [24]. Les donn&eacute;es du tableau 11 proviennent de l&rsquo;article de <em>Health Physics</em>, &laquo; <span lang="en"><em>Dose Coefficients for Intakes of Radionuclides via Contaminated Wounds</em></span> &raquo; [27].</p>  <p>Dans les cas o&ugrave; l&rsquo;activit&eacute; est retenue au site de la plaie, comme il a &eacute;t&eacute; d&eacute;termin&eacute; par les mesures faites sur le site de la plaie dans les premiers jours suivant la contamination de la plaie, la DEE devrait &ecirc;tre d&eacute;termin&eacute;e &agrave; l&rsquo;aide du mod&egrave;le biocin&eacute;tique de plaie figurant dans le rapport n<sup>o</sup> 156 du NCRP [24]. On pourrait r&eacute;aliser une &eacute;valuation initiale en utilisant une cat&eacute;gorie du mod&egrave;le de plaie du NCRP choisie a priori. Lorsque les r&eacute;sultats des essais biologiques sont disponibles, on devrait d&eacute;terminer la DEE pour la cat&eacute;gorie de plaie qui correspond le mieux aux donn&eacute;es d&rsquo;excr&eacute;tion et/ou de r&eacute;tention. Si la qualit&eacute; de l&rsquo;ajustement n&rsquo;est pas acceptable pour une cat&eacute;gorie de plaie, d&rsquo;apr&egrave;s les crit&egrave;res de la section 11, on devrait calculer la dose en envisageant un m&eacute;lange de deux cat&eacute;gories de r&eacute;tention par d&eacute;faut.</p>
<p><strong>Tableau 11 : Coefficients de dose efficace engag&eacute;e pour l&rsquo;incorporation par une plaie</strong></p>  <table className="width-100">
<tr>
<th>Radionucl&eacute;ide</th>
<th>Faible</th>
<th>Mod&eacute;r&eacute;e</th>
<th>Forte</th>
<th>Avide</th>
<th>Collo&iuml;de</th>
<th>Particule</th>
<th>Fragment</th>
</tr>
<tr>
<td><sup>3</sup>H (HTO)</td>
<td>1,84 &times; 10<sup>-11</sup></td>
<td>1,84 &times; 10<sup>-11</sup></td>
<td>1,78 &times; 10<sup>-11</sup></td>
<td>1,61 &times; 10<sup>-11</sup></td>
<td>1,56 &times; 10<sup>-11</sup></td>
<td>1,01 &times; 10<sup>-11</sup></td>
<td>4,07 &times; 10<sup>-13</sup></td>
</tr>
<tr>
<td><sup>3</sup>H (OBT)</td>
<td>4,16 &times; 10<sup>-11</sup></td>
<td>4,16 &times; 10<sup>-11</sup></td>
<td>4,01 &times; 10<sup>-11</sup></td>
<td>3,64 &times; 10<sup>-11</sup></td>
<td>3,52 &times; 10<sup>-11</sup></td>
<td>2,28 &times; 10<sup>-11</sup></td>
<td>9,19 &times; 10<sup>-13</sup></td>
</tr>
<tr>
<td><sup>14</sup>C</td>
<td>5,77 &times; 10<sup>-10</sup></td>
<td>5,77 &times; 10<sup>-10</sup></td>
<td>5,75 &times; 10<sup>-10</sup></td>
<td>5,68 &times; 10<sup>-10</sup></td>
<td>5,77 &times; 10<sup>-10</sup></td>
<td>5,71 &times; 10<sup>-10</sup></td>
<td>3,19 &times; 10<sup>-11</sup></td>
</tr>
<tr>
<td><sup>32</sup>P</td>
<td>2,20 &times; 10<sup>-9</sup></td>
<td>2,00 &times; 10<sup>-9</sup></td>
<td>1,32 &times; 10<sup>-9</sup></td>
<td>4,61 &times; 10<sup>-10</sup></td>
<td>1,14 &times; 10<sup>-10</sup></td>
<td>6,13 &times; 10<sup>-12</sup></td>
<td>6,53 &times; 10<sup>-12</sup></td>
</tr>
<tr>
<td><sup>35</sup>S (inorganique)</td>
<td>1,24 &times; 10<sup>-10</sup></td>
<td>1,20 &times; 10<sup>-10</sup></td>
<td>9,11 &times; 10<sup>-11</sup></td>
<td>3,44 &times; 10<sup>-11</sup></td>
<td>1,86 &times; 10<sup>-11</sup></td>
<td>1,44 &times; 10<sup>-12</sup></td>
<td>2,95 &times; 10<sup>-13</sup></td>
</tr>
<tr>
<td><sup>35</sup>S (organique)</td>
<td>7,76 &times; 10<sup>-10</sup></td>
<td>7,51 &times; 10<sup>-10</sup></td>
<td>5,70 &times; 10<sup>-10</sup></td>
<td>2,15 &times; 10<sup>-10</sup></td>
<td>1,16 &times; 10<sup>-10</sup></td>
<td>9,01 &times; 10<sup>-12</sup></td>
<td>1,85 &times; 10<sup>-12</sup></td>
</tr>
<tr>
<td><sup>59</sup>Fe</td>
<td>8,36 &times; 10<sup>-9</sup></td>
<td>7,95 &times; 10<sup>-9</sup></td>
<td>5,73 &times; 10<sup>-9</sup></td>
<td>1,99 &times; 10<sup>-9</sup></td>
<td>8,56 &times; 10<sup>-10</sup></td>
<td>5,43 &times; 10<sup>-11</sup></td>
<td>1,08 &times; 10<sup>-11</sup></td>
</tr>
<tr>
<td><sup>57</sup>Co</td>
<td>6,36 &times; 10<sup>-10</sup></td>
<td>6,28 &times; 10<sup>-10</sup></td>
<td>5,16 &times; 10<sup>-9</sup></td>
<td>4,01 &times; 10<sup>-10</sup></td>
<td>1,84 &times; 10<sup>-10</sup></td>
<td>2,45 &times; 10<sup>-11</sup></td>
<td>3,00 &times; 10<sup>-12</sup></td>
</tr>
<tr>
<td><sup>58</sup>Co</td>
<td>1,53 &times; 10<sup>-9</sup></td>
<td>1.47 &times; 10<sup>-9</sup></td>
<td>1,10 &times; 10<sup>-9</sup></td>
<td>4,01 &times; 10<sup>-10</sup></td>
<td>2,03 &times; 10<sup>-10</sup></td>
<td>1,46 &times; 10<sup>-11</sup></td>
<td>3,07 &times; 10<sup>-12</sup></td>
</tr>
<td><sup>60</sup>Co</td>
<td>1,94 &times; 10<sup>-8</sup></td>
<td>1,94 &times; 10<sup>-8</sup></td>
<td>1,81 &times; 10<sup>-8</sup></td>
<td>1,49 &times; 10<sup>-8</sup></td>
<td>1,38 &times; 10<sup>-8</sup></td>
<td>6,11 &times; 10<sup>-9</sup></td>
<td>2,47 &times; 10<sup>-10</sup></td>
</tr>
<tr>
<td><sup>85</sup>Sr</td>
<td>1,10 &times; 10<sup>-9</sup></td>
<td>1,06 &times; 10<sup>-9</sup></td>
<td>7,86 &times; 10<sup>-10</sup></td>
<td>2,83 &times; 10<sup>-10</sup></td>
<td>1,39 &times; 10<sup>-10</sup></td>
<td>9,77 &times; 10<sup>-12</sup></td>
<td>2,05 &times; 10<sup>-12</sup></td>
</tr>
<tr>
<td><sup>89</sup>Sr</td>
<td>3,13 &times; 10<sup>-9</sup></td>
<td>2,98 &times; 10<sup>-9</sup></td>
<td>2,17 &times; 10<sup>-9</sup></td>
<td>7,61 &times; 10<sup>-10</sup></td>
<td>3,43 &times; 10<sup>-10</sup></td>
<td>2,24 &times; 10<sup>-11</sup></td>
<td>4,59 &times; 10<sup>-12</sup></td>  </tr>
<tr>
<td><sup>90</sup>Sr</td>
<td>8,80 &times; 10<sup>-8</sup></td>
<td>8,81 &times; 10<sup>-8</sup></td>
<td>8,66 &times; 10<sup>-8</sup></td>
<td>8,26 &times; 10<sup>-8</sup></td>
<td>8,22 &times; 10<sup>-8</sup></td>
<td>6,57 &times; 10<sup>-8</sup></td>
<td>2,87 &times; 10<sup>-9</sup></td>
</tr>
<tr>
<td><sup>99m</sup>Tc</td>
<td>1,50 &times; 10<sup>-11</sup></td>
<td>1,17 &times; 10<sup>-11</sup></td>
<td>3,21 &times; 10<sup>-12</sup></td>
<td>3,41 &times; 10<sup>-12</sup></td>
<td>1,50 &times; 10<sup>-14</sup></td>
<td>1,34 &times; 10<sup>-15</sup></td>
<td>6,91 &times; 10<sup>-19</sup></td>
</tr>
<tr>
<td><sup>106</sup>Ru</td>
<td>3,02 &times; 10<sup>-8</sup></td>
<td>2,99 &times; 10<sup>-8</sup></td>
<td>2,51 &times; 10<sup>-8</sup></td>
<td>1,39 &times; 10<sup>-8</sup></td>
<td>1,04 &times; 10<sup>-8</sup></td>
<td>1,67 &times; 10<sup>-9</sup></td>
<td>1,65 &times; 10<sup>-10</sup></td>
</tr>
<tr>
<td><sup>125</sup>I</td>
<td>1,54 &times; 10<sup>-8</sup></td>
<td>1,48 &times; 10<sup>-8</sup></td>
<td>1,09 &times; 10<sup>-8</sup></td>
<td>3,90 &times; 10<sup>-9</sup></td>
<td>1,87 &times; 10<sup>-9</sup></td>
<td>1,28 &times; 10<sup>-10</sup></td>
<td>2,68 &times; 10<sup>-11</sup></td>
</tr>
<tr>
<td><sup>129</sup>I</td>
<td>1,07 &times; 10<sup>-7</sup></td>
<td>1,07 &times; 10<sup>-7</sup></td>
<td>1,06 &times; 10<sup>-7</sup></td>
<td>1,05 &times; 10<sup>-7</sup></td>
<td>1,07 &times; 10<sup>-7</sup></td>
<td>1,06 &times; 10<sup>-7</sup></td>
<td>5,87 &times; 10<sup>-9</sup></td>
</tr>
<tr>
<td><sup>131</sup>I</td>
<td>2,13 &times; 10<sup>-8</sup></td>
<td>1,88 &times; 10<sup>-8</sup></td>
<td>1,19 &times; 10-<sup>8</sup></td>
<td>4,35 &times; 10<sup>-9</sup></td>
<td>7,36 &times; 10<sup>-10</sup></td>
<td>3,85 &times; 10<sup>-11</sup></td>
<td>2,45 &times; 10<sup>-12</sup></td>
</tr>
<tr>
<td><sup>134</sup>Cs</td>
<td>1,94 &times; 10<sup>-8</sup></td>
<td>1,94 &times; 10<sup>-8</sup></td>
<td>1,71 &times; 10<sup>-8</sup></td>
<td>1,16 &times; 10<sup>-8</sup></td>
<td>9,70 &times; 10<sup>-9</sup></td>
<td>2,45 &times; 10<sup>-9</sup></td>
<td>1,48 &times; 10<sup>-10</sup></td>
</tr>
<tr>
<td><sup>137</sup>Cs</td>
<td>1,36 &times; 10<sup>-8</sup></td>
<td>1,36 &times; 10<sup>-8</sup></td>
<td>1,34 &times; 10<sup>-8</sup></td>
<td>1,28 &times; 10<sup>-8</sup></td>
<td>1,27 &times; 10<sup>-8</sup></td>
<td>1,03 &times; 10<sup>-8</sup></td>
<td>4,77 &times; 10<sup>-10</sup></td>
</tr>
<tr>
<td><sup>192</sup>Ir</td>
<td>6,67 &times; 10<sup>-9</sup></td>
<td>6,43 &times; 10<sup>-9</sup></td>
<td>4,82 &times; 10<sup>-9</sup></td>
<td>1,77 &times; 10<sup>-9</sup></td>
<td>9,09 &times; 10<sup>-10</sup></td>
<td>6,65 &times; 10<sup>-11</sup></td>
<td>1,39 &times; 10-<sup>11</sup></td>
</tr>
<tr>
<td><sup>201</sup>Tl</td>
<td>8,34 &times; 10<sup>-11</sup></td>
<td>6,91 &times; 10<sup>-11</sup></td>
<td>4,11 &times; 10<sup>-11</sup></td>
<td>1,70 &times; 10<sup>-12</sup></td>
<td>1,29 &times; 10<sup>-12</sup></td>
<td>6,83 &times; 10<sup>-14</sup></td>
<td>1,50 &times; 10<sup>-15</sup></td>
</tr>
<tr>
<td><sup>210</sup>Po</td>
<td>2,36 &times; 10<sup>-6</sup></td>
<td>2,31 &times; 10<sup>-6</sup></td>
<td>1,81 &times; 10<sup>-6</sup></td>
<td>7,52 &times; 10<sup>-7</sup></td>
<td>4,60 &times; 10<sup>-7</sup></td>
<td>4,31 &times; 10<sup>-8</sup></td>
<td>7,72 &times; 10<sup>-9</sup></td>
</tr>
<tr>
<td><sup>226</sup>Ra</td>
<td>1,36 &times; 10<sup>-6</sup></td>
<td>1,36 &times; 10<sup>-6</sup></td>
<td>1,44 &times; 10<sup>-6</sup></td>
<td>1,62 &times; 10<sup>-6</sup></td>
<td>1,77 &times; 10<sup>-6</sup></td>
<td>2,64 &times; 10<sup>-6</sup></td>
<td>1,65 &times; 10<sup>-7</sup></td>
</tr>
<tr>
<td><sup>228</sup>Ra</td>
<td>3,37 &times; 10<sup>-6</sup></td>
<td>3,96 &times; 10<sup>-6</sup></td>
<td>1,41 &times; 10<sup>-5</sup></td>
<td>3,81 &times; 10<sup>-5</sup></td>
<td>4,56 &times; 10<sup>-5</sup></td>
<td>4,04 &times; 10<sup>-5</sup></td>
<td>1,13 &times; 10<sup>-6</sup></td>
</tr>
<tr>
<td><sup>228</sup>Th</td>
<td>1,18 &times; 10<sup>-4</sup></td>
<td>1,17 &times; 10<sup>-4</sup></td>
<td>1,03 &times; 10<sup>-4</sup></td>
<td>6,86 &times; 10<sup>-5</sup></td>
<td>5,68 &times; 10<sup>-5</sup></td>
<td>1,37 &times; 10<sup>-5</sup></td>
<td>8,64 &times; 10<sup>-7</sup></td>
</tr>
<tr>
<td><sup>230</sup>Th</td>
<td>4,19 &times; 10<sup>-4</sup></td>
<td>4,19 &times; 10<sup>-4</sup></td>
<td>4,13 &times; 10<sup>-4</sup></td>
<td>3,99 &times; 10<sup>-4</sup></td>
<td>3,99 &times; 10<sup>-4</sup></td>
<td>3,35 &times; 10<sup>-4</sup></td>
<td>1,44 &times; 10<sup>-5</sup></td>
</tr>
<tr>
<td><sup>232</sup>Th</td>
<td>4,52 &times; 10<sup>-4</sup></td>
<td>4,52 &times; 10<sup>-4</sup></td>
<td>4,48 &times; 10<sup>-4</sup></td>
<td>4,40 &times; 10<sup>-4</sup></td>
<td>4,47 &times; 10<sup>-4</sup></td>
<td>4,17 &times; 10<sup>-4</sup></td>
<td>1,92 &times; 10<sup>-5</sup></td>
</tr>
<tr>
<td><sup>234</sup>U</td>
<td>2,27 &times; 10<sup>-6</sup></td>
<td>2,27 &times; 10<sup>-6</sup></td>
<td>2,25 &times; 10<sup>-6</sup></td>
<td>2,18 &times; 10<sup>-6</sup></td>
<td>2,19 &times; 10<sup>-6</sup></td>
<td>1,92 &times; 10<sup>-6</sup></td>
<td>8,75 &times; 10<sup>-8</sup></td>
</tr>
<tr>
<td><sup>235</sup>U</td>
<td>2,11 &times; 10<sup>-6</sup></td>
<td>2,11 &times; 10<sup>-6</sup></td>
<td>2,09 &times; 10<sup>-6</sup></td>
<td>2,03 &times; 10<sup>-6</sup></td>
<td>2,04 &times; 10<sup>-6</sup></td>
<td>1,78 &times; 10<sup>-6</sup></td>
<td>8,13 &times; 10<sup>-8</sup></td>
</tr>
<tr>
<td><sup>238</sup>U</td>
<td>2,03 &times; 10<sup>-6</sup></td>
<td>2,03 &times; 10<sup>-6</sup></td>
<td>2,01 &times; 10<sup>-6</sup></td>
<td>1,96 &times; 10<sup>-6</sup></td>
<td>1,97 &times; 10<sup>-6</sup></td>
<td>1,73 &times; 10<sup>-6</sup></td>
<td>7,89 &times; 10<sup>-8</sup></td>
</tr>
<tr>
<td><sup>237</sup>Np</td>
<td>2,05 &times; 10<sup>-4</sup></td>
<td>2,05 &times; 10<sup>-4</sup></td>
<td>2,03 &times; 10<sup>-4</sup></td>
<td>1,98 &times; 10<sup>-4</sup></td>
<td>1,99 &times; 10<sup>-4</sup></td>
<td>1,76 &times; 10<sup>-4</sup></td>
<td>7,91 &times; 10<sup>-6</sup></td>  </tr>
<tr>
<td><sup>238</sup>Pu</td>
<td>4,44 &times; 10<sup>-4</sup></td>
<td>4,43 &times; 10<sup>-4</sup></td>
<td>4,36 &times; 10<sup>-4</sup></td>
<td>4,18 &times; 10<sup>-4</sup></td>
<td>4,17 &times; 10<sup>-4</sup></td>
<td>3,36 &times; 10<sup>-4</sup></td>
<td>1,41 &times; 10<sup>-5</sup></td>
</tr>
<tr>
<td><sup>239</sup>Pu</td>
<td>4,89 &times; 10<sup>-4</sup></td>
<td>4,89 &times; 10<sup>-4</sup></td>
<td>4,83 &times; 10<sup>-4</sup></td>
<td>4,66 &times; 10<sup>-4</sup></td>
<td>4,67 &times; 10-<sup>4</sup></td>
<td>3,90 &times; 10<sup>-4</sup></td>
<td>1,67 &times; 10<sup>-5</sup></td>
</tr>
<tr>
<td><sup>240</sup>Pu</td>
<td>4,89 &times; 10<sup>-4</sup></td>
<td>4,89 &times; 10<sup>-4</sup></td>
<td>4,83 &times; 10<sup>-4</sup></td>
<td>4,66 &times; 10<sup>-4</sup></td>
<td>4,67 &times; 10<sup>-4</sup></td>
<td>3,90 &times; 10<sup>-4</sup></td>
<td>1,67 &times; 10<sup>-5</sup></td>
</tr>
<tr>
<td><sup>241</sup>Pu</td>
<td>9,40 &times; 10<sup>-6</sup></td>
<td>9,40 &times; 10<sup>-6</sup></td>
<td>9,42 &times; 10<sup>-6</sup></td>
<td>9,46 &times; 10<sup>-6</sup></td>
<td>9,68 &times; 10<sup>-6</sup></td>
<td>9,23 &times; 10<sup>-6</sup></td>
<td>4,10 &times; 10<sup>-7</sup></td>
</tr>
<tr>
<td><sup>241</sup>Am</td>
<td>3,97 &times; 10<sup>-4</sup></td>
<td>3,96 &times; 10<sup>-4</sup></td>
<td>3,91 &times; 10<sup>-4</sup></td>
<td>3,79 &times; 10<sup>-4</sup></td>
<td>3,80 &times; 10<sup>-4</sup></td>
<td>2,23 &times; 10<sup>-4</sup></td>
<td>1,41 &times; 10<sup>-5</sup></td>
</tr>
<tr>
<td><sup>242</sup>Cm</td>
<td>1,35 &times; 10<sup>-5</sup></td>
<td>1,33 &times; 10<sup>-5</sup></td>
<td>1,09 &times; 10<sup>-5</sup></td>
<td>5,66 &times; 10<sup>-6</sup></td>
<td>4,22 &times; 10<sup>-6</sup></td>
<td>1,66 &times; 10<sup>-6</sup></td>
<td>1,02 &times; 10<sup>-7</sup></td>
</tr>
<tr>
<td><sup>244</sup>Cm</td>
<td>2,34 &times; 10<sup>-4</sup></td>
<td>2,34 &times; 10<sup>-4</sup></td>
<td>2,27 &times; 10<sup>-4</sup></td>
<td>2,11 &times; 10<sup>-4</sup></td>
<td>2,06 &times; 10<sup>-4</sup></td>
<td>1,44 &times; 10<sup>-4</sup></td>
<td>5,72 &times; 10<sup>-6</sup></td>
</tr>
<tr>
<td><sup>252</sup>Cf</td>
<td>1,52 &times; 10<sup>-4</sup></td>
<td>1,51 &times; 10<sup>-4</sup></td>
<td>1,36 &times; 10<sup>-4</sup></td>
<td>9,79 &times; 10<sup>-5</sup></td>
<td>8,43 &times; 10<sup>-5</sup></td>
<td>2,49 &times; 10<sup>-5</sup></td>
<td>1,30 &times; 10<sup>-6</sup></td>
</tr>  </table>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="partC"></div>
<h2 id="partC">Partie C : Modifications des renseignements sur les doses d&eacute;pos&eacute;s dans le Fichier dosim&eacute;trique national</h2>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="15"></div>
<h2 id="sec15">15. Proc&eacute;dure g&eacute;n&eacute;rale</h2>  <p>La CCSN utilise les dossiers de doses pour s&rsquo;assurer que le titulaire de permis respecte les limites de dose r&eacute;glementaires dans le cadre de ses activit&eacute;s autoris&eacute;es. Les renseignements sur les doses d&eacute;pos&eacute;s aupr&egrave;s du FDN peuvent &ecirc;tre modifi&eacute;s pour diverses raisons (p. ex., &agrave; la suite d&rsquo;une enqu&ecirc;te concluant &agrave; l&rsquo;existence d&rsquo;un dossier de dose incorrect). Les &eacute;tapes suivantes d&eacute;crivent la proc&eacute;dure g&eacute;n&eacute;rale &agrave; suivre pour qu&rsquo;un titulaire de permis demande la modification d&rsquo;un dossier de dose d&eacute;pos&eacute; dans le FDN :</p>  <p>Le titulaire de permis pr&eacute;sente &agrave; la CCSN le rapport d&rsquo;enqu&ecirc;te et le formulaire de demande de modification des renseignements sur les doses, qui comprend les renseignements d&eacute;taill&eacute;s des modifications requises.</p>  <p>La CCSN &eacute;value la demande et l&rsquo;approuve ou la rejette en fonction des renseignements fournis dans le rapport d&rsquo;enqu&ecirc;te.</p>  <p>Si la CCSN approuve la modification demand&eacute;e, le formulaire de demande de modification des renseignements sur les doses est envoy&eacute; au fournisseur de services de dosim&eacute;trie. Une copie du formulaire est &eacute;galement envoy&eacute;e au travailleur, au responsable du titulaire de permis et au FDN. Il incombe au fournisseur de services de dosim&eacute;trie d&rsquo;aviser le FDN de la modification.</p>  <p>Si la CCSN rejette la demande, le titulaire de permis est inform&eacute; du refus.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="16"></div>
<h2 id="sec16">16. Proc&eacute;dure de demande de modification de renseignements sur les doses individuelles</h2>  <ol>
<li>Le titulaire de permis m&egrave;ne une enqu&ecirc;te sur l&rsquo;&eacute;v&eacute;nement qui a donn&eacute; lieu &agrave; une demande de modification de renseignements sur les doses et r&eacute;sume les renseignements dans un rapport d&rsquo;enqu&ecirc;te, qui devrait contenir les renseignements suivants :
<ol className="list-lower-alpha">
<li>les motifs de la demande de modification des renseignements sur les doses</li>
<li>une description des circonstances et de la p&eacute;riode vis&eacute;e</li>
<li>la justification du remplacement des doses d&eacute;clar&eacute;es par les valeurs propos&eacute;es</li>
<li>les calculs &agrave; l&rsquo;appui de la demande, le cas &eacute;ch&eacute;ant</li>
<li>une copie de la section pertinente du rapport de doses du service de dosim&eacute;trie</li>
<li>d&rsquo;autres renseignements pertinents, tels que d&eacute;termin&eacute;s par la CCSN</li>
</ol></li>
<li>Le titulaire de permis fournit les renseignements suivants dans la section A du formulaire de demande de modification des renseignements sur les doses :
<ol className="list-lower-alpha">
<li>le nom et le num&eacute;ro de groupe ou de compte du service de dosim&eacute;trie qui est assign&eacute; au titulaire de permis par le service de dosim&eacute;trie</li>
<li>le nom de l&rsquo;entreprise figurant sur le rapport de doses du service de dosim&eacute;trie</li>
<li>le nom du titulaire de permis qui figure sur le permis de la CCSN</li>
<li>le num&eacute;ro de permis qui figure sur le permis de la CCSN</li>
<li>le nom du travailleur et son num&eacute;ro d&rsquo;assurance sociale</li>
<li>la d&eacute;signation du travailleur : TSN ou non-TSN?</li>
<li>le num&eacute;ro de s&eacute;rie du dosim&egrave;tre qui figure sur le rapport de doses original, le cas &eacute;ch&eacute;ant</li>
<li>la p&eacute;riode de port ou la p&eacute;riode de contr&ocirc;le indiqu&eacute;e dans le rapport de doses original, le cas &eacute;ch&eacute;ant</li>
<li>la modification demand&eacute;e concernant les renseignements sur les doses</li>
<li>le rapport d&rsquo;enqu&ecirc;te d&eacute;crit &agrave; l&rsquo;&eacute;tape 1</li>
</ol></li>
<li>Le travailleur dont les renseignements sur les doses seront touch&eacute;s signe et date la &laquo; section B &ndash; D&eacute;claration du travailleur &raquo; du formulaire de demande de modification des renseignements sur les doses. Si le travailleur ne peut &ecirc;tre localis&eacute;, le titulaire de permis devrait d&eacute;montrer qu&rsquo;il a vraiment tent&eacute; de communiquer avec lui. Dans certains cas, le personnel de la CCSN peut approuver la demande de modification des renseignements sur les doses sans la signature du travailleur. Ces situations sont &eacute;valu&eacute;es au cas par cas.</li>
<li>Le titulaire de permis soumet le formulaire de demande de modification des renseignements sur les doses rempli et toute pi&egrave;ce jointe &agrave; l&rsquo;attention du point de contact unique de la CCSN pour ce permis.</li>
<li>Le personnel de la CCSN remplit, date et signe la &laquo; section A &ndash; D&eacute;claration du titulaire de permis &raquo; du formulaire de demande de modification des renseignements sur les doses.</li>
<li>Le titulaire de permis informe le travailleur concern&eacute; de toute modification apport&eacute;e aux renseignements sur les doses.</li>  </ol>  <p>Si le titulaire de permis pr&eacute;sente une demande visant &agrave; ajouter une dose cutan&eacute;e, comme il est d&eacute;termin&eacute; &agrave; la section 6.3.4, au dossier de doses du travailleur dans le FDN, la demande devrait &ecirc;tre sous forme d&rsquo;une demande de modification des renseignements sur les doses. Les renseignements suivants devraient &eacute;galement &ecirc;tre inclus sur cette demande :</p>
<ul>
<li>la marque, le mod&egrave;le et le certificat d&rsquo;&eacute;talonnage du contaminam&egrave;tre</li>
<li>une description d&eacute;taill&eacute;e de la fa&ccedil;on dont l&rsquo;efficacit&eacute; du d&eacute;tecteur a &eacute;t&eacute; d&eacute;termin&eacute;e</li>
<li>un calcul d&eacute;taill&eacute; de la dose, y compris les temps et les r&eacute;sultats des mesures</li>  </ul>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="17"></div>
<h2 id="sec17">17. Proc&eacute;dure de demande de modification des renseignements sur les doses d&rsquo;un groupe</h2>  <p>Dans certaines situations, des demandes de modification des renseignements sur les doses sont n&eacute;cessaires pour un grand nombre de personnes, et il n&rsquo;est alors pas pratique de pr&eacute;senter des demandes de modification des renseignements sur les doses pour chaque personne. Dans de telles situations, le titulaire du permis peut fournir les renseignements requis dans un autre format, comme un tableau, afin de tenir compte du grand nombre de travailleurs auxquels s&rsquo;applique une telle demande de modification.</p>  <p>Le titulaire de permis devrait d&eacute;montrer qu&rsquo;il a vraiment tent&eacute; d&rsquo;informer chaque travailleur de la modification demand&eacute;e, et que chaque travailleur accepte les modifications propos&eacute;es &agrave; son dossier de doses.</p>  <p>Le titulaire de permis est &eacute;galement tenu de fournir un rapport d&rsquo;enqu&ecirc;te, comme il est d&eacute;crit &agrave; la section 16.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="18"></div>
<h2 id="sec18">18. Coordonn&eacute;es de la personne-ressource</h2>  <p>Le rapport d&rsquo;enqu&ecirc;te et le formulaire de demande de modification des renseignements sur les doses devraient &ecirc;tre pr&eacute;sent&eacute;s &agrave; :</p>  <p>Commission canadienne de s&ucirc;ret&eacute; nucl&eacute;aire<br />
B.P. 1046, succursale B<br />
280, rue Slater<br />
Ottawa (Ontario)<br />
K1P 5S9<br />
T&eacute;l&eacute;phone : 1-888-229-2672<br />
T&eacute;l&eacute;copieur : 613-995-5086</p>
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
<h2 id="appA">Annexe A : Orientation concernant le choix de la dosim&eacute;trie pour le cristallin</h2>  <p>Les tableaux A.1 et A.2 pr&eacute;sentent de l&rsquo;orientation sur le choix de la dosim&eacute;trie appropri&eacute;e pour contr&ocirc;ler la dose au cristallin.</p>   <p><strong>Tableau A.1 : Dosim&eacute;trie recommand&eacute;e pour le contr&ocirc;le du rayonnement photonique d&rsquo;apr&egrave;s l&rsquo;&eacute;nergie, l&rsquo;angle d&rsquo;incidence et l&rsquo;uniformit&eacute; du champ de rayonnement</strong></p>
<table className="">
<tr>
<th>&Eacute;nergie moyenne<br /> &ge; 40 keV</th>
<th>&Eacute;nergie moyenne<br /> &lt; 40 keV</th>
<th className="text-center">Angle du rayonnement incident</th>
<th>Le corps est il uniform&eacute;ment expos&eacute;?</th>
<th>Grandeur op&eacute;rationnelle &agrave; utiliser</th>
<th>Type de dosim&eacute;trie recommand&eacute;e et emplacement</th>
</tr>
<tr>
<td className="text-center text-center">&ndash;</td>
<td className="text-center text-center">Oui</td>
<td>Sans objet</td>
<td className="text-center text-center">Oui</td>
<td className="text-center text-center">H<sub>p</sub>(0.07)</td>
<td className="text-center"><p>&ndash;Dosim&egrave;tre du corps entier<br />
&ndash;Port&eacute; sur le tronc</p></td>
</tr>
<tr>
<td className="text-center text-center">&ndash;</td>
<td className="text-center text-center">Oui</td>
<td>Sans objet</td>
<td>Non, les yeux sont particuli&egrave;rement expos&eacute;s</td>
<td className="text-center text-center">H<sub>p</sub>(0.07)</td>
<td className="text-center"><p>&ndash;Dosim&egrave;tre d&rsquo;extr&eacute;mit&eacute;s<br />
&ndash;Port&eacute; pr&egrave;s des yeux</p></td>
</tr>
<tr>
<td className="text-center text-center">Oui</td>
<td className="text-center text-center">&ndash;</td>
<td>Le rayonnement provient de l&rsquo;avant ou la personne se d&eacute;place dans le champ</td>
<td className="text-center text-center">Oui</td>
<td className="text-center text-center">H<sub>p</sub>(0.07) ou H<sub>p</sub>(10)</td>
<td className="text-center"><p>&ndash;Dosim&egrave;tre du corps entier<br />
&ndash;Port&eacute; sur le tronc</p></td>
</tr>
<tr>
<td className="text-center text-center">Oui</td>
<td className="text-center text-center">&ndash;</td>
<td>Le rayonnement provient de l&rsquo;avant ou la personne se d&eacute;place dans le champ</td>
<td>Non, les yeux sont particuli&egrave;rement expos&eacute;s</td>
<td className="text-center text-center">H<sub>p</sub>(0.07) ou H<sub>p</sub>(10)</td>
<td className="text-center"><p>&ndash;Dosim&egrave;tre d&rsquo;extr&eacute;mit&eacute;s<br />
&ndash;Port&eacute; pr&egrave;s des yeux</p></td>
</tr>
<tr>
<td className="text-center text-center">Oui</td>
<td className="text-center text-center">&ndash;</td>
<td>Le rayonnement <strong>ne</strong> provient <strong>pas</strong> de l&rsquo;avant, et la personne <strong>ne</strong> se d&eacute;place <strong>pas</strong> dans le champ</td>
<td className="text-center text-center">Oui</td>
<td className="text-center text-center">H<sub>p</sub>(0.07)</td>
<td className="text-center"><p>&ndash;Dosim&egrave;tre du corps entier<br />
&ndash;Port&eacute; sur le tronc</p></td>
</tr>
<tr>
<td className="text-center text-center">Oui</td>
<td className="text-center text-center">&ndash;</td>
<td>Le rayonnement <strong>ne</strong> provient <strong>pas</strong> de l&rsquo;avant, et la personne <strong>ne</strong> se d&eacute;place <strong>pas</strong> dans le champ</td>
<td>Non, les yeux sont particuli&egrave;rement expos&eacute;s</td>
<td className="text-center text-center">H<sub>p</sub>(0.07)</td>
<td className="text-center"><p>&ndash;Dosim&egrave;tre du corps entier<br />
&ndash;Port&eacute; pr&egrave;s des yeux</p></td>
</tr>  </table>  <br />
<p><strong>Tableau A.2 : Dosim&eacute;trie recommand&eacute;e pour le rayonnement b&ecirc;ta/&eacute;lectronique d&rsquo;apr&egrave;s l&rsquo;&eacute;nergie, l&rsquo;angle d&rsquo;incidence et l&rsquo;uniformit&eacute; du champ de rayonnement</strong>  <table className="">
<tr>
<th>Des lunettes de protection sont-elles port&eacute;es?</th>
<th>Les lunettes de protection absorbent-elles le rayonnement b&ecirc;ta?</th>
<th>Grandeur op&eacute;rationnelle &agrave; utiliser</th>
<th>Type de dosim&eacute;trie recommand&eacute;e et emplacement</th>
</tr>
<tr>
<td className="text-center text-center">Non</td>
<td className="text-center text-center">s/o</td>
<td className="text-center text-center">H<sub>p</sub>(3)</td>
<td className="text-center">&ndash;Dosim&egrave;tre du cristallin<br />
&ndash;Port&eacute; pr&egrave;s des yeux</td>
</tr>
<tr>
<td className="text-center text-center">Oui</td>
<td className="text-center text-center">Non</td>
<td className="text-center text-center">H<sub>p</sub>(3)</td>
<td className="text-center">&ndash;Dosim&egrave;tre du cristallin<br />
&ndash;Port&eacute; pr&egrave;s des yeux</td>
</tr>
<tr>
<td className="text-center text-center">Oui</td>
<td className="text-center text-center">Oui</td>
<td className="text-center text-center">Non requise (aucune dose &agrave; l&rsquo;&oelig;il)</td>
<td className="text-center">Non requise (aucune dose &agrave; l&rsquo;&oelig;il)</td>
</tr>  </table>
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
<h2 id="appB">Annexe B : &Eacute;valuation de l&rsquo;activit&eacute; manipul&eacute;e pour le choix des participants &agrave; un programme de contr&ocirc;le r&eacute;gulier de l&rsquo;incorporation</h2>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="B.1"></div>
<h3 id="appB-1">B.1 :	Fondement technique</h3>  <p>Diverses r&eacute;f&eacute;rences pr&eacute;sentent de l&rsquo;orientation sur le choix des participants &agrave; un programme d&rsquo;essais biologiques r&eacute;guliers bas&eacute; sur l&rsquo;activit&eacute; manipul&eacute;e ou l&rsquo;activit&eacute; en cours de traitement. Les valeurs du tableau 6 sont tir&eacute;es principalement de l&rsquo;approche pr&eacute;sent&eacute;e dans le document ANSI/HPS N13.39&ndash;2001 de la Health Physics Society : <span lang="en"><em>American National Standard for Design of Internal Dosimetry Programs</em></span> [28]. Cependant, on pourrait obtenir des valeurs similaires dans d&rsquo;autres r&eacute;f&eacute;rences.</p>
<h4>Fraction d&rsquo;incorporation potentielle</h4>   <p>La fraction d&rsquo;incorporation potentielle (FIP) est d&eacute;finie comme suit :</p>
<table className=" table-border-none">  <tr>  	<td className="text-center text-center" width="20">(21)</td>  	<td width="70" className="text-center">FIP = 10<sup>-6</sup> &times; R &times; C &times; D &times; O &times; S</td>  </tr>  </table>
<table className="table-border-none">  <tr>
<td>o&ugrave; :</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>  </tr>  <tr>
<td className="text-center">10<sup>-6</sup></td>
<td>=</td>
<td>facteur de Brodsky</td>  </tr>  <tr>
<td className="text-center">R</td>
<td>=</td>
<td>facteur de rejet</td>  </tr>  <tr>
<td className="text-center">C</td>
<td>=</td>
<td>facteur de confinement</td>  </tr>  <tr>
<td className="text-center">D</td>
<td>=</td>
<td>facteur de dispersabilit&eacute;</td>  </tr>  <tr>
<td className="text-center">O</td>
<td>=</td>
<td>facteur d&rsquo;occupation</td>  </tr>  <tr>
<td className="text-center">S</td>
<td>=</td>
<td>facteur de forme sp&eacute;ciale</td>  </tr>  </table>
<p><strong>Tableau B.1 : Valeurs recommand&eacute;es pour le calcul de la fraction d&rsquo;incorporation potentielle</strong></p>  <table className="">
<tr>
<th colSpan="3">Valeurs recommand&eacute;es</th>
</tr>
<tr>
<td rowspan="5"><strong>Facteur de rejet (R)</strong></td>
<td>Gaz, liquides fortement volatils</td>
<td className="text-center">1,0</td>
</tr>
<tr>
<td>Poudres non volatiles, liquides l&eacute;g&egrave;rement volatils</td>
<td className="text-center">0,1</td>
</tr>
<tr>
<td>Liquides, contamination g&eacute;n&eacute;rale couvrant une grande surface</td>
<td className="text-center">0,01</td>
</tr>
<tr>
<td>Solides, contamination ponctuelle, mati&egrave;res pi&eacute;g&eacute;es dans de grosses particules, p. ex., des r&eacute;sines</td>
<td className="text-center">0,001</td>
</tr>
<tr>
<td>Mati&egrave;res encapsul&eacute;es</td>
<td className="text-center">0</td>
</tr>
<tr>
<td rowspan="5"><strong>Facteur de confinement (C)</strong></td>
<td>Bo&icirc;te &agrave; gants ou cellule chaude</td>
<td className="text-center">0,01</td>
</tr>
<tr>
<td>Hotte am&eacute;lior&eacute;e (enceinte ferm&eacute;e avec ouvertures pour les bras)</td>
<td className="text-center">0,1</td>
</tr>
<tr>
<td>Hotte</td>
<td className="text-center">1.0</td>
</tr>
<tr>
<td>Mati&egrave;res contamin&eacute;es dans des sacs ou des emballages, mati&egrave;res ensach&eacute;es contenues dans des bo&icirc;tes de bois ou de carton, serres</td>
<td className="text-center">10</td>
</tr>
<tr>
<td>Table de travail, contamination de surface dans une pi&egrave;ce avec ventilation normale</td>
<td className="text-center">100</td>
</tr>
<tr>
<td rowspan="2"><strong>Facteur de dispersabilit&eacute; (D)</strong></td>
<td>Mesures qui accroissent l&rsquo;&eacute;nergie des mati&egrave;res (chauffage, coupe, meulage, usinage, soudage, pressurisation, r&eacute;actions exothermiques)</td>
<td className="text-center">10</td>
</tr>
<tr>
<td>Autres mesures (qui ne favorisent pas la dispersabilit&eacute;)</td>
<td className="text-center">1</td>
</tr>
<tr>
<td rowspan="4"><strong>Facteur d&rsquo;occupation (O)*</strong></td>
<td>Utilisation annuelle ou ponctuelle</td>
<td className="text-center">1</td>
</tr>
<tr>
<td>Utilisation mensuelle ou plusieurs fois par an</td>
<td className="text-center">10</td>
</tr>
<tr>
<td>Utilisation hebdomadaire, une dizaine de fois durant l&rsquo;ann&eacute;e ou des dizaines de jours dans le cadre d&rsquo;un projet ponctuel</td>
<td className="text-center">50</td>
</tr>
<tr>
<td>Utilisation essentiellement quotidienne</td>
<td className="text-center">250</td>
</tr>
<tr>
<td rowspan="2"><strong>Facteur de forme sp&eacute;ciale (S)</strong></td>
<td>Pr&eacute;curseurs de l&rsquo;ADN (sauf <sup>32</sup>P, <sup>35</sup>S ou <sup>131</sup>I)</td>
<td className="text-center">10</td>
</tr>
<tr>
<td>Autre mati&egrave;re</td>
<td className="text-center">1</td>
</tr>  </table>
<p>*&nbsp;Il convient de noter que le facteur d&rsquo;occupation est destin&eacute; &agrave; refl&eacute;ter le nombre de fois qu&rsquo;un radionucl&eacute;ide est manipul&eacute; au cours d&rsquo;une ann&eacute;e. Il ne s&rsquo;agit pas d&rsquo;une fraction du temps total pendant lequel un travailleur peut &ecirc;tre expos&eacute; &agrave; un radionucl&eacute;ide et il s&rsquo;agit donc d&rsquo;une quantit&eacute; sans unit&eacute;. Si la valeur O = 1, la FIP repr&eacute;senterait alors la fraction d&rsquo;activit&eacute; manipul&eacute;e qui pourrait &ecirc;tre inhal&eacute;e en raison d&rsquo;une seule utilisation. Dans les situations o&ugrave; les manipulations sont plus fr&eacute;quentes qu&rsquo;une fois par ann&eacute;e, O &gt; 1, et la FIP repr&eacute;sente la fraction de l&rsquo;activit&eacute; manipul&eacute;e dans une ann&eacute;e qui pourrait &ecirc;tre inhal&eacute;e.</p>
<h4>Valeurs du tableau 6</h4>  <p>Le tableau 6 est reproduit ci-dessous.</p>  <p><strong>Tableau 6 : Activit&eacute; manipul&eacute;e quotidiennement pendant une p&eacute;riode d&rsquo;un an, et au-del&agrave; de laquelle un essai biologique r&eacute;gulier est recommand&eacute;</strong></p>
<table className="">
<tr>
<th className="text-center" rowspan="2">Confinement</th>
<th colSpan="3">Volatilit&eacute;</th>
</tr>
<tr>
<th>Gaz et liquides volatils</th>
<th className="text-center">Poudres</th>
<th>Liquides non volatils et solides</th>
</tr>
<tr>
<td>Aucun</td>
<td className="text-center">&ge; 2 &times; LAI</td>
<td className="text-center">&ge; 20 &times; LAI</td>
<td className="text-center">&ge; 200 &times; LAI</td>
</tr>
<tr>
<td>Hotte</td>
<td className="text-center">&ge; 200 &times; LAI</td>
<td className="text-center">&ge; 2,000 &times; LAI</td>
<td className="text-center">&ge; 20,000 &times; LAI</td>
</tr>
<tr>
<td>Bo&icirc;te &agrave; gants</td>
<td className="text-center">&ge; 20,000 &times; LAI</td>
<td className="text-center">&ge; 200,000 &times; LAI</td>
<td className="text-center">&ge; 2,000,000 &times; LAI</td>
</tr>
<tr>
<td className="text-center">Flacons scell&eacute;s et seringues</td>
<td className="text-center">&ge; 50 &times; LAI</td>
<td className="text-center">Sans objet</td>
<td className="text-center">&ge; 10,000 &times; LAI</td>
</tr>  </table>  <p>Les valeurs du tableau 6 ont &eacute;t&eacute; calcul&eacute;es &agrave; partir des param&egrave;tres suivants :</p>
<table className="">
<tr>
<td className="text-center">Gaz et liquides volatils</td>
<td>R = 1 ((gaz, liquides fortement volatils)<br />
D = 1 (aucune &eacute;nergie ajout&eacute;e au syst&egrave;me)<br />
O = 250 (utilisation essentiellement quotidienne)<br />
S = 1</td>
</tr>
<tr>
<td className="text-center">Poudres</td>
<td>R = 0,1<br />
D = 1 (aucune &eacute;nergie ajout&eacute;e au syst&egrave;me)<br />
O = 250 ((utilisation essentiellement quotidienne)<br />
S = 1</td>
</tr>
<tr>
<td className="text-center">Liquides non volatils et solides</td>
<td>R = 0,01 (liquids, large area contamination)<br />
D = 1 (liquides, contamination sur une grande surface)<br />
O = 250 (utilisation essentiellement quotidienne)<br />
S = 1</td>
</tr>  </table>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="B.2"></div>
<h3 id="appB-2">B.2 Exemple : D&eacute;termination de la participation &agrave; un programme d&rsquo;essais biologiques</h3>  <p>Le travail en radiopharmacie consiste &agrave; manipuler du <sup>123</sup>I et du <sup>131</sup>I. Le travail avec ces radionucl&eacute;ides pourrait &ecirc;tre effectu&eacute; par la m&ecirc;me personne; par cons&eacute;quent, les deux radionucl&eacute;ides sont pris en compte pour d&eacute;terminer si les travailleurs devraient participer &agrave; un programme de contr&ocirc;le r&eacute;gulier de l&rsquo;incorporation et, le cas &eacute;ch&eacute;ant, pour quels radionucl&eacute;ides.</p>  <p>1) <sup>123</sup>I : Dans cette installation, on utilise deux fois par semaine 1,1 GBq de <sup>123</sup>I pour produire de la m&eacute;ta-iodobenzylguanidine (mIBG) pour les doses aux patients. Le proc&eacute;d&eacute; se d&eacute;roule dans une cellule chaude et le chauffage est appliqu&eacute; dans le cadre de ce proc&eacute;d&eacute;. Le <sup>123</sup>I est initialement sous forme de NaI. Les param&egrave;tres suivants ont &eacute;t&eacute; s&eacute;lectionn&eacute;s pour le Na <sup>123</sup>I :</p>  <p>R = 1 (gaz, liquides fortement volatils)</p>  <p>C = 0,01 (cellule chaude)</p>  <p>D = 10 (mesures qui ajoutent de l&rsquo;&eacute;nergie &agrave; la mati&egrave;re, p. ex., chauffage)</p>  <p>O = 100 (hebdomadaire &times; 2)</p>  <p>On sait qu&rsquo;une impuret&eacute; sous forme de <sup>121</sup>Te est pr&eacute;sente dans la solution m&egrave;re (jusqu&rsquo;&agrave; 3 % de l&rsquo;activit&eacute; totale, c.-&agrave;-d. 33 MBq). Les valeurs des param&egrave;tres ci-dessus s&rsquo;appliquent &eacute;galement &agrave; l&rsquo;impuret&eacute; <sup>121</sup>Te.</p>  <p>La quantit&eacute; de 1,1 GBq de Na<sup>123</sup>I est requise pour produire 850 MBq de <sup>123</sup>I-mIBG. Les param&egrave;tres pour manipuler ce type de compos&eacute; sont les suivants :</p>  <p>R = 0,1 (liquides l&eacute;g&egrave;rement volatils, pour tenir compte d&rsquo;une impuret&eacute; non li&eacute;e)</p>  <p>C = 1 (hotte)</p>  <p>D = 1 ((autres mesures (qui n&rsquo;augmentent pas la dispersabilit&eacute;))</p>  <p>O = 100 (hebdomadaire &times; 2)</p>  <p>Pour l&rsquo;activit&eacute; restante dans la hotte, soit 250 MBq sous forme de Na<sup>123</sup>I, on utilise les param&egrave;tres suivants :</p>  <p>R = 1 (gaz, liquides fortement volatils)</p>  <p>C = 1 (hotte)</p>  <p>D = 1 (autres mesures (qui n&rsquo;augmentent pas la dispersabilit&eacute;))</p>  <p>O = 100 (hebdomadaire &times; 2)</p>  <p>Des contr&ocirc;les de qualit&eacute; hebdomadaires sont r&eacute;alis&eacute;s sur le produit. Ces contr&ocirc;les consistent &agrave; manipuler environ 0,1 MBq de <sup>123</sup>I sous forme de mIBG sous une hotte. Les param&egrave;tres suivants ont &eacute;t&eacute; s&eacute;lectionn&eacute;s pour ce proc&eacute;d&eacute; :</p>  <p>R = 0,1 (poudres non volatiles, liquides l&eacute;g&egrave;rement volatils)</p>  <p>C = 1 (hotte)</p>  <p>D = 1 (autres mesures (qui n&rsquo;augmentent pas la dispersabilit&eacute;))</p>  <p>O = 50 (hebdomadaire)</p>  <p>Dans les situations o&ugrave; le facteur de rejet pour un compos&eacute; non volatil est inconnu, on devrait choisir par d&eacute;faut la valeur R = 0,1. Par ailleurs, on pourrait aussi utiliser une valeur R propre &agrave; la mati&egrave;re lorsqu&rsquo;elle est disponible.</p>  <p>2) Une quantit&eacute; de 111 GBq de 131I sous forme de NaI est manipul&eacute;e une fois par semaine pour l&rsquo;administration des doses aux patients. La manipulation est r&eacute;alis&eacute;e sous une hotte. Les param&egrave;tres suivants ont &eacute;t&eacute; s&eacute;lectionn&eacute;s :</p>  <p>R = 1 (gaz, liquides fortement volatils)</p>  <p>C = 1 (hotte)</p>  <p>D = 1 (autres mesures (qui n&rsquo;augmentent pas la dispersabilit&eacute;))</p>  <p>O = 50 (hebdomadaire)</p>  <p>Les param&egrave;tres suivants sont d&eacute;finis &agrave; la section 9.1.1 :</p>
<table className=" table-border-none">  <tr>  	<td className="text-center text-center" width="20">(22)</td>  	<td width="70" className="text-center">  <math display=&#39;block&#39;>   <semantics>
<mrow>
<msub>
<mi>B</mi>
<mi>T</mi>
</msub>
<mo>=</mo><mstyle displaystyle=&#39;true&#39;>
<mo>&#x2211;</mo> <mrow>
<msub>
<mi>r</mi>
<mi>j</mi>
</msub>
</mrow>
</mstyle></mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaamOqamaaBa
aaleaacaWGubaabeaakiabg2da9maaqaeabaGaamOCamaaBaaaleaa
caWGQbaabeaaaeqabeqdcqGHris5aaaa@3CED@
</annotation>   </semantics>  </math>  	</td>  	</tr>  </table>  <br />
<table className=" table-border-none">  <tr>  	<td className="text-center text-center" width="20">(23)</td>  	<td width="70" className="text-center">  <math display=&#39;block&#39;>   <semantics>
<mrow>
<msub>
<mi>r</mi>
<mi>j</mi>
</msub>
<mo>=</mo><mfrac>
<mrow>
<msub>
<mi>Q</mi>
<mi>j</mi>
</msub>
<mo>&#x00D7;</mo><mi>F</mi><mi>I</mi><msub>
<mi>P</mi>
<mi>j</mi>
</msub>
</mrow>
<mrow>
<mn>0,05</mn><mi>L</mi><mi>A</mi><msub>
<mi>I</mi>
<mi>j</mi>
</msub>
</mrow>
</mfrac>
</mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaamOCamaaBa
aaleaacaWGQbaabeaakiabg2da9maalaaabaGaamyuamaaBaaaleaa
caWGQbaabeaakiabgEna0kaadcfacaWGjbGaamOramaaBaaaleaaca
WGQbaabeaaaOqaaiaaicdacaGGUaGaaGimaiaaiwdacaWGbbGaamit
aiaadMeadaWgaaWcbaGaamOAaaqabaaaaaaa@4732@
</annotation>   </semantics>  </math>  	</td>  	</tr>  </table>
<p>Dans les expressions ci-dessus, Q<sub>j</sub> est l&rsquo;activit&eacute; du radionucl&eacute;ide j manipul&eacute;e quotidiennement (avec des facteurs de confinement et de rejet sp&eacute;cifi&eacute;s), FIP<sub>j</sub> est la fraction d&rsquo;incorporation potentielle pour les facteurs de confinement et de rejet sp&eacute;cifi&eacute;s, et LAI<sub>j</sub> est la limite annuelle d&rsquo;incorporation pour le radionucl&eacute;ide j.</p>  <p>La fraction d&rsquo;incorporation potentielle est d&eacute;finie comme suit: FIP = 10<sup>-6</sup> &times; R &times; C &times; D &times; O &times; S, o&ugrave;</p>  <p>R	=	le facteur de rejet, une mesure de la volatilit&eacute; des compos&eacute;s. R pourrait prendre des valeurs allant de 0 pour les mati&egrave;res encapsul&eacute;es &agrave; 1 pour les gaz et les liquides fortement volatils.</p>  <p>C	=	le facteur de confinement. Les valeurs de C vont de 0,01 pour les bo&icirc;tes &agrave; gants et les cellules chaudes &agrave; 100, valeur qui repr&eacute;sente le travail sur un plan de travail ouvert.</p>  <p>D	=	le facteur de dispersabilit&eacute;. Pour les mesures qui ajoutent de l&rsquo;&eacute;nergie &agrave; la mati&egrave;re (chauffage, coupe, meulage, usinage, soudage, pressurisation, r&eacute;actions exothermiques), la valeur de D est de 10. Pour toutes les autres mesures qui n&rsquo;accroissent pas la dispersabilit&eacute;, D a la valeur 1.</p>  <p>O	=	le facteur d&rsquo;occupation, qui refl&egrave;te la fr&eacute;quence avec laquelle l&rsquo;activit&eacute; &laquo; Q &raquo; est manipul&eacute;e en un an. Le produit Q &times; O est l&rsquo;activit&eacute; manipul&eacute;e par an (Bq/an).</p>  <p>S	=	le facteur de forme sp&eacute;ciale, qui tient compte du risque associ&eacute; &agrave; l&rsquo;incorporation de certains pr&eacute;curseurs de l&rsquo;ADN. S a une valeur de 10 pour les radionucl&eacute;ides li&eacute;s aux pr&eacute;curseurs de l&rsquo;ADN, sauf pour <sup>32</sup>P, <sup>35</sup>S et <sup>131</sup>I. Pour ces radionucl&eacute;ides et pour tous les compos&eacute;s autres que les pr&eacute;curseurs de l&rsquo;ADN, S a une valeur de 1.</p>  <p>D&rsquo;apr&egrave;s la section 9.1.1, le contr&ocirc;le r&eacute;gulier de l&rsquo;incorporation individuelle devrait &ecirc;tre r&eacute;alis&eacute; pour les travailleurs pour lesquels la valeur B<sub>T</sub> &ge; 1. De plus, lorsque B<sub>T</sub> &ge; 1, on devrait effectuer un contr&ocirc;le r&eacute;gulier de l&rsquo;incorporation individuelle pour les radionucl&eacute;ides dont la valeur r<sub>j</sub> &ge; 0,3.</p>  <p>Les valeurs r<sub>j</sub> pour le <sup>123</sup>I et le <sup>131</sup>I dans cet exemple sont pr&eacute;sent&eacute;es dans le tableau B.2. Les processus utilisant le <sup>123</sup>I consistent en deux activit&eacute;s seulement. Par cons&eacute;quent, une valeur propre au <sup>123</sup>I pour r<sub>j</sub> est calcul&eacute;e comme suit. Les param&egrave;tres Q<sub>a</sub> et Q<sub>b</sub> repr&eacute;sentent l&rsquo;activit&eacute; du <sup>123</sup>I manipul&eacute; par journ&eacute;e d&rsquo;utilisation pour chacun des processus faisant appel au <sup>123</sup>I.</p>
<table className=" table-border-none">  <tr>  	<td className="text-center text-center" width="20">(24)</td>  	<td width="70" className="text-center">  <math display=&#39;block&#39;>   <semantics>
<mrow>
<msub>
<mi>r</mi>
<mrow>
<mi>I</mi><mn>123</mn></mrow>
</msub>
<mo>=</mo><mfrac>
<mrow>
<msub>
<mi>Q</mi>
<mi>a</mi>
</msub>
<mi>F</mi><mi>I</mi><msub>
<mi>P</mi>
<mi>a</mi>
</msub>
<mo>+</mo><msub>
<mi>Q</mi>
<mi>b</mi>
</msub>
<mi>F</mi><mi>I</mi><msub>
<mi>P</mi>
<mi>b</mi>
</msub>
</mrow>
<mrow>
<mn>0,05</mn><mi>L</mi><mi>A</mi><mi>I</mi></mrow>
</mfrac>
</mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaamOCamaaBa
aaleaacaWGjbGaaGymaiaaikdacaaIZaaabeaakiabg2da9maalaaa
baGaamyuamaaBaaaleaacaWGHbaabeaakiaadcfacaWGjbGaamOram
aaBaaaleaacaWGHbaabeaakiabgUcaRiaadgfadaWgaaWcbaGaamOy
aaqabaGccaWGqbGaamysaiaadAeadaWgaaWcbaGaamOyaaqabaaake
aacaaIWaGaaiOlaiaaicdacaaI1aGaamyqaiaadYeacaWGjbaaaaaa
@4C61@
</annotation>   </semantics>  </math>  	</td>  	</tr>  </table>
<p>Pour tous les processus qui concernent la manipulation de l&rsquo;iode radioactif dans ce cas, B<sub>T</sub> = 111. Comme B<sub>T</sub> &gt; 1, on devrait r&eacute;aliser un contr&ocirc;le de l&rsquo;incorporation individuelle dans cette installation. Comme r<sub>j</sub> = 111 pour le <sup>131</sup>I, l&rsquo;installation r&eacute;alise un contr&ocirc;le thyro&iuml;dien r&eacute;gulier pour le <sup>131</sup>I. Pour le <sup>123</sup>I, la valeur de r<sub>j</sub> &asymp; 0,01. Par cons&eacute;quent, le contr&ocirc;le r&eacute;gulier de l&rsquo;incorporation du <sup>123</sup>I n&rsquo;est pas r&eacute;alis&eacute; &agrave; cette installation.</p>  <p><strong>Tableau B.2 : Exemple : D&eacute;termination de la participation &agrave; un programme d&rsquo;essais biologiques</strong></p>
<table className="width-100">
<tr>
<th>Protocole</th>
<th colSpan="5">Production de mIBG</th>
<th>Administrarion de NaI</th>
</tr>
<tr>
<th>Radionucl&eacute;ide</th>
<th colSpan="4"><sup>123</sup>I</th>
<th><sup>121</sup>Te</th>
<th><sup>131</sup>I</th>
</tr>
<tr>
<th>Forme</th>
<td className="text-center"><strong>mIBG</strong></td>
<td className="text-center"><strong>NaI</strong></td>
<td className="text-center"><strong>mIBG</strong></td>
<td className="text-center"><strong>NaI</strong></td>
<td className="text-center"><strong>NaI</strong></td>
<td className="text-center"><strong>NaI</strong></td>
</tr>
<tr>
<th className="text-center">Description de l&rsquo;utilisation</th>
<td className="text-center">Contr&ocirc;le de qualit&eacute; hebdomadaires</td>
<td className="text-center">Restant manipul&eacute; sous la hotte</td>
<td className="text-center">mIBG manipul&eacute; sous la hotte</td>
<td className="text-center">Solution m&egrave;re de NaI dans une cellule chaude</td>
<td className="text-center">Impuret&eacute; dans la solution m&egrave;re (3% de l&rsquo;activit&eacute; initiale totale)</td>
<td className="text-center">Solution m&egrave;re utilis&eacute;e pour l&rsquo;administration</td>
</tr>
<tr>
<th>Activit&eacute; par utilisation (<em>Q<sub>i</sub></em>) MBq</th>
<td className="text-center text-center">0,1</td>
<td className="text-center text-center">250</td>
<td className="text-center text-center">850</td>
<td className="text-center text-center">1 100</td>
<td className="text-center text-center">33</td>
<td className="text-center text-center">111 000</td>
</tr>
<tr>
<th>R</th>
<td className="text-center text-center">0,1</td>
<td className="text-center text-center">1</td>
<td className="text-center text-center">0,1</td>
<td className="text-center text-center">1</td>
<td className="text-center text-center">1</td>
<td className="text-center text-center">1</td>
</tr>
<tr>
<th>C</th>
<td className="text-center text-center">1</td>
<td className="text-center text-center">1</td>
<td className="text-center text-center">1</td>
<td className="text-center text-center">0,01</td>
<td className="text-center text-center">0,01</td>
<td className="text-center text-center">1</td>
</tr>
<tr>
<th>D</th>
<td className="text-center text-center">1</td>
<td className="text-center text-center">1</td>
<td className="text-center text-center">1</td>
<td className="text-center text-center">10</td>
<td className="text-center text-center">10</td>
<td className="text-center text-center">1</td>
</tr>
<tr>
<th>O</th>
<td className="text-center text-center">50</td>
<td className="text-center text-center">100</td>
<td className="text-center text-center">100</td>
<td className="text-center text-center">100</td>
<td className="text-center text-center">100</td>
<td className="text-center text-center">50</td>
</tr>
<tr>
<th>FIP<sub>i</sub></th>
<td className="text-center text-center">5&times;10<sup>-6</sup></td>
<td className="text-center text-center">1&times;10<sup>-4</sup></td>
<td className="text-center text-center">1&times;10<sup>-5</sup></td>
<td className="text-center text-center">1&times;10<sup>-5</sup></td>
<td className="text-center text-center">1&times;10<sup>-5</sup></td>
<td className="text-center text-center">5&times;10<sup>-5</sup></td>
</tr>
<tr>
<th>e(50) Sv/Bq</th>
<td className="text-center text-center">2,1&times;10<sup>-10</sup></td>
<td className="text-center text-center">2,1&times;10<sup>-10</sup></td>
<td className="text-center text-center">2,1&times;10<sup>-10</sup></td>
<td className="text-center text-center">2,1&times;10<sup>-10</sup></td>
<td className="text-center text-center">3,9&times;10<sup>-10</sup></td>
<td className="text-center text-center">2,0&times;10<sup>-8</sup></td>
</tr>
<tr>
<th>LAI Bq</th>
<td className="text-center text-center">9,5&times;10<sup>7</sup></td>
<td className="text-center text-center">9,5&times;10<sup>7</sup></td>
<td className="text-center text-center">9,5&times;10<sup>7</sup></td>
<td className="text-center text-center">9,5&times;10<sup>7</sup></td>
<td className="text-center text-center">5,1&times;10<sup>7</sup></td>
<td className="text-center text-center">1,0&times;10<sup>6</sup></td>
</tr>
<tr>
<th>r<sub>j</sub></th>
<td className="text-center text-center" colSpan="4">0,01</td>
<td className="text-center text-center">1.3&times;10<sup>-4</sup></td>
<td className="text-center text-center">111</td>
</tr>  </table>
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
<h2 id="appC">Annexe C : Protocoles d&rsquo;intervention pour les essais biologiques en cas d&rsquo;incorporation anormale de radionucl&eacute;ides</h2>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="C.1"></div>
<h3 id="appC-1">C.1 Introduction</h3>  <p>La pr&eacute;sente annexe d&eacute;crit deux protocoles d&rsquo;essais biologiques que pourraient utiliser les titulaires de permis de la CCSN dans les situations o&ugrave; des personnes auraient pu incorporer une quantit&eacute; anormale de mati&egrave;res radioactives. L&rsquo;annexe fournit &eacute;galement des conseils sur la fa&ccedil;on de pr&eacute;lever et de manipuler des &eacute;chantillons pour les essais biologiques.</p>  <p>Les sections C.6 et C.7 d&eacute;crivent deux protocoles pour la r&eacute;alisation d&rsquo;essais biologiques sp&eacute;ciaux pouvant &ecirc;tre utilis&eacute;s par les titulaires de permis de la CCSN pour d&eacute;terminer la dose de rayonnement re&ccedil;ue par les personnes lorsqu&rsquo;il y a eu incorporation anormale &ndash; r&eacute;elle ou pr&eacute;sum&eacute;e &ndash; d&rsquo;un radionucl&eacute;ide.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="C.2"></div>
<h3 id="appC-2">C.2	M&eacute;thodes d&rsquo;essais biologiques</h3>  <p>Les programmes de radioprotection que les titulaires de permis de la CCSN sont tenus de mettre en place, en vertu du RRP, comprennent habituellement des dispositions concernant les essais biologiques. Ceux-ci peuvent &ecirc;tre &laquo; directs &raquo; ou &laquo; indirects &raquo;.</p>  <p>Les essais biologiques &laquo; directs &raquo; (ou <em>in vivo</em>), sont des mesures effectu&eacute;es sur le corps humain en vue de d&eacute;terminer la quantit&eacute; de mati&egrave;res radioactives pr&eacute;sentes dans le corps, en utilisant des instruments qui d&eacute;tectent le rayonnement &eacute;mis par les mati&egrave;res radioactives.</p>  <p>Les essais biologiques &laquo; indirects &raquo; (ou <em>in vitro</em>), consistent &agrave; pr&eacute;lever et &agrave; analyser des &eacute;chantillons de cheveux humains, de tissus, de s&eacute;cr&eacute;tions nasales, d&rsquo;urine ou de mati&egrave;res f&eacute;cales dans le but de d&eacute;terminer la quantit&eacute; de mati&egrave;res radioactives qui auraient pu &ecirc;tre incorpor&eacute;es.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="C.3"></div>
<h3 id="appC-3">C.3 Essais biologiques &laquo; courants &raquo; et &laquo; sp&eacute;ciaux &raquo;</h3>  <p>Les essais biologiques visant &agrave; contr&ocirc;ler les doses de rayonnement peuvent &ecirc;tre class&eacute;s en essais &laquo; courants &raquo; ou &laquo; sp&eacute;ciaux &raquo;, comme suit :</p>
<ul>
<li>un essai biologique &laquo; courant &raquo; est tout essai biologique qui comprend le pr&eacute;l&egrave;vement et l&rsquo;analyse d&rsquo;&eacute;chantillons ou la prise de mesures sur le corps &agrave; intervalles r&eacute;guliers ou &agrave; des moments pr&eacute;d&eacute;termin&eacute;s durant les activit&eacute;s normales.</li>
<li>un essai biologique &laquo; sp&eacute;cial &raquo; est un essai biologique qui est effectu&eacute; dans le cadre d&rsquo;une intervention ponctuelle &agrave; la suite de circonstances particuli&egrave;res, comme une incorporation r&eacute;elle ou pr&eacute;sum&eacute;e de mati&egrave;res radioactives caus&eacute;e par un incident anormal sur les lieux de travail. L&rsquo;essai biologique &laquo; sp&eacute;cial &raquo; est souvent appel&eacute; essai &laquo; ponctuel &raquo;.</li>  </ul>  <p>Par d&eacute;finition, les programmes de contr&ocirc;le des doses qui comportent des essais biologiques r&eacute;guliers sont proactifs et de nature pr&eacute;ventive. Ils visent en g&eacute;n&eacute;ral &agrave; d&eacute;tecter, mesurer et confirmer, rapidement et dans le cours normal des activit&eacute;s, toute incorporation continue de mati&egrave;res radioactives. Un exemple d&rsquo;essai biologique r&eacute;gulier est le pr&eacute;l&egrave;vement d&rsquo;un &eacute;chantillon d&rsquo;urine aux deux semaines (tous les 14 jours) qui sera analys&eacute; en vue de d&eacute;terminer la pr&eacute;sence d&rsquo;oxyde de tritium.</p>  <p>Les programmes qui pr&eacute;voient des essais biologiques sp&eacute;ciaux sont habituellement de nature r&eacute;active et ponctuelle. Un tel programme est habituellement con&ccedil;u sur mesure afin de d&eacute;terminer les param&egrave;tres cl&eacute;s qui sont n&eacute;cessaires pour &eacute;valuer des doses sp&eacute;cifiques en r&eacute;ponse &agrave; un besoin pr&eacute;cis et d&eacute;termin&eacute;. Pour &eacute;viter de compromettre les r&eacute;sultats, les essais biologiques sp&eacute;ciaux sont habituellement r&eacute;alis&eacute;s lorsque la personne s&rsquo;est retir&eacute;e des lieux afin d&rsquo;&eacute;viter qu&rsquo;elle soit de nouveau en contact avec des substances radioactives ou y soit expos&eacute;e.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="C.4"></div>
<h3 id="appC-4">C.4	Choix et utilisation des m&eacute;thodes d&rsquo;essais biologiques</h3>  <p>Dans les situations o&ugrave; des protocoles d&rsquo;intervention faisant appel &agrave; des essais biologiques sp&eacute;ciaux sont mis en &oelig;uvre, le programme connexe d&rsquo;essais biologiques et d&rsquo;analyses d&eacute;pendra habituellement de facteurs propres &agrave; chaque cas, notamment :</p>
<ul>
<li>le moment o&ugrave; l&rsquo;incorporation de contaminants radioactifs s&rsquo;est produite</li>
<li>le mode d&rsquo;incorporation des contaminants radioactifs</li>
<li>l&rsquo;&eacute;valuation pr&eacute;liminaire de l&rsquo;incorporation radioactive et la dose r&eacute;sultante, &agrave; l&rsquo;aide des r&eacute;sultats d&rsquo;essais biologiques et des param&egrave;tres par d&eacute;faut
<li>si le rayonnement est imputable &agrave; un seul radionucl&eacute;ide ou &agrave; un m&eacute;lange de radionucl&eacute;ides</li>
<li>les formes chimique et physique (p. ex., la taille des particules) du contaminant radioactif</li>
<li>les types et l&rsquo;importance du rayonnement &eacute;mis par le contaminant</li>
<li>le taux de d&eacute;sint&eacute;gration du contaminant radioactif</li>
<li>les caract&eacute;ristiques m&eacute;taboliques et le comportement du contaminant radioactif (p. ex., dur&eacute;e de r&eacute;tention dans le corps, solubilit&eacute; dans les poumons, taux d&rsquo;excr&eacute;tion)</li>
<li>le moment o&ugrave; les r&eacute;sultats de l&rsquo;essai biologique devraient &ecirc;tre disponibles</li>
<li>le nombre de r&eacute;sultats d&rsquo;essais biologiques requis</li>
<li>l&rsquo;utilit&eacute;, la sensibilit&eacute;, la qualit&eacute; et la pertinence de l&rsquo;&eacute;quipement et des installations d&rsquo;essais biologiques</li>
</ul>  <p>Les m&eacute;thodes d&rsquo;essais biologiques les plus souvent utilis&eacute;es pour &eacute;valuer les doses de rayonnement provenant de sources internes sont le comptage <em>in vivo</em> et l&rsquo;analyse d&rsquo;&eacute;chantillons d&rsquo;excr&eacute;tions recueillis, comme l&rsquo;urine et les mati&egrave;res f&eacute;cales. Ces m&eacute;thodes conviennent &agrave; diverses situations. Dans certains cas, comme lorsqu&rsquo;il s&rsquo;agit de radionucl&eacute;ides sans &eacute;mission de rayons gamma ou &agrave; &eacute;mission de photons de faible &eacute;nergie seulement, les essais biologiques sur les excr&eacute;tions constituent la seule option raisonnable. &Agrave; l&rsquo;inverse, si une personne aurait pu &ecirc;tre expos&eacute;e de fa&ccedil;on interne &agrave; un m&eacute;lange de radionucl&eacute;ides qui &eacute;met des photons gamma p&eacute;n&eacute;trants, un comptage in vivo combin&eacute; &agrave; la collecte et &agrave; l&rsquo;analyse d&rsquo;excr&eacute;tions pourrait &ecirc;tre appropri&eacute;.</p>  <p>Dans certaines situations o&ugrave; une m&eacute;thode d&rsquo;essai biologique standard, ou une combinaison de ces m&eacute;thodes, ne suffit pas pour d&eacute;tecter tous les radionucl&eacute;ides pr&eacute;occupants, on pourrait toujours utiliser la m&eacute;thode ou une combinaison de m&eacute;thodes conjointement avec d&rsquo;autres connaissances ou renseignements pour &eacute;tablir et estimer l&rsquo;impact de tous les radionucl&eacute;ides en cause. Par exemple, lorsque des m&eacute;thodes standards indiquent la pr&eacute;sence de certains radionucl&eacute;ides, il pourrait &ecirc;tre raisonnable de conclure que certains autres radionucl&eacute;ides, c&rsquo;est-&agrave;-dire ceux dont on sait qu&rsquo;ils sont normalement associ&eacute;s aux radionucl&eacute;ides d&eacute;tect&eacute;s par ces m&eacute;thodes, sont &eacute;galement pr&eacute;sents. L&rsquo;association courante, dans le combustible d&rsquo;uranium us&eacute;, d&rsquo;&eacute;metteurs gamma dans les produit de fission (d&eacute;tectables par comptage <em>in vivo</em> ou par spectroscopie gamma sur des &eacute;chantillons de mati&egrave;res f&eacute;cales au moyen de d&eacute;tecteurs au germanium) avec certains radionucl&eacute;ides transuraniens est un exemple d&rsquo;une telle situation. Par cons&eacute;quent, lorsqu&rsquo;une m&eacute;thode d&rsquo;essai biologique standard d&eacute;tecte un radionucl&eacute;ide de substitution, cela pourrait indiquer, &agrave; la lumi&egrave;re de l&rsquo;association connue ou typique du radionucl&eacute;ide de substitution avec d&rsquo;autres radionucl&eacute;ides, la pr&eacute;sence &eacute;galement de radionucl&eacute;ides associ&eacute;s qui ne peuvent &ecirc;tre d&eacute;tect&eacute;s que par des techniques suppl&eacute;mentaires de comptage in vivo ou des analyses sp&eacute;ciales (p. ex., analyse des traces de fission pour le <sup>239</sup>Pu dans l&rsquo;urine).</p>  <p>De plus, avec des ajustements appropri&eacute;s, les donn&eacute;es m&eacute;taboliques &ndash; comme la dur&eacute;e de r&eacute;tention dans un organe ou dans le corps entier, et les taux d&rsquo;excr&eacute;tion de l&rsquo;urine et des mati&egrave;res f&eacute;cales &ndash; peuvent souvent &ecirc;tre utilis&eacute;es avec les r&eacute;sultats des essais biologiques pour d&eacute;terminer une exposition au rayonnement et les doses imputables &agrave; l&rsquo;incorporation de mati&egrave;res radioactives.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="C.5"></div>
<h3 id="appC-5">C.5	Protocoles d&rsquo;intervention</h3>  <p>Les protocoles d&rsquo;intervention d&eacute;crits dans la pr&eacute;sente section sont con&ccedil;us pour les situations inhabituelles, comme lorsqu&rsquo;il est n&eacute;cessaire de v&eacute;rifier la DEE chez une personne &agrave; la suite d&rsquo;une incorporation r&eacute;elle ou pr&eacute;sum&eacute;e de substances radioactives due &agrave; un incident en milieu de travail. Ces sc&eacute;narios comprennent :</p>
<ul>
<li>la br&egrave;che ou la d&eacute;faillance d&rsquo;une source scell&eacute;e</li>
<li>la manipulation de sources non scell&eacute;es</li>
<li>la contamination en suspension dans l&rsquo;air par suite d&rsquo;incendies ou d&rsquo;explosions</li>
<li>la d&eacute;faillance de l&rsquo;&eacute;quipement de protection individuelle (p. ex., l&rsquo;&eacute;quipement respiratoire) lors de l&rsquo;entretien ou de la r&eacute;paration d&rsquo;&eacute;quipements ou de syst&egrave;mes contamin&eacute;s</li>
</ul>  <p>Lorsqu&rsquo;un incident survient dans une installation autoris&eacute;e par un permis de la CCSN ou durant une activit&eacute; r&eacute;glement&eacute;e par la CCSN et qu&rsquo;il entra&icirc;ne une exposition interne possible ou r&eacute;elle au rayonnement, il peut alors &ecirc;tre n&eacute;cessaire d&rsquo;effectuer un essai biologique sp&eacute;cial conform&eacute;ment aux r&egrave;glements, &agrave; un permis de la CCSN ou au programme de radioprotection du titulaire de permis.</p>  <p>Par exemple, lorsqu&rsquo;un titulaire de permis apprend qu&rsquo;une dose de rayonnement re&ccedil;ue par une personne, un organe ou un tissu, pourrait avoir d&eacute;pass&eacute; une limite de dose applicable qui est pr&eacute;vue aux articles 13, 14 ou 15 du RRP, il doit faire enqu&ecirc;te pour &eacute;tablir l&rsquo;ampleur de la dose et les causes de l&rsquo;exposition  (alin&eacute;a 16c) du RRP). Les activit&eacute;s entreprises dans le cadre de l&rsquo;enqu&ecirc;te requise ayant pour but de d&eacute;terminer l&rsquo;importance de la dose peuvent comprendre la r&eacute;alisation d&rsquo;un essai biologique sp&eacute;cial.</p>  <p>Pour que les r&eacute;sultats des essais biologiques sp&eacute;ciaux soient cr&eacute;dibles, il faudrait porter une attention particuli&egrave;re au choix et &agrave; l&rsquo;applicabilit&eacute; des m&eacute;thodes d&rsquo;essai, au moment et au nombre des comptages <em>in vivo</em>, ou au moment du pr&eacute;l&egrave;vement des &eacute;chantillons d&rsquo;excr&eacute;tions par rapport au moment o&ugrave; l&rsquo;incorporation a eu lieu. Par cons&eacute;quent, les personnes responsables de la conception et de la mise en &oelig;uvre des protocoles d&rsquo;intervention devraient exercer un jugement comp&eacute;tent concernant des questions cl&eacute;s. Par exemple, elles devraient d&eacute;cider s&rsquo;il y a lieu de pr&eacute;lever et de conserver des &eacute;chantillons pour les analyses de confirmation, elles devraient choisir les moments appropri&eacute;s pour tronquer l&rsquo;&eacute;chantillonnage et elles devraient peser le pour et le contre des avantages et inconv&eacute;nients connexes.</p>  <p>Au moment de choisir les meilleures m&eacute;thodes d&rsquo;essais biologiques et de d&eacute;terminer la nature des exigences compl&eacute;mentaires requises pour un contr&ocirc;le biologique additionnel, les personnes responsables devraient tenir compte des facteurs mentionn&eacute;s &agrave; la section 4 ci-dessus.</p>  <p>Les titulaires de permis peuvent utiliser les protocoles d&rsquo;intervention d&eacute;crits &agrave; la section 6 de la pr&eacute;sente annexe pour d&eacute;terminer la DEE r&eacute;sultant de l&rsquo;incorporation de radionucl&eacute;ides. Cependant, les utilisateurs doivent faire preuve de jugement. Ils doivent adapter le protocole recommand&eacute; pour r&eacute;pondre &agrave; leurs besoins sp&eacute;cifiques et aux circonstances particuli&egrave;res. Ces besoins et circonstances d&eacute;pendent de facteurs propres &agrave; chaque situation, incluant les risques de rayonnement sur le lieu de travail et les circonstances associ&eacute;es &agrave; l&rsquo;exposition interne.</p>  <p>Il est recommand&eacute; d&rsquo;utiliser des donn&eacute;es propres aux mati&egrave;res (p. ex., solubilit&eacute;, taille des particules) plut&ocirc;t que les valeurs par d&eacute;faut de la CIPR pour ces &eacute;valuations, car les taux observ&eacute;s sont g&eacute;n&eacute;ralement plus r&eacute;alistes que les valeurs par d&eacute;faut et sont donc plus susceptibles d&rsquo;entra&icirc;ner une &eacute;valuation plus r&eacute;aliste des doses de rayonnement associ&eacute;es. On ne peut pas d&eacute;terminer le taux de r&eacute;tention ou d&rsquo;excr&eacute;tion d&rsquo;une personne &agrave; partir de seulement deux ou trois mesures ou &eacute;chantillons al&eacute;atoires. Cons&eacute;quemment, le protocole recommand&eacute; est con&ccedil;u de mani&egrave;re &agrave; obtenir suffisamment de donn&eacute;es d&rsquo;essais biologiques syst&eacute;matiques et propres &agrave; une situation donn&eacute;e pour produire des &eacute;valuations de dose d&eacute;fendables sur le plan scientifique.</p>  <p>Les situations suivantes d&eacute;clencheraient les protocoles d&rsquo;intervention d&eacute;crits aux sections C.6 et C.7 :</p>
<ul>
<li>lorsqu&rsquo;un programme d&rsquo;essais biologiques r&eacute;guliers donne un r&eacute;sultat anormal, indiquant qu&rsquo;une personne pourrait avoir &eacute;t&eacute; expos&eacute;e &agrave; des niveaux anormaux de rayonnement</li>
<li>lorsqu&rsquo;un incident anormal r&eacute;el ou pr&eacute;sum&eacute; s&rsquo;est produit (p. ex., un &eacute;v&eacute;nement d&eacute;clencheur comme un incendie, une explosion ou la d&eacute;faillance d&rsquo;un syst&egrave;me de ventilation) qui a un potentiel reconnu de donner lieu &agrave; une incorporation importante de radionucl&eacute;ides par une personne touch&eacute;e</li>
</ul>  <p>Les figures C.1 et C.2 illustrent les profils d&rsquo;excr&eacute;tion-&eacute;chantillonnage qui conviendraient dans des situations particuli&egrave;res.</p>
<div className="span-5">  <p><strong>Figure C.1 : Calendrier type d&rsquo;&eacute;chantillonnage des mati&egrave;res f&eacute;cales pouvant contenir des compos&eacute;s de type S</strong></p>  <img src="/images/regdocs/regdoc-2-7-2-vol1/figure-c1-fra.png" alt="" />  </div>  <div className="clear"></div>  <br />
<p><strong>Figure C.2 : P&eacute;riodes types d&rsquo;&eacute;chantillonnage de l&rsquo;urine pouvant contenir un compos&eacute; de type F</strong></p>  <div className="span-5">  <img src="/images/regdocs/regdoc-2-7-2-vol1/figure-c2-fra.png" alt="" />  </div>  <div className="clear"></div>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="C.6"></div>
<h3 id="appC-6">C.6	Protocole d&rsquo;intervention d&eacute;clench&eacute; par des essais biologiques r&eacute;guliers</h3>  <p>Pour la premi&egrave;re phase de ce protocole d&rsquo;intervention recommand&eacute;, proc&eacute;der comme suit :</p>
<ol>
<li>retirer le travailleur expos&eacute; du lieu de travail pour s&rsquo;assurer qu&rsquo;il ne subit aucune incorporation ult&eacute;rieure</li>
<li>confirmer le r&eacute;sultat de l&rsquo;essai biologique le plus t&ocirc;t possible, par le laboratoire qui a effectu&eacute; l&rsquo;analyse</li>
<li>effectuer les &eacute;valuations pr&eacute;liminaires de l&rsquo;incorporation et de la dose &agrave; l&rsquo;aide des r&eacute;sultats des essais biologiques initiaux, en tenant compte de certains facteurs, comme ceux de la section 4</li>
<li>si les r&eacute;sultats de pr&eacute;cipitation sont anormalement &eacute;lev&eacute;s (p. ex., beaucoup plus &eacute;lev&eacute; qu&rsquo;un &laquo; seuil d&rsquo;intervention &raquo; pertinent, tel que d&eacute;fini au paragraphe 6(1) du RRP), on envisagera alors de le faire confirmer par un laboratoire ind&eacute;pendant du laboratoire qui a obtenu les r&eacute;sultats de pr&eacute;cipitation</li>
<li>lorsque des essais biologiques r&eacute;guliers d&rsquo;un &eacute;chantillon donnent des r&eacute;sultats &eacute;lev&eacute;s, conserver l&rsquo;&eacute;chantillon jusqu&rsquo;&agrave; ce que toutes les enqu&ecirc;tes relatives &agrave; l&rsquo;incident soient termin&eacute;es.</li>  </ol>  <p>Habituellement, la conservation des &eacute;chantillons dans le but de r&eacute;p&eacute;ter les analyses ou d&rsquo;effectuer des analyses additionnelles s&rsquo;av&egrave;re pratique lorsqu&rsquo;une petite portion de l&rsquo;&eacute;chantillon total est requise pour chaque analyse. Par exemple, chaque analyse de l&rsquo;urine visant &agrave; d&eacute;tecter la pr&eacute;sence de tritium sous forme d&rsquo;eau triti&eacute;e dans l&rsquo;urine peut n&eacute;cessiter seulement 5 mL d&rsquo;&eacute;chantillon alors que le volume pr&eacute;lev&eacute; pourrait se situer entre 0,1 et 1 L. Ainsi, un &eacute;chantillon d&rsquo;urine relativement petit, qui occupe un espace de stockage proportionnel, est suffisant pour plusieurs analyses du &laquo; tritium &raquo;.</p>  <p>Dans la mesure du possible, les parties inutilis&eacute;es d&rsquo;un &eacute;chantillon d&rsquo;urine ou de mati&egrave;res f&eacute;cales devraient &ecirc;tre conserv&eacute;es pour analyse ult&eacute;rieure. Par exemple, lorsque la spectroscopie gamma non destructive d&rsquo;un &eacute;chantillon d&rsquo;excr&eacute;ments indique des niveaux significativement &eacute;lev&eacute;s de produits de fission et d&rsquo;activation, il peut &ecirc;tre &agrave; la fois pratique et prudent de r&eacute;duire l&rsquo;&eacute;chantillon en cendres et d&rsquo;en conserver une partie pour des analyses ult&eacute;rieures. Dans certains cas, il peut &ecirc;tre possible et valable de conserver les &eacute;chantillons non utilis&eacute;s pendant des p&eacute;riodes prolong&eacute;es au cas o&ugrave; des techniques d&rsquo;analyse et des &eacute;quipements am&eacute;lior&eacute;s deviendraient disponibles pendant la p&eacute;riode d&rsquo;entreposage et permettrait d&rsquo;obtenir des r&eacute;sultats plus justes, plus exacts ou plus fiables.</p>  <p>Dans le cadre de ce protocole, des &eacute;chantillonnages et des essais biologiques sp&eacute;ciaux sont requis en r&eacute;ponse &agrave; un essai biologique r&eacute;gulier qui indique qu&rsquo;un travailleur a re&ccedil;u une dose de rayonnement ou a incorpor&eacute; des mati&egrave;res radioactives qui d&eacute;passent une limite r&eacute;glementaire, ou qui d&eacute;passent ou &eacute;galent un &laquo; seuil d&rsquo;intervention &raquo; pertinent, tel que d&eacute;fini au paragraphe 6(1) du RRP.</p>  <p>Pour &ecirc;tre efficace, un programme d&rsquo;essais biologiques sp&eacute;ciaux devrait tenir compte des facteurs pertinents. Ces facteurs comprennent les points d&eacute;crits &agrave; la section C.4, les recommandations concernant l&rsquo;&eacute;chantillonnage et le comptage du tableau C.1, le programme de radioprotection et les caract&eacute;ristiques des radionucl&eacute;ides en cause.</p>  <p>Le tableau C.1 recommande des campagnes d&rsquo;&eacute;chantillonnage biologique et de comptage in vivo pendant trois p&eacute;riodes contigu&euml;s (&laquo; 1&ndash;10 jours &raquo;, &laquo; 10&ndash;100 jours &raquo; et &laquo; plus de 100 jours &raquo;), apr&egrave;s un essai biologique r&eacute;gulier qui indique qu&rsquo;une dose radioactive est &eacute;gale ou sup&eacute;rieure &agrave; un seuil de d&eacute;clenchement. Les recommandations du tableau C.1 s&rsquo;appliquent &agrave; la p&eacute;riode o&ugrave; le travailleur expos&eacute; au rayonnement ou &agrave; des substances radioactives est retir&eacute; du lieu de travail.</p>  <p>Le tableau C.1 pr&eacute;sente des situations auxquelles les titulaires de permis de la CCSN sont susceptibles d&rsquo;&ecirc;tre confront&eacute;s, mais elles n&rsquo;y figurent pas toutes. Par exemple, dans le cas des radionucl&eacute;ides &agrave; courte p&eacute;riode (&lt;<p> 3 jours), la p&eacute;riode totale d&rsquo;&eacute;chantillonnage disponible peut &ecirc;tre relativement courte et, par cons&eacute;quent, le r&eacute;gime d&rsquo;&eacute;chantillonnage recommand&eacute; au tableau C.1 pourrait ne pas &ecirc;tre appropri&eacute;. De m&ecirc;me, les recommandations du tableau C.1 pourraient ne pas convenir enti&egrave;rement dans les situations o&ugrave; des radionucl&eacute;ides &agrave; longue p&eacute;riode sont incorpor&eacute;s dans des compos&eacute;s dont la p&eacute;riode est courte (moins de 3 jours). Dans de telles situations, l&rsquo;&eacute;chantillonnage doit &ecirc;tre quotidien au cours des 10 premiers jours suivant la contamination interne afin de pouvoir d&eacute;finir pr&eacute;cis&eacute;ment l&rsquo;allure des courbes de r&eacute;tention et d&rsquo;excr&eacute;tion du sujet.</p>  <p>Lorsque les r&eacute;sultats d&rsquo;un essai biologique r&eacute;gulier laissent supposer que l&rsquo;incorporation peut d&eacute;passer de beaucoup le seuil de d&eacute;clenchement, il faut prendre des dispositions pour effectuer des essais biologiques non r&eacute;guliers et pr&eacute;lever les &eacute;chantillons recommand&eacute;s au tableau C.1. Il faut aussi mener des essais biologiques additionnels (sang, salive, haleine), ainsi que les essais biologiques qui sont requis par le programme de radioprotection applicable, ou qui sont n&eacute;cessaires pour produire et am&eacute;liorer les &eacute;valuations de l&rsquo;incorporation de mati&egrave;res radioactives ou des doses de rayonnement. Par exemple, lorsque la dose estim&eacute;e d&eacute;passe 100 mSv, on doit pr&eacute;lever des &eacute;chantillons de sang en vue de r&eacute;aliser des analyses chromosomiques.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="C.7"></div>
<h3 id="appC-7">C.7	Protocole d&rsquo;intervention d&eacute;clench&eacute; par un incident anormal</h3>  <p>Ce protocole est destin&eacute; &agrave; &ecirc;tre mis en &oelig;uvre en cas d&rsquo;incident anormal sur le lieu de travail, tel qu&rsquo;un incendie, une explosion, une d&eacute;faillance des syst&egrave;mes de ventilation ou de l&rsquo;&eacute;quipement de protection. Les incidents anormaux augmentent habituellement les niveaux de radioactivit&eacute; dans l&rsquo;air, et peuvent donner lieu &agrave; une plus forte incorporation de mati&egrave;res radioactives chez les travailleurs. De plus, les incidents anormaux qui entra&icirc;nent l&rsquo;humectation de la peau par l&rsquo;eau triti&eacute;e peuvent entra&icirc;ner une augmentation de l&rsquo;incorporation de mati&egrave;res radioactives.</p>  <p>Comme les incendies, les explosions ou les d&eacute;faillances des syst&egrave;mes de ventilation sont &eacute;vidents et d&eacute;clenchent g&eacute;n&eacute;ralement des alarmes ou des moniteurs de protection, les moments auxquels ils surviennent sont g&eacute;n&eacute;ralement bien connus. Dans de telles circonstances, on peut d&eacute;terminer avec la m&ecirc;me pr&eacute;cision le moment o&ugrave; se produit l&rsquo;incorporation de contaminants radioactifs par les travailleurs.</p>  <p>&Agrave; la suite d&rsquo;un &eacute;v&eacute;nement anormal survenu dans une installation nucl&eacute;aire, on peut parfois pr&eacute;sumer qu&rsquo;il y a eu contamination interne d&rsquo;apr&egrave;s des preuves indirectes. Par exemple, plusieurs signes peuvent indiquer que la peau a &eacute;t&eacute; soumise &agrave; une incorporation impr&eacute;vue : la d&eacute;tection d&rsquo;une contamination faciale ou nasale par des moniteurs-portiques ou des d&eacute;tecteurs portatifs, ou encore la pr&eacute;sence de coupures superficielles ou de plaies contamin&eacute;es par la radioactivit&eacute;, ou la pr&eacute;sence d&rsquo;eau triti&eacute;e sur la peau. Ces renseignements peuvent &ecirc;tre suffisants pour d&eacute;clencher imm&eacute;diatement un essai biologique ponctuel plut&ocirc;t que d&rsquo;attendre les r&eacute;sultats de l&rsquo;essai biologique r&eacute;gulier.</p>  <p>Lorsque l&rsquo;incorporation de contaminants radioactifs est pr&eacute;sum&eacute;e mais non confirm&eacute;e, le pr&eacute;l&egrave;vement opportun d&rsquo;&eacute;chantillons lors d&rsquo;essais biologiques ou autres peut aider &agrave; d&eacute;terminer si l&rsquo;incident s&rsquo;est produit ou non.</p>  <p>Les &eacute;chantillons pr&eacute;lev&eacute;s lors d&rsquo;essais non biologiques comprennent les frottis nasaux et les pr&eacute;l&egrave;vements sur les v&ecirc;tements de protection ou les surfaces en milieu de travail. La pr&eacute;sence ou l&rsquo;absence de radionucl&eacute;ides &agrave; ces endroits peut constituer une indication raisonnable qu&rsquo;une inhalation a eu lieu ou n&rsquo;a pas eu lieu.</p>  <p>On proc&eacute;dera comme suit pour pr&eacute;lever des &eacute;chantillons, confirmer les r&eacute;sultats et estimer les doses :</p>
<ol>
<li>Pr&eacute;voir la collecte en temps opportun d&rsquo;&eacute;chantillons pour essais biologiques sur les personnes expos&eacute;es et l&rsquo;ach&egrave;vement en temps opportun &eacute;galement du comptage in vivo, car les r&eacute;sultats initiaux des essais biologiques ou du contr&ocirc;le in vivo auront une incidence sur les d&eacute;cisions concernant l&rsquo;&eacute;chantillonnage ult&eacute;rieur. Dans le cas de l&rsquo;incorporation pr&eacute;sum&eacute;e de tritium, la vessie devrait &ecirc;tre vid&eacute;e avant le pr&eacute;l&egrave;vement d&rsquo;&eacute;chantillon pour l&rsquo;essai biologique.</li>
<li>En cas de contamination &eacute;tendue, prendre des mesures particuli&egrave;res pour obtenir des &eacute;chantillons d&rsquo;essais biologiques non contamin&eacute;s (voir la section C.8).</li>
<li>Dans l&rsquo;attente des r&eacute;sultats initiaux des essais biologiques et du contr&ocirc;le in vivo, continuer &agrave; &eacute;chantillonner aux fr&eacute;quences recommand&eacute;es au tableau C.1.</li>
<li>Examiner les r&eacute;sultats du premier essai biologique <em>in vitro</em> ou du premier comptage <em>in vivo</em>, et les comparer aux r&eacute;sultats des &eacute;chantillons d&rsquo;essais non biologiques disponibles, comme les frottis nasaux ou les frottis de surface.</li>
<li>Si les radionucl&eacute;ides d&eacute;tect&eacute;s sur les frottis nasaux et sur les lieux de travail sont les m&ecirc;mes que ceux identifi&eacute;s dans les r&eacute;sultats des essais biologiques, on peut alors confirmer qu&rsquo;il y a eu incorporation de ces radionucl&eacute;ides.</li>
<li>Effectuer des &eacute;valuations pr&eacute;liminaires de l&rsquo;incorporation et de la dose en utilisant les r&eacute;sultats des essais biologiques initiaux, et en tenant compte des facteurs comme ceux de la section C.4.</li>
</ol>  <p>Voici les mesures possibles &agrave; prendre &agrave; la suite des &eacute;valuations pr&eacute;liminaires de l&rsquo;incorporation et de la dose :</p>
<ul>
<li>Si l&rsquo;incorporation ou la dose estim&eacute;e est inf&eacute;rieure &agrave; un &laquo; seuil de d&eacute;clenchement &raquo; pertinent, ajuster en cons&eacute;quence les protocoles recommand&eacute;s dans le tableau C.1. Comme l&rsquo;incorporation est relativement faible, on envisagera de mettre fin &agrave; l&rsquo;&eacute;chantillonnage plus t&ocirc;t que ce qui est recommand&eacute; dans le tableau.</li>
<li>Si l&rsquo;incorporation ou la dose estim&eacute;e est &eacute;gale ou sup&eacute;rieure &agrave; un &laquo; seuil de d&eacute;clenchement &raquo; pertinent, suivre les protocoles recommand&eacute;s au tableau C.1. S&rsquo;il y a lieu, prendre des dispositions pour des analyses sp&eacute;cialis&eacute;es et un contr&ocirc;le biologique suppl&eacute;mentaires, comme il est indiqu&eacute; aux sections C.4 et C.5, respectivement. Par exemple, si la dose estim&eacute;e risque de d&eacute;passer 100 mSv, on pourrait pr&eacute;lever des &eacute;chantillons de sang en vue d&rsquo;analyses chromosomiques.</li>  </ul>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="C.8"></div>
<h3 id="appC-8">C.8	Pr&eacute;l&egrave;vement et manipulation d&rsquo;&eacute;chantillons d&rsquo;essais biologiques</h3>  <h4>C.8.1	R&egrave;gles g&eacute;n&eacute;rales</h4>
<ul>
<li>S&rsquo;assurer que toutes les personnes qui manipulent des &eacute;chantillons d&rsquo;essais biologiques ont re&ccedil;u la formation n&eacute;cessaire pour la manipulation s&eacute;curitaire des &eacute;chantillons biologiques et radioactifs.</li>
<li>Utiliser les services d&rsquo;un organisme m&eacute;dical ou d&rsquo;un m&eacute;decin comp&eacute;tent pour pr&eacute;lever les &eacute;chantillons de sang.</li>
<li>Au moment de pr&eacute;lever des &eacute;chantillons dans des zones restreintes, travailler dans les endroits o&ugrave; les risques de contamination sont les plus faibles.</li>
<li>Pr&eacute;lever les &eacute;chantillons dans des contenants st&eacute;riles jetables.</li>
<li>Lorsqu&rsquo;on demande &agrave; une personne un &eacute;chantillon de mati&egrave;res f&eacute;cales, on doit l&rsquo;avertir de faire attention pour ne pas contaminer l&rsquo;&eacute;chantillon avec de l&rsquo;urine.</li>
<li>Apr&egrave;s avoir pr&eacute;lev&eacute; un &eacute;chantillon dans un lieu de travail potentiellement contamin&eacute;, prendre une douche ou se laver les mains soigneusement avant de pr&eacute;lever les &eacute;chantillons dans une zone non restreinte.</li>
<li>Lorsque cela est possible, conserver tous les &eacute;chantillons recueillis jusqu&rsquo;&agrave; ce que les enqu&ecirc;tes li&eacute;es &agrave; l&rsquo;incident soient termin&eacute;es.</li>
</ul>
<h4>C.8.2	&Eacute;tiquetage des &eacute;chantillons</h4>  <p>Apr&egrave;s le pr&eacute;l&egrave;vement d&rsquo;un &eacute;chantillon biologique, on apposera une &eacute;tiquette sur le contenant en y indiquant le nom de la personne (ou son num&eacute;ro d&rsquo;identification), la date et l&rsquo;heure du pr&eacute;l&egrave;vement.</p>
<h4>C.8.3	Traitement et stockage des &eacute;chantillons d&rsquo;urine</h4>  <p>Si l&rsquo;on doit conserver l&rsquo;&eacute;chantillon d&rsquo;urine pendant plus de 24 heures apr&egrave;s le pr&eacute;l&egrave;vement, placer imm&eacute;diatement le contenant dans un endroit frais, comme un r&eacute;frig&eacute;rateur ou une glaci&egrave;re.</p>  <p>Si un &eacute;chantillon d&rsquo;urine doit &ecirc;tre conserv&eacute; pendant une p&eacute;riode importante ou ind&eacute;termin&eacute;e avant d&rsquo;&ecirc;tre analys&eacute;, traiter l&rsquo;&eacute;chantillon pour pr&eacute;venir ou minimiser la croissance bact&eacute;rienne ou les pertes de radionucl&eacute;ides sur les parois du r&eacute;cipient imm&eacute;diatement apr&egrave;s le pr&eacute;l&egrave;vement de l&rsquo;&eacute;chantillon. Utiliser des mesures adapt&eacute;es &agrave; la situation, en tenant compte des caract&eacute;ristiques et des formes chimiques des radionucl&eacute;ides pr&eacute;sents dans l&rsquo;&eacute;chantillon. Les approches types comprennent l&rsquo;ajout d&rsquo;acide &agrave; certains types d&rsquo;&eacute;chantillons pour pr&eacute;venir la pr&eacute;cipitation, ou encore l&rsquo;ajout d&rsquo;un agent de conservation comme du thymol pour minimiser la croissance bact&eacute;rienne.</p>  <p>Le cas &eacute;ch&eacute;ant, les &eacute;chantillons d&rsquo;urine peuvent &ecirc;tre congel&eacute;s. La cong&eacute;lation pourrait convenir pour les &eacute;chantillons d&rsquo;urine renfermant du tritium li&eacute; aux compos&eacute;s organiques, particuli&egrave;rement ceux qui n&eacute;cessitent une analyse r&eacute;p&eacute;t&eacute;e ou de confirmation en vue de d&eacute;terminer la pr&eacute;sence du tritium li&eacute; aux compos&eacute;s organiques. Lorsque cela est possible, on conservera une partie des &eacute;chantillons pour les analyses r&eacute;p&eacute;t&eacute;es ou multiples.</p>
<h4>C.8.4	Pr&eacute;l&egrave;vement et conservation des &eacute;chantillons de mati&egrave;res f&eacute;cales</h4>  <p>Pour pr&eacute;lever des &eacute;chantillons de mati&egrave;res f&eacute;cales, on emploiera des trousses sp&eacute;ciales &laquo; faciles &agrave; utiliser &raquo;, con&ccedil;ues &agrave; cette fin et disponibles dans le commerce chez les fournisseurs d&rsquo;&eacute;quipement m&eacute;dical.</p>  <p>Il faut congeler d&egrave;s leur r&eacute;ception les &eacute;chantillons de mati&egrave;res f&eacute;cales qui ne sont pas analys&eacute;s imm&eacute;diatement.</p>
<h4>C.8.5	Emballage et transport des &eacute;chantillons d&rsquo;essais biologiques</h4>  <p>Pour &eacute;viter tout rejet, &eacute;mission ou perte d&rsquo;&eacute;chantillons radiobiologiques durant le transport, les &eacute;chantillons doivent &ecirc;tre emball&eacute;s de mani&egrave;re s&ucirc;re conform&eacute;ment &agrave; l&rsquo;alin&eacute;a 2.2(3)(b) du <a href="https://www.tc.gc.ca/fra/tmd/clair-tdesm-211.htm"><em>R&egrave;glement sur le transport des marchandises dangereuses</em></a>. Il faut porter une attention particuli&egrave;re &agrave; l&rsquo;emballage des &eacute;chantillons liquides et fluides.</p>  <p>Si le transport des &eacute;chantillons liquides prend plus de 2 heures, on les placera dans une glaci&egrave;re qui contient de la glace s&egrave;che.</p>  <p>Conserver les &eacute;chantillons de mati&egrave;res f&eacute;cales &agrave; l&rsquo;&eacute;tat congel&eacute; pendant le transport.</p>
<p><strong>Tableau C.1 : R&eacute;alisation d&rsquo;essais biologiques lorsque l&rsquo;estimation pr&eacute;liminaire de l&rsquo;incorporation est &eacute;gale ou sup&eacute;rieure &agrave; un seuil de d&eacute;clenchement</strong></p>
<table className="">
<tr>
<th>Temps apr&egrave;s l&rsquo;incorporation de mati&egrave;res radioactives</th>
<th className="text-center">Fr&eacute;quence d&rsquo;&eacute;chantillonnage de l&rsquo;urine</th>
<th className="text-center">Fr&eacute;quence d&rsquo;&eacute;chantillonnage des mati&egrave;res f&eacute;cales</th>
<th className="text-center">Fr&eacute;quence du comptage <em>in vivo</em></th>
<th className="text-center">Commentaires</th>
</tr>
<tr>
<td>1-10 jours</td>
<td>Pr&eacute;lever, chaque jour, un &eacute;chantillon d&rsquo;urine sur 24 heures.</td>
<td>Pr&eacute;lever, chaque jour, un &eacute;chantillon de mati&egrave;res f&eacute;cales sur 24 heures.</td>
<td>Effectuer chaque jour un comptage <em>in vivo</em>.</td>
<td>Mettre fin &agrave; l&rsquo;&eacute;chantillonnage et/ou au comptage in vivo lorsque les r&eacute;sultats sont inf&eacute;rieurs aux limites de d&eacute;tection ou atteignent les valeurs de base chroniques.</td>
</tr>
<tr>
<td>10-100 days</td>
<td>Pr&eacute;lever, tous les 14 jours, un &eacute;chantillon d&rsquo;urine sur 24 heures.</td>
<td>Pr&eacute;lever, pendant 3 jours cons&eacute;cutifs, des &eacute;chantillons de mati&egrave;res f&eacute;cales sur 24 heures. R&eacute;p&eacute;ter le programme de collecte tous les 14 jours.</td>
<td>Effectuer un comptage <em>in vivo</em> tous les 14 jours.</td>
<td>Mettre fin &agrave; l&rsquo;&eacute;chantillonnage ou au comptage in vivo lorsque les r&eacute;sultats sont inf&eacute;rieurs aux limites de d&eacute;tection ou atteignent les valeurs de base chroniques.</td>
</tr>
<tr>
<td>Plus de 100 jours.</td>
<td>Pr&eacute;lever, tous les 30 jours, un &eacute;chantillon d&rsquo;urine sur 24 heures.</td>
<td>Pr&eacute;lever, pendant 3 jours cons&eacute;cutifs, des &eacute;chantillons de mati&egrave;res f&eacute;cales sur 24 heures. R&eacute;p&eacute;ter le programme de collecte tous les 30 jours.</td>
<td>Effectuer un comptage <em>in vivo</em> tous les 30 jours.</td>
<td>Mettre fin &agrave; l&rsquo;&eacute;chantillonnage et/ou au comptage in vivo lorsque les r&eacute;sultats sont inf&eacute;rieurs aux limites de d&eacute;tection ou atteignent les valeurs de base chroniques.</td>
</tr>  </table>  <p>Remarques :</p>
<ul>
<li>Les fr&eacute;quences d&rsquo;essais biologiques recommand&eacute;es dans le tableau C.1 devraient normalement &ecirc;tre suivies jusqu&rsquo;&agrave; ce que le travailleur retourne au travail. Cependant, les utilisateurs pourraient modifier le protocole pour tenir compte de circonstances particuli&egrave;res. Par exemple, les trois p&eacute;riodes d&rsquo;&eacute;chantillonnage qui figurent dans ce tableau peuvent ne pas &ecirc;tre appropri&eacute;es dans le cas des radionucl&eacute;ides dont la p&eacute;riode radioactive est &lt; 3 jours. Il en va de m&ecirc;me pour les radionucl&eacute;ides &agrave; longue p&eacute;riode pr&eacute;sents sous forme chimique dans des compos&eacute;s dont la p&eacute;riode biologique est courte (&lt; 3 jours), et pour les incorporations sup&eacute;rieures &agrave; une limite de d&eacute;tection mais inf&eacute;rieures &agrave; un seuil d&rsquo;intervention.</li>
<li>Dans le tableau C.1, les pr&eacute;l&egrave;vements d&rsquo;&eacute;chantillons &laquo; sur 24 heures &raquo; sont des pr&eacute;l&egrave;vements &eacute;tal&eacute;s sur une p&eacute;riode de 24 heures cons&eacute;cutives.</li>
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
<div id="appD"></div>
<h2 id="appD">Annexe D : Recommandations propres aux radionucl&eacute;ides concernant les essais biologiques et la dosim&eacute;trie interne &ndash; Tritium</h2>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="D.1"></div>
<h3 id="appD-1">D.1	M&eacute;thodes d&rsquo;analyse du tritium dans l&rsquo;urine</h3>  <p>La m&eacute;thode la plus facile pour analyser le tritium dans un &eacute;chantillon d&rsquo;urine consiste &agrave; utiliser un compteur &agrave; scintillation liquide (CSL). Cette m&eacute;thode consiste &agrave; ajouter une partie aliquote de l&rsquo;&eacute;chantillon d&rsquo;urine dans un scintillateur liquide organique. Les photons &eacute;mis par le scintillateur, lorsqu&rsquo;ils absorbent l&rsquo;&eacute;nergie des particules b&ecirc;ta, sont d&eacute;tect&eacute;s par des tubes photomultiplicateurs fonctionnant en co&iuml;ncidence.</p>  <p>Comme le tritium est un &eacute;metteur b&ecirc;ta de faible &eacute;nergie, il pourrait &ecirc;tre n&eacute;cessaire de faire des corrections pour d&rsquo;autres &eacute;metteurs b&ecirc;ta pr&eacute;sents dans un &eacute;chantillon. Par cons&eacute;quent, il est important d&rsquo;avoir une bonne connaissance des radionucl&eacute;ides b&ecirc;ta-&eacute;metteurs qui pourraient &ecirc;tre pr&eacute;sents sur le lieu de travail. Afin de tenir compte de ces radionucl&eacute;ides produisant des interf&eacute;rences, on pourrait d&eacute;finir des plages de discrimination &eacute;nerg&eacute;tique sur le syst&egrave;me CSL. Par exemple, on pourrait s&eacute;lectionner des plages de 0 &agrave; 18,6 keV pour le <sup>3</sup>H, de 35 &agrave; 110 keV pour le <sup>14</sup>C, et de 180 &agrave; 2 000 keV pour les autres radionucl&eacute;ides b&ecirc;ta-&eacute;metteurs. Ces plages devraient &ecirc;tre s&eacute;lectionn&eacute;es afin d&rsquo;optimiser l&rsquo;efficacit&eacute; de la d&eacute;tection et du comptage pour les &eacute;chantillons d&rsquo;urine.</p>  <p>La d&eacute;termination des fen&ecirc;tres d&rsquo;&eacute;nergie du syst&egrave;me CSL devrait &ecirc;tre r&eacute;gl&eacute;e &agrave; l&rsquo;aide d&rsquo;un &eacute;talon activ&eacute; (pour le contr&ocirc;le de la qualit&eacute; afin de v&eacute;rifier la stabilit&eacute; de l&rsquo;instrument). Ce r&eacute;glage devrait &eacute;galement &ecirc;tre v&eacute;rifi&eacute; p&eacute;riodiquement. Comme la d&eacute;sactivation des substances chimiques et de la couleur des mati&egrave;res dans l&rsquo;&eacute;chantillon influe sur l&rsquo;efficacit&eacute; du comptage, et comme ces facteurs varient d&rsquo;un &eacute;chantillon &agrave; l&rsquo;autre, on devrait d&eacute;terminer l&rsquo;efficacit&eacute; pr&eacute;sum&eacute; d&rsquo;apr&egrave;s les caract&eacute;ristiques de chaque &eacute;chantillon. La plupart des CSL sont pourvus d&rsquo;un m&eacute;canisme automatique de correction de la d&eacute;sactivation. Si ce n&rsquo;est pas le cas, on devrait &eacute;tablir une courbe d&rsquo;&eacute;talonnage de la d&eacute;sactivation afin de d&eacute;terminer l&rsquo;efficacit&eacute;. L&rsquo;efficacit&eacute; pour chaque plage d&rsquo;&eacute;nergie devrait &ecirc;tre &eacute;talonn&eacute;e &agrave; l&rsquo;aide d&rsquo;&eacute;talons tra&ccedil;ables dans diverses conditions de d&eacute;sactivation.</p>  <p>En outre, on devrait v&eacute;rifier les distributeurs volum&eacute;triques p&eacute;riodiquement et apporter des corrections si la variation d&eacute;passe &plusmn; 10 %. Une v&eacute;rification p&eacute;riodique de l&rsquo;efficacit&eacute; du syst&egrave;me devrait &ecirc;tre effectu&eacute;e.</p>  <p>Les &eacute;chantillons devraient &ecirc;tre pr&eacute;par&eacute;s sous une hotte. Une partie aliquote du cocktail &eacute;chantillon-compos&eacute; CSL est vers&eacute;e dans un flacon de comptage par scintillation liquide et m&eacute;lang&eacute;e soigneusement. On devrait effectuer des contr&ocirc;les de tra&ccedil;abilit&eacute; pour garantir l&rsquo;identification fiable des &eacute;chantillons. L&rsquo;activit&eacute; mesur&eacute;e dans la r&eacute;gion de faible &eacute;nergie pourrait &ecirc;tre corrig&eacute;e afin de tenir compte des contributions aux faibles &eacute;nergies des particules b&ecirc;ta de plus grande &eacute;nergie, si des radionucl&eacute;ides &eacute;mettant de telles particules b&ecirc;ta hautement &eacute;nerg&eacute;tiques sont pr&eacute;sents.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="D.2"></div>
<h3 id="appD-2">D.2	Fr&eacute;quence de contr&ocirc;le</h3>  <p>Les doses re&ccedil;ues par les travailleurs dues &agrave; l&rsquo;incorporation d&rsquo;eau triti&eacute;e, ou de compos&eacute;s triti&eacute;s qui sont partiellement convertis en eau triti&eacute;e (HTO) dans le corps (p. ex., tritium &eacute;l&eacute;mentaire (HT) gazeux), devraient &ecirc;tre &eacute;valu&eacute;es par interpolation lin&eacute;aire entre des mesures successives obtenues par essais biologiques r&eacute;guliers. La m&eacute;thode d&rsquo;interpolation lin&eacute;aire peut introduire un certain biais dans les doses calcul&eacute;es. Ce biais ne devrait pas d&eacute;passer 50 %. La fr&eacute;quence des contr&ocirc;les r&eacute;guliers devrait &ecirc;tre d&eacute;termin&eacute;e pour chaque travailleur potentiellement expos&eacute; &agrave; du HTO (ou aux compos&eacute;s triti&eacute;s qui sont convertis partiellement en HTO dans le corps), de sorte que le biais ne d&eacute;passe pas 50 %. Les crit&egrave;res suivants permettent de s&rsquo;assurer que cette condition est respect&eacute;e :</p>
<ul>
<li>une mesure ponctuelle du HTO dans l&rsquo;urine qui d&eacute;passe 1 MBq/L : contr&ocirc;le hebdomadaire</li>
<li>une mesure ponctuelle du HTO dans l&rsquo;urine qui d&eacute;passe 0,2 MBq/L : contr&ocirc;le aux 14 jours<.  </ul>  <p>Les travailleurs qui sont soumis &agrave; des doses comprises entre 45 kBq/L et 0,2 MBq/L devraient soumettre des &eacute;chantillons d&rsquo;urine r&eacute;guliers au moins une fois par mois. Les personnes qui ne soumettent pas d&rsquo;&eacute;chantillons d&rsquo;urine r&eacute;guliers devraient soumettre un &eacute;chantillon d&rsquo;urine pour l&rsquo;analyse du tritium lorsque leur exposition au HTO pourrait d&eacute;passer 10 LDCA-heures. On devrait calculer la limite d&eacute;riv&eacute;e de concentration dans l&rsquo;air (LDCA) pour le HTO en r&eacute;duisant la LDCA pour l&rsquo;inhalation d&rsquo;eau triti&eacute;e seulement par un facteur de 1,5, afin de tenir compte de l&rsquo;absorption d&rsquo;eau triti&eacute;e par la peau intacte.</p>  <p>Dans le cadre des essais biologiques sp&eacute;ciaux, l&rsquo;&eacute;chantillonnage devrait tenir compte de la dilution du HTO dans le contenu de la vessie vu que la concentration de HTO dans l&rsquo;eau du corps atteint un maximum quelques heures apr&egrave;s une incorporation aigu&euml;.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="D.3"></div>
<h3 id="appD-3">D.3	D&eacute;termination de la dose</h3>  <p>Lorsqu&rsquo;un essai biologique courant est effectu&eacute; et qu&rsquo;aucune incorporation aigu&euml; importante n&rsquo;est soup&ccedil;onn&eacute;e (c.-&agrave;-d. lorsqu&rsquo;un contr&ocirc;le par essais biologiques sp&eacute;ciaux n&rsquo;est pas r&eacute;alis&eacute;), la DEE (en Sv), r&eacute;sultant de l&rsquo;incorporation de tritium au cours d&rsquo;une p&eacute;riode de d&eacute;claration (p. ex., un trimestre ou un an) devrait &ecirc;tre d&eacute;termin&eacute;e &agrave; l&rsquo;aide de la m&eacute;thode d&eacute;crite ci-dessous. On devrait utiliser cette m&eacute;thode pour l&rsquo;incorporation de HTO et de HT.</p>  <p>La dose accumul&eacute;e E<sub>k</sub>, re&ccedil;ue pendant la p&eacute;riode de d&eacute;claration k, devrait &ecirc;tre calcul&eacute;e &agrave; partir d&rsquo;une s&eacute;rie de N mesures de tritium dans l&rsquo;urine, pendant la p&eacute;riode k, selon la formule suivante :</p>
<table className=" table-border-none">  <tr>  	<td className="text-center text-center" width="20">(25)</td>  	<td width="70" className="text-center">  <math display=&#39;block&#39;>   <semantics>
<mrow>
<msub>
<mi>E</mi>
<mi>k</mi>
</msub>
<mo>=</mo><mn>5,8</mn><mo>&#x00D7;</mo><msup>
<mrow>
<mn>10</mn></mrow>
<mrow>
<mo>&#x2212;</mo><mn>11</mn></mrow>
</msup>
<mstyle displaystyle=&#39;true&#39;>
<munderover>
<mo>&#x2211;</mo>
<mrow>
<mi>i</mi><mo>=</mo><mn>0</mn></mrow>
<mrow>
<mi>i</mi><mo>=</mo><mi>N</mi><mo>&#x2212;</mo><mn>1</mn></mrow>
</munderover>
<mrow>
<mfrac>
<mrow>
<msub>
<mi>C</mi>
<mi>i</mi>
</msub>
<mo>+</mo><msub>
<mi>C</mi>
<mrow>
<mi>i</mi><mo>+</mo><mn>1</mn></mrow>
</msub>
</mrow>
<mn>2</mn>
</mfrac>
</mrow>
</mstyle><mrow><mo>(</mo>
<mrow>
<msub>
<mi>t</mi>
<mrow>
<mi>i</mi><mo>+</mo><mn>1</mn></mrow>
</msub>
<mo>&#x2212;</mo><msub>
<mi>t</mi>
<mi>i</mi>
</msub>
</mrow>
<mo>)</mo></mrow></mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaamyramaaBa
aaleaacaWGRbaabeaakiabg2da9iaaiwdacaGGUaGaaGioaiabgEna
0kaaigdacaaIWaWaaWbaaSqabeaacqGHsislcaaIXaGaaGymaaaakm
aaqahabaWaaSaaaeaacaWGdbWaaSbaaSqaaiaadMgaaeqaaOGaey4k
aSIaam4qamaaBaaaleaacaWGPbGaey4kaSIaaGymaaqabaaakeaaca
aIYaaaaaWcbaGaamyAaiabg2da9iaaicdaaeaacaWGPbGaeyypa0Ja
amOtaiabgkHiTiaaigdaa0GaeyyeIuoakmaabmaabaGaamiDamaaBa
aaleaacaWGPbGaey4kaSIaaGymaaqabaGccqGHsislcaWG0bWaaSba
aSqaaiaadMgaaeqaaaGccaGLOaGaayzkaaaaaa@5A1E@
</annotation>   </semantics>  </math>  	</td>  	</tr>  </table>
<p>Ici, C<sub>i</sub> est la concentration de l&rsquo;eau triti&eacute;e dans l&rsquo;urine, en unit&eacute;s de Bq/L, mesur&eacute;e apr&egrave;s t<sub>i</sub> jours. La concentration C<sub>0</sub> est le r&eacute;sultat de la derni&egrave;re mesure de concentration faite au cours de la p&eacute;riode de d&eacute;claration pr&eacute;c&eacute;dant la p&eacute;riode k.</p>  La DEE, c&rsquo;est-&agrave;-dire la dose efficace re&ccedil;ue du HTO dans l&rsquo;organisme pendant 50 ans apr&egrave;s l&rsquo;incorporation, depuis la fin de la p&eacute;riode de d&eacute;claration k, est donn&eacute;e par E<sub>k</sub>(50). On devrait la calculer comme suit :
<table className=" table-border-none">  <tr>  	<td className="text-left text-center" width="20">(26)</td>  	<td width="70" className="text-left">E<sub>k</sub>(50) = 8,5 &times; 10<sup>-10</sup>C<sub>N</sub></td>  </tr>  </table>
<p>La DEE pour une ann&eacute;e de dosim&eacute;trie est la somme de toutes les valeurs E<sub>k</sub> pour l&rsquo;ann&eacute;e, et de E<sub>k</sub>(50). Dans la figure D.1, ta est un temps de d&eacute;claration, et la dose d&eacute;clar&eacute;e au temps t<sub>a</sub> est la dose accumul&eacute;e au temps t<sub>1</sub>, ainsi que la dose entre t<sub>1</sub> et ta (calcul&eacute;e en supposant que le p&eacute;riode radioactive biologique du HTO est de 10 jours). On pourrait calculer comme suit la dose accumul&eacute;e entre t<sub>a</sub> et t<sub>b</sub> :</p>
<table className=" table-border-none">  <tr>  	<td className="text-center text-center" width="20">(27)</td>  	<td width="70" className="text-center">  <math display=&#39;block&#39;>   <semantics>
<mrow>
<msub>
<mi>E</mi>
<mi>b</mi>
</msub>
<mo>=</mo><mn>5,8</mn><mo>&#x00D7;</mo><msup>
<mrow>
<mn>10</mn></mrow>
<mrow>
<mo>&#x2212;</mo><mn>11</mn></mrow>
</msup>
<mrow><mo>[</mo> <mrow>
<mfrac>
<mrow>
<msub>
<mi>C</mi>
<mn>1</mn>
</msub>
<mo>+</mo><msub>
<mi>C</mi>
<mn>2</mn>
</msub>
</mrow>
<mn>2</mn>
</mfrac>
<mrow><mo>(</mo>
<mrow>
<msub>
<mi>t</mi>
<mn>2</mn>
</msub>
<mo>&#x2212;</mo><msub>
<mi>t</mi>
<mn>1</mn>
</msub>
</mrow>
<mo>)</mo></mrow><mo>+</mo><mfrac>
<mrow>
<msub>
<mi>C</mi>
<mn>2</mn>
</msub>
<mo>+</mo><msub>
<mi>C</mi>
<mn>3</mn>
</msub>
</mrow>
<mn>2</mn>
</mfrac>
<mrow><mo>(</mo>
<mrow>
<msub>
<mi>t</mi>
<mn>3</mn>
</msub>
<mo>&#x2212;</mo><msub>
<mi>t</mi>
<mn>2</mn>
</msub>
</mrow>
<mo>)</mo></mrow><mo>+</mo><mstyle displaystyle=&#39;true&#39;>
<mrow><munderover>
<mo>&#x222B;</mo>
<mn>0</mn>
<mrow>
<msub>
<mi>t</mi>
<mi>b</mi>
</msub>
<mo>&#x2212;</mo><msub>
<mi>t</mi>
<mn>3</mn>
</msub>
</mrow>
</munderover>
<mrow>
<msup>
<mi>e</mi>
<mrow>
<mo>&#x2212;</mo><mi>&#x03BB;</mi><mi>t</mi></mrow>
</msup>
<mi>d</mi><mi>t</mi><mo>&#x2212;</mo><msub>
<mi>C</mi>
<mn>1</mn>
</msub>
<mstyle displaystyle=&#39;true&#39;>
<mrow><munderover>
<mo>&#x222B;</mo>
<mn>0</mn>
<mrow>
<msub>
<mi>t</mi>
<mi>a</mi>
</msub>
<mo>&#x2212;</mo><msub>
<mi>t</mi>
<mn>1</mn>
</msub>
</mrow>
</munderover>
<mrow>
<msup>
<mi>e</mi>
<mrow>
<mo>&#x2212;</mo><mi>&#x03BB;</mi><mi>t</mi></mrow>
</msup>
<mi>d</mi><msub>
<mi>t</mi>
<mn>1</mn>
</msub>
</mrow>
</mrow>
</mstyle></mrow>
</mrow>
</mstyle></mrow> <mo>]</mo></mrow></mrow>  <annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=  feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn  hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr  4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9  vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x  fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaamyramaaBa  aaleaacaWGIbaabeaakiabg2da9iaaiwdacaGGUaGaaGioaiabgEna  0kaaigdacaaIWaWaaWbaaSqabeaacqGHsislcaaIXaGaaGymaaaakm  aadmaabaWaaSaaaeaacaWGdbWaaSbaaSqaaiaaigdaaeqaaOGaey4k  aSIaam4qamaaBaaaleaacaaIYaaabeaaaOqaaiaaikdaaaWaaeWaae  aacaWG0bWaaSbaaSqaaiaaikdaaeqaaOGaeyOeI0IaamiDamaaBaaa  leaacaaIXaaabeaaaOGaayjkaiaawMcaaiabgUcaRmaalaaabaGaam  4qamaaBaaaleaacaaIYaaabeaakiabgUcaRiaadoeadaWgaaWcbaGa  aG4maaqabaaakeaacaaIYaaaamaabmaabaGaamiDamaaBaaaleaaca  aIZaaabeaakiabgkHiTiaadshadaWgaaWcbaGaaGOmaaqabaaakiaa  wIcacaGLPaaacqGHRaWkdaWdXbqaaiaadwgadaahaaWcbeqaaiabgk  HiTiabeU7aSjaadshaaaGccaWGKbGaamiDaiabgkHiTiaadoeadaWg  aaWcbaGaaGymaaqabaGcdaWdXbqaaiaadwgadaahaaWcbeqaaiabgk  HiTiabeU7aSjaadshaaaGccaWGKbGaamiDamaaBaaaleaacaaIXaaa  beaaaeaacaaIWaaabaGaamiDamaaBaaameaacaWGHbaabeaaliabgk  HiTiaadshadaWgaaadbaGaaGymaaqabaaaniabgUIiYdaaleaacaaI  WaaabaGaamiDamaaBaaameaacaWGIbaabeaaliabgkHiTiaadshada  WgaaadbaGaaG4maaqabaaaniabgUIiYdaakiaawUfacaGLDbaaaaa@7CA7@  </annotation>  </semantics>  </math>  	</td>  	</tr>  </table>
<p><strong>Figure D.1 : Calcul des doses dues au tritium dans des &eacute;chantillons soumis &agrave; des essais biologiques courants</strong></p>  <div className="span-5">  <img src="/images/regdocs/regdoc-2-7-2-vol1/figure-d1-fra.png" alt="" />  </div>  <div className="clear"></div>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="D.4"></div>
<h3 id="appD-4">D.4	Contr&ocirc;le de la qualit&eacute; du comptage par scintillation liquide</h3>  <p>L&rsquo;efficacit&eacute; du compteur &agrave; scintillation liquide (CSL) utilis&eacute; pour la mesure du tritium dans l&rsquo;urine devrait &ecirc;tre v&eacute;rifi&eacute;e chaque jour o&ugrave; l&rsquo;on utilise cette m&eacute;thode. Des v&eacute;rifications devraient &eacute;galement &ecirc;tre r&eacute;alis&eacute;es apr&egrave;s l&rsquo;installation ou l&rsquo;entretien d&rsquo;un CSL, et apr&egrave;s tout &eacute;v&eacute;nement susceptible d&rsquo;influencer sur son exactitude. L&rsquo;information pr&eacute;sent&eacute;e dans le tableau D.1 devrait &ecirc;tre enregistr&eacute;e dans le cadre du programme de contr&ocirc;le de la qualit&eacute;. Ces donn&eacute;es devraient &eacute;galement &ecirc;tre consign&eacute;es graphiquement sur les graphiques de contr&ocirc;le.</p>
<p><strong>Tableau D.1 : Journal de contr&ocirc;le du CSL</strong></p>  <table className="width-100">
<tr>
<th colSpan="4">Identification de la source de contr&ocirc;le</th>
<th colSpan="4">R&eacute;glages de l&rsquo;instrument</th>
</tr>
<tr>
<th>Source</th>
<th>Num&eacute;ro</th>
<th>Activit&eacute; (dpm)</th>
<th>Date</th>
<th>Canal</th>
<th>Gain</th>
<th>Niveau faible</th>
<th>Niveau &eacute;lev&eacute;</th>
</tr>
<tr>
<td>Rayonnement de fond</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td className="text-center">1</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>Tritium</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td className="text-center">2</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>Carbone-14</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td className="text-center">3</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<th className="text-center" rowspan="2">Date</th>
<th colSpan="2">Temps de comptage (min)</th>
<th colSpan="3">Taux de comptage (cpm)</th>
<th className="text-center" rowspan="2">Commentaires</th>
<th className="text-center" rowspan="2">Initiales de l&rsquo;op&eacute;rateur</th>
</tr>
<tr>
<th>Source de fond</th>
<th>Sources de contr&ocirc;le</th>
<th>Source de fond</th>
<th>Source de contr&ocirc;le du <sup>3</sup>H</th>
<th>Source de contr&ocirc;le du <sup>14</sup>C</th>
</tr>
<tr>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>  </table>
<p>Les sources de contr&ocirc;le utilis&eacute;es pour v&eacute;rifier l&rsquo;efficacit&eacute; du compteur devraient &ecirc;tre scell&eacute;es &agrave; la flamme. Elles ne devraient pas &ecirc;tre utilis&eacute;es plus de cinq ans apr&egrave;s avoir &eacute;t&eacute; scell&eacute;es. On devrait effectuer un comptage avec la source de contr&ocirc;le suffisamment longtemps pour accumuler au moins 20 000 coups. La dur&eacute;e de comptage minimale devrait &ecirc;tre de 30 secondes, et on devrait utiliser le m&ecirc;me temps de comptage pour chaque mesure. En plus d&rsquo;utiliser une source de contr&ocirc;le scell&eacute;e &agrave; la flamme, il est recommand&eacute; d&rsquo;utiliser une source de fond scell&eacute;e &agrave; la flamme et de r&eacute;aliser un comptage deux fois par jour. Le temps de comptage pour les contr&ocirc;les de fond ne devrait pas changer.</p>  <p>On devrait calculer chaque mois l&rsquo;&eacute;cart-type des comptages obtenus avec la source de contr&ocirc;le et la source de fond. Les taux de comptage de la source de contr&ocirc;le et de la source de fond devraient &ecirc;tre repr&eacute;sent&eacute;s sur un graphique de contr&ocirc;le. Les limites de contr&ocirc;le &agrave; deux &eacute;carts-types devraient &ecirc;tre indiqu&eacute;es sur le graphique de contr&ocirc;le. Environ 95 % des taux de comptage quotidiens avec la source de contr&ocirc;le devraient &ecirc;tre en de&ccedil;&agrave; de deux &eacute;carts-types des limites de contr&ocirc;le. Si un taux de comptage quotidien avec la source de contr&ocirc;le ou la source de fond est &agrave; l&rsquo;ext&eacute;rieur des limites de contr&ocirc;le, la mesure devrait &ecirc;tre r&eacute;p&eacute;t&eacute;e. Si la deuxi&egrave;me mesure se trouve &eacute;galement &agrave; l&rsquo;ext&eacute;rieur des limites de contr&ocirc;le, on devrait v&eacute;rifier les r&eacute;glages de l&rsquo;appareil.</p>
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
<h2 id="appE">Annexe E : Recommandations propres aux radionucl&eacute;ides concernant les essais biologiques et la dosim&eacute;trie interne &ndash; Iode radioactif</h2>  <p>La pr&eacute;sente annexe fournit de l&rsquo;orientation aux titulaires de permis concernant l&rsquo;&eacute;laboration d&rsquo;un programme de d&eacute;pistage de l&rsquo;iode radioactif dans la thyro&iuml;de. Le d&eacute;pistage thyro&iuml;dien chez les travailleurs qui manipulent de l&rsquo;iode radioactif pourrait &ecirc;tre exig&eacute; comme condition de permis. L&rsquo;annexe comprend &eacute;galement des recommandations sur le choix des participants au programme de d&eacute;pistage, le choix des instruments, la m&eacute;thode de d&eacute;pistage, les p&eacute;riodes de contr&ocirc;le, l&rsquo;interpr&eacute;tation des r&eacute;sultats, les proc&eacute;dures de validation et la tenue des dossiers. L&rsquo;annexe traite de plusieurs formes d&rsquo;iode : <sup>123</sup>I, <sup>124</sup>I, <sup>125</sup>I et <sup>131</sup>I. Toutefois, cette approche pourrait &eacute;galement s&rsquo;appliquer &agrave; d&rsquo;autres isotopes d&rsquo;iode radioactif.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="E.1"></div>
<h3 id="appE-1">E.1	Contexte</h3>  <p>Le but d&rsquo;un programme de d&eacute;pistage thyro&iuml;dien est de contr&ocirc;ler l&rsquo;incorporation d&rsquo;iode radioactif. Les renseignements produits en temps opportun par le programme servent &agrave; &eacute;valuer toute incorporation d&rsquo;iode radioactif, &agrave; fournir l&rsquo;assurance que le programme de radioprotection fonctionne et &agrave; d&eacute;montrer le respect des limites de dose r&eacute;glementaires.</p>  <p>Dans un programme de d&eacute;pistage thyro&iuml;dien, les travailleurs font l&rsquo;objet d&rsquo;un contr&ocirc;le individuel de l&rsquo;incorporation d&rsquo;iode radioactif par un comptage thyro&iuml;dien <em>in vivo</em>. Les r&eacute;sultats sont ensuite compar&eacute;s &agrave; un niveau pr&eacute;d&eacute;termin&eacute;. Le d&eacute;passement de ce niveau pr&eacute;d&eacute;termin&eacute; requiert la confirmation de l&rsquo;incorporation et une enqu&ecirc;te. Les conditions de permis concernant le contr&ocirc;le thyro&iuml;dien d&eacute;pendent des caract&eacute;ristiques physiques de l&rsquo;iode radioactif manipul&eacute;. Les caract&eacute;ristiques physiques des quatre isotopes d&rsquo;iode radioactif vis&eacute;s par la pr&eacute;sente annexe sont pr&eacute;sent&eacute;es dans le tableau E.1 [13, 27, 28].</p>  <p><strong>Tableau E.1 : Caract&eacute;ristiques physiques de certains isotopes d&rsquo;iode radioactif</strong></p>
<table className="">
<tr>
<th>Caract&eacute;ristiques</th>
<th><sup>123</sup>I</th>
<th><sup>124</sup>I</th>
<th><sup>125</sup>I</th>
<th><sup>131</sup>I</th>
</tr>
<tr>
<td>P&eacute;riode radioactive physique (jours)</td>
<td className="text-center">0,55</td>
<td className="text-center">4 176</td>
<td className="text-center">59,40</td>
<td className="text-center">8,02</td>
</tr>
<tr>
<td>P&eacute;riode radioactive efficace dans la thyro&iuml;de (jours)</td>
<td className="text-center">0,55</td>
<td className="text-center">3,97</td>
<td className="text-center">34,09</td>
<td className="text-center">7,29</td>
</tr>
<tr>
<td>Temps pour atteindre la charge thyro&iuml;dienne maximale apr&egrave;s une exposition aigu&euml;<sup id="fnb12-ref"><a className="fn-lnk" href="#fnb12"><span className="wb-inv">Footnote </span>12</a></sup>  (jours)</td>
<td className="text-center">0,5</td>
<td className="text-center">1,1</td>
<td className="text-center">1,9</td>
<td className="text-center">1,3</td>
</tr>
<tr>
<td>&Eacute;nergie des principaux photons (keV))</td>
<td className="text-center">158,97</td>
<td className="text-center">602,7</td>
<td className="text-center">27,0</td>
<td className="text-center">364,5</td>
</tr>  </table>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="E.2"></div>
<h3 id="appE-2">E.2	Participation au programme de d&eacute;pistage</h3>  <h4>E.2.1 Travailleurs &ndash; Manipulation normale</h4>  <p>Les travailleurs (TSN et non-TSN) qui, en une journ&eacute;e, manipulent une quantit&eacute; totale d&rsquo;iode radioactif d&eacute;passant les quantit&eacute;s indiqu&eacute;es dans le tableau E.2 devraient faire l&rsquo;objet d&rsquo;un d&eacute;pistage pour le <sup>123</sup>I, le <sup>124</sup>I, le <sup>125</sup>I ou le <sup>131</sup>I, selon le cas. La section E.7 pr&eacute;sente des exemples de compos&eacute;s d&rsquo;iode radioactif volatils. Cette section illustre &eacute;galement les activit&eacute;s qui pourraient g&eacute;n&eacute;rer de tels compos&eacute;s.</p>
<p><strong>Tableau E.2 : Crit&egrave;re de participation au d&eacute;pistage thyro&iuml;dien : Activit&eacute; manipul&eacute;e sans confinement, par op&eacute;ration quotidienne</strong></p>  <table className="">
<tr>
<th colSpan="2" rowspan="2">&nbsp;</th>
<th colSpan="3">Confinement</th>
</tr>
<tr>
<th>Aucun</th>
<th>Hotte</th>
<th>Bo&icirc;te &agrave; gants</th>
</tr>
<tr>
<th className="text-center" rowspan="2">Quantit&eacute; de <sup>125</sup>I ou <sup>131</sup>I (MBq)</th>
<th>Gaz, liquides volatils et poudres</th>
<td className="text-center">2</td>
<td className="text-center">200</td>
<td className="text-center">20 000</td>
</tr>
<tr>
<th>Liquides non volatils et solides</th>
<td className="text-center">200</td>
<td className="text-center">20 000</td>
<td className="text-center">2 &times; 10<sup>6</sup></td>
</tr>
<tr>
<th className="text-center" rowspan="2">Quantit&eacute; de <sup>124</sup>I (MBq)</th>
<th>Gaz, liquides volatils et poudres</th>
<td className="text-center">3</td>
<td className="text-center">300</td>
<td className="text-center">30 000</td>
</tr>
<tr>
<th>Liquides non volatils et solides</th>
<td className="text-center">300</td>
<td className="text-center">30 000</td>
<td className="text-center">3 &times; 10<sup>6</sup></td>
</tr>
<tr>
<th className="text-center" rowspan="2">Quantit&eacute; de <sup>123</sup>I (MBq)</th>
<th>Gaz, liquides volatils et poudres</th>
<td className="text-center">200</td>
<td className="text-center">20 000</td>
<td className="text-center">2 &times; 10<sup>6</sup></td>
</tr>
<tr>
<th>Liquides non volatils et solides</th>
<td className="text-center">20 000</td>
<td className="text-center">2 &times; 10<sup>6</sup></td>
<td className="text-center">2 &times; 10<sup>8</sup></td>
</tr>  </table>  <p>Les autres personnes qui travaillent r&eacute;guli&egrave;rement &agrave; proximit&eacute; d&rsquo;un travailleur manipulant des quantit&eacute;s sup&eacute;rieures &agrave; celles indiqu&eacute;es dans le tableau E.2 sans confinement devraient &eacute;galement faire l&rsquo;objet d&rsquo;un d&eacute;pistage pour l&rsquo;iode radioactif en cause.</p>
<h4>E.2.2 D&eacute;pistage en r&eacute;ponse &agrave; des d&eacute;versements et &agrave; la contamination personnelle</h4>  <p>Les travailleurs et les autres personnes qui ont &eacute;t&eacute; &agrave; proximit&eacute; d&rsquo;un d&eacute;versement, comme il est d&eacute;crit dans les situations suivantes, devraient faire l&rsquo;objet d&rsquo;un d&eacute;pistage pour l&rsquo;iode radioactif en cause :</p>
<ul>
<li>d&eacute;versement de <sup>125</sup>I ou de <sup>131</sup>I sous forme volatile, o&ugrave; l&rsquo;activit&eacute; d&eacute;passe 2 MBq</li>
<li>d&eacute;versement de <sup>124</sup>I sous forme volatile, o&ugrave; l&rsquo;activit&eacute; d&eacute;passe 3 MBq</li>
<li>d&eacute;versement de <sup>123</sup>I sous forme volatile, o&ugrave; l&rsquo;activit&eacute; d&eacute;passe 200 MBq</li>
<li>contamination externe par un isotope d&rsquo;iode radioactif sous forme volatile</li>  </ul>  <p>Le REGDOC-2.7.1, <em>Radioprotection</em>, contient de l&rsquo;orientation sur l&rsquo;intervention requise en cas de contamination personnelle.</p>  <p>Les travailleurs qui travaillent &agrave; moins de deux m&egrave;tres d&rsquo;une personne dont les r&eacute;sultats de d&eacute;pistage sont &eacute;gaux ou sup&eacute;rieurs &agrave; 1 kBq, et qui travaillaient moins d&rsquo;une heure apr&egrave;s que l&rsquo;exposition pr&eacute;sum&eacute;e soit survenue, devraient &eacute;galement faire l&rsquo;objet d&rsquo;un d&eacute;pistage thyro&iuml;dien.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="E.3"></div>
<h3 id="appE-3">E.3	Choix des instruments</h3>  <p>Le d&eacute;tecteur &agrave; scintillation est actuellement le type d&rsquo;instrument le plus couramment utilis&eacute; pour mesurer l&rsquo;iode radioactif dans la thyro&iuml;de. Il consiste habituellement en une sonde (contenant un cristal d&rsquo;iodure de sodium [NaI]), fonctionnant de concert avec un compteur et un analyseur de spectre.</p>  <p>Les syst&egrave;mes peuvent &ecirc;tre assez simples et consister en une unit&eacute; portative qui effectue un comptage par unit&eacute; de temps, ou il peut d&rsquo;agir d&rsquo;un appareil sophistiqu&eacute; comme un syst&egrave;me de spectroscopie gamma qui g&eacute;n&egrave;re le spectre &eacute;nerg&eacute;tique de l&rsquo;isotope et quantifie ensuite l&rsquo;activit&eacute; totale.</p>  <p>Lorsqu&rsquo;on choisit un instrument, il est recommand&eacute; de lire avec soin les sp&eacute;cifications de l&rsquo;instrument ou de consulter le fabricant afin de s&rsquo;assurer que la sonde et le d&eacute;tecteur sont en mesure de d&eacute;tecter l&rsquo;iode radioactif en cause. Pour de plus amples renseignements sur le choix d&rsquo;un d&eacute;tecteur pour le <sup>125</sup>I ou le <sup>131</sup>I, veuillez lire l&rsquo;article &laquo; <span lang="en"><em>Thyroid Monitoring Part VI : Choosing a Detector for Either I-125 and/or I-131</em></span> &raquo; dans The <em>Canadian Journal of Medical Radiation Technology</em> [30].</p>  <p>Le d&eacute;tecteur de NaI existe en tailles et configurations diverses, selon l&rsquo;utilisation et la sensibilit&eacute; envisag&eacute;es. Lorsqu&rsquo;ils choisissent un d&eacute;tecteur NaI, les titulaires de permis devraient tenir compte des points suivants :</p>  <ul>
<li>l&rsquo;&eacute;nergie gamma de l&rsquo;isotope d&rsquo;iode radioactif qui sera mesur&eacute;</li>
<li>l&rsquo;&eacute;paisseur du cristal de NaI</li>
<li>le diam&egrave;tre du cristal de NaI</li>
<li>le mat&eacute;riau constituant la fen&ecirc;tre et la configuration de la sonde</li>
</ul>
<h4>E.3.1 &Eacute;paisseur du cristal</h4>  <p>L&rsquo;&eacute;paisseur du cristal de NaI varie selon l&rsquo;isotope d&rsquo;iode radioactif mesur&eacute;.</p>  <p>La d&eacute;tection et la mesure du <sup>125</sup>I requi&egrave;rent un cristal mince pour pouvoir d&eacute;tecter les photons faiblement &eacute;nerg&eacute;tiques &eacute;mis par le <sup>125</sup>I. Habituellement, les cristaux de NaI ont une &eacute;paisseur d&rsquo;environ 1 mm pour mesurer les photons faiblement &eacute;nerg&eacute;tiques d&rsquo;&eacute;metteurs comme le <sup>125</sup>I.</p>  <p>&Agrave; l&rsquo;inverse, on doit utiliser un cristal plus &eacute;pais pour d&eacute;tecter efficacement les photons hautement &eacute;nerg&eacute;tiques produits par le <sup>131</sup>I. Un cristal d&rsquo;environ 25 mm d&rsquo;&eacute;paisseur est recommand&eacute; pour le <sup>131</sup>I.</p>  <p>En raison de la similarit&eacute; dans les &eacute;nergies du rayonnement gamma &eacute;mis, le d&eacute;tecteur utilis&eacute; pour les mesures du <sup>125</sup>I (cristal mince de NaI) pourrait &ecirc;tre utilis&eacute; pour d&eacute;tecter et mesurer le <sup>123</sup>I. De m&ecirc;me, le d&eacute;tecteur utilis&eacute; pour les mesures du <sup>131</sup>I (cristal &eacute;pais de NaI) pourrait &ecirc;tre utilis&eacute; pour d&eacute;tecter et mesurer le <sup>123</sup>I et le <sup>124</sup>I.</p>
<h4>E.3.2 Diam&egrave;tre du cristal</h4>  <p>Un autre facteur dont on doit tenir compte est le diam&egrave;tre du cristal. Un grand diam&egrave;tre contribue &agrave; une plus grande efficacit&eacute; globale du comptage. Il permet &eacute;galement de r&eacute;duire l&rsquo;erreur qui pourrait r&eacute;sulter de divers facteurs, comme la distance entre le cou et le d&eacute;tecteur, le mauvais alignement du d&eacute;tecteur avec la thyro&iuml;de et la taille de la thyro&iuml;de. Cependant, un d&eacute;tecteur de grand diam&egrave;tre accro&icirc;t la lecture de fond.</p>
<h4>E.3.3 Mat&eacute;riau de la fen&ecirc;tre de la sonde</h4>  <p>Le mat&eacute;riau de la fen&ecirc;tre de la sonde est &eacute;galement un facteur &agrave; consid&eacute;rer. Pour les photons faiblement &eacute;nerg&eacute;tiques &eacute;mis par le <sup>125</sup>I, on doit utiliser un mat&eacute;riau comme du Mylar ou du b&eacute;ryllium qui est suffisamment mince pour permettre aux photons &eacute;mis par le <sup>125</sup>I de p&eacute;n&eacute;trer dans le cristal.</p>  <p>Si l&rsquo;on utilise une sonde pour d&eacute;tecter &agrave; la fois le <sup>125</sup>I et le <sup>131</sup>I, le cristal devrait &ecirc;tre suffisamment &eacute;pais pour d&eacute;tecter le <sup>131</sup>I et le mat&eacute;riau de la fen&ecirc;tre suffisamment mince pour d&eacute;tecter le <sup>125</sup>I.</p>  <p>Le tableau E.3 r&eacute;sume les sp&eacute;cifications recommand&eacute;es pour les d&eacute;tecteurs utilis&eacute;s pour mesurer le <sup>125</sup>I et le <sup>131</sup>I.</p>
<p><strong>Tableau E.3 : R&eacute;sum&eacute; des sp&eacute;cifications des d&eacute;tecteurs</strong></p>  <table className="">
<tr>
<th>Sp&eacute;cification</th>
<th><sup>125</sup>I</th>
<th><sup>125</sup>I, <sup>124</sup>I, <sup>131</sup>I</th>
</tr>
<tr>
<td>&Eacute;paisseur minimale du cristal (mm)</td>
<td>1</td>
<td>25</td>
</tr>
<tr>
<td>Diam&egrave;tre minimal du cristal (mm)</td>
<td>25</td>
<td>25</td>
</tr>
<tr>
<td>Mat&eacute;riau type de la fen&ecirc;tre de la sonde</td>
<td>Mylar ou b&eacute;ryllium</td>
<td>Aluminium ou acier inoxydable</td>
</tr>
<tr>
<td>Plage d&rsquo;&eacute;nergies type du d&eacute;tecteur (keV)</td>
<td>20&ndash;200</td>
<td>&ge; 40</td>
</tr>  </table>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="E.4"></div>
<h3 id="appE-4">E.4	M&eacute;thode de d&eacute;pistage</h3>  <h4>E.4.1 Configuration</h4>  <p>Pour installer un syst&egrave;me de comptage :</p>
<ul>
<li>Installez le syst&egrave;me de comptage dans un endroit o&ugrave; le rayonnement de fond est faible ou &agrave; tout le moins non variable.</li>
</ul>  <p>Assurez-vous que l&rsquo;&eacute;quipement est install&eacute; conform&eacute;ment aux sp&eacute;cifications du fabricant.</p>
<ul>
<li>D&eacute;terminez le taux de comptage de fond en utilisant un fant&ocirc;me cervical (contenant id&eacute;alement du potassium).</li>  	<li>&Eacute;talonnez le syst&egrave;me en suivant la proc&eacute;dure de la section E.8.</li>
<li>Calculez et enregistrez le taux de comptage &eacute;quivalant &agrave; 1 kBq et 10 kBq dans le registre de d&eacute;pistage (un exemple de registre de d&eacute;pistage est pr&eacute;sent&eacute; &agrave; la section E.9).</li>
<li>V&eacute;rifiez l&rsquo;installation chaque fois que le syst&egrave;me ou l&rsquo;emplacement du syst&egrave;me est chang&eacute; afin de confirmer qu&rsquo;il fonctionne correctement ou d&rsquo;apporter les modifications requises.</li>
</ul>
<h4>E.4.2 V&eacute;rifications aux fins de contr&ocirc;le de la qualit&eacute;</h4>  <p>Afin de v&eacute;rifier le rayonnement de fond et la reproductibilit&eacute; du taux de comptage du syst&egrave;me, on devrait suivre les &eacute;tapes suivantes chaque fois qu&rsquo;un d&eacute;pistage thyro&iuml;dien est r&eacute;alis&eacute; :</p>
<ul>
<li>mesurer et enregistrer le taux de comptage de fond, en accumulant au moins 400 coup</li>
<li>mesurer et enregistrer le taux de comptage net d&rsquo;une source de contr&ocirc;le</li>
<li>enregistrer les taux de comptage de fond et de la source de contr&ocirc;le, de sorte que les &eacute;carts par rapport &agrave; la norme soient facilement observables (voir la section E.10 qui d&eacute;crit une m&eacute;thode d&rsquo;enregistrement des taux de comptage &agrave; l&rsquo;aide de graphiques de contr&ocirc;le)</li>
</ul>  <p>Une pratique exemplaire consiste &agrave; v&eacute;rifier annuellement les contr&ocirc;les en participant &agrave; un programme d&rsquo;inter-comparaison des d&eacute;pistages thyro&iuml;diens, comme celui offert par Sant&eacute; Canada et d&eacute;crit dans le rapport technique du Laboratoire de surveillance humaine, intitul&eacute; <span lang="en"></span><em>The Thyroid Intercomparison Program</em>>/span> [31].</p>
<h4>E.4.3 R&eacute;alisation du d&eacute;pistage</h4>  <p>Pour r&eacute;aliser un d&eacute;pistage :</p>
<ol>
<li>mesurez le taux de comptage de fond de la personne
<ol className="list-lower-alpha">
<li>pour ce faire, on pourrait faire un comptage de la personne au niveau des jambes. Bien qu&rsquo;une telle mesure simule l&rsquo;iode qui pourrait se trouver dans le syst&egrave;me circulatoire, on devrait noter que certains &eacute;quipements de d&eacute;tection ne permettent pas les mesures au niveau des jambes, et qu&rsquo;en outre les mesures au niveau des jambes pourraient &ecirc;tre entrav&eacute;es par la contamination des v&ecirc;tements ou de la peau.</li>
<li>s&rsquo;il n&rsquo;est pas possible d&rsquo;effectuer une mesure du rayonnement de fond au niveau des jambes, une autre m&eacute;thode pour mesurer la radioactivit&eacute; de fond consiste &agrave; utiliser un fant&ocirc;me cervical (contenant id&eacute;alement du potassium). Si la mesure de fond est plus &eacute;lev&eacute;e que la normale, v&eacute;rifiez s&rsquo;il y a une contamination possible et r&eacute;p&eacute;tez la mesure s&rsquo;il y a lieu.</li>
</ol></li>
<li>enregistrez la lecture dans le registre de d&eacute;pistage</li>
<li>mesurez le taux de comptage thyro&iuml;dien de la personne</li>
<li>enregistrez la lecture dans le registre de d&eacute;pistage</li>
<li>Comparez le r&eacute;sultat aux r&eacute;sultats de l&rsquo;enqu&ecirc;te et aux niveaux d&eacute;clar&eacute;s figurant dans le registre de d&eacute;pistage.</li>
<li>En fonction des r&eacute;sultats obtenus, prenez les mesures appropri&eacute;es, selon les options pr&eacute;sent&eacute;es &agrave; la section E.6 et remplissez le registre de d&eacute;pistage.</li>
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
<div id="E.5"></div>
<h3 id="appE-5">E.5	P&eacute;riode de contr&ocirc;le</h3>  <p>Le d&eacute;pistage thyro&iuml;dien pour le <sup>124</sup>I, le <sup>125</sup>I et le <sup>131</sup>I chez les travailleurs et les autres personnes qui satisfont aux lignes directrices pour la participation &agrave; un programme de d&eacute;pistage (voir la section E.2) devrait &ecirc;tre effectu&eacute; entre un et cinq jours apr&egrave;s la derni&egrave;re utilisation qui a entra&icirc;n&eacute; un d&eacute;passement des valeurs indiqu&eacute;es au tableau E.2 ci-dessus.</p>  <p>Le d&eacute;pistage du <sup>123</sup>I chez les travailleurs et les autres personnes qui satisfont aux lignes directrices concernant le programme de participation au d&eacute;pistage (voir la section E.2) devrait &ecirc;tre effectu&eacute; entre 8 et 48 heures apr&egrave;s la derni&egrave;re utilisation qui a entra&icirc;n&eacute; un d&eacute;passement de l&rsquo;une des valeurs ci-dessus dans le tableau E.2. Toute demande de d&eacute;rogation &agrave; ce qui pr&eacute;c&egrave;de devrait &ecirc;tre soumise &agrave; la CCSN pour examen et approbation.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="E.6"></div>
<h3 id="appE-6">E.6	Validation des r&eacute;sultats du d&eacute;pistage</h3>  <h4>E.6.1 Niveau g&eacute;n&eacute;ral &ndash; R&eacute;sultats de mesure &ge; 1 kBq</h4>  <p>Pour tous les r&eacute;sultats de mesure de d&eacute;pistage &eacute;gaux ou sup&eacute;rieurs &agrave; 1 kBq, le titulaire de permis devrait proc&eacute;der de la fa&ccedil;on suivante :</p>
<ol>
<li>V&eacute;rifier que la m&eacute;thode de mesure pour le d&eacute;pistage d&eacute;crite &agrave; la section E.4.3 a &eacute;t&eacute; suivie.</li>  	<li>Si n&eacute;cessaire, apporter les corrections n&eacute;cessaires et r&eacute;p&eacute;ter la mesure.</li>
<li>Si le r&eacute;sultat de la mesure est toujours &eacute;gal ou sup&eacute;rieur &agrave; 1 kBq, v&eacute;rifier la contamination des v&ecirc;tements ou de la peau.</li>
<li>Si les v&ecirc;tements ou la peau sont contamin&eacute;s, enlever les v&ecirc;tements ou d&eacute;contaminer la peau et r&eacute;p&eacute;ter la mesure.</li>
<li>Si le r&eacute;sultat de la mesure est toujours &eacute;gal ou sup&eacute;rieur &agrave; 1 kBq, v&eacute;rifier et enregistrer la DEE et suivre les &eacute;tapes des sections E.6.2 ou E.6.3, le cas &eacute;ch&eacute;ant.</li>
<li>Effectuer un d&eacute;pistage pour toutes les personnes qui ont travaill&eacute; &agrave; proximit&eacute; de la personne dont les r&eacute;sultats sont &eacute;gaux ou sup&eacute;rieurs &agrave; 1 kBq.</li>
<li>Screen all persons who worked in proximity to the person whose results are equal to or greater than 1 kBq.</li>
</ol>
<h4>E.6.2 Niveau d&rsquo;enqu&ecirc;te &ndash; R&eacute;sultats de mesure &ge; 1 kBq et &lt; 10 kBq</h4>  <p>Pour tous les r&eacute;sultats de mesure du d&eacute;pistage &eacute;gaux ou sup&eacute;rieurs &agrave; 1 kBq et inf&eacute;rieurs &agrave; 10 kBq, le titulaire de permis devrait :</p>
<ol>
<li>Valider les r&eacute;sultats selon la section E.6.1.</li>
<li>Effectuer une enqu&ecirc;te interne pour d&eacute;terminer et corriger la cause des r&eacute;sultats du d&eacute;pistage.</li>  	<li>Enregistrer les constatations.</li>  	<li>Corriger toute lacune constat&eacute;e lors de l&rsquo;enqu&ecirc;te.</li>  	<li>Enregistrer l&rsquo;&eacute;v&eacute;nement dans le rapport annuel de conformit&eacute;.</li>  </ol>
<h4>E.6.3 Niveau de d&eacute;claration &ndash; R&eacute;sultats de mesure &ge; 10 kBq</h4>  <p>Pour le <sup>124</sup>I, le <sup>125</sup>I et le <sup>131</sup>I, un r&eacute;sultat de d&eacute;pistage thyro&iuml;dien de 10 kBq est environ &eacute;gal &agrave; une DEE de 1 mSv. En vertu de l&rsquo;article 16 du RRP, le titulaire de permis doit aviser la CCSN lorsqu&rsquo;il apprend qu&rsquo;une personne pourrait avoir d&eacute;pass&eacute; une limite de dose applicable (p. ex., 1 mSv/an pour un non TSN). Pour les TSN, on devrait d&eacute;terminer la dose efficace de chaque composante de la dose qui contribue plus de 1 mSv/ann&eacute;e.</p>  <p>Pour tous les r&eacute;sultats de mesure du d&eacute;pistage &eacute;gaux ou sup&eacute;rieurs &agrave; 10 kBq, le titulaire de permis devrait :</p>  <ol>  	<li>Valider les r&eacute;sultats selon la section E.6.1.</li>
<li>Informer imm&eacute;diatement la CCSN si la mesure a &eacute;t&eacute; prise sur une personne autre qu&rsquo;un TSN.</li>
<li>Faire effectuer un essai biologique pour d&eacute;tecter l&rsquo;iode radioactif par un organisme qui a r&eacute;ussi le test d&rsquo;inter-comparaison pertinent de Sant&eacute; Canada au cours des 12 derniers mois ou, si un tel organisme n&rsquo;est pas disponible, demander l&rsquo;approbation de la CCSN pour permettre que l&rsquo;essai biologique soit r&eacute;alis&eacute; par une autre entit&eacute; afin de d&eacute;tecter l&rsquo;iode radioactif.</li>  	<li>Utiliser les r&eacute;sultats de l&rsquo;essai biologique pour d&eacute;terminer la DEE.</li>
<li>Effectuer une enqu&ecirc;te interne visant &agrave; d&eacute;terminer et &agrave; corriger la cause des r&eacute;sultats du d&eacute;pistage, y compris le contr&ocirc;le de la zone et de la contamination au site d&rsquo;incorporation de l&rsquo;iode radioactif, s&rsquo;il y a lieu.</li>  	<li>Enregistrer l&rsquo;&eacute;v&eacute;nement dans le rapport annuel de conformit&eacute;.</li>  </ol>
<h4>E.6.4 Registre de d&eacute;pistage</h4>  <p>Le titulaire de permis devrait tenir un registre de d&eacute;pistage thyro&iuml;dien. Un exemple est pr&eacute;sent&eacute; &agrave; la section E.9.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="E.7"></div>
<h3 id="appE-7">E.7	Compos&eacute;s d&rsquo;iode radioactif</h3>  <p>Les compos&eacute;s d&rsquo;iode radioactif comprennent les compos&eacute;s tels que l&rsquo;iodure de sodium (NaI) et l&rsquo;iode radioactif dans une forme dissoci&eacute;e. La volatilit&eacute; des compos&eacute;s d&rsquo;iode radioactif pourrait augmenter en raison de l&rsquo;acidification ou du gel.</p>  <p>Les activit&eacute;s susceptibles d&rsquo;entra&icirc;ner la lib&eacute;ration d&rsquo;iode radioactif comprennent l&rsquo;ouverture de contenants de r&eacute;actif, l&rsquo;ouverture d&rsquo;emballages contenant des capsules utilis&eacute;es &agrave; des fins th&eacute;rapeutiques ou diagnostiques, et le travail avec de tels emballages ouverts. Par cons&eacute;quent, les capsules donn&eacute;es aux patients pour des tests diagnostiques ou &agrave; des fins th&eacute;rapeutiques sont consid&eacute;r&eacute;es comme pouvant contenir de l&rsquo;iode radioactif sous forme d&rsquo;iode radioactif volatil.</p>  <p>L&rsquo;ajout d&rsquo;antioxydants, par exemple, le thiosulfate de sodium, aux solutions de NaI marqu&eacute;es ou non, r&eacute;duit &agrave; la fois la d&eacute;composition et la volatilit&eacute;. De plus, le maintien des solutions d&rsquo;iode radioactif &agrave; des concentrations dilu&eacute;es minimise la d&eacute;composition radiolytique. Il y a lieu de noter que les trousses d&rsquo;essais radio-immunologiques contiennent de petites quantit&eacute;s de <sup>125</sup>I sous une forme non volatile.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="E.8"></div>
<h3 id="appE-8">E.8	&Eacute;talonnage des instruments</h3>  <h4>E.8.1 G&eacute;n&eacute;ralit&eacute;s</h4>  <p>Tous les appareils et instruments utilis&eacute;s pour le d&eacute;pistage thyro&iuml;dien devraient &ecirc;tre maintenus en bon &eacute;tat de fonctionnement et &eacute;talonn&eacute;s avant utilisation. L&rsquo;&eacute;talonnage devrait &ecirc;tre effectu&eacute; pour l&rsquo;isotope d&rsquo;int&eacute;r&ecirc;t dans des conditions imitant la thyro&iuml;de dans le cou. Un exemple de proc&eacute;dure d&rsquo;&eacute;talonnage figure dans le document &laquo; Thyroid Monitoring Calibration Part III : A Basic Calibration Procedure for Thyroid Monitoring &raquo; [32]. Une fois mis en place (voir la section E.4.1), l&rsquo;&eacute;quipement de mesure devrait &ecirc;tre &eacute;talonn&eacute; si un contr&ocirc;le de qualit&eacute; de la mesure donne des r&eacute;sultats &agrave; l&rsquo;ext&eacute;rieur des limites de contr&ocirc;le, comme il est d&eacute;crit &agrave; la section E.10. De plus, l&rsquo;&eacute;quipement de mesure devrait &ecirc;tre &eacute;talonn&eacute; de nouveau avant d&rsquo;&ecirc;tre remis en service s&rsquo;il a subi des changements importants pouvant avoir un impact n&eacute;gatif sur la pr&eacute;cision, l&rsquo;exactitude ou la fiabilit&eacute; des mesures, par exemple si l&rsquo;&eacute;quipement a &eacute;t&eacute; r&eacute;par&eacute; ou remplac&eacute;.</p>
<h4>E.8.2 Efficacit&eacute; du d&eacute;tecteur</h4>  <p>Pour d&eacute;terminer l&rsquo;efficacit&eacute; du d&eacute;tecteur, mesurer l&rsquo;activit&eacute; d&rsquo;une source de contr&ocirc;le tra&ccedil;able du radio isotope d&rsquo;int&eacute;r&ecirc;t et utiliser la formule suivante :</p>
<table className=" table-border-none">  <tr>  	<td className="text-left text-center" width="20">(28)</td>  	<td width="70" className="text-left">E = (C &ndash; B)/A</td>  </tr>  </table>
<p>o&ugrave; :</p>   <p>E&nbsp;&nbsp;efficacit&eacute; en coups par seconde (cps) par becquerel (Bq)</p>  <p>C&nbsp;&nbsp;nombre mesur&eacute; de coups par unit&eacute; de temps, avec la source de contr&ocirc;le (en cps)</p>   <p>B&nbsp;&nbsp;itaux de comptage de la radioactivit&eacute; de fond, en cps</p>   <p>A&nbsp;&nbsp;activit&eacute; connue de la source de contr&ocirc;le, tra&ccedil;able &agrave; un laboratoire national de normalisation avec une exactitude de 5 % pr&egrave;s (ou un &eacute;cart type &ndash; 1 &sigma;), en Bq</p>  <p>Le titulaire de permis devrait s&rsquo;assurer que si une source de contr&ocirc;le &agrave; courte p&eacute;riode est utilis&eacute;e (p. ex., <sup>131</sup>I), l&rsquo;activit&eacute; de la source est corrig&eacute;e pour tenir compte de la d&eacute;sint&eacute;gration au jour o&ugrave; l&rsquo;&eacute;talonnage est effectu&eacute;. Les sources de contr&ocirc;le de remplacement appropri&eacute;es, &agrave; plus longue p&eacute;riode, sont les suivantes : <sup>139</sup>Ce (pour <sup>123</sup>I), <sup>137</sup>Cs (pour <sup>124</sup>I), <sup>129</sup>I (pour <sup>125</sup>I) et <sup>133</sup>B (pour <sup>131</sup>I).</p>  <p>L&rsquo;instrument et les param&egrave;tres de mesure utilis&eacute;s pour d&eacute;terminer l&rsquo;efficacit&eacute; du comptage devraient &ecirc;tre les m&ecirc;mes que ceux qui ont &eacute;t&eacute; utilis&eacute;s pour le d&eacute;pistage courant. On placera le d&eacute;tecteur le plus pr&egrave;s possible de la thyro&iuml;de pour obtenir une efficacit&eacute; maximale. Cependant, en raison des variations concernant la thyro&iuml;de (profondeur, taille, forme et positionnement), l&rsquo;estimation de l&rsquo;activit&eacute; peut &ecirc;tre entach&eacute;e de grandes incertitudes. On peut r&eacute;duire cette erreur en augmentant la distance entre le cou et le d&eacute;tecteur. Pour chaque syst&egrave;me, il y a un compromis optimal entre efficacit&eacute; &eacute;lev&eacute;e et r&eacute;duction des erreurs, mais en g&eacute;n&eacute;ral une bonne distance entre le cou et le d&eacute;tecteur est de 12 cm.</p>  <p>Le titulaire de permis devrait s&rsquo;assurer que le temps de comptage est suffisamment long pour la source -&eacute;talon et pour le comptage de la radioactivit&eacute; de fond, de sorte que l&rsquo;erreur globale (1 &sigma;) pour le comptage soit inf&eacute;rieure &agrave; 5 %. Cela repr&eacute;sente environ 400 coups bruts pour la mesure du rayonnement de fond.</p>
<h4>E.8.3 Activit&eacute; minimale d&eacute;tectable</h4>  <p>Le titulaire de permis devrait r&eacute;aliser des mesures pour atteindre une activit&eacute; minimale d&eacute;tectable (AMD) inf&eacute;rieure &agrave; 1 kBq. L&rsquo;AMD est d&eacute;crite &agrave; la section 9.1.6. Lorsque l&rsquo;&eacute;chantillon et le temps de comptage du rayonnement de fond sont &eacute;gaux, la formule de l&rsquo;AMD indiqu&eacute;e &agrave; la section 9.1.6 se r&eacute;duit &agrave; la formule suivante :</p>
<table className=" table-border-none">  <tr>  	<td className="text-center text-center" width="20">(29)</td>  	<td width="70" className="text-center">  <math display=&#39;block&#39;>   <semantics>
<mrow>
<mi>A</mi><mi>M</mi><mi>D</mi><mo>=</mo><mfrac>
<mrow>
<mn>4,65</mn><msqrt>
<mi>F</mi>
</msqrt>
<mo>+</mo><mn>3</mn></mrow>
<mrow>
<mi>E</mi><mi>T</mi></mrow>
</mfrac>
</mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaamytaiaads
eacaWGbbGaeyypa0ZaaSaaaeaacaaI0aGaaiOlaiaaiAdacaaI1aWa
aOaaaeaacaWGcbaaleqaaOGaey4kaSIaaG4maaqaaiaadweacaWGub
aaaaaa@408A@
</annotation>   </semantics>  </math>  	</td>  	</tr>  </table>
<p>o&ugrave; :</p>  <p>F&nbsp;&nbsp;est le comptage total de fond recueilli pendant le temps &laquo; T &raquo;i</p>   <p>E&nbsp;&nbsp;est l&rsquo;efficacit&eacute; en cps/Bq</p>  <p>T&nbsp;&nbsp;est le temps en secondes</p>
<h4>E.8.4 Calcul de l&rsquo;AMD de l&rsquo;&eacute;chantillon</h4>  <p>Si l&rsquo;AMD d&rsquo;un syst&egrave;me n&rsquo;est pas suffisamment faible &ndash; soit en raison d&rsquo;une faible efficacit&eacute; ou d&rsquo;un rayonnement de fond &eacute;lev&eacute; &ndash;, il est possible de l&rsquo;am&eacute;liorer. Pour ce faire, on accro&icirc;t le temps de comptage pour la mesure, on diminue le rayonnement de fond, ou les deux.</p>  <p>&Agrave; titre d&rsquo;exemple, prenons le <sup>125</sup>I. En supposant que l&rsquo;efficacit&eacute; est de 0,0060 cps/Bq et que le comptage de fond brut est de 400 coups, un temps de comptage de 300 secondes donnerait l&rsquo;AMD suivante, en utilisant l&rsquo;&eacute;quation de la section E.8.3 :
<table className=" table-border-none">  <tr>  	<td className="text-center text-center" width="20">(30)</td>  	<td width="70" className="text-center">  <math display=&#39;block&#39;>   <semantics>
<mrow>
<mi>A</mi><mi>M</mi><mi>D</mi><mo>=</mo><mfrac>
<mrow>
<mn>4,65</mn><msqrt>
<mi>F</mi>
</msqrt>
<mo>+</mo><mn>3</mn></mrow>
<mrow>
<mi>E</mi><mi>T</mi></mrow>
</mfrac>
</mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaamytaiaads
eacaWGbbGaeyypa0ZaaSaaaeaacaaI0aGaaiOlaiaaiAdacaaI1aWa
aOaaaeaacaWGcbaaleqaaOGaey4kaSIaaG4maaqaaiaadweacaWGub
aaaaaa@408A@
</annotation>   </semantics>  </math>  	</td>  	</tr>  </table>  <br />
<table className=" table-border-none">  <tr>  	<td className="text-center text-center" width="20">&nbsp;</td>  	<td width="70" className="text-center">  <math display=&#39;block&#39;>   <semantics>
<mrow>
<mi>A</mi><mi>M</mi><mi>D</mi><mo>=</mo><mfrac>
<mrow>
<mn>4,65</mn><msqrt>
<mrow>
<mn>400</mn></mrow>
</msqrt>
<mo>+</mo><mn>3</mn></mrow>
<mrow>
<mo stretchy=&#39;false&#39;>(</mo><mn>0,0060</mn><mo stretchy=&#39;false&#39;>)</mo><mo stretchy=&#39;false&#39;>(</mo><mn>300</mn><mo stretchy=&#39;false&#39;>)</mo></mrow>
</mfrac>
</mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaamytaiaads
eacaWGbbGaeyypa0ZaaSaaaeaacaaI0aGaaiOlaiaaiAdacaaI1aWa
aOaaaeaacaaI0aGaaGimaiaaicdaaSqabaGccqGHRaWkcaaIZaaaba
GaaiikaiaaicdacaGGUaGaaGimaiaaicdacaaI2aGaaGimaiaacMca
caGGOaGaaG4maiaaicdacaaIWaGaaiykaaaaaaa@498F@
</annotation>   </semantics>  </math>  	</td>  	</tr>  </table>  <br />
<p><em>AMD</em> = 53 Bq</p>  <p>La valeur r&eacute;sultante, 53 Bq, est acceptable pour le <sup>125</sup>I.</p>  <p>Le temps de comptage utilis&eacute; pour contr&ocirc;ler le personnel n&rsquo;a pas &agrave; &ecirc;tre aussi long que celui qui est utilis&eacute; pour l&rsquo;&eacute;talonnage. Dans l&rsquo;exemple ci-dessus, le rayonnement de fond est de 400 coups/300 secondes, soit 1,3 cps. En supposant que le taux de comptage du rayonnement de fond est stable, un temps de comptage de 60 secondes donnerait environ 80 coups. En substituant ces nouveaux chiffres dans l&rsquo;&eacute;quation, nous obtenons une nouvelle valeur AMD, comme le montre la formule suivante :</p>
<table className=" table-border-none">  <tr>  	<td className="text-center text-center" width="20">(31)</td>  	<td width="70" className="text-center">  <math display=&#39;block&#39;>   <semantics>
<mrow>
<mi>A</mi><mi>M</mi><mi>D</mi><mo>=</mo><mfrac>
<mrow>
<mn>4,65</mn><msqrt>
<mrow>
<mn>80</mn></mrow>
</msqrt>
<mo>+</mo><mn>3</mn></mrow>
<mrow>
<mo stretchy=&#39;false&#39;>(</mo><mn>0,0060</mn><mo stretchy=&#39;false&#39;>)</mo><mo stretchy=&#39;false&#39;>(</mo><mn>60</mn><mo stretchy=&#39;false&#39;>)</mo></mrow>
</mfrac>
</mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaamytaiaads
eacaWGbbGaeyypa0ZaaSaaaeaacaaI0aGaaiOlaiaaiAdacaaI1aWa
aOaaaeaacaaI4aGaaGimaaWcbeaakiabgUcaRiaaiodaaeaacaGGOa
GaaGimaiaac6cacaaIWaGaaGimaiaaiAdacaaIWaGaaiykaiaacIca
caaI2aGaaGimaiaacMcaaaaaaa@4822@
</annotation>   </semantics>  </math>  	</td>  	</tr>  </table>  <br />
<p><em>AMD</em> = 124 Bq</p>
<h4>E.8.5 Dossiers</h4>  <p>Des dossiers exacts concernant l&rsquo;&eacute;talonnage et l&rsquo;entretien devraient &ecirc;tre conserv&eacute;s dans le syst&egrave;me de mesure. Ces dossiers devraient contenir les renseignements suivants :</p>
<ol>
<li>date d&rsquo;&eacute;talonnage</li>
<li>m&eacute;thode de r&eacute;f&eacute;rence</li>  	<li>activit&eacute; courante de la source d&rsquo;&eacute;talonnage</li>
<li>valeurs de fond (on devrait comparer ces valeurs aux valeurs pr&eacute;c&eacute;dentes pour d&eacute;tecter les changements)</li>  	<li>AMD</li>  	<li>efficacit&eacute; calcul&eacute;e</li>
<li>signature du responsable</li>
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
<div id="E.9"></div>
<h3 id="appE-9">E.9	Exemple de registre de d&eacute;pistage thyro&iuml;dien pour le <sup>131</sup>I</h3>  <p>Niveau d&rsquo;enqu&ecirc;te :&nbsp;&nbsp;______________________________________&nbsp;&nbsp;cps net = 1 kBq de <sup>131</sup>I</p>  <p>Niveau de d&eacute;claration :&nbsp;&nbsp;___________________________________&nbsp;&nbsp;cps net = 10 kBq de <sup>131</sup>I  <p>Nom de l&rsquo;employ&eacute; :&nbsp;&nbsp;__________________________________________________</p>  <p>Instrument utilis&eacute; :&nbsp;&nbsp;__________________________________________________</p>
<table className="width-100">
<tr>
<th className="text-center">Date de la mesure</th>
<th>Derni&egrave;re utilisation de l&rsquo;iode radioactif (date)</th>
<th className="text-center">Taux de comptage du rayonnement de fond (cps</th>
<th className="text-center">Nombre brut de coups</th>
<th className="text-center">Temps de comptage (secondes)</th>
<th className="text-center">Taux de comptage net (cps)</th>
<th className="text-center">Technicien (initiales)</th>
<th className="text-center">Mesure prise</th>
</tr>
<tr>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>  </table>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="E.10"></div>
<h3 id="appE-10">E.10 Graphiques de contr&ocirc;le de la qualit&eacute;</h3>  <p>La pr&eacute;sente section fournit une m&eacute;thode pour enregistrer le rayonnement de fond et le taux de comptage des sources de contr&ocirc;les, aux fins de contr&ocirc;le de la qualit&eacute;.</p>  <p>On pr&eacute;parera deux graphiques de contr&ocirc;le, un pour le rayonnement de fond et un pour la source de contr&ocirc;le, afin d&rsquo;en v&eacute;rifier la qualit&eacute; selon la section E.4.2. On devrait indiquer sur chaque graphique de contr&ocirc;le la date de la mesure et les taux de comptage correspondants. Apr&egrave;s environ 20 jours de comptage, on disposera de suffisamment d&rsquo;observations pour estimer l&rsquo;&eacute;cart-type des distributions. Pour calculer l&rsquo;&eacute;cart-type, on utilise l&rsquo;&eacute;quation suivante :</p>
<table className=" table-border-none">  <tr>  	<td className="text-center text-center" width="20">(32)</td>  	<td width="70" className="text-center">  <math display=&#39;block&#39;>   <semantics>
<mrow>
<mi>S</mi><mo>=</mo><msqrt>
<mrow>
<mfrac>
<mn>1</mn>
<mrow>
<mi>n</mi><mo>&#x2212;</mo><mn>1</mn></mrow>
</mfrac>
<mstyle displaystyle=&#39;true&#39;>
<munderover>
<mo>&#x2211;</mo>
<mrow>
<mi>i</mi><mo>=</mo><mn>1</mn></mrow>
<mi>n</mi>
</munderover>
<mrow>
<msup>
<mrow>
<mrow><mo>(</mo>
<mrow>
<msub>
<mi>N</mi>
<mi>i</mi>
</msub>
<mo>&#x2212;</mo><mover accent=&#39;true&#39;>
<mi>N</mi>
<mo>&#x00AF;</mo>
</mover>
</mrow>
<mo>)</mo></mrow></mrow>
<mn>2</mn>
</msup>
</mrow>
</mstyle></mrow>
</msqrt>
</mrow>
<annotation encoding=&#39;MathType-MTEF&#39;>MathType@MTEF@5@5@+=
feaagKart1ev2aaatCvAUfeBSjuyZL2yd9gzLbvyNv2CaerbuLwBLn
hiov2DGi1BTfMBaeXatLxBI9gBaerbd9wDYLwzYbItLDharqqtubsr
4rNCHbGeaGqiVu0Je9sqqrpepC0xbbL8F4rqqrFfpeea0xe9Lq=Jc9
vqaqpepm0xbba9pwe9Q8fs0=yqaqpepae9pg0FirpepeKkFr0xfr=x
fr=xb9adbaqaaeGaciGaaiaabeqaamaabaabaaGcbaGaam4uaiabg2
da9maakaaabaWaaSaaaeaacaaIXaaabaGaamOBaiabgkHiTiaaigda
aaWaaabCaeaadaqadaqaaiaad6eadaWgaaWcbaGaamyAaaqabaGccq
GHsislceWGobGbaebaaiaawIcacaGLPaaadaahaaWcbeqaaiaaikda
aaaabaGaamyAaiabg2da9iaaigdaaeaacaWGUbaaniabggHiLdaale
qaaaaa@476F@
</annotation>   </semantics>  </math>  	</td>  	</tr>  </table>
<table className="table-border-none">
<tr>
<td>o&ugrave; :</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>  </tr>  <tr>
<td>&nbsp;</td>
<td className="text-center"><em>S</em></td>
<td>=</td>
<td>&eacute;cart-type</td>  </tr>  <tr>
<td>&nbsp;</td>
<td className="text-center"><em>n</em></td>
<td>=</td>
<td>nombre de mesures du rayonnement de fond ou avec la source de contr&ocirc;le</td>  </tr>  <tr>
<td>&nbsp;</td>
<td className="text-center"><em>N<sub>i</sub></em></td>
<td>=</td>
<td>taux de comptage pour chaque mesure individuelle</td>  </tr>  <tr>
<td>&nbsp;</td>
<td className="text-center"><em><span style="text-decoration: overline;">N</span></em></td>
<td>=</td>
<td>moyenne de n mesures de N<sub>i</sub></td>  </tr>  </table>  <br />
<p>Le titulaire de permis devrait tracer des limites de contr&ocirc;le &agrave; &plusmn; 2 S sur chaque graphique. Presque toutes les mesures effectu&eacute;es aux fins de contr&ocirc;le de la qualit&eacute; (95 %) devraient se trouver &agrave; l&rsquo;int&eacute;rieur de ces limites de contr&ocirc;le.</p>  <p>Si une mesure aux fins de contr&ocirc;le de la qualit&eacute; du rayonnement de fond ou de la source de contr&ocirc;le est &agrave; l&rsquo;ext&eacute;rieur des limites de contr&ocirc;le, on r&eacute;p&eacute;tera imm&eacute;diatement la mesure. Si la mesure r&eacute;p&eacute;t&eacute;e est &eacute;galement en dehors des limites, v&eacute;rifier les r&eacute;glages de l&rsquo;instrument. Enfin, si aucune cause ne peut &ecirc;tre trouv&eacute;e, le titulaire de permis pourrait prendre des mesures correctives, y compris le r&eacute;&eacute;talonnage ou la r&eacute;paration de l&rsquo;instrument afin de s&rsquo;assurer que les mesures subs&eacute;quentes aux fins de contr&ocirc;le de la qualit&eacute; donnent des r&eacute;sultats &agrave; l&rsquo;int&eacute;rieur des limites de contr&ocirc;le.</p>
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
<h2 id="appF">Appendix F: Recommandations propres aux radionucl&eacute;ides concernant les mesures par essais biologiques et la dosim&eacute;trie interne &ndash; Uranium</h2>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="F.1"></div>
<h3 id="appF-1">F.1	Limites annuelles d&rsquo;incorporation des compos&eacute;s d&rsquo;uranium</h3>  <p>L&rsquo;uranium naturel a trois isotopes : <sup>234</sup>U, <sup>235</sup>U et <sup>238</sup>U. Leur activit&eacute; respective par gramme d&rsquo;uranium naturel est de 12 430 Bq, 575,9 Bq et 12 350 Bq. Leur pourcentage en masse est de 99,2742 %, 0,7204 % et 0,0054 % pour le <sup>238</sup>U, le <sup>235</sup>U et le <sup>234</sup>U, respectivement, et leur activit&eacute; sp&eacute;cifique est de 2,54 &times; 10<sup>4</sup> Bq g<sup>-1</sup>. Ces donn&eacute;es figurent dans la publication 107 de la CIPR, <span lang="en"><em>Nuclear Decay Data for Dosimetric Calculations</em></span> [29] et dans le document du NIST, &laquo; <span lang="en"><em>Atomic Weights and Isotopic Compositions</em></em> &raquo; [33]. La pr&eacute;sente section fournit de l&rsquo;orientation concernant le choix des LAI appropri&eacute;es pour divers compos&eacute;s d&rsquo;uranium, y compris ceux qui ont &eacute;t&eacute; enrichis ou appauvris en <sup>235</sup>U.</p>  <p>On devrait calculer la DEE par unit&eacute; d&rsquo;incorporation (coefficient de dose) et les LAI correspondantes pour l&rsquo;inhalation de compos&eacute;s d&rsquo;uranium en tenant compte des caract&eacute;ristiques de solubilit&eacute; des compos&eacute;s auxquels les travailleurs pourraient &ecirc;tre expos&eacute;s en milieu de travail. Lorsqu&rsquo;il n&rsquo;existe pas de coefficient de dose et de LAI propres aux diff&eacute;rentes mati&egrave;res, on devrait utiliser les valeurs du tableau F.1. Ces donn&eacute;es proviennent du document de la CCSN RSP-0297, <span lang="en"><em>Evaluation of Default Annual Limit on Intake (ALI) for Yellowcake and Uranium Ore</em></span> [34].</p>
<p><strong>Tableau F.1 : Limites annuelles recommand&eacute;es pour l&rsquo;incorporation de divers compos&eacute;s d&rsquo;uranium</strong></p>  <table className="">
<tr>
<th className="text-center" rowspan="2">Compos&eacute; d&rsquo;uranium</th>
<th className="text-center" colSpan="3">Limite annuelle d&rsquo;incorporation (Bq)</th>
</tr>
<tr>
<th>Uranium naturel</th>
<th>Uranium enrichi (3,5 %)</th>
<th>Uranium appauvri</th>
</tr>
<tr>
<td>Minerai d&rsquo;uranium</td>
<td className="text-center">4 500</td>
<td className="text-center">s.o.</td>
<td className="text-center">s.o.</td>
</tr>
<tr>
<td>Concentr&eacute; d&rsquo;uranium (yellowcake) s&eacute;ch&eacute;</td>
<td className="text-center text-center">48 000</td>
<td className="text-center text-center">s.o.</td>
<td className="text-center text-center">s.o.</td>
</tr>
<tr>
<td>Concentr&eacute; d&rsquo;uranium (yellowcake) calcin&eacute;</td>
<td className="text-center text-center">3 100</td>
<td className="text-center text-center">s.o.</td>
<td className="text-center text-center">s.o.</td>
</tr>
<tr>
<td>Valeur par d&eacute;faut de la CIPR &ndash; type F</td>
<td className="text-center text-center">32 400</td>
<td className="text-center text-center">31 300</td>
<td className="text-center text-center">33 600</td>
</tr>
<tr>
<td>Valeur par d&eacute;faut de la CIPR &ndash; type M</td>
<td className="text-center text-center">12 000</td>
<td className="align-cente text-centerr">9 850</td>
<td className="text-center text-center">11 600</td>
</tr>
<tr>
<td>Valeur par d&eacute;faut de la CIPR &ndash; type S</td>
<td className="text-center text-center">3 190</td>
<td className="text-center text-center">3 010</td>
<td className="text-center text-center">3 390</td>
</tr>  </table>  <p>Les LAI propres aux diff&eacute;rentes mati&egrave;res devraient provenir d&rsquo;&eacute;tudes de solubilit&eacute; <em>in vitro</em> pour les compos&eacute;s en cause. La m&eacute;thode d&rsquo;&eacute;tude et les r&eacute;sultats devraient &ecirc;tre document&eacute;s dans le cadre du fondement technique de la dosim&eacute;trie du titulaire de permis. L&rsquo;&eacute;tude de solubilit&eacute; devrait &ecirc;tre mise &agrave; jour p&eacute;riodiquement pour refl&eacute;ter les changements apport&eacute;s aux proc&eacute;d&eacute;s ou aux types de compos&eacute;s pr&eacute;sents dans l&rsquo;installation autoris&eacute;e, ou pour s&rsquo;assurer que les param&egrave;tres de solubilit&eacute; n&rsquo;ont pas chang&eacute;.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="F.2"></div>
<h3 id="appF-2">F.2	Toxicit&eacute; chimique des compos&eacute;s de l&rsquo;uranium</h3>  <p>Comme l&rsquo;uranium est un m&eacute;tal lourd, il est chimiquement toxique au-del&agrave; d&rsquo;un seuil de concentration dans les reins. La toxicit&eacute; chimique devrait &ecirc;tre prise en compte lorsqu&rsquo;il y a un risque d&rsquo;incorporation par inhalation de compos&eacute;s d&rsquo;uranium solubles, par ingestion ou encore par les plaies. Afin d&rsquo;emp&ecirc;cher que l&rsquo;uranium n&rsquo;affecte les reins, on devrait effectuer des mesures par essais biologiques de l&rsquo;urine pour v&eacute;rifier que les concentrations d&rsquo;uranium ne d&eacute;passent pas 3 &micro;g d&rsquo;uranium par gramme de tissu r&eacute;nal. Pour de plus amples renseignements, veuillez consulter la norme ISO 16638-1, <em>Radioprotection &ndash; Contr&ocirc;le et dosim&eacute;trie interne des &eacute;l&eacute;ments sp&eacute;cifiques &ndash; Partie 1 : Inhalation de compos&eacute;s d&rsquo;uranium</em> [35]. Le tableau F.2 montre les concentrations urinaires r&eacute;sultant d&rsquo;une charge r&eacute;nale maximale de 3 &micro;g d&rsquo;uranium par gramme de tissu r&eacute;nal. Les concentrations sont des moyennes pour la p&eacute;riode de 24 heures indiqu&eacute;e. Pour la p&eacute;riode de 1 jour, la concentration est la moyenne pour les p&eacute;riodes de 0 &agrave; 24 heures suivant l&rsquo;incorporation. Le tableau F.3 indique les taux d&rsquo;excr&eacute;tion et les concentrations pour des intervalles de temps plus courts au cours des 48 premi&egrave;res heures suivant une incorporation. Les donn&eacute;es des tableaux F.2 et F.3 proviennent du document RSP-0165 de la CCSN, <span lang="en"></span><em>Uranium Intake &ndash; Dose Estimation Methods</em></span> [36].</p>
<p><strong>Tableau F.2 : Concentrations urinaires r&eacute;sultant d&rsquo;une charge r&eacute;nale maximale de 3 &micro;g d&rsquo;uranium par gramme de tissu r&eacute;nal</strong></p>  <table className="">
<tr>
<th className="text-center" rowspan="2">Temps apr&egrave;s l&rsquo;incorporation (jours)</th>
<th className="text-center" colSpan="4">Concentration d&rsquo;uranium dans l&rsquo;urine, &micro;g/L</th>
</tr>
<tr>
<th>Type F</th>
<th>Type M</th>
<th>Type S</th>
<th>Ingestion</th>
</tr>
<tr>
<td className="text-center">1</td>
<td className="text-center">3 760</td>
<td className="text-center">3 760</td>
<td className="text-center">3 720</td>
<td className="text-center">3 700</td>
</tr>
<tr>
<td className="text-center">2</td>
<td className="text-center">130</td>
<td className="text-center">182</td>
<td className="text-center">233</td>
<td className="text-center">204</td>
</tr>
<tr>
<td className="text-center">3</td>
<td className="text-center">105</td>
<td className="text-center">138</td>
<td className="text-center">137</td>
<td className="text-center">109</td>
</tr>
<tr>
<td className="text-center">4</td>
<td className="text-center">95</td>
<td className="text-center">128</td>
<td className="text-center">125</td>
<td className="text-center">98</td>
</tr>
<tr>
<td className="text-center">5</td>
<td className="text-center">86</td>
<td className="text-center">119</td>
<td className="text-center">116</td>
<td className="text-center">89</td>
</tr>
<tr>
<td className="text-center">6</td>
<td className="text-center">78</td>
<td className="text-center">111</td>
<td className="text-center">108</td>
<td className="text-center">81</td>
</tr>
<tr>
<td className="text-center">7</td>
<td className="text-center">71</td>
<td className="text-center">105</td>
<td className="text-center">101</td>
<td className="text-center">74</td>
</tr>
<tr>
<td className="text-center">8</td>
<td className="text-center">65</td>
<td className="text-center">99</td>
<td className="text-center">95</td>
<td className="text-center">67</td>
</tr>
<tr>
<td className="text-center">9</td>
<td className="text-center">60</td>
<td className="text-center">93</td>
<td className="text-center">90</td>
<td className="text-center">62</td>
</tr>
<tr>
<td className="text-center">10</td>
<td className="text-center">55</td>
<td className="text-center">88</td>
<td className="text-center">85</td>
<td className="text-center">57</td>
</tr>
<tr>
<td className="text-center">14</td>
<td className="text-center">40</td>
<td className="text-center">72</td>
<td className="text-center">69</td>
<td className="text-center">14</td>
</tr>
<tr>
<td className="text-center">30</td>
<td className="text-center">14</td>
<td className="text-center">43</td>
<td className="text-center">41</td>
<td className="text-center">14</td>
</tr>  </table>  <br />
<p><strong>Tableau F.3 : Concentrations urinaires 48 heures apr&egrave;s une incorporation r&eacute;sultant d&rsquo;une charge r&eacute;nale maximale de 3 &micro;g d&rsquo;uranium par gramme de tissu r&eacute;nal</strong>  </p>  <table className="width-100">
<tr>
<th className="text-center" rowspan="2">Temps apr&egrave;s l&rsquo;incorporation (heures)</th>
<th className="text-center" colSpan="2">Type F</th>
<th className="text-center" colSpan="2">Type M</th>
<th className="text-center" colSpan="2">Type S</th>
<th className="text-center" colSpan="2">Ingestion</th>
</tr>
<tr>
<th>&micro;g U par 4 h</th>
<th>&micro;g/L</th>
<th>&micro;g U par 4 h</th>
<th>&micro;g/L</th>
<th>&micro;g U par 4 h</th>
<th>&micro;g/L</th>
<th>&micro;g U par 4 h</th>
<th>&micro;g/L</th>
</tr>
<tr>
<td className="text-center">4</td>
<td className="text-center">3 100</td>
<td className="text-center">13 300</td>
<td className="text-center">2 600</td>
<td className="text-center">11 100</td>
<td className="text-center">1 310</td>
<td className="text-center">5 620</td>
<td className="text-center">819</td>
<td className="text-center">3 510</td>
</tr>
<tr>
<td className="text-center">8</td>
<td className="text-center">1 330</td>
<td className="text-center">5 690</td>
<td className="text-center">1 430</td>
<td className="text-center">6 150</td>
<td className="text-center">1 680</td>
<td className="text-center">7 220</td>
<td className="text-center">1 850</td>
<td className="text-center">7 930</td>
</tr>
<tr>
<td className="text-center">12</td>
<td className="text-center">477</td>
<td className="text-center">2 040</td>
<td className="text-center">659</td>
<td className="text-center">2 830</td>
<td className="text-center">1,120</td>
<td className="text-center">4 780</td>
<td className="text-center">1 290</td>
<td className="text-center">5 530</td>
</tr>
<tr>
<td className="text-center">16</td>
<td className="text-center">202</td>
<td className="text-center">865</td>
<td className="text-center">319</td>
<td className="text-center">1 368</td>
<td className="text-center">609</td>
<td className="text-center">2 611</td>
<td className="text-center">696</td>
<td className="text-center">2 982</td>
</tr>
<tr>
<td className="text-center">20</td>
<td className="text-center">99</td>
<td className="text-center">423</td>
<td className="text-center">164</td>
<td className="text-center">702</td>
<td className="text-center">318</td>
<td className="text-center">1 363</td>
<td className="text-center">351</td>
<td className="text-center">1 504</td>
</tr>
<tr>
<td className="text-center">24</td>
<td className="text-center">57</td>
<td className="text-center">245</td>
<td className="text-center">93</td>
<td className="text-center">400</td>
<td className="text-center">170</td>
<td className="text-center">728</td>
<td className="text-center">178</td>
<td className="text-center">761</td>
</tr>
<tr>
<td className="text-center">28</td>
<td className="text-center">40</td>
<td className="text-center">171</td>
<td className="text-center">61</td>
<td className="text-center">263</td>
<td className="text-center">99</td>
<td className="text-center">22</td>
<td className="text-center">96</td>
<td className="text-center">410</td>
</tr>
<tr>
<td className="text-center">32</td>
<td className="text-center">33</td>
<td className="text-center">140</td>
<td className="text-center">47</td>
<td className="text-center">201</td>
<td className="text-center">65</td>
<td className="text-center">278</td>
<td className="text-center">58</td>
<td className="text-center">249</td>
</tr>
<tr>
<td className="text-center">36</td>
<td className="text-center">29</td>
<td className="text-center">126</td>
<td className="text-center">40</td>
<td className="text-center">173</td>
<td className="text-center">49</td>
<td className="text-center">210</td>
<td className="text-center">41</td>
<td className="text-center">176</td>
</tr>
<tr>
<td className="text-center">40</td>
<td className="text-center">28</td>
<td className="text-center">119</td>
<td className="text-center">37</td>
<td className="text-center">159</td>
<td className="text-center">41</td>
<td className="text-center">177</td>
<td className="text-center">33</td>
<td className="text-center">142</td>
</tr>
<tr>
<td className="text-center">44</td>
<td className="text-center">27</td>
<td className="text-center">115</td>
<td className="text-center">35</td>
<td className="text-center">151</td>
<td className="text-center">37</td>
<td className="text-center">160</td>
<td className="text-center">30</td>
<td className="text-center">127</td>
</tr>
<tr>
<td className="text-center">48</td>
<td className="text-center">26</td>
<td className="text-center">112</td>
<td className="text-center">34</td>
<td className="text-center">147</td>
<td className="text-center">35</td>
<td className="text-center">151</td>
<td className="text-center">28</td>
<td className="text-center">119</td>
</tr>  </table>
<p>Lorsqu&rsquo;un r&eacute;sultat de contr&ocirc;le urinaire d&rsquo;un travailleur d&eacute;passe les valeurs applicables des tableaux F.2 ou F.3, le travailleur devrait &ecirc;tre retir&eacute; du lieu de travail o&ugrave; il y a des compos&eacute;s d&rsquo;uranium solubles, et il faudrait obtenir un &eacute;chantillon d&rsquo;urine suppl&eacute;mentaire pour confirmer le r&eacute;sultat initial. Si l&rsquo;incorporation est confirm&eacute;e, le travailleur devrait &ecirc;tre r&eacute;f&eacute;r&eacute; au personnel m&eacute;dical pour des tests des fonctions r&eacute;nales.</p>  <p>Le mode dominant de toxicit&eacute; de l&rsquo;uranium d&eacute;pend de la solubilit&eacute; du compos&eacute;, de l&rsquo;enrichissement en <sup>235</sup>U et de la pr&eacute;sence d&rsquo;autres isotopes d&rsquo;uranium.</p>  <p>La toxicit&eacute; chimique est limitative dans les conditions suivantes :</p>  <ul>
<li>incorporation par inhalation aigu&euml; des compos&eacute;s de type F, pour tous les pourcentages d&rsquo;enrichissement en <sup>235</sup>U</li>
<li>incorporation par inhalation aigu&euml; des compos&eacute;s de type M, pour les enrichissements en <sup>235</sup>U inf&eacute;rieurs &agrave; 30 % par masse</li>
<li>incorporation par inhalation chronique des compos&eacute;s de type F, pour les enrichissements en <sup>235</sup>U inf&eacute;rieurs &agrave; 3 % par masse</li>  </ul>  <p>La toxicit&eacute; radiologique est limitative dans les conditions suivantes :</p>
<ul>
<li>incorporation par inhalation aigu&euml; ou chronique des compos&eacute;s de type S, pour tous les pourcentages d&rsquo;enrichissement en <sup>235</sup>U</li>
<li>incorporation par inhalation aigu&euml; ou chronique de tout type d&rsquo;absorption lorsque du <sup>232</sup>U ou du <sup>236</sup>U est pr&eacute;sent</li>
<li>incorporation par inhalation chronique des compos&eacute;s de type F avec enrichissements en <sup>235</sup>U de 3 % ou plus par masse</li>
<li>incorporation par inhalation chronique des compos&eacute;s de type M avec tous les pourcentages d&rsquo;enrichissement en <sup>235</sup>U</li>  </ul>  <p>La toxicit&eacute; chimique et radiologique est &eacute;quivalente pour l&rsquo;incorporation par inhalation aigu&euml; de compos&eacute;s de type M avec enrichissements en <sup>235</sup>U de 30 % ou plus par masse. Dans le cas de l&rsquo;incorporation par une plaie, on devrait &eacute;valuer la toxicit&eacute; radiologique et chimique au cas par cas. Pour de plus amples renseignements, veuillez consulter la norme ISO 16638-1, <em>Radioprotection &ndash; Contr&ocirc;le et dosim&eacute;trie interne des &eacute;l&eacute;ments sp&eacute;cifiques &ndash; Partie 1 : Inhalation de compos&eacute;s d&rsquo;uranium</em> [34].</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="F.3"></div>
<h3 id="appF-3">F.3	D&eacute;termination de la dose due &agrave; l&rsquo;incorporation de compos&eacute;s d&rsquo;uranium</h3>  <p>Outre les recommandations de la partie B du pr&eacute;sent REGDOC, on devrait tenir compte des points qui suivent pour d&eacute;terminer la dose provenant de l&rsquo;incorporation de compos&eacute;s d&rsquo;uranium.</p>  <h4>F.3.1 Essais biologiques <em>in vitro</em></h4>  <p>Measurements of uranium in urine samples should be used to:</p>
<ul>  	<li>d&eacute;terminer les doses r&eacute;sultant de l&rsquo;incorporation de compos&eacute;s d&rsquo;uranium solubles</li>
<li>servir d&rsquo;indicateur de l&rsquo;incorporation pour les compos&eacute;s d&rsquo;uranium, peu importe leur solubilit&eacute;</li>
<li>v&eacute;rifier que les valeurs d&rsquo;incorporation calcul&eacute;es par le contr&ocirc;le de l&rsquo;air ambiant sont repr&eacute;sentatives des valeurs r&eacute;elles d&rsquo;incorporation</li>
<li>obtenir des donn&eacute;es de contr&ocirc;le in vivo suppl&eacute;mentaires pour les essais biologiques sp&eacute;ciaux afin de d&eacute;terminer la dose</li>
<li>v&eacute;rifier le bon fonctionnement des &eacute;quipements de protection respiratoire</li>  </ul>  <h4>F.3.2 Essais biologiques <em>in vivo</em></h4>  <p>Les essais biologiques <em>in vivo</em> pour d&eacute;terminer l&rsquo;incorporation d&rsquo;uranium consistent en un comptage pulmonaire. Les points qui suivent devraient &ecirc;tre pris en compte lors de la mesure de l&rsquo;uranium dans les poumons.</p>  <p>On devrait mesurer l&rsquo;&eacute;paisseur de la paroi thoracique (EPT) pour chaque travailleur qui participe &agrave; un programme de comptage pulmonaire de l&rsquo;uranium. Les mesures pourraient &ecirc;tre faites par &eacute;chographie. La fr&eacute;quence de ces mesures devrait &ecirc;tre document&eacute;e. L&rsquo;&eacute;talonnage des appareils &agrave; ultrasons utilis&eacute;s pour cette mesure devrait &ecirc;tre document&eacute; et v&eacute;rifi&eacute; p&eacute;riodiquement. L&rsquo;EPT de chaque travailleur participant &agrave; un programme de comptage pulmonaire devrait &ecirc;tre document&eacute;e et mise &agrave; jour p&eacute;riodiquement. On devrait utiliser la valeur EPT de chaque travailleur pour d&eacute;terminer sa charge pulmonaire (p. ex., en mg d&rsquo;uranium) &agrave; partir des r&eacute;sultats du comptage pulmonaire.</p>  <p>On devrait d&eacute;terminer et documenter les valeurs qui d&eacute;clenchent la r&eacute;p&eacute;tition du comptage pulmonaire. Ces valeurs devraient tenir compte de la contamination de surface des travailleurs prenant part au programme de comptage. Lorsque la contamination de surface a &eacute;t&eacute; confirm&eacute;e sur un travailleur et que ses r&eacute;sultats de comptage pulmonaire sont inexacts, on devrait demander au travailleur de prendre une douche, puis de se pr&ecirc;ter &agrave; un nouveau comptage.</p>
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
<h2 id="glossary">Glossaire</h2>  <p>Les d&eacute;finitions des termes utilis&eacute;s dans le pr&eacute;sent document figurent dans le <a href="http://www.nuclearsafety.gc.ca/pubs_catalogue/uploads_fre/REGDOC-3-6-Glossary-of-CNSC-Terminology-fra.pdf">REGDOC-3.6, <em>Glossaire de la CCSN</em></a>, qui comprend des termes et des d&eacute;finitions tir&eacute;s de la <a href="http://laws-lois.justice.gc.ca/fra/lois/N-28.3/"><em>Loi sur la s&ucirc;ret&eacute; et la r&eacute;glementation nucl&eacute;aires</em></a>, de ses r&egrave;glements d&rsquo;application ainsi que des documents d&rsquo;application de la r&eacute;glementation et d&rsquo;autres publications de la CCSN. Le REGDOC-3.6 est fourni &agrave; titre de r&eacute;f&eacute;rence et pour information.</p>
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
<h2 id="ref">R&eacute;f&eacute;rences</h2>  <p>Remarque : Les r&eacute;f&eacute;rences qui suivent sont pour la version provisoire du pr&eacute;sent document. La liste sera mise &agrave; jour avant la publication du REGDOC-2.7.2, tome I.</p>
<ol>  	<li>Commission canadienne de s&ucirc;ret&eacute; nucl&eacute;aire (CCSN). REGDOC-2.7.1, <em>Radioprotection</em>, (&eacute;bauche). La consultation publique se poursuit, concurremment avec celle pour le REGDOC-2.7.2, Tome I. Voir le <a href="/fra/acts-and-regulations/regulatory-documents/index">site Web de la CCSN</a> pour de plus amples renseignements.</li>
<li>CCSN. REGDOC-2.7.2, tome II, <em>Exigences techniques et relatives aux syst&egrave;mes de gestion pour les services de dosim&eacute;trie</em>. Le document devrait &ecirc;tre publi&eacute; au d&eacute;but du printemps 2019. Voir le <a href="/fra/acts-and-regulations/regulatory-documents/index">site Web de la CCSN</a> pour de plus amples renseignements.</li>
<li>CCSN. <a href="http://www.nuclearsafety.gc.ca/fra/pdfs/REGDOCS/REGDOC-2-9-1-Principes-évaluations-environnementales-et-mesures-de-protection-de-lenvironement-fra.pdf">REGDOC 2.9.1, <em>Principes, &eacute;valuations environnementales et mesures de protection de l&#39;environnement</em></a>, &eacute;dition 1.1, Ottawa, 2017.</li>
<li>International Commission on Radiation Units and Measurements (ICRU). Report 51, <span lang="en"><em>Quantities and Units in Radiation Protection Dosimetry</em></span>, Bethesda, Maryland, 1993.</li>
<li>National Institute of Standards and Technology (NIST), Physical Measurement Laboratory. <a href="https://www.nist.gov/pml/stopping-power-range-tables-electrons-protons-and-helium-ions"><em>Stopping-Power &amp; Range Tables for Electrons, Protons, and Helium Ions</em></a>, NIST Standard Reference Database 124.</li>
<li>American National Standards Institute/Health Physics Society. ANSI/HPS N13.41-2011, <span lang="en"><em>Criteria for Performing Multiple Dosimetry</em></span>, 2011.</li>
<li>Commission internationale de protection radiologique (CIPR). Publication 103 de la CIPR, <a href="http://www.icrp.org/docs/P103_French.pdf"><em>Recommandations 2007 de la Commission internationale de protection radiologique</em></a>, Oxford, 2007.</li>
<li>Agence internationale de l&rsquo;&eacute;nergie atomique (AIEA). TECDOC-1731, <a href="https://www-pub.iaea.org/books/iaeabooks/10628/Implications-for-Occupational-Radiation-Protection-of-the-New-Dose-Limit-for-the-Lens-of-the-Eye"><span lang="en"><em>Implications for Occupational Radiation Protection of the New Dose Limit for the Lens of the Eye</em></span></a>, Vienne, 2013.
<li>AIEA. TECDOC-1162, <a href="https://www-pub.iaea.org/books/IAEABooks/5926/Generic-Procedures-for-Assessment-and-Response-during-a-Radiological-Emergency"><span lang="en"><em>Generic procedures for assessment and response during a radiological emergency</em></span></a>, Vienne, 2000.</li>
<li>Kocher, D. C., et K. F. Eckerman, &laquo; <span lang="en">Electron dose-rate conversion factors for external exposure of the skin from uniformly deposited activity on the body surface</span> &raquo;, <em>Health Physics</em>, Vol. 53, n<sup>o</sup> 2, pp. 135&ndash;141, 1987.</li>  	<li>CIPR. Publication 130 de la CIRP, <a href="https://www.osti.gov/servlets/purl/1376336"><span lang="en"><em>Occupational Intakes of Radionuclides: Part I</em></span></a>, Vol. 44, n<sup>o</sup> 2, 2015.
<li>CIPR. Publication 119 de la CIRP, <a href=""><span lang="en"><em>Compendium of Dose Coefficients based on ICRP Publication 60</em></span></a>, Oxford, 2012.</li>  	<li>AIEA. Collection S&ucirc;ret&eacute; n<sup>o</sup> 114, <a href="https://inis.iaea.org/search/search.aspx?orig_q=RN:27047480"><span lang="en"><em>Direct Methods for Measuring Radionuclides in the Human Body</em></span></a>, Vienne, 1996.</li>  	<li>ICRU. Report 69, <span lang="en"><em>Direct Determination of the Body Content of Radionuclides</em></span>, Bethesda, Maryland, 2016.</li>
<li>CIPR. Publication 66 de la CIRP, <span lang="en"><em>Human Respiratory Tract Model for Radiological Protection</em></span>, Vol. 24, n<sup>os</sup> 1&ndash;3, 1994.</li>
<li>CIPR. Publication 67 de la CIRP, <span lang="en"><em>Age-Dependent Doses to Members of the Public from Intakes of Radionuclides: Part 2 &ndash; Ingestion Dose Coefficients</em></span>, Vol. 23, n<sup>o</sup> 3/4, 1993.</li>
<li>CIPR. Publication 69 de la CIRP, <span lang="en"><em>Age-Dependent Doses to Members of the Public from Intakes of Radionuclides: Part 3 &ndash; Ingestion Dose Coefficients</em></span>, Vol. 25, n<sup>o</sup> 1, 1995.</li>
<li>Strom, D. J. et P. S. Stansbury, &laquo; <span lang="en">Minimum Detectable Activity When Background Is Counted Longer Than the Sample</span> &raquo;, <em>Health Physics</em>, Vol. 63, n<sup>o</sup> 3, pp. 360&ndash;361, 1992.</li>
<li>Organisation internationale de normalisation. ISO 20553:2006, <em>Radiation &ndash; Surveillance professionnelle des travailleurs expos&eacute;s &agrave; un risque de contamination interne par des mat&eacute;riaux radioactifs</em>.</li>
<li>Hickey, E. E., G. A. Stoetzel, D. J. Strom, G. R. Cicotte, C. M. Wiblin et S. A. McGuire. NUREG 1400, <a href="https://www.nrc.gov/docs/ML1305/ML13051A671.pdf"><span lang="en"><em>Air Sampling in the Workplace</em></span></a>, 1993.</li>
<li>Castellani, C. M., J. W. Marsh, C. Hurtgen, E. Blanchardon, P. Berard, A. Giussani et M. A. Lopez. EURADOS Report 2013-01, <em>IDEAS Guidelines (Version 2) for the Estimation of Committed Doses from Incorporation Monitoring Data</em>, 2013.</li>  	<li>AIEA. Collection Rapports de s&ucirc;ret&eacute; n<sup>o</sup> 37, <a href=""><span lang="en"><em>Methods for Assessing Occupational Radiation Doses Due to Intakes of Radionuclides</em></span></a>, Vienne, 2004.</li>
<li>CIPR. Publication 95 de la CIRP, <span lang="en"><em>Doses to Infants from Ingestion of Radionuclides in Mothers&rsquo; Milk</em></span>, Vol. 34, n<sup>os</sup> 3&ndash;4, 2004.</li>  	<li>National Council on Radiation Protection &amp; Measurements. NCRP Report n<sup>o</sup> 156, <em>Development of a Biokinetic Model for Radionuclide-Contaminated Wounds and Procedures for their Assessment, Dosimetry and Treatment</em>, 2006.</li>
<li>CIPR. Publication 78 de la CIRP, <span lang="en"><em>Individual monitoring for internal exposure of workers: Replacement of ICRP Publication 54</em></span>, Vol. 27, n<sup>os</sup> 3&ndash;4, 1997.</li>
<li>Organisation internationale de normalisation. ISO 27048: 2011, <em>Radioprotection &ndash; Estimation de la dose interne dans le cadre de la surveillance des travailleurs en cas d&rsquo;exposition aux rayonnements</em>.</li>
<li>Toohey, R. E., L. Bertelli, S. L. Sugarman, A. L. Wiley et D. M. Christensen. &laquo; <span lang="en">Dose Coefficients for Intakes of Radionuclides via Contaminated Wounds</span> &raquo;, <em>Health Physics</em>, Vol. 100, n<sup>>o</sup> 5, 2011.</li>
<li>Health Physics Society. ANSI/HPS N13.39&ndash;2001, <span lang="en"><em>American National Standard for Design of Internal Dosimetry Programs</em></span>, McLean, Virginia.</li>  	<li>CIPR. Publication 107 de la CIRP, <span lang="en"><em>Nuclear Decay Data for Dosimetric Calculations</em></span>, Vol. 38, n<sup>o</sup> 3, 2008.</li>
<li>Kramer, G. H., et S. Yiu. &laquo; <span lang="en">The Canadian National Calibration Reference Centre for In-Vivo Monitoring: Thyroid Monitoring. Part VI: Choosing a Detector for Either I-125 and/or I-131</span>, &raquo; <em>Journal canadien des techniques en radiation m&eacute;dicale</em>, vol. 27, n<sup>o</sup> 2, 1996.</li>  	<li>Burns, L. C., et al. <span lang="en"><em>The Thyroid Intercomparison Program</em></span>, Human Monitoring Laboratory Technical Report, HMLTD-88&ndash;3, Sant&eacute; Canada, 1996, Ottawa.</li>
<li>Kramer, G. H., et D. P. Meyerhof. &laquo; <span lang="en">The Canadian National Calibration Reference Centre for In-Vivo Monitoring: Thyroid Monitoring Part III: A Basic Calibration Procedure for Thyroid Monitoring</span>, &raquo; <em>Journal canadien des techniques en radiation m&eacute;dicale</em>, volume 25, n<sup>o</sup> 2, 1994.</li>
<li>NIST Physical Measurement Laboratory 2015. <span lang="en">Atomic Weights and Isotopic Compositions</span>. (http://www.nist.gov/pml/data/comp)</li>
<li>SENES Consultants. <span lang="en"><em>Evaluation of Default Annual Limit on Intake (ALI) for Yellowcake and Uranium Ore</em></span>, CNSC-RSP-0297, 2013.</li>   </ol>
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
<h2 id="addInfo">Renseignements suppl&eacute;mentaires</h2>  <p>Les documents suivants ne sont pas mentionn&eacute;s dans le pr&eacute;sent document d&rsquo;application de la r&eacute;glementation, mais ils contiennent des renseignements qui pourraient &ecirc;tre utiles aux lecteurs.</p>
<ul>
<li>Comit&eacute; consultatif de la radioprotection. CCRP 17, <em>Rapport sur la dosim&eacute;trie externe professionnelle au Canada</em>, 1995.</li>
<li>American National Standards Institute. ANSI/HPS N13.30-2011 (R2017), <span lang="en"><em>Performance Criteria for Radiobioassay</em></span>, 2017.</li>
<li>American National Standards Institute/Health Physics Society. ANSI/HPS N.13.4.1, <span lang="en"><em>Criteria for Performing Multiple Dosimetry</em></span>, Washington, 1997.</li>
<li>Becker, D. V., et al. <span lang="en"><em>Society of Nuclear Medicine Procedure Guideline for Thyroid Uptake Measurement</em></span>, Society of Nuclear Medicine, Version 2.0, Reston, Virginia, 1999.</li>
<li>Birchall, A., M. Puncher, J. W. Marsh, K. Davis, M. R. Bailey, N. S. Jarvis, A. D. Peach, M. D. Dorrian et A. C. James. &laquo; <span lang="en">IMBA Professional Plus: a flexible approach to internal dosimetry</span> &raquo;, <em>Radiation Protection Dosimetry</em>, Vol. 125, n<sup>os</sup> 1&ndash;4, pp. 194&ndash;197, 2007.</li>
<li>Christensen, P., H. W. Julius et T.O. Marshall. &laquo; <span lang="en">Implication of New CEC Recommendations for Individual Monitoring for External Radiation Doses to the Skin and the Extremities</span> &raquo;, <em>Radiation Protection Dosimetry</em>, Vol. 39, pp. 91&ndash;94, Oxford, 1991.</li>
<li>Faulkner, K. et R. M. Harrison. &laquo; <span lang="en">Estimation of Effective Dose Equivalent to Staff in Diagnostic Radiology</span> &raquo;, <em>Physics in Medicine and Biology</em>, n<sup>o</sup> 33, Institute of Physics, Philadelphia, 1988.</li>
<li>AIEA. AIEA-TECDOC-869, <span lang="en"><em>Assessment and treatment of external and internal radionuclide contamination</em></span>, Vienne, 1996.</li>
<li>Kramer, G. H. et S. Yiu. &laquo; <span lang="en">Examination of the Effect of Counting Geometry on I&ndash;125 Monitoring using MCNP</span> &raquo;, <em>Health Physics</em>, Vol. 72, n<sup>o</sup> 3, 1997.</li>  	<li>National Council on Radiation Protection and Measurements. NCRP Report n<sup>o</sup> 122: <span lang="en"><em>Use of Personal Monitors to Estimate Effective Dose Equivalent and Effective Dose to Workers for External Exposure to Low-LET Radiation</em></span>, Bethesda, MD, 1995</li>
<li>Reece, W.D., R. Harty, L. W. Brackenbush et P. L. Roberson. NUREG/CR-4297, <span lang="en"><em>Extremity Monitoring: Considerations for Use, Dosimeter Placement, and Evaluation</em></span>, Nuclear Regulatory Commission des &Eacute;tats-Unis, Washington, 1985.</li>
<li>Rosenstein, M. et E. W. Webster. &laquo; <span lang="en">Effective dose to personnel wearing protective aprons during fluoroscopy and interventional radiology</span> &raquo;, <em>Health Physics</em>, Vol. 67, pp. 88&ndash;89. Philadelphie, 1994.</li>
</ul>
<div className="wb-fnote" role="note">
<section>
<h2 id="fnb">Notes de bas de page</h2>
<dl>
<dt>Note de bas de page 1</dt>
<dd id="fnb1">
<p>La consultation du public concernant le REGDOC-2.7.1, <em>Radioprotection</em>, a lieu en parall&egrave;le avec celle du pr&eacute;sent REGDOC. Voir le <a href="/fra/acts-and-regulations/regulatory-documents/index">site Web de la CCSN</a> pour de plus amples renseignements.</p>
<p className="fn-rtn"><a href="#fnb1-ref"><span className="wb-inv">Return to </span>1<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Note de bas de page 2</dt>
<dd id="fnb2">
<p>Le REGDOC-2.7.2, tome II, <em>Exigences techniques et relatives aux syst&egrave;mes de gestion de la qualit&eacute; pour les services de dosim&eacute;trie</em> [2], devrait &ecirc;tre publi&eacute; au d&eacute;but du printemps 2019. Voir le <a href="/fra/acts-and-regulations/regulatory-documents/index">site Web de la CCSN</a> pour de plus amples renseignements.</p>
<p className="fn-rtn"><a href="#fnb2-ref"><span className="wb-inv">Return to </span>2<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Note de bas de page 3</dt>
<dd id="fnb3">
<p>Le FDN est un registre des doses professionnelles re&ccedil;ues par les travailleurs canadiens. Le FDN comprend &eacute;galement les doses re&ccedil;ues par les travailleurs &eacute;trangers. Cependant, ces doses ne sont pas utilis&eacute;es pour l&rsquo;analyse des donn&eacute;es du FDN. Elles sont incluses afin que les services de dosim&eacute;trie puissent se conformer &agrave; l&rsquo;article 19 du RRP.</p>
<p className="fn-rtn"><a href="#fnb3-ref"><span className="wb-inv">Return to </span>3<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Note de bas de page 4</dt>
<dd id="fnb4">
<p>Les particules b&ecirc;ta comprennent les &eacute;lectrons et les positrons &eacute;mis par un noyau pendant la d&eacute;sint&eacute;gration radioactive, tandis que les &eacute;lectrons comprennent les &eacute;lectrons Auger et les &eacute;lectrons de conversion &eacute;mis pendant la d&eacute;sint&eacute;gration radioactive, ainsi que les faisceaux d&rsquo;&eacute;lectrons et de positrons produits par des dispositifs artificiels.</p>
<p className="fn-rtn"><a href="#fnb4-ref"><span className="wb-inv">Return to </span>4<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Note de bas de page 5</dt>
<dd id="fnb5">
<p>Pour les particules alpha d&rsquo;une &eacute;nergie comprise entre 4 MeV et 7 MeV. Voir le document du NIST, &laquo; <span lang="en"><em>Stopping-Power &amp; Range Tables for Electrons, Protons, and Helium Ions</em></span> &raquo; [5].</p>
<p className="fn-rtn"><a href="#fnb5-ref"><span className="wb-inv">Return to </span>5<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Note de bas de page 6</dt>
<dd id="fnb6">
<p>Pour les particules b&ecirc;ta d&rsquo;une &eacute;nergie comprise entre 10 keV et 2,5 MeV. Voir le document du NIST, &laquo; <span lang="en"><em>Stopping-Power &amp; Range Tables for Electrons, Protons, and Helium Ions</em></span> &raquo; [5].</p>
<p className="fn-rtn"><a href="#fnb6-ref"><span className="wb-inv">Return to </span>6<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Note de bas de page 7</dt>
<dd id="fnb7">
<p>Dans un champ de rayonnement puls&eacute;, les d&eacute;bits de dose varient p&eacute;riodiquement en intensit&eacute; au fil du temps.</p>
<p className="fn-rtn"><a href="#fnb7-ref"><span className="wb-inv">Return to </span>7<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Note de bas de page 8</dt>
<dd id="fnb8">
<p>Publication 119 de la CIPR [12] ou version publi&eacute;e la plus r&eacute;cente.</p>
<p className="fn-rtn"><a href="#fnb8-ref"><span className="wb-inv">Return to </span>8<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Note de bas de page 9</dt>
<dd id="fnb9">
<p>La CIPR classe les particules inhal&eacute;es en trois types, selon leur taux d&rsquo;absorption dans le sang &agrave; partir des poumons. Les particules de type F ont une clairance rapide, &eacute;tant retenues dans les voies respiratoires avec une p&eacute;riode radioactive biologique de moins d&rsquo;une heure. Les mati&egrave;res de type M ont un taux de clairance mod&eacute;r&eacute; des voies respiratoires (en g&eacute;n&eacute;ral, 90 % des particules inhal&eacute;es ont une p&eacute;riode radioactive biologique d&rsquo;environ 100 jours), tandis que les mati&egrave;res de type S ont une clairance lente et pourraient &ecirc;tre retenues dans les voies respiratoires pour des p&eacute;riodes sup&eacute;rieures &agrave; un an (en g&eacute;n&eacute;ral, 99,9 % des particules de type S inhal&eacute;es ont une p&eacute;riode radioactive biologique d&rsquo;environ 7 000 jours). Les caract&eacute;ristiques chimiques d&rsquo;un compos&eacute; d&eacute;terminent son type d&rsquo;absorption.</p>
<p className="fn-rtn"><a href="#fnb9-ref"><span className="wb-inv">Return to </span>9<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Note de bas de page 10</dt>
<dd id="fnb10">
<p>Les mod&egrave;les courants de biocin&eacute;tique de la CIPR se trouvent dans les publications n<sup>o</sup> 67 [16] et n<sup>o</sup> 69 [17] de la CIPR, par exemple, ou encore dans les mod&egrave;les les plus r&eacute;cents, lorsqu&rsquo;ils sont publi&eacute;s.</p>
<p className="fn-rtn"><a href="#fnb10-ref"><span className="wb-inv">Return to </span>10<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Note de bas de page 11</dt>
<dd id="fnb11">
<p>L&rsquo;absorption des radionucl&eacute;ides depuis les voies respiratoires vers le sang est d&eacute;crite &agrave; l&rsquo;aide de <em>f<sub>r</sub></em>, qui est la fraction de l&rsquo;activit&eacute; d&eacute;pos&eacute;e dans les voies respiratoires et qui se dissout rapidement, &agrave; un taux <em>s<sub>r</sub></em> (j<sup>-1</sup>). Le reste de l&rsquo;activit&eacute; d&eacute;pos&eacute;e dans les voies respiratoires se dissout plus lentement, &agrave; un taux <em>s<sub>s</sub></em> (j<sup>-1</sup>). Voir la publication 66 de la CIPR, <span lang="en"><em>Human Respiratory Tract Model for Radiological Protection</em></span> [15].</p>
<p className="fn-rtn"><a href="#fnb11-ref"><span className="wb-inv">Return to </span>11<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Note de bas de page 12</dt>
<dd id="fnb12">
<p>On suppose qu&rsquo;il s&rsquo;agit de vapeur d&rsquo;iode &eacute;l&eacute;mentaire.</p>
<p className="fn-rtn"><a href="#fnb12-ref"><span className="wb-inv">Return to </span>12<span className="wb-inv"> referrer</span></a></p>
</dd>
</dl>
</section>  </div>
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