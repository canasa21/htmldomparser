import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "fr",
                pageTitle: "REGDOC-1.1.5 : Guide de présentation d'une demande de permis : Installations dotées de petits réacteurs modulaires", 
                dateModified: "2018-07-18",
                langToggleUrl: "/eng/acts-and-regulations/consultation/comment/regdoc1-1-5"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<h2 id="preface">Pr&eacute;face</h2>  <p>Le document d&rsquo;application de la r&eacute;glementation REGDOC-1.1.5, <em>Guide de pr&eacute;sentation d&rsquo;une demande de permis : Installations dot&eacute;es de petits r&eacute;acteurs</em> modulaires &eacute;tablit les exigences et l&rsquo;orientation en vue de pr&eacute;senter &agrave; la CCSN une demande des types suivants de permis pour une installation dot&eacute;e de petits r&eacute;acteurs modulaires (PRM) au Canada : permis de pr&eacute;paration de l&rsquo;emplacement, permis de construction et permis d&rsquo;exploitation. Le REGDOC-1.1.5 cerne &eacute;galement des facteurs dont tient compte la CCSN dans l&rsquo;&eacute;valuation de la pertinence des documents soumis.</p>  <p>Le pr&eacute;sent document sera utilis&eacute; par le personnel de la CCSN pour &eacute;valuer les demandes de permis visant des projets de PRM, qui comprennent &eacute;galement des r&eacute;acteurs avanc&eacute;s. Si la Commission d&eacute;livre un permis, les mesures de s&ucirc;ret&eacute; et de r&eacute;glementation d&eacute;crites dans la demande de permis et les documents qui appuient la demande feront partie du fondement d&rsquo;autorisation.</p>  <p>Une m&eacute;thode graduelle et proportionnelle au risque peut &ecirc;tre d&eacute;finie et utilis&eacute;e dans l&rsquo;application des exigences et de l&rsquo;orientation du pr&eacute;sent document d&rsquo;application de la r&eacute;glementation. L&rsquo;utilisation de la m&eacute;thode graduelle ne signifie pas un rel&acirc;chement des exigences : ces derni&egrave;res sont plut&ocirc;t appliqu&eacute;es de fa&ccedil;on proportionnelle au risque et aux caract&eacute;ristiques de l&rsquo;installation ou de l&rsquo;activit&eacute;.</p>  <p>L&rsquo;information contenue dans le pr&eacute;sent document est conforme aux pratiques nationales et internationales modernes qui abordent les questions et les &eacute;l&eacute;ments permettant de r&eacute;glementer et d&rsquo;am&eacute;liorer la s&ucirc;ret&eacute; nucl&eacute;aire. Plus particuli&egrave;rement, elle &eacute;tablit une approche moderne et tenant compte du risque pour l&rsquo;autorisation des PRM.</p>
<div className="col-md-12 module-table-contents">
<h2>Table des mati&egrave;res</h2>
<ul>
<li><a href="#sec1">1. Introduction</a>
<ul>
<li><a href="#sec1-1">1.1 Objet et port&eacute;e</a></li>
<li><a href="#sec1-2">1.2 Contexte</a></li>
</ul></li>
<li><a href="#sec2">2. Contenu de la demande de permis</a>
<ul>
<li><a href="#sec2-1">2.1 Renseignements g&eacute;n&eacute;raux sur le demandeur</a></li>
<li><a href="#sec2-2">2.2 Renseignements pris en compte par le demandeur en fonction des domaines de s&ucirc;ret&eacute; et de r&eacute;glementation</a>
<ul>
<li><a href="#sec2-2-1">2.2.1	Syst&egrave;me de gestion</a></li>
<li><a href="#sec2-2-2">2.2.2 Gestion de la performance humaine</a></li>
<li><a href="#sec2-2-3">2.2.3 Conduite de l&rsquo;exploitation</a></li>
<li><a href="#sec2-2-4">2.2.4 Analyse de la s&ucirc;ret&eacute;</a></li>
<li><a href="#sec2-2-5">2.2.5 Conception mat&eacute;rielle</a></li>
<li><a href="#sec2-2-6">2.2.6 Aptitude fonctionnelle</a></li>
<li><a href="#sec2-2-7">2.2.7 Radioprotection</a></li>
<li><a href="#sec2-2-8">2.2.8 Sant&eacute; et s&eacute;curit&eacute; classiques</a></li>
<li><a href="#sec2-2-9">2.2.9 Protection de l&rsquo;environnement</a></li>
<li><a href="#sec2-2-10">2.2.10 Gestion des urgences et protection-incendie</a></li>
<li><a href="#sec2-2-11">2.2.11 Gestion des d&eacute;chets</a></li>
<li><a href="#sec2-2-12">2.2.12 S&eacute;curit&eacute;</a></li>
<li><a href="#sec2-2-13">2.2.13 Garanties et non-prolif&eacute;ration</a></li>
<li><a href="#sec2-2-14">2.2.14 Emballage et transport</a></li>
</ul></li>
<li><a href="#sec2-3">2.3 Autres domaines de r&eacute;glementation</a></li>
</ul></li>
<li><a href="#appA">Annexe A : &Eacute;laboration du fondement d&rsquo;autorisation d&rsquo;une installation dot&eacute;e d&rsquo;un petit r&eacute;acteur modulaire</a>
<ul>
<li><a href="#appA-1">A.1	Application d&rsquo;une m&eacute;thode graduelle</a></li>
<li><a href="#appA-2">A.2	Proposition d&rsquo;autres approches</a></li>
</ul></li>
<li><a href="#appB">Annexe B : R&ocirc;le des activit&eacute;s pr&eacute;alables &agrave; l&rsquo;autorisation dans l&rsquo;&eacute;tablissement du fondement d&rsquo;autorisation d&rsquo;une installation dot&eacute;e d&rsquo;un petit r&eacute;acteur modulaire</a>
<ul>
<li><a href="#appB-1">B.1	R&ocirc;le de l&rsquo;examen de la conception du fournisseur dans le processus d&rsquo;autorisation</a></li>
<li><a href="#appB-2">B.2 Port&eacute;e du processus d&rsquo;&eacute;tablissement d&rsquo;une strat&eacute;gie d&rsquo;autorisation appropri&eacute;e pour un projet de PRM</a>
<ul>
<li><a href="#appB-2-1">B.2.1 Processus d&rsquo;&eacute;tablissement d&rsquo;une strat&eacute;gie d&rsquo;autorisation appropri&eacute;e pour une nouvelle technologie nucl&eacute;aire</a></li>
</ul></li>
<li><a href="#appB-3">B.3 Description pr&eacute;liminaire des activit&eacute;s et des dangers</a>
<ul>
<li><a href="#appB-3-1">B.3.1 Information requise dans la description pr&eacute;liminaire</a></li>
</ul></li>
</ul></li>
<li><a href="#glossary">Glossaire</a></li>   </ul>
</div>  <div className="clear"></div>
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
<h3 id="sec1-1">1.1 Objet et port&eacute;e</h3>  <p>Le pr&eacute;sent document fournit des conseils et de l&rsquo;orientation quant aux renseignements &agrave; pr&eacute;senter &agrave; la Commission canadienne de s&ucirc;ret&eacute; nucl&eacute;aire (CCSN) &agrave; l&rsquo;appui d&rsquo;une demande de permis de pr&eacute;paration de l&rsquo;emplacement, de construction ou d&rsquo;exploitation d&rsquo;une installation dot&eacute;e d&rsquo;un petit r&eacute;acteur modulaire (PRM) au Canada. Si un permis est d&eacute;livr&eacute; par la Commission, les renseignements pr&eacute;sent&eacute;s dans la demande de permis feront partie du fondement d&rsquo;autorisation.</p>  <p>Le REGDOC-1.1.5, <em>Guide de pr&eacute;sentation d&rsquo;une demande de permis : Installations dot&eacute;es de petits r&eacute;acteurs modulaires</em> fournit de l&rsquo;information sur les domaines de s&ucirc;ret&eacute; et de r&eacute;glementation de la CCSN dans le contexte d&rsquo;une demande de permis pour une installation dot&eacute;e d&rsquo;un PRM. Il est con&ccedil;u pour &ecirc;tre utilis&eacute; parall&egrave;lement aux consultations aupr&egrave;s du personnel de la CCSN et aux trois documents d&rsquo;application de la r&eacute;glementation suivants, qui &eacute;tablissent les exigences et l&rsquo;orientation qu&rsquo;un demandeur doit examiner avant de pr&eacute;senter une demande de permis :</p>
<ul>
<li><a href="/fra/acts-and-regulations/regulatory-documents/published/html/regdoc-1-1-1/index">REGDOC-1.1.1, <em>Permis de pr&eacute;paration de l&rsquo;emplacement et &eacute;valuation de l&rsquo;emplacement des nouvelles installations dot&eacute;es de r&eacute;acteurs</em></a></li>
<li><a href="/fra/acts-and-regulations/regulatory-documents/published/html/rdgd369/index">RD/GD-369, <em>Guide de pr&eacute;sentation d&rsquo;une demande de permis : Permis de construction d&rsquo;une centrale nucl&eacute;aire</em></a></li>
<li><a href="/fra/acts-and-regulations/regulatory-documents/published/html/regdoc1-1-3/index">REGDOC-1.1.3, <em>Guide de pr&eacute;sentation d&rsquo;une demande de permis : Permis d&rsquo;exploitation d&rsquo;une centrale nucl&eacute;aire</em></a></li>  	</ul>  <p>S&rsquo;il est n&eacute;cessaire de r&eacute;aliser une &eacute;valuation environnementale, en vertu de la l&eacute;gislation f&eacute;d&eacute;rale et provinciale applicable en mati&egrave;re d&rsquo;&eacute;valuation environnementale (ou &eacute;tude d&rsquo;impact), cela sera cern&eacute; d&egrave;s le d&eacute;but du processus d&rsquo;autorisation (par exemple, lors de la d&eacute;termination du caract&egrave;re ad&eacute;quat de l&rsquo;emplacement d&rsquo;une nouvelle installation). Le personnel de la CCSN informera le demandeur de la n&eacute;cessit&eacute; de r&eacute;aliser une &eacute;valuation environnementale avant que ce dernier ne pr&eacute;sente sa demande de permis. Le promoteur peut &eacute;galement b&eacute;n&eacute;ficier d&rsquo;une orientation additionnelle, au-del&agrave; du pr&eacute;sent guide, en vue d&rsquo;&eacute;laborer sa demande.</p>   <p>L&rsquo;annexe A du pr&eacute;sent document fournit de l&rsquo;orientation sur la mise en &oelig;uvre de la m&eacute;thode graduelle et l&rsquo;utilisation d&rsquo;autres approches pour l&rsquo;&eacute;tablissement du fondement d&rsquo;autorisation des installations dot&eacute;es de PRM. L&rsquo;annexe B &eacute;tablit le r&ocirc;le des activit&eacute;s pr&eacute;alables &agrave; l&rsquo;autorisation dans l&rsquo;&eacute;tablissement du fondement d&rsquo;autorisation d&rsquo;un PRM. Les activit&eacute;s pr&eacute;alables &agrave; l&rsquo;autorisation n&eacute;cessitent un processus clairement d&eacute;fini de la CCSN visant &agrave; &eacute;tablir une strat&eacute;gie appropri&eacute;e d&rsquo;autorisation d&rsquo;un PRM et peuvent en outre comprendre un examen facultatif de la conception du fournisseur.</p>
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
<h3 id="sec1-2">1.2 Contexte</h3>  <p>La CCSN reconna&icirc;t que la conception d&rsquo;un PRM ou la demande de permis de pr&eacute;paration de l&rsquo;emplacement, de construction ou d&rsquo;exploitation d&rsquo;un PRM repr&eacute;sente un projet consid&eacute;rable. Afin de faciliter ces processus, elle offre deux types de prise de contact pr&eacute;alable &agrave; l&rsquo;autorisation :</p>
<ol>
<li><strong>Examen de la conception d&rsquo;un r&eacute;acteur de fournisseur pr&eacute;alable &agrave; l&rsquo;autorisation :</strong> Commun&eacute;ment appel&eacute; &laquo; examen de la conception du fournisseur &raquo; (ECF), ce processus est abord&eacute; bri&egrave;vement &agrave; la section B.1 de l&rsquo;annexe B et de mani&egrave;re approfondie dans le guide d&rsquo;application de la r&eacute;glementation de la CCSN GD-385, <em>Examen de la conception d&rsquo;un r&eacute;acteur de fournisseur pr&eacute;alable &agrave; l&rsquo;autorisation</em>. Ce processus comprend un examen par la CCSN de la conception d&rsquo;un fournisseur afin de cerner et de r&eacute;soudre les probl&egrave;mes techniques et r&eacute;glementaires potentiels qui pourraient survenir au cours du processus d&rsquo;autorisation. L&rsquo;ECF vise &agrave; aider un fournisseur &agrave; comprendre les exigences r&eacute;glementaires lorsqu&rsquo;il r&eacute;alise la conception d&rsquo;un PRM; il a lieu avant que le promoteur pr&eacute;sente sa demande de permis en utilisant la conception en question.</li>
<li><p className="mrgn-tp-0"><strong>Prise de contact pr&eacute;alable &agrave; l&rsquo;autorisation :</strong> Dans le contexte de la prise de contact pr&eacute;alable &agrave; l&rsquo;autorisation (expliqu&eacute;e en d&eacute;tail &agrave; la section B.2), la CCSN collabore avec un demandeur potentiel afin :</p>
<ul>
<li>d&rsquo;&eacute;tablir une strat&eacute;gie d&rsquo;autorisation appropri&eacute;e.</li>
<li>de fournir une orientation sur l&rsquo;&eacute;laboration d&rsquo;une demande de permis en vue de sa pr&eacute;sentation &agrave; la CCSN.</li>
</ul></li>
<p>Ces deux activit&eacute;s pr&eacute;alables &agrave; l&rsquo;autorisation (ECF et prise de contact pr&eacute;alable &agrave; l&rsquo;autorisation) visent &agrave; clarifier la r&eacute;glementation pour le demandeur de permis. Elles int&egrave;grent les facteurs dont il faut tenir compte sur le plan du risque (d&eacute;crits &agrave; l&rsquo;annexe A) et dont la CCSN se sert pour &eacute;valuer la mesure dans laquelle les activit&eacute;s ou les conceptions de PRM respectent ses exigences.</p>
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
<h2 id="sec2">2. Contenu de la demande de permis</h2>  <p>Les renseignements suivants sont &eacute;nonc&eacute;s aux sections 2.1, 2.2 et 2.3, respectivement, afin d&rsquo;orienter la demande de permis du promoteur :</p>  <ul>
<li>Renseignements g&eacute;n&eacute;raux sur le demandeur : porte sur les renseignements g&eacute;n&eacute;raux relatifs au projet de PRM.</li>
<li>Renseignements pris en compte par le demandeur en fonction des domaines de s&ucirc;ret&eacute; et de r&eacute;glementation : porte sur les renseignements propres aux domaines de s&ucirc;ret&eacute; et de r&eacute;glementation (DSR) dans le contexte du projet de PRM.</li>
<li>Autres domaines de r&eacute;glementation : porte sur les renseignements non abord&eacute;s dans les deux sections susmentionn&eacute;es (renseignements g&eacute;n&eacute;raux et renseignements propres aux DSR).</li>  	</ul>
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
<h3 id="sec2-1">2.1	Renseignements g&eacute;n&eacute;raux sur le demandeur</h3>  <p>Cette section tient compte des exigences des r&egrave;glements suivants, pris en vertu de la <em>Loi sur la s&ucirc;ret&eacute; et la r&eacute;glementation nucl&eacute;aires</em> :</p>
<ul>
<li><em>R&egrave;glement g&eacute;n&eacute;ral sur la s&ucirc;ret&eacute; et la r&eacute;glementation nucl&eacute;aires</em>, alin&eacute;as 3(1)a), b), c), d), k) et m) et articles 15 et 27</li>
<li><em>R&egrave;glement sur les installations nucl&eacute;aires de cat&eacute;gorie I</em>, ali&eacute;nas 3a), b), c), e), i) et j)</li>
<li><em>R&egrave;glement sur la s&eacute;curit&eacute; nucl&eacute;aire</em>, alin&eacute;a 3b)</li>  	</ul>  <p>Afin de respecter les r&egrave;glements, la demande de permis devra comporter les renseignements g&eacute;n&eacute;raux suivants :</p>
<ol>
<li>Renseignements g&eacute;n&eacute;raux sur le demandeur
<ul className="list-lower-alpha">
<li>identification et coordonn&eacute;es</li>
<li>nom et adresse d&rsquo;affaires du demandeur</li>
<li>adresse postale</li>
<li>noms de toutes les personnes autoris&eacute;es &agrave; repr&eacute;senter le demandeur aupr&egrave;s de la CCSN</li>
<li>preuve de statut juridique</li>
<li>preuve que le demandeur est le propri&eacute;taire de l&rsquo;emplacement ou qu&rsquo;il est mandat&eacute; par celui-ci pour exercer l&rsquo;activit&eacute; vis&eacute;e par la demande</li>
<li>identification des personnes responsables de la gestion et du contr&ocirc;le de l&rsquo;activit&eacute; autoris&eacute;e</li>
<li>personne-ressource pour la facturation</li>
<li>signataire d&ucirc;ment autoris&eacute;</li>
</ul></li>
<li>Description du projet
<ul className="list-lower-alpha">
<li>expos&eacute; du but principal</li>
<li>description du site</li>
<li>description de l&rsquo;&eacute;tat du processus d&rsquo;autorisation d&eacute;j&agrave; en cours pour l&rsquo;installation, s&rsquo;il y a lieu</li>
<li>permis, certificats et autres licences</li>
<li>installations semblables</li>
</ul></li>
<li>Autres renseignements g&eacute;n&eacute;raux
<ul className="list-lower-alpha">
<li>p&eacute;riode d&rsquo;autorisation</li>
<li>substances nucl&eacute;aires et dangereuses</li>
<li>renseignements &agrave; l&rsquo;appui</li>
</ul></li>  	</ol>  <p>Le demandeur peut indiquer les renseignements et documents pertinents qui sont assujettis &agrave; des exigences de confidentialit&eacute;.</p>
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
<h3 id="sec2-2">2.2	Renseignements pris en compte par le demandeur en fonction des domaines de s&ucirc;ret&eacute; et de r&eacute;glementation</h3>  <p>Les DSR sont les domaines techniques utilis&eacute;s par le personnel de la CCSN pour l&rsquo;ensemble des installations et activit&eacute;s r&eacute;glement&eacute;es en vue d&rsquo;&eacute;valuer, d&rsquo;analyser, d&rsquo;examiner et de v&eacute;rifier les exigences r&eacute;glementaires et le rendement et de rendre des comptes &agrave; leur &eacute;gard.</p>  <p>Veuillez consulter la <a href="/fra/acts-and-regulations/regulatory-documents/index">page Web sur les documents d&rsquo;application de la r&eacute;glementation</a> de la CCSN pour obtenir une liste des documents d&rsquo;application de la r&eacute;glementation qui pourraient s&rsquo;appliquer aux DSR vis&eacute;s par une demande de permis, selon l&rsquo;activit&eacute; propos&eacute;e et le type de permis demand&eacute;. Ces documents &eacute;tablissent des attentes et de l&rsquo;orientation approfondies sur la mani&egrave;re de mettre en &oelig;uvre des mesures ad&eacute;quates pour chaque DSR.</p>  <p>Les sections 2.2.1 &agrave; 2.2.14 fournissent de l&rsquo;information propre aux DSR dont le promoteur doit tenir compte afin d&rsquo;&eacute;tablir la priorit&eacute; devant &ecirc;tre accord&eacute;e &agrave; chaque DSR dans sa demande de permis.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="2.2.1"></div>
<h4 id="sec2-2-1">2.2.1	Syst&egrave;me de gestion</h4>  <p>Le DSR Syst&egrave;me de gestion englobe le cadre qui &eacute;tablit les processus et les programmes n&eacute;cessaires pour s&rsquo;assurer qu&rsquo;une organisation atteint ses objectifs en mati&egrave;re de s&ucirc;ret&eacute;, surveille continuellement son rendement par rapport &agrave; ces objectifs et favorise une saine culture de s&ucirc;ret&eacute;.</p>  <p>Ce DSR couvre les domaines particuliers suivants :</p>
<ol>
<li>Syst&egrave;me de gestion</li>
<li>Organisation</li>
<li>Examen de l&rsquo;&eacute;valuation, de l&rsquo;am&eacute;lioration et de la gestion du rendement</li>
<li>Exp&eacute;rience d&rsquo;exploitation</li>
<li>Gestion du changement</li>
<li>Culture de s&ucirc;ret&eacute;</li>
<li>Gestion de la configuration</li>
<li>Gestion des documents</li>
<li>Gestion des entrepreneurs</li>
<li>Continuit&eacute; des op&eacute;rations</li>  	</ol>  <p>Veuillez consulter la <a href="/fra/acts-and-regulations/regulatory-documents/index#R9">page Web sur les documents d&rsquo;application de la r&eacute;glementation</a> de la CCSN pour obtenir une liste des documents d&rsquo;application de la r&eacute;glementation et des normes CSA qui pourraient s&rsquo;appliquer au DSR Syst&egrave;me de gestion, selon l&rsquo;activit&eacute; propos&eacute;e et le type de permis demand&eacute;.</p>  <p>Dans le cadre de l&rsquo;&eacute;valuation de ce DSR et de sa priorit&eacute; relative, le demandeur devrait prendre en compte ce qui suit :</p>
<ol>
<li>Complexit&eacute; de l&rsquo;installation ou de l&rsquo;activit&eacute;, notamment
<ul className="list-lower-alpha">
<li>complexit&eacute; des processus g&eacute;r&eacute;s requis</li>
<li>complexit&eacute; de l&rsquo;organisation</li>
<li>nombre et taille des sources radioactives ou nucl&eacute;aires pr&eacute;sentes</li>
<li>nombre de sources radioactives utilis&eacute;es simultan&eacute;ment</li>
<li>degr&eacute; d&rsquo;automatisation</li>
</ul></li>
<li>Structure de l&rsquo;organisation responsable de l&rsquo;exploitation</li>
<li>N&eacute;cessit&eacute; de mettre en place des processus g&eacute;r&eacute;s efficaces pour contr&ocirc;ler les dangers relev&eacute;s, notamment :
<ul className="list-lower-alpha">
<li>contr&ocirc;le du changement</li>
<li>contr&ocirc;le de la conception</li>
<li>contr&ocirc;le des documents</li>
<li>planification et contr&ocirc;le du travail</li>
<li>mesures correctives</li>
<li>entretien</li>
<li>gestion de la configuration</li>
<li>op&eacute;rations</li>
<li>exp&eacute;rience d&rsquo;exploitation</li>
</ul></li>
<li>Culture de s&ucirc;ret&eacute;</li>
<li>Ampleur des activit&eacute;s posant un risque (pour la sant&eacute;, la s&ucirc;ret&eacute;, la s&eacute;curit&eacute; et l&rsquo;environnement) et n&eacute;cessitant des processus g&eacute;r&eacute;s et des contr&ocirc;les</li>
<li>Ampleur et n&eacute;cessit&eacute; de la participation humaine essentielle aux activit&eacute;s de l&rsquo;installation</li>
<li>Exploitation locale ou &agrave; distance</li>
<li>Nombre et type de barri&egrave;res physiques, techniques ou administratives</li>
<li>Contr&ocirc;le de l&rsquo;acc&egrave;s aux processus ou &agrave; l&rsquo;&eacute;quipement</li>
<li>Signification relative des points d&rsquo;int&eacute;gration entre les processus et les programmes</li>  	</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="2.2.2"></div>
<h4 id="sec2-2-2">2.2.2	Gestion de la performance humaine</h4>  <p>Le DSR Gestion de la performance humaine englobe les activit&eacute;s qui permettent d&rsquo;atteindre une performance humaine efficace gr&acirc;ce &agrave; l&rsquo;&eacute;laboration et &agrave; la mise en &oelig;uvre de processus qui garantissent que les employ&eacute;s des titulaires de permis sont pr&eacute;sents en nombre suffisant dans tous les secteurs de travail pertinents, et qu&rsquo;ils poss&egrave;dent les connaissances, les comp&eacute;tences, les proc&eacute;dures et les outils dont ils ont besoin pour ex&eacute;cuter leurs t&acirc;ches en toute s&eacute;curit&eacute;.</p>  <p><strong>Remarque :</strong> Le DSR Gestion de la performance humaine n&rsquo;est pas requis dans le cadre d&rsquo;une demande de permis de pr&eacute;paration de l&rsquo;emplacement. Ce DSR n&rsquo;est inclus que dans les demandes de permis de construction et de permis d&rsquo;exploitation.</p>  <p>Ce DSR couvre les domaines particuliers suivants :</p>
<ol>
<li>Programme de performance humaine</li>
<li>Formation du personnel</li>
<li>Accr&eacute;ditation du personnel</li>
<li>Examens d&rsquo;accr&eacute;ditation initiaux et tests de requalification</li>
<li>Organisation du travail et conception des t&acirc;ches</li>
<li>Aptitude au travail</li>  	</ol>  <p>Veuillez consulter la <a href="/fra/acts-and-regulations/regulatory-documents/index#R10">page Web sur les documents d&rsquo;application de la r&eacute;glementation</a> de la CCSN pour obtenir une liste des documents d&rsquo;application de la r&eacute;glementation et des normes CSA qui pourraient s&rsquo;appliquer au DSR Gestion de la performance humaine, selon l&rsquo;activit&eacute; propos&eacute;e et le type de permis demand&eacute;.</p>  <p>Dans le cadre de l&rsquo;&eacute;valuation de ce DSR et de sa priorit&eacute; relative, le demandeur devrait prendre en compte ce qui suit :</p>
<ol>
<li>Complexit&eacute; de l&rsquo;installation ou de l&rsquo;activit&eacute;, notamment
<ul className="list-lower-alpha">
<li>complexit&eacute; des processus g&eacute;r&eacute;s requis</li>
<li>complexit&eacute; de l&rsquo;organisation</li>
<li>mod&egrave;le op&eacute;rationnel</li>
<li>nombre et taille des sources radioactives ou nucl&eacute;aires pr&eacute;sentes</li>
<li>nombre de sources radioactives utilis&eacute;es simultan&eacute;ment</li>
<li>degr&eacute; d&rsquo;automatisation</li>
</ul></li>
<li>N&eacute;cessit&eacute; de mettre en place des processus g&eacute;r&eacute;s efficaces pour contr&ocirc;ler les dangers relev&eacute;s, notamment :
<ul className="list-lower-alpha">
<li>contr&ocirc;le du changement</li>
<li>contr&ocirc;le de la conception</li>
<li>contr&ocirc;le des documents</li>
<li>planification et contr&ocirc;le du travail</li>
<li>mesures correctives</li>
<li>entretien</li>
<li>gestion de la configuration</li>
<li>op&eacute;rations</li>
<li>exp&eacute;rience d&rsquo;exploitation</li>
</ul></li>
<li>Travailleurs, notamment :
<ul className="list-lower-alpha">
<li>complexit&eacute; des t&acirc;ches</li>
<li>comp&eacute;tence de la direction, du personnel technique et des autres employ&eacute;s</li>
<li>risque de p&eacute;nurie de personnel qualifi&eacute;, form&eacute; et chevronn&eacute;</li>
<li>nombre d&rsquo;employ&eacute;s</li>
<li>type, &eacute;tudes et disciplines</li>
</ul></li>
<li>Ampleur des activit&eacute;s posant un risque (pour la sant&eacute;, la s&ucirc;ret&eacute;, la s&eacute;curit&eacute; et l&rsquo;environnement) et n&eacute;cessitant une gestion des processus et des contr&ocirc;les</li>
<li>Ampleur et n&eacute;cessit&eacute; de la participation humaine essentielle aux activit&eacute;s de l&rsquo;installation</li>
<li>Probabilit&eacute; et incidence potentielle de l&rsquo;erreur humaine</li>
<li>Nombre et type de barri&egrave;res physiques, techniques ou administratives</li>
<li>Contr&ocirc;le de l&rsquo;acc&egrave;s aux processus ou &agrave; l&rsquo;&eacute;quipement</li>  	</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="2.2.3"></div>
<h4 id="sec2-2-3">2.2.3	Conduite de l&rsquo;exploitation</h4>  <p>Le DSR Conduite de l&rsquo;exploitation comprend un examen global de la conduite des activit&eacute;s autoris&eacute;es et des activit&eacute;s permettant d&rsquo;atteindre un rendement efficace.</p>  <p>Ce DSR couvre les domaines particuliers suivants :</p>
<ol>
<li>r&eacute;alisation des activit&eacute;s autoris&eacute;es</li>
<li>proc&eacute;dures</li>
<li>rapport et &eacute;tablissement de tendances</li>
<li>rendement de la gestion des arr&ecirc;ts</li>
<li>param&egrave;tres d&rsquo;exploitation s&ucirc;re</li>
<li>gestion des accidents graves et r&eacute;tablissement</li>
<li>gestion des accidents et r&eacute;tablissement</li>  	</ol>  <p>Veuillez consulter la <a href="/fra/acts-and-regulations/regulatory-documents/index#R11">page Web sur les documents d&rsquo;application de la r&eacute;glementation</a> de la CCSN pour obtenir une liste des documents d&rsquo;application de la r&eacute;glementation et des normes CSA qui pourraient s&rsquo;appliquer au DSR Conduite de l&rsquo;exploitation, selon l&rsquo;activit&eacute; propos&eacute;e et le type de permis demand&eacute;.</p>  <p>Dans le cadre de l&rsquo;&eacute;valuation de ce DSR et de sa priorit&eacute; relative, le demandeur devrait prendre en compte ce qui suit :</p>
<ol>
<li>disponibilit&eacute; et applicabilit&eacute; de l&rsquo;exp&eacute;rience d&rsquo;exploitation dans le contexte d&rsquo;installations ou d&rsquo;activit&eacute;s semblables</li>
<li>type d&rsquo;activit&eacute;s &agrave; r&eacute;aliser</li>
<li>complexit&eacute; des op&eacute;rations</li>
<li>nombre et type de barri&egrave;res physiques, techniques ou administratives</li>
<li>contr&ocirc;le de l&rsquo;acc&egrave;s aux processus ou &agrave; l&rsquo;&eacute;quipement</li>  	</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="2.2.4"></div>
<h4 id="sec2-2-4">2.2.4	Analyse de la s&ucirc;ret&eacute;</h4>  <p>Le DSR Analyse de la s&ucirc;ret&eacute; porte sur l&rsquo;analyse de s&ucirc;ret&eacute; &agrave; l&rsquo;appui du dossier de s&ucirc;ret&eacute; global de l&rsquo;installation. Une analyse de la s&ucirc;ret&eacute; consiste en une &eacute;valuation syst&eacute;matique des dangers potentiels associ&eacute;s au fonctionnement d&rsquo;une installation ou &agrave; la r&eacute;alisation d&rsquo;une activit&eacute; propos&eacute;e et sert &agrave; examiner l&rsquo;efficacit&eacute; des mesures et des strat&eacute;gies de pr&eacute;vention qui visent &agrave; r&eacute;duire les effets de ces dangers.</p>  <p>Ce DSR couvre les domaines particuliers suivants :</p>
<ol>
<li>analyse d&eacute;terministe de la s&ucirc;ret&eacute;</li>
<li>analyse des dangers</li>
<li>&eacute;tude probabiliste de s&ucirc;ret&eacute;</li>
<li>s&ucirc;ret&eacute;-criticit&eacute;</li>
<li>analyse des accidents graves</li>
<li>gestion des dossiers de s&ucirc;ret&eacute; (y compris les programmes de R-D)</li>  	</ol>  <p>Veuillez consulter la <a href="/fra/acts-and-regulations/regulatory-documents/index#R12">page Web sur les documents d&rsquo;application de la r&eacute;glementation</a> de la CCSN pour obtenir une liste des documents d&rsquo;application de la r&eacute;glementation et des normes CSA qui pourraient s&rsquo;appliquer au DSR Analyse de la s&ucirc;ret&eacute;, selon l&rsquo;activit&eacute; propos&eacute;e et le type de permis demand&eacute;.</p>  <p>Dans le cadre de l&rsquo;&eacute;valuation de ce DSR et de sa priorit&eacute; relative, le demandeur devrait prendre en compte ce qui suit :</p>
<ol>
<li>Nombre de dispositions int&eacute;gr&eacute;es dans la conception visant &agrave; r&eacute;duire le risque.</li>
<li>Nombre de syst&egrave;mes fonctionnels.</li>
<li>Nombre de syst&egrave;mes de s&ucirc;ret&eacute; actifs et leur interd&eacute;pendance.</li>
<li>Nombre de syst&egrave;mes de s&ucirc;ret&eacute; passifs.</li>
<li>D&eacute;pendance &agrave; l&rsquo;&eacute;gard de la performance humaine et des contr&ocirc;les administratifs pour limiter le risque.</li>
<li>Ensemble des activit&eacute;s posant un risque (pour la sant&eacute;, la s&ucirc;ret&eacute;, la s&eacute;curit&eacute; et l&rsquo;environnement).</li>
<li>Contr&ocirc;le des processus g&eacute;r&eacute;s requis.</li>
<li>Ampleur et n&eacute;cessit&eacute; de la participation humaine essentielle aux activit&eacute;s de l&rsquo;installation.</li>
<li>Probabilit&eacute; de d&eacute;faillance des structures, syst&egrave;mes et composants.</li>
<li>Cons&eacute;quences de la d&eacute;faillance des structures, syst&egrave;mes et composants.</li>
<li>Capacit&eacute; de g&eacute;rer les changements apport&eacute;s &agrave; la conception ou &agrave; l&rsquo;exploitation d&rsquo;une installation en raison d&rsquo;&eacute;v&eacute;nements, de l&rsquo;exp&eacute;rience d&rsquo;exploitation, de nouvelles connaissances, des exigences r&eacute;glementaires ou de production.</li>
<li>Possibilit&eacute; de r&eacute;actions chimiques, physiques et nucl&eacute;aires ind&eacute;sirables.</li>
<li>Nature et complexit&eacute; des syst&egrave;mes de s&ucirc;ret&eacute; visant &agrave; pr&eacute;venir les accidents.</li>
<li>Degr&eacute; d&rsquo;automatisation (dans le contexte de l&rsquo;att&eacute;nuation des &eacute;v&eacute;nements d&eacute;clencheurs potentiels ou de leurs cons&eacute;quences).</li>  	</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="2.2.5"></div>
<h4 id="sec2-2-5">2.2.5	Conception mat&eacute;rielle</h4>  <p><p>Le DSR Conception mat&eacute;rielle est li&eacute; aux activit&eacute;s qui ont une incidence sur la capacit&eacute; des structures, syst&egrave;mes et composants de respecter et de maintenir le fondement de leur conception, compte tenu des nouveaux renseignements qui apparaissent au fil du temps et des changements qui surviennent dans l&rsquo;environnement externe.</p>  <p>Ce DSR couvre les domaines particuliers suivants :</p>
<ol>
<li>Gouvernance de la conception</li>
<li>Caract&eacute;risation du site</li>
<li>Conception de l&rsquo;installation</li>
<li>Conception des structures</li>
<li>Conception des syst&egrave;mes</li>
<li>Conception des composants</li>  	</ol>  <p>Veuillez consulter la <a href="/fra/acts-and-regulations/regulatory-documents/index#R13">page Web sur les documents d&rsquo;application de la r&eacute;glementation</a> de la CCSN pour obtenir une liste des documents d&rsquo;application de la r&eacute;glementation et des normes CSA qui pourraient s&rsquo;appliquer au DSR Conception mat&eacute;rielle, selon l&rsquo;activit&eacute; propos&eacute;e et le type de permis demand&eacute;.</p>  <p>Dans le cadre de l&rsquo;&eacute;valuation de ce DSR et de sa priorit&eacute; relative, le demandeur devrait prendre en compte ce qui suit :</p>
<ol>
<li>Nombre de dispositions int&eacute;gr&eacute;es dans la conception visant &agrave; r&eacute;duire le risque.</li>
<li>Nombre de syst&egrave;mes fonctionnels.</li>
<li>Nombre de syst&egrave;mes de s&ucirc;ret&eacute; actifs et leur interd&eacute;pendance.</li>
<li>Nombre de syst&egrave;mes de s&ucirc;ret&eacute; passifs.</li>
<li>D&eacute;pendance &agrave; l&rsquo;&eacute;gard de la performance humaine ou des contr&ocirc;les administratifs pour limiter le risque.</li>
<li>Ensemble des activit&eacute;s posant un risque (pour la sant&eacute;, la s&ucirc;ret&eacute;, la s&eacute;curit&eacute; et l&rsquo;environnement).</li>
<li>Contr&ocirc;le des processus g&eacute;r&eacute;s requis.</li>
<li>Ampleur et n&eacute;cessit&eacute; de la participation humaine essentielle aux activit&eacute;s de l&rsquo;installation.</li>
<li>Probabilit&eacute; d&rsquo;une d&eacute;faillance des structures, des syst&egrave;mes et des composants multipli&eacute;e par les cons&eacute;quences.</li>
<li>Capacit&eacute; de g&eacute;rer les changements apport&eacute;s &agrave; la conception ou &agrave; l&rsquo;exploitation d&rsquo;une installation en raison d&rsquo;&eacute;v&eacute;nements, de l&rsquo;exp&eacute;rience d&rsquo;exploitation, de nouvelles connaissances, des exigences r&eacute;glementaires ou de production.</li>
<li>Exigences &agrave; l&rsquo;&eacute;gard du refroidissement des sources ou des mati&egrave;res radioactives.</li>
<li>Nombre et diversit&eacute; de l&rsquo;&eacute;quipement et des syst&egrave;mes.</li>
<li>Nature et complexit&eacute; des syst&egrave;mes de s&ucirc;ret&eacute; visant &agrave; pr&eacute;venir les accidents.</li>
<li>Degr&eacute; d&rsquo;automatisation (dans le contexte de l&rsquo;att&eacute;nuation des &eacute;v&eacute;nements d&eacute;clencheurs potentiels ou de leurs cons&eacute;quences).</li>  	</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="2.2.6"></div>
<h4 id="sec2-2-6">2.2.6	Aptitude fonctionnelle</h4>  <p>Le DSR Aptitude fonctionnelle est li&eacute; aux activit&eacute;s qui ont une incidence sur l&rsquo;&eacute;tat physique des structures, syst&egrave;mes et composants et vise &agrave; veiller &agrave; ce qu&rsquo;ils demeurent efficaces au fil du temps. Ce domaine comprend les programmes &eacute;tablis pour assurer la disponibilit&eacute; de l&rsquo;&eacute;quipement et sa capacit&eacute; &agrave; remplir au besoin les fonctions pour lesquelles il a &eacute;t&eacute; con&ccedil;u.</p>  <p><strong>Remarque :</strong> Le DSR Aptitude fonctionnelle n&rsquo;est pas requis dans le cadre d&rsquo;une demande de permis de pr&eacute;paration de l&rsquo;emplacement. Ce DSR n&rsquo;est inclus que dans les demandes de permis de construction et de permis d&rsquo;exploitation.</p>  <p>Ce DSR couvre les domaines particuliers suivants :</p>  <ol>
<li>Aptitude de l&rsquo;&eacute;quipement au service/Performance de l&rsquo;&eacute;quipement</li>
<li>Entretien</li>
<li>Int&eacute;grit&eacute; structurale</li>
<li>Gestion du vieillissement</li>
<li>Contr&ocirc;le chimique</li>
<li>Inspection et essais p&eacute;riodiques</li>  	</ol>  <p>Veuillez consulter la <a href="/fra/acts-and-regulations/regulatory-documents/index#R14">page Web sur les documents d&rsquo;application de la r&eacute;glementation</a> de la CCSN pour obtenir une liste des documents d&rsquo;application de la r&eacute;glementation et des normes CSA qui pourraient s&rsquo;appliquer au DSR Aptitude fonctionnelle, selon l&rsquo;activit&eacute; propos&eacute;e et le type de permis demand&eacute;.</p>  <p>Dans le cadre de l&rsquo;&eacute;valuation de ce DSR et de sa priorit&eacute; relative, le demandeur devrait prendre en compte ce qui suit :</p>
<ol>
<li>Nombre de dispositions int&eacute;gr&eacute;es dans la conception visant &agrave; r&eacute;duire le risque.</li>
<li>Nombre de syst&egrave;mes fonctionnels.</li>
<li>Nombre de syst&egrave;mes de s&ucirc;ret&eacute; actifs et leur interd&eacute;pendance.</li>
<li>Nombre de syst&egrave;mes de s&ucirc;ret&eacute; passifs.</li>
<li>Exigences techniques et administratives en mati&egrave;re d&rsquo;entretien visant &agrave; ce que les structures, syst&egrave;mes et composants continuent de fonctionner comme pr&eacute;vu.</li>  	</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="2.2.7"></div>
<h4 id="sec2-2-7">2.2.7	Radioprotection</h4>  <p>Le DSR Radioprotection traite de la mise en &oelig;uvre d&rsquo;un programme de radioprotection conform&eacute;ment au <em>R&egrave;glement sur la radioprotection</em>. Ce programme doit permettre de faire en sorte que les niveaux de contamination et les doses de rayonnement re&ccedil;ues par les personnes soient surveill&eacute;s, contr&ocirc;l&eacute;s et maintenus au niveau le plus bas qu&rsquo;il soit raisonnablement possible d&rsquo;atteindre (ALARA).</p>  <p>Ce DSR couvre les domaines particuliers suivants :</p>
<ol>
<li>Application du principe ALARA</li>
<li>Contr&ocirc;le des doses des travailleurs</li>
<li>Rendement du programme de radioprotection</li>
<li>Contr&ocirc;le des risques radiologiques</li>
<li>Dose estim&eacute;e au public</li>  	</ol>  <p>Veuillez consulter la <a href="/fra/acts-and-regulations/regulatory-documents/index#R15">page Web sur les documents d&rsquo;application de la r&eacute;glementation</a> de la CCSN pour obtenir une liste des documents d&rsquo;application de la r&eacute;glementation et des normes CSA qui pourraient s&rsquo;appliquer au DSR Radioprotection, selon l&rsquo;activit&eacute; propos&eacute;e et le type de permis demand&eacute;.</p>  <p>Dans le cadre de l&rsquo;&eacute;valuation de ce DSR et de sa priorit&eacute; relative, le demandeur devrait prendre en compte ce qui suit :</p>
<ol>
<li>Nombre de dispositions int&eacute;gr&eacute;es dans la conception visant &agrave; r&eacute;duire le risque.</li>
<li>Nombre de syst&egrave;mes fonctionnels.</li>
<li>Nombre de syst&egrave;mes de s&ucirc;ret&eacute; actifs et leur interd&eacute;pendance.</li>
<li>Nombre de syst&egrave;mes de s&ucirc;ret&eacute; passifs.</li>
<li>Magnitude des doses aux travailleurs pr&eacute;vues en fonction des limites r&eacute;glementaires et des seuils d&rsquo;intervention (application du principe ALARA &agrave; la r&eacute;duction de doses).</li>
<li>Cons&eacute;quence de la d&eacute;faillance d&rsquo;un programme du point de vue de la sant&eacute; et de la dose au travailleur.</li>
<li>Voies d&rsquo;exposition potentielles (ingestion, absorption et inhalation).</li>
<li>Nombre de sources de rayonnement.</li>
<li>Type de rayonnement pr&eacute;sent.</li>
<li>P&eacute;riode de d&eacute;sint&eacute;gration des sources la plus longue.</li>
<li>Mobilit&eacute; des sources.</li>
<li>Nombre escompt&eacute; de travailleurs pouvant &ecirc;tre expos&eacute;s au rayonnement.</li>
<li>Rejets pr&eacute;vus pouvant affecter le public ou l&rsquo;environnement.</li>  	</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="2.2.8"></div>
<h4 id="sec2-2-8">2.2.8	Sant&eacute; et s&eacute;curit&eacute; classiques</h4>  <p>Le DSR Sant&eacute; et s&eacute;curit&eacute; classiques traite de la mise en &oelig;uvre d&rsquo;un programme de gestion des dangers pour la s&eacute;curit&eacute; au travail et de protection du personnel et de l&rsquo;&eacute;quipement.</p>  <p>Ce DSR couvre les domaines particuliers suivants :</p>
<ol>
<li>Rendement</li>
<li>Pratiques</li>
<li>Sensibilisation</li>  	</ol>  <p>Veuillez consulter la <a href="/fra/acts-and-regulations/regulatory-documents/index#R16">page Web sur les documents d&rsquo;application de la r&eacute;glementation</a> de la CCSN pour obtenir une liste des documents d&rsquo;application de la r&eacute;glementation et des normes CSA qui pourraient s&rsquo;appliquer au DSR Sant&eacute; et s&eacute;curit&eacute; classiques, selon l&rsquo;activit&eacute; propos&eacute;e et le type de permis demand&eacute;.</p>  <p>Dans le cadre de l&rsquo;&eacute;valuation de ce DSR et de sa priorit&eacute; relative, le demandeur devrait prendre en compte ce qui suit :</p>
<ol>
<li>Nombre, gravit&eacute; et nature des dangers</li>
<li>Type et toxicit&eacute; des mati&egrave;res</li>
<li>P&eacute;riode pendant laquelle le danger demeurera pr&eacute;sent</li>
<li>Conditions de travail physiques</li>
<li>Type d&rsquo;op&eacute;rations (chargement du combustible sur le site, stockage des d&eacute;chets, etc.)</li>
<li>Dangers chimiques ou biologiques associ&eacute;s &agrave; la possession et &agrave; l&rsquo;utilisation de substances nucl&eacute;aires</li>  	</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="2.2.9"></div>
<h4 id="sec2-2-9">2.2.9	Protection de l&rsquo;environnement</h4>  <p>Le DSR Protection de l&rsquo;environnement porte sur les programmes qui servent &agrave; d&eacute;tecter, &agrave; contr&ocirc;ler et &agrave; surveiller tous les rejets de substances radioactives et dangereuses qui proviennent des installations ou des activit&eacute;s autoris&eacute;es ainsi que leurs effets sur l&rsquo;environnement.</p>  <p>Ce DSR couvre les domaines particuliers suivants :</p>
<ol>
<li>Contr&ocirc;le des effluents et des &eacute;missions (rejets)</li>
<li>Syst&egrave;me de gestion de l&rsquo;environnement</li>
<li>&Eacute;valuation et surveillance</li>
<li>Protection du public</li>
<li>&Eacute;valuation des risques environnementaux</li>  	</ol>  <p>Veuillez consulter la <a href="/fra/acts-and-regulations/regulatory-documents/index#R17">page Web sur les documents d&rsquo;application de la r&eacute;glementation</a> de la CCSN pour obtenir une liste des documents d&rsquo;application de la r&eacute;glementation et des normes CSA qui pourraient s&rsquo;appliquer au DSR Protection de l&rsquo;environnement, selon l&rsquo;activit&eacute; propos&eacute;e et le type de permis demand&eacute;.</p>  <p>Dans le cadre de l&rsquo;&eacute;valuation de ce DSR et de sa priorit&eacute; relative, le demandeur devrait prendre en compte ce qui suit :</p>
<ol>
<li>Proximit&eacute; d&rsquo;habitats sensibles et du public</li>
<li>Voies d&rsquo;exposition environnementales (air, eau, conditions du sol, r&eacute;sidus)</li>
<li>Type d&rsquo;op&eacute;rations (chargement du combustible sur le site, stockage des d&eacute;chets, etc.)</li>
<li>Caract&eacute;ristiques chimiques (types et concentration) des rejets</li>
<li>Volume des rejets.</li>
<li>Types d&rsquo;installation.</li>
<li>&Acirc;ge de l&rsquo;installation.</li>
<li>R&eacute;sultats de l&rsquo;&eacute;valuation des risques environnementaux (le cas &eacute;ch&eacute;ant).</li>  	</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="2.2.10"></div>
<h4 id="sec2-2-10">2.2.10	Gestion des urgences et protection-incendie</h4>  <p>Le DSR Gestion des urgences et protection-incendie englobe les plans de mesures d&rsquo;urgence et les programmes de pr&eacute;paration aux situations d&rsquo;urgence mis en place pour permettre de faire face aux urgences et aux conditions inhabituelles. Il comprend &eacute;galement les r&eacute;sultats de toute participation aux exercices.</p>  <p><strong>Remarque :</strong> Ce DSR comprend l&rsquo;intervention en cas d&rsquo;urgences classiques ainsi que la lutte contre les incendies. Les op&eacute;rations, la conception et l&rsquo;analyse dans le contexte de la protection incendie d&rsquo;une installation nucl&eacute;aire sont abord&eacute;es dans les DSR Conduite de l&rsquo;exploitation, Analyse de la s&ucirc;ret&eacute; et Conception mat&eacute;rielle appropri&eacute;s.</p>  <p>Ce DSR couvre les domaines particuliers suivants :</p>
<ol>
<li>Pr&eacute;paration et intervention en cas d&rsquo;urgence classique</li>
<li>Pr&eacute;paration et intervention en cas d&rsquo;urgence nucl&eacute;aire</li>
<li>Pr&eacute;paration et intervention en cas d&rsquo;incendie</li>  	</ol>  <p>Veuillez consulter la <a href="/fra/acts-and-regulations/regulatory-documents/index#R18">page Web sur les documents d&rsquo;application de la r&eacute;glementation</a> protection-incendie, selon l&rsquo;activit&eacute; propos&eacute;e et le type de permis demand&eacute;.</p>  <p>Dans le cadre de l&rsquo;&eacute;valuation de ce DSR et de sa priorit&eacute; relative, le demandeur devrait prendre en compte ce qui suit :</p>
<ol>
<li>Cons&eacute;quences sur le site</li>
<li>Types et toxicit&eacute; des mati&egrave;res</li>
<li>Quantit&eacute; de rejets accidentels de substances radiologiques, nucl&eacute;aires ou dangereuses (sup&eacute;rieure ou inf&eacute;rieure au seuil)</li>
<li>Capacit&eacute; du demandeur ou de la municipalit&eacute; (si elle est connue) d&rsquo;intervenir en cas d&rsquo;urgence.</li>
<li>Emplacement, notamment :
<ul className="list-lower-alpha">
<li>distance et densit&eacute; de population</li>
<li>infrastructure &agrave; proximit&eacute; (installations)</li>
<li>milieux sensibles</li>
</ul></li>  	</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="2.2.11"></div>
<h4 id="sec2-2-11">2.2.11	Gestion des d&eacute;chets</h4>  <p>Le DSR Gestion des d&eacute;chets englobe les programmes internes relatifs aux d&eacute;chets qui font partie des op&eacute;rations de l&rsquo;installation jusqu&rsquo;&agrave; ce que les d&eacute;chets en soient enlev&eacute;s puis transport&eacute;s vers une installation distincte de gestion des d&eacute;chets. Ce domaine comprend &eacute;galement la planification du d&eacute;classement.</p>  <p>Ce DSR couvre les domaines particuliers suivants :</p>
<ol>
<li>Caract&eacute;risation des d&eacute;chets</li>
<li>R&eacute;duction des d&eacute;chets</li>
<li>Pratiques de gestion des d&eacute;chets</li>
<li>Plans de d&eacute;classement</li>  	</ol>  <p>Veuillez consulter la <a href="/fra/acts-and-regulations/regulatory-documents/index#R19">page Web sur les documents d&rsquo;application de la r&eacute;glementation</a> de la CCSN pour obtenir une liste des documents d&rsquo;application de la r&eacute;glementation et des normes CSA qui pourraient s&rsquo;appliquer au DSR Gestion des d&eacute;chets, selon l&rsquo;activit&eacute; propos&eacute;e et le type de permis demand&eacute;.</p>  <p>Dans le cadre de l&rsquo;&eacute;valuation de ce DSR et de sa priorit&eacute; relative, le demandeur devrait prendre en compte ce qui suit :</p>
<ol>
<li>Types de d&eacute;chets (liquides, solides, m&eacute;lang&eacute;s)</li>
<li>Cat&eacute;gories de d&eacute;chets (faible, moyenne et haute)</li>
<li>Volume des d&eacute;chets</li>
<li>Traitement des d&eacute;chets sur le site</li>
<li>Stockage sur le site</li>
<li>Garanties financi&egrave;res</li>  	</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="2.2.12"></div>
<h4 id="sec2-2-12">2.2.12	S&eacute;curit&eacute;</h4>  <p>Le DSR S&eacute;curit&eacute; englobe les programmes n&eacute;cessaires pour mettre en &oelig;uvre et soutenir les exigences en mati&egrave;re de s&eacute;curit&eacute; stipul&eacute;es dans les r&egrave;glements, le permis, les ordres ou les attentes visant l&rsquo;installation ou l&rsquo;activit&eacute;.</p>  <p>Ce DSR couvre les domaines particuliers suivants :</p>
<ol>
<li>Installations et &eacute;quipement</li>
<li>Arrangements en mati&egrave;re d&rsquo;intervention</li>
<li>Pratiques en mati&egrave;re de s&eacute;curit&eacute;</li>
<li>Entra&icirc;nements et exercices</li>
<li>Cybers&eacute;curit&eacute;</li>  	</ol>  <p>Veuillez consulter la <a href="/fra/acts-and-regulations/regulatory-documents/index#R20">page Web sur les documents d&rsquo;application de la r&eacute;glementation</a> de la CCSN pour obtenir une liste des documents d&rsquo;application de la r&eacute;glementation et des normes CSA qui pourraient s&rsquo;appliquer au DSR S&eacute;curit&eacute;, selon l&rsquo;activit&eacute; propos&eacute;e et le type de permis demand&eacute;.</p>  <p>Dans le cadre de l&rsquo;&eacute;valuation de ce DSR et de sa priorit&eacute; relative, le demandeur devrait prendre en compte ce qui suit :</p>
<ol>
<li>Vol de mati&egrave;res (uranium hautement enrichi, uranium faiblement enrichi, uranium l&eacute;g&egrave;rement enrichi, plutonium, tritium, autres substances nucl&eacute;aires ou &eacute;quipement r&eacute;glement&eacute;, renseignements r&eacute;glement&eacute;s)</li>
<li>Sabotage (risque pour l&rsquo;installation ou le public)</li>
<li>Emplacement</li>  	</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="2.2.13"></div>
<h4 id="sec2-2-13">2.2.13	Garanties et non-prolif&eacute;ration</h4>  <p>Le DSR Garanties et non-prolif&eacute;ration englobe les programmes et les activit&eacute;s n&eacute;cessaires &agrave; la mise en &oelig;uvre r&eacute;ussie de l&rsquo;accord relatif &agrave; l&rsquo;application de garanties<sup id="fnb1-ref"><a className="fn-lnk" href="#fnb1"><span className="wb-inv">Footnote </span>1</a></sup> entre le Canada et l&rsquo;Agence internationale de l&rsquo;&eacute;nergie atomique (AIEA), ainsi que toutes les mesures d&eacute;coulant du <em>Trait&eacute; sur la non-prolif&eacute;ration des armes nucl&eacute;aires</em>.</p>  <p>Ce DSR couvre les domaines particuliers suivants :</p>
<ol>
<li>Contr&ocirc;le et comptabilit&eacute; des mati&egrave;res nucl&eacute;aires</li>
<li>Acc&egrave;s et assistance &agrave; l&rsquo;AIEA</li>
<li>Renseignements sur les activit&eacute;s et la conception</li>
<li>&Eacute;quipement en mati&egrave;re de garanties, confinement et surveillance</li>
<li>Exportations et importations</li>  	</ol>  <p>Veuillez consulter la <a href="/fra/acts-and-regulations/regulatory-documents/index#R21">page Web sur les documents d&rsquo;application de la r&eacute;glementation</a> de la CCSN pour obtenir une liste des documents d&rsquo;application de la r&eacute;glementation et des normes CSA qui pourraient s&rsquo;appliquer au DSR Garanties et non-prolif&eacute;ration, selon l&rsquo;activit&eacute; propos&eacute;e et le type de permis demand&eacute;.</p>  <p>Dans le cadre de l&rsquo;&eacute;valuation de ce DSR et de sa priorit&eacute; relative, le demandeur devrait prendre en compte ce qui suit :</p>
<ol>
<li>Types, quantit&eacute; et forme des mati&egrave;res nucl&eacute;aires</li>
<li>Mesures prises en vue du signalement, du confinement, de la v&eacute;rification et de la pr&eacute;sentation d&rsquo;autres renseignements requis conform&eacute;ment aux obligations internationales du Canada.</li>  	</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="2.2.14"></div>
<h4 id="sec2-2-14">2.2.14	Emballage et transport</h4>  <p>Le DSR Emballage et transport englobe les programmes visant l&rsquo;emballage et le transport s&ucirc;rs des substances nucl&eacute;aires &agrave; destination et en provenance de l&rsquo;installation autoris&eacute;e.</p>  <p>Le DSR Emballage et transport n&rsquo;est pas requis dans le cadre d&rsquo;une demande de permis de pr&eacute;paration de l&rsquo;emplacement. Ce DSR n&rsquo;est inclus que dans les demandes de permis de construction et de permis d&rsquo;exploitation.</p>  <p>Ce DSR couvre les domaines particuliers suivants :</p>
<ol>
<li>Conception et entretien des colis</li>
<li>Emballage et transport</li>
<li>Enregistrement aux fins d&rsquo;utilisation</li>  	</ol>  <p>Veuillez consulter la <a href="/fra/acts-and-regulations/regulatory-documents/index#R22">page Web sur les documents d&rsquo;application de la r&eacute;glementation</a> de la CCSN pour obtenir une liste des documents d&rsquo;application de la r&eacute;glementation et des normes CSA qui pourraient s&rsquo;appliquer au DSR Emballage et transport, selon l&rsquo;activit&eacute; propos&eacute;e et le type de permis demand&eacute;.</p>  <p>Dans le cadre de l&rsquo;&eacute;valuation de ce DSR et de sa priorit&eacute; relative, le demandeur devrait prendre en compte ce qui suit :</p>  <ol>
<li>Fr&eacute;quence des exp&eacute;ditions</li>
<li>Nombre de colis</li>
<li>Types et cat&eacute;gories des colis transport&eacute;s</li>
<li>Activit&eacute; et forme physique des mati&egrave;res radioactives</li>
<li>Fonctions des exp&eacute;diteurs et fonctions des destinataires</li>
<li>&Eacute;v&eacute;nements potentiels de contamination des colis</li>
<li>Type de r&eacute;gion dans laquelle l&rsquo;exp&eacute;dition transite, s&rsquo;il est connu (c&rsquo;est-&agrave;-dire, r&eacute;gion rurale par rapport &agrave; r&eacute;gion habit&eacute;e).</li>  	</ol>
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
<h3 id="sec2-3">2.3	Autres domaines de r&eacute;glementation</h3>  <p>Les autres domaines de r&eacute;glementation suivants doivent &ecirc;tre pris en compte dans le cadre d&rsquo;une demande de permis de pr&eacute;paration de l&rsquo;emplacement, de construction ou d&rsquo;exploitation d&rsquo;un PRM :</p>
<ol>
<li>Programme d&rsquo;information et de divulgation publiques</li>
<li>Mobilisation des Autochtones</li>
<li>Consultation intergouvernementale</li>
<li>Garanties financi&egrave;res</li>  	</ol>  <p>Veuillez consulter la <a href="/fra/acts-and-regulations/regulatory-documents/index#R23">page Web sur les documents d&rsquo;application de la r&eacute;glementation</a> pour obtenir une liste des documents d&rsquo;application de la r&eacute;glementation qui &eacute;tablissent les attentes et l&rsquo;orientation de la CCSN sur la mani&egrave;re de se conformer aux exigences r&eacute;glementaires et sur le contenu des documents soumis aux fins d&rsquo;autorisation dans le contexte des quatre volets susmentionn&eacute;s.</p>
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
<h2 id="appA">Annexe A : &Eacute;laboration du fondement d&rsquo;autorisation d&rsquo;une installation dot&eacute;e d&rsquo;un petit r&eacute;acteur modulaire</h2>  <p>Dans le cadre d&rsquo;une demande de permis de pr&eacute;paration de l&rsquo;emplacement, de construction ou d&rsquo;exploitation d&rsquo;une installation dot&eacute;e d&rsquo;un petit r&eacute;acteur modulaire (PRM), le demandeur doit se conformer aux exigences de la CCSN de fa&ccedil;on proportionnelle &agrave; la nouveaut&eacute;, &agrave; la complexit&eacute; et aux dangers potentiels que repr&eacute;sente l&rsquo;activit&eacute;.</p>   <p>Le cadre de r&eacute;glementation de la CCSN constitue une s&eacute;rie d&rsquo;exigences en constante &eacute;volution fond&eacute;es sur plus de 70 ans d&rsquo;exp&eacute;rience d&rsquo;exploitation et se veut neutre sur le plan technologique. Toutefois, &eacute;tant donn&eacute; que de nombreuses exigences ont &eacute;t&eacute; formul&eacute;es &agrave; l&rsquo;origine de mani&egrave;re &agrave; refl&eacute;ter l&rsquo;exp&eacute;rience des conceptions de r&eacute;acteurs refroidis &agrave; l&rsquo;eau, la CCSN reconna&icirc;t qu&rsquo;une m&eacute;thode graduelle ou d&rsquo;autres approches peuvent &ecirc;tre appliqu&eacute;es afin de se conformer &agrave; l&rsquo;intention de certaines exigences ou pour d&eacute;montrer de fa&ccedil;on probante que l&rsquo;application des exigences ne r&eacute;pondrait pas &agrave; l&rsquo;objectif sous-jacent ou n&rsquo;est pas n&eacute;cessaire &agrave; sa r&eacute;alisation.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appA.1"></div>
<h3 id="appA-1">A.1	Application d&rsquo;une m&eacute;thode graduelle</h3>  <p>La m&eacute;thode graduelle est une approche ou un processus pour lequel le niveau d&rsquo;analyse, l&rsquo;ampleur de la documentation et la port&eacute;e des mesures n&eacute;cessaires pour se conformer aux exigences sont proportionnels :</p>
<ol>
<li>Aux risques relatifs pour la sant&eacute;, la s&ucirc;ret&eacute;, la s&eacute;curit&eacute; et l&rsquo;environnement ainsi que la mise en &oelig;uvre des obligations internationales que le Canada a assum&eacute;es.</li>
<li>Aux caract&eacute;ristiques propres &agrave; une installation ou une activit&eacute;.</li>  	</ol>  <p>La Commission rend des d&eacute;cisions ind&eacute;pendantes et objectives pour s&rsquo;assurer que les risques soient att&eacute;nu&eacute;s jusqu&rsquo;&agrave; atteindre un niveau raisonnable, en tenant compte des exigences r&eacute;glementaires, des meilleurs renseignements obtenus de la recherche en mati&egrave;re de r&eacute;glementation ou des &eacute;tudes de tierces parties cr&eacute;dibles ainsi que de toute l&rsquo;information soumise par les demandeurs et les titulaires de permis, les parties int&eacute;ress&eacute;es, les groupes autochtones et le personnel de la CCSN. Ce dernier formule &agrave; l&rsquo;intention de la Commission des recommandations fond&eacute;es sur des &eacute;valuations approfondies des donn&eacute;es probantes.</p>   <p>La Commission reconna&icirc;t l&rsquo;importance du jugement professionnel, en particulier dans les domaines o&ugrave; il n&rsquo;existe pas de norme objective. Son ind&eacute;pendance et sa transparence sur le plan d&eacute;cisionnel sont appuy&eacute;es par des processus de r&eacute;glementation &eacute;quitables, ouverts, transparents et pr&eacute;visibles.</p>   <p>La CCSN ex&eacute;cute toutes ses activit&eacute;s dans le contexte d&rsquo;un processus d&eacute;cisionnel ax&eacute; sur le risque. Elle prend en compte l&rsquo;exp&eacute;rience d&rsquo;exploitation, le rendement du titulaire de permis, les &eacute;valuations de la s&ucirc;ret&eacute; et l&rsquo;avis de sp&eacute;cialistes afin d&rsquo;&eacute;laborer des exigences r&eacute;glementaires et de l&rsquo;orientation ainsi que planifier les activit&eacute;s d&rsquo;autorisation, d&rsquo;accr&eacute;ditation, d&rsquo;homologation et de conformit&eacute;. Au cours de l&rsquo;&eacute;laboration des exigences r&eacute;glementaires et de l&rsquo;orientation, les renseignements sur les risques sont pris en compte afin d&rsquo;&eacute;viter les risques d&eacute;raisonnables pour les personnes et l&rsquo;environnement.</p>  <p>La compr&eacute;hension des risques, y compris les incertitudes connexes, et les mesures prises pour veiller &agrave; ce que ces risques soient att&eacute;nu&eacute;s occupent une place importante dans la formulation de recommandations et la prise de d&eacute;cisions en mati&egrave;re de r&eacute;glementation. Les approches en mati&egrave;re de risque et d&rsquo;att&eacute;nuation doivent &ecirc;tre clairement d&eacute;finies et bien comprises afin que la Commission puisse prendre des d&eacute;cisions &eacute;clair&eacute;es. Il est essentiel de pr&eacute;senter des preuves de qualit&eacute; &agrave; l&rsquo;appui de ce processus.</p>  <p>Dans son &eacute;valuation, le personnel de la CCSN v&eacute;rifie si les solutions de rechange propos&eacute;es par le demandeur (voir la section A.2) :</p>
<ol>
<li>Satisfont aux exigences r&eacute;glementaires</li>
<li>R&eacute;pondent aux objectifs de s&ucirc;ret&eacute; g&eacute;n&eacute;raux</li>
<li>Sont conformes aux fonctions de s&ucirc;ret&eacute; fondamentales de &laquo; contr&ocirc;le, refroidissement, confinement &raquo;.</li>  	</ol>  <p>Tout en d&eacute;montrant, dans une mesure ad&eacute;quate :</p>
<ol>
<li>La d&eacute;fense en profondeur</li>
<li>Des marges de s&ucirc;ret&eacute; par rapport aux incertitudes &eacute;tablies dans le dossier de s&ucirc;ret&eacute; et aux dangers particuliers au cours du cycle de vie de l&rsquo;installation.</li>  	</ol>  <p>La CCSN applique le principe de proportionnalit&eacute;<sup id="fnb2-ref"><a className="fn-lnk" href="#fnb2"><span className="wb-inv">Footnote </span>2</a></sup> &agrave; tous les domaines de s&ucirc;ret&eacute; et de r&eacute;glementation (DSR) afin d&rsquo;effectuer un examen r&eacute;glementaire suffisamment approfondi des activit&eacute;s, en fonction du niveau de risque. La port&eacute;e de cette application sont principalement fonction de la nouveaut&eacute;, de la complexit&eacute; et des dangers potentiels que repr&eacute;sente l&rsquo;activit&eacute; ou l&rsquo;installation propos&eacute;e. L&rsquo;exhaustivit&eacute; de l&rsquo;examen, qui peut varier, est &eacute;galement d&eacute;termin&eacute;e selon :</p>
<ul>
<li>les &eacute;valuations techniques des documents pr&eacute;sent&eacute;s</li>
<li>les ant&eacute;c&eacute;dents du titulaire de permis visant le rendement en mati&egrave;re de s&ucirc;ret&eacute; (le cas &eacute;ch&eacute;ant).</li>
<li>les recherches pertinentes</li>
<li>les renseignements fournis par les parties, qui s&rsquo;av&egrave;rent pertinents dans le cadre des s&eacute;ances de la Commission</li>
<li>les activit&eacute;s nationales et internationales qui permettent d&rsquo;approfondir les connaissances en mati&egrave;re de s&ucirc;ret&eacute; nucl&eacute;aire et environnementale</li>
<li>la collaboration avec d&rsquo;autres organismes de r&eacute;glementation</li>  	</ul>  <p>Lorsque la CCSN &eacute;value les demandes fond&eacute;es sur une m&eacute;thode graduelle, elle s&rsquo;attarde particuli&egrave;rement &agrave; la d&eacute;monstration d&rsquo;un niveau de risque raisonnable. Elle doit notamment v&eacute;rifier que :</p>
<ul>
<li>les exigences r&eacute;glementaires sont respect&eacute;es.</li>
<li>les fonctions de s&ucirc;ret&eacute; fondamentales sont respect&eacute;es.</li>
<li>la d&eacute;fense en profondeur est d&eacute;montr&eacute;e.</li>
<li>les marges de s&ucirc;ret&eacute; sont appropri&eacute;es et tiennent compte des dangers particuliers au cours du cycle de vie de l&rsquo;installation.</li>  	</ul>  <p>Les attentes actuelles constituent un point de d&eacute;part de l&rsquo;examen r&eacute;glementaire, mais chaque dossier sera examin&eacute; selon ses propres particularit&eacute;s.</p>  <p>Des renseignements d&eacute;taill&eacute;s sur les techniques ax&eacute;es sur le risque et d&rsquo;autres m&eacute;thodes se trouvent dans le document CAN/CSA-IEC/ISO 31010-10, <em>Gestion des risques &ndash; Techniques d&rsquo;&eacute;valuation des risques</em>.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appA.2"></div>
<h3 id="appA-2">A.2	Proposition d&rsquo;autres approches</h3>  <p>La CCSN examinera d&rsquo;autres approches relatives aux exigences de son cadre de r&eacute;glementation lorsqu&rsquo;une ou plusieurs des conditions suivantes s&rsquo;appliquent :</p>
<ol>
<li>Une autre approche assurerait un niveau de s&ucirc;ret&eacute; &eacute;quivalent ou sup&eacute;rieur &agrave; celui de l&rsquo;approche &eacute;tablie dans les exigences.</li>
<li>L&rsquo;application d&rsquo;une ou de plusieurs exigences &eacute;tablies par la CCSN aboutirait &agrave; un conflit avec d&rsquo;autres r&egrave;gles ou exigences.</li>
<li>L&rsquo;application d&rsquo;une ou de plusieurs exigences &eacute;tablies par la CCSN ne r&eacute;pondrait pas &agrave; l&rsquo;objectif sous jacent ou n&rsquo;est pas n&eacute;cessaire &agrave; sa r&eacute;alisation.</li>  	</ol>  <p>Il doit &ecirc;tre d&eacute;montr&eacute; que toute autre approche donne des r&eacute;sultats &eacute;quivalents &agrave; ceux associ&eacute;s aux exigences applicables. Lorsque les caract&eacute;ristiques du risque sont assorties d&rsquo;incertitudes, la quantit&eacute; de donn&eacute;es probantes requises afin que le demandeur puisse faire la preuve d&rsquo;une d&eacute;cision cr&eacute;dible augmente. Parmi les donn&eacute;es probantes admissibles, notons les r&eacute;sultats d&rsquo;activit&eacute;s de recherche et de d&eacute;veloppement (R-D), la mod&eacute;lisation informatique et la prise en compte de l&rsquo;exp&eacute;rience d&rsquo;exploitation; le demandeur doit &eacute;galement d&eacute;montrer que les donn&eacute;es probantes sont pertinentes dans le contexte du projet vis&eacute;. Tous ces types de preuves doivent &ecirc;tre document&eacute;s et tra&ccedil;ables et faire l&rsquo;objet d&rsquo;une assurance de la qualit&eacute;. On encourage le promoteur qui envisage de pr&eacute;senter une demande de permis visant un PRM &agrave; communiquer avec la CCSN d&egrave;s le d&eacute;but du projet, bien avant de soumettre la demande, afin de bien comprendre les attentes de la CCSN &agrave; l&rsquo;&eacute;gard des syst&egrave;mes de gestion et de l&rsquo;assurance de la qualit&eacute;. Cela permettra d&rsquo;&eacute;tayer les travaux de R-D, de mani&egrave;re &agrave; appuyer toute demande de permis ult&eacute;rieure.</p>
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
<h2 id="appB">Annexe B : R&ocirc;le des activit&eacute;s pr&eacute;alables &agrave; l&rsquo;autorisation dans l&rsquo;&eacute;tablissement du fondement d&rsquo;autorisation d&rsquo;une installation dot&eacute;e d&rsquo;un petit r&eacute;acteur modulaire</h2>  <p>Il existe deux types de prise de contact pr&eacute;alable &agrave; l&rsquo;autorisation avec la CCSN :</p>
<ul>
<li>Le processus d&rsquo;examen de la conception du fournisseur (ECF).</li>
<li>Le processus d&rsquo;&eacute;tablissement d&rsquo;une strat&eacute;gie appropri&eacute;e d&rsquo;autorisation ax&eacute;e sur le risque.</li>  	</ul>  <p>La figure 1 illustre ces deux types d&rsquo;activit&eacute;s pr&eacute;alables &agrave; l&rsquo;autorisation au niveau conceptuel, y compris le chevauchement possible des deux processus, ainsi que l&rsquo;int&eacute;gration des facteurs relatifs &agrave; la m&eacute;thode graduelle.</p>  <p><strong>Figure 1 : Activit&eacute;s pr&eacute;alables &agrave; l&rsquo;autorisation visant l&rsquo;&eacute;tablissement du fondement d&rsquo;autorisation d&rsquo;une installation dot&eacute;e d&rsquo;un petit r&eacute;acteur modulaire</strong></p>
<div className="module-poster span-5">  	<img src="/images/regulatory-documents/regdoc-1-1-5/figure-1-fra.png" alt="" />
</div>  <div className="clear"></div>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appB.1"></div>
<h3 id="appB-1">B.1	R&ocirc;le de l&rsquo;examen de la conception du fournisseur dans le processus d&rsquo;autorisation</h3>  <p>Les PRM sont tr&egrave;s diff&eacute;rents sur le plan de la taille, de la conception et de l&rsquo;exploitation. Chaque conception de PRM est &eacute;galement assortie de divers degr&eacute;s d&rsquo;incertitude, qui peuvent &ecirc;tre pris en compte diff&eacute;remment dans des PRM semblables. Dans ce contexte, le fournisseur peut souhaiter consulter la CCSN avant d&rsquo;entamer le processus d&rsquo;autorisation afin de veiller &agrave; ce que sa conception soit conforme aux exigences canadiennes g&eacute;n&eacute;rales. La CCSN offre la possibilit&eacute; de r&eacute;aliser un examen de la conception du fournisseur (ECF) &agrave; cet &eacute;gard.</p>  <p>L&rsquo;ECF est distinct du processus d&rsquo;autorisation et vise principalement &agrave; informer le fournisseur de l&rsquo;acceptabilit&eacute; globale de la conception. Le processus a &eacute;galement pour but de cerner et de r&eacute;soudre, t&ocirc;t dans le processus, les probl&egrave;mes techniques et r&eacute;glementaires potentiels associ&eacute;s au processus de conception, plus particuli&egrave;rement ceux qui pourraient entra&icirc;ner des changements consid&eacute;rables &agrave; la conception ou au dossier de s&ucirc;ret&eacute;.</p>   <p>Dans le contexte d&rsquo;un ECF, la CCSN conclut avec le fournisseur une entente de services fond&eacute;e sur une port&eacute;e convenue des travaux. Cette entente permet en outre au fournisseur d&rsquo;acqu&eacute;rir des connaissances exhaustives &agrave; l&rsquo;&eacute;gard des exigences r&eacute;glementaires canadiennes et &agrave; la CCSN de mieux comprendre les technologies particuli&egrave;res pr&eacute;sent&eacute;es.</p>   <p>Le processus d&rsquo;ECF est divis&eacute; en trois phases exigeant chacune des renseignements techniques de plus en plus pointus; il est d&eacute;crit en d&eacute;tail dans le document d&rsquo;application de la r&eacute;glementation de la CCSN GD-385, <em>Examen de la conception d&rsquo;un r&eacute;acteur de fournisseur pr&eacute;alable &agrave; l&rsquo;autorisation</em>.</p>  <p>Bien que le processus d&rsquo;ECF soit distinct du processus d&rsquo;&eacute;tablissement d&rsquo;une strat&eacute;gie d&rsquo;autorisation appropri&eacute;e (d&eacute;crit &agrave; la section B.2), les r&eacute;sultats de chaque phase peuvent &eacute;tayer l&rsquo;&eacute;tablissement d&rsquo;une telle strat&eacute;gie. Le demandeur peut &eacute;galement se servir des r&eacute;sultats de l&rsquo;ECF dans le cadre du processus d&rsquo;autorisation.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appB.2"></div>
<h3 id="appB-2">B.2	Port&eacute;e du processus d&rsquo;&eacute;tablissement d&rsquo;une strat&eacute;gie d&rsquo;autorisation appropri&eacute;e pour un projet de PRM</h3>  <p>La CCSN est dot&eacute;e d&rsquo;un processus d&eacute;fini d&rsquo;&eacute;tablissement d&rsquo;une strat&eacute;gie d&rsquo;autorisation appropri&eacute;e &agrave; l&rsquo;&eacute;gard d&rsquo;une nouvelle technologie nucl&eacute;aire. Ce processus permet de veiller &agrave; ce qu&rsquo;une approche ax&eacute;e sur le risque soit syst&eacute;matiquement et uniform&eacute;ment appliqu&eacute;e &agrave; l&rsquo;&eacute;tablissement d&rsquo;une strat&eacute;gie d&rsquo;autorisation d&rsquo;une activit&eacute; ou d&rsquo;une installation novatrice fond&eacute;e sur une technologie nouvelle au Canada.</p>  <p>Ce processus est mis en &oelig;uvre avant la pr&eacute;sentation de toute demande de permis. Elle d&eacute;bute par une prise de contact de la CCSN avec un possible demandeur de permis de PRM et vise &agrave; &eacute;tablir une compr&eacute;hension commune de la nature de la conception propos&eacute;e et des particularit&eacute;s de l&rsquo;approche d&rsquo;exploitation. L&rsquo;information acquise dans le cadre d&rsquo;un ECF peut s&rsquo;av&eacute;rer tr&egrave;s utile et &ecirc;tre utilis&eacute;e dans le processus d&rsquo;autorisation &agrave; la discr&eacute;tion du demandeur.</p>   <p>L&rsquo;&eacute;tablissement d&rsquo;une strat&eacute;gie d&rsquo;autorisation d&eacute;bute par une analyse globale du projet, y compris l&rsquo;&eacute;tablissement de la port&eacute;e des r&egrave;glements applicables et du processus de r&eacute;glementation. Les documents d&rsquo;application de la r&eacute;glementation et les pratiques applicables, assortis de recommandations &agrave; l&rsquo;&eacute;gard de leur application ax&eacute;e sur le risque, sont &eacute;galement cern&eacute;s. Dans certains cas, le processus peut aboutir &agrave; une d&eacute;cision selon laquelle il n&rsquo;est pas n&eacute;cessaire d&rsquo;obtenir un permis en vertu de la <em>Loi sur la s&ucirc;ret&eacute; et la r&eacute;glementation nucl&eacute;aires</em>, par exemple, pour l&rsquo;essai d&rsquo;un circuit thermohydraulique ne n&eacute;cessitant aucune substance nucl&eacute;aire.</p>  <p>Ce processus aboutit &agrave; une strat&eacute;gie ax&eacute;e sur le risque appropri&eacute;e, dont se servira ultimement la CCSN pour mettre au point de l&rsquo;orientation additionnelle &agrave; l&rsquo;intention du demandeur sur la fa&ccedil;on de pr&eacute;parer une demande de permis visant un projet donn&eacute;. Le processus devrait &ecirc;tre it&eacute;ratif et comprendre plusieurs interactions entre la CCSN et le demandeur avant que la CCSN ne puisse mettre au point cette orientation additionnelle.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appB.2.1"></div>
<h4 id="appB-2-1">B.2.1	Processus d&rsquo;&eacute;tablissement d&rsquo;une strat&eacute;gie d&rsquo;autorisation appropri&eacute;e pour une nouvelle technologie nucl&eacute;aire</h4>	  <p>Le processus d&rsquo;&eacute;tablissement d&rsquo;une strat&eacute;gie d&rsquo;autorisation appropri&eacute;e pour une nouvelle technologie nucl&eacute;aire est divis&eacute; en quatre activit&eacute;s, comme suit :</p>
<ul className="list-bullet-none">
<li>Activit&eacute; A :	Pr&eacute;voir les activit&eacute;s et les dangers et &eacute;tablir une description pr&eacute;liminaire de ceux-ci.</li>
<li>Activit&eacute; B :	Effectuer une &eacute;valuation des risques et documenter la strat&eacute;gie propos&eacute;e &agrave; l&rsquo;&eacute;gard de la technologie nucl&eacute;aire novatrice.</li>
<li>Activit&eacute; C :	&Eacute;tablir la strat&eacute;gie d&rsquo;autorisation.</li>
<li>Activit&eacute; D :	Communiquer la strat&eacute;gie d&rsquo;autorisation par l&rsquo;interm&eacute;diaire d&rsquo;une lettre d&rsquo;orientation additionnelle.</li>  	</ul>  <p>Voici des descriptions d&eacute;taill&eacute;es des activit&eacute;s A, B, C et D.</p>
<h5>Activit&eacute; A : Pr&eacute;voir les activit&eacute;s et les dangers et &eacute;tablir une description pr&eacute;liminaire de ceux-ci</h5>  <p>Le promoteur fournit &agrave; la CCSN de l&rsquo;information conceptuelle &agrave; l&rsquo;&eacute;gard de la technologie. Il peut &eacute;galement soumettre l&rsquo;information d&eacute;coulant d&rsquo;un ECF facultatif. Voir la section B.3 pour obtenir de l&rsquo;orientation additionnelle sur les &eacute;l&eacute;ments &agrave; inclure dans la description pr&eacute;liminaire.</p>  <p>Une discussion a lieu avec le promoteur pour comprendre les activit&eacute;s pr&eacute;vues et les &eacute;ch&eacute;ances connexes. La communication avec le promoteur permet &agrave; la CCSN d&rsquo;obtenir les renseignements pr&eacute;liminaires requis &agrave; l&rsquo;&eacute;gard de l&rsquo;activit&eacute; ou de l&rsquo;installation propos&eacute;e au Canada.</p>
<h5>Activit&eacute; B : Effectuer une &eacute;valuation des risques et documenter la strat&eacute;gie propos&eacute;e &agrave; l&rsquo;&eacute;gard de la technologie nucl&eacute;aire novatrice</h5>  <p>Le personnel de la CCSN discute de la proposition du promoteur et r&eacute;dige un rapport sur la strat&eacute;gie d&rsquo;autorisation qui tient compte du risque. Ce rapport fait &eacute;tat de la compr&eacute;hension de la CCSN en ce qui concerne la proposition et les principaux domaines o&ugrave; les risques influent sur la nature des dispositions (ou des mesures de s&ucirc;ret&eacute; et de r&eacute;glementation) afin de satisfaire aux exigences des domaines de s&ucirc;ret&eacute; et de r&eacute;glementation (DSR) pertinents.</p>   <p>Cette activit&eacute; comprend les mesures suivantes :</p>
<ol>
<li>&Eacute;valuation des risques et des d&eacute;fis techniques</li>
<li>Demande de renseignements suppl&eacute;mentaires au promoteur, au besoin</li>
<li>Formulation d&rsquo;une recommandation quant &agrave; la n&eacute;cessit&eacute; d&rsquo;obtenir un permis en vertu de l&rsquo;article 26 (alin&eacute;as a &agrave; f) de la <em>Loi sur la s&ucirc;ret&eacute; et la r&eacute;glementation nucl&eacute;aires</em></li>
<li>D&eacute;termination des r&egrave;glements applicables, ainsi que des guides de pr&eacute;sentation d&rsquo;une demande de permis recommand&eacute;s, des documents d&rsquo;application de la r&eacute;glementation et des crit&egrave;res techniques les plus appropri&eacute;s</li>  	</ol>
<h5>Activit&eacute; C : &Eacute;tablir la strat&eacute;gie d&rsquo;autorisation</h5>  <p>Le personnel de la CCSN &eacute;tablit un rapport d&eacute;crivant la strat&eacute;gie d&rsquo;autorisation propos&eacute;e aux fins d&rsquo;approbation de la haute direction de la CCSN (ces &eacute;tapes se d&eacute;roulent selon des processus internes de la CCSN).</p>   <p>Si les recommandations du personnel formul&eacute;es dans le rapport sont approuv&eacute;es, la d&eacute;cision &agrave; l&rsquo;&eacute;gard de la strat&eacute;gie d&rsquo;autorisation propre au dossier est officiellement document&eacute;e dans une lettre d&rsquo;orientation additionnelle qui est ensuite envoy&eacute;e au demandeur.</p>
<h5>Activit&eacute; D : Communiquer la strat&eacute;gie d&rsquo;autorisation par l&rsquo;interm&eacute;diaire d&rsquo;une lettre d&rsquo;orientation additionnelle</h5>  <p>&Agrave; la suite de la prise de d&eacute;cision par la direction de la CCSN &agrave; l&rsquo;Activit&eacute; C, une lettre d&rsquo;orientation additionnelle est r&eacute;dig&eacute;e &agrave; l&rsquo;intention du promoteur. Le demandeur peut alors mettre &agrave; profit cette orientation parall&egrave;lement &agrave; la section 2 du pr&eacute;sent document en vue de pr&eacute;parer une demande de permis.</p>  <p>La lettre d&rsquo;orientation additionnelle :</p>
<ul>
<li>Comprend un aper&ccedil;u des r&egrave;glements applicables, des guides de pr&eacute;sentation d&rsquo;une demande de permis ainsi que des renseignements &agrave; fournir &agrave; l&rsquo;appui d&rsquo;une demande de permis, et nomme un point de contact unique &agrave; la CCSN.</li>
<li>Peut &eacute;galement fournir des renseignements sur ce qui suit : applicabilit&eacute; d&rsquo;une &eacute;valuation environnementale; consultation du public et des Autochtones; facteurs relatifs &agrave; la responsabilit&eacute; nucl&eacute;aire, s&eacute;curit&eacute; et garanties; &eacute;ch&eacute;ances d&rsquo;autorisation potentielles.</li>  	</ul>  <p>La lettre d&rsquo;orientation additionnelle ne constitue pas une d&eacute;claration d&rsquo;autorisation et n&rsquo;entravera pas le processus d&eacute;cisionnel de la Commission.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appB.3"></div>
<h3 id="appB-3">B.3	Description pr&eacute;liminaire des activit&eacute;s et des dangers</h3>  <p>La description pr&eacute;liminaire des activit&eacute;s et des dangers fournie par le promoteur devrait souligner les activit&eacute;s et dangers pr&eacute;vus au cours de la vie d&rsquo;un projet, dans une mesure qui permettra au personnel de la CCSN d&rsquo;entamer une &eacute;valuation technique afin de documenter les facteurs dont il faut tenir compte sur le plan de la r&eacute;glementation et de proposer une strat&eacute;gie d&rsquo;autorisation.</p>  <p>La description pr&eacute;liminaire devrait &ecirc;tre suffisamment d&eacute;taill&eacute;e pour permettre au personnel de la CCSN :</p>  <ul>
<li>De comprendre la nature des activit&eacute;s, y compris les dangers qu&rsquo;elles pourraient poser pour les travailleurs, le public et l&rsquo;environnement.</li>
<li>De passer &agrave; l&rsquo;activit&eacute; B (effectuer une &eacute;valuation des risques et documenter la strat&eacute;gie propos&eacute;e &agrave; l&rsquo;&eacute;gard de la technologie nucl&eacute;aire novatrice), qui vise &agrave; documenter les facteurs dont il faut tenir compte sur le plan de la r&eacute;glementation, &agrave; proposer les exigences applicables au projet et &agrave; &eacute;laborer une &eacute;bauche de la strat&eacute;gie d&rsquo;autorisation.</li>  	</ul>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="appB.3.1"></div>
<h4 id="appB-3-1">B.3.1	Information requise dans la description pr&eacute;liminaire</h4>	  <p>La description pr&eacute;liminaire vise &agrave; fournir les renseignements n&eacute;cessaires au personnel de la CCSN pour documenter les facteurs r&eacute;glementaires dont il faut tenir compte et proposer une strat&eacute;gie d&rsquo;autorisation appropri&eacute;e.</p>  <p>Elle vise &eacute;galement &agrave; ce que le personnel de la CCSN re&ccedil;oive suffisamment d&rsquo;information pour se faire une id&eacute;e g&eacute;n&eacute;rale de l&rsquo;activit&eacute; propos&eacute;e et des dangers associ&eacute;s.</p>   <p>Les crit&egrave;res pr&eacute;cis s&rsquo;inscrivent dans les trois cat&eacute;gories de sujets suivantes :</p>
<ol>
<li>Description de l&rsquo;objectif du projet et des principales activit&eacute;s &agrave; r&eacute;aliser.</li>
<li>Description de l&rsquo;activit&eacute; ou de l&rsquo;installation nucl&eacute;aire.</li>
<li>Estimation de la quantit&eacute;, de la forme, de l&rsquo;origine et du volume des d&eacute;chets radioactifs ou dangereux.</li>  	</ol>  <p>Ces trois sujets sont abord&eacute;s de fa&ccedil;on plus approfondie aux sections suivantes.</p>
<h5>Description de l&rsquo;objectif du projet et des principales activit&eacute;s &agrave; r&eacute;aliser</h5>  <p>Le projet doit englober tout le cycle de vie jusqu&rsquo;&agrave; la fin du d&eacute;classement. Il n&rsquo;est pas obligatoire d&rsquo;inscrire des dates pr&eacute;cises; le promoteur devrait plut&ocirc;t indiquer les p&eacute;riodes relatives de la r&eacute;alisation de chaque phase et des s&eacute;ries d&rsquo;activit&eacute;s principales.</p>  <p>Les objectifs du projet et les principales activit&eacute;s &agrave; r&eacute;aliser devraient, au niveau conceptuel, comprendre une description de ce qui suit :</p>
<ul>
<li>Le but ultime du projet, y compris les principaux objectifs escompt&eacute;s en fonction du rendement du projet (par exemple, une installation de recherche visant &agrave; &eacute;tayer le dossier de s&ucirc;ret&eacute; d&rsquo;une future installation de d&eacute;monstration).</li>
<li>L&rsquo;exp&eacute;rience d&rsquo;exploitation acquise dans le cadre d&rsquo;autres types de projets semblables (le cas &eacute;ch&eacute;ant).</li>
<li>Les &eacute;ch&eacute;ances pr&eacute;liminaires des principales phases du projet qui ont &eacute;t&eacute; &eacute;tablies, par exemple :
<ul>
<li>documents pour la demande de permis</li>
<li>pr&eacute;paration de l&rsquo;emplacement</li>
<li>construction et installation</li>
<li>mise en service</li>
<li>exploitation</li>
<li>d&eacute;classement</li>
<li>fermeture du site</li>
</ul></li>
<li>Les principales activit&eacute;s du projet et les dispositions organisationnelles cern&eacute;es pour chaque phase du projet.</li>  	</ul>
<h5>Description de l&rsquo;activit&eacute; ou de l&rsquo;installation nucl&eacute;aire</h5>   <p>La description devrait comprendre, le cas &eacute;ch&eacute;ant, les renseignements suivants au niveau conceptuel :</p>
<ul>
<li>Les plans propos&eacute;s pour l&rsquo;installation nucl&eacute;aire, montrant sa configuration, l&rsquo;emplacement de ses composants ainsi que l&rsquo;emplacement des zones adjacentes susceptibles d&rsquo;&ecirc;tre occup&eacute;es par des personnes.</li>
<li>L&rsquo;emplacement potentiel de l&rsquo;installation (par exemple, sur un campus universitaire, en tant qu&rsquo;installation industrielle pr&egrave;s d&rsquo;une r&eacute;gion habit&eacute;e, dans une r&eacute;gion peu peupl&eacute;e).</li>
<li>Les principaux structures et syst&egrave;mes, de mani&egrave;re &agrave; ce que l&rsquo;exploitation humaine des structures et syst&egrave;mes puisse &ecirc;tre comprise par le personnel de la CCSN et favoriser ainsi la compr&eacute;hension de la description, par le promoteur, des dangers potentiels en fonction de tous les &eacute;tats de fonctionnement de l&rsquo;installation.</li>
<li>Les dispositions organisationnelles propos&eacute;es relatives &agrave; la r&eacute;alisation des activit&eacute;s &agrave; autoriser.</li>
<li>L&rsquo;estimation de la quantit&eacute;, de la forme, de l&rsquo;origine et du volume des d&eacute;chets radioactifs ou des d&eacute;chets dangereux que l&rsquo;activit&eacute; vis&eacute;e par la demande peut g&eacute;n&eacute;rer, y compris les d&eacute;chets qui peuvent &ecirc;tre stock&eacute;s, g&eacute;r&eacute;s, trait&eacute;s, &eacute;vacu&eacute;s ou &eacute;limin&eacute;s sur les lieux de l&rsquo;activit&eacute; ainsi que la m&eacute;thode propos&eacute;e pour les g&eacute;rer, les &eacute;vacuer ou les &eacute;liminer.</li>
<li>Les effets n&eacute;fastes possibles de l&rsquo;environnement sur le projet (par exemple, un survol des principaux &eacute;v&eacute;nements externes naturels ou anthropologiques pris en compte).</li>
<li>Les principales &eacute;volutions ou modifications sur le plan de la configuration pr&eacute;vues pour l&rsquo;installation et qui pourraient avoir une incidence sur le dossier de s&ucirc;ret&eacute;.</li>
<li>Une description des d&eacute;faillances et des accidents radiologiques et non radiologiques qui pourraient survenir &agrave; l&rsquo;installation &agrave; chaque phase du projet, ainsi que :
<ul>
<li>les mesures pr&eacute;ventives envisag&eacute;es et les mesures d&rsquo;att&eacute;nuation, comme les travaux de surveillance, d&rsquo;urgence, de nettoyage ou de remise en &eacute;tat du milieu environnant, qui pourraient s&rsquo;av&eacute;rer n&eacute;cessaires pendant ou imm&eacute;diatement apr&egrave;s les sc&eacute;narios de d&eacute;faillance ou d&rsquo;accident hypoth&eacute;tique</li>
<li>la source, la quantit&eacute;, le m&eacute;canisme, la voie, le d&eacute;bit, la forme et les caract&eacute;ristiques des contaminants et autres mati&egrave;res (physiques et chimiques) qui risquent d&rsquo;&ecirc;tre rejet&eacute;s dans le milieu environnant pendant les d&eacute;faillances et les accidents hypoth&eacute;tiques</li>
<li>les cons&eacute;quences potentielles pour la sant&eacute; des travailleurs et du public et pour l&rsquo;environnement</li>
</ul></li>
<li>Les rejets environnementaux conceptuels.</li>  	</ul>
<h5>Estimation de la quantit&eacute;, de la forme, de l&rsquo;origine et du volume des d&eacute;chets radioactifs ou dangereux</h5>  <p>La description pr&eacute;liminaire devrait comprendre, au niveau conceptuel, les d&eacute;chets radioactifs ou dangereux qui seront g&eacute;n&eacute;r&eacute;s :</p>
<ul>
<li>durant l&rsquo;exploitation normale.</li>
<li>&agrave; la suite modifications consid&eacute;rables pr&eacute;vues &agrave; la configuration de l&rsquo;installation au cours de son cycle de vie.</li>
<li>&agrave; la suite du d&eacute;classement.</li>  	</ul>  <p>Pour chaque type de d&eacute;chets g&eacute;n&eacute;r&eacute;, les renseignements suivants devraient &ecirc;tre fournis :</p>
<ul>
<li>l&rsquo;endroit d&rsquo;o&ugrave; les d&eacute;chets proviendront et la fa&ccedil;on dont ils seront g&eacute;n&eacute;r&eacute;s</li>
<li>les quantit&eacute;s estim&eacute;es de chaque type de d&eacute;chets g&eacute;n&eacute;r&eacute;s</li>
<li>les dangers associ&eacute;s &agrave; la manipulation et au stockage</li>
<li>les m&eacute;thodes envisag&eacute;es de gestion et d&rsquo;&eacute;vacuation ou d&rsquo;&eacute;limination des d&eacute;chets.</li>  	</ul>
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
<div className="wb-fnote" role="note">
<section>
<h2 id="endnotes" className="mrgn-tp-md">Notes de bas de page</h2>
<dl>
<dt>Note de bas de page 1</dt>
<dd id="fnb1">
<p>En 1972, le Canada a conclu un accord relatif aux garanties exhaustif avec l&rsquo;AIEA (AIEA INFCIRC/164, <em>Accord entre le gouvernement du Canada et l&rsquo;Agence internationale de l&rsquo;&eacute;nergie atomique relatif &agrave; l&rsquo;application de garanties dans le cadre du Trait&eacute; sur la non-prolif&eacute;ration des armes nucl&eacute;aires). En 2000, un protocole additionnel (IAEA INFCIRC/164/Add.1, Protocol additionnel &agrave; l&rsquo;INFCIRC/164</em>) est entr&eacute; en vigueur.</p>
<p className="fn-rtn"><a href="#fnb1-ref"><span className="wb-inv">Return to footnote </span>1<span className="wb-inv"> referrer</span></a></p>
</dd>
<dt>Note de bas de page 2</dt>
<dd id="fnb2">
<p>Dans ce contexte, les trois termes suivants sont interchangeables : graduelle, ax&eacute;e sur le risque et proportionnelle.</p>
<p className="fn-rtn"><a href="#fnb2-ref"><span className="wb-inv">Return to footnote </span>2<span className="wb-inv"> referrer</span></a></p>
</dd>
</dl>
</section>  </div>  <br />
<h2 id="glossary">Glossaire</h2>  <p>Les d&eacute;finitions des termes utilis&eacute;s dans le pr&eacute;sent document figurent dans le <a href="http://www.nuclearsafety.gc.ca/pubs_catalogue/uploads_fre/REGDOC-3-6-Glossary-of-CNSC-Terminology-fra.pdf">REGDOC-3.6, <em>Glossaire de la CCSN</em></a>, qui comprend des termes et des d&eacute;finitions tir&eacute;s de la <a href="http://laws-lois.justice.gc.ca/fra/lois/N-28.3/"><em>Loi sur la s&ucirc;ret&eacute; et la r&eacute;glementation nucl&eacute;aires</em></a>, de ses r&egrave;glements d&rsquo;application ainsi que des documents d&rsquo;application de la r&eacute;glementation et d&rsquo;autres publications de la CCSN. Le REGDOC-3.6 est fourni &agrave; titre de r&eacute;f&eacute;rence et pour information.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Haut de la page</a></p>
</div>
<div className="clear"></div>
<h2>S&eacute;ries de documents d&rsquo;application de la r&eacute;glementation de la CCSN</h2>  <p>Les installations et activit&eacute;s du secteur nucl&eacute;aire du Canada sont r&eacute;glement&eacute;es par la Commission canadienne de s&ucirc;ret&eacute; nucl&eacute;aire (CCSN). En plus de la <em>Loi sur la s&ucirc;ret&eacute; et la r&eacute;glementation nucl&eacute;aires </em>et de ses r&egrave;glements d&#39;application, il pourrait y avoir des exigences en mati&egrave;re de conformit&eacute; &agrave; d&#39;autres outils de r&eacute;glementation, comme les documents d&#39;application de la r&eacute;glementation ou les normes.</p>
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
<li>3.4 D&eacute;lib&eacute;rations de la Commission</li>
<li>3.5 Processus et pratiques de la CCSN</li>
<li>3.6 Glossaire de termes de la CCSN</li>
</ul></li>
</ul>
<p><strong>Remarque&nbsp;:</strong> Les s&eacute;ries de documents d&#39;application de la r&eacute;glementation pourraient &ecirc;tre modifi&eacute;es p&eacute;riodiquement par la CCSN. Chaque s&eacute;rie susmentionn&eacute;e peut comprendre plusieurs documents d&#39;application de la r&eacute;glementation. Pour obtenir la plus r&eacute;cente liste de documents d&#39;application de la r&eacute;glementation, veuillez consulter le <a href="/fra/acts-and-regulations/regulatory-documents/index">site Web de la CCSN</a>.</p>

                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }