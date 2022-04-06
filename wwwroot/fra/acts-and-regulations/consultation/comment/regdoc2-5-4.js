import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "fr",
                pageTitle: "REGDOC-2.5.4 : Conception des mines et des usines de concentration d'uranium : Systèmes de ventilation", 
                dateModified: "2017-01-30",
                langToggleUrl: "/eng/acts-and-regulations/consultation/comment/regdoc2-5-4"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<h2>Pr&eacute;face</h2>  <p>Le document REGDOC-2.5.4, <em>Conception des mines et des usines de  concentration d&rsquo;uranium&nbsp;: Syst&egrave;mes&nbsp;de&nbsp;ventilation</em> fait partie de la s&eacute;rie &laquo;&nbsp;Conception  mat&eacute;rielle&nbsp;&raquo; des documents d&rsquo;application de la&nbsp;r&eacute;glementation de la  CCSN, qui porte &eacute;galement sur la conception des installations dot&eacute;es de  r&eacute;acteurs, des laboratoires et des installations m&eacute;dicales. La liste compl&egrave;te des  s&eacute;ries figure &agrave; la fin de ce document et peut &ecirc;tre consult&eacute;e sur le <a href="http://nuclearsafety.gc.ca/fra/acts-and-regulations/regulatory-documents/index#R13">site Web de la CCSN.</a></p>  <p>Le document vise &agrave; aider les  demandeurs de permis &agrave; se conformer aux exigences relatives &agrave; la pr&eacute;sentation de  renseignements sur la ventilation en vue de la pr&eacute;paration de l&rsquo;emplacement d&rsquo;une  mine ou usine de concentration d&rsquo;uranium, de sa construction, de son exploitation  ou de son d&eacute;classement.</p>  <p>Le document REGDOC-2.5.4 remplace le guide d&rsquo;application  de la r&eacute;glementation&nbsp;G-221, <em>Guide  sur les exigences concernant la ventilation des mines et des usines de  concentration d&rsquo;uranium</em>, publi&eacute; en juin 2003.</p>  <p>On s&rsquo;attend &agrave; ce que ce document soit int&eacute;gr&eacute; aux  mesures de s&ucirc;ret&eacute; et de r&eacute;glementation d&eacute;crites dans une demande de permis et  aux documents soumis &agrave; l&rsquo;appui de cette demande.</p>  <p>L&rsquo;orientation  contenue dans ce document vise &agrave; informer le demandeur, &agrave; expliquer plus en  d&eacute;tail des exigences ou &agrave; fournir de l&rsquo;orientation aux demandeurs et aux  titulaires de permis sur la fa&ccedil;on de r&eacute;pondre aux exigences. Le document  pr&eacute;cise aussi comment le personnel de la&nbsp;CCSN &eacute;value des probl&egrave;mes  particuliers ou des donn&eacute;es particuli&egrave;res pendant son examen des demandes de permis.  Les&nbsp;titulaires de permis doivent examiner cette orientation et en tenir  compte. S&rsquo;ils adoptent des approches diff&eacute;rentes, ils devraient alors d&eacute;montrer  que celles-ci r&eacute;pondent aux exigences r&eacute;glementaires.</p>  <p>Une  approche graduelle et proportionn&eacute;e au risque peut &ecirc;tre d&eacute;finie et utilis&eacute;e  dans l&rsquo;application des exigences et des orientations &eacute;nonc&eacute;es dans ce document  d&rsquo;application de la r&eacute;glementation. L&rsquo;utilisation d&rsquo;une approche graduelle ne  constitue pas un assouplissement des exigences qui sont appliqu&eacute;es de fa&ccedil;on  proportionnelle aux risques et aux caract&eacute;ristiques particuli&egrave;res de l&rsquo;installation  ou de l&rsquo;activit&eacute;.</p>  <p>Le  demandeur ou le titulaire de permis peut soumettre un dossier d&eacute;montrant que l&rsquo;intention  d&rsquo;une exigence est prise en compte par d&rsquo;autres moyens et d&eacute;montr&eacute;e &agrave; l&rsquo;aide de  preuves justificatives.</p>  <p>Les  exigences et l&rsquo;orientation contenues dans ce document sont conformes aux  pratiques nationales et internationales les plus r&eacute;centes en ce qui concerne  les questions et les facteurs qui contribuent &agrave; assurer la s&ucirc;ret&eacute; nucl&eacute;aire et  &agrave; l&rsquo;am&eacute;liorer. Plus particuli&egrave;rement, elles &eacute;tablissent une approche de  classement des accidents moderne et ax&eacute;e sur les risques qui tient compte d&rsquo;un  &eacute;ventail d&rsquo;accidents possibles, notamment ceux qui ont les cons&eacute;quences les  plus graves pour la population.</p>  <div className="alert alert-info">
<p><strong>Remarque importante&nbsp;:</strong> Ce document  fait partie du fondement d&rsquo;autorisation d&rsquo;une installation ou d&rsquo;une activit&eacute;  r&eacute;glement&eacute;e si on s&rsquo;y r&eacute;f&egrave;re directement ou indirectement dans le permis  (notamment dans des documents cit&eacute;s en r&eacute;f&eacute;rence du titulaire de permis).</p>
<p>Le fondement d&rsquo;autorisation &eacute;tablit les conditions limites du rendement  acceptable pour une installation ou une activit&eacute; r&eacute;glement&eacute;e et &eacute;tablit les  bases du programme de conformit&eacute; de la&nbsp;CCSN &agrave;&nbsp;l&rsquo;&eacute;gard de cette  installation ou activit&eacute; r&eacute;glement&eacute;e.</p>
<p>Dans le cas o&ugrave; le document est un &eacute;l&eacute;ment du fondement d&rsquo;autorisation,  le terme &laquo;&nbsp;doit&nbsp;&raquo; est employ&eacute; pour exprimer une exigence &agrave; laquelle  le titulaire ou le demandeur de permis doit se conformer; le terme &laquo;&nbsp;devrait&nbsp;&raquo;  d&eacute;note une orientation ou une mesure conseill&eacute;e; le terme &laquo;&nbsp;pourrait&nbsp;&raquo;  exprime une option ou une mesure conseill&eacute;e ou acceptable dans les limites de  ce document d&rsquo;application de la r&eacute;glementation; et le terme &laquo;&nbsp;peut&nbsp;&raquo;  exprime une possibilit&eacute; ou une capacit&eacute;.</p>
<p>Aucune information  contenue dans le pr&eacute;sent document ne doit &ecirc;tre interpr&eacute;t&eacute;e comme lib&eacute;rant le  titulaire de permis de toute autre exigence pertinente. Le titulaire de permis  a la responsabilit&eacute; de prendre connaissance de tous les r&egrave;glements et de toutes  les conditions de permis applicables et d&rsquo;y&nbsp;adh&eacute;rer.</p>  </div>
<div className="clear"></div>  </div><div className="col-md-12 module-table-contents">  <h2>Table des mati&egrave;res</h2>
<ul>
<li><a href="#sec1">1. Introduction</a>
<ul>
<li><a href="#sec1-1">1.1 Objet</a></li>
<li><a href="#sec1-2">1.2 Port&eacute;e</a></li>
<li><a href="#sec1-3">1.3	Dispositions l&eacute;gislatives pertinentes</a></li>
</ul>
</li>
<li><a href="#sec2">2. Processus d&rsquo;&eacute;valuation environnementale et de d&eacute;livrance de permis</a>
<ul>
<li><a href="#sec2-1">2.1 Processus d&rsquo;&eacute;valuation environnementale</a></li>
<li><a href="#sec2-2">2.2 Processus d&rsquo;autorisation</a></li>
<li><a href="#sec2-3">2.3 Point de contact de la CCSN</a></li>
<li><a href="#sec2-4">2.4 Pr&eacute;sentation de la demande de permis</a></li>
</ul>
</li>
<li><a href="#sec3">3. Aper&ccedil;u des exigences l&eacute;gislatives en mati&egrave;re de ventilation</a></li>
<li><a href="#sec4">4. Exigences en mati&egrave;re de renseignements selon les &eacute;tapes d&rsquo;autorisation r&eacute;glement&eacute;es</a>
<ul>
<li><a href="#sec4-1">4.1 Toute cat&eacute;gorie de permis, autre que le permis d&rsquo;abandon</a></li>
<li><a href="#sec4-2">4.2 Permis de pr&eacute;paration de l&rsquo;emplacement et de construction</a></li>
<li><a href="#sec4-3">4.3 Permis d&rsquo;exploitation</a></li>
<li><a href="#sec4-4">4.4 Permis de d&eacute;classement</a></li>
</ul>
</li>
<li><a href="#sec5">Exigences en mati&egrave;re d&rsquo;exploitation et d&rsquo;entretien</a></li>
<li><a href="#glossary">Glossaire</a></li>
<li><a href="#ref">R&eacute;f&eacute;rences</a></li>
</ul>  </div>  <div className="clear"></div>
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
<h3 id="sec1-1">1.1 Objet</h3>  <p>Le REGDOC-2.5.4,  <em>Conception des mines et des usines de  concentration d&rsquo;uranium&nbsp;: Syst&egrave;mes de&nbsp;ventilation</em>, vise &agrave; aider  les demandeurs de permis &agrave; se conformer aux exigences relatives &agrave; la  pr&eacute;sentation de renseignements sur la ventilation en vue de la pr&eacute;paration de l&rsquo;emplacement  d&rsquo;une mine ou usine de concentration d&rsquo;uranium, de sa construction, de son  exploitation ou de son d&eacute;classement.</p>  <p>Les r&egrave;glements  provinciaux et territoriaux sur l&rsquo;exploitation mini&egrave;re en mati&egrave;re de ventilation  s&rsquo;appliquent, sauf si les exigences en mati&egrave;re de s&ucirc;ret&eacute; nucl&eacute;aire dans le  pr&eacute;sent document sont plus rigoureuses.</p>  <p>Le pr&eacute;sent document a &eacute;galement pour but d&rsquo;aider  les demandeurs de permis visant une mine ou une&nbsp;usine de concentration d&rsquo;uranium  &agrave; comprendre leurs obligations en mati&egrave;re d&rsquo;exploitation et d&rsquo;entretien des syst&egrave;mes  de ventilation.</p>
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
<h3 id="sec1-2">1.2 Port&eacute;e</h3>  <p>Le REGDOC-2.5.4 s&rsquo;applique  &agrave; toute demande de permis de la CCSN visant la pr&eacute;paration de l&rsquo;emplacement  d&rsquo;une mine ou usine de concentration d&rsquo;uranium, sa construction, son  exploitation ou son d&eacute;classement. Le pr&eacute;sent document r&eacute;sume les obligations en  mati&egrave;re de ventilation des titulaires de permis visant une mine ou une usine de  concentration d&rsquo;uranium et d&eacute;crit les renseignements sur la&nbsp;ventilation que  les demandeurs de permis devraient g&eacute;n&eacute;ralement pr&eacute;senter conform&eacute;ment aux  exigences r&eacute;glementaires.</p>  <p>Le document s&rsquo;applique  &agrave; tous les aspects de la ventilation des mines et des usines de concentration d&rsquo;uranium  et vise &agrave; assurer la radioprotection des travailleurs et du personnel sur place.  Il peut s&rsquo;agir de la ventilation de toute installation souterraine ou de surface  faisant partie d&rsquo;une mine ou d&rsquo;une usine de concentration d&rsquo;uranium et &eacute;tant  assujettie au r&eacute;gime d&rsquo;autorisation de la CCSN. Ces&nbsp;installations  comprennent g&eacute;n&eacute;ralement les ouvrages miniers, les b&acirc;timents de l&rsquo;usine de  concentration ainsi que tout autre lieu o&ugrave; pourraient se trouver de la  contamination ou des mati&egrave;res radioactives, par exemple des bureaux, des  installations de traitement des effluents, des caf&eacute;t&eacute;rias, des&nbsp;salles &agrave;  manger et des vestiaires destin&eacute;s au personnel.</p>  <p>Le pr&eacute;sent  document peut &eacute;galement faciliter la conception des syst&egrave;mes de ventilation des  d&eacute;p&ocirc;ts dans des formations g&eacute;ologiques profondes.</p>
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
<h3 id="sec1-3">1.3	Dispositions l&eacute;gislatives pertinentes</h3>  <p>Les dispositions  de la <a href="http://laws.justice.gc.ca/fra/lois/N-28.3/index.html"><em>Loi  sur la s&ucirc;ret&eacute; et la r&eacute;glementation nucl&eacute;aires</em></a> (LSRN) ainsi que des r&egrave;glements s&rsquo;appliquant au pr&eacute;sent document d&rsquo;application  de la r&eacute;glementation incluent</p>  <ul>  	<li>Selon l&rsquo;article&nbsp;26 de la LSRN, &laquo;&nbsp;il est interdit,  sauf en conformit&eacute; avec une licence ou un permis&nbsp;:
<ul className="list-bullet-none">
<li>a) d&rsquo;avoir  en sa possession, de transf&eacute;rer, d&rsquo;importer, d&rsquo;exporter, d&rsquo;utiliser ou d&rsquo;abandonner  des&nbsp;substances nucl&eacute;aires, de l&rsquo;&eacute;quipement r&eacute;glement&eacute; ou des  renseignements r&eacute;glement&eacute;s;</li>
<li>b) de  produire, de raffiner, de convertir, d&rsquo;enrichir, de traiter, de retraiter, d&rsquo;emballer,  de&nbsp;transporter, de g&eacute;rer, de stocker provisoirement ou en permanence ou d&rsquo;&eacute;vacuer  une substance&nbsp;nucl&eacute;aire ou de proc&eacute;der &agrave; l&rsquo;extraction mini&egrave;re de  substances nucl&eacute;aires;</li>
<li>c) de  produire ou d&rsquo;entretenir de l&rsquo;&eacute;quipement r&eacute;glement&eacute;;</li>
<li>d) d&rsquo;exploiter  un service de dosim&eacute;trie pour l&rsquo;application de la pr&eacute;sente loi;</li>
<li>e) de  pr&eacute;parer l&rsquo;emplacement d&rsquo;une installation nucl&eacute;aire, de la construire, de l&rsquo;exploiter,  de&nbsp;la&nbsp;modifier, de la d&eacute;classer ou de l&rsquo;abandonner;</li>
<li>f) de  construire, d&rsquo;exploiter, de d&eacute;classer ou d&rsquo;abandonner un v&eacute;hicule &agrave; propulsion  nucl&eacute;aire ou&nbsp;d&rsquo;amener un tel v&eacute;hicule au Canada.&nbsp;&raquo;</li>
</ul>  	</li>  	<li>L&rsquo;article&nbsp;7 du <a href="http://laws.justice.gc.ca/fra/reglements/DORS-2000-202/index.html"><em>R&egrave;glement  g&eacute;n&eacute;ral sur la s&ucirc;ret&eacute; et la r&eacute;glementation nucl&eacute;aires</em></a> (RGSRN)  stipule que &laquo;&nbsp;la&nbsp;demande de permis ou la demande de renouvellement,  de suspension en tout ou en partie, de&nbsp;modification, de r&eacute;vocation ou de  remplacement d&rsquo;un permis peut incorporer par renvoi les renseignements compris  dans un permis valide, expir&eacute; ou r&eacute;voqu&eacute;.&nbsp;&raquo;</li>  	<li>L&rsquo;article 15 du RGSRN stipule que&nbsp;&laquo;&nbsp;Le demandeur de  permis et le titulaire de permis avisent la Commission&nbsp;:
<ul className="list-bullet-none">
<li>a) des  personnes qui ont le pouvoir d&rsquo;agir en leur nom aupr&egrave;s de la Commission;</li>
<li>b) des  noms et titres des personnes qui sont charg&eacute;es de g&eacute;rer et de contr&ocirc;ler  l&rsquo;activit&eacute; autoris&eacute;e ainsi que la substance nucl&eacute;aire, l&rsquo;installation  nucl&eacute;aire, l&rsquo;&eacute;quipement r&eacute;glement&eacute; ou les renseignements r&eacute;glement&eacute;s vis&eacute;s par  le permis;</li>
<li>c) de  tout changement apport&eacute; aux renseignements vis&eacute;s aux alin&eacute;as a) et b) dans les  15 jours suivant le changement.&nbsp;&raquo;</li>
</ul>  	</li>  	<li>L&rsquo;article&nbsp;3 du <a href="http://laws.justice.gc.ca/fra/reglements/DORS-2000-206/index.html"><em>R&egrave;glement sur les mines et les usines de concentration  d&rsquo;uranium</em></a> (RMUCU) indique ce  qui suit&nbsp;: &laquo;&nbsp;la demande de permis visant une mine ou une usine de  concentration d&rsquo;uranium, autre que le permis d&rsquo;abandon, comprend les  renseignements suivants, outre ceux&nbsp;exig&eacute;s &agrave; l&rsquo;article&nbsp;3 du <em>R&egrave;glement g&eacute;n&eacute;ral sur la s&ucirc;ret&eacute; et la  r&eacute;glementation nucl&eacute;aires</em>&nbsp;:
<ul className="list-bullet-none">
<li>a) &agrave; l&rsquo;&eacute;gard du plan et de la description de la mine ou de l&rsquo;usine  de concentration&nbsp;:
<ul className="list-bullet-none">
<li>(i)&nbsp;une description du processus d&rsquo;&eacute;valuation de l&rsquo;emplacement,  ainsi que des analyses et&nbsp;des travaux pr&eacute;alables qui seront effectu&eacute;s sur  l&rsquo;emplacement et dans les environs,</li>
<li>(ii)&nbsp;un plan de surface indiquant les limites de la mine ou  de l&rsquo;usine de concentration, ainsi que la zone o&ugrave; se d&eacute;roulera l&rsquo;activit&eacute; vis&eacute;e  par la demande,</li>
<li>(iii)&nbsp;un plan montrant les  ouvrages, les excavations et les am&eacute;nagements souterrains, existants et pr&eacute;vus,</li>
<li>(iv)&nbsp;une description de la mine ou de l&rsquo;usine de  concentration, y compris ses installations, leur utilit&eacute; et leur capacit&eacute;,  ainsi que les excavations et les am&eacute;nagements souterrains,</li>
<li>(v)&nbsp;une description des caract&eacute;ristiques g&eacute;ologiques et  min&eacute;ralogiques de l&rsquo;emplacement,</li>
<li>(vi)&nbsp;une description de toute activit&eacute; qui peut avoir une  incidence sur l&rsquo;exploitation de la mine ou de l&rsquo;usine de concentration, y  compris toute activit&eacute; mini&egrave;re qui a &eacute;t&eacute; exerc&eacute;e &agrave;&nbsp;l&rsquo;emplacement avant la  date de pr&eacute;sentation de la demande &agrave; la Commission,</li>
<li>(vii)&nbsp;une description de la  conception et du programme d&rsquo;entretien de chaque salle de repas,</li>
<li>(viii)&nbsp;le plan propos&eacute; pour le  d&eacute;classement de la mine ou de l&rsquo;usine de concentration,</li>
<li>(ix)&nbsp;une description des groupes &eacute;lectrog&egrave;nes d&rsquo;urgence  propos&eacute;s et leur capacit&eacute;;</li>
</ul>
</li>
<li>b) &agrave; l&rsquo;&eacute;gard de l&rsquo;activit&eacute; vis&eacute;e par la  demande&nbsp;:
<ul className="list-bullet-none">
<li>(i)&nbsp;une  description de l&rsquo;activit&eacute; et son calendrier,</li>
<li>(ii)&nbsp;une  description des m&eacute;thodes propos&eacute;es pour exercer l&rsquo;activit&eacute;,</li>
<li>(iii)&nbsp;la  liste des cat&eacute;gories de mati&egrave;res &agrave; extraire et une description des crit&egrave;res  utilis&eacute;s pour l&rsquo;&eacute;tablissement de ces cat&eacute;gories,</li>
<li>(iv)&nbsp;la  dur&eacute;e pr&eacute;vue de l&rsquo;activit&eacute;,</li>
<li>(v)&nbsp;le  programme d&rsquo;assurance de la qualit&eacute; propos&eacute; pour l&rsquo;activit&eacute;;</li>
</ul>
</li>
<li>c) &agrave; l&rsquo;&eacute;gard de l&rsquo;environnement et de la  gestion des d&eacute;chets&nbsp;:
<ul className="list-bullet-none">
<li>(i)  le programme destin&eacute; &agrave; informer les personnes qui r&eacute;sident &agrave; proximit&eacute; de la  mine ou de l&rsquo;usine de concentration de la nature et des caract&eacute;ristiques  g&eacute;n&eacute;rales des effets pr&eacute;vus de l&rsquo;activit&eacute; vis&eacute;e par la demande sur l&rsquo;environnement  ainsi que sur la sant&eacute; et la s&eacute;curit&eacute; des personnes,</li>
<li>(ii)  le programme servant &agrave; &eacute;tablir les caract&eacute;ristiques environnementales de base  de l&rsquo;emplacement et des environs,</li>
<li>(iii)  les effets que l&rsquo;activit&eacute; vis&eacute;e par la demande peut avoir sur l&rsquo;environnement,  de&nbsp;m&ecirc;me que les mesures qui seront prises pour &eacute;viter ou att&eacute;nuer ces effets,</li>
<li>(iv)  les postes, les qualifications et les responsabilit&eacute;s propos&eacute;s pour les  travailleurs affect&eacute;s &agrave; la protection de l&rsquo;environnement,</li>
<li>(v)  les politiques et les programmes propos&eacute;s relativement &agrave; la protection de l&rsquo;environnement,</li>
<li>(vi)  les programmes propos&eacute;s pour la surveillance de l&rsquo;environnement et des  effluents,</li>
<li>(vii)&nbsp;l&rsquo;emplacement  propos&eacute; des points de rejet, les quantit&eacute;s et les concentrations maximales  propos&eacute;es ainsi que le volume et le d&eacute;bit d&rsquo;&eacute;coulement pr&eacute;vus des rejets de&nbsp;substances  nucl&eacute;aires et de substances dangereuses dans l&rsquo;environnement, y compris leurs  caract&eacute;ristiques physiques, chimiques et radiologiques,</li>
<li>(viii)  les mesures propos&eacute;es pour contr&ocirc;ler les rejets de substances nucl&eacute;aires et de  substances dangereuses dans l&rsquo;environnement,</li>
<li>(ix)  une description des courants de d&eacute;chets liquides et solides pr&eacute;vus dans la mine  ou l&rsquo;usine de concentration, y compris l&rsquo;infiltration d&rsquo;eau fra&icirc;che et le  d&eacute;tournement ou le contr&ocirc;le de l&rsquo;&eacute;coulement des eaux superficielles et  souterraines non contamin&eacute;es,</li>
<li>(x) les  mesures propos&eacute;es pour &eacute;viter ou att&eacute;nuer les effets que les rejets accidentels  de&nbsp;substances nucl&eacute;aires et de substances dangereuses peuvent avoir sur l&rsquo;environnement,  la sant&eacute; et la s&eacute;curit&eacute; des personnes ainsi que le maintien de la s&eacute;curit&eacute;, y  compris les mesures visant &agrave; :
<ul className="list-bullet-none">
<li>(A) aider  les autorit&eacute;s ext&eacute;rieures &agrave; effectuer la planification et la pr&eacute;paration en vue  de limiter les effets n&eacute;gatifs d&rsquo;un rejet accidentel,</li>
<li>(B) aviser  les autorit&eacute;s ext&eacute;rieures d&rsquo;un rejet accidentel ou de l&rsquo;imminence d&rsquo;un tel  rejet,</li>
<li>(C) tenir  les autorit&eacute;s ext&eacute;rieures inform&eacute;es pendant et apr&egrave;s un rejet accidentel,</li>
<li>(D) aider  les autorit&eacute;s ext&eacute;rieures &agrave; rem&eacute;dier aux effets n&eacute;gatifs d&rsquo;un rejet accidentel,</li>
<li>(E) mettre  &agrave; l&rsquo;&eacute;preuve l&rsquo;application des mesures visant &agrave; contr&ocirc;ler les effets n&eacute;gatifs d&rsquo;un  rejet accidentel,</li>
</ul>
</li>
<li>(xi) les  quantit&eacute;s pr&eacute;vues des mat&eacute;riaux de remblayage, y compris leur composition et&nbsp;leurs  caract&eacute;ristiques,</li>
<li>(xii)  une description du syst&egrave;me de gestion des d&eacute;chets propos&eacute;;</li>
</ul>
</li>
<li>d) &agrave; l&rsquo;&eacute;gard de la sant&eacute; et la s&eacute;curit&eacute;&nbsp;:
<ul className="list-bullet-none">
<li>(i) les  effets que l&rsquo;activit&eacute; vis&eacute;e par la demande peut avoir sur la sant&eacute; et la  s&eacute;curit&eacute; des personnes, de m&ecirc;me que les mesures qui seront prises pour &eacute;viter  ou att&eacute;nuer ces effets,</li>
<li>(ii) le  programme propos&eacute; pour la s&eacute;lection, l&rsquo;utilisation et l&rsquo;entretien de l&rsquo;&eacute;quipement  de&nbsp;protection individuelle,</li>
<li>(iii)  les politiques et programmes propos&eacute;es relativement &agrave; la sant&eacute; et &agrave; la s&eacute;curit&eacute;  des travailleurs,</li>
<li>(iv) les  postes, les qualifications et les responsabilit&eacute;s propos&eacute;s pour les travailleurs  affect&eacute;s &agrave; la radioprotection,</li>
<li>(v) le  programme de formation propos&eacute; pour les travailleurs,</li>
<li>(vi) les  mesures propos&eacute;es pour contr&ocirc;ler la propagation de la contamination  radioactive,</li>
<li>(vii)  les m&eacute;thodes et l&rsquo;&eacute;quipement de ventilation et de d&eacute;poussi&eacute;rage propos&eacute;s pour  contr&ocirc;ler la qualit&eacute; de l&rsquo;air,</li>
<li>(viii)  le degr&eacute; d&rsquo;efficacit&eacute; et le calendrier d&rsquo;inspection propos&eacute;s pour le syst&egrave;me de  ventilation et le syst&egrave;me de d&eacute;poussi&eacute;rage;</li>
</ul>
</li>
<li>e) &agrave; l&rsquo;&eacute;gard de la s&eacute;curit&eacute; mat&eacute;rielle, les  mesures propos&eacute;es pour alerter le titulaire de permis en cas d&rsquo;acte ou de  tentative de sabotage &agrave; la mine ou &agrave; l&rsquo;usine de concentration.&nbsp;&raquo;</li>
</ul>  	</li>  	<li>Selon l&rsquo;article&nbsp;4 du RMUCU&nbsp;:
<ul className="list-bullet-none">
<li>&laquo;&nbsp;(1)  Dans le pr&eacute;sent  article, seuil d&rsquo;intervention s&rsquo;entend  d&rsquo;une dose de rayonnement d&eacute;termin&eacute;e ou de tout autre param&egrave;tre qui, lorsqu&rsquo;il  est atteint, peut d&eacute;noter une perte de contr&ocirc;le d&rsquo;une partie du programme de  radioprotection ou du programme de protection de l&rsquo;environnement du titulaire  de permis, et qui rend n&eacute;cessaire la prise de mesures particuli&egrave;res.</li>
<li>(2) La demande de permis visant une mine ou une  usine de concentration d&rsquo;uranium, autre qu&rsquo;un permis d&rsquo;abandon, comprend un  code de pratique qui indique notamment&nbsp;:
<ul className="list-bullet-none">
<li>a) les  seuils d&rsquo;intervention que le demandeur juge appropri&eacute;s pour l&rsquo;application du  pr&eacute;sent paragraphe;</li>
<li>b)  une description des mesures que le demandeur prendra lorsqu&rsquo;un seuil d&rsquo;intervention  est&nbsp;atteint;</li>
<li>c)  les proc&eacute;dures pour faire rapport lorsqu&rsquo;un seuil d&rsquo;intervention est atteint.&nbsp;&raquo;</li>
</ul>
</li>
</ul>  	</li>  	<li>L&rsquo;article&nbsp;5 du RMUCU stipule que&nbsp;:
<ul className="list-bullet-none">
<li>&laquo;&nbsp;(1)  La demande de permis pour pr&eacute;parer l&rsquo;emplacement d&rsquo;une mine d&rsquo;uranium et la  construire comprend les renseignements suivants, outre ceux exig&eacute;s &agrave; l&rsquo;article&nbsp;3  et au paragraphe&nbsp;4(2)&nbsp;:
<ul className="list-bullet-none">
<li>a)  une description de la conception propos&eacute;e pour la mine;</li>
<li>b) le  programme de construction propos&eacute;, y compris le calendrier des travaux;</li>
<li>c)  une description des composants, des syst&egrave;mes et de l&rsquo;&eacute;quipement qu&rsquo;il est  propos&eacute; d&rsquo;installer &agrave; la mine, y compris leurs conditions nominales de  fonctionnement;</li>
<li>d) le  programme d&rsquo;assurance de la qualit&eacute; propos&eacute; pour la conception de la mine;</li>
<li>e)  les r&eacute;sultats d&rsquo;analyse des dangers li&eacute;s aux op&eacute;rations et une description de  la fa&ccedil;on dont&nbsp;ces r&eacute;sultats ont &eacute;t&eacute; pris en compte;</li>
<li>f)  une description de la conception, de la construction et du fonctionnement  propos&eacute;s pour le&nbsp;syst&egrave;me de gestion des d&eacute;chets, y compris les mesures de  surveillance de la construction et&nbsp;du fonctionnement, le calendrier des  travaux de construction, les plans d&rsquo;urgence pendant la construction et les  mesures visant &agrave; r&eacute;gler l&rsquo;&eacute;coulement des eaux des cours d&rsquo;eau existants;</li>
<li>g)  une description du mode d&rsquo;&eacute;vacuation propos&eacute; pour le minerai;</li>
<li>h)  les quantit&eacute;s et la qualit&eacute; pr&eacute;vues du minerai et des st&eacute;riles &agrave; enlever, les  endroits propos&eacute;s pour les stocker provisoirement, ainsi que la m&eacute;thode, le  programme et le calendrier propos&eacute;s pour les enlever et les stocker de fa&ccedil;on  permanente ou les &eacute;vacuer;</li>
<li>i)  les m&eacute;thodes et les programmes d&rsquo;exploitation mini&egrave;re propos&eacute;s;</li>
<li>j) le  plan propos&eacute; pour la mise en service des composants, des syst&egrave;mes et de l&rsquo;&eacute;quipement  qui seront install&eacute;s &agrave; la mine.</li>
</ul>
</li>
<li>(2) La  demande de permis pour pr&eacute;parer l&rsquo;emplacement d&rsquo;une usine de concentration d&rsquo;uranium  et la construire comprend les renseignements suivants, outre ceux exig&eacute;s &agrave; l&rsquo;article&nbsp;3  et au paragraphe&nbsp;4(2)&nbsp;:
<ul className="list-bullet-none">
<li>a)  une description de la conception propos&eacute;e pour l&rsquo;usine de concentration;</li>
<li>b) le  programme de construction propos&eacute;, y compris le calendrier des travaux;</li>
<li>c)  une description des composants, des syst&egrave;mes et de l&rsquo;&eacute;quipement qu&rsquo;il est  propos&eacute; d&rsquo;installer &agrave; l&rsquo;usine de concentration, y compris leurs conditions  nominales de fonctionnement;</li>
<li>d) le  programme d&rsquo;assurance de la qualit&eacute; propos&eacute; pour la conception de l&rsquo;usine de  concentration;</li>
<li>e)  les r&eacute;sultats d&rsquo;analyse des dangers li&eacute;s aux op&eacute;rations et une description de  la fa&ccedil;on dont ces r&eacute;sultats ont &eacute;t&eacute; pris en compte;</li>
<li>f)  une description de la conception, de la construction et du fonctionnement  propos&eacute;s pour le syst&egrave;me de gestion des d&eacute;chets, y compris les mesures de  surveillance de la construction et du&nbsp;fonctionnement, le calendrier des  travaux de construction, les plans d&rsquo;urgence pendant la construction et les  mesures visant &agrave; r&eacute;gler l&rsquo;&eacute;coulement des eaux des cours d&rsquo;eau existants;</li>
<li>g)  les m&eacute;thodes et les programmes de concentration propos&eacute;s;</li>
<li>h)  une description des laboratoires et des programmes de laboratoire propos&eacute;s;</li>
<li>i) le  plan propos&eacute; pour la mise en service des composants, des syst&egrave;mes et de l&rsquo;&eacute;quipement  qui seront install&eacute;s &agrave; l&rsquo;usine de concentration.&nbsp;&raquo;</li>
</ul>
</li>
</ul>  	</li>  	<li>L&rsquo;article&nbsp;6 du RMUCU stipule  que&nbsp;:
<ul className="list-bullet-none">
<li>&laquo;&nbsp;(1)  La demande de permis pour exploiter une mine d&rsquo;uranium comprend les  renseignements suivants, outre ceux exig&eacute;s &agrave; l&rsquo;article&nbsp;3 et au paragraphe&nbsp;4(2)&nbsp;:
<ul className="list-bullet-none">
<li>a) les  r&eacute;sultats de tous les travaux de mise en service;</li>
<li>b) une  description des ouvrages, des composants, des syst&egrave;mes et de l&rsquo;&eacute;quipement &agrave; la  mine, y compris les modifications apport&eacute;es &agrave; leur conception et &agrave; leurs  conditions nominales de fonctionnement par suite de la mise en service;</li>
<li>c) les  politiques, m&eacute;thodes et programmes propos&eacute;s pour l&rsquo;exploitation et l&rsquo;entretien  de la mine;</li>
<li>d) les  m&eacute;thodes propos&eacute;es pour la manipulation, le stockage provisoire, le chargement  et le transport des substances nucl&eacute;aires et des substances dangereuses.</li>
</ul>
</li>
<li>(2) La demande de permis pour exploiter  une usine de concentration d&rsquo;uranium comprend les renseignements suivants,  outre ceux exig&eacute;s &agrave; l&rsquo;article&nbsp;3 et au paragraphe&nbsp;4(2)&nbsp;:
<ul className="list-bullet-none">
<li>a) les  r&eacute;sultats de tous travaux de mise en service;</li>
<li>b) une  description des ouvrages, des composants, des syst&egrave;mes et de l&rsquo;&eacute;quipement &agrave; l&rsquo;usine  de concentration, y compris les modifications apport&eacute;es &agrave; leur conception et &agrave;  leurs conditions nominales de fonctionnement par suite de la mise en service;</li>
<li>c) les  politiques, m&eacute;thodes et programmes propos&eacute;s pour l&rsquo;exploitation et l&rsquo;entretien  de l&rsquo;usine de concentration;</li>
<li>d) les  m&eacute;thodes propos&eacute;es pour la manipulation, le stockage provisoire et le  chargement des&nbsp;concentr&eacute;s et des mati&egrave;res uranif&egrave;res, sous forme solide et  liquide;</li>
<li>e) le  calendrier d&rsquo;exploitation propos&eacute;;</li>
<li>f) la  capacit&eacute; nominale, quotidienne et annuelle, de l&rsquo;usine de concentration, ainsi  que la r&eacute;cup&eacute;ration et la composition pr&eacute;vues des charges d&rsquo;alimentation, des  concentr&eacute;s et des r&eacute;sidus;</li>
<li>g) une  description du fonctionnement propos&eacute; du syst&egrave;me de gestion des d&eacute;chets.&nbsp;&raquo;</li>
</ul>
</li>
</ul>  	</li>  	<li>Selon l&rsquo;article&nbsp;7 du RMUCU, &laquo;&nbsp;la demande de permis  pour d&eacute;classer une mine ou une usine de concentration d&rsquo;uranium comprend les  renseignements suivants, outre ceux exig&eacute;s &agrave; l&rsquo;article&nbsp;3 et au paragraphe&nbsp;4(2)&nbsp;:
<ul className="list-bullet-none">
<li>a) une  description des travaux de d&eacute;classement et le calendrier propos&eacute; de ceux-ci, y  compris la justification du calendrier et les dates pr&eacute;vues de d&eacute;but et d&rsquo;ach&egrave;vement  des travaux;</li>
<li>b) les  terrains, les b&acirc;timents, les ouvrages, les composants, les syst&egrave;mes, l&rsquo;&eacute;quipement,  les substances nucl&eacute;aires et les substances dangereuses qui seront touch&eacute;s par  le d&eacute;classement;</li>
<li>c) les  mesures, m&eacute;thodes et programmes de d&eacute;classement propos&eacute;s;</li>
<li>d) une  description de l&rsquo;&eacute;tat pr&eacute;vu de l&rsquo;emplacement apr&egrave;s l&rsquo;ach&egrave;vement des travaux de  d&eacute;classement.&nbsp;&raquo;</li>
</ul>
</li>
<li>L&rsquo;article&nbsp;10 du RMUCU stipule que &laquo;&nbsp;le titulaire de  permis&nbsp;:
<ul className="list-bullet-none">
<li>a) &eacute;tablit  par &eacute;crit, applique et tient &agrave; jour des proc&eacute;dures d&rsquo;exploitation pour l&rsquo;activit&eacute;  autoris&eacute;e;</li>
<li>b) forme  les travailleurs afin qu&rsquo;ils accomplissent leur travail conform&eacute;ment aux  proc&eacute;dures d&rsquo;exploitation;</li>
<li>c) fait  des v&eacute;rifications aupr&egrave;s des travailleurs pour s&rsquo;assurer qu&rsquo;ils se conforment  aux proc&eacute;dures d&rsquo;exploitation.&nbsp;&raquo;</li>
</ul>  	<li>Selon  l&rsquo;article&nbsp;11 du RMUCU, &laquo;&nbsp;en ce qui concerne les syst&egrave;mes de  ventilation am&eacute;nag&eacute;s conform&eacute;ment au permis, le titulaire de permis&nbsp;:
<ul className="list-bullet-none">
<li>a) veille &agrave; ce que chaque  ventilateur principal soit muni d&rsquo;un dispositif qui, lorsque le ventilateur ne  fonctionne pas normalement, &eacute;met un signal d&rsquo;avertissement;</li>
<li>b) veille &agrave; ce qu&rsquo;une  personne soit d&eacute;sign&eacute;e pour capter ce signal et y r&eacute;pondre;</li>
<li>c) met en &oelig;uvre des  mesures qui emp&ecirc;chent les personnes et les activit&eacute;s d&rsquo;entraver le&nbsp;fonctionnement  normal des syst&egrave;mes de ventilation.&nbsp;&raquo;</li>
</ul>
</li>
<li>L&rsquo;article&nbsp;12  du RMUCU stipule que&nbsp;:
<ul className="list-bullet-none">
<li>(1) Lorsque le syst&egrave;me de ventilation d&rsquo;un lieu de  travail ne fonctionne pas conform&eacute;ment au permis, le titulaire de permis&nbsp;:
<ul className="list-bullet-none">
<li>a) met en &oelig;uvre  des mesures de rechange destin&eacute;es &agrave; prot&eacute;ger la sant&eacute; et la s&eacute;curit&eacute; des  travailleurs;</li>
<li>b) veille &agrave;  ce que seuls les travaux n&eacute;cessaires pour remettre le syst&egrave;me de ventilation en  &eacute;tat soient effectu&eacute;s sur le lieu de travail.</li>
</ul>
</li>
<li>(2) Avant qu&rsquo;un travailleur commence &agrave;  effectuer les travaux de remise en &eacute;tat du syst&egrave;me de ventilation, le titulaire  de permis l&rsquo;avise des mesures de protection d&eacute;j&agrave; prises et de celles &agrave; prendre  durant les travaux.&nbsp;&raquo;</li>
</ul>  	</li>  	<li>L&rsquo;article&nbsp;16 du RMUCU stipule  que&nbsp;:
<ul className="list-bullet-none">
<li>&laquo;&nbsp;(1)  Le titulaire de permis  tient des documents sur&nbsp;:
<ul className="list-bullet-none">
<li>a) les  proc&eacute;dures d&rsquo;exploitation et d&rsquo;entretien;</li>
<li>b) les plans  de la mine montrant les travaux pr&eacute;vus et en cours;</li>
<li>c) les  calendriers des travaux pr&eacute;vus d&rsquo;exploitation mini&egrave;re;</li>
<li>d) les plans  de chaque ouvrage et aire de confinement des r&eacute;sidus, ouvrage de d&eacute;tournement  et syst&egrave;me associ&eacute;s au syst&egrave;me de gestion des d&eacute;chets;</li>
<li>e) la  conception de la mine ou l&rsquo;usine de concentration d&rsquo;uranium ainsi que des  composants et des syst&egrave;mes qui y sont install&eacute;s;</li>
<li>f) la  m&eacute;thode et les donn&eacute;es pertinentes utilis&eacute;es pour calculer les doses de  rayonnement re&ccedil;ues par les travailleurs &agrave; la mine ou &agrave; l&rsquo;usine de concentration  d&rsquo;uranium et l&rsquo;absorption par eux de substances nucl&eacute;aires radioactives;</li>
<li>g) les  relev&eacute;s effectu&eacute;s conform&eacute;ment au permis ou aux r&egrave;glements pris en vertu de la  Loi;</li>
<li>h) les  inspections et les travaux d&rsquo;entretien effectu&eacute;s conform&eacute;ment au permis ou aux  r&egrave;glements pris en vertu de la Loi;</li>
<li>i) la  quantit&eacute; d&rsquo;air fournie par chaque ventilateur principal;</li>
<li>j) le  rendement de chaque syst&egrave;me de d&eacute;poussi&eacute;rage;</li>
<li>k) la  formation re&ccedil;ue par chaque travailleur.</li>
</ul>
</li>
<li>(2) Le titulaire de permis met &agrave; la disposition des  travailleurs et du repr&eacute;sentant des travailleurs, &agrave; la mine ou &agrave; l&rsquo;usine de  concentration d&rsquo;uranium, les documents vis&eacute;s au paragraphe (1).</li>
<li>(3) Le titulaire de  permis conserve les documents relatifs &agrave; la formation vis&eacute;s &agrave; l&rsquo;alin&eacute;a (1)k)  pendant la p&eacute;riode o&ugrave; le travailleur est employ&eacute; &agrave; la mine ou &agrave; l&rsquo;usine de  concentration d&rsquo;uranium.</li>
<li>(4) Le titulaire de permis affiche dans la mine ou  l&rsquo;usine de concentration d&rsquo;uranium les r&eacute;sultats des relev&eacute;s effectu&eacute;s dans  chaque lieu de travail conform&eacute;ment au permis et au pr&eacute;sent r&egrave;glement, &agrave; un  endroit accessible &agrave; tous les travailleurs, o&ugrave; ces r&eacute;sultats sont le plus  susceptibles d&rsquo;&ecirc;tre port&eacute;s &agrave; leur attention.&nbsp;&raquo;</li>
</ul>
</li>  </ul>
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
<h2 id="sec2">2. Processus d&rsquo;&eacute;valuation environnementale et de d&eacute;livrance de permis </h2>  <p>Aux termes de la LSRN,  la CCSN doit d&eacute;terminer, avant de d&eacute;livrer un&nbsp;permis, si le demandeur est  qualifi&eacute; et s&rsquo;il prendra les mesures voulues pour pr&eacute;server la sant&eacute; et&nbsp;la&nbsp;s&eacute;curit&eacute;  des personnes, pour prot&eacute;ger l&rsquo;environnement, pour maintenir la s&eacute;curit&eacute;  nationale et pour respecter les obligations internationales du Canada. &Agrave;&nbsp;cette  fin, la CCSN doit obtenir des demandeurs des renseignements cr&eacute;dibles et  pertinents.</p>
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
<h3 id="sec2-1">2.1	Processus d&rsquo;&eacute;valuation environnementale</h3>  <p>Lorsqu&rsquo;elle  re&ccedil;oit une demande de permis pour la pr&eacute;paration de l&rsquo;emplacement ou la construction  d&rsquo;une&nbsp; mine ou usine de concentration d&rsquo;uranium ainsi qu&rsquo;une description compl&egrave;te  du projet, la CCSN d&eacute;termine si l&rsquo;activit&eacute; d&eacute;crite dans la demande n&eacute;cessite la  r&eacute;alisation d&rsquo;une &eacute;valuation environnementale (EE) en vertu de la <em>Loi canadienne sur l&rsquo;&eacute;valuation  environnementale (2012)</em> (LCEE&nbsp;2012). La LCEE&nbsp;2012 &eacute;tablit le processus  f&eacute;d&eacute;ral d&rsquo;EE au Canada; les EE r&eacute;alis&eacute;es en vertu de la LCEE&nbsp;2012  permettent de d&eacute;terminer si un projet particulier risque d&rsquo;avoir une incidence  importante sur l&rsquo;environnement et si cette incidence peut &ecirc;tre att&eacute;nu&eacute;e. En  proc&eacute;dant &agrave; cette &eacute;valuation au d&eacute;but de la planification du projet, on peut  &eacute;viter ou r&eacute;duire les retards et les frais inutiles.</p>  <p>La CCSN est l&rsquo;unique  autorit&eacute; responsable de la r&eacute;alisation des EE &agrave; l&rsquo;&eacute;gard des projets d&eacute;sign&eacute;s  d&eacute;crits dans le&nbsp;<em>R&egrave;glement d&eacute;signant  les activit&eacute;s concr&egrave;tes</em>. Pour obtenir davantage de renseignements sur les  exigences relatives aux EE en vertu de la LCEE&nbsp;2012 et sur le processus d&rsquo;autorisation  de la CCSN, veuillez consulter le <a href="http://www.nuclearsafety.gc.ca/pubs_catalogue/uploads_fre/REGDOC-3-5-1-Licensing-Process-for-Class-I-Nuclear-Facilities-and-Uranium-Mines-and-Mills-FRA.pdf">REGDOC-3.5.1, <em>Processus d&rsquo;autorisation des installations  nucl&eacute;aires de&nbsp;cat&eacute;gorie I et des mines et usines de concentration d&rsquo;uranium</em></a>, ainsi que le&nbsp;<a href="http://www.nuclearsafety.gc.ca/pubs_catalogue/uploads_fre/REGDOC-2-9-1-Environmental-Principles-fra.pdf">REGDOC-2.9.1,<em> Protection de l&rsquo;environnement&nbsp;:  Principes, &eacute;valuations environnementales et&nbsp;mesures de protection de l&rsquo;environnement</em></a>.</p>
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
<h3 id="sec2-2">2.2	Processus d&rsquo;autorisation</h3>  <p>Le processus d&rsquo;autorisation  des mines et des usines de concentration d&rsquo;uranium de la CCSN suit les &eacute;tapes  d&eacute;crites dans le RMUCU et correspondant &agrave; la pr&eacute;paration de l&rsquo;emplacement, la  construction, l&rsquo;exploitation, le d&eacute;classement et l&rsquo;abandon. &Agrave; chaque &eacute;tape du  processus d&rsquo;autorisation, la CCSN d&eacute;termine si le demandeur de permis est  qualifi&eacute; et s&rsquo;il a pris les mesures requises pour assurer la s&ucirc;ret&eacute; et la  s&eacute;curit&eacute; des personnes et prot&eacute;ger leur sant&eacute; et l&rsquo;environnement ainsi que pour  maintenir la s&eacute;curit&eacute; nationale et respecter les obligations internationales du  Canada. Si toutes ces conditions sont respect&eacute;es, la CCSN peut d&eacute;livrer un  permis qui contient les conditions pertinentes.</p>  <p>En g&eacute;n&eacute;ral, un  permis d&eacute;livr&eacute; par la CCSN comprend les engagements du demandeur et toute autre  condition que la CCSN juge n&eacute;cessaire &agrave; la s&ucirc;ret&eacute; et &agrave; la s&eacute;curit&eacute; des  personnes, &agrave; la protection de leur sant&eacute; et de l&rsquo;environnement ainsi qu&rsquo;au maintien  de la s&eacute;curit&eacute; nationale.</p>  <p>Les renseignements demand&eacute;s par la CCSN &agrave; chaque  &eacute;tape d&rsquo;une demande de permis peuvent varier selon les circonstances propres &agrave;  chaque dossier. En g&eacute;n&eacute;ral, les renseignements fournis dans le cadre d&rsquo;une &eacute;tape  donn&eacute;e constitueront le fondement des renseignements n&eacute;cessaires &agrave; la prochaine  &eacute;tape. Une demande de permis de la CCSN peut comprendre de nouveaux  renseignements ou, conform&eacute;ment &agrave; l&rsquo;article&nbsp;7 du R&egrave;glement g&eacute;n&eacute;ral sur la s&ucirc;ret&eacute; et la r&eacute;glementation nucl&eacute;aires, peut  citer en r&eacute;f&eacute;rence les renseignements associ&eacute;s &agrave; un autre permis de la CCSN. Pour  obtenir davantage de renseignements sur les exigences relatives aux EE en vertu  de la LCEE&nbsp;2012 et sur le processus d&rsquo;autorisation de la CCSN, veuillez  consulter le <a href="http://www.nuclearsafety.gc.ca/pubs_catalogue/uploads_fre/REGDOC-3-5-1-Licensing-Process-for-Class-I-Nuclear-Facilities-and-Uranium-Mines-and-Mills-FRA.pdf">REGDOC-3.5.1, <em>Processus d&rsquo;autorisation des installations  nucl&eacute;aires de cat&eacute;gorie I et des mines et usines de concentration d&rsquo;uranium</em></a>.</p>
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
<h3 id="sec2-3">2.3	Point de contact de la CCSN</h3>  <p>La CCSN assigne  &agrave; tout demandeur ou titulaire de permis un point de contact unique qui peut  pr&eacute;ciser ou &eacute;toffer l&rsquo;information contenue dans le pr&eacute;sent document, le cas  &eacute;ch&eacute;ant. </p>  <p>Le demandeur  devrait communiquer avec la CCSN d&egrave;s le d&eacute;but du processus afin de conna&icirc;tre le  nom et les coordonn&eacute;es de la personne assign&eacute;e &agrave; sa demande.</p>  <p>Pour communiquer avec la CCSN&nbsp;:<br />
T&eacute;l&eacute;phone&nbsp;: 613-995-5894 ou 1-800-668-5284 (Canada  seulement)<br />
T&eacute;l&eacute;copieur&nbsp;: 613-995-5086<br />  Courriel&nbsp;: <a href="mailto:cnsc.info.ccsn@cnsc-ccsn.gc.ca">cnsc.info.ccsn@cnsc-ccsn.gc.ca</a></p>
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
<h3 id="sec2-4">2.4	Pr&eacute;sentation de la demande de permis</h3>  <p>Le demandeur  devrait s&rsquo;assurer que la demande est d&ucirc;ment remplie, dat&eacute;e et sign&eacute;e par la  personne comp&eacute;tente (le demandeur de permis) et que tous les documents  pertinents sont clairement identifi&eacute;s et renvoient aux sections appropri&eacute;es.</p>  <p>Si la demande de  permis est assujettie au R&egrave;glement sur  les droits pour le recouvrement des co&ucirc;ts de&nbsp;la Commission canadienne de  s&ucirc;ret&eacute; nucl&eacute;aire, le paiement doit y &ecirc;tre joint. Pour plus de d&eacute;tails,  communiquer avec le Groupe consultatif sur le recouvrement des co&ucirc;ts de la CCSN  au 613-995-5894 ou, sans frais, au 1-888-229-2672.</p>  <p>Le  demandeur devrait envoyer deux copies papier sign&eacute;es et dat&eacute;es de sa demande &agrave;  la Commission &agrave;&nbsp;l&rsquo;adresse suivante&nbsp;:</p>  <p>Secr&eacute;taire  de la Commission<br />
Commission  canadienne de s&ucirc;ret&eacute; nucl&eacute;aire<br />
280,  rue Slater<br />
C.P.&nbsp;1046,  succursale B<br />
Ottawa (Ontario)&nbsp;  K1P 5S9</p>
<p>Conform&eacute;ment &agrave; l&rsquo;article&nbsp;27  du R&egrave;glement g&eacute;n&eacute;ral sur la s&ucirc;ret&eacute; et la  r&eacute;glementation nucl&eacute;aires, le&nbsp;demandeur doit conserver dans ses  archives une copie de la demande d&ucirc;ment remplie.</p>
<p>Il est vivement  recommand&eacute; aux demandeurs de soumettre les documents sous forme &eacute;lectronique  (par exemple sur un support &agrave; m&eacute;moire s&eacute;curis&eacute;e). </p>
<p>Tous les  renseignements soumis sont assujettis aux dispositions de la <em>Loi sur l&rsquo;acc&egrave;s &agrave; l&rsquo;information</em> et de la  <em>Loi sur la protection des renseignements  personnels</em>. Il incombe au demandeur d&rsquo;identifier et de justifier tout  contenu dont la divulgation n&rsquo;est pas souhaitable conform&eacute;ment &agrave; ces lois.</p>
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
<h2 id="sec3">3. Aper&ccedil;u des exigences l&eacute;gislatives en mati&egrave;re de ventilation</h2>  <p>Le RMUCU comprend  des r&eacute;f&eacute;rences directes et indirectes &agrave; la ventilation des mines ou des usines  de&nbsp;concentration d&rsquo;uranium. L&rsquo;article&nbsp;3 constitue un r&eacute;sum&eacute; exhaustif  des renseignements g&eacute;n&eacute;raux qui doivent &ecirc;tre pr&eacute;sent&eacute;s dans le cadre d&rsquo;une  demande de permis visant une mine ou une usine de concentration d&rsquo;uranium,  autre que le permis d&rsquo;abandon. Il &eacute;nonce des exigences portant exclusivement  sur la ventilation ainsi que d&rsquo;autres exigences qui abordent la question, sans&nbsp;s&rsquo;y&nbsp;limiter.</p>  <p>Les articles&nbsp;4, 5, 6 et 7 du RMUCU  portent notamment sur les syst&egrave;mes de ventilation et des sujets connexes,  notamment les suivants&nbsp;: </p>  <ul>
<li>codes de pratique</li>
<li>conception des mines ou des usines  de concentration</li>
<li>r&eacute;sultats de tous travaux de mise en  service</li>
<li>conception de l&rsquo;&eacute;quipement, des  syst&egrave;mes et des composants</li>
<li>assurance de la qualit&eacute;</li>
<li>plans pour la mise en service</li>
<li>politiques, m&eacute;thodes et programmes  pour l&rsquo;exploitation, l&rsquo;entretien et le d&eacute;classement </li>  </ul>  <p>L&rsquo;article&nbsp;10 porte sur les  questions g&eacute;n&eacute;rales et li&eacute;es &agrave; la ventilation. Selon cet article, les  titulaires de&nbsp;permis d&rsquo;exploitation d&rsquo;une mine ou d&rsquo;une usine de  concentration d&rsquo;uranium doivent faire ce qui suit&nbsp;: </p>  <ul>
<li>&eacute;tablir par &eacute;crit, appliquer et  tenir &agrave; jour des proc&eacute;dures d&rsquo;exploitation relatives &agrave; leurs activit&eacute;s  autoris&eacute;es</li>
<li>former les travailleurs afin qu&rsquo;ils  accomplissent leur travail conform&eacute;ment aux proc&eacute;dures d&rsquo;exploitation </li>
<li>faire des v&eacute;rifications aupr&egrave;s des travailleurs  pour s&rsquo;assurer qu&rsquo;ils se conforment aux proc&eacute;dures d&rsquo;exploitation </li>  </ul>  <p>Les articles&nbsp;11  et 12 pr&eacute;cisent les mesures que doivent prendre les titulaires de permis de la  CCSN &agrave;&nbsp;l&rsquo;&eacute;gard de l&rsquo;exploitation et du fonctionnement non conforme des syst&egrave;mes  de ventilation.</p>  <p>En vertu de l&rsquo;article&nbsp;16,  les titulaires de permis doivent conserver certains documents, notamment sur  les syst&egrave;mes de ventilation et les activit&eacute;s connexes, et doivent les mettre &agrave;  la disposition des travailleurs et du repr&eacute;sentant des travailleurs.</p>
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
<h2 id="sec4">4. Exigences en mati&egrave;re de renseignements selon les &eacute;tapes d&rsquo;autorisation r&eacute;glement&eacute;es</h2>  <p>La  radioprotection dans les mines et les usines de concentration d&rsquo;uranium d&eacute;pend  notamment de l&rsquo;installation ad&eacute;quate de syst&egrave;mes de ventilation dans les lieux  de travail, et les exigences &agrave; cet &eacute;gard dont il est question dans le pr&eacute;sent  document sont tir&eacute;es du RMUCU. Dans le pass&eacute;, des mesures de ventilation  passives et actives ont &eacute;t&eacute; utilis&eacute;es dans les mines et les usines de  concentration d&rsquo;uranium afin de limiter les concentrations de radioactivit&eacute;  dans l&rsquo;air. Il a &eacute;t&eacute; prouv&eacute; que, lorsqu&rsquo;ils sont ad&eacute;quatement con&ccedil;us,  fabriqu&eacute;s, surveill&eacute;s et entretenus, de tels syst&egrave;mes sont pratiques et  efficaces pour r&eacute;duire les risques de radioexposition. </p>  <p>Conform&eacute;ment au RMUCU, les demandeurs de permis de toute cat&eacute;gorie visant une mine ou  une usine de concentration d&rsquo;uranium, autre que le permis d&rsquo;abandon, sont  responsables de pr&eacute;senter les&nbsp;renseignements r&eacute;glement&eacute;s relatifs &agrave; tout syst&egrave;me  de ventilation ou activit&eacute; connexe propos&eacute;. Les&nbsp;exigences en mati&egrave;re de  renseignements d&eacute;pendront de l&rsquo;&eacute;tape d&rsquo;autorisation. Par exemple, une demande  de permis d&rsquo;exploitation d&rsquo;une mine ou d&rsquo;une usine de concentration d&rsquo;uranium  devrait g&eacute;n&eacute;ralement comprendre une description de la proposition finale (c&rsquo;est-&agrave;-dire  les &laquo;&nbsp;politiques, m&eacute;thodes et programmes&nbsp;&raquo;) d&rsquo;exploitation et d&rsquo;entretien  de tout syst&egrave;me de ventilation propos&eacute; ainsi&nbsp;que les renseignements sur la  conception de l&rsquo;installation &laquo;&nbsp;telle que construite&nbsp;&raquo;, alors que des  renseignements pr&eacute;liminaires sur les politiques, m&eacute;thodes et programmes d&rsquo;exploitation  et d&rsquo;entretien pourraient suffire aux &eacute;tapes du choix de l&rsquo;emplacement et de la  construction. &Agrave; l&rsquo;inverse, des entrepreneurs souhaitant utiliser des  technologies ou des m&eacute;thodes nouvelles ou non &eacute;prouv&eacute;es pourraient devoir  fournir des justifications plus rigoureuses plus t&ocirc;t dans le processus que des entrepreneurs  ayant recours &agrave; des approches conventionnelles et &eacute;prouv&eacute;es. </p>  <p>En ce qui a  trait aux mines et aux usines de concentration d&rsquo;uranium r&eacute;glement&eacute;es par la  LSRN et ses&nbsp;r&egrave;glements d&rsquo;application, les mesures et les activit&eacute;s  propos&eacute;es li&eacute;es &agrave; la ventilation d&eacute;pendront notamment de combinaisons uniques d&rsquo;exigences  l&eacute;gislatives et de facteurs propres &agrave; chaque dossier, &agrave; toutes les &eacute;tapes du processus  d&rsquo;autorisation. Ces facteurs refl&eacute;teront les possibilit&eacute;s offertes aux  demandeurs ou aux entrepreneurs et leurs pr&eacute;f&eacute;rences respectives etÂ  comprendront les restrictions relatives &agrave; l&rsquo;emplacement,  &agrave; l&rsquo;environnement et &agrave; la technologie, comme les caract&eacute;ristiques des gisements,  les technologies d&rsquo;exploitation mini&egrave;re et de traitement ainsi que les  conceptions et les m&eacute;thodes d&rsquo;exploitation des installations. </p>  <p>En plus de  respecter les exigences r&eacute;glementaires, les responsables de projets de mine ou  d&rsquo;usine de concentration d&rsquo;uranium pourraient devoir r&eacute;aliser d&rsquo;autres travaux.  Des travaux suppl&eacute;mentaires peuvent &ecirc;tre identifi&eacute;s soit au cours du processus  d&rsquo;examen de l&rsquo;&eacute;valuation environnementale, soit au cours des audiences li&eacute;es  aux permis, ou les deux. Les travaux et les conditions peuvent &ecirc;tre exig&eacute;s par  la CCSN ou d&rsquo;autres organismes gouvernementaux desquels il faut obtenir des  approbations.</p>  <p>&Agrave; toutes les &eacute;tapes  d&rsquo;autorisation, la CCSN examinera la conformit&eacute; aux exigences r&eacute;glementaires de&nbsp;tout  syst&egrave;me de ventilation ou&nbsp;activit&eacute; connexe propos&eacute; et tiendra compte de  renseignements pertinents visant directement ou indirectement le syst&egrave;me ou l&rsquo;activit&eacute;.  La LSRN et les r&egrave;glements ne&nbsp;r&eacute;gissent pas la forme des demandes de permis  visant une mine ou une usine de concentration d&rsquo;uranium, mais &eacute;tablissent  seulement le type de renseignements qui doivent y &ecirc;tre inclus. Toutefois, afin  d&rsquo;en faciliter l&rsquo;examen r&eacute;glementaire, ces renseignements devraient &ecirc;tre  organis&eacute;s de mani&egrave;re claire et logique. </p>  <p>Les sections  suivantes r&eacute;sument les exigences en mati&egrave;re de renseignements relatives aux syst&egrave;mes  de&nbsp;ventilation des mines et des usines de concentration d&rsquo;uranium.</p>
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
<h3 id="sec4-1">4.1	Toute cat&eacute;gorie de permis, autre que le permis d&rsquo;abandon</h3>  <h4>Exigences</h4>  <p>Conform&eacute;ment aux sous-alin&eacute;as&nbsp;3d)(vii)  et 3d)(viii) du  RMUCU, toute demande de permis visant une mine ou une usine de  concentration d&rsquo;uranium, autre que le permis d&rsquo;abandon, doit comprendre les  renseignements suivants&nbsp;: </p>  <ul>
<li>les m&eacute;thodes de ventilation et de  d&eacute;poussi&eacute;rage propos&eacute;s</li>
<li>l&rsquo;&eacute;quipement propos&eacute; pour contr&ocirc;ler  la qualit&eacute; de l&rsquo;air </li>
<li>le degr&eacute; d&rsquo;efficacit&eacute; et le  calendrier d&rsquo;inspection propos&eacute;s pour le syst&egrave;me de ventilation et le syst&egrave;me  de d&eacute;poussi&eacute;rage</li>  </ul>  <h4>Orientation</h4>  <p>La description du  degr&eacute; propos&eacute; d&rsquo;efficacit&eacute; des syst&egrave;mes de ventilation et de d&eacute;poussi&eacute;rages devrait  expliquer la mani&egrave;re dont le syst&egrave;me a &eacute;t&eacute; optimis&eacute; (ou dont il le sera) conform&eacute;ment  au principe du niveau le plus bas qu&rsquo;on puisse raisonnablement atteindre (ALARA)  en ce qui a trait &agrave; la limite de dose. </p>  <p>Si le demandeur  compte remplacer les mesures de ventilation techniques par d&rsquo;autres mesures de  radioprotection, ces derni&egrave;res doivent &ecirc;tre d&eacute;crites et justifi&eacute;es dans le  contexte de son programme de&nbsp;radioprotection.</p>  <p>La demande de  permis devrait permettre de d&eacute;montrer que les conceptions propos&eacute;es de syst&egrave;me  de&nbsp;ventilation sont appropri&eacute;es et que les pr&eacute;visions connexes relatives  au rendement sont valides. La&nbsp;documentation pourrait &ecirc;tre &eacute;toff&eacute;e de la description  des hypoth&egrave;ses, des crit&egrave;res, des calculs, des&nbsp;&eacute;tudes, des r&eacute;sultats de  mod&eacute;lisation, des dessins, des plans et des diagrammes &agrave; l&rsquo;appui.</p>
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
<h3 id="sec4-2">4.2	Permis de pr&eacute;paration de l&rsquo;emplacement et de construction</h3>  <h4>Exigences</h4>  <p>En plus des renseignements exig&eacute;s  conform&eacute;ment aux sous-alin&eacute;as&nbsp;3d)(vii) et 3d)(viii) du RMUCU, une  demande de permis de pr&eacute;paration de l&rsquo;emplacement et de construction d&rsquo;une mine  ou d&rsquo;une usine de concentration d&rsquo;uranium doit comprendre les renseignements suivants  s&rsquo;appliquant &agrave; la ventilation&nbsp;: </p>  <ul>
<li>un  code de pratique qui indique notamment ce qui suit&nbsp;:
<ul className="list-bullet-none">
<li>a) les seuils d&rsquo;intervention que le  demandeur juge n&eacute;cessaires pour l&rsquo;application du paragraphe&nbsp;4(2) du RMUCU</li>
<li>b) une description des mesures que le  demandeur prendra lorsqu&rsquo;un seuil d&rsquo;intervention est atteint </li>
<li>c) les proc&eacute;dures d&rsquo;&eacute;tablissement de  rapport &agrave; suivre lorsqu&rsquo;un seuil d&rsquo;intervention est atteint [paragraphe&nbsp;4(2)] </li>
</ul>
<li>une  description de la conception propos&eacute;e pour la mine ou l&rsquo;usine [alin&eacute;as&nbsp;5(1)a),  5(2)a)]</li>
<li>une  description des composants, des syst&egrave;mes et de l&rsquo;&eacute;quipement qu&rsquo;il est propos&eacute; d&rsquo;installer  &agrave;&nbsp;la&nbsp;mine ou &agrave; l&rsquo;usine, y compris leurs conditions nominales de  fonctionnement [alin&eacute;as&nbsp;5(1)c), 5(2)c)] </li>
<li>le  programme d&rsquo;assurance de la qualit&eacute; propos&eacute; pour la mine ou l&rsquo;usine [alin&eacute;as&nbsp;5(1)d),  5(2)d)] </li>
<li>les  r&eacute;sultats d&rsquo;analyse des dangers li&eacute;s aux op&eacute;rations et une description de la  fa&ccedil;on dont ces r&eacute;sultats ont &eacute;t&eacute; pris en compte [alin&eacute;as&nbsp;5(1)e), 5(2)e)] </li>
<li>le  plan propos&eacute; pour la mise en service des composants, des syst&egrave;mes et de l&rsquo;&eacute;quipement  de ventilation qui seront install&eacute;s &agrave; la mine ou &agrave; l&rsquo;usine [alin&eacute;as&nbsp;5(1)j),  5(2)i)]</li>  </ul>  <h4>Orientation</h4>
<p>Les renseignements pr&eacute;sent&eacute;s  conform&eacute;ment aux exigences susmentionn&eacute;es en vue d&rsquo;une demande de&nbsp;permis  visant la pr&eacute;paration de l&rsquo;emplacement et la construction d&rsquo;une mine ou d&rsquo;une usine  de concentration d&rsquo;uranium doivent &eacute;galement &ecirc;tre &eacute;toff&eacute;s au moyen de ce qui  suit&nbsp;: </p>  <ul>
<li>une  description de tout syst&egrave;me d&rsquo;alarme ou composant, y compris un dispositif d&rsquo;avertissement  du ventilateur principal, qui sera install&eacute; en vue de veiller au bon  fonctionnement du syst&egrave;me de ventilation [paragraphe&nbsp;11a)] </li>
<li>une  description de toute disposition relative &agrave; la conception visant la s&eacute;paration  efficace des principales prises et sorties d&rsquo;air</li>
<li>une  description de tout syst&egrave;me de ventilation auxiliaire propos&eacute;</li>
<li>les  programmes pr&eacute;liminaires de surveillance de la qualit&eacute; et de la quantit&eacute; de l&rsquo;air </li>
<li>une  description de la quantit&eacute; et de la qualit&eacute; de l&rsquo;air fourni &agrave; chaque lieu de  travail </li>
<li>une  description du d&eacute;bit pr&eacute;vu d&rsquo;&eacute;change d&rsquo;air dans le lieu de travail apr&egrave;s l&rsquo;installation  de tout syst&egrave;me de ventilation propos&eacute; </li>
<li>une  description de la qualit&eacute; pr&eacute;vue de l&rsquo;air dans le lieu de travail apr&egrave;s l&rsquo;installation  de tout syst&egrave;me de ventilation propos&eacute; </li>
<li>une  description de toute disposition administrative visant l&rsquo;exploitation efficace  du syst&egrave;me de&nbsp;ventilation</li>
<li>les  param&egrave;tres d&rsquo;exploitation propos&eacute;s en hiver et en &eacute;t&eacute; </li>
<li>les  mesures propos&eacute;es pour contr&ocirc;ler la propagation de la contamination radioactive  entre les zones ventil&eacute;es et non ventil&eacute;es des mines souterraines</li>  </ul>
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
<h3 id="sec4-3">4.3 Permis d&rsquo;exploitation</h3>  <h4>Exigences</h4>  <p>En plus des renseignements exig&eacute;s  conform&eacute;ment aux sous-alin&eacute;as&nbsp;3(d)(vii) et 3(d)(viii) du RMUCU, une  demande de permis d&rsquo;exploitation d&rsquo;une mine ou d&rsquo;une usine de concentration d&rsquo;uranium  doit comprendre les renseignements suivants s&rsquo;appliquant &agrave; la ventilation&nbsp;: </p>  <ul>
<li>un code de pratique qui indique  notamment ce qui suit&nbsp;:
<ul className="list-bullet-none">
<li>a) les seuils  d&rsquo;intervention que le demandeur juge n&eacute;cessaires pour l&rsquo;application du  paragraphe&nbsp;4(2) du RMUCU </li>
<li>b) une  description des mesures que le demandeur prendra lorsqu&rsquo;un seuil d&rsquo;intervention  est atteint </li>
<li>c) les  proc&eacute;dures d&rsquo;&eacute;tablissement de rapport &agrave; suivre lorsqu&rsquo;un seuil d&rsquo;intervention  est atteint [paragraphe&nbsp;4(2)] </li>
</ul>
</li>
<li>les politiques, m&eacute;thodes et  programmes propos&eacute;s pour l&rsquo;exploitation et l&rsquo;entretien des syst&egrave;mes de  ventilation [(alin&eacute;as&nbsp;6(1)c), 6(2)c)] </li>
<li>une description des ouvrages, des  composants, des syst&egrave;mes et de l&rsquo;&eacute;quipement construits ou&nbsp;install&eacute;s &agrave; la mine  ou l&rsquo;usine de concentration, et de leurs conditions nominales de fonctionnement  par suite de la mise en service [(alin&eacute;as&nbsp;6(1)b), 6(2)b)] </li>
<li>les r&eacute;sultats de tous travaux de  mise en service [alin&eacute;a&nbsp;6(1)a)]</li>
<li>les mesures visant &agrave; veiller &agrave; ce  qu&rsquo;une personne soit d&eacute;sign&eacute;e pour capter le signal d&rsquo;avertissement des  ventilateurs principaux et y r&eacute;pondre [paragraphe 11b)] </li>
<li>les mesures devant &ecirc;tre mises en  &oelig;uvre pour emp&ecirc;cher les personnes et les activit&eacute;s d&rsquo;entraver le fonctionnement  normal des syst&egrave;mes de ventilation [paragraphe 11c)]</li>
<li>les mesures que l&rsquo;entrepreneur  propose de mettre en &oelig;uvre pour prot&eacute;ger la sant&eacute; et la s&eacute;curit&eacute; des  travailleurs en cas de d&eacute;faillance du syst&egrave;me de ventilation dans le lieu de  travail autoris&eacute; [alin&eacute;a 12(1)a)] </li>
<li>les mesures que le demandeur de  permis propose de mettre en &oelig;uvre pour veiller, en cas de d&eacute;faillance d&rsquo;un  syst&egrave;me de ventilation, &agrave; ce que seuls les travaux n&eacute;cessaires pour remettre le&nbsp;syst&egrave;me  de ventilation en &eacute;tat soient effectu&eacute;s sur le lieu de travail [alin&eacute;a 12(1)b)] </li>
<li>la mani&egrave;re dont le titulaire de  permis informera un travailleur des mesures de protection qui ont &eacute;t&eacute; mises en  &oelig;uvre ou qui le seront dans le cadre des travaux n&eacute;cessaires pour remettre le  syst&egrave;me de ventilation en &eacute;tat [paragraphe 12(2)] </li>  </ul>  <h4>Orientation</h4>  <p>Afin de se conformer aux exigences susmentionn&eacute;es  li&eacute;es aux syst&egrave;mes de ventilation ou aux mesures connexes, une demande de  permis d&rsquo;exploitation d&rsquo;une mine ou d&rsquo;une usine de concentration d&rsquo;uranium devrait  comprendre les renseignements pertinents, m&ecirc;me s&rsquo;ils ont d&eacute;j&agrave; &eacute;t&eacute; pr&eacute;sent&eacute;s. </p>  <p>Par cons&eacute;quent, une demande de permis d&rsquo;exploitation d&rsquo;une mine ou d&rsquo;une  usine de concentration d&rsquo;uranium doit d&eacute;montrer que tout syst&egrave;me de ventilation  technique sera exploit&eacute;, surveill&eacute; et entretenu conform&eacute;ment aux exigences  r&eacute;glementaires. En g&eacute;n&eacute;ral, elle devrait d&eacute;crire ce qui suit&nbsp;:</p>  <ul>
<li>les dimensions, l&rsquo;emplacement et la  disposition des conduits de ventilation </li>
<li>l&rsquo;emplacement, le type et l&rsquo;utilit&eacute;  de tous les contr&ocirc;les et r&eacute;gulateurs des syst&egrave;mes de ventilation </li>
<li>la conception, l&rsquo;emplacement et l&rsquo;exploitation  de tout &eacute;quipement ou tous dispositifs de mesure de la qualit&eacute; ou de la  quantit&eacute; de l&rsquo;air </li>
<li>les emplacements des prises et des  sorties d&rsquo;air des syst&egrave;mes </li>
<li>la mani&egrave;re dont le syst&egrave;me de  ventilation a &eacute;t&eacute; fabriqu&eacute; pour respecter les conditions pertinentes du permis  vis&eacute; de la CCSN visant la pr&eacute;paration de l&rsquo;emplacement d&rsquo;une installation ou sa  construction</li>
<li>tout r&eacute;sultat d&eacute;coulant de la  surveillance du rendement du syst&egrave;me de ventilation durant la mise en service </li>
<li>tout changement pr&eacute;vu &agrave; la  conception, &agrave; l&rsquo;exploitation, &agrave; la surveillance, &agrave; l&rsquo;entretien ou au rendement  du syst&egrave;me de ventilation technique</li>
<li>tout code de pratique propos&eacute;  relatif au syst&egrave;me de ventilation</li>
<li>les politiques, m&eacute;thodes et  proc&eacute;dures propos&eacute;es pour l&rsquo;exploitation, l&rsquo;entretien et le contr&ocirc;le du&nbsp;syst&egrave;me  de ventilation</li>  </ul>
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
<h3 id="sec4-4">4.4	Permis de d&eacute;classement</h3>  <h4>Exigences</h4>  <p>En plus des renseignements exig&eacute;s  conform&eacute;ment aux sous-alin&eacute;as&nbsp;3(d)(vii) et 3(d)(viii) du RMUCU, une  demande de permis de d&eacute;classement d&rsquo;une mine ou d&rsquo;une usine de concentration d&rsquo;uranium  doit comprendre les renseignements suivants s&rsquo;appliquant &agrave; la  ventilation&nbsp;: </p>  <ul>
<li>un code de pratique qui indique  notamment ce qui suit&nbsp;:
<ul className="list-bullet-none">
<li>a) les  seuils d&rsquo;intervention que le demandeur juge n&eacute;cessaires pour l&rsquo;application du  paragraphe&nbsp;4(2) du RMUCU </li>
<li>b) une  description des mesures que le demandeur prendra lorsqu&rsquo;un seuil d&rsquo;intervention  est atteint </li>
<li>c) les  proc&eacute;dures d&rsquo;&eacute;tablissement de rapport &agrave; suivre lorsqu&rsquo;un seuil d&rsquo;intervention  est atteint [paragraphe&nbsp;4(2)] </li>
</ul>
<li>une description des travaux de  d&eacute;classement et le calendrier propos&eacute; de ceux-ci, y compris la justification du  calendrier et les dates pr&eacute;vues de d&eacute;but et d&rsquo;ach&egrave;vement des travaux [paragraphe&nbsp;7a)] </li>
<li>les terrains, les b&acirc;timents, les  ouvrages, les composants, les syst&egrave;mes, l&rsquo;&eacute;quipement, les substances nucl&eacute;aires  et les substances dangereuses qui seront touch&eacute;s par le d&eacute;classement [paragraphe&nbsp;7b)] </li>
<li>les mesures, m&eacute;thodes et programmes  de d&eacute;classement propos&eacute;s [alin&eacute;a&nbsp;7c)]</li>
<li>une description de l&rsquo;&eacute;tat pr&eacute;vu de l&rsquo;emplacement  apr&egrave;s l&rsquo;ach&egrave;vement des travaux de d&eacute;classement&nbsp;[alin&eacute;a&nbsp;7d)]</li>  </ul>  <h4>Orientation</h4>  <p>Le demandeur devrait &eacute;toffer  suffisamment les renseignements pr&eacute;sent&eacute;s &agrave; l&rsquo;appui d&rsquo;une demande de permis de  d&eacute;classement traitant des exigences susmentionn&eacute;es pour d&eacute;montrer qu&rsquo;il a suffisamment  pris en compte la s&ucirc;ret&eacute; et la s&eacute;curit&eacute; des personnes, la protection de leur  sant&eacute; et de l&rsquo;environnement ainsi que le maintien de la s&eacute;curit&eacute; nationale durant  le d&eacute;classement.</p>  <p>Les mesures prises par le demandeur  &agrave; cet &eacute;gard peuvent notamment &ecirc;tre les suivantes&nbsp;: accro&icirc;tre la&nbsp;ventilation  durant toutes les activit&eacute;s li&eacute;es au d&eacute;classement ou une partie de celles-ci,  ce qui peut comprendre l&rsquo;utilisation continue, avec ou sans modifications, d&rsquo;un  syst&egrave;me de ventilation utilis&eacute; &agrave; l&rsquo;&eacute;tape de l&rsquo;exploitation, ou le recours &agrave; de  nouvelles mesures. Par cons&eacute;quent, les mesures privil&eacute;gi&eacute;es par un demandeur de  permis seront influenc&eacute;es par des circonstances propres au dossier, par exemple  la question de savoir si des syst&egrave;mes de ventilation d&eacute;j&agrave; install&eacute;s ont &eacute;t&eacute;  contamin&eacute;s par le rayonnement &agrave; la suite de leur utilisation ou s&rsquo;il est  probable que les syst&egrave;mes de ventilation propos&eacute;s soient contamin&eacute;s durant leur  utilisation. Afin d&rsquo;acc&eacute;l&eacute;rer l&rsquo;examen r&eacute;glementaire et l&rsquo;autorisation, la  demande de permis de d&eacute;classement devrait tenir compte de telles possibilit&eacute;s.</p>  <p>Le personnel de la CCSN pourrait exiger  d&rsquo;un demandeur qu&rsquo;il pr&eacute;cise les d&eacute;tails de son plan de d&eacute;classement afin d&rsquo;&eacute;valuer  la pertinence de l&rsquo;utilisation ou du d&eacute;classement propos&eacute; d&rsquo;&eacute;quipement et de syst&egrave;mes  de ventilation.</p>  <p>Afin de favoriser le contr&ocirc;le de la  radioexposition des travailleurs et du public durant les activit&eacute;s de&nbsp;d&eacute;classement,  les seuils d&rsquo;intervention relatifs aux activit&eacute;s de ventilation ou les  r&eacute;sultats connexes peuvent &ecirc;tre int&eacute;gr&eacute;s dans les codes de pratique des mines  et des usines de concentration d&rsquo;uranium.</p>
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
<h2 id="sec5">5.	Exigences en mati&egrave;re d&rsquo;exploitation et d&rsquo;entretien</h2>  <h3>Exigences</h3>  <p>Si un code de pratique est cit&eacute; en  r&eacute;f&eacute;rence dans un permis visant une mine ou une usine de concentration d&rsquo;uranium,  le titulaire de permis est tenu, conform&eacute;ment &agrave; l&rsquo;article&nbsp;9 du RMUCU, d&rsquo;en&nbsp;afficher  un exemplaire &agrave; un endroit accessible &agrave; tous les travailleurs et o&ugrave; ce code est  le plus susceptible d&rsquo;&ecirc;tre port&eacute; &agrave; leur attention.</p>  <p>Conform&eacute;ment au paragraphe 10a) du RMUCU,  tous les titulaires de permis de la CCSN doivent &eacute;tablir par &eacute;crit, appliquer  et tenir &agrave; jour les proc&eacute;dures relatives aux activit&eacute;s autoris&eacute;es. Par  cons&eacute;quent, les&nbsp;titulaires de permis visant une mine ou une usine de  concentration d&rsquo;uranium qui utilisent des syst&egrave;mes de ventilation dans le cadre  de la protection des travailleurs et du public doivent &eacute;tablir par&nbsp;&eacute;crit,  appliquer et tenir &agrave; jour des proc&eacute;dures en vue de l&rsquo;exploitation efficace de  ces syst&egrave;mes. Les proc&eacute;dures d&rsquo;exploitation devraient comprendre des  dispositions relatives notamment aux programmes d&rsquo;inspection, de surveillance ou  d&rsquo;&eacute;chantillonnage ayant pour but d&rsquo;&eacute;valuer et de contr&ocirc;ler les syst&egrave;mes  associ&eacute;s et d&rsquo;en d&eacute;montrer l&rsquo;efficacit&eacute;.</p>  <p>Selon le paragraphe 10b), le  titulaire de permis a &eacute;galement l&rsquo;obligation de former les travailleurs afin qu&rsquo;ils  accomplissent leur travail conform&eacute;ment aux proc&eacute;dures d&rsquo;exploitation. &Agrave; cette  fin, il doit veiller &agrave; ce que les travailleurs qui doivent suivre les  proc&eacute;dures d&rsquo;exploitation des syst&egrave;mes de ventilation re&ccedil;oivent une formation &agrave;  cet &eacute;gard.</p>  <p>Conform&eacute;ment au paragraphe 10c) du RMUCU,  les titulaires de permis doivent &eacute;galement faire des v&eacute;rifications aupr&egrave;s des  travailleurs pour s&rsquo;assurer qu&rsquo;ils se conforment aux proc&eacute;dures d&rsquo;exploitation  pertinentes dans le cadre des activit&eacute;s autoris&eacute;es, y compris celles visant les  syst&egrave;mes de ventilation des mines et des usines de concentration d&rsquo;uranium.</p>  <p>En vertu de l&rsquo;article&nbsp;11 du RMUCU,  le titulaire de permis&nbsp;: </p>  <ul>
<li>veille &agrave; ce que chaque ventilateur  principal soit muni d&rsquo;un dispositif qui, lorsque le ventilateur ne&nbsp;fonctionne  pas normalement, &eacute;met un signal d&rsquo;avertissement [paragraphe&nbsp;11a)] </li>
<li>veille &agrave; ce qu&rsquo;une personne soit  d&eacute;sign&eacute;e pour capter ce signal et y r&eacute;pondre [paragraphe 11b)] </li>
<li>met en &oelig;uvre des mesures qui  emp&ecirc;chent les personnes et les activit&eacute;s d&rsquo;entraver le fonctionnement normal  des syst&egrave;mes de ventilation [paragraphe&nbsp;11c)]</li>  </ul>  <p>En vertu de l&rsquo;article&nbsp;12 du RMUCU,  lorsque le syst&egrave;me de ventilation d&rsquo;un lieu de travail ne fonctionne pas  conform&eacute;ment au permis, le titulaire de permis&nbsp;: </p>  <ul>
<li>met en &oelig;uvre des mesures de rechange  destin&eacute;es &agrave; prot&eacute;ger la sant&eacute; et la s&eacute;curit&eacute; des travailleurs [alin&eacute;a&nbsp;12(1)a)] </li>
<li>veille &agrave; ce que seuls les travaux  n&eacute;cessaires pour remettre le syst&egrave;me de ventilation en &eacute;tat soient effectu&eacute;s  sur le lieu de travail [alin&eacute;a&nbsp;12(1)b)]</li>  </ul>  <p>Conform&eacute;ment au paragraphe&nbsp;12(2)  du RMUCU, avant qu&rsquo;un travailleur commence &agrave; effectuer les&nbsp;travaux de  remise en &eacute;tat du syst&egrave;me de ventilation d&rsquo;une mine ou d&rsquo;une usine de  concentration d&rsquo;uranium, le titulaire de permis l&rsquo;avise des mesures de protection  d&eacute;j&agrave; prises et de celles &agrave; prendre durant les travaux.<br />
En vertu de l&rsquo;article&nbsp;16 du RMUCU,  le titulaire de permis doit conserver les documents suivants ayant un lien avec  les syst&egrave;mes de ventilation ou pouvant en avoir un&nbsp;:</p>  <ul>
<li>les proc&eacute;dures d&rsquo;exploitation et d&rsquo;entretien  [alin&eacute;a&nbsp;16(1)a)]</li>
<li>la conception de la mine ou de l&rsquo;usine  de concentration d&rsquo;uranium ainsi que des composants et des syst&egrave;mes qui y sont  install&eacute;s [alin&eacute;a&nbsp;16(1)e)]</li>
<li>la m&eacute;thode et les donn&eacute;es  pertinentes utilis&eacute;es pour calculer les doses de rayonnement re&ccedil;ues par&nbsp;les  travailleurs &agrave; la mine ou &agrave; l&rsquo;usine de concentration d&rsquo;uranium et l&rsquo;absorption  par eux de substances nucl&eacute;aires radioactives [alin&eacute;a&nbsp;16(1)f)] </li>
<li>les relev&eacute;s effectu&eacute;s conform&eacute;ment  au permis ou aux r&egrave;glements pris en vertu de la Loi [alin&eacute;a&nbsp;16(1)g)] </li>
<li>les inspections et les travaux d&rsquo;entretien  effectu&eacute;s conform&eacute;ment au permis ou aux r&egrave;glements pris en vertu de la Loi [alin&eacute;a&nbsp;16(1)h)] </li>
<li>la quantit&eacute; d&rsquo;air fournie par chaque  ventilateur principal [alin&eacute;a&nbsp;16(1)i)] </li>
<li>le rendement de chaque syst&egrave;me de  d&eacute;poussi&eacute;rage [alin&eacute;a&nbsp;16(1)j)] </li>
<li>la formation re&ccedil;ue par chaque  travailleur [alin&eacute;a&nbsp;16(1)k)]</li>  </ul>  <p>En vertu de l&rsquo;article&nbsp;16 du RMUCU, le titulaire de permis&nbsp;: </p>  <ul>
<li>met &agrave; la disposition des  travailleurs et du repr&eacute;sentant des travailleurs, &agrave; la mine ou &agrave; l&rsquo;usine de&nbsp;concentration  d&rsquo;uranium, les documents vis&eacute;s au paragraphe (1) [paragraphe&nbsp;16(2)] </li>
<li>conserve les documents relatifs &agrave; la  formation vis&eacute;s &agrave; l&rsquo;alin&eacute;a (1)k) pendant la p&eacute;riode o&ugrave; le travailleur est  employ&eacute; &agrave; la mine ou &agrave; l&rsquo;usine de concentration d&rsquo;uranium [paragraphe&nbsp;16(3)] </li>
<li>affiche dans la mine ou l&rsquo;usine de  concentration d&rsquo;uranium les r&eacute;sultats des relev&eacute;s effectu&eacute;s dans chaque lieu de  travail conform&eacute;ment au permis et au pr&eacute;sent r&egrave;glement, &agrave; un endroit accessible  &agrave; tous les travailleurs, o&ugrave; ces r&eacute;sultats sont les plus susceptibles d&rsquo;&ecirc;tre  port&eacute;s &agrave; leur attention conform&eacute;ment au permis et au RMUCU [paragraphe&nbsp;16(4)]</li>  </ul>
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
<h2 id="glossary">Glossaire</h2>  <p>Pour  conna&icirc;tre la d&eacute;finition des termes utilis&eacute;s dans le pr&eacute;sent document, veuillez  consulter le <a href="http://www.nuclearsafety.gc.ca/pubs_catalogue/uploads_fre/REGDOC-3-6-Glossary-of-CNSC-Terminology-fra.pdf">REGDOC-3.6, <em>Glossaire de la CCSN</em></a>, qui fournit une liste de termes utilis&eacute;s avec leur(s) d&eacute;finition(s)  dans la LSRN, ses r&egrave;glements d&rsquo;application et ainsi que les documents d&rsquo;application  de la r&eacute;glementation et d&rsquo;autres publications de la CCSN. Le REGDOC-3.6 est  fourni aux fins d&rsquo;information.</p>
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
<h2 id="ref">R&eacute;f&eacute;rences</h2>  <p>CCSN, REGDOC-3.5.1, <em>Processus d&rsquo;autorisation des installations nucl&eacute;aires de cat&eacute;gorie I et des mines et usines de concentration d&rsquo;uranium</em>, Ottawa, Canada, 2015.</p>  <p>CCSN, REGDOC-2.9.1, <em>Protection de l&rsquo;environnement : Politique, &eacute;valuations environnementales et mesures de protection de l&rsquo;environnement</em>, Ottawa, Canada, 2016.</p>  <p>CCSN, G-129, r&eacute;vision 1, <em>Maintenir les expositions et les doses au &laquo; niveau le plus bas qu&rsquo;il soit raisonnablement possible d&rsquo;atteindre (ALARA) &raquo;</em>, Ottawa, Canada, 2004.</p>  <p>CCSN, G-4, <em>La mesure des produits de filiation du radon en suspension dans l&rsquo;air dans les mines d&rsquo;uranium et les usines de concentration</em>, Ottawa, Canada, 2003.</p>  <p>CCSN, G-228, <em>&eacute;laboration et utilisation des seuils d&rsquo;intervention</em>, Ottawa, Canada, 2001.</p>
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
<p><strong>Remarque&nbsp;:</strong> Les s&eacute;ries de documents d&#39;application de la r&eacute;glementation pourraient &ecirc;tre modifi&eacute;es p&eacute;riodiquement par la CCSN. Chaque s&eacute;rie susmentionn&eacute;e peut comprendre de plusieurs documents d&#39;application de la r&eacute;glementation. Pour obtenir la plus r&eacute;cente liste de documents d&#39;application de la r&eacute;glementation, veuillez consulter le <a href="/fra/acts-and-regulations/regulatory-documents/index">site Web de la CCSN</a>.</p>
</div>  <div className="clear"></div>

                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }