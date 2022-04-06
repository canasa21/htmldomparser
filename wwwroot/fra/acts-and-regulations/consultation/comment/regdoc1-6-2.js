import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "fr",
                pageTitle: "REGDOC-1.6.2, Élaboration et mise en œuvre d'un programme de radioprotection efficace pour les permis de substances nucléaires et d'appareils à rayonnement", 
                dateModified: "2019-11-18",
                langToggleUrl: "/eng/acts-and-regulations/consultation/comment/regdoc1-6-2"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<h2>Pr&eacute;face</h2>  <p>Le pr&eacute;sent document d&rsquo;application de la r&eacute;glementation de la Commission canadienne de s&ucirc;ret&eacute; nucl&eacute;aire (CCSN) s&rsquo;inscrit dans la s&eacute;rie Substances nucl&eacute;aires et appareils &agrave; rayonnement. La liste compl&egrave;te des s&eacute;ries de documents d&rsquo;application de la r&eacute;glementation figure &agrave; la fin du pr&eacute;sent document et elle peut &ecirc;tre consult&eacute;e &agrave; partir du <a href="/fra/acts-and-regulations/regulatory-documents/index">site Web de la CCSN</a>.</p>  <p>Le document d&rsquo;application de la r&eacute;glementation REGDOC-1.6.2, <em>&Eacute;laboration et mise en &oelig;uvre d&rsquo;un programme de radioprotection efficace pour les permis de substances nucl&eacute;aires et d&rsquo;appareils &agrave; rayonnement</em> fournit de l&rsquo;orientation aux demandeurs et aux titulaires de permis de substances nucl&eacute;aires et d&rsquo;appareils &agrave; rayonnement sur l&rsquo;&eacute;laboration, la mise en &oelig;uvre, la gestion et l&rsquo;&eacute;valuation de leurs programmes de radioprotection.</p>  <p>Pour en savoir plus sur la mise en &oelig;uvre des documents d&rsquo;application de la r&eacute;glementation et sur l&rsquo;approche graduelle, consultez le REGDOC-3.5.3, <em>Principes fondamentaux de r&eacute;glementation</em>.</p>
<div className="alert alert-info module-simplify ">  <p>Le terme &laquo; doit &raquo; est employ&eacute; pour exprimer une exigence &agrave; laquelle le titulaire ou le demandeur de permis doit se conformer; le terme &laquo; devrait &raquo; d&eacute;note une orientation ou une mesure conseill&eacute;e; le terme &laquo; pourrait &raquo; exprime une option ou une mesure conseill&eacute;e ou acceptable dans les limites de ce document d&rsquo;application de la r&eacute;glementation; et le terme &laquo; peut &raquo; exprime une possibilit&eacute; ou une capacit&eacute;.</p>  <p>Aucune information contenue dans le pr&eacute;sent document ne doit &ecirc;tre interpr&eacute;t&eacute;e comme lib&eacute;rant le titulaire de permis de toute autre exigence pertinente. Le titulaire de permis a la responsabilit&eacute; de prendre connaissance de tous les r&egrave;glements et de toutes les conditions de permis applicables et d&rsquo;y adh&eacute;rer.</p>  </div>  <br />
<div className="col-md-12 module-table-contents">
<h2>Table des mati&egrave;res</h2>
<ul>
<li><a href="#sec1">1. Introduction</a>
<ul>
<li><a href="#sec1-1">1.1 Objet</a></li>
<li><a href="#sec1-2">1.2 Port&eacute;e</a></li>
<li><a href="#sec1-3">1.3 L&eacute;gislation pertinente</a></li>
</ul></li>
<li><a href="#sec2">2. Responsabilit&eacute;s en mati&egrave;re de radioprotection</a></li>
<li><a href="#sec3">3. Responsable de la radioprotection</a>
<ul>
<li><a href="#sec3-1">3.1 Fonctions</a></li>
<li><a href="#sec3-2">3.2 Pouvoirs du RRP</a></li>
<li><a href="#sec3-3">3.3 Qualifications</a></li>
<li><a href="#sec3-4">3.4 Exp&eacute;rience</a></li>
<li><a href="#sec3-5">3.5 Formation continue</a></li>
<li><a href="#sec3-6">3.6 Dotation des RRP</a>
<ul>
<li><a href="#sec3-6-1">3.6.1 RRP suppl&eacute;ant</a></li>
<li><a href="#sec3-6-2">3.6.2 RRP de site</a></li>
<li><a href="#sec3-6-3">3.6.3 Consultant</a></li>
</ul></li>
</ul></li>
<li><a href="#sec4">4. &Eacute;laboration et mise en &oelig;uvre d&rsquo;un PRP efficace</a></li>
<li><a href="#sec5">5. Syst&egrave;me de gestion</a>
<ul>
<li><a href="#sec5-1">5.1. Culture de s&ucirc;ret&eacute;</a></li>
<li><a href="#sec5-2">5.2. &Eacute;valuation du PRP</a>
<ul>
<li><a href="#sec5-2-1">5.2.1 Auto-&eacute;valuations</a></li>
<li><a href="#sec5-2-2">5.2.2 &Eacute;valuation ind&eacute;pendante</a></li>
<li><a href="#sec5-2-3">5.2.3 Examens de la gestion</a></li>
</ul></li>
<li><a href="#sec5-3">5.3 Enqu&ecirc;te sur un &eacute;v&eacute;nement</a></li>
<li><a href="#sec5-4">5.4 Documentation</a></li>
</ul></li>
<li><a href="#AppA">Annexe A : Fonctions du RRP</a></li>
<li><a href="#AppB">Annexe B : Comit&eacute; de radioprotection</a>
<ul>
<li><a href="#B-1">B.1 R&ocirc;le et responsabilit&eacute;s du CRP</a></li>
<li><a href="#B-2">B.2 Composition</a></li>
<li><a href="#B-3">B.3 Cadre de r&eacute;f&eacute;rence</a></li>
<li><a href="#B-4">B.4 R&eacute;unions</a></li>
</ul></li>
<li><a href="#glossary">Glossaire</a></li>
<li><a href="#ref">R&eacute;f&eacute;rences</a></li>   </ul>  </div>  <div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="1"></div>
<h2 id="sec1">1. Introduction</h2>  <p>Les titulaires de permis de la CCSN sont tenus de mettre en &oelig;uvre un programme de radioprotection (PRP) conform&eacute;ment &agrave; l&rsquo;article 4 du R&egrave;glement sur la radioprotection. Ils doivent de plus s&rsquo;assurer que leur PRP correspond &agrave; la port&eacute;e et aux risques associ&eacute;s &agrave; leur utilisation de substances nucl&eacute;aires et d&rsquo;appareils &agrave; rayonnement.</p>   <p>Un PRP efficace est essentiel &agrave; la protection de l&rsquo;environnement et &agrave; la sant&eacute; et la s&eacute;curit&eacute; des personnes. Un PRP est requis pour chaque titulaire de permis de substances nucl&eacute;aires et d&rsquo;appareils &agrave; rayonnement. Ces programmes garantissent le respect des conditions de permis et des exigences r&eacute;glementaires. Il est &eacute;galement important pour la radioprotection que les doses de rayonnement soient maintenues au niveau le plus bas qu&rsquo;il soit raisonnablement possible d&rsquo;atteindre (principe ALARA), en tenant compte des facteurs sociaux et &eacute;conomiques.</p>  <p>Un PRP propos&eacute; doit accompagner la demande de permis. La demande devrait d&eacute;montrer, &agrave; l&rsquo;aide de donn&eacute;es probantes, comment le PRP r&eacute;pond aux exigences r&eacute;glementaires.</p>  <p>Les sections 2 et 3 du pr&eacute;sent document d&eacute;crivent les r&ocirc;les et les responsabilit&eacute;s du responsable de la radioprotection (RRP), qui est charg&eacute; de superviser le PRP. Les sections 4 et 5 donnent de l&rsquo;information sur les &eacute;l&eacute;ments qui devraient &ecirc;tre pris en compte lors de l&rsquo;&eacute;laboration, de la mise en &oelig;uvre, de la gestion et de l&rsquo;&eacute;valuation d&rsquo;un PRP.</p>
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
<h3 id="sec1-1">1.1 Objet</h3>  <p>Le pr&eacute;sent document fournit de l&rsquo;orientation aux demandeurs et aux titulaires de permis de substances nucl&eacute;aires et d&rsquo;appareils &agrave; rayonnement sur la fa&ccedil;on d&rsquo;&eacute;laborer, de mettre en &oelig;uvre, de g&eacute;rer et d&rsquo;&eacute;valuer un PRP.</p>
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
<h3 id="sec1-2">1.2 Port&eacute;e</h3>  <p>Ce document contient de l&rsquo;orientation &agrave; l&rsquo;intention des demandeurs et des titulaires de permis de substances nucl&eacute;aires et d&rsquo;appareils &agrave; rayonnement, autoris&eacute;s aux termes d&rsquo;autres cat&eacute;gories de permis, peuvent aussi consulter le pr&eacute;sent document &agrave; des fins d&rsquo;information.</p>   <p>L&rsquo;annexe B fournit des renseignements aux demandeurs et aux titulaires de permis qui ont un programme complexe, mais elle pourrait &eacute;galement &ecirc;tre utile aux autres demandeurs. Les caract&eacute;ristiques d&rsquo;un programme complexe comprennent, entre autres :</p>
<ul>
<li>le permis d&rsquo;utilisation globale de substances nucl&eacute;aires (type d&rsquo;utilisation 815)</li>
<li>plusieurs emplacements autoris&eacute;s</li>
<li>plusieurs permis d&eacute;livr&eacute;s au m&ecirc;me emplacement</li>
<li>plusieurs permis d&eacute;livr&eacute;s pour la m&ecirc;me organisation</li>  	</ul>  <p>Les demandeurs et les titulaires de permis qui ont un programme complexe ont des types d&rsquo;utilisation &agrave; risque mod&eacute;r&eacute; et &eacute;lev&eacute;, tels que d&eacute;finis &agrave; l&rsquo;annexe B du REGDOC-1.6.1, <em>Guide de pr&eacute;sentation d&rsquo;une demande de permis : Substances nucl&eacute;aires et appareils &agrave; rayonnement</em> [1]. Les titulaires ou demandeurs de permis qui ne savent pas s&rsquo;ils ont un programme complexe devraient communiquer avec la CCSN pour obtenir des pr&eacute;cisions.</p>
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
<h3 id="sec1-3">1.3 L&eacute;gislation pertinente</h3>  <p>Les dispositions l&eacute;gislatives de la <a href="https://laws-lois.justice.gc.ca/fra/lois/N-28.3/"><em>Loi sur la s&ucirc;ret&eacute; et la r&eacute;glementation nucl&eacute;aires</em></a> (LSRN) et des r&egrave;glements pris en vertu de celle-ci qui s&rsquo;appliquent au pr&eacute;sent document sont les suivants :</p>
<ul>
<li>LSRN, articles 24, 26 et 27</li>
<li><a href="https://laws.justice.gc.ca/fra/reglements/DORS-2003-212/TexteComplet.html"><em>R&egrave;glement sur les droits pour le recouvrement des co&ucirc;ts de la Commission canadienne de s&ucirc;ret&eacute; nucl&eacute;aire</em></a>, partie 3</li>
<li><a href="https://laws-lois.justice.gc.ca/fra/reglements/DORS-2000-202/"><em>R&egrave;glement g&eacute;n&eacute;ral sur la s&ucirc;ret&eacute; et la r&eacute;glementation nucl&eacute;aires</em></a>, articles 3 &agrave; 7, 10, 12, 15, 17, 27, 28, 29 et 31</li>
<li><a href="https://laws-lois.justice.gc.ca/fra/reglements/DORS-2000-210/"><em>R&egrave;glement sur le contr&ocirc;le de l&rsquo;importation et de l&rsquo;exportation aux fins de la non-prolif&eacute;ration nucl&eacute;aire</em></a>, article 3</li>
<li><a href="https://laws.justice.gc.ca/fra/reglements/DORS-2000-209/page-1.html"><em>R&egrave;glement sur la s&eacute;curit&eacute; nucl&eacute;aire</em></a>, articles 3, 4 et 5</li>
<li><a href="https://laws-lois.justice.gc.ca/fra/reglements/DORS-2000-207/"><em>R&egrave;glement sur les substances nucl&eacute;aires et les appareils &agrave; rayonnement</em></a>, articles 3 &agrave; 9, 11, 16, 17, 18, 20, 22, 23, 24, 30 &agrave; 38 et annexe 1</li>
<li><a href="https://laws-lois.justice.gc.ca/fra/reglements/DORS-2015-145/"><em>R&egrave;glement sur l&rsquo;emballage et le transport des substances nucl&eacute;aires (2015)</em></a>, articles 19, 25, 26, 29, 37, 40 et 42(2)</li>
<li><a href="https://laws-lois.justice.gc.ca/fra/reglements/DORS-2000-203/"><em>R&egrave;glement sur la radioprotection</em></a>, articles 3 &agrave; 14, 20, 21, 22 et 24</li>  	</ul>
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
<h2 id="sec2">2. Responsabilit&eacute;s en mati&egrave;re de radioprotection</h2>  <p>Le titulaire de permis est responsable de la radioprotection et de la r&eacute;alisation de toutes les activit&eacute;s autoris&eacute;es dans le cadre de son permis de la CCSN. Le responsable de la demande occupe un poste de haute direction et dispose de pouvoirs suffisants en mati&egrave;re de ressources financi&egrave;res et humaines; il a donc la responsabilit&eacute; ultime de veiller &agrave; ce qu&rsquo;un PRP soit mis en &oelig;uvre conform&eacute;ment &agrave; toutes les exigences r&eacute;glementaires. Le responsable de la demande devrait d&eacute;l&eacute;guer les fonctions de surveillance quotidienne du PRP, mais non l&rsquo;obligation de rendre compte, &agrave; une personne appel&eacute;e le responsable de la radioprotection (RRP). Le REGDOC-1.6.1, <em>Pr&eacute;sentation d&rsquo;une demande de permis : Substances nucl&eacute;aires et appareils &agrave; rayonnement</em> [1] fournit de plus amples renseignements sur les responsabilit&eacute;s du responsable de la demande.</p>  <p>RRP est la d&eacute;signation couramment attribu&eacute;e &agrave; un sp&eacute;cialiste de la radioprotection qui administre un PRP au quotidien. Les RRP sont d&eacute;sign&eacute;s par le responsable de la demande en vertu de l&rsquo;article 15 du <em>R&egrave;glement g&eacute;n&eacute;ral sur la s&ucirc;ret&eacute; et la r&eacute;glementation nucl&eacute;aires</em>. Le responsable de la demande d&eacute;signe le RRP en remplissant le formulaire de <a href="/fra/nuclear-substances/licensing-nuclear-substances-and-radiation-devices/index">demande de d&eacute;signation d&rsquo;un nouveau responsable de la radioprotection</a>. En signant ce formulaire, le RRP accepte de superviser la mise en &oelig;uvre et la gestion du PRP et de communiquer avec la CCSN pour toute question relative au PRP. La section 3 d&eacute;crit les r&ocirc;les et les responsabilit&eacute;s du RRP.</p>  <p>Le responsable de la demande devrait s&rsquo;assurer que des ressources suffisantes sont allou&eacute;es au RRP afin de respecter toutes les obligations r&eacute;glementaires, notamment :</p>  <ul>
<li>des ressources humaines pour aider &agrave; g&eacute;rer et &agrave; ex&eacute;cuter les t&acirc;ches requises</li>
<li>des pouvoirs suffisants pour satisfaire aux exigences r&eacute;glementaires (voir la section 3.2)</li>
<li>une aide administrative pour la correspondance, les exigences en mati&egrave;re de tenue de dossiers et la gestion des documents associ&eacute;s &agrave; un permis de la CCSN</li>
<li>des ressources financi&egrave;res pour satisfaire aux attentes r&eacute;glementaires et r&eacute;gler les cas de non-conformit&eacute;, notamment pour la formation du personnel et l&rsquo;achat d&rsquo;&eacute;quipement de surveillance du rayonnement ou d&rsquo;autre &eacute;quipement</li>  	</ul>
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
<h2 id="sec3">3. Responsable de la radioprotection</h2>  <p>Le RRP est une composante essentielle d&rsquo;un PRP efficace. Il doit avoir le pouvoir d&rsquo;appliquer les politiques et les proc&eacute;dures &eacute;tablies dans le cadre du PRP afin de respecter toutes les obligations r&eacute;glementaires.</p>  <p>Selon la structure et la taille de l&rsquo;organisation autoris&eacute;e, un RRP pourrait &ecirc;tre d&eacute;sign&eacute; pour superviser la gestion du PRP &agrave; l&rsquo;&eacute;chelle de l&rsquo;organisation (RRP d&rsquo;entreprise) et &ecirc;tre aid&eacute; par d&rsquo;autres personnes pour superviser le programme en place sur le site (RRP de site) afin de veiller &agrave; ce que le PRP soit mis en &oelig;uvre et appliqu&eacute; efficacement &agrave; l&rsquo;&eacute;chelle locale.</p>
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
<h3 id="sec3-1">3.1 Fonctions</h3>  <p>Le responsable de la demande doit s&rsquo;assurer que des ressources ad&eacute;quates sont disponibles pour mettre en &oelig;uvre le PRP. Il devrait veiller &agrave; ce que des t&acirc;ches ou des priorit&eacute;s concurrentes ne soient pas attribu&eacute;es au RRP, ce qui pourrait nuire consid&eacute;rablement &agrave; sa capacit&eacute; ou &agrave; sa disponibilit&eacute; de g&eacute;rer le PRP. Les responsabilit&eacute;s d&rsquo;un RRP ne sont pas compl&eacute;mentaires &agrave; une autre t&acirc;che; elles sont essentielles pour assurer l&rsquo;utilisation s&eacute;curitaire des substances nucl&eacute;aires et des appareils &agrave; rayonnement.</p>   <p>&Agrave; titre de pratique exemplaire, le responsable de la demande devrait fournir au RRP une description des fonctions ainsi que le nombre d&rsquo;heures que ce dernier devrait lui consacrer. La capacit&eacute; du RRP de g&eacute;rer le PRP devrait &ecirc;tre &eacute;valu&eacute;e par le responsable de la demande &agrave; des intervalles d&eacute;finis, afin de d&eacute;terminer si des heures additionnelles ou d&rsquo;autres formes d&rsquo;aide sont n&eacute;cessaires.</p>   <p>Le RRP assure habituellement une surveillance administrative quotidienne de la radioprotection. Une liste non exhaustive des fonctions figure &agrave; l&rsquo;annexe A. Les comp&eacute;tences en mati&egrave;re de formation et d&rsquo;exp&eacute;rience pratique exig&eacute;es d&rsquo;un RRP sont fond&eacute;es sur l&rsquo;ampleur, la port&eacute;e, la complexit&eacute; ou la diversit&eacute; des activit&eacute;s autoris&eacute;es.</p>   <p>Le RRP doit disposer de suffisamment de temps pour bien planifier, surveiller, g&eacute;rer et r&eacute;aliser les activit&eacute;s n&eacute;cessaires en vue de d&eacute;montrer la conformit&eacute; &agrave; toutes les exigences r&eacute;glementaires. Le temps allou&eacute; sera estim&eacute; par le demandeur ou le titulaire de permis en tenant compte du nombre de travailleurs, de l&rsquo;ampleur des op&eacute;rations et de la disparit&eacute; g&eacute;ographique des sites de l&rsquo;organisation. Pour la supervision d&rsquo;un PRP complexe, le fardeau de la r&eacute;glementation devrait &ecirc;tre assum&eacute; par un RRP &agrave; temps plein. Pour les types d&rsquo;utilisation &agrave; faible risque, le RRP pourrait g&eacute;rer le PRP &agrave; temps partiel, tout en assumant d&rsquo;autres fonctions. Selon la taille de l&rsquo;organisation et la disparit&eacute; g&eacute;ographique des sites, un soutien suppl&eacute;mentaire peut &ecirc;tre n&eacute;cessaire, comme il est d&eacute;crit &agrave; la section 3.6.2.</p>
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
<h3 id="sec3-2">3.2	Pouvoirs du RRP</h3>  <p>Le RRP doit avoir les pouvoirs n&eacute;cessaires pour mettre en &oelig;uvre le PRP, d&eacute;celer les cas de non-conformit&eacute;, prendre des mesures correctives et v&eacute;rifier la mise en &oelig;uvre et l&rsquo;efficacit&eacute; des mesures correctives. Le RRP doit avoir le pouvoir de mettre fin &agrave; toute pratique de travail non s&eacute;curitaire qui a ou pourrait avoir une incidence n&eacute;gative sur la sant&eacute; et la s&eacute;curit&eacute; de toute personne, peu importe l&rsquo;incidence que cette pratique pourrait avoir sur les activit&eacute;s de l&rsquo;organisation.</p>  <p>Plus pr&eacute;cis&eacute;ment, le RRP doit avoir les pouvoirs n&eacute;cessaires pour :</p>  <ol>
<li>communiquer directement avec le responsable de la demande</li>
<li>agir &agrave; titre de signataire autoris&eacute; pour toute question relative &agrave; la radioprotection, au permis de la CCSN et aux obligations du titulaire de permis</li>
<li>arr&ecirc;ter imm&eacute;diatement les travaux, les t&acirc;ches ou les projets que le RRP juge dangereux ou qui pourraient contrevenir &agrave; la LSRN, &agrave; ses r&egrave;glements d&rsquo;application ou au permis de la CCSN</li>
<li>mettre en &oelig;uvre et faire appliquer les modifications de travaux, de t&acirc;ches ou de projets qui sont n&eacute;cessaires pour veiller &agrave; ce que le titulaire de permis demeure conforme ou le redevienne</li>
<li>modifier les politiques ou les proc&eacute;dures, et veiller &agrave; ce que les modifications soient document&eacute;es et communiqu&eacute;es aux travailleurs</li>  	</ol>
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
<h3 id="sec3-3">3.3 Qualifications</h3>  <p>Le RRP doit poss&eacute;der des connaissances suffisantes pour g&eacute;rer efficacement les activit&eacute;s li&eacute;es aux substances nucl&eacute;aires et aux appareils &agrave; rayonnement conform&eacute;ment aux conditions du permis de la CCSN.</p>   <p>Le RRP est invit&eacute; &agrave; recourir aux programmes d&rsquo;accr&eacute;ditation des RRP qui offrent des cours permettant d&rsquo;acqu&eacute;rir les qualifications requises pour l&rsquo;utilisation propos&eacute;e de substances nucl&eacute;aires et d&rsquo;&eacute;quipement r&eacute;glement&eacute;. Les objectifs d&rsquo;apprentissage doivent correspondre aux fonctions du RRP. Le caract&egrave;re ad&eacute;quat d&rsquo;un fournisseur de formation peut &ecirc;tre &eacute;valu&eacute; en fonction des commentaires d&rsquo;anciens clients. Le RRP doit avoir une bonne connaissance des exigences r&eacute;glementaires et des attentes de la CCSN, y compris :</p>
<ul>
<li>la LSRN et les r&egrave;glements connexes</li>
<li>les documents d&rsquo;application de la r&eacute;glementation de la CCSN</li>
<li>les programmes d&rsquo;autorisation et de v&eacute;rification de la conformit&eacute; de la CCSN</li>
<li>les pouvoirs et responsabilit&eacute;s d&eacute;finis par le RRP</li>
<li>la s&eacute;curit&eacute; des substances nucl&eacute;aires</li>  	</ul>  <p>D&rsquo;autres connaissances fond&eacute;es sur les activit&eacute;s autoris&eacute;es propos&eacute;es peuvent comprendre :</p>  <ul>
<li>les activit&eacute;s de r&eacute;cup&eacute;ration des sources pour les permis de gammagraphie industrielle</li>
<li>le transport de marchandises dangereuses pour les personnes qui exp&eacute;dient ou re&ccedil;oivent des substances nucl&eacute;aires et des appareils &agrave; rayonnement</li>
<li>les techniques de contr&ocirc;le de la contamination et de gestion des d&eacute;versements pour les personnes qui utilisent des substances nucl&eacute;aires non scell&eacute;es</li>
<li>la gestion et l&rsquo;utilisation s&eacute;curitaires des substances nucl&eacute;aires et des appareils &agrave; rayonnement, y compris les consid&eacute;rations particuli&egrave;res (p. ex., espaces clos, mati&egrave;res biodangereuses)</li>  	</ul>
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
<h3 id="sec3-4">3.4 Exp&eacute;rience</h3>  <p>Le RRP devrait avoir une exp&eacute;rience de travail pertinente et pratique dans l&rsquo;ex&eacute;cution des activit&eacute;s autoris&eacute;es propos&eacute;es.</p>   <p>La CCSN s&rsquo;attend &agrave; ce que le RRP connaisse la nature et les caract&eacute;ristiques des substances nucl&eacute;aires et des appareils &agrave; rayonnement qui doivent &ecirc;tre autoris&eacute;s en vertu du permis de la CCSN, les activit&eacute;s autoris&eacute;es propos&eacute;es qui seront exerc&eacute;es et les risques accessoires qui pourraient avoir une incidence sur les activit&eacute;s autoris&eacute;es.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.5"></div>
<h3 id="sec3-5">3.5	Formation continue</h3>  <p>Les RRP doivent tenir &agrave; jour leurs comp&eacute;tences en suivant une formation continue. Le besoin d&rsquo;une formation de recyclage devrait &ecirc;tre d&eacute;termin&eacute; en fonction d&rsquo;une &eacute;valuation de la complexit&eacute;, de l&rsquo;importance et de la fr&eacute;quence des t&acirc;ches attribu&eacute;es. Une analyse des besoins en mati&egrave;re de formation devrait &ecirc;tre effectu&eacute;e lorsque des modifications sont apport&eacute;es aux activit&eacute;s ou aux responsabilit&eacute;s des RRP.</p>   <p>La fr&eacute;quence et l&rsquo;&eacute;tendue de la formation de recyclage devraient &ecirc;tre d&eacute;termin&eacute;es, d&eacute;finies et document&eacute;es. Elles varient selon les activit&eacute;s autoris&eacute;es par le permis de la CCSN et les capacit&eacute;s du RRP.</p>  <p>Au cours de la formation de recyclage, les RRP devraient r&eacute;viser leurs connaissances des exigences r&eacute;glementaires de la CCSN. Les RRP devraient &ecirc;tre inform&eacute;s des modifications aux exigences r&eacute;glementaires qui pourraient avoir une incidence sur les activit&eacute;s autoris&eacute;es en vertu du permis de la CCSN. La formation de recyclage devrait &ecirc;tre offerte au moins tous les cinq ans et lorsque des modifications sont apport&eacute;es aux exigences r&eacute;glementaires ou aux conditions de permis, ou dans le cas du retour au travail d&rsquo;un RRP apr&egrave;s une longue absence.</p>  <p>Une formation de recyclage p&eacute;riodique pour les travailleurs et le RRP devrait faire partie du programme de formation compris dans le PRP. De plus amples renseignements sur les programmes de formation en radioprotection figurent &agrave; l&rsquo;annexe A du REGDOC-2.2.2, <em>Formation du personnel</em> [2].</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.6"></div>
<h3 id="sec3-6">3.6	Dotation des RRP</h3>  <p>L&rsquo;efficacit&eacute; du PRP doit &ecirc;tre maintenue pendant la r&eacute;alisation des activit&eacute;s autoris&eacute;es. Un RRP suppl&eacute;ant d&eacute;sign&eacute; est donc n&eacute;cessaire pendant l&rsquo;absence temporaire d&rsquo;un RRP. De plus, un RRP de site peut &ecirc;tre requis lorsque plusieurs emplacements autoris&eacute;s font partie d&rsquo;un m&ecirc;me PRP.</p>  <p>Le RRP d&rsquo;entreprise ou la personne &agrave; qui on a confi&eacute; ses fonctions, comme un RRP suppl&eacute;ant, un RRP de site ou un consultant, devrait &ecirc;tre disponible pendant l&rsquo;ex&eacute;cution des activit&eacute;s autoris&eacute;es.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.6.1"></div>
<h4 id="sec3-6-1">3.6.1	RRP suppl&eacute;ant</h4>  <p>Pendant l&rsquo;absence du RRP, un responsable suppl&eacute;ant doit &ecirc;tre d&eacute;sign&eacute; pour exercer les activit&eacute;s autoris&eacute;es et veiller au maintien de la surveillance continue du PRP. Le RRP suppl&eacute;ant peut &eacute;galement participer &agrave; la gestion quotidienne du PRP &agrave; titre d&rsquo;adjoint au RRP.</p>   <p>Pour les absences de courte dur&eacute;e, comme les vacances, les maladies ou les blessures, le RRP suppl&eacute;ant devrait &agrave; tout le moins conna&icirc;tre les exigences r&eacute;glementaires de l&rsquo;activit&eacute; autoris&eacute;e et toutes les exigences de d&eacute;claration. La CCSN devrait &ecirc;tre avis&eacute;e en cas d&rsquo;absences de courte dur&eacute;e. Il est recommand&eacute; de donner de la formation aux RRP suppl&eacute;ants.</p>  <p>Dans le cas d&rsquo;absences de longue dur&eacute;e, comme un cong&eacute; de maternit&eacute; ou parental, une affectation temporaire &agrave; d&rsquo;autres t&acirc;ches, une blessure ou une maladie grave, le RRP suppl&eacute;ant doit avoir le m&ecirc;me niveau de connaissances et de formation sur les activit&eacute;s autoris&eacute;es et les exigences r&eacute;glementaires que le RRP. Le formulaire <a href="/fra/pdfs/Forms_Applications/appoint-a-radiation-safety-officer-form-201904-fra.pdf">Demande de d&eacute;signation d&rsquo;un responsable de la radioprotection ou responsable de la radioprotection suppl&eacute;ant</a> doit &ecirc;tre rempli et envoy&eacute; pour aviser la CCSN du remplacement.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.6.2"></div>
<h4 id="sec3-6-2">3.6.2	RRP de site</h4>  <p>Lorsqu&rsquo;une demande de permis pour r&eacute;aliser des activit&eacute;s autoris&eacute;es dans plus d&rsquo;un emplacement g&eacute;ographique est pr&eacute;sent&eacute;e, un RRP de site devrait &ecirc;tre nomm&eacute; &agrave; chaque emplacement autoris&eacute; pour mettre en &oelig;uvre et tenir &agrave; jour le PRP. La d&eacute;signation d&rsquo;un RRP de site vise &agrave; assurer une surveillance directe du PRP &agrave; tous les emplacements. Le RRP de site peut &ecirc;tre d&eacute;sign&eacute; par le RRP d&rsquo;entreprise.</p>  <p>Le RRP de site devrait faire rapport au RRP d&rsquo;entreprise sur toutes les questions li&eacute;es &agrave; la radioprotection. Le RRP de site devrait avoir des niveaux d&rsquo;exp&eacute;rience, de formation et d&rsquo;autorit&eacute; comparables &agrave; ceux du RRP d&rsquo;entreprise. Les r&ocirc;les et les responsabilit&eacute;s ainsi que les pouvoirs hi&eacute;rarchiques du RRP de site doivent &ecirc;tre clairement d&eacute;finis. Il devrait &ecirc;tre clair que le RRP d&rsquo;entreprise demeure la personne responsable de la supervision de l&rsquo;ensemble du PRP et qu&rsquo;il est le principal agent de liaison avec la CCSN.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.6.3"></div>
<h4 id="sec3-6-3">3.6.3 Consultant</h4>  <p>S&rsquo;il n&rsquo;y a pas de personnel qualifi&eacute; ou disponible pour assumer le r&ocirc;le de RRP, il convient de retenir les services d&rsquo;un consultant ind&eacute;pendant pour agir &agrave; titre de RRP d&rsquo;entreprise ou de RRP de site. Le consultant doit poss&eacute;der le m&ecirc;me niveau de connaissances et de formation sur les activit&eacute;s autoris&eacute;es et les exigences r&eacute;glementaires que ce qui est attendu d&rsquo;un RRP. De plus, le demandeur ou le titulaire de permis doit s&rsquo;assurer que le consultant peut passer suffisamment de temps &agrave; l&rsquo;emplacement autoris&eacute; pour superviser le PRP, m&ecirc;me si cette personne g&egrave;re plusieurs programmes simultan&eacute;ment.</p>
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
<h2 id="sec4">4. &Eacute;laboration et mise en &oelig;uvre d&rsquo;un PRP efficace</h2>  <p>Le PRP pr&eacute;sent&eacute; dans le cadre de la demande de permis constitue la proposition du titulaire de permis sur la fa&ccedil;on dont il entend se conformer aux exigences r&eacute;glementaires. &Agrave; cette fin, le PRP fait l&rsquo;objet d&rsquo;un renvoi dans l&rsquo;annexe du permis, et sa mise en &oelig;uvre est v&eacute;rifi&eacute;e pendant les inspections de la CCSN.</p>  <p>Un PRP efficace est habituellement &eacute;labor&eacute;, mis en &oelig;uvre et g&eacute;r&eacute; en fonction de l&rsquo;activit&eacute; autoris&eacute;e, de la complexit&eacute; et de la situation du titulaire de permis. Le PRP est normalement &eacute;labor&eacute; par le responsable de la radioprotection en collaboration avec des sp&eacute;cialistes et d&rsquo;autres membres du personnel concern&eacute;s. Pour assurer la radioprotection et la conformit&eacute; g&eacute;n&eacute;rale aux exigences pertinentes, le PRP comprend des lignes de conduite pour l&rsquo;exploitation qui d&eacute;montrent son efficacit&eacute; et d&eacute;crivent comment il sera tenu &agrave; jour. Le REGDOC-1.6.1, <em>Guide de pr&eacute;sentation d&rsquo;une demande de permis : Substances nucl&eacute;aires et appareils &agrave; rayonnement</em> [1] dresse la liste compl&egrave;te des politiques et proc&eacute;dures qui doivent &ecirc;tre pr&eacute;sent&eacute;es dans le cadre d&rsquo;une demande de permis. Des renseignements suppl&eacute;mentaires sur le contenu d&rsquo;un PRP sont pr&eacute;sent&eacute;s dans le REGDOC-2.7.1, <em>Radioprotection</em>.</p>   <p>Les &eacute;l&eacute;ments fondamentaux d&rsquo;un PRP sont les proc&eacute;dures et les personnes. Le PRP comprend des proc&eacute;dures qui &eacute;clairent et orientent les personnes qui utilisent les substances nucl&eacute;aires et les appareils &agrave; rayonnement ou qui en supervisent l&rsquo;utilisation. Afin de maintenir un contr&ocirc;le et une surveillance efficaces du PRP, les pouvoirs ainsi que les ressources financi&egrave;res et mat&eacute;rielles n&eacute;cessaires doivent &ecirc;tre attribu&eacute;es au RRP, notamment les installations et l&rsquo;&eacute;quipement n&eacute;cessaires &agrave; l&rsquo;&eacute;laboration, &agrave; la mise en &oelig;uvre et &agrave; l&rsquo;entretien du programme.</p>
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
<h2 id="sec5">5. Syst&egrave;me de gestion</h2>  <p>Un syst&egrave;me de gestion efficace permet de veiller &agrave; ce que la s&ucirc;ret&eacute; soit prise en consid&eacute;ration dans toutes les d&eacute;cisions et mesures. Il veille &agrave; ce que l&rsquo;organisation s&rsquo;aligne sur l&rsquo;orientation de la haute direction et soit en mesure d&rsquo;&eacute;tablir, de communiquer et d&rsquo;atteindre les objectifs et les priorit&eacute;s qu&rsquo;elle s&rsquo;est fix&eacute;s. Le REGDOC-2.1.1, <em>Syst&egrave;me de gestion</em> [3] d&eacute;crit les principes du syst&egrave;me de gestion, notamment :</p>
<ol>
<li>les activit&eacute;s de l&rsquo;entreprise sont d&eacute;finies, organis&eacute;es et ma&icirc;tris&eacute;es</li>
<li>l&rsquo;organisation est d&eacute;finie et comprise</li>
<li>le personnel est comp&eacute;tent pour les activit&eacute;s qu&rsquo;il ex&eacute;cute</li>
<li>le personnel sait ce qu&rsquo;on attend de lui</li>
<li>les activit&eacute;s sont planifi&eacute;es</li>
<li>l&rsquo;exp&eacute;rience est recherch&eacute;e, partag&eacute;e et utilis&eacute;e</li>
<li>l&rsquo;information est communiqu&eacute;e &agrave; temps aux personnes qui en ont besoin</li>
<li>le rendement des activit&eacute;s est contr&ocirc;l&eacute;</li>
<li>la pr&eacute;paration et la diffusion des documents sont contr&ocirc;l&eacute;es</li>
<li>le travail est v&eacute;rifi&eacute; pour confirmer qu&rsquo;il est correct</li>
<li>les probl&egrave;mes sont cern&eacute;s et r&eacute;solus</li>
<li>les modifications sont contr&ocirc;l&eacute;es</li>
<li>des dossiers sont conserv&eacute;s</li>
<li>des &eacute;valuations sont effectu&eacute;es</li>  	</ol>  <p>Les sous-sections qui suivent d&eacute;crivent quatre composantes importantes du syst&egrave;me de gestion qui devraient &ecirc;tre incluses dans le PRP, soit la culture de s&ucirc;ret&eacute;, l&rsquo;&eacute;valuation du PRP, l&rsquo;enqu&ecirc;te sur les &eacute;v&eacute;nements et la documentation.</p>
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
<h3 id="sec5-1">5.1	Culture de s&ucirc;ret&eacute;</h3>  <p>Une saine culture de s&ucirc;ret&eacute; est un facteur cl&eacute; pour r&eacute;duire la probabilit&eacute; que des &eacute;v&eacute;nements li&eacute;s &agrave; la s&ucirc;ret&eacute; se produisent et pour att&eacute;nuer les r&eacute;percussions potentielles. La promotion d&rsquo;une saine culture de s&ucirc;ret&eacute; est un aspect important pour veiller &agrave; ce que la surveillance de la radioprotection soit suffisante selon la complexit&eacute; et les risques d&eacute;finis inh&eacute;rents aux activit&eacute;s autoris&eacute;es et au PRP.</p>   <p>La CCSN d&eacute;finit la culture de s&ucirc;ret&eacute; comme &laquo; les caract&eacute;ristiques de l&rsquo;environnement de travail, notamment les valeurs, les r&egrave;gles et la compr&eacute;hension commune qui influent sur les perceptions et les attitudes des employ&eacute;s &agrave; l&rsquo;&eacute;gard de l&rsquo;importance que le titulaire de permis accorde &agrave; la s&ucirc;ret&eacute; &raquo;.</p>  <p>Une saine culture de s&ucirc;ret&eacute; &eacute;volue &agrave; partir de l&rsquo;&eacute;laboration et de l&rsquo;application d&rsquo;une attitude de questionnement &agrave; tous les niveaux de l&rsquo;organisation, y compris la direction. Favoriser une saine culture de s&ucirc;ret&eacute; exige du soutien et de l&rsquo;engagement &agrave; tous les niveaux de gestion au sein de l&rsquo;organisation. Une saine culture exige aussi l&rsquo;engagement mutuel du responsable de la demande, des RRP et des travailleurs. Les gestionnaires de tous les niveaux devraient s&rsquo;efforcer de promouvoir une saine culture de s&ucirc;ret&eacute; en milieu de travail. On s&rsquo;attend &agrave; ce que tous les membres de l&rsquo;organisation contribuent &agrave; favoriser et &agrave; soutenir cette culture.</p>   <p>Pour promouvoir une saine culture de s&ucirc;ret&eacute;, il est important de comprendre la culture de s&ucirc;ret&eacute; d&rsquo;une organisation. L&rsquo;&eacute;tablissement d&rsquo;une compr&eacute;hension commune des perceptions et des attitudes des travailleurs et de la direction est essentielle au maintien et &agrave; l&rsquo;am&eacute;lioration de la radioprotection.</p>  <p>Les demandeurs et les titulaires de permis peuvent favoriser une saine culture de s&ucirc;ret&eacute; de la mani&egrave;re suivante :</p>
<ol>
<li>encourager l&rsquo;engagement envers la protection et la s&ucirc;ret&eacute; &agrave; tous les niveaux de l&rsquo;organisation</li>
<li>veiller &agrave; ce que tous les employ&eacute;s comprennent bien les principes de la culture de s&ucirc;ret&eacute; au sein de l&rsquo;organisation</li>
<li>fournir les moyens gr&acirc;ce auxquels l&rsquo;organisation aide les individus et les &eacute;quipes &agrave; ex&eacute;cuter leurs t&acirc;ches en toute s&ucirc;ret&eacute;, compte tenu de l&rsquo;interaction entre les personnes, la technologie et l&rsquo;organisation</li>
<li>encourager les travailleurs, leurs repr&eacute;sentants et les autres personnes concern&eacute;es &agrave; participer &agrave; l&rsquo;&eacute;laboration et &agrave; la mise en &oelig;uvre de politiques, de r&egrave;gles et de proc&eacute;dures en mati&egrave;re de protection et de s&ucirc;ret&eacute;</li>
<li>responsabiliser les personnes &agrave; tous les &eacute;chelons de l&rsquo;organisation &agrave; l&rsquo;&eacute;gard de la protection et de la s&ucirc;ret&eacute;</li>
<li>encourager des &eacute;changes ouverts au sujet de la protection et de la s&ucirc;ret&eacute; au sein de l&rsquo;organisation et avec les parties concern&eacute;es, le cas &eacute;ch&eacute;ant</li>
<li>encourager une attitude de remise en question des hypoth&egrave;ses dominantes en ce qui concerne la planification et l&rsquo;ex&eacute;cution des travaux</li>
<li>encourager l&rsquo;&eacute;laboration et le maintien de processus qui favorisent la transparence, l&rsquo;apprentissage continu et l&rsquo;am&eacute;lioration</li>
<li>fournir les moyens gr&acirc;ce auxquels l&rsquo;organisation cherche en permanence &agrave; mieux comprendre, &agrave; d&eacute;velopper et renforcer sa culture de s&ucirc;ret&eacute;</li>
<li>offrir un milieu de travail s&eacute;curitaire qui permet de signaler les incidents sans crainte de repr&eacute;sailles</li>  	</ol>  <p>De temps &agrave; autre, il est important de r&eacute;fl&eacute;chir &agrave; la maturit&eacute; de la culture de s&ucirc;ret&eacute; de l&rsquo;organisation. &Agrave; l&rsquo;&eacute;tape 1, on est conscient des risques associ&eacute;s &agrave; un travail, on a la capacit&eacute; d&rsquo;utiliser l&rsquo;&eacute;quipement de s&eacute;curit&eacute; appropri&eacute; ou des m&eacute;thodes de ma&icirc;trise du travail ad&eacute;quates pour att&eacute;nuer ces risques, et la direction renforce des pratiques de s&eacute;curit&eacute; appropri&eacute;es. Pour de plus amples renseignements et de l&rsquo;orientation sur la fa&ccedil;on d&rsquo;&eacute;valuer et d&rsquo;am&eacute;liorer la culture de s&ucirc;ret&eacute;, voir l&rsquo;annexe C du REGDOC-2.1.2, <em>Culture de s&ucirc;ret&eacute;</em> [4].</p>
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
<h3 id="sec5-2">5.2	&Eacute;valuation du PRP</h3>  <p>Le PRP devrait indiquer des moyens d&rsquo;&eacute;valuer p&eacute;riodiquement le rendement du programme. Pour ce faire, on peut recourir &agrave; des auto-&eacute;valuations, des &eacute;valuations ind&eacute;pendantes ou des examens de gestion. Le PRP devrait d&eacute;finir le ou les types d&rsquo;&eacute;valuation &agrave; effectuer, la fr&eacute;quence et la ou les m&eacute;thodes &agrave; utiliser. <strong>Remarque :</strong> Une inspection effectu&eacute;e par un inspecteur de la CCSN n&rsquo;est pas consid&eacute;r&eacute;e comme une activit&eacute; d&rsquo;&eacute;valuation.</p>  <p>S&rsquo;ils ont &eacute;t&eacute; &eacute;tablis, les r&eacute;sultats de ces &eacute;valuations devraient &ecirc;tre document&eacute;s et communiqu&eacute;s au responsable de la demande et au comit&eacute; de radioprotection (CRP). Un suivi des lacunes relev&eacute;es et de leurs mesures correctives devrait &ecirc;tre effectu&eacute; afin de s&rsquo;assurer que les cas de non-conformit&eacute; sont r&eacute;gl&eacute;s correctement.</p>  <p>Les &eacute;valuations permettent de s&rsquo;assurer que le PRP est ad&eacute;quat, &agrave; jour et mis en &oelig;uvre conform&eacute;ment aux principes ALARA. Les renseignements recueillis au cours des &eacute;valuations peuvent servir &agrave; corriger les lacunes relev&eacute;es.</p>  <p>Bien que le PRP doive &ecirc;tre &eacute;valu&eacute; au moins tous les cinq ans, la fr&eacute;quence des &eacute;valuations d&eacute;pendra de la complexit&eacute; du programme et du risque associ&eacute; &agrave; l&rsquo;activit&eacute; autoris&eacute;e. La fr&eacute;quence et la ou les m&eacute;thodes choisies devraient &ecirc;tre d&eacute;finies et document&eacute;es dans le PRP. Il faudra peut-&ecirc;tre &eacute;largir les &eacute;valuations pour tenir compte des diff&eacute;rents types d&rsquo;utilisation, des dangers associ&eacute;s et des mesures d&rsquo;att&eacute;nuation.</p>  <p>Ces &eacute;valuations peuvent &ecirc;tre effectu&eacute;es &agrave; l&rsquo;aide de listes de contr&ocirc;le, d&rsquo;examens documentaires, d&rsquo;observations du travail r&eacute;el effectu&eacute; par rapport aux proc&eacute;dures et d&rsquo;entrevues avec le personnel. Voici quelques exemples d&rsquo;&eacute;l&eacute;ments qui pourraient &ecirc;tre compris dans l&rsquo;&eacute;valuation du PRP. Il ne s&rsquo;agit pas d&rsquo;une liste exhaustive :</p>
<ol>
<li>documentation sur la gouvernance</li>
<li>autorisation et formation des travailleurs</li>
<li>activit&eacute;s autoris&eacute;es men&eacute;es par les travailleurs</li>
<li>inventaire des sources scell&eacute;es, des sources non scell&eacute;es et des appareils &agrave; rayonnement</li>
<li>activit&eacute;s autoris&eacute;es (utilisation, stockage, transfert, importation et exportation)</li>
<li>&eacute;preuves d&rsquo;&eacute;tanch&eacute;it&eacute; des sources scell&eacute;es</li>
<li>lieu de l&rsquo;utilisation</li>
<li>registres de doses (dosim&eacute;trie et estimations des doses)</li>
<li>politiques et proc&eacute;dures visant &agrave; garantir la conformit&eacute; aux exigences r&eacute;glementaires en vigueur</li>
<li>aires d&rsquo;utilisation et de stockage (contamination et d&eacute;bit de dose)</li>
<li>&eacute;talonnage des instruments de d&eacute;tection du rayonnement &agrave; la fr&eacute;quence prescrite</li>
<li>manutention de d&eacute;chets</li>
<li>registres de d&eacute;classement</li>
<li>&eacute;v&eacute;nements ant&eacute;rieurs</li>
<li>conservation des dossiers</li>
<li>utilisation appropri&eacute;e des panneaux de mise en garde contre les rayonnements</li>
<li>coordonn&eacute;es des personnes &agrave; contacter en cas d&rsquo;urgence (jour et nuit)</li>
<li>classification des pi&egrave;ces</li>
<li>contr&ocirc;le des pi&egrave;ces autoris&eacute;es (accessibles aux utilisateurs autoris&eacute;s)</li>
<li>exigences en mati&egrave;re de transport</li>
<li>restrictions et exigences en mati&egrave;re d&rsquo;importation et d&rsquo;exportation</li>
<li>exactitude et applicabilit&eacute; des proc&eacute;dures de gestion des urgences et des &eacute;v&eacute;nements impr&eacute;vus</li>  	</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="5.2.1"></div>
<h4 id="sec5-2-1">5.2.1	Auto-&eacute;valuations</h4>  <p>Les auto-&eacute;valuations, comme les v&eacute;rifications internes ou les inspections, sont essentielles pour &eacute;valuer la mise en &oelig;uvre et l&rsquo;efficacit&eacute; du PRP. Les auto-&eacute;valuations sont g&eacute;n&eacute;ralement effectu&eacute;es par le RRP afin d&rsquo;&eacute;valuer les pratiques de travail au regard des exigences &eacute;tablies dans le PRP et de cerner les possibilit&eacute;s d&rsquo;am&eacute;lioration. Ces &eacute;valuations visent &eacute;galement &agrave; confirmer que le travail effectu&eacute; dans le domaine de responsabilit&eacute;s du RRP r&eacute;pond aux exigences du PRP. Elles peuvent &ecirc;tre planifi&eacute;es ou non.</p>  <p>Le PRP devrait pr&eacute;ciser la fr&eacute;quence des auto-&eacute;valuations et d&eacute;crire les &eacute;l&eacute;ments qui seront &eacute;valu&eacute;s. La fr&eacute;quence devrait &ecirc;tre d&eacute;termin&eacute;e en fonction de la complexit&eacute; des activit&eacute;s autoris&eacute;es et des r&eacute;sultats des &eacute;valuations pr&eacute;c&eacute;dentes, particuli&egrave;rement en ce qui concerne les lacunes relev&eacute;es. Selon les pratiques exemplaires, les auto-&eacute;valuations devraient &ecirc;tre effectu&eacute;es au moins une fois par ann&eacute;e ou en r&eacute;ponse &agrave; des modifications importantes dans les activit&eacute;s autoris&eacute;es de l&rsquo;organisation ou &agrave; des lacunes relev&eacute;es en mati&egrave;re de s&ucirc;ret&eacute;.</p>   <p>La liste d&rsquo;exemples de <a href="/fra/nuclear-substances/licensing-nuclear-substances-and-radiation-devices/licensing-process/index">fiches d&rsquo;inspection de type II</a> affich&eacute;e sur le site Web de la CCSN peut &ecirc;tre utile pour &eacute;laborer une politique et une proc&eacute;dure d&rsquo;auto-&eacute;valuation.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="5.2.2"></div>
<h4 id="sec5-2-2">5.2.2	&Eacute;valuation ind&eacute;pendante</h4>  <p>Les &eacute;valuations ind&eacute;pendantes sont souvent appel&eacute;es v&eacute;rifications externes et sont planifi&eacute;es et r&eacute;alis&eacute;es par une organisation externe &agrave; des fr&eacute;quences d&eacute;finies. Leur principal objectif est de confirmer que le PRP document&eacute; r&eacute;pond aux exigences et que sa mise en &oelig;uvre est efficace.</p>   <p>Les r&eacute;sultats des &eacute;valuations ind&eacute;pendantes sont communiqu&eacute;s au responsable de la demande ou au cadre qui a suffisamment de pouvoir pour r&eacute;soudre les probl&egrave;mes relev&eacute;s.</p>   <p>Les &eacute;valuations ind&eacute;pendantes devraient &ecirc;tre fond&eacute;es sur les r&eacute;sultats des auto-&eacute;valuations. Elles devraient &eacute;galement &ecirc;tre effectu&eacute;es apr&egrave;s la mise en &oelig;uvre de modifications importantes dans les pratiques de travail.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="5.2.3"></div>
<h4 id="sec5-2-3">5.2.3	Examens de la gestion</h4>  <p>Les examens de la gestion sont effectu&eacute;s par le responsable de la demande &agrave; une fr&eacute;quence d&eacute;termin&eacute;e dans le cadre d&rsquo;une activit&eacute; de surveillance visant &agrave; &eacute;valuer l&rsquo;efficacit&eacute; du PRP et &agrave; apporter des am&eacute;liorations de fa&ccedil;on proactive au besoin.</p>   <p>La fr&eacute;quence de ces examens devrait &ecirc;tre d&eacute;finie dans le PRP et devrait &ecirc;tre fond&eacute;e sur la complexit&eacute; des activit&eacute;s autoris&eacute;es, ou sur des modifications importantes apport&eacute;es aux activit&eacute;s autoris&eacute;es ou &agrave; la suite d&rsquo;enqu&ecirc;tes sur des &eacute;v&eacute;nements.</p>   <p>Les r&eacute;sultats des auto-&eacute;valuations et des &eacute;valuations ind&eacute;pendantes devraient servir de base aux d&eacute;cisions et aux mesures prises lors des r&eacute;unions sur l&rsquo;examen de la gestion. Les examens de la gestion doivent &ecirc;tre document&eacute;s et communiqu&eacute;s au personnel au besoin. Les probl&egrave;mes relev&eacute;s devraient faire l&rsquo;objet d&rsquo;un suivi, et des mesures correctives appropri&eacute;es devraient &ecirc;tre &eacute;tablies de la fa&ccedil;on d&eacute;crite dans le PRP.</p>
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
<h3 id="sec5-3">5.3	Enqu&ecirc;te sur un &eacute;v&eacute;nement</h3>  <p>Conform&eacute;ment aux exigences r&eacute;glementaires &eacute;tablies dans le R&egrave;glement g&eacute;n&eacute;ral sur la s&ucirc;ret&eacute; et la r&eacute;glementation nucl&eacute;aires, le R&egrave;glement sur la radioprotection et le <em>R&egrave;glement sur l&rsquo;emballage et le transport des substances nucl&eacute;aires (2015)</em>, une enqu&ecirc;te doit &ecirc;tre men&eacute;e pour d&eacute;terminer la cause probable d&rsquo;un &eacute;v&eacute;nement. Une enqu&ecirc;te sur un &eacute;v&eacute;nement est un processus formel visant &agrave; d&eacute;terminer la ou les causes probables d&rsquo;un &eacute;v&eacute;nement, y compris les probl&egrave;mes techniques et les facteurs organisationnels sous-jacents. Ce processus sert &eacute;galement &agrave; &eacute;laborer des mesures correctives pour r&eacute;tablir l&rsquo;efficacit&eacute; du PRP et &eacute;viter qu&rsquo;un &eacute;v&eacute;nement semblable se produise. Tous les &eacute;v&eacute;nements qui entra&icirc;nent une perte de contr&ocirc;le ou un &eacute;cart par rapport au PRP doivent &ecirc;tre imm&eacute;diatement contr&ocirc;l&eacute;s, document&eacute;s et &eacute;valu&eacute;s pour en d&eacute;terminer l&rsquo;importance.</p>   <p>Lorsque les limites r&eacute;glementaires sont d&eacute;pass&eacute;es ou que des &eacute;v&eacute;nements sont jug&eacute;s syst&eacute;matiques (p. ex., d&eacute;passements r&eacute;currents des seuils d&rsquo;intervention), un rapport d&rsquo;&eacute;v&eacute;nement d&eacute;taill&eacute; doit &ecirc;tre pr&eacute;sent&eacute; au personnel de la CCSN. Ce rapport devrait contenir les renseignements suivants, dans la mesure du possible et selon les besoins :</p>
<ol>
<li>un r&eacute;sum&eacute; des analyses r&eacute;alis&eacute;es, y compris la ou les causes probables et les conclusions tir&eacute;es des enqu&ecirc;tes faisant suite &agrave; l&rsquo;&eacute;v&eacute;nement</li>
<li>une description des effets sur la sant&eacute; et la s&eacute;curit&eacute; des personnes et sur l&rsquo;environnement</li>
<li>la dose efficace et la dose &eacute;quivalente re&ccedil;ues par toute personne en raison de l&rsquo;&eacute;v&eacute;nement, y compris les doses mesur&eacute;es ou estim&eacute;es re&ccedil;ues par le personnel et le public &agrave; la suite de l&rsquo;&eacute;v&eacute;nement</li>
<li>les mesures qui ont &eacute;t&eacute; prises ou propos&eacute;es, y compris les mesures d&eacute;termin&eacute;es et prises pour r&eacute;tablir l&rsquo;efficacit&eacute; du PRP</li>
<li>tout examen d&rsquo;un &eacute;v&eacute;nement comparable</li>  	</ol>  <p>Les mesures correctives prises pour r&eacute;soudre les probl&egrave;mes li&eacute;s &agrave; l&rsquo;&eacute;v&eacute;nement doivent &ecirc;tre accept&eacute;es par le responsable de la demande et le RRP, et leur efficacit&eacute; doit &ecirc;tre &eacute;valu&eacute;e au cours d&rsquo;un examen p&eacute;riodique de la gestion.</p>
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
<h3 id="sec5-4">5.4 Documentation</h3>  <p>Le PRP devrait contenir tous les renseignements n&eacute;cessaires en mati&egrave;re d&rsquo;exploitation pour travailler avec des substances nucl&eacute;aires et des appareils &agrave; rayonnement. Il devrait &ecirc;tre le premier point de r&eacute;f&eacute;rence pour les travailleurs et contenir toutes les politiques et proc&eacute;dures n&eacute;cessaires. Les d&eacute;tails pr&eacute;cis du PRP sont habituellement document&eacute;s dans un manuel de radioprotection, qui est pr&eacute;sent&eacute; dans le cadre de la demande de permis. Le manuel de radioprotection devrait &ecirc;tre sign&eacute; et dat&eacute; par le RRP et le responsable de la demande pour confirmer que la version publi&eacute;e du manuel a &eacute;t&eacute; examin&eacute;e et approuv&eacute;e. Il est recommand&eacute; que le PRP soit examin&eacute; p&eacute;riodiquement et mis &agrave; jour au besoin pour tenir compte des modifications apport&eacute;es aux politiques, aux proc&eacute;dures et aux exigences r&eacute;glementaires. La fr&eacute;quence des examens devrait &ecirc;tre d&eacute;termin&eacute;e, d&eacute;finie et document&eacute;e. Il est important de souligner que le titulaire de permis doit informer le personnel de la CCSN et lui faire part de toute modification apport&eacute;e &agrave; des fins d&rsquo;examen et d&rsquo;approbation avant de mettre en &oelig;uvre la nouvelle version du manuel de radioprotection.</p>   <p>Il est important de s&rsquo;assurer que les r&eacute;visions comprennent le contr&ocirc;le des versions et qu&rsquo;elles soient sign&eacute;es et dat&eacute;es par le RRP et le responsable de la demande. Les travailleurs doivent recevoir une formation sur les modifications apport&eacute;es aux politiques et aux proc&eacute;dures &eacute;nonc&eacute;es dans le manuel de radioprotection. Pour conna&icirc;tre les bonnes pratiques de r&eacute;daction de proc&eacute;dures techniques, consultez les documents suivants :</p>
<ul>
<li><span lang="en"><em>Procedure Writing: Principles and Practices</em></span> [5]</li>
<li><span lang="en"><em>Procedure Writers&rsquo; Manual</em></span> [6]</li>
<li><span lang="en"><em>Procedure Process Description</em></span> [7]</li>
<li><span lang="en"><em>Guidance for Preparing Standard Operating Procedures</em></span></li>
<li><span lang="en"><em>Procedure Writer&rsquo;s Guide, Licensee Document: ML111820250</em></span> [9]</li>  	</ul>
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
<h2 id="AppA">Annexe A : Fonctions du RRP</h2>  <p>Les fonctions du RRP peuvent varier selon l&rsquo;activit&eacute; autoris&eacute;e. La liste suivante contient des exemples de t&acirc;ches qui pourraient &ecirc;tre exig&eacute;es du RRP. Cette liste est class&eacute;e par domaine de s&ucirc;ret&eacute; et de r&eacute;glementation (DSR). Les DSR sont les sujets techniques que la CCSN utilise dans l&rsquo;ensemble des activit&eacute;s r&eacute;glement&eacute;es d&rsquo;une installation afin d&rsquo;&eacute;valuer, d&rsquo;examiner et de v&eacute;rifier les exigences de r&eacute;glementation et le rendement et d&rsquo;en faire rapport.</p>
<em>Sant&eacute; et s&eacute;curit&eacute; classiques</em>  <p>Ce DSR englobe la mise en &oelig;uvre d&rsquo;un programme qui vise &agrave; g&eacute;rer les dangers en mati&egrave;re de s&eacute;curit&eacute; au travail et &agrave; prot&eacute;ger le personnel :</p>
<ul>
<li>mettre fin aux pratiques de travail dangereuses</li>  	</ul>
<em>Gestion des urgences et protection-incendie</em>  <p>Ce DSR englobe les plans d&rsquo;urgence et les programmes de pr&eacute;paration aux situations d&rsquo;urgence pr&eacute;vus en cas d&rsquo;urgence et de situations inhabituelles. Il comprend &eacute;galement tous les r&eacute;sultats de la participation aux exercices :</p>
<ul>
<li>coordonner les interventions d&rsquo;urgence en cas d&rsquo;&eacute;v&eacute;nements mettant en cause des substances nucl&eacute;aires et des appareils &agrave; rayonnement, ou participer &agrave; ces interventions</li>
<li>enqu&ecirc;ter sur tous les &eacute;v&eacute;nements inhabituels, en d&eacute;terminer la cause, d&eacute;terminer les mesures correctives et les mettre en &oelig;uvre</li>  	</ul>
<em>Protection de l&rsquo;environnement</em>  <p>Ce DSR englobe les programmes qui recensent, contr&ocirc;lent et surveillent tous les rejets de substances radioactives et dangereuses provenant des installations ou caus&eacute;s par les activit&eacute;s autoris&eacute;es, ainsi que leurs effets sur l&rsquo;environnement :</p>
<ul>
<li>d&eacute;terminer si des mesures suppl&eacute;mentaires sont requises apr&egrave;s un rejet de substances nucl&eacute;aires dans l&rsquo;environnement</li>  	</ul>
<em>Aptitude fonctionnelle</em>  <p>Ce DSR englobe les activit&eacute;s qui ont une incidence sur l&rsquo;&eacute;tat physique des structures, des syst&egrave;mes et des composants (SSC) afin de s&rsquo;assurer qu&rsquo;ils demeurent efficaces au fil du temps. Il comprend les programmes qui assurent la disponibilit&eacute; de l&rsquo;&eacute;quipement pour ex&eacute;cuter la fonction vis&eacute;e par sa conception lorsque l&rsquo;&eacute;quipement doit servir :</p>
<ul>
<li>s&rsquo;assurer que les sources scell&eacute;es font l&rsquo;objet d&rsquo;essais d&rsquo;&eacute;tanch&eacute;it&eacute; &agrave; la fr&eacute;quence requise et conform&eacute;ment aux exigences r&eacute;glementaires</li>
<li>s&rsquo;assurer que les instruments de surveillance du rayonnement sont &eacute;talonn&eacute;s conform&eacute;ment aux exigences r&eacute;glementaires</li>
<li>maintenir un approvisionnement suffisant d&rsquo;instruments de surveillance du rayonnement capables de d&eacute;tecter les substances nucl&eacute;aires utilis&eacute;es au niveau de contamination le plus bas</li>  	</ul>
<em>Gestion de la performance humaine</em>  <p>Ce DSR englobe les activit&eacute;s qui permettent d&rsquo;atteindre une performance humaine efficace gr&acirc;ce &agrave; l&rsquo;&eacute;laboration et &agrave; la mise en &oelig;uvre de processus qui garantissent que les employ&eacute;s des titulaires de permis sont pr&eacute;sents en nombre suffisant dans tous les secteurs de travail pertinents, et qu&rsquo;ils poss&egrave;dent les connaissances, les comp&eacute;tences, les proc&eacute;dures et les outils dont ils ont besoin pour ex&eacute;cuter leurs t&acirc;ches en toute s&eacute;curit&eacute; :</p>
<ul>
<li>veiller &agrave; ce que les travailleurs charg&eacute;s d&rsquo;utiliser des substances nucl&eacute;aires et des appareils &agrave; rayonnement soient correctement form&eacute;s en radioprotection et &agrave; ce qu&rsquo;ils connaissent bien les proc&eacute;dures en la mati&egrave;re</li>
<li>autoriser les travailleurs qualifi&eacute;s &agrave; utiliser des substances nucl&eacute;aires ou &agrave; faire fonctionner des appareils &agrave; rayonnement</li>
<li>s&rsquo;assurer que l&rsquo;accr&eacute;ditation des op&eacute;rateurs d&rsquo;appareil d&rsquo;exposition est valide</li>
<li>veiller &agrave; ce que les employ&eacute;s auxiliaires (p. ex., commis, pr&eacute;pos&eacute;s au nettoyage et &agrave; l&rsquo;entretien, agents de s&eacute;curit&eacute;) dont les fonctions peuvent &agrave; l&rsquo;occasion les exposer &agrave; des substances nucl&eacute;aires et &agrave; des appareils &agrave; rayonnement re&ccedil;oivent une formation appropri&eacute;e en radioprotection</li>
<li>offrir une formation de recyclage</li>  	</ul>
<em>Syst&egrave;me de gestion</em>  <p>Ce DSR englobe le cadre qui &eacute;tablit les processus et les programmes n&eacute;cessaires pour s&rsquo;assurer qu&rsquo;une organisation atteint ses objectifs en mati&egrave;re de s&ucirc;ret&eacute; et surveille continuellement son rendement par rapport &agrave; ces objectifs, tout en favorisant une saine culture de s&ucirc;ret&eacute; :</p>
<ul>
<li>s&rsquo;assurer que l&rsquo;activit&eacute; autoris&eacute;e est conforme aux exigences r&eacute;glementaires</li>
<li>s&rsquo;assurer que tous les dossiers et rapports sont pr&eacute;par&eacute;s, tenus &agrave; jour et pr&eacute;sent&eacute;s conform&eacute;ment aux conditions de permis et aux exigences r&eacute;glementaires</li>
<li>proposer ou entreprendre des r&eacute;visions aux politiques ou aux proc&eacute;dures et des changements &agrave; la conception de l&rsquo;&eacute;quipement ou des pi&egrave;ces, et pr&eacute;senter des modifications au permis, au besoin</li>
<li>pr&eacute;parer et mettre en &oelig;uvre des mesures correctives pour rem&eacute;dier aux lacunes relev&eacute;es</li>
<li>&eacute;valuer le PRP</li>  	</ul>
<em>Conduite de l&rsquo;exploitation</em>  <p>Ce DSR comprend une pr&eacute;sentation g&eacute;n&eacute;rale de la conduite des activit&eacute;s autoris&eacute;es et des activit&eacute;s permettant d&rsquo;atteindre un rendement efficace :</p>
<ul>
<li>surveiller les questions li&eacute;es &agrave; la manipulation des substances nucl&eacute;aires et des appareils &agrave; rayonnement, conform&eacute;ment aux r&egrave;glements et aux conditions de permis, et donner des conseils ou tenir des consultations &agrave; cet &eacute;gard</li>
<li>&eacute;laborer, mettre en &oelig;uvre, g&eacute;rer et &eacute;valuer un PRP adapt&eacute; &agrave; la port&eacute;e des activit&eacute;s autoris&eacute;es afin d&rsquo;assurer la conformit&eacute; aux exigences r&eacute;glementaires</li>
<li>examiner les demandes concernant l&rsquo;autorisation d&rsquo;acheter ou d&rsquo;utiliser des substances nucl&eacute;aires et des appareils &agrave; rayonnement afin de veiller &agrave; ce que la manipulation et le lieu de stockage propos&eacute;s soient acceptables et conformes au PRP, aux conditions de permis et aux exigences r&eacute;glementaires</li>
<li>&eacute;laborer et mettre en &oelig;uvre des programmes visant &agrave; inspecter et &agrave; examiner les activit&eacute;s autoris&eacute;es, les lieux o&ugrave; se trouvent des substances nucl&eacute;aires et des appareils &agrave; rayonnement, ainsi que la pertinence de la formation des travailleurs, les proc&eacute;dures de s&eacute;curit&eacute; et le milieu de travail</li>
<li>mener des enqu&ecirc;tes sur tous les cas de surexposition au rayonnement ionisant, d&rsquo;accidents et de pertes mettant en cause des substances nucl&eacute;aires et des appareils &agrave; rayonnement afin d&rsquo;&eacute;tablir les faits pertinents ou de confirmer les &eacute;v&eacute;nements, puis recommander des mesures qui permettront d&rsquo;att&eacute;nuer les effets de ces &eacute;v&eacute;nements et d&rsquo;emp&ecirc;cher qu&rsquo;ils ne se reproduisent</li>
<li>veiller &agrave; ce que les &eacute;v&eacute;nements et les r&eacute;sultats des enqu&ecirc;tes connexes soient signal&eacute;s &agrave; la CCSN et aux autres autorit&eacute;s comp&eacute;tentes, conform&eacute;ment aux conditions de permis et aux exigences r&eacute;glementaires</li>
<li>maintenir une pr&eacute;sence en milieu de travail en observant p&eacute;riodiquement le travail afin de favoriser de bonnes pratiques de travail et de pr&eacute;venir les cas de non-conformit&eacute;</li>
<li>administrer ou contr&ocirc;ler la distribution, l&rsquo;utilisation et l&rsquo;entretien des appareils et du mat&eacute;riel de surveillance radiologique du personnel</li>
<li>entretenir des communications ouvertes avec tous les employ&eacute;s et la direction</li>
<li>agir au nom du demandeur dans les communications avec la CCSN</li>
<li>conseiller des employ&eacute;s relativement aux m&eacute;thodes et aux techniques de d&eacute;contamination</li>  	</ul>
<em>Emballage et transport</em>  <p>Ce DSR englobe les programmes li&eacute;s &agrave; l&rsquo;emballage et au transport s&ucirc;rs des substances nucl&eacute;aires &agrave; destination et en provenance de l&rsquo;installation autoris&eacute;e :</p>
<ul>
<li>veiller &agrave; ce que l&rsquo;emballage et le transport des substances nucl&eacute;aires et des appareils &agrave; rayonnement soient conformes au <em>R&egrave;glement sur l&rsquo;emballage et le transport des substances nucl&eacute;aires (2015)</em></li>  	</ul>
<em>Conception mat&eacute;rielle</em>  <p>Ce DSR est li&eacute; aux activit&eacute;s qui ont une incidence sur l&rsquo;aptitude des structures, syst&egrave;mes et composants &agrave; respecter et &agrave; maintenir le fondement de leur conception, compte tenu des nouvelles informations qui apparaissent au fil du temps et des changements qui surviennent dans l&rsquo;environnement externe :</p>
<ul>
<li>s&rsquo;assurer qu&rsquo;un formulaire d&rsquo;&eacute;valuation de la conception est pr&eacute;sent&eacute; et approuv&eacute; pour chaque pi&egrave;ce, zone ou enceinte o&ugrave; des substances nucl&eacute;aires et des appareils &agrave; rayonnement seront utilis&eacute;s ou stock&eacute;s</li>  	</ul>
<em>Radioprotection</em>  <p>Ce DSR englobe la mise en &oelig;uvre d&rsquo;un programme de radioprotection conforme au R&egrave;glement sur la radioprotection. Ce programme doit permettre de faire en sorte que la contamination et les doses de rayonnement re&ccedil;ues sont surveill&eacute;es et maintenues au niveau ALARA :</p>
<ul>
<li>fournir aux travailleurs l&rsquo;&eacute;quipement personnel de d&eacute;tection du rayonnement appropri&eacute;</li>
<li>concevoir et mettre en &oelig;uvre des programmes de surveillance du personnel appropri&eacute;s</li>
<li>examiner les expositions au rayonnement en milieu de travail</li>
<li>recommander des mesures pour r&eacute;duire les expositions au rayonnement en milieu de travail conform&eacute;ment au principe ALARA</li>
<li>informer les travailleurs du secteur nucl&eacute;aire conform&eacute;ment au <em>R&egrave;glement sur la radioprotection</em></li>
<li>concevoir et mettre en &oelig;uvre un programme de contr&ocirc;le radiologique et de surveillance de la contamination, et &eacute;valuer les r&eacute;sultats</li>
<li>&eacute;tablir des seuils administratifs et d&rsquo;intervention internes</li>  	</ul>
<em>Garanties et non-prolif&eacute;ration</em>  <p>Ce DSR englobe les programmes et les activit&eacute;s n&eacute;cessaires au succ&egrave;s de la mise en &oelig;uvre des obligations d&eacute;coulant des accords relatifs aux garanties conclus par le Canada et l&rsquo;Agence internationale de l&rsquo;&eacute;nergie atomique (AIEA), ainsi que toutes les mesures d&eacute;coulant du Trait&eacute; sur la non-prolif&eacute;ration des armes nucl&eacute;aires :</p>
<ul>
<li>assurer la conformit&eacute; aux exigences r&eacute;glementaires relatives aux garanties et &agrave; la non-prolif&eacute;ration</li>  	</ul>
<em>Analyse de la s&ucirc;ret&eacute;</em>  <p>Ce DSR porte sur la tenue &agrave; jour de l&rsquo;analyse de s&ucirc;ret&eacute; qui appuie le dossier de s&ucirc;ret&eacute; global de l&rsquo;installation. Une analyse de la s&ucirc;ret&eacute; est une &eacute;valuation syst&eacute;matique des dangers possibles associ&eacute;s au fonctionnement d&rsquo;une installation ou &agrave; la r&eacute;alisation d&rsquo;une activit&eacute; propos&eacute;e et sert &agrave; examiner l&rsquo;efficacit&eacute; des mesures et des strat&eacute;gies de pr&eacute;vention qui visent &agrave; r&eacute;duire les effets de ces dangers :</p>
<ul>
<li>&eacute;valuer les dangers possibles et d&eacute;terminer les mesures de pr&eacute;vention</li>
<li>g&eacute;rer les questions de s&ucirc;ret&eacute; (y compris des programmes de R-D)</li>  	</ul>
<em>S&eacute;curit&eacute;</em>  <p>Ce DSR englobe les programmes requis pour mettre en application et soutenir les exigences en mati&egrave;re de s&eacute;curit&eacute; :</p>
<ul>
<li>s&rsquo;assurer que des mesures sont en place pour garantir la s&eacute;curit&eacute; physique des sources scell&eacute;es et non scell&eacute;es</li>
<li>s&rsquo;assurer que des mesures de contr&ocirc;le d&rsquo;acc&egrave;s appropri&eacute;es sont en place pour les zones d&eacute;sign&eacute;es</li>
<li>tenir &agrave; jour et communiquer des renseignements pour mettre &agrave; jour le Syst&egrave;me de suivi des sources scell&eacute;es</li>  	</ul>
<em>Gestion des d&eacute;chets</em>  <p>Ce DSR englobe les programmes internes relatifs aux d&eacute;chets qui font partie des op&eacute;rations de l&rsquo;installation jusqu&rsquo;&agrave; ce que les d&eacute;chets en soient retir&eacute;s puis transport&eacute;s vers une installation distincte de gestion des d&eacute;chets. Il englobe &eacute;galement la planification du d&eacute;classement :</p>  <ul>
<li>prendre des dispositions pour le stockage s&eacute;curitaire des substances nucl&eacute;aires et des appareils &agrave; rayonnement</li>
<li>veiller &agrave; la manutention et &agrave; l&rsquo;&eacute;limination s&eacute;curitaires de tous les d&eacute;chets radioactifs conform&eacute;ment aux exigences des autorit&eacute;s locales, provinciales et f&eacute;d&eacute;rales</li>
<li>fournir de l&rsquo;aide dans les t&acirc;ches de d&eacute;classement</li>  	</ul>
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
<h2 id="AppB">Annexe B : Comit&eacute; de radioprotection</h2>  <p>Les renseignements suppl&eacute;mentaires figurant dans cette annexe doivent &ecirc;tre pris en compte lors de l&rsquo;&eacute;laboration d&rsquo;un PRP complexe. Il est recommand&eacute; que les demandeurs et les titulaires de permis ayant des programmes complexes &eacute;tablissent un comit&eacute; de radioprotection (CRP). Le CRP peut avoir des responsabilit&eacute;s organisationnelles en mati&egrave;re de radioprotection ou il peut simplement jouer un r&ocirc;le consultatif ou d&rsquo;&eacute;valuation. Selon la complexit&eacute; et le risque inh&eacute;rents au PRP, le CRP peut exiger que les politiques et proc&eacute;dures d&eacute;sign&eacute;es soient approuv&eacute;es par le comit&eacute; avant leur mise en &oelig;uvre.</p>
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
<h3 id="B-1">B.1 R&ocirc;le et responsabilit&eacute;s du CRP</h3>  <p>Le r&ocirc;le et les responsabilit&eacute;s d&rsquo;un CRP peuvent consister &agrave; fournir des conseils ou des directives sur les questions de radioprotection et &agrave; assurer la mise en &oelig;uvre et la surveillance d&rsquo;un PRP efficace. Ce genre de comit&eacute; est habituellement form&eacute; et maintenu en place avec l&rsquo;approbation du responsable de la demande.</p>  <p>Le CRP travaille avec le responsable de la demande et le RRP pour d&eacute;finir, planifier et contr&ocirc;ler la mise en &oelig;uvre du PRP pour faire en sorte que celui-soit est harmonis&eacute; et int&eacute;gr&eacute; aux objectifs op&eacute;rationnels de base de l&rsquo;activit&eacute; autoris&eacute;e. Par cons&eacute;quent, le CRP devrait participer &agrave; l&rsquo;&eacute;tablissement des politiques et des proc&eacute;dures de gestion du PRP. Le r&ocirc;le du CRP comprend les t&acirc;ches suivantes :</p>
<ol>
<li>assurer une surveillance du PRP en mati&egrave;re de radioprotection</li>
<li>donner des conseils sur les questions de radioprotection, dont l&rsquo;utilisation s&eacute;curitaire des substances nucl&eacute;aires et des appareils &agrave; rayonnement pendant les activit&eacute;s autoris&eacute;es</li>
<li>s&rsquo;assurer que les expositions au rayonnement sont maintenues au niveau ALARA</li>
<li>examiner toutes les utilisations propos&eacute;es des substances nucl&eacute;aires et des appareils &agrave; rayonnement et d&eacute;terminer si elles sont conformes au PRP et aux exigences r&eacute;glementaires</li>
<li>&eacute;valuer le caract&egrave;re ad&eacute;quat et l&rsquo;efficacit&eacute; des programmes de formation</li>
<li>examiner les r&eacute;sultats des &eacute;valuations du PRP</li>
<li>discuter des exp&eacute;riences positives et n&eacute;gatives en mati&egrave;re d&rsquo;exploitation afin de d&eacute;terminer les aspects &agrave; am&eacute;liorer</li>
<li>examiner les rapports concernant des incidents ou des &eacute;v&eacute;nements inhabituels</li>
<li>recommander des mesures correctives ou des am&eacute;liorations lorsque l&rsquo;examen ou l&rsquo;&eacute;valuation r&eacute;v&egrave;le des lacunes</li>
<li>recommander des mesures ou des am&eacute;liorations afin d&rsquo;&eacute;viter que des incidents se reproduisent</li>
<li>informer le responsable de la demande de tout besoin en ressources suppl&eacute;mentaires pour &eacute;tablir, maintenir ou am&eacute;liorer l&rsquo;efficacit&eacute; du PRP</li>  	</ol>  <p>Le CRP doit tenir des registres &eacute;crits de ses r&eacute;unions, comme il est indiqu&eacute; &agrave; la section B.4.</p>
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
<h3 id="B-2">B.2 Composition</h3>  <p>Les CRP devraient &ecirc;tre compos&eacute;s de membres choisis ou nomm&eacute;s en fonction de leurs comp&eacute;tences ou de leur capacit&eacute; &agrave; intervenir dans des dossiers concernant la radioprotection. Ces membres devraient conseiller collectivement leurs gestionnaires et les RRP sur les questions de radioprotection en g&eacute;n&eacute;ral et sur l&rsquo;efficacit&eacute; du PRP au sein de l&rsquo;organisation. Les membres du CRP peuvent participer au comit&eacute; &agrave; temps plein ou &agrave; temps partiel.</p>  <p>Le CRP devrait comprendre des membres de plusieurs disciplines. Le CRP devrait comprendre au moins un RRP d&rsquo;entreprise et un RRP de site, un utilisateur autoris&eacute; de chaque type d&rsquo;activit&eacute; autoris&eacute;e, un repr&eacute;sentant du personnel auxiliaire (p. ex., commis, pr&eacute;pos&eacute;s au nettoyage et &agrave; l&rsquo;entretien, agents de s&eacute;curit&eacute;), un repr&eacute;sentant des services de soins infirmiers, le cas &eacute;ch&eacute;ant (permis de m&eacute;decine nucl&eacute;aire th&eacute;rapeutique) et un repr&eacute;sentant de la direction. Le CRP peut &eacute;galement comprendre des m&eacute;decins, des physiciens et des repr&eacute;sentants de groupes d&rsquo;int&eacute;r&ecirc;t au sein de l&rsquo;&eacute;tablissement, notamment des gestionnaires (cadres), des travailleurs ou d&rsquo;autres groupes particuliers. Il devrait &eacute;galement comprendre un repr&eacute;sentant du comit&eacute; de sant&eacute; et de s&eacute;curit&eacute;. Tous les services dont les activit&eacute;s pr&eacute;sentent une probabilit&eacute; que les employ&eacute;s re&ccedil;oivent une dose professionnelle ou qui ont une incidence sur l&rsquo;exposition au rayonnement ou sur la s&ucirc;ret&eacute; devraient &eacute;galement &ecirc;tre repr&eacute;sent&eacute;s.</p>   <p>Lors de la s&eacute;lection du pr&eacute;sident du comit&eacute;, plusieurs facteurs doivent &ecirc;tre pris en compte, comme la connaissance de la radioprotection et les capacit&eacute;s de leadership. Le pr&eacute;sident devrait avoir suffisamment de temps &agrave; consacrer &agrave; ce poste en plus de ses autres responsabilit&eacute;s. En r&egrave;gle g&eacute;n&eacute;rale, le responsable de la radioprotection ne devrait pas &ecirc;tre nomm&eacute; pr&eacute;sident du CRP, puisque le RRP est charg&eacute; de la surveillance quotidienne du PRP et peut &ecirc;tre m&ecirc;l&eacute; de trop pr&egrave;s aux activit&eacute;s autoris&eacute;es pour &ecirc;tre objectif.</p>  <p>Le pr&eacute;sident doit travailler en &eacute;troite collaboration avec le responsable de la demande afin de veiller &agrave; ce que des d&eacute;cisions &eacute;clair&eacute;es soient prises et ex&eacute;cut&eacute;es.</p>  <p>La participation du RRP d&rsquo;entreprise est essentielle, tout comme celle d&rsquo;un RRP de chaque emplacement autoris&eacute;.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="B.3"></div>
<h3 id="B-3">B.3 Cadre de r&eacute;f&eacute;rence</h3>  <p>Le cadre de r&eacute;f&eacute;rence du CRP varie en fonction de circonstances particuli&egrave;res, comme les d&eacute;cisions de gestion, les proc&eacute;dures g&eacute;n&eacute;rales, les ressources disponibles, les exigences relatives aux permis et l&rsquo;ampleur, la diversit&eacute; ou la complexit&eacute; des activit&eacute;s autoris&eacute;es. Le cadre de r&eacute;f&eacute;rence devrait contenir les renseignements suivants :</p>
<ol>
<li>le syst&egrave;me de prise de d&eacute;cision du comit&eacute;</li>
<li>les exigences en mati&egrave;re de quorum</li>
<li>la composition</li>
<li>les r&ocirc;les et responsabilit&eacute;s du CRP (voir la section B.1)</li>
<li>les r&ocirc;les et responsabilit&eacute;s des membres du CRP</li>
<li>les points requis &agrave; l&rsquo;ordre du jour</li>
<li>la fr&eacute;quence des r&eacute;unions</li>  	</ol>  <p>Le cadre de r&eacute;f&eacute;rence devrait faire partie int&eacute;grante du PRP.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="B.4"></div>
<h3 id="B-4">B.4 R&eacute;unions</h3>  <p>Les r&eacute;unions sont essentielles au bon fonctionnement du comit&eacute; et &agrave; sa capacit&eacute; de surveiller les questions portant sur la radioprotection. Elles sont n&eacute;cessaires &agrave; la prise de d&eacute;cisions, &agrave; la r&eacute;solution de probl&egrave;mes, &agrave; la discussion des enjeux, de m&ecirc;me qu&rsquo;&agrave; l&rsquo;examen et l&rsquo;approbation des politiques et proc&eacute;dures qui constituent le programme de radioprotection.</p>   <p>Le quorum devrait assurer une participation minimale. Le quorum peut &ecirc;tre adopt&eacute; par une majorit&eacute; des membres du comit&eacute;, mais il doit &ecirc;tre d&eacute;fini en fonction des besoins et des objectifs du comit&eacute;.</p>  <p>Une r&eacute;union du CRP devrait avoir lieu au besoin, mais au moins une fois par ann&eacute;e. Les circonstances qui peuvent exiger la tenue d&rsquo;une r&eacute;union extraordinaire devraient &eacute;galement &ecirc;tre d&eacute;crites dans le cadre de r&eacute;f&eacute;rence.</p>   <p>Les proc&egrave;s-verbaux et les mesures connexes doivent &ecirc;tre conserv&eacute;s pour consultation future et distribu&eacute;s &agrave; tous les membres du comit&eacute;. Le proc&egrave;s-verbal doit indiquer la date de la r&eacute;union et les membres qui &eacute;taient pr&eacute;sents ou absents pour d&eacute;montrer que le quorum a &eacute;t&eacute; respect&eacute;, et doit comprendre un r&eacute;sum&eacute; des discussions, des recommandations et des d&eacute;cisions prises au cours de la r&eacute;union.</p>  <p>Le CRP est tributaire de l&rsquo;exp&eacute;rience du responsable de la radioprotection en ce qui concerne les d&eacute;tails du PRP et les exigences r&eacute;glementaires applicables, puisque ses membres n&rsquo;ont pas le m&ecirc;me niveau de connaissances en radioprotection.</p>
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
<h2 id="glossary">Glossaire</h2>  <p>Les d&eacute;finitions des termes utilis&eacute;s dans le pr&eacute;sent document figurent dans le <a href="/pubs_catalogue/uploads_fre/REGDOC-3-6-Glossary-of-CNSC-Terminology-fra.pdf">REGDOC-3.6, <em>Glossaire de la CCSN</em></a>, qui comprend des termes et des d&eacute;finitions tir&eacute;s de la <a href="http://laws-lois.justice.gc.ca/fra/lois/N-28.3/"><em>Loi sur la s&ucirc;ret&eacute; et la r&eacute;glementation nucl&eacute;aires</em></a>, de ses r&egrave;glements d&rsquo;application ainsi que des documents d&rsquo;application de la r&eacute;glementation et d&rsquo;autres publications de la CCSN. Le REGDOC-3.6 est fourni &agrave; titre de r&eacute;f&eacute;rence et pour information.</p>
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
<h2 id="ref">R&eacute;f&eacute;rences</h2>  <ol>  	<li>Commission canadienne de s&ucirc;ret&eacute; nucl&eacute;aire (CCSN). <a href="/fra/acts-and-regulations/regulatory-documents/published/html/regdoc2-2-2-v2/index">REGDOC-1.6.1, <em>Guide de pr&eacute;sentation d&rsquo;une demande de permis : Substances nucl&eacute;aires et appareils &agrave; rayonnement</em></a>, Ottawa, Canada, 2017.</li>
<li>CCSN. <a href="/fra/acts-and-regulations/regulatory-documents/published/html/regdoc2-2-2-v2/index">REGDOC-2.2.2, <em>La formation du personnel</em></a>, Ottawa, Canada, 2016.</li>
<li>CCSN. <a href="/fra/acts-and-regulations/regulatory-documents/published/html/regdoc2-1-1/index">REGDOC-2.1.1, <em>Syst&egrave;me de gestion</em></a>, Ottawa, Canada, 2019.</li>
<li>CCSN. <a href="/fra/acts-and-regulations/regulatory-documents/published/html/regdoc2-1-2/index">REGDOC-2.1.2, <em>Culture de s&ucirc;ret&eacute;</em></a>, Ottawa, Canada, 2018.</li>
<li>Wierenga, D. et coll. <span lang="en"><em>Procedure Writing: Principles and Practices</em></span>, Columbus: Battelle Press, 1993.</li>
<li>Procedure Professionals Association (PPA). <a href="http://www.ppaweb.org/documents/ppa-ap-907-005.pdf"><span lang="en"><em>Procedure Writers&rsquo; Manual</em></span></a>, PPA AP-907-005, &Eacute;tats-Unis, 2016.</li>
<li>PPA. <a href="http://www.ppaweb.org/documents/ppa-ap-907-001.pdf"><span lang="en"><em>Procedure Process Description</em></span></a>, PPA AP-907-001, &Eacute;tats-Unis, 2016.</li>
<li>United States Environmental Protection Agency. <a href="https://www.epa.gov/sites/production/files/2015-06/documents/g6-final.pdf"><span lang="en"><em>Guidance for Preparing Standard Operating Procedures</em></span></a>, EPA QA/G-6, &Eacute;tats-Unis, 2001.</li>
<li>Wisconsin Public Service Corporation. <a href="http://www.nrc.gov/docs/ML1118/ML111820250.pdf"><span lang="en"><em>Procedure Writer&rsquo;s Guide</em></span></a>, U.S. NRC Licensee Document: ML111820250, &Eacute;tats-Unis, 1993.</li>  </ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<h2>S&eacute;ries de documents d&#39;application de la r&eacute;glementation de la CCSN</h2>
<p>Les installations et activit&eacute;s du secteur nucl&eacute;aire du Canada sont r&eacute;glement&eacute;es par la CCSN. En plus de la <em>Loi sur la s&ucirc;ret&eacute; et la r&eacute;glementation nucl&eacute;aires </em>et de ses r&egrave;glements d&#39;application, il pourrait y avoir des exigences en mati&egrave;re de conformit&eacute; &agrave; d&#39;autres outils de r&eacute;glementation, comme les documents d&#39;application de la r&eacute;glementation ou les normes.</p>
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
<li>3.5 Processus et pratiques de la CCSN</li>  	<li>3.6 Glossaire de la CCSN</li>
</ul></li>
</ul>
<p><strong>Remarque&nbsp;:</strong> Les s&eacute;ries de documents d&rsquo;application de la r&eacute;glementation pourraient &ecirc;tre modifi&eacute;es p&eacute;riodiquement par la CCSN. Chaque s&eacute;rie susmentionn&eacute;e peut comprendre plusieurs documents d&rsquo;application de la r&eacute;glementation. Pour obtenir la plus r&eacute;cente <a href="/fra/acts-and-regulations/regulatory-documents/index">liste des documents d&rsquo;application de la r&eacute;glementation</a>, veuillez consulter le site Web de la CCSN.</p>

                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }